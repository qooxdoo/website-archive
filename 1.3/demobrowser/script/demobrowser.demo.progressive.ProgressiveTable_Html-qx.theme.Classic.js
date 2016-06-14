(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.progressive.ProgressiveTable_Html","qx.theme":"qx.theme.Classic"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off","qx.progressive":"on"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.3"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.progressive.ProgressiveTable_Html-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"c41929573d01"},
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

qx.$$loader.importPackageData = function (dataMap) {
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

qx.$$packageData['c41929573d01']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};
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
qx.Bootstrap.define(q,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(be,bf,bg,name,bh){var bk=bg.prototype;
var bj=new Function;
bj.prototype=bk;
var bi=new bj;
be.prototype=bi;
bi.name=bi.classname=name;
bi.basename=bh;
bf.base=be.superclass=bg;
bf.self=be.constructor=bi.constructor=be;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bl){return bl.__count__;
},"default":function(bm){var length=0;

for(var bn in bm){length++;
}return length;
}})[(({}).__count__==0)?A:j],objectMergeWith:function(bo,bp,bq){if(bq===undefined){bq=true;
}
for(var br in bp){if(bq||bo[br]===undefined){bo[br]=bp[br];
}}return bo;
},__id:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bs){var bt=[];
var bv=Object.prototype.hasOwnProperty;

for(var bw in bs){if(bv.call(bs,bw)){bt.push(bw);
}}var bu=qx.Bootstrap.__id;

for(var i=0,a=bu,l=a.length;i<l;i++){if(bv.call(bs,a[i])){bt.push(a[i]);
}}return bt;
},"default":function(bx){var by=[];
var bz=Object.prototype.hasOwnProperty;

for(var bA in bx){if(bz.call(bx,bA)){by.push(bA);
}}return by;
}})[typeof (Object.keys)==
L?B:
(function(){for(var bB in {toString:1}){return bB;
}})()!==m?u:j],getKeysAsString:function(bC){var bD=qx.Bootstrap.getKeys(bC);

if(bD.length==0){return p;
}return g+bD.join(C)+g;
},__ie:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bE,self,bF){var bG=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bH=Array.prototype.slice.call(arguments,0,arguments.length);
return bE.apply(self,bG.concat(bH));
};
},firstUp:function(bI){return bI.charAt(0).toUpperCase()+bI.substr(1);
},firstLow:function(bJ){return bJ.charAt(0).toLowerCase()+bJ.substr(1);
},getClass:function(bK){var bL=Object.prototype.toString.call(bK);
return (qx.Bootstrap.__ie[bL]||bL.slice(8,-1));
},isString:function(bM){return (bM!==null&&(typeof bM===F||qx.Bootstrap.getClass(bM)==d||bM instanceof String||(!!bM&&!!bM.$$isString)));
},isArray:function(bN){return (bN!==null&&(bN instanceof Array||(bN&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bN.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bN)==f||(!!bN&&!!bN.$$isArray)));
},isObject:function(bO){return (bO!==undefined&&bO!==null&&qx.Bootstrap.getClass(bO)==h);
},isFunction:function(bP){return qx.Bootstrap.getClass(bP)==c;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bQ,name){while(bQ){if(bQ.$$properties&&bQ.$$properties[name]){return bQ.$$properties[name];
}bQ=bQ.superclass;
}return null;
},hasProperty:function(bR,name){return !!qx.Bootstrap.getPropertyDefinition(bR,name);
},getEventType:function(bS,name){var bS=bS.constructor;

while(bS.superclass){if(bS.$$events&&bS.$$events[name]!==undefined){return bS.$$events[name];
}bS=bS.superclass;
}return null;
},supportsEvent:function(bT,name){return !!qx.Bootstrap.getEventType(bT,name);
},getByInterface:function(bU,bV){var bW,i,l;

while(bU){if(bU.$$implements){bW=bU.$$flatImplements;

for(i=0,l=bW.length;i<l;i++){if(bW[i]===bV){return bU;
}}}bU=bU.superclass;
}return null;
},hasInterface:function(bX,bY){return !!qx.Bootstrap.getByInterface(bX,bY);
},getMixins:function(ca){var cb=[];

while(ca){if(ca.$$includes){cb.push.apply(cb,ca.$$flatIncludes);
}ca=ca.superclass;
}return cb;
},$$logs:[],debug:function(cc,cd){qx.Bootstrap.$$logs.push([z,arguments]);
},info:function(ce,cf){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(cg,ch){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(ci,cj){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(ck){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,h){if(h){if(h.include&&!(h.include instanceof Array)){h.include=[h.include];
}{};
var k=h.statics?h.statics:{};
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
},$$registry:{},__er:null,__es:function(){}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__eu:{},define:function(j,k){if(k===undefined){throw new Error('Default value of setting "'+j+'" must be defined!');
}
if(!this.__eu[j]){this.__eu[j]={};
}else if(this.__eu[j].defaultValue!==undefined){throw new Error('Setting "'+j+'" is already defined!');
}this.__eu[j].defaultValue=k;
},get:function(l){var m=this.__eu[l];

if(m===undefined){throw new Error('Setting "'+l+'" is not defined.');
}
if(m.value!==undefined){return m.value;
}return m.defaultValue;
},set:function(n,o){if((n.split(a)).length<2){throw new Error('Malformed settings key "'+n+'". Must be following the schema "namespace.key".');
}
if(!this.__eu[n]){this.__eu[n]={};
}this.__eu[n].value=o;
},__ev:function(){if(window.qxsettings){for(var p in window.qxsettings){this.set(p,window.qxsettings[p]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(q){}this.__ew();
}},__ew:function(){if(this.get(h)!=true){return;
}var s=document.location.search.slice(1).split(g);

for(var i=0;i<s.length;i++){var r=s[i].split(b);

if(r.length!=3||r[0]!=c){continue;
}this.set(r[1],decodeURIComponent(r[2]));
}}},defer:function(t){t.define(h,false);
t.define(e,false);
t.define(d,0);
t.__ev();
}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,j){if(j){if(j.extend&&!(j.extend instanceof Array)){j.extend=[j.extend];
}{};
var k=j.statics?j.statics:{};
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
},__fI:function(o,p,q,r){var v=q.$$members;

if(v){for(var u in v){if(qx.Bootstrap.isFunction(v[u])){var t=this.__fJ(p,u);
var s=t||qx.Bootstrap.isFunction(o[u]);

if(!s){throw new Error('Implementation of method "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}var w=r===true&&!t&&!qx.Bootstrap.hasInterface(p,q);

if(w){o[u]=this.__fM(q,o[u],u,v[u]);
}}else{if(typeof o[u]===undefined){if(typeof o[u]!==h){throw new Error('Implementation of member "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}}}}}},__fJ:function(x,y){var C=y.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!C){return false;
}var z=qx.Bootstrap.firstLow(C[2]);
var A=qx.Bootstrap.getPropertyDefinition(x,z);

if(!A){return false;
}var B=C[0]==b||C[0]==d;

if(B){return qx.Bootstrap.getPropertyDefinition(x,z).check==g;
}return true;
},__fK:function(D,E){if(E.$$properties){for(var F in E.$$properties){if(!qx.Bootstrap.getPropertyDefinition(D,F)){throw new Error('The property "'+F+'" is not supported by Class "'+D.classname+'"!');
}}}},__fL:function(G,H){if(H.$$events){for(var I in H.$$events){if(!qx.Bootstrap.supportsEvent(G,I)){throw new Error('The event "'+I+'" is not supported by Class "'+G.classname+'"!');
}}}},assertObject:function(J,K){var M=J.constructor;
this.__fI(J,M,K,false);
this.__fK(M,K);
this.__fL(M,K);
var L=K.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assertObject(J,L[i]);
}}},assert:function(N,O,P){this.__fI(N.prototype,N,O,P);
this.__fK(N,O);
this.__fL(N,O);
var Q=O.$$extends;

if(Q){for(var i=0,l=Q.length;i<l;i++){this.assert(N,Q[i],P);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__fM:function(){},__fN:null,__fO:function(){}}});
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
(function(){var cv=';',cu='computed=this.',ct='=value;',cs='this.',cr="set",cq="setThemed",cp="setRuntime",co="init",cn='if(this.',cm='delete this.',bw='!==undefined)',bv='}',bu="resetThemed",bt='else if(this.',bs="string",br='return this.',bq="reset",bp="boolean",bo="resetRuntime",bn='!==undefined){',cC="",cD="refresh",cA='=true;',cB="this.",cy=";",cz='old=this.',cw="();",cx='else ',cE='if(old===undefined)old=this.',cF='old=computed=this.',bU="return this.",bT="get",bW='(value);',bV="(a[",bY='if(old===computed)return value;',bX='if(old===undefined)old=null;',cb=' of an instance of ',ca=' is not (yet) ready!");',bS="]);",bR='!==inherit){',c='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',d='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',e='value !== null && value.nodeType === 9 && value.documentElement',f='===value)return value;',g='value !== null && value.$$type === "Mixin"',h='return init;',j='var init=this.',k='value !== null && value.nodeType === 1 && value.attributes',m="var parent = this.getLayoutParent();",n="Error in property ",cT='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',cS='.validate.call(this, value);',cR='qx.core.Assert.assertInstance(value, Date, msg) || true',cQ='else{',cX="if (!parent) return;",cW=" in method ",cV='qx.core.Assert.assertInstance(value, Error, msg) || true',cU='=computed;',da='Undefined value is not allowed!',cY='(backup);',M="MSIE 6.0",N='if(computed===inherit){',K="inherit",L='Is invalid!',Q='if(value===undefined)prop.error(this,2,"',R='var computed, old=this.',O='else if(computed===undefined)',P="': ",I=" of class ",J='value !== null && value.nodeType !== undefined',v='===undefined)return;',u='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',x="')){",w='qx.core.Assert.assertPositiveInteger(value, msg) || true',r='else this.',q='value=this.',t='","',s='if(init==qx.core.Property.$$inherit)init=null;',p='value !== null && value.$$type === "Interface"',o='var inherit=prop.$$inherit;',W="', qx.event.type.Data, [computed, old]",X="var value = parent.",Y="$$useinit_",ba='computed=undefined;delete this.',S="(value);",T='Requires exactly one argument!',U='",value);',V='computed=value;',bb="$$runtime_",bc=';}',F="$$user_",E='){',D='qx.core.Assert.assertArray(value, msg) || true',C='if(computed===undefined||computed===inherit){',B='qx.core.Assert.assertPositiveNumber(value, msg) || true',A=".prototype",z="Boolean",y=")}",H='(computed, old, "',G='return value;',bd='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',be="if(reg.hasListener(this, '",bf='Does not allow any arguments!',bg=')a[i].',bh="()",bi="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bj='.$$properties.',bk='value !== null && value.$$type === "Theme"',bl="var reg=qx.event.Registration;",bm="())",bA='return null;',bz='qx.core.Assert.assertObject(value, msg) || true',by='");',bx='qx.core.Assert.assertString(value, msg) || true',bE='var pa=this.getLayoutParent();if(pa)computed=pa.',bD="if (value===undefined) value = parent.",bC='value !== null && value.$$type === "Class"',bB='qx.core.Assert.assertFunction(value, msg) || true',bG='!==undefined&&',bF='var computed, old;',bN='var backup=computed;',bO='}else{',bL="object",bM="$$init_",bJ="$$theme_",bK='if(computed===undefined)computed=null;',bH='qx.core.Assert.assertMap(value, msg) || true',bI='qx.core.Assert.assertNumber(value, msg) || true',bP='if((computed===undefined||computed===inherit)&&',bQ="reg.fireEvent(this, '",cf='Null value is not allowed!',ce='qx.core.Assert.assertInteger(value, msg) || true',ch="value",cg="rv:1.8.1",cj="shorthand",ci='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cl='value !== null && value.type !== undefined',ck='value !== null && value.document',cd='throw new Error("Property ',cc="(!this.",cM='qx.core.Assert.assertBoolean(value, msg) || true',cN='if(a[i].',cO="toggle",cP="$$inherit_",cI='var prop=qx.core.Property;',cJ=" with incoming value '",cK="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",cL='if(computed===undefined||computed==inherit)computed=null;',cG="qx.core.Property",cH="is",b='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(cG,{statics:{__lF:{"Boolean":cM,"String":bx,"Number":bI,"Integer":ce,"PositiveNumber":B,"PositiveInteger":w,"Error":cV,"RegExp":ci,"Object":bz,"Array":D,"Map":bH,"Function":bB,"Date":cR,"Node":J,"Element":k,"Document":e,"Window":ck,"Event":cl,"Class":bC,"Mixin":g,"Interface":p,"Theme":bk,"Color":c,"Decorator":u,"Font":d},__lG:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:K,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bs,dereference:bp,inheritable:bp,nullable:bp,themeable:bp,refine:bp,init:null,apply:bs,event:bs,check:null,transform:bs,deferredInit:bp,validate:null},$$allowedGroupKeys:{name:bs,group:bL,mode:bs,themeable:bp},$$inheritable:{},__lH:function(db){var dc=this.__lI(db);

if(!dc.length){var dd=qx.lang.Function.empty;
}else{dd=this.__lJ(dc);
}db.prototype.$$refreshInheritables=dd;
},__lI:function(de){var dg=[];

while(de){var df=de.$$properties;

if(df){for(var name in this.$$inheritable){if(df[name]&&df[name].inheritable){dg.push(name);
}}}de=de.superclass;
}return dg;
},__lJ:function(dh){var dl=this.$$store.inherit;
var dk=this.$$store.init;
var dj=this.$$method.refresh;
var di=[m,cX];

for(var i=0,l=dh.length;i<l;i++){var name=dh[i];
di.push(X,dl[name],cy,bD,dk[name],cy,cB,dj[name],S);
}return new Function(di.join(cC));
},attachRefreshInheritables:function(dm){dm.prototype.$$refreshInheritables=function(){qx.core.Property.__lH(dm);
return this.$$refreshInheritables();
};
},attachMethods:function(dn,name,dp){dp.group?this.__lK(dn,dp,name):this.__lL(dn,dp,name);
},__lK:function(dq,dr,name){var dy=qx.Bootstrap.firstUp(name);
var dx=dq.prototype;
var dz=dr.themeable===true;
{};
var dA=[];
var du=[];

if(dz){var ds=[];
var dw=[];
}var dv=bi;
dA.push(dv);

if(dz){ds.push(dv);
}
if(dr.mode==cj){var dt=cK;
dA.push(dt);

if(dz){ds.push(dt);
}}
for(var i=0,a=dr.group,l=a.length;i<l;i++){{};
dA.push(cB,this.$$method.set[a[i]],bV,i,bS);
du.push(cB,this.$$method.reset[a[i]],cw);

if(dz){{};
ds.push(cB,this.$$method.setThemed[a[i]],bV,i,bS);
dw.push(cB,this.$$method.resetThemed[a[i]],cw);
}}this.$$method.set[name]=cr+dy;
dx[this.$$method.set[name]]=new Function(dA.join(cC));
this.$$method.reset[name]=bq+dy;
dx[this.$$method.reset[name]]=new Function(du.join(cC));

if(dz){this.$$method.setThemed[name]=cq+dy;
dx[this.$$method.setThemed[name]]=new Function(ds.join(cC));
this.$$method.resetThemed[name]=bu+dy;
dx[this.$$method.resetThemed[name]]=new Function(dw.join(cC));
}},__lL:function(dB,dC,name){var dE=qx.Bootstrap.firstUp(name);
var dG=dB.prototype;
{};
if(dC.dereference===undefined&&typeof dC.check===bs){dC.dereference=this.__lM(dC.check);
}var dF=this.$$method;
var dD=this.$$store;
dD.runtime[name]=bb+name;
dD.user[name]=F+name;
dD.theme[name]=bJ+name;
dD.init[name]=bM+name;
dD.inherit[name]=cP+name;
dD.useinit[name]=Y+name;
dF.get[name]=bT+dE;
dG[dF.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,dB,name,bT);
};
dF.set[name]=cr+dE;
dG[dF.set[name]]=function(dH){return qx.core.Property.executeOptimizedSetter(this,dB,name,cr,arguments);
};
dF.reset[name]=bq+dE;
dG[dF.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dB,name,bq);
};

if(dC.inheritable||dC.apply||dC.event||dC.deferredInit){dF.init[name]=co+dE;
dG[dF.init[name]]=function(dI){return qx.core.Property.executeOptimizedSetter(this,dB,name,co,arguments);
};
}
if(dC.inheritable){dF.refresh[name]=cD+dE;
dG[dF.refresh[name]]=function(dJ){return qx.core.Property.executeOptimizedSetter(this,dB,name,cD,arguments);
};
}dF.setRuntime[name]=cp+dE;
dG[dF.setRuntime[name]]=function(dK){return qx.core.Property.executeOptimizedSetter(this,dB,name,cp,arguments);
};
dF.resetRuntime[name]=bo+dE;
dG[dF.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dB,name,bo);
};

if(dC.themeable){dF.setThemed[name]=cq+dE;
dG[dF.setThemed[name]]=function(dL){return qx.core.Property.executeOptimizedSetter(this,dB,name,cq,arguments);
};
dF.resetThemed[name]=bu+dE;
dG[dF.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dB,name,bu);
};
}
if(dC.check===z){dG[cO+dE]=new Function(bU+dF.set[name]+cc+dF.get[name]+bm);
dG[cH+dE]=new Function(bU+dF.get[name]+bh);
}},__lM:function(dM){return !!this.__lG[dM];
},__lN:function(dN){return this.__lG[dN]||qx.Bootstrap.classIsDefined(dN)||(qx.Interface&&qx.Interface.isDefined(dN));
},__lO:{0:b,1:T,2:da,3:bf,4:cf,5:L},error:function(dO,dP,dQ,dR,dS){var dT=dO.constructor.classname;
var dU=n+dQ+I+dT+cW+this.$$method[dR][dQ]+cJ+dS+P;
throw new Error(dU+(this.__lO[dP]||"Unknown reason: "+dP));
},__lP:function(dV,dW,name,dX,dY,ea){var eb=this.$$method[dX][name];
{dW[eb]=new Function(ch,dY.join(cC));
};
{};
qx.Bootstrap.setDisplayName(dW[eb],dV.classname+A,eb);
if(ea===undefined){return dV[eb]();
}else{return dV[eb](ea[0]);
}},executeOptimizedGetter:function(ec,ed,name,ee){var eg=ed.$$properties[name];
var ei=ed.prototype;
var ef=[];
var eh=this.$$store;
ef.push(cn,eh.runtime[name],bw);
ef.push(br,eh.runtime[name],cv);

if(eg.inheritable){ef.push(bt,eh.inherit[name],bw);
ef.push(br,eh.inherit[name],cv);
ef.push(cx);
}ef.push(cn,eh.user[name],bw);
ef.push(br,eh.user[name],cv);

if(eg.themeable){ef.push(bt,eh.theme[name],bw);
ef.push(br,eh.theme[name],cv);
}
if(eg.deferredInit&&eg.init===undefined){ef.push(bt,eh.init[name],bw);
ef.push(br,eh.init[name],cv);
}ef.push(cx);

if(eg.init!==undefined){if(eg.inheritable){ef.push(j,eh.init[name],cv);

if(eg.nullable){ef.push(s);
}else if(eg.init!==undefined){ef.push(br,eh.init[name],cv);
}else{ef.push(bd,name,cb,ed.classname,ca);
}ef.push(h);
}else{ef.push(br,eh.init[name],cv);
}}else if(eg.inheritable||eg.nullable){ef.push(bA);
}else{ef.push(cd,name,cb,ed.classname,ca);
}return this.__lP(ec,ei,name,ee,ef);
},executeOptimizedSetter:function(ej,ek,name,el,em){var er=ek.$$properties[name];
var eq=ek.prototype;
var eo=[];
var en=el===cr||el===cq||el===cp||(el===co&&er.init===undefined);
var ep=er.apply||er.event||er.inheritable;
var es=this.__lQ(el,name);
this.__lR(eo,er,name,el,en);

if(en){this.__lS(eo,ek,er,name);
}
if(ep){this.__lT(eo,en,es,el);
}
if(er.inheritable){eo.push(o);
}{};

if(!ep){this.__lV(eo,name,el,en);
}else{this.__lW(eo,er,name,el,en);
}
if(er.inheritable){this.__lX(eo,er,name,el);
}else if(ep){this.__lY(eo,er,name,el);
}
if(ep){this.__ma(eo,er,name);
if(er.inheritable&&eq._getChildren){this.__mb(eo,name);
}}if(en){eo.push(G);
}return this.__lP(ej,eq,name,el,eo,em);
},__lQ:function(et,name){if(et===cp||et===bo){var eu=this.$$store.runtime[name];
}else if(et===cq||et===bu){eu=this.$$store.theme[name];
}else if(et===co){eu=this.$$store.init[name];
}else{eu=this.$$store.user[name];
}return eu;
},__lR:function(ev,ew,name,ex,ey){{if(!ew.nullable||ew.check||ew.inheritable){ev.push(cI);
}if(ex===cr){ev.push(Q,name,t,ex,U);
}};
},__lS:function(ez,eA,eB,name){if(eB.transform){ez.push(q,eB.transform,bW);
}if(eB.validate){if(typeof eB.validate===bs){ez.push(cs,eB.validate,bW);
}else if(eB.validate instanceof Function){ez.push(eA.classname,bj,name);
ez.push(cS);
}}},__lT:function(eC,eD,eE,eF){var eG=(eF===bq||eF===bu||eF===bo);

if(eD){eC.push(cn,eE,f);
}else if(eG){eC.push(cn,eE,v);
}},__lU:undefined,__lV:function(eH,name,eI,eJ){if(eI===cp){eH.push(cs,this.$$store.runtime[name],ct);
}else if(eI===bo){eH.push(cn,this.$$store.runtime[name],bw);
eH.push(cm,this.$$store.runtime[name],cv);
}else if(eI===cr){eH.push(cs,this.$$store.user[name],ct);
}else if(eI===bq){eH.push(cn,this.$$store.user[name],bw);
eH.push(cm,this.$$store.user[name],cv);
}else if(eI===cq){eH.push(cs,this.$$store.theme[name],ct);
}else if(eI===bu){eH.push(cn,this.$$store.theme[name],bw);
eH.push(cm,this.$$store.theme[name],cv);
}else if(eI===co&&eJ){eH.push(cs,this.$$store.init[name],ct);
}},__lW:function(eK,eL,name,eM,eN){if(eL.inheritable){eK.push(R,this.$$store.inherit[name],cv);
}else{eK.push(bF);
}eK.push(cn,this.$$store.runtime[name],bn);

if(eM===cp){eK.push(cu,this.$$store.runtime[name],ct);
}else if(eM===bo){eK.push(cm,this.$$store.runtime[name],cv);
eK.push(cn,this.$$store.user[name],bw);
eK.push(cu,this.$$store.user[name],cv);
eK.push(bt,this.$$store.theme[name],bw);
eK.push(cu,this.$$store.theme[name],cv);
eK.push(bt,this.$$store.init[name],bn);
eK.push(cu,this.$$store.init[name],cv);
eK.push(cs,this.$$store.useinit[name],cA);
eK.push(bv);
}else{eK.push(cF,this.$$store.runtime[name],cv);
if(eM===cr){eK.push(cs,this.$$store.user[name],ct);
}else if(eM===bq){eK.push(cm,this.$$store.user[name],cv);
}else if(eM===cq){eK.push(cs,this.$$store.theme[name],ct);
}else if(eM===bu){eK.push(cm,this.$$store.theme[name],cv);
}else if(eM===co&&eN){eK.push(cs,this.$$store.init[name],ct);
}}eK.push(bv);
eK.push(bt,this.$$store.user[name],bn);

if(eM===cr){if(!eL.inheritable){eK.push(cz,this.$$store.user[name],cv);
}eK.push(cu,this.$$store.user[name],ct);
}else if(eM===bq){if(!eL.inheritable){eK.push(cz,this.$$store.user[name],cv);
}eK.push(cm,this.$$store.user[name],cv);
eK.push(cn,this.$$store.runtime[name],bw);
eK.push(cu,this.$$store.runtime[name],cv);
eK.push(cn,this.$$store.theme[name],bw);
eK.push(cu,this.$$store.theme[name],cv);
eK.push(bt,this.$$store.init[name],bn);
eK.push(cu,this.$$store.init[name],cv);
eK.push(cs,this.$$store.useinit[name],cA);
eK.push(bv);
}else{if(eM===cp){eK.push(cu,this.$$store.runtime[name],ct);
}else if(eL.inheritable){eK.push(cu,this.$$store.user[name],cv);
}else{eK.push(cF,this.$$store.user[name],cv);
}if(eM===cq){eK.push(cs,this.$$store.theme[name],ct);
}else if(eM===bu){eK.push(cm,this.$$store.theme[name],cv);
}else if(eM===co&&eN){eK.push(cs,this.$$store.init[name],ct);
}}eK.push(bv);
if(eL.themeable){eK.push(bt,this.$$store.theme[name],bn);

if(!eL.inheritable){eK.push(cz,this.$$store.theme[name],cv);
}
if(eM===cp){eK.push(cu,this.$$store.runtime[name],ct);
}else if(eM===cr){eK.push(cu,this.$$store.user[name],ct);
}else if(eM===cq){eK.push(cu,this.$$store.theme[name],ct);
}else if(eM===bu){eK.push(cm,this.$$store.theme[name],cv);
eK.push(cn,this.$$store.init[name],bn);
eK.push(cu,this.$$store.init[name],cv);
eK.push(cs,this.$$store.useinit[name],cA);
eK.push(bv);
}else if(eM===co){if(eN){eK.push(cs,this.$$store.init[name],ct);
}eK.push(cu,this.$$store.theme[name],cv);
}else if(eM===cD){eK.push(cu,this.$$store.theme[name],cv);
}eK.push(bv);
}eK.push(bt,this.$$store.useinit[name],E);

if(!eL.inheritable){eK.push(cz,this.$$store.init[name],cv);
}
if(eM===co){if(eN){eK.push(cu,this.$$store.init[name],ct);
}else{eK.push(cu,this.$$store.init[name],cv);
}}else if(eM===cr||eM===cp||eM===cq||eM===cD){eK.push(cm,this.$$store.useinit[name],cv);

if(eM===cp){eK.push(cu,this.$$store.runtime[name],ct);
}else if(eM===cr){eK.push(cu,this.$$store.user[name],ct);
}else if(eM===cq){eK.push(cu,this.$$store.theme[name],ct);
}else if(eM===cD){eK.push(cu,this.$$store.init[name],cv);
}}eK.push(bv);
if(eM===cr||eM===cp||eM===cq||eM===co){eK.push(cQ);

if(eM===cp){eK.push(cu,this.$$store.runtime[name],ct);
}else if(eM===cr){eK.push(cu,this.$$store.user[name],ct);
}else if(eM===cq){eK.push(cu,this.$$store.theme[name],ct);
}else if(eM===co){if(eN){eK.push(cu,this.$$store.init[name],ct);
}else{eK.push(cu,this.$$store.init[name],cv);
}eK.push(cs,this.$$store.useinit[name],cA);
}eK.push(bv);
}},__lX:function(eO,eP,name,eQ){eO.push(C);

if(eQ===cD){eO.push(V);
}else{eO.push(bE,this.$$store.inherit[name],cv);
}eO.push(bP);
eO.push(cs,this.$$store.init[name],bG);
eO.push(cs,this.$$store.init[name],bR);
eO.push(cu,this.$$store.init[name],cv);
eO.push(cs,this.$$store.useinit[name],cA);
eO.push(bO);
eO.push(cm,this.$$store.useinit[name],bc);
eO.push(bv);
eO.push(bY);
eO.push(N);
eO.push(ba,this.$$store.inherit[name],cv);
eO.push(bv);
eO.push(O);
eO.push(cm,this.$$store.inherit[name],cv);
eO.push(r,this.$$store.inherit[name],cU);
eO.push(bN);
if(eP.init!==undefined&&eQ!==co){eO.push(cE,this.$$store.init[name],cy);
}else{eO.push(bX);
}eO.push(cL);
},__lY:function(eR,eS,name,eT){if(eT!==cr&&eT!==cp&&eT!==cq){eR.push(bK);
}eR.push(bY);
if(eS.init!==undefined&&eT!==co){eR.push(cE,this.$$store.init[name],cy);
}else{eR.push(bX);
}},__ma:function(eU,eV,name){if(eV.apply){eU.push(cs,eV.apply,H,name,by);
}if(eV.event){eU.push(bl,be,eV.event,x,bQ,eV.event,W,y);
}},__mb:function(eW,name){eW.push(cT);
eW.push(cN,this.$$method.refresh[name],bg,this.$$method.refresh[name],cY);
eW.push(bv);
}},defer:function(eX){var fa=navigator.userAgent.indexOf(M)!=-1;
var eY=navigator.userAgent.indexOf(cg)!=-1;
if(fa||eY){eX.__lM=eX.__lN;
}}});
})();
(function(){var q="[Class ",p="]",o="$$init_",n="toString",m="constructor",k="singleton",j=".prototype",h="extend",g="Class",f="destruct",c="qx.Class",e=".",d="static",b="qx.event.type.Data";
qx.Bootstrap.define(c,{statics:{define:function(name,r){if(!r){var r={};
}if(r.include&&!(r.include instanceof Array)){r.include=[r.include];
}if(r.implement&&!(r.implement instanceof Array)){r.implement=[r.implement];
}var s=false;

if(!r.hasOwnProperty(h)&&!r.type){r.type=d;
s=true;
}{};
var t=this.__bX(name,r.type,r.extend,r.statics,r.construct,r.destruct,r.include);
if(r.extend){if(r.properties){this.__ca(t,r.properties,true);
}if(r.members){this.__cc(t,r.members,true,true,false);
}if(r.events){this.__bY(t,r.events,true);
}if(r.include){for(var i=0,l=r.include.length;i<l;i++){this.__cg(t,r.include[i],false);
}}}if(r.settings){for(var u in r.settings){qx.core.Setting.define(u,r.settings[u]);
}}if(r.variants){for(var u in r.variants){qx.core.Variant.define(u,r.variants[u].allowedValues,r.variants[u].defaultValue);
}}if(r.implement){for(var i=0,l=r.implement.length;i<l;i++){this.__ce(t,r.implement[i]);
}}{};
if(r.defer){r.defer.self=t;
r.defer(t,t.prototype,{add:function(name,v){var w={};
w[name]=v;
qx.Class.__ca(t,w,true);
}});
}return t;
},undefine:function(name){delete this.$$registry[name];
var x=name.split(e);
var z=[window];

for(var i=0;i<x.length;i++){z.push(z[i][x[i]]);
}for(var i=z.length-1;i>=1;i--){var y=z[i];
var parent=z[i-1];

if(qx.Bootstrap.isFunction(y)||qx.Bootstrap.objectGetLength(y)===0){delete parent[x[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(A,B){{};
qx.Class.__cg(A,B,false);
},patch:function(C,D){{};
qx.Class.__cg(C,D,true);
},isSubClassOf:function(E,F){if(!E){return false;
}
if(E==F){return true;
}
if(E.prototype instanceof F){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(G){var H=[];

while(G){if(G.$$properties){H.push.apply(H,qx.Bootstrap.getKeys(G.$$properties));
}G=G.superclass;
}return H;
},getByProperty:function(I,name){while(I){if(I.$$properties&&I.$$properties[name]){return I;
}I=I.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(J,K){return J.$$includes&&J.$$includes.indexOf(K)!==-1;
},getByMixin:function(L,M){var N,i,l;

while(L){if(L.$$includes){N=L.$$flatIncludes;

for(i=0,l=N.length;i<l;i++){if(N[i]===M){return L;
}}}L=L.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(O,P){return !!this.getByMixin(O,P);
},hasOwnInterface:function(Q,R){return Q.$$implements&&Q.$$implements.indexOf(R)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(S){var T=[];

while(S){if(S.$$implements){T.push.apply(T,S.$$flatImplements);
}S=S.superclass;
}return T;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(U,V){var W=U.constructor;

if(this.hasInterface(W,V)){return true;
}
try{qx.Interface.assertObject(U,V);
return true;
}catch(X){}
try{qx.Interface.assert(W,V,false);
return true;
}catch(Y){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return q+this.classname+p;
},$$registry:qx.Bootstrap.$$registry,__bT:null,__bU:null,__bV:function(){},__bW:function(){},__bX:function(name,ba,bb,bc,bd,be,bf){var bi;

if(!bb&&true){bi=bc||{};
qx.Bootstrap.setDisplayNames(bi,name);
}else{var bi={};

if(bb){if(!bd){bd=this.__ch();
}
if(this.__cj(bb,bf)){bi=this.__ck(bd,name,ba);
}else{bi=bd;
}if(ba===k){bi.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bd,name,m);
}if(bc){qx.Bootstrap.setDisplayNames(bc,name);
var bj;

for(var i=0,a=qx.Bootstrap.getKeys(bc),l=a.length;i<l;i++){bj=a[i];
var bg=bc[bj];
{bi[bj]=bg;
};
}}}var bh=qx.Bootstrap.createNamespace(name,bi);
bi.name=bi.classname=name;
bi.basename=bh;
bi.$$type=g;

if(ba){bi.$$classtype=ba;
}if(!bi.hasOwnProperty(n)){bi.toString=this.genericToString;
}
if(bb){qx.Bootstrap.extendClass(bi,bd,bb,name,bh);
if(be){{};
bi.$$destructor=be;
qx.Bootstrap.setDisplayName(be,name,f);
}}this.$$registry[name]=bi;
return bi;
},__bY:function(bk,bl,bm){var bn,bn;
{};

if(bk.$$events){for(var bn in bl){bk.$$events[bn]=bl[bn];
}}else{bk.$$events=bl;
}},__ca:function(bo,bp,bq){var br;

if(bq===undefined){bq=false;
}var bs=bo.prototype;

for(var name in bp){br=bp[name];
{};
br.name=name;
if(!br.refine){if(bo.$$properties===undefined){bo.$$properties={};
}bo.$$properties[name]=br;
}if(br.init!==undefined){bo.prototype[o+name]=br.init;
}if(br.event!==undefined){var event={};
event[br.event]=b;
this.__bY(bo,event,bq);
}if(br.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bs.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bo);
}}
if(!br.refine){qx.core.Property.attachMethods(bo,name,br);
}}},__cb:null,__cc:function(bt,bu,bv,bw,bx){var by=bt.prototype;
var bA,bz;
qx.Bootstrap.setDisplayNames(bu,bt.classname+j);

for(var i=0,a=qx.Bootstrap.getKeys(bu),l=a.length;i<l;i++){bA=a[i];
bz=bu[bA];
{};
if(bw!==false&&bz instanceof Function&&bz.$$type==null){if(bx==true){bz=this.__cd(bz,by[bA]);
}else{if(by[bA]){bz.base=by[bA];
}bz.self=bt;
}{};
}by[bA]=bz;
}},__cd:function(bB,bC){if(bC){return function(){var bE=bB.base;
bB.base=bC;
var bD=bB.apply(this,arguments);
bB.base=bE;
return bD;
};
}else{return bB;
}},__ce:function(bF,bG){{};
var bH=qx.Interface.flatten([bG]);

if(bF.$$implements){bF.$$implements.push(bG);
bF.$$flatImplements.push.apply(bF.$$flatImplements,bH);
}else{bF.$$implements=[bG];
bF.$$flatImplements=bH;
}},__cf:function(bI){var name=bI.classname;
var bJ=this.__ck(bI,name,bI.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bI),l=a.length;i<l;i++){bK=a[i];
bJ[bK]=bI[bK];
}bJ.prototype=bI.prototype;
var bM=bI.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bM),l=a.length;i<l;i++){bK=a[i];
var bN=bM[bK];
if(bN&&bN.self==bI){bN.self=bJ;
}}for(var bK in this.$$registry){var bL=this.$$registry[bK];

if(!bL){continue;
}
if(bL.base==bI){bL.base=bJ;
}
if(bL.superclass==bI){bL.superclass=bJ;
}
if(bL.$$original){if(bL.$$original.base==bI){bL.$$original.base=bJ;
}
if(bL.$$original.superclass==bI){bL.$$original.superclass=bJ;
}}}qx.Bootstrap.createNamespace(name,bJ);
this.$$registry[name]=bJ;
return bJ;
},__cg:function(bO,bP,bQ){{};

if(this.hasMixin(bO,bP)){return;
}var bT=bO.$$original;

if(bP.$$constructor&&!bT){bO=this.__cf(bO);
}var bS=qx.Mixin.flatten([bP]);
var bR;

for(var i=0,l=bS.length;i<l;i++){bR=bS[i];
if(bR.$$events){this.__bY(bO,bR.$$events,bQ);
}if(bR.$$properties){this.__ca(bO,bR.$$properties,bQ);
}if(bR.$$members){this.__cc(bO,bR.$$members,bQ,bQ,bQ);
}}if(bO.$$includes){bO.$$includes.push(bP);
bO.$$flatIncludes.push.apply(bO.$$flatIncludes,bS);
}else{bO.$$includes=[bP];
bO.$$flatIncludes=bS;
}},__ch:function(){function bU(){bU.base.apply(this,arguments);
}return bU;
},__ci:function(){return function(){};
},__cj:function(bV,bW){{};
if(bV&&bV.$$includes){var bX=bV.$$flatIncludes;

for(var i=0,l=bX.length;i<l;i++){if(bX[i].$$constructor){return true;
}}}if(bW){var bY=qx.Mixin.flatten(bW);

for(var i=0,l=bY.length;i<l;i++){if(bY[i].$$constructor){return true;
}}}return false;
},__ck:function(ca,name,cb){var cc;
var cd=function(){var cg=cd;
{};
var cf=cg.$$original.apply(this,arguments);
if(cg.$$includes){var ce=cg.$$flatIncludes;

for(var i=0,l=ce.length;i<l;i++){if(ce[i].$$constructor){ce[i].$$constructor.apply(this,arguments);
}}}{};
return cf;
};
{};
cd.$$original=ca;
ca.wrapper=cd;
return cd;
}},defer:function(){var ch,ci,cj;
{};
}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__cM:{},__cN:0,__cO:[],register:function(f){var j=this.__cM;

if(!j){return;
}var h=f.$$hash;

if(h==null){var g=this.__cO;

if(g.length>0){h=g.pop();
}else{h=(this.__cN++)+d;
}f.$$hash=h;
}{};
j[h]=f;
},unregister:function(k){var m=k.$$hash;

if(m==null){return;
}var n=this.__cM;

if(n&&n[m]){delete n[m];
this.__cO.push(m);
}try{delete k.$$hash;
}catch(o){if(k.removeAttribute){k.removeAttribute(e);
}}},toHashCode:function(p){{};
var r=p.$$hash;

if(r!=null){return r;
}var q=this.__cO;

if(q.length>0){r=q.pop();
}else{r=(this.__cN++)+d;
}return p.$$hash=r;
},clearHashCode:function(s){{};
var t=s.$$hash;

if(t!=null){this.__cO.push(t);
try{delete s.$$hash;
}catch(u){if(s.removeAttribute){s.removeAttribute(e);
}}}},fromHashCode:function(v){return this.__cM[v]||null;
},shutdown:function(){this.inShutDown=true;
var x=this.__cM;
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
delete this.__cM;
},getRegistry:function(){return this.__cM;
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__et:function(){var t=d;
var x=e;
var w=window.navigator.userAgent;
var z=false;
var v=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){t=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(w)){x=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){x+=q+RegExp.$3;
}}else{v=true;
x=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){t=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(w)){x=RegExp.$1;
var y=RegExp(n).exec(x);

if(y){x=x.slice(0,y.index);
}}else{v=true;
x=m;
}}else if(window.controllers&&window.navigator.product===c){t=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(w)){x=RegExp.$1;
}else{v=true;
x=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(w)){t=k;
x=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(x<8&&/Trident\/([^\);]+)(\)|;)/.test(w)){if(RegExp.$1===g){x=h;
}}this.MSHTML=true;
}else{var u=window.qxFail;

if(u&&typeof u===o){var t=u();

if(t.NAME&&t.FULLVERSION){t=t.NAME;
this[t.toUpperCase()]=true;
x=t.FULLVERSION;
}}else{z=true;
v=true;
x=r;
t=s;
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+w+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=z;
this.UNKNOWN_VERSION=v;
this.NAME=t;
this.FULLVERSION=x;
this.VERSION=parseFloat(x);
}},defer:function(A){A.__et();
}});
})();
(function(){var x="off",w="on",u="|",t="default",s="object",r="&",q="qx.aspects",p="qx.mobile.nativescroll",o="qx.mobile.emulatetouch",n="$",e="qx.allowUrlVariants",m="qx.debug",h="qx.client",c="qx.dynlocale",b="webkit",g="qxvariant",f="opera",j=":",a="qx.core.Variant",k="mshtml",d="gecko";
qx.Bootstrap.define(a,{statics:{__kX:{},__kY:{},compilerIsSet:function(){return true;
},define:function(y,z,A){{};

if(!this.__kX[y]){this.__kX[y]={};
}else{}this.__kX[y].allowedValues=z;
this.__kX[y].defaultValue=A;
},get:function(B){var C=this.__kX[B];
{};

if(C.value!==undefined){return C.value;
}return C.defaultValue;
},__la:function(){if(window.qxvariants){for(var D in qxvariants){{};

if(!this.__kX[D]){this.__kX[D]={};
}this.__kX[D].value=qxvariants[D];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(E){}this.__lb(this.__kX);
}},__lb:function(){if(qx.core.Setting.get(e)!=true){return;
}var F=document.location.search.slice(1).split(r);

for(var i=0;i<F.length;i++){var G=F[i].split(j);

if(G.length!=3||G[0]!=g){continue;
}var H=G[1];

if(!this.__kX[H]){this.__kX[H]={};
}this.__kX[H].value=decodeURIComponent(G[2]);
}},select:function(I,J){{};

for(var K in J){if(this.isSet(I,K)){return J[K];
}}
if(J[t]!==undefined){return J[t];
}{};
},isSet:function(L,M){var N=L+n+M;

if(this.__kY[N]!==undefined){return this.__kY[N];
}var P=false;
if(M.indexOf(u)<0){P=this.get(L)===M;
}else{var O=M.split(u);

for(var i=0,l=O.length;i<l;i++){if(this.get(L)===O[i]){P=true;
break;
}}}this.__kY[N]=P;
return P;
},__lc:function(v){return typeof v===s&&v!==null&&v instanceof Array;
},__ld:function(v){return typeof v===s&&v!==null&&!(v instanceof Array);
},__le:function(Q,R){for(var i=0,l=Q.length;i<l;i++){if(Q[i]==R){return true;
}}return false;
}},defer:function(S){S.define(h,[d,k,f,b],qx.bom.client.Engine.NAME);
S.define(m,[w,x],w);
S.define(q,[w,x],x);
S.define(c,[w,x],w);
S.define(o,[w,x],x);
S.define(p,[w,x],x);
S.__la();
}});
})();
(function(){var d="qx.dom.Node",c="qx.client",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(e){return e.nodeType===
this.DOCUMENT?e:
e.ownerDocument||e.document;
},getWindow:qx.core.Variant.select(c,{"mshtml":function(f){if(f.nodeType==null){return f;
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
case 2:return s.nodeValue;
break;
case 3:return s.nodeValue;
break;
}return null;
},isBlockNode:function(u){if(!qx.dom.Node.isElement(u)){return false;
}u=qx.dom.Node.getName(u);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(u);
}}});
})();
(function(){var j="on",i="qx.client",h="gecko",g="function",f="HTMLEvents",d="mousedown",c="qx.bom.Event",b="return;",a="mouseover";
qx.Class.define(c,{statics:{addNativeListener:function(k,l,m,n){if(k.addEventListener){k.addEventListener(l,m,!!n);
}else if(k.attachEvent){k.attachEvent(j+l,m);
}},removeNativeListener:function(o,p,q,r){if(o.removeEventListener){o.removeEventListener(p,q,!!r);
}else if(o.detachEvent){try{o.detachEvent(j+p,q);
}catch(e){if(e.number!==-2146828218){throw e;
}}}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if(qx.core.Variant.isSet(i,h)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===a){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if(qx.core.Variant.isSet(i,h)&&qx.bom.client.Engine.VERSION>=1.9&&e.type==d&&e.button==2){return;
}e.preventDefault();
if(qx.core.Variant.isSet(i,h)&&qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(s){}}}else{try{e.keyCode=0;
}catch(t){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(u,v){if(document.createEvent){var w=document.createEvent(f);
w.initEvent(v,true,true);
return !u.dispatchEvent(w);
}else{var w=document.createEventObject();
return u.fireEvent(j+v,w);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(x,y){return x.hasOwnProperty(j+y);
},"default":function(z,A){var B=j+A;
var C=(B in z);

if(!C){C=typeof z[B]==g;

if(!C&&z.setAttribute){z.setAttribute(B,b);
C=typeof z[B]==g;
z.removeAttribute(B);
}}return C;
}})}});
})();
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="UNKNOWN_",j="__fs",h="c",g="DOM_",c="__ft",f="WIN_",e="QX_",b="qx.event.Manager",a="capture",d="DOCUMENT_";
qx.Class.define(b,{extend:Object,construct:function(s,t){this.__fo=s;
this.__fp=qx.core.ObjectRegistry.toHashCode(s);
this.__fq=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__fr={};
this.__fs={};
this.__ft={};
this.__fu={};
},statics:{__fv:0,getNextUniqueId:function(){return (this.__fv++)+o;
}},members:{__fq:null,__fr:null,__ft:null,__fw:null,__fs:null,__fu:null,__fo:null,__fp:null,getWindow:function(){return this.__fo;
},getWindowId:function(){return this.__fp;
},getHandler:function(u){var v=this.__fs[u.classname];

if(v){return v;
}return this.__fs[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__ft[w.classname];

if(x){return x;
}return this.__ft[w.classname]=new w(this,this.__fq);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__fr[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__fr[M];
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
var X=this.__fr[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__fx(P,W,R);
}else{this.__fy(P,W,R);
}}}},hasListener:function(Y,ba,bb){{};
var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__fr[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return bd&&bd.length>0;
},importListeners:function(bg,bh){{};
var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__fr[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__fx(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__fv++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
{};
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__fr[bx];

if(!bz){bz=this.__fr[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__fx(bp,bq,bs);
}var by=(qx.event.Manager.__fv++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=g+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__fo){bF=true;
bL=f+bB;
}else if(bA.classname){bO=true;
bL=e+bA.classname+n+bB;
}else{bL=k+bA+n+bB;
}var bH=this.__fu;

if(bH[bL]){return bH[bL];
}var bK=this.__fq.getHandlers();
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
},__fx:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}{};
},removeListener:function(bT,bU,bV,self,bW){var cb;
{};
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__fr[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__fy(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
{};
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__fr[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__fy(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__fr[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===a;
this.__fy(cq,cv,cr);
}}delete this.__fr[cu];
return true;
},deleteAllListeners:function(cx){delete this.__fr[cx];
},__fy:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}{};
},dispatchEvent:function(cC,event){var cH;
{};
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__fq.getDispatchers();
var cF;
var cE=false;

for(var i=0,l=cG.length;i<l;i++){cF=this.getDispatcher(cG[i]);
if(cF.canDispatchEvent(cC,event,cI)){cF.dispatchEvent(cC,event,cI);
cE=true;
break;
}}
if(!cE){{};
return true;
}var cD=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cD;
},dispose:function(){this.__fq.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,j);
qx.util.DisposeUtil.disposeMap(this,c);
this.__fr=this.__fo=this.__fw=null;
this.__fq=this.__fu=null;
}}});
})();
(function(){var g="mshtml",f="qx.client",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Class.define(d,{statics:{toArray:function(h,j){return this.cast(h,Array,j);
},cast:function(k,m,n){if(k.constructor===m){return k;
}
if(qx.Class.hasInterface(k,qx.data.IListData)){var k=k.toArray();
}var o=new m;
if(qx.core.Variant.isSet(f,g)){if(k.item){for(var i=n||0,l=k.length;i<l;i++){o.push(k[i]);
}return o;
}}if(Object.prototype.toString.call(k)===e&&n==null){o.push.apply(o,k);
}else{o.push.apply(o,Array.prototype.slice.call(k,n||0));
}return o;
},fromArguments:function(p,q){return Array.prototype.slice.call(p,q||0);
},fromCollection:function(r){if(qx.core.Variant.isSet(f,g)){if(r.item){var s=[];

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
},append:function(H,I){{};
Array.prototype.push.apply(H,I);
return H;
},exclude:function(J,K){{};

for(var i=0,M=K.length,L;i<M;i++){L=J.indexOf(K[i]);

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
},max:function(V){{};
var i,X=V.length,W=V[0];

for(i=1;i<X;i++){if(V[i]>W){W=V[i];
}}return W===undefined?null:W;
},min:function(Y){{};
var i,bb=Y.length,ba=Y[0];

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
},create:function(m,n){{};
if(!n){return m;
}if(!(n.self||n.args||n.delay!=null||n.periodical!=null||n.attempt)){return m;
}return function(event){{};
var p=qx.lang.Array.fromArguments(arguments);
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
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__fc:{},getManager:function(d){if(d==null){{};
d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__fc[f];

if(!e){e=new qx.event.Manager(d,this);
this.__fc[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__fc[h];
},addListener:function(i,j,k,self,l){return this.getManager(i).addListener(i,j,k,self,l);
},removeListener:function(m,n,o,self,p){return this.getManager(m).removeListener(m,n,o,self,p);
},removeListenerById:function(q,r){return this.getManager(q).removeListenerById(q,r);
},removeAllListeners:function(s){return this.getManager(s).removeAllListeners(s);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(v,w,x){return this.getManager(v).hasListener(v,w,x);
},serializeListeners:function(y){return this.getManager(y).serializeListeners(y);
},createEvent:function(z,A,B){{};
if(A==null){A=qx.event.type.Event;
}var C=qx.event.Pool.getInstance().getObject(A);
B?C.init.apply(C,B):C.init();
if(z){C.setType(z);
}return C;
},dispatchEvent:function(D,event){return this.getManager(D).dispatchEvent(D,event);
},fireEvent:function(E,F,G,H){var I;
{};
var J=this.createEvent(F,G||null,H);
return this.getManager(E).dispatchEvent(E,J);
},fireNonBubblingEvent:function(K,L,M,N){{};
var O=this.getManager(K);

if(!O.hasListener(K,L,false)){return true;
}var P=this.createEvent(L,M||null,N);
return O.dispatchEvent(K,P);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__fd:[],addHandler:function(Q){{};
this.__fd.push(Q);
this.__fd.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__fd;
},__fe:[],addDispatcher:function(R,S){{};
this.__fe.push(R);
this.__fe.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__fe;
}}});
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
},members:{__iq:0,__ir:0,__is:false,__it:0,__iu:null,__iv:null,setMaxEntries:function(c){this.__iv=c;
this.clear();
},getMaxEntries:function(){return this.__iv;
},addEntry:function(d){this.__iu[this.__iq]=d;
this.__iq=this.__iw(this.__iq,1);
var e=this.getMaxEntries();

if(this.__ir<e){this.__ir++;
}if(this.__is&&(this.__it<e)){this.__it++;
}},mark:function(){this.__is=true;
this.__it=0;
},clearMark:function(){this.__is=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__ir){f=this.__ir;
}if(g&&this.__is&&(f>this.__it)){f=this.__it;
}
if(f>0){var i=this.__iw(this.__iq,-1);
var h=this.__iw(i,-f+1);
var j;

if(h<=i){j=this.__iu.slice(h,i+1);
}else{j=this.__iu.slice(h,this.__ir).concat(this.__iu.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__iu=new Array(this.getMaxEntries());
this.__ir=0;
this.__it=0;
this.__iq=0;
},__iw:function(k,l){var m=this.getMaxEntries();
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
(function(){var j=":",h="qx.client",g="anonymous",f="...",e="qx.dev.StackTrace",d="",c="\n",b="/source/class/",a=".";
qx.Class.define(e,{statics:{getStackTrace:qx.core.Variant.select(h,{"gecko":function(){try{throw new Error();
}catch(x){var r=this.getStackTraceFromError(x);
qx.lang.Array.removeAt(r,0);
var p=this.getStackTraceFromCaller(arguments);
var n=p.length>r.length?p:r;

for(var i=0;i<Math.min(p.length,r.length);i++){var o=p[i];

if(o.indexOf(g)>=0){continue;
}var v=o.split(j);

if(v.length!=2){continue;
}var t=v[0];
var m=v[1];
var l=r[i];
var w=l.split(j);
var s=w[0];
var k=w[1];

if(qx.Class.getByName(s)){var q=s;
}else{q=t;
}var u=q+j;

if(m){u+=m+j;
}u+=k;
n[i]=u;
}return n;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var y;

try{y.bar();
}catch(A){var z=this.getStackTraceFromError(A);
qx.lang.Array.removeAt(z,0);
return z;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(h,{"opera":function(B){return [];
},"default":function(C){var H=[];
var G=qx.lang.Function.getCaller(C);
var D={};

while(G){var E=qx.lang.Function.getName(G);
H.push(E);

try{G=G.caller;
}catch(I){break;
}
if(!G){break;
}var F=qx.core.ObjectRegistry.toHashCode(G);

if(D[F]){H.push(f);
break;
}D[F]=G;
}return H;
}}),getStackTraceFromError:qx.core.Variant.select(h,{"gecko":function(J){if(!J.stack){return [];
}var P=/@(.+):(\d+)$/gm;
var K;
var L=[];

while((K=P.exec(J.stack))!=null){var M=K[1];
var O=K[2];
var N=this.__kR(M);
L.push(N+j+O);
}return L;
},"webkit":function(Q){if(Q.sourceURL&&Q.line){return [this.__kR(Q.sourceURL)+j+Q.line];
}else{return [];
}},"opera":function(R){if(R.message.indexOf("Backtrace:")<0){return [];
}var T=[];
var U=qx.lang.String.trim(R.message.split("Backtrace:")[1]);
var V=U.split(c);

for(var i=0;i<V.length;i++){var S=V[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(S&&S.length>=2){var X=S[1];
var W=this.__kR(S[2]);
T.push(W+j+X);
}}return T;
},"default":function(){return [];
}}),__kR:function(Y){var bc=b;
var ba=Y.indexOf(bc);
var bb=(ba==-1)?Y:Y.substring(ba+bc.length).replace(/\//g,a).replace(/\.js$/,d);
return bb;
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
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",H="number",G="stringify",F="]",E="date",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",s="qx.log.Logger",t="[",q="#",r="warn",o="document",p="{...(",m="text[",n="[...(",u="\n",v=")}",x=")]",w="object";
qx.Class.define(s,{statics:{__ff:A,setLevel:function(I){this.__ff=I;
},getLevel:function(){return this.__ff;
},setTreshold:function(J){this.__fi.setMaxMessages(J);
},getTreshold:function(){return this.__fi.getMaxMessages();
},__fg:{},__fh:0,register:function(K){if(K.$$id){return;
}var M=this.__fh++;
this.__fg[M]=K;
K.$$id=M;
var L=this.__fj;
var N=this.__fi.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__ff]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__fg[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__fk(A,arguments);
},info:function(S,T){qx.log.Logger.__fk(e,arguments);
},warn:function(U,V){qx.log.Logger.__fk(r,arguments);
},error:function(W,X){qx.log.Logger.__fk(j,arguments);
},trace:function(Y){qx.log.Logger.__fk(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
{};
},deprecatedClassWarning:function(bd,be){var bf;
{};
},deprecatedEventWarning:function(bg,event,bh){var bi;
{};
},deprecatedMixinWarning:function(bj,bk){var bl;
{};
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
{};
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
{};
},clear:function(){this.__fi.clearHistory();
},__fi:new qx.log.appender.RingBuffer(50),__fj:{debug:0,info:1,warn:2,error:3},__fk:function(bv,bw){var bB=this.__fj;

if(bB[bv]<bB[this.__ff]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__fm(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__fi.process(bD);
var bE=this.__fg;

for(var bz in bE){bE[bz].process(bD);
}},__fl:function(bF){if(bF===undefined){return y;
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
},__fm:function(bH,bI){var bP=this.__fl(bH);
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
}bL.push(this.__fm(bH[i],false));
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
bJ=this.__fm(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__fk(bR[i][0],bR[i][1]);
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
},base:function(r,s){{};

if(arguments.length===1){return r.callee.base.call(this);
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
}{};
}return this[C[z]](A);
}else{for(var B in z){if(!this[C[B]]){if(this[q+qx.Bootstrap.firstUp(B)]!=undefined){this[q+qx.Bootstrap.firstUp(B)](z[B]);
continue;
}{};
}this[C[B]](z[B]);
}return this;
}},get:function(D){var E=qx.core.Property.$$method.get;

if(!this[E[D]]){if(this[p+qx.Bootstrap.firstUp(D)]!=undefined){return this[p+qx.Bootstrap.firstUp(D)]();
}{};
}return this[E[D]]();
},reset:function(F){var G=qx.core.Property.$$method.reset;

if(!this[G[F]]){if(this[o+qx.Bootstrap.firstUp(F)]!=undefined){this[o+qx.Bootstrap.firstUp(F)]();
return;
}{};
}this[G[F]]();
},__lw:qx.event.Registration,addListener:function(H,I,self,J){if(!this.$$disposed){return this.__lw.addListener(this,H,I,self,J);
}return null;
},addListenerOnce:function(K,L,self,M){var N=function(e){this.removeListener(K,N,this,M);
L.call(self||this,e);
};
return this.addListener(K,N,this,M);
},removeListener:function(O,P,self,Q){if(!this.$$disposed){return this.__lw.removeListener(this,O,P,self,Q);
}return false;
},removeListenerById:function(R){if(!this.$$disposed){return this.__lw.removeListenerById(this,R);
}return false;
},hasListener:function(S,T){return this.__lw.hasListener(this,S,T);
},dispatchEvent:function(U){if(!this.$$disposed){return this.__lw.dispatchEvent(this,U);
}return true;
},fireEvent:function(V,W,X){if(!this.$$disposed){return this.__lw.fireEvent(this,V,W,X);
}return true;
},fireNonBubblingEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__lw.fireNonBubblingEvent(this,Y,ba,bb);
}return true;
},fireDataEvent:function(bc,bd,be,bf){if(!this.$$disposed){if(be===undefined){be=null;
}return this.__lw.fireNonBubblingEvent(this,bc,qx.event.type.Data,[bd,be,!!bf]);
}return true;
},__lx:null,setUserData:function(bg,bh){if(!this.__lx){this.__lx={};
}this.__lx[bg]=bh;
},getUserData:function(bi){if(!this.__lx){return null;
}var bj=this.__lx[bi];
return bj===undefined?null:bj;
},__ly:qx.log.Logger,debug:function(bk){this.__lz(f,arguments);
},info:function(bl){this.__lz(m,arguments);
},warn:function(bm){this.__lz(h,arguments);
},error:function(bn){this.__lz(j,arguments);
},trace:function(){this.__ly.trace(this);
},__lz:function(bo,bp){var bq=qx.lang.Array.fromArguments(bp);
bq.unshift(this);
this.__ly[bo].apply(this.__ly,bq);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bv,bt,bs,bw;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var bu=this.constructor;
var br;

while(bu.superclass){if(bu.$$destructor){bu.$$destructor.call(this);
}if(bu.$$includes){br=bu.$$flatIncludes;

for(var i=0,l=br.length;i<l;i++){if(br[i].$$destructor){br[i].$$destructor.call(this);
}}}bu=bu.superclass;
}if(this.__lA){this.__lA();
}{};
},__lA:null,__lB:function(){var bx=qx.Class.getProperties(this.constructor);

for(var i=0,l=bx.length;i<l;i++){delete this[d+bx[i]];
}},_disposeObjects:function(by){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bz){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bA){qx.util.DisposeUtil.disposeArray(this,bA);
},_disposeMap:function(bB){qx.util.DisposeUtil.disposeMap(this,bB);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bC,bD){{};
var bF=navigator.userAgent.indexOf(n)!=-1;
var bE=navigator.userAgent.indexOf(c)!=-1;
if(bF||bE){bD.__lA=bD.__lB;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__lx=null;
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
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(c,event,d){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(d,f){this.__kx=d||null;
this.__ky=f||window;

if(qx.core.Setting.get(c)===b){if(d&&window.onerror){var g=qx.Bootstrap.bind(this.__kA,this);

if(this.__kz==null){this.__kz=window.onerror;
}var self=this;
window.onerror=function(e){self.__kz(e);
g(e);
};
}
if(d&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__kA,this);
}if(this.__kx==null){if(this.__kz!=null){window.onerror=this.__kz;
this.__kz=null;
}else{window.onerror=null;
}}}},__kA:function(h,i,j){if(this.__kx){this.handleError(new qx.core.WindowError(h,i,j));
return true;
}},observeMethod:function(k){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__kx){return k.apply(this,arguments);
}
try{return k.apply(this,arguments);
}catch(l){self.handleError(new qx.core.GlobalError(l,arguments));
}};
}else{return k;
}},handleError:function(m){if(this.__kx){this.__kx.call(this.__ky,m);
}}},defer:function(n){qx.core.Setting.define(c,b);
n.setErrorHandler(null,null);
}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__kS=b+(c&&c.message?c.message:c);
Error.call(this,this.__kS);
this.__kT=d;
this.__kU=c;
},members:{__kU:null,__kT:null,__kS:null,toString:function(){return this.__kS;
},getArguments:function(){return this.__kT;
},getSourceException:function(){return this.__kU;
}},destruct:function(){this.__kU=null;
this.__kT=null;
this.__kS=null;
}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var m="ready",l="qx.client",k="mshtml",j="load",i="unload",h="qx.event.handler.Application",g="complete",f="qx.application",d="gecko|opera|webkit",c="left",a="DOMContentLoaded",b="shutdown";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){qx.core.Object.call(this);
this._window=n.getWindow();
this.__ij=false;
this.__ik=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var o=qx.event.handler.Application.$$instance;

if(o){o.__in();
}}},members:{canHandleEvent:function(p,q){},registerEvent:function(r,s,t){},unregisterEvent:function(u,v,w){},__il:null,__ij:null,__ik:null,__im:null,__in:function(){if(!this.__il&&this.__ij&&qx.$$loader.scriptLoaded){try{var x=qx.core.Setting.get(f);

if(!qx.Class.getByName(x)){return;
}}catch(e){}if(qx.core.Variant.isSet(l,k)){if(qx.event.Registration.hasListener(this._window,m)){this.__il=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__il=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__il;
},_initObserver:function(){if(qx.$$domReady||document.readyState==g||document.readyState==m){this.__ij=true;
this.__in();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(l,d)){qx.bom.Event.addNativeListener(this._window,a,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(l,k)){var self=this;
var y=function(){try{document.documentElement.doScroll(c);

if(document.body){self._onNativeLoadWrapped();
}}catch(z){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,i,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,i,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__ij=true;
this.__in();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__im){this.__im=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
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
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__ku||null;
},ready:function(){if(this.__ku){return;
}
if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var h=qx.core.Setting.get(d);
var i=qx.Class.getByName(h);

if(i){this.__ku=new i;
var g=new Date;
this.__ku.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-g)+"ms");
var g=new Date;
this.__ku.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-g)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+h);
}},__kv:function(e){var j=this.__ku;

if(j){e.setReturnValue(j.close());
}},__kw:function(){var k=this.__ku;

if(k){k.terminate();
}}},defer:function(l){qx.event.Registration.addListener(window,f,l.ready,l);
qx.event.Registration.addListener(window,a,l.__kw,l);
qx.event.Registration.addListener(window,c,l.__kv,l);
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
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__nv:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__nv;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__nv=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__nv=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var o="</div>",n="<div style='background-color: cyan; text-align: center;'>",m="row",l="2*",k="1*",j="    I'm red!",i="  </span>",h="end",g="Literal",f="  Hi there.",c="  <span style='color: red;'>",e="demobrowser.demo.progressive.ProgressiveTable_Html",d="  Hello world!",b="    &nbsp;&nbsp;&nbsp;",a="Html";
qx.Class.define(e,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);
var y=function(B,C){var D={renderer:m,location:h,data:[B,B]};
return D;
};
var x=new qx.ui.progressive.renderer.table.Widths(2);
x.setWidth(0,l);
x.setWidth(1,k);
var s=[g,a];
var u=new qx.ui.progressive.headfoot.TableHeading(x,s);
var q=new qx.ui.progressive.headfoot.Progress(x,s);
var A=new qx.ui.progressive.structure.Default(u,q);
var p=new qx.ui.progressive.Progressive(A);
var w=new qx.ui.progressive.model.Default();
var v=[];
var t=n+d+o;
v.push(y(t));
var t=n+f+c+b+j+i+o;
v.push(y(t));
w.addElements(v);
p.setDataModel(w);
var z=new qx.ui.progressive.renderer.table.Row(x);
p.addRenderer(m,z);
var r=new qx.ui.progressive.renderer.table.cell.String();
z.addRenderer(0,r);
var r=new qx.ui.progressive.renderer.table.cell.Html();
z.addRenderer(1,r);
this.getRoot().add(p,{edge:50});
p.render();
}}});
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(b,c){{};
this._type=null;
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
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
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
qx.Class.define(a,{extend:qx.event.type.Event,members:{__jO:null,__jP:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__jO=b;
this.__jP=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__jO=this.__jO;
f.__jP=this.__jP;
return f;
},getData:function(){return this.__jO;
},getOldData:function(){return this.__jP;
}},destruct:function(){this.__jO=this.__jP=null;
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cW=c;
this.__cX=d||b;
this.__cY=e===undefined?-1:e;
},members:{__cW:null,__cX:null,__cY:null,toString:function(){return this.__cW;
},getUri:function(){return this.__cX;
},getLineNumber:function(){return this.__cY;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__fH={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__fH:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__fH[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__fH){return;
}var h=g.classname;
var j=this.__fH[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__fH[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__fH;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__fH;
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
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="set",D="deepBinding",C="item",B="reset",A="' (",z="Boolean",y=") to the object '",x="Integer",w=" of object ",v="qx.data.SingleValueBinding",u="Binding property ",s="Binding from '",t="PositiveNumber",q="PositiveInteger",r="Binding does not exist!",o=").",p="Date",n=" not possible: No event available. ";
qx.Class.define(v,{statics:{DEBUG_ON:false,__gl:{},bind:function(E,F,G,H,I){var S=this.__gn(E,F,G,H,I);
var N=F.split(d);
var K=this.__gt(N);
var R=[];
var O=[];
var P=[];
var L=[];
var M=E;
for(var i=0;i<N.length;i++){if(K[i]!==l){L.push(g);
}else{L.push(this.__go(M,N[i]));
}R[i]=M;
if(i==N.length-1){if(K[i]!==l){var V=K[i]===h?M.length-1:K[i];
var J=M.getItem(V);
this.__gs(J,G,H,I,E);
P[i]=this.__gu(M,L[i],G,H,I,K[i]);
}else{if(N[i]!=null&&M[m+qx.lang.String.firstUp(N[i])]!=null){var J=M[m+qx.lang.String.firstUp(N[i])]();
this.__gs(J,G,H,I,E);
}P[i]=this.__gu(M,L[i],G,H,I);
}}else{var T={index:i,propertyNames:N,sources:R,listenerIds:P,arrayIndexValues:K,targetObject:G,targetPropertyChain:H,options:I,listeners:O};
var Q=qx.lang.Function.bind(this.__gm,this,T);
O.push(Q);
P[i]=M.addListener(L[i],Q);
}if(M[m+qx.lang.String.firstUp(N[i])]==null){M=null;
}else if(K[i]!==l){M=M[m+qx.lang.String.firstUp(N[i])](K[i]);
}else{M=M[m+qx.lang.String.firstUp(N[i])]();
}
if(!M){break;
}}var U={type:D,listenerIds:P,sources:R,targetListenerIds:S.listenerIds,targets:S.targets};
this.__gv(U,E,F,G,H);
return U;
},__gm:function(W){if(W.options&&W.options.onUpdate){W.options.onUpdate(W.sources[W.index],W.targetObject);
}for(var j=W.index+1;j<W.propertyNames.length;j++){var bb=W.sources[j];
W.sources[j]=null;

if(!bb){continue;
}bb.removeListenerById(W.listenerIds[j]);
}var bb=W.sources[W.index];
for(var j=W.index+1;j<W.propertyNames.length;j++){if(W.arrayIndexValues[j-1]!==l){bb=bb[m+qx.lang.String.firstUp(W.propertyNames[j-1])](W.arrayIndexValues[j-1]);
}else{bb=bb[m+qx.lang.String.firstUp(W.propertyNames[j-1])]();
}W.sources[j]=bb;
if(!bb){this.__gp(W.targetObject,W.targetPropertyChain);
break;
}if(j==W.propertyNames.length-1){if(qx.Class.implementsInterface(bb,qx.data.IListData)){var bc=W.arrayIndexValues[j]===h?bb.length-1:W.arrayIndexValues[j];
var Y=bb.getItem(bc);
this.__gs(Y,W.targetObject,W.targetPropertyChain,W.options,W.sources[W.index]);
W.listenerIds[j]=this.__gu(bb,g,W.targetObject,W.targetPropertyChain,W.options,W.arrayIndexValues[j]);
}else{if(W.propertyNames[j]!=null&&bb[m+qx.lang.String.firstUp(W.propertyNames[j])]!=null){var Y=bb[m+qx.lang.String.firstUp(W.propertyNames[j])]();
this.__gs(Y,W.targetObject,W.targetPropertyChain,W.options,W.sources[W.index]);
}var ba=this.__go(bb,W.propertyNames[j]);
W.listenerIds[j]=this.__gu(bb,ba,W.targetObject,W.targetPropertyChain,W.options);
}}else{if(W.listeners[j]==null){var X=qx.lang.Function.bind(this.__gm,this,W);
W.listeners.push(X);
}if(qx.Class.implementsInterface(bb,qx.data.IListData)){var ba=g;
}else{var ba=this.__go(bb,W.propertyNames[j]);
}W.listenerIds[j]=bb.addListener(ba,W.listeners[j]);
}}},__gn:function(bd,be,bf,bg,bh){var bl=bg.split(d);
var bj=this.__gt(bl);
var bq=[];
var bp=[];
var bn=[];
var bm=[];
var bk=bf;
for(var i=0;i<bl.length-1;i++){if(bj[i]!==l){bm.push(g);
}else{try{bm.push(this.__go(bk,bl[i]));
}catch(e){break;
}}bq[i]=bk;
var bo=function(){for(var j=i+1;j<bl.length-1;j++){var bt=bq[j];
bq[j]=null;

if(!bt){continue;
}bt.removeListenerById(bn[j]);
}var bt=bq[i];
for(var j=i+1;j<bl.length-1;j++){var br=qx.lang.String.firstUp(bl[j-1]);
if(bj[j-1]!==l){var bu=bj[j-1]===h?bt.getLength()-1:bj[j-1];
bt=bt[m+br](bu);
}else{bt=bt[m+br]();
}bq[j]=bt;
if(bp[j]==null){bp.push(bo);
}if(qx.Class.implementsInterface(bt,qx.data.IListData)){var bs=g;
}else{try{var bs=qx.data.SingleValueBinding.__go(bt,bl[j]);
}catch(e){break;
}}bn[j]=bt.addListener(bs,bp[j]);
}qx.data.SingleValueBinding.updateTarget(bd,be,bf,bg,bh);
};
bp.push(bo);
bn[i]=bk.addListener(bm[i],bo);
var bi=qx.lang.String.firstUp(bl[i]);
if(bk[m+bi]==null){bk=null;
}else if(bj[i]!==l){bk=bk[m+bi](bj[i]);
}else{bk=bk[m+bi]();
}
if(!bk){break;
}}return {listenerIds:bn,targets:bq};
},updateTarget:function(bv,bw,bx,by,bz){var bD=this.__gr(bv,bw);

if(bD!=null){var bF=bw.substring(bw.lastIndexOf(d)+1,bw.length);
if(bF.charAt(bF.length-1)==f){var bA=bF.substring(bF.lastIndexOf(k)+1,bF.length-1);
var bC=bF.substring(0,bF.lastIndexOf(k));
var bE=bD[m+qx.lang.String.firstUp(bC)]();

if(bA==h){bA=bE.length-1;
}
if(bE!=null){var bB=bE.getItem(bA);
}}else{var bB=bD[m+qx.lang.String.firstUp(bF)]();
}}bB=qx.data.SingleValueBinding.__gw(bB,bx,by,bz);
this.__gq(bx,by,bB);
},__go:function(bG,bH){var bI=this.__gx(bG,bH);
if(bI==null){if(qx.Class.supportsEvent(bG.constructor,bH)){bI=bH;
}else if(qx.Class.supportsEvent(bG.constructor,g+qx.lang.String.firstUp(bH))){bI=g+qx.lang.String.firstUp(bH);
}else{throw new qx.core.AssertionError(u+bH+w+bG+n);
}}return bI;
},__gp:function(bJ,bK){var bL=this.__gr(bJ,bK);

if(bL!=null){var bM=bK.substring(bK.lastIndexOf(d)+1,bK.length);
if(bM.charAt(bM.length-1)==f){this.__gq(bJ,bK,null);
return;
}if(bL[B+qx.lang.String.firstUp(bM)]!=undefined){bL[B+qx.lang.String.firstUp(bM)]();
}else{bL[a+qx.lang.String.firstUp(bM)](null);
}}},__gq:function(bN,bO,bP){var bT=this.__gr(bN,bO);

if(bT!=null){var bU=bO.substring(bO.lastIndexOf(d)+1,bO.length);
if(bU.charAt(bU.length-1)==f){var bQ=bU.substring(bU.lastIndexOf(k)+1,bU.length-1);
var bS=bU.substring(0,bU.lastIndexOf(k));
var bR=bT[m+qx.lang.String.firstUp(bS)]();

if(bQ==h){bQ=bR.length-1;
}
if(bR!=null){bR.setItem(bQ,bP);
}}else{bT[a+qx.lang.String.firstUp(bU)](bP);
}}},__gr:function(bV,bW){var ca=bW.split(d);
var cb=bV;
for(var i=0;i<ca.length-1;i++){try{var bY=ca[i];
if(bY.indexOf(f)==bY.length-1){var bX=bY.substring(bY.indexOf(k)+1,bY.length-1);
bY=bY.substring(0,bY.indexOf(k));
}cb=cb[m+qx.lang.String.firstUp(bY)]();

if(bX!=null){if(bX==h){bX=cb.length-1;
}cb=cb.getItem(bX);
bX=null;
}}catch(cc){return null;
}}return cb;
},__gs:function(cd,ce,cf,cg,ch){cd=this.__gw(cd,ce,cf,cg);
if(cd===undefined){this.__gp(ce,cf);
}if(cd!==undefined){try{this.__gq(ce,cf,cd);
if(cg&&cg.onUpdate){cg.onUpdate(ch,ce,cd);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cg&&cg.onSetFail){cg.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cd+" on "+ce+". Error message: "+e);
}}}},__gt:function(ci){var cj=[];
for(var i=0;i<ci.length;i++){var name=ci[i];
if(qx.lang.String.endsWith(name,f)){var ck=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(ck!==h){if(ck==l||isNaN(parseInt(ck,10))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){ci[i]=name.substring(0,name.indexOf(k));
cj[i]=l;
cj[i+1]=ck;
ci.splice(i+1,0,C);
i++;
}else{cj[i]=ck;
ci.splice(i,1,C);
}}else{cj[i]=l;
}}return cj;
},__gu:function(cl,cm,cn,co,cp,cq){var cr;
{};
var ct=function(cu,e){if(cu!==l){if(cu===h){cu=cl.length-1;
}var cx=cl.getItem(cu);
if(cx===undefined){qx.data.SingleValueBinding.__gp(cn,co);
}var cv=e.getData().start;
var cw=e.getData().end;

if(cu<cv||cu>cw){return;
}}else{var cx=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cl+" by "+cm+" to "+cn+" ("+co+")");
qx.log.Logger.debug("Data before conversion: "+cx);
}cx=qx.data.SingleValueBinding.__gw(cx,cn,co,cp);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+cx);
}try{if(cx!==undefined){qx.data.SingleValueBinding.__gq(cn,co,cx);
}else{qx.data.SingleValueBinding.__gp(cn,co);
}if(cp&&cp.onUpdate){cp.onUpdate(cl,cn,cx);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cp&&cp.onSetFail){cp.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cx+" on "+cn+". Error message: "+e);
}}};
if(!cq){cq=l;
}ct=qx.lang.Function.bind(ct,cl,cq);
var cs=cl.addListener(cm,ct);
return cs;
},__gv:function(cy,cz,cA,cB,cC){if(this.__gl[cz.toHashCode()]===undefined){this.__gl[cz.toHashCode()]=[];
}this.__gl[cz.toHashCode()].push([cy,cz,cA,cB,cC]);
},__gw:function(cD,cE,cF,cG){if(cG&&cG.converter){var cI;

if(cE.getModel){cI=cE.getModel();
}return cG.converter(cD,cI);
}else{var cK=this.__gr(cE,cF);
var cL=cF.substring(cF.lastIndexOf(d)+1,cF.length);
if(cK==null){return cD;
}var cJ=qx.Class.getPropertyDefinition(cK.constructor,cL);
var cH=cJ==null?l:cJ.check;
return this.__gy(cD,cH);
}},__gx:function(cM,cN){var cO=qx.Class.getPropertyDefinition(cM.constructor,cN);

if(cO==null){return null;
}return cO.event;
},__gy:function(cP,cQ){var cR=qx.lang.Type.getClass(cP);
if((cR==c||cR==b)&&(cQ==x||cQ==q)){cP=parseInt(cP,10);
}if((cR==z||cR==c||cR==p)&&cQ==b){cP=cP+l;
}if((cR==c||cR==b)&&(cQ==c||cQ==t)){cP=parseFloat(cP);
}return cP;
},removeBindingFromObject:function(cS,cT){if(cT.type==D){for(var i=0;i<cT.sources.length;i++){if(cT.sources[i]){cT.sources[i].removeListenerById(cT.listenerIds[i]);
}}for(var i=0;i<cT.targets.length;i++){if(cT.targets[i]){cT.targets[i].removeListenerById(cT.targetListenerIds[i]);
}}}else{cS.removeListenerById(cT);
}var cU=this.__gl[cS.toHashCode()];
if(cU!=undefined){for(var i=0;i<cU.length;i++){if(cU[i][0]==cT){qx.lang.Array.remove(cU,cU[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cV){{};
var cW=this.__gl[cV.toHashCode()];

if(cW!=undefined){for(var i=cW.length-1;i>=0;i--){this.removeBindingFromObject(cV,cW[i][0]);
}}},getAllBindingsForObject:function(cX){if(this.__gl[cX.toHashCode()]===undefined){this.__gl[cX.toHashCode()]=[];
}return this.__gl[cX.toHashCode()];
},removeAllBindings:function(){for(var da in this.__gl){var cY=qx.core.ObjectRegistry.fromHashCode(da);
if(cY==null){delete this.__gl[da];
continue;
}this.removeAllBindingsForObject(cY);
}this.__gl={};
},getAllBindings:function(){return this.__gl;
},showBindingInLog:function(db,dc){var de;
for(var i=0;i<this.__gl[db.toHashCode()].length;i++){if(this.__gl[db.toHashCode()][i][0]==dc){de=this.__gl[db.toHashCode()][i];
break;
}}
if(de===undefined){var dd=r;
}else{var dd=s+de[1]+A+de[2]+y+de[3]+A+de[4]+o;
}qx.log.Logger.debug(dd);
},showAllBindingsInLog:function(){for(var dg in this.__gl){var df=qx.core.ObjectRegistry.fromHashCode(dg);

for(var i=0;i<this.__gl[dg].length;i++){this.showBindingInLog(df,this.__gl[dg][i][0]);
}}}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__cL=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cL:null,message:null,getComment:function(){return this.__cL;
},toString:function(){return this.__cL+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__lC=qx.dev.StackTrace.getStackTrace();
},members:{__lC:null,getStackTrace:function(){return this.__lC;
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
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__eY:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__fa:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__fb:function(){var L=qx.lang.Generics.__eY;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__fa(N,O);
}}}}},defer:function(Q){Q.__fb();
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
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="iPad",d="X11",c="MacIntel",a="MacPPC";
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__kH:function(){var o=navigator.platform;
if(o==null||o===l){o=navigator.userAgent;
}
if(o.indexOf(f)!=-1||o.indexOf(m)!=-1||o.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(h)!=-1||o.indexOf(a)!=-1||o.indexOf(c)!=-1||o.indexOf(n)!=-1||o.indexOf(g)!=-1||o.indexOf(b)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(d)!=-1||o.indexOf(j)!=-1||o.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(p){p.__kH();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",I=")",H="winxp",G="freebsd",F="sunos",E="SV1",D="|",C="nintendods",B="winnt4",A="wince",z="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="iPad",v="symbian",u="win7",x="g",w="qx.bom.client.System",y=" Mobile/";
qx.Bootstrap.define(w,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,IPAD:false,UNKNOWN_SYSTEM:false,__lu:{"Windows NT 6.1":u,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":H,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":B,"Win 9x 4.90":z,"Windows CE":A,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":G,"NetBSD":m,"OpenBSD":k,"SunOS":F,"Symbian System":v,"Nitro":C,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__lv:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__lu){K.push(J);
}var M=new RegExp(l+K.join(D).replace(/\./g,r)+I,x);

if(!M.test(L)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(y).test(navigator.userAgent)){if(RegExp(t).test(navigator.userAgent)){this.IPAD=true;
this.NAME="ipad";
}else{this.IPHONE=true;
this.NAME="iphone";
}}else{this.NAME=this.__lu[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(E)!==-1){this.SP2=true;
}}}}},defer:function(N){N.__lv();
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
},initialize:function(){var t=qx.core.Setting;
var s,u;
s=t.get(e);

if(s){u=qx.Theme.getByName(s);

if(!u){throw new Error("The theme to use is not available: "+s);
}this.setTheme(u);
}}},settings:{"qx.theme":c}});
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
}else if(this.isRgbString(m)){return this.__gB();
}else if(this.isHex3String(m)){return this.__gD();
}else if(this.isHex6String(m)){return this.__gE();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__gB();
}else if(this.isRgbaString(n)){return this.__gC();
}else if(this.isHex3String(n)){return this.__gD();
}else if(this.isHex6String(n)){return this.__gE();
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
},__gB:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__gC:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__gD:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__gE:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__gD(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__gE(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__gD(P);
}
if(this.isHex6String(P)){return this.__gE(P);
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
(function(){var h="object",g="__cq",f="_applyTheme",e="qx.theme.manager.Decoration",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{__cq:null,resolve:function(i){if(!i){return null;
}
if(typeof i===h){return i;
}var l=this.getTheme();

if(!l){return null;
}var l=this.getTheme();

if(!l){return null;
}var m=this.__cq;

if(!m){m=this.__cq={};
}var j=m[i];

if(j){return j;
}var k=l.decorations[i];

if(!k){return null;
}var n=k.decorator;

if(n==null){throw new Error("Missing definition of which decorator to use in entry: "+i+"!");
}return m[i]=(new n).set(k.style);
},isValidPropertyValue:function(o){if(typeof o===b){return this.isDynamic(o);
}else if(typeof o===h){var p=o.constructor;
return qx.Class.hasInterface(p,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(q){if(!q){return false;
}var r=this.getTheme();

if(!r){return false;
}return !!r.decorations[q];
},_applyTheme:function(s,t){var v=qx.util.AliasManager.getInstance();

if(t){for(var u in t.aliases){v.remove(u);
}}
if(s){for(var u in s.aliases){v.add(u,s.aliases[u]);
}}
if(!s){this.__cq={};
}}},destruct:function(){this._disposeMap(g);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__gF={};
this.add(a,h);
},members:{__gF:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__gF[k]){return this.__gF[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__gF[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__gF[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__gF[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
}},destruct:function(){this.__gF=null;
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
},__io:function(o,p){if(o[p].include){var q=o[o[p].include];
o[p].include=null;
delete o[p].include;
o[p]=qx.lang.Object.mergeWith(o[p],q,false);
this.__io(o,p);
}},_applyTheme:function(r){var s=this._getDynamic();

for(var v in s){if(s[v].themed){s[v].dispose();
delete s[v];
}}
if(r){var t=r.fonts;
var u=qx.bom.Font;

for(var v in t){if(t[v].include&&t[t[v].include]){this.__io(t,v);
}s[v]=(new u).set(t[v]);
s[v].themed=true;
}}this._setDynamic(s);
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",x="Integer",w="_applyFamily",v="_applyLineHeight",u="Array",t="overline",s="line-through",r="qx.bom.Font",q="Number",p="_applyDecoration",o=" ",m="_applySize",n=",";
qx.Class.define(r,{extend:qx.core.Object,construct:function(y,z){qx.core.Object.call(this);

if(y!==undefined){this.setSize(y);
}
if(z!==undefined){this.setFamily(z);
}},statics:{fromString:function(A){var E=new qx.bom.Font();
var C=A.split(/\s+/);
var name=[];
var D;

for(var i=0;i<C.length;i++){switch(D=C[i]){case c:E.setBold(true);
break;
case e:E.setItalic(true);
break;
case j:E.setDecoration(j);
break;
default:var B=parseInt(D,10);

if(B==D||qx.lang.String.contains(D,g)){E.setSize(B);
}else{name.push(D);
}break;
}}
if(name.length>0){E.setFamily(name);
}return E;
},fromConfig:function(F){var G=new qx.bom.Font;
G.set(F);
return G;
},__cy:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__cy;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__cz:null,__cA:null,__cB:null,__cC:null,__cD:null,__cE:null,_applySize:function(H,I){this.__cz=H===null?null:H+g;
},_applyLineHeight:function(J,K){this.__cE=J===null?null:J;
},_applyFamily:function(L,M){var N=k;

for(var i=0,l=L.length;i<l;i++){if(L[i].indexOf(o)>0){N+=f+L[i]+f;
}else{N+=L[i];
}
if(i!==l-1){N+=n;
}}this.__cA=N;
},_applyBold:function(O,P){this.__cB=O===null?null:O?c:d;
},_applyItalic:function(Q,R){this.__cC=Q===null?null:Q?e:d;
},_applyDecoration:function(S,T){this.__cD=S===null?null:S;
},getStyles:function(){return {fontFamily:this.__cA,fontSize:this.__cz,fontWeight:this.__cB,fontStyle:this.__cC,textDecoration:this.__cD,lineHeight:this.__cE};
}}});
})();
(function(){var g="qx.bom.client.Feature",f="CSS1Compat",d="label",c="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",b="input",a="pointerEvents";
qx.Bootstrap.define(g,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:false,XUL:false,CSS_TEXT_OVERFLOW:("textOverflow" in document.documentElement.style||"OTextOverflow" in document.documentElement.style),HTML5_CLASSLIST:!!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),TOUCH:("ontouchstart" in window),PLACEHOLDER:false,__gG:function(){this.QUIRKS_MODE=this.__gH();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;

try{document.createElementNS(c,d);
this.XUL=true;
}catch(e){this.XUL=false;
}var i=document.createElement(b);
this.PLACEHOLDER="placeholder" in i;
if(a in document.documentElement.style){if(qx.bom.client.Engine.OPERA){this.CSS_POINTER_EVENTS=false;
}else{this.CSS_POINTER_EVENTS=true;
}}},__gH:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==f;
}}},defer:function(h){h.__gG();
}});
})();
(function(){var a="qx.lang.Object";
qx.Class.define(a,{statics:{empty:function(b){{};

for(var c in b){if(b.hasOwnProperty(c)){delete b[c];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(d){{};
return d.__count__===0;
}:
function(e){{};

for(var f in e){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(g,h){{};
return g.__count__>=h;
}:
function(j,k){{};

if(k<=0){return true;
}var length=0;

for(var m in j){if((++length)>=k){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(n){{};
var p=[];
var o=this.getKeys(n);

for(var i=0,l=o.length;i<l;i++){p.push(n[o[i]]);
}return p;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(q,r){{};
return qx.lang.Object.mergeWith(q,r,false);
},merge:function(s,t){{};
var u=arguments.length;

for(var i=1;i<u;i++){qx.lang.Object.mergeWith(s,arguments[i]);
}return s;
},clone:function(v){{};
var w={};

for(var x in v){w[x]=v[x];
}return w;
},invert:function(y){{};
var z={};

for(var A in y){z[y[A].toString()]=A;
}return z;
},getKeyFromValue:function(B,C){{};

for(var D in B){if(B.hasOwnProperty(D)&&B[D]===C){return D;
}}return null;
},contains:function(E,F){{};
return this.getKeyFromValue(E,F)!==null;
},select:function(G,H){{};
return H[G];
},fromArray:function(I){{};
var J={};

for(var i=0,l=I.length;i<l;i++){{};
J[I[i].toString()]=true;
}return J;
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
this.__dL={};
this.__dM={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__dN:{},__dL:null,__dM:null,_applyTheme:function(j,k){this.__dM={};
this.__dL={};
},__dO:function(l,m,n){var s=m.appearances;
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
return this.__dO(r,m,n);
}}}for(var i=0;i<p.length-1;i++){p.shift();
var q=p.join(w);
var o=this.__dO(q,m);

if(o){return o;
}}if(n!=null){return this.__dO(n,m);
}return null;
}else if(typeof v===h){return this.__dO(v,m,n);
}else if(v.include&&!v.style){return this.__dO(v.include,m,n);
}return l;
},styleFrom:function(x,y,z,A){if(!z){z=this.getTheme();
}var G=this.__dM;
var B=G[x];

if(!B){B=G[x]=this.__dO(x,z,A);
}var L=z.appearances[B];

if(!L){this.warn("Missing appearance: "+x);
return null;
}if(!L.style){return null;
}var M=B;

if(y){var N=L.$$bits;

if(!N){N=L.$$bits={};
L.$$length=0;
}var E=0;

for(var H in y){if(!y[H]){continue;
}
if(N[H]==null){N[H]=1<<L.$$length++;
}E+=N[H];
}if(E>0){M+=e+E;
}}var F=this.__dL;

if(F[M]!==undefined){return F[M];
}if(!y){y=this.__dN;
}var J;
if(L.include||L.base){var D=L.style(y);
var C;

if(L.include){C=this.styleFrom(L.include,y,z,A);
}J={};
if(L.base){var I=this.styleFrom(B,y,L.base,A);

if(L.include){for(var K in I){if(!C.hasOwnProperty(K)&&!D.hasOwnProperty(K)){J[K]=I[K];
}}}else{for(var K in I){if(!D.hasOwnProperty(K)){J[K]=I[K];
}}}}if(L.include){for(var K in C){if(!D.hasOwnProperty(K)){J[K]=C[K];
}}}for(var K in D){J[K]=D[K];
}}else{J=L.style(y);
}return F[M]=J||null;
}},destruct:function(){this.__dL=this.__dM=null;
}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,q){if(!q){var q={};
}q.include=this.__rg(q.include);
q.patch=this.__rg(q.patch);
{};
var r={$$type:e,name:name,title:q.title,toString:this.genericToString};
if(q.extend){r.supertheme=q.extend;
}r.basename=qx.Bootstrap.createNamespace(name,r);
this.__rj(r,q);
this.__rh(r,q);
this.$$registry[name]=r;
for(var i=0,a=q.include,l=a.length;i<l;i++){this.include(r,a[i]);
}
for(var i=0,a=q.patch,l=a.length;i<l;i++){this.patch(r,a[i]);
}},__rg:function(s){if(!s){return [];
}
if(qx.Bootstrap.isArray(s)){return s;
}else{return [s];
}},__rh:function(t,u){var v=u.aliases||{};

if(u.extend&&u.extend.aliases){qx.Bootstrap.objectMergeWith(v,u.extend.aliases,false);
}t.aliases=v;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__ri:function(w){for(var i=0,x=this.__rk,l=x.length;i<l;i++){if(w[x[i]]){return x[i];
}}},__rj:function(y,z){var C=this.__ri(z);
if(z.extend&&!C){C=z.extend.type;
}y.type=C||p;
if(!C){return;
}var E=function(){};
if(z.extend){E.prototype=new z.extend.$$clazz;
}var D=E.prototype;
var B=z[C];
for(var A in B){D[A]=B[A];
if(D[A].base){{};
D[A].base=z.extend;
}}y.$$clazz=E;
y[C]=new E;
},$$registry:{},__rk:[g,d,f,n,c,o,m,b],__rl:null,__rm:null,__rn:function(){},patch:function(F,G){var I=this.__ri(G);

if(I!==this.__ri(F)){throw new Error("The mixins '"+F.name+"' are not compatible '"+G.name+"'!");
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
(function(){var p="Boolean",o="focusout",n="interval",m="mouseover",l="mouseout",k="mousemove",j="widget",i="qx.ui.tooltip.ToolTip",h="_applyCurrent",g="qx.ui.tooltip.Manager",c="__qV",f="__qS",d="tooltip-error",b="__qT",a="singleton";
qx.Class.define(g,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,m,this.__rd,this,true);
this.__qS=new qx.event.Timer();
this.__qS.addListener(n,this.__ra,this);
this.__qT=new qx.event.Timer();
this.__qT.addListener(n,this.__rb,this);
this.__qU={left:0,top:0};
},properties:{current:{check:i,nullable:true,apply:h},showInvalidToolTips:{check:p,init:true},showToolTips:{check:p,init:true}},members:{__qU:null,__qT:null,__qS:null,__qV:null,__qW:null,__qX:function(){if(!this.__qV){this.__qV=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__qV;
},__qY:function(){if(!this.__qW){this.__qW=new qx.ui.tooltip.ToolTip().set({appearance:d});
this.__qW.syncAppearance();
}return this.__qW;
},_applyCurrent:function(q,r){if(r&&qx.ui.core.Widget.contains(r,q)){return;
}if(r){if(!r.isDisposed()){r.exclude();
}this.__qS.stop();
this.__qT.stop();
}var t=qx.event.Registration;
var s=document.body;
if(q){this.__qS.startWith(q.getShowTimeout());
t.addListener(s,l,this.__re,this,true);
t.addListener(s,o,this.__rf,this,true);
t.addListener(s,k,this.__rc,this,true);
}else{t.removeListener(s,l,this.__re,this,true);
t.removeListener(s,o,this.__rf,this,true);
t.removeListener(s,k,this.__rc,this,true);
}},__ra:function(e){var u=this.getCurrent();

if(u&&!u.isDisposed()){this.__qT.startWith(u.getHideTimeout());

if(u.getPlaceMethod()==j){u.placeToWidget(u.getOpener());
}else{u.placeToPoint(this.__qU);
}u.show();
}this.__qS.stop();
},__rb:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__qT.stop();
this.resetCurrent();
},__rc:function(e){var w=this.__qU;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__rd:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

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
if(x){A=this.__qY().set({label:x});
}
if(!A){A=this.__qX().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__re:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!D){return;
}var E=this.getCurrent();
if(E&&(D==E||qx.ui.core.Widget.contains(E,D))){return;
}if(D&&C&&qx.ui.core.Widget.contains(C,D)){return;
}if(E&&!D){this.setCurrent(null);
}else{this.resetCurrent();
}},__rf:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,m,this.__rd,this,true);
this._disposeObjects(f,b,c);
this.__qU=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__ey=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__ez=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__eA:null,__ey:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__eA);
this.__eA=null;
}else if(p){this.__eA=window.setInterval(this.__ey,this.getInterval());
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
}})},destruct:function(){if(this.__eA){window.clearInterval(this.__eA);
}this.__eA=this.__ey=null;
}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{statics:{__iR:null,setVisibleElement:function(y){this.__iR=y;
},getVisibleElement:function(){return this.__iR;
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
},removeAll:function(){this._removeAll();
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
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="allowShrinkY",b="bottom",a="baseline",x="marginBottom",w="qx.ui.core.LayoutItem",v="center",u="marginTop",t="allowGrowX",s="middle",r="marginLeft",q="allowShrinkX",p="top",o="right",m="marginRight",n="abstract",k="allowGrowY",l="left";
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__fz:null,__fA:null,__fB:null,__fC:null,__fD:null,__fE:null,__fF:null,getBounds:function(){return this.__fE||this.__fA||null;
},clearSeparators:function(){},renderSeparator:function(y,z){},renderLayout:function(A,top,B,C){var D;
{};
var E=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var E=this._getHeightForWidth(B);
}
if(E!=null&&E!==this.__fz){this.__fz=E;
qx.ui.core.queue.Layout.add(this);
return null;
}var G=this.__fA;

if(!G){G=this.__fA={};
}var F={};

if(A!==G.left||top!==G.top){F.position=true;
G.left=A;
G.top=top;
}
if(B!==G.width||C!==G.height){F.size=true;
G.width=B;
G.height=C;
}if(this.__fB){F.local=true;
delete this.__fB;
}
if(this.__fD){F.margin=true;
delete this.__fD;
}return F;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__fB;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__fB=true;
this.__fC=null;
},getSizeHint:function(H){var I=this.__fC;

if(I){return I;
}
if(H===false){return null;
}I=this.__fC=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__fz&&this.getHeight()==null){I.height=this.__fz;
}if(I.minWidth>I.width){I.width=I.minWidth;
}
if(I.maxWidth<I.width){I.width=I.maxWidth;
}
if(!this.getAllowGrowX()){I.maxWidth=I.width;
}
if(!this.getAllowShrinkX()){I.minWidth=I.width;
}if(I.minHeight>I.height){I.height=I.minHeight;
}
if(I.maxHeight<I.height){I.height=I.maxHeight;
}
if(!this.getAllowGrowY()){I.maxHeight=I.height;
}
if(!this.getAllowShrinkY()){I.minHeight=I.height;
}return I;
},_computeSizeHint:function(){var N=this.getMinWidth()||0;
var K=this.getMinHeight()||0;
var O=this.getWidth()||N;
var M=this.getHeight()||K;
var J=this.getMaxWidth()||Infinity;
var L=this.getMaxHeight()||Infinity;
return {minWidth:N,width:O,maxWidth:J,minHeight:K,height:M,maxHeight:L};
},_hasHeightForWidth:function(){var P=this._getLayout();

if(P){return P.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(Q){var R=this._getLayout();

if(R&&R.hasHeightForWidth()){return R.getHeightForWidth(Q);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__fD=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__fE;
},setUserBounds:function(S,top,T,U){this.__fE={left:S,top:top,width:T,height:U};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__fE;
qx.ui.core.queue.Layout.add(this);
},__fG:{},setLayoutProperties:function(V){if(V==null){return;
}var W=this.__fF;

if(!W){W=this.__fF={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(V);
}for(var X in V){if(V[X]==null){delete W[X];
}else{W[X]=V[X];
}}},getLayoutProperties:function(){return this.__fF||this.__fG;
},clearLayoutProperties:function(){delete this.__fF;
},updateLayoutProperties:function(Y){var ba=this._getLayout();

if(ba){var bb;
{};
ba.invalidateChildrenCache();
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
},clone:function(){var bc=qx.core.Object.prototype.clone.call(this);
var bd=this.__fF;

if(bd){bc.__fF=qx.lang.Object.clone(bd);
}return bc;
}},destruct:function(){this.$$parent=this.$$subparent=this.__fF=this.__fA=this.__fE=this.__fC=null;
}});
})();
(function(){var b="qx.ui.core.DecoratorFactory",a="$$nopool$$";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cU={};
},statics:{MAX_SIZE:15,__cV:a},members:{__cU:null,getDecoratorElement:function(c){var h=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(c)){var f=c;
var e=qx.theme.manager.Decoration.getInstance().resolve(c);
}else{var f=h.__cV;
e=c;
}var g=this.__cU;

if(g[f]&&g[f].length>0){var d=g[f].pop();
}else{var d=this._createDecoratorElement(e,f);
}d.$$pooled=false;
return d;
},poolDecorator:function(i){if(!i||i.$$pooled||i.isDisposed()){return;
}var l=qx.ui.core.DecoratorFactory;
var j=i.getId();

if(j==l.__cV){i.dispose();
return;
}var k=this.__cU;

if(!k[j]){k[j]=[];
}
if(k[j].length>l.MAX_SIZE){i.dispose();
}else{i.$$pooled=true;
k[j].push(i);
}},_createDecoratorElement:function(m,n){var o=new qx.html.Decorator(m,n);
{};
return o;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__cU;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__cU=null;
}});
})();
(function(){var bV="px",bU="Boolean",bT="qx.event.type.Drag",bS="qx.event.type.Mouse",bR="visible",bQ="qx.event.type.Focus",bP="on",bO="Integer",bN="qx.event.type.Touch",bM="excluded",bx="qx.event.type.Data",bw="_applyPadding",bv="qx.event.type.Event",bu="hidden",bt="contextmenu",bs="String",br="tabIndex",bq="focused",bp="changeVisibility",bo="mshtml",cd="hovered",ce="qx.event.type.KeySequence",cb="qx.client",cc="absolute",bY="backgroundColor",ca="drag",bW="div",bX="disabled",cf="move",cg="dragstart",bF="qx.dynlocale",bE="dragchange",bH="dragend",bG="resize",bJ="Decorator",bI="zIndex",bL="opacity",bK="default",bD="Color",bC="changeToolTipText",c="beforeContextmenuOpen",d="_applyNativeContextMenu",f="_applyBackgroundColor",g="_applyFocusable",h="changeShadow",j="qx.event.type.KeyInput",k="createChildControl",m="__dQ",n="Font",o="_applyShadow",ck="_applyEnabled",cj="_applySelectable",ci="Number",ch="_applyKeepActive",co="__ea",cn="_applyVisibility",cm="repeat",cl="qxDraggable",cq="__dR",cp="syncAppearance",N="paddingLeft",O="_applyDroppable",L="__ec",M="#",R="qx.event.type.MouseWheel",S="_applyCursor",P="_applyDraggable",Q="changeTextColor",J="$$widget",K="changeContextMenu",w="paddingTop",v="changeSelectable",y="hideFocus",x="none",s="outline",r="_applyAppearance",u="_applyOpacity",t="url(",q=")",p="qx.ui.core.Widget",X="_applyFont",Y="cursor",ba="qxDroppable",bb="changeZIndex",T="changeEnabled",U="changeFont",V="__ee",W="__dU",bc="_applyDecorator",bd="_applyZIndex",G="_applyTextColor",F="qx.ui.menu.Menu",E="_applyToolTipText",D="true",C="widget",B="changeDecorator",A="__dV",z="_applyTabIndex",I="changeAppearance",H="shorthand",be="/",bf="",bg="_applyContextMenu",bh="paddingBottom",bi="__dW",bj="changeNativeContextMenu",bk="qx.ui.tooltip.ToolTip",bl="qxKeepActive",bm="_applyKeepFocus",bn="paddingRight",bB="changeBackgroundColor",bA="changeLocale",bz="qxKeepFocus",by="qx/static/blank.gif";
qx.Class.define(p,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__dQ=this._createContainerElement();
this.__dR=this.__ed();
this.__dQ.add(this.__dR);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bv,disappear:bv,createChildControl:bx,resize:bx,move:bx,syncAppearance:bx,mousemove:bS,mouseover:bS,mouseout:bS,mousedown:bS,mouseup:bS,click:bS,dblclick:bS,contextmenu:bS,beforeContextmenuOpen:bx,mousewheel:R,touchstart:bN,touchend:bN,touchmove:bN,touchcancel:bN,tap:bN,swipe:bN,keyup:ce,keydown:ce,keypress:ce,keyinput:j,focus:bQ,blur:bQ,focusin:bQ,focusout:bQ,activate:bQ,deactivate:bQ,capture:bv,losecapture:bv,drop:bT,dragleave:bT,dragover:bT,drag:bT,dragstart:bT,dragend:bT,dragchange:bT,droprequest:bT},properties:{paddingTop:{check:bO,init:0,apply:bw,themeable:true},paddingRight:{check:bO,init:0,apply:bw,themeable:true},paddingBottom:{check:bO,init:0,apply:bw,themeable:true},paddingLeft:{check:bO,init:0,apply:bw,themeable:true},padding:{group:[w,bn,bh,N],mode:H,themeable:true},zIndex:{nullable:true,init:null,apply:bd,event:bb,check:bO,themeable:true},decorator:{nullable:true,init:null,apply:bc,event:B,check:bJ,themeable:true},shadow:{nullable:true,init:null,apply:o,event:h,check:bJ,themeable:true},backgroundColor:{nullable:true,check:bD,apply:f,event:bB,themeable:true},textColor:{nullable:true,check:bD,apply:G,event:Q,themeable:true,inheritable:true},font:{nullable:true,apply:X,check:n,event:U,themeable:true,inheritable:true,dereference:true},opacity:{check:ci,apply:u,themeable:true,nullable:true,init:null},cursor:{check:bs,apply:S,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bk,nullable:true},toolTipText:{check:bs,nullable:true,event:bC,apply:E},toolTipIcon:{check:bs,nullable:true,event:bC},blockToolTip:{check:bU,init:false},visibility:{check:[bR,bu,bM],init:bR,apply:cn,event:bp},enabled:{init:true,check:bU,inheritable:true,apply:ck,event:T},anonymous:{init:false,check:bU},tabIndex:{check:bO,nullable:true,apply:z},focusable:{check:bU,init:false,apply:g},keepFocus:{check:bU,init:false,apply:bm},keepActive:{check:bU,init:false,apply:ch},draggable:{check:bU,init:false,apply:P},droppable:{check:bU,init:false,apply:O},selectable:{check:bU,init:false,event:v,apply:cj},contextMenu:{check:F,apply:bg,nullable:true,event:K},nativeContextMenu:{check:bU,init:false,themeable:true,event:bj,apply:d},appearance:{check:bs,init:C,apply:r,event:I}},statics:{DEBUG:false,getWidgetByElement:function(cr,cs){while(cr){var ct=cr.$$widget;
if(ct!=null){var cu=qx.core.ObjectRegistry.fromHashCode(ct);
if(!cs||!cu.getAnonymous()){return cu;
}}try{cr=cr.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cv){while(cv){if(parent==cv){return true;
}cv=cv.getLayoutParent();
}return false;
},__dS:new qx.ui.core.DecoratorFactory(),__dT:new qx.ui.core.DecoratorFactory()},members:{__dQ:null,__dR:null,__dU:null,__dV:null,__dW:null,__dX:null,__dY:null,__ea:null,_getLayout:function(){return this.__ea;
},_setLayout:function(cw){{};

if(this.__ea){this.__ea.connectToWidget(null);
}
if(cw){cw.connectToWidget(this);
}this.__ea=cw;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cx=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cx);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cx);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__eb:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var cy=qx.theme.manager.Decoration.getInstance();
var cA=cy.resolve(a).getInsets();
var cz=cy.resolve(b).getInsets();

if(cA.top!=cz.top||cA.right!=cz.right||cA.bottom!=cz.bottom||cA.left!=cz.left){return true;
}return false;
},renderLayout:function(cB,top,cC,cD){var cM=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,cB,top,cC,cD);
if(!cM){return null;
}var cF=this.getContainerElement();
var content=this.getContentElement();
var cJ=cM.size||this._updateInsets;
var cN=bV;
var cK={};
if(cM.position){cK.left=cB+cN;
cK.top=top+cN;
}if(cM.size){cK.width=cC+cN;
cK.height=cD+cN;
}
if(cM.position||cM.size){cF.setStyles(cK);
}
if(cJ||cM.local||cM.margin){var cE=this.getInsets();
var innerWidth=cC-cE.left-cE.right;
var innerHeight=cD-cE.top-cE.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var cH={};

if(this._updateInsets){cH.left=cE.left+cN;
cH.top=cE.top+cN;
}
if(cJ){cH.width=innerWidth+cN;
cH.height=innerHeight+cN;
}
if(cJ||this._updateInsets){content.setStyles(cH);
}
if(cM.size){var cL=this.__dW;

if(cL){cL.setStyles({width:cC+bV,height:cD+bV});
}}
if(cM.size||this._updateInsets){if(this.__dU){this.__dU.resize(cC,cD);
}}
if(cM.size){if(this.__dV){var cE=this.__dV.getInsets();
var cI=cC+cE.left+cE.right;
var cG=cD+cE.top+cE.bottom;
this.__dV.resize(cI,cG);
}}
if(cJ||cM.local||cM.margin){if(this.__ea&&this.hasLayoutChildren()){this.__ea.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cM.position&&this.hasListener(cf)){this.fireDataEvent(cf,this.getBounds());
}
if(cM.size&&this.hasListener(bG)){this.fireDataEvent(bG,this.getBounds());
}delete this._updateInsets;
return cM;
},__ec:null,clearSeparators:function(){var cP=this.__ec;

if(!cP){return;
}var cQ=qx.ui.core.Widget.__dS;
var content=this.getContentElement();
var cO;

for(var i=0,l=cP.length;i<l;i++){cO=cP[i];
cQ.poolDecorator(cO);
content.remove(cO);
}cP.length=0;
},renderSeparator:function(cR,cS){var cT=qx.ui.core.Widget.__dS.getDecoratorElement(cR);
this.getContentElement().add(cT);
cT.resize(cS.width,cS.height);
cT.setStyles({left:cS.left+bV,top:cS.top+bV});
if(!this.__ec){this.__ec=[cT];
}else{this.__ec.push(cT);
}},_computeSizeHint:function(){var db=this.getWidth();
var da=this.getMinWidth();
var cV=this.getMaxWidth();
var cY=this.getHeight();
var cW=this.getMinHeight();
var cX=this.getMaxHeight();
{};
var dc=this._getContentHint();
var cU=this.getInsets();
var de=cU.left+cU.right;
var dd=cU.top+cU.bottom;

if(db==null){db=dc.width+de;
}
if(cY==null){cY=dc.height+dd;
}
if(da==null){da=de;

if(dc.minWidth!=null){da+=dc.minWidth;
}}
if(cW==null){cW=dd;

if(dc.minHeight!=null){cW+=dc.minHeight;
}}
if(cV==null){if(dc.maxWidth==null){cV=Infinity;
}else{cV=dc.maxWidth+de;
}}
if(cX==null){if(dc.maxHeight==null){cX=Infinity;
}else{cX=dc.maxHeight+dd;
}}return {width:db,minWidth:da,maxWidth:cV,height:cY,minHeight:cW,maxHeight:cX};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__ea){this.__ea.invalidateLayoutCache();
}},_getContentHint:function(){var dg=this.__ea;

if(dg){if(this.hasLayoutChildren()){var df;
var dh=dg.getSizeHint();
{};
return dh;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(di){var dm=this.getInsets();
var dq=dm.left+dm.right;
var dp=dm.top+dm.bottom;
var dn=di-dq;
var dk=this._getLayout();

if(dk&&dk.hasHeightForWidth()){var dj=dk.getHeightForWidth(di);
}else{dj=this._getContentHeightForWidth(dn);
}var dl=dj+dp;
return dl;
},_getContentHeightForWidth:function(dr){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var dt=this.getPaddingRight();
var dv=this.getPaddingBottom();
var du=this.getPaddingLeft();

if(this.__dU){var ds=this.__dU.getInsets();
{};
top+=ds.top;
dt+=ds.right;
dv+=ds.bottom;
du+=ds.left;
}return {"top":top,"right":dt,"bottom":dv,"left":du};
},getInnerSize:function(){var dx=this.getBounds();

if(!dx){return null;
}var dw=this.getInsets();
return {width:dx.width-dw.left-dw.right,height:dx.height-dw.top-dw.bottom};
},show:function(){this.setVisibility(bR);
},hide:function(){this.setVisibility(bu);
},exclude:function(){this.setVisibility(bM);
},isVisible:function(){return this.getVisibility()===bR;
},isHidden:function(){return this.getVisibility()!==bR;
},isExcluded:function(){return this.getVisibility()===bM;
},isSeeable:function(){var dz=this.getContainerElement().getDomElement();

if(dz){return dz.offsetWidth>0;
}var dy=this;

do{if(!dy.isVisible()){return false;
}
if(dy.isRootWidget()){return true;
}dy=dy.getLayoutParent();
}while(dy);
return false;
},_createContainerElement:function(){var dB={"$$widget":this.toHashCode()};
{};
var dA={zIndex:0,position:cc};
return new qx.html.Element(bW,dA,dB);
},__ed:function(){var dC=this._createContentElement();
{};
dC.setStyles({"position":cc,"zIndex":10});
return dC;
},_createContentElement:function(){return new qx.html.Element(bW,{overflowX:bu,overflowY:bu});
},getContainerElement:function(){return this.__dQ;
},getContentElement:function(){return this.__dR;
},getDecoratorElement:function(){return this.__dU||null;
},getShadowElement:function(){return this.__dV||null;
},__ee:null,getLayoutChildren:function(){var dE=this.__ee;

if(!dE){return this.__ef;
}var dF;

for(var i=0,l=dE.length;i<l;i++){var dD=dE[i];

if(dD.hasUserBounds()||dD.isExcluded()){if(dF==null){dF=dE.concat();
}qx.lang.Array.remove(dF,dD);
}}return dF||dE;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var dG=this.__ea;

if(dG){dG.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var dH=this.__ee;

if(!dH){return false;
}var dI;

for(var i=0,l=dH.length;i<l;i++){dI=dH[i];

if(!dI.hasUserBounds()&&!dI.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__ef:[],_getChildren:function(){return this.__ee||this.__ef;
},_indexOf:function(dJ){var dK=this.__ee;

if(!dK){return -1;
}return dK.indexOf(dJ);
},_hasChildren:function(){var dL=this.__ee;
return dL!=null&&(!!dL[0]);
},addChildrenToQueue:function(dM){var dN=this.__ee;

if(!dN){return;
}var dO;

for(var i=0,l=dN.length;i<l;i++){dO=dN[i];
dM[dO.$$hash]=dO;
dO.addChildrenToQueue(dM);
}},_add:function(dP,dQ){if(dP.getLayoutParent()==this){qx.lang.Array.remove(this.__ee,dP);
}
if(this.__ee){this.__ee.push(dP);
}else{this.__ee=[dP];
}this.__eg(dP,dQ);
},_addAt:function(dR,dS,dT){if(!this.__ee){this.__ee=[];
}if(dR.getLayoutParent()==this){qx.lang.Array.remove(this.__ee,dR);
}var dU=this.__ee[dS];

if(dU===dR){dR.setLayoutProperties(dT);
}
if(dU){qx.lang.Array.insertBefore(this.__ee,dR,dU);
}else{this.__ee.push(dR);
}this.__eg(dR,dT);
},_addBefore:function(dV,dW,dX){{};

if(dV==dW){return;
}
if(!this.__ee){this.__ee=[];
}if(dV.getLayoutParent()==this){qx.lang.Array.remove(this.__ee,dV);
}qx.lang.Array.insertBefore(this.__ee,dV,dW);
this.__eg(dV,dX);
},_addAfter:function(dY,ea,eb){{};

if(dY==ea){return;
}
if(!this.__ee){this.__ee=[];
}if(dY.getLayoutParent()==this){qx.lang.Array.remove(this.__ee,dY);
}qx.lang.Array.insertAfter(this.__ee,dY,ea);
this.__eg(dY,eb);
},_remove:function(ec){if(!this.__ee){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__ee,ec);
this.__eh(ec);
},_removeAt:function(ed){if(!this.__ee){throw new Error("This widget has no children!");
}var ee=this.__ee[ed];
qx.lang.Array.removeAt(this.__ee,ed);
this.__eh(ee);
return ee;
},_removeAll:function(){if(!this.__ee){return;
}var ef=this.__ee.concat();
this.__ee.length=0;

for(var i=ef.length-1;i>=0;i--){this.__eh(ef[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__eg:function(eg,eh){{};
var parent=eg.getLayoutParent();

if(parent&&parent!=this){parent._remove(eg);
}eg.setLayoutParent(this);
if(eh){eg.setLayoutProperties(eh);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(eg);
}},__eh:function(ei){{};

if(ei.getLayoutParent()!==this){throw new Error("Remove Error: "+ei+" is not a child of this widget!");
}ei.setLayoutParent(null);
if(this.__ea){this.__ea.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(ei);
}},capture:function(ej){this.getContainerElement().capture(ej);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(ek,em,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dW){return;
}var en=this.__dW=new qx.html.Element;
{};
en.setStyles({position:cc,top:0,left:0,zIndex:7});
var eo=this.getBounds();

if(eo){this.__dW.setStyles({width:eo.width+bV,height:eo.height+bV});
}if(qx.core.Variant.isSet(cb,bo)){en.setStyles({backgroundImage:t+qx.util.ResourceManager.getInstance().toUri(by)+q,backgroundRepeat:cm});
}this.getContainerElement().add(en);
},_applyDecorator:function(ep,eq){{};
var et=qx.ui.core.Widget.__dS;
var er=this.getContainerElement();
if(!this.__dW&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(eq){er.remove(this.__dU);
et.poolDecorator(this.__dU);
}if(ep){var es=this.__dU=et.getDecoratorElement(ep);
es.setStyle(bI,5);
er.add(es);
}else{delete this.__dU;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__eb(eq,ep)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(ep){var eu=this.getBounds();

if(eu){es.resize(eu.width,eu.height);
this.__dW&&
this.__dW.setStyles({width:eu.width+bV,height:eu.height+bV});
}}},_applyShadow:function(ev,ew){var eD=qx.ui.core.Widget.__dT;
var ey=this.getContainerElement();
if(ew){ey.remove(this.__dV);
eD.poolDecorator(this.__dV);
}if(ev){var eA=this.__dV=eD.getDecoratorElement(ev);
ey.add(eA);
var eC=eA.getInsets();
eA.setStyles({left:(-eC.left)+bV,top:(-eC.top)+bV});
var eB=this.getBounds();

if(eB){var ez=eB.width+eC.left+eC.right;
var ex=eB.height+eC.top+eC.bottom;
eA.resize(ez,ex);
}eA.tint(null);
}else{delete this.__dV;
}},_applyToolTipText:function(eE,eF){if(qx.core.Variant.isSet(bF,bP)){if(this.__dY){return;
}var eG=qx.locale.Manager.getInstance();
this.__dY=eG.addListener(bA,function(){var eH=this.getToolTipText();

if(eH&&eH.translate){this.setToolTipText(eH.translate());
}},this);
}},_applyTextColor:function(eI,eJ){},_applyZIndex:function(eK,eL){this.getContainerElement().setStyle(bI,eK==null?0:eK);
},_applyVisibility:function(eM,eN){var eO=this.getContainerElement();

if(eM===bR){eO.show();
}else{eO.hide();
}var parent=this.$$parent;

if(parent&&(eN==null||eM==null||eN===bM||eM===bM)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(eP,eQ){this.getContainerElement().setStyle(bL,eP==1?null:eP);
if(qx.core.Variant.isSet(cb,bo)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var eR=(eP==1||eP==null)?null:0.99;
this.getContentElement().setStyle(bL,eR);
}}},_applyCursor:function(eS,eT){if(eS==null&&!this.isSelectable()){eS=bK;
}this.getContainerElement().setStyle(Y,eS,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(eU,eV){var eW=this.getBackgroundColor();
var eY=this.getContainerElement();

if(this.__dU){this.__dU.tint(eW);
eY.setStyle(bY,null);
}else{var eX=qx.theme.manager.Color.getInstance().resolve(eW);
eY.setStyle(bY,eX);
}},_applyFont:function(fa,fb){},__ei:null,$$stateChanges:null,_forwardStates:null,hasState:function(fc){var fd=this.__ei;
return !!fd&&!!fd[fc];
},addState:function(fe){var ff=this.__ei;

if(!ff){ff=this.__ei={};
}
if(ff[fe]){return;
}this.__ei[fe]=true;
if(fe===cd){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fi=this.__el;

if(forward&&forward[fe]&&fi){var fg;

for(var fh in fi){fg=fi[fh];

if(fg instanceof qx.ui.core.Widget){fi[fh].addState(fe);
}}}},removeState:function(fj){var fk=this.__ei;

if(!fk||!fk[fj]){return;
}delete this.__ei[fj];
if(fj===cd){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fn=this.__el;

if(forward&&forward[fj]&&fn){for(var fm in fn){var fl=fn[fm];

if(fl instanceof qx.ui.core.Widget){fl.removeState(fj);
}}}},replaceState:function(fo,fp){var fq=this.__ei;

if(!fq){fq=this.__ei={};
}
if(!fq[fp]){fq[fp]=true;
}
if(fq[fo]){delete fq[fo];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var ft=this.__el;

if(forward&&forward[fp]&&ft){for(var fs in ft){var fr=ft[fs];

if(fr instanceof qx.ui.core.Widget){fr.replaceState(fo,fp);
}}}},__ej:null,__ek:null,syncAppearance:function(){var fy=this.__ei;
var fx=this.__ej;
var fz=qx.theme.manager.Appearance.getInstance();
var fv=qx.core.Property.$$method.setThemed;
var fD=qx.core.Property.$$method.resetThemed;
if(this.__ek){delete this.__ek;
if(fx){var fu=fz.styleFrom(fx,fy,null,this.getAppearance());
if(fu){fx=null;
}}}if(!fx){var fw=this;
var fC=[];

do{fC.push(fw.$$subcontrol||fw.getAppearance());
}while(fw=fw.$$subparent);
fx=fC.reverse().join(be).replace(/#[0-9]+/g,bf);
this.__ej=fx;
}var fA=fz.styleFrom(fx,fy,null,this.getAppearance());

if(fA){var fB;

if(fu){for(var fB in fu){if(fA[fB]===undefined){this[fD[fB]]();
}}}{};
for(var fB in fA){fA[fB]===undefined?this[fD[fB]]():this[fv[fB]](fA[fB]);
}}else if(fu){for(var fB in fu){this[fD[fB]]();
}}this.fireDataEvent(cp,this.__ei);
},_applyAppearance:function(fE,fF){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dX){qx.ui.core.queue.Appearance.add(this);
this.__dX=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__ek=true;
qx.ui.core.queue.Appearance.add(this);
var fI=this.__el;

if(fI){var fG;

for(var fH in fI){fG=fI[fH];

if(fG instanceof qx.ui.core.Widget){fG.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fJ=this;

while(fJ.getAnonymous()){fJ=fJ.getLayoutParent();

if(!fJ){return null;
}}return fJ;
},getFocusTarget:function(){var fK=this;

if(!fK.getEnabled()){return null;
}
while(fK.getAnonymous()||!fK.getFocusable()){fK=fK.getLayoutParent();

if(!fK||!fK.getEnabled()){return null;
}}return fK;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(fL,fM){var fN=this.getFocusElement();
if(fL){var fO=this.getTabIndex();

if(fO==null){fO=1;
}fN.setAttribute(br,fO);
if(qx.core.Variant.isSet(cb,bo)){fN.setAttribute(y,D);
}else{fN.setStyle(s,x);
}}else{if(fN.isNativelyFocusable()){fN.setAttribute(br,-1);
}else if(fM){fN.setAttribute(br,null);
}}},_applyKeepFocus:function(fP){var fQ=this.getFocusElement();
fQ.setAttribute(bz,fP?bP:null);
},_applyKeepActive:function(fR){var fS=this.getContainerElement();
fS.setAttribute(bl,fR?bP:null);
},_applyTabIndex:function(fT){if(fT==null){fT=1;
}else if(fT<1||fT>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&fT!=null){this.getFocusElement().setAttribute(br,fT);
}},_applySelectable:function(fU,fV){if(fV!==null){this._applyCursor(this.getCursor());
}this.getContentElement().setSelectable(fU);
},_applyEnabled:function(fW,fX){if(fW===false){this.addState(bX);
this.removeState(cd);
if(this.isFocusable()){this.removeState(bq);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(bX);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(fY,ga,name){},_applyContextMenu:function(gb,gc){if(gc){gc.removeState(bt);

if(gc.getOpener()==this){gc.resetOpener();
}
if(!gb){this.removeListener(bt,this._onContextMenuOpen);
gc.removeListener(bp,this._onBeforeContextMenuOpen,this);
}}
if(gb){gb.setOpener(this);
gb.addState(bt);

if(!gc){this.addListener(bt,this._onContextMenuOpen);
gb.addListener(bp,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==bR&&this.hasListener(c)){this.fireDataEvent(c,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gd,ge){if(!this.isEnabled()&&gd===true){gd=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gd){this.addListener(cg,this._onDragStart);
this.addListener(ca,this._onDrag);
this.addListener(bH,this._onDragEnd);
this.addListener(bE,this._onDragChange);
}else{this.removeListener(cg,this._onDragStart);
this.removeListener(ca,this._onDrag);
this.removeListener(bH,this._onDragEnd);
this.removeListener(bE,this._onDragChange);
}this.getContainerElement().setAttribute(cl,gd?bP:null);
},_applyDroppable:function(gf,gg){if(!this.isEnabled()&&gf===true){gf=false;
}this.getContainerElement().setAttribute(ba,gf?bP:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bK);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gh=qx.ui.core.DragDropCursor.getInstance();
var gi=e.getCurrentAction();
gi?gh.setAction(gi):gh.resetAction();
},visualizeFocus:function(){this.addState(bq);
},visualizeBlur:function(){this.removeState(bq);
},scrollChildIntoView:function(gj,gk,gl,gm){this.scrollChildIntoViewX(gj,gk,gm);
this.scrollChildIntoViewY(gj,gl,gm);
},scrollChildIntoViewX:function(gn,go,gp){this.getContentElement().scrollChildIntoViewX(gn.getContainerElement(),go,gp);
},scrollChildIntoViewY:function(gq,gr,gs){this.getContentElement().scrollChildIntoViewY(gq.getContainerElement(),gr,gs);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gt){if(!this.__el){return false;
}return !!this.__el[gt];
},__el:null,_getCreatedChildControls:function(){return this.__el;
},getChildControl:function(gu,gv){if(!this.__el){if(gv){return null;
}this.__el={};
}var gw=this.__el[gu];

if(gw){return gw;
}
if(gv===true){return null;
}return this._createChildControl(gu);
},_showChildControl:function(gx){var gy=this.getChildControl(gx);
gy.show();
return gy;
},_excludeChildControl:function(gz){var gA=this.getChildControl(gz,true);

if(gA){gA.exclude();
}},_isChildControlVisible:function(gB){var gC=this.getChildControl(gB,true);

if(gC){return gC.isVisible();
}return false;
},_createChildControl:function(gD){if(!this.__el){this.__el={};
}else if(this.__el[gD]){throw new Error("Child control '"+gD+"' already created!");
}var gH=gD.indexOf(M);

if(gH==-1){var gE=this._createChildControlImpl(gD);
}else{var gE=this._createChildControlImpl(gD.substring(0,gH),gD.substring(gH+1,gD.length));
}
if(!gE){throw new Error("Unsupported control: "+gD);
}gE.$$subcontrol=gD;
gE.$$subparent=this;
var gF=this.__ei;
var forward=this._forwardStates;

if(gF&&forward&&gE instanceof qx.ui.core.Widget){for(var gG in gF){if(forward[gG]){gE.addState(gG);
}}}this.fireDataEvent(k,gE);
return this.__el[gD]=gE;
},_createChildControlImpl:function(gI,gJ){return null;
},_disposeChildControls:function(){var gN=this.__el;

if(!gN){return;
}var gL=qx.ui.core.Widget;

for(var gM in gN){var gK=gN[gM];

if(!gL.contains(this,gK)){gK.destroy();
}else{gK.dispose();
}}delete this.__el;
},_findTopControl:function(){var gO=this;

while(gO){if(!gO.$$subparent){return gO;
}gO=gO.$$subparent;
}return null;
},getContainerLocation:function(gP){var gQ=this.getContainerElement().getDomElement();
return gQ?qx.bom.element.Location.get(gQ,gP):null;
},getContentLocation:function(gR){var gS=this.getContentElement().getDomElement();
return gS?qx.bom.element.Location.get(gS,gR):null;
},setDomLeft:function(gT){var gU=this.getContainerElement().getDomElement();

if(gU){gU.style.left=gT+bV;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(gV){var gW=this.getContainerElement().getDomElement();

if(gW){gW.style.top=gV+bV;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(gX,top){var gY=this.getContainerElement().getDomElement();

if(gY){gY.style.left=gX+bV;
gY.style.top=top+bV;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var ha=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var hb=this.getChildren();

for(var i=0,l=hb.length;i<l;i++){ha.add(hb[i].clone());
}}return ha;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(bF,bP)){if(this.__dY){qx.locale.Manager.getInstance().removeListenerById(this.__dY);
}}this.getContainerElement().setAttribute(J,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var hd=qx.ui.core.Widget;
var hc=this.getContainerElement();

if(this.__dU){hc.remove(this.__dU);
hd.__dS.poolDecorator(this.__dU);
}
if(this.__dV){hc.remove(this.__dV);
hd.__dT.poolDecorator(this.__dV);
}this.clearSeparators();
this.__dU=this.__dV=this.__ec=null;
}else{this._disposeArray(L);
this._disposeObjects(W,A);
}this._disposeArray(V);
this.__ei=this.__el=null;
this._disposeObjects(co,m,cq,bi);
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
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);
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
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__kM=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__kM:null,_applyTimeoutInterval:function(h){this.__kM.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__kM){this.__kM.stop();
}this.__kM=null;
}});
})();
(function(){var j="borderTopWidth",i="borderLeftWidth",h="marginTop",g="marginLeft",f="scroll",e="qx.client",d="border-box",c="borderBottomWidth",b="borderRightWidth",a="auto",y="padding",x="qx.bom.element.Location",w="paddingLeft",v="static",u="marginBottom",t="visible",s="BODY",r="paddingBottom",q="paddingTop",p="marginRight",n="position",o="margin",l="overflow",m="paddingRight",k="border";
qx.Class.define(x,{statics:{__iY:function(z,A){return qx.bom.element.Style.get(z,A,qx.bom.element.Style.COMPUTED_MODE,false);
},__ja:function(B,C){return parseInt(qx.bom.element.Style.get(B,C,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__jb:function(D){var G=0,top=0;
if(D.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var F=qx.dom.Node.getWindow(D);
G-=qx.bom.Viewport.getScrollLeft(F);
top-=qx.bom.Viewport.getScrollTop(F);
}else{var E=qx.dom.Node.getDocument(D).body;
D=D.parentNode;
while(D&&D!=E){G+=D.scrollLeft;
top+=D.scrollTop;
D=D.parentNode;
}}return {left:G,top:top};
},__jc:qx.core.Variant.select(e,{"mshtml":function(H){var J=qx.dom.Node.getDocument(H);
var I=J.body;
var K=0;
var top=0;
K-=I.clientLeft+J.documentElement.clientLeft;
top-=I.clientTop+J.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){K+=this.__ja(I,i);
top+=this.__ja(I,j);
}return {left:K,top:top};
},"webkit":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=M.offsetLeft;
var top=M.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){O+=this.__ja(M,i);
top+=this.__ja(M,j);
}return {left:O,top:top};
},"gecko":function(P){var Q=qx.dom.Node.getDocument(P).body;
var R=Q.offsetLeft;
var top=Q.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){R+=this.__ja(Q,g);
top+=this.__ja(Q,h);
}if(qx.bom.element.BoxSizing.get(Q)!==d){R+=this.__ja(Q,i);
top+=this.__ja(Q,j);
}return {left:R,top:top};
},"default":function(S){var T=qx.dom.Node.getDocument(S).body;
var U=T.offsetLeft;
var top=T.offsetTop;
return {left:U,top:top};
}}),__jd:qx.core.Variant.select(e,{"mshtml|webkit":function(V){var X=qx.dom.Node.getDocument(V);
if(V.getBoundingClientRect){var Y=V.getBoundingClientRect();
var ba=Y.left;
var top=Y.top;
}else{var ba=V.offsetLeft;
var top=V.offsetTop;
V=V.offsetParent;
var W=X.body;
while(V&&V!=W){ba+=V.offsetLeft;
top+=V.offsetTop;
ba+=this.__ja(V,i);
top+=this.__ja(V,j);
V=V.offsetParent;
}}return {left:ba,top:top};
},"gecko":function(bb){if(bb.getBoundingClientRect){var be=bb.getBoundingClientRect();
var bf=Math.round(be.left);
var top=Math.round(be.top);
}else{var bf=0;
var top=0;
var bc=qx.dom.Node.getDocument(bb).body;
var bd=qx.bom.element.BoxSizing;

if(bd.get(bb)!==d){bf-=this.__ja(bb,i);
top-=this.__ja(bb,j);
}
while(bb&&bb!==bc){bf+=bb.offsetLeft;
top+=bb.offsetTop;
if(bd.get(bb)!==d){bf+=this.__ja(bb,i);
top+=this.__ja(bb,j);
}if(bb.parentNode&&this.__iY(bb.parentNode,l)!=t){bf+=this.__ja(bb.parentNode,i);
top+=this.__ja(bb.parentNode,j);
}bb=bb.offsetParent;
}}return {left:bf,top:top};
},"default":function(bg){var bi=0;
var top=0;
var bh=qx.dom.Node.getDocument(bg).body;
while(bg&&bg!==bh){bi+=bg.offsetLeft;
top+=bg.offsetTop;
bg=bg.offsetParent;
}return {left:bi,top:top};
}}),get:function(bj,bk){if(bj.tagName==s){var location=this.__je(bj);
var br=location.left;
var top=location.top;
}else{var bl=this.__jc(bj);
var bq=this.__jd(bj);
var scroll=this.__jb(bj);
var br=bq.left+bl.left-scroll.left;
var top=bq.top+bl.top-scroll.top;
}var bm=br+bj.offsetWidth;
var bn=top+bj.offsetHeight;

if(bk){if(bk==y||bk==f){var bo=qx.bom.element.Overflow.getX(bj);

if(bo==f||bo==a){bm+=bj.scrollWidth-bj.offsetWidth+this.__ja(bj,i)+this.__ja(bj,b);
}var bp=qx.bom.element.Overflow.getY(bj);

if(bp==f||bp==a){bn+=bj.scrollHeight-bj.offsetHeight+this.__ja(bj,j)+this.__ja(bj,c);
}}
switch(bk){case y:br+=this.__ja(bj,w);
top+=this.__ja(bj,q);
bm-=this.__ja(bj,m);
bn-=this.__ja(bj,r);
case f:br-=bj.scrollLeft;
top-=bj.scrollTop;
bm-=bj.scrollLeft;
bn-=bj.scrollTop;
case k:br+=this.__ja(bj,i);
top+=this.__ja(bj,j);
bm-=this.__ja(bj,b);
bn-=this.__ja(bj,c);
break;
case o:br-=this.__ja(bj,g);
top-=this.__ja(bj,h);
bm+=this.__ja(bj,p);
bn+=this.__ja(bj,u);
break;
}}return {left:br,top:top,right:bm,bottom:bn};
},__je:qx.core.Variant.select(e,{"default":function(bs){var top=bs.offsetTop+this.__ja(bs,h);
var bt=bs.offsetLeft+this.__ja(bs,g);
return {left:bt,top:top};
},"mshtml":function(bu){var top=bu.offsetTop;
var bv=bu.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__ja(bu,h);
bv+=this.__ja(bu,g);
}return {left:bv,top:top};
},"gecko":function(bw){var top=bw.offsetTop+this.__ja(bw,h)+this.__ja(bw,i);
var bx=bw.offsetLeft+this.__ja(bw,g)+this.__ja(bw,j);
return {left:bx,top:top};
}}),getLeft:function(by,bz){return this.get(by,bz).left;
},getTop:function(bA,bB){return this.get(bA,bB).top;
},getRight:function(bC,bD){return this.get(bC,bD).right;
},getBottom:function(bE,bF){return this.get(bE,bF).bottom;
},getRelative:function(bG,bH,bI,bJ){var bL=this.get(bG,bI);
var bK=this.get(bH,bJ);
return {left:bL.left-bK.left,top:bL.top-bK.top,right:bL.right-bK.right,bottom:bL.bottom-bK.bottom};
},getPosition:function(bM){return this.getRelative(bM,this.getOffsetParent(bM));
},getOffsetParent:function(bN){var bP=bN.offsetParent||document.body;
var bO=qx.bom.element.Style;

while(bP&&(!/^body|html$/i.test(bP.tagName)&&bO.get(bP,n)===v)){bP=bP.offsetParent;
}return bP;
}}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__cH:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__cI:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__cJ:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cK:function(r){var s=this.__cJ;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(t){{};
},"default":function(u){var w=this.__cI;
var v=p;

if(w){for(var i=0,l=w.length;i<l;i++){v+=w[i]+m+u+c;
}}return v;
}}),get:qx.core.Variant.select(q,{"mshtml":function(x){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(x))){if(!this.__cK(x)){return d;
}}return k;
},"default":function(y){var A=this.__cH;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==p){return z;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(B,C){{};
},"default":function(D,E){var F=this.__cH;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(G){this.set(G,p);
}}});
})();
(function(){var k="",j="qx.client",i="hidden",h="-moz-scrollbars-none",g="overflow",f=";",e="overflowY",d=":",b="overflowX",a="overflow:",y="none",x="scroll",w="borderLeftStyle",v="borderRightStyle",u="div",r="borderRightWidth",q="overflow-y",p="borderLeftWidth",o="-moz-scrollbars-vertical",n="100px",l="qx.bom.element.Overflow",m="overflow-x";
qx.Class.define(l,{statics:{__kL:null,getScrollbarWidth:function(){if(this.__kL!==null){return this.__kL;
}var z=qx.bom.element.Style;
var B=function(F,G){return parseInt(z.get(F,G),10)||0;
};
var C=function(H){return (z.get(H,v)==y?0:B(H,r));
};
var A=function(I){return (z.get(I,w)==y?0:B(I,p));
};
var E=qx.core.Variant.select(j,{"mshtml":function(J){if(z.get(J,e)==i||J.clientWidth==0){return C(J);
}return Math.max(0,J.offsetWidth-J.clientLeft-J.clientWidth);
},"default":function(K){if(K.clientWidth==0){var L=z.get(K,g);
var M=(L==x||L==o?16:0);
return Math.max(0,C(K)+M);
}return Math.max(0,(K.offsetWidth-K.clientWidth-A(K)));
}});
var D=function(N){return E(N)-C(N);
};
var t=document.createElement(u);
var s=t.style;
s.height=s.width=n;
s.overflow=x;
document.body.appendChild(t);
var c=D(t);
this.__kL=c?c:16;
document.body.removeChild(t);
return this.__kL;
},_compile:qx.core.Variant.select(j,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(O,P){if(P==i){P=h;
}return a+P+f;
}:
function(Q,R){return Q+d+R+f;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(S,T){return a+T+f;
}:
function(U,V){return U+d+V+f;
},"default":function(W,X){return W+d+X+f;
}}),compileX:function(Y){return this._compile(m,Y);
},compileY:function(ba){return this._compile(q,ba);
},getX:qx.core.Variant.select(j,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bb,bc){var bd=qx.bom.element.Style.get(bb,g,bc,false);

if(bd===h){bd=i;
}return bd;
}:
function(be,bf){return qx.bom.element.Style.get(be,b,bf,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bg,bh){return qx.bom.element.Style.get(bg,g,bh,false);
}:
function(bi,bj){return qx.bom.element.Style.get(bi,b,bj,false);
},"default":function(bk,bl){return qx.bom.element.Style.get(bk,b,bl,false);
}}),setX:qx.core.Variant.select(j,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bm,bn){if(bn==i){bn=h;
}bm.style.overflow=bn;
}:
function(bo,bp){bo.style.overflowX=bp;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bq,br){bq.style.overflow=br;
}:
function(bs,bt){bs.style.overflowX=bt;
},"default":function(bu,bv){bu.style.overflowX=bv;
}}),resetX:qx.core.Variant.select(j,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bw){bw.style.overflow=k;
}:
function(bx){bx.style.overflowX=k;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(by,bz){by.style.overflow=k;
}:
function(bA,bB){bA.style.overflowX=k;
},"default":function(bC){bC.style.overflowX=k;
}}),getY:qx.core.Variant.select(j,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bD,bE){var bF=qx.bom.element.Style.get(bD,g,bE,false);

if(bF===h){bF=i;
}return bF;
}:
function(bG,bH){return qx.bom.element.Style.get(bG,e,bH,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bI,bJ){return qx.bom.element.Style.get(bI,g,bJ,false);
}:
function(bK,bL){return qx.bom.element.Style.get(bK,e,bL,false);
},"default":function(bM,bN){return qx.bom.element.Style.get(bM,e,bN,false);
}}),setY:qx.core.Variant.select(j,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bO,bP){if(bP===i){bP=h;
}bO.style.overflow=bP;
}:
function(bQ,bR){bQ.style.overflowY=bR;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bS,bT){bS.style.overflow=bT;
}:
function(bU,bV){bU.style.overflowY=bV;
},"default":function(bW,bX){bW.style.overflowY=bX;
}}),resetY:qx.core.Variant.select(j,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bY){bY.style.overflow=k;
}:
function(ca){ca.style.overflowY=k;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(cb,cc){cb.style.overflow=k;
}:
function(cd,ce){cd.style.overflowY=k;
},"default":function(cf){cf.style.overflowY=k;
}})}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__eR:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return f+(this.__eR[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__eR[p]||p;
},reset:function(q){q.style.cursor=g;
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
(function(){var m="",l="qx.client",k=";",j="opacity:",i="opacity",h="filter",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Variant.select(l,{"mshtml":function(n){if(n>=1){n=1;
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
}}),set:qx.core.Variant.select(l,{"mshtml":function(q,r){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(r>=1){r=m;
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
}}),reset:qx.core.Variant.select(l,{"mshtml":function(x){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){x.style.opacity=m;
}else{var y=qx.bom.element.Style.get(x,h,qx.bom.element.Style.COMPUTED_MODE,false);
x.style.filter=y.replace(/alpha\([^\)]*\)/gi,m);
}},"gecko":function(z){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){z.style.MozOpacity=m;
}else{z.style.opacity=m;
}},"default":function(A){A.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(B,C){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var D=qx.bom.element.Style.get(B,i,C,false);

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
(function(){var m="",k="qx.client",h="userSelect",g="style",f="MozUserModify",e="px",d="float",c="borderImage",b="styleFloat",a="appearance",F="pixelHeight",E='Ms',D=":",C="cssFloat",B="pixelTop",A="pixelLeft",z='O',y="qx.bom.element.Style",x='Khtml',w='string',t="pixelRight",u='Moz',r="pixelWidth",s="pixelBottom",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(y,{statics:{__cr:function(){var G=[a,h,q,c];
var K={};
var H=document.documentElement.style;
var L=[u,o,x,z,E];

for(var i=0,l=G.length;i<l;i++){var M=G[i];
var I=M;

if(H[M]){K[I]=M;
continue;
}M=qx.lang.String.firstUp(M);

for(var j=0,N=L.length;j<N;j++){var J=L[j]+M;

if(typeof H[J]==w){K[I]=J;
break;
}}}this.__cs=K;
this.__cs[n]=qx.core.Variant.select(k,{"gecko":f,"webkit":v,"default":h});
this.__ct={};

for(var I in K){this.__ct[I]=this.__cx(K[I]);
}this.__cs[d]=qx.core.Variant.select(k,{"mshtml":b,"default":C});
},__cu:{width:r,height:F,left:A,right:t,top:B,bottom:s},__cv:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(O){var Q=[];
var S=this.__cv;
var R=this.__ct;
var name,P;

for(name in O){P=O[name];

if(P==null){continue;
}name=R[name]||name;
if(S[name]){Q.push(S[name].compile(P));
}else{Q.push(this.__cx(name),D,P,p);
}}return Q.join(m);
},__cw:{},__cx:function(T){var U=this.__cw;
var V=U[T];

if(!V){V=U[T]=qx.lang.String.hyphenate(T);
}return V;
},setCss:qx.core.Variant.select(k,{"mshtml":function(W,X){W.style.cssText=X;
},"default":function(Y,ba){Y.setAttribute(g,ba);
}}),getCss:qx.core.Variant.select(k,{"mshtml":function(bb){return bb.style.cssText.toLowerCase();
},"default":function(bc){return bc.getAttribute(g);
}}),isPropertySupported:function(bd){return (this.__cv[bd]||this.__cs[bd]||bd in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(be,name,bf,bg){{};
name=this.__cs[name]||name;
if(bg!==false&&this.__cv[name]){return this.__cv[name].set(be,bf);
}else{be.style[name]=bf!==null?bf:m;
}},setStyles:function(bh,bi,bj){{};
var bm=this.__cs;
var bo=this.__cv;
var bk=bh.style;

for(var bn in bi){var bl=bi[bn];
var name=bm[bn]||bn;

if(bl===undefined){if(bj!==false&&bo[name]){bo[name].reset(bh);
}else{bk[name]=m;
}}else{if(bj!==false&&bo[name]){bo[name].set(bh,bl);
}else{bk[name]=bl!==null?bl:m;
}}}},reset:function(bp,name,bq){name=this.__cs[name]||name;
if(bq!==false&&this.__cv[name]){return this.__cv[name].reset(bp);
}else{bp.style[name]=m;
}},get:qx.core.Variant.select(k,{"mshtml":function(br,name,bs,bt){name=this.__cs[name]||name;
if(bt!==false&&this.__cv[name]){return this.__cv[name].get(br,bs);
}if(!br.currentStyle){return br.style[name]||m;
}switch(bs){case this.LOCAL_MODE:return br.style[name]||m;
case this.CASCADED_MODE:return br.currentStyle[name]||m;
default:var bx=br.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bx)){return bx;
}var bw=this.__cu[name];

if(bw){var bu=br.style[name];
br.style[name]=bx||0;
var bv=br.style[bw]+e;
br.style[name]=bu;
return bv;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bx)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bx;
}},"default":function(by,name,bz,bA){name=this.__cs[name]||name;
if(bA!==false&&this.__cv[name]){return this.__cv[name].get(by,bz);
}switch(bz){case this.LOCAL_MODE:return by.style[name]||m;
case this.CASCADED_MODE:if(by.currentStyle){return by.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bB=qx.dom.Node.getDocument(by);
var bC=bB.defaultView.getComputedStyle(by,null);
return bC?bC[name]:m;
}}})},defer:function(bD){bD.__cr();
}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(g){if(qx.bom.client.Engine.VERSION>=8){return (g||window).document.documentMode===5;
}else{return (g||window).document.compatMode!==f;
}},"webkit":function(h){if(document.compatMode===undefined){var i=(h||window).document.createElement(a);
i.style.cssText=e;
return i.style.width===c?true:false;
}else{return (h||window).document.compatMode!==f;
}},"default":function(j){return (j||window).document.compatMode!==f;
}}),isStandardMode:function(k){return !this.isQuirksMode(k);
},getWidth:function(l){var m=(l||window).document;
var n=qx.bom.Viewport.getWidth(l);
var scroll=this.isStandardMode(l)?m.documentElement.scrollWidth:m.body.scrollWidth;
return Math.max(scroll,n);
},getHeight:function(o){var p=(o||window).document;
var q=qx.bom.Viewport.getHeight(o);
var scroll=this.isStandardMode(o)?p.documentElement.scrollHeight:p.body.scrollHeight;
return Math.max(scroll,q);
}}});
})();
(function(){var b="qx.client",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Variant.select(b,{"opera":function(c){if(qx.bom.client.Engine.VERSION<9.5){return (c||window).document.body.clientWidth;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;
}},"webkit":function(e){if(qx.bom.client.Engine.VERSION<523.15){return (e||window).innerWidth;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;
}},"default":function(g){var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}}),getHeight:qx.core.Variant.select(b,{"opera":function(i){if(qx.bom.client.Engine.VERSION<9.5){return (i||window).document.body.clientHeight;
}else{var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientHeight:j.body.clientHeight;
}},"webkit":function(k){if(qx.bom.client.Engine.VERSION<523.15){return (k||window).innerHeight;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}},"default":function(m){var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientHeight:n.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(b,{"mshtml":function(o){var p=(o||window).document;
return p.documentElement.scrollLeft||p.body.scrollLeft;
},"default":function(q){return (q||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(b,{"mshtml":function(r){var s=(r||window).document;
return s.documentElement.scrollTop||s.body.scrollTop;
},"default":function(t){return (t||window).pageYOffset;
}}),getOrientation:function(u){var v=(u||window).orientation;

if(v==null){v=this.getWidth(u)>this.getHeight(u)?90:0;
}return v;
},isLandscape:function(w){return Math.abs(this.getOrientation(w))==90;
},isPortrait:function(x){var y=this.getOrientation(x);
return (y==0||y==180);
}}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b="direct",a='__hM';
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hM=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__hN:null,compute:function(p,q,r,s,t,u,v){this.__hN=this.__hN||new qx.util.placement.Placement();
var y=t.split(f);
var x=y[0];
var w=y[1];
this.__hN.set({axisX:this.__hR(u),axisY:this.__hR(v),edge:x,align:w});
return this.__hN.compute(p,q,r,s);
},__hO:null,__hP:null,__hQ:null,__hR:function(z){switch(z){case b:this.__hO=this.__hO||new qx.util.placement.DirectAxis();
return this.__hO;
case d:this.__hP=this.__hP||new qx.util.placement.KeepAlignAxis();
return this.__hP;
case c:this.__hQ=this.__hQ||new qx.util.placement.BestFitAxis();
return this.__hQ;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__hM:null,compute:function(A,B,C,D){{};
var E=this.getAxisX()||this.__hM;
var G=E.computeStart(A.width,{start:C.left,end:C.right},{start:D.left,end:D.right},B.width,this.__hS());
var F=this.getAxisY()||this.__hM;
var top=F.computeStart(A.height,{start:C.top,end:C.bottom},{start:D.top,end:D.bottom},B.height,this.__hT());
return {left:G,top:top};
},__hS:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==l){return i;
}else if(I==n){return g;
}else if(H==l){return k;
}else if(H==n){return h;
}},__hT:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(a);
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
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__if:{},remove:function(c){delete this.__if[c.$$hash];
},add:function(d){this.__if[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var e=this.__ii();
for(var i=e.length-1;i>=0;i--){var f=e[i];
if(f.hasValidLayout()){continue;
}if(f.isRootWidget()&&!f.hasUserBounds()){var h=f.getSizeHint();
f.renderLayout(0,0,h.width,h.height);
}else{var g=f.getBounds();
f.renderLayout(g.left,g.top,g.width,g.height);
}}},getNestingLevel:function(j){var k=this.__ih;
var m=0;
var parent=j;
while(true){if(k[parent.$$hash]!=null){m+=k[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
m+=1;
}var l=m;

while(j&&j!==parent){k[j.$$hash]=l--;
j=j.$$parent;
}return m;
},__ig:function(){var s=qx.ui.core.queue.Visibility;
this.__ih={};
var r=[];
var q=this.__if;
var n,p;

for(var o in q){n=q[o];

if(s.isVisible(n)){p=this.getNestingLevel(n);
if(!r[p]){r[p]={};
}r[p][o]=n;
delete q[o];
}}return r;
},__ii:function(){var w=[];
var y=this.__ig();

for(var v=y.length-1;v>=0;v--){if(!y[v]){continue;
}
for(var u in y[v]){var t=y[v][u];
if(v==0||t.isRootWidget()||t.hasUserBounds()){w.push(t);
t.invalidateLayoutCache();
continue;
}var A=t.getSizeHint(false);

if(A){t.invalidateLayoutCache();
var x=t.getSizeHint();
var z=(!t.getBounds()||A.minWidth!==x.minWidth||A.width!==x.width||A.maxWidth!==x.maxWidth||A.minHeight!==x.minHeight||A.height!==x.height||A.maxHeight!==x.maxHeight);
}else{z=true;
}
if(z){var parent=t.getLayoutParent();

if(!y[v-1]){y[v-1]={};
}y[v-1][parent.$$hash]=parent;
}else{w.push(t);
}}}return w;
}}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__gf={};
this.__gg=qx.lang.Function.bind(this.__gk,this);
this.__gh=false;
},members:{__gi:null,__gj:null,__gf:null,__gh:null,__gg:null,schedule:function(c){if(this.__gi==null){this.__gi=window.setTimeout(this.__gg,0);
}var d=c.toHashCode();
if(this.__gj&&this.__gj[d]){return;
}this.__gf[d]=c;
this.__gh=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__gj&&this.__gj[f]){this.__gj[f]=null;
return;
}delete this.__gf[f];
if(qx.lang.Object.isEmpty(this.__gf)&&this.__gi!=null){window.clearTimeout(this.__gi);
this.__gi=null;
}},__gk:qx.event.GlobalError.observeMethod(function(){this.__gi=null;
while(this.__gh){this.__gj=qx.lang.Object.clone(this.__gf);
this.__gf={};
this.__gh=false;

for(var h in this.__gj){var g=this.__gj[h];

if(g){this.__gj[h]=null;
g.call();
}}}this.__gj=null;
})},destruct:function(){if(this.__gi!=null){window.clearTimeout(this.__gi);
}this.__gg=this.__gf=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){qx.core.Object.call(this);
this.__ia=b;
this.__ib=c||null;
this.__ic=qx.util.DeferredCallManager.getInstance();
},members:{__ia:null,__ib:null,__ic:null,cancel:function(){this.__ic.cancel(this);
},schedule:function(){this.__ic.schedule(this);
},call:function(){this.__ib?this.__ia.apply(this.__ib):this.__ia();
}},destruct:function(d,e){this.cancel();
this.__ib=this.__ia=this.__ic=null;
}});
})();
(function(){var m="element",k="qx.client",j="qxSelectable",h="off",g="on",f="text",d="div",c="",b="mshtml",a="none",F="scroll",E="qx.html.Element",D="|capture|",C="activate",B="__dz",A="blur",z="deactivate",w="capture",v="userSelect",u="-moz-none",s="visible",t="releaseCapture",q="|bubble|",r="tabIndex",o="focus",p="MozUserSelect",n="hidden";
qx.Class.define(E,{extend:qx.core.Object,construct:function(G,H,I){qx.core.Object.call(this);
this.__dd=G||d;
this.__de=H||null;
this.__df=I||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__dg:{},_scheduleFlush:function(J){qx.html.Element.__dK.schedule();
},flush:function(){var U;
{};
var M=this.__dh();
var L=M.getFocus();

if(L&&this.__dl(L)){M.blur(L);
}var bc=M.getActive();

if(bc&&this.__dl(bc)){qx.bom.Element.deactivate(bc);
}var P=this.__dj();

if(P&&this.__dl(P)){qx.bom.Element.releaseCapture(P);
}var V=[];
var W=this._modified;

for(var T in W){U=W[T];
if(U.__dD()){if(U.__dm&&qx.dom.Hierarchy.isRendered(U.__dm)){V.push(U);
}else{{};
U.__dC();
}delete W[T];
}}
for(var i=0,l=V.length;i<l;i++){U=V[i];
{};
U.__dC();
}var R=this._visibility;

for(var T in R){U=R[T];
var X=U.__dm;

if(!X){delete R[T];
continue;
}{};
if(!U.$$disposed){X.style.display=U.__dp?c:a;
if(qx.core.Variant.isSet(k,b)){if(!(document.documentMode>=8)){X.style.visibility=U.__dp?s:n;
}}}delete R[T];
}var scroll=this._scroll;

for(var T in scroll){U=scroll[T];
var bd=U.__dm;

if(bd&&bd.offsetWidth){var O=true;
if(U.__ds!=null){U.__dm.scrollLeft=U.__ds;
delete U.__ds;
}if(U.__dt!=null){U.__dm.scrollTop=U.__dt;
delete U.__dt;
}var Y=U.__dq;

if(Y!=null){var S=Y.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewX(S,bd,Y.align);
delete U.__dq;
}else{O=false;
}}var ba=U.__dr;

if(ba!=null){var S=ba.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewY(S,bd,ba.align);
delete U.__dr;
}else{O=false;
}}if(O){delete scroll[T];
}}}var N={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bb=this._actions[i];
var X=bb.element.__dm;

if(!X||!N[bb.type]&&!bb.element.__dD()){continue;
}var Q=bb.args;
Q.unshift(X);
qx.bom.Element[bb.type].apply(qx.bom.Element,Q);
}this._actions=[];
for(var T in this.__dg){var K=this.__dg[T];
var bd=K.element.__dm;

if(bd){qx.bom.Selection.set(bd,K.start,K.end);
delete this.__dg[T];
}}qx.event.handler.Appear.refresh();
},__dh:function(){if(!this.__di){var be=qx.event.Registration.getManager(window);
this.__di=be.getHandler(qx.event.handler.Focus);
}return this.__di;
},__dj:function(){if(!this.__dk){var bf=qx.event.Registration.getManager(window);
this.__dk=bf.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__dk.getCaptureElement();
},__dl:function(bg){var bh=qx.core.ObjectRegistry.fromHashCode(bg.$$element);
return bh&&!bh.__dD();
}},members:{__dd:null,__dm:null,__dn:false,__do:true,__dp:true,__dq:null,__dr:null,__ds:null,__dt:null,__du:null,__dv:null,__dw:null,__de:null,__df:null,__dx:null,__dy:null,__dz:null,__dA:null,__dB:null,_scheduleChildrenUpdate:function(){if(this.__dA){return;
}this.__dA=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__dd);
},__dC:function(){{};
var length;
var bi=this.__dz;

if(bi){length=bi.length;
var bj;

for(var i=0;i<length;i++){bj=bi[i];

if(bj.__dp&&bj.__do&&!bj.__dm){bj.__dC();
}}}
if(!this.__dm){this.__dm=this._createDomElement();
this.__dm.$$element=this.$$hash;
this._copyData(false);

if(bi&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__dA){this._syncChildren();
}}delete this.__dA;
},_insertChildren:function(){var bk=this.__dz;
var length=bk.length;
var bm;

if(length>2){var bl=document.createDocumentFragment();

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__dm&&bm.__do){bl.appendChild(bm.__dm);
}}this.__dm.appendChild(bl);
}else{var bl=this.__dm;

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__dm&&bm.__do){bl.appendChild(bm.__dm);
}}}},_syncChildren:function(){var br;
var bw=qx.core.ObjectRegistry;
var bn=this.__dz;
var bu=bn.length;
var bo;
var bs;
var bq=this.__dm;
var bt=bq.childNodes;
var bp=0;
var bv;
{};
for(var i=bt.length-1;i>=0;i--){bv=bt[i];
bs=bw.fromHashCode(bv.$$element);

if(!bs||!bs.__do||bs.__dB!==this){bq.removeChild(bv);
{};
}}for(var i=0;i<bu;i++){bo=bn[i];
if(bo.__do){bs=bo.__dm;
bv=bt[bp];

if(!bs){continue;
}if(bs!=bv){if(bv){bq.insertBefore(bs,bv);
}else{bq.appendChild(bs);
}{};
}bp++;
}}{};
},_copyData:function(bx){var bB=this.__dm;
var bA=this.__df;

if(bA){var by=qx.bom.element.Attribute;

for(var bC in bA){by.set(bB,bC,bA[bC]);
}}var bA=this.__de;

if(bA){var bz=qx.bom.element.Style;

if(bx){bz.setStyles(bB,bA);
}else{bz.setCss(bB,bz.compile(bA));
}}var bA=this.__dx;

if(bA){for(var bC in bA){this._applyProperty(bC,bA[bC]);
}}var bA=this.__dy;

if(bA){qx.event.Registration.getManager(bB).importListeners(bB,bA);
delete this.__dy;
}},_syncData:function(){var bH=this.__dm;
var bG=qx.bom.element.Attribute;
var bE=qx.bom.element.Style;
var bF=this.__dv;

if(bF){var bK=this.__df;

if(bK){var bI;

for(var bJ in bF){bI=bK[bJ];

if(bI!==undefined){bG.set(bH,bJ,bI);
}else{bG.reset(bH,bJ);
}}}this.__dv=null;
}var bF=this.__du;

if(bF){var bK=this.__de;

if(bK){var bD={};

for(var bJ in bF){bD[bJ]=bK[bJ];
}bE.setStyles(bH,bD);
}this.__du=null;
}var bF=this.__dw;

if(bF){var bK=this.__dx;

if(bK){var bI;

for(var bJ in bF){this._applyProperty(bJ,bK[bJ]);
}}this.__dw=null;
}},__dD:function(){var bL=this;
while(bL){if(bL.__dn){return true;
}
if(!bL.__do||!bL.__dp){return false;
}bL=bL.__dB;
}return false;
},__dE:function(bM){if(bM.__dB===this){throw new Error("Child is already in: "+bM);
}
if(bM.__dn){throw new Error("Root elements could not be inserted into other ones.");
}if(bM.__dB){bM.__dB.remove(bM);
}bM.__dB=this;
if(!this.__dz){this.__dz=[];
}if(this.__dm){this._scheduleChildrenUpdate();
}},__dF:function(bN){if(bN.__dB!==this){throw new Error("Has no child: "+bN);
}if(this.__dm){this._scheduleChildrenUpdate();
}delete bN.__dB;
},__dG:function(bO){if(bO.__dB!==this){throw new Error("Has no child: "+bO);
}if(this.__dm){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dz||null;
},getChild:function(bP){var bQ=this.__dz;
return bQ&&bQ[bP]||null;
},hasChildren:function(){var bR=this.__dz;
return bR&&bR[0]!==undefined;
},indexOf:function(bS){var bT=this.__dz;
return bT?bT.indexOf(bS):-1;
},hasChild:function(bU){var bV=this.__dz;
return bV&&bV.indexOf(bU)!==-1;
},add:function(bW){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dE(arguments[i]);
}this.__dz.push.apply(this.__dz,arguments);
}else{this.__dE(bW);
this.__dz.push(bW);
}return this;
},addAt:function(bX,bY){this.__dE(bX);
qx.lang.Array.insertAt(this.__dz,bX,bY);
return this;
},remove:function(ca){var cb=this.__dz;

if(!cb){return;
}
if(arguments[1]){var cc;

for(var i=0,l=arguments.length;i<l;i++){cc=arguments[i];
this.__dF(cc);
qx.lang.Array.remove(cb,cc);
}}else{this.__dF(ca);
qx.lang.Array.remove(cb,ca);
}return this;
},removeAt:function(cd){var ce=this.__dz;

if(!ce){throw new Error("Has no children!");
}var cf=ce[cd];

if(!cf){throw new Error("Has no child at this position!");
}this.__dF(cf);
qx.lang.Array.removeAt(this.__dz,cd);
return this;
},removeAll:function(){var cg=this.__dz;

if(cg){for(var i=0,l=cg.length;i<l;i++){this.__dF(cg[i]);
}cg.length=0;
}return this;
},getParent:function(){return this.__dB||null;
},insertInto:function(parent,ch){parent.__dE(this);

if(ch==null){parent.__dz.push(this);
}else{qx.lang.Array.insertAt(this.__dz,this,ch);
}return this;
},insertBefore:function(ci){var parent=ci.__dB;
parent.__dE(this);
qx.lang.Array.insertBefore(parent.__dz,this,ci);
return this;
},insertAfter:function(cj){var parent=cj.__dB;
parent.__dE(this);
qx.lang.Array.insertAfter(parent.__dz,this,cj);
return this;
},moveTo:function(ck){var parent=this.__dB;
parent.__dG(this);
var cl=parent.__dz.indexOf(this);

if(cl===ck){throw new Error("Could not move to same index!");
}else if(cl<ck){ck--;
}qx.lang.Array.removeAt(parent.__dz,cl);
qx.lang.Array.insertAt(parent.__dz,this,ck);
return this;
},moveBefore:function(cm){var parent=this.__dB;
return this.moveTo(parent.__dz.indexOf(cm));
},moveAfter:function(cn){var parent=this.__dB;
return this.moveTo(parent.__dz.indexOf(cn)+1);
},free:function(){var parent=this.__dB;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__dz){return;
}parent.__dF(this);
qx.lang.Array.remove(parent.__dz,this);
return this;
},getDomElement:function(){return this.__dm||null;
},getNodeName:function(){return this.__dd;
},setNodeName:function(name){this.__dd=name;
},setRoot:function(co){this.__dn=co;
},useMarkup:function(cp){if(this.__dm){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(k,b)){var cq=document.createElement(d);
}else{var cq=qx.bom.Element.getHelperElement();
}cq.innerHTML=cp;
this.useElement(cq.firstChild);
return this.__dm;
},useElement:function(cr){if(this.__dm){throw new Error("Could not overwrite existing element!");
}this.__dm=cr;
this.__dm.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ct=this.getAttribute(r);

if(ct>=1){return true;
}var cs=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ct>=0&&cs[this.__dd]){return true;
}return false;
},setSelectable:qx.core.Variant.select(k,{"webkit":function(cu){this.setAttribute(j,cu?g:h);
this.setStyle(v,cu?f:a);
},"gecko":function(cv){this.setAttribute(j,cv?g:h);
this.setStyle(p,cv?f:u);
},"default":function(cw){this.setAttribute(j,cw?g:h);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__dd];
},include:function(){if(this.__do){return;
}delete this.__do;

if(this.__dB){this.__dB._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__do){return;
}this.__do=false;

if(this.__dB){this.__dB._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__do===true;
},show:function(){if(this.__dp){return;
}
if(this.__dm){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__dB){this.__dB._scheduleChildrenUpdate();
}delete this.__dp;
},hide:function(){if(!this.__dp){return;
}
if(this.__dm){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__dp=false;
},isVisible:function(){return this.__dp===true;
},scrollChildIntoViewX:function(cx,cy,cz){var cA=this.__dm;
var cB=cx.getDomElement();

if(cz!==false&&cA&&cA.offsetWidth&&cB&&cB.offsetWidth){qx.bom.element.Scroll.intoViewX(cB,cA,cy);
}else{this.__dq={element:cx,align:cy};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__ds;
},scrollChildIntoViewY:function(cC,cD,cE){var cF=this.__dm;
var cG=cC.getDomElement();

if(cE!==false&&cF&&cF.offsetWidth&&cG&&cG.offsetWidth){qx.bom.element.Scroll.intoViewY(cG,cF,cD);
}else{this.__dr={element:cC,align:cD};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dt;
},scrollToX:function(x,cH){var cI=this.__dm;

if(cH!==true&&cI&&cI.offsetWidth){cI.scrollLeft=x;
}else{this.__ds=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dq;
},getScrollX:function(){var cJ=this.__dm;

if(cJ){return cJ.scrollLeft;
}return this.__ds||0;
},scrollToY:function(y,cK){var cL=this.__dm;

if(cK!==true&&cL&&cL.offsetWidth){cL.scrollTop=y;
}else{this.__dt=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dr;
},getScrollY:function(){var cM=this.__dm;

if(cM){return cM.scrollTop;
}return this.__dt||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(F,this.__dI,this);
},enableScrolling:function(){this.removeListener(F,this.__dI,this);
},__dH:null,__dI:function(e){if(!this.__dH){this.__dH=true;
this.__dm.scrollTop=0;
this.__dm.scrollLeft=0;
delete this.__dH;
}},getTextSelection:function(){var cN=this.__dm;

if(cN){return qx.bom.Selection.get(cN);
}return null;
},getTextSelectionLength:function(){var cO=this.__dm;

if(cO){return qx.bom.Selection.getLength(cO);
}return null;
},getTextSelectionStart:function(){var cP=this.__dm;

if(cP){return qx.bom.Selection.getStart(cP);
}return null;
},getTextSelectionEnd:function(){var cQ=this.__dm;

if(cQ){return qx.bom.Selection.getEnd(cQ);
}return null;
},setTextSelection:function(cR,cS){var cT=this.__dm;

if(cT){qx.bom.Selection.set(cT,cR,cS);
return;
}qx.html.Element.__dg[this.toHashCode()]={element:this,start:cR,end:cS};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var cU=this.__dm;

if(cU){qx.bom.Selection.clear(cU);
}delete qx.html.Element.__dg[this.toHashCode()];
},__dJ:function(cV,cW){var cX=qx.html.Element._actions;
cX.push({type:cV,element:this,args:cW||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__dJ(o);
},blur:function(){this.__dJ(A);
},activate:function(){this.__dJ(C);
},deactivate:function(){this.__dJ(z);
},capture:function(cY){this.__dJ(w,[cY!==false]);
},releaseCapture:function(){this.__dJ(t);
},setStyle:function(da,dc,dd){if(!this.__de){this.__de={};
}
if(this.__de[da]==dc){return;
}
if(dc==null){delete this.__de[da];
}else{this.__de[da]=dc;
}if(this.__dm){if(dd){qx.bom.element.Style.set(this.__dm,da,dc);
return this;
}if(!this.__du){this.__du={};
}this.__du[da]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(de,df){var dg=qx.bom.element.Style;

if(!this.__de){this.__de={};
}
if(this.__dm){if(!this.__du){this.__du={};
}
for(var di in de){var dh=de[di];

if(this.__de[di]==dh){continue;
}
if(dh==null){delete this.__de[di];
}else{this.__de[di]=dh;
}if(df){dg.set(this.__dm,di,dh);
continue;
}this.__du[di]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var di in de){var dh=de[di];

if(this.__de[di]==dh){continue;
}
if(dh==null){delete this.__de[di];
}else{this.__de[di]=dh;
}}}return this;
},removeStyle:function(dj,dk){this.setStyle(dj,null,dk);
},getStyle:function(dl){return this.__de?this.__de[dl]:null;
},getAllStyles:function(){return this.__de||null;
},setAttribute:function(dm,dn,dp){if(!this.__df){this.__df={};
}
if(this.__df[dm]==dn){return;
}
if(dn==null){delete this.__df[dm];
}else{this.__df[dm]=dn;
}if(this.__dm){if(dp){qx.bom.element.Attribute.set(this.__dm,dm,dn);
return this;
}if(!this.__dv){this.__dv={};
}this.__dv[dm]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dq,dr){for(var ds in dq){this.setAttribute(ds,dq[ds],dr);
}return this;
},removeAttribute:function(dt,du){this.setAttribute(dt,null,du);
},getAttribute:function(dv){return this.__df?this.__df[dv]:null;
},_applyProperty:function(name,dw){},_setProperty:function(dx,dy,dz){if(!this.__dx){this.__dx={};
}
if(this.__dx[dx]==dy){return;
}
if(dy==null){delete this.__dx[dx];
}else{this.__dx[dx]=dy;
}if(this.__dm){if(dz){this._applyProperty(dx,dy);
return this;
}if(!this.__dw){this.__dw={};
}this.__dw[dx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dA,dB){this._setProperty(dA,null,dB);
},_getProperty:function(dC){var dD=this.__dx;

if(!dD){return null;
}var dE=dD[dC];
return dE==null?null:dE;
},addListener:function(dF,dG,self,dH){var dI;

if(this.$$disposed){return null;
}{};

if(this.__dm){return qx.event.Registration.addListener(this.__dm,dF,dG,self,dH);
}
if(!this.__dy){this.__dy={};
}
if(dH==null){dH=false;
}var dJ=qx.event.Manager.getNextUniqueId();
var dK=dF+(dH?D:q)+dJ;
this.__dy[dK]={type:dF,listener:dG,self:self,capture:dH,unique:dJ};
return dK;
},removeListener:function(dL,dM,self,dN){var dO;

if(this.$$disposed){return null;
}{};

if(this.__dm){qx.event.Registration.removeListener(this.__dm,dL,dM,self,dN);
}else{var dQ=this.__dy;
var dP;

if(dN==null){dN=false;
}
for(var dR in dQ){dP=dQ[dR];
if(dP.listener===dM&&dP.self===self&&dP.capture===dN&&dP.type===dL){delete dQ[dR];
break;
}}}return this;
},removeListenerById:function(dS){if(this.$$disposed){return null;
}
if(this.__dm){qx.event.Registration.removeListenerById(this.__dm,dS);
}else{delete this.__dy[dS];
}return this;
},hasListener:function(dT,dU){if(this.$$disposed){return false;
}
if(this.__dm){return qx.event.Registration.hasListener(this.__dm,dT,dU);
}var dW=this.__dy;
var dV;

if(dU==null){dU=false;
}
for(var dX in dW){dV=dW[dX];
if(dV.capture===dU&&dV.type===dT){return true;
}}return false;
}},defer:function(dY){dY.__dK=new qx.util.DeferredCall(dY.flush,dY);
},destruct:function(){var ea=this.__dm;

if(ea){qx.event.Registration.getManager(ea).removeAllListeners(ea);
ea.$$element=c;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dB;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(B);
this.__df=this.__de=this.__dy=this.__dx=this.__dv=this.__du=this.__dw=this.__dm=this.__dB=this.__dq=this.__dr=null;
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__kB=b;
this.__kC=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__kB:null,__kC:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__kB=this.__kC=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var d='ie',c="qx.ui.core.queue.Manager",b="useraction",a="touchend";
qx.Class.define(c,{statics:{__lg:false,__lh:{},__li:0,MAX_RETRIES:10,scheduleFlush:function(f){var self=qx.ui.core.queue.Manager;
self.__lh[f]=true;

if(!self.__lg){self.__ln.schedule();
self.__lg=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__lj){return;
}self.__lj=true;
self.__ln.cancel();
var g=self.__lh;
self.__lk(function(){while(g.visibility||g.widget||g.appearance||g.layout||g.element){if(g.widget){delete g.widget;
qx.ui.core.queue.Widget.flush();
}
if(g.visibility){delete g.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(g.appearance){delete g.appearance;
qx.ui.core.queue.Appearance.flush();
}if(g.widget||g.visibility||g.appearance){continue;
}
if(g.layout){delete g.layout;
qx.ui.core.queue.Layout.flush();
}if(g.widget||g.visibility||g.appearance||g.layout){continue;
}
if(g.element){delete g.element;
qx.html.Element.flush();
}}},function(){self.__lg=false;
});
self.__lk(function(){if(g.dispose){delete g.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__lj=false;
});
self.__li=0;
},__lk:function(h,i){var self=qx.ui.core.queue.Manager;

try{h();
}catch(e){{};
self.__lg=false;
self.__lj=false;
self.__li+=1;
if(qx.bom.client.Browser.NAME==d&&qx.bom.client.Browser.VERSION<=7){i();
}
if(self.__li<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__li-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{i();
}},__ll:function(e){var j=qx.ui.core.queue.Manager;
if(e.getData()==a){j.PAUSE=true;

if(j.__lm){window.clearTimeout(j.__lm);
}j.__lm=window.setTimeout(function(){j.PAUSE=false;
j.__lm=null;
j.flush();
},500);
}else{j.flush();
}}},defer:function(k){k.__ln=new qx.util.DeferredCall(k.flush);
qx.html.Element._scheduleFlush=k.scheduleFlush;
qx.event.Registration.addListener(window,b,qx.bom.client.Feature.TOUCH?k.__ll:k.flush);
}});
})();
(function(){var b="-",a="qx.event.handler.Element";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){qx.core.Object.call(this);
this._manager=c;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(d,e){},registerEvent:function(f,g,h){var k=qx.core.ObjectRegistry.toHashCode(f);
var i=k+b+g;
var j=qx.lang.Function.listener(this._onNative,this,i);
qx.bom.Event.addNativeListener(f,g,j);
this._registeredEvents[i]={element:f,type:g,listener:j};
},unregisterEvent:function(l,m,n){var q=this._registeredEvents;

if(!q){return;
}var r=qx.core.ObjectRegistry.toHashCode(l);
var o=r+b+m;
var p=this._registeredEvents[o];

if(p){qx.bom.Event.removeNativeListener(l,m,p.listener);
}delete this._registeredEvents[o];
},_onNative:qx.event.GlobalError.observeMethod(function(s,t){var v=this._registeredEvents;

if(!v){return;
}var u=v[t];
qx.event.Registration.fireNonBubblingEvent(u.element,u.type,qx.event.type.Native,[s]);
})},destruct:function(){var w;
var x=this._registeredEvents;

for(var y in x){w=x[y];
qx.bom.Event.removeNativeListener(w.element,w.type,w.listener);
}this._manager=this._registeredEvents=null;
},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__hU=f;
this.__hV=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__hU:null,__hV:null,__hW:null,__hX:null,__hY:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__hY=qx.lang.Function.listener(this._onNative,this);
this.__hW=qx.bom.Event.supportsEvent(this.__hV,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__hV,this.__hW,this.__hY);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__hV,this.__hW,this.__hY);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__hX!=p){this.__hX=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__hV,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__hU=this.__hV=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="mousemove",o="touchcancel",n="mouseup",m="mousedown",l="qx.client",k="mshtml",d="qx.event.handler.Touch",j="useraction",h="swipe",c="qx.mobile.nativescroll",b="webkit",g="off",f="tap",i="x",a="y";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__hc=u;
this.__hd=u.getWindow();
this.__he=this.__hd.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:10,SWIPE_MIN_DISTANCE:11,SWIPE_MIN_VELOCITY:0},members:{__hf:null,__hg:null,__hc:null,__hd:null,__he:null,__hh:null,__hi:null,__hj:null,__hk:null,__hl:false,__hm:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__hn:function(D){var E=qx.bom.Event.getTarget(D);
if(qx.core.Variant.isSet(l,b)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__ho:function(F,G,H,I){if(!H){H=this.__hn(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__hd,j,qx.event.type.Data,[G]);
},__hp:function(J,K,L){if(!L){L=this.__hn(J);
}var K=K||J.type;

if(K==r){this.__hq(J,L);
}else if(K==q){this.__hr(J,L);
}else if(K==s){this.__hs(J,L);
}},__hq:function(M,N){var O=M.changedTouches[0];
this.__hh=O.screenX;
this.__hi=O.screenY;
this.__hj=new Date().getTime();
this.__hk=M.changedTouches.length===1;
},__hr:function(P,Q){if(this.__hk&&P.changedTouches.length>1){this.__hk=false;
}},__hs:function(R,S){if(this.__hk){var T=R.changedTouches[0];
var V={x:T.screenX-this.__hh,y:T.screenY-this.__hi};
var W=qx.event.handler.Touch;

if(this.__hm==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__ho(R,f,S,qx.event.type.Tap);
}else{var U=this.__ht(R,S,V);

if(U){R.swipe=U;
this.__ho(R,h,S,qx.event.type.Swipe);
}}}},__ht:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__hj;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__hj,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__hu:qx.core.Variant.select(t,{"on":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__hv(bi)){this.__hl=true;
}else if(bj==s){this.__hl=false;
}var bm=this.__hw(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__hv:qx.core.Variant.select(t,{"on":function(bn){if(qx.core.Variant.isSet(l,k)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__hw:qx.core.Variant.select(t,{"on":function(bp){var bq=this.__hn(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__hf=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__he,r,this.__hf);
Event.addNativeListener(this.__he,q,this.__hf);
Event.addNativeListener(this.__he,s,this.__hf);
Event.addNativeListener(this.__he,o,this.__hf);
},_initMouseObserver:qx.core.Variant.select(t,{"on":function(){if(!qx.bom.client.Feature.TOUCH){this.__hg=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__he,m,this.__hg);
Event.addNativeListener(this.__he,p,this.__hg);
Event.addNativeListener(this.__he,n,this.__hg);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__he,r,this.__hf);
Event.removeNativeListener(this.__he,q,this.__hf);
Event.removeNativeListener(this.__he,s,this.__hf);
Event.removeNativeListener(this.__he,o,this.__hf);
},_stopMouseObserver:qx.core.Variant.select(t,{"on":function(){if(!qx.bom.client.Feature.TOUCH){var Event=qx.bom.Event;
Event.removeNativeListener(this.__he,m,this.__hg);
Event.removeNativeListener(this.__he,p,this.__hg);
Event.removeNativeListener(this.__he,n,this.__hg);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Variant.select(t,{"on":qx.event.GlobalError.observeMethod(function(bs){if(!qx.bom.client.Feature.TOUCH){if(bs.type==p&&!this.__hl){return;
}var bt=this.__hu(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__hm=this.__hn(bu);
}this.__ho(bu,bv);
this.__hp(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__hc=this.__hd=this.__he=this.__hm=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.bom.client.Feature.TOUCH){if(qx.core.Variant.isSet(c,g)){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
})();
(function(){var p="mouseup",o="click",n="qx.client",m="mousedown",l="contextmenu",k="mousewheel",j="dblclick",h="mouseover",g="mouseout",f="mousemove",c="on",e="useraction",d="DOMMouseScroll",b="gecko|webkit",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){qx.core.Object.call(this);
this.__eD=q;
this.__eE=q.getWindow();
this.__eF=this.__eE.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__eG:null,__eH:null,__eI:null,__eJ:null,__eK:null,__eD:null,__eE:null,__eF:null,canHandleEvent:function(r,s){},registerEvent:qx.bom.client.System.IPHONE?
function(t,u,v){t[c+u]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(w,x,y){w[c+x]=undefined;
}:qx.lang.Function.returnNull,__eL:function(z,A,B){if(!B){B=qx.bom.Event.getTarget(z);
}if(B&&B.nodeType){qx.event.Registration.fireEvent(B,A||z.type,A==k?qx.event.type.MouseWheel:qx.event.type.Mouse,[z,B,null,true,true]);
}qx.event.Registration.fireEvent(this.__eE,e,qx.event.type.Data,[A||z.type]);
},__eM:function(){var D=[this.__eE,this.__eF,this.__eF.body];
var E=this.__eE;
var C=d;

for(var i=0;i<D.length;i++){if(qx.bom.Event.supportsEvent(D[i],k)){C=k;
E=D[i];
break;
}}return {type:C,target:E};
},_initButtonObserver:function(){this.__eG=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eF,m,this.__eG);
Event.addNativeListener(this.__eF,p,this.__eG);
Event.addNativeListener(this.__eF,o,this.__eG);
Event.addNativeListener(this.__eF,j,this.__eG);
Event.addNativeListener(this.__eF,l,this.__eG);
},_initMoveObserver:function(){this.__eH=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eF,f,this.__eH);
Event.addNativeListener(this.__eF,h,this.__eH);
Event.addNativeListener(this.__eF,g,this.__eH);
},_initWheelObserver:function(){this.__eI=qx.lang.Function.listener(this._onWheelEvent,this);
var F=this.__eM();
qx.bom.Event.addNativeListener(F.target,F.type,this.__eI);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eF,m,this.__eG);
Event.removeNativeListener(this.__eF,p,this.__eG);
Event.removeNativeListener(this.__eF,o,this.__eG);
Event.removeNativeListener(this.__eF,j,this.__eG);
Event.removeNativeListener(this.__eF,l,this.__eG);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eF,f,this.__eH);
Event.removeNativeListener(this.__eF,h,this.__eH);
Event.removeNativeListener(this.__eF,g,this.__eH);
},_stopWheelObserver:function(){var G=this.__eM();
qx.bom.Event.removeNativeListener(G.target,G.type,this.__eI);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(H){this.__eL(H);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(I){var J=I.type;
var K=qx.bom.Event.getTarget(I);
if(qx.core.Variant.isSet(n,b)){if(K&&K.nodeType==3){K=K.parentNode;
}}
if(this.__eN){this.__eN(I,J,K);
}
if(this.__eP){this.__eP(I,J,K);
}this.__eL(I,J,K);

if(this.__eO){this.__eO(I,J,K);
}
if(this.__eQ){this.__eQ(I,J,K);
}this.__eJ=J;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(L){this.__eL(L,k);
}),__eN:qx.core.Variant.select(n,{"webkit":function(M,N,O){if(qx.bom.client.Engine.VERSION<530){if(N==l){this.__eL(M,p,O);
}}},"default":null}),__eO:qx.core.Variant.select(n,{"opera":function(P,Q,R){if(Q==p&&P.button==2){this.__eL(P,l,R);
}},"default":null}),__eP:qx.core.Variant.select(n,{"mshtml":function(S,T,U){if(S.target!==undefined){return;
}
if(T==p&&this.__eJ==o){this.__eL(S,m,U);
}else if(T==j){this.__eL(S,o,U);
}},"default":null}),__eQ:qx.core.Variant.select(n,{"mshtml":null,"default":function(V,W,X){switch(W){case m:this.__eK=X;
break;
case p:if(X!==this.__eK){var Y=qx.dom.Hierarchy.getCommonParent(X,this.__eK);
this.__eL(V,o,Y);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__eD=this.__eE=this.__eF=this.__eK=null;
},defer:function(ba){qx.event.Registration.addHandler(ba);
}});
})();
(function(){var m="keydown",l="qx.client",k="keypress",j="NumLock",i="keyup",h="Enter",g="0",f="9",e="-",d="PageUp",bu="+",bt="PrintScreen",bs="gecko",br="A",bq="Z",bp="Left",bo="F5",bn="Down",bm="Up",bl="F11",t="F6",u="useraction",r="F3",s="keyinput",p="Insert",q="F8",n="End",o="/",B="Delete",C="*",O="cmd",K="F1",W="F4",R="Home",bh="F2",bc="F12",G="PageDown",bk="F7",bj="Win",bi="F9",F="F10",I="Right",J="text",M="Escape",P="webkit",S="5",Y="3",be="Meta",v="7",w="CapsLock",H="input",V="Control",U="Space",T="Tab",bb="Shift",ba="Pause",Q="Unidentified",X="qx.event.handler.Keyboard",a="mshtml|webkit",bd="6",x="off",y="Apps",L="4",b="Alt",c="mshtml",E="2",z="Scroll",A="1",D="8",N="autoComplete",bg=",",bf="Backspace";
qx.Class.define(X,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bv){qx.core.Object.call(this);
this.__gO=bv;
this.__gP=bv.getWindow();
if(qx.core.Variant.isSet(l,bs)){this.__gQ=this.__gP;
}else{this.__gQ=this.__gP.document.documentElement;
}this.__gR={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bw){if(this._identifierToKeyCodeMap[bw]){return true;
}
if(bw.length!=1){return false;
}
if(bw>=g&&bw<=f){return true;
}
if(bw>=br&&bw<=bq){return true;
}
switch(bw){case bu:case e:case C:case o:return true;
default:return false;
}}},members:{__gS:null,__gO:null,__gP:null,__gQ:null,__gR:null,__gT:null,__gU:null,__gV:null,canHandleEvent:function(bx,by){},registerEvent:function(bz,bA,bB){},unregisterEvent:function(bC,bD,bE){},_fireInputEvent:function(bF,bG){var bH=this.__gW();
if(bH&&bH.offsetWidth!=0){var event=qx.event.Registration.createEvent(s,qx.event.type.KeyInput,[bF,bH,bG]);
this.__gO.dispatchEvent(bH,event);
}if(this.__gP){qx.event.Registration.fireEvent(this.__gP,u,qx.event.type.Data,[s]);
}},_fireSequenceEvent:function(bI,bJ,bK){var bL=this.__gW();
var bM=bI.keyCode;
var event=qx.event.Registration.createEvent(bJ,qx.event.type.KeySequence,[bI,bL,bK]);
this.__gO.dispatchEvent(bL,event);
if(qx.core.Variant.isSet(l,a)){if(bJ==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bM)&&!this._emulateKeyPress[bM]){this._fireSequenceEvent(bI,k,bK);
}}}if(this.__gP){qx.event.Registration.fireEvent(this.__gP,u,qx.event.type.Data,[bJ]);
}},__gW:function(){var bN=this.__gO.getHandler(qx.event.handler.Focus);
var bO=bN.getActive();
if(!bO||bO.offsetWidth==0){bO=bN.getFocus();
}if(!bO||bO.offsetWidth==0){bO=this.__gO.getWindow().document.body;
}return bO;
},_initKeyObserver:function(){this.__gS=qx.lang.Function.listener(this.__gX,this);
this.__gV=qx.lang.Function.listener(this.__ha,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gQ,i,this.__gS);
Event.addNativeListener(this.__gQ,m,this.__gS);
Event.addNativeListener(this.__gQ,k,this.__gV);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gQ,i,this.__gS);
Event.removeNativeListener(this.__gQ,m,this.__gS);
Event.removeNativeListener(this.__gQ,k,this.__gV);

for(var bQ in (this.__gU||{})){var bP=this.__gU[bQ];
Event.removeNativeListener(bP.target,k,bP.callback);
}delete (this.__gU);
},__gX:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(bR){bR=window.event||bR;
var bU=bR.keyCode;
var bS=0;
var bT=bR.type;
if(!(this.__gR[bU]==m&&bT==m)){this._idealKeyHandler(bU,bS,bT,bR);
}if(bT==m){if(this._isNonPrintableKeyCode(bU)||this._emulateKeyPress[bU]){this._idealKeyHandler(bU,bS,k,bR);
}}this.__gR[bU]=bT;
},"gecko":function(bV){var ca=this._keyCodeFix[bV.keyCode]||bV.keyCode;
var bX=0;
var bY=bV.type;
if(qx.bom.client.Platform.WIN){var bW=ca?this._keyCodeToIdentifier(ca):this._charCodeToIdentifier(bX);

if(!(this.__gR[bW]==m&&bY==m)){this._idealKeyHandler(ca,bX,bY,bV);
}this.__gR[bW]=bY;
}else{this._idealKeyHandler(ca,bX,bY,bV);
}this.__gY(bV.target,bY,ca);
},"webkit":function(cb){var ce=0;
var cc=0;
var cd=cb.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cd==i||cd==m){ce=this._charCode2KeyCode[cb.charCode]||cb.keyCode;
}else{if(this._charCode2KeyCode[cb.charCode]){ce=this._charCode2KeyCode[cb.charCode];
}else{cc=cb.charCode;
}}this._idealKeyHandler(ce,cc,cd,cb);
}else{ce=cb.keyCode;
this._idealKeyHandler(ce,cc,cd,cb);
if(cd==m){if(this._isNonPrintableKeyCode(ce)||this._emulateKeyPress[ce]){this._idealKeyHandler(ce,cc,k,cb);
}}this.__gR[ce]=cd;
}},"opera":function(cf){this.__gT=cf.keyCode;
this._idealKeyHandler(cf.keyCode,0,cf.type,cf);
}})),__gY:qx.core.Variant.select(l,{"gecko":function(cg,ch,ci){if(ch===m&&(ci==33||ci==34||ci==38||ci==40)&&cg.type==J&&cg.tagName.toLowerCase()===H&&cg.getAttribute(N)!==x){if(!this.__gU){this.__gU={};
}var ck=qx.core.ObjectRegistry.toHashCode(cg);

if(this.__gU[ck]){return;
}var self=this;
this.__gU[ck]={target:cg,callback:function(cl){qx.bom.Event.stopPropagation(cl);
self.__ha(cl);
}};
var cj=qx.event.GlobalError.observeMethod(this.__gU[ck].callback);
qx.bom.Event.addNativeListener(cg,k,cj);
}},"default":null}),__ha:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(cm){cm=window.event||cm;

if(this._charCode2KeyCode[cm.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cm.keyCode],0,cm.type,cm);
}else{this._idealKeyHandler(0,cm.keyCode,cm.type,cm);
}},"gecko":function(cn){var cq=this._keyCodeFix[cn.keyCode]||cn.keyCode;
var co=cn.charCode;
var cp=cn.type;
this._idealKeyHandler(cq,co,cp,cn);
},"webkit":function(cr){if(qx.bom.client.Engine.VERSION<525.13){var cu=0;
var cs=0;
var ct=cr.type;

if(ct==i||ct==m){cu=this._charCode2KeyCode[cr.charCode]||cr.keyCode;
}else{if(this._charCode2KeyCode[cr.charCode]){cu=this._charCode2KeyCode[cr.charCode];
}else{cs=cr.charCode;
}}this._idealKeyHandler(cu,cs,ct,cr);
}else{if(this._charCode2KeyCode[cr.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cr.keyCode],0,cr.type,cr);
}else{this._idealKeyHandler(0,cr.keyCode,cr.type,cr);
}}},"opera":function(cv){var cx=cv.keyCode;
var cw=cv.type;
if(cx!=this.__gT){this._idealKeyHandler(0,this.__gT,cw,cv);
}else{if(this._keyCodeToIdentifierMap[cv.keyCode]){this._idealKeyHandler(cv.keyCode,0,cv.type,cv);
}else{this._idealKeyHandler(0,cv.keyCode,cv.type,cv);
}}}})),_idealKeyHandler:function(cy,cz,cA,cB){var cC;
if(cy||(!cy&&!cz)){cC=this._keyCodeToIdentifier(cy);
this._fireSequenceEvent(cB,cA,cC);
}else{cC=this._charCodeToIdentifier(cz);
this._fireSequenceEvent(cB,k,cC);
this._fireInputEvent(cB,cz);
}},_specialCharCodeMap:{8:bf,9:T,13:h,27:M,32:U},_emulateKeyPress:qx.core.Variant.select(l,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bb,17:V,18:b,20:w,224:be,37:bp,38:bm,39:I,40:bn,33:d,34:G,35:n,36:R,45:p,46:B,112:K,113:bh,114:r,115:W,116:bo,117:t,118:bk,119:q,120:bi,121:F,122:bl,123:bc,144:j,44:bt,145:z,19:ba,91:qx.bom.client.Platform.MAC?O:bj,92:bj,93:qx.bom.client.Platform.MAC?O:y},_numpadToCharCode:{96:g.charCodeAt(0),97:A.charCodeAt(0),98:E.charCodeAt(0),99:Y.charCodeAt(0),100:L.charCodeAt(0),101:S.charCodeAt(0),102:bd.charCodeAt(0),103:v.charCodeAt(0),104:D.charCodeAt(0),105:f.charCodeAt(0),106:C.charCodeAt(0),107:bu.charCodeAt(0),109:e.charCodeAt(0),110:bg.charCodeAt(0),111:o.charCodeAt(0)},_charCodeA:br.charCodeAt(0),_charCodeZ:bq.charCodeAt(0),_charCode0:g.charCodeAt(0),_charCode9:f.charCodeAt(0),_isNonPrintableKeyCode:function(cD){return this._keyCodeToIdentifierMap[cD]?true:false;
},_isIdentifiableKeyCode:function(cE){if(cE>=this._charCodeA&&cE<=this._charCodeZ){return true;
}if(cE>=this._charCode0&&cE<=this._charCode9){return true;
}if(this._specialCharCodeMap[cE]){return true;
}if(this._numpadToCharCode[cE]){return true;
}if(this._isNonPrintableKeyCode(cE)){return true;
}return false;
},_keyCodeToIdentifier:function(cF){if(this._isIdentifiableKeyCode(cF)){var cG=this._numpadToCharCode[cF];

if(cG){return String.fromCharCode(cG);
}return (this._keyCodeToIdentifierMap[cF]||this._specialCharCodeMap[cF]||String.fromCharCode(cF));
}else{return Q;
}},_charCodeToIdentifier:function(cH){return this._specialCharCodeMap[cH]||String.fromCharCode(cH).toUpperCase();
},_identifierToKeyCode:function(cI){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cI]||cI.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gT=this.__gO=this.__gP=this.__gQ=this.__gR=null;
},defer:function(cJ,cK){qx.event.Registration.addHandler(cJ);
if(!cJ._identifierToKeyCodeMap){cJ._identifierToKeyCodeMap={};

for(var cL in cK._keyCodeToIdentifierMap){cJ._identifierToKeyCodeMap[cK._keyCodeToIdentifierMap[cL]]=parseInt(cL,10);
}
for(var cL in cK._specialCharCodeMap){cJ._identifierToKeyCodeMap[cK._specialCharCodeMap[cL]]=parseInt(cL,10);
}}
if(qx.core.Variant.isSet(l,c)){cK._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(l,bs)){cK._keyCodeFix={12:cK._identifierToKeyCode(j)};
}else if(qx.core.Variant.isSet(l,P)){if(qx.bom.client.Engine.VERSION<525.13){cK._charCode2KeyCode={63289:cK._identifierToKeyCode(j),63276:cK._identifierToKeyCode(d),63277:cK._identifierToKeyCode(G),63275:cK._identifierToKeyCode(n),63273:cK._identifierToKeyCode(R),63234:cK._identifierToKeyCode(bp),63232:cK._identifierToKeyCode(bm),63235:cK._identifierToKeyCode(I),63233:cK._identifierToKeyCode(bn),63272:cK._identifierToKeyCode(B),63302:cK._identifierToKeyCode(p),63236:cK._identifierToKeyCode(K),63237:cK._identifierToKeyCode(bh),63238:cK._identifierToKeyCode(r),63239:cK._identifierToKeyCode(W),63240:cK._identifierToKeyCode(bo),63241:cK._identifierToKeyCode(t),63242:cK._identifierToKeyCode(bk),63243:cK._identifierToKeyCode(q),63244:cK._identifierToKeyCode(bi),63245:cK._identifierToKeyCode(F),63246:cK._identifierToKeyCode(bl),63247:cK._identifierToKeyCode(bc),63248:cK._identifierToKeyCode(bt),3:cK._identifierToKeyCode(h),12:cK._identifierToKeyCode(j),13:cK._identifierToKeyCode(h)};
}else{cK._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Ctrl",d="Shift",c="mousemove",b="move",a="mouseover",A="Alt",z="keyup",y="mouseup",x="dragend",w="on",v="mousedown",u="qxDraggable",t="drag",s="drop",r="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(B){qx.core.Object.call(this);
this.__jt=B;
this.__ju=B.getWindow().document.documentElement;
this.__jt.addListener(this.__ju,v,this._onMouseDown,this);
this.__jG();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__jt:null,__ju:null,__jv:null,__jw:null,__jx:null,__jy:null,__jz:null,__jA:null,__jB:null,__jC:null,__jD:false,__jE:0,__jF:0,canHandleEvent:function(C,D){},registerEvent:function(E,F,G){},unregisterEvent:function(H,I,J){},addType:function(K){this.__jx[K]=true;
},addAction:function(L){this.__jy[L]=true;
},supportsType:function(M){return !!this.__jx[M];
},supportsAction:function(N){return !!this.__jy[N];
},getData:function(O){if(!this.__jN||!this.__jv){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__jx[O]){throw new Error("Unsupported data type: "+O+"!");
}
if(!this.__jA[O]){this.__jB=O;
this.__jI(q,this.__jw,this.__jv,false);
}
if(!this.__jA[O]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__jA[O]||null;
},getCurrentAction:function(){return this.__jC;
},addData:function(P,Q){this.__jA[P]=Q;
},getCurrentType:function(){return this.__jB;
},isSessionActive:function(){return this.__jD;
},__jG:function(){this.__jx={};
this.__jy={};
this.__jz={};
this.__jA={};
},__jH:function(){if(this.__jw==null){return;
}var T=this.__jy;
var R=this.__jz;
var S=null;

if(this.__jN){if(R.Shift&&R.Ctrl&&T.alias){S=k;
}else if(R.Shift&&R.Alt&&T.copy){S=j;
}else if(R.Shift&&T.move){S=b;
}else if(R.Alt&&T.alias){S=k;
}else if(R.Ctrl&&T.copy){S=j;
}else if(T.move){S=b;
}else if(T.copy){S=j;
}else if(T.alias){S=k;
}}
if(S!=this.__jC){this.__jC=S;
this.__jI(o,this.__jw,this.__jv,false);
}},__jI:function(U,V,W,X,Y){var bb=qx.event.Registration;
var ba=bb.createEvent(U,qx.event.type.Drag,[X,Y]);

if(V!==W){ba.setRelatedTarget(W);
}return bb.dispatchEvent(V,ba);
},__jJ:function(bc){while(bc&&bc.nodeType==1){if(bc.getAttribute(u)==w){return bc;
}bc=bc.parentNode;
}return null;
},__jK:function(bd){while(bd&&bd.nodeType==1){if(bd.getAttribute(r)==w){return bd;
}bd=bd.parentNode;
}return null;
},__jL:function(){this.__jw=null;
this.__jt.removeListener(this.__ju,c,this._onMouseMove,this,true);
this.__jt.removeListener(this.__ju,y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__jG();
},__jM:function(){if(this.__jD){this.__jt.removeListener(this.__ju,a,this._onMouseOver,this,true);
this.__jt.removeListener(this.__ju,h,this._onMouseOut,this,true);
this.__jt.removeListener(this.__ju,g,this._onKeyDown,this,true);
this.__jt.removeListener(this.__ju,z,this._onKeyUp,this,true);
this.__jI(x,this.__jw,this.__jv,false);
this.__jD=false;
}this.__jN=false;
this.__jv=null;
this.__jL();
},__jN:false,_onWindowBlur:function(e){this.__jM();
},_onKeyDown:function(e){var be=e.getKeyIdentifier();

switch(be){case A:case f:case d:if(!this.__jz[be]){this.__jz[be]=true;
this.__jH();
}}},_onKeyUp:function(e){var bf=e.getKeyIdentifier();

switch(bf){case A:case f:case d:if(this.__jz[bf]){this.__jz[bf]=false;
this.__jH();
}}},_onMouseDown:function(e){if(this.__jD){return;
}var bg=this.__jJ(e.getTarget());

if(bg){this.__jE=e.getDocumentLeft();
this.__jF=e.getDocumentTop();
this.__jw=bg;
this.__jt.addListener(this.__ju,c,this._onMouseMove,this,true);
this.__jt.addListener(this.__ju,y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__jN){this.__jI(s,this.__jv,this.__jw,false,e);
}if(this.__jD){e.stopPropagation();
}this.__jM();
},_onMouseMove:function(e){if(this.__jD){if(!this.__jI(t,this.__jw,this.__jv,true,e)){this.__jM();
}}else{if(Math.abs(e.getDocumentLeft()-this.__jE)>3||Math.abs(e.getDocumentTop()-this.__jF)>3){if(this.__jI(n,this.__jw,this.__jv,true,e)){this.__jD=true;
this.__jt.addListener(this.__ju,a,this._onMouseOver,this,true);
this.__jt.addListener(this.__ju,h,this._onMouseOut,this,true);
this.__jt.addListener(this.__ju,g,this._onKeyDown,this,true);
this.__jt.addListener(this.__ju,z,this._onKeyUp,this,true);
var bh=this.__jz;
bh.Ctrl=e.isCtrlPressed();
bh.Shift=e.isShiftPressed();
bh.Alt=e.isAltPressed();
this.__jH();
}else{this.__jI(x,this.__jw,this.__jv,false);
this.__jL();
}}}},_onMouseOver:function(e){var bi=e.getTarget();
var bj=this.__jK(bi);

if(bj&&bj!=this.__jv){this.__jN=this.__jI(m,bj,this.__jw,true,e);
this.__jv=bj;
this.__jH();
}},_onMouseOut:function(e){var bl=this.__jK(e.getTarget());
var bk=this.__jK(e.getRelatedTarget());

if(bl&&bl!==bk&&bl==this.__jv){this.__jI(l,this.__jv,bk,false,e);
this.__jv=null;
this.__jN=false;
qx.event.Timer.once(this.__jH,this,0);
}}},destruct:function(){this.__jw=this.__jv=this.__jt=this.__ju=this.__jx=this.__jy=this.__jz=this.__jA=null;
},defer:function(bm){qx.event.Registration.addHandler(bm);
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__cl=d;
this.__cm={};
qx.event.handler.Appear.__cn[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__cn:{},refresh:function(){var e=this.__cn;

for(var f in e){e[f].refresh();
}}},members:{__cl:null,__cm:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__cm;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__cm;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__cm;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__cl.dispatchEvent(w,t);
}}}},destruct:function(){this.__cl=this.__cm=null;
delete qx.event.handler.Appear.__cn[this.$$hash];
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
(function(){var q="mshtml",p="",o="qx.client",n=" ",m=">",k="<",h="='",g="none",f="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",d="qx.bom.Element",a="' ",c="div",b="></";
qx.Class.define(d,{statics:{__kI:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__kJ:{},__kK:{},allowCreationWithMarkup:function(r){if(!r){r=window;
}var s=r.location.href;

if(qx.bom.Element.__kK[s]==undefined){try{r.document.createElement(f);
qx.bom.Element.__kK[s]=true;
}catch(e){qx.bom.Element.__kK[s]=false;
}}return qx.bom.Element.__kK[s];
},getHelperElement:function(t){if(!t){t=window;
}var v=t.location.href;

if(!qx.bom.Element.__kJ[v]){var u=qx.bom.Element.__kJ[v]=t.document.createElement(c);
if(qx.bom.client.Engine.WEBKIT){u.style.display=g;
t.document.body.appendChild(u);
}}return qx.bom.Element.__kJ[v];
},create:function(name,w,x){if(!x){x=window;
}
if(!name){throw new Error("The tag name is missing!");
}var z=this.__kI;
var y=p;

for(var B in w){if(z[B]){y+=B+h+w[B]+a;
}}var C;
if(y!=p){if(qx.bom.Element.allowCreationWithMarkup(x)){C=x.document.createElement(k+name+n+y+m);
}else{var A=qx.bom.Element.getHelperElement(x);
A.innerHTML=k+name+n+y+b+name+m;
C=A.firstChild;
}}else{C=x.document.createElement(name);
}
for(var B in w){if(!z[B]){qx.bom.element.Attribute.set(C,B,w[B]);
}}return C;
},empty:function(D){return D.innerHTML=p;
},addListener:function(E,F,G,self,H){return qx.event.Registration.addListener(E,F,G,self,H);
},removeListener:function(I,J,K,self,L){return qx.event.Registration.removeListener(I,J,K,self,L);
},removeListenerById:function(M,N){return qx.event.Registration.removeListenerById(M,N);
},hasListener:function(O,P,Q){return qx.event.Registration.hasListener(O,P,Q);
},focus:function(R){qx.event.Registration.getManager(R).getHandler(qx.event.handler.Focus).focus(R);
},blur:function(S){qx.event.Registration.getManager(S).getHandler(qx.event.handler.Focus).blur(S);
},activate:function(T){qx.event.Registration.getManager(T).getHandler(qx.event.handler.Focus).activate(T);
},deactivate:function(U){qx.event.Registration.getManager(U).getHandler(qx.event.handler.Focus).deactivate(U);
},capture:function(V,W){qx.event.Registration.getManager(V).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(V,W);
},releaseCapture:function(X){qx.event.Registration.getManager(X).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(X);
},matchesSelector:function(Y,ba){if(ba){return qx.bom.Selector.query(ba,Y.parentNode).length>0;
}else{return false;
}},clone:function(bb,bc){var bf;

if(bc||(qx.core.Variant.isSet(o,q)&&!qx.xml.Document.isXmlDocument(bb))){var bj=qx.event.Registration.getManager(bb);
var bd=qx.dom.Hierarchy.getDescendants(bb);
bd.push(bb);
}if(qx.core.Variant.isSet(o,q)){for(var i=0,l=bd.length;i<l;i++){bj.toggleAttachedEvents(bd[i],false);
}}var bf=bb.cloneNode(true);
if(qx.core.Variant.isSet(o,q)){for(var i=0,l=bd.length;i<l;i++){bj.toggleAttachedEvents(bd[i],true);
}}if(bc===true){var bm=qx.dom.Hierarchy.getDescendants(bf);
bm.push(bf);
var be,bh,bl,bg;

for(var i=0,bk=bd.length;i<bk;i++){bl=bd[i];
be=bj.serializeListeners(bl);

if(be.length>0){bh=bm[i];

for(var j=0,bi=be.length;j<bi;j++){bg=be[j];
bj.addListener(bh,bg.type,bg.handler,bg.self,bg.capture);
}}}}return bf;
}}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__eB:null,__eC:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__eB=d;
this.__eC=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__eB=this.__eB;
g.__eC=this.__eC;
return g;
},getOrientation:function(){return this.__eB;
},isLandscape:function(){return this.__eC==c;
},isPortrait:function(){return this.__eC==a;
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Native.prototype._cloneNativeEvent.call(this,b,c);
c.shiftKey=b.shiftKey;
c.ctrlKey=b.ctrlKey;
c.altKey=b.altKey;
c.metaKey=b.metaKey;
return c;
},getModifiers:function(){var e=0;
var d=this._native;

if(d.shiftKey){e|=qx.event.type.Dom.SHIFT_MASK;
}
if(d.ctrlKey){e|=qx.event.type.Dom.CTRL_MASK;
}
if(d.altKey){e|=qx.event.type.Dom.ALT_MASK;
}
if(d.metaKey){e|=qx.event.type.Dom.META_MASK;
}return e;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
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
},isMultiTouch:function(){return this.__cG().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__cF(f).pageX;
},getDocumentTop:function(g){return this.__cF(g).pageY;
},getScreenLeft:function(h){return this.__cF(h).screenX;
},getScreenTop:function(j){return this.__cF(j).screenY;
},getViewportLeft:function(k){return this.__cF(k).clientX;
},getViewportTop:function(l){return this.__cF(l).clientY;
},getIdentifier:function(m){return this.__cF(m).identifier;
},__cF:function(n){n=n==null?0:n;
return this.__cG()[n];
},__cG:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
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
(function(){var h="left",g="right",f="middle",e="none",d="click",c="contextmenu",b="qx.event.type.Mouse",a="qx.client";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(i,j){var j=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,i,j);
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
},__kD:{0:h,2:g,1:f},__kE:{1:h,2:g,4:f},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case c:return g;
case d:if(this.__kF){return this.__kF();
}default:if(this._native.target!==undefined){return this.__kD[this._native.button]||e;
}else{return this.__kE[this._native.button]||e;
}}},__kF:qx.core.Variant.select(a,{"mshtml":function(){return h;
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
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){if(qx.bom.client.Platform.MAC){return -(this._native.wheelDelta/1200);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.bom.client.Platform.WIN){var d=120;
if(qx.bom.client.Engine.VERSION==533.16){d=1200;
}}else{d=40;
if(qx.bom.client.Engine.VERSION==533.16||qx.bom.client.Engine.VERSION==533.17||qx.bom.client.Engine.VERSION==533.18){d=1200;
}}return -(this._native.wheelDelta/d);
}}})}});
})();
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__lE:function(y){var z=navigator.userAgent;
var B=new RegExp(s+y+d);
var C=z.match(B);

if(!C){return;
}var name=C[1].toLowerCase();
var A=C[3];
if(z.match(/Version(\/| )([0-9]+\.[0-9])/)){A=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(z.indexOf(a)!==-1||z.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
A=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=A;
this.VERSION=parseFloat(A,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(D){D.__lE(o);
},"gecko":function(E){E.__lE(k);
},"mshtml":function(F){F.__lE(v);
},"opera":function(G){G.__lE(p);
}})});
})();
(function(){var f="qx.client",e="qx.dom.Hierarchy",d="previousSibling",c="*",b="nextSibling",a="parentNode";
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
},contains:qx.core.Variant.select(f,{"webkit|mshtml|opera":function(n,o){if(qx.dom.Node.isDocument(n)){var p=qx.dom.Node.getDocument(o);
return n&&p==n;
}else if(qx.dom.Node.isDocument(o)){return false;
}else{return n.contains(o);
}},"gecko":function(q,r){return !!(q.compareDocumentPosition(r)&16);
},"default":function(s,t){while(t){if(s==t){return true;
}t=t.parentNode;
}return false;
}}),isRendered:qx.core.Variant.select(f,{"mshtml":function(u){if(!u.parentNode||!u.offsetParent){return false;
}var v=u.ownerDocument||u.document;
return v.body.contains(u);
},"gecko":function(w){var x=w.ownerDocument||w.document;
return !!(x.compareDocumentPosition(w)&16);
},"default":function(y){if(!y.parentNode||!y.offsetParent){return false;
}var z=y.ownerDocument||y.document;
return z.body.contains(y);
}}),isDescendantOf:function(A,B){return this.contains(B,A);
},getCommonParent:qx.core.Variant.select(f,{"mshtml|opera":function(C,D){if(C===D){return C;
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
}}});
})();
(function(){var j="qx.client",i="mousedown",h="mouseup",g="blur",f="focus",e="on",d="selectstart",c="DOMFocusOut",b="focusin",a="focusout",z="DOMFocusIn",y="draggesture",x="qx.event.handler.Focus",w="_applyFocus",v="deactivate",u="textarea",t="_applyActive",s='character',r="input",q="qxSelectable",o="tabIndex",p="off",m="activate",n="mshtml",k="qxKeepFocus",l="qxKeepActive";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(A){qx.core.Object.call(this);
this._manager=A;
this._window=A.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__jQ:null,__jR:null,__jS:null,__jT:null,__jU:null,__jV:null,__jW:null,__jX:null,__jY:null,__ka:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if(qx.core.Variant.isSet(j,n)){window.setTimeout(function(){try{J.focus();
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
}},tryActivate:function(S){var T=this.__kp(S);

if(T){this.setActive(T);
}},__kb:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__kc:function(){if(this._windowFocused){this._windowFocused=false;
this.__kb(this._window,null,g,false);
}},__kd:function(){if(!this._windowFocused){this._windowFocused=true;
this.__kb(this._window,null,f,false);
}},_initObserver:qx.core.Variant.select(j,{"gecko":function(){this.__jQ=qx.lang.Function.listener(this.__kj,this);
this.__jR=qx.lang.Function.listener(this.__kk,this);
this.__jS=qx.lang.Function.listener(this.__ki,this);
this.__jT=qx.lang.Function.listener(this.__kh,this);
this.__jU=qx.lang.Function.listener(this.__ke,this);
qx.bom.Event.addNativeListener(this._document,i,this.__jQ,true);
qx.bom.Event.addNativeListener(this._document,h,this.__jR,true);
qx.bom.Event.addNativeListener(this._window,f,this.__jS,true);
qx.bom.Event.addNativeListener(this._window,g,this.__jT,true);
qx.bom.Event.addNativeListener(this._window,y,this.__jU,true);
},"mshtml":function(){this.__jQ=qx.lang.Function.listener(this.__kj,this);
this.__jR=qx.lang.Function.listener(this.__kk,this);
this.__jW=qx.lang.Function.listener(this.__kf,this);
this.__jX=qx.lang.Function.listener(this.__kg,this);
this.__jV=qx.lang.Function.listener(this.__km,this);
qx.bom.Event.addNativeListener(this._document,i,this.__jQ);
qx.bom.Event.addNativeListener(this._document,h,this.__jR);
qx.bom.Event.addNativeListener(this._document,b,this.__jW);
qx.bom.Event.addNativeListener(this._document,a,this.__jX);
qx.bom.Event.addNativeListener(this._document,d,this.__jV);
},"webkit":function(){this.__jQ=qx.lang.Function.listener(this.__kj,this);
this.__jR=qx.lang.Function.listener(this.__kk,this);
this.__jX=qx.lang.Function.listener(this.__kg,this);
this.__jS=qx.lang.Function.listener(this.__ki,this);
this.__jT=qx.lang.Function.listener(this.__kh,this);
this.__jV=qx.lang.Function.listener(this.__km,this);
qx.bom.Event.addNativeListener(this._document,i,this.__jQ,true);
qx.bom.Event.addNativeListener(this._document,h,this.__jR,true);
qx.bom.Event.addNativeListener(this._document,d,this.__jV,false);
qx.bom.Event.addNativeListener(this._window,c,this.__jX,true);
qx.bom.Event.addNativeListener(this._window,f,this.__jS,true);
qx.bom.Event.addNativeListener(this._window,g,this.__jT,true);
},"opera":function(){this.__jQ=qx.lang.Function.listener(this.__kj,this);
this.__jR=qx.lang.Function.listener(this.__kk,this);
this.__jW=qx.lang.Function.listener(this.__kf,this);
this.__jX=qx.lang.Function.listener(this.__kg,this);
qx.bom.Event.addNativeListener(this._document,i,this.__jQ,true);
qx.bom.Event.addNativeListener(this._document,h,this.__jR,true);
qx.bom.Event.addNativeListener(this._window,z,this.__jW,true);
qx.bom.Event.addNativeListener(this._window,c,this.__jX,true);
}}),_stopObserver:qx.core.Variant.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__jQ,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__jR,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__jS,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__jT,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__jU,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__jQ);
qx.bom.Event.removeNativeListener(this._document,h,this.__jR);
qx.bom.Event.removeNativeListener(this._document,b,this.__jW);
qx.bom.Event.removeNativeListener(this._document,a,this.__jX);
qx.bom.Event.removeNativeListener(this._document,d,this.__jV);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__jQ,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__jR,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__jV,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__jX,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__jS,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__jT,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__jQ,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__jR,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__jW,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__jX,true);
}}),__ke:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__kq(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__kf:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml":function(bd){this.__kd();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__ko(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__kd();

if(this.__jY){this.setFocus(this.__jY);
delete this.__jY;
}
if(this.__ka){this.setActive(this.__ka);
delete this.__ka;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__kq(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__kg:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml":function(bi){if(!bi.toElement){this.__kc();
this.resetFocus();
this.resetActive();
}},"webkit":function(bj){var bk=qx.bom.Event.getTarget(bj);

if(bk===this.getFocus()){this.resetFocus();
}
if(bk===this.getActive()){this.resetActive();
}},"opera":function(bl){var bm=qx.bom.Event.getTarget(bl);

if(bm==this._document){this.__kc();
this.__jY=this.getFocus();
this.__ka=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bm===this.getFocus()){this.resetFocus();
}
if(bm===this.getActive()){this.resetActive();
}}},"default":null})),__kh:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"gecko":function(bn){var bo=qx.bom.Event.getTarget(bn);

if(bo===this._window||bo===this._document){this.__kc();
this.resetActive();
this.resetFocus();
}},"webkit":function(bp){var bq=qx.bom.Event.getTarget(bp);

if(bq===this._window||bq===this._document){this.__kc();
this.__jY=this.getFocus();
this.__ka=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__ki:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"gecko":function(br){var bs=qx.bom.Event.getTarget(br);

if(bs===this._window||bs===this._document){this.__kd();
bs=this._body;
}this.setFocus(bs);
this.tryActivate(bs);
},"webkit":function(bt){var bu=qx.bom.Event.getTarget(bt);

if(bu===this._window||bu===this._document){this.__kd();

if(this.__jY){this.setFocus(this.__jY);
delete this.__jY;
}
if(this.__ka){this.setActive(this.__ka);
delete this.__ka;
}}else{this.setFocus(bu);
this.tryActivate(bu);
}},"default":null})),__kj:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"gecko":function(bv){var bx=qx.bom.Event.getTarget(bv);
var bw=this.__ko(bx);

if(!bw){qx.bom.Event.preventDefault(bv);
}else if(bw===this._body){this.setFocus(bw);
}},"mshtml":function(by){var bA=qx.bom.Event.getTarget(by);
var bz=this.__ko(bA);

if(bz){if(!this.__kq(bA)){bA.unselectable=e;
try{document.selection.empty();
}catch(bB){}try{bz.focus();
}catch(bC){}}}else{qx.bom.Event.preventDefault(by);
if(!this.__kq(bA)){bA.unselectable=e;
}}},"webkit":function(bD){var bF=qx.bom.Event.getTarget(bD);
var bE=this.__ko(bF);

if(bE){this.setFocus(bE);
}else{qx.bom.Event.preventDefault(bD);
}},"opera":function(bG){var bJ=qx.bom.Event.getTarget(bG);
var bH=this.__ko(bJ);

if(!this.__kq(bJ)){qx.bom.Event.preventDefault(bG);
if(bH){var bI=this.getFocus();

if(bI&&bI.selectionEnd){bI.selectionStart=0;
bI.selectionEnd=0;
bI.blur();
}if(bH){this.setFocus(bH);
}}}else if(bH){this.setFocus(bH);
}},"default":null})),__kk:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml":function(bK){var bL=qx.bom.Event.getTarget(bK);

if(bL.unselectable){bL.unselectable=p;
}this.tryActivate(this.__kl(bL));
},"gecko":function(bM){var bN=qx.bom.Event.getTarget(bM);

while(bN&&bN.offsetWidth===undefined){bN=bN.parentNode;
}
if(bN){this.tryActivate(bN);
}},"webkit|opera":function(bO){var bP=qx.bom.Event.getTarget(bO);
this.tryActivate(this.__kl(bP));
},"default":null})),__kl:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml|webkit":function(bQ){var bR=this.getFocus();

if(bR&&bQ!=bR&&(bR.nodeName.toLowerCase()===r||bR.nodeName.toLowerCase()===u)){bQ=bR;
}return bQ;
},"default":function(bS){return bS;
}})),__km:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml|webkit":function(bT){var bU=qx.bom.Event.getTarget(bT);

if(!this.__kq(bU)){qx.bom.Event.preventDefault(bT);
}},"default":null})),__kn:function(bV){var bW=qx.bom.element.Attribute.get(bV,o);

if(bW>=1){return true;
}var bX=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bW>=0&&bX[bV.tagName]){return true;
}return false;
},__ko:function(bY){while(bY&&bY.nodeType===1){if(bY.getAttribute(k)==e){return null;
}
if(this.__kn(bY)){return bY;
}bY=bY.parentNode;
}return this._body;
},__kp:function(ca){var cb=ca;

while(ca&&ca.nodeType===1){if(ca.getAttribute(l)==e){return null;
}ca=ca.parentNode;
}return cb;
},__kq:function(cc){while(cc&&cc.nodeType===1){var cd=cc.getAttribute(q);

if(cd!=null){return cd===e;
}cc=cc.parentNode;
}return true;
},_applyActive:function(ce,cf){if(cf){this.__kb(cf,ce,v,true);
}
if(ce){this.__kb(ce,cf,m,true);
}},_applyFocus:function(cg,ch){if(ch){this.__kb(ch,cg,a,true);
}
if(cg){this.__kb(cg,ch,b,true);
}if(ch){this.__kb(ch,cg,g,false);
}
if(cg){this.__kb(cg,ch,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__kr=null;
},defer:function(ci){qx.event.Registration.addHandler(ci);
var cj=ci.FOCUSABLE_ELEMENTS;

for(var ck in cj){cj[ck.toUpperCase()]=1;
}}});
})();
(function(){var k="qx.client",j="character",i="EndToEnd",h="input",g="textarea",f="StartToStart",e='character',d="qx.bom.Selection",c="button",b="#text",a="body";
qx.Class.define(d,{statics:{getSelectionObject:qx.core.Variant.select(k,{"mshtml":function(l){return l.selection;
},"default":function(m){return qx.dom.Node.getWindow(m).getSelection();
}}),get:qx.core.Variant.select(k,{"mshtml":function(n){var o=qx.bom.Range.get(qx.dom.Node.getDocument(n));
return o.text;
},"default":function(p){if(this.__lf(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Variant.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__lf(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__lf(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Variant.select(k,{"mshtml":function(A){if(this.__lf(A)){var F=qx.bom.Range.get();
if(!A.contains(F.parentElement())){return -1;
}var G=qx.bom.Range.get(A);
var E=A.value.length;
G.moveToBookmark(F.getBookmark());
G.moveEnd(e,E);
return E-G.text.length;
}else{var G=qx.bom.Range.get(A);
var C=G.parentElement();
var H=qx.bom.Range.get();
H.moveToElementText(C);
var B=qx.bom.Range.get(qx.dom.Node.getBodyElement(A));
B.setEndPoint(f,G);
B.setEndPoint(i,H);
if(H.compareEndPoints(f,B)==0){return 0;
}var D;
var I=0;

while(true){D=B.moveStart(j,-1);
if(H.compareEndPoints(f,B)==0){break;
}if(D==0){break;
}else{I++;
}}return ++I;
}},"gecko|webkit":function(J){if(this.__lf(J)){return J.selectionStart;
}else{var L=qx.dom.Node.getDocument(J);
var K=this.getSelectionObject(L);
if(K.anchorOffset<K.focusOffset){return K.anchorOffset;
}else{return K.focusOffset;
}}},"default":function(M){if(this.__lf(M)){return M.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(M)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(k,{"mshtml":function(N){if(this.__lf(N)){var S=qx.bom.Range.get();
if(!N.contains(S.parentElement())){return -1;
}var T=qx.bom.Range.get(N);
var R=N.value.length;
T.moveToBookmark(S.getBookmark());
T.moveStart(e,-R);
return T.text.length;
}else{var T=qx.bom.Range.get(N);
var P=T.parentElement();
var U=qx.bom.Range.get();
U.moveToElementText(P);
var R=U.text.length;
var O=qx.bom.Range.get(qx.dom.Node.getBodyElement(N));
O.setEndPoint(i,T);
O.setEndPoint(f,U);
if(U.compareEndPoints(i,O)==0){return R-1;
}var Q;
var V=0;

while(true){Q=O.moveEnd(j,1);
if(U.compareEndPoints(i,O)==0){break;
}if(Q==0){break;
}else{V++;
}}return R-(++V);
}},"gecko|webkit":function(W){if(this.__lf(W)){return W.selectionEnd;
}else{var Y=qx.dom.Node.getDocument(W);
var X=this.getSelectionObject(Y);
if(X.focusOffset>X.anchorOffset){return X.focusOffset;
}else{return X.anchorOffset;
}}},"default":function(ba){if(this.__lf(ba)){return ba.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(ba)).focusOffset;
}}}),__lf:function(bb){return qx.dom.Node.isElement(bb)&&(bb.nodeName.toLowerCase()==h||bb.nodeName.toLowerCase()==g);
},set:qx.core.Variant.select(k,{"mshtml":function(bc,bd,be){var bf;
if(qx.dom.Node.isDocument(bc)){bc=bc.body;
}
if(qx.dom.Node.isElement(bc)||qx.dom.Node.isText(bc)){switch(bc.nodeName.toLowerCase()){case h:case g:case c:if(be===undefined){be=bc.value.length;
}
if(bd>=0&&bd<=bc.value.length&&be>=0&&be<=bc.value.length){bf=qx.bom.Range.get(bc);
bf.collapse(true);
bf.moveStart(j,bd);
bf.moveEnd(j,be-bd);
bf.select();
return true;
}break;
case b:if(be===undefined){be=bc.nodeValue.length;
}
if(bd>=0&&bd<=bc.nodeValue.length&&be>=0&&be<=bc.nodeValue.length){bf=qx.bom.Range.get(qx.dom.Node.getBodyElement(bc));
bf.moveToElementText(bc.parentNode);
bf.collapse(true);
bf.moveStart(j,bd);
bf.moveEnd(j,be-bd);
bf.select();
return true;
}break;
default:if(be===undefined){be=bc.childNodes.length-1;
}if(bc.childNodes[bd]&&bc.childNodes[be]){bf=qx.bom.Range.get(qx.dom.Node.getBodyElement(bc));
bf.moveToElementText(bc.childNodes[bd]);
bf.collapse(true);
var bg=qx.bom.Range.get(qx.dom.Node.getBodyElement(bc));
bg.moveToElementText(bc.childNodes[be]);
bf.setEndPoint(i,bg);
bf.select();
return true;
}}}return false;
},"default":function(bh,bi,bj){var bn=bh.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bh)&&(bn==h||bn==g)){if(bj===undefined){bj=bh.value.length;
}if(bi>=0&&bi<=bh.value.length&&bj>=0&&bj<=bh.value.length){bh.focus();
bh.select();
bh.setSelectionRange(bi,bj);
return true;
}}else{var bl=false;
var bm=qx.dom.Node.getWindow(bh).getSelection();
var bk=qx.bom.Range.get(bh);
if(qx.dom.Node.isText(bh)){if(bj===undefined){bj=bh.length;
}
if(bi>=0&&bi<bh.length&&bj>=0&&bj<=bh.length){bl=true;
}}else if(qx.dom.Node.isElement(bh)){if(bj===undefined){bj=bh.childNodes.length-1;
}
if(bi>=0&&bh.childNodes[bi]&&bj>=0&&bh.childNodes[bj]){bl=true;
}}else if(qx.dom.Node.isDocument(bh)){bh=bh.body;

if(bj===undefined){bj=bh.childNodes.length-1;
}
if(bi>=0&&bh.childNodes[bi]&&bj>=0&&bh.childNodes[bj]){bl=true;
}}
if(bl){if(!bm.isCollapsed){bm.collapseToStart();
}bk.setStart(bh,bi);
if(qx.dom.Node.isText(bh)){bk.setEnd(bh,bj);
}else{bk.setEndAfter(bh.childNodes[bj]);
}if(bm.rangeCount>0){bm.removeAllRanges();
}bm.addRange(bk);
return true;
}}return false;
}}),setAll:function(bo){return qx.bom.Selection.set(bo,0);
},clear:qx.core.Variant.select(k,{"mshtml":function(bp){var bq=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bp));
var br=qx.bom.Range.get(bp);
var parent=br.parentElement();
var bs=qx.bom.Range.get(qx.dom.Node.getDocument(bp));
if(parent==bs.parentElement()&&parent==bp){bq.empty();
}},"default":function(bt){var bv=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bt));
var bx=bt.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bt)&&(bx==h||bx==g)){bt.setSelectionRange(0,0);
qx.bom.Element.blur(bt);
}else if(qx.dom.Node.isDocument(bt)||bx==a){bv.collapse(bt.body?bt.body:bt,0);
}else{var bw=qx.bom.Range.get(bt);

if(!bw.collapsed){var by;
var bu=bw.commonAncestorContainer;
if(qx.dom.Node.isElement(bt)&&qx.dom.Node.isText(bu)){by=bu.parentNode;
}else{by=bu;
}
if(by==bt){bv.collapse(bt,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case d:switch(m.type){case j:case i:case c:case l:case f:case h:case g:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case e:case b:case l:return m.createTextRange();
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
(function(){var j="",i="undefined",h="qx.client",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__hb:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__hb.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(D,name){var F=this.__hb;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__hb;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(J,name,K){if(typeof K===i){return;
}var L=this.__hb;
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
(function(){var h="losecapture",g="qx.client",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(i,j){qx.event.dispatch.AbstractBubbling.call(this,i);
this.__ix=i.getWindow();
this.__iy=j;
i.addListener(this.__ix,f,this.releaseCapture,this);
i.addListener(this.__ix,e,this.releaseCapture,this);
i.addListener(this.__ix,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__iy:null,__iz:null,__iA:true,__ix:null,_getParent:function(k){return k.parentNode;
},canDispatchEvent:function(l,event,m){return (this.__iz&&this.__iB[m]);
},dispatchEvent:function(n,event,o){if(o==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__iA||!qx.dom.Hierarchy.contains(this.__iz,n)){n=this.__iz;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,n,event,o);
},__iB:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(p,q){var q=q!==false;

if(this.__iz===p&&this.__iA==q){return;
}
if(this.__iz){this.releaseCapture();
}this.nativeSetCapture(p,q);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(p,h,function(){qx.bom.Event.removeNativeListener(p,h,arguments.callee);
self.releaseCapture();
});
}this.__iA=q;
this.__iz=p;
this.__iy.fireEvent(p,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__iz;
},releaseCapture:function(){var r=this.__iz;

if(!r){return;
}this.__iz=null;
this.__iy.fireEvent(r,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(r);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(s,t){qx.event.Timer.once(function(){s.setCapture(t!==false);
},this,0);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(u){qx.event.Timer.once(function(){u.releaseCapture();
},this,0);
},"default":qx.lang.Function.empty})},destruct:function(){this.__iz=this.__ix=this.__iy=null;
},defer:function(v){qx.event.Registration.addDispatcher(v);
}});
})();
(function(){var c="qx.bom.Selector";
qx.Class.define(c,{statics:{query:null,matches:null}});
(function(){var o=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,v=0,r=Object.prototype.toString,p=false,x=true;
[0,0].sort(function(){x=false;
return 0;
});
var g=function(z,A,B,C){B=B||[];
A=A||document;
var L=A;

if(A.nodeType!==1&&A.nodeType!==9){return [];
}
if(!z||typeof z!=="string"){return B;
}var m,F,D,H,J,G,M,i,N=true,E=g.isXML(A),I=[],K=z;
do{o.exec("");
m=o.exec(K);

if(m){K=m[3];
I.push(m[1]);

if(m[2]){H=m[3];
break;
}}}while(m);

if(I.length>1&&q.exec(z)){if(I.length===2&&k.relative[I[0]]){F=h(I[0]+I[1],A);
}else{F=k.relative[I[0]]?[A]:g(I.shift(),A);

while(I.length){z=I.shift();

if(k.relative[z]){z+=I.shift();
}F=h(z,F);
}}}else{if(!C&&I.length>1&&A.nodeType===9&&!E&&k.match.ID.test(I[0])&&!k.match.ID.test(I[I.length-1])){J=g.find(I.shift(),A,E);
A=J.expr?g.filter(J.expr,J.set)[0]:J.set[0];
}
if(A){J=C?
{expr:I.pop(),set:f(C)}:g.find(I.pop(),I.length===1&&(I[0]==="~"||I[0]==="+")&&A.parentNode?A.parentNode:A,E);
F=J.expr?g.filter(J.expr,J.set):J.set;

if(I.length>0){D=f(F);
}else{N=false;
}
while(I.length){G=I.pop();
M=G;

if(!k.relative[G]){G="";
}else{M=I.pop();
}
if(M==null){M=A;
}k.relative[G](D,M,E);
}}else{D=I=[];
}}
if(!D){D=F;
}
if(!D){g.error(G||z);
}
if(r.call(D)==="[object Array]"){if(!N){B.push.apply(B,D);
}else if(A&&A.nodeType===1){for(i=0;D[i]!=null;i++){if(D[i]&&(D[i]===true||D[i].nodeType===1&&g.contains(A,D[i]))){B.push(F[i]);
}}}else{for(i=0;D[i]!=null;i++){if(D[i]&&D[i].nodeType===1){B.push(F[i]);
}}}}else{f(D,B);
}
if(H){g(H,L,B,C);
g.uniqueSort(B);
}return B;
};
g.uniqueSort=function(O){if(s){p=x;
O.sort(s);

if(p){for(var i=1;i<O.length;i++){if(O[i]===O[i-1]){O.splice(i--,1);
}}}}return O;
};
g.matches=function(P,Q){return g(P,null,null,Q);
};
g.matchesSelector=function(R,S){return g(S,null,null,[R]).length>0;
};
g.find=function(T,U,V){var W;

if(!T){return [];
}
for(var i=0,l=k.order.length;i<l;i++){var Y,X=k.order[i];

if((Y=k.leftMatch[X].exec(T))){var ba=Y[1];
Y.splice(1,1);

if(ba.substr(ba.length-1)!=="\\"){Y[1]=(Y[1]||"").replace(/\\/g,"");
W=k.find[X](Y,U,V);

if(W!=null){T=T.replace(k.match[X],"");
break;
}}}}
if(!W){W=U.getElementsByTagName("*");
}return {set:W,expr:T};
};
g.filter=function(bb,bc,bd,be){var br,bq,bf=bb,bk=[],bg=bc,bh=bc&&bc[0]&&g.isXML(bc[0]);

while(bb&&bc.length){for(var bo in k.filter){if((br=k.leftMatch[bo].exec(bb))!=null&&br[2]){var bn,bj,bi=k.filter[bo],bs=br[1];
bq=false;
br.splice(1,1);

if(bs.substr(bs.length-1)==="\\"){continue;
}
if(bg===bk){bk=[];
}
if(k.preFilter[bo]){br=k.preFilter[bo](br,bg,bd,bk,be,bh);

if(!br){bq=bn=true;
}else if(br===true){continue;
}}
if(br){for(var i=0;(bj=bg[i])!=null;i++){if(bj){bn=bi(bj,br,i,bg);
var bm=be^!!bn;

if(bd&&bn!=null){if(bm){bq=true;
}else{bg[i]=false;
}}else if(bm){bk.push(bj);
bq=true;
}}}}
if(bn!==undefined){if(!bd){bg=bk;
}bb=bb.replace(k.match[bo],"");

if(!bq){return [];
}break;
}}}if(bb===bf){if(bq==null){g.error(bb);
}else{break;
}}bf=bb;
}return bg;
};
g.error=function(bt){throw "Syntax error, unrecognized expression: "+bt;
};
var k=g.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bu){return bu.getAttribute("href");
}},relative:{"+":function(bv,bw){var bx=typeof bw==="string",bz=bx&&!/\W/.test(bw),bA=bx&&!bz;

if(bz){bw=bw.toLowerCase();
}
for(var i=0,l=bv.length,by;i<l;i++){if((by=bv[i])){while((by=by.previousSibling)&&by.nodeType!==1){}bv[i]=bA||by&&by.nodeName.toLowerCase()===bw?by||false:by===bw;
}}
if(bA){g.filter(bw,bv,true);
}},">":function(bB,bC){var bE,bD=typeof bC==="string",i=0,l=bB.length;

if(bD&&!/\W/.test(bC)){bC=bC.toLowerCase();

for(;i<l;i++){bE=bB[i];

if(bE){var parent=bE.parentNode;
bB[i]=parent.nodeName.toLowerCase()===bC?parent:false;
}}}else{for(;i<l;i++){bE=bB[i];

if(bE){bB[i]=bD?bE.parentNode:bE.parentNode===bC;
}}
if(bD){g.filter(bC,bB,true);
}}},"":function(bF,bG,bH){var bK,bI=v++,bJ=w;

if(typeof bG==="string"&&!/\W/.test(bG)){bG=bG.toLowerCase();
bK=bG;
bJ=y;
}bJ("parentNode",bG,bI,bF,bK,bH);
},"~":function(bL,bM,bN){var bQ,bO=v++,bP=w;

if(typeof bM==="string"&&!/\W/.test(bM)){bM=bM.toLowerCase();
bQ=bM;
bP=y;
}bP("previousSibling",bM,bO,bL,bQ,bN);
}},find:{ID:function(bR,bS,bT){if(typeof bS.getElementById!=="undefined"&&!bT){var m=bS.getElementById(bR[1]);
return m&&m.parentNode?[m]:[];
}},NAME:function(bU,bV){if(typeof bV.getElementsByName!=="undefined"){var bX=[],bW=bV.getElementsByName(bU[1]);

for(var i=0,l=bW.length;i<l;i++){if(bW[i].getAttribute("name")===bU[1]){bX.push(bW[i]);
}}return bX.length===0?null:bX;
}},TAG:function(bY,ca){return ca.getElementsByTagName(bY[1]);
}},preFilter:{CLASS:function(cb,cc,cd,ce,cf,cg){cb=" "+cb[1].replace(/\\/g,"")+" ";

if(cg){return cb;
}
for(var i=0,ch;(ch=cc[i])!=null;i++){if(ch){if(cf^(ch.className&&(" "+ch.className+" ").replace(/[\t\n]/g," ").indexOf(cb)>=0)){if(!cd){ce.push(ch);
}}else if(cd){cc[i]=false;
}}}return false;
},ID:function(ci){return ci[1].replace(/\\/g,"");
},TAG:function(cj,ck){return cj[1].toLowerCase();
},CHILD:function(cl){if(cl[1]==="nth"){var cm=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(cl[2]==="even"&&"2n"||cl[2]==="odd"&&"2n+1"||!/\D/.test(cl[2])&&"0n+"+cl[2]||cl[2]);
cl[2]=(cm[1]+(cm[2]||1))-0;
cl[3]=cm[3]-0;
}cl[0]=v++;
return cl;
},ATTR:function(cn,co,cp,cq,cr,cs){var name=cn[1].replace(/\\/g,"");

if(!cs&&k.attrMap[name]){cn[1]=k.attrMap[name];
}
if(cn[2]==="~="){cn[4]=" "+cn[4]+" ";
}return cn;
},PSEUDO:function(ct,cu,cv,cw,cx){if(ct[1]==="not"){if((o.exec(ct[3])||"").length>1||/^\w/.test(ct[3])){ct[3]=g(ct[3],null,null,cu);
}else{var cy=g.filter(ct[3],cu,cv,true^cx);

if(!cv){cw.push.apply(cw,cy);
}return false;
}}else if(k.match.POS.test(ct[0])||k.match.CHILD.test(ct[0])){return true;
}return ct;
},POS:function(cz){cz.unshift(true);
return cz;
}},filters:{enabled:function(cA){return cA.disabled===false&&cA.type!=="hidden";
},disabled:function(cB){return cB.disabled===true;
},checked:function(cC){return cC.checked===true;
},selected:function(cD){cD.parentNode.selectedIndex;
return cD.selected===true;
},parent:function(cE){return !!cE.firstChild;
},empty:function(cF){return !cF.firstChild;
},has:function(cG,i,cH){return !!g(cH[3],cG).length;
},header:function(cI){return (/h\d/i).test(cI.nodeName);
},text:function(cJ){return "text"===cJ.type;
},radio:function(cK){return "radio"===cK.type;
},checkbox:function(cL){return "checkbox"===cL.type;
},file:function(cM){return "file"===cM.type;
},password:function(cN){return "password"===cN.type;
},submit:function(cO){return "submit"===cO.type;
},image:function(cP){return "image"===cP.type;
},reset:function(cQ){return "reset"===cQ.type;
},button:function(cR){return "button"===cR.type||cR.nodeName.toLowerCase()==="button";
},input:function(cS){return (/input|select|textarea|button/i).test(cS.nodeName);
}},setFilters:{first:function(cT,i){return i===0;
},last:function(cU,i,cV,cW){return i===cW.length-1;
},even:function(cX,i){return i%2===0;
},odd:function(cY,i){return i%2===1;
},lt:function(da,i,db){return i<db[3]-0;
},gt:function(dc,i,dd){return i>dd[3]-0;
},nth:function(de,i,df){return df[3]-0===i;
},eq:function(dg,i,dh){return dh[3]-0===i;
}},filter:{PSEUDO:function(di,dj,i,dk){var name=dj[1],dl=k.filters[name];

if(dl){return dl(di,i,dj,dk);
}else if(name==="contains"){return (di.textContent||di.innerText||g.getText([di])||"").indexOf(dj[3])>=0;
}else if(name==="not"){var dm=dj[3];

for(var j=0,l=dm.length;j<l;j++){if(dm[j]===di){return false;
}}return true;
}else{g.error("Syntax error, unrecognized expression: "+name);
}},CHILD:function(dn,dp){var dv=dp[1],dq=dn;

switch(dv){case "only":case "first":while((dq=dq.previousSibling)){if(dq.nodeType===1){return false;
}}
if(dv==="first"){return true;
}dq=dn;
case "last":while((dq=dq.nextSibling)){if(dq.nodeType===1){return false;
}}return true;
case "nth":var dw=dp[2],ds=dp[3];

if(dw===1&&ds===0){return true;
}var du=dp[0],parent=dn.parentNode;

if(parent&&(parent.sizcache!==du||!dn.nodeIndex)){var dr=0;

for(dq=parent.firstChild;dq;dq=dq.nextSibling){if(dq.nodeType===1){dq.nodeIndex=++dr;
}}parent.sizcache=du;
}var dt=dn.nodeIndex-ds;

if(dw===0){return dt===0;
}else{return (dt%dw===0&&dt/dw>=0);
}}},ID:function(dx,dy){return dx.nodeType===1&&dx.getAttribute("id")===dy;
},TAG:function(dz,dA){return (dA==="*"&&dz.nodeType===1)||dz.nodeName.toLowerCase()===dA;
},CLASS:function(dB,dC){return (" "+(dB.className||dB.getAttribute("class"))+" ").indexOf(dC)>-1;
},ATTR:function(dD,dE){var name=dE[1],dI=k.attrHandle[name]?k.attrHandle[name](dD):dD[name]!=null?dD[name]:dD.getAttribute(name),dH=dI+"",dG=dE[2],dF=dE[4];
return dI==null?dG==="!=":dG==="="?dH===dF:dG==="*="?dH.indexOf(dF)>=0:dG==="~="?(" "+dH+" ").indexOf(dF)>=0:!dF?dH&&dI!==false:dG==="!="?dH!==dF:dG==="^="?dH.indexOf(dF)===0:dG==="$="?dH.substr(dH.length-dF.length)===dF:dG==="|="?dH===dF||dH.substr(0,dF.length+1)===dF+"-":false;
},POS:function(dJ,dK,i,dL){var name=dK[2],dM=k.setFilters[name];

if(dM){return dM(dJ,i,dK,dL);
}}}};
var q=k.match.POS,d=function(dN,dO){return "\\"+(dO-0+1);
};

for(var u in k.match){k.match[u]=new RegExp(k.match[u].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
k.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+k.match[u].source.replace(/\\(\d+)/g,d));
}var f=function(dP,dQ){dP=Array.prototype.slice.call(dP,0);

if(dQ){dQ.push.apply(dQ,dP);
return dQ;
}return dP;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){f=function(dR,dS){var i=0,dT=dS||[];

if(r.call(dR)==="[object Array]"){Array.prototype.push.apply(dT,dR);
}else{if(typeof dR.length==="number"){for(var l=dR.length;i<l;i++){dT.push(dR[i]);
}}else{for(;dR[i];i++){dT.push(dR[i]);
}}}return dT;
};
}var s,n;

if(document.documentElement.compareDocumentPosition){s=function(a,b){if(a===b){p=true;
return 0;
}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;
}return a.compareDocumentPosition(b)&4?-1:1;
};
}else{s=function(a,b){var dY,dW,ea=[],eb=[],dV=a.parentNode,dX=b.parentNode,dU=dV;
if(a===b){p=true;
return 0;
}else if(dV===dX){return n(a,b);
}else if(!dV){return -1;
}else if(!dX){return 1;
}while(dU){ea.unshift(dU);
dU=dU.parentNode;
}dU=dX;

while(dU){eb.unshift(dU);
dU=dU.parentNode;
}dY=ea.length;
dW=eb.length;
for(var i=0;i<dY&&i<dW;i++){if(ea[i]!==eb[i]){return n(ea[i],eb[i]);
}}return i===dY?n(a,eb[i],-1):n(ea[i],b,1);
};
n=function(a,b,ec){if(a===b){return ec;
}var ed=a.nextSibling;

while(ed){if(ed===b){return -1;
}ed=ed.nextSibling;
}return 1;
};
}g.getText=function(ee){var eg="",ef;

for(var i=0;ee[i];i++){ef=ee[i];
if(ef.nodeType===3||ef.nodeType===4){eg+=ef.nodeValue;
}else if(ef.nodeType!==8){eg+=g.getText(ef.childNodes);
}}return eg;
};
(function(){var ej=document.createElement("div"),ei="script"+(new Date()).getTime(),eh=document.documentElement;
ej.innerHTML="<a name='"+ei+"'/>";
eh.insertBefore(ej,eh.firstChild);
if(document.getElementById(ei)){k.find.ID=function(ek,el,em){if(typeof el.getElementById!=="undefined"&&!em){var m=el.getElementById(ek[1]);
return m?m.id===ek[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===ek[1]?[m]:undefined:[];
}};
k.filter.ID=function(en,eo){var ep=typeof en.getAttributeNode!=="undefined"&&en.getAttributeNode("id");
return en.nodeType===1&&ep&&ep.nodeValue===eo;
};
}eh.removeChild(ej);
eh=ej=null;
})();
(function(){var eq=document.createElement("div");
eq.appendChild(document.createComment(""));
if(eq.getElementsByTagName("*").length>0){k.find.TAG=function(er,es){var eu=es.getElementsByTagName(er[1]);
if(er[1]==="*"){var et=[];

for(var i=0;eu[i];i++){if(eu[i].nodeType===1){et.push(eu[i]);
}}eu=et;
}return eu;
};
}eq.innerHTML="<a href='#'></a>";

if(eq.firstChild&&typeof eq.firstChild.getAttribute!=="undefined"&&eq.firstChild.getAttribute("href")!=="#"){k.attrHandle.href=function(ev){return ev.getAttribute("href",2);
};
}eq=null;
})();

if(document.querySelectorAll){(function(){var ex=g,ew=document.createElement("div"),ey="__sizzle__";
ew.innerHTML="<p class='TEST'></p>";
if(ew.querySelectorAll&&ew.querySelectorAll(".TEST").length===0){return;
}g=function(eA,eB,eC,eD){eB=eB||document;
eA=eA.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!eD&&!g.isXML(eB)){if(eB.nodeType===9){try{return f(eB.querySelectorAll(eA),eC);
}catch(eG){}}else if(eB.nodeType===1&&eB.nodeName.toLowerCase()!=="object"){var eE=eB.getAttribute("id"),eF=eE||ey;

if(!eE){eB.setAttribute("id",eF);
}
try{return f(eB.querySelectorAll("#"+eF+" "+eA),eC);
}catch(eH){}finally{if(!eE){eB.removeAttribute("id");
}}}}return ex(eA,eB,eC,eD);
};

for(var ez in ex){g[ez]=ex[ez];
}ew=null;
})();
}(function(){var eK=document.documentElement,eI=eK.matchesSelector||eK.mozMatchesSelector||eK.webkitMatchesSelector||eK.msMatchesSelector,eJ=false;

try{eI.call(document.documentElement,"[test!='']:sizzle");
}catch(eL){eJ=true;
}
if(eI){g.matchesSelector=function(eM,eN){eN=eN.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");

if(!g.isXML(eM)){try{if(eJ||!k.match.PSEUDO.test(eN)&&!/!=/.test(eN)){return eI.call(eM,eN);
}}catch(e){}}return g(eN,null,null,[eM]).length>0;
};
}})();
(function(){var eO=document.createElement("div");
eO.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!eO.getElementsByClassName||eO.getElementsByClassName("e").length===0){return;
}eO.lastChild.className="e";

if(eO.getElementsByClassName("e").length===1){return;
}k.order.splice(1,0,"CLASS");
k.find.CLASS=function(eP,eQ,eR){if(typeof eQ.getElementsByClassName!=="undefined"&&!eR){return eQ.getElementsByClassName(eP[1]);
}};
eO=null;
})();
function y(eS,eT,eU,eV,eW,eX){for(var i=0,l=eV.length;i<l;i++){var fa=eV[i];

if(fa){var eY=false;
fa=fa[eS];

while(fa){if(fa.sizcache===eU){eY=eV[fa.sizset];
break;
}
if(fa.nodeType===1&&!eX){fa.sizcache=eU;
fa.sizset=i;
}
if(fa.nodeName.toLowerCase()===eT){eY=fa;
break;
}fa=fa[eS];
}eV[i]=eY;
}}}function w(fb,fc,fd,fe,ff,fg){for(var i=0,l=fe.length;i<l;i++){var fi=fe[i];

if(fi){var fh=false;
fi=fi[fb];

while(fi){if(fi.sizcache===fd){fh=fe[fi.sizset];
break;
}
if(fi.nodeType===1){if(!fg){fi.sizcache=fd;
fi.sizset=i;
}
if(typeof fc!=="string"){if(fi===fc){fh=true;
break;
}}else if(g.filter(fc,[fi]).length>0){fh=fi;
break;
}}fi=fi[fb];
}fe[i]=fh;
}}}
if(document.documentElement.contains){g.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
}else if(document.documentElement.compareDocumentPosition){g.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16);
};
}else{g.contains=function(){return false;
};
}g.isXML=function(fj){var fk=(fj?fj.ownerDocument||fj:0).documentElement;
return fk?fk.nodeName!=="HTML":false;
};
var h=function(fl,fm){var fq,fo=[],fn="",fp=fm.nodeType?[fm]:fm;
while((fq=k.match.PSEUDO.exec(fl))){fn+=fq[0];
fl=fl.replace(k.match.PSEUDO,"");
}fl=k.relative[fl]?fl+"*":fl;

for(var i=0,l=fp.length;i<l;i++){g(fl,fp[i],fo);
}return g.filter(fn,fo);
};
var t=qx.bom.Selector;
t.query=function(fr,fs){return g(fr,fs);
};
t.matches=function(ft,fu){return g(ft,null,null,fu);
};
})();
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(s){if(s.nodeType===9){return s.documentElement.nodeName!==d;
}else if(s.ownerDocument){return this.isXmlDocument(s.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(t,u){var v=new ActiveXObject(this.DOMDOC);
v.setProperty(n,b);

if(u){var w=h;
w+=u;

if(t){w+=f+t+o;
}w+=k;
v.loadXML(w);
}return v;
},"default":function(x,y){return document.implementation.createDocument(x||q,y||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(z){var A=qx.xml.Document.create();
A.loadXML(z);
return A;
},"default":function(B){var C=new DOMParser();
return C.parseFromString(B,e);
}})},defer:function(D){if(qx.core.Variant.isSet(r,p)){var E=[a,j];
var F=[c,g];

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
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
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
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===J){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__iQ:{},remove:function(c){delete this.__iQ[c.$$hash];
},add:function(d){var e=this.__iQ;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__iQ;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__iQ={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__iC:{},__iD:{},remove:function(c){var d=c.$$hash;
delete this.__iD[d];
delete this.__iC[d];
},isVisible:function(e){return this.__iD[e.$$hash]||false;
},__iE:function(f){var h=this.__iD;
var g=f.$$hash;
var i;
if(f.isExcluded()){i=false;
}else{var parent=f.$$parent;

if(parent){i=this.__iE(parent);
}else{i=f.isRootWidget();
}}return h[g]=i;
},add:function(j){var k=this.__iC;

if(k[j.$$hash]){return;
}k[j.$$hash]=j;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var l=this.__iC;
var p=this.__iD;
for(var m in l){if(p[m]!=null){l[m].addChildrenToQueue(l);
}}var o={};

for(var m in l){o[m]=p[m];
p[m]=null;
}for(var m in l){var n=l[m];
delete l[m];
if(p[m]==null){this.__iE(n);
}if(p[m]&&p[m]!=o[m]){n.checkAppearanceNeeds();
}}this.__iC={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__hL:{},remove:function(c){delete this.__hL[c.$$hash];
},add:function(d){var e=this.__hL;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(f){return !!this.__hL[f.$$hash];
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__hL;
var i;

for(var h in g){i=g[h];
delete g[h];
if(j.isVisible(i)){i.syncAppearance();
}else{i.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__eX:{},add:function(c){var d=this.__eX;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__eX;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__eX={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(d,e){var f={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){f.pointerEvents=c;
}qx.html.Element.call(this,null,f);
this.__ks=d;
this.__kt=e||d.toHashCode();
this.useMarkup(d.getMarkup());
},members:{__kt:null,__ks:null,getId:function(){return this.__kt;
},getDecorator:function(){return this.__ks;
},resize:function(g,h){this.__ks.resize(this.getDomElement(),g,h);
},tint:function(i){this.__ks.tint(this.getDomElement(),i);
},getInsets:function(){return this.__ks.getInsets();
}},destruct:function(){this.__ks=null;
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__em=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__em:null,__en:{focusin:1,focusout:1,focus:1,blur:1},__eo:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(o&&q&&j.getType()==a){o.getContainerElement().activate();
}if(this.__en[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__en[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__en[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!u||!(u.isEnabled()||this.__eo[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__em.getListeners(u,v,k);

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
}}},destruct:function(){this.__em=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var i="",h="/",g="mshtml",f="qx.client",e="//",d="?",c="string",b="qx.util.ResourceManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__co:qx.$$resources||{},__cp:{}},members:{has:function(j){return !!this.self(arguments).__co[j];
},getData:function(k){return this.self(arguments).__co[k]||null;
},getImageWidth:function(l){var m=this.self(arguments).__co[l];
return m?m[0]:null;
},getImageHeight:function(n){var o=this.self(arguments).__co[n];
return o?o[1]:null;
},getImageFormat:function(p){var q=this.self(arguments).__co[p];
return q?q[2]:null;
},isClippedImage:function(r){var s=this.self(arguments).__co[r];
return s&&s.length>4;
},toUri:function(t){if(t==null){return t;
}var u=this.self(arguments).__co[t];

if(!u){return t;
}
if(typeof u===c){var w=u;
}else{var w=u[3];
if(!w){return t;
}}var v=i;

if(qx.core.Variant.isSet(f,g)&&qx.bom.client.Feature.SSL){v=this.self(arguments).__cp[w];
}return v+qx.$$libraries[w].resourceUri+h+t;
}},defer:function(x){if(qx.core.Variant.isSet(f,g)){if(qx.bom.client.Feature.SSL){for(var B in qx.$$libraries){var z;

if(qx.$$libraries[B].resourceUri){z=qx.$$libraries[B].resourceUri;
}else{x.__cp[B]=i;
continue;
}if(z.match(/^\/\//)!=null){x.__cp[B]=window.location.protocol;
}else if(z.match(/^\//)!=null){x.__cp[B]=window.location.protocol+e+window.location.host;
}else if(z.match(/^\.\//)!=null){var y=document.URL;
x.__cp[B]=y.substring(0,y.lastIndexOf(h)+1);
}else if(z.match(/^http/)!=null){x.__cp[B]=i;
}else{var C=window.location.href.indexOf(d);
var A;

if(C==-1){A=window.location.href;
}else{A=window.location.href.substring(0,C);
}x.__cp[B]=A.substring(0,A.lastIndexOf(h)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__lD:function(){var d=(navigator.userLanguage||navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__lD();
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__mc=u;
this.length=u.length;
},members:{$$isString:true,length:0,__mc:null,toString:function(){return this.__mc;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(v,w){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){{};
var z=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
y.valueOf=y.toString;

if(new x(t).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__ep=c;
this.__eq=d;
},members:{__ep:null,__eq:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__ep,this.__eq);
}}});
})();
(function(){var k="_",j="",h="_applyLocale",g="changeLocale",f="C",e="qx.dynlocale",d="on",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jf=qx.$$translations||{};
this.__jg=qx.$$locales||{};
var n=qx.bom.client.Locale;
var l=n.LOCALE;
var m=n.VARIANT;

if(m!==j){l+=k+m;
}this.__jh=l;
this.setLocale(l||this.__ji);
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
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__ji:f,__jj:null,__jk:null,__jf:null,__jg:null,__jh:null,getLanguage:function(){return this.__jk;
},getTerritory:function(){return this.getLocale().split(k)[1]||j;
},getAvailableLocales:function(){var C=[];

for(var B in this.__jg){if(B!=this.__ji){C.push(B);
}}return C;
},__jl:function(D){var F;
var E=D.indexOf(k);

if(E==-1){F=D;
}else{F=D.substring(0,E);
}return F;
},_applyLocale:function(G,H){{};
this.__jj=G;
this.__jk=this.__jl(G);
},addTranslation:function(I,J){var K=this.__jf;

if(K[I]){for(var L in J){K[I][L]=J[L];
}}else{K[I]=J;
}},addLocale:function(M,N){var O=this.__jg;

if(O[M]){for(var P in N){O[M][P]=N[P];
}}else{O[M]=N;
}},translate:function(Q,R,S){var T=this.__jf;
return this.__jm(T,Q,R,S);
},localize:function(U,V,W){var X=this.__jg;
return this.__jm(X,U,V,W);
},__jm:function(Y,ba,bb,bc){var bd;

if(!Y){return ba;
}
if(bc){var bf=this.__jl(bc);
}else{bc=this.__jj;
bf=this.__jk;
}if(!bd&&Y[bc]){bd=Y[bc][ba];
}if(!bd&&Y[bf]){bd=Y[bf][ba];
}if(!bd&&Y[this.__ji]){bd=Y[this.__ji][ba];
}
if(!bd){bd=ba;
}
if(bb.length>0){var be=[];

for(var i=0;i<bb.length;i++){var bg=bb[i];

if(bg&&bg.translate){be[i]=bg.translate();
}else{be[i]=bg;
}}bd=qx.lang.String.format(bd,be);
}
if(qx.core.Variant.isSet(e,d)){bd=new qx.locale.LocalizedString(bd,ba,bb);
}return bd;
}},destruct:function(){this.__jf=this.__jg=null;
}});
})();
(function(){var k="px",j="qx.client",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="scale-y",G="qx/icon",F="repeat",E=".png",D="crop",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',y="qx.bom.element.Decoration",x="', sizingMethod='",r="png",s="')",p='"></div>',q='"/>',n='" style="',o="none",l="webkit",m=" ",t="repeat-x",u="DXImageTransform.Microsoft.AlphaImageLoader",w="qx/static/blank.gif",v="absolute";
qx.Class.define(y,{statics:{DEBUG:false,__hx:{},__hy:qx.core.Variant.isSet(j,c)&&qx.bom.client.Engine.VERSION<9,__hz:qx.core.Variant.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hA:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(H,I,J,K){var M=this.getTagName(J,I);

if(M!=H.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var N=this.getAttributes(I,J,K);

if(M===h){H.src=N.src||qx.util.ResourceManager.getInstance().toUri(w);
}if(H.style.backgroundPosition!=g&&N.style.backgroundPosition===undefined){N.style.backgroundPosition=null;
}if(H.style.clip!=g&&N.style.clip===undefined){N.style.clip=null;
}var L=qx.bom.element.Style;
L.setStyles(H,N.style);
if(this.__hy){try{H.filters[u].apply();
}catch(e){}}},create:function(O,P,Q){var R=this.getTagName(P,O);
var T=this.getAttributes(O,P,Q);
var S=qx.bom.element.Style.compile(T.style);

if(R===h){return z+T.src+n+S+q;
}else{return B+S+p;
}},getTagName:function(U,V){if(qx.core.Variant.isSet(j,c)){if(V&&this.__hy&&this.__hz[U]&&qx.lang.String.endsWith(V,E)){return i;
}}return this.__hA[U];
},getAttributes:function(W,X,Y){if(!Y){Y={};
}
if(!Y.position){Y.position=v;
}
if(qx.core.Variant.isSet(j,c)){Y.fontSize=0;
Y.lineHeight=0;
}else if(qx.core.Variant.isSet(j,l)){Y.WebkitUserDrag=o;
}var bb=qx.util.ResourceManager.getInstance().getImageFormat(W)||qx.io.ImageLoader.getFormat(W);
{};
var ba;
if(this.__hy&&this.__hz[X]&&bb===r){ba=this.__hD(Y,X,W);
}else{if(X===b){ba=this.__hE(Y,X,W);
}else if(X===d||X===a){ba=this.__hF(Y,X,W);
}else{ba=this.__hI(Y,X,W);
}}return ba;
},__hB:function(bc,bd,be){if(bc.width==null&&bd!=null){bc.width=bd+k;
}
if(bc.height==null&&be!=null){bc.height=be+k;
}return bc;
},__hC:function(bf){var bh=qx.util.ResourceManager.getInstance().getImageWidth(bf)||qx.io.ImageLoader.getWidth(bf);
var bi=qx.util.ResourceManager.getInstance().getImageHeight(bf)||qx.io.ImageLoader.getHeight(bf);
return {width:bh,height:bi};
},__hD:function(bj,bk,bl){var bo=this.__hC(bl);
bj=this.__hB(bj,bo.width,bo.height);
var bn=bk==f?D:b;
var bm=C+qx.util.ResourceManager.getInstance().toUri(bl)+x+bn+s;
bj.filter=bm;
bj.backgroundImage=bj.backgroundRepeat=g;
return {style:bj};
},__hE:function(bp,bq,br){var bs=qx.util.ResourceManager.getInstance().toUri(br);
var bt=this.__hC(br);
bp=this.__hB(bp,bt.width,bt.height);
return {src:bs,style:bp};
},__hF:function(bu,bv,bw){var bA=qx.util.ResourceManager.getInstance();
var bz=bA.isClippedImage(bw);
var bB=this.__hC(bw);

if(bz){var by=bA.getData(bw);
var bx=bA.toUri(by[4]);

if(bv===d){bu=this.__hG(bu,by,bB.height);
}else{bu=this.__hH(bu,by,bB.width);
}return {src:bx,style:bu};
}else{{};

if(bv==d){bu.height=bB.height==null?null:bB.height+k;
}else if(bv==a){bu.width=bB.width==null?null:bB.width+k;
}var bx=bA.toUri(bw);
return {src:bx,style:bu};
}},__hG:function(bC,bD,bE){var bF=qx.util.ResourceManager.getInstance().getImageHeight(bD[4]);
bC.clip={top:-bD[6],height:bE};
bC.height=bF+k;
if(bC.top!=null){bC.top=(parseInt(bC.top,10)+bD[6])+k;
}else if(bC.bottom!=null){bC.bottom=(parseInt(bC.bottom,10)+bE-bF-bD[6])+k;
}return bC;
},__hH:function(bG,bH,bI){var bJ=qx.util.ResourceManager.getInstance().getImageWidth(bH[4]);
bG.clip={left:-bH[5],width:bI};
bG.width=bJ+k;
if(bG.left!=null){bG.left=(parseInt(bG.left,10)+bH[5])+k;
}else if(bG.right!=null){bG.right=(parseInt(bG.right,10)+bI-bJ-bH[5])+k;
}return bG;
},__hI:function(bK,bL,bM){var bR=qx.util.ResourceManager.getInstance().isClippedImage(bM);
var bQ=this.__hC(bM);
if(bR&&bL!==F){var bP=qx.util.ResourceManager.getInstance().getData(bM);
var bO=qx.bom.element.Background.getStyles(bP[4],bL,bP[5],bP[6]);

for(var bN in bO){bK[bN]=bO[bN];
}
if(bQ.width!=null&&bK.width==null&&(bL==A||bL===f)){bK.width=bQ.width+k;
}
if(bQ.height!=null&&bK.height==null&&(bL==t||bL===f)){bK.height=bQ.height+k;
}return {style:bK};
}else{{};
bK=this.__hB(bK,bQ.width,bQ.height);
bK=this.__hJ(bK,bM,bL);
return {style:bK};
}},__hJ:function(bS,bT,bU){var top=null;
var bY=null;

if(bS.backgroundPosition){var bV=bS.backgroundPosition.split(m);
bY=parseInt(bV[0],10);

if(isNaN(bY)){bY=bV[0];
}top=parseInt(bV[1],10);

if(isNaN(top)){top=bV[1];
}}var bX=qx.bom.element.Background.getStyles(bT,bU,bY,top);

for(var bW in bX){bS[bW]=bX[bW];
}if(bS.filter){bS.filter=g;
}return bS;
},__hK:function(ca){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ca)&&ca.indexOf(G)==-1){if(!this.__hx[ca]){qx.log.Logger.debug("Potential clipped image candidate: "+ca);
this.__hx[ca]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__hy;
},"default":function(){return false;
}})}});
})();
(function(){var c="qx.client",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__lo:{},__lp:{width:null,height:null},__lq:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__lo[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__lo[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__lo[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__lo[k];
return m?m.format:null;
},getSize:function(n){var o=this.__lo[n];
return o?
{width:o.width,height:o.height}:this.__lp;
},getWidth:function(p){var q=this.__lo[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__lo[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__lo[t];

if(!w){w=this.__lo[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__lr,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__lo[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__lo[z]=null;
},__lr:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__lo[E];
if(event.type===b){F.loaded=true;
F.width=this.__ls(D);
F.height=this.__lt(D);
var G=this.__lq.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__ls:qx.core.Variant.select(c,{"gecko":function(I){return I.naturalWidth;
},"default":function(J){return J.width;
}}),__lt:qx.core.Variant.select(c,{"gecko":function(K){return K.naturalHeight;
},"default":function(L){return L.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__da:[i,null,h,b,null,j,e,null,j],__db:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__dc:function(n,top){var o=qx.bom.client.Engine;

if(o.GECKO&&o.VERSION<1.9&&n==top&&typeof n==m){top+=0.01;
}
if(n){var p=(typeof n==m)?n+k:n;
}else{p=l;
}
if(top){var q=(typeof top==m)?top+k:top;
}else{q=l;
}return p+d+q;
},compile:function(r,s,t,top){var u=this.__dc(t,top);
var v=qx.util.ResourceManager.getInstance().toUri(r);
var w=this.__da;
w[1]=v;
w[4]=u;
w[7]=s;
return w.join(g);
},getStyles:function(x,y,z,top){if(!x){return this.__db;
}var A=this.__dc(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C={backgroundPosition:A,backgroundImage:c+B+f};

if(y!=null){C.backgroundRepeat=y;
}return C;
},set:function(D,E,F,G,top){var H=this.getStyles(E,F,G,top);

for(var I in H){D.style[I]=H[I];
}}}});
})();
(function(){var j="source",i="scale",h="no-repeat",g="qx.client",f="mshtml",e="webkit",d="backgroundImage",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,k){qx.html.Element.prototype._applyProperty.call(this,name,k);

if(name===j){var o=this.getDomElement();
var l=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(d)){l.backgroundPosition=null;
l.backgroundRepeat=null;
}var m=this._getProperty(j);
var n=this._getProperty(i);
var p=n?i:h;
if(m!=null){qx.bom.element.Decoration.update(o,m,p,l);
}}},_createDomElement:function(){var r=this._getProperty(i);
var s=r?i:h;

if(qx.core.Variant.isSet(g,f)){var q=this._getProperty(j);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(s,q));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(s));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(t){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(u){this._setProperty(j,u);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){if(qx.core.Variant.isSet(g,e)){this._setProperty(j,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(j,true);
}return this;
},setScale:function(v){this._setProperty(i,v);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="qx.client",e="div",d="replacement",c="qx.event.type.Event",b="hidden",a="Boolean",y="px",x="scale",w="changeSource",v="__fP",u="qx.ui.basic.Image",t="loaded",s="-disabled.$1",r="loadingFailed",q="String",p="_applySource",n="img",o="image",l="mshtml",m="_applyScale",k="no-repeat";
qx.Class.define(u,{extend:qx.ui.core.Widget,construct:function(z){this.__fP={};
qx.ui.core.Widget.call(this);

if(z){this.setSource(z);
}},properties:{source:{check:q,init:null,nullable:true,event:w,apply:p,themeable:true},scale:{check:a,init:false,themeable:true,apply:m},appearance:{refine:true,init:o},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:c,loaded:c},members:{__fQ:null,__fR:null,__fS:null,__fP:null,getContentElement:function(){return this.__fW();
},_createContentElement:function(){return this.__fW();
},_getContentHint:function(){return {width:this.__fQ||0,height:this.__fR||0};
},_applyEnabled:function(A,B){qx.ui.core.Widget.prototype._applyEnabled.call(this,A,B);

if(this.getSource()){this._styleSource();
}},_applySource:function(C){this._styleSource();
},_applyScale:function(D){this._styleSource();
},__fT:function(E){this.__fS=E;
},__fU:function(){if(this.__fS==null){var G=this.getSource();
var F=false;

if(G!=null){F=qx.lang.String.endsWith(G,g);
}
if(this.getScale()&&F&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__fS=h;
}else if(this.getScale()){this.__fS=i;
}else{this.__fS=j;
}}return this.__fS;
},__fV:function(H){var I;
var J;

if(H==h){I=true;
J=e;
}else if(H==j){I=false;
J=e;
}else{I=true;
J=n;
}var K=new qx.html.Image(J);
K.setScale(I);
K.setStyles({"overflowX":b,"overflowY":b});
return K;
},__fW:function(){var L=this.__fU();

if(this.__fP[L]==null){this.__fP[L]=this.__fV(L);
}return this.__fP[L];
},_styleSource:function(){var M=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!M){this.getContentElement().resetSource();
return;
}this.__fX(M);

if(qx.core.Variant.isSet(f,l)){var N=this.getScale()?x:k;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(N,M);
}if(qx.util.ResourceManager.getInstance().has(M)){this.__ga(this.getContentElement(),M);
}else if(qx.io.ImageLoader.isLoaded(M)){this.__gb(this.getContentElement(),M);
}else{this.__gc(this.getContentElement(),M);
}},__fX:qx.core.Variant.select(f,{"mshtml":function(O){var Q=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var P=qx.lang.String.endsWith(O,g);

if(Q&&P){if(this.getScale()&&this.__fU()!=h){this.__fT(h);
}else if(!this.getScale()&&this.__fU()!=j){this.__fT(j);
}}else{if(this.getScale()&&this.__fU()!=i){this.__fT(i);
}else if(!this.getScale()&&this.__fU()!=j){this.__fT(j);
}}this.__fY(this.__fW());
},"default":function(R){if(this.getScale()&&this.__fU()!=i){this.__fT(i);
}else if(!this.getScale()&&this.__fU(j)){this.__fT(j);
}this.__fY(this.__fW());
}}),__fY:function(S){var V=this.getContainerElement();
var W=V.getChild(0);

if(W!=S){if(W!=null){var Y=y;
var T={};
var U=this.getInnerSize();

if(U!=null){T.width=U.width+Y;
T.height=U.height+Y;
}var X=this.getInsets();
T.left=X.left+Y;
T.top=X.top+Y;
T.zIndex=10;
S.setStyles(T,true);
S.setSelectable(this.getSelectable());
}V.removeAt(0);
V.addAt(S,0);
}},__ga:function(ba,bb){var bd=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bc=bb.replace(/\.([a-z]+)$/,s);

if(bd.has(bc)){bb=bc;
this.addState(d);
}else{this.removeState(d);
}}if(ba.getSource()===bb){return;
}ba.setSource(bb);
this.__ge(bd.getImageWidth(bb),bd.getImageHeight(bb));
},__gb:function(be,bf){var bh=qx.io.ImageLoader;
be.setSource(bf);
var bg=bh.getWidth(bf);
var bi=bh.getHeight(bf);
this.__ge(bg,bi);
},__gc:function(bj,bk){var self;
var bl=qx.io.ImageLoader;
{};
if(!bl.isFailed(bk)){bl.load(bk,this.__gd,this);
}else{if(bj!=null){bj.resetSource();
}}},__gd:function(bm,bn){if(this.$$disposed===true){return;
}if(bm!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bn.failed){this.warn("Image could not be loaded: "+bm);
this.fireEvent(r);
}else{this.fireEvent(t);
}this._styleSource();
},__ge:function(bo,bp){if(bo!==this.__fQ||bp!==this.__fR){this.__fQ=bo;
this.__fR=bp;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(v);
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
(function(){var f="mousedown",d="__rz",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__rz=[];
qx.event.Registration.addListener(document.documentElement,f,this.__rB,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__rz:null,add:function(g){{};
this.__rz.push(g);
this.__rA();
},remove:function(h){{};

if(this.__rz){qx.lang.Array.remove(this.__rz,h);
this.__rA();
}},hideAll:function(){if(this.__rz){for(var i=0;i<this.__rz.length;i++){this.__rz[i].exclude();
}}},__rA:function(){var j=1e7;

for(var i=0;i<this.__rz.length;i++){this.__rz[i].setZIndex(j++);
}},__rB:function(e){var l=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var m=this.__rz;

for(var i=0;i<m.length;i++){var k=m[i];

if(!k.getAutoHide()||l==k||qx.ui.core.Widget.contains(k,l)){continue;
}k.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__rB,this,true);
this._disposeArray(d);
}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__gz:null,_invalidChildrenCache:null,__gA:null,invalidateLayoutCache:function(){this.__gz=null;
},renderLayout:function(c,d){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__gz){return this.__gz;
}return this.__gz=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var f=this.__gA;

if(f instanceof qx.ui.core.LayoutItem){f.clearSeparators();
}},_renderSeparator:function(g,h){this.__gA.renderSeparator(g,h);
},connectToWidget:function(i){if(i&&this.__gA){throw new Error("It is not possible to manually set the connected widget.");
}this.__gA=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__gA;
},_applyLayoutChange:function(){if(this.__gA){this.__gA.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__gA.getLayoutChildren();
}},destruct:function(){this.__gA=this.__gz=null;
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();
var f,h,e,d;
for(var i=0,l=g.length;i<l;i++){f=g[i];
h=f.getSizeHint();
e=b;

if(e<h.minWidth){e=h.minWidth;
}else if(e>h.maxWidth){e=h.maxWidth;
}d=c;

if(d<h.minHeight){d=h.minHeight;
}else if(d>h.maxHeight){d=h.maxHeight;
}f.renderLayout(0,0,e,d);
}},_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,s;
var r=0,p=0;
var n=0,k=0;
var j=Infinity,m=Infinity;
for(var i=0,l=q.length;i<l;i++){o=q[i];
s=o.getSizeHint();
r=Math.max(r,s.width);
p=Math.max(p,s.height);
n=Math.max(n,s.minWidth);
k=Math.max(k,s.minHeight);
j=Math.min(j,s.maxWidth);
m=Math.min(m,s.maxHeight);
}return {width:r,height:p,minWidth:n,minHeight:k,maxWidth:j,maxHeight:m};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="bottom-left",s="top-left",r="top",q="right",p="_applyRich",n="_applyIcon",o="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(z,A){{};
qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(z!=null){this.setLabel(z);
}
if(A!=null){this.setIcon(A);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:w},rich:{check:h,init:false,apply:p},icon:{check:f,apply:n,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:o,event:c},iconPosition:{init:e,check:[r,q,b,e,s,t],themeable:true,apply:u},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(B,C){var D;

switch(B){case j:D=new qx.ui.basic.Label(this.getLabel());
D.setAnonymous(true);
D.setRich(this.getRich());
this._add(D);

if(this.getLabel()==null||this.getShow()===i){D.exclude();
}break;
case i:D=new qx.ui.basic.Image(this.getIcon());
D.setAnonymous(true);
this._addAt(D,0);

if(this.getIcon()==null||this.getShow()===j){D.exclude();
}break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(E,F){var G=this.getChildControl(j,true);

if(G){G.setValue(E);
}this._handleLabel();
},_applyRich:function(H,I){var J=this.getChildControl(j,true);

if(J){J.setRich(H);
}},_applyIcon:function(K,L){var M=this.getChildControl(i,true);

if(M){M.setSource(K);
}this._handleIcon();
},_applyGap:function(N,O){this._getLayout().setGap(N);
},_applyShow:function(P,Q){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(R,S){this._getLayout().setIconPosition(R);
},_applyCenter:function(T,U){this._getLayout().setCenter(T);
}}});
})();
(function(){var m="bottom",l="top",k="_applyLayoutChange",j="top-left",h="bottom-left",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",a="Integer",b="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:k},iconPosition:{check:[g,l,f,m,j,h],init:g,apply:k},center:{check:b,init:false,apply:k}},members:{verifyLayoutProperty:null,renderLayout:function(n,o){var x=qx.ui.layout.Util;
var q=this.getIconPosition();
var t=this._getLayoutChildren();
var length=t.length;
var I,top,y,r;
var D,w;
var B=this.getGap();
var G=this.getCenter();
if(q===m||q===f){var z=length-1;
var u=-1;
var s=-1;
}else{var z=0;
var u=length;
var s=1;
}if(q==l||q==m){if(G){var C=0;

for(var i=z;i!=u;i+=s){r=t[i].getSizeHint().height;

if(r>0){C+=r;

if(i!=z){C+=B;
}}}top=Math.round((o-C)/2);
}else{top=0;
}
for(var i=z;i!=u;i+=s){D=t[i];
w=D.getSizeHint();
y=Math.min(w.maxWidth,Math.max(n,w.minWidth));
r=w.height;
I=x.computeHorizontalAlignOffset(d,y,n);
D.renderLayout(I,top,y,r);
if(r>0){top+=r+B;
}}}else{var v=n;
var p=null;
var F=0;

for(var i=z;i!=u;i+=s){D=t[i];
y=D.getSizeHint().width;

if(y>0){if(!p&&D instanceof qx.ui.basic.Label){p=D;
}else{v-=y;
}F++;
}}
if(F>1){var E=(F-1)*B;
v-=E;
}
if(p){var w=p.getSizeHint();
var A=Math.max(w.minWidth,Math.min(v,w.maxWidth));
v-=A;
}
if(G&&v>0){I=Math.round(v/2);
}else{I=0;
}
for(var i=z;i!=u;i+=s){D=t[i];
w=D.getSizeHint();
r=Math.min(w.maxHeight,Math.max(o,w.minHeight));

if(D===p){y=A;
}else{y=w.width;
}var H=e;

if(q==j){H=l;
}else if(q==h){H=m;
}top=x.computeVerticalAlignOffset(H,w.height,o);
D.renderLayout(I,top,y,r);
if(y>0){I+=y+B;
}}}},_computeSizeHint:function(){var T=this._getLayoutChildren();
var length=T.length;
var L,R;
if(length===1){var L=T[0].getSizeHint();
R={width:L.width,height:L.height,minWidth:L.minWidth,minHeight:L.minHeight};
}else{var P=0,Q=0;
var M=0,O=0;
var N=this.getIconPosition();
var S=this.getGap();

if(N===l||N===m){var J=0;

for(var i=0;i<length;i++){L=T[i].getSizeHint();
Q=Math.max(Q,L.width);
P=Math.max(P,L.minWidth);
if(L.height>0){O+=L.height;
M+=L.minHeight;
J++;
}}
if(J>1){var K=(J-1)*S;
O+=K;
M+=K;
}}else{var J=0;

for(var i=0;i<length;i++){L=T[i].getSizeHint();
O=Math.max(O,L.height);
M=Math.max(M,L.minHeight);
if(L.width>0){Q+=L.width;
P+=L.minWidth;
J++;
}}
if(J>1){var K=(J-1)*S;
Q+=K;
P+=K;
}}R={minWidth:P,width:Q,minHeight:M,height:O};
}return R;
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
(function(){var k="qx.dynlocale",j="Boolean",i="color",h="changeLocale",g="enabled",f="on",d="_applyTextAlign",c="qx.ui.core.Widget",b="nowrap",a="changeTextAlign",C="_applyWrap",B="A",A="changeContent",z="qx.ui.basic.Label",y="whiteSpace",x="_applyValue",w="center",v="_applyBuddy",u="String",t="textAlign",r="right",s="changeRich",p="normal",q="_applyRich",n="click",o="label",l="left",m="changeValue";
qx.Class.define(z,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(D){qx.ui.core.Widget.call(this);

if(D!=null){this.setValue(D);
}
if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().addListener(h,this._onChangeLocale,this);
}},properties:{rich:{check:j,init:false,event:s,apply:q},wrap:{check:j,init:true,apply:C},value:{check:u,apply:x,event:m,nullable:true},buddy:{check:c,apply:v,nullable:true,init:null,dereference:true},textAlign:{check:[l,w,r],nullable:true,themeable:true,apply:d,event:a},appearance:{refine:true,init:o},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__gI:null,__gJ:null,__gK:null,__gL:null,_getContentHint:function(){if(this.__gJ){this.__gM=this.__gN();
delete this.__gJ;
}return {width:this.__gM.width,height:this.__gM.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(E){if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){if(E&&!this.isRich()){{};
return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,E);
},_getContentHeightForWidth:function(F){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__gN(F).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(G,H){this.getContentElement().setStyle(t,G);
},_applyTextColor:function(I,J){if(I){this.getContentElement().setStyle(i,qx.theme.manager.Color.getInstance().resolve(I));
}else{this.getContentElement().removeStyle(i);
}},__gM:{width:0,height:0},_applyFont:function(K,L){var M;

if(K){this.__gI=qx.theme.manager.Font.getInstance().resolve(K);
M=this.__gI.getStyles();
}else{this.__gI=null;
M=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(M);
this.__gJ=true;
qx.ui.core.queue.Layout.add(this);
},__gN:function(N){var R=qx.bom.Label;
var P=this.getFont();
var O=P?this.__gI.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||B;
var Q=this.getRich();
return Q?R.getHtmlSize(content,O,N):R.getTextSize(content,O);
},_applyBuddy:function(S,T){if(T!=null){T.removeBinding(this.__gK);
this.__gK=null;
this.removeListenerById(this.__gL);
this.__gL=null;
}
if(S!=null){this.__gK=S.bind(g,this,g);
this.__gL=this.addListener(n,function(){if(S.isFocusable()){S.focus.apply(S);
}},this);
}},_applyRich:function(U){this.getContentElement().setRich(U);
this.__gJ=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(V,W){if(V&&!this.isRich()){{};
}
if(this.isRich()){var X=V?p:b;
this.getContentElement().setStyle(y,X);
}},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(Y,ba){this.getContentElement().setValue(Y);
this.__gJ=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(A,Y,ba);
}},destruct:function(){if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);
}if(this.__gK!=null){var bb=this.getBuddy();

if(bb!=null&&!bb.isDisposed()){bb.removeBinding(this.__gK);
}}this.__gI=this.__gK=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__dP:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__dP;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(g){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__dP==h){return;
}this.__dP=h;
return this;
},setValue:function(j){this._setProperty(b,j);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var j="div",i="inherit",h="text",g="qx.client",f="value",e="",d="hidden",c="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",b="nowrap",a="auto",z="0",y="ellipsis",x="normal",w="label",v="px",u="crop",t="gecko",s="end",r="100%",q="visible",o="qx.bom.Label",p="opera",m="mshtml",n="block",k="-1000px",l="absolute";
qx.Class.define(o,{statics:{__jn:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jo:function(){var A=this.__jq(false);
document.body.insertBefore(A,document.body.firstChild);
return this._textElement=A;
},__jp:function(){var B=this.__jq(true);
document.body.insertBefore(B,document.body.firstChild);
return this._htmlElement=B;
},__jq:function(C){var D=qx.bom.Element.create(j);
var E=D.style;
E.width=E.height=a;
E.left=E.top=k;
E.visibility=d;
E.position=l;
E.overflow=q;

if(C){E.whiteSpace=x;
}else{E.whiteSpace=b;

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var F=document.createElementNS(c,w);
var E=F.style;
E.padding=z;

for(var G in this.__jn){E[G]=i;
}D.appendChild(F);
}}return D;
},__jr:function(H){var I={};

if(H){I.whiteSpace=x;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){I.display=n;
}else{I.overflow=d;
I.whiteSpace=b;
I.textOverflow=y;
if(qx.core.Variant.isSet(g,p)){I.OTextOverflow=y;
}}return I;
},create:function(content,J,K){if(!K){K=window;
}
if(J){var L=K.document.createElement(j);
L.useHtml=true;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var L=K.document.createElement(j);
var N=K.document.createElementNS(c,w);
var M=N.style;
M.cursor=i;
M.color=i;
M.overflow=d;
M.maxWidth=r;
M.padding=z;
for(var O in this.__jn){N.style[O]=i;
}N.setAttribute(u,s);
L.appendChild(N);
}else{var L=K.document.createElement(j);
qx.bom.element.Style.setStyles(L,this.__jr(J));
}
if(content){this.setValue(L,content);
}return L;
},setValue:function(P,Q){Q=Q||e;

if(P.useHtml){P.innerHTML=Q;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){P.firstChild.setAttribute(f,Q);
}else{qx.bom.element.Attribute.set(P,h,Q);
}},getValue:function(R){if(R.useHtml){return R.innerHTML;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){return R.firstChild.getAttribute(f)||e;
}else{return qx.bom.element.Attribute.get(R,h);
}},getHtmlSize:function(content,S,T){var U=this._htmlElement||this.__jp();
U.style.width=T!==undefined?T+v:a;
U.innerHTML=content;
return this.__js(U,S);
},getTextSize:function(V,W){var X=this._textElement||this.__jo();

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){X.firstChild.setAttribute(f,V);
}else{qx.bom.element.Attribute.set(X,h,V);
}return this.__js(X,W);
},__js:function(Y,ba){var bb=this.__jn;

if(!ba){ba={};
}
for(var bc in bb){Y.style[bc]=ba[bc]||e;
}var bd=qx.bom.element.Dimension.getSize(Y);

if(qx.core.Variant.isSet(g,t)){if(!qx.bom.client.Platform.WIN){bd.width++;
}}if(qx.core.Variant.isSet(g,m)&&qx.bom.client.Engine.VERSION>=9){bd.width++;
}return bd;
}}});
})();
(function(){var i="0px",h="qx.client",g="mshtml",f="qx.bom.element.Dimension",e="paddingRight",d="paddingLeft",c="opera",b="paddingTop",a="paddingBottom";
qx.Class.define(f,{statics:{getWidth:qx.core.Variant.select(h,{"gecko":function(j){if(j.getBoundingClientRect){var k=j.getBoundingClientRect();
return Math.round(k.right)-Math.round(k.left);
}else{return j.offsetWidth;
}},"default":function(l){return l.offsetWidth;
}}),getHeight:qx.core.Variant.select(h,{"gecko":function(m){if(m.getBoundingClientRect){var n=m.getBoundingClientRect();
return Math.round(n.bottom)-Math.round(n.top);
}else{return m.offsetHeight;
}},"default":function(o){return o.offsetHeight;
}}),getSize:function(p){return {width:this.getWidth(p),height:this.getHeight(p)};
},__ip:{visible:true,hidden:true},getContentWidth:function(q){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(q);
var u=parseInt(s.get(q,d)||i,10);
var x=parseInt(s.get(q,e)||i,10);

if(this.__ip[t]){var w=q.clientWidth;

if(qx.core.Variant.isSet(h,c)){w=w-u-x;
}else{if(qx.dom.Node.isBlockNode(q)){w=w-u-x;
}}return w;
}else{if(q.clientWidth>=q.scrollWidth){return Math.max(q.clientWidth,q.scrollWidth)-u-x;
}else{var v=q.scrollWidth-u;
var r=qx.bom.client.Engine;

if(r.NAME===g&&r.VERSION==6){v-=x;
}return v;
}}},getContentHeight:function(y){var A=qx.bom.element.Style;
var C=qx.bom.element.Overflow.getY(y);
var D=parseInt(A.get(y,b)||i,10);
var B=parseInt(A.get(y,a)||i,10);

if(this.__ip[C]){return y.clientHeight-D-B;
}else{if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-D-B;
}else{var E=y.scrollHeight-D;
var z=qx.bom.client.Engine;

if(z.NAME===g&&z.VERSION==6){E-=B;
}return E;
}}},getContentSize:function(F){return {width:this.getContentWidth(F),height:this.getContentHeight(F)};
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
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__og",b="__of",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__of:null,__og:null,getWindowManager:function(){if(!this.__og){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__og;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__og){this.__og.setDesktop(null);
}j.setDesktop(this);
this.__og=j;
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
},getWindows:function(){if(!this.__of){this.__of=[];
}return this.__of;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__rQ",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__rQ=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__rQ:null,_applyBlockerColor:function(g,h){this.__rQ.setColor(g);
},_applyBlockerOpacity:function(i,j){this.__rQ.setOpacity(i);
},block:function(){this.__rQ.block();
},isBlocked:function(){return this.__rQ.isBlocked();
},unblock:function(){this.__rQ.unblock();
},forceUnblock:function(){this.__rQ.forceUnblock();
},blockContent:function(k){this.__rQ.blockContent(k);
},isContentBlocked:function(){return this.__rQ.isContentBlocked();
},unblockContent:function(){this.__rQ.unblockContent();
},forceUnblockContent:function(){this.__rQ.forceUnblockContent();
},getBlocker:function(){return this.__rQ;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__mS:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(q,r){},"default":function(s,t){var u=qx.bom.Stylesheet;
var v=this.__mS;

if(!v){this.__mS=v=u.createElement();
}u.removeAllRules(v);

if(s){u.addRule(v,a,qx.bom.element.Cursor.compile(s).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(w,x){if(w){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(y,z){if(z===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(y===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__mS=null;
},defer:function(A,B){qx.ui.core.MChildrenHandling.remap(B);
}});
})();
(function(){var n="resize",m="position",l="0px",k="webkit",j="paddingLeft",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(o){this.__pj=qx.dom.Node.getWindow(o);
this.__pk=o;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__pj,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__pj:null,__pk:null,_createContainerElement:function(){var p=this.__pk;
if(qx.core.Variant.isSet(f,k)){if(!p.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var t=p.documentElement.style;
var q=p.body.style;
t.overflow=q.overflow=g;
t.padding=t.margin=q.padding=q.margin=l;
t.width=t.height=q.width=q.height=c;
var s=p.createElement(d);
p.body.appendChild(s);
var r=new qx.html.Root(s);
r.setStyle(m,b);
r.setAttribute(i,this.toHashCode());
return r;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var u=qx.bom.Viewport.getWidth(this.__pj);
var v=qx.bom.Viewport.getHeight(this.__pj);
return {minWidth:u,width:u,maxWidth:u,minHeight:v,height:v,maxHeight:v};
},_applyPadding:function(w,x,name){if(w&&(name==a||name==j)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,w,x,name);
},_applyDecorator:function(y,z){qx.ui.root.Abstract.prototype._applyDecorator.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__pj=this.__pk=null;
}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="resize",f="keyup",d="keypress",c="backgroundColor",b="_applyOpacity",a="Boolean",x="__sg",w="__se",v="opacity",u="interval",t="Tab",s="Color",r="qx.ui.root.Page",q="Number",p="qx.ui.core.Blocker",o="__sc",m="qx.ui.root.Application",n="_applyColor";
qx.Class.define(p,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(r)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(g,this.__sh,this);
}
if(qx.Class.isDefined(m)&&y instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__rY=[];
this.__sa=[];
this.__sb=[];
},properties:{color:{check:s,init:null,nullable:true,apply:n,themeable:true},opacity:{check:q,init:1,apply:b,themeable:true},keepBlockerActive:{check:a,init:false}},members:{__sc:null,__sd:0,__se:null,__sb:null,__rY:null,__sa:null,__sf:null,__sg:null,_isPageRoot:false,_widget:null,__sh:function(e){var z=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:z.width,height:z.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:z.width,height:z.height});
}},_applyColor:function(A,B){var C=qx.theme.manager.Color.getInstance().resolve(A);
this.__si(c,C);
},_applyOpacity:function(D,E){this.__si(v,D);
},__si:function(F,G){var H=[];
this.__sc&&H.push(this.__sc);
this.__se&&H.push(this.__se);

for(var i=0;i<H.length;i++){H[i].setStyle(F,G);
}},_backupActiveWidget:function(){var I=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__rY.push(I.getActive());
this.__sa.push(I.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var L=this.__rY.length;

if(L>0){var K=this.__rY[L-1];

if(K){qx.bom.Element.activate(K);
}this.__rY.pop();
}var J=this.__sa.length;

if(J>0){var K=this.__sa[J-1];

if(K){qx.bom.Element.focus(this.__sa[J-1]);
}this.__sa.pop();
}},__sj:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__sc){this.__sc=this.__sj();
this.__sc.setStyle(l,15);
this._widget.getContainerElement().add(this.__sc);
this.__sc.exclude();
}return this.__sc;
},block:function(){this.__sd++;

if(this.__sd<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(h,this.__so,this);
M.addListener(d,this.__sn,this);
M.addListener(j,this.__sn,this);
M.addListener(f,this.__sn,this);
}},isBlocked:function(){return this.__sd>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__sd--;

if(this.__sd<1){this.__sk();
this.__sd=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__sd=0;
this.__sk();
},__sk:function(){this._restoreActiveWidget();
var N=this.getBlockerElement();
N.removeListener(h,this.__so,this);
N.removeListener(d,this.__sn,this);
N.removeListener(j,this.__sn,this);
N.removeListener(f,this.__sn,this);
N.exclude();
},getContentBlockerElement:function(){if(!this.__se){this.__se=this.__sj();
this._widget.getContentElement().add(this.__se);
this.__se.exclude();
}return this.__se;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(l,O);
this.__sb.push(O);

if(this.__sb.length<2){P.include();

if(this._isPageRoot){if(!this.__sg){this.__sg=new qx.event.Timer(300);
this.__sg.addListener(u,this.__sm,this);
}this.__sg.start();
this.__sm();
}}},isContentBlocked:function(){return this.__sb.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__sb.pop();
var Q=this.__sb[this.__sb.length-1];
var R=this.getContentBlockerElement();
R.setStyle(l,Q);

if(this.__sb.length<1){this.__sl();
this.__sb=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__sb=[];
var S=this.getContentBlockerElement();
S.setStyle(l,null);
this.__sl();
},__sl:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__sg.stop();
}},__sm:function(){var T=this._widget.getContainerElement().getDomElement();
var U=qx.dom.Node.getDocument(T);
this.getContentBlockerElement().setStyles({height:U.documentElement.scrollHeight+k,width:U.documentElement.scrollWidth+k});
},__sn:function(e){if(e.getKeyIdentifier()==t){e.stop();
}},__so:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(g,this.__sh,this);
}this._disposeObjects(w,o,x);
this.__sf=this.__rY=this.__sa=this._widget=this.__sb=null;
}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="qx.client",b="div",a="dblclick",w="mousewheel",v="qx.html.Blocker",u="mousemove",t="mouseover",s="appear",r="click",q="mshtml",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(v,{extend:qx.html.Element,construct:function(x,y){var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
var z={position:m,width:j,height:j,opacity:y||0,backgroundColor:x};
if(qx.core.Variant.isSet(c,q)){z.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
z.backgroundRepeat=i;
}qx.html.Element.call(this,b,z);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(s,this.__qp,this);
this.addListener(n,this.__qp,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__qp:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var k="keypress",j="focusout",h="activate",g="Tab",f="singleton",d="__bE",c="deactivate",b="focusin",a="qx.ui.core.FocusHandler";
qx.Class.define(a,{extend:qx.core.Object,type:f,construct:function(){qx.core.Object.call(this);
this.__bE={};
},members:{__bE:null,__bF:null,__bG:null,__bH:null,connectTo:function(m){m.addListener(k,this.__bI,this);
m.addListener(b,this._onFocusIn,this,true);
m.addListener(j,this._onFocusOut,this,true);
m.addListener(h,this._onActivate,this,true);
m.addListener(c,this._onDeactivate,this,true);
},addRoot:function(n){this.__bE[n.$$hash]=n;
},removeRoot:function(o){delete this.__bE[o.$$hash];
},getActiveWidget:function(){return this.__bF;
},isActive:function(p){return this.__bF==p;
},getFocusedWidget:function(){return this.__bG;
},isFocused:function(q){return this.__bG==q;
},isFocusRoot:function(r){return !!this.__bE[r.$$hash];
},_onActivate:function(e){var t=e.getTarget();
this.__bF=t;
var s=this.__bJ(t);

if(s!=this.__bH){this.__bH=s;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__bF==u){this.__bF=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__bG){this.__bG=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var w=e.getTarget();

if(w==this.__bG){this.__bG=null;
w.visualizeBlur();
}},__bI:function(e){if(e.getKeyIdentifier()!=g){return;
}
if(!this.__bH){return;
}e.stopPropagation();
e.preventDefault();
var x=this.__bG;

if(!e.isShiftPressed()){var y=x?this.__bN(x):this.__bL();
}else{var y=x?this.__bO(x):this.__bM();
}if(y){y.tabFocus();
}},__bJ:function(z){var A=this.__bE;

while(z){if(A[z.$$hash]){return z;
}z=z.getLayoutParent();
}return null;
},__bK:function(B,C){if(B===C){return 0;
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
},__bL:function(){return this.__bR(this.__bH,null);
},__bM:function(){return this.__bS(this.__bH,null);
},__bN:function(M){var N=this.__bH;

if(N==M){return this.__bL();
}
while(M&&M.getAnonymous()){M=M.getLayoutParent();
}
if(M==null){return [];
}var O=[];
this.__bP(N,M,O);
O.sort(this.__bK);
var P=O.length;
return P>0?O[0]:this.__bL();
},__bO:function(Q){var R=this.__bH;

if(R==Q){return this.__bM();
}
while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();
}
if(Q==null){return [];
}var S=[];
this.__bQ(R,Q,S);
S.sort(this.__bK);
var T=S.length;
return T>0?S[T-1]:this.__bM();
},__bP:function(parent,U,V){var W=parent.getLayoutChildren();
var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
if(!(X instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__bK(U,X)<0){V.push(X);
}this.__bP(X,U,V);
}}},__bQ:function(parent,Y,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__bK(Y,bc)>0){ba.push(bc);
}this.__bQ(bc,Y,ba);
}}},__bR:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__bK(bf,bd)<0){bd=bf;
}}bd=this.__bR(bf,bd);
}}return bd;
},__bS:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__bK(bi,bg)>0){bg=bi;
}}bg=this.__bS(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(d);
this.__bG=this.__bF=this.__bH=null;
}});
})();
(function(){var l="qx.client",k="head",j="text/css",h="stylesheet",g="}",f='@import "',e="{",d='";',c="qx.bom.Stylesheet",b="link",a="style";
qx.Class.define(c,{statics:{includeFile:function(m,n){if(!n){n=document;
}var o=n.createElement(b);
o.type=j;
o.rel=h;
o.href=qx.util.ResourceManager.getInstance().toUri(m);
var p=n.getElementsByTagName(k)[0];
p.appendChild(o);
},createElement:qx.core.Variant.select(l,{"mshtml":function(q){var r=document.createStyleSheet();

if(q){r.cssText=q;
}return r;
},"default":function(s){var t=document.createElement(a);
t.type=j;

if(s){t.appendChild(document.createTextNode(s));
}document.getElementsByTagName(k)[0].appendChild(t);
return t.sheet;
}}),addRule:qx.core.Variant.select(l,{"mshtml":function(u,v,w){u.addRule(v,w);
},"default":function(x,y,z){x.insertRule(y+e+z+g,x.cssRules.length);
}}),removeRule:qx.core.Variant.select(l,{"mshtml":function(A,B){var C=A.rules;
var D=C.length;

for(var i=D-1;i>=0;--i){if(C[i].selectorText==B){A.removeRule(i);
}}},"default":function(E,F){var G=E.cssRules;
var H=G.length;

for(var i=H-1;i>=0;--i){if(G[i].selectorText==F){E.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(l,{"mshtml":function(I){var J=I.rules;
var K=J.length;

for(var i=K-1;i>=0;i--){I.removeRule(i);
}},"default":function(L){var M=L.cssRules;
var N=M.length;

for(var i=N-1;i>=0;i--){L.deleteRule(i);
}}}),addImport:qx.core.Variant.select(l,{"mshtml":function(O,P){O.addImport(P);
},"default":function(Q,R){Q.insertRule(f+R+d,Q.cssRules.length);
}}),removeImport:qx.core.Variant.select(l,{"mshtml":function(S,T){var U=S.imports;
var V=U.length;

for(var i=V-1;i>=0;i--){if(U[i].href==T){S.removeImport(i);
}}},"default":function(W,X){var Y=W.cssRules;
var ba=Y.length;

for(var i=ba-1;i>=0;i--){if(Y[i].href==X){W.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(l,{"mshtml":function(bb){var bc=bb.imports;
var bd=bc.length;

for(var i=bd-1;i>=0;i--){bb.removeImport(i);
}},"default":function(be){var bf=be.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].type==bf[i].IMPORT_RULE){be.deleteRule(i);
}}}})}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(c,d){var q=this._getLayoutChildren();
var g,p,n;
var s,top,e,f,j,h;
var o,m,r,k;

for(var i=0,l=q.length;i<l;i++){g=q[i];
p=g.getSizeHint();
n=g.getLayoutProperties();
o=g.getMarginTop();
m=g.getMarginRight();
r=g.getMarginBottom();
k=g.getMarginLeft();
s=n.left!=null?n.left:n.edge;

if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*c/100);
}e=n.right!=null?n.right:n.edge;

if(qx.lang.Type.isString(e)){e=Math.round(parseFloat(e)*c/100);
}top=n.top!=null?n.top:n.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*d/100);
}f=n.bottom!=null?n.bottom:n.edge;

if(qx.lang.Type.isString(f)){f=Math.round(parseFloat(f)*d/100);
}if(s!=null&&e!=null){j=c-s-e-k-m;
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}s+=k;
}else{j=n.width;

if(j==null){j=p.width;
}else{j=Math.round(parseFloat(j)*c/100);
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}}
if(e!=null){s=c-j-e-m-k;
}else if(s==null){s=k;
}else{s+=k;
}}if(top!=null&&f!=null){h=d-top-f-o-r;
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}top+=o;
}else{h=n.height;

if(h==null){h=p.height;
}else{h=Math.round(parseFloat(h)*d/100);
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}}
if(f!=null){top=d-h-f-r-o;
}else if(top==null){top=o;
}else{top+=o;
}}g.renderLayout(s,top,j,h);
}},_computeSizeHint:function(){var I=0,H=0;
var F=0,D=0;
var B,A;
var z,x;
var t=this._getLayoutChildren();
var w,G,v;
var J,top,u,y;

for(var i=0,l=t.length;i<l;i++){w=t[i];
G=w.getLayoutProperties();
v=w.getSizeHint();
var E=w.getMarginLeft()+w.getMarginRight();
var C=w.getMarginTop()+w.getMarginBottom();
B=v.width+E;
A=v.minWidth+E;
J=G.left!=null?G.left:G.edge;

if(J&&typeof J===b){B+=J;
A+=J;
}u=G.right!=null?G.right:G.edge;

if(u&&typeof u===b){B+=u;
A+=u;
}I=Math.max(I,B);
H=Math.max(H,A);
z=v.height+C;
x=v.minHeight+C;
top=G.top!=null?G.top:G.edge;

if(top&&typeof top===b){z+=top;
x+=top;
}y=G.bottom!=null?G.bottom:G.edge;

if(y&&typeof y===b){z+=y;
x+=y;
}F=Math.max(F,z);
D=Math.max(D,x);
}return {width:I,minWidth:H,height:F,minHeight:D};
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
(function(){var d="maxWidth",c="qx.ui.progressive.renderer.table.Widths",b="minWidth",a="width";
qx.Class.define(c,{extend:qx.core.Object,construct:function(e){qx.core.Object.call(this);
this.__IB=[];

for(var i=0;i<e;i++){this.__IB[i]=new qx.ui.core.ColumnData();
}},members:{__IB:null,getData:function(){return this.__IB;
},set:function(f,g){for(var h in g){switch(h){case a:this.setWidth(f,g[h]);
break;
case b:this.setMinWidth(f,g[h]);
break;
case d:this.setMaxWidth(f,g[h]);
break;
default:throw new Error("Unrecognized key: "+h);
}}},setWidth:function(j,k){if(j>this.__IB.length-1||j<0){throw new Error("Column number out of range");
}this.__IB[j].setColumnWidth(k);
},setMinWidth:function(l,m){if(l>this.__IB.length-1||l<0){throw new Error("Column number out of range");
}this.__IB[l].setMinWidth(m);
},setMaxWidth:function(n,o){if(n>this.__IB.length-1||n<0){throw new Error("Column number out of range");
}this.__IB[n].setMaxWidth(o);
}}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(e);
},members:{__ye:null,renderLayout:function(f,top,g,h){this.__ye=g;
},getComputedWidth:function(){return this.__ye;
},getFlex:function(){return this.getLayoutProperties().flex||0;
},setColumnWidth:function(i,j){var j=j||0;
var k=null;

if(typeof i==c){this.setWidth(i);
}else if(typeof i==d){if(i==e){j=1;
}else{var l=i.match(/^[0-9]+(?:\.[0-9]+)?([%\*])$/);

if(l){if(l[1]==b){j=parseFloat(i);
}else{k=i;
}}}}this.setLayoutProperties({flex:j,width:k});
}},settings:{"qx.tableResizeDebug":false}});
})();
(function(){var b="qx.ui.progressive.headfoot.Abstract",a="abstract";
qx.Class.define(b,{type:a,extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.HBox());
},members:{__Fl:null,join:function(c){this.__Fl=c;
}},destruct:function(){this.__Fl=null;
}});
})();
(function(){var f="progressive-table-header-cell",d="resize",c="progressive-table-header",b="_layout",a="qx.ui.progressive.headfoot.TableHeading";
qx.Class.define(a,{extend:qx.ui.progressive.headfoot.Abstract,construct:function(g,h){qx.ui.progressive.headfoot.Abstract.call(this);
this.__Fm=g;
var k=g.getData();
this.__Fn=[];
for(var i=0;i<k.length;i++){var l=new qx.ui.basic.Atom(h[i]);
l.setAppearance(f);
this.add(l);
this.__Fn[i]=l;
}var j=new qx.ui.core.Widget();
j.set({height:16,appearance:f,minWidth:0,width:0});
this.add(j,{flex:1});
this.addListener(d,this._resizeColumns,this);
this.__Fo=new qx.ui.layout.HBox();
this.__Fo.connectToWidget(this);
},properties:{appearance:{refine:true,init:c}},members:{__Fm:null,__Fp:null,__Fn:null,__Fo:null,join:function(m){qx.ui.progressive.headfoot.Abstract.prototype.join.call(this,m);
},getLayoutChildren:function(){if(this.__Fp){return this.__Fm.getData();
}else{return qx.ui.progressive.headfoot.Abstract.prototype.getLayoutChildren.call(this);
}},_resizeColumns:function(e){var n=this.getBounds().width-qx.bom.element.Overflow.getScrollbarWidth();
this.__Fp=true;
this.__Fo.renderLayout(n,100);
this.__Fp=false;
var o=this.__Fm.getData();
for(var i=0;i<o.length;i++){this.__Fn[i].setWidth(o[i].getComputedWidth());
}}},destruct:function(){this.__Fm=this.__Fn=null;
this._disposeObjects(b);
}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignX(p);
}
if(q){this.setSeparator(q);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__cP:null,__cQ:null,__cR:null,__cS:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__cT:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__cP&&this.__cP.length!=length&&this.__cQ&&this.__cP;
var u;
var s=r?this.__cP:new Array(length);
var v=r?this.__cQ:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}else{v[i]=0;
}}if(!r){this.__cP=s;
this.__cQ=v;
}this.__cR=t;
this.__cS=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__cT();
}var E=this.__cS;
var length=E.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var B=N.computeHorizontalSeparatorGaps(E,M,Q);
}else{var B=N.computeHorizontalGaps(E,M,true);
}var i,z,K,J;
var P=[];
var F=B;

for(i=0;i<length;i+=1){J=this.__cP[i];
K=J!=null?Math.floor((x-B)*J):E[i].getSizeHint().width;
P.push(K);
F+=K;
}if(this.__cR&&F!=x){var H={};
var L,O;

for(i=0;i<length;i+=1){L=this.__cQ[i];

if(L>0){G=E[i].getSizeHint();
H[i]={min:G.minWidth,value:P[i],max:G.maxWidth,flex:L};
}}var C=N.computeFlexOffsets(H,x,F);

for(i in C){O=C[i].offset;
P[i]+=O;
F+=O;
}}var U=E[0].getMarginLeft();
if(F<x&&this.getAlignX()!=m){U=x-F;

if(this.getAlignX()===k){U=Math.round(U/2);
}}var G,top,A,K,D,S,I;
var M=this.getSpacing();
this._clearSeparators();
if(Q){var R=qx.theme.manager.Decoration.getInstance().resolve(Q).getInsets();
var T=R.left+R.right;
}for(i=0;i<length;i+=1){z=E[i];
K=P[i];
G=z.getSizeHint();
S=z.getMarginTop();
I=z.getMarginBottom();
A=Math.max(G.minHeight,Math.min(y-S-I,G.maxHeight));
top=N.computeVerticalAlignOffset(z.getAlignY()||this.getAlignY(),A,y,S,I);
if(i>0){if(Q){U+=D+M;
this._renderSeparator(Q,{left:U,top:0,width:T,height:y});
U+=T+M+z.getMarginLeft();
}else{U+=N.collapseMargins(M,D,z.getMarginLeft());
}}z.renderLayout(U,top,K,A);
U+=K;
D=z.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__cT();
}var bc=qx.ui.layout.Util;
var bk=this.__cS;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__cQ[i];
var X=this.__cP[i];

if(bg){V+=W.minWidth;
}else if(X){ba=Math.max(ba,Math.round(W.minWidth/X));
}else{V+=W.width;
}bj=bh.getMarginTop()+bh.getMarginBottom();
if((W.height+bj)>bb){bb=W.height+bj;
}if((W.minHeight+bj)>Y){Y=W.minHeight+bj;
}}V+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeHorizontalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeHorizontalGaps(bk,bf,true);
}return {minWidth:V+be,width:bd+be,minHeight:Y,height:bb};
}},destruct:function(){this.__cP=this.__cQ=this.__cS=null;
}});
})();
(function(){var n="progressive-progressbar-indicator-undone",m="progress",l="%",k="progressive-progressbar-indicator-done",j="progressive-progressbar-percent-text",i="renderStart",h="__Jl",g="progressive-progressbar-background",f="0%",d="qx.ui.progressive.headfoot.Progress",a="__Jm",c="progressive-progressbar-percent-background",b="renderEnd";
qx.Class.define(d,{extend:qx.ui.progressive.headfoot.Abstract,construct:function(o,p){qx.ui.progressive.headfoot.Abstract.call(this);
this.setHeight(16);
this.setPadding(0);
this.__Jk={};
var q=qx.theme.manager.Color.getInstance();
this.__Jk.background=q.resolve(g);
this.__Jk.indicatorDone=q.resolve(k);
this.__Jk.indicatorUndone=q.resolve(n);
this.__Jk.percentBackground=q.resolve(c);
this.__Jk.percentText=q.resolve(j);
this.set({backgroundColor:this.__Jk.background});
this.__Jl=new qx.ui.core.Widget();
this.__Jl.set({width:0,backgroundColor:this.__Jk.indicatorDone});
this.add(this.__Jl);
var r=new qx.ui.core.Widget();
r.set({backgroundColor:this.__Jk.indicatorUndone});
this.add(r,{flex:1});
this.__Jm=new qx.ui.basic.Atom(f);
this.__Jm.set({width:100,backgroundColor:this.__Jk.percentBackground,textColor:this.__Jk.percentText});
this.add(this.__Jm);
this.exclude();
},members:{__Jn:null,__Jk:null,__Jl:null,__Jm:null,join:function(s){qx.ui.progressive.headfoot.Abstract.prototype.join.call(this,s);
s.addListener(i,function(e){this.__Jn=e.getData().initial;
this.show();
},this);
s.addListener(m,function(e){var v=1.0-(e.getData().remaining/this.__Jn);
var w=this.getBounds();

if(w){var t=Math.floor((w.width-this.__Jm.getBounds().width)*v);
var u=Math.floor(v*100)+l;

if(!isNaN(t)){this.__Jl.setMinWidth(t);
this.__Jm.setLabel(u);
}}},this);
s.addListener(b,function(e){this.exclude();
},this);
}},destruct:function(){this.__Jk=null;
this._disposeObjects(h,a);
}});
})();
(function(){var d="abstract",c="qx.ui.progressive.structure.Abstract",b="overflowY",a="auto";
qx.Class.define(c,{type:d,extend:qx.core.Object,construct:function(e){qx.core.Object.call(this);
if(!e){this.__GP=new qx.ui.core.Widget();
this.__GQ=this.__GP;
}else{this.__GP=null;
this.__GQ=e;
}this.__GQ.getContentElement().setStyle(b,a);
},members:{__GP:null,__GQ:null,applyStructure:function(f){throw new Error("applyStructure() is abstract");
},getPane:function(){return this.__GQ;
}},destruct:function(){if(this.__GP){this.__GP.dispose();
}this.__GP=this.__GQ=null;
}});
})();
(function(){var a="qx.ui.progressive.structure.Default";
qx.Class.define(a,{extend:qx.ui.progressive.structure.Abstract,construct:function(b,c,d){qx.ui.progressive.structure.Abstract.call(this,d);
if(!b){this.__Hj=new qx.ui.progressive.headfoot.Null();
this.__Hk=this.__Hj;
}else{this.__Hj=null;
this.__Hk=b;
}if(!c){this.__Hl=new qx.ui.progressive.headfoot.Null();
this.__Hm=this.__Hl;
}else{this.__Hl=null;
this.__Hm=c;
}},members:{__Hk:null,__Hm:null,__Hj:null,__Hl:null,applyStructure:function(e){this.__Hk.join(e);
this.__Hm.join(e);
e.add(this.__Hk);
e.add(this.getPane(),{flex:1});
e.add(this.__Hm);
},getHeader:function(){return this.__Hk;
},getFooter:function(){return this.__Hm;
}},destruct:function(){if(this.__Hj){this.__Hj.dispose();
this.__Hj=null;
}
if(this.__Hl){this.__Hl.dispose();
this.__Hl=null;
}this.__Hk=this.__Hm=null;
}});
})();
(function(){var a="qx.ui.progressive.headfoot.Null";
qx.Class.define(a,{extend:qx.ui.progressive.headfoot.Abstract,construct:function(){qx.ui.progressive.headfoot.Abstract.call(this);
this.exclude();
}});
})();
(function(){var n="qx.event.type.Data",m="dataAvailable",l="renderStart",k="Integer",j="_applyDataModel",h="Boolean",g="qx.ui.progressive.model.Abstract",f="progress",d="white",c="qx.ui.progressive.Progressive",a="progressDetail",b="renderEnd";
qx.Class.define(c,{extend:qx.ui.container.Composite,construct:function(o){qx.ui.container.Composite.call(this,new qx.ui.layout.VBox());
this.__Hn={};
this.set({backgroundColor:d});
if(!o){o=new qx.ui.progressive.structure.Default();
}this.__Ho=o;
o.applyStructure(this);
this.__Hp=false;
this.__Hq=false;
this.__Hr=0;
},events:{"renderStart":n,"renderEnd":n,"progress":n,"progressDetail":n},properties:{dataModel:{check:g,apply:j},batchSize:{check:k,init:20},flushWidgetQueueAfterBatch:{check:h,init:false},interElementTimeout:{check:k,init:0}},members:{__Hn:null,__Hq:null,__Hs:null,__Hr:null,__Hp:null,__Ho:null,getStructure:function(){return this.__Ho;
},addRenderer:function(name,p){this.__Hn[name]=p;
p.join(this,name);
},removeRenderer:function(name){if(!this.__Hn[name]){throw new Error("No existing renderer named "+name);
}delete this.__Hn[name];
},render:function(){if(this.__Hq){return;
}this.__Hq=true;
var q=new qx.ui.progressive.State({progressive:this,model:this.getDataModel(),pane:this.__Ho.getPane(),batchSize:this.getBatchSize(),rendererData:this.__Hu(),userData:{}});
this.__Hs=new Date();
if(this.__Hp){this.__Hr=q.getModel().getElementCount();
this.fireDataEvent(l,{state:q,initial:this.__Hr});
this.__Ht(q);
}else{qx.event.Timer.once(function(){this.__Hr=q.getModel().getElementCount();
this.fireDataEvent(l,{state:q,initial:this.__Hr});
this.__Ht(q);
this.__Hp=true;
},this,10);
}},_applyDataModel:function(r,s){if(s){s.removeListener(m,this.__Hv,this);
s.dispose();
}r.addListener(m,this.__Hv,this);
},__Ht:function(t){var u;
var w;
var v;

for(var i=t.getBatchSize();i>0;i--){u=t.getModel().getNextElement();

if(!u){this.debug("Render time: "+(new Date()-this.__Hs)+"ms");
this.__Hq=false;
this.fireDataEvent(b,t);
t.dispose();
return ;
}w=u.element;
v=this.__Hn[w.renderer];
v.render(t,w);
this.fireDataEvent(a,{initial:this.__Hr,remaining:u.remaining,element:w});
}this.fireDataEvent(f,{initial:this.__Hr,remaining:u.remaining});
if(this.getFlushWidgetQueueAfterBatch()){qx.ui.core.queue.Manager.flush();
}qx.event.Timer.once(function(){this.__Ht(t);
},this,this.getInterElementTimeout());
},__Hu:function(){var x={};

for(var name in this.__Hn){x[name]={};
}return x;
},__Hv:function(e){this.__Hr=e.getData();
this.render();
}},destruct:function(){for(var name in this.__Hn){this.__Hn[name].dispose();
}this.__Hs=this.__Hn=this.__Ho=null;
}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignY(p);
}
if(q){this.setSeparator(q);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__eS:null,__eT:null,__eU:null,__eV:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__eW:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__eS&&this.__eS.length!=length&&this.__eT&&this.__eS;
var u;
var t=r?this.__eS:new Array(length);
var v=r?this.__eT:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}else{v[i]=0;
}}if(!r){this.__eS=t;
this.__eT=v;
}this.__eU=s;
this.__eV=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__eW();
}var F=this.__eV;
var length=F.length;
var P=qx.ui.layout.Util;
var O=this.getSpacing();
var S=this.getSeparator();

if(S){var C=P.computeVerticalSeparatorGaps(F,O,S);
}else{var C=P.computeVerticalGaps(F,O,true);
}var i,A,B,J;
var K=[];
var Q=C;

for(i=0;i<length;i+=1){J=this.__eS[i];
B=J!=null?Math.floor((y-C)*J):F[i].getSizeHint().height;
K.push(B);
Q+=B;
}if(this.__eU&&Q!=y){var H={};
var N,R;

for(i=0;i<length;i+=1){N=this.__eT[i];

if(N>0){G=F[i].getSizeHint();
H[i]={min:G.minHeight,value:K[i],max:G.maxHeight,flex:N};
}}var D=P.computeFlexOffsets(H,y,Q);

for(i in D){R=D[i].offset;
K[i]+=R;
Q+=R;
}}var top=F[0].getMarginTop();
if(Q<y&&this.getAlignY()!=m){top=y-Q;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var G,U,L,B,I,M,E;
this._clearSeparators();
if(S){var T=qx.theme.manager.Decoration.getInstance().resolve(S).getInsets();
var z=T.top+T.bottom;
}for(i=0;i<length;i+=1){A=F[i];
B=K[i];
G=A.getSizeHint();
M=A.getMarginLeft();
E=A.getMarginRight();
L=Math.max(G.minWidth,Math.min(x-M-E,G.maxWidth));
U=P.computeHorizontalAlignOffset(A.getAlignX()||this.getAlignX(),L,x,M,E);
if(i>0){if(S){top+=I+O;
this._renderSeparator(S,{top:top,left:0,height:z,width:x});
top+=z+O+A.getMarginTop();
}else{top+=P.collapseMargins(O,I,A.getMarginTop());
}}A.renderLayout(U,top,L,B);
top+=B;
I=A.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__eW();
}var bc=qx.ui.layout.Util;
var bk=this.__eV;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__eT[i];
var Y=this.__eS[i];

if(bg){X+=W.minHeight;
}else if(Y){ba=Math.max(ba,Math.round(W.minHeight/Y));
}else{X+=W.height;
}bj=bh.getMarginLeft()+bh.getMarginRight();
if((W.width+bj)>bd){bd=W.width+bj;
}if((W.minWidth+bj)>V){V=W.minWidth+bj;
}}X+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeVerticalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeVerticalGaps(bk,bf,true);
}return {minHeight:X+be,height:bb+be,minWidth:V,width:bd};
}},destruct:function(){this.__eS=this.__eT=this.__eV=null;
}});
})();
(function(){var a="qx.ui.progressive.State";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b){qx.core.Object.call(this);
this.setProgressive(b.progressive);
this.setModel(b.model);
this.setPane(b.pane);
this.setBatchSize(b.batchSize);
this.setRendererData(b.rendererData);
this.setUserData(b.userData);
},properties:{progressive:{nullable:true},model:{nullable:true},pane:{nullable:true},batchSize:{},rendererData:{},userData:{}},destruct:function(){this.setProgressive(null);
this.setModel(null);
this.setPane(null);
}});
})();
(function(){var c="abstract",b="qx.ui.progressive.model.Abstract",a="qx.event.type.Data";
qx.Class.define(b,{type:c,extend:qx.core.Object,events:{"dataAvailable":a},members:{getElementCount:function(){throw new Error("getElementCount() is abstract");
},getNextElement:function(){throw new Error("getNextElement() is abstract");
}}});
})();
(function(){var b="dataAvailable",a="qx.ui.progressive.model.Default";
qx.Class.define(a,{extend:qx.ui.progressive.model.Abstract,construct:function(){qx.ui.progressive.model.Abstract.call(this);
this.__HU=[];
},members:{__HU:null,addElements:function(c){this.__HU=this.__HU.concat(c);
this.fireDataEvent(b,this.__HU.length);
},addElement:function(d){this.__HU.push(d);
this.fireDataEvent(b,this.__HU.length);
},getElementCount:function(){return this.__HU.length;
},getNextElement:function(){if(this.__HU.length>0){return ({element:this.__HU.shift(),remaining:this.__HU.length});
}return null;
}},destruct:function(){this.__HU=null;
}});
})();
(function(){var b="qx.ui.progressive.renderer.Abstract",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,members:{render:function(c,d){throw new Error("render() is abstract");
},join:function(e,name){}}});
})();
(function(){var l=".qx-progressive-",k="-col-",j="px;",h="-row",g="}",f="width: ",d="0px ",c="qx-progressive-",b="px",a="  font-size: 11px;",T="padding: ",S="px ",R='',Q="end",P="qx.client",O="div",N="  position: absolute;",M="  width : 100%;",L="__columnData",K="  border-bottom:1px solid #eeeeee;",s="",t="  top: 0px;",q="  overflow:hidden;",r=" {",o="  cursor:default;",p="  font-family: 'Segoe UI', Corbel, Calibri, Tahoma, 'Lucida Sans Unicode', sans-serif;",m="-row {",n="resize",u="__Gf",v="start",C="relative",A="  -o-text-overflow: ellipsis;",E="mshtml",D="  border-right:1px solid #f2f2f2;",G="__Gi",F="  white-space:nowrap;",x=';-moz-user-select:none;',J="  padding : 0px 6px 0px 6px;",I="qx.ui.progressive.renderer.table.Row",H="progressive-table-row-background-odd",w="  text-overflow:ellipsis;",y="  height: 100%;",z="progressive-table-row-background-even",B="left: ";
qx.Class.define(I,{extend:qx.ui.progressive.renderer.Abstract,construct:function(U){qx.ui.progressive.renderer.Abstract.call(this);
this.__Gd=U;
this.__Ge={};
this.__Gf=new qx.ui.progressive.renderer.table.cell.Default();
this.__Gg=null;
this.__Gh={};
var V=qx.theme.manager.Color.getInstance();
this.__Gh.bgcol=[];
this.__Gh.bgcol[0]=V.resolve(z);
this.__Gh.bgcol[1]=V.resolve(H);
this.__Gi=new qx.ui.layout.HBox();
this.__Gi.connectToWidget(this);
},statics:{__Gj:null,__Gk:6,__Gl:N+t+y+q+w+A+F+D+K+J+o+a+p+(qx.core.Variant.isSet(P,E)?R:x)},properties:{defaultRowHeight:{init:16}},members:{__Gg:null,__Gm:null,__Gn:null,__Gd:null,__Ge:null,__Gf:null,__Gh:null,__Gi:null,join:function(W,name){if(this.__Gg){throw new Error("Renderer is already joined to a Progressive.");
}this.__Gg=W;
this.__Gm=name;
var Y=qx.ui.progressive.renderer.table.Row;

if(!Y.__Gj){Y.__Gj={};
}var X=W.toHashCode();

if(!Y.__Gj[X]){Y.__Gj[X]={rowstylesheet:null,cellstylesheet:[]};
var ba=l+X+m+M+g;
Y.__Gj[X].rowstylesheet=qx.bom.Stylesheet.createElement(ba);
var bb=this.__Gd.getData();

for(var i=0;i<bb.length;i++){var ba=l+X+k+i+r+Y.__Gl+g;
Y.__Gj[X].cellstylesheet[i]=qx.bom.Stylesheet.createElement(ba);
}this.__Gn=X;
var bc=W.getStructure().getPane();
bc.addListener(n,this._resizeColumns,this);
}},addRenderer:function(bd,be){var bf=this.__Gd.getData();

if(bd<0||bd>=bf.length){throw new Error("Column "+bd+" out of range (max: "+(bf.length-1)+")");
}this.__Ge[bd]=be;
},removeRenderer:function(bg){var bh=this.__Gd.getData();

if(bg<0||bg>=bh.length){throw new Error("Column "+bg+" out of range (max: "+(bh.length-1)+")");
}
if(!this.__Ge[bg]){throw new Error("No existing renderer for column "+bg);
}delete this.__Ge[bg];
},render:function(bi,bj){var bt=bj.data;
var bo=[];
var bq;
var bp;
var bm=0;
if(bi.getRendererData()[this.__Gm].end===undefined){bi.getRendererData()[this.__Gm]={end:0,start:1,rows:0,totalHeight:0};
}var bs=document.createElement(O);
for(var i=0;i<bt.length;i++){var bn=c+this.__Gn+k+i;
bp=this.__Ge[i]||this.__Gf;
bq={state:bi,rowDiv:bs,stylesheet:bn,element:bj,dataIndex:i,cellData:bt[i],height:bm};
bo.push(bp.render(bq));
if(bq.height>bm){bm=bq.height;
}}bm=(bm>0?bm:this.getDefaultRowHeight());
var br=bi.getRendererData()[this.__Gm];
br.totalHeight+=bm;
bs.style.position=C;
bs.style.height=bm+b;
bs.className=c+this.__Gn+h;
bs.innerHTML=bo.join(s);
switch(bj.location){case Q:var bk=br.end||0;
bs.style.backgroundColor=this.__Gh.bgcol[bk];
br.end=(bk==0?1:0);
bi.getPane().getContentElement().getDomElement().appendChild(bs);
break;
case v:var bl=bi.getPane().getContentElement().getDomElement();
var bu=bl.childNodes;
if(bu.length>0){var bk=br.start;
bs.style.backgroundColor=this.__Gh.bgcol[bk];
br.start=(bk==0?1:0);
bl.insertBefore(bs,bu[0]);
break;
}else{bl.appendChild(bs);
}break;
default:throw new Error("Invalid location: "+bj.location);
}++br.rows;
},getLayoutChildren:function(){return this.__Gd.getData();
},_resizeColumns:function(e){var bC=this.__Gg.getStructure().getPane();
var bz=bC.getBounds().width-qx.bom.element.Overflow.getScrollbarWidth();
var bA=l+this.__Gn+h;
var bw=qx.ui.progressive.renderer.table.Row;
qx.bom.Stylesheet.removeRule(bw.__Gj[this.__Gn].rowstylesheet,bA);
var by=f+bz+j;
qx.bom.Stylesheet.addRule(bw.__Gj[this.__Gn].rowstylesheet,bA,by);
this.__Gi.renderLayout(bz,100);
var bB=this.__Gd.getData();
for(var i=0,bF=0;i<bB.length;i++,bF+=bz){var bA=l+this.__Gn+k+i;
var bw=qx.ui.progressive.renderer.table.Row;
qx.bom.Stylesheet.removeRule(bw.__Gj[this.__Gn].cellstylesheet[i],bA);
bz=bB[i].getComputedWidth();
{};
var bx;

if(qx.bom.client.Feature.CONTENT_BOX){bx=qx.ui.progressive.renderer.table.Row.__Gk*2;
}else{bx=-1;
}var bE=(bz-bx)+j;
var bD=d+qx.ui.progressive.renderer.table.Row.__Gk+S+d+qx.ui.progressive.renderer.table.Row.__Gk+j;
var bv=bF+j;
var by=bw.__Gl+f+bE+B+bv+T+bD;
qx.bom.Stylesheet.addRule(bw.__Gj[this.__Gn].cellstylesheet[i],bA,by);
}}},destruct:function(){var name;

for(name in this.__Ge){this.__Ge[name]=null;
}var bH=qx.ui.progressive.renderer.table.Row;
var bG=this.__Gg.toHashCode();

if(bH.__Gj&&bH.__Gj[bG]){if(bH.__Gj[bG].rowstylesheet){var bJ=l+this.__Gn+h;
var bH=qx.ui.progressive.renderer.table.Row;
qx.bom.Stylesheet.removeRule(bH.__Gj[this.__Gn].rowstylesheet,bJ);
}if(bH.__Gj[bG].cellstylesheet){for(var i=bH.__Gj[bG].cellstylesheet.length-1;i>=0;i--){var bJ=l+this.__Gn+k+i;
var bI=bH.__Gj[this.__Gn].cellstylesheet[i];
var bH=qx.ui.progressive.renderer.table.Row;
qx.bom.Stylesheet.removeRule(bI,bJ);
}}}
if(this.__Gg&&this.__Gg.getRendererData){var bK=this.__Gg.getRendererData();

if(bK&&bK[this.__Gm]&&bK[this.__Gm].end!==undefined){bK[this.__Gm]=null;
}}this.__Gh=this.__Ge=this.__Gg=this.__Gd=null;
this._disposeObjects(G,u,L);
}});
})();
(function(){var j="",i="'",h="abstract",g=">",f="</div>",e="<div ",d="' ",c="style='",b="qx.ui.progressive.renderer.table.cell.Abstract",a="class='";
qx.Class.define(b,{type:h,extend:qx.core.Object,members:{_getCellStyle:function(k){return j;
},_getCellExtras:function(l){return j;
},_getContentHtml:function(m){return m.cellData||j;
},render:function(n){var p=[];
var o=this._getCellStyle(n);
p.push(e,a,n.stylesheet,d);

if(o){p.push(c,o,i);
}p.push(this._getCellExtras(n),g,this._getContentHtml(n),f);
return p.join(j);
}}});
})();
(function(){var d="number",c="qx.ui.progressive.renderer.table.cell.Default",b="",a="string";
qx.Class.define(c,{extend:qx.ui.progressive.renderer.table.cell.Abstract,construct:function(){qx.ui.progressive.renderer.table.cell.Abstract.call(this);
},members:{_getContentHtml:function(e){return qx.bom.String.escape(this._formatValue(e.cellData));
},_formatValue:function(f){var h;

if(f==null){return b;
}
if(typeof f==a){return f;
}else if(typeof f==d){if(!qx.ui.progressive.renderer.table.Row._numberFormat){var g=new qx.util.format.NumberFormat();
g.setMaximumFractionDigits(2);
qx.ui.progressive.renderer.table.Row._numberFormat=g;
}h=qx.ui.progressive.renderer.table.Row._numberFormat.format(f);
}else if(f instanceof Date){h=qx.util.format.DateFormat.getDateInstance().format(f);
}else{h=f;
}return h;
}}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bw="' but found ",bv="The value '",bu=" != ",bt="qx.core.Object",bs="Expected value to be an array but found ",br=") was fired.",bq="Expected value to be an integer >= 0 but found ",bp="' to be not equal with '",bo="' to '",bn="qx.ui.core.Widget",w="Called assertTrue with '",x="Expected value to be a map but found ",u="The function did not raise an exception!",v="Expected value to be undefined but found ",s="Expected value to be a DOM element but found  '",t="Expected value to be a regular expression but found ",q="' to implement the interface '",r="Expected value to be null but found ",E="Invalid argument 'type'",F="Called assert with 'false'",R="Assertion error! ",N="Expected value to be a string but found ",ba="null",U="' but found '",bj="' must must be a key of the map '",bf="The String '",J="Expected value not to be undefined but found ",bm="qx.util.ColorUtil",bl=": ",bk="The raised exception does not have the expected type! ",I=") not fired.",L="qx.core.Assert",M="Expected value to be typeof object but found ",P="' (identical) but found '",S="' must have any of the values defined in the array '",V="Expected value to be a number but found ",bc="Called assertFalse with '",bh="]",y="Expected value to be a qooxdoo object but found ",z="' arguments.",K="Expected value not to be null but found ",Y="Array[",X="' does not match the regular expression '",W="' to be not identical with '",be="' arguments but found '",bd="', which cannot be converted to a CSS color!",T="Expected object '",bb="qx.core.AssertionError",a="Expected value to be a boolean but found ",bg="))!",A="Expected value to be a qooxdoo widget but found ",B="Expected value '%1' to be in the range '%2'..'%3'!",O="Expected value to be typeof '",b="Expected value to be typeof function but found ",c="Expected value to be an integer but found ",H="Called fail().",C="The parameter 're' must be a string or a regular expression.",D="Expected value to be a number >= 0 but found ",G="Expected value to be instanceof '",Q="Wrong number of arguments given. Expected '",bi="object";
qx.Class.define(L,{statics:{__tN:true,__tO:function(bx,by){var bz=p;

for(var i=1,l=arguments.length;i<l;i++){bz=bz+this.__tP(arguments[i]);
}var bB=R+bx+bl+bz;

if(this.__tN){qx.Bootstrap.error(bB);
}
if(qx.Class.isDefined(bb)){var bA=new qx.core.AssertionError(bx,bz);

if(this.__tN){qx.Bootstrap.error("Stack trace: \n"+bA.getStackTrace());
}throw bA;
}else{throw new Error(bB);
}},__tP:function(bC){var bD;

if(bC===null){bD=ba;
}else if(qx.lang.Type.isArray(bC)&&bC.length>10){bD=Y+bC.length+bh;
}else if((bC instanceof Object)&&(bC.toString==null)){bD=qx.lang.Json.stringify(bC,null,2);
}else{try{bD=bC.toString();
}catch(e){bD=p;
}}return bD;
},assert:function(bE,bF){bE==true||this.__tO(bF||p,F);
},fail:function(bG){this.__tO(bG||p,H);
},assertTrue:function(bH,bI){(bH===true)||this.__tO(bI||p,w,bH,m);
},assertFalse:function(bJ,bK){(bJ===false)||this.__tO(bK||p,bc,bJ,m);
},assertEquals:function(bL,bM,bN){bL==bM||this.__tO(bN||p,k,bL,U,bM,n);
},assertNotEquals:function(bO,bP,bQ){bO!=bP||this.__tO(bQ||p,k,bO,bp,bP,n);
},assertIdentical:function(bR,bS,bT){bR===bS||this.__tO(bT||p,k,bR,P,bS,n);
},assertNotIdentical:function(bU,bV,bW){bU!==bV||this.__tO(bW||p,k,bU,W,bV,n);
},assertNotUndefined:function(bX,bY){bX!==undefined||this.__tO(bY||p,J,bX,o);
},assertUndefined:function(ca,cb){ca===undefined||this.__tO(cb||p,v,ca,o);
},assertNotNull:function(cc,cd){cc!==null||this.__tO(cd||p,K,cc,o);
},assertNull:function(ce,cf){ce===null||this.__tO(cf||p,r,ce,o);
},assertJsonEquals:function(cg,ch,ci){this.assertEquals(qx.lang.Json.stringify(cg),qx.lang.Json.stringify(ch),ci);
},assertMatch:function(cj,ck,cl){this.assertString(cj);
this.assert(qx.lang.Type.isRegExp(ck)||qx.lang.Type.isString(ck),C);
cj.search(ck)>=0||this.__tO(cl||p,bf,cj,X,ck.toString(),n);
},assertArgumentsCount:function(cm,cn,co,cp){var cq=cm.length;
(cq>=cn&&cq<=co)||this.__tO(cp||p,Q,cn,bo,co,be,arguments.length,z);
},assertEventFired:function(cr,event,cs,ct,cu){var cw=false;
var cv=function(e){if(ct){ct.call(cr,e);
}cw=true;
};
var cx;

try{cx=cr.addListener(event,cv,cr);
cs.call();
}catch(cy){throw cy;
}finally{try{cr.removeListenerById(cx);
}catch(cz){}}cw===true||this.__tO(cu||p,f,event,I);
},assertEventNotFired:function(cA,event,cB,cC){var cE=false;
var cD=function(e){cE=true;
};
var cF=cA.addListener(event,cD,cA);
cB.call();
cE===false||this.__tO(cC||p,f,event,br);
cA.removeListenerById(cF);
},assertException:function(cG,cH,cI,cJ){var cH=cH||Error;
var cK;

try{this.__tN=false;
cG();
}catch(cL){cK=cL;
}finally{this.__tN=true;
}
if(cK==null){this.__tO(cJ||p,u);
}cK instanceof cH||this.__tO(cJ||p,bk,cH,bu,cK);

if(cI){this.assertMatch(cK.toString(),cI,cJ);
}},assertInArray:function(cM,cN,cO){cN.indexOf(cM)!==-1||this.__tO(cO||p,bv,cM,S,cN,m);
},assertArrayEquals:function(cP,cQ,cR){this.assertArray(cP,cR);
this.assertArray(cQ,cR);
this.assertEquals(cP.length,cQ.length,cR);

for(var i=0;i<cP.length;i++){this.assertIdentical(cP[i],cQ[i],cR);
}},assertKeyInMap:function(cS,cT,cU){cT[cS]!==undefined||this.__tO(cU||p,bv,cS,bj,cT,m);
},assertFunction:function(cV,cW){qx.lang.Type.isFunction(cV)||this.__tO(cW||p,b,cV,o);
},assertString:function(cX,cY){qx.lang.Type.isString(cX)||this.__tO(cY||p,N,cX,o);
},assertBoolean:function(da,db){qx.lang.Type.isBoolean(da)||this.__tO(db||p,a,da,o);
},assertNumber:function(dc,dd){(qx.lang.Type.isNumber(dc)&&isFinite(dc))||this.__tO(dd||p,V,dc,o);
},assertPositiveNumber:function(de,df){(qx.lang.Type.isNumber(de)&&isFinite(de)&&de>=0)||this.__tO(df||p,D,de,o);
},assertInteger:function(dg,dh){(qx.lang.Type.isNumber(dg)&&isFinite(dg)&&dg%1===0)||this.__tO(dh||p,c,dg,o);
},assertPositiveInteger:function(di,dj){var dk=(qx.lang.Type.isNumber(di)&&isFinite(di)&&di%1===0&&di>=0);
dk||this.__tO(dj||p,bq,di,o);
},assertInRange:function(dl,dm,dn,dp){(dl>=dm&&dl<=dn)||this.__tO(dp||p,qx.lang.String.format(B,[dl,dm,dn]));
},assertObject:function(dq,dr){var ds=dq!==null&&(qx.lang.Type.isObject(dq)||typeof dq===bi);
ds||this.__tO(dr||p,M,(dq),o);
},assertArray:function(dt,du){qx.lang.Type.isArray(dt)||this.__tO(du||p,bs,dt,o);
},assertMap:function(dv,dw){qx.lang.Type.isObject(dv)||this.__tO(dw||p,x,dv,o);
},assertRegExp:function(dx,dy){qx.lang.Type.isRegExp(dx)||this.__tO(dy||p,t,dx,o);
},assertType:function(dz,dA,dB){this.assertString(dA,E);
typeof (dz)===dA||this.__tO(dB||p,O,dA,bw,dz,o);
},assertInstance:function(dC,dD,dE){var dF=dD.classname||dD+p;
dC instanceof dD||this.__tO(dE||p,G,dF,bw,dC,o);
},assertInterface:function(dG,dH,dI){qx.Class.implementsInterface(dG,dH)||this.__tO(dI||p,T,dG,q,dH,n);
},assertCssColor:function(dJ,dK,dL){var dM=qx.Class.getByName(bm);

if(!dM){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dO=dM.stringToRgb(dJ);

try{var dN=dM.stringToRgb(dK);
}catch(dQ){this.__tO(dL||p,d,dJ,j,dO.join(h),g,dK,bd);
}var dP=dO[0]==dN[0]&&dO[1]==dN[1]&&dO[2]==dN[2];
dP||this.__tO(dL||p,d,dO,j,dO.join(h),g,dK,j,dN.join(h),bg);
},assertElement:function(dR,dS){!!(dR&&dR.nodeType===1)||this.__tO(dS||p,s,dR,n);
},assertQxObject:function(dT,dU){this.__tQ(dT,bt)||this.__tO(dU||p,y,dT,o);
},assertQxWidget:function(dV,dW){this.__tQ(dV,bn)||this.__tO(dW||p,A,dV,o);
},__tQ:function(dX,dY){if(!dX){return false;
}var ea=dX.constructor;

while(ea){if(ea.classname===dY){return true;
}ea=ea.superclass;
}return false;
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__tT:null,__tU:null,__tV:null,__tW:null,stringify:function(bb,bc,bd){this.__tT=p;
this.__tU=p;
this.__tW=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__tU+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__tU=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__tV=bc;
}else{this.__tV=null;
}return this.__tX(p,{'':bb});
},__tX:function(be,bf){var bi=this.__tT,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__tV===e){bj=this.__tV.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__tY(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__tT+=this.__tU;
bg=[];

if(this.__tW.indexOf(bj)!==-1){throw new TypeError(V);
}this.__tW.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__tX(i,bj)||h;
}this.__tW.pop();
if(bg.length===0){var bh=s;
}else if(this.__tT){bh=E+this.__tT+bg.join(Y+this.__tT)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__tT=bi;
return bh;
case z:this.__tT+=this.__tU;
bg=[];

if(this.__tW.indexOf(bj)!==-1){throw new TypeError(V);
}this.__tW.push(bj);
if(this.__tV&&typeof this.__tV===f){var length=this.__tV.length;

for(var i=0;i<length;i+=1){var k=this.__tV[i];

if(typeof k===W){var v=this.__tX(k,bj);

if(v){bg.push(this.__tY(k)+(this.__tT?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__tX(k,bj);

if(v){bg.push(this.__tY(k)+(this.__tT?g:m)+v);
}}}}this.__tW.pop();
if(bg.length===0){var bh=A;
}else if(this.__tT){bh=w+this.__tT+bg.join(Y+this.__tT)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__tT=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__tY:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
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
return typeof bs===e?this.__ua({'':j},p,bs):j;
}throw new SyntaxError(P);
},__ua:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__ua(bx,k,bw);

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
this.__ro=u;
},statics:{getIntegerInstance:function(){var v=qx.util.format.NumberFormat;

if(v._integerInstance==null){v._integerInstance=new v();
v._integerInstance.setMaximumFractionDigits(0);
}return v._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__ro:null,format:function(w){switch(w){case Infinity:return f;
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

for(F=z.length;F>3;F-=3){D=t+qx.locale.Number.getGroupSeparator(this.__ro)+z.substring(F-3,F)+D;
}D=z.substring(0,F)+D;
}var B=this.getPrefix()?this.getPrefix():t;
var y=this.getPostfix()?this.getPostfix():t;
var E=B+(A?r:t)+D;

if(C.length>0){E+=t+qx.locale.Number.getDecimalSeparator(this.__ro)+C;
}E+=y;
return E;
},parse:function(I){var N=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__ro)+t);
var L=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__ro)+t);
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
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var bD="(\\d\\d?)",bC="format",bB="",bA="abbreviated",bz="wide",by="(",bx=")",bw="|",bv="stand-alone",bu="wildcard",bj="default",bi="literal",bh="'",bg="hour",bf="(\\d\\d?\\d?)",be="ms",bd="narrow",bc="-",bb="quoted_literal",ba='a',bK="HH:mm:ss",bL="+",bI="HHmmss",bJ="long",bG='z',bH="0",bE="sec",bF="day",bM='Z',bN=" ",bn="min",bm="mm",bp="(\\d+)",bo="h",br="KK",bq='L',bt="Z",bs="(\\d\\d+)",bl="EEEE",bk="^",a=":",b='y',c="K",d="a",e="([\\+\\-]\\d\\d:?\\d\\d)",f="GMT",g="dd",h="qx.util.format.DateFormat",j="yyy",k="H",bR="YYYY",bQ="y",bP="HH",bO="EE",bV='h',bU="S",bT='s',bS='A',bX="yyyyyy",bW="kk",J="ss",K='H',H='S',I="MMMM",N='c',O="d",L="([a-zA-Z]+)",M='k',F="m",G='Y',s='D',r="yyyyy",u='K',t="hh",o="SSS",n="MM",q="yy",p="(\\d\\d\\d\\d\\d\\d+)",m="yyyy-MM-dd HH:mm:ss",l="(\\d\\d\\d\\d\\d+)",T="short",U='d',V="unkown",W='m',P="(\\d\\d\\d\\d)",Q="(\\d\\d\\d+)",R="k",S='M',X="(\\d\\d\\d\\d+)",Y="SS",C="MMM",B="s",A="M",z='w',y="EEE",x="$",w="?",v='E',E="z",D="yyyy";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(bY,ca){qx.core.Object.call(this);

if(!ca){this.__wy=qx.locale.Manager.getInstance().getLocale();
}else{this.__wy=ca;
}
if(bY!=null){this.__wz=bY.toString();
}else{this.__wz=qx.locale.Date.getDateFormat(bJ,this.__wy)+bN+qx.locale.Date.getDateTimeFormat(bI,bK,this.__wy);
}},statics:{getDateTimeInstance:function(){var cc=qx.util.format.DateFormat;
var cb=qx.locale.Date.getDateFormat(bJ)+bN+qx.locale.Date.getDateTimeFormat(bI,bK);

if(cc._dateInstance==null||cc._dateInstance.__wz!=cb){cc._dateTimeInstance=new cc();
}return cc._dateTimeInstance;
},getDateInstance:function(){var ce=qx.util.format.DateFormat;
var cd=qx.locale.Date.getDateFormat(T)+bB;

if(ce._dateInstance==null||ce._dateInstance.__wz!=cd){ce._dateInstance=new ce(cd);
}return ce._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:m,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__wy:null,__wz:null,__wA:null,__wB:null,__wC:null,__wD:function(cf,cg){var ch=bB+cf;

while(ch.length<cg){ch=bH+ch;
}return ch;
},__wE:function(ci){var cj=new Date(ci.getTime());
var ck=cj.getDate();

while(cj.getMonth()!=0){cj.setDate(-1);
ck+=cj.getDate()+1;
}return ck;
},__wF:function(cl){return new Date(cl.getTime()+(3-((cl.getDay()+6)%7))*86400000);
},__wG:function(cm){var co=this.__wF(cm);
var cp=co.getFullYear();
var cn=this.__wF(new Date(cp,0,4));
return Math.floor(1.5+(co.getTime()-cn.getTime())/86400000/7);
},format:function(cq){if(cq==null){return null;
}var cw=qx.util.format.DateFormat;
var cx=this.__wy;
var cH=cq.getFullYear();
var cB=cq.getMonth();
var cJ=cq.getDate();
var cr=cq.getDay();
var cC=cq.getHours();
var cy=cq.getMinutes();
var cD=cq.getSeconds();
var cF=cq.getMilliseconds();
var cI=cq.getTimezoneOffset();
var cu=cI>0?1:-1;
var cs=Math.floor(Math.abs(cI)/60);
var cz=Math.abs(cI)%60;
this.__wH();
var cG=bB;

for(var i=0;i<this.__wC.length;i++){var cE=this.__wC[i];

if(cE.type==bi){cG+=cE.text;
}else{var cv=cE.character;
var cA=cE.size;
var ct=w;

switch(cv){case b:case G:if(cA==2){ct=this.__wD(cH%100,2);
}else{ct=cH+bB;

if(cA>ct.length){for(var i=ct.length;i<cA;i++){ct=bH+ct;
}}}break;
case s:ct=this.__wD(this.__wE(cq),cA);
break;
case U:ct=this.__wD(cJ,cA);
break;
case z:ct=this.__wD(this.__wG(cq),cA);
break;
case v:if(cA==2){ct=qx.locale.Date.getDayName(bd,cr,cx,bC);
}else if(cA==3){ct=qx.locale.Date.getDayName(bA,cr,cx,bC);
}else if(cA==4){ct=qx.locale.Date.getDayName(bz,cr,cx,bC);
}break;
case N:if(cA==2){ct=qx.locale.Date.getDayName(bd,cr,cx,bv);
}else if(cA==3){ct=qx.locale.Date.getDayName(bA,cr,cx,bv);
}else if(cA==4){ct=qx.locale.Date.getDayName(bz,cr,cx,bv);
}break;
case S:if(cA==1||cA==2){ct=this.__wD(cB+1,cA);
}else if(cA==3){ct=qx.locale.Date.getMonthName(bA,cB,cx,bC);
}else if(cA==4){ct=qx.locale.Date.getMonthName(bz,cB,cx,bC);
}break;
case bq:if(cA==1||cA==2){ct=this.__wD(cB+1,cA);
}else if(cA==3){ct=qx.locale.Date.getMonthName(bA,cB,cx,bv);
}else if(cA==4){ct=qx.locale.Date.getMonthName(bz,cB,cx,bv);
}break;
case ba:ct=(cC<12)?qx.locale.Date.getAmMarker(cx):qx.locale.Date.getPmMarker(cx);
break;
case K:ct=this.__wD(cC,cA);
break;
case M:ct=this.__wD((cC==0)?24:cC,cA);
break;
case u:ct=this.__wD(cC%12,cA);
break;
case bV:ct=this.__wD(((cC%12)==0)?12:(cC%12),cA);
break;
case W:ct=this.__wD(cy,cA);
break;
case bT:ct=this.__wD(cD,cA);
break;
case H:ct=this.__wD(cF,cA);
break;
case bG:if(cA==1){ct=f+((cu>0)?bc:bL)+this.__wD(Math.abs(cs))+a+this.__wD(cz,2);
}else if(cA==2){ct=cw.MEDIUM_TIMEZONE_NAMES[cs];
}else if(cA==3){ct=cw.FULL_TIMEZONE_NAMES[cs];
}break;
case bM:ct=((cu>0)?bc:bL)+this.__wD(Math.abs(cs),2)+this.__wD(cz,2);
break;
}cG+=ct;
}}return cG;
},parse:function(cK){this.__wI();
var cQ=this.__wA.regex.exec(cK);

if(cQ==null){throw new Error("Date string '"+cK+"' does not match the date format: "+this.__wz);
}var cL={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var cM=1;

for(var i=0;i<this.__wA.usedRules.length;i++){var cO=this.__wA.usedRules[i];
var cN=cQ[cM];

if(cO.field!=null){cL[cO.field]=parseInt(cN,10);
}else{cO.manipulator(cL,cN);
}cM+=(cO.groups==null)?1:cO.groups;
}var cP=new Date(cL.year,cL.month,cL.day,(cL.ispm)?(cL.hour+12):cL.hour,cL.min,cL.sec,cL.ms);

if(cL.month!=cP.getMonth()||cL.year!=cP.getFullYear()){throw new Error("Error parsing date '"+cK+"': the value for day or month is too large");
}return cP;
},__wH:function(){if(this.__wC!=null){return;
}this.__wC=[];
var cV;
var cT=0;
var cX=bB;
var cR=this.__wz;
var cU=bj;
var i=0;

while(i<cR.length){var cW=cR.charAt(i);

switch(cU){case bb:if(cW==bh){if(i+1>=cR.length){i++;
break;
}var cS=cR.charAt(i+1);

if(cS==bh){cX+=cW;
i++;
}else{i++;
cU=V;
}}else{cX+=cW;
i++;
}break;
case bu:if(cW==cV){cT++;
i++;
}else{this.__wC.push({type:bu,character:cV,size:cT});
cV=null;
cT=0;
cU=bj;
}break;
default:if((cW>=ba&&cW<=bG)||(cW>=bS&&cW<=bM)){cV=cW;
cU=bu;
}else if(cW==bh){if(i+1>=cR.length){cX+=cW;
i++;
break;
}var cS=cR.charAt(i+1);

if(cS==bh){cX+=cW;
i++;
}i++;
cU=bb;
}else{cU=bj;
}
if(cU!=bj){if(cX.length>0){this.__wC.push({type:bi,text:cX});
cX=bB;
}}else{cX+=cW;
i++;
}break;
}}if(cV!=null){this.__wC.push({type:bu,character:cV,size:cT});
}else if(cX.length>0){this.__wC.push({type:bi,text:cX});
}},__wI:function(){if(this.__wA!=null){return ;
}var dc=this.__wz;
this.__wJ();
this.__wH();
var di=[];
var de=bk;

for(var da=0;da<this.__wC.length;da++){var dj=this.__wC[da];

if(dj.type==bi){de+=qx.lang.String.escapeRegexpChars(dj.text);
}else{var db=dj.character;
var df=dj.size;
var dd;

for(var dk=0;dk<this.__wB.length;dk++){var dg=this.__wB[dk];

if(db==dg.pattern.charAt(0)&&df==dg.pattern.length){dd=dg;
break;
}}if(dd==null){var dh=bB;

for(var i=0;i<df;i++){dh+=db;
}throw new Error("Malformed date format: "+dc+". Wildcard "+dh+" is not supported");
}else{di.push(dd);
de+=dd.regex;
}}}de+=x;
var cY;

try{cY=new RegExp(de);
}catch(dl){throw new Error("Malformed date format: "+dc);
}this.__wA={regex:cY,"usedRules":di,pattern:de};
},__wJ:function(){var dw=qx.util.format.DateFormat;
var dz=qx.lang.String;

if(this.__wB!=null){return ;
}var dx=this.__wB=[];
var dn=qx.locale.Date.getAmMarker(this.__wy).toString()||dw.AM_MARKER;
var dE=qx.locale.Date.getPmMarker(this.__wy).toString()||dw.PM_MARKER;
var ds=function(dI,dJ){dJ=parseInt(dJ,10);

if(dJ<dw.ASSUME_YEAR_2000_THRESHOLD){dJ+=2000;
}else if(dJ<100){dJ+=1900;
}dI.year=dJ;
};
var du=function(dK,dL){dK.month=parseInt(dL,10)-1;
};
var dq=function(dM,dN){var dO=qx.locale.Date.getPmMarker(this.__wy).toString()||dw.PM_MARKER;
dM.ispm=(dN==dO);
};
var dG=function(dP,dQ){dP.hour=parseInt(dQ,10)%24;
};
var dp=function(dR,dS){dR.hour=parseInt(dS,10)%12;
};
var dB=function(dT,dU){return;
};
var dH=qx.locale.Date.getMonthNames(bA,this.__wy,bC);

for(var i=0;i<dH.length;i++){dH[i]=dz.escapeRegexpChars(dH[i].toString());
}var dr=function(dV,dW){dW=dz.escapeRegexpChars(dW);
dV.month=dH.indexOf(dW);
};
var dy=qx.locale.Date.getMonthNames(bz,this.__wy,bC);

for(var i=0;i<dy.length;i++){dy[i]=dz.escapeRegexpChars(dy[i].toString());
}var dC=function(dX,dY){dY=dz.escapeRegexpChars(dY);
dX.month=dy.indexOf(dY);
};
var dm=qx.locale.Date.getDayNames(bd,this.__wy,bC);

for(var i=0;i<dm.length;i++){dm[i]=dz.escapeRegexpChars(dm[i].toString());
}var dF=function(ea,eb){eb=dz.escapeRegexpChars(eb);
ea.month=dm.indexOf(eb);
};
var dD=qx.locale.Date.getDayNames(bA,this.__wy,bC);

for(var i=0;i<dD.length;i++){dD[i]=dz.escapeRegexpChars(dD[i].toString());
}var dt=function(ec,ed){ed=dz.escapeRegexpChars(ed);
ec.month=dD.indexOf(ed);
};
var dA=qx.locale.Date.getDayNames(bz,this.__wy,bC);

for(var i=0;i<dA.length;i++){dA[i]=dz.escapeRegexpChars(dA[i].toString());
}var dv=function(ee,ef){ef=dz.escapeRegexpChars(ef);
ee.month=dA.indexOf(ef);
};
dx.push({pattern:bR,regex:P,manipulator:ds});
dx.push({pattern:bQ,regex:bp,manipulator:ds});
dx.push({pattern:q,regex:bs,manipulator:ds});
dx.push({pattern:j,regex:Q,manipulator:ds});
dx.push({pattern:D,regex:X,manipulator:ds});
dx.push({pattern:r,regex:l,manipulator:ds});
dx.push({pattern:bX,regex:p,manipulator:ds});
dx.push({pattern:A,regex:bD,manipulator:du});
dx.push({pattern:n,regex:bD,manipulator:du});
dx.push({pattern:C,regex:by+dH.join(bw)+bx,manipulator:dr});
dx.push({pattern:I,regex:by+dy.join(bw)+bx,manipulator:dC});
dx.push({pattern:g,regex:bD,field:bF});
dx.push({pattern:O,regex:bD,field:bF});
dx.push({pattern:bO,regex:by+dm.join(bw)+bx,manipulator:dF});
dx.push({pattern:y,regex:by+dD.join(bw)+bx,manipulator:dt});
dx.push({pattern:bl,regex:by+dA.join(bw)+bx,manipulator:dv});
dx.push({pattern:d,regex:by+dn+bw+dE+bx,manipulator:dq});
dx.push({pattern:bP,regex:bD,field:bg});
dx.push({pattern:k,regex:bD,field:bg});
dx.push({pattern:bW,regex:bD,manipulator:dG});
dx.push({pattern:R,regex:bD,manipulator:dG});
dx.push({pattern:br,regex:bD,field:bg});
dx.push({pattern:c,regex:bD,field:bg});
dx.push({pattern:t,regex:bD,manipulator:dp});
dx.push({pattern:bo,regex:bD,manipulator:dp});
dx.push({pattern:bm,regex:bD,field:bn});
dx.push({pattern:F,regex:bD,field:bn});
dx.push({pattern:J,regex:bD,field:bE});
dx.push({pattern:B,regex:bD,field:bE});
dx.push({pattern:o,regex:bf,field:be});
dx.push({pattern:Y,regex:bf,field:be});
dx.push({pattern:bU,regex:bf,field:be});
dx.push({pattern:bt,regex:e,manipulator:dB});
dx.push({pattern:E,regex:L,manipulator:dB});
}},destruct:function(){this.__wC=this.__wA=this.__wB=null;
}});
})();
(function(){var k="_",j="format",h="thu",g="sat",f="cldr_day_",e="cldr_month_",d="wed",c="fri",b="tue",a="mon",B="sun",A="short",z="HH:mm",y="HHmmsszz",x="HHmm",w="HHmmss",v="cldr_date_format_",u="HH:mm:ss zz",t="full",s="cldr_pm",q="long",r="medium",o="cldr_am",p="qx.locale.Date",m="cldr_date_time_format_",n="cldr_time_format_",l="HH:mm:ss";
qx.Class.define(p,{statics:{__wK:qx.locale.Manager.getInstance(),getAmMarker:function(C){return this.__wK.localize(o,[],C);
},getPmMarker:function(D){return this.__wK.localize(s,[],D);
},getDayNames:function(length,E,F){var F=F?F:j;
{};
var H=[B,a,b,d,h,c,g];
var I=[];

for(var i=0;i<H.length;i++){var G=f+F+k+length+k+H[i];
I.push(this.__wK.localize(G,[],E));
}return I;
},getDayName:function(length,J,K,L){var L=L?L:j;
{};
var N=[B,a,b,d,h,c,g];
var M=f+L+k+length+k+N[J];
return this.__wK.localize(M,[],K);
},getMonthNames:function(length,O,P){var P=P?P:j;
{};
var R=[];

for(var i=0;i<12;i++){var Q=e+P+k+length+k+(i+1);
R.push(this.__wK.localize(Q,[],O));
}return R;
},getMonthName:function(length,S,T,U){var U=U?U:j;
{};
var V=e+U+k+length+k+(S+1);
return this.__wK.localize(V,[],T);
},getDateFormat:function(W,X){{};
var Y=v+W;
return this.__wK.localize(Y,[],X);
},getDateTimeFormat:function(ba,bb,bc){var be=m+ba;
var bd=this.__wK.localize(be,[],bc);

if(bd==be){bd=bb;
}return bd;
},getTimeFormat:function(bf,bg){{};
var bi=n+bf;
var bh=this.__wK.localize(bi,[],bg);

if(bh!=bi){return bh;
}
switch(bf){case A:case r:return qx.locale.Date.getDateTimeFormat(x,z);
case q:return qx.locale.Date.getDateTimeFormat(w,l);
case t:return qx.locale.Date.getDateTimeFormat(y,u);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(bj){var bk={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bl=qx.locale.Date._getTerritory(bj);
return bk[bl]!=null?bk[bl]:1;
},getWeekendStart:function(bm){var bo={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var bn=qx.locale.Date._getTerritory(bm);
return bo[bn]!=null?bo[bn]:6;
},getWeekendEnd:function(bp){var bq={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var br=qx.locale.Date._getTerritory(bp);
return bq[br]!=null?bq[br]:0;
},isWeekend:function(bs,bt){var bv=qx.locale.Date.getWeekendStart(bt);
var bu=qx.locale.Date.getWeekendEnd(bt);

if(bu>bv){return ((bs>=bv)&&(bs<=bu));
}else{return ((bs>=bv)||(bs<=bu));
}},_getTerritory:function(bw){if(bw){var bx=bw.split(k)[1]||bw;
}else{bx=this.__wK.getTerritory()||this.__wK.getLanguage();
}return bx.toUpperCase();
}}});
})();
(function(){var a="qx.ui.progressive.renderer.table.cell.String";
qx.Class.define(a,{extend:qx.ui.progressive.renderer.table.cell.Abstract,construct:function(){qx.ui.progressive.renderer.table.cell.Abstract.call(this);
},members:{_getContentHtml:function(b){return qx.bom.String.escape(b.cellData);
}}});
})();
(function(){var a="qx.ui.progressive.renderer.table.cell.Html";
qx.Class.define(a,{extend:qx.ui.progressive.renderer.table.cell.Abstract});
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
},FORMAT_STACK:null,escapeHTML:function(bb){return String(bb).replace(/[<>&"']/g,this.__vw);
},__vw:function(bc){var bd={"<":s,">":F,"&":o,"'":p,'"':u};
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
(function(){var d="debug",c="log",b="qx.log.appender.Native",a="qx.client";
qx.Class.define(b,{statics:{process:qx.core.Variant.select(a,{"gecko":function(e){if(window.console&&console.firebug){console[e.level].call(console,qx.log.appender.Util.toText(e));
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
this.__HV=X;
this.__HW=X.childNodes[1];
this.__HX=X.childNodes[2].firstChild;
this.__Id();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__Ie,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__HW.innerHTML=k;
},process:function(bb){this.__HW.appendChild(qx.log.appender.Util.toHtml(bb));
this.__HY();
},__HY:function(){this.__HW.scrollTop=this.__HW.scrollHeight;
},__Ia:true,toggle:function(){if(!this.__HV){this.init();
}else if(this.__HV.style.display==h){this.show();
}else{this.__HV.style.display=h;
}},show:function(){if(!this.__HV){this.init();
}else{this.__HV.style.display=K;
this.__HW.scrollTop=this.__HW.scrollHeight;
}},__Ib:[],execute:function(){var be=this.__HX.value;

if(be==k){return;
}
if(be==u){return this.clear();
}var bc=document.createElement(V);
bc.innerHTML=qx.log.appender.Util.escapeHTML(C+be);
bc.className=U;
this.__Ib.push(be);
this.__Ic=this.__Ib.length;
this.__HW.appendChild(bc);
this.__HY();

try{var bd=window.eval(be);
}catch(bf){qx.log.Logger.error(bf);
}
if(bd!==undefined){qx.log.Logger.debug(bd);
}},__Id:function(e){this.__HW.style.height=(this.__HV.clientHeight-this.__HV.firstChild.offsetHeight-this.__HV.lastChild.offsetHeight)+c;
},__Ie:function(e){var bh=e.getKeyIdentifier();
if((bh==H)||(bh==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__HV){return;
}if(!qx.dom.Hierarchy.contains(this.__HV,e.getTarget())){return;
}if(bh==d&&this.__HX.value!=k){this.execute();
this.__HX.value=k;
}if(bh==i||bh==E){this.__Ic+=bh==i?-1:1;
this.__Ic=Math.min(Math.max(0,this.__Ic),this.__Ib.length);
var bg=this.__Ib[this.__Ic];
this.__HX.value=bg||k;
this.__HX.select();
}}},defer:function(bi){qx.event.Registration.addListener(document.documentElement,g,bi.__Ie,bi);
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
(function(){var cl="window",ck="",cj="childNodes",ci="nodeName",ch="nodeType",cg="document",cf="function",ce="firstChild",cd="qx.client",cc="external",bt="location",bs="[native code]",br="lastChild",bq="scrollY",bp="scrollWidth",bo="defaultView",bn="closed",bm="content",bl="qx",bk="</td><td>",cs="filters",ct="locationbar",cq="screenX",cr="previousSibling",co="scrollX",cp="Global namespace is polluted by the following unknown objects:\n\n",cm="doctype",cn="parent",cu="qx.dev.Pollution",cv="outerText",bR="applets",bQ="parentElement",bT="designMode",bS="cookie",bV="fullScreen",bU="links",bX="pageXOffset",bW="frames",bP="documentElement",bO="screenY",a="statusbar",b="history",c="sun",d="pkcs11",e="java",f="style",g="innerWidth",h="plugins",j="implementation",k="clientWidth",cz="compatMode",cy="length",cx="textContent",cw="controllers",cD="netscape",cC="self",cB="domConfig",cA="attributes",cF="clientHeight",cE="outerHeight",J="parentNode",K="innerHeight",H="title",I="ownerDocument",N="<table>",O="globalStorage",L="Global namespace is not polluted by any unknown objects.",M="toolbar",F="outerHTML",G="crypto",s="forms",r="scrollbars",u="frameElement",t="Components",o="body",n="clientInformation",q="offscreenBuffering",p="embeds",m="localName",l="scrollTop",T="isMultiLine",U="scrollLeft",V="images",W="event",P="offsetHeight",Q="scrollMaxY",R="sessionStorage",S="screen",X="name",Y="offsetLeft",C="console",B="XMLHttpRequest",A="mshtml",z="nextSibling",y="innerText",x="menubar",w="scopeName",v="top",E="outerWidth",D=": ",ba="\n",bb="status",bc="contentEditable",bd="anchors",be="</table>",bf="<tr style='vertical-align:top'><td>",bg="scrollMaxX",bh="screenTop",bi="defaultStatus",bj="styleSheets",bx="className",bw="personalbar",bv="</td></tr>",bu="currentStyle",bB="directories",bA="navigator",bz="pageYOffset",by="screenLeft",bD="opener",bC="scrollHeight",bK="__firebug__",bL="Option",bI="innerHTML",bJ="tabIndex",bG="offsetTop",bH="[function]",bE="clipboardData",bF="Packages",bM="tagName",bN="offsetWidth",ca="mshtml|opera",bY="undefined",cb="Image";
qx.Class.define(cu,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bl,e,c,bF,bK,t,cw,R,O,C,W,q,bE,n,bL,cb,cc,bh,by,cy,cl,cg,bt,bA,cD,cn,bW,v,r,X,co,bq,cC,S,b,bm,x,M,ct,bw,a,bB,bn,G,d,bD,bb,bi,g,K,E,cE,cq,bO,bX,bz,bg,Q,bV,u,B],"document":[cB,bt,cz,j,bo,H,o,bj,bP,ci,ch,ce,br,cm,V,bR,bU,s,bd,bS,p,h,bT,cj],"body":[cx,bI,F,y,cv,w,bQ,bM,cs,bc,cg,bu,T,cF,k,br,ce,bG,Y,bN,P,bJ,bx,cA,cr,z,I,m,cj,J,ch,ci,f,l,U,bp,bC]},getInfo:function(cG){var cH=qx.dev.Pollution.getTextList(cG||cl);

if(cH){return cp+cH;
}else{return L;
}},extract:function(cI){var cK=[];
var cJ=qx.dev.Pollution.ignore[cI];
if(qx.core.Variant.isSet(cd,A)){if(cI==cl){cJ=cJ.slice(0);

for(var cL=0;cL<window.length;cL++){cJ.push(ck+cL);
}}}var cM=qx.dev.Pollution.names[cI];

for(var cN in cM){try{if(qx.core.Variant.isSet(cd,ca)){if(cI==cl&&cN==cc){continue;
}}if(typeof cM[cN]==bY||cM[cN]===null){continue;
}if(typeof cM[cN]==cf&&cM[cN].toString().indexOf(bs)!=-1){continue;
}if(typeof cM[cN].constructor==cf){if((cM[cN].constructor.toString().indexOf(bs)!=-1)||(cM[cN].constructor.toString().indexOf(bH)!=-1)){continue;
}}if(qx.lang.Array.contains(cJ,cN)){continue;
}}catch(cO){continue;
}cK.push({"key":cN,"value":cM[cN]});
}return cK;
},getHtmlTable:function(cP){var cR=[];
var cQ=bf;
var cT=bk;
var cU=bv;
cR.push(N);
var cS=this.extract(cP);

for(var i=0;i<cS.length;i++){cR.push(cQ+cS[i].key+cT+cS[i].value+cU);
}cR.push(be);
return cR.join(ck);
},getTextList:function(cV){var cX=[];
var cY=D;
var da=ba;
var cW=this.extract(cV);

for(var i=0;i<cW.length;i++){cX.push(cW[i].key+cY+cW[i].value+da);
}return cX.join(ck);
}}});
})();
(function(){var dd="button",dc="widget",db="background",da="atom",cY="inset-thin",cX="outset",cW="text-disabled",cV="text-selected",cU="inset",cT="image",bW="groupbox",bV="cell",bU="background-selected",bT="focused-inset",bS="tooltip",bR="label",bQ="white",bP="menu-button",bO="middle",bN="decoration/arrows/down.gif",dk="spinner",dl="list",di="button-hovered",dj="bold",dg="checkbox",dh="toolbar-button",de="button-frame",df="popup",dm="textfield",dn="background-invalid",cC="background-disabled",cB="shadow-small",cE="invalid",cD="scrollbar",cG="center",cF="datechooser/button",cI="button-abandoned",cH="background-light",cA="main",cz="date-chooser",k="date-chooser-title",l="radiobutton",m="default",n="combobox",o="background-field",p="outset-thin",q="icon/16/places/folder-open.png",r="menu-slidebar-button",s="scrollbar/button",t="combobox/button",dC="decoration/arrows/right.gif",dB="decoration/arrows/up.gif",dA="text",dz="decoration/arrows/down-small.gif",dG="checkbox-undetermined",dF="icon/16/places/folder.png",dE="tree-folder",dD="slidebar/button-forward",dI="icon/16/mimetypes/text-plain.png",dH="right-top",bg="table-header-cell",bh="button-checked",be=".png",bf="background-focused",bk="datechooser",bl="slidebar/button-backward",bi="selectbox",bj="treevirtual-folder",bc="checkbox-checked",bd="decoration/form/",L="decoration/tree/minus.gif",K="",N="decoration/tree/plus.gif",M="-invalid",H="decoration/arrows/left.gif",G="table-row-background-even",J="decoration/treevirtual/cross_minus.gif",I="radiobutton-hovered",F="keyboard-focus",E="decoration/treevirtual/start_plus.gif",bq="decoration/cursors/",br="icon/16/actions/dialog-ok.png",bs="slidebar",bt="#BABABA",bm="table-scroller-focus-indicator",bn="move-frame",bo="nodrop",bp="date-chooser-selected",bu="tabview-page-button-left",bv="decoration/arrows/up-small.gif",W="move",V="radiobutton-checked-focused",U="qx.theme.classic.Appearance",T="decoration/menu/checkbox.gif",S="tooltip-error",R="right",Q="decoration/arrows/rewind.gif",P="table-scroller-header",bb="table-pane",ba="table-header-cell-hover",bw="focused-outset",bx="checkbox-hovered",by="icon/16/actions/dialog-cancel.png",bz="menu-slidebar",bA="datechooser-date-pane",bB="background-pane",bC="decoration/treevirtual/cross_plus.gif",bD="qx/icon/Oxygen/16/actions/window-close.png",bE="datechooser-week",bF="icon/16/apps/office-calendar.png",ce="datechooser-weekday",cd="table-header-border",cc="window-active-caption-text",cb="window-active-caption",ci="icon",ch="checkbox-checked-focused",cg="toolbar-separator",cf="groove",cl="checkbox-pressed",ck="tooltip-invalid",cv="decoration/window/restore.gif",cw="decoration/menu/checkbox-invert.gif",ct="scrollarea",cu="window-inactive-caption-text",cr="best-fit",cs="up.gif",cp="checkbox-undetermined-hovered",cq="keep-align",cx="tabview-page-button-right",cy="tabview-page-button-top",cM="tabview-page-button-bottom",cL="row-layer",cO="decoration/menu/radiobutton.gif",cN="decoration/arrows/",cQ="decoration/table/descending.png",cP="progressbar",cS="tooltip-text",cR="checkbox-checked-hovered",cK="left.gif",cJ="decoration/arrows/up-invert.gif",dv="alias",dw="decoration/arrows/right-invert.gif",dx="radiobutton-checked-disabled",dy="lead-item",dr="checkbox-focused",ds="border-dark",dt="decoration/treevirtual/end_plus.gif",du="decoration/treevirtual/start_minus.gif",dp="radiobutton-checked-hovered",dq="decoration/window/minimize.gif",j="table-header-cell-hovered",i="down.gif",h="decoration/treevirtual/end.gif",g="decoration/treevirtual/end_minus.gif",f="window-inactive-caption",e="decoration/menu/radiobutton-invert.gif",d="text-placeholder",c="slider",b="decoration/table/select-column-order.png",a="decoration/arrows/next.gif",w="table-header",x="decoration/treevirtual/only_minus.gif",u="datechooser-week-header",v="decoration/window/maximize.gif",A="decoration/treevirtual/only_plus.gif",B="checkbox-checked-pressed",y="decoration/arrows/down-invert.gif",z="menu-separator",C="decoration/splitpane/knob-vertical.png",D=".gif",cm="decoration/arrows/forward.gif",cj="radiobutton-checked-pressed",co="table-statusbar",cn="radiobutton-pressed",bY="copy",bX="table-row-background-selected",O="radiobutton-focused",ca="decoration/splitpane/knob-horizontal.png",Y="right.gif",X="radiobutton-checked",bG="decoration/treevirtual/cross.gif",bH="decoration/table/ascending.png",bI="decoration/treevirtual/line.gif",bJ="checkbox-undetermined-focused",bK="toolbar-part-handle",bL="decoration/window/close.gif",bM="icon/16/actions/view-refresh.png";
qx.Theme.define(U,{appearances:{"widget":{},"label":{style:function(dJ){return {textColor:dJ.disabled?cW:undefined};
}},"image":{style:function(dK){return {opacity:!dK.replacement&&dK.disabled?0.3:undefined};
}},"atom":{},"atom/label":bR,"atom/icon":cT,"root":{style:function(dL){return {backgroundColor:db,textColor:dA,font:m};
}},"popup":{style:function(dM){return {decorator:cA,backgroundColor:bB,shadow:cB};
}},"tooltip":{include:df,style:function(dN){return {backgroundColor:bS,textColor:cS,decorator:bS,shadow:cB,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":da,"tooltip-error":{include:bS,style:function(dO){return {textColor:cV,showTimeout:100,hideTimeout:10000,decorator:S,font:dj,backgroundColor:ck};
}},"tooltip-error/atom":da,"iframe":{style:function(dP){return {backgroundColor:bQ,decorator:cU};
}},"move-frame":{style:function(dQ){return {decorator:cA};
}},"resize-frame":bn,"dragdrop-cursor":{style:function(dR){var dS=bo;

if(dR.copy){dS=bY;
}else if(dR.move){dS=W;
}else if(dR.alias){dS=dv;
}return {source:bq+dS+D,position:dH,offset:[2,16,2,6]};
}},"button-frame":{alias:da,style:function(dT){if(dT.pressed||dT.abandoned||dT.checked){var dV=!dT.inner&&dT.focused?bT:cU;
var dU=[4,3,2,5];
}else{var dV=!dT.inner&&dT.focused?bw:cX;
var dU=[3,4];
}return {backgroundColor:dT.abandoned?cI:dT.hovered?di:dT.checked?bh:dd,decorator:dV,padding:dU};
}},"button":{alias:de,include:de,style:function(dW){return {center:true};
}},"hover-button":{alias:da,include:da,style:function(dX){return {backgroundColor:dX.hovered?bU:undefined,textColor:dX.hovered?cV:undefined};
}},"splitbutton":{},"splitbutton/button":dd,"splitbutton/arrow":{alias:dd,include:dd,style:function(dY){return {icon:bN};
}},"scrollarea/corner":{style:function(){return {backgroundColor:db};
}},"scrollarea":dc,"scrollarea/pane":dc,"scrollarea/scrollbar-x":cD,"scrollarea/scrollbar-y":cD,"list":{alias:ct,style:function(ea){var ee;
var ec=!!ea.focused;
var ed=!!ea.invalid;
var eb=!!ea.disabled;

if(ed&&!eb){ee=dn;
}else if(ec&&!ed&&!eb){ee=bf;
}else if(eb){ee=cC;
}else{ee=bQ;
}return {decorator:ea.focused?bT:cU,backgroundColor:ee};
}},"listitem":{alias:da,style:function(ef){return {gap:4,padding:ef.lead?[2,4]:[3,5],backgroundColor:ef.selected?bU:undefined,textColor:ef.selected?cV:undefined,decorator:ef.lead?dy:undefined};
}},"textfield":{style:function(eg){var el;
var ej=!!eg.focused;
var ek=!!eg.invalid;
var eh=!!eg.disabled;

if(ek&&!eh){el=dn;
}else if(ej&&!ek&&!eh){el=bf;
}else if(eh){el=cC;
}else{el=o;
}var ei;

if(eg.disabled){ei=cW;
}else if(eg.showingPlaceholder){ei=d;
}else{ei=undefined;
}return {decorator:eg.focused?bT:cU,padding:[2,3],textColor:ei,backgroundColor:el};
}},"textarea":dm,"checkbox":{alias:da,style:function(em){var eo;
if(em.checked){if(em.disabled){eo=bc;
}else if(em.focused){eo=ch;
}else if(em.pressed){eo=B;
}else if(em.hovered){eo=cR;
}else{eo=bc;
}}else if(em.undetermined){if(em.disabled){eo=dG;
}else if(em.focused){eo=bJ;
}else if(em.hovered){eo=cp;
}else{eo=dG;
}}else if(!em.disabled){if(em.focused){eo=dr;
}else if(em.pressed){eo=cl;
}else if(em.hovered){eo=bx;
}}eo=eo||dg;
var en=em.invalid&&!em.disabled?M:K;
return {icon:bd+eo+en+be,gap:6};
}},"radiobutton":{alias:dg,include:dg,style:function(ep){var er;

if(ep.checked&&ep.focused){er=V;
}else if(ep.checked&&ep.disabled){er=dx;
}else if(ep.checked&&ep.pressed){er=cj;
}else if(ep.checked&&ep.hovered){er=dp;
}else if(ep.checked){er=X;
}else if(ep.focused){er=O;
}else if(ep.pressed){er=cn;
}else if(ep.hovered){er=I;
}else{er=l;
}var eq=ep.invalid&&!ep.disabled?M:K;
return {icon:bd+er+eq+be,shadow:undefined};
}},"spinner":{style:function(es){return {decorator:es.focused?bT:cU,textColor:es.disabled?cW:undefined};
}},"spinner/textfield":{include:dm,style:function(et){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:dd,include:dd,style:function(eu){return {icon:bv,padding:eu.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:eu.hovered?di:dd};
}},"spinner/downbutton":{alias:dd,include:dd,style:function(ev){return {icon:dz,padding:ev.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:ev.hovered?di:dd};
}},"datefield":n,"datefield/button":{alias:t,include:t,style:function(ew){return {icon:bF,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:bk,include:bk,style:function(ex){return {decorator:ex.focused?bT:cU};
}},"groupbox":{style:function(ey){return {backgroundColor:db};
}},"groupbox/legend":{alias:da,style:function(ez){return {backgroundColor:db,textColor:ez.invalid?cE:undefined,paddingRight:4,paddingLeft:4,marginRight:10,marginLeft:10};
}},"groupbox/frame":{style:function(eA){return {padding:[12,9],decorator:cf};
}},"check-groupbox":bW,"check-groupbox/legend":{alias:dg,include:dg,style:function(eB){return {backgroundColor:db,textColor:eB.invalid?cE:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"radio-groupbox":bW,"radio-groupbox/legend":{alias:l,include:l,style:function(eC){return {backgroundColor:db,textColor:eC.invalid?cE:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"toolbar":{style:function(eD){return {backgroundColor:db};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(eE){return {decorator:bK,backgroundColor:db,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(eF){return {margin:[3,2],decorator:cg};
}},"toolbar-button":{alias:da,style:function(eG){if(eG.pressed||eG.checked||eG.abandoned){var eI=cY;
var eH=[3,2,1,4];
}else if(eG.hovered){var eI=p;
var eH=[2,3];
}else{var eI=undefined;
var eH=[3,4];
}return {cursor:m,decorator:eI,padding:eH,backgroundColor:eG.abandoned?cI:eG.checked?cH:dd};
}},"toolbar-menubutton":{alias:dh,include:dh,style:function(eJ){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:cT,include:cT,style:function(eK){return {source:dz};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":dh,"toolbar-splitbutton/arrow":{alias:dh,include:dh,style:function(eL){return {icon:bN};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dd,include:dd,style:function(eM){return {icon:eM.vertical?bN:a};
}},"slidebar/button-backward":{alias:dd,include:dd,style:function(eN){return {icon:eN.vertical?dB:H};
}},"tabview":{},"tabview/bar":{alias:bs,style:function(eO){var eP=0,eS=0,eQ=0,eR=0;

if(eO.barTop){eQ=-2;
}else if(eO.barBottom){eP=-2;
}else if(eO.barRight){eR=-2;
}else{eS=-2;
}return {marginBottom:eQ,marginTop:eP,marginLeft:eR,marginRight:eS};
}},"tabview/bar/button-forward":{include:dD,alias:dD,style:function(eT){if(eT.barTop||eT.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bl,alias:bl,style:function(eU){if(eU.barTop||eU.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(eV){return {backgroundColor:db,decorator:cX,padding:10};
}},"tabview-page":dc,"tabview-page/button":{style:function(eW){var fg;
var fe=0,fc=0,eY=0,fb=0;

if(eW.barTop||eW.barBottom){var fa=2,eX=2,fd=6,ff=6;
}else{var fa=6,eX=6,fd=6,ff=6;
}
if(eW.barTop){fg=cy;
}else if(eW.barRight){fg=cx;
}else if(eW.barBottom){fg=cM;
}else{fg=bu;
}
if(eW.checked){if(eW.barTop||eW.barBottom){fd+=2;
ff+=2;
}else{fa+=2;
eX+=2;
}}else{if(eW.barTop||eW.barBottom){eY+=2;
fe+=2;
}else if(eW.barLeft||eW.barRight){fc+=2;
fb+=2;
}}
if(eW.checked){if(!eW.firstTab){if(eW.barTop||eW.barBottom){fb=-4;
}else{fe=-4;
}}
if(!eW.lastTab){if(eW.barTop||eW.barBottom){fc=-4;
}else{eY=-4;
}}}return {zIndex:eW.checked?10:5,decorator:fg,backgroundColor:db,padding:[fa,ff,eX,fd],margin:[fe,fc,eY,fb]};
}},"tabview-page/button/label":{alias:bR,style:function(fh){return {padding:[0,1,0,1],margin:fh.focused?0:1,decorator:fh.focused?F:undefined};
}},"tabview-page/button/icon":cT,"tabview-page/button/close-button":{alias:da,style:function(fi){return {icon:bD};
}},"scrollbar":{},"scrollbar/slider":{alias:c,style:function(fj){return {backgroundColor:cH};
}},"scrollbar/slider/knob":{include:de,style:function(fk){return {height:14,width:14,minHeight:fk.horizontal?undefined:9,minWidth:fk.horizontal?9:undefined};
}},"scrollbar/button":{alias:dd,include:dd,style:function(fl){var fm;

if(fl.up||fl.down){if(fl.pressed||fl.abandoned||fl.checked){fm=[5,2,3,4];
}else{fm=[4,3];
}}else{if(fl.pressed||fl.abandoned||fl.checked){fm=[4,3,2,5];
}else{fm=[3,4];
}}var fn=cN;

if(fl.left){fn+=cK;
}else if(fl.right){fn+=Y;
}else if(fl.up){fn+=cs;
}else{fn+=i;
}return {padding:fm,icon:fn};
}},"scrollbar/button-begin":s,"scrollbar/button-end":s,"slider":{style:function(fo){var fp;

if(fo.disabled){fp=cC;
}else if(fo.invalid){fp=dn;
}else if(fo.focused){fp=cH;
}else{fp=o;
}return {backgroundColor:fp,decorator:fo.focused?bT:cU};
}},"slider/knob":{include:de,style:function(fq){return {width:14,height:14,decorator:cX};
}},"tree-folder/open":{style:function(fr){return {source:fr.opened?L:N};
}},"tree-folder":{style:function(fs){return {padding:[2,3,2,0],icon:fs.opened?q:dF,iconOpened:q};
}},"tree-folder/icon":{style:function(ft){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(fu){return {padding:[1,2],backgroundColor:fu.selected?bU:undefined,textColor:fu.selected?cV:undefined};
}},"tree-file":{include:dE,alias:dE,style:function(fv){return {icon:dI};
}},"tree":{include:dl,alias:dl,style:function(fw){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(fx){return {decorator:cA};
}},"treevirtual-folder":{style:function(fy){return {icon:(fy.opened?q:dF)};
}},"treevirtual-file":{include:bj,alias:bj,style:function(fz){return {icon:dI};
}},"treevirtual-line":{style:function(fA){return {icon:bI};
}},"treevirtual-contract":{style:function(fB){return {icon:L};
}},"treevirtual-expand":{style:function(fC){return {icon:N};
}},"treevirtual-only-contract":{style:function(fD){return {icon:x};
}},"treevirtual-only-expand":{style:function(fE){return {icon:A};
}},"treevirtual-start-contract":{style:function(fF){return {icon:du};
}},"treevirtual-start-expand":{style:function(fG){return {icon:E};
}},"treevirtual-end-contract":{style:function(fH){return {icon:g};
}},"treevirtual-end-expand":{style:function(fI){return {icon:dt};
}},"treevirtual-cross-contract":{style:function(fJ){return {icon:J};
}},"treevirtual-cross-expand":{style:function(fK){return {icon:bC};
}},"treevirtual-end":{style:function(fL){return {icon:h};
}},"treevirtual-cross":{style:function(fM){return {icon:bG};
}},"window":{style:function(fN){return {contentPadding:[10,10,10,10],backgroundColor:db,decorator:fN.maximized?undefined:cX,shadow:fN.maximized?undefined:cB};
}},"window/pane":{},"window/captionbar":{style:function(fO){return {padding:1,backgroundColor:fO.active?cb:f,textColor:fO.active?cc:cu};
}},"window/icon":{style:function(fP){return {marginRight:4};
}},"window/title":{style:function(fQ){return {cursor:m,font:dj,marginRight:20,alignY:bO};
}},"window/minimize-button":{include:dd,alias:dd,style:function(fR){return {icon:dq,padding:fR.pressed||fR.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:dd,alias:dd,style:function(fS){return {icon:cv,padding:fS.pressed||fS.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:dd,alias:dd,style:function(fT){return {icon:v,padding:fT.pressed||fT.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:dd,alias:dd,style:function(fU){return {marginLeft:2,icon:bL,padding:fU.pressed||fU.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(fV){return {decorator:cY,padding:[2,6]};
}},"window/statusbar-text":bR,"resizer":{style:function(fW){return {decorator:cX};
}},"splitpane":{},"splitpane/splitter":{style:function(fX){return {backgroundColor:db};
}},"splitpane/splitter/knob":{style:function(fY){return {source:fY.horizontal?ca:C,padding:2};
}},"splitpane/slider":{style:function(ga){return {backgroundColor:ds,opacity:0.3};
}},"selectbox":{include:de,style:function(gb){var gc=dd;

if(gb.invalid&&!gb.disabled){gc=dn;
}else if(gb.abandoned){gc=cI;
}else if(!gb.abandoned&&gb.hovered){gc=di;
}else if(!gb.abandoned&&!gb.hovered&&gb.checked){gc=bh;
}return {backgroundColor:gc};
}},"selectbox/atom":da,"selectbox/popup":df,"selectbox/list":dl,"selectbox/arrow":{include:cT,style:function(gd){return {source:bN,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(ge){return {decorator:cX};
}},"datechooser/navigation-bar":{style:function(gf){return {backgroundColor:cz,textColor:gf.disabled?cW:gf.invalid?cE:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":bS,"datechooser/last-month-button-tooltip":bS,"datechooser/next-year-button-tooltip":bS,"datechooser/next-month-button-tooltip":bS,"datechooser/last-year-button":cF,"datechooser/last-month-button":cF,"datechooser/next-year-button":cF,"datechooser/next-month-button":cF,"datechooser/button/icon":{},"datechooser/button":{style:function(gg){var gh={width:17,show:ci};

if(gg.lastYear){gh.icon=Q;
}else if(gg.lastMonth){gh.icon=H;
}else if(gg.nextYear){gh.icon=cm;
}else if(gg.nextMonth){gh.icon=dC;
}
if(gg.pressed||gg.checked||gg.abandoned){gh.decorator=cY;
}else if(gg.hovered){gh.decorator=p;
}else{gh.decorator=undefined;
}
if(gg.pressed||gg.checked||gg.abandoned){gh.padding=[2,0,0,2];
}else if(gg.hovered){gh.padding=1;
}else{gh.padding=2;
}return gh;
}},"datechooser/month-year-label":{style:function(gi){return {font:dj,textAlign:cG};
}},"datechooser/date-pane":{style:function(gj){return {decorator:bA,backgroundColor:cz};
}},"datechooser/weekday":{style:function(gk){return {decorator:ce,font:dj,textAlign:cG,textColor:gk.disabled?cW:gk.weekend?k:cz,backgroundColor:gk.weekend?cz:k};
}},"datechooser/day":{style:function(gl){return {textAlign:cG,decorator:gl.today?cA:undefined,textColor:gl.disabled?cW:gl.selected?cV:gl.otherMonth?cW:undefined,backgroundColor:gl.disabled?undefined:gl.selected?bp:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(gm){return {textAlign:cG,textColor:k,padding:[2,4],decorator:gm.header?u:bE};
}},"combobox":{style:function(gn){var go;

if(gn.disabled){go=cC;
}else if(gn.invalid){go=dn;
}else if(gn.focused){go=cH;
}else{go=o;
}return {decorator:gn.focused?bT:cU,textColor:gn.disabled?cW:undefined,backgroundColor:go};
}},"combobox/button":{alias:dd,include:dd,style:function(gp){return {icon:bN,backgroundColor:gp.hovered?di:dd};
}},"combobox/popup":df,"combobox/list":dl,"combobox/textfield":{include:dm,style:function(gq){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(gr){var gs={backgroundColor:db,shadow:cB,decorator:cX,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:gr.submenu||gr.contextmenu?cr:cq};

if(gr.submenu){gs.position=dH;
gs.offset=[-2,-3];
}
if(gr.contextmenu){gs.offset=4;
}return gs;
}},"menu/slidebar":bz,"menu-slidebar":dc,"menu-slidebar-button":{style:function(gt){return {backgroundColor:gt.hovered?bU:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:r,style:function(gu){return {icon:gu.hovered?cJ:dB};
}},"menu-slidebar/button-forward":{include:r,style:function(gv){return {icon:gv.hovered?y:bN};
}},"menu-separator":{style:function(gw){return {height:0,decorator:z,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:da,style:function(gx){return {backgroundColor:gx.selected?bU:undefined,textColor:gx.selected?cV:undefined,padding:[2,6]};
}},"menu-button/icon":{include:cT,style:function(gy){return {alignY:bO};
}},"menu-button/label":{include:bR,style:function(gz){return {alignY:bO,padding:1};
}},"menu-button/shortcut":{include:bR,style:function(gA){return {alignY:bO,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:cT,style:function(gB){return {source:gB.selected?dw:dC,alignY:bO};
}},"menu-checkbox":{alias:bP,include:bP,style:function(gC){return {icon:!gC.checked?undefined:gC.selected?cw:T};
}},"menu-radiobutton":{alias:bP,include:bP,style:function(gD){return {icon:!gD.checked?undefined:gD.selected?e:cO};
}},"menubar":{style:function(gE){return {backgroundColor:db,decorator:cX};
}},"menubar-button":{alias:da,style:function(gF){return {padding:[2,6],backgroundColor:gF.pressed||gF.hovered?bU:undefined,textColor:gF.pressed||gF.hovered?cV:undefined};
}},"colorselector":dc,"colorselector/control-bar":dc,"colorselector/visual-pane":bW,"colorselector/control-pane":dc,"colorselector/preset-grid":dc,"colorselector/colorbucket":{style:function(gG){return {decorator:cY,width:16,height:16};
}},"colorselector/preset-field-set":bW,"colorselector/input-field-set":bW,"colorselector/preview-field-set":bW,"colorselector/hex-field-composite":dc,"colorselector/hex-field":dm,"colorselector/rgb-spinner-composite":dc,"colorselector/rgb-spinner-red":dk,"colorselector/rgb-spinner-green":dk,"colorselector/rgb-spinner-blue":dk,"colorselector/hsb-spinner-composite":dc,"colorselector/hsb-spinner-hue":dk,"colorselector/hsb-spinner-saturation":dk,"colorselector/hsb-spinner-brightness":dk,"colorselector/preview-content-old":{style:function(gH){return {decorator:cY,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(gI){return {decorator:cY,backgroundColor:bQ,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(gJ){return {decorator:cY,margin:5};
}},"colorselector/brightness-field":{style:function(gK){return {decorator:cY,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dc,"colorselector/hue-saturation-handle":dc,"colorselector/brightness-pane":dc,"colorselector/brightness-handle":dc,"table":dc,"table/statusbar":{style:function(gL){return {decorator:co,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:dd,style:function(gM){var gO,gN;

if(gM.pressed||gM.checked||gM.abandoned){gO=cY;
gN=[3,2,1,4];
}else if(gM.hovered){gO=p;
gN=[2,3];
}else{gO=undefined;
gN=[3,4];
}return {decorator:gO,padding:gN,backgroundColor:gM.abandoned?cI:dd,icon:b};
}},"table-column-reset-button":{extend:bP,alias:bP,style:function(){return {icon:bM};
}},"table-scroller/scrollbar-x":cD,"table-scroller/scrollbar-y":cD,"table-scroller":dc,"table-scroller/header":{style:function(gP){return {decorator:P,backgroundColor:w};
}},"table-scroller/pane":{style:function(gQ){return {backgroundColor:bb};
}},"table-scroller/focus-indicator":{style:function(gR){return {decorator:bm};
}},"table-scroller/resize-line":{style:function(gS){return {backgroundColor:cd,width:3};
}},"table-header-cell":{alias:da,style:function(gT){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:gT.hovered?0:2,decorator:gT.hovered?j:bg,backgroundColor:gT.hovered?ba:bg,sortIcon:gT.sorted?(gT.sortedAscending?bH:cQ):undefined};
}},"table-header-cell/sort-icon":{style:function(gU){return {alignY:bO};
}},"table-editor-textfield":{include:dm,style:function(gV){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:bi,alias:bi,style:function(gW){return {padding:[0,2]};
}},"table-editor-combobox":{include:n,alias:n,style:function(gX){return {decorator:undefined};
}},"colorpopup":{alias:df,include:df,style:function(gY){return {decorator:cX,padding:5,backgroundColor:db};
}},"colorpopup/field":{style:function(ha){return {decorator:cY,margin:2,width:14,height:14,backgroundColor:db};
}},"colorpopup/selector-button":dd,"colorpopup/auto-button":dd,"colorpopup/preview-pane":bW,"colorpopup/current-preview":{style:function(hb){return {height:20,padding:4,marginLeft:4,decorator:cY,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hc){return {height:20,padding:4,marginRight:4,decorator:cY,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dd,include:dd,style:function(hd){return {icon:br};
}},"colorpopup/colorselector-cancelbutton":{alias:dd,include:dd,style:function(he){return {icon:by};
}},"virtual-list":dl,"virtual-list/row-layer":cL,"row-layer":dc,"column-layer":dc,"group-item":{include:bR,alias:bR,style:function(hf){return {padding:4,backgroundColor:bt,textColor:bQ,font:dj};
}},"cell":{style:function(hg){return {backgroundColor:hg.selected?bX:G,textColor:hg.selected?cV:dA,padding:[3,6]};
}},"cell-string":bV,"cell-number":{include:bV,style:function(hh){return {textAlign:R};
}},"cell-image":bV,"cell-boolean":bV,"cell-atom":bV,"cell-date":bV,"cell-html":bV,"htmlarea":{"include":dc,style:function(hi){return {backgroundColor:bQ};
}},"progressbar":{style:function(hj){return {decorator:cP,padding:[1],backgroundColor:bQ};
}},"progressbar/progress":{style:function(hk){return {backgroundColor:bU};
}}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__oa:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__oa=null;
},getInsets:function(){if(this.__oa){return this.__oa;
}var j=this._getDefaultInsets();
return this.__oa={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__oa=null;
}},destruct:function(){this.__oa=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){var v=m;
var u=this.getBackgroundImage();
var t=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var w=this.getBackgroundPositionX();

if(w==null){w=0;
}r.backgroundPosition=w+i+top;
if(u){var s=qx.util.AliasManager.getInstance().resolve(u);
v=qx.bom.element.Decoration.create(s,t,r);
}else{if(r){if(qx.core.Variant.isSet(c,o)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){r.overflow=f;
}}v=d+qx.bom.element.Style.compile(r)+e;
}}return v;
},_applyBackground:function(){{};
}}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px",d="px ",c="dotted",b="_applyWidth",a="dashed",E="Number",D=" ",C="shorthand",B="widthTop",A="styleRight",z="styleLeft",y="widthLeft",x="widthBottom",w="styleTop",v="colorBottom",q="styleBottom",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="border-top",k="border-left",l="border-right",s="qx.ui.decoration.Single",t="border-bottom",u="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(F,G,H){qx.ui.decoration.Abstract.call(this);
if(F!=null){this.setWidth(F);
}
if(G!=null){this.setStyle(G);
}
if(H!=null){this.setColor(H);
}},properties:{widthTop:{check:E,init:0,apply:b},widthRight:{check:E,init:0,apply:b},widthBottom:{check:E,init:0,apply:b},widthLeft:{check:E,init:0,apply:b},styleTop:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleRight:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,c,a,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[y,z,o]},right:{group:[r,A,p]},top:{group:[B,w,m]},bottom:{group:[x,q,v]},width:{group:[B,r,x,y],mode:C},style:{group:[w,A,q,z],mode:C},color:{group:[m,p,v,o],mode:C}},members:{__pl:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__pl;
},getMarkup:function(I){if(this.__pl){return this.__pl;
}var J=qx.theme.manager.Color.getInstance();
var K={};
var M=this.getWidthTop();

if(M>0){K[n]=M+d+this.getStyleTop()+D+(J.resolve(this.getColorTop())||g);
}var M=this.getWidthRight();

if(M>0){K[l]=M+d+this.getStyleRight()+D+(J.resolve(this.getColorRight())||g);
}var M=this.getWidthBottom();

if(M>0){K[t]=M+d+this.getStyleBottom()+D+(J.resolve(this.getColorBottom())||g);
}var M=this.getWidthLeft();

if(M>0){K[k]=M+d+this.getStyleLeft()+D+(J.resolve(this.getColorLeft())||g);
}{};
K.position=u;
K.top=0;
K.left=0;
var L=this._generateBackgroundMarkup(K);
return this.__pl=L;
},resize:function(N,O,P){var Q=this.getInsets();
O-=Q.left+Q.right;
P-=Q.top+Q.bottom;
if(O<0){O=0;
}
if(P<0){P=0;
}N.style.width=O+e;
N.style.height=P+e;
N.style.left=(parseInt(N.style.left,10)+Q.left-this.getWidthLeft())+e;
N.style.top=(parseInt(N.style.top,10)+Q.top-this.getWidthTop())+e;
},tint:function(R,S){var T=qx.theme.manager.Color.getInstance();

if(S==null){S=this.getBackgroundColor();
}R.style.backgroundColor=T.resolve(S)||g;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__pl=null;
}});
})();
(function(){var j="px ",i=" ",h="px",g="Color",f="Number",e=";",d="shorthand",c="innerWidthRight",b="border-left:",a='<div style="position:absolute;top:0;left:0;',E="innerColorBottom",D='</div>',C='',B="scale",A="border-top",z="innerWidthTop",y="border-left",x="innerColorRight",w="innerColorTop",v="relative",q="border-top:",r="qx.ui.decoration.Double",o="border-right:",p='line-height:0;',m="innerColorLeft",n="border-bottom",k='">',l="innerWidthBottom",s="innerWidthLeft",t="border-bottom:",u="border-right";
qx.Class.define(r,{extend:qx.ui.decoration.Single,construct:function(F,G,H,innerWidth,I){qx.ui.decoration.Single.call(this,F,G,H,innerWidth,I);
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(I!=null){this.setInnerColor(I);
}},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[z,c,l,s],mode:d},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[w,x,E,m],mode:d}},members:{__xS:null,_getDefaultInsets:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
},_isInitialized:function(){return !!this.__xS;
},getMarkup:function(){if(this.__xS){return this.__xS;
}var J=qx.theme.manager.Color.getInstance();
var M={position:v};
var K=this.getInnerWidthTop();

if(K>0){M[A]=K+j+this.getStyleTop()+i+J.resolve(this.getInnerColorTop());
}var K=this.getInnerWidthRight();

if(K>0){M[u]=K+j+this.getStyleRight()+i+J.resolve(this.getInnerColorRight());
}var K=this.getInnerWidthBottom();

if(K>0){M[n]=K+j+this.getStyleBottom()+i+J.resolve(this.getInnerColorBottom());
}var K=this.getInnerWidthLeft();

if(K>0){M[y]=K+j+this.getStyleLeft()+i+J.resolve(this.getInnerColorLeft());
}{};
var N=this._generateBackgroundMarkup(M);
var L=p;
if((qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION<8)||(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.DOCUMENT_MODE<8)){L=C;
}var K=this.getWidthTop();

if(K>0){L+=q+K+j+this.getStyleTop()+i+J.resolve(this.getColorTop())+e;
}var K=this.getWidthRight();

if(K>0){L+=o+K+j+this.getStyleRight()+i+J.resolve(this.getColorRight())+e;
}var K=this.getWidthBottom();

if(K>0){L+=t+K+j+this.getStyleBottom()+i+J.resolve(this.getColorBottom())+e;
}var K=this.getWidthLeft();

if(K>0){L+=b+K+j+this.getStyleLeft()+i+J.resolve(this.getColorLeft())+e;
}{};
return this.__xS=a+L+k+N+D;
},resize:function(O,P,Q){var V=this.getBackgroundImage()&&this.getBackgroundRepeat()==B;
var T=this.getInsets();

if(V||qx.bom.client.Feature.CONTENT_BOX){var innerWidth=P-T.left-T.right;
var innerHeight=Q-T.top-T.bottom;
}else{var R=T.top-this.getInnerWidthTop();
var W=T.bottom-this.getInnerWidthBottom();
var S=T.left-this.getInnerWidthLeft();
var U=T.right-this.getInnerWidthRight();
var innerWidth=P-S-U;
var innerHeight=Q-R-W;
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}O.firstChild.style.width=innerWidth+h;
O.firstChild.style.height=innerHeight+h;
O.style.left=(parseInt(O.style.left,10)+T.left-this.getWidthLeft()-this.getInnerWidthLeft())+h;
O.style.top=(parseInt(O.style.top,10)+T.top-this.getWidthTop()-this.getInnerWidthTop())+h;
}},destruct:function(){this.__xS=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(w,x,y){qx.ui.decoration.Abstract.call(this);
if(w!=null){this.setOuterColor(w);
}
if(x!=null){this.setInnerColor(x);
}
if(y!=null){this.setInnerOpacity(y);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__ry:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__ry;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__ry){return this.__ry;
}var z=qx.theme.manager.Color.getInstance();
var A=[];
var D=d+z.resolve(this.getOuterColor())+b;
var C=d+z.resolve(this.getInnerColor())+b;
A.push(k);
A.push(f);
A.push(e,D);
A.push(qx.bom.element.Opacity.compile(0.35));
A.push(i);
A.push(n);
A.push(q,D);
A.push(r,D);
A.push(qx.bom.element.Opacity.compile(1));
A.push(i);
A.push(f);
A.push(m);
A.push(p,D);
A.push(s,D);
A.push(qx.bom.element.Opacity.compile(1));
A.push(i);
var B={position:l,top:g,left:g,opacity:1};
A.push(this._generateBackgroundMarkup(B));
A.push(t);
A.push(e,C);
A.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
A.push(i);
A.push(v);
return this.__ry=A.join(c);
},resize:function(E,F,G){if(F<4){F=4;
}
if(G<4){G=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=F-2;
var outerHeight=G-2;
var M=outerWidth;
var L=outerHeight;
var innerWidth=F-4;
var innerHeight=G-4;
}else{var outerWidth=F;
var outerHeight=G;
var M=F-2;
var L=G-2;
var innerWidth=M;
var innerHeight=L;
}var O=a;
var K=E.childNodes[0].style;
K.width=outerWidth+O;
K.height=outerHeight+O;
var J=E.childNodes[1].style;
J.width=outerWidth+O;
J.height=L+O;
var I=E.childNodes[2].style;
I.width=M+O;
I.height=outerHeight+O;
var H=E.childNodes[3].style;
H.width=M+O;
H.height=L+O;
var N=E.childNodes[4].style;
N.width=innerWidth+O;
N.height=innerHeight+O;
},tint:function(P,Q){var R=qx.theme.manager.Color.getInstance();

if(Q==null){Q=this.getBackgroundColor();
}P.childNodes[3].style.backgroundColor=R.resolve(Q)||c;
}},destruct:function(){this.__ry=null;
}});
})();
(function(){var o="_applyStyle",n="",m="Color",l="px",k="solid",j="dotted",i="double",h="dashed",g="_applyWidth",f="qx.ui.decoration.Uniform",c="px ",e=" ",d="scale",b="PositiveInteger",a="absolute";
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(p,q,r){qx.ui.decoration.Abstract.call(this);
if(p!=null){this.setWidth(p);
}
if(q!=null){this.setStyle(q);
}
if(r!=null){this.setColor(r);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[k,j,h,i],init:k,apply:o},color:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__rP:null,_getDefaultInsets:function(){var s=this.getWidth();
return {top:s,right:s,bottom:s,left:s};
},_isInitialized:function(){return !!this.__rP;
},getMarkup:function(){if(this.__rP){return this.__rP;
}var t={position:a,top:0,left:0};
var u=this.getWidth();
{};
var w=qx.theme.manager.Color.getInstance();
t.border=u+c+this.getStyle()+e+(w.resolve(this.getColor())||n);
var v=this._generateBackgroundMarkup(t);
return this.__rP=v;
},resize:function(x,y,z){var B=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(B||qx.bom.client.Feature.CONTENT_BOX){var A=this.getWidth()*2;
y-=A;
z-=A;
if(y<0){y=0;
}
if(z<0){z=0;
}}x.style.width=y+l;
x.style.height=z+l;
},tint:function(C,D){var E=qx.theme.manager.Color.getInstance();

if(D==null){D=this.getBackgroundColor();
}C.style.backgroundColor=E.resolve(D)||n;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__rP=null;
}});
})();
(function(){var m="Number",l="_applyInsets",k="-l",j="insetRight",i="insetTop",h="_applyBaseImage",g="insetBottom",f="set",e="shorthand",d="-t",a="insetLeft",c="String",b="qx.ui.decoration.Grid";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(n,o){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__oA=new qx.ui.decoration.css3.BorderImage();

if(n){this.__oB(n);
}}else{this.__oA=new qx.ui.decoration.GridDiv(n);
}
if(o!=null){this.__oA.setInsets(o);
}},properties:{baseImage:{check:c,nullable:true,apply:h},insetLeft:{check:m,nullable:true,apply:l},insetRight:{check:m,nullable:true,apply:l},insetBottom:{check:m,nullable:true,apply:l},insetTop:{check:m,nullable:true,apply:l},insets:{group:[i,j,g,a],mode:e}},members:{__oA:null,getMarkup:function(){return this.__oA.getMarkup();
},resize:function(p,q,r){this.__oA.resize(p,q,r);
},tint:function(s,t){},getInsets:function(){return this.__oA.getInsets();
},_applyInsets:function(u,v,name){var w=f+qx.lang.String.firstUp(name);
this.__oA[w](u);
},_applyBaseImage:function(x,y){if(this.__oA instanceof qx.ui.decoration.GridDiv){this.__oA.setBaseImage(x);
}else{this.__oB(x);
}},__oB:function(z){var B,D;
this.__oA.setBorderImage(z);
var F=qx.util.AliasManager.getInstance().resolve(z);
var G=/(.*)(\.[a-z]+)$/.exec(F);
var C=G[1];
var E=G[2];
var A=qx.util.ResourceManager.getInstance();
var H=A.getImageHeight(C+d+E);
var I=A.getImageWidth(C+k+E);
{};
this.__oA.setSlice([H,I]);
}},destruct:function(){this.__oA=null;
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",z="border-separator",y="table-header-border",x="dotted",w="tooltip-text",v="invalid",u="white",t="decoration/shadow/shadow.png",s="black",r="#FFF",q="effect",o="table-focus-indicator",p="border-focused-invalid",m="qx/decoration/Classic",n="border-lead",k="decoration/shadow/shadow-small.png",l="qx.theme.classic.Decoration";
qx.Theme.define(l,{aliases:{decoration:m},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:x}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:v}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:z}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:z}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:k,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:v,innerColor:p,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:x,color:n}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:w}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:w}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:u,colorLeft:u,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:y,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:o,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f,widthBottom:2,colorBottom:q,styleBottom:f}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:r,width:1,color:z}}}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a},icons:{}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(z,A){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setBorderImage(z);
}
if(A!=null){this.setSlice(A);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__nw:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__nw;
},getMarkup:function(){if(this.__nw){return this.__nw;
}var B=this._resolveImageUrl(this.getBorderImage());
var C=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var D=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__nw=[x,qx.bom.element.Style.compile({"borderImage":o+B+p+C.join(f)+f+D,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:C.join(b)+g}),y].join(q);
return this.__nw;
},resize:function(E,F,G){E.style.width=F+g;
E.style.height=G+g;
},tint:function(H,I){},_applyStyle:function(){{};
},_resolveImageUrl:function(J){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(J));
}},destruct:function(){this.__nw=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",x="qx.client",w="-br",v="-t",u="-tl",t="-r",s='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',r="_applyBaseImage",q="-b",p="String",o="",m="-bl",n="qx.ui.decoration.GridDiv",k="-c",l="mshtml";
qx.Class.define(n,{extend:qx.ui.decoration.Abstract,construct:function(y,z){qx.ui.decoration.Abstract.call(this);
if(y!=null){this.setBaseImage(y);
}
if(z!=null){this.setInsets(z);
}},properties:{baseImage:{check:p,nullable:true,apply:r}},members:{__nx:null,__ny:null,__nz:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__nx;
},getMarkup:function(){if(this.__nx){return this.__nx;
}var A=qx.bom.element.Decoration;
var B=this.__ny;
var C=this.__nz;
var D=[];
D.push(s);
D.push(A.create(B.tl,g,{top:0,left:0}));
D.push(A.create(B.t,f,{top:0,left:C.left+j}));
D.push(A.create(B.tr,g,{top:0,right:0}));
D.push(A.create(B.bl,g,{bottom:0,left:0}));
D.push(A.create(B.b,f,{bottom:0,left:C.left+j}));
D.push(A.create(B.br,g,{bottom:0,right:0}));
D.push(A.create(B.l,e,{top:C.top+j,left:0}));
D.push(A.create(B.c,a,{top:C.top+j,left:C.left+j}));
D.push(A.create(B.r,e,{top:C.top+j,right:0}));
D.push(b);
return this.__nx=D.join(o);
},resize:function(E,F,G){var H=this.__nz;
var innerWidth=F-H.left-H.right;
var innerHeight=G-H.top-H.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}E.style.width=F+j;
E.style.height=G+j;
E.childNodes[1].style.width=innerWidth+j;
E.childNodes[4].style.width=innerWidth+j;
E.childNodes[7].style.width=innerWidth+j;
E.childNodes[6].style.height=innerHeight+j;
E.childNodes[7].style.height=innerHeight+j;
E.childNodes[8].style.height=innerHeight+j;

if(qx.core.Variant.isSet(x,l)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(F%2==1){E.childNodes[2].style.marginRight=h;
E.childNodes[5].style.marginRight=h;
E.childNodes[8].style.marginRight=h;
}else{E.childNodes[2].style.marginRight=i;
E.childNodes[5].style.marginRight=i;
E.childNodes[8].style.marginRight=i;
}
if(G%2==1){E.childNodes[3].style.marginBottom=h;
E.childNodes[4].style.marginBottom=h;
E.childNodes[5].style.marginBottom=h;
}else{E.childNodes[3].style.marginBottom=i;
E.childNodes[4].style.marginBottom=i;
E.childNodes[5].style.marginBottom=i;
}}}},tint:function(I,J){},_applyBaseImage:function(K,L){{};

if(K){var P=this._resolveImageUrl(K);
var Q=/(.*)(\.[a-z]+)$/.exec(P);
var O=Q[1];
var N=Q[2];
var M=this.__ny={tl:O+u+N,t:O+v+N,tr:O+d+N,bl:O+m+N,b:O+q+N,br:O+w+N,l:O+c+N,c:O+k+N,r:O+t+N};
this.__nz=this._computeEdgeSizes(M);
}},_resolveImageUrl:function(R){return qx.util.AliasManager.getInstance().resolve(R);
},_computeEdgeSizes:function(S){var T=qx.util.ResourceManager.getInstance();
return {top:T.getImageHeight(S.t),bottom:T.getImageHeight(S.b),left:T.getImageWidth(S.l),right:T.getImageWidth(S.r)};
}},destruct:function(){this.__nx=this.__ny=this.__nz=null;
}});
})();


qx.$$loader.init();

