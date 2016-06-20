(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"feedreader.MobileApplication","qx.revision":"28147","qx.theme":"qx.theme.Modern","qx.version":"1.4.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"feedreader.MobileApplication","qx.debug":false,"qx.mobile.emulatetouch":true,"qx.nativeScrollBars":true,"qx.revision":"28147","qx.theme":"qx.theme.Modern","qx.version":"1.4.2"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"feedreader":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.4.2"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:feedreader.js"]],
  urisBefore : [],
  packageHashes : {"0":"1583ededbbb7"},
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : false,
  
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

qx.$$packageData['1583ededbbb7']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Zone"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"EEE, d.M.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan.","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb.","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr.","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Juni","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"Tag","dayperiod":"Tageshälfte","era":"Epoche","hour":"Stunde","minute":"Minute","month":"Monat","quotationEnd":"“","quotationStart":"„","second":"Sekunde","week":"Woche","weekday":"Wochentag","year":"Jahr","zone":"Zone"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Zone"},"es":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"a.m.","cldr_date_format_full":"EEEE d 'de' MMMM 'de' y","cldr_date_format_long":"d 'de' MMMM 'de' y","cldr_date_format_medium":"dd/MM/yyyy","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMd":"d 'de' MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd-MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_h":"hh a","cldr_date_time_format_hm":"hh:mm a","cldr_date_time_format_hms":"hh:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE d/M/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d MMM y","cldr_date_time_format_yMMMM":"MMMM 'de' y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM-yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ 'de' yy","cldr_date_time_format_yyyyMM":"MM/yyyy","cldr_day_format_abbreviated_fri":"vie","cldr_day_format_abbreviated_mon":"lun","cldr_day_format_abbreviated_sat":"sáb","cldr_day_format_abbreviated_sun":"dom","cldr_day_format_abbreviated_thu":"jue","cldr_day_format_abbreviated_tue":"mar","cldr_day_format_abbreviated_wed":"mié","cldr_day_format_wide_fri":"viernes","cldr_day_format_wide_mon":"lunes","cldr_day_format_wide_sat":"sábado","cldr_day_format_wide_sun":"domingo","cldr_day_format_wide_thu":"jueves","cldr_day_format_wide_tue":"martes","cldr_day_format_wide_wed":"miércoles","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"ene","cldr_month_format_abbreviated_10":"oct","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dic","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"abr","cldr_month_format_abbreviated_5":"may","cldr_month_format_abbreviated_6":"jun","cldr_month_format_abbreviated_7":"jul","cldr_month_format_abbreviated_8":"ago","cldr_month_format_abbreviated_9":"sep","cldr_month_format_wide_1":"enero","cldr_month_format_wide_10":"octubre","cldr_month_format_wide_11":"noviembre","cldr_month_format_wide_12":"diciembre","cldr_month_format_wide_2":"febrero","cldr_month_format_wide_3":"marzo","cldr_month_format_wide_4":"abril","cldr_month_format_wide_5":"mayo","cldr_month_format_wide_6":"junio","cldr_month_format_wide_7":"julio","cldr_month_format_wide_8":"agosto","cldr_month_format_wide_9":"septiembre","cldr_month_stand-alone_narrow_1":"E","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"p.m.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"día","dayperiod":"periodo del día","era":"era","hour":"hora","minute":"minuto","month":"mes","quotationEnd":"’","quotationStart":"‘","second":"segundo","week":"semana","weekday":"día de la semana","year":"año","zone":"zona"},"fr":{"alternateQuotationEnd":"›","alternateQuotationStart":"‹","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"EEE d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"EEE d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"jour","dayperiod":"cadran","era":"ère","hour":"heure","minute":"minute","month":"mois","quotationEnd":"»","quotationStart":"«","second":"seconde","week":"semaine","weekday":"jour de la semaine","year":"année","zone":"fuseau horaire"},"it":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"m.","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"dd MMMM y","cldr_date_format_medium":"dd/MMM/y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"EEE d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"EEE d MMM","cldr_date_time_format_MMMMdd":"dd MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_h":"hh a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, d/M/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yQ":"Q-yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven","cldr_day_format_abbreviated_mon":"lun","cldr_day_format_abbreviated_sat":"sab","cldr_day_format_abbreviated_sun":"dom","cldr_day_format_abbreviated_thu":"gio","cldr_day_format_abbreviated_tue":"mar","cldr_day_format_abbreviated_wed":"mer","cldr_day_format_wide_fri":"venerdì","cldr_day_format_wide_mon":"lunedì","cldr_day_format_wide_sat":"sabato","cldr_day_format_wide_sun":"domenica","cldr_day_format_wide_thu":"giovedì","cldr_day_format_wide_tue":"martedì","cldr_day_format_wide_wed":"mercoledì","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"G","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Venerdì","cldr_day_stand-alone_wide_mon":"Lunedì","cldr_day_stand-alone_wide_sat":"Sabato","cldr_day_stand-alone_wide_sun":"Domenica","cldr_day_stand-alone_wide_thu":"Giovedì","cldr_day_stand-alone_wide_tue":"Martedì","cldr_day_stand-alone_wide_wed":"Mercoledì","cldr_month_format_abbreviated_1":"gen","cldr_month_format_abbreviated_10":"ott","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dic","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"apr","cldr_month_format_abbreviated_5":"mag","cldr_month_format_abbreviated_6":"giu","cldr_month_format_abbreviated_7":"lug","cldr_month_format_abbreviated_8":"ago","cldr_month_format_abbreviated_9":"set","cldr_month_format_wide_1":"gennaio","cldr_month_format_wide_10":"ottobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"dicembre","cldr_month_format_wide_2":"febbraio","cldr_month_format_wide_3":"marzo","cldr_month_format_wide_4":"aprile","cldr_month_format_wide_5":"maggio","cldr_month_format_wide_6":"giugno","cldr_month_format_wide_7":"luglio","cldr_month_format_wide_8":"agosto","cldr_month_format_wide_9":"settembre","cldr_month_stand-alone_narrow_1":"G","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"G","cldr_month_stand-alone_narrow_7":"L","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"Gennaio","cldr_month_stand-alone_wide_10":"Ottobre","cldr_month_stand-alone_wide_11":"Novembre","cldr_month_stand-alone_wide_12":"Dicembre","cldr_month_stand-alone_wide_2":"Febbraio","cldr_month_stand-alone_wide_3":"Marzo","cldr_month_stand-alone_wide_4":"Aprile","cldr_month_stand-alone_wide_5":"Maggio","cldr_month_stand-alone_wide_6":"Giugno","cldr_month_stand-alone_wide_7":"Luglio","cldr_month_stand-alone_wide_8":"Agosto","cldr_month_stand-alone_wide_9":"Settembre","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"p.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"giorno","dayperiod":"periodo del giorno","era":"era","hour":"ora","minute":"minuto","month":"mese","quotationEnd":"’","quotationStart":"‘","second":"secondo","week":"settimana","weekday":"giorno della settimana","year":"anno","zone":"zona"},"nl":{"alternateQuotationEnd":"’","alternateQuotationStart":"‚","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd-MM-yy","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d-M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMd":"d-MM","cldr_date_time_format_MMdd":"dd-MM","cldr_date_time_format_Md":"d-M","cldr_date_time_format_d":"d","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M-y","cldr_date_time_format_yMEd":"EEE d-M-y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM-yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"vr","cldr_day_format_abbreviated_mon":"ma","cldr_day_format_abbreviated_sat":"za","cldr_day_format_abbreviated_sun":"zo","cldr_day_format_abbreviated_thu":"do","cldr_day_format_abbreviated_tue":"di","cldr_day_format_abbreviated_wed":"wo","cldr_day_format_wide_fri":"vrijdag","cldr_day_format_wide_mon":"maandag","cldr_day_format_wide_sat":"zaterdag","cldr_day_format_wide_sun":"zondag","cldr_day_format_wide_thu":"donderdag","cldr_day_format_wide_tue":"dinsdag","cldr_day_format_wide_wed":"woensdag","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"Z","cldr_day_stand-alone_narrow_sun":"Z","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"jan.","cldr_month_format_abbreviated_10":"okt.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"dec.","cldr_month_format_abbreviated_2":"feb.","cldr_month_format_abbreviated_3":"mrt.","cldr_month_format_abbreviated_4":"apr.","cldr_month_format_abbreviated_5":"mei","cldr_month_format_abbreviated_6":"jun.","cldr_month_format_abbreviated_7":"jul.","cldr_month_format_abbreviated_8":"aug.","cldr_month_format_abbreviated_9":"sep.","cldr_month_format_wide_1":"januari","cldr_month_format_wide_10":"oktober","cldr_month_format_wide_11":"november","cldr_month_format_wide_12":"december","cldr_month_format_wide_2":"februari","cldr_month_format_wide_3":"maart","cldr_month_format_wide_4":"april","cldr_month_format_wide_5":"mei","cldr_month_format_wide_6":"juni","cldr_month_format_wide_7":"juli","cldr_month_format_wide_8":"augustus","cldr_month_format_wide_9":"september","cldr_month_stand-alone_abbreviated_1":"jan","cldr_month_stand-alone_abbreviated_10":"okt","cldr_month_stand-alone_abbreviated_11":"nov","cldr_month_stand-alone_abbreviated_12":"dec","cldr_month_stand-alone_abbreviated_2":"feb","cldr_month_stand-alone_abbreviated_3":"mrt","cldr_month_stand-alone_abbreviated_4":"apr","cldr_month_stand-alone_abbreviated_6":"jun","cldr_month_stand-alone_abbreviated_7":"jul","cldr_month_stand-alone_abbreviated_8":"aug","cldr_month_stand-alone_abbreviated_9":"sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"Dag","dayperiod":"AM/PM","era":"Tijdperk","hour":"Uur","minute":"Minuut","month":"Maand","quotationEnd":"”","quotationStart":"„","second":"Seconde","week":"Week","weekday":"Dag van de week","year":"Jaar","zone":"Zone"},"ro":{"alternateQuotationEnd":"»","alternateQuotationStart":"«","cldr_am":"AM","cldr_date_format_full":"EEEE, d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yyyy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d MMM","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEEEd":"EEE, d MMM","cldr_date_time_format_MMMEd":"E, d MMM","cldr_date_time_format_MMMMEd":"E, d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMdd":"dd.MM","cldr_date_time_format_Md":"d.M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.yyyy","cldr_date_time_format_yMEd":"EEE, d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'trimestrul' Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyyyMM":"MM.yyyy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Vi","cldr_day_format_abbreviated_mon":"Lu","cldr_day_format_abbreviated_sat":"Sâ","cldr_day_format_abbreviated_sun":"Du","cldr_day_format_abbreviated_thu":"Jo","cldr_day_format_abbreviated_tue":"Ma","cldr_day_format_abbreviated_wed":"Mi","cldr_day_format_wide_fri":"vineri","cldr_day_format_wide_mon":"luni","cldr_day_format_wide_sat":"sâmbătă","cldr_day_format_wide_sun":"duminică","cldr_day_format_wide_thu":"joi","cldr_day_format_wide_tue":"marți","cldr_day_format_wide_wed":"miercuri","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"ian.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"dec.","cldr_month_format_abbreviated_2":"feb.","cldr_month_format_abbreviated_3":"mar.","cldr_month_format_abbreviated_4":"apr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"iun.","cldr_month_format_abbreviated_7":"iul.","cldr_month_format_abbreviated_8":"aug.","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"ianuarie","cldr_month_format_wide_10":"octombrie","cldr_month_format_wide_11":"noiembrie","cldr_month_format_wide_12":"decembrie","cldr_month_format_wide_2":"februarie","cldr_month_format_wide_3":"martie","cldr_month_format_wide_4":"aprilie","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"iunie","cldr_month_format_wide_7":"iulie","cldr_month_format_wide_8":"august","cldr_month_format_wide_9":"septembrie","cldr_month_stand-alone_narrow_1":"I","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"I","cldr_month_stand-alone_narrow_7":"I","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"zi","dayperiod":"perioada zilei","era":"eră","hour":"oră","minute":"minut","month":"lună","quotationEnd":"”","quotationStart":"„","second":"secundă","week":"săptămână","weekday":"zi a săptămânii","year":"an","zone":"zonă"},"sv":{"alternateQuotationEnd":"’","alternateQuotationStart":"’","cldr_am":"fm","cldr_date_format_full":"EEEE'en' 'den' d:'e' MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"yyyy-MM-dd","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Hm":"HH.mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEEEd":"EEE d:'e' MMMM","cldr_date_time_format_MMMMEd":"E d:'e' MMMM","cldr_date_time_format_MMMMd":"d:'e' MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMd":"d/M","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h.mm a","cldr_date_time_format_hms":"h.mm.ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-MM","cldr_date_time_format_yMEd":"EEE, yyyy-MM-dd","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yQ":"yyyy Q","cldr_date_time_format_yQQQ":"y QQQ","cldr_date_time_format_yyMM":"yy-MM","cldr_date_time_format_yyMMM":"MMM -yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyyyMM":"yyyy-MM","cldr_date_time_format_yyyyMMM":"MMM y","cldr_date_time_format_yyyyQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"fre","cldr_day_format_abbreviated_mon":"mån","cldr_day_format_abbreviated_sat":"lör","cldr_day_format_abbreviated_sun":"sön","cldr_day_format_abbreviated_thu":"tors","cldr_day_format_abbreviated_tue":"tis","cldr_day_format_abbreviated_wed":"ons","cldr_day_format_wide_fri":"fredag","cldr_day_format_wide_mon":"måndag","cldr_day_format_wide_sat":"lördag","cldr_day_format_wide_sun":"söndag","cldr_day_format_wide_thu":"torsdag","cldr_day_format_wide_tue":"tisdag","cldr_day_format_wide_wed":"onsdag","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"L","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"O","cldr_month_format_abbreviated_1":"jan","cldr_month_format_abbreviated_10":"okt","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dec","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"apr","cldr_month_format_abbreviated_5":"maj","cldr_month_format_abbreviated_6":"jun","cldr_month_format_abbreviated_7":"jul","cldr_month_format_abbreviated_8":"aug","cldr_month_format_abbreviated_9":"sep","cldr_month_format_wide_1":"januari","cldr_month_format_wide_10":"oktober","cldr_month_format_wide_11":"november","cldr_month_format_wide_12":"december","cldr_month_format_wide_2":"februari","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"april","cldr_month_format_wide_5":"maj","cldr_month_format_wide_6":"juni","cldr_month_format_wide_7":"juli","cldr_month_format_wide_8":"augusti","cldr_month_format_wide_9":"september","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"em","cldr_time_format_full":"'kl'. HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"dag","dayperiod":"fm/em","era":"era","hour":"timme","minute":"minut","month":"månad","quotationEnd":"”","quotationStart":"”","second":"sekund","week":"vecka","weekday":"veckodag","year":"år","zone":"tidszon"}},"resources":{"feedreader/images/combined/icons16.b64.json":[-1,-1,"b64","feedreader",{"qx/icon/Tango/16/actions/dialog-apply.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAG/SURBVDjLY/j//z8DJZhohX7LGMSDl/KpkmVAQwMDU/VBy7M9Fz3fFe7UXRo6lYGHJAMS14kXzrwb9qfntsP/ibe8/4ct444n2gCH+QwcXae8bk2+6/W//prm/6YTdtfSZjKwEm1AxmbFnlkPIv7XXlf533nd+k/yJqksosPAdyaDyIQLQU+bbur8r7mu9L/hqN1JnIEIcmrJXsNFSRtF/GBiedu1lsx+GP6/+obi/86rDt8TNoj44jSgar/lhjUviv7Pv532KWuLakv4Ih7NqVcj3nXcMfvfeEvrf+0h69040wEoWqZdiXq58kX2/5Uvcv4vfpj+p+OE9/1FTxP/199U/d91yeVD1FJ+Y7wJKXOzYsqcGwmvlr1I+7/4WfL/BU9i/3feM//fftf0f8V+01VEpcToFUIWwEC7NeOx7//mO7r/G25r/O+84PoiaAmnDNFJOXQ+t0TDEftj/fcd/vfetf1fuENnOtF5AQrY5fQYBIu2GayrO2B3Q96OQREoJgLEgkDMA5IHKcIwAAiYgJgbiIWBWBqIlRnYGHSBtAkQ64D5EHGQPAfMEEwnQQxihSrigWIuqM3MQMyIrB4AJtVknc64C6YAAAAASUVORK5CYII=","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/actions/dialog-cancel.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIYSURBVDjLY/j//z8DJRiFc2oeZ8SBfgYZsgzY3c7A/Ox8yp3bexy3HuhjkL2wSrrpyemog49Phu29tklt4rEZDB54Dbi4Sqny6/PGf58e1/x8d6/sx9eX9f+/PMv4/+Vp+v9vL8r+f3pU+fveocA9+3oY+DEMANrO+upG9aNvr5r/f3vV8P8bUPPnR0H/399S/P/uuhgQ8///eNfk/9cX1f+fX8x9CFTPi2LAlY0GrT/eL///490MsAEfbqn9f3HR6/3DY55HHp3wOfT8vO+L9zfl/r+9wgR0Vf7/e4dCtsMNAJrG8f7+5Bff3/T8//I4+v/ba1z/315l/v/kTOBtoBwbSNHhKQzi9w97nXt/UwYox/b/45POX4cmMeiDDQAyVG9sN1lxZ6/NunuHXLc9POa379HJoKOPjgedAwZcOMymI1MZZF9eCn779grD/89PEv6fXyFegxGNhPDTM+FnQAa8v6X8//HpxM2kG3A24hzYAKBX7h/2XUGSAUCvyr+8EvkGZMDHex7/Ty/gTSXaAGBg8j09m3j3/Q3J/yADXl0J+gwUEybagJPzeJM/3g8Ga/5wx/b/3QNeW7DmBShgB2IeIBYEYhEgFnXQY5B9djH9ycf77v/vHPQ7CEr2GAYAARMQcwOxMBBLA7EyEOsAsQmInlElFndmnd0KRQkGcSCfA6QBqxegBrFCFfFAMRfUZcxAzIisHgDm44a2RTD5KwAAAABJRU5ErkJggg==","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/actions/dialog-ok.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGrSURBVDjLpZM7aBRRFIa/c2Ym2dlkJ9ENq4GNwTwgWqRyFWwsxPgoIggpgrXbaCMSTSEIVqbVRuy3EISgWNqIgoj4goCFFlqIWPrYZOd1r4UTXGbHIuyBrzr3/Pc/l/+KtZZ+Sumz+hZwdzpw6c6z1yOBX3dEoufvvyzvWGAk8OuVylBt2HdRkcP/XaHRbJULd1YRABFQEelxcPTi/dqB/bW7B2f2loAz+b7nqLiO4oqi2iXQaLZ0ql69sXhs7sKesWB84+O3N8evrF/OC5w4MuV6juC5gqMqYq3l1Oqj04fmxm9NT1TnTXaw5DmoCIkxxIkhNhZPldRYosQQ+C4PnmxccwFGh0vL5SF/+vvPEEeEMDF0opQwNpiCoLkq7K54aRgln2Q7iQtXH56d3Ve9ObormO/EhkEx7c0w3tK/D2YtoIIVBLDpj19bL99++HpOuqPcaLbKs5O125MTY0vt35tPX7z7vAQYwHbz6t75f0PW2h4WVtZPLl5/vFbUyyP5zyQiCgwAXoYCkjlJgQSIgKhHQEQ8oFTAANDJ0QY6RQ4AnBxkt29jbDb4B/fwwJ5uNzYyAAAAAElFTkSuQmCC","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/actions/document-new.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGNSURBVDiNjZM/b9NwEIafu9hVbVk0jSJlKH8WJFhSFNHP0LlTPwELExMrn4CPgpgQaxZYWIjaTpEQSkUykILAiYJN7N+x1K6JXSknnXTD3fO+9/sjZsY2sVoeCrALtIA0jM7WAFIARqPReRiGHVXFOSfFoJlhljObXUQ7/tcPR08/v3PuYgY6DKOz3yVgPB7PPc/rqioispELkj+f6HS+s7d3amn67Iu52RtovdJCSUQohlX1v2xpRrcbsN95ibYeSBC+fyh69xTcPa2seStE1GP99yNmPwHI8xXmLu8AmVcFlAPX1osaIjz/EWnyGtUIswUgb0G+1RxU1W/qgNydkCRPSJKMqx/3F6AvwujceU2AqvpNBhjH5O6Y1eoqPTh4ngCUADOrnf4mpClKQP3q6pBqbw3Q5KAJUvQ1ArZxsvn0tQrY3PM2SCNgm2j6eOUKy+Xyl4h4IiJmVshoRd1dq7s4juMaYDgcPgb86XSqk8nEm8/nfhzHPkAQBHm73V73er2s3+9nwHowGADwD3RnnM0c08RlAAAAAElFTkSuQmCC","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/apps/preferences-locale.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAISSURBVDjLpZM9b9NQGIXP/bB9bSdOE5o2oQUJgcSAOiBmBib+BRJCSGwsiD9BR3YQiB/AhBhAjAy0S4uoSlW1hbapQuwktmO7174vC1RFZKl6pHc9enT0PoyIcJ5wnDMSAB48vH/n2G4/Y/O3N2o11UkmRTdKMzeZFPuM2M881/tkqrDZDDozdX/Rknxh7evO89U3j15LALAs6+ZMu32pfnXxlud7OBiMEPci2CK/0r3QgBQSaUFwHRu+a0NJDrG5F5wQAEBgFTocJaHne62FlgeqNPLChhACxDiut32MswqcC+DUbicbSG5MnhU9AqHb9OA5Eu2Gi16UwXck5hoKrZqDblNNH9FUhnSpj0AAAXAsASJCWRns9lPoyoAAMMb+H9EYA0MGknOPAJSVAWcMrbrC5bkKs4EPIsAWDGFcTCcoSwNpWZ3JpMBuP0W74WLjRwQiwkGY4miYgXOGMD6eXhAXTCjbvhgfbmMc51jZ6iPwbAzGOWrKQpxprGwNQNP+AACiQjnOZHKQ9/akXbnfR2lW7iT5PHExPxwXs57nc99mpkiG0fhXsc0MWz8pICLqusNkb/XltWOt771afvzib3Hn7rJfd8ySUN4N0nqNGf1t4+3T+B8CIfhIStnrD8IlV6kvpxF775+kAD7/uekuKKU2gyB4p7VGVer1M7ugXHe9MRMcRnGy/+njhzPpyc6r829GePTTtfegxAAAAABJRU5ErkJggg==","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/apps/preferences-theme.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJASURBVDiNhZJNaxNRFIaf+zF32iQtaRPaNKkIRtCFCxelRRcqXYhC/4FfqLhQ3Ii/QEr3KrjSlZuKP0EqbrpzIbgQa0tRSmMbY79MMsnMnbkuSoNa2xw4i8PlfXnue45wztGt7s68eohUJ5ME4thWRNSceT59OwTQ3cR3pl+/DGOurX9bIAgTegplhvv7JoBLAPIw8YNn7xptP3+1fOwota0W1Y0mQ7kBQm/g4v0nb1tdCXpTKdOvpfj0PeD02UmiMGK1rShmlJBS6K4GNrLYEBq/6ujPH1CtFubUOLHvEYpd+I7B7OzsvZGRkcfOOZ0kCUmS2H4XyNUdQ9pzZKI2KZkQbK/TlIP09Pt0Mpifn/9aKpWeFotFr1qtilqtJgqFgnfmeEZeGc/QDgIMMb7RqGbjL0oNkM/njyilpJSSsbExoigiiiJGR0vEcQKsobVCeWrfNzVAkiRks1kWFhZ4MzeHkILJ8xcol8ts7+wAoLRC6f0GEiCKItrtNoVCgbXqOouLX/CMIQgCrLX09Rq0b/A8TY/R9KUMSkohhBjSANZagiCg3mggBeRzWRaXlsjncgDOJFvvg5R/woZhWg6nPqpow9Z//tj8awt7J50bHCCd6UUKAYCA5MWj6xP/ogshtHPOyj/FAMYYjGcOOo1OOedsJ4M4jjsPvu/j+35nttYihCgdZCSFEGZlZaVWqVTqmxsb9dDGrl5vkU6nm5VKpb68vFwFRg5DAUixm4e+PDWVvXHz1rm9GcgAyjnH//o3B/f3lEZT1kYAAAAASUVORK5CYII=","encoding":"base64","height":16,"type":"png","width":16}}],"feedreader/images/combined/icons22.b64.json":[-1,-1,"b64","feedreader",{"qx/icon/Tango/22/actions/dialog-cancel.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMqSURBVDjLtZR7SJNRFMCvz/JRamFWJqZBJqlQ9IJKeijZk6ICTYoiwQgMamb/mCWhoWaUltqb1IwsqT8smmnqRK2WsunUTXM2dZube7mnZnE63/wcZs6M1YXf7r7xnd8999xzRwCA/A+m/PHdVeL4z8Wsm2Q9+7FfK8rt/qm4/fWGRp0k+3tDvjOjKossbypeVPTlfdTHPnZ8j6jxKL+tfAPzwz2XjOpssmbGYlYO2aYWpg4bpOdAzr+kVHRe1hsHs8AwkAR6cRzoJafBKE8BgywTlN2pJu7z0DLcmesfxYKKnU0mxTWzyDBwAQzSRIQBBkkC6ET7YUi4EQkH7ddd5kVMirsg+hAnrLtFNlsV1+WSfVpx/jfjYDqYkachV0DXewhU7XNBLVgCar4PKHlkjDZH0HxZBabBTJBwz0swc68pxUJWDG9E8xSGlflIHhhlF0HdGQia7giQcmI1XVWRnO6aHZw+dqxsSBiN4lnmBVQdnmBSFQLv1drK38RY2xiDvHh0WHUHhlUFmOVhDHQyBw52HDPV3iCxE1px9udC7wcKQYKO2gn1jqYrFPSyZ6P1eeSIRUy1FZ8ZxTcpC7GeyXhIJ1F8ALSi3aDticDneOC/DedObr9PD93SNT3xP8ZLY5RdgtZXYW9+yRiLf7w+nyQ1FJB0JPfTg9n3mormF3NK/ctaXwa/bi7xq6nMIAGTLpF9D+sgXy3wN4uHutdBf/PZrmlv3kzhPl9aqhXtoQ/UDpRd1zW4oLPN4o/3Z93W95+wdIpCwDCieKnNYgFza82QcJNFLOWdU1OHa5OY6lspN0mqap8z1nbtriDhMCQ21RilHp0VUTxtb7QlW11fNLSUrSy3SdxSFlKt6z814RY6gFqYMoL9vv2vxfSwoz4EzC0srWivRawXJwKndEX5tH+bdLAz4oZ4IPMQb8RnnJwzJEIlTDNQddWJGSBg7up4kUzcrYpxOCKuiCct80UCkCAkBAmj56DaR8ElAx2ZavaToMrI1WQhHWdvTUwNJ8SdztSHlvsjgcgyeqaefRd4ksU4eyEuE6XT1nhCTe3pnTjTUN8dxuttLf4nym7ZoDK3vXAAAAAASUVORK5CYII=","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/actions/dialog-ok.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKFSURBVDjL1ZQ/TBNxFMe/73531z8CpUSKaMWEqrFKCBGQBFFinHTyz9jFBRKJgWjiyuaim4NDY0yMNsFAnIyDiYOLSx2YDGIYStRBSKPi9a69u99zuF+1qS3EAIO/3Df3u8vl87733u89YmbsxtKwS+v/A+vbBZydnh843tv5JBzSDQBYK1pLy4X1y9sGRyLmTH862ffT9gAA7S3RvcuF9YS+I//NgJTB6dKC5NKO5FijP3sioi1zfGZ6frA1GsquFTeu5LOZQtNCCYLQCMyAUFEagocnc7H9idiDC6NHLkbDRij3cjHSDEoEEpoWgAGQrv3teHgyR/G2PbfPj6Sm0r2JQ64PWJZtRyLm7Lmbz781AhuCTgqNIETgWBOBY6q29PjMwtjRno77p/qS/YZpCl9KAICpawjpAgwGM4GIwQz4kqHSiQ3bhedLMAPwKt8ev1hM6wp6fWyg52461dVSdn1UoVIC3y0Xjuug7Eq4vkTFC1QdMQRA0whhUyBsCLQIMACpA0DJLmfz778ctMr+tURne7dd8eD5DNeT4K1PGnzJsBwPBODT52Ihn818pdrpdvrGs3Syq/3hscPdI7bLwpeMtojOdslxADARMYILIGJCkA4KIsjiD2v142rxzqt7l+aofmwOT+YoHovOnkjtm4h3tB4olRz79dsPVwGs1JisFwD4+Wxm9fdpaTaPR6fmUj3d8UfJrtjgm3crQ/lsZunfupF5U43PLNwamngarzFAVUObqaFj1ZaGkg5AKGn1dVPylFxm9ht2HhHpAEwlo25vqABSgSoAXHWvANCJqMzMbqOW9tXHmpKr3ldhpNzKWqdKjnpuXry6tJAKQnVgBiAbMX4BghJAT5xW1B8AAAAASUVORK5CYII=","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/actions/help-about.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKZSURBVDjLzdXdS1NhHMDxR51zShMV02wDrSRKkSgZIy17WWPTKPwHoqsKrKtuvAkqiS4CL+rCy8xlWmcyt5woTnPT3qamO7J5nNtqYb7GzluI3eiv3/RkV2qHjDrw4TwczvM9z3mBQwCA/A3kn4eHKLInbsfDTF+RZ8JV6N7R8LA18VosWLUcC1YuD1Pk6o6EAxRRRgZLg3z4GAgRPYTch5j4sT8O+9qVdVzEvMpPHYQ1EdPqaBu5Kzv89ikpHHlBamlHcstkr3ZgbvzcIh8+Aj/DQkQHs74Ti0xvnmfMltQy0kpq43O2DNPO/d55v0ngwkYQo0YQPpYBHyrZiG7AC4lMGYh0OXDvjsOcxyD6rJr3m4ftWv0MXT3Ph4o2IlwwH1gmC9iJVIgFUiBGK4H1KoDtTwCui4DwUg2zfea5oeZ03ZaPYsyWcXnBf5GLx1kmE2J+8ssHAuxrApwLdWDUpoaFHiM3alFd+q2XN25Pv77gNwtsQLUepJEXo26ytkq+HaOUGha7jcJYY0qNrK9i3JlN8eGj66t8g8Fe5MSoFaMWAkuOcvA1qp7L/tyCrgOdHF0ArAeD3Ri0o1aMNhIQGzD8pBiCTXs7ZIfD/bpRzpMOXCcG2zBGZYPYlAniIwLfHmC4Pg8+NZeMyA5H3adDvANXaM8BvuvMStShY6Lt+knh2cmVpftZsHRLCZ+pipDs8HT/+S9fe85+D9lLA66HittaLdFoNETrqlfemWrRM6zl1PK0rXKGEJKybRi3NLQb5Q8+zn11rybxBo7LkQGZUZW0N9RdUdwcaMh14/hw/HxpXtpm4VSUg/ahYqRDFciELqBqaW+Sjuuk8wpQBlJs+yhwS0TJSIV2SRPj1NKdKVESSvg/f01y/QBUi+5mlItMwQAAAABJRU5ErkJggg==","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/actions/process-stop.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARISURBVDjLjZVdTBRXFMf/dz9Z2S8oWHaJW0jEtDVpu2mtqQ1ZGoixr+CLxaTYFmpS00YbavBJowHlwSY2KUkbrRX7Ynww0RorGF8gMUZj0iIWy0dZYcF0F5bvHXZnbs8ZZmC1S9tJTu5k7r2/8z8f946QUiLXc6G4uP2NmppGIQSQvUbTIMmElKLvzp2f94yN1efaL3KBOzdu/Dqye/dnytCQXabTa2Aa9fUMJoeu8nK1p6vrpz2x2If/Cb5YUvJNpK7uU4ZqmczaBK8zjBXrcPqcV1aW6enuvvDBxMTH64I7A4Fv36ur+yTFShnKacgC60BDsamcH2colO7t7j5f//Rpk7ncsqo0EPiuiqGDgytQiwWuVAqCRn5nJ8IY2XiOJankYGl01P5OVVXDj0VFHc+ALwaDP0RqaxuUx49XwqeN+UtLcFRWopDhrC5LvW95Gc5du1BkpEol5YtPntjfjUQ+Ol9YeEZPRSvwYl1Dw6CIRt16eKSKobadOzFXXw9HPA7P4cNIOBzQaN5PUHXfPixFIrCNjMB19CgmVFVPE0cgfL7Z6zdvVrBiAZrQlRrFSREk7+5d2KkjZCCApdOnUWS1ooDmRFMTMjU1sNlsyL9xAzN6+qXuVFupAYdmsWQXxyyMSmH/tbgI37FjsLNDgi+fOgXLwYPIVFfrUM+5c0jeu4cFFsWF5RY329HMsVlhaRi/c73jk5NwnzwJO20WwSC07dt1qKuzE9O9vZhXFH0v7+GINYpQo1TxY3teLRdJGoVi5cr0NBzkQNu8eSUyAojhYUwPDUGZmYG6sIAMO2DFZBtCIW2t3TQKIkutaX5S6di/H9iyBVbKMau1Op2wHDmCEBUvk0zqUM2AakY61sCmWjMdFHpBeTnyGhuBbdt0qPXSJYj2dtj4xBUWwnX8OF4hp5LKZKqVJstMBXepNM4/P55Nm5C3dy/UcBg2ru/lyxhua8N8LIatLhfsBw5A9fvhbGnBywTq6+hYgxunkRXHH92//9BTUSGl0Y+z0Sg0ajcLF+LqVYy0tiJJeU3TYfn1xAkoZ89CcDfcvo2Ra9dWofkeD2YVZZ5eF/S7ok0IZ0UodCtcWroj+eCB4LwJymf5oUOYuHIFMwMDz4RrIdWvNjfjD3IwNz6uf/d4vZhzOMb74/H3v5Tyt9VLiOCOsoKCrjdLSyun+vqECfk/o9vnw6zNFu1PJKqbpRz8x+3G8Jf8/l/CwWBkqr8/J/z5bx7K9ZTVOvR7IlH1lZRj697HYSG8n3u9198OBHYkBgbEv0G91B0x4M8zU1O1PcAgseZygqkrHDS84AVK2tzu798qKXlNTaf1NWRCXfkl6UeV+zWaSsVakskvxoFR2pcgG6cpNadigrtoKN5A9jqwlfrCTT+nfFrtpJVWakiNWkmhPl0cAYaTwCStn+DuIlZ63VRkOeCmtpLZ+SdhGLfnsmEKH3AWn2v/32J2hiTfJjZkAAAAAElFTkSuQmCC","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/actions/view-refresh.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASVSURBVDjLtZVZbFRVGMf/5869s9zZS9spWwcqTNgKpSRlcWkDIoLyohYkwYSEaIwLUSuGxAcTfYAHA8GgSCAINCBS1xglEHALNAXbQgMCA5a1pbQz7UynM3Pv3OV8PjBTR2Z49CT/p5Pz+77z/77zHUZE+D+W+LCNZzd+v3Z8hecZj8tWKQiCW9X0RDyhDPVEk0cV4vtatzYqD56Z93Lz9I7dL10GAPZgxkvfaameGizdU18TrCnxyVbOCSYnmPz+fjyV4Zeu99/5qzva1tOnvNm5tzECAEuavmsE8aaTW59fUACe/doh/9NzKtuWL5oaMjlgEsHkHKYJcMoFIHAiECdcuj5w+8zFvu26memYPzN4uD+eDO9tWtxQYEXNhNIDTy2YElI0A9d7h9LRmMJcLrtQ4rJLLqdVsEoSDBA4J2QMjopyf+WShY7N0aHksH+Mp2wgngwXeDx1w1Hbuvnls8+F7w2fOHuDDJNkRdO+hJlp1k1R9bltc6om+NdUTxlXS6IoD41kYHCCYZLVJjvLUqoBgQmFxZsoKMuSilZ+/kJECZSV0O27keOtn764Lu9CpwF8tvjtr5+rHOt/b9rkwFyCYNUNA4rG4XKIYAyjvo6GkCQmX74RTVeNL//Z55IPMAEdxbrll20vfLtfObXoj87uS36nCE7I0hgEBl6QcSJpJDwVjna3y9FskVgEokV7WCuuUGp2NNRNmXEvlkGu+IwBgsAKrTBVdMYHU5u2fDDnHABg7eyi0PoNR5pCk8pWJ1PKiMgJImOwWBhEk1gsoRaCuTUzrmZW1Q9bDneSwEAmmMA4oHMTx9u6I/eYZ+G1T5ZnUhlzf1f3rYNd3UWimuKsAjBxZp1RVT5WJ2bJtbZstaArfPfmiCGsvLZzeQYA2netiebO7Pvtpi8U8HkXTffdYgxswauHdwM4UdDHRMSI7vskWRju9MXjbRd6Xzm/s7G3mC13IurE8T59XuvlWPvSTb/7U0nhkYKuAACe97p1k6Oi3O2tmzVhR8Nb32xctarF8iC4J6bVGmQ+rhpGAyPxc8lm6y0+hAgAAxgAgwOqZjKX1xWqmztp81XvwOrH3jjyhaakTrBAZbREdtbXTvZ8dK1nOPPj6e5lsksuTUVix4qCiQDZJtBgPJ12yHZneCAJTSdwIkswGJg3NlBam0wryWRaFUx92Oi6EtcESSzxj/E5E4mRQSOj7imwghsZQRIZO9Z6tWP/Vz+9fqr977DdIpDAACJCUjWhcmKCzeb2+HxOj9/rdfu9ZXan06npuh4b6D94Ztfa24wxcXS6McYsM1d9/EQoNK35dMu2FQPhk6okl3rq1nz47sRg8FFf6ZhxsIiCpnNoJgfnBKL7Ey8WHRqMR/p/Pbtn/UYACoA0gHQOLE1f+X41aUn7lWPb+wA4chJtTndV/fonA1XVDXZZ9omi1cbJIihqelBVlP6eruO77/7ZcjELzSnB/n2SzJ4HtGdly0rK1kPIltgEoGWl5kkBMEJE+n8GPWNMyIIceUAJgCUrlgXzLFzPwtNZcGY00Yd9powxls0wX/ngHJwXY/wDk1w8BWVrllQAAAAASUVORK5CYII=","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/apps/internet-feed-reader.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMoSURBVDjL5ZXLa1xVHMc/53HvnUdm0olm0rTGpE0zoTENImKzMKD4oCDqxi5EfOCisX9AQTd1ZxFXCsZKmo0rNwa76EqsNmCphZQmNcHQJE4a0ObRSdp5z9xzj4u0UTtXKEJW/uC3OY8P3/M95/c7wlrLToRkh2LHwPr+gWtviFR8//6pWHt3CikexCfhl8vVYnb2ZO+n6yP/CnaS3pmOF492yPzMg8tz25pWpPgIaAQPHv/6zajrJEfc+EElytjanbtmOYiWfmqbGwRrN7DRJPrhdlRhDgIfrIXKbXQiHQn1WNbVuYFM+sOv9n7WPX9L3R3UBJEDlK7/gvBSuJlBvNYOKJSpFuJYY8D4UK8iHVdNDgunAXzxzNHclbmV6c5DT7rjt1/hu5U+RKqP6vxlYgPPoO06/DEBxWWc9gxeW4ZyXmONwRqD4wopC+wJfRXlauXC7KUJIxO7mUq8zejVR9CdhwlWZwhyi9j8JhaH4NYcIhpH1Srgb6lWrpLa0Z2hYKn90bRZsisLV5GxXcx7Q3zzaxIhExDbg60XobqBiLWAVOCXt3w2Bq0lwlOPhYIvf/7Ozefbfrd3Vpf5+cos6/kq11MvMZ7tRHgJRHwXUgPaxSxeoF4rbFuhZICj5cFQ8OSwcLoTeXls30+cevQ0zbUlgmiKGXeI8ekY1u3CzxsqMz9SurlILBGBexdYzaOTrXtDwW6RjHKUfDyxRJe3ygfpL9lcnMREUky3vMYPC4La5g2k3STWHAHrQ+BvqS5toJseag0tECvpkY5DTfVjgXgUTkQn+Pg3l909A5wvv8uBxLe0RYr42zVpwVqsUJjCcjG88iS9q1OXhHrqLbBie8Xx3iynZ2s0d/XzSfYJThzaaKzr3EKQX1s/GQqWQja1vv4Fzr7Bho2njsDY2fM83XOOSP8wze3P/WM++P59WTClSKjHuUowFmQvFqRfQQX1hjz28hBDR8aIeClU4KPsvTSo7mcpqWSvEEIDiL83eiGEN/oCh/vSvCrCWqqUoCVSqC1N+q8Dm3pQfu9sceRajjVrbfV+MIALBP+hBSvAWGv9BsX/76/pT4rDT4yg/r4PAAAAAElFTkSuQmCC","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/apps/preferences-theme.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOwSURBVDjLnZRNbFRVFMd/99375r2ZzjBMp9PGtrSATWs1MVFWRkNUVuKCunEHgqALF7gzbjQ27mHFhmqsmmgEP7Z+kPiBLGQhC2JIjSYkTZpSsQMzTOe9+967x0VbmKHly5PcvJzc+373f//33KNEhAeNI+98WATMeq6gMfP+Yde5Rj0oeP/0N4u5nF91aayixLFihQSTDgaNqQ+mD377wOAj05++0Xb5t0tba9u+/+pjbrQiUB6I8OjuFyiE+WS4mH5Cdv3oyfdeX/HuB/rqu58d6x0aP7FzYnzbSuJ45eB+gnI/frHGxONPsmVglOKWsj849shh8g9dotOnu4UyhDrn04ozGisJi1sqHDh0gBs32vwTeywut+jpUbTalsAYfd9gAHFCmmaghKvLLeYvXaQct7i+fZKefIivDVE7IstSNgVPT08Xa7XazvU8SRKnGCCOYtpRikaQNKJ/aR4/iRE/x9XBHSQmIFIZ2slG8MzMzL5du3adLpVKxjmHcw4RoXplKf3tqqW9EhNoQZoNCr6mUCiRNOv0+NuJ2hE5LyBU2S3w8ePHHx4YGDhZqVR2j4+PmwsXLtzczBjDzh3bfW0WmLuScnHRoOvXCM3qvftsXlUewMTExC979+59fmxszPi+z9DQEGmaYq1lcnISEWH3M09x+KWneawWr22ou763hwEIgkBprenr62NpaYnR0VGq1SqFQgFrLe12G2MMWZbBmkJtNC5zdwcDOOcIwxBrLXNzc5w6fZqR0W3seW4PWmustTh369VqY0jiBO2bO1vhnMNaSxzHxHFMEIb8ffkyP/96jn+Xl8nn88RxTJIktxT5q0p9v1uxc5lRSnkbwMPDw3x35gwD/RX6axV+OnuWcrlMkiSICL7xKBTzZChKW4vYOKVcDCkXQ3K+Jo4tQK8BEJGbYIB2e4W+ahWALE27j2iv/dm0rfOLmX22GGeD9VJwvrnwx1+rjyjV53/4/EugYdYVdzYj3/cpFXsREdpR1gXuK+ofvz7x1lGAl188WDl1arZ+250lIpJs6rynPIIgQERIbNw953lOROxaeuULPuqcthuq4raf0dogIng65f+EB2Ct9boVK3xjMEajve7OurCw0KuUKtwTrJQK6vV6bK1FRBARjDGEYZ5CoUi65r+I0Gw2mZ+fj4DyPVutiDAyMvLE1NTUPqWUW6sSrxVFb3qeDvI5/5hSygI0Go3W7OzsOeD3Dp/v0GdXq0Gtb9I5Dh15zXTma9ZtWLfZ+A9Ht91MK/ug9AAAAABJRU5ErkJggg==","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/places/folder-open.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKCSURBVDjLtZU/T1RBFMXPnbfsLiwLCIUaI0YLgzHRGDtDY0P8ABYUxsQKGxP9BGBvp7EwMVqSWJhQSW9jI8ZYSCMhRsTAAsvuvr8z91js27e7LIpImLyTmzeZ+b377pybEZI4jpHrfLl27/WIly+c2m+hWtn9+HJ67b/Aly+eWRw/PXLJOoIkkP4NAcSxbUw+mJ95/3R64dDg0aFiv2+lHCUK1Sa8VapCX65c6i/eAXB4sBKkKpzrBpOEtQ7lodLU7cfvPo2VCzkRgRGBeBABUPOT8Ov3takPz+5WesDWORjnUrBCWxk3H/QX88MCXA0pEAhEBEYFnhFY0YRx7iyAXrAqQMdusBIEsnpDBAJATBNKY0AKVPnnUjinFKNwqlDXBuseS7YyVSMwJDwaOKd/BYt4HRkrew5RpAlWERgKSAMQPRkLSdx8+Hby+sTJFzByHoIiW4vS2maey3ZlVWlPkPQ8s7LyY2fhzdytRzkA8MPQjY6VJyIHOUKzSanYd+FnpTEMAAYAkkRWk9jWjtrG+ZygsuNvZOCl8eX1KE7qhwWRTSe15KwiSJJvGZizs+qHdme/jU6JxBJRoghihR85NEKHWmBRDy0aUVvb9UjjRvS5yxW1MN4asAolUrHnpA8a1XrQCBJZ7QJvVcPK4JDCkd0O2McUnROd89VqUF8aX17PSgEA21V/ebMa0I8UftyrYK+SpsJUQezwa2N3E3Nz+SxjESkAeHJj5tU5ky9cgTpPlR6ohuo8koZUj6pGRAgxToxxIkZbkcr6l8Xn9wGcEJGKtDtKBEAeQBHAAIBSqsE05tqtgQhAo0M+gCCNCUnKv15N6YdTtxy8SY7rzjM4pvEbDQLMgqmYRyAAAAAASUVORK5CYII=","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/places/folder.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJiSURBVDjLtZW/axRBFMe/7+1e7k5MzMYgQTCNlqbQKv+AKcUqVcTCgGCvdpYGRMFWbEwTAmks7AL2oqBtClFDRMEYL3u7d3vz4z2L3Tt3EyU5jgy8YWZ/fObNd76PIVXFSbSwPCECXbm9NluvMR380IqV989vbh8XTOWMF+6/ejw/d2G5mzkoAB10AEiw9WV34/Wj63eOA+ZK+kFwfqxej1KHKLEaJUaittEoNhLFPUSTE435xcWNYHgpVNU5D+8FogoRhapCUWTOtcudS40Py0/e+DBkYsr1YyKAQFuf91Y2n95YPwT2qnDi4UUgUgIXcGLmqamJOUMEJwARgZnBRGBieJUFAOsDjYlAt1Y2P81Mj88EzM2+rH31qTIrnlD5HUAEqGh3Zzf+vvrg2sWw2KU+fDlJ3Gw0R3EfEZqznJ/b4PAy5zoh82jeZUZmJK2Ae8YnYTAiOGBkxlXBWWaTMKCRwAETOj2bVFzR7pj2UVgR5DZUrYz7bSwMkHRNXAEnmY2ldHCq+Y9eFM4X1jtiYYWinZp2BZxmJu5Zj8yUimNIKZwTZD3XqoBF8GM/tTC+Dyynj0NOrmaad/uphRPZqYCN8V9/JxnCsFbV9QAcUFB/mlfyoFLSjoUxfrsCVuve/fzVNmeno7HhBPi7j929uKfOvC2VNNUBjF9dena3eebckoqwqjJUAlFhqLAqCCp5jkQCIiHiPJgEFPhO69vqx7V7LwC0+mACUAcwUYrTAE4V0QBQK3yvACyADEAXQAogLmIPQKKqlv53NRWLMYCgiLAkuwfgirHqPyB0Unce44TaH+gyYWDgguJkAAAAAElFTkSuQmCC","encoding":"base64","height":22,"type":"png","width":22}}],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/form/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/group-item.png":[110,20,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx","feedreader/images/combined/icons16.b64.json",0,-16],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx","feedreader/images/combined/icons16.b64.json",0,-32],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","feedreader/images/combined/icons22.b64.json",0,-154],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","feedreader/images/combined/icons22.b64.json",0,-176],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/mobile/css/LICENSE":"qx","qx/mobile/css/android/android.css":"qx","qx/mobile/css/common/main.css":"qx","qx/mobile/css/ios/ios.css":"qx","qx/mobile/icon/android/arrow.png":[25,20,"png","qx"],"qx/mobile/icon/android/arrow_pressed.png":[25,20,"png","qx"],"qx/mobile/icon/android/cancel.png":[20,20,"png","qx"],"qx/mobile/icon/android/loading.png":[32,32,"png","qx"],"qx/mobile/icon/android/on_off.png":[149,27,"png","qx"],"qx/mobile/icon/android/scrollbar.png":[7,7,"png","qx"],"qx/mobile/js/LICENSE":"qx","qx/mobile/js/iscroll.js":"qx","qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{"C":{},"de":{"Static Feeds":"Vordefinierte Quellen","User Feeds":"Eigene Quellen"},"en":{},"es":{"Static Feeds":"Feeds Estáticos","User Feeds":"Feeds del Usuario"},"fr":{"Static Feeds":"Fils statiques","User Feeds":"Fils de l'utilisateur"},"it":{"Static Feeds":"Feed statici","User Feeds":"Feed utente"},"nl":{"Static Feeds":"Statische Feeds","User Feeds":"Gebruiker Feeds"},"ro":{"Static Feeds":"Fluxuri statice","User Feeds":"Fluxuri utilizator"},"sv":{"Static Feeds":"Statiska flöden","User Feeds":"Användarflöden"}}};
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
if(window.qxvariants&&window.qxvariants["qx.debug"]=="off"){be=false;
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
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,h){if(h){if(h.include&&!(h.include instanceof Array)){h.include=[h.include];
}var k=h.statics?h.statics:{};
qx.Bootstrap.setDisplayNames(k,name);

for(var j in k){if(k[j] instanceof Function){k[j].$$mixin=k;
}}if(h.construct){k.$$constructor=h.construct;
qx.Bootstrap.setDisplayName(h.construct,name,e);
}
if(h.include){k.$$includes=h.include;
}
if(h.properties){k.$$properties=h.properties;
}
if(h.members){k.$$members=h.members;
qx.Bootstrap.setDisplayNames(h.members,name+f);
}
for(var j in k.$$members){if(k.$$members[j] instanceof Function){k.$$members[j].$$mixin=k;
}}
if(h.events){k.$$events=h.events;
}
if(h.destruct){k.$$destructor=h.destruct;
qx.Bootstrap.setDisplayName(h.destruct,name,b);
}}else{var k={};
}k.$$type=a;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
this.$$registry[name]=k;
return k;
},checkCompatibility:function(m){var p=this.flatten(m);
var q=p.length;

if(q<2){return true;
}var t={};
var s={};
var r={};
var o;

for(var i=0;i<q;i++){o=p[i];

for(var n in o.events){if(r[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+r[n]+'" in member "'+n+'"!');
}r[n]=o.name;
}
for(var n in o.properties){if(t[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+t[n]+'" in property "'+n+'"!');
}t[n]=o.name;
}
for(var n in o.members){if(s[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+s[n]+'" in member "'+n+'"!');
}s[n]=o.name;
}}return true;
},isCompatible:function(u,v){var w=qx.Bootstrap.getMixins(v);
w.push(u);
return qx.Mixin.checkCompatibility(w);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__c:null,__d:function(){}}});
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

for(var W in qx.bom.client.OperatingSystem.__e){X.push(W);
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
(function(){var l="",k=".",j="function",h="gecko",g="[object Opera]",f="[^\\.0-9]",e="4.0",d="\nTrace:",b="1.9.0.0",a="WEBKIT",J="Version/",I="9.0",H="UNKNOWN_VERSION",G="GECKO",F="8.0",E="FULLVERSION",D="Gecko",C="OPERA",B="AppleWebKit/",A="'is deprecated: ",s="NAME",t="UNKNOWN_ENGINE",q="MSHTML",r="Please check the API documentation of qx.core.Environment.",o="VERSION",p="DOCUMENT_MODE",m="' of '",n="opera",u="mshtml",v="\n",x="The constant '",w="webkit",z="5.0",y="qx.bom.client.Engine";
qx.Bootstrap.define(y,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,getVersion:function(){var N=window.navigator.userAgent;
var L=l;

if(qx.bom.client.Engine.__j()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(N)){if(N.indexOf(J)!=-1){var M=N.match(/Version\/(\d+)\.(\d+)/);
L=M[1]+k+M[2].charAt(0)+k+M[2].substring(1,M[2].length);
}else{L=RegExp.$1+k+RegExp.$2;

if(RegExp.$3!=l){L+=k+RegExp.$3;
}}}}else if(qx.bom.client.Engine.__k()){if(/AppleWebKit\/([^ ]+)/.test(N)){L=RegExp.$1;
var O=RegExp(f).exec(L);

if(O){L=L.slice(0,O.index);
}}}else if(qx.bom.client.Engine.__l()){if(/rv\:([^\);]+)(\)|;)/.test(N)){L=RegExp.$1;
}}else if(qx.bom.client.Engine.__m()){if(/MSIE\s+([^\);]+)(\)|;)/.test(N)){L=RegExp.$1;
if(L<8&&/Trident\/([^\);]+)(\)|;)/.test(N)){if(RegExp.$1==e){L=F;
}else if(RegExp.$1==z){L=I;
}}}}else{var K=window.qxFail;

if(K&&typeof K===j){L=K().FULLVERSION;
}else{L=b;
qx.Bootstrap.warn("Unsupported client: "+N+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return L;
},getName:function(){var name;

if(qx.bom.client.Engine.__j()){name=n;
}else if(qx.bom.client.Engine.__k()){name=w;
}else if(qx.bom.client.Engine.__l()){name=h;
}else if(qx.bom.client.Engine.__m()){name=u;
}else{var P=window.qxFail;

if(P&&typeof P===j){name=P().NAME;
}else{name=h;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__j:function(){return window.opera&&Object.prototype.toString.call(window.opera)==g;
},__k:function(){return window.navigator.userAgent.indexOf(B)!=-1;
},__l:function(){return window.controllers&&window.navigator.product===D;
},__m:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}},defer:function(Q){Q.NAME=Q.getName();
Q.FULLVERSION=Q.getVersion();

if(Q.FULLVERSION==l){Q.UNKNOWN_VERSION=true;
}
if(Q.__j()){Q.OPERA=true;

if(Q.FULLVERSION==l){Q.FULLVERSION="9.6.0";
}}else if(Q.__k()){Q.WEBKIT=true;

if(Q.FULLVERSION==l){Q.FULLVERSION="525.26";
}}else if(Q.__l()){Q.GECKO=true;

if(Q.FULLVERSION==l){Q.FULLVERSION="1.9.0.0";
}}else if(Q.__m()){Q.MSHTML=true;

if(document.documentMode){Q.DOCUMENT_MODE=document.documentMode;
}}else{var R=window.qxFail;

if(R&&typeof R===j){if(R().NAME){Q[R().NAME.toUpperCase()]=true;
}}else{Q.GECKO=true;
Q.UNKNOWN_ENGINE=true;
Q.UNKNOWN_VERSION=true;
}}Q.VERSION=parseFloat(Q.FULLVERSION);
if(qx.Bootstrap.DEBUG){var S=[s,E,o,C,a,G,q,t,H,p];

for(var i=0;i<S.length;i++){if(Q.__defineGetter__){var T=Q[S[i]];
Q.__defineGetter__(S[i],qx.Bootstrap.bind(function(U,c){var V=x+U+m+Q.classname+A+r;

if(qx.dev&&qx.dev.StackTrace){V+=d+qx.dev.StackTrace.getStackTrace().join(v);
}qx.Bootstrap.warn(V);
return c;
},Q,S[i],T));
}}}}});
})();
(function(){var l="",k="mshtml",j="msie",h=")(/| )([0-9]+\.[0-9])",g="(",f="ce",e="CSS1Compat",d="android",b="operamini",a="\nTrace:",M="'is deprecated: ",L="Please check the API documentation of qx.core.Environment.",K="mobile chrome",J="iemobile",I="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",H="FULLVERSION",G="opera mobi",F="Mobile Safari",E="UNKNOWN",D="operamobile",s="ie",t="mobile safari",q="IEMobile|Maxthon|MSIE",r="NAME",o="qx.bom.client.Browser",p="opera mini",m="VERSION",n="' of '",u="opera",v="TITLE",y="\n",x="Opera Mini|Opera Mobi|Opera",A="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",z="The constant '",C="webkit",B="5.0",w="Mobile/";
qx.Bootstrap.define(o,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",getName:function(){var Q=navigator.userAgent;
var P=new RegExp(g+qx.bom.client.Browser.__n+h);
var O=Q.match(P);

if(!O){return l;
}var name=O[1].toLowerCase();
var N=qx.bom.client.Engine.getName();

if(N===C){if(name===d){name=K;
}else if(Q.indexOf(F)!==-1||Q.indexOf(w)!==-1){name=t;
}}else if(N===k){if(name===j){name=s;
if(qx.bom.client.OperatingSystem.getVersion()===f){name=J;
}}}else if(N===u){if(name===G){name=D;
}else if(name===p){name=b;
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

if(name===j&&qx.bom.client.OperatingSystem.getVersion()==f){R=B;
}}return R;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==k&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==e;
}},__n:{"webkit":A,"gecko":I,"mshtml":q,"opera":x}[qx.bom.client.Engine.getName()]},defer:function(V){V.NAME=V.getName();
V.FULLVERSION=V.getVersion();
V.VERSION=parseFloat(V.FULLVERSION);
V.TITLE=V.NAME+" "+V.VERSION;

if(V.NAME!==l){V.UNKNOWN=false;
}if(qx.Bootstrap.DEBUG){var W=[H,m,r,v,E];

for(var i=0;i<W.length;i++){if(V.__defineGetter__){var X=V[W[i]];
V.__defineGetter__(W[i],qx.Bootstrap.bind(function(Y,c){var ba=z+Y+n+V.classname+M+L;

if(qx.dev&&qx.dev.StackTrace){ba+=a+qx.dev.StackTrace.getStackTrace().join(y);
}qx.Bootstrap.warn(ba);
return c;
},V,W[i],X));
}}}}});
})();
(function(){var k="background",j="linear-gradient(0deg, white 0%, red 100%)",h="placeholder",g="content",f="div",e="OTextOverflow",d="MozBorderRadius",c="qx.bom.client.Css",b='m11',a="input",z="-ms-linear-gradient(0deg, white 0%, red 100%)",y="-moz-linear-gradient(0deg, white 0%, red 100%)",x="gradient",w="-webkit-linear-gradient(left, white, black)",v="MozBoxShadow",u="-o-linear-gradient(0deg, white 0%, red 100%)",t="borderRadius",s='WebKitCSSMatrix',r="WebkitBorderRadius",q="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",o="mshtml",p="WebkitBoxShadow",m="textOverflow",n="boxShadow",l="border";
qx.Bootstrap.define(c,{statics:{getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==o||!qx.bom.client.Browser.getQuirksMode();
return content?g:l;
},getTextOverflow:function(){return m in document.documentElement.style||e in document.documentElement.style;
},getPlaceholder:function(){var i=document.createElement(a);
return h in i;
},getBorderRadius:function(){return t in document.documentElement.style||d in document.documentElement.style||r in document.documentElement.style;
},getBoxShadow:function(){return n in document.documentElement.style||v in document.documentElement.style||p in document.documentElement.style;
},getTranslate3d:function(){return s in window&&b in new WebKitCSSMatrix();
},getGradients:function(){var A;

try{A=document.createElement(f);
}catch(C){A=document.createElement();
}var B=[q,w,y,u,z,j];

for(var i=0;i<B.length;i++){try{A.style[k]=B[i];

if(A.style[k].indexOf(x)!=-1){return true;
}}catch(D){}}return false;
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
if(co.get(bl)===true){co.__t();
}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__v:{},define:function(j,k){this.defineDeprecated(j,k);
},defineDeprecated:function(l,m){if(m===undefined){throw new Error('Default value of setting "'+l+'" must be defined!');
}
if(!this.__v[l]){this.__v[l]={};
}else if(this.__v[l].defaultValue!==undefined){throw new Error('Setting "'+l+'" is already defined!');
}this.__v[l].defaultValue=m;
},get:function(n){var o=this.__v[n];

if(o===undefined){throw new Error('Setting "'+n+'" is not defined.');
}
if(o.value!==undefined){return o.value;
}return o.defaultValue;
},set:function(p,q){this.setDeprecated(p,q);
},setDeprecated:function(r,s){if((r.split(a)).length<2){throw new Error('Malformed settings key "'+r+'". Must be following the schema "namespace.key".');
}
if(!this.__v[r]){this.__v[r]={};
}this.__v[r].value=s;
},__w:function(){if(window.qxsettings){for(var t in window.qxsettings){this.setDeprecated(t,window.qxsettings[t]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(u){}this.__x();
}},__x:function(){if(qx.core.Environment.get(h)!=true){return;
}var w=document.location.search.slice(1).split(g);

for(var i=0;i<w.length;i++){var v=w[i].split(b);

if(v.length!=3||v[0]!=c){continue;
}this.set(v[1],decodeURIComponent(v[2]));
}}},defer:function(x){x.defineDeprecated(h,false);
x.defineDeprecated(e,false);
x.defineDeprecated(d,0);
x.__w();
}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,j){if(j){if(j.extend&&!(j.extend instanceof Array)){j.extend=[j.extend];
}var k=j.statics?j.statics:{};
if(j.extend){k.$$extends=j.extend;
}
if(j.properties){k.$$properties=j.properties;
}
if(j.members){k.$$members=j.members;
}
if(j.events){k.$$events=j.events;
}}else{var k={};
}k.$$type=c;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
qx.Interface.$$registry[name]=k;
return k;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(m){if(!m){return [];
}var n=m.concat();

for(var i=0,l=m.length;i<l;i++){if(m[i].$$extends){n.push.apply(n,this.flatten(m[i].$$extends));
}}return n;
},__y:function(o,p,q,r){var v=q.$$members;

if(v){for(var u in v){if(qx.Bootstrap.isFunction(v[u])){var t=this.__z(p,u);
var s=t||qx.Bootstrap.isFunction(o[u]);

if(!s){throw new Error('Implementation of method "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}var w=r===true&&!t&&!qx.Bootstrap.hasInterface(p,q);

if(w){o[u]=this.__C(q,o[u],u,v[u]);
}}else{if(typeof o[u]===undefined){if(typeof o[u]!==h){throw new Error('Implementation of member "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}}}}}},__z:function(x,y){var C=y.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!C){return false;
}var z=qx.Bootstrap.firstLow(C[2]);
var A=qx.Bootstrap.getPropertyDefinition(x,z);

if(!A){return false;
}var B=C[0]==b||C[0]==d;

if(B){return qx.Bootstrap.getPropertyDefinition(x,z).check==g;
}return true;
},__A:function(D,E){if(E.$$properties){for(var F in E.$$properties){if(!qx.Bootstrap.getPropertyDefinition(D,F)){throw new Error('The property "'+F+'" is not supported by Class "'+D.classname+'"!');
}}}},__B:function(G,H){if(H.$$events){for(var I in H.$$events){if(!qx.Bootstrap.supportsEvent(G,I)){throw new Error('The event "'+I+'" is not supported by Class "'+G.classname+'"!');
}}}},assertObject:function(J,K){var M=J.constructor;
this.__y(J,M,K,false);
this.__A(M,K);
this.__B(M,K);
var L=K.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assertObject(J,L[i]);
}}},assert:function(N,O,P){this.__y(N.prototype,N,O,P);
this.__A(N,O);
this.__B(N,O);
var Q=O.$$extends;

if(Q){for(var i=0,l=Q.length;i<l;i++){this.assert(N,Q[i],P);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__C:function(){},__D:null,__E:function(){}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__uj:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__uj;
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
},addAdvice:function(o,p,q,name){this.__uj.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
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
(function(){var m=';',k='return this.',j="boolean",h="string",g='!==undefined)',f='else if(this.',e='if(this.',d='else ',c=' of an instance of ',b=' is not (yet) ready!");',W="init",V="': ",U=" of class ",T='(computed, old, "',S='return value;',R='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',Q='return init;',P='var init=this.',O="')){",N="if(reg.hasListener(this, '",t="Error in property ",u='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',r='if(init==qx.core.Property.$$inherit)init=null;',s="rv:1.8.1",p="set",q='if(a[i].',n="var reg=qx.event.Registration;",o=" in method ",v='throw new Error("Property ',w='(backup);',D='var inherit=prop.$$inherit;',B='return null;',H='this.',F=")}",J="setRuntime",I=')a[i].',y='");',M="setThemed",L="inherit",K="MSIE 6.0",x=" with incoming value '",z="', qx.event.type.Data, [computed, old]",A="object",C='}',E="reg.fireEvent(this, '",G="qx.core.Property";
qx.Bootstrap.define(G,{statics:{__F:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__G:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:L,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:h,dereference:j,inheritable:j,nullable:j,themeable:j,refine:j,init:null,apply:h,event:h,check:null,transform:h,deferredInit:j,validate:null},$$allowedGroupKeys:{name:h,group:A,mode:h,themeable:j},$$inheritable:{},__H:function(X){var Y=this.__I(X);

if(!Y.length){var ba=function(){};
}else{ba=this.__J(Y);
}X.prototype.$$refreshInheritables=ba;
},__I:function(bb){var bd=[];

while(bb){var bc=bb.$$properties;

if(bc){for(var name in this.$$inheritable){if(bc[name]&&bc[name].inheritable){bd.push(name);
}}}bb=bb.superclass;
}return bd;
},__J:function(be){var bi=this.$$store.inherit;
var bh=this.$$store.init;
var bg=this.$$method.refresh;
var bf=["var parent = this.getLayoutParent();","if (!parent) return;"];

for(var i=0,l=be.length;i<l;i++){var name=be[i];
bf.push("var value = parent.",bi[name],";","if (value===undefined) value = parent.",bh[name],";","this.",bg[name],"(value);");
}return new Function(bf.join(""));
},attachRefreshInheritables:function(bj){bj.prototype.$$refreshInheritables=function(){qx.core.Property.__H(bj);
return this.$$refreshInheritables();
};
},attachMethods:function(bk,name,bl){bl.group?this.__K(bk,bl,name):this.__L(bk,bl,name);
},__K:function(bm,bn,name){var bu=qx.Bootstrap.firstUp(name);
var bt=bm.prototype;
var bv=bn.themeable===true;
var bw=[];
var bq=[];

if(bv){var bo=[];
var bs=[];
}var br="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
bw.push(br);

if(bv){bo.push(br);
}
if(bn.mode=="shorthand"){var bp="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
bw.push(bp);

if(bv){bo.push(bp);
}}
for(var i=0,a=bn.group,l=a.length;i<l;i++){bw.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
bq.push("this.",this.$$method.reset[a[i]],"();");

if(bv){bo.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
bs.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+bu;
bt[this.$$method.set[name]]=new Function(bw.join(""));
this.$$method.reset[name]="reset"+bu;
bt[this.$$method.reset[name]]=new Function(bq.join(""));

if(bv){this.$$method.setThemed[name]="setThemed"+bu;
bt[this.$$method.setThemed[name]]=new Function(bo.join(""));
this.$$method.resetThemed[name]="resetThemed"+bu;
bt[this.$$method.resetThemed[name]]=new Function(bs.join(""));
}},__L:function(bx,by,name){var bA=qx.Bootstrap.firstUp(name);
var bC=bx.prototype;
if(by.dereference===undefined&&typeof by.check==="string"){by.dereference=this.__M(by.check);
}var bB=this.$$method;
var bz=this.$$store;
bz.runtime[name]="$$runtime_"+name;
bz.user[name]="$$user_"+name;
bz.theme[name]="$$theme_"+name;
bz.init[name]="$$init_"+name;
bz.inherit[name]="$$inherit_"+name;
bz.useinit[name]="$$useinit_"+name;
bB.get[name]="get"+bA;
bC[bB.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,bx,name,"get");
};
bB.set[name]="set"+bA;
bC[bB.set[name]]=function(bD){return qx.core.Property.executeOptimizedSetter(this,bx,name,"set",arguments);
};
bB.reset[name]="reset"+bA;
bC[bB.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bx,name,"reset");
};

if(by.inheritable||by.apply||by.event||by.deferredInit){bB.init[name]="init"+bA;
bC[bB.init[name]]=function(bE){return qx.core.Property.executeOptimizedSetter(this,bx,name,"init",arguments);
};
}
if(by.inheritable){bB.refresh[name]="refresh"+bA;
bC[bB.refresh[name]]=function(bF){return qx.core.Property.executeOptimizedSetter(this,bx,name,"refresh",arguments);
};
}bB.setRuntime[name]="setRuntime"+bA;
bC[bB.setRuntime[name]]=function(bG){return qx.core.Property.executeOptimizedSetter(this,bx,name,"setRuntime",arguments);
};
bB.resetRuntime[name]="resetRuntime"+bA;
bC[bB.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bx,name,"resetRuntime");
};

if(by.themeable){bB.setThemed[name]="setThemed"+bA;
bC[bB.setThemed[name]]=function(bH){return qx.core.Property.executeOptimizedSetter(this,bx,name,"setThemed",arguments);
};
bB.resetThemed[name]="resetThemed"+bA;
bC[bB.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bx,name,"resetThemed");
};
}
if(by.check==="Boolean"){bC["toggle"+bA]=new Function("return this."+bB.set[name]+"(!this."+bB.get[name]+"())");
bC["is"+bA]=new Function("return this."+bB.get[name]+"()");
}},__M:function(bI){return !!this.__G[bI];
},__N:function(bJ){return this.__G[bJ]||qx.Bootstrap.classIsDefined(bJ)||(qx.Interface&&qx.Interface.isDefined(bJ));
},__O:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(bK,bL,bM,bN,bO){var bP=bK.constructor.classname;
var bQ=t+bM+U+bP+o+this.$$method[bN][bM]+x+bO+V;
throw new Error(bQ+(this.__O[bL]||"Unknown reason: "+bL));
},__P:function(bR,bS,name,bT,bU,bV){var bW=this.$$method[bT][name];
{bS[bW]=new Function("value",bU.join(""));
};
if(qx.core.Environment.get("qx.aspects")){bS[bW]=qx.core.Aspect.wrap(bR.classname+"."+bW,bS[bW],"property");
}qx.Bootstrap.setDisplayName(bS[bW],bR.classname+".prototype",bW);
if(bV===undefined){return bR[bW]();
}else{return bR[bW](bV[0]);
}},executeOptimizedGetter:function(bX,bY,name,ca){var cc=bY.$$properties[name];
var ce=bY.prototype;
var cb=[];
var cd=this.$$store;
cb.push(e,cd.runtime[name],g);
cb.push(k,cd.runtime[name],m);

if(cc.inheritable){cb.push(f,cd.inherit[name],g);
cb.push(k,cd.inherit[name],m);
cb.push(d);
}cb.push(e,cd.user[name],g);
cb.push(k,cd.user[name],m);

if(cc.themeable){cb.push(f,cd.theme[name],g);
cb.push(k,cd.theme[name],m);
}
if(cc.deferredInit&&cc.init===undefined){cb.push(f,cd.init[name],g);
cb.push(k,cd.init[name],m);
}cb.push(d);

if(cc.init!==undefined){if(cc.inheritable){cb.push(P,cd.init[name],m);

if(cc.nullable){cb.push(r);
}else if(cc.init!==undefined){cb.push(k,cd.init[name],m);
}else{cb.push(R,name,c,bY.classname,b);
}cb.push(Q);
}else{cb.push(k,cd.init[name],m);
}}else if(cc.inheritable||cc.nullable){cb.push(B);
}else{cb.push(v,name,c,bY.classname,b);
}return this.__P(bX,ce,name,ca,cb);
},executeOptimizedSetter:function(cf,cg,name,ch,ci){var cn=cg.$$properties[name];
var cm=cg.prototype;
var ck=[];
var cj=ch===p||ch===M||ch===J||(ch===W&&cn.init===undefined);
var cl=cn.apply||cn.event||cn.inheritable;
var co=this.__Q(ch,name);
this.__R(ck,cn,name,ch,cj);

if(cj){this.__S(ck,cg,cn,name);
}
if(cl){this.__T(ck,cj,co,ch);
}
if(cn.inheritable){ck.push(D);
}
if(!cl){this.__V(ck,name,ch,cj);
}else{this.__W(ck,cn,name,ch,cj);
}
if(cn.inheritable){this.__X(ck,cn,name,ch);
}else if(cl){this.__Y(ck,cn,name,ch);
}
if(cl){this.__ba(ck,cn,name);
if(cn.inheritable&&cm._getChildren){this.__bb(ck,name);
}}if(cj){ck.push(S);
}return this.__P(cf,cm,name,ch,ck,ci);
},__Q:function(cp,name){if(cp==="setRuntime"||cp==="resetRuntime"){var cq=this.$$store.runtime[name];
}else if(cp==="setThemed"||cp==="resetThemed"){cq=this.$$store.theme[name];
}else if(cp==="init"){cq=this.$$store.init[name];
}else{cq=this.$$store.user[name];
}return cq;
},__R:function(cr,cs,name,ct,cu){{if(!cs.nullable||cs.check||cs.inheritable){cr.push('var prop=qx.core.Property;');
}if(ct==="set"){cr.push('if(value===undefined)prop.error(this,2,"',name,'","',ct,'",value);');
}};
},__S:function(cv,cw,cx,name){if(cx.transform){cv.push('value=this.',cx.transform,'(value);');
}if(cx.validate){if(typeof cx.validate==="string"){cv.push('this.',cx.validate,'(value);');
}else if(cx.validate instanceof Function){cv.push(cw.classname,'.$$properties.',name);
cv.push('.validate.call(this, value);');
}}},__T:function(cy,cz,cA,cB){var cC=(cB==="reset"||cB==="resetThemed"||cB==="resetRuntime");

if(cz){cy.push('if(this.',cA,'===value)return value;');
}else if(cC){cy.push('if(this.',cA,'===undefined)return;');
}},__U:undefined,__V:function(cD,name,cE,cF){if(cE==="setRuntime"){cD.push('this.',this.$$store.runtime[name],'=value;');
}else if(cE==="resetRuntime"){cD.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cD.push('delete this.',this.$$store.runtime[name],';');
}else if(cE==="set"){cD.push('this.',this.$$store.user[name],'=value;');
}else if(cE==="reset"){cD.push('if(this.',this.$$store.user[name],'!==undefined)');
cD.push('delete this.',this.$$store.user[name],';');
}else if(cE==="setThemed"){cD.push('this.',this.$$store.theme[name],'=value;');
}else if(cE==="resetThemed"){cD.push('if(this.',this.$$store.theme[name],'!==undefined)');
cD.push('delete this.',this.$$store.theme[name],';');
}else if(cE==="init"&&cF){cD.push('this.',this.$$store.init[name],'=value;');
}},__W:function(cG,cH,name,cI,cJ){if(cH.inheritable){cG.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{cG.push('var computed, old;');
}cG.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="resetRuntime"){cG.push('delete this.',this.$$store.runtime[name],';');
cG.push('if(this.',this.$$store.user[name],'!==undefined)');
cG.push('computed=this.',this.$$store.user[name],';');
cG.push('else if(this.',this.$$store.theme[name],'!==undefined)');
cG.push('computed=this.',this.$$store.theme[name],';');
cG.push('else if(this.',this.$$store.init[name],'!==undefined){');
cG.push('computed=this.',this.$$store.init[name],';');
cG.push('this.',this.$$store.useinit[name],'=true;');
cG.push('}');
}else{cG.push('old=computed=this.',this.$$store.runtime[name],';');
if(cI==="set"){cG.push('this.',this.$$store.user[name],'=value;');
}else if(cI==="reset"){cG.push('delete this.',this.$$store.user[name],';');
}else if(cI==="setThemed"){cG.push('this.',this.$$store.theme[name],'=value;');
}else if(cI==="resetThemed"){cG.push('delete this.',this.$$store.theme[name],';');
}else if(cI==="init"&&cJ){cG.push('this.',this.$$store.init[name],'=value;');
}}cG.push('}');
cG.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(cI==="set"){if(!cH.inheritable){cG.push('old=this.',this.$$store.user[name],';');
}cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="reset"){if(!cH.inheritable){cG.push('old=this.',this.$$store.user[name],';');
}cG.push('delete this.',this.$$store.user[name],';');
cG.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cG.push('computed=this.',this.$$store.runtime[name],';');
cG.push('if(this.',this.$$store.theme[name],'!==undefined)');
cG.push('computed=this.',this.$$store.theme[name],';');
cG.push('else if(this.',this.$$store.init[name],'!==undefined){');
cG.push('computed=this.',this.$$store.init[name],';');
cG.push('this.',this.$$store.useinit[name],'=true;');
cG.push('}');
}else{if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cH.inheritable){cG.push('computed=this.',this.$$store.user[name],';');
}else{cG.push('old=computed=this.',this.$$store.user[name],';');
}if(cI==="setThemed"){cG.push('this.',this.$$store.theme[name],'=value;');
}else if(cI==="resetThemed"){cG.push('delete this.',this.$$store.theme[name],';');
}else if(cI==="init"&&cJ){cG.push('this.',this.$$store.init[name],'=value;');
}}cG.push('}');
if(cH.themeable){cG.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!cH.inheritable){cG.push('old=this.',this.$$store.theme[name],';');
}
if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="set"){cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="setThemed"){cG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cI==="resetThemed"){cG.push('delete this.',this.$$store.theme[name],';');
cG.push('if(this.',this.$$store.init[name],'!==undefined){');
cG.push('computed=this.',this.$$store.init[name],';');
cG.push('this.',this.$$store.useinit[name],'=true;');
cG.push('}');
}else if(cI==="init"){if(cJ){cG.push('this.',this.$$store.init[name],'=value;');
}cG.push('computed=this.',this.$$store.theme[name],';');
}else if(cI==="refresh"){cG.push('computed=this.',this.$$store.theme[name],';');
}cG.push('}');
}cG.push('else if(this.',this.$$store.useinit[name],'){');

if(!cH.inheritable){cG.push('old=this.',this.$$store.init[name],';');
}
if(cI==="init"){if(cJ){cG.push('computed=this.',this.$$store.init[name],'=value;');
}else{cG.push('computed=this.',this.$$store.init[name],';');
}}else if(cI==="set"||cI==="setRuntime"||cI==="setThemed"||cI==="refresh"){cG.push('delete this.',this.$$store.useinit[name],';');

if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="set"){cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="setThemed"){cG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cI==="refresh"){cG.push('computed=this.',this.$$store.init[name],';');
}}cG.push('}');
if(cI==="set"||cI==="setRuntime"||cI==="setThemed"||cI==="init"){cG.push('else{');

if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="set"){cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="setThemed"){cG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cI==="init"){if(cJ){cG.push('computed=this.',this.$$store.init[name],'=value;');
}else{cG.push('computed=this.',this.$$store.init[name],';');
}cG.push('this.',this.$$store.useinit[name],'=true;');
}cG.push('}');
}},__X:function(cK,cL,name,cM){cK.push('if(computed===undefined||computed===inherit){');

if(cM==="refresh"){cK.push('computed=value;');
}else{cK.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}cK.push('if((computed===undefined||computed===inherit)&&');
cK.push('this.',this.$$store.init[name],'!==undefined&&');
cK.push('this.',this.$$store.init[name],'!==inherit){');
cK.push('computed=this.',this.$$store.init[name],';');
cK.push('this.',this.$$store.useinit[name],'=true;');
cK.push('}else{');
cK.push('delete this.',this.$$store.useinit[name],';}');
cK.push('}');
cK.push('if(old===computed)return value;');
cK.push('if(computed===inherit){');
cK.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
cK.push('}');
cK.push('else if(computed===undefined)');
cK.push('delete this.',this.$$store.inherit[name],';');
cK.push('else this.',this.$$store.inherit[name],'=computed;');
cK.push('var backup=computed;');
if(cL.init!==undefined&&cM!=="init"){cK.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cK.push('if(old===undefined)old=null;');
}cK.push('if(computed===undefined||computed==inherit)computed=null;');
},__Y:function(cN,cO,name,cP){if(cP!=="set"&&cP!=="setRuntime"&&cP!=="setThemed"){cN.push('if(computed===undefined)computed=null;');
}cN.push('if(old===computed)return value;');
if(cO.init!==undefined&&cP!=="init"){cN.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cN.push('if(old===undefined)old=null;');
}},__ba:function(cQ,cR,name){if(cR.apply){cQ.push(H,cR.apply,T,name,y);
}if(cR.event){cQ.push(n,N,cR.event,O,E,cR.event,z,F);
}},__bb:function(cS,name){cS.push(u);
cS.push(q,this.$$method.refresh[name],I,this.$$method.refresh[name],w);
cS.push(C);
}},defer:function(cT){var cV=navigator.userAgent.indexOf(K)!=-1;
var cU=navigator.userAgent.indexOf(s)!=-1;
if(cV||cU){cT.__M=cT.__N;
}}});
})();
(function(){var t="qx.aspects",s=".",r="static",q="constructor",p="[Class ",o="]",n="toString",m="singleton",k="$$init_",j=".prototype",d="destructor",h="extend",g="Class",c="destruct",b="qx.Class",f="member",e="qx.event.type.Data";
qx.Bootstrap.define(b,{statics:{define:function(name,u){if(!u){var u={};
}if(u.include&&!(u.include instanceof Array)){u.include=[u.include];
}if(u.implement&&!(u.implement instanceof Array)){u.implement=[u.implement];
}var v=false;

if(!u.hasOwnProperty(h)&&!u.type){u.type=r;
v=true;
}var w=this.__bg(name,u.type,u.extend,u.statics,u.construct,u.destruct,u.include);
if(u.extend){if(u.properties){this.__bi(w,u.properties,true);
}if(u.members){this.__bk(w,u.members,true,true,false);
}if(u.events){this.__bh(w,u.events,true);
}if(u.include){for(var i=0,l=u.include.length;i<l;i++){this.__bo(w,u.include[i],false);
}}}if(u.environment){for(var x in u.environment){qx.core.Environment.add(x,u.environment[x]);
}for(var x in u.environment){qx.core.Setting.defineDeprecated(x,u.environment[x]);
}}if(u.settings){for(var x in u.settings){qx.core.Setting.define(x,u.settings[x]);
}}if(u.variants){for(var x in u.variants){qx.core.Variant.define(x,u.variants[x].allowedValues,u.variants[x].defaultValue);
}}if(u.implement){for(var i=0,l=u.implement.length;i<l;i++){this.__bm(w,u.implement[i]);
}}if(u.defer){u.defer.self=w;
u.defer(w,w.prototype,{add:function(name,y){var z={};
z[name]=y;
qx.Class.__bi(w,z,true);
}});
}return w;
},undefine:function(name){delete this.$$registry[name];
var A=name.split(s);
var C=[window];

for(var i=0;i<A.length;i++){C.push(C[i][A[i]]);
}for(var i=C.length-1;i>=1;i--){var B=C[i];
var parent=C[i-1];

if(qx.Bootstrap.isFunction(B)||qx.Bootstrap.objectGetLength(B)===0){delete parent[A[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(D,E){qx.Class.__bo(D,E,false);
},patch:function(F,G){qx.Class.__bo(F,G,true);
},isSubClassOf:function(H,I){if(!H){return false;
}
if(H==I){return true;
}
if(H.prototype instanceof I){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(J){var K=[];

while(J){if(J.$$properties){K.push.apply(K,qx.Bootstrap.getKeys(J.$$properties));
}J=J.superclass;
}return K;
},getByProperty:function(L,name){while(L){if(L.$$properties&&L.$$properties[name]){return L;
}L=L.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(M,N){return M.$$includes&&M.$$includes.indexOf(N)!==-1;
},getByMixin:function(O,P){var Q,i,l;

while(O){if(O.$$includes){Q=O.$$flatIncludes;

for(i=0,l=Q.length;i<l;i++){if(Q[i]===P){return O;
}}}O=O.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(R,S){return !!this.getByMixin(R,S);
},hasOwnInterface:function(T,U){return T.$$implements&&T.$$implements.indexOf(U)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(V){var W=[];

while(V){if(V.$$implements){W.push.apply(W,V.$$flatImplements);
}V=V.superclass;
}return W;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(X,Y){var ba=X.constructor;

if(this.hasInterface(ba,Y)){return true;
}
try{qx.Interface.assertObject(X,Y);
return true;
}catch(bb){}
try{qx.Interface.assert(ba,Y,false);
return true;
}catch(bc){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return p+this.classname+o;
},$$registry:qx.Bootstrap.$$registry,__bc:null,__bd:null,__be:function(){},__bf:function(){},__bg:function(name,bd,be,bf,bg,bh,bi){var bl;

if(!be&&qx.core.Environment.get(t)==false){bl=bf||{};
qx.Bootstrap.setDisplayNames(bl,name);
}else{var bl={};

if(be){if(!bg){bg=this.__bp();
}
if(this.__br(be,bi)){bl=this.__bs(bg,name,bd);
}else{bl=bg;
}if(bd===m){bl.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bg,name,q);
}if(bf){qx.Bootstrap.setDisplayNames(bf,name);
var bm;

for(var i=0,a=qx.Bootstrap.getKeys(bf),l=a.length;i<l;i++){bm=a[i];
var bj=bf[bm];

if(qx.core.Environment.get(t)){if(bj instanceof Function){bj=qx.core.Aspect.wrap(name+s+bm,bj,r);
}bl[bm]=bj;
}else{bl[bm]=bj;
}}}}var bk=qx.Bootstrap.createNamespace(name,bl);
bl.name=bl.classname=name;
bl.basename=bk;
bl.$$type=g;

if(bd){bl.$$classtype=bd;
}if(!bl.hasOwnProperty(n)){bl.toString=this.genericToString;
}
if(be){qx.Bootstrap.extendClass(bl,bg,be,name,bk);
if(bh){if(qx.core.Environment.get(t)){bh=qx.core.Aspect.wrap(name,bh,d);
}bl.$$destructor=bh;
qx.Bootstrap.setDisplayName(bh,name,c);
}}this.$$registry[name]=bl;
return bl;
},__bh:function(bn,bo,bp){var bq,bq;

if(bn.$$events){for(var bq in bo){bn.$$events[bq]=bo[bq];
}}else{bn.$$events=bo;
}},__bi:function(br,bs,bt){var bu;

if(bt===undefined){bt=false;
}var bv=br.prototype;

for(var name in bs){bu=bs[name];
bu.name=name;
if(!bu.refine){if(br.$$properties===undefined){br.$$properties={};
}br.$$properties[name]=bu;
}if(bu.init!==undefined){br.prototype[k+name]=bu.init;
}if(bu.event!==undefined){var event={};
event[bu.event]=e;
this.__bh(br,event,bt);
}if(bu.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bv.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(br);
}}
if(!bu.refine){qx.core.Property.attachMethods(br,name,bu);
}}},__bj:null,__bk:function(bw,bx,by,bz,bA){var bB=bw.prototype;
var bD,bC;
qx.Bootstrap.setDisplayNames(bx,bw.classname+j);

for(var i=0,a=qx.Bootstrap.getKeys(bx),l=a.length;i<l;i++){bD=a[i];
bC=bx[bD];
if(bz!==false&&bC instanceof Function&&bC.$$type==null){if(bA==true){bC=this.__bl(bC,bB[bD]);
}else{if(bB[bD]){bC.base=bB[bD];
}bC.self=bw;
}
if(qx.core.Environment.get(t)){bC=qx.core.Aspect.wrap(bw.classname+s+bD,bC,f);
}}bB[bD]=bC;
}},__bl:function(bE,bF){if(bF){return function(){var bH=bE.base;
bE.base=bF;
var bG=bE.apply(this,arguments);
bE.base=bH;
return bG;
};
}else{return bE;
}},__bm:function(bI,bJ){var bK=qx.Interface.flatten([bJ]);

if(bI.$$implements){bI.$$implements.push(bJ);
bI.$$flatImplements.push.apply(bI.$$flatImplements,bK);
}else{bI.$$implements=[bJ];
bI.$$flatImplements=bK;
}},__bn:function(bL){var name=bL.classname;
var bM=this.__bs(bL,name,bL.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bL),l=a.length;i<l;i++){bN=a[i];
bM[bN]=bL[bN];
}bM.prototype=bL.prototype;
var bP=bL.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bP),l=a.length;i<l;i++){bN=a[i];
var bQ=bP[bN];
if(bQ&&bQ.self==bL){bQ.self=bM;
}}for(var bN in this.$$registry){var bO=this.$$registry[bN];

if(!bO){continue;
}
if(bO.base==bL){bO.base=bM;
}
if(bO.superclass==bL){bO.superclass=bM;
}
if(bO.$$original){if(bO.$$original.base==bL){bO.$$original.base=bM;
}
if(bO.$$original.superclass==bL){bO.$$original.superclass=bM;
}}}qx.Bootstrap.createNamespace(name,bM);
this.$$registry[name]=bM;
return bM;
},__bo:function(bR,bS,bT){if(this.hasMixin(bR,bS)){return;
}var bW=bR.$$original;

if(bS.$$constructor&&!bW){bR=this.__bn(bR);
}var bV=qx.Mixin.flatten([bS]);
var bU;

for(var i=0,l=bV.length;i<l;i++){bU=bV[i];
if(bU.$$events){this.__bh(bR,bU.$$events,bT);
}if(bU.$$properties){this.__bi(bR,bU.$$properties,bT);
}if(bU.$$members){this.__bk(bR,bU.$$members,bT,bT,bT);
}}if(bR.$$includes){bR.$$includes.push(bS);
bR.$$flatIncludes.push.apply(bR.$$flatIncludes,bV);
}else{bR.$$includes=[bS];
bR.$$flatIncludes=bV;
}},__bp:function(){function bX(){bX.base.apply(this,arguments);
}return bX;
},__bq:function(){return function(){};
},__br:function(bY,ca){if(bY&&bY.$$includes){var cb=bY.$$flatIncludes;

for(var i=0,l=cb.length;i<l;i++){if(cb[i].$$constructor){return true;
}}}if(ca){var cc=qx.Mixin.flatten(ca);

for(var i=0,l=cc.length;i<l;i++){if(cc[i].$$constructor){return true;
}}}return false;
},__bs:function(cd,name,ce){var cg=function(){var cj=cg;
var ci=cj.$$original.apply(this,arguments);
if(cj.$$includes){var ch=cj.$$flatIncludes;

for(var i=0,l=ch.length;i<l;i++){if(ch[i].$$constructor){ch[i].$$constructor.apply(this,arguments);
}}}return ci;
};

if(qx.core.Environment.get(t)){var cf=qx.core.Aspect.wrap(name,cg,q);
cg.$$original=cd;
cg.constructor=cf;
cg=cf;
}cg.$$original=cd;
cd.wrapper=cg;
return cg;
}},defer:function(){if(qx.core.Environment.get(t)){for(var ck in qx.Bootstrap.$$registry){var cl=qx.Bootstrap.$$registry[ck];

for(var cm in cl){if(cl[cm] instanceof Function){cl[cm]=qx.core.Aspect.wrap(ck+s+cm,cl[cm],r);
}}}}}});
})();
(function(){var x="off",w="on",u="|",t="default",s="object",r="&",q="qx.aspects",p="qx.mobile.nativescroll",o="qx.mobile.emulatetouch",n="$",e="qx.allowUrlVariants",m="qx.debug",h="qx.client",c="qx.dynlocale",b="webkit",g="qxvariant",f="opera",j=":",a="qx.core.Variant",k="mshtml",d="gecko";
qx.Bootstrap.define(a,{statics:{__bt:{},__bu:{},compilerIsSet:function(){return true;
},define:function(y,z,A){this.defineDeprecated(y,z,A);
},defineDeprecated:function(B,C,D){if(!this.__bt[B]){this.__bt[B]={};
}else{}this.__bt[B].allowedValues=C;
this.__bt[B].defaultValue=D;
},get:function(E){var F=this.__bt[E];

if(F.value!==undefined){return F.value;
}return F.defaultValue;
},__bv:function(){if(window.qxvariants){for(var G in qxvariants){if(!this.__bt[G]){this.__bt[G]={};
}this.__bt[G].value=qxvariants[G];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(H){}this.__bw(this.__bt);
}},__bw:function(){if(qx.core.Environment.get(e)!=true){return;
}var I=document.location.search.slice(1).split(r);

for(var i=0;i<I.length;i++){var J=I[i].split(j);

if(J.length!=3||J[0]!=g){continue;
}var K=J[1];

if(!this.__bt[K]){this.__bt[K]={};
}this.__bt[K].value=decodeURIComponent(J[2]);
}},select:function(L,M){for(var N in M){if(this.isSet(L,N)){return M[N];
}}
if(M[t]!==undefined){return M[t];
}},isSet:function(O,P){var Q=O+n+P;

if(this.__bu[Q]!==undefined){return this.__bu[Q];
}var S=false;
if(P.indexOf(u)<0){S=this.get(O)===P;
}else{var R=P.split(u);

for(var i=0,l=R.length;i<l;i++){if(this.get(O)===R[i]){S=true;
break;
}}}this.__bu[Q]=S;
return S;
},__bx:function(v){return typeof v===s&&v!==null&&v instanceof Array;
},__by:function(v){return typeof v===s&&v!==null&&!(v instanceof Array);
},__bz:function(T,U){for(var i=0,l=T.length;i<l;i++){if(T[i]==U){return true;
}}return false;
}},defer:function(V){V.defineDeprecated(h,[d,k,f,b],qx.bom.client.Engine.getName());
V.defineDeprecated(m,[w,x],w);
V.defineDeprecated(q,[w,x],x);
V.defineDeprecated(c,[w,x],w);
V.defineDeprecated(o,[w,x],x);
V.defineDeprecated(p,[w,x],x);
V.__bv();
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
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__ch:{},__ci:0,__cj:[],register:function(f){var j=this.__ch;

if(!j){return;
}var h=f.$$hash;

if(h==null){var g=this.__cj;

if(g.length>0){h=g.pop();
}else{h=(this.__ci++)+d;
}f.$$hash=h;
}j[h]=f;
},unregister:function(k){var m=k.$$hash;

if(m==null){return;
}var n=this.__ch;

if(n&&n[m]){delete n[m];
this.__cj.push(m);
}try{delete k.$$hash;
}catch(o){if(k.removeAttribute){k.removeAttribute(e);
}}},toHashCode:function(p){var r=p.$$hash;

if(r!=null){return r;
}var q=this.__cj;

if(q.length>0){r=q.pop();
}else{r=(this.__ci++)+d;
}return p.$$hash=r;
},clearHashCode:function(s){var t=s.$$hash;

if(t!=null){this.__cj.push(t);
try{delete s.$$hash;
}catch(u){if(s.removeAttribute){s.removeAttribute(e);
}}}},fromHashCode:function(v){return this.__ch[v]||null;
},shutdown:function(){this.inShutDown=true;
var x=this.__ch;
var z=[];

for(var y in x){z.push(y);
}z.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var w,i=0,l=z.length;

while(true){try{for(;i<l;i++){y=z[i];
w=x[y];

if(w&&w.dispose){w.dispose();
}}}catch(A){qx.Bootstrap.error(this,"Could not dispose object "+w.toString()+": "+A);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__ch;
},getRegistry:function(){return this.__ch;
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
(function(){var g="mshtml",f="engine.name",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Class.define(d,{statics:{toArray:function(h,j){return this.cast(h,Array,j);
},cast:function(k,m,n){if(k.constructor===m){return k;
}
if(qx.Class.hasInterface(k,qx.data.IListData)){var k=k.toArray();
}var o=new m;
if((qx.core.Environment.get(f)==g)){if(k.item){for(var i=n||0,l=k.length;i<l;i++){o.push(k[i]);
}return o;
}}if(Object.prototype.toString.call(k)===e&&n==null){o.push.apply(o,k);
}else{o.push.apply(o,Array.prototype.slice.call(k,n||0));
}return o;
},fromArguments:function(p,q){return Array.prototype.slice.call(p,q||0);
},fromCollection:function(r){if((qx.core.Environment.get(f)==g)){if(r.item){var s=[];

for(var i=0,l=r.length;i<l;i++){s[i]=r[i];
}return s;
}}return Array.prototype.slice.call(r,0);
},fromShortHand:function(t){var v=t.length;
var u=qx.lang.Array.clone(t);
switch(v){case 1:u[1]=u[2]=u[3]=u[0];
break;
case 2:u[2]=u[0];
case 3:u[3]=u[1];
}return u;
},clone:function(w){return w.concat();
},insertAt:function(x,y,i){x.splice(i,0,y);
return x;
},insertBefore:function(z,A,B){var i=z.indexOf(B);

if(i==-1){z.push(A);
}else{z.splice(i,0,A);
}return z;
},insertAfter:function(C,D,E){var i=C.indexOf(E);

if(i==-1||i==(C.length-1)){C.push(D);
}else{C.splice(i+1,0,D);
}return C;
},removeAt:function(F,i){return F.splice(i,1)[0];
},removeAll:function(G){G.length=0;
return this;
},append:function(H,I){Array.prototype.push.apply(H,I);
return H;
},exclude:function(J,K){for(var i=0,M=K.length,L;i<M;i++){L=J.indexOf(K[i]);

if(L!=-1){J.splice(L,1);
}}return J;
},remove:function(N,O){var i=N.indexOf(O);

if(i!=-1){N.splice(i,1);
return O;
}},contains:function(P,Q){return P.indexOf(Q)!==-1;
},equals:function(R,S){var length=R.length;

if(length!==S.length){return false;
}
for(var i=0;i<length;i++){if(R[i]!==S[i]){return false;
}}return true;
},sum:function(T){var U=0;

for(var i=0,l=T.length;i<l;i++){U+=T[i];
}return U;
},max:function(V){var i,X=V.length,W=V[0];

for(i=1;i<X;i++){if(V[i]>W){W=V[i];
}}return W===undefined?null:W;
},min:function(Y){var i,bb=Y.length,ba=Y[0];

for(i=1;i<bb;i++){if(Y[i]<ba){ba=Y[i];
}}return ba===undefined?null:ba;
},unique:function(bc){var bm=[],be={},bh={},bj={};
var bi,bd=0;
var bn=c+qx.lang.Date.now();
var bf=false,bl=false,bo=false;
for(var i=0,bk=bc.length;i<bk;i++){bi=bc[i];
if(bi===null){if(!bf){bf=true;
bm.push(bi);
}}else if(bi===undefined){}else if(bi===false){if(!bl){bl=true;
bm.push(bi);
}}else if(bi===true){if(!bo){bo=true;
bm.push(bi);
}}else if(typeof bi===a){if(!be[bi]){be[bi]=1;
bm.push(bi);
}}else if(typeof bi===b){if(!bh[bi]){bh[bi]=1;
bm.push(bi);
}}else{bg=bi[bn];

if(bg==null){bg=bi[bn]=bd++;
}
if(!bj[bg]){bj[bg]=bi;
bm.push(bi);
}}}for(var bg in bj){try{delete bj[bg][bn];
}catch(bp){try{bj[bg][bn]=null;
}catch(bq){throw new Error("Cannot clean-up map entry doneObjects["+bg+"]["+bn+"]");
}}}return bm;
}}});
})();
(function(){var f="()",e=".",d=".prototype.",c='anonymous()',b="qx.lang.Function",a=".constructor()";
qx.Class.define(b,{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
},getName:function(h){if(h.displayName){return h.displayName;
}
if(h.$$original||h.wrapper||h.classname){return h.classname+a;
}
if(h.$$mixin){for(var j in h.$$mixin.$$members){if(h.$$mixin.$$members[j]==h){return h.$$mixin.name+d+j+f;
}}for(var j in h.$$mixin){if(h.$$mixin[j]==h){return h.$$mixin.name+e+j+f;
}}}
if(h.self){var k=h.self.constructor;

if(k){for(var j in k.prototype){if(k.prototype[j]==h){return k.classname+d+j+f;
}}for(var j in k){if(k[j]==h){return k.classname+e+j+f;
}}}}var i=h.toString().match(/function\s*(\w*)\s*\(.*/);

if(i&&i.length>=1&&i[1]){return i[1]+f;
}return c;
},globalEval:function(l){if(window.execScript){return window.execScript(l);
}else{return eval.call(window,l);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(m,n){if(!n){return m;
}if(!(n.self||n.args||n.delay!=null||n.periodical!=null||n.attempt)){return m;
}return function(event){var p=qx.lang.Array.fromArguments(arguments);
if(n.args){p=n.args.concat(p);
}
if(n.delay||n.periodical){var o=qx.event.GlobalError.observeMethod(function(){return m.apply(n.self||this,p);
});

if(n.delay){return window.setTimeout(o,n.delay);
}
if(n.periodical){return window.setInterval(o,n.periodical);
}}else if(n.attempt){var q=false;

try{q=m.apply(n.self||this,p);
}catch(r){}return q;
}else{return m.apply(n.self||this,p);
}};
},bind:function(s,self,t){return this.create(s,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(u,v){return this.create(u,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(w,self,x){if(arguments.length<3){return function(event){return w.call(self||this,event||window.event);
};
}else{var y=qx.lang.Array.fromArguments(arguments,2);
return function(event){var z=[event||window.event];
z.push.apply(z,y);
w.apply(self||this,z);
};
}},attempt:function(A,self,B){return this.create(A,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(C,D,self,E){return this.create(C,{delay:D,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(F,G,self,H){return this.create(F,{periodical:G,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var l="on",k="engine.name",j="gecko",i="engine.version",h="function",g="undefined",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:function(m,n,o,p){if(m.addEventListener){m.addEventListener(n,o,!!p);
}else if(m.attachEvent){m.attachEvent(l+n,o);
}else if(typeof m[l+n]!=g){m[l+n]=o;
}else{}},removeNativeListener:function(q,r,s,t){if(q.removeEventListener){q.removeEventListener(r,s,!!t);
}else if(q.detachEvent){try{q.detachEvent(l+r,s);
}catch(e){if(e.number!==-2146828218){throw e;
}}}else if(typeof q[l+r]!=g){q[l+r]=null;
}else{}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(k)==j)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===b){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get(k)==j)&&parseFloat(qx.core.Environment.get(i))>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get(k)==j)&&parseFloat(qx.core.Environment.get(i))<1.9){try{e.keyCode=0;
}catch(u){}}}else{try{e.keyCode=0;
}catch(v){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(w,x){if(document.createEvent){var y=document.createEvent(a);
y.initEvent(x,true,true);
return !w.dispatchEvent(y);
}else{var y=document.createEventObject();
return w.fireEvent(l+x,y);
}},supportsEvent:qx.core.Environment.select(k,{"webkit":function(z,A){return z.hasOwnProperty(l+A);
},"default":function(B,C){var D=l+C;
var E=(D in B);

if(!E){E=typeof B[D]==h;

if(!E&&B.setAttribute){B.setAttribute(D,c);
E=typeof B[D]==h;
B.removeAttribute(D);
}}return E;
}})}});
})();
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="UNKNOWN_",j="c",h="__bF",g="DOM_",c="__bE",f="WIN_",e="QX_",b="qx.event.Manager",a="capture",d="DOCUMENT_";
qx.Class.define(b,{extend:Object,construct:function(s,t){this.__bA=s;
this.__bB=qx.core.ObjectRegistry.toHashCode(s);
this.__bC=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__bD={};
this.__bE={};
this.__bF={};
this.__bG={};
},statics:{__bH:0,getNextUniqueId:function(){return (this.__bH++)+o;
}},members:{__bC:null,__bD:null,__bF:null,__bI:null,__bE:null,__bG:null,__bA:null,__bB:null,getWindow:function(){return this.__bA;
},getWindowId:function(){return this.__bB;
},getHandler:function(u){var v=this.__bE[u.classname];

if(v){return v;
}return this.__bE[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__bF[w.classname];

if(x){return x;
}return this.__bF[w.classname]=new w(this,this.__bC);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__bD[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__bD[M];
var K=[];

if(O){var I,N,G,J,L;

for(var H in O){I=H.indexOf(p);
N=H.substring(0,I);
G=H.charAt(I+1)==j;
J=O[H];

for(var i=0,l=J.length;i<l;i++){L=J[i];
K.push({self:L.context,handler:L.handler,type:N,capture:G});
}}}return K;
},toggleAttachedEvents:function(P,Q){var V=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var X=this.__bD[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__bJ(P,W,R);
}else{this.__bK(P,W,R);
}}}},hasListener:function(Y,ba,bb){var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__bD[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return !!(bd&&bd.length>0);
},importListeners:function(bg,bh){var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__bD[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__bJ(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__bH++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__bD[bx];

if(!bz){bz=this.__bD[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__bJ(bp,bq,bs);
}var by=(qx.event.Manager.__bH++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=g+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__bA){bF=true;
bL=f+bB;
}else if(bA.classname){bO=true;
bL=e+bA.classname+n+bB;
}else{bL=k+bA+n+bB;
}var bH=this.__bG;

if(bH[bL]){return bH[bL];
}var bK=this.__bC.getHandlers();
var bG=qx.event.IEventHandler;
var bI,bJ,bE,bD;

for(var i=0,l=bK.length;i<l;i++){bI=bK[i];
bE=bI.SUPPORTED_TYPES;

if(bE&&!bE[bB]){continue;
}bD=bI.TARGET_CHECK;

if(bD){var bM=false;

if(bN&&((bD&bG.TARGET_DOMNODE)!=0)){bM=true;
}else if(bF&&((bD&bG.TARGET_WINDOW)!=0)){bM=true;
}else if(bO&&((bD&bG.TARGET_OBJECT)!=0)){bM=true;
}else if(bC&&((bD&bG.TARGET_DOCUMENT)!=0)){bM=true;
}
if(!bM){continue;
}}bJ=this.getHandler(bK[i]);

if(bI.IGNORE_CAN_HANDLE||bJ.canHandleEvent(bA,bB)){bH[bL]=bJ;
return bJ;
}}return null;
},__bJ:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}},removeListener:function(bT,bU,bV,self,bW){var cb;
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__bD[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__bK(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__bD[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__bK(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__bD[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===a;
this.__bK(cq,cv,cr);
}}delete this.__bD[cu];
return true;
},deleteAllListeners:function(cx){delete this.__bD[cx];
},__bK:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}},dispatchEvent:function(cC,event){var cH;
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__bC.getDispatchers();
var cF;
var cE=false;

for(var i=0,l=cG.length;i<l;i++){cF=this.getDispatcher(cG[i]);
if(cF.canDispatchEvent(cC,event,cI)){cF.dispatchEvent(cC,event,cI);
cE=true;
break;
}}
if(!cE){return true;
}var cD=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cD;
},dispose:function(){this.__bC.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,c);
qx.util.DisposeUtil.disposeMap(this,h);
this.__bD=this.__bA=this.__bI=null;
this.__bC=this.__bG=null;
}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__bL:{},getManager:function(d){if(d==null){d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__bL[f];

if(!e){e=new qx.event.Manager(d,this);
this.__bL[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__bL[h];
},addListener:function(i,j,k,self,l){return this.getManager(i).addListener(i,j,k,self,l);
},removeListener:function(m,n,o,self,p){return this.getManager(m).removeListener(m,n,o,self,p);
},removeListenerById:function(q,r){return this.getManager(q).removeListenerById(q,r);
},removeAllListeners:function(s){return this.getManager(s).removeAllListeners(s);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(v,w,x){return this.getManager(v).hasListener(v,w,x);
},serializeListeners:function(y){return this.getManager(y).serializeListeners(y);
},createEvent:function(z,A,B){if(A==null){A=qx.event.type.Event;
}var C=qx.event.Pool.getInstance().getObject(A);
B?C.init.apply(C,B):C.init();
if(z){C.setType(z);
}return C;
},dispatchEvent:function(D,event){return this.getManager(D).dispatchEvent(D,event);
},fireEvent:function(E,F,G,H){var I;
var J=this.createEvent(F,G||null,H);
return this.getManager(E).dispatchEvent(E,J);
},fireNonBubblingEvent:function(K,L,M,N){var O=this.getManager(K);

if(!O.hasListener(K,L,false)){return true;
}var P=this.createEvent(L,M||null,N);
return O.dispatchEvent(K,P);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bM:[],addHandler:function(Q){this.__bM.push(Q);
this.__bM.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bM;
},__bN:[],addDispatcher:function(R,S){this.__bN.push(R);
this.__bN.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bN;
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
}else if(bc.message&&bc.message.indexOf("Backtrace:")>=0){var bg=[];
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
(function(){var p="",o='\\u',n="g",m="]",l="undefined",k='\\$1',j="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h='-',g="qx.lang.String",f="(^|[^",c="0",e="%",d=' ',b='\n',a="])[";
qx.Class.define(g,{statics:{__bP:j,__bQ:null,camelCase:function(q){return q.replace(/\-([a-z])/g,function(r,s){return s.toUpperCase();
});
},hyphenate:function(t){return t.replace(/[A-Z]/g,function(u){return (h+u.charAt(0).toLowerCase());
});
},capitalize:function(v){if(this.__bQ===null){this.__bQ=new RegExp(f+
this.__bP.replace(/[0-9A-F]{4}/g,function(w){return o+w;
})+
a+
this.__bP.replace(/[0-9A-F]{4}/g,function(x){return o+x;
})+m,n);
}return v.replace(this.__bQ,function(y){return y.toUpperCase();
});
},clean:function(z){return this.trim(z.replace(/\s+/g,d));
},trimLeft:function(A){return A.replace(/^\s+/,p);
},trimRight:function(B){return B.replace(/\s+$/,p);
},trim:function(C){return C.replace(/^\s+|\s+$/g,p);
},startsWith:function(D,E){return D.indexOf(E)===0;
},endsWith:function(F,G){return F.substring(F.length-G.length,F.length)===G;
},repeat:function(H,I){return H.length>0?new Array(I+1).join(H):p;
},pad:function(J,length,K){var L=length-J.length;

if(L>0){if(typeof K===l){K=c;
}return this.repeat(K,L)+J;
}else{return J;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(M,N){return M.indexOf(N)!=-1;
},format:function(O,P){var Q=O;
var i=P.length;

while(i--){Q=Q.replace(new RegExp(e+(i+1),n),P[i]+p);
}return Q;
},escapeRegexpChars:function(R){return R.replace(/([.*+?^${}()|[\]\/\\])/g,k);
},toArray:function(S){return S.split(/\B|\b/g);
},stripTags:function(T){return T.replace(/<\/?[^>]+>/gi,p);
},stripScripts:function(U,V){var X=p;
var W=U.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){X+=arguments[1]+b;
return p;
});

if(V===true){qx.lang.Function.globalEval(X);
}return W;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__bR:0,__bS:0,__bT:false,__bU:0,__bV:null,__bW:null,setMaxEntries:function(c){this.__bW=c;
this.clear();
},getMaxEntries:function(){return this.__bW;
},addEntry:function(d){this.__bV[this.__bR]=d;
this.__bR=this.__bX(this.__bR,1);
var e=this.getMaxEntries();

if(this.__bS<e){this.__bS++;
}if(this.__bT&&(this.__bU<e)){this.__bU++;
}},mark:function(){this.__bT=true;
this.__bU=0;
},clearMark:function(){this.__bT=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__bS){f=this.__bS;
}if(g&&this.__bT&&(f>this.__bU)){f=this.__bU;
}
if(f>0){var i=this.__bX(this.__bR,-1);
var h=this.__bX(i,-f+1);
var j;

if(h<=i){j=this.__bV.slice(h,i+1);
}else{j=this.__bV.slice(h,this.__bS).concat(this.__bV.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__bV=new Array(this.getMaxEntries());
this.__bS=0;
this.__bU=0;
this.__bR=0;
},__bX:function(k,l){var m=this.getMaxEntries();
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
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",H="number",G="stringify",F="]",E="date",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",s="qx.log.Logger",t="[",q="#",r="warn",o="document",p="{...(",m="text[",n="[...(",u="\n",v=")}",x=")]",w="object";
qx.Class.define(s,{statics:{__bY:A,setLevel:function(I){this.__bY=I;
},getLevel:function(){return this.__bY;
},setTreshold:function(J){this.__cc.setMaxMessages(J);
},getTreshold:function(){return this.__cc.getMaxMessages();
},__ca:{},__cb:0,register:function(K){if(K.$$id){return;
}var M=this.__cb++;
this.__ca[M]=K;
K.$$id=M;
var L=this.__cd;
var N=this.__cc.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__bY]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__ca[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__ce(A,arguments);
},info:function(S,T){qx.log.Logger.__ce(e,arguments);
},warn:function(U,V){qx.log.Logger.__ce(r,arguments);
},error:function(W,X){qx.log.Logger.__ce(j,arguments);
},trace:function(Y){qx.log.Logger.__ce(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
},deprecatedClassWarning:function(bd,be){var bf;
},deprecatedEventWarning:function(bg,event,bh){var bi;
},deprecatedMixinWarning:function(bj,bk){var bl;
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
},clear:function(){this.__cc.clearHistory();
},__cc:new qx.log.appender.RingBuffer(50),__cd:{debug:0,info:1,warn:2,error:3},__ce:function(bv,bw){var bB=this.__cd;

if(bB[bv]<bB[this.__bY]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__cg(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__cc.process(bD);
var bE=this.__ca;

for(var bz in bE){bE[bz].process(bD);
}},__cf:function(bF){if(bF===undefined){return y;
}else if(bF===null){return b;
}
if(bF.$$type){return a;
}var bG=typeof bF;

if(bG===C||bG==c||bG===H||bG===B){return bG;
}else if(bG===w){if(bF.nodeType){return k;
}else if(bF.classname){return d;
}else if(bF instanceof Array){return g;
}else if(bF instanceof Error){return j;
}else if(bF instanceof Date){return E;
}else{return z;
}}
if(bF.toString){return G;
}return D;
},__cg:function(bH,bI){var bP=this.__cf(bH);
var bL=D;
var bK=[];

switch(bP){case b:case y:bL=bP;
break;
case c:case H:case B:case E:bL=bH;
break;
case k:if(bH.nodeType===9){bL=o;
}else if(bH.nodeType===3){bL=m+bH.nodeValue+F;
}else if(bH.nodeType===1){bL=bH.nodeName.toLowerCase();

if(bH.id){bL+=q+bH.id;
}}else{bL=k;
}break;
case C:bL=qx.lang.Function.getName(bH)||bP;
break;
case d:bL=bH.basename+t+bH.$$hash+F;
break;
case a:case G:bL=bH.toString();
break;
case j:bK=qx.dev.StackTrace.getStackTraceFromError(bH);
bL=bH.toString();
break;
case g:if(bI){bL=[];

for(var i=0,l=bH.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bL.push(this.__cg(bH[i],false));
}}else{bL=n+bH.length+x;
}break;
case z:if(bI){var bJ;
var bO=[];

for(var bN in bH){bO.push(bN);
}bO.sort();
bL=[];

for(var i=0,l=bO.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bN=bO[i];
bJ=this.__cg(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__ce(bR[i][0],bR[i][1]);
}qx.Bootstrap.debug=bQ.debug;
qx.Bootstrap.info=bQ.info;
qx.Bootstrap.warn=bQ.warn;
qx.Bootstrap.error=bQ.error;
qx.Bootstrap.trace=bQ.trace;
}});
})();
(function(){var q="set",p="get",o="reset",n="MSIE 6.0",m="info",k="qx.core.Object",j="error",h="warn",g="]",f="debug",b="[",d="$$user_",c="rv:1.8.1",a="Object";
qx.Class.define(k,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:a},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+b+this.$$hash+g;
},base:function(r,s){if(arguments.length===1){return r.callee.base.call(this);
}else{return r.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(t){return t.callee.self;
},clone:function(){var v=this.constructor;
var u=new v;
var x=qx.Class.getProperties(v);
var w=qx.core.Property.$$store.user;
var y=qx.core.Property.$$method.set;
var name;
for(var i=0,l=x.length;i<l;i++){name=x[i];

if(this.hasOwnProperty(w[name])){u[y[name]](this[w[name]]);
}}return u;
},set:function(z,A){var C=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(z)){if(!this[C[z]]){if(this[q+qx.Bootstrap.firstUp(z)]!=undefined){this[q+qx.Bootstrap.firstUp(z)](A);
return this;
}}return this[C[z]](A);
}else{for(var B in z){if(!this[C[B]]){if(this[q+qx.Bootstrap.firstUp(B)]!=undefined){this[q+qx.Bootstrap.firstUp(B)](z[B]);
continue;
}}this[C[B]](z[B]);
}return this;
}},get:function(D){var E=qx.core.Property.$$method.get;

if(!this[E[D]]){if(this[p+qx.Bootstrap.firstUp(D)]!=undefined){return this[p+qx.Bootstrap.firstUp(D)]();
}}return this[E[D]]();
},reset:function(F){var G=qx.core.Property.$$method.reset;

if(!this[G[F]]){if(this[o+qx.Bootstrap.firstUp(F)]!=undefined){this[o+qx.Bootstrap.firstUp(F)]();
return;
}}this[G[F]]();
},__co:qx.event.Registration,addListener:function(H,I,self,J){if(!this.$$disposed){return this.__co.addListener(this,H,I,self,J);
}return null;
},addListenerOnce:function(K,L,self,M){var N=function(e){this.removeListener(K,N,this,M);
L.call(self||this,e);
};
return this.addListener(K,N,this,M);
},removeListener:function(O,P,self,Q){if(!this.$$disposed){return this.__co.removeListener(this,O,P,self,Q);
}return false;
},removeListenerById:function(R){if(!this.$$disposed){return this.__co.removeListenerById(this,R);
}return false;
},hasListener:function(S,T){return this.__co.hasListener(this,S,T);
},dispatchEvent:function(U){if(!this.$$disposed){return this.__co.dispatchEvent(this,U);
}return true;
},fireEvent:function(V,W,X){if(!this.$$disposed){return this.__co.fireEvent(this,V,W,X);
}return true;
},fireNonBubblingEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__co.fireNonBubblingEvent(this,Y,ba,bb);
}return true;
},fireDataEvent:function(bc,bd,be,bf){if(!this.$$disposed){if(be===undefined){be=null;
}return this.__co.fireNonBubblingEvent(this,bc,qx.event.type.Data,[bd,be,!!bf]);
}return true;
},__cp:null,setUserData:function(bg,bh){if(!this.__cp){this.__cp={};
}this.__cp[bg]=bh;
},getUserData:function(bi){if(!this.__cp){return null;
}var bj=this.__cp[bi];
return bj===undefined?null:bj;
},__cq:qx.log.Logger,debug:function(bk){this.__cr(f,arguments);
},info:function(bl){this.__cr(m,arguments);
},warn:function(bm){this.__cr(h,arguments);
},error:function(bn){this.__cr(j,arguments);
},trace:function(){this.__cq.trace(this);
},__cr:function(bo,bp){var bq=qx.lang.Array.fromArguments(bp);
bq.unshift(this);
this.__cq[bo].apply(this.__cq,bq);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bv,bt,bs,bw;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
var bu=this.constructor;
var br;

while(bu.superclass){if(bu.$$destructor){bu.$$destructor.call(this);
}if(bu.$$includes){br=bu.$$flatIncludes;

for(var i=0,l=br.length;i<l;i++){if(br[i].$$destructor){br[i].$$destructor.call(this);
}}}bu=bu.superclass;
}if(this.__cs){this.__cs();
}},__cs:null,__ct:function(){var bx=qx.Class.getProperties(this.constructor);

for(var i=0,l=bx.length;i<l;i++){delete this[d+bx[i]];
}},_disposeObjects:function(by){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bz){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bA){qx.util.DisposeUtil.disposeArray(this,bA);
},_disposeMap:function(bB){qx.util.DisposeUtil.disposeMap(this,bB);
}},environment:{"qx.disposerDebugLevel":0},defer:function(bC,bD){var bF=navigator.userAgent.indexOf(n)!=-1;
var bE=navigator.userAgent.indexOf(c)!=-1;
if(bF||bE){bD.__cs=bD.__ct;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__cp=null;
var bI=this.constructor;
var bM;
var bN=qx.core.Property.$$store;
var bK=bN.user;
var bL=bN.theme;
var bG=bN.inherit;
var bJ=bN.useinit;
var bH=bN.init;

while(bI){bM=bI.$$properties;

if(bM){for(var name in bM){if(bM[name].dereference){this[bK[name]]=this[bL[name]]=this[bG[name]]=this[bJ[name]]=this[bH[name]]=undefined;
}}}bI=bI.superclass;
}}});
})();
(function(){var b="qx.application.Mobile",a="qx.mobile.nativescroll";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,construct:function(){qx.core.Object.call(this);
},members:{__DV:null,main:function(){this.__DV=this._createRootWidget();

if(qx.core.Environment.get(a)==false){this.__DV.setShowScrollbarY(false);
}},getRoot:function(){return this.__DV;
},_createRootWidget:function(){return new qx.ui.mobile.core.Root();
},finalize:function(){},close:function(){},terminate:function(){}},destruct:function(){this.__DV=null;
}});
})();
(function(){var i="back",h="changeSelectedFeed",g="feed",f="feedreader.MobileApplication",d="article",c="selectedFeed",b="selectedArticle",a="changeSelectedArticle";
qx.Class.define(f,{extend:qx.application.Mobile,members:{__DW:null,main:function(){qx.application.Mobile.prototype.main.call(this);
var j=new feedreader.model.Model();
var k=feedreader.io.FeedLoader.getInstance();
this.__DW=j.getFeedFolder();
k.loadAll(this.__DW);
this.buildUpGui();
},buildUpGui:function(){var m=new feedreader.mobile.OverviewPage();
var n=new feedreader.mobile.FeedPage();
var l=new feedreader.mobile.ArticlePage();
m.show();
m.setFeeds(this.__DW);
n.addListener(i,function(){m.show({reverse:true});
m.setSelectedFeed(null);
});
l.addListener(i,function(){n.show({reverse:true});
n.setSelectedArticle(null);
});
n.addListener(a,function(e){l.show();
});
m.addListener(h,function(e){n.show();
});
m.bind(c,n,g);
n.bind(b,l,d);
}}});
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(b,c){this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!b;
this._cancelable=!!c;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(d){if(d){var e=d;
}else{var e=qx.event.Pool.getInstance().getObject(this.constructor);
}e._type=this._type;
e._target=this._target;
e._currentTarget=this._currentTarget;
e._relatedTarget=this._relatedTarget;
e._originalTarget=this._originalTarget;
e._stopPropagation=this._stopPropagation;
e._bubbles=this._bubbles;
e._preventDefault=this._preventDefault;
e._cancelable=this._cancelable;
return e;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(f){this._type=f;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(g){this._eventPhase=g;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(h){this._target=h;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(i){this._currentTarget=i;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(j){this._relatedTarget=j;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(k){this._originalTarget=k;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(l){this._bubbles=l;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__dk:null,__dl:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__dk=b;
this.__dl=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__dk=this.__dk;
f.__dl=this.__dl;
return f;
},getData:function(){return this.__dk;
},getOldData:function(){return this.__dl;
}},destruct:function(){this.__dk=this.__dl=null;
}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="qx.debug.databinding",G="set",F="deepBinding",E="item",D="reset",C="qx.data.SingleValueBinding",B="' (",A="Boolean",z=") to the object '",y="Integer",x=" of object ",u="Binding property ",v="DEBUG_ON",s="Binding from '",t="PositiveNumber",q="PositiveInteger",r="Binding does not exist!",n=").",p="Date",w=" not possible: No event available. ";
qx.Class.define(C,{statics:{DEBUG_ON:false,__dm:{},bind:function(H,I,J,K,L){var W=this.__do(H,I,J,K,L);
var R=I.split(d);
var N=this.__du(R);
var V=[];
var S=[];
var T=[];
var P=[];
var Q=H;
try{for(var i=0;i<R.length;i++){if(N[i]!==l){P.push(g);
}else{P.push(this.__dp(Q,R[i]));
}V[i]=Q;
if(i==R.length-1){if(N[i]!==l){var bb=N[i]===h?Q.length-1:N[i];
var M=Q.getItem(bb);
this.__dt(M,J,K,L,H);
T[i]=this.__dv(Q,P[i],J,K,L,N[i]);
}else{if(R[i]!=null&&Q[m+qx.lang.String.firstUp(R[i])]!=null){var M=Q[m+qx.lang.String.firstUp(R[i])]();
this.__dt(M,J,K,L,H);
}T[i]=this.__dv(Q,P[i],J,K,L);
}}else{var X={index:i,propertyNames:R,sources:V,listenerIds:T,arrayIndexValues:N,targetObject:J,targetPropertyChain:K,options:L,listeners:S};
var U=qx.lang.Function.bind(this.__dn,this,X);
S.push(U);
T[i]=Q.addListener(P[i],U);
}if(Q[m+qx.lang.String.firstUp(R[i])]==null){Q=null;
}else if(N[i]!==l){Q=Q[m+qx.lang.String.firstUp(R[i])](N[i]);
}else{Q=Q[m+qx.lang.String.firstUp(R[i])]();
}
if(!Q){break;
}}}catch(bc){for(var i=0;i<V.length;i++){if(V[i]&&T[i]){V[i].removeListenerById(T[i]);
}}var ba=W.targets;
var O=W.listenerIds[i];
for(var i=0;i<ba.length;i++){if(ba[i]&&O[i]){ba[i].removeListenerById(O[i]);
}}throw bc;
}var Y={type:F,listenerIds:T,sources:V,targetListenerIds:W.listenerIds,targets:W.targets};
this.__dw(Y,H,I,J,K);
return Y;
},__dn:function(bd){if(bd.options&&bd.options.onUpdate){bd.options.onUpdate(bd.sources[bd.index],bd.targetObject);
}for(var j=bd.index+1;j<bd.propertyNames.length;j++){var bh=bd.sources[j];
bd.sources[j]=null;

if(!bh){continue;
}bh.removeListenerById(bd.listenerIds[j]);
}var bh=bd.sources[bd.index];
for(var j=bd.index+1;j<bd.propertyNames.length;j++){if(bd.arrayIndexValues[j-1]!==l){bh=bh[m+qx.lang.String.firstUp(bd.propertyNames[j-1])](bd.arrayIndexValues[j-1]);
}else{bh=bh[m+qx.lang.String.firstUp(bd.propertyNames[j-1])]();
}bd.sources[j]=bh;
if(!bh){this.__dq(bd.targetObject,bd.targetPropertyChain);
break;
}if(j==bd.propertyNames.length-1){if(qx.Class.implementsInterface(bh,qx.data.IListData)){var bi=bd.arrayIndexValues[j]===h?bh.length-1:bd.arrayIndexValues[j];
var bf=bh.getItem(bi);
this.__dt(bf,bd.targetObject,bd.targetPropertyChain,bd.options,bd.sources[bd.index]);
bd.listenerIds[j]=this.__dv(bh,g,bd.targetObject,bd.targetPropertyChain,bd.options,bd.arrayIndexValues[j]);
}else{if(bd.propertyNames[j]!=null&&bh[m+qx.lang.String.firstUp(bd.propertyNames[j])]!=null){var bf=bh[m+qx.lang.String.firstUp(bd.propertyNames[j])]();
this.__dt(bf,bd.targetObject,bd.targetPropertyChain,bd.options,bd.sources[bd.index]);
}var bg=this.__dp(bh,bd.propertyNames[j]);
bd.listenerIds[j]=this.__dv(bh,bg,bd.targetObject,bd.targetPropertyChain,bd.options);
}}else{if(bd.listeners[j]==null){var be=qx.lang.Function.bind(this.__dn,this,bd);
bd.listeners.push(be);
}if(qx.Class.implementsInterface(bh,qx.data.IListData)){var bg=g;
}else{var bg=this.__dp(bh,bd.propertyNames[j]);
}bd.listenerIds[j]=bh.addListener(bg,bd.listeners[j]);
}}},__do:function(bj,bk,bl,bm,bn){var br=bm.split(d);
var bp=this.__du(br);
var bw=[];
var bv=[];
var bt=[];
var bs=[];
var bq=bl;
for(var i=0;i<br.length-1;i++){if(bp[i]!==l){bs.push(g);
}else{try{bs.push(this.__dp(bq,br[i]));
}catch(e){break;
}}bw[i]=bq;
var bu=function(){for(var j=i+1;j<br.length-1;j++){var bz=bw[j];
bw[j]=null;

if(!bz){continue;
}bz.removeListenerById(bt[j]);
}var bz=bw[i];
for(var j=i+1;j<br.length-1;j++){var bx=qx.lang.String.firstUp(br[j-1]);
if(bp[j-1]!==l){var bA=bp[j-1]===h?bz.getLength()-1:bp[j-1];
bz=bz[m+bx](bA);
}else{bz=bz[m+bx]();
}bw[j]=bz;
if(bv[j]==null){bv.push(bu);
}if(qx.Class.implementsInterface(bz,qx.data.IListData)){var by=g;
}else{try{var by=qx.data.SingleValueBinding.__dp(bz,br[j]);
}catch(e){break;
}}bt[j]=bz.addListener(by,bv[j]);
}qx.data.SingleValueBinding.updateTarget(bj,bk,bl,bm,bn);
};
bv.push(bu);
bt[i]=bq.addListener(bs[i],bu);
var bo=qx.lang.String.firstUp(br[i]);
if(bq[m+bo]==null){bq=null;
}else if(bp[i]!==l){bq=bq[m+bo](bp[i]);
}else{bq=bq[m+bo]();
}
if(!bq){break;
}}return {listenerIds:bt,targets:bw};
},updateTarget:function(bB,bC,bD,bE,bF){var bG=this.getValueFromObject(bB,bC);
bG=qx.data.SingleValueBinding.__dx(bG,bD,bE,bF,bB);
this.__dr(bD,bE,bG);
},getValueFromObject:function(o,bH){var bL=this.__ds(o,bH);
var bJ;

if(bL!=null){var bN=bH.substring(bH.lastIndexOf(d)+1,bH.length);
if(bN.charAt(bN.length-1)==f){var bI=bN.substring(bN.lastIndexOf(k)+1,bN.length-1);
var bK=bN.substring(0,bN.lastIndexOf(k));
var bM=bL[m+qx.lang.String.firstUp(bK)]();

if(bI==h){bI=bM.length-1;
}
if(bM!=null){bJ=bM.getItem(bI);
}}else{bJ=bL[m+qx.lang.String.firstUp(bN)]();
}}return bJ;
},__dp:function(bO,bP){var bQ=this.__dy(bO,bP);
if(bQ==null){if(qx.Class.supportsEvent(bO.constructor,bP)){bQ=bP;
}else if(qx.Class.supportsEvent(bO.constructor,g+qx.lang.String.firstUp(bP))){bQ=g+qx.lang.String.firstUp(bP);
}else{throw new qx.core.AssertionError(u+bP+x+bO+w);
}}return bQ;
},__dq:function(bR,bS){var bT=this.__ds(bR,bS);

if(bT!=null){var bU=bS.substring(bS.lastIndexOf(d)+1,bS.length);
if(bU.charAt(bU.length-1)==f){this.__dr(bR,bS,null);
return;
}if(bT[D+qx.lang.String.firstUp(bU)]!=undefined){bT[D+qx.lang.String.firstUp(bU)]();
}else{bT[G+qx.lang.String.firstUp(bU)](null);
}}},__dr:function(bV,bW,bX){var cc=this.__ds(bV,bW);

if(cc!=null){var cd=bW.substring(bW.lastIndexOf(d)+1,bW.length);
if(cd.charAt(cd.length-1)==f){var bY=cd.substring(cd.lastIndexOf(k)+1,cd.length-1);
var cb=cd.substring(0,cd.lastIndexOf(k));
var ca=bV;

if(!qx.Class.implementsInterface(ca,qx.data.IListData)){ca=cc[m+qx.lang.String.firstUp(cb)]();
}
if(bY==h){bY=ca.length-1;
}
if(ca!=null){ca.setItem(bY,bX);
}}else{cc[G+qx.lang.String.firstUp(cd)](bX);
}}},__ds:function(ce,cf){var ci=cf.split(d);
var cj=ce;
for(var i=0;i<ci.length-1;i++){try{var ch=ci[i];
if(ch.indexOf(f)==ch.length-1){var cg=ch.substring(ch.indexOf(k)+1,ch.length-1);
ch=ch.substring(0,ch.indexOf(k));
}if(ch!=l){cj=cj[m+qx.lang.String.firstUp(ch)]();
}if(cg!=null){if(cg==h){cg=cj.length-1;
}cj=cj.getItem(cg);
cg=null;
}}catch(ck){return null;
}}return cj;
},__dt:function(cl,cm,cn,co,cp){cl=this.__dx(cl,cm,cn,co,cp);
if(cl===undefined){this.__dq(cm,cn);
}if(cl!==undefined){try{this.__dr(cm,cn,cl);
if(co&&co.onUpdate){co.onUpdate(cp,cm,cl);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(co&&co.onSetFail){co.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cl+" on "+cm+". Error message: "+e);
}}}},__du:function(cq){var cr=[];
for(var i=0;i<cq.length;i++){var name=cq[i];
if(qx.lang.String.endsWith(name,f)){var cs=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cs!==h){if(cs==l||isNaN(parseInt(cs,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){cq[i]=name.substring(0,name.indexOf(k));
cr[i]=l;
cr[i+1]=cs;
cq.splice(i+1,0,E);
i++;
}else{cr[i]=cs;
cq.splice(i,1,E);
}}else{cr[i]=l;
}}return cr;
},__dv:function(ct,cu,cv,cw,cx,cy){var cz;
var cB=function(cC,e){if(cC!==l){if(cC===h){cC=ct.length-1;
}var cF=ct.getItem(cC);
if(cF===undefined){qx.data.SingleValueBinding.__dq(cv,cw);
}var cD=e.getData().start;
var cE=e.getData().end;

if(cC<cD||cC>cE){return;
}}else{var cF=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+ct+" by "+cu+" to "+cv+" ("+cw+")");
qx.log.Logger.debug("Data before conversion: "+cF);
}cF=qx.data.SingleValueBinding.__dx(cF,cv,cw,cx,ct);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cF);
}try{if(cF!==undefined){qx.data.SingleValueBinding.__dr(cv,cw,cF);
}else{qx.data.SingleValueBinding.__dq(cv,cw);
}if(cx&&cx.onUpdate){cx.onUpdate(ct,cv,cF);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cx&&cx.onSetFail){cx.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cF+" on "+cv+". Error message: "+e);
}}};
if(!cy){cy=l;
}cB=qx.lang.Function.bind(cB,ct,cy);
var cA=ct.addListener(cu,cB);
return cA;
},__dw:function(cG,cH,cI,cJ,cK){if(this.__dm[cH.toHashCode()]===undefined){this.__dm[cH.toHashCode()]=[];
}this.__dm[cH.toHashCode()].push([cG,cH,cI,cJ,cK]);
},__dx:function(cL,cM,cN,cO,cP){if(cO&&cO.converter){var cR;

if(cM.getModel){cR=cM.getModel();
}return cO.converter(cL,cR,cP,cM);
}else{var cT=this.__ds(cM,cN);
var cU=cN.substring(cN.lastIndexOf(d)+1,cN.length);
if(cT==null){return cL;
}var cS=qx.Class.getPropertyDefinition(cT.constructor,cU);
var cQ=cS==null?l:cS.check;
return this.__dz(cL,cQ);
}},__dy:function(cV,cW){var cX=qx.Class.getPropertyDefinition(cV.constructor,cW);

if(cX==null){return null;
}return cX.event;
},__dz:function(cY,da){var db=qx.lang.Type.getClass(cY);
if((db==c||db==b)&&(da==y||da==q)){cY=parseInt(cY,10);
}if((db==A||db==c||db==p)&&da==b){cY=cY+l;
}if((db==c||db==b)&&(da==c||da==t)){cY=parseFloat(cY);
}return cY;
},removeBindingFromObject:function(dc,dd){if(dd.type==F){for(var i=0;i<dd.sources.length;i++){if(dd.sources[i]){dd.sources[i].removeListenerById(dd.listenerIds[i]);
}}for(var i=0;i<dd.targets.length;i++){if(dd.targets[i]){dd.targets[i].removeListenerById(dd.targetListenerIds[i]);
}}}else{dc.removeListenerById(dd);
}var de=this.__dm[dc.toHashCode()];
if(de!=undefined){for(var i=0;i<de.length;i++){if(de[i][0]==dd){qx.lang.Array.remove(de,de[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(df){var dg=this.__dm[df.toHashCode()];

if(dg!=undefined){for(var i=dg.length-1;i>=0;i--){this.removeBindingFromObject(df,dg[i][0]);
}}},getAllBindingsForObject:function(dh){if(this.__dm[dh.toHashCode()]===undefined){this.__dm[dh.toHashCode()]=[];
}return this.__dm[dh.toHashCode()];
},removeAllBindings:function(){for(var dj in this.__dm){var di=qx.core.ObjectRegistry.fromHashCode(dj);
if(di==null){delete this.__dm[dj];
continue;
}this.removeAllBindingsForObject(di);
}this.__dm={};
},getAllBindings:function(){return this.__dm;
},showBindingInLog:function(dk,dl){var dn;
for(var i=0;i<this.__dm[dk.toHashCode()].length;i++){if(this.__dm[dk.toHashCode()][i][0]==dl){dn=this.__dm[dk.toHashCode()][i];
break;
}}
if(dn===undefined){var dm=r;
}else{var dm=s+dn[1]+B+dn[2]+z+dn[3]+B+dn[4]+n;
}qx.log.Logger.debug(dm);
},showAllBindingsInLog:function(){for(var dq in this.__dm){var dp=qx.core.ObjectRegistry.fromHashCode(dq);

for(var i=0;i<this.__dm[dq].length;i++){this.showBindingInLog(dp,this.__dm[dq][i][0]);
}}}}});
qx.log.Logger.deprecatedConstantWarning(C,v);
})();
(function(){var c="qx.globalErrorHandling",b="qx.event.GlobalError",a="on";
qx.Bootstrap.define(b,{statics:{setErrorHandler:function(d,e){this.__dM=d||null;
this.__dN=e||window;

if(qx.core.Environment.get(c)){if(d&&window.onerror){var f=qx.Bootstrap.bind(this.__dP,this);

if(this.__dO==null){this.__dO=window.onerror;
}var self=this;
window.onerror=function(g,h,i){self.__dO(g,h,i);
f(g,h,i);
};
}
if(d&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__dP,this);
}if(this.__dM==null){if(this.__dO!=null){window.onerror=this.__dO;
this.__dO=null;
}else{window.onerror=null;
}}}},__dP:function(j,k,l){if(this.__dM){this.handleError(new qx.core.WindowError(j,k,l));
return true;
}},observeMethod:function(m){if(qx.core.Environment.get(c)){var self=this;
return function(){if(!self.__dM){return m.apply(this,arguments);
}
try{return m.apply(this,arguments);
}catch(n){self.handleError(new qx.core.GlobalError(n,arguments));
}};
}else{return m;
}},handleError:function(o){if(this.__dM){this.__dM.call(this.__dN,o);
}}},defer:function(p){qx.core.Environment.add(c,true);
p.setErrorHandler(null,null);
qx.core.Setting.defineDeprecated(c,a);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__dQ=c;
this.__dR=d||b;
this.__dS=e===undefined?-1:e;
},members:{__dQ:null,__dR:null,__dS:null,toString:function(){return this.__dQ;
},getUri:function(){return this.__dR;
},getLineNumber:function(){return this.__dS;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){this.__dJ=b+(c&&c.message?c.message:c);
Error.call(this,this.__dJ);
this.__dK=d;
this.__dL=c;
},members:{__dL:null,__dK:null,__dJ:null,toString:function(){return this.__dJ;
},getArguments:function(){return this.__dK;
},getSourceException:function(){return this.__dL;
}},destruct:function(){this.__dL=null;
this.__dK=null;
this.__dJ=null;
}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__dA=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__dA:null,message:null,getComment:function(){return this.__dA;
},toString:function(){return this.__dA+(this.message?b+this.message:c);
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__dB=qx.dev.StackTrace.getStackTrace();
},members:{__dB:null,getStackTrace:function(){return this.__dB;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__dT={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__dT:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__dT[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__dT){return;
}var h=g.classname;
var j=this.__dT[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__dT[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__dT;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__dT;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
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
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(c,event,d){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__dU:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__dV:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__dW:function(){var L=qx.lang.Generics.__dU;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__dV(N,O);
}}}}},defer:function(Q){Q.__dW();
}});
})();
(function(){var a="qx.ui.mobile.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(b){return this._indexOf(b);
},add:function(c,d){this._add(c,d);
},addBefore:function(e,f,g){this._addBefore(e,f,g);
},addAfter:function(h,i,j){this._addAfter(h,i,j);
},remove:function(k){this._remove(k);
},removeAt:function(l){return this._removeAt(l);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(m){m.getChildren=m._getChildren;
m.hasChildren=m._hasChildren;
m.indexOf=m._indexOf;
m.add=m._add;
m.addBefore=m._addBefore;
m.addAfter=m._addAfter;
m.remove=m._remove;
m.removeAt=m._removeAt;
m.removeAll=m._removeAll;
}}});
})();
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__if=false;
this.__ig=false;
this.__ih=false;
this.__ii=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__ij();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__ih:null,__if:null,__ig:null,__ii:null,__ij:function(){if(!this.__ih&&this.__if&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__ih=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__ih=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__ih;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__if=true;
this.__ij();
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
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__if=true;
this.__ij();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__ii){this.__ii=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var c="ready",b="qx.bom.Lifecycle",a="shutdown";
qx.Class.define(b,{statics:{onReady:function(d,e){var g=qx.event.Registration;
var f=g.getManager(window).getHandler(qx.event.handler.Application);
if(f&&f.isApplicationReady()){d.call(e);
}else{g.addListener(window,c,d,e);
}},onShutdown:function(h,i){qx.event.Registration.addListener(window,a,h,i);
}}});
})();
(function(){var k="qx.event.type.Mouse",j="visible",h="qx.event.type.Focus",g="qx.event.type.Touch",f="excluded",e="hidden",d="qx.event.type.KeySequence",c="String",b="qx.event.type.Event",a="visibility",C="display",B="_applyAttribute",A="Boolean",z="div",y="changeId",x="qx.event.type.KeyInput",w="_transformId",v="qx.event.type.MouseWheel",u="_applyDefaultCssClass",t="_applyId",r="",s="changeVisibility",p="undefined",q="none",n="qx.ui.mobile.core.Widget",o="_applyStyle",m="_applyVisibility";
qx.Class.define(n,{extend:qx.core.Object,include:[qx.locale.MTranslation],construct:function(){qx.core.Object.call(this);
this._setContainerElement(this._createContainerElement());
this.__DX=[];
this.setId(this.getId());
this.initDefaultCssClass();
this.initName();
this.initAnonymous();
},events:{mousemove:k,mouseover:k,mouseout:k,mousedown:k,mouseup:k,click:k,dblclick:k,contextmenu:k,beforeContextmenuOpen:k,mousewheel:v,touchstart:g,touchend:g,touchmove:g,touchcancel:g,tap:g,swipe:g,keyup:d,keydown:d,keypress:d,keyinput:x,domupdated:b,appear:b,disappear:b,focus:h,blur:h,focusin:h,focusout:h,activate:h,deactivate:h},properties:{defaultCssClass:{check:c,init:null,nullable:true,apply:u},name:{check:c,init:null,nullable:true,apply:B},anonymous:{check:A,init:null,nullable:true,apply:o},id:{check:c,init:null,nullable:true,apply:t,transform:w,event:y},visibility:{check:[j,e,f],init:j,apply:m,event:s}},statics:{ID_PREFIX:"qx_id_",__DY:{},__Ea:0,__Eb:null,onShutdown:function(){window.clearTimeout(qx.ui.mobile.core.Widget.__Eb);
delete qx.ui.mobile.core.Widget.__DY;
},getCurrentId:function(){return qx.ui.mobile.core.Widget.__Ea;
},registerWidget:function(D){var E=D.getId();
var F=qx.ui.mobile.core.Widget.__DY;
F[E]=D;
},unregisterWidget:function(G){delete qx.ui.mobile.core.Widget.__DY[G];
},getWidgetById:function(H){return qx.ui.mobile.core.Widget.__DY[H];
},scheduleDomUpdated:function(){if(qx.ui.mobile.core.Widget.__Eb==null){qx.ui.mobile.core.Widget.__Eb=window.setTimeout(qx.ui.mobile.core.Widget.domUpdated,0);
}},domUpdated:qx.event.GlobalError.observeMethod(function(){var I=qx.ui.mobile.core.Widget;
window.clearTimeout(I.__Eb);
I.__Eb=null;
qx.event.handler.Appear.refresh();
qx.ui.mobile.core.DomUpdatedHandler.refresh();
}),addAttributeMapping:function(J,K,L){var M;
qx.ui.mobile.core.Widget.ATTRIBUTE_MAPPING[J]={attribute:K,values:L};
},addStyleMapping:function(N,O,P){var Q;
qx.ui.mobile.core.Widget.STYLE_MAPPING[N]={style:O,values:P};
},ATTRIBUTE_MAPPING:{"selectable":{attribute:"data-selectable",values:{"true":null,"false":"false"}},"readOnly":{attribute:"readonly"}},STYLE_MAPPING:{"anonymous":{style:"pointer-events",values:{"true":"none","false":null}}}},members:{__Ec:null,__Ed:null,__Ee:null,__DX:null,__Ef:null,_getTagName:function(){return z;
},_createContainerElement:function(){return qx.bom.Element.create(this._getTagName());
},_domUpdated:function(){qx.ui.mobile.core.Widget.scheduleDomUpdated();
},_transformId:function(R){if(R==null){var S=qx.ui.mobile.core.Widget;
R=S.ID_PREFIX+S.__Ea++;
}return R;
},_applyId:function(T,U){if(U!=null){qx.ui.mobile.core.Widget.unregisterWidget(U);
}var V=this.getContainerElement();
V.id=T;
qx.ui.mobile.core.Widget.registerWidget(this);
},_add:function(W,X){W.setLayoutParent(this);
W.setLayoutProperties(X);
this.getContentElement().appendChild(W.getContainerElement());
this.__DX.push(W);
this._domUpdated();
},_addBefore:function(Y,ba,bb){if(Y==ba){return;
}Y.setLayoutParent(this);
Y.setLayoutProperties(bb);
this.getContentElement().insertBefore(Y.getContainerElement(),ba.getContainerElement());
qx.lang.Array.insertBefore(this.__DX,Y,ba);
this._domUpdated();
},_addAfter:function(bc,bd,be){if(bc==bd){return;
}bc.setLayoutParent(this);
bc.setLayoutProperties(be);
var length=this._getChildren().length;
var bf=this._indexOf(bd);

if(bf==length-1){this.getContentElement().appendChild(bc.getContainerElement());
}else{var bg=this._getChildren()[bf+1];
this.getContentElement().insertBefore(bc.getContainerElement(),bg.getContainerElement());
}qx.lang.Array.insertAfter(this.__DX,bc,bd);
this._domUpdated();
},_remove:function(bh){bh.setLayoutParent(null);
this._domUpdated();
},_removeAt:function(bi){if(!this.__DX){throw new Error("This widget has no children!");
}var bj=this.__DX[bi];
this._remove(bj);
},_removeAll:function(){var bk=this.__DX.concat();

for(var i=0,l=bk.length;i<l;i++){this._remove(bk[i]);
}},_indexOf:function(bl){var bm=this.__DX;

if(!bm){return -1;
}return bm.indexOf(bl);
},setLayoutParent:function(parent){if(this.__Ee===parent){return;
}var bn=this.__Ee;

if(bn&&!bn.$$disposed){this.__Ee.removeChild(this);
}this.__Ee=parent||null;
},removeChild:function(bo){qx.lang.Array.remove(this.__DX,bo);
this.getContentElement().removeChild(bo.getContainerElement());
},getLayoutParent:function(){return this.__Ee;
},_getChildren:function(){return this.__DX;
},_hasChildren:function(){return this.__DX&&this.__DX.length>0;
},_setLayout:function(bp){if(this.__Ef){this.__Ef.connectToWidget(null);
}
if(bp){bp.connectToWidget(this);
}this.__Ef=bp;
},_getLayout:function(){return this.__Ef;
},setLayoutProperties:function(bq){if(bq==null){return;
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(this,bq);
}},updateLayoutProperties:function(br,bs){var bt=this._getLayout();

if(bt){bt.setLayoutProperties(br,bs);
}},_setHtml:function(bu){this.getContentElement().innerHTML=bu||r;
this._domUpdated();
},_applyAttribute:function(bv,bw,bx){this._setAttribute(bx,bv);
},_setAttribute:function(by,bz){var bB=qx.ui.mobile.core.Widget.ATTRIBUTE_MAPPING[by];

if(bB){by=bB.attribute||by;
var bA=bB.values;
bz=bA&&typeof bA[bz]!==p?bA[bz]:bz;
}var bC=this.getContainerElement();

if(bz!=null){qx.bom.element.Attribute.set(bC,by,bz);
}else{qx.bom.element.Attribute.reset(bC,by);
}},_getAttribute:function(bD){var bE=this.getContainerElement();
return qx.bom.element.Attribute.get(bE,bD);
},_applyStyle:function(bF,bG,bH){this._setStyle(bH,bF);
},_setStyle:function(bI,bJ){var bK=qx.ui.mobile.core.Widget.STYLE_MAPPING[bI];

if(bK){bI=bK.style||bI;
bJ=bK.values[bJ];
}var bL=this.getContainerElement();

if(bJ!=null){qx.bom.element.Style.set(bL,bI,bJ);
}else{qx.bom.element.Style.reset(bL,bI);
}this._domUpdated();
},_getStyle:function(bM){var bN=this.getContainerElement();
return qx.bom.element.Style.get(bN,bM);
},_applyDefaultCssClass:function(bO,bP){if(bP){this.removeCssClass(bP);
}
if(bO){this.addCssClass(bO);
}},addCssClass:function(bQ){var bR=this.getContainerElement();
qx.bom.element.Class.add(bR,bQ);
},removeCssClass:function(bS){var bT=this.getContainerElement();
qx.bom.element.Class.remove(bT,bS);
},_applyVisibility:function(bU,bV){if(bU==f){this._setStyle(C,q);
}else if(bU==j){this._setStyle(C,null);
this._setStyle(a,null);
}else if(bU==e){this._setStyle(a,e);
}},show:function(){this.setVisibility(j);
},hide:function(){this.setVisibility(e);
},exclude:function(){this.setVisibility(f);
},isVisible:function(){return this.getVisibility()===j;
},isHidden:function(){return this.getVisibility()!==j;
},isExcluded:function(){return this.getVisibility()===f;
},isSeeable:function(){return this.getContainerElement().offsetWidth>0;
},_setContainerElement:function(bW){this.__Ec=bW;
},getContainerElement:function(){return this.__Ec;
},getContentElement:function(){if(!this.__Ed){this.__Ed=this._getContentElement();
}return this.__Ed;
},_getContentElement:function(){return this.getContainerElement();
},destroy:function(){if(this.$$disposed){return;
}var parent=this.__Ee;

if(parent){parent._remove(this);
}this.dispose();
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);

if(this.getId()){qx.ui.mobile.core.Widget.unregisterWidget(this.getId());
}}this.__Ee=this.__Ec=this.__Ed=null;
this.__Ef=null;
},defer:function(bX){qx.bom.Lifecycle.onShutdown(bX.onShutdown,bX);
}});
})();
(function(){var g="qx.ui.mobile.core.Root",f="Boolean",e="root",d="overflow-y",c="hidden",b="auto",a="_applyShowScrollbarY";
qx.Class.define(g,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.core.MChildrenHandling],properties:{defaultCssClass:{refine:true,init:e},showScrollbarY:{check:f,init:true,apply:a}},members:{_createContainerElement:function(){return document.body;
},_applyShowScrollbarY:function(h,i){this._setStyle(d,h?b:c);
}},defer:function(j,k){qx.ui.mobile.core.MChildrenHandling.remap(k);
}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__dC:null,__dD:null,__dE:null,__dF:null,stringify:function(bb,bc,bd){this.__dC=p;
this.__dD=p;
this.__dF=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__dD+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__dD=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__dE=bc;
}else{this.__dE=null;
}return this.__dG(p,{'':bb});
},__dG:function(be,bf){var bi=this.__dC,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__dE===e){bj=this.__dE.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__dH(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__dC+=this.__dD;
bg=[];

if(this.__dF.indexOf(bj)!==-1){throw new TypeError(V);
}this.__dF.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__dG(i,bj)||h;
}this.__dF.pop();
if(bg.length===0){var bh=s;
}else if(this.__dC){bh=E+this.__dC+bg.join(Y+this.__dC)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__dC=bi;
return bh;
case z:this.__dC+=this.__dD;
bg=[];

if(this.__dF.indexOf(bj)!==-1){throw new TypeError(V);
}this.__dF.push(bj);
if(this.__dE&&typeof this.__dE===f){var length=this.__dE.length;

for(var i=0;i<length;i+=1){var k=this.__dE[i];

if(typeof k===W){var v=this.__dG(k,bj);

if(v){bg.push(this.__dH(k)+(this.__dC?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__dG(k,bj);

if(v){bg.push(this.__dH(k)+(this.__dC?g:m)+v);
}}}}this.__dF.pop();
if(bg.length===0){var bh=A;
}else if(this.__dC){bh=w+this.__dC+bg.join(Y+this.__dC)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__dC=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__dH:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
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
return typeof bs===e?this.__dI({'':j},p,bs):j;
}throw new SyntaxError(P);
},__dI:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__dI(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bz="' but found ",by="]",bx=", ",bw="The value '",bv=" != ",bu="qx.core.Object",bt="Expected value to be an array but found ",bs=") was fired.",br="Expected value to be an integer >= 0 but found ",bq="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",S="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",V="null",bm="' but found '",bg="' must must be a key of the map '",J="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",bn="qx.util.ColorUtil",I=": ",L="The raised exception does not have the expected type! ",N=") not fired.",Q="qx.core.Assert",T="Expected value to be typeof object but found ",W="' (identical) but found '",bd="' must have any of the values defined in the array '",bi="Expected value to be a number but found ",y="Called assertFalse with '",z="qx.ui.core.Widget",K="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",X="Array[",bf="' does not match the regular expression '",be="' to be not identical with '",U="Expected [",bc="' arguments but found '",a="', which cannot be converted to a CSS color!",bh="qx.core.AssertionError",A="Expected value to be a boolean but found ",B="Expected value not to be null but found null!",P="))!",b="Expected value to be a qooxdoo widget but found ",c="Expected value to be typeof '",H="Expected value to be typeof function but found ",C="Expected value to be an integer but found ",D="Called fail().",G="The parameter 're' must be a string or a regular expression.",R="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",bj="], but found [",M="Wrong number of arguments given. Expected '",bl="object";
qx.Class.define(Q,{statics:{__ck:true,__cl:function(bA,bB){var bF=p;

for(var i=1,l=arguments.length;i<l;i++){bF=bF+this.__cm(arguments[i]);
}var bE=p;

if(bF){bE=bA+I+bF;
}else{bE=bA;
}var bD=bb+bE;

if(this.__ck){qx.Bootstrap.error(bD);
}
if(qx.Class.isDefined(bh)){var bC=new qx.core.AssertionError(bA,bF);

if(this.__ck){qx.Bootstrap.error("Stack trace: \n"+bC.getStackTrace());
}throw bC;
}else{throw new Error(bD);
}},__cm:function(bG){var bH;

if(bG===null){bH=V;
}else if(qx.lang.Type.isArray(bG)&&bG.length>10){bH=X+bG.length+by;
}else if((bG instanceof Object)&&(bG.toString==null)){bH=qx.lang.Json.stringify(bG,null,2);
}else{try{bH=bG.toString();
}catch(e){bH=p;
}}return bH;
},assert:function(bI,bJ){bI==true||this.__cl(bJ||p,O);
},fail:function(bK,bL){var bM=bL?p:D;
this.__cl(bK||p,bM);
},assertTrue:function(bN,bO){(bN===true)||this.__cl(bO||p,u,bN,m);
},assertFalse:function(bP,bQ){(bP===false)||this.__cl(bQ||p,y,bP,m);
},assertEquals:function(bR,bS,bT){bR==bS||this.__cl(bT||p,k,bR,bm,bS,n);
},assertNotEquals:function(bU,bV,bW){bU!=bV||this.__cl(bW||p,k,bU,bq,bV,n);
},assertIdentical:function(bX,bY,ca){bX===bY||this.__cl(ca||p,k,bX,W,bY,n);
},assertNotIdentical:function(cb,cc,cd){cb!==cc||this.__cl(cd||p,k,cb,be,cc,n);
},assertNotUndefined:function(ce,cf){ce!==undefined||this.__cl(cf||p,bo);
},assertUndefined:function(cg,ch){cg===undefined||this.__cl(ch||p,t,cg,o);
},assertNotNull:function(ci,cj){ci!==null||this.__cl(cj||p,B);
},assertNull:function(ck,cl){ck===null||this.__cl(cl||p,F,ck,o);
},assertJsonEquals:function(cm,cn,co){this.assertEquals(qx.lang.Json.stringify(cm),qx.lang.Json.stringify(cn),co);
},assertMatch:function(cp,cq,cr){this.assertString(cp);
this.assert(qx.lang.Type.isRegExp(cq)||qx.lang.Type.isString(cq),G);
cp.search(cq)>=0||this.__cl(cr||p,J,cp,bf,cq.toString(),n);
},assertArgumentsCount:function(cs,ct,cu,cv){var cw=cs.length;
(cw>=ct&&cw<=cu)||this.__cl(cv||p,M,ct,w,cu,bc,arguments.length,ba);
},assertEventFired:function(cx,event,cy,cz,cA){var cC=false;
var cB=function(e){if(cz){cz.call(cx,e);
}cC=true;
};
var cD;

try{cD=cx.addListener(event,cB,cx);
cy.call();
}catch(cE){throw cE;
}finally{try{cx.removeListenerById(cD);
}catch(cF){}}cC===true||this.__cl(cA||p,f,event,N);
},assertEventNotFired:function(cG,event,cH,cI){var cK=false;
var cJ=function(e){cK=true;
};
var cL=cG.addListener(event,cJ,cG);
cH.call();
cK===false||this.__cl(cI||p,f,event,bs);
cG.removeListenerById(cL);
},assertException:function(cM,cN,cO,cP){var cN=cN||Error;
var cQ;

try{this.__ck=false;
cM();
}catch(cR){cQ=cR;
}finally{this.__ck=true;
}
if(cQ==null){this.__cl(cP||p,s);
}cQ instanceof cN||this.__cl(cP||p,L,cN,bv,cQ);

if(cO){this.assertMatch(cQ.toString(),cO,cP);
}},assertInArray:function(cS,cT,cU){cT.indexOf(cS)!==-1||this.__cl(cU||p,bw,cS,bd,cT,m);
},assertArrayEquals:function(cV,cW,cX){this.assertArray(cV,cX);
this.assertArray(cW,cX);
cX=cX||U+cV.join(bx)+bj+cW.join(bx)+by;

if(cV.length!==cW.length){this.fail(cX,true);
}
for(var i=0;i<cV.length;i++){if(cV[i]!==cW[i]){this.fail(cX,true);
}}},assertKeyInMap:function(cY,da,db){da[cY]!==undefined||this.__cl(db||p,bw,cY,bg,da,m);
},assertFunction:function(dc,dd){qx.lang.Type.isFunction(dc)||this.__cl(dd||p,H,dc,o);
},assertString:function(de,df){qx.lang.Type.isString(de)||this.__cl(df||p,bp,de,o);
},assertBoolean:function(dg,dh){qx.lang.Type.isBoolean(dg)||this.__cl(dh||p,A,dg,o);
},assertNumber:function(di,dj){(qx.lang.Type.isNumber(di)&&isFinite(di))||this.__cl(dj||p,bi,di,o);
},assertPositiveNumber:function(dk,dl){(qx.lang.Type.isNumber(dk)&&isFinite(dk)&&dk>=0)||this.__cl(dl||p,R,dk,o);
},assertInteger:function(dm,dn){(qx.lang.Type.isNumber(dm)&&isFinite(dm)&&dm%1===0)||this.__cl(dn||p,C,dm,o);
},assertPositiveInteger:function(dp,dq){var dr=(qx.lang.Type.isNumber(dp)&&isFinite(dp)&&dp%1===0&&dp>=0);
dr||this.__cl(dq||p,br,dp,o);
},assertInRange:function(ds,dt,du,dv){(ds>=dt&&ds<=du)||this.__cl(dv||p,qx.lang.String.format(Y,[ds,dt,du]));
},assertObject:function(dw,dx){var dy=dw!==null&&(qx.lang.Type.isObject(dw)||typeof dw===bl);
dy||this.__cl(dx||p,T,(dw),o);
},assertArray:function(dz,dA){qx.lang.Type.isArray(dz)||this.__cl(dA||p,bt,dz,o);
},assertMap:function(dB,dC){qx.lang.Type.isObject(dB)||this.__cl(dC||p,v,dB,o);
},assertRegExp:function(dD,dE){qx.lang.Type.isRegExp(dD)||this.__cl(dE||p,r,dD,o);
},assertType:function(dF,dG,dH){this.assertString(dG,S);
typeof (dF)===dG||this.__cl(dH||p,c,dG,bz,dF,o);
},assertInstance:function(dI,dJ,dK){var dL=dJ.classname||dJ+p;
dI instanceof dJ||this.__cl(dK||p,bk,dL,bz,dI,o);
},assertInterface:function(dM,dN,dO){qx.Class.implementsInterface(dM,dN)||this.__cl(dO||p,x,dM,E,dN,n);
},assertCssColor:function(dP,dQ,dR){var dS=qx.Class.getByName(bn);

if(!dS){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dU=dS.stringToRgb(dP);

try{var dT=dS.stringToRgb(dQ);
}catch(dW){this.__cl(dR||p,d,dP,j,dU.join(h),g,dQ,a);
}var dV=dU[0]==dT[0]&&dU[1]==dT[1]&&dU[2]==dT[2];
dV||this.__cl(dR||p,d,dU,j,dU.join(h),g,dQ,j,dT.join(h),P);
},assertElement:function(dX,dY){!!(dX&&dX.nodeType===1)||this.__cl(dY||p,q,dX,n);
},assertQxObject:function(ea,eb){this.__cn(ea,bu)||this.__cl(eb||p,K,ea,o);
},assertQxWidget:function(ec,ed){this.__cn(ec,z)||this.__cl(ed||p,b,ec,o);
},__cn:function(ee,ef){if(!ee){return false;
}var eg=ee.constructor;

while(eg){if(eg.classname===ef){return true;
}eg=eg.superclass;
}return false;
}}});
})();
(function(){var h="active",g="touchmove",f="qx.ui.mobile.core.EventHandler",e="touchend",d="touchcancel",c="data-selectable",b="touchstart",a="false";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__Eg=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,resize:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false,__Eh:null,__Ei:null,__Ej:null,__Ek:null,__El:function(j){var k=qx.ui.mobile.core.EventHandler;
k.__Ei=qx.bom.Viewport.getScrollLeft();
k.__Ej=qx.bom.Viewport.getScrollTop();
k.__Ep();
k.__Eh=j.getTarget();
k.__Em=window.setTimeout(function(){k.__Em=null;
var m=k.__Eh;

if(m&&(qx.bom.element.Attribute.get(m,c)!=a)){qx.bom.element.Class.add(m,h);
}},100);
},__En:function(n){qx.ui.mobile.core.EventHandler.__Eq();
},__Eo:function(o){var p=qx.ui.mobile.core.EventHandler;

if(p.__Eh&&(p.__Ei!=qx.bom.Viewport.getScrollLeft()||p.__Ej!=qx.bom.Viewport.getScrollTop())){p.__Eq();
}},__Ep:function(){var q=qx.ui.mobile.core.EventHandler;

if(q.__Em){window.clearTimeout(q.__Em);
q.__Em=null;
}},__Eq:function(){var r=qx.ui.mobile.core.EventHandler;
r.__Ep();
var s=r.__Eh;

if(s){qx.bom.element.Class.remove(s,h);
}r.__Eh=null;
}},members:{__Eg:null,canHandleEvent:function(t,u){return t instanceof qx.ui.mobile.core.Widget;
},registerEvent:function(v,w,x){var y=v.getContainerElement();
qx.event.Registration.addListener(y,w,this._dispatchEvent,this,x);
},unregisterEvent:function(z,A,B){var C=z.getContainerElement();
qx.event.Registration.removeListener(C,A,this._dispatchEvent,this,B);
},_dispatchEvent:function(D){var I=D.getTarget();

if(!I||I.id==null){return;
}var H=qx.ui.mobile.core.Widget.getWidgetById(I.id);
if(D.getRelatedTarget){var P=D.getRelatedTarget();

if(P&&P.id){var O=qx.ui.mobile.core.Widget.getWidgetById(P.id);
}}var K=D.getCurrentTarget();
var M=qx.ui.mobile.core.Widget.getWidgetById(K.id);

if(!M){return;
}var E=D.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var N=D.getType();
var J=this.__Eg.getListeners(M,N,E);

if(!J||J.length===0){return;
}var F=qx.event.Pool.getInstance().getObject(D.constructor);
D.clone(F);
F.setTarget(H);
F.setRelatedTarget(O||null);
F.setCurrentTarget(M);
var Q=D.getOriginalTarget();

if(Q&&Q.id){var G=qx.ui.mobile.core.Widget.getWidgetById(Q.id);
F.setOriginalTarget(G);
}else{F.setOriginalTarget(I);
}for(var i=0,l=J.length;i<l;i++){var L=J[i].context||M;
J[i].handler.call(L,F);
}if(F.getPropagationStopped()){D.stopPropagation();
}
if(F.getDefaultPrevented()){D.preventDefault();
}qx.event.Pool.getInstance().poolObject(F);
}},destruct:function(){this.__Eg=null;
},defer:function(R){qx.event.Registration.addHandler(R);
qx.event.Registration.addListener(document,b,R.__El);
qx.event.Registration.addListener(document,e,R.__En);
qx.event.Registration.addListener(document,d,R.__En);
qx.event.Registration.addListener(document,g,R.__Eo);
}});
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
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__hx:{names:{"class":b,"for":x,html:q,text:(qx.core.Environment.get(h)==l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__hx.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Environment.select(h,{"mshtml":function(D,name){var F=this.__hx;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__hx;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(J,name,K){if(typeof K===i){return;
}var L=this.__hx;
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
(function(){var e="=",d="ecmascript.objectcount",c="+",b="qx.lang.Object",a="&";
qx.Class.define(b,{statics:{empty:function(f){for(var g in f){if(f.hasOwnProperty(g)){delete f[g];
}}},isEmpty:(qx.core.Environment.get(d))?
function(h){return h.__count__===0;
}:
function(j){for(var k in j){return false;
}return true;
},hasMinLength:(qx.core.Environment.get(d))?
function(m,n){return m.__count__>=n;
}:
function(o,p){if(p<=0){return true;
}var length=0;

for(var q in o){if((++length)>=p){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(r){var t=[];
var s=this.getKeys(r);

for(var i=0,l=s.length;i<l;i++){t.push(r[s[i]]);
}return t;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(u,v){return qx.lang.Object.mergeWith(u,v,false);
},merge:function(w,x){var y=arguments.length;

for(var i=1;i<y;i++){qx.lang.Object.mergeWith(w,arguments[i]);
}return w;
},clone:function(z){var A={};

for(var B in z){A[B]=z[B];
}return A;
},invert:function(C){var D={};

for(var E in C){D[C[E].toString()]=E;
}return D;
},getKeyFromValue:function(F,G){for(var H in F){if(F.hasOwnProperty(H)&&F[H]===G){return H;
}}return null;
},contains:function(I,J){return this.getKeyFromValue(I,J)!==null;
},select:function(K,L){return L[K];
},fromArray:function(M){var N={};

for(var i=0,l=M.length;i<l;i++){N[M[i].toString()]=true;
}return N;
},toUriParameter:function(O,P){var S,R=[],Q=window.encodeURIComponent;

for(S in O){if(O.hasOwnProperty(S)){if(P){R.push(Q(S).replace(/%20/g,c)+e+Q(O[S]).replace(/%20/g,c));
}else{R.push(Q(S)+e+Q(O[S]));
}}}return R.join(a);
}}});
})();
(function(){var s="html.classlist",r="default",q="native",p="",o=" ",n='',m="(^|\\s)",k="(\\s|$)",j="\\b",h="g",c='function',g="\\b|\\b",f="qx.bom.element.Class",b='SVGAnimatedString',a='object',e="$2",d='undefined';
qx.Class.define(f,{statics:{__ym:/\s+/g,__yn:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(t,name){t.classList.add(name);
return name;
},"default":function(u,name){if(!this.has(u,name)){u.className+=(u.className?o:p)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(v,w){for(var i=0;i<w.length;i++){v.classList.add(w[i]);
}return v.className;
},"default":function(x,y){var z={};
var B;
var A=x.className;

if(A){B=A.split(this.__ym);

for(var i=0,l=B.length;i<l;i++){z[B[i]]=true;
}
for(var i=0,l=y.length;i<l;i++){if(!z[y[i]]){B.push(y[i]);
}}}else{B=y;
}return x.className=B.join(o);
}}),get:function(C){var D=C.className;

if(typeof D.split!==c){if(typeof D===a){if(qx.Bootstrap.getClass(D)==b){D=D.baseVal;
}else{D=n;
}}
if(typeof D===d){D=n;
}}return D;
},has:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(E,name){return E.classList.contains(name);
},"default":function(F,name){var G=new RegExp(m+name+k);
return G.test(F.className);
}}),remove:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(H,name){H.classList.remove(name);
return name;
},"default":function(I,name){var J=new RegExp(m+name+k);
I.className=I.className.replace(J,e);
return name;
}}),removeClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(K,L){for(var i=0;i<L.length;i++){K.classList.remove(L[i]);
}return K.className;
},"default":function(M,N){var O=new RegExp(j+N.join(g)+j,h);
return M.className=M.className.replace(O,p).replace(this.__yn,p).replace(this.__ym,o);
}}),replace:function(P,Q,R){this.remove(P,Q);
return this.add(P,R);
},toggle:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(S,name,T){if(T===undefined){S.classList.toggle(name);
}else{T?this.add(S,name):this.remove(S,name);
}return name;
},"default":function(U,name,V){if(V==null){V=!this.has(U,name);
}V?this.add(U,name):this.remove(U,name);
return name;
}})}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__fK=d;
this.__fL={};
qx.event.handler.Appear.__fM[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fM:{},refresh:function(){var e=this.__fM;

for(var f in e){e[f].refresh();
}}},members:{__fK:null,__fL:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
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
this.__fK.dispatchEvent(w,t);
}}}},destruct:function(){this.__fK=this.__fL=null;
delete qx.event.handler.Appear.__fM[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var b="qx.ui.mobile.core.DomUpdatedHandler",a="domupdated";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){qx.core.Object.call(this);
this.__Er=c;
this.__Es={};
qx.ui.mobile.core.DomUpdatedHandler.__Et[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{domupdated:1},IGNORE_CAN_HANDLE:false,__Et:{},refresh:function(){var d=this.__Et;

for(var e in d){d[e].refresh();
}}},members:{__Er:null,__Es:null,canHandleEvent:function(f,g){return f instanceof qx.ui.mobile.core.Widget;
},registerEvent:function(h,i,j){var k=h.$$hash;
var l=this.__Es;

if(l&&!l[k]){l[k]=h;
}},unregisterEvent:function(m,n,o){var p=m.$$hash;
var q=this.__Es;

if(!q){return;
}
if(q[p]){delete q[p];
}},refresh:function(){var t=this.__Es;
var u;

for(var s in t){u=t[s];

if(u&&!u.$$disposed&&u.isSeeable()){var r=qx.event.Registration.createEvent(a);
this.__Er.dispatchEvent(u,r);
}}}},destruct:function(){this.__Er=this.__Es=null;
delete qx.ui.mobile.core.DomUpdatedHandler.__Et[this.$$hash];
},defer:function(v){qx.event.Registration.addHandler(v);
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__fi=f;
this.__fj=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fi:null,__fj:null,__fk:null,__fl:null,__fm:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__fm=qx.lang.Function.listener(this._onNative,this);
this.__fk=qx.bom.Event.supportsEvent(this.__fj,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__fj,this.__fk,this.__fm);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fj,this.__fk,this.__fm);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__fl!=p){this.__fl=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__fj,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__fi=this.__fj=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__fn=b;
this.__fo=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fn:null,__fo:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__fn=this.__fo=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",j="mshtml",c="qx.event.handler.Touch",i="useraction",g="swipe",b="qx.mobile.nativescroll",a="webkit",f="tap",d="x",h="y";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(t){qx.core.Object.call(this);
this.__fp=t;
this.__fq=t.getWindow();
this.__fr=this.__fq.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__fs:null,__ft:null,__fp:null,__fq:null,__fr:null,__fu:null,__fv:null,__fw:null,__fx:null,__fy:false,__fz:null,canHandleEvent:function(u,v){},registerEvent:function(w,x,y){},unregisterEvent:function(z,A,B){},__fA:function(C){var D=qx.bom.Event.getTarget(C);
if((qx.core.Environment.get(n)==a)){if(D&&D.nodeType==3){D=D.parentNode;
}}return D;
},__fB:function(E,F,G,H){if(!G){G=this.__fA(E);
}var F=F||E.type;

if(G&&G.nodeType){qx.event.Registration.fireEvent(G,F,H||qx.event.type.Touch,[E,G,null,true,true]);
}qx.event.Registration.fireEvent(this.__fq,i,qx.event.type.Data,[F]);
},__fC:function(I,J,K){if(!K){K=this.__fA(I);
}var J=J||I.type;

if(J==r){this.__fD(I,K);
}else if(J==q){this.__fE(I,K);
}else if(J==s){this.__fF(I,K);
}},__fD:function(L,M){var N=L.changedTouches[0];
this.__fu=N.screenX;
this.__fv=N.screenY;
this.__fw=new Date().getTime();
this.__fx=L.changedTouches.length===1;
},__fE:function(O,P){if(this.__fx&&O.changedTouches.length>1){this.__fx=false;
}},__fF:function(Q,R){if(this.__fx){var S=Q.changedTouches[0];
var U={x:S.screenX-this.__fu,y:S.screenY-this.__fv};
var V=qx.event.handler.Touch;

if(this.__fz==R&&Math.abs(U.x)<=V.TAP_MAX_DISTANCE&&Math.abs(U.y)<=V.TAP_MAX_DISTANCE){this.__fB(Q,f,R,qx.event.type.Tap);
}else{var T=this.__fG(Q,R,U);

if(T){Q.swipe=T;
this.__fB(Q,g,R,qx.event.type.Swipe);
}}}},__fG:function(W,X,Y){var bd=qx.event.handler.Touch;
var be=new Date().getTime()-this.__fw;
var bg=(Math.abs(Y.x)>=Math.abs(Y.y))?d:h;
var ba=Y[bg];
var bb=bd.SWIPE_DIRECTION[bg][ba<0?0:1];
var bf=(be!==0)?ba/be:0;
var bc=null;

if(Math.abs(bf)>=bd.SWIPE_MIN_VELOCITY&&Math.abs(ba)>=bd.SWIPE_MIN_DISTANCE){bc={startTime:this.__fw,duration:be,axis:bg,direction:bb,distance:ba,velocity:bf};
}return bc;
},__fH:function(bh){var bi=bh.type;
var bk=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bk[bi]){bi=bk[bi];
if(bi==r&&this.__fI(bh)){this.__fy=true;
}else if(bi==s){this.__fy=false;
}var bl=this.__fJ(bh);
var bj=(bi==s?[]:[bl]);
bh.touches=bj;
bh.targetTouches=bj;
bh.changedTouches=[bl];
}return bi;
},__fI:function(bm){if((qx.core.Environment.get(n)==j)){var bn=1;
}else{var bn=0;
}return bm.button==bn;
},__fJ:function(bo){var bp=this.__fA(bo);
return {clientX:bo.clientX,clientY:bo.clientY,screenX:bo.screenX,screenY:bo.screenY,pageX:bo.pageX,pageY:bo.pageY,identifier:1,target:bp};
},_initTouchObserver:function(){this.__fs=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fr,r,this.__fs);
Event.addNativeListener(this.__fr,q,this.__fs);
Event.addNativeListener(this.__fr,s,this.__fs);
Event.addNativeListener(this.__fr,m,this.__fs);
},_initMouseObserver:function(){if(!qx.core.Environment.get(p)){this.__ft=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fr,k,this.__ft);
Event.addNativeListener(this.__fr,o,this.__ft);
Event.addNativeListener(this.__fr,l,this.__ft);
}},_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fr,r,this.__fs);
Event.removeNativeListener(this.__fr,q,this.__fs);
Event.removeNativeListener(this.__fr,s,this.__fs);
Event.removeNativeListener(this.__fr,m,this.__fs);
},_stopMouseObserver:function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fr,k,this.__ft);
Event.removeNativeListener(this.__fr,o,this.__ft);
Event.removeNativeListener(this.__fr,l,this.__ft);
}},_onTouchEvent:qx.event.GlobalError.observeMethod(function(bq){this._commonTouchEventHandler(bq);
}),_onMouseEvent:qx.event.GlobalError.observeMethod(function(br){if(!qx.core.Environment.get(p)){if(br.type==o&&!this.__fy){return;
}var bs=this.__fH(br);
this._commonTouchEventHandler(br,bs);
}}),_commonTouchEventHandler:function(bt,bu){var bu=bu||bt.type;

if(bu==r){this.__fz=this.__fA(bt);
}this.__fB(bt,bu);
this.__fC(bt,bu);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__fp=this.__fq=this.__fr=this.__fz=null;
},defer:function(bv){qx.event.Registration.addHandler(bv);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bv);
}}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(c){this._manager=c;
},members:{_getParent:function(d){throw new Error("Missing implementation");
},canDispatchEvent:function(e,event,f){return event.getBubbles();
},dispatchEvent:function(g,event,h){var parent=g;
var s=this._manager;
var p,w;
var n;
var r,u;
var t;
var v=[];
p=s.getListeners(g,h,true);
w=s.getListeners(g,h,false);

if(p){v.push(p);
}
if(w){v.push(w);
}var parent=this._getParent(g);
var l=[];
var k=[];
var m=[];
var q=[];
while(parent!=null){p=s.getListeners(parent,h,true);

if(p){m.push(p);
q.push(parent);
}w=s.getListeners(parent,h,false);

if(w){l.push(w);
k.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=m.length-1;i>=0;i--){t=q[i];
event.setCurrentTarget(t);
n=m[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(g);

for(var i=0,x=v.length;i<x;i++){n=v[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||g;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,x=l.length;i<x;i++){t=k[i];
event.setCurrentTarget(t);
n=l[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
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
this.__fN=u;
this.__fO=u.getWindow();
this.__fP=this.__fO.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fQ:null,__fR:null,__fS:null,__fT:null,__fU:null,__fN:null,__fO:null,__fP:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===
d?
function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===
d?
function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__fV:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__fO,b,qx.event.type.Data,[E||D.type]);
},__fW:function(){var H=[this.__fO,this.__fP,this.__fP.body];
var I=this.__fO;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__fQ=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fP,q,this.__fQ);
Event.addNativeListener(this.__fP,t,this.__fQ);
Event.addNativeListener(this.__fP,r,this.__fQ);
Event.addNativeListener(this.__fP,n,this.__fQ);
Event.addNativeListener(this.__fP,p,this.__fQ);
},_initMoveObserver:function(){this.__fR=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fP,j,this.__fR);
Event.addNativeListener(this.__fP,l,this.__fR);
Event.addNativeListener(this.__fP,k,this.__fR);
},_initWheelObserver:function(){this.__fS=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__fW();
qx.bom.Event.addNativeListener(J.target,J.type,this.__fS);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fP,q,this.__fQ);
Event.removeNativeListener(this.__fP,t,this.__fQ);
Event.removeNativeListener(this.__fP,r,this.__fQ);
Event.removeNativeListener(this.__fP,n,this.__fQ);
Event.removeNativeListener(this.__fP,p,this.__fQ);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fP,j,this.__fR);
Event.removeNativeListener(this.__fP,l,this.__fR);
Event.removeNativeListener(this.__fP,k,this.__fR);
},_stopWheelObserver:function(){var K=this.__fW();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__fS);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__fV(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__fX){this.__fX(M,N,O);
}
if(this.__ga){this.__ga(M,N,O);
}this.__fV(M,N,O);

if(this.__fY){this.__fY(M,N,O);
}
if(this.__gb){this.__gb(M,N,O);
}this.__fT=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__fV(P,o);
}),__fX:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__fV(Q,t,S);
}}},"default":null}),__fY:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__fV(T,p,V);
}},"default":null}),__ga:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__fT==r){this.__fV(W,q,Y);
}else if(X==n){this.__fV(W,r,Y);
}},"default":null}),__gb:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__fU=bc;
break;
case t:if(bc!==this.__fU){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__fU);
this.__fV(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__fN=this.__fO=this.__fP=this.__fU=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="win",c="1",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__gc=by;
this.__gd=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__ge=this.__gd;
}else{this.__ge=this.__gd.document.documentElement;
}this.__gf={};
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
}}},members:{__gg:null,__gc:null,__gd:null,__ge:null,__gf:null,__gh:null,__gi:null,__gj:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__gk();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__gc.dispatchEvent(bL,event);
}if(this.__gd){qx.event.Registration.fireEvent(this.__gd,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__gk();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__gc.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__gd){qx.event.Registration.fireEvent(this.__gd,s,qx.event.type.Data,[bN]);
}},__gk:function(){var bR=this.__gc.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__gc.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__gg=qx.lang.Function.listener(this.__gl,this);
this.__gj=qx.lang.Function.listener(this.__gn,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ge,i,this.__gg);
Event.addNativeListener(this.__ge,m,this.__gg);
Event.addNativeListener(this.__ge,k,this.__gj);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ge,i,this.__gg);
Event.removeNativeListener(this.__ge,m,this.__gg);
Event.removeNativeListener(this.__ge,k,this.__gj);

for(var bU in (this.__gi||{})){var bT=this.__gi[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__gi);
},__gl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__gf[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__gf[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==b){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__gf[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__gf[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__gm(ca.target,cd,ce);
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
}}this.__gf[ci]=ch;
}},"opera":function(cj){this.__gh=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__gm:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__gi){this.__gi={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__gi[co]){return;
}var self=this;
this.__gi[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__gn(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__gi[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__gn:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

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
if(cB!=this.__gh){this._idealKeyHandler(0,this.__gh,cA,cz);
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
this.__gh=this.__gc=this.__gd=this.__ge=this.__gf=null;
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
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Control",d="Shift",c="mousemove",b="move",a="mouseover",A="Alt",z="keyup",y="mouseup",x="dragend",w="on",v="mousedown",u="qxDraggable",t="drag",s="drop",r="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(B){qx.core.Object.call(this);
this.__go=B;
this.__gp=B.getWindow().document.documentElement;
this.__go.addListener(this.__gp,v,this._onMouseDown,this);
this.__gB();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__go:null,__gp:null,__gq:null,__gr:null,__gs:null,__gt:null,__gu:null,__gv:null,__gw:null,__gx:null,__gy:false,__gz:0,__gA:0,canHandleEvent:function(C,D){},registerEvent:function(E,F,G){},unregisterEvent:function(H,I,J){},addType:function(K){this.__gs[K]=true;
},addAction:function(L){this.__gt[L]=true;
},supportsType:function(M){return !!this.__gs[M];
},supportsAction:function(N){return !!this.__gt[N];
},getData:function(O){if(!this.__gI||!this.__gq){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__gs[O]){throw new Error("Unsupported data type: "+O+"!");
}
if(!this.__gv[O]){this.__gw=O;
this.__gD(q,this.__gr,this.__gq,false);
}
if(!this.__gv[O]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__gv[O]||null;
},getCurrentAction:function(){return this.__gx;
},addData:function(P,Q){this.__gv[P]=Q;
},getCurrentType:function(){return this.__gw;
},isSessionActive:function(){return this.__gy;
},__gB:function(){this.__gs={};
this.__gt={};
this.__gu={};
this.__gv={};
},__gC:function(){if(this.__gr==null){return;
}var T=this.__gt;
var R=this.__gu;
var S=null;

if(this.__gI){if(R.Shift&&R.Control&&T.alias){S=k;
}else if(R.Shift&&R.Alt&&T.copy){S=j;
}else if(R.Shift&&T.move){S=b;
}else if(R.Alt&&T.alias){S=k;
}else if(R.Control&&T.copy){S=j;
}else if(T.move){S=b;
}else if(T.copy){S=j;
}else if(T.alias){S=k;
}}
if(S!=this.__gx){this.__gx=S;
this.__gD(o,this.__gr,this.__gq,false);
}},__gD:function(U,V,W,X,Y){var bb=qx.event.Registration;
var ba=bb.createEvent(U,qx.event.type.Drag,[X,Y]);

if(V!==W){ba.setRelatedTarget(W);
}return bb.dispatchEvent(V,ba);
},__gE:function(bc){while(bc&&bc.nodeType==1){if(bc.getAttribute(u)==w){return bc;
}bc=bc.parentNode;
}return null;
},__gF:function(bd){while(bd&&bd.nodeType==1){if(bd.getAttribute(r)==w){return bd;
}bd=bd.parentNode;
}return null;
},__gG:function(){this.__gr=null;
this.__go.removeListener(this.__gp,c,this._onMouseMove,this,true);
this.__go.removeListener(this.__gp,y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__gB();
},__gH:function(){if(this.__gy){this.__go.removeListener(this.__gp,a,this._onMouseOver,this,true);
this.__go.removeListener(this.__gp,h,this._onMouseOut,this,true);
this.__go.removeListener(this.__gp,g,this._onKeyDown,this,true);
this.__go.removeListener(this.__gp,z,this._onKeyUp,this,true);
this.__gD(x,this.__gr,this.__gq,false);
this.__gy=false;
}this.__gI=false;
this.__gq=null;
this.__gG();
},__gI:false,_onWindowBlur:function(e){this.__gH();
},_onKeyDown:function(e){var be=e.getKeyIdentifier();

switch(be){case A:case f:case d:if(!this.__gu[be]){this.__gu[be]=true;
this.__gC();
}}},_onKeyUp:function(e){var bf=e.getKeyIdentifier();

switch(bf){case A:case f:case d:if(this.__gu[bf]){this.__gu[bf]=false;
this.__gC();
}}},_onMouseDown:function(e){if(this.__gy){return;
}var bg=this.__gE(e.getTarget());

if(bg){this.__gz=e.getDocumentLeft();
this.__gA=e.getDocumentTop();
this.__gr=bg;
this.__go.addListener(this.__gp,c,this._onMouseMove,this,true);
this.__go.addListener(this.__gp,y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__gI){this.__gD(s,this.__gq,this.__gr,false,e);
}if(this.__gy){e.stopPropagation();
}this.__gH();
},_onMouseMove:function(e){if(this.__gy){if(!this.__gD(t,this.__gr,this.__gq,true,e)){this.__gH();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gz)>3||Math.abs(e.getDocumentTop()-this.__gA)>3){if(this.__gD(n,this.__gr,this.__gq,true,e)){this.__gy=true;
this.__go.addListener(this.__gp,a,this._onMouseOver,this,true);
this.__go.addListener(this.__gp,h,this._onMouseOut,this,true);
this.__go.addListener(this.__gp,g,this._onKeyDown,this,true);
this.__go.addListener(this.__gp,z,this._onKeyUp,this,true);
var bh=this.__gu;
bh.Control=e.isCtrlPressed();
bh.Shift=e.isShiftPressed();
bh.Alt=e.isAltPressed();
this.__gC();
}else{this.__gD(x,this.__gr,this.__gq,false);
this.__gG();
}}}},_onMouseOver:function(e){var bi=e.getTarget();
var bj=this.__gF(bi);

if(bj&&bj!=this.__gq){this.__gI=this.__gD(m,bj,this.__gr,true,e);
this.__gq=bj;
this.__gC();
}},_onMouseOut:function(e){var bl=this.__gF(e.getTarget());
var bk=this.__gF(e.getRelatedTarget());

if(bl&&bl!==bk&&bl==this.__gq){this.__gD(l,this.__gq,bk,false,e);
this.__gq=null;
this.__gI=false;
qx.event.Timer.once(this.__gC,this,0);
}}},destruct:function(){this.__gr=this.__gq=this.__go=this.__gp=this.__gs=this.__gt=this.__gu=this.__gv=null;
},defer:function(bm){qx.event.Registration.addHandler(bm);
}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__gJ:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__gK:{},__gL:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__gL[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__gL[t]=true;
}catch(e){qx.bom.Element.__gL[t]=false;
}}return qx.bom.Element.__gL[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__gK[w]){var v=qx.bom.Element.__gK[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__gK[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__gJ;
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
qx.Class.define(b,{extend:qx.event.type.Event,members:{__gM:null,__gN:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__gM=d;
this.__gN=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__gM=this.__gM;
g.__gN=this.__gN;
return g;
},getOrientation:function(){return this.__gM;
},isLandscape:function(){return this.__gN==c;
},isPortrait:function(){return this.__gN==a;
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
},isMultiTouch:function(){return this.__gP().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__gO(f).pageX;
},getDocumentTop:function(g){return this.__gO(g).pageY;
},getScreenLeft:function(h){return this.__gO(h).screenX;
},getScreenTop:function(j){return this.__gO(j).screenY;
},getViewportLeft:function(k){return this.__gO(k).clientX;
},getViewportTop:function(l){return this.__gO(l).clientY;
},getIdentifier:function(m){return this.__gO(m).identifier;
},__gO:function(n){n=n==null?0:n;
return this.__gP()[n];
},__gP:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
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
l.detail=k.detail;
l.srcElement=k.srcElement;
l.target=k.target;
return l;
},__gQ:{0:j,2:i,1:h},__gR:{1:j,2:i,4:h},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:return i;
case f:if(qx.core.Environment.get(b)===a&&qx.core.Environment.get(c)<9){return j;
}default:if(this._native.target!==undefined){return this.__gQ[this._native.button]||g;
}else{return this.__gR[this._native.button]||g;
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
(function(){var i="engine.version",h="os.name",g="osx",f="win",e="engine.name",d="chrome",c="qx.dynamicmousewheel",b="qx.event.type.MouseWheel",a="browser.name";
qx.Class.define(b,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();
this.preventDefault();
},__gS:function(j){var k=Math.abs(j);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>k){qx.event.type.MouseWheel.MINSCROLL=k;
this.__gT();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<k){qx.event.type.MouseWheel.MAXSCROLL=k;
this.__gT();
}if(qx.event.type.MouseWheel.MAXSCROLL===k&&qx.event.type.MouseWheel.MINSCROLL===k){return 2*(j/k);
}var l=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var m=(j/l)*Math.log(l)*qx.event.type.MouseWheel.FACTOR;
return m<0?Math.min(m,-1):Math.max(m,1);
},__gT:function(){var n=qx.event.type.MouseWheel.MAXSCROLL||0;
var q=qx.event.type.MouseWheel.MINSCROLL||n;

if(n<=q){return;
}var o=n-q;
var p=(n/o)*Math.log(o);

if(p==0){p=1;
}qx.event.type.MouseWheel.FACTOR=6/p;
},getWheelDelta:function(){if(qx.core.Environment.get(c)){if(this._native.detail){return this.__gS(this._native.detail);
}return this.__gS(-this._native.wheelDelta);
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
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gU:null,__gV:null,__gW:null,__gX:null,__gY:null,__ha:null,__hb:null,__hc:null,__hd:null,__he:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
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
}},tryActivate:function(S){var T=this.__ht(S);

if(T){this.setActive(T);
}},__hf:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__hg:function(){if(this._windowFocused){this._windowFocused=false;
this.__hf(this._window,null,g,false);
}},__hh:function(){if(!this._windowFocused){this._windowFocused=true;
this.__hf(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__ho,this);
this.__gW=qx.lang.Function.listener(this.__hm,this);
this.__gX=qx.lang.Function.listener(this.__hl,this);
this.__gY=qx.lang.Function.listener(this.__hi,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gU,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gV,true);
qx.bom.Event.addNativeListener(this._window,f,this.__gW,true);
qx.bom.Event.addNativeListener(this._window,g,this.__gX,true);
qx.bom.Event.addNativeListener(this._window,y,this.__gY,true);
},"mshtml":function(){this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__ho,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
this.__hc=qx.lang.Function.listener(this.__hk,this);
this.__ha=qx.lang.Function.listener(this.__hq,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gU);
qx.bom.Event.addNativeListener(this._document,h,this.__gV);
qx.bom.Event.addNativeListener(this._document,b,this.__hb);
qx.bom.Event.addNativeListener(this._document,a,this.__hc);
qx.bom.Event.addNativeListener(this._document,d,this.__ha);
},"webkit":function(){this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__ho,this);
this.__hc=qx.lang.Function.listener(this.__hk,this);
this.__gW=qx.lang.Function.listener(this.__hm,this);
this.__gX=qx.lang.Function.listener(this.__hl,this);
this.__ha=qx.lang.Function.listener(this.__hq,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gU,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gV,true);
qx.bom.Event.addNativeListener(this._document,d,this.__ha,false);
qx.bom.Event.addNativeListener(this._window,c,this.__hc,true);
qx.bom.Event.addNativeListener(this._window,f,this.__gW,true);
qx.bom.Event.addNativeListener(this._window,g,this.__gX,true);
},"opera":function(){this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__ho,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
this.__hc=qx.lang.Function.listener(this.__hk,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gU,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gV,true);
qx.bom.Event.addNativeListener(this._window,z,this.__hb,true);
qx.bom.Event.addNativeListener(this._window,c,this.__hc,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gU,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gV,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__gW,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__gX,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__gY,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gU);
qx.bom.Event.removeNativeListener(this._document,h,this.__gV);
qx.bom.Event.removeNativeListener(this._document,b,this.__hb);
qx.bom.Event.removeNativeListener(this._document,a,this.__hc);
qx.bom.Event.removeNativeListener(this._document,d,this.__ha);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gU,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gV,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__ha,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__hc,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__gW,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__gX,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gU,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gV,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__hb,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__hc,true);
}}),__hi:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__hu(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__hj:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__hh();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__hs(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__hh();

if(this.__hd){this.setFocus(this.__hd);
delete this.__hd;
}
if(this.__he){this.setActive(this.__he);
delete this.__he;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__hu(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__hk:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__hg();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__hg();
this.__hd=this.getFocus();
this.__he=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__hl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__hg();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__hg();
this.__hd=this.getFocus();
this.__he=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__hm:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__hh();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__hh();

if(this.__hd){this.setFocus(this.__hd);
delete this.__hd;
}
if(this.__he){this.setActive(this.__he);
delete this.__he;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__hn:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__hs(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__hs(bB);

if(bA){if(!this.__hu(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__hu(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__hs(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__hs(bK);

if(!this.__hu(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__ho:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__hp(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__hp(bQ));
},"default":null})),__hp:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__hq:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__hu(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__hr:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__hs:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__hr(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__ht:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__hu:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__hf(cg,cf,v,true);
}
if(cf){this.__hf(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__hf(ci,ch,a,true);
}
if(ch){this.__hf(ch,ci,b,true);
}if(ci){this.__hf(ci,ch,g,false);
}
if(ch){this.__hf(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__hv=null;
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
},"default":function(p){if(this.__hw(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__hw(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__hw(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__hw(A)){var F=qx.bom.Range.get();
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
}},"gecko|webkit":function(K){if(this.__hw(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__hw(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__hw(O)){var T=qx.bom.Range.get();
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
}},"gecko|webkit":function(Y){if(this.__hw(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__hw(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__hw:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
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
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__hy=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__hz=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__hA:null,__hy:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__hA);
this.__hA=null;
}else if(p){this.__hA=window.setInterval(this.__hy,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(r){this.setInterval(r);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(s){this.stop();
this.startWith(s);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__hA){window.clearInterval(this.__hA);
}this.__hA=this.__hy=null;
}});
})();
(function(){var i="engine.name",h="losecapture",g="mshtml",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);
this.__hB=j.getWindow();
this.__hC=k;
j.addListener(this.__hB,f,this.releaseCapture,this);
j.addListener(this.__hB,e,this.releaseCapture,this);
j.addListener(this.__hB,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__hC:null,__hD:null,__hE:true,__hB:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__hD&&this.__hF[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__hE||!qx.dom.Hierarchy.contains(this.__hD,o)){o=this.__hD;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__hF:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__hD===q&&this.__hE==r){return;
}
if(this.__hD){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__hE=r;
this.__hD=q;
this.__hC.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__hD;
},releaseCapture:function(){var s=this.__hD;

if(!s){return;
}this.__hD=null;
this.__hC.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__hD=this.__hB=this.__hC=null;
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
(function(){var k="engine.version",j="",i="engine.name",h="hidden",g="-moz-scrollbars-none",f="overflow",e=";",d="overflowY",b=":",a="overflowX",z="overflow:",y="none",x="scroll",w="borderLeftStyle",v="borderRightStyle",u="div",r="borderRightWidth",q="overflow-y",p="borderLeftWidth",o="-moz-scrollbars-vertical",m="100px",n="qx.bom.element.Overflow",l="overflow-x";
qx.Class.define(n,{statics:{__ea:null,getScrollbarWidth:function(){if(this.__ea!==null){return this.__ea;
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
this.__ea=c?c:16;
document.body.removeChild(t);
return this.__ea;
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
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__eb:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__eb[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__eb[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var q="engine.name",p="",o="boxSizing",n="box-sizing",m="qx.bom.element.BoxSizing",k="KhtmlBoxSizing",j="border-box",h="-moz-box-sizing",g="WebkitBoxSizing",f=":",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(m,{statics:{__ec:qx.core.Environment.select(q,{"mshtml":null,"webkit":[o,k,g],"gecko":[a],"opera":[o]}),__ed:qx.core.Environment.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[h],"opera":[n]}),__ee:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__ef:function(r){var s=this.__ee;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},compile:qx.core.Environment.select(q,{"mshtml":function(t){},"default":function(u){var w=this.__ed;
var v=p;

if(w){for(var i=0,l=w.length;i<l;i++){v+=w[i]+f+u+c;
}}return v;
}}),get:qx.core.Environment.select(q,{"mshtml":function(x){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(x))){if(!this.__ef(x)){return d;
}}return j;
},"default":function(y){var A=this.__ec;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==p){return z;
}}}return p;
}}),set:qx.core.Environment.select(q,{"mshtml":function(B,C){},"default":function(D,E){var F=this.__ec;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(G){this.set(G,p);
}}});
})();
(function(){var m="",k="engine.name",h="userSelect",g="style",f="MozUserModify",e="px",d="pixelBottom",c="float",b="borderImage",a="styleFloat",F="appearance",E="pixelHeight",D='Ms',C=":",B="cssFloat",A="pixelTop",z="pixelLeft",y='O',x="qx.bom.element.Style",w='Khtml',t='string',u="pixelRight",r='Moz',s="pixelWidth",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(x,{statics:{__eg:function(){var G=[F,h,q,b];
var K={};
var H=document.documentElement.style;
var L=[r,o,w,y,D];

for(var i=0,l=G.length;i<l;i++){var M=G[i];
var I=M;

if(H[M]){K[I]=M;
continue;
}M=qx.lang.String.firstUp(M);

for(var j=0,N=L.length;j<N;j++){var J=L[j]+M;

if(typeof H[J]==t){K[I]=J;
break;
}}}this.__eh=K;
this.__eh[n]=qx.core.Environment.select(k,{"gecko":f,"webkit":v,"default":h});
this.__ei={};

for(var I in K){this.__ei[I]=this.__em(K[I]);
}this.__eh[c]=qx.core.Environment.select(k,{"mshtml":a,"default":B});
},__ej:{width:s,height:E,left:z,right:u,top:A,bottom:d},__ek:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(O){var Q=[];
var S=this.__ek;
var R=this.__ei;
var name,P;

for(name in O){P=O[name];

if(P==null){continue;
}name=R[name]||name;
if(S[name]){Q.push(S[name].compile(P));
}else{Q.push(this.__em(name),C,P,p);
}}return Q.join(m);
},__el:{},__em:function(T){var U=this.__el;
var V=U[T];

if(!V){V=U[T]=qx.lang.String.hyphenate(T);
}return V;
},setCss:qx.core.Environment.select(k,{"mshtml":function(W,X){W.style.cssText=X;
},"default":function(Y,ba){Y.setAttribute(g,ba);
}}),getCss:qx.core.Environment.select(k,{"mshtml":function(bb){return bb.style.cssText.toLowerCase();
},"default":function(bc){return bc.getAttribute(g);
}}),isPropertySupported:function(bd){return (this.__ek[bd]||this.__eh[bd]||bd in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(be,name,bf,bg){name=this.__eh[name]||name;
if(bg!==false&&this.__ek[name]){return this.__ek[name].set(be,bf);
}else{be.style[name]=bf!==null?bf:m;
}},setStyles:function(bh,bi,bj){var bm=this.__eh;
var bo=this.__ek;
var bk=bh.style;

for(var bn in bi){var bl=bi[bn];
var name=bm[bn]||bn;

if(bl===undefined){if(bj!==false&&bo[name]){bo[name].reset(bh);
}else{bk[name]=m;
}}else{if(bj!==false&&bo[name]){bo[name].set(bh,bl);
}else{bk[name]=bl!==null?bl:m;
}}}},reset:function(bp,name,bq){name=this.__eh[name]||name;
if(bq!==false&&this.__ek[name]){return this.__ek[name].reset(bp);
}else{bp.style[name]=m;
}},get:qx.core.Environment.select(k,{"mshtml":function(br,name,bs,bt){name=this.__eh[name]||name;
if(bt!==false&&this.__ek[name]){return this.__ek[name].get(br,bs);
}if(!br.currentStyle){return br.style[name]||m;
}switch(bs){case this.LOCAL_MODE:return br.style[name]||m;
case this.CASCADED_MODE:return br.currentStyle[name]||m;
default:var bx=br.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bx)){return bx;
}var bw=this.__ej[name];

if(bw){var bu=br.style[name];
br.style[name]=bx||0;
var bv=br.style[bw]+e;
br.style[name]=bu;
return bv;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bx)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bx;
}},"default":function(by,name,bz,bA){name=this.__eh[name]||name;
if(bA!==false&&this.__ek[name]){return this.__ek[name].get(by,bz);
}switch(bz){case this.LOCAL_MODE:return by.style[name]||m;
case this.CASCADED_MODE:if(by.currentStyle){return by.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bB=qx.dom.Node.getDocument(by);
var bC=bB.defaultView.getComputedStyle(by,null);
return bC?bC[name]:m;
}}})},defer:function(bD){bD.__eg();
}});
})();
(function(){var j="static",i="user",h="Surfin' Safari",g="Heise",f="http://blogs.msdn.com/ie/rss.xml",e="changeStaticFeedFolder",d="http://blogs.msdn.com/jscript/rss.xml",c="The Mozilla Blog",b="http://webkit.org/blog/feed/",a="http://feeds2.feedburner.com/qooxdoo/news/content",A="http://blog.mozilla.com/feed/",z="changeFeedFolder",y="http://www.heise.de/newsticker/heise-atom.xml",x="http://my.opera.com/desktopteam/xml/rss/blog/",w="JScript Team Blog",v="Feeds",u="http://feeds2.feedburner.com/ajaxian",t="feedreader.model.Model",s="IEBlog",r="Ajaxian",p="User Feeds",q="http://daringfireball.net/index.xml",n="Static Feeds",o="qooxdoo News",l="Opera Desktop Blog",m="Daring Fireball",k="changeUserFeedFolder";
qx.Class.define(t,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._initializeModel();
},properties:{feedFolder:{init:null,event:z,nullable:true},staticFeedFolder:{init:null,event:e,nullable:true},userFeedFolder:{init:null,event:k,nullable:true}},members:{_initializeModel:function(){var B=new feedreader.model.FeedFolder(v);
var C=new feedreader.model.FeedFolder(qx.locale.Manager.tr(n));
B.getFeeds().push(C);
C.getFeeds().push(new feedreader.model.Feed(o,a,j));
C.getFeeds().push(new feedreader.model.Feed(w,d,j));
C.getFeeds().push(new feedreader.model.Feed(m,q,j));
C.getFeeds().push(new feedreader.model.Feed(h,b,j));
C.getFeeds().push(new feedreader.model.Feed(r,u,j));
var D=new feedreader.model.FeedFolder(qx.locale.Manager.tr(p));
B.getFeeds().push(D);
D.getFeeds().push(new feedreader.model.Feed(g,y,i));
D.getFeeds().push(new feedreader.model.Feed(s,f,i));
D.getFeeds().push(new feedreader.model.Feed(c,A,i));
D.getFeeds().push(new feedreader.model.Feed(l,x,i));
this.setFeedFolder(B);
this.setStaticFeedFolder(C);
this.setUserFeedFolder(D);
}}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
this._registerEventChaining(i,j,name);
},_registerEventChaining:function(k,l,name){if((k instanceof qx.core.Object)&&qx.Class.hasMixin(k.constructor,qx.data.marshal.MEventBubbling)){var m=qx.lang.Function.bind(this.__lB,this,name);
var n=k.addListener(c,m,this);
k.setUserData(d,n);
}if(l!=null&&l.getUserData&&l.getUserData(d)!=null){l.removeListenerById(l.getUserData(d));
}},__lB:function(name,e){var v=e.getData();
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
(function(){var o="change",n="changeBubble",m="add",l="remove",k="0-",j="order",h="-",g="0",f="qx.event.type.Data",e="Boolean",b="",d="qx.data.Array",c="number",a="changeLength";
qx.Class.define(d,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(p){qx.core.Object.call(this);
if(p==undefined){this.__lC=[];
}else if(arguments.length>1){this.__lC=[];

for(var i=0;i<arguments.length;i++){this.__lC.push(arguments[i]);
}}else if(typeof p==c){this.__lC=new Array(p);
}else if(p instanceof Array){this.__lC=qx.lang.Array.clone(p);
}else{this.__lC=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__lC.length;i++){this._applyEventPropagation(this.__lC[i],null,i);
}this.__lD();
},properties:{autoDisposeItems:{check:e,init:false}},events:{"change":f,"changeLength":f},members:{__lC:null,concat:function(q){if(q){var r=this.__lC.concat(q);
}else{var r=this.__lC.concat();
}return new qx.data.Array(r);
},join:function(s){return this.__lC.join(s);
},pop:function(){var t=this.__lC.pop();
this.__lD();
this._registerEventChaining(null,t,this.length-1);
this.fireDataEvent(n,{value:[],name:this.length,old:[t]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:l,items:[t]},null);
return t;
},push:function(u){for(var i=0;i<arguments.length;i++){this.__lC.push(arguments[i]);
this.__lD();
this._registerEventChaining(arguments[i],null,this.length-1);
this.fireDataEvent(n,{value:[arguments[i]],name:this.length-1,old:[]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){if(this.length==0){return;
}var v=this.__lC.concat();
this.__lC.reverse();
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__lC,name:k+(this.__lC.length-1),old:v});
},shift:function(){if(this.length==0){return;
}var w=this.__lC.shift();
this.__lD();
this._registerEventChaining(null,w,this.length-1);
this.fireDataEvent(n,{value:[],name:g,old:[w]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:l,items:[w]},null);
return w;
},slice:function(x,y){return new qx.data.Array(this.__lC.slice(x,y));
},splice:function(z,A,B){var J=this.__lC.length;
var F=this.__lC.splice.apply(this.__lC,arguments);
if(this.__lC.length!=J){this.__lD();
}var H=A>0;
var D=arguments.length>2;
var E=null;

if(H||D){if(this.__lC.length>J){var I=m;
}else if(this.__lC.length<J){var I=l;
E=F;
}else{var I=j;
}this.fireDataEvent(o,{start:z,end:this.length-1,type:I,items:E},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,z+i);
}var G=[];

for(var i=2;i<arguments.length;i++){G[i-2]=arguments[i];
}var C=(z+Math.max(arguments.length-3,A-1));
var name=z==C?C:z+h+C;
this.fireDataEvent(n,{value:G,name:name,old:F});
for(var i=0;i<F.length;i++){this._registerEventChaining(null,F[i],i);
}return (new qx.data.Array(F));
},sort:function(K){if(this.length==0){return;
}var L=this.__lC.concat();
this.__lC.sort.apply(this.__lC,arguments);
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__lC,name:k+(this.length-1),old:L});
},unshift:function(M){for(var i=arguments.length-1;i>=0;i--){this.__lC.unshift(arguments[i]);
this.__lD();
this._registerEventChaining(arguments[i],null,0);
this.fireDataEvent(n,{value:[this.__lC[0]],name:g,old:[this.__lC[1]]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__lC;
},getItem:function(N){return this.__lC[N];
},setItem:function(O,P){var Q=this.__lC[O];
if(Q===P){return;
}this.__lC[O]=P;
this._registerEventChaining(P,Q,O);
if(this.length!=this.__lC.length){this.__lD();
}this.fireDataEvent(n,{value:[P],name:O,old:[Q]});
this.fireDataEvent(o,{start:O,end:O,type:m,items:[P]},null);
},getLength:function(){return this.length;
},indexOf:function(R){return this.__lC.indexOf(R);
},toString:function(){if(this.__lC!=null){return this.__lC.toString();
}return b;
},contains:function(S){return this.__lC.indexOf(S)!==-1;
},copy:function(){return this.concat();
},insertAt:function(T,U){this.splice(T,0,U);
},insertBefore:function(V,W){var X=this.indexOf(V);

if(X==-1){this.push(W);
}else{this.splice(X,0,W);
}},insertAfter:function(Y,ba){var bb=this.indexOf(Y);

if(bb==-1||bb==(this.length-1)){this.push(ba);
}else{this.splice(bb+1,0,ba);
}},removeAt:function(bc){var be=this.splice(bc,1);
var bd=be.getItem(0);
be.dispose();
return bd;
},removeAll:function(){for(var i=0;i<this.__lC.length;i++){this._registerEventChaining(null,this.__lC[i],i);
}if(this.getLength()==0){return;
}var bg=this.getLength();
var bf=this.__lC.concat();
this.__lC.length=0;
this.__lD();
this.fireDataEvent(n,{value:[],name:k+(bg-1),old:bf});
this.fireDataEvent(o,{start:0,end:bg-1,type:l,items:bf},null);
return bf;
},append:function(bh){if(bh instanceof qx.data.Array){bh=bh.toArray();
}Array.prototype.push.apply(this.__lC,bh);
for(var i=0;i<bh.length;i++){this._registerEventChaining(bh[i],null,this.__lC.length+i);
}var bi=this.length;
this.__lD();
this.fireDataEvent(n,{value:bh,name:bi==(this.length-1)?bi:bi+h+(this.length-1),old:[]});
this.fireDataEvent(o,{start:bi,end:this.length-1,type:m,items:bh},null);
},remove:function(bj){var bk=this.indexOf(bj);

if(bk!=-1){this.splice(bk,1);
return bj;
}},equals:function(bl){if(this.length!==bl.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==bl.getItem(i)){return false;
}}return true;
},sum:function(){var bm=0;

for(var i=0;i<this.length;i++){bm+=this.getItem(i);
}return bm;
},max:function(){var bn=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>bn){bn=this.getItem(i);
}}return bn===undefined?null:bn;
},min:function(){var bo=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bo){bo=this.getItem(i);
}}return bo===undefined?null:bo;
},forEach:function(bp,bq){for(var i=0;i<this.__lC.length;i++){bp.call(bq,this.__lC[i]);
}},__lD:function(){var br=this.length;
this.length=this.__lC.length;
this.fireDataEvent(a,this.length,br);
}},destruct:function(){for(var i=0;i<this.__lC.length;i++){var bs=this.__lC[i];
this._applyEventPropagation(null,bs,i);
if(this.isAutoDisposeItems()&&bs&&bs instanceof qx.core.Object){bs.dispose();
}}this.__lC=null;
}});
})();
(function(){var p="qx.data.Array",o="String",n="changeArticles",m="loading",l="",k="new",j="feedreader.model.FeedFolder",i="Folder",h="loaded",g="dataModified",c="null",f="changeFeeds",e="stateModified",b="_applyState",a="changeTitle",d="error";
qx.Class.define(j,{extend:qx.core.Object,construct:function(q){qx.core.Object.call(this);
this.setTitle(q);
this.setFeeds(new qx.data.Array());
},properties:{title:{check:o,event:a,init:i},category:{check:o,init:l,event:g},feeds:{check:p,event:f},articles:{check:p,event:n,init:new qx.data.Array()},state:{check:[k,m,h,d],init:c,event:e,apply:b}}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__iu=u;
this.length=u.length;
},members:{$$isString:true,length:0,__iu:null,toString:function(){return this.__iu;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(v,w){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){var z=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
y.valueOf=y.toString;

if(new x(t).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__iv=c;
this.__iw=d;
},members:{__iv:null,__iw:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__iv,this.__iw);
}}});
})();
(function(){var l="_",k="",j="locale",h="_applyLocale",g="changeLocale",f="C",e="locale.variant",d="qx.dynlocale",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ix=qx.$$translations||{};
this.__iy=qx.$$locales||{};
var m=qx.core.Environment.get(j);
var n=qx.core.Environment.get(e);

if(n!==k){m+=l+n;
}this.__iz=m;
this.setLocale(m||this.__iA);
},statics:{tr:function(o,p){var q=qx.lang.Array.fromArguments(arguments);
q.splice(0,1);
return qx.locale.Manager.getInstance().translate(o,q);
},trn:function(r,s,t,u){var v=qx.lang.Array.fromArguments(arguments);
v.splice(0,3);
if(t!=1){return qx.locale.Manager.getInstance().translate(s,v);
}else{return qx.locale.Manager.getInstance().translate(r,v);
}},trc:function(w,x,y){var z=qx.lang.Array.fromArguments(arguments);
z.splice(0,2);
return qx.locale.Manager.getInstance().translate(x,z);
},marktr:function(A){return A;
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__iA:f,__iB:null,__iC:null,__ix:null,__iy:null,__iz:null,getLanguage:function(){return this.__iC;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(){var C=[];

for(var B in this.__iy){if(B!=this.__iA){C.push(B);
}}return C;
},__iD:function(D){var F;

if(D==null){return null;
}var E=D.indexOf(l);

if(E==-1){F=D;
}else{F=D.substring(0,E);
}return F;
},_applyLocale:function(G,H){this.__iB=G;
this.__iC=this.__iD(G);
},addTranslation:function(I,J){var K=this.__ix;

if(K[I]){for(var L in J){K[I][L]=J[L];
}}else{K[I]=J;
}},addLocale:function(M,N){var O=this.__iy;

if(O[M]){for(var P in N){O[M][P]=N[P];
}}else{O[M]=N;
}},translate:function(Q,R,S){var T=this.__ix;
return this.__iE(T,Q,R,S);
},localize:function(U,V,W){var X=this.__iy;
return this.__iE(X,U,V,W);
},__iE:function(Y,ba,bb,bc){var bd;

if(!Y){return ba;
}
if(bc){var bf=this.__iD(bc);
}else{bc=this.__iB;
bf=this.__iC;
}if(!bd&&Y[bc]){bd=Y[bc][ba];
}if(!bd&&Y[bf]){bd=Y[bf][ba];
}if(!bd&&Y[this.__iA]){bd=Y[this.__iA][ba];
}
if(!bd){bd=ba;
}
if(bb.length>0){var be=[];

for(var i=0;i<bb.length;i++){var bg=bb[i];

if(bg&&bg.translate){be[i]=bg.translate();
}else{be[i]=bg;
}}bd=qx.lang.String.format(bd,be);
}
if(qx.core.Environment.get(d)){bd=new qx.locale.LocalizedString(bd,ba,bb);
}return bd;
}},destruct:function(){this.__ix=this.__iy=null;
}});
})();
(function(){var m="String",l="",k="new",j="stateModified",i="changeArticles",h="loading",g="qx.data.Array",f="loaded",e="dataModified",d="changeUrl",a="feedreader.model.Feed",c="changeTitle",b="error";
qx.Class.define(a,{extend:qx.core.Object,construct:function(n,o,p){qx.core.Object.call(this);
this.set({url:o,title:n,category:p||l});
this.setArticles(new qx.data.Array());
},properties:{articles:{check:g,event:i},selectedArticle:{nullable:true},url:{check:m,event:d},title:{check:m,event:c},category:{check:m,init:l,event:e},state:{check:[k,h,f,b],init:k,event:j}}});
})();
(function(){var k="select * from feed where url='",j="'",h="io.ssl",g="feedreader.io.FeedLoader",f="loaded",d="loading",c="changeState",b="failed",a="singleton";
qx.Class.define(g,{extend:qx.core.Object,type:a,members:{loadAll:function(l){var n=l.getFeeds().getItem(0).getFeeds();

for(var i=0;i<n.length;i++){this.load(n.getItem(i));
}var m=l.getFeeds().getItem(1).getFeeds();

for(i=0;i<m.length;i++){this.load(m.getItem(i));
}},load:function(o){o.setState(d);
var p=k+o.getUrl()+j;
var q=new qx.data.store.Yql(p,{manipulateData:function(r){try{r=r.query.results.item||r.query.results.entry;
for(var i=0;i<r.length;i++){if(!qx.lang.Type.isString(r[i].title)){r[i].title=r[i].title.content;
}}return r;
}catch(e){return b;
}}},qx.core.Environment.get(h));
q.addListener(f,this.__CD(o),this);
q.addListener(c,qx.lang.Function.bind(this.__CC,this,o),this);
},__CC:function(s,e){if(e.getData()=="aborted"||e.getData()=="timeout"||e.getData()=="failed"){s.setState("error");
}},__CD:function(t){return function(e){var u=e.getData();
if(u=="failed"){t.setState("error");
return;
}t.setArticles(u);
t.setState("loaded");
};
}}});
})();
(function(){var j="aborted",i="changeState",h="completed",g="failed",f="configured",e="timeout",d="changeModel",c="application/json",b="GET",a="loaded",v="qx.event.type.Data",u="error",t="receiving",s="qx.event.type.Event",r="queued",q="String",p="sending",o="_marshaler",n="qx.data.store.Json",m="changeUrl",k="__zi",l="_applyUrl";
qx.Class.define(n,{extend:qx.core.Object,construct:function(w,x){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(x);
this._delegate=x;

if(w!=null){this.setUrl(w);
}},events:{"loaded":v,"error":s},properties:{model:{nullable:true,event:d},state:{check:[f,r,p,t,h,j,e,g],init:f,event:i},url:{check:q,apply:l,event:m,nullable:true}},members:{__zi:null,_delegate:null,_applyUrl:function(y,z){if(y!=null){this._createRequest(y);
}},_createRequest:function(A){this.__zi=new qx.io.remote.Request(A,b,c);
this.__zi.addListener(h,this.__zj,this);
var B=this._delegate;

if(B&&qx.lang.Type.isFunction(B.configureRequest)){this._delegate.configureRequest(this.__zi);
}this.__zi.addListener(i,function(C){var D=C.getData();
this.setState(D);

if(D===g||D===j||D===e){this.fireEvent(u);
}},this);
this.__zi.send();
},__zj:function(E){var G=E.getContent();
var F=this._delegate;

if(F&&qx.lang.Type.isFunction(F.manipulateData)){G=this._delegate.manipulateData(G);
}this._marshaler.toClass(G,true);
var H=this.getModel();
this.setModel(this._marshaler.toModel(G));
if(H&&H.dispose){H.dispose();
}this.fireDataEvent(a,this.getModel());
},reload:function(){var I=this.getUrl();

if(I!=null){this._createRequest(I);
}}},destruct:function(){this._disposeObjects(o,k);
this._delegate=null;
}});
})();
(function(){var k="error",j="?",i="&",h="loaded",g='qx.data.store.Jsonp[',f='].callback',e="failed",d="=",c="fail",b="qx.data.store.Jsonp",a="String";
qx.Class.define(b,{extend:qx.data.store.Json,construct:function(l,m,n){if(n!=undefined){this.setCallbackParam(n);
}qx.data.store.Json.call(this,l,m);
},properties:{callbackParam:{check:a,nullable:false}},members:{__zk:null,_createRequest:function(o){if(this.__zk){this.__zk.dispose();
}this.__zk=new qx.io.ScriptLoader();
var q=this._delegate;

if(q&&qx.lang.Type.isFunction(q.configureRequest)){this._delegate.configureRequest(this.__zk);
}var p=o.indexOf(j)==-1?j:i;
o+=p+this.getCallbackParam()+d;
var r=parseInt(this.toHashCode(),10);
qx.data.store.Jsonp[r]=this;
o+=g+r+f;
this.__zk.load(o,function(status){delete this[r];

if(status===c){this.fireEvent(k);
}},this);
},callback:function(s){if(this.isDisposed()){return;
}this.__zl(s);
},__zl:function(t){if(t==undefined){this.setState(e);
this.fireEvent(k);
return;
}var u=this._delegate;

if(u&&qx.lang.Type.isFunction(u.manipulateData)){t=this._delegate.manipulateData(t);
}this._marshaler.toClass(t);
this.setModel(this._marshaler.toModel(t));
this.fireDataEvent(h,this.getModel());
}},destruct:function(){if(this.__zk){this.__zk.dispose();
}this.__zk=null;
}});
})();
(function(){var g="://query.yahooapis.com/v1/public/yql?q=",f="callback",e="http",d="env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",c="&format=json&diagnostics=false&",b="https",a="qx.data.store.Yql";
qx.Class.define(a,{extend:qx.data.store.Jsonp,construct:function(h,i,j){var l=j?b:e;
var k=l+g+encodeURIComponent(h)+c+d;
qx.data.store.Jsonp.call(this,k,i,f);
}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var k="qx.data.model.",j="",h="_validate",g='"',f="qx.debug.databinding",e="change",d="qx.data.marshal.Json",c="qx.debug",b="set",a="_applyEventPropagation";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(l){qx.core.Object.call(this);
this.__xq=l;
},statics:{__xr:null,createModel:function(m,n){if(this.__xr===null){this.__xr=new qx.data.marshal.Json();
}this.__xr.toClass(m,n);
return this.__xr.toModel(m);
}},members:{__xq:null,__xs:function(o){var p=[];

for(var q in o){p.push(q);
}return p.sort().join(g);
},toClass:function(r,s){if(qx.lang.Type.isNumber(r)||qx.lang.Type.isString(r)||qx.lang.Type.isBoolean(r)||r==null||r instanceof qx.core.Object){return;
}if(qx.lang.Type.isArray(r)){for(var i=0;i<r.length;i++){this.toClass(r[i],s);
}return ;
}var u=this.__xs(r);
if(this.__xq&&this.__xq.getModelClass&&this.__xq.getModelClass(u)!=null){return;
}for(var v in r){this.toClass(r[v],s);
}if(qx.Class.isDefined(k+u)){return;
}var B={};
var A={__xt:this.__xt};

for(var v in r){v=v.replace(/-/g,j);
B[v]={};
B[v].nullable=true;
B[v].event=e+qx.lang.String.firstUp(v);
if(s){B[v].apply=a;
}if(this.__xq&&this.__xq.getValidationRule){var x=this.__xq.getValidationRule(u,v);

if(x){B[v].validate=h+v;
A[h+v]=x;
}}}if(this.__xq&&this.__xq.getModelSuperClass){var z=this.__xq.getModelSuperClass(u)||qx.core.Object;
}else{var z=qx.core.Object;
}var w=[];

if(this.__xq&&this.__xq.getModelMixins){var y=this.__xq.getModelMixins(u);
if(!qx.lang.Type.isArray(y)){if(y!=null){w=[y];
}}}if(s){w.push(qx.data.marshal.MEventBubbling);
}var t={extend:z,include:w,properties:B,members:A,destruct:this.__xu};
qx.Class.define(k+u,t);
},__xu:function(){var C=qx.util.PropertyUtil.getAllProperties(this.constructor);

for(var D in C){this.__xt(this.get(C[D].name));
}},__xt:function(E){if(!(E instanceof qx.core.Object)){return ;
}if(E.isDisposed()){return;
}E.dispose();
},__xv:function(F){var G;
if(this.__xq&&this.__xq.getModelClass){G=this.__xq.getModelClass(F);
}
if(G!=null){return (new G());
}else{var H=qx.Class.getByName(k+F);
return (new H());
}},toModel:function(I){if(qx.lang.Type.isNumber(I)||qx.lang.Type.isString(I)||qx.lang.Type.isBoolean(I)||qx.lang.Type.isDate(I)||I==null||I instanceof qx.core.Object){return I;
}else if(qx.lang.Type.isArray(I)){var M=new qx.data.Array();
M.setAutoDisposeItems(true);

for(var i=0;i<I.length;i++){M.push(this.toModel(I[i]));
}return M;
}else if(qx.lang.Type.isObject(I)){var J=this.__xs(I);
var N=this.__xv(J);
for(var L in I){var K=L.replace(/-/g,j);
if((qx.core.Environment.get(c))&&qx.core.Environment.get(f)){if(L!=K){this.warn("The model contained an illegal name: '"+L+"'. Replaced it with '"+K+"'.");
}}N[b+qx.lang.String.firstUp(K)](this.toModel(I[L]));
}return N;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__xq=null;
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
(function(){var k="Boolean",j="qx.event.type.Event",i="queued",h="String",g="sending",f="receiving",d="aborted",c="failed",b="nocache",a="completed",P="qx.io.remote.Response",O="POST",N="configured",M="timeout",L="GET",K="Pragma",J="no-url-params-on-post",I="PUT",H="no-cache",G="Cache-Control",r="Content-Type",s="text/plain",p="application/xml",q="application/json",n="text/html",o="application/x-www-form-urlencoded",l="qx.io.remote.Exchange",m="Integer",t="X-Qooxdoo-Response-Type",u="HEAD",y="qx.io.remote.Request",x="_applyResponseType",A="_applyState",z="text/javascript",C="changeState",B="_applyProhibitCaching",w="",F="_applyMethod",E="DELETE",D="boolean";
qx.Class.define(y,{extend:qx.core.Object,construct:function(Q,R,S){qx.core.Object.call(this);
this.__rP={};
this.__rQ={};
this.__rR={};
this.__rS={};

if(Q!==undefined){this.setUrl(Q);
}
if(R!==undefined){this.setMethod(R);
}
if(S!==undefined){this.setResponseType(S);
}this.setProhibitCaching(true);
this.__rT=++qx.io.remote.Request.__rT;
},events:{"created":j,"configured":j,"sending":j,"receiving":j,"completed":P,"aborted":j,"failed":P,"timeout":P},statics:{__rT:0,methodAllowsRequestBody:function(T){return (T==O)||(T==I);
}},properties:{url:{check:h,init:w},method:{check:[L,O,I,u,E],apply:F,init:L},asynchronous:{check:k,init:true},data:{check:h,nullable:true},username:{check:h,nullable:true},password:{check:h,nullable:true},state:{check:[N,i,g,f,a,d,M,c],init:N,apply:A,event:C},responseType:{check:[s,z,q,p,n],init:s,apply:x},timeout:{check:m,nullable:true},prohibitCaching:{check:function(v){return typeof v==D||v===J;
},init:true,apply:B},crossDomain:{check:k,init:false},fileUpload:{check:k,init:false},transport:{check:l,nullable:true},useBasicHttpAuth:{check:k,init:false},parseJson:{check:k,init:true}},members:{__rP:null,__rQ:null,__rR:null,__rS:null,__rT:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case g:case f:this.error("Aborting already sent request!");
case i:this.abort();
break;
}},isConfigured:function(){return this.getState()===N;
},isQueued:function(){return this.getState()===i;
},isSending:function(){return this.getState()===g;
},isReceiving:function(){return this.getState()===f;
},isCompleted:function(){return this.getState()===a;
},isAborted:function(){return this.getState()===d;
},isTimeout:function(){return this.getState()===M;
},isFailed:function(){return this.getState()===c;
},__rU:qx.event.GlobalError.observeMethod(function(e){var U=e.clone();
U.setTarget(this);
this.dispatchEvent(U);
}),_onqueued:function(e){this.setState(i);
this.__rU(e);
},_onsending:function(e){this.setState(g);
this.__rU(e);
},_onreceiving:function(e){this.setState(f);
this.__rU(e);
},_oncompleted:function(e){this.setState(a);
this.__rU(e);
this.dispose();
},_onaborted:function(e){this.setState(d);
this.__rU(e);
this.dispose();
},_ontimeout:function(e){this.setState(M);
this.__rU(e);
this.dispose();
},_onfailed:function(e){this.setState(c);
this.__rU(e);
this.dispose();
},_applyState:function(V,W){},_applyProhibitCaching:function(X,Y){if(!X){this.removeParameter(b);
this.removeRequestHeader(K);
this.removeRequestHeader(G);
return;
}if(X!==J||this.getMethod()!=O){this.setParameter(b,new Date().valueOf());
}else{this.removeParameter(b);
}this.setRequestHeader(K,H);
this.setRequestHeader(G,H);
},_applyMethod:function(ba,bb){if(qx.io.remote.Request.methodAllowsRequestBody(ba)){this.setRequestHeader(r,o);
}else{this.removeRequestHeader(r);
}var bc=this.getProhibitCaching();
this._applyProhibitCaching(bc,bc);
},_applyResponseType:function(bd,be){this.setRequestHeader(t,bd);
},setRequestHeader:function(bf,bg){this.__rP[bf]=bg;
},removeRequestHeader:function(bh){delete this.__rP[bh];
},getRequestHeader:function(bi){return this.__rP[bi]||null;
},getRequestHeaders:function(){return this.__rP;
},setParameter:function(bj,bk,bl){if(bl){this.__rR[bj]=bk;
}else{this.__rQ[bj]=bk;
}},removeParameter:function(bm,bn){if(bn){delete this.__rR[bm];
}else{delete this.__rQ[bm];
}},getParameter:function(bo,bp){if(bp){return this.__rR[bo]||null;
}else{return this.__rQ[bo]||null;
}},getParameters:function(bq){return (bq?this.__rR:this.__rQ);
},setFormField:function(br,bs){this.__rS[br]=bs;
},removeFormField:function(bt){delete this.__rS[bt];
},getFormField:function(bu){return this.__rS[bu]||null;
},getFormFields:function(){return this.__rS;
},getSequenceNumber:function(){return this.__rT;
}},destruct:function(){this.setTransport(null);
this.__rP=this.__rQ=this.__rR=this.__rS=null;
}});
})();
(function(){var t="Integer",s="aborted",r="_onaborted",q="_on",p="_applyEnabled",o="Boolean",n="sending",m="interval",l="failed",k="qx.io.remote.RequestQueue",c="timeout",j="completed",g="__rW",b="queued",a="__rY",f="io.maxrequests",d="receiving",h="singleton";
qx.Class.define(k,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__rV=[];
this.__rW=[];
this.__rX=0;
this.__rY=new qx.event.Timer(500);
this.__rY.addListener(m,this._oninterval,this);
},properties:{enabled:{init:true,check:o,apply:p},maxTotalRequests:{check:t,nullable:true},maxConcurrentRequests:{check:t,init:qx.core.Environment.get(f)},defaultTimeout:{check:t,init:5000}},members:{__rV:null,__rW:null,__rX:null,__rY:null,getRequestQueue:function(){return this.__rV;
},getActiveQueue:function(){return this.__rW;
},_debug:function(){var u;
},_check:function(){this._debug();
if(this.__rW.length==0&&this.__rV.length==0){this.__rY.stop();
}if(!this.getEnabled()){return;
}if(this.__rV.length==0||(this.__rV[0].isAsynchronous()&&this.__rW.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__rX>=this.getMaxTotalRequests()){return;
}var v=this.__rV.shift();
var w=new qx.io.remote.Exchange(v);
this.__rX++;
this.__rW.push(w);
this._debug();
w.addListener(n,this._onsending,this);
w.addListener(d,this._onreceiving,this);
w.addListener(j,this._oncompleted,this);
w.addListener(s,this._oncompleted,this);
w.addListener(c,this._oncompleted,this);
w.addListener(l,this._oncompleted,this);
w._start=(new Date).valueOf();
w.send();
if(this.__rV.length>0){this._check();
}},_remove:function(x){qx.lang.Array.remove(this.__rW,x);
x.dispose();
this._check();
},__sa:0,_onsending:function(e){e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){var z=e.getTarget().getRequest();
var y=q+e.getType();
this._remove(e.getTarget());
try{if(z[y]){z[y](e);
}}catch(A){this.error("Request "+z+" handler "+y+" threw an error: ",A);
try{if(z[r]){var event=qx.event.Registration.createEvent(s,qx.event.type.Event);
z[r](event);
}}catch(B){}}},_oninterval:function(e){var I=this.__rW;

if(I.length==0){this.__rY.stop();
return;
}var D=(new Date).valueOf();
var G;
var E;
var H=this.getDefaultTimeout();
var F;
var C;

for(var i=I.length-1;i>=0;i--){G=I[i];
E=G.getRequest();

if(E.isAsynchronous()){F=E.getTimeout();
if(F==0){continue;
}
if(F==null){F=H;
}C=D-G._start;

if(C>F){this.warn("Timeout: transport "+G.toHashCode());
this.warn(C+"ms > "+F+"ms");
G.timeout();
}}}},_applyEnabled:function(J,K){if(J){this._check();
}this.__rY.setEnabled(J);
},add:function(L){L.setState(b);

if(L.isAsynchronous()){this.__rV.push(L);
}else{this.__rV.unshift(L);
}this._check();

if(this.getEnabled()){this.__rY.start();
}},abort:function(M){var N=M.getTransport();

if(N){N.abort();
}else if(qx.lang.Array.contains(this.__rV,M)){qx.lang.Array.remove(this.__rV,M);
}}},destruct:function(){this._disposeArray(g);
this._disposeObjects(a);
this.__rV=null;
}});
})();
(function(){var o="failed",n="sending",m="completed",k="receiving",j="aborted",h="timeout",g="qx.event.type.Event",f="Connection dropped",d="qx.io.remote.Response",c="=",bp="configured",bo="&",bn="Unknown status code. ",bm="qx.io.remote.transport.XmlHttp",bl="qx.io.remote.transport.Abstract",bk="Request-URL too large",bj="MSHTML-specific HTTP status code",bi="Not available",bh="Precondition failed",bg="Server error",v="Moved temporarily",w="qx.io.remote.Exchange",t="Possibly due to a cross-domain request?",u="Bad gateway",r="Gone",s="See other",p="Partial content",q="Server timeout",B="qx.io.remote.transport.Script",C="HTTP version not supported",L="Unauthorized",I="Possibly due to application URL using 'file:' protocol?",T="Multiple choices",O="Payment required",bc="Not implemented",Y="Proxy authentication required",E="Length required",bf="_applyState",be="changeState",bd="Not modified",D="qx.io.remote.Request",G="Connection closed by server",H="Moved permanently",K="_applyImplementation",M="",P="Method not allowed",V="Forbidden",bb="Use proxy",x="Ok",y="Conflict",F="Not found",S="Not acceptable",R="Request time-out",Q="Bad request",X="No content",W="file:",N="qx.io.remote.transport.Iframe",U="Request entity too large",a="Unknown status code",ba="Unsupported media type",z="Gateway time-out",A="created",J="Out of resources",b="undefined";
qx.Class.define(w,{extend:qx.core.Object,construct:function(bq){qx.core.Object.call(this);
this.setRequest(bq);
bq.setTransport(this);
},events:{"sending":g,"receiving":g,"completed":d,"aborted":g,"failed":d,"timeout":d},statics:{typesOrder:[bm,N,B],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(br,bs){qx.io.remote.Exchange.typesAvailable[bs]=br;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bu in qx.io.remote.Exchange.typesAvailable){var bt=qx.io.remote.Exchange.typesAvailable[bu];

if(bt.isSupported()){qx.io.remote.Exchange.typesSupported[bu]=bt;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bv,bw,bx){if(!qx.lang.Array.contains(bv.handles.responseTypes,bx)){return false;
}
for(var by in bw){if(!bv.handles[by]){return false;
}}return true;
},_nativeMap:{0:A,1:bp,2:n,3:k,4:m},wasSuccessful:function(bz,bA,bB){if(bB){switch(bz){case null:case 0:return true;
case -1:return bA<4;
default:return typeof bz===b;
}}else{switch(bz){case -1:{};
return bA<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bA!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bz>206&&bz<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bz+" ("+bA+")");
return false;
}}},statusCodeToString:function(bC){switch(bC){case -1:return bi;
case 0:var bD=window.location.href;
if(qx.lang.String.startsWith(bD.toLowerCase(),W)){return (bn+I);
}else{return (bn+t);
}break;
case 200:return x;
case 304:return bd;
case 206:return p;
case 204:return X;
case 300:return T;
case 301:return H;
case 302:return v;
case 303:return s;
case 305:return bb;
case 400:return Q;
case 401:return L;
case 402:return O;
case 403:return V;
case 404:return F;
case 405:return P;
case 406:return S;
case 407:return Y;
case 408:return R;
case 409:return y;
case 410:return r;
case 411:return E;
case 412:return bh;
case 413:return U;
case 414:return bk;
case 415:return ba;
case 500:return bg;
case 501:return bc;
case 502:return u;
case 503:return J;
case 504:return z;
case 505:return C;
case 12002:return q;
case 12029:return f;
case 12030:return f;
case 12031:return f;
case 12152:return G;
case 13030:return bj;
default:return a;
}}},properties:{request:{check:D,nullable:true},implementation:{check:bl,nullable:true,apply:K},state:{check:[bp,n,k,m,j,h,o],init:bp,event:be,apply:bf}},members:{send:function(){var bH=this.getRequest();

if(!bH){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bF=qx.io.remote.Exchange.typesOrder;
var bE=qx.io.remote.Exchange.typesSupported;
var bJ=bH.getResponseType();
var bK={};

if(bH.getAsynchronous()){bK.asynchronous=true;
}else{bK.synchronous=true;
}
if(bH.getCrossDomain()){bK.crossDomain=true;
}
if(bH.getFileUpload()){bK.fileUpload=true;
}for(var bI in bH.getFormFields()){bK.programaticFormFields=true;
break;
}var bL,bG;

for(var i=0,l=bF.length;i<l;i++){bL=bE[bF[i]];

if(bL){if(!qx.io.remote.Exchange.canHandle(bL,bK,bJ)){continue;
}
try{bG=new bL;
this.setImplementation(bG);
bG.setUseBasicHttpAuth(bH.getUseBasicHttpAuth());
bG.send();
return true;
}catch(bM){this.error("Request handler throws error");
this.error(bM);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bH);
},abort:function(){var bN=this.getImplementation();

if(bN){bN.abort();
}else{this.setState(j);
}},timeout:function(){var bQ=this.getImplementation();

if(bQ){var bP=M;

for(var bO in bQ.getParameters()){bP+=bo+bO+c+bQ.getParameters()[bO];
}this.warn("Timeout: implementation "+bQ.toHashCode()+", "+bQ.getUrl()+" ["+bQ.getMethod()+"], "+bP);
bQ.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(h);
}this.__sb();
},__sb:function(){var bR=this.getRequest();

if(bR){bR.setTimeout(0);
}},_onsending:function(e){this.setState(n);
},_onreceiving:function(e){this.setState(k);
},_oncompleted:function(e){this.setState(m);
},_onabort:function(e){this.setState(j);
},_onfailed:function(e){this.setState(o);
},_ontimeout:function(e){this.setState(h);
},_applyImplementation:function(bS,bT){if(bT){bT.removeListener(n,this._onsending,this);
bT.removeListener(k,this._onreceiving,this);
bT.removeListener(m,this._oncompleted,this);
bT.removeListener(j,this._onabort,this);
bT.removeListener(h,this._ontimeout,this);
bT.removeListener(o,this._onfailed,this);
}
if(bS){var bV=this.getRequest();
bS.setUrl(bV.getUrl());
bS.setMethod(bV.getMethod());
bS.setAsynchronous(bV.getAsynchronous());
bS.setUsername(bV.getUsername());
bS.setPassword(bV.getPassword());
bS.setParameters(bV.getParameters(false));
bS.setFormFields(bV.getFormFields());
bS.setRequestHeaders(bV.getRequestHeaders());
if(bS instanceof qx.io.remote.transport.XmlHttp){bS.setParseJson(bV.getParseJson());
}var bY=bV.getData();

if(bY===null){var ca=bV.getParameters(true);
var bX=[];

for(var bU in ca){var bW=ca[bU];

if(bW instanceof Array){for(var i=0;i<bW.length;i++){bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW[i]));
}}else{bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW));
}}
if(bX.length>0){bS.setData(bX.join(bo));
}}else{bS.setData(bY);
}bS.setResponseType(bV.getResponseType());
bS.addListener(n,this._onsending,this);
bS.addListener(k,this._onreceiving,this);
bS.addListener(m,this._oncompleted,this);
bS.addListener(j,this._onabort,this);
bS.addListener(h,this._ontimeout,this);
bS.addListener(o,this._onfailed,this);
}},_applyState:function(cb,cc){switch(cb){case n:this.fireEvent(n);
break;
case k:this.fireEvent(k);
break;
case m:case j:case h:case o:var ce=this.getImplementation();

if(!ce){break;
}this.__sb();

if(this.hasListener(cb)){var cf=qx.event.Registration.createEvent(cb,qx.io.remote.Response);

if(cb==m){var cd=ce.getResponseContent();
cf.setContent(cd);
if(cd===null){cb=o;
}}else if(cb==o){cf.setContent(ce.getResponseContent());
}cf.setStatusCode(ce.getStatusCode());
cf.setResponseHeaders(ce.getResponseHeaders());
this.dispatchEvent(cf);
}this.setImplementation(null);
ce.dispose();
break;
}}},environment:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var cg=this.getImplementation();

if(cg){this.setImplementation(null);
cg.dispose();
}this.setRequest(null);
}});
})();
(function(){var q="qx.event.type.Event",p="String",o="failed",n="timeout",m="created",l="aborted",k="sending",j="configured",i="receiving",h="completed",c="Object",g="Boolean",f="abstract",b="_applyState",a="GET",e="changeState",d="qx.io.remote.transport.Abstract";
qx.Class.define(d,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":q,"configured":q,"sending":q,"receiving":q,"completed":q,"aborted":q,"failed":q,"timeout":q},properties:{url:{check:p,nullable:true},method:{check:p,nullable:true,init:a},asynchronous:{check:g,nullable:true,init:true},data:{check:p,nullable:true},username:{check:p,nullable:true},password:{check:p,nullable:true},state:{check:[m,j,k,i,h,l,n,o],init:m,event:e,apply:b},requestHeaders:{check:c,nullable:true},parameters:{check:c,nullable:true},formFields:{check:c,nullable:true},responseType:{check:p,nullable:true},useBasicHttpAuth:{check:g,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){this.setState(l);
},timeout:function(){this.setState(n);
},failed:function(){this.setState(o);
},setRequestHeader:function(r,s){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(t){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(u,v){switch(u){case m:this.fireEvent(m);
break;
case j:this.fireEvent(j);
break;
case k:this.fireEvent(k);
break;
case i:this.fireEvent(i);
break;
case h:this.fireEvent(h);
break;
case l:this.fireEvent(l);
break;
case o:this.fireEvent(o);
break;
case n:this.fireEvent(n);
break;
}return true;
}},destruct:function(){this.setRequestHeaders(null);
this.setParameters(null);
this.setFormFields(null);
}});
})();
(function(){var l="=",k="",j="engine.name",h="&",g="application/xml",f="application/json",d="text/html",c="textarea",b="_data_",a="load",G="text/plain",F="text/javascript",E="readystatechange",D="completed",C="?",B="qx.io.remote.transport.Iframe",A="none",z="display",y="gecko",x="frame_",s="aborted",t="pre",q="javascript:void(0)",r="sending",o="form",p="failed",m="mshtml",n="form_",u="opera",v="timeout",w="qx/static/blank.gif";
qx.Class.define(B,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var H=(new Date).valueOf();
var I=x+H;
var J=n+H;
var K;

if((qx.core.Environment.get(j)==m)){K=q;
}this.__sc=qx.bom.Iframe.create({id:I,name:I,src:K});
qx.bom.element.Style.set(this.__sc,z,A);
this.__sd=qx.bom.Element.create(o,{id:J,name:J,target:I});
qx.bom.element.Style.set(this.__sd,z,A);
qx.dom.Element.insertEnd(this.__sd,qx.dom.Node.getBodyElement(document));
this.__se=qx.bom.Element.create(c,{id:b,name:b});
qx.dom.Element.insertEnd(this.__se,this.__sd);
qx.dom.Element.insertEnd(this.__sc,qx.dom.Node.getBodyElement(document));
qx.event.Registration.addListener(this.__sc,a,this._onload,this);
this.__sf=qx.lang.Function.listener(this._onreadystatechange,this);
qx.bom.Event.addNativeListener(this.__sc,E,this.__sf);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[G,F,f,g,d]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__se:null,__sg:0,__sd:null,__sc:null,__sf:null,send:function(){var M=this.getMethod();
var O=this.getUrl();
var S=this.getParameters(false);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){O+=(O.indexOf(C)>=0?h:C)+R.join(h);
}if(this.getData()===null){var S=this.getParameters(true);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){this.setData(R.join(h));
}}var L=this.getFormFields();

for(var N in L){var Q=document.createElement(c);
Q.name=N;
Q.appendChild(document.createTextNode(L[N]));
this.__sd.appendChild(Q);
}this.__sd.action=O;
this.__sd.method=M;
this.__se.appendChild(document.createTextNode(this.getData()));
this.__sd.submit();
this.setState(r);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(qx.core.Environment.get(j)==u&&this.getIframeHtmlContent()==k){return;
}
if(this.__sd.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__sc.readyState]);
}),_switchReadyState:function(T){switch(this.getState()){case D:case s:case p:case v:this.warn("Ignore Ready State Change");
return;
}while(this.__sg<T){this.setState(qx.io.remote.Exchange._nativeMap[++this.__sg]);
}},setRequestHeader:function(U,V){},getResponseHeader:function(W){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return k;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__sc);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__sc);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__sc);
},getIframeTextContent:function(){var X=this.getIframeBody();

if(!X){return null;
}
if(!X.firstChild){return k;
}if(X.firstChild.tagName&&X.firstChild.tagName.toLowerCase()==t){return X.firstChild.innerHTML;
}else{return X.innerHTML;
}},getIframeHtmlContent:function(){var Y=this.getIframeBody();
return Y?Y.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==D){return null;
}var ba=this.getIframeTextContent();

switch(this.getResponseType()){case G:{};
return ba;
break;
case d:ba=this.getIframeHtmlContent();
{};
return ba;
break;
case f:ba=this.getIframeHtmlContent();
{};

try{return ba&&ba.length>0?qx.util.Json.parse(ba,false):null;
}catch(bb){return this.error("Could not execute json: ("+ba+")",bb);
}case F:ba=this.getIframeHtmlContent();
{};

try{return ba&&ba.length>0?window.eval(ba):null;
}catch(bc){return this.error("Could not execute javascript: ("+ba+")",bc);
}case g:ba=this.getIframeDocument();
{};
return ba;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,B);
},destruct:function(){if(this.__sc){qx.event.Registration.removeListener(this.__sc,a,this._onload,this);
qx.bom.Event.removeNativeListener(this.__sc,E,this.__sf);
if((qx.core.Environment.get(j)==y)){this.__sc.src=qx.util.ResourceManager.getInstance().toUri(w);
}qx.dom.Element.remove(this.__sc);
}
if(this.__sd){qx.dom.Element.remove(this.__sd);
}this.__sc=this.__sd=this.__se=null;
}});
})();
(function(){var d="qx.event.handler.Iframe",c="load",b="iframe",a="navigate";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1,navigate:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(e){var f=qx.bom.Iframe.queryCurrentUrl(e);

if(f!==e.$$url){qx.event.Registration.fireEvent(e,a,qx.event.type.Data,[f]);
e.$$url=f;
}qx.event.Registration.fireEvent(e,c);
})},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===b;
},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){}},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var i="engine.name",h="load",g="",f="qx.bom.Iframe",e="osx",d="os.name",c="webkit",b="iframe",a="body";
qx.Class.define(f,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(j,k){var j=j?qx.lang.Object.clone(j):{};
var l=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var m in l){if(j[m]==null){j[m]=l[m];
}}return qx.bom.Element.create(b,j,k);
},getWindow:function(n){try{return n.contentWindow;
}catch(o){return null;
}},getDocument:qx.core.Environment.select(i,{"mshtml":function(p){try{var q=this.getWindow(p);
return q?q.document:null;
}catch(r){return null;
}},"default":function(s){try{return s.contentDocument;
}catch(t){return null;
}}}),getBody:function(u){try{var v=this.getDocument(u);
return v?v.getElementsByTagName(a)[0]:null;
}catch(w){return null;
}},setSource:function(x,y){try{if(this.getWindow(x)&&qx.dom.Hierarchy.isRendered(x)){try{if((qx.core.Environment.get(i)==c)&&qx.core.Environment.get(d)==e){var z=this.getWindow(x);

if(z){z.stop();
}}this.getWindow(x).location.replace(y);
}catch(A){x.src=y;
}}else{x.src=y;
}this.__sh(x);
}catch(B){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(C){var D=this.getDocument(C);

try{if(D&&D.location){return D.location.href;
}}catch(E){}return g;
},__sh:function(F){var G=function(){qx.bom.Event.removeNativeListener(F,h,G);
F.$$url=qx.bom.Iframe.queryCurrentUrl(F);
};
qx.bom.Event.addNativeListener(F,h,G);
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
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(u){qx.core.Object.call(this);
this.__mX=u;
},statics:{getIntegerInstance:function(){var v=qx.util.format.NumberFormat;

if(v._integerInstance==null){v._integerInstance=new v();
v._integerInstance.setMaximumFractionDigits(0);
}return v._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__mX:null,format:function(w){switch(w){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var A=(w<0);

if(A){w=-w;
}
if(this.getMaximumFractionDigits()!=null){var H=Math.pow(10,this.getMaximumFractionDigits());
w=Math.round(w*H)/H;
}var G=String(Math.floor(w)).length;
var x=t+w;
var D=x.substring(0,G);

while(D.length<this.getMinimumIntegerDigits()){D=q+D;
}
if(this.getMaximumIntegerDigits()!=null&&D.length>this.getMaximumIntegerDigits()){D=D.substring(D.length-this.getMaximumIntegerDigits());
}var C=x.substring(G+1);

while(C.length<this.getMinimumFractionDigits()){C+=q;
}
if(this.getMaximumFractionDigits()!=null&&C.length>this.getMaximumFractionDigits()){C=C.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var z=D;
D=t;
var F;

for(F=z.length;F>3;F-=3){D=t+qx.locale.Number.getGroupSeparator(this.__mX)+z.substring(F-3,F)+D;
}D=z.substring(0,F)+D;
}var B=this.getPrefix()?this.getPrefix():t;
var y=this.getPostfix()?this.getPostfix():t;
var E=B+(A?r:t)+D;

if(C.length>0){E+=t+qx.locale.Number.getDecimalSeparator(this.__mX)+C;
}E+=y;
return E;
},parse:function(I){var N=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__mX)+t);
var L=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__mX)+t);
var J=new RegExp(e+qx.lang.String.escapeRegexpChars(this.getPrefix())+i+j+N+g+n+L+c+qx.lang.String.escapeRegexpChars(this.getPostfix())+k);
var M=J.exec(I);

if(M==null){throw new Error("Number string '"+I+"' does not match the number format");
}var O=(M[1]==r);
var Q=M[2];
var P=M[3];
Q=Q.replace(new RegExp(N,m),t);
var K=(O?r:t)+Q;

if(P!=null&&P.length!=0){P=P.replace(new RegExp(L),t);
K+=h+P;
}return parseFloat(K);
}}});
})();
(function(){var n=",",m="",k='"',j="string",h="null",g=':',f="engine.name",e="qx.jsonDebugging",d='-',c='\\u00',Q="__rl",P="new Date(Date.UTC(",O="__rk",N="__rv",M="__rm",L='\\\\',K='\\f',J='\\"',I="))",H='T',u="}",v='(',s='.',t="{",q='\\r',r=":",o='\\t',p="__rn",w="]",x="opera",A="[",z="__ru",C="mshtml",B="qx.jsonEncodeUndefined",E='\\b',D="qx.util.Json",y='Z"',G=')',F='\\n';
qx.Class.define(D,{statics:{__ri:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",CONVERT_DATES:null,__rj:{"function":O,"boolean":Q,"number":M,"string":p,"object":z,"undefined":N},NUMBER_FORMAT:new qx.util.format.NumberFormat(),__rk:function(R,S){return String(R);
},__rl:function(T,U){return String(T);
},__rm:function(V,W){return isFinite(V)?String(V):h;
},__rn:function(X,Y){var ba;

if(/["\\\x00-\x1f]/.test(X)){ba=X.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__rp);
}else{ba=X;
}return k+ba+k;
},__ro:{'\b':E,'\t':o,'\n':F,'\f':K,'\r':q,'"':J,'\\':L},__rp:function(a,b){var bb=qx.util.Json.__ro[b];

if(bb){return bb;
}bb=b.charCodeAt();
return c+Math.floor(bb/16).toString(16)+(bb%16).toString(16);
},__rq:function(bc,bd){var bf=[],bi=true,bh,be;
var bg=qx.util.Json.__rx;
bf.push(A);

if(bg){qx.util.Json.__rr+=qx.util.Json.BEAUTIFYING_INDENT;
bf.push(qx.util.Json.__rr);
}
for(var i=0,l=bc.length;i<l;i++){be=bc[i];
bh=this.__rj[typeof be];

if(bh){be=this[bh](be,i+m);

if(typeof be==j){if(!bi){bf.push(n);

if(bg){bf.push(qx.util.Json.__rr);
}}bf.push(be);
bi=false;
}}}
if(bg){qx.util.Json.__rr=qx.util.Json.__rr.substring(0,qx.util.Json.__rr.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bf.push(qx.util.Json.__rr);
}bf.push(w);
return bf.join(m);
},__rs:function(bj,bk){if(!qx.util.Json.CONVERT_DATES){if(bj.toJSON&&qx.core.Environment.get(f)!=x&&qx.core.Environment.get(f)!=C){return k+bj.toJSON()+k;
}var bl=this.NUMBER_FORMAT;
bl.setMinimumIntegerDigits(2);
var bn=bj.getUTCFullYear()+d+bl.format(bj.getUTCMonth()+1)+d+bl.format(bj.getUTCDate())+H+bl.format(bj.getUTCHours())+g+bl.format(bj.getUTCMinutes())+g+bl.format(bj.getUTCSeconds())+s;
bl.setMinimumIntegerDigits(3);
return k+bn+bl.format(bj.getUTCMilliseconds())+y;
}else{var bm=bj.getUTCFullYear()+n+bj.getUTCMonth()+n+bj.getUTCDate()+n+bj.getUTCHours()+n+bj.getUTCMinutes()+n+bj.getUTCSeconds()+n+bj.getUTCMilliseconds();
return P+bm+I;
}},__rt:function(bo,bp){var bs=[],bu=true,br,bq;
var bt=qx.util.Json.__rx;
bs.push(t);

if(bt){qx.util.Json.__rr+=qx.util.Json.BEAUTIFYING_INDENT;
bs.push(qx.util.Json.__rr);
}
for(var bp in bo){bq=bo[bp];
br=this.__rj[typeof bq];

if(br){bq=this[br](bq,bp);

if(typeof bq==j){if(!bu){bs.push(n);

if(bt){bs.push(qx.util.Json.__rr);
}}bs.push(this.__rn(bp),r,bq);
bu=false;
}}}
if(bt){qx.util.Json.__rr=qx.util.Json.__rr.substring(0,qx.util.Json.__rr.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bs.push(qx.util.Json.__rr);
}bs.push(u);
return bs.join(m);
},__ru:function(bv,bw){if(bv){if(qx.lang.Type.isFunction(bv.toJSON)&&bv.toJSON!==this.__ri){return this.__rw(bv.toJSON(bw),bw);
}else if(qx.lang.Type.isDate(bv)){return this.__rs(bv,bw);
}else if(qx.lang.Type.isArray(bv)){return this.__rq(bv,bw);
}else if(qx.lang.Type.isObject(bv)){return this.__rt(bv,bw);
}return m;
}return h;
},__rv:function(bx,by){if(qx.core.Environment.get(B)){return h;
}},__rw:function(bz,bA){return this[this.__rj[typeof bz]](bz,bA);
},stringify:function(bB,bC){this.__rx=bC;
this.__rr=this.BEAUTIFYING_LINE_END;
var bD=this.__rw(bB,m);

if(typeof bD!=j){bD=null;
}if(qx.core.Environment.get(e)){qx.log.Logger.debug(this,"JSON request: "+bD);
}return bD;
},parse:function(bE,bF){if(bF===undefined){bF=true;
}
if(qx.core.Environment.get(e)){qx.log.Logger.debug(this,"JSON response: "+bE);
}
if(bF){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bE.replace(/"(\\.|[^"\\])*"/g,m))){throw new Error("Could not parse JSON string!");
}}
try{var bG=(bE&&bE.length>0)?eval(v+bE+G):null;
return bG;
}catch(bH){throw new Error("Could not evaluate JSON string: "+bH.message);
}}},environment:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bI){bI.__ri=Date.prototype.toJSON;
}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var q="",p="string",o="/",n="mshtml",m="engine.name",l="io.ssl",k="//",j="?",i="data",h="isClippedImage has been superseded by getCombinedFormat",c="type",g="data:image/",f=";",b="encoding",a="qx.util.ResourceManager",e="singleton",d=",";
qx.Class.define(a,{extend:qx.core.Object,type:e,construct:function(){qx.core.Object.call(this);
},statics:{__is:qx.$$resources||{},__it:{}},members:{has:function(r){return !!this.self(arguments).__is[r];
},getData:function(s){return this.self(arguments).__is[s]||null;
},getImageWidth:function(t){var u=this.self(arguments).__is[t];
return u?u[0]:null;
},getImageHeight:function(v){var w=this.self(arguments).__is[v];
return w?w[1]:null;
},getImageFormat:function(x){var y=this.self(arguments).__is[x];
return y?y[2]:null;
},isClippedImage:function(z){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
var A=this.self(arguments).__is[z];
return A&&A.length>4&&typeof (A[4])==p&&this.constructor.__is[A[4]];
},getCombinedFormat:function(B){var E=q;
var D=this.self(arguments).__is[B];
var C=D&&D.length>4&&typeof (D[4])==p&&this.constructor.__is[D[4]];

if(C){var G=D[4];
var F=this.constructor.__is[G];
E=F[2];
}return E;
},toUri:function(H){if(H==null){return H;
}var I=this.self(arguments).__is[H];

if(!I){return H;
}
if(typeof I===p){var K=I;
}else{var K=I[3];
if(!K){return H;
}}var J=q;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){J=this.self(arguments).__it[K];
}return J+qx.$$libraries[K].resourceUri+o+H;
},toDataUri:function(L){var N=this.constructor.__is[L];
var O=this.constructor.__is[N[4]];
var P;

if(O){var M=O[4][L];
P=g+M[c]+f+M[b]+d+M[i];
}else{this.debug("ResourceManager.toDataUri: falling back for",L);
P=this.toUri(L);
}return P;
}},defer:function(Q){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var U in qx.$$libraries){var S;

if(qx.$$libraries[U].resourceUri){S=qx.$$libraries[U].resourceUri;
}else{Q.__it[U]=q;
continue;
}if(S.match(/^\/\//)!=null){Q.__it[U]=window.location.protocol;
}else if(S.match(/^\//)!=null){Q.__it[U]=window.location.protocol+k+window.location.host;
}else if(S.match(/^\.\//)!=null){var R=document.URL;
Q.__it[U]=R.substring(0,R.lastIndexOf(o)+1);
}else if(S.match(/^http/)!=null){Q.__it[U]=q;
}else{var V=window.location.href.indexOf(j);
var T;

if(V==-1){T=window.location.href;
}else{T=window.location.href.substring(0,V);
}Q.__it[U]=T.substring(0,T.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var s=++qx.io.remote.transport.Script.__si;

if(s>=2000000000){qx.io.remote.transport.Script.__si=s=1;
}this.__sj=null;
this.__si=s;
},statics:{__si:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(t,content){var u=qx.io.remote.transport.Script._instanceRegistry[t];

if(u==null){}else{u._responseContent=content;
u._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__sk:0,__sj:null,__si:null,send:function(){var x=this.getUrl();
x+=(x.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__si;
var A=this.getParameters();
var z=[];

for(var w in A){if(w.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var y=A[w];

if(y instanceof Array){for(var i=0;i<y.length;i++){z.push(encodeURIComponent(w)+q+encodeURIComponent(y[i]));
}}else{z.push(encodeURIComponent(w)+q+encodeURIComponent(y));
}}
if(z.length>0){x+=r+z.join(r);
}var v=this.getData();

if(v!=null){x+=r+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+q+encodeURIComponent(v);
}qx.io.remote.transport.Script._instanceRegistry[this.__si]=this;
this.__sj=document.createElement(c);
this.__sj.charset=e;
this.__sj.src=x;
document.body.appendChild(this.__sj);
},_switchReadyState:function(B){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__sk<B){this.setState(qx.io.remote.Exchange._nativeMap[++this.__sk]);
}},setRequestHeader:function(C,D){},getResponseHeader:function(E){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==n){return null;
}
switch(this.getResponseType()){case m:case o:case l:{};
var F=this._responseContent;
return (F===0?0:(F||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,k);
},destruct:function(){if(this.__sj){delete qx.io.remote.transport.Script._instanceRegistry[this.__si];
document.body.removeChild(this.__sj);
}this.__sj=this._responseContent=null;
}});
})();
(function(){var m="failed",k="completed",j="=",h="aborted",g="sending",f="",d="&",c="engine.name",b="configured",a="timeout",L="application/xml",K="qx.io.remote.transport.XmlHttp",J="application/json",I="text/html",H="receiving",G="text/plain",F="text/javascript",E="?",D="created",C="Boolean",u='Referer',v="engine.version",r='Basic ',t="\n</pre>",p="string",q='Authorization',n="<pre>Could not execute json: \n",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",w="mshtml",x=':',z="parseerror",y="file:",B="webkit",A="object";
qx.Class.define(K,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[G,F,J,L,I]},createRequestObject:qx.core.Environment.select(c,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:C,init:true}},members:{__sl:false,__sm:0,__sn:null,getRequest:function(){if(this.__sn===null){this.__sn=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__sn.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__sn;
},send:function(){this.__sm=0;
var Q=this.getRequest();
var M=this.getMethod();
var T=this.getAsynchronous();
var S=this.getUrl();
var O=(window.location.protocol===y&&!(/^http(s){0,1}\:/.test(S)));
this.__sl=O;
var W=this.getParameters(false);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+j+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+j+encodeURIComponent(R));
}}
if(U.length>0){S+=(S.indexOf(E)>=0?d:E)+U.join(d);
}if(this.getData()===null){var W=this.getParameters(true);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+j+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+j+encodeURIComponent(R));
}}
if(U.length>0){this.setData(U.join(d));
}}var V=function(X){var bd=o;
var bh=f;
var bb,ba,Y;
var be,bf,bg,bc;
var i=0;

do{bb=X.charCodeAt(i++);
ba=X.charCodeAt(i++);
Y=X.charCodeAt(i++);
be=bb>>2;
bf=((bb&3)<<4)|(ba>>4);
bg=((ba&15)<<2)|(Y>>6);
bc=Y&63;

if(isNaN(ba)){bg=bc=64;
}else if(isNaN(Y)){bc=64;
}bh+=bd.charAt(be)+bd.charAt(bf)+bd.charAt(bg)+bd.charAt(bc);
}while(i<X.length);
return bh;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){Q.open(M,S,T);
Q.setRequestHeader(q,r+V(this.getUsername()+x+this.getPassword()));
}else{Q.open(M,S,T,this.getUsername(),this.getPassword());
}}else{Q.open(M,S,T);
}}catch(bi){this.error("Failed with exception: "+bi);
this.failed();
return;
}if(!(qx.core.Environment.get(c)==B)){Q.setRequestHeader(u,window.location.href);
}var P=this.getRequestHeaders();

for(var N in P){Q.setRequestHeader(N,P[N]);
}try{if(O&&T&&qx.core.Environment.get(c)==w&&qx.core.Environment.get(v)==9){qx.event.Timer.once(function(){Q.send(this.getData());
},this,0);
}else{Q.send(this.getData());
}}catch(bj){if(O){this.failedLocally();
}else{this.error("Failed to send data: "+bj,"send");
this.failed();
}return;
}if(!T){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===m){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case k:case h:case m:case a:{};
return;
}var bk=this.getReadyState();

if(bk==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bk,this.__sl)){if(this.getState()===b){this.setState(g);
}this.failed();
return;
}}if(bk==3&&this.__sm==1){this.setState(qx.io.remote.Exchange._nativeMap[++this.__sm]);
}while(this.__sm<bk){this.setState(qx.io.remote.Exchange._nativeMap[++this.__sm]);
}}),getReadyState:function(){var bl=null;

try{bl=this.getRequest().readyState;
}catch(bm){}return bl;
},setRequestHeader:function(bn,bo){this.getRequestHeaders()[bn]=bo;
},getResponseHeader:function(bp){var bq=null;

try{bq=this.getRequest().getResponseHeader(bp)||null;
}catch(br){}return bq;
},getStringResponseHeaders:function(){var bt=null;

try{var bs=this.getRequest().getAllResponseHeaders();

if(bs){bt=bs;
}}catch(bu){}return bt;
},getResponseHeaders:function(){var bx=this.getStringResponseHeaders();
var by={};

if(bx){var bv=bx.split(/[\r\n]+/g);

for(var i=0,l=bv.length;i<l;i++){var bw=bv[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bw){by[bw[1]]=bw[2];
}}}return by;
},getStatusCode:function(){var bz=-1;

try{bz=this.getRequest().status;
if(bz===1223){bz=204;
}}catch(bA){}return bz;
},getStatusText:function(){var bB=f;

try{bB=this.getRequest().statusText;
}catch(bC){}return bB;
},getResponseText:function(){var bD=null;

try{bD=this.getRequest().responseText;
}catch(bE){bD=null;
}return bD;
},getResponseXml:function(){var bH=null;
var bF=this.getStatusCode();
var bG=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bF,bG,this.__sl)){try{bH=this.getRequest().responseXML;
}catch(bI){}}if(typeof bH==A&&bH!=null){if(!bH.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,f);
bH.loadXML(s);
}if(!bH.documentElement){throw new Error("Missing Document Element!");
}
if(bH.documentElement.tagName==z){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bH;
},getFetchedLength:function(){var bJ=this.getResponseText();
return typeof bJ==p?bJ.length:0;
},getResponseContent:function(){var bK=this.getState();

if(bK!==k&&bK!=m){return null;
}var bM=this.getResponseText();

if(bK==m){return bM;
}
switch(this.getResponseType()){case G:case I:{};
return bM;
case J:{};

try{if(bM&&bM.length>0){var bL;

if(this.getParseJson()){bL=qx.util.Json.parse(bM,false);
bL=(bL===0?0:(bL||null));
}else{bL=bM;
}return bL;
}else{return null;
}}catch(bN){this.error("Could not execute json: ["+bM+"]",bN);
return n+bM+t;
}case F:{};

try{if(bM&&bM.length>0){var bL=window.eval(bM);
return (bL===0?0:(bL||null));
}else{return null;
}}catch(bO){this.error("Could not execute javascript: ["+bM+"]",bO);
return null;
}case L:bM=this.getResponseXml();
{};
return (bM===0?0:(bM||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bP,bQ){switch(bP){case D:this.fireEvent(D);
break;
case b:this.fireEvent(b);
break;
case g:this.fireEvent(g);
break;
case H:this.fireEvent(H);
break;
case k:this.fireEvent(k);
break;
case m:this.fireEvent(m);
break;
case h:this.getRequest().abort();
this.fireEvent(h);
break;
case a:this.getRequest().abort();
this.fireEvent(a);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,K);
},destruct:function(){var bR=this.getRequest();

if(bR){bR.onreadystatechange=qx.lang.Function.empty;
switch(bR.readyState){case 1:case 2:case 3:bR.abort();
}}this.__sn=null;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e.setType(this.getType());
e.setState(this.getState());
e.setStatusCode(this.getStatusCode());
e.setContent(this.getContent());
e.setResponseHeaders(this.getResponseHeaders());
return e;
},getResponseHeader:function(f){var g=this.getResponseHeaders();

if(g){return g[f]||null;
}return null;
}}});
})();
(function(){var q="success",p="engine.name",o="fail",n="complete",m="error",l="load",k="loaded",j="mshtml",i="head",h="readystatechange",c="webkit",g="script",f="opera",b="qx.io.ScriptLoader",a="text/javascript",d="abort";
qx.Bootstrap.define(b,{construct:function(){this.__wb=qx.Bootstrap.bind(this.__wi,this);
this.__wc=document.createElement(g);
this.__wd=15;
},members:{__we:null,__wf:null,__wg:null,__wh:null,__wd:0,__wb:null,__wc:null,load:function(r,s,t){if(this.__we){throw new Error("Another request is still running!");
}this.__we=true;
this.__wf=false;
var u=document.getElementsByTagName(i)[0];
var v=this.__wc;
this.__wg=s||null;
this.__wh=t||window;
v.type=a;
v.onerror=v.onload=v.onreadystatechange=this.__wb;
var self=this;

if(qx.core.Environment.get(p)===f&&this.getTimeout()>0){setTimeout(function(){self.dispose(o);
},this.getTimeout()*1000);
}v.src=r;
setTimeout(function(){u.appendChild(v);
},0);
},abort:function(){if(this.__we){this.dispose(d);
}},dispose:function(status){if(this.__wf){return;
}this.__wf=true;
var x=this.__wc;
x.onerror=x.onload=x.onreadystatechange=null;
var w=x.parentNode;

if(w){w.removeChild(x);
}delete this.__we;
if(this.__wg){if(qx.core.Environment.get(p)==j||qx.core.Environment.get(p)==c){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__wg.call(self.__wh,status);
delete self.__wg;
}),0);
}else{this.__wg.call(this.__wh,status);
delete this.__wg;
}}},setTimeout:function(y){this.__wd=y;
},getTimeout:function(){return this.__wd;
},__wi:qx.event.GlobalError.observeMethod(qx.core.Environment.select(p,{"mshtml":function(e){var z=this.__wc.readyState;

if(z==k){this.dispose(q);
}else if(z==n){this.dispose(q);
}else{return;
}},"opera":function(e){if(qx.Bootstrap.isString(e)||e.type===m){return this.dispose(o);
}else if(e.type===l){return this.dispose(q);
}else{return;
}},"default":function(e){if(qx.Bootstrap.isString(e)||e.type===m){this.dispose(o);
}else if(e.type===l){this.dispose(q);
}else if(e.type===h&&(e.target.readyState===n||e.target.readyState===k)){this.dispose(q);
}else{return;
}}}))}});
})();
(function(){var k="os.name",j="android",h="phonegap",g="qx.event.type.Data",f="qx.mobile.nativescroll",e="backKeyDown",d="add",c="menuKeyDown",b="qx.ui.mobile.page.manager.Simple",a="remove";
qx.Class.define(b,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);
this.__Eu={};
this._setRoot(l||qx.core.Init.getApplication().getRoot());
this.__Ez();
},events:{add:g,remove:g},members:{__Eu:null,__Ev:null,__Ew:null,__Ex:null,__Ey:null,__Ez:function(){if(qx.core.Environment.get(h)&&qx.core.Environment.get(k)==j){this.__Ex=qx.lang.Function.bind(this._onBackButton,this);
this.__Ey=qx.lang.Function.bind(this._onMenuButton,this);
BackButton.override();
qx.bom.Event.addNativeListener(document,e,this.__Ex);
qx.bom.Event.addNativeListener(document,c,this.__Ey);
}},__EA:function(){if(qx.core.Environment.get("phonegap")&&qx.core.Environment.get("os.name")=="android"){qx.bom.Event.removeNativeListener(document,"backKeyDown",this.__Ex);
qx.bom.Event.removeNativeListener(document,"menuKeyDown",this.__Ey);
}},_onBackButton:function(){if(qx.core.Environment.get(h)&&qx.core.Environment.get(k)==j){var m=true;

if(this.__Ev){m=this.__Ev.back();
}
if(m){BackButton.exitApp();
}}},_onMenuButton:function(){if(qx.core.Environment.get(h)&&qx.core.Environment.get(k)==j){if(this.__Ev){this.__Ev.menu();
}}},add:function(n){this.__Eu[n.getId()]=n;
this.fireDataEvent(d,n);
},remove:function(o){var p=this.getPage(o);

if(this.__Ev==p){throw new Error("Current page with the Id "+p.getId()+" can not be removed");
}delete this.__Eu[p.getId()];
this.fireDataEvent(a,p);
},show:function(q){var r=this.__Ev;

if(r==q){return;
}
if(qx.core.Environment.get(f)){scrollTo(0,0);
}q.initialize();
q.start();
this.__Ew.add(q);

if(r){r.stop();
this.__EB();
this._removeCurrentPage();
}this._setCurrentPage(q);
},_removeCurrentPage:function(){this.__Ew.remove(this.__Ev);
},_getRoot:function(){return this.__Ew;
},_setRoot:function(s){this.__Ew=s;
},getCurrentPage:function(){return this.__Ev;
},_setCurrentPage:function(t){this.__Ev=t;
},getPage:function(u){return this.__Eu[u];
},__EB:function(){var v=document.getElementsByTagName("input");

for(var i=0,length=v.length;i<length;i++){v[i].blur();
}}},destruct:function(){this.__EA();
this.__EC=this.__Eu=this.__Ev=this.__Ew=null;
}});
})();
(function(){var a="qx.ui.mobile.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var a="qx.ui.mobile.container.Composite";
qx.Class.define(a,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.core.MChildrenHandling,qx.ui.mobile.core.MLayoutHandling],construct:function(b){qx.ui.mobile.core.Widget.call(this);

if(b){this.setLayout(b);
}},defer:function(c,d){qx.ui.mobile.core.MChildrenHandling.remap(d);
qx.ui.mobile.core.MLayoutHandling.remap(d);
}});
})();
(function(){var e="qx.event.type.Data",d="animationEnd",c="qx.ui.mobile.page.manager.Animation",b="String",a="slide";
qx.Class.define(c,{extend:qx.ui.mobile.page.manager.Simple,events:{animationStart:e,animationEnd:e},properties:{defaultAnimation:{check:b,init:a}},statics:{ANIMATIONS:{"slide":true,"pop":true,"fade":true,"dissolve":true,"slideup":true,"flip":true,"swap":true,"cube":true}},members:{__ED:null,__EE:null,__EF:null,__EG:null,__EH:null,isInAnimation:function(){return this.__ED;
},show:function(f,g){if(this.__ED){return;
}g=g||{};
this.__EE=g.animation||this.getDefaultAnimation();
g.reverse=g.reverse==null?false:g.reverse;
this.__EF=g.fromHistory||g.reverse;
this.__EG=this.getCurrentPage();
this.__EH=f;
qx.ui.mobile.page.manager.Simple.prototype.show.call(this,f);
},_removeCurrentPage:function(){this.__EI();
},__EI:function(){this.__ED=true;
this.fireDataEvent("animationStart",[this.__EG,this.__EH]);
var j=this.__EG.getContainerElement();
var h=this.__EH.getContainerElement();
var i=this.__EK("out");
var k=this.__EK("in");
qx.event.Registration.addListener(j,"animationEnd",this._onAnimationEnd,this);
qx.event.Registration.addListener(h,"animationEnd",this._onAnimationEnd,this);
qx.bom.element.Class.addClasses(h,k);
qx.bom.element.Class.addClasses(j,i);
},_onAnimationEnd:function(l){this._getRoot().remove(this.__EG);
this.__EJ();
this.fireDataEvent(d,[this.__EG,this.__EH]);
},__EJ:function(){if(this.__ED){var n=this.__EG.getContainerElement();
var m=this.__EH.getContainerElement();
qx.event.Registration.removeListener(n,"animationEnd",this._onAnimationEnd,this);
qx.event.Registration.removeListener(m,"animationEnd",this._onAnimationEnd,this);
qx.bom.element.Class.removeClasses(n,this.__EK("out"));
qx.bom.element.Class.removeClasses(m,this.__EK("in"));
this.__ED=false;
}},__EK:function(o){var p=[this.__EE,o];

if(this.__EF){p.push("reverse");
}return p;
}},destruct:function(){this.__EJ();
this.__ED=this.__EE,this.__EF=null;
this.__EG=this.__EH=null;
}});
})();
(function(){var q="qx.event.type.Event",p="resize",o="px",n="orientationchange",m="start",l="qx.mobile.nativescroll",k="height",j="page",i="stop",h="resume",c="initialize",g="pause",f="back",b="minHeight",a="qx.ui.mobile.page.Page",e="menu",d="css.translate3d";
qx.Class.define(a,{extend:qx.ui.mobile.container.Composite,construct:function(r){qx.ui.mobile.container.Composite.call(this,r);

if(!r){this.setLayout(new qx.ui.mobile.layout.VBox());
}qx.ui.mobile.page.Page.getManager().add(this);
this._resize();
qx.event.Registration.addListener(window,n,this._resize,this);
qx.event.Registration.addListener(window,p,this._resize,this);
},events:{"initialize":q,"start":q,"stop":q,"pause":q,"resume":q,"back":q,"menu":q},properties:{defaultCssClass:{refine:true,init:j}},statics:{__EL:null,__EM:null,getManager:function(){if(!this.__EL){this.__EL=new qx.ui.mobile.page.Page.__EM();
}return qx.ui.mobile.page.Page.__EL;
},setManagerClass:function(s){qx.ui.mobile.page.Page.__EM=s;
}},members:{__EN:false,_resize:function(){if(qx.core.Environment.get(l)){this._setStyle(b,window.innerHeight+o);
}else{this._setStyle(k,window.innerHeight+o);
}},_applyId:function(t,u){qx.ui.mobile.container.Composite.prototype._applyId.call(this,t,u);

if(u!=null){qx.ui.mobile.page.Page.getManager().remove(u);
}qx.ui.mobile.page.Page.getManager().add(this);
},back:function(){this.fireEvent(f);
var v=this._back();
return v||false;
},_back:function(){},menu:function(){this.fireEvent(e);
},show:function(w){qx.ui.mobile.page.Page.getManager().show(this,w);
},initialize:function(){if(!this.isInitialized()){this._initialize();
this.__EN=true;
this.fireEvent(c);
}},_initialize:function(){},isInitialized:function(){return this.__EN;
},start:function(){this._start();
this.fireEvent(m);
},_start:function(){},stop:function(){this._stop();
this.fireEvent(i);
},_stop:function(){},pause:function(){this._pause();
this.fireEvent(g);
},_pause:function(){},resume:function(){this._resume();
this.fireEvent(h);
},_resume:function(){}},destruct:function(){qx.event.Registration.removeListener(window,n,this._resize,this);
qx.event.Registration.removeListener(window,p,this._resize,this);
this.__EN=null;

if(!qx.core.ObjectRegistry.inShutDown){if(this.getId()){qx.ui.mobile.page.Page.getManager().remove(this.getId());
}}},defer:function(x){if(qx.core.Environment.get(d)){x.setManagerClass(qx.ui.mobile.page.manager.Animation);
}else{x.setManagerClass(qx.ui.mobile.page.manager.Simple);
}}});
})();
(function(){var n="String",m="",l="Boolean",k="tap",j="_applyShowButton",i="_applyShowBackButton",h="action",g="content",f="_applyBackButtonText",e="qx.event.type.Event",b="_applyContentCssClass",d="_applyButtonText",c="qx.ui.mobile.page.NavigationPage",a="_applyTitle";
qx.Class.define(c,{extend:qx.ui.mobile.page.Page,events:{action:e},properties:{title:{check:n,init:m,apply:a},backButtonText:{check:n,init:m,apply:f},buttonText:{check:n,init:m,apply:d},showBackButton:{check:l,init:false,apply:i},showButton:{check:l,init:false,apply:j},contentCssClass:{check:n,init:g,nullable:true,apply:b}},members:{__EO:null,__EP:null,__EQ:null,__ER:null,__ES:null,__ET:null,getContent:function(){return this.__ES;
},_getTitle:function(){return this.__EP;
},_getNavigationBar:function(){return this.__EO();
},_getBackButton:function(){return this.__EQ;
},_getButton:function(){return this.__ER;
},_getScrollContainer:function(){return this.__ET;
},_applyTitle:function(o,p){if(this.__EP){this.__EP.setValue(o);
}},_applyBackButtonText:function(q,r){if(this.__EQ){this.__EQ.setValue(q);
}},_applyButtonText:function(s,t){if(this.__ER){this.__ER.setValue(s);
}},_applyShowBackButton:function(u,v){this._showBackButton();
},_applyShowButton:function(w,x){this._showButton();
},_applyContentCssClass:function(y,z){if(this.__ES){this.__ES.setDefaultCssClass(y);
}},_showBackButton:function(){if(this.__EQ){if(this.getShowBackButton()){this.__EQ.show();
}else{this.__EQ.hide();
}}},_showButton:function(){if(this.__ER){if(this.getShowButton()){this.__ER.show();
}else{this.__ER.hide();
}}},_initialize:function(){qx.ui.mobile.page.Page.prototype._initialize.call(this);
this.__EO=this._createNavigationBar();

if(this.__EO){this.add(this.__EO);
}this.__ET=this._createScrollContainer();
this.__ES=this._createContent();

if(this.__ES){this.__ET.add(this.__ES);
}
if(this.__ET){this.add(this.__ET,{flex:1});
}},_createScrollContainer:function(){return new qx.ui.mobile.container.Scroll();
},_createContent:function(){var content=new qx.ui.mobile.container.Composite();
content.setDefaultCssClass(this.getContentCssClass());
return content;
},_createNavigationBar:function(){var A=new qx.ui.mobile.navigationbar.NavigationBar();
this.__EQ=this._createBackButton();

if(this.__EQ){this.__EQ.addListener(k,this._onBackButtonTap,this);
this.__EQ.setValue(this.getBackButtonText());
this._showBackButton();
A.add(this.__EQ);
}this.__EP=this._createTitle();

if(this.__EP){A.add(this.__EP,{flex:1});
}this.__ER=this._createButton();

if(this.__ER){this.__ER.addListener(k,this._onButtonTap,this);
this.__ER.setValue(this.getButtonText());
this._showButton();
A.add(this.__ER);
}return A;
},_createTitle:function(){return new qx.ui.mobile.navigationbar.Title(this.getTitle());
},_createBackButton:function(){return new qx.ui.mobile.navigationbar.BackButton();
},_createButton:function(){return new qx.ui.mobile.navigationbar.Button();
},_onBackButtonTap:function(B){this.back();
},_onButtonTap:function(C){this.fireEvent(h);
}},destruct:function(){this.__EO=this.__EP=this.__EQ=this.__ER=this.__ES=this.__ET=null;
}});
})();
(function(){var g="changeSelectedFeed",f="changeFeeds",d="feedreader.mobile.OverviewPage",c="changeSelection",b="Feed Reader",a="_applyFeeds";
qx.Class.define(d,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setTitle(b);
},properties:{feeds:{event:f,init:null,apply:a},selectedFeed:{event:g,init:null,nullable:true}},members:{__EU:null,__EV:null,_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
this.__EU=new qx.ui.mobile.list.List();
this.__EU.setDelegate({configureItem:function(h,i){h.setTitle(i.getTitle());
h.setShowArrow(true);
}});
this.__EU.addListener(c,function(e){var j=this.__EV.getItem(e.getData());
this.setSelectedFeed(j);
},this);
this.getContent().add(this.__EU);
},_applyFeeds:function(k,l){this.__EV=k.getFeeds().getItem(0).getFeeds();
this.__EU.setModel(this.__EV);
}}});
})();
(function(){var j="",i="ready",h="shutdown",g="engine.name",f="qx.application",d="beforeunload",c="qx.core.Init",b="os.name",a="engine.version";
qx.Class.define(c,{statics:{getApplication:function(){return this.__ik||null;
},ready:function(){if(this.__ik){return;
}
if(qx.core.Environment.get(g)==j){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(a)==j){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==j){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var l=qx.core.Environment.get(f);
var m=qx.Class.getByName(l);

if(m){this.__ik=new m;
var k=new Date;
this.__ik.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-k)+"ms");
var k=new Date;
this.__ik.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-k)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+l);
}},__il:function(e){var n=this.__ik;

if(n){e.setReturnValue(n.close());
}},__im:function(){var o=this.__ik;

if(o){o.terminate();
}}},defer:function(p){qx.event.Registration.addListener(window,i,p.ready,p);
qx.event.Registration.addListener(window,h,p.__im,p);
qx.event.Registration.addListener(window,d,p.__il,p);
}});
})();
(function(){var b="engine.name",a="qx.event.handler.Transition";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){qx.core.Object.call(this);
this.__EW={};
this.__EX=qx.lang.Function.listener(this._onNative,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{transitionEnd:1,animationEnd:1,animationStart:1,animationIteration:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,TYPE_TO_NATIVE:qx.core.Environment.select("engine.name",{"webkit":{transitionEnd:"webkitTransitionEnd",animationEnd:"webkitAnimationEnd",animationStart:"webkitAnimationStart",animationIteration:"webkitAnimationIteration"},"gecko":{transitionEnd:"mozTransitionEnd",animationEnd:"mozAnimationEnd",animationStart:"mozAnimationStart",animationIteration:"mozAnimationIteration"},"default":null}),NATIVE_TO_TYPE:qx.core.Environment.select("engine.name",{"webkit":{webkitTransitionEnd:"transitionEnd",webkitAnimationEnd:"animationEnd",webkitAnimationStart:"animationStart",webkitAnimationIteration:"animationIteration"},"gecko":{mozTransitionEnd:"transitionEnd",mozAnimationEnd:"animationEnd",mozAnimationStart:"animationStart",mozAnimationIteration:"animationIteration"},"default":null})},members:{__EX:null,__EW:null,canHandleEvent:function(d,e){},registerEvent:qx.core.Environment.select(b,{"webkit|gecko":function(f,g,h){var j=qx.core.ObjectRegistry.toHashCode(f)+g;
var i=qx.event.handler.Transition.TYPE_TO_NATIVE[g];
this.__EW[j]={target:f,type:i};
qx.bom.Event.addNativeListener(f,i,this.__EX);
},"default":function(){}}),unregisterEvent:qx.core.Environment.select(b,{"webkit|gecko":function(k,l,m){var o=this.__EW;

if(!o){return;
}var n=qx.core.ObjectRegistry.toHashCode(k)+l;

if(o[n]){delete o[n];
}qx.bom.Event.removeNativeListener(k,qx.event.handler.Transition.TYPE_TO_NATIVE[l],this.__EX);
},"default":function(){}}),_onNative:qx.event.GlobalError.observeMethod(function(p){qx.event.Registration.fireEvent(p.target,qx.event.handler.Transition.NATIVE_TO_TYPE[p.type],qx.event.type.Event);
})},destruct:function(){var event;
var r=this.__EW;

for(var q in r){event=r[q];

if(event.target){qx.bom.Event.removeNativeListener(event.target,event.type,this.__EX);
}}this.__EW=this.__EX=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var b="abstract",a="qx.ui.mobile.layout.Abstract";
qx.Class.define(a,{extend:qx.core.Object,type:b,members:{_widget:null,__EY:null,__Fa:null,getCssClass:function(){},_getSupportedChildLayoutProperties:function(){},_setLayoutProperty:function(c,d,e){},setLayoutProperties:function(f,g){var i=this._getSupportedChildLayoutProperties();

for(var h in g){if(!i[h]){throw new Error("The layout does not support the "+h+" property");
}var j=g[h];
this._setLayoutProperty(f,h,j);
this._addChildLayoutProperty(f,h,j);
}},connectToWidget:function(k){if(this._widget){this._widget.removeCssClass(this.getCssClass());
}this._widget=k;

if(k){k.addCssClass(this.getCssClass());

if(this.__EY){for(var l in this.__EY){this.reset(l);
this.set(l,this.__EY[l]);
}}}else{this.__EY=null;
}},_addCachedProperty:function(m,n){if(!this.__EY){this.__EY={};
}this.__EY[m]=n;
},_getChildLayoutPropertyValue:function(o,p){var q=this.__Fb(o);
return q[p];
},_addChildLayoutProperty:function(r,s,t){var u=this.__Fb(r);

if(t==null){delete u[s];
}else{u[s]=t;
}},__Fb:function(v){if(!this.__Fa){this.__Fa={};
}var w=this.__Fa;
var x=v.toHashCode();

if(!w[x]){w[x]={};
}return w[x];
}},destruct:function(){this._widget=null;
}});
})();
(function(){var l="_applyLayoutChange",k="boxFlex",j="abstract",i="middle",h="bottom",g="center",f="Boolean",e="flex",d="top",c="left",a="right",b="qx.ui.mobile.layout.AbstractBox";
qx.Class.define(b,{extend:qx.ui.mobile.layout.Abstract,type:j,construct:function(m,n,o){qx.ui.mobile.layout.Abstract.call(this);

if(m){this.setAlignX(m);
}
if(n){this.setAlignY(n);
}
if(o){this.setReversed(o);
}},properties:{alignX:{check:[c,g,a],nullable:true,init:null,apply:l},alignY:{check:[d,i,h],nullable:true,init:null,apply:l},reversed:{check:f,nullable:true,init:null,apply:l}},statics:{PROPERTY_CSS_MAPPING:{"alignX":{"hbox":{"left":"boxPackStart","center":"boxPackCenter","right":"boxPackEnd"},"vbox":{"left":"boxAlignStart","center":"boxAlignCenter","right":"boxAlignEnd"}},"alignY":{"hbox":{"top":"boxAlignStart","middle":"boxAlignCenter","bottom":"boxAlignEnd"},"vbox":{"top":"boxPackStart","middle":"boxPackCenter","bottom":"boxPackEnd"}},"reversed":{"hbox":{"true":"boxReverse","false":null},"vbox":{"true":"boxReverse","false":null}}},SUPPORTED_CHILD_LAYOUT_PROPERTIES:{"flex":1}},members:{_getSupportedChildLayoutProperties:function(){return qx.ui.mobile.layout.AbstractBox.SUPPORTED_CHILD_LAYOUT_PROPERTIES;
},_setLayoutProperty:function(p,q,r){if(q==e){var s=this._getChildLayoutPropertyValue(p,q);

if(s!=null){p.removeCssClass(k+r);
}p.addCssClass(k+r);
}},connectToWidget:function(t){if(this._widget){this.resetAlignX();
this.resetAlignY();
this.resetReversed();
}qx.ui.mobile.layout.Abstract.prototype.connectToWidget.call(this,t);
},_applyLayoutChange:function(u,v,w){if(this._widget){var A=this.getCssClass();
var y=qx.ui.mobile.layout.AbstractBox.PROPERTY_CSS_MAPPING[w][A];

if(v){var z=y[v];

if(z){this._widget.removeCssClass(z);
}}
if(u){var x=y[u];

if(x){this._widget.addCssClass(x);
}}}else{if(u){this._addCachedProperty(w,u);
}}}}});
})();
(function(){var b="vbox",a="qx.ui.mobile.layout.VBox";
qx.Class.define(a,{extend:qx.ui.mobile.layout.AbstractBox,members:{getCssClass:function(){return b;
}}});
})();
(function(){var h="resize",g="domupdated",f="orientationchange",e="qx.mobile.emulatetouch",d="div",c="qx.ui.mobile.container.MIScroll",b="qx/mobile/js/iscroll.js",a="success";
qx.Mixin.define(c,{construct:function(){this.__Fe();
this.__Fg();
},members:{__Fc:null,__Fd:null,_createScrollElement:function(){var scroll=qx.bom.Element.create(d);
return scroll;
},_getScrollContentElement:function(){return this.getContainerElement().childNodes[0];
},__Fe:function(){if(!window.iScroll){var i=qx.util.ResourceManager.getInstance().toUri(b);
var j=new qx.io.ScriptLoader();
j.load(i,this.__Fi,this);
}else{this._setScroll(this.__Ff());
}},__Ff:function(){var k=qx.core.Environment.get(e);
var scroll=new iScroll(this.getContentElement(),{desktopCompatibility:k});
return scroll;
},__Fg:function(){qx.event.Registration.addListener(window,f,this._refresh,this);
qx.event.Registration.addListener(window,h,this._refresh,this);
this.addListener(g,this._refresh,this);
},__Fh:function(){qx.event.Registration.removeListener(window,f,this._refresh,this);
qx.event.Registration.removeListener(window,h,this._refresh,this);
this.removeListener(g,this._refresh,this);
},__Fi:function(status){if(status==a){this._setScroll(this.__Ff());
}else{}},_setScroll:function(scroll){this.__Fc=scroll;
},_refresh:function(){if(this.__Fc){this.__Fc.refresh();
}}},destruct:function(){this.__Fh();
if(this.__Fc){this.__Fc.destroy();
}this.__Fc=this.__Fd=null;
}});
})();
(function(){var a="qx.ui.mobile.container.MNativeScroll";
qx.Mixin.define(a,{members:{_createScrollElement:function(){return null;
},_getScrollContentElement:function(){return null;
}}});
})();
(function(){var c="qx.ui.mobile.container.Scroll",b="scroll",a="qx.mobile.nativescroll";
qx.Class.define(c,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.core.MChildrenHandling],properties:{defaultCssClass:{refine:true,init:b}},members:{_createContainerElement:function(){var e=qx.ui.mobile.core.Widget.prototype._createContainerElement.call(this);
var d=this._createScrollElement();

if(d){e.appendChild(d);
}return e;
},_getContentElement:function(){var f=qx.ui.mobile.core.Widget.prototype._getContentElement.call(this);
var g=this._getScrollContentElement();
return g||f;
}},defer:function(h){if(qx.core.Environment.get(a)==false){qx.Class.include(h,qx.ui.mobile.container.MIScroll);
}else{qx.Class.include(h,qx.ui.mobile.container.MNativeScroll);
}}});
})();
(function(){var c="middle",b="navigationbar",a="qx.ui.mobile.navigationbar.NavigationBar";
qx.Class.define(a,{extend:qx.ui.mobile.container.Composite,construct:function(d){qx.ui.mobile.container.Composite.call(this,d);

if(!d){this.setLayout(new qx.ui.mobile.layout.HBox().set({alignY:c}));
}},properties:{defaultCssClass:{refine:true,init:b}}});
})();
(function(){var b="qx.ui.mobile.layout.HBox",a="hbox";
qx.Class.define(b,{extend:qx.ui.mobile.layout.AbstractBox,members:{getCssClass:function(){return a;
}}});
})();
(function(){var j="",i="_applyAttribute",h="Boolean",g="true",f="7",e="\uFEFF\u0039",d="changeValue",c="5",b="3",a="\uFEFF\u0036",F="0",E="\uFEFF\u0034",D="_applyValue",C="qx.ui.mobile.basic.Label",B="\uFEFF\u0032",A="\uFEFF\u0030",z="8",y="data-preventPhoneNumber",x="\uFEFF\u0038",w="6",r="4",s="2",p="preventPhoneNumber",q="1",m="\n",o="\uFEFF\u0035",k="label",l="\uFEFF\u0033",t="\uFEFF\u0031",u="9",v="\uFEFF\u0037";
qx.Class.define(C,{extend:qx.ui.mobile.core.Widget,construct:function(G){qx.ui.mobile.core.Widget.call(this);

if(G){this.setValue(G);
}},properties:{defaultCssClass:{refine:true,init:k},value:{nullable:true,init:null,apply:D,event:d},anonymous:{refine:true,init:true},preventPhoneNumber:{check:h,init:false,apply:i}},members:{_applyValue:function(H,I){if(this.getPreventPhoneNumber()){H=this._preventPhoneNumberAutoDetection(H);
}this._setHtml(H);
},_preventPhoneNumberAutoDetection:function(J){if(J==null){return;
}J=j+J;
J=J.replace(/\r\n/g,m);
var L=j;
for(var n=0;n<J.length;n++){var K=J.charAt(n);

if(K==F){L+=A;
}else if(K==q){L+=t;
}else if(K==s){L+=B;
}else if(K==b){L+=l;
}else if(K==r){L+=E;
}else if(K==c){L+=o;
}else if(K==w){L+=a;
}else if(K==f){L+=v;
}else if(K==z){L+=x;
}else if(K==u){L+=e;
}else{L+=K;
}}return L;
}},defer:function(){qx.ui.mobile.core.Widget.addAttributeMapping(p,{attribute:y,values:{"true":g,"false":null}});
}});
})();
(function(){var b="qx.ui.mobile.navigationbar.Title",a="h1";
qx.Class.define(b,{extend:qx.ui.mobile.basic.Label,members:{_getTagName:function(){return a;
}}});
})();
(function(){var d="qx.ui.mobile.form.Button",c="button",b="String",a="_applyValue";
qx.Class.define(d,{extend:qx.ui.mobile.core.Widget,construct:function(e){qx.ui.mobile.core.Widget.call(this);

if(e){this.setValue(e);
}},properties:{defaultCssClass:{refine:true,init:c},value:{check:b,nullable:true,init:null,apply:a}},members:{_applyValue:function(f,g){this._setHtml(f);
}}});
})();
(function(){var b="qx.ui.mobile.navigationbar.Button",a="navigationbar-button";
qx.Class.define(b,{extend:qx.ui.mobile.form.Button,properties:{defaultCssClass:{refine:true,init:a}}});
})();
(function(){var b="qx.ui.mobile.navigationbar.BackButton",a="navigationbar-backbutton";
qx.Class.define(b,{extend:qx.ui.mobile.navigationbar.Button,properties:{defaultCssClass:{refine:true,init:a}}});
})();
(function(){var p="",o="_applyDelegate",n="changeModel",m="list",l="changeDelegate",k="__Fj",j="qx.data.Array",i="data-selectable",h="false",g="qx.ui.mobile.list.List",c="changeSelection",f="tap",e="ul",b="Integer",a="_applyModel",d="qx.event.type.Data";
qx.Class.define(g,{extend:qx.ui.mobile.core.Widget,construct:function(q){qx.ui.mobile.core.Widget.call(this);
this.addListener(f,this._onTap,this);
this.__Fj=new qx.ui.mobile.list.provider.Provider(this);

if(q){this.setDelegate(q);
}},events:{changeSelection:d},properties:{defaultCssClass:{refine:true,init:m},delegate:{apply:o,event:l,init:null,nullable:true},model:{check:j,apply:a,event:n,nullable:true,init:null},itemCount:{check:b,init:0}},members:{__Fj:null,_getTagName:function(){return e;
},_onTap:function(r){var s=r.getOriginalTarget();
var t=-1;

if(qx.bom.element.Attribute.get(s,i)!=h&&qx.dom.Element.hasChild(this.getContainerElement(),s)){t=qx.dom.Hierarchy.getElementIndex(s);
}
if(t!=-1){this.fireDataEvent(c,t);
}},_applyModel:function(u,v){this.setItemCount(u?u.getLength():0);
this.__Fk();
},_applyDelegate:function(w,x){this.__Fj.setDelegate(w);
},clear:function(){this._setHtml(p);
},__Fk:function(){this._setHtml(p);
var B=this.getItemCount();
var A=this.getModel();
var C=this.getContentElement();

for(var z=0;z<B;z++){var y=this.__Fj.getItemElement(A.getItem(z),z);
C.appendChild(y);
}this._domUpdated();
}},destruct:function(){this._disposeObjects(k);
}});
})();
(function(){var d="_applyDelegate",c="qx.ui.mobile.list.provider.Provider",b="createItemRenderer",a="changeDelegate";
qx.Class.define(c,{extend:qx.core.Object,properties:{delegate:{event:a,init:null,nullable:true,apply:d}},members:{__Fl:null,_setItemRenderer:function(e){this.__Fl=e;
},_getItemRenderer:function(){return this.__Fl;
},getItemElement:function(f,g){this.__Fl.reset();
this._configureItem(f,g);
var h=this.__Fl.getSelectable();
var j=this.__Fl.getChildren();

for(var i=0,length=j.length;i<length;i++){j[i].setAnonymous(h);
}return this.__Fl.getContainerElement().cloneNode(true);
},_configureItem:function(k,l){var m=this.getDelegate();

if(m!=null&&m.configureItem!=null){m.configureItem(this.__Fl,k,l);
}},_createItemRenderer:function(){var o=qx.util.Delegate.getMethod(this.getDelegate(),b);
var n=null;

if(o==null){n=new qx.ui.mobile.list.renderer.Default();
}else{n=o();
}return n;
},_applyDelegate:function(p,q){this._setItemRenderer(this._createItemRenderer());
}},destruct:function(){this.__Fl=null;
}});
})();
(function(){var a="qx.util.Delegate";
qx.Class.define(a,{statics:{getMethod:function(b,c){if(qx.util.Delegate.containsMethod(b,c)){return qx.lang.Function.bind(b[c],b);
}return null;
},containsMethod:function(d,e){var f=qx.lang.Type;

if(f.isObject(d)){return f.isFunction(d[e]);
}return false;
}}});
})();
(function(){var j="Boolean",i="arrow",h="selected",g="listItem",f="li",e="_applyAttribute",d="_applySelected",c="qx.ui.mobile.list.renderer.Abstract",b="_applyShowArrow",a="abstract";
qx.Class.define(c,{extend:qx.ui.mobile.core.Widget,type:a,include:[qx.ui.mobile.core.MChildrenHandling],construct:function(){qx.ui.mobile.core.Widget.call(this);
this.initSelectable();
this.initShowArrow();
},properties:{defaultCssClass:{refine:true,init:g},selected:{check:j,init:false,apply:d},selectable:{check:j,init:true,apply:e},showArrow:{check:j,init:false,apply:b}},members:{reset:function(){},_getTagName:function(){return f;
},_applyShowArrow:function(k,l){if(k){this.addCssClass(i);
}else{this.removeCssClass(i);
}},_applySelected:function(m,n){if(m){this.addCssClass(h);
}else{this.removeCssClass(h);
}}}});
})();
(function(){var f="",e="list-itemlabel",d="qx.ui.mobile.list.renderer.Default",c="list-itemimage",b="middle",a="subtitle";
qx.Class.define(d,{extend:qx.ui.mobile.list.renderer.Abstract,construct:function(){qx.ui.mobile.list.renderer.Abstract.call(this);
this.add(this._create());
},members:{__Fm:null,__Fn:null,__Fo:null,setImage:function(g){this.__Fm.setSource(g);
},setTitle:function(h){this.__Fn.setValue(h);
},setSubTitle:function(i){this.__Fo.setValue(i);
},_create:function(){var j=qx.ui.mobile.container.Composite;
var l=new j(new qx.ui.mobile.layout.HBox().set({alignY:b}));
this.__Fm=new qx.ui.mobile.basic.Image();
this.__Fm.addCssClass(c);
l.add(this.__Fm);
var k=new j(new qx.ui.mobile.layout.VBox());
l.add(k,{flex:1});
this.__Fn=new qx.ui.mobile.basic.Label();
this.__Fn.addCssClass(e);
k.add(this.__Fn);
this.__Fo=new qx.ui.mobile.basic.Label();
this.__Fo.addCssClass(a);
k.add(this.__Fo);
return l;
},reset:function(){this.__Fm.setSource(null);
this.__Fn.setValue(f);
this.__Fo.setValue(f);
}}});
})();
(function(){var h="qx.event.type.Event",g="src",f="_applySource",e="loaded",d="img",c="loadingFailed",b="qx.ui.mobile.basic.Image",a="String";
qx.Class.define(b,{extend:qx.ui.mobile.core.Widget,construct:function(i){qx.ui.mobile.core.Widget.call(this);

if(i){this.setSource(i);
}else{this.initSource();
}},events:{loadingFailed:h,loaded:h},properties:{source:{check:a,nullable:true,init:null,apply:f}},members:{_getTagName:function(){return d;
},_applySource:function(j,k){if(j){var l=qx.util.ResourceManager.getInstance().toUri(j);
var m=qx.io.ImageLoader;

if(!m.isFailed(l)){m.load(l,this.__Fp,this);
}this._setSource(l);
}},__Fp:function(n,o){if(o.failed){this.warn("Image could not be loaded: "+n);
this.fireEvent(c);
}else{this.fireEvent(e);
}this._domUpdated();
},_setSource:function(p){this._setAttribute(g,p);
this._domUpdated();
}}});
})();
(function(){var c="engine.name",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__iT:{},__iU:{width:null,height:null},__iV:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__iT[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__iT[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__iT[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__iT[k];
return m?m.format:null;
},getSize:function(n){var o=this.__iT[n];
return o?
{width:o.width,height:o.height}:this.__iU;
},getWidth:function(p){var q=this.__iT[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__iT[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__iT[t];

if(!w){w=this.__iT[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__iW,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__iT[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__iT[z]=null;
},__iW:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__iT[E];
if(event.type===b){F.loaded=true;
F.width=this.__iX(D);
F.height=this.__iY(D);
var G=this.__iV.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__iX:qx.core.Environment.select(c,{"gecko":function(I){return I.naturalWidth;
},"default":function(J){return J.width;
}}),__iY:qx.core.Environment.select(c,{"gecko":function(K){return K.naturalHeight;
},"default":function(L){return L.height;
}})}});
})();
(function(){var g="_applyFeed",f="Back",d="changeFeed",c="changeSelection",b="feedreader.mobile.FeedPage",a="changeSelectedArticle";
qx.Class.define(b,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setShowBackButton(true);
this.setBackButtonText(this.tr(f));
},properties:{feed:{event:d,init:null,nullable:true,apply:g},selectedArticle:{event:a,init:null,nullable:true}},members:{__Fq:null,__Fr:null,_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
this.__Fq=new qx.ui.mobile.list.List();
this.__Fq.setDelegate({configureItem:function(h,i){h.setTitle(i.getTitle());
h.setShowArrow(true);
}});
this.__Fq.addListener(c,function(e){var j=this.__Fr.getItem(e.getData());
this.setSelectedArticle(j);
},this);
this.getContent().add(this.__Fq);
},_applyFeed:function(k,l){if(k!=null){this.__Fr=k.getArticles();
this.__Fq.setModel(this.__Fr);
this.setTitle(k.getTitle());
}}}});
})();
(function(){var d="Back",c="_applyArticle",b="feedreader.mobile.ArticlePage",a="changeArticle";
qx.Class.define(b,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setShowBackButton(true);
this.setBackButtonText(this.tr(d));
},properties:{article:{event:a,init:null,nullable:true,apply:c}},members:{__Fs:null,_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
this.__Fs=new qx.ui.mobile.embed.Html();
this.getContent().add(this.__Fs);
},_applyArticle:function(e,f){if(e!=null){this.setTitle(e.getTitle());
var g=feedreader.ArticleBuilder.createHtml(e);
this.__Fs.setHtml(g);
}}}});
})();
(function(){var d="qx.ui.mobile.embed.Html",c="_applyHtml",b="String",a="";
qx.Class.define(d,{extend:qx.ui.mobile.core.Widget,construct:function(e){qx.ui.mobile.core.Widget.call(this);

if(e){this.setHtml(e);
}},properties:{html:{check:b,init:a,apply:c}},members:{_applyHtml:function(f,g){this._setHtml(f);
}}});
})();
(function(){var j="</div>",i="",h="<div class='description'>",g="<div class='date'>",f="'>read more ...</a>",e="</h1>",d="<div class='container'>",c="<a target='_blank' href='",b="<h1 class='blog'>",a="feedreader.ArticleBuilder";
qx.Class.define(a,{statics:{createHtml:function(k,l){if(!k){return i;
}var n=new qx.util.StringBuilder();
var m=(k.getPubDate&&k.getPubDate())||i;
var p=i;

if(k.getDescription){p=k.getDescription();
}else if(k.getContent){p=k.getContent().getContent&&k.getContent().getContent();
}var o=k.getLink();

if(o.getHref){o=o.getHref();
}else if(o instanceof qx.data.Array){o=o.getItem(0).getHref();
}n.add(d);

if(l){n.add(b,k.getTitle(),e);
}n.add(g,m,j);
n.add(h,p,j);
n.add(c,o,f);
n.add(j);
return n.get();
}}});
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
(function(){var b="",a="qx.util.StringBuilder";
qx.Class.define(a,{extend:qx.type.BaseArray,construct:function(c){qx.type.BaseArray.apply(this,arguments);
},members:{clear:function(){this.length=0;
},get:function(){return this.join(b);
},add:null,isEmpty:function(){return this.length===0;
},size:function(){return this.join(b).length;
}},defer:function(d,e){e.add=e.push;
e.toString=e.get;
e.valueOf=e.get;
}});
})();
(function(){var k="_applyBoxShadow",j="px ",i="Integer",h="shadowHorizontalLength",g="box-shadow",f="-webkit-box-shadow",e="shadowVerticalLength",d="-moz-box-shadow",c="shorthand",b="qx.ui.decoration.MBoxShadow",a="Color";
qx.Mixin.define(b,{properties:{shadowHorizontalLength:{nullable:true,check:i,apply:k},shadowVerticalLength:{nullable:true,check:i,apply:k},shadowBlurRadius:{nullable:true,check:i,apply:k},shadowColor:{nullable:true,check:a,apply:k},shadowLength:{group:[h,e],mode:c}},members:{_styleBoxShadow:function(l){var m=qx.theme.manager.Color.getInstance();
var p=m.resolve(this.getShadowColor());

if(p!=null){var q=this.getShadowVerticalLength()||0;
var n=this.getShadowHorizontalLength()||0;
var blur=this.getShadowBlurRadius()||0;
var o=n+j+q+j+blur+j+p;
l[d]=o;
l[f]=o;
l[g]=o;
}},_applyBoxShadow:function(){}}});
})();
(function(){var j="solid",i="_applyStyle",h="double",g="px ",f="dotted",e="_applyWidth",d="Color",c="",b="dashed",a="Number",D=" ",C="shorthand",B="widthTop",A="styleRight",z="styleBottom",y="widthBottom",x="widthLeft",w="styleTop",v="colorBottom",u="styleLeft",q="widthRight",r="colorLeft",o="colorRight",p="colorTop",m="border-top",n="border-left",k="border-right",l="qx.ui.decoration.MSingleBorder",s="border-bottom",t="absolute";
qx.Mixin.define(l,{properties:{widthTop:{check:a,init:0,apply:e},widthRight:{check:a,init:0,apply:e},widthBottom:{check:a,init:0,apply:e},widthLeft:{check:a,init:0,apply:e},styleTop:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleRight:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleBottom:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleLeft:{nullable:true,check:[j,f,b,h],init:j,apply:i},colorTop:{nullable:true,check:d,apply:i},colorRight:{nullable:true,check:d,apply:i},colorBottom:{nullable:true,check:d,apply:i},colorLeft:{nullable:true,check:d,apply:i},left:{group:[x,u,r]},right:{group:[q,A,o]},top:{group:[B,w,p]},bottom:{group:[y,z,v]},width:{group:[B,q,y,x],mode:C},style:{group:[w,A,z,u],mode:C},color:{group:[p,o,v,r],mode:C}},members:{_styleBorder:function(E){var F=qx.theme.manager.Color.getInstance();
var G=this.getWidthTop();

if(G>0){E[m]=G+g+this.getStyleTop()+D+(F.resolve(this.getColorTop())||c);
}var G=this.getWidthRight();

if(G>0){E[k]=G+g+this.getStyleRight()+D+(F.resolve(this.getColorRight())||c);
}var G=this.getWidthBottom();

if(G>0){E[s]=G+g+this.getStyleBottom()+D+(F.resolve(this.getColorBottom())||c);
}var G=this.getWidthLeft();

if(G>0){E[n]=G+g+this.getStyleLeft()+D+(F.resolve(this.getColorLeft())||c);
}E.position=t;
E.top=0;
E.left=0;
},_resizeBorder:function(H,I,J){var K=this.getInsets();
I-=K.left+K.right;
J-=K.top+K.bottom;
if(I<0){I=0;
}
if(J<0){J=0;
}return {left:K.left-this.getWidthLeft(),top:K.top-this.getWidthTop(),width:I,height:J};
},_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_applyWidth:function(){this._applyStyle();
this._resetInsets();
},_applyStyle:function(){}}});
})();
(function(){var d="qx.ui.decoration.MBackgroundColor",c="Color",b="_applyBackgroundColor",a="";
qx.Mixin.define(d,{properties:{backgroundColor:{check:c,nullable:true,apply:b}},members:{_tintBackgroundColor:function(e,f,g){var h=qx.theme.manager.Color.getInstance();

if(f==null){f=this.getBackgroundColor();
}g.backgroundColor=h.resolve(f)||a;
},_resizeBackgroundColor:function(i,j,k){var l=this.getInsets();
j-=l.left+l.right;
k-=l.top+l.bottom;
return {left:l.left,top:l.top,width:j,height:k};
},_applyBackgroundColor:function(){}}});
})();
(function(){var t="_applyBackgroundImage",s="repeat",r="",q="mshtml",p="engine.name",o="backgroundPositionX",n='<div style="',m="backgroundPositionY",l='</div>',k="no-repeat",d="engine.version",j="scale",g='">',c=" ",b="repeat-x",f="repeat-y",e="hidden",h="qx.ui.decoration.MBackgroundImage",a="String",i="browser.quirksmode";
qx.Mixin.define(h,{properties:{backgroundImage:{check:a,nullable:true,apply:t},backgroundRepeat:{check:[s,b,f,k,j],init:s,apply:t},backgroundPositionX:{nullable:true,apply:t},backgroundPositionY:{nullable:true,apply:t},backgroundPosition:{group:[m,o]}},members:{_generateMarkup:this._generateBackgroundMarkup,_generateBackgroundMarkup:function(u,content){var y=r;
var x=this.getBackgroundImage();
var w=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var z=this.getBackgroundPositionX();

if(z==null){z=0;
}u.backgroundPosition=z+c+top;
if(x){var v=qx.util.AliasManager.getInstance().resolve(x);
y=qx.bom.element.Decoration.create(v,w,u);
}else{if((qx.core.Environment.get(p)==q)){if(parseFloat(qx.core.Environment.get(d))<7||qx.core.Environment.get(i)){u.overflow=e;
}}
if(!content){content=r;
}y=n+qx.bom.element.Style.compile(u)+g+content+l;
}return y;
},_applyBackgroundImage:function(){}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__dY:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__dY=null;
},getInsets:function(){if(this.__dY){return this.__dY;
}var j=this._getDefaultInsets();
return this.__dY={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){this.__dY=null;
}},destruct:function(){this.__dY=null;
}});
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
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,q){if(!q){var q={};
}q.include=this.__sM(q.include);
q.patch=this.__sM(q.patch);
var r={$$type:e,name:name,title:q.title,toString:this.genericToString};
if(q.extend){r.supertheme=q.extend;
}r.basename=qx.Bootstrap.createNamespace(name,r);
this.__sP(r,q);
this.__sN(r,q);
this.$$registry[name]=r;
for(var i=0,a=q.include,l=a.length;i<l;i++){this.include(r,a[i]);
}
for(var i=0,a=q.patch,l=a.length;i<l;i++){this.patch(r,a[i]);
}},__sM:function(s){if(!s){return [];
}
if(qx.Bootstrap.isArray(s)){return s;
}else{return [s];
}},__sN:function(t,u){var v=u.aliases||{};

if(u.extend&&u.extend.aliases){qx.Bootstrap.objectMergeWith(v,u.extend.aliases,false);
}t.aliases=v;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__sO:function(w){for(var i=0,x=this.__sQ,l=x.length;i<l;i++){if(w[x[i]]){return x[i];
}}},__sP:function(y,z){var C=this.__sO(z);
if(z.extend&&!C){C=z.extend.type;
}y.type=C||p;
if(!C){return;
}var E=function(){};
if(z.extend){E.prototype=new z.extend.$$clazz;
}var D=E.prototype;
var B=z[C];
for(var A in B){D[A]=B[A];
if(D[A].base){D[A].base=z.extend;
}}y.$$clazz=E;
y[C]=new E;
},$$registry:{},__sQ:[g,d,f,n,c,o,m,b],__sR:null,__sS:null,__sT:function(){},patch:function(F,G){var I=this.__sO(G);

if(I!==this.__sO(F)){throw new Error("The mixins '"+F.name+"' are not compatible '"+G.name+"'!");
}var H=G[I];
var J=F.$$clazz.prototype;

for(var K in H){J[K]=H[K];
}},include:function(L,M){var O=M.type;

if(O!==L.type){throw new Error("The mixins '"+L.name+"' are not compatible '"+M.name+"'!");
}var N=M[O];
var P=L.$$clazz.prototype;

for(var Q in N){if(P[Q]!==undefined){continue;
}P[Q]=N[Q];
}}}});
})();
(function(){var j="_applyLinearBackgroundGradient",i=" ",h=")",g="engine.name",f="horizontal",e=",",d=" 0",c="px",b="browser.name",a="0",K="shorthand",J="Color",I="vertical",H="",G="Number",F="webkit",E="%",D="),to(",C="from(",B="background-image",q="engine.version",r="-moz-",o="-webkit-gradient(linear,",p="startColorPosition",m="-o-",n="deg, ",k="startColor",l="ie",s="qx.ui.decoration.MLinearBackgroundGradient",t="endColorPosition",w="opera",v="linear-gradient(",y="endColor",x="-ms-",A="gecko",z="background",u="-webkit-";
qx.Mixin.define(s,{properties:{startColor:{check:J,nullable:true,apply:j},endColor:{check:J,nullable:true,apply:j},orientation:{check:[f,I],init:I,apply:j},startColorPosition:{check:G,init:0,apply:j},endColorPosition:{check:G,init:100,apply:j},colorPositionUnit:{check:[c,E],init:E,apply:j},gradientStart:{group:[k,p],mode:K},gradientEnd:{group:[y,t],mode:K}},members:{_styleLinearBackgroundGradient:function(L){var O=qx.theme.manager.Color.getInstance();
var U=this.getColorPositionUnit();
if(qx.core.Environment.get(g)==F&&parseFloat(qx.core.Environment.get(q))<534.16){U=U===c?H:U;

if(this.getOrientation()==f){var T=this.getStartColorPosition()+U+d+U;
var S=this.getEndColorPosition()+U+d+U;
}else{var T=a+U+i+this.getStartColorPosition()+U;
var S=a+U+i+this.getEndColorPosition()+U;
}var Q=C+O.resolve(this.getStartColor())+D+O.resolve(this.getEndColor())+h;
var P=o+T+e+S+e+Q+h;
L[z]=P;
}else{var V=this.getOrientation()==f?0:270;
var N=O.resolve(this.getStartColor())+i+this.getStartColorPosition()+U;
var M=O.resolve(this.getEndColor())+i+this.getEndColorPosition()+U;
var R=H;

if(qx.core.Environment.get(g)==A){R=r;
}else if(qx.core.Environment.get(b)==w){R=m;
}else if(qx.core.Environment.get(b)==l){R=x;
}else if(qx.core.Environment.get(g)==F){R=u;
}L[B]=R+v+V+n+N+e+M+h;
}},_resizeLinearBackgroundGradient:function(W,X,Y){var ba=this.getInsets();
X-=ba.left+ba.right;
Y-=ba.top+ba.bottom;
return {left:ba.left,top:ba.top,width:X,height:Y};
},_applyLinearBackgroundGradient:function(){}}});
})();
(function(){var j="px ",i=" ",h='',g="Color",f="Number",e="border-top",d="border-left",c="border-bottom",b="border-right",a="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",u="innerColorTop",t="relative",q="browser.documentmode",r="innerColorLeft",o="qx.ui.decoration.MDoubleBorder",p="left",m="engine.version",n="innerWidthBottom",k="innerWidthLeft",l="position",s="absolute";
qx.Mixin.define(o,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__ua;
this._resizeBorder=this.__tY;
this._styleBorder=this.__tW;
this._generateMarkup=this.__tX;
},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[w,z,n,k],mode:a},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[u,v,x,r],mode:a}},members:{__tV:null,__tW:function(D){var E=qx.theme.manager.Color.getInstance();
D.position=t;
var F=this.getInnerWidthTop();

if(F>0){D[e]=F+j+this.getStyleTop()+i+E.resolve(this.getInnerColorTop());
}var F=this.getInnerWidthRight();

if(F>0){D[b]=F+j+this.getStyleRight()+i+E.resolve(this.getInnerColorRight());
}var F=this.getInnerWidthBottom();

if(F>0){D[c]=F+j+this.getStyleBottom()+i+E.resolve(this.getInnerColorBottom());
}var F=this.getInnerWidthLeft();

if(F>0){D[d]=F+j+this.getStyleLeft()+i+E.resolve(this.getInnerColorLeft());
}},__tX:function(G){var J=this._generateBackgroundMarkup(G);
var H=qx.theme.manager.Color.getInstance();
G[e]=h;
G[b]=h;
G[c]=h;
G[d]=h;
G[C]=0;
if((qx.core.Environment.get(B)==A&&parseFloat(qx.core.Environment.get(m))<8)||(qx.core.Environment.get(B)==A&&qx.core.Environment.get(q)<8)){G[C]=h;
}var I=this.getWidthTop();

if(I>0){G[e]=I+j+this.getStyleTop()+i+H.resolve(this.getColorTop());
}var I=this.getWidthRight();

if(I>0){G[b]=I+j+this.getStyleRight()+i+H.resolve(this.getColorRight());
}var I=this.getWidthBottom();

if(I>0){G[c]=I+j+this.getStyleBottom()+i+H.resolve(this.getColorBottom());
}var I=this.getWidthLeft();

if(I>0){G[d]=I+j+this.getStyleLeft()+i+H.resolve(this.getColorLeft());
}G[l]=s;
G[y]=0;
G[p]=0;
return this.__tV=this._generateBackgroundMarkup(G,J);
},__tY:function(K,L,M){var N=this.getInsets();
L-=N.left+N.right;
M-=N.top+N.bottom;
var O=N.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=N.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:O,top:top,width:L,height:M,elementToApplyDimensions:K.firstChild};
},__ua:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var c="px",b="qx.ui.decoration.Background",a="absolute";
qx.Class.define(b,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(d){qx.ui.decoration.Abstract.call(this);

if(d!=null){this.setBackgroundColor(d);
}},members:{__ub:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ub;
},getMarkup:function(e){if(this.__ub){return this.__ub;
}var f={position:a,top:0,left:0};
var g=this._generateBackgroundMarkup(f);
return this.__ub=g;
},resize:function(h,i,j){var k=this.getInsets();
h.style.width=(i-k.left-k.right)+c;
h.style.height=(j-k.top-k.bottom)+c;
h.style.left=-k.left+c;
h.style.top=-k.top+c;
},tint:function(l,m){this._tintBackgroundColor(l,m,l.style);
}},destruct:function(){this.__ub=null;
}});
})();
(function(){var j='"></div>',i="_applyStyle",h="1px",g='<div style="',f='border:',e="1px solid ",d="Color",c=";",b="px",a='</div>',x="qx.ui.decoration.Beveled",w="css.boxmodel",v='<div style="position:absolute;top:1px;left:1px;',u='border-bottom:',t='border-right:',s="",r="content",q='border-left:',p='border-top:',o="Number",m='<div style="position:absolute;top:1px;left:0px;',n='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(x,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(y,z,A){qx.ui.decoration.Abstract.call(this);
if(y!=null){this.setOuterColor(y);
}
if(z!=null){this.setInnerColor(z);
}
if(A!=null){this.setInnerOpacity(A);
}},properties:{innerColor:{check:d,nullable:true,apply:i},innerOpacity:{check:o,init:1,apply:i},outerColor:{check:d,nullable:true,apply:i}},members:{__uc:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__uc;
},_applyStyle:function(){},getMarkup:function(){if(this.__uc){return this.__uc;
}var B=qx.theme.manager.Color.getInstance();
var C=[];
var F=e+B.resolve(this.getOuterColor())+c;
var E=e+B.resolve(this.getInnerColor())+c;
C.push(k);
C.push(g);
C.push(f,F);
C.push(qx.bom.element.Opacity.compile(0.35));
C.push(j);
C.push(m);
C.push(q,F);
C.push(t,F);
C.push(qx.bom.element.Opacity.compile(1));
C.push(j);
C.push(g);
C.push(n);
C.push(p,F);
C.push(u,F);
C.push(qx.bom.element.Opacity.compile(1));
C.push(j);
var D={position:l,top:h,left:h,opacity:1};
C.push(this._generateBackgroundMarkup(D));
C.push(v);
C.push(f,E);
C.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
C.push(j);
C.push(a);
return this.__uc=C.join(s);
},resize:function(G,H,I){if(H<4){H=4;
}
if(I<4){I=4;
}if(qx.core.Environment.get(w)==r){var outerWidth=H-2;
var outerHeight=I-2;
var O=outerWidth;
var N=outerHeight;
var innerWidth=H-4;
var innerHeight=I-4;
}else{var outerWidth=H;
var outerHeight=I;
var O=H-2;
var N=I-2;
var innerWidth=O;
var innerHeight=N;
}var Q=b;
var M=G.childNodes[0].style;
M.width=outerWidth+Q;
M.height=outerHeight+Q;
var L=G.childNodes[1].style;
L.width=outerWidth+Q;
L.height=N+Q;
var K=G.childNodes[2].style;
K.width=O+Q;
K.height=outerHeight+Q;
var J=G.childNodes[3].style;
J.width=O+Q;
J.height=N+Q;
var P=G.childNodes[4].style;
P.width=innerWidth+Q;
P.height=innerHeight+Q;
},tint:function(R,S){this._tintBackgroundColor(R,S,R.childNodes[3].style);
}},destruct:function(){this.__uc=null;
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
(function(){var o="Number",n="_applyInsets",m="-l",l="insetRight",k="insetTop",j="_applyBaseImage",i="insetBottom",h="-b",g="set",f="shorthand",c="-t",e="insetLeft",d="String",b="qx.ui.decoration.Grid",a="-r";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(p,q){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__ud=new qx.ui.decoration.css3.BorderImage();

if(p){this.__ue(p);
}}else{this.__ud=new qx.ui.decoration.GridDiv(p);
}
if(q!=null){this.__ud.setInsets(q);
}},properties:{baseImage:{check:d,nullable:true,apply:j},insetLeft:{check:o,nullable:true,apply:n},insetRight:{check:o,nullable:true,apply:n},insetBottom:{check:o,nullable:true,apply:n},insetTop:{check:o,nullable:true,apply:n},insets:{group:[k,l,i,e],mode:f}},members:{__ud:null,getMarkup:function(){return this.__ud.getMarkup();
},resize:function(r,s,t){this.__ud.resize(r,s,t);
},tint:function(u,v){},getInsets:function(){return this.__ud.getInsets();
},_applyInsets:function(w,x,name){var y=g+qx.lang.String.firstUp(name);
this.__ud[y](w);
},_applyBaseImage:function(z,A){if(this.__ud instanceof qx.ui.decoration.GridDiv){this.__ud.setBaseImage(z);
}else{this.__ue(z);
}},__ue:function(B){var G,H,J,I;
this.__ud.setBorderImage(B);
var L=qx.util.AliasManager.getInstance().resolve(B);
var M=/(.*)(\.[a-z]+)$/.exec(L);
var K=M[1];
var C=M[2];
var F=qx.util.ResourceManager.getInstance();
var N=F.getImageHeight(K+c+C);
var D=F.getImageWidth(K+a+C);
var E=F.getImageHeight(K+h+C);
var O=F.getImageWidth(K+m+C);
this.__ud.setSlice([N,D,E,O]);
}},destruct:function(){this.__ud=null;
}});
})();
(function(){var j="px",i="Integer",h="_applyBorderRadius",g="radiusTopRight",f="radiusTopLeft",e="-webkit-border-bottom-left-radius",d="-webkit-background-clip",c="radiusBottomRight",b="-webkit-border-bottom-right-radius",a="border-top-left-radius",w="border-top-right-radius",v="border-bottom-left-radius",u="radiusBottomLeft",t="-webkit-border-top-left-radius",s="shorthand",r="-moz-border-radius-bottomright",q="padding-box",p="border-bottom-right-radius",o="qx.ui.decoration.MBorderRadius",n="-moz-border-radius-topright",l="-webkit-border-top-right-radius",m="-moz-border-radius-topleft",k="-moz-border-radius-bottomleft";
qx.Mixin.define(o,{properties:{radiusTopLeft:{nullable:true,check:i,apply:h},radiusTopRight:{nullable:true,check:i,apply:h},radiusBottomLeft:{nullable:true,check:i,apply:h},radiusBottomRight:{nullable:true,check:i,apply:h},radius:{group:[f,g,c,u],mode:s}},members:{_styleBorderRadius:function(x){x[d]=q;
var y=this.getRadiusTopLeft();

if(y>0){x[m]=y+j;
x[t]=y+j;
x[a]=y+j;
}y=this.getRadiusTopRight();

if(y>0){x[n]=y+j;
x[l]=y+j;
x[w]=y+j;
}y=this.getRadiusBottomLeft();

if(y>0){x[k]=y+j;
x[e]=y+j;
x[v]=y+j;
}y=this.getRadiusBottomRight();

if(y>0){x[r]=y+j;
x[b]=y+j;
x[p]=y+j;
}},_applyBorderRadius:function(){}}});
})();
(function(){var cI="solid",cH="invalid",cG="scale",cF="border-main",cE="border-invalid",cD="shadow",cC="border-separator",cB="checkbox-hovered",cA="button-start",cz="button-end",bJ="background-light",bI="tabview-background",bH="repeat-x",bG="radiobutton",bF="button-css",bE="border-input",bD="border-inner-input",bC="border-inner-scrollbar",bB="radiobutton-checked",bA="tabview-inactive",cP="checkbox",cQ="window-border",cN="radiobutton-disabled",cO="radiobutton-hovered-invalid",cL="tabview-page-button-top-active-css",cM="button-border-disabeld",cJ="tabview-page-button-top-inactive-css",cK="decoration/form/input.png",cR="border-toolbar-border-inner",cS="input-css",ci="border-toolbar-button-outer",ch="border-disabled",ck="background-pane",cj="checkbox-disabled-border",cm="button-hovered-end",cl="repeat-y",co="border-dragover",cn="button-hovered-start",cg="progressive-table-header-border-right",cf="decoration/scrollbar/scrollbar-button-bg-vertical.png",k="radiobutton-background",l="checkbox-focus",m="scrollbar-slider-horizontal-css",n="menu-end",o="decoration/selection.png",p="horizontal",q="table-header-start",r="decoration/scrollbar/scrollbar-button-bg-horizontal.png",s="decoration/form/input-focused.png",t="checkbox-hovered-invalid",dh="decoration/table/header-cell.png",dg="tabview-inactive-start",df="table-header-end",de="border-button",dl="border-focused-invalid",dk="button-focused-css",dj="checkbox-border",di="tabview-start",dn="checkbox-start",dm="decoration/tabview/tab-button-top-active.png",ba="group-background",bb="decoration/form/button-c.png",X="keyboard-focus",Y="button-disabled-start",be="selected-end",bf="table-header-hovered",bc="decoration/groupbox/groupbox.png",bd="decoration/pane/pane.png",V="decoration/menu/background.png",W="tooltip-error",I="decoration/toolbar/toolbar-part.gif",H="input-focused-css",K="decoration/menu/bar-background.png",J="window-border-caption",E="radiobutton-hovered",D="decoration/tabview/tab-button-bottom-active.png",G="radiobutton-checked-focused",F="groupitem-end",C="button-disabled-css",B="group-border",bk="scrollbar-slider-vertical-css",bl="decoration/form/button-checked.png",bm="window-css",bn="selected-start",bg="tabview-end",bh="window-statusbar-background",bi="decoration/scrollbar/scrollbar-bg-vertical.png",bj="button-pressed-css",bo="toolbar-button-hovered-css",bp="window-caption-active-end",S="dotted",R="checkbox-disabled-end",Q="window-caption-active-start",P="button-focused",O="menu-start",N="decoration/form/tooltip-error.png",M="window-captionbar-active-css",L="qx/decoration/Modern",U="border-toolbar-separator-left",T="decoration/scrollbar/scrollbar-bg-horizontal.png",bq="decoration/tabview/tab-button-left-active.png",br="decoration/tabview/tab-button-right-inactive.png",bs="decoration/tabview/tab-button-bottom-inactive.png",bt="decoration/form/button-disabled.png",bu="decoration/form/button-pressed.png",bv="background-splitpane",bw="decoration/form/button-checked-focused.png",bx="px",by="decoration/window/statusbar.png",bz="input-border-disabled",bN="checkbox-inner",bM="scrollbar-horizontal-css",bL="button-disabled-end",bK="center",bR="toolbar-end",bQ="groupitem-start",bP="decoration/form/button-hovered.png",bO="checkbox-hovered-inner",bT="input-focused-start",bS="scrollbar-start",cb="scrollbar-slider-start",cc="radiobutton-checked-disabled",bY="checkbox-focused",ca="qx.theme.modern.Decoration",bW="decoration/form/button.png",bX="decoration/app-header.png",bU="decoration/form/button-focused.png",bV="radiobutton-checked-hovered",cd="button-hovered-css",ce="checkbox-disabled-inner",cs="border-toolbar-separator-right",cr="border-focused",cu="decoration/shadow/shadow.png",ct="scrollbar-end",cw="decoration/group-item.png",cv="window-caption-inactive-end",cy="checkbox-end",cx="tabview-inactive-end",cq="input-end",cp="no-repeat",da="decoration/tabview/tab-button-left-inactive.png",db="input-focused-inner-invalid",dc="menu-separator-top",dd="window-caption-inactive-start",cV="scrollbar-slider-end",cW="decoration/window/captionbar-inactive.png",cX="decoration/tabview/tab-button-top-inactive.png",cY="pane-end",cT="input-focused-end",cU="decoration/form/tooltip-error-arrow.png",j="menubar-start",i="toolbar-start",h="checkbox-disabled-start",g="radiobutton-focused",f="pane-start",e="table-focus-indicator",d="button-checked-css",c="decoration/form/button-checked-c.png",b="menu-separator-bottom",a="decoration/shadow/shadow-small.png",w="input-start",x="decoration/tabview/tabview-pane.png",u="decoration/window/captionbar-active.png",v="decoration/tabview/tab-button-right-active.png",z="button-checked-focused-css",A="decoration/toolbar/toolbar-gradient.png",y="checkbox-hovered-inner-invalid";
qx.Theme.define(ca,{aliases:{decoration:L},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:cF}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:o,backgroundRepeat:cG}},"selected-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:bn,endColor:be}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:o,backgroundRepeat:cG,bottom:[2,cI,co]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,cI,co]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd,insets:[0,2,3,0]}},"pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:bI,radius:3,shadowColor:cD,shadowBlurRadius:2,shadowLength:0,gradientStart:[f,0],gradientEnd:[cY,100]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:bc}},"group-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{backgroundColor:ba,radius:4,color:B,width:1}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cH,innerColor:bD,innerOpacity:0.5,backgroundImage:cK,backgroundRepeat:bH,backgroundColor:bJ}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:X,style:S}},"radiobutton":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:k,radius:5,width:1,innerWidth:2,color:dj,innerColor:k,shadowLength:0,shadowBlurRadius:0,shadowColor:l,insetLeft:5}},"radiobutton-checked":{include:bG,style:{backgroundColor:bB}},"radiobutton-checked-focused":{include:bB,style:{shadowBlurRadius:4}},"radiobutton-checked-hovered":{include:bB,style:{innerColor:cB}},"radiobutton-focused":{include:bG,style:{shadowBlurRadius:4}},"radiobutton-hovered":{include:bG,style:{backgroundColor:cB,innerColor:cB}},"radiobutton-disabled":{include:bG,style:{innerColor:cN,backgroundColor:cN,color:cj}},"radiobutton-checked-disabled":{include:cN,style:{backgroundColor:cc}},"radiobutton-invalid":{include:bG,style:{color:cH}},"radiobutton-checked-invalid":{include:bB,style:{color:cH}},"radiobutton-checked-focused-invalid":{include:G,style:{color:cH,shadowColor:cH}},"radiobutton-checked-hovered-invalid":{include:bV,style:{color:cH,innerColor:cO}},"radiobutton-focused-invalid":{include:g,style:{color:cH,shadowColor:cH}},"radiobutton-hovered-invalid":{include:E,style:{color:cH,innerColor:cO,backgroundColor:cO}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:cC}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:cC}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[2,5,5,2]}},"tooltip-error-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:W,radius:4,shadowColor:cD,shadowBlurRadius:2,shadowLength:1}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:cU,backgroundPositionY:bK,backgroundRepeat:cp,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:cu,insets:[4,8,8,4]}},"shadow-window-css":{decorator:[qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{shadowColor:cD,shadowBlurRadius:2,shadowLength:1}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:a,insets:[0,3,3,0]}},"popup-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:cF,shadowColor:cD,shadowBlurRadius:3,shadowLength:1}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:T,backgroundRepeat:bH}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bi,backgroundRepeat:cl}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:r,backgroundRepeat:cG,outerColor:cF,innerColor:bC,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:r,backgroundRepeat:cG,outerColor:ch,innerColor:bC,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cf,backgroundRepeat:cG,outerColor:cF,innerColor:bC,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cf,backgroundRepeat:cG,outerColor:ch,innerColor:bC,innerOpacity:0.3}},"scrollbar-horizontal-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[bS,0],gradientEnd:[ct,100]}},"scrollbar-vertical-css":{include:bM,style:{orientation:p}},"scrollbar-slider-horizontal-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[cb,0],gradientEnd:[cV,100],color:cF,width:1}},"scrollbar-slider-vertical-css":{include:m,style:{orientation:p}},"scrollbar-slider-horizontal-disabled-css":{include:m,style:{color:cM}},"scrollbar-slider-vertical-disabled-css":{include:bk,style:{color:cM}},"button-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:de,width:1,startColor:cA,endColor:cz,startColorPosition:35,endColorPosition:100}},"button-disabled-css":{include:bF,style:{color:cM,startColor:Y,endColor:bL}},"button-hovered-css":{include:bF,style:{startColor:cn,endColor:cm}},"button-checked-css":{include:bF,style:{endColor:cA,startColor:cz}},"button-pressed-css":{include:bF,style:{endColor:cn,startColor:cm}},"button-focused-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:de,width:1,innerColor:P,innerWidth:2,startColor:cA,endColor:cz,startColorPosition:30,endColorPosition:100}},"button-checked-focused-css":{include:dk,style:{endColor:cA,startColor:cz}},"button-invalid-css":{include:bF,style:{color:cE}},"button-disabled-invalid-css":{include:C,style:{color:cE}},"button-hovered-invalid-css":{include:cd,style:{color:cE}},"button-checked-invalid-css":{include:d,style:{color:cE}},"button-pressed-invalid-css":{include:bj,style:{color:cE}},"button-focused-invalid-css":{include:dk,style:{color:cE}},"button-checked-focused-invalid-css":{include:z,style:{color:cE}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:bW,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:bt,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:bU,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bP,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bu,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:bl,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:bw,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Single,style:{color:cH,width:1}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cH,innerColor:dl,insets:[0]}},"checkbox":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow],style:{width:1,color:dj,innerWidth:1,innerColor:bN,gradientStart:[dn,0],gradientEnd:[cy,100],shadowLength:0,shadowBlurRadius:0,shadowColor:l,insetLeft:4}},"checkbox-hovered":{include:cP,style:{innerColor:bO,gradientStart:[cB,0],gradientEnd:[cB,100]}},"checkbox-focused":{include:cP,style:{shadowBlurRadius:4}},"checkbox-disabled":{include:cP,style:{color:cj,innerColor:ce,gradientStart:[h,0],gradientEnd:[R,100]}},"checkbox-invalid":{include:cP,style:{color:cH}},"checkbox-hovered-invalid":{include:cB,style:{color:cH,innerColor:y,gradientStart:[t,0],gradientEnd:[t,100]}},"checkbox-focused-invalid":{include:bY,style:{color:cH,shadowColor:cH}},"input-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBackgroundColor],style:{color:bE,innerColor:bD,innerWidth:1,width:1,backgroundColor:bJ,startColor:w,endColor:cq,startColorPosition:0,endColorPosition:12,colorPositionUnit:bx}},"border-invalid-css":{include:cS,style:{color:cE}},"input-focused-css":{include:cS,style:{startColor:bT,innerColor:cT,endColorPosition:4}},"input-focused-invalid-css":{include:H,style:{innerColor:db,color:cE}},"input-disabled-css":{include:cS,style:{color:bz}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bE,innerColor:bD,innerOpacity:0.5,backgroundImage:cK,backgroundRepeat:bH,backgroundColor:bJ}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bE,innerColor:cr,backgroundImage:s,backgroundRepeat:bH,backgroundColor:bJ}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cH,innerColor:dl,backgroundImage:s,backgroundRepeat:bH,backgroundColor:bJ,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:ch,innerColor:bD,innerOpacity:0.5,backgroundImage:cK,backgroundRepeat:bH,backgroundColor:bJ}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:A,backgroundRepeat:cG}},"toolbar-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:40,endColorPosition:60,startColor:i,endColor:bR}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:ci,innerColor:cR,backgroundImage:bb,backgroundRepeat:cG}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:ci,innerColor:cR,backgroundImage:c,backgroundRepeat:cG}},"toolbar-button-hovered-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{color:ci,width:1,innerWidth:1,innerColor:cR,radius:2,gradientStart:[cA,30],gradientEnd:[cz,100]}},"toolbar-button-checked-css":{include:bo,style:{gradientStart:[cz,30],gradientEnd:[cA,100]}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:U,colorRight:cs,styleLeft:cI,styleRight:cI}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:I,backgroundRepeat:cl}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:x,insets:[4,6,7,4]}},"tabview-pane-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MSingleBorder],style:{width:1,color:cQ,radius:3,gradientStart:[di,90],gradientEnd:[bg,100]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:dm}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:cX}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bs}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bq}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:da}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:v}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:br}},"tabview-page-button-top-active-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{radius:[3,3,0,0],width:[1,1,0,1],color:bI,backgroundColor:di,shadowLength:1,shadowColor:cD,shadowBlurRadius:2}},"tabview-page-button-top-inactive-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{radius:[3,3,0,0],color:bA,colorBottom:bI,width:1,gradientStart:[dg,0],gradientEnd:[cx,100]}},"tabview-page-button-bottom-active-css":{include:cL,style:{radius:[0,0,3,3],width:[0,1,1,1],backgroundColor:dg}},"tabview-page-button-bottom-inactive-css":{include:cJ,style:{radius:[0,0,3,3],width:[0,1,1,1],colorBottom:bA,colorTop:bI}},"tabview-page-button-left-active-css":{include:cL,style:{radius:[3,0,0,3],width:[1,0,1,1],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-left-inactive-css":{include:cJ,style:{radius:[3,0,0,3],width:[1,0,1,1],colorBottom:bA,colorRight:bI}},"tabview-page-button-right-active-css":{include:cL,style:{radius:[0,3,3,0],width:[1,1,1,0],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-right-inactive-css":{include:cJ,style:{radius:[0,3,3,0],width:[1,1,1,0],colorBottom:bA,colorLeft:bI}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:ck,width:3,color:bv,style:cI}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:ck,width:1,color:cF,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:u}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:cW}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:by}},"window-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],shadowBlurRadius:4,shadowLength:2,shadowColor:cD}},"window-incl-statusbar-css":{include:bm,style:{radius:[5,5,5,5]}},"window-captionbar-active-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:cQ,colorBottom:J,radius:[5,5,0,0],gradientStart:[Q,30],gradientEnd:[bp,70]}},"window-captionbar-inactive-css":{include:M,style:{gradientStart:[dd,30],gradientEnd:[cv,70]}},"window-statusbar-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius],style:{backgroundColor:bh,width:[0,1,1,1],color:cQ,radius:[0,0,5,5]}},"window-pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{backgroundColor:ck,width:1,color:cQ,widthTop:0}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:cF,style:cI}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:cF,style:cI}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:dh,backgroundRepeat:cG,widthBottom:1,colorBottom:cF,style:cI}},"table-scroller-header-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[q,10],gradientEnd:[df,90],widthBottom:1,colorBottom:cF}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:cC,styleRight:cI}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:cC,styleRight:cI,widthBottom:1,colorBottom:bf,styleBottom:cI}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:e,style:cI}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:cF,style:cI}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:dh,backgroundRepeat:cG,widthRight:1,colorRight:cg,style:cI}},"progressive-table-header-cell-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[q,10],gradientEnd:[df,90],widthRight:1,colorRight:cg}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:V,backgroundRepeat:cG,width:1,color:cF,style:cI}},"menu-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{gradientStart:[O,0],gradientEnd:[n,100],shadowColor:cD,shadowBlurRadius:2,shadowLength:1,width:1,color:cF}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:dc,widthBottom:1,colorBottom:b}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:K,backgroundRepeat:cG,width:1,color:cC,style:cI}},"menubar-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[j,0],gradientEnd:[n,100],width:1,color:cC}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bX,backgroundRepeat:cG}},"progressbar":{decorator:qx.ui.decoration.Single,style:{width:1,color:bE}},"group-item":{decorator:qx.ui.decoration.Background,style:{backgroundImage:cw,backgroundRepeat:cG}},"group-item-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:bQ,endColor:F}}}});
})();
(function(){var bz="white",by="#EEEEEE",bx="#E4E4E4",bw="#F3F3F3",bv="#F0F0F0",bu="#E8E8E8",bt="#CCCCCC",bs="#EFEFEF",br="#1a1a1a",bq="#00204D",bf="gray",be="#F4F4F4",bd="#fffefe",bc="#AFAFAF",bb="#084FAB",ba="#FCFCFC",Y="#CCC",X="#F2F2F2",W="black",V="#ffffdd",bG="#b6b6b6",bH="#004DAD",bE="#BABABA",bF="#005BC3",bC="#334866",bD="#CECECE",bA="#D9D9D9",bB="#D8D8D8",bI="#99C3FE",bJ="#001533",bj="#B3B3B3",bi="#D5D5D5",bl="#C3C3C3",bk="#DDDDDD",bn="#FF9999",bm="#E8E8E9",bp="#084FAA",bo="#C5C5C5",bh="#DBDBDB",bg="#4a4a4a",a="#83BAEA",b="#D7E7F4",c="#07125A",d="#FAF2F2",e="#87AFE7",f="#F7EAEA",g="#777D8D",h="#FBFBFB",i="#CACACA",j="#909090",bN="#9B9B9B",bM="#F0F9FE",bL="#314a6e",bK="#B4B4B4",bR="#787878",bQ="qx.theme.modern.Color",bP="#000000",bO="#26364D",bT="#A7A7A7",bS="#D1E4FF",F="#5CB0FD",G="#EAEAEA",D="#003B91",E="#80B4EF",J="#FF6B78",K="#949494",H="#808080",I="#930000",B="#7B7B7B",C="#C82C2C",r="#DFDFDF",q="#B6B6B6",t="#0880EF",s="#4d4d4d",n="#f4f4f4",m="#7B7A7E",p="#D0D0D0",o="#f8f8f8",l="#404955",k="#959595",P="#AAAAAA",Q="#F7E9E9",R="#314A6E",S="#C72B2B",L="#FAFAFA",M="#FBFCFB",N="#B2D2FF",O="#666666",T="#CBC8CD",U="#999999",A="#8EB8D6",z="#b8b8b8",y="#727272",x="#33508D",w="#F1F1F1",v="#990000",u="#00368A";
qx.Theme.define(bQ,{colors:{"background-application":r,"background-pane":bw,"background-light":ba,"background-medium":by,"background-splitpane":bc,"background-tip":V,"background-tip-error":S,"background-odd":bx,"htmlarea-background":bz,"progressbar-background":bz,"text-light":j,"text-gray":bg,"text-label":br,"text-title":bL,"text-input":bP,"text-hovered":bJ,"text-disabled":m,"text-selected":bd,"text-active":bO,"text-inactive":l,"text-placeholder":T,"border-inner-scrollbar":bz,"border-main":s,"menu-separator-top":bo,"menu-separator-bottom":L,"border-separator":H,"border-toolbar-button-outer":bG,"border-toolbar-border-inner":o,"border-toolbar-separator-right":n,"border-toolbar-separator-left":z,"border-input":bC,"border-inner-input":bz,"border-disabled":q,"border-pane":bq,"border-button":O,"border-column":bt,"border-focused":bI,"invalid":v,"border-focused-invalid":bn,"border-dragover":x,"keyboard-focus":W,"table-pane":bw,"table-focus-indicator":t,"table-row-background-focused-selected":bb,"table-row-background-focused":E,"table-row-background-selected":bb,"table-row-background-even":bw,"table-row-background-odd":bx,"table-row-selected":bd,"table-row":br,"table-row-line":Y,"table-column-line":Y,"table-header-hovered":bz,"progressive-table-header":P,"progressive-table-header-border-right":X,"progressive-table-row-background-even":be,"progressive-table-row-background-odd":bx,"progressive-progressbar-background":bf,"progressive-progressbar-indicator-done":bt,"progressive-progressbar-indicator-undone":bz,"progressive-progressbar-percent-background":bf,"progressive-progressbar-percent-text":bz,"selected-start":bH,"selected-end":u,"tabview-background":c,"shadow":U,"pane-start":h,"pane-end":bv,"group-background":bu,"group-border":bK,"radiobutton-background":bs,"checkbox-border":R,"checkbox-focus":e,"checkbox-hovered":N,"checkbox-hovered-inner":bS,"checkbox-inner":by,"checkbox-start":bx,"checkbox-end":bw,"checkbox-disabled-border":bR,"checkbox-disabled-inner":i,"checkbox-disabled-start":p,"checkbox-disabled-end":bB,"checkbox-hovered-inner-invalid":d,"checkbox-hovered-invalid":Q,"radiobutton-checked":bF,"radiobutton-disabled":bi,"radiobutton-checked-disabled":B,"radiobutton-hovered-invalid":f,"tooltip-error":C,"scrollbar-start":bt,"scrollbar-end":w,"scrollbar-slider-start":by,"scrollbar-slider-end":bl,"button-border-disabeld":k,"button-start":bv,"button-end":bc,"button-disabled-start":be,"button-disabled-end":bE,"button-hovered-start":bM,"button-hovered-end":A,"button-focused":a,"border-invalid":I,"input-start":bv,"input-end":M,"input-focused-start":b,"input-focused-end":F,"input-focused-inner-invalid":J,"input-border-disabled":bN,"input-border-inner":bz,"toolbar-start":bs,"toolbar-end":bk,"window-border":bq,"window-border-caption":y,"window-caption-active-text":bz,"window-caption-active-start":bp,"window-caption-active-end":D,"window-caption-inactive-start":X,"window-caption-inactive-end":bh,"window-statusbar-background":bs,"tabview-start":ba,"tabview-end":by,"tabview-inactive":g,"tabview-inactive-start":G,"tabview-inactive-end":bD,"table-header-start":bu,"table-header-end":bj,"menu-start":bm,"menu-end":bA,"menubar-start":bu,"groupitem-start":bT,"groupitem-end":K,"groupitem-text":bz,"virtual-row-layer-background-even":bz,"virtual-row-layer-background-odd":bz}});
})();
(function(){var ep="css.gradients",eo="widget",en="atom",em="-css",el="button-frame",ek="css.borderradius",ej="css.boxshadow",ei="main",eh="button",eg="bold",cB="text-selected",cA="image",cz="text-disabled",cy="middle",cx="selected",cw="background-light",cv="label",cu="groupbox",ct="decoration/arrows/down.png",cs="popup",ew="cell",ex="border-invalid",eu="input",ev="input-disabled",es="menu-button",et="input-focused-invalid",eq="toolbar-button",er="spinner",ey="input-focused",ez="list",dH="tooltip",dG="qx/static/blank.gif",dJ="radiobutton",dI="tree-item",dL="combobox",dK="treevirtual-contract",dN="scrollbar",dM="datechooser/nav-button",dE="center",dD="checkbox",u="treevirtual-expand",v="",w="textfield",x="-invalid",y="decoration/arrows/right.png",z="background-application",A="invalid",B="right-top",C="selectbox",D="text-title",eN="icon/16/places/folder-open.png",eM="radiobutton-hovered",eL="group-item",eK="scrollbar/button",eR="right",eQ="combobox/button",eP="virtual-list",eO="icon/16/places/folder.png",eT="radiobutton-checked-focused",eS="text-label",by="decoration/tree/closed.png",bz="table-scroller-header",bw="scrollbar-slider-horizontal",bx="checkbox-hovered",bC="checkbox-checked",bD="decoration/arrows/left.png",bA="radiobutton-checked",bB="button-focused",bu="text-light",bv="menu-slidebar-button",ba="checkbox-undetermined",Y="table-scroller-header-css",bc="text-input",bb="slidebar/button-forward",V="background-splitpane",U="text-hovered",X=".png",W="decoration/tree/open.png",T="default",S="decoration/arrows/down-small.png",bJ="datechooser",bK="slidebar/button-backward",bL="radiobutton-checked-disabled",bM="checkbox-focused",bF="radiobutton-checked-hovered",bG="treevirtual-folder",bH="shadow-popup",bI="icon/16/mimetypes/office-document.png",bN="background-medium",bO="icon/32/places/folder-open.png",bn="icon/22/places/folder-open.png",bm="table",bl="decoration/arrows/up.png",bk="decoration/form/",bj="radiobutton-focused",bi="button-checked",bh="decoration/window/maximize-active-hovered.png",bg="keyboard-focus",br="menu-css",bq="decoration/cursors/",bP="slidebar",bQ="tooltip-error-arrow",bR="table-scroller-focus-indicator",bS="popup-css",bT="move-frame",bU="nodrop",bV="decoration/table/boolean-true.png",bW="-invalid-css",bX="menu",bY="app-header",cJ="row-layer",cI="text-inactive",cH="move",cG="decoration/window/restore-active-hovered.png",cN="border-separator",cM="shadow-window",cL="tree-folder",cK="window-pane-css",cR="right.png",cQ="checkbox-undetermined-hovered",dr="window-incl-statusbar-css",ds="tabview-page-button-bottom-inactive",dp="tooltip-error",dq="window-css",dm="window-statusbar",dn="button-hovered",dk="decoration/scrollbar/scrollbar-",dl="background-tip",dz="menubar-css",dA="scrollbar-slider-horizontal-disabled",dS="radiobutton-disabled",dR="button-pressed",dU="table-pane",dT="decoration/window/close-active.png",dW="native",dV="button-invalid-shadow",dY="decoration/window/minimize-active-hovered.png",dX="menubar",dP="icon/16/actions/dialog-cancel.png",dO="tabview-page-button-top-inactive",eG="tabview-page-button-left-inactive",eH="menu-slidebar",eI="toolbar-button-checked",eJ="decoration/tree/open-selected.png",eC="decoration/window/minimize-inactive.png",eD="icon/16/apps/office-calendar.png",eE="group-item-css",eF="group",eA="tabview-page-button-right-inactive",eB="decoration/window/minimize-active.png",k="decoration/window/restore-inactive.png",j="checkbox-checked-focused",i="splitpane",h="combobox/textfield",g="decoration/window/close-active-hovered.png",f="qx/icon/Tango/16/actions/window-close.png",e="checkbox-pressed",d="button-disabled",c="selected-dragover",b="tooltip-error-css",I="decoration/window/maximize-inactive.png",J="dragover",G="scrollarea",H="scrollbar-vertical",M="decoration/menu/checkbox-invert.gif",N="decoration/toolbar/toolbar-handle-knob.gif",K="icon/22/mimetypes/office-document.png",L="table-header-cell",P="button-checked-focused",Q="up.png",cV="best-fit",cP="pane-css",dd="decoration/tree/closed-selected.png",cY="qx.theme.modern.Appearance",cE="text-active",cC="checkbox-disabled",be="toolbar-button-hovered",cF="decoration/form/checked.png",bp="progressive-table-header",bo="decoration/table/select-column-order.png",cj="decoration/menu/radiobutton.gif",ck="decoration/arrows/forward.png",cl="decoration/table/descending.png",cm="decoration/form/undetermined.png",cn="tree-file",co="window-captionbar-active",cp="checkbox-checked-hovered",cq="scrollbar-slider-vertical",cg="toolbar",ch="alias",cD="decoration/window/restore-active.png",dc="decoration/table/boolean-false.png",db="icon/32/mimetypes/office-document.png",da="tabview-pane",dh="decoration/arrows/rewind.png",dg="top",df="icon/16/actions/dialog-ok.png",de="progressbar-background",cX="table-header-cell-hovered",cW="window-statusbar-css",O="window",bt="text-gray",bs="decoration/menu/radiobutton-invert.gif",cO="text-placeholder",bE="slider",cU="toolbar-css",cT="keep-align",cS="down.png",bd="groupitem-text",dj="tabview-page-button-top-active",R="icon/22/places/folder.png",bf="decoration/window/maximize-active.png",ca="checkbox-checked-pressed",cb="decoration/window/close-inactive.png",cc="tabview-page-button-left-active",cd="toolbar-part",ce="decoration/splitpane/knob-vertical.png",cf=".gif",dC="virtual-row-layer-background-odd",ci="table-statusbar",eb="progressive-table-header-cell-css",ea="window-captionbar-inactive",ed="copy",ec="decoration/arrows/down-invert.png",ef="decoration/menu/checkbox.gif",ee="window-caption-active-text",cr="decoration/splitpane/knob-horizontal.png",dQ="group-css",di="icon/32/places/folder.png",dF="virtual-row-layer-background-even",E="toolbar-separator",F="tabview-page-button-bottom-active",dx="decoration/arrows/up-small.png",dy="decoration/table/ascending.png",dv="decoration/arrows/up-invert.png",dw="small",dt="tabview-page-button-right-active",du="-disabled",a="scrollbar-horizontal",dB="progressbar",s="checkbox-undetermined-focused",r="progressive-table-header-cell",q="menu-separator",p="tabview-pane-css",o="pane",n="htmlarea-background",m="decoration/arrows/right-invert.png",l="left.png",t="icon/16/actions/view-refresh.png";
qx.Theme.define(cY,{appearances:{"widget":{},"root":{style:function(eU){return {backgroundColor:z,textColor:eS,font:T};
}},"label":{style:function(eV){return {textColor:eV.disabled?cz:undefined};
}},"move-frame":{style:function(eW){return {decorator:ei};
}},"resize-frame":bT,"dragdrop-cursor":{style:function(eX){var eY=bU;

if(eX.copy){eY=ed;
}else if(eX.move){eY=cH;
}else if(eX.alias){eY=ch;
}return {source:bq+eY+cf,position:B,offset:[2,16,2,6]};
}},"image":{style:function(fa){return {opacity:!fa.replacement&&fa.disabled?0.3:1};
}},"atom":{},"atom/label":cv,"atom/icon":cA,"popup":{style:function(fb){var fc=qx.core.Environment.get(ej);
return {decorator:fc?bS:ei,backgroundColor:cw,shadow:fc?undefined:bH};
}},"button-frame":{alias:en,style:function(fd){var fh,fg;
var fe=[3,9];

if(fd.checked&&fd.focused&&!fd.inner){fh=P;
fg=undefined;
fe=[1,7];
}else if(fd.disabled){fh=d;
fg=undefined;
}else if(fd.pressed){fh=dR;
fg=U;
}else if(fd.checked){fh=bi;
fg=undefined;
}else if(fd.hovered){fh=dn;
fg=U;
}else if(fd.focused&&!fd.inner){fh=bB;
fg=undefined;
fe=[1,7];
}else{fh=eh;
fg=undefined;
}var ff;
if(qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)){if(fd.invalid&&!fd.disabled){fh+=bW;
}else{fh+=em;
}}else{ff=fd.invalid&&!fd.disabled?dV:undefined;
fe=[2,8];
}return {decorator:fh,textColor:fg,shadow:ff,padding:fe,margin:[1,0]};
}},"button-frame/image":{style:function(fi){return {opacity:!fi.replacement&&fi.disabled?0.5:1};
}},"button":{alias:el,include:el,style:function(fj){return {center:true};
}},"hover-button":{alias:en,include:en,style:function(fk){var fl=fk.hovered?cx:undefined;

if(fl&&qx.core.Environment.get(ep)){fl+=em;
}return {decorator:fl,textColor:fk.hovered?cB:undefined};
}},"splitbutton":{},"splitbutton/button":eh,"splitbutton/arrow":{alias:eh,include:eh,style:function(fm,fn){return {icon:ct,padding:[fn.padding[0],fn.padding[1]-6],marginLeft:1};
}},"checkbox":{alias:en,style:function(fo){var fp=qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
var fr;

if(fp){if(fo.checked){fr=cF;
}else if(fo.undetermined){fr=cm;
}else{fr=dG;
}}else{if(fo.checked){if(fo.disabled){fr=bC;
}else if(fo.focused){fr=j;
}else if(fo.pressed){fr=ca;
}else if(fo.hovered){fr=cp;
}else{fr=bC;
}}else if(fo.undetermined){if(fo.disabled){fr=ba;
}else if(fo.focused){fr=s;
}else if(fo.hovered){fr=cQ;
}else{fr=ba;
}}else if(!fo.disabled){if(fo.focused){fr=bM;
}else if(fo.pressed){fr=e;
}else if(fo.hovered){fr=bx;
}}fr=fr||dD;
var fq=fo.invalid&&!fo.disabled?x:v;
fr=bk+fr+fq+X;
}return {icon:fr,minWidth:fp?14:undefined,gap:fp?8:6};
}},"checkbox/icon":{style:function(fs){var fu=qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);

if(!fu){return {opacity:!fs.replacement&&fs.disabled?0.3:1};
}var fv;

if(fs.disabled){fv=cC;
}else if(fs.focused){fv=bM;
}else if(fs.hovered){fv=bx;
}else{fv=dD;
}fv+=fs.invalid&&!fs.disabled?x:v;
var ft;
if(fs.undetermined){ft=[2,0];
}return {decorator:fv,padding:ft,width:12,height:10};
}},"radiobutton":{alias:en,style:function(fw){var fx=qx.core.Environment.get(ek)&&qx.core.Environment.get(ej);
var fz;

if(fx){fz=dG;
}else{if(fw.checked&&fw.focused){fz=eT;
}else if(fw.checked&&fw.disabled){fz=bL;
}else if(fw.checked&&fw.hovered){fz=bF;
}else if(fw.checked){fz=bA;
}else if(fw.focused){fz=bj;
}else if(fw.hovered){fz=eM;
}else{fz=dJ;
}var fy=fw.invalid&&!fw.disabled?x:v;
fz=bk+fz+fy+X;
}return {icon:fz,gap:fx?8:6};
}},"radiobutton/icon":{style:function(fA){var fB=qx.core.Environment.get(ek)&&qx.core.Environment.get(ej);

if(!fB){return {opacity:!fA.replacement&&fA.disabled?0.3:1};
}var fC;

if(fA.disabled&&!fA.checked){fC=dS;
}else if(fA.checked&&fA.focused){fC=eT;
}else if(fA.checked&&fA.disabled){fC=bL;
}else if(fA.checked&&fA.hovered){fC=bF;
}else if(fA.checked){fC=bA;
}else if(fA.focused){fC=bj;
}else if(fA.hovered){fC=eM;
}else{fC=dJ;
}fC+=fA.invalid&&!fA.disabled?x:v;
return {decorator:fC,width:12,height:10};
}},"textfield":{style:function(fD){var fI;
var fG=!!fD.focused;
var fH=!!fD.invalid;
var fE=!!fD.disabled;

if(fG&&fH&&!fE){fI=et;
}else if(fG&&!fH&&!fE){fI=ey;
}else if(fE){fI=ev;
}else if(!fG&&fH&&!fE){fI=ex;
}else{fI=eu;
}
if(qx.core.Environment.get(ep)){fI+=em;
}var fF;

if(fD.disabled){fF=cz;
}else if(fD.showingPlaceholder){fF=cO;
}else{fF=bc;
}return {decorator:fI,padding:[2,4,1],textColor:fF};
}},"textarea":{include:w,style:function(fJ){return {padding:4};
}},"spinner":{style:function(fK){var fO;
var fM=!!fK.focused;
var fN=!!fK.invalid;
var fL=!!fK.disabled;

if(fM&&fN&&!fL){fO=et;
}else if(fM&&!fN&&!fL){fO=ey;
}else if(fL){fO=ev;
}else if(!fM&&fN&&!fL){fO=ex;
}else{fO=eu;
}
if(qx.core.Environment.get(ep)){fO+=em;
}return {decorator:fO};
}},"spinner/textfield":{style:function(fP){return {marginRight:2,padding:[2,4,1],textColor:fP.disabled?cz:bc};
}},"spinner/upbutton":{alias:el,include:el,style:function(fQ,fR){return {icon:dx,padding:[fR.padding[0]-1,fR.padding[1]-5],shadow:undefined,margin:0};
}},"spinner/downbutton":{alias:el,include:el,style:function(fS,fT){return {icon:S,padding:[fT.padding[0]-1,fT.padding[1]-5],shadow:undefined,margin:0};
}},"datefield":dL,"datefield/button":{alias:eQ,include:eQ,style:function(fU){return {icon:eD,padding:[0,3],decorator:undefined};
}},"datefield/textfield":h,"datefield/list":{alias:bJ,include:bJ,style:function(fV){return {decorator:undefined};
}},"groupbox":{style:function(fW){return {legendPosition:dg};
}},"groupbox/legend":{alias:en,style:function(fX){return {padding:[1,0,1,4],textColor:fX.invalid?A:D,font:eg};
}},"groupbox/frame":{style:function(fY){var ga=qx.core.Environment.get(ek);
return {padding:ga?10:12,margin:ga?1:undefined,decorator:ga?dQ:eF};
}},"check-groupbox":cu,"check-groupbox/legend":{alias:dD,include:dD,style:function(gb){return {padding:[1,0,1,4],textColor:gb.invalid?A:D,font:eg};
}},"radio-groupbox":cu,"radio-groupbox/legend":{alias:dJ,include:dJ,style:function(gc){return {padding:[1,0,1,4],textColor:gc.invalid?A:D,font:eg};
}},"scrollarea":{style:function(gd){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(ge){return {backgroundColor:z};
}},"scrollarea/pane":eo,"scrollarea/scrollbar-x":dN,"scrollarea/scrollbar-y":dN,"scrollbar":{style:function(gf){if(gf[dW]){return {};
}var gg=qx.core.Environment.get(ep);
var gh=gf.horizontal?a:H;

if(gg){gh+=em;
}return {width:gf.horizontal?undefined:16,height:gf.horizontal?16:undefined,decorator:gh,padding:1};
}},"scrollbar/slider":{alias:bE,style:function(gi){return {padding:gi.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:el,style:function(gj){var gk=qx.core.Environment.get(ep);
var gl=gj.horizontal?bw:cq;

if(gj.disabled){gl+=du;
}
if(gk){gl+=em;
}return {decorator:gl,minHeight:gj.horizontal?undefined:9,minWidth:gj.horizontal?9:undefined,padding:undefined,margin:0};
}},"scrollbar/button":{alias:el,include:el,style:function(gm){var gp=dk;

if(gm.left){gp+=l;
}else if(gm.right){gp+=cR;
}else if(gm.up){gp+=Q;
}else{gp+=cS;
}var go=qx.core.Environment.get(ep);

if(gm.left||gm.right){var gn=gm.left?3:4;
return {padding:go?[3,0,3,gn]:[2,0,2,gn],icon:gp,width:15,height:14,margin:0};
}else{return {padding:go?3:[3,2],icon:gp,width:14,height:15,margin:0};
}}},"scrollbar/button-begin":eK,"scrollbar/button-end":eK,"slider":{style:function(gq){var gu;
var gs=!!gq.focused;
var gt=!!gq.invalid;
var gr=!!gq.disabled;

if(gs&&gt&&!gr){gu=et;
}else if(gs&&!gt&&!gr){gu=ey;
}else if(gr){gu=ev;
}else if(!gs&&gt&&!gr){gu=ex;
}else{gu=eu;
}
if(qx.core.Environment.get(ep)){gu+=em;
}return {decorator:gu};
}},"slider/knob":{include:el,style:function(gv){return {decorator:gv.disabled?dA:bw,shadow:undefined,height:14,width:14,padding:0};
}},"list":{alias:G,style:function(gw){var gA;
var gy=!!gw.focused;
var gz=!!gw.invalid;
var gx=!!gw.disabled;

if(gy&&gz&&!gx){gA=et;
}else if(gy&&!gz&&!gx){gA=ey;
}else if(gx){gA=ev;
}else if(!gy&&gz&&!gx){gA=ex;
}else{gA=eu;
}
if(qx.core.Environment.get(ep)){gA+=em;
}return {backgroundColor:cw,decorator:gA};
}},"list/pane":eo,"listitem":{alias:en,style:function(gB){var gC;

if(gB.dragover){gC=gB.selected?c:J;
}else{gC=gB.selected?cx:undefined;

if(gC&&qx.core.Environment.get(ep)){gC+=em;
}}return {padding:gB.dragover?[4,4,2,4]:4,textColor:gB.selected?cB:undefined,decorator:gC};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:el,include:el,style:function(gD){return {padding:5,center:true,icon:gD.vertical?ct:y};
}},"slidebar/button-backward":{alias:el,include:el,style:function(gE){return {padding:5,center:true,icon:gE.vertical?bl:bD};
}},"tabview":{style:function(gF){return {contentPadding:16};
}},"tabview/bar":{alias:bP,style:function(gG){var gH=qx.core.Environment.get(ek)&&qx.core.Environment.get(ej)&&qx.core.Environment.get(ep);
var gI={marginBottom:gG.barTop?-1:0,marginTop:gG.barBottom?gH?-4:-7:0,marginLeft:gG.barRight?gH?-3:-5:0,marginRight:gG.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(gG.barTop||gG.barBottom){gI.paddingLeft=5;
gI.paddingRight=7;
}else{gI.paddingTop=5;
gI.paddingBottom=7;
}return gI;
}},"tabview/bar/button-forward":{include:bb,alias:bb,style:function(gJ){if(gJ.barTop||gJ.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bK,alias:bK,style:function(gK){if(gK.barTop||gK.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gL){var gM=qx.core.Environment.get(ep)&&qx.core.Environment.get(ek);
return {decorator:gM?p:da,minHeight:100,marginBottom:gL.barBottom?-1:0,marginTop:gL.barTop?-1:0,marginLeft:gL.barLeft?-1:0,marginRight:gL.barRight?-1:0};
}},"tabview-page":{alias:eo,include:eo,style:function(gN){var gO=qx.core.Environment.get(ep)&&qx.core.Environment.get(ek);
return {padding:gO?[4,3]:undefined};
}},"tabview-page/button":{alias:en,style:function(gP){var gW,gS=0;
var gV=0,gQ=0,gT=0,gU=0;
var gR=qx.core.Environment.get(ek)&&qx.core.Environment.get(ej)&&qx.core.Environment.get(ep);

if(gP.checked){if(gP.barTop){gW=dj;
gS=gR?[5,11]:[6,14];
gT=gP.firstTab?0:-5;
gU=gP.lastTab?0:-5;
}else if(gP.barBottom){gW=F;
gS=gR?[5,11]:[6,14];
gT=gP.firstTab?0:-5;
gU=gP.lastTab?0:-5;
gV=3;
}else if(gP.barRight){gW=dt;
gS=gR?[5,10]:[6,13];
gV=gP.firstTab?0:-5;
gQ=gP.lastTab?0:-5;
gT=2;
}else{gW=cc;
gS=gR?[5,10]:[6,13];
gV=gP.firstTab?0:-5;
gQ=gP.lastTab?0:-5;
}}else{if(gP.barTop){gW=dO;
gS=gR?[3,9]:[4,10];
gV=4;
gT=gP.firstTab?5:1;
gU=1;
}else if(gP.barBottom){gW=ds;
gS=gR?[3,9]:[4,10];
gQ=4;
gT=gP.firstTab?5:1;
gU=1;
gV=3;
}else if(gP.barRight){gW=eA;
gS=gR?[3,9]:[4,10];
gU=5;
gV=gP.firstTab?5:1;
gQ=1;
gT=3;
}else{gW=eG;
gS=gR?[3,9]:[4,10];
gT=5;
gV=gP.firstTab?5:1;
gQ=1;
gU=1;
}}
if(gW&&gR){gW+=em;
}return {zIndex:gP.checked?10:5,decorator:gW,padding:gS,marginTop:gV,marginBottom:gQ,marginLeft:gT,marginRight:gU,textColor:gP.disabled?cz:gP.checked?cE:cI};
}},"tabview-page/button/label":{alias:cv,style:function(gX){return {padding:[0,1,0,1],margin:gX.focused?0:1,decorator:gX.focused?bg:undefined};
}},"tabview-page/button/close-button":{alias:en,style:function(gY){return {icon:f};
}},"toolbar":{style:function(ha){var hb=qx.core.Environment.get(ep);
return {decorator:hb?cU:cg,spacing:2};
}},"toolbar/part":{style:function(hc){return {decorator:cd,spacing:2};
}},"toolbar/part/container":{style:function(hd){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(he){return {source:N,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:en,style:function(hf){var hh;

if(hf.pressed||(hf.checked&&!hf.hovered)||(hf.checked&&hf.disabled)){hh=eI;
}else if(hf.hovered&&!hf.disabled){hh=be;
}var hg=qx.core.Environment.get(ep)&&qx.core.Environment.get(ek);

if(hg&&hh){hh+=em;
}return {marginTop:2,marginBottom:2,padding:(hf.pressed||hf.checked||hf.hovered)&&!hf.disabled||(hf.disabled&&hf.checked)?3:5,decorator:hh};
}},"toolbar-menubutton":{alias:eq,include:eq,style:function(hi){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:cA,include:cA,style:function(hj){return {source:S};
}},"toolbar-splitbutton":{style:function(hk){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:eq,include:eq,style:function(hl){return {icon:ct,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:eq,include:eq,style:function(hm){if(hm.pressed||hm.checked||(hm.hovered&&!hm.disabled)){var hn=1;
}else{var hn=3;
}return {padding:hn,icon:ct,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(ho){return {decorator:E,margin:7};
}},"tree":ez,"tree-item":{style:function(hp){var hq=hp.selected?cx:undefined;

if(hq&&qx.core.Environment.get(ep)){hq+=em;
}return {padding:[2,6],textColor:hp.selected?cB:undefined,decorator:hq};
}},"tree-item/icon":{include:cA,style:function(hr){return {paddingRight:5};
}},"tree-item/label":cv,"tree-item/open":{include:cA,style:function(hs){var ht;

if(hs.selected&&hs.opened){ht=eJ;
}else if(hs.selected&&!hs.opened){ht=dd;
}else if(hs.opened){ht=W;
}else{ht=by;
}return {padding:[0,5,0,2],source:ht};
}},"tree-folder":{include:dI,alias:dI,style:function(hu){var hw,hv;

if(hu.small){hw=hu.opened?eN:eO;
hv=eN;
}else if(hu.large){hw=hu.opened?bO:di;
hv=bO;
}else{hw=hu.opened?bn:R;
hv=bn;
}return {icon:hw,iconOpened:hv};
}},"tree-file":{include:dI,alias:dI,style:function(hx){return {icon:hx.small?bI:hx.large?db:K};
}},"treevirtual":bm,"treevirtual-folder":{style:function(hy){return {icon:hy.opened?eN:eO};
}},"treevirtual-file":{include:bG,alias:bG,style:function(hz){return {icon:bI};
}},"treevirtual-line":{style:function(hA){return {icon:dG};
}},"treevirtual-contract":{style:function(hB){return {icon:W,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(hC){return {icon:by,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":dK,"treevirtual-only-expand":u,"treevirtual-start-contract":dK,"treevirtual-start-expand":u,"treevirtual-end-contract":dK,"treevirtual-end-expand":u,"treevirtual-cross-contract":dK,"treevirtual-cross-expand":u,"treevirtual-end":{style:function(hD){return {icon:dG};
}},"treevirtual-cross":{style:function(hE){return {icon:dG};
}},"tooltip":{include:cs,style:function(hF){return {backgroundColor:dl,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":en,"tooltip-error":{include:dH,style:function(hG){var hH=qx.core.Environment.get(ek)&&qx.core.Environment.get(ej);
return {textColor:cB,backgroundColor:undefined,placeMethod:eo,offset:[0,0,0,14],marginTop:-2,position:B,showTimeout:100,hideTimeout:10000,decorator:hH?b:dp,shadow:bQ,font:eg,padding:hH?3:undefined};
}},"tooltip-error/atom":en,"window":{style:function(hI){var hK=qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
var hL;
var hJ;

if(hK){if(hI.showStatusbar){hL=dr;
}else{hL=dq;
}}else{hJ=cM;
}return {decorator:hL,shadow:hJ,contentPadding:[10,10,10,10],margin:[0,5,5,0]};
}},"window/pane":{style:function(hM){var hN=qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
return {decorator:hN?cK:O};
}},"window/captionbar":{style:function(hO){var hP=qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
var hQ=hO.active?co:ea;

if(hP){hQ+=em;
}return {decorator:hQ,textColor:hO.active?ee:bt,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(hR){return {margin:[5,0,3,6]};
}},"window/title":{style:function(hS){return {alignY:cy,font:eg,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:en,style:function(hT){return {icon:hT.active?hT.hovered?dY:eB:eC,margin:[4,8,2,0]};
}},"window/restore-button":{alias:en,style:function(hU){return {icon:hU.active?hU.hovered?cG:cD:k,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:en,style:function(hV){return {icon:hV.active?hV.hovered?bh:bf:I,margin:[4,8,2,0]};
}},"window/close-button":{alias:en,style:function(hW){return {icon:hW.active?hW.hovered?g:dT:cb,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(hX){var hY=qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
return {padding:[2,6],decorator:hY?cW:dm,minHeight:18};
}},"window/statusbar-text":{style:function(ia){return {font:dw};
}},"iframe":{style:function(ib){return {decorator:ei};
}},"resizer":{style:function(ic){var id=qx.core.Environment.get(ej)&&qx.core.Environment.get(ek)&&qx.core.Environment.get(ep);
return {decorator:id?cP:o};
}},"splitpane":{style:function(ie){return {decorator:i};
}},"splitpane/splitter":{style:function(ig){return {width:ig.horizontal?3:undefined,height:ig.vertical?3:undefined,backgroundColor:V};
}},"splitpane/splitter/knob":{style:function(ih){return {source:ih.horizontal?cr:ce};
}},"splitpane/slider":{style:function(ii){return {width:ii.horizontal?3:undefined,height:ii.vertical?3:undefined,backgroundColor:V};
}},"selectbox":el,"selectbox/atom":en,"selectbox/popup":cs,"selectbox/list":{alias:ez},"selectbox/arrow":{include:cA,style:function(ij){return {source:ct,paddingLeft:5};
}},"datechooser":{style:function(ik){var ip;
var im=!!ik.focused;
var io=!!ik.invalid;
var il=!!ik.disabled;

if(im&&io&&!il){ip=et;
}else if(im&&!io&&!il){ip=ey;
}else if(il){ip=ev;
}else if(!im&&io&&!il){ip=ex;
}else{ip=eu;
}
if(qx.core.Environment.get(ep)){ip+=em;
}return {padding:2,decorator:ip,backgroundColor:cw};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:el,alias:el,style:function(iq){var ir={padding:[2,4],shadow:undefined};

if(iq.lastYear){ir.icon=dh;
ir.marginRight=1;
}else if(iq.lastMonth){ir.icon=bD;
}else if(iq.nextYear){ir.icon=ck;
ir.marginLeft=1;
}else if(iq.nextMonth){ir.icon=y;
}return ir;
}},"datechooser/last-year-button-tooltip":dH,"datechooser/last-month-button-tooltip":dH,"datechooser/next-year-button-tooltip":dH,"datechooser/next-month-button-tooltip":dH,"datechooser/last-year-button":dM,"datechooser/last-month-button":dM,"datechooser/next-month-button":dM,"datechooser/next-year-button":dM,"datechooser/month-year-label":{style:function(is){return {font:eg,textAlign:dE,textColor:is.disabled?cz:undefined};
}},"datechooser/date-pane":{style:function(it){return {textColor:it.disabled?cz:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(iu){return {textColor:iu.disabled?cz:iu.weekend?bu:undefined,textAlign:dE,paddingTop:2,backgroundColor:bN};
}},"datechooser/week":{style:function(iv){return {textAlign:dE,padding:[2,4],backgroundColor:bN};
}},"datechooser/day":{style:function(iw){var ix=iw.disabled?undefined:iw.selected?cx:undefined;

if(ix&&qx.core.Environment.get(ep)){ix+=em;
}return {textAlign:dE,decorator:ix,textColor:iw.disabled?cz:iw.selected?cB:iw.otherMonth?bu:undefined,font:iw.today?eg:undefined,padding:[2,4]};
}},"combobox":{style:function(iy){var iC;
var iA=!!iy.focused;
var iB=!!iy.invalid;
var iz=!!iy.disabled;

if(iA&&iB&&!iz){iC=et;
}else if(iA&&!iB&&!iz){iC=ey;
}else if(iz){iC=ev;
}else if(!iA&&iB&&!iz){iC=ex;
}else{iC=eu;
}
if(qx.core.Environment.get(ep)){iC+=em;
}return {decorator:iC};
}},"combobox/popup":cs,"combobox/list":{alias:ez},"combobox/button":{include:el,alias:el,style:function(iD,iE){var iF={icon:ct,padding:[iE.padding[0],iE.padding[1]-6],shadow:undefined,margin:undefined};

if(iD.selected){iF.decorator=bB;
}return iF;
}},"combobox/textfield":{include:w,style:function(iG){return {decorator:undefined};
}},"menu":{style:function(iH){var iI=qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
var iJ={decorator:iI?br:bX,shadow:iI?undefined:bH,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:iH.submenu||iH.contextmenu?cV:cT};

if(iH.submenu){iJ.position=B;
iJ.offset=[-2,-3];
}return iJ;
}},"menu/slidebar":eH,"menu-slidebar":eo,"menu-slidebar-button":{style:function(iK){var iL=iK.hovered?cx:undefined;

if(iL&&qx.core.Environment.get(ep)){iL+=em;
}return {decorator:iL,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:bv,style:function(iM){return {icon:iM.hovered?dv:bl};
}},"menu-slidebar/button-forward":{include:bv,style:function(iN){return {icon:iN.hovered?ec:ct};
}},"menu-separator":{style:function(iO){return {height:0,decorator:q,margin:[4,2]};
}},"menu-button":{alias:en,style:function(iP){var iQ=iP.selected?cx:undefined;

if(iQ&&qx.core.Environment.get(ep)){iQ+=em;
}return {decorator:iQ,textColor:iP.selected?cB:undefined,padding:[4,6]};
}},"menu-button/icon":{include:cA,style:function(iR){return {alignY:cy};
}},"menu-button/label":{include:cv,style:function(iS){return {alignY:cy,padding:1};
}},"menu-button/shortcut":{include:cv,style:function(iT){return {alignY:cy,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:cA,style:function(iU){return {source:iU.selected?m:y,alignY:cy};
}},"menu-checkbox":{alias:es,include:es,style:function(iV){return {icon:!iV.checked?undefined:iV.selected?M:ef};
}},"menu-radiobutton":{alias:es,include:es,style:function(iW){return {icon:!iW.checked?undefined:iW.selected?bs:cj};
}},"menubar":{style:function(iX){var iY=qx.core.Environment.get(ep);
return {decorator:iY?dz:dX};
}},"menubar-button":{alias:en,style:function(ja){var jb=(ja.pressed||ja.hovered)&&!ja.disabled?cx:undefined;

if(jb&&qx.core.Environment.get(ep)){jb+=em;
}return {decorator:jb,textColor:ja.pressed||ja.hovered?cB:undefined,padding:[3,8]};
}},"colorselector":eo,"colorselector/control-bar":eo,"colorselector/control-pane":eo,"colorselector/visual-pane":cu,"colorselector/preset-grid":eo,"colorselector/colorbucket":{style:function(jc){return {decorator:ei,width:16,height:16};
}},"colorselector/preset-field-set":cu,"colorselector/input-field-set":cu,"colorselector/preview-field-set":cu,"colorselector/hex-field-composite":eo,"colorselector/hex-field":w,"colorselector/rgb-spinner-composite":eo,"colorselector/rgb-spinner-red":er,"colorselector/rgb-spinner-green":er,"colorselector/rgb-spinner-blue":er,"colorselector/hsb-spinner-composite":eo,"colorselector/hsb-spinner-hue":er,"colorselector/hsb-spinner-saturation":er,"colorselector/hsb-spinner-brightness":er,"colorselector/preview-content-old":{style:function(jd){return {decorator:ei,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(je){return {decorator:ei,backgroundColor:cw,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(jf){return {decorator:ei,margin:5};
}},"colorselector/brightness-field":{style:function(jg){return {decorator:ei,margin:[5,7]};
}},"colorselector/hue-saturation-pane":eo,"colorselector/hue-saturation-handle":eo,"colorselector/brightness-pane":eo,"colorselector/brightness-handle":eo,"colorpopup":{alias:cs,include:cs,style:function(jh){return {padding:5,backgroundColor:z};
}},"colorpopup/field":{style:function(ji){return {decorator:ei,margin:2,width:14,height:14,backgroundColor:cw};
}},"colorpopup/selector-button":eh,"colorpopup/auto-button":eh,"colorpopup/preview-pane":cu,"colorpopup/current-preview":{style:function(jj){return {height:20,padding:4,marginLeft:4,decorator:ei,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(jk){return {height:20,padding:4,marginRight:4,decorator:ei,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:eh,include:eh,style:function(jl){return {icon:df};
}},"colorpopup/colorselector-cancelbutton":{alias:eh,include:eh,style:function(jm){return {icon:dP};
}},"table":{alias:eo,style:function(jn){return {decorator:bm};
}},"table/statusbar":{style:function(jo){return {decorator:ci,padding:[0,2]};
}},"table/column-button":{alias:el,style:function(jp){var jq=qx.core.Environment.get(ep);
return {decorator:jq?Y:bz,padding:3,icon:bo};
}},"table-column-reset-button":{include:es,alias:es,style:function(){return {icon:t};
}},"table-scroller":eo,"table-scroller/scrollbar-x":dN,"table-scroller/scrollbar-y":dN,"table-scroller/header":{style:function(jr){var js=qx.core.Environment.get(ep);
return {decorator:js?Y:bz};
}},"table-scroller/pane":{style:function(jt){return {backgroundColor:dU};
}},"table-scroller/focus-indicator":{style:function(ju){return {decorator:bR};
}},"table-scroller/resize-line":{style:function(jv){return {backgroundColor:cN,width:2};
}},"table-header-cell":{alias:en,style:function(jw){return {minWidth:13,minHeight:20,padding:jw.hovered?[3,4,2,4]:[3,4],decorator:jw.hovered?cX:L,sortIcon:jw.sorted?(jw.sortedAscending?dy:cl):undefined};
}},"table-header-cell/label":{style:function(jx){return {minWidth:0,alignY:cy,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(jy){return {alignY:cy,alignX:eR};
}},"table-header-cell/icon":{style:function(jz){return {minWidth:0,alignY:cy,paddingRight:5};
}},"table-editor-textfield":{include:w,style:function(jA){return {decorator:undefined,padding:[2,2],backgroundColor:cw};
}},"table-editor-selectbox":{include:C,alias:C,style:function(jB){return {padding:[0,2],backgroundColor:cw};
}},"table-editor-combobox":{include:dL,alias:dL,style:function(jC){return {decorator:undefined,backgroundColor:cw};
}},"progressive-table-header":{alias:eo,style:function(jD){return {decorator:bp};
}},"progressive-table-header-cell":{alias:en,style:function(jE){var jF=qx.core.Environment.get(ep);
return {minWidth:40,minHeight:25,paddingLeft:6,decorator:jF?eb:r};
}},"app-header":{style:function(jG){return {font:eg,textColor:cB,padding:[8,12],decorator:bY};
}},"app-header-label":cv,"virtual-list":ez,"virtual-list/row-layer":cJ,"row-layer":{style:function(jH){return {colorEven:dF,colorOdd:dC};
}},"group-item":{include:cv,alias:cv,style:function(jI){return {padding:4,decorator:qx.core.Environment.get(ep)?eE:eL,textColor:bd,font:eg};
}},"virtual-selectbox":C,"virtual-selectbox/dropdown":cs,"virtual-selectbox/dropdown/list":{alias:eP},"virtual-combobox":dL,"virtual-combobox/dropdown":cs,"virtual-combobox/dropdown/list":{alias:eP},"virtual-tree":ez,"virtual-tree-folder":cL,"virtual-tree-file":cn,"column-layer":eo,"cell":{style:function(jJ){return {textColor:jJ.selected?cB:eS,padding:[3,6],font:T};
}},"cell-string":ew,"cell-number":{include:ew,style:function(jK){return {textAlign:eR};
}},"cell-image":ew,"cell-boolean":{include:ew,style:function(jL){return {iconTrue:bV,iconFalse:dc};
}},"cell-atom":ew,"cell-date":ew,"cell-html":ew,"htmlarea":{"include":eo,style:function(jM){return {backgroundColor:n};
}},"progressbar":{style:function(jN){return {decorator:dB,padding:[1],backgroundColor:de};
}},"progressbar/progress":{style:function(jO){var jP=jO.disabled?eL:cx;

if(qx.core.Environment.get(ep)){jP+=em;
}return {decorator:jP};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var t="os.version",s="os.name",r="win",q="7",p="vista",o="osx",n="Liberation Sans",m="Tahoma",l="sans-serif",k="Arial",d="Lucida Grande",j="Candara",g="Segoe UI",c="Consolas",b="monospace",f="Courier New",e="Lucida Console",h="Monaco",a="qx.theme.modern.Font",i="DejaVu Sans Mono";
qx.Theme.define(a,{fonts:{"default":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?12:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l]},"bold":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?12:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l],bold:true},"small":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?11:10,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l]},"monospace":{size:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[e,h]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[c]:[c,i,f,b]}}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
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
}else if(this.isRgbString(m)){return this.__je();
}else if(this.isHex3String(m)){return this.__jg();
}else if(this.isHex6String(m)){return this.__jh();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__je();
}else if(this.isRgbaString(n)){return this.__jf();
}else if(this.isHex3String(n)){return this.__jg();
}else if(this.isHex6String(n)){return this.__jh();
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
},__je:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__jf:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__jg:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__jh:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__jg(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__jh(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__jg(P);
}
if(this.isHex6String(P)){return this.__jh(P);
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
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__en={};
this.add(a,h);
},members:{__en:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__en[k]){return this.__en[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__en[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__en[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__en[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__en){v[w]=this.__en[w];
}return v;
}},destruct:function(){this.__en=null;
}});
})();
(function(){var k="px",j="engine.name",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="b64",I="scale-y",H="qx/icon",G="repeat",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',r="qx.bom.element.Decoration",s="', sizingMethod='",p='"/>',q="png",n="')",o='"></div>',l='" style="',m="none",t="webkit",u=" ",w="repeat-x",v="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(r,{statics:{DEBUG:false,__iF:{},__iG:(qx.core.Environment.get(j)==c)&&qx.core.Environment.get(D)<9,__iH:qx.core.Environment.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__iI:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(J,K,L,M){var O=this.getTagName(L,K);

if(O!=J.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var P=this.getAttributes(K,L,M);

if(O===h){J.src=P.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(J.style.backgroundPosition!=g&&P.style.backgroundPosition===undefined){P.style.backgroundPosition=null;
}if(J.style.clip!=g&&P.style.clip===undefined){P.style.clip=null;
}var N=qx.bom.element.Style;
N.setStyles(J,P.style);
if(this.__iG){try{J.filters[v].apply();
}catch(e){}}},create:function(Q,R,S){var T=this.getTagName(R,Q);
var V=this.getAttributes(Q,R,S);
var U=qx.bom.element.Style.compile(V.style);

if(T===h){return z+V.src+l+U+p;
}else{return B+U+o;
}},getTagName:function(W,X){if((qx.core.Environment.get(j)==c)){if(X&&this.__iG&&this.__iH[W]&&qx.lang.String.endsWith(X,F)){return i;
}}return this.__iI[W];
},getAttributes:function(Y,ba,bb){if(!bb){bb={};
}
if(!bb.position){bb.position=x;
}
if((qx.core.Environment.get(j)==c)){bb.fontSize=0;
bb.lineHeight=0;
}else if((qx.core.Environment.get(j)==t)){bb.WebkitUserDrag=m;
}var bd=qx.util.ResourceManager.getInstance().getImageFormat(Y)||qx.io.ImageLoader.getFormat(Y);
var bc;
if(this.__iG&&this.__iH[ba]&&bd===q){bc=this.__iL(bb,ba,Y);
}else{if(ba===b){bc=this.__iM(bb,ba,Y);
}else if(ba===d||ba===I){bc=this.__iN(bb,ba,Y);
}else{bc=this.__iQ(bb,ba,Y);
}}return bc;
},__iJ:function(be,bf,bh){if(be.width==null&&bf!=null){be.width=bf+k;
}
if(be.height==null&&bh!=null){be.height=bh+k;
}return be;
},__iK:function(bi){var bj=qx.util.ResourceManager.getInstance().getImageWidth(bi)||qx.io.ImageLoader.getWidth(bi);
var bk=qx.util.ResourceManager.getInstance().getImageHeight(bi)||qx.io.ImageLoader.getHeight(bi);
return {width:bj,height:bk};
},__iL:function(bl,bm,bn){var bq=this.__iK(bn);
bl=this.__iJ(bl,bq.width,bq.height);
var bp=bm==f?E:b;
var bo=C+qx.util.ResourceManager.getInstance().toUri(bn)+s+bp+n;
bl.filter=bo;
bl.backgroundImage=bl.backgroundRepeat=g;
return {style:bl};
},__iM:function(br,bs,bt){var bu=qx.util.ResourceManager.getInstance().toUri(bt);
var bv=this.__iK(bt);
br=this.__iJ(br,bv.width,bv.height);
return {src:bu,style:br};
},__iN:function(bw,bx,by){var bz=qx.util.ResourceManager.getInstance();
var bC=bz.getCombinedFormat(by);
var bE=this.__iK(by);
var bA;

if(bC){var bD=bz.getData(by);
var bB=bD[4];

if(bC==a){bA=bz.toDataUri(by);
}else{bA=bz.toUri(bB);
}
if(bx===d){bw=this.__iO(bw,bD,bE.height);
}else{bw=this.__iP(bw,bD,bE.width);
}return {src:bA,style:bw};
}else{if(bx==d){bw.height=bE.height==null?null:bE.height+k;
}else if(bx==I){bw.width=bE.width==null?null:bE.width+k;
}bA=bz.toUri(by);
return {src:bA,style:bw};
}},__iO:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().getImageHeight(bG[4]);
bF.clip={top:-bG[6],height:bH};
bF.height=bI+k;
if(bF.top!=null){bF.top=(parseInt(bF.top,10)+bG[6])+k;
}else if(bF.bottom!=null){bF.bottom=(parseInt(bF.bottom,10)+bH-bI-bG[6])+k;
}return bF;
},__iP:function(bJ,bK,bL){var bM=qx.util.ResourceManager.getInstance().getImageWidth(bK[4]);
bJ.clip={left:-bK[5],width:bL};
bJ.width=bM+k;
if(bJ.left!=null){bJ.left=(parseInt(bJ.left,10)+bK[5])+k;
}else if(bJ.right!=null){bJ.right=(parseInt(bJ.right,10)+bL-bM-bK[5])+k;
}return bJ;
},__iQ:function(bN,bO,bP){var bS=qx.util.ResourceManager.getInstance();
var bX=bS.getCombinedFormat(bP);
var ca=this.__iK(bP);
if(bX&&bO!==G){var bY=bS.getData(bP);
var bW=bY[4];

if(bX==a){var bV=bS.toDataUri(bP);
var bU=bT=0;
}else{var bV=bS.toUri(bW);
var bU=bY[5];
var bT=bY[6];
}var bQ=qx.bom.element.Background.getStyles(bV,bO,bU,bT);

for(var bR in bQ){bN[bR]=bQ[bR];
}
if(ca.width!=null&&bN.width==null&&(bO==A||bO===f)){bN.width=ca.width+k;
}
if(ca.height!=null&&bN.height==null&&(bO==w||bO===f)){bN.height=ca.height+k;
}return {style:bN};
}else{bN=this.__iJ(bN,ca.width,ca.height);
bN=this.__iR(bN,bP,bO);
return {style:bN};
}},__iR:function(cb,cc,cd){var top=null;
var ch=null;

if(cb.backgroundPosition){var ce=cb.backgroundPosition.split(u);
ch=parseInt(ce[0],10);

if(isNaN(ch)){ch=ce[0];
}top=parseInt(ce[1],10);

if(isNaN(top)){top=ce[1];
}}var cg=qx.bom.element.Background.getStyles(cc,cd,ch,top);

for(var cf in cg){cb[cf]=cg[cf];
}if(cb.filter){cb.filter=g;
}return cb;
},__iS:function(ci){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ci)&&ci.indexOf(H)==-1){if(!this.__iF[ci]){qx.log.Logger.debug("Potential clipped image candidate: "+ci);
this.__iF[ci]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Environment.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__iG;
},"default":function(){return false;
}})}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__ja:[n,null,m,i,null,r,k,null,r],__jb:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__jc:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__jd:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__jc(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__jd(G)){G=q+G+q;
}var H=this.__ja;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__jb;
}var L=this.__jc(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__jd(N)){O=j+N+p;
}else{O=f+N+e;
}var M={backgroundPosition:L,backgroundImage:O};

if(J!=null){M.backgroundRepeat=J;
}return M;
},set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);

for(var U in T){P.style[U]=T[U];
}}}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(z,A){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setBorderImage(z);
}
if(A!=null){this.setSlice(A);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__uf:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__uf;
},getMarkup:function(){if(this.__uf){return this.__uf;
}var B=this._resolveImageUrl(this.getBorderImage());
var C=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var D=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__uf=[x,qx.bom.element.Style.compile({"borderImage":o+B+p+C.join(f)+f+D,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:C.join(b)+g}),y].join(q);
return this.__uf;
},resize:function(E,F,G){E.style.width=F+g;
E.style.height=G+g;
},tint:function(H,I){},_applyStyle:function(){},_resolveImageUrl:function(J){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(J));
}},destruct:function(){this.__uf=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="engine.version",e="scale-x",d="scale-y",c="-tr",b="-l",a='</div>',z="scale",y="-br",x="-t",w="browser.quirksmode",v="-tl",u="-r",t='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',s="_applyBaseImage",r="-b",q="String",o="",p="-bl",m="qx.ui.decoration.GridDiv",n="-c",k="mshtml",l="engine.name";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,construct:function(A,B){qx.ui.decoration.Abstract.call(this);
if(A!=null){this.setBaseImage(A);
}
if(B!=null){this.setInsets(B);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{__ug:null,__uh:null,__ui:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ug;
},getMarkup:function(){if(this.__ug){return this.__ug;
}var C=qx.bom.element.Decoration;
var D=this.__uh;
var E=this.__ui;
var F=[];
F.push(t);
F.push(C.create(D.tl,g,{top:0,left:0}));
F.push(C.create(D.t,e,{top:0,left:E.left+j}));
F.push(C.create(D.tr,g,{top:0,right:0}));
F.push(C.create(D.bl,g,{bottom:0,left:0}));
F.push(C.create(D.b,e,{bottom:0,left:E.left+j}));
F.push(C.create(D.br,g,{bottom:0,right:0}));
F.push(C.create(D.l,d,{top:E.top+j,left:0}));
F.push(C.create(D.c,z,{top:E.top+j,left:E.left+j}));
F.push(C.create(D.r,d,{top:E.top+j,right:0}));
F.push(a);
return this.__ug=F.join(o);
},resize:function(G,H,I){var J=this.__ui;
var innerWidth=H-J.left-J.right;
var innerHeight=I-J.top-J.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}G.style.width=H+j;
G.style.height=I+j;
G.childNodes[1].style.width=innerWidth+j;
G.childNodes[4].style.width=innerWidth+j;
G.childNodes[7].style.width=innerWidth+j;
G.childNodes[6].style.height=innerHeight+j;
G.childNodes[7].style.height=innerHeight+j;
G.childNodes[8].style.height=innerHeight+j;

if((qx.core.Environment.get(l)==k)){if(parseFloat(qx.core.Environment.get(f))<7||(qx.core.Environment.get(w)&&parseFloat(qx.core.Environment.get(f))<8)){if(H%2==1){G.childNodes[2].style.marginRight=h;
G.childNodes[5].style.marginRight=h;
G.childNodes[8].style.marginRight=h;
}else{G.childNodes[2].style.marginRight=i;
G.childNodes[5].style.marginRight=i;
G.childNodes[8].style.marginRight=i;
}
if(I%2==1){G.childNodes[3].style.marginBottom=h;
G.childNodes[4].style.marginBottom=h;
G.childNodes[5].style.marginBottom=h;
}else{G.childNodes[3].style.marginBottom=i;
G.childNodes[4].style.marginBottom=i;
G.childNodes[5].style.marginBottom=i;
}}}},tint:function(K,L){},_applyBaseImage:function(M,N){if(M){var R=this._resolveImageUrl(M);
var S=/(.*)(\.[a-z]+)$/.exec(R);
var Q=S[1];
var P=S[2];
var O=this.__uh={tl:Q+v+P,t:Q+x+P,tr:Q+c+P,bl:Q+p+P,b:Q+r+P,br:Q+y+P,l:Q+b+P,c:Q+n+P,r:Q+u+P};
this.__ui=this._computeEdgeSizes(O);
}},_resolveImageUrl:function(T){return qx.util.AliasManager.getInstance().resolve(T);
},_computeEdgeSizes:function(U){var V=qx.util.ResourceManager.getInstance();
return {top:V.getImageHeight(U.t),bottom:V.getImageHeight(U.b),left:V.getImageWidth(U.l),right:V.getImageWidth(U.r)};
}},destruct:function(){this.__ug=this.__uh=this.__ui=null;
}});
})();


qx.$$loader.init();

