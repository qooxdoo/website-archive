(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.ui.WidgetOverview","qx.theme":"qx.theme.Classic"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off","qx.ui":"on"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.3.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.ui.WidgetOverview-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"dda622958f2e"},
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

qx.$$packageData['dda622958f2e']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"demobrowser/demo/flash/fo_tester.swf":"demobrowser.demo","qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/address-book-new.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/application-exit.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/appointment-new.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/bookmark-new.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/check-spelling.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/contact-new.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-apply.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/document-new.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/document-open-recent.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/document-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/document-print-preview.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/document-print.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/document-properties.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/document-revert.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/document-save-as.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/document-save.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/document-send.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-clear.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-copy.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-cut.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-delete.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-paste.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-redo.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-select-all.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-undo.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/folder-new.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-indent-less.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-indent-more.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-center.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-fill.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-left.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-right.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-bold.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-direction-ltr.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-direction-rtl.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-italic.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-strikethrough.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-underline.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/go-bottom.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/go-down.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/go-first.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/go-home.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/go-last.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/go-next.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/go-previous.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/go-top.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/go-up.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/help-about.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/help-contents.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/help-faq.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/insert-image.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/insert-link.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/insert-text.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/list-add.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/list-remove.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/mail-forward.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/mail-mark-important.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/mail-mark-junk.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/mail-mark-read.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/mail-mark-unread.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/mail-message-new.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/mail-receive.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/mail-reply-all.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/mail-reply-sender.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/mail-send.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/media-eject.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/media-playback-pause.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/media-playback-start.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/media-playback-stop.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/media-record.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/media-seek-backward.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/media-seek-forward.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/media-skip-backward.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/media-skip-forward.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/object-flip-horizontal.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/object-flip-vertical.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/object-rotate-left.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/object-rotate-right.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/process-stop.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/system-log-out.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/system-run.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/system-search.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/system-shutdown.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-fullscreen.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-restore.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-sort-ascending.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-sort-descending.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-new.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/zoom-fit-best.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/zoom-in.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/zoom-original.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/zoom-out.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/utilities-help.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Oxygen/22/apps/preferences-users.png":[22,22,"png","qx"],"qx/icon/Oxygen/32/status/dialog-information.png":[32,32,"png","qx"],"qx/icon/Tango/16/actions/address-book-new.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/application-exit.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/appointment-new.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/bookmark-new.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/check-spelling.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/contact-new.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-apply.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/document-new.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/document-open-recent.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/document-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/document-print-preview.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/document-print.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/document-properties.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/document-revert.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/document-save-as.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/document-save.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/document-send.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-clear.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-copy.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-cut.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-delete.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-paste.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-redo.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-select-all.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-undo.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/folder-new.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/format-indent-less.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/format-indent-more.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/format-justify-center.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/format-justify-fill.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/format-justify-left.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/format-justify-right.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/format-text-bold.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/format-text-direction-ltr.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/format-text-direction-rtl.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/format-text-italic.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/format-text-strikethrough.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/format-text-underline.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-bottom.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-down.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-first.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-home.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-last.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-next.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-previous.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-top.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-up.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/help-about.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/help-contents.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/help-faq.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/insert-image.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/insert-link.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/insert-text.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/list-add.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/list-remove.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/mail-forward.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/mail-mark-important.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/mail-mark-junk.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/mail-mark-read.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/mail-mark-unread.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/mail-message-new.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/mail-receive.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/mail-reply-all.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/mail-reply-sender.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/mail-send.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/media-eject.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/media-playback-pause.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/media-playback-start.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/media-playback-stop.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/media-record.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/media-seek-backward.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/media-seek-forward.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/media-skip-backward.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/media-skip-forward.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/object-flip-horizontal.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/object-flip-vertical.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/object-rotate-left.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/object-rotate-right.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/process-stop.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/system-log-out.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/system-run.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/system-search.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/system-shutdown.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-fullscreen.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-restore.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-sort-ascending.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-sort-descending.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-new.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/zoom-fit-best.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/zoom-in.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/zoom-original.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/zoom-out.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-help.png":[16,16,"png","qx"],"qx/icon/Tango/22/apps/preferences-users.png":[22,22,"png","qx"],"qx/icon/Tango/32/status/dialog-information.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{"C":{},"de":{"Automatic":"Automatisch","Cancel":"Abbruch","Color Selector":"Farbauswahl","Details":"Details","HSB":"HSB","Hex":"Hex","Last month":"Vorheriger Monat","Last year":"Vorheriges Jahr","Next month":"Nächster Monat","Next year":"Nächstes Jahr","OK":"OK","Open ColorSelector":"Öffne Farbauswahl","Presets":"Voreinstellungen","Preview (Old/New)":"Vorschau (alt/neu)","RGB":"RGB","Visual":"Visuell"},"de_DE":{},"en":{},"en_US":{},"fr":{"Automatic":"Automatique","Cancel":"Annuler","Color Selector":"Sélecteur de couleurs","Details":"Détails","HSB":"TSV","Hex":"Hex","Last month":"Mois dernier","Last year":"Année dernière","Next month":"Mois prochain","Next year":"Année prochaine","OK":"OK","Open ColorSelector":"Ouvrir le sélecteur de couleurs","Presets":"Pré-réglages","Preview (Old/New)":"Aperçu (Ancien/Nouveau)","RGB":"RVB"},"fr_FR":{}}};
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
},__a:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bs){var bt=[];
var bv=Object.prototype.hasOwnProperty;

for(var bw in bs){if(bv.call(bs,bw)){bt.push(bw);
}}var bu=qx.Bootstrap.__a;

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
},__b:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bE,self,bF){var bG=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bH=Array.prototype.slice.call(arguments,0,arguments.length);
return bE.apply(self,bG.concat(bH));
};
},firstUp:function(bI){return bI.charAt(0).toUpperCase()+bI.substr(1);
},firstLow:function(bJ){return bJ.charAt(0).toLowerCase()+bJ.substr(1);
},getClass:function(bK){var bL=Object.prototype.toString.call(bK);
return (qx.Bootstrap.__b[bL]||bL.slice(8,-1));
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
},$$registry:{},__c:null,__d:function(){}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__e:{},define:function(j,k){if(k===undefined){throw new Error('Default value of setting "'+j+'" must be defined!');
}
if(!this.__e[j]){this.__e[j]={};
}else if(this.__e[j].defaultValue!==undefined){throw new Error('Setting "'+j+'" is already defined!');
}this.__e[j].defaultValue=k;
},get:function(l){var m=this.__e[l];

if(m===undefined){throw new Error('Setting "'+l+'" is not defined.');
}
if(m.value!==undefined){return m.value;
}return m.defaultValue;
},set:function(n,o){if((n.split(a)).length<2){throw new Error('Malformed settings key "'+n+'". Must be following the schema "namespace.key".');
}
if(!this.__e[n]){this.__e[n]={};
}this.__e[n].value=o;
},__f:function(){if(window.qxsettings){for(var p in window.qxsettings){this.set(p,window.qxsettings[p]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(q){}this.__g();
}},__g:function(){if(this.get(h)!=true){return;
}var s=document.location.search.slice(1).split(g);

for(var i=0;i<s.length;i++){var r=s[i].split(b);

if(r.length!=3||r[0]!=c){continue;
}this.set(r[1],decodeURIComponent(r[2]));
}}},defer:function(t){t.define(h,false);
t.define(e,false);
t.define(d,0);
t.__f();
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
},__h:function(o,p,q,r){var v=q.$$members;

if(v){for(var u in v){if(qx.Bootstrap.isFunction(v[u])){var t=this.__i(p,u);
var s=t||qx.Bootstrap.isFunction(o[u]);

if(!s){throw new Error('Implementation of method "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}var w=r===true&&!t&&!qx.Bootstrap.hasInterface(p,q);

if(w){o[u]=this.__l(q,o[u],u,v[u]);
}}else{if(typeof o[u]===undefined){if(typeof o[u]!==h){throw new Error('Implementation of member "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}}}}}},__i:function(x,y){var C=y.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!C){return false;
}var z=qx.Bootstrap.firstLow(C[2]);
var A=qx.Bootstrap.getPropertyDefinition(x,z);

if(!A){return false;
}var B=C[0]==b||C[0]==d;

if(B){return qx.Bootstrap.getPropertyDefinition(x,z).check==g;
}return true;
},__j:function(D,E){if(E.$$properties){for(var F in E.$$properties){if(!qx.Bootstrap.getPropertyDefinition(D,F)){throw new Error('The property "'+F+'" is not supported by Class "'+D.classname+'"!');
}}}},__k:function(G,H){if(H.$$events){for(var I in H.$$events){if(!qx.Bootstrap.supportsEvent(G,I)){throw new Error('The event "'+I+'" is not supported by Class "'+G.classname+'"!');
}}}},assertObject:function(J,K){var M=J.constructor;
this.__h(J,M,K,false);
this.__j(M,K);
this.__k(M,K);
var L=K.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assertObject(J,L[i]);
}}},assert:function(N,O,P){this.__h(N.prototype,N,O,P);
this.__j(N,O);
this.__k(N,O);
var Q=O.$$extends;

if(Q){for(var i=0,l=Q.length;i<l;i++){this.assert(N,Q[i],P);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__l:function(){},__m:null,__n:function(){}}});
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
(function(){var bC=';',bB='return this.',bA="string",bz="boolean",by="",bx="setThemed",bw='!==undefined)',bv="this.",bu="set",bt="resetThemed",bi="setRuntime",bh="init",bg='else if(this.',bf="resetRuntime",be="reset",bd="();",bc='else ',bb='if(this.',ba="return this.",Y="get",bJ=";",bK="(a[",bH=' of an instance of ',bI="refresh",bF=' is not (yet) ready!");',bG="]);",bD='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bE='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bL='value !== null && value.nodeType === 9 && value.documentElement',bM='value !== null && value.$$type === "Mixin"',bm='return init;',bl='var init=this.',bo='value !== null && value.nodeType === 1 && value.attributes',bn="var parent = this.getLayoutParent();",bq="Error in property ",bp='qx.core.Assert.assertInstance(value, Date, msg) || true',bs="if (!parent) return;",br=" in method ",bk='qx.core.Assert.assertInstance(value, Error, msg) || true',bj='Undefined value is not allowed!',b="inherit",c='Is invalid!',d="MSIE 6.0",e="': ",f=" of class ",g='value !== null && value.nodeType !== undefined',h='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',j='qx.core.Assert.assertPositiveInteger(value, msg) || true',k='if(init==qx.core.Property.$$inherit)init=null;',m='value !== null && value.$$type === "Interface"',bQ='var inherit=prop.$$inherit;',bP="var value = parent.",bO="$$useinit_",bN="(value);",bU='Requires exactly one argument!',bT="$$runtime_",bS="$$user_",bR='qx.core.Assert.assertArray(value, msg) || true',bW='qx.core.Assert.assertPositiveNumber(value, msg) || true',bV=".prototype",I="Boolean",J='return value;',G='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',H='Does not allow any arguments!',M="()",N="var a=arguments[0] instanceof Array?arguments[0]:arguments;",K='value !== null && value.$$type === "Theme"',L="())",E='return null;',F='qx.core.Assert.assertObject(value, msg) || true',u='qx.core.Assert.assertString(value, msg) || true',t="if (value===undefined) value = parent.",w='value !== null && value.$$type === "Class"',v='qx.core.Assert.assertFunction(value, msg) || true',q="object",p="$$init_",s="$$theme_",r='qx.core.Assert.assertMap(value, msg) || true',o='qx.core.Assert.assertNumber(value, msg) || true',n='Null value is not allowed!',S='qx.core.Assert.assertInteger(value, msg) || true',T="value",U="rv:1.8.1",V="shorthand",O='qx.core.Assert.assertInstance(value, RegExp, msg) || true',P='value !== null && value.type !== undefined',Q='value !== null && value.document',R='throw new Error("Property ',W="(!this.",X='qx.core.Assert.assertBoolean(value, msg) || true',D="toggle",C="$$inherit_",B=" with incoming value '",A="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",z="qx.core.Property",y="is",x='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(z,{statics:{__o:{"Boolean":X,"String":u,"Number":o,"Integer":S,"PositiveNumber":bW,"PositiveInteger":j,"Error":bk,"RegExp":O,"Object":F,"Array":bR,"Map":r,"Function":v,"Date":bp,"Node":g,"Element":bo,"Document":bL,"Window":Q,"Event":P,"Class":w,"Mixin":bM,"Interface":m,"Theme":K,"Color":bD,"Decorator":h,"Font":bE},__p:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:b,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bA,dereference:bz,inheritable:bz,nullable:bz,themeable:bz,refine:bz,init:null,apply:bA,event:bA,check:null,transform:bA,deferredInit:bz,validate:null},$$allowedGroupKeys:{name:bA,group:q,mode:bA,themeable:bz},$$inheritable:{},__q:function(bX){var bY=this.__r(bX);

if(!bY.length){var ca=qx.lang.Function.empty;
}else{ca=this.__s(bY);
}bX.prototype.$$refreshInheritables=ca;
},__r:function(cb){var cd=[];

while(cb){var cc=cb.$$properties;

if(cc){for(var name in this.$$inheritable){if(cc[name]&&cc[name].inheritable){cd.push(name);
}}}cb=cb.superclass;
}return cd;
},__s:function(ce){var ci=this.$$store.inherit;
var ch=this.$$store.init;
var cg=this.$$method.refresh;
var cf=[bn,bs];

for(var i=0,l=ce.length;i<l;i++){var name=ce[i];
cf.push(bP,ci[name],bJ,t,ch[name],bJ,bv,cg[name],bN);
}return new Function(cf.join(by));
},attachRefreshInheritables:function(cj){cj.prototype.$$refreshInheritables=function(){qx.core.Property.__q(cj);
return this.$$refreshInheritables();
};
},attachMethods:function(ck,name,cl){cl.group?this.__t(ck,cl,name):this.__u(ck,cl,name);
},__t:function(cm,cn,name){var cu=qx.Bootstrap.firstUp(name);
var ct=cm.prototype;
var cv=cn.themeable===true;
{};
var cw=[];
var cq=[];

if(cv){var co=[];
var cs=[];
}var cr=N;
cw.push(cr);

if(cv){co.push(cr);
}
if(cn.mode==V){var cp=A;
cw.push(cp);

if(cv){co.push(cp);
}}
for(var i=0,a=cn.group,l=a.length;i<l;i++){{};
cw.push(bv,this.$$method.set[a[i]],bK,i,bG);
cq.push(bv,this.$$method.reset[a[i]],bd);

if(cv){{};
co.push(bv,this.$$method.setThemed[a[i]],bK,i,bG);
cs.push(bv,this.$$method.resetThemed[a[i]],bd);
}}this.$$method.set[name]=bu+cu;
ct[this.$$method.set[name]]=new Function(cw.join(by));
this.$$method.reset[name]=be+cu;
ct[this.$$method.reset[name]]=new Function(cq.join(by));

if(cv){this.$$method.setThemed[name]=bx+cu;
ct[this.$$method.setThemed[name]]=new Function(co.join(by));
this.$$method.resetThemed[name]=bt+cu;
ct[this.$$method.resetThemed[name]]=new Function(cs.join(by));
}},__u:function(cx,cy,name){var cA=qx.Bootstrap.firstUp(name);
var cC=cx.prototype;
{};
if(cy.dereference===undefined&&typeof cy.check===bA){cy.dereference=this.__v(cy.check);
}var cB=this.$$method;
var cz=this.$$store;
cz.runtime[name]=bT+name;
cz.user[name]=bS+name;
cz.theme[name]=s+name;
cz.init[name]=p+name;
cz.inherit[name]=C+name;
cz.useinit[name]=bO+name;
cB.get[name]=Y+cA;
cC[cB.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cx,name,Y);
};
cB.set[name]=bu+cA;
cC[cB.set[name]]=function(cD){return qx.core.Property.executeOptimizedSetter(this,cx,name,bu,arguments);
};
cB.reset[name]=be+cA;
cC[cB.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cx,name,be);
};

if(cy.inheritable||cy.apply||cy.event||cy.deferredInit){cB.init[name]=bh+cA;
cC[cB.init[name]]=function(cE){return qx.core.Property.executeOptimizedSetter(this,cx,name,bh,arguments);
};
}
if(cy.inheritable){cB.refresh[name]=bI+cA;
cC[cB.refresh[name]]=function(cF){return qx.core.Property.executeOptimizedSetter(this,cx,name,bI,arguments);
};
}cB.setRuntime[name]=bi+cA;
cC[cB.setRuntime[name]]=function(cG){return qx.core.Property.executeOptimizedSetter(this,cx,name,bi,arguments);
};
cB.resetRuntime[name]=bf+cA;
cC[cB.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cx,name,bf);
};

if(cy.themeable){cB.setThemed[name]=bx+cA;
cC[cB.setThemed[name]]=function(cH){return qx.core.Property.executeOptimizedSetter(this,cx,name,bx,arguments);
};
cB.resetThemed[name]=bt+cA;
cC[cB.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cx,name,bt);
};
}
if(cy.check===I){cC[D+cA]=new Function(ba+cB.set[name]+W+cB.get[name]+L);
cC[y+cA]=new Function(ba+cB.get[name]+M);
}},__v:function(cI){return !!this.__p[cI];
},__w:function(cJ){return this.__p[cJ]||qx.Bootstrap.classIsDefined(cJ)||(qx.Interface&&qx.Interface.isDefined(cJ));
},__x:{0:x,1:bU,2:bj,3:H,4:n,5:c},error:function(cK,cL,cM,cN,cO){var cP=cK.constructor.classname;
var cQ=bq+cM+f+cP+br+this.$$method[cN][cM]+B+cO+e;
throw new Error(cQ+(this.__x[cL]||"Unknown reason: "+cL));
},__y:function(cR,cS,name,cT,cU,cV){var cW=this.$$method[cT][name];
{cS[cW]=new Function(T,cU.join(by));
};
{};
qx.Bootstrap.setDisplayName(cS[cW],cR.classname+bV,cW);
if(cV===undefined){return cR[cW]();
}else{return cR[cW](cV[0]);
}},executeOptimizedGetter:function(cX,cY,name,da){var dc=cY.$$properties[name];
var de=cY.prototype;
var db=[];
var dd=this.$$store;
db.push(bb,dd.runtime[name],bw);
db.push(bB,dd.runtime[name],bC);

if(dc.inheritable){db.push(bg,dd.inherit[name],bw);
db.push(bB,dd.inherit[name],bC);
db.push(bc);
}db.push(bb,dd.user[name],bw);
db.push(bB,dd.user[name],bC);

if(dc.themeable){db.push(bg,dd.theme[name],bw);
db.push(bB,dd.theme[name],bC);
}
if(dc.deferredInit&&dc.init===undefined){db.push(bg,dd.init[name],bw);
db.push(bB,dd.init[name],bC);
}db.push(bc);

if(dc.init!==undefined){if(dc.inheritable){db.push(bl,dd.init[name],bC);

if(dc.nullable){db.push(k);
}else if(dc.init!==undefined){db.push(bB,dd.init[name],bC);
}else{db.push(G,name,bH,cY.classname,bF);
}db.push(bm);
}else{db.push(bB,dd.init[name],bC);
}}else if(dc.inheritable||dc.nullable){db.push(E);
}else{db.push(R,name,bH,cY.classname,bF);
}return this.__y(cX,de,name,da,db);
},executeOptimizedSetter:function(df,dg,name,dh,di){var dn=dg.$$properties[name];
var dm=dg.prototype;
var dk=[];
var dj=dh===bu||dh===bx||dh===bi||(dh===bh&&dn.init===undefined);
var dl=dn.apply||dn.event||dn.inheritable;
var dp=this.__z(dh,name);
this.__A(dk,dn,name,dh,dj);

if(dj){this.__B(dk,dg,dn,name);
}
if(dl){this.__C(dk,dj,dp,dh);
}
if(dn.inheritable){dk.push(bQ);
}{};

if(!dl){this.__E(dk,name,dh,dj);
}else{this.__F(dk,dn,name,dh,dj);
}
if(dn.inheritable){this.__G(dk,dn,name,dh);
}else if(dl){this.__H(dk,dn,name,dh);
}
if(dl){this.__I(dk,dn,name);
if(dn.inheritable&&dm._getChildren){this.__J(dk,name);
}}if(dj){dk.push(J);
}return this.__y(df,dm,name,dh,dk,di);
},__z:function(dq,name){if(dq===bi||dq===bf){var dr=this.$$store.runtime[name];
}else if(dq===bx||dq===bt){dr=this.$$store.theme[name];
}else if(dq===bh){dr=this.$$store.init[name];
}else{dr=this.$$store.user[name];
}return dr;
},__A:function(ds,dt,name,du,dv){{if(!dt.nullable||dt.check||dt.inheritable){ds.push('var prop=qx.core.Property;');
}if(du==="set"){ds.push('if(value===undefined)prop.error(this,2,"',name,'","',du,'",value);');
}};
},__B:function(dw,dx,dy,name){if(dy.transform){dw.push('value=this.',dy.transform,'(value);');
}if(dy.validate){if(typeof dy.validate==="string"){dw.push('this.',dy.validate,'(value);');
}else if(dy.validate instanceof Function){dw.push(dx.classname,'.$$properties.',name);
dw.push('.validate.call(this, value);');
}}},__C:function(dz,dA,dB,dC){var dD=(dC==="reset"||dC==="resetThemed"||dC==="resetRuntime");

if(dA){dz.push('if(this.',dB,'===value)return value;');
}else if(dD){dz.push('if(this.',dB,'===undefined)return;');
}},__D:undefined,__E:function(dE,name,dF,dG){if(dF==="setRuntime"){dE.push('this.',this.$$store.runtime[name],'=value;');
}else if(dF==="resetRuntime"){dE.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dE.push('delete this.',this.$$store.runtime[name],';');
}else if(dF==="set"){dE.push('this.',this.$$store.user[name],'=value;');
}else if(dF==="reset"){dE.push('if(this.',this.$$store.user[name],'!==undefined)');
dE.push('delete this.',this.$$store.user[name],';');
}else if(dF==="setThemed"){dE.push('this.',this.$$store.theme[name],'=value;');
}else if(dF==="resetThemed"){dE.push('if(this.',this.$$store.theme[name],'!==undefined)');
dE.push('delete this.',this.$$store.theme[name],';');
}else if(dF==="init"&&dG){dE.push('this.',this.$$store.init[name],'=value;');
}},__F:function(dH,dI,name,dJ,dK){if(dI.inheritable){dH.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{dH.push('var computed, old;');
}dH.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(dJ==="setRuntime"){dH.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dJ==="resetRuntime"){dH.push('delete this.',this.$$store.runtime[name],';');
dH.push('if(this.',this.$$store.user[name],'!==undefined)');
dH.push('computed=this.',this.$$store.user[name],';');
dH.push('else if(this.',this.$$store.theme[name],'!==undefined)');
dH.push('computed=this.',this.$$store.theme[name],';');
dH.push('else if(this.',this.$$store.init[name],'!==undefined){');
dH.push('computed=this.',this.$$store.init[name],';');
dH.push('this.',this.$$store.useinit[name],'=true;');
dH.push('}');
}else{dH.push('old=computed=this.',this.$$store.runtime[name],';');
if(dJ==="set"){dH.push('this.',this.$$store.user[name],'=value;');
}else if(dJ==="reset"){dH.push('delete this.',this.$$store.user[name],';');
}else if(dJ==="setThemed"){dH.push('this.',this.$$store.theme[name],'=value;');
}else if(dJ==="resetThemed"){dH.push('delete this.',this.$$store.theme[name],';');
}else if(dJ==="init"&&dK){dH.push('this.',this.$$store.init[name],'=value;');
}}dH.push('}');
dH.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(dJ==="set"){if(!dI.inheritable){dH.push('old=this.',this.$$store.user[name],';');
}dH.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dJ==="reset"){if(!dI.inheritable){dH.push('old=this.',this.$$store.user[name],';');
}dH.push('delete this.',this.$$store.user[name],';');
dH.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dH.push('computed=this.',this.$$store.runtime[name],';');
dH.push('if(this.',this.$$store.theme[name],'!==undefined)');
dH.push('computed=this.',this.$$store.theme[name],';');
dH.push('else if(this.',this.$$store.init[name],'!==undefined){');
dH.push('computed=this.',this.$$store.init[name],';');
dH.push('this.',this.$$store.useinit[name],'=true;');
dH.push('}');
}else{if(dJ==="setRuntime"){dH.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dI.inheritable){dH.push('computed=this.',this.$$store.user[name],';');
}else{dH.push('old=computed=this.',this.$$store.user[name],';');
}if(dJ==="setThemed"){dH.push('this.',this.$$store.theme[name],'=value;');
}else if(dJ==="resetThemed"){dH.push('delete this.',this.$$store.theme[name],';');
}else if(dJ==="init"&&dK){dH.push('this.',this.$$store.init[name],'=value;');
}}dH.push('}');
if(dI.themeable){dH.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!dI.inheritable){dH.push('old=this.',this.$$store.theme[name],';');
}
if(dJ==="setRuntime"){dH.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dJ==="set"){dH.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dJ==="setThemed"){dH.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dJ==="resetThemed"){dH.push('delete this.',this.$$store.theme[name],';');
dH.push('if(this.',this.$$store.init[name],'!==undefined){');
dH.push('computed=this.',this.$$store.init[name],';');
dH.push('this.',this.$$store.useinit[name],'=true;');
dH.push('}');
}else if(dJ==="init"){if(dK){dH.push('this.',this.$$store.init[name],'=value;');
}dH.push('computed=this.',this.$$store.theme[name],';');
}else if(dJ==="refresh"){dH.push('computed=this.',this.$$store.theme[name],';');
}dH.push('}');
}dH.push('else if(this.',this.$$store.useinit[name],'){');

if(!dI.inheritable){dH.push('old=this.',this.$$store.init[name],';');
}
if(dJ==="init"){if(dK){dH.push('computed=this.',this.$$store.init[name],'=value;');
}else{dH.push('computed=this.',this.$$store.init[name],';');
}}else if(dJ==="set"||dJ==="setRuntime"||dJ==="setThemed"||dJ==="refresh"){dH.push('delete this.',this.$$store.useinit[name],';');

if(dJ==="setRuntime"){dH.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dJ==="set"){dH.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dJ==="setThemed"){dH.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dJ==="refresh"){dH.push('computed=this.',this.$$store.init[name],';');
}}dH.push('}');
if(dJ==="set"||dJ==="setRuntime"||dJ==="setThemed"||dJ==="init"){dH.push('else{');

if(dJ==="setRuntime"){dH.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dJ==="set"){dH.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dJ==="setThemed"){dH.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dJ==="init"){if(dK){dH.push('computed=this.',this.$$store.init[name],'=value;');
}else{dH.push('computed=this.',this.$$store.init[name],';');
}dH.push('this.',this.$$store.useinit[name],'=true;');
}dH.push('}');
}},__G:function(dL,dM,name,dN){dL.push('if(computed===undefined||computed===inherit){');

if(dN==="refresh"){dL.push('computed=value;');
}else{dL.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dL.push('if((computed===undefined||computed===inherit)&&');
dL.push('this.',this.$$store.init[name],'!==undefined&&');
dL.push('this.',this.$$store.init[name],'!==inherit){');
dL.push('computed=this.',this.$$store.init[name],';');
dL.push('this.',this.$$store.useinit[name],'=true;');
dL.push('}else{');
dL.push('delete this.',this.$$store.useinit[name],';}');
dL.push('}');
dL.push('if(old===computed)return value;');
dL.push('if(computed===inherit){');
dL.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dL.push('}');
dL.push('else if(computed===undefined)');
dL.push('delete this.',this.$$store.inherit[name],';');
dL.push('else this.',this.$$store.inherit[name],'=computed;');
dL.push('var backup=computed;');
if(dM.init!==undefined&&dN!=="init"){dL.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dL.push('if(old===undefined)old=null;');
}dL.push('if(computed===undefined||computed==inherit)computed=null;');
},__H:function(dO,dP,name,dQ){if(dQ!=="set"&&dQ!=="setRuntime"&&dQ!=="setThemed"){dO.push('if(computed===undefined)computed=null;');
}dO.push('if(old===computed)return value;');
if(dP.init!==undefined&&dQ!=="init"){dO.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dO.push('if(old===undefined)old=null;');
}},__I:function(dR,dS,name){if(dS.apply){dR.push('this.',dS.apply,'(computed, old, "',name,'");');
}if(dS.event){dR.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",dS.event,"')){","reg.fireEvent(this, '",dS.event,"', qx.event.type.Data, [computed, old]",")}");
}},__J:function(dT,name){dT.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
dT.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
dT.push('}');
}},defer:function(dU){var dW=navigator.userAgent.indexOf(d)!=-1;
var dV=navigator.userAgent.indexOf(U)!=-1;
if(dW||dV){dU.__v=dU.__w;
}}});
})();
(function(){var g="[Class ",f="]",e="extend",d="qx.Class",c=".",b="static";
qx.Bootstrap.define(d,{statics:{define:function(name,h){if(!h){var h={};
}if(h.include&&!(h.include instanceof Array)){h.include=[h.include];
}if(h.implement&&!(h.implement instanceof Array)){h.implement=[h.implement];
}var j=false;

if(!h.hasOwnProperty(e)&&!h.type){h.type=b;
j=true;
}{};
var k=this.__O(name,h.type,h.extend,h.statics,h.construct,h.destruct,h.include);
if(h.extend){if(h.properties){this.__Q(k,h.properties,true);
}if(h.members){this.__S(k,h.members,true,true,false);
}if(h.events){this.__P(k,h.events,true);
}if(h.include){for(var i=0,l=h.include.length;i<l;i++){this.__W(k,h.include[i],false);
}}}if(h.settings){for(var m in h.settings){qx.core.Setting.define(m,h.settings[m]);
}}if(h.variants){for(var m in h.variants){qx.core.Variant.define(m,h.variants[m].allowedValues,h.variants[m].defaultValue);
}}if(h.implement){for(var i=0,l=h.implement.length;i<l;i++){this.__U(k,h.implement[i]);
}}{};
if(h.defer){h.defer.self=k;
h.defer(k,k.prototype,{add:function(name,n){var o={};
o[name]=n;
qx.Class.__Q(k,o,true);
}});
}return k;
},undefine:function(name){delete this.$$registry[name];
var p=name.split(c);
var r=[window];

for(var i=0;i<p.length;i++){r.push(r[i][p[i]]);
}for(var i=r.length-1;i>=1;i--){var q=r[i];
var parent=r[i-1];

if(qx.Bootstrap.isFunction(q)||qx.Bootstrap.objectGetLength(q)===0){delete parent[p[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(s,t){{};
qx.Class.__W(s,t,false);
},patch:function(u,v){{};
qx.Class.__W(u,v,true);
},isSubClassOf:function(w,x){if(!w){return false;
}
if(w==x){return true;
}
if(w.prototype instanceof x){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(y){var z=[];

while(y){if(y.$$properties){z.push.apply(z,qx.Bootstrap.getKeys(y.$$properties));
}y=y.superclass;
}return z;
},getByProperty:function(A,name){while(A){if(A.$$properties&&A.$$properties[name]){return A;
}A=A.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(B,C){return B.$$includes&&B.$$includes.indexOf(C)!==-1;
},getByMixin:function(D,E){var F,i,l;

while(D){if(D.$$includes){F=D.$$flatIncludes;

for(i=0,l=F.length;i<l;i++){if(F[i]===E){return D;
}}}D=D.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(G,H){return !!this.getByMixin(G,H);
},hasOwnInterface:function(I,J){return I.$$implements&&I.$$implements.indexOf(J)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(K){var L=[];

while(K){if(K.$$implements){L.push.apply(L,K.$$flatImplements);
}K=K.superclass;
}return L;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(M,N){var O=M.constructor;

if(this.hasInterface(O,N)){return true;
}
try{qx.Interface.assertObject(M,N);
return true;
}catch(P){}
try{qx.Interface.assert(O,N,false);
return true;
}catch(Q){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return g+this.classname+f;
},$$registry:qx.Bootstrap.$$registry,__K:null,__L:null,__M:function(){},__N:function(){},__O:function(name,R,S,T,U,V,W){var ba;

if(!S&&true){ba=T||{};
qx.Bootstrap.setDisplayNames(ba,name);
}else{var ba={};

if(S){if(!U){U=this.__X();
}
if(this.__ba(S,W)){ba=this.__bb(U,name,R);
}else{ba=U;
}if(R==="singleton"){ba.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(U,name,"constructor");
}if(T){qx.Bootstrap.setDisplayNames(T,name);
var bb;

for(var i=0,a=qx.Bootstrap.getKeys(T),l=a.length;i<l;i++){bb=a[i];
var X=T[bb];
{ba[bb]=X;
};
}}}var Y=qx.Bootstrap.createNamespace(name,ba);
ba.name=ba.classname=name;
ba.basename=Y;
ba.$$type="Class";

if(R){ba.$$classtype=R;
}if(!ba.hasOwnProperty("toString")){ba.toString=this.genericToString;
}
if(S){qx.Bootstrap.extendClass(ba,U,S,name,Y);
if(V){{};
ba.$$destructor=V;
qx.Bootstrap.setDisplayName(V,name,"destruct");
}}this.$$registry[name]=ba;
return ba;
},__P:function(bc,bd,be){var bf,bf;
{};

if(bc.$$events){for(var bf in bd){bc.$$events[bf]=bd[bf];
}}else{bc.$$events=bd;
}},__Q:function(bg,bh,bi){var bj;

if(bi===undefined){bi=false;
}var bk=bg.prototype;

for(var name in bh){bj=bh[name];
{};
bj.name=name;
if(!bj.refine){if(bg.$$properties===undefined){bg.$$properties={};
}bg.$$properties[name]=bj;
}if(bj.init!==undefined){bg.prototype["$$init_"+name]=bj.init;
}if(bj.event!==undefined){var event={};
event[bj.event]="qx.event.type.Data";
this.__P(bg,event,bi);
}if(bj.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bk.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bg);
}}
if(!bj.refine){qx.core.Property.attachMethods(bg,name,bj);
}}},__R:null,__S:function(bl,bm,bn,bo,bp){var bq=bl.prototype;
var bs,br;
qx.Bootstrap.setDisplayNames(bm,bl.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bm),l=a.length;i<l;i++){bs=a[i];
br=bm[bs];
{};
if(bo!==false&&br instanceof Function&&br.$$type==null){if(bp==true){br=this.__T(br,bq[bs]);
}else{if(bq[bs]){br.base=bq[bs];
}br.self=bl;
}{};
}bq[bs]=br;
}},__T:function(bt,bu){if(bu){return function(){var bw=bt.base;
bt.base=bu;
var bv=bt.apply(this,arguments);
bt.base=bw;
return bv;
};
}else{return bt;
}},__U:function(bx,by){{};
var bz=qx.Interface.flatten([by]);

if(bx.$$implements){bx.$$implements.push(by);
bx.$$flatImplements.push.apply(bx.$$flatImplements,bz);
}else{bx.$$implements=[by];
bx.$$flatImplements=bz;
}},__V:function(bA){var name=bA.classname;
var bB=this.__bb(bA,name,bA.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bA),l=a.length;i<l;i++){bC=a[i];
bB[bC]=bA[bC];
}bB.prototype=bA.prototype;
var bE=bA.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bE),l=a.length;i<l;i++){bC=a[i];
var bF=bE[bC];
if(bF&&bF.self==bA){bF.self=bB;
}}for(var bC in this.$$registry){var bD=this.$$registry[bC];

if(!bD){continue;
}
if(bD.base==bA){bD.base=bB;
}
if(bD.superclass==bA){bD.superclass=bB;
}
if(bD.$$original){if(bD.$$original.base==bA){bD.$$original.base=bB;
}
if(bD.$$original.superclass==bA){bD.$$original.superclass=bB;
}}}qx.Bootstrap.createNamespace(name,bB);
this.$$registry[name]=bB;
return bB;
},__W:function(bG,bH,bI){{};

if(this.hasMixin(bG,bH)){return;
}var bL=bG.$$original;

if(bH.$$constructor&&!bL){bG=this.__V(bG);
}var bK=qx.Mixin.flatten([bH]);
var bJ;

for(var i=0,l=bK.length;i<l;i++){bJ=bK[i];
if(bJ.$$events){this.__P(bG,bJ.$$events,bI);
}if(bJ.$$properties){this.__Q(bG,bJ.$$properties,bI);
}if(bJ.$$members){this.__S(bG,bJ.$$members,bI,bI,bI);
}}if(bG.$$includes){bG.$$includes.push(bH);
bG.$$flatIncludes.push.apply(bG.$$flatIncludes,bK);
}else{bG.$$includes=[bH];
bG.$$flatIncludes=bK;
}},__X:function(){function bM(){bM.base.apply(this,arguments);
}return bM;
},__Y:function(){return function(){};
},__ba:function(bN,bO){{};
if(bN&&bN.$$includes){var bP=bN.$$flatIncludes;

for(var i=0,l=bP.length;i<l;i++){if(bP[i].$$constructor){return true;
}}}if(bO){var bQ=qx.Mixin.flatten(bO);

for(var i=0,l=bQ.length;i<l;i++){if(bQ[i].$$constructor){return true;
}}}return false;
},__bb:function(bR,name,bS){var bT;
var bU=function(){var bX=bU;
{};
var bW=bX.$$original.apply(this,arguments);
if(bX.$$includes){var bV=bX.$$flatIncludes;

for(var i=0,l=bV.length;i<l;i++){if(bV[i].$$constructor){bV[i].$$constructor.apply(this,arguments);
}}}{};
return bW;
};
{};
bU.$$original=bR;
bR.wrapper=bU;
return bU;
}},defer:function(){var bY,ca,cb;
{};
}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__by:{},__bz:0,__bA:[],register:function(f){var j=this.__by;

if(!j){return;
}var h=f.$$hash;

if(h==null){var g=this.__bA;

if(g.length>0){h=g.pop();
}else{h=(this.__bz++)+d;
}f.$$hash=h;
}{};
j[h]=f;
},unregister:function(k){var m=k.$$hash;

if(m==null){return;
}var n=this.__by;

if(n&&n[m]){delete n[m];
this.__bA.push(m);
}try{delete k.$$hash;
}catch(o){if(k.removeAttribute){k.removeAttribute(e);
}}},toHashCode:function(p){{};
var r=p.$$hash;

if(r!=null){return r;
}var q=this.__bA;

if(q.length>0){r=q.pop();
}else{r=(this.__bz++)+d;
}return p.$$hash=r;
},clearHashCode:function(s){{};
var t=s.$$hash;

if(t!=null){this.__bA.push(t);
try{delete s.$$hash;
}catch(u){if(s.removeAttribute){s.removeAttribute(e);
}}}},fromHashCode:function(v){return this.__by[v]||null;
},shutdown:function(){this.inShutDown=true;
var x=this.__by;
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
delete this.__by;
},getRegistry:function(){return this.__by;
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var u="gecko",t="1.9.0.0",s=".",r="[object Opera]",q="function",p="[^\\.0-9]",o="525.26",n="",m="mshtml",l="AppleWebKit/",e="9.0",k="unknown",h="9.6.0",c="4.0",b="Gecko",g="opera",f="webkit",i="0.0.0",a="5.0",j="8.0",d="qx.bom.client.Engine";
qx.Bootstrap.define(d,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__bc:function(){var v=k;
var z=i;
var y=window.navigator.userAgent;
var B=false;
var x=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==r){v=g;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(y)){z=RegExp.$1+s+RegExp.$2;

if(RegExp.$3!=n){z+=s+RegExp.$3;
}}else{x=true;
z=h;
}}else if(window.navigator.userAgent.indexOf(l)!=-1){v=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(y)){z=RegExp.$1;
var A=RegExp(p).exec(z);

if(A){z=z.slice(0,A.index);
}}else{x=true;
z=o;
}}else if(window.controllers&&window.navigator.product===b){v=u;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(y)){z=RegExp.$1;
}else{x=true;
z=t;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(y)){v=m;
z=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(z<8&&/Trident\/([^\);]+)(\)|;)/.test(y)){if(RegExp.$1==c){z=j;
}else if(RegExp.$1==a){z=e;
}}this.MSHTML=true;
}else{var w=window.qxFail;

if(w&&typeof w===q){var v=w();

if(v.NAME&&v.FULLVERSION){v=v.NAME;
this[v.toUpperCase()]=true;
z=v.FULLVERSION;
}}else{B=true;
x=true;
z=t;
v=u;
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+y+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=B;
this.UNKNOWN_VERSION=x;
this.NAME=v;
this.FULLVERSION=z;
this.VERSION=parseFloat(z);
}},defer:function(C){C.__bc();
}});
})();
(function(){var x="off",w="on",u="|",t="default",s="object",r="&",q="qx.aspects",p="qx.mobile.nativescroll",o="qx.mobile.emulatetouch",n="$",e="qx.allowUrlVariants",m="qx.debug",h="qx.client",c="qx.dynlocale",b="webkit",g="qxvariant",f="opera",j=":",a="qx.core.Variant",k="mshtml",d="gecko";
qx.Bootstrap.define(a,{statics:{__bd:{},__be:{},compilerIsSet:function(){return true;
},define:function(y,z,A){{};

if(!this.__bd[y]){this.__bd[y]={};
}else{}this.__bd[y].allowedValues=z;
this.__bd[y].defaultValue=A;
},get:function(B){var C=this.__bd[B];
{};

if(C.value!==undefined){return C.value;
}return C.defaultValue;
},__bf:function(){if(window.qxvariants){for(var D in qxvariants){{};

if(!this.__bd[D]){this.__bd[D]={};
}this.__bd[D].value=qxvariants[D];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(E){}this.__bg(this.__bd);
}},__bg:function(){if(qx.core.Setting.get(e)!=true){return;
}var F=document.location.search.slice(1).split(r);

for(var i=0;i<F.length;i++){var G=F[i].split(j);

if(G.length!=3||G[0]!=g){continue;
}var H=G[1];

if(!this.__bd[H]){this.__bd[H]={};
}this.__bd[H].value=decodeURIComponent(G[2]);
}},select:function(I,J){{};

for(var K in J){if(this.isSet(I,K)){return J[K];
}}
if(J[t]!==undefined){return J[t];
}{};
},isSet:function(L,M){var N=L+n+M;

if(this.__be[N]!==undefined){return this.__be[N];
}var P=false;
if(M.indexOf(u)<0){P=this.get(L)===M;
}else{var O=M.split(u);

for(var i=0,l=O.length;i<l;i++){if(this.get(L)===O[i]){P=true;
break;
}}}this.__be[N]=P;
return P;
},__bh:function(v){return typeof v===s&&v!==null&&v instanceof Array;
},__bi:function(v){return typeof v===s&&v!==null&&!(v instanceof Array);
},__bj:function(Q,R){for(var i=0,l=Q.length;i<l;i++){if(Q[i]==R){return true;
}}return false;
}},defer:function(S){S.define(h,[d,k,f,b],qx.bom.client.Engine.NAME);
S.define(m,[w,x],w);
S.define(q,[w,x],x);
S.define(c,[w,x],w);
S.define(o,[w,x],x);
S.define(p,[w,x],x);
S.__bf();
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
case 2:case 3:case 4:return s.nodeValue;
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
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="UNKNOWN_",j="c",h="DOM_",g="__bp",c="WIN_",f="__bo",e="QX_",b="qx.event.Manager",a="capture",d="DOCUMENT_";
qx.Class.define(b,{extend:Object,construct:function(s,t){this.__bk=s;
this.__bl=qx.core.ObjectRegistry.toHashCode(s);
this.__bm=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__bn={};
this.__bo={};
this.__bp={};
this.__bq={};
},statics:{__br:0,getNextUniqueId:function(){return (this.__br++)+o;
}},members:{__bm:null,__bn:null,__bp:null,__bs:null,__bo:null,__bq:null,__bk:null,__bl:null,getWindow:function(){return this.__bk;
},getWindowId:function(){return this.__bl;
},getHandler:function(u){var v=this.__bo[u.classname];

if(v){return v;
}return this.__bo[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__bp[w.classname];

if(x){return x;
}return this.__bp[w.classname]=new w(this,this.__bm);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__bn[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__bn[M];
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
var X=this.__bn[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__bt(P,W,R);
}else{this.__bu(P,W,R);
}}}},hasListener:function(Y,ba,bb){{};
var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__bn[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return !!(bd&&bd.length>0);
},importListeners:function(bg,bh){{};
var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__bn[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__bt(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__br++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
{};
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__bn[bx];

if(!bz){bz=this.__bn[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__bt(bp,bq,bs);
}var by=(qx.event.Manager.__br++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=h+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__bk){bF=true;
bL=c+bB;
}else if(bA.classname){bO=true;
bL=e+bA.classname+n+bB;
}else{bL=k+bA+n+bB;
}var bH=this.__bq;

if(bH[bL]){return bH[bL];
}var bK=this.__bm.getHandlers();
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
},__bt:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}{};
},removeListener:function(bT,bU,bV,self,bW){var cb;
{};
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__bn[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__bu(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
{};
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__bn[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__bu(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__bn[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===a;
this.__bu(cq,cv,cr);
}}delete this.__bn[cu];
return true;
},deleteAllListeners:function(cx){delete this.__bn[cx];
},__bu:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

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
}var cG=this.__bm.getDispatchers();
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
},dispose:function(){this.__bm.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,f);
qx.util.DisposeUtil.disposeMap(this,g);
this.__bn=this.__bk=this.__bs=null;
this.__bm=this.__bq=null;
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
qx.Class.define(c,{statics:{__bv:{},getManager:function(d){if(d==null){{};
d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__bv[f];

if(!e){e=new qx.event.Manager(d,this);
this.__bv[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__bv[h];
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
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bw:[],addHandler:function(Q){{};
this.__bw.push(Q);
this.__bw.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bw;
},__bx:[],addDispatcher:function(R,S){{};
this.__bx.push(R);
this.__bx.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bx;
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
},members:{__bB:0,__bC:0,__bD:false,__bE:0,__bF:null,__bG:null,setMaxEntries:function(c){this.__bG=c;
this.clear();
},getMaxEntries:function(){return this.__bG;
},addEntry:function(d){this.__bF[this.__bB]=d;
this.__bB=this.__bH(this.__bB,1);
var e=this.getMaxEntries();

if(this.__bC<e){this.__bC++;
}if(this.__bD&&(this.__bE<e)){this.__bE++;
}},mark:function(){this.__bD=true;
this.__bE=0;
},clearMark:function(){this.__bD=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__bC){f=this.__bC;
}if(g&&this.__bD&&(f>this.__bE)){f=this.__bE;
}
if(f>0){var i=this.__bH(this.__bB,-1);
var h=this.__bH(i,-f+1);
var j;

if(h<=i){j=this.__bF.slice(h,i+1);
}else{j=this.__bF.slice(h,this.__bC).concat(this.__bF.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__bF=new Array(this.getMaxEntries());
this.__bC=0;
this.__bE=0;
this.__bB=0;
},__bH:function(k,l){var m=this.getMaxEntries();
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
(function(){var m=":",l="qx.client",k="Error created at",j="anonymous",h="...",g="qx.dev.StackTrace",f="",e="\n",d="?",c="/source/class/",a="of linked script",b=".";
qx.Class.define(g,{statics:{getStackTrace:qx.core.Variant.select(l,{"gecko":function(){try{throw new Error();
}catch(A){var u=this.getStackTraceFromError(A);
qx.lang.Array.removeAt(u,0);
var s=this.getStackTraceFromCaller(arguments);
var q=s.length>u.length?s:u;

for(var i=0;i<Math.min(s.length,u.length);i++){var r=s[i];

if(r.indexOf(j)>=0){continue;
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
}}),getStackTraceFromCaller:qx.core.Variant.select(l,{"opera":function(E){return [];
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

if(G[I]){K.push(h);
break;
}G[I]=J;
}return K;
}}),getStackTraceFromError:qx.core.Variant.select(l,{"gecko":function(M){if(!M.stack){return [];
}var S=/@(.+):(\d+)$/gm;
var N;
var O=[];

while((N=S.exec(M.stack))!=null){var P=N[1];
var R=N[2];
var Q=this.__bI(P);
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
if(W){var Y=this.__bI(W[1]);
V.push(Y+W[2]);
}else{V.push(U[1]);
}}return V;
}else if(T.sourceURL&&T.line){return [this.__bI(T.sourceURL)+m+T.line];
}else{return [];
}},"opera":function(bc){if(bc.stacktrace){var be=bc.stacktrace;

if(be.indexOf(k)>=0){be=be.split(k)[0];
}if(be.indexOf(a)>=0){var bo=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bi=bf[2];
var bm=this.__bI(bi);
bg.push(bm+m+bn);
}}else{var bo=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bh=bf[2];
var bi=bf[3];
var bm=this.__bI(bi);
bg.push(bm+m+bn+m+bh);
}}return bg;
}else if(bc.message.indexOf("Backtrace:")>=0){var bg=[];
var bj=qx.lang.String.trim(bc.message.split("Backtrace:")[1]);
var bk=bj.split(e);

for(var i=0;i<bk.length;i++){var bd=bk[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(bd&&bd.length>=2){var bn=bd[1];
var bl=this.__bI(bd[2]);
bg.push(bl+m+bn);
}}return bg;
}else{return [];
}},"default":function(){return [];
}}),__bI:function(bp){var bt=c;
var bq=bp.indexOf(bt);
var bs=bp.indexOf(d);

if(bs>=0){bp=bp.substring(0,bs);
}var br=(bq==-1)?bp:bp.substring(bq+bt.length).replace(/\//g,b).replace(/\.js$/,f);
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
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",H="number",G="stringify",F="]",E="date",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",s="qx.log.Logger",t="[",q="#",r="warn",o="document",p="{...(",m="text[",n="[...(",u="\n",v=")}",x=")]",w="object";
qx.Class.define(s,{statics:{__bJ:A,setLevel:function(I){this.__bJ=I;
},getLevel:function(){return this.__bJ;
},setTreshold:function(J){this.__bM.setMaxMessages(J);
},getTreshold:function(){return this.__bM.getMaxMessages();
},__bK:{},__bL:0,register:function(K){if(K.$$id){return;
}var M=this.__bL++;
this.__bK[M]=K;
K.$$id=M;
var L=this.__bN;
var N=this.__bM.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__bJ]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__bK[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__bO(A,arguments);
},info:function(S,T){qx.log.Logger.__bO(e,arguments);
},warn:function(U,V){qx.log.Logger.__bO(r,arguments);
},error:function(W,X){qx.log.Logger.__bO(j,arguments);
},trace:function(Y){qx.log.Logger.__bO(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
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
},clear:function(){this.__bM.clearHistory();
},__bM:new qx.log.appender.RingBuffer(50),__bN:{debug:0,info:1,warn:2,error:3},__bO:function(bv,bw){var bB=this.__bN;

if(bB[bv]<bB[this.__bJ]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__bQ(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__bM.process(bD);
var bE=this.__bK;

for(var bz in bE){bE[bz].process(bD);
}},__bP:function(bF){if(bF===undefined){return y;
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
},__bQ:function(bH,bI){var bP=this.__bP(bH);
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
}bL.push(this.__bQ(bH[i],false));
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
bJ=this.__bQ(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__bO(bR[i][0],bR[i][1]);
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
},__bR:qx.event.Registration,addListener:function(H,I,self,J){if(!this.$$disposed){return this.__bR.addListener(this,H,I,self,J);
}return null;
},addListenerOnce:function(K,L,self,M){var N=function(e){this.removeListener(K,N,this,M);
L.call(self||this,e);
};
return this.addListener(K,N,this,M);
},removeListener:function(O,P,self,Q){if(!this.$$disposed){return this.__bR.removeListener(this,O,P,self,Q);
}return false;
},removeListenerById:function(R){if(!this.$$disposed){return this.__bR.removeListenerById(this,R);
}return false;
},hasListener:function(S,T){return this.__bR.hasListener(this,S,T);
},dispatchEvent:function(U){if(!this.$$disposed){return this.__bR.dispatchEvent(this,U);
}return true;
},fireEvent:function(V,W,X){if(!this.$$disposed){return this.__bR.fireEvent(this,V,W,X);
}return true;
},fireNonBubblingEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__bR.fireNonBubblingEvent(this,Y,ba,bb);
}return true;
},fireDataEvent:function(bc,bd,be,bf){if(!this.$$disposed){if(be===undefined){be=null;
}return this.__bR.fireNonBubblingEvent(this,bc,qx.event.type.Data,[bd,be,!!bf]);
}return true;
},__bS:null,setUserData:function(bg,bh){if(!this.__bS){this.__bS={};
}this.__bS[bg]=bh;
},getUserData:function(bi){if(!this.__bS){return null;
}var bj=this.__bS[bi];
return bj===undefined?null:bj;
},__bT:qx.log.Logger,debug:function(bk){this.__bU(f,arguments);
},info:function(bl){this.__bU(m,arguments);
},warn:function(bm){this.__bU(h,arguments);
},error:function(bn){this.__bU(j,arguments);
},trace:function(){this.__bT.trace(this);
},__bU:function(bo,bp){var bq=qx.lang.Array.fromArguments(bp);
bq.unshift(this);
this.__bT[bo].apply(this.__bT,bq);
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
}if(this.__bV){this.__bV();
}{};
},__bV:null,__bW:function(){var bx=qx.Class.getProperties(this.constructor);

for(var i=0,l=bx.length;i<l;i++){delete this[d+bx[i]];
}},_disposeObjects:function(by){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bz){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bA){qx.util.DisposeUtil.disposeArray(this,bA);
},_disposeMap:function(bB){qx.util.DisposeUtil.disposeMap(this,bB);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bC,bD){{};
var bF=navigator.userAgent.indexOf(n)!=-1;
var bE=navigator.userAgent.indexOf(c)!=-1;
if(bF||bE){bD.__bV=bD.__bW;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__bS=null;
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
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(d,e){this.__cf=d||null;
this.__cg=e||window;

if(qx.core.Setting.get(c)===b){if(d&&window.onerror){var f=qx.Bootstrap.bind(this.__ci,this);

if(this.__ch==null){this.__ch=window.onerror;
}var self=this;
window.onerror=function(g,h,i){self.__ch(g,h,i);
f(g,h,i);
};
}
if(d&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__ci,this);
}if(this.__cf==null){if(this.__ch!=null){window.onerror=this.__ch;
this.__ch=null;
}else{window.onerror=null;
}}}},__ci:function(j,k,l){if(this.__cf){this.handleError(new qx.core.WindowError(j,k,l));
return true;
}},observeMethod:function(m){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__cf){return m.apply(this,arguments);
}
try{return m.apply(this,arguments);
}catch(n){self.handleError(new qx.core.GlobalError(n,arguments));
}};
}else{return m;
}},handleError:function(o){if(this.__cf){this.__cf.call(this.__cg,o);
}}},defer:function(p){qx.core.Setting.define(c,b);
p.setErrorHandler(null,null);
}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__cm=b+(c&&c.message?c.message:c);
Error.call(this,this.__cm);
this.__cn=d;
this.__co=c;
},members:{__co:null,__cn:null,__cm:null,toString:function(){return this.__cm;
},getArguments:function(){return this.__cn;
},getSourceException:function(){return this.__co;
}},destruct:function(){this.__co=null;
this.__cn=null;
this.__cm=null;
}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var m="ready",l="qx.client",k="mshtml",j="load",i="unload",h="qx.event.handler.Application",g="complete",f="qx.application",d="gecko|opera|webkit",c="left",a="DOMContentLoaded",b="shutdown";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){qx.core.Object.call(this);
this._window=n.getWindow();
this.__hz=false;
this.__hA=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var o=qx.event.handler.Application.$$instance;

if(o){o.__hD();
}}},members:{canHandleEvent:function(p,q){},registerEvent:function(r,s,t){},unregisterEvent:function(u,v,w){},__hB:null,__hz:null,__hA:null,__hC:null,__hD:function(){if(!this.__hB&&this.__hz&&qx.$$loader.scriptLoaded){try{var x=qx.core.Setting.get(f);

if(!qx.Class.getByName(x)){return;
}}catch(e){}if(qx.core.Variant.isSet(l,k)){if(qx.event.Registration.hasListener(this._window,m)){this.__hB=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__hB=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__hB;
},_initObserver:function(){if(qx.$$domReady||document.readyState==g||document.readyState==m){this.__hz=true;
this.__hD();
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
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__hz=true;
this.__hD();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__hC){this.__hC=true;

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
qx.Class.define(b,{statics:{getApplication:function(){return this.__hE||null;
},ready:function(){if(this.__hE){return;
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

if(i){this.__hE=new i;
var g=new Date;
this.__hE.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-g)+"ms");
var g=new Date;
this.__hE.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-g)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+h);
}},__hF:function(e){var j=this.__hE;

if(j){e.setReturnValue(j.close());
}},__hG:function(){var k=this.__hE;

if(k){k.terminate();
}}},defer:function(l){qx.event.Registration.addListener(window,f,l.ready,l);
qx.event.Registration.addListener(window,a,l.__hG,l);
qx.event.Registration.addListener(window,c,l.__hF,l);
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
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__sW:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__sW;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__sW=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__sW=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var a="demobrowser.demo.ui.WidgetOverview";
qx.Class.define(a,{extend:qx.application.Standalone,construct:function(){qx.application.Standalone.call(this);
},members:{main:function(){qx.application.Standalone.prototype.main.call(this);
{};
var b=this.getRoot();
var scroll=new qx.ui.container.Scroll();
b.add(scroll,{edge:0});
var c=new demobrowser.demo.ui.overview.TabView();
c.set({minWidth:800,minHeight:800});
scroll.add(c);
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
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cd:null,__ce:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__cd=b;
this.__ce=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__cd=this.__cd;
f.__ce=this.__ce;
return f;
},getData:function(){return this.__cd;
},getOldData:function(){return this.__ce;
}},destruct:function(){this.__cd=this.__ce=null;
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cj=c;
this.__ck=d||b;
this.__cl=e===undefined?-1:e;
},members:{__cj:null,__ck:null,__cl:null,toString:function(){return this.__cj;
},getUri:function(){return this.__ck;
},getLineNumber:function(){return this.__cl;
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
this.__cp={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__cp:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__cp[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__cp){return;
}var h=g.classname;
var j=this.__cp[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__cp[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__cp;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__cp;
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
qx.Class.define(v,{statics:{DEBUG_ON:false,__cq:{},bind:function(E,F,G,H,I){var T=this.__cs(E,F,G,H,I);
var O=F.split(d);
var K=this.__cy(O);
var S=[];
var P=[];
var Q=[];
var M=[];
var N=E;
try{for(var i=0;i<O.length;i++){if(K[i]!==l){M.push(g);
}else{M.push(this.__ct(N,O[i]));
}S[i]=N;
if(i==O.length-1){if(K[i]!==l){var X=K[i]===h?N.length-1:K[i];
var J=N.getItem(X);
this.__cx(J,G,H,I,E);
Q[i]=this.__cz(N,M[i],G,H,I,K[i]);
}else{if(O[i]!=null&&N[m+qx.lang.String.firstUp(O[i])]!=null){var J=N[m+qx.lang.String.firstUp(O[i])]();
this.__cx(J,G,H,I,E);
}Q[i]=this.__cz(N,M[i],G,H,I);
}}else{var U={index:i,propertyNames:O,sources:S,listenerIds:Q,arrayIndexValues:K,targetObject:G,targetPropertyChain:H,options:I,listeners:P};
var R=qx.lang.Function.bind(this.__cr,this,U);
P.push(R);
Q[i]=N.addListener(M[i],R);
}if(N[m+qx.lang.String.firstUp(O[i])]==null){N=null;
}else if(K[i]!==l){N=N[m+qx.lang.String.firstUp(O[i])](K[i]);
}else{N=N[m+qx.lang.String.firstUp(O[i])]();
}
if(!N){break;
}}}catch(Y){for(var i=0;i<S.length;i++){if(S[i]&&Q[i]){S[i].removeListenerById(Q[i]);
}}var W=T.targets;
var L=T.listenerIds[i];
for(var i=0;i<W.length;i++){if(W[i]&&L[i]){W[i].removeListenerById(L[i]);
}}throw Y;
}var V={type:D,listenerIds:Q,sources:S,targetListenerIds:T.listenerIds,targets:T.targets};
this.__cA(V,E,F,G,H);
return V;
},__cr:function(ba){if(ba.options&&ba.options.onUpdate){ba.options.onUpdate(ba.sources[ba.index],ba.targetObject);
}for(var j=ba.index+1;j<ba.propertyNames.length;j++){var be=ba.sources[j];
ba.sources[j]=null;

if(!be){continue;
}be.removeListenerById(ba.listenerIds[j]);
}var be=ba.sources[ba.index];
for(var j=ba.index+1;j<ba.propertyNames.length;j++){if(ba.arrayIndexValues[j-1]!==l){be=be[m+qx.lang.String.firstUp(ba.propertyNames[j-1])](ba.arrayIndexValues[j-1]);
}else{be=be[m+qx.lang.String.firstUp(ba.propertyNames[j-1])]();
}ba.sources[j]=be;
if(!be){this.__cu(ba.targetObject,ba.targetPropertyChain);
break;
}if(j==ba.propertyNames.length-1){if(qx.Class.implementsInterface(be,qx.data.IListData)){var bf=ba.arrayIndexValues[j]===h?be.length-1:ba.arrayIndexValues[j];
var bc=be.getItem(bf);
this.__cx(bc,ba.targetObject,ba.targetPropertyChain,ba.options,ba.sources[ba.index]);
ba.listenerIds[j]=this.__cz(be,g,ba.targetObject,ba.targetPropertyChain,ba.options,ba.arrayIndexValues[j]);
}else{if(ba.propertyNames[j]!=null&&be[m+qx.lang.String.firstUp(ba.propertyNames[j])]!=null){var bc=be[m+qx.lang.String.firstUp(ba.propertyNames[j])]();
this.__cx(bc,ba.targetObject,ba.targetPropertyChain,ba.options,ba.sources[ba.index]);
}var bd=this.__ct(be,ba.propertyNames[j]);
ba.listenerIds[j]=this.__cz(be,bd,ba.targetObject,ba.targetPropertyChain,ba.options);
}}else{if(ba.listeners[j]==null){var bb=qx.lang.Function.bind(this.__cr,this,ba);
ba.listeners.push(bb);
}if(qx.Class.implementsInterface(be,qx.data.IListData)){var bd=g;
}else{var bd=this.__ct(be,ba.propertyNames[j]);
}ba.listenerIds[j]=be.addListener(bd,ba.listeners[j]);
}}},__cs:function(bg,bh,bi,bj,bk){var bo=bj.split(d);
var bm=this.__cy(bo);
var bt=[];
var bs=[];
var bq=[];
var bp=[];
var bn=bi;
for(var i=0;i<bo.length-1;i++){if(bm[i]!==l){bp.push(g);
}else{try{bp.push(this.__ct(bn,bo[i]));
}catch(e){break;
}}bt[i]=bn;
var br=function(){for(var j=i+1;j<bo.length-1;j++){var bw=bt[j];
bt[j]=null;

if(!bw){continue;
}bw.removeListenerById(bq[j]);
}var bw=bt[i];
for(var j=i+1;j<bo.length-1;j++){var bu=qx.lang.String.firstUp(bo[j-1]);
if(bm[j-1]!==l){var bx=bm[j-1]===h?bw.getLength()-1:bm[j-1];
bw=bw[m+bu](bx);
}else{bw=bw[m+bu]();
}bt[j]=bw;
if(bs[j]==null){bs.push(br);
}if(qx.Class.implementsInterface(bw,qx.data.IListData)){var bv=g;
}else{try{var bv=qx.data.SingleValueBinding.__ct(bw,bo[j]);
}catch(e){break;
}}bq[j]=bw.addListener(bv,bs[j]);
}qx.data.SingleValueBinding.updateTarget(bg,bh,bi,bj,bk);
};
bs.push(br);
bq[i]=bn.addListener(bp[i],br);
var bl=qx.lang.String.firstUp(bo[i]);
if(bn[m+bl]==null){bn=null;
}else if(bm[i]!==l){bn=bn[m+bl](bm[i]);
}else{bn=bn[m+bl]();
}
if(!bn){break;
}}return {listenerIds:bq,targets:bt};
},updateTarget:function(by,bz,bA,bB,bC){var bG=this.__cw(by,bz);

if(bG!=null){var bI=bz.substring(bz.lastIndexOf(d)+1,bz.length);
if(bI.charAt(bI.length-1)==f){var bD=bI.substring(bI.lastIndexOf(k)+1,bI.length-1);
var bF=bI.substring(0,bI.lastIndexOf(k));
var bH=bG[m+qx.lang.String.firstUp(bF)]();

if(bD==h){bD=bH.length-1;
}
if(bH!=null){var bE=bH.getItem(bD);
}}else{var bE=bG[m+qx.lang.String.firstUp(bI)]();
}}bE=qx.data.SingleValueBinding.__cB(bE,bA,bB,bC);
this.__cv(bA,bB,bE);
},__ct:function(bJ,bK){var bL=this.__cC(bJ,bK);
if(bL==null){if(qx.Class.supportsEvent(bJ.constructor,bK)){bL=bK;
}else if(qx.Class.supportsEvent(bJ.constructor,g+qx.lang.String.firstUp(bK))){bL=g+qx.lang.String.firstUp(bK);
}else{throw new qx.core.AssertionError(u+bK+w+bJ+n);
}}return bL;
},__cu:function(bM,bN){var bO=this.__cw(bM,bN);

if(bO!=null){var bP=bN.substring(bN.lastIndexOf(d)+1,bN.length);
if(bP.charAt(bP.length-1)==f){this.__cv(bM,bN,null);
return;
}if(bO[B+qx.lang.String.firstUp(bP)]!=undefined){bO[B+qx.lang.String.firstUp(bP)]();
}else{bO[a+qx.lang.String.firstUp(bP)](null);
}}},__cv:function(bQ,bR,bS){var bW=this.__cw(bQ,bR);

if(bW!=null){var bX=bR.substring(bR.lastIndexOf(d)+1,bR.length);
if(bX.charAt(bX.length-1)==f){var bT=bX.substring(bX.lastIndexOf(k)+1,bX.length-1);
var bV=bX.substring(0,bX.lastIndexOf(k));
var bU=bQ;

if(!qx.Class.implementsInterface(bU,qx.data.IListData)){bU=bW[m+qx.lang.String.firstUp(bV)]();
}
if(bT==h){bT=bU.length-1;
}
if(bU!=null){bU.setItem(bT,bS);
}}else{bW[a+qx.lang.String.firstUp(bX)](bS);
}}},__cw:function(bY,ca){var cd=ca.split(d);
var ce=bY;
for(var i=0;i<cd.length-1;i++){try{var cc=cd[i];
if(cc.indexOf(f)==cc.length-1){var cb=cc.substring(cc.indexOf(k)+1,cc.length-1);
cc=cc.substring(0,cc.indexOf(k));
}if(cc!=l){ce=ce[m+qx.lang.String.firstUp(cc)]();
}if(cb!=null){if(cb==h){cb=ce.length-1;
}ce=ce.getItem(cb);
cb=null;
}}catch(cf){return null;
}}return ce;
},__cx:function(cg,ch,ci,cj,ck){cg=this.__cB(cg,ch,ci,cj);
if(cg===undefined){this.__cu(ch,ci);
}if(cg!==undefined){try{this.__cv(ch,ci,cg);
if(cj&&cj.onUpdate){cj.onUpdate(ck,ch,cg);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cj&&cj.onSetFail){cj.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cg+" on "+ch+". Error message: "+e);
}}}},__cy:function(cl){var cm=[];
for(var i=0;i<cl.length;i++){var name=cl[i];
if(qx.lang.String.endsWith(name,f)){var cn=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cn!==h){if(cn==l||isNaN(parseInt(cn,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){cl[i]=name.substring(0,name.indexOf(k));
cm[i]=l;
cm[i+1]=cn;
cl.splice(i+1,0,C);
i++;
}else{cm[i]=cn;
cl.splice(i,1,C);
}}else{cm[i]=l;
}}return cm;
},__cz:function(co,cp,cq,cr,cs,ct){var cu;
{};
var cw=function(cx,e){if(cx!==l){if(cx===h){cx=co.length-1;
}var cA=co.getItem(cx);
if(cA===undefined){qx.data.SingleValueBinding.__cu(cq,cr);
}var cy=e.getData().start;
var cz=e.getData().end;

if(cx<cy||cx>cz){return;
}}else{var cA=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+co+" by "+cp+" to "+cq+" ("+cr+")");
qx.log.Logger.debug("Data before conversion: "+cA);
}cA=qx.data.SingleValueBinding.__cB(cA,cq,cr,cs);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+cA);
}try{if(cA!==undefined){qx.data.SingleValueBinding.__cv(cq,cr,cA);
}else{qx.data.SingleValueBinding.__cu(cq,cr);
}if(cs&&cs.onUpdate){cs.onUpdate(co,cq,cA);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cs&&cs.onSetFail){cs.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cA+" on "+cq+". Error message: "+e);
}}};
if(!ct){ct=l;
}cw=qx.lang.Function.bind(cw,co,ct);
var cv=co.addListener(cp,cw);
return cv;
},__cA:function(cB,cC,cD,cE,cF){if(this.__cq[cC.toHashCode()]===undefined){this.__cq[cC.toHashCode()]=[];
}this.__cq[cC.toHashCode()].push([cB,cC,cD,cE,cF]);
},__cB:function(cG,cH,cI,cJ){if(cJ&&cJ.converter){var cL;

if(cH.getModel){cL=cH.getModel();
}return cJ.converter(cG,cL);
}else{var cN=this.__cw(cH,cI);
var cO=cI.substring(cI.lastIndexOf(d)+1,cI.length);
if(cN==null){return cG;
}var cM=qx.Class.getPropertyDefinition(cN.constructor,cO);
var cK=cM==null?l:cM.check;
return this.__cD(cG,cK);
}},__cC:function(cP,cQ){var cR=qx.Class.getPropertyDefinition(cP.constructor,cQ);

if(cR==null){return null;
}return cR.event;
},__cD:function(cS,cT){var cU=qx.lang.Type.getClass(cS);
if((cU==c||cU==b)&&(cT==x||cT==q)){cS=parseInt(cS,10);
}if((cU==z||cU==c||cU==p)&&cT==b){cS=cS+l;
}if((cU==c||cU==b)&&(cT==c||cT==t)){cS=parseFloat(cS);
}return cS;
},removeBindingFromObject:function(cV,cW){if(cW.type==D){for(var i=0;i<cW.sources.length;i++){if(cW.sources[i]){cW.sources[i].removeListenerById(cW.listenerIds[i]);
}}for(var i=0;i<cW.targets.length;i++){if(cW.targets[i]){cW.targets[i].removeListenerById(cW.targetListenerIds[i]);
}}}else{cV.removeListenerById(cW);
}var cX=this.__cq[cV.toHashCode()];
if(cX!=undefined){for(var i=0;i<cX.length;i++){if(cX[i][0]==cW){qx.lang.Array.remove(cX,cX[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cY){{};
var da=this.__cq[cY.toHashCode()];

if(da!=undefined){for(var i=da.length-1;i>=0;i--){this.removeBindingFromObject(cY,da[i][0]);
}}},getAllBindingsForObject:function(db){if(this.__cq[db.toHashCode()]===undefined){this.__cq[db.toHashCode()]=[];
}return this.__cq[db.toHashCode()];
},removeAllBindings:function(){for(var dd in this.__cq){var dc=qx.core.ObjectRegistry.fromHashCode(dd);
if(dc==null){delete this.__cq[dd];
continue;
}this.removeAllBindingsForObject(dc);
}this.__cq={};
},getAllBindings:function(){return this.__cq;
},showBindingInLog:function(de,df){var dh;
for(var i=0;i<this.__cq[de.toHashCode()].length;i++){if(this.__cq[de.toHashCode()][i][0]==df){dh=this.__cq[de.toHashCode()][i];
break;
}}
if(dh===undefined){var dg=r;
}else{var dg=s+dh[1]+A+dh[2]+y+dh[3]+A+dh[4]+o;
}qx.log.Logger.debug(dg);
},showAllBindingsInLog:function(){for(var dj in this.__cq){var di=qx.core.ObjectRegistry.fromHashCode(dj);

for(var i=0;i<this.__cq[dj].length;i++){this.showBindingInLog(di,this.__cq[dj][i][0]);
}}}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__cE=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cE:null,message:null,getComment:function(){return this.__cE;
},toString:function(){return this.__cE+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__cF=qx.dev.StackTrace.getStackTrace();
},members:{__cF:null,getStackTrace:function(){return this.__cF;
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
qx.Class.define(G,{statics:{__cG:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__cH:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cI:function(){var L=qx.lang.Generics.__cG;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__cH(N,O);
}}}}},defer:function(Q){Q.__cI();
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
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__eo:function(){var o=navigator.platform;
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
}}},defer:function(p){p.__eo();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",I=")",H="winxp",G="freebsd",F="sunos",E="SV1",D="|",C="nintendods",B="winnt4",A="wince",z="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="iPad",v="symbian",u="win7",x="g",w="qx.bom.client.System",y=" Mobile/";
qx.Bootstrap.define(w,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,IPAD:false,UNKNOWN_SYSTEM:false,__ep:{"Windows NT 6.1":u,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":H,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":B,"Win 9x 4.90":z,"Windows CE":A,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":G,"NetBSD":m,"OpenBSD":k,"SunOS":F,"Symbian System":v,"Nitro":C,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__eq:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__ep){K.push(J);
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
}}else{this.NAME=this.__ep[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(E)!==-1){this.SP2=true;
}}}}},defer:function(N){N.__eq();
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
}else if(this.isRgbString(m)){return this.__iA();
}else if(this.isHex3String(m)){return this.__iC();
}else if(this.isHex6String(m)){return this.__iD();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__iA();
}else if(this.isRgbaString(n)){return this.__iB();
}else if(this.isHex3String(n)){return this.__iC();
}else if(this.isHex6String(n)){return this.__iD();
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
},__iA:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__iB:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__iC:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__iD:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__iC(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__iD(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__iC(P);
}
if(this.isHex6String(P)){return this.__iD(P);
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
(function(){var h="object",g="_applyTheme",f="__hH",e="qx.theme.manager.Decoration",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:g,event:c}},members:{__hH:null,resolve:function(i){if(!i){return null;
}
if(typeof i===h){return i;
}var l=this.getTheme();

if(!l){return null;
}var l=this.getTheme();

if(!l){return null;
}var m=this.__hH;

if(!m){m=this.__hH={};
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
if(!s){this.__hH={};
}}},destruct:function(){this._disposeMap(f);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__hI={};
this.add(a,h);
},members:{__hI:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__hI[k]){return this.__hI[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__hI[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__hI[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__hI[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
}},destruct:function(){this.__hI=null;
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
},__ka:function(o,p){if(o[p].include){var q=o[o[p].include];
o[p].include=null;
delete o[p].include;
o[p]=qx.lang.Object.mergeWith(o[p],q,false);
this.__ka(o,p);
}},_applyTheme:function(r){var s=this._getDynamic();

for(var v in s){if(s[v].themed){s[v].dispose();
delete s[v];
}}
if(r){var t=r.fonts;
var u=qx.bom.Font;

for(var v in t){if(t[v].include&&t[t[v].include]){this.__ka(t,v);
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
},__kb:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__kb;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__kc:null,__kd:null,__ke:null,__kf:null,__kg:null,__kh:null,_applySize:function(H,I){this.__kc=H===null?null:H+g;
},_applyLineHeight:function(J,K){this.__kh=J===null?null:J;
},_applyFamily:function(L,M){var N=k;

for(var i=0,l=L.length;i<l;i++){if(L[i].indexOf(o)>0){N+=f+L[i]+f;
}else{N+=L[i];
}
if(i!==l-1){N+=n;
}}this.__kd=N;
},_applyBold:function(O,P){this.__ke=O===null?null:O?c:d;
},_applyItalic:function(Q,R){this.__kf=Q===null?null:Q?e:d;
},_applyDecoration:function(S,T){this.__kg=S===null?null:S;
},getStyles:function(){return {fontFamily:this.__kd,fontSize:this.__kc,fontWeight:this.__ke,fontStyle:this.__kf,textDecoration:this.__kg,lineHeight:this.__kh};
}}});
})();
(function(){var g="qx.bom.client.Feature",f="CSS1Compat",d="label",c="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",b="input",a="pointerEvents";
qx.Bootstrap.define(g,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:false,XUL:false,CSS_TEXT_OVERFLOW:("textOverflow" in document.documentElement.style||"OTextOverflow" in document.documentElement.style),HTML5_CLASSLIST:!!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),TOUCH:("ontouchstart" in window),PLACEHOLDER:false,__dB:function(){this.QUIRKS_MODE=this.__dC();
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
if(a in document.documentElement.style){if(qx.bom.client.Engine.OPERA||qx.bom.client.Engine.MSHTML){this.CSS_POINTER_EVENTS=false;
}else{this.CSS_POINTER_EVENTS=true;
}}},__dC:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==f;
}}},defer:function(h){h.__dB();
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
this.__iE={};
this.__iF={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__iG:{},__iE:null,__iF:null,_applyTheme:function(j,k){this.__iF={};
this.__iE={};
},__iH:function(l,m,n){var s=m.appearances;
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
return this.__iH(r,m,n);
}}}for(var i=0;i<p.length-1;i++){p.shift();
var q=p.join(w);
var o=this.__iH(q,m);

if(o){return o;
}}if(n!=null){return this.__iH(n,m);
}return null;
}else if(typeof v===h){return this.__iH(v,m,n);
}else if(v.include&&!v.style){return this.__iH(v.include,m,n);
}return l;
},styleFrom:function(x,y,z,A){if(!z){z=this.getTheme();
}var G=this.__iF;
var B=G[x];

if(!B){B=G[x]=this.__iH(x,z,A);
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
}}var F=this.__iE;

if(F[M]!==undefined){return F[M];
}if(!y){y=this.__iG;
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
}},destruct:function(){this.__iE=this.__iF=null;
}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,q){if(!q){var q={};
}q.include=this.__sM(q.include);
q.patch=this.__sM(q.patch);
{};
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
if(D[A].base){{};
D[A].base=z.extend;
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
(function(){var p="Boolean",o="focusout",n="interval",m="mouseover",l="mouseout",k="mousemove",j="widget",i="__sX",h="qx.ui.tooltip.ToolTip",g="__tb",c="_applyCurrent",f="qx.ui.tooltip.Manager",d="__sY",b="tooltip-error",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,m,this.__ti,this,true);
this.__sX=new qx.event.Timer();
this.__sX.addListener(n,this.__tf,this);
this.__sY=new qx.event.Timer();
this.__sY.addListener(n,this.__tg,this);
this.__ta={left:0,top:0};
},properties:{current:{check:h,nullable:true,apply:c},showInvalidToolTips:{check:p,init:true},showToolTips:{check:p,init:true}},members:{__ta:null,__sY:null,__sX:null,__tb:null,__tc:null,__td:function(){if(!this.__tb){this.__tb=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__tb;
},__te:function(){if(!this.__tc){this.__tc=new qx.ui.tooltip.ToolTip().set({appearance:b});
this.__tc.syncAppearance();
}return this.__tc;
},_applyCurrent:function(q,r){if(r&&qx.ui.core.Widget.contains(r,q)){return;
}if(r){if(!r.isDisposed()){r.exclude();
}this.__sX.stop();
this.__sY.stop();
}var t=qx.event.Registration;
var s=document.body;
if(q){this.__sX.startWith(q.getShowTimeout());
t.addListener(s,l,this.__tj,this,true);
t.addListener(s,o,this.__tk,this,true);
t.addListener(s,k,this.__th,this,true);
}else{t.removeListener(s,l,this.__tj,this,true);
t.removeListener(s,o,this.__tk,this,true);
t.removeListener(s,k,this.__th,this,true);
}},__tf:function(e){var u=this.getCurrent();

if(u&&!u.isDisposed()){this.__sY.startWith(u.getHideTimeout());

if(u.getPlaceMethod()==j){u.placeToWidget(u.getOpener());
}else{u.placeToPoint(this.__ta);
}u.show();
}this.__sX.stop();
},__tg:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__sY.stop();
this.resetCurrent();
},__th:function(e){var w=this.__ta;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__ti:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

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
if(x){A=this.__te().set({label:x});
}
if(!A){A=this.__td().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__tj:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!D){return;
}var E=this.getCurrent();
if(E&&(D==E||qx.ui.core.Widget.contains(E,D))){return;
}if(D&&C&&qx.ui.core.Widget.contains(C,D)){return;
}if(E&&!D){this.setCurrent(null);
}else{this.resetCurrent();
}},__tk:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,m,this.__ti,this,true);
this._disposeObjects(i,d,g);
this.__ta=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__gg=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){{};
var m=new qx.event.Timer(l);
m.__gh=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__gi:null,__gg:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__gi);
this.__gi=null;
}else if(p){this.__gi=window.setInterval(this.__gg,this.getInterval());
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
}})},destruct:function(){if(this.__gi){window.clearInterval(this.__gi);
}this.__gi=this.__gg=null;
}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{statics:{__iX:null,setVisibleElement:function(y){this.__iX=y;
},getVisibleElement:function(){return this.__iX;
}},properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__iY:null,__ja:null,__jb:null,getLayoutLocation:function(z){var C,B,D,top;
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
}},placeToWidget:function(L,M){if(M){this.__jc();
this.__iY=qx.lang.Function.bind(this.placeToWidget,this,L,false);
qx.event.Idle.getInstance().addListener(i,this.__iY);
this.__jb=function(){this.__jc();
};
this.addListener(g,this.__jb,this);
}var N=L.getContainerLocation()||this.getLayoutLocation(L);
this.__je(N);
},__jc:function(){if(this.__iY){qx.event.Idle.getInstance().removeListener(i,this.__iY);
this.__iY=null;
}
if(this.__jb){this.removeListener(g,this.__jb,this);
this.__jb=null;
}},placeToMouse:function(event){var P=event.getDocumentLeft();
var top=event.getDocumentTop();
var O={left:P,top:top,right:P,bottom:top};
this.__je(O);
},placeToElement:function(Q,R){var location=qx.bom.element.Location.get(Q);
var S={left:location.left,top:location.top,right:location.left+Q.offsetWidth,bottom:location.top+Q.offsetHeight};
if(R){this.__iY=qx.lang.Function.bind(this.placeToElement,this,Q,false);
qx.event.Idle.getInstance().addListener(i,this.__iY);
this.addListener(g,function(){if(this.__iY){qx.event.Idle.getInstance().removeListener(i,this.__iY);
this.__iY=null;
}},this);
}this.__je(S);
},placeToPoint:function(T){var U={left:T.left,top:T.top,right:T.left,bottom:T.top};
this.__je(U);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__jd:function(V){var W=null;

if(this._computePlacementSize){var W=this._computePlacementSize();
}else if(this.isVisible()){var W=this.getBounds();
}
if(W==null){this.addListenerOnce(q,function(){this.__jd(V);
},this);
}else{V.call(this,W);
}},__je:function(X){this.__jd(function(Y){var ba=qx.util.placement.Placement.compute(Y,this.getLayoutParent().getBounds(),X,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(ba.left,ba.top);
});
}},destruct:function(){this.__jc();
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
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__gR:null,__gS:null,__gT:null,__gU:null,__gV:null,__gW:null,__gX:null,getBounds:function(){return this.__gW||this.__gS||null;
},clearSeparators:function(){},renderSeparator:function(y,z){},renderLayout:function(A,top,B,C){var D;
{};
var E=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var E=this._getHeightForWidth(B);
}
if(E!=null&&E!==this.__gR){this.__gR=E;
qx.ui.core.queue.Layout.add(this);
return null;
}var G=this.__gS;

if(!G){G=this.__gS={};
}var F={};

if(A!==G.left||top!==G.top){F.position=true;
G.left=A;
G.top=top;
}
if(B!==G.width||C!==G.height){F.size=true;
G.width=B;
G.height=C;
}if(this.__gT){F.local=true;
delete this.__gT;
}
if(this.__gV){F.margin=true;
delete this.__gV;
}return F;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__gT;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__gT=true;
this.__gU=null;
},getSizeHint:function(H){var I=this.__gU;

if(I){return I;
}
if(H===false){return null;
}I=this.__gU=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__gR&&this.getHeight()==null){I.height=this.__gR;
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
},_applyMargin:function(){this.__gV=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__gW;
},setUserBounds:function(S,top,T,U){this.__gW={left:S,top:top,width:T,height:U};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__gW;
qx.ui.core.queue.Layout.add(this);
},__gY:{},setLayoutProperties:function(V){if(V==null){return;
}var W=this.__gX;

if(!W){W=this.__gX={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(V);
}for(var X in V){if(V[X]==null){delete W[X];
}else{W[X]=V[X];
}}},getLayoutProperties:function(){return this.__gX||this.__gY;
},clearLayoutProperties:function(){delete this.__gX;
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
var bd=this.__gX;

if(bd){bc.__gX=qx.lang.Object.clone(bd);
}return bc;
}},destruct:function(){this.$$parent=this.$$subparent=this.__gX=this.__gS=this.__gW=this.__gU=null;
}});
})();
(function(){var b="qx.ui.core.DecoratorFactory",a="$$nopool$$";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ha={};
},statics:{MAX_SIZE:15,__hb:a},members:{__ha:null,getDecoratorElement:function(c){var h=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(c)){var f=c;
var e=qx.theme.manager.Decoration.getInstance().resolve(c);
}else{var f=h.__hb;
e=c;
}var g=this.__ha;

if(g[f]&&g[f].length>0){var d=g[f].pop();
}else{var d=this._createDecoratorElement(e,f);
}d.$$pooled=false;
return d;
},poolDecorator:function(i){if(!i||i.$$pooled||i.isDisposed()){return;
}var l=qx.ui.core.DecoratorFactory;
var j=i.getId();

if(j==l.__hb){i.dispose();
return;
}var k=this.__ha;

if(!k[j]){k[j]=[];
}
if(k[j].length>l.MAX_SIZE){i.dispose();
}else{i.$$pooled=true;
k[j].push(i);
}},_createDecoratorElement:function(m,n){var o=new qx.html.Decorator(m,n);
{};
return o;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__ha;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__ha=null;
}});
})();
(function(){var bW="px",bV="Boolean",bU="qx.event.type.Drag",bT="qx.event.type.Mouse",bS="visible",bR="qx.event.type.Focus",bQ="on",bP="Integer",bO="qx.event.type.Touch",bN="excluded",bx="qx.event.type.Data",bw="_applyPadding",bv="qx.event.type.Event",bu="hidden",bt="contextmenu",bs="String",br="tabIndex",bq="focused",bp="changeVisibility",bo="mshtml",ce="hovered",cf="qx.event.type.KeySequence",cc="qx.client",cd="absolute",ca="backgroundColor",cb="drag",bX="div",bY="disabled",cg="move",ch="dragstart",bG="qx.dynlocale",bF="dragchange",bI="dragend",bH="resize",bK="Decorator",bJ="zIndex",bM="opacity",bL="default",bE="Color",bD="changeToolTipText",c="beforeContextmenuOpen",d="_applyNativeContextMenu",f="_applyBackgroundColor",g="__hp",h="_applyFocusable",j="changeShadow",k="qx.event.type.KeyInput",m="__hh",n="createChildControl",o="__hd",cl="Font",ck="_applyShadow",cj="_applyEnabled",ci="_applySelectable",cp="Number",co="_applyKeepActive",cn="__hi",cm="_applyVisibility",cr="repeat",cq="qxDraggable",N="syncAppearance",O="paddingLeft",L="_applyDroppable",M="#",R="qx.event.type.MouseWheel",S="_applyCursor",P="_applyDraggable",Q="changeTextColor",J="$$widget",K="changeContextMenu",w="paddingTop",v="changeSelectable",y="hideFocus",x="none",s="outline",r="_applyAppearance",u="__hg",t="_applyOpacity",q="url(",p=")",X="qx.ui.core.Widget",Y="_applyFont",ba="__hc",bb="cursor",T="qxDroppable",U="__hl",V="changeZIndex",W="changeEnabled",bc="changeFont",bd="_applyDecorator",G="_applyZIndex",F="_applyTextColor",E="qx.ui.menu.Menu",D="_applyToolTipText",C="true",B="widget",A="changeDecorator",z="_applyTabIndex",I="changeAppearance",H="__hn",be="shorthand",bf="/",bg="",bh="_applyContextMenu",bi="paddingBottom",bj="changeNativeContextMenu",bk="undefined",bl="qx.ui.tooltip.ToolTip",bm="qxKeepActive",bn="_applyKeepFocus",bB="paddingRight",bA="changeBackgroundColor",bz="changeLocale",by="qxKeepFocus",bC="qx/static/blank.gif";
qx.Class.define(X,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__hc=this._createContainerElement();
this.__hd=this.__ho();
this.__hc.add(this.__hd);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bv,disappear:bv,createChildControl:bx,resize:bx,move:bx,syncAppearance:bx,mousemove:bT,mouseover:bT,mouseout:bT,mousedown:bT,mouseup:bT,click:bT,dblclick:bT,contextmenu:bT,beforeContextmenuOpen:bx,mousewheel:R,touchstart:bO,touchend:bO,touchmove:bO,touchcancel:bO,tap:bO,swipe:bO,keyup:cf,keydown:cf,keypress:cf,keyinput:k,focus:bR,blur:bR,focusin:bR,focusout:bR,activate:bR,deactivate:bR,capture:bv,losecapture:bv,drop:bU,dragleave:bU,dragover:bU,drag:bU,dragstart:bU,dragend:bU,dragchange:bU,droprequest:bU},properties:{paddingTop:{check:bP,init:0,apply:bw,themeable:true},paddingRight:{check:bP,init:0,apply:bw,themeable:true},paddingBottom:{check:bP,init:0,apply:bw,themeable:true},paddingLeft:{check:bP,init:0,apply:bw,themeable:true},padding:{group:[w,bB,bi,O],mode:be,themeable:true},zIndex:{nullable:true,init:null,apply:G,event:V,check:bP,themeable:true},decorator:{nullable:true,init:null,apply:bd,event:A,check:bK,themeable:true},shadow:{nullable:true,init:null,apply:ck,event:j,check:bK,themeable:true},backgroundColor:{nullable:true,check:bE,apply:f,event:bA,themeable:true},textColor:{nullable:true,check:bE,apply:F,event:Q,themeable:true,inheritable:true},font:{nullable:true,apply:Y,check:cl,event:bc,themeable:true,inheritable:true,dereference:true},opacity:{check:cp,apply:t,themeable:true,nullable:true,init:null},cursor:{check:bs,apply:S,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bl,nullable:true},toolTipText:{check:bs,nullable:true,event:bD,apply:D},toolTipIcon:{check:bs,nullable:true,event:bD},blockToolTip:{check:bV,init:false},visibility:{check:[bS,bu,bN],init:bS,apply:cm,event:bp},enabled:{init:true,check:bV,inheritable:true,apply:cj,event:W},anonymous:{init:false,check:bV},tabIndex:{check:bP,nullable:true,apply:z},focusable:{check:bV,init:false,apply:h},keepFocus:{check:bV,init:false,apply:bn},keepActive:{check:bV,init:false,apply:co},draggable:{check:bV,init:false,apply:P},droppable:{check:bV,init:false,apply:L},selectable:{check:bV,init:false,event:v,apply:ci},contextMenu:{check:E,apply:bh,nullable:true,event:K},nativeContextMenu:{check:bV,init:false,themeable:true,event:bj,apply:d},appearance:{check:bs,init:B,apply:r,event:I}},statics:{DEBUG:false,getWidgetByElement:function(cs,ct){while(cs){var cu=cs.$$widget;
if(cu!=null){var cv=qx.core.ObjectRegistry.fromHashCode(cu);
if(!ct||!cv.getAnonymous()){return cv;
}}try{cs=cs.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cw){while(cw){if(parent==cw){return true;
}cw=cw.getLayoutParent();
}return false;
},__he:new qx.ui.core.DecoratorFactory(),__hf:new qx.ui.core.DecoratorFactory()},members:{__hc:null,__hd:null,__hg:null,__hh:null,__hi:null,__hj:null,__hk:null,__hl:null,_getLayout:function(){return this.__hl;
},_setLayout:function(cx){{};

if(this.__hl){this.__hl.connectToWidget(null);
}
if(cx){cx.connectToWidget(this);
}this.__hl=cx;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cy=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cy);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cy);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__hm:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var cz=qx.theme.manager.Decoration.getInstance();
var cB=cz.resolve(a).getInsets();
var cA=cz.resolve(b).getInsets();

if(cB.top!=cA.top||cB.right!=cA.right||cB.bottom!=cA.bottom||cB.left!=cA.left){return true;
}return false;
},renderLayout:function(cC,top,cD,cE){var cN=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,cC,top,cD,cE);
if(!cN){return null;
}var cG=this.getContainerElement();
var content=this.getContentElement();
var cK=cN.size||this._updateInsets;
var cO=bW;
var cL={};
if(cN.position){cL.left=cC+cO;
cL.top=top+cO;
}if(cN.size){cL.width=cD+cO;
cL.height=cE+cO;
}
if(cN.position||cN.size){cG.setStyles(cL);
}
if(cK||cN.local||cN.margin){var cF=this.getInsets();
var innerWidth=cD-cF.left-cF.right;
var innerHeight=cE-cF.top-cF.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var cI={};

if(this._updateInsets){cI.left=cF.left+cO;
cI.top=cF.top+cO;
}
if(cK){cI.width=innerWidth+cO;
cI.height=innerHeight+cO;
}
if(cK||this._updateInsets){content.setStyles(cI);
}
if(cN.size){var cM=this.__hi;

if(cM){cM.setStyles({width:cD+bW,height:cE+bW});
}}
if(cN.size||this._updateInsets){if(this.__hg){this.__hg.resize(cD,cE);
}}
if(cN.size){if(this.__hh){var cF=this.__hh.getInsets();
var cJ=cD+cF.left+cF.right;
var cH=cE+cF.top+cF.bottom;
this.__hh.resize(cJ,cH);
}}
if(cK||cN.local||cN.margin){if(this.__hl&&this.hasLayoutChildren()){this.__hl.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cN.position&&this.hasListener(cg)){this.fireDataEvent(cg,this.getBounds());
}
if(cN.size&&this.hasListener(bH)){this.fireDataEvent(bH,this.getBounds());
}delete this._updateInsets;
return cN;
},__hn:null,clearSeparators:function(){var cQ=this.__hn;

if(!cQ){return;
}var cR=qx.ui.core.Widget.__he;
var content=this.getContentElement();
var cP;

for(var i=0,l=cQ.length;i<l;i++){cP=cQ[i];
cR.poolDecorator(cP);
content.remove(cP);
}cQ.length=0;
},renderSeparator:function(cS,cT){var cU=qx.ui.core.Widget.__he.getDecoratorElement(cS);
this.getContentElement().add(cU);
cU.resize(cT.width,cT.height);
cU.setStyles({left:cT.left+bW,top:cT.top+bW});
if(!this.__hn){this.__hn=[cU];
}else{this.__hn.push(cU);
}},_computeSizeHint:function(){var dc=this.getWidth();
var db=this.getMinWidth();
var cW=this.getMaxWidth();
var da=this.getHeight();
var cX=this.getMinHeight();
var cY=this.getMaxHeight();
{};
var dd=this._getContentHint();
var cV=this.getInsets();
var df=cV.left+cV.right;
var de=cV.top+cV.bottom;

if(dc==null){dc=dd.width+df;
}
if(da==null){da=dd.height+de;
}
if(db==null){db=df;

if(dd.minWidth!=null){db+=dd.minWidth;
}}
if(cX==null){cX=de;

if(dd.minHeight!=null){cX+=dd.minHeight;
}}
if(cW==null){if(dd.maxWidth==null){cW=Infinity;
}else{cW=dd.maxWidth+df;
}}
if(cY==null){if(dd.maxHeight==null){cY=Infinity;
}else{cY=dd.maxHeight+de;
}}return {width:dc,minWidth:db,maxWidth:cW,height:da,minHeight:cX,maxHeight:cY};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__hl){this.__hl.invalidateLayoutCache();
}},_getContentHint:function(){var dh=this.__hl;

if(dh){if(this.hasLayoutChildren()){var dg;
var di=dh.getSizeHint();
{};
return di;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dj){var dn=this.getInsets();
var dr=dn.left+dn.right;
var dq=dn.top+dn.bottom;
var dp=dj-dr;
var dl=this._getLayout();

if(dl&&dl.hasHeightForWidth()){var dk=dl.getHeightForWidth(dj);
}else{dk=this._getContentHeightForWidth(dp);
}var dm=dk+dq;
return dm;
},_getContentHeightForWidth:function(ds){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var du=this.getPaddingRight();
var dw=this.getPaddingBottom();
var dv=this.getPaddingLeft();

if(this.__hg){var dt=this.__hg.getInsets();
{};
top+=dt.top;
du+=dt.right;
dw+=dt.bottom;
dv+=dt.left;
}return {"top":top,"right":du,"bottom":dw,"left":dv};
},getInnerSize:function(){var dy=this.getBounds();

if(!dy){return null;
}var dx=this.getInsets();
return {width:dy.width-dx.left-dx.right,height:dy.height-dx.top-dx.bottom};
},show:function(){this.setVisibility(bS);
},hide:function(){this.setVisibility(bu);
},exclude:function(){this.setVisibility(bN);
},isVisible:function(){return this.getVisibility()===bS;
},isHidden:function(){return this.getVisibility()!==bS;
},isExcluded:function(){return this.getVisibility()===bN;
},isSeeable:function(){var dA=this.getContainerElement().getDomElement();

if(dA){return dA.offsetWidth>0;
}var dz=this;

do{if(!dz.isVisible()){return false;
}
if(dz.isRootWidget()){return true;
}dz=dz.getLayoutParent();
}while(dz);
return false;
},_createContainerElement:function(){var dC={"$$widget":this.toHashCode()};
{};
var dB={zIndex:0,position:cd};
return new qx.html.Element(bX,dB,dC);
},__ho:function(){var dD=this._createContentElement();
{};
dD.setStyles({"position":cd,"zIndex":10});
return dD;
},_createContentElement:function(){return new qx.html.Element(bX,{overflowX:bu,overflowY:bu});
},getContainerElement:function(){return this.__hc;
},getContentElement:function(){return this.__hd;
},getDecoratorElement:function(){return this.__hg||null;
},getShadowElement:function(){return this.__hh||null;
},__hp:null,getLayoutChildren:function(){var dF=this.__hp;

if(!dF){return this.__hq;
}var dG;

for(var i=0,l=dF.length;i<l;i++){var dE=dF[i];

if(dE.hasUserBounds()||dE.isExcluded()){if(dG==null){dG=dF.concat();
}qx.lang.Array.remove(dG,dE);
}}return dG||dF;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var dH=this.__hl;

if(dH){dH.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var dI=this.__hp;

if(!dI){return false;
}var dJ;

for(var i=0,l=dI.length;i<l;i++){dJ=dI[i];

if(!dJ.hasUserBounds()&&!dJ.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__hq:[],_getChildren:function(){return this.__hp||this.__hq;
},_indexOf:function(dK){var dL=this.__hp;

if(!dL){return -1;
}return dL.indexOf(dK);
},_hasChildren:function(){var dM=this.__hp;
return dM!=null&&(!!dM[0]);
},addChildrenToQueue:function(dN){var dO=this.__hp;

if(!dO){return;
}var dP;

for(var i=0,l=dO.length;i<l;i++){dP=dO[i];
dN.push(dP);
dP.addChildrenToQueue(dN);
}},_add:function(dQ,dR){if(dQ.getLayoutParent()==this){qx.lang.Array.remove(this.__hp,dQ);
}
if(this.__hp){this.__hp.push(dQ);
}else{this.__hp=[dQ];
}this.__hr(dQ,dR);
},_addAt:function(dS,dT,dU){if(!this.__hp){this.__hp=[];
}if(dS.getLayoutParent()==this){qx.lang.Array.remove(this.__hp,dS);
}var dV=this.__hp[dT];

if(dV===dS){dS.setLayoutProperties(dU);
}
if(dV){qx.lang.Array.insertBefore(this.__hp,dS,dV);
}else{this.__hp.push(dS);
}this.__hr(dS,dU);
},_addBefore:function(dW,dX,dY){{};

if(dW==dX){return;
}
if(!this.__hp){this.__hp=[];
}if(dW.getLayoutParent()==this){qx.lang.Array.remove(this.__hp,dW);
}qx.lang.Array.insertBefore(this.__hp,dW,dX);
this.__hr(dW,dY);
},_addAfter:function(ea,eb,ec){{};

if(ea==eb){return;
}
if(!this.__hp){this.__hp=[];
}if(ea.getLayoutParent()==this){qx.lang.Array.remove(this.__hp,ea);
}qx.lang.Array.insertAfter(this.__hp,ea,eb);
this.__hr(ea,ec);
},_remove:function(ed){if(!this.__hp){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__hp,ed);
this.__hs(ed);
},_removeAt:function(ee){if(!this.__hp){throw new Error("This widget has no children!");
}var ef=this.__hp[ee];
qx.lang.Array.removeAt(this.__hp,ee);
this.__hs(ef);
return ef;
},_removeAll:function(){if(!this.__hp){return;
}var eg=this.__hp.concat();
this.__hp.length=0;

for(var i=eg.length-1;i>=0;i--){this.__hs(eg[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__hr:function(eh,ei){{};
var parent=eh.getLayoutParent();

if(parent&&parent!=this){parent._remove(eh);
}eh.setLayoutParent(this);
if(ei){eh.setLayoutProperties(ei);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(eh);
}},__hs:function(ej){{};

if(ej.getLayoutParent()!==this){throw new Error("Remove Error: "+ej+" is not a child of this widget!");
}ej.setLayoutParent(null);
if(this.__hl){this.__hl.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(ej);
}},capture:function(ek){this.getContainerElement().capture(ek);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(em,en,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__hi){return;
}var eo=this.__hi=new qx.html.Element;
{};
eo.setStyles({position:cd,top:0,left:0,zIndex:7});
var ep=this.getBounds();

if(ep){this.__hi.setStyles({width:ep.width+bW,height:ep.height+bW});
}if(qx.core.Variant.isSet(cc,bo)){eo.setStyles({backgroundImage:q+qx.util.ResourceManager.getInstance().toUri(bC)+p,backgroundRepeat:cr});
}this.getContainerElement().add(eo);
},_applyDecorator:function(eq,er){{};
var eu=qx.ui.core.Widget.__he;
var es=this.getContainerElement();
if(!this.__hi&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(er){es.remove(this.__hg);
eu.poolDecorator(this.__hg);
}if(eq){var et=this.__hg=eu.getDecoratorElement(eq);
et.setStyle(bJ,5);
es.add(et);
}else{delete this.__hg;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__hm(er,eq)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(eq){var ev=this.getBounds();

if(ev){et.resize(ev.width,ev.height);
this.__hi&&
this.__hi.setStyles({width:ev.width+bW,height:ev.height+bW});
}}},_applyShadow:function(ew,ex){var eE=qx.ui.core.Widget.__hf;
var ez=this.getContainerElement();
if(ex){ez.remove(this.__hh);
eE.poolDecorator(this.__hh);
}if(ew){var eB=this.__hh=eE.getDecoratorElement(ew);
ez.add(eB);
var eD=eB.getInsets();
eB.setStyles({left:(-eD.left)+bW,top:(-eD.top)+bW});
var eC=this.getBounds();

if(eC){var eA=eC.width+eD.left+eD.right;
var ey=eC.height+eD.top+eD.bottom;
eB.resize(eA,ey);
}eB.tint(null);
}else{delete this.__hh;
}},_applyToolTipText:function(eF,eG){if(qx.core.Variant.isSet(bG,bQ)){if(this.__hk){return;
}var eH=qx.locale.Manager.getInstance();
this.__hk=eH.addListener(bz,function(){var eI=this.getToolTipText();

if(eI&&eI.translate){this.setToolTipText(eI.translate());
}},this);
}},_applyTextColor:function(eJ,eK){},_applyZIndex:function(eL,eM){this.getContainerElement().setStyle(bJ,eL==null?0:eL);
},_applyVisibility:function(eN,eO){var eP=this.getContainerElement();

if(eN===bS){eP.show();
}else{eP.hide();
}var parent=this.$$parent;

if(parent&&(eO==null||eN==null||eO===bN||eN===bN)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(eQ,eR){this.getContainerElement().setStyle(bM,eQ==1?null:eQ);
if(qx.core.Variant.isSet(cc,bo)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var eS=(eQ==1||eQ==null)?null:0.99;
this.getContentElement().setStyle(bM,eS);
}}},_applyCursor:function(eT,eU){if(eT==null&&!this.isSelectable()){eT=bL;
}this.getContainerElement().setStyle(bb,eT,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(eV,eW){var eX=this.getBackgroundColor();
var fa=this.getContainerElement();

if(this.__hg){this.__hg.tint(eX);
fa.setStyle(ca,null);
}else{var eY=qx.theme.manager.Color.getInstance().resolve(eX);
fa.setStyle(ca,eY);
}},_applyFont:function(fb,fc){},__ht:null,$$stateChanges:null,_forwardStates:null,hasState:function(fd){var fe=this.__ht;
return !!fe&&!!fe[fd];
},addState:function(ff){var fg=this.__ht;

if(!fg){fg=this.__ht={};
}
if(fg[ff]){return;
}this.__ht[ff]=true;
if(ff===ce){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fj=this.__hw;

if(forward&&forward[ff]&&fj){var fh;

for(var fi in fj){fh=fj[fi];

if(fh instanceof qx.ui.core.Widget){fj[fi].addState(ff);
}}}},removeState:function(fk){var fl=this.__ht;

if(!fl||!fl[fk]){return;
}delete this.__ht[fk];
if(fk===ce){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fo=this.__hw;

if(forward&&forward[fk]&&fo){for(var fn in fo){var fm=fo[fn];

if(fm instanceof qx.ui.core.Widget){fm.removeState(fk);
}}}},replaceState:function(fp,fq){var fr=this.__ht;

if(!fr){fr=this.__ht={};
}
if(!fr[fq]){fr[fq]=true;
}
if(fr[fp]){delete fr[fp];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fu=this.__hw;

if(forward&&forward[fq]&&fu){for(var ft in fu){var fs=fu[ft];

if(fs instanceof qx.ui.core.Widget){fs.replaceState(fp,fq);
}}}},__hu:null,__hv:null,syncAppearance:function(){var fz=this.__ht;
var fy=this.__hu;
var fA=qx.theme.manager.Appearance.getInstance();
var fw=qx.core.Property.$$method.setThemed;
var fE=qx.core.Property.$$method.resetThemed;
if(this.__hv){delete this.__hv;
if(fy){var fv=fA.styleFrom(fy,fz,null,this.getAppearance());
fy=null;
}}if(!fy){var fx=this;
var fD=[];

do{fD.push(fx.$$subcontrol||fx.getAppearance());
}while(fx=fx.$$subparent);
fy=fD.reverse().join(bf).replace(/#[0-9]+/g,bg);
this.__hu=fy;
}var fB=fA.styleFrom(fy,fz,null,this.getAppearance());

if(fB){var fC;

if(fv){for(var fC in fv){if(fB[fC]===undefined){this[fE[fC]]();
}}}{};
for(var fC in fB){fB[fC]===undefined?this[fE[fC]]():this[fw[fC]](fB[fC]);
}}else if(fv){for(var fC in fv){this[fE[fC]]();
}}this.fireDataEvent(N,this.__ht);
},_applyAppearance:function(fF,fG){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__hj){qx.ui.core.queue.Appearance.add(this);
this.__hj=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__hv=true;
qx.ui.core.queue.Appearance.add(this);
var fJ=this.__hw;

if(fJ){var fH;

for(var fI in fJ){fH=fJ[fI];

if(fH instanceof qx.ui.core.Widget){fH.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fK=this;

while(fK.getAnonymous()){fK=fK.getLayoutParent();

if(!fK){return null;
}}return fK;
},getFocusTarget:function(){var fL=this;

if(!fL.getEnabled()){return null;
}
while(fL.getAnonymous()||!fL.getFocusable()){fL=fL.getLayoutParent();

if(!fL||!fL.getEnabled()){return null;
}}return fL;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(fM,fN){var fO=this.getFocusElement();
if(fM){var fP=this.getTabIndex();

if(fP==null){fP=1;
}fO.setAttribute(br,fP);
if(qx.core.Variant.isSet(cc,bo)){fO.setAttribute(y,C);
}else{fO.setStyle(s,x);
}}else{if(fO.isNativelyFocusable()){fO.setAttribute(br,-1);
}else if(fN){fO.setAttribute(br,null);
}}},_applyKeepFocus:function(fQ){var fR=this.getFocusElement();
fR.setAttribute(by,fQ?bQ:null);
},_applyKeepActive:function(fS){var fT=this.getContainerElement();
fT.setAttribute(bm,fS?bQ:null);
},_applyTabIndex:function(fU){if(fU==null){fU=1;
}else if(fU<1||fU>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&fU!=null){this.getFocusElement().setAttribute(br,fU);
}},_applySelectable:function(fV,fW){if(fW!==null){this._applyCursor(this.getCursor());
}this.getContentElement().setSelectable(fV);
},_applyEnabled:function(fX,fY){if(fX===false){this.addState(bY);
this.removeState(ce);
if(this.isFocusable()){this.removeState(bq);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(bY);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(ga,gb,name){},_applyContextMenu:function(gc,gd){if(gd){gd.removeState(bt);

if(gd.getOpener()==this){gd.resetOpener();
}
if(!gc){this.removeListener(bt,this._onContextMenuOpen);
gd.removeListener(bp,this._onBeforeContextMenuOpen,this);
}}
if(gc){gc.setOpener(this);
gc.addState(bt);

if(!gd){this.addListener(bt,this._onContextMenuOpen);
gc.addListener(bp,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==bS&&this.hasListener(c)){this.fireDataEvent(c,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(ge,gf){if(!this.isEnabled()&&ge===true){ge=false;
}qx.ui.core.DragDropCursor.getInstance();
if(ge){this.addListener(ch,this._onDragStart);
this.addListener(cb,this._onDrag);
this.addListener(bI,this._onDragEnd);
this.addListener(bF,this._onDragChange);
}else{this.removeListener(ch,this._onDragStart);
this.removeListener(cb,this._onDrag);
this.removeListener(bI,this._onDragEnd);
this.removeListener(bF,this._onDragChange);
}this.getContainerElement().setAttribute(cq,ge?bQ:null);
},_applyDroppable:function(gg,gh){if(!this.isEnabled()&&gg===true){gg=false;
}this.getContainerElement().setAttribute(T,gg?bQ:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bL);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gi=qx.ui.core.DragDropCursor.getInstance();
var gj=e.getCurrentAction();
gj?gi.setAction(gj):gi.resetAction();
},visualizeFocus:function(){this.addState(bq);
},visualizeBlur:function(){this.removeState(bq);
},scrollChildIntoView:function(gk,gl,gm,gn){gn=typeof gn==bk?true:gn;
var go=qx.ui.core.queue.Layout;
var parent;
if(gn){gn=!go.isScheduled(gk);
parent=gk.getLayoutParent();
if(gn&&parent){gn=!go.isScheduled(parent);
if(gn){parent.getChildren().forEach(function(gp){gn=gn&&!go.isScheduled(gp);
});
}}}this.scrollChildIntoViewX(gk,gl,gn);
this.scrollChildIntoViewY(gk,gm,gn);
},scrollChildIntoViewX:function(gq,gr,gs){this.getContentElement().scrollChildIntoViewX(gq.getContainerElement(),gr,gs);
},scrollChildIntoViewY:function(gt,gu,gv){this.getContentElement().scrollChildIntoViewY(gt.getContainerElement(),gu,gv);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gw){if(!this.__hw){return false;
}return !!this.__hw[gw];
},__hw:null,_getCreatedChildControls:function(){return this.__hw;
},getChildControl:function(gx,gy){if(!this.__hw){if(gy){return null;
}this.__hw={};
}var gz=this.__hw[gx];

if(gz){return gz;
}
if(gy===true){return null;
}return this._createChildControl(gx);
},_showChildControl:function(gA){var gB=this.getChildControl(gA);
gB.show();
return gB;
},_excludeChildControl:function(gC){var gD=this.getChildControl(gC,true);

if(gD){gD.exclude();
}},_isChildControlVisible:function(gE){var gF=this.getChildControl(gE,true);

if(gF){return gF.isVisible();
}return false;
},_createChildControl:function(gG){if(!this.__hw){this.__hw={};
}else if(this.__hw[gG]){throw new Error("Child control '"+gG+"' already created!");
}var gK=gG.indexOf(M);

if(gK==-1){var gH=this._createChildControlImpl(gG);
}else{var gH=this._createChildControlImpl(gG.substring(0,gK),gG.substring(gK+1,gG.length));
}
if(!gH){throw new Error("Unsupported control: "+gG);
}gH.$$subcontrol=gG;
gH.$$subparent=this;
var gI=this.__ht;
var forward=this._forwardStates;

if(gI&&forward&&gH instanceof qx.ui.core.Widget){for(var gJ in gI){if(forward[gJ]){gH.addState(gJ);
}}}this.fireDataEvent(n,gH);
return this.__hw[gG]=gH;
},_createChildControlImpl:function(gL,gM){return null;
},_disposeChildControls:function(){var gQ=this.__hw;

if(!gQ){return;
}var gO=qx.ui.core.Widget;

for(var gP in gQ){var gN=gQ[gP];

if(!gO.contains(this,gN)){gN.destroy();
}else{gN.dispose();
}}delete this.__hw;
},_findTopControl:function(){var gR=this;

while(gR){if(!gR.$$subparent){return gR;
}gR=gR.$$subparent;
}return null;
},getContainerLocation:function(gS){var gT=this.getContainerElement().getDomElement();
return gT?qx.bom.element.Location.get(gT,gS):null;
},getContentLocation:function(gU){var gV=this.getContentElement().getDomElement();
return gV?qx.bom.element.Location.get(gV,gU):null;
},setDomLeft:function(gW){var gX=this.getContainerElement().getDomElement();

if(gX){gX.style.left=gW+bW;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(gY){var ha=this.getContainerElement().getDomElement();

if(ha){ha.style.top=gY+bW;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(hb,top){var hc=this.getContainerElement().getDomElement();

if(hc){hc.style.left=hb+bW;
hc.style.top=top+bW;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var hd=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var he=this.getChildren();

for(var i=0,l=he.length;i<l;i++){hd.add(he[i].clone());
}}return hd;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(bG,bQ)){if(this.__hk){qx.locale.Manager.getInstance().removeListenerById(this.__hk);
}}this.getContainerElement().setAttribute(J,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var hg=qx.ui.core.Widget;
var hf=this.getContainerElement();

if(this.__hg){hf.remove(this.__hg);
hg.__he.poolDecorator(this.__hg);
}
if(this.__hh){hf.remove(this.__hh);
hg.__hf.poolDecorator(this.__hh);
}this.clearSeparators();
this.__hg=this.__hh=this.__hn=null;
}else{this._disposeArray(H);
this._disposeObjects(u,m);
}this._disposeArray(g);
this.__ht=this.__hw=null;
this._disposeObjects(U,ba,o,cn);
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
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__jf=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__jf:null,_applyTimeoutInterval:function(h){this.__jf.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__jf){this.__jf.stop();
}this.__jf=null;
}});
})();
(function(){var j="borderTopWidth",i="borderLeftWidth",h="marginTop",g="marginLeft",f="scroll",e="qx.client",d="border-box",c="borderBottomWidth",b="borderRightWidth",a="auto",y="padding",x="qx.bom.element.Location",w="paddingLeft",v="static",u="marginBottom",t="visible",s="BODY",r="paddingBottom",q="paddingTop",p="marginRight",n="position",o="margin",l="overflow",m="paddingRight",k="border";
qx.Class.define(x,{statics:{__gB:function(z,A){return qx.bom.element.Style.get(z,A,qx.bom.element.Style.COMPUTED_MODE,false);
},__gC:function(B,C){return parseInt(qx.bom.element.Style.get(B,C,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gD:function(D){var G=0,top=0;
if(D.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var F=qx.dom.Node.getWindow(D);
G-=qx.bom.Viewport.getScrollLeft(F);
top-=qx.bom.Viewport.getScrollTop(F);
}else{var E=qx.dom.Node.getDocument(D).body;
D=D.parentNode;
while(D&&D!=E){G+=D.scrollLeft;
top+=D.scrollTop;
D=D.parentNode;
}}return {left:G,top:top};
},__gE:qx.core.Variant.select(e,{"mshtml":function(H){var J=qx.dom.Node.getDocument(H);
var I=J.body;
var K=0;
var top=0;
K-=I.clientLeft+J.documentElement.clientLeft;
top-=I.clientTop+J.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){K+=this.__gC(I,i);
top+=this.__gC(I,j);
}return {left:K,top:top};
},"webkit":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=M.offsetLeft;
var top=M.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){O+=this.__gC(M,i);
top+=this.__gC(M,j);
}return {left:O,top:top};
},"gecko":function(P){var Q=qx.dom.Node.getDocument(P).body;
var R=Q.offsetLeft;
var top=Q.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){R+=this.__gC(Q,g);
top+=this.__gC(Q,h);
}if(qx.bom.element.BoxSizing.get(Q)!==d){R+=this.__gC(Q,i);
top+=this.__gC(Q,j);
}return {left:R,top:top};
},"default":function(S){var T=qx.dom.Node.getDocument(S).body;
var U=T.offsetLeft;
var top=T.offsetTop;
return {left:U,top:top};
}}),__gF:qx.core.Variant.select(e,{"mshtml|webkit":function(V){var X=qx.dom.Node.getDocument(V);
if(V.getBoundingClientRect){var Y=V.getBoundingClientRect();
var ba=Y.left;
var top=Y.top;
}else{var ba=V.offsetLeft;
var top=V.offsetTop;
V=V.offsetParent;
var W=X.body;
while(V&&V!=W){ba+=V.offsetLeft;
top+=V.offsetTop;
ba+=this.__gC(V,i);
top+=this.__gC(V,j);
V=V.offsetParent;
}}return {left:ba,top:top};
},"gecko":function(bb){if(bb.getBoundingClientRect){var be=bb.getBoundingClientRect();
var bf=Math.round(be.left);
var top=Math.round(be.top);
}else{var bf=0;
var top=0;
var bc=qx.dom.Node.getDocument(bb).body;
var bd=qx.bom.element.BoxSizing;

if(bd.get(bb)!==d){bf-=this.__gC(bb,i);
top-=this.__gC(bb,j);
}
while(bb&&bb!==bc){bf+=bb.offsetLeft;
top+=bb.offsetTop;
if(bd.get(bb)!==d){bf+=this.__gC(bb,i);
top+=this.__gC(bb,j);
}if(bb.parentNode&&this.__gB(bb.parentNode,l)!=t){bf+=this.__gC(bb.parentNode,i);
top+=this.__gC(bb.parentNode,j);
}bb=bb.offsetParent;
}}return {left:bf,top:top};
},"default":function(bg){var bi=0;
var top=0;
var bh=qx.dom.Node.getDocument(bg).body;
while(bg&&bg!==bh){bi+=bg.offsetLeft;
top+=bg.offsetTop;
bg=bg.offsetParent;
}return {left:bi,top:top};
}}),get:function(bj,bk){if(bj.tagName==s){var location=this.__gG(bj);
var br=location.left;
var top=location.top;
}else{var bl=this.__gE(bj);
var bq=this.__gF(bj);
var scroll=this.__gD(bj);
var br=bq.left+bl.left-scroll.left;
var top=bq.top+bl.top-scroll.top;
}var bm=br+bj.offsetWidth;
var bn=top+bj.offsetHeight;

if(bk){if(bk==y||bk==f){var bo=qx.bom.element.Overflow.getX(bj);

if(bo==f||bo==a){bm+=bj.scrollWidth-bj.offsetWidth+this.__gC(bj,i)+this.__gC(bj,b);
}var bp=qx.bom.element.Overflow.getY(bj);

if(bp==f||bp==a){bn+=bj.scrollHeight-bj.offsetHeight+this.__gC(bj,j)+this.__gC(bj,c);
}}
switch(bk){case y:br+=this.__gC(bj,w);
top+=this.__gC(bj,q);
bm-=this.__gC(bj,m);
bn-=this.__gC(bj,r);
case f:br-=bj.scrollLeft;
top-=bj.scrollTop;
bm-=bj.scrollLeft;
bn-=bj.scrollTop;
case k:br+=this.__gC(bj,i);
top+=this.__gC(bj,j);
bm-=this.__gC(bj,b);
bn-=this.__gC(bj,c);
break;
case o:br-=this.__gC(bj,g);
top-=this.__gC(bj,h);
bm+=this.__gC(bj,p);
bn+=this.__gC(bj,u);
break;
}}return {left:br,top:top,right:bm,bottom:bn};
},__gG:qx.core.Variant.select(e,{"default":function(bs){var top=bs.offsetTop+this.__gC(bs,h);
var bt=bs.offsetLeft+this.__gC(bs,g);
return {left:bt,top:top};
},"mshtml":function(bu){var top=bu.offsetTop;
var bv=bu.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__gC(bu,h);
bv+=this.__gC(bu,g);
}return {left:bv,top:top};
},"gecko":function(bw){var top=bw.offsetTop+this.__gC(bw,h)+this.__gC(bw,i);
var bx=bw.offsetLeft+this.__gC(bw,g)+this.__gC(bw,j);
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
qx.Class.define(j,{statics:{__gp:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__gq:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__gr:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__gs:function(r){var s=this.__gr;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(t){{};
},"default":function(u){var w=this.__gq;
var v=p;

if(w){for(var i=0,l=w.length;i<l;i++){v+=w[i]+m+u+c;
}}return v;
}}),get:qx.core.Variant.select(q,{"mshtml":function(x){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(x))){if(!this.__gs(x)){return d;
}}return k;
},"default":function(y){var A=this.__gp;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==p){return z;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(B,C){{};
},"default":function(D,E){var F=this.__gp;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(G){this.set(G,p);
}}});
})();
(function(){var k="",j="qx.client",i="hidden",h="-moz-scrollbars-none",g="overflow",f=";",e="overflowY",d=":",b="overflowX",a="overflow:",y="none",x="scroll",w="borderLeftStyle",v="borderRightStyle",u="div",r="borderRightWidth",q="overflow-y",p="borderLeftWidth",o="-moz-scrollbars-vertical",n="100px",l="qx.bom.element.Overflow",m="overflow-x";
qx.Class.define(l,{statics:{__go:null,getScrollbarWidth:function(){if(this.__go!==null){return this.__go;
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
this.__go=c?c:16;
document.body.removeChild(t);
return this.__go;
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
qx.Class.define(c,{statics:{__gt:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return f+(this.__gt[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__gt[p]||p;
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
qx.Class.define(y,{statics:{__gu:function(){var G=[a,h,q,c];
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
}}}this.__gv=K;
this.__gv[n]=qx.core.Variant.select(k,{"gecko":f,"webkit":v,"default":h});
this.__gw={};

for(var I in K){this.__gw[I]=this.__gA(K[I]);
}this.__gv[d]=qx.core.Variant.select(k,{"mshtml":b,"default":C});
},__gx:{width:r,height:F,left:A,right:t,top:B,bottom:s},__gy:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(O){var Q=[];
var S=this.__gy;
var R=this.__gw;
var name,P;

for(name in O){P=O[name];

if(P==null){continue;
}name=R[name]||name;
if(S[name]){Q.push(S[name].compile(P));
}else{Q.push(this.__gA(name),D,P,p);
}}return Q.join(m);
},__gz:{},__gA:function(T){var U=this.__gz;
var V=U[T];

if(!V){V=U[T]=qx.lang.String.hyphenate(T);
}return V;
},setCss:qx.core.Variant.select(k,{"mshtml":function(W,X){W.style.cssText=X;
},"default":function(Y,ba){Y.setAttribute(g,ba);
}}),getCss:qx.core.Variant.select(k,{"mshtml":function(bb){return bb.style.cssText.toLowerCase();
},"default":function(bc){return bc.getAttribute(g);
}}),isPropertySupported:function(bd){return (this.__gy[bd]||this.__gv[bd]||bd in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(be,name,bf,bg){{};
name=this.__gv[name]||name;
if(bg!==false&&this.__gy[name]){return this.__gy[name].set(be,bf);
}else{be.style[name]=bf!==null?bf:m;
}},setStyles:function(bh,bi,bj){{};
var bm=this.__gv;
var bo=this.__gy;
var bk=bh.style;

for(var bn in bi){var bl=bi[bn];
var name=bm[bn]||bn;

if(bl===undefined){if(bj!==false&&bo[name]){bo[name].reset(bh);
}else{bk[name]=m;
}}else{if(bj!==false&&bo[name]){bo[name].set(bh,bl);
}else{bk[name]=bl!==null?bl:m;
}}}},reset:function(bp,name,bq){name=this.__gv[name]||name;
if(bq!==false&&this.__gy[name]){return this.__gy[name].reset(bp);
}else{bp.style[name]=m;
}},get:qx.core.Variant.select(k,{"mshtml":function(br,name,bs,bt){name=this.__gv[name]||name;
if(bt!==false&&this.__gy[name]){return this.__gy[name].get(br,bs);
}if(!br.currentStyle){return br.style[name]||m;
}switch(bs){case this.LOCAL_MODE:return br.style[name]||m;
case this.CASCADED_MODE:return br.currentStyle[name]||m;
default:var bx=br.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bx)){return bx;
}var bw=this.__gx[name];

if(bw){var bu=br.style[name];
br.style[name]=bx||0;
var bv=br.style[bw]+e;
br.style[name]=bu;
return bv;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bx)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bx;
}},"default":function(by,name,bz,bA){name=this.__gv[name]||name;
if(bA!==false&&this.__gy[name]){return this.__gy[name].get(by,bz);
}switch(bz){case this.LOCAL_MODE:return by.style[name]||m;
case this.CASCADED_MODE:if(by.currentStyle){return by.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bB=qx.dom.Node.getDocument(by);
var bC=bB.defaultView.getComputedStyle(by,null);
return bC?bC[name]:m;
}}})},defer:function(bD){bD.__gu();
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
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b="direct",a='__jg';
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jg=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__jh:null,compute:function(p,q,r,s,t,u,v){this.__jh=this.__jh||new qx.util.placement.Placement();
var y=t.split(f);
var x=y[0];
var w=y[1];
this.__jh.set({axisX:this.__jl(u),axisY:this.__jl(v),edge:x,align:w});
return this.__jh.compute(p,q,r,s);
},__ji:null,__jj:null,__jk:null,__jl:function(z){switch(z){case b:this.__ji=this.__ji||new qx.util.placement.DirectAxis();
return this.__ji;
case d:this.__jj=this.__jj||new qx.util.placement.KeepAlignAxis();
return this.__jj;
case c:this.__jk=this.__jk||new qx.util.placement.BestFitAxis();
return this.__jk;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__jg:null,compute:function(A,B,C,D){{};
var E=this.getAxisX()||this.__jg;
var G=E.computeStart(A.width,{start:C.left,end:C.right},{start:D.left,end:D.right},B.width,this.__jm());
var F=this.getAxisY()||this.__jg;
var top=F.computeStart(A.height,{start:C.top,end:C.bottom},{start:D.top,end:D.bottom},B.height,this.__jn());
return {left:G,top:top};
},__jm:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==l){return i;
}else if(I==n){return g;
}else if(H==l){return k;
}else if(H==n){return h;
}},__jn:function(){var K=this.getEdge();
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
qx.Class.define(b,{statics:{__gM:{},remove:function(c){delete this.__gM[c.$$hash];
},add:function(d){this.__gM[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},isScheduled:function(e){return !!this.__gM[e.$$hash];
},flush:function(){var f=this.__gP();
for(var i=f.length-1;i>=0;i--){var g=f[i];
if(g.hasValidLayout()){continue;
}if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();
g.renderLayout(0,0,j.width,j.height);
}else{var h=g.getBounds();
g.renderLayout(h.left,h.top,h.width,h.height);
}}},getNestingLevel:function(k){var l=this.__gO;
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
},__gN:function(){var t=qx.ui.core.queue.Visibility;
this.__gO={};
var s=[];
var r=this.__gM;
var o,q;

for(var p in r){o=r[p];

if(t.isVisible(o)){q=this.getNestingLevel(o);
if(!s[q]){s[q]={};
}s[q][p]=o;
delete r[p];
}}return s;
},__gP:function(){var x=[];
var z=this.__gN();

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
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__cJ={};
this.__cK=qx.lang.Function.bind(this.__cO,this);
this.__cL=false;
},members:{__cM:null,__cN:null,__cJ:null,__cL:null,__cK:null,schedule:function(c){if(this.__cM==null){this.__cM=window.setTimeout(this.__cK,0);
}var d=c.toHashCode();
if(this.__cN&&this.__cN[d]){return;
}this.__cJ[d]=c;
this.__cL=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__cN&&this.__cN[f]){this.__cN[f]=null;
return;
}delete this.__cJ[f];
if(qx.lang.Object.isEmpty(this.__cJ)&&this.__cM!=null){window.clearTimeout(this.__cM);
this.__cM=null;
}},__cO:qx.event.GlobalError.observeMethod(function(){this.__cM=null;
while(this.__cL){this.__cN=qx.lang.Object.clone(this.__cJ);
this.__cJ={};
this.__cL=false;

for(var h in this.__cN){var g=this.__cN[h];

if(g){this.__cN[h]=null;
g.call();
}}}this.__cN=null;
})},destruct:function(){if(this.__cM!=null){window.clearTimeout(this.__cM);
}this.__cK=this.__cJ=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){qx.core.Object.call(this);
this.__cP=b;
this.__cQ=c||null;
this.__cR=qx.util.DeferredCallManager.getInstance();
},members:{__cP:null,__cQ:null,__cR:null,cancel:function(){this.__cR.cancel(this);
},schedule:function(){this.__cR.schedule(this);
},call:function(){this.__cQ?this.__cP.apply(this.__cQ):this.__cP();
}},destruct:function(d,e){this.cancel();
this.__cQ=this.__cP=this.__cR=null;
}});
})();
(function(){var m="element",k="qx.client",j="qxSelectable",h="off",g="on",f="text",d="div",c="",b="mshtml",a="none",F="scroll",E="qx.html.Element",D="|capture|",C="activate",B="blur",A="deactivate",z="capture",w="userSelect",v="-moz-none",u="visible",s="releaseCapture",t="|bubble|",q="tabIndex",r="focus",o="MozUserSelect",p="__dp",n="hidden";
qx.Class.define(E,{extend:qx.core.Object,construct:function(G,H,I){qx.core.Object.call(this);
this.__cS=G||d;
this.__cT=H||null;
this.__cU=I||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__cV:{},_scheduleFlush:function(J){qx.html.Element.__dA.schedule();
},flush:function(){var U;
{};
var M=this.__cW();
var L=M.getFocus();

if(L&&this.__db(L)){M.blur(L);
}var bc=M.getActive();

if(bc&&this.__db(bc)){qx.bom.Element.deactivate(bc);
}var P=this.__cY();

if(P&&this.__db(P)){qx.bom.Element.releaseCapture(P);
}var V=[];
var W=this._modified;

for(var T in W){U=W[T];
if(U.__dt()){if(U.__dc&&qx.dom.Hierarchy.isRendered(U.__dc)){V.push(U);
}else{{};
U.__ds();
}delete W[T];
}}
for(var i=0,l=V.length;i<l;i++){U=V[i];
{};
U.__ds();
}var R=this._visibility;

for(var T in R){U=R[T];
var X=U.__dc;

if(!X){delete R[T];
continue;
}{};
if(!U.$$disposed){X.style.display=U.__df?c:a;
if(qx.core.Variant.isSet(k,b)){if(!(document.documentMode>=8)){X.style.visibility=U.__df?u:n;
}}}delete R[T];
}var scroll=this._scroll;

for(var T in scroll){U=scroll[T];
var bd=U.__dc;

if(bd&&bd.offsetWidth){var O=true;
if(U.__di!=null){U.__dc.scrollLeft=U.__di;
delete U.__di;
}if(U.__dj!=null){U.__dc.scrollTop=U.__dj;
delete U.__dj;
}var Y=U.__dg;

if(Y!=null){var S=Y.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewX(S,bd,Y.align);
delete U.__dg;
}else{O=false;
}}var ba=U.__dh;

if(ba!=null){var S=ba.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewY(S,bd,ba.align);
delete U.__dh;
}else{O=false;
}}if(O){delete scroll[T];
}}}var N={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bb=this._actions[i];
var X=bb.element.__dc;

if(!X||!N[bb.type]&&!bb.element.__dt()){continue;
}var Q=bb.args;
Q.unshift(X);
qx.bom.Element[bb.type].apply(qx.bom.Element,Q);
}this._actions=[];
for(var T in this.__cV){var K=this.__cV[T];
var bd=K.element.__dc;

if(bd){qx.bom.Selection.set(bd,K.start,K.end);
delete this.__cV[T];
}}qx.event.handler.Appear.refresh();
},__cW:function(){if(!this.__cX){var be=qx.event.Registration.getManager(window);
this.__cX=be.getHandler(qx.event.handler.Focus);
}return this.__cX;
},__cY:function(){if(!this.__da){var bf=qx.event.Registration.getManager(window);
this.__da=bf.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__da.getCaptureElement();
},__db:function(bg){var bh=qx.core.ObjectRegistry.fromHashCode(bg.$$element);
return bh&&!bh.__dt();
}},members:{__cS:null,__dc:null,__dd:false,__de:true,__df:true,__dg:null,__dh:null,__di:null,__dj:null,__dk:null,__dl:null,__dm:null,__cT:null,__cU:null,__dn:null,__do:null,__dp:null,__dq:null,__dr:null,_scheduleChildrenUpdate:function(){if(this.__dq){return;
}this.__dq=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__cS);
},__ds:function(){{};
var length;
var bi=this.__dp;

if(bi){length=bi.length;
var bj;

for(var i=0;i<length;i++){bj=bi[i];

if(bj.__df&&bj.__de&&!bj.__dc){bj.__ds();
}}}
if(!this.__dc){this.__dc=this._createDomElement();
this.__dc.$$element=this.$$hash;
this._copyData(false);

if(bi&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__dq){this._syncChildren();
}}delete this.__dq;
},_insertChildren:function(){var bk=this.__dp;
var length=bk.length;
var bm;

if(length>2){var bl=document.createDocumentFragment();

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__dc&&bm.__de){bl.appendChild(bm.__dc);
}}this.__dc.appendChild(bl);
}else{var bl=this.__dc;

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__dc&&bm.__de){bl.appendChild(bm.__dc);
}}}},_syncChildren:function(){var br;
var bw=qx.core.ObjectRegistry;
var bn=this.__dp;
var bu=bn.length;
var bo;
var bs;
var bq=this.__dc;
var bt=bq.childNodes;
var bp=0;
var bv;
{};
for(var i=bt.length-1;i>=0;i--){bv=bt[i];
bs=bw.fromHashCode(bv.$$element);

if(!bs||!bs.__de||bs.__dr!==this){bq.removeChild(bv);
{};
}}for(var i=0;i<bu;i++){bo=bn[i];
if(bo.__de){bs=bo.__dc;
bv=bt[bp];

if(!bs){continue;
}if(bs!=bv){if(bv){bq.insertBefore(bs,bv);
}else{bq.appendChild(bs);
}{};
}bp++;
}}{};
},_copyData:function(bx){var bB=this.__dc;
var bA=this.__cU;

if(bA){var by=qx.bom.element.Attribute;

for(var bC in bA){by.set(bB,bC,bA[bC]);
}}var bA=this.__cT;

if(bA){var bz=qx.bom.element.Style;

if(bx){bz.setStyles(bB,bA);
}else{bz.setCss(bB,bz.compile(bA));
}}var bA=this.__dn;

if(bA){for(var bC in bA){this._applyProperty(bC,bA[bC]);
}}var bA=this.__do;

if(bA){qx.event.Registration.getManager(bB).importListeners(bB,bA);
delete this.__do;
}},_syncData:function(){var bH=this.__dc;
var bG=qx.bom.element.Attribute;
var bE=qx.bom.element.Style;
var bF=this.__dl;

if(bF){var bK=this.__cU;

if(bK){var bI;

for(var bJ in bF){bI=bK[bJ];

if(bI!==undefined){bG.set(bH,bJ,bI);
}else{bG.reset(bH,bJ);
}}}this.__dl=null;
}var bF=this.__dk;

if(bF){var bK=this.__cT;

if(bK){var bD={};

for(var bJ in bF){bD[bJ]=bK[bJ];
}bE.setStyles(bH,bD);
}this.__dk=null;
}var bF=this.__dm;

if(bF){var bK=this.__dn;

if(bK){var bI;

for(var bJ in bF){this._applyProperty(bJ,bK[bJ]);
}}this.__dm=null;
}},__dt:function(){var bL=this;
while(bL){if(bL.__dd){return true;
}
if(!bL.__de||!bL.__df){return false;
}bL=bL.__dr;
}return false;
},__du:function(bM){if(bM.__dr===this){throw new Error("Child is already in: "+bM);
}
if(bM.__dd){throw new Error("Root elements could not be inserted into other ones.");
}if(bM.__dr){bM.__dr.remove(bM);
}bM.__dr=this;
if(!this.__dp){this.__dp=[];
}if(this.__dc){this._scheduleChildrenUpdate();
}},__dv:function(bN){if(bN.__dr!==this){throw new Error("Has no child: "+bN);
}if(this.__dc){this._scheduleChildrenUpdate();
}delete bN.__dr;
},__dw:function(bO){if(bO.__dr!==this){throw new Error("Has no child: "+bO);
}if(this.__dc){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dp||null;
},getChild:function(bP){var bQ=this.__dp;
return bQ&&bQ[bP]||null;
},hasChildren:function(){var bR=this.__dp;
return bR&&bR[0]!==undefined;
},indexOf:function(bS){var bT=this.__dp;
return bT?bT.indexOf(bS):-1;
},hasChild:function(bU){var bV=this.__dp;
return bV&&bV.indexOf(bU)!==-1;
},add:function(bW){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__du(arguments[i]);
}this.__dp.push.apply(this.__dp,arguments);
}else{this.__du(bW);
this.__dp.push(bW);
}return this;
},addAt:function(bX,bY){this.__du(bX);
qx.lang.Array.insertAt(this.__dp,bX,bY);
return this;
},remove:function(ca){var cb=this.__dp;

if(!cb){return;
}
if(arguments[1]){var cc;

for(var i=0,l=arguments.length;i<l;i++){cc=arguments[i];
this.__dv(cc);
qx.lang.Array.remove(cb,cc);
}}else{this.__dv(ca);
qx.lang.Array.remove(cb,ca);
}return this;
},removeAt:function(cd){var ce=this.__dp;

if(!ce){throw new Error("Has no children!");
}var cf=ce[cd];

if(!cf){throw new Error("Has no child at this position!");
}this.__dv(cf);
qx.lang.Array.removeAt(this.__dp,cd);
return this;
},removeAll:function(){var cg=this.__dp;

if(cg){for(var i=0,l=cg.length;i<l;i++){this.__dv(cg[i]);
}cg.length=0;
}return this;
},getParent:function(){return this.__dr||null;
},insertInto:function(parent,ch){parent.__du(this);

if(ch==null){parent.__dp.push(this);
}else{qx.lang.Array.insertAt(this.__dp,this,ch);
}return this;
},insertBefore:function(ci){var parent=ci.__dr;
parent.__du(this);
qx.lang.Array.insertBefore(parent.__dp,this,ci);
return this;
},insertAfter:function(cj){var parent=cj.__dr;
parent.__du(this);
qx.lang.Array.insertAfter(parent.__dp,this,cj);
return this;
},moveTo:function(ck){var parent=this.__dr;
parent.__dw(this);
var cl=parent.__dp.indexOf(this);

if(cl===ck){throw new Error("Could not move to same index!");
}else if(cl<ck){ck--;
}qx.lang.Array.removeAt(parent.__dp,cl);
qx.lang.Array.insertAt(parent.__dp,this,ck);
return this;
},moveBefore:function(cm){var parent=this.__dr;
return this.moveTo(parent.__dp.indexOf(cm));
},moveAfter:function(cn){var parent=this.__dr;
return this.moveTo(parent.__dp.indexOf(cn)+1);
},free:function(){var parent=this.__dr;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__dp){return;
}parent.__dv(this);
qx.lang.Array.remove(parent.__dp,this);
return this;
},getDomElement:function(){return this.__dc||null;
},getNodeName:function(){return this.__cS;
},setNodeName:function(name){this.__cS=name;
},setRoot:function(co){this.__dd=co;
},useMarkup:function(cp){if(this.__dc){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(k,b)){var cq=document.createElement(d);
}else{var cq=qx.bom.Element.getHelperElement();
}cq.innerHTML=cp;
this.useElement(cq.firstChild);
return this.__dc;
},useElement:function(cr){if(this.__dc){throw new Error("Could not overwrite existing element!");
}this.__dc=cr;
this.__dc.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ct=this.getAttribute(q);

if(ct>=1){return true;
}var cs=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ct>=0&&cs[this.__cS]){return true;
}return false;
},setSelectable:qx.core.Variant.select(k,{"webkit":function(cu){this.setAttribute(j,cu?g:h);
this.setStyle(w,cu?f:a);
},"gecko":function(cv){this.setAttribute(j,cv?g:h);
this.setStyle(o,cv?f:v);
},"default":function(cw){this.setAttribute(j,cw?g:h);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__cS];
},include:function(){if(this.__de){return;
}delete this.__de;

if(this.__dr){this.__dr._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__de){return;
}this.__de=false;

if(this.__dr){this.__dr._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__de===true;
},show:function(){if(this.__df){return;
}
if(this.__dc){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__dr){this.__dr._scheduleChildrenUpdate();
}delete this.__df;
},hide:function(){if(!this.__df){return;
}
if(this.__dc){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__df=false;
},isVisible:function(){return this.__df===true;
},scrollChildIntoViewX:function(cx,cy,cz){var cA=this.__dc;
var cB=cx.getDomElement();

if(cz!==false&&cA&&cA.offsetWidth&&cB&&cB.offsetWidth){qx.bom.element.Scroll.intoViewX(cB,cA,cy);
}else{this.__dg={element:cx,align:cy};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__di;
},scrollChildIntoViewY:function(cC,cD,cE){var cF=this.__dc;
var cG=cC.getDomElement();

if(cE!==false&&cF&&cF.offsetWidth&&cG&&cG.offsetWidth){qx.bom.element.Scroll.intoViewY(cG,cF,cD);
}else{this.__dh={element:cC,align:cD};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dj;
},scrollToX:function(x,cH){var cI=this.__dc;

if(cH!==true&&cI&&cI.offsetWidth){cI.scrollLeft=x;
delete this.__di;
}else{this.__di=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dg;
},getScrollX:function(){var cJ=this.__dc;

if(cJ){return cJ.scrollLeft;
}return this.__di||0;
},scrollToY:function(y,cK){var cL=this.__dc;

if(cK!==true&&cL&&cL.offsetWidth){cL.scrollTop=y;
delete this.__dj;
}else{this.__dj=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dh;
},getScrollY:function(){var cM=this.__dc;

if(cM){return cM.scrollTop;
}return this.__dj||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(F,this.__dy,this);
},enableScrolling:function(){this.removeListener(F,this.__dy,this);
},__dx:null,__dy:function(e){if(!this.__dx){this.__dx=true;
this.__dc.scrollTop=0;
this.__dc.scrollLeft=0;
delete this.__dx;
}},getTextSelection:function(){var cN=this.__dc;

if(cN){return qx.bom.Selection.get(cN);
}return null;
},getTextSelectionLength:function(){var cO=this.__dc;

if(cO){return qx.bom.Selection.getLength(cO);
}return null;
},getTextSelectionStart:function(){var cP=this.__dc;

if(cP){return qx.bom.Selection.getStart(cP);
}return null;
},getTextSelectionEnd:function(){var cQ=this.__dc;

if(cQ){return qx.bom.Selection.getEnd(cQ);
}return null;
},setTextSelection:function(cR,cS){var cT=this.__dc;

if(cT){qx.bom.Selection.set(cT,cR,cS);
return;
}qx.html.Element.__cV[this.toHashCode()]={element:this,start:cR,end:cS};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var cU=this.__dc;

if(cU){qx.bom.Selection.clear(cU);
}delete qx.html.Element.__cV[this.toHashCode()];
},__dz:function(cV,cW){var cX=qx.html.Element._actions;
cX.push({type:cV,element:this,args:cW||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__dz(r);
},blur:function(){this.__dz(B);
},activate:function(){this.__dz(C);
},deactivate:function(){this.__dz(A);
},capture:function(cY){this.__dz(z,[cY!==false]);
},releaseCapture:function(){this.__dz(s);
},setStyle:function(da,dc,dd){if(!this.__cT){this.__cT={};
}
if(this.__cT[da]==dc){return;
}
if(dc==null){delete this.__cT[da];
}else{this.__cT[da]=dc;
}if(this.__dc){if(dd){qx.bom.element.Style.set(this.__dc,da,dc);
return this;
}if(!this.__dk){this.__dk={};
}this.__dk[da]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(de,df){var dg=qx.bom.element.Style;

if(!this.__cT){this.__cT={};
}
if(this.__dc){if(!this.__dk){this.__dk={};
}
for(var di in de){var dh=de[di];

if(this.__cT[di]==dh){continue;
}
if(dh==null){delete this.__cT[di];
}else{this.__cT[di]=dh;
}if(df){dg.set(this.__dc,di,dh);
continue;
}this.__dk[di]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var di in de){var dh=de[di];

if(this.__cT[di]==dh){continue;
}
if(dh==null){delete this.__cT[di];
}else{this.__cT[di]=dh;
}}}return this;
},removeStyle:function(dj,dk){this.setStyle(dj,null,dk);
},getStyle:function(dl){return this.__cT?this.__cT[dl]:null;
},getAllStyles:function(){return this.__cT||null;
},setAttribute:function(dm,dn,dp){if(!this.__cU){this.__cU={};
}
if(this.__cU[dm]==dn){return;
}
if(dn==null){delete this.__cU[dm];
}else{this.__cU[dm]=dn;
}if(this.__dc){if(dp){qx.bom.element.Attribute.set(this.__dc,dm,dn);
return this;
}if(!this.__dl){this.__dl={};
}this.__dl[dm]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dq,dr){for(var ds in dq){this.setAttribute(ds,dq[ds],dr);
}return this;
},removeAttribute:function(dt,du){this.setAttribute(dt,null,du);
},getAttribute:function(dv){return this.__cU?this.__cU[dv]:null;
},_applyProperty:function(name,dw){},_setProperty:function(dx,dy,dz){if(!this.__dn){this.__dn={};
}
if(this.__dn[dx]==dy){return;
}
if(dy==null){delete this.__dn[dx];
}else{this.__dn[dx]=dy;
}if(this.__dc){if(dz){this._applyProperty(dx,dy);
return this;
}if(!this.__dm){this.__dm={};
}this.__dm[dx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dA,dB){this._setProperty(dA,null,dB);
},_getProperty:function(dC){var dD=this.__dn;

if(!dD){return null;
}var dE=dD[dC];
return dE==null?null:dE;
},addListener:function(dF,dG,self,dH){var dI;

if(this.$$disposed){return null;
}{};

if(this.__dc){return qx.event.Registration.addListener(this.__dc,dF,dG,self,dH);
}
if(!this.__do){this.__do={};
}
if(dH==null){dH=false;
}var dJ=qx.event.Manager.getNextUniqueId();
var dK=dF+(dH?D:t)+dJ;
this.__do[dK]={type:dF,listener:dG,self:self,capture:dH,unique:dJ};
return dK;
},removeListener:function(dL,dM,self,dN){var dO;

if(this.$$disposed){return null;
}{};

if(this.__dc){qx.event.Registration.removeListener(this.__dc,dL,dM,self,dN);
}else{var dQ=this.__do;
var dP;

if(dN==null){dN=false;
}
for(var dR in dQ){dP=dQ[dR];
if(dP.listener===dM&&dP.self===self&&dP.capture===dN&&dP.type===dL){delete dQ[dR];
break;
}}}return this;
},removeListenerById:function(dS){if(this.$$disposed){return null;
}
if(this.__dc){qx.event.Registration.removeListenerById(this.__dc,dS);
}else{delete this.__do[dS];
}return this;
},hasListener:function(dT,dU){if(this.$$disposed){return false;
}
if(this.__dc){return qx.event.Registration.hasListener(this.__dc,dT,dU);
}var dW=this.__do;
var dV;

if(dU==null){dU=false;
}
for(var dX in dW){dV=dW[dX];
if(dV.capture===dU&&dV.type===dT){return true;
}}return false;
}},defer:function(dY){dY.__dA=new qx.util.DeferredCall(dY.flush,dY);
},destruct:function(){var ea=this.__dc;

if(ea){qx.event.Registration.getManager(ea).removeAllListeners(ea);
ea.$$element=c;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dr;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(p);
this.__cU=this.__cT=this.__do=this.__dn=this.__dl=this.__dk=this.__dm=this.__dc=this.__dr=this.__dg=this.__dh=null;
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__dD=b;
this.__dE=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dD:null,__dE:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__dD=this.__dE=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var d='ie',c="qx.ui.core.queue.Manager",b="useraction",a="touchend";
qx.Class.define(c,{statics:{__dF:false,__dG:{},__dH:0,MAX_RETRIES:10,scheduleFlush:function(f){var self=qx.ui.core.queue.Manager;
self.__dG[f]=true;

if(!self.__dF){self.__dM.schedule();
self.__dF=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__dI){return;
}self.__dI=true;
self.__dM.cancel();
var g=self.__dG;
self.__dJ(function(){while(g.visibility||g.widget||g.appearance||g.layout||g.element){if(g.widget){delete g.widget;
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
}}},function(){self.__dF=false;
});
self.__dJ(function(){if(g.dispose){delete g.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__dI=false;
});
self.__dH=0;
},__dJ:function(h,i){var self=qx.ui.core.queue.Manager;

try{h();
}catch(e){{};
self.__dF=false;
self.__dI=false;
self.__dH+=1;
if(qx.bom.client.Browser.NAME==d&&qx.bom.client.Browser.VERSION<=7){i();
}
if(self.__dH<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__dH-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{i();
}},__dK:function(e){var j=qx.ui.core.queue.Manager;
if(e.getData()==a){j.PAUSE=true;

if(j.__dL){window.clearTimeout(j.__dL);
}j.__dL=window.setTimeout(function(){j.PAUSE=false;
j.__dL=null;
j.flush();
},500);
}else{j.flush();
}}},defer:function(k){k.__dM=new qx.util.DeferredCall(k.flush);
qx.html.Element._scheduleFlush=k.scheduleFlush;
qx.event.Registration.addListener(window,b,qx.bom.client.Feature.TOUCH?k.__dK:k.flush);
}});
})();
(function(){var b="-",a="qx.event.handler.Element";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){qx.core.Object.call(this);
this._manager=c;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},CANCELABLE:{selectstart:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(d,e){},registerEvent:function(f,g,h){var k=qx.core.ObjectRegistry.toHashCode(f);
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
var w=this.constructor.CANCELABLE[u.type];
qx.event.Registration.fireNonBubblingEvent(u.element,u.type,qx.event.type.Native,[s,undefined,undefined,undefined,w]);
})},destruct:function(){var x;
var y=this._registeredEvents;

for(var z in y){x=y[z];
qx.bom.Event.removeNativeListener(x.element,x.type,x.listener);
}this._manager=this._registeredEvents=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__dN=f;
this.__dO=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dN:null,__dO:null,__dP:null,__dQ:null,__dR:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__dR=qx.lang.Function.listener(this._onNative,this);
this.__dP=qx.bom.Event.supportsEvent(this.__dO,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__dO,this.__dP,this.__dR);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dO,this.__dP,this.__dR);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__dQ!=p){this.__dQ=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__dO,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__dN=this.__dO=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="mousemove",o="touchcancel",n="mouseup",m="mousedown",l="qx.client",k="mshtml",d="qx.event.handler.Touch",j="useraction",h="swipe",c="qx.mobile.nativescroll",b="webkit",g="off",f="tap",i="x",a="y";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__dS=u;
this.__dT=u.getWindow();
this.__dU=this.__dT.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:10,SWIPE_MIN_DISTANCE:11,SWIPE_MIN_VELOCITY:0},members:{__dV:null,__dW:null,__dS:null,__dT:null,__dU:null,__dX:null,__dY:null,__ea:null,__eb:null,__ec:false,__ed:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__ee:function(D){var E=qx.bom.Event.getTarget(D);
if(qx.core.Variant.isSet(l,b)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__ef:function(F,G,H,I){if(!H){H=this.__ee(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__dT,j,qx.event.type.Data,[G]);
},__eg:function(J,K,L){if(!L){L=this.__ee(J);
}var K=K||J.type;

if(K==r){this.__eh(J,L);
}else if(K==q){this.__ei(J,L);
}else if(K==s){this.__ej(J,L);
}},__eh:function(M,N){var O=M.changedTouches[0];
this.__dX=O.screenX;
this.__dY=O.screenY;
this.__ea=new Date().getTime();
this.__eb=M.changedTouches.length===1;
},__ei:function(P,Q){if(this.__eb&&P.changedTouches.length>1){this.__eb=false;
}},__ej:function(R,S){if(this.__eb){var T=R.changedTouches[0];
var V={x:T.screenX-this.__dX,y:T.screenY-this.__dY};
var W=qx.event.handler.Touch;

if(this.__ed==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__ef(R,f,S,qx.event.type.Tap);
}else{var U=this.__ek(R,S,V);

if(U){R.swipe=U;
this.__ef(R,h,S,qx.event.type.Swipe);
}}}},__ek:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__ea;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__ea,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__el:qx.core.Variant.select(t,{"on":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__em(bi)){this.__ec=true;
}else if(bj==s){this.__ec=false;
}var bm=this.__en(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__em:qx.core.Variant.select(t,{"on":function(bn){if(qx.core.Variant.isSet(l,k)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__en:qx.core.Variant.select(t,{"on":function(bp){var bq=this.__ee(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__dV=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dU,r,this.__dV);
Event.addNativeListener(this.__dU,q,this.__dV);
Event.addNativeListener(this.__dU,s,this.__dV);
Event.addNativeListener(this.__dU,o,this.__dV);
},_initMouseObserver:qx.core.Variant.select(t,{"on":function(){if(!qx.bom.client.Feature.TOUCH){this.__dW=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dU,m,this.__dW);
Event.addNativeListener(this.__dU,p,this.__dW);
Event.addNativeListener(this.__dU,n,this.__dW);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dU,r,this.__dV);
Event.removeNativeListener(this.__dU,q,this.__dV);
Event.removeNativeListener(this.__dU,s,this.__dV);
Event.removeNativeListener(this.__dU,o,this.__dV);
},_stopMouseObserver:qx.core.Variant.select(t,{"on":function(){if(!qx.bom.client.Feature.TOUCH){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dU,m,this.__dW);
Event.removeNativeListener(this.__dU,p,this.__dW);
Event.removeNativeListener(this.__dU,n,this.__dW);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Variant.select(t,{"on":qx.event.GlobalError.observeMethod(function(bs){if(!qx.bom.client.Feature.TOUCH){if(bs.type==p&&!this.__ec){return;
}var bt=this.__el(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__ed=this.__ee(bu);
}this.__ef(bu,bv);
this.__eg(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__dS=this.__dT=this.__dU=this.__ed=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.bom.client.Feature.TOUCH){if(qx.core.Variant.isSet(c,g)){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
})();
(function(){var p="mouseup",o="click",n="qx.client",m="mousedown",l="contextmenu",k="mousewheel",j="dblclick",h="mouseover",g="mouseout",f="mousemove",c="on",e="useraction",d="DOMMouseScroll",b="gecko|webkit",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){qx.core.Object.call(this);
this.__er=q;
this.__es=q.getWindow();
this.__et=this.__es.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__eu:null,__ev:null,__ew:null,__ex:null,__ey:null,__er:null,__es:null,__et:null,canHandleEvent:function(r,s){},registerEvent:qx.bom.client.System.IPHONE||
qx.bom.client.System.IPAD?
function(t,u,v){t[c+u]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE||
qx.bom.client.System.IPAD?
function(w,x,y){w[c+x]=undefined;
}:qx.lang.Function.returnNull,__ez:function(z,A,B){if(!B){B=qx.bom.Event.getTarget(z);
}if(B&&B.nodeType){qx.event.Registration.fireEvent(B,A||z.type,A==k?qx.event.type.MouseWheel:qx.event.type.Mouse,[z,B,null,true,true]);
}qx.event.Registration.fireEvent(this.__es,e,qx.event.type.Data,[A||z.type]);
},__eA:function(){var D=[this.__es,this.__et,this.__et.body];
var E=this.__es;
var C=d;

for(var i=0;i<D.length;i++){if(qx.bom.Event.supportsEvent(D[i],k)){C=k;
E=D[i];
break;
}}return {type:C,target:E};
},_initButtonObserver:function(){this.__eu=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__et,m,this.__eu);
Event.addNativeListener(this.__et,p,this.__eu);
Event.addNativeListener(this.__et,o,this.__eu);
Event.addNativeListener(this.__et,j,this.__eu);
Event.addNativeListener(this.__et,l,this.__eu);
},_initMoveObserver:function(){this.__ev=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__et,f,this.__ev);
Event.addNativeListener(this.__et,h,this.__ev);
Event.addNativeListener(this.__et,g,this.__ev);
},_initWheelObserver:function(){this.__ew=qx.lang.Function.listener(this._onWheelEvent,this);
var F=this.__eA();
qx.bom.Event.addNativeListener(F.target,F.type,this.__ew);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__et,m,this.__eu);
Event.removeNativeListener(this.__et,p,this.__eu);
Event.removeNativeListener(this.__et,o,this.__eu);
Event.removeNativeListener(this.__et,j,this.__eu);
Event.removeNativeListener(this.__et,l,this.__eu);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__et,f,this.__ev);
Event.removeNativeListener(this.__et,h,this.__ev);
Event.removeNativeListener(this.__et,g,this.__ev);
},_stopWheelObserver:function(){var G=this.__eA();
qx.bom.Event.removeNativeListener(G.target,G.type,this.__ew);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(H){this.__ez(H);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(I){var J=I.type;
var K=qx.bom.Event.getTarget(I);
if(qx.core.Variant.isSet(n,b)){if(K&&K.nodeType==3){K=K.parentNode;
}}
if(this.__eB){this.__eB(I,J,K);
}
if(this.__eD){this.__eD(I,J,K);
}this.__ez(I,J,K);

if(this.__eC){this.__eC(I,J,K);
}
if(this.__eE){this.__eE(I,J,K);
}this.__ex=J;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(L){this.__ez(L,k);
}),__eB:qx.core.Variant.select(n,{"webkit":function(M,N,O){if(qx.bom.client.Engine.VERSION<530){if(N==l){this.__ez(M,p,O);
}}},"default":null}),__eC:qx.core.Variant.select(n,{"opera":function(P,Q,R){if(Q==p&&P.button==2){this.__ez(P,l,R);
}},"default":null}),__eD:qx.core.Variant.select(n,{"mshtml":function(S,T,U){if(S.target!==undefined){return;
}
if(T==p&&this.__ex==o){this.__ez(S,m,U);
}else if(T==j){this.__ez(S,o,U);
}},"default":null}),__eE:qx.core.Variant.select(n,{"mshtml":null,"default":function(V,W,X){switch(W){case m:this.__ey=X;
break;
case p:if(X!==this.__ey){var Y=qx.dom.Hierarchy.getCommonParent(X,this.__ey);
this.__ez(V,o,Y);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__er=this.__es=this.__et=this.__ey=null;
},defer:function(ba){qx.event.Registration.addHandler(ba);
}});
})();
(function(){var m="keydown",l="qx.client",k="keypress",j="NumLock",i="keyup",h="Enter",g="0",f="9",e="-",d="PageUp",bu="+",bt="PrintScreen",bs="gecko",br="A",bq="Z",bp="Left",bo="F5",bn="Down",bm="Up",bl="F11",t="F6",u="useraction",r="F3",s="keyinput",p="Insert",q="F8",n="End",o="/",B="Delete",C="*",O="cmd",K="F1",W="F4",R="Home",bh="F2",bc="F12",G="PageDown",bk="F7",bj="Win",bi="F9",F="F10",I="Right",J="text",M="Escape",P="webkit",S="5",Y="3",be="Meta",v="7",w="CapsLock",H="input",V="Control",U="Space",T="Tab",bb="Shift",ba="Pause",Q="Unidentified",X="qx.event.handler.Keyboard",a="mshtml|webkit",bd="6",x="off",y="Apps",L="4",b="Alt",c="mshtml",E="2",z="Scroll",A="1",D="8",N="autoComplete",bg=",",bf="Backspace";
qx.Class.define(X,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bv){qx.core.Object.call(this);
this.__eF=bv;
this.__eG=bv.getWindow();
if(qx.core.Variant.isSet(l,bs)){this.__eH=this.__eG;
}else{this.__eH=this.__eG.document.documentElement;
}this.__eI={};
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
}}},members:{__eJ:null,__eF:null,__eG:null,__eH:null,__eI:null,__eK:null,__eL:null,__eM:null,canHandleEvent:function(bx,by){},registerEvent:function(bz,bA,bB){},unregisterEvent:function(bC,bD,bE){},_fireInputEvent:function(bF,bG){var bH=this.__eN();
if(bH&&bH.offsetWidth!=0){var event=qx.event.Registration.createEvent(s,qx.event.type.KeyInput,[bF,bH,bG]);
this.__eF.dispatchEvent(bH,event);
}if(this.__eG){qx.event.Registration.fireEvent(this.__eG,u,qx.event.type.Data,[s]);
}},_fireSequenceEvent:function(bI,bJ,bK){var bL=this.__eN();
var bM=bI.keyCode;
var event=qx.event.Registration.createEvent(bJ,qx.event.type.KeySequence,[bI,bL,bK]);
this.__eF.dispatchEvent(bL,event);
if(qx.core.Variant.isSet(l,a)){if(bJ==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bM)&&!this._emulateKeyPress[bM]){this._fireSequenceEvent(bI,k,bK);
}}}if(this.__eG){qx.event.Registration.fireEvent(this.__eG,u,qx.event.type.Data,[bJ]);
}},__eN:function(){var bN=this.__eF.getHandler(qx.event.handler.Focus);
var bO=bN.getActive();
if(!bO||bO.offsetWidth==0){bO=bN.getFocus();
}if(!bO||bO.offsetWidth==0){bO=this.__eF.getWindow().document.body;
}return bO;
},_initKeyObserver:function(){this.__eJ=qx.lang.Function.listener(this.__eO,this);
this.__eM=qx.lang.Function.listener(this.__eQ,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eH,i,this.__eJ);
Event.addNativeListener(this.__eH,m,this.__eJ);
Event.addNativeListener(this.__eH,k,this.__eM);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eH,i,this.__eJ);
Event.removeNativeListener(this.__eH,m,this.__eJ);
Event.removeNativeListener(this.__eH,k,this.__eM);

for(var bQ in (this.__eL||{})){var bP=this.__eL[bQ];
Event.removeNativeListener(bP.target,k,bP.callback);
}delete (this.__eL);
},__eO:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(bR){bR=window.event||bR;
var bU=bR.keyCode;
var bS=0;
var bT=bR.type;
if(!(this.__eI[bU]==m&&bT==m)){this._idealKeyHandler(bU,bS,bT,bR);
}if(bT==m){if(this._isNonPrintableKeyCode(bU)||this._emulateKeyPress[bU]){this._idealKeyHandler(bU,bS,k,bR);
}}this.__eI[bU]=bT;
},"gecko":function(bV){var ca=this._keyCodeFix[bV.keyCode]||bV.keyCode;
var bX=0;
var bY=bV.type;
if(qx.bom.client.Platform.WIN){var bW=ca?this._keyCodeToIdentifier(ca):this._charCodeToIdentifier(bX);

if(!(this.__eI[bW]==m&&bY==m)){this._idealKeyHandler(ca,bX,bY,bV);
}this.__eI[bW]=bY;
}else{this._idealKeyHandler(ca,bX,bY,bV);
}this.__eP(bV.target,bY,ca);
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
}}this.__eI[ce]=cd;
}},"opera":function(cf){this.__eK=cf.keyCode;
this._idealKeyHandler(cf.keyCode,0,cf.type,cf);
}})),__eP:qx.core.Variant.select(l,{"gecko":function(cg,ch,ci){if(ch===m&&(ci==33||ci==34||ci==38||ci==40)&&cg.type==J&&cg.tagName.toLowerCase()===H&&cg.getAttribute(N)!==x){if(!this.__eL){this.__eL={};
}var ck=qx.core.ObjectRegistry.toHashCode(cg);

if(this.__eL[ck]){return;
}var self=this;
this.__eL[ck]={target:cg,callback:function(cl){qx.bom.Event.stopPropagation(cl);
self.__eQ(cl);
}};
var cj=qx.event.GlobalError.observeMethod(this.__eL[ck].callback);
qx.bom.Event.addNativeListener(cg,k,cj);
}},"default":null}),__eQ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(cm){cm=window.event||cm;

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
if(cx!=this.__eK){this._idealKeyHandler(0,this.__eK,cw,cv);
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
this.__eK=this.__eF=this.__eG=this.__eH=this.__eI=null;
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
this.__eR=B;
this.__eS=B.getWindow().document.documentElement;
this.__eR.addListener(this.__eS,v,this._onMouseDown,this);
this.__ff();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__eR:null,__eS:null,__eT:null,__eU:null,__eV:null,__eW:null,__eX:null,__eY:null,__fa:null,__fb:null,__fc:false,__fd:0,__fe:0,canHandleEvent:function(C,D){},registerEvent:function(E,F,G){},unregisterEvent:function(H,I,J){},addType:function(K){this.__eV[K]=true;
},addAction:function(L){this.__eW[L]=true;
},supportsType:function(M){return !!this.__eV[M];
},supportsAction:function(N){return !!this.__eW[N];
},getData:function(O){if(!this.__fm||!this.__eT){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__eV[O]){throw new Error("Unsupported data type: "+O+"!");
}
if(!this.__eY[O]){this.__fa=O;
this.__fh(q,this.__eU,this.__eT,false);
}
if(!this.__eY[O]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__eY[O]||null;
},getCurrentAction:function(){return this.__fb;
},addData:function(P,Q){this.__eY[P]=Q;
},getCurrentType:function(){return this.__fa;
},isSessionActive:function(){return this.__fc;
},__ff:function(){this.__eV={};
this.__eW={};
this.__eX={};
this.__eY={};
},__fg:function(){if(this.__eU==null){return;
}var T=this.__eW;
var R=this.__eX;
var S=null;

if(this.__fm){if(R.Shift&&R.Ctrl&&T.alias){S=k;
}else if(R.Shift&&R.Alt&&T.copy){S=j;
}else if(R.Shift&&T.move){S=b;
}else if(R.Alt&&T.alias){S=k;
}else if(R.Ctrl&&T.copy){S=j;
}else if(T.move){S=b;
}else if(T.copy){S=j;
}else if(T.alias){S=k;
}}
if(S!=this.__fb){this.__fb=S;
this.__fh(o,this.__eU,this.__eT,false);
}},__fh:function(U,V,W,X,Y){var bb=qx.event.Registration;
var ba=bb.createEvent(U,qx.event.type.Drag,[X,Y]);

if(V!==W){ba.setRelatedTarget(W);
}return bb.dispatchEvent(V,ba);
},__fi:function(bc){while(bc&&bc.nodeType==1){if(bc.getAttribute(u)==w){return bc;
}bc=bc.parentNode;
}return null;
},__fj:function(bd){while(bd&&bd.nodeType==1){if(bd.getAttribute(r)==w){return bd;
}bd=bd.parentNode;
}return null;
},__fk:function(){this.__eU=null;
this.__eR.removeListener(this.__eS,c,this._onMouseMove,this,true);
this.__eR.removeListener(this.__eS,y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__ff();
},__fl:function(){if(this.__fc){this.__eR.removeListener(this.__eS,a,this._onMouseOver,this,true);
this.__eR.removeListener(this.__eS,h,this._onMouseOut,this,true);
this.__eR.removeListener(this.__eS,g,this._onKeyDown,this,true);
this.__eR.removeListener(this.__eS,z,this._onKeyUp,this,true);
this.__fh(x,this.__eU,this.__eT,false);
this.__fc=false;
}this.__fm=false;
this.__eT=null;
this.__fk();
},__fm:false,_onWindowBlur:function(e){this.__fl();
},_onKeyDown:function(e){var be=e.getKeyIdentifier();

switch(be){case A:case f:case d:if(!this.__eX[be]){this.__eX[be]=true;
this.__fg();
}}},_onKeyUp:function(e){var bf=e.getKeyIdentifier();

switch(bf){case A:case f:case d:if(this.__eX[bf]){this.__eX[bf]=false;
this.__fg();
}}},_onMouseDown:function(e){if(this.__fc){return;
}var bg=this.__fi(e.getTarget());

if(bg){this.__fd=e.getDocumentLeft();
this.__fe=e.getDocumentTop();
this.__eU=bg;
this.__eR.addListener(this.__eS,c,this._onMouseMove,this,true);
this.__eR.addListener(this.__eS,y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fm){this.__fh(s,this.__eT,this.__eU,false,e);
}if(this.__fc){e.stopPropagation();
}this.__fl();
},_onMouseMove:function(e){if(this.__fc){if(!this.__fh(t,this.__eU,this.__eT,true,e)){this.__fl();
}}else{if(Math.abs(e.getDocumentLeft()-this.__fd)>3||Math.abs(e.getDocumentTop()-this.__fe)>3){if(this.__fh(n,this.__eU,this.__eT,true,e)){this.__fc=true;
this.__eR.addListener(this.__eS,a,this._onMouseOver,this,true);
this.__eR.addListener(this.__eS,h,this._onMouseOut,this,true);
this.__eR.addListener(this.__eS,g,this._onKeyDown,this,true);
this.__eR.addListener(this.__eS,z,this._onKeyUp,this,true);
var bh=this.__eX;
bh.Ctrl=e.isCtrlPressed();
bh.Shift=e.isShiftPressed();
bh.Alt=e.isAltPressed();
this.__fg();
}else{this.__fh(x,this.__eU,this.__eT,false);
this.__fk();
}}}},_onMouseOver:function(e){var bi=e.getTarget();
var bj=this.__fj(bi);

if(bj&&bj!=this.__eT){this.__fm=this.__fh(m,bj,this.__eU,true,e);
this.__eT=bj;
this.__fg();
}},_onMouseOut:function(e){var bl=this.__fj(e.getTarget());
var bk=this.__fj(e.getRelatedTarget());

if(bl&&bl!==bk&&bl==this.__eT){this.__fh(l,this.__eT,bk,false,e);
this.__eT=null;
this.__fm=false;
qx.event.Timer.once(this.__fg,this,0);
}}},destruct:function(){this.__eU=this.__eT=this.__eR=this.__eS=this.__eV=this.__eW=this.__eX=this.__eY=null;
},defer:function(bm){qx.event.Registration.addHandler(bm);
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__fn=d;
this.__fo={};
qx.event.handler.Appear.__fp[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fp:{},refresh:function(){var e=this.__fp;

for(var f in e){e[f].refresh();
}}},members:{__fn:null,__fo:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__fo;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__fo;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__fo;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__fn.dispatchEvent(w,t);
}}}},destruct:function(){this.__fn=this.__fo=null;
delete qx.event.handler.Appear.__fp[this.$$hash];
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
qx.Class.define(d,{statics:{__fq:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__fr:{},__fs:{},allowCreationWithMarkup:function(r){if(!r){r=window;
}var s=r.location.href;

if(qx.bom.Element.__fs[s]==undefined){try{r.document.createElement(f);
qx.bom.Element.__fs[s]=true;
}catch(e){qx.bom.Element.__fs[s]=false;
}}return qx.bom.Element.__fs[s];
},getHelperElement:function(t){if(!t){t=window;
}var v=t.location.href;

if(!qx.bom.Element.__fr[v]){var u=qx.bom.Element.__fr[v]=t.document.createElement(c);
if(qx.bom.client.Engine.WEBKIT){u.style.display=g;
t.document.body.appendChild(u);
}}return qx.bom.Element.__fr[v];
},create:function(name,w,x){if(!x){x=window;
}
if(!name){throw new Error("The tag name is missing!");
}var z=this.__fq;
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
qx.Class.define(b,{extend:qx.event.type.Event,members:{__ft:null,__fu:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__ft=d;
this.__fu=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__ft=this.__ft;
g.__fu=this.__fu;
return g;
},getOrientation:function(){return this.__ft;
},isLandscape:function(){return this.__fu==c;
},isPortrait:function(){return this.__fu==a;
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
},isMultiTouch:function(){return this.__fw().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__fv(f).pageX;
},getDocumentTop:function(g){return this.__fv(g).pageY;
},getScreenLeft:function(h){return this.__fv(h).screenX;
},getScreenTop:function(j){return this.__fv(j).screenY;
},getViewportLeft:function(k){return this.__fv(k).clientX;
},getViewportTop:function(l){return this.__fv(l).clientY;
},getIdentifier:function(m){return this.__fv(m).identifier;
},__fv:function(n){n=n==null?0:n;
return this.__fw()[n];
},__fw:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
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
},__fx:{0:h,2:g,1:f},__fy:{1:h,2:g,4:f},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case c:return g;
case d:if(this.__fz){return this.__fz();
}default:if(this._native.target!==undefined){return this.__fx[this._native.button]||e;
}else{return this.__fy[this._native.button]||e;
}}},__fz:qx.core.Variant.select(a,{"mshtml":function(){return h;
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
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__fA:function(y){var z=navigator.userAgent;
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
A=qx.bom.client.Engine.VERSION;
if(qx.bom.client.System.WINCE&&name===i){name=c;
A=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=A;
this.VERSION=parseFloat(A,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(D){D.__fA(o);
},"gecko":function(E){E.__fA(k);
},"mshtml":function(F){F.__fA(v);
},"opera":function(G){G.__fA(p);
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
(function(){var j="qx.client",i="mousedown",h="mouseup",g="blur",f="focus",e="on",d="selectstart",c="DOMFocusOut",b="focusin",a="focusout",A="DOMFocusIn",z="draggesture",y="qx.event.handler.Focus",x="_applyFocus",w="11.0",v="deactivate",u="textarea",t="_applyActive",s='character',r="input",p="qxSelectable",q="tabIndex",n="off",o="activate",l="mshtml",m="qxKeepFocus",k="qxKeepActive";
qx.Class.define(y,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(B){qx.core.Object.call(this);
this._manager=B;
this._window=B.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:t,nullable:true},focus:{apply:x,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__fB:null,__fC:null,__fD:null,__fE:null,__fF:null,__fG:null,__fH:null,__fI:null,__fJ:null,__fK:null,canHandleEvent:function(C,D){},registerEvent:function(E,F,G){},unregisterEvent:function(H,I,J){},focus:function(K){if(qx.core.Variant.isSet(j,l)){window.setTimeout(function(){try{K.focus();
var L=qx.bom.Selection.get(K);

if(L.length==0){var M=K.createTextRange();
M.moveStart(s,K.value.length);
M.collapse();
M.select();
}}catch(N){}},0);
}else{try{K.focus();
}catch(O){}}this.setFocus(K);
this.setActive(K);
},activate:function(P){this.setActive(P);
},blur:function(Q){try{Q.blur();
}catch(R){}
if(this.getActive()===Q){this.resetActive();
}
if(this.getFocus()===Q){this.resetFocus();
}},deactivate:function(S){if(this.getActive()===S){this.resetActive();
}},tryActivate:function(T){var U=this.__gb(T);

if(U){this.setActive(U);
}},__fL:function(V,W,X,Y){var bb=qx.event.Registration;
var ba=bb.createEvent(X,qx.event.type.Focus,[V,W,Y]);
bb.dispatchEvent(V,ba);
},_windowFocused:true,__fM:function(){if(this._windowFocused){this._windowFocused=false;
this.__fL(this._window,null,g,false);
}},__fN:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fL(this._window,null,f,false);
}},_initObserver:qx.core.Variant.select(j,{"gecko":function(){this.__fB=qx.lang.Function.listener(this.__fT,this);
this.__fC=qx.lang.Function.listener(this.__fV,this);
this.__fD=qx.lang.Function.listener(this.__fS,this);
this.__fE=qx.lang.Function.listener(this.__fR,this);
this.__fF=qx.lang.Function.listener(this.__fO,this);
qx.bom.Event.addNativeListener(this._document,i,this.__fB,true);
qx.bom.Event.addNativeListener(this._document,h,this.__fC,true);
qx.bom.Event.addNativeListener(this._window,f,this.__fD,true);
qx.bom.Event.addNativeListener(this._window,g,this.__fE,true);
qx.bom.Event.addNativeListener(this._window,z,this.__fF,true);
},"mshtml":function(){this.__fB=qx.lang.Function.listener(this.__fT,this);
this.__fC=qx.lang.Function.listener(this.__fV,this);
this.__fH=qx.lang.Function.listener(this.__fP,this);
this.__fI=qx.lang.Function.listener(this.__fQ,this);
this.__fG=qx.lang.Function.listener(this.__fX,this);
qx.bom.Event.addNativeListener(this._document,i,this.__fB);
qx.bom.Event.addNativeListener(this._document,h,this.__fC);
qx.bom.Event.addNativeListener(this._document,b,this.__fH);
qx.bom.Event.addNativeListener(this._document,a,this.__fI);
qx.bom.Event.addNativeListener(this._document,d,this.__fG);
},"webkit":function(){this.__fB=qx.lang.Function.listener(this.__fT,this);
this.__fC=qx.lang.Function.listener(this.__fV,this);
this.__fI=qx.lang.Function.listener(this.__fQ,this);
this.__fD=qx.lang.Function.listener(this.__fS,this);
this.__fE=qx.lang.Function.listener(this.__fR,this);
this.__fG=qx.lang.Function.listener(this.__fX,this);
qx.bom.Event.addNativeListener(this._document,i,this.__fB,true);
qx.bom.Event.addNativeListener(this._document,h,this.__fC,true);
qx.bom.Event.addNativeListener(this._document,d,this.__fG,false);
qx.bom.Event.addNativeListener(this._window,c,this.__fI,true);
qx.bom.Event.addNativeListener(this._window,f,this.__fD,true);
qx.bom.Event.addNativeListener(this._window,g,this.__fE,true);
},"opera":function(){this.__fB=qx.lang.Function.listener(this.__fT,this);
this.__fC=qx.lang.Function.listener(this.__fV,this);
this.__fH=qx.lang.Function.listener(this.__fP,this);
this.__fI=qx.lang.Function.listener(this.__fQ,this);
qx.bom.Event.addNativeListener(this._document,i,this.__fB,true);
qx.bom.Event.addNativeListener(this._document,h,this.__fC,true);
qx.bom.Event.addNativeListener(this._window,A,this.__fH,true);
qx.bom.Event.addNativeListener(this._window,c,this.__fI,true);
}}),_stopObserver:qx.core.Variant.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__fB,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__fC,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__fD,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__fE,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__fF,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__fB);
qx.bom.Event.removeNativeListener(this._document,h,this.__fC);
qx.bom.Event.removeNativeListener(this._document,b,this.__fH);
qx.bom.Event.removeNativeListener(this._document,a,this.__fI);
qx.bom.Event.removeNativeListener(this._document,d,this.__fG);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__fB,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__fC,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__fG,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__fI,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__fD,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__fE,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__fB,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__fC,true);
qx.bom.Event.removeNativeListener(this._window,A,this.__fH,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__fI,true);
}}),__fO:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"gecko":function(bc){var bd=qx.bom.Event.getTarget(bc);

if(!this.__gc(bd)){qx.bom.Event.preventDefault(bc);
}},"default":null})),__fP:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml":function(be){this.__fN();
var bg=qx.bom.Event.getTarget(be);
var bf=this.__ga(bg);

if(bf){this.setFocus(bf);
}this.tryActivate(bg);
},"opera":function(bh){var bi=qx.bom.Event.getTarget(bh);

if(bi==this._document||bi==this._window){this.__fN();

if(this.__fJ){this.setFocus(this.__fJ);
delete this.__fJ;
}
if(this.__fK){this.setActive(this.__fK);
delete this.__fK;
}}else{this.setFocus(bi);
this.tryActivate(bi);
if(!this.__gc(bi)){bi.selectionStart=0;
bi.selectionEnd=0;
}}},"default":null})),__fQ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml":function(bj){var bk=qx.bom.Event.getRelatedTarget(bj);
if(bk==null){this.__fM();
this.resetFocus();
this.resetActive();
}},"webkit":function(bl){var bm=qx.bom.Event.getTarget(bl);

if(bm===this.getFocus()){this.resetFocus();
}
if(bm===this.getActive()){this.resetActive();
}},"opera":function(bn){var bo=qx.bom.Event.getTarget(bn);

if(bo==this._document){this.__fM();
this.__fJ=this.getFocus();
this.__fK=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bo===this.getFocus()){this.resetFocus();
}
if(bo===this.getActive()){this.resetActive();
}}},"default":null})),__fR:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"gecko":function(bp){var bq=qx.bom.Event.getTarget(bp);

if(bq===this._window||bq===this._document){this.__fM();
this.resetActive();
this.resetFocus();
}},"webkit":function(br){var bs=qx.bom.Event.getTarget(br);

if(bs===this._window||bs===this._document){this.__fM();
this.__fJ=this.getFocus();
this.__fK=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__fS:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"gecko":function(bt){var bu=qx.bom.Event.getTarget(bt);

if(bu===this._window||bu===this._document){this.__fN();
bu=this._body;
}this.setFocus(bu);
this.tryActivate(bu);
},"webkit":function(bv){var bw=qx.bom.Event.getTarget(bv);

if(bw===this._window||bw===this._document){this.__fN();

if(this.__fJ){this.setFocus(this.__fJ);
delete this.__fJ;
}
if(this.__fK){this.setActive(this.__fK);
delete this.__fK;
}}else{this.setFocus(bw);
this.tryActivate(bw);
}},"default":null})),__fT:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"gecko":function(bx){var bz=qx.bom.Event.getTarget(bx);
var by=this.__ga(bz);

if(!by){qx.bom.Event.preventDefault(bx);
}else if(by===this._body){this.setFocus(by);
}},"mshtml":function(bA){var bC=qx.bom.Event.getTarget(bA);
var bB=this.__ga(bC);

if(bB){if(!this.__gc(bC)){bC.unselectable=e;
try{document.selection.empty();
}catch(bD){}try{bB.focus();
}catch(bE){}}}else{qx.bom.Event.preventDefault(bA);
if(!this.__gc(bC)){bC.unselectable=e;
}}},"webkit":function(bF){this.__fU(bF);
},"opera":function(bG){if(qx.bom.client.Engine.VERSION==w){this.__fU(bG);
}else{var bJ=qx.bom.Event.getTarget(bG);
var bH=this.__ga(bJ);

if(!this.__gc(bJ)){qx.bom.Event.preventDefault(bG);
if(bH){var bI=this.getFocus();

if(bI&&bI.selectionEnd){bI.selectionStart=0;
bI.selectionEnd=0;
bI.blur();
}if(bH){this.setFocus(bH);
}}}else if(bH){this.setFocus(bH);
}}},"default":null})),__fU:function(bK){var bM=qx.bom.Event.getTarget(bK);
var bL=this.__ga(bM);
if(bL){this.setFocus(bL);
}else{qx.bom.Event.preventDefault(bK);
}},__fV:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml":function(bN){var bO=qx.bom.Event.getTarget(bN);

if(bO.unselectable){bO.unselectable=n;
}this.tryActivate(this.__fW(bO));
},"gecko":function(bP){var bQ=qx.bom.Event.getTarget(bP);

while(bQ&&bQ.offsetWidth===undefined){bQ=bQ.parentNode;
}
if(bQ){this.tryActivate(bQ);
}},"webkit|opera":function(bR){var bS=qx.bom.Event.getTarget(bR);
this.tryActivate(this.__fW(bS));
},"default":null})),__fW:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml|webkit":function(bT){var bU=this.getFocus();

if(bU&&bT!=bU&&(bU.nodeName.toLowerCase()===r||bU.nodeName.toLowerCase()===u)){bT=bU;
}return bT;
},"default":function(bV){return bV;
}})),__fX:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml|webkit":function(bW){var bX=qx.bom.Event.getTarget(bW);

if(!this.__gc(bX)){qx.bom.Event.preventDefault(bW);
}},"default":null})),__fY:function(bY){var ca=qx.bom.element.Attribute.get(bY,q);

if(ca>=1){return true;
}var cb=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ca>=0&&cb[bY.tagName]){return true;
}return false;
},__ga:function(cc){while(cc&&cc.nodeType===1){if(cc.getAttribute(m)==e){return null;
}
if(this.__fY(cc)){return cc;
}cc=cc.parentNode;
}return this._body;
},__gb:function(cd){var ce=cd;

while(cd&&cd.nodeType===1){if(cd.getAttribute(k)==e){return null;
}cd=cd.parentNode;
}return ce;
},__gc:function(cf){while(cf&&cf.nodeType===1){var cg=cf.getAttribute(p);

if(cg!=null){return cg===e;
}cf=cf.parentNode;
}return true;
},_applyActive:function(ch,ci){if(ci){this.__fL(ci,ch,v,true);
}
if(ch){this.__fL(ch,ci,o,true);
}},_applyFocus:function(cj,ck){if(ck){this.__fL(ck,cj,a,true);
}
if(cj){this.__fL(cj,ck,b,true);
}if(ck){this.__fL(ck,cj,g,false);
}
if(cj){this.__fL(cj,ck,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__gd=null;
},defer:function(cl){qx.event.Registration.addHandler(cl);
var cm=cl.FOCUSABLE_ELEMENTS;

for(var cn in cm){cm[cn.toUpperCase()]=1;
}}});
})();
(function(){var k="qx.client",j="character",i="EndToEnd",h="input",g="textarea",f="StartToStart",e='character',d="qx.bom.Selection",c="button",b="#text",a="body";
qx.Class.define(d,{statics:{getSelectionObject:qx.core.Variant.select(k,{"mshtml":function(l){return l.selection;
},"default":function(m){return qx.dom.Node.getWindow(m).getSelection();
}}),get:qx.core.Variant.select(k,{"mshtml":function(n){var o=qx.bom.Range.get(qx.dom.Node.getDocument(n));
return o.text;
},"default":function(p){if(this.__ge(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Variant.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__ge(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__ge(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Variant.select(k,{"mshtml":function(A){if(this.__ge(A)){var F=qx.bom.Range.get();
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
}},"gecko|webkit":function(K){if(this.__ge(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__ge(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(k,{"mshtml":function(O){if(this.__ge(O)){var T=qx.bom.Range.get();
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
P.setEndPoint(f,V);
if(V.compareEndPoints(i,P)==0){return S-1;
}var R;
var W=0;

while(true){R=P.moveEnd(j,1);
if(V.compareEndPoints(i,P)==0){break;
}if(R==0){break;
}else{W++;
}}return S-(++W);
}},"gecko|webkit":function(Y){if(this.__ge(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__ge(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__ge:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==g);
},set:qx.core.Variant.select(k,{"mshtml":function(be,bf,bg){var bh;
if(qx.dom.Node.isDocument(be)){be=be.body;
}
if(qx.dom.Node.isElement(be)||qx.dom.Node.isText(be)){switch(be.nodeName.toLowerCase()){case h:case g:case c:if(bg===undefined){bg=be.value.length;
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

if(qx.dom.Node.isElement(bj)&&(bp==h||bp==g)){if(bl===undefined){bl=bj.value.length;
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
},clear:qx.core.Variant.select(k,{"mshtml":function(br){var bs=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(br));
var bt=qx.bom.Range.get(br);
var parent=bt.parentElement();
var bu=qx.bom.Range.get(qx.dom.Node.getDocument(br));
if(parent==bu.parentElement()&&parent==br){bs.empty();
}},"default":function(bv){var bx=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bv));
var bz=bv.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bv)&&(bz==h||bz==g)){bv.setSelectionRange(0,0);
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
qx.Class.define(e,{statics:{__gf:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__gf.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(D,name){var F=this.__gf;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__gf;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(J,name,K){if(typeof K===i){return;
}var L=this.__gf;
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
this.__gj=i.getWindow();
this.__gk=j;
i.addListener(this.__gj,f,this.releaseCapture,this);
i.addListener(this.__gj,e,this.releaseCapture,this);
i.addListener(this.__gj,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__gk:null,__gl:null,__gm:true,__gj:null,_getParent:function(k){return k.parentNode;
},canDispatchEvent:function(l,event,m){return !!(this.__gl&&this.__gn[m]);
},dispatchEvent:function(n,event,o){if(o==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__gm||!qx.dom.Hierarchy.contains(this.__gl,n)){n=this.__gl;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,n,event,o);
},__gn:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(p,q){var q=q!==false;

if(this.__gl===p&&this.__gm==q){return;
}
if(this.__gl){this.releaseCapture();
}this.nativeSetCapture(p,q);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(p,h,function(){qx.bom.Event.removeNativeListener(p,h,arguments.callee);
self.releaseCapture();
});
}this.__gm=q;
this.__gl=p;
this.__gk.fireEvent(p,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__gl;
},releaseCapture:function(){var r=this.__gl;

if(!r){return;
}this.__gl=null;
this.__gk.fireEvent(r,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(r);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(s,t){s.setCapture(t!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(u){u.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__gl=this.__gj=this.__gk=null;
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
(function(){var r="qx.client",q="MSXML2.DOMDocument.3.0",p="",o="mshtml",n='<\?xml version="1.0" encoding="utf-8"?>\n<',m="qx.xml.Document",k=" />",j="SelectionLanguage",h="'",g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(s){if(s.nodeType===9){return s.documentElement.nodeName!==d;
}else if(s.ownerDocument){return this.isXmlDocument(s.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(t,u){var v=new ActiveXObject(this.DOMDOC);
if(this.DOMDOC==q){v.setProperty(j,b);
}
if(u){var w=n;
w+=u;

if(t){w+=f+t+h;
}w+=k;
v.loadXML(w);
}return v;
},"default":function(x,y){return document.implementation.createDocument(x||p,y||p,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(z){var A=qx.xml.Document.create();
A.loadXML(z);
return A;
},"default":function(B){var C=new DOMParser();
return C.parseFromString(B,e);
}})},defer:function(D){if(qx.core.Variant.isSet(r,o)){var E=[a,q];
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
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__gH:[],remove:function(c){qx.lang.Array.remove(this.__gH,c);
},add:function(d){var e=this.__gH;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__gH;
var g;

for(var i=f.length-1;i>=0;i--){g=f[i];
f.splice(i,1);
g.syncWidget();
}if(f.length!=0){return;
}this.__gH=[];
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__gI:[],__gJ:{},remove:function(c){delete this.__gJ[c.$$hash];
qx.lang.Array.remove(this.__gI,c);
},isVisible:function(d){return this.__gJ[d.$$hash]||false;
},__gK:function(e){var g=this.__gJ;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__gK(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(j){var k=this.__gI;

if(qx.lang.Array.contains(k,j)){return;
}k.unshift(j);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var o=this.__gI;
var p=this.__gJ;
for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;

if(p[n]!=null){o[i].addChildrenToQueue(o);
}}var l={};

for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;
l[n]=p[n];
p[n]=null;
}for(var i=o.length-1;i>=0;i--){var m=o[i];
var n=m.$$hash;
o.splice(i,1);
if(p[n]==null){this.__gK(m);
}if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();
}}this.__gI=[];
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__gL:[],remove:function(c){qx.lang.Array.remove(this.__gL,c);
},add:function(d){var e=this.__gL;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(f){return qx.lang.Array.contains(this.__gL,f);
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__gL;
var h;

for(var i=g.length-1;i>=0;i--){h=g[i];
g.splice(i,1);
if(j.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__gQ:[],add:function(c){var d=this.__gQ;

if(qx.lang.Array.contains(d,c)){return;
}d.unshift(c);
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__gQ;

for(var i=e.length-1;i>=0;i--){var f=e[i];
e.splice(i,1);
f.dispose();
}if(e.length!=0){return;
}this.__gQ=[];
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(d,e){var f={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){f.pointerEvents=c;
}qx.html.Element.call(this,null,f);
this.__hJ=d;
this.__hK=e||d.toHashCode();
this.useMarkup(d.getMarkup());
},members:{__hK:null,__hJ:null,getId:function(){return this.__hK;
},getDecorator:function(){return this.__hJ;
},resize:function(g,h){this.__hJ.resize(this.getDomElement(),g,h);
},tint:function(i){this.__hJ.tint(this.getDomElement(),i);
},getInsets:function(){return this.__hJ.getInsets();
}},destruct:function(){this.__hJ=null;
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__hL=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__hL:null,__hM:{focusin:1,focusout:1,focus:1,blur:1},__hN:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(o&&q&&j.getType()==a){o.getContainerElement().activate();
}if(this.__hM[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__hM[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__hM[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!u||!(u.isEnabled()||this.__hN[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__hL.getListeners(u,v,k);

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
}}},destruct:function(){this.__hL=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var i="",h="/",g="mshtml",f="qx.client",e="//",d="?",c="string",b="qx.util.ResourceManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__hO:qx.$$resources||{},__hP:{}},members:{has:function(j){return !!this.self(arguments).__hO[j];
},getData:function(k){return this.self(arguments).__hO[k]||null;
},getImageWidth:function(l){var m=this.self(arguments).__hO[l];
return m?m[0]:null;
},getImageHeight:function(n){var o=this.self(arguments).__hO[n];
return o?o[1]:null;
},getImageFormat:function(p){var q=this.self(arguments).__hO[p];
return q?q[2]:null;
},isClippedImage:function(r){var s=this.self(arguments).__hO[r];
return s&&s.length>4;
},toUri:function(t){if(t==null){return t;
}var u=this.self(arguments).__hO[t];

if(!u){return t;
}
if(typeof u===c){var w=u;
}else{var w=u[3];
if(!w){return t;
}}var v=i;

if(qx.core.Variant.isSet(f,g)&&qx.bom.client.Feature.SSL){v=this.self(arguments).__hP[w];
}return v+qx.$$libraries[w].resourceUri+h+t;
}},defer:function(x){if(qx.core.Variant.isSet(f,g)){if(qx.bom.client.Feature.SSL){for(var B in qx.$$libraries){var z;

if(qx.$$libraries[B].resourceUri){z=qx.$$libraries[B].resourceUri;
}else{x.__hP[B]=i;
continue;
}if(z.match(/^\/\//)!=null){x.__hP[B]=window.location.protocol;
}else if(z.match(/^\//)!=null){x.__hP[B]=window.location.protocol+e+window.location.host;
}else if(z.match(/^\.\//)!=null){var y=document.URL;
x.__hP[B]=y.substring(0,y.lastIndexOf(h)+1);
}else if(z.match(/^http/)!=null){x.__hP[B]=i;
}else{var C=window.location.href.indexOf(d);
var A;

if(C==-1){A=window.location.href;
}else{A=window.location.href.substring(0,C);
}x.__hP[B]=A.substring(0,A.lastIndexOf(h)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__hQ:function(){var d=(navigator.userLanguage||navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__hQ();
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__hR=u;
this.length=u.length;
},members:{$$isString:true,length:0,__hR:null,toString:function(){return this.__hR;
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
this.__hS=c;
this.__hT=d;
},members:{__hS:null,__hT:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hS,this.__hT);
}}});
})();
(function(){var k="_",j="",h="_applyLocale",g="changeLocale",f="C",e="qx.dynlocale",d="on",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hU=qx.$$translations||{};
this.__hV=qx.$$locales||{};
var n=qx.bom.client.Locale;
var l=n.LOCALE;
var m=n.VARIANT;

if(m!==j){l+=k+m;
}this.__hW=l;
this.setLocale(l||this.__hX);
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
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__hX:f,__hY:null,__ia:null,__hU:null,__hV:null,__hW:null,getLanguage:function(){return this.__ia;
},getTerritory:function(){return this.getLocale().split(k)[1]||j;
},getAvailableLocales:function(){var C=[];

for(var B in this.__hV){if(B!=this.__hX){C.push(B);
}}return C;
},__ib:function(D){var F;
var E=D.indexOf(k);

if(E==-1){F=D;
}else{F=D.substring(0,E);
}return F;
},_applyLocale:function(G,H){{};
this.__hY=G;
this.__ia=this.__ib(G);
},addTranslation:function(I,J){var K=this.__hU;

if(K[I]){for(var L in J){K[I][L]=J[L];
}}else{K[I]=J;
}},addLocale:function(M,N){var O=this.__hV;

if(O[M]){for(var P in N){O[M][P]=N[P];
}}else{O[M]=N;
}},translate:function(Q,R,S){var T=this.__hU;
return this.__ic(T,Q,R,S);
},localize:function(U,V,W){var X=this.__hV;
return this.__ic(X,U,V,W);
},__ic:function(Y,ba,bb,bc){var bd;

if(!Y){return ba;
}
if(bc){var bf=this.__ib(bc);
}else{bc=this.__hY;
bf=this.__ia;
}if(!bd&&Y[bc]){bd=Y[bc][ba];
}if(!bd&&Y[bf]){bd=Y[bf][ba];
}if(!bd&&Y[this.__hX]){bd=Y[this.__hX][ba];
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
}},destruct:function(){this.__hU=this.__hV=null;
}});
})();
(function(){var k="px",j="qx.client",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="scale-y",G="qx/icon",F="repeat",E=".png",D="crop",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',y="qx.bom.element.Decoration",x="', sizingMethod='",r="png",s="')",p='"></div>',q='"/>',n='" style="',o="none",l="webkit",m=" ",t="repeat-x",u="DXImageTransform.Microsoft.AlphaImageLoader",w="qx/static/blank.gif",v="absolute";
qx.Class.define(y,{statics:{DEBUG:false,__id:{},__ie:qx.core.Variant.isSet(j,c)&&qx.bom.client.Engine.VERSION<9,__if:qx.core.Variant.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__ig:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(H,I,J,K){var M=this.getTagName(J,I);

if(M!=H.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var N=this.getAttributes(I,J,K);

if(M===h){H.src=N.src||qx.util.ResourceManager.getInstance().toUri(w);
}if(H.style.backgroundPosition!=g&&N.style.backgroundPosition===undefined){N.style.backgroundPosition=null;
}if(H.style.clip!=g&&N.style.clip===undefined){N.style.clip=null;
}var L=qx.bom.element.Style;
L.setStyles(H,N.style);
if(this.__ie){try{H.filters[u].apply();
}catch(e){}}},create:function(O,P,Q){var R=this.getTagName(P,O);
var T=this.getAttributes(O,P,Q);
var S=qx.bom.element.Style.compile(T.style);

if(R===h){return z+T.src+n+S+q;
}else{return B+S+p;
}},getTagName:function(U,V){if(qx.core.Variant.isSet(j,c)){if(V&&this.__ie&&this.__if[U]&&qx.lang.String.endsWith(V,E)){return i;
}}return this.__ig[U];
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
if(this.__ie&&this.__if[X]&&bb===r){ba=this.__ij(Y,X,W);
}else{if(X===b){ba=this.__ik(Y,X,W);
}else if(X===d||X===a){ba=this.__il(Y,X,W);
}else{ba=this.__io(Y,X,W);
}}return ba;
},__ih:function(bc,bd,be){if(bc.width==null&&bd!=null){bc.width=bd+k;
}
if(bc.height==null&&be!=null){bc.height=be+k;
}return bc;
},__ii:function(bf){var bh=qx.util.ResourceManager.getInstance().getImageWidth(bf)||qx.io.ImageLoader.getWidth(bf);
var bi=qx.util.ResourceManager.getInstance().getImageHeight(bf)||qx.io.ImageLoader.getHeight(bf);
return {width:bh,height:bi};
},__ij:function(bj,bk,bl){var bo=this.__ii(bl);
bj=this.__ih(bj,bo.width,bo.height);
var bn=bk==f?D:b;
var bm=C+qx.util.ResourceManager.getInstance().toUri(bl)+x+bn+s;
bj.filter=bm;
bj.backgroundImage=bj.backgroundRepeat=g;
return {style:bj};
},__ik:function(bp,bq,br){var bs=qx.util.ResourceManager.getInstance().toUri(br);
var bt=this.__ii(br);
bp=this.__ih(bp,bt.width,bt.height);
return {src:bs,style:bp};
},__il:function(bu,bv,bw){var bA=qx.util.ResourceManager.getInstance();
var bz=bA.isClippedImage(bw);
var bB=this.__ii(bw);

if(bz){var by=bA.getData(bw);
var bx=bA.toUri(by[4]);

if(bv===d){bu=this.__im(bu,by,bB.height);
}else{bu=this.__in(bu,by,bB.width);
}return {src:bx,style:bu};
}else{{};

if(bv==d){bu.height=bB.height==null?null:bB.height+k;
}else if(bv==a){bu.width=bB.width==null?null:bB.width+k;
}var bx=bA.toUri(bw);
return {src:bx,style:bu};
}},__im:function(bC,bD,bE){var bF=qx.util.ResourceManager.getInstance().getImageHeight(bD[4]);
bC.clip={top:-bD[6],height:bE};
bC.height=bF+k;
if(bC.top!=null){bC.top=(parseInt(bC.top,10)+bD[6])+k;
}else if(bC.bottom!=null){bC.bottom=(parseInt(bC.bottom,10)+bE-bF-bD[6])+k;
}return bC;
},__in:function(bG,bH,bI){var bJ=qx.util.ResourceManager.getInstance().getImageWidth(bH[4]);
bG.clip={left:-bH[5],width:bI};
bG.width=bJ+k;
if(bG.left!=null){bG.left=(parseInt(bG.left,10)+bH[5])+k;
}else if(bG.right!=null){bG.right=(parseInt(bG.right,10)+bI-bJ-bH[5])+k;
}return bG;
},__io:function(bK,bL,bM){var bR=qx.util.ResourceManager.getInstance().isClippedImage(bM);
var bQ=this.__ii(bM);
if(bR&&bL!==F){var bP=qx.util.ResourceManager.getInstance().getData(bM);
var bO=qx.bom.element.Background.getStyles(bP[4],bL,bP[5],bP[6]);

for(var bN in bO){bK[bN]=bO[bN];
}
if(bQ.width!=null&&bK.width==null&&(bL==A||bL===f)){bK.width=bQ.width+k;
}
if(bQ.height!=null&&bK.height==null&&(bL==t||bL===f)){bK.height=bQ.height+k;
}return {style:bK};
}else{{};
bK=this.__ih(bK,bQ.width,bQ.height);
bK=this.__ip(bK,bM,bL);
return {style:bK};
}},__ip:function(bS,bT,bU){var top=null;
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
},__iq:function(ca){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ca)&&ca.indexOf(G)==-1){if(!this.__id[ca]){qx.log.Logger.debug("Potential clipped image candidate: "+ca);
this.__id[ca]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__ie;
},"default":function(){return false;
}})}});
})();
(function(){var c="qx.client",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__ir:{},__is:{width:null,height:null},__it:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__ir[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__ir[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__ir[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__ir[k];
return m?m.format:null;
},getSize:function(n){var o=this.__ir[n];
return o?
{width:o.width,height:o.height}:this.__is;
},getWidth:function(p){var q=this.__ir[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__ir[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__ir[t];

if(!w){w=this.__ir[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__iu,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__ir[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__ir[z]=null;
},__iu:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__ir[E];

if(!F){}if(event.type===b){F.loaded=true;
F.width=this.__iv(D);
F.height=this.__iw(D);
var G=this.__it.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__iv:qx.core.Variant.select(c,{"gecko":function(I){return I.naturalWidth;
},"default":function(J){return J.width;
}}),__iw:qx.core.Variant.select(c,{"gecko":function(K){return K.naturalHeight;
},"default":function(L){return L.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__ix:[i,null,h,b,null,j,e,null,j],__iy:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__iz:function(n,top){var o=qx.bom.client.Engine;

if(o.GECKO&&o.VERSION<1.9&&n==top&&typeof n==m){top+=0.01;
}
if(n){var p=(typeof n==m)?n+k:n;
}else{p=l;
}
if(top){var q=(typeof top==m)?top+k:top;
}else{q=l;
}return p+d+q;
},compile:function(r,s,t,top){var u=this.__iz(t,top);
var v=qx.util.ResourceManager.getInstance().toUri(r);
var w=this.__ix;
w[1]=v;
w[4]=u;
w[7]=s;
return w.join(g);
},getStyles:function(x,y,z,top){if(!x){return this.__iy;
}var A=this.__iz(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C={backgroundPosition:A,backgroundImage:c+B+f};

if(y!=null){C.backgroundRepeat=y;
}return C;
},set:function(D,E,F,G,top){var H=this.getStyles(E,F,G,top);

for(var I in H){D.style[I]=H[I];
}}}});
})();
(function(){var k="source",j="scale",i="no-repeat",h="qx.client",g="",f="mshtml",e="webkit",d="backgroundImage",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,l){qx.html.Element.prototype._applyProperty.call(this,name,l);

if(name===k){var p=this.getDomElement();
var m=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(d)){m.backgroundPosition=null;
m.backgroundRepeat=null;
}var n=this._getProperty(k);
var o=this._getProperty(j);
var q=o?j:i;
if(n!=null){n=n||null;
qx.bom.element.Decoration.update(p,n,q,m);
}}},_removeProperty:function(r,s){if(r==k){this._setProperty(r,g,s);
}else{this._setProperty(r,null,s);
}},_createDomElement:function(){var u=this._getProperty(j);
var v=u?j:i;

if(qx.core.Variant.isSet(h,f)){var t=this._getProperty(k);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v,t));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(w){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(x){this._setProperty(k,x);
return this;
},getSource:function(){return this._getProperty(k);
},resetSource:function(){if(qx.core.Variant.isSet(h,e)){this._setProperty(k,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(k,true);
}return this;
},setScale:function(y){this._setProperty(j,y);
return this;
},getScale:function(){return this._getProperty(j);
}}});
})();
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="qx.client",e="div",d="replacement",c="qx.event.type.Event",b="hidden",a="Boolean",y="px",x="scale",w="changeSource",v="qx.ui.basic.Image",u="__iI",t="loaded",s="-disabled.$1",r="loadingFailed",q="String",p="_applySource",n="img",o="image",l="mshtml",m="_applyScale",k="no-repeat";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(z){this.__iI={};
qx.ui.core.Widget.call(this);

if(z){this.setSource(z);
}},properties:{source:{check:q,init:null,nullable:true,event:w,apply:p,themeable:true},scale:{check:a,init:false,themeable:true,apply:m},appearance:{refine:true,init:o},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:c,loaded:c},members:{__iJ:null,__iK:null,__iL:null,__iI:null,getContentElement:function(){return this.__iP();
},_createContentElement:function(){return this.__iP();
},_getContentHint:function(){return {width:this.__iJ||0,height:this.__iK||0};
},_applyEnabled:function(A,B){qx.ui.core.Widget.prototype._applyEnabled.call(this,A,B);

if(this.getSource()){this._styleSource();
}},_applySource:function(C){this._styleSource();
},_applyScale:function(D){this._styleSource();
},__iM:function(E){this.__iL=E;
},__iN:function(){if(this.__iL==null){var G=this.getSource();
var F=false;

if(G!=null){F=qx.lang.String.endsWith(G,g);
}
if(this.getScale()&&F&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__iL=h;
}else if(this.getScale()){this.__iL=i;
}else{this.__iL=j;
}}return this.__iL;
},__iO:function(H){var I;
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
},__iP:function(){var L=this.__iN();

if(this.__iI[L]==null){this.__iI[L]=this.__iO(L);
}return this.__iI[L];
},_styleSource:function(){var M=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!M){this.getContentElement().resetSource();
return;
}this.__iQ(M);

if(qx.core.Variant.isSet(f,l)){var N=this.getScale()?x:k;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(N,M);
}if(qx.util.ResourceManager.getInstance().has(M)){this.__iS(this.getContentElement(),M);
}else if(qx.io.ImageLoader.isLoaded(M)){this.__iT(this.getContentElement(),M);
}else{this.__iU(this.getContentElement(),M);
}},__iQ:qx.core.Variant.select(f,{"mshtml":function(O){var Q=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var P=qx.lang.String.endsWith(O,g);

if(Q&&P){if(this.getScale()&&this.__iN()!=h){this.__iM(h);
}else if(!this.getScale()&&this.__iN()!=j){this.__iM(j);
}}else{if(this.getScale()&&this.__iN()!=i){this.__iM(i);
}else if(!this.getScale()&&this.__iN()!=j){this.__iM(j);
}}this.__iR(this.__iP());
},"default":function(R){if(this.getScale()&&this.__iN()!=i){this.__iM(i);
}else if(!this.getScale()&&this.__iN(j)){this.__iM(j);
}this.__iR(this.__iP());
}}),__iR:function(S){var V=this.getContainerElement();
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
}},__iS:function(ba,bb){var bd=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bc=bb.replace(/\.([a-z]+)$/,s);

if(bd.has(bc)){bb=bc;
this.addState(d);
}else{this.removeState(d);
}}if(ba.getSource()===bb){return;
}ba.setSource(bb);
this.__iW(bd.getImageWidth(bb),bd.getImageHeight(bb));
},__iT:function(be,bf){var bh=qx.io.ImageLoader;
be.setSource(bf);
var bg=bh.getWidth(bf);
var bi=bh.getHeight(bf);
this.__iW(bg,bi);
},__iU:function(bj,bk){var self;
var bl=qx.io.ImageLoader;
{};
if(!bl.isFailed(bk)){bl.load(bk,this.__iV,this);
}else{if(bj!=null){bj.resetSource();
}}},__iV:function(bm,bn){if(this.$$disposed===true){return;
}if(bm!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bn.failed){this.warn("Image could not be loaded: "+bm);
this.fireEvent(r);
}else{this.fireEvent(t);
}this._styleSource();
},__iW:function(bo,bp){if(bo!==this.__iJ||bp!==this.__iK){this.__iJ=bo;
this.__iK=bp;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(u);
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
(function(){var f="mousedown",d="__nJ",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nJ=[];
qx.event.Registration.addListener(document.documentElement,f,this.__nL,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__nJ:null,add:function(g){{};
this.__nJ.push(g);
this.__nK();
},remove:function(h){{};

if(this.__nJ){qx.lang.Array.remove(this.__nJ,h);
this.__nK();
}},hideAll:function(){var j;
var k=this.__nJ;

if(k){for(var i=0,l=k.length;i<l;i++){var j=k[i];
j.getAutoHide()&&j.exclude();
}}},__nK:function(){var m=1e7;

for(var i=0;i<this.__nJ.length;i++){this.__nJ[i].setZIndex(m++);
}},__nL:function(e){var o=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var p=this.__nJ;

for(var i=0;i<p.length;i++){var n=p[i];

if(!n.getAutoHide()||o==n||qx.ui.core.Widget.contains(n,o)){continue;
}n.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__nL,this,true);
this._disposeArray(d);
}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__jJ:null,_invalidChildrenCache:null,__jK:null,invalidateLayoutCache:function(){this.__jJ=null;
},renderLayout:function(c,d){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__jJ){return this.__jJ;
}return this.__jJ=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var f=this.__jK;

if(f instanceof qx.ui.core.LayoutItem){f.clearSeparators();
}},_renderSeparator:function(g,h){this.__jK.renderSeparator(g,h);
},connectToWidget:function(i){if(i&&this.__jK){throw new Error("It is not possible to manually set the connected widget.");
}this.__jK=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__jK;
},_applyLayoutChange:function(){if(this.__jK){this.__jK.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__jK.getLayoutChildren();
}},destruct:function(){this.__jK=this.__jJ=null;
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
},_applySelectable:function(V,W){qx.ui.core.Widget.prototype._applySelectable.call(this,V,W);
var X=this.getChildControl(j,true);

if(X){this.getChildControl(j).setSelectable(V);
}}}});
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
}},properties:{rich:{check:j,init:false,event:s,apply:q},wrap:{check:j,init:true,apply:C},value:{check:u,apply:x,event:m,nullable:true},buddy:{check:c,apply:v,nullable:true,init:null,dereference:true},textAlign:{check:[l,w,r],nullable:true,themeable:true,apply:d,event:a},appearance:{refine:true,init:o},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__jL:null,__jM:null,__jN:null,__jO:null,_getContentHint:function(){if(this.__jM){this.__jP=this.__jQ();
delete this.__jM;
}return {width:this.__jP.width,height:this.__jP.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(E){if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){if(E&&!this.isRich()){{};
return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,E);
},_getContentHeightForWidth:function(F){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__jQ(F).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(G,H){this.getContentElement().setStyle(t,G);
},_applyTextColor:function(I,J){if(I){this.getContentElement().setStyle(i,qx.theme.manager.Color.getInstance().resolve(I));
}else{this.getContentElement().removeStyle(i);
}},__jP:{width:0,height:0},_applyFont:function(K,L){var M;

if(K){this.__jL=qx.theme.manager.Font.getInstance().resolve(K);
M=this.__jL.getStyles();
}else{this.__jL=null;
M=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(M);
this.__jM=true;
qx.ui.core.queue.Layout.add(this);
},__jQ:function(N){var R=qx.bom.Label;
var P=this.getFont();
var O=P?this.__jL.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||B;
var Q=this.getRich();
return Q?R.getHtmlSize(content,O,N):R.getTextSize(content,O);
},_applyBuddy:function(S,T){if(T!=null){T.removeBinding(this.__jN);
this.__jN=null;
this.removeListenerById(this.__jO);
this.__jO=null;
}
if(S!=null){this.__jN=S.bind(g,this,g);
this.__jO=this.addListener(n,function(){if(S.isFocusable()){S.focus.apply(S);
}},this);
}},_applyRich:function(U){this.getContentElement().setRich(U);
this.__jM=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(V,W){if(V&&!this.isRich()){{};
}
if(this.isRich()){var X=V?p:b;
this.getContentElement().setStyle(y,X);
}},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(Y,ba){this.getContentElement().setValue(Y);
this.__jM=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(A,Y,ba);
}},destruct:function(){if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);
}if(this.__jN!=null){var bb=this.getBuddy();

if(bb!=null&&!bb.isDisposed()){bb.removeBinding(this.__jN);
}}this.__jL=this.__jN=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__jR:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__jR;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(g){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__jR==h){return;
}this.__jR=h;
return this;
},setValue:function(j){this._setProperty(b,j);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var j="div",i="inherit",h="text",g="qx.client",f="value",e="",d="hidden",c="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",b="nowrap",a="auto",z="0",y="ellipsis",x="normal",w="label",v="px",u="crop",t="gecko",s="end",r="100%",q="visible",o="qx.bom.Label",p="opera",m="mshtml",n="block",k="-1000px",l="absolute";
qx.Class.define(o,{statics:{__jS:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jT:function(){var A=this.__jV(false);
document.body.insertBefore(A,document.body.firstChild);
return this._textElement=A;
},__jU:function(){var B=this.__jV(true);
document.body.insertBefore(B,document.body.firstChild);
return this._htmlElement=B;
},__jV:function(C){var D=qx.bom.Element.create(j);
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

for(var G in this.__jS){E[G]=i;
}D.appendChild(F);
}}return D;
},__jW:function(H){var I={};

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
for(var O in this.__jS){N.style[O]=i;
}N.setAttribute(u,s);
L.appendChild(N);
}else{var L=K.document.createElement(j);
qx.bom.element.Style.setStyles(L,this.__jW(J));
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
}},getHtmlSize:function(content,S,T){var U=this._htmlElement||this.__jU();
U.style.width=T!==undefined?T+v:a;
U.innerHTML=content;
return this.__jX(U,S);
},getTextSize:function(V,W){var X=this._textElement||this.__jT();

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){X.firstChild.setAttribute(f,V);
}else{qx.bom.element.Attribute.set(X,h,V);
}return this.__jX(X,W);
},__jX:function(Y,ba){var bb=this.__jS;

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
},__jY:{visible:true,hidden:true},getContentWidth:function(q){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(q);
var u=parseInt(s.get(q,d)||i,10);
var x=parseInt(s.get(q,e)||i,10);

if(this.__jY[t]){var w=q.clientWidth;

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

if(this.__jY[C]){return y.clientHeight-D-B;
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
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__pk",b="__pj",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__pj:null,__pk:null,getWindowManager:function(){if(!this.__pk){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__pk;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__pk){this.__pk.setDesktop(null);
}j.setDesktop(this);
this.__pk=j;
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
},getWindows:function(){if(!this.__pj){this.__pj=[];
}return this.__pj;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var f="__pl",e="_applyBlockerColor",d="Number",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__pl=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:e,themeable:true},blockerOpacity:{check:d,init:1,apply:b,themeable:true}},members:{__pl:null,_applyBlockerColor:function(g,h){this.__pl.setColor(g);
},_applyBlockerOpacity:function(i,j){this.__pl.setOpacity(i);
},block:function(){this.__pl.block();
},isBlocked:function(){return this.__pl.isBlocked();
},unblock:function(){this.__pl.unblock();
},forceUnblock:function(){this.__pl.forceUnblock();
},blockContent:function(k){this.__pl.blockContent(k);
},isContentBlocked:function(){return this.__pl.isContentBlocked();
},unblockContent:function(){this.__pl.unblockContent();
},forceUnblockContent:function(){this.__pl.forceUnblockContent();
},getBlocker:function(){return this.__pl;
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var t="help",s="contextmenu",r="qx.client",q="changeGlobalCursor",p="keypress",o="Boolean",n="root",m="",l=" !important",k="input",d="_applyGlobalCursor",j="Space",h="_applyNativeHelp",c=";",b="qx.ui.root.Abstract",g="abstract",f="textarea",i="String",a="*";
qx.Class.define(b,{type:g,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
this.addListener(p,this.__pn,this);
},properties:{appearance:{refine:true,init:n},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:i,nullable:true,themeable:true,apply:d,event:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:o,init:false,apply:h}},members:{__pm:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(r,{"mshtml":function(u,v){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__pm;

if(!z){this.__pm=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,a,qx.bom.element.Cursor.compile(w).replace(c,m)+l);
}}}),_applyNativeContextMenu:function(A,B){if(A){this.removeListener(s,this._onNativeContextMenu,this,true);
}else{this.addListener(s,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},__pn:function(e){if(e.getKeyIdentifier()!==j){return;
}var D=e.getTarget();
var C=qx.ui.core.FocusHandler.getInstance();

if(!C.isFocused(D)){return;
}var E=D.getContentElement().getNodeName();

if(E===k||E===f){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(r,{"mshtml":function(F,G){if(G===false){qx.bom.Event.removeNativeListener(document,t,qx.lang.Function.returnFalse);
}
if(F===false){qx.bom.Event.addNativeListener(document,t,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__pm=null;
},defer:function(H,I){qx.ui.core.MChildrenHandling.remap(I);
}});
})();
(function(){var n="resize",m="position",l="0px",k="webkit",j="paddingLeft",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(o){this.__po=qx.dom.Node.getWindow(o);
this.__pp=o;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__po,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__po:null,__pp:null,_createContainerElement:function(){var p=this.__pp;
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
},_computeSizeHint:function(){var u=qx.bom.Viewport.getWidth(this.__po);
var v=qx.bom.Viewport.getHeight(this.__po);
return {minWidth:u,width:u,maxWidth:u,minHeight:v,height:v,maxHeight:v};
},_applyPadding:function(w,x,name){if(w&&(name==a||name==j)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,w,x,name);
},_applyDecorator:function(y,z){qx.ui.root.Abstract.prototype._applyDecorator.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__po=this.__pp=null;
}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="resize",f="keyup",d="keypress",c="backgroundColor",b="_applyOpacity",a="Boolean",x="__oV",w="__pa",v="opacity",u="__oX",t="interval",s="Tab",r="Color",q="qx.ui.root.Page",p="Number",o="qx.ui.core.Blocker",m="qx.ui.root.Application",n="_applyColor";
qx.Class.define(o,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(q)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(g,this.__pb,this);
}
if(qx.Class.isDefined(m)&&y instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__oS=[];
this.__oT=[];
this.__oU=[];
},properties:{color:{check:r,init:null,nullable:true,apply:n,themeable:true},opacity:{check:p,init:1,apply:b,themeable:true},keepBlockerActive:{check:a,init:false}},members:{__oV:null,__oW:0,__oX:null,__oU:null,__oS:null,__oT:null,__oY:null,__pa:null,_isPageRoot:false,_widget:null,__pb:function(e){var z=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:z.width,height:z.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:z.width,height:z.height});
}},_applyColor:function(A,B){var C=qx.theme.manager.Color.getInstance().resolve(A);
this.__pc(c,C);
},_applyOpacity:function(D,E){this.__pc(v,D);
},__pc:function(F,G){var H=[];
this.__oV&&H.push(this.__oV);
this.__oX&&H.push(this.__oX);

for(var i=0;i<H.length;i++){H[i].setStyle(F,G);
}},_backupActiveWidget:function(){var I=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__oS.push(I.getActive());
this.__oT.push(I.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var L=this.__oS.length;

if(L>0){var K=this.__oS[L-1];

if(K){qx.bom.Element.activate(K);
}this.__oS.pop();
}var J=this.__oT.length;

if(J>0){var K=this.__oT[J-1];

if(K){qx.bom.Element.focus(this.__oT[J-1]);
}this.__oT.pop();
}},__pd:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__oV){this.__oV=this.__pd();
this.__oV.setStyle(l,15);
this._widget.getContainerElement().add(this.__oV);
this.__oV.exclude();
}return this.__oV;
},block:function(){this.__oW++;

if(this.__oW<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(h,this.__pi,this);
M.addListener(d,this.__ph,this);
M.addListener(j,this.__ph,this);
M.addListener(f,this.__ph,this);
}},isBlocked:function(){return this.__oW>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__oW--;

if(this.__oW<1){this.__pe();
this.__oW=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__oW=0;
this.__pe();
},__pe:function(){this._restoreActiveWidget();
var N=this.getBlockerElement();
N.removeListener(h,this.__pi,this);
N.removeListener(d,this.__ph,this);
N.removeListener(j,this.__ph,this);
N.removeListener(f,this.__ph,this);
N.exclude();
},getContentBlockerElement:function(){if(!this.__oX){this.__oX=this.__pd();
this._widget.getContentElement().add(this.__oX);
this.__oX.exclude();
}return this.__oX;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(l,O);
this.__oU.push(O);

if(this.__oU.length<2){P.include();

if(this._isPageRoot){if(!this.__pa){this.__pa=new qx.event.Timer(300);
this.__pa.addListener(t,this.__pg,this);
}this.__pa.start();
this.__pg();
}}},isContentBlocked:function(){return this.__oU.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oU.pop();
var Q=this.__oU[this.__oU.length-1];
var R=this.getContentBlockerElement();
R.setStyle(l,Q);

if(this.__oU.length<1){this.__pf();
this.__oU=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oU=[];
var S=this.getContentBlockerElement();
S.setStyle(l,null);
this.__pf();
},__pf:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__pa.stop();
}},__pg:function(){var T=this._widget.getContainerElement().getDomElement();
var U=qx.dom.Node.getDocument(T);
this.getContentBlockerElement().setStyles({height:U.documentElement.scrollHeight+k,width:U.documentElement.scrollWidth+k});
},__ph:function(e){if(e.getKeyIdentifier()==s){e.stop();
}},__pi:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(g,this.__pb,this);
}this._disposeObjects(u,x,w);
this.__oY=this.__oS=this.__oT=this._widget=this.__oU=null;
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
this.addListener(s,this.__pF,this);
this.addListener(n,this.__pF,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__pF:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var k="keypress",j="focusout",h="activate",g="Tab",f="singleton",d="deactivate",c="__pq",b="focusin",a="qx.ui.core.FocusHandler";
qx.Class.define(a,{extend:qx.core.Object,type:f,construct:function(){qx.core.Object.call(this);
this.__pq={};
},members:{__pq:null,__pr:null,__ps:null,__pt:null,connectTo:function(m){m.addListener(k,this.__pu,this);
m.addListener(b,this._onFocusIn,this,true);
m.addListener(j,this._onFocusOut,this,true);
m.addListener(h,this._onActivate,this,true);
m.addListener(d,this._onDeactivate,this,true);
},addRoot:function(n){this.__pq[n.$$hash]=n;
},removeRoot:function(o){delete this.__pq[o.$$hash];
},getActiveWidget:function(){return this.__pr;
},isActive:function(p){return this.__pr==p;
},getFocusedWidget:function(){return this.__ps;
},isFocused:function(q){return this.__ps==q;
},isFocusRoot:function(r){return !!this.__pq[r.$$hash];
},_onActivate:function(e){var t=e.getTarget();
this.__pr=t;
var s=this.__pv(t);

if(s!=this.__pt){this.__pt=s;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__pr==u){this.__pr=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__ps){this.__ps=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var w=e.getTarget();

if(w==this.__ps){this.__ps=null;
w.visualizeBlur();
}},__pu:function(e){if(e.getKeyIdentifier()!=g){return;
}
if(!this.__pt){return;
}e.stopPropagation();
e.preventDefault();
var x=this.__ps;

if(!e.isShiftPressed()){var y=x?this.__pz(x):this.__px();
}else{var y=x?this.__pA(x):this.__py();
}if(y){y.tabFocus();
}},__pv:function(z){var A=this.__pq;

while(z){if(A[z.$$hash]){return z;
}z=z.getLayoutParent();
}return null;
},__pw:function(B,C){if(B===C){return 0;
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
},__px:function(){return this.__pD(this.__pt,null);
},__py:function(){return this.__pE(this.__pt,null);
},__pz:function(M){var N=this.__pt;

if(N==M){return this.__px();
}
while(M&&M.getAnonymous()){M=M.getLayoutParent();
}
if(M==null){return [];
}var O=[];
this.__pB(N,M,O);
O.sort(this.__pw);
var P=O.length;
return P>0?O[0]:this.__px();
},__pA:function(Q){var R=this.__pt;

if(R==Q){return this.__py();
}
while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();
}
if(Q==null){return [];
}var S=[];
this.__pC(R,Q,S);
S.sort(this.__pw);
var T=S.length;
return T>0?S[T-1]:this.__py();
},__pB:function(parent,U,V){var W=parent.getLayoutChildren();
var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
if(!(X instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__pw(U,X)<0){V.push(X);
}this.__pB(X,U,V);
}}},__pC:function(parent,Y,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__pw(Y,bc)>0){ba.push(bc);
}this.__pC(bc,Y,ba);
}}},__pD:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__pw(bf,bd)<0){bd=bf;
}}bd=this.__pD(bf,bd);
}}return bd;
},__pE:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__pw(bi,bg)>0){bg=bi;
}}bg=this.__pE(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(c);
this.__ps=this.__pr=this.__pt=null;
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
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__lf:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__lg:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__lg[name];
s[t]();
}else{var u=this.__lf[name];
s[u](q);
}}}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var k="scrollbar-y",j="scrollbar-x",i="pane",h="auto",g="corner",f="scrollbar-",d="on",c="_computeScrollbars",b="getDocument",a="changeVisibility",D="off",C="x",B="scroll",A="touchmove",z="scrollY",y="Left",x="mousewheel",w="scrollbarX",v="scrollarea",u="y",r="vertical",s="scrollX",p="touchstart",q="horizontal",n="qx.ui.core.scroll.AbstractScrollArea",o="abstract",l="update",m="scrollbarY",t="Top";
qx.Class.define(n,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:o,construct:function(){qx.ui.core.Widget.call(this);
var E=new qx.ui.layout.Grid();
E.setColumnFlex(0,1);
E.setRowFlex(0,1);
this._setLayout(E);
this.addListener(x,this._onMouseWheel,this);
if(qx.bom.client.Feature.TOUCH){this.addListener(A,this._onTouchMove,this);
this.addListener(p,function(){this.__lc={"x":0,"y":0};
},this);
this.__lc={};
this.__ld={};
}},properties:{appearance:{refine:true,init:v},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[h,d,D],init:h,themeable:true,apply:c},scrollbarY:{check:[h,d,D],init:h,themeable:true,apply:c},scrollbar:{group:[w,m]}},members:{__lc:null,__ld:null,_createChildControlImpl:function(F,G){var H;

switch(F){case i:H=new qx.ui.core.scroll.ScrollPane();
H.addListener(l,this._computeScrollbars,this);
H.addListener(s,this._onScrollPaneX,this);
H.addListener(z,this._onScrollPaneY,this);
this._add(H,{row:0,column:0});
break;
case j:H=this._createScrollBar(q);
H.setMinWidth(0);
H.exclude();
H.addListener(B,this._onScrollBarX,this);
H.addListener(a,this._onChangeScrollbarXVisibility,this);
this._add(H,{row:1,column:0});
break;
case k:H=this._createScrollBar(r);
H.setMinHeight(0);
H.exclude();
H.addListener(B,this._onScrollBarY,this);
H.addListener(a,this._onChangeScrollbarYVisibility,this);
this._add(H,{row:0,column:1});
break;
case g:H=new qx.ui.core.Widget();
H.setWidth(0);
H.setHeight(0);
H.exclude();
this._add(H,{row:1,column:1});
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},getPaneSize:function(){return this.getChildControl(i).getInnerSize();
},getItemTop:function(I){return this.getChildControl(i).getItemTop(I);
},getItemBottom:function(J){return this.getChildControl(i).getItemBottom(J);
},getItemLeft:function(K){return this.getChildControl(i).getItemLeft(K);
},getItemRight:function(L){return this.getChildControl(i).getItemRight(L);
},scrollToX:function(M){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollTo(M);
},scrollByX:function(N){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollBy(N);
},getScrollX:function(){var O=this.getChildControl(j,true);
return O?O.getPosition():0;
},scrollToY:function(P){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollTo(P);
},scrollByY:function(Q){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollBy(Q);
},getScrollY:function(){var R=this.getChildControl(k,true);
return R?R.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(i).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(i).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var U=this._isChildControlVisible(j);
var V=this._isChildControlVisible(k);
var T=(V)?this.getChildControl(k,true):(U?this.getChildControl(j,true):null);

if(T){var W=e.getWheelDelta();
T.scrollBySteps(W);
var X=T.getPosition();
var S=T.getMaximum();
if(W<0&&X<=0||W>0&&X>=S){return ;
}e.stop();
}},_onTouchMove:function(e){this._onTouchMoveDirectional(C,e);
this._onTouchMoveDirectional(u,e);
e.stop();
},_onTouchMoveDirectional:function(Y,e){var ba=(Y==C?y:t);
var bc=this.getChildControl(f+Y,true);
var bd=this._isChildControlVisible(f+Y);

if(bd&&bc){if(this.__lc[Y]==0){var bb=0;
}else{var bb=-(e[b+ba]()-this.__lc[Y]);
}this.__lc[Y]=e[b+ba]();
bc.scrollBy(bb);
if(this.__ld[Y]){clearTimeout(this.__ld[Y]);
this.__ld[Y]=null;
}this.__ld[Y]=setTimeout(qx.lang.Function.bind(function(be){this.__le(be,Y);
},this,bb),100);
}},__le:function(bf,bg){this.__ld[bg]=null;
var bi=this._isChildControlVisible(f+bg);

if(bf==0||!bi){return;
}if(bf>0){bf=Math.max(0,bf-3);
}else{bf=Math.min(0,bf+3);
}this.__ld[bg]=setTimeout(qx.lang.Function.bind(function(bj,bk){this.__le(bj,bk);
},this,bf,bg),20);
var bh=this.getChildControl(f+bg,true);
bh.scrollBy(bf);
},_onChangeScrollbarXVisibility:function(e){var bl=this._isChildControlVisible(j);
var bm=this._isChildControlVisible(k);

if(!bl){this.scrollToX(0);
}bl&&bm?this._showChildControl(g):this._excludeChildControl(g);
},_onChangeScrollbarYVisibility:function(e){var bn=this._isChildControlVisible(j);
var bo=this._isChildControlVisible(k);

if(!bo){this.scrollToY(0);
}bn&&bo?this._showChildControl(g):this._excludeChildControl(g);
},_computeScrollbars:function(){var bv=this.getChildControl(i);
var content=bv.getChildren()[0];

if(!content){this._excludeChildControl(j);
this._excludeChildControl(k);
return;
}var bp=this.getInnerSize();
var bu=bv.getInnerSize();
var bs=bv.getScrollSize();
if(!bu||!bs){return;
}var bw=this.getScrollbarX();
var bx=this.getScrollbarY();

if(bw===h&&bx===h){var bt=bs.width>bp.width;
var by=bs.height>bp.height;
if((bt||by)&&!(bt&&by)){if(bt){by=bs.height>bu.height;
}else if(by){bt=bs.width>bu.width;
}}}else{var bt=bw===d;
var by=bx===d;
if(bs.width>(bt?bu.width:bp.width)&&bw===h){bt=true;
}
if(bs.height>(bt?bu.height:bp.height)&&bx===h){by=true;
}}if(bt){var br=this.getChildControl(j);
br.show();
br.setMaximum(Math.max(0,bs.width-bu.width));
br.setKnobFactor((bs.width===0)?0:bu.width/bs.width);
}else{this._excludeChildControl(j);
}
if(by){var bq=this.getChildControl(k);
bq.show();
bq.setMaximum(Math.max(0,bs.height-bu.height));
bq.setKnobFactor((bs.height===0)?0:bu.height/bs.height);
}else{this._excludeChildControl(k);
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
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="qx.client",d="0",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="__lL",w="mousemove",v="_applyMaximum",u="_applyOrientation",t="appear",s="opera",r="PositiveInteger",q="mshtml",o="mouseup",p="Number",m="_applyPosition",n="scrollbar",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);

if(qx.core.Variant.isSet(f,s)){this.addListener(t,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[k,h],init:k,apply:u},maximum:{check:r,apply:v,init:100},position:{check:p,init:0,apply:m,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__lK:null,__lL:null,_getScrollPaneElement:function(){if(!this.__lL){this.__lL=new qx.html.Element();
}return this.__lL;
},renderLayout:function(B,top,C,D){var E=qx.ui.core.Widget.prototype.renderLayout.call(this,B,top,C,D);
this._updateScrollBar();
return E;
},_getContentHint:function(){var F=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__lK?100:F,maxWidth:this.__lK?null:F,minWidth:this.__lK?null:F,height:this.__lK?F:100,maxHeight:this.__lK?F:null,minHeight:this.__lK?F:null};
},_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);
this._updateScrollBar();
},_applyMaximum:function(I){this._updateScrollBar();
},_applyPosition:function(J){var content=this.getContentElement();

if(this.__lK){content.scrollToX(J);
}else{content.scrollToY(J);
}},_applyOrientation:function(K,L){var M=this.__lK=K===k;
this.set({allowGrowX:M,allowShrinkX:M,allowGrowY:!M,allowShrinkY:!M});

if(M){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:M?i:c,overflowY:M?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var O=this.__lK;
var P=this.getBounds();

if(!P){return;
}
if(this.isEnabled()){var Q=O?P.width:P.height;
var N=this.getMaximum()+Q;
}else{N=0;
}if(qx.core.Variant.isSet(f,q)){var P=this.getBounds();
this.getContentElement().setStyles({left:O?d:g,top:O?g:d,width:(O?P.width:P.width+1)+j,height:(O?P.height+1:P.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(O?N:1)+j,height:(O?1:N)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(R){this.setPosition(Math.max(0,Math.min(this.getMaximum(),R)));
},scrollBy:function(S){this.scrollTo(this.getPosition()+S);
},scrollBySteps:function(T){var U=this.getSingleStep();
this.scrollBy(T*U);
},_onScroll:function(e){var W=this.getContentElement();
var V=this.__lK?W.getScrollX():W.getScrollY();
this.setPosition(V);
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
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,h],init:j,apply:r},maximum:{check:o,apply:l,init:100},position:{check:w,init:0,apply:m,event:p},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:q},knobFactor:{check:y,apply:v,nullable:true}},members:{__lM:2,_createChildControlImpl:function(B,C){var D;

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

if(this.getOrientation()==h){if(R.height<S.minHeight+this.__lM){Q=true;
}}else{if(R.width<S.minWidth+this.__lM){Q=true;
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
(function(){var m="qx.dynlocale",l="Boolean",k="changeLocale",j="changeInvalidMessage",i="on",h="String",g="invalid",f="",d="qx.ui.form.MForm",c="_applyValid",a="changeRequired",b="changeValid";
qx.Mixin.define(d,{construct:function(){if(qx.core.Variant.isSet(m,i)){qx.locale.Manager.getInstance().addListener(k,this.__js,this);
}},properties:{valid:{check:l,init:true,apply:c,event:b},required:{check:l,init:false,event:a},invalidMessage:{check:h,init:f,event:j},requiredInvalidMessage:{check:h,nullable:true,event:j}},members:{_applyValid:function(n,o){n?this.removeState(g):this.addState(g);
},__js:qx.core.Variant.select(m,{"on":function(e){var p=this.getInvalidMessage();

if(p&&p.translate){this.setInvalidMessage(p.translate());
}var q=this.getRequiredInvalidMessage();

if(q&&q.translate){this.setRequiredInvalidMessage(q.translate());
}},"off":null})},destruct:function(){if(qx.core.Variant.isSet(m,i)){qx.locale.Manager.getInstance().removeListener(k,this.__js,this);
}}});
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
}},events:{changeValue:N},properties:{appearance:{refine:true,init:R},focusable:{refine:true,init:true},orientation:{check:[j,i],init:j,apply:F},value:{check:K,init:0,apply:l,nullable:true},minimum:{check:h,init:0,apply:w,event:G},maximum:{check:h,init:100,apply:A,event:E},singleStep:{check:h,init:1},pageStep:{check:h,init:10},knobFactor:{check:C,apply:m,nullable:true}},members:{__lN:null,__lO:null,__lP:null,__lQ:null,__lR:null,__lS:null,__lT:null,__lU:null,__lV:null,__lW:null,__lX:null,__lY:null,_forwardStates:{invalid:true},_createChildControlImpl:function(X,Y){var ba;

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
},_onMouseDown:function(e){if(this.__lQ){return;
}var bg=this.__mb;
var be=this.getChildControl(k);
var bf=bg?f:d;
var bi=bg?e.getDocumentLeft():e.getDocumentTop();
var bj=this.__lN=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bf];
var bh=this.__lO=qx.bom.element.Location.get(be.getContainerElement().getDomElement())[bf];

if(e.getTarget()===be){this.__lQ=true;

if(!this.__lW){this.__lW=new qx.event.Timer(100);
this.__lW.addListener(U,this._fireValue,this);
}this.__lW.start();
this.__lR=bi+bj-bh;
be.addState(b);
}else{this.__lS=true;
this.__lT=bi<=bh?-1:1;
this.__mc(e);
this._onInterval();
if(!this.__lV){this.__lV=new qx.event.Timer(100);
this.__lV.addListener(U,this._onInterval,this);
}this.__lV.start();
}this.addListener(T,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__lQ){this.releaseCapture();
delete this.__lQ;
this.__lW.stop();
this._fireValue();
delete this.__lR;
this.getChildControl(k).removeState(b);
if(e.getType()===c){var bl;
var bm;
var bk;

if(this.__mb){bl=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__lN);
bk=qx.bom.element.Location.get(this.getContentElement().getDomElement())[d];
bm=e.getDocumentTop()-(bk+this.getChildControl(k).getBounds().top);
}else{bl=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__lN);
bk=qx.bom.element.Location.get(this.getContentElement().getDomElement())[f];
bm=e.getDocumentLeft()-(bk+this.getChildControl(k).getBounds().left);
}
if(bm<0||bm>this.__lP||bl<0||bl>this.__lP){this.getChildControl(k).removeState(g);
}}}else if(this.__lS){this.__lV.stop();
this.releaseCapture();
delete this.__lS;
delete this.__lT;
delete this.__lU;
}this.removeListener(T,this._onMouseMove);
if(e.getType()===c){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__lQ){var bo=this.__mb?e.getDocumentLeft():e.getDocumentTop();
var bn=bo-this.__lR;
this.slideTo(this._positionToValue(bn));
}else if(this.__lS){this.__mc(e);
}e.stopPropagation();
},_onInterval:function(e){var bp=this.getValue()+(this.__lT*this.getPageStep());
if(bp<this.getMinimum()){bp=this.getMinimum();
}else if(bp>this.getMaximum()){bp=this.getMaximum();
}var bq=this.__lT==-1;

if((bq&&bp<=this.__lU)||(!bq&&bp>=this.__lU)){bp=this.__lU;
}this.slideTo(bp);
},_onUpdate:function(e){var bs=this.getInnerSize();
var bt=this.getChildControl(k).getBounds();
var br=this.__mb?z:u;
this._updateKnobSize();
this.__ma=bs[br]-bt[br];
this.__lP=bt[br];
this._updateKnobPosition();
},__mb:false,__ma:0,__mc:function(e){var bu=this.__mb;
var bB=bu?e.getDocumentLeft():e.getDocumentTop();
var bD=this.__lN;
var bv=this.__lO;
var bF=this.__lP;
var bC=bB-bD;

if(bB>=bv){bC-=bF;
}var bz=this._positionToValue(bC);
var bw=this.getMinimum();
var bx=this.getMaximum();

if(bz<bw){bz=bw;
}else if(bz>bx){bz=bx;
}else{var bA=this.getValue();
var by=this.getPageStep();
var bE=this.__lT<0?H:v;
bz=bA+(Math[bE]((bz-bA)/by)*by);
}if(this.__lU==null||(this.__lT==-1&&bz<=this.__lU)||(this.__lT==1&&bz>=this.__lU)){this.__lU=bz;
}},_positionToValue:function(bG){var bH=this.__ma;
if(bH==null||bH==0){return 0;
}var bJ=bG/bH;

if(bJ<0){bJ=0;
}else if(bJ>1){bJ=1;
}var bI=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bI*bJ);
},_valueToPosition:function(bK){var bL=this.__ma;

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

if(this.__mb){bP.setStyle(f,bO+a,true);
}else{bP.setStyle(d,bO+a,true);
}},_updateKnobSize:function(){var bR=this.getKnobFactor();

if(bR==null){return;
}var bQ=this.getInnerSize();

if(bQ==null){return;
}if(this.__mb){this.getChildControl(k).setWidth(Math.round(bR*bQ.width));
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
this.__mb=bU===j;
if(this.__mb){this.removeState(i);
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
}else{if(this.__mb){this.getChildControl(k).resetWidth();
}else{this.getChildControl(k).resetHeight();
}}},_applyValue:function(ca,cb){if(ca!=null){this._updateKnobPosition();

if(this.__lQ){this.__lY=[ca,cb];
}else{this.fireEvent(V,qx.event.type.Data,[ca,cb]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__lY){return;
}var cc=this.__lY;
this.__lY=null;
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
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__jo:null,__jp:false,__jq:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__jp){this.__jp=false;
}else{this.__jp=true;
o.execute(this);
}}this.fireEvent(n);
},__jr:function(e){if(this.__jp){this.__jp=false;
return;
}this.__jp=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__jq);
}
if(p!=null){this.__jq=p.addListener(n,this.__jr,this);
}var t=this.__jo;

if(t==null){this.__jo=t={};
}var u;

for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){try{q.removeBinding(t[s]);
}catch(v){}t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){u=this.get(s);
}else{u=null;
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this._applyCommand(null,this.getCommand());
this.__jo=null;
}});
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="__md",d="qx.ui.form.RepeatButton",a="release",c="interval",b="execute";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__md=new qx.event.AcceleratingTimer();
this.__md.addListener(c,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__me:null,__md:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__mf();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__me){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__mg();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__mg();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__md.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__md.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__mf();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__me){this.execute();
}}this.__mg();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__me){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__mg();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__mf();
}},_onInterval:function(e){this.__me=true;
this.fireEvent(b);
},__mf:function(){this.fireEvent(g);
this.__me=false;
this.__md.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__mg:function(){this.fireEvent(a);
this.__md.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var e="Integer",d="interval",c="qx.event.type.Event",b="__mh",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__mh=new qx.event.Timer(this.getInterval());
this.__mh.addListener(d,this._onInterval,this);
},events:{"interval":c},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__mh:null,__mi:null,start:function(){this.__mh.setInterval(this.getFirstInterval());
this.__mh.start();
},stop:function(){this.__mh.stop();
this.__mi=null;
},_onInterval:function(){this.__mh.stop();

if(this.__mi==null){this.__mi=this.getInterval();
}this.__mi=Math.max(this.getMinimum(),this.__mi-this.getDecrease());
this.__mh.setInterval(this.__mi);
this.__mh.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignX(p);
}
if(q){this.setSeparator(q);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__mj:null,__mk:null,__ml:null,__mm:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__mn:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__mj&&this.__mj.length!=length&&this.__mk&&this.__mj;
var u;
var s=r?this.__mj:new Array(length);
var v=r?this.__mk:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}else{v[i]=0;
}}if(!r){this.__mj=s;
this.__mk=v;
}this.__ml=t;
this.__mm=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__mn();
}var E=this.__mm;
var length=E.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var B=N.computeHorizontalSeparatorGaps(E,M,Q);
}else{var B=N.computeHorizontalGaps(E,M,true);
}var i,z,K,J;
var P=[];
var F=B;

for(i=0;i<length;i+=1){J=this.__mj[i];
K=J!=null?Math.floor((x-B)*J):E[i].getSizeHint().width;
P.push(K);
F+=K;
}if(this.__ml&&F!=x){var H={};
var L,O;

for(i=0;i<length;i+=1){L=this.__mk[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__mn();
}var bc=qx.ui.layout.Util;
var bk=this.__mm;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__mk[i];
var X=this.__mj[i];

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
}},destruct:function(){this.__mj=this.__mk=this.__mm=null;
}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignY(p);
}
if(q){this.setSeparator(q);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__mo:null,__mp:null,__mq:null,__mr:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__ms:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__mo&&this.__mo.length!=length&&this.__mp&&this.__mo;
var u;
var t=r?this.__mo:new Array(length);
var v=r?this.__mp:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}else{v[i]=0;
}}if(!r){this.__mo=t;
this.__mp=v;
}this.__mq=s;
this.__mr=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__ms();
}var F=this.__mr;
var length=F.length;
var P=qx.ui.layout.Util;
var O=this.getSpacing();
var S=this.getSeparator();

if(S){var C=P.computeVerticalSeparatorGaps(F,O,S);
}else{var C=P.computeVerticalGaps(F,O,true);
}var i,A,B,J;
var K=[];
var Q=C;

for(i=0;i<length;i+=1){J=this.__mo[i];
B=J!=null?Math.floor((y-C)*J):F[i].getSizeHint().height;
K.push(B);
Q+=B;
}if(this.__mq&&Q!=y){var H={};
var N,R;

for(i=0;i<length;i+=1){N=this.__mp[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ms();
}var bc=qx.ui.layout.Util;
var bk=this.__mr;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__mp[i];
var Y=this.__mo[i];

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
}},destruct:function(){this.__mo=this.__mp=this.__mr=null;
}});
})();
(function(){var r="left",q="top",p="_applyLayoutChange",o="hAlign",n="flex",m="vAlign",h="Integer",g="minWidth",f="width",e="minHeight",b="qx.ui.layout.Grid",d="height",c="maxHeight",a="maxWidth";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(s,t){qx.ui.layout.Abstract.call(this);
this.__ki=[];
this.__kj=[];

if(s){this.setSpacingX(s);
}
if(t){this.setSpacingY(t);
}},properties:{spacingX:{check:h,init:0,apply:p},spacingY:{check:h,init:0,apply:p}},members:{__kk:null,__ki:null,__kj:null,__kl:null,__km:null,__kn:null,__ko:null,__kp:null,__kq:null,verifyLayoutProperty:null,__kr:function(){var B=[];
var A=[];
var C=[];
var w=-1;
var v=-1;
var E=this._getLayoutChildren();

for(var i=0,l=E.length;i<l;i++){var z=E[i];
var D=z.getLayoutProperties();
var F=D.row;
var u=D.column;
D.colSpan=D.colSpan||1;
D.rowSpan=D.rowSpan||1;
if(F==null||u==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+z+"' must be defined!");
}
if(B[F]&&B[F][u]){throw new Error("Cannot add widget '"+z+"'!. "+"There is already a widget '"+B[F][u]+"' in this cell ("+F+", "+u+")");
}
for(var x=u;x<u+D.colSpan;x++){for(var y=F;y<F+D.rowSpan;y++){if(B[y]==undefined){B[y]=[];
}B[y][x]=z;
v=Math.max(v,x);
w=Math.max(w,y);
}}
if(D.rowSpan>1){C.push(z);
}
if(D.colSpan>1){A.push(z);
}}for(var y=0;y<=w;y++){if(B[y]==undefined){B[y]=[];
}}this.__kk=B;
this.__kl=A;
this.__km=C;
this.__kn=w;
this.__ko=v;
this.__kp=null;
this.__kq=null;
delete this._invalidChildrenCache;
},_setRowData:function(G,H,I){var J=this.__ki[G];

if(!J){this.__ki[G]={};
this.__ki[G][H]=I;
}else{J[H]=I;
}},_setColumnData:function(K,L,M){var N=this.__kj[K];

if(!N){this.__kj[K]={};
this.__kj[K][L]=M;
}else{N[L]=M;
}},setSpacing:function(O){this.setSpacingY(O);
this.setSpacingX(O);
return this;
},setColumnAlign:function(P,Q,R){{};
this._setColumnData(P,o,Q);
this._setColumnData(P,m,R);
this._applyLayoutChange();
return this;
},getColumnAlign:function(S){var T=this.__kj[S]||{};
return {vAlign:T.vAlign||q,hAlign:T.hAlign||r};
},setRowAlign:function(U,V,W){{};
this._setRowData(U,o,V);
this._setRowData(U,m,W);
this._applyLayoutChange();
return this;
},getRowAlign:function(X){var Y=this.__ki[X]||{};
return {vAlign:Y.vAlign||q,hAlign:Y.hAlign||r};
},getCellWidget:function(ba,bb){if(this._invalidChildrenCache){this.__kr();
}var ba=this.__kk[ba]||{};
return ba[bb]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__kr();
}return this.__kn+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__kr();
}return this.__ko+1;
},getCellAlign:function(bc,bd){var bj=q;
var bh=r;
var bi=this.__ki[bc];
var bf=this.__kj[bd];
var be=this.__kk[bc][bd];

if(be){var bg={vAlign:be.getAlignY(),hAlign:be.getAlignX()};
}else{bg={};
}if(bg.vAlign){bj=bg.vAlign;
}else if(bi&&bi.vAlign){bj=bi.vAlign;
}else if(bf&&bf.vAlign){bj=bf.vAlign;
}if(bg.hAlign){bh=bg.hAlign;
}else if(bf&&bf.hAlign){bh=bf.hAlign;
}else if(bi&&bi.hAlign){bh=bi.hAlign;
}return {vAlign:bj,hAlign:bh};
},setColumnFlex:function(bk,bl){this._setColumnData(bk,n,bl);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bm){var bn=this.__kj[bm]||{};
return bn.flex!==undefined?bn.flex:0;
},setRowFlex:function(bo,bp){this._setRowData(bo,n,bp);
this._applyLayoutChange();
return this;
},getRowFlex:function(bq){var br=this.__ki[bq]||{};
var bs=br.flex!==undefined?br.flex:0;
return bs;
},setColumnMaxWidth:function(bt,bu){this._setColumnData(bt,a,bu);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bv){var bw=this.__kj[bv]||{};
return bw.maxWidth!==undefined?bw.maxWidth:Infinity;
},setColumnWidth:function(bx,by){this._setColumnData(bx,f,by);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bz){var bA=this.__kj[bz]||{};
return bA.width!==undefined?bA.width:null;
},setColumnMinWidth:function(bB,bC){this._setColumnData(bB,g,bC);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bD){var bE=this.__kj[bD]||{};
return bE.minWidth||0;
},setRowMaxHeight:function(bF,bG){this._setRowData(bF,c,bG);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bH){var bI=this.__ki[bH]||{};
return bI.maxHeight||Infinity;
},setRowHeight:function(bJ,bK){this._setRowData(bJ,d,bK);
this._applyLayoutChange();
return this;
},getRowHeight:function(bL){var bM=this.__ki[bL]||{};
return bM.height!==undefined?bM.height:null;
},setRowMinHeight:function(bN,bO){this._setRowData(bN,e,bO);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bP){var bQ=this.__ki[bP]||{};
return bQ.minHeight||0;
},__ks:function(bR){var bV=bR.getSizeHint();
var bU=bR.getMarginLeft()+bR.getMarginRight();
var bT=bR.getMarginTop()+bR.getMarginBottom();
var bS={height:bV.height+bT,width:bV.width+bU,minHeight:bV.minHeight+bT,minWidth:bV.minWidth+bU,maxHeight:bV.maxHeight+bT,maxWidth:bV.maxWidth+bU};
return bS;
},_fixHeightsRowSpan:function(bW){var ce=this.getSpacingY();

for(var i=0,l=this.__km.length;i<l;i++){var cl=this.__km[i];
var ch=this.__ks(cl);
var ca=cl.getLayoutProperties();
var cg=ca.row;
var cq=ce*(ca.rowSpan-1);
var bX=cq;
var cb={};

for(var j=0;j<ca.rowSpan;j++){var cf=ca.row+j;
var cp=bW[cf];
var cr=this.getRowFlex(cf);

if(cr>0){cb[cf]={min:cp.minHeight,value:cp.height,max:cp.maxHeight,flex:cr};
}cq+=cp.height;
bX+=cp.minHeight;
}if(cq<ch.height){if(!qx.lang.Object.isEmpty(cb)){var cc=qx.ui.layout.Util.computeFlexOffsets(cb,ch.height,cq);

for(var k=0;k<ca.rowSpan;k++){var cn=cc[cg+k]?cc[cg+k].offset:0;
bW[cg+k].height+=cn;
}}else{var ck=ce*(ca.rowSpan-1);
var ci=ch.height-ck;
var co=Math.floor(ci/ca.rowSpan);
var cm=0;
var bY=0;

for(var k=0;k<ca.rowSpan;k++){var cd=bW[cg+k].height;
cm+=cd;

if(cd<co){bY++;
}}var cj=Math.floor((ci-cm)/bY);
for(var k=0;k<ca.rowSpan;k++){if(bW[cg+k].height<co){bW[cg+k].height+=cj;
}}}}if(bX<ch.minHeight){var cc=qx.ui.layout.Util.computeFlexOffsets(cb,ch.minHeight,bX);

for(var j=0;j<ca.rowSpan;j++){var cn=cc[cg+j]?cc[cg+j].offset:0;
bW[cg+j].minHeight+=cn;
}}}},_fixWidthsColSpan:function(cs){var cw=this.getSpacingX();

for(var i=0,l=this.__kl.length;i<l;i++){var ct=this.__kl[i];
var cv=this.__ks(ct);
var cy=ct.getLayoutProperties();
var cu=cy.column;
var cE=cw*(cy.colSpan-1);
var cx=cE;
var cz={};
var cB;

for(var j=0;j<cy.colSpan;j++){var cF=cy.column+j;
var cD=cs[cF];
var cC=this.getColumnFlex(cF);
if(cC>0){cz[cF]={min:cD.minWidth,value:cD.width,max:cD.maxWidth,flex:cC};
}cE+=cD.width;
cx+=cD.minWidth;
}if(cE<cv.width){var cA=qx.ui.layout.Util.computeFlexOffsets(cz,cv.width,cE);

for(var j=0;j<cy.colSpan;j++){cB=cA[cu+j]?cA[cu+j].offset:0;
cs[cu+j].width+=cB;
}}if(cx<cv.minWidth){var cA=qx.ui.layout.Util.computeFlexOffsets(cz,cv.minWidth,cx);

for(var j=0;j<cy.colSpan;j++){cB=cA[cu+j]?cA[cu+j].offset:0;
cs[cu+j].minWidth+=cB;
}}}},_getRowHeights:function(){if(this.__kp!=null){return this.__kp;
}var cP=[];
var cI=this.__kn;
var cH=this.__ko;

for(var cQ=0;cQ<=cI;cQ++){var cJ=0;
var cL=0;
var cK=0;

for(var cO=0;cO<=cH;cO++){var cG=this.__kk[cQ][cO];

if(!cG){continue;
}var cM=cG.getLayoutProperties().rowSpan||0;

if(cM>1){continue;
}var cN=this.__ks(cG);

if(this.getRowFlex(cQ)>0){cJ=Math.max(cJ,cN.minHeight);
}else{cJ=Math.max(cJ,cN.height);
}cL=Math.max(cL,cN.height);
}var cJ=Math.max(cJ,this.getRowMinHeight(cQ));
var cK=this.getRowMaxHeight(cQ);

if(this.getRowHeight(cQ)!==null){var cL=this.getRowHeight(cQ);
}else{var cL=Math.max(cJ,Math.min(cL,cK));
}cP[cQ]={minHeight:cJ,height:cL,maxHeight:cK};
}
if(this.__km.length>0){this._fixHeightsRowSpan(cP);
}this.__kp=cP;
return cP;
},_getColWidths:function(){if(this.__kq!=null){return this.__kq;
}var cV=[];
var cS=this.__ko;
var cU=this.__kn;

for(var db=0;db<=cS;db++){var cY=0;
var cX=0;
var cT=Infinity;

for(var dc=0;dc<=cU;dc++){var cR=this.__kk[dc][db];

if(!cR){continue;
}var cW=cR.getLayoutProperties().colSpan||0;

if(cW>1){continue;
}var da=this.__ks(cR);

if(this.getColumnFlex(db)>0){cX=Math.max(cX,da.minWidth);
}else{cX=Math.max(cX,da.width);
}cY=Math.max(cY,da.width);
}var cX=Math.max(cX,this.getColumnMinWidth(db));
var cT=this.getColumnMaxWidth(db);

if(this.getColumnWidth(db)!==null){var cY=this.getColumnWidth(db);
}else{var cY=Math.max(cX,Math.min(cY,cT));
}cV[db]={minWidth:cX,width:cY,maxWidth:cT};
}
if(this.__kl.length>0){this._fixWidthsColSpan(cV);
}this.__kq=cV;
return cV;
},_getColumnFlexOffsets:function(dd){var de=this.getSizeHint();
var di=dd-de.width;

if(di==0){return {};
}var dg=this._getColWidths();
var df={};

for(var i=0,l=dg.length;i<l;i++){var dj=dg[i];
var dh=this.getColumnFlex(i);

if((dh<=0)||(dj.width==dj.maxWidth&&di>0)||(dj.width==dj.minWidth&&di<0)){continue;
}df[i]={min:dj.minWidth,value:dj.width,max:dj.maxWidth,flex:dh};
}return qx.ui.layout.Util.computeFlexOffsets(df,dd,de.width);
},_getRowFlexOffsets:function(dk){var dl=this.getSizeHint();
var dp=dk-dl.height;

if(dp==0){return {};
}var dq=this._getRowHeights();
var dm={};

for(var i=0,l=dq.length;i<l;i++){var dr=dq[i];
var dn=this.getRowFlex(i);

if((dn<=0)||(dr.height==dr.maxHeight&&dp>0)||(dr.height==dr.minHeight&&dp<0)){continue;
}dm[i]={min:dr.minHeight,value:dr.height,max:dr.maxHeight,flex:dn};
}return qx.ui.layout.Util.computeFlexOffsets(dm,dk,dl.height);
},renderLayout:function(ds,dt){if(this._invalidChildrenCache){this.__kr();
}var dH=qx.ui.layout.Util;
var dv=this.getSpacingX();
var dB=this.getSpacingY();
var dM=this._getColWidths();
var dL=this._getColumnFlexOffsets(ds);
var dw=[];
var dO=this.__ko;
var du=this.__kn;
var dN;

for(var dP=0;dP<=dO;dP++){dN=dL[dP]?dL[dP].offset:0;
dw[dP]=dM[dP].width+dN;
}var dE=this._getRowHeights();
var dG=this._getRowFlexOffsets(dt);
var dV=[];

for(var dC=0;dC<=du;dC++){dN=dG[dC]?dG[dC].offset:0;
dV[dC]=dE[dC].height+dN;
}var dW=0;

for(var dP=0;dP<=dO;dP++){var top=0;

for(var dC=0;dC<=du;dC++){var dJ=this.__kk[dC][dP];
if(!dJ){top+=dV[dC]+dB;
continue;
}var dx=dJ.getLayoutProperties();
if(dx.row!==dC||dx.column!==dP){top+=dV[dC]+dB;
continue;
}var dU=dv*(dx.colSpan-1);

for(var i=0;i<dx.colSpan;i++){dU+=dw[dP+i];
}var dK=dB*(dx.rowSpan-1);

for(var i=0;i<dx.rowSpan;i++){dK+=dV[dC+i];
}var dy=dJ.getSizeHint();
var dS=dJ.getMarginTop();
var dI=dJ.getMarginLeft();
var dF=dJ.getMarginBottom();
var dA=dJ.getMarginRight();
var dD=Math.max(dy.minWidth,Math.min(dU-dI-dA,dy.maxWidth));
var dT=Math.max(dy.minHeight,Math.min(dK-dS-dF,dy.maxHeight));
var dQ=this.getCellAlign(dC,dP);
var dR=dW+dH.computeHorizontalAlignOffset(dQ.hAlign,dD,dU,dI,dA);
var dz=top+dH.computeVerticalAlignOffset(dQ.vAlign,dT,dK,dS,dF);
dJ.renderLayout(dR,dz,dD,dT);
top+=dV[dC]+dB;
}dW+=dw[dP]+dv;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__kq=null;
this.__kp=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kr();
}var ec=this._getColWidths();
var ee=0,ef=0;

for(var i=0,l=ec.length;i<l;i++){var eg=ec[i];

if(this.getColumnFlex(i)>0){ee+=eg.minWidth;
}else{ee+=eg.width;
}ef+=eg.width;
}var eh=this._getRowHeights();
var ea=0,ed=0;

for(var i=0,l=eh.length;i<l;i++){var ei=eh[i];

if(this.getRowFlex(i)>0){ea+=ei.minHeight;
}else{ea+=ei.height;
}ed+=ei.height;
}var dY=this.getSpacingX()*(ec.length-1);
var dX=this.getSpacingY()*(eh.length-1);
var eb={minWidth:ee+dY,width:ef+dY,minHeight:ea+dX,height:ed+dX};
return eb;
}},destruct:function(){this.__kk=this.__ki=this.__kj=this.__kl=this.__km=this.__kq=this.__kp=null;
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
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(c){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(e){return arguments.length==1;
}}});
})();
(function(){var m="pane",k="lastTab",j="bar",h="page",g="firstTab",f="right",d="bottom",c="button",b="changeSelection",a="close",B="top",A="left",z="qx.event.type.Data",y="barRight",x="beforeChangeSelection",w="close-button",v="tabview",u="vertical",t="_applyBarPosition",s="barLeft",q="horizontal",r="qx.ui.tabview.TabView",o="barTop",p="barBottom",n="__sy";
qx.Class.define(r,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:[qx.ui.core.MContentPadding],construct:function(C){qx.ui.core.Widget.call(this);
this.__sx={top:o,right:y,bottom:p,left:s};
this._createChildControl(j);
this._createChildControl(m);
var D=this.__sy=new qx.ui.form.RadioGroup;
D.setWrap(false);
D.addListener(b,this._onChangeSelection,this);
if(C!=null){this.setBarPosition(C);
}else{this.initBarPosition();
}},events:{"changeSelection":z},properties:{appearance:{refine:true,init:v},barPosition:{check:[A,f,B,d],init:B,apply:t}},members:{__sy:null,_createChildControlImpl:function(E,F){var G;

switch(E){case j:G=new qx.ui.container.SlideBar();
G.setZIndex(10);
this._add(G);
break;
case m:G=new qx.ui.container.Stack;
G.setZIndex(5);
this._add(G,{flex:1});
break;
}return G||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,E);
},_getContentPaddingTarget:function(){return this.getChildControl(m);
},add:function(H){{};
var I=H.getButton();
var J=this.getChildControl(j);
var L=this.getChildControl(m);
H.exclude();
J.add(I);
L.add(H);
this.__sy.add(I);
H.addState(this.__sx[this.getBarPosition()]);
H.addState(k);
var K=this.getChildren();

if(K[0]==H){H.addState(g);
}else{K[K.length-2].removeState(k);
}H.addListener(a,this._onPageClose,this);
},remove:function(M){var R=this.getChildControl(m);
var P=this.getChildControl(j);
var O=M.getButton();
var Q=R.getChildren();
if(this.getSelection()[0]==M){var N=Q.indexOf(M);

if(N==0){if(Q[1]){this.setSelection([Q[1]]);
}else{this.resetSelection();
}}else{this.setSelection([Q[N-1]]);
}}P.remove(O);
R.remove(M);
this.__sy.remove(O);
M.removeState(this.__sx[this.getBarPosition()]);
if(M.hasState(g)){M.removeState(g);

if(Q[0]){Q[0].addState(g);
}}
if(M.hasState(k)){M.removeState(k);

if(Q.length>0){Q[Q.length-1].addState(k);
}}M.removeListener(a,this._onPageClose,this);
},getChildren:function(){return this.getChildControl(m).getChildren();
},indexOf:function(S){return this.getChildControl(m).indexOf(S);
},__sx:null,_applyBarPosition:function(T,U){var V=this.getChildControl(j);
var bb=T==A||T==f;
var Y=T==f||T==d;
var ba=bb?qx.ui.layout.HBox:qx.ui.layout.VBox;
var bd=this._getLayout();

if(bd&&bd instanceof ba){}else{this._setLayout(bd=new ba);
}bd.setReversed(Y);
V.setOrientation(bb?u:q);
var bc=this.getChildren();
if(U){var W=this.__sx[U];
V.removeState(W);
for(var i=0,l=bc.length;i<l;i++){bc[i].removeState(W);
}}
if(T){var X=this.__sx[T];
V.addState(X);
for(var i=0,l=bc.length;i<l;i++){bc[i].addState(X);
}}},getSelection:function(){var be=this.__sy.getSelection();
var bf=[];

for(var i=0;i<be.length;i++){bf.push(be[i].getUserData(h));
}return bf;
},setSelection:function(bg){var bh=[];

for(var i=0;i<bg.length;i++){bh.push(bg[i].getChildControl(c));
}this.__sy.setSelection(bh);
},resetSelection:function(){this.__sy.resetSelection();
},isSelected:function(bi){var bj=bi.getChildControl(c);
return this.__sy.isSelected(bj);
},isSelectionEmpty:function(){return this.__sy.isSelectionEmpty();
},getSelectables:function(bk){var bl=this.__sy.getSelectables(bk);
var bm=[];

for(var i=0;i<bl.length;i++){bm.push(bl[i].getUserData(h));
}return bm;
},_onChangeSelection:function(e){var br=this.getChildControl(m);
var bo=e.getData()[0];
var bq=e.getOldData()[0];
var bn=[];
var bp=[];

if(bo){bn=[bo.getUserData(h)];
br.setSelection(bn);
bo.focus();
this.scrollChildIntoView(bo,null,null,false);
}else{br.resetSelection();
}
if(bq){bp=[bq.getUserData(h)];
}this.fireDataEvent(b,bn,bp);
},_onBeforeChangeSelection:function(e){if(!this.fireNonBubblingEvent(x,qx.event.type.Event,[false,true])){e.preventDefault();
}},_onRadioChangeSelection:function(e){var bs=e.getData()[0];

if(bs){this.setSelection([bs.getUserData(h)]);
}else{this.resetSelection();
}},_onPageClose:function(e){var bu=e.getTarget();
var bt=bu.getButton().getChildControl(w);
bt.reset();
this.remove(bu);
}},destruct:function(){this._disposeObjects(n);
this.__sx=null;
}});
})();
(function(){var a="demobrowser.demo.ui.overview.TabView";
qx.Class.define(a,{extend:qx.ui.tabview.TabView,construct:function(){qx.ui.tabview.TabView.call(this);
this.__QW();
},members:{__QW:function(){var f=new demobrowser.demo.ui.overview.pages.Basic();
this.add(f);
var b=new demobrowser.demo.ui.overview.pages.Control();
this.add(b);
var c=new demobrowser.demo.ui.overview.pages.Form();
this.add(c);
var g=new demobrowser.demo.ui.overview.pages.Embed();
this.add(g);
var e=new demobrowser.demo.ui.overview.pages.EmbedFrame();
this.add(e);
var d=new demobrowser.demo.ui.overview.pages.ToolBar();
this.add(d);
}}});
})();
(function(){var e="change",d="qx.event.type.Data",c="qx.ui.form.MModelSelection",b="__jt",a="changeSelection";
qx.Mixin.define(c,{construct:function(){this.__jt=new qx.data.Array();
this.__jt.addListener(e,this.__jw,this);
this.addListener(a,this.__jv,this);
},events:{changeModelSelection:d},members:{__jt:null,__ju:false,__jv:function(){if(this.__ju){return;
}var h=this.getSelection();
var f=[];

for(var i=0;i<h.length;i++){var k=h[i];
var g=k.getModel?k.getModel():null;

if(g!==null){f.push(g);
}}if(f.length===h.length){this.setModelSelection(f);
}},__jw:function(){this.__ju=true;
var m=this.getSelectables(true);
var o=[];
var n=this.__jt.toArray();

for(var i=0;i<n.length;i++){var q=n[i];

for(var j=0;j<m.length;j++){var r=m[j];
var l=r.getModel?r.getModel():null;

if(q===l){o.push(r);
break;
}}}this.setSelection(o);
this.__ju=false;
var p=this.getSelection();

if(!qx.lang.Array.equals(p,o)){this.__jv();
}},getModelSelection:function(){return this.__jt;
},setModelSelection:function(s){if(!s){this.__jt.removeAll();
return;
}{};
s.unshift(this.__jt.getLength());
s.unshift(0);
var t=this.__jt.splice.apply(this.__jt,s);
t.dispose();
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var f="qx.ui.core.MSingleSelectionHandling",d="__jx",c="changeSelection",b="changeSelected",a="qx.event.type.Data";
qx.Mixin.define(f,{events:{"changeSelection":a},members:{__jx:null,getSelection:function(){var g=this.__jy().getSelected();

if(g){return [g];
}else{return [];
}},setSelection:function(h){switch(h.length){case 0:this.resetSelection();
break;
case 1:this.__jy().setSelected(h[0]);
break;
default:throw new Error("Could only select one item, but the selection"+" array contains "+h.length+" items!");
}},resetSelection:function(){this.__jy().resetSelected();
},isSelected:function(i){return this.__jy().isSelected(i);
},isSelectionEmpty:function(){return this.__jy().isSelectionEmpty();
},getSelectables:function(j){return this.__jy().getSelectables(j);
},_onChangeSelected:function(e){var l=e.getData();
var k=e.getOldData();
l==null?l=[]:l=[l];
k==null?k=[]:k=[k];
this.fireDataEvent(c,l,k);
},__jy:function(){if(this.__jx==null){var m=this;
this.__jx=new qx.ui.core.SingleSelectionManager({getItems:function(){return m._getItems();
},isItemSelectable:function(n){if(m._isItemSelectable){return m._isItemSelectable(n);
}else{return n.isVisible();
}}});
this.__jx.addListener(b,this._onChangeSelected,this);
}this.__jx.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__jx;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var r="Boolean",q="changeInvalidMessage",p="changeValue",o="String",n="_applyAllowEmptySelection",m="_applyInvalidMessage",k="qx.ui.form.RadioGroup",j="_applyValid",h="",g="changeRequired",c="changeValid",f="__jz",d="changeEnabled",b="changeSelection",a="_applyEnabled";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(s){qx.core.Object.call(this);
this.__jz=[];
this.addListener(b,this.__jA,this);

if(s!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:a,event:d,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:n},valid:{check:r,init:true,apply:j,event:c},required:{check:r,init:false,event:g},invalidMessage:{check:o,init:h,event:q,apply:m},requiredInvalidMessage:{check:o,nullable:true,event:q}},members:{__jz:null,getItems:function(){return this.__jz;
},add:function(t){var u=this.__jz;
var v;

for(var i=0,l=arguments.length;i<l;i++){v=arguments[i];

if(qx.lang.Array.contains(u,v)){continue;
}v.addListener(p,this._onItemChangeChecked,this);
u.push(v);
v.setGroup(this);
if(v.getValue()){this.setSelection([v]);
}}if(!this.isAllowEmptySelection()&&u.length>0&&!this.getSelection()[0]){this.setSelection([u[0]]);
}},remove:function(w){var x=this.__jz;

if(qx.lang.Array.contains(x,w)){qx.lang.Array.remove(x,w);
if(w.getGroup()===this){w.resetGroup();
}w.removeListener(p,this._onItemChangeChecked,this);
if(w.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__jz;
},_onItemChangeChecked:function(e){var y=e.getTarget();

if(y.getValue()){this.setSelection([y]);
}else if(this.getSelection()[0]==y){this.resetSelection();
}},_applyInvalidMessage:function(z,A){for(var i=0;i<this.__jz.length;i++){this.__jz[i].setInvalidMessage(z);
}},_applyValid:function(B,C){for(var i=0;i<this.__jz.length;i++){this.__jz[i].setValid(B);
}},_applyEnabled:function(D,E){var F=this.__jz;

if(D==null){for(var i=0,l=F.length;i<l;i++){F[i].resetEnabled();
}}else{for(var i=0,l=F.length;i<l;i++){F[i].setEnabled(D);
}}},_applyAllowEmptySelection:function(G,H){if(!G&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var I=this.getSelection()[0];
var K=this.__jz;
var J=K.indexOf(I);

if(J==-1){return;
}var i=0;
var length=K.length;
if(this.getWrap()){J=(J+1)%length;
}else{J=Math.min(J+1,length-1);
}
while(i<length&&!K[J].getEnabled()){J=(J+1)%length;
i++;
}this.setSelection([K[J]]);
},selectPrevious:function(){var L=this.getSelection()[0];
var N=this.__jz;
var M=N.indexOf(L);

if(M==-1){return;
}var i=0;
var length=N.length;
if(this.getWrap()){M=(M-1+length)%length;
}else{M=Math.max(M-1,0);
}
while(i<length&&!N[M].getEnabled()){M=(M-1+length)%length;
i++;
}this.setSelection([N[M]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},_isItemSelectable:function(O){return this.__jz.indexOf(O)!=-1;
},__jA:function(e){var Q=e.getData()[0];
var P=e.getOldData()[0];

if(P){P.setValue(false);
}
if(Q){Q.setValue(true);
}}},destruct:function(){this._disposeArray(f);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
this._registerEventChaining(i,j,name);
},_registerEventChaining:function(k,l,name){if((k instanceof qx.core.Object)&&qx.Class.hasMixin(k.constructor,qx.data.marshal.MEventBubbling)){var m=qx.lang.Function.bind(this.__jB,this,name);
var n=k.addListener(c,m,this);
k.setUserData(d,n);
}if(l!=null&&l.getUserData&&l.getUserData(d)!=null){l.removeListenerById(l.getUserData(d));
}},__jB:function(name,e){var v=e.getData();
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
(function(){var n="change",m="changeBubble",l="add",k="remove",j="0-",h="order",g="-",f="0",e="qx.event.type.Data",d="",a="qx.data.Array",c="number",b="changeLength";
qx.Class.define(a,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(o){qx.core.Object.call(this);
if(o==undefined){this.__jC=[];
}else if(arguments.length>1){this.__jC=[];

for(var i=0;i<arguments.length;i++){this.__jC.push(arguments[i]);
}}else if(typeof o==c){this.__jC=new Array(o);
}else if(o instanceof Array){this.__jC=qx.lang.Array.clone(o);
}else{this.__jC=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__jC.length;i++){this._applyEventPropagation(this.__jC[i],null,i);
}this.__jD();
},events:{"change":e,"changeLength":e},members:{__jC:null,concat:function(p){if(p){var q=this.__jC.concat(p);
}else{var q=this.__jC.concat();
}return new qx.data.Array(q);
},join:function(r){return this.__jC.join(r);
},pop:function(){var s=this.__jC.pop();
this.__jD();
this._registerEventChaining(null,s,this.length-1);
this.fireDataEvent(m,{value:[],name:this.length,old:[s]});
this.fireDataEvent(n,{start:this.length-1,end:this.length-1,type:k,items:[s]},null);
return s;
},push:function(t){for(var i=0;i<arguments.length;i++){this.__jC.push(arguments[i]);
this.__jD();
this._registerEventChaining(arguments[i],null,this.length-1);
this.fireDataEvent(m,{value:[arguments[i]],name:this.length-1,old:[]});
this.fireDataEvent(n,{start:this.length-1,end:this.length-1,type:l,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){if(this.length==0){return;
}var u=this.__jC.concat();
this.__jC.reverse();
this.fireDataEvent(n,{start:0,end:this.length-1,type:h,items:null},null);
this.fireDataEvent(m,{value:this.__jC,name:j+(this.__jC.length-1),old:u});
},shift:function(){if(this.length==0){return;
}var v=this.__jC.shift();
this.__jD();
this._registerEventChaining(null,v,this.length-1);
this.fireDataEvent(m,{value:[],name:f,old:[v]});
this.fireDataEvent(n,{start:0,end:this.length-1,type:k,items:[v]},null);
return v;
},slice:function(w,x){return new qx.data.Array(this.__jC.slice(w,x));
},splice:function(y,z,A){var I=this.__jC.length;
var E=this.__jC.splice.apply(this.__jC,arguments);
if(this.__jC.length!=I){this.__jD();
}var G=z>0;
var C=arguments.length>2;
var D=null;

if(G||C){if(this.__jC.length>I){var H=l;
}else if(this.__jC.length<I){var H=k;
D=E;
}else{var H=h;
}this.fireDataEvent(n,{start:y,end:this.length-1,type:H,items:D},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,y+i);
}var F=[];

for(var i=2;i<arguments.length;i++){F[i-2]=arguments[i];
}var B=(y+Math.max(arguments.length-3,z-1));
var name=y==B?B:y+g+B;
this.fireDataEvent(m,{value:F,name:name,old:E});
for(var i=0;i<E.length;i++){this._registerEventChaining(null,E[i],i);
}return (new qx.data.Array(E));
},sort:function(J){if(this.length==0){return;
}var K=this.__jC.concat();
this.__jC.sort.apply(this.__jC,arguments);
this.fireDataEvent(n,{start:0,end:this.length-1,type:h,items:null},null);
this.fireDataEvent(m,{value:this.__jC,name:j+(this.length-1),old:K});
},unshift:function(L){for(var i=arguments.length-1;i>=0;i--){this.__jC.unshift(arguments[i]);
this.__jD();
this._registerEventChaining(arguments[i],null,0);
this.fireDataEvent(m,{value:[this.__jC[0]],name:f,old:[this.__jC[1]]});
this.fireDataEvent(n,{start:0,end:this.length-1,type:l,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__jC;
},getItem:function(M){return this.__jC[M];
},setItem:function(N,O){var P=this.__jC[N];
if(P===O){return;
}this.__jC[N]=O;
this._registerEventChaining(O,P,N);
if(this.length!=this.__jC.length){this.__jD();
}this.fireDataEvent(m,{value:[O],name:N,old:[P]});
this.fireDataEvent(n,{start:N,end:N,type:l,items:[O]},null);
},getLength:function(){return this.length;
},indexOf:function(Q){return this.__jC.indexOf(Q);
},toString:function(){if(this.__jC!=null){return this.__jC.toString();
}return d;
},contains:function(R){return this.__jC.indexOf(R)!==-1;
},copy:function(){return this.concat();
},insertAt:function(S,T){this.splice(S,0,T);
},insertBefore:function(U,V){var W=this.indexOf(U);

if(W==-1){this.push(V);
}else{this.splice(W,0,V);
}},insertAfter:function(X,Y){var ba=this.indexOf(X);

if(ba==-1||ba==(this.length-1)){this.push(Y);
}else{this.splice(ba+1,0,Y);
}},removeAt:function(bb){return this.splice(bb,1).getItem(0);
},removeAll:function(){for(var i=0;i<this.__jC.length;i++){this._registerEventChaining(null,this.__jC[i],i);
}if(this.getLength()==0){return;
}var bd=this.getLength();
var bc=this.__jC.concat();
this.__jC.length=0;
this.__jD();
this.fireDataEvent(m,{value:[],name:j+(bd-1),old:bc});
this.fireDataEvent(n,{start:0,end:bd-1,type:k,items:bc},null);
},append:function(be){if(be instanceof qx.data.Array){be=be.toArray();
}{};
Array.prototype.push.apply(this.__jC,be);
for(var i=0;i<be.length;i++){this._registerEventChaining(be[i],null,this.__jC.length+i);
}var bf=this.length;
this.__jD();
this.fireDataEvent(m,{value:be,name:bf==(this.length-1)?bf:bf+g+(this.length-1),old:[]});
this.fireDataEvent(n,{start:bf,end:this.length-1,type:l,items:be},null);
},remove:function(bg){var bh=this.indexOf(bg);

if(bh!=-1){this.splice(bh,1);
return bg;
}},equals:function(bi){if(this.length!==bi.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==bi.getItem(i)){return false;
}}return true;
},sum:function(){var bj=0;

for(var i=0;i<this.length;i++){bj+=this.getItem(i);
}return bj;
},max:function(){var bk=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>bk){bk=this.getItem(i);
}}return bk===undefined?null:bk;
},min:function(){var bl=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bl){bl=this.getItem(i);
}}return bl===undefined?null:bl;
},forEach:function(bm,bn){for(var i=0;i<this.__jC.length;i++){bm.call(bn,this.__jC[i]);
}},__jD:function(){var bo=this.length;
this.length=this.__jC.length;
this.fireDataEvent(b,this.length,bo);
}},destruct:function(){for(var i=0;i<this.__jC.length;i++){this._applyEventPropagation(null,this.__jC[i],i);
}this.__jC=null;
}});
})();
(function(){var g="__jF",f="Boolean",e="qx.ui.core.SingleSelectionManager",d="__jG",c="__jE",b="changeSelected",a="qx.event.type.Data";
qx.Class.define(e,{extend:qx.core.Object,construct:function(h){qx.core.Object.call(this);
{};
this.__jE=h;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:f,init:true,apply:d}},members:{__jF:null,__jE:null,getSelected:function(){return this.__jF;
},setSelected:function(j){if(!this.__jI(j)){throw new Error("Could not select "+j+", because it is not a child element!");
}this.__jH(j);
},resetSelected:function(){this.__jH(null);
},isSelected:function(k){if(!this.__jI(k)){throw new Error("Could not check if "+k+" is selected,"+" because it is not a child element!");
}return this.__jF===k;
},isSelectionEmpty:function(){return this.__jF==null;
},getSelectables:function(l){var m=this.__jE.getItems();
var n=[];

for(var i=0;i<m.length;i++){if(this.__jE.isItemSelectable(m[i])){n.push(m[i]);
}}if(!l){for(var i=n.length-1;i>=0;i--){if(!n[i].getEnabled()){n.splice(i,1);
}}}return n;
},__jG:function(o,p){if(!o){this.__jH(this.__jF);
}},__jH:function(q){var t=this.__jF;
var s=q;

if(s!=null&&t===s){return;
}
if(!this.isAllowEmptySelection()&&s==null){var r=this.getSelectables(true)[0];

if(r){s=r;
}}this.__jF=s;
this.fireDataEvent(b,s,t);
},__jI:function(u){var v=this.__jE.getItems();

for(var i=0;i<v.length;i++){if(v[i]===u){return true;
}}return false;
}},destruct:function(){if(this.__jE.toHashCode){this._disposeObjects(c);
}else{this.__jE=null;
}this._disposeObjects(g);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__oM:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__oM(c);
},hasChildren:function(){return this.__oM(f);
},add:function(r,s){return this.__oM(j,r,s);
},remove:function(t){return this.__oM(a,t);
},removeAll:function(){return this.__oM(d);
},indexOf:function(u){return this.__oM(l,u);
},addAt:function(v,w,x){this.__oM(g,v,w,x);
},addBefore:function(y,z,A){this.__oM(i,y,z,A);
},addAfter:function(B,C,D){this.__oM(k,B,C,D);
},removeAt:function(E){this.__oM(e,E);
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var q="horizontal",p="scrollpane",o="vertical",n="button-backward",m="button-forward",l="content",k="execute",j="qx.ui.container.SlideBar",i="scrollY",h="removeChildWidget",c="scrollX",g="_applyOrientation",f="mousewheel",b="Integer",a="slidebar",d="update";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(r){qx.ui.core.Widget.call(this);
var s=this.getChildControl(p);
this._add(s,{flex:1});

if(r!=null){this.setOrientation(r);
}else{this.initOrientation();
}this.addListener(f,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:a},orientation:{check:[q,o],init:q,apply:g},scrollStep:{check:b,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(l);
},_createChildControlImpl:function(t,u){var v;

switch(t){case m:v=new qx.ui.form.RepeatButton;
v.addListener(k,this._onExecuteForward,this);
v.setFocusable(false);
this._addAt(v,2);
break;
case n:v=new qx.ui.form.RepeatButton;
v.addListener(k,this._onExecuteBackward,this);
v.setFocusable(false);
this._addAt(v,0);
break;
case l:v=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){v.addListener(h,this._onRemoveChild,this);
}this.getChildControl(p).add(v);
break;
case p:v=new qx.ui.core.scroll.ScrollPane();
v.addListener(d,this._onResize,this);
v.addListener(c,this._onScroll,this);
v.addListener(i,this._onScroll,this);
break;
}return v||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,t);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(w){var x=this.getChildControl(p);

if(this.getOrientation()===q){x.scrollByX(w);
}else{x.scrollByY(w);
}},scrollTo:function(y){var z=this.getChildControl(p);

if(this.getOrientation()===q){z.scrollToX(y);
}else{z.scrollToY(y);
}},_applyOrientation:function(A,B){var E=[this.getLayout(),this._getLayout()];
var D=this.getChildControl(m);
var C=this.getChildControl(n);
if(B==o){D.removeState(o);
C.removeState(o);
D.addState(q);
C.addState(q);
}else if(B==q){D.removeState(q);
C.removeState(q);
D.addState(o);
C.addState(o);
}
if(A==q){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(E[0]){E[0].dispose();
}
if(E[1]){E[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(p).getChildren()[0];

if(!content){return;
}var F=this.getInnerSize();
var H=content.getBounds();
var G=(this.getOrientation()===q)?H.width>F.width:H.height>F.height;

if(G){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(p).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var J=this.getChildControl(p);

if(this.getOrientation()===q){var I=J.getScrollX();
var K=J.getScrollMaxX();
}else{var I=J.getScrollY();
var K=J.getScrollMaxY();
}this.getChildControl(n).setEnabled(I>0);
this.getChildControl(m).setEnabled(I<K);
},_showArrows:function(){this._showChildControl(m);
this._showChildControl(n);
},_hideArrows:function(){this._excludeChildControl(m);
this._excludeChildControl(n);
this.scrollTo(0);
}}});
})();
(function(){var d="_applyDynamic",c="changeSelection",b="Boolean",a="qx.ui.container.Stack";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(c,this.__sw,this);
},properties:{dynamic:{check:b,init:false,apply:d}},members:{_applyDynamic:function(f){var h=this._getChildren();
var g=this.getSelection()[0];
var j;

for(var i=0,l=h.length;i<l;i++){j=h[i];

if(j!=g){if(f){h[i].exclude();
}else{h[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(k){return true;
},__sw:function(e){var m=e.getOldData()[0];
var n=e.getData()[0];

if(m){if(this.isDynamic()){m.exclude();
}else{m.hide();
}}
if(n){n.show();
}},add:function(o){this._add(o);
var p=this.getSelection()[0];

if(!p){this.setSelection([o]);
}else if(p!==o){if(this.isDynamic()){o.exclude();
}else{o.hide();
}}},remove:function(q){this._remove(q);

if(this.getSelection()[0]===q){var r=this._getChildren()[0];

if(r){this.setSelection([r]);
}else{this.resetSelection();
}}},indexOf:function(s){return this._indexOf(s);
},getChildren:function(){return this._getChildren();
},previous:function(){var v=this.getSelection()[0];
var t=this._indexOf(v)-1;
var w=this._getChildren();

if(t<0){t=w.length-1;
}var u=w[t];
this.setSelection([u]);
},next:function(){var y=this.getSelection()[0];
var x=this._indexOf(y)+1;
var z=this._getChildren();
var A=z[x]||z[0];
this.setSelection([A]);
}}});
})();
(function(){var l="button",k="",j="close",i="String",h="_applyIcon",g="page",f="qx.event.type.Event",e="_applyShowCloseButton",d="tabview-page",c="qx.ui.tabview.Page",a="_applyLabel",b="Boolean";
qx.Class.define(c,{extend:qx.ui.container.Composite,construct:function(m,n){qx.ui.container.Composite.call(this);
this._createChildControl(l);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setIcon(n);
}},events:{"close":f},properties:{appearance:{refine:true,init:d},label:{check:i,init:k,apply:a},icon:{check:i,init:k,apply:h},showCloseButton:{check:b,init:false,apply:e}},members:{_forwardStates:{barTop:1,barRight:1,barBottom:1,barLeft:1,firstTab:1,lastTab:1},_applyIcon:function(o,p){this.getChildControl(l).setIcon(o);
},_applyLabel:function(q,r){this.getChildControl(l).setLabel(q);
},_applyEnabled:function(s,t){qx.ui.container.Composite.prototype._applyEnabled.call(this,s,t);
var u=this.getChildControl(l);
s==null?u.resetEnabled():u.setEnabled(s);
},_createChildControlImpl:function(v,w){var x;

switch(v){case l:x=new qx.ui.tabview.TabButton;
x.setAllowGrowX(true);
x.setAllowGrowY(true);
x.setUserData(g,this);
x.addListener(j,this._onButtonClose,this);
break;
}return x||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,v);
},_applyShowCloseButton:function(y,z){this.getChildControl(l).setShowCloseButton(y);
},_onButtonClose:function(){this.fireEvent(j);
},getButton:function(){return this.getChildControl(l);
}}});
})();
(function(){var m="changeValue",l="focused",k="selected",j="hovered",i="demobrowser.demo.ui.overview.MControls",h="Hovered",g=")",f="Invalid (",d="Focused",c="Disabled",a="Selected",b="Invalid";
qx.Mixin.define(i,{members:{_initControls:function(n,o){o=o||{};
var s=new qx.ui.container.Composite;
s.setLayout(new qx.ui.layout.HBox(10));
this.add(s);

if(o.disabled){var p=new qx.ui.form.ToggleButton(c);
p.addListener(m,function(e){n.forEach(function(v,w){if(v.setEnabled){v.setEnabled(!e.getData());
}});
},this);
s.add(p);
}
if(o.hovered){var u=new qx.ui.form.ToggleButton(h);
u.addListener(m,function(e){n.forEach(function(x,y){if(!x.hasState(j)){x.addState(j);
}else{x.removeState(j);
}});
},this);
s.add(u);
}
if(o.selected){var q=new qx.ui.form.ToggleButton(a);
q.addListener(m,function(e){n.forEach(function(z,A){if(!z.hasState(k)){z.addState(k);
}else{z.removeState(k);
}});
},this);
s.add(q);
}
if(o.focused){var r=new qx.ui.form.ToggleButton(d);
r.addListener(m,function(e){n.forEach(function(B,C){if(!B.hasState(l)){B.addState(l);
}else{B.removeState(l);
}});
},this);
s.add(r);
}
if(o.invalid){var t=new qx.ui.form.ToggleButton(b);
t.addListener(m,function(e){n.forEach(function(D,E){if(D.setInvalidMessage&&D.setValid){D.setInvalidMessage(f+E+g);
D.setValid(!e.getData());
}});
},this);
s.add(t);
}}}});
})();
(function(){var g="icon/32/status/dialog-information.png",f="Label",e="demobrowser.demo.ui.overview.pages.Basic",d="Basic",c="middle",b="Image",a="Atom";
qx.Class.define(e,{extend:qx.ui.tabview.Page,include:demobrowser.demo.ui.overview.MControls,construct:function(){qx.ui.tabview.Page.call(this);
this.setLabel(d);
this.setLayout(new qx.ui.layout.Canvas());
this.__QX=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
this.add(this.__QX,{top:40});
this._initWidgets();
this._initControls(this.__QY,{disabled:true});
},members:{__QY:null,__QX:null,_initWidgets:function(){var h=this.__QY=new qx.type.Array();
var k=new qx.ui.basic.Label(f).set({alignY:c});
h.push(k);
this.__QX.add(k);
var i=new qx.ui.basic.Atom(b,g);
h.push(i);
this.__QX.add(i);
var j=new qx.ui.basic.Atom(a,g);
h.push(j);
this.__QX.add(j);
}}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var o="checked",n="keypress",m="Boolean",l="Right",k="_applyValue",j="changeValue",i="qx.ui.form.RadioButton",h="radiobutton",g="Left",f="qx.ui.form.RadioGroup",b="Down",d="_applyGroup",c="Up",a="execute";
qx.Class.define(i,{extend:qx.ui.form.Button,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IForm,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(p){{};
qx.ui.form.Button.call(this,p);
this.addListener(a,this._onExecute);
this.addListener(n,this._onKeyPress);
},properties:{group:{check:f,nullable:true,apply:d},value:{check:m,nullable:true,event:j,apply:k,init:false},appearance:{refine:true,init:h},allowGrowX:{refine:true,init:false}},members:{_applyValue:function(q,r){q?this.addState(o):this.removeState(o);

if(q&&this.getFocusable()){this.focus();
}},_applyGroup:function(s,t){if(t){t.remove(this);
}
if(s){s.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onKeyPress:function(e){var u=this.getGroup();

if(!u){return;
}
switch(e.getKeyIdentifier()){case g:case c:u.selectPrevious();
break;
case l:case b:u.selectNext();
break;
}}}});
})();
(function(){var o="close-button",n="middle",m="left",l="icon",k="label",j="right",i="click",h="Boolean",g="bottom",f="qx.ui.tabview.TabButton",c="center",e="_applyShowCloseButton",d="top",b="close",a="qx.event.type.Data";
qx.Class.define(f,{extend:qx.ui.form.RadioButton,implement:qx.ui.form.IRadioItem,construct:function(){qx.ui.form.RadioButton.call(this);
var p=new qx.ui.layout.Grid(2,0);
p.setRowAlign(0,m,n);
p.setColumnAlign(0,j,n);
this._getLayout().dispose();
this._setLayout(p);
this.initShowCloseButton();
},events:{"close":a},properties:{showCloseButton:{check:h,init:false,apply:e}},members:{_forwardStates:{focused:true,checked:true},_applyIconPosition:function(q,r){var s={icon:this.getChildControl(l),label:this.getChildControl(k),closeButton:this.getShowCloseButton()?this.getChildControl(o):null};
for(var t in s){if(s[t]){this._remove(s[t]);
}}
switch(q){case d:this._add(s.label,{row:3,column:2});
this._add(s.icon,{row:1,column:2});

if(s.closeButton){this._add(s.closeButton,{row:0,column:4});
}break;
case g:this._add(s.label,{row:1,column:2});
this._add(s.icon,{row:3,column:2});

if(s.closeButton){this._add(s.closeButton,{row:0,column:4});
}break;
case m:this._add(s.label,{row:0,column:2});
this._add(s.icon,{row:0,column:0});

if(s.closeButton){this._add(s.closeButton,{row:0,column:4});
}break;
case j:this._add(s.label,{row:0,column:0});
this._add(s.icon,{row:0,column:2});

if(s.closeButton){this._add(s.closeButton,{row:0,column:4});
}break;
}},_createChildControlImpl:function(u,v){var w;

switch(u){case k:var w=new qx.ui.basic.Label(this.getLabel());
w.setAnonymous(true);
this._add(w,{row:0,column:2});
this._getLayout().setColumnFlex(2,1);
break;
case l:w=new qx.ui.basic.Image(this.getIcon());
w.setAnonymous(true);
this._add(w,{row:0,column:0});
break;
case o:w=new qx.ui.form.Button();
w.addListener(i,this._onCloseButtonClick,this);
this._add(w,{row:0,column:4});

if(!this.getShowCloseButton()){w.exclude();
}break;
}return w||qx.ui.form.RadioButton.prototype._createChildControlImpl.call(this,u);
},_onCloseButtonClick:function(){this.fireDataEvent(b,this);
},_applyShowCloseButton:function(x,y){if(x){this._showChildControl(o);
}else{this._excludeChildControl(o);
}},_applyCenter:function(z){var A=this._getLayout();

if(z){A.setColumnAlign(2,c,n);
}else{A.setColumnAlign(2,m,n);
}}}});
})();
(function(){var k="pressed",j="abandoned",i="hovered",h="Boolean",g="Space",f="undetermined",d="Enter",c="checked",b="mousedown",a="_applyTriState",w="mouseout",v="changeValue",u="keydown",t="_applyGroup",s="button",r="execute",q="qx.ui.form.RadioGroup",p="_applyValue",o="qx.ui.form.ToggleButton",n="mouseover",l="keyup",m="mouseup";
qx.Class.define(o,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable,qx.ui.form.IRadioItem],construct:function(x,y){qx.ui.basic.Atom.call(this,x,y);
this.addListener(n,this._onMouseOver);
this.addListener(w,this._onMouseOut);
this.addListener(b,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(u,this._onKeyDown);
this.addListener(l,this._onKeyUp);
this.addListener(r,this._onExecute,this);
},properties:{appearance:{refine:true,init:s},focusable:{refine:true,init:true},value:{check:h,nullable:true,event:v,apply:p,init:false},group:{check:q,nullable:true,apply:t},triState:{check:h,apply:a,nullable:true,init:null}},members:{_applyGroup:function(z,A){if(A){A.remove(this);
}
if(z){z.add(this);
}},_applyValue:function(B,C){B?this.addState(c):this.removeState(c);

if(this.isTriState()){if(B===null){this.addState(f);
}else if(C===null){this.removeState(f);
}}},_applyTriState:function(D,E){this._applyValue(this.getValue());
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(i);

if(this.hasState(j)){this.removeState(j);
this.addState(k);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(i);

if(this.hasState(k)){if(!this.getValue()){this.removeState(k);
}this.addState(j);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(j);
this.addState(k);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(j)){this.removeState(j);
}else if(this.hasState(k)){this.execute();
}this.removeState(k);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case d:case g:this.removeState(j);
this.addState(k);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(k)){return;
}
switch(e.getKeyIdentifier()){case d:case g:this.removeState(j);
this.execute();
this.removeState(k);
e.stopPropagation();
}}}});
})();
(function(){var f="mshtml",e="pop.push.reverse.shift.sort.splice.unshift.join.slice",d="number",c="qx.type.BaseArray",b="qx.client",a=".";
qx.Class.define(c,{extend:Array,construct:function(g){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function k(l){if(qx.core.Variant.isSet(b,f)){j.prototype={length:0,$$isArray:true};
var o=e.split(a);

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
}function j(length){if(arguments.length===1&&typeof length===d){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function h(){}h.prototype=[];
j.prototype=new h;
j.prototype.length=0;
qx.type.BaseArray=k(j);
})();
})();
(function(){var a="qx.type.Array";
qx.Class.define(a,{extend:qx.type.BaseArray,members:{clone:qx.type.BaseArray.prototype.concat,insertAt:function(b,i){this.splice(i,0,b);
return this;
},insertBefore:function(c,d){var i=this.indexOf(d);

if(i==-1){this.push(c);
}else{this.splice(i,0,c);
}return this;
},insertAfter:function(e,f){var i=this.indexOf(f);

if(i==-1||i==(this.length-1)){this.push(e);
}else{this.splice(i+1,0,e);
}return this;
},removeAt:function(i){return this.splice(i,1)[0];
},removeAll:function(){this.length=0;
return this;
},append:function(g){{};
var h=g;
if(g instanceof qx.type.Array){h=[];

for(var i=0;i<g.length;i++){h[i]=g[i];
}}Array.prototype.push.apply(this,h);
return this;
},remove:function(j){var i=this.indexOf(j);

if(i!=-1){this.splice(i,1);
return j;
}},contains:function(k){return this.indexOf(k)!==-1;
}}});
})();
(function(){var g="ColorSelector",f="ColorPopup",e="demobrowser.demo.ui.overview.pages.Control",d="Open Color Popup",c="Control",b="DateChooser",a="execute";
qx.Class.define(e,{extend:qx.ui.tabview.Page,include:demobrowser.demo.ui.overview.MControls,construct:function(){qx.ui.tabview.Page.call(this);
this.setLabel(c);
this.setLayout(new qx.ui.layout.Canvas());
this.__Ra=new qx.ui.container.Composite(new qx.ui.layout.VBox(20));
this.add(this.__Ra,{top:40});
this._initWidgets();
this._initControls(this.__Rb,{disabled:true});
},members:{__Rb:null,__Ra:null,_initWidgets:function(){var m=this.__Rb=new qx.type.Array();
var k;
k=new qx.ui.basic.Label(g);
var l=new qx.ui.control.ColorSelector();
m.push(l);
this.__Ra.add(k);
this.__Ra.add(l);
k=new qx.ui.basic.Label(f);
var h=new qx.ui.control.ColorPopup();
h.exclude();
var i=new qx.ui.form.Button(d).set({maxWidth:150});
m.push(i);
this.__Ra.add(k);
this.__Ra.add(i);
i.addListener(a,function(){h.placeToWidget(i);
h.show();
});
var j=new qx.ui.control.DateChooser().set({maxWidth:200});
k=new qx.ui.basic.Label(b);
m.push(j);
this.__Ra.add(k);
this.__Ra.add(j);
}}});
})();
(function(){var b="qx.ui.form.IColorForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var p="brightness-handle",o="hue-saturation-handle",n="hsbSpinner",m="changeValue",l="rgbSpinner",k="hexField",h="brightness-field",g="mousedown",f="hueSaturationField",d="hsb-spinner-saturation",bv="hue-saturation-field",bu="hsb-spinner-brightness",bt="rgb-spinner-red",bs="preview-content-new",br="preview-content-old",bq="hue-saturation-pane",bp="rgb-spinner-green",bo="rgb-spinner-blue",bn="hex-field",bm="hsb-spinner-hue",w="Integer",x="#",u="middle",v="brightnessField",s="Number",t="brightness-pane",q="redModifier",r="blueModifier",E="visual-pane",F="input-field-set",R="mousewheel",N="qx.event.type.Event",ba="mousemove",U="preview-field-set",bi="preset-grid",bf="saturationModifier",J="hex-field-composite",bl="hueModifier",bk="control-pane",bj="rgb-spinner-composite",I="mouseup",L="hsb-spinner-composite",M="greenModifier",P="preset-field-set",S="brightnessModifier",V="control-bar",bc="_applyBlue",bh="Hex",y="Presets",z="colorbucket",K="qx.event.type.Data",Y="Details",X="decoration/colorselector/brightness-handle.gif",W="_applyBrightness",be="_applyHue",bd="decoration/colorselector/huesaturation-handle.gif",T="Visual",bb="_applyGreen",a="colorselector",bg="colorbucket#",A="appear",B="RGB",O="_applySaturation",b="Preview (Old/New)",c="qx.ui.control.ColorSelector",H="HSB",C="FFFFFF",D="decoration/colorselector/huesaturation-field.jpg",G="decoration/colorselector/brightness-field.png",Q="_applyRed";
qx.Class.define(c,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IColorForm],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(V);
this.addListener(A,this._onAppear,this);
},events:{"dialogok":N,"dialogcancel":N,"changeValue":K},properties:{appearance:{refine:true,init:a},red:{check:w,init:255,apply:Q},green:{check:w,init:255,apply:bb},blue:{check:w,init:255,apply:bc},hue:{check:s,init:0,apply:be},saturation:{check:s,init:0,apply:O},brightness:{check:s,init:100,apply:W}},members:{__GI:null,__GJ:["maroon","red","orange","yellow","olive","purple","fuchsia","lime","green","navy","blue","aqua","teal","black","#333","#666","#999","#BBB","#EEE","white"],__GK:"",__GL:0,__GM:0,__GN:0,__GO:true,__GP:false,_createChildControlImpl:function(bw,bx){var by;

switch(bw){case V:by=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
by.add(this.getChildControl(bk));
by.add(this.getChildControl(E));
this._add(by);
break;
case E:by=new qx.ui.groupbox.GroupBox(this.tr(T));
by.setLayout(new qx.ui.layout.HBox(10));
by.add(this.getChildControl(bq));
by.add(this.getChildControl(t));
break;
case bk:by=new qx.ui.container.Composite(new qx.ui.layout.VBox(12));
by.add(this.getChildControl(P));
by.add(this.getChildControl(F));
by.add(this.getChildControl(U),{flex:1});
break;
case bq:by=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
by.setAllowGrowY(false);
by.addListener(R,this._onHueSaturationPaneMouseWheel,this);
by.add(this.getChildControl(bv));
by.add(this.getChildControl(o),{left:0,top:256});
break;
case bv:by=new qx.ui.basic.Image(D);
by.addListener(g,this._onHueSaturationFieldMouseDown,this);
break;
case o:by=new qx.ui.basic.Image(bd);
by.addListener(g,this._onHueSaturationFieldMouseDown,this);
by.addListener(I,this._onHueSaturationHandleMouseUp,this);
by.addListener(ba,this._onHueSaturationHandleMouseMove,this);
break;
case t:by=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
by.setAllowGrowY(false);
by.addListener(R,this._onBrightnessPaneMouseWheel,this);
by.add(this.getChildControl(h));
by.add(this.getChildControl(p));
break;
case h:by=new qx.ui.basic.Image(G);
by.addListener(g,this._onBrightnessFieldMouseDown,this);
break;
case p:by=new qx.ui.basic.Image(X);
by.addListener(g,this._onBrightnessHandleMouseDown,this);
by.addListener(I,this._onBrightnessHandleMouseUp,this);
by.addListener(ba,this._onBrightnessHandleMouseMove,this);
break;
case P:by=new qx.ui.groupbox.GroupBox(this.tr(y));
by.setLayout(new qx.ui.layout.Grow());
by.add(this.getChildControl(bi));
break;
case z:by=new qx.ui.core.Widget();
by.addListener(g,this._onColorFieldClick,this);
break;
case bi:bD=new qx.ui.layout.Grid(3,3);
by=new qx.ui.container.Composite(bD);
var bE;
var bC;

for(var i=0;i<2;i++){for(var j=0;j<10;j++){bC=i*10+j;
bE=this.getChildControl(bg+bC);
bE.setBackgroundColor(this.__GJ[bC]);
by.add(bE,{column:j,row:i});
}}break;
case F:by=new qx.ui.groupbox.GroupBox(this.tr(Y));
var bD=new qx.ui.layout.VBox();
bD.setSpacing(10);
by.setLayout(bD);
by.add(this.getChildControl(J));
by.add(this.getChildControl(bj));
by.add(this.getChildControl(L));
break;
case U:by=new qx.ui.groupbox.GroupBox(this.tr(b));
var bD=new qx.ui.layout.HBox(10);
by.setLayout(bD);
by.add(this.getChildControl(br),{flex:1});
by.add(this.getChildControl(bs),{flex:1});
break;
case J:var bB=new qx.ui.layout.HBox(4);
bB.setAlignY(u);
by=new qx.ui.container.Composite(bB);
var bG=new qx.ui.basic.Label(this.tr(bh));
by.add(bG);
var bF=new qx.ui.basic.Label(x);
by.add(bF);
by.add(this.getChildControl(bn));
break;
case bn:by=new qx.ui.form.TextField(C);
by.setMaxLength(6);
by.setFilter(/[0-9A-Fa-f]/);
by.setWidth(55);
by.addListener(m,this._onHexFieldChange,this);
break;
case bj:var bB=new qx.ui.layout.HBox(4);
bB.setAlignY(u);
by=new qx.ui.container.Composite(bB);
var bz=new qx.ui.basic.Label(this.tr(B));
bz.setWidth(25);
by.add(bz);
by.add(this.getChildControl(bt));
by.add(this.getChildControl(bp));
by.add(this.getChildControl(bo));
break;
case bt:by=new qx.ui.form.Spinner(0,255,255);
by.setWidth(50);
by.addListener(m,this._setRedFromSpinner,this);
break;
case bp:by=new qx.ui.form.Spinner(0,255,255);
by.setWidth(50);
by.addListener(m,this._setGreenFromSpinner,this);
break;
case bo:by=new qx.ui.form.Spinner(0,255,255);
by.setWidth(50);
by.addListener(m,this._setBlueFromSpinner,this);
break;
case L:var bB=new qx.ui.layout.HBox(4);
bB.setAlignY(u);
by=new qx.ui.container.Composite(bB);
var bA=new qx.ui.basic.Label(this.tr(H));
bA.setWidth(25);
by.add(bA);
by.add(this.getChildControl(bm));
by.add(this.getChildControl(d));
by.add(this.getChildControl(bu));
break;
case bm:by=new qx.ui.form.Spinner(0,0,360);
by.setWidth(50);
by.addListener(m,this._setHueFromSpinner,this);
break;
case d:by=new qx.ui.form.Spinner(0,0,100);
by.setWidth(50);
by.addListener(m,this._setSaturationFromSpinner,this);
break;
case bu:by=new qx.ui.form.Spinner(0,100,100);
by.setWidth(50);
by.addListener(m,this._setBrightnessFromSpinner,this);
break;
case br:by=new qx.ui.core.Widget();
break;
case bs:by=new qx.ui.core.Widget();
break;
}return by||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bw);
},setValue:function(bH){var bI;

if(bH==null){this.__GO=true;
bI=[255,255,255];
}else{bI=qx.util.ColorUtil.stringToRgb(bH);
this.__GO=false;
}this.__GP=true;
this.setRed(bI[0]);
this.setGreen(bI[1]);
this.__GP=false;
this.setBlue(bI[2]);
},getValue:function(){return this.__GO?null:x+qx.util.ColorUtil.rgbToHexString([this.getRed(),this.getGreen(),this.getBlue()]);
},resetValue:function(){this.__GO=true;
this.__GP=true;
this.setRed(255);
this.setGreen(255);
this.__GP=false;
this.setBlue(255);
},__GQ:function(){if(!this.__GP){this.__GO=false;
this.fireDataEvent("changeValue",this.getValue());
}},_applyRed:function(bJ,bK){if(this.__GI===null){this.__GI="redModifier";
}
if(this.__GI!==l){this.getChildControl(bt).setValue(bJ);
}
if(this.__GI!==k){this._setHexFromRgb();
}
switch(this.__GI){case l:case k:case q:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__GQ();

if(this.__GI===q){this.__GI=null;
}},_applyGreen:function(bL,bM){if(this.__GI===null){this.__GI="greenModifier";
}
if(this.__GI!==l){this.getChildControl(bp).setValue(bL);
}
if(this.__GI!==k){this._setHexFromRgb();
}
switch(this.__GI){case l:case k:case M:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__GQ();

if(this.__GI===M){this.__GI=null;
}},_applyBlue:function(bN,bO){if(this.__GI===null){this.__GI="blueModifier";
}
if(this.__GI!==l){this.getChildControl(bo).setValue(bN);
}
if(this.__GI!==k){this._setHexFromRgb();
}
switch(this.__GI){case l:case k:case r:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__GQ();

if(this.__GI===r){this.__GI=null;
}},_applyHue:function(bP,bQ){if(this.__GI===null){this.__GI="hueModifier";
}
if(this.__GI!==n){this.getChildControl(bm).setValue(bP);
}
if(this.__GI!==f){if(this.getChildControl(o).getBounds()){this.getChildControl(o).setDomLeft(Math.round(bP/1.40625)+this.getChildControl(bq).getPaddingLeft());
}else{this.getChildControl(o).setLayoutProperties({left:Math.round(bP/1.40625)});
}}
switch(this.__GI){case n:case f:case bl:this._setRgbFromHue();
}this._setBrightnessGradiant();

if(this.__GI===bl){this.__GI=null;
}},_applySaturation:function(bR,bS){if(this.__GI===null){this.__GI="saturationModifier";
}
if(this.__GI!==n){this.getChildControl(d).setValue(bR);
}
if(this.__GI!==f){this._setBrightnessGradiant();

if(this.getChildControl(o).getBounds()){this.getChildControl(o).setDomTop(256-Math.round(bR*2.56)+this.getChildControl(bq).getPaddingTop());
}else{this.getChildControl(o).setLayoutProperties({top:256-Math.round(bR*2.56)});
}}
switch(this.__GI){case n:case f:case bf:this._setRgbFromHue();
}
if(this.__GI===bf){this.__GI=null;
}},_applyBrightness:function(bT,bU){if(this.__GI===null){this.__GI="brightnessModifier";
}
if(this.__GI!==n){this.getChildControl(bu).setValue(bT);
}
if(this.__GI!==v){var bV=256-Math.round(bT*2.56);

if(this.getChildControl(p).getBounds()){this.getChildControl(p).setDomTop(bV+this.getChildControl(t).getPaddingTop());
}else{this.getChildControl(p).setLayoutProperties({top:bV});
}}
switch(this.__GI){case n:case v:case S:this._setRgbFromHue();
}
if(this.__GI===S){this.__GI=null;
}},_onBrightnessHandleMouseDown:function(e){this.getChildControl(p).capture();
this.__GK="brightness-handle";
var bY=this.getChildControl(h).getContainerLocation();
var bX=this.getChildControl(p).getContainerLocation();
var bW=this.getChildControl(h).getBounds();
this.__GL=bY.top+(e.getDocumentTop()-bX.top)-bW.top;
e.stopPropagation();
},_onBrightnessHandleMouseUp:function(e){this.getChildControl(p).releaseCapture();
this.__GK=null;
},_onBrightnessHandleMouseMove:function(e){if(this.__GK===p){this._setBrightnessOnFieldEvent(e);
e.stopPropagation();
}},_onBrightnessFieldMouseDown:function(e){var location=this.getChildControl(h).getContainerLocation();
var ca=this.getChildControl(p).getBounds();
this.__GL=location.top+(ca.height/2);
this._setBrightnessOnFieldEvent(e);
this.getChildControl(p).capture();
this.__GK="brightness-handle";
},_onBrightnessPaneMouseWheel:function(e){this.setBrightness(qx.lang.Number.limit(this.getBrightness()+e.getWheelDelta(),0,100));
e.stop();
},_setBrightnessOnFieldEvent:function(e){var cb=qx.lang.Number.limit(e.getDocumentTop()-this.__GL,0,256);
this.__GI="brightnessField";

if(this.getChildControl(p).getBounds()){this.getChildControl(p).setDomTop(cb);
}else{this.getChildControl(p).setLayoutProperties({top:cb});
}this.setBrightness(100-Math.round(cb/2.56));
this.__GI=null;
},_onHueSaturationHandleMouseUp:function(e){if(this.__GK){e.stopPropagation();
this.getChildControl(o).releaseCapture();
this.__GK=null;
}},_onHueSaturationHandleMouseMove:function(e){if(this.__GK===o){this._setHueSaturationOnFieldEvent(e);
e.stopPropagation();
}},_onHueSaturationFieldMouseDown:function(e){var location=this.getChildControl(bv).getContainerLocation();
var cc=this.getChildControl(o).getBounds();
var cd=this.getChildControl(bv).getBounds();
this.__GM=location.top+(cc.height/2)-cd.top;
this.__GN=location.left+(cc.width/2)-cd.left;
this._setHueSaturationOnFieldEvent(e);
this.getChildControl(o).capture();
this.__GK="hue-saturation-handle";
},_onHueSaturationPaneMouseWheel:function(e){this.setSaturation(qx.lang.Number.limit(this.getSaturation()+e.getWheelDelta(),0,100));
e.stop();
},_setHueSaturationOnFieldEvent:function(e){var cf=qx.lang.Number.limit(e.getDocumentTop()-this.__GM,0,256);
var ce=qx.lang.Number.limit(e.getDocumentLeft()-this.__GN,0,256);
this.getChildControl(o).setDomPosition(ce,cf);
this.__GI="hueSaturationField";
this.setSaturation(100-Math.round(cf/2.56));
this.setHue(Math.round(ce*1.40625));
this.__GI=null;
},_setRedFromSpinner:function(){if(this.__GI!==null){return;
}this.__GI="rgbSpinner";
this.setRed(this.getChildControl(bt).getValue());
this.__GI=null;
},_setGreenFromSpinner:function(){if(this.__GI!==null){return;
}this.__GI="rgbSpinner";
this.setGreen(this.getChildControl(bp).getValue());
this.__GI=null;
},_setBlueFromSpinner:function(){if(this.__GI!==null){return;
}this.__GI="rgbSpinner";
this.setBlue(this.getChildControl(bo).getValue());
this.__GI=null;
},_setHueFromSpinner:function(){if(this.__GI!==null){return;
}this.__GI="hsbSpinner";
this.setHue(this.getChildControl(bm).getValue());
this.__GI=null;
},_setSaturationFromSpinner:function(){if(this.__GI!==null){return;
}this.__GI="hsbSpinner";
this.setSaturation(this.getChildControl(d).getValue());
this.__GI=null;
},_setBrightnessFromSpinner:function(){if(this.__GI!==null){return;
}this.__GI="hsbSpinner";
this.setBrightness(this.getChildControl(bu).getValue());
this.__GI=null;
},_onHexFieldChange:function(e){if(this.__GI!==null){return;
}
try{var ch=this.getChildControl(bn);
var cg=qx.util.ColorUtil.hexStringToRgb(x+ch.getValue());
}catch(ci){return;
}this.__GI="hexField";
this.setRed(cg[0]);
this.setGreen(cg[1]);
this.setBlue(cg[2]);
this.__GI=null;
},_setHexFromRgb:function(){var cj=qx.util.ColorUtil.rgbToHexString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(bn).setValue(cj);
},_onColorFieldClick:function(e){var ck=e.getTarget().getBackgroundColor();

if(!ck){return this.error("Missing backgroundColor value for field: "+e.getTarget());
}var cl=qx.util.ColorUtil.stringToRgb(ck);
this.setRed(cl[0]);
this.setGreen(cl[1]);
this.setBlue(cl[2]);
},_setHueFromRgb:function(){switch(this.__GI){case n:case f:case v:break;
default:var cm=qx.util.ColorUtil.rgbToHsb([this.getRed(),this.getGreen(),this.getBlue()]);
this.setHue(cm[0]);
this.setSaturation(cm[1]);
this.setBrightness(cm[2]);
}},_setRgbFromHue:function(){switch(this.__GI){case l:case k:break;
default:var cn=qx.util.ColorUtil.hsbToRgb([this.getHue(),this.getSaturation(),this.getBrightness()]);
this.setRed(cn[0]);
this.setGreen(cn[1]);
this.setBlue(cn[2]);
}},_setPreviewFromRgb:function(){var co=qx.util.ColorUtil.rgbToRgbString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(bs).setBackgroundColor(co);
},setPreviousColor:function(cp,cq,cr){var cs=qx.util.ColorUtil.rgbToRgbString([cp,cq,cr]);
this.getChildControl(br).setBackgroundColor(cs);
this.setRed(cp);
this.setGreen(cq);
this.setBlue(cr);
},_setBrightnessGradiant:function(){var ct=qx.util.ColorUtil;
var cu=ct.hsbToRgb([this.getHue(),this.getSaturation(),255]);
var cv=ct.rgbToRgbString(cu);
this.getChildControl(h).setBackgroundColor(cv);
},_onAppear:function(e){var cw=qx.util.ColorUtil.rgbToRgbString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(br).setBackgroundColor(cw);
this.getChildControl(bs).setBackgroundColor(cw);
}}});
})();
(function(){var i="legend",h="frame",g="middle",f="top",d="resize",c="qx.ui.groupbox.GroupBox",b="groupbox",a="_applyLegendPosition";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MContentPadding,qx.ui.form.MForm],implement:[qx.ui.form.IForm],construct:function(j,k){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas);
this._createChildControl(h);
this._createChildControl(i);
if(j!=null){this.setLegend(j);
}
if(k!=null){this.setIcon(k);
}},properties:{appearance:{refine:true,init:b},legendPosition:{check:[f,g],init:g,apply:a,themeable:true}},members:{_forwardStates:{invalid:true},_createChildControlImpl:function(l,m){var n;

switch(l){case h:n=new qx.ui.container.Composite();
this._add(n,{left:0,top:6,right:0,bottom:0});
break;
case i:n=new qx.ui.basic.Atom();
n.addListener(d,this._repositionFrame,this);
this._add(n);
break;
}return n||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,l);
},_getContentPaddingTarget:function(){return this.getChildControl(h);
},_applyLegendPosition:function(e){if(this.getChildControl(i).getBounds()){this._repositionFrame();
}},_repositionFrame:function(){var p=this.getChildControl(i);
var o=this.getChildControl(h);
var q=p.getBounds().height;
if(this.getLegendPosition()==g){o.setLayoutProperties({"top":Math.round(q/2)});
}else if(this.getLegendPosition()==f){o.setLayoutProperties({"top":q});
}},getChildrenContainer:function(){return this.getChildControl(h);
},setLegend:function(r){var s=this.getChildControl(i);

if(r!==null){s.setLabel(r);
s.show();
}else{s.exclude();
}},getLegend:function(){return this.getChildControl(i).getLabel();
},setIcon:function(t){this.getChildControl(i).setIcon(t);
},getIcon:function(){this.getChildControl(i).getIcon();
}}});
})();
(function(){var k="showingPlaceholder",j="",i="none",h="qx.client",g="qx.dynlocale",f="Boolean",d="gecko",c="color",b="qx.event.type.Data",a="readonly",bd="placeholder",bc="input",bb="focusin",ba="visibility",Y="focusout",X="changeLocale",W="hidden",V="on",U="absolute",T="readOnly",r="text",s="_applyTextAlign",p="px",q="RegExp",n=")",o="syncAppearance",l="changeValue",m="A",v="change",w="textAlign",E="focused",C="center",L="visible",G="disabled",P="url(",N="off",y="String",S="resize",R="qx.ui.form.AbstractField",Q="transparent",x="spellcheck",A="false",B="right",D="PositiveInteger",F="mshtml",H="abstract",M="block",O="webkit",t="_applyReadOnly",u="_applyPlaceholder",z="left",K="qx/static/blank.gif",J="text-placeholder",I="changeReadOnly";
qx.Class.define(R,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:H,construct:function(be){qx.ui.core.Widget.call(this);
this.__mT=!qx.bom.client.Feature.PLACEHOLDER||(qx.bom.client.Engine.NAME==d&&qx.bom.client.Engine.VERSION==2.0);

if(be!=null){this.setValue(be);
}this.getContentElement().addListener(v,this._onChangeContent,this);
if(this.__mT){this.addListener(o,this._syncPlaceholder,this);
}if(qx.core.Variant.isSet(g,V)){qx.locale.Manager.getInstance().addListener(X,this._onChangeLocale,this);
}},events:{"input":b,"changeValue":b},properties:{textAlign:{check:[z,C,B],nullable:true,themeable:true,apply:s},readOnly:{check:f,apply:t,event:I,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:D,init:Infinity},liveUpdate:{check:f,init:false},placeholder:{check:y,nullable:true,apply:u},filter:{check:q,nullable:true,init:null}},members:{__mU:true,__mV:null,__mW:null,__mX:null,__mT:true,getFocusElement:function(){var bf=this.getContentElement();

if(bf){return bf;
}},_createInputElement:function(){return new qx.html.Input(r);
},renderLayout:function(bg,top,bh,bi){var bj=this._updateInsets;
var bn=qx.ui.core.Widget.prototype.renderLayout.call(this,bg,top,bh,bi);
if(!bn){return;
}var bl=bn.size||bj;
var bo=p;

if(bl||bn.local||bn.margin){var bk=this.getInsets();
var innerWidth=bh-bk.left-bk.right;
var innerHeight=bi-bk.top-bk.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bm=this.getContentElement();
if(bj&&this.__mT){this.__nb().setStyles({"left":bk.left+bo,"top":bk.top+bo});
}
if(bl){if(this.__mT){this.__nb().setStyles({"width":innerWidth+bo,"height":innerHeight+bo});
}bm.setStyles({"width":innerWidth+bo,"height":innerHeight+bo});
this._renderContentElement(innerHeight,bm);
}},_renderContentElement:function(innerHeight,bp){},_createContentElement:function(){var bq=this._createInputElement();
bq.setStyles({"border":i,"padding":0,"margin":0,"display":M,"background":Q,"outline":i,"appearance":i,"position":U,"autoComplete":N});
bq.setSelectable(this.getSelectable());
bq.setEnabled(this.getEnabled());
bq.addListener(bc,this._onHtmlInput,this);
bq.setAttribute(x,A);
if(qx.core.Variant.isSet(h,O)||qx.core.Variant.isSet(h,d)){bq.setStyle(S,i);
}if(qx.core.Variant.isSet(h,F)){bq.setStyles({backgroundImage:P+qx.util.ResourceManager.getInstance().toUri(K)+n});
}return bq;
},_applyEnabled:function(br,bs){qx.ui.core.Widget.prototype._applyEnabled.call(this,br,bs);
this.getContentElement().setEnabled(br);

if(this.__mT){if(br){this._showPlaceholder();
}else{this._removePlaceholder();
}}else{var bt=this.getContentElement();
bt.setAttribute(bd,br?this.getPlaceholder():j);
}},__mY:{width:16,height:16},_getContentHint:function(){return {width:this.__mY.width*10,height:this.__mY.height||16};
},_applyFont:function(bu,bv){var bw;

if(bu){var bx=qx.theme.manager.Font.getInstance().resolve(bu);
bw=bx.getStyles();
}else{bw=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bw);
if(this.__mT){this.__nb().setStyles(bw);
}if(bu){this.__mY=qx.bom.Label.getTextSize(m,bw);
}else{delete this.__mY;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(by,bz){if(by){this.getContentElement().setStyle(c,qx.theme.manager.Color.getInstance().resolve(by));
}else{this.getContentElement().removeStyle(c);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__mY;
},_onHtmlInput:function(e){var bD=e.getData();
var bC=true;
this.__mU=false;
if(this.getFilter()!=null){var bE=j;
var bA=bD.search(this.getFilter());
var bB=bD;

while(bA>=0){bE=bE+(bB.charAt(bA));
bB=bB.substring(bA+1,bB.length);
bA=bB.search(this.getFilter());
}
if(bE!=bD){bC=false;
bD=bE;
this.getContentElement().setValue(bD);
}}if(bD.length>this.getMaxLength()){var bC=false;
this.getContentElement().setValue(bD.substr(0,this.getMaxLength()));
}if(bC){this.fireDataEvent(bc,bD,this.__mX);
this.__mX=bD;
if(this.getLiveUpdate()){this.__na(bD);
}}},__na:function(bF){var bG=this.__mW;
this.__mW=bF;

if(bG!=bF){this.fireNonBubblingEvent(l,qx.event.type.Data,[bF,bG]);
}},setValue:function(bH){if(bH===null){if(this.__mU){return bH;
}bH=j;
this.__mU=true;
}else{this.__mU=false;
if(this.__mT){this._removePlaceholder();
}}
if(qx.lang.Type.isString(bH)){var bJ=this.getContentElement();

if(bH.length>this.getMaxLength()){bH=bH.substr(0,this.getMaxLength());
}
if(bJ.getValue()!=bH){var bK=bJ.getValue();
bJ.setValue(bH);
var bI=this.__mU?null:bH;
this.__mW=bK;
this.__na(bI);
}if(this.__mT){this._showPlaceholder();
}return bH;
}throw new Error("Invalid value type: "+bH);
},getValue:function(){var bL=this.getContentElement().getValue();
return this.__mU?null:bL;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__mU=e.getData()===null;
this.__na(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bM,bN){this.getContentElement().setTextSelection(bM,bN);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bP=this.getValue()||j;
var bO=this.getPlaceholder();

if(bO!=null&&bP==j&&!this.hasState(E)&&!this.hasState(G)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__nb().setStyle(ba,W);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__nb().setStyle(ba,L);
}},__nb:function(){if(this.__mV==null){this.__mV=new qx.html.Label();
var bQ=qx.theme.manager.Color.getInstance();
this.__mV.setStyles({"visibility":W,"zIndex":6,"position":U,"color":bQ.resolve(J)});
this.getContainerElement().add(this.__mV);
}return this.__mV;
},_onChangeLocale:qx.core.Variant.select(g,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bR,bS){if(this.__mT){this.__nb().setValue(bR);

if(bR!=null){this.addListener(bb,this._removePlaceholder,this);
this.addListener(Y,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bb,this._removePlaceholder,this);
this.removeListener(Y,this._showPlaceholder,this);
this._removePlaceholder();
}}else{if(this.getEnabled()){this.getContentElement().setAttribute(bd,bR);
}}},_applyTextAlign:function(bT,bU){this.getContentElement().setStyle(w,bT);
},_applyReadOnly:function(bV,bW){var bX=this.getContentElement();
bX.setAttribute(T,bV);

if(bV){this.addState(a);
this.setFocusable(false);
}else{this.removeState(a);
this.setFocusable(true);
}}},destruct:function(){this.__mV=null;

if(qx.core.Variant.isSet(g,V)){qx.locale.Manager.getInstance().removeListener(X,this._onChangeLocale,this);
}}});
})();
(function(){var e='px',d="mshtml",c="qx.ui.form.TextField",b="qx.client",a="textfield";
qx.Class.define(c,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,f){if(qx.core.Variant.isSet(b,d)&&qx.bom.client.Engine.VERSION<9){f.setStyles({"line-height":innerHeight+e});
}}}});
})();
(function(){var n="wrap",m="value",l="textarea",k="none",j="qx.client",i="",h="overflow",g="input",f="qx.html.Input",e="select",b="disabled",d="read-only",c="overflowX",a="overflowY";
qx.Class.define(f,{extend:qx.html.Element,construct:function(o,p,q){if(o===e||o===l){var r=o;
}else{r=g;
}qx.html.Element.call(this,r,p,q);
this.__nc=o;
},members:{__nc:null,__nd:null,__ne:null,_createDomElement:function(){return qx.bom.Input.create(this.__nc);
},_applyProperty:function(name,s){qx.html.Element.prototype._applyProperty.call(this,name,s);
var t=this.getDomElement();

if(name===m){qx.bom.Input.setValue(t,s);
}else if(name===n){qx.bom.Input.setWrap(t,s);
this.setStyle(h,t.style.overflow,true);
this.setStyle(c,t.style.overflowX,true);
this.setStyle(a,t.style.overflowY,true);
}},setEnabled:qx.core.Variant.select(j,{"webkit":function(u){this.__ne=u;

if(!u){this.setStyles({"userModify":d,"userSelect":k});
}else{this.setStyles({"userModify":null,"userSelect":this.__nd?null:k});
}},"default":function(v){this.setAttribute(b,v===false);
}}),setSelectable:qx.core.Variant.select(j,{"webkit":function(w){this.__nd=w;
qx.html.Element.prototype.setSelectable.call(this,this.__ne&&w);
},"default":function(x){qx.html.Element.prototype.setSelectable.call(this,x);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(m,y);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(m)||i;
},setWrap:function(B){if(this.__nc===l){this._setProperty(n,B);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__nc===l){return this._getProperty(n);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var x="input",w="change",v="qx.client",u="text",t="password",s="checkbox",r="radio",q="textarea",p="keypress",n="opera",d="keyup",m="propertychange",h="mshtml",c="blur",b="keydown",g="select-multiple",f="checked",j="value",a="select",k="qx.event.handler.Input";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(v,n)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__nf:false,__ng:null,__nh:null,__ni:null,canHandleEvent:function(y,z){var A=y.tagName.toLowerCase();

if(z===x&&(A===x||A===q)){return true;
}
if(z===w&&(A===x||A===q||A===a)){return true;
}return false;
},registerEvent:function(B,C,D){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION<9&&qx.bom.client.Engine.DOCUMENT_MODE<9){if(!B.__nj){var E=B.tagName.toLowerCase();
var F=B.type;

if(F===u||F===t||E===q||F===s||F===r){qx.bom.Event.addNativeListener(B,m,this._onPropertyWrapper);
}
if(F!==s&&F!==r){qx.bom.Event.addNativeListener(B,w,this._onChangeValueWrapper);
}
if(F===u||F===t){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,B);
qx.bom.Event.addNativeListener(B,p,this._onKeyPressWrapped);
}B.__nj=true;
}}else{if(C===x){this.__nk(B);
}else if(C===w){if(B.type===r||B.type===s){qx.bom.Event.addNativeListener(B,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(B,w,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(v,n)||qx.core.Variant.isSet(v,h)){if(B.type===u||B.type===t){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,B);
qx.bom.Event.addNativeListener(B,p,this._onKeyPressWrapped);
}}}}},__nk:qx.core.Variant.select(v,{"mshtml":function(G){if(qx.bom.client.Engine.VERSION>=9&&qx.bom.client.Engine.DOCUMENT_MODE>=9){qx.bom.Event.addNativeListener(G,x,this._onInputWrapper);

if(G.type===u||G.type===t){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,G);
qx.bom.Event.addNativeListener(G,d,this._inputFixWrapper);
}}},"webkit":function(H){var I=H.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&I==q){qx.bom.Event.addNativeListener(H,p,this._onInputWrapper);
}qx.bom.Event.addNativeListener(H,x,this._onInputWrapper);
},"opera":function(J){qx.bom.Event.addNativeListener(J,d,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(J,b,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(J,c,this._onBlurWrapper);
qx.bom.Event.addNativeListener(J,x,this._onInputWrapper);
},"default":function(K){qx.bom.Event.addNativeListener(K,x,this._onInputWrapper);
}}),unregisterEvent:function(L,M){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION<9&&qx.bom.client.Engine.DOCUMENT_MODE<9){if(L.__nj){var N=L.tagName.toLowerCase();
var O=L.type;

if(O===u||O===t||N===q||O===s||O===r){qx.bom.Event.removeNativeListener(L,m,this._onPropertyWrapper);
}
if(O!==s&&O!==r){qx.bom.Event.removeNativeListener(L,w,this._onChangeValueWrapper);
}
if(O===u||O===t){qx.bom.Event.removeNativeListener(L,p,this._onKeyPressWrapped);
}
try{delete L.__nj;
}catch(P){L.__nj=null;
}}}else{if(M===x){this.__nl(L);
}else if(M===w){if(L.type===r||L.type===s){qx.bom.Event.removeNativeListener(L,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(L,w,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(v,n)||qx.core.Variant.isSet(v,h)){if(L.type===u||L.type===t){qx.bom.Event.removeNativeListener(L,p,this._onKeyPressWrapped);
}}}},__nl:qx.core.Variant.select(v,{"mshtml":function(Q){if(qx.bom.client.Engine.VERSION>=9&&qx.bom.client.Engine.DOCUMENT_MODE>=9){qx.bom.Event.removeNativeListener(Q,x,this._onInputWrapper);

if(Q.type===u||Q.type===t){qx.bom.Event.removeNativeListener(Q,d,this._inputFixWrapper);
}}},"webkit":function(R){var S=R.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&S==q){qx.bom.Event.removeNativeListener(R,p,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(R,x,this._onInputWrapper);
},"opera":function(T){qx.bom.Event.removeNativeListener(T,d,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(T,b,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(T,c,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(T,x,this._onInputWrapper);
},"default":function(U){qx.bom.Event.removeNativeListener(U,x,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(v,{"mshtml|opera":function(e,V){if(e.keyCode===13){if(V.value!==this.__nh){this.__nh=V.value;
qx.event.Registration.fireEvent(V,w,qx.event.type.Data,[V.value]);
}}},"default":null}),_inputFix:qx.core.Variant.select(v,{"mshtml":function(e,W){if(e.keyCode===46||e.keyCode===8){if(W.value!==this.__ni){this.__ni=W.value;
qx.event.Registration.fireEvent(W,x,qx.event.type.Data,[W.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(v,{"opera":function(e){if(e.keyCode===13){this.__nf=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(v,{"opera":function(e){if(e.keyCode===13){this.__nf=false;
}},"default":null}),_onBlur:qx.core.Variant.select(v,{"opera":function(e){if(this.__ng){window.clearTimeout(this.__ng);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var Y=qx.bom.Event.getTarget(e);
var X=Y.tagName.toLowerCase();
if(!this.__nf||X!==x){if(qx.core.Variant.isSet(v,n)){this.__ng=window.setTimeout(function(){qx.event.Registration.fireEvent(Y,x,qx.event.type.Data,[Y.value]);
},0);
}else{qx.event.Registration.fireEvent(Y,x,qx.event.type.Data,[Y.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var bb=qx.bom.Event.getTarget(e);
var ba=bb.value;

if(bb.type===g){var ba=[];

for(var i=0,o=bb.options,l=o.length;i<l;i++){if(o[i].selected){ba.push(o[i].value);
}}}qx.event.Registration.fireEvent(bb,w,qx.event.type.Data,[ba]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);

if(bc.type===r){if(bc.checked){qx.event.Registration.fireEvent(bc,w,qx.event.type.Data,[bc.value]);
}}else{qx.event.Registration.fireEvent(bc,w,qx.event.type.Data,[bc.checked]);
}}),_onProperty:qx.core.Variant.select(v,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bd=qx.bom.Event.getTarget(e);
var be=e.propertyName;

if(be===j&&(bd.type===u||bd.type===t||bd.tagName.toLowerCase()===q)){if(!bd.$$inValueSet){qx.event.Registration.fireEvent(bd,x,qx.event.type.Data,[bd.value]);
}}else if(be===f){if(bd.type===s){qx.event.Registration.fireEvent(bd,w,qx.event.type.Data,[bd.checked]);
}else if(bd.checked){qx.event.Registration.fireEvent(bd,w,qx.event.type.Data,[bd.value]);
}}}),"default":function(){}})},defer:function(bf){qx.event.Registration.addHandler(bf);
}});
})();
(function(){var v="",u="select",t="soft",s="off",r="qx.client",q="textarea",p="auto",o="wrap",n="text",m="mshtml",d="number",k="checkbox",g="select-one",c="input",b="option",f="value",e="radio",h="qx.bom.Input",a="nowrap",j="normal";
qx.Class.define(h,{statics:{__nm:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(w,x,y){{};
var x=x?qx.lang.Object.clone(x):{};
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
}}else if((D===n||D===q)&&qx.core.Variant.isSet(r,m)){A.$$inValueSet=true;
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
}},setWrap:qx.core.Variant.select(r,{"mshtml":function(T,U){var W=U?t:s;
var V=U?p:v;
T.wrap=W;
T.style.overflowY=V;
},"gecko|webkit":function(X,Y){var bb=Y?t:s;
var ba=Y?v:p;
X.setAttribute(o,bb);
X.style.overflow=ba;
},"default":function(bc,bd){bc.style.whiteSpace=bd?j:a;
}})}});
})();
(function(){var k="textfield",j="",i="downbutton",h="upbutton",g="Number",f="inner",d="PageUp",c="Boolean",b="changeValue",a="Down",J="Up",I="execute",H="PageDown",G="changeLocale",F="qx.dynlocale",E="on",D="_applyEditable",C="_applyWrap",B="keydown",A="\-]",r="mousewheel",s="_applyValue",p="number",q="_applyMinimum",n="qx.util.format.NumberFormat",o="[0-9",l="keyup",m="spinner",t="this._checkValue(value)",u="_applyMaximum",w="changeNumberFormat",v="changeMaximum",y="changeMinimum",x="_applyNumberFormat",z="qx.ui.form.Spinner";
qx.Class.define(z,{extend:qx.ui.core.Widget,implement:[qx.ui.form.INumberForm,qx.ui.form.IRange,qx.ui.form.IForm],include:[qx.ui.core.MContentPadding,qx.ui.form.MForm],construct:function(K,L,M){qx.ui.core.Widget.call(this);
var N=new qx.ui.layout.Grid();
N.setColumnFlex(0,1);
N.setRowFlex(0,1);
N.setRowFlex(1,1);
this._setLayout(N);
this.addListener(B,this._onKeyDown,this);
this.addListener(l,this._onKeyUp,this);
this.addListener(r,this._onMouseWheel,this);

if(qx.core.Variant.isSet(F,E)){qx.locale.Manager.getInstance().addListener(G,this._onChangeLocale,this);
}this._createChildControl(k);
this._createChildControl(h);
this._createChildControl(i);
if(K!=null){this.setMinimum(K);
}
if(M!=null){this.setMaximum(M);
}
if(L!==undefined){this.setValue(L);
}else{this.initValue();
}},properties:{appearance:{refine:true,init:m},focusable:{refine:true,init:true},singleStep:{check:g,init:1},pageStep:{check:g,init:10},minimum:{check:g,apply:q,init:0,event:y},value:{check:t,nullable:true,apply:s,init:0,event:b},maximum:{check:g,apply:u,init:100,event:v},wrap:{check:c,init:false,apply:C},editable:{check:c,init:true,apply:D},numberFormat:{check:n,apply:x,nullable:true},allowShrinkY:{refine:true,init:false}},members:{__xP:null,__xQ:false,__xR:false,_createChildControlImpl:function(O,P){var Q;

switch(O){case k:Q=new qx.ui.form.TextField();
Q.setFilter(this._getFilterRegExp());
Q.addState(f);
Q.setWidth(40);
Q.setFocusable(false);
Q.addListener(b,this._onTextChange,this);
this._add(Q,{column:0,row:0,rowSpan:2});
break;
case h:Q=new qx.ui.form.RepeatButton();
Q.addState(f);
Q.setFocusable(false);
Q.addListener(I,this._countUp,this);
this._add(Q,{column:1,row:0});
break;
case i:Q=new qx.ui.form.RepeatButton();
Q.addState(f);
Q.setFocusable(false);
Q.addListener(I,this._countDown,this);
this._add(Q,{column:1,row:1});
break;
}return Q||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,O);
},_getFilterRegExp:function(){var V=qx.locale.Number.getDecimalSeparator(qx.locale.Manager.getInstance().getLocale());
var U=qx.locale.Number.getGroupSeparator(qx.locale.Manager.getInstance().getLocale());
var T=j;
var R=j;

if(this.getNumberFormat()!==null){T=this.getNumberFormat().getPrefix()||j;
R=this.getNumberFormat().getPostfix()||j;
}var S=new RegExp(o+qx.lang.String.escapeRegexpChars(V)+qx.lang.String.escapeRegexpChars(U)+qx.lang.String.escapeRegexpChars(T)+qx.lang.String.escapeRegexpChars(R)+A);
return S;
},_forwardStates:{focused:true,invalid:true},tabFocus:function(){var W=this.getChildControl(k);
W.getFocusElement().focus();
W.selectAllText();
},_applyMinimum:function(X,Y){if(this.getMaximum()<X){this.setMaximum(X);
}
if(this.getValue()<X){this.setValue(X);
}else{this._updateButtons();
}},_applyMaximum:function(ba,bb){if(this.getMinimum()>ba){this.setMinimum(ba);
}
if(this.getValue()>ba){this.setValue(ba);
}else{this._updateButtons();
}},_applyEnabled:function(bc,bd){qx.ui.core.Widget.prototype._applyEnabled.call(this,bc,bd);
this._updateButtons();
},_checkValue:function(be){return typeof be===p&&be>=this.getMinimum()&&be<=this.getMaximum();
},_applyValue:function(bf,bg){var bh=this.getChildControl(k);
this._updateButtons();
this.__xP=bf;
if(bf!==null){if(this.getNumberFormat()){bh.setValue(this.getNumberFormat().format(bf));
}else{bh.setValue(bf+j);
}}else{bh.setValue(j);
}},_applyEditable:function(bi,bj){var bk=this.getChildControl(k);

if(bk){bk.setReadOnly(!bi);
}},_applyWrap:function(bl,bm){this._updateButtons();
},_applyNumberFormat:function(bn,bo){var bp=this.getChildControl(k);
bp.setFilter(this._getFilterRegExp());
this.getNumberFormat().addListener(w,this._onChangeNumberFormat,this);
this._applyValue(this.__xP,undefined);
},_getContentPaddingTarget:function(){return this.getChildControl(k);
},_updateButtons:function(){var br=this.getChildControl(h);
var bq=this.getChildControl(i);
var bs=this.getValue();

if(!this.getEnabled()){br.setEnabled(false);
bq.setEnabled(false);
}else{if(this.getWrap()){br.setEnabled(true);
bq.setEnabled(true);
}else{if(bs!==null&&bs<this.getMaximum()){br.setEnabled(true);
}else{br.setEnabled(false);
}if(bs!==null&&bs>this.getMinimum()){bq.setEnabled(true);
}else{bq.setEnabled(false);
}}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case d:this.__xQ=true;
case J:this.getChildControl(h).press();
break;
case H:this.__xR=true;
case a:this.getChildControl(i).press();
break;
default:return ;
}e.stopPropagation();
e.preventDefault();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case d:this.getChildControl(h).release();
this.__xQ=false;
break;
case J:this.getChildControl(h).release();
break;
case H:this.getChildControl(i).release();
this.__xR=false;
break;
case a:this.getChildControl(i).release();
break;
}},_onMouseWheel:function(e){if(e.getWheelDelta()>0){this._countDown();
}else{this._countUp();
}e.stop();
},_onTextChange:function(e){var bt=this.getChildControl(k);
var bu;
if(this.getNumberFormat()){try{bu=this.getNumberFormat().parse(bt.getValue());
}catch(bv){}}if(bu===undefined){bu=parseFloat(bt.getValue(),10);
}if(!isNaN(bu)){if(bu>this.getMaximum()){bt.setValue(this.getMaximum()+j);
return;
}else if(bu<this.getMinimum()){bt.setValue(this.getMinimum()+j);
return;
}this.setValue(bu);
}else{this._applyValue(this.__xP,undefined);
}},_onChangeLocale:function(bw){if(this.getNumberFormat()!==null){this.setNumberFormat(this.getNumberFormat());
var bx=this.getChildControl(k);
bx.setFilter(this._getFilterRegExp());
bx.setValue(this.getNumberFormat().format(this.getValue()));
}},_onChangeNumberFormat:function(by){var bz=this.getChildControl(k);
bz.setFilter(this._getFilterRegExp());
bz.setValue(this.getNumberFormat().format(this.getValue()));
},_countUp:function(){if(this.__xQ){var bB=this.getValue()+this.getPageStep();
}else{var bB=this.getValue()+this.getSingleStep();
}if(this.getWrap()){if(bB>this.getMaximum()){var bA=this.getMaximum()-bB;
bB=this.getMinimum()+bA;
}}this.gotoValue(bB);
},_countDown:function(){if(this.__xR){var bD=this.getValue()-this.getPageStep();
}else{var bD=this.getValue()-this.getSingleStep();
}if(this.getWrap()){if(bD<this.getMinimum()){var bC=this.getMinimum()+bD;
bD=this.getMaximum()-bC;
}}this.gotoValue(bD);
},gotoValue:function(bE){return this.setValue(Math.min(this.getMaximum(),Math.max(this.getMinimum(),bE)));
}},destruct:function(){if(qx.core.Variant.isSet(F,E)){qx.locale.Manager.getInstance().removeListener(G,this._onChangeLocale,this);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
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
(function(){var m="current-preview",l="execute",k="selected-preview",h="Number",g="preview-pane",f="selector-button",d="colorselector-cancelbutton",c="auto-button",b="colorselector-okbutton",a="mousedown",W="teal",V="maroon",U="qx.ui.control.ColorPopup",T="#666",S="changeValue",R="#333",Q="#000",P="yellow",O="__ME",N="changeGreen",t="colorpopup",u="_applyValue",r="blue",s="changeRed",p="field#",q="__MF",n="#CCC",o="Color Selector",v="changeVisibility",w="changeBlue",D="mouseover",B="Cancel",H="#FFF",F="right",J="Open ColorSelector",I="mouseout",y="#999",M="Automatic",L="Basic Colors",K="Preview (Old/New)",x="visible",z="Recent Colors",A="OK",C="field",E="green",G="red";
qx.Class.define(U,{extend:qx.ui.popup.Popup,implement:[qx.ui.form.IColorForm],construct:function(){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.VBox(5));
this._createChildControl(c);
this._createBoxes();
this._createChildControl(g);
this._createChildControl(f);
this.addListener(v,this._onChangeVisibility,this);
},properties:{appearance:{refine:true,init:t},value:{nullable:true,apply:u,event:S},red:{check:h,init:null,nullable:true,event:s},green:{check:h,init:null,nullable:true,event:N},blue:{check:h,init:null,nullable:true,event:w}},members:{__MC:1e5,__MD:null,__ME:null,__MF:null,__MG:"recent",__MH:12,_createChildControlImpl:function(X,Y){var ba;

switch(X){case C:ba=new qx.ui.core.Widget;
ba.addListener(a,this._onFieldMouseDown,this);
ba.addListener(D,this._onFieldMouseOver,this);
ba.addListener(I,this._onFieldMouseOut,this);
break;
case c:ba=new qx.ui.form.Button(this.tr(M));
ba.setAllowStretchX(true);
ba.addListener(l,this._onAutomaticBtnExecute,this);
this.add(ba);
break;
case f:ba=new qx.ui.form.Button(this.tr(J));
ba.addListener(l,this._onSelectorButtonExecute,this);
this.add(ba);
break;
case g:ba=new qx.ui.groupbox.GroupBox(this.tr(K));
ba.setLayout(new qx.ui.layout.HBox);
ba.add(this._createChildControl(k,true),{flex:1});
ba.add(this._createChildControl(m,true),{flex:1});
this.add(ba);
break;
case k:ba=new qx.ui.container.Composite(new qx.ui.layout.Basic);
break;
case m:ba=new qx.ui.container.Composite(new qx.ui.layout.Basic);
break;
case b:ba=new qx.ui.form.Button(this.tr(A));
ba.addListener(l,this._onColorSelectorOk,this);
break;
case d:ba=new qx.ui.form.Button(this.tr(B));
ba.addListener(l,this._onColorSelectorCancel,this);
break;
}return ba||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,X);
},_createBoxes:function(){this.__MD={};
var bc=this._tables;
var bf,bb,bd;
var j=0;

for(var be in bc){bf=bc[be];
bb=new qx.ui.groupbox.GroupBox(bf.label);
bb.setLayout(new qx.ui.layout.HBox);
this.__MD[be]=bb;
this.add(bb);

for(var i=0;i<this.__MH;i++){bd=this.getChildControl(p+(j++));
bd.setBackgroundColor(bf.values[i]||null);
bb.add(bd);
}}},_createColorSelector:function(){if(this.__MF){return;
}var bg=new qx.ui.window.Window(this.tr(o));
this.__ME=bg;
bg.setLayout(new qx.ui.layout.VBox(16));
bg.setResizable(false);
bg.moveTo(20,20);
this.__MF=new qx.ui.control.ColorSelector;
bg.add(this.__MF);
var bh=new qx.ui.container.Composite(new qx.ui.layout.HBox(8,F));
bg.add(bh);
var bj=this._createChildControl(d);
var bi=this._createChildControl(b);
bh.add(bj);
bh.add(bi);
},_applyValue:function(bk,bl){if(bk===null){this.setRed(null);
this.setGreen(null);
this.setBlue(null);
}else{var bm=qx.util.ColorUtil.stringToRgb(bk);
this.setRed(bm[0]);
this.setGreen(bm[1]);
this.setBlue(bm[2]);
}this.getChildControl(k).setBackgroundColor(bk);
this._rotatePreviousColors();
},_rotatePreviousColors:function(){if(!this._tables){return;
}var bp=this._tables[this.__MG].values;
var bq=this.__MD[this.__MG];

if(!bp){return;
}var br=this.getValue();

if(!br){return;
}var bo=bp.indexOf(br);

if(bo!=-1){qx.lang.Array.removeAt(bp,bo);
}else if(bp.length==this.__MH){bp.shift();
}bp.push(br);
var bn=bq.getChildren();

for(var i=0;i<bn.length;i++){bn[i].setBackgroundColor(bp[i]||null);
}},_onFieldMouseDown:function(e){var bs=this.getChildControl(m).getBackgroundColor();
this.setValue(bs);

if(bs){this.hide();
}},_onFieldMouseOver:function(e){this.getChildControl(m).setBackgroundColor(e.getTarget().getBackgroundColor());
},_onFieldMouseOut:function(e){var bw=this.getRed();
var bv=this.getGreen();
var bt=this.getBlue();
var bu=null;

if(bw!==null||bv!==null||bt!==null){var bu=qx.util.ColorUtil.rgbToRgbString([bw,bv,bt]);
}this.getChildControl(m).setBackgroundColor(bu);
},_onAutomaticBtnExecute:function(){this.setValue(null);
this.hide();
},_onSelectorButtonExecute:function(){this._createColorSelector();
this.exclude();
var bz=this.getRed();
var by=this.getGreen();
var bx=this.getBlue();

if(bz===null||by===null||bx===null){bz=255;
by=255;
bx=255;
}this.__MF.setRed(bz);
this.__MF.setGreen(by);
this.__MF.setBlue(bx);
this.__ME.open();
},_onColorSelectorOk:function(){var bA=this.__MF;
this.setValue(qx.util.ColorUtil.rgbToRgbString([bA.getRed(),bA.getGreen(),bA.getBlue()]));
this.__ME.close();
},_onColorSelectorCancel:function(){this.__ME.close();
},_onChangeVisibility:function(e){if(this.getVisibility()==x){var bE=this.getRed();
var bD=this.getGreen();
var bB=this.getBlue();
var bC=null;

if(bE!==null||bD!==null||bB!==null){var bC=qx.util.ColorUtil.rgbToRgbString([bE,bD,bB]);
}this.getChildControl(k).setBackgroundColor(bC);
this.getChildControl(m).setBackgroundColor(bC);
}},_tables:{core:{label:L,values:[Q,R,T,y,n,H,G,E,r,P,W,V]},recent:{label:z,values:[]}}},destruct:function(){this._disposeObjects(O,q);
this._tables=this.__MD=null;
}});
})();
(function(){var a="qx.ui.layout.Basic";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();
var d,f,e,h,top;
for(var i=0,l=g.length;i<l;i++){d=g[i];
f=d.getSizeHint();
e=d.getLayoutProperties();
h=(e.left||0)+d.getMarginLeft();
top=(e.top||0)+d.getMarginTop();
d.renderLayout(h,top,f.width,f.height);
}},_computeSizeHint:function(){var p=this._getLayoutChildren();
var m,r,n;
var q=0,o=0;
var j,k;
for(var i=0,l=p.length;i<l;i++){m=p[i];
r=m.getSizeHint();
n=m.getLayoutProperties();
j=r.width+(n.left||0)+m.getMarginLeft()+m.getMarginRight();
k=r.height+(n.top||0)+m.getMarginTop()+m.getMarginBottom();

if(j>q){q=j;
}
if(k>o){o=k;
}}return {width:q,height:o};
}}});
})();
(function(){var l="move",k="Boolean",j="mouseup",i="mousedown",h="losecapture",g="qx.ui.core.MMovable",f="mousemove",d="__qS",c="maximized",b="__qT",a="move-frame";
qx.Mixin.define(g,{properties:{movable:{check:k,init:true},useMoveFrame:{check:k,init:false}},members:{__qS:null,__qT:null,__qU:null,__qV:null,__qW:null,__qX:null,__qY:null,__ra:false,__rb:null,__rc:0,_activateMoveHandle:function(m){if(this.__qS){throw new Error("The move handle could not be redefined!");
}this.__qS=m;
m.addListener(i,this._onMoveMouseDown,this);
m.addListener(j,this._onMoveMouseUp,this);
m.addListener(f,this._onMoveMouseMove,this);
m.addListener(h,this.__rg,this);
},__rd:function(){var n=this.__qT;

if(!n){n=this.__qT=new qx.ui.core.Widget();
n.setAppearance(a);
n.exclude();
qx.core.Init.getApplication().getRoot().add(n);
}return n;
},__re:function(){var location=this.getContainerLocation();
var p=this.getBounds();
var o=this.__rd();
o.setUserBounds(location.left,location.top,p.width,p.height);
o.show();
o.setZIndex(this.getZIndex()+1);
},__rf:function(e){var r=this.__qU;
var u=Math.max(r.left,Math.min(r.right,e.getDocumentLeft()));
var t=Math.max(r.top,Math.min(r.bottom,e.getDocumentTop()));
var q=this.__qV+u;
var s=this.__qW+t;
return {viewportLeft:q,viewportTop:s,parentLeft:q-this.__qX,parentTop:s-this.__qY};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(c)){return;
}var parent=this.getLayoutParent();
var w=parent.getContentLocation();
var x=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__rb=parent.getBlockerColor();
this.__rc=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
this.__ra=true;
}}this.__qU={left:w.left,top:w.top,right:w.left+x.width,bottom:w.top+x.height};
var v=this.getContainerLocation();
this.__qX=w.left;
this.__qY=w.top;
this.__qV=v.left-e.getDocumentLeft();
this.__qW=v.top-e.getDocumentTop();
this.addState(l);
this.__qS.capture();
if(this.getUseMoveFrame()){this.__re();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(l)){return;
}var y=this.__rf(e);

if(this.getUseMoveFrame()){this.__rd().setDomPosition(y.viewportLeft,y.viewportTop);
}else{this.setDomPosition(y.parentLeft,y.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__ra){parent.unblockContent();
parent.setBlockerColor(this.__rb);
parent.setBlockerOpacity(this.__rc);
this.__rb=null;
this.__rc=0;
this.__ra=false;
}}this.__qS.releaseCapture();
var z=this.__rf(e);
this.setLayoutProperties({left:z.parentLeft,top:z.parentTop});
if(this.getUseMoveFrame()){this.__rd().exclude();
}e.stopPropagation();
},__rg:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
if(this.getUseMoveFrame()){this.__rd().exclude();
}}},destruct:function(){this._disposeObjects(b,d);
this.__qU=null;
}});
})();
(function(){var k="Boolean",j="resize",i="mousedown",h="w-resize",g="sw-resize",f="n-resize",d="resizableRight",c="ne-resize",b="se-resize",a="Integer",z="e-resize",y="resizableLeft",x="mousemove",w="move",v="shorthand",u="maximized",t="nw-resize",s="mouseout",r="qx.ui.core.MResizable",q="mouseup",o="losecapture",p="resize-frame",m="resizableBottom",n="s-resize",l="resizableTop";
qx.Mixin.define(r,{construct:function(){var A=this.getContainerElement();
A.addListener(i,this.__ru,this,true);
A.addListener(q,this.__rv,this);
A.addListener(x,this.__rx,this);
A.addListener(s,this.__ry,this);
A.addListener(o,this.__rw,this);
var B=this.getContainerElement().getDomElement();

if(B==null){B=window;
}this.__rh=qx.event.Registration.getManager(B).getHandler(qx.event.handler.DragDrop);
},properties:{resizableTop:{check:k,init:true},resizableRight:{check:k,init:true},resizableBottom:{check:k,init:true},resizableLeft:{check:k,init:true},resizable:{group:[l,d,m,y],mode:v},resizeSensitivity:{check:a,init:5},useResizeFrame:{check:k,init:true}},members:{__rh:null,__ri:null,__rj:null,__rk:null,__rl:null,__rm:null,__rn:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__ro:function(){var C=this.__ri;

if(!C){C=this.__ri=new qx.ui.core.Widget();
C.setAppearance(p);
C.exclude();
qx.core.Init.getApplication().getRoot().add(C);
}return C;
},__rp:function(){var location=this.__rs();
var D=this.__ro();
D.setUserBounds(location.left,location.top,location.right-location.left,location.bottom-location.top);
D.show();
D.setZIndex(this.getZIndex()+1);
},__rq:function(e){var F=this.__rj;
var G=this.getSizeHint();
var K=this.__rn;
var J=this.__rm;
var E=J.width;
var I=J.height;
var H=J.containerWidth;
var M=J.containerHeight;
var N=J.left;
var top=J.top;
var L;

if((F&this.RESIZE_TOP)||(F&this.RESIZE_BOTTOM)){L=Math.max(K.top,Math.min(K.bottom,e.getDocumentTop()))-this.__rl;

if(F&this.RESIZE_TOP){I-=L;
M-=L;
}else{I+=L;
M+=L;
}
if(M<G.minHeight){I+=(G.minHeight-M);
M=G.minHeight;
}else if(M>G.maxHeight){I-=(G.maxHeight-M);
M=G.maxHeight;
}
if(F&this.RESIZE_TOP){top+=J.containerHeight-M;
}}
if((F&this.RESIZE_LEFT)||(F&this.RESIZE_RIGHT)){L=Math.max(K.left,Math.min(K.right,e.getDocumentLeft()))-this.__rk;

if(F&this.RESIZE_LEFT){E-=L;
H-=L;
}else{E+=L;
H+=L;
}
if(H<G.minWidth){E+=(G.minWidth-H);
H=G.minWidth;
}else if(E>G.maxWidth){E-=(G.maxWidth-H);
H=G.maxWidth;
}
if(F&this.RESIZE_LEFT){N+=J.containerWidth-H;
}}return {viewportLeft:N,viewportTop:top,parentLeft:J.bounds.left+N-J.left,parentTop:J.bounds.top+top-J.top,containerWidth:H,containerHeight:M,width:E,height:I};
},__rr:{1:f,2:n,4:h,8:z,5:t,6:g,9:c,10:b},__rs:function(){var O=this.getDecoratorElement();
if(O&&O.getDomElement()){return qx.bom.element.Location.get(O.getDomElement());
}else{return this.getContentLocation();
}},__rt:function(e){var R=this.__rs();
var P=this.getResizeSensitivity();
var T=e.getDocumentLeft();
var S=e.getDocumentTop();
var Q=0;
if(this.getResizableTop()&&Math.abs(R.top-S)<P&&T>R.left-P&&T<R.right+P){Q+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(R.bottom-S)<P&&T>R.left-P&&T<R.right+P){Q+=this.RESIZE_BOTTOM;
}if(this.getResizableLeft()&&Math.abs(R.left-T)<P&&S>R.top-P&&S<R.bottom+P){Q+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(R.right-T)<P&&S>R.top-P&&S<R.bottom+P){Q+=this.RESIZE_RIGHT;
}this.__rj=Q;
},__ru:function(e){if(!this.__rj){return;
}this.addState(j);
this.__rk=e.getDocumentLeft();
this.__rl=e.getDocumentTop();
var X=this.getContainerLocation();
var U=this.__rs();
var W=this.getBounds();
this.__rm={top:U.top,left:U.left,containerWidth:X.right-X.left,containerHeight:X.bottom-X.top,width:U.right-U.left,height:U.bottom-U.top,bounds:qx.lang.Object.clone(W)};
var parent=this.getLayoutParent();
var Y=parent.getContentLocation();
var V=parent.getBounds();
this.__rn={left:Y.left,top:Y.top,right:Y.left+V.width,bottom:Y.top+V.height};
if(this.getUseResizeFrame()){this.__rp();
}this.capture();
e.stop();
},__rv:function(e){if(!this.hasState(j)){return;
}if(this.getUseResizeFrame()){this.__ro().exclude();
}var ba=this.__rq(e);
this.setWidth(ba.containerWidth);
this.setHeight(ba.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:ba.parentLeft,top:ba.parentTop});
}this.__rj=0;
this.removeState(j);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__rw:function(e){if(!this.__rj){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(w);
if(this.getUseResizeFrame()){this.__ro().exclude();
}},__rx:function(e){if(this.hasState(j)){var be=this.__rq(e);
if(this.getUseResizeFrame()){var bc=this.__ro();
bc.setUserBounds(be.viewportLeft,be.viewportTop,be.width,be.height);
}else{this.setWidth(be.containerWidth);
this.setHeight(be.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:be.parentLeft,top:be.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(u)&&!this.__rh.isSessionActive()){this.__rt(e);
var bf=this.__rj;
var bd=this.getApplicationRoot();

if(bf){var bb=this.__rr[bf];
this.setCursor(bb);
bd.setGlobalCursor(bb);
}else if(this.getCursor()){this.resetCursor();
bd.resetGlobalCursor();
}}},__ry:function(e){if(this.getCursor()&&!this.hasState(j)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__ri!=null&&!qx.core.ObjectRegistry.inShutDown){this.__ri.destroy();
this.__ri=null;
}this.__rh=null;
}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(b){this.assertInterface(b,qx.ui.window.IDesktop);
},changeActiveWindow:function(c,d){},updateStack:function(){},bringToFront:function(e){this.assertInstance(e,qx.ui.window.Window);
},sendToBack:function(f){this.assertInstance(f,qx.ui.window.Window);
}}});
})();
(function(){var b="__rz",a="qx.ui.window.Manager";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__rz:null,setDesktop:function(c){this.__rz=c;
this.updateStack();
},getDesktop:function(){return this.__rz;
},changeActiveWindow:function(d,e){if(d){this.bringToFront(d);
d.setActive(true);
}
if(e){e.resetActive();
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__rz.forceUnblockContent();
var f=this.__rz.getWindows();
var h=this._minZIndex;
var m=h+f.length*2;
var j=h+f.length*4;
var k=null;

for(var i=0,l=f.length;i<l;i++){var g=f[i];
if(!g.isVisible()){continue;
}k=k||g;
if(g.isModal()){g.setZIndex(j);
this.__rz.blockContent(j-1);
j+=2;
k=g;
}else if(g.isAlwaysOnTop()){g.setZIndex(m);
m+=2;
}else{g.setZIndex(h);
h+=2;
}if(!k.isModal()&&g.isActive()||g.getZIndex()>k.getZIndex()){k=g;
}}this.__rz.setActiveWindow(k);
},bringToFront:function(n){var o=this.__rz.getWindows();
var p=qx.lang.Array.remove(o,n);

if(p){o.push(n);
this.updateStack();
}},sendToBack:function(q){var r=this.__rz.getWindows();
var s=qx.lang.Array.remove(r,q);

if(s){r.unshift(q);
this.updateStack();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="captionbar",h="_applyCaptionBarChange",g="maximize-button",f="restore-button",d="minimize-button",c="close-button",b="maximized",a="execute",Q="pane",P="title",O="icon",N="statusbar-text",M="statusbar",L="String",K="normal",J="active",I="beforeClose",H="beforeMinimize",r="mousedown",s="changeStatus",p="changeIcon",q="excluded",n="dblclick",o="_applyActive",l="beforeRestore",m="minimize",t="changeModal",u="changeAlwaysOnTop",z="_applyShowStatusbar",y="_applyStatus",B="qx.ui.window.Window",A="changeCaption",D="focusout",C="beforeMaximize",w="maximize",G="restore",F="window",E="close",v="changeActive",x="minimized";
qx.Class.define(B,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(R,S){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(i);
this._createChildControl(Q);
if(S!=null){this.setIcon(S);
}
if(R!=null){this.setCaption(R);
}this._updateCaptionBar();
this.addListener(r,this._onWindowMouseDown,this,true);
this.addListener(D,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":j,"close":j,"beforeMinimize":j,"minimize":j,"beforeMaximize":j,"maximize":j,"beforeRestore":j,"restore":j},properties:{appearance:{refine:true,init:F},visibility:{refine:true,init:q},focusable:{refine:true,init:true},active:{check:k,init:false,apply:o,event:v},alwaysOnTop:{check:k,init:false,event:u},modal:{check:k,init:false,event:t},caption:{apply:h,event:A,nullable:true},icon:{check:L,nullable:true,apply:h,event:p,themeable:true},status:{check:L,nullable:true,apply:y,event:s},showClose:{check:k,init:true,apply:h,themeable:true},showMaximize:{check:k,init:true,apply:h,themeable:true},showMinimize:{check:k,init:true,apply:h,themeable:true},allowClose:{check:k,init:true,apply:h},allowMaximize:{check:k,init:true,apply:h},allowMinimize:{check:k,init:true,apply:h},showStatusbar:{check:k,init:false,apply:z}},members:{__rA:null,__rB:null,getChildrenContainer:function(){return this.getChildControl(Q);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);
},_createChildControlImpl:function(T,U){var V;

switch(T){case M:V=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(V);
V.add(this.getChildControl(N));
break;
case N:V=new qx.ui.basic.Label();
V.setValue(this.getStatus());
break;
case Q:V=new qx.ui.container.Composite();
this._add(V,{flex:1});
break;
case i:var X=new qx.ui.layout.Grid();
X.setRowFlex(0,1);
X.setColumnFlex(1,1);
V=new qx.ui.container.Composite(X);
this._add(V);
V.addListener(n,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(V);
break;
case O:V=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(i).add(V,{row:0,column:0});
break;
case P:V=new qx.ui.basic.Label(this.getCaption());
V.setWidth(0);
V.setAllowGrowX(true);
var W=this.getChildControl(i);
W.add(V,{row:0,column:1});
break;
case d:V=new qx.ui.form.Button();
V.setFocusable(false);
V.addListener(a,this._onMinimizeButtonClick,this);
this.getChildControl(i).add(V,{row:0,column:2});
break;
case f:V=new qx.ui.form.Button();
V.setFocusable(false);
V.addListener(a,this._onRestoreButtonClick,this);
this.getChildControl(i).add(V,{row:0,column:3});
break;
case g:V=new qx.ui.form.Button();
V.setFocusable(false);
V.addListener(a,this._onMaximizeButtonClick,this);
this.getChildControl(i).add(V,{row:0,column:4});
break;
case c:V=new qx.ui.form.Button();
V.setFocusable(false);
V.addListener(a,this._onCloseButtonClick,this);
this.getChildControl(i).add(V,{row:0,column:6});
break;
}return V||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,T);
},_updateCaptionBar:function(){var ba;
var bb=this.getIcon();

if(bb){this.getChildControl(O).setSource(bb);
this._showChildControl(O);
}else{this._excludeChildControl(O);
}var Y=this.getCaption();

if(Y){this.getChildControl(P).setValue(Y);
this._showChildControl(P);
}else{this._excludeChildControl(P);
}
if(this.getShowMinimize()){this._showChildControl(d);
ba=this.getChildControl(d);
this.getAllowMinimize()?ba.resetEnabled():ba.setEnabled(false);
}else{this._excludeChildControl(d);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(f);
this._excludeChildControl(g);
}else{this._showChildControl(g);
this._excludeChildControl(f);
}ba=this.getChildControl(g);
this.getAllowMaximize()?ba.resetEnabled():ba.setEnabled(false);
}else{this._excludeChildControl(g);
this._excludeChildControl(f);
}
if(this.getShowClose()){this._showChildControl(c);
ba=this.getChildControl(c);
this.getAllowClose()?ba.resetEnabled():ba.setEnabled(false);
}else{this._excludeChildControl(c);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(I,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(E);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bd=parent.getBounds();

if(bd){var be=this.getSizeHint();
var bc=Math.round((bd.width-be.width)/2);
var top=Math.round((bd.height-be.height)/2);

if(top<0){top=0;
}this.moveTo(bc,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(C,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bf=this.getLayoutProperties();
this.__rB=bf.left===undefined?0:bf.left;
this.__rA=bf.top===undefined?0:bf.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(b);
this._updateCaptionBar();
this.fireEvent(w);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(H,qx.event.type.Event,[false,true])){var bg=this.getLayoutProperties();
this.__rB=bg.left===undefined?0:bg.left;
this.__rA=bg.top===undefined?0:bg.top;
this.removeState(b);
this.hide();
this.fireEvent(m);
}},restore:function(){if(this.getMode()===K){return;
}
if(this.fireNonBubblingEvent(l,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bh=this.__rB;
var top=this.__rA;
this.setLayoutProperties({edge:null,left:bh,top:top});
this.removeState(b);
this._updateCaptionBar();
this.fireEvent(G);
}},moveTo:function(bi,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bi,top:top});
},isMaximized:function(){return this.hasState(b);
},getMode:function(){if(!this.isVisible()){return x;
}else{if(this.isMaximized()){return b;
}else{return K;
}}},_applyActive:function(bj,bk){if(bk){this.removeState(J);
}else{this.addState(J);
}},_getContentPaddingTarget:function(){return this.getChildControl(Q);
},_applyShowStatusbar:function(bl,bm){if(bl){this._showChildControl(M);
}else{this._excludeChildControl(M);
}},_applyCaptionBarChange:function(bn,bo){this._updateCaptionBar();
},_applyStatus:function(bp,bq){var br=this.getChildControl(N,true);

if(br){br.setValue(bp);
}},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bs=e.getRelatedTarget();

if(bs!=null&&!qx.ui.core.Widget.contains(this,bs)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(d).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(f).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(g).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(c).reset();
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var k="_",j="format",h="thu",g="sat",f="cldr_day_",e="cldr_month_",d="wed",c="fri",b="tue",a="mon",B="sun",A="short",z="HH:mm",y="HHmmsszz",x="HHmm",w="HHmmss",v="cldr_date_format_",u="HH:mm:ss zz",t="full",s="cldr_pm",q="long",r="medium",o="cldr_am",p="qx.locale.Date",m="cldr_date_time_format_",n="cldr_time_format_",l="HH:mm:ss";
qx.Class.define(p,{statics:{__of:qx.locale.Manager.getInstance(),getAmMarker:function(C){return this.__of.localize(o,[],C);
},getPmMarker:function(D){return this.__of.localize(s,[],D);
},getDayNames:function(length,E,F){var F=F?F:j;
{};
var H=[B,a,b,d,h,c,g];
var I=[];

for(var i=0;i<H.length;i++){var G=f+F+k+length+k+H[i];
I.push(this.__of.localize(G,[],E));
}return I;
},getDayName:function(length,J,K,L){var L=L?L:j;
{};
var N=[B,a,b,d,h,c,g];
var M=f+L+k+length+k+N[J];
return this.__of.localize(M,[],K);
},getMonthNames:function(length,O,P){var P=P?P:j;
{};
var R=[];

for(var i=0;i<12;i++){var Q=e+P+k+length+k+(i+1);
R.push(this.__of.localize(Q,[],O));
}return R;
},getMonthName:function(length,S,T,U){var U=U?U:j;
{};
var V=e+U+k+length+k+(S+1);
return this.__of.localize(V,[],T);
},getDateFormat:function(W,X){{};
var Y=v+W;
return this.__of.localize(Y,[],X);
},getDateTimeFormat:function(ba,bb,bc){var be=m+ba;
var bd=this.__of.localize(be,[],bc);

if(bd==be){bd=bb;
}return bd;
},getTimeFormat:function(bf,bg){{};
var bi=n+bf;
var bh=this.__of.localize(bi,[],bg);

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
}else{bx=this.__of.getTerritory()||this.__of.getLanguage();
}return bx.toUpperCase();
}}});
})();
(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var m="selected",l="click",k="last-month-button",j="default",h="next-month-button",g="otherMonth",f="month-year-label",d="last-year-button",c="navigation-bar",b="next-year-button",bm="date-pane",bl="PageUp",bk="mousedown",bj="today",bi="Integer",bh="PageDown",bg="changeLocale",bf="next-month-button-tooltip",be="last-month-button-tooltip",bd="qx.dynlocale",t="last-year-button-tooltip",u="next-year-button-tooltip",r="on",s="weekend",p="day",q="lastMonth",n="Next month",o="Escape",z="Left",A="weekday",I="changeValue",G="Space",Q="Down",L="qx.ui.control.DateChooser",Y="Date",V="Enter",C="dblclick",bc="day#",bb="Next year",ba="ww",B="_applyValue",E="Up",F="weekday#",H="datechooser",J="header",M="week",S="lastYear",X="nextYear",v="changeShownYear",w="week#",D="Last month",P="Right",O="Last year",N="EE",U="mouseup",T="keypress",K="",R="nextMonth",a="week#0",W="changeShownMonth";
qx.Class.define(L,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable,qx.ui.form.MForm],implement:[qx.ui.form.IExecutable,qx.ui.form.IForm,qx.ui.form.IDateForm],construct:function(bn){qx.ui.core.Widget.call(this);
var bp=new qx.ui.layout.VBox();
this._setLayout(bp);
this._createChildControl(c);
this._createChildControl(bm);
this.addListener(T,this._onKeyPress);
var bo=(bn!=null)?bn:new Date();
this.showMonth(bo.getMonth(),bo.getFullYear());
if(qx.core.Variant.isSet(bd,r)){qx.locale.Manager.getInstance().addListener(bg,this._updateDatePane,this);
}this.addListener(bk,this._onMouseUpDown,this);
this.addListener(U,this._onMouseUpDown,this);
},statics:{MONTH_YEAR_FORMAT:qx.locale.Date.getDateTimeFormat("yyyyMMMM","MMMM yyyy")},properties:{appearance:{refine:true,init:H},width:{refine:true,init:200},height:{refine:true,init:150},shownMonth:{check:bi,init:null,nullable:true,event:W},shownYear:{check:bi,init:null,nullable:true,event:v},value:{check:Y,init:null,nullable:true,event:I,apply:B}},members:{__yk:null,__yl:null,__ym:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bq,br){var bs;

switch(bq){case c:bs=new qx.ui.container.Composite(new qx.ui.layout.HBox());
bs.add(this.getChildControl(d));
bs.add(this.getChildControl(k));
bs.add(this.getChildControl(f),{flex:1});
bs.add(this.getChildControl(h));
bs.add(this.getChildControl(b));
this._add(bs);
break;
case t:bs=new qx.ui.tooltip.ToolTip(this.tr(O));
break;
case d:bs=new qx.ui.toolbar.Button();
bs.addState(S);
bs.setFocusable(false);
bs.setToolTip(this.getChildControl(t));
bs.addListener(l,this._onNavButtonClicked,this);
break;
case be:bs=new qx.ui.tooltip.ToolTip(this.tr(D));
break;
case k:bs=new qx.ui.toolbar.Button();
bs.addState(q);
bs.setFocusable(false);
bs.setToolTip(this.getChildControl(be));
bs.addListener(l,this._onNavButtonClicked,this);
break;
case bf:bs=new qx.ui.tooltip.ToolTip(this.tr(n));
break;
case h:bs=new qx.ui.toolbar.Button();
bs.addState(R);
bs.setFocusable(false);
bs.setToolTip(this.getChildControl(bf));
bs.addListener(l,this._onNavButtonClicked,this);
break;
case u:bs=new qx.ui.tooltip.ToolTip(this.tr(bb));
break;
case b:bs=new qx.ui.toolbar.Button();
bs.addState(X);
bs.setFocusable(false);
bs.setToolTip(this.getChildControl(u));
bs.addListener(l,this._onNavButtonClicked,this);
break;
case f:bs=new qx.ui.basic.Label();
bs.setAllowGrowX(true);
bs.setAnonymous(true);
break;
case M:bs=new qx.ui.basic.Label();
bs.setAllowGrowX(true);
bs.setAllowGrowY(true);
bs.setSelectable(false);
bs.setAnonymous(true);
bs.setCursor(j);
break;
case A:bs=new qx.ui.basic.Label();
bs.setAllowGrowX(true);
bs.setAllowGrowY(true);
bs.setSelectable(false);
bs.setAnonymous(true);
bs.setCursor(j);
break;
case p:bs=new qx.ui.basic.Label();
bs.setAllowGrowX(true);
bs.setAllowGrowY(true);
bs.setCursor(j);
bs.addListener(bk,this._onDayClicked,this);
bs.addListener(C,this._onDayDblClicked,this);
break;
case bm:var bt=new qx.ui.layout.Grid();
bs=new qx.ui.container.Composite(bt);

for(var i=0;i<8;i++){bt.setColumnFlex(i,1);
}
for(var i=0;i<7;i++){bt.setRowFlex(i,1);
}var bu=this.getChildControl(a);
bu.addState(J);
bs.add(bu,{column:0,row:0});
this.__yk=[];

for(var i=0;i<7;i++){bu=this.getChildControl(F+i);
bs.add(bu,{column:i+1,row:0});
this.__yk.push(bu);
}this.__yl=[];
this.__ym=[];

for(var y=0;y<6;y++){var bu=this.getChildControl(w+(y+1));
bs.add(bu,{column:0,row:y+1});
this.__ym.push(bu);
for(var x=0;x<7;x++){var bu=this.getChildControl(bc+((y*7)+x));
bs.add(bu,{column:x+1,row:y+1});
this.__yl.push(bu);
}}this._add(bs);
break;
}return bs||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bq);
},_applyValue:function(bv,bw){if((bv!=null)&&(this.getShownMonth()!=bv.getMonth()||this.getShownYear()!=bv.getFullYear())){this.showMonth(bv.getMonth(),bv.getFullYear());
}else{var by=(bv==null)?-1:bv.getDate();

for(var i=0;i<6*7;i++){var bx=this.__yl[i];

if(bx.hasState(g)){if(bx.hasState(m)){bx.removeState(m);
}}else{var bz=parseInt(bx.getValue(),10);

if(bz==by){bx.addState(m);
}else if(bx.hasState(m)){bx.removeState(m);
}}}}},_onMouseUpDown:function(e){var bA=e.getTarget();

if(bA==this.getChildControl(c)||bA==this.getChildControl(bm)){e.stopPropagation();
return;
}},_onNavButtonClicked:function(bB){var bD=this.getShownYear();
var bC=this.getShownMonth();

switch(bB.getCurrentTarget()){case this.getChildControl(d):bD--;
break;
case this.getChildControl(k):bC--;

if(bC<0){bC=11;
bD--;
}break;
case this.getChildControl(h):bC++;

if(bC>=12){bC=0;
bD++;
}break;
case this.getChildControl(b):bD++;
break;
}this.showMonth(bC,bD);
},_onDayClicked:function(bE){var bF=bE.getCurrentTarget().dateTime;
this.setValue(new Date(bF));
},_onDayDblClicked:function(){this.execute();
},_onKeyPress:function(bG){var bK=null;
var bI=null;
var bJ=null;

if(bG.getModifiers()==0){switch(bG.getKeyIdentifier()){case z:bK=-1;
break;
case P:bK=1;
break;
case E:bK=-7;
break;
case Q:bK=7;
break;
case bl:bI=-1;
break;
case bh:bI=1;
break;
case o:if(this.getValue()!=null){this.setValue(null);
return true;
}break;
case V:case G:if(this.getValue()!=null){this.execute();
}return;
}}else if(bG.isShiftPressed()){switch(bG.getKeyIdentifier()){case bl:bJ=-1;
break;
case bh:bJ=1;
break;
}}
if(bK!=null||bI!=null||bJ!=null){var bH=this.getValue();

if(bH!=null){bH=new Date(bH.getTime());
}
if(bH==null){bH=new Date();
}else{if(bK!=null){bH.setDate(bH.getDate()+bK);
}
if(bI!=null){bH.setMonth(bH.getMonth()+bI);
}
if(bJ!=null){bH.setFullYear(bH.getFullYear()+bJ);
}}this.setValue(bH);
}},showMonth:function(bL,bM){if((bL!=null&&bL!=this.getShownMonth())||(bM!=null&&bM!=this.getShownYear())){if(bL!=null){this.setShownMonth(bL);
}
if(bM!=null){this.setShownYear(bM);
}this._updateDatePane();
}},handleKeyPress:function(e){this._onKeyPress(e);
},_updateDatePane:function(){var cd=qx.ui.control.DateChooser;
var ca=new Date();
var bS=ca.getFullYear();
var bX=ca.getMonth();
var bV=ca.getDate();
var ce=this.getValue();
var ch=(ce==null)?-1:ce.getFullYear();
var co=(ce==null)?-1:ce.getMonth();
var cb=(ce==null)?-1:ce.getDate();
var bW=this.getShownMonth();
var cl=this.getShownYear();
var bT=qx.locale.Date.getWeekStart();
var cf=new Date(this.getShownYear(),this.getShownMonth(),1);
var cc=new qx.util.format.DateFormat(cd.MONTH_YEAR_FORMAT);
this.getChildControl(f).setValue(cc.format(cf));
var cn=cf.getDay();
var bY=1+((7-cn)%7);
var cg=new qx.util.format.DateFormat(N);

for(var i=0;i<7;i++){var ci=(i+bT)%7;
var ck=this.__yk[i];
cf.setDate(bY+ci);
ck.setValue(cg.format(cf));

if(qx.locale.Date.isWeekend(ci)){ck.addState(s);
}else{ck.removeState(s);
}}cf=new Date(cl,bW,1,12,0,0);
var bO=(7+cn-bT)%7;
cf.setDate(cf.getDate()-bO);
var cj=new qx.util.format.DateFormat(ba);

for(var bN=0;bN<6;bN++){this.__ym[bN].setValue(cj.format(cf));

for(var i=0;i<7;i++){var ck=this.__yl[bN*7+i];
var bR=cf.getFullYear();
var bQ=cf.getMonth();
var bU=cf.getDate();
var bP=(ch==bR&&co==bQ&&cb==bU);

if(bP){ck.addState(m);
}else{ck.removeState(m);
}
if(bQ!=bW){ck.addState(g);
}else{ck.removeState(g);
}var cm=(bR==bS&&bQ==bX&&bU==bV);

if(cm){ck.addState(bj);
}else{ck.removeState(bj);
}ck.setValue(K+bU);
ck.dateTime=cf.getTime();
cf.setDate(cf.getDate()+1);
}}cc.dispose();
cg.dispose();
cj.dispose();
}},destruct:function(){if(qx.core.Variant.isSet(bd,r)){qx.locale.Manager.getInstance().removeListener(bg,this._updateDatePane,this);
}this.__yk=this.__yl=this.__ym=null;
}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){qx.ui.form.Button.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var cB=")",cA="(",cz="|",cy="(\\d\\d?)",cx="format",cw="",cv="-",cu="abbreviated",ct="wide",cs="stand-alone",bC="narrow",bB="(\\d\\d*?)",bA="quarter",bz='A',by="default",bx="0",bw="literal",bv="wildcard",bu="'",bt="(\\d?)",cI="hour",cJ='Anno Domini',cG="+",cH='Q',cE="ms",cF="(\\d\\d?\\d?)",cC="dayOfYear",cD='AD',cK="(-*",cL="Y+",cb=":",ca='y',cd="quoted_literal",cc="weekOfYear",cf='a',ce="day",ch="GMT",cg="HH:mm:ss",bY='y+',bX="HHmmss",h="long",l='Y',m='z',n='BC',o="d",p="D",q='B',r='',s='Before Christ',t='Z',da=" ",cY="min",cX="sec",cW="\\d",de="+?",dd="eeeee",dc='W',db="qqqq",dg="h",df="KK",S='L',T="Z",Q="LL",R="EEEE",W="^",X='4th quarter',U="SSS",V="GGGGG",O="qqq",P='3rd quarter',B="K",A='q',D='G',C="a",x='2nd quarter',w="dd",z="qx.util.format.DateFormat",y="eee",v="ee",u="q",bd="QQQQ",be="ww",bf="H",bg='Y+',Y="(\\d\\d\\d?)",ba="(GMT[\\+\\-]\\d\\d:\\d\\d)",bb="Q",bc="c",bh="weekOfMonth",bi="ccc",L="EEEEE",K="EE",J="GGG",I='-',H="w",G="mm",F='h',E="S",N='s',M="QQQ",bj="G",bk="GG",bl="kk",bm="ss",bn="([\\+\\-]\\d\\d\\d\\d)",bo='H',bp='S',bq='1st quarter',br="MMMM",bs='c',bG='Q1',bF="eeee",bE="QQ",bD="LLLLL",bK="HH",bJ='k',bI="m",bH="DDD",bM='D',bL="LLLL",bT='e',bU='K',bR="L",bS="hh",bP="cccc",bQ="e",bN="W",bO="GGGG",bV='Q2',bW="MM",cl="y+",ck="ccccc",cn="E",cm="yyyy-MM-dd HH:mm:ss",cp="short",co='d',cr="unkown",cq="\\d?",cj="k",ci='m',cS='Q3',cT="DD",cU='M',cV="SS",cO="MMM",cP="s",cQ="M",cR='w',cM="EEE",cN="$",g="?",f='Q4',e="MMMMM",d='E',c="z",b="LLL",a="qq";
qx.Class.define(z,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(dh,di){qx.core.Object.call(this);

if(!di){this.__nM=qx.locale.Manager.getInstance().getLocale();
}else{this.__nM=di;
}
if(dh!=null){this.__nN=dh.toString();
}else{this.__nN=qx.locale.Date.getDateFormat(h,this.__nM)+da+qx.locale.Date.getDateTimeFormat(bX,cg,this.__nM);
}},statics:{getDateTimeInstance:function(){var dk=qx.util.format.DateFormat;
var dj=qx.locale.Date.getDateFormat(h)+da+qx.locale.Date.getDateTimeFormat(bX,cg);

if(dk._dateInstance==null||dk._dateInstance.__nN!=dj){dk._dateTimeInstance=new dk();
}return dk._dateTimeInstance;
},getDateInstance:function(){var dm=qx.util.format.DateFormat;
var dl=qx.locale.Date.getDateFormat(cp)+cw;

if(dm._dateInstance==null||dm._dateInstance.__nN!=dl){dm._dateInstance=new dm(dl);
}return dm._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:cm,AM_MARKER:"am",PM_MARKER:"pm"},members:{__nM:null,__nN:null,__nO:null,__nP:null,__nQ:null,__nR:function(dn,dp){var dq=cw+(dn<0?((-1)*dn):dn);

while(dq.length<dp){dq=bx+dq;
}return dn<0?cv+dq:dq;
},__nS:function(dr){var ds=new Date(dr.getTime());
var dt=ds.getDate();

while(ds.getMonth()!=0){ds.setDate(-1);
dt+=ds.getDate()+1;
}return dt;
},__nT:function(du){return new Date(du.getTime()+(3-((du.getDay()+6)%7))*86400000);
},__nU:function(dv){var dx=this.__nT(dv);
var dy=dx.getFullYear();
var dw=this.__nT(new Date(dy,0,4));
return Math.floor(1.5+(dx.getTime()-dw.getTime())/86400000/7);
},__nV:function(dz){var dB=this.__nT(dz);
var dA=this.__nT(new Date(dz.getFullYear(),dz.getMonth(),4));
return Math.floor(1.5+(dB.getTime()-dA.getTime())/86400000/7);
},__nW:function(dC){var dD=this.__nT(dC);
return dD.getFullYear();
},__nX:function(dE){var dF=new Date(dE,2,1);
dF.setDate(-1);
return dF.getDate()+1===29;
},__nY:function(dG,dH){var dL=0;
var dM=0;
if(!dH){dH=1971;
}var dI=0;

for(var i=1;i<=12;i++){var dK=new Date(dH,i,1);
dK.setDate(-1);
var dJ=dK.getDate()+1;
dI+=dJ;

if(dI<dG){dL++;
dM+=dJ;
}else{dM=dG-(dI-dJ);
break;
}}return {month:dL,day:dM};
},__oa:function(dN,dO,dP){var dQ;

switch(dO){case 11:dQ=dN-1;

if(dN!=this.__nW(new Date(dQ,dO,dP))){dQ=dN;
}break;
case 0:dQ=dN+1;

if(dN!=this.__nW(new Date(dQ,dO,dP))){dQ=dN;
}break;
default:dQ=dN;
}return dQ;
},format:function(dR){if(dR==null){return null;
}var dU=this.__nM;
var ea=dR.getFullYear();
var dV=dR.getMonth();
var dY=dR.getDate();
var ed=dR.getDay();
var eg=dR.getHours();
var em=dR.getMinutes();
var ee=dR.getSeconds();
var ek=dR.getMilliseconds();
var ec=dR.getTimezoneOffset();
var eh=ec>0?1:-1;
var dS=Math.floor(Math.abs(ec)/60);
var ej=Math.abs(ec)%60;
this.__ob();
var el=cw;

for(var i=0;i<this.__nQ.length;i++){var eb=this.__nQ[i];

if(eb.type==bw){el+=eb.text;
}else{var dT=eb.character;
var ef=eb.size;
var en=g;

switch(dT){case ca:if(ef==2){en=this.__nR(ea%100,2);
}else{var dW=Math.abs(ea);
en=dW+cw;

if(ef>en.length){for(var j=en.length;j<ef;j++){en=bx+en;
}}
if(ea<0){en=cv+en;
}}break;
case l:en=this.__nW(dR)+cw;
var dW=en.replace(I,r);

if(ef>en.length){for(var j=dW.length;j<ef;j++){dW=bx+dW;
}}en=en.indexOf(cv)!=-1?cv+dW:dW;
break;
case D:if(ef>=1&&ef<=3){en=ea>0?cD:n;
}else if(ef==4){en=ea>0?cJ:s;
}else if(ef==5){en=ea>0?bz:q;
}break;
case cH:if(ef==1||ef==2){en=this.__nR(parseInt(dV/4)+1,ef);
}
if(ef==3){en=cH+(parseInt(dV/4)+1);
}break;
case A:if(ef==1||ef==2){en=this.__nR(parseInt(dV/4)+1,ef);
}
if(ef==3){en=cH+(parseInt(dV/4)+1);
}break;
case bM:en=this.__nR(this.__nS(dR),ef);
break;
case co:en=this.__nR(dY,ef);
break;
case cR:en=this.__nR(this.__nU(dR),ef);
break;
case dc:en=this.__nV(dR);
break;
case d:if(ef>=1&&ef<=3){en=qx.locale.Date.getDayName(cu,ed,dU,cx);
}else if(ef==4){en=qx.locale.Date.getDayName(ct,ed,dU,cx);
}else if(ef==5){en=qx.locale.Date.getDayName(bC,ed,dU,cs);
}break;
case bT:var dX=qx.locale.Date.getWeekStart(dU);
var ei=ed+(1-dX>=0?1-dX:7+(1-dX));

if(ef>=1&&ef<=2){en=this.__nR(ei,ef);
}else if(ef==3){en=qx.locale.Date.getDayName(cu,ei,dU,cx);
}else if(ef==4){en=qx.locale.Date.getDayName(ct,ei,dU,cx);
}else if(ef==5){en=qx.locale.Date.getDayName(bC,ei,dU,cs);
}break;
case bs:var dX=qx.locale.Date.getWeekStart(dU);
var ei=ed+(1-dX>=0?1-dX:7+(1-dX));

if(ef==1){en=r+ei;
}else if(ef==3){en=qx.locale.Date.getDayName(cu,ei,dU,cx);
}else if(ef==4){en=qx.locale.Date.getDayName(ct,ei,dU,cx);
}else if(ef==5){en=qx.locale.Date.getDayName(bC,ei,dU,cs);
}break;
case cU:if(ef==1||ef==2){en=this.__nR(dV+1,ef);
}else if(ef==3){en=qx.locale.Date.getMonthName(cu,dV,dU,cx);
}else if(ef==4){en=qx.locale.Date.getMonthName(ct,dV,dU,cx);
}else if(ef==5){en=qx.locale.Date.getMonthName(bC,dV,dU,cs);
}break;
case S:if(ef==1||ef==2){en=this.__nR(dV+1,ef);
}else if(ef==3){en=qx.locale.Date.getMonthName(cu,dV,dU,cx);
}else if(ef==4){en=qx.locale.Date.getMonthName(ct,dV,dU,cx);
}else if(ef==5){en=qx.locale.Date.getMonthName(bC,dV,dU,cs);
}break;
case cf:en=(eg<12)?qx.locale.Date.getAmMarker(dU):qx.locale.Date.getPmMarker(dU);
break;
case bo:en=this.__nR(eg,ef);
break;
case bJ:en=this.__nR((eg==0)?24:eg,ef);
break;
case bU:en=this.__nR(eg%12,ef);
break;
case F:en=this.__nR(((eg%12)==0)?12:(eg%12),ef);
break;
case ci:en=this.__nR(em,ef);
break;
case N:en=this.__nR(ee,ef);
break;
case bp:en=ek+cw;

if(ef<=en.length){en=en.substr(0,ef);
}else{for(var j=en.length;j<ef;j++){en=en+bx;
}}break;
case m:if(ef>=1&&ef<=4){en=ch+((eh>0)?cv:cG)+this.__nR(Math.abs(dS),2)+cb+this.__nR(ej,2);
}break;
case t:if(ef>=1&&ef<=3){en=((eh>0)?cv:cG)+this.__nR(Math.abs(dS),2)+this.__nR(ej,2);
}else{en=ch+((eh>0)?cv:cG)+this.__nR(Math.abs(dS),2)+cb+this.__nR(ej,2);
}break;
}el+=en;
}}return el;
},parse:function(eo){this.__oc();
var ex=this.__nO.regex.exec(eo);

if(ex==null){throw new Error("Date string '"+eo+"' does not match the date format: "+this.__nN);
}var ep={era:1,year:1970,quarter:1,month:0,day:1,dayOfYear:1,hour:0,ispm:false,weekDay:4,weekYear:1970,weekOfMonth:1,weekOfYear:1,min:0,sec:0,ms:0};
var er=1;
var eq=false;
var es=false;

for(var i=0;i<this.__nO.usedRules.length;i++){var et=this.__nO.usedRules[i];
var eu=ex[er];

if(et.field!=null){ep[et.field]=parseInt(eu,10);
}else{et.manipulator(ep,eu);
}
if(et.pattern==cL){var ev=false;

for(var k=0;k<this.__nO.usedRules.length;k++){if(this.__nO.usedRules[k].pattern==bY){ev=true;
break;
}}
if(!ev){eq=true;
}}
if(et.pattern.indexOf(p)!=-1){var ez=false;

for(var k=0;k<this.__nO.usedRules.length;k++){if(this.__nO.usedRules[k].pattern.indexOf(o)!=-1){ez=true;
break;
}}
if(!ez){es=true;
}}er+=(et.groups==null)?1:et.groups;
}
if(eq){ep.year=this.__oa(ep.weekYear,ep.month,ep.day);
}
if(es){var ey=this.__nY(ep.dayOfYear,ep.year);
ep.month=ey.month;
ep.day=ey.day;
}
if(ep.era<0&&(ep.year*ep.era<0)){ep.year=ep.year*ep.era;
}var ew=new Date(ep.year,ep.month,ep.day,(ep.ispm)?(ep.hour+12):ep.hour,ep.min,ep.sec,ep.ms);

if(ep.month!=ew.getMonth()||ep.year!=ew.getFullYear()){throw new Error("Error parsing date '"+eo+"': the value for day or month is too large");
}return ew;
},__ob:function(){if(this.__nQ!=null){return;
}this.__nQ=[];
var eE;
var eC=0;
var eG=cw;
var eA=this.__nN;
var eD=by;
var i=0;

while(i<eA.length){var eF=eA.charAt(i);

switch(eD){case cd:if(eF==bu){if(i+1>=eA.length){i++;
break;
}var eB=eA.charAt(i+1);

if(eB==bu){eG+=eF;
i++;
}else{i++;
eD=cr;
}}else{eG+=eF;
i++;
}break;
case bv:if(eF==eE){eC++;
i++;
}else{this.__nQ.push({type:bv,character:eE,size:eC});
eE=null;
eC=0;
eD=by;
}break;
default:if((eF>=cf&&eF<=m)||(eF>=bz&&eF<=t)){eE=eF;
eD=bv;
}else if(eF==bu){if(i+1>=eA.length){eG+=eF;
i++;
break;
}var eB=eA.charAt(i+1);

if(eB==bu){eG+=eF;
i++;
}i++;
eD=cd;
}else{eD=by;
}
if(eD!=by){if(eG.length>0){this.__nQ.push({type:bw,text:eG});
eG=cw;
}}else{eG+=eF;
i++;
}break;
}}if(eE!=null){this.__nQ.push({type:bv,character:eE,size:eC});
}else if(eG.length>0){this.__nQ.push({type:bw,text:eG});
}},__oc:function(){if(this.__nO!=null){return ;
}var eK=this.__nN;
this.__oe();
this.__ob();
var eQ=[];
var eM=W;

for(var eI=0;eI<this.__nQ.length;eI++){var eR=this.__nQ[eI];

if(eR.type==bw){eM+=qx.lang.String.escapeRegexpChars(eR.text);
}else{var eJ=eR.character;
var eN=eR.size;
var eL;

for(var eS=0;eS<this.__nP.length;eS++){var eO=this.__nP[eS];

if(this.__od(eO,eJ,eN)){eL=eO;
break;
}}if(eL==null){var eP=cw;

for(var i=0;i<eN;i++){eP+=eJ;
}throw new Error("Malformed date format: "+eK+". Wildcard "+eP+" is not supported");
}else{eQ.push(eL);
eM+=eL.regex;
}}}eM+=cN;
var eH;

try{eH=new RegExp(eM);
}catch(eT){throw new Error("Malformed date format: "+eK);
}this.__nO={regex:eH,"usedRules":eQ,pattern:eM};
},__od:function(eU,eV,eW){if(eV===ca&&eU.pattern===bY){eU.regex=eU.regexFunc(eW);
return true;
}else if(eV===l&&eU.pattern===bg){eU.regex=eU.regexFunc(eW);
return true;
}else{return eV==eU.pattern.charAt(0)&&eW==eU.pattern.length;
}},__oe:function(){var fo=qx.util.format.DateFormat;
var fr=qx.lang.String;

if(this.__nP!=null){return ;
}var fp=this.__nP=[];
var fj=qx.locale.Date.getAmMarker(this.__nM).toString()||fo.AM_MARKER;
var fB=qx.locale.Date.getPmMarker(this.__nM).toString()||fo.PM_MARKER;
var fa=this.__nM;
var fg=function(fI,fJ){fJ=parseInt(fJ,10);

if(fJ>0){if(fJ<fo.ASSUME_YEAR_2000_THRESHOLD){fJ+=2000;
}else if(fJ<100){fJ+=1900;
}}fI.year=fJ;
};
var fF=function(fK,fL){fL=parseInt(fL,10);

if(fL>0){if(fL<fo.ASSUME_YEAR_2000_THRESHOLD){fL+=2000;
}else if(fL<100){fL+=1900;
}}fK.weekYear=fL;
};
var fH=function(fM,fN){fM.month=parseInt(fN,10)-1;
};
var fe=function(fO,fP){var fR=qx.locale.Date.getWeekStart(fa);
var fQ=(1-fR>=0?1-fR:7+(1-fR))-fP;
fO.weekDay=fQ;
};
var fc=function(fS,fT){var fU=qx.locale.Date.getPmMarker(fa).toString()||fo.PM_MARKER;
fS.ispm=(fT==fU);
};
var fi=function(fV,fW){fV.hour=parseInt(fW,10)%24;
};
var fb=function(fX,fY){fX.hour=parseInt(fY,10)%12;
};
var fu=function(ga,gb){return;
};
var fv=[bz,q];
var fy=function(gc,gd){gc.era=gd==bz?1:-1;
};
var fm=[cD,n];
var fl=function(ge,gf){ge.era=gf==cD?1:-1;
};
var fA=[cJ,s];
var fk=function(gg,gh){gg.era=gh==cJ?1:-1;
};
var fD=[bG,bV,cS,f];
var eX=function(gi,gj){gi.quarter=fD.indexOf(gj);
};
var fz=[bq,x,P,X];
var ft=function(gk,gl){gk.quarter=fz.indexOf(gl);
};
var fE=qx.locale.Date.getMonthNames(cu,fa,cx);

for(var i=0;i<fE.length;i++){fE[i]=fr.escapeRegexpChars(fE[i].toString());
}var ff=function(gm,gn){gn=fr.escapeRegexpChars(gn);
gm.month=fE.indexOf(gn);
};
var fq=qx.locale.Date.getMonthNames(ct,fa,cx);

for(var i=0;i<fq.length;i++){fq[i]=fr.escapeRegexpChars(fq[i].toString());
}var fw=function(go,gp){gp=fr.escapeRegexpChars(gp);
go.month=fq.indexOf(gp);
};
var fG=qx.locale.Date.getMonthNames(bC,fa,cs);

for(var i=0;i<fG.length;i++){fG[i]=fr.escapeRegexpChars(fG[i].toString());
}var fd=function(gq,gr){gr=fr.escapeRegexpChars(gr);
gq.month=fG.indexOf(gr);
};
var eY=qx.locale.Date.getDayNames(bC,fa,cs);

for(var i=0;i<eY.length;i++){eY[i]=fr.escapeRegexpChars(eY[i].toString());
}var fC=function(gs,gt){gt=fr.escapeRegexpChars(gt);
gs.weekDay=eY.indexOf(gt);
};
var fx=qx.locale.Date.getDayNames(cu,fa,cx);

for(var i=0;i<fx.length;i++){fx[i]=fr.escapeRegexpChars(fx[i].toString());
}var fh=function(gu,gv){gv=fr.escapeRegexpChars(gv);
gu.weekDay=fx.indexOf(gv);
};
var fs=qx.locale.Date.getDayNames(ct,fa,cx);

for(var i=0;i<fs.length;i++){fs[i]=fr.escapeRegexpChars(fs[i].toString());
}var fn=function(gw,gx){gx=fr.escapeRegexpChars(gx);
gw.weekDay=fs.indexOf(gx);
};
fp.push({pattern:cl,regexFunc:function(gy){var gz=cK;

for(var i=0;i<gy;i++){gz+=cW;

if(i===gy-1&&i!==1){gz+=de;
}}gz+=cB;
return gz;
},manipulator:fg});
fp.push({pattern:cL,regexFunc:function(gA){var gB=cK;

for(var i=0;i<gA;i++){gB+=cW;

if(i===gA-1){gB+=de;
}}gB+=cB;
return gB;
},manipulator:fF});
fp.push({pattern:bj,regex:cA+fm.join(cz)+cB,manipulator:fl});
fp.push({pattern:bk,regex:cA+fm.join(cz)+cB,manipulator:fl});
fp.push({pattern:J,regex:cA+fm.join(cz)+cB,manipulator:fl});
fp.push({pattern:bO,regex:cA+fA.join(cz)+cB,manipulator:fk});
fp.push({pattern:V,regex:cA+fv.join(cz)+cB,manipulator:fy});
fp.push({pattern:bb,regex:bB,field:bA});
fp.push({pattern:bE,regex:cy,field:bA});
fp.push({pattern:M,regex:cA+fD.join(cz)+cB,manipulator:eX});
fp.push({pattern:bd,regex:cA+fz.join(cz)+cB,manipulator:ft});
fp.push({pattern:u,regex:bB,field:bA});
fp.push({pattern:a,regex:cy,field:bA});
fp.push({pattern:O,regex:cA+fD.join(cz)+cB,manipulator:eX});
fp.push({pattern:db,regex:cA+fz.join(cz)+cB,manipulator:ft});
fp.push({pattern:cQ,regex:bB,manipulator:fH});
fp.push({pattern:bW,regex:cy,manipulator:fH});
fp.push({pattern:cO,regex:cA+fE.join(cz)+cB,manipulator:ff});
fp.push({pattern:br,regex:cA+fq.join(cz)+cB,manipulator:fw});
fp.push({pattern:e,regex:cA+fG.join(cz)+cB,manipulator:fd});
fp.push({pattern:bR,regex:bB,manipulator:fH});
fp.push({pattern:Q,regex:cy,manipulator:fH});
fp.push({pattern:b,regex:cA+fE.join(cz)+cB,manipulator:ff});
fp.push({pattern:bL,regex:cA+fq.join(cz)+cB,manipulator:fw});
fp.push({pattern:bD,regex:cA+fG.join(cz)+cB,manipulator:fd});
fp.push({pattern:w,regex:cy,field:ce});
fp.push({pattern:o,regex:bB,field:ce});
fp.push({pattern:p,regex:bt,field:cC});
fp.push({pattern:cT,regex:cy,field:cC});
fp.push({pattern:bH,regex:Y,field:cC});
fp.push({pattern:cn,regex:cA+fx.join(cz)+cB,manipulator:fh});
fp.push({pattern:K,regex:cA+fx.join(cz)+cB,manipulator:fh});
fp.push({pattern:cM,regex:cA+fx.join(cz)+cB,manipulator:fh});
fp.push({pattern:R,regex:cA+fs.join(cz)+cB,manipulator:fn});
fp.push({pattern:L,regex:cA+eY.join(cz)+cB,manipulator:fC});
fp.push({pattern:bQ,regex:bt,manipulator:fe});
fp.push({pattern:v,regex:cy,manipulator:fe});
fp.push({pattern:y,regex:cA+fx.join(cz)+cB,manipulator:fh});
fp.push({pattern:bF,regex:cA+fs.join(cz)+cB,manipulator:fn});
fp.push({pattern:dd,regex:cA+eY.join(cz)+cB,manipulator:fC});
fp.push({pattern:bc,regex:cq,manipulator:fe});
fp.push({pattern:bi,regex:cA+fx.join(cz)+cB,manipulator:fh});
fp.push({pattern:bP,regex:cA+fs.join(cz)+cB,manipulator:fn});
fp.push({pattern:ck,regex:cA+eY.join(cz)+cB,manipulator:fC});
fp.push({pattern:C,regex:cA+fj+cz+fB+cB,manipulator:fc});
fp.push({pattern:bN,regex:bt,field:bh});
fp.push({pattern:H,regex:bt,field:cc});
fp.push({pattern:be,regex:cy,field:cc});
fp.push({pattern:bK,regex:cy,field:cI});
fp.push({pattern:bf,regex:cy,field:cI});
fp.push({pattern:bl,regex:cy,manipulator:fi});
fp.push({pattern:cj,regex:cy,manipulator:fi});
fp.push({pattern:df,regex:cy,field:cI});
fp.push({pattern:B,regex:cy,field:cI});
fp.push({pattern:bS,regex:cy,manipulator:fb});
fp.push({pattern:dg,regex:cy,manipulator:fb});
fp.push({pattern:G,regex:cy,field:cY});
fp.push({pattern:bI,regex:cy,field:cY});
fp.push({pattern:bm,regex:cy,field:cX});
fp.push({pattern:cP,regex:cy,field:cX});
fp.push({pattern:U,regex:cF,field:cE});
fp.push({pattern:cV,regex:cF,field:cE});
fp.push({pattern:E,regex:cF,field:cE});
fp.push({pattern:T,regex:bn,manipulator:fu});
fp.push({pattern:c,regex:ba,manipulator:fu});
}},destruct:function(){this.__nQ=this.__nO=this.__nP=null;
}});
})();
(function(){var k="Placeholder",j="Button",h="CheckBox:",g="TextArea:",f="Boolean",e="RepeatButton:",d="HoverButton:",c="demobrowser.demo.ui.overview.pages.Form",b="HoverButton",a="execute",V="Website 2",U="Text",T="ToggleButton",S="RadioButton 1",R="RadioButton 3",Q="Button:",P="ComboBox:",O="ToggleButton:",N="Options",M="RadioButton",r="MenuButton:",s="PasswordField:",p="SplitButton",q="Password",n="Buttons",o="",l="RadioButtons:",m="dd.mm.YYYY",t="List:",u="SplitButton:",B="Option",z="0",F="Spinner:",D="Selection",I="DateField:",H="RadioButton 2",w="Number",L="CheckBox",K="SelectBox:",J="Website 3",v="MenuButton",x="Form",y="Website 1",A="Slider:",C="TextField:",E="Item ",G="RadioButtonGroup:";
qx.Class.define(c,{extend:qx.ui.tabview.Page,include:demobrowser.demo.ui.overview.MControls,statics:{ITEM_SIZE:3},construct:function(){qx.ui.tabview.Page.call(this);
this.setLabel(x);
this.setLayout(new qx.ui.layout.Canvas());
this._initWidgets();
this._initControls(this.__Rc,{disabled:true,hovered:true,focused:true,invalid:true});
},members:{__Rc:null,_initWidgets:function(){this.__Rc=new qx.type.Array();
var W=new qx.ui.groupbox.GroupBox(U);
W.setLayout(new qx.ui.layout.Grid(8,8));
W.setWidth(290);
this.add(W,{left:0,top:40});
var bx=new qx.ui.form.TextField();
this.__Rc.push(bx);
bx.setPlaceholder(k);
var bf=new qx.ui.basic.Label(C);
bf.setBuddy(bx);
W.add(bf,{row:0,column:0});
W.add(bx,{row:0,column:1});
var bd=new qx.ui.form.PasswordField();
this.__Rc.push(bd);
bd.setPlaceholder(q);
bf=new qx.ui.basic.Label(s);
bf.setBuddy(bd);
W.add(bf,{row:1,column:0});
W.add(bd,{row:1,column:1});
var X=new qx.ui.form.TextArea();
this.__Rc.push(X);
X.setPlaceholder(k);
bf=new qx.ui.basic.Label(g);
bf.setBuddy(X);
W.add(bf,{row:2,column:0});
W.add(X,{row:2,column:1});
var Y=new qx.ui.form.ComboBox();
this.__Rc.push(Y);
Y.setPlaceholder(k);
bf=new qx.ui.basic.Label(P);
bf.setBuddy(Y);
W.add(bf,{row:3,column:0});
W.add(Y,{row:3,column:1});
this.createItems(Y);
var bq=new qx.ui.form.DateField();
this.__Rc.push(bq);
bq.setPlaceholder(m);
bf=new qx.ui.basic.Label(I);
bf.setBuddy(bq);
W.add(bf,{row:4,column:0});
W.add(bq,{row:4,column:1});
var be=new qx.ui.groupbox.GroupBox(D);
be.setLayout(new qx.ui.layout.Grid(8,8));
be.setWidth(290);
this.add(be,{left:0,top:290});
var br=new qx.ui.form.SelectBox();
this.__Rc.push(br);
bf=new qx.ui.basic.Label(K);
bf.setBuddy(br);
be.add(bf,{row:0,column:0});
be.add(br,{row:0,column:1});
this.createItems(br);
var bw=new qx.ui.form.List();
this.__Rc.push(bw);
bw.setHeight(60);
bw.setWidth(155);
bf=new qx.ui.basic.Label(t);
bf.setBuddy(bw);
be.add(bf,{row:1,column:0});
be.add(bw,{row:1,column:1});
this.createItems(bw);
var bk=new qx.ui.form.RadioButtonGroup();
this.__Rc.push(bk);
var bp=new qx.ui.form.RadioButton(S);
var bo=new qx.ui.form.RadioButton(H);
var bn=new qx.ui.form.RadioButton(R);
bk.add(bp);
bk.add(bo);
bk.add(bn);
bf=new qx.ui.basic.Label(G);
bf.setBuddy(bk);
be.add(bf,{row:2,column:0});
be.add(bk,{row:2,column:1});
var bu=new qx.ui.groupbox.GroupBox(n);
bu.setLayout(new qx.ui.layout.Grid(8,8));
bu.setWidth(210);
this.add(bu,{left:330,top:40});
var bv=new qx.ui.form.Button(j);
this.__Rc.push(bv);
bf=new qx.ui.basic.Label(Q);
bf.setBuddy(bv);
bu.add(bf,{row:0,column:0});
bu.add(bv,{row:0,column:1});
var bb=new qx.ui.form.ToggleButton(T);
this.__Rc.push(bb);
bf=new qx.ui.basic.Label(O);
bf.setBuddy(bb);
bu.add(bf,{row:1,column:0});
bu.add(bb,{row:1,column:1});
var bi=new qx.ui.form.RepeatButton(z);
this.__Rc.push(bi);
bf=new qx.ui.basic.Label(e);
bf.setBuddy(bi);
bu.add(bf,{row:2,column:0});
bu.add(bi,{row:2,column:1});
var bj=new qx.ui.form.MenuButton(v,null,this.createMenuForMenuButton());
this.__Rc.push(bj);
bf=new qx.ui.basic.Label(r);
bf.setBuddy(bj);
bu.add(bf,{row:3,column:0});
bu.add(bj,{row:3,column:1});
var bl=new qx.ui.form.HoverButton(b);
this.__Rc.push(bl);
bf=new qx.ui.basic.Label(d);
bf.setBuddy(bl);
bu.add(bf,{row:4,column:0});
bu.add(bl,{row:4,column:1});
var bc=new qx.ui.form.SplitButton(p,null,this.createMenuForSplitButton());
this.__Rc.push(bc);
bf=new qx.ui.basic.Label(u);
bf.setBuddy(bc);
bu.add(bf,{row:5,column:0});
bu.add(bc,{row:5,column:1});
bi.addListener(a,function(){var by=parseInt(bi.getLabel())+1;
bi.setLabel(by.toString());
});
var ba=new qx.ui.groupbox.GroupBox(f);
ba.setLayout(new qx.ui.layout.Grid(8,8));
ba.setWidth(210);
this.add(ba,{left:330,top:290});
var bs=new qx.ui.form.CheckBox(L);
this.__Rc.push(bs);
bf=new qx.ui.basic.Label(h);
bf.setBuddy(bs);
ba.add(bf,{row:0,column:0});
ba.add(bs,{row:0,column:1});
var bh=new qx.ui.form.RadioButton(M);
this.__Rc.push(bh);
bf=new qx.ui.basic.Label(l);
bf.setBuddy(bh);
ba.add(bf,{row:1,column:0});
ba.add(bh,{row:1,column:1});
var bt=new qx.ui.groupbox.GroupBox(w);
bt.setLayout(new qx.ui.layout.Grid(8,8));
bt.setWidth(210);
this.add(bt,{left:330,top:380});
var bg=new qx.ui.form.Spinner(0,50,100);
this.__Rc.push(bg);
bf=new qx.ui.basic.Label(F);
bf.setBuddy(bg);
bt.add(bf,{row:0,column:0});
bt.add(bg,{row:0,column:1});
var bm=new qx.ui.form.Slider();
this.__Rc.push(bm);
bm.setWidth(130);
bf=new qx.ui.basic.Label(A);
bf.setBuddy(bm);
bt.add(bf,{row:1,column:0});
bt.add(bm,{row:1,column:1});
},createItems:function(bz){for(var i=0;i<this.self(arguments).ITEM_SIZE;i++){var bA=new qx.ui.form.ListItem(E+i);
bz.add(bA);
}},createMenuForMenuButton:function(){var bB=new qx.ui.menu.Menu;

for(var i=0;i<3;i++){bB.add(new qx.ui.menu.RadioButton(B+i));
}var bE=new qx.ui.form.RadioGroup;
bE.add.apply(bE,bB.getChildren());
var bD=new qx.ui.menu.Menu();

for(var i=0;i<3;i++){var bF=new qx.ui.menu.Button(j+i);
bD.add(bF);
}var bC=new qx.ui.menu.Button(N,o,null,bB);
bD.addSeparator();
bD.add(bC);
return bD;
},createMenuForSplitButton:function(){var bG=new qx.ui.menu.Menu;
var bJ=new qx.ui.menu.Button(y);
var bH=new qx.ui.menu.Button(V);
var bI=new qx.ui.menu.Button(J);
bG.add(bJ);
bG.add(bH);
bG.add(bI);
return bG;
}}});
})();
(function(){var c="password",b="qx.ui.form.PasswordField",a="input";
qx.Class.define(b,{extend:qx.ui.form.TextField,members:{_createInputElement:function(){var d=new qx.html.Input(c);
d.addListener(a,this._onHtmlInput,this);
return d;
}}});
})();
(function(){var h="auto",g="textarea",f="Boolean",d="qx.ui.form.TextArea",c="_applyWrap",b="Integer",a="mousewheel";
qx.Class.define(d,{extend:qx.ui.form.AbstractField,construct:function(i){qx.ui.form.AbstractField.call(this,i);
this.initWrap();
this.addListener(a,this._onMousewheel,this);
},properties:{wrap:{check:f,init:true,apply:c},appearance:{refine:true,init:g},singleStep:{check:b,init:20}},members:{_onMousewheel:function(e){var j=this.getContentElement();
var scrollY=j.getScrollY();
j.scrollToY(scrollY+e.getWheelDelta()*this.getSingleStep());
var k=j.getScrollY();

if(k!=scrollY){e.stop();
}},_createInputElement:function(){return new qx.html.Input(g,{overflowX:h,overflowY:h});
},_applyWrap:function(l,m){this.getContentElement().setWrap(l);
},_getContentHint:function(){var n=qx.ui.form.AbstractField.prototype._getContentHint.call(this);
n.height=n.height*4;
n.width=this._getTextSize().width*20;
return n;
}}});
})();
(function(){var v="popup",u="list",t="",s="mousewheel",r="resize",q="Function",p="blur",o="abstract",n="keypress",m="Number",f="qx.ui.form.AbstractSelectBox",l="changeSelection",i="PageUp",c="_applyMaxListHeight",b="PageDown",h="mouseup",g="Escape",j="changeVisibility",a="one",k="middle",d="mousedown";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:o,construct:function(){qx.ui.core.Widget.call(this);
var x=new qx.ui.layout.HBox();
this._setLayout(x);
x.setAlignY(k);
this.addListener(n,this._onKeyPress);
this.addListener(p,this._onBlur,this);
var w=qx.core.Init.getApplication().getRoot();
w.addListener(s,this._onMousewheel,this,true);
this.addListener(r,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:m,apply:c,nullable:true,init:200},format:{check:q,init:function(y){return this._defaultFormat(y);
},nullable:true}},members:{_createChildControlImpl:function(z,A){var B;

switch(z){case u:B=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:a,quickSelection:true});
B.addListener(l,this._onListChangeSelection,this);
B.addListener(d,this._onListMouseDown,this);
break;
case v:B=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
B.setAutoHide(false);
B.setKeepActive(true);
B.addListener(h,this.close,this);
B.add(this.getChildControl(u));
B.addListener(j,this._onPopupChangeVisibility,this);
break;
}return B||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,z);
},_applyMaxListHeight:function(C,D){this.getChildControl(u).setMaxHeight(C);
},getChildrenContainer:function(){return this.getChildControl(u);
},open:function(){var E=this.getChildControl(v);
E.placeToWidget(this,true);
E.show();
},close:function(){this.getChildControl(v).hide();
},toggle:function(){var F=this.getChildControl(v).isVisible();

if(F){this.close();
}else{this.open();
}},_defaultFormat:function(G){var H=G?G.getLabel():t;
var I=G?G.getRich():false;

if(I){H=H.replace(/<[^>]+?>/g,t);
H=qx.bom.String.unescape(H);
}return H;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var J=e.getKeyIdentifier();
var K=this.getChildControl(v);
if(K.isHidden()&&(J==b||J==i)){e.stopPropagation();
}else if(!K.isHidden()&&J==g){this.close();
e.stop();
}else{this.getChildControl(u).handleKeyPress(e);
}},_onMousewheel:function(e){var M=e.getTarget();
var L=this.getChildControl(v,true);

if(L==null){return;
}
if(qx.ui.core.Widget.contains(L,M)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(v).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var N=qx.core.Init.getApplication().getRoot();

if(N){N.removeListener(s,this._onMousewheel,this,true);
}}});
})();
(function(){var k="textfield",j="button",i="list",h="changeValue",g="selected",f="inner",d="focusin",c="popup",b="focusout",a="blur",w="Enter",v="key",u="Down",t="qx.event.type.Data",s="visible",r="quick",q="String",p="qx.ui.form.ComboBox",o="single",n="combobox",l="click",m="_applyPlaceholder";
qx.Class.define(p,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.form.IStringForm],construct:function(){qx.ui.form.AbstractSelectBox.call(this);
var x=this._createChildControl(k);
this._createChildControl(j);
this.addListener(l,this._onClick);
this.addListener(d,function(e){x.fireNonBubblingEvent(d,qx.event.type.Focus);
},this);
this.addListener(b,function(e){x.fireNonBubblingEvent(b,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:n},placeholder:{check:q,nullable:true,apply:m}},events:{"changeValue":t},members:{__yn:null,__yo:null,_applyPlaceholder:function(y,z){this.getChildControl(k).setPlaceholder(y);
},_createChildControlImpl:function(A,B){var C;

switch(A){case k:C=new qx.ui.form.TextField();
C.setFocusable(false);
C.addState(f);
C.addListener(h,this._onTextFieldChangeValue,this);
C.addListener(a,this.close,this);
this._add(C,{flex:1});
break;
case j:C=new qx.ui.form.Button();
C.setFocusable(false);
C.setKeepActive(true);
C.addState(f);
this._add(C);
break;
case i:C=qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,A);
C.setSelectionMode(o);
break;
}return C||qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,A);
},_forwardStates:{focused:true},tabFocus:function(){var D=this.getChildControl(k);
D.getFocusElement().focus();
D.selectAllText();
},focus:function(){qx.ui.form.AbstractSelectBox.prototype.focus.call(this);
this.getChildControl(k).getFocusElement().focus();
},setValue:function(E){var F=this.getChildControl(k);

if(F.getValue()==E){return;
}F.setValue(E);
},getValue:function(){return this.getChildControl(k).getValue();
},resetValue:function(){this.getChildControl(k).setValue(null);
},_onKeyPress:function(e){var H=this.getChildControl(c);
var G=e.getKeyIdentifier();

if(G==u&&e.isAltPressed()){this.getChildControl(j).addState(g);
this.toggle();
e.stopPropagation();
}else if(G==w){if(H.isVisible()){this._setPreselectedItem();
this.resetAllTextSelection();
this.close();
e.stop();
}}else if(H.isVisible()){qx.ui.form.AbstractSelectBox.prototype._onKeyPress.call(this,e);
}},_onClick:function(e){var I=e.getTarget();

if(I==this.getChildControl(j)){this.toggle();
}else{this.close();
}},_onListMouseDown:function(e){this._setPreselectedItem();
},_setPreselectedItem:function(){if(this.__yn){var J=this.__yn.getLabel();

if(this.getFormat()!=null){J=this.getFormat().call(this,this.__yn);
}if(J&&J.translate){J=J.translate();
}this.setValue(J);
this.__yn=null;
}},_onListChangeSelection:function(e){var K=e.getData();

if(K.length>0){var M=this.getChildControl(i);
var L=M.getSelectionContext();

if(L==r||L==v){this.__yn=K[0];
}else{var N=K[0].getLabel();

if(this.getFormat()!=null){N=this.getFormat().call(this,K[0]);
}if(N&&N.translate){N=N.translate();
}this.setValue(N);
this.__yn=null;
}}},_onPopupChangeVisibility:function(e){var P=this.getChildControl(c);

if(P.isVisible()){var Q=this.getChildControl(i);
var R=this.getValue();
var O=null;

if(R){O=Q.findItem(R);
}
if(O){Q.setSelection([O]);
}else{Q.resetSelection();
}}else{if(e.getOldData()==s){this.tabFocus();
}}this.getChildControl(j).removeState(g);
},_onTextFieldChangeValue:function(e){var U=e.getData();
var T=this.getChildControl(i);

if(U!=null){var S=T.findItem(U,false);

if(S){T.setSelection([S]);
}else{T.resetSelection();
}}else{T.resetSelection();
}this.fireDataEvent(h,U,e.getOldData());
},getTextSelection:function(){return this.getChildControl(k).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(k).getTextSelectionLength();
},setTextSelection:function(V,W){this.getChildControl(k).setTextSelection(V,W);
},clearTextSelection:function(){this.getChildControl(k).clearTextSelection();
},selectAllText:function(){this.getChildControl(k).selectAllText();
},resetAllTextSelection:function(){this.clearTextSelection();
this.selectAllText();
}}});
})();
(function(){var v="single",u="Boolean",t="one",s="changeSelection",r="mouseup",q="mousedown",p="__lh",o="losecapture",n="multi",m="_applyQuickSelection",d="mouseover",l="_applySelectionMode",h="_applyDragSelection",c="qx.ui.core.MMultiSelectionHandling",b="removeItem",g="keypress",f="qx.event.type.Data",j="addItem",a="additive",k="mousemove";
qx.Mixin.define(c,{construct:function(){var x=this.SELECTION_MANAGER;
var w=this.__lh=new x(this);
this.addListener(q,w.handleMouseDown,w);
this.addListener(r,w.handleMouseUp,w);
this.addListener(d,w.handleMouseOver,w);
this.addListener(k,w.handleMouseMove,w);
this.addListener(o,w.handleLoseCapture,w);
this.addListener(g,w.handleKeyPress,w);
this.addListener(j,w.handleAddItem,w);
this.addListener(b,w.handleRemoveItem,w);
w.addListener(s,this._onSelectionChange,this);
},events:{"changeSelection":f},properties:{selectionMode:{check:[v,n,a,t],init:v,apply:l},dragSelection:{check:u,init:false,apply:h},quickSelection:{check:u,init:false,apply:m}},members:{__lh:null,selectAll:function(){this.__lh.selectAll();
},isSelected:function(y){if(!qx.ui.core.Widget.contains(this,y)){throw new Error("Could not test if "+y+" is selected, because it is not a child element!");
}return this.__lh.isItemSelected(y);
},addToSelection:function(z){if(!qx.ui.core.Widget.contains(this,z)){throw new Error("Could not add + "+z+" to selection, because it is not a child element!");
}this.__lh.addItem(z);
},removeFromSelection:function(A){if(!qx.ui.core.Widget.contains(this,A)){throw new Error("Could not remove "+A+" from selection, because it is not a child element!");
}this.__lh.removeItem(A);
},selectRange:function(B,C){this.__lh.selectItemRange(B,C);
},resetSelection:function(){this.__lh.clearSelection();
},setSelection:function(D){for(var i=0;i<D.length;i++){if(!qx.ui.core.Widget.contains(this,D[i])){throw new Error("Could not select "+D[i]+", because it is not a child element!");
}}
if(D.length===0){this.resetSelection();
}else{var E=this.getSelection();

if(!qx.lang.Array.equals(E,D)){this.__lh.replaceSelection(D);
}}},getSelection:function(){return this.__lh.getSelection();
},getSortedSelection:function(){return this.__lh.getSortedSelection();
},isSelectionEmpty:function(){return this.__lh.isSelectionEmpty();
},getSelectionContext:function(){return this.__lh.getSelectionContext();
},_getManager:function(){return this.__lh;
},getSelectables:function(F){return this.__lh.getSelectables(F);
},invertSelection:function(){this.__lh.invertSelection();
},_getLeadItem:function(){var G=this.__lh.getMode();

if(G===v||G===t){return this.__lh.getSelectedItem();
}else{return this.__lh.getLeadItem();
}},_applySelectionMode:function(H,I){this.__lh.setMode(H);
},_applyDragSelection:function(J,K){this.__lh.setDrag(J);
},_applyQuickSelection:function(L,M){this.__lh.setQuick(L);
},_onSelectionChange:function(e){this.fireDataEvent(s,e.getData());
}},destruct:function(){this._disposeObjects(p);
}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(b){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var o="one",n="single",m="selected",k="additive",j="multi",h="PageUp",g="under",f="Left",d="lead",c="Down",M="Up",L="Boolean",K="PageDown",J="anchor",I="End",H="Home",G="Right",F="right",E="click",D="above",v="left",w="Escape",t="__ll",u="A",r="Space",s="_applyMode",p="interval",q="changeSelection",x="qx.event.type.Data",y="quick",A="key",z="abstract",C="drag",B="qx.ui.core.selection.Abstract";
qx.Class.define(B,{type:z,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__li={};
},events:{"changeSelection":x},properties:{mode:{check:[n,j,k,o],init:n,apply:s},drag:{check:L,init:false},quick:{check:L,init:false}},members:{__lj:0,__lk:0,__ll:null,__lm:null,__ln:null,__lo:null,__lp:null,__lq:null,__lr:null,__ls:null,__lt:null,__lu:null,__lv:null,__lw:null,__lx:null,__ly:null,__lz:null,__li:null,__lA:null,__lB:null,_userInteraction:false,__lC:null,getSelectionContext:function(){return this.__ly;
},selectAll:function(){var N=this.getMode();

if(N==n||N==o){throw new Error("Can not select all items in selection mode: "+N);
}this._selectAllItems();
this._fireChange();
},selectItem:function(O){this._setSelectedItem(O);
var P=this.getMode();

if(P!==n&&P!==o){this._setLeadItem(O);
this._setAnchorItem(O);
}this._scrollItemIntoView(O);
this._fireChange();
},addItem:function(Q){var R=this.getMode();

if(R===n||R===o){this._setSelectedItem(Q);
}else{if(!this._getAnchorItem()){this._setAnchorItem(Q);
}this._setLeadItem(Q);
this._addToSelection(Q);
}this._scrollItemIntoView(Q);
this._fireChange();
},removeItem:function(S){this._removeFromSelection(S);

if(this.getMode()===o&&this.isSelectionEmpty()){var T=this._getFirstSelectable();

if(T){this.addItem(T);
}if(T==S){return;
}}
if(this.getLeadItem()==S){this._setLeadItem(null);
}
if(this._getAnchorItem()==S){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(U,V){var W=this.getMode();

if(W==n||W==o){throw new Error("Can not select multiple items in selection mode: "+W);
}this._selectItemRange(U,V);
this._setAnchorItem(U);
this._setLeadItem(V);
this._scrollItemIntoView(V);
this._fireChange();
},clearSelection:function(){if(this.getMode()==o){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(X){var Y=this.getMode();

if(Y==o||Y===n){if(X.length>1){throw new Error("Could not select more than one items in mode: "+Y+"!");
}
if(X.length==1){this.selectItem(X[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(X);
}},getSelectedItem:function(){var ba=this.getMode();

if(ba===n||ba===o){var bb=this._getSelectedItem();
return bb!=undefined?bb:null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__li);
},getSortedSelection:function(){var bd=this.getSelectables();
var bc=qx.lang.Object.getValues(this.__li);
bc.sort(function(a,b){return bd.indexOf(a)-bd.indexOf(b);
});
return bc;
},isItemSelected:function(be){var bf=this._selectableToHashCode(be);
return this.__li[bf]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__li);
},invertSelection:function(){var bh=this.getMode();

if(bh===n||bh===o){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bg=this.getSelectables();

for(var i=0;i<bg.length;i++){this._toggleInSelection(bg[i]);
}this._fireChange();
},_setLeadItem:function(bi){var bj=this.__lz;

if(bj!==null){this._styleSelectable(bj,d,false);
}
if(bi!==null){this._styleSelectable(bi,d,true);
}this.__lz=bi;
},getLeadItem:function(){return this.__lz!==null?this.__lz:null;
},_setAnchorItem:function(bk){var bl=this.__lA;

if(bl){this._styleSelectable(bl,J,false);
}
if(bk){this._styleSelectable(bk,J,true);
}this.__lA=bk;
},_getAnchorItem:function(){return this.__lA!==null?this.__lA:null;
},_isSelectable:function(bm){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bn=event.getTarget();
if(bn&&this._isSelectable(bn)){return bn;
}return null;
},_selectableToHashCode:function(bo){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bp,bq,br){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bs){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bt){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bu,bv){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bw){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(bx){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(by,bz){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bA,bB){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bC,bD){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bE,bF){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bE===o){var bG=this._getFirstSelectable();

if(bG!=null){this._setSelectedItem(bG);
this._scrollItemIntoView(bG);
}}this._fireChange();
},handleMouseOver:function(event){if(this.__lC!=null&&this.__lC!=this._getScroll().top){this.__lC=null;
return;
}this._userInteraction=true;

if(!this.getQuick()){this._userInteraction=false;
return;
}var bI=this.getMode();

if(bI!==o&&bI!==n){this._userInteraction=false;
return;
}var bH=this._getSelectableFromMouseEvent(event);

if(bH===null){this._userInteraction=false;
return;
}this._setSelectedItem(bH);
this._fireChange(y);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var bK=this._getSelectableFromMouseEvent(event);

if(bK===null){this._userInteraction=false;
return;
}var bM=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bJ=event.isShiftPressed();
if(this.isItemSelected(bK)&&!bJ&&!bM&&!this.getDrag()){this.__lB=bK;
this._userInteraction=false;
return;
}else{this.__lB=null;
}this._scrollItemIntoView(bK);
switch(this.getMode()){case n:case o:this._setSelectedItem(bK);
break;
case k:this._setLeadItem(bK);
this._setAnchorItem(bK);
this._toggleInSelection(bK);
break;
case j:this._setLeadItem(bK);
if(bJ){var bL=this._getAnchorItem();

if(bL===null){bL=this._getFirstSelectable();
this._setAnchorItem(bL);
}this._selectItemRange(bL,bK,bM);
}else if(bM){this._setAnchorItem(bK);
this._toggleInSelection(bK);
}else{this._setAnchorItem(bK);
this._setSelectedItem(bK);
}break;
}var bN=this.getMode();

if(this.getDrag()&&bN!==n&&bN!==o&&!bJ&&!bM){this.__lp=this._getLocation();
this.__lm=this._getScroll();
this.__lq=event.getDocumentLeft()+this.__lm.left;
this.__lr=event.getDocumentTop()+this.__lm.top;
this.__ls=true;
this._capture();
}this._fireChange(E);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var bR=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bO=event.isShiftPressed();

if(!bR&&!bO&&this.__lB){var bP=this._getSelectableFromMouseEvent(event);

if(bP===null||!this.isItemSelected(bP)){this._userInteraction=false;
return;
}var bQ=this.getMode();

if(bQ===k){this._removeFromSelection(bP);
}else{this._setSelectedItem(bP);

if(this.getMode()===j){this._setLeadItem(bP);
this._setAnchorItem(bP);
}}this._userInteraction=false;
}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__ls){return;
}this.__lt=event.getDocumentLeft();
this.__lu=event.getDocumentTop();
this._userInteraction=true;
var bT=this.__lt+this.__lm.left;

if(bT>this.__lq){this.__lv=1;
}else if(bT<this.__lq){this.__lv=-1;
}else{this.__lv=0;
}var bS=this.__lu+this.__lm.top;

if(bS>this.__lr){this.__lw=1;
}else if(bS<this.__lr){this.__lw=-1;
}else{this.__lw=0;
}var location=this.__lp;

if(this.__lt<location.left){this.__lj=this.__lt-location.left;
}else if(this.__lt>location.right){this.__lj=this.__lt-location.right;
}else{this.__lj=0;
}
if(this.__lu<location.top){this.__lk=this.__lu-location.top;
}else if(this.__lu>location.bottom){this.__lk=this.__lu-location.bottom;
}else{this.__lk=0;
}if(!this.__ll){this.__ll=new qx.event.Timer(100);
this.__ll.addListener(p,this._onInterval,this);
}this.__ll.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var bU=e.getData();

if(this.getMode()===o&&this.isSelectionEmpty()){this.addItem(bU);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__ls){return;
}if(this.__lx){this._fireChange(E);
}delete this.__ls;
delete this.__ln;
delete this.__lo;
this._releaseCapture();
if(this.__ll){this.__ll.stop();
}},_onInterval:function(e){this._scrollBy(this.__lj,this.__lk);
this.__lm=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var ce=this._getDimension();
var bW=Math.max(0,Math.min(this.__lt-this.__lp.left,ce.width))+this.__lm.left;
var bV=Math.max(0,Math.min(this.__lu-this.__lp.top,ce.height))+this.__lm.top;
if(this.__ln===bW&&this.__lo===bV){return;
}this.__ln=bW;
this.__lo=bV;
var cg=this._getAnchorItem();
var bY=cg;
var cc=this.__lv;
var cf,bX;

while(cc!==0){cf=cc>0?this._getRelatedSelectable(bY,F):this._getRelatedSelectable(bY,v);
if(cf!==null){bX=this._getSelectableLocationX(cf);
if((cc>0&&bX.left<=bW)||(cc<0&&bX.right>=bW)){bY=cf;
continue;
}}break;
}var cd=this.__lw;
var cb,ca;

while(cd!==0){cb=cd>0?this._getRelatedSelectable(bY,g):this._getRelatedSelectable(bY,D);
if(cb!==null){ca=this._getSelectableLocationY(cb);
if((cd>0&&ca.top<=bV)||(cd<0&&ca.bottom>=bV)){bY=cb;
continue;
}}break;
}var ch=this.getMode();

if(ch===j){this._selectItemRange(cg,bY);
}else if(ch===k){if(this.isItemSelected(cg)){this._selectItemRange(cg,bY,true);
}else{this._deselectItemRange(cg,bY);
}this._setAnchorItem(bY);
}this._fireChange(C);
},__lD:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
var cn,cm;
var cp=event.getKeyIdentifier();
var co=this.getMode();
var cj=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var ck=event.isShiftPressed();
var cl=false;

if(cp===u&&cj){if(co!==n&&co!==o){this._selectAllItems();
cl=true;
}}else if(cp===w){if(co!==n&&co!==o){this._clearSelection();
cl=true;
}}else if(cp===r){var ci=this.getLeadItem();

if(ci&&!ck){if(cj||co===k){this._toggleInSelection(ci);
}else{this._setSelectedItem(ci);
}cl=true;
}}else if(this.__lD[cp]){cl=true;

if(co===n||co==o){cn=this._getSelectedItem();
}else{cn=this.getLeadItem();
}
if(cn!==null){switch(cp){case H:cm=this._getFirstSelectable();
break;
case I:cm=this._getLastSelectable();
break;
case M:cm=this._getRelatedSelectable(cn,D);
break;
case c:cm=this._getRelatedSelectable(cn,g);
break;
case f:cm=this._getRelatedSelectable(cn,v);
break;
case G:cm=this._getRelatedSelectable(cn,F);
break;
case h:cm=this._getPage(cn,true);
break;
case K:cm=this._getPage(cn,false);
break;
}}else{switch(cp){case H:case c:case G:case K:cm=this._getFirstSelectable();
break;
case I:case M:case f:case h:cm=this._getLastSelectable();
break;
}}if(cm!==null){switch(co){case n:case o:this._setSelectedItem(cm);
break;
case k:this._setLeadItem(cm);
break;
case j:if(ck){var cq=this._getAnchorItem();

if(cq===null){this._setAnchorItem(cq=this._getFirstSelectable());
}this._setLeadItem(cm);
this._selectItemRange(cq,cm,cj);
}else{this._setAnchorItem(cm);
this._setLeadItem(cm);

if(!cj){this._setSelectedItem(cm);
}}break;
}this.__lC=this._getScroll().top;
this._scrollItemIntoView(cm);
}}
if(cl){event.stop();
this._fireChange(A);
}this._userInteraction=false;
},_selectAllItems:function(){var cr=this.getSelectables();

for(var i=0,l=cr.length;i<l;i++){this._addToSelection(cr[i]);
}},_clearSelection:function(){var cs=this.__li;

for(var ct in cs){this._removeFromSelection(cs[ct]);
}this.__li={};
},_selectItemRange:function(cu,cv,cw){var cz=this._getSelectableRange(cu,cv);
if(!cw){var cy=this.__li;
var cA=this.__lE(cz);

for(var cx in cy){if(!cA[cx]){this._removeFromSelection(cy[cx]);
}}}for(var i=0,l=cz.length;i<l;i++){this._addToSelection(cz[i]);
}},_deselectItemRange:function(cB,cC){var cD=this._getSelectableRange(cB,cC);

for(var i=0,l=cD.length;i<l;i++){this._removeFromSelection(cD[i]);
}},__lE:function(cE){var cG={};
var cF;

for(var i=0,l=cE.length;i<l;i++){cF=cE[i];
cG[this._selectableToHashCode(cF)]=cF;
}return cG;
},_getSelectedItem:function(){for(var cH in this.__li){return this.__li[cH];
}return null;
},_setSelectedItem:function(cI){if(this._isSelectable(cI)){var cJ=this.__li;
var cK=this._selectableToHashCode(cI);

if(!cJ[cK]||qx.lang.Object.hasMinLength(cJ,2)){this._clearSelection();
this._addToSelection(cI);
}}},_addToSelection:function(cL){var cM=this._selectableToHashCode(cL);

if(!this.__li[cM]&&this._isSelectable(cL)){this.__li[cM]=cL;
this._styleSelectable(cL,m,true);
this.__lx=true;
}},_toggleInSelection:function(cN){var cO=this._selectableToHashCode(cN);

if(!this.__li[cO]){this.__li[cO]=cN;
this._styleSelectable(cN,m,true);
}else{delete this.__li[cO];
this._styleSelectable(cN,m,false);
}this.__lx=true;
},_removeFromSelection:function(cP){var cQ=this._selectableToHashCode(cP);

if(this.__li[cQ]!=null){delete this.__li[cQ];
this._styleSelectable(cP,m,false);
this.__lx=true;
}},_replaceMultiSelection:function(cR){var cU=false;
var cX,cW;
var cS={};

for(var i=0,l=cR.length;i<l;i++){cX=cR[i];

if(this._isSelectable(cX)){cW=this._selectableToHashCode(cX);
cS[cW]=cX;
}}var cY=cR[0];
var cT=cX;
var cV=this.__li;

for(var cW in cV){if(cS[cW]){delete cS[cW];
}else{cX=cV[cW];
delete cV[cW];
this._styleSelectable(cX,m,false);
cU=true;
}}for(var cW in cS){cX=cV[cW]=cS[cW];
this._styleSelectable(cX,m,true);
cU=true;
}if(!cU){return false;
}this._scrollItemIntoView(cT);
this._setLeadItem(cY);
this._setAnchorItem(cY);
this.__lx=true;
this._fireChange();
},_fireChange:function(da){if(this.__lx){this.__ly=da||null;
this.fireDataEvent(q,this.getSelection());
delete this.__lx;
}}},destruct:function(){this._disposeObjects(t);
this.__li=this.__lB=this.__lA=null;
this.__lz=null;
}});
})();
(function(){var f="vertical",e="under",d="above",c="qx.ui.core.selection.Widget",b="left",a="right";
qx.Class.define(c,{extend:qx.ui.core.selection.Abstract,construct:function(g){qx.ui.core.selection.Abstract.call(this);
this.__lF=g;
},members:{__lF:null,_isSelectable:function(h){return this._isItemSelectable(h)&&h.getLayoutParent()===this.__lF;
},_selectableToHashCode:function(j){return j.$$hash;
},_styleSelectable:function(k,m,n){n?k.addState(m):k.removeState(m);
},_capture:function(){this.__lF.capture();
},_releaseCapture:function(){this.__lF.releaseCapture();
},_isItemSelectable:function(o){if(this._userInteraction){return o.isVisible()&&o.isEnabled();
}else{return o.isVisible();
}},_getWidget:function(){return this.__lF;
},_getLocation:function(){var p=this.__lF.getContentElement().getDomElement();
return p?qx.bom.element.Location.get(p):null;
},_getDimension:function(){return this.__lF.getInnerSize();
},_getSelectableLocationX:function(q){var r=q.getBounds();

if(r){return {left:r.left,right:r.left+r.width};
}},_getSelectableLocationY:function(s){var t=s.getBounds();

if(t){return {top:t.top,bottom:t.top+t.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(u,v){},_scrollItemIntoView:function(w){this.__lF.scrollChildIntoView(w);
},getSelectables:function(x){var y=false;

if(!x){y=this._userInteraction;
this._userInteraction=true;
}var B=this.__lF.getChildren();
var z=[];
var A;

for(var i=0,l=B.length;i<l;i++){A=B[i];

if(this._isItemSelectable(A)){z.push(A);
}}this._userInteraction=y;
return z;
},_getSelectableRange:function(C,D){if(C===D){return [C];
}var H=this.__lF.getChildren();
var E=[];
var G=false;
var F;

for(var i=0,l=H.length;i<l;i++){F=H[i];

if(F===C||F===D){if(G){E.push(F);
break;
}else{G=true;
}}
if(G&&this._isItemSelectable(F)){E.push(F);
}}return E;
},_getFirstSelectable:function(){var I=this.__lF.getChildren();

for(var i=0,l=I.length;i<l;i++){if(this._isItemSelectable(I[i])){return I[i];
}}return null;
},_getLastSelectable:function(){var J=this.__lF.getChildren();

for(var i=J.length-1;i>0;i--){if(this._isItemSelectable(J[i])){return J[i];
}}return null;
},_getRelatedSelectable:function(K,L){var O=this.__lF.getOrientation()===f;
var N=this.__lF.getChildren();
var M=N.indexOf(K);
var P;

if((O&&L===d)||(!O&&L===b)){for(var i=M-1;i>=0;i--){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}else if((O&&L===e)||(!O&&L===a)){for(var i=M+1;i<N.length;i++){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}return null;
},_getPage:function(Q,R){if(R){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__lF=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(b){return this._isItemSelectable(b)&&b.getLayoutParent()===this._getWidget().getChildrenContainer();
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var c=this._getWidget();
return {left:c.getScrollX(),top:c.getScrollY()};
},_scrollBy:function(d,e){var f=this._getWidget();
f.scrollByX(d);
f.scrollByY(e);
},_getPage:function(g,h){var m=this.getSelectables();
var length=m.length;
var p=m.indexOf(g);
if(p===-1){throw new Error("Invalid lead item: "+g);
}var j=this._getWidget();
var r=j.getScrollY();
var innerHeight=j.getInnerSize().height;
var top,l,q;

if(h){var o=r;
var i=p;
while(1){for(;i>=0;i--){top=j.getItemTop(m[i]);
if(top<o){q=i+1;
break;
}}if(q==null){var s=this._getFirstSelectable();
return s==g?null:s;
}if(q>=p){o-=innerHeight+r-j.getItemBottom(g);
q=null;
continue;
}return m[q];
}}else{var n=innerHeight+r;
var i=p;
while(1){for(;i<length;i++){l=j.getItemBottom(m[i]);
if(l>n){q=i-1;
break;
}}if(q==null){var k=this._getLastSelectable();
return k==g?null:k;
}if(q<=p){n+=j.getItemTop(g)-r;
q=null;
continue;
}return m[q];
}}}}});
})();
(function(){var m="horizontal",k="qx.event.type.Data",j="vertical",h="",g="qx.ui.form.List",f="text",d="Boolean",c="one",b="__yJ",a="addChildWidget",A="_applySpacing",z="Enter",y="Integer",x="action",w="keyinput",v="addItem",u="removeChildWidget",t="_applyOrientation",s="single",r="keypress",p="list",q="label",n="pane",o="removeItem";
qx.Class.define(g,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(B){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__yJ=new qx.ui.container.Composite();
this.__yJ.addListener(a,this._onAddChild,this);
this.__yJ.addListener(u,this._onRemoveChild,this);
this.getChildControl(n).add(this.__yJ);
if(B){this.setOrientation(m);
}else{this.initOrientation();
}this.addListener(r,this._onKeyPress);
this.addListener(w,this._onKeyInput);
this.__yK=h;
},events:{addItem:k,removeItem:k},properties:{appearance:{refine:true,init:p},focusable:{refine:true,init:true},orientation:{check:[m,j],init:j,apply:t},spacing:{check:y,init:0,apply:A,themeable:true},enableInlineFind:{check:d,init:true}},members:{__yK:null,__yL:null,__yJ:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__yJ;
},_onAddChild:function(e){this.fireDataEvent(v,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(o,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(C,D){var E=C===m;
var F=E?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__yJ;
content.setLayout(F);
content.setAllowGrowX(!E);
content.setAllowGrowY(E);
this._applySpacing(this.getSpacing());
},_applySpacing:function(G,H){this.__yJ.getLayout().setSpacing(G);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==z&&!e.isAltPressed()){var I=this.getSelection();

for(var i=0;i<I.length;i++){I[i].fireEvent(x);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var J=this.getSelectionMode();

if(!(J===s||J===c)){return;
}if(((new Date).valueOf()-this.__yL)>1000){this.__yK=h;
}this.__yK+=e.getChar();
var K=this.findItemByLabelFuzzy(this.__yK);
if(K){this.setSelection([K]);
}this.__yL=(new Date).valueOf();
},findItemByLabelFuzzy:function(L){L=L.toLowerCase();
var M=this.getChildren();
for(var i=0,l=M.length;i<l;i++){var N=M[i].getLabel();
if(N&&N.toLowerCase().indexOf(L)==0){return M[i];
}}return null;
},findItem:function(O,P){if(P!==false){O=O.toLowerCase();
}var S=this.getChildren();
var U;
for(var i=0,l=S.length;i<l;i++){U=S[i];
var T;

if(U.isRich()){var Q=U.getChildControl(q,true);

if(Q){var R=Q.getContentElement().getDomElement();

if(R){T=qx.bom.element.Attribute.get(R,f);
}}}else{T=U.getLabel();
}
if(T!=null){if(T.translate){T=T.translate();
}
if(P!==false){T=T.toLowerCase();
}
if(T.toString()==O.toString()){return U;
}}}return null;
}},destruct:function(){this._disposeObjects(b);
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
(function(){var k="list",j="textfield",i="popup",h="Down",g="",f="Escape",d="qx.util.format.DateFormat",c="changeValue",b="Left",a="Up",w="execute",v="changeLocale",u="_applyDateFormat",t="changeVisibility",s="qx.dynlocale",r="medium",q="mouseup",p="qx.ui.form.DateField",o="datefield",n="hidden",l="on",m="Right";
qx.Class.define(p,{extend:qx.ui.form.ComboBox,implement:[qx.ui.form.IDateForm],construct:function(){qx.ui.form.ComboBox.call(this);
this.setDateFormat(qx.ui.form.DateField.getDefaultDateFormatter());
if(qx.core.Variant.isSet(s,l)){qx.locale.Manager.getInstance().addListener(v,function(){this.setDateFormat(qx.ui.form.DateField.getDefaultDateFormatter());
},this);
}},properties:{appearance:{refine:true,init:o},dateFormat:{check:d,apply:u}},statics:{__yp:null,__yq:null,getDefaultDateFormatter:function(){var x=qx.locale.Date.getDateFormat(r).toString();

if(x==this.__yp){return this.__yq;
}
if(this.__yq){this.__yq.dispose();
}this.__yq=new qx.util.format.DateFormat(x,qx.locale.Manager.getInstance().getLocale());
this.__yp=x;
return this.__yq;
}},members:{setValue:function(y){var z=this.getChildControl(j);
z.setValue(this.getDateFormat().format(y));
var A=this.getChildControl(k);
A.setValue(y);
},getValue:function(){var B=this.getChildControl(j).getValue();
try{return this.getDateFormat().parse(B);
}catch(C){return null;
}},resetValue:function(){var D=this.getChildControl(j);
D.setValue(g);
var E=this.getChildControl(k);
E.setValue(null);
},_applyDateFormat:function(F,G){if(!G){return;
}try{var I=this.getChildControl(j);
var J=I.getValue();
var H=G.parse(J);
I.setValue(F.format(H));
}catch(K){}},_createChildControlImpl:function(L,M){var N;

switch(L){case k:N=new qx.ui.control.DateChooser();
N.setFocusable(false);
N.setKeepFocus(true);
N.addListener(w,this._onChangeDate,this);
break;
case i:N=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
N.setAutoHide(false);
N.add(this.getChildControl(k));
N.addListener(q,this._onChangeDate,this);
N.addListener(t,this._onPopupChangeVisibility,this);
break;
}return N||qx.ui.form.ComboBox.prototype._createChildControlImpl.call(this,L);
},_onChangeDate:function(e){var O=this.getChildControl(j);
var P=this.getChildControl(k).getValue();
O.setValue(this.getDateFormat().format(P));
this.close();
},_onKeyPress:function(e){var Q=e.getKeyIdentifier();

if(Q==h&&e.isAltPressed()){this.toggle();
e.stopPropagation();
return;
}var R=this.getChildControl(i);

if(R.getVisibility()==n){return;
}if(Q==f){this.close();
e.stopPropagation();
return;
}if(Q===b||Q===m||Q===h||Q===a){e.preventDefault();
}this.getChildControl(k).handleKeyPress(e);
},_onPopupChangeVisibility:function(e){var T=this.getChildControl(i);

if(T.isVisible()){var U=this.getChildControl(k);
var S=this.getValue();
U.setValue(S);
}},_onTextFieldChangeValue:function(e){var V=this.getValue();

if(V!=null){var W=this.getChildControl(k);
W.setValue(V);
}this.fireDataEvent(c,this.getValue());
},isEmpty:function(){var X=this.getChildControl(j).getValue();
return X==null||X==g;
}}});
})();
(function(){var k="list",j="atom",i="pressed",h="abandoned",g="popup",f="hovered",d="changeLabel",c="changeIcon",b="arrow",a="",z="spacer",y="Enter",x="one",w="mouseout",v="Space",u="key",t="mousewheel",s="keyinput",r="changeSelection",q="quick",o="qx.ui.form.SelectBox",p="mouseover",m="selectbox",n="click",l=" ";
qx.Class.define(o,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(){qx.ui.form.AbstractSelectBox.call(this);
this._createChildControl(j);
this._createChildControl(z);
this._createChildControl(b);
this.addListener(p,this._onMouseOver,this);
this.addListener(w,this._onMouseOut,this);
this.addListener(n,this._onClick,this);
this.addListener(t,this._onMouseWheel,this);
this.addListener(s,this._onKeyInput,this);
this.addListener(r,this.__yy,this);
},properties:{appearance:{refine:true,init:m}},members:{__yx:null,_createChildControlImpl:function(A,B){var C;

switch(A){case z:C=new qx.ui.core.Spacer();
this._add(C,{flex:1});
break;
case j:C=new qx.ui.basic.Atom(l);
C.setCenter(false);
C.setAnonymous(true);
this._add(C,{flex:1});
break;
case b:C=new qx.ui.basic.Image();
C.setAnonymous(true);
this._add(C);
break;
}return C||qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,A);
},_forwardStates:{focused:true},_getItems:function(){return this.getChildrenContainer().getChildren();
},_isAllowEmptySelection:function(){return this.getChildrenContainer().getSelectionMode()!==x;
},__yy:function(e){var E=e.getData()[0];
var D=this.getChildControl(k);

if(D.getSelection()[0]!=E){if(E){D.setSelection([E]);
}else{D.resetSelection();
}}this.__yz();
this.__yA();
},__yz:function(){var G=this.getChildControl(k).getSelection()[0];
var H=this.getChildControl(j);
var F=G?G.getIcon():a;
F==null?H.resetIcon():H.setIcon(F);
},__yA:function(){var K=this.getChildControl(k).getSelection()[0];
var L=this.getChildControl(j);
var J=K?K.getLabel():a;
var I=this.getFormat();

if(I!=null){J=I.call(this,K);
}if(J&&J.translate){J=J.translate();
}J==null?L.resetLabel():L.setLabel(J);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(h)){this.removeState(h);
this.addState(i);
}this.addState(f);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(f);

if(this.hasState(i)){this.removeState(i);
this.addState(h);
}},_onClick:function(e){this.toggle();
},_onMouseWheel:function(e){if(this.getChildControl(g).isVisible()){return;
}var N=e.getWheelDelta()>0?1:-1;
var P=this.getSelectables();
var O=this.getSelection()[0];

if(!O){O=P[0];
}var M=P.indexOf(O)+N;
var Q=P.length-1;
if(M<0){M=0;
}else if(M>=Q){M=Q;
}this.setSelection([P[M]]);
e.stopPropagation();
e.preventDefault();
},_onKeyPress:function(e){var R=e.getKeyIdentifier();

if(R==y||R==v){if(this.__yx){this.setSelection([this.__yx]);
this.__yx=null;
}this.toggle();
}else{qx.ui.form.AbstractSelectBox.prototype._onKeyPress.call(this,e);
}},_onKeyInput:function(e){var S=e.clone();
S.setTarget(this._list);
S.setBubbles(false);
this.getChildControl(k).dispatchEvent(S);
},_onListMouseDown:function(e){if(this.__yx){this.setSelection([this.__yx]);
this.__yx=null;
}},_onListChangeSelection:function(e){var T=e.getData();
var W=e.getOldData();
if(W&&W.length>0){W[0].removeListener(c,this.__yz,this);
W[0].removeListener(d,this.__yA,this);
}
if(T.length>0){var V=this.getChildControl(g);
var U=this.getChildControl(k);
var X=U.getSelectionContext();

if(V.isVisible()&&(X==q||X==u)){this.__yx=T[0];
}else{this.setSelection([T[0]]);
this.__yx=null;
}T[0].addListener(c,this.__yz,this);
T[0].addListener(d,this.__yA,this);
}else{this.resetSelection();
}},_onPopupChangeVisibility:function(e){var ba=this.getChildControl(g);

if(!ba.isVisible()){var bc=this.getChildControl(k);
if(bc.hasChildren()){bc.setSelection(this.getSelection());
}}else{var Y=ba.getLayoutLocation(this);
var be=qx.bom.Viewport.getHeight();
var bd=Y.top;
var bf=be-Y.bottom;
var bb=bd>bf?bd:bf;
var bg=this.getMaxListHeight();
var bc=this.getChildControl(k);

if(bg==null||bg>bb){bc.setMaxHeight(bb);
}else if(bg<bb){bc.setMaxHeight(bg);
}}}},destruct:function(){this.__yx=null;
}});
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
(function(){var n="Boolean",m="changeInvalidMessage",l="changeSelection",k="String",j="__yj",h="_applyValid",g="",f="changeRequired",d="changeValid",c="_applyInvalidMessage",a="qx.ui.form.RadioButtonGroup",b="qx.event.type.Data";
qx.Class.define(a,{extend:qx.ui.core.Widget,include:[qx.ui.core.MLayoutHandling,qx.ui.form.MModelSelection],implement:[qx.ui.form.IForm,qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],construct:function(o){qx.ui.core.Widget.call(this);
if(o==null){this.setLayout(new qx.ui.layout.VBox(4));
}else{this.setLayout(o);
}this.__yj=new qx.ui.form.RadioGroup();
this.__yj.addListener(l,function(e){this.fireDataEvent(l,e.getData(),e.getOldData());
},this);
},properties:{valid:{check:n,init:true,apply:h,event:d},required:{check:n,init:false,event:f},invalidMessage:{check:k,init:g,event:m,apply:c},requiredInvalidMessage:{check:k,nullable:true,event:m}},events:{"changeSelection":b},members:{__yj:null,_applyInvalidMessage:function(p,q){var r=this._getChildren();

for(var i=0;i<r.length;i++){r[i].setInvalidMessage(p);
}},_applyValid:function(s,t){var u=this._getChildren();

for(var i=0;i<u.length;i++){u[i].setValid(s);
}},getRadioGroup:function(){return this.__yj;
},getChildren:function(){return this._getChildren();
},add:function(v,w){this.__yj.add(v);
this._add(v,w);
},remove:function(x){this.__yj.remove(x);
this._remove(x);
},removeAll:function(){var y=this.__yj.getItems();

for(var i=0;i<y.length;i++){this.__yj.remove(y[i]);
}this._removeAll();
},getSelection:function(){return this.__yj.getSelection();
},setSelection:function(z){return this.__yj.setSelection(z);
},resetSelection:function(){return this.__yj.resetSelection();
},isSelected:function(A){return this.__yj.isSelected(A);
},isSelectionEmpty:function(){return this.__yj.isSelectionEmpty();
},getSelectables:function(B){return this.__yj.getSelectables(B);
}},destruct:function(){this._disposeObjects(j);
}});
})();
(function(){var l="pressed",k="hovered",j="changeVisibility",i="qx.ui.menu.Menu",h="submenu",g="Enter",f="contextmenu",d="changeMenu",c="qx.ui.form.MenuButton",b="abandoned",a="_applyMenu";
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(m,n,o){qx.ui.form.Button.call(this,m,n);
if(o!=null){this.setMenu(o);
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(p,q){if(q){q.removeListener(j,this._onMenuChange,this);
q.resetOpener();
}
if(p){p.addListener(j,this._onMenuChange,this);
p.setOpener(this);
p.removeState(h);
p.removeState(f);
}},open:function(r){var s=this.getMenu();

if(s){qx.ui.menu.Manager.getInstance().hideAll();
s.setOpener(this);
s.open();
if(r){var t=s.getSelectables()[0];

if(t){s.setSelectedButton(t);
}}}},_onMenuChange:function(e){var u=this.getMenu();

if(u.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){qx.ui.form.Button.prototype._onMouseDown.call(this,e);
var v=this.getMenu();

if(v){if(!v.isVisible()){this.open();
}else{v.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(k);
},_onMouseOut:function(e){this.removeState(k);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(b);
this.addState(l);
var w=this.getMenu();

if(w){if(!w.isVisible()){this.open();
}else{w.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var t="keypress",s="interval",r="keydown",q="mousedown",p="keyup",o="__oG",n="blur",m="Enter",l="__oF",k="Up",c="Escape",j="__oH",g="qx.ui.menu.Manager",b="Left",a="Down",f="Right",d="singleton",h="Space";
qx.Class.define(g,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oF=[];
var u=document.body;
var v=qx.event.Registration;
v.addListener(window.document.documentElement,q,this._onMouseDown,this,true);
v.addListener(u,r,this._onKeyUpDown,this,true);
v.addListener(u,p,this._onKeyUpDown,this,true);
v.addListener(u,t,this._onKeyPress,this,true);
if(!qx.bom.client.Feature.TOUCH){qx.bom.Element.addListener(window,n,this.hideAll,this);
}this.__oG=new qx.event.Timer;
this.__oG.addListener(s,this._onOpenInterval,this);
this.__oH=new qx.event.Timer;
this.__oH.addListener(s,this._onCloseInterval,this);
},members:{__oI:null,__oJ:null,__oG:null,__oH:null,__oF:null,_getChild:function(w,x,y,z){var A=w.getChildren();
var length=A.length;
var B;

for(var i=x;i<length&&i>=0;i+=y){B=A[i];

if(B.isEnabled()&&!B.isAnonymous()){return B;
}}
if(z){i=i==length?0:length-1;

for(;i!=x;i+=y){B=A[i];

if(B.isEnabled()&&!B.isAnonymous()){return B;
}}}return null;
},_isInMenu:function(C){while(C){if(C instanceof qx.ui.menu.Menu){return true;
}C=C.getLayoutParent();
}return false;
},_getMenuButton:function(D){while(D){if(D instanceof qx.ui.menu.AbstractButton){return D;
}D=D.getLayoutParent();
}return null;
},add:function(E){{};
var F=this.__oF;
F.push(E);
E.setZIndex(1e6+F.length);
},remove:function(G){{};
var H=this.__oF;

if(H){qx.lang.Array.remove(H,G);
}},hideAll:function(){var I=this.__oF;

if(I){for(var i=I.length-1;i>=0;i--){I[i].exclude();
}}},getActiveMenu:function(){var J=this.__oF;
return J.length>0?J[J.length-1]:null;
},scheduleOpen:function(K){this.cancelClose(K);
if(K.isVisible()){if(this.__oI){this.cancelOpen(this.__oI);
}}else if(this.__oI!=K){this.__oI=K;
this.__oG.restartWith(K.getOpenInterval());
}},scheduleClose:function(L){this.cancelOpen(L);
if(!L.isVisible()){if(this.__oJ){this.cancelClose(this.__oJ);
}}else if(this.__oJ!=L){this.__oJ=L;
this.__oH.restartWith(L.getCloseInterval());
}},cancelOpen:function(M){if(this.__oI==M){this.__oG.stop();
this.__oI=null;
}},cancelClose:function(N){if(this.__oJ==N){this.__oH.stop();
this.__oJ=null;
}},_onOpenInterval:function(e){this.__oG.stop();
this.__oI.open();
this.__oI=null;
},_onCloseInterval:function(e){this.__oH.stop();
this.__oJ.exclude();
this.__oJ=null;
},_onMouseDown:function(e){var O=e.getTarget();
O=qx.ui.core.Widget.getWidgetByElement(O,true);
if(O==null){this.hideAll();
return;
}if(O.getMenu&&O.getMenu()&&O.getMenu().isVisible()){return;
}if(this.__oF.length>0&&!this._isInMenu(O)){this.hideAll();
}},__oK:{"Enter":1,"Space":1},__oL:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var P=this.getActiveMenu();

if(!P){return;
}var Q=e.getKeyIdentifier();

if(this.__oL[Q]||(this.__oK[Q]&&P.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var R=this.getActiveMenu();

if(!R){return;
}var S=e.getKeyIdentifier();
var U=this.__oL[S];
var T=this.__oK[S];

if(U){switch(S){case k:this._onKeyPressUp(R);
break;
case a:this._onKeyPressDown(R);
break;
case b:this._onKeyPressLeft(R);
break;
case f:this._onKeyPressRight(R);
break;
case c:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(T){var V=R.getSelectedButton();

if(V){switch(S){case m:this._onKeyPressEnter(R,V,e);
break;
case h:this._onKeyPressSpace(R,V,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(W){var X=W.getSelectedButton();
var Y=W.getChildren();
var bb=X?W.indexOf(X)-1:Y.length-1;
var ba=this._getChild(W,bb,-1,true);
if(ba){W.setSelectedButton(ba);
}else{W.resetSelectedButton();
}},_onKeyPressDown:function(bc){var bd=bc.getSelectedButton();
var bf=bd?bc.indexOf(bd)+1:0;
var be=this._getChild(bc,bf,1,true);
if(be){bc.setSelectedButton(be);
}else{bc.resetSelectedButton();
}},_onKeyPressLeft:function(bg){var bl=bg.getOpener();

if(!bl){return;
}if(bl instanceof qx.ui.menu.AbstractButton){var bi=bl.getLayoutParent();
bi.resetOpenedButton();
bi.setSelectedButton(bl);
}else if(bl instanceof qx.ui.menubar.Button){var bk=bl.getMenuBar().getMenuButtons();
var bh=bk.indexOf(bl);
if(bh===-1){return;
}var bm=null;
var length=bk.length;

for(var i=1;i<=length;i++){var bj=bk[(bh-i+length)%length];

if(bj.isEnabled()){bm=bj;
break;
}}
if(bm&&bm!=bl){bm.open(true);
}}},_onKeyPressRight:function(bn){var bp=bn.getSelectedButton();
if(bp){var bo=bp.getMenu();

if(bo){bn.setOpenedButton(bp);
var bv=this._getChild(bo,0,1);

if(bv){bo.setSelectedButton(bv);
}return;
}}else if(!bn.getOpenedButton()){var bv=this._getChild(bn,0,1);

if(bv){bn.setSelectedButton(bv);

if(bv.getMenu()){bn.setOpenedButton(bv);
}return;
}}var bt=bn.getOpener();
if(bt instanceof qx.ui.menu.Button&&bp){while(bt){bt=bt.getLayoutParent();

if(bt instanceof qx.ui.menu.Menu){bt=bt.getOpener();

if(bt instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bt){return;
}}if(bt instanceof qx.ui.menubar.Button){var bs=bt.getMenuBar().getMenuButtons();
var bq=bs.indexOf(bt);
if(bq===-1){return;
}var bu=null;
var length=bs.length;

for(var i=1;i<=length;i++){var br=bs[(bq+i)%length];

if(br.isEnabled()){bu=br;
break;
}}
if(bu&&bu!=bt){bu.open(true);
}}},_onKeyPressEnter:function(bw,bx,e){if(bx.hasListener(t)){var by=e.clone();
by.setBubbles(false);
by.setTarget(bx);
bx.dispatchEvent(by);
}this.hideAll();
},_onKeyPressSpace:function(bz,bA,e){if(bA.hasListener(t)){var bB=e.clone();
bB.setBubbles(false);
bB.setTarget(bA);
bA.dispatchEvent(bB);
}}},destruct:function(){var bD=qx.event.Registration;
var bC=document.body;
bD.removeListener(window.document.documentElement,q,this._onMouseDown,this,true);
bD.removeListener(bC,r,this._onKeyUpDown,this,true);
bD.removeListener(bC,p,this._onKeyUpDown,this,true);
bD.removeListener(bC,t,this._onKeyPress,this,true);
this._disposeObjects(o,j);
this._disposeArray(l);
}});
})();
(function(){var l="slidebar",k="Integer",j="resize",h="qx.ui.core.Widget",g="selected",f="visible",d="Boolean",c="mouseout",b="excluded",a="menu",A="_applySelectedButton",z="_applyOpenInterval",y="_applySpacingY",x="_blocker",w="_applyCloseInterval",v="_applyBlockerColor",u="_applyIconColumnWidth",t="mouseover",s="qx.ui.menu.Menu",r="Color",p="Number",q="_applyOpenedButton",n="_applySpacingX",o="_applyBlockerOpacity",m="_applyArrowColumnWidth";
qx.Class.define(s,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var B=this.getApplicationRoot();
B.add(this);
this.addListener(t,this._onMouseOver);
this.addListener(c,this._onMouseOut);
this.addListener(j,this._onResize,this);
B.addListener(j,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(B);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:a},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:b},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:k,apply:n,init:0,themeable:true},spacingY:{check:k,apply:y,init:0,themeable:true},iconColumnWidth:{check:k,init:0,themeable:true,apply:u},arrowColumnWidth:{check:k,init:0,themeable:true,apply:m},blockerColor:{check:r,init:null,nullable:true,apply:v,themeable:true},blockerOpacity:{check:p,init:1,apply:o,themeable:true},selectedButton:{check:h,nullable:true,apply:A},openedButton:{check:h,nullable:true,apply:q},opener:{check:h,nullable:true},openInterval:{check:k,themeable:true,init:250,apply:z},closeInterval:{check:k,themeable:true,init:250,apply:w},blockBackground:{check:d,themeable:true,init:false}},members:{__oN:null,__oO:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__oQ();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__oQ();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(C){this.placeToPoint(C);
this.__oQ();
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
}this.__oP();
},__oP:function(){if(this.isVisible()){if(this.getBlockBackground()){var R=this.getZIndex();
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
}},_applyOpenedButton:function(V,W){if(W){W.getMenu().exclude();
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
},__oQ:function(){var bj=this._getMenuBounds();

if(!bj){this.addListenerOnce(j,this.__oQ,this);
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
}this.__oO=bl;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(l);

if(this.__oO){this.__oO.call(this);
delete this.__oO;
}},_onResize:function(){if(this.isVisible()){var bm=this._placementTarget;

if(!bm){return;
}else if(bm instanceof qx.ui.core.Widget){this.placeToWidget(bm);
}else if(bm.top!==undefined){this.placeToPoint(bm);
}else{throw new Error("Unknown target: "+bm);
}this.__oQ();
}},_onMouseOver:function(e){var bo=qx.ui.menu.Manager.getInstance();
bo.cancelClose(this);
var bp=e.getTarget();

if(bp.isEnabled()&&bp instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bp);
var bn=bp.getMenu&&bp.getMenu();

if(bn){bn.setOpener(bp);
bo.scheduleOpen(bn);
this.__oN=bn;
}else{var bq=this.getOpenedButton();

if(bq){bo.scheduleClose(bq.getMenu());
}
if(this.__oN){bo.cancelOpen(this.__oN);
this.__oN=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var br=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bs=this.getOpenedButton();
bs?this.setSelectedButton(bs):this.resetSelectedButton();
if(bs){br.cancelClose(bs.getMenu());
}if(this.__oN){br.cancelOpen(this.__oN);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(j,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(x);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__oR:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__oR=[0,0,0,0];
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
},getColumnSizes:function(){return this.__oR||null;
}},destruct:function(){this.__oR=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="on",l="String",k="qx.ui.menu.Menu",d="qx.ui.menu.AbstractButton",j="keypress",h="",c="_applyIcon",b="mouseup",g="abstract",f="_applyLabel",i="_applyMenu",a="changeCommand";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(b,this._onMouseUp);
this.addListener(j,this._onKeyPress);
this.addListener(a,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true,dereference:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(u,v){var w;

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
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var H=e.getData();
if(H==null){return;
}
if(qx.core.Variant.isSet(o,m)){var F=e.getOldData();

if(!F){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!H){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var G=H!=null?H.toString():h;
this.getChildControl(q).setValue(G);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var I=this.getCommand();

if(I!=null){this.getChildControl(q).setValue(I.toString());
}},"off":null}),_applyIcon:function(J,K){if(J){this._showChildControl(t).setSource(J);
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
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(o,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var q=this._getLayoutChildren();
var p;
var g;
var h=[];

for(var i=0,l=q.length;i<l;i++){p=q[i];
g=p.getLayoutProperties().column;
h[g]=p;
}var o=this.__pG(q[0]);
var r=o.getColumnSizes();
var k=o.getSpacingX();
var j=qx.lang.Array.sum(r)+k*(r.length-1);

if(j<d){r[1]+=d-j;
}var s=0,top=0;
var m=qx.ui.layout.Util;

for(var i=0,l=r.length;i<l;i++){p=h[i];

if(p){var f=p.getSizeHint();
var top=m.computeVerticalAlignOffset(p.getAlignY()||c,f.height,e,0,0);
var n=m.computeHorizontalAlignOffset(p.getAlignX()||a,f.width,r[i],p.getMarginLeft(),p.getMarginRight());
p.renderLayout(s+n,top,f.width,f.height);
}s+=r[i]+k;
}},__pG:function(t){while(!(t instanceof qx.ui.menu.Menu)){t=t.getLayoutParent();
}return t;
},_computeSizeHint:function(){var w=this._getLayoutChildren();
var v=0;
var x=0;

for(var i=0,l=w.length;i<l;i++){var u=w[i].getSizeHint();
x+=u.width;
v=Math.max(v,u.height);
}return {width:x,height:v};
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
(function(){var i="Integer",h="hovered",g="__pH",f="hover-button",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__pH=new qx.event.AcceleratingTimer();
this.__pH.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:f},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__pH:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__pH.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__pH.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__pH.stop();
}}},destruct:function(){this._disposeObjects(g);
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
this.__pI=[];
this.__pJ=[];
},properties:{appearance:{refine:true,init:a},openMenu:{check:r,event:k,nullable:true},show:{init:s,check:[s,d,n],inheritable:true,event:b},spacing:{nullable:true,check:g,themeable:true,apply:q},overflowIndicator:{check:m,nullable:true,apply:h},overflowHandling:{init:false,check:o,apply:c}},events:{"hideItem":t,"showItem":t},members:{__pI:null,__pJ:null,_computeSizeHint:function(){var z=qx.ui.core.Widget.prototype._computeSizeHint.call(this);

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
this.__pL(J);
B-=G;
if(C&&C.getVisibility()!=w){C.setVisibility(w);
B+=I;
var E=C.getMarginLeft()+C.getMarginRight();
B+=Math.max(E,this.getSpacing());
}}while(B>A);
}else if(this.__pI.length>0){do{var M=this.__pI[0];
if(M){var L=M.getMarginLeft()+M.getMarginRight();
L=Math.max(L,this.getSpacing());
if(M.getDecoratorElement()==null){M.syncAppearance();
M.invalidateLayoutCache();
}var F=M.getSizeHint().width;
var K=false;
if(this.__pI.length==1&&I>0){var D=L-this.getSpacing();
var H=B-I+F+D;
K=A>H;
}if(A>B+F+L||K){this.__pK(M);
B+=F;
if(C&&this.__pI.length==0){C.setVisibility(v);
}}else{return;
}}}while(A>=B&&this.__pI.length>0);
}},__pK:function(N){N.setVisibility(w);
this.__pI.shift();
this.fireDataEvent(p,N);
},__pL:function(O){if(!O){return;
}this.__pI.unshift(O);
O.setVisibility(v);
this.fireDataEvent(j,O);
},_getNextToHide:function(){for(var i=this.__pJ.length-1;i>=0;i--){var P=this.__pJ[i];
if(P&&P.getVisibility&&P.getVisibility()==w){return P;
}}var Q=this._getChildren();

for(var i=Q.length-1;i>=0;i--){var R=Q[i];
if(R==this.getOverflowIndicator()){continue;
}if(R.getVisibility&&R.getVisibility()==w){return R;
}}},setRemovePriority:function(S,T,U){if(!U&&this.__pJ[T]!=undefined){throw new Error("Priority already in use!");
}this.__pJ[T]=S;
},_applyOverflowHandling:function(V,W){this.invalidateLayoutCache();
var parent=this.getLayoutParent();

if(parent){parent.invalidateLayoutCache();
}var Y=this.getBounds();

if(Y&&Y.width){this._recalculateOverflow(Y.width);
}if(V){this.addListener(u,this._onResize,this);
}else{this.removeListener(u,this._onResize,this);
var X=this.getOverflowIndicator();

if(X){X.setVisibility(v);
}for(var i=0;i<this.__pI.length;i++){this.__pI[i].setVisibility(w);
}this.__pI=[];
}},_applyOverflowIndicator:function(ba,bb){if(bb){this._remove(bb);
}
if(ba){if(this._indexOf(ba)==-1){throw new Error("Widget must be child of the toolbar.");
}ba.setVisibility(v);
}},__pM:false,_setAllowMenuOpenHover:function(bc){this.__pM=bc;
},_isAllowMenuOpenHover:function(){return this.__pM;
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
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var m="container",k="handle",j="both",h="Integer",g="middle",f="qx.ui.toolbar.Part",e="icon",d="label",c="changeShow",b="_applySpacing",a="toolbar/part";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(n,o){var p;

switch(n){case k:p=new qx.ui.basic.Image();
p.setAlignY(g);
this._add(p);
break;
case m:p=new qx.ui.toolbar.PartContainer;
this._add(p);
break;
}return p||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,n);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(q,r){var s=this.getChildControl(m).getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var u=this.getChildren();
var t=[];
var v;

for(var i=0,l=u.length;i<l;i++){v=u[i];

if(v instanceof qx.ui.menubar.Button){t.push(v);
}}return t;
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
}},properties:{appearance:{refine:true,init:a}},members:{_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var k="button",j="hovered",i="pressed",h="arrow",g="Enter",f="Space",d="abandoned",c="both",b="String",a="changeVisibility",A="splitbutton",z="changeShow",y="mouseout",x="keydown",w="execute",v="_applyMenu",u="icon",t="mouseover",s="keyup",r="qx.ui.menu.Menu",p="_applyIcon",q="label",n="_applyShow",o="changeMenu",l="_applyLabel",m="qx.ui.form.SplitButton";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(B,C,D,E){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(h);
this.addListener(t,this._onMouseOver,this,true);
this.addListener(y,this._onMouseOut,this,true);
this.addListener(x,this._onKeyDown);
this.addListener(s,this._onKeyUp);
if(B!=null){this.setLabel(B);
}
if(C!=null){this.setIcon(C);
}
if(D!=null){this.setMenu(D);
}
if(E!=null){this.setCommand(E);
}},properties:{appearance:{refine:true,init:A},focusable:{refine:true,init:true},label:{apply:l,nullable:true,check:b},icon:{check:b,apply:p,nullable:true,themeable:true},show:{init:c,check:[c,q,u],themeable:true,inheritable:true,apply:n,event:z},menu:{check:r,nullable:true,apply:v,event:o}},members:{__xO:null,_createChildControlImpl:function(F,G){var H;

switch(F){case k:H=new qx.ui.form.Button;
H.addListener(w,this._onButtonExecute,this);
H.setFocusable(false);
this._addAt(H,0,{flex:1});
break;
case h:H=new qx.ui.form.MenuButton;
H.setFocusable(false);
this._addAt(H,1);
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},_forwardStates:{hovered:1,focused:1},_applyLabel:function(I,J){var K=this.getChildControl(k);
I==null?K.resetLabel():K.setLabel(I);
},_applyIcon:function(L,M){var N=this.getChildControl(k);
L==null?N.resetIcon():N.setIcon(L);
},_applyMenu:function(O,P){var Q=this.getChildControl(h);

if(O){Q.resetEnabled();
Q.setMenu(O);
O.setOpener(this);
O.addListener(a,this._onChangeMenuVisibility,this);
}else{Q.setEnabled(false);
Q.resetMenu();
}
if(P){P.removeListener(a,this._onChangeMenuVisibility,this);
P.resetOpener();
}},_applyShow:function(R,S){},_onMouseOver:function(e){e.stopPropagation();
this.addState(j);
delete this.__xO;
},_onMouseOut:function(e){e.stopPropagation();
if(!this.hasState(j)){return;
}var U=e.getRelatedTarget();

if(qx.ui.core.Widget.contains(this,U)){return;
}var T=this.getMenu();

if(T&&T.isVisible()){this.__xO=true;
return;
}this.removeState(j);
},_onKeyDown:function(e){var V=this.getChildControl(k);

switch(e.getKeyIdentifier()){case g:case f:V.removeState(d);
V.addState(i);
}},_onKeyUp:function(e){var W=this.getChildControl(k);

switch(e.getKeyIdentifier()){case g:case f:if(W.hasState(i)){W.removeState(d);
W.removeState(i);
W.execute();
}}},_onButtonExecute:function(e){this.execute();
},_onChangeMenuVisibility:function(e){if(!this.getMenu().isVisible()&&this.__xO){this.removeState(j);
}}}});
})();
(function(){var b="checkbox",a="qx.ui.form.CheckBox";
qx.Class.define(a,{extend:qx.ui.form.ToggleButton,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(c){{};
qx.ui.form.ToggleButton.call(this,c);
this.setValue(false);
},properties:{appearance:{refine:true,init:b},allowGrowX:{refine:true,init:false}}});
})();
(function(){var c="listitem",b="qx.ui.form.ListItem",a="qx.event.type.Event";
qx.Class.define(b,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(d,e,f){qx.ui.basic.Atom.call(this,d,e);

if(f!=null){this.setModel(f);
}},events:{"action":a},properties:{appearance:{refine:true,init:c}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true}}});
})();
(function(){var j="checked",i="qx.ui.form.RadioGroup",h="Boolean",g="menu-radiobutton",f="_applyValue",d="qx.ui.menu.RadioButton",c="changeValue",b="_applyGroup",a="execute";
qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(k,l){qx.ui.menu.AbstractButton.call(this);
if(k!=null){this.setLabel(k);
}
if(l!=null){this.setMenu(l);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:h,nullable:true,event:c,apply:f,init:false},group:{check:i,nullable:true,apply:b}},members:{_applyValue:function(m,n){m?this.addState(j):this.removeState(j);
},_applyGroup:function(o,p){if(p){p.remove(this);
}
if(o){o.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var k="main",j="100%",i="auto",h="</div>",g="redraw",f=" Text",d="<i>L</i>",c="<b>T</b>",b="<i style='color: red;'><b>H</b></i>",a="demobrowser.demo.ui.overview.pages.Embed",B="rgba(0, 0, 200, 0.5)",A="bgcolor",z="rgb(200,0,0)",y="<u>M</u>",x="Embed",w="demobrowser/demo/flash/fo_tester.swf",v="this is passed in via FlashVars",u="<div style='background-color: white; text-align: center;'>",t="bold",s='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla f',q="Text with set font (bold)!",r="Canvas",o="Flash",p="white",m="noscale",n="#FF6600",l="HTML";
qx.Class.define(a,{extend:qx.ui.tabview.Page,include:demobrowser.demo.ui.overview.MControls,construct:function(){qx.ui.tabview.Page.call(this);
this.setLabel(x);
this.setLayout(new qx.ui.layout.Canvas());
var C=new qx.ui.layout.Grid(100,10);
C.setColumnFlex(1,1);
this.__Rd=new qx.ui.container.Composite(C);
this.add(this.__Rd,{top:40,width:j,height:j});
this._initWidgets();
this._initControls(this.__Re,{disabled:true});
},members:{__Re:null,__Rd:null,_initWidgets:function(){var N=this.__Re=new qx.type.Array();
var I;
I=new qx.ui.basic.Label(o);
this.__Rd.add(I,{row:0,column:0});
var O={flashVarText:v};
var H=new qx.ui.embed.Flash(w).set({scale:m,width:100,height:200,variables:O});
H.getContentElement().setParam(A,n);
N.push(H);
this.__Rd.add(H,{row:1,column:0,colSpan:2});
I=new qx.ui.basic.Label(r);
this.__Rd.add(I,{row:2,column:0});
var D=new qx.ui.embed.Canvas().set({width:200,height:200,canvasWidth:200,canvasHeight:200,syncDimension:true});
D.addListener(g,this.__Rf,this);
N.push(D);
this.__Rd.add(D,{row:3,column:0});
I=new qx.ui.basic.Label(l);
this.__Rd.add(I,{row:2,column:1});
var L=new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
this.__Rd.add(L,{row:3,column:1});
var J=u+b+c+y+d+f+h;
var G=new qx.ui.embed.Html(J);
N.push(G);
G.setMaxWidth(200);
G.setHeight(20);
G.setDecorator(k);
L.add(G);
var K=q;
var F=new qx.ui.embed.Html(K);
N.push(F);
F.setMaxWidth(200);
F.setFont(t);
F.setHeight(20);
F.setDecorator(k);
L.add(F);
var M=s;
var E=new qx.ui.embed.Html(M);
N.push(E);
E.setOverflow(i,i);
E.setDecorator(k);
E.setBackgroundColor(p);
E.setHeight(150);
E.setMaxWidth(200);
L.add(E);
},__Rf:function(e){var Q=e.getData();
var P=Q.context;
P.fillStyle=z;
P.fillRect(20,20,105,100);
P.fillStyle=B;
P.fillRect(70,70,105,100);
}}});
})();
(function(){var j="Boolean",i="sameDomain",h="opaque",g="String",f="best",e="quality",d="_applyVariables",c="low",b="_applyLoop",a="scale",R="_applyAllowScriptAccess",Q="showall",P="Map",O="wmode",N="excactfit",M="_applyMenu",L="menu",K="_applyPlay",J="loop",I="allowScriptAccess",q="_applyWmode",r="noborder",o="swLiveConnect",p="qx.ui.embed.Flash",m="_applyId",n="high",k="",l="transparent",s="play",t="_applyLiveConnect",A="_applySource",y="appear",C="medium",B="flash",E="_applyMayScript",D="_applyQuality",v="never",H="_applyScale",G="autohigh",F="always",u="window",w="noscale",x="autolow",z="mayscript";
qx.Class.define(p,{extend:qx.ui.core.Widget,construct:function(S,T){qx.ui.core.Widget.call(this);
{};
this.setSource(S);

if(T){this.setId(T);
}else{this.setId(B+this.toHashCode());
}this.initQuality();
this.initWmode();
this.initAllowScriptAccess();
this.initLiveConnect();
this.addListenerOnce(y,function(){this.getContentElement().createFlash();
},this);
},properties:{source:{check:g,apply:A},id:{check:g,apply:m},quality:{check:[c,x,G,C,n,f],init:f,nullable:true,apply:D},scale:{check:[Q,r,N,w],nullable:true,apply:H},wmode:{check:[u,h,l],init:h,nullable:true,apply:q},play:{check:j,nullable:true,apply:K},loop:{check:j,nullable:true,apply:b},mayScript:{check:j,nullable:false,apply:E},menu:{check:j,nullable:true,apply:M},allowScriptAccess:{check:[i,F,v],init:i,nullable:true,apply:R},liveConnect:{check:j,init:true,nullable:true,apply:t},variables:{init:{},check:P,apply:d}},members:{getFlashElement:function(){var U=this.getContentElement();

if(U){return U.getFlashElement();
}else{return null;
}},_createContentElement:function(){return new qx.html.Flash();
},_applySource:function(V,W){var X=qx.util.ResourceManager.getInstance().toUri(V);
this.getContentElement().setSource(X);
qx.ui.core.queue.Layout.add(this);
},_applyId:function(Y,ba){this.getContentElement().setId(Y);
qx.ui.core.queue.Layout.add(this);
},_applyVariables:function(bb,bc){this.getContentElement().setVariables(bb);
qx.ui.core.queue.Layout.add(this);
},_applyMayScript:function(bd,be){this.getContentElement().setAttribute(z,bd?k:false);
qx.ui.core.queue.Layout.add(this);
},_applyQuality:function(bf,bg){this.__Jo(e,bf);
},_applyScale:function(bh,bi){this.__Jo(a,bh);
},_applyWmode:function(bj,bk){this.__Jo(O,bj);
},_applyPlay:function(bl,bm){this.__Jo(s,bl);
},_applyLoop:function(bn,bo){this.__Jo(J,bn);
},_applyMenu:function(bp,bq){this.__Jo(L,bp);
},_applyAllowScriptAccess:function(br,bs){this.__Jo(I,br);
},_applyLiveConnect:function(bt,bu){this.__Jo(o,bt);
},__Jo:function(bv,bw){this.getContentElement().setParam(bv,bw);
qx.ui.core.queue.Layout.add(this);
}}});
})();
(function(){var d="div",c="movie",b="id",a="qx.html.Flash";
qx.Class.define(a,{extend:qx.html.Element,construct:function(e,f){qx.html.Element.call(this,d,e,f);
this.__Iq={};
this.__Ir={};
this.__Is={};
},members:{__Iq:null,__Is:null,__Ir:null,__It:null,_createDomElement:function(){return qx.bom.Element.create(d);
},createFlash:function(){this.__It=qx.bom.Flash.create(this.getDomElement(),this.getAttributes(),this.__Ir,this.__Iq);
},setSource:function(g){{};

if(this.__It){throw new Error("The source cannot be modified after initial creation");
}this.setAttribute(c,g);
},setId:function(h){{};

if(this.__It){throw new Error("The id cannot be modified after initial creation");
}this.setAttribute(b,h);
},getVariables:function(){return this.__Ir;
},setVariables:function(i){{};

if(this.__It){throw new Error("The variables cannot be modified after initial creation");
}this.__Ir=i;
},getAttributes:function(){return this.__Is;
},setAttribute:function(j,k){{};

if(this.__It){throw new Error("The attributes cannot be modified after initial creation");
}
if(k===null||k===undefined){delete this.__Is[j];
}else{this.__Is[j]=k;
}},getParams:function(){return this.__Iq;
},setParam:function(l,m){{};

if(this.__It){throw new Error("The params cannot be modified after initial creation");
}
if(m===null||m===undefined){delete this.__Iq[l];
}else{this.__Iq[l]=m;
}},getFlashElement:function(){return this.__It;
}},destruct:function(){if(this.__It){qx.bom.Flash.destroy(this.__It);
}this.__Iq=this.__Ir=this.__Is=null;
}});
})();
(function(){var k="qx.client",j="object",h="100%",g='</object>',f="movie",e="beforeunload",d="=",c="function",b="application/x-shockwave-flash",a='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">',A="param",z='" />',y="qx.bom.Flash",x='<param name="',w="load",v="type",u="name",t="data",s="",r="mshtml",p="value",q="&",n='<object id="',o='" value="',l='" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">',m="undefined";
qx.Class.define(y,{statics:{_flashObjects:{},create:function(B,C,D,E,F){if(!F){F=window;
}{};

if(!C.width){C.width=h;
}
if(!C.height){C.height=h;
}E=E?qx.lang.Object.clone(E):{};

if(!E[f]){E[f]=C.movie;
}C[t]=C.movie;
delete C.movie;
if(D){for(var name in D){if(typeof E.flashvars!=m){E.flashvars+=q+name+d+D[name];
}else{E.flashvars=name+d+D[name];
}}}var G=this.__Iz(B,C,E,F);
this._flashObjects[C.id]=G;
return G;
},destroy:qx.core.Variant.select(k,{"mshtml":function(H,I){H=this.__Iu(H);

if(H.readyState==4){this.__Iv(H);
}else{if(!I){I=window;
}qx.bom.Event.addNativeListener(I,w,function(){qx.bom.Flash.__Iv(H);
});
}},"default":function(J,K){J=this.__Iu(J);

if(J.parentNode){J.parentNode.removeChild(J);
}delete this._flashObjects[J.id];
}}),__Iu:function(L){if(!L){throw new Error("DOM element is null or undefined!");
}
if(L.tagName.toLowerCase()!==j){L=L.firstChild;
}
if(!L||L.tagName.toLowerCase()!==j){throw new Error("DOM element has or is not a flash object!");
}return L;
},__Iv:qx.core.Variant.select(k,{"mshtml":qx.event.GlobalError.observeMethod(function(M){for(var i in M){if(typeof M[i]==c){M[i]=null;
}}
if(M.parentNode){M.parentNode.removeChild(M);
}delete this._flashObjects[M.id];
}),"default":null}),__Iw:qx.event.GlobalError.observeMethod(function(){for(var N in qx.bom.Flash._flashObjects){qx.bom.Flash.destroy(qx.bom.Flash._flashObjects[N]);
}window.__Ix=function(){};
window.__Iy=function(){};
qx.bom.Event.removeNativeListener(window,e,qx.bom.Flash.__Iw);
}),__Iz:qx.core.Variant.select(k,{"mshtml":function(O,P,Q,R){Q.movie=P.data;
delete P.data;
delete P.classid;
var S=s;

for(name in Q){S+=x+name+o+Q[name]+z;
}if(P.id){O.innerHTML=n+P.id+l+S+g;
delete P.id;
}else{O.innerHTML=a+S+g;
}for(var name in P){O.firstChild.setAttribute(name,P[name]);
}return O.firstChild;
},"default":function(T,U,V,W){delete U.classid;
delete V.movie;
var Y=qx.bom.Element.create(j,U,W);
Y.setAttribute(v,b);
var X;

for(var name in V){X=qx.bom.Element.create(A,{},W);
X.setAttribute(u,name);
X.setAttribute(p,V[name]);
Y.appendChild(X);
}T.appendChild(Y);
return Y;
}})},defer:function(ba){if(qx.core.Variant.isSet(k,r)){qx.bom.Event.addNativeListener(window,e,ba.__Iw);
}}});
})();
(function(){var j="Integer",i="resize",h="_applyCanvasWidth",g="redraw",f="Boolean",d="__IY",c="_applyCanvasHeight",b="qx.ui.embed.Canvas",a="qx.event.type.Data";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(k,l){qx.ui.core.Widget.call(this);
this.__IY=new qx.util.DeferredCall(this.__Ja,this);
this.addListener(i,this._onResize,this);

if(k!==undefined){this.setCanvasWidth(k);
}
if(l!==undefined){this.setCanvasHeight(l);
}},events:{"redraw":a},properties:{syncDimension:{check:f,init:false},canvasWidth:{check:j,init:300,apply:h},canvasHeight:{check:j,init:150,apply:c}},members:{__IY:null,_createContentElement:function(){return new qx.html.Canvas();
},__Ja:function(){var n=this.getContentElement();
var p=n.getHeight();
var m=n.getWidth();
var o=n.getContext2d();
this._draw(m,p,o);
this.fireNonBubblingEvent(g,qx.event.type.Data,[{width:m,height:p,context:o}]);
},_applyCanvasWidth:function(q,r){this.getContentElement().setWidth(q);
this.__IY.schedule();
},_applyCanvasHeight:function(s,t){this.getContentElement().setHeight(s);
this.__IY.schedule();
},update:function(){this.__IY.schedule();
},_onResize:function(e){var u=e.getData();

if(this.getSyncDimension()){this.setCanvasHeight(u.height);
this.setCanvasWidth(u.width);
}},getContext2d:function(){return this.getContentElement().getContext2d();
},_draw:function(v,w,x){}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var c="canvas",b="2d",a="qx.html.Canvas";
qx.Class.define(a,{extend:qx.html.Element,construct:function(d,e){qx.html.Element.call(this,c,d,e);
this.__Jb=document.createElement(c);
},members:{__Jb:null,_createDomElement:function(){return this.__Jb;
},getCanvas:function(){return this.__Jb;
},setWidth:function(f){this.__Jb.width=f;
},getWidth:function(){return this.__Jb.width;
},setHeight:function(g){this.__Jb.height=g;
},getHeight:function(){return this.__Jb.height;
},getContext2d:function(){return this.__Jb.getContext(b);
}},destruct:function(){this.__Jb=null;
}});
})();
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(j){this.getContentElement().setStyle(h,j);
},_applyOverflowY:function(k){this.getContentElement().setStyle(d,k);
}}});
})();
(function(){var o="none",n="text",m="",l="userSelect",k="color",j="String",i="0px",h="webkit",g="changeHtml",f="_applyCssClass",c="class",e="qx.ui.embed.Html",d="_applyHtml",b="qx.client",a="html";
qx.Class.define(e,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(p){qx.ui.core.Widget.call(this);

if(p!=null){this.setHtml(p);
}},properties:{html:{check:j,apply:d,event:g,nullable:true},cssClass:{check:j,init:m,apply:f},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(q,r){var s=this.getContentElement();
s.setAttribute(a,q||m);
s.setStyles({"padding":i,"border":o});
},_applyCssClass:function(t,u){this.getContentElement().setAttribute(c,t);
},_applySelectable:function(v){qx.ui.core.Widget.prototype._applySelectable.call(this,v);
if(qx.core.Variant.isSet(b,h)){this.getContainerElement().setStyle(l,v?n:o);
this.getContentElement().setStyle(l,v?n:o);
}},_applyFont:function(w,x){var y=w?qx.theme.manager.Font.getInstance().resolve(w).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(y);
},_applyTextColor:function(z,A){if(z){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(z));
}else{this.getContentElement().removeStyle(k);
}}}});
})();
(function(){var f="demobrowser.demo.ui.overview.pages.EmbedFrame",e="../welcome.html",d="http://www.w3.org/",c="Iframe",b="ThemedIframe",a="EmbedFrame";
qx.Class.define(f,{extend:qx.ui.tabview.Page,include:demobrowser.demo.ui.overview.MControls,construct:function(){qx.ui.tabview.Page.call(this);
this.setLabel(a);
this.setLayout(new qx.ui.layout.Canvas());
this.__Rg=new qx.ui.container.Composite(new qx.ui.layout.Canvas(10));
this.add(this.__Rg,{top:40});
this._initWidgets();
this._initControls(this.__Rh,{disabled:true});
},members:{__Rh:null,__Rg:null,_initWidgets:function(){var g=this.__Rh=new qx.type.Array();
var j;
j=new qx.ui.basic.Label(c);
var i=new qx.ui.embed.Iframe().set({source:d,width:300,height:200});
g.push(i);
this.__Rg.add(j,{top:0,left:0});
this.__Rg.add(i,{top:20,left:0});
j=new qx.ui.basic.Label(b);
var h=new qx.ui.embed.ThemedIframe().set({source:e,width:300,height:200});
g.push(h);
this.__Rg.add(j,{top:0,left:350});
this.__Rg.add(h,{top:20,left:350});
}}});
})();
(function(){var j="String",i="qx.ui.embed.AbstractIframe",h="name",g="",f="_applySource",d="navigate",c="qx.event.type.Event",b="_applyFrameName",a="qx.event.type.Data";
qx.Class.define(i,{extend:qx.ui.core.Widget,construct:function(k){qx.ui.core.Widget.call(this);

if(k){this.setSource(k);
}this._getIframeElement().addListener(d,this.__GR,this);
},events:{"load":c,"navigate":a},properties:{source:{check:j,apply:f,nullable:true},frameName:{check:j,init:g,apply:b}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(l,m){this._getIframeElement().setSource(l);
},_applyFrameName:function(n,o){this._getIframeElement().setAttribute(h,n);
},getWindow:function(){return this._getIframeElement().getWindow();
},getDocument:function(){return this._getIframeElement().getDocument();
},getBody:function(){return this._getIframeElement().getBody();
},getName:function(){return this._getIframeElement().getName();
},reload:function(){this._getIframeElement().reload();
},__GR:function(e){var p=e.getData();

if(p){this.setSource(p);
}this.fireDataEvent("navigate",p);
}}});
})();
(function(){var k="qx.client",j="mousedown",i="load",h="help",g="mouseup",f="losecapture",d="contextmenu",c="none",b="display",a="no",G="Boolean",F="px",E="url(",D=")",C="gecko",B="repeat",A="div",z="auto",y="_applyScrollbar",x="__GV",r="DOMNodeInserted",s="_applyNativeHelp",p="yes",q="scrolling",n="/",o="appear",l="mshtml",m="block",t="qx.ui.embed.Iframe",u="iframe",w="qx/static/blank.gif",v="absolute";
qx.Class.define(t,{extend:qx.ui.embed.AbstractIframe,construct:function(H){if(H!=null){this.__GU=H;
}qx.ui.embed.AbstractIframe.call(this,H);
qx.event.Registration.addListener(document.body,j,this.block,this,true);
qx.event.Registration.addListener(document.body,g,this.release,this,true);
qx.event.Registration.addListener(document.body,f,this.release,this,true);
this.__GV=this._createBlockerElement();
this.getContainerElement().add(this.__GV);

if(qx.core.Variant.isSet(k,C)){this.addListenerOnce(o,function(e){var I=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(I,r,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:u},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:G,init:false,apply:s},scrollbar:{check:[z,a,p],nullable:true,themeable:true,apply:y}},members:{__GU:null,__GV:null,renderLayout:function(J,top,K,L){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,J,top,K,L);
var N=F;
var M=this.getInsets();
this.__GV.setStyles({"left":M.left+N,"top":M.top+N,"width":(K-M.left-M.right)+N,"height":(L-M.top-M.bottom)+N});
},_createContentElement:function(){var O=new qx.html.Iframe(this.__GU);
O.addListener(i,this._onIframeLoad,this);
return O;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var P=new qx.html.Element(A);
P.setStyles({"zIndex":20,"position":v,"display":c});
if(qx.core.Variant.isSet(k,l)){P.setStyles({backgroundImage:E+qx.util.ResourceManager.getInstance().toUri(w)+D,backgroundRepeat:B});
}return P;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(i);
},block:function(){this.__GV.setStyle(b,m);
},release:function(){this.__GV.setStyle(b,c);
},_applyNativeContextMenu:function(Q,R){if(Q!==false&&R!==false){return;
}var S=this.getDocument();

if(!S){return;
}
try{var T=S.documentElement;
}catch(e){return ;
}
if(R===false){qx.event.Registration.removeListener(T,d,this._onNativeContextMenu,this,true);
}
if(Q===false){qx.event.Registration.addListener(T,d,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(k,{"mshtml":function(U,V){var document=this.getDocument();

if(!document){return;
}
try{if(V===false){qx.bom.Event.removeNativeListener(document,h,qx.lang.Function.returnFalse);
}
if(U===false){qx.bom.Event.addNativeListener(document,h,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var X=this.getContentElement().getDomElement();
var W=X.src;
if(W.charAt(W.length-1)==n){W=W.substring(0,W.length-1);
}
if(W!=this.getSource()){qx.bom.Iframe.getWindow(X).stop();
X.src=this.getSource();
}},_applyScrollbar:function(Y){this.getContentElement().setAttribute(q,Y);
}},destruct:function(){this._disposeObjects(x);
qx.event.Registration.removeListener(document.body,j,this.block,this,true);
qx.event.Registration.removeListener(document.body,g,this.release,this,true);
qx.event.Registration.removeListener(document.body,f,this.release,this,true);
}});
})();
(function(){var h="source",g="name",f="qx.event.type.Event",d="iframe",c="qx.html.Iframe",b="navigate",a="qx.event.type.Data";
qx.Class.define(c,{extend:qx.html.Element,construct:function(i,j,k){qx.html.Element.call(this,d,j,k);
this.setSource(i);
this.addListener(b,this.__GW,this);
},events:{"load":f,"navigate":a},members:{_applyProperty:function(name,l){qx.html.Element.prototype._applyProperty.call(this,name,l);

if(name==h){var n=this.getDomElement();
var m=qx.bom.Iframe.queryCurrentUrl(n);
if(l==m){return;
}qx.bom.Iframe.setSource(n,l);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var o=this.getDomElement();

if(o){return qx.bom.Iframe.getWindow(o);
}else{return null;
}},getDocument:function(){var p=this.getDomElement();

if(p){return qx.bom.Iframe.getDocument(p);
}else{return null;
}},getBody:function(){var q=this.getDomElement();

if(q){return qx.bom.Iframe.getBody(q);
}else{return null;
}},setSource:function(r){this._setProperty(h,r);
return this;
},getSource:function(){return this._getProperty(h);
},setName:function(name){this.setAttribute(g,name);
return this;
},getName:function(){return this.getAttribute(g);
},reload:function(){var t=this.getDomElement();

if(t){var s=this.getSource();
this.setSource(null);
this.setSource(s);
}},__GW:function(e){var u=e.getData();

if(u){this.setSource(u);
}}}});
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
(function(){var f="load",e="qx.client",d="qx.bom.Iframe",c="webkit",b="iframe",a="body";
qx.Class.define(d,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(g,h){var g=g?qx.lang.Object.clone(g):{};
var i=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var j in i){if(g[j]==null){g[j]=i[j];
}}return qx.bom.Element.create(b,g,h);
},getWindow:function(k){try{return k.contentWindow;
}catch(l){return null;
}},getDocument:qx.core.Variant.select(e,{"mshtml":function(m){try{var n=this.getWindow(m);
return n?n.document:null;
}catch(o){return null;
}},"default":function(p){try{return p.contentDocument;
}catch(q){return null;
}}}),getBody:function(r){try{var s=this.getDocument(r);
return s?s.getElementsByTagName(a)[0]:null;
}catch(t){return null;
}},setSource:function(u,v){try{if(this.getWindow(u)&&qx.dom.Hierarchy.isRendered(u)){try{if(qx.core.Variant.isSet(e,c)&&qx.bom.client.Platform.MAC){var w=this.getContentWindow();

if(w){w.stop();
}}this.getWindow(u).location.replace(v);
}catch(x){u.src=v;
}}else{u.src=v;
}this.__so(u);
}catch(y){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(z){var A=this.getDocument(z);

try{if(A&&A.location){return A.location.href;
}}catch(B){}return null;
},__so:function(C){var D=function(){qx.bom.Event.removeNativeListener(C,f,D);
C.$$url=qx.bom.Iframe.queryCurrentUrl(C);
};
qx.bom.Event.addNativeListener(C,f,D);
}}});
})();
(function(){var t="auto",s="scrollbar-y",r="iframe",q="corner",p="on",o="scrollbar-x",n="scroll",m="hidden",l="_updateScrollbars",k="load",d="off",j="resize",h="horizontal",c="mousewheel",b="qx.ui.embed.ThemedIframe",g="scrollbarX",f="scrollbarY",i="scrollarea",a="vertical";
qx.Class.define(b,{extend:qx.ui.embed.AbstractIframe,construct:function(u){qx.ui.embed.AbstractIframe.call(this,u);
var v=new qx.ui.layout.Grid();
v.setColumnFlex(0,1);
v.setRowFlex(0,1);
this._setLayout(v);
this._showChildControl(r);
},properties:{appearance:{refine:true,init:i},scrollbarX:{check:[t,p,d],init:t,themeable:true,apply:l},scrollbarY:{check:[t,p,d],init:t,themeable:true,apply:l},scrollbar:{group:[g,f]}},members:{__GS:null,__GT:null,_getIframeElement:function(){return this.getChildControl(r).getContentElement();
},_createChildControlImpl:function(w,z){var A;

switch(w){case r:A=new qx.ui.embed.Iframe(this.getSource());
A.addListener(k,this._onIframeLoad,this);
A.addListener(j,this._onIframeResize,this);
this._add(A,{row:0,column:0});
break;
case o:A=new qx.ui.core.scroll.ScrollBar(h);
A.setMinWidth(0);
A.exclude();
A.addListener(n,this._onScrollBarX,this);
this._add(A,{row:1,column:0});
break;
case s:A=new qx.ui.core.scroll.ScrollBar(a);
A.setMinHeight(0);
A.exclude();
A.addListener(n,this._onScrollBarY,this);
this._add(A,{row:0,column:1});
break;
case q:A=new qx.ui.core.Widget();
A.setWidth(0);
A.setHeight(0);
A.exclude();
this._add(A,{row:1,column:1});
break;
}return A||qx.ui.embed.AbstractIframe.prototype._createChildControlImpl.call(this,w);
},_onIframeLoad:function(){this._disableScollbars();
var B=this._getIframeElement().getBody();

if(B){this._startIframeObserver();
this._addWheelListener();
}this.fireEvent(k);
},_onIframeResize:function(){this._updateScrollbars();
},_disableScollbars:function(){this._excludeChildControl(o);
this._excludeChildControl(s);
this._excludeChildControl(q);
this._stopIframeObserver();
},_addWheelListener:function(){try{var C=this._getIframeElement().getBody();
qx.bom.Element.addListener(C,c,this._onMouseWheel,this);
}catch(e){this._disableScollbars();
}},_onMouseWheel:function(e){var E=this._isChildControlVisible(s)&&this.getChildControl(s).isEnabled();

if(!E){return;
}var D=this.getChildControl(s,true);
D.scrollBySteps(e.getWheelDelta());
e.stop();
},_startIframeObserver:function(){if(this.__GT){this._stopIframeObserver();
}var F=qx.event.Idle.getInstance();
this.__GT=F.addListener("interval",this._onIframeObserverInterval,this);
},_stopIframeObserver:function(){this.__GS=null;

if(!this.__GT){return;
}var G=qx.event.Idle.getInstance();
G.removeListenerById(this.__GT);
},_onIframeObserverInterval:function(){var H=this._getIframeSize();

if(!H){this._disableScollbars();
return;
}
if(this.__GS&&H.width==this.__GS.width&&H.height==this.__GS.height){return;
}this.__GS=H;
this._preventIframeScrolling();
this._updateScrollbars();
},_preventIframeScrolling:function(){try{var I=this._getIframeElement().getWindow();
var J=this._getIframeElement().getDocument();

if(qx.bom.Document.isStandardMode(I)){J.documentElement.style.overflow=m;
}else{J.body.style.overflow=m;
}}catch(e){this._disableScollbars();
}},_updateScrollbars:function(){var K=this.__GS;
var N=this.getChildControl(r).getBounds();
var L=this.getChildControl(r).getInnerSize();

if(!K||!L||!L){return;
}var M=false;
var Q=false;
var O=this.getScrollbarX();
var P=this.getScrollbarY();

if(O===t&&P===t){var M=K.width>L.width;
var Q=K.height>L.height;
if((M||Q)&&!(M&&Q)){if(M){Q=K.height>N.height;
}else if(Q){M=K.width>N.width;
}}}else{var M=O===p;
var Q=P===p;
if(K.width>(M?N.width:L.width)&&O===t){M=true;
}
if(K.height>(M?N.height:L.height)&&P===t){Q=true;
}}this._configureScrollbar(o,M,L.width,K.width);
this._configureScrollbar(s,Q,L.height,K.height);
this._updateCornerWidget();
},_getIframeSize:function(){try{var R=this._getIframeElement().getWindow();
var S={width:qx.bom.Document.getWidth(R),height:qx.bom.Document.getHeight(R)};
return S;
}catch(e){return null;
}},_updateCornerWidget:function(){if(this._isChildControlVisible(o)&&this._isChildControlVisible(s)){this._showChildControl(q);
}else{this._excludeChildControl(q);
}},_configureScrollbar:function(T,U,V,W){if(!U){this._excludeChildControl(T);
return;
}var X=this._showChildControl(T);

if(V>=W){X.set({position:0,maximum:W,knobFactor:1,enabled:false});
}else{X.setMaximum(1000000);
X.set({position:Math.min(X.getPosition(),W),maximum:W-V,knobFactor:V/W,enabled:true});
}},_onScrollBarX:function(e){this.scrollToX(e.getData());
},_onScrollBarY:function(e){this.scrollToY(e.getData());
},scrollToX:function(x){try{var Y=this._getIframeElement().getWindow();
Y.scroll(x,qx.bom.Viewport.getScrollTop(Y));
}catch(e){this._disableScollbars();
}},scrollToY:function(y){try{var ba=this._getIframeElement().getWindow();
ba.scroll(qx.bom.Viewport.getScrollLeft(ba),y);
}catch(e){this._disableScollbars();
}}},destruct:function(){this._stopIframeObserver();
this.__GS=null;
}});
})();
(function(){var j="Toolbar Button",i="Menu MenuButton",h="Menu RadioButton",g="Toolbar SplitButton",f="Toolbar RadioButton",e="icon/16/actions/document-new.png",d="Menu MenuCheckBox",c="Left",b="MenuBar & Menu",a="Toolbar CheckBox",y="Toolbar MenuButton",x="ToolBar & Menu",w="Toolbar/Menu",v="icon/16/actions/format-justify-center.png",u="icon/16/actions/go-previous.png",t="icon/16/actions/format-text-underline.png",s="icon",r="Menu (with slidebar)",q="Center",p="main",n="demobrowser.demo.ui.overview.pages.ToolBar",o="icon/16/actions/format-justify-left.png",l="appear",m="Toggle",k="Menubar Button";
qx.Class.define(n,{extend:qx.ui.tabview.Page,include:demobrowser.demo.ui.overview.MControls,construct:function(){qx.ui.tabview.Page.call(this);
this.setLabel(w);
this.setLayout(new qx.ui.layout.Canvas());
this.__Ri=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
this.add(this.__Ri,{top:40});
this._initWidgets();
this._initControls(this.__Rj,{disabled:true,hovered:true,selected:true});
},members:{__Rj:null,__Ri:null,_initWidgets:function(){this.__Rj=new qx.type.Array();
var z;
z=new qx.ui.basic.Label(x);
this.__Ri.add(z,{left:0,top:0});
this.__Ri.add(this.getToolBar(),{left:0,top:20});
this.__Ri.add(this.getMenuWithSlideBar(),{left:0,top:70});
z=new qx.ui.basic.Label(b);
this.__Ri.add(z,{left:0,top:210});
this.__Ri.add(this.getMenuBar(),{left:0,top:230});
},getToolBar:function(){var D=new qx.ui.container.Composite(new qx.ui.layout.Grow);
D.setDecorator(p);
var toolbar=new qx.ui.toolbar.ToolBar;
toolbar.setWidth(200);
D.add(toolbar);
var E=new qx.ui.toolbar.Part;
var C=new qx.ui.toolbar.Part;
toolbar.add(E);
toolbar.addSpacer();
toolbar.add(C);
var H=new qx.ui.toolbar.SplitButton(g,u,this.getSplitButtonMenu());
H.setToolTip(new qx.ui.tooltip.ToolTip(g));
this.__Rj.push(H);
var J=new qx.ui.toolbar.Button(j,e);
J.setToolTip(new qx.ui.tooltip.ToolTip(j));
this.__Rj.push(J);
var A=new qx.ui.toolbar.CheckBox(m,t);
A.setToolTip(new qx.ui.tooltip.ToolTip(a));
this.__Rj.push(A);
var G=new qx.ui.toolbar.RadioButton(c,o);
G.setToolTip(new qx.ui.tooltip.ToolTip(f));
this.__Rj.push(G);
var F=new qx.ui.toolbar.RadioButton(q,v);
F.setToolTip(new qx.ui.tooltip.ToolTip(f));
this.__Rj.push(F);
var I=new qx.ui.form.RadioGroup(G,F);
I.setAllowEmptySelection(true);
E.add(H);
E.addSeparator();
E.add(J);
E.add(A);
E.add(G);
E.add(F);
E.setShow(s);
var B=new qx.ui.toolbar.MenuButton(y);
this.__Rj.push(B);
B.setMenu(this.getButtonMenu());
C.add(B);
return D;
},getSplitButtonMenu:function(){var K=new qx.ui.menu.Menu;
var L=new qx.ui.menu.Button(i);
this.__Rj.push(L);
K.add(L);
return K;
},getButtonMenu:function(){var N=new qx.ui.menu.Menu;
var O=new qx.ui.menu.Button(i,e);
this.__Rj.push(O);
var M=new qx.ui.menu.CheckBox(d);
this.__Rj.push(M);
var R=new qx.ui.menu.CheckBox(d).set({value:true});
this.__Rj.push(R);
var P=new qx.ui.menu.RadioButton(h);
this.__Rj.push(P);
var Q=new qx.ui.menu.RadioButton(h).set({value:true});
this.__Rj.push(Q);
N.add(O);
N.add(M);
N.add(R);
N.add(P);
N.add(Q);
return N;
},getMenuBar:function(){var S=new qx.ui.container.Composite(new qx.ui.layout.Grow);
var menubar=new qx.ui.menubar.MenuBar;
S.add(menubar);
var T=new qx.ui.menubar.Button(k,null,this.getButtonMenu());
this.__Rj.push(T);
menubar.add(T);
return S;
},getMenuWithSlideBar:function(){var W=new qx.ui.basic.Label(r);
var U=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
U.setHeight(120);
var V=this.getButtonMenu();
U.add(W,{left:0,top:0});
U.add(V,{left:0,top:0});
W.addListener(l,function(){V.openAtPoint({left:0,top:20});
});
V.hide=V.exclude=function(){};
return U;
}}});
})();
(function(){var g="arrow",f="qx.ui.toolbar.SplitButton",e="keydown",d="toolbar-splitbutton",c="button",b="keyup",a="execute";
qx.Class.define(f,{extend:qx.ui.form.SplitButton,construct:function(h,i,j,k){qx.ui.form.SplitButton.call(this,h,i,j,k);
this.removeListener(e,this._onKeyDown);
this.removeListener(b,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},focusable:{refine:true,init:false}},members:{_createChildControlImpl:function(l,m){var n;

switch(l){case c:n=new qx.ui.toolbar.Button;
n.addListener(a,this._onButtonExecute,this);
this._addAt(n,0);
break;
case g:n=new qx.ui.toolbar.MenuButton;
this._addAt(n,1);
break;
}return n||qx.ui.form.SplitButton.prototype._createChildControlImpl.call(this,l);
}}});
})();
(function(){var e="arrow",d="qx.ui.toolbar.MenuButton",c="Boolean",b="_applyShowArrow",a="toolbar-menubutton";
qx.Class.define(d,{extend:qx.ui.menubar.Button,properties:{appearance:{refine:true,init:a},showArrow:{check:c,init:false,themeable:true,apply:b}},members:{_createChildControlImpl:function(f,g){var h;

switch(f){case e:h=new qx.ui.basic.Image();
h.setAnonymous(true);
this._addAt(h,10);
break;
}return h||qx.ui.menubar.Button.prototype._createChildControlImpl.call(this,f);
},_applyShowArrow:function(i,j){if(i){this._showChildControl(e);
}else{this._excludeChildControl(e);
}}}});
})();
(function(){var e="inherit",d="toolbar-button",c="qx.ui.toolbar.CheckBox",b="keydown",a="keyup";
qx.Class.define(c,{extend:qx.ui.form.ToggleButton,construct:function(f,g){qx.ui.form.ToggleButton.call(this,f,g);
this.removeListener(b,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var a="qx.ui.toolbar.RadioButton";
qx.Class.define(a,{extend:qx.ui.toolbar.CheckBox,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel,qx.ui.form.IRadioItem],members:{_applyValue:function(b,c){qx.ui.toolbar.CheckBox.prototype._applyValue.call(this,b,c);

if(b){var d=this.getGroup();

if(d){d.setSelection([this]);
}}},_onExecute:function(e){var f=this.getGroup();

if(f&&f.getAllowEmptySelection()||!f){this.toggleValue();
}else{this.setValue(true);
}}}});
})();
(function(){var h="checked",g="menu-checkbox",f="Boolean",d="_applyValue",c="changeValue",b="qx.ui.menu.CheckBox",a="execute";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(i,j){qx.ui.menu.AbstractButton.call(this);
if(i!=null){if(i.translate){this.setLabel(i.translate());
}else{this.setLabel(i);
}}
if(j!=null){this.setMenu(j);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:f,init:false,apply:d,event:c,nullable:true}},members:{_applyValue:function(k,l){k?this.addState(h):this.removeState(h);
},_onExecute:function(e){this.toggleValue();
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var b="qx.ui.menubar.MenuBar",a="menubar";
qx.Class.define(b,{extend:qx.ui.toolbar.ToolBar,properties:{appearance:{refine:true,init:a}}});
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
},FORMAT_STACK:null,escapeHTML:function(bb){return String(bb).replace(/[<>&"']/g,this.__Fi);
},__Fi:function(bc){var bd={"<":s,">":F,"&":o,"'":p,'"':u};
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
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bw="' but found ",bv="The value '",bu=" != ",bt="qx.core.Object",bs="Expected value to be an array but found ",br=") was fired.",bq="Expected value to be an integer >= 0 but found ",bp="' to be not equal with '",bo="' to '",bn="qx.ui.core.Widget",w="Called assertTrue with '",x="Expected value to be a map but found ",u="The function did not raise an exception!",v="Expected value to be undefined but found ",s="Expected value to be a DOM element but found  '",t="Expected value to be a regular expression but found ",q="' to implement the interface '",r="Expected value to be null but found ",E="Invalid argument 'type'",F="Called assert with 'false'",R="Assertion error! ",N="Expected value to be a string but found ",ba="null",U="' but found '",bj="' must must be a key of the map '",bf="The String '",J="Expected value not to be undefined but found ",bm="qx.util.ColorUtil",bl=": ",bk="The raised exception does not have the expected type! ",I=") not fired.",L="qx.core.Assert",M="Expected value to be typeof object but found ",P="' (identical) but found '",S="' must have any of the values defined in the array '",V="Expected value to be a number but found ",bc="Called assertFalse with '",bh="]",y="Expected value to be a qooxdoo object but found ",z="' arguments.",K="Expected value not to be null but found ",Y="Array[",X="' does not match the regular expression '",W="' to be not identical with '",be="' arguments but found '",bd="', which cannot be converted to a CSS color!",T="Expected object '",bb="qx.core.AssertionError",a="Expected value to be a boolean but found ",bg="))!",A="Expected value to be a qooxdoo widget but found ",B="Expected value '%1' to be in the range '%2'..'%3'!",O="Expected value to be typeof '",b="Expected value to be typeof function but found ",c="Expected value to be an integer but found ",H="Called fail().",C="The parameter 're' must be a string or a regular expression.",D="Expected value to be a number >= 0 but found ",G="Expected value to be instanceof '",Q="Wrong number of arguments given. Expected '",bi="object";
qx.Class.define(L,{statics:{__rE:true,__rF:function(bx,by){var bz=p;

for(var i=1,l=arguments.length;i<l;i++){bz=bz+this.__rG(arguments[i]);
}var bB=R+bx+bl+bz;

if(this.__rE){qx.Bootstrap.error(bB);
}
if(qx.Class.isDefined(bb)){var bA=new qx.core.AssertionError(bx,bz);

if(this.__rE){qx.Bootstrap.error("Stack trace: \n"+bA.getStackTrace());
}throw bA;
}else{throw new Error(bB);
}},__rG:function(bC){var bD;

if(bC===null){bD=ba;
}else if(qx.lang.Type.isArray(bC)&&bC.length>10){bD=Y+bC.length+bh;
}else if((bC instanceof Object)&&(bC.toString==null)){bD=qx.lang.Json.stringify(bC,null,2);
}else{try{bD=bC.toString();
}catch(e){bD=p;
}}return bD;
},assert:function(bE,bF){bE==true||this.__rF(bF||p,F);
},fail:function(bG){this.__rF(bG||p,H);
},assertTrue:function(bH,bI){(bH===true)||this.__rF(bI||p,w,bH,m);
},assertFalse:function(bJ,bK){(bJ===false)||this.__rF(bK||p,bc,bJ,m);
},assertEquals:function(bL,bM,bN){bL==bM||this.__rF(bN||p,k,bL,U,bM,n);
},assertNotEquals:function(bO,bP,bQ){bO!=bP||this.__rF(bQ||p,k,bO,bp,bP,n);
},assertIdentical:function(bR,bS,bT){bR===bS||this.__rF(bT||p,k,bR,P,bS,n);
},assertNotIdentical:function(bU,bV,bW){bU!==bV||this.__rF(bW||p,k,bU,W,bV,n);
},assertNotUndefined:function(bX,bY){bX!==undefined||this.__rF(bY||p,J,bX,o);
},assertUndefined:function(ca,cb){ca===undefined||this.__rF(cb||p,v,ca,o);
},assertNotNull:function(cc,cd){cc!==null||this.__rF(cd||p,K,cc,o);
},assertNull:function(ce,cf){ce===null||this.__rF(cf||p,r,ce,o);
},assertJsonEquals:function(cg,ch,ci){this.assertEquals(qx.lang.Json.stringify(cg),qx.lang.Json.stringify(ch),ci);
},assertMatch:function(cj,ck,cl){this.assertString(cj);
this.assert(qx.lang.Type.isRegExp(ck)||qx.lang.Type.isString(ck),C);
cj.search(ck)>=0||this.__rF(cl||p,bf,cj,X,ck.toString(),n);
},assertArgumentsCount:function(cm,cn,co,cp){var cq=cm.length;
(cq>=cn&&cq<=co)||this.__rF(cp||p,Q,cn,bo,co,be,arguments.length,z);
},assertEventFired:function(cr,event,cs,ct,cu){var cw=false;
var cv=function(e){if(ct){ct.call(cr,e);
}cw=true;
};
var cx;

try{cx=cr.addListener(event,cv,cr);
cs.call();
}catch(cy){throw cy;
}finally{try{cr.removeListenerById(cx);
}catch(cz){}}cw===true||this.__rF(cu||p,f,event,I);
},assertEventNotFired:function(cA,event,cB,cC){var cE=false;
var cD=function(e){cE=true;
};
var cF=cA.addListener(event,cD,cA);
cB.call();
cE===false||this.__rF(cC||p,f,event,br);
cA.removeListenerById(cF);
},assertException:function(cG,cH,cI,cJ){var cH=cH||Error;
var cK;

try{this.__rE=false;
cG();
}catch(cL){cK=cL;
}finally{this.__rE=true;
}
if(cK==null){this.__rF(cJ||p,u);
}cK instanceof cH||this.__rF(cJ||p,bk,cH,bu,cK);

if(cI){this.assertMatch(cK.toString(),cI,cJ);
}},assertInArray:function(cM,cN,cO){cN.indexOf(cM)!==-1||this.__rF(cO||p,bv,cM,S,cN,m);
},assertArrayEquals:function(cP,cQ,cR){this.assertArray(cP,cR);
this.assertArray(cQ,cR);
this.assertEquals(cP.length,cQ.length,cR);

for(var i=0;i<cP.length;i++){this.assertIdentical(cP[i],cQ[i],cR);
}},assertKeyInMap:function(cS,cT,cU){cT[cS]!==undefined||this.__rF(cU||p,bv,cS,bj,cT,m);
},assertFunction:function(cV,cW){qx.lang.Type.isFunction(cV)||this.__rF(cW||p,b,cV,o);
},assertString:function(cX,cY){qx.lang.Type.isString(cX)||this.__rF(cY||p,N,cX,o);
},assertBoolean:function(da,db){qx.lang.Type.isBoolean(da)||this.__rF(db||p,a,da,o);
},assertNumber:function(dc,dd){(qx.lang.Type.isNumber(dc)&&isFinite(dc))||this.__rF(dd||p,V,dc,o);
},assertPositiveNumber:function(de,df){(qx.lang.Type.isNumber(de)&&isFinite(de)&&de>=0)||this.__rF(df||p,D,de,o);
},assertInteger:function(dg,dh){(qx.lang.Type.isNumber(dg)&&isFinite(dg)&&dg%1===0)||this.__rF(dh||p,c,dg,o);
},assertPositiveInteger:function(di,dj){var dk=(qx.lang.Type.isNumber(di)&&isFinite(di)&&di%1===0&&di>=0);
dk||this.__rF(dj||p,bq,di,o);
},assertInRange:function(dl,dm,dn,dp){(dl>=dm&&dl<=dn)||this.__rF(dp||p,qx.lang.String.format(B,[dl,dm,dn]));
},assertObject:function(dq,dr){var ds=dq!==null&&(qx.lang.Type.isObject(dq)||typeof dq===bi);
ds||this.__rF(dr||p,M,(dq),o);
},assertArray:function(dt,du){qx.lang.Type.isArray(dt)||this.__rF(du||p,bs,dt,o);
},assertMap:function(dv,dw){qx.lang.Type.isObject(dv)||this.__rF(dw||p,x,dv,o);
},assertRegExp:function(dx,dy){qx.lang.Type.isRegExp(dx)||this.__rF(dy||p,t,dx,o);
},assertType:function(dz,dA,dB){this.assertString(dA,E);
typeof (dz)===dA||this.__rF(dB||p,O,dA,bw,dz,o);
},assertInstance:function(dC,dD,dE){var dF=dD.classname||dD+p;
dC instanceof dD||this.__rF(dE||p,G,dF,bw,dC,o);
},assertInterface:function(dG,dH,dI){qx.Class.implementsInterface(dG,dH)||this.__rF(dI||p,T,dG,q,dH,n);
},assertCssColor:function(dJ,dK,dL){var dM=qx.Class.getByName(bm);

if(!dM){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dO=dM.stringToRgb(dJ);

try{var dN=dM.stringToRgb(dK);
}catch(dQ){this.__rF(dL||p,d,dJ,j,dO.join(h),g,dK,bd);
}var dP=dO[0]==dN[0]&&dO[1]==dN[1]&&dO[2]==dN[2];
dP||this.__rF(dL||p,d,dO,j,dO.join(h),g,dK,j,dN.join(h),bg);
},assertElement:function(dR,dS){!!(dR&&dR.nodeType===1)||this.__rF(dS||p,s,dR,n);
},assertQxObject:function(dT,dU){this.__rH(dT,bt)||this.__rF(dU||p,y,dT,o);
},assertQxWidget:function(dV,dW){this.__rH(dV,bn)||this.__rF(dW||p,A,dV,o);
},__rH:function(dX,dY){if(!dX){return false;
}var ea=dX.constructor;

while(ea){if(ea.classname===dY){return true;
}ea=ea.superclass;
}return false;
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__rI:null,__rJ:null,__rK:null,__rL:null,stringify:function(bb,bc,bd){this.__rI=p;
this.__rJ=p;
this.__rL=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__rJ+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__rJ=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__rK=bc;
}else{this.__rK=null;
}return this.__rM(p,{'':bb});
},__rM:function(be,bf){var bi=this.__rI,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__rK===e){bj=this.__rK.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__rN(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__rI+=this.__rJ;
bg=[];

if(this.__rL.indexOf(bj)!==-1){throw new TypeError(V);
}this.__rL.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__rM(i,bj)||h;
}this.__rL.pop();
if(bg.length===0){var bh=s;
}else if(this.__rI){bh=E+this.__rI+bg.join(Y+this.__rI)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__rI=bi;
return bh;
case z:this.__rI+=this.__rJ;
bg=[];

if(this.__rL.indexOf(bj)!==-1){throw new TypeError(V);
}this.__rL.push(bj);
if(this.__rK&&typeof this.__rK===f){var length=this.__rK.length;

for(var i=0;i<length;i+=1){var k=this.__rK[i];

if(typeof k===W){var v=this.__rM(k,bj);

if(v){bg.push(this.__rN(k)+(this.__rI?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__rM(k,bj);

if(v){bg.push(this.__rN(k)+(this.__rI?g:m)+v);
}}}}this.__rL.pop();
if(bg.length===0){var bh=A;
}else if(this.__rI){bh=w+this.__rI+bg.join(Y+this.__rI)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__rI=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__rN:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
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
return typeof bs===e?this.__rO({'':j},p,bs):j;
}throw new SyntaxError(P);
},__rO:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__rO(bx,k,bw);

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
(function(){var k="",j='</div>',i="none",h="keypress",g='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',f='.qxconsole .messages .user-result{background:white}',d='.qxconsole .messages .level-error{background:#FFE2D5}',c="div",b="user-command",a='<div class="command">',P='.qxconsole .command input:focus{outline:none;}',O='.qxconsole .messages .type-key{color:#565656;font-style:italic}',N='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',M='.qxconsole .messages div{padding:0px 4px;}',L='.qxconsole .messages .level-debug{background:white}',K='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',J="DIV",I='.qxconsole .messages .level-user{background:#E3EFE9}',H='<div class="qxconsole">',G='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',r='.qxconsole .messages .type-string{color:black;font-weight:normal;}',s='.qxconsole .control a{text-decoration:none;color:black;}',p='<div class="messages">',q='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',n='<input type="text"/>',o="clear",l='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',m='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',t='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',u='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',y='.qxconsole .messages .user-command{color:blue}',x="qx.log.appender.Console",A='.qxconsole .messages .level-info{background:#DEEDFA}',z="block",C='.qxconsole .messages .level-warn{background:#FFF7D5}',B='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',w='.qxconsole .messages .user-error{background:#FFE2D5}',F='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',E='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',D=">>> ",v='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(x,{statics:{init:function(){var Q=[t,F,s,g,M,y,f,w,L,A,C,d,I,r,v,q,m,G,O,K,N,B,u,l,P];
qx.bom.Stylesheet.createElement(Q.join(k));
var S=[H,E,p,j,a,n,j,j];
var T=document.createElement(J);
T.innerHTML=S.join(k);
var R=T.firstChild;
document.body.appendChild(T.firstChild);
this.__Lw=R;
this.__Lx=R.childNodes[1];
this.__Ly=R.childNodes[2].firstChild;
this.__LD();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,h,this.__LE,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__Lx.innerHTML=k;
},process:function(U){this.__Lx.appendChild(qx.log.appender.Util.toHtml(U));
this.__Lz();
},__Lz:function(){this.__Lx.scrollTop=this.__Lx.scrollHeight;
},__LA:true,toggle:function(){if(!this.__Lw){this.init();
}else if(this.__Lw.style.display==i){this.show();
}else{this.__Lw.style.display=i;
}},show:function(){if(!this.__Lw){this.init();
}else{this.__Lw.style.display=z;
this.__Lx.scrollTop=this.__Lx.scrollHeight;
}},__LB:[],execute:function(){var X=this.__Ly.value;

if(X==k){return;
}
if(X==o){return this.clear();
}var V=document.createElement(c);
V.innerHTML=qx.log.appender.Util.escapeHTML(D+X);
V.className=b;
this.__LB.push(X);
this.__LC=this.__LB.length;
this.__Lx.appendChild(V);
this.__Lz();

try{var W=window.eval(X);
}catch(Y){qx.log.Logger.error(Y);
}
if(W!==undefined){qx.log.Logger.debug(W);
}},__LD:function(e){this.__Lx.style.height=(this.__Lw.clientHeight-this.__Lw.firstChild.offsetHeight-this.__Lw.lastChild.offsetHeight)+"px";
},__LE:function(e){var bb=e.getKeyIdentifier();
if((bb=="F7")||(bb=="D"&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__Lw){return;
}if(!qx.dom.Hierarchy.contains(this.__Lw,e.getTarget())){return;
}if(bb=="Enter"&&this.__Ly.value!=""){this.execute();
this.__Ly.value="";
}if(bb=="Up"||bb=="Down"){this.__LC+=bb=="Up"?-1:1;
this.__LC=Math.min(Math.max(0,this.__LC),this.__LB.length);
var ba=this.__LB[this.__LC];
this.__Ly.value=ba||"";
this.__Ly.select();
}}},defer:function(bc){qx.event.Registration.addListener(document.documentElement,h,bc.__LE,bc);
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
(function(){var cn="window",cm="",cl="childNodes",ck="nodeName",cj="nodeType",ci="document",ch="function",cg="firstChild",cf="qx.client",ce="external",bt="location",bs="[native code]",br="lastChild",bq="scrollY",bp="scrollWidth",bo="defaultView",bn="closed",bm="content",bl="qx",bk="</td><td>",cu="filters",cv="locationbar",cs="screenX",ct="previousSibling",cq="localStorage",cr="scrollX",co="Global namespace is polluted by the following unknown objects:\n\n",cp="doctype",cw="parent",cx="qx.dev.Pollution",bR="outerText",bQ="pageYOffset",bT="parentElement",bS="designMode",bV="cookie",bU="fullScreen",bX="links",bW="pageXOffset",bP="frames",bO="documentElement",a="screenY",b="statusbar",c="history",d="sun",e="pkcs11",f="java",g="style",h="innerWidth",j="plugins",k="implementation",cB="clientWidth",cA="compatMode",cz="length",cy="textContent",cF="controllers",cE="netscape",cD="self",cC="domConfig",cH="attributes",cG="clientHeight",J="outerHeight",K="parentNode",H="innerHeight",I="title",N="ownerDocument",O="<table>",L="globalStorage",M="Global namespace is not polluted by any unknown objects.",F="toolbar",G="outerHTML",s="crypto",r="forms",u="scrollbars",t="frameElement",o="Components",n="body",q="clientInformation",p="offscreenBuffering",m="embeds",l="localName",T="scrollTop",U="isMultiLine",V="scrollLeft",W="images",P="event",Q="offsetHeight",R="scrollMaxY",S="sessionStorage",X="screen",Y="name",C="offsetLeft",B="console",A="XMLHttpRequest",z="mshtml",y="nextSibling",x="innerText",w="menubar",v="scopeName",E="top",D="outerWidth",ba=": ",bb="\n",bc="status",bd="contentEditable",be="anchors",bf="</table>",bg="<tr style='vertical-align:top'><td>",bh="scrollMaxX",bi="screenTop",bj="defaultStatus",bx="styleSheets",bw="className",bv="personalbar",bu="</td></tr>",bB="currentStyle",bA="directories",bz="navigator",by="applets",bD="screenLeft",bC="opener",bK="scrollHeight",bL="__firebug__",bI="Option",bJ="innerHTML",bG="tabIndex",bH="offsetTop",bE="[function]",bF="clipboardData",bM="Packages",bN="tagName",ca="offsetWidth",bY="applicationCache",cc="mshtml|opera",cb="undefined",cd="Image";
qx.Class.define(cx,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bl,f,d,bM,bL,o,cF,S,L,B,P,p,bF,q,bI,cd,ce,bi,bD,cz,cn,ci,bt,bz,cE,cw,bP,E,u,Y,cr,bq,cD,X,c,bm,w,F,cv,bv,b,bA,bn,s,e,bC,bc,bj,h,H,D,J,cs,a,bW,bQ,bh,R,bU,t,A,bY,cq],"document":[cC,bt,cA,k,bo,I,n,bx,bO,ck,cj,cg,br,cp,W,by,bX,r,be,bV,m,j,bS,cl],"body":[cy,bJ,G,x,bR,v,bT,bN,cu,bd,ci,bB,U,cG,cB,br,cg,bH,C,ca,Q,bG,bw,cH,ct,y,N,l,cl,K,cj,ck,g,T,V,bp,bK]},getInfo:function(cI){var cJ=qx.dev.Pollution.getTextList(cI||cn);

if(cJ){return co+cJ;
}else{return M;
}},extract:function(cK){var cM=[];
var cL=qx.dev.Pollution.ignore[cK];
if(qx.core.Variant.isSet(cf,z)){if(cK==cn){cL=cL.slice(0);

for(var cN=0;cN<window.length;cN++){cL.push(cm+cN);
}}}var cO=qx.dev.Pollution.names[cK];

for(var cP in cO){try{if(qx.core.Variant.isSet(cf,cc)){if(cK==cn&&cP==ce){continue;
}}if(typeof cO[cP]==cb||cO[cP]===null){continue;
}if(typeof cO[cP]==ch&&cO[cP].toString().indexOf(bs)!=-1){continue;
}if(typeof cO[cP].constructor==ch){if((cO[cP].constructor.toString().indexOf(bs)!=-1)||(cO[cP].constructor.toString().indexOf(bE)!=-1)){continue;
}}if(qx.lang.Array.contains(cL,cP)){continue;
}}catch(cQ){continue;
}cM.push({"key":cP,"value":cO[cP]});
}return cM;
},getHtmlTable:function(cR){var cT=[];
var cS=bg;
var cV=bk;
var cW=bu;
cT.push(O);
var cU=this.extract(cR);

for(var i=0;i<cU.length;i++){cT.push(cS+cU[i].key+cV+cU[i].value+cW);
}cT.push(bf);
return cT.join(cm);
},getTextList:function(cX){var da=[];
var db=ba;
var dc=bb;
var cY=this.extract(cX);

for(var i=0;i<cY.length;i++){da.push(cY[i].key+db+cY[i].value+dc);
}return da.join(cm);
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
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__tL:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__tL=null;
},getInsets:function(){if(this.__tL){return this.__tL;
}var j=this._getDefaultInsets();
return this.__tL={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__tL=null;
}},destruct:function(){this.__tL=null;
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
}},properties:{widthTop:{check:E,init:0,apply:b},widthRight:{check:E,init:0,apply:b},widthBottom:{check:E,init:0,apply:b},widthLeft:{check:E,init:0,apply:b},styleTop:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleRight:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,c,a,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[y,z,o]},right:{group:[r,A,p]},top:{group:[B,w,m]},bottom:{group:[x,q,v]},width:{group:[B,r,x,y],mode:C},style:{group:[w,A,q,z],mode:C},color:{group:[m,p,v,o],mode:C}},members:{__tM:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__tM;
},getMarkup:function(I){if(this.__tM){return this.__tM;
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
return this.__tM=L;
},resize:function(N,O,P){var Q=this.getInsets();
O-=Q.left+Q.right;
P-=Q.top+Q.bottom;
if(O<0){O=0;
}
if(P<0){P=0;
}N.style.width=O+e;
N.style.height=P+e;
N.style.left=(parseInt(N.style.left,10)+(Q.left-this.getWidthLeft()))+e;
N.style.top=(parseInt(N.style.top,10)+(Q.top-this.getWidthTop()))+e;
},tint:function(R,S){var T=qx.theme.manager.Color.getInstance();

if(S==null){S=this.getBackgroundColor();
}R.style.backgroundColor=T.resolve(S)||g;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__tM=null;
}});
})();
(function(){var j="px ",i=" ",h="px",g="Color",f="Number",e=";",d="shorthand",c="innerWidthRight",b="border-left:",a='<div style="position:absolute;top:0;left:0;',E="innerColorBottom",D='</div>',C='',B="scale",A="border-top",z="innerWidthTop",y="border-left",x="innerColorRight",w="innerColorTop",v="relative",q="border-top:",r="qx.ui.decoration.Double",o="border-right:",p='line-height:0;',m="innerColorLeft",n="border-bottom",k='">',l="innerWidthBottom",s="innerWidthLeft",t="border-bottom:",u="border-right";
qx.Class.define(r,{extend:qx.ui.decoration.Single,construct:function(F,G,H,innerWidth,I){qx.ui.decoration.Single.call(this,F,G,H,innerWidth,I);
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(I!=null){this.setInnerColor(I);
}},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[z,c,l,s],mode:d},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[w,x,E,m],mode:d}},members:{__Fl:null,_getDefaultInsets:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
},_isInitialized:function(){return !!this.__Fl;
},getMarkup:function(){if(this.__Fl){return this.__Fl;
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
return this.__Fl=a+L+k+N+D;
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
O.style.left=(T.left-this.getWidthLeft()-this.getInnerWidthLeft())+h;
O.style.top=(T.top-this.getWidthTop()-this.getInnerWidthTop())+h;
}},destruct:function(){this.__Fl=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(w,x,y){qx.ui.decoration.Abstract.call(this);
if(w!=null){this.setOuterColor(w);
}
if(x!=null){this.setInnerColor(x);
}
if(y!=null){this.setInnerOpacity(y);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__tO:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__tO;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__tO){return this.__tO;
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
return this.__tO=A.join(c);
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
}},destruct:function(){this.__tO=null;
}});
})();
(function(){var o="_applyStyle",n="",m="Color",l="px",k="solid",j="dotted",i="double",h="dashed",g="_applyWidth",f="qx.ui.decoration.Uniform",c="px ",e=" ",d="scale",b="PositiveInteger",a="absolute";
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(p,q,r){qx.ui.decoration.Abstract.call(this);
if(p!=null){this.setWidth(p);
}
if(q!=null){this.setStyle(q);
}
if(r!=null){this.setColor(r);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[k,j,h,i],init:k,apply:o},color:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__tP:null,_getDefaultInsets:function(){var s=this.getWidth();
return {top:s,right:s,bottom:s,left:s};
},_isInitialized:function(){return !!this.__tP;
},getMarkup:function(){if(this.__tP){return this.__tP;
}var t={position:a,top:0,left:0};
var u=this.getWidth();
{};
var w=qx.theme.manager.Color.getInstance();
t.border=u+c+this.getStyle()+e+(w.resolve(this.getColor())||n);
var v=this._generateBackgroundMarkup(t);
return this.__tP=v;
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
}},destruct:function(){this.__tP=null;
}});
})();
(function(){var m="Number",l="_applyInsets",k="-l",j="insetRight",i="insetTop",h="_applyBaseImage",g="insetBottom",f="set",e="shorthand",d="-t",a="insetLeft",c="String",b="qx.ui.decoration.Grid";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(n,o){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__tQ=new qx.ui.decoration.css3.BorderImage();

if(n){this.__tR(n);
}}else{this.__tQ=new qx.ui.decoration.GridDiv(n);
}
if(o!=null){this.__tQ.setInsets(o);
}},properties:{baseImage:{check:c,nullable:true,apply:h},insetLeft:{check:m,nullable:true,apply:l},insetRight:{check:m,nullable:true,apply:l},insetBottom:{check:m,nullable:true,apply:l},insetTop:{check:m,nullable:true,apply:l},insets:{group:[i,j,g,a],mode:e}},members:{__tQ:null,getMarkup:function(){return this.__tQ.getMarkup();
},resize:function(p,q,r){this.__tQ.resize(p,q,r);
},tint:function(s,t){},getInsets:function(){return this.__tQ.getInsets();
},_applyInsets:function(u,v,name){var w=f+qx.lang.String.firstUp(name);
this.__tQ[w](u);
},_applyBaseImage:function(x,y){if(this.__tQ instanceof qx.ui.decoration.GridDiv){this.__tQ.setBaseImage(x);
}else{this.__tR(x);
}},__tR:function(z){var B,D;
this.__tQ.setBorderImage(z);
var F=qx.util.AliasManager.getInstance().resolve(z);
var G=/(.*)(\.[a-z]+)$/.exec(F);
var C=G[1];
var E=G[2];
var A=qx.util.ResourceManager.getInstance();
var H=A.getImageHeight(C+d+E);
var I=A.getImageWidth(C+k+E);
{};
this.__tQ.setSlice([H,I]);
}},destruct:function(){this.__tQ=null;
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
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__tS:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__tS;
},getMarkup:function(){if(this.__tS){return this.__tS;
}var B=this._resolveImageUrl(this.getBorderImage());
var C=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var D=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__tS=[x,qx.bom.element.Style.compile({"borderImage":o+B+p+C.join(f)+f+D,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:C.join(b)+g}),y].join(q);
return this.__tS;
},resize:function(E,F,G){E.style.width=F+g;
E.style.height=G+g;
},tint:function(H,I){},_applyStyle:function(){{};
},_resolveImageUrl:function(J){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(J));
}},destruct:function(){this.__tS=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",x="qx.client",w="-br",v="-t",u="-tl",t="-r",s='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',r="_applyBaseImage",q="-b",p="String",o="",m="-bl",n="qx.ui.decoration.GridDiv",k="-c",l="mshtml";
qx.Class.define(n,{extend:qx.ui.decoration.Abstract,construct:function(y,z){qx.ui.decoration.Abstract.call(this);
if(y!=null){this.setBaseImage(y);
}
if(z!=null){this.setInsets(z);
}},properties:{baseImage:{check:p,nullable:true,apply:r}},members:{__tT:null,__tU:null,__tV:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__tT;
},getMarkup:function(){if(this.__tT){return this.__tT;
}var A=qx.bom.element.Decoration;
var B=this.__tU;
var C=this.__tV;
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
return this.__tT=D.join(o);
},resize:function(E,F,G){var H=this.__tV;
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
var M=this.__tU={tl:O+u+N,t:O+v+N,tr:O+d+N,bl:O+m+N,b:O+q+N,br:O+w+N,l:O+c+N,c:O+k+N,r:O+t+N};
this.__tV=this._computeEdgeSizes(M);
}},_resolveImageUrl:function(R){return qx.util.AliasManager.getInstance().resolve(R);
},_computeEdgeSizes:function(S){var T=qx.util.ResourceManager.getInstance();
return {top:T.getImageHeight(S.t),bottom:T.getImageHeight(S.b),left:T.getImageWidth(S.l),right:T.getImageWidth(S.r)};
}},destruct:function(){this.__tT=this.__tU=this.__tV=null;
}});
})();


qx.$$loader.init();

