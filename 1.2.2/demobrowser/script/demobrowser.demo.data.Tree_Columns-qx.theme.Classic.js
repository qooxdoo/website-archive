(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.data.Tree_Columns","qx.theme":"qx.theme.Classic"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.2.2"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.data.Tree_Columns-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"91ca538b8468"},
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

qx.$$packageData['91ca538b8468']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/devices/drive-harddisk.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/user-desktop.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/user-trash.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/status/dialog-information.png":[16,16,"png","qx"],"qx/icon/Tango/16/devices/drive-harddisk.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/user-desktop.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/user-trash.png":[16,16,"png","qx"],"qx/icon/Tango/16/status/dialog-information.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};
(function(){var by="toString",bx=".",bw="default",bv="Object",bu='"',bt="Array",bs="()",br="String",bq="Function",bp=".prototype",bX="function",bW="Boolean",bV="Error",bU="constructor",bT="warn",bS="hasOwnProperty",bR="string",bQ="toLocaleString",bP="RegExp",bO='\", "',bF="info",bG="BROKEN_IE",bD="isPrototypeOf",bE="Date",bB="",bC="qx.Bootstrap",bz="]",bA="Class",bH="error",bI="[Class ",bK="valueOf",bJ="Number",bM="count",bL="debug",bN="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bI+this.classname+bz;
},createNamespace:function(name,cf){var ch=name.split(bx);
var parent=window;
var cg=ch[0];

for(var i=0,ci=ch.length-1;i<ci;i++,cg=ch[i]){if(!parent[cg]){parent=parent[cg]={};
}else{parent=parent[cg];
}}parent[cg]=cf;
return cg;
},setDisplayName:function(j,k,name){j.displayName=k+bx+name+bs;
},setDisplayNames:function(o,p){for(var name in o){var q=o[name];

if(q instanceof Function){q.displayName=p+bx+name+bs;
}}},define:function(name,V){if(!V){var V={statics:{}};
}var bb;
var Y=null;
qx.Bootstrap.setDisplayNames(V.statics,name);

if(V.members||V.extend){qx.Bootstrap.setDisplayNames(V.members,name+bp);
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
bb.$$type=bA;
if(!bb.hasOwnProperty(by)){bb.toString=this.genericToString;
}if(V.defer){V.defer(bb,Y);
}qx.Bootstrap.$$registry[name]=V.statics;
return bb;
}};
qx.Bootstrap.define(bC,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(G,H,I,name,J){var M=I.prototype;
var L=new Function;
L.prototype=M;
var K=new L;
G.prototype=K;
K.name=K.classname=name;
K.basename=J;
H.base=G.superclass=I;
H.self=G.constructor=K.constructor=G;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(u){return u.__count__;
},"default":function(b){var length=0;

for(var c in b){length++;
}return length;
}})[(({}).__count__==0)?bM:bw],objectMergeWith:function(N,O,P){if(P===undefined){P=true;
}
for(var Q in O){if(P||N[Q]===undefined){N[Q]=O[Q];
}}return N;
},__ho:[bD,bS,bQ,by,bK,bU],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(d){var e=[];
var g=Object.prototype.hasOwnProperty;

for(var h in d){if(g.call(d,h)){e.push(h);
}}var f=qx.Bootstrap.__ho;

for(var i=0,a=f,l=a.length;i<l;i++){if(g.call(d,a[i])){e.push(a[i]);
}}return e;
},"default":function(C){var D=[];
var E=Object.prototype.hasOwnProperty;

for(var F in C){if(E.call(C,F)){D.push(F);
}}return D;
}})[typeof (Object.keys)==
bX?bN:
(function(){for(var ce in {toString:1}){return ce;
}})()!==by?bG:bw],getKeysAsString:function(bn){var bo=qx.Bootstrap.getKeys(bn);

if(bo.length==0){return bB;
}return bu+bo.join(bO)+bu;
},__hp:{"[object String]":br,"[object Array]":bt,"[object Object]":bv,"[object RegExp]":bP,"[object Number]":bJ,"[object Boolean]":bW,"[object Date]":bE,"[object Function]":bq,"[object Error]":bV},bind:function(y,self,z){var A=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var n=Array.prototype.slice.call(arguments,0,arguments.length);
return y.apply(self,A.concat(n));
};
},firstUp:function(be){return be.charAt(0).toUpperCase()+be.substr(1);
},firstLow:function(R){return R.charAt(0).toLowerCase()+R.substr(1);
},getClass:function(s){var t=Object.prototype.toString.call(s);
return (qx.Bootstrap.__hp[t]||t.slice(8,-1));
},isString:function(m){return (m!==null&&(typeof m===bR||qx.Bootstrap.getClass(m)==br||m instanceof String||(!!m&&!!m.$$isString)));
},isArray:function(cb){return (cb!==null&&(cb instanceof Array||(cb&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(cb.constructor,qx.data.IListData))||qx.Bootstrap.getClass(cb)==bt||(!!cb&&!!cb.$$isArray)));
},isObject:function(cj){return (cj!==undefined&&cj!==null&&qx.Bootstrap.getClass(cj)==bv);
},isFunction:function(ck){return qx.Bootstrap.getClass(ck)==bq;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(U,name){while(U){if(U.$$properties&&U.$$properties[name]){return U.$$properties[name];
}U=U.superclass;
}return null;
},hasProperty:function(r,name){return !!qx.Bootstrap.getPropertyDefinition(r,name);
},getEventType:function(bh,name){var bh=bh.constructor;

while(bh.superclass){if(bh.$$events&&bh.$$events[name]!==undefined){return bh.$$events[name];
}bh=bh.superclass;
}return null;
},supportsEvent:function(B,name){return !!qx.Bootstrap.getEventType(B,name);
},getByInterface:function(v,w){var x,i,l;

while(v){if(v.$$implements){x=v.$$flatImplements;

for(i=0,l=x.length;i<l;i++){if(x[i]===w){return v;
}}}v=v.superclass;
}return null;
},hasInterface:function(bi,bj){return !!qx.Bootstrap.getByInterface(bi,bj);
},getMixins:function(bf){var bg=[];

while(bf){if(bf.$$includes){bg.push.apply(bg,bf.$$flatIncludes);
}bf=bf.superclass;
}return bg;
},$$logs:[],debug:function(cc,cd){qx.Bootstrap.$$logs.push([bL,arguments]);
},info:function(bl,bm){qx.Bootstrap.$$logs.push([bF,arguments]);
},warn:function(bY,ca){qx.Bootstrap.$$logs.push([bT,arguments]);
},error:function(S,T){qx.Bootstrap.$$logs.push([bH,arguments]);
},trace:function(bk){}}});
})();
(function(){var j="qx.allowUrlSettings",h="&",g="qx.core.Setting",f="qx.allowUrlVariants",e="qx.propertyDebugLevel",d="qxsetting",c=":",b=".";
qx.Bootstrap.define(g,{statics:{__eo:{},define:function(p,q){if(q===undefined){throw new Error('Default value of setting "'+p+'" must be defined!');
}
if(!this.__eo[p]){this.__eo[p]={};
}else if(this.__eo[p].defaultValue!==undefined){throw new Error('Setting "'+p+'" is already defined!');
}this.__eo[p].defaultValue=q;
},get:function(k){var l=this.__eo[k];

if(l===undefined){throw new Error('Setting "'+k+'" is not defined.');
}
if(l.value!==undefined){return l.value;
}return l.defaultValue;
},set:function(m,n){if((m.split(b)).length<2){throw new Error('Malformed settings key "'+m+'". Must be following the schema "namespace.key".');
}
if(!this.__eo[m]){this.__eo[m]={};
}this.__eo[m].value=n;
},__ep:function(){if(window.qxsettings){for(var t in window.qxsettings){this.set(t,window.qxsettings[t]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(a){}this.__eq();
}},__eq:function(){if(this.get(j)!=true){return;
}var s=document.location.search.slice(1).split(h);

for(var i=0;i<s.length;i++){var r=s[i].split(c);

if(r.length!=3||r[0]!=d){continue;
}this.set(r[1],decodeURIComponent(r[2]));
}}},defer:function(o){o.define(j,false);
o.define(f,false);
o.define(e,0);
o.__ep();
}});
})();
(function(){var p="function",o="Boolean",n="qx.Interface",m="]",k="toggle",j="Interface",h="is",g="[Interface ";
qx.Bootstrap.define(n,{statics:{define:function(name,s){if(s){if(s.extend&&!(s.extend instanceof Array)){s.extend=[s.extend];
}{};
var t=s.statics?s.statics:{};
if(s.extend){t.$$extends=s.extend;
}
if(s.properties){t.$$properties=s.properties;
}
if(s.members){t.$$members=s.members;
}
if(s.events){t.$$events=s.events;
}}else{var t={};
}t.$$type=j;
t.name=name;
t.toString=this.genericToString;
t.basename=qx.Bootstrap.createNamespace(name,t);
qx.Interface.$$registry[name]=t;
return t;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(q){if(!q){return [];
}var r=q.concat();

for(var i=0,l=q.length;i<l;i++){if(q[i].$$extends){r.push.apply(r,this.flatten(q[i].$$extends));
}}return r;
},__fy:function(B,C,D,E){var I=D.$$members;

if(I){for(var H in I){if(qx.Bootstrap.isFunction(I[H])){var G=this.__fz(C,H);
var F=G||qx.Bootstrap.isFunction(B[H]);

if(!F){throw new Error('Implementation of method "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}var J=E===true&&!G&&!qx.Bootstrap.hasInterface(C,D);

if(J){B[H]=this.__fC(D,B[H],H,I[H]);
}}else{if(typeof B[H]===undefined){if(typeof B[H]!==p){throw new Error('Implementation of member "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}}}}}},__fz:function(a,b){var f=b.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!f){return false;
}var c=qx.Bootstrap.firstLow(f[2]);
var d=qx.Bootstrap.getPropertyDefinition(a,c);

if(!d){return false;
}var e=f[0]==h||f[0]==k;

if(e){return qx.Bootstrap.getPropertyDefinition(a,c).check==o;
}return true;
},__fA:function(K,L){if(L.$$properties){for(var M in L.$$properties){if(!qx.Bootstrap.getPropertyDefinition(K,M)){throw new Error('The property "'+M+'" is not supported by Class "'+K.classname+'"!');
}}}},__fB:function(u,v){if(v.$$events){for(var w in v.$$events){if(!qx.Bootstrap.supportsEvent(u,w)){throw new Error('The event "'+w+'" is not supported by Class "'+u.classname+'"!');
}}}},assertObject:function(N,O){var Q=N.constructor;
this.__fy(N,Q,O,false);
this.__fA(Q,O);
this.__fB(Q,O);
var P=O.$$extends;

if(P){for(var i=0,l=P.length;i<l;i++){this.assertObject(N,P[i]);
}}},assert:function(x,y,z){this.__fy(x.prototype,x,y,z);
this.__fA(x,y);
this.__fB(x,y);
var A=y.$$extends;

if(A){for(var i=0,l=A.length;i<l;i++){this.assert(x,A[i],z);
}}},genericToString:function(){return g+this.name+m;
},$$registry:{},__fC:function(){},__fD:null,__fE:function(){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,w){if(w){if(w.include&&!(w.include instanceof Array)){w.include=[w.include];
}{};
var y=w.statics?w.statics:{};
qx.Bootstrap.setDisplayNames(y,name);

for(var x in y){if(y[x] instanceof Function){y[x].$$mixin=y;
}}if(w.construct){y.$$constructor=w.construct;
qx.Bootstrap.setDisplayName(w.construct,name,e);
}
if(w.include){y.$$includes=w.include;
}
if(w.properties){y.$$properties=w.properties;
}
if(w.members){y.$$members=w.members;
qx.Bootstrap.setDisplayNames(w.members,name+f);
}
for(var x in y.$$members){if(y.$$members[x] instanceof Function){y.$$members[x].$$mixin=y;
}}
if(w.events){y.$$events=w.events;
}
if(w.destruct){y.$$destructor=w.destruct;
qx.Bootstrap.setDisplayName(w.destruct,name,b);
}}else{var y={};
}y.$$type=a;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
this.$$registry[name]=y;
return y;
},checkCompatibility:function(o){var r=this.flatten(o);
var s=r.length;

if(s<2){return true;
}var v={};
var u={};
var t={};
var q;

for(var i=0;i<s;i++){q=r[i];

for(var p in q.events){if(t[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+t[p]+'" in member "'+p+'"!');
}t[p]=q.name;
}
for(var p in q.properties){if(v[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+v[p]+'" in property "'+p+'"!');
}v[p]=q.name;
}
for(var p in q.members){if(u[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+u[p]+'" in member "'+p+'"!');
}u[p]=q.name;
}}return true;
},isCompatible:function(h,j){var k=qx.Bootstrap.getMixins(j);
k.push(h);
return qx.Mixin.checkCompatibility(k);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(m){if(!m){return [];
}var n=m.concat();

for(var i=0,l=m.length;i<l;i++){if(m[i].$$includes){n.push.apply(n,this.flatten(m[i].$$includes));
}}return n;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__el:null,__em:function(){}}});
})();
(function(){var dU=';',dT='computed=this.',dS='=value;',dR='this.',dQ="set",dP="setThemed",dO="setRuntime",dN="init",dM='if(this.',dL='delete this.',cU='!==undefined)',cT='}',cS="resetThemed",cR='else if(this.',cQ="string",cP='return this.',cO="reset",cN="boolean",cM="resetRuntime",cL='!==undefined){',ec="",ed="refresh",ea='=true;',eb="this.",dX=";",dY='old=this.',dV="();",dW='else ',ee='if(old===undefined)old=this.',ef='old=computed=this.',du="return this.",dt="get",dw='(value);',dv="(a[",dy='if(old===computed)return value;',dx='if(old===undefined)old=null;',dA=' of an instance of ',dz=' is not (yet) ready!");',ds="]);",dr='!==inherit){',bC='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bD='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bE='value !== null && value.nodeType === 9 && value.documentElement',bF='===value)return value;',bG='value !== null && value.$$type === "Mixin"',bH='return init;',bI='var init=this.',bJ='value !== null && value.nodeType === 1 && value.attributes',bK="var parent = this.getLayoutParent();",bL="Error in property ",et='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',es='.validate.call(this, value);',er='qx.core.Assert.assertInstance(value, Date, msg) || true',eq='else{',ex="if (!parent) return;",ew=" in method ",ev='qx.core.Assert.assertInstance(value, Error, msg) || true',eu='=computed;',ez='Undefined value is not allowed!',ey='(backup);',cl="MSIE 6.0",cm='if(computed===inherit){',cj="inherit",ck='Is invalid!',cp='if(value===undefined)prop.error(this,2,"',cq='var computed, old=this.',cn='else if(computed===undefined)',co="': ",ch=" of class ",ci='value !== null && value.nodeType !== undefined',bT='===undefined)return;',bS='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bV="')){",bU='qx.core.Assert.assertPositiveInteger(value, msg) || true',bP='else this.',bO='value=this.',bR='","',bQ='if(init==qx.core.Property.$$inherit)init=null;',bN='value !== null && value.$$type === "Interface"',bM='var inherit=prop.$$inherit;',cv="', qx.event.type.Data, [computed, old]",cw="var value = parent.",cx="$$useinit_",cy='computed=undefined;delete this.',cr="(value);",cs='Requires exactly one argument!',ct='",value);',cu='computed=value;',cz="$$runtime_",cA=';}',ce="$$user_",cd='){',cc='qx.core.Assert.assertArray(value, msg) || true',cb='if(computed===undefined||computed===inherit){',ca='qx.core.Assert.assertPositiveNumber(value, msg) || true',bY=".prototype",bX="Boolean",bW=")}",cg='(computed, old, "',cf='return value;',cB='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cC="if(reg.hasListener(this, '",cD='Does not allow any arguments!',cE=')a[i].',cF="()",cG="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cH='.$$properties.',cI='value !== null && value.$$type === "Theme"',cJ="var reg=qx.event.Registration;",cK="())",cY='return null;',cX='qx.core.Assert.assertObject(value, msg) || true',cW='");',cV='qx.core.Assert.assertString(value, msg) || true',dd='var pa=this.getLayoutParent();if(pa)computed=pa.',dc="if (value===undefined) value = parent.",db='value !== null && value.$$type === "Class"',da='qx.core.Assert.assertFunction(value, msg) || true',df='!==undefined&&',de='var computed, old;',dm='var backup=computed;',dn='}else{',dk="object",dl="$$init_",di="$$theme_",dj='if(computed===undefined)computed=null;',dg='qx.core.Assert.assertMap(value, msg) || true',dh='qx.core.Assert.assertNumber(value, msg) || true',dp='if((computed===undefined||computed===inherit)&&',dq="reg.fireEvent(this, '",dE='Null value is not allowed!',dD='qx.core.Assert.assertInteger(value, msg) || true',dG="value",dF="rv:1.8.1",dI="shorthand",dH='qx.core.Assert.assertInstance(value, RegExp, msg) || true',dK='value !== null && value.type !== undefined',dJ='value !== null && value.document',dC='throw new Error("Property ',dB="(!this.",em='qx.core.Assert.assertBoolean(value, msg) || true',en='if(a[i].',eo="toggle",ep="$$inherit_",ei='var prop=qx.core.Property;',ej=" with incoming value '",ek="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",el='if(computed===undefined||computed==inherit)computed=null;',eg="qx.core.Property",eh="is",bB='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(eg,{statics:{__la:{"Boolean":em,"String":cV,"Number":dh,"Integer":dD,"PositiveNumber":ca,"PositiveInteger":bU,"Error":ev,"RegExp":dH,"Object":cX,"Array":cc,"Map":dg,"Function":da,"Date":er,"Node":ci,"Element":bJ,"Document":bE,"Window":dJ,"Event":dK,"Class":db,"Mixin":bG,"Interface":bN,"Theme":cI,"Color":bC,"Decorator":bS,"Font":bD},__lb:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:cj,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:cQ,dereference:cN,inheritable:cN,nullable:cN,themeable:cN,refine:cN,init:null,apply:cQ,event:cQ,check:null,transform:cQ,deferredInit:cN,validate:null},$$allowedGroupKeys:{name:cQ,group:dk,mode:cQ,themeable:cN},$$inheritable:{},__lc:function(G){var H=this.__ld(G);

if(!H.length){var I=qx.lang.Function.empty;
}else{I=this.__le(H);
}G.prototype.$$refreshInheritables=I;
},__ld:function(D){var F=[];

while(D){var E=D.$$properties;

if(E){for(var name in this.$$inheritable){if(E[name]&&E[name].inheritable){F.push(name);
}}}D=D.superclass;
}return F;
},__le:function(eL){var eP=this.$$store.inherit;
var eO=this.$$store.init;
var eN=this.$$method.refresh;
var eM=[bK,ex];

for(var i=0,l=eL.length;i<l;i++){var name=eL[i];
eM.push(cw,eP[name],dX,dc,eO[name],dX,eb,eN[name],cr);
}return new Function(eM.join(ec));
},attachRefreshInheritables:function(v){v.prototype.$$refreshInheritables=function(){qx.core.Property.__lc(v);
return this.$$refreshInheritables();
};
},attachMethods:function(m,name,n){n.group?this.__lf(m,n,name):this.__lg(m,n,name);
},__lf:function(O,P,name){var W=qx.Bootstrap.firstUp(name);
var V=O.prototype;
var X=P.themeable===true;
{};
var Y=[];
var S=[];

if(X){var Q=[];
var U=[];
}var T=cG;
Y.push(T);

if(X){Q.push(T);
}
if(P.mode==dI){var R=ek;
Y.push(R);

if(X){Q.push(R);
}}
for(var i=0,a=P.group,l=a.length;i<l;i++){{};
Y.push(eb,this.$$method.set[a[i]],dv,i,ds);
S.push(eb,this.$$method.reset[a[i]],dV);

if(X){{};
Q.push(eb,this.$$method.setThemed[a[i]],dv,i,ds);
U.push(eb,this.$$method.resetThemed[a[i]],dV);
}}this.$$method.set[name]=dQ+W;
V[this.$$method.set[name]]=new Function(Y.join(ec));
this.$$method.reset[name]=cO+W;
V[this.$$method.reset[name]]=new Function(S.join(ec));

if(X){this.$$method.setThemed[name]=dP+W;
V[this.$$method.setThemed[name]]=new Function(Q.join(ec));
this.$$method.resetThemed[name]=cS+W;
V[this.$$method.resetThemed[name]]=new Function(U.join(ec));
}},__lg:function(c,d,name){var f=qx.Bootstrap.firstUp(name);
var h=c.prototype;
{};
if(d.dereference===undefined&&typeof d.check===cQ){d.dereference=this.__lh(d.check);
}var g=this.$$method;
var e=this.$$store;
e.runtime[name]=cz+name;
e.user[name]=ce+name;
e.theme[name]=di+name;
e.init[name]=dl+name;
e.inherit[name]=ep+name;
e.useinit[name]=cx+name;
g.get[name]=dt+f;
h[g.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,c,name,dt);
};
g.set[name]=dQ+f;
h[g.set[name]]=function(bm){return qx.core.Property.executeOptimizedSetter(this,c,name,dQ,arguments);
};
g.reset[name]=cO+f;
h[g.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,c,name,cO);
};

if(d.inheritable||d.apply||d.event||d.deferredInit){g.init[name]=dN+f;
h[g.init[name]]=function(eT){return qx.core.Property.executeOptimizedSetter(this,c,name,dN,arguments);
};
}
if(d.inheritable){g.refresh[name]=ed+f;
h[g.refresh[name]]=function(bl){return qx.core.Property.executeOptimizedSetter(this,c,name,ed,arguments);
};
}g.setRuntime[name]=dO+f;
h[g.setRuntime[name]]=function(J){return qx.core.Property.executeOptimizedSetter(this,c,name,dO,arguments);
};
g.resetRuntime[name]=cM+f;
h[g.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,c,name,cM);
};

if(d.themeable){g.setThemed[name]=dP+f;
h[g.setThemed[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,c,name,dP,arguments);
};
g.resetThemed[name]=cS+f;
h[g.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,c,name,cS);
};
}
if(d.check===bX){h[eo+f]=new Function(du+g.set[name]+dB+g.get[name]+cK);
h[eh+f]=new Function(du+g.get[name]+cF);
}},__lh:function(bA){return !!this.__lb[bA];
},__li:function(fa){return this.__lb[fa]||qx.Bootstrap.classIsDefined(fa)||(qx.Interface&&qx.Interface.isDefined(fa));
},__lj:{0:bB,1:cs,2:ez,3:cD,4:dE,5:ck},error:function(o,p,q,r,s){var t=o.constructor.classname;
var u=bL+q+ch+t+ew+this.$$method[r][q]+ej+s+co;
throw new Error(u+(this.__lj[p]||"Unknown reason: "+p));
},__lk:function(eD,eE,name,eF,eG,eH){var eI=this.$$method[eF][name];
{eE[eI]=new Function(dG,eG.join(ec));
};
{};
qx.Bootstrap.setDisplayName(eE[eI],eD.classname+bY,eI);
if(eH===undefined){return eD[eI]();
}else{return eD[eI](eH[0]);
}},executeOptimizedGetter:function(w,x,name,y){var A=x.$$properties[name];
var C=x.prototype;
var z=[];
var B=this.$$store;
z.push(dM,B.runtime[name],cU);
z.push(cP,B.runtime[name],dU);

if(A.inheritable){z.push(cR,B.inherit[name],cU);
z.push(cP,B.inherit[name],dU);
z.push(dW);
}z.push(dM,B.user[name],cU);
z.push(cP,B.user[name],dU);

if(A.themeable){z.push(cR,B.theme[name],cU);
z.push(cP,B.theme[name],dU);
}
if(A.deferredInit&&A.init===undefined){z.push(cR,B.init[name],cU);
z.push(cP,B.init[name],dU);
}z.push(dW);

if(A.init!==undefined){if(A.inheritable){z.push(bI,B.init[name],dU);

if(A.nullable){z.push(bQ);
}else if(A.init!==undefined){z.push(cP,B.init[name],dU);
}else{z.push(cB,name,dA,x.classname,dz);
}z.push(bH);
}else{z.push(cP,B.init[name],dU);
}}else if(A.inheritable||A.nullable){z.push(cY);
}else{z.push(dC,name,dA,x.classname,dz);
}return this.__lk(w,C,name,y,z);
},executeOptimizedSetter:function(bn,bo,name,bp,bq){var bv=bo.$$properties[name];
var bu=bo.prototype;
var bs=[];
var br=bp===dQ||bp===dP||bp===dO||(bp===dN&&bv.init===undefined);
var bt=bv.apply||bv.event||bv.inheritable;
var bw=this.__ll(bp,name);
this.__lm(bs,bv,name,bp,br);

if(br){this.__ln(bs,bo,bv,name);
}
if(bt){this.__lo(bs,br,bw,bp);
}
if(bv.inheritable){bs.push(bM);
}{};

if(!bt){this.__lq(bs,name,bp,br);
}else{this.__lr(bs,bv,name,bp,br);
}
if(bv.inheritable){this.__ls(bs,bv,name,bp);
}else if(bt){this.__lt(bs,bv,name,bp);
}
if(bt){this.__lu(bs,bv,name);
if(bv.inheritable&&bu._getChildren){this.__lv(bs,name);
}}if(br){bs.push(cf);
}return this.__lk(bn,bu,name,bp,bs,bq);
},__ll:function(eJ,name){if(eJ===dO||eJ===cM){var eK=this.$$store.runtime[name];
}else if(eJ===dP||eJ===cS){eK=this.$$store.theme[name];
}else if(eJ===dN){eK=this.$$store.init[name];
}else{eK=this.$$store.user[name];
}return eK;
},__lm:function(bh,bi,name,bj,bk){{if(!bi.nullable||bi.check||bi.inheritable){bh.push(ei);
}if(bj===dQ){bh.push(cp,name,bR,bj,ct);
}};
},__ln:function(eA,eB,eC,name){if(eC.transform){eA.push(bO,eC.transform,dw);
}if(eC.validate){if(typeof eC.validate===cQ){eA.push(dR,eC.validate,dw);
}else if(eC.validate instanceof Function){eA.push(eB.classname,cH,name);
eA.push(es);
}}},__lo:function(eU,eV,eW,eX){var eY=(eX===cO||eX===cS||eX===cM);

if(eV){eU.push(dM,eW,bF);
}else if(eY){eU.push(dM,eW,bT);
}},__lp:undefined,__lq:function(eQ,name,eR,eS){if(eR===dO){eQ.push(dR,this.$$store.runtime[name],dS);
}else if(eR===cM){eQ.push(dM,this.$$store.runtime[name],cU);
eQ.push(dL,this.$$store.runtime[name],dU);
}else if(eR===dQ){eQ.push(dR,this.$$store.user[name],dS);
}else if(eR===cO){eQ.push(dM,this.$$store.user[name],cU);
eQ.push(dL,this.$$store.user[name],dU);
}else if(eR===dP){eQ.push(dR,this.$$store.theme[name],dS);
}else if(eR===cS){eQ.push(dM,this.$$store.theme[name],cU);
eQ.push(dL,this.$$store.theme[name],dU);
}else if(eR===dN&&eS){eQ.push(dR,this.$$store.init[name],dS);
}},__lr:function(ba,bb,name,bc,bd){if(bb.inheritable){ba.push(cq,this.$$store.inherit[name],dU);
}else{ba.push(de);
}ba.push(dM,this.$$store.runtime[name],cL);

if(bc===dO){ba.push(dT,this.$$store.runtime[name],dS);
}else if(bc===cM){ba.push(dL,this.$$store.runtime[name],dU);
ba.push(dM,this.$$store.user[name],cU);
ba.push(dT,this.$$store.user[name],dU);
ba.push(cR,this.$$store.theme[name],cU);
ba.push(dT,this.$$store.theme[name],dU);
ba.push(cR,this.$$store.init[name],cL);
ba.push(dT,this.$$store.init[name],dU);
ba.push(dR,this.$$store.useinit[name],ea);
ba.push(cT);
}else{ba.push(ef,this.$$store.runtime[name],dU);
if(bc===dQ){ba.push(dR,this.$$store.user[name],dS);
}else if(bc===cO){ba.push(dL,this.$$store.user[name],dU);
}else if(bc===dP){ba.push(dR,this.$$store.theme[name],dS);
}else if(bc===cS){ba.push(dL,this.$$store.theme[name],dU);
}else if(bc===dN&&bd){ba.push(dR,this.$$store.init[name],dS);
}}ba.push(cT);
ba.push(cR,this.$$store.user[name],cL);

if(bc===dQ){if(!bb.inheritable){ba.push(dY,this.$$store.user[name],dU);
}ba.push(dT,this.$$store.user[name],dS);
}else if(bc===cO){if(!bb.inheritable){ba.push(dY,this.$$store.user[name],dU);
}ba.push(dL,this.$$store.user[name],dU);
ba.push(dM,this.$$store.runtime[name],cU);
ba.push(dT,this.$$store.runtime[name],dU);
ba.push(dM,this.$$store.theme[name],cU);
ba.push(dT,this.$$store.theme[name],dU);
ba.push(cR,this.$$store.init[name],cL);
ba.push(dT,this.$$store.init[name],dU);
ba.push(dR,this.$$store.useinit[name],ea);
ba.push(cT);
}else{if(bc===dO){ba.push(dT,this.$$store.runtime[name],dS);
}else if(bb.inheritable){ba.push(dT,this.$$store.user[name],dU);
}else{ba.push(ef,this.$$store.user[name],dU);
}if(bc===dP){ba.push(dR,this.$$store.theme[name],dS);
}else if(bc===cS){ba.push(dL,this.$$store.theme[name],dU);
}else if(bc===dN&&bd){ba.push(dR,this.$$store.init[name],dS);
}}ba.push(cT);
if(bb.themeable){ba.push(cR,this.$$store.theme[name],cL);

if(!bb.inheritable){ba.push(dY,this.$$store.theme[name],dU);
}
if(bc===dO){ba.push(dT,this.$$store.runtime[name],dS);
}else if(bc===dQ){ba.push(dT,this.$$store.user[name],dS);
}else if(bc===dP){ba.push(dT,this.$$store.theme[name],dS);
}else if(bc===cS){ba.push(dL,this.$$store.theme[name],dU);
ba.push(dM,this.$$store.init[name],cL);
ba.push(dT,this.$$store.init[name],dU);
ba.push(dR,this.$$store.useinit[name],ea);
ba.push(cT);
}else if(bc===dN){if(bd){ba.push(dR,this.$$store.init[name],dS);
}ba.push(dT,this.$$store.theme[name],dU);
}else if(bc===ed){ba.push(dT,this.$$store.theme[name],dU);
}ba.push(cT);
}ba.push(cR,this.$$store.useinit[name],cd);

if(!bb.inheritable){ba.push(dY,this.$$store.init[name],dU);
}
if(bc===dN){if(bd){ba.push(dT,this.$$store.init[name],dS);
}else{ba.push(dT,this.$$store.init[name],dU);
}}else if(bc===dQ||bc===dO||bc===dP||bc===ed){ba.push(dL,this.$$store.useinit[name],dU);

if(bc===dO){ba.push(dT,this.$$store.runtime[name],dS);
}else if(bc===dQ){ba.push(dT,this.$$store.user[name],dS);
}else if(bc===dP){ba.push(dT,this.$$store.theme[name],dS);
}else if(bc===ed){ba.push(dT,this.$$store.init[name],dU);
}}ba.push(cT);
if(bc===dQ||bc===dO||bc===dP||bc===dN){ba.push(eq);

if(bc===dO){ba.push(dT,this.$$store.runtime[name],dS);
}else if(bc===dQ){ba.push(dT,this.$$store.user[name],dS);
}else if(bc===dP){ba.push(dT,this.$$store.theme[name],dS);
}else if(bc===dN){if(bd){ba.push(dT,this.$$store.init[name],dS);
}else{ba.push(dT,this.$$store.init[name],dU);
}ba.push(dR,this.$$store.useinit[name],ea);
}ba.push(cT);
}},__ls:function(L,M,name,N){L.push(cb);

if(N===ed){L.push(cu);
}else{L.push(dd,this.$$store.inherit[name],dU);
}L.push(dp);
L.push(dR,this.$$store.init[name],df);
L.push(dR,this.$$store.init[name],dr);
L.push(dT,this.$$store.init[name],dU);
L.push(dR,this.$$store.useinit[name],ea);
L.push(dn);
L.push(dL,this.$$store.useinit[name],cA);
L.push(cT);
L.push(dy);
L.push(cm);
L.push(cy,this.$$store.inherit[name],dU);
L.push(cT);
L.push(cn);
L.push(dL,this.$$store.inherit[name],dU);
L.push(bP,this.$$store.inherit[name],eu);
L.push(dm);
if(M.init!==undefined&&N!==dN){L.push(ee,this.$$store.init[name],dX);
}else{L.push(dx);
}L.push(el);
},__lt:function(bx,by,name,bz){if(bz!==dQ&&bz!==dO&&bz!==dP){bx.push(dj);
}bx.push(dy);
if(by.init!==undefined&&bz!==dN){bx.push(ee,this.$$store.init[name],dX);
}else{bx.push(dx);
}},__lu:function(j,k,name){if(k.apply){j.push(dR,k.apply,cg,name,cW);
}if(k.event){j.push(cJ,cC,k.event,bV,dq,k.event,cv,bW);
}},__lv:function(K,name){K.push(et);
K.push(en,this.$$method.refresh[name],cE,this.$$method.refresh[name],ey);
K.push(cT);
}},defer:function(be){var bg=navigator.userAgent.indexOf(cl)!=-1;
var bf=navigator.userAgent.indexOf(dF)!=-1;
if(bg||bf){be.__lh=be.__li;
}}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==a)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(q,r){if(r==null){r=0;
}else if(r<0){r=Math.max(0,this.length+r);
}
for(var i=r;i<this.length;i++){if(this[i]===q){return i;
}}return -1;
}}[Array.prototype.indexOf?f:g],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(y,z){if(z==null){z=this.length-1;
}else if(z<0){z=Math.max(0,this.length+z);
}
for(var i=z;i>=0;i--){if(this[i]===y){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?f:g],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(s,t){var l=this.length;

for(var i=0;i<l;i++){var u=this[i];

if(u!==undefined){s.call(t||window,u,i,this);
}}}}[Array.prototype.forEach?f:g],arrayFilter:{"native":Array.prototype.filter,"emulated":function(h,j){var k=[];
var l=this.length;

for(var i=0;i<l;i++){var m=this[i];

if(m!==undefined){if(h.call(j||window,m,i,this)){k.push(this[i]);
}}}return k;
}}[Array.prototype.filter?f:g],arrayMap:{"native":Array.prototype.map,"emulated":function(A,B){var C=[];
var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){C[i]=A.call(B||window,D,i,this);
}}return C;
}}[Array.prototype.map?f:g],arraySome:{"native":Array.prototype.some,"emulated":function(v,w){var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){if(v.call(w||window,x,i,this)){return true;
}}}return false;
}}[Array.prototype.some?f:g],arrayEvery:{"native":Array.prototype.every,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){if(!n.call(o||window,p,i,this)){return false;
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
(function(){var bt="[Class ",bs="]",br="$$init_",bq="toString",bp="constructor",bo="singleton",bn=".prototype",bm="extend",bl="Class",bk="destruct",bh="qx.Class",bj=".",bi="static",bg="qx.event.type.Data";
qx.Bootstrap.define(bh,{statics:{define:function(name,bu){if(!bu){var bu={};
}if(bu.include&&!(bu.include instanceof Array)){bu.include=[bu.include];
}if(bu.implement&&!(bu.implement instanceof Array)){bu.implement=[bu.implement];
}var bv=false;

if(!bu.hasOwnProperty(bm)&&!bu.type){bu.type=bi;
bv=true;
}{};
var bw=this.__cb(name,bu.type,bu.extend,bu.statics,bu.construct,bu.destruct,bu.include);
if(bu.extend){if(bu.properties){this.__cd(bw,bu.properties,true);
}if(bu.members){this.__cf(bw,bu.members,true,true,false);
}if(bu.events){this.__cc(bw,bu.events,true);
}if(bu.include){for(var i=0,l=bu.include.length;i<l;i++){this.__cj(bw,bu.include[i],false);
}}}if(bu.settings){for(var bx in bu.settings){qx.core.Setting.define(bx,bu.settings[bx]);
}}if(bu.variants){for(var bx in bu.variants){qx.core.Variant.define(bx,bu.variants[bx].allowedValues,bu.variants[bx].defaultValue);
}}if(bu.implement){for(var i=0,l=bu.implement.length;i<l;i++){this.__ch(bw,bu.implement[i]);
}}{};
if(bu.defer){bu.defer.self=bw;
bu.defer(bw,bw.prototype,{add:function(name,b){var c={};
c[name]=b;
qx.Class.__cd(bw,c,true);
}});
}return bw;
},undefine:function(name){delete this.$$registry[name];
var bO=name.split(bj);
var bQ=[window];

for(var i=0;i<bO.length;i++){bQ.push(bQ[i][bO[i]]);
}for(var i=bQ.length-1;i>=1;i--){var bP=bQ[i];
var parent=bQ[i-1];

if(qx.Bootstrap.isFunction(bP)||qx.Bootstrap.objectGetLength(bP)===0){delete parent[bO[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(M,N){{};
qx.Class.__cj(M,N,false);
},patch:function(bG,bH){{};
qx.Class.__cj(bG,bH,true);
},isSubClassOf:function(s,t){if(!s){return false;
}
if(s==t){return true;
}
if(s.prototype instanceof t){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(O){var P=[];

while(O){if(O.$$properties){P.push.apply(P,qx.Bootstrap.getKeys(O.$$properties));
}O=O.superclass;
}return P;
},getByProperty:function(g,name){while(g){if(g.$$properties&&g.$$properties[name]){return g;
}g=g.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(cc,cd){return cc.$$includes&&cc.$$includes.indexOf(cd)!==-1;
},getByMixin:function(h,j){var k,i,l;

while(h){if(h.$$includes){k=h.$$flatIncludes;

for(i=0,l=k.length;i<l;i++){if(k[i]===j){return h;
}}}h=h.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(v,w){return !!this.getByMixin(v,w);
},hasOwnInterface:function(ch,ci){return ch.$$implements&&ch.$$implements.indexOf(ci)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bR){var bS=[];

while(bR){if(bR.$$implements){bS.push.apply(bS,bR.$$flatImplements);
}bR=bR.superclass;
}return bS;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(ce,cf){var cg=ce.constructor;

if(this.hasInterface(cg,cf)){return true;
}
try{qx.Interface.assertObject(ce,cf);
return true;
}catch(H){}
try{qx.Interface.assert(cg,cf,false);
return true;
}catch(u){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bt+this.classname+bs;
},$$registry:qx.Bootstrap.$$registry,__bW:null,__bX:null,__bY:function(){},__ca:function(){},__cb:function(name,x,y,z,A,B,C){var F;

if(!y&&true){F=z||{};
qx.Bootstrap.setDisplayNames(F,name);
}else{var F={};

if(y){if(!A){A=this.__ck();
}
if(this.__cm(y,C)){F=this.__cn(A,name,x);
}else{F=A;
}if(x===bo){F.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(A,name,bp);
}if(z){qx.Bootstrap.setDisplayNames(z,name);
var G;

for(var i=0,a=qx.Bootstrap.getKeys(z),l=a.length;i<l;i++){G=a[i];
var D=z[G];
{F[G]=D;
};
}}}var E=qx.Bootstrap.createNamespace(name,F);
F.name=F.classname=name;
F.basename=E;
F.$$type=bl;

if(x){F.$$classtype=x;
}if(!F.hasOwnProperty(bq)){F.toString=this.genericToString;
}
if(y){qx.Bootstrap.extendClass(F,A,y,name,E);
if(B){{};
F.$$destructor=B;
qx.Bootstrap.setDisplayName(B,name,bk);
}}this.$$registry[name]=F;
return F;
},__cc:function(bK,bL,bM){var bN,bN;
{};

if(bK.$$events){for(var bN in bL){bK.$$events[bN]=bL[bN];
}}else{bK.$$events=bL;
}},__cd:function(bW,bX,bY){var ca;

if(bY===undefined){bY=false;
}var cb=bW.prototype;

for(var name in bX){ca=bX[name];
{};
ca.name=name;
if(!ca.refine){if(bW.$$properties===undefined){bW.$$properties={};
}bW.$$properties[name]=ca;
}if(ca.init!==undefined){bW.prototype[br+name]=ca.init;
}if(ca.event!==undefined){var event={};
event[ca.event]=bg;
this.__cc(bW,event,bY);
}if(ca.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!cb.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bW);
}}
if(!ca.refine){qx.core.Property.attachMethods(bW,name,ca);
}}},__ce:null,__cf:function(by,bz,bA,bB,bC){var bD=by.prototype;
var bF,bE;
qx.Bootstrap.setDisplayNames(bz,by.classname+bn);

for(var i=0,a=qx.Bootstrap.getKeys(bz),l=a.length;i<l;i++){bF=a[i];
bE=bz[bF];
{};
if(bB!==false&&bE instanceof Function&&bE.$$type==null){if(bC==true){bE=this.__cg(bE,bD[bF]);
}else{if(bD[bF]){bE.base=bD[bF];
}bE.self=by;
}{};
}bD[bF]=bE;
}},__cg:function(be,bf){if(bf){return function(){var bJ=be.base;
be.base=bf;
var bI=be.apply(this,arguments);
be.base=bJ;
return bI;
};
}else{return be;
}},__ch:function(bT,bU){{};
var bV=qx.Interface.flatten([bU]);

if(bT.$$implements){bT.$$implements.push(bU);
bT.$$flatImplements.push.apply(bT.$$flatImplements,bV);
}else{bT.$$implements=[bU];
bT.$$flatImplements=bV;
}},__ci:function(T){var name=T.classname;
var U=this.__cn(T,name,T.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(T),l=a.length;i<l;i++){V=a[i];
U[V]=T[V];
}U.prototype=T.prototype;
var X=T.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(X),l=a.length;i<l;i++){V=a[i];
var Y=X[V];
if(Y&&Y.self==T){Y.self=U;
}}for(var V in this.$$registry){var W=this.$$registry[V];

if(!W){continue;
}
if(W.base==T){W.base=U;
}
if(W.superclass==T){W.superclass=U;
}
if(W.$$original){if(W.$$original.base==T){W.$$original.base=U;
}
if(W.$$original.superclass==T){W.$$original.superclass=U;
}}}qx.Bootstrap.createNamespace(name,U);
this.$$registry[name]=U;
return U;
},__cj:function(m,n,o){{};

if(this.hasMixin(m,n)){return;
}var r=m.$$original;

if(n.$$constructor&&!r){m=this.__ci(m);
}var q=qx.Mixin.flatten([n]);
var p;

for(var i=0,l=q.length;i<l;i++){p=q[i];
if(p.$$events){this.__cc(m,p.$$events,o);
}if(p.$$properties){this.__cd(m,p.$$properties,o);
}if(p.$$members){this.__cf(m,p.$$members,o,o,o);
}}if(m.$$includes){m.$$includes.push(n);
m.$$flatIncludes.push.apply(m.$$flatIncludes,q);
}else{m.$$includes=[n];
m.$$flatIncludes=q;
}},__ck:function(){function cj(){cj.base.apply(this,arguments);
}return cj;
},__cl:function(){return function(){};
},__cm:function(I,J){{};
if(I&&I.$$includes){var K=I.$$flatIncludes;

for(var i=0,l=K.length;i<l;i++){if(K[i].$$constructor){return true;
}}}if(J){var L=qx.Mixin.flatten(J);

for(var i=0,l=L.length;i<l;i++){if(L[i].$$constructor){return true;
}}}return false;
},__cn:function(ba,name,bb){var bc;
var bd=function(){var f=bd;
{};
var e=f.$$original.apply(this,arguments);
if(f.$$includes){var d=f.$$flatIncludes;

for(var i=0,l=d.length;i<l;i++){if(d[i].$$constructor){d[i].$$constructor.apply(this,arguments);
}}}{};
return e;
};
{};
bd.$$original=ba;
ba.wrapper=bd;
return bd;
}},defer:function(){var Q,R,S;
{};
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__en:function(){var u=d;
var y=e;
var x=window.navigator.userAgent;
var A=false;
var w=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){u=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(x)){y=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){y+=q+RegExp.$3;
}}else{w=true;
y=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){u=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(x)){y=RegExp.$1;
var z=RegExp(n).exec(y);

if(z){y=y.slice(0,z.index);
}}else{w=true;
y=m;
}}else if(window.controllers&&window.navigator.product===c){u=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(x)){y=RegExp.$1;
}else{w=true;
y=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(x)){u=k;
y=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(y<8&&/Trident\/([^\);]+)(\)|;)/.test(x)){if(RegExp.$1===g){y=h;
}}this.MSHTML=true;
}else{var v=window.qxFail;

if(v&&typeof v===o){var u=v();

if(u.NAME&&u.FULLVERSION){u=u.NAME;
this[u.toUpperCase()]=true;
y=u.FULLVERSION;
}}else{A=true;
w=true;
y=r;
u=s;
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(t){t.__en();
}});
})();
(function(){var u="on",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",k="qx.debug",d="qx.client",j="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e="qx.core.Variant",h="mshtml",a="gecko";
qx.Bootstrap.define(e,{statics:{__ku:{},__kv:{},compilerIsSet:function(){return true;
},define:function(K,L,M){{};

if(!this.__ku[K]){this.__ku[K]={};
}else{}this.__ku[K].allowedValues=L;
this.__ku[K].defaultValue=M;
},get:function(D){var E=this.__ku[D];
{};

if(E.value!==undefined){return E.value;
}return E.defaultValue;
},__kw:function(){if(window.qxvariants){for(var B in qxvariants){{};

if(!this.__ku[B]){this.__ku[B]={};
}this.__ku[B].value=qxvariants[B];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(C){}this.__kx(this.__ku);
}},__kx:function(){if(qx.core.Setting.get(m)!=true){return;
}var O=document.location.search.slice(1).split(p);

for(var i=0;i<O.length;i++){var P=O[i].split(f);

if(P.length!=3||P[0]!=c){continue;
}var Q=P[1];

if(!this.__ku[Q]){this.__ku[Q]={};
}this.__ku[Q].value=decodeURIComponent(P[2]);
}},select:function(y,z){{};

for(var A in z){if(this.isSet(y,A)){return z[A];
}}
if(z[r]!==undefined){return z[r];
}{};
},isSet:function(F,G){var H=F+n+G;

if(this.__kv[H]!==undefined){return this.__kv[H];
}var J=false;
if(G.indexOf(s)<0){J=this.get(F)===G;
}else{var I=G.split(s);

for(var i=0,l=I.length;i<l;i++){if(this.get(F)===I[i]){J=true;
break;
}}}this.__kv[H]=J;
return J;
},__ky:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__kz:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__kA:function(w,x){for(var i=0,l=w.length;i<l;i++){if(w[i]==x){return true;
}}return false;
}},defer:function(N){N.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
N.define(k,[u,t],u);
N.define(o,[u,t],t);
N.define(j,[u,t],u);
N.__kw();
}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(A,B,C){A.attachEvent(h+B,C);
},"default":function(x,y,z){x.addEventListener(y,z,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(j,k,l){try{j.detachEvent(h+k,l);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(D,E,F){D.removeEventListener(E,F,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(i,{"mshtml":function(e){if(e.type===b){return e.fromElement;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(i,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(s){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(m){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(p,q){if(document.createEventObject){var r=document.createEventObject();
return p.fireEvent(h+q,r);
}else{var r=document.createEvent(a);
r.initEvent(q,true,true);
return !p.dispatchEvent(r);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(n,o){return n.hasOwnProperty(h+o);
},"default":function(t,u){var v=h+u;
var w=(v in t);

if(!w){w=typeof t[v]==g;

if(!w&&t.setAttribute){t.setAttribute(v,c);
w=typeof t[v]==g;
t.removeAttribute(v);
}}return w;
}})}});
})();
(function(){var A="|bubble",z="|capture",y="|",x="",w="_",v="unload",u="UNKNOWN_",t="__fj",s="c",r="__fi",o="DOM_",q="WIN_",p="capture",n="qx.event.Manager",m="QX_";
qx.Class.define(n,{extend:Object,construct:function(bV,bW){this.__fe=bV;
this.__ff=qx.core.ObjectRegistry.toHashCode(bV);
this.__fg=bW;
if(bV.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(bV,v,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(bV,v,arguments.callee);
self.dispose();
}));
}this.__fh={};
this.__fi={};
this.__fj={};
this.__fk={};
},statics:{__fl:0,getNextUniqueId:function(){return (this.__fl++)+x;
}},members:{__fg:null,__fh:null,__fj:null,__fm:null,__fi:null,__fk:null,__fe:null,__ff:null,getWindow:function(){return this.__fe;
},getWindowId:function(){return this.__ff;
},getHandler:function(bf){var bg=this.__fi[bf.classname];

if(bg){return bg;
}return this.__fi[bf.classname]=new bf(this);
},getDispatcher:function(V){var W=this.__fj[V.classname];

if(W){return W;
}return this.__fj[V.classname]=new V(this,this.__fg);
},getListeners:function(F,G,H){var I=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var K=this.__fh[I];

if(!K){return null;
}var L=G+(H?z:A);
var J=K[L];
return J?J.concat():null;
},serializeListeners:function(bL){var bS=bL.$$hash||qx.core.ObjectRegistry.toHashCode(bL);
var bU=this.__fh[bS];
var bQ=[];

if(bU){var bO,bT,bM,bP,bR;

for(var bN in bU){bO=bN.indexOf(y);
bT=bN.substring(0,bO);
bM=bN.charAt(bO+1)==s;
bP=bU[bN];

for(var i=0,l=bP.length;i<l;i++){bR=bP[i];
bQ.push({self:bR.context,handler:bR.handler,type:bT,capture:bM});
}}}return bQ;
},toggleAttachedEvents:function(M,N){var S=M.$$hash||qx.core.ObjectRegistry.toHashCode(M);
var U=this.__fh[S];

if(U){var P,T,O,Q;

for(var R in U){P=R.indexOf(y);
T=R.substring(0,P);
O=R.charCodeAt(P+1)===99;
Q=U[R];

if(N){this.__fn(M,T,O);
}else{this.__fo(M,T,O);
}}}},hasListener:function(bX,bY,ca){{};
var cb=bX.$$hash||qx.core.ObjectRegistry.toHashCode(bX);
var cd=this.__fh[cb];

if(!cd){return false;
}var ce=bY+(ca?z:A);
var cc=cd[ce];
return cc&&cc.length>0;
},importListeners:function(cf,cg){{};
var cm=cf.$$hash||qx.core.ObjectRegistry.toHashCode(cf);
var cn=this.__fh[cm]={};
var cj=qx.event.Manager;

for(var ch in cg){var ck=cg[ch];
var cl=ck.type+(ck.capture?z:A);
var ci=cn[cl];

if(!ci){ci=cn[cl]=[];
this.__fn(cf,ck.type,ck.capture);
}ci.push({handler:ck.listener,context:ck.self,unique:ck.unique||(cj.__fl++)+x});
}},addListener:function(bh,bi,bj,self,bk){var bo;
{};
var bp=bh.$$hash||qx.core.ObjectRegistry.toHashCode(bh);
var br=this.__fh[bp];

if(!br){br=this.__fh[bp]={};
}var bn=bi+(bk?z:A);
var bm=br[bn];

if(!bm){bm=br[bn]=[];
}if(bm.length===0){this.__fn(bh,bi,bk);
}var bq=(qx.event.Manager.__fl++)+x;
var bl={handler:bj,context:self,unique:bq};
bm.push(bl);
return bn+y+bq;
},findHandler:function(co,cp){var cz=false,cs=false,cA=false;
var cy;

if(co.nodeType===1){cz=true;
cy=o+co.tagName.toLowerCase()+w+cp;
}else if(co==this.__fe){cs=true;
cy=q+cp;
}else if(co.classname){cA=true;
cy=m+co.classname+w+cp;
}else{cy=u+co+w+cp;
}var cu=this.__fk;

if(cu[cy]){return cu[cy];
}var cx=this.__fg.getHandlers();
var ct=qx.event.IEventHandler;
var cv,cw,cr,cq;

for(var i=0,l=cx.length;i<l;i++){cv=cx[i];
cr=cv.SUPPORTED_TYPES;

if(cr&&!cr[cp]){continue;
}cq=cv.TARGET_CHECK;

if(cq){if(!cz&&cq===ct.TARGET_DOMNODE){continue;
}else if(!cs&&cq===ct.TARGET_WINDOW){continue;
}else if(!cA&&cq===ct.TARGET_OBJECT){continue;
}}cw=this.getHandler(cx[i]);

if(cv.IGNORE_CAN_HANDLE||cw.canHandleEvent(co,cp)){cu[cy]=cw;
return cw;
}}return null;
},__fn:function(B,C,D){var E=this.findHandler(B,C);

if(E){E.registerEvent(B,C,D);
return;
}{};
},removeListener:function(a,b,c,self,d){var h;
{};
var j=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var k=this.__fh[j];

if(!k){return false;
}var e=b+(d?z:A);
var f=k[e];

if(!f){return false;
}var g;

for(var i=0,l=f.length;i<l;i++){g=f[i];

if(g.handler===c&&g.context===self){qx.lang.Array.removeAt(f,i);

if(f.length==0){this.__fo(a,b,d);
}return true;
}}return false;
},removeListenerById:function(bs,bt){var bz;
{};
var bx=bt.split(y);
var bC=bx[0];
var bu=bx[1].charCodeAt(0)==99;
var bB=bx[2];
var bA=bs.$$hash||qx.core.ObjectRegistry.toHashCode(bs);
var bD=this.__fh[bA];

if(!bD){return false;
}var by=bC+(bu?z:A);
var bw=bD[by];

if(!bw){return false;
}var bv;

for(var i=0,l=bw.length;i<l;i++){bv=bw[i];

if(bv.unique===bB){qx.lang.Array.removeAt(bw,i);

if(bw.length==0){this.__fo(bs,bC,bu);
}return true;
}}return false;
},removeAllListeners:function(X){var bc=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);
var be=this.__fh[bc];

if(!be){return false;
}var ba,bd,Y;

for(var bb in be){if(be[bb].length>0){ba=bb.split(y);
bd=ba[0];
Y=ba[1]===p;
this.__fo(X,bd,Y);
}}delete this.__fh[bc];
return true;
},deleteAllListeners:function(cF){delete this.__fh[cF];
},__fo:function(cB,cC,cD){var cE=this.findHandler(cB,cC);

if(cE){cE.unregisterEvent(cB,cC,cD);
return;
}{};
},dispatchEvent:function(bE,event){var bJ;
{};
var bK=event.getType();

if(!event.getBubbles()&&!this.hasListener(bE,bK)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bE);
}var bI=this.__fg.getDispatchers();
var bH;
var bG=false;

for(var i=0,l=bI.length;i<l;i++){bH=this.getDispatcher(bI[i]);
if(bH.canDispatchEvent(bE,event,bK)){bH.dispatchEvent(bE,event,bK);
bG=true;
break;
}}
if(!bG){{};
return true;
}var bF=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bF;
},dispose:function(){this.__fg.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,r);
qx.util.DisposeUtil.disposeMap(this,t);
this.__fh=this.__fe=this.__fm=null;
this.__fg=this.__fk=null;
}}});
})();
(function(){var d="qx.dom.Node",c="qx.client",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(s){return s.nodeType===
this.DOCUMENT?s:
s.ownerDocument||s.document;
},getWindow:qx.core.Variant.select(c,{"mshtml":function(p){if(p.nodeType==null){return p;
}if(p.nodeType!==this.DOCUMENT){p=p.ownerDocument;
}return p.parentWindow;
},"default":function(l){if(l.nodeType==null){return l;
}if(l.nodeType!==this.DOCUMENT){l=l.ownerDocument;
}return l.defaultView;
}}),getDocumentElement:function(o){return this.getDocument(o).documentElement;
},getBodyElement:function(q){return this.getDocument(q).body;
},isNode:function(n){return !!(n&&n.nodeType!=null);
},isElement:function(h){return !!(h&&h.nodeType===this.ELEMENT);
},isDocument:function(e){return !!(e&&e.nodeType===this.DOCUMENT);
},isText:function(m){return !!(m&&m.nodeType===this.TEXT);
},isWindow:function(r){return !!(r&&r.history&&r.location&&r.document);
},isNodeName:function(f,g){if(!g||!f||!f.nodeName){return false;
}return g.toLowerCase()==qx.dom.Node.getName(f);
},getName:function(t){if(!t||!t.nodeName){return null;
}return t.nodeName.toLowerCase();
},getText:function(j){if(!j||!j.nodeType){return null;
}
switch(j.nodeType){case 1:var i,a=[],k=j.childNodes,length=k.length;

for(i=0;i<length;i++){a[i]=this.getText(k[i]);
}return a.join(b);
case 2:return j.nodeValue;
break;
case 3:return j.nodeValue;
break;
}return null;
}}});
})();
(function(){var s="mshtml",r="qx.client",q="[object Array]",p="qx.lang.Array",o="qx",n="number",m="string";
qx.Class.define(p,{statics:{toArray:function(A,B){return this.cast(A,Array,B);
},cast:function(c,d,e){if(c.constructor===d){return c;
}
if(qx.Class.hasInterface(c,qx.data.IListData)){var c=c.toArray();
}var f=new d;
if(qx.core.Variant.isSet(r,s)){if(c.item){for(var i=e||0,l=c.length;i<l;i++){f.push(c[i]);
}return f;
}}if(Object.prototype.toString.call(c)===q&&e==null){f.push.apply(f,c);
}else{f.push.apply(f,Array.prototype.slice.call(c,e||0));
}return f;
},fromArguments:function(bh,bi){return Array.prototype.slice.call(bh,bi||0);
},fromCollection:function(K){if(qx.core.Variant.isSet(r,s)){if(K.item){var L=[];

for(var i=0,l=K.length;i<l;i++){L[i]=K[i];
}return L;
}}return Array.prototype.slice.call(K,0);
},fromShortHand:function(M){var O=M.length;
var N=qx.lang.Array.clone(M);
switch(O){case 1:N[1]=N[2]=N[3]=N[0];
break;
case 2:N[2]=N[0];
case 3:N[3]=N[1];
}return N;
},clone:function(bp){return bp.concat();
},insertAt:function(E,F,i){E.splice(i,0,F);
return E;
},insertBefore:function(bj,bk,bl){var i=bj.indexOf(bl);

if(i==-1){bj.push(bk);
}else{bj.splice(i,0,bk);
}return bj;
},insertAfter:function(H,I,J){var i=H.indexOf(J);

if(i==-1||i==(H.length-1)){H.push(I);
}else{H.splice(i+1,0,I);
}return H;
},removeAt:function(G,i){return G.splice(i,1)[0];
},removeAll:function(P){P.length=0;
return this;
},append:function(bn,bo){{};
Array.prototype.push.apply(bn,bo);
return bn;
},exclude:function(g,h){{};

for(var i=0,k=h.length,j;i<k;i++){j=g.indexOf(h[i]);

if(j!=-1){g.splice(j,1);
}}return g;
},remove:function(a,b){var i=a.indexOf(b);

if(i!=-1){a.splice(i,1);
return b;
}},contains:function(w,x){return w.indexOf(x)!==-1;
},equals:function(C,D){var length=C.length;

if(length!==D.length){return false;
}
for(var i=0;i<length;i++){if(C[i]!==D[i]){return false;
}}return true;
},sum:function(y){var z=0;

for(var i=0,l=y.length;i<l;i++){z+=y[i];
}return z;
},max:function(Q){{};
var i,S=Q.length,R=Q[0];

for(i=1;i<S;i++){if(Q[i]>R){R=Q[i];
}}return R===undefined?null:R;
},min:function(t){{};
var i,v=t.length,u=t[0];

for(i=1;i<v;i++){if(t[i]<u){u=t[i];
}}return u===undefined?null:u;
},unique:function(T){var be=[],V={},Y={},bb={};
var ba,U=0;
var bf=o+qx.lang.Date.now();
var W=false,bd=false,bg=false;
for(var i=0,bc=T.length;i<bc;i++){ba=T[i];
if(ba===null){if(!W){W=true;
be.push(ba);
}}else if(ba===undefined){}else if(ba===false){if(!bd){bd=true;
be.push(ba);
}}else if(ba===true){if(!bg){bg=true;
be.push(ba);
}}else if(typeof ba===m){if(!V[ba]){V[ba]=1;
be.push(ba);
}}else if(typeof ba===n){if(!Y[ba]){Y[ba]=1;
be.push(ba);
}}else{X=ba[bf];

if(X==null){X=ba[bf]=U++;
}
if(!bb[X]){bb[X]=ba;
be.push(ba);
}}}for(var X in bb){try{delete bb[X][bf];
}catch(bq){try{bb[X][bf]=null;
}catch(bm){throw new Error("Cannot clean-up map entry doneObjects["+X+"]["+bf+"]");
}}}return be;
}}});
})();
(function(){var B="()",A=".",z=".prototype.",y='anonymous()',x="qx.lang.Function",w=".constructor()";
qx.Class.define(x,{statics:{getCaller:function(s){return s.caller?s.caller.callee:s.callee.caller;
},getName:function(E){if(E.displayName){return E.displayName;
}
if(E.$$original||E.wrapper||E.classname){return E.classname+w;
}
if(E.$$mixin){for(var G in E.$$mixin.$$members){if(E.$$mixin.$$members[G]==E){return E.$$mixin.name+z+G+B;
}}for(var G in E.$$mixin){if(E.$$mixin[G]==E){return E.$$mixin.name+A+G+B;
}}}
if(E.self){var H=E.self.constructor;

if(H){for(var G in H.prototype){if(H.prototype[G]==E){return H.classname+z+G+B;
}}for(var G in H){if(H[G]==E){return H.classname+A+G+B;
}}}}var F=E.toString().match(/function\s*(\w*)\s*\(.*/);

if(F&&F.length>=1&&F[1]){return F[1]+B;
}return y;
},globalEval:function(d){if(window.execScript){return window.execScript(d);
}else{return eval.call(window,d);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(n,o){{};
if(!o){return n;
}if(!(o.self||o.args||o.delay!=null||o.periodical!=null||o.attempt)){return n;
}return function(event){{};
var f=qx.lang.Array.fromArguments(arguments);
if(o.args){f=o.args.concat(f);
}
if(o.delay||o.periodical){var e=qx.event.GlobalError.observeMethod(function(){return n.apply(o.self||this,f);
});

if(o.delay){return window.setTimeout(e,o.delay);
}
if(o.periodical){return window.setInterval(e,o.periodical);
}}else if(o.attempt){var g=false;

try{g=n.apply(o.self||this,f);
}catch(j){}return g;
}else{return n.apply(o.self||this,f);
}};
},bind:function(b,self,c){return this.create(b,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(h,i){return this.create(h,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(k,self,l){if(arguments.length<3){return function(event){return k.call(self||this,event||window.event);
};
}else{var m=qx.lang.Array.fromArguments(arguments,2);
return function(event){var a=[event||window.event];
a.push.apply(a,m);
k.apply(self||this,a);
};
}},attempt:function(C,self,D){return this.create(C,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(p,q,self,r){return this.create(p,{delay:q,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(t,u,self,v){return this.create(t,{periodical:u,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var g="qx.event.Registration";
qx.Class.define(g,{statics:{__eR:{},getManager:function(K){if(K==null){{};
K=window;
}else if(K.nodeType){K=qx.dom.Node.getWindow(K);
}else if(!qx.dom.Node.isWindow(K)){K=window;
}var M=K.$$hash||qx.core.ObjectRegistry.toHashCode(K);
var L=this.__eR[M];

if(!L){L=new qx.event.Manager(K,this);
this.__eR[M]=L;
}return L;
},removeManager:function(v){var w=v.getWindowId();
delete this.__eR[w];
},addListener:function(c,d,e,self,f){return this.getManager(c).addListener(c,d,e,self,f);
},removeListener:function(F,G,H,self,I){return this.getManager(F).removeListener(F,G,H,self,I);
},removeListenerById:function(z,A){return this.getManager(z).removeListenerById(z,A);
},removeAllListeners:function(l){return this.getManager(l).removeAllListeners(l);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(C,D,E){return this.getManager(C).hasListener(C,D,E);
},serializeListeners:function(s){return this.getManager(s).serializeListeners(s);
},createEvent:function(h,i,j){{};
if(i==null){i=qx.event.type.Event;
}var k=qx.event.Pool.getInstance().getObject(i);
j?k.init.apply(k,j):k.init();
if(h){k.setType(h);
}return k;
},dispatchEvent:function(B,event){return this.getManager(B).dispatchEvent(B,event);
},fireEvent:function(N,O,P,Q){var R;
{};
var S=this.createEvent(O,P||null,Q);
return this.getManager(N).dispatchEvent(N,S);
},fireNonBubblingEvent:function(m,n,o,p){{};
var q=this.getManager(m);

if(!q.hasListener(m,n,false)){return true;
}var r=this.createEvent(n,o||null,p);
return q.dispatchEvent(m,r);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__eS:[],addHandler:function(J){{};
this.__eS.push(J);
this.__eS.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__eS;
},__eT:[],addDispatcher:function(x,y){{};
this.__eT.push(x);
this.__eT.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__eT;
}}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__hI:{},__hJ:0,__hK:[],register:function(k){var o=this.__hI;

if(!o){return;
}var n=k.$$hash;

if(n==null){var m=this.__hK;

if(m.length>0){n=m.pop();
}else{n=(this.__hJ++)+d;
}k.$$hash=n;
}{};
o[n]=k;
},unregister:function(g){var h=g.$$hash;

if(h==null){return;
}var j=this.__hI;

if(j&&j[h]){delete j[h];
this.__hK.push(h);
}try{delete g.$$hash;
}catch(f){if(g.removeAttribute){g.removeAttribute(e);
}}},toHashCode:function(r){{};
var t=r.$$hash;

if(t!=null){return t;
}var s=this.__hK;

if(s.length>0){t=s.pop();
}else{t=(this.__hJ++)+d;
}return r.$$hash=t;
},clearHashCode:function(u){{};
var v=u.$$hash;

if(v!=null){this.__hK.push(v);
try{delete u.$$hash;
}catch(p){if(u.removeAttribute){u.removeAttribute(e);
}}}},fromHashCode:function(A){return this.__hI[A]||null;
},shutdown:function(){this.inShutDown=true;
var x=this.__hI;
var z=[];

for(var y in x){z.push(y);
}z.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var w,i=0,l=z.length;

while(true){try{for(;i<l;i++){y=z[i];
w=x[y];

if(w&&w.dispose){w.dispose();
}}}catch(q){qx.Bootstrap.error(this,"Could not dispose object "+w.toString()+": "+q);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__hI;
},getRegistry:function(){return this.__hI;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var k=":",j="qx.client",h="anonymous",g="...",f="qx.dev.StackTrace",e="",d="\n",c="/source/class/",b=".";
qx.Class.define(f,{statics:{getStackTrace:qx.core.Variant.select(j,{"gecko":function(){try{throw new Error();
}catch(l){var O=this.getStackTraceFromError(l);
qx.lang.Array.removeAt(O,0);
var M=this.getStackTraceFromCaller(arguments);
var K=M.length>O.length?M:O;

for(var i=0;i<Math.min(M.length,O.length);i++){var L=M[i];

if(L.indexOf(h)>=0){continue;
}var S=L.split(k);

if(S.length!=2){continue;
}var Q=S[0];
var J=S[1];
var I=O[i];
var T=I.split(k);
var P=T[0];
var H=T[1];

if(qx.Class.getByName(P)){var N=P;
}else{N=Q;
}var R=N+k;

if(J){R+=J+k;
}R+=H;
K[i]=R;
}return K;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var x;

try{x.bar();
}catch(U){var y=this.getStackTraceFromError(U);
qx.lang.Array.removeAt(y,0);
return y;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(j,{"opera":function(w){return [];
},"default":function(q){var v=[];
var u=qx.lang.Function.getCaller(q);
var r={};

while(u){var s=qx.lang.Function.getName(u);
v.push(s);

try{u=u.caller;
}catch(G){break;
}
if(!u){break;
}var t=qx.core.ObjectRegistry.toHashCode(u);

if(r[t]){v.push(g);
break;
}r[t]=u;
}return v;
}}),getStackTraceFromError:qx.core.Variant.select(j,{"gecko":function(z){if(!z.stack){return [];
}var F=/@(.+):(\d+)$/gm;
var A;
var B=[];

while((A=F.exec(z.stack))!=null){var C=A[1];
var E=A[2];
var D=this.__ko(C);
B.push(D+k+E);
}return B;
},"webkit":function(a){if(a.sourceURL&&a.line){return [this.__ko(a.sourceURL)+k+a.line];
}else{return [];
}},"opera":function(V){if(V.message.indexOf("Backtrace:")<0){return [];
}var X=[];
var Y=qx.lang.String.trim(V.message.split("Backtrace:")[1]);
var ba=Y.split(d);

for(var i=0;i<ba.length;i++){var W=ba[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(W&&W.length>=2){var bc=W[1];
var bb=this.__ko(W[2]);
X.push(bb+k+bc);
}}return X;
},"default":function(){return [];
}}),__ko:function(m){var p=c;
var n=m.indexOf(p);
var o=(n==-1)?m:m.substring(n+p.length).replace(/\//g,b).replace(/\.js$/,e);
return o;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(n){this.setMaxEntries(n||50);
},members:{__hB:0,__hC:0,__hD:false,__hE:0,__hF:null,__hG:null,setMaxEntries:function(m){this.__hG=m;
this.clear();
},getMaxEntries:function(){return this.__hG;
},addEntry:function(g){this.__hF[this.__hB]=g;
this.__hB=this.__hH(this.__hB,1);
var h=this.getMaxEntries();

if(this.__hC<h){this.__hC++;
}if(this.__hD&&(this.__hE<h)){this.__hE++;
}},mark:function(){this.__hD=true;
this.__hE=0;
},clearMark:function(){this.__hD=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(b,c){if(b>this.__hC){b=this.__hC;
}if(c&&this.__hD&&(b>this.__hE)){b=this.__hE;
}
if(b>0){var e=this.__hH(this.__hB,-1);
var d=this.__hH(e,-b+1);
var f;

if(d<=e){f=this.__hF.slice(d,e+1);
}else{f=this.__hF.slice(d,this.__hC).concat(this.__hF.slice(0,e+1));
}}else{f=[];
}return f;
},clear:function(){this.__hF=new Array(this.getMaxEntries());
this.__hC=0;
this.__hE=0;
this.__hB=0;
},__hH:function(i,j){var k=this.getMaxEntries();
var l=(i+j)%k;
if(l<0){l+=k;
}return l;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(c){this.setMaxMessages(c||50);
},members:{setMaxMessages:function(b){this.setMaxEntries(b);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var bd="node",bc="error",bb="...(+",ba="array",Y=")",X="info",W="instance",V="string",U="null",T="class",bz="number",by="stringify",bx="]",bw="date",bv="unknown",bu="function",bt="boolean",bs="debug",br="map",bq="undefined",bk="qx.log.Logger",bl="[",bi="#",bj="warn",bg="document",bh="{...(",be="text[",bf="[...(",bm="\n",bn=")}",bp=")]",bo="object";
qx.Class.define(bk,{statics:{__eU:bs,setLevel:function(E){this.__eU=E;
},getLevel:function(){return this.__eU;
},setTreshold:function(bC){this.__eX.setMaxMessages(bC);
},getTreshold:function(){return this.__eX.getMaxMessages();
},__eV:{},__eW:0,register:function(bO){if(bO.$$id){return;
}var bQ=this.__eW++;
this.__eV[bQ]=bO;
bO.$$id=bQ;
var bP=this.__eY;
var bR=this.__eX.getAllLogEvents();

for(var i=0,l=bR.length;i<l;i++){if(bP[bR[i].level]>=bP[this.__eU]){bO.process(bR[i]);
}}},unregister:function(bA){var bB=bA.$$id;

if(bB==null){return;
}delete this.__eV[bB];
delete bA.$$id;
},debug:function(H,I){qx.log.Logger.__fa(bs,arguments);
},info:function(j,k){qx.log.Logger.__fa(X,arguments);
},warn:function(o,p){qx.log.Logger.__fa(bj,arguments);
},error:function(bD,bE){qx.log.Logger.__fa(bc,arguments);
},trace:function(D){qx.log.Logger.__fa(X,[D,qx.dev.StackTrace.getStackTrace().join(bm)]);
},deprecatedMethodWarning:function(M,N){var O;
{};
},deprecatedClassWarning:function(q,r){var s;
{};
},deprecatedEventWarning:function(J,event,K){var L;
{};
},deprecatedMixinWarning:function(f,g){var h;
{};
},deprecatedConstantWarning:function(P,Q,R){var self,S;
{};
},deprecateMethodOverriding:function(a,b,c,d){var e;
{};
},clear:function(){this.__eX.clearHistory();
},__eX:new qx.log.appender.RingBuffer(50),__eY:{debug:0,info:1,warn:2,error:3},__fa:function(t,u){var z=this.__eY;

if(z[t]<z[this.__eU]){return;
}var w=u.length<2?null:u[0];
var y=w?1:0;
var v=[];

for(var i=y,l=u.length;i<l;i++){v.push(this.__fc(u[i],true));
}var A=new Date;
var B={time:A,offset:A-qx.Bootstrap.LOADSTART,level:t,items:v,win:window};
if(w){if(w instanceof qx.core.Object){B.object=w.$$hash;
}else if(w.$$type){B.clazz=w;
}}this.__eX.process(B);
var C=this.__eV;

for(var x in C){C[x].process(B);
}},__fb:function(F){if(F===undefined){return bq;
}else if(F===null){return U;
}
if(F.$$type){return T;
}var G=typeof F;

if(G===bu||G==V||G===bz||G===bt){return G;
}else if(G===bo){if(F.nodeType){return bd;
}else if(F.classname){return W;
}else if(F instanceof Array){return ba;
}else if(F instanceof Error){return bc;
}else if(F instanceof Date){return bw;
}else{return br;
}}
if(F.toString){return by;
}return bv;
},__fc:function(bF,bG){var bN=this.__fb(bF);
var bJ=bv;
var bI=[];

switch(bN){case U:case bq:bJ=bN;
break;
case V:case bz:case bt:case bw:bJ=bF;
break;
case bd:if(bF.nodeType===9){bJ=bg;
}else if(bF.nodeType===3){bJ=be+bF.nodeValue+bx;
}else if(bF.nodeType===1){bJ=bF.nodeName.toLowerCase();

if(bF.id){bJ+=bi+bF.id;
}}else{bJ=bd;
}break;
case bu:bJ=qx.lang.Function.getName(bF)||bN;
break;
case W:bJ=bF.basename+bl+bF.$$hash+bx;
break;
case T:case by:bJ=bF.toString();
break;
case bc:bI=qx.dev.StackTrace.getStackTraceFromError(bF);
bJ=bF.toString();
break;
case ba:if(bG){bJ=[];

for(var i=0,l=bF.length;i<l;i++){if(bJ.length>20){bJ.push(bb+(l-i)+Y);
break;
}bJ.push(this.__fc(bF[i],false));
}}else{bJ=bf+bF.length+bp;
}break;
case br:if(bG){var bH;
var bM=[];

for(var bL in bF){bM.push(bL);
}bM.sort();
bJ=[];

for(var i=0,l=bM.length;i<l;i++){if(bJ.length>20){bJ.push(bb+(l-i)+Y);
break;
}bL=bM[i];
bH=this.__fc(bF[bL],false);
bH.key=bL;
bJ.push(bH);
}}else{var bK=0;

for(var bL in bF){bK++;
}bJ=bh+bK+bn;
}break;
}return {type:bN,text:bJ,trace:bI};
}},defer:function(m){var n=qx.Bootstrap.$$logs;

for(var i=0;i<n.length;i++){m.__fa(n[i][0],n[i][1]);
}qx.Bootstrap.debug=m.debug;
qx.Bootstrap.info=m.info;
qx.Bootstrap.warn=m.warn;
qx.Bootstrap.error=m.error;
qx.Bootstrap.trace=m.trace;
}});
})();
(function(){var bB="set",bA="get",bz="reset",by="MSIE 6.0",bx="info",bw="qx.core.Object",bv="error",bu="warn",bt="]",bs="debug",bp="[",br="$$user_",bq="rv:1.8.1",bo="Object";
qx.Class.define(bw,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bo},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bp+this.$$hash+bt;
},base:function(bE,bF){{};

if(arguments.length===1){return bE.callee.base.call(this);
}else{return bE.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bD){return bD.callee.self;
},clone:function(){var u=this.constructor;
var t=new u;
var w=qx.Class.getProperties(u);
var v=qx.core.Property.$$store.user;
var x=qx.core.Property.$$method.set;
var name;
for(var i=0,l=w.length;i<l;i++){name=w[i];

if(this.hasOwnProperty(v[name])){t[x[name]](this[v[name]]);
}}return t;
},set:function(T,U){var W=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(T)){if(!this[W[T]]){if(this[bB+qx.Bootstrap.firstUp(T)]!=undefined){this[bB+qx.Bootstrap.firstUp(T)](U);
return this;
}{};
}return this[W[T]](U);
}else{for(var V in T){if(!this[W[V]]){if(this[bB+qx.Bootstrap.firstUp(V)]!=undefined){this[bB+qx.Bootstrap.firstUp(V)](T[V]);
continue;
}{};
}this[W[V]](T[V]);
}return this;
}},get:function(g){var h=qx.core.Property.$$method.get;

if(!this[h[g]]){if(this[bA+qx.Bootstrap.firstUp(g)]!=undefined){return this[bA+qx.Bootstrap.firstUp(g)]();
}{};
}return this[h[g]]();
},reset:function(z){var A=qx.core.Property.$$method.reset;

if(!this[A[z]]){if(this[bz+qx.Bootstrap.firstUp(z)]!=undefined){this[bz+qx.Bootstrap.firstUp(z)]();
return;
}{};
}this[A[z]]();
},__kQ:qx.event.Registration,addListener:function(I,J,self,K){if(!this.$$disposed){return this.__kQ.addListener(this,I,J,self,K);
}return null;
},addListenerOnce:function(b,c,self,d){var f=function(e){this.removeListener(b,f,this,d);
c.call(self||this,e);
};
return this.addListener(b,f,this,d);
},removeListener:function(B,C,self,D){if(!this.$$disposed){return this.__kQ.removeListener(this,B,C,self,D);
}return false;
},removeListenerById:function(y){if(!this.$$disposed){return this.__kQ.removeListenerById(this,y);
}return false;
},hasListener:function(bM,bN){return this.__kQ.hasListener(this,bM,bN);
},dispatchEvent:function(j){if(!this.$$disposed){return this.__kQ.dispatchEvent(this,j);
}return true;
},fireEvent:function(E,F,G){if(!this.$$disposed){return this.__kQ.fireEvent(this,E,F,G);
}return true;
},fireNonBubblingEvent:function(L,M,N){if(!this.$$disposed){return this.__kQ.fireNonBubblingEvent(this,L,M,N);
}return true;
},fireDataEvent:function(Y,ba,bb,bc){if(!this.$$disposed){if(bb===undefined){bb=null;
}return this.__kQ.fireNonBubblingEvent(this,Y,qx.event.type.Data,[ba,bb,!!bc]);
}return true;
},__kR:null,setUserData:function(bm,bn){if(!this.__kR){this.__kR={};
}this.__kR[bm]=bn;
},getUserData:function(R){if(!this.__kR){return null;
}var S=this.__kR[R];
return S===undefined?null:S;
},__kS:qx.log.Logger,debug:function(m){this.__kT(bs,arguments);
},info:function(k){this.__kT(bx,arguments);
},warn:function(bG){this.__kT(bu,arguments);
},error:function(H){this.__kT(bv,arguments);
},trace:function(){this.__kS.trace(this);
},__kT:function(O,P){var Q=qx.lang.Array.fromArguments(P);
Q.unshift(this);
this.__kS[O].apply(this.__kS,Q);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var r,p,o,s;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var q=this.constructor;
var n;

while(q.superclass){if(q.$$destructor){q.$$destructor.call(this);
}if(q.$$includes){n=q.$$flatIncludes;

for(var i=0,l=n.length;i<l;i++){if(n[i].$$destructor){n[i].$$destructor.call(this);
}}}q=q.superclass;
}if(this.__kU){this.__kU();
}{};
},__kU:null,__kV:function(){var X=qx.Class.getProperties(this.constructor);

for(var i=0,l=X.length;i<l;i++){delete this[br+X[i]];
}},_disposeObjects:function(bH){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bd){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bC){qx.util.DisposeUtil.disposeArray(this,bC);
},_disposeMap:function(a){qx.util.DisposeUtil.disposeMap(this,a);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bI,bJ){{};
var bL=navigator.userAgent.indexOf(by)!=-1;
var bK=navigator.userAgent.indexOf(bq)!=-1;
if(bL||bK){bJ.__kU=bJ.__kV;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__kR=null;
var bg=this.constructor;
var bk;
var bl=qx.core.Property.$$store;
var bi=bl.user;
var bj=bl.theme;
var be=bl.inherit;
var bh=bl.useinit;
var bf=bl.init;

while(bg){bk=bg.$$properties;

if(bk){for(var name in bk){if(bk[name].dereference){this[bi[name]]=this[bj[name]]=this[be[name]]=this[bh[name]]=this[bf[name]]=undefined;
}}}bg=bg.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(h,i){},registerEvent:function(e,f,g){},unregisterEvent:function(b,c,d){}}});
})();
(function(){var d="qx.globalErrorHandling",c="on",b="qx.event.GlobalError";
qx.Bootstrap.define(b,{statics:{setErrorHandler:function(k,l){this.__jU=k||null;
this.__jV=l||window;

if(qx.core.Setting.get(d)===c){if(k&&window.onerror){var m=qx.Bootstrap.bind(this.__jX,this);

if(this.__jW==null){this.__jW=window.onerror;
}var self=this;
window.onerror=function(e){self.__jW(e);
m(e);
};
}
if(k&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__jX,this);
}if(this.__jU==null){if(this.__jW!=null){window.onerror=this.__jW;
this.__jW=null;
}else{window.onerror=null;
}}}},__jX:function(g,h,i){if(this.__jU){this.handleError(new qx.core.WindowError(g,h,i));
return true;
}},observeMethod:function(f){if(qx.core.Setting.get(d)===c){var self=this;
return function(){if(!self.__jU){return f.apply(this,arguments);
}
try{return f.apply(this,arguments);
}catch(n){self.handleError(new qx.core.GlobalError(n,arguments));
}};
}else{return f;
}},handleError:function(a){if(this.__jU){this.__jU.call(this.__jV,a);
}}},defer:function(j){qx.core.Setting.define(d,c);
j.setErrorHandler(null,null);
}});
})();
(function(){var n="ready",m="qx.client",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="qx.application",f="gecko|opera|webkit",d="left",b="DOMContentLoaded",c="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this._window=a.getWindow();
this.__hu=false;
this.__hv=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var A=qx.event.handler.Application.$$instance;

if(A){A.__hy();
}}},members:{canHandleEvent:function(t,u){},registerEvent:function(x,y,z){},unregisterEvent:function(p,q,r){},__hw:null,__hu:null,__hv:null,__hx:null,__hy:function(){if(!this.__hw&&this.__hu&&qx.$$loader.scriptLoaded){try{var s=qx.core.Setting.get(g);

if(!qx.Class.getByName(s)){return;
}}catch(e){}if(qx.core.Variant.isSet(m,l)){if(qx.event.Registration.hasListener(this._window,n)){this.__hw=true;
qx.event.Registration.fireEvent(this._window,n);
}}else{this.__hw=true;
qx.event.Registration.fireEvent(this._window,n);
}}},isApplicationReady:function(){return this.__hw;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==n){this.__hu=true;
this.__hy();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(m,f)){qx.bom.Event.addNativeListener(this._window,b,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(m,l)){var self=this;
var v=function(){try{document.documentElement.doScroll(d);

if(document.body){self._onNativeLoadWrapped();
}}catch(w){window.setTimeout(v,100);
}};
v();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__hu=true;
this.__hy();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__hx){this.__hx=true;

try{qx.event.Registration.fireEvent(this._window,c);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var c="qx.event.handler.Window";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this._manager=d;
this._window=d.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(f,g,h){},unregisterEvent:function(p,q,r){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var o=qx.event.handler.Window.SUPPORTED_TYPES;

for(var n in o){qx.bom.Event.addNativeListener(this._window,n,this._onNativeWrapper);
}},_stopWindowObserver:function(){var u=qx.event.handler.Window.SUPPORTED_TYPES;

for(var t in u){qx.bom.Event.removeNativeListener(this._window,t,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var j=this._window;

try{var m=j.document;
}catch(e){return ;
}var k=m.documentElement;
var i=e.target||e.srcElement;

if(i==null||i===j||i===m||i===k){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,j]);
qx.event.Registration.dispatchEvent(j,event);
var l=event.getReturnValue();

if(l!=null){e.returnValue=l;
return l;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(e){this._manager=e;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(b,event,c){return !event.getBubbles();
},dispatchEvent:function(f,event,g){var k,h;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var m=this._manager.getListeners(f,g,false);

if(m){for(var i=0,l=m.length;i<l;i++){var j=m[i].context||f;
m[i].handler.call(j,event);
}}}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__jR||null;
},ready:function(){if(this.__jR){return;
}
if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var k=qx.core.Setting.get(d);
var l=qx.Class.getByName(k);

if(l){this.__jR=new l;
var j=new Date;
this.__jR.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-j)+"ms");
var j=new Date;
this.__jR.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-j)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+k);
}},__jS:function(e){var g=this.__jR;

if(g){e.setReturnValue(g.close());
}},__jT:function(){var i=this.__jR;

if(i){i.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,f,h.ready,h);
qx.event.Registration.addListener(window,a,h.__jT,h);
qx.event.Registration.addListener(window,c,h.__jS,h);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(k,l,m,n){var o=qx.locale.Manager;

if(o){return o.trn.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(e,f,g){var h=qx.locale.Manager;

if(h){return h.trc.apply(h,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(i){var j=qx.locale.Manager;

if(j){return j.marktr.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__mQ:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__mQ;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__mQ=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__mQ=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var k="value",j="size",h="light",g="mode",f="date",e="checkbox",d="Trash",c="",b="checked",a="Windows (C:)",K="Documents (D:)",J="demobrowser.demo.data.Tree_Columns",I="Inbox",H="Desktop",G="icon/16/places/user-desktop.png",F="Personal",E="source",D="-rw-r--r--",C="Presets",B="Network",r="Sent",s="children",p="Big",q="Files",n="icon/16/status/dialog-information.png",o=" 2010",l="Workspace",m="Spam",t="Data",u="May ",w="Root",v="label",y="Lists",x="kb",A="Item ",z="Edit";
qx.Class.define(J,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);
var M=new qx.ui.container.Scroll();
var L=new qx.ui.container.Composite(new qx.ui.layout.Basic());
L.setAllowGrowX(false);
L.setAllowStretchX(false);
M.add(L);
this.getRoot().add(M,{edge:0});
var N=new qx.ui.tree.Tree().set({width:600,height:500});
L.add(N,{left:20,top:48});
var P={label:w,children:[{label:H,children:[{label:q},{label:l,children:[{label:a},{label:K}]},{label:B},{label:d}]},{label:I,children:[{label:C},{label:r},{label:d},{label:t},{label:z},{label:y},{label:F},{label:p,children:[]},{label:m}]}]};

for(var i=0;i<50;i++){P.children[1].children[7].children[i]={label:A+i};
}this.extendData(P);
var O=qx.data.marshal.Json.createModel(P);
var Q=new qx.data.controller.Tree(null,N,s,v);
Q.setDelegate(this);
Q.setModel(O);
},extendData:function(Y){Y.date=u+Math.round(Math.random()*30+1)+o;
Y.size=Math.round(Math.random()*100)+x;
Y.light=Math.floor(Math.random()*4)==0;
Y.mode=D;
Y.checked=Math.random()>=0.5;

if(Y.children){for(var i=0;i<Y.children.length;i++){this.extendData(Y.children[i]);
}}},bindItem:function(V,W,X){V.bindDefaultProperties(W,X);
V.bindProperty(j,k,null,W.getUserData(j),X);
V.bindProperty(b,k,null,W.getUserData(e),X);
V.bindPropertyReverse(b,k,null,W.getUserData(e),X);
V.bindProperty(f,k,null,W.getUserData(f),X);
V.bindProperty(g,k,null,W.getUserData(g),X);
V.bindProperty(h,E,{converter:function(ba){return ba?n:c;
}},W.getUserData(h),X);
},createItem:function(){var R=new qx.ui.tree.TreeFolder();
var T=new qx.ui.basic.Image();
T.setWidth(16);
R.addWidget(T);
R.setUserData(h,T);
R.addSpacer();
R.addOpenButton();
R.addIcon();
R.setIcon(G);
var S=new qx.ui.form.CheckBox();
S.setFocusable(false);
R.addWidget(S);
R.setUserData(e,S);
R.addLabel(c);
R.addWidget(new qx.ui.core.Spacer(),{flex:1});
var U=new qx.ui.basic.Label();
U.setWidth(50);
R.addWidget(U);
R.setUserData(j,U);
U=new qx.ui.basic.Label();
U.setWidth(150);
R.addWidget(U);
R.setUserData(f,U);
U=new qx.ui.basic.Label();
U.setWidth(80);
R.addWidget(U);
R.setUserData(g,U);
return R;
}}});
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(h,i){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!h;
this._cancelable=!!i;
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
},setType:function(g){this._type=g;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(j){this._eventPhase=j;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(l){this._target=l;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(k){this._currentTarget=k;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(c){this._relatedTarget=c;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(f){this._originalTarget=f;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(m){this._bubbles=m;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(b){this._cancelable=b;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__jm:null,__jn:null,init:function(d,e,f){qx.event.type.Event.prototype.init.call(this,false,f);
this.__jm=d;
this.__jn=e;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
c.__jm=this.__jm;
c.__jn=this.__jn;
return c;
},getData:function(){return this.__jm;
},getOldData:function(){return this.__jn;
}},destruct:function(){this.__jm=this.__jn=null;
}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="set",D="deepBinding",C="item",B="reset",A="' (",z="Boolean",y=") to the object '",x="Integer",w=" of object ",v="qx.data.SingleValueBinding",u="Binding property ",s="Binding from '",t="PositiveNumber",q="PositiveInteger",r="Binding does not exist!",o=").",p="Date",n=" not possible: No event available. ";
qx.Class.define(v,{statics:{DEBUG_ON:false,__fQ:{},bind:function(T,U,V,W,X){var bi=this.__fS(T,U,V,W,X);
var bd=U.split(d);
var ba=this.__ga(bd);
var bh=[];
var be=[];
var bf=[];
var bb=[];
var bc=T;
for(var i=0;i<bd.length;i++){if(ba[i]!==l){bb.push(g);
}else{bb.push(this.__fU(bc,bd[i]));
}bh[i]=bc;
if(i==bd.length-1){if(ba[i]!==l){var bl=ba[i]===h?bc.length-1:ba[i];
var Y=bc.getItem(bl);
this.__fY(Y,V,W,X,T);
bf[i]=this.__gb(bc,bb[i],V,W,X,ba[i]);
}else{if(bd[i]!=null&&bc[m+qx.lang.String.firstUp(bd[i])]!=null){var Y=bc[m+qx.lang.String.firstUp(bd[i])]();
this.__fY(Y,V,W,X,T);
}bf[i]=this.__gb(bc,bb[i],V,W,X);
}}else{var bj={index:i,propertyNames:bd,sources:bh,listenerIds:bf,arrayIndexValues:ba,targetObject:V,targetPropertyChain:W,options:X,listeners:be};
var bg=qx.lang.Function.bind(this.__fR,this,bj);
be.push(bg);
bf[i]=bc.addListener(bb[i],bg);
}if(bc[m+qx.lang.String.firstUp(bd[i])]==null){bc=null;
}else if(ba[i]!==l){bc=bc[m+qx.lang.String.firstUp(bd[i])](ba[i]);
}else{bc=bc[m+qx.lang.String.firstUp(bd[i])]();
}
if(!bc){break;
}}var bk={type:D,listenerIds:bf,sources:bh,targetListenerIds:bi.listenerIds,targets:bi.targets};
this.__gc(bk,T,U,V,W);
return bk;
},__fR:function(bH){if(bH.options&&bH.options.onUpdate){bH.options.onUpdate(bH.sources[bH.index],bH.targetObject);
}for(var j=bH.index+1;j<bH.propertyNames.length;j++){var bL=bH.sources[j];
bH.sources[j]=null;

if(!bL){continue;
}bL.removeListenerById(bH.listenerIds[j]);
}var bL=bH.sources[bH.index];
for(var j=bH.index+1;j<bH.propertyNames.length;j++){if(bH.arrayIndexValues[j-1]!==l){bL=bL[m+qx.lang.String.firstUp(bH.propertyNames[j-1])](bH.arrayIndexValues[j-1]);
}else{bL=bL[m+qx.lang.String.firstUp(bH.propertyNames[j-1])]();
}bH.sources[j]=bL;
if(!bL){this.__fV(bH.targetObject,bH.targetPropertyChain);
break;
}if(j==bH.propertyNames.length-1){if(qx.Class.implementsInterface(bL,qx.data.IListData)){var bM=bH.arrayIndexValues[j]===h?bL.length-1:bH.arrayIndexValues[j];
var bJ=bL.getItem(bM);
this.__fY(bJ,bH.targetObject,bH.targetPropertyChain,bH.options,bH.sources[bH.index]);
bH.listenerIds[j]=this.__gb(bL,g,bH.targetObject,bH.targetPropertyChain,bH.options,bH.arrayIndexValues[j]);
}else{if(bH.propertyNames[j]!=null&&bL[m+qx.lang.String.firstUp(bH.propertyNames[j])]!=null){var bJ=bL[m+qx.lang.String.firstUp(bH.propertyNames[j])]();
this.__fY(bJ,bH.targetObject,bH.targetPropertyChain,bH.options,bH.sources[bH.index]);
}var bK=this.__fU(bL,bH.propertyNames[j]);
bH.listenerIds[j]=this.__gb(bL,bK,bH.targetObject,bH.targetPropertyChain,bH.options);
}}else{if(bH.listeners[j]==null){var bI=qx.lang.Function.bind(this.__fR,this,bH);
bH.listeners.push(bI);
}if(qx.Class.implementsInterface(bL,qx.data.IListData)){var bK=g;
}else{var bK=this.__fU(bL,bH.propertyNames[j]);
}bH.listenerIds[j]=bL.addListener(bK,bH.listeners[j]);
}}},__fS:function(cw,cx,cy,cz,cA){var cE=cz.split(d);
var cC=this.__ga(cE);
var cJ=[];
var cI=[];
var cG=[];
var cF=[];
var cD=cy;
for(var i=0;i<cE.length-1;i++){if(cC[i]!==l){cF.push(g);
}else{try{cF.push(this.__fU(cD,cE[i]));
}catch(e){break;
}}cJ[i]=cD;
var cH=function(){for(var j=i+1;j<cE.length-1;j++){var R=cJ[j];
cJ[j]=null;

if(!R){continue;
}R.removeListenerById(cG[j]);
}var R=cJ[i];
for(var j=i+1;j<cE.length-1;j++){var P=qx.lang.String.firstUp(cE[j-1]);
if(cC[j-1]!==l){var S=cC[j-1]===h?R.getLength()-1:cC[j-1];
R=R[m+P](S);
}else{R=R[m+P]();
}cJ[j]=R;
if(cI[j]==null){cI.push(cH);
}if(qx.Class.implementsInterface(R,qx.data.IListData)){var Q=g;
}else{try{var Q=qx.data.SingleValueBinding.__fU(R,cE[j]);
}catch(e){break;
}}cG[j]=R.addListener(Q,cI[j]);
}qx.data.SingleValueBinding.__fT(cw,cx,cy,cz,cA);
};
cI.push(cH);
cG[i]=cD.addListener(cF[i],cH);
var cB=qx.lang.String.firstUp(cE[i]);
if(cD[m+cB]==null){cD=null;
}else if(cC[i]!==l){cD=cD[m+cB](cC[i]);
}else{cD=cD[m+cB]();
}
if(!cD){break;
}}return {listenerIds:cG,targets:cJ};
},__fT:function(E,F,G,H,I){var M=this.__fX(E,F);

if(M!=null){var O=F.substring(F.lastIndexOf(d)+1,F.length);
if(O.charAt(O.length-1)==f){var J=O.substring(O.lastIndexOf(k)+1,O.length-1);
var L=O.substring(0,O.lastIndexOf(k));
var N=M[m+qx.lang.String.firstUp(L)]();

if(J==h){J=N.length-1;
}
if(N!=null){var K=N.getItem(J);
}}else{var K=M[m+qx.lang.String.firstUp(O)]();
}}K=qx.data.SingleValueBinding.__gd(K,G,H,I);
this.__fW(G,H,K);
},__fU:function(bU,bV){var bW=this.__ge(bU,bV);
if(bW==null){if(qx.Class.supportsEvent(bU.constructor,bV)){bW=bV;
}else if(qx.Class.supportsEvent(bU.constructor,g+qx.lang.String.firstUp(bV))){bW=g+qx.lang.String.firstUp(bV);
}else{throw new qx.core.AssertionError(u+bV+w+bU+n);
}}return bW;
},__fV:function(cb,cc){var cd=this.__fX(cb,cc);

if(cd!=null){var ce=cc.substring(cc.lastIndexOf(d)+1,cc.length);
if(ce.charAt(ce.length-1)==f){this.__fW(cb,cc,null);
return;
}if(cd[B+qx.lang.String.firstUp(ce)]!=undefined){cd[B+qx.lang.String.firstUp(ce)]();
}else{cd[a+qx.lang.String.firstUp(ce)](null);
}}},__fW:function(cP,cQ,cR){var cV=this.__fX(cP,cQ);

if(cV!=null){var cW=cQ.substring(cQ.lastIndexOf(d)+1,cQ.length);
if(cW.charAt(cW.length-1)==f){var cS=cW.substring(cW.lastIndexOf(k)+1,cW.length-1);
var cU=cW.substring(0,cW.lastIndexOf(k));
var cT=cV[m+qx.lang.String.firstUp(cU)]();

if(cS==h){cS=cT.length-1;
}
if(cT!=null){cT.setItem(cS,cR);
}}else{cV[a+qx.lang.String.firstUp(cW)](cR);
}}},__fX:function(cq,cr){var cu=cr.split(d);
var cv=cq;
for(var i=0;i<cu.length-1;i++){try{var ct=cu[i];
if(ct.indexOf(f)==ct.length-1){var cs=ct.substring(ct.indexOf(k)+1,ct.length-1);
ct=ct.substring(0,ct.indexOf(k));
}cv=cv[m+qx.lang.String.firstUp(ct)]();

if(cs!=null){if(cs==h){cs=cv.length-1;
}cv=cv.getItem(cs);
cs=null;
}}catch(bA){return null;
}}return cv;
},__fY:function(cl,cm,cn,co,cp){cl=this.__gd(cl,cm,cn,co);
if(cl===undefined){this.__fV(cm,cn);
}if(cl!==undefined){try{this.__fW(cm,cn,cl);
if(co&&co.onUpdate){co.onUpdate(cp,cm,cl);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(co&&co.onSetFail){co.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cl+" on "+cm+". Error message: "+e);
}}}},__ga:function(bR){var bS=[];
for(var i=0;i<bR.length;i++){var name=bR[i];
if(qx.lang.String.endsWith(name,f)){var bT=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bT!==h){if(bT==l||isNaN(parseInt(bT))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){bR[i]=name.substring(0,name.indexOf(k));
bS[i]=l;
bS[i+1]=bT;
bR.splice(i+1,0,C);
i++;
}else{bS[i]=bT;
bR.splice(i,1,C);
}}else{bS[i]=l;
}}return bS;
},__gb:function(cX,cY,da,db,dc,dd){var de;
{};
var dg=function(ch,e){if(ch!==l){if(ch===h){ch=cX.length-1;
}var ck=cX.getItem(ch);
if(ck===undefined){qx.data.SingleValueBinding.__fV(da,db);
}var ci=e.getData().start;
var cj=e.getData().end;

if(ch<ci||ch>cj){return;
}}else{var ck=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cX+" by "+cY+" to "+da+" ("+db+")");
qx.log.Logger.debug("Data before conversion: "+ck);
}ck=qx.data.SingleValueBinding.__gd(ck,da,db,dc);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+ck);
}try{if(ck!==undefined){qx.data.SingleValueBinding.__fW(da,db,ck);
}else{qx.data.SingleValueBinding.__fV(da,db);
}if(dc&&dc.onUpdate){dc.onUpdate(cX,da,ck);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(dc&&dc.onSetFail){dc.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+ck+" on "+da+". Error message: "+e);
}}};
if(!dd){dd=l;
}dg=qx.lang.Function.bind(dg,cX,dd);
var df=cX.addListener(cY,dg);
return df;
},__gc:function(cK,cL,cM,cN,cO){if(this.__fQ[cL.toHashCode()]===undefined){this.__fQ[cL.toHashCode()]=[];
}this.__fQ[cL.toHashCode()].push([cK,cL,cM,cN,cO]);
},__gd:function(br,bs,bt,bu){if(bu&&bu.converter){var bw;

if(bs.getModel){bw=bs.getModel();
}return bu.converter(br,bw);
}else{var by=this.__fX(bs,bt);
var bz=bt.substring(bt.lastIndexOf(d)+1,bt.length);
if(by==null){return br;
}var bx=qx.Class.getPropertyDefinition(by.constructor,bz);
var bv=bx==null?l:bx.check;
return this.__gf(br,bv);
}},__ge:function(bX,bY){var ca=qx.Class.getPropertyDefinition(bX.constructor,bY);

if(ca==null){return null;
}return ca.event;
},__gf:function(bB,bC){var bD=qx.lang.Type.getClass(bB);
if((bD==c||bD==b)&&(bC==x||bC==q)){bB=parseInt(bB);
}if((bD==z||bD==c||bD==p)&&bC==b){bB=bB+l;
}if((bD==c||bD==b)&&(bC==c||bC==t)){bB=parseFloat(bB);
}return bB;
},removeBindingFromObject:function(bE,bF){if(bF.type==D){for(var i=0;i<bF.sources.length;i++){if(bF.sources[i]){bF.sources[i].removeListenerById(bF.listenerIds[i]);
}}for(var i=0;i<bF.targets.length;i++){if(bF.targets[i]){bF.targets[i].removeListenerById(bF.targetListenerIds[i]);
}}}else{bE.removeListenerById(bF);
}var bG=this.__fQ[bE.toHashCode()];
if(bG!=undefined){for(var i=0;i<bG.length;i++){if(bG[i][0]==bF){qx.lang.Array.remove(bG,bG[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bo){{};
var bp=this.__fQ[bo.toHashCode()];

if(bp!=undefined){for(var i=bp.length-1;i>=0;i--){this.removeBindingFromObject(bo,bp[i][0]);
}}},getAllBindingsForObject:function(bq){if(this.__fQ[bq.toHashCode()]===undefined){this.__fQ[bq.toHashCode()]=[];
}return this.__fQ[bq.toHashCode()];
},removeAllBindings:function(){for(var bn in this.__fQ){var bm=qx.core.ObjectRegistry.fromHashCode(bn);
if(bm==null){delete this.__fQ[bn];
continue;
}this.removeAllBindingsForObject(bm);
}this.__fQ={};
},getAllBindings:function(){return this.__fQ;
},showBindingInLog:function(bN,bO){var bQ;
for(var i=0;i<this.__fQ[bN.toHashCode()].length;i++){if(this.__fQ[bN.toHashCode()][i][0]==bO){bQ=this.__fQ[bN.toHashCode()][i];
break;
}}
if(bQ===undefined){var bP=r;
}else{var bP=s+bQ[1]+A+bQ[2]+y+bQ[3]+A+bQ[4]+o;
}qx.log.Logger.debug(bP);
},showAllBindingsInLog:function(){for(var cg in this.__fQ){var cf=qx.core.ObjectRegistry.fromHashCode(cg);

for(var i=0;i<this.__fQ[cg].length;i++){this.showBindingInLog(cf,this.__fQ[cg][i][0]);
}}}}});
})();
(function(){var I="",H="g",G="0",F='\\$1',E="%",D='-',C="qx.lang.String",B=' ',A='\n',z="undefined";
qx.Class.define(C,{statics:{camelCase:function(d){return d.replace(/\-([a-z])/g,function(m,n){return n.toUpperCase();
});
},hyphenate:function(e){return e.replace(/[A-Z]/g,function(O){return (D+O.charAt(0).toLowerCase());
});
},capitalize:function(b){return b.replace(/\b[a-z]/g,function(c){return c.toUpperCase();
});
},clean:function(f){return this.trim(f.replace(/\s+/g,B));
},trimLeft:function(a){return a.replace(/^\s+/,I);
},trimRight:function(j){return j.replace(/\s+$/,I);
},trim:function(k){return k.replace(/^\s+|\s+$/g,I);
},startsWith:function(J,K){return J.indexOf(K)===0;
},endsWith:function(P,Q){return P.substring(P.length-Q.length,P.length)===Q;
},repeat:function(u,v){return u.length>0?new Array(v+1).join(u):I;
},pad:function(L,length,M){var N=length-L.length;

if(N>0){if(typeof M===z){M=G;
}return this.repeat(M,N)+L;
}else{return L;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(s,t){return s.indexOf(t)!=-1;
},format:function(w,x){var y=w;

for(var i=0;i<x.length;i++){y=y.replace(new RegExp(E+(i+1),H),x[i]+I);
}return y;
},escapeRegexpChars:function(l){return l.replace(/([.*+?^${}()|[\]\/\\])/g,F);
},toArray:function(g){return g.split(/\B|\b/g);
},stripTags:function(h){return h.replace(/<\/?[^>]+>/gi,I);
},stripScripts:function(o,p){var r=I;
var q=o.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){r+=arguments[1]+A;
return I;
});

if(p===true){qx.lang.Function.globalEval(r);
}return q;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(f){},setItem:function(d,e){},splice:function(h,i,j){},contains:function(g){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cQ=c;
this.__cR=d||b;
this.__cS=e===undefined?-1:e;
},members:{__cQ:null,__cR:null,__cS:null,toString:function(){return this.__cQ;
},getUri:function(){return this.__cR;
},getLineNumber:function(){return this.__cS;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__kp=b+(c&&c.message?c.message:c);
Error.call(this,this.__kp);
this.__kq=d;
this.__kr=c;
},members:{__kr:null,__kq:null,__kp:null,toString:function(){return this.__kp;
},getArguments:function(){return this.__kq;
},getSourceException:function(){return this.__kr;
}},destruct:function(){this.__kr=null;
this.__kq=null;
this.__kp=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__cN=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cN:null,message:null,getComment:function(){return this.__cN;
},toString:function(){return this.__cN+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__kW=qx.dev.StackTrace.getStackTrace();
},members:{__kW:null,getStackTrace:function(){return this.__kW;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(j){return this.getClass(j)==d;
},isNumber:function(g){return (g!==null&&(this.getClass(g)==b||g instanceof Number));
},isBoolean:function(h){return (h!==null&&(this.getClass(h)==a||h instanceof Boolean));
},isDate:function(k){return (k!==null&&(this.getClass(k)==c||k instanceof Date));
},isError:function(i){return (i!==null&&(this.getClass(i)==e||i instanceof Error));
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(f){qx.core.Object.call(this);
this.__fx={};

if(f!=null){this.setSize(f);
}},properties:{size:{check:a,init:Infinity}},members:{__fx:null,getObject:function(c){if(this.$$disposed){return new c;
}
if(!c){throw new Error("Class needs to be defined!");
}var d=null;
var e=this.__fx[c.classname];

if(e){d=e.pop();
}
if(d){d.$$pooled=false;
}else{d=new c;
}return d;
},poolObject:function(g){if(!this.__fx){return;
}var h=g.classname;
var j=this.__fx[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__fx[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__fx;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__fx;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(f,g,h){var name;

for(var i=0,l=g.length;i<l;i++){name=g[i];

if(f[name]==null||!f.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(f[name].dispose){if(!h&&f[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{f[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}f[name]=null;
}},disposeArray:function(q,r){var t=q[r];

if(!t){return;
}if(qx.core.ObjectRegistry.inShutDown){q[r]=null;
return;
}try{var s;

for(var i=t.length-1;i>=0;i--){s=t[i];

if(s){s.dispose();
}}}catch(b){throw new Error("The array field: "+r+" of object: "+q+" has non disposable entries: "+b);
}t.length=0;
q[r]=null;
},disposeMap:function(j,k){var n=j[k];

if(!n){return;
}if(qx.core.ObjectRegistry.inShutDown){j[k]=null;
return;
}try{var m;

for(var o in n){m=n[o];

if(n.hasOwnProperty(o)&&m){m.dispose();
}}}catch(p){throw new Error("The map field: "+k+" of object: "+j+" has non disposable entries: "+p);
}j[k]=null;
},disposeTriggeredBy:function(c,d){var e=d.dispose;
d.dispose=function(){e.call(d);
c.dispose();
};
}}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__eO:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__eP:function(K,L){return function(s){return K.prototype[L].apply(s,Array.prototype.slice.call(arguments,1));
};
},__eQ:function(){var M=qx.lang.Generics.__eO;

for(var Q in M){var O=window[Q];
var N=M[Q];

for(var i=0,l=N.length;i<l;i++){var P=N[i];

if(!O[P]){O[P]=qx.lang.Generics.__eP(O,P);
}}}}},defer:function(J){J.__eQ();
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
},clone:function(j){var k=qx.event.type.Event.prototype.clone.call(this,j);
var l={};
k._native=this._cloneNativeEvent(this._native,l);
k._returnValue=this._returnValue;
return k;
},_cloneNativeEvent:function(h,i){i.preventDefault=qx.lang.Function.empty;
return i;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(g){this._returnValue=g;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="iPad",d="X11",c="MacIntel",a="MacPPC";
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__ke:function(){var p=navigator.platform;
if(p==null||p===l){p=navigator.userAgent;
}
if(p.indexOf(f)!=-1||p.indexOf(m)!=-1||p.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(p.indexOf(h)!=-1||p.indexOf(a)!=-1||p.indexOf(c)!=-1||p.indexOf(n)!=-1||p.indexOf(g)!=-1||p.indexOf(b)!=-1){this.MAC=true;
this.NAME="mac";
}else if(p.indexOf(d)!=-1||p.indexOf(j)!=-1||p.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(o){o.__ke();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__kO:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__kP:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__kO){K.push(J);
}var M=new RegExp(l+K.join(C).replace(/\./g,r)+H,u);

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
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__kO[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__kP();
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
},members:{_dynamic:null,resolveDynamic:function(e){return this._dynamic[e];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(f){if(f&&this._dynamic[f]){return this._dynamic[f];
}return f;
},_setDynamic:function(c){this._dynamic=c;
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
(function(){var s=",",o="rgb(",n=")",m="qx.theme.manager.Color",l="qx.util.ColorUtil";
qx.Class.define(l,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(U){return this.NAMED[U]!==undefined;
},isSystemColor:function(S){return this.SYSTEM[S]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(m);
},isThemedColor:function(W){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(W);
},stringToRgb:function(bd){if(this.supportsThemes()&&this.isThemedColor(bd)){var bd=qx.theme.manager.Color.getInstance().resolveDynamic(bd);
}
if(this.isNamedColor(bd)){return this.NAMED[bd];
}else if(this.isSystemColor(bd)){throw new Error("Could not convert system colors to RGB: "+bd);
}else if(this.isRgbString(bd)){return this.__gn();
}else if(this.isHex3String(bd)){return this.__gp();
}else if(this.isHex6String(bd)){return this.__gq();
}throw new Error("Could not parse color: "+bd);
},cssStringToRgb:function(T){if(this.isNamedColor(T)){return this.NAMED[T];
}else if(this.isSystemColor(T)){throw new Error("Could not convert system colors to RGB: "+T);
}else if(this.isRgbString(T)){return this.__gn();
}else if(this.isRgbaString(T)){return this.__go();
}else if(this.isHex3String(T)){return this.__gp();
}else if(this.isHex6String(T)){return this.__gq();
}throw new Error("Could not parse color: "+T);
},stringToRgbString:function(X){return this.rgbToRgbString(this.stringToRgb(X));
},rgbToRgbString:function(R){return o+R[0]+s+R[1]+s+R[2]+n;
},rgbToHexString:function(u){return (qx.lang.String.pad(u[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(v){return this.isThemedColor(v)||this.isNamedColor(v)||this.isHex3String(v)||this.isHex6String(v)||this.isRgbString(v);
},isCssString:function(w){return this.isSystemColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w);
},isHex3String:function(V){return this.REGEXP.hex3.test(V);
},isHex6String:function(bf){return this.REGEXP.hex6.test(bf);
},isRgbString:function(Y){return this.REGEXP.rgb.test(Y);
},isRgbaString:function(be){return this.REGEXP.rgba.test(be);
},__gn:function(){var bc=parseInt(RegExp.$1,10);
var bb=parseInt(RegExp.$2,10);
var ba=parseInt(RegExp.$3,10);
return [bc,bb,ba];
},__go:function(){var j=parseInt(RegExp.$1,10);
var h=parseInt(RegExp.$2,10);
var e=parseInt(RegExp.$3,10);
return [j,h,e];
},__gp:function(){var d=parseInt(RegExp.$1,16)*17;
var c=parseInt(RegExp.$2,16)*17;
var a=parseInt(RegExp.$3,16)*17;
return [d,c,a];
},__gq:function(){var bi=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var bh=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var bg=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [bi,bh,bg];
},hex3StringToRgb:function(x){if(this.isHex3String(x)){return this.__gp(x);
}throw new Error("Invalid hex3 value: "+x);
},hex6StringToRgb:function(E){if(this.isHex6String(E)){return this.__gq(E);
}throw new Error("Invalid hex6 value: "+E);
},hexStringToRgb:function(k){if(this.isHex3String(k)){return this.__gp(k);
}
if(this.isHex6String(k)){return this.__gq(k);
}throw new Error("Invalid hex value: "+k);
},rgbToHsb:function(F){var H,I,K;
var Q=F[0];
var N=F[1];
var G=F[2];
var P=(Q>N)?Q:N;

if(G>P){P=G;
}var J=(Q<N)?Q:N;

if(G<J){J=G;
}K=P/255.0;

if(P!=0){I=(P-J)/P;
}else{I=0;
}
if(I==0){H=0;
}else{var M=(P-Q)/(P-J);
var O=(P-N)/(P-J);
var L=(P-G)/(P-J);

if(Q==P){H=L-O;
}else if(N==P){H=2.0+M-L;
}else{H=4.0+O-M;
}H=H/6.0;

if(H<0){H=H+1.0;
}}return [Math.round(H*360),Math.round(I*100),Math.round(K*100)];
},hsbToRgb:function(y){var i,f,p,q,t;
var z=y[0]/360;
var A=y[1]/100;
var B=y[2]/100;

if(z>=1.0){z%=1.0;
}
if(A>1.0){A=1.0;
}
if(B>1.0){B=1.0;
}var C=Math.floor(255*B);
var D={};

if(A==0.0){D.red=D.green=D.blue=C;
}else{z*=6.0;
i=Math.floor(z);
f=z-i;
p=Math.floor(C*(1.0-A));
q=Math.floor(C*(1.0-(A*f)));
t=Math.floor(C*(1.0-(A*(1.0-f))));

switch(i){case 0:D.red=C;
D.green=t;
D.blue=p;
break;
case 1:D.red=q;
D.green=C;
D.blue=p;
break;
case 2:D.red=p;
D.green=C;
D.blue=t;
break;
case 3:D.red=p;
D.green=q;
D.blue=C;
break;
case 4:D.red=t;
D.green=p;
D.blue=C;
break;
case 5:D.red=C;
D.green=p;
D.blue=q;
break;
}}return [D.red,D.green,D.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var h="object",g="_applyTheme",f="qx.theme.manager.Decoration",e="Theme",d="__ct",c="changeTheme",b="string",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,properties:{theme:{check:e,nullable:true,apply:g,event:c}},members:{__ct:null,resolve:function(k){if(!k){return null;
}
if(typeof k===h){return k;
}var n=this.getTheme();

if(!n){return null;
}var n=this.getTheme();

if(!n){return null;
}var o=this.__ct;

if(!o){o=this.__ct={};
}var l=o[k];

if(l){return l;
}var m=n.decorations[k];

if(!m){return null;
}var p=m.decorator;

if(p==null){throw new Error("Missing definition of which decorator to use in entry: "+k+"!");
}return o[k]=(new p).set(m.style);
},isValidPropertyValue:function(u){if(typeof u===b){return this.isDynamic(u);
}else if(typeof u===h){var v=u.constructor;
return qx.Class.hasInterface(v,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(i){if(!i){return false;
}var j=this.getTheme();

if(!j){return false;
}return !!j.decorations[i];
},_applyTheme:function(q,r){var t=qx.util.AliasManager.getInstance();

if(r){for(var s in r.aliases){t.remove(s);
}}
if(q){for(var s in q.aliases){t.add(s,q.aliases[s]);
}}
if(!q){this.__ct={};
}}},destruct:function(){this._disposeMap(d);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__gr={};
this.add(a,h);
},members:{__gr:null,_preprocess:function(l){var o=this._getDynamic();

if(o[l]===false){return l;
}else if(o[l]===undefined){if(l.charAt(0)===j||l.charAt(0)===b||l.indexOf(g)===0||l.indexOf(f)===i||l.indexOf(e)===0){o[l]=false;
return l;
}
if(this.__gr[l]){return this.__gr[l];
}var n=l.substring(0,l.indexOf(j));
var m=this.__gr[n];

if(m!==undefined){o[l]=m+l.substring(n.length);
}}return l;
},add:function(r,s){this.__gr[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(j))===r){u[t]=s+t.substring(r.length);
}}},remove:function(k){delete this.__gr[k];
},resolve:function(p){var q=this._getDynamic();

if(p!=null){p=this._preprocess(p);
}return q[p]||p;
}},destruct:function(){this.__gr=null;
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(u){var v=this._dynamic;
return u instanceof qx.bom.Font?u:v[u];
},resolve:function(n){var q=this._dynamic;
var o=q[n];

if(o){return o;
}var p=this.getTheme();

if(p!==null&&p.fonts[n]){return q[n]=(new qx.bom.Font).set(p.fonts[n]);
}return n;
},isDynamic:function(r){var t=this._dynamic;

if(r&&(r instanceof qx.bom.Font||t[r]!==undefined)){return true;
}var s=this.getTheme();

if(s!==null&&r&&s.fonts[r]){t[r]=(new qx.bom.Font).set(s.fonts[r]);
return true;
}return false;
},__hz:function(f,g){if(f[g].include){var h=f[f[g].include];
f[g].include=null;
delete f[g].include;
f[g]=qx.lang.Object.mergeWith(f[g],h,false);
this.__hz(f,g);
}},_applyTheme:function(i){var j=this._getDynamic();

for(var m in j){if(j[m].themed){j[m].dispose();
delete j[m];
}}
if(i){var k=i.fonts;
var l=qx.bom.Font;

for(var m in k){if(k[m].include&&k[k[m].include]){this.__hz(k,m);
}j[m]=(new l).set(k[m]);
j[m].themed=true;
}}this._setDynamic(j);
}}});
})();
(function(){var o="",n="underline",m="Boolean",k="px",j='"',h="italic",g="normal",f="bold",e="_applyItalic",d="_applyBold",A="Integer",z="_applyFamily",y="_applyLineHeight",x="Array",w="overline",v="line-through",u="qx.bom.Font",t="Number",s="_applyDecoration",r=" ",p="_applySize",q=",";
qx.Class.define(u,{extend:qx.core.Object,construct:function(J,K){qx.core.Object.call(this);

if(J!==undefined){this.setSize(J);
}
if(K!==undefined){this.setFamily(K);
}},statics:{fromString:function(L){var P=new qx.bom.Font();
var N=L.split(/\s+/);
var name=[];
var O;

for(var i=0;i<N.length;i++){switch(O=N[i]){case f:P.setBold(true);
break;
case h:P.setItalic(true);
break;
case n:P.setDecoration(n);
break;
default:var M=parseInt(O,10);

if(M==O||qx.lang.String.contains(O,k)){P.setSize(M);
}else{name.push(O);
}break;
}}
if(name.length>0){P.setFamily(name);
}return P;
},fromConfig:function(B){var C=new qx.bom.Font;
C.set(B);
return C;
},__cB:{fontFamily:o,fontSize:o,fontWeight:o,fontStyle:o,textDecoration:o,lineHeight:1.2},getDefaultStyles:function(){return this.__cB;
}},properties:{size:{check:A,nullable:true,apply:p},lineHeight:{check:t,nullable:true,apply:y},family:{check:x,nullable:true,apply:z},bold:{check:m,nullable:true,apply:d},italic:{check:m,nullable:true,apply:e},decoration:{check:[n,v,w],nullable:true,apply:s}},members:{__cC:null,__cD:null,__cE:null,__cF:null,__cG:null,__cH:null,_applySize:function(S,T){this.__cC=S===null?null:S+k;
},_applyLineHeight:function(D,E){this.__cH=D===null?null:D;
},_applyFamily:function(a,b){var c=o;

for(var i=0,l=a.length;i<l;i++){if(a[i].indexOf(r)>0){c+=j+a[i]+j;
}else{c+=a[i];
}
if(i!==l-1){c+=q;
}}this.__cD=c;
},_applyBold:function(Q,R){this.__cE=Q===null?null:Q?f:g;
},_applyItalic:function(H,I){this.__cF=H===null?null:H?h:g;
},_applyDecoration:function(F,G){this.__cG=F===null?null:F;
},getStyles:function(){return {fontFamily:this.__cD,fontSize:this.__cC,fontWeight:this.__cE,fontStyle:this.__cF,textDecoration:this.__cG,lineHeight:this.__cH};
}}});
})();
(function(){var f="CSS1Compat",d="qx.bom.client.Feature",c="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",b="pointerEvents",a="label";
qx.Class.define(d,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:false,XUL:false,CSS_TEXT_OVERFLOW:("textOverflow" in document.documentElement.style||"OTextOverflow" in document.documentElement.style),HTML5_CLASSLIST:!!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__gs:function(){this.QUIRKS_MODE=this.__gt();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;

try{document.createElementNS(c,a);
this.XUL=true;
}catch(e){this.XUL=false;
}if(b in document.documentElement.style){if(qx.bom.client.Engine.OPERA){this.CSS_POINTER_EVENTS=false;
}else{this.CSS_POINTER_EVENTS=true;
}}},__gt:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==f;
}}},defer:function(g){g.__gs();
}});
})();
(function(){var a="qx.lang.Object";
qx.Class.define(a,{statics:{empty:function(r){{};

for(var s in r){if(r.hasOwnProperty(s)){delete r[s];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(g){{};
return g.__count__===0;
}:
function(D){{};

for(var E in D){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(B,C){{};
return B.__count__>=C;
}:
function(t,u){{};

if(u<=0){return true;
}var length=0;

for(var v in t){if((++length)>=u){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(h){{};
var k=[];
var j=this.getKeys(h);

for(var i=0,l=j.length;i<l;i++){k.push(h[j[i]]);
}return k;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(F,G){{};
return qx.lang.Object.mergeWith(F,G,false);
},merge:function(w,x){{};
var y=arguments.length;

for(var i=1;i<y;i++){qx.lang.Object.mergeWith(w,arguments[i]);
}return w;
},clone:function(m){{};
var n={};

for(var o in m){n[o]=m[o];
}return n;
},invert:function(H){{};
var I={};

for(var J in H){I[H[J].toString()]=J;
}return I;
},getKeyFromValue:function(d,e){{};

for(var f in d){if(d.hasOwnProperty(f)&&d[f]===e){return f;
}}return null;
},contains:function(p,q){{};
return this.getKeyFromValue(p,q)!==null;
},select:function(b,c){{};
return c[b];
},fromArray:function(z){{};
var A={};

for(var i=0,l=z.length;i<l;i++){{};
A[z[i].toString()]=true;
}return A;
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
this.__dF={};
this.__dG={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__dH:{},__dF:null,__dG:null,_applyTheme:function(M,N){this.__dG={};
this.__dF={};
},__dI:function(A,B,C){var H=B.appearances;
var K=H[A];

if(!K){var L=b;
var E=[];
var J=A.split(L);
var I;

while(!K&&J.length>0){E.unshift(J.pop());
var F=J.join(L);
K=H[F];

if(K){I=K.alias||K;

if(typeof I===h){var G=I+L+E.join(L);
return this.__dI(G,B,C);
}}}for(var i=0;i<E.length-1;i++){E.shift();
var F=E.join(L);
var D=this.__dI(F,B);

if(D){return D;
}}if(C!=null){return this.__dI(C,B);
}return null;
}else if(typeof K===h){return this.__dI(K,B,C);
}else if(K.include&&!K.style){return this.__dI(K.include,B,C);
}return A;
},styleFrom:function(j,k,l,m){if(!l){l=this.getTheme();
}var s=this.__dG;
var n=s[j];

if(!n){n=s[j]=this.__dI(j,l,m);
}var x=l.appearances[n];

if(!x){this.warn("Missing appearance: "+j);
return null;
}if(!x.style){return null;
}var y=n;

if(k){var z=x.$$bits;

if(!z){z=x.$$bits={};
x.$$length=0;
}var q=0;

for(var t in k){if(!k[t]){continue;
}
if(z[t]==null){z[t]=1<<x.$$length++;
}q+=z[t];
}if(q>0){y+=e+q;
}}var r=this.__dF;

if(r[y]!==undefined){return r[y];
}if(!k){k=this.__dH;
}var v;
if(x.include||x.base){var p=x.style(k);
var o;

if(x.include){o=this.styleFrom(x.include,k,l,m);
}v={};
if(x.base){var u=this.styleFrom(n,k,x.base,m);

if(x.include){for(var w in u){if(!o.hasOwnProperty(w)&&!p.hasOwnProperty(w)){v[w]=u[w];
}}}else{for(var w in u){if(!p.hasOwnProperty(w)){v[w]=u[w];
}}}}if(x.include){for(var w in o){if(!p.hasOwnProperty(w)){v[w]=o[w];
}}}for(var w in p){v[w]=p[w];
}}else{v=x.style(k);
}return r[y]=v||null;
}},destruct:function(){this.__dF=this.__dG=null;
}});
})();
(function(){var r="other",q="widgets",p="fonts",o="appearances",n="qx.Theme",m="]",k="[Theme ",j="colors",h="decorations",g="Theme",d="meta",f="borders",e="icons";
qx.Bootstrap.define(n,{statics:{define:function(name,b){if(!b){var b={};
}b.include=this.__qx(b.include);
b.patch=this.__qx(b.patch);
{};
var c={$$type:g,name:name,title:b.title,toString:this.genericToString};
if(b.extend){c.supertheme=b.extend;
}c.basename=qx.Bootstrap.createNamespace(name,c);
this.__qA(c,b);
this.__qy(c,b);
this.$$registry[name]=c;
for(var i=0,a=b.include,l=a.length;i<l;i++){this.include(c,a[i]);
}
for(var i=0,a=b.patch,l=a.length;i<l;i++){this.patch(c,a[i]);
}},__qx:function(v){if(!v){return [];
}
if(qx.Bootstrap.isArray(v)){return v;
}else{return [v];
}},__qy:function(s,t){var u=t.aliases||{};

if(t.extend&&t.extend.aliases){qx.Bootstrap.objectMergeWith(u,t.extend.aliases,false);
}s.aliases=u;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return k+this.name+m;
},__qz:function(I){for(var i=0,J=this.__qB,l=J.length;i<l;i++){if(I[J[i]]){return J[i];
}}},__qA:function(K,L){var O=this.__qz(L);
if(L.extend&&!O){O=L.extend.type;
}K.type=O||r;
if(!O){return;
}var Q=function(){};
if(L.extend){Q.prototype=new L.extend.$$clazz;
}var P=Q.prototype;
var N=L[O];
for(var M in N){P[M]=N[M];
if(P[M].base){{};
P[M].base=L.extend;
}}K.$$clazz=Q;
K[O]=new Q;
},$$registry:{},__qB:[j,f,h,p,e,q,o,d],__qC:null,__qD:null,__qE:function(){},patch:function(w,x){var z=this.__qz(x);

if(z!==this.__qz(w)){throw new Error("The mixins '"+w.name+"' are not compatible '"+x.name+"'!");
}var y=x[z];
var A=w.$$clazz.prototype;

for(var B in y){A[B]=y[B];
}},include:function(C,D){var F=D.type;

if(F!==C.type){throw new Error("The mixins '"+C.name+"' are not compatible '"+D.name+"'!");
}var E=D[F];
var G=C.$$clazz.prototype;

for(var H in E){if(G[H]!==undefined){continue;
}G[H]=E[H];
}}}});
})();
(function(){var w="Boolean",v="focusout",u="interval",t="mouseover",s="mouseout",r="mousemove",q="__qk",p="widget",o="Use isShowInvalidToolTips() instead.",n="qx.ui.tooltip.ToolTip",g="Use setShowInvalidToolTips() instead.",m="Use initShowInvalidToolTips() instead.",j="Use resetShowInvalidToolTips() instead.",d="__ql",c="_applyCurrent",i="__qn",h="qx.ui.tooltip.Manager",k="tooltip-error",b="Use toggleShowInvalidToolTips() instead.",l="singleton",f="Use getShowInvalidToolTips() instead.";
qx.Class.define(h,{type:l,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,t,this.__qu,this,true);
this.__qk=new qx.event.Timer();
this.__qk.addListener(u,this.__qr,this);
this.__ql=new qx.event.Timer();
this.__ql.addListener(u,this.__qs,this);
this.__qm={left:0,top:0};
},properties:{current:{check:n,nullable:true,apply:c},showInvalidToolTips:{check:w,init:true},showToolTips:{check:w,init:true}},members:{__qm:null,__ql:null,__qk:null,__qn:null,__qo:null,__qp:function(){if(!this.__qn){this.__qn=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__qn;
},__qq:function(){if(!this.__qo){this.__qo=new qx.ui.tooltip.ToolTip().set({appearance:k});
this.__qo.syncAppearance();
}return this.__qo;
},_applyCurrent:function(K,L){if(L&&qx.ui.core.Widget.contains(L,K)){return;
}if(L){if(!L.isDisposed()){L.exclude();
}this.__qk.stop();
this.__ql.stop();
}var N=qx.event.Registration;
var M=document.body;
if(K){this.__qk.startWith(K.getShowTimeout());
N.addListener(M,s,this.__qv,this,true);
N.addListener(M,v,this.__qw,this,true);
N.addListener(M,r,this.__qt,this,true);
}else{N.removeListener(M,s,this.__qv,this,true);
N.removeListener(M,v,this.__qw,this,true);
N.removeListener(M,r,this.__qt,this,true);
}},__qr:function(e){var G=this.getCurrent();

if(G&&!G.isDisposed()){this.__ql.startWith(G.getHideTimeout());

if(G.getPlaceMethod()==p){G.placeToWidget(G.getOpener());
}else{G.placeToPoint(this.__qm);
}G.show();
}this.__qk.stop();
},__qs:function(e){var a=this.getCurrent();

if(a&&!a.isDisposed()){a.exclude();
}this.__ql.stop();
this.resetCurrent();
},__qt:function(e){var x=this.__qm;
x.left=e.getDocumentLeft();
x.top=e.getDocumentTop();
},__qu:function(e){var B=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!B){return;
}var C,D,A,z;
while(B!=null){C=B.getToolTip();
D=B.getToolTipText()||null;
A=B.getToolTipIcon()||null;

if(qx.Class.hasInterface(B.constructor,qx.ui.form.IForm)&&!B.isValid()){z=B.getInvalidMessage();
}
if(C||D||A||z){break;
}B=B.getLayoutParent();
}if(!B||
!B.getEnabled()||
B.isBlockToolTip()||
(!z&&!this.getShowToolTips())||(z&&!this.getShowInvalidToolTips())){return;
}
if(z){C=this.__qq().set({label:z});
}
if(!C){C=this.__qp().set({label:D,icon:A});
}this.setCurrent(C);
C.setOpener(B);
},__qv:function(e){var H=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!H){return;
}var I=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!I){return;
}var J=this.getCurrent();
if(J&&(I==J||qx.ui.core.Widget.contains(J,I))){return;
}if(I&&H&&qx.ui.core.Widget.contains(H,I)){return;
}if(J&&!I){this.setCurrent(null);
}else{this.resetCurrent();
}},__qw:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!E){return;
}var F=this.getCurrent();
if(F&&F==E.getToolTip()){this.setCurrent(null);
}},setShowInvalidTooltips:function(y){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.setShowInvalidToolTips(y);
},getShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
return this.getShowInvalidToolTips();
},resetShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return this.resetShowInvalidToolTips();
},isShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
return this.isShowInvalidToolTips();
},toggleShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
return this.toggleShowInvalidToolTips();
},initShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,m);
return this.initShowInvalidToolTips();
}},destruct:function(){qx.event.Registration.removeListener(document.body,t,this.__qu,this,true);
this._disposeObjects(q,d,i);
this.__qm=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(m){qx.core.Object.call(this);
this.setEnabled(false);

if(m!=null){this.setInterval(m);
}var self=this;
this.__er=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(p,q,r){var s=new qx.event.Timer(r);
s.__es=p;
s.addListener(h,function(e){s.stop();
p.call(q,e);
s.dispose();
q=null;
},q);
s.start();
return s;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__et:null,__er:null,_applyInterval:function(i,j){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(n,o){if(o){window.clearInterval(this.__et);
this.__et=null;
}else if(n){this.__et=window.setInterval(this.__er,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(l){this.setInterval(l);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(k){this.stop();
this.startWith(k);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__et){window.clearInterval(this.__et);
}this.__et=this.__er=null;
}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(e){return this._indexOf(e);
},add:function(m,n){this._add(m,n);
},addAt:function(b,c,d){this._addAt(b,c,d);
},addBefore:function(f,g,h){this._addBefore(f,g,h);
},addAfter:function(i,j,k){this._addAfter(i,j,k);
},remove:function(p){this._remove(p);
},removeAt:function(l){return this._removeAt(l);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(o){o.getChildren=o._getChildren;
o.hasChildren=o._hasChildren;
o.indexOf=o._indexOf;
o.add=o._add;
o.addAt=o._addAt;
o.addBefore=o._addBefore;
o.addAfter=o._addAfter;
o.remove=o._remove;
o.removeAt=o._removeAt;
o.removeAll=o._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var o="Integer",n="_applyDimension",m="Boolean",l="_applyStretching",k="_applyMargin",j="shorthand",i="_applyAlign",h="allowShrinkY",g="bottom",f="baseline",C="marginBottom",B="qx.ui.core.LayoutItem",A="center",z="marginTop",y="allowGrowX",x="middle",w="marginLeft",v="allowShrinkX",u="top",t="right",r="marginRight",s="abstract",p="allowGrowY",q="left";
qx.Class.define(B,{type:s,extend:qx.core.Object,properties:{minWidth:{check:o,nullable:true,apply:n,init:null,themeable:true},width:{check:o,nullable:true,apply:n,init:null,themeable:true},maxWidth:{check:o,nullable:true,apply:n,init:null,themeable:true},minHeight:{check:o,nullable:true,apply:n,init:null,themeable:true},height:{check:o,nullable:true,apply:n,init:null,themeable:true},maxHeight:{check:o,nullable:true,apply:n,init:null,themeable:true},allowGrowX:{check:m,apply:l,init:true,themeable:true},allowShrinkX:{check:m,apply:l,init:true,themeable:true},allowGrowY:{check:m,apply:l,init:true,themeable:true},allowShrinkY:{check:m,apply:l,init:true,themeable:true},allowStretchX:{group:[y,v],mode:j,themeable:true},allowStretchY:{group:[p,h],mode:j,themeable:true},marginTop:{check:o,init:0,apply:k,themeable:true},marginRight:{check:o,init:0,apply:k,themeable:true},marginBottom:{check:o,init:0,apply:k,themeable:true},marginLeft:{check:o,init:0,apply:k,themeable:true},margin:{group:[z,r,C,w],mode:j,themeable:true},alignX:{check:[q,A,t],nullable:true,apply:i,themeable:true},alignY:{check:[u,x,g,f],nullable:true,apply:i,themeable:true}},members:{__fp:null,__fq:null,__fr:null,__fs:null,__ft:null,__fu:null,__fv:null,getBounds:function(){return this.__fu||this.__fq||null;
},clearSeparators:function(){},renderSeparator:function(a,b){},renderLayout:function(W,top,X,Y){var ba;
{};
var bb=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var bb=this._getHeightForWidth(X);
}
if(bb!=null&&bb!==this.__fp){this.__fp=bb;
qx.ui.core.queue.Layout.add(this);
return null;
}var bd=this.__fq;

if(!bd){bd=this.__fq={};
}var bc={};

if(W!==bd.left||top!==bd.top){bc.position=true;
bd.left=W;
bd.top=top;
}
if(X!==bd.width||Y!==bd.height){bc.size=true;
bd.width=X;
bd.height=Y;
}if(this.__fr){bc.local=true;
delete this.__fr;
}
if(this.__ft){bc.margin=true;
delete this.__ft;
}return bc;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__fr;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__fr=true;
this.__fs=null;
},getSizeHint:function(O){var P=this.__fs;

if(P){return P;
}
if(O===false){return null;
}P=this.__fs=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__fp&&this.getHeight()==null){P.height=this.__fp;
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
},_computeSizeHint:function(){var L=this.getMinWidth()||0;
var I=this.getMinHeight()||0;
var M=this.getWidth()||L;
var K=this.getHeight()||I;
var H=this.getMaxWidth()||Infinity;
var J=this.getMaxHeight()||Infinity;
return {minWidth:L,width:M,maxWidth:H,minHeight:I,height:K,maxHeight:J};
},_hasHeightForWidth:function(){var N=this._getLayout();

if(N){return N.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(F){var G=this._getLayout();

if(G&&G.hasHeightForWidth()){return G.getHeightForWidth(F);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__ft=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__fu;
},setUserBounds:function(c,top,d,e){this.__fu={left:c,top:top,width:d,height:e};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__fu;
qx.ui.core.queue.Layout.add(this);
},__fw:{},setLayoutProperties:function(Q){if(Q==null){return;
}var R=this.__fv;

if(!R){R=this.__fv={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(Q);
}for(var S in Q){if(Q[S]==null){delete R[S];
}else{R[S]=Q[S];
}}},getLayoutProperties:function(){return this.__fv||this.__fw;
},clearLayoutProperties:function(){delete this.__fv;
},updateLayoutProperties:function(T){var U=this._getLayout();

if(U){var V;
{};
U.invalidateChildrenCache();
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
},clone:function(){var D=qx.core.Object.prototype.clone.call(this);
var E=this.__fv;

if(E){D.__fv=qx.lang.Object.clone(E);
}return D;
}},destruct:function(){this.$$parent=this.$$subparent=this.__fv=this.__fq=this.__fu=this.__fs=null;
}});
})();
(function(){var h="qx.ui.core.DecoratorFactory",g="$$nopool$$";
qx.Class.define(h,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cO={};
},statics:{MAX_SIZE:15,__cP:g},members:{__cO:null,getDecoratorElement:function(a){var f=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(a)){var d=a;
var c=qx.theme.manager.Decoration.getInstance().resolve(a);
}else{var d=f.__cP;
c=a;
}var e=this.__cO;

if(e[d]&&e[d].length>0){var b=e[d].pop();
}else{var b=this._createDecoratorElement(c,d);
}b.$$pooled=false;
return b;
},poolDecorator:function(n){if(!n||n.$$pooled||n.isDisposed()){return;
}var q=qx.ui.core.DecoratorFactory;
var o=n.getId();

if(o==q.__cP){n.dispose();
return;
}var p=this.__cO;

if(!p[o]){p[o]=[];
}
if(p[o].length>q.MAX_SIZE){n.dispose();
}else{n.$$pooled=true;
p[o].push(n);
}},_createDecoratorElement:function(k,l){var m=new qx.html.Decorator(k,l);
{};
return m;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var j=this.__cO;

for(var i in j){qx.util.DisposeUtil.disposeArray(j,i);
}}this.__cO=null;
}});
})();
(function(){var et="px",es="Boolean",er="qx.event.type.Drag",eq="qx.event.type.Mouse",ep="visible",eo="qx.event.type.Focus",en="on",em="Integer",ek="excluded",ej="qx.event.type.Data",dU="_applyPadding",dT="qx.event.type.Event",dS="hidden",dR="contextmenu",dQ="String",dP="tabIndex",dO="focused",dN="changeVisibility",dM="mshtml",dL="hovered",eA="qx.event.type.KeySequence",eB="qx.client",ey="absolute",ez="backgroundColor",ew="drag",ex="div",eu="disabled",ev="move",eC="dragstart",eD="qx.dynlocale",ec="dragchange",eb="dragend",ee="resize",ed="Decorator",eg="zIndex",ef="opacity",ei="default",eh="Color",ea="changeToolTipText",dY="beforeContextmenuOpen",cB="_applyNativeContextMenu",cC="__dP",cD="_applyBackgroundColor",cE="_applyFocusable",cF="changeShadow",cG="qx.event.type.KeyInput",cH="__dX",cI="createChildControl",cJ="__dQ",cK="Font",eH="_applyShadow",eG="__dT",eF="_applyEnabled",eE="_applySelectable",eL="Number",eK="_applyKeepActive",eJ="_applyVisibility",eI="repeat",eN="qxDraggable",eM="syncAppearance",dk="paddingLeft",dl="_applyDroppable",di="#",dj="qx.event.type.MouseWheel",dp="_applyCursor",dq="_applyDraggable",dm="__dL",dn="changeTextColor",dg="$$widget",dh="changeContextMenu",cS="paddingTop",cR="changeSelectable",cU="hideFocus",cT="none",cO="outline",cN="_applyAppearance",cQ="_applyOpacity",cP="url(",cM=")",cL="qx.ui.core.Widget",dv="_applyFont",dw="cursor",dx="qxDroppable",dy="changeZIndex",dr="changeEnabled",ds="changeFont",dt="__dK",du="_applyDecorator",dz="_applyZIndex",dA="_applyTextColor",dd="qx.ui.menu.Menu",dc="_applyToolTipText",db="true",da="widget",cY="__dO",cX="changeDecorator",cW="__dV",cV="_applyTabIndex",df="changeAppearance",de="shorthand",dB="/",dC="",dD="_applyContextMenu",dE="paddingBottom",dF="changeNativeContextMenu",dG="qx.ui.tooltip.ToolTip",dH="qxKeepActive",dI="_applyKeepFocus",dJ="paddingRight",dK="changeBackgroundColor",dX="changeLocale",dW="qxKeepFocus",dV="qx/static/blank.gif";
qx.Class.define(cL,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__dK=this._createContainerElement();
this.__dL=this.__dW();
this.__dK.add(this.__dL);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:dT,disappear:dT,createChildControl:ej,resize:ej,move:ej,syncAppearance:ej,mousemove:eq,mouseover:eq,mouseout:eq,mousedown:eq,mouseup:eq,click:eq,dblclick:eq,contextmenu:eq,beforeContextmenuOpen:ej,mousewheel:dj,keyup:eA,keydown:eA,keypress:eA,keyinput:cG,focus:eo,blur:eo,focusin:eo,focusout:eo,activate:eo,deactivate:eo,capture:dT,losecapture:dT,drop:er,dragleave:er,dragover:er,drag:er,dragstart:er,dragend:er,dragchange:er,droprequest:er},properties:{paddingTop:{check:em,init:0,apply:dU,themeable:true},paddingRight:{check:em,init:0,apply:dU,themeable:true},paddingBottom:{check:em,init:0,apply:dU,themeable:true},paddingLeft:{check:em,init:0,apply:dU,themeable:true},padding:{group:[cS,dJ,dE,dk],mode:de,themeable:true},zIndex:{nullable:true,init:null,apply:dz,event:dy,check:em,themeable:true},decorator:{nullable:true,init:null,apply:du,event:cX,check:ed,themeable:true},shadow:{nullable:true,init:null,apply:eH,event:cF,check:ed,themeable:true},backgroundColor:{nullable:true,check:eh,apply:cD,event:dK,themeable:true},textColor:{nullable:true,check:eh,apply:dA,event:dn,themeable:true,inheritable:true},font:{nullable:true,apply:dv,check:cK,event:ds,themeable:true,inheritable:true,dereference:true},opacity:{check:eL,apply:cQ,themeable:true,nullable:true,init:null},cursor:{check:dQ,apply:dp,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:dG,nullable:true},toolTipText:{check:dQ,nullable:true,event:ea,apply:dc},toolTipIcon:{check:dQ,nullable:true,event:ea},blockToolTip:{check:es,init:false},visibility:{check:[ep,dS,ek],init:ep,apply:eJ,event:dN},enabled:{init:true,check:es,inheritable:true,apply:eF,event:dr},anonymous:{init:false,check:es},tabIndex:{check:em,nullable:true,apply:cV},focusable:{check:es,init:false,apply:cE},keepFocus:{check:es,init:false,apply:dI},keepActive:{check:es,init:false,apply:eK},draggable:{check:es,init:false,apply:dq},droppable:{check:es,init:false,apply:dl},selectable:{check:es,init:false,event:cR,apply:eE},contextMenu:{check:dd,apply:dD,nullable:true,event:dh},nativeContextMenu:{check:es,init:false,themeable:true,event:dF,apply:cB},appearance:{check:dQ,init:da,apply:cN,event:df}},statics:{DEBUG:false,getWidgetByElement:function(bT,bU){while(bT){var bV=bT.$$widget;
if(bV!=null){var bW=qx.core.ObjectRegistry.fromHashCode(bV);
if(!bU||!bW.getAnonymous()){return bW;
}}try{bT=bT.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,gO){while(gO){if(parent==gO){return true;
}gO=gO.getLayoutParent();
}return false;
},__dM:new qx.ui.core.DecoratorFactory(),__dN:new qx.ui.core.DecoratorFactory()},members:{__dK:null,__dL:null,__dO:null,__dP:null,__dQ:null,__dR:null,__dS:null,__dT:null,_getLayout:function(){return this.__dT;
},_setLayout:function(gR){{};

if(this.__dT){this.__dT.connectToWidget(null);
}
if(gR){gR.connectToWidget(this);
}this.__dT=gR;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var co=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(co);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(co);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__dU:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var L=qx.theme.manager.Decoration.getInstance();
var N=L.resolve(a).getInsets();
var M=L.resolve(b).getInsets();

if(N.top!=M.top||N.right!=M.right||N.bottom!=M.bottom||N.left!=M.left){return true;
}return false;
},renderLayout:function(fL,top,fM,fN){var fW=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,fL,top,fM,fN);
if(!fW){return null;
}var fP=this.getContainerElement();
var content=this.getContentElement();
var fT=fW.size||this._updateInsets;
var fX=et;
var fU={};
if(fW.position){fU.left=fL+fX;
fU.top=top+fX;
}if(fW.size){fU.width=fM+fX;
fU.height=fN+fX;
}
if(fW.position||fW.size){fP.setStyles(fU);
}
if(fT||fW.local||fW.margin){var fO=this.getInsets();
var innerWidth=fM-fO.left-fO.right;
var innerHeight=fN-fO.top-fO.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var fR={};

if(this._updateInsets){fR.left=fO.left+fX;
fR.top=fO.top+fX;
}
if(fT){fR.width=innerWidth+fX;
fR.height=innerHeight+fX;
}
if(fT||this._updateInsets){content.setStyles(fR);
}
if(fW.size){var fV=this.__dQ;

if(fV){fV.setStyles({width:fM+et,height:fN+et});
}}
if(fW.size||this._updateInsets){if(this.__dO){this.__dO.resize(fM,fN);
}}
if(fW.size){if(this.__dP){var fO=this.__dP.getInsets();
var fS=fM+fO.left+fO.right;
var fQ=fN+fO.top+fO.bottom;
this.__dP.resize(fS,fQ);
}}
if(fT||fW.local||fW.margin){if(this.__dT&&this.hasLayoutChildren()){this.__dT.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(fW.position&&this.hasListener(ev)){this.fireDataEvent(ev,this.getBounds());
}
if(fW.size&&this.hasListener(ee)){this.fireDataEvent(ee,this.getBounds());
}delete this._updateInsets;
return fW;
},__dV:null,clearSeparators:function(){var R=this.__dV;

if(!R){return;
}var S=qx.ui.core.Widget.__dM;
var content=this.getContentElement();
var Q;

for(var i=0,l=R.length;i<l;i++){Q=R[i];
S.poolDecorator(Q);
content.remove(Q);
}R.length=0;
},renderSeparator:function(fg,fh){var fi=qx.ui.core.Widget.__dM.getDecoratorElement(fg);
this.getContentElement().add(fi);
fi.resize(fh.width,fh.height);
fi.setStyles({left:fh.left+et,top:fh.top+et});
if(!this.__dV){this.__dV=[fi];
}else{this.__dV.push(fi);
}},_computeSizeHint:function(){var gl=this.getWidth();
var gk=this.getMinWidth();
var gg=this.getMaxWidth();
var gj=this.getHeight();
var gh=this.getMinHeight();
var gi=this.getMaxHeight();
{};
var gm=this._getContentHint();
var gf=this.getInsets();
var go=gf.left+gf.right;
var gn=gf.top+gf.bottom;

if(gl==null){gl=gm.width+go;
}
if(gj==null){gj=gm.height+gn;
}
if(gk==null){gk=go;

if(gm.minWidth!=null){gk+=gm.minWidth;
}}
if(gh==null){gh=gn;

if(gm.minHeight!=null){gh+=gm.minHeight;
}}
if(gg==null){if(gm.maxWidth==null){gg=Infinity;
}else{gg=gm.maxWidth+go;
}}
if(gi==null){if(gm.maxHeight==null){gi=Infinity;
}else{gi=gm.maxHeight+gn;
}}return {width:gl,minWidth:gk,maxWidth:gg,height:gj,minHeight:gh,maxHeight:gi};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__dT){this.__dT.invalidateLayoutCache();
}},_getContentHint:function(){var bY=this.__dT;

if(bY){if(this.hasLayoutChildren()){var bX;
var ca=bY.getSizeHint();
{};
return ca;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(bc){var bg=this.getInsets();
var bj=bg.left+bg.right;
var bi=bg.top+bg.bottom;
var bh=bc-bj;
var be=this._getLayout();

if(be&&be.hasHeightForWidth()){var bd=be.getHeightForWidth(bc);
}else{bd=this._getContentHeightForWidth(bh);
}var bf=bd+bi;
return bf;
},_getContentHeightForWidth:function(gF){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var bq=this.getPaddingRight();
var bs=this.getPaddingBottom();
var br=this.getPaddingLeft();

if(this.__dO){var bp=this.__dO.getInsets();
{};
top+=bp.top;
bq+=bp.right;
bs+=bp.bottom;
br+=bp.left;
}return {"top":top,"right":bq,"bottom":bs,"left":br};
},getInnerSize:function(){var P=this.getBounds();

if(!P){return null;
}var O=this.getInsets();
return {width:P.width-O.left-O.right,height:P.height-O.top-O.bottom};
},show:function(){this.setVisibility(ep);
},hide:function(){this.setVisibility(dS);
},exclude:function(){this.setVisibility(ek);
},isVisible:function(){return this.getVisibility()===ep;
},isHidden:function(){return this.getVisibility()!==ep;
},isExcluded:function(){return this.getVisibility()===ek;
},isSeeable:function(){var bw=this.getContainerElement().getDomElement();

if(bw){return bw.offsetWidth>0;
}var bv=this;

do{if(!bv.isVisible()){return false;
}
if(bv.isRootWidget()){return true;
}bv=bv.getLayoutParent();
}while(bv);
return false;
},_createContainerElement:function(){var eP={"$$widget":this.toHashCode()};
{};
var eO={zIndex:0,position:ey};
return new qx.html.Element(ex,eO,eP);
},__dW:function(){var fH=this._createContentElement();
{};
fH.setStyles({"position":ey,"zIndex":10});
return fH;
},_createContentElement:function(){return new qx.html.Element(ex,{overflowX:dS,overflowY:dS});
},getContainerElement:function(){return this.__dK;
},getContentElement:function(){return this.__dL;
},getDecoratorElement:function(){return this.__dO||null;
},getShadowElement:function(){return this.__dP||null;
},__dX:null,getLayoutChildren:function(){var E=this.__dX;

if(!E){return this.__dY;
}var F;

for(var i=0,l=E.length;i<l;i++){var D=E[i];

if(D.hasUserBounds()||D.isExcluded()){if(F==null){F=E.concat();
}qx.lang.Array.remove(F,D);
}}return F||E;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var gN=this.__dT;

if(gN){gN.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var gp=this.__dX;

if(!gp){return false;
}var gq;

for(var i=0,l=gp.length;i<l;i++){gq=gp[i];

if(!gq.hasUserBounds()&&!gq.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__dY:[],_getChildren:function(){return this.__dX||this.__dY;
},_indexOf:function(ba){var bb=this.__dX;

if(!bb){return -1;
}return bb.indexOf(ba);
},_hasChildren:function(){var cA=this.__dX;
return cA!=null&&(!!cA[0]);
},addChildrenToQueue:function(I){var J=this.__dX;

if(!J){return;
}var K;

for(var i=0,l=J.length;i<l;i++){K=J[i];
I[K.$$hash]=K;
K.addChildrenToQueue(I);
}},_add:function(bD,bE){if(bD.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,bD);
}
if(this.__dX){this.__dX.push(bD);
}else{this.__dX=[bD];
}this.__ea(bD,bE);
},_addAt:function(gW,gX,gY){if(!this.__dX){this.__dX=[];
}if(gW.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,gW);
}var ha=this.__dX[gX];

if(ha===gW){gW.setLayoutProperties(gY);
}
if(ha){qx.lang.Array.insertBefore(this.__dX,gW,ha);
}else{this.__dX.push(gW);
}this.__ea(gW,gY);
},_addBefore:function(ch,ci,cj){{};

if(ch==ci){return;
}
if(!this.__dX){this.__dX=[];
}if(ch.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,ch);
}qx.lang.Array.insertBefore(this.__dX,ch,ci);
this.__ea(ch,cj);
},_addAfter:function(eS,eT,eU){{};

if(eS==eT){return;
}
if(!this.__dX){this.__dX=[];
}if(eS.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,eS);
}qx.lang.Array.insertAfter(this.__dX,eS,eT);
this.__ea(eS,eU);
},_remove:function(bx){if(!this.__dX){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__dX,bx);
this.__eb(bx);
},_removeAt:function(gA){if(!this.__dX){throw new Error("This widget has no children!");
}var gB=this.__dX[gA];
qx.lang.Array.removeAt(this.__dX,gA);
this.__eb(gB);
return gB;
},_removeAll:function(){if(!this.__dX){return;
}var bC=this.__dX.concat();
this.__dX.length=0;

for(var i=bC.length-1;i>=0;i--){this.__eb(bC[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__ea:function(fD,fE){{};
var parent=fD.getLayoutParent();

if(parent&&parent!=this){parent._remove(fD);
}fD.setLayoutParent(this);
if(fE){fD.setLayoutProperties(fE);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(fD);
}},__eb:function(bB){{};

if(bB.getLayoutParent()!==this){throw new Error("Remove Error: "+bB+" is not a child of this widget!");
}bB.setLayoutParent(null);
if(this.__dT){this.__dT.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(bB);
}},capture:function(cx){this.getContainerElement().capture(cx);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(c,d,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dQ){return;
}var bk=this.__dQ=new qx.html.Element;
{};
bk.setStyles({position:ey,top:0,left:0,zIndex:7});
var bl=this.getBounds();

if(bl){this.__dQ.setStyles({width:bl.width+et,height:bl.height+et});
}if(qx.core.Variant.isSet(eB,dM)){bk.setStyles({backgroundImage:cP+qx.util.ResourceManager.getInstance().toUri(dV)+cM,backgroundRepeat:eI});
}this.getContainerElement().add(bk);
},_applyDecorator:function(fY,ga){{};
var gd=qx.ui.core.Widget.__dM;
var gb=this.getContainerElement();
if(!this.__dQ&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(ga){gb.remove(this.__dO);
gd.poolDecorator(this.__dO);
}if(fY){var gc=this.__dO=gd.getDecoratorElement(fY);
gc.setStyle(eg,5);
gb.add(gc);
}else{delete this.__dO;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__dU(ga,fY)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(fY){var ge=this.getBounds();

if(ge){gc.resize(ge.width,ge.height);
this.__dQ&&
this.__dQ.setStyles({width:ge.width+et,height:ge.height+et});
}}},_applyShadow:function(eW,eX){var ff=qx.ui.core.Widget.__dN;
var fa=this.getContainerElement();
if(eX){fa.remove(this.__dP);
ff.poolDecorator(this.__dP);
}if(eW){var fc=this.__dP=ff.getDecoratorElement(eW);
fa.add(fc);
var fe=fc.getInsets();
fc.setStyles({left:(-fe.left)+et,top:(-fe.top)+et});
var fd=this.getBounds();

if(fd){var fb=fd.width+fe.left+fe.right;
var eY=fd.height+fe.top+fe.bottom;
fc.resize(fb,eY);
}fc.tint(null);
}else{delete this.__dP;
}},_applyToolTipText:function(fI,fJ){if(qx.core.Variant.isSet(eD,en)){if(this.__dS){return;
}var fK=qx.locale.Manager.getInstance();
this.__dS=fK.addListener(dX,function(){var bm=this.getToolTipText();

if(bm&&bm.translate){this.setToolTipText(bm.translate());
}},this);
}},_applyTextColor:function(X,Y){},_applyZIndex:function(w,x){this.getContainerElement().setStyle(eg,w==null?0:w);
},_applyVisibility:function(bP,bQ){var bR=this.getContainerElement();

if(bP===ep){bR.show();
}else{bR.hide();
}var parent=this.$$parent;

if(parent&&(bQ==null||bP==null||bQ===ek||bP===ek)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(gC,gD){this.getContainerElement().setStyle(ef,gC==1?null:gC);
if(qx.core.Variant.isSet(eB,dM)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var gE=(gC==1||gC==null)?null:0.99;
this.getContentElement().setStyle(ef,gE);
}}},_applyCursor:function(gP,gQ){if(gP==null&&!this.isSelectable()){gP=ei;
}this.getContainerElement().setStyle(dw,gP,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(fv,fw){var fx=this.getBackgroundColor();
var fz=this.getContainerElement();

if(this.__dO){this.__dO.tint(fx);
fz.setStyle(ez,null);
}else{var fy=qx.theme.manager.Color.getInstance().resolve(fx);
fz.setStyle(ez,fy);
}},_applyFont:function(fF,fG){},__ec:null,$$stateChanges:null,_forwardStates:null,hasState:function(ft){var fu=this.__ec;
return !!fu&&!!fu[ft];
},addState:function(cp){var cq=this.__ec;

if(!cq){cq=this.__ec={};
}
if(cq[cp]){return;
}this.__ec[cp]=true;
if(cp===dL){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var ct=this.__ef;

if(forward&&forward[cp]&&ct){var cr;

for(var cs in ct){cr=ct[cs];

if(cr instanceof qx.ui.core.Widget){ct[cs].addState(cp);
}}}},removeState:function(y){var z=this.__ec;

if(!z||!z[y]){return;
}delete this.__ec[y];
if(y===dL){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var C=this.__ef;

if(forward&&forward[y]&&C){for(var B in C){var A=C[B];

if(A instanceof qx.ui.core.Widget){A.removeState(y);
}}}},replaceState:function(fl,fm){var fn=this.__ec;

if(!fn){fn=this.__ec={};
}
if(!fn[fm]){fn[fm]=true;
}
if(fn[fl]){delete fn[fl];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fq=this.__ef;

if(forward&&forward[fm]&&fq){for(var fp in fq){var fo=fq[fp];

if(fo instanceof qx.ui.core.Widget){fo.replaceState(fl,fm);
}}}},__ed:null,__ee:null,syncAppearance:function(){var bJ=this.__ec;
var bI=this.__ed;
var bK=qx.theme.manager.Appearance.getInstance();
var bG=qx.core.Property.$$method.setThemed;
var bO=qx.core.Property.$$method.resetThemed;
if(this.__ee){delete this.__ee;
if(bI){var bF=bK.styleFrom(bI,bJ,null,this.getAppearance());
if(bF){bI=null;
}}}if(!bI){var bH=this;
var bN=[];

do{bN.push(bH.$$subcontrol||bH.getAppearance());
}while(bH=bH.$$subparent);
bI=this.__ed=bN.reverse().join(dB).replace(/#[0-9]+/g,dC);
}var bL=bK.styleFrom(bI,bJ,null,this.getAppearance());

if(bL){var bM;

if(bF){for(var bM in bF){if(bL[bM]===undefined){this[bO[bM]]();
}}}{};
for(var bM in bL){bL[bM]===undefined?this[bO[bM]]():this[bG[bM]](bL[bM]);
}}else if(bF){for(var bM in bF){this[bO[bM]]();
}}this.fireDataEvent(eM,this.__ec);
},_applyAppearance:function(T,U){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dR){qx.ui.core.queue.Appearance.add(this);
this.__dR=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__ee=true;
qx.ui.core.queue.Appearance.add(this);
var gx=this.__ef;

if(gx){var gv;

for(var gw in gx){gv=gx[gw];

if(gv instanceof qx.ui.core.Widget){gv.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var hb=this;

while(hb.getAnonymous()){hb=hb.getLayoutParent();

if(!hb){return null;
}}return hb;
},getFocusTarget:function(){var fA=this;

if(!fA.getEnabled()){return null;
}
while(fA.getAnonymous()||!fA.getFocusable()){fA=fA.getLayoutParent();

if(!fA||!fA.getEnabled()){return null;
}}return fA;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(f,g){var h=this.getFocusElement();
if(f){var j=this.getTabIndex();

if(j==null){j=1;
}h.setAttribute(dP,j);
if(qx.core.Variant.isSet(eB,dM)){h.setAttribute(cU,db);
}else{h.setStyle(cO,cT);
}}else{if(h.isNativelyFocusable()){h.setAttribute(dP,-1);
}else if(g){h.setAttribute(dP,null);
}}},_applyKeepFocus:function(cm){var cn=this.getFocusElement();
cn.setAttribute(dW,cm?en:null);
},_applyKeepActive:function(by){var bz=this.getContainerElement();
bz.setAttribute(dH,by?en:null);
},_applyTabIndex:function(bA){if(bA==null){bA=1;
}else if(bA<1||bA>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&bA!=null){this.getFocusElement().setAttribute(dP,bA);
}},_applySelectable:function(V,W){if(W!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(V);
this.getContentElement().setSelectable(V);
},_applyEnabled:function(ck,cl){if(ck===false){this.addState(eu);
this.removeState(dL);
if(this.isFocusable()){this.removeState(dO);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(eu);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(u,v,name){},_applyContextMenu:function(cy,cz){if(cz){cz.removeState(dR);

if(cz.getOpener()==this){cz.resetOpener();
}
if(!cy){this.removeListener(dR,this._onContextMenuOpen);
cz.removeListener(dN,this._onBeforeContextMenuOpen,this);
}}
if(cy){cy.setOpener(this);
cy.addState(dR);

if(!cz){this.addListener(dR,this._onContextMenuOpen);
cy.addListener(dN,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==ep&&this.hasListener(dY)){this.fireDataEvent(dY,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(cv,cw){if(!this.isEnabled()&&cv===true){cv=false;
}qx.ui.core.DragDropCursor.getInstance();
if(cv){this.addListener(eC,this._onDragStart);
this.addListener(ew,this._onDrag);
this.addListener(eb,this._onDragEnd);
this.addListener(ec,this._onDragChange);
}else{this.removeListener(eC,this._onDragStart);
this.removeListener(ew,this._onDrag);
this.removeListener(eb,this._onDragEnd);
this.removeListener(ec,this._onDragChange);
}this.getContainerElement().setAttribute(eN,cv?en:null);
},_applyDroppable:function(gS,gT){if(!this.isEnabled()&&gS===true){gS=false;
}this.getContainerElement().setAttribute(dx,gS?en:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(ei);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var k=qx.ui.core.DragDropCursor.getInstance();
var m=e.getCurrentAction();
m?k.setAction(m):k.resetAction();
},visualizeFocus:function(){this.addState(dO);
},visualizeBlur:function(){this.removeState(dO);
},scrollChildIntoView:function(gJ,gK,gL,gM){this.scrollChildIntoViewX(gJ,gK,gM);
this.scrollChildIntoViewY(gJ,gL,gM);
},scrollChildIntoViewX:function(ce,cf,cg){this.getContentElement().scrollChildIntoViewX(ce.getContainerElement(),cf,cg);
},scrollChildIntoViewY:function(gG,gH,gI){this.getContentElement().scrollChildIntoViewY(gG.getContainerElement(),gH,gI);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(cu){if(!this.__ef){return false;
}return !!this.__ef[cu];
},__ef:null,_getCreatedChildControls:function(){return this.__ef;
},getChildControl:function(cb,cc){if(!this.__ef){if(cc){return null;
}this.__ef={};
}var cd=this.__ef[cb];

if(cd){return cd;
}
if(cc===true){return null;
}return this._createChildControl(cb);
},_showChildControl:function(n){var o=this.getChildControl(n);
o.show();
return o;
},_excludeChildControl:function(eQ){var eR=this.getChildControl(eQ,true);

if(eR){eR.exclude();
}},_isChildControlVisible:function(gy){var gz=this.getChildControl(gy,true);

if(gz){return gz.isVisible();
}return false;
},_createChildControl:function(p){if(!this.__ef){this.__ef={};
}else if(this.__ef[p]){throw new Error("Child control '"+p+"' already created!");
}var t=p.indexOf(di);

if(t==-1){var q=this._createChildControlImpl(p);
}else{var q=this._createChildControlImpl(p.substring(0,t));
}
if(!q){throw new Error("Unsupported control: "+p);
}q.$$subcontrol=p;
q.$$subparent=this;
var r=this.__ec;
var forward=this._forwardStates;

if(r&&forward&&q instanceof qx.ui.core.Widget){for(var s in r){if(forward[s]){q.addState(s);
}}}this.fireDataEvent(cI,q);
return this.__ef[p]=q;
},_createChildControlImpl:function(eV){return null;
},_disposeChildControls:function(){var gu=this.__ef;

if(!gu){return;
}var gs=qx.ui.core.Widget;

for(var gt in gu){var gr=gu[gt];

if(!gs.contains(this,gr)){gr.destroy();
}else{gr.dispose();
}}delete this.__ef;
},_findTopControl:function(){var bS=this;

while(bS){if(!bS.$$subparent){return bS;
}bS=bS.$$subparent;
}return null;
},getContainerLocation:function(bt){var bu=this.getContainerElement().getDomElement();
return bu?qx.bom.element.Location.get(bu,bt):null;
},getContentLocation:function(bn){var bo=this.getContentElement().getDomElement();
return bo?qx.bom.element.Location.get(bo,bn):null;
},setDomLeft:function(fB){var fC=this.getContainerElement().getDomElement();

if(fC){fC.style.left=fB+et;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(fr){var fs=this.getContainerElement().getDomElement();

if(fs){fs.style.top=fr+et;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(G,top){var H=this.getContainerElement().getDomElement();

if(H){H.style.left=G+et;
H.style.top=top+et;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var fj=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var fk=this.getChildren();

for(var i=0,l=fk.length;i<l;i++){fj.add(fk[i].clone());
}}return fj;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(eD,en)){if(this.__dS){qx.locale.Manager.getInstance().removeListenerById(this.__dS);
}}this.getContainerElement().setAttribute(dg,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var gV=qx.ui.core.Widget;
var gU=this.getContainerElement();

if(this.__dO){gU.remove(this.__dO);
gV.__dM.poolDecorator(this.__dO);
}
if(this.__dP){gU.remove(this.__dP);
gV.__dN.poolDecorator(this.__dP);
}this.clearSeparators();
this.__dO=this.__dP=this.__dV=null;
}else{this._disposeArray(cW);
this._disposeObjects(cY,cC);
}this._disposeArray(cH);
this.__ec=this.__ef=null;
this._disposeObjects(eG,dt,dm,cJ);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(g){qx.ui.core.Widget.call(this);

if(g!=null){this._setLayout(g);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
},_afterRemoveChild:function(e){this.fireNonBubblingEvent(a,qx.event.type.Data,[e]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__ib:null,__ic:null,__id:null,getLayoutLocation:function(O){var R,Q,S,top;
Q=O.getBounds();
S=Q.left;
top=Q.top;
var T=Q;
O=O.getLayoutParent();

while(O&&!O.isRootWidget()){Q=O.getBounds();
S+=Q.left;
top+=Q.top;
R=O.getInsets();
S+=R.left;
top+=R.top;
O=O.getLayoutParent();
}if(O.isRootWidget()){var P=O.getContainerLocation();

if(P){S+=P.left;
top+=P.top;
}}return {left:S,top:top,right:S+T.width,bottom:top+T.height};
},moveTo:function(E,top){if(this.getDomMove()){this.setDomPosition(E,top);
}else{this.setLayoutProperties({left:E,top:top});
}},placeToWidget:function(H,I){if(I){this.__ie();
this.__ib=qx.lang.Function.bind(this.placeToWidget,this,H,false);
qx.event.Idle.getInstance().addListener(i,this.__ib);
this.__id=function(){this.__ie();
};
this.addListener(g,this.__id,this);
}var J=H.getContainerLocation()||this.getLayoutLocation(H);
this.__ig(J);
},__ie:function(){if(this.__ib){qx.event.Idle.getInstance().removeListener(i,this.__ib);
this.__ib=null;
}
if(this.__id){this.removeListener(g,this.__id,this);
this.__id=null;
}},placeToMouse:function(event){var L=event.getDocumentLeft();
var top=event.getDocumentTop();
var K={left:L,top:top,right:L,bottom:top};
this.__ig(K);
},placeToElement:function(y,z){var location=qx.bom.element.Location.get(y);
var A={left:location.left,top:location.top,right:location.left+y.offsetWidth,bottom:location.top+y.offsetHeight};
if(z){this.__ib=qx.lang.Function.bind(this.placeToElement,this,y,false);
qx.event.Idle.getInstance().addListener(i,this.__ib);
this.addListener(g,function(){if(this.__ib){qx.event.Idle.getInstance().removeListener(i,this.__ib);
this.__ib=null;
}},this);
}this.__ig(A);
},placeToPoint:function(B){var C={left:B.left,top:B.top,right:B.left,bottom:B.top};
this.__ig(C);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__if:function(F){var G=null;

if(this._computePlacementSize){var G=this._computePlacementSize();
}else if(this.isVisible()){var G=this.getBounds();
}
if(G==null){this.addListenerOnce(q,function(){this.__if(F);
},this);
}else{F.call(this,G);
}},__ig:function(D){this.__if(function(M){var N=qx.util.placement.Placement.compute(M,this.getLayoutParent().getBounds(),D,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(N.left,N.top);
});
}},destruct:function(){this.__ie();
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
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(x,y){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(x!=null){this.setLabel(x);
}
if(y!=null){this.setIcon(y);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(s){var t;

switch(s){case l:t=new qx.ui.basic.Atom;
this._add(t);
break;
}return t||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,s);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(m,n){var o=this.getChildControl(l);
m==null?o.resetIcon():o.setIcon(m);
},_applyLabel:function(p,q){var r=this.getChildControl(l);
p==null?r.resetLabel():r.setLabel(p);
},_applyRich:function(u,v){var w=this.getChildControl(l);
w.setRich(u);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__hq:{},remove:function(z){delete this.__hq[z.$$hash];
},add:function(A){this.__hq[A.$$hash]=A;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var p=this.__ht();
for(var i=p.length-1;i>=0;i--){var q=p[i];
if(q.hasValidLayout()){continue;
}if(q.isRootWidget()&&!q.hasUserBounds()){var s=q.getSizeHint();
q.renderLayout(0,0,s.width,s.height);
}else{var r=q.getBounds();
q.renderLayout(r.left,r.top,r.width,r.height);
}}},getNestingLevel:function(c){var d=this.__hs;
var f=0;
var parent=c;
while(true){if(d[parent.$$hash]!=null){f+=d[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
f+=1;
}var e=f;

while(c&&c!==parent){d[c.$$hash]=e--;
c=c.$$parent;
}return f;
},__hr:function(){var y=qx.ui.core.queue.Visibility;
this.__hs={};
var x=[];
var w=this.__hq;
var t,v;

for(var u in w){t=w[u];

if(y.isVisible(t)){v=this.getNestingLevel(t);
if(!x[v]){x[v]={};
}x[v][u]=t;
delete w[u];
}}return x;
},__ht:function(){var k=[];
var m=this.__hr();

for(var j=m.length-1;j>=0;j--){if(!m[j]){continue;
}
for(var h in m[j]){var g=m[j][h];
if(j==0||g.isRootWidget()||g.hasUserBounds()){k.push(g);
g.invalidateLayoutCache();
continue;
}var o=g.getSizeHint(false);

if(o){g.invalidateLayoutCache();
var l=g.getSizeHint();
var n=(!g.getBounds()||o.minWidth!==l.minWidth||o.width!==l.width||o.maxWidth!==l.maxWidth||o.minHeight!==l.minHeight||o.height!==l.height||o.maxHeight!==l.maxHeight);
}else{n=true;
}
if(n){var parent=g.getLayoutParent();

if(!m[j-1]){m[j-1]={};
}m[j-1][parent.$$hash]=parent;
}else{k.push(g);
}}}return k;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this.__jY=k;
this.__ka=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jY:null,__ka:null,canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},destruct:function(){this.__jY=this.__ka=null;
},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__fK={};
this.__fL=qx.lang.Function.bind(this.__fP,this);
this.__fM=false;
},members:{__fN:null,__fO:null,__fK:null,__fM:null,__fL:null,schedule:function(c){if(this.__fN==null){this.__fN=window.setTimeout(this.__fL,0);
}var d=c.toHashCode();
if(this.__fO&&this.__fO[d]){return;
}this.__fK[d]=c;
this.__fM=true;
},cancel:function(g){var h=g.toHashCode();
if(this.__fO&&this.__fO[h]){this.__fO[h]=null;
return;
}delete this.__fK[h];
if(qx.lang.Object.isEmpty(this.__fK)&&this.__fN!=null){window.clearTimeout(this.__fN);
this.__fN=null;
}},__fP:qx.event.GlobalError.observeMethod(function(){this.__fN=null;
while(this.__fM){this.__fO=qx.lang.Object.clone(this.__fK);
this.__fK={};
this.__fM=false;

for(var f in this.__fO){var e=this.__fO[f];

if(e){this.__fO[f]=null;
e.call();
}}}this.__fO=null;
})},destruct:function(){if(this.__fN!=null){window.clearTimeout(this.__fN);
}this.__fL=this.__fK=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(d,e){qx.core.Object.call(this);
this.__hl=d;
this.__hm=e||null;
this.__hn=qx.util.DeferredCallManager.getInstance();
},members:{__hl:null,__hm:null,__hn:null,cancel:function(){this.__hn.cancel(this);
},schedule:function(){this.__hn.schedule(this);
},call:function(){this.__hm?this.__hl.apply(this.__hm):this.__hl();
}},destruct:function(b,c){this.cancel();
this.__hm=this.__hl=this.__hn=null;
}});
})();
(function(){var cW="element",cV="qx.client",cU="qxSelectable",cT="off",cS="on",cR="div",cQ="",cP="mshtml",cO="none",cN="scroll",dr="text",dq="qx.html.Element",dp="|capture|",dn="activate",dm="blur",dl="deactivate",dk="capture",dj="userSelect",di="-moz-none",dh="visible",df="releaseCapture",dg="|bubble|",dd="tabIndex",de="focus",da="MozUserSelect",dc="normal",cX="__dt",cY="hidden";
qx.Class.define(dq,{extend:qx.core.Object,construct:function(bh,bi,bj){qx.core.Object.call(this);
this.__cW=bh||cR;
this.__cX=bi||null;
this.__cY=bj||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__da:{},_scheduleFlush:function(V){qx.html.Element.__dE.schedule();
},flush:function(){var p;
{};
var f=this.__db();
var d=f.getFocus();

if(d&&this.__df(d)){f.blur(d);
}var w=f.getActive();

if(w&&this.__df(w)){qx.bom.Element.deactivate(w);
}var j=this.__dd();

if(j&&this.__df(j)){qx.bom.Element.releaseCapture(j);
}var q=[];
var r=this._modified;

for(var o in r){p=r[o];
if(p.__dx()){if(p.__dg&&qx.dom.Hierarchy.isRendered(p.__dg)){q.push(p);
}else{{};
p.__dw();
}delete r[o];
}}
for(var i=0,l=q.length;i<l;i++){p=q[i];
{};
p.__dw();
}var m=this._visibility;

for(var o in m){p=m[o];
var s=p.__dg;

if(!s){delete m[o];
continue;
}{};
if(!p.$$disposed){s.style.display=p.__dj?cQ:cO;
if(qx.core.Variant.isSet(cV,cP)){if(!(document.documentMode>=8)){s.style.visibility=p.__dj?dh:cY;
}}}delete m[o];
}var scroll=this._scroll;

for(var o in scroll){p=scroll[o];
var z=p.__dg;

if(z&&z.offsetWidth){var h=true;
if(p.__dm!=null){p.__dg.scrollLeft=p.__dm;
delete p.__dm;
}if(p.__dn!=null){p.__dg.scrollTop=p.__dn;
delete p.__dn;
}var t=p.__dk;

if(t!=null){var n=t.element.getDomElement();

if(n&&n.offsetWidth){qx.bom.element.Scroll.intoViewX(n,z,t.align);
delete p.__dk;
}else{h=false;
}}var u=p.__dl;

if(u!=null){var n=u.element.getDomElement();

if(n&&n.offsetWidth){qx.bom.element.Scroll.intoViewY(n,z,u.align);
delete p.__dl;
}else{h=false;
}}if(h){delete scroll[o];
}}}var g={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var v=this._actions[i];
var s=v.element.__dg;

if(!s||!g[v.type]&&!v.element.__dx()){continue;
}var k=v.args;
k.unshift(s);
qx.bom.Element[v.type].apply(qx.bom.Element,k);
}this._actions=[];
for(var o in this.__da){var c=this.__da[o];
var z=c.element.__dg;

if(z){qx.bom.Selection.set(z,c.start,c.end);
delete this.__da[o];
}}qx.event.handler.Appear.refresh();
},__db:function(){if(!this.__dc){var bU=qx.event.Registration.getManager(window);
this.__dc=bU.getHandler(qx.event.handler.Focus);
}return this.__dc;
},__dd:function(){if(!this.__de){var dz=qx.event.Registration.getManager(window);
this.__de=dz.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__de.getCaptureElement();
},__df:function(T){var U=qx.core.ObjectRegistry.fromHashCode(T.$$element);
return U&&!U.__dx();
}},members:{__cW:null,__dg:null,__dh:false,__di:true,__dj:true,__dk:null,__dl:null,__dm:null,__dn:null,__do:null,__dp:null,__dq:null,__cX:null,__cY:null,__dr:null,__ds:null,__dt:null,__du:null,__dv:null,_scheduleChildrenUpdate:function(){if(this.__du){return;
}this.__du=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
},_createDomElement:function(){return qx.bom.Element.create(this.__cW);
},__dw:function(){{};
var a=this.__dt;

if(a){var length=a.length;
var b;

for(var i=0;i<length;i++){b=a[i];

if(b.__dj&&b.__di&&!b.__dg){b.__dw();
}}}
if(!this.__dg){this.__dg=this._createDomElement();
this.__dg.$$element=this.$$hash;
this._copyData(false);

if(a&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__du){this._syncChildren();
}}delete this.__du;
},_insertChildren:function(){var ci=this.__dt;
var length=ci.length;
var ck;

if(length>2){var cj=document.createDocumentFragment();

for(var i=0;i<length;i++){ck=ci[i];

if(ck.__dg&&ck.__di){cj.appendChild(ck.__dg);
}}this.__dg.appendChild(cj);
}else{var cj=this.__dg;

for(var i=0;i<length;i++){ck=ci[i];

if(ck.__dg&&ck.__di){cj.appendChild(ck.__dg);
}}}},_syncChildren:function(){var cw;
var cB=qx.core.ObjectRegistry;
var cs=this.__dt;
var cz=cs.length;
var ct;
var cx;
var cv=this.__dg;
var cy=cv.childNodes;
var cu=0;
var cA;
{};
for(var i=cy.length-1;i>=0;i--){cA=cy[i];
cx=cB.fromHashCode(cA.$$element);

if(!cx||!cx.__di||cx.__dv!==this){cv.removeChild(cA);
{};
}}for(var i=0;i<cz;i++){ct=cs[i];
if(ct.__di){cx=ct.__dg;
cA=cy[cu];

if(!cx){continue;
}if(cx!=cA){if(cA){cv.insertBefore(cx,cA);
}else{cv.appendChild(cx);
}{};
}cu++;
}}{};
},_copyData:function(bv){var bz=this.__dg;
var by=this.__cY;

if(by){var bw=qx.bom.element.Attribute;

for(var bA in by){bw.set(bz,bA,by[bA]);
}}var by=this.__cX;

if(by){var bx=qx.bom.element.Style;

if(bv){bx.setStyles(bz,by);
}else{bx.setCss(bz,bx.compile(by));
}}var by=this.__dr;

if(by){for(var bA in by){this._applyProperty(bA,by[bA]);
}}var by=this.__ds;

if(by){qx.event.Registration.getManager(bz).importListeners(bz,by);
delete this.__ds;
}},_syncData:function(){var bo=this.__dg;
var bn=qx.bom.element.Attribute;
var bl=qx.bom.element.Style;
var bm=this.__dp;

if(bm){var br=this.__cY;

if(br){var bp;

for(var bq in bm){bp=br[bq];

if(bp!==undefined){bn.set(bo,bq,bp);
}else{bn.reset(bo,bq);
}}}this.__dp=null;
}var bm=this.__do;

if(bm){var br=this.__cX;

if(br){var bk={};

for(var bq in bm){bk[bq]=br[bq];
}bl.setStyles(bo,bk);
}this.__do=null;
}var bm=this.__dq;

if(bm){var br=this.__dr;

if(br){var bp;

for(var bq in bm){this._applyProperty(bq,br[bq]);
}}this.__dq=null;
}},__dx:function(){var bu=this;
while(bu){if(bu.__dh){return true;
}
if(!bu.__di||!bu.__dj){return false;
}bu=bu.__dv;
}return false;
},__dy:function(bW){if(bW.__dv===this){throw new Error("Child is already in: "+bW);
}
if(bW.__dh){throw new Error("Root elements could not be inserted into other ones.");
}if(bW.__dv){bW.__dv.remove(bW);
}bW.__dv=this;
if(!this.__dt){this.__dt=[];
}if(this.__dg){this._scheduleChildrenUpdate();
}},__dz:function(cr){if(cr.__dv!==this){throw new Error("Has no child: "+cr);
}if(this.__dg){this._scheduleChildrenUpdate();
}delete cr.__dv;
},__dA:function(eb){if(eb.__dv!==this){throw new Error("Has no child: "+eb);
}if(this.__dg){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dt||null;
},getChild:function(K){var L=this.__dt;
return L&&L[K]||null;
},hasChildren:function(){var bJ=this.__dt;
return bJ&&bJ[0]!==undefined;
},indexOf:function(A){var B=this.__dt;
return B?B.indexOf(A):-1;
},hasChild:function(cb){var cc=this.__dt;
return cc&&cc.indexOf(cb)!==-1;
},add:function(bI){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dy(arguments[i]);
}this.__dt.push.apply(this.__dt,arguments);
}else{this.__dy(bI);
this.__dt.push(bI);
}return this;
},addAt:function(bO,bP){this.__dy(bO);
qx.lang.Array.insertAt(this.__dt,bO,bP);
return this;
},remove:function(bX){var bY=this.__dt;

if(!bY){return;
}
if(arguments[1]){var ca;

for(var i=0,l=arguments.length;i<l;i++){ca=arguments[i];
this.__dz(ca);
qx.lang.Array.remove(bY,ca);
}}else{this.__dz(bX);
qx.lang.Array.remove(bY,bX);
}return this;
},removeAt:function(dO){var dP=this.__dt;

if(!dP){throw new Error("Has no children!");
}var dQ=dP[dO];

if(!dQ){throw new Error("Has no child at this position!");
}this.__dz(dQ);
qx.lang.Array.removeAt(this.__dt,dO);
return this;
},removeAll:function(){var cG=this.__dt;

if(cG){for(var i=0,l=cG.length;i<l;i++){this.__dz(cG[i]);
}cG.length=0;
}return this;
},getParent:function(){return this.__dv||null;
},insertInto:function(parent,bK){parent.__dy(this);

if(bK==null){parent.__dt.push(this);
}else{qx.lang.Array.insertAt(this.__dt,this,bK);
}return this;
},insertBefore:function(be){var parent=be.__dv;
parent.__dy(this);
qx.lang.Array.insertBefore(parent.__dt,this,be);
return this;
},insertAfter:function(cM){var parent=cM.__dv;
parent.__dy(this);
qx.lang.Array.insertAfter(parent.__dt,this,cM);
return this;
},moveTo:function(bf){var parent=this.__dv;
parent.__dA(this);
var bg=parent.__dt.indexOf(this);

if(bg===bf){throw new Error("Could not move to same index!");
}else if(bg<bf){bf--;
}qx.lang.Array.removeAt(parent.__dt,bg);
qx.lang.Array.insertAt(parent.__dt,this,bf);
return this;
},moveBefore:function(dy){var parent=this.__dv;
return this.moveTo(parent.__dt.indexOf(dy));
},moveAfter:function(bQ){var parent=this.__dv;
return this.moveTo(parent.__dt.indexOf(bQ)+1);
},free:function(){var parent=this.__dv;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__dt){return;
}parent.__dz(this);
qx.lang.Array.remove(parent.__dt,this);
return this;
},getDomElement:function(){return this.__dg||null;
},getNodeName:function(){return this.__cW;
},setNodeName:function(name){this.__cW=name;
},setRoot:function(cq){this.__dh=cq;
},useMarkup:function(bE){if(this.__dg){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(cV,cP)){var bF=document.createElement(cR);
}else{var bF=qx.bom.Element.getHelperElement();
}bF.innerHTML=bE;
this.useElement(bF.firstChild);
return this.__dg;
},useElement:function(bM){if(this.__dg){throw new Error("Could not overwrite existing element!");
}this.__dg=bM;
this.__dg.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var dY=this.getAttribute(dd);

if(dY>=1){return true;
}var dX=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(dY>=0&&dX[this.__cW]){return true;
}return false;
},setSelectable:qx.core.Variant.select(cV,{"webkit":function(dN){this.setAttribute(cU,dN?cS:cT);
this.setStyle(dj,dN?dc:cO);
},"gecko":function(bd){this.setAttribute(cU,bd?cS:cT);
this.setStyle(da,bd?dr:di);
},"default":function(ea){this.setAttribute(cU,ea?cS:cT);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__cW];
},include:function(){if(this.__di){return;
}delete this.__di;

if(this.__dv){this.__dv._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__di){return;
}this.__di=false;

if(this.__dv){this.__dv._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__di===true;
},show:function(){if(this.__dj){return;
}
if(this.__dg){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}if(this.__dv){this.__dv._scheduleChildrenUpdate();
}delete this.__dj;
},hide:function(){if(!this.__dj){return;
}
if(this.__dg){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}this.__dj=false;
},isVisible:function(){return this.__dj===true;
},scrollChildIntoViewX:function(X,Y,ba){var bb=this.__dg;
var bc=X.getDomElement();

if(ba!==false&&bb&&bb.offsetWidth&&bc&&bc.offsetWidth){qx.bom.element.Scroll.intoViewX(bc,bb,Y);
}else{this.__dk={element:X,align:Y};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}delete this.__dm;
},scrollChildIntoViewY:function(cl,cm,cn){var co=this.__dg;
var cp=cl.getDomElement();

if(cn!==false&&co&&co.offsetWidth&&cp&&cp.offsetWidth){qx.bom.element.Scroll.intoViewY(cp,co,cm);
}else{this.__dl={element:cl,align:cm};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}delete this.__dn;
},scrollToX:function(x,bG){var bH=this.__dg;

if(bG!==true&&bH&&bH.offsetWidth){bH.scrollLeft=x;
}else{this.__dm=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}delete this.__dk;
},getScrollX:function(){var W=this.__dg;

if(W){return W.scrollLeft;
}return this.__dm||0;
},scrollToY:function(y,bC){var bD=this.__dg;

if(bC!==true&&bD&&bD.offsetWidth){bD.scrollTop=y;
}else{this.__dn=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}delete this.__dl;
},getScrollY:function(){var C=this.__dg;

if(C){return C.scrollTop;
}return this.__dn||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(cN,this.__dC,this);
},enableScrolling:function(){this.removeListener(cN,this.__dC,this);
},__dB:null,__dC:function(e){if(!this.__dB){this.__dB=true;
this.__dg.scrollTop=0;
this.__dg.scrollLeft=0;
delete this.__dB;
}},getTextSelection:function(){var bL=this.__dg;

if(bL){return qx.bom.Selection.get(bL);
}return null;
},getTextSelectionLength:function(){var bN=this.__dg;

if(bN){return qx.bom.Selection.getLength(bN);
}return null;
},getTextSelectionStart:function(){var ds=this.__dg;

if(ds){return qx.bom.Selection.getStart(ds);
}return null;
},getTextSelectionEnd:function(){var cF=this.__dg;

if(cF){return qx.bom.Selection.getEnd(cF);
}return null;
},setTextSelection:function(dU,dV){var dW=this.__dg;

if(dW){qx.bom.Selection.set(dW,dU,dV);
return;
}qx.html.Element.__da[this.toHashCode()]={element:this,start:dU,end:dV};
qx.html.Element._scheduleFlush(cW);
},clearTextSelection:function(){var J=this.__dg;

if(J){qx.bom.Selection.clear(J);
}delete qx.html.Element.__da[this.toHashCode()];
},__dD:function(cC,cD){var cE=qx.html.Element._actions;
cE.push({type:cC,element:this,args:cD||[]});
qx.html.Element._scheduleFlush(cW);
},focus:function(){this.__dD(de);
},blur:function(){this.__dD(dm);
},activate:function(){this.__dD(dn);
},deactivate:function(){this.__dD(dl);
},capture:function(cH){this.__dD(dk,[cH!==false]);
},releaseCapture:function(){this.__dD(df);
},setStyle:function(bR,bS,bT){if(!this.__cX){this.__cX={};
}
if(this.__cX[bR]==bS){return;
}
if(bS==null){delete this.__cX[bR];
}else{this.__cX[bR]=bS;
}if(this.__dg){if(bT){qx.bom.element.Style.set(this.__dg,bR,bS);
return this;
}if(!this.__do){this.__do={};
}this.__do[bR]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}return this;
},setStyles:function(dt,du){var dv=qx.bom.element.Style;

if(!this.__cX){this.__cX={};
}
if(this.__dg){if(!this.__do){this.__do={};
}
for(var dx in dt){var dw=dt[dx];

if(this.__cX[dx]==dw){continue;
}
if(dw==null){delete this.__cX[dx];
}else{this.__cX[dx]=dw;
}if(du){dv.set(this.__dg,dx,dw);
continue;
}this.__do[dx]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}else{for(var dx in dt){var dw=dt[dx];

if(this.__cX[dx]==dw){continue;
}
if(dw==null){delete this.__cX[dx];
}else{this.__cX[dx]=dw;
}}}return this;
},removeStyle:function(dB,dC){this.setStyle(dB,null,dC);
},getStyle:function(P){return this.__cX?this.__cX[P]:null;
},getAllStyles:function(){return this.__cX||null;
},setAttribute:function(dR,dS,dT){if(!this.__cY){this.__cY={};
}
if(this.__cY[dR]==dS){return;
}
if(dS==null){delete this.__cY[dR];
}else{this.__cY[dR]=dS;
}if(this.__dg){if(dT){qx.bom.element.Attribute.set(this.__dg,dR,dS);
return this;
}if(!this.__dp){this.__dp={};
}this.__dp[dR]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}return this;
},setAttributes:function(dK,dL){for(var dM in dK){this.setAttribute(dM,dK[dM],dL);
}return this;
},removeAttribute:function(bs,bt){this.setAttribute(bs,null,bt);
},getAttribute:function(bV){return this.__cY?this.__cY[bV]:null;
},_applyProperty:function(name,dA){},_setProperty:function(Q,R,S){if(!this.__dr){this.__dr={};
}
if(this.__dr[Q]==R){return;
}
if(R==null){delete this.__dr[Q];
}else{this.__dr[Q]=R;
}if(this.__dg){if(S){this._applyProperty(Q,R);
return this;
}if(!this.__dq){this.__dq={};
}this.__dq[Q]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}return this;
},_removeProperty:function(cI,cJ){this._setProperty(cI,null,cJ);
},_getProperty:function(M){var N=this.__dr;

if(!N){return null;
}var O=N[M];
return O==null?null:O;
},addListener:function(D,E,self,F){var G;

if(this.$$disposed){return null;
}{};

if(this.__dg){return qx.event.Registration.addListener(this.__dg,D,E,self,F);
}
if(!this.__ds){this.__ds={};
}
if(F==null){F=false;
}var H=qx.event.Manager.getNextUniqueId();
var I=D+(F?dp:dg)+H;
this.__ds[I]={type:D,listener:E,self:self,capture:F,unique:H};
return I;
},removeListener:function(dD,dE,self,dF){var dG;

if(this.$$disposed){return null;
}{};

if(this.__dg){qx.event.Registration.removeListener(this.__dg,dD,dE,self,dF);
}else{var dI=this.__ds;
var dH;

if(dF==null){dF=false;
}
for(var dJ in dI){dH=dI[dJ];
if(dH.listener===dE&&dH.self===self&&dH.capture===dF&&dH.type===dD){delete dI[dJ];
break;
}}}return this;
},removeListenerById:function(cL){if(this.$$disposed){return null;
}
if(this.__dg){qx.event.Registration.removeListenerById(this.__dg,cL);
}else{delete this.__ds[cL];
}return this;
},hasListener:function(cd,ce){if(this.$$disposed){return false;
}
if(this.__dg){return qx.event.Registration.hasListener(this.__dg,cd,ce);
}var cg=this.__ds;
var cf;

if(ce==null){ce=false;
}
for(var ch in cg){cf=cg[ch];
if(cf.capture===ce&&cf.type===cd){return true;
}}return false;
}},defer:function(cK){cK.__dE=new qx.util.DeferredCall(cK.flush,cK);
},destruct:function(){var bB=this.__dg;

if(bB){qx.event.Registration.getManager(bB).removeAllListeners(bB);
bB.$$element=cQ;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dv;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(cX);
this.__cY=this.__cX=this.__ds=this.__dr=this.__dp=this.__do=this.__dq=this.__dg=this.__dv=this.__dk=this.__dl=null;
}});
})();
(function(){var c='ie',b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__kC:false,__kD:{},__kE:0,MAX_RETRIES:10,scheduleFlush:function(i){var self=qx.ui.core.queue.Manager;
self.__kD[i]=true;

if(!self.__kC){self.__kH.schedule();
self.__kC=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__kF){return;
}self.__kF=true;
self.__kH.cancel();
var d=self.__kD;
self.__kG(function(){while(d.visibility||d.widget||d.appearance||d.layout||d.element){if(d.widget){delete d.widget;
qx.ui.core.queue.Widget.flush();
}
if(d.visibility){delete d.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(d.appearance){delete d.appearance;
qx.ui.core.queue.Appearance.flush();
}if(d.widget||d.visibility||d.appearance){continue;
}
if(d.layout){delete d.layout;
qx.ui.core.queue.Layout.flush();
}if(d.widget||d.visibility||d.appearance||d.layout){continue;
}
if(d.element){delete d.element;
qx.html.Element.flush();
}}},function(){self.__kC=false;
});
self.__kG(function(){if(d.dispose){delete d.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__kF=false;
});
self.__kE=0;
},__kG:function(g,h){var self=qx.ui.core.queue.Manager;

try{g();
}catch(e){{};
self.__kC=false;
self.__kF=false;
self.__kE+=1;
if(qx.bom.client.Browser.NAME==c&&qx.bom.client.Browser.VERSION<=7){h();
}
if(self.__kE<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__kE-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{h();
}}},defer:function(f){f.__kH=new qx.util.DeferredCall(f.flush);
qx.html.Element._scheduleFlush=f.scheduleFlush;
qx.event.Registration.addListener(window,a,f.flush);
}});
})();
(function(){var t="abstract",s="qx.event.dispatch.AbstractBubbling";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:t,construct:function(w){this._manager=w;
},members:{_getParent:function(x){throw new Error("Missing implementation");
},canDispatchEvent:function(u,event,v){return event.getBubbles();
},dispatchEvent:function(a,event,b){var parent=a;
var m=this._manager;
var h,q;
var f;
var l,o;
var n;
var p=[];
h=m.getListeners(a,b,true);
q=m.getListeners(a,b,false);

if(h){p.push(h);
}
if(q){p.push(q);
}var parent=this._getParent(a);
var d=[];
var c=[];
var e=[];
var k=[];
while(parent!=null){h=m.getListeners(parent,b,true);

if(h){e.push(h);
k.push(parent);
}q=m.getListeners(parent,b,false);

if(q){d.push(q);
c.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=e.length-1;i>=0;i--){n=k[i];
event.setCurrentTarget(n);
f=e[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||n;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(a);

for(var i=0,r=p.length;i<r;i++){f=p[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||a;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,r=d.length;i<r;i++){n=c[i];
event.setCurrentTarget(n);
f=d[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||n;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(d){return d.parentNode;
},canDispatchEvent:function(b,event,c){return b.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var D="keydown",C="qx.client",B="keypress",A="NumLock",z="keyup",y="Enter",x="0",w="9",v="-",u="PageUp",bL="+",bK="PrintScreen",bJ="gecko",bI="A",bH="Z",bG="Left",bF="F5",bE="Down",bD="Up",bC="F11",K="F6",L="useraction",I="F3",J="keyinput",G="Insert",H="F8",E="End",F="/",S="Delete",T="*",bg="cmd",bc="F1",bo="F4",bj="Home",by="F2",bt="F12",X="PageDown",bB="F7",bA="Win",bz="F9",W="F10",ba="Right",bb="text",be="Escape",bh="webkit",bk="5",bq="3",bv="Meta",M="7",N="CapsLock",Y="input",bn="Control",bm="Space",bl="Tab",bs="Shift",br="Pause",bi="Unidentified",bp="qx.event.handler.Keyboard",r="mshtml|webkit",bu="6",O="off",P="Apps",bd="4",s="Alt",t="mshtml",V="2",Q="Scroll",R="1",U="8",bf="autoComplete",bx=",",bw="Backspace";
qx.Class.define(bp,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bY){qx.core.Object.call(this);
this.__gA=bY;
this.__gB=bY.getWindow();
if(qx.core.Variant.isSet(C,bJ)){this.__gC=this.__gB;
}else{this.__gC=this.__gB.document.documentElement;
}this.__gD={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cI){if(this._identifierToKeyCodeMap[cI]){return true;
}
if(cI.length!=1){return false;
}
if(cI>=x&&cI<=w){return true;
}
if(cI>=bI&&cI<=bH){return true;
}
switch(cI){case bL:case v:case T:case F:return true;
default:return false;
}}},members:{__gE:null,__gA:null,__gB:null,__gC:null,__gD:null,__gF:null,__gG:null,__gH:null,canHandleEvent:function(ce,cf){},registerEvent:function(cJ,cK,cL){},unregisterEvent:function(bV,bW,bX){},_fireInputEvent:function(co,cp){var cq=this.__gI();
if(cq&&cq.offsetWidth!=0){var event=qx.event.Registration.createEvent(J,qx.event.type.KeyInput,[co,cq,cp]);
this.__gA.dispatchEvent(cq,event);
}if(this.__gB){qx.event.Registration.fireEvent(this.__gB,L,qx.event.type.Data,[J]);
}},_fireSequenceEvent:function(cz,cA,cB){var cC=this.__gI();
var cD=cz.keyCode;
var event=qx.event.Registration.createEvent(cA,qx.event.type.KeySequence,[cz,cC,cB]);
this.__gA.dispatchEvent(cC,event);
if(qx.core.Variant.isSet(C,r)){if(cA==D&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cD)&&!this._emulateKeyPress[cD]){this._fireSequenceEvent(cz,B,cB);
}}}if(this.__gB){qx.event.Registration.fireEvent(this.__gB,L,qx.event.type.Data,[cA]);
}},__gI:function(){var cg=this.__gA.getHandler(qx.event.handler.Focus);
var ch=cg.getActive();
if(!ch||ch.offsetWidth==0){ch=cg.getFocus();
}if(!ch||ch.offsetWidth==0){ch=this.__gA.getWindow().document.body;
}return ch;
},_initKeyObserver:function(){this.__gE=qx.lang.Function.listener(this.__gJ,this);
this.__gH=qx.lang.Function.listener(this.__gL,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gC,z,this.__gE);
Event.addNativeListener(this.__gC,D,this.__gE);
Event.addNativeListener(this.__gC,B,this.__gH);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gC,z,this.__gE);
Event.removeNativeListener(this.__gC,D,this.__gE);
Event.removeNativeListener(this.__gC,B,this.__gH);

for(var cc in (this.__gG||{})){var cb=this.__gG[cc];
Event.removeNativeListener(cb.target,B,cb.callback);
}delete (this.__gG);
},__gJ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(C,{"mshtml":function(e){e=window.event||e;
var h=e.keyCode;
var f=0;
var g=e.type;
if(!(this.__gD[h]==D&&g==D)){this._idealKeyHandler(h,f,g,e);
}if(g==D){if(this._isNonPrintableKeyCode(h)||this._emulateKeyPress[h]){this._idealKeyHandler(h,f,B,e);
}}this.__gD[h]=g;
},"gecko":function(cu){var cy=this._keyCodeFix[cu.keyCode]||cu.keyCode;
var cw=0;
var cx=cu.type;
if(qx.bom.client.Platform.WIN){var cv=cy?this._keyCodeToIdentifier(cy):this._charCodeToIdentifier(cw);

if(!(this.__gD[cv]==D&&cx==D)){this._idealKeyHandler(cy,cw,cx,cu);
}this.__gD[cv]=cx;
}else{this._idealKeyHandler(cy,cw,cx,cu);
}this.__gK(cu.target,cx,cy);
},"webkit":function(bM){var bP=0;
var bN=0;
var bO=bM.type;
if(qx.bom.client.Engine.VERSION<525.13){if(bO==z||bO==D){bP=this._charCode2KeyCode[bM.charCode]||bM.keyCode;
}else{if(this._charCode2KeyCode[bM.charCode]){bP=this._charCode2KeyCode[bM.charCode];
}else{bN=bM.charCode;
}}this._idealKeyHandler(bP,bN,bO,bM);
}else{bP=bM.keyCode;
this._idealKeyHandler(bP,bN,bO,bM);
if(bO==D){if(this._isNonPrintableKeyCode(bP)||this._emulateKeyPress[bP]){this._idealKeyHandler(bP,bN,B,bM);
}}this.__gD[bP]=bO;
}},"opera":function(cn){this.__gF=cn.keyCode;
this._idealKeyHandler(cn.keyCode,0,cn.type,cn);
}})),__gK:qx.core.Variant.select(C,{"gecko":function(ci,cj,ck){if(cj===D&&(ck==33||ck==34||ck==38||ck==40)&&ci.type==bb&&ci.tagName.toLowerCase()===Y&&ci.getAttribute(bf)!==O){if(!this.__gG){this.__gG={};
}var cm=qx.core.ObjectRegistry.toHashCode(ci);

if(this.__gG[cm]){return;
}var self=this;
this.__gG[cm]={target:ci,callback:function(cd){qx.bom.Event.stopPropagation(cd);
self.__gL(cd);
}};
var cl=qx.event.GlobalError.observeMethod(this.__gG[cm].callback);
qx.bom.Event.addNativeListener(ci,B,cl);
}},"default":null}),__gL:qx.event.GlobalError.observeMethod(qx.core.Variant.select(C,{"mshtml":function(d){d=window.event||d;

if(this._charCode2KeyCode[d.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[d.keyCode],0,d.type,d);
}else{this._idealKeyHandler(0,d.keyCode,d.type,d);
}},"gecko":function(i){var l=this._keyCodeFix[i.keyCode]||i.keyCode;
var j=i.charCode;
var k=i.type;
this._idealKeyHandler(l,j,k,i);
},"webkit":function(bQ){if(qx.bom.client.Engine.VERSION<525.13){var bT=0;
var bR=0;
var bS=bQ.type;

if(bS==z||bS==D){bT=this._charCode2KeyCode[bQ.charCode]||bQ.keyCode;
}else{if(this._charCode2KeyCode[bQ.charCode]){bT=this._charCode2KeyCode[bQ.charCode];
}else{bR=bQ.charCode;
}}this._idealKeyHandler(bT,bR,bS,bQ);
}else{if(this._charCode2KeyCode[bQ.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bQ.keyCode],0,bQ.type,bQ);
}else{this._idealKeyHandler(0,bQ.keyCode,bQ.type,bQ);
}}},"opera":function(cr){var ct=cr.keyCode;
var cs=cr.type;
if(ct!=this.__gF){this._idealKeyHandler(0,this.__gF,cs,cr);
}else{if(this._keyCodeToIdentifierMap[cr.keyCode]){this._idealKeyHandler(cr.keyCode,0,cr.type,cr);
}else{this._idealKeyHandler(0,cr.keyCode,cr.type,cr);
}}}})),_idealKeyHandler:function(m,n,o,p){var q;
if(m||(!m&&!n)){q=this._keyCodeToIdentifier(m);
this._fireSequenceEvent(p,o,q);
}else{q=this._charCodeToIdentifier(n);
this._fireSequenceEvent(p,B,q);
this._fireInputEvent(p,n);
}},_specialCharCodeMap:{8:bw,9:bl,13:y,27:be,32:bm},_emulateKeyPress:qx.core.Variant.select(C,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bs,17:bn,18:s,20:N,224:bv,37:bG,38:bD,39:ba,40:bE,33:u,34:X,35:E,36:bj,45:G,46:S,112:bc,113:by,114:I,115:bo,116:bF,117:K,118:bB,119:H,120:bz,121:W,122:bC,123:bt,144:A,44:bK,145:Q,19:br,91:qx.bom.client.Platform.MAC?bg:bA,92:bA,93:qx.bom.client.Platform.MAC?bg:P},_numpadToCharCode:{96:x.charCodeAt(0),97:R.charCodeAt(0),98:V.charCodeAt(0),99:bq.charCodeAt(0),100:bd.charCodeAt(0),101:bk.charCodeAt(0),102:bu.charCodeAt(0),103:M.charCodeAt(0),104:U.charCodeAt(0),105:w.charCodeAt(0),106:T.charCodeAt(0),107:bL.charCodeAt(0),109:v.charCodeAt(0),110:bx.charCodeAt(0),111:F.charCodeAt(0)},_charCodeA:bI.charCodeAt(0),_charCodeZ:bH.charCodeAt(0),_charCode0:x.charCodeAt(0),_charCode9:w.charCodeAt(0),_isNonPrintableKeyCode:function(a){return this._keyCodeToIdentifierMap[a]?true:false;
},_isIdentifiableKeyCode:function(cH){if(cH>=this._charCodeA&&cH<=this._charCodeZ){return true;
}if(cH>=this._charCode0&&cH<=this._charCode9){return true;
}if(this._specialCharCodeMap[cH]){return true;
}if(this._numpadToCharCode[cH]){return true;
}if(this._isNonPrintableKeyCode(cH)){return true;
}return false;
},_keyCodeToIdentifier:function(b){if(this._isIdentifiableKeyCode(b)){var c=this._numpadToCharCode[b];

if(c){return String.fromCharCode(c);
}return (this._keyCodeToIdentifierMap[b]||this._specialCharCodeMap[b]||String.fromCharCode(b));
}else{return bi;
}},_charCodeToIdentifier:function(ca){return this._specialCharCodeMap[ca]||String.fromCharCode(ca).toUpperCase();
},_identifierToKeyCode:function(bU){return qx.event.handler.Keyboard._identifierToKeyCodeMap[bU]||bU.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gF=this.__gA=this.__gB=this.__gC=this.__gD=null;
},defer:function(cE,cF){qx.event.Registration.addHandler(cE);
if(!cE._identifierToKeyCodeMap){cE._identifierToKeyCodeMap={};

for(var cG in cF._keyCodeToIdentifierMap){cE._identifierToKeyCodeMap[cF._keyCodeToIdentifierMap[cG]]=parseInt(cG,10);
}
for(var cG in cF._specialCharCodeMap){cE._identifierToKeyCodeMap[cF._specialCharCodeMap[cG]]=parseInt(cG,10);
}}
if(qx.core.Variant.isSet(C,t)){cF._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(C,bJ)){cF._keyCodeFix={12:cF._identifierToKeyCode(A)};
}else if(qx.core.Variant.isSet(C,bh)){if(qx.bom.client.Engine.VERSION<525.13){cF._charCode2KeyCode={63289:cF._identifierToKeyCode(A),63276:cF._identifierToKeyCode(u),63277:cF._identifierToKeyCode(X),63275:cF._identifierToKeyCode(E),63273:cF._identifierToKeyCode(bj),63234:cF._identifierToKeyCode(bG),63232:cF._identifierToKeyCode(bD),63235:cF._identifierToKeyCode(ba),63233:cF._identifierToKeyCode(bE),63272:cF._identifierToKeyCode(S),63302:cF._identifierToKeyCode(G),63236:cF._identifierToKeyCode(bc),63237:cF._identifierToKeyCode(by),63238:cF._identifierToKeyCode(I),63239:cF._identifierToKeyCode(bo),63240:cF._identifierToKeyCode(bF),63241:cF._identifierToKeyCode(K),63242:cF._identifierToKeyCode(bB),63243:cF._identifierToKeyCode(H),63244:cF._identifierToKeyCode(bz),63245:cF._identifierToKeyCode(W),63246:cF._identifierToKeyCode(bC),63247:cF._identifierToKeyCode(bt),63248:cF._identifierToKeyCode(bK),3:cF._identifierToKeyCode(y),12:cF._identifierToKeyCode(A),13:cF._identifierToKeyCode(y)};
}else{cF._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var v="qx.client",u="mouseup",t="click",s="mousedown",r="contextmenu",q="mousewheel",p="dblclick",o="mshtml",n="mouseover",m="mouseout",h="DOMMouseScroll",l="mousemove",k="on",g="mshtml|webkit|opera",f="useraction",j="gecko|webkit",i="qx.event.handler.Mouse";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(w){qx.core.Object.call(this);
this.__eu=w;
this.__ev=w.getWindow();
this.__ew=this.__ev.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__ex:null,__ey:null,__ez:null,__eA:null,__eB:null,__eu:null,__ev:null,__ew:null,canHandleEvent:function(d,e){},registerEvent:qx.bom.client.System.IPHONE?
function(K,L,M){K[k+L]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(H,I,J){H[k+I]=undefined;
}:qx.lang.Function.returnNull,__eC:function(D,E,F){if(!F){F=D.target||D.srcElement;
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==q?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__ev,f,qx.event.type.Data,[E||D.type]);
},_initButtonObserver:function(){this.__ex=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ew,s,this.__ex);
Event.addNativeListener(this.__ew,u,this.__ex);
Event.addNativeListener(this.__ew,t,this.__ex);
Event.addNativeListener(this.__ew,p,this.__ex);
Event.addNativeListener(this.__ew,r,this.__ex);
},_initMoveObserver:function(){this.__ey=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ew,l,this.__ey);
Event.addNativeListener(this.__ew,n,this.__ey);
Event.addNativeListener(this.__ew,m,this.__ey);
},_initWheelObserver:function(){this.__ez=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var S=qx.core.Variant.isSet(v,g)?q:h;
var T=qx.core.Variant.isSet(v,o)?this.__ew:this.__ev;
Event.addNativeListener(T,S,this.__ez);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ew,s,this.__ex);
Event.removeNativeListener(this.__ew,u,this.__ex);
Event.removeNativeListener(this.__ew,t,this.__ex);
Event.removeNativeListener(this.__ew,p,this.__ex);
Event.removeNativeListener(this.__ew,r,this.__ex);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ew,l,this.__ey);
Event.removeNativeListener(this.__ew,n,this.__ey);
Event.removeNativeListener(this.__ew,m,this.__ey);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var B=qx.core.Variant.isSet(v,g)?q:h;
var C=qx.core.Variant.isSet(v,o)?this.__ew:this.__ev;
Event.removeNativeListener(C,B,this.__ez);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(N){this.__eC(N);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(a){var b=a.type;
var c=a.target||a.srcElement;
if(qx.core.Variant.isSet(v,j)){if(c&&c.nodeType==3){c=c.parentNode;
}}
if(this.__eD){this.__eD(a,b,c);
}
if(this.__eF){this.__eF(a,b,c);
}this.__eC(a,b,c);

if(this.__eE){this.__eE(a,b,c);
}
if(this.__eG){this.__eG(a,b,c);
}this.__eA=b;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(G){this.__eC(G,q);
}),__eD:qx.core.Variant.select(v,{"webkit":function(P,Q,R){if(qx.bom.client.Engine.VERSION<530){if(Q==r){this.__eC(P,u,R);
}}},"default":null}),__eE:qx.core.Variant.select(v,{"opera":function(U,V,W){if(V==u&&U.button==2){this.__eC(U,r,W);
}},"default":null}),__eF:qx.core.Variant.select(v,{"mshtml":function(X,Y,ba){if(Y==u&&this.__eA==t){this.__eC(X,s,ba);
}else if(Y==p){this.__eC(X,t,ba);
}},"default":null}),__eG:qx.core.Variant.select(v,{"mshtml":null,"default":function(x,y,z){switch(y){case s:this.__eB=z;
break;
case u:if(z!==this.__eB){var A=qx.dom.Hierarchy.getCommonParent(z,this.__eB);
this.__eC(x,t,A);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__eu=this.__ev=this.__ew=this.__eB=null;
},defer:function(O){qx.event.Registration.addHandler(O);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(f,g,h){},unregisterEvent:function(b,c,d){}},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var O="alias",N="copy",M="blur",L="mouseout",K="keydown",J="Ctrl",I="Shift",H="mousemove",G="move",F="mouseover",bf="Alt",be="keyup",bd="mouseup",bc="dragend",bb="on",ba="mousedown",Y="qxDraggable",X="drag",W="drop",V="qxDroppable",T="qx.event.handler.DragDrop",U="droprequest",R="dragstart",S="dragchange",P="dragleave",Q="dragover";
qx.Class.define(T,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bm){qx.core.Object.call(this);
this.__iQ=bm;
this.__iR=bm.getWindow().document.documentElement;
this.__iQ.addListener(this.__iR,ba,this._onMouseDown,this);
this.__je();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__iQ:null,__iR:null,__iS:null,__iT:null,__iU:null,__iV:null,__iW:null,__iX:null,__iY:null,__ja:null,__jb:false,__jc:0,__jd:0,canHandleEvent:function(m,n){},registerEvent:function(j,k,l){},unregisterEvent:function(bh,bi,bj){},addType:function(a){this.__iU[a]=true;
},addAction:function(u){this.__iV[u]=true;
},supportsType:function(bk){return !!this.__iU[bk];
},supportsAction:function(v){return !!this.__iV[v];
},getData:function(s){if(!this.__jl||!this.__iS){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__iU[s]){throw new Error("Unsupported data type: "+s+"!");
}
if(!this.__iX[s]){this.__iY=s;
this.__jg(U,this.__iT,this.__iS,false);
}
if(!this.__iX[s]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__iX[s]||null;
},getCurrentAction:function(){return this.__ja;
},addData:function(h,i){this.__iX[h]=i;
},getCurrentType:function(){return this.__iY;
},isSessionActive:function(){return this.__jb;
},__je:function(){this.__iU={};
this.__iV={};
this.__iW={};
this.__iX={};
},__jf:function(){if(this.__iT==null){return;
}var f=this.__iV;
var c=this.__iW;
var d=null;

if(this.__jl){if(c.Shift&&c.Ctrl&&f.alias){d=O;
}else if(c.Shift&&c.Alt&&f.copy){d=N;
}else if(c.Shift&&f.move){d=G;
}else if(c.Alt&&f.alias){d=O;
}else if(c.Ctrl&&f.copy){d=N;
}else if(f.move){d=G;
}else if(f.copy){d=N;
}else if(f.alias){d=O;
}}
if(d!=this.__ja){this.__ja=d;
this.__jg(S,this.__iT,this.__iS,false);
}},__jg:function(w,x,y,z,A){var C=qx.event.Registration;
var B=C.createEvent(w,qx.event.type.Drag,[z,A]);

if(x!==y){B.setRelatedTarget(y);
}return C.dispatchEvent(x,B);
},__jh:function(b){while(b&&b.nodeType==1){if(b.getAttribute(Y)==bb){return b;
}b=b.parentNode;
}return null;
},__ji:function(bl){while(bl&&bl.nodeType==1){if(bl.getAttribute(V)==bb){return bl;
}bl=bl.parentNode;
}return null;
},__jj:function(){this.__iT=null;
this.__iQ.removeListener(this.__iR,H,this._onMouseMove,this,true);
this.__iQ.removeListener(this.__iR,bd,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,M,this._onWindowBlur,this);
this.__je();
},__jk:function(){if(this.__jb){this.__iQ.removeListener(this.__iR,F,this._onMouseOver,this,true);
this.__iQ.removeListener(this.__iR,L,this._onMouseOut,this,true);
this.__iQ.removeListener(this.__iR,K,this._onKeyDown,this,true);
this.__iQ.removeListener(this.__iR,be,this._onKeyUp,this,true);
this.__jg(bc,this.__iT,this.__iS,false);
this.__jb=false;
}this.__jl=false;
this.__iS=null;
this.__jj();
},__jl:false,_onWindowBlur:function(e){this.__jk();
},_onKeyDown:function(e){var g=e.getKeyIdentifier();

switch(g){case bf:case J:case I:if(!this.__iW[g]){this.__iW[g]=true;
this.__jf();
}}},_onKeyUp:function(e){var bg=e.getKeyIdentifier();

switch(bg){case bf:case J:case I:if(this.__iW[bg]){this.__iW[bg]=false;
this.__jf();
}}},_onMouseDown:function(e){if(this.__jb){return;
}var t=this.__jh(e.getTarget());

if(t){this.__jc=e.getDocumentLeft();
this.__jd=e.getDocumentTop();
this.__iT=t;
this.__iQ.addListener(this.__iR,H,this._onMouseMove,this,true);
this.__iQ.addListener(this.__iR,bd,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,M,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__jl){this.__jg(W,this.__iS,this.__iT,false,e);
}if(this.__jb){e.stopPropagation();
}this.__jk();
},_onMouseMove:function(e){if(this.__jb){if(!this.__jg(X,this.__iT,this.__iS,true,e)){this.__jk();
}}else{if(Math.abs(e.getDocumentLeft()-this.__jc)>3||Math.abs(e.getDocumentTop()-this.__jd)>3){if(this.__jg(R,this.__iT,this.__iS,true,e)){this.__jb=true;
this.__iQ.addListener(this.__iR,F,this._onMouseOver,this,true);
this.__iQ.addListener(this.__iR,L,this._onMouseOut,this,true);
this.__iQ.addListener(this.__iR,K,this._onKeyDown,this,true);
this.__iQ.addListener(this.__iR,be,this._onKeyUp,this,true);
var r=this.__iW;
r.Ctrl=e.isCtrlPressed();
r.Shift=e.isShiftPressed();
r.Alt=e.isAltPressed();
this.__jf();
}else{this.__jg(bc,this.__iT,this.__iS,false);
this.__jj();
}}}},_onMouseOver:function(e){var D=e.getTarget();
var E=this.__ji(D);

if(E&&E!=this.__iS){this.__jl=this.__jg(Q,E,this.__iT,true,e);
this.__iS=E;
this.__jf();
}},_onMouseOut:function(e){var p=this.__ji(e.getTarget());
var o=this.__ji(e.getRelatedTarget());

if(p&&p!==o&&p==this.__iS){this.__jg(P,this.__iS,o,false,e);
this.__iS=null;
this.__jl=false;
qx.event.Timer.once(this.__jf,this,0);
}}},destruct:function(){this.__iT=this.__iS=this.__iQ=this.__iR=this.__iU=this.__iV=this.__iW=this.__iX=null;
},defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var f="-",e="qx.event.handler.Element";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){qx.core.Object.call(this);
this._manager=g;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(n,o){},registerEvent:function(h,i,j){var m=qx.core.ObjectRegistry.toHashCode(h);
var k=m+f+i;
var l=qx.lang.Function.listener(this._onNative,this,k);
qx.bom.Event.addNativeListener(h,i,l);
this._registeredEvents[k]={element:h,type:i,listener:l};
},unregisterEvent:function(s,t,u){var x=this._registeredEvents;

if(!x){return;
}var y=qx.core.ObjectRegistry.toHashCode(s);
var v=y+f+t;
var w=this._registeredEvents[v];

if(w){qx.bom.Event.removeNativeListener(s,t,w.listener);
}delete this._registeredEvents[v];
},_onNative:qx.event.GlobalError.observeMethod(function(a,b){var d=this._registeredEvents;

if(!d){return;
}var c=d[b];
qx.event.Registration.fireNonBubblingEvent(c.element,c.type,qx.event.type.Native,[a]);
})},destruct:function(){var p;
var q=this._registeredEvents;

for(var r in q){p=q[r];
qx.bom.Event.removeNativeListener(p.element,p.type,p.listener);
}this._manager=this._registeredEvents=null;
},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var d="qx.event.handler.Appear",c="disappear",b="appear";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this.__co=a;
this.__cp={};
qx.event.handler.Appear.__cq[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__cq:{},refresh:function(){var j=this.__cq;

for(var k in j){j[k].refresh();
}}},members:{__co:null,__cp:null,canHandleEvent:function(l,m){},registerEvent:function(t,u,v){var w=qx.core.ObjectRegistry.toHashCode(t)+u;
var x=this.__cp;

if(x&&!x[w]){x[w]=t;
t.$$displayed=t.offsetWidth>0;
}},unregisterEvent:function(e,f,g){var h=qx.core.ObjectRegistry.toHashCode(e)+f;
var i=this.__cp;

if(!i){return;
}
if(i[h]){delete i[h];
}},refresh:function(){var q=this.__cp;
var r;

for(var p in q){r=q[p];
var n=r.offsetWidth>0;

if((!!r.$$displayed)!==n){r.$$displayed=n;
var o=qx.event.Registration.createEvent(n?b:c);
this.__co.dispatchEvent(r,o);
}}}},destruct:function(){this.__co=this.__cp=null;
delete qx.event.handler.Appear.__cq[this.$$hash];
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var u="mshtml",t="",s="qx.client",r=" ",q=">",p="<",o="='",n="none",m="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",k="qx.bom.Element",f="' ",h="div",g="></";
qx.Class.define(k,{statics:{__kf:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__kg:{},__kh:{},allowCreationWithMarkup:function(O){if(!O){O=window;
}var P=O.location.href;

if(qx.bom.Element.__kh[P]==undefined){try{O.document.createElement(m);
qx.bom.Element.__kh[P]=true;
}catch(e){qx.bom.Element.__kh[P]=false;
}}return qx.bom.Element.__kh[P];
},getHelperElement:function(K){if(!K){K=window;
}var M=K.location.href;

if(!qx.bom.Element.__kg[M]){var L=qx.bom.Element.__kg[M]=K.document.createElement(h);
if(qx.bom.client.Engine.WEBKIT){L.style.display=n;
K.document.body.appendChild(L);
}}return qx.bom.Element.__kg[M];
},create:function(name,be,bf){if(!bf){bf=window;
}
if(!name){throw new Error("The tag name is missing!");
}var bh=this.__kf;
var bg=t;

for(var bj in be){if(bh[bj]){bg+=bj+o+be[bj]+f;
}}var bk;
if(bg!=t){if(qx.bom.Element.allowCreationWithMarkup(bf)){bk=bf.document.createElement(p+name+r+bg+q);
}else{var bi=qx.bom.Element.getHelperElement(bf);
bi.innerHTML=p+name+r+bg+g+name+q;
bk=bi.firstChild;
}}else{bk=bf.document.createElement(name);
}
for(var bj in be){if(!bh[bj]){qx.bom.element.Attribute.set(bk,bj,be[bj]);
}}return bk;
},empty:function(bd){return bd.innerHTML=t;
},addListener:function(a,b,c,self,d){return qx.event.Registration.addListener(a,b,c,self,d);
},removeListener:function(Q,R,S,self,T){return qx.event.Registration.removeListener(Q,R,S,self,T);
},removeListenerById:function(Y,ba){return qx.event.Registration.removeListenerById(Y,ba);
},hasListener:function(U,V,W){return qx.event.Registration.hasListener(U,V,W);
},focus:function(X){qx.event.Registration.getManager(X).getHandler(qx.event.handler.Focus).focus(X);
},blur:function(I){qx.event.Registration.getManager(I).getHandler(qx.event.handler.Focus).blur(I);
},activate:function(v){qx.event.Registration.getManager(v).getHandler(qx.event.handler.Focus).activate(v);
},deactivate:function(N){qx.event.Registration.getManager(N).getHandler(qx.event.handler.Focus).deactivate(N);
},capture:function(bb,bc){qx.event.Registration.getManager(bb).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(bb,bc);
},releaseCapture:function(J){qx.event.Registration.getManager(J).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(J);
},clone:function(w,x){var A;

if(x||(qx.core.Variant.isSet(s,u)&&!qx.xml.Document.isXmlDocument(w))){var E=qx.event.Registration.getManager(w);
var y=qx.dom.Hierarchy.getDescendants(w);
y.push(w);
}if(qx.core.Variant.isSet(s,u)){for(var i=0,l=y.length;i<l;i++){E.toggleAttachedEvents(y[i],false);
}}var A=w.cloneNode(true);
if(qx.core.Variant.isSet(s,u)){for(var i=0,l=y.length;i<l;i++){E.toggleAttachedEvents(y[i],true);
}}if(x===true){var H=qx.dom.Hierarchy.getDescendants(A);
H.push(A);
var z,C,G,B;

for(var i=0,F=y.length;i<F;i++){G=y[i];
z=E.serializeListeners(G);

if(z.length>0){C=H[i];

for(var j=0,D=z.length;j<D;j++){B=z[j];
E.addListener(C,B.type,B.handler,B.self,B.capture);
}}}}return A;
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
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var bf="qx.client",be="mousedown",bd="mouseup",bc="blur",bb="focus",ba="on",Y="DOMFocusOut",X="selectstart",W="DOMFocusIn",V="focusin",bA="focusout",bz="draggesture",by="onmousedown",bx="qx.event.handler.Focus",bw="_applyFocus",bv="deactivate",bu="textarea",bt="onfocusout",bs="_applyActive",br='character',bm="input",bn="onmouseup",bk="onfocusin",bl="qxSelectable",bi="tabIndex",bj="off",bg="activate",bh="mshtml",bo="qxKeepFocus",bp="onselectstart",bq="qxKeepActive";
qx.Class.define(bx,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(y){qx.core.Object.call(this);
this._manager=y;
this._window=y.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bs,nullable:true},focus:{apply:bw,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__jo:null,__jp:null,__jq:null,__jr:null,__js:null,__jt:null,__ju:null,__jv:null,__jw:null,__jx:null,canHandleEvent:function(A,B){},registerEvent:function(bF,bG,bH){},unregisterEvent:function(o,p,q){},focus:function(K){if(qx.core.Variant.isSet(bf,bh)){window.setTimeout(function(){try{K.focus();
var bK=qx.bom.Selection.get(K);

if(bK.length==0){var bL=K.createTextRange();
bL.moveStart(br,K.value.length);
bL.collapse();
bL.select();
}}catch(b){}},0);
}else{try{K.focus();
}catch(m){}}this.setFocus(K);
this.setActive(K);
},activate:function(G){this.setActive(G);
},blur:function(bO){try{bO.blur();
}catch(bQ){}
if(this.getActive()===bO){this.resetActive();
}
if(this.getFocus()===bO){this.resetFocus();
}},deactivate:function(bP){if(this.getActive()===bP){this.resetActive();
}},tryActivate:function(bD){var bE=this.__jM(bD);

if(bE){this.setActive(bE);
}},__jy:function(P,Q,R,S){var U=qx.event.Registration;
var T=U.createEvent(R,qx.event.type.Focus,[P,Q,S]);
U.dispatchEvent(P,T);
},_windowFocused:true,__jz:function(){if(this._windowFocused){this._windowFocused=false;
this.__jy(this._window,null,bc,false);
}},__jA:function(){if(!this._windowFocused){this._windowFocused=true;
this.__jy(this._window,null,bb,false);
}},_initObserver:qx.core.Variant.select(bf,{"gecko":function(){this.__jo=qx.lang.Function.listener(this.__jG,this);
this.__jp=qx.lang.Function.listener(this.__jH,this);
this.__jq=qx.lang.Function.listener(this.__jF,this);
this.__jr=qx.lang.Function.listener(this.__jE,this);
this.__js=qx.lang.Function.listener(this.__jB,this);
this._document.addEventListener(be,this.__jo,true);
this._document.addEventListener(bd,this.__jp,true);
this._window.addEventListener(bb,this.__jq,true);
this._window.addEventListener(bc,this.__jr,true);
this._window.addEventListener(bz,this.__js,true);
},"mshtml":function(){this.__jo=qx.lang.Function.listener(this.__jG,this);
this.__jp=qx.lang.Function.listener(this.__jH,this);
this.__ju=qx.lang.Function.listener(this.__jC,this);
this.__jv=qx.lang.Function.listener(this.__jD,this);
this.__jt=qx.lang.Function.listener(this.__jJ,this);
this._document.attachEvent(by,this.__jo);
this._document.attachEvent(bn,this.__jp);
this._document.attachEvent(bk,this.__ju);
this._document.attachEvent(bt,this.__jv);
this._document.attachEvent(bp,this.__jt);
},"webkit":function(){this.__jo=qx.lang.Function.listener(this.__jG,this);
this.__jp=qx.lang.Function.listener(this.__jH,this);
this.__jv=qx.lang.Function.listener(this.__jD,this);
this.__jq=qx.lang.Function.listener(this.__jF,this);
this.__jr=qx.lang.Function.listener(this.__jE,this);
this.__jt=qx.lang.Function.listener(this.__jJ,this);
this._document.addEventListener(be,this.__jo,true);
this._document.addEventListener(bd,this.__jp,true);
this._document.addEventListener(X,this.__jt,false);
this._window.addEventListener(Y,this.__jv,true);
this._window.addEventListener(bb,this.__jq,true);
this._window.addEventListener(bc,this.__jr,true);
},"opera":function(){this.__jo=qx.lang.Function.listener(this.__jG,this);
this.__jp=qx.lang.Function.listener(this.__jH,this);
this.__ju=qx.lang.Function.listener(this.__jC,this);
this.__jv=qx.lang.Function.listener(this.__jD,this);
this._document.addEventListener(be,this.__jo,true);
this._document.addEventListener(bd,this.__jp,true);
this._window.addEventListener(W,this.__ju,true);
this._window.addEventListener(Y,this.__jv,true);
}}),_stopObserver:qx.core.Variant.select(bf,{"gecko":function(){this._document.removeEventListener(be,this.__jo,true);
this._document.removeEventListener(bd,this.__jp,true);
this._window.removeEventListener(bb,this.__jq,true);
this._window.removeEventListener(bc,this.__jr,true);
this._window.removeEventListener(bz,this.__js,true);
},"mshtml":function(){var Event=qx.bom.Event;
Event.removeNativeListener(this._document,be,this.__jo);
Event.removeNativeListener(this._document,bd,this.__jp);
Event.removeNativeListener(this._document,V,this.__ju);
Event.removeNativeListener(this._document,bA,this.__jv);
Event.removeNativeListener(this._document,X,this.__jt);
},"webkit":function(){this._document.removeEventListener(be,this.__jo,true);
this._document.removeEventListener(bd,this.__jp,true);
this._document.removeEventListener(X,this.__jt,false);
this._window.removeEventListener(Y,this.__jv,true);
this._window.removeEventListener(bb,this.__jq,true);
this._window.removeEventListener(bc,this.__jr,true);
},"opera":function(){this._document.removeEventListener(be,this.__jo,true);
this._document.removeEventListener(bd,this.__jp,true);
this._window.removeEventListener(W,this.__ju,true);
this._window.removeEventListener(Y,this.__jv,true);
}}),__jB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){if(!this.__jN(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__jC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){this.__jA();
var bC=e.srcElement;
var bB=this.__jL(bC);

if(bB){this.setFocus(bB);
}this.tryActivate(bC);
},"opera":function(e){var bM=e.target;

if(bM==this._document||bM==this._window){this.__jA();

if(this.__jw){this.setFocus(this.__jw);
delete this.__jw;
}
if(this.__jx){this.setActive(this.__jx);
delete this.__jx;
}}else{this.setFocus(bM);
this.tryActivate(bM);
if(!this.__jN(bM)){bM.selectionStart=0;
bM.selectionEnd=0;
}}},"default":null})),__jD:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){if(!e.toElement){this.__jz();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var a=e.target;

if(a===this.getFocus()){this.resetFocus();
}
if(a===this.getActive()){this.resetActive();
}},"opera":function(e){var N=e.target;

if(N==this._document){this.__jz();
this.__jw=this.getFocus();
this.__jx=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(N===this.getFocus()){this.resetFocus();
}
if(N===this.getActive()){this.resetActive();
}}},"default":null})),__jE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__jz();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__jz();
this.__jw=this.getFocus();
this.__jx=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__jF:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){var bN=e.target;

if(bN===this._window||bN===this._document){this.__jA();
bN=this._body;
}this.setFocus(bN);
this.tryActivate(bN);
},"webkit":function(e){var O=e.target;

if(O===this._window||O===this._document){this.__jA();

if(this.__jw){this.setFocus(this.__jw);
delete this.__jw;
}
if(this.__jx){this.setActive(this.__jx);
delete this.__jx;
}}else{this.setFocus(O);
this.tryActivate(O);
}},"default":null})),__jG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){var F=this.__jL(e.target);

if(!F){qx.bom.Event.preventDefault(e);
}else if(F===this._body){this.setFocus(F);
}},"mshtml":function(e){var bJ=e.srcElement;
var bI=this.__jL(bJ);

if(bI){if(!this.__jN(bJ)){bJ.unselectable=ba;
try{document.selection.empty();
}catch(e){}try{bI.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__jN(bJ)){bJ.unselectable=ba;
}}},"webkit":function(e){var h=e.target;
var g=this.__jL(h);

if(g){this.setFocus(g);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var E=e.target;
var C=this.__jL(E);

if(!this.__jN(E)){qx.bom.Event.preventDefault(e);
if(C){var D=this.getFocus();

if(D&&D.selectionEnd){D.selectionStart=0;
D.selectionEnd=0;
D.blur();
}if(C){this.setFocus(C);
}}}else if(C){this.setFocus(C);
}},"default":null})),__jH:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){var J=e.srcElement;

if(J.unselectable){J.unselectable=bj;
}this.tryActivate(this.__jI(J));
},"gecko":function(e){var n=e.target;

while(n&&n.offsetWidth===undefined){n=n.parentNode;
}
if(n){this.tryActivate(n);
}},"webkit|opera":function(e){this.tryActivate(this.__jI(e.target));
},"default":null})),__jI:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml|webkit":function(t){var u=this.getFocus();

if(u&&t!=u&&(u.nodeName.toLowerCase()===bm||u.nodeName.toLowerCase()===bu)){t=u;
}return t;
},"default":function(i){return i;
}})),__jJ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml|webkit":function(e){var x=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__jN(x)){qx.bom.Event.preventDefault(e);
}},"default":null})),__jK:function(j){var k=qx.bom.element.Attribute.get(j,bi);

if(k>=1){return true;
}var l=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(k>=0&&l[j.tagName]){return true;
}return false;
},__jL:function(z){while(z&&z.nodeType===1){if(z.getAttribute(bo)==ba){return null;
}
if(this.__jK(z)){return z;
}z=z.parentNode;
}return this._body;
},__jM:function(H){var I=H;

while(H&&H.nodeType===1){if(H.getAttribute(bq)==ba){return null;
}H=H.parentNode;
}return I;
},__jN:function(L){while(L&&L.nodeType===1){var M=L.getAttribute(bl);

if(M!=null){return M===ba;
}L=L.parentNode;
}return true;
},_applyActive:function(v,w){if(w){this.__jy(w,v,bv,true);
}
if(v){this.__jy(v,w,bg,true);
}},_applyFocus:function(r,s){if(s){this.__jy(s,r,bA,true);
}
if(r){this.__jy(r,s,V,true);
}if(s){this.__jy(s,r,bc,false);
}
if(r){this.__jy(r,s,bb,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__jO=null;
},defer:function(c){qx.event.Registration.addHandler(c);
var d=c.FOCUSABLE_ELEMENTS;

for(var f in d){d[f.toUpperCase()]=1;
}}});
})();
(function(){var q="qx.client",p="character",o="EndToEnd",n="input",m="textarea",l="StartToStart",k='character',j="qx.bom.Selection",i="button",h="#text",g="body";
qx.Class.define(j,{statics:{getSelectionObject:qx.core.Variant.select(q,{"mshtml":function(R){return R.selection;
},"default":function(br){return qx.dom.Node.getWindow(br).getSelection();
}}),get:qx.core.Variant.select(q,{"mshtml":function(bg){var bh=qx.bom.Range.get(qx.dom.Node.getDocument(bg));
return bh.text;
},"default":function(H){if(this.__kB(H)){return H.value.substring(H.selectionStart,H.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(H)).toString();
}}}),getLength:qx.core.Variant.select(q,{"mshtml":function(bw){var by=this.get(bw);
var bx=qx.util.StringSplit.split(by,/\r\n/);
return by.length-(bx.length-1);
},"opera":function(a){var f,d,b;

if(this.__kB(a)){var e=a.selectionStart;
var c=a.selectionEnd;
f=a.value.substring(e,c);
d=c-e;
}else{f=qx.bom.Selection.get(a);
d=f.length;
}b=qx.util.StringSplit.split(f,/\r\n/);
return d-(b.length-1);
},"default":function(bi){if(this.__kB(bi)){return bi.selectionEnd-bi.selectionStart;
}else{return this.get(bi).length;
}}}),getStart:qx.core.Variant.select(q,{"mshtml":function(V){if(this.__kB(V)){var bb=qx.bom.Range.get();
if(!V.contains(bb.parentElement())){return -1;
}var bc=qx.bom.Range.get(V);
var ba=V.value.length;
bc.moveToBookmark(bb.getBookmark());
bc.moveEnd(k,ba);
return ba-bc.text.length;
}else{var bc=qx.bom.Range.get(V);
var X=bc.parentElement();
var bd=qx.bom.Range.get();
bd.moveToElementText(X);
var W=qx.bom.Range.get(qx.dom.Node.getBodyElement(V));
W.setEndPoint(l,bc);
W.setEndPoint(o,bd);
if(bd.compareEndPoints(l,W)==0){return 0;
}var Y;
var be=0;

while(true){Y=W.moveStart(p,-1);
if(bd.compareEndPoints(l,W)==0){break;
}if(Y==0){break;
}else{be++;
}}return ++be;
}},"gecko|webkit":function(bt){if(this.__kB(bt)){return bt.selectionStart;
}else{var bv=qx.dom.Node.getDocument(bt);
var bu=this.getSelectionObject(bv);
if(bu.anchorOffset<bu.focusOffset){return bu.anchorOffset;
}else{return bu.focusOffset;
}}},"default":function(bq){if(this.__kB(bq)){return bq.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bq)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(q,{"mshtml":function(r){if(this.__kB(r)){var w=qx.bom.Range.get();
if(!r.contains(w.parentElement())){return -1;
}var x=qx.bom.Range.get(r);
var v=r.value.length;
x.moveToBookmark(w.getBookmark());
x.moveStart(k,-v);
return x.text.length;
}else{var x=qx.bom.Range.get(r);
var t=x.parentElement();
var y=qx.bom.Range.get();
y.moveToElementText(t);
var v=y.text.length;
var s=qx.bom.Range.get(qx.dom.Node.getBodyElement(r));
s.setEndPoint(o,x);
s.setEndPoint(l,y);
if(y.compareEndPoints(o,s)==0){return v-1;
}var u;
var z=0;

while(true){u=s.moveEnd(p,1);
if(y.compareEndPoints(o,s)==0){break;
}if(u==0){break;
}else{z++;
}}return v-(++z);
}},"gecko|webkit":function(S){if(this.__kB(S)){return S.selectionEnd;
}else{var U=qx.dom.Node.getDocument(S);
var T=this.getSelectionObject(U);
if(T.focusOffset>T.anchorOffset){return T.focusOffset;
}else{return T.anchorOffset;
}}},"default":function(bf){if(this.__kB(bf)){return bf.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bf)).focusOffset;
}}}),__kB:function(bs){return qx.dom.Node.isElement(bs)&&(bs.nodeName.toLowerCase()==n||bs.nodeName.toLowerCase()==m);
},set:qx.core.Variant.select(q,{"mshtml":function(M,N,O){var P;
if(qx.dom.Node.isDocument(M)){M=M.body;
}
if(qx.dom.Node.isElement(M)||qx.dom.Node.isText(M)){switch(M.nodeName.toLowerCase()){case n:case m:case i:if(O===undefined){O=M.value.length;
}
if(N>=0&&N<=M.value.length&&O>=0&&O<=M.value.length){P=qx.bom.Range.get(M);
P.collapse(true);
P.moveStart(p,N);
P.moveEnd(p,O-N);
P.select();
return true;
}break;
case h:if(O===undefined){O=M.nodeValue.length;
}
if(N>=0&&N<=M.nodeValue.length&&O>=0&&O<=M.nodeValue.length){P=qx.bom.Range.get(qx.dom.Node.getBodyElement(M));
P.moveToElementText(M.parentNode);
P.collapse(true);
P.moveStart(p,N);
P.moveEnd(p,O-N);
P.select();
return true;
}break;
default:if(O===undefined){O=M.childNodes.length-1;
}if(M.childNodes[N]&&M.childNodes[O]){P=qx.bom.Range.get(qx.dom.Node.getBodyElement(M));
P.moveToElementText(M.childNodes[N]);
P.collapse(true);
var Q=qx.bom.Range.get(qx.dom.Node.getBodyElement(M));
Q.moveToElementText(M.childNodes[O]);
P.setEndPoint(o,Q);
P.select();
return true;
}}}return false;
},"default":function(A,B,C){var G=A.nodeName.toLowerCase();

if(qx.dom.Node.isElement(A)&&(G==n||G==m)){if(C===undefined){C=A.value.length;
}if(B>=0&&B<=A.value.length&&C>=0&&C<=A.value.length){A.focus();
A.select();
A.setSelectionRange(B,C);
return true;
}}else{var E=false;
var F=qx.dom.Node.getWindow(A).getSelection();
var D=qx.bom.Range.get(A);
if(qx.dom.Node.isText(A)){if(C===undefined){C=A.length;
}
if(B>=0&&B<A.length&&C>=0&&C<=A.length){E=true;
}}else if(qx.dom.Node.isElement(A)){if(C===undefined){C=A.childNodes.length-1;
}
if(B>=0&&A.childNodes[B]&&C>=0&&A.childNodes[C]){E=true;
}}else if(qx.dom.Node.isDocument(A)){A=A.body;

if(C===undefined){C=A.childNodes.length-1;
}
if(B>=0&&A.childNodes[B]&&C>=0&&A.childNodes[C]){E=true;
}}
if(E){if(!F.isCollapsed){F.collapseToStart();
}D.setStart(A,B);
if(qx.dom.Node.isText(A)){D.setEnd(A,C);
}else{D.setEndAfter(A.childNodes[C]);
}if(F.rangeCount>0){F.removeAllRanges();
}F.addRange(D);
return true;
}}return false;
}}),setAll:function(bp){return qx.bom.Selection.set(bp,0);
},clear:qx.core.Variant.select(q,{"mshtml":function(I){var J=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(I));
var K=qx.bom.Range.get(I);
var parent=K.parentElement();
var L=qx.bom.Range.get(qx.dom.Node.getDocument(I));
if(parent==L.parentElement()&&parent==I){J.empty();
}},"default":function(bj){var bl=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bj));
var bn=bj.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bj)&&(bn==n||bn==m)){bj.setSelectionRange(0,0);
qx.bom.Element.blur(bj);
}else if(qx.dom.Node.isDocument(bj)||bn==g){bl.collapse(bj.body?bj.body:bj,0);
}else{var bm=qx.bom.Range.get(bj);

if(!bm.collapsed){var bo;
var bk=bm.commonAncestorContainer;
if(qx.dom.Node.isElement(bj)&&qx.dom.Node.isText(bk)){bo=bk.parentNode;
}else{bo=bk;
}
if(bo==bj){bl.collapse(bj,0);
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
qx.Class.define(e,{statics:{__gM:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(C){var D=[];
var F=this.__gM.runtime;

for(var E in C){if(!F[E]){D.push(E,t,C[E],y);
}}return D.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(K,name){var M=this.__gM;
var L;
name=M.names[name]||name;
if(M.original[name]){L=K.getAttribute(name,2);
}else if(M.property[name]){L=K[name];

if(typeof M.propertyDefault[name]!==i&&L==M.propertyDefault[name]){if(typeof M.bools[name]===i){return null;
}else{return L;
}}}else{L=K.getAttribute(name);
}if(M.bools[name]){return !!L;
}return L;
},"default":function(z,name){var B=this.__gM;
var A;
name=B.names[name]||name;
if(B.property[name]){A=z[name];

if(typeof B.propertyDefault[name]!==i&&A==B.propertyDefault[name]){if(typeof B.bools[name]===i){return null;
}else{return A;
}}}else{A=z.getAttribute(name);
}if(B.bools[name]){return !!A;
}return A;
}}),set:function(G,name,H){var I=this.__gM;
name=I.names[name]||name;
if(I.bools[name]){H=!!H;
}if(I.property[name]&&(!(G[name]===undefined)||I.qxProperties[name])){if(H==null){if(I.removeableProperties[name]){G.removeAttribute(name);
return;
}else if(typeof I.propertyDefault[name]!==i){H=I.propertyDefault[name];
}}G[name]=H;
}else{if(H===true){G.setAttribute(name,name);
}else if(H===false||H===null){G.removeAttribute(name);
}else{G.setAttribute(name,H);
}}},reset:function(J,name){this.set(J,name,null);
}}});
})();
(function(){var h="qx.client",g="left",f="right",e="middle",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(i,j,k,l,m){qx.event.type.Dom.prototype.init.call(this,i,j,k,l,m);

if(!k){this._relatedTarget=qx.bom.Event.getRelatedTarget(i);
}return this;
},_cloneNativeEvent:function(o,p){var p=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,o,p);
p.button=o.button;
p.clientX=o.clientX;
p.clientY=o.clientY;
p.pageX=o.pageX;
p.pageY=o.pageY;
p.screenX=o.screenX;
p.screenY=o.screenY;
p.wheelDelta=o.wheelDelta;
p.detail=o.detail;
p.srcElement=o.srcElement;
return p;
},__kb:qx.core.Variant.select(h,{"mshtml":{1:g,2:f,4:e},"default":{0:g,2:f,1:e}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case b:return f;
case d:if(this.__kc){return this.__kc();
}default:return this.__kb[this._native.button]||c;
}},__kc:qx.core.Variant.select(h,{"mshtml":function(){return g;
},"default":null}),isLeftPressed:function(){return this.getButton()===g;
},isMiddlePressed:function(){return this.getButton()===e;
},isRightPressed:function(){return this.getButton()===f;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(h,{"mshtml":function(){var n=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(n);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(h,{"mshtml":function(){var q=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(q);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){if(qx.bom.client.Platform.MAC){if(qx.bom.client.Browser.VERSION>=7){return -(this._native.wheelDelta/30);
}return -(this._native.wheelDelta/1200);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.bom.client.Platform.WIN){var d=120;
if(qx.bom.client.Engine.VERSION==533.16){d=1200;
}}else{d=40;
if(qx.bom.client.Engine.VERSION==533.16||qx.bom.client.Engine.VERSION==533.17||qx.bom.client.Engine.VERSION==533.18){d=1200;
}}return -(this._native.wheelDelta/d);
}}})}});
})();
(function(){var d="qx.client",c="qx.bom.Viewport";
qx.Class.define(c,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(s){if(qx.bom.client.Engine.VERSION<9.5){return (s||window).document.body.clientWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"webkit":function(q){if(qx.bom.client.Engine.VERSION<523.15){return (q||window).innerWidth;
}else{var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientWidth:r.body.clientWidth;
}},"default":function(a){var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientWidth:b.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(l){if(qx.bom.client.Engine.VERSION<9.5){return (l||window).document.body.clientHeight;
}else{var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientHeight:m.body.clientHeight;
}},"webkit":function(j){if(qx.bom.client.Engine.VERSION<523.15){return (j||window).innerHeight;
}else{var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientHeight:k.body.clientHeight;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientHeight:i.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(f){var g=(f||window).document;
return g.documentElement.scrollLeft||g.body.scrollLeft;
},"default":function(e){return (e||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(o){var p=(o||window).document;
return p.documentElement.scrollTop||p.body.scrollTop;
},"default":function(n){return (n||window).pageYOffset;
}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(m){if(qx.bom.client.Engine.VERSION>=8){return (m||window).document.documentMode===5;
}else{return (m||window).document.compatMode!==f;
}},"webkit":function(j){if(document.compatMode===undefined){var k=(j||window).document.createElement(a);
k.style.cssText=e;
return k.style.width===c?true:false;
}else{return (j||window).document.compatMode!==f;
}},"default":function(n){return (n||window).document.compatMode!==f;
}}),isStandardMode:function(l){return !this.isQuirksMode(l);
},getWidth:function(o){var p=(o||window).document;
var q=qx.bom.Viewport.getWidth(o);
var scroll=this.isStandardMode(o)?p.documentElement.scrollWidth:p.body.scrollWidth;
return Math.max(scroll,q);
},getHeight:function(g){var h=(g||window).document;
var i=qx.bom.Viewport.getHeight(g);
var scroll=this.isStandardMode(g)?h.documentElement.scrollHeight:h.body.scrollHeight;
return Math.max(scroll,i);
}}});
})();
(function(){var k="qx.client",j="ie",i="msie",h="android",g="operamini",f="mobile chrome",e=")(/| )([0-9]+\.[0-9])",d="iemobile",c="opera mobi",b="Mobile Safari",y="operamobile",x="mobile safari",w="IEMobile|Maxthon|MSIE",v="qx.bom.client.Browser",u="opera mini",t="(",s="opera",r="mshtml",q="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",o="5.0",l="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",m="Mobile/";
qx.Bootstrap.define(v,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__kY:function(C){var D=navigator.userAgent;
var F=new RegExp(t+C+e);
var G=D.match(F);

if(!G){return;
}var name=G[1].toLowerCase();
var E=G[3];
if(D.match(/Version(\/| )([0-9]+\.[0-9])/)){E=RegExp.$2;
}
if(qx.core.Variant.isSet(k,n)){if(name===h){name=f;
}else if(D.indexOf(b)!==-1||D.indexOf(m)!==-1){name=x;
}}else if(qx.core.Variant.isSet(k,r)){if(name===i){name=j;
if(qx.bom.client.System.WINCE&&name===j){name=d;
E=o;
}}}else if(qx.core.Variant.isSet(k,s)){if(name===c){name=y;
}else if(name===u){name=g;
}}this.NAME=name;
this.FULLVERSION=E;
this.VERSION=parseFloat(E,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(k,{"webkit":function(B){B.__kY(p);
},"gecko":function(z){z.__kY(l);
},"mshtml":function(a){a.__kY(w);
},"opera":function(A){A.__kY(q);
}})});
})();
(function(){var L="qx.client",K="qx.dom.Hierarchy",J="previousSibling",I="*",H="nextSibling",G="parentNode";
qx.Class.define(K,{statics:{getNodeIndex:function(A){var B=0;

while(A&&(A=A.previousSibling)){B++;
}return B;
},getElementIndex:function(D){var E=0;
var F=qx.dom.Node.ELEMENT;

while(D&&(D=D.previousSibling)){if(D.nodeType==F){E++;
}}return E;
},getNextElementSibling:function(x){while(x&&(x=x.nextSibling)&&!qx.dom.Node.isElement(x)){continue;
}return x||null;
},getPreviousElementSibling:function(v){while(v&&(v=v.previousSibling)&&!qx.dom.Node.isElement(v)){continue;
}return v||null;
},contains:qx.core.Variant.select(L,{"webkit|mshtml|opera":function(k,l){if(qx.dom.Node.isDocument(k)){var m=qx.dom.Node.getDocument(l);
return k&&m==k;
}else if(qx.dom.Node.isDocument(l)){return false;
}else{return k.contains(l);
}},"gecko":function(q,r){return !!(q.compareDocumentPosition(r)&16);
},"default":function(U,V){while(V){if(U==V){return true;
}V=V.parentNode;
}return false;
}}),isRendered:function(o){if(!o.parentNode||!o.offsetParent){return false;
}var p=o.ownerDocument||o.document;
if(p.body.contains){return p.body.contains(o);
}if(p.compareDocumentPosition){return !!(p.compareDocumentPosition(o)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(i,j){return this.contains(j,i);
},getCommonParent:qx.core.Variant.select(L,{"mshtml|opera":function(Q,R){if(Q===R){return Q;
}
while(Q&&qx.dom.Node.isElement(Q)){if(Q.contains(R)){return Q;
}Q=Q.parentNode;
}return null;
},"default":function(a,b){if(a===b){return a;
}var c={};
var f=qx.core.ObjectRegistry;
var e,d;

while(a||b){if(a){e=f.toHashCode(a);

if(c[e]){return c[e];
}c[e]=a;
a=a.parentNode;
}
if(b){d=f.toHashCode(b);

if(c[d]){return c[d];
}c[d]=b;
b=b.parentNode;
}}return null;
}}),getAncestors:function(M){return this._recursivelyCollect(M,G);
},getChildElements:function(g){g=g.firstChild;

if(!g){return [];
}var h=this.getNextSiblings(g);

if(g.nodeType===1){h.unshift(g);
}return h;
},getDescendants:function(z){return qx.lang.Array.fromCollection(z.getElementsByTagName(I));
},getFirstDescendant:function(n){n=n.firstChild;

while(n&&n.nodeType!=1){n=n.nextSibling;
}return n;
},getLastDescendant:function(T){T=T.lastChild;

while(T&&T.nodeType!=1){T=T.previousSibling;
}return T;
},getPreviousSiblings:function(S){return this._recursivelyCollect(S,J);
},getNextSiblings:function(w){return this._recursivelyCollect(w,H);
},_recursivelyCollect:function(s,t){var u=[];

while(s=s[t]){if(s.nodeType==1){u.push(s);
}}return u;
},getSiblings:function(y){return this.getPreviousSiblings(y).reverse().concat(this.getNextSiblings(y));
},isEmpty:function(C){C=C.firstChild;

while(C){if(C.nodeType===qx.dom.Node.ELEMENT||C.nodeType===qx.dom.Node.TEXT){return false;
}C=C.nextSibling;
}return true;
},cleanWhitespace:function(N){var O=N.firstChild;

while(O){var P=O.nextSibling;

if(O.nodeType==3&&!/\S/.test(O.nodeValue)){N.removeChild(O);
}O=P;
}}}});
})();
(function(){var b="qx.client",a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(j,k){qx.event.type.Event.prototype.init.call(this,true,j);

if(k){this._native=k.getNativeEvent()||null;
this._originalTarget=k.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(c){var d=qx.event.type.Event.prototype.clone.call(this,c);
d._native=this._native;
return d;
},getDocumentLeft:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(l);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(o);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(g){this.getManager().addType(g);
},addAction:function(m){this.getManager().addAction(m);
},supportsType:function(n){return this.getManager().supportsType(n);
},supportsAction:function(f){return this.getManager().supportsAction(f);
},addData:function(h,i){this.getManager().addData(h,i);
},getData:function(e){return this.getManager().getData(e);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var j="losecapture",i="qx.client",h="blur",g="focus",f="click",e="qx.event.dispatch.MouseCapture",d="capture",c="scroll";
qx.Class.define(e,{extend:qx.event.dispatch.AbstractBubbling,construct:function(r,s){qx.event.dispatch.AbstractBubbling.call(this,r);
this.__gg=r.getWindow();
this.__gh=s;
r.addListener(this.__gg,h,this.releaseCapture,this);
r.addListener(this.__gg,g,this.releaseCapture,this);
r.addListener(this.__gg,c,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__gh:null,__gi:null,__gj:true,__gg:null,_getParent:function(p){return p.parentNode;
},canDispatchEvent:function(n,event,o){return (this.__gi&&this.__gk[o]);
},dispatchEvent:function(u,event,v){if(v==f){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__gj||!qx.dom.Hierarchy.contains(this.__gi,u)){u=this.__gi;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,u,event,v);
},__gk:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(a,b){var b=b!==false;

if(this.__gi===a&&this.__gj==b){return;
}
if(this.__gi){this.releaseCapture();
}this.nativeSetCapture(a,b);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(a,j,function(){qx.bom.Event.removeNativeListener(a,j,arguments.callee);
self.releaseCapture();
});
}this.__gj=b;
this.__gi=a;
this.__gh.fireEvent(a,d,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__gi;
},releaseCapture:function(){var m=this.__gi;

if(!m){return;
}this.__gi=null;
this.__gh.fireEvent(m,j,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(m);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(i,{"mshtml":function(k,l){qx.event.Timer.once(function(){k.setCapture(l!==false);
},this,0);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(i,{"mshtml":function(t){qx.event.Timer.once(function(){t.releaseCapture();
},this,0);
},"default":qx.lang.Function.empty})},destruct:function(){this.__gi=this.__gg=this.__gh=null;
},defer:function(q){qx.event.Registration.addDispatcher(q);
}});
})();
(function(){var s="qx.client",r="",q="mshtml",p="'",o="SelectionLanguage",n="qx.xml.Document",m=" />",k="MSXML2.DOMDocument.3.0",j='<\?xml version="1.0" encoding="utf-8"?>\n<',h="MSXML2.XMLHTTP.3.0",d="MSXML2.XMLHTTP.6.0",g=" xmlns='",f="text/xml",c="XPath",b="MSXML2.DOMDocument.6.0",e="HTML";
qx.Class.define(n,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(a){if(a.nodeType===9){return a.documentElement.nodeName!==e;
}else if(a.ownerDocument){return this.isXmlDocument(a.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(s,{"mshtml":function(u,v){var w=new ActiveXObject(this.DOMDOC);
w.setProperty(o,c);

if(v){var x=j;
x+=v;

if(u){x+=g+u+p;
}x+=m;
w.loadXML(x);
}return w;
},"default":function(C,D){return document.implementation.createDocument(C||r,D||r,null);
}}),fromString:qx.core.Variant.select(s,{"mshtml":function(A){var B=qx.xml.Document.create();
B.loadXML(A);
return B;
},"default":function(y){var z=new DOMParser();
return z.parseFromString(y,f);
}})},defer:function(E){if(qx.core.Variant.isSet(s,q)){var F=[b,k];
var G=[d,h];

for(var i=0,l=F.length;i<l;i++){try{new ActiveXObject(F[i]);
new ActiveXObject(G[i]);
}catch(t){continue;
}E.DOMDOC=F[i];
E.XMLHTTP=G[i];
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
}},intoViewY:function(K,stop,L){var parent=K.parentNode;
var R=qx.dom.Node.getDocument(K);
var M=R.body;
var ba,N,V;
var bc,Y,T;
var P,Q,O;
var be,bf,bb,U;
var X,S,bg;
var bd=L===d;
var W=L===e;
stop=stop?stop.parentNode:R;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){N=parent.scrollTop;
V=N+qx.bom.Viewport.getHeight();
bc=qx.bom.Viewport.getHeight();
Y=parent.clientHeight;
T=parent.scrollHeight;
P=0;
Q=0;
O=0;
}else{ba=qx.bom.element.Location.get(parent);
N=ba.top;
V=ba.bottom;
bc=parent.offsetHeight;
Y=parent.clientHeight;
T=parent.scrollHeight;
P=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
Q=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
O=bc-Y-P-Q;
}be=qx.bom.element.Location.get(K);
bf=be.top;
bb=be.bottom;
U=K.offsetHeight;
X=bf-N-P;
S=bb-V+Q;
bg=0;
if(bd){bg=X;
}else if(W){bg=S+O;
}else if(X<0||U>Y){bg=X;
}else if(S>0){bg=S+O;
}parent.scrollTop+=bg;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
}}});
})();
(function(){var bl="",bk="qx.client",bj="hidden",bi="-moz-scrollbars-none",bh="overflow",bg=";",bf="overflowY",be=":",bd="overflowX",bc="overflow:",bx="none",bw="scroll",bv="borderLeftStyle",bu="borderRightStyle",bt="div",bs="borderRightWidth",br="overflow-y",bq="borderLeftWidth",bp="-moz-scrollbars-vertical",bo="100px",bm="qx.bom.element.Overflow",bn="overflow-x";
qx.Class.define(bm,{statics:{__ki:null,getScrollbarWidth:function(){if(this.__ki!==null){return this.__ki;
}var d=qx.bom.element.Style;
var f=function(ca,cb){return parseInt(d.get(ca,cb))||0;
};
var g=function(ba){return (d.get(ba,bu)==bx?0:f(ba,bs));
};
var e=function(L){return (d.get(L,bv)==bx?0:f(L,bq));
};
var i=qx.core.Variant.select(bk,{"mshtml":function(v){if(d.get(v,bf)==bj||v.clientWidth==0){return g(v);
}return Math.max(0,v.offsetWidth-v.clientLeft-v.clientWidth);
},"default":function(bL){if(bL.clientWidth==0){var bM=d.get(bL,bh);
var bN=(bM==bw||bM==bp?16:0);
return Math.max(0,g(bL)+bN);
}return Math.max(0,(bL.offsetWidth-bL.clientWidth-e(bL)));
}});
var h=function(Q){return i(Q)-g(Q);
};
var t=document.createElement(bt);
var s=t.style;
s.height=s.width=bo;
s.overflow=bw;
document.body.appendChild(t);
var c=h(t);
this.__ki=c?c:16;
document.body.removeChild(t);
return this.__ki;
},_compile:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bJ,bK){if(bK==bj){bK=bi;
}return bc+bK+bg;
}:
function(bU,bV){return bU+be+bV+bg;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(T,U){return bc+U+bg;
}:
function(ce,cf){return ce+be+cf+bg;
},"default":function(C,D){return C+be+D+bg;
}}),compileX:function(k){return this._compile(bn,k);
},compileY:function(bY){return this._compile(br,bY);
},getX:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bQ,bR){var bS=qx.bom.element.Style.get(bQ,bh,bR,false);

if(bS===bi){bS=bj;
}return bS;
}:
function(n,o){return qx.bom.element.Style.get(n,bd,o,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(X,Y){return qx.bom.element.Style.get(X,bh,Y,false);
}:
function(V,W){return qx.bom.element.Style.get(V,bd,W,false);
},"default":function(p,q){return qx.bom.element.Style.get(p,bd,q,false);
}}),setX:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(F,G){if(G==bj){G=bi;
}F.style.overflow=G;
}:
function(bF,bG){bF.style.overflowX=bG;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(R,S){R.style.overflow=S;
}:
function(r,u){r.style.overflowX=u;
},"default":function(cc,cd){cc.style.overflowX=cd;
}}),resetX:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(y){y.style.overflow=bl;
}:
function(j){j.style.overflowX=bl;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(M,N){M.style.overflow=bl;
}:
function(a,b){a.style.overflowX=bl;
},"default":function(z){z.style.overflowX=bl;
}}),getY:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bA,bB){var bC=qx.bom.element.Style.get(bA,bh,bB,false);

if(bC===bi){bC=bj;
}return bC;
}:
function(bW,bX){return qx.bom.element.Style.get(bW,bf,bX,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(A,B){return qx.bom.element.Style.get(A,bh,B,false);
}:
function(by,bz){return qx.bom.element.Style.get(by,bf,bz,false);
},"default":function(w,x){return qx.bom.element.Style.get(w,bf,x,false);
}}),setY:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(O,P){if(P===bj){P=bi;
}O.style.overflow=P;
}:
function(J,K){J.style.overflowY=K;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bH,bI){bH.style.overflow=bI;
}:
function(H,I){H.style.overflowY=I;
},"default":function(l,m){l.style.overflowY=m;
}}),resetY:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bb){bb.style.overflow=bl;
}:
function(bT){bT.style.overflowY=bl;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bO,bP){bO.style.overflow=bl;
}:
function(bD,bE){bD.style.overflowY=bl;
},"default":function(E){E.style.overflowY=bl;
}})}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="clip:rect(",d="clip",c="rect(auto,auto,auto,auto)",a="rect(auto, auto, auto, auto)";
qx.Class.define(f,{statics:{compile:function(v){if(!v){return k;
}var A=v.left;
var top=v.top;
var z=v.width;
var y=v.height;
var w,x;

if(A==null){w=(z==null?n:z+m);
A=n;
}else{w=(z==null?n:A+z+m);
A=A+m;
}
if(top==null){x=(y==null?n:y+m);
top=n;
}else{x=(y==null?n:top+y+m);
top=top+m;
}return b+top+l+w+l+x+l+A+i;
},get:function(C,D){var F=qx.bom.element.Style.get(C,d,D,false);
var K,top,I,H;
var E,G;

if(typeof F===e&&F!==n&&F!==h){F=qx.lang.String.trim(F);
if(/\((.*)\)/.test(F)){var J=RegExp.$1.split(l);
top=qx.lang.String.trim(J[0]);
E=qx.lang.String.trim(J[1]);
G=qx.lang.String.trim(J[2]);
K=qx.lang.String.trim(J[3]);
if(K===n){K=null;
}
if(top===n){top=null;
}
if(E===n){E=null;
}
if(G===n){G=null;
}if(top!=null){top=parseInt(top,10);
}
if(E!=null){E=parseInt(E,10);
}
if(G!=null){G=parseInt(G,10);
}
if(K!=null){K=parseInt(K,10);
}if(E!=null&&K!=null){I=E-K;
}else if(E!=null){I=E;
}
if(G!=null&&top!=null){H=G-top;
}else if(G!=null){H=G;
}}else{throw new Error("Could not parse clip string: "+F);
}}return {left:K||null,top:top||null,width:I||null,height:H||null};
},set:function(o,p){if(!p){o.style.clip=c;
return;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?n:t+m);
u=n;
}else{q=(t==null?n:u+t+m);
u=u+m;
}
if(top==null){r=(s==null?n:s+m);
top=n;
}else{r=(s==null?n:top+s+m);
top=top+m;
}o.style.clip=j+top+l+q+l+r+l+u+g;
},reset:function(B){B.style.clip=a;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__eH:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(o){return g+(this.__eH[o]||o)+e;
},get:function(p,q){return qx.bom.element.Style.get(p,c,q,false);
},set:function(m,n){m.style.cursor=this.__eH[n]||n;
},reset:function(a){a.style.cursor=h;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="opacity:",i="opacity",h="filter",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Variant.select(l,{"mshtml":function(G){if(G>=1){G=1;
}
if(G<0.00001){G=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return j+G+k;
}else{return d+(G*100)+f;
}},"gecko":function(o){if(o>=1){o=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return b+o+k;
}else{return j+o+k;
}},"default":function(u){if(u>=1){return m;
}return j+u+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(B,C){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(C>=1){C=m;
}B.style.opacity=C;
}else{var D=qx.bom.element.Style.get(B,h,qx.bom.element.Style.COMPUTED_MODE,false);

if(C>=1){C=1;
}
if(C<0.00001){C=0;
}if(!B.currentStyle||!B.currentStyle.hasLayout){B.style.zoom=1;
}B.style.filter=D.replace(/alpha\([^\)]*\)/gi,m)+c+C*100+e;
}},"gecko":function(z,A){if(A>=1){A=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){z.style.MozOpacity=A;
}else{z.style.opacity=A;
}},"default":function(E,F){if(F>=1){F=m;
}E.style.opacity=F;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(H){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){H.style.opacity=m;
}else{var I=qx.bom.element.Style.get(H,h,qx.bom.element.Style.COMPUTED_MODE,false);
H.style.filter=I.replace(/alpha\([^\)]*\)/gi,m);
}},"gecko":function(t){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){t.style.MozOpacity=m;
}else{t.style.opacity=m;
}},"default":function(v){v.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(p,q){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var r=qx.bom.element.Style.get(p,i,q,false);

if(r!=null){return parseFloat(r);
}return 1.0;
}else{var s=qx.bom.element.Style.get(p,h,q,false);

if(s){var r=s.match(/alpha\(opacity=(.*)\)/);

if(r&&r[1]){return parseFloat(r[1])/100;
}}return 1.0;
}},"gecko":function(J,K){var L=qx.bom.element.Style.get(J,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?g:i,K,false);

if(L==0.999999){L=1.0;
}
if(L!=null){return parseFloat(L);
}return 1.0;
},"default":function(w,x){var y=qx.bom.element.Style.get(w,i,x,false);

if(y!=null){return parseFloat(y);
}return 1.0;
}})},defer:function(n){n.SUPPORT_CSS3_OPACITY=(typeof document.documentElement.style.opacity=="string");
}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__cJ:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__cK:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__cL:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cM:function(D){var E=this.__cL;
return E.tags[D.tagName.toLowerCase()]||E.types[D.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(G){{};
},"default":function(x){var z=this.__cK;
var y=p;

if(z){for(var i=0,l=z.length;i<l;i++){y+=z[i]+m+x+c;
}}return y;
}}),get:qx.core.Variant.select(q,{"mshtml":function(C){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(C))){if(!this.__cM(C)){return d;
}}return k;
},"default":function(u){var w=this.__cJ;
var v;

if(w){for(var i=0,l=w.length;i<l;i++){v=qx.bom.element.Style.get(u,w[i],null,false);

if(v!=null&&v!==p){return v;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(A,B){{};
},"default":function(r,s){var t=this.__cJ;

if(t){for(var i=0,l=t.length;i<l;i++){r.style[t[i]]=s;
}}}}),reset:function(F){this.set(F,p);
}}});
})();
(function(){var m="",k="qx.client",h="userSelect",g="style",f="MozUserModify",e="px",d="float",c="borderImage",b="styleFloat",a="appearance",F="pixelHeight",E='Ms',D=":",C="cssFloat",B="pixelTop",A="pixelLeft",z='O',y="qx.bom.element.Style",x='Khtml',w='string',t="pixelRight",u='Moz',r="pixelWidth",s="pixelBottom",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(y,{statics:{__cu:function(){var X=[a,h,q,c];
var bc={};
var Y=document.documentElement.style;
var bd=[u,o,x,z,E];

for(var i=0,l=X.length;i<l;i++){var be=X[i];
var ba=be;

if(Y[be]){bc[ba]=be;
continue;
}be=qx.lang.String.firstUp(be);

for(var j=0,bf=bd.length;j<bf;j++){var bb=bd[j]+be;

if(typeof Y[bb]==w){bc[ba]=bb;
break;
}}}this.__cv=bc;
this.__cv[n]=qx.core.Variant.select(k,{"gecko":f,"webkit":v,"default":h});
this.__cw={};

for(var ba in bc){this.__cw[ba]=this.__cA(bc[ba]);
}this.__cv[d]=qx.core.Variant.select(k,{"mshtml":b,"default":C});
},__cx:{width:r,height:F,left:A,right:t,top:B,bottom:s},__cy:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(Q){var S=[];
var U=this.__cy;
var T=this.__cw;
var name,R;

for(name in Q){R=Q[name];

if(R==null){continue;
}name=T[name]||name;
if(U[name]){S.push(U[name].compile(R));
}else{S.push(this.__cA(name),D,R,p);
}}return S.join(m);
},__cz:{},__cA:function(bo){var bp=this.__cz;
var bq=bp[bo];

if(!bq){bq=bp[bo]=qx.lang.String.hyphenate(bo);
}return bq;
},setCss:qx.core.Variant.select(k,{"mshtml":function(br,bs){br.style.cssText=bs;
},"default":function(H,I){H.setAttribute(g,I);
}}),getCss:qx.core.Variant.select(k,{"mshtml":function(J){return J.style.cssText.toLowerCase();
},"default":function(K){return K.getAttribute(g);
}}),isPropertySupported:function(G){return (this.__cy[G]||this.__cv[G]||G in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bB,name,bC,bD){{};
name=this.__cv[name]||name;
if(bD!==false&&this.__cy[name]){return this.__cy[name].set(bB,bC);
}else{bB.style[name]=bC!==null?bC:m;
}},setStyles:function(bg,bh,bi){{};
var bl=this.__cv;
var bn=this.__cy;
var bj=bg.style;

for(var bm in bh){var bk=bh[bm];
var name=bl[bm]||bm;

if(bk===undefined){if(bi!==false&&bn[name]){bn[name].reset(bg);
}else{bj[name]=m;
}}else{if(bi!==false&&bn[name]){bn[name].set(bg,bk);
}else{bj[name]=bk!==null?bk:m;
}}}},reset:function(V,name,W){name=this.__cv[name]||name;
if(W!==false&&this.__cy[name]){return this.__cy[name].reset(V);
}else{V.style[name]=m;
}},get:qx.core.Variant.select(k,{"mshtml":function(bu,name,bv,bw){name=this.__cv[name]||name;
if(bw!==false&&this.__cy[name]){return this.__cy[name].get(bu,bv);
}if(!bu.currentStyle){return bu.style[name]||m;
}switch(bv){case this.LOCAL_MODE:return bu.style[name]||m;
case this.CASCADED_MODE:return bu.currentStyle[name]||m;
default:var bA=bu.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bA)){return bA;
}var bz=this.__cx[name];

if(bz){var bx=bu.style[name];
bu.style[name]=bA||0;
var by=bu.style[bz]+e;
bu.style[name]=bx;
return by;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bA)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bA;
}},"default":function(L,name,M,N){name=this.__cv[name]||name;
if(N!==false&&this.__cy[name]){return this.__cy[name].get(L,M);
}switch(M){case this.LOCAL_MODE:return L.style[name]||m;
case this.CASCADED_MODE:if(L.currentStyle){return L.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var O=qx.dom.Node.getDocument(L);
var P=O.defaultView.getComputedStyle(L,null);
return P?P[name]:m;
}}})},defer:function(bt){bt.__cu();
}});
})();
(function(){var C="borderTopWidth",B="borderLeftWidth",A="marginTop",z="marginLeft",y="scroll",x="qx.client",w="border-box",v="borderBottomWidth",u="borderRightWidth",t="auto",R="padding",Q="qx.bom.element.Location",P="paddingLeft",O="static",N="marginBottom",M="visible",L="BODY",K="paddingBottom",J="paddingTop",I="marginRight",G="position",H="margin",E="overflow",F="paddingRight",D="border";
qx.Class.define(Q,{statics:{__ih:function(ba,bb){return qx.bom.element.Style.get(ba,bb,qx.bom.element.Style.COMPUTED_MODE,false);
},__ii:function(c,d){return parseInt(qx.bom.element.Style.get(c,d,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ij:function(S){var V=0,top=0;
if(S.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var U=qx.dom.Node.getWindow(S);
V-=qx.bom.Viewport.getScrollLeft(U);
top-=qx.bom.Viewport.getScrollTop(U);
}else{var T=qx.dom.Node.getDocument(S).body;
S=S.parentNode;
while(S&&S!=T){V+=S.scrollLeft;
top+=S.scrollTop;
S=S.parentNode;
}}return {left:V,top:top};
},__ik:qx.core.Variant.select(x,{"mshtml":function(bw){var by=qx.dom.Node.getDocument(bw);
var bx=by.body;
var bz=0;
var top=0;
bz-=bx.clientLeft+by.documentElement.clientLeft;
top-=bx.clientTop+by.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bz+=this.__ii(bx,B);
top+=this.__ii(bx,C);
}return {left:bz,top:top};
},"webkit":function(p){var r=qx.dom.Node.getDocument(p);
var q=r.body;
var s=q.offsetLeft;
var top=q.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){s+=this.__ii(q,B);
top+=this.__ii(q,C);
}return {left:s,top:top};
},"gecko":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){Y+=this.__ii(X,z);
top+=this.__ii(X,A);
}if(qx.bom.element.BoxSizing.get(X)!==w){Y+=this.__ii(X,B);
top+=this.__ii(X,C);
}return {left:Y,top:top};
},"default":function(bd){var be=qx.dom.Node.getDocument(bd).body;
var bf=be.offsetLeft;
var top=be.offsetTop;
return {left:bf,top:top};
}}),__il:qx.core.Variant.select(x,{"mshtml|webkit":function(bJ){var bL=qx.dom.Node.getDocument(bJ);
if(bJ.getBoundingClientRect){var bM=bJ.getBoundingClientRect();
var bN=bM.left;
var top=bM.top;
}else{var bN=bJ.offsetLeft;
var top=bJ.offsetTop;
bJ=bJ.offsetParent;
var bK=bL.body;
while(bJ&&bJ!=bK){bN+=bJ.offsetLeft;
top+=bJ.offsetTop;
bN+=this.__ii(bJ,B);
top+=this.__ii(bJ,C);
bJ=bJ.offsetParent;
}}return {left:bN,top:top};
},"gecko":function(bl){if(bl.getBoundingClientRect){var bo=bl.getBoundingClientRect();
var bp=Math.round(bo.left);
var top=Math.round(bo.top);
}else{var bp=0;
var top=0;
var bm=qx.dom.Node.getDocument(bl).body;
var bn=qx.bom.element.BoxSizing;

if(bn.get(bl)!==w){bp-=this.__ii(bl,B);
top-=this.__ii(bl,C);
}
while(bl&&bl!==bm){bp+=bl.offsetLeft;
top+=bl.offsetTop;
if(bn.get(bl)!==w){bp+=this.__ii(bl,B);
top+=this.__ii(bl,C);
}if(bl.parentNode&&this.__ih(bl.parentNode,E)!=M){bp+=this.__ii(bl.parentNode,B);
top+=this.__ii(bl.parentNode,C);
}bl=bl.offsetParent;
}}return {left:bp,top:top};
},"default":function(bg){var bi=0;
var top=0;
var bh=qx.dom.Node.getDocument(bg).body;
while(bg&&bg!==bh){bi+=bg.offsetLeft;
top+=bg.offsetTop;
bg=bg.offsetParent;
}return {left:bi,top:top};
}}),get:function(e,f){if(e.tagName==L){var location=this.__im(e);
var m=location.left;
var top=location.top;
}else{var g=this.__ik(e);
var l=this.__il(e);
var scroll=this.__ij(e);
var m=l.left+g.left-scroll.left;
var top=l.top+g.top-scroll.top;
}var h=m+e.offsetWidth;
var i=top+e.offsetHeight;

if(f){if(f==R||f==y){var j=qx.bom.element.Overflow.getX(e);

if(j==y||j==t){h+=e.scrollWidth-e.offsetWidth+this.__ii(e,B)+this.__ii(e,u);
}var k=qx.bom.element.Overflow.getY(e);

if(k==y||k==t){i+=e.scrollHeight-e.offsetHeight+this.__ii(e,C)+this.__ii(e,v);
}}
switch(f){case R:m+=this.__ii(e,P);
top+=this.__ii(e,J);
h-=this.__ii(e,F);
i-=this.__ii(e,K);
case y:m-=e.scrollLeft;
top-=e.scrollTop;
h-=e.scrollLeft;
i-=e.scrollTop;
case D:m+=this.__ii(e,B);
top+=this.__ii(e,C);
h-=this.__ii(e,u);
i-=this.__ii(e,v);
break;
case H:m-=this.__ii(e,z);
top-=this.__ii(e,A);
h+=this.__ii(e,I);
i+=this.__ii(e,N);
break;
}}return {left:m,top:top,right:h,bottom:i};
},__im:qx.core.Variant.select(x,{"default":function(n){var top=n.offsetTop+this.__ii(n,A);
var o=n.offsetLeft+this.__ii(n,z);
return {left:o,top:top};
},"mshtml":function(bj){var top=bj.offsetTop;
var bk=bj.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__ii(bj,A);
bk+=this.__ii(bj,z);
}return {left:bk,top:top};
},"gecko":function(bO){var top=bO.offsetTop+this.__ii(bO,A)+this.__ii(bO,B);
var bP=bO.offsetLeft+this.__ii(bO,z)+this.__ii(bO,C);
return {left:bP,top:top};
}}),getLeft:function(a,b){return this.get(a,b).left;
},getTop:function(bC,bD){return this.get(bC,bD).top;
},getRight:function(bA,bB){return this.get(bA,bB).right;
},getBottom:function(bH,bI){return this.get(bH,bI).bottom;
},getRelative:function(bq,br,bs,bt){var bv=this.get(bq,bs);
var bu=this.get(br,bt);
return {left:bv.left-bu.left,top:bv.top-bu.top,right:bv.right-bu.right,bottom:bv.bottom-bu.bottom};
},getPosition:function(bc){return this.getRelative(bc,this.getOffsetParent(bc));
},getOffsetParent:function(bE){var bG=bE.offsetParent||document.body;
var bF=qx.bom.element.Style;

while(bG&&(!/^body|html$/i.test(bG.tagName)&&bF.get(bG,G)===O)){bG=bG.offsetParent;
}return bG;
}}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__ia:{},remove:function(f){delete this.__ia[f.$$hash];
},add:function(g){var h=this.__ia;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__ia;
var e;

for(var d in c){e=c[d];
delete c[d];
e.syncWidget();
}for(var d in c){return;
}this.__ia={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__hL:{},__hM:{},remove:function(o){var p=o.$$hash;
delete this.__hM[p];
delete this.__hL[p];
},isVisible:function(n){return this.__hM[n.$$hash]||false;
},__hN:function(e){var g=this.__hM;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__hN(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(c){var d=this.__hL;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var i=this.__hL;
var m=this.__hM;
for(var j in i){if(m[j]!=null){i[j].addChildrenToQueue(i);
}}var l={};

for(var j in i){l[j]=m[j];
m[j]=null;
}for(var j in i){var k=i[j];
delete i[j];
if(m[j]==null){this.__hN(k);
}if(m[j]&&m[j]!=l[j]){k.checkAppearanceNeeds();
}}this.__hL={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__hc:{},remove:function(j){delete this.__hc[j.$$hash];
},add:function(c){var d=this.__hc;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(e){return !!this.__hc[e.$$hash];
},flush:function(){var i=qx.ui.core.queue.Visibility;
var f=this.__hc;
var h;

for(var g in f){h=f[g];
delete f[g];
if(i.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__eN:{},add:function(c){var d=this.__eN;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__eN;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__eN={};
}}});
})();
(function(){var d="none",c="qx.html.Decorator",b="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(g,h){var i={position:b,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){i.pointerEvents=d;
}qx.html.Element.call(this,null,i);
this.__jP=g;
this.__jQ=h||g.toHashCode();
this.useMarkup(g.getMarkup());
},members:{__jQ:null,__jP:null,getId:function(){return this.__jQ;
},getDecorator:function(){return this.__jP;
},resize:function(e,f){this.__jP.resize(this.getDomElement(),e,f);
},tint:function(a){this.__jP.tint(this.getDomElement(),a);
},getInsets:function(){return this.__jP.getInsets();
}},destruct:function(){this.__jP=null;
}});
})();
(function(){var h="blur",g="focus",f="input",e="load",d="qx.ui.core.EventHandler",c="activate";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__eg=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__eg:null,__eh:{focusin:1,focusout:1,focus:1,blur:1},__ei:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(a,b){return a instanceof qx.ui.core.Widget;
},_dispatchEvent:function(o){var t=o.getTarget();
var s=qx.ui.core.Widget.getWidgetByElement(t);
var u=false;

while(s&&s.isAnonymous()){var u=true;
s=s.getLayoutParent();
}if(s&&u&&o.getType()==c){s.getContainerElement().activate();
}if(this.__eh[o.getType()]){s=s&&s.getFocusTarget();
if(!s){return;
}}if(o.getRelatedTarget){var B=o.getRelatedTarget();
var A=qx.ui.core.Widget.getWidgetByElement(B);

while(A&&A.isAnonymous()){A=A.getLayoutParent();
}
if(A){if(this.__eh[o.getType()]){A=A.getFocusTarget();
}if(A===s){return;
}}}var w=o.getCurrentTarget();
var y=qx.ui.core.Widget.getWidgetByElement(w);

if(!y||y.isAnonymous()){return;
}if(this.__eh[o.getType()]){y=y.getFocusTarget();
}var z=o.getType();

if(!y||!(y.isEnabled()||this.__ei[z])){return;
}var p=o.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var v=this.__eg.getListeners(y,z,p);

if(!v||v.length===0){return;
}var q=qx.event.Pool.getInstance().getObject(o.constructor);
o.clone(q);
q.setTarget(s);
q.setRelatedTarget(A||null);
q.setCurrentTarget(y);
var C=o.getOriginalTarget();

if(C){var r=qx.ui.core.Widget.getWidgetByElement(C);

while(r&&r.isAnonymous()){r=r.getLayoutParent();
}q.setOriginalTarget(r);
}else{q.setOriginalTarget(t);
}for(var i=0,l=v.length;i<l;i++){var x=v[i].context||y;
v[i].handler.call(x,q);
}if(q.getPropagationStopped()){o.stopPropagation();
}
if(q.getDefaultPrevented()){o.preventDefault();
}qx.event.Pool.getInstance().poolObject(q);
},registerEvent:function(j,k,m){var n;

if(k===g||k===h){n=j.getFocusElement();
}else if(k===e||k===f){n=j.getContentElement();
}else{n=j.getContainerElement();
}
if(n){n.addListener(k,this._dispatchEvent,this,m);
}},unregisterEvent:function(D,E,F){var G;

if(E===g||E===h){G=D.getFocusElement();
}else if(E===e||E===f){G=D.getContentElement();
}else{G=D.getContainerElement();
}
if(G){G.removeListener(E,this._dispatchEvent,this,F);
}}},destruct:function(){this.__eg=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var i="",h="/",g="mshtml",f="qx.client",e="//",d="?",c="string",b="qx.util.ResourceManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__cr:qx.$$resources||{},__cs:{}},members:{has:function(o){return !!this.self(arguments).__cr[o];
},getData:function(j){return this.self(arguments).__cr[j]||null;
},getImageWidth:function(B){var C=this.self(arguments).__cr[B];
return C?C[0]:null;
},getImageHeight:function(t){var u=this.self(arguments).__cr[t];
return u?u[1]:null;
},getImageFormat:function(r){var s=this.self(arguments).__cr[r];
return s?s[2]:null;
},isClippedImage:function(p){var q=this.self(arguments).__cr[p];
return q&&q.length>4;
},toUri:function(k){if(k==null){return k;
}var l=this.self(arguments).__cr[k];

if(!l){return k;
}
if(typeof l===c){var n=l;
}else{var n=l[3];
if(!n){return k;
}}var m=i;

if(qx.core.Variant.isSet(f,g)&&qx.bom.client.Feature.SSL){m=this.self(arguments).__cs[n];
}return m+qx.$$libraries[n].resourceUri+h+k;
}},defer:function(v){if(qx.core.Variant.isSet(f,g)){if(qx.bom.client.Feature.SSL){for(var z in qx.$$libraries){var x;

if(qx.$$libraries[z].resourceUri){x=qx.$$libraries[z].resourceUri;
}else{v.__cs[z]=i;
continue;
}if(x.match(/^\/\//)!=null){v.__cs[z]=window.location.protocol;
}else if(x.match(/^\//)!=null){v.__cs[z]=window.location.protocol+e+window.location.host;
}else if(x.match(/^\.\//)!=null){var w=document.URL;
v.__cs[z]=w.substring(0,w.lastIndexOf(h)+1);
}else if(x.match(/^http/)!=null){v.__cs[z]=i;
}else{var A=window.location.href.indexOf(d);
var y;

if(A==-1){y=window.location.href;
}else{y=window.location.href.substring(0,A);
}v.__cs[z]=y.substring(0,y.lastIndexOf(h)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__kX:function(){var d=(navigator.userLanguage||navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__kX();
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(x){var x=x||t;
this.__lw=x;
this.length=x.length;
},members:{$$isString:true,length:0,__lw:null,toString:function(){return this.__lw;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(y,z){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(u,v){{};
var w=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
v.valueOf=v.toString;

if(new u(t).valueOf()==null){delete v.valueOf;
}
for(var i=0,l=w.length;i<l;i++){v[w[i]]=String.prototype[w[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__ej=c;
this.__ek=d;
},members:{__ej:null,__ek:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__ej,this.__ek);
}}});
})();
(function(){var n="_",m="",l="_applyLocale",k="changeLocale",j="C",h="qx.dynlocale",g="on",f="qx.locale.Manager",e="String",d="singleton";
qx.Class.define(f,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__in=qx.$$translations||{};
this.__io=qx.$$locales||{};
var r=qx.bom.client.Locale;
var p=r.LOCALE;
var q=r.VARIANT;

if(q!==m){p+=n+q;
}this.__ip=p;
this.setLocale(p||this.__iq);
},statics:{tr:function(a,b){var c=qx.lang.Array.fromArguments(arguments);
c.splice(0,1);
return qx.locale.Manager.getInstance().translate(a,c);
},trn:function(G,H,I,J){var K=qx.lang.Array.fromArguments(arguments);
K.splice(0,3);
if(I!=1){return qx.locale.Manager.getInstance().translate(H,K);
}else{return qx.locale.Manager.getInstance().translate(G,K);
}},trc:function(bb,bc,bd){var be=qx.lang.Array.fromArguments(arguments);
be.splice(0,2);
return qx.locale.Manager.getInstance().translate(bc,be);
},marktr:function(o){return o;
}},properties:{locale:{check:e,nullable:true,apply:l,event:k}},members:{__iq:j,__ir:null,__is:null,__in:null,__io:null,__ip:null,getLanguage:function(){return this.__is;
},getTerritory:function(){return this.getLocale().split(n)[1]||m;
},getAvailableLocales:function(){var bg=[];

for(var bf in this.__io){if(bf!=this.__iq){bg.push(bf);
}}return bg;
},__it:function(P){var R;
var Q=P.indexOf(n);

if(Q==-1){R=P;
}else{R=P.substring(0,Q);
}return R;
},_applyLocale:function(E,F){{};
this.__ir=E;
this.__is=this.__it(E);
},addTranslation:function(S,T){var U=this.__in;

if(U[S]){for(var V in T){U[S][V]=T[V];
}}else{U[S]=T;
}},addLocale:function(L,M){var N=this.__io;

if(N[L]){for(var O in M){N[L][O]=M[O];
}}else{N[L]=M;
}},translate:function(A,B,C){var D=this.__in;
return this.__iu(D,A,B,C);
},localize:function(W,X,Y){var ba=this.__io;
return this.__iu(ba,W,X,Y);
},__iu:function(s,t,u,v){var w;

if(!s){return t;
}
if(v){var y=this.__it(v);
}else{v=this.__ir;
y=this.__is;
}if(!w&&s[v]){w=s[v][t];
}if(!w&&s[y]){w=s[y][t];
}if(!w&&s[this.__iq]){w=s[this.__iq][t];
}
if(!w){w=t;
}
if(u.length>0){var x=[];

for(var i=0;i<u.length;i++){var z=u[i];

if(z&&z.translate){x[i]=z.translate();
}else{x[i]=z;
}}w=qx.lang.String.format(w,x);
}
if(qx.core.Variant.isSet(h,g)){w=new qx.locale.LocalizedString(w,t,u);
}return w;
}},destruct:function(){this.__in=this.__io=null;
}});
})();
(function(){var m="px",l="qx.client",k="div",j="img",i="",h="no-repeat",g="scale-x",f="mshtml",d="scale",c="scale-y",I="qx/icon",H="repeat",G=".png",F="crop",E="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",D='<div style="',C="repeat-y",B='<img src="',A="qx.bom.element.Decoration",z="', sizingMethod='",t="png",u="')",r='"></div>',s='"/>',p='" style="',q="none",n="webkit",o=" ",v="repeat-x",w="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(A,{statics:{DEBUG:false,__gN:{},__gO:qx.core.Variant.isSet(l,f),__gP:qx.core.Variant.select(l,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__gQ:{"scale-x":j,"scale-y":j,"scale":j,"repeat":k,"no-repeat":k,"repeat-x":k,"repeat-y":k},update:function(bv,bw,bx,by){var bA=this.getTagName(bx,bw);

if(bA!=bv.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bB=this.getAttributes(bw,bx,by);

if(bA===j){bv.src=bB.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(bv.style.backgroundPosition!=i&&bB.style.backgroundPosition===undefined){bB.style.backgroundPosition=null;
}if(bv.style.clip!=i&&bB.style.clip===undefined){bB.style.clip=null;
}var bz=qx.bom.element.Style;
bz.setStyles(bv,bB.style);
if(this.__gO){try{bv.filters[w].apply();
}catch(e){}}},create:function(R,S,T){var U=this.getTagName(S,R);
var W=this.getAttributes(R,S,T);
var V=qx.bom.element.Style.compile(W.style);

if(U===j){return B+W.src+p+V+s;
}else{return D+V+r;
}},getTagName:function(a,b){if(qx.core.Variant.isSet(l,f)){if(b&&this.__gO&&this.__gP[a]&&qx.lang.String.endsWith(b,G)){return k;
}}return this.__gQ[a];
},getAttributes:function(bC,bD,bE){if(!bE){bE={};
}
if(!bE.position){bE.position=x;
}
if(qx.core.Variant.isSet(l,f)){bE.fontSize=0;
bE.lineHeight=0;
}else if(qx.core.Variant.isSet(l,n)){bE.WebkitUserDrag=q;
}var bG=qx.util.ResourceManager.getInstance().getImageFormat(bC)||qx.io.ImageLoader.getFormat(bC);
{};
var bF;
if(this.__gO&&this.__gP[bD]&&bG===t){bF=this.__gT(bE,bD,bC);
}else{if(bD===d){bF=this.__gU(bE,bD,bC);
}else if(bD===g||bD===c){bF=this.__gV(bE,bD,bC);
}else{bF=this.__gY(bE,bD,bC);
}}return bF;
},__gR:function(bs,bt,bu){if(bs.width==null&&bt!=null){bs.width=bt+m;
}
if(bs.height==null&&bu!=null){bs.height=bu+m;
}return bs;
},__gS:function(bH){var bI=qx.util.ResourceManager.getInstance().getImageWidth(bH)||qx.io.ImageLoader.getWidth(bH);
var bJ=qx.util.ResourceManager.getInstance().getImageHeight(bH)||qx.io.ImageLoader.getHeight(bH);
return {width:bI,height:bJ};
},__gT:function(bK,bL,bM){var bP=this.__gS(bM);
bK=this.__gR(bK,bP.width,bP.height);
var bO=bL==h?F:d;
var bN=E+qx.util.ResourceManager.getInstance().toUri(bM)+z+bO+u;
bK.filter=bN;
bK.backgroundImage=bK.backgroundRepeat=i;
return {style:bK};
},__gU:function(bV,bW,bX){var bY=qx.util.ResourceManager.getInstance().toUri(bX);
var ca=this.__gS(bX);
bV=this.__gR(bV,ca.width,ca.height);
return {src:bY,style:bV};
},__gV:function(bc,bd,be){var bj=qx.util.ResourceManager.getInstance();
var bi=bj.isClippedImage(be);
var bk=this.__gS(be);

if(bi){var bh=bj.getData(be);
var bf=bj.toUri(bh[4]);

if(bd===g){bc=this.__gW(bc,bh,bk.height);
}else{bc=this.__gX(bc,bh,bk.width);
}return {src:bf,style:bc};
}else{{};

if(bd==g){bc.height=bk.height==null?null:bk.height+m;
}else if(bd==c){bc.width=bk.width==null?null:bk.width+m;
}var bf=bj.toUri(be);
return {src:bf,style:bc};
}},__gW:function(bR,bS,bT){var bU=qx.util.ResourceManager.getInstance().getImageHeight(bS[4]);
bR.clip={top:-bS[6],height:bT};
bR.height=bU+m;
if(bR.top!=null){bR.top=(parseInt(bR.top,10)+bS[6])+m;
}else if(bR.bottom!=null){bR.bottom=(parseInt(bR.bottom,10)+bT-bU-bS[6])+m;
}return bR;
},__gX:function(X,Y,ba){var bb=qx.util.ResourceManager.getInstance().getImageWidth(Y[4]);
X.clip={left:-Y[5],width:ba};
X.width=bb+m;
if(X.left!=null){X.left=(parseInt(X.left,10)+Y[5])+m;
}else if(X.right!=null){X.right=(parseInt(X.right,10)+ba-bb-Y[5])+m;
}return X;
},__gY:function(J,K,L){var Q=qx.util.ResourceManager.getInstance().isClippedImage(L);
var P=this.__gS(L);
if(Q&&K!==H){var O=qx.util.ResourceManager.getInstance().getData(L);
var N=qx.bom.element.Background.getStyles(O[4],K,O[5],O[6]);

for(var M in N){J[M]=N[M];
}
if(P.width!=null&&J.width==null&&(K==C||K===h)){J.width=P.width+m;
}
if(P.height!=null&&J.height==null&&(K==v||K===h)){J.height=P.height+m;
}return {style:J};
}else{{};
J=this.__gR(J,P.width,P.height);
J=this.__ha(J,L,K);
return {style:J};
}},__ha:function(bl,bm,bn){var top=null;
var br=null;

if(bl.backgroundPosition){var bo=bl.backgroundPosition.split(o);
br=parseInt(bo[0]);

if(isNaN(br)){br=bo[0];
}top=parseInt(bo[1]);

if(isNaN(top)){top=bo[1];
}}var bq=qx.bom.element.Background.getStyles(bm,bn,br,top);

for(var bp in bq){bl[bp]=bq[bp];
}if(bl.filter){bl.filter=i;
}return bl;
},__hb:function(bQ){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bQ)&&bQ.indexOf(I)==-1){if(!this.__gN[bQ]){qx.log.Logger.debug("Potential clipped image candidate: "+bQ);
this.__gN[bQ]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(l,{"mshtml":function(){return qx.bom.element.Decoration.__gO;
},"default":function(){return false;
}})}});
})();
(function(){var j="qx.client",h="load",g="qx.io.ImageLoader";
qx.Bootstrap.define(g,{statics:{__kI:{},__kJ:{width:null,height:null},__kK:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(r){var s=this.__kI[r];
return !!(s&&s.loaded);
},isFailed:function(u){var v=this.__kI[u];
return !!(v&&v.failed);
},isLoading:function(F){var G=this.__kI[F];
return !!(G&&G.loading);
},getFormat:function(o){var p=this.__kI[o];
return p?p.format:null;
},getSize:function(D){var E=this.__kI[D];
return E?
{width:E.width,height:E.height}:this.__kJ;
},getWidth:function(w){var x=this.__kI[w];
return x?x.width:null;
},getHeight:function(k){var m=this.__kI[k];
return m?m.height:null;
},load:function(a,b,c){var d=this.__kI[a];

if(!d){d=this.__kI[a]={};
}if(b&&!c){c=window;
}if(d.loaded||d.loading||d.failed){if(b){if(d.loading){d.callbacks.push(b,c);
}else{b.call(c,a,d);
}}}else{d.loading=true;
d.callbacks=[];

if(b){d.callbacks.push(b,c);
}var f=new Image();
var e=qx.lang.Function.listener(this.__kL,this,f,a);
f.onload=e;
f.onerror=e;
f.src=a;
}},__kL:qx.event.GlobalError.observeMethod(function(event,y,z){var A=this.__kI[z];
if(event.type===h){A.loaded=true;
A.width=this.__kM(y);
A.height=this.__kN(y);
var B=this.__kK.exec(z);

if(B!=null){A.format=B[1];
}}else{A.failed=true;
}y.onload=y.onerror=null;
var C=A.callbacks;
delete A.loading;
delete A.callbacks;
for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}),__kM:qx.core.Variant.select(j,{"gecko":function(H){return H.naturalWidth;
},"default":function(n){return n.width;
}}),__kN:qx.core.Variant.select(j,{"gecko":function(q){return q.naturalHeight;
},"default":function(t){return t.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__cT:[i,null,h,b,null,j,e,null,j],__cU:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cV:function(F,top){var G=qx.bom.client.Engine;

if(G.GECKO&&G.VERSION<1.9&&F==top&&typeof F==m){top+=0.01;
}
if(F){var H=(typeof F==m)?F+k:F;
}else{H=l;
}
if(top){var I=(typeof top==m)?top+k:top;
}else{I=l;
}return H+d+I;
},compile:function(z,A,B,top){var C=this.__cV(B,top);
var D=qx.util.ResourceManager.getInstance().toUri(z);
var E=this.__cT;
E[1]=D;
E[4]=C;
E[7]=A;
return E.join(g);
},getStyles:function(t,u,v,top){if(!t){return this.__cU;
}var w=this.__cV(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y={backgroundPosition:w,backgroundImage:c+x+f};

if(u!=null){y.backgroundRepeat=u;
}return y;
},set:function(n,o,p,q,top){var r=this.getStyles(o,p,q,top);

for(var s in r){n.style[s]=r[s];
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
}}},_createDomElement:function(){var u=this._getProperty(i);
var v=u?i:h;

if(qx.core.Variant.isSet(g,f)){var t=this._getProperty(j);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v,t));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(r){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(q){this._setProperty(j,q);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){if(qx.core.Variant.isSet(g,e)){this._setProperty(j,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(j,true);
}return this;
},setScale:function(s){this._setProperty(i,s);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var m="nonScaled",l="scaled",k="alphaScaled",j=".png",i="qx.client",h="div",g="replacement",f="qx.event.type.Event",e="hidden",d="Boolean",B="px",A="scale",z="changeSource",y="qx.ui.basic.Image",x="loaded",w="-disabled.$1",v="loadingFailed",u="String",t="_applySource",s="img",q="image",r="__iv",o="mshtml",p="_applyScale",n="no-repeat";
qx.Class.define(y,{extend:qx.ui.core.Widget,construct:function(bm){this.__iv={};
qx.ui.core.Widget.call(this);

if(bm){this.setSource(bm);
}},properties:{source:{check:u,init:null,nullable:true,event:z,apply:t,themeable:true},scale:{check:d,init:false,themeable:true,apply:p},appearance:{refine:true,init:q},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:f,loaded:f},members:{__iw:null,__ix:null,__iy:null,__iv:null,getContentElement:function(){return this.__iC();
},_createContentElement:function(){return this.__iC();
},_getContentHint:function(){return {width:this.__iw||0,height:this.__ix||0};
},_applyEnabled:function(C,D){qx.ui.core.Widget.prototype._applyEnabled.call(this,C,D);

if(this.getSource()){this._styleSource();
}},_applySource:function(c){this._styleSource();
},_applyScale:function(O){this._styleSource();
},__iz:function(I){this.__iy=I;
},__iA:function(){if(this.__iy==null){var Q=this.getSource();
var P=false;

if(Q!=null){P=qx.lang.String.endsWith(Q,j);
}
if(this.getScale()&&P&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__iy=k;
}else if(this.getScale()){this.__iy=l;
}else{this.__iy=m;
}}return this.__iy;
},__iB:function(R){var S;
var T;

if(R==k){S=true;
T=h;
}else if(R==m){S=false;
T=h;
}else{S=true;
T=s;
}var U=new qx.html.Image(T);
U.setScale(S);
U.setStyles({"overflowX":e,"overflowY":e});
return U;
},__iC:function(){var V=this.__iA();

if(this.__iv[V]==null){this.__iv[V]=this.__iB(V);
}return this.__iv[V];
},_styleSource:function(){var bo=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!bo){this.getContentElement().resetSource();
return;
}this.__iD(bo);

if(qx.core.Variant.isSet(i,o)){var bp=this.getScale()?A:n;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(bp,bo);
}if(qx.util.ResourceManager.getInstance().has(bo)){this.__iF(this.getContentElement(),bo);
}else if(qx.io.ImageLoader.isLoaded(bo)){this.__iG(this.getContentElement(),bo);
}else{this.__iH(this.getContentElement(),bo);
}},__iD:qx.core.Variant.select(i,{"mshtml":function(J){var L=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var K=qx.lang.String.endsWith(J,j);

if(L&&K){if(this.getScale()&&this.__iA()!=k){this.__iz(k);
}else if(!this.getScale()&&this.__iA()!=m){this.__iz(m);
}}else{if(this.getScale()&&this.__iA()!=l){this.__iz(l);
}else if(!this.getScale()&&this.__iA()!=m){this.__iz(m);
}}this.__iE(this.__iC());
},"default":function(bn){if(this.getScale()&&this.__iA()!=l){this.__iz(l);
}else if(!this.getScale()&&this.__iA(m)){this.__iz(m);
}this.__iE(this.__iC());
}}),__iE:function(bc){var bf=this.getContainerElement();
var bg=bf.getChild(0);

if(bg!=bc){if(bg!=null){var bi=B;
var bd={};
var be=this.getInnerSize();

if(be!=null){bd.width=be.width+bi;
bd.height=be.height+bi;
}var bh=this.getInsets();
bd.left=bh.left+bi;
bd.top=bh.top+bi;
bd.zIndex=10;
bc.setStyles(bd,true);
bc.setSelectable(this.getSelectable());
}bf.removeAt(0);
bf.addAt(bc,0);
}},__iF:function(E,F){var H=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var G=F.replace(/\.([a-z]+)$/,w);

if(H.has(G)){F=G;
this.addState(g);
}else{this.removeState(g);
}}if(E.getSource()===F){return;
}E.setSource(F);
this.__iJ(H.getImageWidth(F),H.getImageHeight(F));
},__iG:function(W,X){var ba=qx.io.ImageLoader;
W.setSource(X);
var Y=ba.getWidth(X);
var bb=ba.getHeight(X);
this.__iJ(Y,bb);
},__iH:function(bj,bk){var self;
var bl=qx.io.ImageLoader;
{};
if(!bl.isFailed(bk)){bl.load(bk,this.__iI,this);
}else{if(bj!=null){bj.resetSource();
}}},__iI:function(M,N){if(this.$$disposed===true){return;
}if(M!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(N.failed){this.warn("Image could not be loaded: "+M);
this.fireEvent(v);
}else{this.fireEvent(x);
}this._styleSource();
},__iJ:function(a,b){if(a!==this.__iw||b!==this.__ix){this.__iw=a;
this.__ix=b;
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
(function(){var g="interval",f="Number",e="_applyTimeoutInterval",d="qx.event.type.Event",c="qx.event.Idle",b="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){qx.core.Object.call(this);
var a=new qx.event.Timer(this.getTimeoutInterval());
a.addListener(g,this._onInterval,this);
a.start();
this.__kj=a;
},events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__kj:null,_applyTimeoutInterval:function(h){this.__kj.setInterval(h);
},_onInterval:function(){this.fireEvent(g);
}},destruct:function(){if(this.__kj){this.__kj.stop();
}this.__kj=null;
}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b="direct",a='__hd';
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hd=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__he:null,compute:function(x,y,z,A,B,C,D){this.__he=this.__he||new qx.util.placement.Placement();
var G=B.split(f);
var F=G[0];
var E=G[1];
this.__he.set({axisX:this.__hi(C),axisY:this.__hi(D),edge:F,align:E});
return this.__he.compute(x,y,z,A);
},__hf:null,__hg:null,__hh:null,__hi:function(w){switch(w){case b:this.__hf=this.__hf||new qx.util.placement.DirectAxis();
return this.__hf;
case d:this.__hg=this.__hg||new qx.util.placement.KeepAlignAxis();
return this.__hg;
case c:this.__hh=this.__hh||new qx.util.placement.BestFitAxis();
return this.__hh;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__hd:null,compute:function(p,q,r,s){{};
var t=this.getAxisX()||this.__hd;
var v=t.computeStart(p.width,{start:r.left,end:r.right},{start:s.left,end:s.right},q.width,this.__hj());
var u=this.getAxisY()||this.__hd;
var top=u.computeStart(p.height,{start:r.top,end:r.bottom},{start:s.top,end:s.bottom},q.height,this.__hk());
return {left:v,top:top};
},__hj:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==l){return i;
}else if(I==n){return g;
}else if(H==l){return k;
}else if(H==n){return h;
}},__hk:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(m,n,o,p,q){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(i,j,k,l){switch(l){case e:return j.start-k.end-i;
case b:return j.end+k.start;
case d:return j.start+k.start;
case c:return j.end-k.end-i;
}},_isInRange:function(f,g,h){return f>=0&&f+g<=h;
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
(function(){var f="mousedown",d="__qM",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__qM=[];
qx.event.Registration.addListener(document.documentElement,f,this.__qO,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__qM:null,add:function(k){{};
this.__qM.push(k);
this.__qN();
},remove:function(l){{};

if(this.__qM){qx.lang.Array.remove(this.__qM,l);
this.__qN();
}},hideAll:function(){if(this.__qM){for(var i=0;i<this.__qM.length;i++){this.__qM[i].exclude();
}}},__qN:function(){var m=1e7;

for(var i=0;i<this.__qM.length;i++){this.__qM[i].setZIndex(m++);
}},__qO:function(e){var h=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var j=this.__qM;

for(var i=0;i<j.length;i++){var g=j[i];

if(!g.getAutoHide()||h==g||qx.ui.core.Widget.contains(g,h)){continue;
}g.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__qO,this,true);
this._disposeArray(d);
}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__gl:null,_invalidChildrenCache:null,__gm:null,invalidateLayoutCache:function(){this.__gl=null;
},renderLayout:function(f,g){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__gl){return this.__gl;
}return this.__gl=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(d){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var e=this.__gm;

if(e instanceof qx.ui.core.LayoutItem){e.clearSeparators();
}},_renderSeparator:function(h,i){this.__gm.renderSeparator(h,i);
},connectToWidget:function(c){if(c&&this.__gm){throw new Error("It is not possible to manually set the connected widget.");
}this.__gm=c;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__gm;
},_applyLayoutChange:function(){if(this.__gm){this.__gm.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__gm.getLayoutChildren();
}},destruct:function(){this.__gm=this.__gl=null;
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(m,n){var r=this._getLayoutChildren();
var q,s,p,o;
for(var i=0,l=r.length;i<l;i++){q=r[i];
s=q.getSizeHint();
p=m;

if(p<s.minWidth){p=s.minWidth;
}else if(p>s.maxWidth){p=s.maxWidth;
}o=n;

if(o<s.minHeight){o=s.minHeight;
}else if(o>s.maxHeight){o=s.maxHeight;
}q.renderLayout(0,0,p,o);
}},_computeSizeHint:function(){var h=this._getLayoutChildren();
var f,k;
var j=0,g=0;
var e=0,c=0;
var b=Infinity,d=Infinity;
for(var i=0,l=h.length;i<l;i++){f=h[i];
k=f.getSizeHint();
j=Math.max(j,k.width);
g=Math.max(g,k.height);
e=Math.max(e,k.minWidth);
c=Math.max(c,k.minHeight);
b=Math.min(b,k.maxWidth);
d=Math.min(d,k.maxHeight);
}return {width:j,height:g,minWidth:e,minHeight:c,maxWidth:b,maxHeight:d};
}}});
})();
(function(){var l="label",k="icon",j="Boolean",i="both",h="String",g="left",f="changeGap",e="changeShow",d="bottom",c="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="top",s="right",r="_applyRich",q="_applyIcon",p="_applyShow",n="_applyLabel",o="_applyGap",m="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(N,O){{};
qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(N!=null){this.setLabel(N);
}
if(O!=null){this.setIcon(O);
}},properties:{appearance:{refine:true,init:m},label:{apply:n,nullable:true,check:h,event:w},rich:{check:j,init:false,apply:r},icon:{check:h,apply:q,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:f,apply:o,themeable:true,init:4},show:{init:i,check:[i,l,k],themeable:true,inheritable:true,apply:p,event:e},iconPosition:{init:g,check:[t,s,d,g],themeable:true,apply:u},center:{init:false,check:j,themeable:true,apply:c}},members:{_createChildControlImpl:function(a){var b;

switch(a){case l:b=new qx.ui.basic.Label(this.getLabel());
b.setAnonymous(true);
b.setRich(this.getRich());
this._add(b);

if(this.getLabel()==null||this.getShow()===k){b.exclude();
}break;
case k:b=new qx.ui.basic.Image(this.getIcon());
b.setAnonymous(true);
this._addAt(b,0);

if(this.getIcon()==null||this.getShow()===l){b.exclude();
}break;
}return b||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,a);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===k){this._excludeChildControl(l);
}else{this._showChildControl(l);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===l){this._excludeChildControl(k);
}else{this._showChildControl(k);
}},_applyLabel:function(K,L){var M=this.getChildControl(l,true);

if(M){M.setValue(K);
}this._handleLabel();
},_applyRich:function(P,Q){var R=this.getChildControl(l,true);

if(R){R.setRich(P);
}},_applyIcon:function(H,I){var J=this.getChildControl(k,true);

if(J){J.setSource(H);
}this._handleIcon();
},_applyGap:function(F,G){this._getLayout().setGap(F);
},_applyShow:function(B,C){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(D,E){this._getLayout().setIconPosition(D);
},_applyCenter:function(z,A){this._getLayout().setCenter(z);
}}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(l,m){var v=qx.ui.layout.Util;
var o=this.getIconPosition();
var r=this._getLayoutChildren();
var length=r.length;
var F,top,w,p;
var B,u;
var z=this.getGap();
var E=this.getCenter();
if(o===k||o===f){var x=length-1;
var s=-1;
var q=-1;
}else{var x=0;
var s=length;
var q=1;
}if(o==h||o==k){if(E){var A=0;

for(var i=x;i!=s;i+=q){p=r[i].getSizeHint().height;

if(p>0){A+=p;

if(i!=x){A+=z;
}}}top=Math.round((m-A)/2);
}else{top=0;
}
for(var i=x;i!=s;i+=q){B=r[i];
u=B.getSizeHint();
w=Math.min(u.maxWidth,Math.max(l,u.minWidth));
p=u.height;
F=v.computeHorizontalAlignOffset(d,w,l);
B.renderLayout(F,top,w,p);
if(p>0){top+=p+z;
}}}else{var t=l;
var n=null;
var D=0;

for(var i=x;i!=s;i+=q){B=r[i];
w=B.getSizeHint().width;

if(w>0){if(!n&&B instanceof qx.ui.basic.Label){n=B;
}else{t-=w;
}D++;
}}
if(D>1){var C=(D-1)*z;
t-=C;
}
if(n){var u=n.getSizeHint();
var y=Math.max(u.minWidth,Math.min(t,u.maxWidth));
t-=y;
}
if(E&&t>0){F=Math.round(t/2);
}else{F=0;
}
for(var i=x;i!=s;i+=q){B=r[i];
u=B.getSizeHint();
p=Math.min(u.maxHeight,Math.max(m,u.minHeight));

if(B===n){w=y;
}else{w=u.width;
}top=v.computeVerticalAlignOffset(e,u.height,m);
B.renderLayout(F,top,w,p);
if(w>0){F+=w+z;
}}}},_computeSizeHint:function(){var Q=this._getLayoutChildren();
var length=Q.length;
var I,O;
if(length===1){var I=Q[0].getSizeHint();
O={width:I.width,height:I.height,minWidth:I.minWidth,minHeight:I.minHeight};
}else{var M=0,N=0;
var J=0,L=0;
var K=this.getIconPosition();
var P=this.getGap();

if(K===h||K===k){var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
N=Math.max(N,I.width);
M=Math.max(M,I.minWidth);
if(I.height>0){L+=I.height;
J+=I.minHeight;
G++;
}}
if(G>1){var H=(G-1)*P;
L+=H;
J+=H;
}}else{var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
L=Math.max(L,I.height);
J=Math.max(J,I.minHeight);
if(I.width>0){N+=I.width;
M+=I.minWidth;
G++;
}}
if(G>1){var H=(G-1)*P;
N+=H;
M+=H;
}}O={minWidth:M,width:N,minHeight:J,height:L};
}return O;
}}});
})();
(function(){var g="middle",f="qx.ui.layout.Util",e="left",d="center",c="top",b="bottom",a="right";
qx.Class.define(f,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(L,M,N){var P,T,O,U;
var Q=M>N;
var V=Math.abs(M-N);
var W,R;
var S={};

for(T in L){P=L[T];
S[T]={potential:Q?P.max-P.value:P.value-P.min,flex:Q?P.flex:1/P.flex,offset:0};
}while(V!=0){U=Infinity;
O=0;

for(T in S){P=S[T];

if(P.potential>0){O+=P.flex;
U=Math.min(U,P.potential/P.flex);
}}if(O==0){break;
}U=Math.min(V,U*O)/O;
W=0;

for(T in S){P=S[T];

if(P.potential>0){R=Math.min(V,P.potential,Math.ceil(U*P.flex));
W+=R-U*P.flex;

if(W>=1){W-=1;
R-=1;
}P.potential-=R;

if(Q){P.offset+=R;
}else{P.offset-=R;
}V-=R;
}}}return S;
},computeHorizontalAlignOffset:function(F,G,H,I,J){if(I==null){I=0;
}
if(J==null){J=0;
}var K=0;

switch(F){case e:K=I;
break;
case a:K=H-G-J;
break;
case d:K=Math.round((H-G)/2);
if(K<I){K=I;
}else if(K<J){K=Math.max(I,H-G-J);
}break;
}return K;
},computeVerticalAlignOffset:function(h,j,k,m,n){if(m==null){m=0;
}
if(n==null){n=0;
}var o=0;

switch(h){case c:o=m;
break;
case b:o=k-j-n;
break;
case g:o=Math.round((k-j)/2);
if(o<m){o=m;
}else if(o<n){o=Math.max(m,k-j-n);
}break;
}return o;
},collapseMargins:function(bm){var bn=0,bp=0;

for(var i=0,l=arguments.length;i<l;i++){var bo=arguments[i];

if(bo<0){bp=Math.min(bp,bo);
}else if(bo>0){bn=Math.max(bn,bo);
}}return bn+bp;
},computeHorizontalGaps:function(B,C,D){if(C==null){C=0;
}var E=0;

if(D){E+=B[0].getMarginLeft();

for(var i=1,l=B.length;i<l;i+=1){E+=this.collapseMargins(C,B[i-1].getMarginRight(),B[i].getMarginLeft());
}E+=B[l-1].getMarginRight();
}else{for(var i=1,l=B.length;i<l;i+=1){E+=B[i].getMarginLeft()+B[i].getMarginRight();
}E+=(C*(l-1));
}return E;
},computeVerticalGaps:function(x,y,z){if(y==null){y=0;
}var A=0;

if(z){A+=x[0].getMarginTop();

for(var i=1,l=x.length;i<l;i+=1){A+=this.collapseMargins(y,x[i-1].getMarginBottom(),x[i].getMarginTop());
}A+=x[l-1].getMarginBottom();
}else{for(var i=1,l=x.length;i<l;i+=1){A+=x[i].getMarginTop()+x[i].getMarginBottom();
}A+=(y*(l-1));
}return A;
},computeHorizontalSeparatorGaps:function(p,q,r){var u=qx.theme.manager.Decoration.getInstance().resolve(r);
var t=u.getInsets();
var s=t.left+t.right;
var v=0;

for(var i=0,l=p.length;i<l;i++){var w=p[i];
v+=w.getMarginLeft()+w.getMarginRight();
}v+=(q+s+q)*(l-1);
return v;
},computeVerticalSeparatorGaps:function(X,Y,ba){var bd=qx.theme.manager.Decoration.getInstance().resolve(ba);
var bc=bd.getInsets();
var bb=bc.top+bc.bottom;
var be=0;

for(var i=0,l=X.length;i<l;i++){var bf=X[i];
be+=bf.getMarginTop()+bf.getMarginBottom();
}be+=(Y+bb+Y)*(l-1);
return be;
},arrangeIdeals:function(bg,bh,bi,bj,bk,bl){if(bh<bg||bk<bj){if(bh<bg&&bk<bj){bh=bg;
bk=bj;
}else if(bh<bg){bk-=(bg-bh);
bh=bg;
if(bk<bj){bk=bj;
}}else if(bk<bj){bh-=(bj-bk);
bk=bj;
if(bh<bg){bh=bg;
}}}
if(bh>bi||bk>bl){if(bh>bi&&bk>bl){bh=bi;
bk=bl;
}else if(bh>bi){bk+=(bh-bi);
bh=bi;
if(bk>bl){bk=bl;
}}else if(bk>bl){bh+=(bk-bl);
bk=bl;
if(bh>bi){bh=bi;
}}}return {begin:bh,end:bk};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="qx.dynlocale",j="text",i="Boolean",h="color",g="userSelect",f="changeLocale",d="enabled",c="none",b="on",a="_applyTextAlign",H="qx.ui.core.Widget",G="nowrap",F="changeTextAlign",E="_applyWrap",D="changeValue",C="qx.client",B="changeContent",A="qx.ui.basic.Label",z="A",y="whiteSpace",r="_applyValue",s="center",p="_applyBuddy",q="String",n="textAlign",o="right",l="changeRich",m="normal",t="_applyRich",u="click",w="label",v="webkit",x="left";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(I){qx.ui.core.Widget.call(this);

if(I!=null){this.setValue(I);
}
if(qx.core.Variant.isSet(k,b)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:l,apply:t},wrap:{check:i,init:true,apply:E},value:{check:q,apply:r,event:D,nullable:true},buddy:{check:H,apply:p,nullable:true,init:null,dereference:true},textAlign:{check:[x,s,o],nullable:true,themeable:true,apply:a,event:F},appearance:{refine:true,init:w},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__gu:null,__gv:null,__gw:null,__gx:null,_getContentHint:function(){if(this.__gv){this.__gy=this.__gz();
delete this.__gv;
}return {width:this.__gy.width,height:this.__gy.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(bf){if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){if(bf&&!this.isRich()){{};
return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,bf);
if(qx.core.Variant.isSet(C,v)){this.getContainerElement().setStyle(g,bf?j:c);
this.getContentElement().setStyle(g,bf?j:c);
}},_getContentHeightForWidth:function(bb){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__gz(bb).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(O,P){this.getContentElement().setStyle(n,O);
},_applyTextColor:function(S,T){if(S){this.getContentElement().setStyle(h,qx.theme.manager.Color.getInstance().resolve(S));
}else{this.getContentElement().removeStyle(h);
}},__gy:{width:0,height:0},_applyFont:function(X,Y){var ba;

if(X){this.__gu=qx.theme.manager.Font.getInstance().resolve(X);
ba=this.__gu.getStyles();
}else{this.__gu=null;
ba=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(ba);
this.__gv=true;
qx.ui.core.queue.Layout.add(this);
},__gz:function(J){var N=qx.bom.Label;
var L=this.getFont();
var K=L?this.__gu.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||z;
var M=this.getRich();
return M?N.getHtmlSize(content,K,J):N.getTextSize(content,K);
},_applyBuddy:function(Q,R){if(R!=null){R.removeBinding(this.__gw);
this.__gw=null;
this.removeListenerById(this.__gx);
this.__gx=null;
}
if(Q!=null){this.__gw=Q.bind(d,this,d);
this.__gx=this.addListener(u,function(){if(Q.isFocusable()){Q.focus.apply(Q);
}},this);
}},_applyRich:function(U){this.getContentElement().setRich(U);
this.__gv=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(bc,bd){if(bc&&!this.isRich()){{};
}
if(this.isRich()){var be=bc?m:G;
this.getContentElement().setStyle(y,be);
}},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(V,W){this.getContentElement().setValue(V);
this.__gv=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(B,V,W);
}},destruct:function(){if(qx.core.Variant.isSet(k,b)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}if(this.__gw!=null){var bg=this.getBuddy();

if(bg!=null&&!bg.isDisposed()){bg.removeBinding(this.__gw);
}}this.__gu=this.__gw=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__dJ:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__dJ;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(h){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(i){var j=this.getDomElement();

if(j){throw new Error("The label mode cannot be modified after initial creation");
}i=!!i;

if(this.__dJ==i){return;
}this.__dJ=i;
return this;
},setValue:function(g){this._setProperty(b,g);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var p="div",o="inherit",n="text",m="value",l="",k="hidden",j="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",i="nowrap",h="qx.client",g="auto",F="0",E="ellipsis",D="normal",C="label",B="px",A="crop",z="gecko",y="end",x="100%",w="visible",u="qx.bom.Label",v="opera",s="block",t="none",q="-1000px",r="absolute";
qx.Class.define(u,{statics:{__iK:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__iL:function(){var L=this.__iN(false);
document.body.insertBefore(L,document.body.firstChild);
return this._textElement=L;
},__iM:function(){var bd=this.__iN(true);
document.body.insertBefore(bd,document.body.firstChild);
return this._htmlElement=bd;
},__iN:function(P){var Q=qx.bom.Element.create(p);
var R=Q.style;
R.width=R.height=g;
R.left=R.top=q;
R.visibility=k;
R.position=r;
R.overflow=w;

if(P){R.whiteSpace=D;
}else{R.whiteSpace=i;

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var S=document.createElementNS(j,C);
var R=S.style;
R.padding=F;

for(var T in this.__iK){R[T]=o;
}Q.appendChild(S);
}}return Q;
},__iO:function(J){var K={};

if(J){K.whiteSpace=D;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){K.display=s;
}else{K.overflow=k;
K.whiteSpace=i;
K.textOverflow=E;
K.userSelect=t;
if(qx.core.Variant.isSet(h,v)){K.OTextOverflow=E;
}}return K;
},create:function(content,a,b){if(!b){b=window;
}
if(a){var c=b.document.createElement(p);
c.useHtml=true;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var c=b.document.createElement(p);
var e=b.document.createElementNS(j,C);
var d=e.style;
d.cursor=o;
d.color=o;
d.overflow=k;
d.maxWidth=x;
d.padding=F;
for(var f in this.__iK){e.style[f]=o;
}e.setAttribute(A,y);
c.appendChild(e);
}else{var c=b.document.createElement(p);
qx.bom.element.Style.setStyles(c,this.__iO(a));
}
if(content){this.setValue(c,content);
}return c;
},setValue:function(M,N){N=N||l;

if(M.useHtml){M.innerHTML=N;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){M.firstChild.setAttribute(m,N);
}else{qx.bom.element.Attribute.set(M,n,N);
}},getValue:function(O){if(O.useHtml){return O.innerHTML;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){return O.firstChild.getAttribute(m)||l;
}else{return qx.bom.element.Attribute.get(O,n);
}},getHtmlSize:function(content,ba,bb){var bc=this._htmlElement||this.__iM();
bc.style.width=bb!==undefined?bb+B:g;
bc.innerHTML=content;
return this.__iP(bc,ba);
},getTextSize:function(G,H){var I=this._textElement||this.__iL();

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){I.firstChild.setAttribute(m,G);
}else{qx.bom.element.Attribute.set(I,n,G);
}return this.__iP(I,H);
},__iP:function(U,V){var W=this.__iK;

if(!V){V={};
}
for(var X in W){U.style[X]=V[X]||l;
}var Y=qx.bom.element.Dimension.getSize(U);

if(qx.core.Variant.isSet(h,z)){if(!qx.bom.client.Platform.WIN){Y.width++;
}}return Y;
}}});
})();
(function(){var h="0px",g="mshtml",f="qx.client",e="qx.bom.element.Dimension",d="paddingRight",c="paddingLeft",b="paddingTop",a="paddingBottom";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"gecko":function(i){if(i.getBoundingClientRect){var j=i.getBoundingClientRect();
return Math.round(j.right)-Math.round(j.left);
}else{return i.offsetWidth;
}},"default":function(w){return w.offsetWidth;
}}),getHeight:qx.core.Variant.select(f,{"gecko":function(t){if(t.getBoundingClientRect){var u=t.getBoundingClientRect();
return Math.round(u.bottom)-Math.round(u.top);
}else{return t.offsetHeight;
}},"default":function(s){return s.offsetHeight;
}}),getSize:function(r){return {width:this.getWidth(r),height:this.getHeight(r)};
},__hA:{visible:true,hidden:true},getContentWidth:function(x){var z=qx.bom.element.Style;
var A=qx.bom.element.Overflow.getX(x);
var B=parseInt(z.get(x,c)||h,10);
var E=parseInt(z.get(x,d)||h,10);

if(this.__hA[A]){var D=x.clientWidth;

if(D>0){D=D-B-E;
}return D;
}else{if(x.clientWidth>=x.scrollWidth){return Math.max(x.clientWidth,x.scrollWidth)-B-E;
}else{var C=x.scrollWidth-B;
var y=qx.bom.client.Engine;

if(y.NAME===g&&y.VERSION==6){C-=E;
}return C;
}}},getContentHeight:function(k){var m=qx.bom.element.Style;
var o=qx.bom.element.Overflow.getY(k);
var p=parseInt(m.get(k,b)||h,10);
var n=parseInt(m.get(k,a)||h,10);

if(this.__hA[o]){return k.clientHeight-p-n;
}else{if(k.clientHeight>=k.scrollHeight){return Math.max(k.clientHeight,k.scrollHeight)-p-n;
}else{var q=k.scrollHeight-p;
var l=qx.bom.client.Engine;

if(l.NAME===g&&l.VERSION==6){q-=n;
}return q;
}}},getContentSize:function(v){return {width:this.getContentWidth(v),height:this.getContentHeight(v)};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(d){return arguments.length==1;
},getEnabled:function(){},setRequired:function(f){return arguments.length==1;
},getRequired:function(){},setValid:function(c){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(g){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(e){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__re",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__re=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__re:null,_applyBlockerColor:function(i,j){this.__re.setColor(i);
},_applyBlockerOpacity:function(g,h){this.__re.setOpacity(g);
},block:function(){this.__re.block();
},isBlocked:function(){return this.__re.isBlocked();
},unblock:function(){this.__re.unblock();
},forceUnblock:function(){this.__re.forceUnblock();
},blockContent:function(k){this.__re.blockContent(k);
},isContentBlocked:function(){return this.__re.isContentBlocked();
},unblockContent:function(){this.__re.unblockContent();
},forceUnblockContent:function(){this.__re.forceUnblockContent();
},getBlocker:function(){return this.__re;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__no",b="__np",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__no:null,__np:null,getWindowManager:function(){if(!this.__np){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__np;
},supportsMaximize:function(){return true;
},setWindowManager:function(n){if(this.__np){this.__np.setDesktop(null);
}n.setDesktop(this);
this.__np=n;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(j,k){this.getWindowManager().changeActiveWindow(j,k);
this.getWindowManager().updateStack();
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(p){if(qx.Class.isDefined(i)&&p instanceof qx.ui.window.Window){this._addWindow(p);
}},_addWindow:function(l){if(!qx.lang.Array.contains(this.getWindows(),l)){this.getWindows().push(l);
l.addListener(f,this._onChangeActive,this);
l.addListener(h,this._onChangeModal,this);
l.addListener(g,this._onChangeVisibility,this);
}
if(l.getActive()){this.setActiveWindow(l);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._removeWindow(o);
}},_removeWindow:function(m){qx.lang.Array.remove(this.getWindows(),m);
m.removeListener(f,this._onChangeActive,this);
m.removeListener(h,this._onChangeModal,this);
m.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__no){this.__no=[];
}return this.__no;
}},destruct:function(){this._disposeArray(c);
this._disposeObjects(b);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__mn:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(u,v){},"default":function(y,z){var A=qx.bom.Stylesheet;
var B=this.__mn;

if(!B){this.__mn=B=A.createElement();
}A.removeAllRules(B);

if(y){A.addRule(B,a,qx.bom.element.Cursor.compile(y).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(q,r){if(q){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(w,x){if(x===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(w===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__mn=null;
},defer:function(s,t){qx.ui.core.MChildrenHandling.remap(t);
}});
})();
(function(){var q="resize",p="position",o="0px",n="webkit",m="paddingLeft",l="$$widget",k="qx.ui.root.Application",j="hidden",i="qx.client",h="div",d="paddingTop",g="100%",f="absolute";
qx.Class.define(k,{extend:qx.ui.root.Abstract,construct:function(A){this.__rf=qx.dom.Node.getWindow(A);
this.__rg=A;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__rf,q,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__rf:null,__rg:null,_createContainerElement:function(){var v=this.__rg;
if(qx.core.Variant.isSet(i,n)){if(!v.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var z=v.documentElement.style;
var w=v.body.style;
z.overflow=w.overflow=j;
z.padding=z.margin=w.padding=w.margin=o;
z.width=z.height=w.width=w.height=g;
var y=v.createElement(h);
v.body.appendChild(y);
var x=new qx.html.Root(y);
x.setStyle(p,f);
x.setAttribute(l,this.toHashCode());
return x;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var r=qx.bom.Viewport.getWidth(this.__rf);
var s=qx.bom.Viewport.getHeight(this.__rf);
return {minWidth:r,width:r,maxWidth:r,minHeight:s,height:s,maxHeight:s};
},_applyPadding:function(t,u,name){if(t&&(name==d||name==m)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,t,u,name);
},_applyDecorator:function(a,b){qx.ui.root.Abstract.prototype._applyDecorator.call(this,a,b);

if(!a){return;
}var c=this.getDecoratorElement().getInsets();

if(c.left||c.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__rf=this.__rg=null;
}});
})();
(function(){var z="zIndex",y="px",x="keydown",w="deactivate",v="resize",u="keypress",t="keyup",s="backgroundColor",r="_applyOpacity",q="Boolean",L="opacity",K="interval",J="Tab",I="Color",H="qx.ui.root.Page",G="__oW",F="__pb",E="__oY",D="Number",C="qx.ui.core.Blocker",A="qx.ui.root.Application",B="_applyColor";
qx.Class.define(C,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this._widget=c;
this._isPageRoot=(qx.Class.isDefined(H)&&c instanceof qx.ui.root.Page);

if(this._isPageRoot){c.addListener(v,this.__pc,this);
}
if(qx.Class.isDefined(A)&&c instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__oT=[];
this.__oU=[];
this.__oV=[];
},properties:{color:{check:I,init:null,nullable:true,apply:B,themeable:true},opacity:{check:D,init:1,apply:r,themeable:true},keepBlockerActive:{check:q,init:false}},members:{__oW:null,__oX:0,__oY:null,__oV:null,__oT:null,__oU:null,__pa:null,__pb:null,_isPageRoot:false,_widget:null,__pc:function(e){var h=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:h.width,height:h.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:h.width,height:h.height});
}},_applyColor:function(Q,R){var S=qx.theme.manager.Color.getInstance().resolve(Q);
this.__pd(s,S);
},_applyOpacity:function(j,k){this.__pd(L,j);
},__pd:function(n,o){var p=[];
this.__oW&&p.push(this.__oW);
this.__oY&&p.push(this.__oY);

for(var i=0;i<p.length;i++){p[i].setStyle(n,o);
}},_backupActiveWidget:function(){var O=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__oT.push(O.getActive());
this.__oU.push(O.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var g=this.__oT.length;

if(g>0){var f=this.__oT[g-1];

if(f){qx.bom.Element.activate(f);
}this.__oT.pop();
}var d=this.__oU.length;

if(d>0){var f=this.__oU[d-1];

if(f){qx.bom.Element.focus(this.__oU[d-1]);
}this.__oU.pop();
}},__pe:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__oW){this.__oW=this.__pe();
this.__oW.setStyle(z,15);
this._widget.getContainerElement().add(this.__oW);
this.__oW.exclude();
}return this.__oW;
},block:function(){this.__oX++;

if(this.__oX<2){this._backupActiveWidget();
var N=this.getBlockerElement();
N.include();
N.activate();
N.addListener(w,this.__pj,this);
N.addListener(u,this.__pi,this);
N.addListener(x,this.__pi,this);
N.addListener(t,this.__pi,this);
}},isBlocked:function(){return this.__oX>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__oX--;

if(this.__oX<1){this.__pf();
this.__oX=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__oX=0;
this.__pf();
},__pf:function(){this._restoreActiveWidget();
var P=this.getBlockerElement();
P.removeListener(w,this.__pj,this);
P.removeListener(u,this.__pi,this);
P.removeListener(x,this.__pi,this);
P.removeListener(t,this.__pi,this);
P.exclude();
},getContentBlockerElement:function(){if(!this.__oY){this.__oY=this.__pe();
this._widget.getContentElement().add(this.__oY);
this.__oY.exclude();
}return this.__oY;
},blockContent:function(T){var U=this.getContentBlockerElement();
U.setStyle(z,T);
this.__oV.push(T);

if(this.__oV.length<2){U.include();

if(this._isPageRoot){if(!this.__pb){this.__pb=new qx.event.Timer(300);
this.__pb.addListener(K,this.__ph,this);
}this.__pb.start();
this.__ph();
}}},isContentBlocked:function(){return this.__oV.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oV.pop();
var l=this.__oV[this.__oV.length-1];
var m=this.getContentBlockerElement();
m.setStyle(z,l);

if(this.__oV.length<1){this.__pg();
this.__oV=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oV=[];
var M=this.getContentBlockerElement();
M.setStyle(z,null);
this.__pg();
},__pg:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__pb.stop();
}},__ph:function(){var a=this._widget.getContainerElement().getDomElement();
var b=qx.dom.Node.getDocument(a);
this.getContentBlockerElement().setStyles({height:b.documentElement.scrollHeight+y,width:b.documentElement.scrollWidth+y});
},__pi:function(e){if(e.getKeyIdentifier()==J){e.stop();
}},__pj:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(v,this.__pc,this);
}this._disposeObjects(E,G,F);
this.__pa=this.__oT=this.__oU=this._widget=this.__oV=null;
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
this.addListener(s,this.__qi,this);
this.addListener(n,this.__qi,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__qi:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var m="keypress",k="focusout",j="__bH",h="activate",g="Tab",f="singleton",d="deactivate",c="focusin",b="qx.ui.core.FocusHandler";
qx.Class.define(b,{extend:qx.core.Object,type:f,construct:function(){qx.core.Object.call(this);
this.__bH={};
},members:{__bH:null,__bI:null,__bJ:null,__bK:null,connectTo:function(bf){bf.addListener(m,this.__bL,this);
bf.addListener(c,this._onFocusIn,this,true);
bf.addListener(k,this._onFocusOut,this,true);
bf.addListener(h,this._onActivate,this,true);
bf.addListener(d,this._onDeactivate,this,true);
},addRoot:function(G){this.__bH[G.$$hash]=G;
},removeRoot:function(a){delete this.__bH[a.$$hash];
},getActiveWidget:function(){return this.__bI;
},isActive:function(bh){return this.__bI==bh;
},getFocusedWidget:function(){return this.__bJ;
},isFocused:function(bi){return this.__bJ==bi;
},isFocusRoot:function(S){return !!this.__bH[S.$$hash];
},_onActivate:function(e){var K=e.getTarget();
this.__bI=K;
var J=this.__bM(K);

if(J!=this.__bK){this.__bK=J;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__bI==u){this.__bI=null;
}},_onFocusIn:function(e){var bg=e.getTarget();

if(bg!=this.__bJ){this.__bJ=bg;
bg.visualizeFocus();
}},_onFocusOut:function(e){var R=e.getTarget();

if(R==this.__bJ){this.__bJ=null;
R.visualizeBlur();
}},__bL:function(e){if(e.getKeyIdentifier()!=g){return;
}
if(!this.__bK){return;
}e.stopPropagation();
e.preventDefault();
var H=this.__bJ;

if(!e.isShiftPressed()){var I=H?this.__bQ(H):this.__bO();
}else{var I=H?this.__bR(H):this.__bP();
}if(I){I.tabFocus();
}},__bM:function(L){var M=this.__bH;

while(L){if(M[L.$$hash]){return L;
}L=L.getLayoutParent();
}return null;
},__bN:function(v,w){if(v===w){return 0;
}var y=v.getTabIndex()||0;
var x=w.getTabIndex()||0;

if(y!=x){return y-x;
}var D=v.getContainerElement().getDomElement();
var C=w.getContainerElement().getDomElement();
var B=qx.bom.element.Location;
var A=B.get(D);
var z=B.get(C);
if(A.top!=z.top){return A.top-z.top;
}if(A.left!=z.left){return A.left-z.left;
}var E=v.getZIndex();
var F=w.getZIndex();

if(E!=F){return E-F;
}return 0;
},__bO:function(){return this.__bU(this.__bK,null);
},__bP:function(){return this.__bV(this.__bK,null);
},__bQ:function(T){var U=this.__bK;

if(U==T){return this.__bO();
}
while(T&&T.getAnonymous()){T=T.getLayoutParent();
}
if(T==null){return [];
}var V=[];
this.__bS(U,T,V);
V.sort(this.__bN);
var W=V.length;
return W>0?V[0]:this.__bO();
},__bR:function(X){var Y=this.__bK;

if(Y==X){return this.__bP();
}
while(X&&X.getAnonymous()){X=X.getLayoutParent();
}
if(X==null){return [];
}var ba=[];
this.__bT(Y,X,ba);
ba.sort(this.__bN);
var bb=ba.length;
return bb>0?ba[bb-1]:this.__bP();
},__bS:function(parent,n,o){var p=parent.getLayoutChildren();
var q;

for(var i=0,l=p.length;i<l;i++){q=p[i];
if(!(q instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(q)&&q.isEnabled()&&q.isVisible()){if(q.isTabable()&&this.__bN(n,q)<0){o.push(q);
}this.__bS(q,n,o);
}}},__bT:function(parent,N,O){var P=parent.getLayoutChildren();
var Q;

for(var i=0,l=P.length;i<l;i++){Q=P[i];
if(!(Q instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(Q)&&Q.isEnabled()&&Q.isVisible()){if(Q.isTabable()&&this.__bN(N,Q)>0){O.push(Q);
}this.__bT(Q,N,O);
}}},__bU:function(parent,r){var s=parent.getLayoutChildren();
var t;

for(var i=0,l=s.length;i<l;i++){t=s[i];
if(!(t instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(t)&&t.isEnabled()&&t.isVisible()){if(t.isTabable()){if(r==null||this.__bN(t,r)<0){r=t;
}}r=this.__bU(t,r);
}}return r;
},__bV:function(parent,bc){var bd=parent.getLayoutChildren();
var be;

for(var i=0,l=bd.length;i<l;i++){be=bd[i];
if(!(be instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(be)&&be.isEnabled()&&be.isVisible()){if(be.isTabable()){if(bc==null||this.__bN(be,bc)>0){bc=be;
}}bc=this.__bV(be,bc);
}}return bc;
}},destruct:function(){this._disposeMap(j);
this.__bJ=this.__bI=this.__bK=null;
}});
})();
(function(){var o="qx.client",n="head",m="text/css",l="stylesheet",k="}",j='@import "',h="{",g='";',f="qx.bom.Stylesheet",e="link",d="style";
qx.Class.define(f,{statics:{includeFile:function(p,q){if(!q){q=document;
}var r=q.createElement(e);
r.type=m;
r.rel=l;
r.href=qx.util.ResourceManager.getInstance().toUri(p);
var s=q.getElementsByTagName(n)[0];
s.appendChild(r);
},createElement:qx.core.Variant.select(o,{"mshtml":function(x){var y=document.createStyleSheet();

if(x){y.cssText=x;
}return y;
},"default":function(z){var A=document.createElement(d);
A.type=m;

if(z){A.appendChild(document.createTextNode(z));
}document.getElementsByTagName(n)[0].appendChild(A);
return A.sheet;
}}),addRule:qx.core.Variant.select(o,{"mshtml":function(N,O,P){N.addRule(O,P);
},"default":function(F,G,H){F.insertRule(G+h+H+k,F.cssRules.length);
}}),removeRule:qx.core.Variant.select(o,{"mshtml":function(B,C){var D=B.rules;
var E=D.length;

for(var i=E-1;i>=0;--i){if(D[i].selectorText==C){B.removeRule(i);
}}},"default":function(S,T){var U=S.cssRules;
var V=U.length;

for(var i=V-1;i>=0;--i){if(U[i].selectorText==T){S.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(o,{"mshtml":function(a){var b=a.rules;
var c=b.length;

for(var i=c-1;i>=0;i--){a.removeRule(i);
}},"default":function(W){var X=W.cssRules;
var Y=X.length;

for(var i=Y-1;i>=0;i--){W.deleteRule(i);
}}}),addImport:qx.core.Variant.select(o,{"mshtml":function(I,J){I.addImport(J);
},"default":function(Q,R){Q.insertRule(j+R+g,Q.cssRules.length);
}}),removeImport:qx.core.Variant.select(o,{"mshtml":function(bd,be){var bf=bd.imports;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].href==be){bd.removeImport(i);
}}},"default":function(t,u){var v=t.cssRules;
var w=v.length;

for(var i=w-1;i>=0;i--){if(v[i].href==u){t.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(o,{"mshtml":function(K){var L=K.imports;
var M=L.length;

for(var i=M-1;i>=0;i--){K.removeImport(i);
}},"default":function(ba){var bb=ba.cssRules;
var bc=bb.length;

for(var i=bc-1;i>=0;i--){if(bb[i].type==bb[i].IMPORT_RULE){ba.deleteRule(i);
}}}})}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(v,w){var H=this._getLayoutChildren();
var z,G,E;
var J,top,x,y,B,A;
var F,D,I,C;

for(var i=0,l=H.length;i<l;i++){z=H[i];
G=z.getSizeHint();
E=z.getLayoutProperties();
F=z.getMarginTop();
D=z.getMarginRight();
I=z.getMarginBottom();
C=z.getMarginLeft();
J=E.left!=null?E.left:E.edge;

if(qx.lang.Type.isString(J)){J=Math.round(parseFloat(J)*v/100);
}x=E.right!=null?E.right:E.edge;

if(qx.lang.Type.isString(x)){x=Math.round(parseFloat(x)*v/100);
}top=E.top!=null?E.top:E.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*w/100);
}y=E.bottom!=null?E.bottom:E.edge;

if(qx.lang.Type.isString(y)){y=Math.round(parseFloat(y)*w/100);
}if(J!=null&&x!=null){B=v-J-x-C-D;
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}J+=C;
}else{B=E.width;

if(B==null){B=G.width;
}else{B=Math.round(parseFloat(B)*v/100);
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}}
if(x!=null){J=v-B-x-D-C;
}else if(J==null){J=C;
}else{J+=C;
}}if(top!=null&&y!=null){A=w-top-y-F-I;
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}top+=F;
}else{A=E.height;

if(A==null){A=G.height;
}else{A=Math.round(parseFloat(A)*w/100);
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}}
if(y!=null){top=w-A-y-I-F;
}else if(top==null){top=F;
}else{top+=F;
}}z.renderLayout(J,top,B,A);
}},_computeSizeHint:function(){var t=0,s=0;
var q=0,o=0;
var m,k;
var j,g;
var c=this._getLayoutChildren();
var f,r,e;
var u,top,d,h;

for(var i=0,l=c.length;i<l;i++){f=c[i];
r=f.getLayoutProperties();
e=f.getSizeHint();
var p=f.getMarginLeft()+f.getMarginRight();
var n=f.getMarginTop()+f.getMarginBottom();
m=e.width+p;
k=e.minWidth+p;
u=r.left!=null?r.left:r.edge;

if(u&&typeof u===b){m+=u;
k+=u;
}d=r.right!=null?r.right:r.edge;

if(d&&typeof d===b){m+=d;
k+=d;
}t=Math.max(t,m);
s=Math.max(s,k);
j=e.height+n;
g=e.minHeight+n;
top=r.top!=null?r.top:r.edge;

if(top&&typeof top===b){j+=top;
g+=top;
}h=r.bottom!=null?r.bottom:r.edge;

if(h&&typeof h===b){j+=h;
g+=h;
}q=Math.max(q,j);
o=Math.max(o,g);
}return {width:t,minWidth:s,height:q,minHeight:o};
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
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var X="scrollbar-y",W="scrollbar-x",V="pane",U="auto",T="corner",S="on",R="changeVisibility",Q="scroll",P="_computeScrollbars",O="off",H="scrollY",N="qx.ui.core.scroll.AbstractScrollArea",K="abstract",F="update",E="scrollX",J="mousewheel",I="scrollbarY",L="scrollbarX",D="horizontal",M="scrollarea",G="vertical";
qx.Class.define(N,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:K,construct:function(){qx.ui.core.Widget.call(this);
var a=new qx.ui.layout.Grid();
a.setColumnFlex(0,1);
a.setRowFlex(0,1);
this._setLayout(a);
this.addListener(J,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:M},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[U,S,O],init:U,themeable:true,apply:P},scrollbarY:{check:[U,S,O],init:U,themeable:true,apply:P},scrollbar:{group:[L,I]}},members:{_createChildControlImpl:function(z){var A;

switch(z){case V:A=new qx.ui.core.scroll.ScrollPane();
A.addListener(F,this._computeScrollbars,this);
A.addListener(E,this._onScrollPaneX,this);
A.addListener(H,this._onScrollPaneY,this);
this._add(A,{row:0,column:0});
break;
case W:A=this._createScrollBar(D);
A.setMinWidth(0);
A.exclude();
A.addListener(Q,this._onScrollBarX,this);
A.addListener(R,this._onChangeScrollbarXVisibility,this);
this._add(A,{row:1,column:0});
break;
case X:A=this._createScrollBar(G);
A.setMinHeight(0);
A.exclude();
A.addListener(Q,this._onScrollBarY,this);
A.addListener(R,this._onChangeScrollbarYVisibility,this);
this._add(A,{row:0,column:1});
break;
case T:A=new qx.ui.core.Widget();
A.setWidth(0);
A.setHeight(0);
A.exclude();
this._add(A,{row:1,column:1});
break;
}return A||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,z);
},getPaneSize:function(){return this.getChildControl(V).getInnerSize();
},getItemTop:function(v){return this.getChildControl(V).getItemTop(v);
},getItemBottom:function(Y){return this.getChildControl(V).getItemBottom(Y);
},getItemLeft:function(w){return this.getChildControl(V).getItemLeft(w);
},getItemRight:function(t){return this.getChildControl(V).getItemRight(t);
},scrollToX:function(ba){qx.ui.core.queue.Manager.flush();
this.getChildControl(W).scrollTo(ba);
},scrollByX:function(x){qx.ui.core.queue.Manager.flush();
this.getChildControl(W).scrollBy(x);
},getScrollX:function(){var f=this.getChildControl(W,true);
return f?f.getPosition():0;
},scrollToY:function(y){qx.ui.core.queue.Manager.flush();
this.getChildControl(X).scrollTo(y);
},scrollByY:function(u){qx.ui.core.queue.Manager.flush();
this.getChildControl(X).scrollBy(u);
},getScrollY:function(){var g=this.getChildControl(X,true);
return g?g.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(V).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(V).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var c=this._isChildControlVisible(W);
var d=this._isChildControlVisible(X);
var b=(d)?this.getChildControl(X,true):(c?this.getChildControl(W,true):null);

if(b){b.scrollBySteps(e.getWheelDelta());
e.stop();
}},_onChangeScrollbarXVisibility:function(e){var B=this._isChildControlVisible(W);
var C=this._isChildControlVisible(X);

if(!B){this.scrollToX(0);
}B&&C?this._showChildControl(T):this._excludeChildControl(T);
},_onChangeScrollbarYVisibility:function(e){var h=this._isChildControlVisible(W);
var i=this._isChildControlVisible(X);

if(!i){this.scrollToY(0);
}h&&i?this._showChildControl(T):this._excludeChildControl(T);
},_computeScrollbars:function(){var p=this.getChildControl(V);
var content=p.getChildren()[0];

if(!content){this._excludeChildControl(W);
this._excludeChildControl(X);
return;
}var j=this.getInnerSize();
var o=p.getInnerSize();
var m=p.getScrollSize();
if(!o||!m){return;
}var q=this.getScrollbarX();
var r=this.getScrollbarY();

if(q===U&&r===U){var n=m.width>j.width;
var s=m.height>j.height;
if((n||s)&&!(n&&s)){if(n){s=m.height>o.height;
}else if(s){n=m.width>o.width;
}}}else{var n=q===S;
var s=r===S;
if(m.width>(n?o.width:j.width)&&q===U){n=true;
}
if(m.height>(n?o.height:j.height)&&r===U){s=true;
}}if(n){var l=this.getChildControl(W);
l.show();
l.setMaximum(Math.max(0,m.width-o.width));
l.setKnobFactor((m.width===0)?0:o.width/m.width);
}else{this._excludeChildControl(W);
}
if(s){var k=this.getChildControl(X);
k.show();
k.setMaximum(Math.max(0,m.height-o.height));
k.setKnobFactor((m.height===0)?0:o.height/m.height);
}else{this._excludeChildControl(X);
}}}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__ks:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__kt:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__kt[name];
s[t]();
}else{var u=this.__ks[name];
s[u](q);
}}}});
})();
(function(){var b="pane",a="qx.ui.container.Scroll";
qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,include:[qx.ui.core.MContentPadding],construct:function(content){qx.ui.core.scroll.AbstractScrollArea.call(this);

if(content){this.add(content);
}},members:{add:function(d){this.getChildControl(b).add(d);
},remove:function(c){this.getChildControl(b).remove(c);
},getChildren:function(){return this.getChildControl(b).getChildren();
},_getContentPaddingTarget:function(){return this.getChildControl(b);
}}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(d){this.assertNumber(d);
},scrollBy:function(c){this.assertNumber(c);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="qx.client",d="0",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="mousemove",w="_applyMaximum",v="__pO",u="_applyOrientation",t="appear",s="opera",r="PositiveInteger",q="mshtml",o="mouseup",p="Number",m="_applyPosition",n="scrollbar",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(Q){qx.ui.core.Widget.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if(qx.core.Variant.isSet(f,s)){this.addListener(t,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(Q!=null){this.setOrientation(Q);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[k,h],init:k,apply:u},maximum:{check:r,apply:w,init:100},position:{check:p,init:0,apply:m,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__pN:null,__pO:null,_getScrollPaneElement:function(){if(!this.__pO){this.__pO=new qx.html.Element();
}return this.__pO;
},renderLayout:function(L,top,M,N){var O=qx.ui.core.Widget.prototype.renderLayout.call(this,L,top,M,N);
this._updateScrollBar();
return O;
},_getContentHint:function(){var K=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__pN?100:K,maxWidth:this.__pN?null:K,minWidth:this.__pN?null:K,height:this.__pN?K:100,maxHeight:this.__pN?K:null,minHeight:this.__pN?K:null};
},_applyEnabled:function(A,B){qx.ui.core.Widget.prototype._applyEnabled.call(this,A,B);
this._updateScrollBar();
},_applyMaximum:function(C){this._updateScrollBar();
},_applyPosition:function(P){var content=this.getContentElement();

if(this.__pN){content.scrollToX(P);
}else{content.scrollToY(P);
}},_applyOrientation:function(U,V){var W=this.__pN=U===k;
this.set({allowGrowX:W,allowShrinkX:W,allowGrowY:!W,allowShrinkY:!W});

if(W){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:W?i:c,overflowY:W?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var G=this.__pN;
var H=this.getBounds();

if(!H){return;
}
if(this.isEnabled()){var I=G?H.width:H.height;
var F=this.getMaximum()+I;
}else{F=0;
}if(qx.core.Variant.isSet(f,q)){var H=this.getBounds();
this.getContentElement().setStyles({left:G?d:g,top:G?g:d,width:(G?H.width:H.width+1)+j,height:(G?H.height+1:H.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(G?F:1)+j,height:(G?1:F)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(R){this.setPosition(Math.max(0,Math.min(this.getMaximum(),R)));
},scrollBy:function(J){this.scrollTo(this.getPosition()+J);
},scrollBySteps:function(D){var E=this.getSingleStep();
this.scrollBy(D*E);
},_onScroll:function(e){var T=this.getContentElement();
var S=this.__pN?T.getScrollX():T.getScrollY();
this.setPosition(S);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(v);
}});
})();
(function(){var l="slider",k="horizontal",j="button-begin",i="vertical",h="button-end",g="Integer",f="execute",d="right",c="left",b="down",A="up",z="PositiveNumber",y="changeValue",x="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",w="_applyKnobFactor",v="knob",u="qx.ui.core.scroll.ScrollBar",t="resize",s="_applyOrientation",r="_applyPageStep",p="PositiveInteger",q="scroll",n="_applyPosition",o="scrollbar",m="_applyMaximum";
qx.Class.define(u,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(H){qx.ui.core.Widget.call(this);
this._createChildControl(j);
this._createChildControl(l).addListener(t,this._onResizeSlider,this);
this._createChildControl(h);
if(H!=null){this.setOrientation(H);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[k,i],init:k,apply:s},maximum:{check:p,apply:m,init:100},position:{check:x,init:0,apply:n,event:q},singleStep:{check:g,init:20},pageStep:{check:g,init:10,apply:r},knobFactor:{check:z,apply:w,nullable:true}},members:{__nm:2,_createChildControlImpl:function(I){var J;

switch(I){case l:J=new qx.ui.core.scroll.ScrollSlider();
J.setPageStep(100);
J.setFocusable(false);
J.addListener(y,this._onChangeSliderValue,this);
this._add(J,{flex:1});
break;
case j:J=new qx.ui.form.RepeatButton();
J.setFocusable(false);
J.addListener(f,this._onExecuteBegin,this);
this._add(J);
break;
case h:J=new qx.ui.form.RepeatButton();
J.setFocusable(false);
J.addListener(f,this._onExecuteEnd,this);
this._add(J);
break;
}return J||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,I);
},_applyMaximum:function(M){this.getChildControl(l).setMaximum(M);
},_applyPosition:function(F){this.getChildControl(l).setValue(F);
},_applyKnobFactor:function(B){this.getChildControl(l).setKnobFactor(B);
},_applyPageStep:function(G){this.getChildControl(l).setPageStep(G);
},_applyOrientation:function(C,D){var E=this._getLayout();

if(E){E.dispose();
}if(C===k){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(i,k);
this.getChildControl(j).replaceState(A,c);
this.getChildControl(h).replaceState(b,d);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(k,i);
this.getChildControl(j).replaceState(c,A);
this.getChildControl(h).replaceState(d,b);
}this.getChildControl(l).setOrientation(C);
},scrollTo:function(N){this.getChildControl(l).slideTo(N);
},scrollBy:function(a){this.getChildControl(l).slideBy(a);
},scrollBySteps:function(K){var L=this.getSingleStep();
this.getChildControl(l).slideBy(K*L);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var O=this.getChildControl(l).getChildControl(v);
var R=O.getSizeHint();
var P=false;
var Q=this.getChildControl(l).getInnerSize();

if(this.getOrientation()==i){if(Q.height<R.minHeight+this.__nm){P=true;
}}else{if(Q.width<R.minWidth+this.__nm){P=true;
}}
if(P){O.exclude();
}else{O.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(c){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(e){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(b){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var o="qx.dynlocale",n="Boolean",m="changeLocale",l="changeInvalidMessage",k="on",j="String",i="invalid",h="",g="qx.ui.form.MForm",f="_applyValid",c="changeRequired",d="changeValid";
qx.Mixin.define(g,{construct:function(){if(qx.core.Variant.isSet(o,k)){qx.locale.Manager.getInstance().addListener(m,this.__fd,this);
}},properties:{valid:{check:n,init:true,apply:f,event:d},required:{check:n,init:false,event:c},invalidMessage:{check:j,init:h,event:l},requiredInvalidMessage:{check:j,nullable:true,event:l}},members:{_applyValid:function(p,q){p?this.removeState(i):this.addState(i);
},__fd:qx.core.Variant.select(o,{"on":function(e){var a=this.getInvalidMessage();

if(a&&a.translate){this.setInvalidMessage(a.translate());
}var b=this.getRequiredInvalidMessage();

if(b&&b.translate){this.setRequiredInvalidMessage(b.translate());
}},"off":null})},destruct:function(){if(qx.core.Variant.isSet(o,k)){qx.locale.Manager.getInstance().removeListener(m,this.__fd,this);
}}});
})();
(function(){var x="knob",w="horizontal",v="vertical",u="Integer",t="hovered",s="left",r="top",q="mouseup",p="pressed",o="px",bj="changeValue",bi="interval",bh="mousemove",bg="resize",bf="slider",be="mousedown",bd="PageUp",bc="mouseout",bb='qx.event.type.Data',ba="Left",E="Down",F="Up",C="dblclick",D="qx.ui.form.Slider",A="PageDown",B="mousewheel",y="_applyValue",z="_applyKnobFactor",G="End",H="height",O="Right",M="width",S="_applyOrientation",Q="Home",V="mouseover",U="floor",J="_applyMinimum",Y="click",X="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",W="keypress",I="ceil",K="losecapture",L="contextmenu",N="_applyMaximum",P="Number",R="changeMaximum",T="changeMinimum";
qx.Class.define(D,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(ca){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(W,this._onKeyPress);
this.addListener(B,this._onMouseWheel);
this.addListener(be,this._onMouseDown);
this.addListener(q,this._onMouseUp);
this.addListener(K,this._onMouseUp);
this.addListener(bg,this._onUpdate);
this.addListener(L,this._onStopEvent);
this.addListener(Y,this._onStopEvent);
this.addListener(C,this._onStopEvent);
if(ca!=null){this.setOrientation(ca);
}else{this.initOrientation();
}},events:{changeValue:bb},properties:{appearance:{refine:true,init:bf},focusable:{refine:true,init:true},orientation:{check:[w,v],init:w,apply:S},value:{check:X,init:0,apply:y,nullable:true},minimum:{check:u,init:0,apply:J,event:T},maximum:{check:u,init:100,apply:N,event:R},singleStep:{check:u,init:1},pageStep:{check:u,init:10},knobFactor:{check:P,apply:z,nullable:true}},members:{__nI:null,__nJ:null,__nK:null,__nL:null,__nM:null,__nN:null,__nO:null,__nP:null,__nQ:null,__nR:null,__nS:null,__nT:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bW){var bX;

switch(bW){case x:bX=new qx.ui.core.Widget();
bX.addListener(bg,this._onUpdate,this);
bX.addListener(V,this._onMouseOver);
bX.addListener(bc,this._onMouseOut);
this._add(bX);
break;
}return bX||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bW);
},_onMouseOver:function(e){this.addState(t);
},_onMouseOut:function(e){this.removeState(t);
},_onMouseWheel:function(e){var m=e.getWheelDelta()>0?1:-1;
this.slideBy(m*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bM=this.getOrientation()===w;
var bL=bM?ba:F;
var forward=bM?O:E;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bL:this.slideBack();
break;
case A:this.slidePageForward();
break;
case bd:this.slidePageBack();
break;
case Q:this.slideToBegin();
break;
case G:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__nL){return;
}var i=this.__nV;
var g=this.getChildControl(x);
var h=i?s:r;
var k=i?e.getDocumentLeft():e.getDocumentTop();
var l=this.__nI=qx.bom.element.Location.get(this.getContentElement().getDomElement())[h];
var j=this.__nJ=qx.bom.element.Location.get(g.getContainerElement().getDomElement())[h];

if(e.getTarget()===g){this.__nL=true;

if(!this.__nR){this.__nR=new qx.event.Timer(100);
this.__nR.addListener(bi,this._fireValue,this);
}this.__nR.start();
this.__nM=k+l-j;
g.addState(p);
}else{this.__nN=true;
this.__nO=k<=j?-1:1;
this.__nW(e);
this._onInterval();
if(!this.__nQ){this.__nQ=new qx.event.Timer(100);
this.__nQ.addListener(bi,this._onInterval,this);
}this.__nQ.start();
}this.addListener(bh,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__nL){this.releaseCapture();
delete this.__nL;
this.__nR.stop();
this._fireValue();
delete this.__nM;
this.getChildControl(x).removeState(p);
if(e.getType()===q){var bJ;
var bK;
var bI;

if(this.__nV){bJ=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__nI);
bI=qx.bom.element.Location.get(this.getContentElement().getDomElement())[r];
bK=e.getDocumentTop()-(bI+this.getChildControl(x).getBounds().top);
}else{bJ=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__nI);
bI=qx.bom.element.Location.get(this.getContentElement().getDomElement())[s];
bK=e.getDocumentLeft()-(bI+this.getChildControl(x).getBounds().left);
}
if(bK<0||bK>this.__nK||bJ<0||bJ>this.__nK){this.getChildControl(x).removeState(t);
}}}else if(this.__nN){this.__nQ.stop();
this.releaseCapture();
delete this.__nN;
delete this.__nO;
delete this.__nP;
}this.removeListener(bh,this._onMouseMove);
if(e.getType()===q){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__nL){var bO=this.__nV?e.getDocumentLeft():e.getDocumentTop();
var bN=bO-this.__nM;
this.slideTo(this._positionToValue(bN));
}else if(this.__nN){this.__nW(e);
}e.stopPropagation();
},_onInterval:function(e){var bU=this.getValue()+(this.__nO*this.getPageStep());
if(bU<this.getMinimum()){bU=this.getMinimum();
}else if(bU>this.getMaximum()){bU=this.getMaximum();
}var bV=this.__nO==-1;

if((bV&&bU<=this.__nP)||(!bV&&bU>=this.__nP)){bU=this.__nP;
}this.slideTo(bU);
},_onUpdate:function(e){var bQ=this.getInnerSize();
var bR=this.getChildControl(x).getBounds();
var bP=this.__nV?M:H;
this._updateKnobSize();
this.__nU=bQ[bP]-bR[bP];
this.__nK=bR[bP];
this._updateKnobPosition();
},__nV:false,__nU:0,__nW:function(e){var bk=this.__nV;
var br=bk?e.getDocumentLeft():e.getDocumentTop();
var bt=this.__nI;
var bl=this.__nJ;
var bv=this.__nK;
var bs=br-bt;

if(br>=bl){bs-=bv;
}var bp=this._positionToValue(bs);
var bm=this.getMinimum();
var bn=this.getMaximum();

if(bp<bm){bp=bm;
}else if(bp>bn){bp=bn;
}else{var bq=this.getValue();
var bo=this.getPageStep();
var bu=this.__nO<0?U:I;
bp=bq+(Math[bu]((bp-bq)/bo)*bo);
}if(this.__nP==null||(this.__nO==-1&&bp<=this.__nP)||(this.__nO==1&&bp>=this.__nP)){this.__nP=bp;
}},_positionToValue:function(by){var bz=this.__nU;
if(bz==null||bz==0){return 0;
}var bB=by/bz;

if(bB<0){bB=0;
}else if(bB>1){bB=1;
}var bA=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bA*bB);
},_valueToPosition:function(bC){var bD=this.__nU;

if(bD==null){return 0;
}var bE=this.getMaximum()-this.getMinimum();
if(bE==0){return 0;
}var bC=bC-this.getMinimum();
var bF=bC/bE;

if(bF<0){bF=0;
}else if(bF>1){bF=1;
}return Math.round(bD*bF);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bS){var bT=this.getChildControl(x).getContainerElement();

if(this.__nV){bT.setStyle(s,bS+o,true);
}else{bT.setStyle(r,bS+o,true);
}},_updateKnobSize:function(){var b=this.getKnobFactor();

if(b==null){return;
}var a=this.getInnerSize();

if(a==null){return;
}if(this.__nV){this.getChildControl(x).setWidth(Math.round(b*a.width));
}else{this.getChildControl(x).setHeight(Math.round(b*a.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(cf){this.slideTo(this.getValue()+cf);
},slideTo:function(n){if(n<this.getMinimum()){n=this.getMinimum();
}else if(n>this.getMaximum()){n=this.getMaximum();
}else{n=this.getMinimum()+Math.round((n-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(n);
},_applyOrientation:function(c,d){var f=this.getChildControl(x);
this.__nV=c===w;
if(this.__nV){this.removeState(v);
f.removeState(v);
this.addState(w);
f.addState(w);
f.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(w);
f.removeState(w);
this.addState(v);
f.addState(v);
f.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bG,bH){if(bG!=null){this._updateKnobSize();
}else{if(this.__nV){this.getChildControl(x).resetWidth();
}else{this.getChildControl(x).resetHeight();
}}},_applyValue:function(bw,bx){if(bw!=null){this._updateKnobPosition();

if(this.__nL){this.__nT=[bw,bx];
}else{this.fireEvent(bj,qx.event.type.Data,[bw,bx]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__nT){return;
}var bY=this.__nT;
this.__nT=null;
this.fireEvent(bj,qx.event.type.Data,bY);
},_applyMinimum:function(cb,cc){if(this.getValue()<cb){this.setValue(cb);
}this._updateKnobPosition();
},_applyMaximum:function(cd,ce){if(this.getValue()>cd){this.setValue(cd);
}this._updateKnobPosition();
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(g){qx.ui.form.Slider.call(this,g);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(e){var f=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){f.width=0;
}else{f.height=0;
}return f;
}}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__kk:null,__kl:false,__km:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__kl){this.__kl=false;
}else{this.__kl=true;
o.execute(this);
}}this.fireEvent(n);
},__kn:function(e){if(this.__kl){this.__kl=false;
return;
}this.__kl=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__km);
}
if(p!=null){this.__km=p.addListener(n,this.__kn,this);
}var t=this.__kk;

if(t==null){this.__kk=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__kk=null;
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__nb",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__nb=new qx.event.AcceleratingTimer();
this.__nb.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__nc:null,__nb:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__nd();
}this.removeState(m);
this.addState(n);
}},release:function(s){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__nc){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__ne();
},_applyEnabled:function(q,r){qx.ui.form.Button.prototype._applyEnabled.call(this,q,r);

if(!q){this.removeState(n);
this.removeState(m);
this.__ne();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__nb.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__nb.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__nd();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__nc){this.execute();
}}this.__ne();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__nc){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__ne();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__nd();
}},_onInterval:function(e){this.__nc=true;
this.fireEvent(b);
},__nd:function(){this.fireEvent(g);
this.__nc=false;
this.__nb.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__ne:function(){this.fireEvent(d);
this.__nb.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="__qg",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__qg=new qx.event.Timer(this.getInterval());
this.__qg.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__qg:null,__qh:null,start:function(){this.__qg.setInterval(this.getFirstInterval());
this.__qg.start();
},stop:function(){this.__qg.stop();
this.__qh=null;
},_onInterval:function(){this.__qg.stop();

if(this.__qh==null){this.__qh=this.getInterval();
}this.__qh=Math.max(this.getMinimum(),this.__qh-this.getDecrease());
this.__qg.setInterval(this.__qh);
this.__qg.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(bi,bj,bk){qx.ui.layout.Abstract.call(this);

if(bi){this.setSpacing(bi);
}
if(bj){this.setAlignX(bj);
}
if(bk){this.setSeparator(bk);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__fF:null,__fG:null,__fH:null,__fI:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__fJ:function(){var t=this._getLayoutChildren();
var length=t.length;
var q=false;
var o=this.__fF&&this.__fF.length!=length&&this.__fG&&this.__fF;
var r;
var p=o?this.__fF:new Array(length);
var s=o?this.__fG:new Array(length);
if(this.getReversed()){t=t.concat().reverse();
}for(var i=0;i<length;i++){r=t[i].getLayoutProperties();

if(r.width!=null){p[i]=parseFloat(r.width)/100;
}
if(r.flex!=null){s[i]=r.flex;
q=true;
}else{s[i]=0;
}}if(!o){this.__fF=p;
this.__fG=s;
}this.__fH=q;
this.__fI=t;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(u,v){if(this._invalidChildrenCache){this.__fJ();
}var B=this.__fI;
var length=B.length;
var K=qx.ui.layout.Util;
var J=this.getSpacing();
var N=this.getSeparator();

if(N){var y=K.computeHorizontalSeparatorGaps(B,J,N);
}else{var y=K.computeHorizontalGaps(B,J,true);
}var i,w,H,G;
var M=[];
var C=y;

for(i=0;i<length;i+=1){G=this.__fF[i];
H=G!=null?Math.floor((u-y)*G):B[i].getSizeHint().width;
M.push(H);
C+=H;
}if(this.__fH&&C!=u){var E={};
var I,L;

for(i=0;i<length;i+=1){I=this.__fG[i];

if(I>0){D=B[i].getSizeHint();
E[i]={min:D.minWidth,value:M[i],max:D.maxWidth,flex:I};
}}var z=K.computeFlexOffsets(E,u,C);

for(i in z){L=z[i].offset;
M[i]+=L;
C+=L;
}}var R=B[0].getMarginLeft();
if(C<u&&this.getAlignX()!=m){R=u-C;

if(this.getAlignX()===k){R=Math.round(R/2);
}}var D,top,x,H,A,P,F;
var J=this.getSpacing();
this._clearSeparators();
if(N){var O=qx.theme.manager.Decoration.getInstance().resolve(N).getInsets();
var Q=O.left+O.right;
}for(i=0;i<length;i+=1){w=B[i];
H=M[i];
D=w.getSizeHint();
P=w.getMarginTop();
F=w.getMarginBottom();
x=Math.max(D.minHeight,Math.min(v-P-F,D.maxHeight));
top=K.computeVerticalAlignOffset(w.getAlignY()||this.getAlignY(),x,v,P,F);
if(i>0){if(N){R+=A+J;
this._renderSeparator(N,{left:R,top:0,width:Q,height:v});
R+=Q+J+w.getMarginLeft();
}else{R+=K.collapseMargins(J,A,w.getMarginLeft());
}}w.renderLayout(R,top,H,x);
R+=H;
A=w.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__fJ();
}var Y=qx.ui.layout.Util;
var bh=this.__fI;
var S=0,ba=0,W=0;
var V=0,X=0;
var be,T,bg;
for(var i=0,l=bh.length;i<l;i+=1){be=bh[i];
T=be.getSizeHint();
ba+=T.width;
var bd=this.__fG[i];
var U=this.__fF[i];

if(bd){S+=T.minWidth;
}else if(U){W=Math.max(W,Math.round(T.minWidth/U));
}else{S+=T.width;
}bg=be.getMarginTop()+be.getMarginBottom();
if((T.height+bg)>X){X=T.height+bg;
}if((T.minHeight+bg)>V){V=T.minHeight+bg;
}}S+=W;
var bc=this.getSpacing();
var bf=this.getSeparator();

if(bf){var bb=Y.computeHorizontalSeparatorGaps(bh,bc,bf);
}else{var bb=Y.computeHorizontalGaps(bh,bc,true);
}return {minWidth:S+bb,width:ba+bb,minHeight:V,height:X};
}},destruct:function(){this.__fF=this.__fG=this.__fI=null;
}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(bc,bd,be){qx.ui.layout.Abstract.call(this);

if(bc){this.setSpacing(bc);
}
if(bd){this.setAlignY(bd);
}
if(be){this.setSeparator(be);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__eI:null,__eJ:null,__eK:null,__eL:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__eM:function(){var bk=this._getLayoutChildren();
var length=bk.length;
var bg=false;
var bf=this.__eI&&this.__eI.length!=length&&this.__eJ&&this.__eI;
var bi;
var bh=bf?this.__eI:new Array(length);
var bj=bf?this.__eJ:new Array(length);
if(this.getReversed()){bk=bk.concat().reverse();
}for(var i=0;i<length;i++){bi=bk[i].getLayoutProperties();

if(bi.height!=null){bh[i]=parseFloat(bi.height)/100;
}
if(bi.flex!=null){bj[i]=bi.flex;
bg=true;
}else{bj[i]=0;
}}if(!bf){this.__eI=bh;
this.__eJ=bj;
}this.__eK=bg;
this.__eL=bk;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(D,E){if(this._invalidChildrenCache){this.__eM();
}var L=this.__eL;
var length=L.length;
var V=qx.ui.layout.Util;
var U=this.getSpacing();
var Y=this.getSeparator();

if(Y){var I=V.computeVerticalSeparatorGaps(L,U,Y);
}else{var I=V.computeVerticalGaps(L,U,true);
}var i,G,H,P;
var Q=[];
var W=I;

for(i=0;i<length;i+=1){P=this.__eI[i];
H=P!=null?Math.floor((E-I)*P):L[i].getSizeHint().height;
Q.push(H);
W+=H;
}if(this.__eK&&W!=E){var N={};
var T,X;

for(i=0;i<length;i+=1){T=this.__eJ[i];

if(T>0){M=L[i].getSizeHint();
N[i]={min:M.minHeight,value:Q[i],max:M.maxHeight,flex:T};
}}var J=V.computeFlexOffsets(N,E,W);

for(i in J){X=J[i].offset;
Q[i]+=X;
W+=X;
}}var top=L[0].getMarginTop();
if(W<E&&this.getAlignY()!=m){top=E-W;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var M,bb,R,H,O,S,K;
this._clearSeparators();
if(Y){var ba=qx.theme.manager.Decoration.getInstance().resolve(Y).getInsets();
var F=ba.top+ba.bottom;
}for(i=0;i<length;i+=1){G=L[i];
H=Q[i];
M=G.getSizeHint();
S=G.getMarginLeft();
K=G.getMarginRight();
R=Math.max(M.minWidth,Math.min(D-S-K,M.maxWidth));
bb=V.computeHorizontalAlignOffset(G.getAlignX()||this.getAlignX(),R,D,S,K);
if(i>0){if(Y){top+=O+U;
this._renderSeparator(Y,{top:top,left:0,height:F,width:D});
top+=F+U+G.getMarginTop();
}else{top+=V.collapseMargins(U,O,G.getMarginTop());
}}G.renderLayout(bb,top,R,H);
top+=H;
O=G.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__eM();
}var u=qx.ui.layout.Util;
var C=this.__eL;
var q=0,t=0,s=0;
var o=0,v=0;
var z,p,B;
for(var i=0,l=C.length;i<l;i+=1){z=C[i];
p=z.getSizeHint();
t+=p.height;
var y=this.__eJ[i];
var r=this.__eI[i];

if(y){q+=p.minHeight;
}else if(r){s=Math.max(s,Math.round(p.minHeight/r));
}else{q+=p.height;
}B=z.getMarginLeft()+z.getMarginRight();
if((p.width+B)>v){v=p.width+B;
}if((p.minWidth+B)>o){o=p.minWidth+B;
}}q+=s;
var x=this.getSpacing();
var A=this.getSeparator();

if(A){var w=u.computeVerticalSeparatorGaps(C,x,A);
}else{var w=u.computeVerticalGaps(C,x,true);
}return {minHeight:q+w,height:t+w,minWidth:o,width:v};
}},destruct:function(){this.__eI=this.__eJ=this.__eL=null;
}});
})();
(function(){var cP="left",cO="top",cN="_applyLayoutChange",cM="hAlign",cL="flex",cK="vAlign",cJ="Integer",cI="minWidth",cH="width",cG="minHeight",cD="qx.ui.layout.Grid",cF="height",cE="maxHeight",cC="maxWidth";
qx.Class.define(cD,{extend:qx.ui.layout.Abstract,construct:function(cS,cT){qx.ui.layout.Abstract.call(this);
this.__hO=[];
this.__hP=[];

if(cS){this.setSpacingX(cS);
}
if(cT){this.setSpacingY(cT);
}},properties:{spacingX:{check:cJ,init:0,apply:cN},spacingY:{check:cJ,init:0,apply:cN}},members:{__hQ:null,__hO:null,__hP:null,__hR:null,__hS:null,__hT:null,__hU:null,__hV:null,__hW:null,verifyLayoutProperty:null,__hX:function(){var bv=[];
var bu=[];
var bw=[];
var bs=-1;
var br=-1;
var by=this._getLayoutChildren();

for(var i=0,l=by.length;i<l;i++){var bt=by[i];
var bx=bt.getLayoutProperties();
var bz=bx.row;
var bq=bx.column;
bx.colSpan=bx.colSpan||1;
bx.rowSpan=bx.rowSpan||1;
if(bz==null||bq==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+bt+"' must be defined!");
}
if(bv[bz]&&bv[bz][bq]){throw new Error("Cannot add widget '"+bt+"'!. "+"There is already a widget '"+bv[bz][bq]+"' in this cell ("+bz+", "+bq+")");
}
for(var x=bq;x<bq+bx.colSpan;x++){for(var y=bz;y<bz+bx.rowSpan;y++){if(bv[y]==undefined){bv[y]=[];
}bv[y][x]=bt;
br=Math.max(br,x);
bs=Math.max(bs,y);
}}
if(bx.rowSpan>1){bw.push(bt);
}
if(bx.colSpan>1){bu.push(bt);
}}for(var y=0;y<=bs;y++){if(bv[y]==undefined){bv[y]=[];
}}this.__hQ=bv;
this.__hR=bu;
this.__hS=bw;
this.__hT=bs;
this.__hU=br;
this.__hV=null;
this.__hW=null;
delete this._invalidChildrenCache;
},_setRowData:function(cd,ce,cf){var cg=this.__hO[cd];

if(!cg){this.__hO[cd]={};
this.__hO[cd][ce]=cf;
}else{cg[ce]=cf;
}},_setColumnData:function(w,z,A){var B=this.__hP[w];

if(!B){this.__hP[w]={};
this.__hP[w][z]=A;
}else{B[z]=A;
}},setSpacing:function(cl){this.setSpacingY(cl);
this.setSpacingX(cl);
return this;
},setColumnAlign:function(bn,bo,bp){{};
this._setColumnData(bn,cM,bo);
this._setColumnData(bn,cK,bp);
this._applyLayoutChange();
return this;
},getColumnAlign:function(a){var b=this.__hP[a]||{};
return {vAlign:b.vAlign||cO,hAlign:b.hAlign||cP};
},setRowAlign:function(cv,cw,cx){{};
this._setRowData(cv,cM,cw);
this._setRowData(cv,cK,cx);
this._applyLayoutChange();
return this;
},getRowAlign:function(ba){var bb=this.__hO[ba]||{};
return {vAlign:bb.vAlign||cO,hAlign:bb.hAlign||cP};
},getCellWidget:function(c,d){if(this._invalidChildrenCache){this.__hX();
}var c=this.__hQ[c]||{};
return c[d]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__hX();
}return this.__hT+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__hX();
}return this.__hU+1;
},getCellAlign:function(N,O){var U=cO;
var S=cP;
var T=this.__hO[N];
var Q=this.__hP[O];
var P=this.__hQ[N][O];

if(P){var R={vAlign:P.getAlignY(),hAlign:P.getAlignX()};
}else{R={};
}if(R.vAlign){U=R.vAlign;
}else if(T&&T.vAlign){U=T.vAlign;
}else if(Q&&Q.vAlign){U=Q.vAlign;
}if(R.hAlign){S=R.hAlign;
}else if(Q&&Q.hAlign){S=Q.hAlign;
}else if(T&&T.hAlign){S=T.hAlign;
}return {vAlign:U,hAlign:S};
},setColumnFlex:function(dF,dG){this._setColumnData(dF,cL,dG);
this._applyLayoutChange();
return this;
},getColumnFlex:function(dD){var dE=this.__hP[dD]||{};
return dE.flex!==undefined?dE.flex:0;
},setRowFlex:function(V,W){this._setRowData(V,cL,W);
this._applyLayoutChange();
return this;
},getRowFlex:function(bA){var bB=this.__hO[bA]||{};
var bC=bB.flex!==undefined?bB.flex:0;
return bC;
},setColumnMaxWidth:function(cj,ck){this._setColumnData(cj,cC,ck);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(be){var bf=this.__hP[be]||{};
return bf.maxWidth!==undefined?bf.maxWidth:Infinity;
},setColumnWidth:function(bl,bm){this._setColumnData(bl,cH,bm);
this._applyLayoutChange();
return this;
},getColumnWidth:function(cy){var cz=this.__hP[cy]||{};
return cz.width!==undefined?cz.width:null;
},setColumnMinWidth:function(bT,bU){this._setColumnData(bT,cI,bU);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(dB){var dC=this.__hP[dB]||{};
return dC.minWidth||0;
},setRowMaxHeight:function(ct,cu){this._setRowData(ct,cE,cu);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bc){var bd=this.__hO[bc]||{};
return bd.maxHeight||Infinity;
},setRowHeight:function(X,Y){this._setRowData(X,cF,Y);
this._applyLayoutChange();
return this;
},getRowHeight:function(cQ){var cR=this.__hO[cQ]||{};
return cR.height!==undefined?cR.height:null;
},setRowMinHeight:function(ch,ci){this._setRowData(ch,cG,ci);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(cA){var cB=this.__hO[cA]||{};
return cB.minHeight||0;
},__hY:function(bg){var bk=bg.getSizeHint();
var bj=bg.getMarginLeft()+bg.getMarginRight();
var bi=bg.getMarginTop()+bg.getMarginBottom();
var bh={height:bk.height+bi,width:bk.width+bj,minHeight:bk.minHeight+bi,minWidth:bk.minWidth+bj,maxHeight:bk.maxHeight+bi,maxWidth:bk.maxWidth+bj};
return bh;
},_fixHeightsRowSpan:function(bD){var bQ=this.getSpacingY();

for(var i=0,l=this.__hS.length;i<l;i++){var bG=this.__hS[i];
var bI=this.__hY(bG);
var bJ=bG.getLayoutProperties();
var bF=bJ.row;
var bO=bQ*(bJ.rowSpan-1);
var bE=bO;
var bL={};

for(var j=0;j<bJ.rowSpan;j++){var bS=bJ.row+j;
var bH=bD[bS];
var bR=this.getRowFlex(bS);

if(bR>0){bL[bS]={min:bH.minHeight,value:bH.height,max:bH.maxHeight,flex:bR};
}bO+=bH.height;
bE+=bH.minHeight;
}if(bO<bI.height){if(!qx.lang.Object.isEmpty(bL)){var bP=qx.ui.layout.Util.computeFlexOffsets(bL,bI.height,bO);

for(var k=0;k<bJ.rowSpan;k++){var bK=bP[bF+k]?bP[bF+k].offset:0;
bD[bF+k].height+=bK;
}}else{var bM=bQ*(bJ.rowSpan-1);
var bN=bI.height-bM;
var bH=Math.floor(bN/bJ.rowSpan);

for(var k=0;k<bJ.rowSpan;k++){bD[bF+k].height=bH;
}}}if(bE<bI.minHeight){var bP=qx.ui.layout.Util.computeFlexOffsets(bL,bI.minHeight,bE);

for(var j=0;j<bJ.rowSpan;j++){var bK=bP[bF+j]?bP[bF+j].offset:0;
bD[bF+j].minHeight+=bK;
}}}},_fixWidthsColSpan:function(e){var m=this.getSpacingX();

for(var i=0,l=this.__hR.length;i<l;i++){var f=this.__hR[i];
var h=this.__hY(f);
var o=f.getLayoutProperties();
var g=o.column;
var u=m*(o.colSpan-1);
var n=u;
var p={};
var r;

for(var j=0;j<o.colSpan;j++){var v=o.column+j;
var t=e[v];
var s=this.getColumnFlex(v);
if(s>0){p[v]={min:t.minWidth,value:t.width,max:t.maxWidth,flex:s};
}u+=t.width;
n+=t.minWidth;
}if(u<h.width){var q=qx.ui.layout.Util.computeFlexOffsets(p,h.width,u);

for(var j=0;j<o.colSpan;j++){r=q[g+j]?q[g+j].offset:0;
e[g+j].width+=r;
}}if(n<h.minWidth){var q=qx.ui.layout.Util.computeFlexOffsets(p,h.minWidth,n);

for(var j=0;j<o.colSpan;j++){r=q[g+j]?q[g+j].offset:0;
e[g+j].minWidth+=r;
}}}},_getRowHeights:function(){if(this.__hV!=null){return this.__hV;
}var ec=[];
var dU=this.__hT;
var dT=this.__hU;

for(var ed=0;ed<=dU;ed++){var dV=0;
var dX=0;
var dW=0;

for(var eb=0;eb<=dT;eb++){var dS=this.__hQ[ed][eb];

if(!dS){continue;
}var dY=dS.getLayoutProperties().rowSpan||0;

if(dY>1){continue;
}var ea=this.__hY(dS);

if(this.getRowFlex(ed)>0){dV=Math.max(dV,ea.minHeight);
}else{dV=Math.max(dV,ea.height);
}dX=Math.max(dX,ea.height);
}var dV=Math.max(dV,this.getRowMinHeight(ed));
var dW=this.getRowMaxHeight(ed);

if(this.getRowHeight(ed)!==null){var dX=this.getRowHeight(ed);
}else{var dX=Math.max(dV,Math.min(dX,dW));
}ec[ed]={minHeight:dV,height:dX,maxHeight:dW};
}
if(this.__hS.length>0){this._fixHeightsRowSpan(ec);
}this.__hV=ec;
return ec;
},_getColWidths:function(){if(this.__hW!=null){return this.__hW;
}var G=[];
var D=this.__hU;
var F=this.__hT;

for(var L=0;L<=D;L++){var J=0;
var I=0;
var E=Infinity;

for(var M=0;M<=F;M++){var C=this.__hQ[M][L];

if(!C){continue;
}var H=C.getLayoutProperties().colSpan||0;

if(H>1){continue;
}var K=this.__hY(C);

if(this.getColumnFlex(L)>0){I=Math.max(I,K.minWidth);
}else{I=Math.max(I,K.width);
}J=Math.max(J,K.width);
}var I=Math.max(I,this.getColumnMinWidth(L));
var E=this.getColumnMaxWidth(L);

if(this.getColumnWidth(L)!==null){var J=this.getColumnWidth(L);
}else{var J=Math.max(I,Math.min(J,E));
}G[L]={minWidth:I,width:J,maxWidth:E};
}
if(this.__hR.length>0){this._fixWidthsColSpan(G);
}this.__hW=G;
return G;
},_getColumnFlexOffsets:function(bV){var bW=this.getSizeHint();
var cb=bV-bW.width;

if(cb==0){return {};
}var bY=this._getColWidths();
var bX={};

for(var i=0,l=bY.length;i<l;i++){var cc=bY[i];
var ca=this.getColumnFlex(i);

if((ca<=0)||(cc.width==cc.maxWidth&&cb>0)||(cc.width==cc.minWidth&&cb<0)){continue;
}bX[i]={min:cc.minWidth,value:cc.width,max:cc.maxWidth,flex:ca};
}return qx.ui.layout.Util.computeFlexOffsets(bX,bV,bW.width);
},_getRowFlexOffsets:function(cm){var cn=this.getSizeHint();
var cq=cm-cn.height;

if(cq==0){return {};
}var cr=this._getRowHeights();
var co={};

for(var i=0,l=cr.length;i<l;i++){var cs=cr[i];
var cp=this.getRowFlex(i);

if((cp<=0)||(cs.height==cs.maxHeight&&cq>0)||(cs.height==cs.minHeight&&cq<0)){continue;
}co[i]={min:cs.minHeight,value:cs.height,max:cs.maxHeight,flex:cp};
}return qx.ui.layout.Util.computeFlexOffsets(co,cm,cn.height);
},renderLayout:function(cU,cV){if(this._invalidChildrenCache){this.__hX();
}var dk=qx.ui.layout.Util;
var cX=this.getSpacingX();
var de=this.getSpacingY();
var dq=this._getColWidths();
var dp=this._getColumnFlexOffsets(cU);
var cY=[];
var ds=this.__hU;
var cW=this.__hT;
var dr;

for(var dt=0;dt<=ds;dt++){dr=dp[dt]?dp[dt].offset:0;
cY[dt]=dq[dt].width+dr;
}var dh=this._getRowHeights();
var dj=this._getRowFlexOffsets(cV);
var dz=[];

for(var df=0;df<=cW;df++){dr=dj[df]?dj[df].offset:0;
dz[df]=dh[df].height+dr;
}var dA=0;

for(var dt=0;dt<=ds;dt++){var top=0;

for(var df=0;df<=cW;df++){var dm=this.__hQ[df][dt];
if(!dm){top+=dz[df]+de;
continue;
}var da=dm.getLayoutProperties();
if(da.row!==df||da.column!==dt){top+=dz[df]+de;
continue;
}var dy=cX*(da.colSpan-1);

for(var i=0;i<da.colSpan;i++){dy+=cY[dt+i];
}var dn=de*(da.rowSpan-1);

for(var i=0;i<da.rowSpan;i++){dn+=dz[df+i];
}var db=dm.getSizeHint();
var dw=dm.getMarginTop();
var dl=dm.getMarginLeft();
var di=dm.getMarginBottom();
var dd=dm.getMarginRight();
var dg=Math.max(db.minWidth,Math.min(dy-dl-dd,db.maxWidth));
var dx=Math.max(db.minHeight,Math.min(dn-dw-di,db.maxHeight));
var du=this.getCellAlign(df,dt);
var dv=dA+dk.computeHorizontalAlignOffset(du.hAlign,dg,dy,dl,dd);
var dc=top+dk.computeVerticalAlignOffset(du.vAlign,dx,dn,dw,di);
dm.renderLayout(dv,dc,dg,dx);
top+=dz[df]+de;
}dA+=cY[dt]+cX;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__hW=null;
this.__hV=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__hX();
}var dL=this._getColWidths();
var dN=0,dO=0;

for(var i=0,l=dL.length;i<l;i++){var dP=dL[i];

if(this.getColumnFlex(i)>0){dN+=dP.minWidth;
}else{dN+=dP.width;
}dO+=dP.width;
}var dQ=this._getRowHeights();
var dJ=0,dM=0;

for(var i=0,l=dQ.length;i<l;i++){var dR=dQ[i];

if(this.getRowFlex(i)>0){dJ+=dR.minHeight;
}else{dJ+=dR.height;
}dM+=dR.height;
}var dI=this.getSpacingX()*(dL.length-1);
var dH=this.getSpacingY()*(dQ.length-1);
var dK={minWidth:dN+dI,width:dO+dI,minHeight:dJ+dH,height:dM+dH};
return dK;
}},destruct:function(){this.__hQ=this.__hO=this.__hP=this.__hR=this.__hS=this.__hW=this.__hV=null;
}});
})();
(function(){var p="resize",o="scrollY",n="update",m="scrollX",l="_applyScrollX",k="_applyScrollY",j="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",i="appear",h="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",g="qx.event.type.Event",d="qx.ui.core.scroll.ScrollPane",f="scroll";
qx.Class.define(d,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(p,this._onUpdate);
var G=this.getContentElement();
G.addListener(f,this._onScroll,this);
G.addListener(i,this._onAppear,this);
},events:{update:g},properties:{scrollX:{check:j,apply:l,event:m,init:0},scrollY:{check:h,apply:k,event:o,init:0}},members:{add:function(H){var I=this._getChildren()[0];

if(I){this._remove(I);
I.removeListener(p,this._onUpdate,this);
}
if(H){this._add(H);
H.addListener(p,this._onUpdate,this);
}},remove:function(F){if(F){this._remove(F);
F.removeListener(p,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(n);
},_onScroll:function(e){var D=this.getContentElement();
this.setScrollX(D.getScrollX());
this.setScrollY(D.getScrollY());
},_onAppear:function(e){var B=this.getContentElement();
var w=this.getScrollX();
var z=B.getScrollX();

if(w!=z){B.scrollToX(w);
}var C=this.getScrollY();
var A=B.getScrollY();

if(C!=A){B.scrollToY(C);
}},getItemTop:function(E){var top=0;

do{top+=E.getBounds().top;
E=E.getLayoutParent();
}while(E&&E!==this);
return top;
},getItemBottom:function(J){return this.getItemTop(J)+J.getBounds().height;
},getItemLeft:function(M){var N=0;
var parent;

do{N+=M.getBounds().left;
parent=M.getLayoutParent();

if(parent){N+=parent.getInsets().left;
}M=parent;
}while(M&&M!==this);
return N;
},getItemRight:function(s){return this.getItemLeft(s)+s.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var r=this.getInnerSize();
var q=this.getScrollSize();

if(r&&q){return Math.max(0,q.width-r.width);
}return 0;
},getScrollMaxY:function(){var b=this.getInnerSize();
var a=this.getScrollSize();

if(b&&a){return Math.max(0,a.height-b.height);
}return 0;
},scrollToX:function(K){var L=this.getScrollMaxX();

if(K<0){K=0;
}else if(K>L){K=L;
}this.setScrollX(K);
},scrollToY:function(t){var u=this.getScrollMaxY();

if(t<0){t=0;
}else if(t>u){t=u;
}this.setScrollY(t);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(c){this.getContentElement().scrollToX(c);
},_applyScrollY:function(v){this.getContentElement().scrollToY(v);
}}});
})();
(function(){var a="qx.ui.layout.Basic";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(k,m){var q=this._getLayoutChildren();
var n,p,o,r,top;
for(var i=0,l=q.length;i<l;i++){n=q[i];
p=n.getSizeHint();
o=n.getLayoutProperties();
r=(o.left||0)+n.getMarginLeft();
top=(o.top||0)+n.getMarginTop();
n.renderLayout(r,top,p.width,p.height);
}},_computeSizeHint:function(){var g=this._getLayoutChildren();
var d,j,e;
var h=0,f=0;
var b,c;
for(var i=0,l=g.length;i<l;i++){d=g[i];
j=d.getSizeHint();
e=d.getLayoutProperties();
b=j.width+(e.left||0)+d.getMarginLeft()+d.getMarginRight();
c=j.height+(e.top||0)+d.getMarginTop()+d.getMarginBottom();

if(b>h){h=b;
}
if(c>f){f=c;
}}return {width:h,height:f};
}}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(e){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(c){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(d){return arguments.length==1;
}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var I="single",H="Boolean",G="one",F="changeSelection",E="mouseup",D="mousedown",C="losecapture",B="multi",A="_applyQuickSelection",z="mouseover",s="_applySelectionMode",y="__mO",v="_applyDragSelection",r="qx.ui.core.MMultiSelectionHandling",q="removeItem",u="keypress",t="qx.event.type.Data",w="addItem",p="additive",x="mousemove";
qx.Mixin.define(r,{construct:function(){var n=this.SELECTION_MANAGER;
var m=this.__mO=new n(this);
this.addListener(D,m.handleMouseDown,m);
this.addListener(E,m.handleMouseUp,m);
this.addListener(z,m.handleMouseOver,m);
this.addListener(x,m.handleMouseMove,m);
this.addListener(C,m.handleLoseCapture,m);
this.addListener(u,m.handleKeyPress,m);
this.addListener(w,m.handleAddItem,m);
this.addListener(q,m.handleRemoveItem,m);
m.addListener(F,this._onSelectionChange,this);
},events:{"changeSelection":t},properties:{selectionMode:{check:[I,B,p,G],init:I,apply:s},dragSelection:{check:H,init:false,apply:v},quickSelection:{check:H,init:false,apply:A}},members:{__mO:null,selectAll:function(){this.__mO.selectAll();
},isSelected:function(L){if(!qx.ui.core.Widget.contains(this,L)){throw new Error("Could not test if "+L+" is selected, because it is not a child element!");
}return this.__mO.isItemSelected(L);
},addToSelection:function(o){if(!qx.ui.core.Widget.contains(this,o)){throw new Error("Could not add + "+o+" to selection, because it is not a child element!");
}this.__mO.addItem(o);
},removeFromSelection:function(h){if(!qx.ui.core.Widget.contains(this,h)){throw new Error("Could not remove "+h+" from selection, because it is not a child element!");
}this.__mO.removeItem(h);
},selectRange:function(f,g){this.__mO.selectItemRange(f,g);
},resetSelection:function(){this.__mO.clearSelection();
},setSelection:function(a){for(var i=0;i<a.length;i++){if(!qx.ui.core.Widget.contains(this,a[i])){throw new Error("Could not select "+a[i]+", because it is not a child element!");
}}
if(a.length===0){this.resetSelection();
}else{var b=this.getSelection();

if(!qx.lang.Array.equals(b,a)){this.__mO.replaceSelection(a);
}}},getSelection:function(){return this.__mO.getSelection();
},getSortedSelection:function(){return this.__mO.getSortedSelection();
},isSelectionEmpty:function(){return this.__mO.isSelectionEmpty();
},getSelectionContext:function(){return this.__mO.getSelectionContext();
},_getManager:function(){return this.__mO;
},getSelectables:function(M){return this.__mO.getSelectables(M);
},invertSelection:function(){this.__mO.invertSelection();
},_getLeadItem:function(){var l=this.__mO.getMode();

if(l===I||l===G){return this.__mO.getSelectedItem();
}else{return this.__mO.getLeadItem();
}},_applySelectionMode:function(j,k){this.__mO.setMode(j);
},_applyDragSelection:function(c,d){this.__mO.setDrag(c);
},_applyQuickSelection:function(J,K){this.__mO.setQuick(J);
},_onSelectionChange:function(e){this.fireDataEvent(F,e.getData());
}},destruct:function(){this._disposeObjects(y);
}});
})();
(function(){var e="change",d="__lJ",c="qx.event.type.Data",b="qx.ui.form.MModelSelection",a="changeSelection";
qx.Mixin.define(b,{construct:function(){this.__lJ=new qx.data.Array();
this.__lJ.addListener(e,this.__lM,this);
this.addListener(a,this.__lL,this);
},events:{changeModelSelection:c},members:{__lJ:null,__lK:false,__lL:function(){if(this.__lK){return;
}var q=this.getSelection();
var o=[];

for(var i=0;i<q.length;i++){var r=q[i];
var p=r.getModel?r.getModel():null;

if(p!==null){o.push(p);
}}if(o.length===q.length){this.setModelSelection(o);
}},__lM:function(){this.__lK=true;
var g=this.getSelectables(true);
var k=[];
var h=this.__lJ.toArray();

for(var i=0;i<h.length;i++){var m=h[i];

for(var j=0;j<g.length;j++){var n=g[j];
var f=n.getModel?n.getModel():null;

if(m===f){k.push(n);
break;
}}}this.setSelection(k);
this.__lK=false;
var l=this.getSelection();

if(!qx.lang.Array.equals(l,k)){this.__lL();
}},getModelSelection:function(){return this.__lJ;
},setModelSelection:function(s){if(!s){this.__lJ.removeAll();
return;
}{};
s.unshift(this.__lJ.getLength());
s.unshift(0);
var t=this.__lJ.splice.apply(this.__lJ,s);
t.dispose();
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var E="one",D="single",C="selected",B="additive",A="multi",z="PageUp",y="under",x="Left",w="lead",v="Down",bd="Up",bc="Boolean",bb="PageDown",ba="anchor",Y="End",X="Home",W="Right",V="right",U="click",T="above",L="left",M="Escape",J="A",K="Space",H="_applyMode",I="interval",F="changeSelection",G="qx.event.type.Data",N="quick",O="key",Q="__or",P="abstract",S="drag",R="qx.ui.core.selection.Abstract";
qx.Class.define(R,{type:P,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oo={};
},events:{"changeSelection":G},properties:{mode:{check:[D,A,B,E],init:D,apply:H},drag:{check:bc,init:false},quick:{check:bc,init:false}},members:{__op:0,__oq:0,__or:null,__os:null,__ot:null,__ou:null,__ov:null,__ow:null,__ox:null,__oy:null,__oz:null,__oA:null,__oB:null,__oC:null,__oD:null,__oE:null,__oF:null,__oo:null,__oG:null,__oH:null,_userInteraction:false,__oI:null,getSelectionContext:function(){return this.__oE;
},selectAll:function(){var cU=this.getMode();

if(cU==D||cU==E){throw new Error("Can not select all items in selection mode: "+cU);
}this._selectAllItems();
this._fireChange();
},selectItem:function(cr){this._setSelectedItem(cr);
var cs=this.getMode();

if(cs!==D&&cs!==E){this._setLeadItem(cr);
this._setAnchorItem(cr);
}this._scrollItemIntoView(cr);
this._fireChange();
},addItem:function(bB){var bC=this.getMode();

if(bC===D||bC===E){this._setSelectedItem(bB);
}else{if(!this._getAnchorItem()){this._setAnchorItem(bB);
}this._setLeadItem(bB);
this._addToSelection(bB);
}this._scrollItemIntoView(bB);
this._fireChange();
},removeItem:function(t){this._removeFromSelection(t);

if(this.getMode()===E&&this.isSelectionEmpty()){var u=this._getFirstSelectable();

if(u){this.addItem(u);
}if(u==t){return;
}}
if(this.getLeadItem()==t){this._setLeadItem(null);
}
if(this._getAnchorItem()==t){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(cv,cw){var cx=this.getMode();

if(cx==D||cx==E){throw new Error("Can not select multiple items in selection mode: "+cx);
}this._selectItemRange(cv,cw);
this._setAnchorItem(cv);
this._setLeadItem(cw);
this._scrollItemIntoView(cw);
this._fireChange();
},clearSelection:function(){if(this.getMode()==E){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bq){var br=this.getMode();

if(br==E||br===D){if(bq.length>1){throw new Error("Could not select more than one items in mode: "+br+"!");
}
if(bq.length==1){this.selectItem(bq[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bq);
}},getSelectedItem:function(){var s=this.getMode();

if(s===D||s===E){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__oo);
},getSortedSelection:function(){var cj=this.getSelectables();
var ci=qx.lang.Object.getValues(this.__oo);
ci.sort(function(a,b){return cj.indexOf(a)-cj.indexOf(b);
});
return ci;
},isItemSelected:function(bs){var bt=this._selectableToHashCode(bs);
return this.__oo[bt]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__oo);
},invertSelection:function(){var cW=this.getMode();

if(cW===D||cW===E){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var cV=this.getSelectables();

for(var i=0;i<cV.length;i++){this._toggleInSelection(cV[i]);
}this._fireChange();
},_setLeadItem:function(cS){var cT=this.__oF;

if(cT!==null){this._styleSelectable(cT,w,false);
}
if(cS!==null){this._styleSelectable(cS,w,true);
}this.__oF=cS;
},getLeadItem:function(){return this.__oF!==null?this.__oF:null;
},_setAnchorItem:function(cX){var cY=this.__oG;

if(cY){this._styleSelectable(cY,ba,false);
}
if(cX){this._styleSelectable(cX,ba,true);
}this.__oG=cX;
},_getAnchorItem:function(){return this.__oG!==null?this.__oG:null;
},_isSelectable:function(cP){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bE=event.getTarget();
if(bE&&this._isSelectable(bE)){return bE;
}return null;
},_selectableToHashCode:function(cL){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bw,bx,by){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bm){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(cR){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bS,bT){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bD){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(cQ){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bW,bX){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bU,bV){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(ck,cl){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bh,bi){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bh===E){var bj=this._getFirstSelectable();

if(bj){this._setSelectedItem(bj);
this._scrollItemIntoView(bj);
}}this._fireChange();
},handleMouseOver:function(event){if(this.__oI!=null&&this.__oI!=this._getScroll().top){this.__oI=null;
return;
}this._userInteraction=true;

if(!this.getQuick()){this._userInteraction=false;
return;
}var cq=this.getMode();

if(cq!==E&&cq!==D){this._userInteraction=false;
return;
}var cp=this._getSelectableFromMouseEvent(event);

if(cp===null){this._userInteraction=false;
return;
}this._setSelectedItem(cp);
this._fireChange(N);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var bO=this._getSelectableFromMouseEvent(event);

if(bO===null){this._userInteraction=false;
return;
}var bQ=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bN=event.isShiftPressed();
if(this.isItemSelected(bO)&&!bN&&!bQ&&!this.getDrag()){this.__oH=bO;
this._userInteraction=false;
return;
}else{this.__oH=null;
}this._scrollItemIntoView(bO);
switch(this.getMode()){case D:case E:this._setSelectedItem(bO);
break;
case B:this._setLeadItem(bO);
this._setAnchorItem(bO);
this._toggleInSelection(bO);
break;
case A:this._setLeadItem(bO);
if(bN){var bP=this._getAnchorItem();

if(bP===null){bP=this._getFirstSelectable();
this._setAnchorItem(bP);
}this._selectItemRange(bP,bO,bQ);
}else if(bQ){this._setAnchorItem(bO);
this._toggleInSelection(bO);
}else{this._setAnchorItem(bO);
this._setSelectedItem(bO);
}break;
}var bR=this.getMode();

if(this.getDrag()&&bR!==D&&bR!==E&&!bN&&!bQ){this.__ov=this._getLocation();
this.__os=this._getScroll();
this.__ow=event.getDocumentLeft()+this.__os.left;
this.__ox=event.getDocumentTop()+this.__os.top;
this.__oy=true;
this._capture();
}this._fireChange(U);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var r=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var o=event.isShiftPressed();

if(!r&&!o&&this.__oH){var p=this._getSelectableFromMouseEvent(event);

if(p===null||!this.isItemSelected(p)){this._userInteraction=false;
return;
}var q=this.getMode();

if(q===B){this._removeFromSelection(p);
}else{this._setSelectedItem(p);

if(this.getMode()===A){this._setLeadItem(p);
this._setAnchorItem(p);
}}this._userInteraction=false;
}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__oy){return;
}this.__oz=event.getDocumentLeft();
this.__oA=event.getDocumentTop();
this._userInteraction=true;
var cu=this.__oz+this.__os.left;

if(cu>this.__ow){this.__oB=1;
}else if(cu<this.__ow){this.__oB=-1;
}else{this.__oB=0;
}var ct=this.__oA+this.__os.top;

if(ct>this.__ox){this.__oC=1;
}else if(ct<this.__ox){this.__oC=-1;
}else{this.__oC=0;
}var location=this.__ov;

if(this.__oz<location.left){this.__op=this.__oz-location.left;
}else if(this.__oz>location.right){this.__op=this.__oz-location.right;
}else{this.__op=0;
}
if(this.__oA<location.top){this.__oq=this.__oA-location.top;
}else if(this.__oA>location.bottom){this.__oq=this.__oA-location.bottom;
}else{this.__oq=0;
}if(!this.__or){this.__or=new qx.event.Timer(100);
this.__or.addListener(I,this._onInterval,this);
}this.__or.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var cK=e.getData();

if(this.getMode()===E&&this.isSelectionEmpty()){this.addItem(cK);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__oy){return;
}if(this.__oD){this._fireChange(U);
}delete this.__oy;
delete this.__ot;
delete this.__ou;
this._releaseCapture();
if(this.__or){this.__or.stop();
}},_onInterval:function(e){this._scrollBy(this.__op,this.__oq);
this.__os=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cG=this._getDimension();
var cz=Math.max(0,Math.min(this.__oz-this.__ov.left,cG.width))+this.__os.left;
var cy=Math.max(0,Math.min(this.__oA-this.__ov.top,cG.height))+this.__os.top;
if(this.__ot===cz&&this.__ou===cy){return;
}this.__ot=cz;
this.__ou=cy;
var cI=this._getAnchorItem();
var cB=cI;
var cE=this.__oB;
var cH,cA;

while(cE!==0){cH=cE>0?this._getRelatedSelectable(cB,V):this._getRelatedSelectable(cB,L);
if(cH!==null){cA=this._getSelectableLocationX(cH);
if((cE>0&&cA.left<=cz)||(cE<0&&cA.right>=cz)){cB=cH;
continue;
}}break;
}var cF=this.__oC;
var cD,cC;

while(cF!==0){cD=cF>0?this._getRelatedSelectable(cB,y):this._getRelatedSelectable(cB,T);
if(cD!==null){cC=this._getSelectableLocationY(cD);
if((cF>0&&cC.top<=cy)||(cF<0&&cC.bottom>=cy)){cB=cD;
continue;
}}break;
}var cJ=this.getMode();

if(cJ===A){this._selectItemRange(cI,cB);
}else if(cJ===B){if(this.isItemSelected(cI)){this._selectItemRange(cI,cB,true);
}else{this._deselectItemRange(cI,cB);
}this._setAnchorItem(cB);
}this._fireChange(S);
},__oJ:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
var ce,cd;
var cg=event.getKeyIdentifier();
var cf=this.getMode();
var ca=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cb=event.isShiftPressed();
var cc=false;

if(cg===J&&ca){if(cf!==D&&cf!==E){this._selectAllItems();
cc=true;
}}else if(cg===M){if(cf!==D&&cf!==E){this._clearSelection();
cc=true;
}}else if(cg===K){var bY=this.getLeadItem();

if(bY&&!cb){if(ca||cf===B){this._toggleInSelection(bY);
}else{this._setSelectedItem(bY);
}cc=true;
}}else if(this.__oJ[cg]){cc=true;

if(cf===D||cf==E){ce=this._getSelectedItem();
}else{ce=this.getLeadItem();
}
if(ce!==null){switch(cg){case X:cd=this._getFirstSelectable();
break;
case Y:cd=this._getLastSelectable();
break;
case bd:cd=this._getRelatedSelectable(ce,T);
break;
case v:cd=this._getRelatedSelectable(ce,y);
break;
case x:cd=this._getRelatedSelectable(ce,L);
break;
case W:cd=this._getRelatedSelectable(ce,V);
break;
case z:cd=this._getPage(ce,true);
break;
case bb:cd=this._getPage(ce,false);
break;
}}else{switch(cg){case X:case v:case W:case bb:cd=this._getFirstSelectable();
break;
case Y:case bd:case x:case z:cd=this._getLastSelectable();
break;
}}if(cd!==null){switch(cf){case D:case E:this._setSelectedItem(cd);
break;
case B:this._setLeadItem(cd);
break;
case A:if(cb){var ch=this._getAnchorItem();

if(ch===null){this._setAnchorItem(ch=this._getFirstSelectable());
}this._setLeadItem(cd);
this._selectItemRange(ch,cd,ca);
}else{this._setAnchorItem(cd);
this._setLeadItem(cd);

if(!ca){this._setSelectedItem(cd);
}}break;
}this.__oI=this._getScroll().top;
this._scrollItemIntoView(cd);
}}
if(cc){event.stop();
this._fireChange(O);
}this._userInteraction=false;
},_selectAllItems:function(){var c=this.getSelectables();

for(var i=0,l=c.length;i<l;i++){this._addToSelection(c[i]);
}},_clearSelection:function(){var bz=this.__oo;

for(var bA in bz){this._removeFromSelection(bz[bA]);
}this.__oo={};
},_selectItemRange:function(bG,bH,bI){var bL=this._getSelectableRange(bG,bH);
if(!bI){var bK=this.__oo;
var bM=this.__oK(bL);

for(var bJ in bK){if(!bM[bJ]){this._removeFromSelection(bK[bJ]);
}}}for(var i=0,l=bL.length;i<l;i++){this._addToSelection(bL[i]);
}},_deselectItemRange:function(cM,cN){var cO=this._getSelectableRange(cM,cN);

for(var i=0,l=cO.length;i<l;i++){this._removeFromSelection(cO[i]);
}},__oK:function(cm){var co={};
var cn;

for(var i=0,l=cm.length;i<l;i++){cn=cm[i];
co[this._selectableToHashCode(cn)]=cn;
}return co;
},_getSelectedItem:function(){for(var bp in this.__oo){return this.__oo[bp];
}return null;
},_setSelectedItem:function(be){if(this._isSelectable(be)){var bf=this.__oo;
var bg=this._selectableToHashCode(be);

if(!bf[bg]||qx.lang.Object.hasMinLength(bf,2)){this._clearSelection();
this._addToSelection(be);
}}},_addToSelection:function(bn){var bo=this._selectableToHashCode(bn);

if(!this.__oo[bo]&&this._isSelectable(bn)){this.__oo[bo]=bn;
this._styleSelectable(bn,C,true);
this.__oD=true;
}},_toggleInSelection:function(bu){var bv=this._selectableToHashCode(bu);

if(!this.__oo[bv]){this.__oo[bv]=bu;
this._styleSelectable(bu,C,true);
}else{delete this.__oo[bv];
this._styleSelectable(bu,C,false);
}this.__oD=true;
},_removeFromSelection:function(bk){var bl=this._selectableToHashCode(bk);

if(this.__oo[bl]!=null){delete this.__oo[bl];
this._styleSelectable(bk,C,false);
this.__oD=true;
}},_replaceMultiSelection:function(d){var h=false;
var m,k;
var f={};

for(var i=0,l=d.length;i<l;i++){m=d[i];

if(this._isSelectable(m)){k=this._selectableToHashCode(m);
f[k]=m;
}}var n=d[0];
var g=m;
var j=this.__oo;

for(var k in j){if(f[k]){delete f[k];
}else{m=j[k];
delete j[k];
this._styleSelectable(m,C,false);
h=true;
}}for(var k in f){m=j[k]=f[k];
this._styleSelectable(m,C,true);
h=true;
}if(!h){return false;
}this._scrollItemIntoView(g);
this._setLeadItem(n);
this._setAnchorItem(n);
this.__oD=true;
this._fireChange();
},_fireChange:function(bF){if(this.__oD){this.__oE=bF||null;
this.fireDataEvent(F,this.getSelection());
delete this.__oD;
}}},destruct:function(){this._disposeObjects(Q);
this.__oo=this.__oH=this.__oG=null;
this.__oF=null;
}});
})();
(function(){var B="vertical",A="under",z="above",y="qx.ui.core.selection.Widget",x="left",w="right";
qx.Class.define(y,{extend:qx.ui.core.selection.Abstract,construct:function(P){qx.ui.core.selection.Abstract.call(this);
this.__nf=P;
},members:{__nf:null,_isSelectable:function(j){return this._isItemSelectable(j)&&j.getLayoutParent()===this.__nf;
},_selectableToHashCode:function(h){return h.$$hash;
},_styleSelectable:function(e,f,g){g?e.addState(f):e.removeState(f);
},_capture:function(){this.__nf.capture();
},_releaseCapture:function(){this.__nf.releaseCapture();
},_isItemSelectable:function(C){if(this._userInteraction){return C.isVisible()&&C.isEnabled();
}else{return C.isVisible();
}},_getWidget:function(){return this.__nf;
},_getLocation:function(){var a=this.__nf.getContentElement().getDomElement();
return a?qx.bom.element.Location.get(a):null;
},_getDimension:function(){return this.__nf.getInnerSize();
},_getSelectableLocationX:function(Q){var R=Q.getBounds();

if(R){return {left:R.left,right:R.left+R.width};
}},_getSelectableLocationY:function(u){var v=u.getBounds();

if(v){return {top:v.top,bottom:v.top+v.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(b,c){},_scrollItemIntoView:function(t){this.__nf.scrollChildIntoView(t);
},getSelectables:function(K){var L=false;

if(!K){L=this._userInteraction;
this._userInteraction=true;
}var O=this.__nf.getChildren();
var M=[];
var N;

for(var i=0,l=O.length;i<l;i++){N=O[i];

if(this._isItemSelectable(N)){M.push(N);
}}this._userInteraction=L;
return M;
},_getSelectableRange:function(D,E){if(D===E){return [D];
}var I=this.__nf.getChildren();
var F=[];
var H=false;
var G;

for(var i=0,l=I.length;i<l;i++){G=I[i];

if(G===D||G===E){if(H){F.push(G);
break;
}else{H=true;
}}
if(H&&this._isItemSelectable(G)){F.push(G);
}}return F;
},_getFirstSelectable:function(){var d=this.__nf.getChildren();

for(var i=0,l=d.length;i<l;i++){if(this._isItemSelectable(d[i])){return d[i];
}}return null;
},_getLastSelectable:function(){var J=this.__nf.getChildren();

for(var i=J.length-1;i>0;i--){if(this._isItemSelectable(J[i])){return J[i];
}}return null;
},_getRelatedSelectable:function(k,m){var p=this.__nf.getOrientation()===B;
var o=this.__nf.getChildren();
var n=o.indexOf(k);
var q;

if((p&&m===z)||(!p&&m===x)){for(var i=n-1;i>=0;i--){q=o[i];

if(this._isItemSelectable(q)){return q;
}}}else if((p&&m===A)||(!p&&m===w)){for(var i=n+1;i<o.length;i++){q=o[i];

if(this._isItemSelectable(q)){return q;
}}}return null;
},_getPage:function(r,s){if(s){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__nf=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(s){return this._isItemSelectable(s)&&s.getLayoutParent()===this._getWidget().getChildrenContainer();
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var o=this._getWidget();
return {left:o.getScrollX(),top:o.getScrollY()};
},_scrollBy:function(p,q){var r=this._getWidget();
r.scrollByX(p);
r.scrollByY(q);
},_getPage:function(b,c){var g=this.getSelectables();
var length=g.length;
var k=g.indexOf(b);
if(k===-1){throw new Error("Invalid lead item: "+b);
}var d=this._getWidget();
var m=d.getScrollY();
var innerHeight=d.getInnerSize().height;
var top,f,l;

if(c){var j=m;
var i=k;
while(1){for(;i>=0;i--){top=d.getItemTop(g[i]);
if(top<j){l=i+1;
break;
}}if(l==null){var n=this._getFirstSelectable();
return n==b?null:n;
}if(l>=k){j-=innerHeight+m-d.getItemBottom(b);
l=null;
continue;
}return g[l];
}}else{var h=innerHeight+m;
var i=k;
while(1){for(;i<length;i++){f=d.getItemBottom(g[i]);
if(f>h){l=i-1;
break;
}}if(l==null){var e=this._getLastSelectable();
return e==b?null:e;
}if(l<=k){h+=d.getItemTop(b)-m;
l=null;
continue;
}return g[l];
}}}}});
})();
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(v){var w=v.getBounds();

if(w){var top=this._getWidget().getItemTop(v);
return {top:top,bottom:top+w.height};
}},_isSelectable:function(x){return this._isItemSelectable(x)&&x instanceof qx.ui.tree.AbstractTreeItem;
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(l){var o=false;

if(!l){o=this._userInteraction;
this._userInteraction=true;
}var n=this._getWidget();
var p=[];

if(n.getRoot()!=null){var m=n.getRoot().getItems(true,!!l,n.getHideRoot());

for(var i=0;i<m.length;i++){if(this._isSelectable(m[i])){p.push(m[i]);
}}}this._userInteraction=o;
return p;
},_getSelectableRange:function(f,g){if(f===g){return [f];
}var h=this.getSelectables();
var j=h.indexOf(f);
var k=h.indexOf(g);

if(j<0||k<0){return [];
}
if(j<k){return h.slice(j,k+1);
}else{return h.slice(k,j+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var u=this.getSelectables();

if(u.length>0){return u[u.length-1];
}else{return null;
}},_getRelatedSelectable:function(q,r){var s=this._getWidget();
var t=null;

switch(r){case d:t=s.getPreviousNodeOf(q,false);
break;
case b:t=s.getNextNodeOf(q,false);
break;
case c:case e:break;
}
if(!t){return null;
}
if(this._isSelectable(t)){return t;
}else{return this._getRelatedSelectable(t,r);
}}}});
})();
(function(){var o="dblclick",n="click",m="Boolean",l="excluded",k="visible",j="qx.event.type.Data",h="_applyOpenMode",g="Space",f="Left",d="Enter",C="changeOpenMode",B="_applyRootOpenClose",A="changeSelection",z="qx.ui.tree.Tree",y="tree",x="_applyHideRoot",w="changeRoot",v="_applyRoot",u="__ru",t="keypress",r="none",s="pane",p="Right",q="qx.ui.tree.AbstractTreeItem";
qx.Class.define(z,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__ru=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(s).add(this.__ru);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(A,this._onChangeSelection,this);
this.addListener(t,this._onKeyPress,this);
},events:{addItem:j,removeItem:j},properties:{openMode:{check:[n,o,r],init:o,apply:h,event:C,themeable:true},root:{check:q,init:null,nullable:true,event:w,apply:v},hideRoot:{check:m,init:false,apply:x},rootOpenClose:{check:m,init:false,apply:B},appearance:{refine:true,init:y},focusable:{refine:true,init:true}},members:{__ru:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__ru;
},_applyRoot:function(a,b){var c=this.getChildrenContainer();

if(b){c.remove(b);

if(b.hasChildren()){c.remove(b.getChildrenContainer());
}}
if(a){c.add(a);

if(a.hasChildren()){c.add(a.getChildrenContainer());
}a.setVisibility(this.getHideRoot()?l:k);
a.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(bg,bh){var bi=this.getRoot();

if(!bi){return;
}bi.setVisibility(bg?l:k);
bi.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(P,Q){var R=this.getRoot();

if(!R){return;
}R.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__ru;
},getNextNodeOf:function(D,E){if((E!==false||D.isOpen())&&D.hasChildren()){return D.getChildren()[0];
}
while(D){var parent=D.getParent();

if(!parent){return null;
}var G=parent.getChildren();
var F=G.indexOf(D);

if(F>-1&&F<G.length-1){return G[F+1];
}D=parent;
}return null;
},getPreviousNodeOf:function(H,I){var parent=H.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==H){return null;
}}}else{if(H==this.getRoot()){return null;
}}var L=parent.getChildren();
var J=L.indexOf(H);

if(J>0){var K=L[J-1];

while((I!==false||K.isOpen())&&K.hasChildren()){var M=K.getChildren();
K=M[M.length-1];
}return K;
}else{return parent;
}},getNextSiblingOf:function(bd){if(bd==this.getRoot()){return null;
}var parent=bd.getParent();
var be=parent.getChildren();
var bf=be.indexOf(bd);

if(bf<be.length-1){return be[bf+1];
}return null;
},getPreviousSiblingOf:function(ba){if(ba==this.getRoot()){return null;
}var parent=ba.getParent();
var bb=parent.getChildren();
var bc=bb.indexOf(ba);

if(bc>0){return bb[bc-1];
}return null;
},getItems:function(S,T){if(this.getRoot()!=null){return this.getRoot().getItems(S,T,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(N){while(N){if(N==this){return null;
}
if(N instanceof qx.ui.tree.AbstractTreeItem){return N;
}N=N.getLayoutParent();
}return null;
},_applyOpenMode:function(V,W){if(W==n){this.removeListener(n,this._onOpen,this);
}else if(W==o){this.removeListener(o,this._onOpen,this);
}
if(V==n){this.addListener(n,this._onOpen,this);
}else if(V==o){this.addListener(o,this._onOpen,this);
}},_onOpen:function(e){var O=this.getTreeItem(e.getTarget());

if(!O||!O.isOpenable()){return;
}O.setOpen(!O.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var Y=e.getData();
for(var i=0;i<Y.length;i++){var X=Y[i];
while(X.getParent()!=null){X=X.getParent();
X.setOpen(true);
}}},_onKeyPress:function(e){var U=this._getLeadItem();

if(U!==null){switch(e.getKeyIdentifier()){case f:if(U.isOpenable()&&U.isOpen()){U.setOpen(false);
}break;
case p:if(U.isOpenable()&&!U.isOpen()){U.setOpen(true);
}break;
case d:case g:if(U.isOpenable()){U.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(u);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(u,v,name){this.fireDataEvent(c,{value:u,name:name,old:v});
this._registerEventChaining(u,v,name);
},_registerEventChaining:function(i,j,name){if((i instanceof qx.core.Object)&&qx.Class.hasMixin(i.constructor,qx.data.marshal.MEventBubbling)){var k=qx.lang.Function.bind(this.__lU,this,name);
var l=i.addListener(c,k,this);
i.setUserData(d,l);
}if(j!=null&&j.getUserData&&j.getUserData(d)!=null){j.removeListenerById(j.getUserData(d));
}},__lU:function(name,e){var t=e.getData();
var p=t.value;
var n=t.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(t.name.indexOf){var s=t.name.indexOf(f)!=-1?t.name.indexOf(f):t.name.length;
var q=t.name.indexOf(h)!=-1?t.name.indexOf(h):t.name.length;

if(s<q){var m=t.name.substring(0,s);
var r=t.name.substring(s+1,t.name.length);

if(r[0]!=h){r=f+r;
}var o=name+h+m+g+r;
}else if(q<s){var m=t.name.substring(0,q);
var r=t.name.substring(q,t.name.length);
var o=name+h+m+g+r;
}else{var o=name+h+t.name+g;
}}else{var o=name+h+t.name+g;
}}else{var o=name+f+t.name;
}this.fireDataEvent(c,{value:p,name:o,old:n});
}}});
})();
(function(){var X="change",W="add",V="remove",U="order",T="qx.event.type.Data",S="",R="qx.data.Array",Q="?",P="changeBubble",O="number",N="changeLength";
qx.Class.define(R,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(h){qx.core.Object.call(this);
if(h==undefined){this.__lG=[];
}else if(arguments.length>1){this.__lG=[];

for(var i=0;i<arguments.length;i++){this.__lG.push(arguments[i]);
}}else if(typeof h==O){this.__lG=new Array(h);
}else if(h instanceof Array){this.__lG=qx.lang.Array.clone(h);
}else{this.__lG=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__lG.length;i++){this._applyEventPropagation(this.__lG[i],null,i);
}this.__lH();
},events:{"change":T,"changeLength":T},members:{__lG:null,concat:function(e){if(e){var f=this.__lG.concat(e);
}else{var f=this.__lG.concat();
}return new qx.data.Array(f);
},join:function(bd){return this.__lG.join(bd);
},pop:function(){var c=this.__lG.pop();
this.__lH();
this._applyEventPropagation(null,c,this.length-1);
this.fireDataEvent(X,{start:this.length-1,end:this.length-1,type:V,items:[c]},null);
return c;
},push:function(s){for(var i=0;i<arguments.length;i++){this.__lG.push(arguments[i]);
this.__lH();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(X,{start:this.length-1,end:this.length-1,type:W,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__lG.reverse();
this.fireDataEvent(X,{start:0,end:this.length-1,type:U,items:null},null);
},shift:function(){var j=this.__lG.shift();
this.__lH();
this._applyEventPropagation(null,j,this.length-1);
this.fireDataEvent(X,{start:0,end:this.length-1,type:V,items:[j]},null);
return j;
},slice:function(o,p){return new qx.data.Array(this.__lG.slice(o,p));
},splice:function(E,F,G){var M=this.__lG.length;
var J=this.__lG.splice.apply(this.__lG,arguments);
if(this.__lG.length!=M){this.__lH();
}var K=F>0;
var H=arguments.length>2;
var I=null;

if(K||H){if(this.__lG.length>M){var L=W;
}else if(this.__lG.length<M){var L=V;
I=J;
}else{var L=U;
}this.fireDataEvent(X,{start:E,end:this.length-1,type:L,items:I},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,E+i);
}this.fireDataEvent(P,{value:this,name:Q,old:J});
for(var i=0;i<J.length;i++){this._applyEventPropagation(null,J[i],i);
}return (new qx.data.Array(J));
},sort:function(bf){this.__lG.sort.apply(this.__lG,arguments);
this.fireDataEvent(X,{start:0,end:this.length-1,type:U,items:null},null);
},unshift:function(Y){for(var i=arguments.length-1;i>=0;i--){this.__lG.unshift(arguments[i]);
this.__lH();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(X,{start:0,end:this.length-1,type:W,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__lG;
},getItem:function(n){return this.__lG[n];
},setItem:function(bg,bh){var bi=this.__lG[bg];
if(bi===bh){return;
}this.__lG[bg]=bh;
this._applyEventPropagation(bh,bi,bg);
if(this.length!=this.__lG.length){this.__lH();
}this.fireDataEvent(X,{start:bg,end:bg,type:W,items:[bh]},null);
},getLength:function(){return this.length;
},indexOf:function(g){return this.__lG.indexOf(g);
},toString:function(){if(this.__lG!=null){return this.__lG.toString();
}return S;
},contains:function(D){return this.__lG.indexOf(D)!==-1;
},copy:function(){return this.concat();
},insertAt:function(B,C){this.splice(B,0,C);
},insertBefore:function(v,w){var x=this.indexOf(v);

if(x==-1){this.push(w);
}else{this.splice(x,0,w);
}},insertAfter:function(ba,bb){var bc=this.indexOf(ba);

if(bc==-1||bc==(this.length-1)){this.push(bb);
}else{this.splice(bc+1,0,bb);
}},removeAt:function(l){return this.splice(l,1).getItem(0);
},removeAll:function(){for(var i=0;i<this.__lG.length;i++){this._applyEventPropagation(null,this.__lG[i],i);
}var u=this.getLength();
var t=this.__lG.concat();
this.__lG.length=0;
this.__lH();
this.fireDataEvent(X,{start:0,end:u-1,type:V,items:t},null);
},append:function(a){if(a instanceof qx.data.Array){a=a.toArray();
}{};
for(var i=0;i<a.length;i++){this._applyEventPropagation(a[i],null,this.__lG.length+i);
}Array.prototype.push.apply(this.__lG,a);
var b=this.length;
this.__lH();
this.fireDataEvent(X,{start:b,end:this.length-1,type:W,items:a},null);
},remove:function(y){var z=this.indexOf(y);

if(z!=-1){this.splice(z,1);
return y;
}},equals:function(m){if(this.length!==m.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==m.getItem(i)){return false;
}}return true;
},sum:function(){var A=0;

for(var i=0;i<this.length;i++){A+=this.getItem(i);
}return A;
},max:function(){var k=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>k){k=this.getItem(i);
}}return k===undefined?null:k;
},min:function(){var be=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<be){be=this.getItem(i);
}}return be===undefined?null:be;
},forEach:function(q,r){for(var i=0;i<this.__lG.length;i++){q.call(r,this.__lG[i]);
}},__lH:function(){var d=this.length;
this.length=this.__lG.length;
this.fireDataEvent(N,this.length,d);
}},destruct:function(){for(var i=0;i<this.__lG.length;i++){this._applyEventPropagation(null,this.__lG[i],i);
}this.__lG=null;
}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var B="open",A="auto",z="middle",y="icon",x="label",w="changeOpen",v="excluded",u="visible",t="String",s="opened",U="always",T="qx.ui.tree.AbstractTreeItem",S="addItem",R="Boolean",Q="Integer",P="_applyIndent",O="changeOpenSymbolMode",N="_applyOpenSymbolMode",M="__pt",L="resize",I="__ps",J="",G="removeItem",H="abstract",E="never",F="_applyIcon",C="_applyOpen",D="_applyLabel",K="__pw";
qx.Class.define(T,{extend:qx.ui.core.Widget,type:H,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__ps=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:R,init:false,event:w,apply:C},openSymbolMode:{check:[U,E,A],init:A,event:O,apply:N},indent:{check:Q,init:19,apply:P,themeable:true},parent:{check:T,nullable:true},icon:{check:t,apply:F,nullable:true,themeable:true},label:{check:t,apply:D,init:J}},members:{__ps:null,__pt:null,__pu:null,__pv:null,__pw:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(bA){var bB;

switch(bA){case x:bB=new qx.ui.basic.Label().set({alignY:z,value:this.getLabel()});
break;
case y:bB=new qx.ui.basic.Image().set({alignY:z,source:this.getIcon()});
break;
case B:bB=new qx.ui.tree.FolderOpenButton().set({alignY:z});
bB.addListener(w,this._onChangeOpen,this);
bB.addListener(L,this._updateIndent,this);
break;
}return bB||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bA);
},getTree:function(){var bg=this;

while(bg.getParent()){bg=bg.getParent();
}var bf=bg.getLayoutParent()?bg.getLayoutParent().getLayoutParent():0;

if(bf&&bf instanceof qx.ui.core.scroll.ScrollPane){return bf.getLayoutParent();
}return null;
},addWidget:function(bH,bI){this._add(bH,bI);
},addSpacer:function(){if(!this.__pw){this.__pw=new qx.ui.core.Spacer();
}else{this._remove(this.__pw);
}this._add(this.__pw);
},addOpenButton:function(){this._add(this.getChildControl(B));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bW=this.getChildControl(y);

if(this.__pv){this._remove(bW);
}this._add(bW);
this.__pv=true;
},addLabel:function(bq){var br=this.getChildControl(x);

if(this.__pu){this._remove(br);
}
if(bq){this.setLabel(bq);
}else{br.setValue(this.getLabel());
}this._add(br);
this.__pu=true;
},addState:function(bK){qx.ui.core.Widget.prototype.addState.call(this,bK);
var bM=this._getChildren();

for(var i=0,l=bM.length;i<l;i++){var bL=bM[i];

if(bL.addState){bM[i].addState(bK);
}}},removeState:function(bE){qx.ui.core.Widget.prototype.removeState.call(this,bE);
var bG=this._getChildren();

for(var i=0,l=bG.length;i<l;i++){var bF=bG[i];

if(bF.addState){bG[i].removeState(bE);
}}},_applyIcon:function(bs,bt){var bu=this.getChildControl(y,true);

if(bu){bu.setSource(bs);
}},_applyLabel:function(m,n){var o=this.getChildControl(x,true);

if(o){o.setValue(m);
}},_applyOpen:function(bC,bD){if(this.hasChildren()){this.getChildrenContainer().setVisibility(bC?u:v);
}var open=this.getChildControl(B,true);

if(open){open.setOpen(bC);
}bC?this.addState(s):this.removeState(s);
},isOpenable:function(){var bp=this.getOpenSymbolMode();
return (bp===U||bp===A&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(B,true);

if(!open){return false;
}var bJ=this.getTree();

if(!bJ.getRootOpenClose()){if(bJ.getHideRoot()){if(bJ.getRoot()==this.getParent()){return false;
}}else{if(bJ.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(a,b){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bi=0;
var open=this.getChildControl(B,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bh=open.getBounds();

if(bh){bi=bh.width;
}else{return;
}}else{open.exclude();
}}
if(this.__pw){this.__pw.setWidth((this.getLevel()+1)*this.getIndent()-bi);
}},_applyIndent:function(bd,be){this._updateIndent();
},getLevel:function(){var bN=this.getTree();

if(!bN){return;
}var bO=this;
var bP=-1;

while(bO){bO=bO.getParent();
bP+=1;
}if(bN.getHideRoot()){bP-=1;
}
if(!bN.getRootOpenClose()){bP-=1;
}return bP;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__pt){this.__pt=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?u:v});
}return this.__pt;
},hasChildrenContainer:function(){return this.__pt;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__ps;
},hasChildren:function(){return this.__ps?this.__ps.length>0:false;
},getItems:function(V,W,X){if(X!==false){var Y=[];
}else{var Y=[this];
}var bc=this.hasChildren()&&(W!==false||this.isOpen());

if(bc){var bb=this.getChildren();

if(V===false){Y=Y.concat(bb);
}else{for(var i=0,ba=bb.length;i<ba;i++){Y=Y.concat(bb[i].getItems(V,W,false));
}}}return Y;
},recursiveAddToWidgetQueue:function(){var d=this.getItems(true,true,false);

for(var i=0,l=d.length;i<l;i++){qx.ui.core.queue.Widget.add(d[i]);
}},__px:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bQ){var bR=this.getChildrenContainer();
var bU=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bV=arguments[i];
var bT=bV.getParent();

if(bT){bT.remove(bV);
}bV.setParent(this);
var bS=this.hasChildren();
bR.add(bV);

if(bV.hasChildren()){bR.add(bV.getChildrenContainer());
}this.__ps.push(bV);

if(!bS){this.__px();
}
if(bU){bV.recursiveAddToWidgetQueue();
bU.fireNonBubblingEvent(S,qx.event.type.Data,[bV]);
}}
if(bU){qx.ui.core.queue.Widget.add(this);
}},addAt:function(bj,bk){{};

if(bk==this.__ps.length){this.add(bj);
return;
}var bo=bj.getParent();

if(bo){bo.remove(bj);
}var bm=this.getChildrenContainer();
bj.setParent(this);
var bn=this.hasChildren();
var bl=this.__ps[bk];
bm.addBefore(bj,bl);

if(bj.hasChildren()){bm.addAfter(bj.getChildrenContainer(),bj);
}qx.lang.Array.insertAt(this.__ps,bj,bk);

if(!bn){this.__px();
}
if(this.getTree()){bj.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bx,by){{};
var bz=bx.getParent();

if(bz){bz.remove(bx);
}this.addAt(bx,this.__ps.indexOf(by));
},addAfter:function(p,q){{};
var r=p.getParent();

if(r){r.remove(p);
}this.addAt(p,this.__ps.indexOf(q)+1);
},addAtBegin:function(c){this.addAt(c,0);
},remove:function(f){for(var i=0,l=arguments.length;i<l;i++){var k=arguments[i];

if(this.__ps.indexOf(k)==-1){this.warn("Cannot remove treeitem '"+k+"'. It is not a child of this tree item.");
return;
}var g=this.getChildrenContainer();

if(k.hasChildrenContainer()){var j=k.getChildrenContainer();

if(g.getChildren().indexOf(j)>=0){g.remove(j);
}}qx.lang.Array.remove(this.__ps,k);
k.setParent(null);
g.remove(k);
}var h=this.getTree();

if(h){h.fireNonBubblingEvent(G,qx.event.type.Data,[k]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bv){var bw=this.__ps[bv];

if(bw){this.remove(bw);
}},removeAll:function(){for(var i=this.__ps.length-1;i>=0;i--){this.remove(this.__ps[i]);
}}},destruct:function(){this._disposeArray(I);
this._disposeObjects(K,M);
}});
})();
(function(){var i="opened",h="click",g="changeOpen",f="Boolean",d="qx.ui.tree.FolderOpenButton",c="_applyOpen",b="mouseup",a="mousedown";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){qx.ui.basic.Image.call(this);
this.initOpen();
this.addListener(h,this._onClick);
this.addListener(a,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
},properties:{open:{check:f,init:false,event:g,apply:c}},members:{_applyOpen:function(j,k){j?this.addState(i):this.removeState(i);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(c,d){qx.ui.core.LayoutItem.call(this);
this.setWidth(c!=null?c:0);
this.setHeight(d!=null?d:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(b){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var j="qx.data.model.",h="",g="_validate",f='"',e="change",d="qx.data.marshal.Json",c="set",b="_applyEventPropagation";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(a){qx.core.Object.call(this);
this.__mG=a;
},statics:{__mH:null,createModel:function(D,E){if(this.__mH===null){this.__mH=new qx.data.marshal.Json();
}this.__mH.toClass(D,E);
return this.__mH.toModel(D);
}},members:{__mG:null,__mI:function(k){var l=[];

for(var m in k){l.push(m);
}return l.sort().join(f);
},toClass:function(p,q){if(qx.lang.Type.isNumber(p)||qx.lang.Type.isString(p)||qx.lang.Type.isBoolean(p)||p==null||p instanceof qx.core.Object){return;
}if(qx.lang.Type.isArray(p)){for(var i=0;i<p.length;i++){this.toClass(p[i],q);
}return ;
}var s=this.__mI(p);
if(this.__mG&&this.__mG.getModelClass&&this.__mG.getModelClass(s)!=null){return;
}for(var t in p){this.toClass(p[t],q);
}if(qx.Class.isDefined(j+s)){return;
}var z={};
var y={__mJ:this.__mJ};

for(var t in p){t=t.replace(/-/g,h);
z[t]={};
z[t].nullable=true;
z[t].event=e+qx.lang.String.firstUp(t);
if(q){z[t].apply=b;
}if(this.__mG&&this.__mG.getValidationRule){var v=this.__mG.getValidationRule(s,t);

if(v){z[t].validate=g+t;
y[g+t]=v;
}}}if(this.__mG&&this.__mG.getModelSuperClass){var x=this.__mG.getModelSuperClass(s)||qx.core.Object;
}else{var x=qx.core.Object;
}var u=[];

if(this.__mG&&this.__mG.getModelMixins){var w=this.__mG.getModelMixins(s);
if(!qx.lang.Type.isArray(w)){if(w!=null){u=[w];
}}}if(q){u.push(qx.data.marshal.MEventBubbling);
}var r={extend:x,include:u,properties:z,members:y,destruct:this.__mK};
qx.Class.define(j+s,r);
},__mK:function(){var n=qx.util.PropertyUtil.getAllProperties(this.constructor);

for(var o in n){this.__mJ(this.get(n[o].name));
}},__mJ:function(F){if(!(F instanceof qx.core.Object)){return ;
}if(F.isDisposed()){return;
}if(qx.Class.implementsInterface(F,qx.data.IListData)){for(var i=0;i<F.getLength();i++){this.__mJ(F.getItem(i));
}}F.dispose();
},__mL:function(A){var B;
if(this.__mG&&this.__mG.getModelClass){B=this.__mG.getModelClass(A);
}
if(B!=null){return (new B());
}else{var C=qx.Class.getByName(j+A);
return (new C());
}},toModel:function(G){if(qx.lang.Type.isNumber(G)||qx.lang.Type.isString(G)||qx.lang.Type.isBoolean(G)||qx.lang.Type.isDate(G)||G==null||G instanceof qx.core.Object){return G;
}else if(qx.lang.Type.isArray(G)){var K=new qx.data.Array();

for(var i=0;i<G.length;i++){K.push(this.toModel(G[i]));
}return K;
}else if(qx.lang.Type.isObject(G)){var H=this.__mI(G);
var L=this.__mL(H);
for(var J in G){var I=J.replace(/-/g,h);
L[c+qx.lang.String.firstUp(I)](this.toModel(G[J]));
}return L;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__mG=null;
}});
})();
(function(){var f="$$theme_",e="$$user_",d="$$init_",c="qx.util.PropertyUtil";
qx.Class.define(c,{statics:{getProperties:function(k){return k.$$properties;
},getAllProperties:function(r){var u={};
var v=r;
while(v!=qx.core.Object){var t=this.getProperties(v);

for(var s in t){u[s]=t[s];
}v=v.superclass;
}return u;
},getUserValue:function(i,j){return i[e+j];
},setUserValue:function(z,A,B){z[e+A]=B;
},deleteUserValue:function(g,h){delete (g[e+h]);
},getInitValue:function(a,b){return a[d+b];
},setInitValue:function(w,x,y){w[d+x]=y;
},deleteInitValue:function(K,L){delete (K[d+L]);
},getThemeValue:function(p,q){return p[f+q];
},setThemeValue:function(C,D,E){C[f+D]=E;
},deleteThemeValue:function(I,J){delete (I[f+J]);
},setThemed:function(l,m,n){var o=qx.core.Property.$$method.setThemed;
l[o[m]](n);
},resetThemed:function(F,G){var H=qx.core.Property.$$method.resetThemed;
F[H[G]]();
}}});
})();
(function(){var f="changeSelection",e="change",d="qx.data.Array",c="qx.data.controller.MSelection",b="_applySelection",a="target";
qx.Mixin.define(c,{construct:function(){if(!qx.Class.hasProperty(this.constructor,a)){throw new Error("Target property is needed.");
}if(this.getSelection()==null){this.setSelection(new qx.data.Array());
}},properties:{selection:{check:d,event:f,apply:b,init:null}},members:{_modifingSelection:0,__nB:null,__nC:null,_applySelection:function(x,y){if(this.__nC!=undefined&&y!=undefined){y.removeListenerById(this.__nC);
}this.__nC=x.addListener(e,this.__nD,this);
this._updateSelection();
},__nD:function(){this._updateSelection();
},_changeTargetSelection:function(){if(this.getTarget()==null){return;
}if(!this.__nE()&&!this.__nF()){return;
}if(this._inSelectionModification()){return;
}var q=this.getTarget().getSelection();
var p=this.getSelection();

if(p==null){p=new qx.data.Array();
this.setSelection(p);
}if(q.length>0){p.toArray().splice(0,p.getLength());
}else{p.splice(0,this.getSelection().getLength()).dispose();
}for(var i=0;i<q.length;i++){var o=q[i].getModel();

if(i+1==q.length){p.push(o);
}else{p.toArray().push(o);
}}this.fireDataEvent(f,this.getSelection());
},_addChangeTargetListener:function(r,s){if(this.__nB!=undefined&&s!=undefined){s.removeListenerById(this.__nB);
}
if(r!=null){if(this.__nE()||this.__nF()){this.__nB=r.addListener(f,this._changeTargetSelection,this);
}}},_updateSelection:function(){if(!this.getTarget()){return;
}this._startSelectionModification();
if(this.__nE()){var j=[];
for(var i=0;i<this.getSelection().length;i++){var k=this.getSelection().getItem(i);
var l=this.__nH(k);

if(l!=null){j.push(l);
}}this.getTarget().setSelection(j);
j=this.getTarget().getSelection();
var g=[];

for(var i=0;i<j.length;i++){g[i]=j[i].getModel();
}for(var i=this.getSelection().length-1;i>=0;i--){if(!qx.lang.Array.contains(g,this.getSelection().getItem(i))){this.getSelection().splice(i,1).dispose();
}}}else if(this.__nF()){var h=this.getSelection().getItem(this.getSelection().length-1);

if(h){this.__nG(h);
this.getSelection().splice(0,this.getSelection().getLength()-1).dispose();
}else{this.getTarget().resetSelection();
}}this._endSelectionModification();
},__nE:function(){var v=this.getTarget().constructor;
return qx.Class.implementsInterface(v,qx.ui.core.IMultiSelection);
},__nF:function(){var w=this.getTarget().constructor;
return qx.Class.implementsInterface(w,qx.ui.core.ISingleSelection);
},__nG:function(m){var n=this.__nH(m);
if(n==null){return;
}if(this.__nE()){this.getTarget().addToSelection(n);
}else if(this.__nF()){this.getTarget().setSelection([n]);
}},__nH:function(t){var u=this.getTarget().getSelectables(true);
for(var i=0;i<u.length;i++){if(u[i].getModel()==t){return u[i];
}}return null;
},_startSelectionModification:function(){this._modifingSelection++;
},_endSelectionModification:function(){this._modifingSelection>0?this._modifingSelection--:null;
},_inSelectionModification:function(){return this._modifingSelection>0;
}}});
})();
(function(){var bP="String",bO="get",bN="changeModel",bM="_applyDelegate",bL="qx.core.Object",bK="_applyLabelPath",bJ="icon",bI="change",bH="label",bG="_applyTarget",bB="changeTarget",bF="_applyIconPath",bE="_applyLabelOptions",bA="_applyChildPath",bz="_applyIconOptions",bD="qx.data.controller.Tree",bC="_applyModel";
qx.Class.define(bD,{extend:qx.core.Object,include:qx.data.controller.MSelection,construct:function(k,l,m,n){qx.core.Object.call(this);
this.__qP={};
this.__qQ=[];
this.__qR={};

if(m!=null){this.setChildPath(m);
}
if(n!=null){this.setLabelPath(n);
}
if(k!=null){this.setModel(k);
}
if(l!=null){this.setTarget(l);
}},properties:{model:{check:bL,apply:bC,event:bN,nullable:true,dereference:true},target:{apply:bG,event:bB,init:null,dereference:true},childPath:{check:bP,apply:bA,nullable:true},labelPath:{check:bP,apply:bK,nullable:true},iconPath:{check:bP,apply:bF,nullable:true},labelOptions:{apply:bE,nullable:true},iconOptions:{apply:bz,nullable:true},delegate:{apply:bM,init:null,nullable:true}},members:{__qR:null,__qP:null,__qQ:null,_applyDelegate:function(o,p){this._setConfigureItem(o,p);
this._setCreateItem(o,p);
this._setBindItem(o,p);
},_applyIconOptions:function(ce,cf){this.__ra();
},_applyLabelOptions:function(W,X){this.__ra();
},_applyTarget:function(be,bf){if(bf!=undefined){var bg=bf.getRoot();
bf.setRoot(null);
bg.destroy();
}if(this.getModel()!=null){this.__qU();
}this._addChangeTargetListener(be,bf);
},_applyModel:function(bl,bm){this.__qU();
},_applyChildPath:function(cg,ch){this.__qU();
},_applyIconPath:function(bp,bq){this.__ra();
},_applyLabelPath:function(ci,cj){this.__ra();
},__qS:function(C){var E=C.getTarget();
var D=this.__qR[E.toHashCode()].treeNode;
var F=this.__qR[E.toHashCode()].modelNode;
this.__qV(D,F);
this._updateSelection();
},__qT:function(e){var bx=e.getData();
var bt=e.getOldData();
var bu=this.__qR[bt.toHashCode()];
bt.removeListenerById(bu.changeListenerId);
delete this.__qR[bt.toHashCode()];
bu.modelNode.removeListenerById(bu.changeChildernListenerId);
var by=bu.modelNode;
var bw=qx.Class.getPropertyDefinition(bu.modelNode.constructor,this.getChildPath());
var br=bw.event;
var bv=by.addListener(br,this.__qT,this);
var bs=bu.treeNode;
this.__qR[bx.toHashCode()]={modelNode:by,treeNode:bs,changeListenerId:bu.changeListenerId,changeChildernListenerId:bv};
this.__qV(bs,by);
this._updateSelection();
},_createItem:function(){var bi=this.getDelegate();
if(bi!=null&&bi.createItem!=null){var bh=bi.createItem();
}else{var bh=new qx.ui.tree.TreeFolder();
}if(bi!=null&&bi.configureItem!=null){bi.configureItem(bh);
}return bh;
},__qU:function(){if(this.getTarget()==null||this.getChildPath()==null){return;
}if((this.getLabelPath()==null&&this.getDelegate()==null)||(this.getLabelPath()==null&&this.getDelegate()!=null&&this.getDelegate().bindItem==null)){return;
}var O=this.getTarget().getRoot();

if(O!=null){this.getTarget().resetRoot();
O.destroy();
this.__qR={};
}if(this.getModel()!=null){var P=this._createItem();
P.setModel(this.getModel());
this.getTarget().setRoot(P);
this.__rb(this.getModel(),P);
this.__qV(P,this.getModel());
}},__qV:function(q,r){if(r[bO+qx.lang.String.firstUp(this.getChildPath())]==undefined){return;
}var A=r[bO+qx.lang.String.firstUp(this.getChildPath())]();
if(this.__qR[A.toHashCode()]==undefined){var v=A.addListener(bI,this.__qS,this);
var z=qx.Class.getPropertyDefinition(r.constructor,this.getChildPath());
var w=z.event;
var x=r.addListener(w,this.__qT,this);
this.__qR[A.toHashCode()]={modelNode:r,treeNode:q,changeListenerId:v,changeChildernListenerId:x};
}for(var i=0;i<A.length;i++){if(q.getChildren()[i]==null||A.getItem(i)!=q.getChildren()[i].getModel()){for(var j=i;j<q.getChildren().length;j++){if(q.getChildren()[j].getModel()===A.getItem(i)){var s=j;
break;
}}if(s!=undefined){var t=q.getChildren()[s];
if(this.getTarget().isSelected(t)){var B=true;
}q.removeAt(s);
q.addAt(t,i);
if(B){this.getTarget().addToSelection(t);
}}else{var y=this._createItem();
y.setModel(A.getItem(i));
q.addAt(y,i);
this.__rb(A.getItem(i),y);
this.__qV(y,A.getItem(i));
}}}for(var i=q.getChildren().length-1;i>=A.length;i--){var u=q.getChildren()[i];
this.__qY(u,q);
}},__qW:function(){if(this.getTarget()==null){return;
}var bb=this.getTarget().getRoot();

if(bb!=null){this.getTarget().setRoot(null);
this.__qX(bb);
this.__rc(bb.getModel());
bb.destroy();
this.__qR={};
}},__qX:function(bj){var bk=bj.getChildren();
for(var i=bk.length-1;i>=0;i--){if(bk[i].getChildren().length>0){this.__qX(bk[i]);
}this.__qY(bk[i],bj);
}},__qY:function(Q,R){var T=Q.getModel();
var V=bO+qx.lang.String.firstUp(this.getChildPath());
if(T[V]!=undefined){var U=T[V]();
var S=this.__qR[U.toHashCode()];
U.removeListenerById(S.changeListenerId);
T.removeListenerById(S.changeChildernListenerId);
this.__qX(Q);
delete this.__qR[U.toHashCode()];
}this.__rc(T);
R.remove(Q);
Q.destroy();
},bindProperty:function(a,b,c,d,f){var h=f.bind(a,d,b,c);
if(this.__qP[b]==null){this.__qP[b]={};
}var g=this.__qP[b];

if(g[f.toHashCode()]){g[f.toHashCode()].reverseId=h;
}else{g[f.toHashCode()]={id:h,reverseId:null,treeNode:d};
}if(!qx.lang.Array.contains(this.__qQ,b)){this.__qQ.push(b);
}},bindPropertyReverse:function(bW,bX,bY,ca,cb){var cd=ca.bind(bX,cb,bW,bY);
if(this.__qP[bX]==null){this.__qP[bX]={};
}var cc=this.__qP[bX];

if(cc[cb.toHashCode()]){cc[cb.toHashCode()].reverseId=cd;
}else{cc[cb.toHashCode()]={id:null,reverseId:cd,treeNode:ca};
}if(!qx.lang.Array.contains(this.__qQ,bX)){this.__qQ.push(bX);
}},bindDefaultProperties:function(Y,ba){this.bindProperty(this.getLabelPath(),bH,this.getLabelOptions(),Y,ba);
if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),bJ,this.getIconOptions(),Y,ba);
}},__ra:function(){var H;

for(var J in this.__qP){H=J;
break;
}for(var G in this.__qP[H]){var K=this.__qP[H][G].treeNode;
var I=qx.core.ObjectRegistry.fromHashCode(G);
this.__rc(I);
this.__rb(I,K);
}},__rb:function(L,M){var N=this.getDelegate();
if(N!=null&&N.bindItem!=null){N.bindItem(this,M,L);
}else{this.bindDefaultProperties(M,L);
}},__rc:function(bQ){for(var i=0;i<this.__qQ.length;i++){var bS=this.__qQ[i];
var bR=this.__qP[bS][bQ.toHashCode()];

if(bR!=null){if(bR.id){bQ.removeBinding(bR.id);
}
if(bR.reverseId){bR.treeNode.removeBinding(bR.reverseId);
}delete this.__qP[bS][bQ.toHashCode()];
}}},_setConfigureItem:function(bT,bU){if(bT!=null&&bT.configureItem!=null&&this.getTarget()!=null&&this.getModel()!=null){var bV=this.getTarget().getRoot().getItems(true,true,false);

for(var i=0;i<bV.length;i++){bT.configureItem(bV[i]);
}}},_setCreateItem:function(bn,bo){if(this.getTarget()==null||this.getModel()==null){return;
}if(bn==null||bn.createItem==null){return;
}if(bo&&bo.createItem&&bn&&bn.createItem&&bo.createItem==bn.createItem){return;
}this._startSelectionModification();
this.__qW();
this.__qU();
this._endSelectionModification();
this._updateSelection();
},_setBindItem:function(bc,bd){if(bc!=null&&bc.bindItem!=null){if(bd!=null&&bd.bindItem!=null&&bc.bindItem==bd.bindItem){return;
}this.__qU();
}}},destruct:function(){this.__qP=this.__qR=this.__qQ=null;
}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){qx.ui.tree.AbstractTreeItem.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var s="pressed",r="abandoned",q="hovered",p="checked",o="Space",n="Enter",m="mouseup",l="mousedown",k="Boolean",j="_applyValue",c="mouseover",i="mouseout",g="qx.ui.form.ToggleButton",b="keydown",a="changeValue",f="button",d="keyup",h="execute";
qx.Class.define(g,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(t,u){qx.ui.basic.Atom.call(this,t,u);
this.addListener(c,this._onMouseOver);
this.addListener(i,this._onMouseOut);
this.addListener(l,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(b,this._onKeyDown);
this.addListener(d,this._onKeyUp);
this.addListener(h,this._onExecute,this);
},properties:{appearance:{refine:true,init:f},focusable:{refine:true,init:true},value:{check:k,nullable:true,event:a,apply:j,init:false}},members:{_applyValue:function(v,w){v?this.addState(p):this.removeState(p);
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(q);

if(this.hasState(r)){this.removeState(r);
this.addState(s);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(q);

if(this.hasState(s)){if(!this.getValue()){this.removeState(s);
}this.addState(r);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(r);
this.addState(s);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(r)){this.removeState(r);
}else if(this.hasState(s)){this.execute();
}this.removeState(s);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case n:case o:this.removeState(r);
this.addState(s);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(s)){return;
}
switch(e.getKeyIdentifier()){case n:case o:this.removeState(r);
this.execute();
this.removeState(s);
e.stopPropagation();
}}}});
})();
(function(){var b="checkbox",a="qx.ui.form.CheckBox";
qx.Class.define(a,{extend:qx.ui.form.ToggleButton,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(c){{};
qx.ui.form.ToggleButton.call(this,c);
this.setValue(false);
},properties:{appearance:{refine:true,init:b},allowGrowX:{refine:true,init:false}}});
})();
(function(){var l="'>",k="[",h=", ",g="</span>",f="<span class='type-",e="</span> ",d="}",c="",b="]",a="{",I="map",H="<span class='object'>",G="]:",F="&gt;",E="<span class='object' title='Object instance with hash code: ",D="string",C="level-",B="0",A="&lt;",z="<span class='offset'>",s=":",t="qx.log.appender.Util",q="&amp;",r="&#39;",o="DIV",p="<span>",m="&quot;",n="<span class='type-key'>",u="</span>:<span class='type-",v="</span>: ",x=" ",w="]</span>: ",y="?";
qx.Class.define(t,{statics:{toHtml:function(W){var bh=[];
var be,bg,Y,bb;
bh.push(z,this.formatOffset(W.offset,6),e);

if(W.object){var X=W.win.qx.core.ObjectRegistry.fromHashCode(W.object);

if(X){bh.push(E+X.$$hash+l,X.classname,k,X.$$hash,w);
}}else if(W.clazz){bh.push(H+W.clazz.classname,v);
}var ba=W.items;

for(var i=0,bf=ba.length;i<bf;i++){be=ba[i];
bg=be.text;

if(bg instanceof Array){var bb=[];

for(var j=0,bd=bg.length;j<bd;j++){Y=bg[j];

if(typeof Y===D){bb.push(p+this.escapeHTML(Y)+g);
}else if(Y.key){bb.push(n+Y.key+u+Y.type+l+this.escapeHTML(Y.text)+g);
}else{bb.push(f+Y.type+l+this.escapeHTML(Y.text)+g);
}}bh.push(f+be.type+l);

if(be.type===I){bh.push(a,bb.join(h),d);
}else{bh.push(k,bb.join(h),b);
}bh.push(g);
}else{bh.push(f+be.type+l+this.escapeHTML(bg)+e);
}}var bc=document.createElement(o);
bc.innerHTML=bh.join(c);
bc.className=C+W.level;
return bc;
},formatOffset:function(bi,length){var bl=bi.toString();
var bj=(length||6)-bl.length;
var bk=c;

for(var i=0;i<bj;i++){bk+=B;
}return bk+bl;
},escapeHTML:function(J){return String(J).replace(/[<>&"']/g,this.__us);
},__us:function(U){var V={"<":A,">":F,"&":q,"'":r,'"':m};
return V[U]||y;
},toText:function(T){return this.toTextArray(T).join(x);
},toTextArray:function(K){var S=[];
S.push(this.formatOffset(K.offset,6));

if(K.object){var L=K.win.qx.core.ObjectRegistry.fromHashCode(K.object);

if(L){S.push(L.classname+k+L.$$hash+G);
}}else if(K.clazz){S.push(K.clazz.classname+s);
}var M=K.items;
var P,R;

for(var i=0,Q=M.length;i<Q;i++){P=M[i];
R=P.text;

if(R instanceof Array){var N=[];

for(var j=0,O=R.length;j<O;j++){N.push(R[j].text);
}
if(P.type===I){S.push(a,N.join(h),d);
}else{S.push(k,N.join(h),b);
}}else{S.push(R);
}}return S;
}}});
})();
(function(){var e="debug",d="log",c="qx.log.appender.Native",b="qx.client";
qx.Class.define(c,{statics:{process:qx.core.Variant.select(b,{"gecko":function(i){if(window.console&&console.firebug){console[i.level].call(console,qx.log.appender.Util.toText(i));
}},"mshtml":function(f){if(window.console){var h=f.level;

if(h==e){h=d;
}var g=qx.log.appender.Util.toText(f);
console[h](g);
}},"webkit":function(k){if(window.console){var m=k.level;

if(m==e){m=d;
}var l=qx.log.appender.Util.toText(k);
console[m](l);
}},"opera":function(j){}})},defer:function(a){qx.log.Logger.register(a);
}});
})();
(function(){var k="",j='</div>',i="none",h="keypress",g='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',f='.qxconsole .messages .user-result{background:white}',d='.qxconsole .messages .level-error{background:#FFE2D5}',c="div",b="user-command",a='<div class="command">',P='.qxconsole .command input:focus{outline:none;}',O='.qxconsole .messages .type-key{color:#565656;font-style:italic}',N='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',M='.qxconsole .messages div{padding:0px 4px;}',L='.qxconsole .messages .level-debug{background:white}',K='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',J="DIV",I='.qxconsole .messages .level-user{background:#E3EFE9}',H='<div class="qxconsole">',G='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',r='.qxconsole .messages .type-string{color:black;font-weight:normal;}',s='.qxconsole .control a{text-decoration:none;color:black;}',p='<div class="messages">',q='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',n='<input type="text"/>',o="clear",l='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',m='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',t='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',u='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',y='.qxconsole .messages .user-command{color:blue}',x="qx.log.appender.Console",A='.qxconsole .messages .level-info{background:#DEEDFA}',z="block",C='.qxconsole .messages .level-warn{background:#FFF7D5}',B='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',w='.qxconsole .messages .user-error{background:#FFE2D5}',F='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',E='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',D=">>> ",v='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(x,{statics:{init:function(){var X=[t,F,s,g,M,y,f,w,L,A,C,d,I,r,v,q,m,G,O,K,N,B,u,l,P];
qx.bom.Stylesheet.createElement(X.join(k));
var ba=[H,E,p,j,a,n,j,j];
var bb=document.createElement(J);
bb.innerHTML=ba.join(k);
var Y=bb.firstChild;
document.body.appendChild(bb.firstChild);
this.__Gw=Y;
this.__Gx=Y.childNodes[1];
this.__Gy=Y.childNodes[2].firstChild;
this.__GD();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,h,this.__GE,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__Gx.innerHTML=k;
},process:function(bc){this.__Gx.appendChild(qx.log.appender.Util.toHtml(bc));
this.__Gz();
},__Gz:function(){this.__Gx.scrollTop=this.__Gx.scrollHeight;
},__GA:true,toggle:function(){if(!this.__Gw){this.init();
}else if(this.__Gw.style.display==i){this.show();
}else{this.__Gw.style.display=i;
}},show:function(){if(!this.__Gw){this.init();
}else{this.__Gw.style.display=z;
this.__Gx.scrollTop=this.__Gx.scrollHeight;
}},__GB:[],execute:function(){var S=this.__Gy.value;

if(S==k){return;
}
if(S==o){return this.clear();
}var Q=document.createElement(c);
Q.innerHTML=qx.log.appender.Util.escapeHTML(D+S);
Q.className=b;
this.__GB.push(S);
this.__GC=this.__GB.length;
this.__Gx.appendChild(Q);
this.__Gz();

try{var R=window.eval(S);
}catch(T){qx.log.Logger.error(T);
}
if(R!==undefined){qx.log.Logger.debug(R);
}},__GD:function(e){this.__Gx.style.height=(this.__Gw.clientHeight-this.__Gw.firstChild.offsetHeight-this.__Gw.lastChild.offsetHeight)+"px";
},__GE:function(e){var V=e.getKeyIdentifier();
if((V=="F7")||(V=="D"&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__Gw){return;
}if(!qx.dom.Hierarchy.contains(this.__Gw,e.getTarget())){return;
}if(V=="Enter"&&this.__Gy.value!=""){this.execute();
this.__Gy.value="";
}if(V=="Up"||V=="Down"){this.__GC+=V=="Up"?-1:1;
this.__GC=Math.min(Math.max(0,this.__GC),this.__GB.length);
var U=this.__GB[this.__GC];
this.__Gy.value=U||"";
this.__Gy.select();
}}},defer:function(W){qx.event.Registration.addListener(document.documentElement,h,W.__GE,W);
}});
})();
(function(){var l=": ",k="Summary: (",j="qx.dev.ObjectSummary",h="\n",g=" Objects)\n\n",f=")\r\n",e=" (",d=" Objects)\r\n\r\n",c=", ";
qx.Class.define(j,{statics:{getInfo:function(){var y={};
var F=0;
var z;
var B=qx.core.ObjectRegistry.getRegistry();

for(var C in B){z=B[C];

if(z&&z.isDisposed()===false){if(y[z.classname]==null){y[z.classname]=1;
}else{y[z.classname]++;
}F++;
}}var E=[];

for(var A in y){E.push({classname:A,number:y[A]});
}E.sort(function(a,b){return b.number-a.number;
});
var D=k+F+g;

for(var i=0;i<E.length;i++){D+=E[i].number+l+E[i].classname+h;
}return D;
},getNewObjects:function(){var n={};
var x=0;
var o;
var s=qx.core.ObjectRegistry.getRegistry();
var q={};
var w;

for(var t in s){o=s[t];

if(o&&o.__disposed===false){var r=o.classname;

if(n[r]==null){n[r]=1;
}else{n[r]++;
}w=q[r];

if(w==null){w=q[r]=new Array();
}w[w.length]=o.toHashCode();
x++;
}}
if(!this._m_dObjectList){this._m_dObjectList={};
}var m={};

for(var r in n){if(!(r in this._m_dObjectList)){this._m_dObjectList[r]=0;
}
if(this._m_dObjectList[r]>=0&&this._m_dObjectList[r]<n[r]){m[r]=n[r]-this._m_dObjectList[r];
}}this._m_dObjectList=n;
var v=[];

for(var p in m){v.push({classname:p,number:m[p],aHashCode:q[p]});
}v.sort(function(a,b){return b.number-a.number;
});
var u=k+x+d;

for(var i=0;i<v.length;i++){u+=v[i].number+l+v[i].classname+e+v[i].aHashCode.join(c)+f;
}return u;
}}});
})();
(function(){var cr="window",cq="",cp="childNodes",co="nodeName",cn="nodeType",cm="document",cl="function",ck="firstChild",cj="qx.client",ci="external",bz="location",by="[native code]",bx="lastChild",bw="scrollY",bv="scrollWidth",bu="defaultView",bt="closed",bs="content",br="qx",bq="</td><td>",cy="filters",cz="locationbar",cw="screenX",cx="previousSibling",cu="scrollX",cv="Global namespace is polluted by the following unknown objects:\n\n",cs="doctype",ct="parent",cA="qx.dev.Pollution",cB="outerText",bX="applets",bW="parentElement",ca="designMode",bY="cookie",cc="fullScreen",cb="links",ce="pageXOffset",cd="frames",bV="documentElement",bU="screenY",g="statusbar",h="history",j="sun",k="pkcs11",l="java",m="style",n="innerWidth",o="plugins",p="implementation",q="clientWidth",cF="compatMode",cE="length",cD="textContent",cC="controllers",cJ="netscape",cI="self",cH="domConfig",cG="attributes",cL="clientHeight",cK="outerHeight",P="parentNode",Q="innerHeight",N="title",O="ownerDocument",T="<table>",U="globalStorage",R="Global namespace is not polluted by any unknown objects.",S="toolbar",L="outerHTML",M="crypto",y="forms",x="scrollbars",A="frameElement",z="Components",u="body",t="clientInformation",w="offscreenBuffering",v="embeds",s="localName",r="scrollTop",ba="isMultiLine",bb="scrollLeft",bc="images",bd="event",V="offsetHeight",W="scrollMaxY",X="sessionStorage",Y="screen",be="name",bf="offsetLeft",I="console",H="XMLHttpRequest",G="mshtml",F="nextSibling",E="innerText",D="menubar",C="scopeName",B="top",K="outerWidth",J=": ",bg="\n",bh="status",bi="contentEditable",bj="anchors",bk="</table>",bl="<tr style='vertical-align:top'><td>",bm="scrollMaxX",bn="screenTop",bo="defaultStatus",bp="styleSheets",bD="className",bC="personalbar",bB="</td></tr>",bA="currentStyle",bH="directories",bG="navigator",bF="pageYOffset",bE="screenLeft",bJ="opener",bI="scrollHeight",bQ="__firebug__",bR="Option",bO="innerHTML",bP="tabIndex",bM="offsetTop",bN="[function]",bK="clipboardData",bL="Packages",bS="tagName",bT="offsetWidth",cg="mshtml|opera",cf="undefined",ch="Image";
qx.Class.define(cA,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[br,l,j,bL,bQ,z,cC,X,U,I,bd,w,bK,t,bR,ch,ci,bn,bE,cE,cr,cm,bz,bG,cJ,ct,cd,B,x,be,cu,bw,cI,Y,h,bs,D,S,cz,bC,g,bH,bt,M,k,bJ,bh,bo,n,Q,K,cK,cw,bU,ce,bF,bm,W,cc,A,H],"document":[cH,bz,cF,p,bu,N,u,bp,bV,co,cn,ck,bx,cs,bc,bX,cb,y,bj,bY,v,o,ca,cp],"body":[cD,bO,L,E,cB,C,bW,bS,cy,bi,cm,bA,ba,cL,q,bx,ck,bM,bf,bT,V,bP,bD,cG,cx,F,O,s,cp,P,cn,co,m,r,bb,bv,bI]},getInfo:function(cY){var da=qx.dev.Pollution.getTextList(cY||cr);

if(da){return cv+da;
}else{return R;
}},extract:function(cM){var cO=[];
var cN=qx.dev.Pollution.ignore[cM];
if(qx.core.Variant.isSet(cj,G)){if(cM==cr){cN=cN.slice(0);

for(var cP=0;cP<window.length;cP++){cN.push(cq+cP);
}}}var cQ=qx.dev.Pollution.names[cM];

for(var cR in cQ){try{if(qx.core.Variant.isSet(cj,cg)){if(cM==cr&&cR==ci){continue;
}}if(typeof cQ[cR]==cf||cQ[cR]===null){continue;
}if(typeof cQ[cR]==cl&&cQ[cR].toString().indexOf(by)!=-1){continue;
}if(typeof cQ[cR].constructor==cl){if((cQ[cR].constructor.toString().indexOf(by)!=-1)||(cQ[cR].constructor.toString().indexOf(bN)!=-1)){continue;
}}if(qx.lang.Array.contains(cN,cR)){continue;
}}catch(cS){continue;
}cO.push({"key":cR,"value":cQ[cR]});
}return cO;
},getHtmlTable:function(a){var c=[];
var b=bl;
var e=bq;
var f=bB;
c.push(T);
var d=this.extract(a);

for(var i=0;i<d.length;i++){c.push(b+d[i].key+e+d[i].value+f);
}c.push(bk);
return c.join(cq);
},getTextList:function(cT){var cV=[];
var cW=J;
var cX=bg;
var cU=this.extract(cT);

for(var i=0;i<cU.length;i++){cV.push(cU[i].key+cW+cU[i].value+cX);
}return cV.join(cq);
}}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__ni:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__ni=null;
},getInsets:function(){if(this.__ni){return this.__ni;
}var j=this._getDefaultInsets();
return this.__ni={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__ni=null;
}},destruct:function(){this.__ni=null;
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
(function(){var o="_applyStyle",n="",m="Color",l="px",k="solid",j="dotted",i="double",h="dashed",g="_applyWidth",f="qx.ui.decoration.Uniform",c="px ",e=" ",d="scale",b="PositiveInteger",a="absolute";
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(p,q,r){qx.ui.decoration.Abstract.call(this);
if(p!=null){this.setWidth(p);
}
if(q!=null){this.setStyle(q);
}
if(r!=null){this.setColor(r);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[k,j,h,i],init:k,apply:o},color:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__rd:null,_getDefaultInsets:function(){var E=this.getWidth();
return {top:E,right:E,bottom:E,left:E};
},_isInitialized:function(){return !!this.__rd;
},getMarkup:function(){if(this.__rd){return this.__rd;
}var s={position:a,top:0,left:0};
var t=this.getWidth();
{};
var v=qx.theme.manager.Color.getInstance();
s.border=t+c+this.getStyle()+e+(v.resolve(this.getColor())||n);
var u=this._generateBackgroundMarkup(s);
return this.__rd=u;
},resize:function(w,x,y){var A=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(A||qx.bom.client.Feature.CONTENT_BOX){var z=this.getWidth()*2;
x-=z;
y-=z;
if(x<0){x=0;
}
if(y<0){y=0;
}}w.style.width=x+l;
w.style.height=y+l;
},tint:function(B,C){var D=qx.theme.manager.Color.getInstance();

if(C==null){C=this.getBackgroundColor();
}B.style.backgroundColor=D.resolve(C)||n;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__rd=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px",d="px ",c="dotted",b="_applyWidth",a="dashed",E="Number",D=" ",C="shorthand",B="widthTop",A="styleRight",z="styleLeft",y="widthLeft",x="widthBottom",w="styleTop",v="colorBottom",q="styleBottom",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="border-top",k="border-left",l="border-right",s="qx.ui.decoration.Single",t="border-bottom",u="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(N,O,P){qx.ui.decoration.Abstract.call(this);
if(N!=null){this.setWidth(N);
}
if(O!=null){this.setStyle(O);
}
if(P!=null){this.setColor(P);
}},properties:{widthTop:{check:E,init:0,apply:b},widthRight:{check:E,init:0,apply:b},widthBottom:{check:E,init:0,apply:b},widthLeft:{check:E,init:0,apply:b},styleTop:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleRight:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,c,a,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[y,z,o]},right:{group:[r,A,p]},top:{group:[B,w,m]},bottom:{group:[x,q,v]},width:{group:[B,r,x,y],mode:C},style:{group:[w,A,q,z],mode:C},color:{group:[m,p,v,o],mode:C}},members:{__pk:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__pk;
},getMarkup:function(F){if(this.__pk){return this.__pk;
}var G=qx.theme.manager.Color.getInstance();
var H={};
var J=this.getWidthTop();

if(J>0){H[n]=J+d+this.getStyleTop()+D+(G.resolve(this.getColorTop())||g);
}var J=this.getWidthRight();

if(J>0){H[l]=J+d+this.getStyleRight()+D+(G.resolve(this.getColorRight())||g);
}var J=this.getWidthBottom();

if(J>0){H[t]=J+d+this.getStyleBottom()+D+(G.resolve(this.getColorBottom())||g);
}var J=this.getWidthLeft();

if(J>0){H[k]=J+d+this.getStyleLeft()+D+(G.resolve(this.getColorLeft())||g);
}{};
H.position=u;
H.top=0;
H.left=0;
var I=this._generateBackgroundMarkup(H);
return this.__pk=I;
},resize:function(Q,R,S){var T=this.getInsets();
R-=T.left+T.right;
S-=T.top+T.bottom;
if(R<0){R=0;
}
if(S<0){S=0;
}Q.style.width=R+e;
Q.style.height=S+e;
Q.style.left=(parseInt(Q.style.left)+T.left-this.getWidthLeft())+e;
Q.style.top=(parseInt(Q.style.top)+T.top-this.getWidthTop())+e;
},tint:function(K,L){var M=qx.theme.manager.Color.getInstance();

if(L==null){L=this.getBackgroundColor();
}K.style.backgroundColor=M.resolve(L)||g;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__pk=null;
}});
})();
(function(){var j="px ",i=" ",h="px",g="Color",f="Number",e=";",d="shorthand",c="innerWidthRight",b="border-left:",a='<div style="position:absolute;top:0;left:0;',E="innerColorBottom",D='</div>',C='',B="scale",A="border-top",z="innerWidthTop",y="border-left",x="innerColorRight",w="innerColorTop",v="relative",q="border-top:",r="qx.ui.decoration.Double",o="border-right:",p='line-height:0;',m="innerColorLeft",n="border-bottom",k='">',l="innerWidthBottom",s="innerWidthLeft",t="border-bottom:",u="border-right";
qx.Class.define(r,{extend:qx.ui.decoration.Single,construct:function(T,U,V,innerWidth,W){qx.ui.decoration.Single.call(this,T,U,V,innerWidth,W);
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(W!=null){this.setInnerColor(W);
}},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[z,c,l,s],mode:d},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[w,x,E,m],mode:d}},members:{__wO:null,_getDefaultInsets:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
},_isInitialized:function(){return !!this.__wO;
},getMarkup:function(){if(this.__wO){return this.__wO;
}var F=qx.theme.manager.Color.getInstance();
var I={position:v};
var G=this.getInnerWidthTop();

if(G>0){I[A]=G+j+this.getStyleTop()+i+F.resolve(this.getInnerColorTop());
}var G=this.getInnerWidthRight();

if(G>0){I[u]=G+j+this.getStyleRight()+i+F.resolve(this.getInnerColorRight());
}var G=this.getInnerWidthBottom();

if(G>0){I[n]=G+j+this.getStyleBottom()+i+F.resolve(this.getInnerColorBottom());
}var G=this.getInnerWidthLeft();

if(G>0){I[y]=G+j+this.getStyleLeft()+i+F.resolve(this.getInnerColorLeft());
}{};
var J=this._generateBackgroundMarkup(I);
var H=p;
if((qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION<8)||(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.DOCUMENT_MODE<8)){H=C;
}var G=this.getWidthTop();

if(G>0){H+=q+G+j+this.getStyleTop()+i+F.resolve(this.getColorTop())+e;
}var G=this.getWidthRight();

if(G>0){H+=o+G+j+this.getStyleRight()+i+F.resolve(this.getColorRight())+e;
}var G=this.getWidthBottom();

if(G>0){H+=t+G+j+this.getStyleBottom()+i+F.resolve(this.getColorBottom())+e;
}var G=this.getWidthLeft();

if(G>0){H+=b+G+j+this.getStyleLeft()+i+F.resolve(this.getColorLeft())+e;
}{};
return this.__wO=a+H+k+J+D;
},resize:function(K,L,M){var R=this.getBackgroundImage()&&this.getBackgroundRepeat()==B;
var P=this.getInsets();

if(R||qx.bom.client.Feature.CONTENT_BOX){var innerWidth=L-P.left-P.right;
var innerHeight=M-P.top-P.bottom;
}else{var N=P.top-this.getInnerWidthTop();
var S=P.bottom-this.getInnerWidthBottom();
var O=P.left-this.getInnerWidthLeft();
var Q=P.right-this.getInnerWidthRight();
var innerWidth=L-O-Q;
var innerHeight=M-N-S;
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}K.firstChild.style.width=innerWidth+h;
K.firstChild.style.height=innerHeight+h;
K.style.left=(parseInt(K.style.left)+P.left-this.getWidthLeft()-this.getInnerWidthLeft())+h;
K.style.top=(parseInt(K.style.top)+P.top-this.getWidthTop()-this.getInnerWidthTop())+h;
}},destruct:function(){this.__wO=null;
}});
})();
(function(){var m="Number",l="_applyInsets",k="-l",j="insetRight",i="insetTop",h="_applyBaseImage",g="insetBottom",f="set",e="shorthand",d="-t",a="insetLeft",c="String",b="qx.ui.decoration.Grid";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(A,B){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__mV=new qx.ui.decoration.css3.BorderImage();

if(A){this.__mW(A);
}}else{this.__mV=new qx.ui.decoration.GridDiv(A);
}
if(B!=null){this.__mV.setInsets(B);
}},properties:{baseImage:{check:c,nullable:true,apply:h},insetLeft:{check:m,nullable:true,apply:l},insetRight:{check:m,nullable:true,apply:l},insetBottom:{check:m,nullable:true,apply:l},insetTop:{check:m,nullable:true,apply:l},insets:{group:[i,j,g,a],mode:e}},members:{__mV:null,getMarkup:function(){return this.__mV.getMarkup();
},resize:function(E,F,G){this.__mV.resize(E,F,G);
},tint:function(H,I){},getInsets:function(){return this.__mV.getInsets();
},_applyInsets:function(x,y,name){var z=f+qx.lang.String.firstUp(name);
this.__mV[z](x);
},_applyBaseImage:function(C,D){if(this.__mV instanceof qx.ui.decoration.GridDiv){this.__mV.setBaseImage(C);
}else{this.__mW(C);
}},__mW:function(n){var p,r;
this.__mV.setBorderImage(n);
var t=qx.util.AliasManager.getInstance().resolve(n);
var u=/(.*)(\.[a-z]+)$/.exec(t);
var q=u[1];
var s=u[2];
var o=qx.util.ResourceManager.getInstance();
var v=o.getImageHeight(q+d+s);
var w=o.getImageWidth(q+k+s);
{};
this.__mV.setSlice([v,w]);
}},destruct:function(){this.__mV=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(P,Q,R){qx.ui.decoration.Abstract.call(this);
if(P!=null){this.setOuterColor(P);
}
if(Q!=null){this.setInnerColor(Q);
}
if(R!=null){this.setInnerOpacity(R);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__qL:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__qL;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__qL){return this.__qL;
}var K=qx.theme.manager.Color.getInstance();
var L=[];
var O=d+K.resolve(this.getOuterColor())+b;
var N=d+K.resolve(this.getInnerColor())+b;
L.push(k);
L.push(f);
L.push(e,O);
L.push(qx.bom.element.Opacity.compile(0.35));
L.push(i);
L.push(n);
L.push(q,O);
L.push(r,O);
L.push(qx.bom.element.Opacity.compile(1));
L.push(i);
L.push(f);
L.push(m);
L.push(p,O);
L.push(s,O);
L.push(qx.bom.element.Opacity.compile(1));
L.push(i);
var M={position:l,top:g,left:g,opacity:1};
L.push(this._generateBackgroundMarkup(M));
L.push(t);
L.push(e,N);
L.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
L.push(i);
L.push(v);
return this.__qL=L.join(c);
},resize:function(z,A,B){if(A<4){A=4;
}
if(B<4){B=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=A-2;
var outerHeight=B-2;
var H=outerWidth;
var G=outerHeight;
var innerWidth=A-4;
var innerHeight=B-4;
}else{var outerWidth=A;
var outerHeight=B;
var H=A-2;
var G=B-2;
var innerWidth=H;
var innerHeight=G;
}var J=a;
var F=z.childNodes[0].style;
F.width=outerWidth+J;
F.height=outerHeight+J;
var E=z.childNodes[1].style;
E.width=outerWidth+J;
E.height=G+J;
var D=z.childNodes[2].style;
D.width=H+J;
D.height=outerHeight+J;
var C=z.childNodes[3].style;
C.width=H+J;
C.height=G+J;
var I=z.childNodes[4].style;
I.width=innerWidth+J;
I.height=innerHeight+J;
},tint:function(w,x){var y=qx.theme.manager.Color.getInstance();

if(x==null){x=this.getBackgroundColor();
}w.childNodes[3].style.backgroundColor=y.resolve(x)||c;
}},destruct:function(){this.__qL=null;
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",y="table-header-border",x="dotted",w="border-separator",v="tooltip-text",u="invalid",t="white",s="decoration/shadow/shadow.png",r="black",q="effect",p="table-focus-indicator",n="border-focused-invalid",o="qx/decoration/Classic",l="border-lead",m="decoration/shadow/shadow-small.png",k="qx.theme.classic.Decoration";
qx.Theme.define(k,{aliases:{decoration:o},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:r,style:x}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:u}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:w}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:w}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:m,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:u,innerColor:n,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:x,color:l}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:t,colorLeft:t,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:y,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:p,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f,widthBottom:2,colorBottom:q,styleBottom:f}}}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var dY="button",dX="widget",dW="background",dV="atom",dU="inset-thin",dT="outset",dS="text-disabled",dR="text-selected",dQ="inset",dP="image",cR="groupbox",cQ="cell",cP="focused-inset",cO="tooltip",cN="menu-button",cM="middle",cL="decoration/arrows/down.gif",cK="spinner",cJ="background-selected",cI="list",eg="popup",eh="button-hovered",ee="checkbox",ef="toolbar-button",ec="button-frame",ed="textfield",ea="label",eb="background-invalid",ei="background-disabled",ej="bold",dy="white",dx="shadow-small",dA="invalid",dz="scrollbar",dC="center",dB="datechooser/button",dE="button-abandoned",dD="background-light",dw="main",dv="date-chooser",bk="date-chooser-title",bl="radiobutton",bm="default",bn="combobox",bo="background-field",bp="outset-thin",bq="menu-slidebar-button",br="scrollbar/button",bs="combobox/button",bt="table-header-cell",ex="decoration/arrows/right.gif",ew="text",ev="decoration/arrows/down-small.gif",eu="icon/16/places/folder.png",eB="tree-folder",eA="slidebar/button-forward",ez="icon/16/mimetypes/text-plain.png",ey="right-top",eD="button-checked",eC=".png",cg="background-focused",ch="datechooser",ce="slidebar/button-backward",cf="selectbox",ck="decoration/arrows/up.gif",cl="treevirtual-folder",ci="checkbox-checked",cj="decoration/form/",cc="decoration/tree/minus.gif",cd="",bL="decoration/tree/plus.gif",bK="-invalid",bN="decoration/arrows/left.gif",bM="icon/16/places/folder-open.png",bH="table-row-background-even",bG="decoration/treevirtual/cross_minus.gif",bJ="radiobutton-hovered",bI="keyboard-focus",bF="decoration/treevirtual/start_plus.gif",bE="decoration/cursors/",cq="icon/16/actions/dialog-ok.png",cr="slidebar",cs="table-scroller-focus-indicator",ct="move-frame",cm="nodrop",cn="tabview-page-button-left",co="decoration/arrows/up-small.gif",cp="move",cu="radiobutton-checked-focused",cv="qx.theme.classic.Appearance",bW="decoration/menu/checkbox.gif",bV="tooltip-error",bU="right",bT="decoration/arrows/rewind.gif",bS="table-scroller-header",bR="table-pane",bQ="focused-outset",bP="checkbox-hovered",cb="icon/16/actions/dialog-cancel.png",ca="menu-slidebar",cw="datechooser-date-pane",cx="background-pane",cy="decoration/treevirtual/cross_plus.gif",cz="qx/icon/Oxygen/16/actions/window-close.png",cA="datechooser-week",cB="icon/16/apps/office-calendar.png",cC="datechooser-weekday",cD="table-header-border",cE="table-header-cell-hover",cF="window-active-caption-text",cY="window-active-caption",cX="icon",cW="checkbox-checked-focused",cV="toolbar-separator",dd="groove",dc="checkbox-pressed",db="tooltip-invalid",da="decoration/window/restore.gif",dg="decoration/menu/checkbox-invert.gif",df="scrollarea",dr="window-inactive-caption-text",ds="best-fit",dp="up.gif",dq="keep-align",dm="tabview-page-button-right",dn="tabview-page-button-top",dk="tabview-page-button-bottom",dl="row-layer",dt="decoration/menu/radiobutton.gif",du="decoration/arrows/",dI="decoration/table/descending.png",dH="tooltip-text",dK="checkbox-checked-hovered",dJ="left.gif",dM="decoration/arrows/up-invert.gif",dL="alias",dO="decoration/arrows/right-invert.gif",dN="radiobutton-checked-disabled",dG="lead-item",dF="checkbox-focused",eq="border-dark",er="decoration/treevirtual/end_plus.gif",es="decoration/treevirtual/start_minus.gif",et="radiobutton-checked-hovered",em="decoration/window/minimize.gif",en="table-header-cell-hovered",eo="down.gif",ep="decoration/treevirtual/end.gif",ek="decoration/treevirtual/end_minus.gif",el="window-inactive-caption",bj="decoration/menu/radiobutton-invert.gif",bi="text-placeholder",bh="slider",bg="decoration/table/select-column-order.png",bf="decoration/arrows/next.gif",be="table-header",bd="decoration/treevirtual/only_minus.gif",bc="datechooser-week-header",bb="decoration/window/maximize.gif",ba="decoration/treevirtual/only_plus.gif",bw="checkbox-checked-pressed",bx="decoration/arrows/down-invert.gif",bu="menu-separator",bv="decoration/splitpane/knob-vertical.png",bA=".gif",bB="decoration/arrows/forward.gif",by="radiobutton-checked-pressed",bz="table-statusbar",bC="radiobutton-pressed",bD="copy",dh="table-row-background-selected",de="radiobutton-focused",dj="decoration/splitpane/knob-horizontal.png",di="right.gif",cT="radiobutton-checked",cS="decoration/treevirtual/cross.gif",bO="decoration/table/ascending.png",cU="decoration/treevirtual/line.gif",bY="date-chooser-selected",bX="toolbar-part-handle",cG="decoration/window/close.gif",cH="icon/16/actions/view-refresh.png";
qx.Theme.define(cv,{appearances:{"widget":{},"label":{style:function(eH){return {textColor:eH.disabled?dS:undefined};
}},"image":{style:function(fq){return {opacity:!fq.replacement&&fq.disabled?0.3:undefined};
}},"atom":{},"atom/label":ea,"atom/icon":dP,"root":{style:function(fj){return {backgroundColor:dW,textColor:ew,font:bm};
}},"popup":{style:function(gG){return {decorator:dw,backgroundColor:cx,shadow:dx};
}},"tooltip":{include:eg,style:function(gM){return {backgroundColor:cO,textColor:dH,decorator:cO,shadow:dx,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":dV,"tooltip-error":{include:cO,style:function(Q){return {textColor:dR,showTimeout:100,hideTimeout:10000,decorator:bV,font:ej,backgroundColor:db};
}},"tooltip-error/atom":dV,"iframe":{style:function(gl){return {backgroundColor:dy,decorator:dQ};
}},"move-frame":{style:function(gi){return {decorator:dw};
}},"resize-frame":ct,"dragdrop-cursor":{style:function(e){var f=cm;

if(e.copy){f=bD;
}else if(e.move){f=cp;
}else if(e.alias){f=dL;
}return {source:bE+f+bA,position:ey,offset:[2,16,2,6]};
}},"button-frame":{alias:dV,style:function(gz){if(gz.pressed||gz.abandoned||gz.checked){var gB=!gz.inner&&gz.focused?cP:dQ;
var gA=[4,3,2,5];
}else{var gB=!gz.inner&&gz.focused?bQ:dT;
var gA=[3,4];
}return {backgroundColor:gz.abandoned?dE:gz.hovered?eh:gz.checked?eD:dY,decorator:gB,padding:gA};
}},"button":{alias:ec,include:ec,style:function(ff){return {center:true};
}},"hover-button":{alias:dV,include:dV,style:function(eT){return {backgroundColor:eT.hovered?cJ:undefined,textColor:eT.hovered?dR:undefined};
}},"splitbutton":{},"splitbutton/button":dY,"splitbutton/arrow":{alias:dY,include:dY,style:function(gT){return {icon:cL};
}},"scrollarea/corner":{style:function(){return {backgroundColor:dW};
}},"scrollarea":dX,"scrollarea/pane":dX,"scrollarea/scrollbar-x":dz,"scrollarea/scrollbar-y":dz,"list":{alias:df,style:function(fa){var fe;
var fc=!!fa.focused;
var fd=!!fa.invalid;
var fb=!!fa.disabled;

if(fd&&!fb){fe=eb;
}else if(fc&&!fd&&!fb){fe=cg;
}else if(fb){fe=ei;
}else{fe=dy;
}return {decorator:fa.focused?cP:dQ,backgroundColor:fe};
}},"listitem":{alias:dV,style:function(gR){return {gap:4,padding:gR.lead?[2,4]:[3,5],backgroundColor:gR.selected?cJ:undefined,textColor:gR.selected?dR:undefined,decorator:gR.lead?dG:undefined};
}},"textfield":{style:function(gn){var gs;
var gq=!!gn.focused;
var gr=!!gn.invalid;
var go=!!gn.disabled;

if(gr&&!go){gs=eb;
}else if(gq&&!gr&&!go){gs=cg;
}else if(go){gs=ei;
}else{gs=bo;
}var gp;

if(gn.disabled){gp=dS;
}else if(gn.showingPlaceholder){gp=bi;
}else{gp=undefined;
}return {decorator:gn.focused?cP:dQ,padding:[2,3],textColor:gp,backgroundColor:gs};
}},"textarea":ed,"checkbox":{alias:dV,style:function(gJ){var gL;
if(gJ.checked){if(gJ.disabled){gL=ci;
}else if(gJ.focused){gL=cW;
}else if(gJ.pressed){gL=bw;
}else if(gJ.hovered){gL=dK;
}else{gL=ci;
}}else if(!gJ.disabled){if(gJ.focused){gL=dF;
}else if(gJ.pressed){gL=dc;
}else if(gJ.hovered){gL=bP;
}}gL=gL||ee;
var gK=gJ.invalid&&!gJ.disabled?bK:cd;
return {icon:cj+gL+gK+eC,gap:6};
}},"radiobutton":{alias:ee,include:ee,style:function(C){var E;

if(C.checked&&C.focused){E=cu;
}else if(C.checked&&C.disabled){E=dN;
}else if(C.checked&&C.pressed){E=by;
}else if(C.checked&&C.hovered){E=et;
}else if(C.checked){E=cT;
}else if(C.focused){E=de;
}else if(C.pressed){E=bC;
}else if(C.hovered){E=bJ;
}else{E=bl;
}var D=C.invalid&&!C.disabled?bK:cd;
return {icon:cj+E+D+eC,shadow:undefined};
}},"spinner":{style:function(gk){return {decorator:gk.focused?cP:dQ,textColor:gk.disabled?dS:undefined};
}},"spinner/textfield":{include:ed,style:function(gH){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:dY,include:dY,style:function(fQ){return {icon:co,padding:fQ.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:fQ.hovered?eh:dY};
}},"spinner/downbutton":{alias:dY,include:dY,style:function(K){return {icon:ev,padding:K.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:K.hovered?eh:dY};
}},"datefield":bn,"datefield/button":{alias:bs,include:bs,style:function(gX){return {icon:cB,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:ch,include:ch,style:function(fJ){return {decorator:fJ.focused?cP:dQ};
}},"groupbox":{style:function(fG){return {backgroundColor:dW};
}},"groupbox/legend":{alias:dV,style:function(eV){return {backgroundColor:dW,textColor:eV.invalid?dA:undefined,paddingRight:4,paddingLeft:4,marginRight:10,marginLeft:10};
}},"groupbox/frame":{style:function(gS){return {padding:[12,9],decorator:dd};
}},"check-groupbox":cR,"check-groupbox/legend":{alias:ee,include:ee,style:function(j){return {backgroundColor:dW,textColor:j.invalid?dA:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"radio-groupbox":cR,"radio-groupbox/legend":{alias:bl,include:bl,style:function(fx){return {backgroundColor:dW,textColor:fx.invalid?dA:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"toolbar":{style:function(S){return {backgroundColor:dW};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(R){return {decorator:bX,backgroundColor:dW,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(eU){return {margin:[3,2],decorator:cV};
}},"toolbar-button":{alias:dV,style:function(fg){if(fg.pressed||fg.checked||fg.abandoned){var fi=dU;
var fh=[3,2,1,4];
}else if(fg.hovered){var fi=bp;
var fh=[2,3];
}else{var fi=undefined;
var fh=[3,4];
}return {cursor:bm,decorator:fi,padding:fh,backgroundColor:fg.abandoned?dE:fg.checked?dD:dY};
}},"toolbar-menubutton":{alias:ef,include:ef,style:function(u){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:dP,include:dP,style:function(g){return {source:ev};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":ef,"toolbar-splitbutton/arrow":{alias:ef,include:ef,style:function(L){return {icon:cL};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dY,include:dY,style:function(y){return {icon:y.vertical?cL:bf};
}},"slidebar/button-backward":{alias:dY,include:dY,style:function(gN){return {icon:gN.vertical?ck:bN};
}},"tabview":{},"tabview/bar":{alias:cr,style:function(gu){var gv=0,gy=0,gw=0,gx=0;

if(gu.barTop){gw=-2;
}else if(gu.barBottom){gv=-2;
}else if(gu.barRight){gx=-2;
}else{gy=-2;
}return {marginBottom:gw,marginTop:gv,marginLeft:gx,marginRight:gy};
}},"tabview/bar/button-forward":{include:eA,alias:eA,style:function(eL){if(eL.barTop||eL.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:ce,alias:ce,style:function(I){if(I.barTop||I.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(n){return {backgroundColor:dW,decorator:dT,padding:10};
}},"tabview-page":dX,"tabview-page/button":{style:function(fR){var gb;
var fY=0,fW=0,fT=0,fV=0;

if(fR.barTop||fR.barBottom){var fU=2,fS=2,fX=6,ga=6;
}else{var fU=6,fS=6,fX=6,ga=6;
}
if(fR.barTop){gb=dn;
}else if(fR.barRight){gb=dm;
}else if(fR.barBottom){gb=dk;
}else{gb=cn;
}
if(fR.checked){if(fR.barTop||fR.barBottom){fX+=2;
ga+=2;
}else{fU+=2;
fS+=2;
}}else{if(fR.barTop||fR.barBottom){fT+=2;
fY+=2;
}else if(fR.barLeft||fR.barRight){fW+=2;
fV+=2;
}}
if(fR.checked){if(!fR.firstTab){if(fR.barTop||fR.barBottom){fV=-4;
}else{fY=-4;
}}
if(!fR.lastTab){if(fR.barTop||fR.barBottom){fW=-4;
}else{fT=-4;
}}}return {zIndex:fR.checked?10:5,decorator:gb,backgroundColor:dW,padding:[fU,ga,fS,fX],margin:[fY,fW,fT,fV]};
}},"tabview-page/button/label":{alias:ea,style:function(gd){return {padding:[0,1,0,1],margin:gd.focused?0:1,decorator:gd.focused?bI:undefined};
}},"tabview-page/button/icon":dP,"tabview-page/button/close-button":{alias:dV,style:function(eJ){return {icon:cz};
}},"scrollbar":{},"scrollbar/slider":{alias:bh,style:function(eG){return {backgroundColor:dD};
}},"scrollbar/slider/knob":{include:ec,style:function(gt){return {height:14,width:14,minHeight:gt.horizontal?undefined:9,minWidth:gt.horizontal?9:undefined};
}},"scrollbar/button":{alias:dY,include:dY,style:function(W){var X;

if(W.up||W.down){if(W.pressed||W.abandoned||W.checked){X=[5,2,3,4];
}else{X=[4,3];
}}else{if(W.pressed||W.abandoned||W.checked){X=[4,3,2,5];
}else{X=[3,4];
}}var Y=du;

if(W.left){Y+=dJ;
}else if(W.right){Y+=di;
}else if(W.up){Y+=dp;
}else{Y+=eo;
}return {padding:X,icon:Y};
}},"scrollbar/button-begin":br,"scrollbar/button-end":br,"slider":{style:function(gU){var gV;

if(gU.disabled){gV=ei;
}else if(gU.invalid){gV=eb;
}else if(gU.focused){gV=dD;
}else{gV=bo;
}return {backgroundColor:gV,decorator:gU.focused?cP:dQ};
}},"slider/knob":{include:ec,style:function(p){return {width:14,height:14,decorator:dT};
}},"tree-folder/open":{style:function(fp){return {source:fp.opened?cc:bL};
}},"tree-folder":{style:function(fs){return {padding:[2,3,2,0],icon:fs.opened?bM:eu};
}},"tree-folder/icon":{style:function(fn){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(T){return {padding:[1,2],backgroundColor:T.selected?cJ:undefined,textColor:T.selected?dR:undefined};
}},"tree-file":{include:eB,alias:eB,style:function(fr){return {icon:ez};
}},"tree":{include:cI,alias:cI,style:function(t){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(A){return {decorator:dw};
}},"treevirtual-folder":{style:function(gW){return {icon:(gW.opened?bM:eu)};
}},"treevirtual-file":{include:cl,alias:cl,style:function(r){return {icon:ez};
}},"treevirtual-line":{style:function(fO){return {icon:cU};
}},"treevirtual-contract":{style:function(gD){return {icon:cc};
}},"treevirtual-expand":{style:function(eR){return {icon:bL};
}},"treevirtual-only-contract":{style:function(eS){return {icon:bd};
}},"treevirtual-only-expand":{style:function(gI){return {icon:ba};
}},"treevirtual-start-contract":{style:function(hc){return {icon:es};
}},"treevirtual-start-expand":{style:function(gf){return {icon:bF};
}},"treevirtual-end-contract":{style:function(fC){return {icon:ek};
}},"treevirtual-end-expand":{style:function(z){return {icon:er};
}},"treevirtual-cross-contract":{style:function(eY){return {icon:bG};
}},"treevirtual-cross-expand":{style:function(i){return {icon:cy};
}},"treevirtual-end":{style:function(gF){return {icon:ep};
}},"treevirtual-cross":{style:function(gE){return {icon:cS};
}},"window":{style:function(fk){return {contentPadding:[10,10,10,10],backgroundColor:dW,decorator:fk.maximized?undefined:dT,shadow:fk.maximized?undefined:dx};
}},"window/pane":{},"window/captionbar":{style:function(eK){return {padding:1,backgroundColor:eK.active?cY:el,textColor:eK.active?cF:dr};
}},"window/icon":{style:function(gQ){return {marginRight:4};
}},"window/title":{style:function(gj){return {cursor:bm,font:ej,marginRight:20,alignY:cM};
}},"window/minimize-button":{include:dY,alias:dY,style:function(fP){return {icon:em,padding:fP.pressed||fP.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:dY,alias:dY,style:function(B){return {icon:da,padding:B.pressed||B.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:dY,alias:dY,style:function(P){return {icon:bb,padding:P.pressed||P.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:dY,alias:dY,style:function(eO){return {marginLeft:2,icon:cG,padding:eO.pressed||eO.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(J){return {decorator:dU,padding:[2,6]};
}},"window/statusbar-text":ea,"resizer":{style:function(fm){return {decorator:dT};
}},"splitpane":{},"splitpane/splitter":{style:function(gh){return {backgroundColor:dW};
}},"splitpane/splitter/knob":{style:function(q){return {source:q.horizontal?dj:bv,padding:2};
}},"splitpane/slider":{style:function(k){return {backgroundColor:eq,opacity:0.3};
}},"selectbox":{include:ec,style:function(U){var V=dY;

if(U.invalid&&!U.disabled){V=eb;
}else if(U.abandoned){V=dE;
}else if(!U.abandoned&&U.hovered){V=eh;
}else if(!U.abandoned&&!U.hovered&&U.checked){V=eD;
}return {backgroundColor:V};
}},"selectbox/atom":dV,"selectbox/popup":eg,"selectbox/list":cI,"selectbox/arrow":{include:dP,style:function(fB){return {source:cL,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(eW){return {decorator:dT};
}},"datechooser/navigation-bar":{style:function(m){return {backgroundColor:dv,textColor:m.disabled?dS:m.invalid?dA:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":cO,"datechooser/last-month-button-tooltip":cO,"datechooser/next-year-button-tooltip":cO,"datechooser/next-month-button-tooltip":cO,"datechooser/last-year-button":dB,"datechooser/last-month-button":dB,"datechooser/next-year-button":dB,"datechooser/next-month-button":dB,"datechooser/button/icon":{},"datechooser/button":{style:function(fv){var fw={width:17,show:cX};

if(fv.lastYear){fw.icon=bT;
}else if(fv.lastMonth){fw.icon=bN;
}else if(fv.nextYear){fw.icon=bB;
}else if(fv.nextMonth){fw.icon=ex;
}
if(fv.pressed||fv.checked||fv.abandoned){fw.decorator=dU;
}else if(fv.hovered){fw.decorator=bp;
}else{fw.decorator=undefined;
}
if(fv.pressed||fv.checked||fv.abandoned){fw.padding=[2,0,0,2];
}else if(fv.hovered){fw.padding=1;
}else{fw.padding=2;
}return fw;
}},"datechooser/month-year-label":{style:function(o){return {font:ej,textAlign:dC};
}},"datechooser/date-pane":{style:function(l){return {decorator:cw,backgroundColor:dv};
}},"datechooser/weekday":{style:function(fo){return {decorator:cC,font:ej,textAlign:dC,textColor:fo.disabled?dS:fo.weekend?bk:dv,backgroundColor:fo.weekend?dv:bk};
}},"datechooser/day":{style:function(fl){return {textAlign:dC,decorator:fl.today?dw:undefined,textColor:fl.disabled?dS:fl.selected?dR:fl.otherMonth?dS:undefined,backgroundColor:fl.disabled?undefined:fl.selected?bY:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(c){return {textAlign:dC,textColor:bk,padding:[2,4],decorator:c.header?bc:cA};
}},"combobox":{style:function(w){var x;

if(w.disabled){x=ei;
}else if(w.invalid){x=eb;
}else if(w.focused){x=dD;
}else{x=bo;
}return {decorator:w.focused?cP:dQ,textColor:w.disabled?dS:undefined,backgroundColor:x};
}},"combobox/button":{alias:dY,include:dY,style:function(b){return {icon:cL,backgroundColor:b.hovered?eh:dY};
}},"combobox/popup":eg,"combobox/list":cI,"combobox/textfield":{include:ed,style:function(ge){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(M){var N={backgroundColor:dW,shadow:dx,decorator:dT,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:M.submenu||M.contextmenu?ds:dq};

if(M.submenu){N.position=ey;
N.offset=[-2,-3];
}
if(M.contextmenu){N.offset=4;
}return N;
}},"menu/slidebar":ca,"menu-slidebar":dX,"menu-slidebar-button":{style:function(d){return {backgroundColor:d.hovered?cJ:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:bq,style:function(v){return {icon:v.hovered?dM:ck};
}},"menu-slidebar/button-forward":{include:bq,style:function(s){return {icon:s.hovered?bx:cL};
}},"menu-separator":{style:function(O){return {height:0,decorator:bu,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:dV,style:function(eF){return {backgroundColor:eF.selected?cJ:undefined,textColor:eF.selected?dR:undefined,padding:[2,6]};
}},"menu-button/icon":{include:dP,style:function(gm){return {alignY:cM};
}},"menu-button/label":{include:ea,style:function(fH){return {alignY:cM,padding:1};
}},"menu-button/shortcut":{include:ea,style:function(fD){return {alignY:cM,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:dP,style:function(eN){return {source:eN.selected?dO:ex,alignY:cM};
}},"menu-checkbox":{alias:cN,include:cN,style:function(eE){return {icon:!eE.checked?undefined:eE.selected?dg:bW};
}},"menu-radiobutton":{alias:cN,include:cN,style:function(hb){return {icon:!hb.checked?undefined:hb.selected?bj:dt};
}},"menubar":{style:function(eM){return {backgroundColor:dW,decorator:dT};
}},"menubar-button":{alias:dV,style:function(fA){return {padding:[2,6],backgroundColor:fA.pressed||fA.hovered?cJ:undefined,textColor:fA.pressed||fA.hovered?dR:undefined};
}},"colorselector":dX,"colorselector/control-bar":dX,"colorselector/visual-pane":cR,"colorselector/control-pane":dX,"colorselector/preset-grid":dX,"colorselector/colorbucket":{style:function(ft){return {decorator:dU,width:16,height:16};
}},"colorselector/preset-field-set":cR,"colorselector/input-field-set":cR,"colorselector/preview-field-set":cR,"colorselector/hex-field-composite":dX,"colorselector/hex-field":ed,"colorselector/rgb-spinner-composite":dX,"colorselector/rgb-spinner-red":cK,"colorselector/rgb-spinner-green":cK,"colorselector/rgb-spinner-blue":cK,"colorselector/hsb-spinner-composite":dX,"colorselector/hsb-spinner-hue":cK,"colorselector/hsb-spinner-saturation":cK,"colorselector/hsb-spinner-brightness":cK,"colorselector/preview-content-old":{style:function(gg){return {decorator:dU,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(fI){return {decorator:dU,backgroundColor:dy,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(fK){return {decorator:dU,margin:5};
}},"colorselector/brightness-field":{style:function(fL){return {decorator:dU,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dX,"colorselector/hue-saturation-handle":dX,"colorselector/brightness-pane":dX,"colorselector/brightness-handle":dX,"table":dX,"table/statusbar":{style:function(a){return {decorator:bz,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:dY,style:function(F){var H,G;

if(F.pressed||F.checked||F.abandoned){H=dU;
G=[3,2,1,4];
}else if(F.hovered){H=bp;
G=[2,3];
}else{H=undefined;
G=[3,4];
}return {decorator:H,padding:G,backgroundColor:F.abandoned?dE:dY,icon:bg};
}},"table-column-reset-button":{extend:cN,alias:cN,style:function(){return {icon:cH};
}},"table-scroller/scrollbar-x":dz,"table-scroller/scrollbar-y":dz,"table-scroller":dX,"table-scroller/header":{style:function(fN){return {decorator:bS,backgroundColor:be};
}},"table-scroller/pane":{style:function(h){return {backgroundColor:bR};
}},"table-scroller/focus-indicator":{style:function(fu){return {decorator:cs};
}},"table-scroller/resize-line":{style:function(eX){return {backgroundColor:cD,width:3};
}},"table-header-cell":{alias:dV,style:function(fM){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:fM.hovered?0:2,decorator:fM.hovered?en:bt,backgroundColor:fM.hovered?cE:bt,sortIcon:fM.sorted?(fM.sortedAscending?bO:dI):undefined};
}},"table-header-cell/sort-icon":{style:function(gc){return {alignY:cM};
}},"table-editor-textfield":{include:ed,style:function(gP){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:cf,alias:cf,style:function(ha){return {padding:[0,2]};
}},"table-editor-combobox":{include:bn,alias:bn,style:function(fE){return {decorator:undefined};
}},"colorpopup":{alias:eg,include:eg,style:function(eI){return {decorator:dT,padding:5,backgroundColor:dW};
}},"colorpopup/field":{style:function(fz){return {decorator:dU,margin:2,width:14,height:14,backgroundColor:dW};
}},"colorpopup/selector-button":dY,"colorpopup/auto-button":dY,"colorpopup/preview-pane":cR,"colorpopup/current-preview":{style:function(eQ){return {height:20,padding:4,marginLeft:4,decorator:dU,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(eP){return {height:20,padding:4,marginRight:4,decorator:dU,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dY,include:dY,style:function(gO){return {icon:cq};
}},"colorpopup/colorselector-cancelbutton":{alias:dY,include:dY,style:function(gY){return {icon:cb};
}},"virtual-list":cI,"virtual-list/row-layer":dl,"row-layer":dX,"column-layer":dX,"cell":{style:function(gC){return {backgroundColor:gC.selected?dh:bH,textColor:gC.selected?dR:ew,padding:[3,6]};
}},"cell-string":cQ,"cell-number":{include:cQ,style:function(fy){return {textAlign:bU};
}},"cell-image":cQ,"cell-boolean":cQ,"cell-atom":cQ,"cell-date":cQ,"cell-html":cQ,"htmlarea":{"include":dX,style:function(fF){return {backgroundColor:dy};
}}}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a},icons:{}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(B,C){qx.ui.decoration.Abstract.call(this);
if(B!=null){this.setBorderImage(B);
}
if(C!=null){this.setSlice(C);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__mR:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mR;
},getMarkup:function(){if(this.__mR){return this.__mR;
}var E=this._resolveImageUrl(this.getBorderImage());
var F=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var G=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__mR=[x,qx.bom.element.Style.compile({"borderImage":o+E+p+F.join(f)+f+G,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:F.join(b)+g}),y].join(q);
return this.__mR;
},resize:function(H,I,J){H.style.width=I+g;
H.style.height=J+g;
},tint:function(z,A){},_applyStyle:function(){{};
},_resolveImageUrl:function(D){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(D));
}},destruct:function(){this.__mR=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",x="qx.client",w="-br",v="-t",u="-tl",t="-r",s='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',r="_applyBaseImage",q="-b",p="String",o="",m="-bl",n="qx.ui.decoration.GridDiv",k="-c",l="mshtml";
qx.Class.define(n,{extend:qx.ui.decoration.Abstract,construct:function(M,N){qx.ui.decoration.Abstract.call(this);
if(M!=null){this.setBaseImage(M);
}
if(N!=null){this.setInsets(N);
}},properties:{baseImage:{check:p,nullable:true,apply:r}},members:{__mS:null,__mT:null,__mU:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mS;
},getMarkup:function(){if(this.__mS){return this.__mS;
}var H=qx.bom.element.Decoration;
var I=this.__mT;
var J=this.__mU;
var K=[];
K.push(s);
K.push(H.create(I.tl,g,{top:0,left:0}));
K.push(H.create(I.t,f,{top:0,left:J.left+j}));
K.push(H.create(I.tr,g,{top:0,right:0}));
K.push(H.create(I.bl,g,{bottom:0,left:0}));
K.push(H.create(I.b,f,{bottom:0,left:J.left+j}));
K.push(H.create(I.br,g,{bottom:0,right:0}));
K.push(H.create(I.l,e,{top:J.top+j,left:0}));
K.push(H.create(I.c,a,{top:J.top+j,left:J.left+j}));
K.push(H.create(I.r,e,{top:J.top+j,right:0}));
K.push(b);
return this.__mS=K.join(o);
},resize:function(O,P,Q){var R=this.__mU;
var innerWidth=P-R.left-R.right;
var innerHeight=Q-R.top-R.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}O.style.width=P+j;
O.style.height=Q+j;
O.childNodes[1].style.width=innerWidth+j;
O.childNodes[4].style.width=innerWidth+j;
O.childNodes[7].style.width=innerWidth+j;
O.childNodes[6].style.height=innerHeight+j;
O.childNodes[7].style.height=innerHeight+j;
O.childNodes[8].style.height=innerHeight+j;

if(qx.core.Variant.isSet(x,l)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(P%2==1){O.childNodes[2].style.marginRight=h;
O.childNodes[5].style.marginRight=h;
O.childNodes[8].style.marginRight=h;
}else{O.childNodes[2].style.marginRight=i;
O.childNodes[5].style.marginRight=i;
O.childNodes[8].style.marginRight=i;
}
if(Q%2==1){O.childNodes[3].style.marginBottom=h;
O.childNodes[4].style.marginBottom=h;
O.childNodes[5].style.marginBottom=h;
}else{O.childNodes[3].style.marginBottom=i;
O.childNodes[4].style.marginBottom=i;
O.childNodes[5].style.marginBottom=i;
}}}},tint:function(y,z){},_applyBaseImage:function(A,B){{};

if(A){var F=this._resolveImageUrl(A);
var G=/(.*)(\.[a-z]+)$/.exec(F);
var E=G[1];
var D=G[2];
var C=this.__mT={tl:E+u+D,t:E+v+D,tr:E+d+D,bl:E+m+D,b:E+q+D,br:E+w+D,l:E+c+D,c:E+k+D,r:E+t+D};
this.__mU=this._computeEdgeSizes(C);
}},_resolveImageUrl:function(L){return qx.util.AliasManager.getInstance().resolve(L);
},_computeEdgeSizes:function(S){var T=qx.util.ResourceManager.getInstance();
return {top:T.getImageHeight(S.t),bottom:T.getImageHeight(S.b),left:T.getImageWidth(S.l),right:T.getImageWidth(S.r)};
}},destruct:function(){this.__mS=this.__mT=this.__mU=null;
}});
})();


qx.$$loader.init();

