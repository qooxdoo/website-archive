(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.layout.VSplit","qx.theme":"qx.theme.Classic"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.4"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.layout.VSplit-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"f3d9e0f64bde"},
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
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['f3d9e0f64bde']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Zone"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"EEE, d.M.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan.","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb.","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr.","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Juni","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"Tag","dayperiod":"Tageshälfte","era":"Epoche","hour":"Stunde","minute":"Minute","month":"Monat","quotationEnd":"“","quotationStart":"„","second":"Sekunde","week":"Woche","weekday":"Wochentag","year":"Jahr","zone":"Zone"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Zone"},"en_US":{},"fr":{"alternateQuotationEnd":"›","alternateQuotationStart":"‹","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"EEE d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"EEE d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"jour","dayperiod":"cadran","era":"ère","hour":"heure","minute":"minute","month":"mois","quotationEnd":"»","quotationStart":"«","second":"seconde","week":"semaine","weekday":"jour de la semaine","year":"année","zone":"fuseau horaire"},"fr_FR":{}},"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};
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
}
if(qxvariants&&qxvariants["qx.debug"]=="off"){be=false;
}return be;
})(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bf,bg,bh,name,bi){var bl=bh.prototype;
var bk=new Function;
bk.prototype=bl;
var bj=new bk;
bf.prototype=bj;
bj.name=bj.classname=name;
bj.basename=bi;
bg.base=bf.superclass=bh;
bg.self=bf.constructor=bj.constructor=bf;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bm){return bm.__count__;
},"default":function(bn){var length=0;

for(var bo in bn){length++;
}return length;
}})[(({}).__count__==0)?A:j],objectMergeWith:function(bp,bq,br){if(br===undefined){br=true;
}
for(var bs in bq){if(br||bp[bs]===undefined){bp[bs]=bq[bs];
}}return bp;
},__a:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bt){var bu=[];
var bw=Object.prototype.hasOwnProperty;

for(var bx in bt){if(bw.call(bt,bx)){bu.push(bx);
}}var bv=qx.Bootstrap.__a;

for(var i=0,a=bv,l=a.length;i<l;i++){if(bw.call(bt,a[i])){bu.push(a[i]);
}}return bu;
},"default":function(by){var bz=[];
var bA=Object.prototype.hasOwnProperty;

for(var bB in by){if(bA.call(by,bB)){bz.push(bB);
}}return bz;
}})[typeof (Object.keys)==
L?B:
(function(){for(var bC in {toString:1}){return bC;
}})()!==m?u:j],getKeysAsString:function(bD){var bE=qx.Bootstrap.getKeys(bD);

if(bE.length==0){return p;
}return g+bE.join(C)+g;
},__b:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bF,self,bG){var bH=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bI=Array.prototype.slice.call(arguments,0,arguments.length);
return bF.apply(self,bH.concat(bI));
};
},firstUp:function(bJ){return bJ.charAt(0).toUpperCase()+bJ.substr(1);
},firstLow:function(bK){return bK.charAt(0).toLowerCase()+bK.substr(1);
},getClass:function(bL){var bM=Object.prototype.toString.call(bL);
return (qx.Bootstrap.__b[bM]||bM.slice(8,-1));
},isString:function(bN){return (bN!==null&&(typeof bN===F||qx.Bootstrap.getClass(bN)==d||bN instanceof String||(!!bN&&!!bN.$$isString)));
},isArray:function(bO){return (bO!==null&&(bO instanceof Array||(bO&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bO.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bO)==f||(!!bO&&!!bO.$$isArray)));
},isObject:function(bP){return (bP!==undefined&&bP!==null&&qx.Bootstrap.getClass(bP)==h);
},isFunction:function(bQ){return qx.Bootstrap.getClass(bQ)==c;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bR,name){while(bR){if(bR.$$properties&&bR.$$properties[name]){return bR.$$properties[name];
}bR=bR.superclass;
}return null;
},hasProperty:function(bS,name){return !!qx.Bootstrap.getPropertyDefinition(bS,name);
},getEventType:function(bT,name){var bT=bT.constructor;

while(bT.superclass){if(bT.$$events&&bT.$$events[name]!==undefined){return bT.$$events[name];
}bT=bT.superclass;
}return null;
},supportsEvent:function(bU,name){return !!qx.Bootstrap.getEventType(bU,name);
},getByInterface:function(bV,bW){var bX,i,l;

while(bV){if(bV.$$implements){bX=bV.$$flatImplements;

for(i=0,l=bX.length;i<l;i++){if(bX[i]===bW){return bV;
}}}bV=bV.superclass;
}return null;
},hasInterface:function(bY,ca){return !!qx.Bootstrap.getByInterface(bY,ca);
},getMixins:function(cb){var cc=[];

while(cb){if(cb.$$includes){cc.push.apply(cc,cb.$$flatIncludes);
}cb=cb.superclass;
}return cc;
},$$logs:[],debug:function(cd,ce){qx.Bootstrap.$$logs.push([z,arguments]);
},info:function(cf,cg){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ch,ci){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(cj,ck){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(cl){}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",T="10.0",S="10.4",R="2003",Q=")",P="iPhone",O="android",N="unix",M="ce",L="7",K="SymbianOS",q="MacPPC",r="iPod",o="\.",p="Win64",m="linux",n="me",k="Macintosh",l="Android",s="Windows",t="ios",A="vista",y="(",E="win",C="Linux",G="BSD",F="iPad",v="X11",J="xp",I="symbian",H="qx.bom.client.OperatingSystem",u="g",w="Win32",x="osx",z="|",B="nt4",D="MacIntel";
qx.Bootstrap.define(H,{statics:{getName:function(){var U=navigator&&navigator.platform;

if(!U){return j;
}
if(U.indexOf(s)!=-1||U.indexOf(w)!=-1||U.indexOf(p)!=-1){return E;
}else if(U.indexOf(k)!=-1||U.indexOf(q)!=-1||U.indexOf(D)!=-1){return x;
}else if(U.indexOf(r)!=-1||U.indexOf(P)!=-1||U.indexOf(F)!=-1){return t;
}else if(U.indexOf(C)!=-1){return m;
}else if(U.indexOf(v)!=-1||U.indexOf(G)!=-1){return N;
}else if(U.indexOf(l)!=-1){return O;
}else if(U.indexOf(K)!=-1){return I;
}return j;
},__e:{"Windows NT 6.1":L,"Windows NT 6.0":A,"Windows NT 5.2":R,"Windows NT 5.1":J,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":B,"Win 9x 4.90":n,"Windows CE":M,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":S,"Mac OS X 10.4":S,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":T,"Mac OS X 10.0":T},getVersion:function(){var X=[];

for(var W in this.__e){X.push(W);
}var Y=new RegExp(y+X.join(z).replace(/\./g,o)+Q,u);
var V=Y.exec(navigator.userAgent);

if(V&&V[1]){return qx.bom.client.OperatingSystem.__e[V[1]];
}return j;
}}});
})();
(function(){var n="-",m="",l="qx.bom.client.Locale",k="LOCALE",j="\n",h="VARIANT",g="Please check the API documentation of qx.core.Environment.",f="android",e="\nTrace:",d="' of '",a="'is deprecated: ",b="The constant '";
qx.Bootstrap.define(l,{statics:{LOCALE:"",VARIANT:"",getLocale:function(){var o=qx.bom.client.Locale.__f();
var p=o.indexOf(n);

if(p!=-1){o=o.substr(0,p);
}return o;
},getVariant:function(){var q=qx.bom.client.Locale.__f();
var s=m;
var r=q.indexOf(n);

if(r!=-1){s=q.substr(r+1);
}return s;
},__f:function(){var t=(navigator.userLanguage||navigator.language||m);
if(qx.bom.client.OperatingSystem.getName()==f){var u=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(u){t=u[0];
}}return t.toLowerCase();
}},defer:function(v){v.LOCALE=v.getLocale();
v.VARIANT=v.getVariant();
if(qx.Bootstrap.DEBUG){var w=[k,h];

for(var i=0;i<w.length;i++){if(v.__defineGetter__){var x=v[w[i]];
v.__defineGetter__(w[i],qx.Bootstrap.bind(function(y,c){var z=b+y+d+v.classname+a+g;

if(qx.dev&&qx.dev.StackTrace){z+=e+qx.dev.StackTrace.getStackTrace().join(j);
}qx.Bootstrap.warn(z);
return c;
},v,w[i],x));
}}}}});
})();
(function(){var l="",k="audio",j="video",i='video/ogg; codecs="theora, vorbis"',h="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",g="http://www.w3.org/TR/SVG11/feature#BasicStructure",f='audio',d='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",b="audio/mpeg",z="org.w3c.dom.svg",y="DOMTokenList",x="1.1",w="audio/x-wav",u="audio/ogg",t="audio/x-aiff",s="qx.bom.client.Html",r='video',q="mshtml",p="label",n='video/webm; codecs="vp8, vorbis"',o="1.0",m="audio/basic";
qx.Bootstrap.define(s,{statics:{getWebWorker:function(){return window.Worker!=null;
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
(function(){var p="",o="silverlight",n="wmv",m="mshtml",l="quicktime",k="divx",j="Windows Media",h="qx.bom.client.Plugin",g="WMPlayer.OCX.7",f="Silverlight",c="QuickTimeCheckObject.QuickTimeCheck.1",e="QuickTime",d="npdivx.DivXBrowserPlugin.1",b="DivX Web Player",a="AgControl.AgControl";
qx.Bootstrap.define(h,{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},__g:{quicktime:{plugin:e,control:c},wmv:{plugin:j,control:g},divx:{plugin:b,control:d},silverlight:{plugin:f,control:a}},getQuicktimeVersion:function(){var q=qx.bom.client.Plugin.__g[l];
return qx.bom.client.Plugin.__h(q.control,q.plugin);
},getWindowsMediaVersion:function(){var r=qx.bom.client.Plugin.__g[n];
return qx.bom.client.Plugin.__h(r.control,r.plugin);
},getDivXVersion:function(){var s=qx.bom.client.Plugin.__g[k];
return qx.bom.client.Plugin.__h(s.control,s.plugin);
},getSilverlightVersion:function(){var t=qx.bom.client.Plugin.__g[o];
return qx.bom.client.Plugin.__h(t.control,t.plugin);
},getQuicktime:function(){var u=qx.bom.client.Plugin.__g[l];
return qx.bom.client.Plugin.__i(u.control,u.plugin);
},getWindowsMedia:function(){var v=qx.bom.client.Plugin.__g[n];
return qx.bom.client.Plugin.__i(v.control,v.plugin);
},getDivX:function(){var w=qx.bom.client.Plugin.__g[k];
return qx.bom.client.Plugin.__i(w.control,w.plugin);
},getSilverlight:function(){var x=qx.bom.client.Plugin.__g[o];
return qx.bom.client.Plugin.__i(x.control,x.plugin);
},__h:function(y,z){var A=qx.bom.client.Plugin.__i(y,z);
if(!A){return p;
}if(qx.bom.client.Engine.getName()==m){var B=new ActiveXObject(y);

try{var E=B.versionInfo;

if(E!=undefined){return E;
}E=B.version;

if(E!=undefined){return E;
}E=B.settings.version;

if(E!=undefined){return E;
}}catch(G){return p;
}return p;
}else{var F=navigator.plugins;
var D=/([0-9]\.[0-9])/g;

for(var i=0;i<F.length;i++){var C=F[i];

if(C.name.indexOf(z)!==-1){if(D.test(C.name)||D.test(C.description)){return RegExp.$1;
}else{return p;
}return p;
}}}},__i:function(H,I){if(qx.bom.client.Engine.getName()==m){var J=window.ActiveXObject;

if(!J){return false;
}
try{new ActiveXObject(H);
}catch(L){return false;
}return true;
}else{var K=navigator.plugins;

if(!K){return false;
}var name;

for(var i=0;i<K.length;i++){name=K[i].name;

if(name.indexOf(I)!==-1){return true;
}}return false;
}}}});
})();
(function(){var l="",k="function",j="gecko",h=".",g="[object Opera]",f="[^\\.0-9]",e="4.0",d="\nTrace:",b="1.9.0.0",a="WEBKIT",I="Please check the API documentation of qx.core.Environment.",H="9.0",G="UNKNOWN_VERSION",F="GECKO",E="8.0",D="FULLVERSION",C="Gecko",B="OPERA",A="AppleWebKit/",z="'is deprecated: ",s="NAME",t="UNKNOWN_ENGINE",q="MSHTML",r="VERSION",o="DOCUMENT_MODE",p="' of '",m="opera",n="mshtml",u="\n",v="The constant '",x="webkit",w="5.0",y="qx.bom.client.Engine";
qx.Bootstrap.define(y,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,getVersion:function(){var M=window.navigator.userAgent;
var K=l;

if(qx.bom.client.Engine.__j()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(M)){K=RegExp.$1+h+RegExp.$2;

if(RegExp.$3!=l){K+=h+RegExp.$3;
}}}else if(qx.bom.client.Engine.__k()){if(/AppleWebKit\/([^ ]+)/.test(M)){K=RegExp.$1;
var L=RegExp(f).exec(K);

if(L){K=K.slice(0,L.index);
}}}else if(qx.bom.client.Engine.__l()){if(/rv\:([^\);]+)(\)|;)/.test(M)){K=RegExp.$1;
}}else if(qx.bom.client.Engine.__m()){if(/MSIE\s+([^\);]+)(\)|;)/.test(M)){K=RegExp.$1;
if(K<8&&/Trident\/([^\);]+)(\)|;)/.test(M)){if(RegExp.$1==e){K=E;
}else if(RegExp.$1==w){K=H;
}}}}else{var J=window.qxFail;

if(J&&typeof J===k){K=J().FULLVERSION;
}else{K=b;
qx.Bootstrap.warn("Unsupported client: "+M+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return K;
},getName:function(){var name;

if(qx.bom.client.Engine.__j()){name=m;
}else if(qx.bom.client.Engine.__k()){name=x;
}else if(qx.bom.client.Engine.__l()){name=j;
}else if(qx.bom.client.Engine.__m()){name=n;
}else{var N=window.qxFail;

if(N&&typeof N===k){name=N().NAME;
}else{name=j;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__j:function(){return window.opera&&Object.prototype.toString.call(window.opera)==g;
},__k:function(){return window.navigator.userAgent.indexOf(A)!=-1;
},__l:function(){return window.controllers&&window.navigator.product===C;
},__m:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}},defer:function(O){O.NAME=O.getName();
O.FULLVERSION=O.getVersion();

if(O.FULLVERSION==l){O.UNKNOWN_VERSION=true;
}
if(O.__j()){O.OPERA=true;

if(O.FULLVERSION==l){O.FULLVERSION="9.6.0";
}}else if(O.__k()){O.WEBKIT=true;

if(O.FULLVERSION==l){O.FULLVERSION="525.26";
}}else if(O.__l()){O.GECKO=true;

if(O.FULLVERSION==l){O.FULLVERSION="1.9.0.0";
}}else if(O.__m()){O.MSHTML=true;

if(document.documentMode){O.DOCUMENT_MODE=document.documentMode;
}}else{var P=window.qxFail;

if(P&&typeof P===k){if(P().NAME){O[P().NAME.toUpperCase()]=true;
}}else{O.GECKO=true;
O.UNKNOWN_ENGINE=true;
O.UNKNOWN_VERSION=true;
}}O.VERSION=parseFloat(O.FULLVERSION);
if(qx.Bootstrap.DEBUG){var Q=[s,D,r,B,a,F,q,t,G,o];

for(var i=0;i<Q.length;i++){if(O.__defineGetter__){var R=O[Q[i]];
O.__defineGetter__(Q[i],qx.Bootstrap.bind(function(S,c){var T=v+S+p+O.classname+z+I;

if(qx.dev&&qx.dev.StackTrace){T+=d+qx.dev.StackTrace.getStackTrace().join(u);
}qx.Bootstrap.warn(T);
return c;
},O,Q[i],R));
}}}}});
})();
(function(){var l="",k="mshtml",j="msie",h=")(/| )([0-9]+\.[0-9])",g="(",f="ce",e="CSS1Compat",d="android",b="operamini",a="\nTrace:",M="'is deprecated: ",L="Please check the API documentation of qx.core.Environment.",K="mobile chrome",J="iemobile",I="FULLVERSION",H="opera mobi",G="Mobile Safari",F="UNKNOWN",E="operamobile",D="ie",s="mobile safari",t="IEMobile|Maxthon|MSIE",q="NAME",r="qx.bom.client.Browser",o="opera mini",p="VERSION",m="' of '",n="opera",u="TITLE",v="\n",y="Opera Mini|Opera Mobi|Opera",x="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",A="The constant '",z="webkit",C="5.0",B="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",w="Mobile/";
qx.Bootstrap.define(r,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",getName:function(){var Q=navigator.userAgent;
var P=new RegExp(g+qx.bom.client.Browser.__n+h);
var O=Q.match(P);

if(!O){return l;
}var name=O[1].toLowerCase();
var N=qx.bom.client.Engine.getName();

if(N===z){if(name===d){name=K;
}else if(Q.indexOf(G)!==-1||Q.indexOf(w)!==-1){name=s;
}}else if(N===k){if(name===j){name=D;
if(qx.bom.client.OperatingSystem.getVersion()===f){name=J;
}}}else if(N===n){if(name===H){name=E;
}else if(name===o){name=b;
}}return name;
},getVersion:function(){var U=navigator.userAgent;
var T=new RegExp(g+qx.bom.client.Browser.__n+h);
var S=U.match(T);

if(!S){return l;
}var name=S[1].toLowerCase();
var R=S[3];
if(U.match(/Version(\/| )([0-9]+\.[0-9])/)){R=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==k){R=qx.bom.client.Engine.getVersion();

if(name===j&&qx.bom.client.OperatingSystem.getVersion()==f){R=C;
}}return R;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==k&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==e;
}},__n:{"webkit":x,"gecko":B,"mshtml":t,"opera":y}[qx.bom.client.Engine.getName()]},defer:function(V){V.NAME=V.getName();
V.FULLVERSION=V.getVersion();
V.VERSION=parseFloat(V.FULLVERSION);
V.TITLE=V.NAME+" "+V.VERSION;

if(V.NAME!==l){V.UNKNOWN=false;
}if(qx.Bootstrap.DEBUG){var W=[I,p,q,u,F];

for(var i=0;i<W.length;i++){if(V.__defineGetter__){var X=V[W[i]];
V.__defineGetter__(W[i],qx.Bootstrap.bind(function(Y,c){var ba=A+Y+m+V.classname+M+L;

if(qx.dev&&qx.dev.StackTrace){ba+=a+qx.dev.StackTrace.getStackTrace().join(v);
}qx.Bootstrap.warn(ba);
return c;
},V,W[i],X));
}}}}});
})();
(function(){var k="background",j="linear-gradient(0deg, white 0%, red 100%)",h="placeholder",g="content",f="div",e="OTextOverflow",d="MozBorderRadius",c="qx.bom.client.Css",b='m11',a="input",x="-moz-linear-gradient(0deg, white 0%, red 100%)",w="gradient",v="MozBoxShadow",u="-o-linear-gradient(0deg, white 0%, red 100%)",t="borderRadius",s='WebKitCSSMatrix',r="WebkitBorderRadius",q="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",p="mshtml",o="WebkitBoxShadow",m="textOverflow",n="boxShadow",l="border";
qx.Bootstrap.define(c,{statics:{getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==p||!qx.bom.client.Browser.getQuirksMode();
return content?g:l;
},getTextOverflow:function(){return m in document.documentElement.style||e in document.documentElement.style;
},getPlaceholder:function(){var i=document.createElement(a);
return h in i;
},getBorderRadius:function(){return t in document.documentElement.style||d in document.documentElement.style||r in document.documentElement.style;
},getBoxShadow:function(){return n in document.documentElement.style||v in document.documentElement.style||o in document.documentElement.style;
},getTranslate3d:function(){return s in window&&b in new WebKitCSSMatrix();
},getGradients:function(){var y;

try{y=document.createElement(f);
}catch(A){y=document.createElement();
}var z=[q,x,u,j];

for(var i=0;i<z.length;i++){try{y.style[k]=z[i];

if(y.style[k].indexOf(w)!=-1){return true;
}}catch(B){}}return false;
}}});
})();
(function(){var c="notification",b="PhoneGap",a="qx.bom.client.PhoneGap";
qx.Bootstrap.define(a,{statics:{getPhoneGap:function(){return b in window;
},getNotification:function(){return c in navigator;
}}});
})();
(function(){var l=".",k="$1",j="",h="object",g="Shockwave Flash",f="undefined",e="REVISION",d="qx.bom.client.Flash",b="\nTrace:",a="ShockwaveFlash.ShockwaveFlash.7",H="STRICT_SECURITY_MODEL",G="osx",F="FULLVERSION",E="10.0.12",D="'is deprecated: ",C="win",B="ShockwaveFlash.ShockwaveFlash.6",A="VERSION",z="$version",y="' of '",s="EXPRESSINSTALL",t="6.0.65",q="mshtml",r="AVAILABLE",o="boolean",p="\n",m="always",n="Please check the API documentation of qx.core.Environment.",u="9.0.151",v="ShockwaveFlash.ShockwaveFlash",x="The constant '",w=",";
qx.Bootstrap.define(d,{statics:{AVAILABLE:false,FULLVERSION:"0.0.0",REVISION:"0",VERSION:0.0,EXPRESSINSTALL:false,STRICT_SECURITY_MODEL:false,isAvailable:function(){return parseFloat(qx.bom.client.Flash.getVersion())>0;
},getVersion:function(){if(qx.bom.client.Engine.getName()==q){if(!window.ActiveXObject){return j;
}var K=[0,0,0];
var J=false;

try{var L=new ActiveXObject(a);
}catch(N){try{var L=new ActiveXObject(B);
K=[6,0,21];
L.AllowScriptAccess=m;
}catch(O){if(K[0]==6){J=true;
}}
if(!J){try{L=new ActiveXObject(v);
}catch(P){}}}
if(!J&&typeof L==h){var I=L.GetVariable(z);

if(typeof I!=f){I=I.split(" ")[1].split(w);
K[0]=parseInt(I[0],10);
K[1]=parseInt(I[1],10);
K[2]=parseInt(I[2],10);
}}return K.join(l);
}else{if(!navigator.plugins||typeof navigator.plugins[g]!==h){return j;
}var K=[0,0,0];
var M=navigator.plugins[g].description;

if(typeof M!=f){M=M.replace(/^.*\s+(\S+\s+\S+$)/,k);
K[0]=parseInt(M.replace(/^(.*)\..*$/,k),10);
K[1]=parseInt(M.replace(/^.*\.(.*)\s.*$/,k),10);
K[2]=/r/.test(M)?parseInt(M.replace(/^.*r(.*)$/,k),10):0;
}return K.join(l);
}},getExpressInstall:function(){var R=qx.bom.client.Flash.getVersion();

if(R==j){return false;
}var Q=qx.bom.client.OperatingSystem.getName();
return (Q==C||Q==G)&&qx.bom.client.Flash.__o(t,R);
},getStrictSecurityModel:function(){var S=qx.bom.client.Flash.getVersion();

if(S==j){return false;
}var T=S.split(l);

if(T[0]<10){return qx.bom.client.Flash.__o(u,S);
}else{return qx.bom.client.Flash.__o(E,S);
}},_cachedSupportsVersion:{},supportsVersion:function(U){if(typeof this._cachedSupportsVersion[U]===o){return this._cachedSupportsVersion[U];
}else{var X=U.split(l);
var W=this.FULLVERSION.split(l);

for(var i=0;i<X.length;i++){var V=parseInt(W[i],10)-parseInt(X[i],10);

if(V>0){return (this._cachedSupportsVersion[U]=true);
}else if(V<0){return (this._cachedSupportsVersion[U]=false);
}}return (this._cachedSupportsVersion[U]=true);
}},__o:function(Y,ba){var bd=Y.split(l);
var bc=ba||qx.bom.client.Flash.getVersion();
bc=bc.split(l);

for(var i=0;i<bd.length;i++){var bb=parseInt(bc[i],10)-parseInt(bd[i],10);

if(bb>0){return true;
}else if(bb<0){return false;
}}return true;
}},defer:function(be){be.FULLVERSION=be.getVersion();
be.VERSION=parseFloat(be.FULLVERSION);
be.AVAILABLE=be.isAvailable();
var bh=be.FULLVERSION.split(l);
be.REVISION=bh[bh.length-1];
be.STRICT_SECURITY_MODEL=be.getStrictSecurityModel();
be.EXPRESSINSTALL=be.getExpressInstall();
if(qx.Bootstrap.DEBUG){var bf=[F,A,r,e,H,s];

for(var i=0;i<bf.length;i++){if(be.__defineGetter__){var bg=be[bf[i]];
be.__defineGetter__(bf[i],qx.Bootstrap.bind(function(bi,c){var bj=x+bi+y+be.classname+D+n;

if(qx.dev&&qx.dev.StackTrace){bj+=b+qx.dev.StackTrace.getStackTrace().join(p);
}qx.Bootstrap.warn(bj);
return c;
},be,bf[i],bg));
}}}}});
})();
(function(){var a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
}}});
})();
(function(){var m="ipod",l="g",k="xbox",j="pc",i="\.",h="(",g=")",f="iPhone",e="|",d="qx.bom.client.Device",a="wii",c="ipad",b="ds";
qx.Bootstrap.define(d,{statics:{__p:{"iPod":m,"iPad":c,"iPhone":f,"PSP":"psp","PLAYSTATION 3":"ps3","Nintendo Wii":a,"Nintendo DS":b,"XBOX":"xbox","Xbox":k},getName:function(){var p=[];

for(var o in this.__p){p.push(o);
}var q=new RegExp(h+p.join(e).replace(/\./g,i)+g,l);
var n=q.exec(navigator.userAgent);

if(n&&n[1]){return qx.bom.client.Device.__p[n[1]];
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
(function(){var o="on",n="off",m="os.name",l="html.storage.local",k="plugin.silverlight.version",j="os.version",h="html.xul",g="plugin.windowsmedia.version",f="html.video.ogg",e="default",bF="html.xpath",bE="plugin.flash.express",bD="plugin.windowsmedia",bC="html.webworker",bB="phonegap",bA="browser.quirksmode",bz="browser.name",by="plugin.silverlight",bx="event.pointer",bw="qx.aspects",v="plugin.gears",w="io.ssl",t="css.translate3d",u="html.classlist",r="locale.variant",s="css.textoverflow",p="qx.debug",q="html.video",D="plugin.flash",E="css.boxshadow",W="event.touch",S="html.storage.session",bf="plugin.divx",ba="css.boxmodel",br="plugin.flash.version",bl="qx.allowUrlSettings",L="css.gradients",bv="browser.documentmode",bt="html.vml",bs="html.canvas",J="html.audio",O="html.audio.mp3",Q="css.borderradius",U="ecmascript.objectcount",X="locale",bb="html.audio.au",bh="html.geolocation",bn="qx.mobile.emulatetouch",x="qx.dynlocale",y="plugin.quicktime",N="engine.version",be="io.maxrequests",bd="engine.name",bc="html.audio.aif",bj="html.audio.ogg",bi="qx.mobile.nativescroll",Y="plugin.divx.version",bg="html.video.h264",a="css.placeholder",bm="plugin.quicktime.version",z="|",A="browser.version",T="io.xhr",b="html.audio.wav",d="device.name",I="phonegap.notification",B="html.svg",C="html.dataurl",G="html.video.webm",V="plugin.flash.strictsecurity",bp="qx.core.Environment",bo="qx.debug.databinding",P="true",bq="qxenv",K="qx.propertyDebugLevel",bk="qx.dynamicmousewheel",F=":",H="false",c="&",R="qx.allowUrlVariants",M="qx.bom.htmlarea.HtmlArea.debug",bu="qx.globalErrorHandling";
qx.Bootstrap.define(bp,{statics:{_checks:{},_asyncChecks:{},__q:{},get:function(bG){if(this.__q[bG]!=undefined){return this.__q[bG];
}var bH=this._checks[bG];

if(bH){var bI=bH();
this.__q[bG]=bI;
return bI;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bG+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},getAsync:function(bJ,bK,self){var bM=this;

if(this.__q[bJ]!=undefined){window.setTimeout(function(){bK.call(self,bM.__q[bJ]);
},0);
return;
}var bL=this._asyncChecks[bJ];

if(bL){bL(function(bN){bM.__q[bJ]=bN;
bK.call(self,bN);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bJ+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(bO,bP){return this.__r(this.get(bO),bP);
},selectAsync:function(bQ,bR,self){this.getAsync(bQ,function(bS){var bT=this.__r(bQ,bR);
bT.call(self,bS);
},this);
},__r:function(bU,bV){var bX=bV[bU];

if(bV.hasOwnProperty(bU)){return bX;
}for(var bW in bV){if(bW.indexOf(z)!=-1){var bY=bW.split(z);

for(var i=0;i<bY.length;i++){if(bY[i]==bU){return bV[bW];
}}}}if(bX===true&&bV[o]!=undefined){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("The check '"+bU+"' is a boolean value. "+"Please change your select map from 'on' to 'true'.");
qx.Bootstrap.trace(this);
}return bV[o];
}if(bX===false&&bV[n]!=undefined){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("The check '"+bU+"' is a boolean value. "+"Please change your select map from 'off' to 'false'.");
qx.Bootstrap.trace(this);
}return bV[n];
}
if(bV[e]!==undefined){return bV[e];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+bU+'" ('+(typeof bU)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(bV)+'] found, and no default ("default") given');
}},invalidateCacheKey:function(ca){delete this.__q[ca];
},add:function(cb,cc){if(this._checks[cb]==undefined){if(cc instanceof Function){this._checks[cb]=cc;
}else{this._checks[cb]=this.__u(cc);
}}},addAsync:function(cd,ce){if(this._checks[cd]==undefined){this._asyncChecks[cd]=ce;
}},_initDefaultQxValues:function(){this.add(bl,function(){return false;
});
this.add(R,function(){return false;
});
this.add(K,function(){return 0;
});
this.add(p,function(){return true;
});
this.add(bw,function(){return false;
});
this.add(x,function(){return true;
});
this.add(bn,function(){return false;
});
this.add(bi,function(){return false;
});
this.add(bk,function(){return true;
});
this.add(bo,function(){return false;
});
},__s:function(){if(window.qxsettings){for(var cg in window.qxsettings){var cf=window.qxsettings[cg];

if(cg==M||cg==bu){if(cf==o){cf=true;
}else if(cf==n){cf=false;
}}this._checks[cg]=this.__u(cf);
}}if(window.qxvariants){for(var cg in window.qxvariants){var cf=window.qxvariants[cg];

if(cg==bw||cg==p||cg==x||cg==bn||cg==bi){if(cf==o){cf=true;
}else if(cf==n){cf=false;
}}this._checks[cg]=this.__u(cf);
}}if(qx&&qx.$$environment){for(var cg in qx.$$environment){var cf=qx.$$environment[cg];
this._checks[cg]=this.__u(cf);
}}},__t:function(){if(window.document&&window.document.location){var ch=window.document.location.search.slice(1).split(c);

for(var i=0;i<ch.length;i++){var cj=ch[i].split(F);

if(cj.length!=3||cj[0]!=bq){continue;
}var ck=cj[1];
var ci=decodeURIComponent(cj[2]);
if(ci==P){ci=true;
}else if(ci==H){ci=false;
}else if(/^(\d|\.)+$/.test(ci)){ci=parseFloat(ci);
}this._checks[ck]=this.__u(ci);
}}},__u:function(cl){return qx.Bootstrap.bind(function(cm){return cm;
},null,cl);
},useCheck:function(cn){return true;
},_initChecksMap:function(){if(this.useCheck(N)){this._checks[N]=qx.bom.client.Engine.getVersion;
}
if(this.useCheck(bd)){this._checks[bd]=qx.bom.client.Engine.getName;
}if(this.useCheck(bz)){this._checks[bz]=qx.bom.client.Browser.getName;
}
if(this.useCheck(A)){this._checks[A]=qx.bom.client.Browser.getVersion;
}
if(this.useCheck(bv)){this._checks[bv]=qx.bom.client.Browser.getDocumentMode;
}
if(this.useCheck(bA)){this._checks[bA]=qx.bom.client.Browser.getQuirksMode;
}if(this.useCheck(d)){this._checks[d]=qx.bom.client.Device.getName;
}if(this.useCheck(X)){this._checks[X]=qx.bom.client.Locale.getLocale;
}
if(this.useCheck(r)){this._checks[r]=qx.bom.client.Locale.getVariant;
}if(this.useCheck(m)){this._checks[m]=qx.bom.client.OperatingSystem.getName;
}
if(this.useCheck(j)){this._checks[j]=qx.bom.client.OperatingSystem.getVersion;
}if(this.useCheck(v)){this._checks[v]=qx.bom.client.Plugin.getGears;
}
if(this.useCheck(y)){this._checks[y]=qx.bom.client.Plugin.getQuicktime;
}
if(this.useCheck(bm)){this._checks[bm]=qx.bom.client.Plugin.getQuicktimeVersion;
}
if(this.useCheck(bD)){this._checks[bD]=qx.bom.client.Plugin.getWindowsMedia;
}
if(this.useCheck(g)){this._checks[g]=qx.bom.client.Plugin.getWindowsMediaVersion;
}
if(this.useCheck(bf)){this._checks[bf]=qx.bom.client.Plugin.getDivX;
}
if(this.useCheck(Y)){this._checks[Y]=qx.bom.client.Plugin.getDivXVersion;
}
if(this.useCheck(by)){this._checks[by]=qx.bom.client.Plugin.getSilverlight;
}
if(this.useCheck(k)){this._checks[k]=qx.bom.client.Plugin.getSilverlightVersion;
}
if(this.useCheck(D)){this._checks[D]=qx.bom.client.Flash.isAvailable;
}
if(this.useCheck(br)){this._checks[br]=qx.bom.client.Flash.getVersion;
}
if(this.useCheck(bE)){this._checks[bE]=qx.bom.client.Flash.getExpressInstall;
}
if(this.useCheck(V)){this._checks[V]=qx.bom.client.Flash.getStrictSecurityModel;
}if(this.useCheck(be)){this._checks[be]=qx.bom.client.Transport.getMaxConcurrentRequestCount;
}
if(this.useCheck(w)){this._checks[w]=qx.bom.client.Transport.getSsl;
}
if(this.useCheck(T)){this._checks[T]=qx.bom.client.Transport.getXmlHttpRequest;
}if(this.useCheck(W)){this._checks[W]=qx.bom.client.Event.getTouch;
}
if(this.useCheck(bx)){this._checks[bx]=qx.bom.client.Event.getPointer;
}if(this.useCheck(U)){this._checks[U]=qx.bom.client.EcmaScript.getObjectCount;
}if(this.useCheck(bC)){this._checks[bC]=qx.bom.client.Html.getWebWorker;
}
if(this.useCheck(bh)){this._checks[bh]=qx.bom.client.Html.getGeoLocation;
}
if(this.useCheck(J)){this._checks[J]=qx.bom.client.Html.getAudio;
}
if(this.useCheck(bj)){this._checks[bj]=qx.bom.client.Html.getAudioOgg;
}
if(this.useCheck(O)){this._checks[O]=qx.bom.client.Html.getAudioMp3;
}
if(this.useCheck(b)){this._checks[b]=qx.bom.client.Html.getAudioWav;
}
if(this.useCheck(bb)){this._checks[bb]=qx.bom.client.Html.getAudioAu;
}
if(this.useCheck(bc)){this._checks[bc]=qx.bom.client.Html.getAudioAif;
}
if(this.useCheck(q)){this._checks[q]=qx.bom.client.Html.getVideo;
}
if(this.useCheck(f)){this._checks[f]=qx.bom.client.Html.getVideoOgg;
}
if(this.useCheck(bg)){this._checks[bg]=qx.bom.client.Html.getVideoH264;
}
if(this.useCheck(G)){this._checks[G]=qx.bom.client.Html.getVideoWebm;
}
if(this.useCheck(l)){this._checks[l]=qx.bom.client.Html.getLocalStorage;
}
if(this.useCheck(S)){this._checks[S]=qx.bom.client.Html.getSessionStorage;
}
if(this.useCheck(u)){this._checks[u]=qx.bom.client.Html.getClassList;
}
if(this.useCheck(bF)){this._checks[bF]=qx.bom.client.Html.getXPath;
}
if(this.useCheck(h)){this._checks[h]=qx.bom.client.Html.getXul;
}
if(this.useCheck(bs)){this._checks[bs]=qx.bom.client.Html.getCanvas;
}
if(this.useCheck(B)){this._checks[B]=qx.bom.client.Html.getSvg;
}
if(this.useCheck(bt)){this._checks[bt]=qx.bom.client.Html.getVml;
}
if(this.useCheck(C)){this._asyncChecks[C]=qx.bom.client.Html.getDataUrl;
}if(this.useCheck(s)){this._checks[s]=qx.bom.client.Css.getTextOverflow;
}
if(this.useCheck(a)){this._checks[a]=qx.bom.client.Css.getPlaceholder;
}
if(this.useCheck(Q)){this._checks[Q]=qx.bom.client.Css.getBorderRadius;
}
if(this.useCheck(E)){this._checks[E]=qx.bom.client.Css.getBoxShadow;
}
if(this.useCheck(L)){this._checks[L]=qx.bom.client.Css.getGradients;
}
if(this.useCheck(ba)){this._checks[ba]=qx.bom.client.Css.getBoxModel;
}
if(this.useCheck(t)){this._checks[t]=qx.bom.client.Css.getTranslate3d;
}if(this.useCheck(bB)){this._checks[bB]=qx.bom.client.PhoneGap.getPhoneGap;
}
if(this.useCheck(I)){this._checks[I]=qx.bom.client.PhoneGap.getNotification;
}}},defer:function(co){co._initDefaultQxValues();
co._initChecksMap();
co.__s();
if(co.get(bl)!=true){co.__t();
}}});
})();
(function(){var q="object",p="qx.debug",o="function",n="Mixin",m="qx.Mixin",k=".prototype",j="constructor",h="[Mixin ",g="]",f="members",c="destruct",e="events",d="properties",b="statics";
qx.Bootstrap.define(m,{statics:{define:function(name,r){if(r){if(r.include&&!(r.include instanceof Array)){r.include=[r.include];
}if(qx.core.Environment.get(p)){this.__d(name,r);
}var t=r.statics?r.statics:{};
qx.Bootstrap.setDisplayNames(t,name);

for(var s in t){if(t[s] instanceof Function){t[s].$$mixin=t;
}}if(r.construct){t.$$constructor=r.construct;
qx.Bootstrap.setDisplayName(r.construct,name,j);
}
if(r.include){t.$$includes=r.include;
}
if(r.properties){t.$$properties=r.properties;
}
if(r.members){t.$$members=r.members;
qx.Bootstrap.setDisplayNames(r.members,name+k);
}
for(var s in t.$$members){if(t.$$members[s] instanceof Function){t.$$members[s].$$mixin=t;
}}
if(r.events){t.$$events=r.events;
}
if(r.destruct){t.$$destructor=r.destruct;
qx.Bootstrap.setDisplayName(r.destruct,name,c);
}}else{var t={};
}t.$$type=n;
t.name=name;
t.toString=this.genericToString;
t.basename=qx.Bootstrap.createNamespace(name,t);
this.$$registry[name]=t;
return t;
},checkCompatibility:function(u){var x=this.flatten(u);
var y=x.length;

if(y<2){return true;
}var B={};
var A={};
var z={};
var w;

for(var i=0;i<y;i++){w=x[i];

for(var v in w.events){if(z[v]){throw new Error('Conflict between mixin "'+w.name+'" and "'+z[v]+'" in member "'+v+'"!');
}z[v]=w.name;
}
for(var v in w.properties){if(B[v]){throw new Error('Conflict between mixin "'+w.name+'" and "'+B[v]+'" in property "'+v+'"!');
}B[v]=w.name;
}
for(var v in w.members){if(A[v]){throw new Error('Conflict between mixin "'+w.name+'" and "'+A[v]+'" in member "'+v+'"!');
}A[v]=w.name;
}}return true;
},isCompatible:function(C,D){var E=qx.Bootstrap.getMixins(D);
E.push(C);
return qx.Mixin.checkCompatibility(E);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(F){if(!F){return [];
}var G=F.concat();

for(var i=0,l=F.length;i<l;i++){if(F[i].$$includes){G.push.apply(G,this.flatten(F[i].$$includes));
}}return G;
},genericToString:function(){return h+this.name+g;
},$$registry:{},__c:qx.core.Environment.select(p,{"true":{"include":q,"statics":q,"members":q,"properties":q,"events":q,"destruct":o,"construct":o},"default":null}),__d:qx.core.Environment.select(p,{"true":function(name,H){var K=this.__c;

for(var J in H){if(!K[J]){throw new Error('The configuration key "'+J+'" in mixin "'+name+'" is not allowed!');
}
if(H[J]==null){throw new Error('Invalid key "'+J+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(K[J]!==null&&typeof H[J]!==K[J]){throw new Error('Invalid type of key "'+J+'" in mixin "'+name+'"! The type of the key must be "'+K[J]+'"!');
}}var I=[b,f,d,e];

for(var i=0,l=I.length;i<l;i++){var J=I[i];

if(H[J]!==undefined&&(H[J] instanceof Array||H[J] instanceof RegExp||H[J] instanceof Date||H[J].classname!==undefined)){throw new Error('Invalid key "'+J+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(H.include){for(var i=0,a=H.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==n){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(H.include);
}},"default":function(){}})}});
})();
(function(){var j="qx.debug",h="&",g="qx.core.Setting",f="qx.allowUrlVariants",e="qx.propertyDebugLevel",d="qxsetting",c=":",b=".",a="qx.allowUrlSettings";
qx.Bootstrap.define(g,{statics:{__v:{},define:function(k,l){if(qx.core.Environment.get(j)){qx.Bootstrap.warn("The method 'qx.core.Setting.define' is deprecated: "+"Please use qx.core.Environment.add() instead.");
}this.defineDeprecated(k,l);
},defineDeprecated:function(m,n){if(n===undefined){throw new Error('Default value of setting "'+m+'" must be defined!');
}
if(!this.__v[m]){this.__v[m]={};
}else if(this.__v[m].defaultValue!==undefined){throw new Error('Setting "'+m+'" is already defined!');
}this.__v[m].defaultValue=n;
},get:function(o){if(qx.core.Environment.get(j)){qx.Bootstrap.warn("The method 'qx.core.Setting.get' is deprecated: "+"Please use qx.core.Environment.get() instead.");
}var p=this.__v[o];

if(p===undefined){throw new Error('Setting "'+o+'" is not defined.');
}
if(p.value!==undefined){return p.value;
}return p.defaultValue;
},set:function(q,r){if(qx.core.Environment.get(j)){qx.Bootstrap.warn("The method 'qx.core.Setting.set' is deprecated: "+"Please use qx.core.Environment.add() instead.");
}this.setDeprecated(q,r);
},setDeprecated:function(s,t){if((s.split(b)).length<2){throw new Error('Malformed settings key "'+s+'". Must be following the schema "namespace.key".');
}
if(!this.__v[s]){this.__v[s]={};
}this.__v[s].value=t;
},__w:function(){if(window.qxsettings){for(var u in window.qxsettings){this.setDeprecated(u,window.qxsettings[u]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(v){}this.__x();
}},__x:function(){var x=document.location.search.slice(1).split(h);

for(var i=0;i<x.length;i++){var w=x[i].split(c);

if(w.length!=3||w[0]!=d){continue;
}
if(qx.core.Environment.get(j)){qx.Bootstrap.warn("URL settings are deprecated. Please use URL environment "+"variables instead. (qxsetting --> qxenv)");
}this.set(w[1],decodeURIComponent(w[2]));
}}},defer:function(y){y.defineDeprecated(a,false);
y.defineDeprecated(f,false);
y.defineDeprecated(e,0);
y.__w();
}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__ui:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__ui;
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
},addAdvice:function(o,p,q,name){this.__ui.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var k="function",j="Boolean",h="qx.Interface",g="qx.debug",f="]",e="toggle",d="Interface",c="is",b="[Interface ";
qx.Bootstrap.define(h,{statics:{define:function(name,m){if(m){if(m.extend&&!(m.extend instanceof Array)){m.extend=[m.extend];
}if(qx.core.Environment.get(g)){this.__E(name,m);
}var n=m.statics?m.statics:{};
if(m.extend){n.$$extends=m.extend;
}
if(m.properties){n.$$properties=m.properties;
}
if(m.members){n.$$members=m.members;
}
if(m.events){n.$$events=m.events;
}}else{var n={};
}n.$$type=d;
n.name=name;
n.toString=this.genericToString;
n.basename=qx.Bootstrap.createNamespace(name,n);
qx.Interface.$$registry[name]=n;
return n;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(o){if(!o){return [];
}var p=o.concat();

for(var i=0,l=o.length;i<l;i++){if(o[i].$$extends){p.push.apply(p,this.flatten(o[i].$$extends));
}}return p;
},__y:function(q,r,s,t){var x=s.$$members;

if(x){for(var w in x){if(qx.Bootstrap.isFunction(x[w])){var v=this.__z(r,w);
var u=v||qx.Bootstrap.isFunction(q[w]);

if(!u){throw new Error('Implementation of method "'+w+'" is missing in class "'+r.classname+'" required by interface "'+s.name+'"');
}var y=t===true&&!v&&!qx.Bootstrap.hasInterface(r,s);

if(y){q[w]=this.__C(s,q[w],w,x[w]);
}}else{if(typeof q[w]===undefined){if(typeof q[w]!==k){throw new Error('Implementation of member "'+w+'" is missing in class "'+r.classname+'" required by interface "'+s.name+'"');
}}}}}},__z:function(z,A){var E=A.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!E){return false;
}var B=qx.Bootstrap.firstLow(E[2]);
var C=qx.Bootstrap.getPropertyDefinition(z,B);

if(!C){return false;
}var D=E[0]==c||E[0]==e;

if(D){return qx.Bootstrap.getPropertyDefinition(z,B).check==j;
}return true;
},__A:function(F,G){if(G.$$properties){for(var H in G.$$properties){if(!qx.Bootstrap.getPropertyDefinition(F,H)){throw new Error('The property "'+H+'" is not supported by Class "'+F.classname+'"!');
}}}},__B:function(I,J){if(J.$$events){for(var K in J.$$events){if(!qx.Bootstrap.supportsEvent(I,K)){throw new Error('The event "'+K+'" is not supported by Class "'+I.classname+'"!');
}}}},assertObject:function(L,M){var O=L.constructor;
this.__y(L,O,M,false);
this.__A(O,M);
this.__B(O,M);
var N=M.$$extends;

if(N){for(var i=0,l=N.length;i<l;i++){this.assertObject(L,N[i]);
}}},assert:function(P,Q,R){this.__y(P.prototype,P,Q,R);
this.__A(P,Q);
this.__B(P,Q);
var S=Q.$$extends;

if(S){for(var i=0,l=S.length;i<l;i++){this.assert(P,S[i],R);
}}},genericToString:function(){return b+this.name+f;
},$$registry:{},__C:qx.core.Environment.select("qx.debug",{"true":function(T,U,V,W){function X(){W.apply(this,arguments);
return U.apply(this,arguments);
}U.wrapper=X;
return X;
},"default":function(){}}),__D:qx.core.Environment.select("qx.debug",{"true":{"extend":"object","statics":"object","members":"object","properties":"object","events":"object"},"default":null}),__E:qx.core.Environment.select("qx.debug",{"true":function(name,Y){if(qx.core.Environment.get("qx.debug")){var bc=this.__D;

for(var bb in Y){if(bc[bb]===undefined){throw new Error('The configuration key "'+bb+'" in class "'+name+'" is not allowed!');
}
if(Y[bb]==null){throw new Error("Invalid key '"+bb+"' in interface '"+name+"'! The value is undefined/null!");
}
if(bc[bb]!==null&&typeof Y[bb]!==bc[bb]){throw new Error('Invalid type of key "'+bb+'" in interface "'+name+'"! The type of the key must be "'+bc[bb]+'"!');
}}var ba=["statics","members","properties","events"];

for(var i=0,l=ba.length;i<l;i++){var bb=ba[i];

if(Y[bb]!==undefined&&(Y[bb] instanceof Array||Y[bb] instanceof RegExp||Y[bb] instanceof Date||Y[bb].classname!==undefined)){throw new Error('Invalid key "'+bb+'" in interface "'+name+'"! The value needs to be a map!');
}}if(Y.extend){for(var i=0,a=Y.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!=="Interface"){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(Y.statics){for(var bb in Y.statics){if(bb.toUpperCase()!==bb){throw new Error('Invalid key "'+bb+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof Y.statics[bb]){case "boolean":case "string":case "number":break;
default:throw new Error('Invalid key "'+bb+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
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
(function(){var m=';',k='return this.',j="boolean",h="string",g='!==undefined)',f='else if(this.',e='if(this.',d='else ',c=' of an instance of ',b=' is not (yet) ready!");',X="init",W="': ",V=" of class ",U='(computed, old, "',T='return value;',S='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',R='return init;',Q='var init=this.',P="')){",O="if(reg.hasListener(this, '",t="Error in property ",u='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',r="qx.debug",s='if(init==qx.core.Property.$$inherit)init=null;',p="rv:1.8.1",q="set",n='if(a[i].',o="var reg=qx.event.Registration;",v=" in method ",w='throw new Error("Property ',D='(backup);',B='var inherit=prop.$$inherit;',H='return null;',F='this.',K=")}",J="setRuntime",y=')a[i].',N='");',M="setThemed",L="inherit",x="MSIE 6.0",z=" with incoming value '",A="', qx.event.type.Data, [computed, old]",C="object",E='}',G="reg.fireEvent(this, '",I="qx.core.Property";
qx.Bootstrap.define(I,{statics:{__F:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__G:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:L,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:h,dereference:j,inheritable:j,nullable:j,themeable:j,refine:j,init:null,apply:h,event:h,check:null,transform:h,deferredInit:j,validate:null},$$allowedGroupKeys:{name:h,group:C,mode:h,themeable:j},$$inheritable:{},__H:function(Y){var ba=this.__I(Y);

if(!ba.length){var bb=function(){};
}else{bb=this.__J(ba);
}Y.prototype.$$refreshInheritables=bb;
},__I:function(bc){var be=[];

while(bc){var bd=bc.$$properties;

if(bd){for(var name in this.$$inheritable){if(bd[name]&&bd[name].inheritable){be.push(name);
}}}bc=bc.superclass;
}return be;
},__J:function(bf){var bj=this.$$store.inherit;
var bi=this.$$store.init;
var bh=this.$$method.refresh;
var bg=["var parent = this.getLayoutParent();","if (!parent) return;"];

for(var i=0,l=bf.length;i<l;i++){var name=bf[i];
bg.push("var value = parent.",bj[name],";","if (value===undefined) value = parent.",bi[name],";","this.",bh[name],"(value);");
}return new Function(bg.join(""));
},attachRefreshInheritables:function(bk){bk.prototype.$$refreshInheritables=function(){qx.core.Property.__H(bk);
return this.$$refreshInheritables();
};
},attachMethods:function(bl,name,bm){bm.group?this.__K(bl,bm,name):this.__L(bl,bm,name);
},__K:function(bn,bo,name){var bv=qx.Bootstrap.firstUp(name);
var bu=bn.prototype;
var bw=bo.themeable===true;

if(qx.core.Environment.get("qx.debug")){if(qx.core.Environment.get("qx.propertyDebugLevel")>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var bx=[];
var br=[];

if(bw){var bp=[];
var bt=[];
}var bs="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
bx.push(bs);

if(bw){bp.push(bs);
}
if(bo.mode=="shorthand"){var bq="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
bx.push(bq);

if(bw){bp.push(bq);
}}
for(var i=0,a=bo.group,l=a.length;i<l;i++){if(qx.core.Environment.get("qx.debug")){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}bx.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
br.push("this.",this.$$method.reset[a[i]],"();");

if(bw){if(qx.core.Environment.get("qx.debug")){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}bp.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
bt.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+bv;
bu[this.$$method.set[name]]=new Function(bx.join(""));
this.$$method.reset[name]="reset"+bv;
bu[this.$$method.reset[name]]=new Function(br.join(""));

if(bw){this.$$method.setThemed[name]="setThemed"+bv;
bu[this.$$method.setThemed[name]]=new Function(bp.join(""));
this.$$method.resetThemed[name]="resetThemed"+bv;
bu[this.$$method.resetThemed[name]]=new Function(bt.join(""));
}},__L:function(by,bz,name){var bB=qx.Bootstrap.firstUp(name);
var bD=by.prototype;

if(qx.core.Environment.get("qx.debug")){if(qx.core.Environment.get("qx.propertyDebugLevel")>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(bz.dereference===undefined&&typeof bz.check==="string"){bz.dereference=this.__M(bz.check);
}var bC=this.$$method;
var bA=this.$$store;
bA.runtime[name]="$$runtime_"+name;
bA.user[name]="$$user_"+name;
bA.theme[name]="$$theme_"+name;
bA.init[name]="$$init_"+name;
bA.inherit[name]="$$inherit_"+name;
bA.useinit[name]="$$useinit_"+name;
bC.get[name]="get"+bB;
bD[bC.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,by,name,"get");
};
bC.set[name]="set"+bB;
bD[bC.set[name]]=function(bE){return qx.core.Property.executeOptimizedSetter(this,by,name,"set",arguments);
};
bC.reset[name]="reset"+bB;
bD[bC.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,by,name,"reset");
};

if(bz.inheritable||bz.apply||bz.event||bz.deferredInit){bC.init[name]="init"+bB;
bD[bC.init[name]]=function(bF){return qx.core.Property.executeOptimizedSetter(this,by,name,"init",arguments);
};
}
if(bz.inheritable){bC.refresh[name]="refresh"+bB;
bD[bC.refresh[name]]=function(bG){return qx.core.Property.executeOptimizedSetter(this,by,name,"refresh",arguments);
};
}bC.setRuntime[name]="setRuntime"+bB;
bD[bC.setRuntime[name]]=function(bH){return qx.core.Property.executeOptimizedSetter(this,by,name,"setRuntime",arguments);
};
bC.resetRuntime[name]="resetRuntime"+bB;
bD[bC.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,by,name,"resetRuntime");
};

if(bz.themeable){bC.setThemed[name]="setThemed"+bB;
bD[bC.setThemed[name]]=function(bI){return qx.core.Property.executeOptimizedSetter(this,by,name,"setThemed",arguments);
};
bC.resetThemed[name]="resetThemed"+bB;
bD[bC.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,by,name,"resetThemed");
};
}
if(bz.check==="Boolean"){bD["toggle"+bB]=new Function("return this."+bC.set[name]+"(!this."+bC.get[name]+"())");
bD["is"+bB]=new Function("return this."+bC.get[name]+"()");
}},__M:function(bJ){return !!this.__G[bJ];
},__N:function(bK){return this.__G[bK]||qx.Bootstrap.classIsDefined(bK)||(qx.Interface&&qx.Interface.isDefined(bK));
},__O:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(bL,bM,bN,bO,bP){var bQ=bL.constructor.classname;
var bR=t+bN+V+bQ+v+this.$$method[bO][bN]+z+bP+W;
throw new Error(bR+(this.__O[bM]||"Unknown reason: "+bM));
},__P:function(bS,bT,name,bU,bV,bW){var bX=this.$$method[bU][name];
if(qx.core.Environment.get("qx.debug")){if(qx.core.Environment.get("qx.propertyDebugLevel")>1){qx.Bootstrap.debug("Code["+this.$$method[bU][name]+"]: "+bV.join(""));
}try{bT[bX]=new Function("value",bV.join(""));
}catch(bY){throw new Error("Malformed generated code to unwrap method: "+this.$$method[bU][name]+"\n"+bV.join(""));
}}else{bT[bX]=new Function("value",bV.join(""));
}if(qx.core.Environment.get("qx.aspects")){bT[bX]=qx.core.Aspect.wrap(bS.classname+"."+bX,bT[bX],"property");
}qx.Bootstrap.setDisplayName(bT[bX],bS.classname+".prototype",bX);
if(bW===undefined){return bS[bX]();
}else if(qx.core.Environment.get("qx.debug")){return bS[bX].apply(bS,bW);
}else{return bS[bX](bW[0]);
}},executeOptimizedGetter:function(ca,cb,name,cc){var ce=cb.$$properties[name];
var cg=cb.prototype;
var cd=[];
var cf=this.$$store;
cd.push(e,cf.runtime[name],g);
cd.push(k,cf.runtime[name],m);

if(ce.inheritable){cd.push(f,cf.inherit[name],g);
cd.push(k,cf.inherit[name],m);
cd.push(d);
}cd.push(e,cf.user[name],g);
cd.push(k,cf.user[name],m);

if(ce.themeable){cd.push(f,cf.theme[name],g);
cd.push(k,cf.theme[name],m);
}
if(ce.deferredInit&&ce.init===undefined){cd.push(f,cf.init[name],g);
cd.push(k,cf.init[name],m);
}cd.push(d);

if(ce.init!==undefined){if(ce.inheritable){cd.push(Q,cf.init[name],m);

if(ce.nullable){cd.push(s);
}else if(ce.init!==undefined){cd.push(k,cf.init[name],m);
}else{cd.push(S,name,c,cb.classname,b);
}cd.push(R);
}else{cd.push(k,cf.init[name],m);
}}else if(ce.inheritable||ce.nullable){cd.push(H);
}else{cd.push(w,name,c,cb.classname,b);
}return this.__P(ca,cg,name,cc,cd);
},executeOptimizedSetter:function(ch,ci,name,cj,ck){var cp=ci.$$properties[name];
var co=ci.prototype;
var cm=[];
var cl=cj===q||cj===M||cj===J||(cj===X&&cp.init===undefined);
var cn=cp.apply||cp.event||cp.inheritable;
var cq=this.__Q(cj,name);
this.__R(cm,cp,name,cj,cl);

if(cl){this.__S(cm,ci,cp,name);
}
if(cn){this.__T(cm,cl,cq,cj);
}
if(cp.inheritable){cm.push(B);
}
if(qx.core.Environment.get(r)){if(cl){this.__U(cm,cp,ci,name,cj);
}}
if(!cn){this.__V(cm,name,cj,cl);
}else{this.__W(cm,cp,name,cj,cl);
}
if(cp.inheritable){this.__X(cm,cp,name,cj);
}else if(cn){this.__Y(cm,cp,name,cj);
}
if(cn){this.__ba(cm,cp,name);
if(cp.inheritable&&co._getChildren){this.__bb(cm,name);
}}if(cl){cm.push(T);
}return this.__P(ch,co,name,cj,cm,ck);
},__Q:function(cr,name){if(cr==="setRuntime"||cr==="resetRuntime"){var cs=this.$$store.runtime[name];
}else if(cr==="setThemed"||cr==="resetThemed"){cs=this.$$store.theme[name];
}else if(cr==="init"){cs=this.$$store.init[name];
}else{cs=this.$$store.user[name];
}return cs;
},__R:function(ct,cu,name,cv,cw){if(qx.core.Environment.get("qx.debug")){ct.push('var prop=qx.core.Property;');

if(cv==="init"){ct.push('if(this.$$initialized)prop.error(this,0,"',name,'","',cv,'",value);');
}
if(cv==="refresh"){}else if(cw){ct.push('if(arguments.length!==1)prop.error(this,1,"',name,'","',cv,'",value);');
ct.push('if(value===undefined)prop.error(this,2,"',name,'","',cv,'",value);');
}else{ct.push('if(arguments.length!==0)prop.error(this,3,"',name,'","',cv,'",value);');
}}else{if(!cu.nullable||cu.check||cu.inheritable){ct.push('var prop=qx.core.Property;');
}if(cv==="set"){ct.push('if(value===undefined)prop.error(this,2,"',name,'","',cv,'",value);');
}}},__S:function(cx,cy,cz,name){if(cz.transform){cx.push('value=this.',cz.transform,'(value);');
}if(cz.validate){if(typeof cz.validate==="string"){cx.push('this.',cz.validate,'(value);');
}else if(cz.validate instanceof Function){cx.push(cy.classname,'.$$properties.',name);
cx.push('.validate.call(this, value);');
}}},__T:function(cA,cB,cC,cD){var cE=(cD==="reset"||cD==="resetThemed"||cD==="resetRuntime");

if(cB){cA.push('if(this.',cC,'===value)return value;');
}else if(cE){cA.push('if(this.',cC,'===undefined)return;');
}},__U:qx.core.Environment.select("qx.debug",{"true":function(cF,cG,cH,name,cI){if(!cG.nullable){cF.push('if(value===null)prop.error(this,4,"',name,'","',cI,'",value);');
}if(cG.check!==undefined){cF.push('var msg = "Invalid incoming value for property \''+name+'\' of class \''+cH.classname+'\'";');
if(cG.nullable){cF.push('if(value!==null)');
}if(cG.inheritable){cF.push('if(value!==inherit)');
}cF.push('if(');

if(this.__F[cG.check]!==undefined){cF.push('!(',this.__F[cG.check],')');
}else if(qx.Class.isDefined(cG.check)){cF.push('qx.core.Assert.assertInstance(value, qx.Class.getByName("',cG.check,'"), msg)');
}else if(qx.Interface&&qx.Interface.isDefined(cG.check)){cF.push('qx.core.Assert.assertInterface(value, qx.Interface.getByName("',cG.check,'"), msg)');
}else if(typeof cG.check==="function"){cF.push('!',cH.classname,'.$$properties.',name);
cF.push('.check.call(this, value)');
}else if(typeof cG.check==="string"){cF.push('!(',cG.check,')');
}else if(cG.check instanceof Array){cF.push('qx.core.Assert.assertInArray(value, ',cH.classname,'.$$properties.',name,'.check, msg)');
}else{throw new Error("Could not add check to property "+name+" of class "+cH.classname);
}cF.push(')prop.error(this,5,"',name,'","',cI,'",value);');
}},"false":undefined}),__V:function(cJ,name,cK,cL){if(cK==="setRuntime"){cJ.push('this.',this.$$store.runtime[name],'=value;');
}else if(cK==="resetRuntime"){cJ.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cJ.push('delete this.',this.$$store.runtime[name],';');
}else if(cK==="set"){cJ.push('this.',this.$$store.user[name],'=value;');
}else if(cK==="reset"){cJ.push('if(this.',this.$$store.user[name],'!==undefined)');
cJ.push('delete this.',this.$$store.user[name],';');
}else if(cK==="setThemed"){cJ.push('this.',this.$$store.theme[name],'=value;');
}else if(cK==="resetThemed"){cJ.push('if(this.',this.$$store.theme[name],'!==undefined)');
cJ.push('delete this.',this.$$store.theme[name],';');
}else if(cK==="init"&&cL){cJ.push('this.',this.$$store.init[name],'=value;');
}},__W:function(cM,cN,name,cO,cP){if(cN.inheritable){cM.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{cM.push('var computed, old;');
}cM.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(cO==="setRuntime"){cM.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cO==="resetRuntime"){cM.push('delete this.',this.$$store.runtime[name],';');
cM.push('if(this.',this.$$store.user[name],'!==undefined)');
cM.push('computed=this.',this.$$store.user[name],';');
cM.push('else if(this.',this.$$store.theme[name],'!==undefined)');
cM.push('computed=this.',this.$$store.theme[name],';');
cM.push('else if(this.',this.$$store.init[name],'!==undefined){');
cM.push('computed=this.',this.$$store.init[name],';');
cM.push('this.',this.$$store.useinit[name],'=true;');
cM.push('}');
}else{cM.push('old=computed=this.',this.$$store.runtime[name],';');
if(cO==="set"){cM.push('this.',this.$$store.user[name],'=value;');
}else if(cO==="reset"){cM.push('delete this.',this.$$store.user[name],';');
}else if(cO==="setThemed"){cM.push('this.',this.$$store.theme[name],'=value;');
}else if(cO==="resetThemed"){cM.push('delete this.',this.$$store.theme[name],';');
}else if(cO==="init"&&cP){cM.push('this.',this.$$store.init[name],'=value;');
}}cM.push('}');
cM.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(cO==="set"){if(!cN.inheritable){cM.push('old=this.',this.$$store.user[name],';');
}cM.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cO==="reset"){if(!cN.inheritable){cM.push('old=this.',this.$$store.user[name],';');
}cM.push('delete this.',this.$$store.user[name],';');
cM.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cM.push('computed=this.',this.$$store.runtime[name],';');
cM.push('if(this.',this.$$store.theme[name],'!==undefined)');
cM.push('computed=this.',this.$$store.theme[name],';');
cM.push('else if(this.',this.$$store.init[name],'!==undefined){');
cM.push('computed=this.',this.$$store.init[name],';');
cM.push('this.',this.$$store.useinit[name],'=true;');
cM.push('}');
}else{if(cO==="setRuntime"){cM.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cN.inheritable){cM.push('computed=this.',this.$$store.user[name],';');
}else{cM.push('old=computed=this.',this.$$store.user[name],';');
}if(cO==="setThemed"){cM.push('this.',this.$$store.theme[name],'=value;');
}else if(cO==="resetThemed"){cM.push('delete this.',this.$$store.theme[name],';');
}else if(cO==="init"&&cP){cM.push('this.',this.$$store.init[name],'=value;');
}}cM.push('}');
if(cN.themeable){cM.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!cN.inheritable){cM.push('old=this.',this.$$store.theme[name],';');
}
if(cO==="setRuntime"){cM.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cO==="set"){cM.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cO==="setThemed"){cM.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cO==="resetThemed"){cM.push('delete this.',this.$$store.theme[name],';');
cM.push('if(this.',this.$$store.init[name],'!==undefined){');
cM.push('computed=this.',this.$$store.init[name],';');
cM.push('this.',this.$$store.useinit[name],'=true;');
cM.push('}');
}else if(cO==="init"){if(cP){cM.push('this.',this.$$store.init[name],'=value;');
}cM.push('computed=this.',this.$$store.theme[name],';');
}else if(cO==="refresh"){cM.push('computed=this.',this.$$store.theme[name],';');
}cM.push('}');
}cM.push('else if(this.',this.$$store.useinit[name],'){');

if(!cN.inheritable){cM.push('old=this.',this.$$store.init[name],';');
}
if(cO==="init"){if(cP){cM.push('computed=this.',this.$$store.init[name],'=value;');
}else{cM.push('computed=this.',this.$$store.init[name],';');
}}else if(cO==="set"||cO==="setRuntime"||cO==="setThemed"||cO==="refresh"){cM.push('delete this.',this.$$store.useinit[name],';');

if(cO==="setRuntime"){cM.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cO==="set"){cM.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cO==="setThemed"){cM.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cO==="refresh"){cM.push('computed=this.',this.$$store.init[name],';');
}}cM.push('}');
if(cO==="set"||cO==="setRuntime"||cO==="setThemed"||cO==="init"){cM.push('else{');

if(cO==="setRuntime"){cM.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cO==="set"){cM.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cO==="setThemed"){cM.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cO==="init"){if(cP){cM.push('computed=this.',this.$$store.init[name],'=value;');
}else{cM.push('computed=this.',this.$$store.init[name],';');
}cM.push('this.',this.$$store.useinit[name],'=true;');
}cM.push('}');
}},__X:function(cQ,cR,name,cS){cQ.push('if(computed===undefined||computed===inherit){');

if(cS==="refresh"){cQ.push('computed=value;');
}else{cQ.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}cQ.push('if((computed===undefined||computed===inherit)&&');
cQ.push('this.',this.$$store.init[name],'!==undefined&&');
cQ.push('this.',this.$$store.init[name],'!==inherit){');
cQ.push('computed=this.',this.$$store.init[name],';');
cQ.push('this.',this.$$store.useinit[name],'=true;');
cQ.push('}else{');
cQ.push('delete this.',this.$$store.useinit[name],';}');
cQ.push('}');
cQ.push('if(old===computed)return value;');
cQ.push('if(computed===inherit){');
cQ.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
cQ.push('}');
cQ.push('else if(computed===undefined)');
cQ.push('delete this.',this.$$store.inherit[name],';');
cQ.push('else this.',this.$$store.inherit[name],'=computed;');
cQ.push('var backup=computed;');
if(cR.init!==undefined&&cS!=="init"){cQ.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cQ.push('if(old===undefined)old=null;');
}cQ.push('if(computed===undefined||computed==inherit)computed=null;');
},__Y:function(cT,cU,name,cV){if(cV!=="set"&&cV!=="setRuntime"&&cV!=="setThemed"){cT.push('if(computed===undefined)computed=null;');
}cT.push('if(old===computed)return value;');
if(cU.init!==undefined&&cV!=="init"){cT.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cT.push('if(old===undefined)old=null;');
}},__ba:function(cW,cX,name){if(cX.apply){cW.push(F,cX.apply,U,name,N);
}if(cX.event){cW.push(o,O,cX.event,P,G,cX.event,A,K);
}},__bb:function(cY,name){cY.push(u);
cY.push(n,this.$$method.refresh[name],y,this.$$method.refresh[name],D);
cY.push(E);
}},defer:function(da){var dc=navigator.userAgent.indexOf(x)!=-1;
var db=navigator.userAgent.indexOf(p)!=-1;
if(dc||db){da.__M=da.__N;
}}});
})();
(function(){var m="qx.debug",k="object",j=".",h="qx.aspects",g="static",f="function",e="string",d="abstract",c="singleton",b="constructor",L="_",K=".prototype",J="environment",I="$$init_",H="extend",G="init",F="qx.event.type.Data",E="refine",D="members",C="variants",t="properties",u="statics",r="toString",s="events",p="]",q="Class",n="Interface",o="qx.Class",v="Mixin",w="settings",y='Assumed static class because no "extend" key was found. ',x="[Class ",A="destructor",z="destruct",B="member";
qx.Bootstrap.define(o,{statics:{define:function(name,M){if(!M){var M={};
}if(M.include&&!(M.include instanceof Array)){M.include=[M.include];
}if(M.implement&&!(M.implement instanceof Array)){M.implement=[M.implement];
}var N=false;

if(!M.hasOwnProperty(H)&&!M.type){M.type=g;
N=true;
}if(qx.core.Environment.get(m)){try{this.__be(name,M);
}catch(Q){if(N){Q.message=y+Q.message;
}throw Q;
}}var O=this.__bg(name,M.type,M.extend,M.statics,M.construct,M.destruct,M.include);
if(M.extend){if(M.properties){this.__bi(O,M.properties,true);
}if(M.members){this.__bk(O,M.members,true,true,false);
}if(M.events){this.__bh(O,M.events,true);
}if(M.include){for(var i=0,l=M.include.length;i<l;i++){this.__bo(O,M.include[i],false);
}}}if(M.environment){for(var P in M.environment){qx.core.Environment.add(P,M.environment[P]);
}for(var P in M.environment){qx.core.Setting.defineDeprecated(P,M.environment[P]);
}}if(M.settings){if(qx.core.Environment.get(m)){qx.Bootstrap.warn("The usage of settings in class '"+name+"'is deprecated. Please use the 'environment' key instead");
}
for(var P in M.settings){qx.core.Setting.define(P,M.settings[P]);
}}if(M.variants){if(qx.core.Environment.get(m)){qx.Bootstrap.warn("The usage of variants in class '"+name+"'is deprecated. Please use the 'environment' key instead");
}
for(var P in M.variants){qx.core.Variant.define(P,M.variants[P].allowedValues,M.variants[P].defaultValue);
}}if(M.implement){for(var i=0,l=M.implement.length;i<l;i++){this.__bm(O,M.implement[i]);
}}
if(qx.core.Environment.get(m)){this.__bf(O);
}if(M.defer){M.defer.self=O;
M.defer(O,O.prototype,{add:function(name,R){var S={};
S[name]=R;
qx.Class.__bi(O,S,true);
}});
}return O;
},undefine:function(name){delete this.$$registry[name];
var T=name.split(j);
var V=[window];

for(var i=0;i<T.length;i++){V.push(V[i][T[i]]);
}for(var i=V.length-1;i>=1;i--){var U=V[i];
var parent=V[i-1];

if(qx.Bootstrap.isFunction(U)||qx.Bootstrap.objectGetLength(U)===0){delete parent[T[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(W,X){if(qx.core.Environment.get(m)){if(!X){throw new Error("The mixin to include into class '"+W.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(X,W);
}qx.Class.__bo(W,X,false);
},patch:function(Y,ba){if(qx.core.Environment.get(m)){if(!ba){throw new Error("The mixin to patch class '"+Y.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(ba,Y);
}qx.Class.__bo(Y,ba,true);
},isSubClassOf:function(bb,bc){if(!bb){return false;
}
if(bb==bc){return true;
}
if(bb.prototype instanceof bc){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(bd){var be=[];

while(bd){if(bd.$$properties){be.push.apply(be,qx.Bootstrap.getKeys(bd.$$properties));
}bd=bd.superclass;
}return be;
},getByProperty:function(bf,name){while(bf){if(bf.$$properties&&bf.$$properties[name]){return bf;
}bf=bf.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bg,bh){return bg.$$includes&&bg.$$includes.indexOf(bh)!==-1;
},getByMixin:function(bi,bj){var bk,i,l;

while(bi){if(bi.$$includes){bk=bi.$$flatIncludes;

for(i=0,l=bk.length;i<l;i++){if(bk[i]===bj){return bi;
}}}bi=bi.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bl,bm){return !!this.getByMixin(bl,bm);
},hasOwnInterface:function(bn,bo){return bn.$$implements&&bn.$$implements.indexOf(bo)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bp){var bq=[];

while(bp){if(bp.$$implements){bq.push.apply(bq,bp.$$flatImplements);
}bp=bp.superclass;
}return bq;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(br,bs){var bt=br.constructor;

if(this.hasInterface(bt,bs)){return true;
}
try{qx.Interface.assertObject(br,bs);
return true;
}catch(bu){}
try{qx.Interface.assert(bt,bs,false);
return true;
}catch(bv){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return x+this.classname+p;
},$$registry:qx.Bootstrap.$$registry,__bc:qx.core.Environment.select(m,{"true":{"type":e,"extend":f,"implement":k,"include":k,"construct":f,"statics":k,"properties":k,"members":k,"settings":k,"environment":k,"variants":k,"events":k,"defer":f,"destruct":f},"default":null}),__bd:qx.core.Environment.select(m,{"true":{"type":e,"statics":k,"settings":k,"environment":k,"variants":k,"defer":f},"default":null}),__be:qx.core.Environment.select(m,{"true":function(name,bw){if(bw.type&&!(bw.type===g||bw.type===d||bw.type===c)){throw new Error('Invalid type "'+bw.type+'" definition for class "'+name+'"!');
}if(bw.type&&bw.type!==g&&!bw.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var bz=bw.type===g?this.__bd:this.__bc;

for(var by in bw){if(!bz[by]){throw new Error('The configuration key "'+by+'" in class "'+name+'" is not allowed!');
}
if(bw[by]==null){throw new Error('Invalid key "'+by+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof bw[by]!==bz[by]){throw new Error('Invalid type of key "'+by+'" in class "'+name+'"! The type of the key must be "'+bz[by]+'"!');
}}var bx=[u,t,D,J,w,C,s];

for(var i=0,l=bx.length;i<l;i++){var by=bx[i];

if(bw[by]!==undefined&&(bw[by].$$hash!==undefined||!qx.Bootstrap.isObject(bw[by]))){throw new Error('Invalid key "'+by+'" in class "'+name+'"! The value needs to be a map!');
}}if(bw.include){if(bw.include instanceof Array){for(var i=0,a=bw.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==v){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(bw.implement){if(bw.implement instanceof Array){for(var i=0,a=bw.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==n){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(bw.include){try{qx.Mixin.checkCompatibility(bw.include);
}catch(bA){throw new Error('Error in include definition of class "'+name+'"! '+bA.message);
}}if(bw.environment){for(var by in bw.environment){if(by.substr(0,by.indexOf(j))!=name.substr(0,name.indexOf(j))){throw new Error('Forbidden environment setting "'+by+'" found in "'+name+'". It is forbidden to define a '+'environment setting for an external namespace!');
}}}if(bw.settings){for(var by in bw.settings){if(by.substr(0,by.indexOf(j))!=name.substr(0,name.indexOf(j))){throw new Error('Forbidden setting "'+by+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(bw.variants){for(var by in bw.variants){if(by.substr(0,by.indexOf(j))!=name.substr(0,name.indexOf(j))){throw new Error('Forbidden variant "'+by+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__bf:qx.core.Environment.select(m,{"true":function(bB){var bD=bB.superclass;

while(bD){if(bD.$$classtype!==d){break;
}var bC=bD.$$implements;

if(bC){for(var i=0;i<bC.length;i++){qx.Interface.assert(bB,bC[i],true);
}}bD=bD.superclass;
}},"default":function(){}}),__bg:function(name,bE,bF,bG,bH,bI,bJ){var bM;

if(!bF&&qx.core.Environment.get(h)==false){bM=bG||{};
qx.Bootstrap.setDisplayNames(bM,name);
}else{var bM={};

if(bF){if(!bH){bH=this.__bp();
}
if(this.__br(bF,bJ)){bM=this.__bs(bH,name,bE);
}else{bM=bH;
}if(bE===c){bM.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bH,name,b);
}if(bG){qx.Bootstrap.setDisplayNames(bG,name);
var bN;

for(var i=0,a=qx.Bootstrap.getKeys(bG),l=a.length;i<l;i++){bN=a[i];
var bK=bG[bN];

if(qx.core.Environment.get(h)){if(bK instanceof Function){bK=qx.core.Aspect.wrap(name+j+bN,bK,g);
}bM[bN]=bK;
}else{bM[bN]=bK;
}}}}var bL=qx.Bootstrap.createNamespace(name,bM);
bM.name=bM.classname=name;
bM.basename=bL;
bM.$$type=q;

if(bE){bM.$$classtype=bE;
}if(!bM.hasOwnProperty(r)){bM.toString=this.genericToString;
}
if(bF){qx.Bootstrap.extendClass(bM,bH,bF,name,bL);
if(bI){if(qx.core.Environment.get(h)){bI=qx.core.Aspect.wrap(name,bI,A);
}bM.$$destructor=bI;
qx.Bootstrap.setDisplayName(bI,name,z);
}}this.$$registry[name]=bM;
return bM;
},__bh:function(bO,bP,bQ){if(qx.core.Environment.get(m)){if(typeof bP!==k||bP instanceof Array){throw new Error(bO.classname+": the events must be defined as map!");
}
for(var bR in bP){if(typeof bP[bR]!==e){throw new Error(bO.classname+"/"+bR+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(bO.$$events&&bQ!==true){for(var bR in bP){if(bO.$$events[bR]!==undefined&&bO.$$events[bR]!==bP[bR]){throw new Error(bO.classname+"/"+bR+": the event value/type cannot be changed from "+bO.$$events[bR]+" to "+bP[bR]);
}}}}
if(bO.$$events){for(var bR in bP){bO.$$events[bR]=bP[bR];
}}else{bO.$$events=bP;
}},__bi:function(bS,bT,bU){var bV;

if(bU===undefined){bU=false;
}var bW=bS.prototype;

for(var name in bT){bV=bT[name];
if(qx.core.Environment.get(m)){this.__bj(bS,name,bV,bU);
}bV.name=name;
if(!bV.refine){if(bS.$$properties===undefined){bS.$$properties={};
}bS.$$properties[name]=bV;
}if(bV.init!==undefined){bS.prototype[I+name]=bV.init;
}if(bV.event!==undefined){var event={};
event[bV.event]=F;
this.__bh(bS,event,bU);
}if(bV.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bW.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bS);
}}
if(!bV.refine){qx.core.Property.attachMethods(bS,name,bV);
}}},__bj:qx.core.Environment.select(m,{"true":function(bX,name,bY,ca){var cc=this.hasProperty(bX,name);

if(cc){var cb=this.getPropertyDefinition(bX,name);

if(bY.refine&&cb.init===undefined){throw new Error("Could not refine an init value if there was previously no init value defined. Property '"+name+"' of class '"+bX.classname+"'.");
}}
if(!cc&&bY.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+bX.classname+"'!");
}
if(cc&&!ca){throw new Error("Class "+bX.classname+" already has a property: "+name+"!");
}
if(cc&&ca){if(!bY.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+bX.classname+', original class: '+this.getByProperty(bX,name).classname+'.');
}
for(var cd in bY){if(cd!==G&&cd!==E){throw new Error("Class "+bX.classname+" could not refine property: "+name+"! Key: "+cd+" could not be refined!");
}}}var ce=bY.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var cd in bY){if(ce[cd]===undefined){throw new Error('The configuration key "'+cd+'" of property "'+name+'" in class "'+bX.classname+'" is not allowed!');
}
if(bY[cd]===undefined){throw new Error('Invalid key "'+cd+'" of property "'+name+'" in class "'+bX.classname+'"! The value is undefined: '+bY[cd]);
}
if(ce[cd]!==null&&typeof bY[cd]!==ce[cd]){throw new Error('Invalid type of key "'+cd+'" of property "'+name+'" in class "'+bX.classname+'"! The type of the key must be "'+ce[cd]+'"!');
}}
if(bY.transform!=null){if(!(typeof bY.transform==e)){throw new Error('Invalid transform definition of property "'+name+'" in class "'+bX.classname+'"! Needs to be a String.');
}}
if(bY.check!=null){if(!qx.Bootstrap.isString(bY.check)&&!qx.Bootstrap.isArray(bY.check)&&!qx.Bootstrap.isFunction(bY.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+bX.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__bk:function(cf,cg,ch,ci,cj){var ck=cf.prototype;
var cm,cl;
qx.Bootstrap.setDisplayNames(cg,cf.classname+K);

for(var i=0,a=qx.Bootstrap.getKeys(cg),l=a.length;i<l;i++){cm=a[i];
cl=cg[cm];

if(qx.core.Environment.get(m)){if(ck[cm]!==undefined&&cm.charAt(0)==L&&cm.charAt(1)==L){throw new Error('Overwriting private member "'+cm+'" of Class "'+cf.classname+'" is not allowed!');
}
if(ch!==true&&ck.hasOwnProperty(cm)){throw new Error('Overwriting member "'+cm+'" of Class "'+cf.classname+'" is not allowed!');
}}if(ci!==false&&cl instanceof Function&&cl.$$type==null){if(cj==true){cl=this.__bl(cl,ck[cm]);
}else{if(ck[cm]){cl.base=ck[cm];
}cl.self=cf;
}
if(qx.core.Environment.get(h)){cl=qx.core.Aspect.wrap(cf.classname+j+cm,cl,B);
}}ck[cm]=cl;
}},__bl:function(cn,co){if(co){return function(){var cq=cn.base;
cn.base=co;
var cp=cn.apply(this,arguments);
cn.base=cq;
return cp;
};
}else{return cn;
}},__bm:function(cr,cs){if(qx.core.Environment.get(m)){if(!cr||!cs){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(cr,cs)){throw new Error('Interface "'+cs.name+'" is already used by Class "'+cr.classname+'!');
}if(cr.$$classtype!==d){qx.Interface.assert(cr,cs,true);
}}var ct=qx.Interface.flatten([cs]);

if(cr.$$implements){cr.$$implements.push(cs);
cr.$$flatImplements.push.apply(cr.$$flatImplements,ct);
}else{cr.$$implements=[cs];
cr.$$flatImplements=ct;
}},__bn:function(cu){var name=cu.classname;
var cv=this.__bs(cu,name,cu.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(cu),l=a.length;i<l;i++){cw=a[i];
cv[cw]=cu[cw];
}cv.prototype=cu.prototype;
var cy=cu.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(cy),l=a.length;i<l;i++){cw=a[i];
var cz=cy[cw];
if(cz&&cz.self==cu){cz.self=cv;
}}for(var cw in this.$$registry){var cx=this.$$registry[cw];

if(!cx){continue;
}
if(cx.base==cu){cx.base=cv;
}
if(cx.superclass==cu){cx.superclass=cv;
}
if(cx.$$original){if(cx.$$original.base==cu){cx.$$original.base=cv;
}
if(cx.$$original.superclass==cu){cx.$$original.superclass=cv;
}}}qx.Bootstrap.createNamespace(name,cv);
this.$$registry[name]=cv;
return cv;
},__bo:function(cA,cB,cC){if(qx.core.Environment.get(m)){if(!cA||!cB){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(cA,cB)){return;
}var cF=cA.$$original;

if(cB.$$constructor&&!cF){cA=this.__bn(cA);
}var cE=qx.Mixin.flatten([cB]);
var cD;

for(var i=0,l=cE.length;i<l;i++){cD=cE[i];
if(cD.$$events){this.__bh(cA,cD.$$events,cC);
}if(cD.$$properties){this.__bi(cA,cD.$$properties,cC);
}if(cD.$$members){this.__bk(cA,cD.$$members,cC,cC,cC);
}}if(cA.$$includes){cA.$$includes.push(cB);
cA.$$flatIncludes.push.apply(cA.$$flatIncludes,cE);
}else{cA.$$includes=[cB];
cA.$$flatIncludes=cE;
}},__bp:function(){function cG(){cG.base.apply(this,arguments);
}return cG;
},__bq:function(){return function(){};
},__br:function(cH,cI){if(qx.core.Environment.get(m)){return true;
}if(cH&&cH.$$includes){var cJ=cH.$$flatIncludes;

for(var i=0,l=cJ.length;i<l;i++){if(cJ[i].$$constructor){return true;
}}}if(cI){var cK=qx.Mixin.flatten(cI);

for(var i=0,l=cK.length;i<l;i++){if(cK[i].$$constructor){return true;
}}}return false;
},__bs:function(cL,name,cM){var cO=function(){var cR=cO;

if(qx.core.Environment.get(m)){if(!(this instanceof cR)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(cM===d){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(cM===c){if(!cR.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}var cQ=cR.$$original.apply(this,arguments);
if(cR.$$includes){var cP=cR.$$flatIncludes;

for(var i=0,l=cP.length;i<l;i++){if(cP[i].$$constructor){cP[i].$$constructor.apply(this,arguments);
}}}
if(qx.core.Environment.get(m)){if(this.classname===name){this.$$initialized=true;
}}return cQ;
};

if(qx.core.Environment.get(h)){var cN=qx.core.Aspect.wrap(name,cO,b);
cO.$$original=cL;
cO.constructor=cN;
cO=cN;
}cO.$$original=cL;
cL.wrapper=cO;
return cO;
}},defer:function(){if(qx.core.Environment.get(h)){for(var cS in qx.Bootstrap.$$registry){var cT=qx.Bootstrap.$$registry[cS];

for(var cU in cT){if(cT[cU] instanceof Function){cT[cU]=qx.core.Aspect.wrap(cS+j+cU,cT[cU],g);
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
(function(){var x="on",w="qx.debug",u="off",t="|",s="default",r="object",q="&",p="qx.aspects",o="qx.mobile.nativescroll",n="qx.mobile.emulatetouch",e="$",m="qx.client",h="qx.dynlocale",c="webkit",b="qxvariant",g="opera",f=":",j=".",a="qx.core.Variant",k="mshtml",d="gecko";
qx.Bootstrap.define(a,{statics:{__bt:{},__bu:{},compilerIsSet:function(){return true;
},define:function(y,z,A){if(qx.core.Variant.compilerIsSet(w,x)){qx.Bootstrap.warn("The method 'qx.core.Variant.define('"+y+"')' is deprecated: "+"Please use qx.core.Environment.add('"+y+"') instead.");
}this.defineDeprecated(y,z,A);
},defineDeprecated:function(B,C,D){if(qx.core.Variant.compilerIsSet(w,x)){if(!this.__bx(C)){throw new Error('Allowed values of variant "'+B+'" must be defined!');
}
if(D===undefined){throw new Error('Default value of variant "'+B+'" must be defined!');
}}
if(!this.__bt[B]){this.__bt[B]={};
}else if(qx.core.Variant.compilerIsSet(w,x)){if(this.__bt[B].defaultValue!==undefined){throw new Error('Variant "'+B+'" is already defined!');
}}this.__bt[B].allowedValues=C;
this.__bt[B].defaultValue=D;
},get:function(E){var F=this.__bt[E];

if(qx.core.Variant.compilerIsSet(w,x)){qx.Bootstrap.warn("The method 'qx.core.Variant.get('"+E+"')' is deprecated: "+"Please use qx.core.Environment.get('"+E+"') instead.");

if(F===undefined){throw new Error('Variant "'+E+'" is not defined.');
}}
if(F.value!==undefined){return F.value;
}return F.defaultValue;
},__bv:function(){if(window.qxvariants){for(var G in qxvariants){if(qx.core.Variant.compilerIsSet(w,x)){if((G.split(j)).length<2){throw new Error('Malformed settings key "'+G+'". Must be following the schema "namespace.key".');
}}
if(!this.__bt[G]){this.__bt[G]={};
}this.__bt[G].value=qxvariants[G];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(H){}this.__bw(this.__bt);
}},__bw:function(){var I=document.location.search.slice(1).split(q);

for(var i=0;i<I.length;i++){var J=I[i].split(f);

if(J.length!=3||J[0]!=b){continue;
}var K=J[1];

if(!this.__bt[K]){this.__bt[K]={};
}
if(qx.core.Variant.compilerIsSet(w,x)){qx.Bootstrap.warn("URL variants are deprecated. Please use URL environment "+"variables instead. (qxvariant --> qxenv)");
}this.__bt[K].value=decodeURIComponent(J[2]);
}},select:function(L,M){if(qx.core.Variant.compilerIsSet(w,x)){qx.Bootstrap.warn("The method 'qx.core.Variant.select('"+L+"')' is deprecated: "+"Please use qx.core.Environment.select('"+L+"') instead.");
if(!this.__by(this.__bt[L])){throw new Error("Variant \""+L+"\" is not defined");
}
if(!this.__by(M)){throw new Error("the second parameter must be a map!");
}}
for(var N in M){if(this.isSet(L,N)){return M[N];
}}
if(M[s]!==undefined){return M[s];
}
if(qx.core.Variant.compilerIsSet(w,x)){throw new Error('No match for variant "'+L+'" in variants ['+qx.Bootstrap.getKeysAsString(M)+'] found, and no default ("default") given');
}},isSet:function(O,P){if(qx.core.Variant.compilerIsSet(w,x)){qx.Bootstrap.warn("The method 'qx.core.Variant.isSet('"+O+"')' is deprecated: "+"Please use 'qx.core.Environment.get('"+O+"') ==' instead. ");
}var Q=O+e+P;

if(this.__bu[Q]!==undefined){return this.__bu[Q];
}var S=false;
if(P.indexOf(t)<0){S=this.get(O)===P;
}else{var R=P.split(t);

for(var i=0,l=R.length;i<l;i++){if(this.get(O)===R[i]){S=true;
break;
}}}this.__bu[Q]=S;
return S;
},__bx:function(v){return typeof v===r&&v!==null&&v instanceof Array;
},__by:function(v){return typeof v===r&&v!==null&&!(v instanceof Array);
},__bz:function(T,U){for(var i=0,l=T.length;i<l;i++){if(T[i]==U){return true;
}}return false;
}},defer:function(V){V.defineDeprecated(m,[d,k,g,c],qx.bom.client.Engine.getName());
V.defineDeprecated(w,[x,u],x);
V.defineDeprecated(p,[x,u],u);
V.defineDeprecated(h,[x,u],x);
V.defineDeprecated(n,[x,u],u);
V.defineDeprecated(o,[x,u],u);
V.__bv();
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
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
var Q=this.__bO(P);
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
if(W){var Y=this.__bO(W[1]);
V.push(Y+W[2]);
}else{V.push(U[1]);
}}return V;
}else if(T.sourceURL&&T.line){return [this.__bO(T.sourceURL)+m+T.line];
}else{return [];
}},"opera":function(bc){if(bc.stacktrace){var be=bc.stacktrace;

if(be.indexOf(k)>=0){be=be.split(k)[0];
}if(be.indexOf(a)>=0){var bo=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bi=bf[2];
var bm=this.__bO(bi);
bg.push(bm+m+bn);
}}else{var bo=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bh=bf[2];
var bi=bf[3];
var bm=this.__bO(bi);
bg.push(bm+m+bn+m+bh);
}}return bg;
}else if(bc.message.indexOf("Backtrace:")>=0){var bg=[];
var bj=qx.lang.String.trim(bc.message.split("Backtrace:")[1]);
var bk=bj.split(f);

for(var i=0;i<bk.length;i++){var bd=bk[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(bd&&bd.length>=2){var bn=bd[1];
var bl=this.__bO(bd[2]);
bg.push(bl+m+bn);
}}return bg;
}else{return [];
}},"default":function(){return [];
}}),__bO:function(bp){var bt=d;
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

for(var i=0;i<I.length;i++){J=J.replace(new RegExp(f+(i+1),j),I[i]+k);
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
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__bP:0,__bQ:0,__bR:false,__bS:0,__bT:null,__bU:null,setMaxEntries:function(c){this.__bU=c;
this.clear();
},getMaxEntries:function(){return this.__bU;
},addEntry:function(d){this.__bT[this.__bP]=d;
this.__bP=this.__bV(this.__bP,1);
var e=this.getMaxEntries();

if(this.__bQ<e){this.__bQ++;
}if(this.__bR&&(this.__bS<e)){this.__bS++;
}},mark:function(){this.__bR=true;
this.__bS=0;
},clearMark:function(){this.__bR=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__bQ){f=this.__bQ;
}if(g&&this.__bR&&(f>this.__bS)){f=this.__bS;
}
if(f>0){var i=this.__bV(this.__bP,-1);
var h=this.__bV(i,-f+1);
var j;

if(h<=i){j=this.__bT.slice(h,i+1);
}else{j=this.__bT.slice(h,this.__bQ).concat(this.__bT.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__bT=new Array(this.getMaxEntries());
this.__bQ=0;
this.__bS=0;
this.__bP=0;
},__bV:function(k,l){var m=this.getMaxEntries();
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
qx.Class.define(t,{statics:{__bW:A,setLevel:function(J){this.__bW=J;
},getLevel:function(){return this.__bW;
},setTreshold:function(K){this.__ca.setMaxMessages(K);
},getTreshold:function(){return this.__ca.getMaxMessages();
},__bX:{},__bY:0,register:function(L){if(L.$$id){return;
}var N=this.__bY++;
this.__bX[N]=L;
L.$$id=N;
var M=this.__cb;
var O=this.__ca.getAllLogEvents();

for(var i=0,l=O.length;i<l;i++){if(M[O[i].level]>=M[this.__bW]){L.process(O[i]);
}}},unregister:function(P){var Q=P.$$id;

if(Q==null){return;
}delete this.__bX[Q];
delete P.$$id;
},debug:function(R,S){qx.log.Logger.__cc(A,arguments);
},info:function(T,U){qx.log.Logger.__cc(c,arguments);
},warn:function(V,W){qx.log.Logger.__cc(o,arguments);
},error:function(X,Y){qx.log.Logger.__cc(g,arguments);
},trace:function(ba){qx.log.Logger.__cc(c,[ba,qx.dev.StackTrace.getStackTrace().join(v)]);
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
}}},clear:function(){this.__ca.clearHistory();
},__ca:new qx.log.appender.RingBuffer(50),__cb:{debug:0,info:1,warn:2,error:3},__cc:function(bw,bx){var bC=this.__cb;

if(bC[bw]<bC[this.__bW]){return;
}var bz=bx.length<2?null:bx[0];
var bB=bz?1:0;
var by=[];

for(var i=bB,l=bx.length;i<l;i++){by.push(this.__ce(bx[i],true));
}var bD=new Date;
var bE={time:bD,offset:bD-qx.Bootstrap.LOADSTART,level:bw,items:by,win:window};
if(bz){if(bz.$$hash!==undefined){bE.object=bz.$$hash;
}else if(bz.$$type){bE.clazz=bz;
}}this.__ca.process(bE);
var bF=this.__bX;

for(var bA in bF){bF[bA].process(bE);
}},__cd:function(bG){if(bG===undefined){return s;
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
},__ce:function(bI,bJ){var bQ=this.__cd(bI);
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
}bM.push(this.__ce(bI[i],false));
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
bK=this.__ce(bI[bO],false);
bK.key=bO;
bM.push(bK);
}}else{var bN=0;

for(var bO in bI){bN++;
}bM=m+bN+x;
}break;
}return {type:bQ,text:bM,trace:bL};
}},defer:function(bR){var bS=qx.Bootstrap.$$logs;

for(var i=0;i<bS.length;i++){bR.__cc(bS[i][0],bS[i][1]);
}qx.Bootstrap.debug=bR.debug;
qx.Bootstrap.info=bR.info;
qx.Bootstrap.warn=bR.warn;
qx.Bootstrap.error=bR.error;
qx.Bootstrap.trace=bR.trace;
}});
})();
(function(){var f="qx.debug",e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__cf:{},__cg:0,__ch:[],register:function(g){var k=this.__cf;

if(!k){return;
}var j=g.$$hash;

if(j==null){var h=this.__ch;

if(h.length>0){j=h.pop();
}else{j=(this.__cg++)+d;
}g.$$hash=j;
}
if(qx.core.Environment.get(f)){if(!g.dispose){throw new Error("Invalid object: "+g);
}}k[j]=g;
},unregister:function(m){var n=m.$$hash;

if(n==null){return;
}var o=this.__cf;

if(o&&o[n]){delete o[n];
this.__ch.push(n);
}try{delete m.$$hash;
}catch(p){if(m.removeAttribute){m.removeAttribute(e);
}}},toHashCode:function(q){if(qx.core.Environment.get(f)){if(q==null){throw new Error("Invalid object: "+q);
}}var s=q.$$hash;

if(s!=null){return s;
}var r=this.__ch;

if(r.length>0){s=r.pop();
}else{s=(this.__cg++)+d;
}return q.$$hash=s;
},clearHashCode:function(t){if(qx.core.Environment.get(f)){if(t==null){throw new Error("Invalid object: "+t);
}}var u=t.$$hash;

if(u!=null){this.__ch.push(u);
try{delete t.$$hash;
}catch(v){if(t.removeAttribute){t.removeAttribute(e);
}}}},fromHashCode:function(w){return this.__cf[w]||null;
},shutdown:function(){this.inShutDown=true;
var y=this.__cf;
var A=[];

for(var z in y){A.push(z);
}A.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var x,i=0,l=A.length;

while(true){try{for(;i<l;i++){z=A[i];
x=y[z];

if(x&&x.dispose){x.dispose();
}}}catch(B){qx.Bootstrap.error(this,"Could not dispose object "+x.toString()+": "+B);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__cf;
},getRegistry:function(){return this.__cf;
}}});
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
(function(){var k="qx.debug",j="|bubble",h="|capture",g="|",f="': ",e="'",d="",c="_",b="Invalid Target.",a="Invalid capture flag.",J="Invalid event type.",I=" from the target '",H="Invalid callback function",G="Invalid event target.",F="unload",E="Failed to remove event listener for id '",D="Invalid context for callback.",C="Failed to add event listener for type '",B="UNKNOWN_",A="capture",s="qx.event.Manager",t="' on target '",q="Could not dispatch event '",r="DOM_",o="__bE",p="QX_",m=" to the target '",n="__bF",u="Failed to remove event listener for type '",v="Invalid id type.",x="c",w="DOCUMENT_",z="WIN_",y="Invalid event object.";
qx.Class.define(s,{extend:Object,construct:function(K,L){this.__bA=K;
this.__bB=qx.core.ObjectRegistry.toHashCode(K);
this.__bC=L;
if(K.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(K,F,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(K,F,arguments.callee);
self.dispose();
}));
}this.__bD={};
this.__bE={};
this.__bF={};
this.__bG={};
},statics:{__bH:0,getNextUniqueId:function(){return (this.__bH++)+d;
}},members:{__bC:null,__bD:null,__bF:null,__bI:null,__bE:null,__bG:null,__bA:null,__bB:null,getWindow:function(){return this.__bA;
},getWindowId:function(){return this.__bB;
},getHandler:function(M){var N=this.__bE[M.classname];

if(N){return N;
}return this.__bE[M.classname]=new M(this);
},getDispatcher:function(O){var P=this.__bF[O.classname];

if(P){return P;
}return this.__bF[O.classname]=new O(this,this.__bC);
},getListeners:function(Q,R,S){var T=Q.$$hash||qx.core.ObjectRegistry.toHashCode(Q);
var V=this.__bD[T];

if(!V){return null;
}var W=R+(S?h:j);
var U=V[W];
return U?U.concat():null;
},serializeListeners:function(X){var bf=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);
var bh=this.__bD[bf];
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
var bq=this.__bD[bo];

if(bq){var bl,bp,bk,bm;

for(var bn in bq){bl=bn.indexOf(g);
bp=bn.substring(0,bl);
bk=bn.charCodeAt(bl+1)===99;
bm=bq[bn];

if(bj){this.__bJ(bi,bp,bk);
}else{this.__bK(bi,bp,bk);
}}}},hasListener:function(br,bs,bt){if(qx.core.Environment.get(k)){if(br==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+br);
}}var bu=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);
var bw=this.__bD[bu];

if(!bw){return false;
}var bx=bs+(bt?h:j);
var bv=bw[bx];
return !!(bv&&bv.length>0);
},importListeners:function(by,bz){if(qx.core.Environment.get(k)){if(by==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+by);
}}var bF=by.$$hash||qx.core.ObjectRegistry.toHashCode(by);
var bG=this.__bD[bF]={};
var bC=qx.event.Manager;

for(var bA in bz){var bD=bz[bA];
var bE=bD.type+(bD.capture?h:j);
var bB=bG[bE];

if(!bB){bB=bG[bE]=[];
this.__bJ(by,bD.type,bD.capture);
}bB.push({handler:bD.listener,context:bD.self,unique:bD.unique||(bC.__bH++)+d});
}},addListener:function(bH,bI,bJ,self,bK){if(qx.core.Environment.get(k)){var bO=C+bI+e+m+bH.classname+f;
qx.core.Assert.assertObject(bH,bO+b);
qx.core.Assert.assertString(bI,bO+J);
qx.core.Assert.assertFunction(bJ,bO+H);

if(bK!==undefined){qx.core.Assert.assertBoolean(bK,a);
}}var bP=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);
var bR=this.__bD[bP];

if(!bR){bR=this.__bD[bP]={};
}var bN=bI+(bK?h:j);
var bM=bR[bN];

if(!bM){bM=bR[bN]=[];
}if(bM.length===0){this.__bJ(bH,bI,bK);
}var bQ=(qx.event.Manager.__bH++)+d;
var bL={handler:bJ,context:self,unique:bQ};
bM.push(bL);
return bN+g+bQ;
},findHandler:function(bS,bT){var cg=false,bX=false,ch=false,bU=false;
var ce;

if(bS.nodeType===1){cg=true;
ce=r+bS.tagName.toLowerCase()+c+bT;
}else if(bS.nodeType===9){bU=true;
ce=w+bT;
}else if(bS==this.__bA){bX=true;
ce=z+bT;
}else if(bS.classname){ch=true;
ce=p+bS.classname+c+bT;
}else{ce=B+bS+c+bT;
}var ca=this.__bG;

if(ca[ce]){return ca[ce];
}var cd=this.__bC.getHandlers();
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
},__bJ:function(ci,cj,ck){var cl=this.findHandler(ci,cj);

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
var cv=this.__bD[cu];

if(!cv){return false;
}var cq=cn+(cp?h:j);
var cr=cv[cq];

if(!cr){return false;
}var cs;

for(var i=0,l=cr.length;i<l;i++){cs=cr[i];

if(cs.handler===co&&cs.context===self){qx.lang.Array.removeAt(cr,i);

if(cr.length==0){this.__bK(cm,cn,cp);
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
var cH=this.__bD[cE];

if(!cH){return false;
}var cC=cG+(cy?h:j);
var cA=cH[cC];

if(!cA){return false;
}var cz;

for(var i=0,l=cA.length;i<l;i++){cz=cA[i];

if(cz.unique===cF){qx.lang.Array.removeAt(cA,i);

if(cA.length==0){this.__bK(cw,cG,cy);
}return true;
}}return false;
},removeAllListeners:function(cI){var cM=cI.$$hash||qx.core.ObjectRegistry.toHashCode(cI);
var cO=this.__bD[cM];

if(!cO){return false;
}var cK,cN,cJ;

for(var cL in cO){if(cO[cL].length>0){cK=cL.split(g);
cN=cK[0];
cJ=cK[1]===A;
this.__bK(cI,cN,cJ);
}}delete this.__bD[cM];
return true;
},deleteAllListeners:function(cP){delete this.__bD[cP];
},__bK:function(cQ,cR,cS){var cT=this.findHandler(cQ,cR);

if(cT){cT.unregisterEvent(cQ,cR,cS);
return;
}
if(qx.core.Environment.get(k)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cR+"' on target '"+cQ+"'!");
}},dispatchEvent:function(cU,event){if(qx.core.Environment.get(k)){var da=q+event+t+cU.classname+f;
qx.core.Assert.assertNotUndefined(cU,da+G);
qx.core.Assert.assertNotNull(cU,da+G);
qx.core.Assert.assertInstance(event,qx.event.type.Event,da+y);
}var db=event.getType();

if(!event.getBubbles()&&!this.hasListener(cU,db)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cU);
}var cY=this.__bC.getDispatchers();
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
},dispose:function(){this.__bC.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,o);
qx.util.DisposeUtil.disposeMap(this,n);
this.__bD=this.__bA=this.__bI=null;
this.__bC=this.__bG=null;
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__dA:null,__dB:null,__dC:null,__dD:null,stringify:function(bb,bc,bd){this.__dA=p;
this.__dB=p;
this.__dD=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__dB+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__dB=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__dC=bc;
}else{this.__dC=null;
}return this.__dE(p,{'':bb});
},__dE:function(be,bf){var bi=this.__dA,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__dC===e){bj=this.__dC.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__dF(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__dA+=this.__dB;
bg=[];

if(this.__dD.indexOf(bj)!==-1){throw new TypeError(V);
}this.__dD.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__dE(i,bj)||h;
}this.__dD.pop();
if(bg.length===0){var bh=s;
}else if(this.__dA){bh=E+this.__dA+bg.join(Y+this.__dA)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__dA=bi;
return bh;
case z:this.__dA+=this.__dB;
bg=[];

if(this.__dD.indexOf(bj)!==-1){throw new TypeError(V);
}this.__dD.push(bj);
if(this.__dC&&typeof this.__dC===f){var length=this.__dC.length;

for(var i=0;i<length;i+=1){var k=this.__dC[i];

if(typeof k===W){var v=this.__dE(k,bj);

if(v){bg.push(this.__dF(k)+(this.__dA?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__dE(k,bj);

if(v){bg.push(this.__dF(k)+(this.__dA?g:m)+v);
}}}}this.__dD.pop();
if(bg.length===0){var bh=A;
}else if(this.__dA){bh=w+this.__dA+bg.join(Y+this.__dA)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__dA=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__dF:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
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
return typeof bs===e?this.__dG({'':j},p,bs):j;
}throw new SyntaxError(P);
},__dG:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__dG(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
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
(function(){var c="qx.debug",b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(d,e){if(qx.core.Environment.get(c)){qx.core.Assert.assertNotUndefined(d);
}this.__dH=b+(d&&d.message?d.message:d);
Error.call(this,this.__dH);
this.__dI=e;
this.__dJ=d;
},members:{__dJ:null,__dI:null,__dH:null,toString:function(){return this.__dH;
},getArguments:function(){return this.__dI;
},getSourceException:function(){return this.__dJ;
}},destruct:function(){this.__dJ=null;
this.__dI=null;
this.__dH=null;
}});
})();
(function(){var c="qx.globalErrorHandling",b="qx.event.GlobalError",a="on";
qx.Bootstrap.define(b,{statics:{setErrorHandler:function(d,e){this.__dK=d||null;
this.__dL=e||window;

if(qx.core.Environment.get(c)){if(d&&window.onerror){var f=qx.Bootstrap.bind(this.__dN,this);

if(this.__dM==null){this.__dM=window.onerror;
}var self=this;
window.onerror=function(g,h,i){self.__dM(g,h,i);
f(g,h,i);
};
}
if(d&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__dN,this);
}if(this.__dK==null){if(this.__dM!=null){window.onerror=this.__dM;
this.__dM=null;
}else{window.onerror=null;
}}}},__dN:function(j,k,l){if(this.__dK){this.handleError(new qx.core.WindowError(j,k,l));
return true;
}},observeMethod:function(m){if(qx.core.Environment.get(c)){var self=this;
return function(){if(!self.__dK){return m.apply(this,arguments);
}
try{return m.apply(this,arguments);
}catch(n){self.handleError(new qx.core.GlobalError(n,arguments));
}};
}else{return m;
}},handleError:function(o){if(this.__dK){this.__dK.call(this.__dL,o);
}}},defer:function(p){qx.core.Environment.add(c,true);
p.setErrorHandler(null,null);
qx.core.Setting.defineDeprecated(c,a);
}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__dy=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__dy:null,message:null,getComment:function(){return this.__dy;
},toString:function(){return this.__dy+(this.message?b+this.message:c);
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__dz=qx.dev.StackTrace.getStackTrace();
},members:{__dz:null,getStackTrace:function(){return this.__dz;
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
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bz="' but found ",by="]",bx=", ",bw="The value '",bv=" != ",bu="qx.core.Object",bt="Expected value to be an array but found ",bs=") was fired.",br="Expected value to be an integer >= 0 but found ",bq="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",S="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",V="null",bm="' but found '",bg="' must must be a key of the map '",J="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",bn="qx.util.ColorUtil",I=": ",L="The raised exception does not have the expected type! ",N=") not fired.",Q="qx.core.Assert",T="Expected value to be typeof object but found ",W="' (identical) but found '",bd="' must have any of the values defined in the array '",bi="Expected value to be a number but found ",y="Called assertFalse with '",z="qx.ui.core.Widget",K="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",X="Array[",bf="' does not match the regular expression '",be="' to be not identical with '",U="Expected [",bc="' arguments but found '",a="', which cannot be converted to a CSS color!",bh="qx.core.AssertionError",A="Expected value to be a boolean but found ",B="Expected value not to be null but found null!",P="))!",b="Expected value to be a qooxdoo widget but found ",c="Expected value to be typeof '",H="Expected value to be typeof function but found ",C="Expected value to be an integer but found ",D="Called fail().",G="The parameter 're' must be a string or a regular expression.",R="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",bj="], but found [",M="Wrong number of arguments given. Expected '",bl="object";
qx.Class.define(Q,{statics:{__ci:true,__cj:function(bA,bB){var bF=p;

for(var i=1,l=arguments.length;i<l;i++){bF=bF+this.__ck(arguments[i]);
}var bE=p;

if(bF){bE=bA+I+bF;
}else{bE=bA;
}var bD=bb+bE;

if(this.__ci){qx.Bootstrap.error(bD);
}
if(qx.Class.isDefined(bh)){var bC=new qx.core.AssertionError(bA,bF);

if(this.__ci){qx.Bootstrap.error("Stack trace: \n"+bC.getStackTrace());
}throw bC;
}else{throw new Error(bD);
}},__ck:function(bG){var bH;

if(bG===null){bH=V;
}else if(qx.lang.Type.isArray(bG)&&bG.length>10){bH=X+bG.length+by;
}else if((bG instanceof Object)&&(bG.toString==null)){bH=qx.lang.Json.stringify(bG,null,2);
}else{try{bH=bG.toString();
}catch(e){bH=p;
}}return bH;
},assert:function(bI,bJ){bI==true||this.__cj(bJ||p,O);
},fail:function(bK,bL){var bM=bL?p:D;
this.__cj(bK||p,bM);
},assertTrue:function(bN,bO){(bN===true)||this.__cj(bO||p,u,bN,m);
},assertFalse:function(bP,bQ){(bP===false)||this.__cj(bQ||p,y,bP,m);
},assertEquals:function(bR,bS,bT){bR==bS||this.__cj(bT||p,k,bR,bm,bS,n);
},assertNotEquals:function(bU,bV,bW){bU!=bV||this.__cj(bW||p,k,bU,bq,bV,n);
},assertIdentical:function(bX,bY,ca){bX===bY||this.__cj(ca||p,k,bX,W,bY,n);
},assertNotIdentical:function(cb,cc,cd){cb!==cc||this.__cj(cd||p,k,cb,be,cc,n);
},assertNotUndefined:function(ce,cf){ce!==undefined||this.__cj(cf||p,bo);
},assertUndefined:function(cg,ch){cg===undefined||this.__cj(ch||p,t,cg,o);
},assertNotNull:function(ci,cj){ci!==null||this.__cj(cj||p,B);
},assertNull:function(ck,cl){ck===null||this.__cj(cl||p,F,ck,o);
},assertJsonEquals:function(cm,cn,co){this.assertEquals(qx.lang.Json.stringify(cm),qx.lang.Json.stringify(cn),co);
},assertMatch:function(cp,cq,cr){this.assertString(cp);
this.assert(qx.lang.Type.isRegExp(cq)||qx.lang.Type.isString(cq),G);
cp.search(cq)>=0||this.__cj(cr||p,J,cp,bf,cq.toString(),n);
},assertArgumentsCount:function(cs,ct,cu,cv){var cw=cs.length;
(cw>=ct&&cw<=cu)||this.__cj(cv||p,M,ct,w,cu,bc,arguments.length,ba);
},assertEventFired:function(cx,event,cy,cz,cA){var cC=false;
var cB=function(e){if(cz){cz.call(cx,e);
}cC=true;
};
var cD;

try{cD=cx.addListener(event,cB,cx);
cy.call();
}catch(cE){throw cE;
}finally{try{cx.removeListenerById(cD);
}catch(cF){}}cC===true||this.__cj(cA||p,f,event,N);
},assertEventNotFired:function(cG,event,cH,cI){var cK=false;
var cJ=function(e){cK=true;
};
var cL=cG.addListener(event,cJ,cG);
cH.call();
cK===false||this.__cj(cI||p,f,event,bs);
cG.removeListenerById(cL);
},assertException:function(cM,cN,cO,cP){var cN=cN||Error;
var cQ;

try{this.__ci=false;
cM();
}catch(cR){cQ=cR;
}finally{this.__ci=true;
}
if(cQ==null){this.__cj(cP||p,s);
}cQ instanceof cN||this.__cj(cP||p,L,cN,bv,cQ);

if(cO){this.assertMatch(cQ.toString(),cO,cP);
}},assertInArray:function(cS,cT,cU){cT.indexOf(cS)!==-1||this.__cj(cU||p,bw,cS,bd,cT,m);
},assertArrayEquals:function(cV,cW,cX){this.assertArray(cV,cX);
this.assertArray(cW,cX);
cX=cX||U+cV.join(bx)+bj+cW.join(bx)+by;

if(cV.length!==cW.length){this.fail(cX,true);
}
for(var i=0;i<cV.length;i++){if(cV[i]!==cW[i]){this.fail(cX,true);
}}},assertKeyInMap:function(cY,da,db){da[cY]!==undefined||this.__cj(db||p,bw,cY,bg,da,m);
},assertFunction:function(dc,dd){qx.lang.Type.isFunction(dc)||this.__cj(dd||p,H,dc,o);
},assertString:function(de,df){qx.lang.Type.isString(de)||this.__cj(df||p,bp,de,o);
},assertBoolean:function(dg,dh){qx.lang.Type.isBoolean(dg)||this.__cj(dh||p,A,dg,o);
},assertNumber:function(di,dj){(qx.lang.Type.isNumber(di)&&isFinite(di))||this.__cj(dj||p,bi,di,o);
},assertPositiveNumber:function(dk,dl){(qx.lang.Type.isNumber(dk)&&isFinite(dk)&&dk>=0)||this.__cj(dl||p,R,dk,o);
},assertInteger:function(dm,dn){(qx.lang.Type.isNumber(dm)&&isFinite(dm)&&dm%1===0)||this.__cj(dn||p,C,dm,o);
},assertPositiveInteger:function(dp,dq){var dr=(qx.lang.Type.isNumber(dp)&&isFinite(dp)&&dp%1===0&&dp>=0);
dr||this.__cj(dq||p,br,dp,o);
},assertInRange:function(ds,dt,du,dv){(ds>=dt&&ds<=du)||this.__cj(dv||p,qx.lang.String.format(Y,[ds,dt,du]));
},assertObject:function(dw,dx){var dy=dw!==null&&(qx.lang.Type.isObject(dw)||typeof dw===bl);
dy||this.__cj(dx||p,T,(dw),o);
},assertArray:function(dz,dA){qx.lang.Type.isArray(dz)||this.__cj(dA||p,bt,dz,o);
},assertMap:function(dB,dC){qx.lang.Type.isObject(dB)||this.__cj(dC||p,v,dB,o);
},assertRegExp:function(dD,dE){qx.lang.Type.isRegExp(dD)||this.__cj(dE||p,r,dD,o);
},assertType:function(dF,dG,dH){this.assertString(dG,S);
typeof (dF)===dG||this.__cj(dH||p,c,dG,bz,dF,o);
},assertInstance:function(dI,dJ,dK){var dL=dJ.classname||dJ+p;
dI instanceof dJ||this.__cj(dK||p,bk,dL,bz,dI,o);
},assertInterface:function(dM,dN,dO){qx.Class.implementsInterface(dM,dN)||this.__cj(dO||p,x,dM,E,dN,n);
},assertCssColor:function(dP,dQ,dR){var dS=qx.Class.getByName(bn);

if(!dS){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dU=dS.stringToRgb(dP);

try{var dT=dS.stringToRgb(dQ);
}catch(dW){this.__cj(dR||p,d,dP,j,dU.join(h),g,dQ,a);
}var dV=dU[0]==dT[0]&&dU[1]==dT[1]&&dU[2]==dT[2];
dV||this.__cj(dR||p,d,dU,j,dU.join(h),g,dQ,j,dT.join(h),P);
},assertElement:function(dX,dY){!!(dX&&dX.nodeType===1)||this.__cj(dY||p,q,dX,n);
},assertQxObject:function(ea,eb){this.__cl(ea,bu)||this.__cj(eb||p,K,ea,o);
},assertQxWidget:function(ec,ed){this.__cl(ec,z)||this.__cj(ed||p,b,ec,o);
},__cl:function(ee,ef){if(!ee){return false;
}var eg=ee.constructor;

while(eg){if(eg.classname===ef){return true;
}eg=eg.superclass;
}return false;
}}});
})();
(function(){var k="qx.debug",j="Invalid event target.",i="Invalid event dispatcher!",h="': ",g="Invalid event handler.",f="' on target '",e="Could not fire event '",d="undefined",c="qx.event.Registration";
qx.Class.define(c,{statics:{__bL:{},getManager:function(l){if(l==null){if(qx.core.Environment.get(k)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}l=window;
}else if(l.nodeType){l=qx.dom.Node.getWindow(l);
}else if(!qx.dom.Node.isWindow(l)){l=window;
}var n=l.$$hash||qx.core.ObjectRegistry.toHashCode(l);
var m=this.__bL[n];

if(!m){m=new qx.event.Manager(l,this);
this.__bL[n]=m;
}return m;
},removeManager:function(o){var p=o.getWindowId();
delete this.__bL[p];
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
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bM:[],addHandler:function(Y){if(qx.core.Environment.get(k)){qx.core.Assert.assertInterface(Y,qx.event.IEventHandler,g);
}this.__bM.push(Y);
this.__bM.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bM;
},__bN:[],addDispatcher:function(ba,bb){if(qx.core.Environment.get(k)){qx.core.Assert.assertInterface(ba,qx.event.IEventDispatcher,i);
}this.__bN.push(ba);
this.__bN.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bN;
}}});
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
},__cm:qx.event.Registration,addListener:function(K,L,self,M){if(!this.$$disposed){return this.__cm.addListener(this,K,L,self,M);
}return null;
},addListenerOnce:function(N,O,self,P){var Q=function(e){this.removeListener(N,Q,this,P);
O.call(self||this,e);
};
return this.addListener(N,Q,this,P);
},removeListener:function(R,S,self,T){if(!this.$$disposed){return this.__cm.removeListener(this,R,S,self,T);
}return false;
},removeListenerById:function(U){if(!this.$$disposed){return this.__cm.removeListenerById(this,U);
}return false;
},hasListener:function(V,W){return this.__cm.hasListener(this,V,W);
},dispatchEvent:function(X){if(!this.$$disposed){return this.__cm.dispatchEvent(this,X);
}return true;
},fireEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__cm.fireEvent(this,Y,ba,bb);
}return true;
},fireNonBubblingEvent:function(bc,bd,be){if(!this.$$disposed){return this.__cm.fireNonBubblingEvent(this,bc,bd,be);
}return true;
},fireDataEvent:function(bf,bg,bh,bi){if(!this.$$disposed){if(bh===undefined){bh=null;
}return this.__cm.fireNonBubblingEvent(this,bf,qx.event.type.Data,[bg,bh,!!bi]);
}return true;
},__cn:null,setUserData:function(bj,bk){if(!this.__cn){this.__cn={};
}this.__cn[bj]=bk;
},getUserData:function(bl){if(!this.__cn){return null;
}var bm=this.__cn[bl];
return bm===undefined?null:bm;
},__co:qx.log.Logger,debug:function(bn){this.__cp(g,arguments);
},info:function(bo){this.__cp(m,arguments);
},warn:function(bp){this.__cp(c,arguments);
},error:function(bq){this.__cp(j,arguments);
},trace:function(){this.__co.trace(this);
},__cp:function(br,bs){var bt=qx.lang.Array.fromArguments(bs);
bt.unshift(this);
this.__co[br].apply(this.__co,bt);
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
}if(this.__cq){this.__cq();
}if(qx.core.Environment.get(t)){if(qx.core.Environment.get(s)>0){var bx,bv;

for(bx in this){bv=this[bx];
if(bv!==null&&typeof bv===f&&!(qx.Bootstrap.isString(bv))){if(this.constructor.prototype[bx]!=null){continue;
}var bz=navigator.userAgent.indexOf(o)!=-1;
var by=navigator.userAgent.indexOf(q)!=-1;
if(bz||by){if(bv instanceof qx.core.Object||qx.core.Environment.get(s)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+bx+"' in "+this.classname+"["+this.toHashCode()+"]: "+bv);
delete this[bx];
}}else{if(qx.core.Environment.get(s)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+bx+"' in "+this.classname+"["+this.toHashCode()+"]: "+bv);
delete this[bx];
}}}}}}},__cq:null,__cr:function(){var bA=qx.Class.getProperties(this.constructor);

for(var i=0,l=bA.length;i<l;i++){delete this[a+bA[i]];
}},_disposeObjects:function(bB){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bC){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bD){qx.util.DisposeUtil.disposeArray(this,bD);
},_disposeMap:function(bE){qx.util.DisposeUtil.disposeMap(this,bE);
}},environment:{"qx.disposerDebugLevel":0},defer:function(bF,bG){if(qx.core.Environment.get(t)){qx.Class.include(bF,qx.core.MAssert);
}var bI=navigator.userAgent.indexOf(q)!=-1;
var bH=navigator.userAgent.indexOf(o)!=-1;
if(bI||bH){bG.__cq=bG.__cr;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__cn=null;
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
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__dR={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__dR:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__dR[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__dR){return;
}var h=g.classname;
var j=this.__dR[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__dR[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__dR;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__dR;
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
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__ie=false;
this.__if=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__ii();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__ig:null,__ie:null,__if:null,__ih:null,__ii:function(){if(!this.__ig&&this.__ie&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__ig=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__ig=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__ig;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__ie=true;
this.__ii();
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
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__ie=true;
this.__ii();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__ih){this.__ih=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
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
(function(){var j="",i="ready",h="shutdown",g="engine.name",f="qx.application",d="beforeunload",c="qx.core.Init",b="os.name",a="engine.version";
qx.Class.define(c,{statics:{getApplication:function(){return this.__ij||null;
},ready:function(){if(this.__ij){return;
}
if(qx.core.Environment.get(g)==j){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(a)==j){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==j){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var l=qx.core.Environment.get(f);
var m=qx.Class.getByName(l);

if(m){this.__ij=new m;
var k=new Date;
this.__ij.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-k)+"ms");
var k=new Date;
this.__ij.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-k)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+l);
}},__ik:function(e){var n=this.__ij;

if(n){e.setReturnValue(n.close());
}},__il:function(){var o=this.__ij;

if(o){o.terminate();
}}},defer:function(p){qx.event.Registration.addListener(window,i,p.ready,p);
qx.event.Registration.addListener(window,h,p.__il,p);
qx.event.Registration.addListener(window,d,p.__ik,p);
}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__sV:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__sV;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__sV=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__sV=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var m="vertical",l="main",k="Flex:1",j="Flex:1; Min:250",i="Auto",h="Flex:2",g="Flex:0",f="Flex:2; Max:100",e="Flex:1; Max:100",d="Flex:1; Max:200",a="Flex:2; Min:250",c="Flex:0; Min:350",b="demobrowser.demo.layout.VSplit";
qx.Class.define(b,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);
var scroll=new qx.ui.container.Scroll();
this.getRoot().add(scroll,{edge:0});
var n=new qx.ui.container.Composite(new qx.ui.layout.Canvas()).set({padding:20,allowShrinkX:false,allowShrinkY:false});
scroll.add(n);
n.add(this.getSplitPaneTwoFlexSimple(),{left:0});
n.add(this.getSplitPaneTwoFlexWithOneMin(),{left:210});
n.add(this.getSplitPaneTwoFlexWithOneMax(),{left:420});
n.add(this.getSplitPaneTwoFlexWithTwoMin(),{left:630});
n.add(this.getSplitPaneTwoFlexWithTwoMax(),{left:840});
n.add(this.getSplitPaneOneFlexSimple(),{top:550,left:0});
n.add(this.getSplitPaneOneFlexSimpleWithMax(),{top:550,left:210});
n.add(this.getSplitPaneOneFlexSimpleWithMin(),{top:550,left:420});
n.add(this.getSplitPaneAuto(),{top:550,left:630});
},getSplitPaneTwoFlexSimple:function(){var p=new qx.ui.splitpane.Pane(m);
p.setHeight(400);
p.setDecorator(l);
var o=new qx.ui.form.TextArea(k);
o.setDecorator(null);
o.setWrap(true);
p.add(o,1);
var q=new qx.ui.form.TextArea(h);
q.setDecorator(null);
q.setWrap(true);
p.add(q,2);
return p;
},getSplitPaneTwoFlexWithOneMin:function(){var s=new qx.ui.splitpane.Pane(m);
s.setHeight(400);
s.setDecorator(l);
var r=new qx.ui.form.TextArea(j);
r.setDecorator(null);
r.setWrap(true);
r.setMinHeight(250);
s.add(r,1);
var t=new qx.ui.form.TextArea(h);
t.setDecorator(null);
t.setWrap(true);
s.add(t,2);
return s;
},getSplitPaneTwoFlexWithOneMax:function(){var v=new qx.ui.splitpane.Pane(m);
v.setHeight(400);
v.setDecorator(l);
var u=new qx.ui.form.TextArea(k);
u.setDecorator(null);
u.setWrap(true);
v.add(u,1);
var w=new qx.ui.form.TextArea(f);
w.setDecorator(null);
w.setWrap(true);
w.setMaxHeight(100);
v.add(w,2);
return v;
},getSplitPaneTwoFlexWithTwoMin:function(){var y=new qx.ui.splitpane.Pane(m);
y.setHeight(400);
y.setDecorator(l);
var x=new qx.ui.form.TextArea(j);
x.setDecorator(null);
x.setWrap(true);
x.setMinHeight(250);
y.add(x,1);
var z=new qx.ui.form.TextArea(a);
z.setDecorator(null);
z.setWrap(true);
z.setMinHeight(250);
y.add(z,2);
return y;
},getSplitPaneTwoFlexWithTwoMax:function(){var B=new qx.ui.splitpane.Pane(m);
B.setHeight(400);
B.setDecorator(l);
var A=new qx.ui.form.TextArea(e);
A.setDecorator(null);
A.setWrap(true);
A.setMaxHeight(100);
B.add(A,1);
var C=new qx.ui.form.TextArea(f);
C.setDecorator(null);
C.setWrap(true);
C.setMaxHeight(100);
B.add(C,2);
return B;
},getSplitPaneOneFlexSimple:function(){var E=new qx.ui.splitpane.Pane(m);
E.setHeight(400);
E.setDecorator(l);
var D=new qx.ui.form.TextArea(g);
D.setDecorator(null);
D.setWrap(true);
E.add(D,0);
var F=new qx.ui.form.TextArea(k);
F.setDecorator(null);
F.setWrap(true);
E.add(F);
return E;
},getSplitPaneOneFlexSimpleWithMax:function(){var H=new qx.ui.splitpane.Pane(m);
H.setHeight(400);
H.setDecorator(l);
var G=new qx.ui.form.TextArea(g);
G.setDecorator(null);
G.setWrap(true);
H.add(G,0);
var I=new qx.ui.form.TextArea(d);
I.setDecorator(null);
I.setWrap(true);
I.setMaxHeight(200);
H.add(I);
return H;
},getSplitPaneOneFlexSimpleWithMin:function(){var K=new qx.ui.splitpane.Pane(m);
K.setHeight(400);
K.setDecorator(l);
var J=new qx.ui.form.TextArea(c);
J.setDecorator(null);
J.setWrap(true);
J.setMinHeight(350);
K.add(J,0);
var L=new qx.ui.form.TextArea(k);
L.setDecorator(null);
L.setWrap(true);
K.add(L);
return K;
},getSplitPaneAuto:function(){var N=new qx.ui.splitpane.Pane(m);
N.setDecorator(l);
var M=new qx.ui.form.TextArea(i);
M.setDecorator(null);
M.setWrap(true);
N.add(M,0);
var O=new qx.ui.form.TextArea(i);
O.setDecorator(null);
O.setWrap(true);
N.add(O);
return N;
}}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__di:null,__dj:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__di=b;
this.__dj=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__di=this.__di;
f.__dj=this.__dj;
return f;
},getData:function(){return this.__di;
},getOldData:function(){return this.__dj;
}},destruct:function(){this.__di=this.__dj=null;
}});
})();
(function(){var m="get",l="",k="[",h=".",g="last",f="change",d="]",c="Number",b="String",a="qx.debug.databinding",K="set",J="deepBinding",I="item",H="reset",G="qx.data.SingleValueBinding",F="qx.debug",E="' (",D="Boolean",C=") to the object '",B="Integer",u=" of object ",v="qx.event.type.Data",s="Binding property ",t="DEBUG_ON",q="Can not remove the bindings for null object!",r="Binding from '",n="PositiveNumber",p="PositiveInteger",w="Binding does not exist!",x=" is not an data (qx.event.type.Data) event on ",z=").",y="Date",A=" not possible: No event available. ";
qx.Class.define(G,{statics:{DEBUG_ON:false,__dk:{},bind:function(L,M,N,O,P){var bb=this.__dm(L,M,N,O,P);
var V=M.split(h);
var R=this.__ds(V);
var ba=[];
var W=[];
var X=[];
var T=[];
var U=L;
try{for(var i=0;i<V.length;i++){if(R[i]!==l){T.push(f);
}else{T.push(this.__dn(U,V[i]));
}ba[i]=U;
if(i==V.length-1){if(R[i]!==l){var bf=R[i]===g?U.length-1:R[i];
var Q=U.getItem(bf);
this.__dr(Q,N,O,P,L);
X[i]=this.__dt(U,T[i],N,O,P,R[i]);
}else{if(V[i]!=null&&U[m+qx.lang.String.firstUp(V[i])]!=null){var Q=U[m+qx.lang.String.firstUp(V[i])]();
this.__dr(Q,N,O,P,L);
}X[i]=this.__dt(U,T[i],N,O,P);
}}else{var bc={index:i,propertyNames:V,sources:ba,listenerIds:X,arrayIndexValues:R,targetObject:N,targetPropertyChain:O,options:P,listeners:W};
var Y=qx.lang.Function.bind(this.__dl,this,bc);
W.push(Y);
X[i]=U.addListener(T[i],Y);
}if(U[m+qx.lang.String.firstUp(V[i])]==null){U=null;
}else if(R[i]!==l){U=U[m+qx.lang.String.firstUp(V[i])](R[i]);
}else{U=U[m+qx.lang.String.firstUp(V[i])]();
}
if(!U){break;
}}}catch(bg){for(var i=0;i<ba.length;i++){if(ba[i]&&X[i]){ba[i].removeListenerById(X[i]);
}}var be=bb.targets;
var S=bb.listenerIds[i];
for(var i=0;i<be.length;i++){if(be[i]&&S[i]){be[i].removeListenerById(S[i]);
}}throw bg;
}var bd={type:J,listenerIds:X,sources:ba,targetListenerIds:bb.listenerIds,targets:bb.targets};
this.__du(bd,L,M,N,O);
return bd;
},__dl:function(bh){if(bh.options&&bh.options.onUpdate){bh.options.onUpdate(bh.sources[bh.index],bh.targetObject);
}for(var j=bh.index+1;j<bh.propertyNames.length;j++){var bl=bh.sources[j];
bh.sources[j]=null;

if(!bl){continue;
}bl.removeListenerById(bh.listenerIds[j]);
}var bl=bh.sources[bh.index];
for(var j=bh.index+1;j<bh.propertyNames.length;j++){if(bh.arrayIndexValues[j-1]!==l){bl=bl[m+qx.lang.String.firstUp(bh.propertyNames[j-1])](bh.arrayIndexValues[j-1]);
}else{bl=bl[m+qx.lang.String.firstUp(bh.propertyNames[j-1])]();
}bh.sources[j]=bl;
if(!bl){this.__do(bh.targetObject,bh.targetPropertyChain);
break;
}if(j==bh.propertyNames.length-1){if(qx.Class.implementsInterface(bl,qx.data.IListData)){var bm=bh.arrayIndexValues[j]===g?bl.length-1:bh.arrayIndexValues[j];
var bj=bl.getItem(bm);
this.__dr(bj,bh.targetObject,bh.targetPropertyChain,bh.options,bh.sources[bh.index]);
bh.listenerIds[j]=this.__dt(bl,f,bh.targetObject,bh.targetPropertyChain,bh.options,bh.arrayIndexValues[j]);
}else{if(bh.propertyNames[j]!=null&&bl[m+qx.lang.String.firstUp(bh.propertyNames[j])]!=null){var bj=bl[m+qx.lang.String.firstUp(bh.propertyNames[j])]();
this.__dr(bj,bh.targetObject,bh.targetPropertyChain,bh.options,bh.sources[bh.index]);
}var bk=this.__dn(bl,bh.propertyNames[j]);
bh.listenerIds[j]=this.__dt(bl,bk,bh.targetObject,bh.targetPropertyChain,bh.options);
}}else{if(bh.listeners[j]==null){var bi=qx.lang.Function.bind(this.__dl,this,bh);
bh.listeners.push(bi);
}if(qx.Class.implementsInterface(bl,qx.data.IListData)){var bk=f;
}else{var bk=this.__dn(bl,bh.propertyNames[j]);
}bh.listenerIds[j]=bl.addListener(bk,bh.listeners[j]);
}}},__dm:function(bn,bo,bp,bq,br){var bv=bq.split(h);
var bt=this.__ds(bv);
var bA=[];
var bz=[];
var bx=[];
var bw=[];
var bu=bp;
for(var i=0;i<bv.length-1;i++){if(bt[i]!==l){bw.push(f);
}else{try{bw.push(this.__dn(bu,bv[i]));
}catch(e){break;
}}bA[i]=bu;
var by=function(){for(var j=i+1;j<bv.length-1;j++){var bD=bA[j];
bA[j]=null;

if(!bD){continue;
}bD.removeListenerById(bx[j]);
}var bD=bA[i];
for(var j=i+1;j<bv.length-1;j++){var bB=qx.lang.String.firstUp(bv[j-1]);
if(bt[j-1]!==l){var bE=bt[j-1]===g?bD.getLength()-1:bt[j-1];
bD=bD[m+bB](bE);
}else{bD=bD[m+bB]();
}bA[j]=bD;
if(bz[j]==null){bz.push(by);
}if(qx.Class.implementsInterface(bD,qx.data.IListData)){var bC=f;
}else{try{var bC=qx.data.SingleValueBinding.__dn(bD,bv[j]);
}catch(e){break;
}}bx[j]=bD.addListener(bC,bz[j]);
}qx.data.SingleValueBinding.updateTarget(bn,bo,bp,bq,br);
};
bz.push(by);
bx[i]=bu.addListener(bw[i],by);
var bs=qx.lang.String.firstUp(bv[i]);
if(bu[m+bs]==null){bu=null;
}else if(bt[i]!==l){bu=bu[m+bs](bt[i]);
}else{bu=bu[m+bs]();
}
if(!bu){break;
}}return {listenerIds:bx,targets:bA};
},updateTarget:function(bF,bG,bH,bI,bJ){var bK=this.getValueFromObject(bF,bG);
bK=qx.data.SingleValueBinding.__dv(bK,bH,bI,bJ,bF);
this.__dp(bH,bI,bK);
},getValueFromObject:function(o,bL){var bP=this.__dq(o,bL);
var bN;

if(bP!=null){var bR=bL.substring(bL.lastIndexOf(h)+1,bL.length);
if(bR.charAt(bR.length-1)==d){var bM=bR.substring(bR.lastIndexOf(k)+1,bR.length-1);
var bO=bR.substring(0,bR.lastIndexOf(k));
var bQ=bP[m+qx.lang.String.firstUp(bO)]();

if(bM==g){bM=bQ.length-1;
}
if(bQ!=null){bN=bQ.getItem(bM);
}}else{bN=bP[m+qx.lang.String.firstUp(bR)]();
}}return bN;
},__dn:function(bS,bT){var bU=this.__dw(bS,bT);
if(bU==null){if(qx.Class.supportsEvent(bS.constructor,bT)){bU=bT;
}else if(qx.Class.supportsEvent(bS.constructor,f+qx.lang.String.firstUp(bT))){bU=f+qx.lang.String.firstUp(bT);
}else{throw new qx.core.AssertionError(s+bT+u+bS+A);
}}return bU;
},__do:function(bV,bW){var bX=this.__dq(bV,bW);

if(bX!=null){var bY=bW.substring(bW.lastIndexOf(h)+1,bW.length);
if(bY.charAt(bY.length-1)==d){this.__dp(bV,bW,null);
return;
}if(bX[H+qx.lang.String.firstUp(bY)]!=undefined){bX[H+qx.lang.String.firstUp(bY)]();
}else{bX[K+qx.lang.String.firstUp(bY)](null);
}}},__dp:function(ca,cb,cc){var cg=this.__dq(ca,cb);

if(cg!=null){var ch=cb.substring(cb.lastIndexOf(h)+1,cb.length);
if(ch.charAt(ch.length-1)==d){var cd=ch.substring(ch.lastIndexOf(k)+1,ch.length-1);
var cf=ch.substring(0,ch.lastIndexOf(k));
var ce=ca;

if(!qx.Class.implementsInterface(ce,qx.data.IListData)){ce=cg[m+qx.lang.String.firstUp(cf)]();
}
if(cd==g){cd=ce.length-1;
}
if(ce!=null){ce.setItem(cd,cc);
}}else{cg[K+qx.lang.String.firstUp(ch)](cc);
}}},__dq:function(ci,cj){var cm=cj.split(h);
var cn=ci;
for(var i=0;i<cm.length-1;i++){try{var cl=cm[i];
if(cl.indexOf(d)==cl.length-1){var ck=cl.substring(cl.indexOf(k)+1,cl.length-1);
cl=cl.substring(0,cl.indexOf(k));
}if(cl!=l){cn=cn[m+qx.lang.String.firstUp(cl)]();
}if(ck!=null){if(ck==g){ck=cn.length-1;
}cn=cn.getItem(ck);
ck=null;
}}catch(co){return null;
}}return cn;
},__dr:function(cp,cq,cr,cs,ct){cp=this.__dv(cp,cq,cr,cs,ct);
if(cp===undefined){this.__do(cq,cr);
}if(cp!==undefined){try{this.__dp(cq,cr,cp);
if(cs&&cs.onUpdate){cs.onUpdate(ct,cq,cp);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cs&&cs.onSetFail){cs.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cp+" on "+cq+". Error message: "+e);
}}}},__ds:function(cu){var cv=[];
for(var i=0;i<cu.length;i++){var name=cu[i];
if(qx.lang.String.endsWith(name,d)){var cw=name.substring(name.indexOf(k)+1,name.indexOf(d));
if(name.indexOf(d)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cw!==g){if(cw==l||isNaN(parseInt(cw,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){cu[i]=name.substring(0,name.indexOf(k));
cv[i]=l;
cv[i+1]=cw;
cu.splice(i+1,0,I);
i++;
}else{cv[i]=cw;
cu.splice(i,1,I);
}}else{cv[i]=l;
}}return cv;
},__dt:function(cx,cy,cz,cA,cB,cC){if(qx.core.Environment.get(F)){var cD=qx.Class.getEventType(cx.constructor,cy);
qx.core.Assert.assertEquals(v,cD,cy+x+cx+h);
}var cF=function(cG,e){if(cG!==l){if(cG===g){cG=cx.length-1;
}var cJ=cx.getItem(cG);
if(cJ===undefined){qx.data.SingleValueBinding.__do(cz,cA);
}var cH=e.getData().start;
var cI=e.getData().end;

if(cG<cH||cG>cI){return;
}}else{var cJ=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+cx+" by "+cy+" to "+cz+" ("+cA+")");
qx.log.Logger.debug("Data before conversion: "+cJ);
}cJ=qx.data.SingleValueBinding.__dv(cJ,cz,cA,cB,cx);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cJ);
}try{if(cJ!==undefined){qx.data.SingleValueBinding.__dp(cz,cA,cJ);
}else{qx.data.SingleValueBinding.__do(cz,cA);
}if(cB&&cB.onUpdate){cB.onUpdate(cx,cz,cJ);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cB&&cB.onSetFail){cB.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cJ+" on "+cz+". Error message: "+e);
}}};
if(!cC){cC=l;
}cF=qx.lang.Function.bind(cF,cx,cC);
var cE=cx.addListener(cy,cF);
return cE;
},__du:function(cK,cL,cM,cN,cO){if(this.__dk[cL.toHashCode()]===undefined){this.__dk[cL.toHashCode()]=[];
}this.__dk[cL.toHashCode()].push([cK,cL,cM,cN,cO]);
},__dv:function(cP,cQ,cR,cS,cT){if(cS&&cS.converter){var cV;

if(cQ.getModel){cV=cQ.getModel();
}return cS.converter(cP,cV,cT,cQ);
}else{var cX=this.__dq(cQ,cR);
var cY=cR.substring(cR.lastIndexOf(h)+1,cR.length);
if(cX==null){return cP;
}var cW=qx.Class.getPropertyDefinition(cX.constructor,cY);
var cU=cW==null?l:cW.check;
return this.__dx(cP,cU);
}},__dw:function(da,db){var dc=qx.Class.getPropertyDefinition(da.constructor,db);

if(dc==null){return null;
}return dc.event;
},__dx:function(dd,de){var df=qx.lang.Type.getClass(dd);
if((df==c||df==b)&&(de==B||de==p)){dd=parseInt(dd,10);
}if((df==D||df==c||df==y)&&de==b){dd=dd+l;
}if((df==c||df==b)&&(de==c||de==n)){dd=parseFloat(dd);
}return dd;
},removeBindingFromObject:function(dg,dh){if(dh.type==J){for(var i=0;i<dh.sources.length;i++){if(dh.sources[i]){dh.sources[i].removeListenerById(dh.listenerIds[i]);
}}for(var i=0;i<dh.targets.length;i++){if(dh.targets[i]){dh.targets[i].removeListenerById(dh.targetListenerIds[i]);
}}}else{dg.removeListenerById(dh);
}var di=this.__dk[dg.toHashCode()];
if(di!=undefined){for(var i=0;i<di.length;i++){if(di[i][0]==dh){qx.lang.Array.remove(di,di[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(dj){if(qx.core.Environment.get(F)){qx.core.Assert.assertNotNull(dj,q);
}var dk=this.__dk[dj.toHashCode()];

if(dk!=undefined){for(var i=dk.length-1;i>=0;i--){this.removeBindingFromObject(dj,dk[i][0]);
}}},getAllBindingsForObject:function(dl){if(this.__dk[dl.toHashCode()]===undefined){this.__dk[dl.toHashCode()]=[];
}return this.__dk[dl.toHashCode()];
},removeAllBindings:function(){for(var dn in this.__dk){var dm=qx.core.ObjectRegistry.fromHashCode(dn);
if(dm==null){delete this.__dk[dn];
continue;
}this.removeAllBindingsForObject(dm);
}this.__dk={};
},getAllBindings:function(){return this.__dk;
},showBindingInLog:function(dp,dq){var ds;
for(var i=0;i<this.__dk[dp.toHashCode()].length;i++){if(this.__dk[dp.toHashCode()][i][0]==dq){ds=this.__dk[dp.toHashCode()][i];
break;
}}
if(ds===undefined){var dr=w;
}else{var dr=r+ds[1]+E+ds[2]+C+ds[3]+E+ds[4]+z;
}qx.log.Logger.debug(dr);
},showAllBindingsInLog:function(){for(var du in this.__dk){var dt=qx.core.ObjectRegistry.fromHashCode(du);

for(var i=0;i<this.__dk[du].length;i++){this.showBindingInLog(dt,this.__dk[du][i][0]);
}}}}});
qx.log.Logger.deprecatedConstantWarning(G,t);
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__dO=c;
this.__dP=d||b;
this.__dQ=e===undefined?-1:e;
},members:{__dO:null,__dP:null,__dQ:null,toString:function(){return this.__dO;
},getUri:function(){return this.__dP;
},getLineNumber:function(){return this.__dQ;
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
qx.Class.define(G,{statics:{__dS:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__dT:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__dU:function(){var L=qx.lang.Generics.__dS;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__dT(N,O);
}}}}},defer:function(Q){Q.__dU();
}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
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
}else if(this.isRgbString(m)){return this.__jd();
}else if(this.isHex3String(m)){return this.__jf();
}else if(this.isHex6String(m)){return this.__jg();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__jd();
}else if(this.isRgbaString(n)){return this.__je();
}else if(this.isHex3String(n)){return this.__jf();
}else if(this.isHex6String(n)){return this.__jg();
}throw new Error("Could not parse color: "+n);
},stringToRgbString:function(o){return this.rgbToRgbString(this.stringToRgb(o));
},rgbToRgbString:function(s){return e+s[0]+h+s[1]+h+s[2]+d;
},rgbToHexString:function(u){return (qx.lang.String.pad(u[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(v){return this.isThemedColor(v)||this.isNamedColor(v)||this.isHex3String(v)||this.isHex6String(v)||this.isRgbString(v);
},isCssString:function(w){return this.isSystemColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w);
},isHex3String:function(x){return this.REGEXP.hex3.test(x);
},isHex6String:function(y){return this.REGEXP.hex6.test(y);
},isRgbString:function(z){return this.REGEXP.rgb.test(z);
},isRgbaString:function(A){return this.REGEXP.rgba.test(A);
},__jd:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__je:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__jf:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__jg:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__jf(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__jg(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__jf(P);
}
if(this.isHex6String(P)){return this.__jg(P);
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
(function(){var m="object",l="_applyTheme",k="",j="_",h="__dV",g="qx.ui.decoration.",f="qx.theme.manager.Decoration",e=".",d="Theme",c="changeTheme",a="string",b="singleton";
qx.Class.define(f,{type:b,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:l,event:c}},members:{__dV:null,resolve:function(n){if(!n){return null;
}
if(typeof n===m){return n;
}var s=this.getTheme();

if(!s){return null;
}var p=this.__dV;

if(!p){p=this.__dV={};
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
},_applyTheme:function(A,B){var D=qx.util.AliasManager.getInstance();

if(B){for(var C in B.aliases){D.remove(C);
}}
if(A){for(var C in A.aliases){D.add(C,A.aliases[C]);
}}
if(!A){this.__dV={};
}}},destruct:function(){this._disposeMap(h);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="qx.debug",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,d,a],mode:b}},members:{__dW:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__dW=null;
},getInsets:function(){if(this.__dW){return this.__dW;
}var k=this._getDefaultInsets();
return this.__dW={left:this.getInsetLeft()==null?k.left:this.getInsetLeft(),right:this.getInsetRight()==null?k.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?k.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?k.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Environment.get(e)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__dW=null;
}},destruct:function(){this.__dW=null;
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
qx.Class.define(n,{statics:{__dX:null,getScrollbarWidth:function(){if(this.__dX!==null){return this.__dX;
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
this.__dX=c?c:16;
document.body.removeChild(t);
return this.__dX;
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
qx.Class.define(c,{statics:{__dY:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__dY[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__dY[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var r="engine.name",q="",p="qx.debug",o="boxSizing",n="box-sizing",m="qx.bom.element.BoxSizing",k="KhtmlBoxSizing",j="border-box",h="-moz-box-sizing",g="WebkitBoxSizing",c=":",f=";",e="-khtml-box-sizing",b="content-box",a="-webkit-box-sizing",d="MozBoxSizing";
qx.Class.define(m,{statics:{__ea:qx.core.Environment.select(r,{"mshtml":null,"webkit":[o,k,g],"gecko":[d],"opera":[o]}),__eb:qx.core.Environment.select(r,{"mshtml":null,"webkit":[n,e,a],"gecko":[h],"opera":[n]}),__ec:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__ed:function(s){var t=this.__ec;
return t.tags[s.tagName.toLowerCase()]||t.types[s.type];
},compile:qx.core.Environment.select(r,{"mshtml":function(u){if(qx.core.Environment.get(p)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(v){var x=this.__eb;
var w=q;

if(x){for(var i=0,l=x.length;i<l;i++){w+=x[i]+c+v+f;
}}return w;
}}),get:qx.core.Environment.select(r,{"mshtml":function(y){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(y))){if(!this.__ed(y)){return b;
}}return j;
},"default":function(z){var B=this.__ea;
var A;

if(B){for(var i=0,l=B.length;i<l;i++){A=qx.bom.element.Style.get(z,B[i],null,false);

if(A!=null&&A!==q){return A;
}}}return q;
}}),set:qx.core.Environment.select(r,{"mshtml":function(C,D){if(qx.core.Environment.get(p)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(E,F){var G=this.__ea;

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
qx.Class.define(s,{statics:{__ee:function(){var L=[H,h,y,J];
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
}}}this.__ef=P;
this.__ef[x]=qx.core.Environment.select(k,{"gecko":c,"webkit":z,"default":h});
this.__eg={};

for(var N in P){this.__eg[N]=this.__ek(P[N]);
}this.__ef[K]=qx.core.Environment.select(k,{"mshtml":I,"default":D});
},__eh:{width:v,height:G,left:t,right:n,top:C,bottom:a},__ei:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(T){var V=[];
var X=this.__ei;
var W=this.__eg;
var name,U;

for(name in T){U=T[name];

if(U==null){continue;
}name=W[name]||name;
if(X[name]){V.push(X[name].compile(U));
}else{V.push(this.__ek(name),E,U,w);
}}return V.join(m);
},__ej:{},__ek:function(Y){var ba=this.__ej;
var bb=ba[Y];

if(!bb){bb=ba[Y]=qx.lang.String.hyphenate(Y);
}return bb;
},setCss:qx.core.Environment.select(k,{"mshtml":function(bc,bd){bc.style.cssText=bd;
},"default":function(be,bf){be.setAttribute(e,bf);
}}),getCss:qx.core.Environment.select(k,{"mshtml":function(bg){return bg.style.cssText.toLowerCase();
},"default":function(bh){return bh.getAttribute(e);
}}),isPropertySupported:function(bi){return (this.__ei[bi]||this.__ef[bi]||bi in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bj,name,bk,bl){if(qx.core.Environment.get(g)){qx.core.Assert.assertElement(bj,d);
qx.core.Assert.assertString(name,B);

if(bl!==undefined){qx.core.Assert.assertBoolean(bl,f);
}}name=this.__ef[name]||name;
if(bl!==false&&this.__ei[name]){return this.__ei[name].set(bj,bk);
}else{bj.style[name]=bk!==null?bk:m;
}},setStyles:function(bm,bn,bo){if(qx.core.Environment.get(g)){qx.core.Assert.assertElement(bm,d);
qx.core.Assert.assertMap(bn,r);

if(bo!==undefined){qx.core.Assert.assertBoolean(bo,f);
}}var br=this.__ef;
var bt=this.__ei;
var bp=bm.style;

for(var bs in bn){var bq=bn[bs];
var name=br[bs]||bs;

if(bq===undefined){if(bo!==false&&bt[name]){bt[name].reset(bm);
}else{bp[name]=m;
}}else{if(bo!==false&&bt[name]){bt[name].set(bm,bq);
}else{bp[name]=bq!==null?bq:m;
}}}},reset:function(bu,name,bv){name=this.__ef[name]||name;
if(bv!==false&&this.__ei[name]){return this.__ei[name].reset(bu);
}else{bu.style[name]=m;
}},get:qx.core.Environment.select(k,{"mshtml":function(bw,name,bx,by){name=this.__ef[name]||name;
if(by!==false&&this.__ei[name]){return this.__ei[name].get(bw,bx);
}if(!bw.currentStyle){return bw.style[name]||m;
}switch(bx){case this.LOCAL_MODE:return bw.style[name]||m;
case this.CASCADED_MODE:return bw.currentStyle[name]||m;
default:var bC=bw.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bC)){return bC;
}var bB=this.__eh[name];

if(bB){var bz=bw.style[name];
bw.style[name]=bC||0;
var bA=bw.style[bB]+b;
bw.style[name]=bz;
return bA;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bC)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bC;
}},"default":function(bD,name,bE,bF){name=this.__ef[name]||name;
if(bF!==false&&this.__ei[name]){return this.__ei[name].get(bD,bE);
}switch(bE){case this.LOCAL_MODE:return bD.style[name]||m;
case this.CASCADED_MODE:if(bD.currentStyle){return bD.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bG=qx.dom.Node.getDocument(bD);
var bH=bG.defaultView.getComputedStyle(bD,null);
return bH?bH[name]:m;
}}})},defer:function(bI){bI.__ee();
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
}}),getOrientation:function(v){var w=(v||window).orientation;

if(w==null){w=this.getWidth(v)>this.getHeight(v)?90:0;
}return w;
},isLandscape:function(x){return Math.abs(this.getOrientation(x))==90;
},isPortrait:function(y){var z=this.getOrientation(y);
return (z==0||z==180);
}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__el={};
this.add(a,h);
},members:{__el:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__el[k]){return this.__el[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__el[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__el[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__el[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__el){v[w]=this.__el[w];
}return v;
}},destruct:function(){this.__el=null;
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(f){var g=this._dynamic;
return f instanceof qx.bom.Font?f:g[f];
},resolve:function(h){var k=this._dynamic;
var i=k[h];

if(i){return i;
}var j=this.getTheme();

if(j!==null&&j.fonts[h]){return k[h]=(new qx.bom.Font).set(j.fonts[h]);
}return h;
},isDynamic:function(l){var n=this._dynamic;

if(l&&(l instanceof qx.bom.Font||n[l]!==undefined)){return true;
}var m=this.getTheme();

if(m!==null&&l&&m.fonts[l]){n[l]=(new qx.bom.Font).set(m.fonts[l]);
return true;
}return false;
},__ln:function(o,p){if(o[p].include){var q=o[o[p].include];
o[p].include=null;
delete o[p].include;
o[p]=qx.lang.Object.mergeWith(o[p],q,false);
this.__ln(o,p);
}},_applyTheme:function(r){var s=this._getDynamic();

for(var v in s){if(s[v].themed){s[v].dispose();
delete s[v];
}}
if(r){var t=r.fonts;
var u=qx.bom.Font;

for(var v in t){if(t[v].include&&t[t[v].include]){this.__ln(t,v);
}s[v]=(new u).set(t[v]);
s[v].themed=true;
}}this._setDynamic(s);
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
},__lo:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2,textColor:k},getDefaultStyles:function(){return this.__lo;
}},properties:{size:{check:z,nullable:true,apply:p},lineHeight:{check:r,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,v,u],nullable:true,apply:q},color:{check:t,nullable:true,apply:n}},members:{__lp:null,__lq:null,__lr:null,__ls:null,__lt:null,__lu:null,__lv:null,_applySize:function(J,K){this.__lp=J===null?null:J+g;
},_applyLineHeight:function(L,M){this.__lu=L===null?null:L;
},_applyFamily:function(N,O){var P=k;

for(var i=0,l=N.length;i<l;i++){if(N[i].indexOf(o)>0){P+=f+N[i]+f;
}else{P+=N[i];
}
if(i!==l-1){P+=m;
}}this.__lq=P;
},_applyBold:function(Q,R){this.__lr=Q===null?null:Q?c:d;
},_applyItalic:function(S,T){this.__ls=S===null?null:S?e:d;
},_applyDecoration:function(U,V){this.__lt=U===null?null:U;
},_applyColor:function(W,X){this.__lv=W===null?null:W;
},getStyles:function(){return {fontFamily:this.__lq,fontSize:this.__lp,fontWeight:this.__lr,fontStyle:this.__ls,textDecoration:this.__lt,lineHeight:this.__lu,textColor:this.__lv};
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
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jh={};
this.__ji={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__jj:{},__jh:null,__ji:null,_applyTheme:function(j,k){this.__ji={};
this.__jh={};
},__jk:function(l,m,n){var s=m.appearances;
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
return this.__jk(r,m,n);
}}}for(var i=0;i<p.length-1;i++){p.shift();
var q=p.join(w);
var o=this.__jk(q,m);

if(o){return o;
}}if(n!=null){return this.__jk(n,m);
}return null;
}else if(typeof v===h){return this.__jk(v,m,n);
}else if(v.include&&!v.style){return this.__jk(v.include,m,n);
}return l;
},styleFrom:function(x,y,z,A){if(!z){z=this.getTheme();
}var F=this.__ji;
var B=F[x];

if(!B){B=F[x]=this.__jk(x,z,A);
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
}}var E=this.__jh;

if(E[M]!==undefined){return E[M];
}if(!y){y=this.__jj;
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
}},destruct:function(){this.__jh=this.__ji=null;
}});
})();
(function(){var t="object",s="qx.debug",r="Theme",q="widgets",p="undefined",o="fonts",n="string",m="colors",k="decorations",j="meta",d="appearances",h="borders",g="icons",c="other",b="qx.Theme",f="]",e="[Theme ";
qx.Bootstrap.define(b,{statics:{define:function(name,u){if(!u){var u={};
}u.include=this.__sL(u.include);
u.patch=this.__sL(u.patch);
if(qx.core.Environment.get(s)){this.__sS(name,u);
}var v={$$type:r,name:name,title:u.title,toString:this.genericToString};
if(u.extend){v.supertheme=u.extend;
}v.basename=qx.Bootstrap.createNamespace(name,v);
this.__sO(v,u);
this.__sM(v,u);
this.$$registry[name]=v;
for(var i=0,a=u.include,l=a.length;i<l;i++){this.include(v,a[i]);
}
for(var i=0,a=u.patch,l=a.length;i<l;i++){this.patch(v,a[i]);
}},__sL:function(w){if(!w){return [];
}
if(qx.Bootstrap.isArray(w)){return w;
}else{return [w];
}},__sM:function(x,y){var z=y.aliases||{};

if(y.extend&&y.extend.aliases){qx.Bootstrap.objectMergeWith(z,y.extend.aliases,false);
}x.aliases=z;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return e+this.name+f;
},__sN:function(A){for(var i=0,B=this.__sP,l=B.length;i<l;i++){if(A[B[i]]){return B[i];
}}},__sO:function(C,D){var G=this.__sN(D);
if(D.extend&&!G){G=D.extend.type;
}C.type=G||c;
if(!G){return;
}var I=function(){};
if(D.extend){I.prototype=new D.extend.$$clazz;
}var H=I.prototype;
var F=D[G];
for(var E in F){H[E]=F[E];
if(H[E].base){if(qx.core.Environment.get(s)){if(!D.extend){throw new Error("Found base flag in entry '"+E+"' of theme '"+D.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}H[E].base=D.extend;
}}C.$$clazz=I;
C[G]=new I;
},$$registry:{},__sP:[m,h,k,o,g,q,d,j],__sQ:qx.core.Environment.select(s,{"true":{"title":n,"aliases":t,"type":n,"extend":t,"colors":t,"borders":t,"decorations":t,"fonts":t,"icons":t,"widgets":t,"appearances":t,"meta":t,"include":t,"patch":t},"default":null}),__sR:qx.core.Environment.select(s,{"true":{"color":t,"border":t,"decoration":t,"font":t,"icon":t,"appearance":t,"widget":t},"default":null}),__sS:qx.core.Environment.select(s,{"true":function(name,J){var O=this.__sQ;

for(var N in J){if(O[N]===undefined){throw new Error('The configuration key "'+N+'" in theme "'+name+'" is not allowed!');
}
if(J[N]==null){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value is undefined/null!');
}
if(O[N]!==null&&typeof J[N]!==O[N]){throw new Error('Invalid type of key "'+N+'" in theme "'+name+'"! The type of the key must be "'+O[N]+'"!');
}}var M=[m,h,k,o,g,q,d,j];

for(var i=0,l=M.length;i<l;i++){var N=M[i];

if(J[N]!==undefined&&(J[N] instanceof Array||J[N] instanceof RegExp||J[N] instanceof Date||J[N].classname!==undefined)){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value needs to be a map!');
}}var K=0;

for(var i=0,l=M.length;i<l;i++){var N=M[i];

if(J[N]){K++;
}
if(K>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(!J.extend&&K===0){throw new Error("You must define at least one entry in your theme configuration :"+name);
}if(J.meta){var L;

for(var N in J.meta){L=J.meta[N];

if(this.__sR[N]===undefined){throw new Error('The key "'+N+'" is not allowed inside a meta theme block.');
}
if(typeof L!==this.__sR[N]){throw new Error('The type of the key "'+N+'" inside the meta block is wrong.');
}
if(!(typeof L===t&&L!==null&&L.$$type===r)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+N+'" in theme "'+name+'" is invalid: '+L);
}}}if(J.extend&&J.extend.$$type!==r){throw new Error('Invalid extend in theme "'+name+'": '+J.extend);
}if(J.include){for(var i=0,l=J.include.length;i<l;i++){if(typeof (J.include[i])==p||J.include[i].$$type!==r){throw new Error('Invalid include in theme "'+name+'": '+J.include[i]);
}}}if(J.patch){for(var i=0,l=J.patch.length;i<l;i++){if(typeof (J.patch[i])==p||J.patch[i].$$type!==r){throw new Error('Invalid patch in theme "'+name+'": '+J.patch[i]);
}}}},"default":function(){}}),patch:function(P,Q){var S=this.__sN(Q);

if(S!==this.__sN(P)){throw new Error("The mixins '"+P.name+"' are not compatible '"+Q.name+"'!");
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
(function(){var p="Boolean",o="focusout",n="interval",m="mouseover",l="mouseout",k="mousemove",j="widget",i="__sX",h="qx.ui.tooltip.ToolTip",g="__sW",c="_applyCurrent",f="qx.ui.tooltip.Manager",d="tooltip-error",b="singleton",a="__ta";
qx.Class.define(f,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,m,this.__th,this,true);
this.__sW=new qx.event.Timer();
this.__sW.addListener(n,this.__te,this);
this.__sX=new qx.event.Timer();
this.__sX.addListener(n,this.__tf,this);
this.__sY={left:0,top:0};
},properties:{current:{check:h,nullable:true,apply:c},showInvalidToolTips:{check:p,init:true},showToolTips:{check:p,init:true}},members:{__sY:null,__sX:null,__sW:null,__ta:null,__tb:null,__tc:function(){if(!this.__ta){this.__ta=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__ta;
},__td:function(){if(!this.__tb){this.__tb=new qx.ui.tooltip.ToolTip().set({appearance:d});
this.__tb.syncAppearance();
}return this.__tb;
},_applyCurrent:function(q,r){if(r&&qx.ui.core.Widget.contains(r,q)){return;
}if(r){if(!r.isDisposed()){r.exclude();
}this.__sW.stop();
this.__sX.stop();
}var t=qx.event.Registration;
var s=document.body;
if(q){this.__sW.startWith(q.getShowTimeout());
t.addListener(s,l,this.__ti,this,true);
t.addListener(s,o,this.__tj,this,true);
t.addListener(s,k,this.__tg,this,true);
}else{t.removeListener(s,l,this.__ti,this,true);
t.removeListener(s,o,this.__tj,this,true);
t.removeListener(s,k,this.__tg,this,true);
}},__te:function(e){var u=this.getCurrent();

if(u&&!u.isDisposed()){this.__sX.startWith(u.getHideTimeout());

if(u.getPlaceMethod()==j){u.placeToWidget(u.getOpener());
}else{u.placeToPoint(this.__sY);
}u.show();
}this.__sW.stop();
},__tf:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__sX.stop();
this.resetCurrent();
},__tg:function(e){var w=this.__sY;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__th:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

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
if(x){A=this.__td().set({label:x});
}
if(!A){A=this.__tc().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__ti:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!D){return;
}var E=this.getCurrent();
if(E&&(D==E||qx.ui.core.Widget.contains(E,D))){return;
}if(D&&C&&qx.ui.core.Widget.contains(C,D)){return;
}if(E&&!D){this.setCurrent(null);
}else{this.resetCurrent();
}},__tj:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,m,this.__th,this,true);
this._disposeObjects(g,i,a);
this.__sY=null;
}});
})();
(function(){var k="interval",j="qx.event.Timer",i="_applyInterval",h="func is not a function",g="Boolean",f="qx.debug",d="No timeout given",c="Integer",b="qx.event.type.Event",a="_applyEnabled";
qx.Class.define(j,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);
this.setEnabled(false);

if(l!=null){this.setInterval(l);
}var self=this;
this.__hx=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(m,n,o){if(qx.core.Environment.get(f)){qx.core.Assert.assertFunction(m,h);
qx.core.Assert.assertNotUndefined(o,d);
}var p=new qx.event.Timer(o);
p.__hy=m;
p.addListener(k,function(e){p.stop();
m.call(n,e);
p.dispose();
n=null;
},n);
p.start();
return p;
}},properties:{enabled:{init:true,check:g,apply:a},interval:{check:c,init:1000,apply:i}},members:{__hz:null,__hx:null,_applyInterval:function(q,r){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(s,t){if(t){window.clearInterval(this.__hz);
this.__hz=null;
}else if(s){this.__hz=window.setInterval(this.__hx,this.getInterval());
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
}})},destruct:function(){if(this.__hz){window.clearInterval(this.__hz);
}this.__hz=this.__hx=null;
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
this.__cs={};
},statics:{MAX_SIZE:15,__ct:d},members:{__cs:null,getDecoratorElement:function(k){var p=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(k)){var n=k;
var m=qx.theme.manager.Decoration.getInstance().resolve(k);
}else{var n=p.__ct;
m=k;
}var o=this.__cs;

if(o[n]&&o[n].length>0){var l=o[n].pop();
}else{var l=this._createDecoratorElement(m,n);
}l.$$pooled=false;
return l;
},poolDecorator:function(q){if(!q||q.$$pooled||q.isDisposed()){return;
}var t=qx.ui.core.DecoratorFactory;
var r=q.getId();

if(r==t.__ct){q.dispose();
return;
}var s=this.__cs;

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

for(var z in this.__cs){x+=1;
y+=this.__cs[z].length;
}return [e,this.$$hash,c,b,x,a,y].join(g);
},"false":function(){return qx.core.Object.prototype.toString.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var B=this.__cs;

for(var A in B){qx.util.DisposeUtil.disposeArray(B,A);
}}this.__cs=null;
}});
})();
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="qx.debug",b="allowShrinkY",a="Wrong 'width' argument. ",E="Something went wrong with the layout of ",D="bottom",C="Wrong 'left' argument. ",B="baseline",A="marginBottom",z="qx.ui.core.LayoutItem",y="center",x="marginTop",w="!",v="allowGrowX",q="middle",r="marginLeft",o="allowShrinkX",p="top",m="right",n="marginRight",k="abstract",l="Wrong 'top' argument. ",s="Wrong 'height' argument. ",t="allowGrowY",u="left";
qx.Class.define(z,{type:k,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[v,o],mode:e,themeable:true},allowStretchY:{group:[t,b],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[x,n,A,r],mode:e,themeable:true},alignX:{check:[u,y,m],nullable:true,apply:d,themeable:true},alignY:{check:[p,q,D,B],nullable:true,apply:d,themeable:true}},members:{__cu:null,__cv:null,__cw:null,__cx:null,__cy:null,__cz:null,__cA:null,getBounds:function(){return this.__cz||this.__cv||null;
},clearSeparators:function(){},renderSeparator:function(F,G){},renderLayout:function(H,top,I,J){if(qx.core.Environment.get(c)){var K=E+this.toString()+w;
this.assertInteger(H,C+K);
this.assertInteger(top,l+K);
this.assertInteger(I,a+K);
this.assertInteger(J,s+K);
}var L=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var L=this._getHeightForWidth(I);
}
if(L!=null&&L!==this.__cu){this.__cu=L;
qx.ui.core.queue.Layout.add(this);
return null;
}var N=this.__cv;

if(!N){N=this.__cv={};
}var M={};

if(H!==N.left||top!==N.top){M.position=true;
N.left=H;
N.top=top;
}
if(I!==N.width||J!==N.height){M.size=true;
N.width=I;
N.height=J;
}if(this.__cw){M.local=true;
delete this.__cw;
}
if(this.__cy){M.margin=true;
delete this.__cy;
}return M;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__cw;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__cw=true;
this.__cx=null;
},getSizeHint:function(O){var P=this.__cx;

if(P){return P;
}
if(O===false){return null;
}P=this.__cx=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__cu&&this.getHeight()==null){P.height=this.__cu;
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
},_applyMargin:function(){this.__cy=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__cz;
},setUserBounds:function(ba,top,bb,bc){this.__cz={left:ba,top:top,width:bb,height:bc};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__cz;
qx.ui.core.queue.Layout.add(this);
},__cB:{},setLayoutProperties:function(bd){if(bd==null){return;
}var be=this.__cA;

if(!be){be=this.__cA={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(bd);
}for(var bf in bd){if(bd[bf]==null){delete be[bf];
}else{be[bf]=bd[bf];
}}},getLayoutProperties:function(){return this.__cA||this.__cB;
},clearLayoutProperties:function(){delete this.__cA;
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
var bk=this.__cA;

if(bk){bj.__cA=qx.lang.Object.clone(bk);
}return bj;
}},destruct:function(){this.$$parent=this.$$subparent=this.__cA=this.__cv=this.__cz=this.__cx=null;
}});
})();
(function(){var cu="px",ct="qx.debug",cs="Boolean",cr="qx.event.type.Drag",cq="qx.event.type.Mouse",cp="visible",co="qx.event.type.Focus",cn="Integer",cm="qx.event.type.Touch",cl="qx.event.type.Data",bx="excluded",bw="_applyPadding",bv="qx.event.type.Event",bu="on",bt="hidden",bs="engine.name",br="contextmenu",bq="String",bp="tabIndex",bo="focused",cB="changeVisibility",cC="mshtml",cz="hovered",cA="qx.event.type.KeySequence",cx="absolute",cy="backgroundColor",cv="drag",cw="div",cD="object",cE="disabled",bV="move",bU="dragstart",bX="qx.dynlocale",bW="dragchange",ca="dragend",bY="resize",cc="Decorator",cb="zIndex",bT="opacity",bS="default",c="Color",d="qxType",f="changeToolTipText",g="beforeContextmenuOpen",h="_applyNativeContextMenu",j="content",k="_applyBackgroundColor",m="event.pointer",n="__cP",o="_applyFocusable",cI="changeShadow",cH="qx.event.type.KeyInput",cG="createChildControl",cF="Invalid left decorator inset detected: ",cM="Font",cL="__cC",cK="_applyShadow",cJ="Invalid layout data: ",cO="Could not add widget to itself: ",cN="_applyEnabled",N="_applySelectable",O="Number",L="_applyKeepActive",M="__cN",R="_applyVisibility",S="The 'after' widget is not a child of this widget!",P="repeat",Q="qxDraggable",J="syncAppearance",K="paddingLeft",w="_applyDroppable",v="Wrong 'left' argument. ",y="protector",x="#",s="qx.event.type.MouseWheel",r="_applyCursor",u="_applyDraggable",t="changeTextColor",q="$$widget",p="changeContextMenu",X="paddingTop",Y="changeSelectable",ba="hideFocus",bb="Invalid top decorator inset detected: ",T="none",U="outline",V="The 'before' widget is not a child of this widget!",W="_applyAppearance",bc=" returned an invalid size hint!",bd="_applyOpacity",G="url(",F=")",E="qx.ui.core.Widget",D="__cD",C="minHeight is larger than maxHeight!",B="_applyFont",A="cursor",z="qxDroppable",I="__cL",H="changeZIndex",be="changeEnabled",bf="__cG",bg="changeFont",bh="_applyDecorator",bi="_applyZIndex",bj="_applyTextColor",bk="qx.ui.menu.Menu",bl="__cH",bm="Invalid right decorator inset detected: ",bn="Invalid widget to add: ",bB="_applyToolTipText",bA="The layout of the widget",bz="true",by="widget",bF="Wrong 'top' argument. ",bE="changeDecorator",bD="changeBackgroundColor",bC="_applyTabIndex",bH="Invalid bottom decorator inset detected: ",bG="changeAppearance",bO="shorthand",bP="/",bM="",bN="_applyContextMenu",bK="container",bL="paddingBottom",bI="changeNativeContextMenu",bJ="undefined",bQ="qx.ui.tooltip.ToolTip",bR="qxKeepActive",ce="_applyKeepFocus",cd="paddingRight",cg="minWidth is larger than maxWidth!",cf="changeLocale",ci="qxKeepFocus",ch="__cI",ck="opera",cj="qx/static/blank.gif";
qx.Class.define(E,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__cC=this._createContainerElement();
this.__cD=this.__cO();
this.__cC.add(this.__cD);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bv,disappear:bv,createChildControl:cl,resize:cl,move:cl,syncAppearance:cl,mousemove:cq,mouseover:cq,mouseout:cq,mousedown:cq,mouseup:cq,click:cq,dblclick:cq,contextmenu:cq,beforeContextmenuOpen:cl,mousewheel:s,touchstart:cm,touchend:cm,touchmove:cm,touchcancel:cm,tap:cm,swipe:cm,keyup:cA,keydown:cA,keypress:cA,keyinput:cH,focus:co,blur:co,focusin:co,focusout:co,activate:co,deactivate:co,capture:bv,losecapture:bv,drop:cr,dragleave:cr,dragover:cr,drag:cr,dragstart:cr,dragend:cr,dragchange:cr,droprequest:cr},properties:{paddingTop:{check:cn,init:0,apply:bw,themeable:true},paddingRight:{check:cn,init:0,apply:bw,themeable:true},paddingBottom:{check:cn,init:0,apply:bw,themeable:true},paddingLeft:{check:cn,init:0,apply:bw,themeable:true},padding:{group:[X,cd,bL,K],mode:bO,themeable:true},zIndex:{nullable:true,init:null,apply:bi,event:H,check:cn,themeable:true},decorator:{nullable:true,init:null,apply:bh,event:bE,check:cc,themeable:true},shadow:{nullable:true,init:null,apply:cK,event:cI,check:cc,themeable:true},backgroundColor:{nullable:true,check:c,apply:k,event:bD,themeable:true},textColor:{nullable:true,check:c,apply:bj,event:t,themeable:true,inheritable:true},font:{nullable:true,apply:B,check:cM,event:bg,themeable:true,inheritable:true,dereference:true},opacity:{check:O,apply:bd,themeable:true,nullable:true,init:null},cursor:{check:bq,apply:r,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bQ,nullable:true},toolTipText:{check:bq,nullable:true,event:f,apply:bB},toolTipIcon:{check:bq,nullable:true,event:f},blockToolTip:{check:cs,init:false},visibility:{check:[cp,bt,bx],init:cp,apply:R,event:cB},enabled:{init:true,check:cs,inheritable:true,apply:cN,event:be},anonymous:{init:false,check:cs},tabIndex:{check:cn,nullable:true,apply:bC},focusable:{check:cs,init:false,apply:o},keepFocus:{check:cs,init:false,apply:ce},keepActive:{check:cs,init:false,apply:L},draggable:{check:cs,init:false,apply:u},droppable:{check:cs,init:false,apply:w},selectable:{check:cs,init:false,event:Y,apply:N},contextMenu:{check:bk,apply:bN,nullable:true,event:p},nativeContextMenu:{check:cs,init:false,themeable:true,event:bI,apply:h},appearance:{check:bq,init:by,apply:W,event:bG}},statics:{DEBUG:false,getWidgetByElement:function(cP,cQ){while(cP){var cR=cP.$$widget;
if(cR!=null){var cS=qx.core.ObjectRegistry.fromHashCode(cR);
if(!cQ||!cS.getAnonymous()){return cS;
}}try{cP=cP.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cT){while(cT){if(parent==cT){return true;
}cT=cT.getLayoutParent();
}return false;
},__cE:new qx.ui.core.DecoratorFactory(),__cF:new qx.ui.core.DecoratorFactory()},members:{__cC:null,__cD:null,__cG:null,__cH:null,__cI:null,__cJ:null,__cK:null,__cL:null,_getLayout:function(){return this.__cL;
},_setLayout:function(cU){if(qx.core.Environment.get(ct)){if(cU){this.assertInstance(cU,qx.ui.layout.Abstract);
}}
if(this.__cL){this.__cL.connectToWidget(null);
}
if(cU){cU.connectToWidget(this);
}this.__cL=cU;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cV=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cV);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cV);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__cM:function(a,b){if(a==b){return false;
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
if(dl.size){var dk=this.__cI;

if(dk){dk.setStyles({width:db+cu,height:dc+cu});
}}
if(dl.size||this._updateInsets){if(this.__cG){this.__cG.resize(db,dc);
}}
if(dl.size){if(this.__cH){var dd=this.__cH.getInsets();
var dh=db+dd.left+dd.right;
var df=dc+dd.top+dd.bottom;
this.__cH.resize(dh,df);
}}
if(di||dl.local||dl.margin){if(this.__cL&&this.hasLayoutChildren()){this.__cL.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(dl.position&&this.hasListener(bV)){this.fireDataEvent(bV,this.getBounds());
}
if(dl.size&&this.hasListener(bY)){this.fireDataEvent(bY,this.getBounds());
}delete this._updateInsets;
return dl;
},__cN:null,clearSeparators:function(){var dp=this.__cN;

if(!dp){return;
}var dq=qx.ui.core.Widget.__cE;
var content=this.getContentElement();
var dn;

for(var i=0,l=dp.length;i<l;i++){dn=dp[i];
dq.poolDecorator(dn);
content.remove(dn);
}dp.length=0;
},renderSeparator:function(dr,ds){var dt=qx.ui.core.Widget.__cE.getDecoratorElement(dr);
this.getContentElement().add(dt);
dt.resize(ds.width,ds.height);
dt.setStyles({left:ds.left+cu,top:ds.top+cu});
if(!this.__cN){this.__cN=[dt];
}else{this.__cN.push(dt);
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
}}
if(dw==null){dw=dC;

if(dB.minHeight!=null){dw+=dB.minHeight;
}}
if(dv==null){if(dB.maxWidth==null){dv=Infinity;
}else{dv=dB.maxWidth+dD;
}}
if(dx==null){if(dB.maxHeight==null){dx=Infinity;
}else{dx=dB.maxHeight+dC;
}}return {width:dA,minWidth:dz,maxWidth:dv,height:dy,minHeight:dw,maxHeight:dx};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__cL){this.__cL.invalidateLayoutCache();
}},_getContentHint:function(){var dF=this.__cL;

if(dF){if(this.hasLayoutChildren()){var dG=dF.getSizeHint();

if(qx.core.Environment.get(ct)){var dE=bA+this.toString()+bc;
this.assertInteger(dG.width,v+dE);
this.assertInteger(dG.height,bF+dE);
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

if(this.__cG){var dQ=this.__cG.getInsets();

if(qx.core.Environment.get(ct)){this.assertNumber(dQ.top,bb+dQ.top);
this.assertNumber(dQ.right,bm+dQ.right);
this.assertNumber(dQ.bottom,bH+dQ.bottom);
this.assertNumber(dQ.left,cF+dQ.left);
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

if(qx.core.Environment.get(ct)){ea.qxType=bK;
ea.qxClass=this.classname;
}var dY={zIndex:0,position:cx};
return new qx.html.Element(cw,dY,ea);
},__cO:function(){var eb=this._createContentElement();

if(qx.core.Environment.get(ct)){eb.setAttribute(d,j);
}eb.setStyles({"position":cx,"zIndex":10});
return eb;
},_createContentElement:function(){return new qx.html.Element(cw,{overflowX:bt,overflowY:bt});
},getContainerElement:function(){return this.__cC;
},getContentElement:function(){return this.__cD;
},getDecoratorElement:function(){return this.__cG||null;
},getShadowElement:function(){return this.__cH||null;
},__cP:null,getLayoutChildren:function(){var ed=this.__cP;

if(!ed){return this.__cQ;
}var ee;

for(var i=0,l=ed.length;i<l;i++){var ec=ed[i];

if(ec.hasUserBounds()||ec.isExcluded()){if(ee==null){ee=ed.concat();
}qx.lang.Array.remove(ee,ec);
}}return ee||ed;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var ef=this.__cL;

if(ef){ef.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var eg=this.__cP;

if(!eg){return false;
}var eh;

for(var i=0,l=eg.length;i<l;i++){eh=eg[i];

if(!eh.hasUserBounds()&&!eh.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__cQ:[],_getChildren:function(){return this.__cP||this.__cQ;
},_indexOf:function(ei){var ej=this.__cP;

if(!ej){return -1;
}return ej.indexOf(ei);
},_hasChildren:function(){var ek=this.__cP;
return ek!=null&&(!!ek[0]);
},addChildrenToQueue:function(em){var en=this.__cP;

if(!en){return;
}var eo;

for(var i=0,l=en.length;i<l;i++){eo=en[i];
em.push(eo);
eo.addChildrenToQueue(em);
}},_add:function(ep,eq){if(ep.getLayoutParent()==this){qx.lang.Array.remove(this.__cP,ep);
}
if(this.__cP){this.__cP.push(ep);
}else{this.__cP=[ep];
}this.__cR(ep,eq);
},_addAt:function(er,es,et){if(!this.__cP){this.__cP=[];
}if(er.getLayoutParent()==this){qx.lang.Array.remove(this.__cP,er);
}var eu=this.__cP[es];

if(eu===er){er.setLayoutProperties(et);
}
if(eu){qx.lang.Array.insertBefore(this.__cP,er,eu);
}else{this.__cP.push(er);
}this.__cR(er,et);
},_addBefore:function(ev,ew,ex){if(qx.core.Environment.get(ct)){this.assertInArray(ew,this._getChildren(),V);
}
if(ev==ew){return;
}
if(!this.__cP){this.__cP=[];
}if(ev.getLayoutParent()==this){qx.lang.Array.remove(this.__cP,ev);
}qx.lang.Array.insertBefore(this.__cP,ev,ew);
this.__cR(ev,ex);
},_addAfter:function(ey,ez,eA){if(qx.core.Environment.get(ct)){this.assertInArray(ez,this._getChildren(),S);
}
if(ey==ez){return;
}
if(!this.__cP){this.__cP=[];
}if(ey.getLayoutParent()==this){qx.lang.Array.remove(this.__cP,ey);
}qx.lang.Array.insertAfter(this.__cP,ey,ez);
this.__cR(ey,eA);
},_remove:function(eB){if(!this.__cP){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__cP,eB);
this.__cS(eB);
},_removeAt:function(eC){if(!this.__cP){throw new Error("This widget has no children!");
}var eD=this.__cP[eC];
qx.lang.Array.removeAt(this.__cP,eC);
this.__cS(eD);
return eD;
},_removeAll:function(){if(!this.__cP){return [];
}var eE=this.__cP.concat();
this.__cP.length=0;

for(var i=eE.length-1;i>=0;i--){this.__cS(eE[i]);
}qx.ui.core.queue.Layout.add(this);
return eE;
},_afterAddChild:null,_afterRemoveChild:null,__cR:function(eF,eG){if(qx.core.Environment.get(ct)){this.assertInstance(eF,qx.ui.core.LayoutItem,bn+eF);
this.assertNotIdentical(eF,this,cO+eF);

if(eG!=null){this.assertType(eG,cD,cJ+eG);
}}var parent=eF.getLayoutParent();

if(parent&&parent!=this){parent._remove(eF);
}eF.setLayoutParent(this);
if(eG){eF.setLayoutProperties(eG);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(eF);
}},__cS:function(eH){if(qx.core.Environment.get(ct)){this.assertNotUndefined(eH);
}
if(eH.getLayoutParent()!==this){throw new Error("Remove Error: "+eH+" is not a child of this widget!");
}eH.setLayoutParent(null);
if(this.__cL){this.__cL.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(eH);
}},capture:function(eI){this.getContainerElement().capture(eI);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(eJ,eK,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__cI){return;
}var eL=this.__cI=new qx.html.Element;

if(qx.core.Environment.get(ct)){eL.setAttribute(d,y);
}eL.setStyles({position:cx,top:0,left:0,zIndex:7});
var eM=this.getBounds();

if(eM){this.__cI.setStyles({width:eM.width+cu,height:eM.height+cu});
}if((qx.core.Environment.get(bs)==cC)){eL.setStyles({backgroundImage:G+qx.util.ResourceManager.getInstance().toUri(cj)+F,backgroundRepeat:P});
}this.getContainerElement().add(eL);
},_applyDecorator:function(eN,eO){if(qx.core.Environment.get(ct)){if(eN&&typeof eN===cD){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and "+"processing time. Often it is better to lay them out to a "+"theme file. Hash code of decorator object: "+eN);
}}}var eR=qx.ui.core.Widget.__cE;
var eP=this.getContainerElement();
if(!this.__cI&&!qx.core.Environment.get(m)){this._createProtectorElement();
}if(eO){eP.remove(this.__cG);
eR.poolDecorator(this.__cG);
}if(eN){var eQ=this.__cG=eR.getDecoratorElement(eN);
eQ.setStyle(cb,5);
eP.add(eQ);
}else{delete this.__cG;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__cM(eO,eN)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(eN){var eS=this.getBounds();

if(eS){eQ.resize(eS.width,eS.height);
this.__cI&&
this.__cI.setStyles({width:eS.width+cu,height:eS.height+cu});
}}},_applyShadow:function(eT,eU){var fc=qx.ui.core.Widget.__cF;
var eW=this.getContainerElement();
if(eU){eW.remove(this.__cH);
fc.poolDecorator(this.__cH);
}if(eT){var eY=this.__cH=fc.getDecoratorElement(eT);
eW.add(eY);
var fb=eY.getInsets();
eY.setStyles({left:(-fb.left)+cu,top:(-fb.top)+cu});
var fa=this.getBounds();

if(fa){var eX=fa.width+fb.left+fb.right;
var eV=fa.height+fb.top+fb.bottom;
eY.resize(eX,eV);
}eY.tint(null);
}else{delete this.__cH;
}},_applyToolTipText:function(fd,fe){if(qx.core.Environment.get(bX)){if(this.__cK){return;
}var ff=qx.locale.Manager.getInstance();
this.__cK=ff.addListener(cf,function(){var fg=this.getToolTipText();

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
}this.getContainerElement().setStyle(A,fr,qx.core.Environment.get(bs)==ck);
},_applyBackgroundColor:function(ft,fu){var fv=this.getBackgroundColor();
var fx=this.getContainerElement();

if(this.__cG){this.__cG.tint(fv);
fx.setStyle(cy,null);
}else{var fw=qx.theme.manager.Color.getInstance().resolve(fv);
fx.setStyle(cy,fw);
}},_applyFont:function(fy,fz){},__cT:null,$$stateChanges:null,_forwardStates:null,hasState:function(fA){var fB=this.__cT;
return !!fB&&!!fB[fA];
},addState:function(fC){var fD=this.__cT;

if(!fD){fD=this.__cT={};
}
if(fD[fC]){return;
}this.__cT[fC]=true;
if(fC===cz){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fG=this.__cW;

if(forward&&forward[fC]&&fG){var fE;

for(var fF in fG){fE=fG[fF];

if(fE instanceof qx.ui.core.Widget){fG[fF].addState(fC);
}}}},removeState:function(fH){var fI=this.__cT;

if(!fI||!fI[fH]){return;
}delete this.__cT[fH];
if(fH===cz){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fL=this.__cW;

if(forward&&forward[fH]&&fL){for(var fK in fL){var fJ=fL[fK];

if(fJ instanceof qx.ui.core.Widget){fJ.removeState(fH);
}}}},replaceState:function(fM,fN){var fO=this.__cT;

if(!fO){fO=this.__cT={};
}
if(!fO[fN]){fO[fN]=true;
}
if(fO[fM]){delete fO[fM];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fR=this.__cW;

if(forward&&forward[fN]&&fR){for(var fQ in fR){var fP=fR[fQ];

if(fP instanceof qx.ui.core.Widget){fP.replaceState(fM,fN);
}}}},__cU:null,__cV:null,syncAppearance:function(){var fW=this.__cT;
var fV=this.__cU;
var fX=qx.theme.manager.Appearance.getInstance();
var fT=qx.core.Property.$$method.setThemed;
var gc=qx.core.Property.$$method.resetThemed;
if(this.__cV){delete this.__cV;
if(fV){var fS=fX.styleFrom(fV,fW,null,this.getAppearance());
fV=null;
}}if(!fV){var fU=this;
var gb=[];

do{gb.push(fU.$$subcontrol||fU.getAppearance());
}while(fU=fU.$$subparent);
fV=gb.reverse().join(bP).replace(/#[0-9]+/g,bM);
this.__cU=fV;
}var fY=fX.styleFrom(fV,fW,null,this.getAppearance());

if(fY){if(fS){for(var ga in fS){if(fY[ga]===undefined){this[gc[ga]]();
}}}if(qx.core.Environment.get(ct)){for(var ga in fY){if(!this[fT[ga]]){throw new Error(this.classname+' has no themeable property "'+ga+'" while styling '+fV);
}}}for(var ga in fY){fY[ga]===undefined?this[gc[ga]]():this[fT[ga]](fY[ga]);
}}else if(fS){for(var ga in fS){this[gc[ga]]();
}}this.fireDataEvent(J,this.__cT);
},_applyAppearance:function(gd,ge){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__cJ){qx.ui.core.queue.Appearance.add(this);
this.__cJ=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__cV=true;
qx.ui.core.queue.Appearance.add(this);
var gh=this.__cW;

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
if((qx.core.Environment.get(bs)==cC)){gm.setAttribute(ba,bz);
}else{gm.setStyle(U,T);
}}else{if(gm.isNativelyFocusable()){gm.setAttribute(bp,-1);
}else if(gl){gm.setAttribute(bp,null);
}}},_applyKeepFocus:function(go){var gp=this.getFocusElement();
gp.setAttribute(ci,go?bu:null);
},_applyKeepActive:function(gq){var gr=this.getContainerElement();
gr.setAttribute(bR,gq?bu:null);
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
}this.getContainerElement().setAttribute(Q,gB?bu:null);
},_applyDroppable:function(gD,gE){if(!this.isEnabled()&&gD===true){gD=false;
}this.getContainerElement().setAttribute(z,gD?bu:null);
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
},scrollChildIntoView:function(gH,gI,gJ,gK){gK=typeof gK==bJ?true:gK;
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
},hasChildControl:function(gT){if(!this.__cW){return false;
}return !!this.__cW[gT];
},__cW:null,_getCreatedChildControls:function(){return this.__cW;
},getChildControl:function(gU,gV){if(!this.__cW){if(gV){return null;
}this.__cW={};
}var gW=this.__cW[gU];

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
},_createChildControl:function(he){if(!this.__cW){this.__cW={};
}else if(this.__cW[he]){throw new Error("Child control '"+he+"' already created!");
}var hi=he.indexOf(x);

if(hi==-1){var hf=this._createChildControlImpl(he);
}else{var hf=this._createChildControlImpl(he.substring(0,hi),he.substring(hi+1,he.length));
}
if(!hf){throw new Error("Unsupported control: "+he);
}hf.$$subcontrol=he;
hf.$$subparent=this;
var hg=this.__cT;
var forward=this._forwardStates;

if(hg&&forward&&hf instanceof qx.ui.core.Widget){for(var hh in hg){if(forward[hh]){hf.addState(hh);
}}}this.fireDataEvent(cG,hf);
return this.__cW[he]=hf;
},_createChildControlImpl:function(hj,hk){return null;
},_disposeChildControls:function(){var ho=this.__cW;

if(!ho){return;
}var hm=qx.ui.core.Widget;

for(var hn in ho){var hl=ho[hn];

if(!hm.contains(this,hl)){hl.destroy();
}else{hl.dispose();
}}delete this.__cW;
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
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(bX)){if(this.__cK){qx.locale.Manager.getInstance().removeListenerById(this.__cK);
}}this.getContainerElement().setAttribute(q,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var hD=qx.ui.core.Widget;
var hC=this.getContainerElement();

if(this.__cG){hC.remove(this.__cG);
hD.__cE.poolDecorator(this.__cG);
}
if(this.__cH){hC.remove(this.__cH);
hD.__cF.poolDecorator(this.__cH);
}this.clearSeparators();
this.__cG=this.__cH=this.__cN=null;
}else{this._disposeArray(M);
this._disposeObjects(bf,bl);
}this._disposeArray(n);
this.__cT=this.__cW=null;
this._disposeObjects(I,cL,D,ch);
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
qx.Mixin.define(w,{statics:{__jl:null,setVisibleElement:function(y){this.__jl=y;
},getVisibleElement:function(){return this.__jl;
}},properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__jm:null,__jn:null,__jo:null,getLayoutLocation:function(z){var C,B,D,top;
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
}},placeToWidget:function(L,M){if(M){this.__jp();
this.__jm=qx.lang.Function.bind(this.placeToWidget,this,L,false);
qx.event.Idle.getInstance().addListener(i,this.__jm);
this.__jo=function(){this.__jp();
};
this.addListener(g,this.__jo,this);
}var N=L.getContainerLocation()||this.getLayoutLocation(L);
this.__jr(N);
},__jp:function(){if(this.__jm){qx.event.Idle.getInstance().removeListener(i,this.__jm);
this.__jm=null;
}
if(this.__jo){this.removeListener(g,this.__jo,this);
this.__jo=null;
}},placeToMouse:function(event){var P=event.getDocumentLeft();
var top=event.getDocumentTop();
var O={left:P,top:top,right:P,bottom:top};
this.__jr(O);
},placeToElement:function(Q,R){var location=qx.bom.element.Location.get(Q);
var S={left:location.left,top:location.top,right:location.left+Q.offsetWidth,bottom:location.top+Q.offsetHeight};
if(R){this.__jm=qx.lang.Function.bind(this.placeToElement,this,Q,false);
qx.event.Idle.getInstance().addListener(i,this.__jm);
this.addListener(g,function(){if(this.__jm){qx.event.Idle.getInstance().removeListener(i,this.__jm);
this.__jm=null;
}},this);
}this.__jr(S);
},placeToPoint:function(T){var U={left:T.left,top:T.top,right:T.left,bottom:T.top};
this.__jr(U);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__jq:function(V){var W=null;

if(this._computePlacementSize){var W=this._computePlacementSize();
}else if(this.isVisible()){var W=this.getBounds();
}
if(W==null){this.addListenerOnce(q,function(){this.__jq(V);
},this);
}else{V.call(this,W);
}},__jr:function(X){this.__jq(function(Y){var ba=qx.util.placement.Placement.compute(Y,this.getLayoutParent().getBounds(),X,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(ba.left,ba.top);
});
}},destruct:function(){this.__jp();
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
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__em={};
this.__en=qx.lang.Function.bind(this.__er,this);
this.__eo=false;
},members:{__ep:null,__eq:null,__em:null,__eo:null,__en:null,schedule:function(c){if(this.__ep==null){this.__ep=window.setTimeout(this.__en,0);
}var d=c.toHashCode();
if(this.__eq&&this.__eq[d]){return;
}this.__em[d]=c;
this.__eo=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__eq&&this.__eq[f]){this.__eq[f]=null;
return;
}delete this.__em[f];
if(qx.lang.Object.isEmpty(this.__em)&&this.__ep!=null){window.clearTimeout(this.__ep);
this.__ep=null;
}},__er:qx.event.GlobalError.observeMethod(function(){this.__ep=null;
while(this.__eo){this.__eq=qx.lang.Object.clone(this.__em);
this.__em={};
this.__eo=false;

for(var h in this.__eq){var g=this.__eq[h];

if(g){this.__eq[h]=null;
g.call();
}}}this.__eq=null;
})},destruct:function(){if(this.__ep!=null){window.clearTimeout(this.__ep);
}this.__en=this.__em=null;
}});
})();
(function(){var b="qx.util.DeferredCall",a="qx.debug";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c,d){qx.core.Object.call(this);
this.__es=c;
this.__et=d||null;
this.__eu=qx.util.DeferredCallManager.getInstance();
},members:{__es:null,__et:null,__eu:null,cancel:function(){this.__eu.cancel(this);
},schedule:function(){this.__eu.schedule(this);
},call:function(){if(qx.core.Environment.get(a)){var e=this.__et;

if(e&&e.isDisposed&&e.isDisposed()){this.warn("The context object '"+e+"' of the defered call '"+this+"'is already disposed.");
}}this.__et?this.__es.apply(this.__et):this.__es();
}},destruct:function(f,g){this.cancel();
this.__et=this.__es=this.__eu=null;
}});
})();
(function(){var m="element",k="qx.debug",j="qxSelectable",h="off",g="engine.name",f="on",d="text",c="': ",b="Invalid context for callback.",a="Invalid capture flag.",Q="div",P="'",O="Invalid event type.",N="Invalid callback function",M="",L="mshtml",K="none",J="scroll",I="|bubble|",H="qx.html.Element",t="|capture|",u="activate",r="Failed to add event listener for type '",s="blur",p="deactivate",q="capture",n="userSelect",o=" from the target '",v="-moz-none",w="visible",B="releaseCapture",A="Failed to remove event listener for type '",D="tabIndex",C="focus",F="__eR",E="MozUserSelect",z=" to the target '",G="hidden";
qx.Class.define(H,{extend:qx.core.Object,construct:function(R,S,T){qx.core.Object.call(this);
this.__ev=R||Q;
this.__ew=S||null;
this.__ex=T||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__ey:{},_scheduleFlush:function(U){qx.html.Element.__fd.schedule();
},flush:function(){var bg;

if(qx.core.Environment.get(k)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var X=this.__ez();
var W=X.getFocus();

if(W&&this.__eD(W)){X.blur(W);
}var bn=X.getActive();

if(bn&&this.__eD(bn)){qx.bom.Element.deactivate(bn);
}var bb=this.__eB();

if(bb&&this.__eD(bb)){qx.bom.Element.releaseCapture(bb);
}var bh=[];
var bi=this._modified;

for(var bf in bi){bg=bi[bf];
if(bg.__eV()){if(bg.__eE&&qx.dom.Hierarchy.isRendered(bg.__eE)){bh.push(bg);
}else{if(qx.core.Environment.get(k)){if(this.DEBUG){bg.debug("Flush invisible element");
}}bg.__eU();
}delete bi[bf];
}}
for(var i=0,l=bh.length;i<l;i++){bg=bh[i];

if(qx.core.Environment.get(k)){if(this.DEBUG){bg.debug("Flush rendered element");
}}bg.__eU();
}var bd=this._visibility;

for(var bf in bd){bg=bd[bf];
var bj=bg.__eE;

if(!bj){delete bd[bf];
continue;
}
if(qx.core.Environment.get(k)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+bg.__eH);
}}if(!bg.$$disposed){bj.style.display=bg.__eH?M:K;
if((qx.core.Environment.get(g)==L)){if(!(document.documentMode>=8)){bj.style.visibility=bg.__eH?w:G;
}}}delete bd[bf];
}var scroll=this._scroll;

for(var bf in scroll){bg=scroll[bf];
var bo=bg.__eE;

if(bo&&bo.offsetWidth){var ba=true;
if(bg.__eK!=null){bg.__eE.scrollLeft=bg.__eK;
delete bg.__eK;
}if(bg.__eL!=null){bg.__eE.scrollTop=bg.__eL;
delete bg.__eL;
}var bk=bg.__eI;

if(bk!=null){var be=bk.element.getDomElement();

if(be&&be.offsetWidth){qx.bom.element.Scroll.intoViewX(be,bo,bk.align);
delete bg.__eI;
}else{ba=false;
}}var bl=bg.__eJ;

if(bl!=null){var be=bl.element.getDomElement();

if(be&&be.offsetWidth){qx.bom.element.Scroll.intoViewY(be,bo,bl.align);
delete bg.__eJ;
}else{ba=false;
}}if(ba){delete scroll[bf];
}}}var Y={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bm=this._actions[i];
var bj=bm.element.__eE;

if(!bj||!Y[bm.type]&&!bm.element.__eV()){continue;
}var bc=bm.args;
bc.unshift(bj);
qx.bom.Element[bm.type].apply(qx.bom.Element,bc);
}this._actions=[];
for(var bf in this.__ey){var V=this.__ey[bf];
var bo=V.element.__eE;

if(bo){qx.bom.Selection.set(bo,V.start,V.end);
delete this.__ey[bf];
}}qx.event.handler.Appear.refresh();
},__ez:function(){if(!this.__eA){var bp=qx.event.Registration.getManager(window);
this.__eA=bp.getHandler(qx.event.handler.Focus);
}return this.__eA;
},__eB:function(){if(!this.__eC){var bq=qx.event.Registration.getManager(window);
this.__eC=bq.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__eC.getCaptureElement();
},__eD:function(br){var bs=qx.core.ObjectRegistry.fromHashCode(br.$$element);
return bs&&!bs.__eV();
}},members:{__ev:null,__eE:null,__eF:false,__eG:true,__eH:true,__eI:null,__eJ:null,__eK:null,__eL:null,__eM:null,__eN:null,__eO:null,__ew:null,__ex:null,__eP:null,__eQ:null,__eR:null,__eS:null,__eT:null,_scheduleChildrenUpdate:function(){if(this.__eS){return;
}this.__eS=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__ev);
},__eU:function(){if(qx.core.Environment.get(k)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var length;
var bt=this.__eR;

if(bt){length=bt.length;
var bu;

for(var i=0;i<length;i++){bu=bt[i];

if(bu.__eH&&bu.__eG&&!bu.__eE){bu.__eU();
}}}
if(!this.__eE){this.__eE=this._createDomElement();
this.__eE.$$element=this.$$hash;
this._copyData(false);

if(bt&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__eS){this._syncChildren();
}}delete this.__eS;
},_insertChildren:function(){var bv=this.__eR;
var length=bv.length;
var bx;

if(length>2){var bw=document.createDocumentFragment();

for(var i=0;i<length;i++){bx=bv[i];

if(bx.__eE&&bx.__eG){bw.appendChild(bx.__eE);
}}this.__eE.appendChild(bw);
}else{var bw=this.__eE;

for(var i=0;i<length;i++){bx=bv[i];

if(bx.__eE&&bx.__eG){bw.appendChild(bx.__eE);
}}}},_syncChildren:function(){var bH=qx.core.ObjectRegistry;
var by=this.__eR;
var bF=by.length;
var bz;
var bD;
var bB=this.__eE;
var bE=bB.childNodes;
var bA=0;
var bC;

if(qx.core.Environment.get(k)){var bG=0;
}for(var i=bE.length-1;i>=0;i--){bC=bE[i];
bD=bH.fromHashCode(bC.$$element);

if(!bD||!bD.__eG||bD.__eT!==this){bB.removeChild(bC);

if(qx.core.Environment.get(k)){bG++;
}}}for(var i=0;i<bF;i++){bz=by[i];
if(bz.__eG){bD=bz.__eE;
bC=bE[bA];

if(!bD){continue;
}if(bD!=bC){if(bC){bB.insertBefore(bD,bC);
}else{bB.appendChild(bD);
}
if(qx.core.Environment.get(k)){bG++;
}}bA++;
}}if(qx.core.Environment.get(k)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+bG+" operations");
}}},_copyData:function(bI){var bM=this.__eE;
var bL=this.__ex;

if(bL){var bJ=qx.bom.element.Attribute;

for(var bN in bL){bJ.set(bM,bN,bL[bN]);
}}var bL=this.__ew;

if(bL){var bK=qx.bom.element.Style;

if(bI){bK.setStyles(bM,bL);
}else{bK.setCss(bM,bK.compile(bL));
}}var bL=this.__eP;

if(bL){for(var bN in bL){this._applyProperty(bN,bL[bN]);
}}var bL=this.__eQ;

if(bL){qx.event.Registration.getManager(bM).importListeners(bM,bL);
delete this.__eQ;
}},_syncData:function(){var bS=this.__eE;
var bR=qx.bom.element.Attribute;
var bP=qx.bom.element.Style;
var bQ=this.__eN;

if(bQ){var bV=this.__ex;

if(bV){var bT;

for(var bU in bQ){bT=bV[bU];

if(bT!==undefined){bR.set(bS,bU,bT);
}else{bR.reset(bS,bU);
}}}this.__eN=null;
}var bQ=this.__eM;

if(bQ){var bV=this.__ew;

if(bV){var bO={};

for(var bU in bQ){bO[bU]=bV[bU];
}bP.setStyles(bS,bO);
}this.__eM=null;
}var bQ=this.__eO;

if(bQ){var bV=this.__eP;

if(bV){var bT;

for(var bU in bQ){this._applyProperty(bU,bV[bU]);
}}this.__eO=null;
}},__eV:function(){var bW=this;
while(bW){if(bW.__eF){return true;
}
if(!bW.__eG||!bW.__eH){return false;
}bW=bW.__eT;
}return false;
},__eW:function(bX){if(bX.__eT===this){throw new Error("Child is already in: "+bX);
}
if(bX.__eF){throw new Error("Root elements could not be inserted into other ones.");
}if(bX.__eT){bX.__eT.remove(bX);
}bX.__eT=this;
if(!this.__eR){this.__eR=[];
}if(this.__eE){this._scheduleChildrenUpdate();
}},__eX:function(bY){if(bY.__eT!==this){throw new Error("Has no child: "+bY);
}if(this.__eE){this._scheduleChildrenUpdate();
}delete bY.__eT;
},__eY:function(ca){if(ca.__eT!==this){throw new Error("Has no child: "+ca);
}if(this.__eE){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__eR||null;
},getChild:function(cb){var cc=this.__eR;
return cc&&cc[cb]||null;
},hasChildren:function(){var cd=this.__eR;
return cd&&cd[0]!==undefined;
},indexOf:function(ce){var cf=this.__eR;
return cf?cf.indexOf(ce):-1;
},hasChild:function(cg){var ch=this.__eR;
return ch&&ch.indexOf(cg)!==-1;
},add:function(ci){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__eW(arguments[i]);
}this.__eR.push.apply(this.__eR,arguments);
}else{this.__eW(ci);
this.__eR.push(ci);
}return this;
},addAt:function(cj,ck){this.__eW(cj);
qx.lang.Array.insertAt(this.__eR,cj,ck);
return this;
},remove:function(cl){var cm=this.__eR;

if(!cm){return;
}
if(arguments[1]){var cn;

for(var i=0,l=arguments.length;i<l;i++){cn=arguments[i];
this.__eX(cn);
qx.lang.Array.remove(cm,cn);
}}else{this.__eX(cl);
qx.lang.Array.remove(cm,cl);
}return this;
},removeAt:function(co){var cp=this.__eR;

if(!cp){throw new Error("Has no children!");
}var cq=cp[co];

if(!cq){throw new Error("Has no child at this position!");
}this.__eX(cq);
qx.lang.Array.removeAt(this.__eR,co);
return this;
},removeAll:function(){var cr=this.__eR;

if(cr){for(var i=0,l=cr.length;i<l;i++){this.__eX(cr[i]);
}cr.length=0;
}return this;
},getParent:function(){return this.__eT||null;
},insertInto:function(parent,cs){parent.__eW(this);

if(cs==null){parent.__eR.push(this);
}else{qx.lang.Array.insertAt(this.__eR,this,cs);
}return this;
},insertBefore:function(ct){var parent=ct.__eT;
parent.__eW(this);
qx.lang.Array.insertBefore(parent.__eR,this,ct);
return this;
},insertAfter:function(cu){var parent=cu.__eT;
parent.__eW(this);
qx.lang.Array.insertAfter(parent.__eR,this,cu);
return this;
},moveTo:function(cv){var parent=this.__eT;
parent.__eY(this);
var cw=parent.__eR.indexOf(this);

if(cw===cv){throw new Error("Could not move to same index!");
}else if(cw<cv){cv--;
}qx.lang.Array.removeAt(parent.__eR,cw);
qx.lang.Array.insertAt(parent.__eR,this,cv);
return this;
},moveBefore:function(cx){var parent=this.__eT;
return this.moveTo(parent.__eR.indexOf(cx));
},moveAfter:function(cy){var parent=this.__eT;
return this.moveTo(parent.__eR.indexOf(cy)+1);
},free:function(){var parent=this.__eT;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__eR){return;
}parent.__eX(this);
qx.lang.Array.remove(parent.__eR,this);
return this;
},getDomElement:function(){return this.__eE||null;
},getNodeName:function(){return this.__ev;
},setNodeName:function(name){this.__ev=name;
},setRoot:function(cz){this.__eF=cz;
},useMarkup:function(cA){if(this.__eE){throw new Error("Could not overwrite existing element!");
}if((qx.core.Environment.get(g)==L)){var cB=document.createElement(Q);
}else{var cB=qx.bom.Element.getHelperElement();
}cB.innerHTML=cA;
this.useElement(cB.firstChild);
return this.__eE;
},useElement:function(cC){if(this.__eE){throw new Error("Could not overwrite existing element!");
}this.__eE=cC;
this.__eE.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var cE=this.getAttribute(D);

if(cE>=1){return true;
}var cD=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(cE>=0&&cD[this.__ev]){return true;
}return false;
},setSelectable:qx.core.Environment.select(g,{"webkit":function(cF){this.setAttribute(j,cF?f:h);
this.setStyle(n,cF?d:K);
},"gecko":function(cG){this.setAttribute(j,cG?f:h);
this.setStyle(E,cG?d:v);
},"default":function(cH){this.setAttribute(j,cH?f:h);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__ev];
},include:function(){if(this.__eG){return;
}delete this.__eG;

if(this.__eT){this.__eT._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__eG){return;
}this.__eG=false;

if(this.__eT){this.__eT._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__eG===true;
},show:function(){if(this.__eH){return;
}
if(this.__eE){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__eT){this.__eT._scheduleChildrenUpdate();
}delete this.__eH;
},hide:function(){if(!this.__eH){return;
}
if(this.__eE){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__eH=false;
},isVisible:function(){return this.__eH===true;
},scrollChildIntoViewX:function(cI,cJ,cK){var cL=this.__eE;
var cM=cI.getDomElement();

if(cK!==false&&cL&&cL.offsetWidth&&cM&&cM.offsetWidth){qx.bom.element.Scroll.intoViewX(cM,cL,cJ);
}else{this.__eI={element:cI,align:cJ};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eK;
},scrollChildIntoViewY:function(cN,cO,cP){var cQ=this.__eE;
var cR=cN.getDomElement();

if(cP!==false&&cQ&&cQ.offsetWidth&&cR&&cR.offsetWidth){qx.bom.element.Scroll.intoViewY(cR,cQ,cO);
}else{this.__eJ={element:cN,align:cO};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eL;
},scrollToX:function(x,cS){var cT=this.__eE;

if(cS!==true&&cT&&cT.offsetWidth){cT.scrollLeft=x;
delete this.__eK;
}else{this.__eK=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eI;
},getScrollX:function(){var cU=this.__eE;

if(cU){return cU.scrollLeft;
}return this.__eK||0;
},scrollToY:function(y,cV){var cW=this.__eE;

if(cV!==true&&cW&&cW.offsetWidth){cW.scrollTop=y;
delete this.__eL;
}else{this.__eL=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eJ;
},getScrollY:function(){var cX=this.__eE;

if(cX){return cX.scrollTop;
}return this.__eL||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(J,this.__fb,this);
},enableScrolling:function(){this.removeListener(J,this.__fb,this);
},__fa:null,__fb:function(e){if(!this.__fa){this.__fa=true;
this.__eE.scrollTop=0;
this.__eE.scrollLeft=0;
delete this.__fa;
}},getTextSelection:function(){var cY=this.__eE;

if(cY){return qx.bom.Selection.get(cY);
}return null;
},getTextSelectionLength:function(){var da=this.__eE;

if(da){return qx.bom.Selection.getLength(da);
}return null;
},getTextSelectionStart:function(){var dc=this.__eE;

if(dc){return qx.bom.Selection.getStart(dc);
}return null;
},getTextSelectionEnd:function(){var dd=this.__eE;

if(dd){return qx.bom.Selection.getEnd(dd);
}return null;
},setTextSelection:function(de,df){var dg=this.__eE;

if(dg){qx.bom.Selection.set(dg,de,df);
return;
}qx.html.Element.__ey[this.toHashCode()]={element:this,start:de,end:df};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var dh=this.__eE;

if(dh){qx.bom.Selection.clear(dh);
}delete qx.html.Element.__ey[this.toHashCode()];
},__fc:function(di,dj){var dk=qx.html.Element._actions;
dk.push({type:di,element:this,args:dj||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__fc(C);
},blur:function(){this.__fc(s);
},activate:function(){this.__fc(u);
},deactivate:function(){this.__fc(p);
},capture:function(dl){this.__fc(q,[dl!==false]);
},releaseCapture:function(){this.__fc(B);
},setStyle:function(dm,dn,dp){if(!this.__ew){this.__ew={};
}
if(this.__ew[dm]==dn){return;
}
if(dn==null){delete this.__ew[dm];
}else{this.__ew[dm]=dn;
}if(this.__eE){if(dp){qx.bom.element.Style.set(this.__eE,dm,dn);
return this;
}if(!this.__eM){this.__eM={};
}this.__eM[dm]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(dq,dr){var ds=qx.bom.element.Style;

if(!this.__ew){this.__ew={};
}
if(this.__eE){if(!this.__eM){this.__eM={};
}
for(var du in dq){var dt=dq[du];

if(this.__ew[du]==dt){continue;
}
if(dt==null){delete this.__ew[du];
}else{this.__ew[du]=dt;
}if(dr){ds.set(this.__eE,du,dt);
continue;
}this.__eM[du]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var du in dq){var dt=dq[du];

if(this.__ew[du]==dt){continue;
}
if(dt==null){delete this.__ew[du];
}else{this.__ew[du]=dt;
}}}return this;
},removeStyle:function(dv,dw){this.setStyle(dv,null,dw);
},getStyle:function(dx){return this.__ew?this.__ew[dx]:null;
},getAllStyles:function(){return this.__ew||null;
},setAttribute:function(dy,dz,dA){if(!this.__ex){this.__ex={};
}
if(this.__ex[dy]==dz){return;
}
if(dz==null){delete this.__ex[dy];
}else{this.__ex[dy]=dz;
}if(this.__eE){if(dA){qx.bom.element.Attribute.set(this.__eE,dy,dz);
return this;
}if(!this.__eN){this.__eN={};
}this.__eN[dy]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dB,dC){for(var dD in dB){this.setAttribute(dD,dB[dD],dC);
}return this;
},removeAttribute:function(dE,dF){this.setAttribute(dE,null,dF);
},getAttribute:function(dG){return this.__ex?this.__ex[dG]:null;
},_applyProperty:function(name,dH){},_setProperty:function(dI,dJ,dK){if(!this.__eP){this.__eP={};
}
if(this.__eP[dI]==dJ){return;
}
if(dJ==null){delete this.__eP[dI];
}else{this.__eP[dI]=dJ;
}if(this.__eE){if(dK){this._applyProperty(dI,dJ);
return this;
}if(!this.__eO){this.__eO={};
}this.__eO[dI]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dL,dM){this._setProperty(dL,null,dM);
},_getProperty:function(dN){var dO=this.__eP;

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
if(this.__eE){return qx.event.Registration.addListener(this.__eE,dQ,dR,self,dS);
}
if(!this.__eQ){this.__eQ={};
}
if(dS==null){dS=false;
}var dU=qx.event.Manager.getNextUniqueId();
var dV=dQ+(dS?t:I)+dU;
this.__eQ[dV]={type:dQ,listener:dR,self:self,capture:dS,unique:dU};
return dV;
},removeListener:function(dW,dX,self,dY){if(this.$$disposed){return null;
}
if(qx.core.Environment.get(k)){var ea=A+dW+P+o+this+c;
this.assertString(dW,ea+O);
this.assertFunction(dX,ea+N);

if(self!==undefined){this.assertObject(self,b);
}
if(dY!==undefined){this.assertBoolean(dY,a);
}}
if(this.__eE){qx.event.Registration.removeListener(this.__eE,dW,dX,self,dY);
}else{var ec=this.__eQ;
var eb;

if(dY==null){dY=false;
}
for(var ed in ec){eb=ec[ed];
if(eb.listener===dX&&eb.self===self&&eb.capture===dY&&eb.type===dW){delete ec[ed];
break;
}}}return this;
},removeListenerById:function(ee){if(this.$$disposed){return null;
}
if(this.__eE){qx.event.Registration.removeListenerById(this.__eE,ee);
}else{delete this.__eQ[ee];
}return this;
},hasListener:function(ef,eg){if(this.$$disposed){return false;
}
if(this.__eE){return qx.event.Registration.hasListener(this.__eE,ef,eg);
}var ei=this.__eQ;
var eh;

if(eg==null){eg=false;
}
for(var ej in ei){eh=ei[ej];
if(eh.capture===eg&&eh.type===ef){return true;
}}return false;
}},defer:function(ek){ek.__fd=new qx.util.DeferredCall(ek.flush,ek);
},destruct:function(){var em=this.__eE;

if(em){qx.event.Registration.getManager(em).removeAllListeners(em);
em.$$element=M;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__eT;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(F);
this.__ex=this.__ew=this.__eQ=this.__eP=this.__eN=this.__eM=this.__eO=this.__eE=this.__eT=this.__eI=this.__eJ=null;
}});
})();
(function(){var d="event.pointer",c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(e,f){var g={position:a,top:0,left:0};

if(qx.core.Environment.get(d)){g.pointerEvents=c;
}qx.html.Element.call(this,null,g);
this.__fe=e;
this.__ff=f||e.toHashCode();
this.useMarkup(e.getMarkup());
},members:{__ff:null,__fe:null,getId:function(){return this.__ff;
},getDecorator:function(){return this.__fe;
},resize:function(h,i){this.__fe.resize(this.getDomElement(),h,i);
},tint:function(j){this.__fe.tint(this.getDomElement(),j);
},getInsets:function(){return this.__fe.getInsets();
}},destruct:function(){this.__fe=null;
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__fg=f;
this.__fh=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fg:null,__fh:null,__fi:null,__fj:null,__fk:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__fk=qx.lang.Function.listener(this._onNative,this);
this.__fi=qx.bom.Event.supportsEvent(this.__fh,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__fh,this.__fi,this.__fk);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fh,this.__fi,this.__fk);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__fj!=p){this.__fj=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__fh,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__fg=this.__fh=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__fl=b;
this.__fm=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fl:null,__fm:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__fl=this.__fm=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__fn=u;
this.__fo=u.getWindow();
this.__fp=this.__fo.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__fq:null,__fr:null,__fn:null,__fo:null,__fp:null,__fs:null,__ft:null,__fu:null,__fv:null,__fw:false,__fx:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__fy:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__fz:function(F,G,H,I){if(!H){H=this.__fy(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__fo,h,qx.event.type.Data,[G]);
},__fA:function(J,K,L){if(!L){L=this.__fy(J);
}var K=K||J.type;

if(K==r){this.__fB(J,L);
}else if(K==q){this.__fC(J,L);
}else if(K==s){this.__fD(J,L);
}},__fB:function(M,N){var O=M.changedTouches[0];
this.__fs=O.screenX;
this.__ft=O.screenY;
this.__fu=new Date().getTime();
this.__fv=M.changedTouches.length===1;
},__fC:function(P,Q){if(this.__fv&&P.changedTouches.length>1){this.__fv=false;
}},__fD:function(R,S){if(this.__fv){var T=R.changedTouches[0];
var V={x:T.screenX-this.__fs,y:T.screenY-this.__ft};
var W=qx.event.handler.Touch;

if(this.__fx==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__fz(R,f,S,qx.event.type.Tap);
}else{var U=this.__fE(R,S,V);

if(U){R.swipe=U;
this.__fz(R,c,S,qx.event.type.Swipe);
}}}},__fE:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__fu;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__fu,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__fF:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__fG(bi)){this.__fw=true;
}else if(bj==s){this.__fw=false;
}var bm=this.__fH(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__fG:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__fH:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__fy(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__fq=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fp,r,this.__fq);
Event.addNativeListener(this.__fp,q,this.__fq);
Event.addNativeListener(this.__fp,s,this.__fq);
Event.addNativeListener(this.__fp,m,this.__fq);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__fr=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fp,k,this.__fr);
Event.addNativeListener(this.__fp,o,this.__fr);
Event.addNativeListener(this.__fp,l,this.__fr);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fp,r,this.__fq);
Event.removeNativeListener(this.__fp,q,this.__fq);
Event.removeNativeListener(this.__fp,s,this.__fq);
Event.removeNativeListener(this.__fp,m,this.__fq);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fp,k,this.__fr);
Event.removeNativeListener(this.__fp,o,this.__fr);
Event.removeNativeListener(this.__fp,l,this.__fr);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__fw){return;
}var bt=this.__fF(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__fx=this.__fy(bu);
}this.__fz(bu,bv);
this.__fA(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__fn=this.__fo=this.__fp=this.__fx=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__fI=d;
this.__fJ={};
qx.event.handler.Appear.__fK[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fK:{},refresh:function(){var e=this.__fK;

for(var f in e){e[f].refresh();
}}},members:{__fI:null,__fJ:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__fJ;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__fJ;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__fJ;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__fI.dispatchEvent(w,t);
}}}},destruct:function(){this.__fI=this.__fJ=null;
delete qx.event.handler.Appear.__fK[this.$$hash];
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
this.__fL=u;
this.__fM=u.getWindow();
this.__fN=this.__fM.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fO:null,__fP:null,__fQ:null,__fR:null,__fS:null,__fL:null,__fM:null,__fN:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===
d?
function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===
d?
function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__fT:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__fM,b,qx.event.type.Data,[E||D.type]);
},__fU:function(){var H=[this.__fM,this.__fN,this.__fN.body];
var I=this.__fM;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__fO=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fN,q,this.__fO);
Event.addNativeListener(this.__fN,t,this.__fO);
Event.addNativeListener(this.__fN,r,this.__fO);
Event.addNativeListener(this.__fN,n,this.__fO);
Event.addNativeListener(this.__fN,p,this.__fO);
},_initMoveObserver:function(){this.__fP=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fN,j,this.__fP);
Event.addNativeListener(this.__fN,l,this.__fP);
Event.addNativeListener(this.__fN,k,this.__fP);
},_initWheelObserver:function(){this.__fQ=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__fU();
qx.bom.Event.addNativeListener(J.target,J.type,this.__fQ);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fN,q,this.__fO);
Event.removeNativeListener(this.__fN,t,this.__fO);
Event.removeNativeListener(this.__fN,r,this.__fO);
Event.removeNativeListener(this.__fN,n,this.__fO);
Event.removeNativeListener(this.__fN,p,this.__fO);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fN,j,this.__fP);
Event.removeNativeListener(this.__fN,l,this.__fP);
Event.removeNativeListener(this.__fN,k,this.__fP);
},_stopWheelObserver:function(){var K=this.__fU();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__fQ);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__fT(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__fV){this.__fV(M,N,O);
}
if(this.__fX){this.__fX(M,N,O);
}this.__fT(M,N,O);

if(this.__fW){this.__fW(M,N,O);
}
if(this.__fY){this.__fY(M,N,O);
}this.__fR=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__fT(P,o);
}),__fV:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__fT(Q,t,S);
}}},"default":null}),__fW:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__fT(T,p,V);
}},"default":null}),__fX:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__fR==r){this.__fT(W,q,Y);
}else if(X==n){this.__fT(W,r,Y);
}},"default":null}),__fY:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__fS=bc;
break;
case t:if(bc!==this.__fS){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__fS);
this.__fT(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__fL=this.__fM=this.__fN=this.__fS=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="win",c="1",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__ga=by;
this.__gb=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__gc=this.__gb;
}else{this.__gc=this.__gb.document.documentElement;
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
}}},members:{__ge:null,__ga:null,__gb:null,__gc:null,__gd:null,__gf:null,__gg:null,__gh:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__gi();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__ga.dispatchEvent(bL,event);
}if(this.__gb){qx.event.Registration.fireEvent(this.__gb,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__gi();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__ga.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__gb){qx.event.Registration.fireEvent(this.__gb,s,qx.event.type.Data,[bN]);
}},__gi:function(){var bR=this.__ga.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__ga.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__ge=qx.lang.Function.listener(this.__gj,this);
this.__gh=qx.lang.Function.listener(this.__gl,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gc,i,this.__ge);
Event.addNativeListener(this.__gc,m,this.__ge);
Event.addNativeListener(this.__gc,k,this.__gh);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gc,i,this.__ge);
Event.removeNativeListener(this.__gc,m,this.__ge);
Event.removeNativeListener(this.__gc,k,this.__gh);

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
if(qx.core.Environment.get(h)==b){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

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
this.__gf=this.__ga=this.__gb=this.__gc=this.__gd=null;
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
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Ctrl",d="Shift",c="mousemove",b="move",a="mouseover",A="Alt",z="keyup",y="mouseup",x="dragend",w="on",v="mousedown",u="qxDraggable",t="drag",s="drop",r="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(B){qx.core.Object.call(this);
this.__gm=B;
this.__gn=B.getWindow().document.documentElement;
this.__gm.addListener(this.__gn,v,this._onMouseDown,this);
this.__gz();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__gm:null,__gn:null,__go:null,__gp:null,__gq:null,__gr:null,__gs:null,__gt:null,__gu:null,__gv:null,__gw:false,__gx:0,__gy:0,canHandleEvent:function(C,D){},registerEvent:function(E,F,G){},unregisterEvent:function(H,I,J){},addType:function(K){this.__gq[K]=true;
},addAction:function(L){this.__gr[L]=true;
},supportsType:function(M){return !!this.__gq[M];
},supportsAction:function(N){return !!this.__gr[N];
},getData:function(O){if(!this.__gG||!this.__go){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__gq[O]){throw new Error("Unsupported data type: "+O+"!");
}
if(!this.__gt[O]){this.__gu=O;
this.__gB(q,this.__gp,this.__go,false);
}
if(!this.__gt[O]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__gt[O]||null;
},getCurrentAction:function(){return this.__gv;
},addData:function(P,Q){this.__gt[P]=Q;
},getCurrentType:function(){return this.__gu;
},isSessionActive:function(){return this.__gw;
},__gz:function(){this.__gq={};
this.__gr={};
this.__gs={};
this.__gt={};
},__gA:function(){if(this.__gp==null){return;
}var T=this.__gr;
var R=this.__gs;
var S=null;

if(this.__gG){if(R.Shift&&R.Ctrl&&T.alias){S=k;
}else if(R.Shift&&R.Alt&&T.copy){S=j;
}else if(R.Shift&&T.move){S=b;
}else if(R.Alt&&T.alias){S=k;
}else if(R.Ctrl&&T.copy){S=j;
}else if(T.move){S=b;
}else if(T.copy){S=j;
}else if(T.alias){S=k;
}}
if(S!=this.__gv){this.__gv=S;
this.__gB(o,this.__gp,this.__go,false);
}},__gB:function(U,V,W,X,Y){var bb=qx.event.Registration;
var ba=bb.createEvent(U,qx.event.type.Drag,[X,Y]);

if(V!==W){ba.setRelatedTarget(W);
}return bb.dispatchEvent(V,ba);
},__gC:function(bc){while(bc&&bc.nodeType==1){if(bc.getAttribute(u)==w){return bc;
}bc=bc.parentNode;
}return null;
},__gD:function(bd){while(bd&&bd.nodeType==1){if(bd.getAttribute(r)==w){return bd;
}bd=bd.parentNode;
}return null;
},__gE:function(){this.__gp=null;
this.__gm.removeListener(this.__gn,c,this._onMouseMove,this,true);
this.__gm.removeListener(this.__gn,y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__gz();
},__gF:function(){if(this.__gw){this.__gm.removeListener(this.__gn,a,this._onMouseOver,this,true);
this.__gm.removeListener(this.__gn,h,this._onMouseOut,this,true);
this.__gm.removeListener(this.__gn,g,this._onKeyDown,this,true);
this.__gm.removeListener(this.__gn,z,this._onKeyUp,this,true);
this.__gB(x,this.__gp,this.__go,false);
this.__gw=false;
}this.__gG=false;
this.__go=null;
this.__gE();
},__gG:false,_onWindowBlur:function(e){this.__gF();
},_onKeyDown:function(e){var be=e.getKeyIdentifier();

switch(be){case A:case f:case d:if(!this.__gs[be]){this.__gs[be]=true;
this.__gA();
}}},_onKeyUp:function(e){var bf=e.getKeyIdentifier();

switch(bf){case A:case f:case d:if(this.__gs[bf]){this.__gs[bf]=false;
this.__gA();
}}},_onMouseDown:function(e){if(this.__gw){return;
}var bg=this.__gC(e.getTarget());

if(bg){this.__gx=e.getDocumentLeft();
this.__gy=e.getDocumentTop();
this.__gp=bg;
this.__gm.addListener(this.__gn,c,this._onMouseMove,this,true);
this.__gm.addListener(this.__gn,y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__gG){this.__gB(s,this.__go,this.__gp,false,e);
}if(this.__gw){e.stopPropagation();
}this.__gF();
},_onMouseMove:function(e){if(this.__gw){if(!this.__gB(t,this.__gp,this.__go,true,e)){this.__gF();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gx)>3||Math.abs(e.getDocumentTop()-this.__gy)>3){if(this.__gB(n,this.__gp,this.__go,true,e)){this.__gw=true;
this.__gm.addListener(this.__gn,a,this._onMouseOver,this,true);
this.__gm.addListener(this.__gn,h,this._onMouseOut,this,true);
this.__gm.addListener(this.__gn,g,this._onKeyDown,this,true);
this.__gm.addListener(this.__gn,z,this._onKeyUp,this,true);
var bh=this.__gs;
bh.Ctrl=e.isCtrlPressed();
bh.Shift=e.isShiftPressed();
bh.Alt=e.isAltPressed();
this.__gA();
}else{this.__gB(x,this.__gp,this.__go,false);
this.__gE();
}}}},_onMouseOver:function(e){var bi=e.getTarget();
var bj=this.__gD(bi);

if(bj&&bj!=this.__go){this.__gG=this.__gB(m,bj,this.__gp,true,e);
this.__go=bj;
this.__gA();
}},_onMouseOut:function(e){var bl=this.__gD(e.getTarget());
var bk=this.__gD(e.getRelatedTarget());

if(bl&&bl!==bk&&bl==this.__go){this.__gB(l,this.__go,bk,false,e);
this.__go=null;
this.__gG=false;
qx.event.Timer.once(this.__gA,this,0);
}}},destruct:function(){this.__gp=this.__go=this.__gm=this.__gn=this.__gq=this.__gr=this.__gs=this.__gt=null;
},defer:function(bm){qx.event.Registration.addHandler(bm);
}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__gH:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__gI:{},__gJ:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__gJ[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__gJ[t]=true;
}catch(e){qx.bom.Element.__gJ[t]=false;
}}return qx.bom.Element.__gJ[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__gI[w]){var v=qx.bom.Element.__gI[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__gI[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__gH;
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
qx.Class.define(b,{extend:qx.event.type.Event,members:{__gK:null,__gL:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__gK=d;
this.__gL=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__gK=this.__gK;
g.__gL=this.__gL;
return g;
},getOrientation:function(){return this.__gK;
},isLandscape:function(){return this.__gL==c;
},isPortrait:function(){return this.__gL==a;
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
},isMultiTouch:function(){return this.__gN().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__gM(f).pageX;
},getDocumentTop:function(g){return this.__gM(g).pageY;
},getScreenLeft:function(h){return this.__gM(h).screenX;
},getScreenTop:function(j){return this.__gM(j).screenY;
},getViewportLeft:function(k){return this.__gM(k).clientX;
},getViewportTop:function(l){return this.__gM(l).clientY;
},getIdentifier:function(m){return this.__gM(m).identifier;
},__gM:function(n){n=n==null?0:n;
return this.__gN()[n];
},__gN:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
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
(function(){var h="left",g="right",f="middle",e="none",d="engine.name",c="click",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(i,j){var j=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,i,j);
j.button=i.button;
j.clientX=i.clientX;
j.clientY=i.clientY;
j.pageX=i.pageX;
j.pageY=i.pageY;
j.screenX=i.screenX;
j.screenY=i.screenY;
j.wheelDelta=i.wheelDelta;
j.detail=i.detail;
j.srcElement=i.srcElement;
j.target=i.target;
return j;
},__gO:{0:h,2:g,1:f},__gP:{1:h,2:g,4:f},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case b:return g;
case c:if(this.__gQ){return this.__gQ();
}default:if(this._native.target!==undefined){return this.__gO[this._native.button]||e;
}else{return this.__gP[this._native.button]||e;
}}},__gQ:qx.core.Environment.select(d,{"mshtml":function(){return h;
},"default":null}),isLeftPressed:function(){return this.getButton()===h;
},isMiddlePressed:function(){return this.getButton()===f;
},isRightPressed:function(){return this.getButton()===g;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:function(){if(this._native.pageX!==undefined){return this._native.pageX;
}else{var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(k);
}},getDocumentTop:function(){if(this._native.pageY!==undefined){return this._native.pageY;
}else{var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(l);
}},getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var i="engine.version",h="os.name",g="osx",f="win",e="engine.name",d="chrome",c="qx.dynamicmousewheel",b="qx.event.type.MouseWheel",a="browser.name";
qx.Class.define(b,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();
this.preventDefault();
},__gR:function(j){var k=Math.abs(j);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>k){qx.event.type.MouseWheel.MINSCROLL=k;
this.__gS();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<k){qx.event.type.MouseWheel.MAXSCROLL=k;
this.__gS();
}if(qx.event.type.MouseWheel.MAXSCROLL===k&&qx.event.type.MouseWheel.MINSCROLL===k){return 2*(j/k);
}var l=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var m=(j/l)*Math.log(l)*qx.event.type.MouseWheel.FACTOR;
return m<0?Math.min(m,-1):Math.max(m,1);
},__gS:function(){var n=qx.event.type.MouseWheel.MAXSCROLL||0;
var q=qx.event.type.MouseWheel.MINSCROLL||n;

if(n<=q){return;
}var o=n-q;
var p=(n/o)*Math.log(o);

if(p==0){p=1;
}qx.event.type.MouseWheel.FACTOR=6/p;
},getWheelDelta:function(){if(qx.core.Environment.get(c)){if(this._native.detail){return this.__gR(this._native.detail);
}return this.__gR(-this._native.wheelDelta);
}else{var r=qx.core.Environment.select(e,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.core.Environment.get(a)==d){if(qx.core.Environment.get(h)==g){return -(this._native.wheelDelta/60);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.core.Environment.get(h)==f){var s=120;
if(parseFloat(qx.core.Environment.get(i))==533.16){s=1200;
}}else{s=40;
if(parseFloat(qx.core.Environment.get(i))==533.16||parseFloat(qx.core.Environment.get(i))==533.17||parseFloat(qx.core.Environment.get(i))==533.18){s=1200;
}}return -(this._native.wheelDelta/s);
}}});
return r.call(this);
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
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gT:null,__gU:null,__gV:null,__gW:null,__gX:null,__gY:null,__ha:null,__hb:null,__hc:null,__hd:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
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
}},tryActivate:function(S){var T=this.__hs(S);

if(T){this.setActive(T);
}},__he:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__hf:function(){if(this._windowFocused){this._windowFocused=false;
this.__he(this._window,null,g,false);
}},__hg:function(){if(!this._windowFocused){this._windowFocused=true;
this.__he(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__gT=qx.lang.Function.listener(this.__hm,this);
this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__hl,this);
this.__gW=qx.lang.Function.listener(this.__hk,this);
this.__gX=qx.lang.Function.listener(this.__hh,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.addNativeListener(this._window,f,this.__gV,true);
qx.bom.Event.addNativeListener(this._window,g,this.__gW,true);
qx.bom.Event.addNativeListener(this._window,y,this.__gX,true);
},"mshtml":function(){this.__gT=qx.lang.Function.listener(this.__hm,this);
this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__ha=qx.lang.Function.listener(this.__hi,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
this.__gY=qx.lang.Function.listener(this.__hp,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gT);
qx.bom.Event.addNativeListener(this._document,h,this.__gU);
qx.bom.Event.addNativeListener(this._document,b,this.__ha);
qx.bom.Event.addNativeListener(this._document,a,this.__hb);
qx.bom.Event.addNativeListener(this._document,d,this.__gY);
},"webkit":function(){this.__gT=qx.lang.Function.listener(this.__hm,this);
this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
this.__gV=qx.lang.Function.listener(this.__hl,this);
this.__gW=qx.lang.Function.listener(this.__hk,this);
this.__gY=qx.lang.Function.listener(this.__hp,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.addNativeListener(this._document,d,this.__gY,false);
qx.bom.Event.addNativeListener(this._window,c,this.__hb,true);
qx.bom.Event.addNativeListener(this._window,f,this.__gV,true);
qx.bom.Event.addNativeListener(this._window,g,this.__gW,true);
},"opera":function(){this.__gT=qx.lang.Function.listener(this.__hm,this);
this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__ha=qx.lang.Function.listener(this.__hi,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.addNativeListener(this._window,z,this.__ha,true);
qx.bom.Event.addNativeListener(this._window,c,this.__hb,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__gV,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__gW,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__gX,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gT);
qx.bom.Event.removeNativeListener(this._document,h,this.__gU);
qx.bom.Event.removeNativeListener(this._document,b,this.__ha);
qx.bom.Event.removeNativeListener(this._document,a,this.__hb);
qx.bom.Event.removeNativeListener(this._document,d,this.__gY);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__gY,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__hb,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__gV,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__gW,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__ha,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__hb,true);
}}),__hh:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__ht(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__hi:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__hg();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__hr(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__hg();

if(this.__hc){this.setFocus(this.__hc);
delete this.__hc;
}
if(this.__hd){this.setActive(this.__hd);
delete this.__hd;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__ht(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__hj:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__hf();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__hf();
this.__hc=this.getFocus();
this.__hd=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__hk:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__hf();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__hf();
this.__hc=this.getFocus();
this.__hd=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__hl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__hg();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__hg();

if(this.__hc){this.setFocus(this.__hc);
delete this.__hc;
}
if(this.__hd){this.setActive(this.__hd);
delete this.__hd;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__hm:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__hr(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__hr(bB);

if(bA){if(!this.__ht(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__ht(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__hr(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__hr(bK);

if(!this.__ht(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__hn:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__ho(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__ho(bQ));
},"default":null})),__ho:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__hp:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__ht(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__hq:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__hr:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__hq(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__hs:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__ht:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__he(cg,cf,v,true);
}
if(cf){this.__he(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__he(ci,ch,a,true);
}
if(ch){this.__he(ch,ci,b,true);
}if(ci){this.__he(ci,ch,g,false);
}
if(ch){this.__he(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__hu=null;
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
},"default":function(p){if(this.__hv(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__hv(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__hv(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__hv(A)){var F=qx.bom.Range.get();
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
}},"gecko|webkit":function(K){if(this.__hv(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__hv(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__hv(O)){var T=qx.bom.Range.get();
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
}},"gecko|webkit":function(Y){if(this.__hv(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__hv(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__hv:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
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
qx.Class.define(e,{statics:{__hw:{names:{"class":b,"for":x,html:q,text:(qx.core.Environment.get(h)==l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__hw.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Environment.select(h,{"mshtml":function(D,name){var F=this.__hw;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__hw;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(J,name,K){if(typeof K===i){return;
}var L=this.__hw;
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
this.__hA=j.getWindow();
this.__hB=k;
j.addListener(this.__hA,f,this.releaseCapture,this);
j.addListener(this.__hA,e,this.releaseCapture,this);
j.addListener(this.__hA,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__hB:null,__hC:null,__hD:true,__hA:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__hC&&this.__hE[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__hD||!qx.dom.Hierarchy.contains(this.__hC,o)){o=this.__hC;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__hE:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__hC===q&&this.__hD==r){return;
}
if(this.__hC){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__hD=r;
this.__hC=q;
this.__hB.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__hC;
},releaseCapture:function(){var s=this.__hC;

if(!s){return;
}this.__hC=null;
this.__hB.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__hC=this.__hA=this.__hB=null;
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
qx.Class.define(z,{statics:{__hF:function(D,E){return qx.bom.element.Style.get(D,E,qx.bom.element.Style.COMPUTED_MODE,false);
},__hG:function(F,G){return parseInt(qx.bom.element.Style.get(F,G,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__hH:function(H){var K=0,top=0;
if(H.getBoundingClientRect&&qx.core.Environment.get(f)!=t){var J=qx.dom.Node.getWindow(H);
K-=qx.bom.Viewport.getScrollLeft(J);
top-=qx.bom.Viewport.getScrollTop(J);
}else{var I=qx.dom.Node.getDocument(H).body;
H=H.parentNode;
while(H&&H!=I){K+=H.scrollLeft;
top+=H.scrollTop;
H=H.parentNode;
}}return {left:K,top:top};
},__hI:qx.core.Environment.select(f,{"mshtml":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=0;
var top=0;
O-=M.clientLeft+N.documentElement.clientLeft;
top-=M.clientTop+N.documentElement.clientTop;

if(!qx.core.Environment.get(A)){O+=this.__hG(M,i);
top+=this.__hG(M,j);
}return {left:O,top:top};
},"webkit":function(P){var R=qx.dom.Node.getDocument(P);
var Q=R.body;
var S=Q.offsetLeft;
var top=Q.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<530.17){S+=this.__hG(Q,i);
top+=this.__hG(Q,j);
}return {left:S,top:top};
},"gecko":function(T){var U=qx.dom.Node.getDocument(T).body;
var V=U.offsetLeft;
var top=U.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<1.9){V+=this.__hG(U,g);
top+=this.__hG(U,h);
}if(qx.bom.element.BoxSizing.get(U)!==c){V+=this.__hG(U,i);
top+=this.__hG(U,j);
}return {left:V,top:top};
},"default":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
return {left:Y,top:top};
}}),__hJ:qx.core.Environment.select(f,{"mshtml|webkit":function(ba){var bc=qx.dom.Node.getDocument(ba);
if(ba.getBoundingClientRect){var bd=ba.getBoundingClientRect();
var be=bd.left;
var top=bd.top;
}else{var be=ba.offsetLeft;
var top=ba.offsetTop;
ba=ba.offsetParent;
var bb=bc.body;
while(ba&&ba!=bb){be+=ba.offsetLeft;
top+=ba.offsetTop;
be+=this.__hG(ba,i);
top+=this.__hG(ba,j);
ba=ba.offsetParent;
}}return {left:be,top:top};
},"gecko":function(bf){if(bf.getBoundingClientRect){var bi=bf.getBoundingClientRect();
var bj=Math.round(bi.left);
var top=Math.round(bi.top);
}else{var bj=0;
var top=0;
var bg=qx.dom.Node.getDocument(bf).body;
var bh=qx.bom.element.BoxSizing;

if(bh.get(bf)!==c){bj-=this.__hG(bf,i);
top-=this.__hG(bf,j);
}
while(bf&&bf!==bg){bj+=bf.offsetLeft;
top+=bf.offsetTop;
if(bh.get(bf)!==c){bj+=this.__hG(bf,i);
top+=this.__hG(bf,j);
}if(bf.parentNode&&this.__hF(bf.parentNode,n)!=v){bj+=this.__hG(bf.parentNode,i);
top+=this.__hG(bf.parentNode,j);
}bf=bf.offsetParent;
}}return {left:bj,top:top};
},"default":function(bk){var bm=0;
var top=0;
var bl=qx.dom.Node.getDocument(bk).body;
while(bk&&bk!==bl){bm+=bk.offsetLeft;
top+=bk.offsetTop;
bk=bk.offsetParent;
}return {left:bm,top:top};
}}),get:function(bn,bo){if(bn.tagName==u){var location=this.__hK(bn);
var bv=location.left;
var top=location.top;
}else{var bp=this.__hI(bn);
var bu=this.__hJ(bn);
var scroll=this.__hH(bn);
var bv=bu.left+bp.left-scroll.left;
var top=bu.top+bp.top-scroll.top;
}var bq=bv+bn.offsetWidth;
var br=top+bn.offsetHeight;

if(bo){if(bo==B||bo==e){var bs=qx.bom.element.Overflow.getX(bn);

if(bs==e||bs==C){bq+=bn.scrollWidth-bn.offsetWidth+this.__hG(bn,i)+this.__hG(bn,a);
}var bt=qx.bom.element.Overflow.getY(bn);

if(bt==e||bt==C){br+=bn.scrollHeight-bn.offsetHeight+this.__hG(bn,j)+this.__hG(bn,b);
}}
switch(bo){case B:bv+=this.__hG(bn,y);
top+=this.__hG(bn,r);
bq-=this.__hG(bn,k);
br-=this.__hG(bn,q);
case e:bv-=bn.scrollLeft;
top-=bn.scrollTop;
bq-=bn.scrollLeft;
br-=bn.scrollTop;
case s:bv+=this.__hG(bn,i);
top+=this.__hG(bn,j);
bq-=this.__hG(bn,a);
br-=this.__hG(bn,b);
break;
case m:bv-=this.__hG(bn,g);
top-=this.__hG(bn,h);
bq+=this.__hG(bn,o);
br+=this.__hG(bn,w);
break;
}}return {left:bv,top:top,right:bq,bottom:br};
},__hK:qx.core.Environment.select(f,{"default":function(bw){var top=bw.offsetTop+this.__hG(bw,h);
var bx=bw.offsetLeft+this.__hG(bw,g);
return {left:bx,top:top};
},"mshtml":function(by){var top=by.offsetTop;
var bz=by.offsetLeft;

if(!((parseFloat(qx.core.Environment.get(d))<8||qx.core.Environment.get(l)<8)&&!qx.core.Environment.get(A))){top+=this.__hG(by,h);
bz+=this.__hG(by,g);
}return {left:bz,top:top};
},"gecko":function(bA){var top=bA.offsetTop+this.__hG(bA,h)+this.__hG(bA,i);
var bB=bA.offsetLeft+this.__hG(bA,g)+this.__hG(bA,j);
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
qx.Class.define(b,{statics:{__hL:{},remove:function(c){delete this.__hL[c.$$hash];
},add:function(d){this.__hL[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},isScheduled:function(e){return !!this.__hL[e.$$hash];
},flush:function(){var f=this.__hO();
for(var i=f.length-1;i>=0;i--){var g=f[i];
if(g.hasValidLayout()){continue;
}if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();
g.renderLayout(0,0,j.width,j.height);
}else{var h=g.getBounds();
g.renderLayout(h.left,h.top,h.width,h.height);
}}},getNestingLevel:function(k){var l=this.__hN;
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
},__hM:function(){var t=qx.ui.core.queue.Visibility;
this.__hN={};
var s=[];
var r=this.__hL;
var o,q;

for(var p in r){o=r[p];

if(t.isVisible(o)){q=this.getNestingLevel(o);
if(!s[q]){s[q]={};
}s[q][p]=o;
delete r[p];
}}return s;
},__hO:function(){var x=[];
var z=this.__hM();

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
qx.Class.define(b,{statics:{__hP:false,__hQ:{},__hR:0,MAX_RETRIES:10,scheduleFlush:function(j){var self=qx.ui.core.queue.Manager;
self.__hQ[j]=true;

if(!self.__hP){self.__hW.schedule();
self.__hP=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__hS){return;
}self.__hS=true;
self.__hW.cancel();
var k=self.__hQ;
self.__hT(function(){while(k.visibility||k.widget||k.appearance||k.layout||k.element){if(k.widget){delete k.widget;
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
}}},function(){self.__hP=false;
});
self.__hT(function(){if(k.dispose){delete k.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__hS=false;
});
self.__hR=0;
},__hT:qx.core.Environment.select(i,{"true":function(l,m){l();
m();
},"false":function(n,o){var self=qx.ui.core.queue.Manager;

try{n();
}catch(e){if(qx.core.Environment.get(i)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__hP=false;
self.__hS=false;
self.__hR+=1;
if(qx.core.Environment.get(a)==f&&qx.core.Environment.get(d)<=7){o();
}
if(self.__hR<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__hR-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{o();
}}}),__hU:function(e){var p=qx.ui.core.queue.Manager;
if(e.getData()==g){p.PAUSE=true;

if(p.__hV){window.clearTimeout(p.__hV);
}p.__hV=window.setTimeout(function(){p.PAUSE=false;
p.__hV=null;
p.flush();
},500);
}else{p.flush();
}}},defer:function(q){q.__hW=new qx.util.DeferredCall(q.flush);
qx.html.Element._scheduleFlush=q.scheduleFlush;
qx.event.Registration.addListener(window,h,qx.core.Environment.get(c)?q.__hU:q.flush);
}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__hX:[],remove:function(c){qx.lang.Array.remove(this.__hX,c);
},add:function(d){var e=this.__hX;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__hX;
var g;

for(var i=f.length-1;i>=0;i--){g=f[i];
f.splice(i,1);
g.syncWidget();
}if(f.length!=0){return;
}this.__hX=[];
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__hY:[],__ia:{},remove:function(c){delete this.__ia[c.$$hash];
qx.lang.Array.remove(this.__hY,c);
},isVisible:function(d){return this.__ia[d.$$hash]||false;
},__ib:function(e){var g=this.__ia;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__ib(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(j){var k=this.__hY;

if(qx.lang.Array.contains(k,j)){return;
}k.unshift(j);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var o=this.__hY;
var p=this.__ia;
for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;

if(p[n]!=null){o[i].addChildrenToQueue(o);
}}var l={};

for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;
l[n]=p[n];
p[n]=null;
}for(var i=o.length-1;i>=0;i--){var m=o[i];
var n=m.$$hash;
o.splice(i,1);
if(p[n]==null){this.__ib(m);
}if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();
}}this.__hY=[];
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__ic:[],remove:function(c){qx.lang.Array.remove(this.__ic,c);
},add:function(d){var e=this.__ic;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(f){return qx.lang.Array.contains(this.__ic,f);
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__ic;
var h;

for(var i=g.length-1;i>=0;i--){h=g[i];
g.splice(i,1);
if(j.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__id:[],add:function(c){var d=this.__id;

if(qx.lang.Array.contains(d,c)){return;
}d.unshift(c);
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__id;

for(var i=e.length-1;i>=0;i--){var f=e[i];
e.splice(i,1);
f.dispose();
}if(e.length!=0){return;
}this.__id=[];
}}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__im=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__im:null,__in:{focusin:1,focusout:1,focus:1,blur:1},__io:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(o&&q&&j.getType()==a){o.getContainerElement().activate();
}if(this.__in[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__in[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__in[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!u||!(u.isEnabled()||this.__io[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__im.getListeners(u,v,k);

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
}}},destruct:function(){this.__im=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var c="abstract",b="qx.debug",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:c,extend:qx.core.Object,members:{__ip:null,_invalidChildrenCache:null,__iq:null,invalidateLayoutCache:function(){this.__ip=null;
},renderLayout:function(d,e){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__ip){return this.__ip;
}return this.__ip=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(f){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Environment.select(b,{"true":function(g,name,h){},"false":null}),_clearSeparators:function(){var i=this.__iq;

if(i instanceof qx.ui.core.LayoutItem){i.clearSeparators();
}},_renderSeparator:function(j,k){this.__iq.renderSeparator(j,k);
},connectToWidget:function(l){if(l&&this.__iq){throw new Error("It is not possible to manually set the connected widget.");
}this.__iq=l;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__iq;
},_applyLayoutChange:function(){if(this.__iq){this.__iq.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__iq.getLayoutChildren();
}},destruct:function(){this.__iq=this.__ip=null;
}});
})();
(function(){var q="",p="string",o="/",n="mshtml",m="engine.name",l="io.ssl",k="//",j="?",i="data",h="isClippedImage has been superseded by getCombinedFormat",c="type",g="data:image/",f=";",b="encoding",a="qx.util.ResourceManager",e="singleton",d=",";
qx.Class.define(a,{extend:qx.core.Object,type:e,construct:function(){qx.core.Object.call(this);
},statics:{__ir:qx.$$resources||{},__is:{}},members:{has:function(r){return !!this.self(arguments).__ir[r];
},getData:function(s){return this.self(arguments).__ir[s]||null;
},getImageWidth:function(t){var u=this.self(arguments).__ir[t];
return u?u[0]:null;
},getImageHeight:function(v){var w=this.self(arguments).__ir[v];
return w?w[1]:null;
},getImageFormat:function(x){var y=this.self(arguments).__ir[x];
return y?y[2]:null;
},isClippedImage:function(z){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
var A=this.self(arguments).__ir[z];
return A&&A.length>4&&typeof (A[4])==p&&this.constructor.__ir[A[4]];
},getCombinedFormat:function(B){var E=q;
var D=this.self(arguments).__ir[B];
var C=D&&D.length>4&&typeof (D[4])==p&&this.constructor.__ir[D[4]];

if(C){var G=D[4];
var F=this.constructor.__ir[G];
E=F[2];
}return E;
},toUri:function(H){if(H==null){return H;
}var I=this.self(arguments).__ir[H];

if(!I){return H;
}
if(typeof I===p){var K=I;
}else{var K=I[3];
if(!K){return H;
}}var J=q;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){J=this.self(arguments).__is[K];
}return J+qx.$$libraries[K].resourceUri+o+H;
},toDataUri:function(L){var N=this.constructor.__ir[L];
var O=this.constructor.__ir[N[4]];
var P;

if(O){var M=O[4][L];
P=g+M[c]+f+M[b]+d+M[i];
}else{this.debug("ResourceManager.toDataUri: falling back for",L);
P=this.toUri(L);
}return P;
}},defer:function(Q){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var U in qx.$$libraries){var S;

if(qx.$$libraries[U].resourceUri){S=qx.$$libraries[U].resourceUri;
}else{Q.__is[U]=q;
continue;
}if(S.match(/^\/\//)!=null){Q.__is[U]=window.location.protocol;
}else if(S.match(/^\//)!=null){Q.__is[U]=window.location.protocol+k+window.location.host;
}else if(S.match(/^\.\//)!=null){var R=document.URL;
Q.__is[U]=R.substring(0,R.lastIndexOf(o)+1);
}else if(S.match(/^http/)!=null){Q.__is[U]=q;
}else{var V=window.location.href.indexOf(j);
var T;

if(V==-1){T=window.location.href;
}else{T=window.location.href.substring(0,V);
}Q.__is[U]=T.substring(0,T.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var u="",t='indexOf',s='slice',r='concat',q='toLocaleLowerCase',p="qx.type.BaseString",o='match',n="qx.debug",m='search',k='replace',d='toLowerCase',j='charCodeAt',g='split',c='substring',b='lastIndexOf',f='substr',e='toLocaleUpperCase',h='toUpperCase',a='charAt';
qx.Class.define(p,{extend:Object,construct:function(v){var v=v||u;
this.__it=v;
this.length=v.length;
},members:{$$isString:true,length:0,__it:null,toString:function(){return this.__it;
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
this.__iu=c;
this.__iv=d;
},members:{__iu:null,__iv:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__iu,this.__iv);
}}});
})();
(function(){var m="_",l="",k="locale",j="_applyLocale",h="changeLocale",g="C",f="locale.variant",e="qx.dynlocale",d="qx.locale.Manager",c="String",a="singleton",b="qx.debug";
qx.Class.define(d,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__iw=qx.$$translations||{};
this.__ix=qx.$$locales||{};
var n=qx.core.Environment.get(k);
var o=qx.core.Environment.get(f);

if(o!==l){n+=m+o;
}this.__iy=n;
this.setLocale(n||this.__iz);
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
}},properties:{locale:{check:c,nullable:true,apply:j,event:h}},members:{__iz:g,__iA:null,__iB:null,__iw:null,__ix:null,__iy:null,getLanguage:function(){return this.__iB;
},getTerritory:function(){return this.getLocale().split(m)[1]||l;
},getAvailableLocales:function(){var D=[];

for(var C in this.__ix){if(C!=this.__iz){D.push(C);
}}return D;
},__iC:function(E){var G;

if(E==null){return null;
}var F=E.indexOf(m);

if(F==-1){G=E;
}else{G=E.substring(0,F);
}return G;
},_applyLocale:function(H,I){if(qx.core.Environment.get(b)){if(!(H in this.__ix||H==this.__iy)){qx.log.Logger.warn("Locale: "+H+" not available.");
}}this.__iA=H;
this.__iB=this.__iC(H);
},addTranslation:function(J,K){var L=this.__iw;

if(L[J]){for(var M in K){L[J][M]=K[M];
}}else{L[J]=K;
}},addLocale:function(N,O){var P=this.__ix;

if(P[N]){for(var Q in O){P[N][Q]=O[Q];
}}else{P[N]=O;
}},translate:function(R,S,T){var U=this.__iw;
return this.__iD(U,R,S,T);
},localize:function(V,W,X){var Y=this.__ix;
return this.__iD(Y,V,W,X);
},__iD:function(ba,bb,bc,bd){var be;

if(!ba){return bb;
}
if(bd){var bg=this.__iC(bd);
}else{bd=this.__iA;
bg=this.__iB;
}if(!be&&ba[bd]){be=ba[bd][bb];
}if(!be&&ba[bg]){be=ba[bg][bb];
}if(!be&&ba[this.__iz]){be=ba[this.__iz][bb];
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
}},destruct:function(){this.__iw=this.__ix=null;
}});
})();
(function(){var k="px",j="engine.name",i="div",h="img",g="",f="no-repeat",d="qx.debug",c="scale-x",b="mshtml",a="repeat",J="scale",I="b64",H="scale-y",G="qx/icon",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",r='<img src="',s="qx.bom.element.Decoration",p="', sizingMethod='",q='"/>',n="png",o="')",l='"></div>',m='" style="',t="none",u="webkit",w=" ",v="repeat-x",y="DXImageTransform.Microsoft.AlphaImageLoader",x="qx/static/blank.gif",z="absolute";
qx.Class.define(s,{statics:{DEBUG:false,__iE:{},__iF:(qx.core.Environment.get(j)==b)&&qx.core.Environment.get(D)<9,__iG:qx.core.Environment.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__iH:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(K,L,M,N){var P=this.getTagName(M,L);

if(P!=K.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var Q=this.getAttributes(L,M,N);

if(P===h){K.src=Q.src||qx.util.ResourceManager.getInstance().toUri(x);
}if(K.style.backgroundPosition!=g&&Q.style.backgroundPosition===undefined){Q.style.backgroundPosition=null;
}if(K.style.clip!=g&&Q.style.clip===undefined){Q.style.clip=null;
}var O=qx.bom.element.Style;
O.setStyles(K,Q.style);
if(this.__iF){try{K.filters[y].apply();
}catch(e){}}},create:function(R,S,T){var U=this.getTagName(S,R);
var W=this.getAttributes(R,S,T);
var V=qx.bom.element.Style.compile(W.style);

if(U===h){return r+W.src+m+V+q;
}else{return B+V+l;
}},getTagName:function(X,Y){if((qx.core.Environment.get(j)==b)){if(Y&&this.__iF&&this.__iG[X]&&qx.lang.String.endsWith(Y,F)){return i;
}}return this.__iH[X];
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
if(this.__iF&&this.__iG[bb]&&be===n){bd=this.__iK(bc,bb,ba);
}else{if(bb===J){bd=this.__iL(bc,bb,ba);
}else if(bb===c||bb===H){bd=this.__iM(bc,bb,ba);
}else{bd=this.__iP(bc,bb,ba);
}}return bd;
},__iI:function(bf,bh,bi){if(bf.width==null&&bh!=null){bf.width=bh+k;
}
if(bf.height==null&&bi!=null){bf.height=bi+k;
}return bf;
},__iJ:function(bj){var bk=qx.util.ResourceManager.getInstance().getImageWidth(bj)||qx.io.ImageLoader.getWidth(bj);
var bl=qx.util.ResourceManager.getInstance().getImageHeight(bj)||qx.io.ImageLoader.getHeight(bj);
return {width:bk,height:bl};
},__iK:function(bm,bn,bo){var br=this.__iJ(bo);
bm=this.__iI(bm,br.width,br.height);
var bq=bn==f?E:J;
var bp=C+qx.util.ResourceManager.getInstance().toUri(bo)+p+bq+o;
bm.filter=bp;
bm.backgroundImage=bm.backgroundRepeat=g;
return {style:bm};
},__iL:function(bs,bt,bu){var bv=qx.util.ResourceManager.getInstance().toUri(bu);
var bw=this.__iJ(bu);
bs=this.__iI(bs,bw.width,bw.height);
return {src:bv,style:bs};
},__iM:function(bx,by,bz){var bA=qx.util.ResourceManager.getInstance();
var bD=bA.getCombinedFormat(bz);
var bF=this.__iJ(bz);
var bB;

if(bD){var bE=bA.getData(bz);
var bC=bE[4];

if(bD==I){bB=bA.toDataUri(bz);
}else{bB=bA.toUri(bC);
}
if(by===c){bx=this.__iN(bx,bE,bF.height);
}else{bx=this.__iO(bx,bE,bF.width);
}return {src:bB,style:bx};
}else{if(qx.core.Environment.get(d)){this.__iR(bz);
}
if(by==c){bx.height=bF.height==null?null:bF.height+k;
}else if(by==H){bx.width=bF.width==null?null:bF.width+k;
}bB=bA.toUri(bz);
return {src:bB,style:bx};
}},__iN:function(bG,bH,bI){var bJ=qx.util.ResourceManager.getInstance().getImageHeight(bH[4]);
bG.clip={top:-bH[6],height:bI};
bG.height=bJ+k;
if(bG.top!=null){bG.top=(parseInt(bG.top,10)+bH[6])+k;
}else if(bG.bottom!=null){bG.bottom=(parseInt(bG.bottom,10)+bI-bJ-bH[6])+k;
}return bG;
},__iO:function(bK,bL,bM){var bN=qx.util.ResourceManager.getInstance().getImageWidth(bL[4]);
bK.clip={left:-bL[5],width:bM};
bK.width=bN+k;
if(bK.left!=null){bK.left=(parseInt(bK.left,10)+bL[5])+k;
}else if(bK.right!=null){bK.right=(parseInt(bK.right,10)+bM-bN-bL[5])+k;
}return bK;
},__iP:function(bO,bP,bQ){var bT=qx.util.ResourceManager.getInstance();
var bY=bT.getCombinedFormat(bQ);
var cb=this.__iJ(bQ);
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
}else{if(qx.core.Environment.get(d)){if(bP!==a){this.__iR(bQ);
}}bO=this.__iI(bO,cb.width,cb.height);
bO=this.__iQ(bO,bQ,bP);
return {style:bO};
}},__iQ:function(cc,cd,ce){var top=null;
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
},__iR:function(cj){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(cj)&&cj.indexOf(G)==-1){if(!this.__iE[cj]){qx.log.Logger.debug("Potential clipped image candidate: "+cj);
this.__iE[cj]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Environment.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__iF;
},"default":function(){return false;
}})}});
})();
(function(){var c="engine.name",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__iS:{},__iT:{width:null,height:null},__iU:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__iS[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__iS[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__iS[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__iS[k];
return m?m.format:null;
},getSize:function(n){var o=this.__iS[n];
return o?
{width:o.width,height:o.height}:this.__iT;
},getWidth:function(p){var q=this.__iS[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__iS[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__iS[t];

if(!w){w=this.__iS[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__iV,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__iS[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__iS[z]=null;
},__iV:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__iS[E];

if(!F){}if(event.type===b){F.loaded=true;
F.width=this.__iW(D);
F.height=this.__iX(D);
var G=this.__iU.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__iW:qx.core.Environment.select(c,{"gecko":function(I){return I.naturalWidth;
},"default":function(J){return J.width;
}}),__iX:qx.core.Environment.select(c,{"gecko":function(K){return K.naturalHeight;
},"default":function(L){return L.height;
}})}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__iY:[n,null,m,i,null,r,k,null,r],__ja:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__jb:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__jc:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__jb(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__jc(G)){G=q+G+q;
}var H=this.__iY;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__ja;
}var L=this.__jb(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__jc(N)){O=j+N+p;
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
},resetSource:function(){if((qx.core.Environment.get(i)==d)){this._setProperty(k,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(k,true);
}return this;
},setScale:function(y){this._setProperty(j,y);
return this;
},getScale:function(){return this._getProperty(j);
}}});
})();
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="div",e="replacement",d="qx.event.type.Event",c="engine.name",b="hidden",a="Boolean",A="px",z="http",y="scale",x="changeSource",w="qx.ui.basic.Image",v="qx.debug",u="loaded",t="-disabled.$1",s="loadingFailed",r="String",p="_applySource",q="img",n="__js",o="image",l="mshtml",m="_applyScale",k="no-repeat";
qx.Class.define(w,{extend:qx.ui.core.Widget,construct:function(B){this.__js={};
qx.ui.core.Widget.call(this);

if(B){this.setSource(B);
}},properties:{source:{check:r,init:null,nullable:true,event:x,apply:p,themeable:true},scale:{check:a,init:false,themeable:true,apply:m},appearance:{refine:true,init:o},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:d,loaded:d},members:{__jt:null,__ju:null,__jv:null,__js:null,getContentElement:function(){return this.__jz();
},_createContentElement:function(){return this.__jz();
},_getContentHint:function(){return {width:this.__jt||0,height:this.__ju||0};
},_applyEnabled:function(C,D){qx.ui.core.Widget.prototype._applyEnabled.call(this,C,D);

if(this.getSource()){this._styleSource();
}},_applySource:function(E){this._styleSource();
},_applyScale:function(F){this._styleSource();
},__jw:function(G){this.__jv=G;
},__jx:function(){if(this.__jv==null){var I=this.getSource();
var H=false;

if(I!=null){H=qx.lang.String.endsWith(I,g);
}
if(this.getScale()&&H&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__jv=h;
}else if(this.getScale()){this.__jv=i;
}else{this.__jv=j;
}}return this.__jv;
},__jy:function(J){var K;
var L;

if(J==h){K=true;
L=f;
}else if(J==j){K=false;
L=f;
}else{K=true;
L=q;
}var M=new qx.html.Image(L);
M.setScale(K);
M.setStyles({"overflowX":b,"overflowY":b});
return M;
},__jz:function(){var N=this.__jx();

if(this.__js[N]==null){this.__js[N]=this.__jy(N);
}return this.__js[N];
},_styleSource:function(){var O=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!O){this.getContentElement().resetSource();
return;
}this.__jA(O);

if((qx.core.Environment.get(c)==l)){var P=this.getScale()?y:k;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(P,O);
}if(qx.util.ResourceManager.getInstance().has(O)){this.__jC(this.getContentElement(),O);
}else if(qx.io.ImageLoader.isLoaded(O)){this.__jD(this.getContentElement(),O);
}else{this.__jE(this.getContentElement(),O);
}},__jA:qx.core.Environment.select(c,{"mshtml":function(Q){var S=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var R=qx.lang.String.endsWith(Q,g);

if(S&&R){if(this.getScale()&&this.__jx()!=h){this.__jw(h);
}else if(!this.getScale()&&this.__jx()!=j){this.__jw(j);
}}else{if(this.getScale()&&this.__jx()!=i){this.__jw(i);
}else if(!this.getScale()&&this.__jx()!=j){this.__jw(j);
}}this.__jB(this.__jz());
},"default":function(T){if(this.getScale()&&this.__jx()!=i){this.__jw(i);
}else if(!this.getScale()&&this.__jx(j)){this.__jw(j);
}this.__jB(this.__jz());
}}),__jB:function(U){var X=this.getContainerElement();
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
}},__jC:function(bc,bd){var bf=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var be=bd.replace(/\.([a-z]+)$/,t);

if(bf.has(be)){bd=be;
this.addState(e);
}else{this.removeState(e);
}}if(bc.getSource()===bd){return;
}bc.setSource(bd);
this.__jH(bf.getImageWidth(bd),bf.getImageHeight(bd));
},__jD:function(bg,bh){var bj=qx.io.ImageLoader;
bg.setSource(bh);
var bi=bj.getWidth(bh);
var bk=bj.getHeight(bh);
this.__jH(bi,bk);
},__jE:function(bl,bm){var bn=qx.io.ImageLoader;

if(qx.core.Environment.get(v)){if(!qx.lang.String.startsWith(bm.toLowerCase(),z)){var self=this.self(arguments);

if(!self.__jF){self.__jF={};
}
if(!self.__jF[bm]){this.debug("try to load an unmanaged relative image: "+bm);
self.__jF[bm]=true;
}}}if(!bn.isFailed(bm)){bn.load(bm,this.__jG,this);
}else{if(bl!=null){bl.resetSource();
}}},__jG:function(bo,bp){if(this.$$disposed===true){return;
}if(bo!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bp.failed){this.warn("Image could not be loaded: "+bo);
this.fireEvent(s);
}else{this.fireEvent(u);
}this._styleSource();
},__jH:function(bq,br){if(bq!==this.__jt||br!==this.__ju){this.__jt=bq;
this.__ju=br;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(n);
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
this.__jI=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__jI:null,_applyTimeoutInterval:function(h){this.__jI.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__jI){this.__jI.stop();
}this.__jI=null;
}});
})();
(function(){var j="top",i="right",h="bottom",g="left",f="edge-start",e="align-start",d="align-end",c="edge-end",b="qx.util.placement.AbstractAxis",a="-",F="best-fit",E="size",D="target.bottom",C="offsets",B="size.width",A="offsets.bottom",z="qx.util.placement.Placement",y="qx.debug",x="keep-align",w="target.right",q="direct",r="offsets.right",o="target",p='__jJ',m="offsets.left",n="area",k="target.top",l="area.height",s="target.left",t="area.width",v="size.height",u="offsets.top";
qx.Class.define(z,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jJ=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:b},axisY:{check:b},edge:{check:[j,i,h,g],init:j},align:{check:[j,i,h,g],init:i}},statics:{__jK:null,compute:function(G,H,I,J,K,L,M){this.__jK=this.__jK||new qx.util.placement.Placement();
var P=K.split(a);
var O=P[0];
var N=P[1];
this.__jK.set({axisX:this.__jO(L),axisY:this.__jO(M),edge:O,align:N});
return this.__jK.compute(G,H,I,J);
},__jL:null,__jM:null,__jN:null,__jO:function(Q){switch(Q){case q:this.__jL=this.__jL||new qx.util.placement.DirectAxis();
return this.__jL;
case x:this.__jM=this.__jM||new qx.util.placement.KeepAlignAxis();
return this.__jM;
case F:this.__jN=this.__jN||new qx.util.placement.BestFitAxis();
return this.__jN;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__jJ:null,compute:function(R,S,T,U){if(qx.core.Environment.get(y)){this.assertObject(R,E);
this.assertNumber(R.width,B);
this.assertNumber(R.height,v);
this.assertObject(S,n);
this.assertNumber(S.width,t);
this.assertNumber(S.height,l);
this.assertObject(T,o);
this.assertNumber(T.top,k);
this.assertNumber(T.right,w);
this.assertNumber(T.bottom,D);
this.assertNumber(T.left,s);
this.assertObject(U,C);
this.assertNumber(U.top,u);
this.assertNumber(U.right,r);
this.assertNumber(U.bottom,A);
this.assertNumber(U.left,m);
}var V=this.getAxisX()||this.__jJ;
var X=V.computeStart(R.width,{start:T.left,end:T.right},{start:U.left,end:U.right},S.width,this.__jP());
var W=this.getAxisY()||this.__jJ;
var top=W.computeStart(R.height,{start:T.top,end:T.bottom},{start:U.top,end:U.bottom},S.height,this.__jQ());
return {left:X,top:top};
},__jP:function(){var ba=this.getEdge();
var Y=this.getAlign();

if(ba==g){return f;
}else if(ba==i){return c;
}else if(Y==g){return e;
}else if(Y==i){return d;
}},__jQ:function(){var bc=this.getEdge();
var bb=this.getAlign();

if(bc==j){return f;
}else if(bc==h){return c;
}else if(bb==j){return e;
}else if(bb==h){return d;
}}},destruct:function(){this._disposeObjects(p);
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
(function(){var g="mousedown",f="qx.debug",d="blur",c="__nr",b="qx.ui.popup.Manager",a="singleton";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nr=[];
qx.event.Registration.addListener(document.documentElement,g,this.__nt,this,true);
qx.bom.Element.addListener(window,d,this.hideAll,this);
},members:{__nr:null,add:function(h){if(qx.core.Environment.get(f)){if(!(h instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+h);
}}this.__nr.push(h);
this.__ns();
},remove:function(j){if(qx.core.Environment.get(f)){if(!(j instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+j);
}}
if(this.__nr){qx.lang.Array.remove(this.__nr,j);
this.__ns();
}},hideAll:function(){var k;
var m=this.__nr;

if(m){for(var i=0,l=m.length;i<l;i++){var k=m[i];
k.getAutoHide()&&k.exclude();
}}},__ns:function(){var n=1e7;

for(var i=0;i<this.__nr.length;i++){this.__nr[i].setZIndex(n++);
}},__nt:function(e){var p=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var q=this.__nr;

for(var i=0;i<q.length;i++){var o=q[i];

if(!o.getAutoHide()||p==o||qx.ui.core.Widget.contains(o,p)){continue;
}o.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__nt,this,true);
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
(function(){var k="qx.dynlocale",j="Boolean",i="color",h="qx.debug",g="enabled",f="changeLocale",d="_applyTextAlign",c="qx.ui.core.Widget",b="nowrap",a="changeTextAlign",E="_applyWrap",D="changeValue",C="changeContent",B="qx.ui.basic.Label",A="whiteSpace",z="css.textoverflow",y="html.xul",x="_applyValue",w="center",v="_applyBuddy",r="String",s="textAlign",p="right",q="changeRich",n="normal",o="_applyRich",l="click",m="label",t="left",u="A";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(F){qx.ui.core.Widget.call(this);

if(F!=null){this.setValue(F);
}
if(qx.core.Environment.get(k)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}},properties:{rich:{check:j,init:false,event:q,apply:o},wrap:{check:j,init:true,apply:E},value:{check:r,apply:x,event:D,nullable:true},buddy:{check:c,apply:v,nullable:true,init:null,dereference:true},textAlign:{check:[t,w,p],nullable:true,themeable:true,apply:d,event:a},appearance:{refine:true,init:m},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__kY:null,__la:null,__lb:null,__lc:null,_getContentHint:function(){if(this.__la){this.__ld=this.__le();
delete this.__la;
}return {width:this.__ld.width,height:this.__ld.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(G){if(!qx.core.Environment.get(z)&&qx.core.Environment.get(y)){if(G&&!this.isRich()){if(qx.core.Environment.get(h)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,G);
},_getContentHeightForWidth:function(H){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__le(H).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(I,J){this.getContentElement().setStyle(s,I);
},_applyTextColor:function(K,L){if(K){this.getContentElement().setStyle(i,qx.theme.manager.Color.getInstance().resolve(K));
}else{this.getContentElement().removeStyle(i);
}},__ld:{width:0,height:0},_applyFont:function(M,N){var O;

if(M){this.__kY=qx.theme.manager.Font.getInstance().resolve(M);
O=this.__kY.getStyles();
}else{this.__kY=null;
O=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(O);
this.__la=true;
qx.ui.core.queue.Layout.add(this);
},__le:function(P){var T=qx.bom.Label;
var R=this.getFont();
var Q=R?this.__kY.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||u;
var S=this.getRich();
return S?T.getHtmlSize(content,Q,P):T.getTextSize(content,Q);
},_applyBuddy:function(U,V){if(V!=null){V.removeBinding(this.__lb);
this.__lb=null;
this.removeListenerById(this.__lc);
this.__lc=null;
}
if(U!=null){this.__lb=U.bind(g,this,g);
this.__lc=this.addListener(l,function(){if(U.isFocusable()){U.focus.apply(U);
}},this);
}},_applyRich:function(W){this.getContentElement().setRich(W);
this.__la=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(X,Y){if(X&&!this.isRich()){if(qx.core.Environment.get(h)){this.warn("Only rich labels support wrap.");
}}
if(this.isRich()){var ba=X?n:b;
this.getContentElement().setStyle(A,ba);
}},_onChangeLocale:qx.core.Environment.select(k,{"true":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"false":null}),_applyValue:function(bb,bc){this.getContentElement().setValue(bb);
this.__la=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(C,bb,bc);
}},destruct:function(){if(qx.core.Environment.get(k)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}if(this.__lb!=null){var bd=this.getBuddy();

if(bd!=null&&!bd.isDisposed()){bd.removeBinding(this.__lb);
}}this.__kY=this.__lb=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__lf:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__lf;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(g){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__lf==h){return;
}this.__lf=h;
return this;
},setValue:function(j){this._setProperty(b,j);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var j="css.textoverflow",i="html.xul",h="div",g="inherit",f="text",e="value",d="",c="engine.name",b="hidden",a="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",E="nowrap",D="auto",C="0",B="ellipsis",A="normal",z="label",y="os.name",x="px",w="crop",v="gecko",q="end",r="100%",o="visible",p="qx.bom.Label",m="win",n="opera",k="engine.version",l="mshtml",s="block",t="-1000px",u="absolute";
qx.Class.define(p,{statics:{__lg:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__lh:function(){var F=this.__lj(false);
document.body.insertBefore(F,document.body.firstChild);
return this._textElement=F;
},__li:function(){var G=this.__lj(true);
document.body.insertBefore(G,document.body.firstChild);
return this._htmlElement=G;
},__lj:function(H){var I=qx.bom.Element.create(h);
var J=I.style;
J.width=J.height=D;
J.left=J.top=t;
J.visibility=b;
J.position=u;
J.overflow=o;

if(H){J.whiteSpace=A;
}else{J.whiteSpace=E;

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var K=document.createElementNS(a,z);
var J=K.style;
J.padding=C;

for(var L in this.__lg){J[L]=g;
}I.appendChild(K);
}}return I;
},__lk:function(M){var N={};

if(M){N.whiteSpace=A;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){N.display=s;
}else{N.overflow=b;
N.whiteSpace=E;
N.textOverflow=B;
if((qx.core.Environment.get(c)==n)){N.OTextOverflow=B;
}}return N;
},create:function(content,O,P){if(!P){P=window;
}
if(O){var Q=P.document.createElement(h);
Q.useHtml=true;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var Q=P.document.createElement(h);
var S=P.document.createElementNS(a,z);
var R=S.style;
R.cursor=g;
R.color=g;
R.overflow=b;
R.maxWidth=r;
R.padding=C;
for(var T in this.__lg){S.style[T]=g;
}S.setAttribute(w,q);
Q.appendChild(S);
}else{var Q=P.document.createElement(h);
qx.bom.element.Style.setStyles(Q,this.__lk(O));
}
if(content){this.setValue(Q,content);
}return Q;
},setValue:function(U,V){V=V||d;

if(U.useHtml){U.innerHTML=V;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){U.firstChild.setAttribute(e,V);
}else{qx.bom.element.Attribute.set(U,f,V);
}},getValue:function(W){if(W.useHtml){return W.innerHTML;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){return W.firstChild.getAttribute(e)||d;
}else{return qx.bom.element.Attribute.get(W,f);
}},getHtmlSize:function(content,X,Y){var ba=this._htmlElement||this.__li();
ba.style.width=Y!==undefined?Y+x:D;
ba.innerHTML=content;
return this.__ll(ba,X);
},getTextSize:function(bb,bc){var bd=this._textElement||this.__lh();

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){bd.firstChild.setAttribute(e,bb);
}else{qx.bom.element.Attribute.set(bd,f,bb);
}return this.__ll(bd,bc);
},__ll:function(be,bf){var bg=this.__lg;

if(!bf){bf={};
}
for(var bh in bg){be.style[bh]=bf[bh]||d;
}var bi=qx.bom.element.Dimension.getSize(be);

if((qx.core.Environment.get(c)==v)){if(!(qx.core.Environment.get(y)==m)){bi.width++;
}}if((qx.core.Environment.get(c)==l)&&parseFloat(qx.core.Environment.get(k))>=9){bi.width++;
}return bi;
}}});
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
},__lm:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(r);
var u=parseInt(s.get(r,d)||i,10);
var x=parseInt(s.get(r,e)||i,10);

if(this.__lm[t]){var w=r.clientWidth;

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

if(this.__lm[C]){return y.clientHeight-B-A;
}else{if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-B-A;
}else{var D=y.scrollHeight-B;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)==6){D-=A;
}return D;
}}},getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};
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
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__ox",b="__ow",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__ow:null,__ox:null,getWindowManager:function(){if(!this.__ox){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__ox;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__ox){this.__ox.setDesktop(null);
}j.setDesktop(this);
this.__ox=j;
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
},getWindows:function(){if(!this.__ow){this.__ow=[];
}return this.__ow;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var f="__oy",e="_applyBlockerColor",d="Number",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__oy=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:e,themeable:true},blockerOpacity:{check:d,init:1,apply:b,themeable:true}},members:{__oy:null,_applyBlockerColor:function(g,h){this.__oy.setColor(g);
},_applyBlockerOpacity:function(i,j){this.__oy.setOpacity(i);
},block:function(){this.__oy.block();
},isBlocked:function(){return this.__oy.isBlocked();
},unblock:function(){this.__oy.unblock();
},forceUnblock:function(){this.__oy.forceUnblock();
},blockContent:function(k){this.__oy.blockContent(k);
},isContentBlocked:function(){return this.__oy.isContentBlocked();
},unblockContent:function(){this.__oy.unblockContent();
},forceUnblockContent:function(){this.__oy.forceUnblockContent();
},getBlocker:function(){return this.__oy;
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var t="engine.name",s="help",r="contextmenu",q="changeGlobalCursor",p="keypress",o="Boolean",n="root",m="",l=" !important",k="input",d="_applyGlobalCursor",j="Space",h="_applyNativeHelp",c=";",b="qx.ui.root.Abstract",g="abstract",f="textarea",i="String",a="*";
qx.Class.define(b,{type:g,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
this.addListener(p,this.__oA,this);
},properties:{appearance:{refine:true,init:n},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:i,nullable:true,themeable:true,apply:d,event:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:o,init:false,apply:h}},members:{__oz:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Environment.select(t,{"mshtml":function(u,v){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__oz;

if(!z){this.__oz=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,a,qx.bom.element.Cursor.compile(w).replace(c,m)+l);
}}}),_applyNativeContextMenu:function(A,B){if(A){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},__oA:function(e){if(e.getKeyIdentifier()!==j){return;
}var D=e.getTarget();
var C=qx.ui.core.FocusHandler.getInstance();

if(!C.isFocused(D)){return;
}var E=D.getContentElement().getNodeName();

if(E===k||E===f){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Environment.select(t,{"mshtml":function(F,G){if(G===false){qx.bom.Event.removeNativeListener(document,s,qx.lang.Function.returnFalse);
}
if(F===false){qx.bom.Event.addNativeListener(document,s,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__oz=null;
},defer:function(H,I){qx.ui.core.MChildrenHandling.remap(I);
}});
})();
(function(){var n="resize",m="engine.name",l="position",k="0px",j="webkit",i="paddingLeft",h="$$widget",g="qx.ui.root.Application",f="hidden",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(g,{extend:qx.ui.root.Abstract,construct:function(o){this.__oB=qx.dom.Node.getWindow(o);
this.__oC=o;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__oB,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__oB:null,__oC:null,_createContainerElement:function(){var p=this.__oC;
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
},_computeSizeHint:function(){var u=qx.bom.Viewport.getWidth(this.__oB);
var v=qx.bom.Viewport.getHeight(this.__oB);
return {minWidth:u,width:u,maxWidth:u,minHeight:v,height:v,maxHeight:v};
},_applyPadding:function(w,x,name){if(w&&(name==a||name==i)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,w,x,name);
},_applyDecorator:function(y,z){qx.ui.root.Abstract.prototype._applyDecorator.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__oB=this.__oC=null;
}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="resize",f="keyup",d="keypress",c="__on",b="backgroundColor",a="_applyOpacity",x="Boolean",w="opacity",v="interval",u="Tab",t="__ol",s="Color",r="__oj",q="qx.ui.root.Page",p="Number",o="qx.ui.core.Blocker",m="qx.ui.root.Application",n="_applyColor";
qx.Class.define(o,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(q)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(g,this.__oo,this);
}
if(qx.Class.isDefined(m)&&y instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__og=[];
this.__oh=[];
this.__oi=[];
},properties:{color:{check:s,init:null,nullable:true,apply:n,themeable:true},opacity:{check:p,init:1,apply:a,themeable:true},keepBlockerActive:{check:x,init:false}},members:{__oj:null,__ok:0,__ol:null,__oi:null,__og:null,__oh:null,__om:null,__on:null,_isPageRoot:false,_widget:null,__oo:function(e){var z=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:z.width,height:z.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:z.width,height:z.height});
}},_applyColor:function(A,B){var C=qx.theme.manager.Color.getInstance().resolve(A);
this.__op(b,C);
},_applyOpacity:function(D,E){this.__op(w,D);
},__op:function(F,G){var H=[];
this.__oj&&H.push(this.__oj);
this.__ol&&H.push(this.__ol);

for(var i=0;i<H.length;i++){H[i].setStyle(F,G);
}},_backupActiveWidget:function(){var I=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__og.push(I.getActive());
this.__oh.push(I.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var L=this.__og.length;

if(L>0){var K=this.__og[L-1];

if(K){qx.bom.Element.activate(K);
}this.__og.pop();
}var J=this.__oh.length;

if(J>0){var K=this.__oh[J-1];

if(K){qx.bom.Element.focus(this.__oh[J-1]);
}this.__oh.pop();
}},__oq:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__oj){this.__oj=this.__oq();
this.__oj.setStyle(l,15);
this._widget.getContainerElement().add(this.__oj);
this.__oj.exclude();
}return this.__oj;
},block:function(){this.__ok++;

if(this.__ok<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(h,this.__ov,this);
M.addListener(d,this.__ou,this);
M.addListener(j,this.__ou,this);
M.addListener(f,this.__ou,this);
}},isBlocked:function(){return this.__ok>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__ok--;

if(this.__ok<1){this.__or();
this.__ok=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__ok=0;
this.__or();
},__or:function(){this._restoreActiveWidget();
var N=this.getBlockerElement();
N.removeListener(h,this.__ov,this);
N.removeListener(d,this.__ou,this);
N.removeListener(j,this.__ou,this);
N.removeListener(f,this.__ou,this);
N.exclude();
},getContentBlockerElement:function(){if(!this.__ol){this.__ol=this.__oq();
this._widget.getContentElement().add(this.__ol);
this.__ol.exclude();
}return this.__ol;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(l,O);
this.__oi.push(O);

if(this.__oi.length<2){P.include();

if(this._isPageRoot){if(!this.__on){this.__on=new qx.event.Timer(300);
this.__on.addListener(v,this.__ot,this);
}this.__on.start();
this.__ot();
}}},isContentBlocked:function(){return this.__oi.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oi.pop();
var Q=this.__oi[this.__oi.length-1];
var R=this.getContentBlockerElement();
R.setStyle(l,Q);

if(this.__oi.length<1){this.__os();
this.__oi=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oi=[];
var S=this.getContentBlockerElement();
S.setStyle(l,null);
this.__os();
},__os:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__on.stop();
}},__ot:function(){var T=this._widget.getContainerElement().getDomElement();
var U=qx.dom.Node.getDocument(T);
this.getContentBlockerElement().setStyles({height:U.documentElement.scrollHeight+k,width:U.documentElement.scrollWidth+k});
},__ou:function(e){if(e.getKeyIdentifier()==u){e.stop();
}},__ov:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(g,this.__oo,this);
}this._disposeObjects(t,r,c);
this.__om=this.__og=this.__oh=this._widget=this.__oi=null;
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
this.addListener(t,this.__oS,this);
this.addListener(n,this.__oS,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__oS:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var k="keypress",j="focusout",h="activate",g="Tab",f="__oD",d="singleton",c="deactivate",b="focusin",a="qx.ui.core.FocusHandler";
qx.Class.define(a,{extend:qx.core.Object,type:d,construct:function(){qx.core.Object.call(this);
this.__oD={};
},members:{__oD:null,__oE:null,__oF:null,__oG:null,connectTo:function(m){m.addListener(k,this.__oH,this);
m.addListener(b,this._onFocusIn,this,true);
m.addListener(j,this._onFocusOut,this,true);
m.addListener(h,this._onActivate,this,true);
m.addListener(c,this._onDeactivate,this,true);
},addRoot:function(n){this.__oD[n.$$hash]=n;
},removeRoot:function(o){delete this.__oD[o.$$hash];
},getActiveWidget:function(){return this.__oE;
},isActive:function(p){return this.__oE==p;
},getFocusedWidget:function(){return this.__oF;
},isFocused:function(q){return this.__oF==q;
},isFocusRoot:function(r){return !!this.__oD[r.$$hash];
},_onActivate:function(e){var t=e.getTarget();
this.__oE=t;
var s=this.__oI(t);

if(s!=this.__oG){this.__oG=s;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__oE==u){this.__oE=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__oF){this.__oF=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var w=e.getTarget();

if(w==this.__oF){this.__oF=null;
w.visualizeBlur();
}},__oH:function(e){if(e.getKeyIdentifier()!=g){return;
}
if(!this.__oG){return;
}e.stopPropagation();
e.preventDefault();
var x=this.__oF;

if(!e.isShiftPressed()){var y=x?this.__oM(x):this.__oK();
}else{var y=x?this.__oN(x):this.__oL();
}if(y){y.tabFocus();
}},__oI:function(z){var A=this.__oD;

while(z){if(A[z.$$hash]){return z;
}z=z.getLayoutParent();
}return null;
},__oJ:function(B,C){if(B===C){return 0;
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
},__oK:function(){return this.__oQ(this.__oG,null);
},__oL:function(){return this.__oR(this.__oG,null);
},__oM:function(M){var N=this.__oG;

if(N==M){return this.__oK();
}
while(M&&M.getAnonymous()){M=M.getLayoutParent();
}
if(M==null){return [];
}var O=[];
this.__oO(N,M,O);
O.sort(this.__oJ);
var P=O.length;
return P>0?O[0]:this.__oK();
},__oN:function(Q){var R=this.__oG;

if(R==Q){return this.__oL();
}
while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();
}
if(Q==null){return [];
}var S=[];
this.__oP(R,Q,S);
S.sort(this.__oJ);
var T=S.length;
return T>0?S[T-1]:this.__oL();
},__oO:function(parent,U,V){var W=parent.getLayoutChildren();
var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
if(!(X instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__oJ(U,X)<0){V.push(X);
}this.__oO(X,U,V);
}}},__oP:function(parent,Y,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__oJ(Y,bc)>0){ba.push(bc);
}this.__oP(bc,Y,ba);
}}},__oQ:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__oJ(bf,bd)<0){bd=bf;
}}bd=this.__oQ(bf,bd);
}}return bd;
},__oR:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__oJ(bi,bg)>0){bg=bi;
}}bg=this.__oR(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(f);
this.__oF=this.__oE=this.__oG=null;
}});
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
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Environment.add(b,false);
qx.core.Setting.defineDeprecated(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Environment.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var k="scrollbar-y",j="scrollbar-x",i="pane",h="auto",g="corner",f="scrollbar-",d="on",c="_computeScrollbars",b="getDocument",a="changeVisibility",E="off",D="x",C="scroll",B="touchmove",A="scrollY",z="Left",y="mousewheel",x="scrollbarX",w="event.touch",v="scrollarea",r="y",s="vertical",p="scrollX",q="touchstart",n="horizontal",o="qx.ui.core.scroll.AbstractScrollArea",l="abstract",m="update",t="scrollbarY",u="Top";
qx.Class.define(o,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:l,construct:function(){qx.ui.core.Widget.call(this);
var F=new qx.ui.layout.Grid();
F.setColumnFlex(0,1);
F.setRowFlex(0,1);
this._setLayout(F);
this.addListener(y,this._onMouseWheel,this);
if(qx.core.Environment.get(w)){this.addListener(B,this._onTouchMove,this);
this.addListener(q,function(){this.__kA={"x":0,"y":0};
},this);
this.__kA={};
this.__kB={};
}},properties:{appearance:{refine:true,init:v},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[h,d,E],init:h,themeable:true,apply:c},scrollbarY:{check:[h,d,E],init:h,themeable:true,apply:c},scrollbar:{group:[x,t]}},members:{__kA:null,__kB:null,_createChildControlImpl:function(G,H){var I;

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
},_onMouseWheel:function(e){var V=this._isChildControlVisible(j);
var W=this._isChildControlVisible(k);
var U=(W)?this.getChildControl(k,true):(V?this.getChildControl(j,true):null);

if(U){var X=parseInt(e.getWheelDelta());
U.scrollBySteps(X);
var Y=U.getPosition();
var T=U.getMaximum();
if(X<0&&Y<=0||X>0&&Y>=T){return ;
}e.stop();
}},_onTouchMove:function(e){this._onTouchMoveDirectional(D,e);
this._onTouchMoveDirectional(r,e);
e.stop();
},_onTouchMoveDirectional:function(ba,e){var bb=(ba==D?z:u);
var bd=this.getChildControl(f+ba,true);
var be=this._isChildControlVisible(f+ba);

if(be&&bd){if(this.__kA[ba]==0){var bc=0;
}else{var bc=-(e[b+bb]()-this.__kA[ba]);
}this.__kA[ba]=e[b+bb]();
bd.scrollBy(bc);
if(this.__kB[ba]){clearTimeout(this.__kB[ba]);
this.__kB[ba]=null;
}this.__kB[ba]=setTimeout(qx.lang.Function.bind(function(bf){this.__kC(bf,ba);
},this,bc),100);
}},__kC:function(bg,bh){this.__kB[bh]=null;
var bj=this._isChildControlVisible(f+bh);

if(bg==0||!bj){return;
}if(bg>0){bg=Math.max(0,bg-3);
}else{bg=Math.min(0,bg+3);
}this.__kB[bh]=setTimeout(qx.lang.Function.bind(function(bk,bl){this.__kC(bk,bl);
},this,bg,bh),20);
var bi=this.getChildControl(f+bh,true);
bi.scrollBy(bg);
},_onChangeScrollbarXVisibility:function(e){var bm=this._isChildControlVisible(j);
var bn=this._isChildControlVisible(k);

if(!bm){this.scrollToX(0);
}bm&&bn?this._showChildControl(g):this._excludeChildControl(g);
},_onChangeScrollbarYVisibility:function(e){var bo=this._isChildControlVisible(j);
var bp=this._isChildControlVisible(k);

if(!bp){this.scrollToY(0);
}bo&&bp?this._showChildControl(g):this._excludeChildControl(g);
},_computeScrollbars:function(){var bw=this.getChildControl(i);
var content=bw.getChildren()[0];

if(!content){this._excludeChildControl(j);
this._excludeChildControl(k);
return;
}var bq=this.getInnerSize();
var bv=bw.getInnerSize();
var bt=bw.getScrollSize();
if(!bv||!bt){return;
}var bx=this.getScrollbarX();
var by=this.getScrollbarY();

if(bx===h&&by===h){var bu=bt.width>bq.width;
var bz=bt.height>bq.height;
if((bu||bz)&&!(bu&&bz)){if(bu){bz=bt.height>bv.height;
}else if(bz){bu=bt.width>bv.width;
}}}else{var bu=bx===d;
var bz=by===d;
if(bt.width>(bu?bv.width:bq.width)&&bx===h){bu=true;
}
if(bt.height>(bu?bv.height:bq.height)&&by===h){bz=true;
}}if(bu){var bs=this.getChildControl(j);
bs.show();
bs.setMaximum(Math.max(0,bt.width-bv.width));
bs.setKnobFactor((bt.width===0)?0:bv.width/bt.width);
}else{this._excludeChildControl(j);
}
if(bz){var br=this.getChildControl(k);
br.show();
br.setMaximum(Math.max(0,bt.height-bv.height));
br.setKnobFactor((bt.height===0)?0:bv.height/bt.height);
}else{this._excludeChildControl(k);
}}}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__kE:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__kF:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__kF[name];
s[t]();
}else{var u=this.__kE[name];
s[u](q);
}}}});
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
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="0",d="engine.name",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="mousemove",w="_applyMaximum",v="_applyOrientation",u="appear",t="opera",s="__lE",r="PositiveInteger",q="mshtml",o="mouseup",p="Number",m="_applyPosition",n="scrollbar",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if((qx.core.Environment.get(d)==t)){this.addListener(u,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[k,h],init:k,apply:v},maximum:{check:r,apply:w,init:100},position:{check:p,init:0,apply:m,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__lD:null,__lE:null,_getScrollPaneElement:function(){if(!this.__lE){this.__lE=new qx.html.Element();
}return this.__lE;
},renderLayout:function(B,top,C,D){var E=qx.ui.core.Widget.prototype.renderLayout.call(this,B,top,C,D);
this._updateScrollBar();
return E;
},_getContentHint:function(){var F=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__lD?100:F,maxWidth:this.__lD?null:F,minWidth:this.__lD?null:F,height:this.__lD?F:100,maxHeight:this.__lD?F:null,minHeight:this.__lD?F:null};
},_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);
this._updateScrollBar();
},_applyMaximum:function(I){this._updateScrollBar();
},_applyPosition:function(J){var content=this.getContentElement();

if(this.__lD){content.scrollToX(J);
}else{content.scrollToY(J);
}},_applyOrientation:function(K,L){var M=this.__lD=K===k;
this.set({allowGrowX:M,allowShrinkX:M,allowGrowY:!M,allowShrinkY:!M});

if(M){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:M?i:c,overflowY:M?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var O=this.__lD;
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
var V=this.__lD?W.getScrollX():W.getScrollY();
this.setPosition(V);
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
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,h],init:j,apply:r},maximum:{check:o,apply:l,init:100},position:{check:w,init:0,apply:m,event:p},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:q},knobFactor:{check:y,apply:v,nullable:true}},members:{__uy:2,_createChildControlImpl:function(B,C){var D;

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

if(this.getOrientation()==h){if(R.height<S.minHeight+this.__uy){Q=true;
}}else{if(R.width<S.minWidth+this.__uy){Q=true;
}}
if(Q){P.exclude();
}else{P.show();
}}}});
})();
(function(){var l="qx.dynlocale",k="Boolean",j="changeLocale",i="changeInvalidMessage",h="String",g="invalid",f="",d="qx.ui.form.MForm",c="_applyValid",b="changeRequired",a="changeValid";
qx.Mixin.define(d,{construct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().addListener(j,this.__kD,this);
}},properties:{valid:{check:k,init:true,apply:c,event:a},required:{check:k,init:false,event:b},invalidMessage:{check:h,init:f,event:i},requiredInvalidMessage:{check:h,nullable:true,event:i}},members:{_applyValid:function(m,n){m?this.removeState(g):this.addState(g);
},__kD:qx.core.Environment.select(l,{"true":function(e){var o=this.getInvalidMessage();

if(o&&o.translate){this.setInvalidMessage(o.translate());
}var p=this.getRequiredInvalidMessage();

if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());
}},"false":null})},destruct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().removeListener(j,this.__kD,this);
}}});
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
(function(){var k="knob",j="horizontal",i="vertical",h="Integer",g="hovered",f="left",d="top",c="mouseup",b="pressed",a="px",V="changeValue",U="interval",T="mousemove",S="resize",R="slider",Q="mousedown",P="PageUp",O="mouseout",N='qx.event.type.Data',M="Left",r="Down",s="Up",p="dblclick",q="qx.ui.form.Slider",n="PageDown",o="mousewheel",l="_applyValue",m="_applyKnobFactor",t="End",u="height",B="Right",z="width",F="_applyOrientation",D="Home",I="mouseover",H="floor",w="_applyMinimum",L="click",K="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",J="keypress",v="ceil",x="losecapture",y="contextmenu",A="_applyMaximum",C="Number",E="changeMaximum",G="changeMinimum";
qx.Class.define(q,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(W){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(J,this._onKeyPress);
this.addListener(o,this._onMouseWheel);
this.addListener(Q,this._onMouseDown);
this.addListener(c,this._onMouseUp);
this.addListener(x,this._onMouseUp);
this.addListener(S,this._onUpdate);
this.addListener(y,this._onStopEvent);
this.addListener(L,this._onStopEvent);
this.addListener(p,this._onStopEvent);
if(W!=null){this.setOrientation(W);
}else{this.initOrientation();
}},events:{changeValue:N},properties:{appearance:{refine:true,init:R},focusable:{refine:true,init:true},orientation:{check:[j,i],init:j,apply:F},value:{check:K,init:0,apply:l,nullable:true},minimum:{check:h,init:0,apply:w,event:G},maximum:{check:h,init:100,apply:A,event:E},singleStep:{check:h,init:1},pageStep:{check:h,init:10},knobFactor:{check:C,apply:m,nullable:true}},members:{__uj:null,__uk:null,__ul:null,__um:null,__un:null,__uo:null,__up:null,__uq:null,__ur:null,__us:null,__ut:null,__uu:null,_forwardStates:{invalid:true},_createChildControlImpl:function(X,Y){var ba;

switch(X){case k:ba=new qx.ui.core.Widget();
ba.addListener(S,this._onUpdate,this);
ba.addListener(I,this._onMouseOver);
ba.addListener(O,this._onMouseOut);
this._add(ba);
break;
}return ba||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,X);
},_onMouseOver:function(e){this.addState(g);
},_onMouseOut:function(e){this.removeState(g);
},_onMouseWheel:function(e){var bb=e.getWheelDelta()>0?1:-1;
this.slideBy(bb*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bd=this.getOrientation()===j;
var bc=bd?M:s;
var forward=bd?B:r;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bc:this.slideBack();
break;
case n:this.slidePageForward();
break;
case P:this.slidePageBack();
break;
case D:this.slideToBegin();
break;
case t:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__um){return;
}var bg=this.__uw;
var be=this.getChildControl(k);
var bf=bg?f:d;
var bi=bg?e.getDocumentLeft():e.getDocumentTop();
var bj=this.__uj=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bf];
var bh=this.__uk=qx.bom.element.Location.get(be.getContainerElement().getDomElement())[bf];

if(e.getTarget()===be){this.__um=true;

if(!this.__us){this.__us=new qx.event.Timer(100);
this.__us.addListener(U,this._fireValue,this);
}this.__us.start();
this.__un=bi+bj-bh;
be.addState(b);
}else{this.__uo=true;
this.__up=bi<=bh?-1:1;
this.__ux(e);
this._onInterval();
if(!this.__ur){this.__ur=new qx.event.Timer(100);
this.__ur.addListener(U,this._onInterval,this);
}this.__ur.start();
}this.addListener(T,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__um){this.releaseCapture();
delete this.__um;
this.__us.stop();
this._fireValue();
delete this.__un;
this.getChildControl(k).removeState(b);
if(e.getType()===c){var bl;
var bm;
var bk;

if(this.__uw){bl=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__uj);
bk=qx.bom.element.Location.get(this.getContentElement().getDomElement())[d];
bm=e.getDocumentTop()-(bk+this.getChildControl(k).getBounds().top);
}else{bl=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__uj);
bk=qx.bom.element.Location.get(this.getContentElement().getDomElement())[f];
bm=e.getDocumentLeft()-(bk+this.getChildControl(k).getBounds().left);
}
if(bm<0||bm>this.__ul||bl<0||bl>this.__ul){this.getChildControl(k).removeState(g);
}}}else if(this.__uo){this.__ur.stop();
this.releaseCapture();
delete this.__uo;
delete this.__up;
delete this.__uq;
}this.removeListener(T,this._onMouseMove);
if(e.getType()===c){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__um){var bo=this.__uw?e.getDocumentLeft():e.getDocumentTop();
var bn=bo-this.__un;
this.slideTo(this._positionToValue(bn));
}else if(this.__uo){this.__ux(e);
}e.stopPropagation();
},_onInterval:function(e){var bp=this.getValue()+(this.__up*this.getPageStep());
if(bp<this.getMinimum()){bp=this.getMinimum();
}else if(bp>this.getMaximum()){bp=this.getMaximum();
}var bq=this.__up==-1;

if((bq&&bp<=this.__uq)||(!bq&&bp>=this.__uq)){bp=this.__uq;
}this.slideTo(bp);
},_onUpdate:function(e){var bs=this.getInnerSize();
var bt=this.getChildControl(k).getBounds();
var br=this.__uw?z:u;
this._updateKnobSize();
this.__uv=bs[br]-bt[br];
this.__ul=bt[br];
this._updateKnobPosition();
},__uw:false,__uv:0,__ux:function(e){var bu=this.__uw;
var bB=bu?e.getDocumentLeft():e.getDocumentTop();
var bD=this.__uj;
var bv=this.__uk;
var bF=this.__ul;
var bC=bB-bD;

if(bB>=bv){bC-=bF;
}var bz=this._positionToValue(bC);
var bw=this.getMinimum();
var bx=this.getMaximum();

if(bz<bw){bz=bw;
}else if(bz>bx){bz=bx;
}else{var bA=this.getValue();
var by=this.getPageStep();
var bE=this.__up<0?H:v;
bz=bA+(Math[bE]((bz-bA)/by)*by);
}if(this.__uq==null||(this.__up==-1&&bz<=this.__uq)||(this.__up==1&&bz>=this.__uq)){this.__uq=bz;
}},_positionToValue:function(bG){var bH=this.__uv;
if(bH==null||bH==0){return 0;
}var bJ=bG/bH;

if(bJ<0){bJ=0;
}else if(bJ>1){bJ=1;
}var bI=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bI*bJ);
},_valueToPosition:function(bK){var bL=this.__uv;

if(bL==null){return 0;
}var bM=this.getMaximum()-this.getMinimum();
if(bM==0){return 0;
}var bK=bK-this.getMinimum();
var bN=bK/bM;

if(bN<0){bN=0;
}else if(bN>1){bN=1;
}return Math.round(bL*bN);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bO){var bP=this.getChildControl(k).getContainerElement();

if(this.__uw){bP.setStyle(f,bO+a,true);
}else{bP.setStyle(d,bO+a,true);
}},_updateKnobSize:function(){var bR=this.getKnobFactor();

if(bR==null){return;
}var bQ=this.getInnerSize();

if(bQ==null){return;
}if(this.__uw){this.getChildControl(k).setWidth(Math.round(bR*bQ.width));
}else{this.getChildControl(k).setHeight(Math.round(bR*bQ.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bS){this.slideTo(this.getValue()+bS);
},slideTo:function(bT){if(bT<this.getMinimum()){bT=this.getMinimum();
}else if(bT>this.getMaximum()){bT=this.getMaximum();
}else{bT=this.getMinimum()+Math.round((bT-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bT);
},_applyOrientation:function(bU,bV){var bW=this.getChildControl(k);
this.__uw=bU===j;
if(this.__uw){this.removeState(i);
bW.removeState(i);
this.addState(j);
bW.addState(j);
bW.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(j);
bW.removeState(j);
this.addState(i);
bW.addState(i);
bW.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bX,bY){if(bX!=null){this._updateKnobSize();
}else{if(this.__uw){this.getChildControl(k).resetWidth();
}else{this.getChildControl(k).resetHeight();
}}},_applyValue:function(ca,cb){if(ca!=null){this._updateKnobPosition();

if(this.__um){this.__uu=[ca,cb];
}else{this.fireEvent(V,qx.event.type.Data,[ca,cb]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__uu){return;
}var cc=this.__uu;
this.__uu=null;
this.fireEvent(V,qx.event.type.Data,cc);
},_applyMinimum:function(cd,ce){if(this.getValue()<cd){this.setValue(cd);
}this._updateKnobPosition();
},_applyMaximum:function(cf,cg){if(this.getValue()>cf){this.setValue(cf);
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
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__lw:null,__lx:false,__ly:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__lx){this.__lx=false;
}else{this.__lx=true;
o.execute(this);
}}this.fireEvent(n);
},__lz:function(e){if(this.__lx){this.__lx=false;
return;
}this.__lx=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__ly);
}
if(p!=null){this.__ly=p.addListener(n,this.__lz,this);
}var t=this.__lw;

if(t==null){this.__lw=t={};
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
this.__lw=null;
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="__oU",d="qx.ui.form.RepeatButton",a="release",c="interval",b="execute";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__oU=new qx.event.AcceleratingTimer();
this.__oU.addListener(c,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__oV:null,__oU:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__oW();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__oV){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__oX();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__oX();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__oU.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__oU.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__oW();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__oV){this.execute();
}}this.__oX();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__oV){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__oX();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__oW();
}},_onInterval:function(e){this.__oV=true;
this.fireEvent(b);
},__oW:function(){this.fireEvent(g);
this.__oV=false;
this.__oU.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__oX:function(){this.fireEvent(a);
this.__oU.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var e="Integer",d="interval",c="__oY",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oY=new qx.event.Timer(this.getInterval());
this.__oY.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__oY:null,__pa:null,start:function(){this.__oY.setInterval(this.getFirstInterval());
this.__oY.start();
},stop:function(){this.__oY.stop();
this.__pa=null;
},_onInterval:function(){this.__oY.stop();

if(this.__pa==null){this.__pa=this.getInterval();
}this.__pa=Math.max(this.getMinimum(),this.__pa-this.getDecrease());
this.__oY.setInterval(this.__pa);
this.__oY.start();
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
}},properties:{alignX:{check:[r,p,b],init:r,apply:s},alignY:{check:[o,m,h],init:o,apply:s},spacing:{check:a,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:g,init:false,apply:k}},members:{__kT:null,__kU:null,__kV:null,__kW:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kX:function(){var B=this._getLayoutChildren();
var length=B.length;
var y=false;
var w=this.__kT&&this.__kT.length!=length&&this.__kU&&this.__kT;
var z;
var x=w?this.__kT:new Array(length);
var A=w?this.__kU:new Array(length);
if(this.getReversed()){B=B.concat().reverse();
}for(var i=0;i<length;i++){z=B[i].getLayoutProperties();

if(z.width!=null){x[i]=parseFloat(z.width)/100;
}
if(z.flex!=null){A[i]=z.flex;
y=true;
}else{A[i]=0;
}}if(!w){this.__kT=x;
this.__kU=A;
}this.__kV=y;
this.__kW=B;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Environment.select(j,{"true":function(C,name,D){this.assert(name===f||name===q,e+name+c);

if(name==q){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(D);
this.assert(D>=0);
}},"false":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__kX();
}var L=this.__kW;
var length=L.length;
var U=qx.ui.layout.Util;
var T=this.getSpacing();
var X=this.getSeparator();

if(X){var I=U.computeHorizontalSeparatorGaps(L,T,X);
}else{var I=U.computeHorizontalGaps(L,T,true);
}var i,G,R,Q;
var W=[];
var M=I;

for(i=0;i<length;i+=1){Q=this.__kT[i];
R=Q!=null?Math.floor((E-I)*Q):L[i].getSizeHint().width;
W.push(R);
M+=R;
}if(this.__kV&&M!=E){var O={};
var S,V;

for(i=0;i<length;i+=1){S=this.__kU[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kX();
}var bj=qx.ui.layout.Util;
var br=this.__kW;
var bd=0,bk=0,bh=0;
var bg=0,bi=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bk+=be.width;
var bn=this.__kU[i];
var bf=this.__kT[i];

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
}},destruct:function(){this.__kT=this.__kU=this.__kW=null;
}});
})();
(function(){var s="_applyLayoutChange",r="top",q="left",p="height",o="middle",n="Decorator",m="center",k="_applyReversed",j="qx.debug",h="bottom",c="' is not supported by the VBox layout!",g="qx.ui.layout.VBox",f="flex",b="Integer",a="The property '",e="right",d="Boolean";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);

if(t){this.setSpacing(t);
}
if(u){this.setAlignY(u);
}
if(v){this.setSeparator(v);
}},properties:{alignY:{check:[r,o,h],init:r,apply:s},alignX:{check:[q,m,e],init:q,apply:s},spacing:{check:b,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:d,init:false,apply:k}},members:{__jR:null,__jS:null,__jT:null,__jU:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jV:function(){var B=this._getLayoutChildren();
var length=B.length;
var x=false;
var w=this.__jR&&this.__jR.length!=length&&this.__jS&&this.__jR;
var z;
var y=w?this.__jR:new Array(length);
var A=w?this.__jS:new Array(length);
if(this.getReversed()){B=B.concat().reverse();
}for(var i=0;i<length;i++){z=B[i].getLayoutProperties();

if(z.height!=null){y[i]=parseFloat(z.height)/100;
}
if(z.flex!=null){A[i]=z.flex;
x=true;
}else{A[i]=0;
}}if(!w){this.__jR=y;
this.__jS=A;
}this.__jT=x;
this.__jU=B;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Environment.select(j,{"true":function(C,name,D){this.assert(name===f||name===p,a+name+c);

if(name==p){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(D);
this.assert(D>=0);
}},"false":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__jV();
}var M=this.__jU;
var length=M.length;
var W=qx.ui.layout.Util;
var V=this.getSpacing();
var ba=this.getSeparator();

if(ba){var J=W.computeVerticalSeparatorGaps(M,V,ba);
}else{var J=W.computeVerticalGaps(M,V,true);
}var i,H,I,Q;
var R=[];
var X=J;

for(i=0;i<length;i+=1){Q=this.__jR[i];
I=Q!=null?Math.floor((F-J)*Q):M[i].getSizeHint().height;
R.push(I);
X+=I;
}if(this.__jT&&X!=F){var O={};
var U,Y;

for(i=0;i<length;i+=1){U=this.__jS[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jV();
}var bj=qx.ui.layout.Util;
var br=this.__jU;
var bf=0,bi=0,bh=0;
var bd=0,bk=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bi+=be.height;
var bn=this.__jS[i];
var bg=this.__jR[i];

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
}},destruct:function(){this.__jR=this.__jS=this.__jU=null;
}});
})();
(function(){var n="top",m="left",h="qx.debug",g="bottom",f="hAlign",e="vAlign",d="Integer",c="_applyLayoutChange",b="center",a="middle",D="right",C="flex",B="height",A="' is not supported by the Grid layout!",z="Invalid parameter 'column'",w="The property '",v="Value must be positive",u="qx.ui.layout.Grid",t="maxHeight",s="width",q="minHeight",r="minWidth",o="maxWidth",p="Invalid parameter 'row'";
qx.Class.define(u,{extend:qx.ui.layout.Abstract,construct:function(E,F){qx.ui.layout.Abstract.call(this);
this.__lF=[];
this.__lG=[];

if(E){this.setSpacingX(E);
}
if(F){this.setSpacingY(F);
}},properties:{spacingX:{check:d,init:0,apply:c},spacingY:{check:d,init:0,apply:c}},members:{__lH:null,__lF:null,__lG:null,__lI:null,__lJ:null,__lK:null,__lL:null,__lM:null,__lN:null,verifyLayoutProperty:qx.core.Environment.select(h,{"true":function(G,name,H){var I={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(I[name]==1,w+name+A);
this.assertInteger(H);
this.assert(H>=0,v);
},"false":null}),__lO:function(){var O=[];
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
}}this.__lH=O;
this.__lI=N;
this.__lJ=P;
this.__lK=L;
this.__lL=K;
this.__lM=null;
this.__lN=null;
delete this._invalidChildrenCache;
},_setRowData:function(T,U,V){var W=this.__lF[T];

if(!W){this.__lF[T]={};
this.__lF[T][U]=V;
}else{W[U]=V;
}},_setColumnData:function(X,Y,ba){var bb=this.__lG[X];

if(!bb){this.__lG[X]={};
this.__lG[X][Y]=ba;
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
},getColumnAlign:function(bg){var bh=this.__lG[bg]||{};
return {vAlign:bh.vAlign||n,hAlign:bh.hAlign||m};
},setRowAlign:function(bi,bj,bk){if(qx.core.Environment.get(h)){this.assertInteger(bi,p);
this.assertInArray(bj,[m,b,D]);
this.assertInArray(bk,[n,a,g]);
}this._setRowData(bi,f,bj);
this._setRowData(bi,e,bk);
this._applyLayoutChange();
return this;
},getRowAlign:function(bl){var bm=this.__lF[bl]||{};
return {vAlign:bm.vAlign||n,hAlign:bm.hAlign||m};
},getCellWidget:function(bn,bo){if(this._invalidChildrenCache){this.__lO();
}var bn=this.__lH[bn]||{};
return bn[bo]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__lO();
}return this.__lK+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__lO();
}return this.__lL+1;
},getCellAlign:function(bp,bq){var bw=n;
var bu=m;
var bv=this.__lF[bp];
var bs=this.__lG[bq];
var br=this.__lH[bp][bq];

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
},getColumnFlex:function(bz){var bA=this.__lG[bz]||{};
return bA.flex!==undefined?bA.flex:0;
},setRowFlex:function(bB,bC){this._setRowData(bB,C,bC);
this._applyLayoutChange();
return this;
},getRowFlex:function(bD){var bE=this.__lF[bD]||{};
var bF=bE.flex!==undefined?bE.flex:0;
return bF;
},setColumnMaxWidth:function(bG,bH){this._setColumnData(bG,o,bH);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bI){var bJ=this.__lG[bI]||{};
return bJ.maxWidth!==undefined?bJ.maxWidth:Infinity;
},setColumnWidth:function(bK,bL){this._setColumnData(bK,s,bL);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bM){var bN=this.__lG[bM]||{};
return bN.width!==undefined?bN.width:null;
},setColumnMinWidth:function(bO,bP){this._setColumnData(bO,r,bP);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bQ){var bR=this.__lG[bQ]||{};
return bR.minWidth||0;
},setRowMaxHeight:function(bS,bT){this._setRowData(bS,t,bT);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bU){var bV=this.__lF[bU]||{};
return bV.maxHeight||Infinity;
},setRowHeight:function(bW,bX){this._setRowData(bW,B,bX);
this._applyLayoutChange();
return this;
},getRowHeight:function(bY){var ca=this.__lF[bY]||{};
return ca.height!==undefined?ca.height:null;
},setRowMinHeight:function(cb,cc){this._setRowData(cb,q,cc);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(cd){var ce=this.__lF[cd]||{};
return ce.minHeight||0;
},__lP:function(cf){var cj=cf.getSizeHint();
var ci=cf.getMarginLeft()+cf.getMarginRight();
var ch=cf.getMarginTop()+cf.getMarginBottom();
var cg={height:cj.height+ch,width:cj.width+ci,minHeight:cj.minHeight+ch,minWidth:cj.minWidth+ci,maxHeight:cj.maxHeight+ch,maxWidth:cj.maxWidth+ci};
return cg;
},_fixHeightsRowSpan:function(ck){var cr=this.getSpacingY();

for(var i=0,l=this.__lJ.length;i<l;i++){var cy=this.__lJ[i];
var cu=this.__lP(cy);
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

for(var i=0,l=this.__lI.length;i<l;i++){var cG=this.__lI[i];
var cI=this.__lP(cG);
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
}}}},_getRowHeights:function(){if(this.__lM!=null){return this.__lM;
}var dd=[];
var cV=this.__lK;
var cU=this.__lL;

for(var de=0;de<=cV;de++){var cW=0;
var cY=0;
var cX=0;

for(var dc=0;dc<=cU;dc++){var cT=this.__lH[de][dc];

if(!cT){continue;
}var da=cT.getLayoutProperties().rowSpan||0;

if(da>1){continue;
}var db=this.__lP(cT);

if(this.getRowFlex(de)>0){cW=Math.max(cW,db.minHeight);
}else{cW=Math.max(cW,db.height);
}cY=Math.max(cY,db.height);
}var cW=Math.max(cW,this.getRowMinHeight(de));
var cX=this.getRowMaxHeight(de);

if(this.getRowHeight(de)!==null){var cY=this.getRowHeight(de);
}else{var cY=Math.max(cW,Math.min(cY,cX));
}dd[de]={minHeight:cW,height:cY,maxHeight:cX};
}
if(this.__lJ.length>0){this._fixHeightsRowSpan(dd);
}this.__lM=dd;
return dd;
},_getColWidths:function(){if(this.__lN!=null){return this.__lN;
}var dj=[];
var dg=this.__lL;
var di=this.__lK;

for(var dp=0;dp<=dg;dp++){var dm=0;
var dl=0;
var dh=Infinity;

for(var dq=0;dq<=di;dq++){var df=this.__lH[dq][dp];

if(!df){continue;
}var dk=df.getLayoutProperties().colSpan||0;

if(dk>1){continue;
}var dn=this.__lP(df);

if(this.getColumnFlex(dp)>0){dl=Math.max(dl,dn.minWidth);
}else{dl=Math.max(dl,dn.width);
}dm=Math.max(dm,dn.width);
}var dl=Math.max(dl,this.getColumnMinWidth(dp));
var dh=this.getColumnMaxWidth(dp);

if(this.getColumnWidth(dp)!==null){var dm=this.getColumnWidth(dp);
}else{var dm=Math.max(dl,Math.min(dm,dh));
}dj[dp]={minWidth:dl,width:dm,maxWidth:dh};
}
if(this.__lI.length>0){this._fixWidthsColSpan(dj);
}this.__lN=dj;
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
},renderLayout:function(dF,dG){if(this._invalidChildrenCache){this.__lO();
}var dU=qx.ui.layout.Util;
var dI=this.getSpacingX();
var dO=this.getSpacingY();
var ea=this._getColWidths();
var dY=this._getColumnFlexOffsets(dF);
var dJ=[];
var ec=this.__lL;
var dH=this.__lK;
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

for(var dP=0;dP<=dH;dP++){var dW=this.__lH[dP][ed];
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
this.__lN=null;
this.__lM=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lO();
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
}},destruct:function(){this.__lH=this.__lF=this.__lG=this.__lI=this.__lJ=this.__lN=this.__lM=null;
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
(function(){var k="slider",j="splitter",i="horizontal",h="px",g="vertical",f="knob",d="mousedown",c="mouseout",b="Integer",a="height",D="mousemove",C="move",B="maxHeight",A="resize",z="width",w="_applyOrientation",v="_applyOffset",u="splitpane",t="qx.ui.splitpane.Pane",s="top",q="minHeight",r="mouseup",o="minWidth",p="appear",m="losecapture",n="left",l="maxWidth";
qx.Class.define(t,{extend:qx.ui.core.Widget,construct:function(E){qx.ui.core.Widget.call(this);
this.__sr=[];
if(E){this.setOrientation(E);
}else{this.initOrientation();
}this.__sz.addListener(d,this._onMouseDown,this);
this.__sz.addListener(r,this._onMouseUp,this);
this.__sz.addListener(D,this._onMouseMove,this);
this.__sz.addListener(c,this._onMouseOut,this);
this.__sz.addListener(m,this._onMouseUp,this);
},properties:{appearance:{refine:true,init:u},offset:{check:b,init:6,apply:v},orientation:{init:i,check:[i,g],apply:w}},members:{__ss:null,__st:false,__su:null,__sv:null,__sw:null,__sx:null,__sy:null,__sr:null,__sz:null,_createChildControlImpl:function(F,G){var H;

switch(F){case k:H=new qx.ui.splitpane.Slider(this);
H.exclude();
this._add(H,{type:F});
break;
case j:H=new qx.ui.splitpane.Splitter(this);
this._add(H,{type:F});
H.addListener(C,this.__sA,this);
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},__sA:function(e){this.__sC(e.getData());
},__sB:function(I){this.__sz=new qx.ui.splitpane.Blocker(I);
this.getContentElement().add(this.__sz);
var J=this.getChildControl(j);
var K=J.getWidth();

if(!K){J.addListenerOnce(p,function(){this.__sC();
},this);
}J.addListener(A,function(e){var L=e.getData();

if(L.height==0||L.width==0){this.__sz.hide();
}else{this.__sz.show();
}},this);
},getBlocker:function(){return this.__sz;
},_applyOrientation:function(M,N){var O=this.getChildControl(k);
var R=this.getChildControl(j);
this.__sw=M===i;

if(!this.__sz){this.__sB(M);
}this.__sz.setOrientation(M);
var Q=this._getLayout();

if(Q){Q.dispose();
}var P=M===g?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(P);
R.removeState(N);
R.addState(M);
R.getChildControl(f).removeState(N);
R.getChildControl(f).addState(M);
O.removeState(N);
O.addState(M);
qx.ui.core.queue.Manager.flush();
this.__sC();
},_applyOffset:function(S,T){this.__sC();
},__sC:function(U){var V=this.getChildControl(j);
var ba=this.getOffset();
var bb=V.getBounds();
var Y=V.getContainerElement().getDomElement();
if(!Y){return;
}if(this.__sw){var X=null;

if(U){X=U.width;
}else if(bb){X=bb.width;
}var bc=U&&U.left;

if(X){if(isNaN(bc)){bc=qx.bom.element.Location.getPosition(Y).left;
}this.__sz.setWidth(ba,X);
this.__sz.setLeft(ba,bc);
}}else{var W=null;

if(U){W=U.height;
}else if(bb){W=bb.height;
}var top=U&&U.top;

if(W){if(isNaN(top)){top=qx.bom.element.Location.getPosition(Y).top;
}this.__sz.setHeight(ba,W);
this.__sz.setTop(ba,top);
}}},add:function(bd,be){if(be==null){this._add(bd);
}else{this._add(bd,{flex:be});
}this.__sr.push(bd);
},remove:function(bf){this._remove(bf);
qx.lang.Array.remove(this.__sr,bf);
},getChildren:function(){return this.__sr;
},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}var bg=this.getChildControl(j);
var bi=bg.getContainerLocation();
var bh=this.getContentLocation();
this.__ss=this.__sw?e.getDocumentLeft()-bi.left+bh.left:e.getDocumentTop()-bi.top+bh.top;
var bk=this.getChildControl(k);
var bj=bg.getBounds();
bk.setUserBounds(bj.left,bj.top,bj.width,bj.height);
bk.setZIndex(bg.getZIndex()+1);
bk.show();
this.__st=true;
this.__sz.capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__st){this.__sD();
var bl=this.getChildControl(k);
var bm=this.__sx;

if(this.__sw){bl.setDomLeft(bm);
this.__sz.setStyle(n,(bm-this.getOffset())+h);
}else{bl.setDomTop(bm);
this.__sz.setStyle(s,(bm-this.getOffset())+h);
}e.stop();
}},_onMouseOut:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
},_onMouseUp:function(e){if(!this.__st){return;
}this._finalizeSizes();
var bn=this.getChildControl(k);
bn.exclude();
this.__st=false;
this.releaseCapture();
e.stop();
},_finalizeSizes:function(){var br=this.__sx;
var bo=this.__sy;

if(br==null){return;
}var bt=this._getChildren();
var bs=bt[2];
var bp=bt[3];
var bq=bs.getLayoutProperties().flex;
var bu=bp.getLayoutProperties().flex;
if((bq!=0)&&(bu!=0)){bs.setLayoutProperties({flex:br});
bp.setLayoutProperties({flex:bo});
}else{if(this.__sw){bs.setWidth(br);
bp.setWidth(bo);
}else{bs.setHeight(br);
bp.setHeight(bo);
}}},__sD:function(){if(this.__sw){var bx=o,bE=z,by=l,bC=this.__su;
}else{var bx=q,bE=a,by=B,bC=this.__sv;
}var bD=this._getChildren();
var bv=bD[2].getSizeHint();
var bA=bD[3].getSizeHint();
var bB=bD[2].getBounds()[bE]+bD[3].getBounds()[bE];
var bz=bC-this.__ss;
var bw=bB-bz;
if(bz<bv[bx]){bw-=bv[bx]-bz;
bz=bv[bx];
}else if(bw<bA[bx]){bz-=bA[bx]-bw;
bw=bA[bx];
}if(bz>bv[by]){bw+=bz-bv[by];
bz=bv[by];
}else if(bw>bA[by]){bz+=bw-bA[by];
bw=bA[by];
}this.__sx=bz;
this.__sy=bw;
},_isActiveDragSession:function(){return this.__st;
},_setLastMousePosition:function(x,y){this.__su=x;
this.__sv=y;
}},destruct:function(){this.__sr=null;
}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
if(f.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(g,h){var i;

switch(g){case d:i=new qx.ui.basic.Image;
this._add(i);
break;
}return i||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var u="px",t="horizontal",s="top",r="height",q="width",p="100%",o="left",n="cursor",m="mshtml",l="engine.name",e="repeat",k="_applyOrientation",h="url(",c="qx.ui.splitpane.Blocker",b=")",g="col-resize",f="row-resize",i="div",a="vertical",j="qx/static/blank.gif",d="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(v){var w={position:d,zIndex:11};
if((qx.core.Environment.get(l)==m)){w.backgroundImage=h+qx.util.ResourceManager.getInstance().toUri(j)+b;
w.backgroundRepeat=e;
}qx.html.Element.call(this,i,w);
if(v){this.setOrientation(v);
}else{this.initOrientation();
}},properties:{orientation:{init:t,check:[t,a],apply:k}},members:{_applyOrientation:function(x,y){if(x==t){this.setStyle(r,p);
this.setStyle(n,g);
this.setStyle(s,null);
}else{this.setStyle(q,p);
this.setStyle(o,null);
this.setStyle(n,f);
}},setWidth:function(z,A){var B=A+2*z;
this.setStyle(q,B+u);
},setHeight:function(C,D){var E=D+2*C;
this.setStyle(r,E+u);
},setLeft:function(F,G){var H=G-F;
this.setStyle(o,H+u);
},setTop:function(I,J){var top=J-I;
this.setStyle(s,top+u);
}}});
})();
(function(){var h="slider",g="type",f="flex",e="splitter",d="qx.ui.splitpane.VLayout",c="qx.debug",b="' is not supported by the split layout!",a="The property '";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Environment.select(c,{"true":function(j,name,k){this.assert(name===g||name===f,a+name+b);

if(name==f){this.assertNumber(k);
}
if(name==g){this.assertString(k);
}},"false":null}),renderLayout:function(l,m){var C=this._getLayoutChildren();
var length=C.length;
var y,B;
var o,n,w,p;

for(var i=0;i<length;i++){y=C[i];
B=y.getLayoutProperties().type;

if(B===e){n=y;
}else if(B===h){w=y;
}else if(!o){o=y;
}else{p=y;
}}
if(o&&p){var E=o.getLayoutProperties().flex;
var r=p.getLayoutProperties().flex;

if(E==null){E=1;
}
if(r==null){r=1;
}var D=o.getSizeHint();
var u=n.getSizeHint();
var v=p.getSizeHint();
var q=D.height;
var z=u.height;
var A=v.height;

if(E>0&&r>0){var s=E+r;
var t=m-z;
var q=Math.round((t/s)*E);
var A=t-q;
var x=qx.ui.layout.Util.arrangeIdeals(D.minHeight,q,D.maxHeight,v.minHeight,A,v.maxHeight);
q=x.begin;
A=x.end;
}else if(E>0){q=m-z-A;

if(q<D.minHeight){q=D.minHeight;
}
if(q>D.maxHeight){q=D.maxHeight;
}}else if(r>0){A=m-q-z;

if(A<v.minHeight){A=v.minHeight;
}
if(A>v.maxHeight){A=v.maxHeight;
}}o.renderLayout(0,0,l,q);
n.renderLayout(0,q,l,z);
p.renderLayout(0,q+z,l,A);
}else{n.renderLayout(0,0,0,0);
if(o){o.renderLayout(0,0,l,m);
}else if(p){p.renderLayout(0,0,l,m);
}}},_computeSizeHint:function(){var O=this._getLayoutChildren();
var length=O.length;
var H,G,N;
var I=0,K=0,J=0;
var L=0,M=0,F=0;

for(var i=0;i<length;i++){H=O[i];
N=H.getLayoutProperties();
if(N.type===h){continue;
}G=H.getSizeHint();
I+=G.minHeight;
K+=G.height;
J+=G.maxHeight;

if(G.minWidth>L){L=G.minWidth;
}
if(G.width>M){M=G.width;
}
if(G.maxWidth>F){F=G.maxWidth;
}}return {minHeight:I,height:K,maxHeight:J,minWidth:L,width:M,maxWidth:F};
}}});
})();
(function(){var h="slider",g="type",f="flex",e="splitter",d="qx.ui.splitpane.HLayout",c="' is not supported by the split layout!",b="The property '",a="qx.debug";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Environment.select(a,{"true":function(j,name,k){this.assert(name===g||name===f,b+name+c);

if(name==f){this.assertNumber(k);
}
if(name==g){this.assertString(k);
}},"false":null}),renderLayout:function(l,m){var C=this._getLayoutChildren();
var length=C.length;
var z,B;
var o,n,w,p;

for(var i=0;i<length;i++){z=C[i];
B=z.getLayoutProperties().type;

if(B===e){n=z;
}else if(B===h){w=z;
}else if(!o){o=z;
}else{p=z;
}}
if(o&&p){var E=o.getLayoutProperties().flex;
var q=p.getLayoutProperties().flex;

if(E==null){E=1;
}
if(q==null){q=1;
}var D=o.getSizeHint();
var t=n.getSizeHint();
var v=p.getSizeHint();
var A=D.width;
var y=t.width;
var x=v.width;

if(E>0&&q>0){var r=E+q;
var s=l-y;
var A=Math.round((s/r)*E);
var x=s-A;
var u=qx.ui.layout.Util.arrangeIdeals(D.minWidth,A,D.maxWidth,v.minWidth,x,v.maxWidth);
A=u.begin;
x=u.end;
}else if(E>0){A=l-y-x;

if(A<D.minWidth){A=D.minWidth;
}
if(A>D.maxWidth){A=D.maxWidth;
}}else if(q>0){x=l-A-y;

if(x<v.minWidth){x=v.minWidth;
}
if(x>v.maxWidth){x=v.maxWidth;
}}o.renderLayout(0,0,A,m);
n.renderLayout(A,0,y,m);
p.renderLayout(A+y,0,x,m);
}else{n.renderLayout(0,0,0,0);
if(o){o.renderLayout(0,0,l,m);
}else if(p){p.renderLayout(0,0,l,m);
}}},_computeSizeHint:function(){var O=this._getLayoutChildren();
var length=O.length;
var H,G,N;
var L=0,M=0,F=0;
var I=0,K=0,J=0;

for(var i=0;i<length;i++){H=O[i];
N=H.getLayoutProperties();
if(N.type===h){continue;
}G=H.getSizeHint();
L+=G.minWidth;
M+=G.width;
F+=G.maxWidth;

if(G.minHeight>I){I=G.minHeight;
}
if(G.height>K){K=G.height;
}
if(G.maxHeight>J){J=G.maxHeight;
}}return {minWidth:L,width:M,maxWidth:F,minHeight:I,height:K,maxHeight:J};
}}});
})();
(function(){var k="showingPlaceholder",j="",i="engine.name",h="none",g="qx.dynlocale",f="Boolean",d="color",c="qx.event.type.Data",b="readonly",a="placeholder",be="input",bd="focusin",bc="visibility",bb="gecko",ba="focusout",Y="changeLocale",X="hidden",W="absolute",V="readOnly",U="text",r="_applyTextAlign",s="px",p="RegExp",q=")",n="syncAppearance",o="changeValue",l="engine.version",m="A",v="change",w="textAlign",E="focused",C="center",L="visible",G="disabled",Q="url(",O="String",y="resize",T="qx.ui.form.AbstractField",S="transparent",R="spellcheck",x="false",A="right",B="PositiveInteger",D="abstract",F="block",H="css.placeholder",M="webkit",P="_applyReadOnly",t="_applyPlaceholder",u="left",z="off",K="mshtml",J="qx/static/blank.gif",I="text-placeholder",N="changeReadOnly";
qx.Class.define(T,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:D,construct:function(bf){qx.ui.core.Widget.call(this);
this.__lX=!qx.core.Environment.get(H)||(qx.core.Environment.get(i)==bb&&parseFloat(qx.core.Environment.get(l))>=2);

if(bf!=null){this.setValue(bf);
}this.getContentElement().addListener(v,this._onChangeContent,this);
if(this.__lX){this.addListener(n,this._syncPlaceholder,this);
}if(qx.core.Environment.get(g)){qx.locale.Manager.getInstance().addListener(Y,this._onChangeLocale,this);
}},events:{"input":c,"changeValue":c},properties:{textAlign:{check:[u,C,A],nullable:true,themeable:true,apply:r},readOnly:{check:f,apply:P,event:N,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:B,init:Infinity},liveUpdate:{check:f,init:false},placeholder:{check:O,nullable:true,apply:t},filter:{check:p,nullable:true,init:null}},members:{__lY:true,__ma:null,__mb:null,__mc:null,__lX:true,getFocusElement:function(){var bg=this.getContentElement();

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
if(bk&&this.__lX){this.__mf().setStyles({"left":bl.left+bp,"top":bl.top+bp});
}
if(bm){if(this.__lX){this.__mf().setStyles({"width":innerWidth+bp,"height":innerHeight+bp});
}bn.setStyles({"width":innerWidth+bp,"height":innerHeight+bp});
this._renderContentElement(innerHeight,bn);
}},_renderContentElement:function(innerHeight,bq){},_createContentElement:function(){var br=this._createInputElement();
br.setStyles({"border":h,"padding":0,"margin":0,"display":F,"background":S,"outline":h,"appearance":h,"position":W,"autoComplete":z});
br.setSelectable(this.getSelectable());
br.setEnabled(this.getEnabled());
br.addListener(be,this._onHtmlInput,this);
br.setAttribute(R,x);
if(qx.core.Environment.get(i)==M||qx.core.Environment.get(i)==bb){br.setStyle(y,h);
}if((qx.core.Environment.get(i)==K)){br.setStyles({backgroundImage:Q+qx.util.ResourceManager.getInstance().toUri(J)+q});
}return br;
},_applyEnabled:function(bs,bt){qx.ui.core.Widget.prototype._applyEnabled.call(this,bs,bt);
this.getContentElement().setEnabled(bs);

if(this.__lX){if(bs){this._showPlaceholder();
}else{this._removePlaceholder();
}}else{var bu=this.getContentElement();
bu.setAttribute(a,bs?this.getPlaceholder():j);
}},__md:{width:16,height:16},_getContentHint:function(){return {width:this.__md.width*10,height:this.__md.height||16};
},_applyFont:function(bv,bw){var bx;

if(bv){var by=qx.theme.manager.Font.getInstance().resolve(bv);
bx=by.getStyles();
}else{bx=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bx);
if(this.__lX){this.__mf().setStyles(bx);
}if(bv){this.__md=qx.bom.Label.getTextSize(m,bx);
}else{delete this.__md;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bz,bA){if(bz){this.getContentElement().setStyle(d,qx.theme.manager.Color.getInstance().resolve(bz));
}else{this.getContentElement().removeStyle(d);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__md;
},_onHtmlInput:function(e){var bE=e.getData();
var bD=true;
this.__lY=false;
if(this.getFilter()!=null){var bF=j;
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
}if(bD){this.fireDataEvent(be,bE,this.__mc);
this.__mc=bE;
if(this.getLiveUpdate()){this.__me(bE);
}}},__me:function(bG){var bH=this.__mb;
this.__mb=bG;

if(bH!=bG){this.fireNonBubblingEvent(o,qx.event.type.Data,[bG,bH]);
}},setValue:function(bI){if(bI===null){if(this.__lY){return bI;
}bI=j;
this.__lY=true;
}else{this.__lY=false;
if(this.__lX){this._removePlaceholder();
}}
if(qx.lang.Type.isString(bI)){var bK=this.getContentElement();

if(bI.length>this.getMaxLength()){bI=bI.substr(0,this.getMaxLength());
}
if(bK.getValue()!=bI){var bL=bK.getValue();
bK.setValue(bI);
var bJ=this.__lY?null:bI;
this.__mb=bL;
this.__me(bJ);
}if(this.__lX){this._showPlaceholder();
}return bI;
}throw new Error("Invalid value type: "+bI);
},getValue:function(){var bM=this.getContentElement().getValue();
return this.__lY?null:bM;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__lY=e.getData()===null;
this.__me(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bN,bO){this.getContentElement().setTextSelection(bN,bO);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bQ=this.getValue()||j;
var bP=this.getPlaceholder();

if(bP!=null&&bQ==j&&!this.hasState(E)&&!this.hasState(G)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__mf().setStyle(bc,X);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__mf().setStyle(bc,L);
}},__mf:function(){if(this.__ma==null){this.__ma=new qx.html.Label();
var bR=qx.theme.manager.Color.getInstance();
this.__ma.setStyles({"visibility":X,"zIndex":6,"position":W,"color":bR.resolve(I)});
this.getContainerElement().add(this.__ma);
}return this.__ma;
},_onChangeLocale:qx.core.Environment.select(g,{"true":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"false":null}),_applyPlaceholder:function(bS,bT){if(this.__lX){this.__mf().setValue(bS);

if(bS!=null){this.addListener(bd,this._removePlaceholder,this);
this.addListener(ba,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bd,this._removePlaceholder,this);
this.removeListener(ba,this._showPlaceholder,this);
this._removePlaceholder();
}}else{if(this.getEnabled()){this.getContentElement().setAttribute(a,bS);
}}},_applyTextAlign:function(bU,bV){this.getContentElement().setStyle(w,bU);
},_applyReadOnly:function(bW,bX){var bY=this.getContentElement();
bY.setAttribute(V,bW);

if(bW){this.addState(b);
this.setFocusable(false);
}else{this.removeState(b);
this.setFocusable(true);
}}},destruct:function(){this.__ma=null;

if(qx.core.Environment.get(g)){qx.locale.Manager.getInstance().removeListener(Y,this._onChangeLocale,this);
}}});
})();
(function(){var k="overflowY",j="auto",i="hidden",h="textarea",g="Boolean",f="Integer",d="input",c="appear",b="engine.name",a="qx.debug",y="_applyWrap",x="-1",w="_applyMinimalLineHeight",v="mousewheel",u="visible",t="",s="_applyAutoSize",r="tabIndex",q='name',p="mshtml",n="qx.ui.form.TextArea",o="webkit",l='id',m="absolute";
qx.Class.define(n,{extend:qx.ui.form.AbstractField,construct:function(z){qx.ui.form.AbstractField.call(this,z);
this.initWrap();
this.addListener(v,this._onMousewheel,this);
},properties:{wrap:{check:g,init:true,apply:y},appearance:{refine:true,init:h},singleStep:{check:f,init:20},minimalLineHeight:{check:f,apply:w,init:4},autoSize:{check:g,apply:s,init:false}},members:{__yB:null,__yC:null,__yD:null,setValue:function(A){A=qx.ui.form.AbstractField.prototype.setValue.call(this,A);
this.__yE();
return A;
},_onMousewheel:function(e){var B=this.getContentElement();
var scrollY=B.getScrollY();
B.scrollToY(scrollY+e.getWheelDelta()*this.getSingleStep());
var C=B.getScrollY();

if(C!=scrollY){e.stop();
}},__yE:function(){if(this.isAutoSize()){var F=this.__yF();

if(F){this.__yD=this.__yD||this._getAreaHeight();
var H=this._getScrolledAreaHeight();
if(this.getMaxHeight()){var D=this.getInsets();
var E=-D.top+this.getMaxHeight()-D.bottom;

if(H>E){this.getContentElement().setStyle(k,j);
}else{this.getContentElement().setStyle(k,i);
}}var G=Math.max(H,this.__yD);
this._setAreaHeight(G);
}else{this.addListenerOnce(c,function(){if(qx.core.Environment.get(b)==o){var J=this.getContentElement();
var I=this.getValue();
J.setStyle(k,i,true);
this.setValue(t);
this.setValue(I);
}this.__yE();
},this);
}}},_getAreaHeight:function(){return this.getInnerSize().height;
},_setAreaHeight:function(K){if(this._getAreaHeight()!==K){this.__yC=K;
qx.ui.core.queue.Layout.add(this);
qx.ui.core.queue.Manager.flush();
}},_getScrolledAreaHeight:function(){var M=this.__yF();
var L=M.getDomElement();
var N=this.getValue();
L.style.overflow=i;
M.setValue(N);
M.setWrap(this.getWrap(),true);

if(L){if(!L.parentNode){qx.html.Element.flush();
return this._getScrolledAreaHeight();
}this.__yH(M);

if(qx.core.Environment.get(b)==p){if(!L.scrollTop){qx.html.Element.flush();
}return L.scrollTop+this._getTextSize().height;
}return L.scrollTop;
}},__yF:function(){this.__yB=this.__yB||this.__yG();
return this.__yB;
},__yG:function(){var R,P,O,Q;
R=this.getContentElement();
if(!R.getDomElement()){return;
}O=qx.bom.Collection.create(R.getDomElement()).clone()[0];
Q=new qx.html.Input(h);
Q.useElement(O);
P=Q;
P.setStyles({position:m,top:0,left:-9999,height:0,overflow:u},true);
P.removeAttribute(l);
P.removeAttribute(q);
P.setAttribute(r,x);
P.setValue(R.getValue());
P.insertBefore(R);
this.__yH(P);
return P;
},__yH:function(S){var S=S.getDomElement();

if(S){S.scrollTop=10000;
}},_createInputElement:function(){return new qx.html.Input(h,{overflowX:j,overflowY:j});
},_applyWrap:function(T,U){this.getContentElement().setWrap(T);
this.__yE();
},_applyMinimalLineHeight:function(){qx.ui.core.queue.Layout.add(this);
},_applyAutoSize:function(V,W){if(qx.core.Environment.get(a)){this.__yI();
}
if(V){this.__yE();
this.addListener(d,this.__yE,this);
this.addListenerOnce(c,function(){this.getContentElement().setStyle(k,i);
});
}else{this.removeListener(d,this.__yE);
this.getContentElement().setStyle(k,j);
}},_applyDimension:function(X){qx.ui.form.AbstractField.prototype._applyDimension.call(this);

if(qx.core.Environment.get(a)){this.__yI();
}
if(X===this.getMaxHeight()){this.__yE();
}},__yI:function(){if(this.isAutoSize()&&this.getHeight()){this.warn("autoSize is ignored when the height property is set. "+"If you want to set an initial height, use the minHeight "+"property instead.");
}},_getContentHint:function(){var Y=qx.ui.form.AbstractField.prototype._getContentHint.call(this);
Y.height=Y.height*this.getMinimalLineHeight();
Y.width=this._getTextSize().width*20;

if(this.isAutoSize()){Y.height=this.__yC||Y.height;
}return Y;
}}});
})();
(function(){var n="wrap",m="value",l="textarea",k="engine.name",j="none",i="",h="overflow",g="input",f="qx.html.Input",e="select",b="disabled",d="read-only",c="overflowX",a="overflowY";
qx.Class.define(f,{extend:qx.html.Element,construct:function(o,p,q){if(o===e||o===l){var r=o;
}else{r=g;
}qx.html.Element.call(this,r,p,q);
this.__mg=o;
},members:{__mg:null,__mh:null,__mi:null,_createDomElement:function(){return qx.bom.Input.create(this.__mg);
},_applyProperty:function(name,s){qx.html.Element.prototype._applyProperty.call(this,name,s);
var t=this.getDomElement();

if(name===m){qx.bom.Input.setValue(t,s);
}else if(name===n){qx.bom.Input.setWrap(t,s);
this.setStyle(h,t.style.overflow,true);
this.setStyle(c,t.style.overflowX,true);
this.setStyle(a,t.style.overflowY,true);
}},setEnabled:qx.core.Environment.select(k,{"webkit":function(u){this.__mi=u;

if(!u){this.setStyles({"userModify":d,"userSelect":j});
}else{this.setStyles({"userModify":null,"userSelect":this.__mh?null:j});
}},"default":function(v){this.setAttribute(b,v===false);
}}),setSelectable:qx.core.Environment.select(k,{"webkit":function(w){this.__mh=w;
qx.html.Element.prototype.setSelectable.call(this,this.__mi&&w);
},"default":function(x){qx.html.Element.prototype.setSelectable.call(this,x);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(m,y);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(m)||i;
},setWrap:function(B,C){if(this.__mg===l){this._setProperty(n,B,C);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__mg===l){return this._getProperty(n);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var m="input",k="engine.name",j="change",h="text",g="password",f="radio",d="textarea",c="checkbox",b="engine.version",a="keypress",A="browser.documentmode",z="opera",y="keyup",x="mshtml",w="blur",v="keydown",u="propertychange",t="browser.version",s="select-multiple",r="value",p="select",q="qx.event.handler.Input",n="checked";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if((qx.core.Environment.get(k)==z)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__mj:false,__mk:null,__ml:null,__mm:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===m&&(D===m||D===d)){return true;
}
if(C===j&&(D===m||D===d||D===p)){return true;
}return false;
},registerEvent:function(E,F,G){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(b)<9&&qx.core.Environment.get(A)<9){if(!E.__mn){var H=E.tagName.toLowerCase();
var I=E.type;

if(I===h||I===g||H===d||I===c||I===f){qx.bom.Event.addNativeListener(E,u,this._onPropertyWrapper);
}
if(I!==c&&I!==f){qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}
if(I===h||I===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}E.__mn=true;
}}else{if(F===m){this.__mo(E);
}else if(F===j){if(E.type===f||E.type===c){qx.bom.Event.addNativeListener(E,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(E.type===h||E.type===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}}}}},__mo:qx.core.Environment.select(k,{"mshtml":function(J){if(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.addNativeListener(J,m,this._onInputWrapper);

if(J.type===h||J.type===g){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);
qx.bom.Event.addNativeListener(J,y,this._inputFixWrapper);
}}},"webkit":function(K){var L=K.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(b))<532&&L==d){qx.bom.Event.addNativeListener(K,a,this._onInputWrapper);
}qx.bom.Event.addNativeListener(K,m,this._onInputWrapper);
},"opera":function(M){qx.bom.Event.addNativeListener(M,y,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(M,v,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(M,w,this._onBlurWrapper);
qx.bom.Event.addNativeListener(M,m,this._onInputWrapper);
},"default":function(N){qx.bom.Event.addNativeListener(N,m,this._onInputWrapper);
}}),unregisterEvent:function(O,P){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(b)<9&&qx.core.Environment.get(A)<9){if(O.__mn){var Q=O.tagName.toLowerCase();
var R=O.type;

if(R===h||R===g||Q===d||R===c||R===f){qx.bom.Event.removeNativeListener(O,u,this._onPropertyWrapper);
}
if(R!==c&&R!==f){qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}
if(R===h||R===g){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}
try{delete O.__mn;
}catch(S){O.__mn=null;
}}}else{if(P===m){this.__mp(O);
}else if(P===j){if(O.type===f||O.type===c){qx.bom.Event.removeNativeListener(O,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}}
if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(O.type===h||O.type===g){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}}}},__mp:qx.core.Environment.select(k,{"mshtml":function(T){if(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.removeNativeListener(T,m,this._onInputWrapper);

if(T.type===h||T.type===g){qx.bom.Event.removeNativeListener(T,y,this._inputFixWrapper);
}}},"webkit":function(U){var V=U.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(b))<532&&V==d){qx.bom.Event.removeNativeListener(U,a,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);
},"opera":function(W){qx.bom.Event.removeNativeListener(W,y,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(W,v,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(W,w,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);
},"default":function(X){qx.bom.Event.removeNativeListener(X,m,this._onInputWrapper);
}}),_onKeyPress:qx.core.Environment.select(k,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__ml){this.__ml=Y.value;
qx.event.Registration.fireEvent(Y,j,qx.event.type.Data,[Y.value]);
}}},"default":null}),_inputFix:qx.core.Environment.select(k,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__mm){this.__mm=ba.value;
qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);
}}},"default":null}),_onKeyDown:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__mj=true;
}},"default":null}),_onKeyUp:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__mj=false;
}},"default":null}),_onBlur:qx.core.Environment.select(k,{"opera":function(e){if(this.__mk&&qx.core.Environment.get(t)<10.6){window.clearTimeout(this.__mk);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);
var bb=bc.tagName.toLowerCase();
if(!this.__mj||bb!==m){if((qx.core.Environment.get(k)==z)&&qx.core.Environment.get(t)<10.6){this.__mk=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
},0);
}else{qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var be=qx.bom.Event.getTarget(e);
var bd=be.value;

if(be.type===s){var bd=[];

for(var i=0,o=be.options,l=o.length;i<l;i++){if(o[i].selected){bd.push(o[i].value);
}}}qx.event.Registration.fireEvent(be,j,qx.event.type.Data,[bd]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);

if(bf.type===f){if(bf.checked){qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.value]);
}}else{qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.checked]);
}}),_onProperty:qx.core.Environment.select(k,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);
var bh=e.propertyName;

if(bh===r&&(bg.type===h||bg.type===g||bg.tagName.toLowerCase()===d)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,m,qx.event.type.Data,[bg.value]);
}}else if(bh===n){if(bg.type===c){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.checked]);
}else if(bg.checked){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.value]);
}}}),"default":function(){}})},defer:function(bi){qx.event.Registration.addHandler(bi);
}});
})();
(function(){var k="",j="select",h="textarea",g="auto",f="soft",e="off",d="engine.name",c="text",b="Unsupported input type.",a="nowrap",x="radio",w="qx.debug",v="input",u="option",t="value",s="number",r="qx.bom.Input",q="normal",p="mshtml",o="wrap",m="checkbox",n="select-one";
qx.Class.define(r,{statics:{__mq:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(y,z,A){if(qx.core.Environment.get(w)){qx.core.Assert.assertKeyInMap(y,this.__mq,b);
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
(function(){var t="html.classlist",s="default",r="native",q="",p=" ",o='',n="(^|\\s)",m="(\\s|$)",k="qx.debug",j="\\b",c="g",h='function',f="\\b|\\b",b="qx.bom.element.Class",a='SVGAnimatedString',e='object',d="$2",g='undefined';
qx.Class.define(b,{statics:{__yk:/\s+/g,__yl:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.core.Environment.get(t)?r:s,{"native":function(u,name){u.classList.add(name);
return name;
},"default":function(v,name){if(!this.has(v,name)){v.className+=(v.className?p:q)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.core.Environment.get(t)?r:s,{"native":function(w,x){for(var i=0;i<x.length;i++){w.classList.add(x[i]);
}return w.className;
},"default":function(y,z){var A={};
var C;
var B=y.className;

if(B){C=B.split(this.__yk);

for(var i=0,l=C.length;i<l;i++){A[C[i]]=true;
}
for(var i=0,l=z.length;i<l;i++){if(!A[z[i]]){C.push(z[i]);
}}}else{C=z;
}return y.className=C.join(p);
}}),get:function(D){var E=D.className;

if(typeof E.split!==h){if(typeof E===e){if(qx.Bootstrap.getClass(E)==a){E=E.baseVal;
}else{if(qx.core.Environment.get(k)){qx.log.Logger.warn(this,"className for element "+D+" cannot be determined");
}E=o;
}}
if(typeof E===g){if(qx.core.Environment.get(k)){qx.log.Logger.warn(this,"className for element "+D+" is undefined");
}E=o;
}}return E;
},has:qx.lang.Object.select(qx.core.Environment.get(t)?r:s,{"native":function(F,name){return F.classList.contains(name);
},"default":function(G,name){var H=new RegExp(n+name+m);
return H.test(G.className);
}}),remove:qx.lang.Object.select(qx.core.Environment.get(t)?r:s,{"native":function(I,name){I.classList.remove(name);
return name;
},"default":function(J,name){var K=new RegExp(n+name+m);
J.className=J.className.replace(K,d);
return name;
}}),removeClasses:qx.lang.Object.select(qx.core.Environment.get(t)?r:s,{"native":function(L,M){for(var i=0;i<M.length;i++){L.classList.remove(M[i]);
}return L.className;
},"default":function(N,O){var P=new RegExp(j+O.join(f)+j,c);
return N.className=N.className.replace(P,q).replace(this.__yl,q).replace(this.__yk,p);
}}),replace:function(Q,R,S){this.remove(Q,R);
return this.add(Q,S);
},toggle:qx.lang.Object.select(qx.core.Environment.get(t)?r:s,{"native":function(T,name,U){if(U===undefined){T.classList.toggle(name);
}else{U?this.add(T,name):this.remove(T,name);
}return name;
},"default":function(V,name,W){if(W==null){W=!this.has(V,name);
}W?this.add(V,name):this.remove(V,name);
return name;
}})}});
})();
(function(){var b=function(c,d){return function(e,f,g,h,k,m){var length=this.length;

if(length>0){var n=c[d];

for(var i=0;i<length;i++){if(this[i].nodeType===1){n.call(c,this[i],e,f,g,h,k,m);
}}}return this;
};
};
var a=function(o,p){return function(q,r,s,t,u,v){if(this.length>0){var w=this[0].nodeType===1?o[p](this[0],q,r,s,t,u,v):null;

if(w&&w.nodeType){return this.__yt([w]);
}else{return w;
}}return null;
};
};
qx.Class.define("qx.bom.Collection",{extend:qx.type.BaseArray,statics:{query:function(x,y){var z=qx.bom.Selector.query(x,y);
return qx.lang.Array.cast(z,qx.bom.Collection);
},id:function(A){var B=document.getElementById(A);
if(B&&B.id!=A){return qx.bom.Collection.query("#"+A);
}if(B){return new qx.bom.Collection(B);
}else{return new qx.bom.Collection();
}},html:function(C,D){var E=qx.bom.Html.clean([C],D);
return qx.lang.Array.cast(E,qx.bom.Collection);
},__yp:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(F,G){var I=qx.bom.Collection;
if(F.nodeType){return new I(F);
}else if(typeof F==="string"){var H=I.__yp.exec(F);

if(H){return H[1]?I.html(H[1],G):I.id(H[3].substring(1));
}else{return I.query(F,G);
}}else{return qx.lang.Array.cast(F,qx.bom.Collection);
}}},members:{__yq:null,setAttribute:b(qx.bom.element.Attribute,"set"),resetAttribute:b(qx.bom.element.Attribute,"reset"),getAttribute:a(qx.bom.element.Attribute,"get"),addClass:b(qx.bom.element.Class,"add"),getClass:a(qx.bom.element.Class,"get"),hasClass:a(qx.bom.element.Class,"has"),removeClass:b(qx.bom.element.Class,"remove"),replaceClass:b(qx.bom.element.Class,"replace"),toggleClass:b(qx.bom.element.Class,"toggle"),setValue:b(qx.bom.Input,"setValue"),getValue:a(qx.bom.Input,"getValue"),setStyle:b(qx.bom.element.Style,"set"),setStyles:b(qx.bom.element.Style,"setStyles"),resetStyle:b(qx.bom.element.Style,"reset"),getStyle:a(qx.bom.element.Style,"get"),setCss:b(qx.bom.element.Style,"setCss"),getCss:b(qx.bom.element.Style,"getCss"),getOffset:a(qx.bom.element.Location,"get"),getPosition:a(qx.bom.element.Location,"getPosition"),getOffsetParent:a(qx.bom.element.Location,"getOffsetParent"),setScrollLeft:function(J){var Node=qx.dom.Node;

for(var i=0,l=this.length,K;i<l;i++){K=this[i];

if(Node.isElement(K)){K.scrollLeft=J;
}else if(Node.isWindow(K)){K.scrollTo(J,this.getScrollTop(K));
}else if(Node.isDocument(K)){Node.getWindow(K).scrollTo(J,this.getScrollTop(K));
}}return this;
},setScrollTop:function(L){var Node=qx.dom.Node;

for(var i=0,l=this.length,M;i<l;i++){M=this[i];

if(Node.isElement(M)){M.scrollTop=L;
}else if(Node.isWindow(M)){M.scrollTo(this.getScrollLeft(M),L);
}else if(Node.isDocument(M)){Node.getWindow(M).scrollTo(this.getScrollLeft(M),L);
}}return this;
},getScrollLeft:function(){var N=this[0];

if(!N){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(N)||Node.isDocument(N)){return qx.bom.Viewport.getScrollLeft();
}return N.scrollLeft;
},getScrollTop:function(){var O=this[0];

if(!O){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(O)||Node.isDocument(O)){return qx.bom.Viewport.getScrollTop();
}return O.scrollTop;
},getWidth:function(){var P=this[0];
var Node=qx.dom.Node;

if(P){if(Node.isElement(P)){return qx.bom.element.Dimension.getWidth(P);
}else if(Node.isDocument(P)){return qx.bom.Document.getWidth(Node.getWindow(P));
}else if(Node.isWindow(P)){return qx.bom.Viewport.getWidth(P);
}}return null;
},getContentWidth:function(){var Q=this[0];

if(qx.dom.Node.isElement(Q)){return qx.bom.element.Dimension.getContentWidth(Q);
}return null;
},getHeight:function(){var R=this[0];
var Node=qx.dom.Node;

if(R){if(Node.isElement(R)){return qx.bom.element.Dimension.getHeight(R);
}else if(Node.isDocument(R)){return qx.bom.Document.getHeight(Node.getWindow(R));
}else if(Node.isWindow(R)){return qx.bom.Viewport.getHeight(R);
}}return null;
},getContentHeight:function(){var S=this[0];

if(qx.dom.Node.isElement(S)){return qx.bom.element.Dimension.getContentHeight(S);
}return null;
},addListener:b(qx.bom.Element,"addListener"),removeListener:b(qx.bom.Element,"removeListener"),eq:function(T){return this.slice(T,+T+1);
},filter:function(U,V){var W;

if(qx.lang.Type.isFunction(U)){W=qx.type.BaseArray.prototype.filter.call(this,U,V);
}else{W=qx.bom.Selector.matches(U,this);
}return this.__yt(W);
},is:function(X){return !!X&&qx.bom.Selector.matches(X,this).length>0;
},__yr:/^.[^:#\[\.,]*$/,not:function(Y){if(this.__yr.test(Y)){var ba=qx.bom.Selector.matches(":not("+Y+")",this);
return this.__yt(ba);
}var ba=qx.bom.Selector.matches(Y,this);
return this.filter(function(bb){return ba.indexOf(bb)===-1;
});
},add:function(bc,bd){var be=qx.bom.Selector.query(bc,bd);
var bf=qx.lang.Array.unique(this.concat(be));
return this.__yt(bf);
},children:function(bg){var bh=[];

for(var i=0,l=this.length;i<l;i++){bh.push.apply(bh,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(bg){bh=qx.bom.Selector.matches(bg,bh);
}return this.__yt(bh);
},closest:function(bi){var bj=new qx.bom.Collection(1);
var bl=qx.bom.Selector;
var bk=this.map(function(bm){while(bm&&bm.ownerDocument){bj[0]=bm;

if(bl.matches(bi,bj).length>0){return bm;
}bm=bm.parentNode;
}});
return this.__yt(qx.lang.Array.unique(bk));
},contents:function(){var bo=[];
var bn=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bo.push.apply(bo,bn.fromCollection(this[i].childNodes));
}return this.__yt(bo);
},find:function(bp){var br=qx.bom.Selector;
if(this.length===1){return this.__yt(br.query(bp,this[0]));
}else{var bq=[];

for(var i=0,l=this.length;i<l;i++){bq.push.apply(bq,br.query(bp,this[i]));
}return this.__yt(qx.lang.Array.unique(bq));
}},next:function(bs){var bt=qx.dom.Hierarchy;
var bu=this.map(bt.getNextElementSibling,bt);
if(bs){bu=qx.bom.Selector.matches(bs,bu);
}return this.__yt(bu);
},nextAll:function(bv){return this.__ys("getNextSiblings",bv);
},prev:function(bw){var bx=qx.dom.Hierarchy;
var by=this.map(bx.getPreviousElementSibling,bx);
if(bw){by=qx.bom.Selector.matches(bw,by);
}return this.__yt(by);
},prevAll:function(bz){return this.__ys("getPreviousSiblings",bz);
},parent:function(bA){var Element=qx.dom.Element;
var bB=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(bA){bB=qx.bom.Selector.matches(bA,bB);
}return this.__yt(bB);
},parents:function(bC){return this.__ys("getAncestors",bC);
},siblings:function(bD){return this.__ys("getSiblings",bD);
},__ys:function(bE,bF){var bH=[];
var bG=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){bH.push.apply(bH,bG[bE](this[i]));
}var bI=qx.lang.Array.unique(bH);
if(bF){bI=qx.bom.Selector.matches(bF,bI);
}return this.__yt(bI);
},__yt:function(bJ){var bK=new qx.bom.Collection;
bK.__yq=this;
bJ=Array.prototype.slice.call(bJ,0);
bK.push.apply(bK,bJ);
return bK;
},andSelf:function(){return this.add(this.__yq);
},end:function(){return this.__yq||new qx.bom.Collection();
},__yu:function(bL,bM){var bR=this[0];
var bQ=bR.ownerDocument||bR;
var bP=bQ.createDocumentFragment();
var bT=qx.bom.Html.clean(bL,bQ,bP);
var bV=bP.firstChild;
if(bV){var bN=this.length-1;

for(var i=0,l=bN;i<l;i++){bM.call(this,this[i],bP.cloneNode(true));
}bM.call(this,this[bN],bP);
}if(bT){var bO;
var bU=qx.io.ScriptLoader;
var bS=qx.lang.Function;

for(var i=0,l=bT.length;i<l;i++){bO=bT[i];
if(bO.src){bU.get().load(bO.src);
}else{bS.globalEval(bO.text||bO.textContent||bO.innerHTML||"");
}if(bO.parentNode){bO.parentNode.removeChild(bO);
}}}return this;
},__yv:function(bW,bX){var ca=qx.bom.Selector;
var bY=qx.lang.Array;
var cc=[];

for(var i=0,l=bW.length;i<l;i++){if(qx.core.Environment.get("qx.debug")){if(typeof bW[i]!=="string"){throw new Error("Invalid argument for selector query: "+bW[i]);
}}cc.push.apply(cc,ca.query(bW[i]));
}cc=bY.cast(bY.unique(cc),qx.bom.Collection);
for(var i=0,cb=this.length;i<cb;i++){cc[bX](this[i]);
}return this;
},append:function(cd){return this.__yu(arguments,this.__yw);
},prepend:function(ce){return this.__yu(arguments,this.__yx);
},__yw:function(cf,cg){cf.appendChild(cg);
},__yx:function(ch,ci){ch.insertBefore(ci,ch.firstChild);
},appendTo:function(cj){return this.__yv(arguments,"append");
},prependTo:function(ck){return this.__yv(arguments,"prepend");
},before:function(cl){return this.__yu(arguments,this.__yy);
},after:function(cm){return this.__yu(arguments,this.__yz);
},__yy:function(cn,co){cn.parentNode.insertBefore(co,cn);
},__yz:function(cp,cq){cp.parentNode.insertBefore(cq,cp.nextSibling);
},insertBefore:function(cr){return this.__yv(arguments,"before");
},insertAfter:function(cs){return this.__yv(arguments,"after");
},wrapAll:function(content){var cu=this[0];

if(cu){var ct=qx.bom.Collection.create(content,cu.ownerDocument).clone();
if(cu.parentNode){cu.parentNode.insertBefore(ct[0],cu);
}ct.map(this.__yA).append(this);
}return this;
},__yA:function(cv){while(cv.firstChild){cv=cv.firstChild;
}return cv;
},wrapInner:function(content){var cw=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){cw[0]=this[i];
cw.contents().wrapAll(content);
}return this;
},wrap:function(content){var cx=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){cx[0]=this[i];
cx.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(cy){return this.__yv(arguments,"replaceWith");
},remove:function(cz){var cB=this;

if(cz){cB=this.filter(cz);

if(cB.length==0){return this;
}}for(var i=0,cC=cB.length,cA;i<cC;i++){cA=cB[i];

if(cA.parentNode){cA.parentNode.removeChild(cA);
}}return cB;
},destroy:function(cD){if(this.length==0){return this;
}var cF=qx.bom.Selector;
var cI=this;

if(cD){cI=this.filter(cD);

if(cI.length==0){return this;
}}var cH=qx.event.Registration.getManager(this[0]);

for(var i=0,l=cI.length,cG,cJ;i<l;i++){cG=cI[i];
cH.removeAllListeners(cG);
cJ=cF.query("*",cG);

for(var j=0,cE=cJ.length;j<cE;j++){cH.removeAllListeners(cJ[j]);
}if(cG.parentNode){cG.parentNode.removeChild(cG);
}}if(cD){cI.end();
qx.lang.Array.exclude(this,cI);
}else{this.length=0;
}return this;
},empty:function(){var cK=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){cK.query(">*",this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(cL){var Element=qx.bom.Element;
return cL?
this.map(function(cM){return Element.clone(cM,true);
}):this.map(Element.clone,Element);
}},defer:function(cN){if(window.$==null){window.$=cN.create;
}}});
})();
(function(){var m="string",k="script",h="<table>",g="engine.name",f="<fieldset>",e="<select multiple='multiple'>",d="</div>",c="</select>",b="</tr></tbody></table>",a="<col",J="div",I="<table><tbody><tr>",H=">",G="<table><tbody></tbody><colgroup>",F="<th",E="</tbody></table>",D="<td",C="</colgroup></table>",B="<opt",A="text/javascript",t="",u="</fieldset>",r="<table><tbody>",s="div<div>",p="<table",q="mshtml",n="qx.bom.Html",o="<leg",v="tbody",w="<tr",y="</table>",x="undefined",z="></";
qx.Class.define(n,{statics:{__ym:function(K,L,M){return M.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?K:L+z+M+H;
},__yn:{opt:[1,e,c],leg:[1,f,u],table:[1,h,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Environment.select(g,{"mshtml":[1,s,d],"default":null})},__yo:function(N,O){var U=O.createElement(J);
N=N.replace(/(<(\w+)[^>]*?)\/>/g,this.__ym);
var Q=N.replace(/^\s+/,t).substring(0,5).toLowerCase();
var T,P=this.__yn;

if(!Q.indexOf(B)){T=P.opt;
}else if(!Q.indexOf(o)){T=P.leg;
}else if(Q.match(/^<(thead|tbody|tfoot|colg|cap)/)){T=P.table;
}else if(!Q.indexOf(w)){T=P.tr;
}else if(!Q.indexOf(D)||!Q.indexOf(F)){T=P.td;
}else if(!Q.indexOf(a)){T=P.col;
}else{T=P.def;
}if(T){U.innerHTML=T[1]+N+T[2];
var S=T[0];

while(S--){U=U.lastChild;
}}else{U.innerHTML=N;
}if((qx.core.Environment.get(g)==q)){var V=/<tbody/i.test(N);
var R=!Q.indexOf(p)&&!V?U.firstChild&&U.firstChild.childNodes:T[1]==h&&!V?U.childNodes:[];

for(var j=R.length-1;j>=0;--j){if(R[j].tagName.toLowerCase()===v&&!R[j].childNodes.length){R[j].parentNode.removeChild(R[j]);
}}if(/^\s/.test(N)){U.insertBefore(O.createTextNode(N.match(/^\s*/)[0]),U.firstChild);
}}return qx.lang.Array.fromCollection(U.childNodes);
},clean:function(W,X,Y){X=X||document;
if(typeof X.createElement===x){X=X.ownerDocument||X[0]&&X[0].ownerDocument||document;
}if(!Y&&W.length===1&&typeof W[0]===m){var bg=/^<(\w+)\s*\/?>$/.exec(W[0]);

if(bg){return [X.createElement(bg[1])];
}}var ba,bc=[];

for(var i=0,l=W.length;i<l;i++){ba=W[i];
if(typeof ba===m){ba=this.__yo(ba,X);
}if(ba.nodeType){bc.push(ba);
}else if(ba instanceof qx.type.BaseArray){bc.push.apply(bc,Array.prototype.slice.call(ba,0));
}else if(ba.toElement){bc.push(ba.toElement());
}else{bc.push.apply(bc,ba);
}}if(Y){var bf=[],be=qx.lang.Array,bd,bb;

for(var i=0;bc[i];i++){bd=bc[i];

if(bd.nodeType==1&&bd.tagName.toLowerCase()===k&&(!bd.type||bd.type.toLowerCase()===A)){if(bd.parentNode){bd.parentNode.removeChild(bc[i]);
}bf.push(bd);
}else{if(bd.nodeType===1){bb=be.fromCollection(bd.getElementsByTagName(k));
bc.splice.apply(bc,[i+1,0].concat(bb));
}Y.appendChild(bd);
}}return bf;
}return bc;
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
(function(){var p="success",o="engine.name",n="complete",m="error",l="load",k="fail",j="loaded",i="mshtml",h="head",g="readystatechange",c="webkit",f="script",d="abort",b="text/javascript",a="qx.io.ScriptLoader";
qx.Bootstrap.define(a,{construct:function(){this.__uz=qx.Bootstrap.bind(this.__uF,this);
this.__uA=document.createElement(f);
},members:{__uB:null,__uC:null,__uD:null,__uE:null,__uz:null,__uA:null,load:function(q,r,s){if(this.__uB){throw new Error("Another request is still running!");
}this.__uB=true;
this.__uC=false;
var t=document.getElementsByTagName(h)[0];
var u=this.__uA;
this.__uD=r||null;
this.__uE=s||window;
u.type=b;
u.onerror=u.onload=u.onreadystatechange=this.__uz;
u.src=q;
setTimeout(function(){t.appendChild(u);
},0);
},abort:function(){if(this.__uB){this.dispose(d);
}},dispose:function(status){if(this.__uC){return;
}this.__uC=true;
var w=this.__uA;
w.onerror=w.onload=w.onreadystatechange=null;
var v=w.parentNode;

if(v){v.removeChild(w);
}delete this.__uB;
if(this.__uD){if(qx.core.Environment.get(o)==i||qx.core.Environment.get(o)==c){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__uD.call(self.__uE,status);
delete self.__uD;
}),0);
}else{this.__uD.call(this.__uE,status);
delete this.__uD;
}}},__uF:qx.event.GlobalError.observeMethod(qx.core.Environment.select(o,{"mshtml":function(e){var x=this.__uA.readyState;

if(x==j){this.dispose(p);
}else if(x==n){this.dispose(p);
}else{return;
}},"opera":function(e){if(qx.Bootstrap.isString(e)||e.type===m){return this.dispose(k);
}else if(e.type===l){return this.dispose(p);
}else{return;
}},"default":function(e){if(qx.Bootstrap.isString(e)||e.type===m){this.dispose(k);
}else if(e.type===l){this.dispose(p);
}else if(e.type===g&&(e.target.readyState===n||e.target.readyState===j)){this.dispose(p);
}else{return;
}}}))}});
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
qx.Mixin.define(p,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__tY;
this._resizeBorder=this.__tX;
this._styleBorder=this.__tV;
this._generateMarkup=this.__tW;
},properties:{innerWidthTop:{check:b,init:0},innerWidthRight:{check:b,init:0},innerWidthBottom:{check:b,init:0},innerWidthLeft:{check:b,init:0},innerWidth:{group:[w,z,k,l],mode:D},innerColorTop:{nullable:true,check:c},innerColorRight:{nullable:true,check:c},innerColorBottom:{nullable:true,check:c},innerColorLeft:{nullable:true,check:c},innerColor:{group:[u,v,x,o],mode:D}},members:{__tU:null,__tV:function(E){var F=qx.theme.manager.Color.getInstance();
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
}}},__tW:function(H){var K=this._generateBackgroundMarkup(H);
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
return this.__tU=this._generateBackgroundMarkup(H,K);
},__tX:function(L,M,N){var O=this.getInsets();
M-=O.left+O.right;
N-=O.top+O.bottom;
var P=O.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=O.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:P,top:top,width:M,height:N,elementToApplyDimensions:L.firstChild};
},__tY:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var e="px",d="qx.ui.decoration.Double",c="css.boxmodel",b="content",a="scale";
qx.Class.define(d,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MDoubleBorder],construct:function(f,g,h,innerWidth,i){qx.ui.decoration.Abstract.call(this);
if(f!=null){this.setWidth(f);
}
if(g!=null){this.setStyle(g);
}
if(h!=null){this.setColor(h);
}
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(i!=null){this.setInnerColor(i);
}},members:{__IR:null,_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
},_isInitialized:function(){return !!this.__IR;
},getMarkup:function(j){if(this.__IR){return this.__IR;
}var k={};
this._styleBorder(k);
return this.__IR=this._generateMarkup(k);
},resize:function(l,m,n){var s=this.getBackgroundImage()&&this.getBackgroundRepeat()==a;
var q=this.getInsets();

if(s||qx.core.Environment.get(c)==b){var innerWidth=m-q.left-q.right;
var innerHeight=n-q.top-q.bottom;
}else{var o=q.top-this.getInnerWidthTop();
var t=q.bottom-this.getInnerWidthBottom();
var p=q.left-this.getInnerWidthLeft();
var r=q.right-this.getInnerWidthRight();
var innerWidth=m-p-r;
var innerHeight=n-o-t;
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}l.firstChild.style.width=innerWidth+e;
l.firstChild.style.height=innerHeight+e;
l.style.left=(q.left-this.getWidthLeft()-this.getInnerWidthLeft())+e;
l.style.top=(q.top-this.getWidthTop()-this.getInnerWidthTop())+e;
},tint:function(u,v){this._tintBackgroundColor(u,v,u.style);
}},destruct:function(){this.__IR=null;
}});
})();
(function(){var j='"></div>',i="_applyStyle",h="1px",g='<div style="',f='border:',e="1px solid ",d="Color",c=";",b="px",a='</div>',y="qx.ui.decoration.Beveled",x="css.boxmodel",w="qx.debug",v='<div style="position:absolute;top:1px;left:1px;',u='border-bottom:',t='border-right:',s="",r="content",q='border-left:',p='border-top:',n="Number",o='<div style="position:absolute;top:1px;left:0px;',l='position:absolute;top:0px;left:1px;',m='<div style="overflow:hidden;font-size:0;line-height:0;">',k="absolute";
qx.Class.define(y,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(z,A,B){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setOuterColor(z);
}
if(A!=null){this.setInnerColor(A);
}
if(B!=null){this.setInnerOpacity(B);
}},properties:{innerColor:{check:d,nullable:true,apply:i},innerOpacity:{check:n,init:1,apply:i},outerColor:{check:d,nullable:true,apply:i}},members:{__ub:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__ub;
},_applyStyle:function(){if(qx.core.Environment.get(w)){if(this.__ub){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__ub){return this.__ub;
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
return this.__ub=D.join(s);
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
}},destruct:function(){this.__ub=null;
}});
})();
(function(){var r="Number",q="_applyInsets",p="-l",o="Please verify the image '",n="' is present.",m="-t",l="insetRight",k="insetTop",j="qx.debug",i="The value of the property 'topSlice' is null! ",c="_applyBaseImage",h="insetBottom",f="set",b="shorthand",a="insetLeft",e="String",d="qx.ui.decoration.Grid",g="The value of the property 'leftSlice' is null! ";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(s,t){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__uc=new qx.ui.decoration.css3.BorderImage();

if(s){this.__ud(s);
}}else{this.__uc=new qx.ui.decoration.GridDiv(s);
}
if(t!=null){this.__uc.setInsets(t);
}},properties:{baseImage:{check:e,nullable:true,apply:c},insetLeft:{check:r,nullable:true,apply:q},insetRight:{check:r,nullable:true,apply:q},insetBottom:{check:r,nullable:true,apply:q},insetTop:{check:r,nullable:true,apply:q},insets:{group:[k,l,h,a],mode:b}},members:{__uc:null,getMarkup:function(){return this.__uc.getMarkup();
},resize:function(u,v,w){this.__uc.resize(u,v,w);
},tint:function(x,y){},getInsets:function(){return this.__uc.getInsets();
},_applyInsets:function(z,A,name){var B=f+qx.lang.String.firstUp(name);
this.__uc[B](z);
},_applyBaseImage:function(C,D){if(this.__uc instanceof qx.ui.decoration.GridDiv){this.__uc.setBaseImage(C);
}else{this.__ud(C);
}},__ud:function(E){this.__uc.setBorderImage(E);
var K=qx.util.AliasManager.getInstance().resolve(E);
var L=/(.*)(\.[a-z]+)$/.exec(K);
var H=L[1];
var J=L[2];
var F=qx.util.ResourceManager.getInstance();
var M=F.getImageHeight(H+m+J);
var N=F.getImageWidth(H+p+J);

if(qx.core.Environment.get(j)){var G=i+o+H+m+J+n;
var I=g+o+H+p+J+n;
qx.core.Assert.assertNotNull(M,G);
qx.core.Assert.assertNotNull(N,I);
}this.__uc.setSlice([M,N]);
}},destruct:function(){this.__uc=null;
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",z="border-separator",y="table-header-border",x="dotted",w="tooltip-text",v="invalid",u="white",t="decoration/shadow/shadow.png",s="black",r="#FFF",q="effect",o="table-focus-indicator",p="border-focused-invalid",m="qx/decoration/Classic",n="border-lead",k="decoration/shadow/shadow-small.png",l="qx.theme.classic.Decoration";
qx.Theme.define(l,{aliases:{decoration:m},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:x}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:v}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:z}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:z}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:k,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:v,innerColor:p,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:x,color:n}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:w}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:w}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:u,colorLeft:u,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:y,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:o,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f,widthBottom:2,colorBottom:q,styleBottom:f}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:r,width:1,color:z}}}});
})();
(function(){var df="button",de="widget",dd="background",dc="atom",db="inset-thin",da="text-selected",cY="outset",cX="text-disabled",cW="inset",cV="background-selected",bY="label",bX="image",bW="groupbox",bV="cell",bU="popup",bT="focused-inset",bS="tooltip",bR="list",bQ="white",bP="menu-button",dm="middle",dn="decoration/arrows/down.gif",dk="spinner",dl="background-disabled",di="button-hovered",dj="bold",dg="checkbox",dh="toolbar-button",dp="button-frame",dq="textfield",cE="background-invalid",cD="shadow-small",cG="invalid",cF="combobox",cI="scrollbar",cH="center",cK="datechooser/button",cJ="button-abandoned",cC="background-light",cB="main",k="date-chooser",l="date-chooser-title",m="radiobutton",n="default",o="tree-folder",p="selectbox",q="background-field",r="outset-thin",s="icon/16/places/folder-open.png",t="menu-slidebar-button",dE="scrollbar/button",dD="combobox/button",dC="decoration/arrows/right.gif",dB="decoration/arrows/up.gif",dI="text",dH="virtual-list",dG="decoration/arrows/down-small.gif",dF="checkbox-undetermined",dK="icon/16/places/folder.png",dJ="slidebar/button-forward",bg="icon/16/mimetypes/text-plain.png",bh="right-top",be="table-header-cell",bf="button-checked",bk=".png",bl="background-focused",bi="datechooser",bj="slidebar/button-backward",bc="treevirtual-folder",bd="checkbox-checked",L="decoration/form/",K="decoration/tree/minus.gif",N="",M="decoration/tree/plus.gif",H="-invalid",G="decoration/arrows/left.gif",J="table-row-background-even",I="decoration/treevirtual/cross_minus.gif",F="radiobutton-hovered",E="keyboard-focus",bq="decoration/treevirtual/start_plus.gif",br="decoration/cursors/",bs="icon/16/actions/dialog-ok.png",bt="slidebar",bm="#BABABA",bn="table-scroller-focus-indicator",bo="move-frame",bp="nodrop",bu="date-chooser-selected",bv="tabview-page-button-left",W="decoration/arrows/up-small.gif",V="move",U="radiobutton-checked-focused",T="qx.theme.classic.Appearance",S="decoration/menu/checkbox.gif",R="tooltip-error",Q="right",P="decoration/arrows/rewind.gif",bb="table-scroller-header",ba="table-pane",bw="table-header-cell-hover",bx="focused-outset",by="checkbox-hovered",bz="icon/16/actions/dialog-cancel.png",bA="menu-slidebar",bB="datechooser-date-pane",bC="background-pane",bD="decoration/treevirtual/cross_plus.gif",bE="qx/icon/Oxygen/16/actions/window-close.png",bF="datechooser-week",cg="icon/16/apps/office-calendar.png",cf="datechooser-weekday",ce="table-header-border",cd="window-active-caption-text",ck="window-active-caption",cj="icon",ci="checkbox-checked-focused",ch="toolbar-separator",cn="groove",cm="checkbox-pressed",cx="tooltip-invalid",cy="decoration/window/restore.gif",cv="decoration/menu/checkbox-invert.gif",cw="scrollarea",ct="window-inactive-caption-text",cu="best-fit",cr="up.gif",cs="checkbox-undetermined-hovered",cz="keep-align",cA="tabview-page-button-right",cO="tabview-page-button-top",cN="tabview-page-button-bottom",cQ="row-layer",cP="decoration/menu/radiobutton.gif",cS="decoration/arrows/",cR="decoration/table/descending.png",cU="progressbar",cT="tree-file",cM="tooltip-text",cL="checkbox-checked-hovered",dx="left.gif",dy="decoration/arrows/up-invert.gif",dz="alias",dA="decoration/arrows/right-invert.gif",dt="radiobutton-checked-disabled",du="lead-item",dv="checkbox-focused",dw="border-dark",dr="decoration/treevirtual/end_plus.gif",ds="decoration/treevirtual/start_minus.gif",j="radiobutton-checked-hovered",i="decoration/window/minimize.gif",h="table-header-cell-hovered",g="down.gif",f="decoration/treevirtual/end.gif",e="decoration/treevirtual/end_minus.gif",d="window-inactive-caption",c="decoration/menu/radiobutton-invert.gif",b="text-placeholder",a="slider",w="decoration/table/select-column-order.png",x="decoration/arrows/next.gif",u="table-header",v="decoration/treevirtual/only_minus.gif",A="datechooser-week-header",B="decoration/window/maximize.gif",y="decoration/treevirtual/only_plus.gif",z="checkbox-checked-pressed",C="decoration/arrows/down-invert.gif",D="menu-separator",co="decoration/splitpane/knob-vertical.png",cl=".gif",cq="decoration/arrows/forward.gif",cp="radiobutton-checked-pressed",cb="table-statusbar",ca="radiobutton-pressed",O="copy",cc="table-row-background-selected",Y="radiobutton-focused",X="decoration/splitpane/knob-horizontal.png",bH="right.gif",bI="radiobutton-checked",bJ="decoration/treevirtual/cross.gif",bK="decoration/table/ascending.png",bL="decoration/treevirtual/line.gif",bM="checkbox-undetermined-focused",bN="toolbar-part-handle",bO="decoration/window/close.gif",bG="icon/16/actions/view-refresh.png";
qx.Theme.define(T,{appearances:{"widget":{},"label":{style:function(dL){return {textColor:dL.disabled?cX:undefined};
}},"image":{style:function(dM){return {opacity:!dM.replacement&&dM.disabled?0.3:undefined};
}},"atom":{},"atom/label":bY,"atom/icon":bX,"root":{style:function(dN){return {backgroundColor:dd,textColor:dI,font:n};
}},"popup":{style:function(dO){return {decorator:cB,backgroundColor:bC,shadow:cD};
}},"tooltip":{include:bU,style:function(dP){return {backgroundColor:bS,textColor:cM,decorator:bS,shadow:cD,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":dc,"tooltip-error":{include:bS,style:function(dQ){return {textColor:da,showTimeout:100,hideTimeout:10000,decorator:R,font:dj,backgroundColor:cx};
}},"tooltip-error/atom":dc,"iframe":{style:function(dR){return {backgroundColor:bQ,decorator:cW};
}},"move-frame":{style:function(dS){return {decorator:cB};
}},"resize-frame":bo,"dragdrop-cursor":{style:function(dT){var dU=bp;

if(dT.copy){dU=O;
}else if(dT.move){dU=V;
}else if(dT.alias){dU=dz;
}return {source:br+dU+cl,position:bh,offset:[2,16,2,6]};
}},"button-frame":{alias:dc,style:function(dV){if(dV.pressed||dV.abandoned||dV.checked){var dX=!dV.inner&&dV.focused?bT:cW;
var dW=[4,3,2,5];
}else{var dX=!dV.inner&&dV.focused?bx:cY;
var dW=[3,4];
}return {backgroundColor:dV.abandoned?cJ:dV.hovered?di:dV.checked?bf:df,decorator:dX,padding:dW};
}},"button":{alias:dp,include:dp,style:function(dY){return {center:true};
}},"hover-button":{alias:dc,include:dc,style:function(ea){return {backgroundColor:ea.hovered?cV:undefined,textColor:ea.hovered?da:undefined};
}},"splitbutton":{},"splitbutton/button":df,"splitbutton/arrow":{alias:df,include:df,style:function(eb){return {icon:dn};
}},"scrollarea/corner":{style:function(){return {backgroundColor:dd};
}},"scrollarea":de,"scrollarea/pane":de,"scrollarea/scrollbar-x":cI,"scrollarea/scrollbar-y":cI,"list":{alias:cw,style:function(ec){var eg;
var ee=!!ec.focused;
var ef=!!ec.invalid;
var ed=!!ec.disabled;

if(ef&&!ed){eg=cE;
}else if(ee&&!ef&&!ed){eg=bl;
}else if(ed){eg=dl;
}else{eg=bQ;
}return {decorator:ec.focused?bT:cW,backgroundColor:eg};
}},"listitem":{alias:dc,style:function(eh){return {gap:4,padding:eh.lead?[2,4]:[3,5],backgroundColor:eh.selected?cV:undefined,textColor:eh.selected?da:undefined,decorator:eh.lead?du:undefined};
}},"textfield":{style:function(ei){var en;
var el=!!ei.focused;
var em=!!ei.invalid;
var ej=!!ei.disabled;

if(em&&!ej){en=cE;
}else if(el&&!em&&!ej){en=bl;
}else if(ej){en=dl;
}else{en=q;
}var ek;

if(ei.disabled){ek=cX;
}else if(ei.showingPlaceholder){ek=b;
}else{ek=undefined;
}return {decorator:ei.focused?bT:cW,padding:[2,3],textColor:ek,backgroundColor:en};
}},"textarea":dq,"checkbox":{alias:dc,style:function(eo){var eq;
if(eo.checked){if(eo.disabled){eq=bd;
}else if(eo.focused){eq=ci;
}else if(eo.pressed){eq=z;
}else if(eo.hovered){eq=cL;
}else{eq=bd;
}}else if(eo.undetermined){if(eo.disabled){eq=dF;
}else if(eo.focused){eq=bM;
}else if(eo.hovered){eq=cs;
}else{eq=dF;
}}else if(!eo.disabled){if(eo.focused){eq=dv;
}else if(eo.pressed){eq=cm;
}else if(eo.hovered){eq=by;
}}eq=eq||dg;
var ep=eo.invalid&&!eo.disabled?H:N;
return {icon:L+eq+ep+bk,gap:6};
}},"radiobutton":{alias:dg,include:dg,style:function(er){var et;

if(er.checked&&er.focused){et=U;
}else if(er.checked&&er.disabled){et=dt;
}else if(er.checked&&er.pressed){et=cp;
}else if(er.checked&&er.hovered){et=j;
}else if(er.checked){et=bI;
}else if(er.focused){et=Y;
}else if(er.pressed){et=ca;
}else if(er.hovered){et=F;
}else{et=m;
}var es=er.invalid&&!er.disabled?H:N;
return {icon:L+et+es+bk,shadow:undefined};
}},"spinner":{style:function(eu){return {decorator:eu.focused?bT:cW,textColor:eu.disabled?cX:undefined};
}},"spinner/textfield":{include:dq,style:function(ev){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:df,include:df,style:function(ew){return {icon:W,padding:ew.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:ew.hovered?di:df};
}},"spinner/downbutton":{alias:df,include:df,style:function(ex){return {icon:dG,padding:ex.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:ex.hovered?di:df};
}},"datefield":cF,"datefield/button":{alias:dD,include:dD,style:function(ey){return {icon:cg,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:bi,include:bi,style:function(ez){return {decorator:ez.focused?bT:cW};
}},"groupbox":{style:function(eA){return {backgroundColor:dd};
}},"groupbox/legend":{alias:dc,style:function(eB){return {backgroundColor:dd,textColor:eB.invalid?cG:undefined,padding:[1,0,1,4]};
}},"groupbox/frame":{style:function(eC){return {padding:[12,9],marginTop:10,decorator:cn};
}},"check-groupbox":bW,"check-groupbox/legend":{alias:dg,include:dg,style:function(eD){return {backgroundColor:dd,textColor:eD.invalid?cG:undefined,padding:[1,0,1,4]};
}},"radio-groupbox":bW,"radio-groupbox/legend":{alias:m,include:m,style:function(eE){return {backgroundColor:dd,textColor:eE.invalid?cG:undefined,padding:[1,0,1,4]};
}},"toolbar":{style:function(eF){return {backgroundColor:dd};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(eG){return {decorator:bN,backgroundColor:dd,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(eH){return {margin:[3,2],decorator:ch};
}},"toolbar-button":{alias:dc,style:function(eI){if(eI.pressed||eI.checked||eI.abandoned){var eK=db;
var eJ=[3,2,1,4];
}else if(eI.hovered){var eK=r;
var eJ=[2,3];
}else{var eK=undefined;
var eJ=[3,4];
}return {cursor:n,decorator:eK,padding:eJ,backgroundColor:eI.abandoned?cJ:eI.checked?cC:df};
}},"toolbar-menubutton":{alias:dh,include:dh,style:function(eL){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:bX,include:bX,style:function(eM){return {source:dG};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":dh,"toolbar-splitbutton/arrow":{alias:dh,include:dh,style:function(eN){return {icon:dn};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:df,include:df,style:function(eO){return {icon:eO.vertical?dn:x};
}},"slidebar/button-backward":{alias:df,include:df,style:function(eP){return {icon:eP.vertical?dB:G};
}},"tabview":{},"tabview/bar":{alias:bt,style:function(eQ){var eR=0,eU=0,eS=0,eT=0;

if(eQ.barTop){eS=-2;
}else if(eQ.barBottom){eR=-2;
}else if(eQ.barRight){eT=-2;
}else{eU=-2;
}return {marginBottom:eS,marginTop:eR,marginLeft:eT,marginRight:eU};
}},"tabview/bar/button-forward":{include:dJ,alias:dJ,style:function(eV){if(eV.barTop||eV.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bj,alias:bj,style:function(eW){if(eW.barTop||eW.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(eX){return {backgroundColor:dd,decorator:cY,padding:10};
}},"tabview-page":de,"tabview-page/button":{style:function(eY){var fi;
var fg=0,fe=0,fb=0,fd=0;

if(eY.barTop||eY.barBottom){var fc=2,fa=2,ff=6,fh=6;
}else{var fc=6,fa=6,ff=6,fh=6;
}
if(eY.barTop){fi=cO;
}else if(eY.barRight){fi=cA;
}else if(eY.barBottom){fi=cN;
}else{fi=bv;
}
if(eY.checked){if(eY.barTop||eY.barBottom){ff+=2;
fh+=2;
}else{fc+=2;
fa+=2;
}}else{if(eY.barTop||eY.barBottom){fb+=2;
fg+=2;
}else if(eY.barLeft||eY.barRight){fe+=2;
fd+=2;
}}
if(eY.checked){if(!eY.firstTab){if(eY.barTop||eY.barBottom){fd=-4;
}else{fg=-4;
}}
if(!eY.lastTab){if(eY.barTop||eY.barBottom){fe=-4;
}else{fb=-4;
}}}return {zIndex:eY.checked?10:5,decorator:fi,backgroundColor:dd,padding:[fc,fh,fa,ff],margin:[fg,fe,fb,fd]};
}},"tabview-page/button/label":{alias:bY,style:function(fj){return {padding:[0,1,0,1],margin:fj.focused?0:1,decorator:fj.focused?E:undefined};
}},"tabview-page/button/icon":bX,"tabview-page/button/close-button":{alias:dc,style:function(fk){return {icon:bE};
}},"scrollbar":{},"scrollbar/slider":{alias:a,style:function(fl){return {backgroundColor:cC};
}},"scrollbar/slider/knob":{include:dp,style:function(fm){return {height:14,width:14,minHeight:fm.horizontal?undefined:9,minWidth:fm.horizontal?9:undefined};
}},"scrollbar/button":{alias:df,include:df,style:function(fn){var fo;

if(fn.up||fn.down){if(fn.pressed||fn.abandoned||fn.checked){fo=[5,2,3,4];
}else{fo=[4,3];
}}else{if(fn.pressed||fn.abandoned||fn.checked){fo=[4,3,2,5];
}else{fo=[3,4];
}}var fp=cS;

if(fn.left){fp+=dx;
}else if(fn.right){fp+=bH;
}else if(fn.up){fp+=cr;
}else{fp+=g;
}return {padding:fo,icon:fp};
}},"scrollbar/button-begin":dE,"scrollbar/button-end":dE,"slider":{style:function(fq){var fr;

if(fq.disabled){fr=dl;
}else if(fq.invalid){fr=cE;
}else if(fq.focused){fr=cC;
}else{fr=q;
}return {backgroundColor:fr,decorator:fq.focused?bT:cW};
}},"slider/knob":{include:dp,style:function(fs){return {width:14,height:14,decorator:cY};
}},"tree-folder/open":{style:function(ft){return {source:ft.opened?K:M};
}},"tree-folder":{style:function(fu){return {padding:[2,3,2,0],icon:fu.opened?s:dK,iconOpened:s};
}},"tree-folder/icon":{style:function(fv){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(fw){return {padding:[1,2],backgroundColor:fw.selected?cV:undefined,textColor:fw.selected?da:undefined};
}},"tree-file":{include:o,alias:o,style:function(fx){return {icon:bg};
}},"tree":{include:bR,alias:bR,style:function(fy){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(fz){return {decorator:cB};
}},"treevirtual-folder":{style:function(fA){return {icon:(fA.opened?s:dK)};
}},"treevirtual-file":{include:bc,alias:bc,style:function(fB){return {icon:bg};
}},"treevirtual-line":{style:function(fC){return {icon:bL};
}},"treevirtual-contract":{style:function(fD){return {icon:K};
}},"treevirtual-expand":{style:function(fE){return {icon:M};
}},"treevirtual-only-contract":{style:function(fF){return {icon:v};
}},"treevirtual-only-expand":{style:function(fG){return {icon:y};
}},"treevirtual-start-contract":{style:function(fH){return {icon:ds};
}},"treevirtual-start-expand":{style:function(fI){return {icon:bq};
}},"treevirtual-end-contract":{style:function(fJ){return {icon:e};
}},"treevirtual-end-expand":{style:function(fK){return {icon:dr};
}},"treevirtual-cross-contract":{style:function(fL){return {icon:I};
}},"treevirtual-cross-expand":{style:function(fM){return {icon:bD};
}},"treevirtual-end":{style:function(fN){return {icon:f};
}},"treevirtual-cross":{style:function(fO){return {icon:bJ};
}},"window":{style:function(fP){return {contentPadding:[10,10,10,10],backgroundColor:dd,decorator:fP.maximized?undefined:cY,shadow:fP.maximized?undefined:cD};
}},"window/pane":{},"window/captionbar":{style:function(fQ){return {padding:1,backgroundColor:fQ.active?ck:d,textColor:fQ.active?cd:ct};
}},"window/icon":{style:function(fR){return {marginRight:4};
}},"window/title":{style:function(fS){return {cursor:n,font:dj,marginRight:20,alignY:dm};
}},"window/minimize-button":{include:df,alias:df,style:function(fT){return {icon:i,padding:fT.pressed||fT.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:df,alias:df,style:function(fU){return {icon:cy,padding:fU.pressed||fU.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:df,alias:df,style:function(fV){return {icon:B,padding:fV.pressed||fV.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:df,alias:df,style:function(fW){return {marginLeft:2,icon:bO,padding:fW.pressed||fW.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(fX){return {decorator:db,padding:[2,6]};
}},"window/statusbar-text":bY,"resizer":{style:function(fY){return {decorator:cY};
}},"splitpane":{},"splitpane/splitter":{style:function(ga){return {backgroundColor:dd};
}},"splitpane/splitter/knob":{style:function(gb){return {source:gb.horizontal?X:co,padding:2};
}},"splitpane/slider":{style:function(gc){return {backgroundColor:dw,opacity:0.3};
}},"selectbox":{include:dp,style:function(gd){var ge=df;

if(gd.invalid&&!gd.disabled){ge=cE;
}else if(gd.abandoned){ge=cJ;
}else if(!gd.abandoned&&gd.hovered){ge=di;
}else if(!gd.abandoned&&!gd.hovered&&gd.checked){ge=bf;
}return {backgroundColor:ge};
}},"selectbox/atom":dc,"selectbox/popup":bU,"selectbox/list":bR,"selectbox/arrow":{include:bX,style:function(gf){return {source:dn,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(gg){return {decorator:cY};
}},"datechooser/navigation-bar":{style:function(gh){return {backgroundColor:k,textColor:gh.disabled?cX:gh.invalid?cG:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":bS,"datechooser/last-month-button-tooltip":bS,"datechooser/next-year-button-tooltip":bS,"datechooser/next-month-button-tooltip":bS,"datechooser/last-year-button":cK,"datechooser/last-month-button":cK,"datechooser/next-year-button":cK,"datechooser/next-month-button":cK,"datechooser/button/icon":{},"datechooser/button":{style:function(gi){var gj={width:17,show:cj};

if(gi.lastYear){gj.icon=P;
}else if(gi.lastMonth){gj.icon=G;
}else if(gi.nextYear){gj.icon=cq;
}else if(gi.nextMonth){gj.icon=dC;
}
if(gi.pressed||gi.checked||gi.abandoned){gj.decorator=db;
}else if(gi.hovered){gj.decorator=r;
}else{gj.decorator=undefined;
}
if(gi.pressed||gi.checked||gi.abandoned){gj.padding=[2,0,0,2];
}else if(gi.hovered){gj.padding=1;
}else{gj.padding=2;
}return gj;
}},"datechooser/month-year-label":{style:function(gk){return {font:dj,textAlign:cH};
}},"datechooser/date-pane":{style:function(gl){return {decorator:bB,backgroundColor:k};
}},"datechooser/weekday":{style:function(gm){return {decorator:cf,font:dj,textAlign:cH,textColor:gm.disabled?cX:gm.weekend?l:k,backgroundColor:gm.weekend?k:l};
}},"datechooser/day":{style:function(gn){return {textAlign:cH,decorator:gn.today?cB:undefined,textColor:gn.disabled?cX:gn.selected?da:gn.otherMonth?cX:undefined,backgroundColor:gn.disabled?undefined:gn.selected?bu:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(go){return {textAlign:cH,textColor:l,padding:[2,4],decorator:go.header?A:bF};
}},"combobox":{style:function(gp){var gq;

if(gp.disabled){gq=dl;
}else if(gp.invalid){gq=cE;
}else if(gp.focused){gq=cC;
}else{gq=q;
}return {decorator:gp.focused?bT:cW,textColor:gp.disabled?cX:undefined,backgroundColor:gq};
}},"combobox/button":{alias:df,include:df,style:function(gr){return {icon:dn,backgroundColor:gr.hovered?di:df};
}},"combobox/popup":bU,"combobox/list":bR,"combobox/textfield":{include:dq,style:function(gs){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(gt){var gu={backgroundColor:dd,shadow:cD,decorator:cY,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:gt.submenu||gt.contextmenu?cu:cz};

if(gt.submenu){gu.position=bh;
gu.offset=[-2,-3];
}
if(gt.contextmenu){gu.offset=4;
}return gu;
}},"menu/slidebar":bA,"menu-slidebar":de,"menu-slidebar-button":{style:function(gv){return {backgroundColor:gv.hovered?cV:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:t,style:function(gw){return {icon:gw.hovered?dy:dB};
}},"menu-slidebar/button-forward":{include:t,style:function(gx){return {icon:gx.hovered?C:dn};
}},"menu-separator":{style:function(gy){return {height:0,decorator:D,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:dc,style:function(gz){return {backgroundColor:gz.selected?cV:undefined,textColor:gz.selected?da:undefined,padding:[2,6]};
}},"menu-button/icon":{include:bX,style:function(gA){return {alignY:dm};
}},"menu-button/label":{include:bY,style:function(gB){return {alignY:dm,padding:1};
}},"menu-button/shortcut":{include:bY,style:function(gC){return {alignY:dm,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:bX,style:function(gD){return {source:gD.selected?dA:dC,alignY:dm};
}},"menu-checkbox":{alias:bP,include:bP,style:function(gE){return {icon:!gE.checked?undefined:gE.selected?cv:S};
}},"menu-radiobutton":{alias:bP,include:bP,style:function(gF){return {icon:!gF.checked?undefined:gF.selected?c:cP};
}},"menubar":{style:function(gG){return {backgroundColor:dd,decorator:cY};
}},"menubar-button":{alias:dc,style:function(gH){return {padding:[2,6],backgroundColor:gH.pressed||gH.hovered?cV:undefined,textColor:gH.pressed||gH.hovered?da:undefined};
}},"colorselector":de,"colorselector/control-bar":de,"colorselector/visual-pane":bW,"colorselector/control-pane":de,"colorselector/preset-grid":de,"colorselector/colorbucket":{style:function(gI){return {decorator:db,width:16,height:16};
}},"colorselector/preset-field-set":bW,"colorselector/input-field-set":bW,"colorselector/preview-field-set":bW,"colorselector/hex-field-composite":de,"colorselector/hex-field":dq,"colorselector/rgb-spinner-composite":de,"colorselector/rgb-spinner-red":dk,"colorselector/rgb-spinner-green":dk,"colorselector/rgb-spinner-blue":dk,"colorselector/hsb-spinner-composite":de,"colorselector/hsb-spinner-hue":dk,"colorselector/hsb-spinner-saturation":dk,"colorselector/hsb-spinner-brightness":dk,"colorselector/preview-content-old":{style:function(gJ){return {decorator:db,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(gK){return {decorator:db,backgroundColor:bQ,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(gL){return {decorator:db,margin:5};
}},"colorselector/brightness-field":{style:function(gM){return {decorator:db,margin:[5,7]};
}},"colorselector/hue-saturation-pane":de,"colorselector/hue-saturation-handle":de,"colorselector/brightness-pane":de,"colorselector/brightness-handle":de,"table":de,"table/statusbar":{style:function(gN){return {decorator:cb,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:df,style:function(gO){var gQ,gP;

if(gO.pressed||gO.checked||gO.abandoned){gQ=db;
gP=[3,2,1,4];
}else if(gO.hovered){gQ=r;
gP=[2,3];
}else{gQ=undefined;
gP=[3,4];
}return {decorator:gQ,padding:gP,backgroundColor:gO.abandoned?cJ:df,icon:w};
}},"table-column-reset-button":{extend:bP,alias:bP,style:function(){return {icon:bG};
}},"table-scroller/scrollbar-x":cI,"table-scroller/scrollbar-y":cI,"table-scroller":de,"table-scroller/header":{style:function(gR){return {decorator:bb,backgroundColor:u};
}},"table-scroller/pane":{style:function(gS){return {backgroundColor:ba};
}},"table-scroller/focus-indicator":{style:function(gT){return {decorator:bn};
}},"table-scroller/resize-line":{style:function(gU){return {backgroundColor:ce,width:3};
}},"table-header-cell":{alias:dc,style:function(gV){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:gV.hovered?0:2,decorator:gV.hovered?h:be,backgroundColor:gV.hovered?bw:be,sortIcon:gV.sorted?(gV.sortedAscending?bK:cR):undefined};
}},"table-header-cell/icon":{style:function(gW){return {marginRight:4};
}},"table-header-cell/sort-icon":{style:function(gX){return {alignY:dm};
}},"table-editor-textfield":{include:dq,style:function(gY){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:p,alias:p,style:function(ha){return {padding:[0,2]};
}},"table-editor-combobox":{include:cF,alias:cF,style:function(hb){return {decorator:undefined};
}},"colorpopup":{alias:bU,include:bU,style:function(hc){return {decorator:cY,padding:5,backgroundColor:dd};
}},"colorpopup/field":{style:function(hd){return {decorator:db,margin:2,width:14,height:14,backgroundColor:dd};
}},"colorpopup/selector-button":df,"colorpopup/auto-button":df,"colorpopup/preview-pane":bW,"colorpopup/current-preview":{style:function(he){return {height:20,padding:4,marginLeft:4,decorator:db,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hf){return {height:20,padding:4,marginRight:4,decorator:db,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:df,include:df,style:function(hg){return {icon:bs};
}},"colorpopup/colorselector-cancelbutton":{alias:df,include:df,style:function(hh){return {icon:bz};
}},"virtual-list":bR,"virtual-list/row-layer":cQ,"row-layer":de,"column-layer":de,"group-item":{include:bY,alias:bY,style:function(hi){return {padding:4,backgroundColor:bm,textColor:bQ,font:dj};
}},"virtual-selectbox":p,"virtual-selectbox/dropdown":bU,"virtual-selectbox/dropdown/list":{alias:dH},"virtual-combobox":cF,"virtual-combobox/dropdown":bU,"virtual-combobox/dropdown/list":{alias:dH},"virtual-tree":bR,"virtual-tree-folder":o,"virtual-tree-file":cT,"cell":{style:function(hj){return {backgroundColor:hj.selected?cc:J,textColor:hj.selected?da:dI,padding:[3,6]};
}},"cell-string":bV,"cell-number":{include:bV,style:function(hk){return {textAlign:Q};
}},"cell-image":bV,"cell-boolean":bV,"cell-atom":bV,"cell-date":bV,"cell-html":bV,"htmlarea":{"include":de,style:function(hl){return {backgroundColor:bQ};
}},"progressbar":{style:function(hm){return {decorator:cU,padding:[1],backgroundColor:bQ};
}},"progressbar/progress":{style:function(hn){return {backgroundColor:hn.disabled?dl:cV};
}},"app-header":{style:function(ho){return {textColor:da,backgroundColor:cV,padding:[8,12]};
}},"app-header-label":bY}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a},icons:{}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",z=";'></div>",y="<div style='",x="qx.debug",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",o='") ',p="sliceTop",m='url("',n="hidden",k="repeatY",l="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(A,B){qx.ui.decoration.Abstract.call(this);
if(A!=null){this.setBorderImage(A);
}
if(B!=null){this.setSlice(B);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[p,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,k],mode:c}},members:{__ue:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ue;
},getMarkup:function(){if(this.__ue){return this.__ue;
}var C=this._resolveImageUrl(this.getBorderImage());
var D=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var E=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__ue=[y,qx.bom.element.Style.compile({"borderImage":m+C+o+D.join(f)+f+E,position:l,lineHeight:0,fontSize:0,overflow:n,boxSizing:r,borderWidth:D.join(b)+g}),z].join(q);
return this.__ue;
},resize:function(F,G,H){F.style.width=G+g;
F.style.height=H+g;
},tint:function(I,J){},_applyStyle:function(){if(qx.core.Environment.get(x)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},_resolveImageUrl:function(K){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(K));
}},destruct:function(){this.__ue=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="engine.version",e="scale-x",d="scale-y",c="-tr",b="-l",a='</div>',A="scale",z="-br",y="-t",x="browser.quirksmode",w="-tl",v="-r",u='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',t="qx.debug",s="_applyBaseImage",r="-b",p="String",q="",n="-bl",o="qx.ui.decoration.GridDiv",l="-c",m="mshtml",k="engine.name";
qx.Class.define(o,{extend:qx.ui.decoration.Abstract,construct:function(B,C){qx.ui.decoration.Abstract.call(this);
if(B!=null){this.setBaseImage(B);
}
if(C!=null){this.setInsets(C);
}},properties:{baseImage:{check:p,nullable:true,apply:s}},members:{__uf:null,__ug:null,__uh:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__uf;
},getMarkup:function(){if(this.__uf){return this.__uf;
}var D=qx.bom.element.Decoration;
var E=this.__ug;
var F=this.__uh;
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
return this.__uf=G.join(q);
},resize:function(H,I,J){var K=this.__uh;
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
}}}},tint:function(L,M){},_applyBaseImage:function(N,O){if(qx.core.Environment.get(t)){if(this.__uf){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}
if(N){var S=this._resolveImageUrl(N);
var T=/(.*)(\.[a-z]+)$/.exec(S);
var R=T[1];
var Q=T[2];
var P=this.__ug={tl:R+w+Q,t:R+y+Q,tr:R+c+Q,bl:R+n+Q,b:R+r+Q,br:R+z+Q,l:R+b+Q,c:R+l+Q,r:R+v+Q};
this.__uh=this._computeEdgeSizes(P);
}},_resolveImageUrl:function(U){return qx.util.AliasManager.getInstance().resolve(U);
},_computeEdgeSizes:function(V){var W=qx.util.ResourceManager.getInstance();
return {top:W.getImageHeight(V.t),bottom:W.getImageHeight(V.b),left:W.getImageWidth(V.l),right:W.getImageWidth(V.r)};
}},destruct:function(){this.__uf=this.__ug=this.__uh=null;
}});
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
},FORMAT_STACK:null,escapeHTML:function(bb){return String(bb).replace(/[<>&"']/g,this.__tk);
},__tk:function(bc){var bd={"<":s,">":F,"&":o,"'":p,'"':u};
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
this.__tl=X;
this.__tm=X.childNodes[1];
this.__tn=X.childNodes[2].firstChild;
this.__ts();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__tt,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__tm.innerHTML=k;
},process:function(bb){this.__tm.appendChild(qx.log.appender.Util.toHtml(bb));
this.__to();
},__to:function(){this.__tm.scrollTop=this.__tm.scrollHeight;
},__tp:true,toggle:function(){if(!this.__tl){this.init();
}else if(this.__tl.style.display==h){this.show();
}else{this.__tl.style.display=h;
}},show:function(){if(!this.__tl){this.init();
}else{this.__tl.style.display=K;
this.__tm.scrollTop=this.__tm.scrollHeight;
}},__tq:[],execute:function(){var be=this.__tn.value;

if(be==k){return;
}
if(be==u){return this.clear();
}var bc=document.createElement(V);
bc.innerHTML=qx.log.appender.Util.escapeHTML(C+be);
bc.className=U;
this.__tq.push(be);
this.__tr=this.__tq.length;
this.__tm.appendChild(bc);
this.__to();

try{var bd=window.eval(be);
}catch(bf){qx.log.Logger.error(bf);
}
if(bd!==undefined){qx.log.Logger.debug(bd);
}},__ts:function(e){this.__tm.style.height=(this.__tl.clientHeight-this.__tl.firstChild.offsetHeight-this.__tl.lastChild.offsetHeight)+c;
},__tt:function(e){var bh=e.getKeyIdentifier();
if((bh==H)||(bh==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__tl){return;
}if(!qx.dom.Hierarchy.contains(this.__tl,e.getTarget())){return;
}if(bh==d&&this.__tn.value!=k){this.execute();
this.__tn.value=k;
}if(bh==i||bh==E){this.__tr+=bh==i?-1:1;
this.__tr=Math.min(Math.max(0,this.__tr),this.__tq.length);
var bg=this.__tq[this.__tr];
this.__tn.value=bg||k;
this.__tn.select();
}}},defer:function(bi){qx.event.Registration.addListener(document.documentElement,g,bi.__tt,bi);
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
qx.Class.define(bR,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bk,h,f,bN,bI,q,cD,Y,F,z,R,l,bM,m,bJ,cd,bt,bj,bC,cF,cn,ch,bs,by,cC,cx,a,D,o,B,co,bp,cH,C,e,bl,v,s,cs,bu,d,bz,bm,u,g,bK,bd,bx,k,N,ba,H,ct,c,bO,bT,bi,X,bW,n,y,cc,cr],"document":[cG,bs,cy,cA,bn,O,p,bw,b,cj,ci,ce,bq,cw,Q,bD,bP,t,bf,bX,T,cB,bU,ck],"body":[cE,bG,r,w,bQ,E,bS,ca,cv,be,ch,bA,W,K,cz,bq,ce,bE,A,bY,S,bH,bv,J,cq,x,L,U,ck,I,ci,cj,j,V,P,bo,bL]},getInfo:function(cI){var cJ=qx.dev.Pollution.getTextList(cI||cn);

if(cJ){return cp+cJ;
}else{return G;
}},extract:function(cK){var cM=[];
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
},getHtmlTable:function(cR){var cT=[];
var cS=bh;
var cV=cu;
var cW=bB;
cT.push(M);
var cU=this.extract(cR);

for(var i=0;i<cU.length;i++){cT.push(cS+cU[i].key+cV+cU[i].value+cW);
}cT.push(bg);
return cT.join(cl);
},getTextList:function(cX){var da=[];
var db=bb;
var dc=bc;
var cY=this.extract(cX);

for(var i=0;i<cY.length;i++){da.push(cY[i].key+db+cY[i].value+dc);
}return da.join(cl);
}}});
})();


qx.$$loader.init();

