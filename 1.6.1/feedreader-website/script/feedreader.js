(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"feedreader.WebsiteApplication","qx.debug":false,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.nativeScrollBars":true,"qx.optimization.basecalls":true,"qx.optimization.comments":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.variants":true,"qx.revision":"","qx.theme":"qx.theme.Modern","qx.version":"1.6.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"feedreader":{"resourceUri":"resource","sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script"},"qxc.ui.versionlabel":{"resourceUri":"resource","sourceUri":"script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"de":null,"en":null,"es":null,"fr":null,"it":null,"nl":null,"ro":null,"sv":null};
qx.$$locales = {"C":null,"de":null,"en":null,"es":null,"fr":null,"it":null,"nl":null,"ro":null,"sv":null};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:feedreader.eb2d3eea6ceb.js"]}},
  urisBefore : [],
  cssBefore : [],
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

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"EEE d.","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"EEE, d.M.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMd":"d. MMM y","cldr_date_time_format_yMd":"d.M.y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Jun","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"Tag","dayperiod":"Tageshälfte","era":"Epoche","hour":"Stunde","minute":"Minute","month":"Monat","quotationEnd":"“","quotationStart":"„","second":"Sekunde","week":"Woche","weekday":"Wochentag","year":"Jahr","zone":"Zone"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"es":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"a.m.","cldr_date_format_full":"EEEE d 'de' MMMM 'de' y","cldr_date_format_long":"d 'de' MMMM 'de' y","cldr_date_format_medium":"dd/MM/yyyy","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMd":"d 'de' MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd-MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_h":"hh a","cldr_date_time_format_hm":"hh:mm a","cldr_date_time_format_hms":"hh:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE d/M/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d MMM y","cldr_date_time_format_yMMMM":"MMMM 'de' y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d/M/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM-yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ 'de' yy","cldr_date_time_format_yyyyMM":"MM/yyyy","cldr_day_format_abbreviated_fri":"vie","cldr_day_format_abbreviated_mon":"lun","cldr_day_format_abbreviated_sat":"sáb","cldr_day_format_abbreviated_sun":"dom","cldr_day_format_abbreviated_thu":"jue","cldr_day_format_abbreviated_tue":"mar","cldr_day_format_abbreviated_wed":"mié","cldr_day_format_wide_fri":"viernes","cldr_day_format_wide_mon":"lunes","cldr_day_format_wide_sat":"sábado","cldr_day_format_wide_sun":"domingo","cldr_day_format_wide_thu":"jueves","cldr_day_format_wide_tue":"martes","cldr_day_format_wide_wed":"miércoles","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"ene","cldr_month_format_abbreviated_10":"oct","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dic","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"abr","cldr_month_format_abbreviated_5":"may","cldr_month_format_abbreviated_6":"jun","cldr_month_format_abbreviated_7":"jul","cldr_month_format_abbreviated_8":"ago","cldr_month_format_abbreviated_9":"sep","cldr_month_format_wide_1":"enero","cldr_month_format_wide_10":"octubre","cldr_month_format_wide_11":"noviembre","cldr_month_format_wide_12":"diciembre","cldr_month_format_wide_2":"febrero","cldr_month_format_wide_3":"marzo","cldr_month_format_wide_4":"abril","cldr_month_format_wide_5":"mayo","cldr_month_format_wide_6":"junio","cldr_month_format_wide_7":"julio","cldr_month_format_wide_8":"agosto","cldr_month_format_wide_9":"septiembre","cldr_month_stand-alone_abbreviated_5":"mayo","cldr_month_stand-alone_narrow_1":"E","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"p.m.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"día","dayperiod":"periodo del día","era":"era","hour":"hora","minute":"minuto","month":"mes","quotationEnd":"’","quotationStart":"‘","second":"segundo","week":"semana","weekday":"día de la semana","year":"año","zone":"zona"},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"EEE d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"EEE d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d/M/yyyy","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_abbreviated_1":"janv.","cldr_month_stand-alone_abbreviated_10":"oct.","cldr_month_stand-alone_abbreviated_11":"nov.","cldr_month_stand-alone_abbreviated_12":"déc.","cldr_month_stand-alone_abbreviated_2":"févr.","cldr_month_stand-alone_abbreviated_3":"mars","cldr_month_stand-alone_abbreviated_4":"avr.","cldr_month_stand-alone_abbreviated_7":"juil.","cldr_month_stand-alone_abbreviated_9":"sept.","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"jour","dayperiod":"cadran","era":"ère","hour":"heure","minute":"minute","month":"mois","quotationEnd":"»","quotationStart":"«","second":"seconde","week":"semaine","weekday":"jour de la semaine","year":"année","zone":"fuseau horaire"},"it":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"m.","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"dd MMMM y","cldr_date_format_medium":"dd/MMM/y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"EEE d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"EEE d MMM","cldr_date_time_format_MMMMdd":"dd MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_h":"hh a","cldr_date_time_format_hm":"hh:mm a","cldr_date_time_format_hms":"hh:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, d/M/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d/M/y","cldr_date_time_format_yQ":"Q-yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven","cldr_day_format_abbreviated_mon":"lun","cldr_day_format_abbreviated_sat":"sab","cldr_day_format_abbreviated_sun":"dom","cldr_day_format_abbreviated_thu":"gio","cldr_day_format_abbreviated_tue":"mar","cldr_day_format_abbreviated_wed":"mer","cldr_day_format_wide_fri":"venerdì","cldr_day_format_wide_mon":"lunedì","cldr_day_format_wide_sat":"sabato","cldr_day_format_wide_sun":"domenica","cldr_day_format_wide_thu":"giovedì","cldr_day_format_wide_tue":"martedì","cldr_day_format_wide_wed":"mercoledì","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"G","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Venerdì","cldr_day_stand-alone_wide_mon":"Lunedì","cldr_day_stand-alone_wide_sat":"Sabato","cldr_day_stand-alone_wide_sun":"Domenica","cldr_day_stand-alone_wide_thu":"Giovedì","cldr_day_stand-alone_wide_tue":"Martedì","cldr_day_stand-alone_wide_wed":"Mercoledì","cldr_month_format_abbreviated_1":"gen","cldr_month_format_abbreviated_10":"ott","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dic","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"apr","cldr_month_format_abbreviated_5":"mag","cldr_month_format_abbreviated_6":"giu","cldr_month_format_abbreviated_7":"lug","cldr_month_format_abbreviated_8":"ago","cldr_month_format_abbreviated_9":"set","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"G","cldr_month_format_narrow_7":"L","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"gennaio","cldr_month_format_wide_10":"ottobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"dicembre","cldr_month_format_wide_2":"febbraio","cldr_month_format_wide_3":"marzo","cldr_month_format_wide_4":"aprile","cldr_month_format_wide_5":"maggio","cldr_month_format_wide_6":"giugno","cldr_month_format_wide_7":"luglio","cldr_month_format_wide_8":"agosto","cldr_month_format_wide_9":"settembre","cldr_month_stand-alone_abbreviated_10":"ott","cldr_month_stand-alone_abbreviated_11":"nov","cldr_month_stand-alone_abbreviated_12":"dic","cldr_month_stand-alone_abbreviated_2":"feb","cldr_month_stand-alone_abbreviated_3":"mar","cldr_month_stand-alone_abbreviated_4":"apr","cldr_month_stand-alone_abbreviated_5":"mag","cldr_month_stand-alone_abbreviated_6":"giu","cldr_month_stand-alone_abbreviated_7":"lug","cldr_month_stand-alone_abbreviated_8":"ago","cldr_month_stand-alone_abbreviated_9":"set","cldr_month_stand-alone_narrow_1":"G","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"G","cldr_month_stand-alone_narrow_7":"L","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"Gennaio","cldr_month_stand-alone_wide_10":"Ottobre","cldr_month_stand-alone_wide_11":"Novembre","cldr_month_stand-alone_wide_12":"Dicembre","cldr_month_stand-alone_wide_2":"Febbraio","cldr_month_stand-alone_wide_3":"Marzo","cldr_month_stand-alone_wide_4":"Aprile","cldr_month_stand-alone_wide_5":"Maggio","cldr_month_stand-alone_wide_6":"Giugno","cldr_month_stand-alone_wide_7":"Luglio","cldr_month_stand-alone_wide_8":"Agosto","cldr_month_stand-alone_wide_9":"Settembre","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"p.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"giorno","dayperiod":"periodo del giorno","era":"era","hour":"ora","minute":"minuto","month":"mese","quotationEnd":"’","quotationStart":"‘","second":"secondo","week":"settimana","weekday":"giorno della settimana","year":"anno","zone":"zona"},"nl":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd-MM-yy","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d-M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d-MMM","cldr_date_time_format_MMd":"d-MM","cldr_date_time_format_MMdd":"dd-MM","cldr_date_time_format_Md":"d-M","cldr_date_time_format_d":"d","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M-y","cldr_date_time_format_yMEd":"EEE d-M-y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d-M-y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM-yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"vr","cldr_day_format_abbreviated_mon":"ma","cldr_day_format_abbreviated_sat":"za","cldr_day_format_abbreviated_sun":"zo","cldr_day_format_abbreviated_thu":"do","cldr_day_format_abbreviated_tue":"di","cldr_day_format_abbreviated_wed":"wo","cldr_day_format_wide_fri":"vrijdag","cldr_day_format_wide_mon":"maandag","cldr_day_format_wide_sat":"zaterdag","cldr_day_format_wide_sun":"zondag","cldr_day_format_wide_thu":"donderdag","cldr_day_format_wide_tue":"dinsdag","cldr_day_format_wide_wed":"woensdag","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"Z","cldr_day_stand-alone_narrow_sun":"Z","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"jan.","cldr_month_format_abbreviated_10":"okt.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"dec.","cldr_month_format_abbreviated_2":"feb.","cldr_month_format_abbreviated_3":"mrt.","cldr_month_format_abbreviated_4":"apr.","cldr_month_format_abbreviated_5":"mei","cldr_month_format_abbreviated_6":"jun.","cldr_month_format_abbreviated_7":"jul.","cldr_month_format_abbreviated_8":"aug.","cldr_month_format_abbreviated_9":"sep.","cldr_month_format_wide_1":"januari","cldr_month_format_wide_10":"oktober","cldr_month_format_wide_11":"november","cldr_month_format_wide_12":"december","cldr_month_format_wide_2":"februari","cldr_month_format_wide_3":"maart","cldr_month_format_wide_4":"april","cldr_month_format_wide_5":"mei","cldr_month_format_wide_6":"juni","cldr_month_format_wide_7":"juli","cldr_month_format_wide_8":"augustus","cldr_month_format_wide_9":"september","cldr_month_stand-alone_abbreviated_1":"jan","cldr_month_stand-alone_abbreviated_10":"okt","cldr_month_stand-alone_abbreviated_11":"nov","cldr_month_stand-alone_abbreviated_12":"dec","cldr_month_stand-alone_abbreviated_2":"feb","cldr_month_stand-alone_abbreviated_3":"mrt","cldr_month_stand-alone_abbreviated_4":"apr","cldr_month_stand-alone_abbreviated_6":"jun","cldr_month_stand-alone_abbreviated_7":"jul","cldr_month_stand-alone_abbreviated_8":"aug","cldr_month_stand-alone_abbreviated_9":"sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"Dag","dayperiod":"AM/PM","era":"Tijdperk","hour":"Uur","minute":"Minuut","month":"Maand","quotationEnd":"’","quotationStart":"‘","second":"Seconde","week":"week","weekday":"Dag van de week","year":"Jaar","zone":"Zone"},"ro":{"alternateQuotationEnd":"»","alternateQuotationStart":"«","cldr_am":"AM","cldr_date_format_full":"EEEE, d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yyyy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d MMM","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEEEd":"EEE, d MMM","cldr_date_time_format_MMMEd":"E, d MMM","cldr_date_time_format_MMMMEd":"E, d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMdd":"dd.MM","cldr_date_time_format_Md":"d.M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.yyyy","cldr_date_time_format_yMEd":"EEE, d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d.M.y","cldr_date_time_format_yQ":"'trimestrul' Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyyyMM":"MM.yyyy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Vi","cldr_day_format_abbreviated_mon":"Lu","cldr_day_format_abbreviated_sat":"Sâ","cldr_day_format_abbreviated_sun":"Du","cldr_day_format_abbreviated_thu":"Jo","cldr_day_format_abbreviated_tue":"Ma","cldr_day_format_abbreviated_wed":"Mi","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vineri","cldr_day_format_wide_mon":"luni","cldr_day_format_wide_sat":"sâmbătă","cldr_day_format_wide_sun":"duminică","cldr_day_format_wide_thu":"joi","cldr_day_format_wide_tue":"marți","cldr_day_format_wide_wed":"miercuri","cldr_day_stand-alone_abbreviated_fri":"Vi","cldr_day_stand-alone_abbreviated_mon":"Lu","cldr_day_stand-alone_abbreviated_sat":"Sâ","cldr_day_stand-alone_abbreviated_sun":"Du","cldr_day_stand-alone_abbreviated_thu":"Jo","cldr_day_stand-alone_abbreviated_tue":"Ma","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vineri","cldr_day_stand-alone_wide_mon":"luni","cldr_day_stand-alone_wide_sat":"sâmbătă","cldr_day_stand-alone_wide_sun":"duminică","cldr_day_stand-alone_wide_thu":"joi","cldr_day_stand-alone_wide_tue":"marți","cldr_day_stand-alone_wide_wed":"miercuri","cldr_month_format_abbreviated_1":"ian.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"dec.","cldr_month_format_abbreviated_2":"feb.","cldr_month_format_abbreviated_3":"mar.","cldr_month_format_abbreviated_4":"apr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"iun.","cldr_month_format_abbreviated_7":"iul.","cldr_month_format_abbreviated_8":"aug.","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_narrow_1":"I","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"I","cldr_month_format_narrow_7":"I","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"ianuarie","cldr_month_format_wide_10":"octombrie","cldr_month_format_wide_11":"noiembrie","cldr_month_format_wide_12":"decembrie","cldr_month_format_wide_2":"februarie","cldr_month_format_wide_3":"martie","cldr_month_format_wide_4":"aprilie","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"iunie","cldr_month_format_wide_7":"iulie","cldr_month_format_wide_8":"august","cldr_month_format_wide_9":"septembrie","cldr_month_stand-alone_abbreviated_1":"ian.","cldr_month_stand-alone_abbreviated_10":"oct.","cldr_month_stand-alone_abbreviated_11":"nov.","cldr_month_stand-alone_abbreviated_12":"dec.","cldr_month_stand-alone_abbreviated_2":"feb.","cldr_month_stand-alone_abbreviated_3":"mar.","cldr_month_stand-alone_abbreviated_4":"apr.","cldr_month_stand-alone_abbreviated_5":"mai","cldr_month_stand-alone_abbreviated_6":"iun.","cldr_month_stand-alone_abbreviated_7":"iul.","cldr_month_stand-alone_abbreviated_8":"aug.","cldr_month_stand-alone_abbreviated_9":"sept.","cldr_month_stand-alone_narrow_1":"I","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"I","cldr_month_stand-alone_narrow_7":"I","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"ianuarie","cldr_month_stand-alone_wide_10":"octombrie","cldr_month_stand-alone_wide_11":"noiembrie","cldr_month_stand-alone_wide_12":"decembrie","cldr_month_stand-alone_wide_2":"februarie","cldr_month_stand-alone_wide_3":"martie","cldr_month_stand-alone_wide_4":"aprilie","cldr_month_stand-alone_wide_5":"mai","cldr_month_stand-alone_wide_6":"iunie","cldr_month_stand-alone_wide_7":"iulie","cldr_month_stand-alone_wide_8":"august","cldr_month_stand-alone_wide_9":"septembrie","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"zi","dayperiod":"perioada zilei","era":"eră","hour":"oră","minute":"minut","month":"lună","quotationEnd":"”","quotationStart":"„","second":"secundă","week":"săptămână","weekday":"zi a săptămânii","year":"an","zone":"zonă"},"sv":{"alternateQuotationEnd":"’","alternateQuotationStart":"’","cldr_am":"fm","cldr_date_format_full":"EEEE'en' 'den' d:'e' MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"yyyy-MM-dd","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEEEd":"EEE d MMMM","cldr_date_time_format_MMMMEd":"E d:'e' MMMM","cldr_date_time_format_MMMMd":"d:'e' MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMd":"d/M","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-MM","cldr_date_time_format_yMEd":"EEE, yyyy-MM-dd","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"yyyy-MM-dd","cldr_date_time_format_yQ":"yyyy Q","cldr_date_time_format_yQQQ":"y QQQ","cldr_date_time_format_yyMM":"yy-MM","cldr_date_time_format_yyMMM":"MMM -yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyyyMM":"yyyy-MM","cldr_date_time_format_yyyyMMM":"MMM y","cldr_date_time_format_yyyyQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"fre","cldr_day_format_abbreviated_mon":"mån","cldr_day_format_abbreviated_sat":"lör","cldr_day_format_abbreviated_sun":"sön","cldr_day_format_abbreviated_thu":"tors","cldr_day_format_abbreviated_tue":"tis","cldr_day_format_abbreviated_wed":"ons","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"L","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"O","cldr_day_format_wide_fri":"fredag","cldr_day_format_wide_mon":"måndag","cldr_day_format_wide_sat":"lördag","cldr_day_format_wide_sun":"söndag","cldr_day_format_wide_thu":"torsdag","cldr_day_format_wide_tue":"tisdag","cldr_day_format_wide_wed":"onsdag","cldr_day_stand-alone_abbreviated_fri":"fre","cldr_day_stand-alone_abbreviated_mon":"mån","cldr_day_stand-alone_abbreviated_sat":"lör","cldr_day_stand-alone_abbreviated_sun":"sön","cldr_day_stand-alone_abbreviated_thu":"tor","cldr_day_stand-alone_abbreviated_tue":"tis","cldr_day_stand-alone_abbreviated_wed":"ons","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"L","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"O","cldr_day_stand-alone_wide_fri":"fredag","cldr_day_stand-alone_wide_mon":"måndag","cldr_day_stand-alone_wide_sat":"lördag","cldr_day_stand-alone_wide_sun":"söndag","cldr_day_stand-alone_wide_thu":"torsdag","cldr_day_stand-alone_wide_tue":"tisdag","cldr_day_stand-alone_wide_wed":"onsdag","cldr_month_format_abbreviated_1":"jan","cldr_month_format_abbreviated_10":"okt","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dec","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"apr","cldr_month_format_abbreviated_5":"maj","cldr_month_format_abbreviated_6":"jun","cldr_month_format_abbreviated_7":"jul","cldr_month_format_abbreviated_8":"aug","cldr_month_format_abbreviated_9":"sep","cldr_month_format_narrow_1":"J","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"J","cldr_month_format_narrow_7":"J","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"januari","cldr_month_format_wide_10":"oktober","cldr_month_format_wide_11":"november","cldr_month_format_wide_12":"december","cldr_month_format_wide_2":"februari","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"april","cldr_month_format_wide_5":"maj","cldr_month_format_wide_6":"juni","cldr_month_format_wide_7":"juli","cldr_month_format_wide_8":"augusti","cldr_month_format_wide_9":"september","cldr_month_stand-alone_abbreviated_1":"jan","cldr_month_stand-alone_abbreviated_10":"okt","cldr_month_stand-alone_abbreviated_11":"nov","cldr_month_stand-alone_abbreviated_2":"feb","cldr_month_stand-alone_abbreviated_3":"mar","cldr_month_stand-alone_abbreviated_4":"apr","cldr_month_stand-alone_abbreviated_5":"maj","cldr_month_stand-alone_abbreviated_6":"jun","cldr_month_stand-alone_abbreviated_7":"jul","cldr_month_stand-alone_abbreviated_8":"aug","cldr_month_stand-alone_abbreviated_9":"sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"januari","cldr_month_stand-alone_wide_10":"oktober","cldr_month_stand-alone_wide_2":"februari","cldr_month_stand-alone_wide_3":"mars","cldr_month_stand-alone_wide_4":"april","cldr_month_stand-alone_wide_5":"maj","cldr_month_stand-alone_wide_6":"juni","cldr_month_stand-alone_wide_7":"juli","cldr_month_stand-alone_wide_8":"augusti","cldr_month_stand-alone_wide_9":"september","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"em","cldr_time_format_full":"'kl'. HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"dag","dayperiod":"fm/em","era":"era","hour":"timme","minute":"minut","month":"månad","quotationEnd":"”","quotationStart":"”","second":"sekund","week":"vecka","weekday":"veckodag","year":"år","zone":"tidszon"}},"resources":{"feedreader/css/website.css":"feedreader","feedreader/images/combined/icons16.b64.json":[-1,-1,"b64","feedreader",{"qx/icon/Tango/16/actions/dialog-apply.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAG/SURBVDjLY/j//z8DJZhohX7LGMSDl/KpkmVAQwMDU/VBy7M9Fz3fFe7UXRo6lYGHJAMS14kXzrwb9qfntsP/ibe8/4ct444n2gCH+QwcXae8bk2+6/W//prm/6YTdtfSZjKwEm1AxmbFnlkPIv7XXlf533nd+k/yJqksosPAdyaDyIQLQU+bbur8r7mu9L/hqN1JnIEIcmrJXsNFSRtF/GBiedu1lsx+GP6/+obi/86rDt8TNoj44jSgar/lhjUviv7Pv532KWuLakv4Ih7NqVcj3nXcMfvfeEvrf+0h69040wEoWqZdiXq58kX2/5Uvcv4vfpj+p+OE9/1FTxP/199U/d91yeVD1FJ+Y7wJKXOzYsqcGwmvlr1I+7/4WfL/BU9i/3feM//fftf0f8V+01VEpcToFUIWwEC7NeOx7//mO7r/G25r/O+84PoiaAmnDNFJOXQ+t0TDEftj/fcd/vfetf1fuENnOtF5AQrY5fQYBIu2GayrO2B3Q96OQREoJgLEgkDMA5IHKcIwAAiYgJgbiIWBWBqIlRnYGHSBtAkQ64D5EHGQPAfMEEwnQQxihSrigWIuqM3MQMyIrB4AJtVknc64C6YAAAAASUVORK5CYII=","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/actions/dialog-cancel.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIYSURBVDjLY/j//z8DJRiFc2oeZ8SBfgYZsgzY3c7A/Ox8yp3bexy3HuhjkL2wSrrpyemog49Phu29tklt4rEZDB54Dbi4Sqny6/PGf58e1/x8d6/sx9eX9f+/PMv4/+Vp+v9vL8r+f3pU+fveocA9+3oY+DEMANrO+upG9aNvr5r/f3vV8P8bUPPnR0H/399S/P/uuhgQ8///eNfk/9cX1f+fX8x9CFTPi2LAlY0GrT/eL///490MsAEfbqn9f3HR6/3DY55HHp3wOfT8vO+L9zfl/r+9wgR0Vf7/e4dCtsMNAJrG8f7+5Bff3/T8//I4+v/ba1z/315l/v/kTOBtoBwbSNHhKQzi9w97nXt/UwYox/b/45POX4cmMeiDDQAyVG9sN1lxZ6/NunuHXLc9POa379HJoKOPjgedAwZcOMymI1MZZF9eCn779grD/89PEv6fXyFegxGNhPDTM+FnQAa8v6X8//HpxM2kG3A24hzYAKBX7h/2XUGSAUCvyr+8EvkGZMDHex7/Ty/gTSXaAGBg8j09m3j3/Q3J/yADXl0J+gwUEybagJPzeJM/3g8Ga/5wx/b/3QNeW7DmBShgB2IeIBYEYhEgFnXQY5B9djH9ycf77v/vHPQ7CEr2GAYAARMQcwOxMBBLA7EyEOsAsQmInlElFndmnd0KRQkGcSCfA6QBqxegBrFCFfFAMRfUZcxAzIisHgDm44a2RTD5KwAAAABJRU5ErkJggg==","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/actions/dialog-ok.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGrSURBVDjLpZM7aBRRFIa/c2Ym2dlkJ9ENq4GNwTwgWqRyFWwsxPgoIggpgrXbaCMSTSEIVqbVRuy3EISgWNqIgoj4goCFFlqIWPrYZOd1r4UTXGbHIuyBrzr3/Pc/l/+KtZZ+Sumz+hZwdzpw6c6z1yOBX3dEoufvvyzvWGAk8OuVylBt2HdRkcP/XaHRbJULd1YRABFQEelxcPTi/dqB/bW7B2f2loAz+b7nqLiO4oqi2iXQaLZ0ql69sXhs7sKesWB84+O3N8evrF/OC5w4MuV6juC5gqMqYq3l1Oqj04fmxm9NT1TnTXaw5DmoCIkxxIkhNhZPldRYosQQ+C4PnmxccwFGh0vL5SF/+vvPEEeEMDF0opQwNpiCoLkq7K54aRgln2Q7iQtXH56d3Ve9ObormO/EhkEx7c0w3tK/D2YtoIIVBLDpj19bL99++HpOuqPcaLbKs5O125MTY0vt35tPX7z7vAQYwHbz6t75f0PW2h4WVtZPLl5/vFbUyyP5zyQiCgwAXoYCkjlJgQSIgKhHQEQ8oFTAANDJ0QY6RQ4AnBxkt29jbDb4B/fwwJ5uNzYyAAAAAElFTkSuQmCC","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/actions/document-new.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGNSURBVDiNjZM/b9NwEIafu9hVbVk0jSJlKH8WJFhSFNHP0LlTPwELExMrn4CPgpgQaxZYWIjaTpEQSkUykILAiYJN7N+x1K6JXSknnXTD3fO+9/sjZsY2sVoeCrALtIA0jM7WAFIARqPReRiGHVXFOSfFoJlhljObXUQ7/tcPR08/v3PuYgY6DKOz3yVgPB7PPc/rqioispELkj+f6HS+s7d3amn67Iu52RtovdJCSUQohlX1v2xpRrcbsN95ibYeSBC+fyh69xTcPa2seStE1GP99yNmPwHI8xXmLu8AmVcFlAPX1osaIjz/EWnyGtUIswUgb0G+1RxU1W/qgNydkCRPSJKMqx/3F6AvwujceU2AqvpNBhjH5O6Y1eoqPTh4ngCUADOrnf4mpClKQP3q6pBqbw3Q5KAJUvQ1ArZxsvn0tQrY3PM2SCNgm2j6eOUKy+Xyl4h4IiJmVshoRd1dq7s4juMaYDgcPgb86XSqk8nEm8/nfhzHPkAQBHm73V73er2s3+9nwHowGADwD3RnnM0c08RlAAAAAElFTkSuQmCC","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/apps/preferences-locale.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAISSURBVDjLpZM9b9NQGIXP/bB9bSdOE5o2oQUJgcSAOiBmBib+BRJCSGwsiD9BR3YQiB/AhBhAjAy0S4uoSlW1hbapQuwktmO7174vC1RFZKl6pHc9enT0PoyIcJ5wnDMSAB48vH/n2G4/Y/O3N2o11UkmRTdKMzeZFPuM2M881/tkqrDZDDozdX/Rknxh7evO89U3j15LALAs6+ZMu32pfnXxlud7OBiMEPci2CK/0r3QgBQSaUFwHRu+a0NJDrG5F5wQAEBgFTocJaHne62FlgeqNPLChhACxDiut32MswqcC+DUbicbSG5MnhU9AqHb9OA5Eu2Gi16UwXck5hoKrZqDblNNH9FUhnSpj0AAAXAsASJCWRns9lPoyoAAMMb+H9EYA0MGknOPAJSVAWcMrbrC5bkKs4EPIsAWDGFcTCcoSwNpWZ3JpMBuP0W74WLjRwQiwkGY4miYgXOGMD6eXhAXTCjbvhgfbmMc51jZ6iPwbAzGOWrKQpxprGwNQNP+AACiQjnOZHKQ9/akXbnfR2lW7iT5PHExPxwXs57nc99mpkiG0fhXsc0MWz8pICLqusNkb/XltWOt771afvzib3Hn7rJfd8ySUN4N0nqNGf1t4+3T+B8CIfhIStnrD8IlV6kvpxF775+kAD7/uekuKKU2gyB4p7VGVer1M7ugXHe9MRMcRnGy/+njhzPpyc6r829GePTTtfegxAAAAABJRU5ErkJggg==","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/apps/preferences-theme.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJASURBVDiNhZJNaxNRFIaf+zF32iQtaRPaNKkIRtCFCxelRRcqXYhC/4FfqLhQ3Ii/QEr3KrjSlZuKP0EqbrpzIbgQa0tRSmMbY79MMsnMnbkuSoNa2xw4i8PlfXnue45wztGt7s68eohUJ5ME4thWRNSceT59OwTQ3cR3pl+/DGOurX9bIAgTegplhvv7JoBLAPIw8YNn7xptP3+1fOwota0W1Y0mQ7kBQm/g4v0nb1tdCXpTKdOvpfj0PeD02UmiMGK1rShmlJBS6K4GNrLYEBq/6ujPH1CtFubUOLHvEYpd+I7B7OzsvZGRkcfOOZ0kCUmS2H4XyNUdQ9pzZKI2KZkQbK/TlIP09Pt0Mpifn/9aKpWeFotFr1qtilqtJgqFgnfmeEZeGc/QDgIMMb7RqGbjL0oNkM/njyilpJSSsbExoigiiiJGR0vEcQKsobVCeWrfNzVAkiRks1kWFhZ4MzeHkILJ8xcol8ts7+wAoLRC6f0GEiCKItrtNoVCgbXqOouLX/CMIQgCrLX09Rq0b/A8TY/R9KUMSkohhBjSANZagiCg3mggBeRzWRaXlsjncgDOJFvvg5R/woZhWg6nPqpow9Z//tj8awt7J50bHCCd6UUKAYCA5MWj6xP/ogshtHPOyj/FAMYYjGcOOo1OOedsJ4M4jjsPvu/j+35nttYihCgdZCSFEGZlZaVWqVTqmxsb9dDGrl5vkU6nm5VKpb68vFwFRg5DAUixm4e+PDWVvXHz1rm9GcgAyjnH//o3B/f3lEZT1kYAAAAASUVORK5CYII=","encoding":"base64","height":16,"type":"png","width":16}}],"feedreader/images/combined/icons22.b64.json":[-1,-1,"b64","feedreader",{"qx/icon/Tango/22/actions/dialog-cancel.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMqSURBVDjLtZR7SJNRFMCvz/JRamFWJqZBJqlQ9IJKeijZk6ICTYoiwQgMamb/mCWhoWaUltqb1IwsqT8smmnqRK2WsunUTXM2dZube7mnZnE63/wcZs6M1YXf7r7xnd8999xzRwCA/A+m/PHdVeL4z8Wsm2Q9+7FfK8rt/qm4/fWGRp0k+3tDvjOjKossbypeVPTlfdTHPnZ8j6jxKL+tfAPzwz2XjOpssmbGYlYO2aYWpg4bpOdAzr+kVHRe1hsHs8AwkAR6cRzoJafBKE8BgywTlN2pJu7z0DLcmesfxYKKnU0mxTWzyDBwAQzSRIQBBkkC6ET7YUi4EQkH7ddd5kVMirsg+hAnrLtFNlsV1+WSfVpx/jfjYDqYkachV0DXewhU7XNBLVgCar4PKHlkjDZH0HxZBabBTJBwz0swc68pxUJWDG9E8xSGlflIHhhlF0HdGQia7giQcmI1XVWRnO6aHZw+dqxsSBiN4lnmBVQdnmBSFQLv1drK38RY2xiDvHh0WHUHhlUFmOVhDHQyBw52HDPV3iCxE1px9udC7wcKQYKO2gn1jqYrFPSyZ6P1eeSIRUy1FZ8ZxTcpC7GeyXhIJ1F8ALSi3aDticDneOC/DedObr9PD93SNT3xP8ZLY5RdgtZXYW9+yRiLf7w+nyQ1FJB0JPfTg9n3mormF3NK/ctaXwa/bi7xq6nMIAGTLpF9D+sgXy3wN4uHutdBf/PZrmlv3kzhPl9aqhXtoQ/UDpRd1zW4oLPN4o/3Z93W95+wdIpCwDCieKnNYgFza82QcJNFLOWdU1OHa5OY6lspN0mqap8z1nbtriDhMCQ21RilHp0VUTxtb7QlW11fNLSUrSy3SdxSFlKt6z814RY6gFqYMoL9vv2vxfSwoz4EzC0srWivRawXJwKndEX5tH+bdLAz4oZ4IPMQb8RnnJwzJEIlTDNQddWJGSBg7up4kUzcrYpxOCKuiCct80UCkCAkBAmj56DaR8ElAx2ZavaToMrI1WQhHWdvTUwNJ8SdztSHlvsjgcgyeqaefRd4ksU4eyEuE6XT1nhCTe3pnTjTUN8dxuttLf4nym7ZoDK3vXAAAAAASUVORK5CYII=","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/actions/dialog-ok.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKFSURBVDjL1ZQ/TBNxFMe/73531z8CpUSKaMWEqrFKCBGQBFFinHTyz9jFBRKJgWjiyuaim4NDY0yMNsFAnIyDiYOLSx2YDGIYStRBSKPi9a69u99zuF+1qS3EAIO/3Df3u8vl87733u89YmbsxtKwS+v/A+vbBZydnh843tv5JBzSDQBYK1pLy4X1y9sGRyLmTH862ffT9gAA7S3RvcuF9YS+I//NgJTB6dKC5NKO5FijP3sioi1zfGZ6frA1GsquFTeu5LOZQtNCCYLQCMyAUFEagocnc7H9idiDC6NHLkbDRij3cjHSDEoEEpoWgAGQrv3teHgyR/G2PbfPj6Sm0r2JQ64PWJZtRyLm7Lmbz781AhuCTgqNIETgWBOBY6q29PjMwtjRno77p/qS/YZpCl9KAICpawjpAgwGM4GIwQz4kqHSiQ3bhedLMAPwKt8ev1hM6wp6fWyg52461dVSdn1UoVIC3y0Xjuug7Eq4vkTFC1QdMQRA0whhUyBsCLQIMACpA0DJLmfz778ctMr+tURne7dd8eD5DNeT4K1PGnzJsBwPBODT52Ihn818pdrpdvrGs3Syq/3hscPdI7bLwpeMtojOdslxADARMYILIGJCkA4KIsjiD2v142rxzqt7l+aofmwOT+YoHovOnkjtm4h3tB4olRz79dsPVwGs1JisFwD4+Wxm9fdpaTaPR6fmUj3d8UfJrtjgm3crQ/lsZunfupF5U43PLNwamngarzFAVUObqaFj1ZaGkg5AKGn1dVPylFxm9ht2HhHpAEwlo25vqABSgSoAXHWvANCJqMzMbqOW9tXHmpKr3ldhpNzKWqdKjnpuXry6tJAKQnVgBiAbMX4BghJAT5xW1B8AAAAASUVORK5CYII=","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/actions/help-about.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKZSURBVDjLzdXdS1NhHMDxR51zShMV02wDrSRKkSgZIy17WWPTKPwHoqsKrKtuvAkqiS4CL+rCy8xlWmcyt5woTnPT3qamO7J5nNtqYb7GzluI3eiv3/RkV2qHjDrw4TwczvM9z3mBQwCA/A3kn4eHKLInbsfDTF+RZ8JV6N7R8LA18VosWLUcC1YuD1Pk6o6EAxRRRgZLg3z4GAgRPYTch5j4sT8O+9qVdVzEvMpPHYQ1EdPqaBu5Kzv89ikpHHlBamlHcstkr3ZgbvzcIh8+Aj/DQkQHs74Ti0xvnmfMltQy0kpq43O2DNPO/d55v0ngwkYQo0YQPpYBHyrZiG7AC4lMGYh0OXDvjsOcxyD6rJr3m4ftWv0MXT3Ph4o2IlwwH1gmC9iJVIgFUiBGK4H1KoDtTwCui4DwUg2zfea5oeZ03ZaPYsyWcXnBf5GLx1kmE2J+8ssHAuxrApwLdWDUpoaFHiM3alFd+q2XN25Pv77gNwtsQLUepJEXo26ytkq+HaOUGha7jcJYY0qNrK9i3JlN8eGj66t8g8Fe5MSoFaMWAkuOcvA1qp7L/tyCrgOdHF0ArAeD3Ri0o1aMNhIQGzD8pBiCTXs7ZIfD/bpRzpMOXCcG2zBGZYPYlAniIwLfHmC4Pg8+NZeMyA5H3adDvANXaM8BvuvMStShY6Lt+knh2cmVpftZsHRLCZ+pipDs8HT/+S9fe85+D9lLA66HittaLdFoNETrqlfemWrRM6zl1PK0rXKGEJKybRi3NLQb5Q8+zn11rybxBo7LkQGZUZW0N9RdUdwcaMh14/hw/HxpXtpm4VSUg/ahYqRDFciELqBqaW+Sjuuk8wpQBlJs+yhwS0TJSIV2SRPj1NKdKVESSvg/f01y/QBUi+5mlItMwQAAAABJRU5ErkJggg==","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/actions/process-stop.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARISURBVDjLjZVdTBRXFMf/dz9Z2S8oWHaJW0jEtDVpu2mtqQ1ZGoixr+CLxaTYFmpS00YbavBJowHlwSY2KUkbrRX7Ynww0RorGF8gMUZj0iIWy0dZYcF0F5bvHXZnbs8ZZmC1S9tJTu5k7r2/8z8f946QUiLXc6G4uP2NmppGIQSQvUbTIMmElKLvzp2f94yN1efaL3KBOzdu/Dqye/dnytCQXabTa2Aa9fUMJoeu8nK1p6vrpz2x2If/Cb5YUvJNpK7uU4ZqmczaBK8zjBXrcPqcV1aW6enuvvDBxMTH64I7A4Fv36ur+yTFShnKacgC60BDsamcH2colO7t7j5f//Rpk7ncsqo0EPiuiqGDgytQiwWuVAqCRn5nJ8IY2XiOJankYGl01P5OVVXDj0VFHc+ALwaDP0RqaxuUx49XwqeN+UtLcFRWopDhrC5LvW95Gc5du1BkpEol5YtPntjfjUQ+Ol9YeEZPRSvwYl1Dw6CIRt16eKSKobadOzFXXw9HPA7P4cNIOBzQaN5PUHXfPixFIrCNjMB19CgmVFVPE0cgfL7Z6zdvVrBiAZrQlRrFSREk7+5d2KkjZCCApdOnUWS1ooDmRFMTMjU1sNlsyL9xAzN6+qXuVFupAYdmsWQXxyyMSmH/tbgI37FjsLNDgi+fOgXLwYPIVFfrUM+5c0jeu4cFFsWF5RY329HMsVlhaRi/c73jk5NwnzwJO20WwSC07dt1qKuzE9O9vZhXFH0v7+GINYpQo1TxY3teLRdJGoVi5cr0NBzkQNu8eSUyAojhYUwPDUGZmYG6sIAMO2DFZBtCIW2t3TQKIkutaX5S6di/H9iyBVbKMau1Op2wHDmCEBUvk0zqUM2AakY61sCmWjMdFHpBeTnyGhuBbdt0qPXSJYj2dtj4xBUWwnX8OF4hp5LKZKqVJstMBXepNM4/P55Nm5C3dy/UcBg2ru/lyxhua8N8LIatLhfsBw5A9fvhbGnBywTq6+hYgxunkRXHH92//9BTUSGl0Y+z0Sg0ajcLF+LqVYy0tiJJeU3TYfn1xAkoZ89CcDfcvo2Ra9dWofkeD2YVZZ5eF/S7ok0IZ0UodCtcWroj+eCB4LwJymf5oUOYuHIFMwMDz4RrIdWvNjfjD3IwNz6uf/d4vZhzOMb74/H3v5Tyt9VLiOCOsoKCrjdLSyun+vqECfk/o9vnw6zNFu1PJKqbpRz8x+3G8Jf8/l/CwWBkqr8/J/z5bx7K9ZTVOvR7IlH1lZRj697HYSG8n3u9198OBHYkBgbEv0G91B0x4M8zU1O1PcAgseZygqkrHDS84AVK2tzu798qKXlNTaf1NWRCXfkl6UeV+zWaSsVakskvxoFR2pcgG6cpNadigrtoKN5A9jqwlfrCTT+nfFrtpJVWakiNWkmhPl0cAYaTwCStn+DuIlZ63VRkOeCmtpLZ+SdhGLfnsmEKH3AWn2v/32J2hiTfJjZkAAAAAElFTkSuQmCC","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/actions/view-refresh.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASVSURBVDjLtZVZbFRVGMf/5869s9zZS9spWwcqTNgKpSRlcWkDIoLyohYkwYSEaIwLUSuGxAcTfYAHA8GgSCAINCBS1xglEHALNAXbQgMCA5a1pbQz7UynM3Pv3OV8PjBTR2Z49CT/p5Pz+77z/77zHUZE+D+W+LCNZzd+v3Z8hecZj8tWKQiCW9X0RDyhDPVEk0cV4vtatzYqD56Z93Lz9I7dL10GAPZgxkvfaameGizdU18TrCnxyVbOCSYnmPz+fjyV4Zeu99/5qzva1tOnvNm5tzECAEuavmsE8aaTW59fUACe/doh/9NzKtuWL5oaMjlgEsHkHKYJcMoFIHAiECdcuj5w+8zFvu26memYPzN4uD+eDO9tWtxQYEXNhNIDTy2YElI0A9d7h9LRmMJcLrtQ4rJLLqdVsEoSDBA4J2QMjopyf+WShY7N0aHksH+Mp2wgngwXeDx1w1Hbuvnls8+F7w2fOHuDDJNkRdO+hJlp1k1R9bltc6om+NdUTxlXS6IoD41kYHCCYZLVJjvLUqoBgQmFxZsoKMuSilZ+/kJECZSV0O27keOtn764Lu9CpwF8tvjtr5+rHOt/b9rkwFyCYNUNA4rG4XKIYAyjvo6GkCQmX74RTVeNL//Z55IPMAEdxbrll20vfLtfObXoj87uS36nCE7I0hgEBl6QcSJpJDwVjna3y9FskVgEokV7WCuuUGp2NNRNmXEvlkGu+IwBgsAKrTBVdMYHU5u2fDDnHABg7eyi0PoNR5pCk8pWJ1PKiMgJImOwWBhEk1gsoRaCuTUzrmZW1Q9bDneSwEAmmMA4oHMTx9u6I/eYZ+G1T5ZnUhlzf1f3rYNd3UWimuKsAjBxZp1RVT5WJ2bJtbZstaArfPfmiCGsvLZzeQYA2netiebO7Pvtpi8U8HkXTffdYgxswauHdwM4UdDHRMSI7vskWRju9MXjbRd6Xzm/s7G3mC13IurE8T59XuvlWPvSTb/7U0nhkYKuAACe97p1k6Oi3O2tmzVhR8Nb32xctarF8iC4J6bVGmQ+rhpGAyPxc8lm6y0+hAgAAxgAgwOqZjKX1xWqmztp81XvwOrH3jjyhaakTrBAZbREdtbXTvZ8dK1nOPPj6e5lsksuTUVix4qCiQDZJtBgPJ12yHZneCAJTSdwIkswGJg3NlBam0wryWRaFUx92Oi6EtcESSzxj/E5E4mRQSOj7imwghsZQRIZO9Z6tWP/Vz+9fqr977DdIpDAACJCUjWhcmKCzeb2+HxOj9/rdfu9ZXan06npuh4b6D94Ztfa24wxcXS6McYsM1d9/EQoNK35dMu2FQPhk6okl3rq1nz47sRg8FFf6ZhxsIiCpnNoJgfnBKL7Ey8WHRqMR/p/Pbtn/UYACoA0gHQOLE1f+X41aUn7lWPb+wA4chJtTndV/fonA1XVDXZZ9omi1cbJIihqelBVlP6eruO77/7ZcjELzSnB/n2SzJ4HtGdly0rK1kPIltgEoGWl5kkBMEJE+n8GPWNMyIIceUAJgCUrlgXzLFzPwtNZcGY00Yd9powxls0wX/ngHJwXY/wDk1w8BWVrllQAAAAASUVORK5CYII=","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/apps/internet-feed-reader.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMoSURBVDjL5ZXLa1xVHMc/53HvnUdm0olm0rTGpE0zoTENImKzMKD4oCDqxi5EfOCisX9AQTd1ZxFXCsZKmo0rNwa76EqsNmCphZQmNcHQJE4a0ObRSdp5z9xzj4u0UTtXKEJW/uC3OY8P3/M95/c7wlrLToRkh2LHwPr+gWtviFR8//6pWHt3CikexCfhl8vVYnb2ZO+n6yP/CnaS3pmOF492yPzMg8tz25pWpPgIaAQPHv/6zajrJEfc+EElytjanbtmOYiWfmqbGwRrN7DRJPrhdlRhDgIfrIXKbXQiHQn1WNbVuYFM+sOv9n7WPX9L3R3UBJEDlK7/gvBSuJlBvNYOKJSpFuJYY8D4UK8iHVdNDgunAXzxzNHclbmV6c5DT7rjt1/hu5U+RKqP6vxlYgPPoO06/DEBxWWc9gxeW4ZyXmONwRqD4wopC+wJfRXlauXC7KUJIxO7mUq8zejVR9CdhwlWZwhyi9j8JhaH4NYcIhpH1Srgb6lWrpLa0Z2hYKn90bRZsisLV5GxXcx7Q3zzaxIhExDbg60XobqBiLWAVOCXt3w2Bq0lwlOPhYIvf/7Ozefbfrd3Vpf5+cos6/kq11MvMZ7tRHgJRHwXUgPaxSxeoF4rbFuhZICj5cFQ8OSwcLoTeXls30+cevQ0zbUlgmiKGXeI8ekY1u3CzxsqMz9SurlILBGBexdYzaOTrXtDwW6RjHKUfDyxRJe3ygfpL9lcnMREUky3vMYPC4La5g2k3STWHAHrQ+BvqS5toJseag0tECvpkY5DTfVjgXgUTkQn+Pg3l909A5wvv8uBxLe0RYr42zVpwVqsUJjCcjG88iS9q1OXhHrqLbBie8Xx3iynZ2s0d/XzSfYJThzaaKzr3EKQX1s/GQqWQja1vv4Fzr7Bho2njsDY2fM83XOOSP8wze3P/WM++P59WTClSKjHuUowFmQvFqRfQQX1hjz28hBDR8aIeClU4KPsvTSo7mcpqWSvEEIDiL83eiGEN/oCh/vSvCrCWqqUoCVSqC1N+q8Dm3pQfu9sceRajjVrbfV+MIALBP+hBSvAWGv9BsX/76/pT4rDT4yg/r4PAAAAAElFTkSuQmCC","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/apps/preferences-theme.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOwSURBVDjLnZRNbFRVFMd/99375r2ZzjBMp9PGtrSATWs1MVFWRkNUVuKCunEHgqALF7gzbjQ27mHFhmqsmmgEP7Z+kPiBLGQhC2JIjSYkTZpSsQMzTOe9+967x0VbmKHly5PcvJzc+373f//33KNEhAeNI+98WATMeq6gMfP+Yde5Rj0oeP/0N4u5nF91aayixLFihQSTDgaNqQ+mD377wOAj05++0Xb5t0tba9u+/+pjbrQiUB6I8OjuFyiE+WS4mH5Cdv3oyfdeX/HuB/rqu58d6x0aP7FzYnzbSuJ45eB+gnI/frHGxONPsmVglOKWsj849shh8g9dotOnu4UyhDrn04ozGisJi1sqHDh0gBs32vwTeywut+jpUbTalsAYfd9gAHFCmmaghKvLLeYvXaQct7i+fZKefIivDVE7IstSNgVPT08Xa7XazvU8SRKnGCCOYtpRikaQNKJ/aR4/iRE/x9XBHSQmIFIZ2slG8MzMzL5du3adLpVKxjmHcw4RoXplKf3tqqW9EhNoQZoNCr6mUCiRNOv0+NuJ2hE5LyBU2S3w8ePHHx4YGDhZqVR2j4+PmwsXLtzczBjDzh3bfW0WmLuScnHRoOvXCM3qvftsXlUewMTExC979+59fmxszPi+z9DQEGmaYq1lcnISEWH3M09x+KWneawWr22ou763hwEIgkBprenr62NpaYnR0VGq1SqFQgFrLe12G2MMWZbBmkJtNC5zdwcDOOcIwxBrLXNzc5w6fZqR0W3seW4PWmustTh369VqY0jiBO2bO1vhnMNaSxzHxHFMEIb8ffkyP/96jn+Xl8nn88RxTJIktxT5q0p9v1uxc5lRSnkbwMPDw3x35gwD/RX6axV+OnuWcrlMkiSICL7xKBTzZChKW4vYOKVcDCkXQ3K+Jo4tQK8BEJGbYIB2e4W+ahWALE27j2iv/dm0rfOLmX22GGeD9VJwvrnwx1+rjyjV53/4/EugYdYVdzYj3/cpFXsREdpR1gXuK+ofvz7x1lGAl188WDl1arZ+250lIpJs6rynPIIgQERIbNw953lOROxaeuULPuqcthuq4raf0dogIng65f+EB2Ct9boVK3xjMEajve7OurCw0KuUKtwTrJQK6vV6bK1FRBARjDGEYZ5CoUi65r+I0Gw2mZ+fj4DyPVutiDAyMvLE1NTUPqWUW6sSrxVFb3qeDvI5/5hSygI0Go3W7OzsOeD3Dp/v0GdXq0Gtb9I5Dh15zXTma9ZtWLfZ+A9Ht91MK/ug9AAAAABJRU5ErkJggg==","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/places/folder-open.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKCSURBVDjLtZU/T1RBFMXPnbfsLiwLCIUaI0YLgzHRGDtDY0P8ABYUxsQKGxP9BGBvp7EwMVqSWJhQSW9jI8ZYSCMhRsTAAsvuvr8z91js27e7LIpImLyTmzeZ+b377pybEZI4jpHrfLl27/WIly+c2m+hWtn9+HJ67b/Aly+eWRw/PXLJOoIkkP4NAcSxbUw+mJ95/3R64dDg0aFiv2+lHCUK1Sa8VapCX65c6i/eAXB4sBKkKpzrBpOEtQ7lodLU7cfvPo2VCzkRgRGBeBABUPOT8Ov3takPz+5WesDWORjnUrBCWxk3H/QX88MCXA0pEAhEBEYFnhFY0YRx7iyAXrAqQMdusBIEsnpDBAJATBNKY0AKVPnnUjinFKNwqlDXBuseS7YyVSMwJDwaOKd/BYt4HRkrew5RpAlWERgKSAMQPRkLSdx8+Hby+sTJFzByHoIiW4vS2maey3ZlVWlPkPQ8s7LyY2fhzdytRzkA8MPQjY6VJyIHOUKzSanYd+FnpTEMAAYAkkRWk9jWjtrG+ZygsuNvZOCl8eX1KE7qhwWRTSe15KwiSJJvGZizs+qHdme/jU6JxBJRoghihR85NEKHWmBRDy0aUVvb9UjjRvS5yxW1MN4asAolUrHnpA8a1XrQCBJZ7QJvVcPK4JDCkd0O2McUnROd89VqUF8aX17PSgEA21V/ebMa0I8UftyrYK+SpsJUQezwa2N3E3Nz+SxjESkAeHJj5tU5ky9cgTpPlR6ohuo8koZUj6pGRAgxToxxIkZbkcr6l8Xn9wGcEJGKtDtKBEAeQBHAAIBSqsE05tqtgQhAo0M+gCCNCUnKv15N6YdTtxy8SY7rzjM4pvEbDQLMgqmYRyAAAAAASUVORK5CYII=","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/places/folder.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJiSURBVDjLtZW/axRBFMe/7+1e7k5MzMYgQTCNlqbQKv+AKcUqVcTCgGCvdpYGRMFWbEwTAmks7AL2oqBtClFDRMEYL3u7d3vz4z2L3Tt3EyU5jgy8YWZ/fObNd76PIVXFSbSwPCECXbm9NluvMR380IqV989vbh8XTOWMF+6/ejw/d2G5mzkoAB10AEiw9WV34/Wj63eOA+ZK+kFwfqxej1KHKLEaJUaittEoNhLFPUSTE435xcWNYHgpVNU5D+8FogoRhapCUWTOtcudS40Py0/e+DBkYsr1YyKAQFuf91Y2n95YPwT2qnDi4UUgUgIXcGLmqamJOUMEJwARgZnBRGBieJUFAOsDjYlAt1Y2P81Mj88EzM2+rH31qTIrnlD5HUAEqGh3Zzf+vvrg2sWw2KU+fDlJ3Gw0R3EfEZqznJ/b4PAy5zoh82jeZUZmJK2Ae8YnYTAiOGBkxlXBWWaTMKCRwAETOj2bVFzR7pj2UVgR5DZUrYz7bSwMkHRNXAEnmY2ldHCq+Y9eFM4X1jtiYYWinZp2BZxmJu5Zj8yUimNIKZwTZD3XqoBF8GM/tTC+Dyynj0NOrmaad/uphRPZqYCN8V9/JxnCsFbV9QAcUFB/mlfyoFLSjoUxfrsCVuve/fzVNmeno7HhBPi7j929uKfOvC2VNNUBjF9dena3eebckoqwqjJUAlFhqLAqCCp5jkQCIiHiPJgEFPhO69vqx7V7LwC0+mACUAcwUYrTAE4V0QBQK3yvACyADEAXQAogLmIPQKKqlv53NRWLMYCgiLAkuwfgirHqPyB0Unce44TaH+gyYWDgguJkAAAAAElFTkSuQmCC","encoding":"base64","height":22,"type":"png","width":22}}],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/form/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/group-item.png":[110,20,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx","feedreader/images/combined/icons16.b64.json",0,-16],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx","feedreader/images/combined/icons16.b64.json",0,-32],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","feedreader/images/combined/icons22.b64.json",0,-154],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","feedreader/images/combined/icons22.b64.json",0,-176],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"]},"translations":{"C":{},"de":{"Static Feeds":"Vordefinierte Quellen","User Feeds":"Eigene Quellen"},"en":{},"es":{"Static Feeds":"Feeds Estáticos","User Feeds":"Feeds del Usuario"},"fr":{"Static Feeds":"Fils statiques","User Feeds":"Fils de l'utilisateur"},"it":{"Static Feeds":"Feed statici","User Feeds":"Feed utente"},"nl":{"Static Feeds":"Statische Feeds","User Feeds":"Gebruiker Feeds"},"ro":{"Static Feeds":"Fluxuri statice","User Feeds":"Fluxuri utilizator"},"sv":{"Static Feeds":"Statiska flöden","User Feeds":"Användarflöden"}}};
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
}qx.Bootstrap.$$registry[name]=ba;
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
(function(){var a="qx.util.OOUtil";
qx.Bootstrap.define(a,{statics:{classIsDefined:qx.Bootstrap.classIsDefined,getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,getByInterface:qx.Bootstrap.getByInterface,hasInterface:qx.Bootstrap.hasInterface,getMixins:qx.Bootstrap.getMixins}});
})();
(function(){var h="qx.Mixin",g=".prototype",f="constructor",e="Array",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(h,{statics:{define:function(name,j){if(j){if(j.include&&!(qx.Bootstrap.getClass(j.include)===e)){j.include=[j.include];
}var m=j.statics?j.statics:{};
qx.Bootstrap.setDisplayNames(m,name);

for(var k in m){if(m[k] instanceof Function){m[k].$$mixin=m;
}}if(j.construct){m.$$constructor=j.construct;
qx.Bootstrap.setDisplayName(j.construct,name,f);
}
if(j.include){m.$$includes=j.include;
}
if(j.properties){m.$$properties=j.properties;
}
if(j.members){m.$$members=j.members;
qx.Bootstrap.setDisplayNames(j.members,name+g);
}
for(var k in m.$$members){if(m.$$members[k] instanceof Function){m.$$members[k].$$mixin=m;
}}
if(j.events){m.$$events=j.events;
}
if(j.destruct){m.$$destructor=j.destruct;
qx.Bootstrap.setDisplayName(j.destruct,name,b);
}}else{var m={};
}m.$$type=a;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
this.$$registry[name]=m;
return m;
},checkCompatibility:function(n){var q=this.flatten(n);
var r=q.length;

if(r<2){return true;
}var u={};
var t={};
var s={};
var p;

for(var i=0;i<r;i++){p=q[i];

for(var o in p.events){if(s[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+s[o]+'" in member "'+o+'"!');
}s[o]=p.name;
}
for(var o in p.properties){if(u[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+u[o]+'" in property "'+o+'"!');
}u[o]=p.name;
}
for(var o in p.members){if(t[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+t[o]+'" in member "'+o+'"!');
}t[o]=p.name;
}}return true;
},isCompatible:function(v,w){var x=qx.util.OOUtil.getMixins(w);
x.push(v);
return qx.Mixin.checkCompatibility(x);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(y){if(!y){return [];
}var z=y.concat();

for(var i=0,l=y.length;i<l;i++){if(y[i].$$includes){z.push.apply(z,this.flatten(y[i].$$includes));
}}return z;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__c:null,__d:function(){}}});
})();
(function(){var cs="qx.bom.client.CssTransform.get3D",cr="default",cq="|",cp="qx.allowUrlSettings",co="qx.bom.client.Stylesheet.getInsertRule",cn="css.transform.3d",cm="qx.bom.client.Html.getDataset",cl="qx.bom.client.PhoneGap.getPhoneGap",ck="qx.bom.client.Html.getAudioAif",cj="qx.debug.dispose",bt="qx.bom.client.Xml.getAttributeNS",bs="qx.bom.client.Stylesheet.getRemoveImport",br="qx.bom.client.Css.getUserModify",bq="qx.bom.client.Css.getBoxShadow",bp="qx.bom.client.Event.getHashChange",bo="qx.bom.client.Plugin.getWindowsMedia",bn="qx.bom.client.Html.getVideo",bm="qx.bom.client.Device.getName",bl="qx.bom.client.Event.getTouch",bk="qx.optimization.strings",cz="qx.optimization.variables",cA="qx.bom.client.EcmaScript.getStackTrace",cx="qx.bom.client.EcmaScript.getObjectCount",cy="qx.bom.client.Xml.getSelectSingleNode",cv="css.gradient.linear",cw="qx.bom.client.Xml.getImplementation",ct="qx.bom.client.Html.getConsole",cu="qx.bom.client.Engine.getVersion",cB="qx.bom.client.Plugin.getQuicktime",cC="qx.propertyDebugLevel",bR="qx.bom.client.Html.getNaturalDimensions",bQ="qx.bom.client.Xml.getSelectNodes",bT="qx.bom.client.Xml.getElementsByTagNameNS",bS="qx.bom.client.Html.getDataUrl",bV="qx.bom.client.Flash.isAvailable",bU="qx.bom.client.Html.getCanvas",bX="qx.bom.client.Css.getBoxModel",bW="qx.bom.client.Plugin.getSilverlight",bP="qx.bom.client.Css.getUserSelect",bO="qx.bom.client.Css.getRadialGradient",a="module.property",b="qx.bom.client.Plugin.getWindowsMediaVersion",c="qx.bom.client.Stylesheet.getCreateStyleSheet",d="qx.bom.client.Locale.getLocale",e="module.events",f="module.databinding",g="qx.bom.client.Html.getFileReader",h="qx.bom.client.Css.getBorderImage",j="qx.bom.client.Stylesheet.getDeleteRule",k="qx.bom.client.Plugin.getDivXVersion",cG="qx.bom.client.Scroll.scrollBarOverlayed",cF="qx.bom.client.Plugin.getPdfVersion",cE=":",cD="qx.bom.client.Css.getLinearGradient",cK="qx.bom.client.Transport.getXmlHttpRequest",cJ="qx.bom.client.Css.getBorderImageSyntax",cI="qx.bom.client.Html.getClassList",cH="qx.bom.client.Event.getHelp",cM="qx.optimization.comments",cL="qx.bom.client.Locale.getVariant",J="qx.bom.client.Css.getBoxSizing",K="qx.bom.client.OperatingSystem.getName",H="module.logger",I="qx.bom.client.Css.getOverflowXY",N="qx.mobile.emulatetouch",O="qx.bom.client.Html.getAudioWav",L="qx.bom.client.Browser.getName",M="qx.bom.client.Css.getInlineBlock",F="qx.bom.client.Plugin.getPdf",G="qx.dynlocale",s="qx.bom.client.Html.getAudio",r="qx.core.Environment",u="qx.bom.client.CssTransform.getSupport",t="qx.bom.client.Html.getTextContent",o="qx.bom.client.Css.getPlaceholder",n="qx.bom.client.Css.getFloat",q="false",p="qx.bom.client.Html.getXul",m="qx.bom.client.Xml.getCreateNode",l="qxenv",T="qx.bom.client.Html.getSessionStorage",U="qx.bom.client.Html.getAudioAu",V="qx.bom.client.Css.getOpacity",W="qx.bom.client.Html.getVml",P="qx.bom.client.Css.getRgba",Q="qx.bom.client.Transport.getMaxConcurrentRequestCount",R="qx.bom.client.Css.getBorderRadius",S="qx.bom.client.Event.getPointer",X="qx.bom.client.Css.getGradients",Y="qx.bom.client.Transport.getSsl",C="qx.bom.client.Html.getWebWorker",B="qx.bom.client.Json.getJson",A="qx.bom.client.Browser.getQuirksMode",z="qx.bom.client.Css.getTextOverflow",y="qx.bom.client.Xml.getQualifiedItem",x="qx.bom.client.Html.getVideoOgg",w="&",v="qx.bom.client.Browser.getDocumentMode",E="qx.allowUrlVariants",D="qx.bom.client.Html.getContains",ba="qx.bom.client.Plugin.getActiveX",bb=".",bc="qx.bom.client.Xml.getDomProperties",bd="qx.bom.client.CssAnimation.getSupport",be="qx.debug.databinding",bf="qx.optimization.basecalls",bg="qx.bom.client.Browser.getVersion",bh="qx.bom.client.Css.getUserSelectNone",bi="true",bj="qx.bom.client.Html.getSvg",bx="qx.optimization.privates",bw="qx.bom.client.Plugin.getDivX",bv="qx.bom.client.Runtime.getName",bu="qx.bom.client.Html.getLocalStorage",bB="qx.bom.client.Flash.getStrictSecurityModel",bA="qx.aspects",bz="qx.debug",by="qx.dynamicmousewheel",bD="qx.bom.client.Html.getAudioMp3",bC="qx.bom.client.Engine.getName",bK="qx.bom.client.Plugin.getGears",bL="qx.bom.client.Plugin.getQuicktimeVersion",bI="qx.bom.client.Html.getAudioOgg",bJ="qx.bom.client.Plugin.getSilverlightVersion",bG="qx.bom.client.Html.getCompareDocumentPosition",bH="qx.bom.client.Flash.getExpressInstall",bE="qx.bom.client.OperatingSystem.getVersion",bF="qx.bom.client.Html.getXPath",bM="qx.bom.client.Html.getGeoLocation",bN="qx.bom.client.Css.getAppearance",cc="qx.mobile.nativescroll",cb="qx.bom.client.Xml.getDomParser",ce="qx.bom.client.Stylesheet.getAddImport",cd="qx.optimization.variants",cg="qx.bom.client.Html.getVideoWebm",cf="qx.bom.client.Flash.getVersion",ci="qx.bom.client.Css.getLegacyWebkitGradient",ch="qx.bom.client.PhoneGap.getNotification",ca="qx.bom.client.Html.getVideoH264",bY="qx.bom.client.Xml.getCreateElementNS";
qx.Bootstrap.define(r,{statics:{_checks:{},_asyncChecks:{},__e:{},_checksMap:{"engine.version":cu,"engine.name":bC,"browser.name":L,"browser.version":bg,"browser.documentmode":v,"browser.quirksmode":A,"runtime.name":bv,"device.name":bm,"locale":d,"locale.variant":cL,"os.name":K,"os.version":bE,"os.scrollBarOverlayed":cG,"plugin.gears":bK,"plugin.activex":ba,"plugin.quicktime":cB,"plugin.quicktime.version":bL,"plugin.windowsmedia":bo,"plugin.windowsmedia.version":b,"plugin.divx":bw,"plugin.divx.version":k,"plugin.silverlight":bW,"plugin.silverlight.version":bJ,"plugin.flash":bV,"plugin.flash.version":cf,"plugin.flash.express":bH,"plugin.flash.strictsecurity":bB,"plugin.pdf":F,"plugin.pdf.version":cF,"io.maxrequests":Q,"io.ssl":Y,"io.xhr":cK,"event.touch":bl,"event.pointer":S,"event.help":cH,"event.hashchange":bp,"ecmascript.objectcount":cx,"ecmascript.stacktrace":cA,"html.webworker":C,"html.filereader":g,"html.geolocation":bM,"html.audio":s,"html.audio.ogg":bI,"html.audio.mp3":bD,"html.audio.wav":O,"html.audio.au":U,"html.audio.aif":ck,"html.video":bn,"html.video.ogg":x,"html.video.h264":ca,"html.video.webm":cg,"html.storage.local":bu,"html.storage.session":T,"html.classlist":cI,"html.xpath":bF,"html.xul":p,"html.canvas":bU,"html.svg":bj,"html.vml":W,"html.dataset":cm,"html.dataurl":bS,"html.console":ct,"html.stylesheet.createstylesheet":c,"html.stylesheet.insertrule":co,"html.stylesheet.deleterule":j,"html.stylesheet.addimport":ce,"html.stylesheet.removeimport":bs,"html.element.contains":D,"html.element.compareDocumentPosition":bG,"html.element.textcontent":t,"html.image.naturaldimensions":bR,"json":B,"css.textoverflow":z,"css.placeholder":o,"css.borderradius":R,"css.borderimage":h,"css.borderimage.standardsyntax":cJ,"css.boxshadow":bq,"css.gradients":X,"css.gradient.linear":cD,"css.gradient.radial":bO,"css.gradient.legacywebkit":ci,"css.boxmodel":bX,"css.rgba":P,"css.userselect":bP,"css.userselect.none":bh,"css.usermodify":br,"css.appearance":bN,"css.float":n,"css.boxsizing":J,"css.translate3d":cs,"css.animation":bd,"css.transform":u,"css.transform.3d":cs,"css.inlineblock":M,"css.opacity":V,"css.overflowxy":I,"phonegap":cl,"phonegap.notification":ch,"xml.implementation":cw,"xml.domparser":cb,"xml.selectsinglenode":cy,"xml.selectnodes":bQ,"xml.getelementsbytagnamens":bT,"xml.domproperties":bc,"xml.attributens":bt,"xml.createnode":m,"xml.getqualifieditem":y,"xml.createelementns":bY},get:function(cN){if(qx.Bootstrap.DEBUG){var cP={"css.translate3d":cn,"css.gradients":cv,"ecmascript.objectcount":null};

if(cN in cP){qx.Bootstrap.warn("The key '"+cN+"' is deprecated."+(cP[cN]?" Please use '"+cP[cN]+"' instead.":""));
}}if(this.__e[cN]!=undefined){return this.__e[cN];
}var cR=this._checks[cN];

if(cR){var cQ=cR();
this.__e[cN]=cQ;
return cQ;
}var cO=this._getClassNameFromEnvKey(cN);

if(cO[0]!=undefined){var cS=cO[0];
var cT=cO[1];
var cQ=cS[cT]();
this.__e[cN]=cQ;
return cQ;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(cN+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},_getClassNameFromEnvKey:function(cU){var db=this._checksMap;

if(db[cU]!=undefined){var cW=db[cU];
var da=cW.lastIndexOf(bb);

if(da>-1){var cY=cW.slice(0,da);
var cV=cW.slice(da+1);
var cX=qx.Bootstrap.getByName(cY);

if(cX!=undefined){return [cX,cV];
}}}return [undefined,undefined];
},getAsync:function(dc,dd,self){var dh=this;

if(this.__e[dc]!=undefined){window.setTimeout(function(){dd.call(self,dh.__e[dc]);
},0);
return;
}var dg=this._asyncChecks[dc];

if(dg){dg(function(dj){dh.__e[dc]=dj;
dd.call(self,dj);
});
return;
}var df=this._getClassNameFromEnvKey(dc);

if(df[0]!=undefined){var di=df[0];
var de=df[1];
di[de](function(dk){dh.__e[dc]=dk;
dd.call(self,dk);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(dc+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(dl,dm){return this.__f(this.get(dl),dm);
},selectAsync:function(dn,dp,self){this.getAsync(dn,function(dq){var dr=this.__f(dn,dp);
dr.call(self,dq);
},this);
},__f:function(ds,dt){var dv=dt[ds];

if(dt.hasOwnProperty(ds)){return dv;
}for(var du in dt){if(du.indexOf(cq)!=-1){var dw=du.split(cq);

for(var i=0;i<dw.length;i++){if(dw[i]==ds){return dt[du];
}}}}
if(dt[cr]!==undefined){return dt[cr];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+ds+'" ('+(typeof ds)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(dt)+'] found, and no default ("default") given');
}},filter:function(dx){var dz=[];

for(var dy in dx){if(this.get(dy)){dz.push(dx[dy]);
}}return dz;
},invalidateCacheKey:function(dA){delete this.__e[dA];
},add:function(dB,dC){if(this._checks[dB]==undefined){if(dC instanceof Function){this._checks[dB]=dC;
}else{this._checks[dB]=this.__i(dC);
}}},addAsync:function(dD,dE){if(this._checks[dD]==undefined){this._asyncChecks[dD]=dE;
}},getChecks:function(){return this._checks;
},getAsyncChecks:function(){return this._asyncChecks;
},_initDefaultQxValues:function(){this.add(cp,function(){return false;
});
this.add(E,function(){return false;
});
this.add(cC,function(){return 0;
});
this.add(bz,function(){return true;
});
this.add(bA,function(){return false;
});
this.add(G,function(){return true;
});
this.add(N,function(){return false;
});
this.add(cc,function(){return false;
});
this.add(by,function(){return true;
});
this.add(be,function(){return false;
});
this.add(cj,function(){return false;
});
this.add(bf,function(){return false;
});
this.add(cM,function(){return false;
});
this.add(bx,function(){return false;
});
this.add(bk,function(){return false;
});
this.add(cz,function(){return false;
});
this.add(cd,function(){return false;
});
this.add(f,function(){return true;
});
this.add(H,function(){return true;
});
this.add(a,function(){return true;
});
this.add(e,function(){return true;
});
},__g:function(){if(qx&&qx.$$environment){for(var dG in qx.$$environment){var dF=qx.$$environment[dG];
this._checks[dG]=this.__i(dF);
}}},__h:function(){if(window.document&&window.document.location){var dH=window.document.location.search.slice(1).split(w);

for(var i=0;i<dH.length;i++){var dJ=dH[i].split(cE);

if(dJ.length!=3||dJ[0]!=l){continue;
}var dK=dJ[1];
var dI=decodeURIComponent(dJ[2]);
if(dI==bi){dI=true;
}else if(dI==q){dI=false;
}else if(/^(\d|\.)+$/.test(dI)){dI=parseFloat(dI);
}this._checks[dK]=this.__i(dI);
}}},__i:function(dL){return qx.Bootstrap.bind(function(dM){return dM;
},null,dL);
}},defer:function(dN){dN._initDefaultQxValues();
dN.__g();
if(dN.get(cp)===true){dN.__h();
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__bc:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__bc;
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
},addAdvice:function(o,p,q,name){this.__bc.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var j="function",h="Boolean",g="qx.Interface",f="Array",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(g,{statics:{define:function(name,k){if(k){if(k.extend&&!(qx.Bootstrap.getClass(k.extend)===f)){k.extend=[k.extend];
}var m=k.statics?k.statics:{};
if(k.extend){m.$$extends=k.extend;
}
if(k.properties){m.$$properties=k.properties;
}
if(k.members){m.$$members=k.members;
}
if(k.events){m.$$events=k.events;
}}else{var m={};
}m.$$type=c;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
qx.Interface.$$registry[name]=m;
return m;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(n){if(!n){return [];
}var o=n.concat();

for(var i=0,l=n.length;i<l;i++){if(n[i].$$extends){o.push.apply(o,this.flatten(n[i].$$extends));
}}return o;
},__j:function(p,q,r,s){var w=r.$$members;

if(w){for(var v in w){if(qx.Bootstrap.isFunction(w[v])){var u=this.__k(q,v);
var t=u||qx.Bootstrap.isFunction(p[v]);

if(!t){throw new Error('Implementation of method "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}var x=s===true&&!u&&!qx.util.OOUtil.hasInterface(q,r);

if(x){p[v]=this.__n(r,p[v],v,w[v]);
}}else{if(typeof p[v]===undefined){if(typeof p[v]!==j){throw new Error('Implementation of member "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}}}}}},__k:function(y,z){var D=z.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!D){return false;
}var A=qx.Bootstrap.firstLow(D[2]);
var B=qx.util.OOUtil.getPropertyDefinition(y,A);

if(!B){return false;
}var C=D[0]==b||D[0]==d;

if(C){return qx.util.OOUtil.getPropertyDefinition(y,A).check==h;
}return true;
},__l:function(E,F){if(F.$$properties){for(var G in F.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(E,G)){throw new Error('The property "'+G+'" is not supported by Class "'+E.classname+'"!');
}}}},__m:function(H,I){if(I.$$events){for(var J in I.$$events){if(!qx.util.OOUtil.supportsEvent(H,J)){throw new Error('The event "'+J+'" is not supported by Class "'+H.classname+'"!');
}}}},assertObject:function(K,L){var N=K.constructor;
this.__j(K,N,L,false);
this.__l(N,L);
this.__m(N,L);
var M=L.$$extends;

if(M){for(var i=0,l=M.length;i<l;i++){this.assertObject(K,M[i]);
}}},assert:function(O,P,Q){this.__j(O.prototype,O,P,Q);
this.__l(O,P);
this.__m(O,P);
var R=P.$$extends;

if(R){for(var i=0,l=R.length;i<l;i++){this.assert(O,R[i],Q);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__n:function(){},__c:null,__d:function(){}}});
})();
(function(){var g="emulated",f="native",e='"',d="[object Error]",c="qx.lang.Core",b="\\\\",a="\\\"";
qx.Bootstrap.define(c,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==d)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
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
}}[Array.prototype.every?f:g],stringQuote:{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,b).replace(/\"/g,a)+e;
}}[String.prototype.quote?f:g]}});
if(!Error.prototype.toString||Error.prototype.toString()==d){Error.prototype.toString=qx.lang.Core.errorToString;
}if(!Array.prototype.indexOf){Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
}
if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
}
if(!Array.prototype.forEach){Array.prototype.forEach=qx.lang.Core.arrayForEach;
}
if(!Array.prototype.filter){Array.prototype.filter=qx.lang.Core.arrayFilter;
}
if(!Array.prototype.map){Array.prototype.map=qx.lang.Core.arrayMap;
}
if(!Array.prototype.some){Array.prototype.some=qx.lang.Core.arraySome;
}
if(!Array.prototype.every){Array.prototype.every=qx.lang.Core.arrayEvery;
}if(!String.prototype.quote){String.prototype.quote=qx.lang.Core.stringQuote;
}})();
(function(){var bG=';',bF='return this.',bE="string",bD="boolean",bC="",bB='!==undefined)',bA="this.",bz="set",by="setThemed",bx="resetThemed",bm='else if(this.',bl="reset",bk="setRuntime",bj="init",bi="();",bh='else ',bg='if(this.',bf="resetRuntime",be="return this.",bd="get",bN=";",bO="(a[",bL=' of an instance of ',bM="refresh",bJ=' is not (yet) ready!");',bK="]);",bH='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bI='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bP='value !== null && value.nodeType === 9 && value.documentElement',bQ='value !== null && value.$$type === "Mixin"',bq='return init;',bp='var init=this.',bs='value !== null && value.nodeType === 1 && value.attributes',br="var parent = this.getLayoutParent();",bu="Error in property ",bt="property",bw='qx.core.Assert.assertInstance(value, Date, msg) || true',bv="if (!parent) return;",bo=" in method ",bn='qx.core.Assert.assertInstance(value, Error, msg) || true',b='Undefined value is not allowed!',c="inherit",d='Is invalid!',e="MSIE 6.0",f="': ",g=" of class ",h='value !== null && value.nodeType !== undefined',j='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',k="module.events",m='qx.core.Assert.assertPositiveInteger(value, msg) || true',bU='if(init==qx.core.Property.$$inherit)init=null;',bT='value !== null && value.$$type === "Interface"',bS='var inherit=prop.$$inherit;',bR="var value = parent.",bY="$$useinit_",bX="(value);",bW='Requires exactly one argument!',bV="$$runtime_",cb="$$user_",ca='qx.core.Assert.assertArray(value, msg) || true',L='qx.core.Assert.assertPositiveNumber(value, msg) || true',M=".prototype",J="Boolean",K='return value;',P='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',Q='Does not allow any arguments!',N="()",O="var a=arguments[0] instanceof Array?arguments[0]:arguments;",H='value !== null && value.$$type === "Theme"',I="())",u='return null;',t='qx.core.Assert.assertObject(value, msg) || true',w='qx.core.Assert.assertString(value, msg) || true',v="if (value===undefined) value = parent.",q='value !== null && value.$$type === "Class"',p='qx.core.Assert.assertFunction(value, msg) || true',s=".",r="object",o="$$init_",n="$$theme_",V='qx.core.Assert.assertMap(value, msg) || true',W="qx.aspects",X='qx.core.Assert.assertNumber(value, msg) || true',Y='Null value is not allowed!',R='qx.core.Assert.assertInteger(value, msg) || true',S="value",T="rv:1.8.1",U="shorthand",ba='qx.core.Assert.assertInstance(value, RegExp, msg) || true',bb='value !== null && value.type !== undefined',E='value !== null && value.document',D='throw new Error("Property ',C="(!this.",B='qx.core.Assert.assertBoolean(value, msg) || true',A="toggle",z="$$inherit_",y=" with incoming value '",x="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",G="qx.core.Property",F="is",bc='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(G,{statics:{__o:function(){if(qx.core.Environment.get(k)){qx.event.type.Data;
qx.event.dispatch.Direct;
}},__p:{"Boolean":B,"String":w,"Number":X,"Integer":R,"PositiveNumber":L,"PositiveInteger":m,"Error":bn,"RegExp":ba,"Object":t,"Array":ca,"Map":V,"Function":p,"Date":bw,"Node":h,"Element":bs,"Document":bP,"Window":E,"Event":bb,"Class":q,"Mixin":bQ,"Interface":bT,"Theme":H,"Color":bH,"Decorator":j,"Font":bI},__q:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:c,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bE,dereference:bD,inheritable:bD,nullable:bD,themeable:bD,refine:bD,init:null,apply:bE,event:bE,check:null,transform:bE,deferredInit:bD,validate:null},$$allowedGroupKeys:{name:bE,group:r,mode:bE,themeable:bD},$$inheritable:{},__r:function(cc){var cd=this.__s(cc);

if(!cd.length){var ce=function(){};
}else{ce=this.__t(cd);
}cc.prototype.$$refreshInheritables=ce;
},__s:function(cf){var ch=[];

while(cf){var cg=cf.$$properties;

if(cg){for(var name in this.$$inheritable){if(cg[name]&&cg[name].inheritable){ch.push(name);
}}}cf=cf.superclass;
}return ch;
},__t:function(ci){var cm=this.$$store.inherit;
var cl=this.$$store.init;
var ck=this.$$method.refresh;
var cj=[br,bv];

for(var i=0,l=ci.length;i<l;i++){var name=ci[i];
cj.push(bR,cm[name],bN,v,cl[name],bN,bA,ck[name],bX);
}return new Function(cj.join(bC));
},attachRefreshInheritables:function(cn){cn.prototype.$$refreshInheritables=function(){qx.core.Property.__r(cn);
return this.$$refreshInheritables();
};
},attachMethods:function(co,name,cp){cp.group?this.__u(co,cp,name):this.__v(co,cp,name);
},__u:function(cq,cr,name){var cy=qx.Bootstrap.firstUp(name);
var cx=cq.prototype;
var cz=cr.themeable===true;
var cA=[];
var cu=[];

if(cz){var cs=[];
var cw=[];
}var cv=O;
cA.push(cv);

if(cz){cs.push(cv);
}
if(cr.mode==U){var ct=x;
cA.push(ct);

if(cz){cs.push(ct);
}}
for(var i=0,a=cr.group,l=a.length;i<l;i++){cA.push(bA,this.$$method.set[a[i]],bO,i,bK);
cu.push(bA,this.$$method.reset[a[i]],bi);

if(cz){cs.push(bA,this.$$method.setThemed[a[i]],bO,i,bK);
cw.push(bA,this.$$method.resetThemed[a[i]],bi);
}}this.$$method.set[name]=bz+cy;
cx[this.$$method.set[name]]=new Function(cA.join(bC));
this.$$method.reset[name]=bl+cy;
cx[this.$$method.reset[name]]=new Function(cu.join(bC));

if(cz){this.$$method.setThemed[name]=by+cy;
cx[this.$$method.setThemed[name]]=new Function(cs.join(bC));
this.$$method.resetThemed[name]=bx+cy;
cx[this.$$method.resetThemed[name]]=new Function(cw.join(bC));
}},__v:function(cB,cC,name){var cE=qx.Bootstrap.firstUp(name);
var cG=cB.prototype;
if(cC.dereference===undefined&&typeof cC.check===bE){cC.dereference=this.__w(cC.check);
}var cF=this.$$method;
var cD=this.$$store;
cD.runtime[name]=bV+name;
cD.user[name]=cb+name;
cD.theme[name]=n+name;
cD.init[name]=o+name;
cD.inherit[name]=z+name;
cD.useinit[name]=bY+name;
cF.get[name]=bd+cE;
cG[cF.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cB,name,bd);
};
cF.set[name]=bz+cE;
cG[cF.set[name]]=function(cH){return qx.core.Property.executeOptimizedSetter(this,cB,name,bz,arguments);
};
cF.reset[name]=bl+cE;
cG[cF.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cB,name,bl);
};

if(cC.inheritable||cC.apply||cC.event||cC.deferredInit){cF.init[name]=bj+cE;
cG[cF.init[name]]=function(cI){return qx.core.Property.executeOptimizedSetter(this,cB,name,bj,arguments);
};
}
if(cC.inheritable){cF.refresh[name]=bM+cE;
cG[cF.refresh[name]]=function(cJ){return qx.core.Property.executeOptimizedSetter(this,cB,name,bM,arguments);
};
}cF.setRuntime[name]=bk+cE;
cG[cF.setRuntime[name]]=function(cK){return qx.core.Property.executeOptimizedSetter(this,cB,name,bk,arguments);
};
cF.resetRuntime[name]=bf+cE;
cG[cF.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cB,name,bf);
};

if(cC.themeable){cF.setThemed[name]=by+cE;
cG[cF.setThemed[name]]=function(cL){return qx.core.Property.executeOptimizedSetter(this,cB,name,by,arguments);
};
cF.resetThemed[name]=bx+cE;
cG[cF.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cB,name,bx);
};
}
if(cC.check===J){cG[A+cE]=new Function(be+cF.set[name]+C+cF.get[name]+I);
cG[F+cE]=new Function(be+cF.get[name]+N);
}},__w:function(cM){return !!this.__q[cM];
},__x:function(cN){return this.__q[cN]||qx.util.OOUtil.classIsDefined(cN)||(qx.Interface&&qx.Interface.isDefined(cN));
},__y:{0:bc,1:bW,2:b,3:Q,4:Y,5:d},error:function(cO,cP,cQ,cR,cS){var cT=cO.constructor.classname;
var cU=bu+cQ+g+cT+bo+this.$$method[cR][cQ]+y+cS+f;
throw new Error(cU+(this.__y[cP]||"Unknown reason: "+cP));
},__z:function(cV,cW,name,cX,cY,da){var db=this.$$method[cX][name];
{cW[db]=new Function(S,cY.join(bC));
};
if(qx.core.Environment.get(W)){cW[db]=qx.core.Aspect.wrap(cV.classname+s+db,cW[db],bt);
}qx.Bootstrap.setDisplayName(cW[db],cV.classname+M,db);
if(da===undefined){return cV[db]();
}else{return cV[db](da[0]);
}},executeOptimizedGetter:function(dc,dd,name,de){var dg=dd.$$properties[name];
var di=dd.prototype;
var df=[];
var dh=this.$$store;
df.push(bg,dh.runtime[name],bB);
df.push(bF,dh.runtime[name],bG);

if(dg.inheritable){df.push(bm,dh.inherit[name],bB);
df.push(bF,dh.inherit[name],bG);
df.push(bh);
}df.push(bg,dh.user[name],bB);
df.push(bF,dh.user[name],bG);

if(dg.themeable){df.push(bm,dh.theme[name],bB);
df.push(bF,dh.theme[name],bG);
}
if(dg.deferredInit&&dg.init===undefined){df.push(bm,dh.init[name],bB);
df.push(bF,dh.init[name],bG);
}df.push(bh);

if(dg.init!==undefined){if(dg.inheritable){df.push(bp,dh.init[name],bG);

if(dg.nullable){df.push(bU);
}else if(dg.init!==undefined){df.push(bF,dh.init[name],bG);
}else{df.push(P,name,bL,dd.classname,bJ);
}df.push(bq);
}else{df.push(bF,dh.init[name],bG);
}}else if(dg.inheritable||dg.nullable){df.push(u);
}else{df.push(D,name,bL,dd.classname,bJ);
}return this.__z(dc,di,name,de,df);
},executeOptimizedSetter:function(dj,dk,name,dl,dm){var ds=dk.$$properties[name];
var dr=dk.prototype;
var dp=[];
var dn=dl===bz||dl===by||dl===bk||(dl===bj&&ds.init===undefined);
var dq=ds.apply||ds.event||ds.inheritable;
var dt=this.__A(dl,name);
this.__B(dp,ds,name,dl,dn);

if(dn){this.__C(dp,dk,ds,name);
}
if(dq){this.__D(dp,dn,dt,dl);
}
if(ds.inheritable){dp.push(bS);
}
if(!dq){this.__F(dp,name,dl,dn);
}else{this.__G(dp,ds,name,dl,dn);
}
if(ds.inheritable){this.__H(dp,ds,name,dl);
}else if(dq){this.__I(dp,ds,name,dl);
}
if(dq){this.__J(dp,ds,name);
if(ds.inheritable&&dr._getChildren){this.__K(dp,name);
}}if(dn){dp.push(K);
}return this.__z(dj,dr,name,dl,dp,dm);
},__A:function(du,name){if(du==="setRuntime"||du==="resetRuntime"){var dv=this.$$store.runtime[name];
}else if(du==="setThemed"||du==="resetThemed"){dv=this.$$store.theme[name];
}else if(du==="init"){dv=this.$$store.init[name];
}else{dv=this.$$store.user[name];
}return dv;
},__B:function(dw,dx,name,dy,dz){{if(!dx.nullable||dx.check||dx.inheritable){dw.push('var prop=qx.core.Property;');
}if(dy==="set"){dw.push('if(value===undefined)prop.error(this,2,"',name,'","',dy,'",value);');
}};
},__C:function(dA,dB,dC,name){if(dC.transform){dA.push('value=this.',dC.transform,'(value);');
}if(dC.validate){if(typeof dC.validate==="string"){dA.push('this.',dC.validate,'(value);');
}else if(dC.validate instanceof Function){dA.push(dB.classname,'.$$properties.',name);
dA.push('.validate.call(this, value);');
}}},__D:function(dD,dE,dF,dG){var dH=(dG==="reset"||dG==="resetThemed"||dG==="resetRuntime");

if(dE){dD.push('if(this.',dF,'===value)return value;');
}else if(dH){dD.push('if(this.',dF,'===undefined)return;');
}},__E:undefined,__F:function(dI,name,dJ,dK){if(dJ==="setRuntime"){dI.push('this.',this.$$store.runtime[name],'=value;');
}else if(dJ==="resetRuntime"){dI.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dI.push('delete this.',this.$$store.runtime[name],';');
}else if(dJ==="set"){dI.push('this.',this.$$store.user[name],'=value;');
}else if(dJ==="reset"){dI.push('if(this.',this.$$store.user[name],'!==undefined)');
dI.push('delete this.',this.$$store.user[name],';');
}else if(dJ==="setThemed"){dI.push('this.',this.$$store.theme[name],'=value;');
}else if(dJ==="resetThemed"){dI.push('if(this.',this.$$store.theme[name],'!==undefined)');
dI.push('delete this.',this.$$store.theme[name],';');
}else if(dJ==="init"&&dK){dI.push('this.',this.$$store.init[name],'=value;');
}},__G:function(dL,dM,name,dN,dO){if(dM.inheritable){dL.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{dL.push('var computed, old;');
}dL.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dN==="resetRuntime"){dL.push('delete this.',this.$$store.runtime[name],';');
dL.push('if(this.',this.$$store.user[name],'!==undefined)');
dL.push('computed=this.',this.$$store.user[name],';');
dL.push('else if(this.',this.$$store.theme[name],'!==undefined)');
dL.push('computed=this.',this.$$store.theme[name],';');
dL.push('else if(this.',this.$$store.init[name],'!==undefined){');
dL.push('computed=this.',this.$$store.init[name],';');
dL.push('this.',this.$$store.useinit[name],'=true;');
dL.push('}');
}else{dL.push('old=computed=this.',this.$$store.runtime[name],';');
if(dN==="set"){dL.push('this.',this.$$store.user[name],'=value;');
}else if(dN==="reset"){dL.push('delete this.',this.$$store.user[name],';');
}else if(dN==="setThemed"){dL.push('this.',this.$$store.theme[name],'=value;');
}else if(dN==="resetThemed"){dL.push('delete this.',this.$$store.theme[name],';');
}else if(dN==="init"&&dO){dL.push('this.',this.$$store.init[name],'=value;');
}}dL.push('}');
dL.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(dN==="set"){if(!dM.inheritable){dL.push('old=this.',this.$$store.user[name],';');
}dL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dN==="reset"){if(!dM.inheritable){dL.push('old=this.',this.$$store.user[name],';');
}dL.push('delete this.',this.$$store.user[name],';');
dL.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dL.push('computed=this.',this.$$store.runtime[name],';');
dL.push('if(this.',this.$$store.theme[name],'!==undefined)');
dL.push('computed=this.',this.$$store.theme[name],';');
dL.push('else if(this.',this.$$store.init[name],'!==undefined){');
dL.push('computed=this.',this.$$store.init[name],';');
dL.push('this.',this.$$store.useinit[name],'=true;');
dL.push('}');
}else{if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dM.inheritable){dL.push('computed=this.',this.$$store.user[name],';');
}else{dL.push('old=computed=this.',this.$$store.user[name],';');
}if(dN==="setThemed"){dL.push('this.',this.$$store.theme[name],'=value;');
}else if(dN==="resetThemed"){dL.push('delete this.',this.$$store.theme[name],';');
}else if(dN==="init"&&dO){dL.push('this.',this.$$store.init[name],'=value;');
}}dL.push('}');
if(dM.themeable){dL.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!dM.inheritable){dL.push('old=this.',this.$$store.theme[name],';');
}
if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dN==="set"){dL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dN==="setThemed"){dL.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dN==="resetThemed"){dL.push('delete this.',this.$$store.theme[name],';');
dL.push('if(this.',this.$$store.init[name],'!==undefined){');
dL.push('computed=this.',this.$$store.init[name],';');
dL.push('this.',this.$$store.useinit[name],'=true;');
dL.push('}');
}else if(dN==="init"){if(dO){dL.push('this.',this.$$store.init[name],'=value;');
}dL.push('computed=this.',this.$$store.theme[name],';');
}else if(dN==="refresh"){dL.push('computed=this.',this.$$store.theme[name],';');
}dL.push('}');
}dL.push('else if(this.',this.$$store.useinit[name],'){');

if(!dM.inheritable){dL.push('old=this.',this.$$store.init[name],';');
}
if(dN==="init"){if(dO){dL.push('computed=this.',this.$$store.init[name],'=value;');
}else{dL.push('computed=this.',this.$$store.init[name],';');
}}else if(dN==="set"||dN==="setRuntime"||dN==="setThemed"||dN==="refresh"){dL.push('delete this.',this.$$store.useinit[name],';');

if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dN==="set"){dL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dN==="setThemed"){dL.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dN==="refresh"){dL.push('computed=this.',this.$$store.init[name],';');
}}dL.push('}');
if(dN==="set"||dN==="setRuntime"||dN==="setThemed"||dN==="init"){dL.push('else{');

if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dN==="set"){dL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dN==="setThemed"){dL.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dN==="init"){if(dO){dL.push('computed=this.',this.$$store.init[name],'=value;');
}else{dL.push('computed=this.',this.$$store.init[name],';');
}dL.push('this.',this.$$store.useinit[name],'=true;');
}dL.push('}');
}},__H:function(dP,dQ,name,dR){dP.push('if(computed===undefined||computed===inherit){');

if(dR==="refresh"){dP.push('computed=value;');
}else{dP.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dP.push('if((computed===undefined||computed===inherit)&&');
dP.push('this.',this.$$store.init[name],'!==undefined&&');
dP.push('this.',this.$$store.init[name],'!==inherit){');
dP.push('computed=this.',this.$$store.init[name],';');
dP.push('this.',this.$$store.useinit[name],'=true;');
dP.push('}else{');
dP.push('delete this.',this.$$store.useinit[name],';}');
dP.push('}');
dP.push('if(old===computed)return value;');
dP.push('if(computed===inherit){');
dP.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dP.push('}');
dP.push('else if(computed===undefined)');
dP.push('delete this.',this.$$store.inherit[name],';');
dP.push('else this.',this.$$store.inherit[name],'=computed;');
dP.push('var backup=computed;');
if(dQ.init!==undefined&&dR!=="init"){dP.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dP.push('if(old===undefined)old=null;');
}dP.push('if(computed===undefined||computed==inherit)computed=null;');
},__I:function(dS,dT,name,dU){if(dU!=="set"&&dU!=="setRuntime"&&dU!=="setThemed"){dS.push('if(computed===undefined)computed=null;');
}dS.push('if(old===computed)return value;');
if(dT.init!==undefined&&dU!=="init"){dS.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dS.push('if(old===undefined)old=null;');
}},__J:function(dV,dW,name){if(dW.apply){dV.push('this.',dW.apply,'(computed, old, "',name,'");');
}if(dW.event){dV.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",dW.event,"')){","reg.fireEvent(this, '",dW.event,"', qx.event.type.Data, [computed, old]",")}");
}},__K:function(dX,name){dX.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
dX.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
dX.push('}');
}},defer:function(dY){var eb=navigator.userAgent.indexOf(e)!=-1;
var ea=navigator.userAgent.indexOf(T)!=-1;
if(eb||ea){dY.__w=dY.__x;
}}});
})();
(function(){var k="qx.aspects",j="Array",h=".",g="static",f="[Class ",e="]",d="constructor",c="extend",b="qx.Class";
qx.Bootstrap.define(b,{statics:{__L:qx.core.Environment.get("module.property")?qx.core.Property:null,define:function(name,m){if(!m){var m={};
}if(m.include&&!(qx.Bootstrap.getClass(m.include)===j)){m.include=[m.include];
}if(m.implement&&!(qx.Bootstrap.getClass(m.implement)===j)){m.implement=[m.implement];
}var n=false;

if(!m.hasOwnProperty(c)&&!m.type){m.type=g;
n=true;
}var o=this.__O(name,m.type,m.extend,m.statics,m.construct,m.destruct,m.include);
if(m.extend){if(m.properties){this.__Q(o,m.properties,true);
}if(m.members){this.__S(o,m.members,true,true,false);
}if(m.events){this.__P(o,m.events,true);
}if(m.include){for(var i=0,l=m.include.length;i<l;i++){this.__W(o,m.include[i],false);
}}}if(m.environment){for(var p in m.environment){qx.core.Environment.add(p,m.environment[p]);
}}if(m.implement){for(var i=0,l=m.implement.length;i<l;i++){this.__U(o,m.implement[i]);
}}if(m.defer){m.defer.self=o;
m.defer(o,o.prototype,{add:function(name,q){var r={};
r[name]=q;
qx.Class.__Q(o,r,true);
}});
}return o;
},undefine:function(name){delete this.$$registry[name];
var s=name.split(h);
var u=[window];

for(var i=0;i<s.length;i++){u.push(u[i][s[i]]);
}for(var i=u.length-1;i>=1;i--){var t=u[i];
var parent=u[i-1];

if(qx.Bootstrap.isFunction(t)||qx.Bootstrap.objectGetLength(t)===0){delete parent[s[i-1]];
}else{break;
}}},isDefined:qx.util.OOUtil.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(v,w){qx.Class.__W(v,w,false);
},patch:function(x,y){qx.Class.__W(x,y,true);
},isSubClassOf:function(z,A){if(!z){return false;
}
if(z==A){return true;
}
if(z.prototype instanceof A){return true;
}return false;
},getPropertyDefinition:qx.util.OOUtil.getPropertyDefinition,getProperties:function(B){var C=[];

while(B){if(B.$$properties){C.push.apply(C,qx.Bootstrap.getKeys(B.$$properties));
}B=B.superclass;
}return C;
},getByProperty:function(D,name){while(D){if(D.$$properties&&D.$$properties[name]){return D;
}D=D.superclass;
}return null;
},hasProperty:qx.util.OOUtil.hasProperty,getEventType:qx.util.OOUtil.getEventType,supportsEvent:qx.util.OOUtil.supportsEvent,hasOwnMixin:function(E,F){return E.$$includes&&E.$$includes.indexOf(F)!==-1;
},getByMixin:function(G,H){var I,i,l;

while(G){if(G.$$includes){I=G.$$flatIncludes;

for(i=0,l=I.length;i<l;i++){if(I[i]===H){return G;
}}}G=G.superclass;
}return null;
},getMixins:qx.util.OOUtil.getMixins,hasMixin:function(J,K){return !!this.getByMixin(J,K);
},hasOwnInterface:function(L,M){return L.$$implements&&L.$$implements.indexOf(M)!==-1;
},getByInterface:qx.util.OOUtil.getByInterface,getInterfaces:function(N){var O=[];

while(N){if(N.$$implements){O.push.apply(O,N.$$flatImplements);
}N=N.superclass;
}return O;
},hasInterface:qx.util.OOUtil.hasInterface,implementsInterface:function(P,Q){var R=P.constructor;

if(this.hasInterface(R,Q)){return true;
}
try{qx.Interface.assertObject(P,Q);
return true;
}catch(S){}
try{qx.Interface.assert(R,Q,false);
return true;
}catch(T){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return f+this.classname+e;
},$$registry:qx.Bootstrap.$$registry,__c:null,__M:null,__d:function(){},__N:function(){},__O:function(name,U,V,W,X,Y,ba){var bd;

if(!V&&qx.core.Environment.get("qx.aspects")==false){bd=W||{};
qx.Bootstrap.setDisplayNames(bd,name);
}else{var bd={};

if(V){if(!X){X=this.__X();
}
if(this.__ba(V,ba)){bd=this.__bb(X,name,U);
}else{bd=X;
}if(U==="singleton"){bd.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(X,name,"constructor");
}if(W){qx.Bootstrap.setDisplayNames(W,name);
var be;

for(var i=0,a=qx.Bootstrap.getKeys(W),l=a.length;i<l;i++){be=a[i];
var bb=W[be];

if(qx.core.Environment.get("qx.aspects")){if(bb instanceof Function){bb=qx.core.Aspect.wrap(name+"."+be,bb,"static");
}bd[be]=bb;
}else{bd[be]=bb;
}}}}var bc=qx.Bootstrap.createNamespace(name,bd);
bd.name=bd.classname=name;
bd.basename=bc;
bd.$$type="Class";

if(U){bd.$$classtype=U;
}if(!bd.hasOwnProperty("toString")){bd.toString=this.genericToString;
}
if(V){qx.Bootstrap.extendClass(bd,X,V,name,bc);
if(Y){if(qx.core.Environment.get("qx.aspects")){Y=qx.core.Aspect.wrap(name,Y,"destructor");
}bd.$$destructor=Y;
qx.Bootstrap.setDisplayName(Y,name,"destruct");
}}this.$$registry[name]=bd;
return bd;
},__P:function(bf,bg,bh){var bi,bi;

if(bf.$$events){for(var bi in bg){bf.$$events[bi]=bg[bi];
}}else{bf.$$events=bg;
}},__Q:function(bj,bk,bl){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");
}var bm;

if(bl===undefined){bl=false;
}var bn=bj.prototype;

for(var name in bk){bm=bk[name];
bm.name=name;
if(!bm.refine){if(bj.$$properties===undefined){bj.$$properties={};
}bj.$$properties[name]=bm;
}if(bm.init!==undefined){bj.prototype["$$init_"+name]=bm.init;
}if(bm.event!==undefined){if(!qx.core.Environment.get("module.events")){throw new Error("Events module not enabled.");
}var event={};
event[bm.event]="qx.event.type.Data";
this.__P(bj,event,bl);
}if(bm.inheritable){this.__L.$$inheritable[name]=true;

if(!bn.$$refreshInheritables){this.__L.attachRefreshInheritables(bj);
}}
if(!bm.refine){this.__L.attachMethods(bj,name,bm);
}}},__R:null,__S:function(bo,bp,bq,br,bs){var bt=bo.prototype;
var bv,bu;
qx.Bootstrap.setDisplayNames(bp,bo.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bp),l=a.length;i<l;i++){bv=a[i];
bu=bp[bv];
if(br!==false&&bu instanceof Function&&bu.$$type==null){if(bs==true){bu=this.__T(bu,bt[bv]);
}else{if(bt[bv]){bu.base=bt[bv];
}bu.self=bo;
}
if(qx.core.Environment.get("qx.aspects")){bu=qx.core.Aspect.wrap(bo.classname+"."+bv,bu,"member");
}}bt[bv]=bu;
}},__T:function(bw,bx){if(bx){return function(){var bz=bw.base;
bw.base=bx;
var by=bw.apply(this,arguments);
bw.base=bz;
return by;
};
}else{return bw;
}},__U:function(bA,bB){var bC=qx.Interface.flatten([bB]);

if(bA.$$implements){bA.$$implements.push(bB);
bA.$$flatImplements.push.apply(bA.$$flatImplements,bC);
}else{bA.$$implements=[bB];
bA.$$flatImplements=bC;
}},__V:function(bD){var name=bD.classname;
var bE=this.__bb(bD,name,bD.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bD),l=a.length;i<l;i++){bF=a[i];
bE[bF]=bD[bF];
}bE.prototype=bD.prototype;
var bH=bD.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bH),l=a.length;i<l;i++){bF=a[i];
var bI=bH[bF];
if(bI&&bI.self==bD){bI.self=bE;
}}for(var bF in this.$$registry){var bG=this.$$registry[bF];

if(!bG){continue;
}
if(bG.base==bD){bG.base=bE;
}
if(bG.superclass==bD){bG.superclass=bE;
}
if(bG.$$original){if(bG.$$original.base==bD){bG.$$original.base=bE;
}
if(bG.$$original.superclass==bD){bG.$$original.superclass=bE;
}}}qx.Bootstrap.createNamespace(name,bE);
this.$$registry[name]=bE;
return bE;
},__W:function(bJ,bK,bL){if(this.hasMixin(bJ,bK)){return;
}var bO=bJ.$$original;

if(bK.$$constructor&&!bO){bJ=this.__V(bJ);
}var bN=qx.Mixin.flatten([bK]);
var bM;

for(var i=0,l=bN.length;i<l;i++){bM=bN[i];
if(bM.$$events){this.__P(bJ,bM.$$events,bL);
}if(bM.$$properties){this.__Q(bJ,bM.$$properties,bL);
}if(bM.$$members){this.__S(bJ,bM.$$members,bL,bL,bL);
}}if(bJ.$$includes){bJ.$$includes.push(bK);
bJ.$$flatIncludes.push.apply(bJ.$$flatIncludes,bN);
}else{bJ.$$includes=[bK];
bJ.$$flatIncludes=bN;
}},__X:function(){function bP(){bP.base.apply(this,arguments);
}return bP;
},__Y:function(){return function(){};
},__ba:function(bQ,bR){if(bQ&&bQ.$$includes){var bS=bQ.$$flatIncludes;

for(var i=0,l=bS.length;i<l;i++){if(bS[i].$$constructor){return true;
}}}if(bR){var bT=qx.Mixin.flatten(bR);

for(var i=0,l=bT.length;i<l;i++){if(bT[i].$$constructor){return true;
}}}return false;
},__bb:function(bU,name,bV){var bX=function(){var cb=bX;
var ca=cb.$$original.apply(this,arguments);
if(cb.$$includes){var bY=cb.$$flatIncludes;

for(var i=0,l=bY.length;i<l;i++){if(bY[i].$$constructor){bY[i].$$constructor.apply(this,arguments);
}}}return ca;
};

if(qx.core.Environment.get(k)){var bW=qx.core.Aspect.wrap(name,bX,d);
bX.$$original=bU;
bX.constructor=bW;
bX=bW;
}bX.$$original=bU;
bU.wrapper=bX;
return bX;
}},defer:function(){if(qx.core.Environment.get(k)){for(var cc in qx.Bootstrap.$$registry){var cd=qx.Bootstrap.$$registry[cc];

for(var ce in cd){if(cd[ce] instanceof Function){cd[ce]=qx.core.Aspect.wrap(cc+h+ce,cd[ce],g);
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
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="set",E="deepBinding",D="item",C="reset",B="' (",A="Boolean",z=") to the object '",y="Integer",x=" of object ",w="qx.data.SingleValueBinding",v="Binding property ",t="Binding from '",u="PositiveNumber",r="PositiveInteger",s="Binding does not exist!",p=").",q="Date",n=" not possible: No event available. ";
qx.Class.define(w,{statics:{__bg:{},bind:function(F,G,H,I,J){var U=this.__bi(F,G,H,I,J);
var P=G.split(d);
var L=this.__bo(P);
var T=[];
var Q=[];
var R=[];
var N=[];
var O=F;
try{for(var i=0;i<P.length;i++){if(L[i]!==l){N.push(g);
}else{N.push(this.__bj(O,P[i]));
}T[i]=O;
if(i==P.length-1){if(L[i]!==l){var Y=L[i]===h?O.length-1:L[i];
var K=O.getItem(Y);
this.__bn(K,H,I,J,F);
R[i]=this.__bp(O,N[i],H,I,J,L[i]);
}else{if(P[i]!=null&&O[m+qx.lang.String.firstUp(P[i])]!=null){var K=O[m+qx.lang.String.firstUp(P[i])]();
this.__bn(K,H,I,J,F);
}R[i]=this.__bp(O,N[i],H,I,J);
}}else{var V={index:i,propertyNames:P,sources:T,listenerIds:R,arrayIndexValues:L,targetObject:H,targetPropertyChain:I,options:J,listeners:Q};
var S=qx.lang.Function.bind(this.__bh,this,V);
Q.push(S);
R[i]=O.addListener(N[i],S);
}if(O[m+qx.lang.String.firstUp(P[i])]==null){O=null;
}else if(L[i]!==l){O=O[m+qx.lang.String.firstUp(P[i])](L[i]);
}else{O=O[m+qx.lang.String.firstUp(P[i])]();
}
if(!O){break;
}}}catch(ba){for(var i=0;i<T.length;i++){if(T[i]&&R[i]){T[i].removeListenerById(R[i]);
}}var X=U.targets;
var M=U.listenerIds[i];
for(var i=0;i<X.length;i++){if(X[i]&&M[i]){X[i].removeListenerById(M[i]);
}}throw ba;
}var W={type:E,listenerIds:R,sources:T,targetListenerIds:U.listenerIds,targets:U.targets};
this.__bq(W,F,G,H,I);
return W;
},__bh:function(bb){if(bb.options&&bb.options.onUpdate){bb.options.onUpdate(bb.sources[bb.index],bb.targetObject);
}for(var j=bb.index+1;j<bb.propertyNames.length;j++){var bf=bb.sources[j];
bb.sources[j]=null;

if(!bf){continue;
}bf.removeListenerById(bb.listenerIds[j]);
}var bf=bb.sources[bb.index];
for(var j=bb.index+1;j<bb.propertyNames.length;j++){if(bb.arrayIndexValues[j-1]!==l){bf=bf[m+qx.lang.String.firstUp(bb.propertyNames[j-1])](bb.arrayIndexValues[j-1]);
}else{bf=bf[m+qx.lang.String.firstUp(bb.propertyNames[j-1])]();
}bb.sources[j]=bf;
if(!bf){this.__bk(bb.targetObject,bb.targetPropertyChain);
break;
}if(j==bb.propertyNames.length-1){if(qx.Class.implementsInterface(bf,qx.data.IListData)){var bg=bb.arrayIndexValues[j]===h?bf.length-1:bb.arrayIndexValues[j];
var bd=bf.getItem(bg);
this.__bn(bd,bb.targetObject,bb.targetPropertyChain,bb.options,bb.sources[bb.index]);
bb.listenerIds[j]=this.__bp(bf,g,bb.targetObject,bb.targetPropertyChain,bb.options,bb.arrayIndexValues[j]);
}else{if(bb.propertyNames[j]!=null&&bf[m+qx.lang.String.firstUp(bb.propertyNames[j])]!=null){var bd=bf[m+qx.lang.String.firstUp(bb.propertyNames[j])]();
this.__bn(bd,bb.targetObject,bb.targetPropertyChain,bb.options,bb.sources[bb.index]);
}var be=this.__bj(bf,bb.propertyNames[j]);
bb.listenerIds[j]=this.__bp(bf,be,bb.targetObject,bb.targetPropertyChain,bb.options);
}}else{if(bb.listeners[j]==null){var bc=qx.lang.Function.bind(this.__bh,this,bb);
bb.listeners.push(bc);
}if(qx.Class.implementsInterface(bf,qx.data.IListData)){var be=g;
}else{var be=this.__bj(bf,bb.propertyNames[j]);
}bb.listenerIds[j]=bf.addListener(be,bb.listeners[j]);
}}},__bi:function(bh,bi,bj,bk,bl){var bp=bk.split(d);
var bn=this.__bo(bp);
var bu=[];
var bt=[];
var br=[];
var bq=[];
var bo=bj;
for(var i=0;i<bp.length-1;i++){if(bn[i]!==l){bq.push(g);
}else{try{bq.push(this.__bj(bo,bp[i]));
}catch(e){break;
}}bu[i]=bo;
var bs=function(){for(var j=i+1;j<bp.length-1;j++){var bx=bu[j];
bu[j]=null;

if(!bx){continue;
}bx.removeListenerById(br[j]);
}var bx=bu[i];
for(var j=i+1;j<bp.length-1;j++){var bv=qx.lang.String.firstUp(bp[j-1]);
if(bn[j-1]!==l){var by=bn[j-1]===h?bx.getLength()-1:bn[j-1];
bx=bx[m+bv](by);
}else{bx=bx[m+bv]();
}bu[j]=bx;
if(bt[j]==null){bt.push(bs);
}if(qx.Class.implementsInterface(bx,qx.data.IListData)){var bw=g;
}else{try{var bw=qx.data.SingleValueBinding.__bj(bx,bp[j]);
}catch(e){break;
}}br[j]=bx.addListener(bw,bt[j]);
}qx.data.SingleValueBinding.updateTarget(bh,bi,bj,bk,bl);
};
bt.push(bs);
br[i]=bo.addListener(bq[i],bs);
var bm=qx.lang.String.firstUp(bp[i]);
if(bo[m+bm]==null){bo=null;
}else if(bn[i]!==l){bo=bo[m+bm](bn[i]);
}else{bo=bo[m+bm]();
}
if(!bo){break;
}}return {listenerIds:br,targets:bu};
},updateTarget:function(bz,bA,bB,bC,bD){var bE=this.getValueFromObject(bz,bA);
bE=qx.data.SingleValueBinding.__br(bE,bB,bC,bD,bz);
this.__bl(bB,bC,bE);
},getValueFromObject:function(o,bF){var bJ=this.__bm(o,bF);
var bH;

if(bJ!=null){var bL=bF.substring(bF.lastIndexOf(d)+1,bF.length);
if(bL.charAt(bL.length-1)==f){var bG=bL.substring(bL.lastIndexOf(k)+1,bL.length-1);
var bI=bL.substring(0,bL.lastIndexOf(k));
var bK=bJ[m+qx.lang.String.firstUp(bI)]();

if(bG==h){bG=bK.length-1;
}
if(bK!=null){bH=bK.getItem(bG);
}}else{bH=bJ[m+qx.lang.String.firstUp(bL)]();
}}return bH;
},__bj:function(bM,bN){var bO=this.__bs(bM,bN);
if(bO==null){if(qx.Class.supportsEvent(bM.constructor,bN)){bO=bN;
}else if(qx.Class.supportsEvent(bM.constructor,g+qx.lang.String.firstUp(bN))){bO=g+qx.lang.String.firstUp(bN);
}else{throw new qx.core.AssertionError(v+bN+x+bM+n);
}}return bO;
},__bk:function(bP,bQ){var bR=this.__bm(bP,bQ);

if(bR!=null){var bS=bQ.substring(bQ.lastIndexOf(d)+1,bQ.length);
if(bS.charAt(bS.length-1)==f){this.__bl(bP,bQ,null);
return;
}if(bR[C+qx.lang.String.firstUp(bS)]!=undefined){bR[C+qx.lang.String.firstUp(bS)]();
}else{bR[a+qx.lang.String.firstUp(bS)](null);
}}},__bl:function(bT,bU,bV){var ca=this.__bm(bT,bU);

if(ca!=null){var cb=bU.substring(bU.lastIndexOf(d)+1,bU.length);
if(cb.charAt(cb.length-1)==f){var bW=cb.substring(cb.lastIndexOf(k)+1,cb.length-1);
var bY=cb.substring(0,cb.lastIndexOf(k));
var bX=bT;

if(!qx.Class.implementsInterface(bX,qx.data.IListData)){bX=ca[m+qx.lang.String.firstUp(bY)]();
}
if(bW==h){bW=bX.length-1;
}
if(bX!=null){bX.setItem(bW,bV);
}}else{ca[a+qx.lang.String.firstUp(cb)](bV);
}}},__bm:function(cc,cd){var cg=cd.split(d);
var ch=cc;
for(var i=0;i<cg.length-1;i++){try{var cf=cg[i];
if(cf.indexOf(f)==cf.length-1){var ce=cf.substring(cf.indexOf(k)+1,cf.length-1);
cf=cf.substring(0,cf.indexOf(k));
}if(cf!=l){ch=ch[m+qx.lang.String.firstUp(cf)]();
}if(ce!=null){if(ce==h){ce=ch.length-1;
}ch=ch.getItem(ce);
ce=null;
}}catch(ci){return null;
}}return ch;
},__bn:function(cj,ck,cl,cm,cn){cj=this.__br(cj,ck,cl,cm,cn);
if(cj===undefined){this.__bk(ck,cl);
}if(cj!==undefined){try{this.__bl(ck,cl,cj);
if(cm&&cm.onUpdate){cm.onUpdate(cn,ck,cj);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cm&&cm.onSetFail){cm.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cj+" on "+ck+". Error message: "+e);
}}}},__bo:function(co){var cp=[];
for(var i=0;i<co.length;i++){var name=co[i];
if(qx.lang.String.endsWith(name,f)){var cq=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cq!==h){if(cq==l||isNaN(parseInt(cq,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){co[i]=name.substring(0,name.indexOf(k));
cp[i]=l;
cp[i+1]=cq;
co.splice(i+1,0,D);
i++;
}else{cp[i]=cq;
co.splice(i,1,D);
}}else{cp[i]=l;
}}return cp;
},__bp:function(cr,cs,ct,cu,cv,cw){var cx;
var cz=function(cA,e){if(cA!==l){if(cA===h){cA=cr.length-1;
}var cD=cr.getItem(cA);
if(cD===undefined){qx.data.SingleValueBinding.__bk(ct,cu);
}var cB=e.getData().start;
var cC=e.getData().end;

if(cA<cB||cA>cC){return;
}}else{var cD=e.getData();
}cD=qx.data.SingleValueBinding.__br(cD,ct,cu,cv,cr);
try{if(cD!==undefined){qx.data.SingleValueBinding.__bl(ct,cu,cD);
}else{qx.data.SingleValueBinding.__bk(ct,cu);
}if(cv&&cv.onUpdate){cv.onUpdate(cr,ct,cD);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cv&&cv.onSetFail){cv.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cD+" on "+ct+". Error message: "+e);
}}};
if(!cw){cw=l;
}cz=qx.lang.Function.bind(cz,cr,cw);
var cy=cr.addListener(cs,cz);
return cy;
},__bq:function(cE,cF,cG,cH,cI){if(this.__bg[cF.toHashCode()]===undefined){this.__bg[cF.toHashCode()]=[];
}this.__bg[cF.toHashCode()].push([cE,cF,cG,cH,cI]);
},__br:function(cJ,cK,cL,cM,cN){if(cM&&cM.converter){var cP;

if(cK.getModel){cP=cK.getModel();
}return cM.converter(cJ,cP,cN,cK);
}else{var cR=this.__bm(cK,cL);
var cS=cL.substring(cL.lastIndexOf(d)+1,cL.length);
if(cR==null){return cJ;
}var cQ=qx.Class.getPropertyDefinition(cR.constructor,cS);
var cO=cQ==null?l:cQ.check;
return this.__bt(cJ,cO);
}},__bs:function(cT,cU){var cV=qx.Class.getPropertyDefinition(cT.constructor,cU);

if(cV==null){return null;
}return cV.event;
},__bt:function(cW,cX){var cY=qx.lang.Type.getClass(cW);
if((cY==c||cY==b)&&(cX==y||cX==r)){cW=parseInt(cW,10);
}if((cY==A||cY==c||cY==q)&&cX==b){cW=cW+l;
}if((cY==c||cY==b)&&(cX==c||cX==u)){cW=parseFloat(cW);
}return cW;
},removeBindingFromObject:function(da,db){if(db.type==E){for(var i=0;i<db.sources.length;i++){if(db.sources[i]){db.sources[i].removeListenerById(db.listenerIds[i]);
}}for(var i=0;i<db.targets.length;i++){if(db.targets[i]){db.targets[i].removeListenerById(db.targetListenerIds[i]);
}}}else{da.removeListenerById(db);
}var dc=this.__bg[da.toHashCode()];
if(dc!=undefined){for(var i=0;i<dc.length;i++){if(dc[i][0]==db){qx.lang.Array.remove(dc,dc[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(dd){var de=this.__bg[dd.toHashCode()];

if(de!=undefined){for(var i=de.length-1;i>=0;i--){this.removeBindingFromObject(dd,de[i][0]);
}}},getAllBindingsForObject:function(df){if(this.__bg[df.toHashCode()]===undefined){this.__bg[df.toHashCode()]=[];
}return this.__bg[df.toHashCode()];
},removeAllBindings:function(){for(var dh in this.__bg){var dg=qx.core.ObjectRegistry.fromHashCode(dh);
if(dg==null){delete this.__bg[dh];
continue;
}this.removeAllBindingsForObject(dg);
}this.__bg={};
},getAllBindings:function(){return this.__bg;
},showBindingInLog:function(di,dj){var dl;
for(var i=0;i<this.__bg[di.toHashCode()].length;i++){if(this.__bg[di.toHashCode()][i][0]==dj){dl=this.__bg[di.toHashCode()][i];
break;
}}
if(dl===undefined){var dk=s;
}else{var dk=t+dl[1]+B+dl[2]+z+dl[3]+B+dl[4]+p;
}qx.log.Logger.debug(dk);
},showAllBindingsInLog:function(){for(var dn in this.__bg){var dm=qx.core.ObjectRegistry.fromHashCode(dn);

for(var i=0;i<this.__bg[dn].length;i++){this.showBindingInLog(dm,this.__bg[dn][i][0]);
}}}}});
})();
(function(){var p="",o="g",n="]",m='\\u',l="undefined",k='\\$1',j="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h='-',g="qx.lang.String",f="(^|[^",c="0",e="%",d=' ',b='\n',a="])[";
qx.Bootstrap.define(g,{statics:{__bu:j,__bv:null,__bw:{},camelCase:function(q){var r=this.__bw[q];

if(!r){r=q.replace(/\-([a-z])/g,function(s,t){return t.toUpperCase();
});
this.__bw[q]=r;
}return r;
},hyphenate:function(u){var v=this.__bw[u];

if(!v){v=u.replace(/[A-Z]/g,function(w){return (h+w.charAt(0).toLowerCase());
});
this.__bw[u]=v;
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
(function(){var g="mshtml",f="engine.name",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Bootstrap.define(d,{statics:{toArray:function(h,j){return this.cast(h,Array,j);
},cast:function(k,m,n){if(k.constructor===m){return k;
}
if(qx.data&&qx.data.IListData){if(qx.Class&&qx.Class.hasInterface(k,qx.data.IListData)){var k=k.toArray();
}}var o=new m;
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
}}else{var bg=bi[bn];

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
(function(){var u=".",t="function",s="",r="gecko",q="Maple",p="[object Opera]",o="mshtml",n="8.0",m="AppleWebKit/",l="9.0",e="[^\\.0-9]",k="Gecko",h="webkit",c="4.0",b="1.9.0.0",g="opera",f="Version/",i="5.0",a="engine.version",j="qx.bom.client.Engine",d="engine.name";
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
},__bA:function(){return window.controllers&&window.navigator.product===k&&window.navigator.userAgent.indexOf(q)==-1;
},__bB:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}},defer:function(B){qx.core.Environment.add(a,B.getVersion);
qx.core.Environment.add(d,B.getName);
}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var f="()",e=".",d=".prototype.",c='anonymous()',b="qx.lang.Function",a=".constructor()";
qx.Bootstrap.define(b,{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
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
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Bootstrap.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g="Event (",f="Expected value to be the CSS color '",d="' but found ",bA="]",bz=", ",by="The value '",bx=")), but found value '",bw=" != ",bv="qx.core.Object",bu="Expected value to be an array but found ",bt=") was fired.",bs="Expected value to be an integer >= 0 but found ",br="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",T="Invalid argument 'type'",P="Called assert with 'false'",bc="Assertion error! ",W="null",bn="' but found '",bh="'undefined'",K="' must must be a key of the map '",bq="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",I="qx.util.ColorUtil",M=": ",O="The raised exception does not have the expected type! ",R=") not fired.",U="qx.core.Assert",X="Expected value to be typeof object but found ",be="' (identical) but found '",bj="' must have any of the values defined in the array '",y="Expected value to be a number but found ",z="Called assertFalse with '",L="qx.ui.core.Widget",bb="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",bg="Array[",bf="' does not match the regular expression '",V="' to be not identical with '",bd="Expected [",a="' arguments but found '",bi="', which cannot be converted to a CSS color!",A="qx.core.AssertionError",B="Expected value to be a boolean but found ",Q="Expected value not to be null but found null!",b="))!",c="Expected value to be a qooxdoo widget but found ",H="Expected value to be typeof '",C="Expected value to be typeof function but found ",D="Expected value to be an integer but found ",G="Called fail().",S="The parameter 're' must be a string or a regular expression.",bl="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",N="], but found [",bm="Wrong number of arguments given. Expected '",J="object";
qx.Class.define(U,{statics:{__bM:true,__bN:function(bB,bC){var bG=p;

for(var i=1,l=arguments.length;i<l;i++){bG=bG+this.__bO(arguments[i]===undefined?bh:arguments[i]);
}var bF=p;

if(bG){bF=bB+M+bG;
}else{bF=bB;
}var bE=bc+bF;

if(qx.Class.isDefined(A)){var bD=new qx.core.AssertionError(bB,bG);

if(this.__bM){qx.Bootstrap.error(bE+"\n Stack trace: \n"+bD.getStackTrace());
}throw bD;
}else{if(this.__bM){qx.Bootstrap.error(bE);
}throw new Error(bE);
}},__bO:function(bH){var bI;

if(bH===null){bI=W;
}else if(qx.lang.Type.isArray(bH)&&bH.length>10){bI=bg+bH.length+bA;
}else if((bH instanceof Object)&&(bH.toString==null)){bI=qx.lang.Json.stringify(bH,null,2);
}else{try{bI=bH.toString();
}catch(e){bI=p;
}}return bI;
},assert:function(bJ,bK){bJ==true||this.__bN(bK||p,P);
},fail:function(bL,bM){var bN=bM?p:G;
this.__bN(bL||p,bN);
},assertTrue:function(bO,bP){(bO===true)||this.__bN(bP||p,u,bO,m);
},assertFalse:function(bQ,bR){(bQ===false)||this.__bN(bR||p,z,bQ,m);
},assertEquals:function(bS,bT,bU){bS==bT||this.__bN(bU||p,k,bS,bn,bT,n);
},assertNotEquals:function(bV,bW,bX){bV!=bW||this.__bN(bX||p,k,bV,br,bW,n);
},assertIdentical:function(bY,ca,cb){bY===ca||this.__bN(cb||p,k,bY,be,ca,n);
},assertNotIdentical:function(cc,cd,ce){cc!==cd||this.__bN(ce||p,k,cc,V,cd,n);
},assertNotUndefined:function(cf,cg){cf!==undefined||this.__bN(cg||p,bo);
},assertUndefined:function(ch,ci){ch===undefined||this.__bN(ci||p,t,ch,o);
},assertNotNull:function(cj,ck){cj!==null||this.__bN(ck||p,Q);
},assertNull:function(cl,cm){cl===null||this.__bN(cm||p,F,cl,o);
},assertJsonEquals:function(cn,co,cp){this.assertEquals(qx.lang.Json.stringify(cn),qx.lang.Json.stringify(co),cp);
},assertMatch:function(cq,cr,cs){this.assertString(cq);
this.assert(qx.lang.Type.isRegExp(cr)||qx.lang.Type.isString(cr),S);
cq.search(cr)>=0||this.__bN(cs||p,bq,cq,bf,cr.toString(),n);
},assertArgumentsCount:function(ct,cu,cv,cw){var cx=ct.length;
(cx>=cu&&cx<=cv)||this.__bN(cw||p,bm,cu,w,cv,a,arguments.length,ba);
},assertEventFired:function(cy,event,cz,cA,cB){var cD=false;
var cC=function(e){if(cA){cA.call(cy,e);
}cD=true;
};
var cE;

try{cE=cy.addListener(event,cC,cy);
cz.call();
}catch(cF){throw cF;
}finally{try{cy.removeListenerById(cE);
}catch(cG){}}cD===true||this.__bN(cB||p,g,event,R);
},assertEventNotFired:function(cH,event,cI,cJ){var cL=false;
var cK=function(e){cL=true;
};
var cM=cH.addListener(event,cK,cH);
cI.call();
cL===false||this.__bN(cJ||p,g,event,bt);
cH.removeListenerById(cM);
},assertException:function(cN,cO,cP,cQ){var cO=cO||Error;
var cR;

try{this.__bM=false;
cN();
}catch(cS){cR=cS;
}finally{this.__bM=true;
}
if(cR==null){this.__bN(cQ||p,s);
}cR instanceof cO||this.__bN(cQ||p,O,cO,bw,cR);

if(cP){this.assertMatch(cR.toString(),cP,cQ);
}},assertInArray:function(cT,cU,cV){cU.indexOf(cT)!==-1||this.__bN(cV||p,by,cT,bj,cU,m);
},assertArrayEquals:function(cW,cX,cY){this.assertArray(cW,cY);
this.assertArray(cX,cY);
cY=cY||bd+cW.join(bz)+N+cX.join(bz)+bA;

if(cW.length!==cX.length){this.fail(cY,true);
}
for(var i=0;i<cW.length;i++){if(cW[i]!==cX[i]){this.fail(cY,true);
}}},assertKeyInMap:function(da,db,dc){db[da]!==undefined||this.__bN(dc||p,by,da,K,db,m);
},assertFunction:function(dd,de){qx.lang.Type.isFunction(dd)||this.__bN(de||p,C,dd,o);
},assertString:function(df,dg){qx.lang.Type.isString(df)||this.__bN(dg||p,bp,df,o);
},assertBoolean:function(dh,di){qx.lang.Type.isBoolean(dh)||this.__bN(di||p,B,dh,o);
},assertNumber:function(dj,dk){(qx.lang.Type.isNumber(dj)&&isFinite(dj))||this.__bN(dk||p,y,dj,o);
},assertPositiveNumber:function(dl,dm){(qx.lang.Type.isNumber(dl)&&isFinite(dl)&&dl>=0)||this.__bN(dm||p,bl,dl,o);
},assertInteger:function(dn,dp){(qx.lang.Type.isNumber(dn)&&isFinite(dn)&&dn%1===0)||this.__bN(dp||p,D,dn,o);
},assertPositiveInteger:function(dq,dr){var ds=(qx.lang.Type.isNumber(dq)&&isFinite(dq)&&dq%1===0&&dq>=0);
ds||this.__bN(dr||p,bs,dq,o);
},assertInRange:function(dt,du,dv,dw){(dt>=du&&dt<=dv)||this.__bN(dw||p,qx.lang.String.format(Y,[dt,du,dv]));
},assertObject:function(dx,dy){var dz=dx!==null&&(qx.lang.Type.isObject(dx)||typeof dx===J);
dz||this.__bN(dy||p,X,(dx),o);
},assertArray:function(dA,dB){qx.lang.Type.isArray(dA)||this.__bN(dB||p,bu,dA,o);
},assertMap:function(dC,dD){qx.lang.Type.isObject(dC)||this.__bN(dD||p,v,dC,o);
},assertRegExp:function(dE,dF){qx.lang.Type.isRegExp(dE)||this.__bN(dF||p,r,dE,o);
},assertType:function(dG,dH,dI){this.assertString(dH,T);
typeof (dG)===dH||this.__bN(dI||p,H,dH,d,dG,o);
},assertInstance:function(dJ,dK,dL){var dM=dK.classname||dK+p;
dJ instanceof dK||this.__bN(dL||p,bk,dM,d,dJ,o);
},assertInterface:function(dN,dO,dP){qx.Class.implementsInterface(dN,dO)||this.__bN(dP||p,x,dN,E,dO,n);
},assertCssColor:function(dQ,dR,dS){var dT=qx.Class.getByName(I);

if(!dT){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dV=dT.stringToRgb(dQ);

try{var dU=dT.stringToRgb(dR);
}catch(dX){this.__bN(dS||p,f,dQ,j,dV.join(h),bx,dR,bi);
}var dW=dV[0]==dU[0]&&dV[1]==dU[1]&&dV[2]==dU[2];
dW||this.__bN(dS||p,f,dV,j,dV.join(h),bx,dR,j,dU.join(h),b);
},assertElement:function(dY,ea){!!(dY&&dY.nodeType===1)||this.__bN(ea||p,q,dY,n);
},assertQxObject:function(eb,ec){this.__bP(eb,bv)||this.__bN(ec||p,bb,eb,o);
},assertQxWidget:function(ed,ee){this.__bP(ed,L)||this.__bN(ee||p,c,ed,o);
},__bP:function(ef,eg){if(!ef){return false;
}var eh=ef.constructor;

while(eh){if(eh.classname===eg){return true;
}eh=eh.superclass;
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

if(qx.core.Environment.get(o)===d){if(!O.stack){return S;
}var be=/@(.+):(\d+)$/gm;
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

if(!Q){return S;
}
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
},__bS:function(bf){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==m){var bg=qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bf);

if(false&&!qx.lang.Type.isString(bg)){throw new Error("FILENAME_TO_CLASSNAME must return a string!");
}return bg;
}return qx.dev.StackTrace.__bT(bf);
},__bT:function(bh){var bl=c;
var bi=bh.indexOf(bl);
var bk=bh.indexOf(f);

if(bk>=0){bh=bh.substring(0,bk);
}var bj=(bi==-1)?bh:bh.substring(bi+bl.length).replace(/\//g,b).replace(/\.js$/,h);
return bj;
},__bU:function(bm){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==m){bm=qx.dev.StackTrace.FORMAT_STACKTRACE(bm);
if(false&&!qx.lang.Type.isArray(bm)){throw new Error("FORMAT_STACKTRACE must return an array of strings!");
}}return bm;
}}});
})();
(function(){var g="$$hash",f="qx.core.ObjectRegistry",e="-",d="",c="-0";
qx.Class.define(f,{statics:{inShutDown:false,__bc:{},__bV:0,__bW:[],__bX:d,__bY:{},register:function(h){var m=this.__bc;

if(!m){return;
}var k=h.$$hash;

if(k==null){var j=this.__bW;

if(j.length>0&&true){k=j.pop();
}else{k=(this.__bV++)+this.__bX;
}h.$$hash=k;
}m[k]=h;
},unregister:function(n){var o=n.$$hash;

if(o==null){return;
}var p=this.__bc;

if(p&&p[o]){delete p[o];
this.__bW.push(o);
}try{delete n.$$hash;
}catch(q){if(n.removeAttribute){n.removeAttribute(g);
}}},toHashCode:function(r){var t=r.$$hash;

if(t!=null){return t;
}var s=this.__bW;

if(s.length>0){t=s.pop();
}else{t=(this.__bV++)+this.__bX;
}return r.$$hash=t;
},clearHashCode:function(u){var v=u.$$hash;

if(v!=null){this.__bW.push(v);
try{delete u.$$hash;
}catch(w){if(u.removeAttribute){u.removeAttribute(g);
}}}},fromHashCode:function(x){return this.__bc[x]||null;
},shutdown:function(){this.inShutDown=true;
var z=this.__bc;
var B=[];

for(var A in z){B.push(A);
}B.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var y,i=0,l=B.length;

while(true){try{for(;i<l;i++){A=B[i];
y=z[A];

if(y&&y.dispose){y.dispose();
}}}catch(C){qx.Bootstrap.error(this,"Could not dispose object "+y.toString()+": "+C,C);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bc;
},getRegistry:function(){return this.__bc;
},getNextHash:function(){return this.__bV;
},getPostId:function(){return this.__bX;
},getStackTraces:function(){return this.__bY;
}},defer:function(D){if(window&&window.top){var frames=window.top.frames;

for(var i=0;i<frames.length;i++){if(frames[i]===window){D.__bX=e+(i+1);
return;
}}}D.__bX=c;
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
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",H="number",G="stringify",F="]",E="date",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",s="qx.log.Logger",t="[",q="#",r="warn",o="document",p="{...(",m="text[",n="[...(",u="\n",v=")}",x=")]",w="object";
qx.Class.define(s,{statics:{__co:A,setLevel:function(I){this.__co=I;
},getLevel:function(){return this.__co;
},setTreshold:function(J){this.__cr.setMaxMessages(J);
},getTreshold:function(){return this.__cr.getMaxMessages();
},__cp:{},__cq:0,register:function(K){if(K.$$id){return;
}var M=this.__cq++;
this.__cp[M]=K;
K.$$id=M;
var L=this.__cs;
var N=this.__cr.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__co]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__cp[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__ct(A,arguments);
},info:function(S,T){qx.log.Logger.__ct(e,arguments);
},warn:function(U,V){qx.log.Logger.__ct(r,arguments);
},error:function(W,X){qx.log.Logger.__ct(j,arguments);
},trace:function(Y){qx.log.Logger.__ct(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
},deprecatedClassWarning:function(bd,be){var bf;
},deprecatedEventWarning:function(bg,event,bh){var bi;
},deprecatedMixinWarning:function(bj,bk){var bl;
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
},clear:function(){this.__cr.clearHistory();
},__cr:new qx.log.appender.RingBuffer(50),__cs:{debug:0,info:1,warn:2,error:3},__ct:function(bv,bw){var bB=this.__cs;

if(bB[bv]<bB[this.__co]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__cv(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__cr.process(bD);
var bE=this.__cp;

for(var bz in bE){bE[bz].process(bD);
}},__cu:function(bF){if(bF===undefined){return y;
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
},__cv:function(bH,bI){var bP=this.__cu(bH);
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
}bL.push(this.__cv(bH[i],false));
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
bJ=this.__cv(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__ct(bR[i][0],bR[i][1]);
}qx.Bootstrap.debug=bQ.debug;
qx.Bootstrap.info=bQ.info;
qx.Bootstrap.warn=bQ.warn;
qx.Bootstrap.error=bQ.error;
qx.Bootstrap.trace=bQ.trace;
}});
})();
(function(){var d="set",c="reset",b="get",a="qx.core.MProperty";
qx.Mixin.define(a,{members:{set:function(e,f){var h=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(e)){if(!this[h[e]]){if(this[d+qx.Bootstrap.firstUp(e)]!=undefined){this[d+qx.Bootstrap.firstUp(e)](f);
return this;
}}return this[h[e]](f);
}else{for(var g in e){if(!this[h[g]]){if(this[d+qx.Bootstrap.firstUp(g)]!=undefined){this[d+qx.Bootstrap.firstUp(g)](e[g]);
continue;
}}this[h[g]](e[g]);
}return this;
}},get:function(i){var j=qx.core.Property.$$method.get;

if(!this[j[i]]){if(this[b+qx.Bootstrap.firstUp(i)]!=undefined){return this[b+qx.Bootstrap.firstUp(i)]();
}}return this[j[i]]();
},reset:function(k){var l=qx.core.Property.$$method.reset;

if(!this[l[k]]){if(this[c+qx.Bootstrap.firstUp(k)]!=undefined){this[c+qx.Bootstrap.firstUp(k)]();
return;
}}this[l[k]]();
}}});
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
(function(){var l="on",k="engine.name",j="gecko",i="engine.version",h="function",g="undefined",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Bootstrap.define(d,{statics:{addNativeListener:function(m,n,o,p){if(m.addEventListener){m.addEventListener(n,o,!!p);
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
}},supportsEvent:function(z,A){var B=l+A;
var C=(B in z);

if(!C){C=typeof z[B]==h;

if(!C&&z.setAttribute){z.setAttribute(B,c);
C=typeof z[B]==h;
z.removeAttribute(B);
}}return C;
}}});
})();
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="__cD",j="UNKNOWN_",h="c",g="DOM_",c="WIN_",f="QX_",e="qx.event.Manager",b="capture",a="__cC",d="DOCUMENT_";
qx.Class.define(e,{extend:Object,construct:function(s,t){this.__cy=s;
this.__cz=qx.core.ObjectRegistry.toHashCode(s);
this.__cA=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__cB={};
this.__cC={};
this.__cD={};
this.__cE={};
},statics:{__cF:0,getNextUniqueId:function(){return (this.__cF++)+o;
}},members:{__cA:null,__cB:null,__cD:null,__cG:null,__cC:null,__cE:null,__cy:null,__cz:null,getWindow:function(){return this.__cy;
},getWindowId:function(){return this.__cz;
},getHandler:function(u){var v=this.__cC[u.classname];

if(v){return v;
}return this.__cC[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__cD[w.classname];

if(x){return x;
}return this.__cD[w.classname]=new w(this,this.__cA);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__cB[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},getAllListeners:function(){return this.__cB;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__cB[M];
var K=[];

if(O){var I,N,G,J,L;

for(var H in O){I=H.indexOf(p);
N=H.substring(0,I);
G=H.charAt(I+1)==h;
J=O[H];

for(var i=0,l=J.length;i<l;i++){L=J[i];
K.push({self:L.context,handler:L.handler,type:N,capture:G});
}}}return K;
},toggleAttachedEvents:function(P,Q){var V=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var X=this.__cB[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__cH(P,W,R);
}else{this.__cI(P,W,R);
}}}},hasListener:function(Y,ba,bb){var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__cB[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return !!(bd&&bd.length>0);
},importListeners:function(bg,bh){var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__cB[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__cH(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__cF++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__cB[bx];

if(!bz){bz=this.__cB[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__cH(bp,bq,bs);
}var by=(qx.event.Manager.__cF++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=g+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__cy){bF=true;
bL=c+bB;
}else if(bA.classname){bO=true;
bL=f+bA.classname+n+bB;
}else{bL=j+bA+n+bB;
}var bH=this.__cE;

if(bH[bL]){return bH[bL];
}var bK=this.__cA.getHandlers();
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
},__cH:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}},removeListener:function(bT,bU,bV,self,bW){var cb;
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__cB[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__cI(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__cB[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__cI(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__cB[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===b;
this.__cI(cq,cv,cr);
}}delete this.__cB[cu];
return true;
},deleteAllListeners:function(cx){delete this.__cB[cx];
},__cI:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}},dispatchEvent:function(cC,event){var cH;
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__cA.getDispatchers();
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
},dispose:function(){this.__cA.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,a);
qx.util.DisposeUtil.disposeMap(this,k);
this.__cB=this.__cy=this.__cG=null;
this.__cA=this.__cE=null;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__cJ:{},getManager:function(d){if(d==null){d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__cJ[f];

if(!e){e=new qx.event.Manager(d,this);
this.__cJ[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__cJ[h];
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
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cC:[],addHandler:function(Q){this.__cC.push(Q);
this.__cC.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__cC;
},__cD:[],addDispatcher:function(R,S){this.__cD.push(R);
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
(function(){var j="module.property",h="module.events",g="qx.core.Object",f="[",e="$$user_",d="]",c="rv:1.8.1",b="MSIE 6.0",a="Object";
qx.Class.define(g,{extend:Object,include:qx.core.Environment.filter({"module.databinding":qx.data.MBinding,"module.logger":qx.core.MLogging,"module.events":qx.core.MEvents,"module.property":qx.core.MProperty}),construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:a},members:{__L:qx.core.Environment.get("module.property")?qx.core.Property:null,toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+f+this.$$hash+d;
},base:function(k,m){if(arguments.length===1){return k.callee.base.call(this);
}else{return k.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(n){return n.callee.self;
},clone:function(){if(!qx.core.Environment.get(j)){throw new Error("Cloning only possible with properties.");
}var p=this.constructor;
var o=new p;
var r=qx.Class.getProperties(p);
var q=this.__L.$$store.user;
var s=this.__L.$$method.set;
var name;
for(var i=0,l=r.length;i<l;i++){name=r[i];

if(this.hasOwnProperty(q[name])){o[s[name]](this[q[name]]);
}}return o;
},__cL:null,setUserData:function(t,u){if(!this.__cL){this.__cL={};
}this.__cL[t]=u;
},getUserData:function(v){if(!this.__cL){return null;
}var w=this.__cL[v];
return w===undefined?null:w;
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var B,z,y,C;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
var A=this.constructor;
var x;

while(A.superclass){if(A.$$destructor){A.$$destructor.call(this);
}if(A.$$includes){x=A.$$flatIncludes;

for(var i=0,l=x.length;i<l;i++){if(x[i].$$destructor){x[i].$$destructor.call(this);
}}}A=A.superclass;
}if(this.__cM){this.__cM();
}},__cM:null,__cN:function(){var D=qx.Class.getProperties(this.constructor);

for(var i=0,l=D.length;i<l;i++){delete this[e+D[i]];
}},_disposeObjects:function(E){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(F){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(G){qx.util.DisposeUtil.disposeArray(this,G);
},_disposeMap:function(H){qx.util.DisposeUtil.disposeMap(this,H);
}},environment:{"qx.disposerDebugLevel":0},defer:function(I,J){var L=navigator.userAgent.indexOf(b)!=-1;
var K=navigator.userAgent.indexOf(c)!=-1;
if(L||K){J.__cM=J.__cN;
}},destruct:function(){if(qx.core.Environment.get(h)){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}}qx.core.ObjectRegistry.unregister(this);
this.__cL=null;
if(qx.core.Environment.get(j)){var O=this.constructor;
var S;
var T=this.__L.$$store;
var Q=T.user;
var R=T.theme;
var M=T.inherit;
var P=T.useinit;
var N=T.init;

while(O){S=O.$$properties;

if(S){for(var name in S){if(S[name].dereference){this[Q[name]]=this[R[name]]=this[M[name]]=this[P[name]]=this[N[name]]=undefined;
}}}O=O.superclass;
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
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var g="",f="qx.core.BaseInit",d="engine.name",c="os.name",b="engine.version",a="feedreader.WebsiteApplication";
qx.Class.define(f,{statics:{getApplication:function(){return this.__gM||null;
},ready:function(){if(this.__gM){return;
}
if(qx.core.Environment.get(d)==g){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(b)==g){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(c)==g){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=a;
var j=qx.Class.getByName(i);

if(j){this.__gM=new j;
var h=new Date;
this.__gM.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__gM.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__gN:function(e){var k=this.__gM;

if(k){k.close();
}},__gO:function(){var l=this.__gM;

if(l){l.terminate();
}qx.core.ObjectRegistry.shutdown();
}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",bf="10.0",be="10.4",bd="rim_tabletos",bc="Darwin",bb="os.version",ba="2003",Y=")",X="iPhone",W="android",V="unix",q="ce",r="7",o="SymbianOS",p="os.name",m="|",n="MacPPC",k="iPod",l="\.",u="Win64",v="linux",D="me",B="Macintosh",L="Android",G="Windows",R="ios",P="vista",x="8",U="blackberry",T="(",S="win",w="Linux",z="BSD",A="Mac OS X",C="iPad",E="X11",H="xp",M="symbian",Q="qx.bom.client.OperatingSystem",s="g",t="Win32",y="osx",K="webOS",J="RIM Tablet OS",I="BlackBerry",O="nt4",N="MacIntel",F="webos";
qx.Bootstrap.define(Q,{statics:{getName:function(){if(!navigator){return j;
}var bg=navigator.platform||j;
var bh=navigator.userAgent||j;

if(bg.indexOf(G)!=-1||bg.indexOf(t)!=-1||bg.indexOf(u)!=-1){return S;
}else if(bg.indexOf(B)!=-1||bg.indexOf(n)!=-1||bg.indexOf(N)!=-1||bg.indexOf(A)!=-1){return y;
}else if(bh.indexOf(J)!=-1){return bd;
}else if(bh.indexOf(K)!=-1){return F;
}else if(bg.indexOf(k)!=-1||bg.indexOf(X)!=-1||bg.indexOf(C)!=-1){return R;
}else if(bh.indexOf(L)!=-1){return W;
}else if(bg.indexOf(w)!=-1){return v;
}else if(bg.indexOf(E)!=-1||bg.indexOf(z)!=-1||bg.indexOf(bc)!=-1){return V;
}else if(bg.indexOf(o)!=-1){return M;
}else if(bg.indexOf(I)!=-1){return U;
}return j;
},__dd:{"Windows NT 6.2":x,"Windows NT 6.1":r,"Windows NT 6.0":P,"Windows NT 5.2":ba,"Windows NT 5.1":H,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":O,"Win 9x 4.90":D,"Windows CE":q,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":be,"Mac OS X 10.4":be,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":bf,"Mac OS X 10.0":bf},getVersion:function(){var bk=[];

for(var bj in qx.bom.client.OperatingSystem.__dd){bk.push(bj);
}var bl=new RegExp(T+bk.join(m).replace(/\./g,l)+Y,s);
var bi=bl.exec(navigator.userAgent);

if(bi&&bi[1]){return qx.bom.client.OperatingSystem.__dd[bi[1]];
}return j;
}},defer:function(bm){qx.core.Environment.add(p,bm.getName);
qx.core.Environment.add(bb,bm.getVersion);
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
this.__gP=false;
this.__gQ=false;
this.__gR=false;
this.__gS=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__gT();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__gR:null,__gP:null,__gQ:null,__gS:null,__gT:function(){if(!this.__gR&&this.__gP&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__gR=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__gR=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__gR;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__gP=true;
this.__gT();
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
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gP=true;
this.__gT();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gS){this.__gS=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var d="ready",c="shutdown",b="beforeunload",a="qx.core.Init";
qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__gN:function(e){var f=this.getApplication();

if(f){e.setReturnValue(f.close());
}},__gO:function(){var g=this.getApplication();

if(g){g.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);
qx.event.Registration.addListener(window,c,h.__gO,h);
qx.event.Registration.addListener(window,b,h.__gN,h);
}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var s="list",r="loaded",q="stateModified",p="",o="html",n="click",m="error",l="User Feeds",k="Sorry, unable to load the feed.",h="Static Feeds",c="qooxdoo ",g="1.6.1",f="selectedFeed",b="qxTag",a="feedreader.WebsiteApplication",d="tree";
qx.Class.define(a,{extend:qx.application.Native,statics:{fadeOut:{duration:300,keep:100,keyFrames:{0:{opacity:1},100:{opacity:0}}},fadeIn:{duration:300,keep:100,keyFrames:{0:{opacity:0},100:{opacity:1}}}},members:{main:function(){qx.application.Native.prototype.main.call(this);
qx.bom.Collection.id(b).setAttribute(o,c+g);
var u=new feedreader.model.Model();
var v=qx.bom.Collection.id(d);
var t=qx.bom.Collection.id(s);
this.fillTree(v,u);
var self=this;
qx.bom.Event.addNativeListener(v[0],n,function(e){var x=qx.bom.Event.getTarget(e).feed;
if(x.getState()==r){self.fillList(t,x);
}else if(x.getState()==m){qx.bom.Collection.id(s).setAttribute(o,k);
}else{x.addListener(q,function(e){if(e.getData()==r){self.fillList(t,x);
}});
}});
var w=feedreader.io.FeedLoader.getInstance();
w.loadAll(u.getFeedFolder());
},fillList:function(y,z){var A=feedreader.WebsiteApplication.fadeOut;
var B=feedreader.WebsiteApplication.fadeIn;
qx.bom.element.Animation.animate(y[0],A).onEnd(function(){y[0].innerHTML=p;
var C=z.getArticles();

for(var i=0;i<C.length;i++){var D=C.getItem(i);
y.append(feedreader.view.website.Factory.createArticleView(D));
}qx.bom.element.Animation.animate(y[0],B);
});
},fillTree:function(E,F){var G=feedreader.WebsiteApplication.fadeOut;
var H=feedreader.WebsiteApplication.fadeIn;
qx.bom.element.Animation.animate(E[0],G).onEnd(function(){E[0].innerHTML=p;
var I=[F.getStaticFeedFolder(),F.getUserFeedFolder()];
var L=[h,l];

for(var i=0;i<I.length;i++){var M=I[i].getFeeds();
E.append(feedreader.view.website.Factory.createTreeFolder(L[i]));
for(var j=0;j<M.length;j++){var J=M.getItem(j);
var K=feedreader.view.website.Factory.createTreeItem(J);
if(i===0&&j===0){qx.bom.element.Class.add(K,f);
if(J.getState()===r){this.fillList(qx.bom.Collection.id(s),J);
}else{J.addListener(q,function(e){if(e.getData()==r){this.fillList(qx.bom.Collection.id(s),e.getTarget());
}},this);
}}E.append(K);
}}qx.bom.element.Animation.animate(E[0],H);
},this);
}}});
})();
(function(){var d="=",c="+",b="&",a="qx.lang.Object";
qx.Class.define(a,{statics:{empty:function(e){for(var f in e){if(e.hasOwnProperty(f)){delete e[f];
}}},isEmpty:function(g){for(var h in g){return false;
}return true;
},hasMinLength:function(j,k){if(k<=0){return true;
}var length=0;

for(var m in j){if((++length)>=k){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(n){var p=[];
var o=this.getKeys(n);

for(var i=0,l=o.length;i<l;i++){p.push(n[o[i]]);
}return p;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(q,r){return qx.lang.Object.mergeWith(q,r,false);
},merge:function(s,t){var u=arguments.length;

for(var i=1;i<u;i++){qx.lang.Object.mergeWith(s,arguments[i]);
}return s;
},clone:function(v){var w={};

for(var x in v){w[x]=v[x];
}return w;
},invert:function(y){var z={};

for(var A in y){z[y[A].toString()]=A;
}return z;
},getKeyFromValue:function(B,C){for(var D in B){if(B.hasOwnProperty(D)&&B[D]===C){return D;
}}return null;
},contains:function(E,F){return this.getKeyFromValue(E,F)!==null;
},select:function(G,H){return H[G];
},fromArray:function(I){var J={};

for(var i=0,l=I.length;i<l;i++){J[I[i].toString()]=true;
}return J;
},toUriParameter:function(K,L){var O,M=[];

for(O in K){if(K.hasOwnProperty(O)){var N=K[O];

if(N instanceof Array){for(var i=0;i<N.length;i++){this.__da(O,N[i],M,L);
}}else{this.__da(O,N,M,L);
}}}return M.join(b);
},__da:function(P,Q,R,S){var T=window.encodeURIComponent;

if(S){R.push(T(P).replace(/%20/g,c)+d+T(Q).replace(/%20/g,c));
}else{R.push(T(P)+d+T(Q));
}}}});
})();
(function(){var m="",l="audio",k="video",j="undefined",i="number",h="function",g="html.video.h264",f="html.element.contains",d='video/ogg; codecs="theora, vorbis"',c="html.console",bk="html.xul",bj="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",bi="html.video.ogg",bh="http://www.w3.org/TR/SVG11/feature#BasicStructure",bg="html.storage.local",bf="div",be='audio',bd='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',bc="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",bb="html.audio",t="url(#default#VML)",u="audio/mpeg",r="org.w3c.dom.svg",s="html.classlist",p="html.video",q="html.geolocation",n="DOMTokenList",o="html.storage.session",y="1.1",z="html.image.naturaldimensions",H="html.audio.aif",F="audio/x-wav",P='<v:shape id="vml_flag1" adj="1" />',K="html.canvas",W="audio/ogg",U="html.element.compareDocumentPosition",B="audio/x-aiff",ba="html.audio.au",Y="img",X="html.xpath",A="qx.bom.client.Html",D='video',E="span",G="html.element.textcontent",I="html.audio.mp3",L="html.vml",R="html.svg",V="html.audio.ogg",w="label",x='video/webm; codecs="vp8, vorbis"',C="html.dataurl",O="html.webworker",N="html.dataset",M="1.0",T="html.audio.wav",S="html.filereader",J="audio/basic",Q="html.video.webm",b="object";
qx.Bootstrap.define(A,{statics:{getWebWorker:function(){return window.Worker!=null;
},getFileReader:function(){return window.FileReader!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement(be).canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(W);
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(u);
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(F);
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(J);
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(B);
},getVideo:function(){return !!document.createElement(D).canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return m;
}var v=document.createElement(k);
return v.canPlayType(d);
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return m;
}var v=document.createElement(k);
return v.canPlayType(bd);
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return m;
}var v=document.createElement(k);
return v.canPlayType(x);
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(bl){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(bm){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===n);
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS(bj,w);
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(r,M)||document.implementation.hasFeature(bh,y));
},getVml:function(){var bn=document.createElement(bf);
document.body.appendChild(bn);
bn.innerHTML=P;
bn.firstChild.style.behavior=t;
var bo=typeof bn.firstChild.adj==b;
document.body.removeChild(bn);
return bo;
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(bp){var bq=new Image();
bq.onload=bq.onerror=function(){window.setTimeout(function(){bp.call(null,(bq.width==1&&bq.height==1));
},0);
};
bq.src=bc;
},getDataset:function(){return !!document.documentElement.dataset;
},getContains:function(){return (typeof document.documentElement.contains!==j);
},getCompareDocumentPosition:function(){return (typeof document.documentElement.compareDocumentPosition===h);
},getTextContent:function(){var br=document.createElement(E);
return (typeof br.textContent!==j);
},getConsole:function(){return typeof window.console!==j;
},getNaturalDimensions:function(){var bs=document.createElement(Y);
return typeof bs.naturalHeight===i&&typeof bs.naturalWidth===i;
}},defer:function(bt){qx.core.Environment.add(O,bt.getWebWorker);
qx.core.Environment.add(S,bt.getFileReader);
qx.core.Environment.add(q,bt.getGeoLocation);
qx.core.Environment.add(bb,bt.getAudio);
qx.core.Environment.add(V,bt.getAudioOgg);
qx.core.Environment.add(I,bt.getAudioMp3);
qx.core.Environment.add(T,bt.getAudioWav);
qx.core.Environment.add(ba,bt.getAudioAu);
qx.core.Environment.add(H,bt.getAudioAif);
qx.core.Environment.add(p,bt.getVideo);
qx.core.Environment.add(bi,bt.getVideoOgg);
qx.core.Environment.add(g,bt.getVideoH264);
qx.core.Environment.add(Q,bt.getVideoWebm);
qx.core.Environment.add(bg,bt.getLocalStorage);
qx.core.Environment.add(o,bt.getSessionStorage);
qx.core.Environment.add(s,bt.getClassList);
qx.core.Environment.add(X,bt.getXPath);
qx.core.Environment.add(bk,bt.getXul);
qx.core.Environment.add(K,bt.getCanvas);
qx.core.Environment.add(R,bt.getSvg);
qx.core.Environment.add(L,bt.getVml);
qx.core.Environment.add(N,bt.getDataset);
qx.core.Environment.addAsync(C,bt.getDataUrl);
qx.core.Environment.add(f,bt.getContains);
qx.core.Environment.add(U,bt.getCompareDocumentPosition);
qx.core.Environment.add(G,bt.getTextContent);
qx.core.Environment.add(c,bt.getConsole);
qx.core.Environment.add(z,bt.getNaturalDimensions);
}});
})();
(function(){var s="html.classlist",r="default",q="native",p="",o=" ",n='',m="(^|\\s)",k="(\\s|$)",j="\\b",h="g",c='function',g="\\b|\\b",f="qx.bom.element.Class",b='SVGAnimatedString',a='object',e="$2",d='undefined';
qx.Class.define(f,{statics:{__ko:/\s+/g,__kp:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(t,name){t.classList.add(name);
return name;
},"default":function(u,name){if(!this.has(u,name)){u.className+=(u.className?o:p)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(v,w){for(var i=0;i<w.length;i++){v.classList.add(w[i]);
}return v.className;
},"default":function(x,y){var z={};
var B;
var A=x.className;

if(A){B=A.split(this.__ko);

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
return M.className=M.className.replace(O,p).replace(this.__kp,p).replace(this.__ko,o);
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
(function(){var d="-",c="qx.bom.Style",b="string",a="";
qx.Bootstrap.define(c,{statics:{VENDOR_PREFIXES:["Webkit","Moz","O","ms","Khtml"],getPropertyName:function(e){var f=document.documentElement.style;

if(f[e]!==undefined){return e;
}
for(var i=0,l=this.VENDOR_PREFIXES.length;i<l;i++){var g=this.VENDOR_PREFIXES[i]+qx.lang.String.firstUp(e);

if(f[g]!==undefined){return g;
}}return null;
},getAppliedStyle:function(h,j,k,m){var n=(m!==false)?[null].concat(this.VENDOR_PREFIXES):[null];

for(var i=0,l=n.length;i<l;i++){var o=n[i]?d+n[i].toLowerCase()+d+k:k;
try{h.style[j]=o;

if(typeof h.style[j]==b&&h.style[j]!==a){return o;
}}catch(p){}}return null;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__bd:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__bd[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__bd[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var k="div",j="string",h="-moz-none",g="backgroundImage",f="inline-block",e="-moz-inline-box",d="color",c="span",b="css.float",a="css.borderimage.standardsyntax",bg="borderRadius",bf="boxSizing",be='m11',bd="content",bc="css.inlineblock",bb="css.appearance",ba="css.gradient.radial",Y="input",X="borderImage",W="userSelect",s="css.overflowxy",t="styleFloat",q="css.usermodify",r="css.boxsizing",o='url("foo.png") 4 4 4 4 fill stretch',p="css.boxmodel",m="qx.bom.client.Css",n="appearance",w="placeholder",x="css.boxshadow",F="css.gradient.legacywebkit",D="css.borderradius",M="linear-gradient(0deg, #fff, #000)",H="css.opacity",S="css.borderimage",Q="rgba(1, 2, 3, 0.5)",z="radial-gradient(0px 0px, cover, red 50%, blue 100%)",V="rgba",U="css.gradients",T='url("foo.png") 4 4 4 4 stretch',y="css.gradient.linear",B="css.userselect",C="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",E="mshtml",G="css.rgba",I="4 fill",N='WebKitCSSMatrix',R="none",u="css.placeholder",v="css.userselect.none",A="css.textoverflow",L="textOverflow",K="userModify",J="boxShadow",P="cssFloat",O="border";
qx.Bootstrap.define(m,{statics:{__db:null,getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==E||!qx.bom.client.Browser.getQuirksMode();
return content?bd:O;
},getTextOverflow:function(){return qx.bom.Style.getPropertyName(L);
},getPlaceholder:function(){var i=document.createElement(Y);
return w in i;
},getAppearance:function(){return qx.bom.Style.getPropertyName(n);
},getBorderRadius:function(){return qx.bom.Style.getPropertyName(bg);
},getBoxShadow:function(){return qx.bom.Style.getPropertyName(J);
},getBorderImage:function(){return qx.bom.Style.getPropertyName(X);
},getBorderImageSyntax:function(){var bj=qx.bom.client.Css.getBorderImage();

if(!bj){return null;
}var bi=[{standard:true,syntax:o,regEx:/foo\.png.*?4.*?fill.*?stretch/},{standard:false,syntax:T,regEx:/foo\.png.*?4 4 4 4 stretch/}];

for(var i=0,l=bi.length;i<l;i++){var bh=document.createElement(k);
bh.style[bj]=bi[i].syntax;

if(bi[i].regEx.exec(bh.style[bj])||bh.style.borderImageSlice&&bh.style.borderImageSlice==I){return bi[i].standard;
}}return null;
},getUserSelect:function(){return qx.bom.Style.getPropertyName(W);
},getUserSelectNone:function(){var bl=qx.bom.client.Css.getUserSelect();

if(bl){var bk=document.createElement(c);
bk.style[bl]=h;
return bk.style[bl]===h?h:R;
}return null;
},getUserModify:function(){return qx.bom.Style.getPropertyName(K);
},getFloat:function(){var bm=document.documentElement.style;
return bm.cssFloat!==undefined?P:bm.styleFloat!==undefined?t:null;
},getTranslate3d:function(){return N in window&&be in new WebKitCSSMatrix();
},getGradients:function(){return !!(qx.bom.client.Css.getLinearGradient());
},getLinearGradient:function(){qx.bom.client.Css.__db=false;
var bq=M;
var bn=document.createElement(k);
var bo=qx.bom.Style.getAppliedStyle(bn,g,bq);

if(!bo){bq=C;
var bo=qx.bom.Style.getAppliedStyle(bn,g,bq,false);

if(bo){qx.bom.client.Css.__db=true;
}}if(!bo){return null;
}var bp=/(.*?)\(/.exec(bo);
return bp?bp[1]:null;
},getRadialGradient:function(){var bu=z;
var br=document.createElement(k);
var bs=qx.bom.Style.getAppliedStyle(br,g,bu);

if(!bs){return null;
}var bt=/(.*?)\(/.exec(bs);
return bt?bt[1]:null;
},getLegacyWebkitGradient:function(){if(qx.bom.client.Css.__db===null){qx.bom.client.Css.getLinearGradient();
}return qx.bom.client.Css.__db;
},getRgba:function(){var bv;

try{bv=document.createElement(k);
}catch(bw){bv=document.createElement();
}try{bv.style[d]=Q;

if(bv.style[d].indexOf(V)!=-1){return true;
}}catch(bx){}return false;
},getBoxSizing:function(){return qx.bom.Style.getPropertyName(bf);
},getInlineBlock:function(){var by=document.createElement(c);
by.style.display=f;

if(by.style.display==f){return f;
}by.style.display=e;

if(by.style.display!==e){return e;
}return null;
},getOpacity:function(){return (typeof document.documentElement.style.opacity==j);
},getOverflowXY:function(){return (typeof document.documentElement.style.overflowX==j)&&(typeof document.documentElement.style.overflowY==j);
}},defer:function(bz){qx.core.Environment.add(A,bz.getTextOverflow);
qx.core.Environment.add(u,bz.getPlaceholder);
qx.core.Environment.add(D,bz.getBorderRadius);
qx.core.Environment.add(x,bz.getBoxShadow);
qx.core.Environment.add(U,bz.getGradients);
qx.core.Environment.add(y,bz.getLinearGradient);
qx.core.Environment.add(ba,bz.getRadialGradient);
qx.core.Environment.add(F,bz.getLegacyWebkitGradient);
qx.core.Environment.add(p,bz.getBoxModel);
qx.core.Environment.add(G,bz.getRgba);
qx.core.Environment.add(S,bz.getBorderImage);
qx.core.Environment.add(a,bz.getBorderImageSyntax);
qx.core.Environment.add(q,bz.getUserModify);
qx.core.Environment.add(B,bz.getUserSelect);
qx.core.Environment.add(v,bz.getUserSelectNone);
qx.core.Environment.add(bb,bz.getAppearance);
qx.core.Environment.add(b,bz.getFloat);
qx.core.Environment.add(r,bz.getBoxSizing);
qx.core.Environment.add(bc,bz.getInlineBlock);
qx.core.Environment.add(H,bz.getOpacity);
qx.core.Environment.add(s,bz.getOverflowXY);
}});
})();
(function(){var j="",i="mshtml",h="msie",g="maple",f=")(/| )([0-9]+\.[0-9])",e="(",d="ce",c="CSS1Compat",b="android",a="operamini",H="gecko",G="browser.quirksmode",F="browser.name",E="mobile chrome",D="iemobile",C="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",B="opera mobi",A="Mobile Safari",z="Maple",y="operamobile",q="ie",r="mobile safari",o="IEMobile|Maxthon|MSIE",p="qx.bom.client.Browser",m="(Maple )([0-9]+\.[0-9]+\.[0-9]*)",n="opera mini",k="browser.version",l="opera",s="Opera Mini|Opera Mobi|Opera",t="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",v="webkit",u="browser.documentmode",x="5.0",w="Mobile/";
qx.Bootstrap.define(p,{statics:{getName:function(){var L=navigator.userAgent;
var K=new RegExp(e+qx.bom.client.Browser.__dc+f);
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
var O=new RegExp(e+qx.bom.client.Browser.__dc+f);
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
}},__dc:{"webkit":t,"gecko":C,"mshtml":o,"opera":s}[qx.bom.client.Engine.getName()]},defer:function(Q){qx.core.Environment.add(F,Q.getName),qx.core.Environment.add(k,Q.getVersion),qx.core.Environment.add(u,Q.getDocumentMode),qx.core.Environment.add(G,Q.getQuirksMode);
}});
})();
(function(){var k="css.overflowxy",j="hidden",i="-moz-scrollbars-none",h="",g="engine.name",f="gecko",e="overflow",d="overflowY",b="engine.version",a="none",B="scroll",A="borderLeftStyle",z="borderRightStyle",y="div",x="borderRightWidth",w="overflow-y",v="borderLeftWidth",u="-moz-scrollbars-vertical",r=":",q="100px",o="overflow:",p="qx.bom.element.Overflow",m="overflow-x",n="overflowX",l=";";
qx.Class.define(p,{statics:{DEFAULT_SCROLLBAR_WIDTH:14,__de:null,getScrollbarWidth:function(){if(this.__de!==null){return this.__de;
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
this.__de=c;
document.body.removeChild(t);
return this.__de;
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
(function(){var h="css.boxsizing",g="",f="border-box",e="qx.bom.element.BoxSizing",d="boxSizing",c="content-box",b=":",a=";";
qx.Class.define(e,{statics:{__df:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dg:function(i){var j=this.__df;
return j.tags[i.tagName.toLowerCase()]||j.types[i.type];
},compile:function(k){if(qx.core.Environment.get(h)){var l=qx.lang.String.hyphenate(qx.core.Environment.get(h));
return l+b+k+a;
}else{qx.log.Logger.warn(this,"This client does not support dynamic modification of the boxSizing property.");
qx.log.Logger.trace();
}},get:function(m){if(qx.core.Environment.get(h)){return qx.bom.element.Style.get(m,d,null,false)||g;
}
if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(m))){if(!this.__dg(m)){return c;
}}return f;
},set:function(n,o){if(qx.core.Environment.get(h)){try{n.style[qx.core.Environment.get(h)]=o;
}catch(p){qx.log.Logger.warn(this,"This client does not support the boxSizing value",o);
}}else{qx.log.Logger.warn(this,"This client does not support dynamic modification of the boxSizing property.");
}},reset:function(q){this.set(q,g);
}}});
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
(function(){var j="",i="engine.name",h="float",g="browser.documentmode",f="mshtml",e="style",d="css.float",c="px",b="css.appearance",a="pixelRight",w="css.userselect",v="css.boxsizing",u="css.textoverflow",t="pixelHeight",s=":",r="pixelTop",q="css.borderimage",p="pixelLeft",o="css.usermodify",n="qx.bom.element.Style",l="pixelBottom",m="pixelWidth",k=";";
qx.Class.define(n,{statics:{__dh:function(){var y={"appearance":qx.core.Environment.get(b),"userSelect":qx.core.Environment.get(w),"textOverflow":qx.core.Environment.get(u),"borderImage":qx.core.Environment.get(q),"float":qx.core.Environment.get(d),"userModify":qx.core.Environment.get(o),"boxSizing":qx.core.Environment.get(v)};
this.__di={};

for(var x in qx.lang.Object.clone(y)){if(!y[x]){delete y[x];
}else{this.__di[x]=x==h?h:qx.lang.String.hyphenate(y[x]);
}}this.__dj=y;
},__dk:{width:m,height:t,left:p,right:a,top:r,bottom:l},__dl:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(z){var B=[];
var D=this.__dl;
var C=this.__di;
var name,A;

for(name in z){A=z[name];

if(A==null){continue;
}name=C[name]||name;
if(D[name]){B.push(D[name].compile(A));
}else{B.push(qx.lang.String.hyphenate(name),s,A,k);
}}return B.join(j);
},setCss:function(E,F){if(qx.core.Environment.get(i)===f&&parseInt(qx.core.Environment.get(g),10)<8){E.style.cssText=F;
}else{E.setAttribute(e,F);
}},getCss:function(G){if(qx.core.Environment.get(i)===f&&parseInt(qx.core.Environment.get(g),10)<8){return G.style.cssText.toLowerCase();
}else{return G.getAttribute(e);
}},isPropertySupported:function(H){return (this.__dl[H]||this.__dj[H]||H in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(I,name,J,K){name=this.__dj[name]||name;
if(K!==false&&this.__dl[name]){return this.__dl[name].set(I,J);
}else{I.style[name]=J!==null?J:j;
}},setStyles:function(L,M,N){var Q=this.__dj;
var S=this.__dl;
var O=L.style;

for(var R in M){var P=M[R];
var name=Q[R]||R;

if(P===undefined){if(N!==false&&S[name]){S[name].reset(L);
}else{O[name]=j;
}}else{if(N!==false&&S[name]){S[name].set(L,P);
}else{O[name]=P!==null?P:j;
}}}},reset:function(T,name,U){name=this.__dj[name]||name;
if(U!==false&&this.__dl[name]){return this.__dl[name].reset(T);
}else{T.style[name]=j;
}},get:qx.core.Environment.select(i,{"mshtml":function(V,name,W,X){name=this.__dj[name]||name;
if(X!==false&&this.__dl[name]){return this.__dl[name].get(V,W);
}if(!V.currentStyle){return V.style[name]||j;
}switch(W){case this.LOCAL_MODE:return V.style[name]||j;
case this.CASCADED_MODE:return V.currentStyle[name]||j;
default:var bc=V.currentStyle[name]||j;
if(/^-?[\.\d]+(px)?$/i.test(bc)){return bc;
}var bb=this.__dk[name];

if(bb){var Y=V.style[name];
V.style[name]=bc||0;
var ba=V.style[bb]+c;
V.style[name]=Y;
return ba;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bc)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bc;
}},"default":function(bd,name,be,bf){name=this.__dj[name]||name;
if(bf!==false&&this.__dl[name]){return this.__dl[name].get(bd,be);
}switch(be){case this.LOCAL_MODE:return bd.style[name]||j;
case this.CASCADED_MODE:if(bd.currentStyle){return bd.currentStyle[name]||j;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bg=qx.dom.Node.getDocument(bd);
var bh=bg.defaultView.getComputedStyle(bd,null);
return bh?bh[name]:j;
}}})},defer:function(bi){bi.__dh();
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
(function(){var d="engine.version",c="engine.name",b="undefined",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Environment.select(c,{"opera":function(e){if(parseFloat(qx.core.Environment.get(d))<9.5){return (e||window).document.body.clientWidth;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;
}},"webkit":function(g){if(parseFloat(qx.core.Environment.get(d))<523.15){return (g||window).innerWidth;
}else{var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}},"default":function(i){var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientWidth:j.body.clientWidth;
}}),getHeight:qx.core.Environment.select(c,{"opera":function(k){if(parseFloat(qx.core.Environment.get(d))<9.5){return (k||window).document.body.clientHeight;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}},"webkit":function(m){if(parseFloat(qx.core.Environment.get(d))<523.15){return (m||window).innerHeight;
}else{var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientHeight:n.body.clientHeight;
}},"default":function(o){var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientHeight:p.body.clientHeight;
}}),getScrollLeft:function(q){var q=q?q:window;

if(typeof q.pageXOffset!==b){return q.pageXOffset;
}var r=q.document;
return r.documentElement.scrollLeft||r.body.scrollLeft;
},getScrollTop:function(s){var s=s?s:window;

if(typeof s.pageYOffeset!==b){return s.pageYOffset;
}var t=s.document;
return t.documentElement.scrollTop||t.body.scrollTop;
},__dm:function(){var u=this.getWidth()>this.getHeight()?90:0;
var v=window.orientation;

if(v==null||Math.abs(v%180)==u){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};
}else{return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};
}},__dn:null,getOrientation:function(w){var x=(w||window).orientation;

if(x==null){x=this.getWidth(w)>this.getHeight(w)?90:0;
}else{x=this.__dn[x];
}return x;
},isLandscape:function(y){return Math.abs(this.getOrientation(y))==90;
},isPortrait:function(z){return Math.abs(this.getOrientation(z))!==90;
}},defer:function(A){A.__dn=A.__dm();
}});
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
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__my:false,__mz:null,__mq:null,__mr:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===m&&(D===m||D===g)){return true;
}
if(C===j&&(D===m||D===g||D===p)){return true;
}return false;
},registerEvent:function(E,F,G){if(qx.core.Environment.get(k)==x&&(qx.core.Environment.get(d)<9||(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)<9))){if(!E.__mA){var H=E.tagName.toLowerCase();
var I=E.type;

if(I===h||I===f||H===g||I===b||I===c){qx.bom.Event.addNativeListener(E,u,this._onPropertyWrapper);
}
if(I!==b&&I!==c){qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}
if(I===h||I===f){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}E.__mA=true;
}}else{if(F===m){this.__mB(E);
}else if(F===j){if(E.type===c||E.type===b){qx.bom.Event.addNativeListener(E,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(E.type===h||E.type===f){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}}}}},__mB:qx.core.Environment.select(k,{"mshtml":function(J){if(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.addNativeListener(J,m,this._onInputWrapper);

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
}}),unregisterEvent:function(O,P){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(d)<9&&qx.core.Environment.get(A)<9){if(O.__mA){var Q=O.tagName.toLowerCase();
var R=O.type;

if(R===h||R===f||Q===g||R===b||R===c){qx.bom.Event.removeNativeListener(O,u,this._onPropertyWrapper);
}
if(R!==b&&R!==c){qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}
if(R===h||R===f){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}
try{delete O.__mA;
}catch(S){O.__mA=null;
}}}else{if(P===m){this.__mC(O);
}else if(P===j){if(O.type===c||O.type===b){qx.bom.Event.removeNativeListener(O,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}}
if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(O.type===h||O.type===f){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}}}},__mC:qx.core.Environment.select(k,{"mshtml":function(T){if(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.removeNativeListener(T,m,this._onInputWrapper);

if(T.type===h||T.type===f||T.type===g){qx.bom.Event.removeNativeListener(T,y,this._inputFixWrapper);
}}},"webkit":function(U){var V=U.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(d))<532&&V==g){qx.bom.Event.removeNativeListener(U,a,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);
},"opera":function(W){qx.bom.Event.removeNativeListener(W,y,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(W,v,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(W,w,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);
},"default":function(X){qx.bom.Event.removeNativeListener(X,m,this._onInputWrapper);
}}),_onKeyPress:qx.core.Environment.select(k,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__mq){this.__mq=Y.value;
qx.event.Registration.fireEvent(Y,j,qx.event.type.Data,[Y.value]);
}}},"default":null}),_inputFix:qx.core.Environment.select(k,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__mr){this.__mr=ba.value;
qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);
}}},"default":null}),_onKeyDown:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__my=true;
}},"default":null}),_onKeyUp:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__my=false;
}},"default":null}),_onBlur:qx.core.Environment.select(k,{"opera":function(e){if(this.__mz&&qx.core.Environment.get(t)<10.6){window.clearTimeout(this.__mz);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);
var bb=bc.tagName.toLowerCase();
if(!this.__my||bb!==m){if((qx.core.Environment.get(k)==z)&&qx.core.Environment.get(t)<10.6){this.__mz=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
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
(function(){var v="",u="select",t="engine.name",s="soft",r="off",q="textarea",p="auto",o="wrap",n="text",m="mshtml",d="number",k="checkbox",g="select-one",c="input",b="option",f="value",e="radio",h="qx.bom.Input",a="nowrap",j="normal";
qx.Class.define(h,{statics:{__fI:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(w,x,y){var x=x?qx.lang.Object.clone(x):{};
var z;

if(w===q||w===u){z=w;
}else{z=c;
x.type=w;
}return qx.bom.Element.create(z,x,y);
},setValue:function(A,B){var G=A.nodeName.toLowerCase();
var D=A.type;
var Array=qx.lang.Array;
var H=qx.lang.Type;

if(typeof B===d){B+=v;
}
if((D===k||D===e)){if(H.isArray(B)){A.checked=Array.contains(B,A.value);
}else{A.checked=A.value==B;
}}else if(G===u){var C=H.isArray(B);
var I=A.options;
var E,F;

for(var i=0,l=I.length;i<l;i++){E=I[i];
F=E.getAttribute(f);

if(F==null){F=E.text;
}E.selected=C?Array.contains(B,F):B==F;
}
if(C&&B.length==0){A.selectedIndex=-1;
}}else if((D===n||D===q)&&(qx.core.Environment.get(t)==m)){A.$$inValueSet=true;
A.value=B;
A.$$inValueSet=null;
}else{A.value=B;
}},getValue:function(J){var P=J.nodeName.toLowerCase();

if(P===b){return (J.attributes.value||{}).specified?J.value:J.text;
}
if(P===u){var K=J.selectedIndex;
if(K<0){return null;
}var Q=[];
var S=J.options;
var R=J.type==g;
var O=qx.bom.Input;
var N;
for(var i=R?K:0,M=R?K+1:S.length;i<M;i++){var L=S[i];

if(L.selected){N=O.getValue(L);
if(R){return N;
}Q.push(N);
}}return Q;
}else{return (J.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Environment.select(t,{"mshtml":function(T,U){var W=U?s:r;
var V=U?p:v;
T.wrap=W;
T.style.overflowY=V;
},"gecko|webkit":function(X,Y){var bb=Y?s:r;
var ba=Y?v:p;
X.setAttribute(o,bb);
X.style.overflow=ba;
},"default":function(bc,bd){bc.style.whiteSpace=bd?j:a;
}})}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__dv=d;
this.__ef={};
qx.event.handler.Appear.__eg[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__eg:{},refresh:function(){var e=this.__eg;

for(var f in e){e[f].refresh();
}}},members:{__dv:null,__ef:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__ef;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__ef;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__ef;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__dv.dispatchEvent(w,t);
}}}},destruct:function(){this.__dv=this.__ef=null;
delete qx.event.handler.Appear.__eg[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
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
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__dv=b;
this.__cy=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dv:null,__cy:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__dv=this.__cy=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="mouseup",s="engine.name",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="os.name",l="mouseover",k="mouseout",d="ios",j="mousemove",g="on",c="engine.version",b="useraction",f="webkit",e="gecko",h="DOMMouseScroll",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__dv=u;
this.__cy=u.getWindow();
this.__dG=this.__cy.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eh:null,__ei:null,__ej:null,__ek:null,__el:null,__dv:null,__cy:null,__dG:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===d?function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===d?function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__em:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__cy,b,qx.event.type.Data,[E||D.type]);
},__en:function(){var H=[this.__cy,this.__dG,this.__dG.body];
var I=this.__cy;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__eh=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,q,this.__eh);
Event.addNativeListener(this.__dG,t,this.__eh);
Event.addNativeListener(this.__dG,r,this.__eh);
Event.addNativeListener(this.__dG,n,this.__eh);
Event.addNativeListener(this.__dG,p,this.__eh);
},_initMoveObserver:function(){this.__ei=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,j,this.__ei);
Event.addNativeListener(this.__dG,l,this.__ei);
Event.addNativeListener(this.__dG,k,this.__ei);
},_initWheelObserver:function(){this.__ej=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__en();
qx.bom.Event.addNativeListener(J.target,J.type,this.__ej);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,q,this.__eh);
Event.removeNativeListener(this.__dG,t,this.__eh);
Event.removeNativeListener(this.__dG,r,this.__eh);
Event.removeNativeListener(this.__dG,n,this.__eh);
Event.removeNativeListener(this.__dG,p,this.__eh);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,j,this.__ei);
Event.removeNativeListener(this.__dG,l,this.__ei);
Event.removeNativeListener(this.__dG,k,this.__ei);
},_stopWheelObserver:function(){var K=this.__en();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__ej);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__em(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__eo){this.__eo(M,N,O);
}
if(this.__eq){this.__eq(M,N,O);
}this.__em(M,N,O);

if(this.__ep){this.__ep(M,N,O);
}
if(this.__er){this.__er(M,N,O);
}this.__ek=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__em(P,o);
}),__eo:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__em(Q,t,S);
}}},"default":null}),__ep:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__em(T,p,V);
}},"default":null}),__eq:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__ek==r){this.__em(W,q,Y);
}else if(X==n){this.__em(W,r,Y);
}},"default":null}),__er:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__el=bc;
break;
case t:if(bc!==this.__el){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__el);
this.__em(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dv=this.__cy=this.__dG=this.__el=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var e="os.name",d="opera",c="engine.name",b="qx.event.type.Dom",a="osx";
qx.Class.define(b,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(f,g){var g=qx.event.type.Native.prototype._cloneNativeEvent.call(this,f,g);
g.shiftKey=f.shiftKey;
g.ctrlKey=f.ctrlKey;
g.altKey=f.altKey;
g.metaKey=f.metaKey;
return g;
},getModifiers:function(){var i=0;
var h=this._native;

if(h.shiftKey){i|=qx.event.type.Dom.SHIFT_MASK;
}
if(h.ctrlKey){i|=qx.event.type.Dom.CTRL_MASK;
}
if(h.altKey){i|=qx.event.type.Dom.ALT_MASK;
}
if(h.metaKey){i|=qx.event.type.Dom.META_MASK;
}return i;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(e)==a&&qx.core.Environment.get(c)!=d){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
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
},__es:{0:j,2:i,1:h},__et:{1:j,2:i,4:h},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:return i;
case f:if(qx.core.Environment.get(b)===a&&qx.core.Environment.get(c)<9){return j;
}default:if(this._native.target!==undefined){return this.__es[this._native.button]||g;
}else{return this.__et[this._native.button]||g;
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
},__eu:function(m){var n=Math.abs(m);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>n){qx.event.type.MouseWheel.MINSCROLL=n;
this.__ev();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<n){qx.event.type.MouseWheel.MAXSCROLL=n;
this.__ev();
}if(qx.event.type.MouseWheel.MAXSCROLL===n&&qx.event.type.MouseWheel.MINSCROLL===n){return 2*(m/n);
}var o=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var p=(m/o)*Math.log(o)*qx.event.type.MouseWheel.FACTOR;
return p<0?Math.min(p,-1):Math.max(p,1);
},__ev:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;
var t=qx.event.type.MouseWheel.MINSCROLL||q;

if(q<=t){return;
}var r=q-t;
var s=(q/r)*Math.log(r);

if(s==0){s=1;
}qx.event.type.MouseWheel.FACTOR=6/s;
},getWheelDelta:function(u){var e=this._native;
if(u===undefined){if(v===undefined){var v=-e.wheelDelta;

if(e.wheelDelta===undefined){v=e.detail;
}}return this.__ew(v);
}if(u===i){var x=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__ew(-e.wheelDeltaX):0;
}}else{if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__ew(e.detail);
}}return x;
}if(u===a){var y=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__ew(-e.wheelDeltaY):0;
}else{y=this.__ew(-e.wheelDelta);
}}else{if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__ew(e.detail);
}}return y;
}return 0;
},__ew:function(w){if(qx.core.Environment.get(f)){return this.__eu(w);
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
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="win",c="1",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__dv=by;
this.__cy=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__dG=this.__cy;
}else{this.__dG=this.__cy.document.documentElement;
}this.__ex={};
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
}}},members:{__ey:null,__dv:null,__cy:null,__dG:null,__ex:null,__ez:null,__eA:null,__eB:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__eC();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__dv.dispatchEvent(bL,event);
}if(this.__cy){qx.event.Registration.fireEvent(this.__cy,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__eC();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__dv.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__cy){qx.event.Registration.fireEvent(this.__cy,s,qx.event.type.Data,[bN]);
}},__eC:function(){var bR=this.__dv.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__dv.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__ey=qx.lang.Function.listener(this.__eD,this);
this.__eB=qx.lang.Function.listener(this.__eF,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,i,this.__ey);
Event.addNativeListener(this.__dG,m,this.__ey);
Event.addNativeListener(this.__dG,k,this.__eB);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,i,this.__ey);
Event.removeNativeListener(this.__dG,m,this.__ey);
Event.removeNativeListener(this.__dG,k,this.__eB);

for(var bU in (this.__eA||{})){var bT=this.__eA[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__eA);
},__eD:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__ex[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__ex[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==b){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__ex[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__ex[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__eE(ca.target,cd,ce);
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
}}this.__ex[ci]=ch;
}},"opera":function(cj){this.__ez=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__eE:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__eA){this.__eA={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__eA[co]){return;
}var self=this;
this.__eA[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__eF(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__eA[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__eF:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

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
if(cB!=this.__ez){this._idealKeyHandler(0,this.__ez,cA,cz);
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
this.__ez=this.__dv=this.__cy=this.__dG=this.__ex=null;
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
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__eG:null,__eH:null,__eI:null,__eJ:null,__eK:null,__eL:null,__eM:null,__eN:null,__eO:null,__eP:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
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
}},tryActivate:function(S){var T=this.__fe(S);

if(T){this.setActive(T);
}},__em:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__eQ:function(){if(this._windowFocused){this._windowFocused=false;
this.__em(this._window,null,g,false);
}},__eR:function(){if(!this._windowFocused){this._windowFocused=true;
this.__em(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eI=qx.lang.Function.listener(this.__eW,this);
this.__eJ=qx.lang.Function.listener(this.__eV,this);
this.__eK=qx.lang.Function.listener(this.__eS,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.addNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.addNativeListener(this._window,g,this.__eJ,true);
qx.bom.Event.addNativeListener(this._window,y,this.__eK,true);
},"mshtml":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eM=qx.lang.Function.listener(this.__eT,this);
this.__eN=qx.lang.Function.listener(this.__eU,this);
this.__eL=qx.lang.Function.listener(this.__fb,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG);
qx.bom.Event.addNativeListener(this._document,h,this.__eH);
qx.bom.Event.addNativeListener(this._document,b,this.__eM);
qx.bom.Event.addNativeListener(this._document,a,this.__eN);
qx.bom.Event.addNativeListener(this._document,d,this.__eL);
},"webkit":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eN=qx.lang.Function.listener(this.__eU,this);
this.__eI=qx.lang.Function.listener(this.__eW,this);
this.__eJ=qx.lang.Function.listener(this.__eV,this);
this.__eL=qx.lang.Function.listener(this.__fb,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.addNativeListener(this._document,d,this.__eL,false);
qx.bom.Event.addNativeListener(this._window,c,this.__eN,true);
qx.bom.Event.addNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.addNativeListener(this._window,g,this.__eJ,true);
},"opera":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eM=qx.lang.Function.listener(this.__eT,this);
this.__eN=qx.lang.Function.listener(this.__eU,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.addNativeListener(this._window,z,this.__eM,true);
qx.bom.Event.addNativeListener(this._window,c,this.__eN,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__eJ,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__eK,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH);
qx.bom.Event.removeNativeListener(this._document,b,this.__eM);
qx.bom.Event.removeNativeListener(this._document,a,this.__eN);
qx.bom.Event.removeNativeListener(this._document,d,this.__eL);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__eL,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__eN,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__eJ,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__eM,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__eN,true);
}}),__eS:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__ff(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__eT:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__eR();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__fd(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__eR();

if(this.__eO){this.setFocus(this.__eO);
delete this.__eO;
}
if(this.__eP){this.setActive(this.__eP);
delete this.__eP;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__ff(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__eU:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__eQ();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__eQ();
this.__eO=this.getFocus();
this.__eP=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__eV:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__eQ();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__eQ();
this.__eO=this.getFocus();
this.__eP=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__eW:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__eR();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__eR();

if(this.__eO){this.setFocus(this.__eO);
delete this.__eO;
}
if(this.__eP){this.setActive(this.__eP);
delete this.__eP;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__eX:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__fd(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__fd(bB);

if(bA){if(!this.__ff(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__ff(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__fd(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__fd(bK);

if(!this.__ff(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__eY:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__fa(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__fa(bQ));
},"default":null})),__fa:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__fb:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__ff(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__fc:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__fd:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__fc(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__fe:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__ff:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__em(cg,cf,v,true);
}
if(cf){this.__em(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__em(ci,ch,a,true);
}
if(ch){this.__em(ch,ci,b,true);
}if(ci){this.__em(ci,ch,g,false);
}
if(ch){this.__em(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fg=null;
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
},"default":function(p){if(this.__fh(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__fh(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__fh(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__fh(A)){var F=qx.bom.Range.get();
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
}},"gecko|webkit":function(K){if(this.__fh(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__fh(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__fh(O)){var T=qx.bom.Range.get();
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
}},"gecko|webkit":function(Y){if(this.__fh(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__fh(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__fh:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
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
this.__dv=f;
this.__cy=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dv:null,__cy:null,__fi:null,__fj:null,__fk:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__fk=qx.lang.Function.listener(this._onNative,this);
this.__fi=qx.bom.Event.supportsEvent(this.__cy,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__cy,this.__fi,this.__fk);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cy,this.__fi,this.__fk);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__fj!=p){this.__fj=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__cy,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__dv=this.__cy=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__fl:null,__fm:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__fl=d;
this.__fm=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__fl=this.__fl;
g.__fm=this.__fm;
return g;
},getOrientation:function(){return this.__fl;
},isLandscape:function(){return this.__fm==c;
},isPortrait:function(){return this.__fm==a;
}}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__dv=u;
this.__cy=u.getWindow();
this.__dG=this.__cy.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__fn:null,__fo:null,__dv:null,__cy:null,__dG:null,__fp:null,__fq:null,__fr:null,__fs:null,__ft:false,__fu:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__fv:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__em:function(F,G,H,I){if(!H){H=this.__fv(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__cy,h,qx.event.type.Data,[G]);
},__fw:function(J,K,L){if(!L){L=this.__fv(J);
}var K=K||J.type;

if(K==r){this.__fx(J,L);
}else if(K==q){this.__fy(J,L);
}else if(K==s){this.__fz(J,L);
}},__fx:function(M,N){var O=M.changedTouches[0];
this.__fp=O.screenX;
this.__fq=O.screenY;
this.__fr=new Date().getTime();
this.__fs=M.changedTouches.length===1;
},__fy:function(P,Q){if(this.__fs&&P.changedTouches.length>1){this.__fs=false;
}},__fz:function(R,S){if(this.__fs){var T=R.changedTouches[0];
var V={x:T.screenX-this.__fp,y:T.screenY-this.__fq};
var W=qx.event.handler.Touch;

if(this.__fu==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__em(R,f,S,qx.event.type.Tap);
}else{var U=this.__fA(R,S,V);

if(U){R.swipe=U;
this.__em(R,c,S,qx.event.type.Swipe);
}}}},__fA:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__fr;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__fr,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__fB:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__fC(bi)){this.__ft=true;
}else if(bj==s){this.__ft=false;
}var bm=this.__fD(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__fC:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__fD:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__fv(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__fn=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,r,this.__fn);
Event.addNativeListener(this.__dG,q,this.__fn);
Event.addNativeListener(this.__dG,s,this.__fn);
Event.addNativeListener(this.__dG,m,this.__fn);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__fo=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,k,this.__fo);
Event.addNativeListener(this.__dG,o,this.__fo);
Event.addNativeListener(this.__dG,l,this.__fo);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,r,this.__fn);
Event.removeNativeListener(this.__dG,q,this.__fn);
Event.removeNativeListener(this.__dG,s,this.__fn);
Event.removeNativeListener(this.__dG,m,this.__fn);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,k,this.__fo);
Event.removeNativeListener(this.__dG,o,this.__fo);
Event.removeNativeListener(this.__dG,l,this.__fo);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__ft){return;
}var bt=this.__fB(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__fu=this.__fv(bu);
}this.__em(bu,bv);
this.__fw(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__dv=this.__cy=this.__dG=this.__fu=null;
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
e.offsetX=d.offsetX;
e.offsetY=d.offsetY;
e.layerX=(d.offsetX||d.layerX);
e.layerY=(d.offsetY||d.layerY);
e.scale=d.scale;
e.rotation=d.rotation;
e.srcElement=d.srcElement;
e.targetTouches=[];

for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];
}e.changedTouches=[];

for(i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];
}e.touches=[];

for(i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];
}return e;
},stop:function(){this.stopPropagation();
},getAllTouches:function(){return this._native.touches;
},getTargetTouches:function(){return this._native.targetTouches;
},getChangedTargetTouches:function(){return this._native.changedTouches;
},isMultiTouch:function(){return this.__fF().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__fE(f).pageX;
},getDocumentTop:function(g){return this.__fE(g).pageY;
},getScreenLeft:function(h){return this.__fE(h).screenX;
},getScreenTop:function(j){return this.__fE(j).screenY;
},getViewportLeft:function(k){return this.__fE(k).clientX;
},getViewportTop:function(l){return this.__fE(l).clientY;
},getIdentifier:function(m){return this.__fE(m).identifier;
},__fE:function(n){n=n==null?0:n;
return this.__fF()[n];
},__fF:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
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
this.__dv=E;
this.__dG=E.getWindow().document.documentElement;
this.__dv.addListener(this.__dG,x,this._onMouseDown,this);
this.__fQ();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__dv:null,__dG:null,__fG:null,__fH:null,__fI:null,__fJ:null,__fK:null,__e:null,__fL:null,__fM:null,__fN:false,__fO:0,__fP:0,canHandleEvent:function(F,G){},registerEvent:function(H,I,J){},unregisterEvent:function(K,L,M){},addType:function(N){this.__fI[N]=true;
},addAction:function(O){this.__fJ[O]=true;
},supportsType:function(P){return !!this.__fI[P];
},supportsAction:function(Q){return !!this.__fJ[Q];
},getData:function(R){if(!this.__fW||!this.__fG){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__fI[R]){throw new Error("Unsupported data type: "+R+"!");
}
if(!this.__e[R]){this.__fL=R;
this.__em(q,this.__fH,this.__fG,false);
}
if(!this.__e[R]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__e[R]||null;
},getCurrentAction:function(){return this.__fM;
},addData:function(S,T){this.__e[S]=T;
},getCurrentType:function(){return this.__fL;
},isSessionActive:function(){return this.__fN;
},__fQ:function(){this.__fI={};
this.__fJ={};
this.__fK={};
this.__e={};
},__fR:function(){if(this.__fH==null){return;
}var W=this.__fJ;
var U=this.__fK;
var V=null;

if(this.__fW){if(U.Shift&&U.Control&&W.alias){V=k;
}else if(U.Shift&&U.Alt&&W.copy){V=j;
}else if(U.Shift&&W.move){V=b;
}else if(U.Alt&&W.alias){V=k;
}else if(U.Control&&W.copy){V=j;
}else if(W.move){V=b;
}else if(W.copy){V=j;
}else if(W.alias){V=k;
}}
if(V!=this.__fM){this.__fM=V;
this.__em(o,this.__fH,this.__fG,false);
}},__em:function(X,Y,ba,bb,bc){var be=qx.event.Registration;
var bd=be.createEvent(X,qx.event.type.Drag,[bb,bc]);

if(Y!==ba){bd.setRelatedTarget(ba);
}return be.dispatchEvent(Y,bd);
},__fS:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(w)==y){return bf;
}bf=bf.parentNode;
}return null;
},__fT:function(bg){while(bg&&bg.nodeType==1){if(bg.getAttribute(s)==y){return bg;
}bg=bg.parentNode;
}return null;
},__fU:function(){this.__fH=null;
this.__dv.removeListener(this.__dG,c,this._onMouseMove,this,true);
this.__dv.removeListener(this.__dG,B,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__fQ();
},__fV:function(){if(this.__fN){this.__dv.removeListener(this.__dG,a,this._onMouseOver,this,true);
this.__dv.removeListener(this.__dG,h,this._onMouseOut,this,true);
this.__dv.removeListener(this.__dG,g,this._onKeyDown,this,true);
this.__dv.removeListener(this.__dG,C,this._onKeyUp,this,true);
this.__dv.removeListener(this.__dG,A,this._onKeyPress,this,true);
this.__em(z,this.__fH,this.__fG,false);
this.__fN=false;
}this.__fW=false;
this.__fG=null;
this.__fU();
},__fW:false,_onWindowBlur:function(e){this.__fV();
},_onKeyDown:function(e){var bh=e.getKeyIdentifier();

switch(bh){case D:case f:case d:if(!this.__fK[bh]){this.__fK[bh]=true;
this.__fR();
}}},_onKeyUp:function(e){var bi=e.getKeyIdentifier();

switch(bi){case D:case f:case d:if(this.__fK[bi]){this.__fK[bi]=false;
this.__fR();
}}},_onKeyPress:function(e){var bj=e.getKeyIdentifier();

switch(bj){case v:this.__fV();
}},_onMouseDown:function(e){if(this.__fN||e.getButton()!==t){return;
}var bk=this.__fS(e.getTarget());

if(bk){this.__fO=e.getDocumentLeft();
this.__fP=e.getDocumentTop();
this.__fH=bk;
this.__dv.addListener(this.__dG,c,this._onMouseMove,this,true);
this.__dv.addListener(this.__dG,B,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fW){this.__em(r,this.__fG,this.__fH,false,e);
}if(this.__fN){e.stopPropagation();
}this.__fV();
},_onMouseMove:function(e){if(this.__fN){if(!this.__em(u,this.__fH,this.__fG,true,e)){this.__fV();
}}else{if(Math.abs(e.getDocumentLeft()-this.__fO)>3||Math.abs(e.getDocumentTop()-this.__fP)>3){if(this.__em(n,this.__fH,this.__fG,true,e)){this.__fN=true;
this.__dv.addListener(this.__dG,a,this._onMouseOver,this,true);
this.__dv.addListener(this.__dG,h,this._onMouseOut,this,true);
this.__dv.addListener(this.__dG,g,this._onKeyDown,this,true);
this.__dv.addListener(this.__dG,C,this._onKeyUp,this,true);
this.__dv.addListener(this.__dG,A,this._onKeyPress,this,true);
var bl=this.__fK;
bl.Control=e.isCtrlPressed();
bl.Shift=e.isShiftPressed();
bl.Alt=e.isAltPressed();
this.__fR();
}else{this.__em(z,this.__fH,this.__fG,false);
this.__fU();
}}}},_onMouseOver:function(e){var bm=e.getTarget();
var bn=this.__fT(bm);

if(bn&&bn!=this.__fG){this.__fW=this.__em(m,bn,this.__fH,true,e);
this.__fG=bn;
this.__fR();
}},_onMouseOut:function(e){var bp=this.__fT(e.getTarget());
var bo=this.__fT(e.getRelatedTarget());

if(bp&&bp!==bo&&bp==this.__fG){this.__em(l,this.__fG,bo,false,e);
this.__fG=null;
this.__fW=false;
qx.event.Timer.once(this.__fR,this,0);
}}},destruct:function(){this.__fH=this.__fG=this.__dv=this.__dG=this.__fI=this.__fJ=this.__fK=this.__e=null;
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
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__fX=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__fY=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__ga:null,__fX:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__ga);
this.__ga=null;
}else if(p){this.__ga=window.setInterval(this.__fX,this.getInterval());
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
}})},destruct:function(){if(this.__ga){window.clearInterval(this.__ga);
}this.__ga=this.__fX=null;
}});
})();
(function(){var c="offline",b="online",a="qx.event.handler.Offline";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__dv=d;
this.__cy=d.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{online:true,offline:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dv:null,__cy:null,__fk:null,canHandleEvent:function(e,f){},registerEvent:function(g,h,i){},unregisterEvent:function(j,k,l){},_initObserver:function(){this.__fk=qx.lang.Function.listener(this._onNative,this);
qx.bom.Event.addNativeListener(this.__cy,c,this.__fk);
qx.bom.Event.addNativeListener(this.__cy,b,this.__fk);
},_stopObserver:function(){qx.bom.Event.removeNativeListener(this.__cy,c,this.__fk);
qx.bom.Event.removeNativeListener(this.__cy,b,this.__fk);
},_onNative:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(this.__cy,m.type,qx.event.type.Event,[]);
}),isOnline:function(){return !!this.__cy.navigator.onLine;
}},destruct:function(){this.__dv=null;
this._stopObserver();
delete qx.event.handler.Appear.__instances[this.$$hash];
},defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__gb:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__gc:{},__gd:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__gd[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__gd[t]=true;
}catch(e){qx.bom.Element.__gd[t]=false;
}}return qx.bom.Element.__gd[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__gc[w]){var v=qx.bom.Element.__gc[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__gc[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__gb;
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
qx.Class.define(e,{statics:{__ge:{names:{"class":b,"for":z,html:s,text:qx.core.Environment.get(n)?a:t,colspan:k,rowspan:d,valign:c,datetime:p,accesskey:f,tabindex:r,maxlength:q,readonly:g,longdesc:y,cellpadding:l,cellspacing:x,frameborder:w,usemap:u},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(B){var C=[];
var E=this.__ge.runtime;

for(var D in B){if(!E[D]){C.push(D,v,B[D],A);
}}return C.join(j);
},get:function(F,name){var H=this.__ge;
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
}var K=this.__ge;
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
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cA:null,__gf:null,__gg:true,__cy:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__gf&&this.__gh[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__gg||!qx.dom.Hierarchy.contains(this.__gf,o)){o=this.__gf;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__gh:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__gf===q&&this.__gg==r){return;
}
if(this.__gf){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__gg=r;
this.__gf=q;
this.__cA.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__gf;
},releaseCapture:function(){var s=this.__gf;

if(!s){return;
}this.__gf=null;
this.__cA.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__gf=this.__cy=this.__cA=null;
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
(function(){var l="",k="pdf",h="wmv",g="divx",f="quicktime",e="mshtml",d="silverlight",c="Silverlight",b="plugin.silverlight.version",a="function",H="QuickTimeCheckObject.QuickTimeCheck.1",G="Adobe Acrobat",F="plugin.windowsmedia",E="QuickTime",D="plugin.silverlight",C="qx.bom.client.Plugin",B="plugin.divx",A="Chrome PDF Viewer",z="Windows Media",y="plugin.gears",s="plugin.quicktime",t="plugin.windowsmedia.version",q="DivX Web Player",r="AgControl.AgControl",o="plugin.pdf",p="plugin.pdf.version",m="plugin.divx.version",n="WMPlayer.OCX.7",u="AcroPDF.PDF",v="plugin.activex",x="plugin.quicktime.version",w="npdivx.DivXBrowserPlugin.1";
qx.Bootstrap.define(C,{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},getActiveX:function(){return (typeof window.ActiveXObject===a);
},__gi:{quicktime:{plugin:[E],control:H},wmv:{plugin:[z],control:n},divx:{plugin:[q],control:w},silverlight:{plugin:[c],control:r},pdf:{plugin:[A,G],control:u}},getQuicktimeVersion:function(){var I=qx.bom.client.Plugin.__gi[f];
return qx.bom.client.Plugin.__gj(I.control,I.plugin);
},getWindowsMediaVersion:function(){var J=qx.bom.client.Plugin.__gi[h];
return qx.bom.client.Plugin.__gj(J.control,J.plugin);
},getDivXVersion:function(){var K=qx.bom.client.Plugin.__gi[g];
return qx.bom.client.Plugin.__gj(K.control,K.plugin);
},getSilverlightVersion:function(){var L=qx.bom.client.Plugin.__gi[d];
return qx.bom.client.Plugin.__gj(L.control,L.plugin);
},getPdfVersion:function(){var M=qx.bom.client.Plugin.__gi[k];
return qx.bom.client.Plugin.__gj(M.control,M.plugin);
},getQuicktime:function(){var N=qx.bom.client.Plugin.__gi[f];
return qx.bom.client.Plugin.__gk(N.control,N.plugin);
},getWindowsMedia:function(){var O=qx.bom.client.Plugin.__gi[h];
return qx.bom.client.Plugin.__gk(O.control,O.plugin);
},getDivX:function(){var P=qx.bom.client.Plugin.__gi[g];
return qx.bom.client.Plugin.__gk(P.control,P.plugin);
},getSilverlight:function(){var Q=qx.bom.client.Plugin.__gi[d];
return qx.bom.client.Plugin.__gk(Q.control,Q.plugin);
},getPdf:function(){var R=qx.bom.client.Plugin.__gi[k];
return qx.bom.client.Plugin.__gk(R.control,R.plugin);
},__gj:function(S,T){var U=qx.bom.client.Plugin.__gk(S,T);
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
}},__gk:function(bc,bd){if(qx.bom.client.Engine.getName()==e){var be=window.ActiveXObject;

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
(function(){var j="borderTopWidth",i="borderLeftWidth",h="engine.name",g="scroll",f="engine.version",e="marginTop",d="marginLeft",c="border-box",b="borderBottomWidth",a="borderRightWidth",D="auto",C="padding",B="browser.quirksmode",A="qx.bom.element.Location",z="paddingLeft",y="static",x="marginBottom",w="visible",v="BODY",u="paddingBottom",q="paddingTop",r="gecko",o="marginRight",p="mshtml",m="position",n="margin",k="overflow",l="paddingRight",s="browser.documentmode",t="border";
qx.Class.define(A,{statics:{__gl:function(E,F){return qx.bom.element.Style.get(E,F,qx.bom.element.Style.COMPUTED_MODE,false);
},__gm:function(G,H){return parseInt(qx.bom.element.Style.get(G,H,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gn:function(I){var K=0,top=0;
var J=qx.dom.Node.getWindow(I);
K-=qx.bom.Viewport.getScrollLeft(J);
top-=qx.bom.Viewport.getScrollTop(J);
return {left:K,top:top};
},__go:qx.core.Environment.select(h,{"mshtml":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=0;
var top=0;
O-=M.clientLeft+N.documentElement.clientLeft;
top-=M.clientTop+N.documentElement.clientTop;

if(!qx.core.Environment.get(B)){O+=this.__gm(M,i);
top+=this.__gm(M,j);
}return {left:O,top:top};
},"webkit":function(P){var R=qx.dom.Node.getDocument(P);
var Q=R.body;
var S=Q.offsetLeft;
var top=Q.offsetTop;
if(parseFloat(qx.core.Environment.get(f))<530.17){S+=this.__gm(Q,i);
top+=this.__gm(Q,j);
}return {left:S,top:top};
},"gecko":function(T){var U=qx.dom.Node.getDocument(T).body;
var V=U.offsetLeft;
var top=U.offsetTop;
if(parseFloat(qx.core.Environment.get(f))<1.9){V+=this.__gm(U,d);
top+=this.__gm(U,e);
}if(qx.bom.element.BoxSizing.get(U)!==c){V+=this.__gm(U,i);
top+=this.__gm(U,j);
}return {left:V,top:top};
},"default":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
return {left:Y,top:top};
}}),__gp:qx.core.Environment.select(h,{"gecko":function(ba){if(ba.getBoundingClientRect){var bd=ba.getBoundingClientRect();
var be=Math.round(bd.left);
var top=Math.round(bd.top);
}else{var be=0;
var top=0;
var bb=qx.dom.Node.getDocument(ba).body;
var bc=qx.bom.element.BoxSizing;

if(bc.get(ba)!==c){be-=this.__gm(ba,i);
top-=this.__gm(ba,j);
}
while(ba&&ba!==bb){be+=ba.offsetLeft;
top+=ba.offsetTop;
if(bc.get(ba)!==c){be+=this.__gm(ba,i);
top+=this.__gm(ba,j);
}if(ba.parentNode&&this.__gl(ba.parentNode,k)!=w){be+=this.__gm(ba.parentNode,i);
top+=this.__gm(ba.parentNode,j);
}ba=ba.offsetParent;
}}return {left:be,top:top};
},"default":function(bf){var bh=qx.dom.Node.getDocument(bf);
if(bf.getBoundingClientRect){var bi=bf.getBoundingClientRect();
var bj=bi.left;
var top=bi.top;
}else{var bj=bf.offsetLeft;
var top=bf.offsetTop;
bf=bf.offsetParent;
var bg=bh.body;
while(bf&&bf!=bg){bj+=bf.offsetLeft;
top+=bf.offsetTop;
bj+=this.__gm(bf,i);
top+=this.__gm(bf,j);
bf=bf.offsetParent;
}}return {left:bj,top:top};
}}),get:function(bk,bl){if(bk.tagName==v){var location=this.__gq(bk);
var bs=location.left;
var top=location.top;
}else{var bm=this.__go(bk);
var br=this.__gp(bk);
var scroll=this.__gn(bk);
var bs=br.left+bm.left-scroll.left;
var top=br.top+bm.top-scroll.top;
}var bn=bs+bk.offsetWidth;
var bo=top+bk.offsetHeight;

if(bl){if(bl==C||bl==g){var bp=qx.bom.element.Overflow.getX(bk);

if(bp==g||bp==D){bn+=bk.scrollWidth-bk.offsetWidth+this.__gm(bk,i)+this.__gm(bk,a);
}var bq=qx.bom.element.Overflow.getY(bk);

if(bq==g||bq==D){bo+=bk.scrollHeight-bk.offsetHeight+this.__gm(bk,j)+this.__gm(bk,b);
}}
switch(bl){case C:bs+=this.__gm(bk,z);
top+=this.__gm(bk,q);
bn-=this.__gm(bk,l);
bo-=this.__gm(bk,u);
case g:bs-=bk.scrollLeft;
top-=bk.scrollTop;
bn-=bk.scrollLeft;
bo-=bk.scrollTop;
case t:bs+=this.__gm(bk,i);
top+=this.__gm(bk,j);
bn-=this.__gm(bk,a);
bo-=this.__gm(bk,b);
break;
case n:bs-=this.__gm(bk,d);
top-=this.__gm(bk,e);
bn+=this.__gm(bk,o);
bo+=this.__gm(bk,x);
break;
}}return {left:bs,top:top,right:bn,bottom:bo};
},__gq:function(bt){var top=bt.offsetTop;
var bu=bt.offsetLeft;

if(qx.core.Environment.get(h)!==p||!((parseFloat(qx.core.Environment.get(f))<8||qx.core.Environment.get(s)<8)&&!qx.core.Environment.get(B))){top+=this.__gm(bt,e);
bu+=this.__gm(bt,d);
}
if(qx.core.Environment.get(h)===r){top+=this.__gm(bt,i);
bu+=this.__gm(bt,j);
}return {left:bu,top:top};
},getLeft:function(bv,bw){return this.get(bv,bw).left;
},getTop:function(bx,by){return this.get(bx,by).top;
},getRight:function(bz,bA){return this.get(bz,bA).right;
},getBottom:function(bB,bC){return this.get(bB,bC).bottom;
},getRelative:function(bD,bE,bF,bG){var bI=this.get(bD,bF);
var bH=this.get(bE,bG);
return {left:bI.left-bH.left,top:bI.top-bH.top,right:bI.right-bH.right,bottom:bI.bottom-bH.bottom};
},getPosition:function(bJ){return this.getRelative(bJ,this.getOffsetParent(bJ));
},getOffsetParent:function(bK){var bM=bK.offsetParent||document.body;
var bL=qx.bom.element.Style;

while(bM&&(!/^body|html$/i.test(bM.tagName)&&bL.get(bM,m)===y)){bM=bM.offsetParent;
}return bM;
}}});
})();
(function(){var m="get",k="set",h="reset",g=":not(",f="getValue",e="append",d=")",c="getPreviousSiblings",b="#",a="qx.bom.Collection",K="setValue",J="prepend",I="string",H="getAncestors",G="getOffsetParent",F="remove",E=">*",D="add",C="*",B="",t="addListener",u="has",r="toggle",s="getSiblings",p="replace",q="after",n="replaceWith",o="setCss",v="setStyles",w="before",y="getNextSiblings",x="getPosition",A="getCss",z="removeListener";
(function(){var M=function(N,O){return function(P,Q,R,S,T,U){var length=this.length;

if(length>0){var V=N[O];

for(var i=0;i<length;i++){if(this[i].nodeType===1){V.call(N,this[i],P,Q,R,S,T,U);
}}}return this;
};
};
var L=function(W,X){return function(Y,ba,bb,bc,bd,be){if(this.length>0){var bf=this[0].nodeType===1?W[X](this[0],Y,ba,bb,bc,bd,be):null;

if(bf&&bf.nodeType){return this.__xx([bf]);
}else{return bf;
}}return null;
};
};
qx.Class.define(a,{extend:qx.type.BaseArray,construct:function(bg){qx.type.BaseArray.apply(this,arguments);
},statics:{query:function(bh,bi){var bj=qx.bom.Selector.query(bh,bi);
return qx.lang.Array.cast(bj,qx.bom.Collection);
},id:function(bk){var bl=document.getElementById(bk);
if(bl&&bl.id!=bk){return qx.bom.Collection.query(b+bk);
}if(bl){return new qx.bom.Collection(bl);
}else{return new qx.bom.Collection();
}},html:function(bm,bn){var bo=qx.bom.Html.clean([bm],bn);
return qx.lang.Array.cast(bo,qx.bom.Collection);
},__xt:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(bp,bq){var bs=qx.bom.Collection;
if(bp.nodeType){return new bs(bp);
}else if(typeof bp===I){var br=bs.__xt.exec(bp);

if(br){return br[1]?bs.html(br[1],bq):bs.id(br[3]);
}else{return bs.query(bp,bq);
}}else{return qx.lang.Array.cast(bp,qx.bom.Collection);
}}},members:{__xu:null,setAttribute:M(qx.bom.element.Attribute,k),resetAttribute:M(qx.bom.element.Attribute,h),getAttribute:L(qx.bom.element.Attribute,m),addClass:M(qx.bom.element.Class,D),getClass:L(qx.bom.element.Class,m),hasClass:L(qx.bom.element.Class,u),removeClass:M(qx.bom.element.Class,F),replaceClass:M(qx.bom.element.Class,p),toggleClass:M(qx.bom.element.Class,r),setValue:M(qx.bom.Input,K),getValue:L(qx.bom.Input,f),setStyle:M(qx.bom.element.Style,k),setStyles:M(qx.bom.element.Style,v),resetStyle:M(qx.bom.element.Style,h),getStyle:L(qx.bom.element.Style,m),setCss:M(qx.bom.element.Style,o),getCss:L(qx.bom.element.Style,A),getOffset:L(qx.bom.element.Location,m),getPosition:L(qx.bom.element.Location,x),getOffsetParent:L(qx.bom.element.Location,G),setScrollLeft:function(bt){var Node=qx.dom.Node;

for(var i=0,l=this.length,bu;i<l;i++){bu=this[i];

if(Node.isElement(bu)){bu.scrollLeft=bt;
}else if(Node.isWindow(bu)){bu.scrollTo(bt,this.getScrollTop(bu));
}else if(Node.isDocument(bu)){Node.getWindow(bu).scrollTo(bt,this.getScrollTop(bu));
}}return this;
},setScrollTop:function(bv){var Node=qx.dom.Node;

for(var i=0,l=this.length,bw;i<l;i++){bw=this[i];

if(Node.isElement(bw)){bw.scrollTop=bv;
}else if(Node.isWindow(bw)){bw.scrollTo(this.getScrollLeft(bw),bv);
}else if(Node.isDocument(bw)){Node.getWindow(bw).scrollTo(this.getScrollLeft(bw),bv);
}}return this;
},getScrollLeft:function(){var bx=this[0];

if(!bx){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(bx)||Node.isDocument(bx)){return qx.bom.Viewport.getScrollLeft();
}return bx.scrollLeft;
},getScrollTop:function(){var by=this[0];

if(!by){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(by)||Node.isDocument(by)){return qx.bom.Viewport.getScrollTop();
}return by.scrollTop;
},getWidth:function(){var bz=this[0];
var Node=qx.dom.Node;

if(bz){if(Node.isElement(bz)){return qx.bom.element.Dimension.getWidth(bz);
}else if(Node.isDocument(bz)){return qx.bom.Document.getWidth(Node.getWindow(bz));
}else if(Node.isWindow(bz)){return qx.bom.Viewport.getWidth(bz);
}}return null;
},getContentWidth:function(){var bA=this[0];

if(qx.dom.Node.isElement(bA)){return qx.bom.element.Dimension.getContentWidth(bA);
}return null;
},getHeight:function(){var bB=this[0];
var Node=qx.dom.Node;

if(bB){if(Node.isElement(bB)){return qx.bom.element.Dimension.getHeight(bB);
}else if(Node.isDocument(bB)){return qx.bom.Document.getHeight(Node.getWindow(bB));
}else if(Node.isWindow(bB)){return qx.bom.Viewport.getHeight(bB);
}}return null;
},getContentHeight:function(){var bC=this[0];

if(qx.dom.Node.isElement(bC)){return qx.bom.element.Dimension.getContentHeight(bC);
}return null;
},addListener:M(qx.bom.Element,t),removeListener:M(qx.bom.Element,z),eq:function(bD){return this.slice(bD,+bD+1);
},filter:function(bE,bF){var bG;

if(qx.lang.Type.isFunction(bE)){bG=qx.type.BaseArray.prototype.filter.call(this,bE,bF);
}else{bG=qx.bom.Selector.matches(bE,this);
}return this.__xx(bG);
},is:function(bH){return !!bH&&qx.bom.Selector.matches(bH,this).length>0;
},__xv:/^.[^:#\[\.,]*$/,not:function(bI){if(this.__xv.test(bI)){var bJ=qx.bom.Selector.matches(g+bI+d,this);
return this.__xx(bJ);
}var bJ=qx.bom.Selector.matches(bI,this);
return this.filter(function(bK){return bJ.indexOf(bK)===-1;
});
},add:function(bL,bM){var bN=qx.bom.Selector.query(bL,bM);
var bO=qx.lang.Array.unique(this.concat(bN));
return this.__xx(bO);
},children:function(bP){var bQ=[];

for(var i=0,l=this.length;i<l;i++){bQ.push.apply(bQ,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(bP){bQ=qx.bom.Selector.matches(bP,bQ);
}return this.__xx(bQ);
},closest:function(bR){var bS=new qx.bom.Collection(1);
var bU=qx.bom.Selector;
var bT=this.map(function(bV){while(bV&&bV.ownerDocument){bS[0]=bV;

if(bU.matches(bR,bS).length>0){return bV;
}bV=bV.parentNode;
}});
return this.__xx(qx.lang.Array.unique(bT));
},contents:function(){var bX=[];
var bW=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bX.push.apply(bX,bW.fromCollection(this[i].childNodes));
}return this.__xx(bX);
},find:function(bY){var cb=qx.bom.Selector;
if(this.length===1){return this.__xx(cb.query(bY,this[0]));
}else{var ca=[];

for(var i=0,l=this.length;i<l;i++){ca.push.apply(ca,cb.query(bY,this[i]));
}return this.__xx(qx.lang.Array.unique(ca));
}},next:function(cc){var cd=qx.dom.Hierarchy;
var ce=this.map(cd.getNextElementSibling,cd);
if(cc){ce=qx.bom.Selector.matches(cc,ce);
}return this.__xx(ce);
},nextAll:function(cf){return this.__xw(y,cf);
},prev:function(cg){var ch=qx.dom.Hierarchy;
var ci=this.map(ch.getPreviousElementSibling,ch);
if(cg){ci=qx.bom.Selector.matches(cg,ci);
}return this.__xx(ci);
},prevAll:function(cj){return this.__xw(c,cj);
},parent:function(ck){var Element=qx.dom.Element;
var cl=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(ck){cl=qx.bom.Selector.matches(ck,cl);
}return this.__xx(cl);
},parents:function(cm){return this.__xw(H,cm);
},siblings:function(cn){return this.__xw(s,cn);
},__xw:function(co,cp){var cr=[];
var cq=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){cr.push.apply(cr,cq[co](this[i]));
}var cs=qx.lang.Array.unique(cr);
if(cp){cs=qx.bom.Selector.matches(cp,cs);
}return this.__xx(cs);
},__xx:function(ct){var cu=new qx.bom.Collection;
cu.__xu=this;
ct=Array.prototype.slice.call(ct,0);
cu.push.apply(cu,ct);
return cu;
},andSelf:function(){return this.add(this.__xu);
},end:function(){return this.__xu||new qx.bom.Collection();
},__xy:function(cv,cw){var cB=this[0];
var cA=cB.ownerDocument||cB;
var cz=cA.createDocumentFragment();
var cD=qx.bom.Html.clean(cv,cA,cz);
var cF=cz.firstChild;
if(cF){var cx=this.length-1;

for(var i=0,l=cx;i<l;i++){cw.call(this,this[i],cz.cloneNode(true));
}cw.call(this,this[cx],cz);
}if(cD){var cy;
var cE=qx.io.ScriptLoader;
var cC=qx.lang.Function;

for(var i=0,l=cD.length;i<l;i++){cy=cD[i];
if(cy.src){(new cE()).load(cy.src);
}else{cC.globalEval(cy.text||cy.textContent||cy.innerHTML||B);
}if(cy.parentNode){cy.parentNode.removeChild(cy);
}}}return this;
},__xz:function(cG,cH){var cJ=qx.bom.Selector;
var cI=qx.lang.Array;
var cL=[];

for(var i=0,l=cG.length;i<l;i++){cL.push.apply(cL,cJ.query(cG[i]));
}cL=cI.cast(cI.unique(cL),qx.bom.Collection);
for(var i=0,cK=this.length;i<cK;i++){cL[cH](this[i]);
}return this;
},append:function(cM){return this.__xy(arguments,this.__xA);
},prepend:function(cN){return this.__xy(arguments,this.__xB);
},__xA:function(cO,cP){cO.appendChild(cP);
},__xB:function(cQ,cR){cQ.insertBefore(cR,cQ.firstChild);
},appendTo:function(cS){return this.__xz(arguments,e);
},prependTo:function(cT){return this.__xz(arguments,J);
},before:function(cU){return this.__xy(arguments,this.__xC);
},after:function(cV){return this.__xy(arguments,this.__xD);
},__xC:function(cW,cX){cW.parentNode.insertBefore(cX,cW);
},__xD:function(cY,da){cY.parentNode.insertBefore(da,cY.nextSibling);
},insertBefore:function(db){return this.__xz(arguments,w);
},insertAfter:function(dc){return this.__xz(arguments,q);
},wrapAll:function(content){var de=this[0];

if(de){var dd=qx.bom.Collection.create(content,de.ownerDocument).clone();
if(de.parentNode){de.parentNode.insertBefore(dd[0],de);
}dd.map(this.__xE).append(this);
}return this;
},__xE:function(df){while(df.firstChild){df=df.firstChild;
}return df;
},wrapInner:function(content){var dg=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){dg[0]=this[i];
dg.contents().wrapAll(content);
}return this;
},wrap:function(content){var dh=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){dh[0]=this[i];
dh.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(di){return this.__xz(arguments,n);
},remove:function(dj){var dl=this;

if(dj){dl=this.filter(dj);

if(dl.length==0){return this;
}}for(var i=0,dm=dl.length,dk;i<dm;i++){dk=dl[i];

if(dk.parentNode){dk.parentNode.removeChild(dk);
}}return dl;
},destroy:function(dn){if(this.length==0){return this;
}var dq=qx.bom.Selector;
var dt=this;

if(dn){dt=this.filter(dn);

if(dt.length==0){return this;
}}var ds=qx.event.Registration.getManager(this[0]);

for(var i=0,l=dt.length,dr,du;i<l;i++){dr=dt[i];
ds.removeAllListeners(dr);
du=dq.query(C,dr);

for(var j=0,dp=du.length;j<dp;j++){ds.removeAllListeners(du[j]);
}if(dr.parentNode){dr.parentNode.removeChild(dr);
}}if(dn){dt.end();
qx.lang.Array.exclude(this,dt);
}else{this.length=0;
}return this;
},empty:function(){var dv=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){dv.query(E,this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(dw){var Element=qx.bom.Element;
return dw?this.map(function(dx){return Element.clone(dx,true);
}):this.map(Element.clone,Element);
}},defer:function(dy){if(window.$==null){window.$=dy.create;
}}});
})();
})();
(function(){var m="string",k="script",h="<table>",g="engine.name",f="<fieldset>",e="<select multiple='multiple'>",d="</div>",c="</select>",b="</tr></tbody></table>",a="<col",J="div",I="<table><tbody><tr>",H=">",G="<table><tbody></tbody><colgroup>",F="<th",E="</tbody></table>",D="<td",C="</colgroup></table>",B="<opt",A="text/javascript",t="",u="</fieldset>",r="<table><tbody>",s="div<div>",p="<table",q="mshtml",n="qx.bom.Html",o="<leg",v="tbody",w="<tr",y="</table>",x="undefined",z="></";
qx.Class.define(n,{statics:{__xl:function(K,L,M){return M.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?K:L+z+M+H;
},__xm:{opt:[1,e,c],leg:[1,f,u],table:[1,h,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Environment.select(g,{"mshtml":[1,s,d],"default":null})},__xn:function(N,O){var U=O.createElement(J);
N=N.replace(/(<(\w+)[^>]*?)\/>/g,this.__xl);
var Q=N.replace(/^\s+/,t).substring(0,5).toLowerCase();
var T,P=this.__xm;

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
if(typeof ba===m){ba=this.__xn(ba,X);
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
},__js:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(r);
var u=parseInt(s.get(r,d)||i,10);
var x=parseInt(s.get(r,e)||i,10);

if(this.__js[t]){var w=r.clientWidth;

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

if(this.__js[C]){return y.clientHeight-B-A;
}else{if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-B-A;
}else{var D=y.scrollHeight-B;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)==6){D-=A;
}return D;
}}},getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};
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
(function(){var p="success",o="fail",n="mshtml",m="complete",l="error",k="load",j="opera",i="loaded",h="readystatechange",g="head",c="webkit",f="script",d="qx.io.ScriptLoader",b="text/javascript",a="abort";
qx.Bootstrap.define(d,{construct:function(){this.__zP=qx.Bootstrap.bind(this.__zS,this);
this.__zQ=document.createElement(f);
},statics:{TIMEOUT:15},members:{__zR:null,__sv:null,__bD:null,__bE:null,__zP:null,__zQ:null,load:function(q,r,s){if(this.__zR){throw new Error("Another request is still running!");
}this.__zR=true;
this.__sv=false;
var t=document.getElementsByTagName(g)[0];
var u=this.__zQ;
this.__bD=r||null;
this.__bE=s||window;
u.type=b;
u.onerror=u.onload=u.onreadystatechange=this.__zP;
var self=this;
if(qx.bom.client.Engine.getName()===j&&this._getTimeout()>0){setTimeout(function(){self.dispose(o);
},this._getTimeout()*1000);
}u.src=q;
setTimeout(function(){t.appendChild(u);
},0);
},abort:function(){if(this.__zR){this.dispose(a);
}},dispose:function(status){if(this.__sv){return;
}this.__sv=true;
var x=this.__zQ;
x.onerror=x.onload=x.onreadystatechange=null;
var w=x.parentNode;

if(w){w.removeChild(x);
}delete this.__zR;
if(this.__bD){var v=qx.bom.client.Engine.getName();

if(v==n||v==c){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__bD.call(self.__bE,status);
delete self.__bD;
}),0);
}else{this.__bD.call(this.__bE,status);
delete this.__bD;
}}},_getTimeout:function(){return qx.io.ScriptLoader.TIMEOUT;
},__zS:qx.event.GlobalError.observeMethod(function(e){var y=qx.bom.client.Engine.getName();
if(y==n){var z=this.__zQ.readyState;

if(z==i){this.dispose(p);
}else if(z==m){this.dispose(p);
}else{return;
}}else if(y==j){if(qx.Bootstrap.isString(e)||e.type===l){return this.dispose(o);
}else if(e.type===k){return this.dispose(p);
}else{return;
}}else{if(qx.Bootstrap.isString(e)||e.type===l){this.dispose(o);
}else if(e.type===k){this.dispose(p);
}else if(e.type===h&&(e.target.readyState===m||e.target.readyState===i)){this.dispose(p);
}else{return;
}}})}});
})();
(function(){var j="static",i="user",h="Surfin' Safari",g="Heise",f="http://blogs.msdn.com/ie/rss.xml",e="changeStaticFeedFolder",d="http://feeds.feedburner.com/GoogleChromeReleases?format=xml",c="Google Chrome Releases",b="http://feeds2.feedburner.com/qooxdoo/news/content",a="changeFeedFolder",w="http://www.heise.de/newsticker/heise-atom.xml",v="http://my.opera.com/desktopteam/xml/rss/blog/",u="Feeds",t="feedreader.model.Model",s="IEBlog",r="User Feeds",q="http://webkit.org/blog/feed/",p="http://daringfireball.net/index.xml",o="Static Feeds",n="qooxdoo News",l="Opera Desktop Blog",m="Daring Fireball",k="changeUserFeedFolder";
qx.Class.define(t,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._initializeModel();
},properties:{feedFolder:{init:null,event:a,nullable:true},staticFeedFolder:{init:null,event:e,nullable:true},userFeedFolder:{init:null,event:k,nullable:true}},members:{_initializeModel:function(){var x=new feedreader.model.FeedFolder(u);
var y=new feedreader.model.FeedFolder(qx.locale.Manager.tr(o));
x.getFeeds().push(y);
y.getFeeds().push(new feedreader.model.Feed(n,b,j));
y.getFeeds().push(new feedreader.model.Feed(c,d,j));
y.getFeeds().push(new feedreader.model.Feed(m,p,j));
y.getFeeds().push(new feedreader.model.Feed(h,q,j));
var z=new feedreader.model.FeedFolder(qx.locale.Manager.tr(r));
x.getFeeds().push(z);
z.getFeeds().push(new feedreader.model.Feed(g,w,i));
z.getFeeds().push(new feedreader.model.Feed(s,f,i));
z.getFeeds().push(new feedreader.model.Feed(l,v,i));
this.setFeedFolder(x);
this.setStaticFeedFolder(y);
this.setUserFeedFolder(z);
}}});
})();
(function(){var j="[",h="]",g="idBubble-",f=".",d="changeBubble",c="qx.data.marshal.MEventBubbling",b="",a="qx.event.type.Data";
qx.Mixin.define(c,{events:{"changeBubble":a},members:{_applyEventPropagation:function(k,l,name){this.fireDataEvent(d,{value:k,name:name,old:l});
this._registerEventChaining(k,l,name);
},_registerEventChaining:function(m,n,name){if((m instanceof qx.core.Object)&&qx.Class.hasMixin(m.constructor,qx.data.marshal.MEventBubbling)){var o=qx.lang.Function.bind(this.__lI,this,name);
var q=m.addListener(d,o,this);
var p=m.getUserData(g+this.$$hash);

if(p==null){p=[];
m.setUserData(g+this.$$hash,p);
}p.push(q);
}if(n!=null&&n.getUserData&&n.getUserData(g+this.$$hash)!=null){var p=n.getUserData(g+this.$$hash);

for(var i=0;i<p.length;i++){n.removeListenerById(p[i]);
}n.setUserData(g+this.$$hash,null);
}},__lI:function(name,e){var y=e.getData();
var u=y.value;
var s=y.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(y.name.indexOf){var x=y.name.indexOf(f)!=-1?y.name.indexOf(f):y.name.length;
var v=y.name.indexOf(j)!=-1?y.name.indexOf(j):y.name.length;
if(v==0){var t=name+y.name;
}else if(x<v){var r=y.name.substring(0,x);
var w=y.name.substring(x+1,y.name.length);

if(w[0]!=j){w=f+w;
}var t=name+j+r+h+w;
}else if(v<x){var r=y.name.substring(0,v);
var w=y.name.substring(v,y.name.length);
var t=name+j+r+h+w;
}else{var t=name+j+y.name+h;
}}else{var t=name+j+y.name+h;
}}else{if(parseInt(name)==name&&name!==b){name=j+name+h;
}var t=name+f+y.name;
}this.fireDataEvent(d,{value:u,name:t,old:s});
}}});
})();
(function(){var o="change",n="changeBubble",m="add",l="remove",k="0-",j="order",h="-",g="0",f="qx.event.type.Data",e="Boolean",b="",d="qx.data.Array",c="number",a="changeLength";
qx.Class.define(d,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(p){qx.core.Object.call(this);
if(p==undefined){this.__lJ=[];
}else if(arguments.length>1){this.__lJ=[];

for(var i=0;i<arguments.length;i++){this.__lJ.push(arguments[i]);
}}else if(typeof p==c){this.__lJ=new Array(p);
}else if(p instanceof Array){this.__lJ=qx.lang.Array.clone(p);
}else{this.__lJ=[];
this.dispose();
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__lJ.length;i++){this._applyEventPropagation(this.__lJ[i],null,i);
}this.__lK();
},properties:{autoDisposeItems:{check:e,init:false}},events:{"change":f,"changeLength":f},members:{__lJ:null,concat:function(q){if(q){var r=this.__lJ.concat(q);
}else{var r=this.__lJ.concat();
}return new qx.data.Array(r);
},join:function(s){return this.__lJ.join(s);
},pop:function(){var t=this.__lJ.pop();
this.__lK();
this._registerEventChaining(null,t,this.length-1);
this.fireDataEvent(n,{value:[],name:this.length,old:[t]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:l,items:[t]},null);
return t;
},push:function(u){for(var i=0;i<arguments.length;i++){this.__lJ.push(arguments[i]);
this.__lK();
this._registerEventChaining(arguments[i],null,this.length-1);
this.fireDataEvent(n,{value:[arguments[i]],name:this.length-1,old:[]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){if(this.length==0){return;
}var v=this.__lJ.concat();
this.__lJ.reverse();
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__lJ,name:k+(this.__lJ.length-1),old:v});
},shift:function(){if(this.length==0){return;
}var w=this.__lJ.shift();
this.__lK();
this._registerEventChaining(null,w,this.length-1);
this.fireDataEvent(n,{value:[],name:g,old:[w]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:l,items:[w]},null);
return w;
},slice:function(x,y){return new qx.data.Array(this.__lJ.slice(x,y));
},splice:function(z,A,B){var J=this.__lJ.length;
var F=this.__lJ.splice.apply(this.__lJ,arguments);
if(this.__lJ.length!=J){this.__lK();
}var H=A>0;
var D=arguments.length>2;
var E=null;

if(H||D){if(this.__lJ.length>J){var I=m;
E=qx.lang.Array.fromArguments(arguments,2);
}else if(this.__lJ.length<J){var I=l;
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
}var L=this.__lJ.concat();
this.__lJ.sort.apply(this.__lJ,arguments);
if(qx.lang.Array.equals(this.__lJ,L)===true){return;
}this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__lJ,name:k+(this.length-1),old:L});
},unshift:function(M){for(var i=arguments.length-1;i>=0;i--){this.__lJ.unshift(arguments[i]);
this.__lK();
this._registerEventChaining(arguments[i],null,0);
this.fireDataEvent(n,{value:[this.__lJ[0]],name:g,old:[this.__lJ[1]]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__lJ;
},getItem:function(N){return this.__lJ[N];
},setItem:function(O,P){var Q=this.__lJ[O];
if(Q===P){return;
}this.__lJ[O]=P;
this._registerEventChaining(P,Q,O);
if(this.length!=this.__lJ.length){this.__lK();
}this.fireDataEvent(n,{value:[P],name:O,old:[Q]});
this.fireDataEvent(o,{start:O,end:O,type:m,items:[P]},null);
},getLength:function(){return this.length;
},indexOf:function(R){return this.__lJ.indexOf(R);
},toString:function(){if(this.__lJ!=null){return this.__lJ.toString();
}return b;
},contains:function(S){return this.__lJ.indexOf(S)!==-1;
},copy:function(){return this.concat();
},insertAt:function(T,U){this.splice(T,0,U).dispose();
},insertBefore:function(V,W){var X=this.indexOf(V);

if(X==-1){this.push(W);
}else{this.splice(X,0,W).dispose();
}},insertAfter:function(Y,ba){var bb=this.indexOf(Y);

if(bb==-1||bb==(this.length-1)){this.push(ba);
}else{this.splice(bb+1,0,ba).dispose();
}},removeAt:function(bc){var be=this.splice(bc,1);
var bd=be.getItem(0);
be.dispose();
return bd;
},removeAll:function(){for(var i=0;i<this.__lJ.length;i++){this._registerEventChaining(null,this.__lJ[i],i);
}if(this.getLength()==0){return;
}var bg=this.getLength();
var bf=this.__lJ.concat();
this.__lJ.length=0;
this.__lK();
this.fireDataEvent(n,{value:[],name:k+(bg-1),old:bf});
this.fireDataEvent(o,{start:0,end:bg-1,type:l,items:bf},null);
return bf;
},append:function(bh){if(bh instanceof qx.data.Array){bh=bh.toArray();
}Array.prototype.push.apply(this.__lJ,bh);
for(var i=0;i<bh.length;i++){this._registerEventChaining(bh[i],null,this.__lJ.length+i);
}var bi=this.length;
this.__lK();
this.fireDataEvent(n,{value:bh,name:bi==(this.length-1)?bi:bi+h+(this.length-1),old:[]});
this.fireDataEvent(o,{start:bi,end:this.length-1,type:m,items:bh},null);
},remove:function(bj){var bk=this.indexOf(bj);

if(bk!=-1){this.splice(bk,1).dispose();
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
},forEach:function(bp,bq){for(var i=0;i<this.__lJ.length;i++){bp.call(bq,this.__lJ[i],i,this);
}},__lK:function(){var br=this.length;
this.length=this.__lJ.length;
this.fireDataEvent(a,this.length,br);
}},destruct:function(){for(var i=0;i<this.__lJ.length;i++){var bs=this.__lJ[i];
this._applyEventPropagation(null,bs,i);
if(this.isAutoDisposeItems()&&bs&&bs instanceof qx.core.Object){bs.dispose();
}}this.__lJ=null;
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
this.__ht=u;
this.length=u.length;
},members:{$$isString:true,length:0,__ht:null,toString:function(){return this.__ht;
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
this.__hu=c;
this.__hv=d;
},members:{__hu:null,__hv:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hu,this.__hv);
}}});
})();
(function(){var l="_",k="",j="locale",h="_applyLocale",g="changeLocale",f="C",e="locale.variant",d="qx.dynlocale",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hw=qx.$$translations||{};
this.__hx=qx.$$locales||{};
var m=qx.core.Environment.get(j);
var n=qx.core.Environment.get(e);

if(n!==k){m+=l+n;
}this.__hy=m;
this.setLocale(m||this.__hz);
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
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__hz:f,__hA:null,__hB:null,__hw:null,__hx:null,__hy:null,getLanguage:function(){return this.__hB;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(B){var D=[];

for(var C in this.__hx){if(C!=this.__hz){if(this.__hx[C]===null&&!B){continue;
}D.push(C);
}}return D;
},__hC:function(E){var G;

if(E==null){return null;
}var F=E.indexOf(l);

if(F==-1){G=E;
}else{G=E.substring(0,F);
}return G;
},_applyLocale:function(H,I){this.__hA=H;
this.__hB=this.__hC(H);
},addTranslation:function(J,K){var L=this.__hw;

if(L[J]){for(var M in K){L[J][M]=K[M];
}}else{L[J]=K;
}},addLocale:function(N,O){var P=this.__hx;

if(P[N]){for(var Q in O){P[N][Q]=O[Q];
}}else{P[N]=O;
}},translate:function(R,S,T){var U=this.__hw;
return this.__hD(U,R,S,T);
},localize:function(V,W,X){var Y=this.__hx;
return this.__hD(Y,V,W,X);
},__hD:function(ba,bb,bc,bd){var be;

if(!ba){return bb;
}
if(bd){var bg=this.__hC(bd);
}else{bd=this.__hA;
bg=this.__hB;
}if(!be&&ba[bd]){be=ba[bd][bb];
}if(!be&&ba[bg]){be=ba[bg][bb];
}if(!be&&ba[this.__hz]){be=ba[this.__hz][bb];
}
if(!be){be=bb;
}
if(bc.length>0){var bf=[];

for(var i=0;i<bc.length;i++){var bh=bc[i];

if(bh&&bh.translate){bf[i]=bh.translate();
}else{bf[i]=bh;
}}be=qx.lang.String.format(be,bf);
}
if(qx.core.Environment.get(d)){be=new qx.locale.LocalizedString(be,bb,bc);
}return be;
}},destruct:function(){this.__hw=this.__hx=null;
}});
})();
(function(){var f="-",e="",d="qx.bom.client.Locale",c="locale",b="android",a="locale.variant";
qx.Bootstrap.define(d,{statics:{getLocale:function(){var g=qx.bom.client.Locale.__hE();
var h=g.indexOf(f);

if(h!=-1){g=g.substr(0,h);
}return g;
},getVariant:function(){var i=qx.bom.client.Locale.__hE();
var k=e;
var j=i.indexOf(f);

if(j!=-1){k=i.substr(j+1);
}return k;
},__hE:function(){var l=(navigator.userLanguage||navigator.language||e);
if(qx.bom.client.OperatingSystem.getName()==b){var m=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(m){l=m[0];
}}return l.toLowerCase();
}},defer:function(n){qx.core.Environment.add(c,n.getLocale);
qx.core.Environment.add(a,n.getVariant);
}});
})();
(function(){var n="String",m="",l="new",k="stateModified",j="changeArticles",i="loading",h="qx.data.Array",g="loaded",f="dataModified",e="changeUrl",b="feedreader.model.Feed",d="cached",c="changeTitle",a="error";
qx.Class.define(b,{extend:qx.core.Object,construct:function(o,p,q){qx.core.Object.call(this);
this.set({url:p,title:o,category:q||m});
this.setArticles(new qx.data.Array());
},properties:{articles:{check:h,event:j},selectedArticle:{nullable:true},url:{check:n,event:e},title:{check:n,event:c},category:{check:n,init:m,event:f},state:{check:[l,i,g,a,d],init:l,event:k}}});
})();
(function(){var m="select * from feed where url='",l="'",k="html.storage.local",j="io.ssl",h="feedreader.io.FeedLoader",g="qx-feeds-",f="loaded",d="loading",c="changeState",b="failed",a="singleton";
qx.Class.define(h,{extend:qx.core.Object,type:a,members:{loadAll:function(n){var p=n.getFeeds().getItem(0).getFeeds();

for(var i=0;i<p.length;i++){this.load(p.getItem(i));
}var o=n.getFeeds().getItem(1).getFeeds();

for(i=0;i<o.length;i++){this.load(o.getItem(i));
}},load:function(q){q.setState(d);
var r=m+q.getUrl()+l;
var s=new qx.data.store.Yql(r,{manipulateData:function(t){try{t=t.query.results.item||t.query.results.entry;
for(var i=0;i<t.length;i++){if(!qx.lang.Type.isString(t[i].title)){t[i].title=t[i].title.content;
}}if(qx.core.Environment.get(k)){var u=g+q.getUrl();
qx.bom.storage.Local.getInstance().setItem(u,t);
}return t;
}catch(e){return b;
}},configureRequest:function(v){v.setTimeout(10000);
}},qx.core.Environment.get(j));
s.addListener(f,this.__BT(q),this);
s.addListener(c,qx.lang.Function.bind(this.__BS,this,q),this);
},__BS:function(w,e){if(e.getData()=="aborted"||e.getData()=="timeout"||e.getData()=="failed"){var z="error";
if(qx.core.Environment.get("html.storage.local")){var A="qx-feeds-"+w.getUrl();
var x=qx.bom.storage.Local.getInstance().getItem(A);

if(x){var y=qx.data.marshal.Json.createModel(x);
w.setArticles(y);
z="cached";
}}w.setState(z);
}},__BT:function(B){return function(e){var C=e.getData();
if(C=="failed"){B.setState("error");
return;
}B.setArticles(C);
B.setState("loaded");
};
}}});
})();
(function(){var j="configured",i="aborted",h="qx.event.type.Data",g="receiving",f="sending",e="completed",d="failed",c="timeout",b="changeModel",a="application/json",x="json",w="loaded",v="error",u="fail",t="queued",s="changeState",r="success",q="String",p="changePhase",o="_marshaler",m="qx.data.store.Json",n="__qC",k="changeUrl",l="_applyUrl";
qx.Class.define(m,{extend:qx.core.Object,construct:function(y,z){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(z);
this._delegate=z;
this.__sE=false;

if(y!=null){this.setUrl(y);
}},events:{"loaded":h,"error":h},properties:{model:{nullable:true,event:b},state:{check:[j,t,f,g,e,i,c,d],init:j,event:s},url:{check:q,apply:l,event:k,nullable:true}},members:{_marshaler:null,_delegate:null,__qC:null,__sE:null,_applyUrl:function(A,B){if(A!=null){A=qx.util.AliasManager.getInstance().resolve(A);
A=qx.util.ResourceManager.getInstance().toUri(A);
this._createRequest(A);
}},_getRequest:function(){return this.__qC;
},_setRequest:function(C){this.__qC=C;
},_createRequest:function(D){if(this.__qC){this.__qC.dispose();
this.__qC=null;
}var E=new qx.io.request.Xhr(D);
this._setRequest(E);
E.setAccept(a);
E.setParser(x);
E.addListener(r,this._onSuccess,this);
var F=this._delegate;

if(F&&qx.lang.Type.isFunction(F.configureRequest)){this._delegate.configureRequest(E);
}E.addListener(p,this._onChangePhase,this);
E.addListener(u,this._onFail,this);
E.send();
},_onChangePhase:function(G){var H=G.getData(),J={},I;
J={"opened":j,"sent":f,"loading":g,"success":e,"abort":i,"timeout":c,"statusError":d};
I=J[H];

if(I){this.setState(I);
}},_onFail:function(K){var L=K.getTarget();
this.fireDataEvent(v,L);
},_onSuccess:function(M){if(this.isDisposed()){return;
}var O=M.getTarget(),P=O.getResponse();
var N=this._delegate;

if(N&&qx.lang.Type.isFunction(N.manipulateData)){P=this._delegate.manipulateData(P);
}this._marshaler.toClass(P,true);
var Q=this.getModel();
this.setModel(this._marshaler.toModel(P));
if(Q&&Q.dispose){Q.dispose();
}this.fireDataEvent(w,this.getModel());
if(this.__qC){this.__qC.dispose();
this.__qC=null;
}},reload:function(){var R=this.getUrl();

if(R!=null){this._createRequest(R);
}}},destruct:function(){if(this.__qC!=null){this._disposeObjects(n);
}this._disposeSingletonObjects(o);
this._delegate=null;
}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var j="qx.data.model.",h="",g="Array",f="_validate",e='"',d="change",c="qx.data.marshal.Json",b="set",a="_applyEventPropagation";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(k){qx.core.Object.call(this);
this.__zI=k;
},statics:{$$instance:null,createModel:function(l,m){if(this.$$instance===null){this.$$instance=new qx.data.marshal.Json();
}this.$$instance.toClass(l,m);
return this.$$instance.toModel(l);
}},members:{__zI:null,__zJ:function(n){return qx.Bootstrap.getKeys(n).sort().join(e);
},toClass:function(o,p){if(!qx.lang.Type.isObject(o)||!!o.$$isString||o instanceof qx.core.Object){if(o instanceof Array||qx.Bootstrap.getClass(o)==g){for(var i=0;i<o.length;i++){this.toClass(o[i],p);
}}return ;
}var r=this.__zJ(o);
for(var s in o){this.toClass(o[s],p);
}if(qx.Class.isDefined(j+r)){return;
}if(this.__zI&&this.__zI.getModelClass&&this.__zI.getModelClass(r)!=null){return;
}var y={};
var x={__zK:this.__zK};

for(var s in o){s=s.replace(/-|\.|\s+/g,h);
y[s]={};
y[s].nullable=true;
y[s].event=d+qx.lang.String.firstUp(s);
if(p){y[s].apply=a;
}if(this.__zI&&this.__zI.getValidationRule){var u=this.__zI.getValidationRule(r,s);

if(u){y[s].validate=f+s;
x[f+s]=u;
}}}if(this.__zI&&this.__zI.getModelSuperClass){var w=this.__zI.getModelSuperClass(r)||qx.core.Object;
}else{var w=qx.core.Object;
}var t=[];

if(this.__zI&&this.__zI.getModelMixins){var v=this.__zI.getModelMixins(r);
if(!qx.lang.Type.isArray(v)){if(v!=null){t=[v];
}}else{t=v;
}}if(p){t.push(qx.data.marshal.MEventBubbling);
}var q={extend:w,include:t,properties:y,members:x,destruct:this.__zL};
qx.Class.define(j+r,q);
},__zL:function(){var z=qx.util.PropertyUtil.getAllProperties(this.constructor);

for(var A in z){this.__zK(this.get(z[A].name));
}},__zK:function(B){if(!(B instanceof qx.core.Object)){return ;
}if(B.isDisposed()){return;
}B.dispose();
},__zM:function(C){var D;
if(this.__zI&&this.__zI.getModelClass){D=this.__zI.getModelClass(C);
}
if(D!=null){return (new D());
}else{var E=qx.Class.getByName(j+C);
return (new E());
}},toModel:function(F){var J=qx.lang.Type.isObject(F);
var G=F instanceof Array||qx.Bootstrap.getClass(F)==g;

if((!J&&!G)||!!F.$$isString||F instanceof qx.core.Object){return F;
}else if(G){var L=new qx.data.Array();
L.setAutoDisposeItems(true);

for(var i=0;i<F.length;i++){L.push(this.toModel(F[i]));
}return L;
}else if(J){var H=this.__zJ(F);
var M=this.__zM(H);
for(var K in F){var I=K.replace(/-|\.|\s+/g,h);
if((false)&&false){if(K!=I){this.warn("The model contained an illegal name: '"+K+"'. Replaced it with '"+I+"'.");
}}M[b+qx.lang.String.firstUp(I)](this.toModel(F[K]));
}return M;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__zI=null;
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
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__do={};
this.add(a,h);
},members:{__do:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__do[k]){return this.__do[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__do[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__do[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__do[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__do){v[w]=this.__do[w];
}return v;
}},destruct:function(){this.__do=null;
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
},statics:{__bc:qx.$$resources||{},__hs:{}},members:{has:function(q){return !!this.self(arguments).__bc[q];
},getData:function(r){return this.self(arguments).__bc[r]||null;
},getImageWidth:function(s){var t=this.self(arguments).__bc[s];
return t?t[0]:null;
},getImageHeight:function(u){var v=this.self(arguments).__bc[u];
return v?v[1]:null;
},getImageFormat:function(w){var x=this.self(arguments).__bc[w];
return x?x[2]:null;
},getCombinedFormat:function(y){var B=p;
var A=this.self(arguments).__bc[y];
var z=A&&A.length>4&&typeof (A[4])==k&&this.constructor.__bc[A[4]];

if(z){var D=A[4];
var C=this.constructor.__bc[D];
B=C[2];
}return B;
},toUri:function(E){if(E==null){return E;
}var F=this.self(arguments).__bc[E];

if(!F){return E;
}
if(typeof F===k){var H=F;
}else{var H=F[3];
if(!H){return E;
}}var G=p;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){G=this.self(arguments).__hs[H];
}return G+qx.$$libraries[H].resourceUri+o+E;
},toDataUri:function(I){var K=this.constructor.__bc[I];
var L=this.constructor.__bc[K[4]];
var M;

if(L){var J=L[4][I];
M=c+J[g]+f+J[e]+d+J[h];
}else{M=this.toUri(I);
}return M;
}},defer:function(N){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var R in qx.$$libraries){var P;

if(qx.$$libraries[R].resourceUri){P=qx.$$libraries[R].resourceUri;
}else{N.__hs[R]=p;
continue;
}if(P.match(/^\/\//)!=null){N.__hs[R]=window.location.protocol;
}else if(P.match(/^\//)!=null){N.__hs[R]=window.location.protocol+j+window.location.host;
}else if(P.match(/^\.\//)!=null){var O=document.URL;
N.__hs[R]=O.substring(0,O.lastIndexOf(o)+1);
}else if(P.match(/^http/)!=null){N.__hs[R]=p;
}else{var S=window.location.href.indexOf(i);
var Q;

if(S==-1){Q=window.location.href;
}else{Q=window.location.href.substring(0,S);
}N.__hs[R]=Q.substring(0,Q.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var j="qx.event.type.Event",i="qx.debug.io",h="fail",g="GET",f="qx.event.type.Data",e="load",d="abort",c="loadEnd",b="Map",a="qx.io.request.AbstractRequest",E="changePhase",D="Please use setRequestHeader() instead.",C="sent",B="qx.io.request.authentication.IAuthentication",A="error",z="loading",y="success",x="String",w="",v="opened",q="Please use getRequestHeader() instead.",r="POST",o="statusError",p="readyStateChange",m="abstract",n="unsent",k="changeResponse",l="Number",s="Content-Type",t="timeout",u="undefined";
qx.Class.define(a,{type:m,extend:qx.core.Object,construct:function(F){qx.core.Object.call(this);

if(F!==undefined){this.setUrl(F);
}this.__ql={};
var G=this._transport=this._createTransport();
this._setPhase(n);
this.__sF=qx.lang.Function.bind(this._onReadyStateChange,this);
this.__sG=qx.lang.Function.bind(this._onLoad,this);
this.__sH=qx.lang.Function.bind(this._onLoadEnd,this);
this.__sI=qx.lang.Function.bind(this._onAbort,this);
this.__sq=qx.lang.Function.bind(this._onTimeout,this);
this.__sJ=qx.lang.Function.bind(this._onError,this);
G.onreadystatechange=this.__sF;
G.onload=this.__sG;
G.onloadend=this.__sH;
G.onabort=this.__sI;
G.ontimeout=this.__sq;
G.onerror=this.__sJ;
},events:{"readyStateChange":j,"success":j,"load":j,"loadEnd":j,"abort":j,"timeout":j,"error":j,"statusError":j,"fail":j,"changeResponse":f,"changePhase":f},properties:{url:{check:x},requestHeaders:{check:b,nullable:true},timeout:{check:l,nullable:true,init:0},requestData:{check:function(H){return qx.lang.Type.isString(H)||qx.Class.isSubClassOf(H.constructor,qx.core.Object)||qx.lang.Type.isObject(H);
},nullable:true},authentication:{check:B,nullable:true}},members:{__sF:null,__sG:null,__sH:null,__sI:null,__sq:null,__sJ:null,__sK:null,__st:null,__sL:null,__ql:null,__sM:null,_transport:null,_createTransport:function(){throw new Error("Abstract method call");
},_getConfiguredUrl:function(){},_getConfiguredRequestHeaders:function(){},_getParsedResponse:function(){throw new Error("Abstract method call");
},_getMethod:function(){return g;
},_isAsync:function(){return true;
},send:function(){var M=this._transport,I,L,J,K;
I=this._getConfiguredUrl();
if(/\#/.test(I)){I=I.replace(/\#.*/,w);
}M.timeout=this.getTimeout();
L=this._getMethod();
J=this._isAsync();
if(qx.core.Environment.get(i)){this.debug("Open low-level request with method: "+L+", url: "+I+", async: "+J);
}M.open(L,I,J);
this._setPhase(v);
K=this._serializeData(this.getRequestData());
this._setRequestHeaders();
if(qx.core.Environment.get(i)){this.debug("Send low-level request");
}L==g?M.send():M.send(K);
this._setPhase(C);
},abort:function(){if(qx.core.Environment.get(i)){this.debug("Abort request");
}this.__st=true;
this.__sL=d;
this._transport.abort();
},_setRequestHeaders:function(){var P=this._transport,N=this._getAllRequestHeaders();

for(var O in N){P.setRequestHeader(O,N[O]);
}},_getAllRequestHeaders:function(){var Q=qx.lang.Object.merge({},this._getConfiguredRequestHeaders(),this.__sN(),this.__sM,this.__ql);
return Q;
},__sN:function(){var S=this.getAuthentication(),R={};

if(S){S.getAuthHeaders().forEach(function(T){R[T.key]=T.value;
});
return R;
}},setRequestHeader:function(U,V){this.__ql[U]=V;
},getRequestHeader:function(W){return this.__ql[W];
},removeRequestHeader:function(X){if(this.__ql[X]){delete this.__ql[X];
}},setRequestHeaders:function(Y){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
qx.core.Assert.assertObject(Y);
this.__sM=Y;
},getRequestHeaders:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
return this.__sM;
},getTransport:function(){return this._transport;
},getReadyState:function(){return this._transport.readyState;
},getPhase:function(){return this.__sL;
},getStatus:function(){return this._transport.status;
},getStatusText:function(){return this._transport.statusText;
},getResponseText:function(){return this._transport.responseText;
},getAllResponseHeaders:function(){return this._transport.getAllResponseHeaders();
},getResponseHeader:function(ba){return this._transport.getResponseHeader(ba);
},getResponseContentType:function(){return this.getResponseHeader(s);
},isDone:function(){return this.getReadyState()===4;
},getResponse:function(){return this.__sK;
},_setResponse:function(bb){var bc=bb;

if(this.__sK!==bb){this.__sK=bb;
this.fireEvent(k,qx.event.type.Data,[this.__sK,bc]);
}},_onReadyStateChange:function(){var bd=this.getReadyState();

if(qx.core.Environment.get(i)){this.debug("Fire readyState: "+bd);
}this.fireEvent(p);
if(this.__st){return;
}
if(bd===3){this._setPhase(z);
}
if(this.isDone()){this.__sO();
}},__sO:function(){var be;

if(qx.core.Environment.get(i)){this.debug("Request completed with HTTP status: "+this.getStatus());
}this._setPhase(e);
if(qx.util.Request.isSuccessful(this.getStatus())){if(qx.core.Environment.get(i)){this.debug("Response is of type: '"+this.getResponseContentType()+"'");
}be=this._getParsedResponse();
this._setResponse(be);
this._fireStatefulEvent(y);
}else{if(this.getStatus()!==0){this._fireStatefulEvent(o);
this.fireEvent(h);
}}},_onLoad:function(){this.fireEvent(e);
},_onLoadEnd:function(){this.fireEvent(c);
},_onAbort:function(){this._fireStatefulEvent(d);
},_onTimeout:function(){this._fireStatefulEvent(t);
this.fireEvent(h);
},_onError:function(){this.fireEvent(A);
this.fireEvent(h);
},_fireStatefulEvent:function(bf){this._setPhase(bf);
this.fireEvent(bf);
},_setPhase:function(bg){var bh=this.__sL;
this.__sL=bg;
this.fireDataEvent(E,bg,bh);
},_serializeData:function(bi){var bj=typeof this.getMethod!==u&&this.getMethod()==r;

if(!bi){return;
}
if(qx.lang.Type.isString(bi)){return bi;
}
if(qx.Class.isSubClassOf(bi.constructor,qx.core.Object)){return qx.util.Serializer.toUriParameter(bi);
}
if(qx.lang.Type.isObject(bi)){return qx.lang.Object.toUriParameter(bi,bj);
}}},environment:{"qx.debug.io":false},destruct:function(){var bl=this._transport,bk=function(){};

if(this._transport){bl.onreadystatechange=bl.onload=bl.onloadend=bl.onabort=bl.ontimeout=bl.onerror=bk;
bl.dispose();
}}});
})();
(function(){var b="//",a="qx.util.Request";
qx.Class.define(a,{statics:{isCrossDomain:function(c){var e=qx.util.Uri.parseUri(c),location=window.location,d=location.protocol;
if(!(c.indexOf(b)!==-1)){return false;
}
if(d.substr(0,d.length-1)==e.protocol&&location.host===e.host&&location.port===e.port){return false;
}return true;
},isSuccessful:function(status){return (status>=200&&status<300||status===304);
},methodAllowsRequestBody:function(f){return !((/^(GET)|(HEAD)$/).test(f));
}}});
})();
(function(){var k="file",j="strict",h="anchor",g="div",f="query",e="source",d="password",c="host",b="protocol",a="user",A="directory",z="loose",y="relative",x="queryKey",w="qx.util.Uri",v="",u="path",t="authority",s='">0</a>',r="&",p="port",q='<a href="',l="userInfo",n="?";
qx.Class.define(w,{statics:{parseUri:function(B,C){var D={key:[e,b,t,l,a,d,c,p,y,u,A,k,f,h],q:{name:x,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};
var o=D,m=D.parser[C?j:z].exec(B),E={},i=14;

while(i--){E[o.key[i]]=m[i]||v;
}E[o.q.name]={};
E[o.key[12]].replace(o.q.parser,function(F,G,H){if(G){E[o.q.name][G]=H;
}});
return E;
},appendParamsToUrl:function(I,J){if(J===undefined){return I;
}
if(qx.lang.Type.isObject(J)){J=qx.lang.Object.toUriParameter(J);
}
if(!J){return I;
}return I+=(/\?/).test(I)?r+J:n+J;
},getAbsolute:function(K){var L=document.createElement(g);
L.innerHTML=q+K+s;
return L.firstChild.href;
}}});
})();
(function(){var u='"',t="{",s="[",r=",",q="",p="get",o="}",n="]",m='":',l="&",d="null",k='\\t',g='\\"',c='\\n',b='\\b',f="=",e="qx.util.Serializer",h='\\r',a='\\\\',j='\\f';
qx.Class.define(e,{statics:{toUriParameter:function(v,w,x){var B=q;
var C=qx.util.PropertyUtil.getAllProperties(v.constructor);

for(var name in C){if(C[name].group!=undefined){continue;
}var y=v[p+qx.lang.String.firstUp(name)]();
if(qx.lang.Type.isArray(y)){var A=qx.data&&qx.data.IListData&&qx.Class.hasInterface(y&&y.constructor,qx.data.IListData);

for(var i=0;i<y.length;i++){var z=A?y.getItem(i):y[i];
B+=this.__da(name,z,w);
}}else if(qx.lang.Type.isDate(y)&&x!=null){B+=this.__da(name,x.format(y),w);
}else{B+=this.__da(name,y,w);
}}return B.substring(0,B.length-1);
},__da:function(name,D,E){if(D instanceof qx.core.Object&&E!=null){var F=encodeURIComponent(E(D));

if(F===undefined){var F=encodeURIComponent(D);
}}else{var F=encodeURIComponent(D);
}return encodeURIComponent(name)+f+F+l;
},toNativeObject:function(G,H,I){var L;
if(G==null){return null;
}if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(G.constructor,qx.data.IListData)){L=[];

for(var i=0;i<G.getLength();i++){L.push(qx.util.Serializer.toNativeObject(G.getItem(i),H,I));
}return L;
}if(qx.lang.Type.isArray(G)){L=[];

for(var i=0;i<G.length;i++){L.push(qx.util.Serializer.toNativeObject(G[i],H,I));
}return L;
}if(G instanceof qx.core.Object){if(H!=null){var M=H(G);
if(M!=undefined){return M;
}}L={};
var N=qx.util.PropertyUtil.getAllProperties(G.constructor);

for(var name in N){if(N[name].group!=undefined){continue;
}var K=G[p+qx.lang.String.firstUp(name)]();
L[name]=qx.util.Serializer.toNativeObject(K,H,I);
}return L;
}if(qx.lang.Type.isDate(G)&&I!=null){return I.format(G);
}if(qx.locale&&qx.locale.LocalizedString&&G instanceof qx.locale.LocalizedString){return G.toString();
}if(qx.lang.Type.isObject(G)){L={};

for(var J in G){L[J]=qx.util.Serializer.toNativeObject(G[J],H,I);
}return L;
}return G;
},toJson:function(O,P,Q){var T=q;
if(O==null){return d;
}if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(O.constructor,qx.data.IListData)){T+=s;

for(var i=0;i<O.getLength();i++){T+=qx.util.Serializer.toJson(O.getItem(i),P,Q)+r;
}
if(T!=s){T=T.substring(0,T.length-1);
}return T+n;
}if(qx.lang.Type.isArray(O)){T+=s;

for(var i=0;i<O.length;i++){T+=qx.util.Serializer.toJson(O[i],P,Q)+r;
}
if(T!=s){T=T.substring(0,T.length-1);
}return T+n;
}if(O instanceof qx.core.Object){if(P!=null){var U=P(O);
if(U!=undefined){return u+U+u;
}}T+=t;
var V=qx.util.PropertyUtil.getAllProperties(O.constructor);

for(var name in V){if(V[name].group!=undefined){continue;
}var S=O[p+qx.lang.String.firstUp(name)]();
T+=u+name+m+qx.util.Serializer.toJson(S,P,Q)+r;
}
if(T!=t){T=T.substring(0,T.length-1);
}return T+o;
}if(O instanceof qx.locale.LocalizedString){O=O.toString();
}if(qx.lang.Type.isDate(O)&&Q!=null){return u+Q.format(O)+u;
}if(qx.lang.Type.isObject(O)){T+=t;

for(var R in O){T+=u+R+m+qx.util.Serializer.toJson(O[R],P,Q)+r;
}
if(T!=t){T=T.substring(0,T.length-1);
}return T+o;
}if(qx.lang.Type.isString(O)){O=O.replace(/([\\])/g,a);
O=O.replace(/(["])/g,g);
O=O.replace(/([\r])/g,h);
O=O.replace(/([\f])/g,j);
O=O.replace(/([\n])/g,c);
O=O.replace(/([\t])/g,k);
O=O.replace(/([\b])/g,b);
return u+O+u;
}if(qx.lang.Type.isDate(O)||qx.lang.Type.isRegExp(O)){return u+O+u;
}return O+q;
}}});
})();
(function(){var q="qx.event.type.Event",p="",o="function",n="xml",m="GET",l="null",k="XMLHttpRequest",j="Boolean",i="X-Requested-With",h="application/x-www-form-urlencoded",c="Cache-Control",g="Content-Type",f="qx.debug.io",b="qx.io.request.Xhr",a="json",e="Accept",d="String";
qx.Class.define(b,{extend:qx.io.request.AbstractRequest,construct:function(r,s){if(s!==undefined){this.setMethod(s);
}qx.io.request.AbstractRequest.call(this,r);
},events:{"readyStateChange":q,"success":q,"load":q,"statusError":q},statics:{PARSER:{json:qx.lang.Json.parse,xml:qx.xml.Document.fromString}},properties:{method:{init:m},async:{check:j,init:true},accept:{check:d,nullable:true},cache:{check:function(t){return qx.lang.Type.isBoolean(t)||qx.lang.Type.isString(t);
},init:true}},members:{__sP:null,_createTransport:function(){return new qx.bom.request.Xhr();
},_getConfiguredUrl:function(){var u=this.getUrl(),v;

if(this.getMethod()===m&&this.getRequestData()){v=this._serializeData(this.getRequestData());
u=qx.util.Uri.appendParamsToUrl(u,v);
}
if(this.getCache()===false){u=qx.util.Uri.appendParamsToUrl(u,{nocache:new Date().valueOf()});
}return u;
},_getConfiguredRequestHeaders:function(){var w={},x=qx.util.Request.methodAllowsRequestBody(this.getMethod());
if(!qx.util.Request.isCrossDomain(this.getUrl())){w[i]=k;
}if(qx.lang.Type.isString(this.getCache())){w[c]=this.getCache();
}if(this.getRequestData()!==l&&x){w[g]=h;
}if(this.getAccept()){if(qx.core.Environment.get(f)){this.debug("Accepting: '"+this.getAccept()+"'");
}w[e]=this.getAccept();
}return w;
},_getMethod:function(){return this.getMethod();
},_isAsync:function(){return this.isAsync();
},_getParsedResponse:function(){var z=this._transport.responseText,y=this._getParser();

if(typeof y===o){if(z!==p){return y.call(this,z);
}}return z;
},setParser:function(A){var B=qx.io.request.Xhr;
if(typeof B.PARSER[A]===o){return this.__sP=B.PARSER[A];
}return this.__sP=A;
},_getParser:function(){var C=this.__sP,D;
if(C){return C;
}if(!this.isDone()){return;
}D=this.getResponseContentType()||p;
D=D.replace(/;.*$/,p);

if((/^application\/(\w|\.)*\+?json$/).test(D)){C=qx.io.request.Xhr.PARSER[a];
}
if((/^application\/xml$/).test(D)){C=qx.io.request.Xhr.PARSER[n];
}if((/[^\/]+\/[^\+]+\+xml$/).test(this.getResponseContentType())){C=qx.io.request.Xhr.PARSER[n];
}return C;
}}});
})();
(function(){var k="engine.name",j="qx.debug.io",i="",h="mshtml",g="undefined",f="opera",d="gecko",c="file:",b="If-Modified-Since",a="onunload",y="browser.documentmode",x="activex",w="If-None-Match",v="xhr",u="engine.version",t="-1",s="If-Match",r="Microsoft.XMLHTTP",q="browser.version",p="qx.bom.request.Xhr",n="Microsoft.XMLDOM",o="If-Range",l="Content-Type",m="io.xhr";
qx.Bootstrap.define(p,{construct:function(){this.__sQ=qx.Bootstrap.bind(this.__tc,this);
this.__sR=qx.Bootstrap.bind(this.__tb,this);
this.__sq=qx.Bootstrap.bind(this.__tf,this);
this.__ta();
if(window.attachEvent){this.__sS=qx.Bootstrap.bind(this.__ti,this);
window.attachEvent(a,this.__sS);
}},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{readyState:0,responseText:i,responseXML:null,status:0,statusText:i,timeout:0,open:function(z,A,B,C,D){this.__tk();
if(typeof z===g||typeof A===g){throw new Error("Not enough arguments");
}this.__st=false;
this.__sT=false;
this.__sU=false;
this.__su=A;

if(typeof B==g){B=true;
}this.__sV=B;
if(!this.__tj()&&this.readyState>qx.bom.request.Xhr.UNSENT){this.dispose();
this.__ta();
}this.__sX.onreadystatechange=this.__sQ;

try{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Open native request with method: "+z+", url: "+A+", async: "+B);
}this.__sX.open(z,A,B,C,D);
}catch(E){if(!qx.util.Request.isCrossDomain(A)){throw E;
}
if(!this.__sV){this.__sW=E;
}
if(this.__sV){if(window.XDomainRequest){this.readyState=4;
this.__sX=new XDomainRequest();
this.__sX.onerror=qx.Bootstrap.bind(function(){this.onreadystatechange();
this.onerror();
this.onloadend();
},this);

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Retry open native request with method: "+z+", url: "+A+", async: "+B);
}this.__sX.open(z,A,B,C,D);
return;
}window.setTimeout(qx.Bootstrap.bind(function(){if(this.__sv){return;
}this.readyState=4;
this.onreadystatechange();
this.onerror();
this.onloadend();
},this));
}}if(qx.core.Environment.get(k)===h&&qx.core.Environment.get(y)<9&&this.__sX.readyState>0){this.__sX.setRequestHeader(b,t);
}if(qx.core.Environment.get(k)===d&&parseInt(qx.core.Environment.get(u),10)<2&&!this.__sV){this.readyState=qx.bom.request.Xhr.OPENED;
this.onreadystatechange();
}},setRequestHeader:function(F,G){this.__tk();
if(F==s||F==b||F==w||F==o){this.__sU=true;
}this.__sX.setRequestHeader(F,G);
},send:function(H){this.__tk();
if(!this.__sV&&this.__sW){throw this.__sW;
}if(qx.core.Environment.get(k)===f&&this.timeout===0){this.timeout=10000;
}if(this.timeout>0){this.__sY=window.setTimeout(this.__sq,this.timeout);
}H=typeof H==g?null:H;
try{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Send native request");
}this.__sX.send(H);
}catch(J){if(!this.__sV){throw J;
}if(this._getProtocol()===c){this.readyState=2;
this.__sy();
var I=this;
window.setTimeout(function(){if(I.__sv){return;
}I.readyState=3;
I.__sy();
I.readyState=4;
I.__sy();
});
}}if(qx.core.Environment.get(k)===d&&!this.__sV){this.__tc();
}this.__sT=true;
},abort:function(){this.__tk();
this.__st=true;
this.__sX.abort();

if(this.__sX){this.readyState=this.__sX.readyState;
}},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(K){this.__tk();
return this.__sX.getResponseHeader(K);
},getAllResponseHeaders:function(){this.__tk();
return this.__sX.getAllResponseHeaders();
},getRequest:function(){return this.__sX;
},dispose:function(){if(this.__sv){return false;
}window.clearTimeout(this.__sY);
if(window.detachEvent){window.detachEvent(a,this.__sS);
}try{this.__sX.onreadystatechange;
}catch(M){return;
}var L=function(){};
this.__sX.onreadystatechange=L;
this.__sX.onload=L;
this.__sX.onerror=L;
this.abort();
this.__sX=null;
this.__sv=true;
return true;
},_createNativeXhr:function(){var N=qx.core.Environment.get(m);

if(N===v){return new XMLHttpRequest();
}
if(N==x){return new window.ActiveXObject(r);
}qx.log.Logger.error(this,"No XHR support available.");
},_getProtocol:function(){var O=this.__su;
var P=/^(\w+:)\/\//;
if(O!==null&&O.match){var Q=O.match(P);

if(Q&&Q[1]){return Q[1];
}}return window.location.protocol;
},__sX:null,__sV:null,__sQ:null,__sR:null,__sS:null,__sq:null,__sT:null,__su:null,__st:null,__du:null,__sv:null,__sY:null,__sW:null,__sU:null,__ta:function(){this.__sX=this._createNativeXhr();
this.__sX.onreadystatechange=this.__sQ;
if(this.__sX.onabort){this.__sX.onabort=this.__sR;
}this.__sv=this.__sT=this.__st=false;
},__tb:function(){if(!this.__st){this.abort();
}},__tc:function(){var R=this.__sX,S=true;

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Received native readyState: "+R.readyState);
}if(this.readyState==R.readyState){return;
}this.readyState=R.readyState;
if(this.readyState===qx.bom.request.Xhr.DONE&&this.__st&&!this.__sT){return;
}if(!this.__sV&&(R.readyState==2||R.readyState==3)){return;
}this.status=0;
this.statusText=this.responseText=i;
this.responseXML=null;

if(this.readyState>=qx.bom.request.Xhr.HEADERS_RECEIVED){try{this.status=R.status;
this.statusText=R.statusText;
this.responseText=R.responseText;
this.responseXML=R.responseXML;
}catch(T){S=false;
}
if(S){this.__tg();
this.__th();
}}this.__sy();
if(this.readyState==qx.bom.request.Xhr.DONE){if(R){R.onreadystatechange=function(){};
}}},__sy:function(){var U=this;
if(this.readyState===qx.bom.request.Xhr.DONE){window.clearTimeout(this.__sY);
}if(qx.core.Environment.get(k)==h&&qx.core.Environment.get(y)<8){if(this.__sV&&!this.__sT&&this.readyState>=qx.bom.request.Xhr.LOADING){if(this.readyState==qx.bom.request.Xhr.LOADING){return ;
}
if(this.readyState==qx.bom.request.Xhr.DONE){window.setTimeout(function(){if(U.__sv){return;
}U.readyState=3;
U.onreadystatechange();
U.readyState=4;
U.onreadystatechange();
U.__td();
});
return;
}}}this.onreadystatechange();

if(this.readyState===qx.bom.request.Xhr.DONE){this.__td();
}},__td:function(){if(this.__du){this.ontimeout();
if(qx.core.Environment.get(k)===f){this.onerror();
}this.__du=false;
}else{if(this.__st){this.onabort();
}else{this.__te()?this.onerror():this.onload();
}}this.onloadend();
},__te:function(){var V;
if(this._getProtocol()===c){V=!this.responseText;
}else{V=!this.statusText;
}return V;
},__tf:function(){var W=this.__sX;
this.readyState=qx.bom.request.Xhr.DONE;
this.__du=true;
W.abort();
this.responseText=i;
this.responseXML=null;
this.__sy();
},__tg:function(){var X=this.readyState===qx.bom.request.Xhr.DONE;
if(this._getProtocol()===c&&this.status===0&&X){if(!this.__te()){this.status=200;
}}if(this.status===1223){this.status=204;
}if(qx.core.Environment.get(k)===f){if(X&&this.__sU&&!this.__st&&this.status===0){this.status=304;
}}},__th:function(){if(qx.core.Environment.get(k)==h&&(this.getResponseHeader(l)||i).match(/[^\/]+\/[^\+]+\+xml/)&&this.responseXML&&!this.responseXML.documentElement){var Y=new window.ActiveXObject(n);
Y.async=false;
Y.validateOnParse=false;
Y.loadXML(this.responseText);
this.responseXML=Y;
}},__ti:function(){try{if(this){this.dispose();
}}catch(e){}},__tj:function(){var name=qx.core.Environment.get(k);
var ba=qx.core.Environment.get(q);
return !(name==h&&ba<9||name==d&&ba<3.5);
},__tk:function(){if(this.__sv){throw new Error("Already disposed");
}}},defer:function(){qx.core.Environment.add(j,false);
}});
})();
(function(){var f="String",e="callback",d="changePhase",c="fail",b="success",a="qx.data.store.Jsonp";
qx.Class.define(a,{extend:qx.data.store.Json,construct:function(g,h,i){if(i!=undefined){this.setCallbackParam(i);
}qx.data.store.Json.call(this,g,h);
},properties:{callbackParam:{check:f,init:e,nullable:true},callbackName:{check:f,nullable:true}},members:{_createRequest:function(j){if(this._getRequest()){this._getRequest().dispose();
}var k=new qx.io.request.Jsonp();
this._setRequest(k);
k.setCallbackParam(this.getCallbackParam());
k.setCallbackName(this.getCallbackName());
k.setUrl(j);
k.addListener(b,this._onSuccess,this);
var l=this._delegate;

if(l&&qx.lang.Type.isFunction(l.configureRequest)){this._delegate.configureRequest(k);
}k.addListener(d,this._onChangePhase,this);
k.addListener(c,this._onFail,this);
k.send();
}}});
})();
(function(){var c="qx.event.type.Event",b="qx.io.request.Jsonp",a="Boolean";
qx.Class.define(b,{extend:qx.io.request.AbstractRequest,events:{"success":c,"load":c,"statusError":c},properties:{cache:{check:a,init:true}},members:{_createTransport:function(){return new qx.bom.request.Jsonp();
},_getConfiguredUrl:function(){var d=this.getUrl(),e;

if(this.getRequestData()){e=this._serializeData(this.getRequestData());
d=qx.util.Uri.appendParamsToUrl(d,e);
}
if(!this.getCache()){d=qx.util.Uri.appendParamsToUrl(d,{nocache:new Date().valueOf()});
}return d;
},_getParsedResponse:function(){return this._transport.responseJson;
},setCallbackParam:function(f){this._transport.setCallbackParam(f);
},setCallbackName:function(name){this._transport.setCallbackName(name);
}}});
})();
(function(){var k="qx.debug.io",j="engine.name",i="mshtml",h="",g="browser.documentmode",f="head",e="script",d="opera",c="Unknown response headers",b="unknown",a="qx.bom.request.Script";
qx.Bootstrap.define(a,{construct:function(){this.__sx();
this.__so=qx.Bootstrap.bind(this._onNativeLoad,this);
this.__sp=qx.Bootstrap.bind(this._onNativeError,this);
this.__sq=qx.Bootstrap.bind(this._onTimeout,this);
this.__sr=document.head||document.getElementsByTagName(f)[0]||document.documentElement;
this.timeout=this.__sB()?0:15000;
},members:{readyState:null,status:null,statusText:null,timeout:null,__ss:null,open:function(l,m){if(this.__sv){return;
}this.__sx();
this.__st=null;
this.__su=m;

if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Open native request with "+"url: "+m);
}this.__sy(1);
},setRequestHeader:function(n,o){if(this.__sv){return;
}var p={};

if(this.readyState!==1){throw new Error("Invalid state");
}p[n]=o;
this.__su=qx.util.Uri.appendParamsToUrl(this.__su,p);
},send:function(){if(this.__sv){return;
}var s=this.__sC(),q=this.__sr,r=this;

if(this.timeout>0){this.__ds=window.setTimeout(this.__sq,this.timeout);
}
if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Send native request");
}q.insertBefore(s,q.firstChild);
window.setTimeout(function(){r.__sy(2);
r.__sy(3);
});
},abort:function(){if(this.__sv){return;
}this.__st=true;
this.__sD();
this.onabort();
},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(t){if(this.__sv){return;
}return b;
},getAllResponseHeaders:function(){if(this.__sv){return;
}return c;
},setDetermineSuccess:function(u){qx.core.Assert.assertFunction(u);
this.__ss=u;
},dispose:function(){var v=this.__sw;

if(!this.__sv){if(v){v.onload=v.onreadystatechange=null;
this.__sD();
}
if(this.__ds){window.clearTimeout(this.__ds);
}this.__sv=true;
}},_getUrl:function(){return this.__su;
},_getScriptElement:function(){return this.__sw;
},_onTimeout:function(){this.__sA();

if(!this.__sB()){this.onerror();
}this.ontimeout();

if(!this.__sB()){this.onloadend();
}},_onNativeLoad:function(){var y=this.__sw,w=this.__ss,x=this;
if(this.__st){return;
}if(qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9){if(!(/loaded|complete/).test(y.readyState)){return;
}else{if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Received native readyState: loaded");
}}}
if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Received native load");
}if(w){if(!this.status){this.status=w()?200:500;
}}
if(this.status===500){if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Detected error");
}}
if(this.__ds){window.clearTimeout(this.__ds);
}window.setTimeout(function(){x.__sz();
x.__sy(4);
x.onload();
x.onloadend();
});
},_onNativeError:function(){this.__sA();
this.onerror();
this.onloadend();
},__sw:null,__sr:null,__su:h,__so:null,__sp:null,__sq:null,__ds:null,__st:null,__sv:null,__sx:function(){this.readyState=0;
this.status=0;
this.statusText=h;
},__sy:function(z){this.readyState=z;
this.onreadystatechange();
},__sz:function(){this.__sD();
this.readyState=4;
if(!this.status){this.status=200;
}this.statusText=h+this.status;
},__sA:function(){this.__sD();
this.readyState=4;
this.status=0;
this.statusText=null;
},__sB:function(){var B=qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9;
var A=qx.core.Environment.get(j)===d;
return !(B||A);
},__sC:function(){var C=this.__sw=document.createElement(e);
C.src=this.__su;
C.onerror=this.__sp;
C.onload=this.__so;
if(qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9){C.onreadystatechange=this.__so;
}return C;
},__sD:function(){var D=this.__sw;

if(D&&D.parentNode){this.__sr.removeChild(D);
}}},defer:function(){qx.core.Environment.add(k,false);
}});
})();
(function(){var i="qx.debug.io",h="qx.bom.request.Jsonp",g="callback",f="open",e="dispose",d="",c="_onNativeLoad",b="].callback",a="qx.bom.request.Jsonp[";
qx.Bootstrap.define(h,{extend:qx.bom.request.Script,construct:function(){qx.bom.request.Script.apply(this);
this.__tr();
},members:{responseJson:null,__cq:null,__tl:null,__tm:null,__tn:null,__to:null,__sv:null,open:function(j,k){if(this.__sv){return;
}var l={},n,m,o=this;
this.responseJson=null;
this.__tn=false;
n=this.__tl||g;
m=this.__tm||a+this.__cq+b;
if(!this.__tm){this.constructor[this.__cq]=this;
}else{if(!window[this.__tm]){this.__to=true;
window[this.__tm]=function(p){o.callback(p);
};
}else{if(qx.core.Environment.get(i)){qx.log.Logger.debug(qx.bom.request.Jsonp,"Callback "+this.__tm+" already exists");
}}}
if(qx.core.Environment.get(i)){qx.Bootstrap.debug(qx.bom.request.Jsonp,"Expecting JavaScript response to call: "+m);
}l[n]=m;
k=qx.util.Uri.appendParamsToUrl(k,l);
this.__tq(f,[j,k]);
},callback:function(q){if(this.__sv){return;
}this.__tn=true;
this.responseJson=q;
this.constructor[this.__cq]=undefined;
this.__tp();
},setCallbackParam:function(r){this.__tl=r;
},setCallbackName:function(name){this.__tm=name;
},dispose:function(){this.__tp();
this.__tq(e);
},_onNativeLoad:function(){this.status=this.__tn?200:500;
this.__tq(c);
},__tp:function(){if(this.__to&&window[this.__tm]){window[this.__tm]=undefined;
this.__to=false;
}},__tq:function(s,t){qx.bom.request.Script.prototype[s].apply(this,t||[]);
},__tr:function(){this.__cq=(new Date().valueOf())+(d+Math.random()).substring(2,5);
}}});
})();
(function(){var g="://query.yahooapis.com/v1/public/yql?q=",f="callback",e="http",d="env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",c="&format=json&diagnostics=false&",b="https",a="qx.data.store.Yql";
qx.Class.define(a,{extend:qx.data.store.Jsonp,construct:function(h,i,j){var l=j?b:e;
var k=l+g+encodeURIComponent(h)+c+d;
qx.data.store.Jsonp.call(this,k,i,f);
}});
})();
(function(){var f="storage",d="Storage",c="qx.event.type.Data",b="abstract",a="qx.bom.storage.Abstract";
qx.Class.define(a,{extend:qx.core.Object,type:b,construct:function(g){qx.core.Object.call(this);
this._type=g;
this._storage=window[this._type+d];
this._handleStorageEventBound=qx.lang.Function.bind(this._handleStorageEvent,this);
this.__BL=qx.bom.Event.supportsEvent(window,"storage")?window:qx.bom.Event.supportsEvent(document,"storage")?document:null;

if(this.__BL){qx.bom.Event.addNativeListener(this.__BL,f,this._handleStorageEventBound);
}},events:{"storage":c},members:{_handleStorageEventBound:null,_storage:null,_type:null,__BL:null,getLength:function(){return this._storage.length;
},setItem:function(h,j){j=qx.lang.Json.stringify(j);

try{this._storage.setItem(h,j);
}catch(e){throw new Error("Storage full.");
}},getItem:function(k){var l=this._storage.getItem(k);

if(qx.lang.Type.isString(l)){l=qx.lang.Json.parse(l);
}else if(l&&l.value&&qx.lang.Type.isString(l.value)){l=qx.lang.Json.parse(l.value);
}return l;
},removeItem:function(m){this._storage.removeItem(m);
},clear:function(){if(!this._storage.clear){var n=this._storage;

for(var i=n.length-1;i>=0;i--){n.removeItem(n.key(i));
}}else{this._storage.clear();
}},getKey:function(o){return this._storage.key(o);
},iterate:function(p,q){var length=this.getLength();

for(var i=0;i<length;i++){var r=this.getKey(i);
p.call(q,r,this.getItem(r));
}},_handleStorageEvent:function(e){var s={orig:e,key:e.key,newValue:e.newValue,oldValue:e.oldValue,url:e.url,storageArea:e.storageArea};
qx.event.Timer.once(function(){this.fireDataEvent(f,s);
},this,0);
}},destruct:function(){this._storage=null;

if(this.__BL){qx.bom.Event.removeNativeListener(this.__BL,f,this._handleStorageEventBound);
}}});
})();
(function(){var c="local",b="qx.bom.storage.Local",a="singleton";
qx.Class.define(b,{extend:qx.bom.storage.Abstract,type:a,construct:function(){qx.bom.storage.Abstract.call(this,c);
}});
})();
(function(){var o="animationend",n="css.animation",m="",l="MSAnimationEnd",k="-keyframes",j="animation",h="oAnimationEnd",g="@",f="@keyframes",d="webkitAnimationEnd",a="qx.bom.client.CssAnimation",c=" name",b="AnimationPlayState";
qx.Bootstrap.define(a,{statics:{getSupport:function(){var name=qx.bom.client.CssAnimation.getName();

if(name!=null){return {"name":name,"play-state":qx.bom.client.CssAnimation.getPlayState(),"end-event":qx.bom.client.CssAnimation.getAnimationEnd(),"keyframes":qx.bom.client.CssAnimation.getKeyFrames()};
}return null;
},getPlayState:function(){return qx.bom.Style.getPropertyName(b);
},getName:function(){return qx.bom.Style.getPropertyName(j);
},getAnimationEnd:function(){var p={"MsAnimation":l,"WebkitAnimation":d,"MozAnimation":o,"OAnimation":h,"animation":o};
return p[this.getName()];
},getKeyFrames:function(){var q=qx.bom.Style.VENDOR_PREFIXES;
var s=[];

for(var i=0;i<q.length;i++){s.push(g+qx.lang.String.hyphenate(q[i])+k);
}s.unshift(f);
var r=qx.bom.Stylesheet.createElement();

for(var i=0;i<s.length;i++){try{qx.bom.Stylesheet.addRule(r,s[i]+c,m);
return s[i];
}catch(e){}}return null;
}},defer:function(t){qx.core.Environment.add(n,t.getSupport);
}});
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
qx.Bootstrap.define(f,{statics:{__jk:function(){if(!qx.bom.client.Stylesheet.__jl){qx.bom.client.Stylesheet.__jl=qx.bom.Stylesheet.createElement();
}return qx.bom.client.Stylesheet.__jl;
},getCreateStyleSheet:function(){return typeof document.createStyleSheet===h;
},getInsertRule:function(){return typeof qx.bom.client.Stylesheet.__jk().insertRule===g;
},getDeleteRule:function(){return typeof qx.bom.client.Stylesheet.__jk().deleteRule===g;
},getAddImport:function(){return (typeof qx.bom.client.Stylesheet.__jk().addImport===h);
},getRemoveImport:function(){return (typeof qx.bom.client.Stylesheet.__jk().removeImport===h);
}},defer:function(i){qx.core.Environment.add(c,i.getCreateStyleSheet);
qx.core.Environment.add(d,i.getInsertRule);
qx.core.Environment.add(e,i.getDeleteRule);
qx.core.Environment.add(b,i.getAddImport);
qx.core.Environment.add(a,i.getRemoveImport);
}});
})();
(function(){var h=" ",g="name",f="ms ",d="",c="alternate",b="qx.bom.element.Animation",a="end-event";
qx.Bootstrap.define(b,{statics:{__DI:null,__DJ:"Anni",__cq:0,__DK:{},__DL:{"scale":true,"rotate":true,"skew":true,"translate":true},__DM:qx.core.Environment.get("css.animation"),animate:function(j,k){this.__DP(k);

if(!this.__DI){this.__DI=qx.bom.Stylesheet.createElement();
}var o=k.keyFrames;
if(this.__DM!=null){var name=this.__DR(o,k.reverse);
var m=name+h+k.duration+f+k.repeat+h+k.timing+h+(k.alternate?c:d);
var l=this.__DM[a];
qx.bom.Event.addNativeListener(j,l,this.__DN);
j.style[this.__DM[g]]=m;
}var n=new qx.bom.element.AnimationHandle();
n.desc=k;
n.el=j;
j.$$animation=n;
if(k.origin!=null){qx.bom.element.Transform.setOrigin(j,k.origin);
}if(this.__DM==null){window.setTimeout(function(){qx.bom.element.Animation.__DN({target:j});
},0);
}return n;
},__DN:function(e){var p=e.target;
var r=p.$$animation;
if(!r){return;
}var s=r.desc;

if(qx.bom.element.Animation.__DM!=null){p.style[qx.bom.element.Animation.__DM["name"]]="";
qx.bom.Event.removeNativeListener(p,qx.bom.element.Animation.__DM["name"],qx.bom.element.Animation.__DN);
}
if(s.origin!=null){qx.bom.element.Transform.setOrigin(p,"");
}
if(s.keep!=null){qx.bom.element.Animation.__DO(p,s.keyFrames[s.keep]);
}p.$$animation=null;
r.el=null;
r.ended=true;
var q=r.getOnEnd();

for(var i=0;i<q.length;i++){q[i].callback.call(q[i].ctx,p);
}},__DO:function(t,u){var w;

for(var v in u){if(v in qx.bom.element.Animation.__DL){if(!w){w={};
}w[v]=u[v];
}else{t.style[v]=u[v];
}}if(w){qx.bom.element.Transform.transform(t,w);
}},__DP:function(x){if(!x.hasOwnProperty("alternate")){x.alternate=false;
}
if(!x.hasOwnProperty("keep")){x.keep=null;
}
if(!x.hasOwnProperty("reverse")){x.reverse=false;
}
if(!x.hasOwnProperty("repeat")){x.repeat=1;
}
if(!x.hasOwnProperty("timing")){x.timing="linear";
}
if(!x.hasOwnProperty("origin")){x.origin=null;
}},__DQ:null,__DR:function(frames,y){var B="";
for(var E in frames){B+=(y?-(E-100):E)+"% {";
var A=frames[E];
var D;
for(var z in A){if(z in this.__DL){if(!D){D={};
}D[z]=A[z];
}else{B+=z+":"+A[z]+";";
}}if(D){B+=qx.bom.element.Transform.getCss(D);
}B+="} ";
}if(this.__DK[B]){return this.__DK[B];
}var name=this.__DJ+this.__cq++;
var C=this.__DM["keyframes"]+" "+name;
qx.bom.Stylesheet.addRule(this.__DI,C,B);
this.__DK[B]=name;
return name;
}}});
})();
(function(){var e="",d="css.animation",c="qx.bom.element.AnimationHandle",b="running",a="paused";
qx.Bootstrap.define(c,{extend:Object,construct:function(){var f=qx.core.Environment.get(d);
this.__DS=f&&f["playstate"];
this.__DT=[];
},members:{__DS:null,__DU:false,__DV:false,__DT:null,onEnd:function(g,h){this.__DT.push({ctx:h||this,callback:g});
},getOnEnd:function(){return this.__DT;
},isPlaying:function(){return this.__DU;
},isEnded:function(){return this.__DV;
},pause:function(){if(this.el){this.el.style[this.__DS]=a;
this.el.$$animation.__DU=false;
}},play:function(){if(this.el){this.el.style[this.__DS]=b;
this.el.$$animation.__DU=true;
}},stop:function(){if(this.el){this.el.style[this.__DS]=e;
this.el.style[qx.core.Environment.get(d).name]=e;
this.el.$$animation.__DU=false;
this.el.$$animation.__DV=true;
}}}});
})();
(function(){var n="perspectiveProperty",m="css.transform.3d",l="BackfaceVisibility",k="TransformStyle",j="WebkitPerspective",h='div',g="TransformOrigin",f="qx.bom.client.CssTransform",e="Transform",d="MozPerspective",a="Perspective",c="css.transform",b="PerspectiveOrigin";
qx.Bootstrap.define(f,{statics:{getSupport:function(){var name=qx.bom.client.CssTransform.getName();

if(name!=null){return {"name":name,"style":qx.bom.client.CssTransform.getStyle(),"origin":qx.bom.client.CssTransform.getOrigin(),"3d":qx.bom.client.CssTransform.get3D(),"perspective":qx.bom.client.CssTransform.getPerspective(),"perspective-origin":qx.bom.client.CssTransform.getPerspectiveOrigin(),"backface-visibility":qx.bom.client.CssTransform.getBackFaceVisibility()};
}return null;
},getStyle:function(){return qx.bom.Style.getPropertyName(k);
},getPerspective:function(){return qx.bom.Style.getPropertyName(a);
},getPerspectiveOrigin:function(){return qx.bom.Style.getPropertyName(b);
},getBackFaceVisibility:function(){return qx.bom.Style.getPropertyName(l);
},getOrigin:function(){return qx.bom.Style.getPropertyName(g);
},getName:function(){return qx.bom.Style.getPropertyName(e);
},get3D:function(){var o=document.createElement(h);
var q=false;
var p=[n,j,d];

for(var i=p.length-1;i>=0;i--){q=q?q:o.style[p[i]]!=undefined;
}return q;
}},defer:function(r){qx.core.Environment.add(c,r.getSupport);
qx.core.Environment.add(m,r.get3D);
}});
})();
(function(){var m="",l="backface-visibility",k="name",j="visible",h="origin",g="perspective-origin",f="perspective",e="style",d="qx.bom.element.Transform",c="hidden",a=":",b=";";
qx.Bootstrap.define(d,{statics:{__DW:["X","Y","Z"],__DX:qx.core.Environment.get("css.transform"),transform:function(n,o){var q=this.__DY(o);

if(this.__DX!=null){var p=this.__DX[k];
n.style[p]=q;
}},translate:function(r,s){this.transform(r,{translate:s});
},scale:function(t,u){this.transform(t,{scale:u});
},rotate:function(v,w){this.transform(v,{rotate:w});
},skew:function(x,y){this.transform(x,{skew:y});
},getCss:function(z){var B=this.__DY(z);

if(this.__DX!=null){var A=this.__DX[k];
return qx.lang.String.hyphenate(A)+a+B+b;
}return m;
},setOrigin:function(C,D){if(this.__DX!=null){C.style[this.__DX[h]]=D;
}},getOrigin:function(E){if(this.__DX!=null){return E.style[this.__DX[h]];
}return m;
},setStyle:function(F,G){if(this.__DX!=null){F.style[this.__DX[e]]=G;
}},getStyle:function(H){if(this.__DX!=null){return H.style[this.__DX[e]];
}return m;
},setPerspective:function(I,J){if(this.__DX!=null){I.style[this.__DX[f]]=J;
}},getPerspective:function(K){if(this.__DX!=null){return K.style[this.__DX[f]];
}return m;
},setPerspectiveOrigin:function(L,M){if(this.__DX!=null){L.style[this.__DX[g]]=M;
}},getPerspectiveOrigin:function(N){if(this.__DX!=null){return N.style[this.__DX[g]];
}return m;
},setBackfaceVisibility:function(O,P){if(this.__DX!=null){O.style[this.__DX[l]]=P?j:c;
}},getBackfaceVisibility:function(Q){if(this.__DX!=null){return Q.style[this.__DX[l]]==j;
}return true;
},__DY:function(R){var U="";

for(var T in R){var S=R[T];
if(qx.Bootstrap.isArray(S)){for(var i=0;i<S.length;i++){if(S[i]==undefined){continue;
}U+=T+this.__DW[i]+"(";
U+=S[i];
U+=") ";
}}else{U+=T+"("+R[T]+") ";
}}return U;
}}});
})();
(function(){var q="0px",p="10px",o="click",n="display",m="none",l="selectedFeed",k="top center",j="px",i="tree-folder",h="feedreader.view.website.Factory",c="",g="tree-item",f="[-]",b="article",a="div[name='feedslabel']",d="[+]";
qx.Bootstrap.define(h,{statics:{createArticleView:function(r){var w={title:r.getTitle(),content:feedreader.ArticleBuilder.createHtml(r,false)};
var t=qx.bom.Template.get(b,w);
var s=t.children[0];
var u=t.children[1];
var content=t.children[2];
var v=function(e){if(qx.bom.element.Style.get(content,n)==m){qx.bom.element.Style.set(content,n,c);
qx.bom.element.Transform.scale(content,[null,0]);
qx.bom.element.Animation.animate(content,{duration:500,origin:k,keyFrames:{0:{"padding-bottom":q,"padding-top":q,"scale":[null,0],"height":q},100:{"padding-bottom":p,"padding-top":p,"scale":[null,1],"height":content.offsetHeight-20+j}}}).onEnd(function(){qx.bom.element.Transform.scale(content,1);
s.innerHTML=f;
});
}else{qx.bom.element.Animation.animate(content,{duration:500,origin:k,keyFrames:{0:{"padding-bottom":p,"padding-top":p,"scale":[null,1],"height":content.offsetHeight-20+j},100:{"padding-bottom":q,"padding-top":q,"scale":[null,0],"height":q}}}).onEnd(function(x){qx.bom.element.Style.set(x,n,m);
s.innerHTML=d;
});
}};
qx.bom.Event.addNativeListener(u,o,v);
qx.bom.Event.addNativeListener(s,o,v);
return t;
},createTreeFolder:function(name){return qx.bom.Template.get(i,{name:name});
},createTreeItem:function(y){var z={title:y.getTitle()};
var A=qx.bom.Template.get(g,z);
A.feed=y;
qx.bom.Event.addNativeListener(A,o,function(e){var B=qx.bom.Event.getTarget(e);
qx.bom.Collection.query(a).removeClass(l);
qx.bom.element.Class.add(B,l);
});
return A;
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
(function(){var n="",m="function",k="\n",j="g",h="^",g="#",f="IMPLICIT-ITERATOR",e=')',d="'",c=">",bp='.',bo="=",bn="object",bm='\\',bl="+",bk="&gt;",bj="render_tags",bi='[object Array]',bh='&#39;',bg="div",w=']',x="This implementation of mustache doesn't understand the '",u="unknown_partial '",v='|\\',q="%",t='&quot;',o="render_pragmas",p="<",C='(',D="!",L="^([\\s\\S]*?)",J="qx.bom.Template",T="\n*([\\s\\S]*?)",O='?',bc='*',Y="{",F='"',bf="{{",be='{',bd='g',E="(\\^|\\#)\\s*(.+)\\s*",H="render_section",I="&amp;",K="mustache.js",M="&lt;",P="&",V="}}",bb='\\$1',y="\\/\\s*\\3\\s*",z="(=|!|>|\\{|%)?([^\\/#\\^]+?)\\1?",G='/',S="%([\\w-]+) ?([\\w]+=[\\w]+)?",R='[',Q="' pragma",X="\\s*([\\s\\S]*)$",W=" ",N='(\\',U="0.4.0-dev",b=".",ba='|',A='}',B='+';
qx.Class.define(J,{statics:{version:null,toHtml:null,get:function(bq,br,bs){var bv=document.getElementById(bq);
var bu=bv.innerHTML;
bu=this.toHtml(bu,br,bs);
if(bu.search(/<|>/)===-1){return bu;
}var bt=qx.bom.Element.create(bg);
bt.innerHTML=bu;
return bt.children[0];
}}});
(function(){var bw=function(){var bx={};
var by=function(){};
by.prototype={otag:bf,ctag:V,pragmas:{},buffer:[],pragmas_implemented:{"IMPLICIT-ITERATOR":true},context:{},render:function(bz,bA,bB,bC){if(!bC){this.context=bA;
this.buffer=[];
}if(!this.includes(n,bz)){if(bC){return bz;
}else{this.send(bz);
return;
}}bz=this.render_pragmas(bz);
var bD=this.render_section(bz,bA,bB);
if(bD===false){bD=this.render_tags(bz,bA,bB,bC);
}
if(bC){return bD;
}else{this.sendLines(bD);
}},send:function(bE){if(bE!==n){this.buffer.push(bE);
}},sendLines:function(bF){if(bF){var bG=bF.split(k);

for(var i=0;i<bG.length;i++){this.send(bG[i]);
}}},render_pragmas:function(bH){if(!this.includes(q,bH)){return bH;
}var bJ=this;
var bI=this.getCachedRegex(o,function(bK,bL){return new RegExp(bK+S+bL,j);
});
return bH.replace(bI,function(bM,bN,bO){if(!bJ.pragmas_implemented[bN]){throw ({message:x+bN+Q});
}bJ.pragmas[bN]={};

if(bO){var bP=bO.split(bo);
bJ.pragmas[bN][bP[0]]=bP[1];
}return n;
});
},render_partial:function(name,bQ,bR){name=this.trim(name);

if(!bR||bR[name]===undefined){throw ({message:u+name+d});
}
if(typeof (bQ[name])!=bn){return this.render(bR[name],bQ,bR,true);
}return this.render(bR[name],bQ[name],bR,true);
},render_section:function(bS,bT,bU){if(!this.includes(g,bS)&&!this.includes(h,bS)){return false;
}var bW=this;
var bV=this.getCachedRegex(H,function(bX,bY){return new RegExp(L+bX+E+bY+T+bX+y+bY+X,j);
});
return bS.replace(bV,function(ca,cb,cc,name,content,cd){var ce=cb?bW.render_tags(cb,bT,bU,true):n,cf=cd?bW.render(cd,bT,bU,true):n,cg,ch=bW.find(name,bT);

if(cc===h){if(!ch||bW.is_array(ch)&&ch.length===0){cg=bW.render(content,bT,bU,true);
}else{cg=n;
}}else if(cc===g){if(bW.is_array(ch)){cg=bW.map(ch,function(ci){return bW.render(content,bW.create_context(ci),bU,true);
}).join(n);
}else if(bW.is_object(ch)){cg=bW.render(content,bW.create_context(ch),bU,true);
}else if(typeof ch===m){cg=ch.call(bT,content,function(cj){return bW.render(cj,bT,bU,true);
});
}else if(ch){cg=bW.render(content,bT,bU,true);
}else{cg=n;
}}return ce+cg+cf;
});
},render_tags:function(ck,cl,cm,cn){var cp=this;
var cs=function(){return cp.getCachedRegex(bj,function(ct,cu){return new RegExp(ct+z+cu+bl,j);
});
};
var co=cs();
var cq=function(cv,cw,name){switch(cw){case D:return n;
case bo:cp.set_delimiters(name);
co=cs();
return n;
case c:return cp.render_partial(name,cl,cm);
case Y:return cp.find(name,cl);
default:return cp.escape(cp.find(name,cl));
}};
var cr=ck.split(k);

for(var i=0;i<cr.length;i++){cr[i]=cr[i].replace(co,cq,this);

if(!cn){this.send(cr[i]);
}}
if(cn){return cr.join(k);
}},set_delimiters:function(cx){var cy=cx.split(W);
this.otag=this.escape_regex(cy[0]);
this.ctag=this.escape_regex(cy[1]);
},escape_regex:function(cz){if(!arguments.callee.sRE){var cA=[G,bp,bc,B,O,ba,C,e,R,w,be,A,bm];
arguments.callee.sRE=new RegExp(N+cA.join(v)+e,bd);
}return cz.replace(arguments.callee.sRE,bb);
},find:function(name,cB){name=this.trim(name);
function cC(cF){return cF===false||cF===0||cF;
}var cD;
if(name.match(/([a-z_]+)\./ig)){var cE=this.walk_context(name,cB);

if(cC(cE)){cD=cE;
}}else{if(cC(cB[name])){cD=cB[name];
}else if(cC(this.context[name])){cD=this.context[name];
}}
if(typeof cD===m){return cD.apply(cB);
}
if(cD!==undefined){return cD;
}return n;
},walk_context:function(name,cG){var cH=name.split(bp);
var cI=(cG[cH[0]]!=undefined)?cG:this.context;
var cJ=cI[cH.shift()];

while(cJ!=undefined&&cH.length>0){cI=cJ;
cJ=cJ[cH.shift()];
}if(typeof cJ===m){return cJ.apply(cI);
}return cJ;
},includes:function(cK,cL){return cL.indexOf(this.otag+cK)!=-1;
},escape:function(s){s=String(s===null?n:s);
return s.replace(/&(?!\w+;)|["'<>\\]/g,function(s){switch(s){case P:return I;
case F:return t;
case d:return bh;
case p:return M;
case c:return bk;
default:return s;
}});
},create_context:function(cM){if(this.is_object(cM)){return cM;
}else{var cO=b;

if(this.pragmas[f]){cO=this.pragmas[f].iterator;
}var cN={};
cN[cO]=cM;
return cN;
}},is_object:function(a){return a&&typeof a==bn;
},is_array:function(a){return Object.prototype.toString.call(a)===bi;
},trim:function(s){return s.replace(/^\s*|\s*$/g,n);
},map:function(cP,cQ){if(typeof cP.map==m){return cP.map(cQ);
}else{var r=[];
var l=cP.length;

for(var i=0;i<l;i++){r.push(cQ(cP[i]));
}return r;
}},getCachedRegex:function(name,cR){var cU=bx[this.otag];

if(!cU){cU=bx[this.otag]={};
}var cS=cU[this.ctag];

if(!cS){cS=cU[this.ctag]={};
}var cT=cS[name];

if(!cT){cT=cS[name]=cR(this.otag,this.ctag);
}return cT;
}};
return ({name:K,version:U,to_html:function(cV,cW,cX,cY){var da=new by();

if(cY){da.send=cY;
}da.render(cV,cW||{},cX);

if(!cY){return da.buffer.join(k);
}}});
}();
qx.bom.Template.version=bw.version;
qx.bom.Template.toHtml=bw.to_html;
})();
})();
(function(){var q="other",p="widgets",o="undefined",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",c="Theme",e="meta",d="borders",b="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,r){if(!r){var r={};
}r.include=this.__qT(r.include);
r.patch=this.__qT(r.patch);
var s={$$type:c,name:name,title:r.title,toString:this.genericToString};
if(r.extend){s.supertheme=r.extend;
}s.basename=qx.Bootstrap.createNamespace(name,s);
this.__qW(s,r);
this.__qU(s,r);
this.$$registry[name]=s;
for(var i=0,a=r.include,l=a.length;i<l;i++){this.include(s,a[i]);
}
for(var i=0,a=r.patch,l=a.length;i<l;i++){this.patch(s,a[i]);
}},__qT:function(t){if(!t){return [];
}
if(qx.Bootstrap.isArray(t)){return t;
}else{return [t];
}},__qU:function(u,v){var w=v.aliases||{};

if(v.extend&&v.extend.aliases){qx.Bootstrap.objectMergeWith(w,v.extend.aliases,false);
}u.aliases=w;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__qV:function(x){for(var i=0,y=this.__qX,l=y.length;i<l;i++){if(x[y[i]]){return y[i];
}}},__qW:function(z,A){var D=this.__qV(A);
if(A.extend&&!D){D=A.extend.type;
}z.type=D||q;
var F=function(){};
if(A.extend){F.prototype=new A.extend.$$clazz;
}var E=F.prototype;
var C=A[D];
for(var B in C){E[B]=C[B];
if(E[B].base){E[B].base=A.extend;
}}z.$$clazz=F;
z[D]=new F;
},$$registry:{},__qX:[g,d,f,n,b,p,m,e],__c:null,__qY:null,__d:function(){},patch:function(G,H){this.__ra(H);
var J=this.__qV(H);

if(J!==this.__qV(G)){throw new Error("The mixins '"+G.name+"' are not compatible '"+H.name+"'!");
}var I=H[J];
var K=G.$$clazz.prototype;

for(var L in I){K[L]=I[L];
}},include:function(M,N){this.__ra(N);
var P=N.type;

if(P!==M.type){throw new Error("The mixins '"+M.name+"' are not compatible '"+N.name+"'!");
}var O=N[P];
var Q=M.$$clazz.prototype;

for(var R in O){if(Q[R]!==undefined){continue;
}Q[R]=O[R];
}},__ra:function(S){if(typeof S===o||S==null){var T;
var U=new Error("Mixin theme is not a valid theme!");
throw U;
}}}});
})();
(function(){var eq="css.gradient.linear",ep="widget",eo="atom",en="-css",em="button-frame",el="css.borderradius",ek="css.boxshadow",ej="main",ei="button",eh="bold",cC="text-selected",cB="label",cA="image",cz="text-disabled",cy="middle",cx="selected",cw="background-light",cv="groupbox",cu="decoration/arrows/down.png",ct="popup",ex="cell",ey="border-invalid",ev="input",ew="input-disabled",et="menu-button",eu="input-focused-invalid",er="toolbar-button",es="spinner",ez="input-focused",eA="tooltip",dI="qx/static/blank.gif",dH="radiobutton",dK="list",dJ="tree-item",dM="combobox",dL="treevirtual-contract",dO="scrollbar",dN="datechooser/nav-button",dF="center",dE="checkbox",v="treevirtual-expand",w="",x="textfield",y="-invalid",z="decoration/arrows/right.png",A="background-application",B="invalid",C="right-top",D="selectbox",E="text-title",eO="icon/16/places/folder-open.png",eN="radiobutton-hovered",eM="group-item",eL="scrollbar/button",eS="right",eR="combobox/button",eQ="virtual-list",eP="icon/16/places/folder.png",eU="radiobutton-checked-focused",eT="text-label",bz="decoration/tree/closed.png",bA="table-scroller-header",bx="scrollbar-slider-horizontal",by="checkbox-hovered",bD="checkbox-checked",bE="decoration/arrows/left.png",bB="radiobutton-checked",bC="button-focused",bv="text-light",bw="menu-slidebar-button",bb="tree",ba="checkbox-undetermined",bd="table-scroller-header-css",bc="text-input",W="slidebar/button-forward",V="background-splitpane",Y="text-hovered",X=".png",U="decoration/tree/open.png",T="default",bK="decoration/arrows/down-small.png",bL="datechooser",bM="slidebar/button-backward",bN="radiobutton-checked-disabled",bG="checkbox-focused",bH="radiobutton-checked-hovered",bI="treevirtual-folder",bJ="shadow-popup",bO="icon/16/mimetypes/office-document.png",bP="background-medium",bo="icon/32/places/folder-open.png",bn="icon/22/places/folder-open.png",bm="table",bl="decoration/arrows/up.png",bk="decoration/form/",bj="radiobutton-focused",bi="button-checked",bh="decoration/window/maximize-active-hovered.png",bs="keyboard-focus",br="menu-css",bQ="decoration/cursors/",bR="slidebar",bS="tooltip-error-arrow",bT="table-scroller-focus-indicator",bU="popup-css",bV="move-frame",bW="nodrop",bX="decoration/table/boolean-true.png",bY="-invalid-css",ca="menu",cK="app-header",cJ="row-layer",cI="text-inactive",cH="move",cO="decoration/window/restore-active-hovered.png",cN="border-separator",cM="shadow-window",cL="tree-folder",cS="window-pane-css",cR="right.png",ds="checkbox-undetermined-hovered",dt="window-incl-statusbar-css",dq="tabview-page-button-bottom-inactive",dr="tooltip-error",dn="window-css",dp="window-statusbar",dl="button-hovered",dm="decoration/scrollbar/scrollbar-",dA="background-tip",dB="menubar-css",dT="scrollbar-slider-horizontal-disabled",dS="radiobutton-disabled",dV="window-resize-frame-css",dU="button-pressed",dX="table-pane",dW="decoration/window/close-active.png",ea="native",dY="button-invalid-shadow",dQ="decoration/window/minimize-active-hovered.png",dP="menubar",eH="icon/16/actions/dialog-cancel.png",eI="tabview-page-button-top-inactive",eJ="tabview-page-button-left-inactive",eK="menu-slidebar",eD="toolbar-button-checked",eE="decoration/tree/open-selected.png",eF="decoration/window/minimize-inactive.png",eG="icon/16/apps/office-calendar.png",eB="group-item-css",eC="group",k="tabview-page-button-right-inactive",j="decoration/window/minimize-active.png",i="decoration/window/restore-inactive.png",h="checkbox-checked-focused",g="splitpane",f="combobox/textfield",e="decoration/window/close-active-hovered.png",d="qx/icon/Tango/16/actions/window-close.png",c="checkbox-pressed",b="button-disabled",J="selected-dragover",K="tooltip-error-css",H="decoration/window/maximize-inactive.png",I="dragover",N="scrollarea",O="scrollbar-vertical",L="decoration/menu/checkbox-invert.gif",M="decoration/toolbar/toolbar-handle-knob.gif",Q="icon/22/mimetypes/office-document.png",R="table-header-cell",cW="button-checked-focused",cQ="up.png",de="best-fit",da="pane-css",cF="decoration/tree/closed-selected.png",cD="qx.theme.modern.Appearance",bf="text-active",cG="checkbox-disabled",bq="toolbar-button-hovered",bp="window-resize-frame-incl-statusbar-css",ck="decoration/form/checked.png",cl="progressive-table-header",cm="decoration/table/select-column-order.png",cn="decoration/menu/radiobutton.gif",co="decoration/arrows/forward.png",cp="decoration/table/descending.png",cq="decoration/form/undetermined.png",cr="tree-file",ch="window-captionbar-active",ci="checkbox-checked-hovered",cE="scrollbar-slider-vertical",dd="toolbar",dc="alias",db="decoration/window/restore-active.png",di="decoration/table/boolean-false.png",dh="icon/32/mimetypes/office-document.png",dg="tabview-pane",df="decoration/arrows/rewind.png",cY="top",cX="icon/16/actions/dialog-ok.png",P="progressbar-background",bu="table-header-cell-hovered",bt="window-statusbar-css",cP="window",bF="text-gray",cV="decoration/menu/radiobutton-invert.gif",cU="text-placeholder",cT="slider",be="toolbar-css",dk="keep-align",S="down.png",bg="groupitem-text",cb="tabview-page-button-top-active",cc="icon/22/places/folder.png",cd="decoration/window/maximize-active.png",ce="checkbox-checked-pressed",cf="decoration/window/close-inactive.png",cg="tabview-page-button-left-active",dD="toolbar-part",cj="decoration/splitpane/knob-vertical.png",ec=".gif",eb="table-statusbar",ee="progressive-table-header-cell-css",ed="window-captionbar-inactive",eg="copy",ef="decoration/arrows/down-invert.png",cs="decoration/menu/checkbox.gif",dR="window-caption-active-text",dj="decoration/splitpane/knob-horizontal.png",dG="group-css",F="icon/32/places/folder.png",G="toolbar-separator",dy="tabview-page-button-bottom-active",dz="decoration/arrows/up-small.png",dw="decoration/table/ascending.png",dx="decoration/arrows/up-invert.png",du="small",dv="tabview-page-button-right-active",a="-disabled",dC="scrollbar-horizontal",s="progressbar",r="checkbox-undetermined-focused",q="progressive-table-header-cell",p="menu-separator",o="tabview-pane-css",n="pane",m="htmlarea-background",l="decoration/arrows/right-invert.png",u="left.png",t="icon/16/actions/view-refresh.png";
qx.Theme.define(cD,{appearances:{"widget":{},"root":{style:function(eV){return {backgroundColor:A,textColor:eT,font:T};
}},"label":{style:function(eW){return {textColor:eW.disabled?cz:undefined};
}},"move-frame":{style:function(eX){return {decorator:ej};
}},"resize-frame":bV,"dragdrop-cursor":{style:function(eY){var fa=bW;

if(eY.copy){fa=eg;
}else if(eY.move){fa=cH;
}else if(eY.alias){fa=dc;
}return {source:bQ+fa+ec,position:C,offset:[2,16,2,6]};
}},"image":{style:function(fb){return {opacity:!fb.replacement&&fb.disabled?0.3:1};
}},"atom":{},"atom/label":cB,"atom/icon":cA,"popup":{style:function(fc){var fd=qx.core.Environment.get(ek);
return {decorator:fd?bU:ej,backgroundColor:cw,shadow:fd?undefined:bJ};
}},"button-frame":{alias:eo,style:function(fe){var fi,fh;
var ff=[3,9];

if(fe.checked&&fe.focused&&!fe.inner){fi=cW;
fh=undefined;
ff=[1,7];
}else if(fe.disabled){fi=b;
fh=undefined;
}else if(fe.pressed){fi=dU;
fh=Y;
}else if(fe.checked){fi=bi;
fh=undefined;
}else if(fe.hovered){fi=dl;
fh=Y;
}else if(fe.focused&&!fe.inner){fi=bC;
fh=undefined;
ff=[1,7];
}else{fi=ei;
fh=undefined;
}var fg;
if(qx.core.Environment.get(el)&&qx.core.Environment.get(eq)){if(fe.invalid&&!fe.disabled){fi+=bY;
}else{fi+=en;
}}else{fg=fe.invalid&&!fe.disabled?dY:undefined;
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
}else if(fp.hovered){fs=ds;
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

if(fB.disabled&&!fB.checked){fD=dS;
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
}else if(fF){fJ=ew;
}else if(!fH&&fI&&!fF){fJ=ey;
}else{fJ=ev;
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
}else if(fM){fP=ew;
}else if(!fN&&fO&&!fM){fP=ey;
}else{fP=ev;
}
if(qx.core.Environment.get(eq)){fP+=en;
}return {decorator:fP};
}},"spinner/textfield":{style:function(fQ){return {marginRight:2,padding:[2,4,1],textColor:fQ.disabled?cz:bc};
}},"spinner/upbutton":{alias:em,include:em,style:function(fR,fS){return {icon:dz,padding:[fS.padding[0]-1,fS.padding[1]-5],shadow:undefined,margin:0};
}},"spinner/downbutton":{alias:em,include:em,style:function(fT,fU){return {icon:bK,padding:[fU.padding[0]-1,fU.padding[1]-5],shadow:undefined,margin:0};
}},"datefield":dM,"datefield/button":{alias:eR,include:eR,style:function(fV){return {icon:eG,padding:[0,3],decorator:undefined};
}},"datefield/textfield":f,"datefield/list":{alias:bL,include:bL,style:function(fW){return {decorator:undefined};
}},"groupbox":{style:function(fX){return {legendPosition:cY};
}},"groupbox/legend":{alias:eo,style:function(fY){return {padding:[1,0,1,4],textColor:fY.invalid?B:E,font:eh};
}},"groupbox/frame":{style:function(ga){var gb=qx.core.Environment.get(el);
return {padding:gb?10:12,margin:gb?1:undefined,decorator:gb?dG:eC};
}},"check-groupbox":cv,"check-groupbox/legend":{alias:dE,include:dE,style:function(gc){return {padding:[1,0,1,4],textColor:gc.invalid?B:E,font:eh};
}},"radio-groupbox":cv,"radio-groupbox/legend":{alias:dH,include:dH,style:function(gd){return {padding:[1,0,1,4],textColor:gd.invalid?B:E,font:eh};
}},"scrollarea":{style:function(ge){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(gf){return {backgroundColor:A};
}},"scrollarea/pane":ep,"scrollarea/scrollbar-x":dO,"scrollarea/scrollbar-y":dO,"scrollbar":{style:function(gg){if(gg[ea]){return {};
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
}},"scrollbar/button":{alias:em,include:em,style:function(gn){var gq=dm;

if(gn.left){gq+=u;
}else if(gn.right){gq+=cR;
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
}else if(gs){gv=ew;
}else if(!gt&&gu&&!gs){gv=ey;
}else{gv=ev;
}
if(qx.core.Environment.get(eq)){gv+=en;
}return {decorator:gv};
}},"slider/knob":{include:em,style:function(gw){return {decorator:gw.disabled?dT:bx,shadow:undefined,height:14,width:14,padding:0};
}},"list":{alias:N,style:function(gx){var gB;
var gz=!!gx.focused;
var gA=!!gx.invalid;
var gy=!!gx.disabled;

if(gz&&gA&&!gy){gB=eu;
}else if(gz&&!gA&&!gy){gB=ez;
}else if(gy){gB=ew;
}else if(!gz&&gA&&!gy){gB=ey;
}else{gB=ev;
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
}},"tabview/bar":{alias:bR,style:function(gH){var gI=qx.core.Environment.get(el)&&qx.core.Environment.get(ek)&&qx.core.Environment.get(eq);
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
}}else{if(gQ.barTop){gX=eI;
gT=gS?[3,9]:[4,10];
gW=4;
gU=gQ.firstTab?5:1;
gV=1;
}else if(gQ.barBottom){gX=dq;
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
}else{gX=eJ;
gT=gS?[3,9]:[4,10];
gU=5;
gW=gQ.firstTab?5:1;
gR=1;
gV=1;
}}
if(gX&&gS){gX+=en;
}return {zIndex:gQ.checked?10:5,decorator:gX,padding:gT,marginTop:gW,marginBottom:gR,marginLeft:gU,marginRight:gV,textColor:gQ.disabled?cz:gQ.checked?bf:cI};
}},"tabview-page/button/label":{alias:cB,style:function(gY){return {padding:[0,1,0,1],margin:gY.focused?0:1,decorator:gY.focused?bs:undefined};
}},"tabview-page/button/close-button":{alias:eo,style:function(ha){return {icon:d};
}},"toolbar":{style:function(hb){var hc=qx.core.Environment.get(eq);
return {decorator:hc?be:dd,spacing:2};
}},"toolbar/part":{style:function(hd){return {decorator:dD,spacing:2};
}},"toolbar/part/container":{style:function(he){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hf){return {source:M,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:eo,style:function(hg){var hi;

if(hg.pressed||(hg.checked&&!hg.hovered)||(hg.checked&&hg.disabled)){hi=eD;
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

if(ht.selected&&ht.opened){hu=eE;
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
}},"tooltip":{include:ct,style:function(hG){return {backgroundColor:dA,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":eo,"tooltip-error":{include:eA,style:function(hH){var hI=qx.core.Environment.get(el)&&qx.core.Environment.get(ek);
return {textColor:cC,backgroundColor:undefined,placeMethod:ep,offset:[0,0,0,14],marginTop:-2,position:C,showTimeout:100,hideTimeout:10000,decorator:hI?K:dr,shadow:bS,font:eh,padding:hI?3:undefined};
}},"tooltip-error/atom":eo,"window":{style:function(hJ){var hL=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var hM;
var hK;

if(hL){if(hJ.showStatusbar){hM=dt;
}else{hM=dn;
}}else{hK=cM;
}return {decorator:hM,shadow:hK,contentPadding:[10,10,10,10],margin:hJ.maximized?0:[0,5,5,0]};
}},"window-resize-frame":{style:function(hN){var hO=qx.core.Environment.get(el);
var hP;

if(hO){if(hN.showStatusbar){hP=bp;
}else{hP=dV;
}}else{hP=ej;
}return {decorator:hP};
}},"window/pane":{style:function(hQ){var hR=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
return {decorator:hR?cS:cP};
}},"window/captionbar":{style:function(hS){var hT=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var hU=hS.active?ch:ed;

if(hT){hU+=en;
}return {decorator:hU,textColor:hS.active?dR:bF,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(hV){return {margin:[5,0,3,6]};
}},"window/title":{style:function(hW){return {alignY:cy,font:eh,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:eo,style:function(hX){return {icon:hX.active?hX.hovered?dQ:j:eF,margin:[4,8,2,0]};
}},"window/restore-button":{alias:eo,style:function(hY){return {icon:hY.active?hY.hovered?cO:db:i,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:eo,style:function(ia){return {icon:ia.active?ia.hovered?bh:cd:H,margin:[4,8,2,0]};
}},"window/close-button":{alias:eo,style:function(ib){return {icon:ib.active?ib.hovered?e:dW:cf,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(ic){var id=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
return {padding:[2,6],decorator:id?bt:dp,minHeight:18};
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
}else if(iq){it=ew;
}else if(!ir&&is&&!iq){it=ey;
}else{it=ev;
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
}else if(iD){iG=ew;
}else if(!iE&&iF&&!iD){iG=ey;
}else{iG=ev;
}
if(qx.core.Environment.get(eq)){iG+=en;
}return {decorator:iG};
}},"combobox/popup":ct,"combobox/list":{alias:dK},"combobox/button":{include:em,alias:em,style:function(iH,iI){var iJ={icon:cu,padding:[iI.padding[0],iI.padding[1]-6],shadow:undefined,margin:undefined};

if(iH.selected){iJ.decorator=bC;
}return iJ;
}},"combobox/textfield":{include:x,style:function(iK){return {decorator:undefined};
}},"menu":{style:function(iL){var iM=qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var iN={decorator:iM?br:ca,shadow:iM?undefined:bJ,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:iL.submenu||iL.contextmenu?de:dk};

if(iL.submenu){iN.position=C;
iN.offset=[-2,-3];
}return iN;
}},"menu/slidebar":eK,"menu-slidebar":ep,"menu-slidebar-button":{style:function(iO){var iP=iO.hovered?cx:undefined;

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
}},"menu-checkbox":{alias:et,include:et,style:function(ja){return {icon:!ja.checked?undefined:ja.selected?L:cs};
}},"menu-radiobutton":{alias:et,include:et,style:function(jb){return {icon:!jb.checked?undefined:jb.selected?cV:cn};
}},"menubar":{style:function(jc){var jd=qx.core.Environment.get(eq);
return {decorator:jd?dB:dP};
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
}},"colorpopup/colorselector-cancelbutton":{alias:ei,include:ei,style:function(jq){return {icon:eH};
}},"table":{alias:ep,style:function(jr){return {decorator:bm};
}},"table/statusbar":{style:function(js){return {decorator:eb,padding:[0,2]};
}},"table/column-button":{alias:em,style:function(jt){var ju=qx.core.Environment.get(eq);
return {decorator:ju?bd:bA,padding:3,icon:cm};
}},"table-column-reset-button":{include:et,alias:et,style:function(){return {icon:t};
}},"table-scroller":ep,"table-scroller/scrollbar-x":dO,"table-scroller/scrollbar-y":dO,"table-scroller/header":{style:function(jv){var jw=qx.core.Environment.get(eq);
return {decorator:jw?bd:bA};
}},"table-scroller/pane":{style:function(jx){return {backgroundColor:dX};
}},"table-scroller/focus-indicator":{style:function(jy){return {decorator:bT};
}},"table-scroller/resize-line":{style:function(jz){return {backgroundColor:cN,width:2};
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
}},"app-header":{style:function(jK){return {font:eh,textColor:cC,padding:[8,12],decorator:cK};
}},"app-header-label":cB,"virtual-list":dK,"virtual-list/row-layer":cJ,"row-layer":ep,"group-item":{include:cB,alias:cB,style:function(jL){return {padding:4,decorator:qx.core.Environment.get(eq)?eB:eM,textColor:bg,font:eh};
}},"virtual-selectbox":D,"virtual-selectbox/dropdown":ct,"virtual-selectbox/dropdown/list":{alias:eQ},"virtual-combobox":dM,"virtual-combobox/dropdown":ct,"virtual-combobox/dropdown/list":{alias:eQ},"virtual-tree":{include:bb,alias:bb,style:function(jM){return {itemHeight:26};
}},"virtual-tree-folder":cL,"virtual-tree-file":cr,"column-layer":ep,"cell":{style:function(jN){return {textColor:jN.selected?cC:eT,padding:[3,6],font:T};
}},"cell-string":ex,"cell-number":{include:ex,style:function(jO){return {textAlign:eS};
}},"cell-image":ex,"cell-boolean":{include:ex,style:function(jP){return {iconTrue:bX,iconFalse:di};
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
(function(){var d="qx.ui.decoration.MBackgroundColor",c="Color",b="_applyBackgroundColor",a="";
qx.Mixin.define(d,{properties:{backgroundColor:{check:c,nullable:true,apply:b}},members:{_tintBackgroundColor:function(e,f,g){if(f==null){f=this.getBackgroundColor();
}{f=qx.theme.manager.Color.getInstance().resolve(f);
};
g.backgroundColor=f||a;
},_resizeBackgroundColor:function(h,i,j){var k=this.getInsets();
i-=k.left+k.right;
j-=k.top+k.bottom;
return {left:k.left,top:k.top,width:i,height:j};
},_applyBackgroundColor:function(){}}});
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
}else if(this.isRgbString(m)){return this.__ie();
}else if(this.isHex3String(m)){return this.__ig();
}else if(this.isHex6String(m)){return this.__ih();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__ie();
}else if(this.isRgbaString(n)){return this.__if();
}else if(this.isHex3String(n)){return this.__ig();
}else if(this.isHex6String(n)){return this.__ih();
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
},__ie:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__if:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__ig:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__ih:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__ig(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__ih(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__ig(P);
}
if(this.isHex6String(P)){return this.__ih(P);
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
(function(){var k="px",j="div",i="img",h="",g="engine.name",f="no-repeat",d="scale-x",c="scale",b="mshtml",a="b64",I="scale-y",H="qx/icon",G="repeat",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',r="qx.bom.element.Decoration",s="', sizingMethod='",p='"/>',q="png",n="')",o='"></div>',l='" style="',m="none",t="webkit",u=" ",w="repeat-x",v="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(r,{statics:{DEBUG:false,__hF:{},__hG:(qx.core.Environment.get(g)==b)&&qx.core.Environment.get(D)<9,__hH:qx.core.Environment.select(g,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hI:{"scale-x":i,"scale-y":i,"scale":i,"repeat":j,"no-repeat":j,"repeat-x":j,"repeat-y":j},update:function(J,K,L,M){var O=this.getTagName(L,K);

if(O!=J.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var P=this.getAttributes(K,L,M);

if(O===i){J.src=P.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(J.style.backgroundPosition!=h&&P.style.backgroundPosition===undefined){P.style.backgroundPosition=null;
}if(J.style.clip!=h&&P.style.clip===undefined){P.style.clip=null;
}var N=qx.bom.element.Style;
N.setStyles(J,P.style);
if(this.__hG){try{J.filters[v].apply();
}catch(e){}}},create:function(Q,R,S){var T=this.getTagName(R,Q);
var V=this.getAttributes(Q,R,S);
var U=qx.bom.element.Style.compile(V.style);

if(T===i){return z+V.src+l+U+p;
}else{return B+U+o;
}},getTagName:function(W,X){if(X&&this.__hG&&this.__hH[W]&&qx.lang.String.endsWith(X,F)){return j;
}return this.__hI[W];
},getAttributes:function(Y,ba,bb){if(!bb){bb={};
}
if(!bb.position){bb.position=x;
}
if((qx.core.Environment.get(g)==b)){bb.fontSize=0;
bb.lineHeight=0;
}else if((qx.core.Environment.get(g)==t)){bb.WebkitUserDrag=m;
}var bd=qx.util.ResourceManager.getInstance().getImageFormat(Y)||qx.io.ImageLoader.getFormat(Y);
var bc;
if(this.__hG&&this.__hH[ba]&&bd===q){bc=this.__hL(bb,ba,Y);
}else{if(ba===c){bc=this.__hM(bb,ba,Y);
}else if(ba===d||ba===I){bc=this.__hN(bb,ba,Y);
}else{bc=this.__hQ(bb,ba,Y);
}}return bc;
},__hJ:function(be,bf,bh){if(be.width==null&&bf!=null){be.width=bf+k;
}
if(be.height==null&&bh!=null){be.height=bh+k;
}return be;
},__hK:function(bi){var bj=qx.util.ResourceManager.getInstance().getImageWidth(bi)||qx.io.ImageLoader.getWidth(bi);
var bk=qx.util.ResourceManager.getInstance().getImageHeight(bi)||qx.io.ImageLoader.getHeight(bi);
return {width:bj,height:bk};
},__hL:function(bl,bm,bn){var bq=this.__hK(bn);
bl=this.__hJ(bl,bq.width,bq.height);
var bp=bm==f?E:c;
var bo=C+qx.util.ResourceManager.getInstance().toUri(bn)+s+bp+n;
bl.filter=bo;
bl.backgroundImage=bl.backgroundRepeat=h;
return {style:bl};
},__hM:function(br,bs,bt){var bu=qx.util.ResourceManager.getInstance().toUri(bt);
var bv=this.__hK(bt);
br=this.__hJ(br,bv.width,bv.height);
return {src:bu,style:br};
},__hN:function(bw,bx,by){var bz=qx.util.ResourceManager.getInstance();
var bC=bz.getCombinedFormat(by);
var bE=this.__hK(by);
var bA;

if(bC){var bD=bz.getData(by);
var bB=bD[4];

if(bC==a){bA=bz.toDataUri(by);
}else{bA=bz.toUri(bB);
}
if(bx===d){bw=this.__hO(bw,bD,bE.height);
}else{bw=this.__hP(bw,bD,bE.width);
}return {src:bA,style:bw};
}else{if(bx==d){bw.height=bE.height==null?null:bE.height+k;
}else if(bx==I){bw.width=bE.width==null?null:bE.width+k;
}bA=bz.toUri(by);
return {src:bA,style:bw};
}},__hO:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().getImageHeight(bG[4]);
bF.clip={top:-bG[6],height:bH};
bF.height=bI+k;
if(bF.top!=null){bF.top=(parseInt(bF.top,10)+bG[6])+k;
}else if(bF.bottom!=null){bF.bottom=(parseInt(bF.bottom,10)+bH-bI-bG[6])+k;
}return bF;
},__hP:function(bJ,bK,bL){var bM=qx.util.ResourceManager.getInstance().getImageWidth(bK[4]);
bJ.clip={left:-bK[5],width:bL};
bJ.width=bM+k;
if(bJ.left!=null){bJ.left=(parseInt(bJ.left,10)+bK[5])+k;
}else if(bJ.right!=null){bJ.right=(parseInt(bJ.right,10)+bL-bM-bK[5])+k;
}return bJ;
},__hQ:function(bN,bO,bP){var bS=qx.util.ResourceManager.getInstance();
var bX=bS.getCombinedFormat(bP);
var ca=this.__hK(bP);
if(bX&&bO!==G){var bY=bS.getData(bP);
var bW=bY[4];

if(bX==a){var bV=bS.toDataUri(bP);
var bU=0;
var bT=0;
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
}else{bN=this.__hJ(bN,ca.width,ca.height);
bN=this.__hR(bN,bP,bO);
return {style:bN};
}},__hR:function(cb,cc,cd){var top=null;
var ch=null;

if(cb.backgroundPosition){var ce=cb.backgroundPosition.split(u);
ch=parseInt(ce[0],10);

if(isNaN(ch)){ch=ce[0];
}top=parseInt(ce[1],10);

if(isNaN(top)){top=ce[1];
}}var cg=qx.bom.element.Background.getStyles(cc,cd,ch,top);

for(var cf in cg){cb[cf]=cg[cf];
}if(cb.filter){cb.filter=h;
}return cb;
},__hS:function(ci){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ci)&&ci.indexOf(H)==-1){if(!this.__hF[ci]){qx.log.Logger.debug("Potential clipped image candidate: "+ci);
this.__hF[ci]=true;
}}},isAlphaImageLoaderEnabled:function(){return qx.bom.element.Decoration.__hG;
}}});
})();
(function(){var c="html.image.naturaldimensions",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__cP:{},__hT:{width:null,height:null},__hU:/\.(png|gif|jpg|jpeg|bmp)\b/i,__hV:/^data:image\/(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__cP[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__cP[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__cP[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__cP[k];

if(!m||!m.format){var o=this.__hV.exec(k);

if(o!=null){var p=(m&&qx.lang.Type.isNumber(m.width)?m.width:this.__hT.width);
var n=(m&&qx.lang.Type.isNumber(m.height)?m.height:this.__hT.height);
m={loaded:true,format:o[1],width:p,height:n};
}}return m?m.format:null;
},getSize:function(q){var r=this.__cP[q];
return r?{width:r.width,height:r.height}:this.__hT;
},getWidth:function(s){var t=this.__cP[s];
return t?t.width:null;
},getHeight:function(u){var v=this.__cP[u];
return v?v.height:null;
},load:function(w,x,y){var z=this.__cP[w];

if(!z){z=this.__cP[w]={};
}if(x&&!y){y=window;
}if(z.loaded||z.loading||z.failed){if(x){if(z.loading){z.callbacks.push(x,y);
}else{x.call(y,w,z);
}}}else{z.loading=true;
z.callbacks=[];

if(x){z.callbacks.push(x,y);
}var B=new Image();
var A=qx.lang.Function.listener(this.__hW,this,B,w);
B.onload=A;
B.onerror=A;
B.src=w;
z.element=B;
}},abort:function(C){var D=this.__cP[C];

if(D&&!D.loaded){D.aborted=true;
var F=D.callbacks;
var E=D.element;
E.onload=E.onerror=null;
delete D.callbacks;
delete D.element;
delete D.loading;

for(var i=0,l=F.length;i<l;i+=2){F[i].call(F[i+1],C,D);
}}this.__cP[C]=null;
},__hW:qx.event.GlobalError.observeMethod(function(event,G,H){var I=this.__cP[H];
if(event.type===b){I.loaded=true;
I.width=this.__hX(G);
I.height=this.__hY(G);
var J=this.__hU.exec(H);

if(J!=null){I.format=J[1];
}}else{I.failed=true;
}G.onload=G.onerror=null;
var K=I.callbacks;
delete I.loading;
delete I.callbacks;
delete I.element;
for(var i=0,l=K.length;i<l;i+=2){K[i].call(K[i+1],H,I);
}}),__hX:function(L){return qx.core.Environment.get(c)?L.naturalWidth:L.width;
},__hY:function(M){return qx.core.Environment.get(c)?M.naturalHeight:M.height;
}}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__ia:[n,null,m,i,null,r,k,null,r],__ib:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ic:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__id:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__ic(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__id(G)){G=q+G+q;
}var H=this.__ia;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__ib;
}var L=this.__ic(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__id(N)){O=j+N+p;
}else{O=f+N+e;
}var M={backgroundPosition:L,backgroundImage:O};

if(J!=null){M.backgroundRepeat=J;
}return M;
},set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);

for(var U in T){P.style[U]=T[U];
}}}});
})();
(function(){var j="solid",i="_applyStyle",h="double",g="px ",f="dotted",e="_applyWidth",d="Color",c="",b="dashed",a="Number",D=" ",C="shorthand",B="widthTop",A="styleRight",z="styleBottom",y="widthBottom",x="widthLeft",w="styleTop",v="colorBottom",u="styleLeft",q="widthRight",r="colorLeft",o="colorRight",p="colorTop",m="border-top",n="border-left",k="border-right",l="qx.ui.decoration.MSingleBorder",s="border-bottom",t="absolute";
qx.Mixin.define(l,{properties:{widthTop:{check:a,init:0,apply:e},widthRight:{check:a,init:0,apply:e},widthBottom:{check:a,init:0,apply:e},widthLeft:{check:a,init:0,apply:e},styleTop:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleRight:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleBottom:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleLeft:{nullable:true,check:[j,f,b,h],init:j,apply:i},colorTop:{nullable:true,check:d,apply:i},colorRight:{nullable:true,check:d,apply:i},colorBottom:{nullable:true,check:d,apply:i},colorLeft:{nullable:true,check:d,apply:i},left:{group:[x,u,r]},right:{group:[q,A,o]},top:{group:[B,w,p]},bottom:{group:[y,z,v]},width:{group:[B,q,y,x],mode:C},style:{group:[w,A,z,u],mode:C},color:{group:[p,o,v,r],mode:C}},members:{_styleBorder:function(E){{var G=qx.theme.manager.Color.getInstance();
var K=G.resolve(this.getColorTop());
var H=G.resolve(this.getColorRight());
var F=G.resolve(this.getColorBottom());
var J=G.resolve(this.getColorLeft());
};
var I=this.getWidthTop();

if(I>0){E[m]=I+g+this.getStyleTop()+D+(K||c);
}var I=this.getWidthRight();

if(I>0){E[k]=I+g+this.getStyleRight()+D+(H||c);
}var I=this.getWidthBottom();

if(I>0){E[s]=I+g+this.getStyleBottom()+D+(F||c);
}var I=this.getWidthLeft();

if(I>0){E[n]=I+g+this.getStyleLeft()+D+(J||c);
}E.position=t;
E.top=0;
E.left=0;
},_resizeBorder:function(L,M,N){var O=this.getInsets();
M-=O.left+O.right;
N-=O.top+O.bottom;
if(M<0){M=0;
}
if(N<0){N=0;
}return {left:O.left-this.getWidthLeft(),top:O.top-this.getWidthTop(),width:M,height:N};
},_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_applyWidth:function(){this._applyStyle();
this._resetInsets();
},_applyStyle:function(){}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__cY:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__cY=null;
},getInsets:function(){if(this.__cY){return this.__cY;
}var j=this._getDefaultInsets();
return this.__cY={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){this.__cY=null;
}},destruct:function(){this.__cY=null;
}});
})();
(function(){var b="px",a="qx.ui.decoration.Single";
qx.Class.define(a,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder],construct:function(c,d,e){qx.ui.decoration.Abstract.call(this);
if(c!=null){this.setWidth(c);
}
if(d!=null){this.setStyle(d);
}
if(e!=null){this.setColor(e);
}},members:{_markup:null,getMarkup:function(){if(this._markup){return this._markup;
}var f={};
this._styleBorder(f);
var g=this._generateBackgroundMarkup(f);
return this._markup=g;
},resize:function(h,i,j){var k=this._resizeBorder(h,i,j);
h.style.width=k.width+b;
h.style.height=k.height+b;
h.style.left=k.left+b;
h.style.top=k.top+b;
},tint:function(l,m){this._tintBackgroundColor(l,m,l.style);
},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
}},destruct:function(){this._markup=null;
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
(function(){var c="px",b="qx.ui.decoration.Background",a="absolute";
qx.Class.define(b,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(d){qx.ui.decoration.Abstract.call(this);

if(d!=null){this.setBackgroundColor(d);
}},members:{__rT:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__rT;
},getMarkup:function(){if(this.__rT){return this.__rT;
}var e={position:a,top:0,left:0};
var f=this._generateBackgroundMarkup(e);
return this.__rT=f;
},resize:function(g,h,i){var j=this.getInsets();
g.style.width=(h-j.left-j.right)+c;
g.style.height=(i-j.top-j.bottom)+c;
g.style.left=-j.left+c;
g.style.top=-j.top+c;
},tint:function(k,l){this._tintBackgroundColor(k,l,k.style);
}},destruct:function(){this.__rT=null;
}});
})();
(function(){var j='"></div>',i="_applyStyle",h="1px",g='<div style="',f='border:',e="1px solid ",d="Color",c=";",b="px",a='</div>',x="qx.ui.decoration.Beveled",w="css.boxmodel",v='<div style="position:absolute;top:1px;left:1px;',u='border-bottom:',t='border-right:',s="",r="content",q='border-left:',p='border-top:',o="Number",m='<div style="position:absolute;top:1px;left:0px;',n='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(x,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(y,z,A){qx.ui.decoration.Abstract.call(this);
if(y!=null){this.setOuterColor(y);
}
if(z!=null){this.setInnerColor(z);
}
if(A!=null){this.setInnerOpacity(A);
}},properties:{innerColor:{check:d,nullable:true,apply:i},innerOpacity:{check:o,init:1,apply:i},outerColor:{check:d,nullable:true,apply:i}},members:{__rT:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__rT;
},_applyStyle:function(){},getMarkup:function(){if(this.__rT){return this.__rT;
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
return this.__rT=C.join(s);
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
}},destruct:function(){this.__rT=null;
}});
})();
(function(){var j="_applyLinearBackgroundGradient",i=" ",h=")",g="horizontal",f=",",e=" 0",d="px",c="0",b="shorthand",a="Color",D="vertical",C="Number",B="%",A="),to(",z="from(",y="background-image",x="background",w="browser.name",v="-webkit-gradient(linear,",u="startColorPosition",q="deg, ",r="css.gradient.legacywebkit",o="startColor",p="ie",m="",n="qx.ui.decoration.MLinearBackgroundGradient",k="(",l="endColorPosition",s="css.gradient.linear",t="endColor";
qx.Mixin.define(n,{properties:{startColor:{check:a,nullable:true,apply:j},endColor:{check:a,nullable:true,apply:j},orientation:{check:[g,D],init:D,apply:j},startColorPosition:{check:C,init:0,apply:j},endColorPosition:{check:C,init:100,apply:j},colorPositionUnit:{check:[d,B],init:B,apply:j},gradientStart:{group:[o,u],mode:b},gradientEnd:{group:[t,l],mode:b}},members:{_styleLinearBackgroundGradient:function(E){{var H=qx.theme.manager.Color.getInstance();
var O=H.resolve(this.getStartColor());
var J=H.resolve(this.getEndColor());
};
var P=this.getColorPositionUnit();
if(qx.core.Environment.get(r)){P=P===d?m:P;

if(this.getOrientation()==g){var N=this.getStartColorPosition()+P+e+P;
var L=this.getEndColorPosition()+P+e+P;
}else{var N=c+P+i+this.getStartColorPosition()+P;
var L=c+P+i+this.getEndColorPosition()+P;
}var K=z+O+A+J+h;
var I=v+N+f+L+f+K+h;
E[x]=I;
}else{var Q=this.getOrientation()==g?0:270;
if(qx.core.Environment.get(w)==p){Q=Q-90;
}var G=O+i+this.getStartColorPosition()+P;
var F=J+i+this.getEndColorPosition()+P;
var M=qx.core.Environment.get(s);
E[y]=M+k+Q+q+G+f+F+h;
}},_resizeLinearBackgroundGradient:function(R,S,T){var U=this.getInsets();
S-=U.left+U.right;
T-=U.top+U.bottom;
return {left:U.left,top:U.top,width:S,height:T};
},_applyLinearBackgroundGradient:function(){}}});
})();
(function(){var j="Number",i="_applySlices",h="Please verify the image '",g="_applyInsets",f="' is present.",e="-l",d="set",c="-t",b="-r",a="-b",A="shorthand",z="insetTop",y="insetBottom",x="sliceBottom",w="_applyFill",v="The value of the property 'rightSlice' is null! ",u="sliceLeft",t="_applyBaseImage",s="sliceRight",r="The value of the property 'bottomSlice' is null! ",p="String",q="The value of the property 'leftSlice' is null! ",n="insetRight",o="sliceTop",l="The value of the property 'topSlice' is null! ",m="insetLeft",k="qx.ui.decoration.Grid";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(B,C){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__rU=new qx.ui.decoration.css3.BorderImage();

if(B){this.__rV(B);
}}else{this.__rU=new qx.ui.decoration.GridDiv(B);
}
if(C!=null){this.__rU.setInsets(C);
}},properties:{baseImage:{check:p,nullable:true,apply:t},insetLeft:{check:j,nullable:true,apply:g},insetRight:{check:j,nullable:true,apply:g},insetBottom:{check:j,nullable:true,apply:g},insetTop:{check:j,nullable:true,apply:g},insets:{group:[z,n,y,m],mode:A},sliceLeft:{check:j,nullable:true,apply:i},sliceRight:{check:j,nullable:true,apply:i},sliceBottom:{check:j,nullable:true,apply:i},sliceTop:{check:j,nullable:true,apply:i},slices:{group:[o,s,x,u],mode:A},fill:{apply:w}},members:{__rU:null,getMarkup:function(){return this.__rU.getMarkup();
},resize:function(D,E,F){this.__rU.resize(D,E,F);
},tint:function(G,H){},getInsets:function(){return this.__rU.getInsets();
},_applyInsets:function(I,J,name){var K=d+qx.lang.String.firstUp(name);
this.__rU[K](I);
},_applySlices:function(L,M,name){var N=d+qx.lang.String.firstUp(name);
if(this.__rU[N]){this.__rU[N](L);
}},_applyFill:function(O,P,name){if(this.__rU.setFill){this.__rU.setFill(O);
}},_applyBaseImage:function(Q,R){if(this.__rU instanceof qx.ui.decoration.GridDiv){this.__rU.setBaseImage(Q);
}else{this.__rV(Q);
}},__rV:function(S){this.__rU.setBorderImage(S);
var bd=qx.util.AliasManager.getInstance().resolve(S);
var be=/(.*)(\.[a-z]+)$/.exec(bd);
var Y=be[1];
var bc=be[2];
var V=qx.util.ResourceManager.getInstance();
var bf=V.getImageHeight(Y+c+bc);
var T=V.getImageWidth(Y+b+bc);
var U=V.getImageHeight(Y+a+bc);
var bg=V.getImageWidth(Y+e+bc);

if(false&&!this.__rU instanceof qx.ui.decoration.css3.BorderImage){var W=l+h+Y+c+bc+f;
var X=v+h+Y+b+bc+f;
var bb=r+h+Y+a+bc+f;
var ba=q+h+Y+e+bc+f;
qx.core.Assert.assertNotNull(bf,W);
qx.core.Assert.assertNotNull(T,X);
qx.core.Assert.assertNotNull(U,bb);
qx.core.Assert.assertNotNull(bg,ba);
}
if(bf&&T&&U&&bg){this.__rU.setSlice([bf,T,U,bg]);
}}},destruct:function(){this.__rU.dispose();
this.__rU=null;
}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="",c="round",b="shorthand",a="css.borderimage.standardsyntax",C="Boolean",B="px ",A="sliceBottom",z="solid",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t=" fill",q="String",r="qx.ui.decoration.css3.BorderImage",o="border-box",p='") ',m="sliceTop",n='url("',k="hidden",l="repeatY",s="absolute";
qx.Class.define(r,{extend:qx.ui.decoration.Abstract,construct:function(D,E){qx.ui.decoration.Abstract.call(this);
if(D!=null){this.setBorderImage(D);
}
if(E!=null){this.setSlice(E);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:q,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[m,v,A,w],mode:b},repeatX:{check:[i,e,c],init:i,apply:j},repeatY:{check:[i,e,c],init:i,apply:j},repeat:{group:[u,l],mode:b},fill:{check:C,init:true}},members:{__rT:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__rT;
},getMarkup:function(){if(this.__rT){return this.__rT;
}var F=this._resolveImageUrl(this.getBorderImage());
var G=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var H=[this.getRepeatX(),this.getRepeatY()].join(f);
var I=this.getFill()&&qx.core.Environment.get(a)?t:d;
this.__rT=[x,qx.bom.element.Style.compile({"borderImage":n+F+p+G.join(f)+I+f+H,"borderStyle":z,position:s,lineHeight:0,fontSize:0,overflow:k,boxSizing:o,borderWidth:G.join(B)+g}),y].join(d);
return this.__rT;
},resize:function(J,K,L){J.style.width=K+g;
J.style.height=L+g;
},tint:function(M,N){},_applyStyle:function(O,P,name){},_resolveImageUrl:function(Q){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(Q));
}},destruct:function(){this.__rT=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="engine.version",e="scale-x",d="scale-y",c="-tr",b="-l",a='</div>',z="scale",y="-br",x="-t",w="browser.quirksmode",v="-tl",u="-r",t='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',s="_applyBaseImage",r="-b",q="String",o="",p="-bl",m="qx.ui.decoration.GridDiv",n="-c",k="mshtml",l="engine.name";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,construct:function(A,B){qx.ui.decoration.Abstract.call(this);
if(A!=null){this.setBaseImage(A);
}
if(B!=null){this.setInsets(B);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{_markup:null,_images:null,_edges:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this._markup;
},getMarkup:function(){if(this._markup){return this._markup;
}var C=qx.bom.element.Decoration;
var D=this._images;
var E=this._edges;
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
return this._markup=F.join(o);
},resize:function(G,H,I){var J=this._edges;
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
var O=this._images={tl:Q+v+P,t:Q+x+P,tr:Q+c+P,bl:Q+p+P,b:Q+r+P,br:Q+y+P,l:Q+b+P,c:Q+n+P,r:Q+u+P};
this._edges=this._computeEdgeSizes(O);
}},_resolveImageUrl:function(T){return qx.util.AliasManager.getInstance().resolve(T);
},_computeEdgeSizes:function(U){var V=qx.util.ResourceManager.getInstance();
return {top:V.getImageHeight(U.t),bottom:V.getImageHeight(U.b),left:V.getImageWidth(U.l),right:V.getImageWidth(U.r)};
}},destruct:function(){this._markup=this._images=this._edges=null;
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
(function(){var j="px ",i=" ",h='',g="Color",f="Number",e="border-top",d="border-left",c="border-bottom",b="border-right",a="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",u="innerColorTop",t="relative",q="browser.documentmode",r="innerColorLeft",o="qx.ui.decoration.MDoubleBorder",p="left",m="engine.version",n="innerWidthBottom",k="innerWidthLeft",l="position",s="absolute";
qx.Mixin.define(o,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__sb;
this._resizeBorder=this.__sa;
this._styleBorder=this.__rX;
this._generateMarkup=this.__rY;
},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[w,z,n,k],mode:a},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[u,v,x,r],mode:a}},members:{__rW:null,__rX:function(D){{var F=qx.theme.manager.Color.getInstance();
var G=F.resolve(this.getInnerColorTop());
var J=F.resolve(this.getInnerColorRight());
var H=F.resolve(this.getInnerColorBottom());
var I=F.resolve(this.getInnerColorLeft());
};
D.position=t;
var E=this.getInnerWidthTop();

if(E>0){D[e]=E+j+this.getStyleTop()+i+G;
}var E=this.getInnerWidthRight();

if(E>0){D[b]=E+j+this.getStyleRight()+i+J;
}var E=this.getInnerWidthBottom();

if(E>0){D[c]=E+j+this.getStyleBottom()+i+H;
}var E=this.getInnerWidthLeft();

if(E>0){D[d]=E+j+this.getStyleLeft()+i+I;
}},__rY:function(K){var O=this._generateBackgroundMarkup(K);
{var M=qx.theme.manager.Color.getInstance();
var R=M.resolve(this.getColorTop());
var N=M.resolve(this.getColorRight());
var L=M.resolve(this.getColorBottom());
var Q=M.resolve(this.getColorLeft());
};
K[e]=h;
K[b]=h;
K[c]=h;
K[d]=h;
K[C]=0;
if((qx.core.Environment.get(B)==A&&parseFloat(qx.core.Environment.get(m))<8)||(qx.core.Environment.get(B)==A&&qx.core.Environment.get(q)<8)){K[C]=h;
}var P=this.getWidthTop();

if(P>0){K[e]=P+j+this.getStyleTop()+i+R;
}var P=this.getWidthRight();

if(P>0){K[b]=P+j+this.getStyleRight()+i+N;
}var P=this.getWidthBottom();

if(P>0){K[c]=P+j+this.getStyleBottom()+i+L;
}var P=this.getWidthLeft();

if(P>0){K[d]=P+j+this.getStyleLeft()+i+Q;
}K[l]=s;
K[y]=0;
K[p]=0;
return this.__rW=this._generateBackgroundMarkup(K,O);
},__sa:function(S,T,U){var V=this.getInsets();
T-=V.left+V.right;
U-=V.top+V.bottom;
var W=V.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=V.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:W,top:top,width:T,height:U,elementToApplyDimensions:S.firstChild};
},__sb:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var k="_applyBoxShadow",j="px ",i="Integer",h="shadowHorizontalLength",g="box-shadow",f="-webkit-box-shadow",e="shadowVerticalLength",d="-moz-box-shadow",c="shorthand",b="qx.ui.decoration.MBoxShadow",a="Color";
qx.Mixin.define(b,{properties:{shadowHorizontalLength:{nullable:true,check:i,apply:k},shadowVerticalLength:{nullable:true,check:i,apply:k},shadowBlurRadius:{nullable:true,check:i,apply:k},shadowColor:{nullable:true,check:a,apply:k},shadowLength:{group:[h,e],mode:c}},members:{_styleBoxShadow:function(l){{var m=qx.theme.manager.Color.getInstance();
var p=m.resolve(this.getShadowColor());
};

if(p!=null){var q=this.getShadowVerticalLength()||0;
var n=this.getShadowHorizontalLength()||0;
var blur=this.getShadowBlurRadius()||0;
var o=n+j+q+j+blur+j+p;
l[d]=o;
l[f]=o;
l[g]=o;
}},_applyBoxShadow:function(){}}});
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


qx.$$loader.init();

