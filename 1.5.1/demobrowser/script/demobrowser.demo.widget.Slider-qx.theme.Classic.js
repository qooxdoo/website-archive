(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"locale":"en","locale.variant":"US","qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.widget.Slider","qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.theme":"qx.theme.Classic"};
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
  packages : {"0":{"uris":["__out__:demobrowser.demo.widget.Slider-qx.theme.Classic.05c2a4ae51de.js"]}},
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

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"EEE d.","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"EEE, d.M.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMd":"d. MMM y","cldr_date_time_format_yMd":"d.M.y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Jun","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"Tag","dayperiod":"Tageshälfte","era":"Epoche","hour":"Stunde","minute":"Minute","month":"Monat","quotationEnd":"“","quotationStart":"„","second":"Sekunde","week":"Woche","weekday":"Wochentag","year":"Jahr","zone":"Zone"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"EEE d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"EEE d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d/M/yyyy","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_abbreviated_1":"janv.","cldr_month_stand-alone_abbreviated_10":"oct.","cldr_month_stand-alone_abbreviated_11":"nov.","cldr_month_stand-alone_abbreviated_12":"déc.","cldr_month_stand-alone_abbreviated_2":"févr.","cldr_month_stand-alone_abbreviated_3":"mars","cldr_month_stand-alone_abbreviated_4":"avr.","cldr_month_stand-alone_abbreviated_7":"juil.","cldr_month_stand-alone_abbreviated_9":"sept.","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"jour","dayperiod":"cadran","era":"ère","hour":"heure","minute":"minute","month":"mois","quotationEnd":"»","quotationStart":"«","second":"seconde","week":"semaine","weekday":"jour de la semaine","year":"année","zone":"fuseau horaire"},"fr_FR":{}},"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};
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
(function(){var g="",f="qx.core.BaseInit",d="engine.name",c="os.name",b="engine.version",a="demobrowser.demo.widget.Slider";
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
(function(){var n="left",m="bottom",l="center",k="vertical",j="Max: ",h="changeValue",g="horizontal",f="top",d="middle",c="demobrowser.demo.widget.Slider",a="Min: ",b="right";
qx.Class.define(c,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);
this.getRoot().add(this._createVerticalLayout(),{left:20,top:20});
this.getRoot().add(this._createHorizontalLayout(),{left:20,top:340});
},_createVerticalLayout:function(){var p=[];
p.push(this._createSliderGroup(new qx.ui.form.Slider().set({maximum:1000,value:100})));
p.push(this._createSliderGroup(new qx.ui.form.Slider().set({minimum:-100,maximum:100,singleStep:5,pageStep:20,value:0})));
p.push(this._createSliderGroup(new qx.ui.form.Slider().set({minimum:-600,maximum:-200,singleStep:10,pageStep:50,value:-300})));
p.push(this._createSliderGroup(new qx.ui.form.Slider().set({minimum:25,maximum:75,singleStep:5,pageStep:10,value:25})));
var q=new qx.ui.layout.Grid();
var o=new qx.ui.container.Composite(q);
o.setPadding(20);
o.setWidth(530);
o.setHeight(300);
q.setSpacing(5);
q.setRowFlex(0,1);
q.setRowFlex(1,1);
q.setRowFlex(2,1);
q.setRowAlign(0,n,f);
q.setRowAlign(1,n,d);
q.setRowAlign(2,n,m);
var s=0;

for(var i=0;i<p.length;i++){var r=p[i];
r.slider.setOrientation(k);
o.add(r.slider,{row:0,column:s,rowSpan:3,colSpan:1});
o.add(r.minimum,{row:0,column:s+1});
o.add(r.value,{row:1,column:s+1});
o.add(r.maximum,{row:2,column:s+1});
q.setColumnMinWidth(s+1,80);
q.setColumnWidth(s+2,20);
s+=3;
}return o;
},_createHorizontalLayout:function(){var u=[];
u.push(this._createSliderGroup(new qx.ui.form.Slider().set({maximum:1000,value:100})));
u.push(this._createSliderGroup(new qx.ui.form.Slider().set({minimum:-100,maximum:100,singleStep:5,pageStep:20,value:0})));
u.push(this._createSliderGroup(new qx.ui.form.Slider().set({minimum:-600,maximum:-200,singleStep:10,pageStep:50,value:-300})));
u.push(this._createSliderGroup(new qx.ui.form.Slider().set({minimum:25,maximum:75,singleStep:5,pageStep:10,value:25})));
var v=new qx.ui.layout.Grid();
var t=new qx.ui.container.Composite(v);
t.setPadding(20);
t.setWidth(400);
t.setHeight(400);
v.setSpacing(5);
v.setColumnFlex(0,1);
v.setColumnFlex(1,1);
v.setColumnFlex(2,1);
v.setColumnAlign(0,n,m);
v.setColumnAlign(1,l,m);
v.setColumnAlign(2,b,m);
var x=0;

for(var i=0;i<u.length;i++){var w=u[i];
w.slider.setOrientation(g);
w.value.setWidth(100);
w.value.setTextAlign(l);
t.add(w.minimum,{row:x,column:0});
t.add(w.value,{row:x,column:1});
t.add(w.maximum,{row:x,column:2});
t.add(w.slider,{row:x+1,column:0,colSpan:3,rowSpan:1});
v.setRowHeight(x+2,20);
x+=3;
}return t;
},_createSliderGroup:function(y){var z={slider:y,minimum:new qx.ui.basic.Label(a+y.getMinimum().toString()),maximum:new qx.ui.basic.Label(j+y.getMaximum().toString()),value:new qx.ui.basic.Label(y.getValue().toString())};
y.addListener(h,function(e){z.value.setValue(y.getValue().toString());
});
return z;
}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(b){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(c){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(e){return arguments.length==1;
},getPageStep:function(){}}});
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
}},members:{__kG:null,_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
},_isInitialized:function(){return !!this.__kG;
},getMarkup:function(j){if(this.__kG){return this.__kG;
}var k={};
this._styleBorder(k);
return this.__kG=this._generateMarkup(k);
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
}
if(l.firstChild){l.firstChild.style.width=innerWidth+e;
l.firstChild.style.height=innerHeight+e;
}l.style.left=(q.left-this.getWidthLeft()-this.getInnerWidthLeft())+e;
l.style.top=(q.top-this.getWidthTop()-this.getInnerWidthTop())+e;
},tint:function(u,v){this._tintBackgroundColor(u,v,u.style);
}},destruct:function(){this.__kG=null;
}});
})();
(function(){var j='"></div>',i="_applyStyle",h="1px",g='<div style="',f='border:',e="1px solid ",d="Color",c=";",b="px",a='</div>',y="qx.ui.decoration.Beveled",x="css.boxmodel",w="qx.debug",v='<div style="position:absolute;top:1px;left:1px;',u='border-bottom:',t='border-right:',s="",r="content",q='border-left:',p='border-top:',n="Number",o='<div style="position:absolute;top:1px;left:0px;',l='position:absolute;top:0px;left:1px;',m='<div style="overflow:hidden;font-size:0;line-height:0;">',k="absolute";
qx.Class.define(y,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(z,A,B){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setOuterColor(z);
}
if(A!=null){this.setInnerColor(A);
}
if(B!=null){this.setInnerOpacity(B);
}},properties:{innerColor:{check:d,nullable:true,apply:i},innerOpacity:{check:n,init:1,apply:i},outerColor:{check:d,nullable:true,apply:i}},members:{__kG:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__kG;
},_applyStyle:function(){if(qx.core.Environment.get(w)){if(this.__kG){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__kG){return this.__kG;
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
return this.__kG=D.join(s);
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
}},destruct:function(){this.__kG=null;
}});
})();
(function(){var j="Please verify the image '",i="_applyInsets",h="Number",g="' is present.",f="-l",e="-t",d="-r",c="-b",b="insetTop",a="set",v="insetBottom",u="The value of the property 'rightSlice' is null! ",t="qx.debug",s="_applyBaseImage",r="The value of the property 'bottomSlice' is null! ",q="shorthand",p="String",o="The value of the property 'leftSlice' is null! ",n="insetRight",m="The value of the property 'topSlice' is null! ",k="insetLeft",l="qx.ui.decoration.Grid";
qx.Class.define(l,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(w,x){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__kH=new qx.ui.decoration.css3.BorderImage();

if(w){this.__kI(w);
}}else{this.__kH=new qx.ui.decoration.GridDiv(w);
}
if(x!=null){this.__kH.setInsets(x);
}},properties:{baseImage:{check:p,nullable:true,apply:s},insetLeft:{check:h,nullable:true,apply:i},insetRight:{check:h,nullable:true,apply:i},insetBottom:{check:h,nullable:true,apply:i},insetTop:{check:h,nullable:true,apply:i},insets:{group:[b,n,v,k],mode:q}},members:{__kH:null,getMarkup:function(){return this.__kH.getMarkup();
},resize:function(y,z,A){this.__kH.resize(y,z,A);
},tint:function(B,C){},getInsets:function(){return this.__kH.getInsets();
},_applyInsets:function(D,E,name){var F=a+qx.lang.String.firstUp(name);
this.__kH[F](D);
},_applyBaseImage:function(G,H){if(this.__kH instanceof qx.ui.decoration.GridDiv){this.__kH.setBaseImage(G);
}else{this.__kI(G);
}},__kI:function(I){this.__kH.setBorderImage(I);
var S=qx.util.AliasManager.getInstance().resolve(I);
var T=/(.*)(\.[a-z]+)$/.exec(S);
var O=T[1];
var R=T[2];
var L=qx.util.ResourceManager.getInstance();
var U=L.getImageHeight(O+e+R);
var J=L.getImageWidth(O+d+R);
var K=L.getImageHeight(O+c+R);
var V=L.getImageWidth(O+f+R);

if(qx.core.Environment.get(t)){var M=m+j+O+e+R+g;
var N=u+j+O+d+R+g;
var Q=r+j+O+c+R+g;
var P=o+j+O+f+R+g;
qx.core.Assert.assertNotNull(U,M);
qx.core.Assert.assertNotNull(J,N);
qx.core.Assert.assertNotNull(K,Q);
qx.core.Assert.assertNotNull(V,P);
}this.__kH.setSlice([U,J,K,V]);
}},destruct:function(){this.__kH=null;
}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",z=";'></div>",y="<div style='",x="qx.debug",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",o='") ',p="sliceTop",m='url("',n="hidden",k="repeatY",l="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(A,B){qx.ui.decoration.Abstract.call(this);
if(A!=null){this.setBorderImage(A);
}
if(B!=null){this.setSlice(B);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[p,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,k],mode:c}},members:{__kG:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__kG;
},getMarkup:function(){if(this.__kG){return this.__kG;
}var C=this._resolveImageUrl(this.getBorderImage());
var D=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var E=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__kG=[y,qx.bom.element.Style.compile({"borderImage":m+C+o+D.join(f)+f+E,position:l,lineHeight:0,fontSize:0,overflow:n,boxSizing:r,borderWidth:D.join(b)+g}),z].join(q);
return this.__kG;
},resize:function(F,G,H){F.style.width=G+g;
F.style.height=H+g;
},tint:function(I,J){},_applyStyle:function(){if(qx.core.Environment.get(x)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},_resolveImageUrl:function(K){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(K));
}},destruct:function(){this.__kG=null;
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
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",z="border-separator",y="table-header-border",x="dotted",w="tooltip-text",v="invalid",u="white",t="decoration/shadow/shadow.png",s="black",r="#FFF",q="effect",o="table-focus-indicator",p="border-focused-invalid",m="qx/decoration/Classic",n="border-lead",k="decoration/shadow/shadow-small.png",l="qx.theme.classic.Decoration";
qx.Theme.define(l,{aliases:{decoration:m},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:x}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:v}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:z}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:z}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:k,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:v,innerColor:p,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:x,color:n}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:w}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:w}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:u,colorLeft:u,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:y,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:o,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f,widthBottom:2,colorBottom:q,styleBottom:f}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:r,width:1,color:z}}}});
})();
(function(){var dh="button",dg="widget",df="background",de="atom",dd="inset-thin",dc="text-disabled",db="text-selected",da="outset",cY="label",cX="inset",ca="background-selected",bY="image",bX="groupbox",bW="cell",bV="popup",bU="focused-inset",bT="tooltip",bS="white",bR="menu-button",bQ="middle",dp="decoration/arrows/down.gif",dq="spinner",dm="background-disabled",dn="list",dk="button-hovered",dl="bold",di="checkbox",dj="toolbar-button",dr="button-frame",ds="textfield",cG="background-invalid",cF="shadow-small",cI="invalid",cH="combobox",cK="scrollbar",cJ="center",cM="datechooser/button",cL="button-abandoned",cE="background-light",cD="main",k="date-chooser",l="date-chooser-title",m="radiobutton",n="default",o="tree-folder",p="selectbox",q="background-field",r="outset-thin",s="icon/16/places/folder-open.png",t="menu-slidebar-button",dG="scrollbar/button",dF="combobox/button",dE="decoration/arrows/right.gif",dD="decoration/arrows/up.gif",dK="text",dJ="virtual-list",dI="decoration/arrows/down-small.gif",dH="tree",dM="checkbox-undetermined",dL="icon/16/places/folder.png",bg="slidebar/button-forward",bh="icon/16/mimetypes/text-plain.png",be="right-top",bf="table-header-cell",bk="button-checked",bl=".png",bi="background-focused",bj="datechooser",bc="slidebar/button-backward",bd="treevirtual-folder",L="checkbox-checked",K="decoration/form/",N="decoration/tree/minus.gif",M="",H="decoration/tree/plus.gif",G="-invalid",J="decoration/arrows/left.gif",I="table-row-background-even",F="decoration/treevirtual/cross_minus.gif",E="radiobutton-hovered",bq="keyboard-focus",br="decoration/treevirtual/start_plus.gif",bs="decoration/cursors/",bt="icon/16/actions/dialog-ok.png",bm="slidebar",bn="#BABABA",bo="table-scroller-focus-indicator",bp="move-frame",bu="nodrop",bv="date-chooser-selected",W="tabview-page-button-left",V="decoration/arrows/up-small.gif",U="move",T="radiobutton-checked-focused",S="qx.theme.classic.Appearance",R="decoration/menu/checkbox.gif",Q="tooltip-error",P="right",bb="resize-frame",ba="decoration/arrows/rewind.gif",bw="table-scroller-header",bx="table-pane",by="table-header-cell-hover",bz="focused-outset",bA="checkbox-hovered",bB="icon/16/actions/dialog-cancel.png",bC="menu-slidebar",bD="datechooser-date-pane",bE="background-pane",bF="decoration/treevirtual/cross_plus.gif",ci="qx/icon/Oxygen/16/actions/window-close.png",ch="datechooser-week",cg="icon/16/apps/office-calendar.png",cf="datechooser-weekday",cm="table-header-border",cl="window-active-caption-text",ck="window-active-caption",cj="icon",cp="checkbox-checked-focused",co="toolbar-separator",cz="groove",cA="checkbox-pressed",cx="tooltip-invalid",cy="decoration/window/restore.gif",cv="decoration/menu/checkbox-invert.gif",cw="scrollarea",ct="window-inactive-caption-text",cu="best-fit",cB="up.gif",cC="checkbox-undetermined-hovered",cQ="keep-align",cP="tabview-page-button-right",cS="tabview-page-button-top",cR="tabview-page-button-bottom",cU="row-layer",cT="decoration/menu/radiobutton.gif",cW="decoration/arrows/",cV="decoration/table/descending.png",cO="progressbar",cN="tree-file",dz="tooltip-text",dA="checkbox-checked-hovered",dB="left.gif",dC="decoration/arrows/up-invert.gif",dv="alias",dw="decoration/arrows/right-invert.gif",dx="radiobutton-checked-disabled",dy="lead-item",dt="checkbox-focused",du="border-dark",j="decoration/treevirtual/end_plus.gif",i="decoration/treevirtual/start_minus.gif",h="radiobutton-checked-hovered",g="decoration/window/minimize.gif",f="table-header-cell-hovered",e="down.gif",d="decoration/treevirtual/end.gif",c="decoration/treevirtual/end_minus.gif",b="window-inactive-caption",a="decoration/menu/radiobutton-invert.gif",w="text-placeholder",x="slider",u="decoration/table/select-column-order.png",v="decoration/arrows/next.gif",A="table-header",B="decoration/treevirtual/only_minus.gif",y="datechooser-week-header",z="decoration/window/maximize.gif",C="decoration/treevirtual/only_plus.gif",D="checkbox-checked-pressed",cq="decoration/arrows/down-invert.gif",cn="menu-separator",cs="decoration/splitpane/knob-vertical.png",cr=".gif",cd="decoration/arrows/forward.gif",cb="radiobutton-checked-pressed",O="table-statusbar",ce="radiobutton-pressed",Y="copy",X="table-row-background-selected",bI="radiobutton-focused",bJ="decoration/splitpane/knob-horizontal.png",bK="right.gif",bL="radiobutton-checked",bM="decoration/treevirtual/cross.gif",bN="decoration/table/ascending.png",bO="decoration/treevirtual/line.gif",bP="checkbox-undetermined-focused",bG="toolbar-part-handle",bH="decoration/window/close.gif",cc="icon/16/actions/view-refresh.png";
qx.Theme.define(S,{appearances:{"widget":{},"label":{style:function(dN){return {textColor:dN.disabled?dc:undefined};
}},"image":{style:function(dO){return {opacity:!dO.replacement&&dO.disabled?0.3:undefined};
}},"atom":{},"atom/label":cY,"atom/icon":bY,"root":{style:function(dP){return {backgroundColor:df,textColor:dK,font:n};
}},"popup":{style:function(dQ){return {decorator:cD,backgroundColor:bE,shadow:cF};
}},"tooltip":{include:bV,style:function(dR){return {backgroundColor:bT,textColor:dz,decorator:bT,shadow:cF,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":de,"tooltip-error":{include:bT,style:function(dS){return {textColor:db,showTimeout:100,hideTimeout:10000,decorator:Q,font:dl,backgroundColor:cx};
}},"tooltip-error/atom":de,"iframe":{style:function(dT){return {backgroundColor:bS,decorator:cX};
}},"move-frame":{style:function(dU){return {decorator:cD};
}},"resize-frame":bp,"dragdrop-cursor":{style:function(dV){var dW=bu;

if(dV.copy){dW=Y;
}else if(dV.move){dW=U;
}else if(dV.alias){dW=dv;
}return {source:bs+dW+cr,position:be,offset:[2,16,2,6]};
}},"button-frame":{alias:de,style:function(dX){if(dX.pressed||dX.abandoned||dX.checked){var ea=!dX.inner&&dX.focused?bU:cX;
var dY=[4,3,2,5];
}else{var ea=!dX.inner&&dX.focused?bz:da;
var dY=[3,4];
}return {backgroundColor:dX.abandoned?cL:dX.hovered?dk:dX.checked?bk:dh,decorator:ea,padding:dY};
}},"button":{alias:dr,include:dr,style:function(eb){return {center:true};
}},"hover-button":{alias:de,include:de,style:function(ec){return {backgroundColor:ec.hovered?ca:undefined,textColor:ec.hovered?db:undefined};
}},"splitbutton":{},"splitbutton/button":dh,"splitbutton/arrow":{alias:dh,include:dh,style:function(ed){return {icon:dp};
}},"scrollarea/corner":{style:function(){return {backgroundColor:df};
}},"scrollarea":dg,"scrollarea/pane":dg,"scrollarea/scrollbar-x":cK,"scrollarea/scrollbar-y":cK,"list":{alias:cw,style:function(ee){var ei;
var eg=!!ee.focused;
var eh=!!ee.invalid;
var ef=!!ee.disabled;

if(eh&&!ef){ei=cG;
}else if(eg&&!eh&&!ef){ei=bi;
}else if(ef){ei=dm;
}else{ei=bS;
}return {decorator:ee.focused?bU:cX,backgroundColor:ei};
}},"listitem":{alias:de,style:function(ej){return {gap:4,padding:ej.lead?[2,4]:[3,5],backgroundColor:ej.selected?ca:undefined,textColor:ej.selected?db:undefined,decorator:ej.lead?dy:undefined};
}},"form-renderer-label":{include:cY,style:function(){return {paddingTop:4};
}},"textfield":{style:function(ek){var ep;
var en=!!ek.focused;
var eo=!!ek.invalid;
var el=!!ek.disabled;

if(eo&&!el){ep=cG;
}else if(en&&!eo&&!el){ep=bi;
}else if(el){ep=dm;
}else{ep=q;
}var em;

if(ek.disabled){em=dc;
}else if(ek.showingPlaceholder){em=w;
}else{em=undefined;
}return {decorator:ek.focused?bU:cX,padding:[2,3],textColor:em,backgroundColor:ep};
}},"textarea":ds,"checkbox":{alias:de,style:function(eq){var es;
if(eq.checked){if(eq.disabled){es=L;
}else if(eq.focused){es=cp;
}else if(eq.pressed){es=D;
}else if(eq.hovered){es=dA;
}else{es=L;
}}else if(eq.undetermined){if(eq.disabled){es=dM;
}else if(eq.focused){es=bP;
}else if(eq.hovered){es=cC;
}else{es=dM;
}}else if(!eq.disabled){if(eq.focused){es=dt;
}else if(eq.pressed){es=cA;
}else if(eq.hovered){es=bA;
}}es=es||di;
var er=eq.invalid&&!eq.disabled?G:M;
return {icon:K+es+er+bl,gap:6};
}},"radiobutton":{alias:di,include:di,style:function(et){var ev;

if(et.checked&&et.focused){ev=T;
}else if(et.checked&&et.disabled){ev=dx;
}else if(et.checked&&et.pressed){ev=cb;
}else if(et.checked&&et.hovered){ev=h;
}else if(et.checked){ev=bL;
}else if(et.focused){ev=bI;
}else if(et.pressed){ev=ce;
}else if(et.hovered){ev=E;
}else{ev=m;
}var eu=et.invalid&&!et.disabled?G:M;
return {icon:K+ev+eu+bl,shadow:undefined};
}},"spinner":{style:function(ew){return {decorator:ew.focused?bU:cX,textColor:ew.disabled?dc:undefined};
}},"spinner/textfield":{include:ds,style:function(ex){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:dh,include:dh,style:function(ey){return {icon:V,padding:ey.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:ey.hovered?dk:dh};
}},"spinner/downbutton":{alias:dh,include:dh,style:function(ez){return {icon:dI,padding:ez.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:ez.hovered?dk:dh};
}},"datefield":cH,"datefield/button":{alias:dF,include:dF,style:function(eA){return {icon:cg,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:bj,include:bj,style:function(eB){return {decorator:eB.focused?bU:cX};
}},"groupbox":{style:function(eC){return {backgroundColor:df};
}},"groupbox/legend":{alias:de,style:function(eD){return {backgroundColor:df,textColor:eD.invalid?cI:undefined,padding:[1,0,1,4]};
}},"groupbox/frame":{style:function(eE){return {padding:[12,9],marginTop:10,decorator:cz};
}},"check-groupbox":bX,"check-groupbox/legend":{alias:di,include:di,style:function(eF){return {backgroundColor:df,textColor:eF.invalid?cI:undefined,padding:[1,0,1,4]};
}},"radio-groupbox":bX,"radio-groupbox/legend":{alias:m,include:m,style:function(eG){return {backgroundColor:df,textColor:eG.invalid?cI:undefined,padding:[1,0,1,4]};
}},"toolbar":{style:function(eH){return {backgroundColor:df};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(eI){return {decorator:bG,backgroundColor:df,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(eJ){return {margin:[3,2],decorator:co};
}},"toolbar-button":{alias:de,style:function(eK){if(eK.pressed||eK.checked||eK.abandoned){var eM=dd;
var eL=[3,2,1,4];
}else if(eK.hovered&&!eK.disabled){var eM=r;
var eL=[2,3];
}else{var eM=undefined;
var eL=[3,4];
}return {cursor:n,decorator:eM,padding:eL,backgroundColor:eK.abandoned?cL:eK.checked?cE:dh};
}},"toolbar-menubutton":{alias:dj,include:dj,style:function(eN){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:bY,include:bY,style:function(eO){return {source:dI};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":dj,"toolbar-splitbutton/arrow":{alias:dj,include:dj,style:function(eP){return {icon:dp};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dh,include:dh,style:function(eQ){return {icon:eQ.vertical?dp:v};
}},"slidebar/button-backward":{alias:dh,include:dh,style:function(eR){return {icon:eR.vertical?dD:J};
}},"tabview":{},"tabview/bar":{alias:bm,style:function(eS){var eT=0,eW=0,eU=0,eV=0;

if(eS.barTop){eU=-2;
}else if(eS.barBottom){eT=-2;
}else if(eS.barRight){eV=-2;
}else{eW=-2;
}return {marginBottom:eU,marginTop:eT,marginLeft:eV,marginRight:eW};
}},"tabview/bar/button-forward":{include:bg,alias:bg,style:function(eX){if(eX.barTop||eX.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bc,alias:bc,style:function(eY){if(eY.barTop||eY.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(fa){return {backgroundColor:df,decorator:da,padding:10};
}},"tabview-page":dg,"tabview-page/button":{style:function(fb){var fk;
var fi=0,fg=0,fd=0,ff=0;

if(fb.barTop||fb.barBottom){var fe=2,fc=2,fh=6,fj=6;
}else{var fe=6,fc=6,fh=6,fj=6;
}
if(fb.barTop){fk=cS;
}else if(fb.barRight){fk=cP;
}else if(fb.barBottom){fk=cR;
}else{fk=W;
}
if(fb.checked){if(fb.barTop||fb.barBottom){fh+=2;
fj+=2;
}else{fe+=2;
fc+=2;
}}else{if(fb.barTop||fb.barBottom){fd+=2;
fi+=2;
}else if(fb.barLeft||fb.barRight){fg+=2;
ff+=2;
}}
if(fb.checked){if(!fb.firstTab){if(fb.barTop||fb.barBottom){ff=-4;
}else{fi=-4;
}}
if(!fb.lastTab){if(fb.barTop||fb.barBottom){fg=-4;
}else{fd=-4;
}}}return {zIndex:fb.checked?10:5,decorator:fk,backgroundColor:df,padding:[fe,fj,fc,fh],margin:[fi,fg,fd,ff],textColor:fb.disabled?dc:undefined};
}},"tabview-page/button/label":{alias:cY,style:function(fl){return {padding:[0,1,0,1],margin:fl.focused?0:1,decorator:fl.focused?bq:undefined};
}},"tabview-page/button/icon":bY,"tabview-page/button/close-button":{alias:de,style:function(fm){return {icon:ci};
}},"scrollbar":{},"scrollbar/slider":{alias:x,style:function(fn){return {backgroundColor:cE};
}},"scrollbar/slider/knob":{include:dr,style:function(fo){return {height:14,width:14,minHeight:fo.horizontal?undefined:9,minWidth:fo.horizontal?9:undefined};
}},"scrollbar/button":{alias:dh,include:dh,style:function(fp){var fq;

if(fp.up||fp.down){if(fp.pressed||fp.abandoned||fp.checked){fq=[5,2,3,4];
}else{fq=[4,3];
}}else{if(fp.pressed||fp.abandoned||fp.checked){fq=[4,3,2,5];
}else{fq=[3,4];
}}var fr=cW;

if(fp.left){fr+=dB;
}else if(fp.right){fr+=bK;
}else if(fp.up){fr+=cB;
}else{fr+=e;
}return {padding:fq,icon:fr};
}},"scrollbar/button-begin":dG,"scrollbar/button-end":dG,"slider":{style:function(fs){var ft;

if(fs.disabled){ft=dm;
}else if(fs.invalid){ft=cG;
}else if(fs.focused){ft=cE;
}else{ft=q;
}return {backgroundColor:ft,decorator:fs.focused?bU:cX};
}},"slider/knob":{include:dr,style:function(fu){return {width:14,height:14,decorator:da};
}},"tree-folder/open":{style:function(fv){return {source:fv.opened?N:H};
}},"tree-folder":{style:function(fw){return {padding:[2,3,2,0],icon:fw.opened?s:dL,iconOpened:s};
}},"tree-folder/icon":{style:function(fx){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(fy){return {padding:[1,2],backgroundColor:fy.selected?ca:undefined,textColor:fy.selected?db:undefined};
}},"tree-file":{include:o,alias:o,style:function(fz){return {icon:bh};
}},"tree":{include:dn,alias:dn,style:function(fA){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(fB){return {decorator:cD};
}},"treevirtual-folder":{style:function(fC){return {icon:(fC.opened?s:dL)};
}},"treevirtual-file":{include:bd,alias:bd,style:function(fD){return {icon:bh};
}},"treevirtual-line":{style:function(fE){return {icon:bO};
}},"treevirtual-contract":{style:function(fF){return {icon:N};
}},"treevirtual-expand":{style:function(fG){return {icon:H};
}},"treevirtual-only-contract":{style:function(fH){return {icon:B};
}},"treevirtual-only-expand":{style:function(fI){return {icon:C};
}},"treevirtual-start-contract":{style:function(fJ){return {icon:i};
}},"treevirtual-start-expand":{style:function(fK){return {icon:br};
}},"treevirtual-end-contract":{style:function(fL){return {icon:c};
}},"treevirtual-end-expand":{style:function(fM){return {icon:j};
}},"treevirtual-cross-contract":{style:function(fN){return {icon:F};
}},"treevirtual-cross-expand":{style:function(fO){return {icon:bF};
}},"treevirtual-end":{style:function(fP){return {icon:d};
}},"treevirtual-cross":{style:function(fQ){return {icon:bM};
}},"window":{style:function(fR){return {contentPadding:[10,10,10,10],backgroundColor:df,decorator:fR.maximized?undefined:da,shadow:fR.maximized?undefined:cF};
}},"window-resize-frame":bb,"window/pane":{},"window/captionbar":{style:function(fS){return {padding:1,backgroundColor:fS.active?ck:b,textColor:fS.active?cl:ct};
}},"window/icon":{style:function(fT){return {marginRight:4};
}},"window/title":{style:function(fU){return {cursor:n,font:dl,marginRight:20,alignY:bQ};
}},"window/minimize-button":{include:dh,alias:dh,style:function(fV){return {icon:g,padding:fV.pressed||fV.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:dh,alias:dh,style:function(fW){return {icon:cy,padding:fW.pressed||fW.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:dh,alias:dh,style:function(fX){return {icon:z,padding:fX.pressed||fX.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:dh,alias:dh,style:function(fY){return {marginLeft:2,icon:bH,padding:fY.pressed||fY.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(ga){return {decorator:dd,padding:[2,6]};
}},"window/statusbar-text":cY,"resizer":{style:function(gb){return {decorator:da};
}},"splitpane":{},"splitpane/splitter":{style:function(gc){return {backgroundColor:df};
}},"splitpane/splitter/knob":{style:function(gd){return {source:gd.horizontal?bJ:cs,padding:2};
}},"splitpane/slider":{style:function(ge){return {backgroundColor:du,opacity:0.3};
}},"selectbox":{include:dr,style:function(gf){var gg=dh;

if(gf.invalid&&!gf.disabled){gg=cG;
}else if(gf.abandoned){gg=cL;
}else if(!gf.abandoned&&gf.hovered){gg=dk;
}else if(!gf.abandoned&&!gf.hovered&&gf.checked){gg=bk;
}return {backgroundColor:gg};
}},"selectbox/atom":de,"selectbox/popup":bV,"selectbox/list":dn,"selectbox/arrow":{include:bY,style:function(gh){return {source:dp,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(gi){return {decorator:da};
}},"datechooser/navigation-bar":{style:function(gj){return {backgroundColor:k,textColor:gj.disabled?dc:gj.invalid?cI:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":bT,"datechooser/last-month-button-tooltip":bT,"datechooser/next-year-button-tooltip":bT,"datechooser/next-month-button-tooltip":bT,"datechooser/last-year-button":cM,"datechooser/last-month-button":cM,"datechooser/next-year-button":cM,"datechooser/next-month-button":cM,"datechooser/button/icon":{},"datechooser/button":{style:function(gk){var gl={width:17,show:cj};

if(gk.lastYear){gl.icon=ba;
}else if(gk.lastMonth){gl.icon=J;
}else if(gk.nextYear){gl.icon=cd;
}else if(gk.nextMonth){gl.icon=dE;
}
if(gk.pressed||gk.checked||gk.abandoned){gl.decorator=dd;
}else if(gk.hovered){gl.decorator=r;
}else{gl.decorator=undefined;
}
if(gk.pressed||gk.checked||gk.abandoned){gl.padding=[2,0,0,2];
}else if(gk.hovered){gl.padding=1;
}else{gl.padding=2;
}return gl;
}},"datechooser/month-year-label":{style:function(gm){return {font:dl,textAlign:cJ};
}},"datechooser/date-pane":{style:function(gn){return {decorator:bD,backgroundColor:k};
}},"datechooser/weekday":{style:function(go){return {decorator:cf,font:dl,textAlign:cJ,textColor:go.disabled?dc:go.weekend?l:k,backgroundColor:go.weekend?k:l};
}},"datechooser/day":{style:function(gp){return {textAlign:cJ,decorator:gp.today?cD:undefined,textColor:gp.disabled?dc:gp.selected?db:gp.otherMonth?dc:undefined,backgroundColor:gp.disabled?undefined:gp.selected?bv:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(gq){return {textAlign:cJ,textColor:l,padding:[2,4],decorator:gq.header?y:ch};
}},"combobox":{style:function(gr){var gs;

if(gr.disabled){gs=dm;
}else if(gr.invalid){gs=cG;
}else if(gr.focused){gs=cE;
}else{gs=q;
}return {decorator:gr.focused?bU:cX,textColor:gr.disabled?dc:undefined,backgroundColor:gs};
}},"combobox/button":{alias:dh,include:dh,style:function(gt){return {icon:dp,backgroundColor:gt.hovered?dk:dh};
}},"combobox/popup":bV,"combobox/list":dn,"combobox/textfield":{include:ds,style:function(gu){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(gv){var gw={backgroundColor:df,shadow:cF,decorator:da,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:gv.submenu||gv.contextmenu?cu:cQ};

if(gv.submenu){gw.position=be;
gw.offset=[-2,-3];
}
if(gv.contextmenu){gw.offset=4;
}return gw;
}},"menu/slidebar":bC,"menu-slidebar":dg,"menu-slidebar-button":{style:function(gx){return {backgroundColor:gx.hovered?ca:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:t,style:function(gy){return {icon:gy.hovered?dC:dD};
}},"menu-slidebar/button-forward":{include:t,style:function(gz){return {icon:gz.hovered?cq:dp};
}},"menu-separator":{style:function(gA){return {height:0,decorator:cn,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:de,style:function(gB){return {backgroundColor:gB.selected?ca:undefined,textColor:gB.selected?db:undefined,padding:[2,6]};
}},"menu-button/icon":{include:bY,style:function(gC){return {alignY:bQ};
}},"menu-button/label":{include:cY,style:function(gD){return {alignY:bQ,padding:1};
}},"menu-button/shortcut":{include:cY,style:function(gE){return {alignY:bQ,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:bY,style:function(gF){return {source:gF.selected?dw:dE,alignY:bQ};
}},"menu-checkbox":{alias:bR,include:bR,style:function(gG){return {icon:!gG.checked?undefined:gG.selected?cv:R};
}},"menu-radiobutton":{alias:bR,include:bR,style:function(gH){return {icon:!gH.checked?undefined:gH.selected?a:cT};
}},"menubar":{style:function(gI){return {backgroundColor:df,decorator:da};
}},"menubar-button":{alias:de,style:function(gJ){return {padding:[2,6],backgroundColor:gJ.pressed||gJ.hovered?ca:undefined,textColor:gJ.pressed||gJ.hovered?db:undefined};
}},"colorselector":dg,"colorselector/control-bar":dg,"colorselector/visual-pane":bX,"colorselector/control-pane":dg,"colorselector/preset-grid":dg,"colorselector/colorbucket":{style:function(gK){return {decorator:dd,width:16,height:16};
}},"colorselector/preset-field-set":bX,"colorselector/input-field-set":bX,"colorselector/preview-field-set":bX,"colorselector/hex-field-composite":dg,"colorselector/hex-field":ds,"colorselector/rgb-spinner-composite":dg,"colorselector/rgb-spinner-red":dq,"colorselector/rgb-spinner-green":dq,"colorselector/rgb-spinner-blue":dq,"colorselector/hsb-spinner-composite":dg,"colorselector/hsb-spinner-hue":dq,"colorselector/hsb-spinner-saturation":dq,"colorselector/hsb-spinner-brightness":dq,"colorselector/preview-content-old":{style:function(gL){return {decorator:dd,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(gM){return {decorator:dd,backgroundColor:bS,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(gN){return {decorator:dd,margin:5};
}},"colorselector/brightness-field":{style:function(gO){return {decorator:dd,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dg,"colorselector/hue-saturation-handle":dg,"colorselector/brightness-pane":dg,"colorselector/brightness-handle":dg,"table":dg,"table/statusbar":{style:function(gP){return {decorator:O,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:dh,style:function(gQ){var gS,gR;

if(gQ.pressed||gQ.checked||gQ.abandoned){gS=dd;
gR=[3,2,1,4];
}else if(gQ.hovered){gS=r;
gR=[2,3];
}else{gS=undefined;
gR=[3,4];
}return {decorator:gS,padding:gR,backgroundColor:gQ.abandoned?cL:dh,icon:u};
}},"table-column-reset-button":{extend:bR,alias:bR,style:function(){return {icon:cc};
}},"table-scroller/scrollbar-x":cK,"table-scroller/scrollbar-y":cK,"table-scroller":dg,"table-scroller/header":{style:function(gT){return {decorator:bw,backgroundColor:A};
}},"table-scroller/pane":{style:function(gU){return {backgroundColor:bx};
}},"table-scroller/focus-indicator":{style:function(gV){return {decorator:bo};
}},"table-scroller/resize-line":{style:function(gW){return {backgroundColor:cm,width:3};
}},"table-header-cell":{alias:de,style:function(gX){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:gX.hovered?0:2,decorator:gX.hovered?f:bf,backgroundColor:gX.hovered?by:bf,sortIcon:gX.sorted?(gX.sortedAscending?bN:cV):undefined};
}},"table-header-cell/icon":{style:function(gY){return {marginRight:4};
}},"table-header-cell/sort-icon":{style:function(ha){return {alignY:bQ};
}},"table-editor-textfield":{include:ds,style:function(hb){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:p,alias:p,style:function(hc){return {padding:[0,2]};
}},"table-editor-combobox":{include:cH,alias:cH,style:function(hd){return {decorator:undefined};
}},"colorpopup":{alias:bV,include:bV,style:function(he){return {decorator:da,padding:5,backgroundColor:df};
}},"colorpopup/field":{style:function(hf){return {decorator:dd,margin:2,width:14,height:14,backgroundColor:df};
}},"colorpopup/selector-button":dh,"colorpopup/auto-button":dh,"colorpopup/preview-pane":bX,"colorpopup/current-preview":{style:function(hg){return {height:20,padding:4,marginLeft:4,decorator:dd,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hh){return {height:20,padding:4,marginRight:4,decorator:dd,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dh,include:dh,style:function(hi){return {icon:bt};
}},"colorpopup/colorselector-cancelbutton":{alias:dh,include:dh,style:function(hj){return {icon:bB};
}},"virtual-list":dn,"virtual-list/row-layer":cU,"row-layer":dg,"column-layer":dg,"group-item":{include:cY,alias:cY,style:function(hk){return {padding:4,backgroundColor:bn,textColor:bS,font:dl};
}},"virtual-selectbox":p,"virtual-selectbox/dropdown":bV,"virtual-selectbox/dropdown/list":{alias:dJ},"virtual-combobox":cH,"virtual-combobox/dropdown":bV,"virtual-combobox/dropdown/list":{alias:dJ},"virtual-tree":{include:dH,alias:dH,style:function(hl){return {itemHeight:21};
}},"virtual-tree-folder":o,"virtual-tree-file":cN,"cell":{style:function(hm){return {backgroundColor:hm.selected?X:I,textColor:hm.selected?db:dK,padding:[3,6]};
}},"cell-string":bW,"cell-number":{include:bW,style:function(hn){return {textAlign:P};
}},"cell-image":bW,"cell-boolean":bW,"cell-atom":bW,"cell-date":bW,"cell-html":bW,"htmlarea":{"include":dg,style:function(ho){return {backgroundColor:bS};
}},"progressbar":{style:function(hp){return {decorator:cO,padding:[1],backgroundColor:bS,width:200,height:20};
}},"progressbar/progress":{style:function(hq){return {backgroundColor:hq.disabled?dm:ca};
}},"app-header":{style:function(hr){return {textColor:db,backgroundColor:ca,padding:[8,12]};
}},"app-header-label":cY}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
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

