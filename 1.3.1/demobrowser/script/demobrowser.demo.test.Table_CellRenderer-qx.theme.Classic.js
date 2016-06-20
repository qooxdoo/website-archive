(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.test.Table_CellRenderer","qx.theme":"qx.theme.Classic"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off","qx.test":"on"};
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
  uris : [["__out__:demobrowser.demo.test.Table_CellRenderer-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"b5e3b734ff3b"},
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

qx.$$packageData['b5e3b734ff3b']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/go-down.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/go-next.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/go-previous.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/go-up.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/emotes/face-sad.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/emotes/face-smile.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-down.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-next.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-previous.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-up.png":[16,16,"png","qx"],"qx/icon/Tango/16/emotes/face-sad.png":[16,16,"png","qx"],"qx/icon/Tango/16/emotes/face-smile.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};
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
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__pO:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);
this.__pO=true;
}else{this.__pO=false;
}}else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);
}}},handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__pO){this._handleSelectEvent(f,g);
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
},addListener:function(){}};
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
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
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
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var k="",j="Hello",h="icon/16/actions/go-down.png",g="World",f="bold",e="Juhu",d="</div>",c="waiting",b="icon/16/actions/go-next.png",a="http://resources.qooxdoo.org/images/logo.gif",O="$ ",N="string",M="border: 1px dotted green",L="inactive",K="decoration",J="multi<br>line",I="between",H="<",G="<div style='position:absolute;height:20px;width:",F="px;top:",r="qx/decoration/Modern",s="icon/16/actions/go-previous.png",p="icon",q="number",n="px'>",o="<i>italic</i>",l="0$",m="qx/icon/Tango",t="<b>bold</b>",u="icon/16/actions/go-up.png",x="boolean",w="demobrowser.demo.test.Table_CellRenderer",z="tooltip",y="red",B="icon/16/emotes/face-sad.png",A="icon/16/emotes/face-smile.png",v="left",E=">=",D="active",C="object";
qx.Class.define(w,{extend:qx.application.Native,include:[demobrowser.demo.table.MUtil],members:{main:function(){qx.application.Native.prototype.main.call(this);
this.setUp();
this.testDefaultRenderer(new qx.ui.table.cellrenderer.Default());
this.testDefaultRenderer(new qx.ui.table.cellrenderer.Default().set({useAutoAlign:false}));
this.testBooleanRenderer();
this.testDateRenderer();
this.testNumberRenderer();
this.testImageRenderer();
this.testStringRenderer();
this.testPasswordRenderer();
this.testHtmlRenderer();
this.testConditionalRenderer();
this.testDynamicRenderer();
this.testReplaceRenderer();
},setUp:function(){this.tableMock=this.getTableMock();
qx.util.AliasManager.getInstance().add(K,r);
qx.util.AliasManager.getInstance().add(p,m);
},__Og:function(P,top,Q,R,S){var T=[G,Q,F,top,n];
R.createDataCellHtml(S,T);
T.push(d);
P.innerHTML+=T.join(k);
},testDefaultRenderer:function(U){var V=100;
var X={value:[null,e,32,new Date()],styleLeft:[0],styleWidth:[V],styleHeight:[20],style:[k]};
var W=this._getNewTableDiv(V);
var top=0;
qx.util.Permutation.permute(X,function(Y){this.__Og(W,top,V,U,Y);
top+=20;
},this);
},testBooleanRenderer:function(){var bd=70;
var bc=30;
var be=new qx.ui.table.cellrenderer.Boolean();
var ba={value:[null,true,false],styleLeft:[0],styleWidth:[bd],styleHeight:[bc],style:[k]};
var bb=this._getNewTableDiv(bd);
var top=0;
qx.util.Permutation.permute(ba,function(bf){this.__Og(bb,top,bd,be,bf);
top+=bc;
},this);
be.setIconFalse(B);
be.setIconTrue(A);
qx.util.Permutation.permute(ba,function(bg){this.__Og(bb,top,bd,be,bg);
top+=bc;
},this);
},testDateRenderer:function(){var bk=180;
var bl=new qx.ui.table.cellrenderer.Date();
var bn={value:new Date(),styleLeft:[0],styleWidth:[bk],styleHeight:[20],style:[k]};
var bj=qx.util.format.DateFormat;
var bm=[bj.getDateTimeInstance(),bj.getDateInstance()];
var bh=this._getNewTableDiv(bk);
var top=0;

for(var i=0;i<bm.length;i++){var bi=bm[i];
bl.setDateFormat(bi);
this.__Og(bh,top,bk,bl,bn);
top+=20;
}},testNumberRenderer:function(){var bs=new qx.ui.table.cellrenderer.Number();
var br=100;
var bu={value:Math.PI,styleLeft:[0],styleWidth:[br],styleHeight:[20],style:[k]};
var bq=qx.util.format.NumberFormat;
var bt=[bq.getIntegerInstance(),new bq().set({minimumFractionDigits:3,maximumFractionDigits:5,prefix:O})];
var bo=this._getNewTableDiv(br);
var top=0;

for(var i=0;i<bt.length;i++){var bp=bt[i];
bs.setNumberFormat(bp);
this.__Og(bo,top,br,bs,bu);
top+=20;
}},testImageRenderer:function(){var bx=new qx.ui.table.cellrenderer.Image();
var bv=50;
var by={value:[null,h,u,s,b,a],styleLeft:[0],styleWidth:[bv],styleHeight:[20],style:[k],tooltip:[k,z]};
var bw=this._getNewTableDiv(bv);
var top=0;
qx.util.Permutation.permute(by,function(bz){this.__Og(bw,top,bv,bx,bz);
top+=20;
},this);
},testStringRenderer:function(){var bE=new qx.ui.table.cellrenderer.String();
var bD=100;
var bC=20;
var bA={value:[null,j,g],styleLeft:[0],styleWidth:[bD],styleHeight:[bC],style:[k]};
var bB=this._getNewTableDiv(bD);
var top=0;
qx.util.Permutation.permute(bA,function(bF){this.__Og(bB,top,bD,bE,bF);
top+=20;
},this);
},testPasswordRenderer:function(){var bK=new qx.ui.table.cellrenderer.Password();
var bJ=100;
var bI=20;
var bG={value:[null,j,g],styleLeft:[0],styleWidth:[bJ],styleHeight:[bI],style:[k]};
var bH=this._getNewTableDiv(bJ);
var top=0;
qx.util.Permutation.permute(bG,function(bL){this.__Og(bH,top,bJ,bK,bL);
top+=20;
},this);
},testHtmlRenderer:function(){var bQ=new qx.ui.table.cellrenderer.Html();
var bP=100;
var bO=50;
var bM={value:[null,t,o,J],styleLeft:[0],styleWidth:[bP],styleHeight:[bO],style:[k]};
var bN=this._getNewTableDiv(bP);
var top=0;
qx.util.Permutation.permute(bM,function(bR){this.__Og(bN,top,bP,bQ,bR);
top+=20;
},this);
},testConditionalRenderer:function(){var bW=new qx.ui.table.cellrenderer.Conditional();
bW.addNumericCondition(H,0,null,y,null,null);
bW.addNumericCondition(E,100,v,null,null,null);
bW.addBetweenCondition(I,0,2,null,null,null,f,null);
bW.addRegex(l,null,null,f,M);
var bV=100;
var bU=20;
var bS={value:[null,1,2,100,200,-100,0],styleLeft:[0],styleWidth:[bV],table:[this.tableMock],styleHeight:[bU],style:[k]};
var bT=this._getNewTableDiv(bV);
var top=0;
qx.util.Permutation.permute(bS,function(bX){this.__Og(bT,top,bV,bW,bX);
top+=20;
},this);
},testDynamicRenderer:function(){var cd=new qx.ui.table.cellrenderer.Dynamic();
cd.setCellRendererFactoryFunction(function(ce){var cg=ce.value;
var cf=qx.ui.table.cellrenderer;

switch(typeof cg){case N:if(cg.match(/^icon\//)){return new cf.Image();
}else{return new cf.String();
}case x:return new cf.Boolean();
case q:return new cf.Number();
case C:if(cg instanceof Date){return new cf.Date();
}return new cf.Default();
}});
var cc=100;
var cb=20;
var bY={value:[null,e,new Date(),30,h,false],styleLeft:[0],styleWidth:[cc],styleHeight:[cb],table:[this.tableMock],style:[k]};
var ca=this._getNewTableDiv(cc);
var top=0;
qx.util.Permutation.permute(bY,function(ch){this.__Og(ca,top,cc,cd,ch);
top+=20;
},this);
},testReplaceRenderer:function(){var cm=new qx.ui.table.cellrenderer.Replace();
cm.setReplaceMap({1:D,2:L,3:c});
cm.addReversedReplaceMap();
var cl=100;
var ck=20;
var ci={value:[1,2,3],styleLeft:[0],styleWidth:[cl],table:[this.tableMock],styleHeight:[ck],style:[k]};
var cj=this._getNewTableDiv(cl);
var top=0;
qx.util.Permutation.permute(ci,function(cn){this.__Og(cj,top,cl,cm,cn);
top+=20;
},this);
}},destruct:function(){this.tableMock=null;
}});
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
(function(){var l="]",k="..",h="changeSelection",g="_applySelectionMode",f='ie',d="qx.event.type.Event",c="Ranges:",b="qx.ui.table.selection.Model",a=" [";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__pP=[];
this.__pQ=-1;
this.__pR=-1;
this.hasBatchModeRefCount=0;
this.__pS=false;
},events:{"changeSelection":d},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:g}},members:{__pS:null,__pQ:null,__pR:null,__pP:null,_applySelectionMode:function(m){this.resetSelection();
},setBatchMode:function(n){if(n){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__pS){this.__pS=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__pQ;
},_setAnchorSelectionIndex:function(o){this.__pQ=o;
},getLeadSelectionIndex:function(){return this.__pR;
},_setLeadSelectionIndex:function(p){this.__pR=p;
},_getSelectedRangeArr:function(){return this.__pP;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__pP.length==0;
},getSelectedCount:function(){var r=0;

for(var i=0;i<this.__pP.length;i++){var q=this.__pP[i];
r+=q.maxIndex-q.minIndex+1;
}return r;
},isSelectedIndex:function(s){for(var i=0;i<this.__pP.length;i++){var t=this.__pP[i];

if(s>=t.minIndex&&s<=t.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var u=[];

for(var i=0;i<this.__pP.length;i++){u.push({minIndex:this.__pP[i].minIndex,maxIndex:this.__pP[i].maxIndex});
}return u;
},iterateSelection:function(v,w){for(var i=0;i<this.__pP.length;i++){for(var j=this.__pP[i].minIndex;j<=this.__pP[i].maxIndex;j++){v.call(w,j);
}}},setSelectionInterval:function(x,y){var z=this.self(arguments);

switch(this.getSelectionMode()){case z.NO_SELECTION:return;
case z.SINGLE_SELECTION:if(this.isSelectedIndex(y)){return;
}x=y;
break;
case z.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=x;i<=y;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){if(qx.bom.client.Browser.NAME==f&&qx.bom.client.Browser.VERSION<=7){this.setBatchMode(false);
}throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(x,y);
this._fireChangeSelection();
},addSelectionInterval:function(A,B){var C=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case C.NO_SELECTION:return;
case C.MULTIPLE_INTERVAL_SELECTION:case C.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(A,B);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(A,B);
break;
}},removeSelectionInterval:function(D,E){this.__pQ=D;
this.__pR=E;
var F=Math.min(D,E);
var H=Math.max(D,E);
for(var i=0;i<this.__pP.length;i++){var J=this.__pP[i];

if(J.minIndex>H){break;
}else if(J.maxIndex>=F){var K=(J.minIndex>=F)&&(J.minIndex<=H);
var I=(J.maxIndex>=F)&&(J.maxIndex<=H);

if(K&&I){this.__pP.splice(i,1);
i--;
}else if(K){J.minIndex=H+1;
}else if(I){J.maxIndex=F-1;
}else{var G={minIndex:H+1,maxIndex:J.maxIndex};
this.__pP.splice(i+1,0,G);
J.maxIndex=F-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__pP=[];
this.__pQ=-1;
this.__pR=-1;
},_addSelectionInterval:function(L,M){this.__pQ=L;
this.__pR=M;
var N=Math.min(L,M);
var P=Math.max(L,M);
var O=0;

for(;O<this.__pP.length;O++){var Q=this.__pP[O];

if(Q.minIndex>N){break;
}}this.__pP.splice(O,0,{minIndex:N,maxIndex:P});
var R=this.__pP[0];

for(var i=1;i<this.__pP.length;i++){var Q=this.__pP[i];

if(R.maxIndex+1>=Q.minIndex){R.maxIndex=Math.max(R.maxIndex,Q.maxIndex);
this.__pP.splice(i,1);
i--;
}else{R=Q;
}}},_dumpRanges:function(){var S=c;

for(var i=0;i<this.__pP.length;i++){var T=this.__pP[i];
S+=a+T.minIndex+k+T.maxIndex+l;
}this.debug(S);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__pS=true;
}else{this.fireEvent(h);
}}},destruct:function(){this.__pP=null;
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
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(d){},createRowStyle:function(e){},getRowClass:function(f){}}});
})();
(function(){var t="",s="table-row-background-even",r="table-row-background-selected",q="table-row",p="background-color:",o="table-row-background-focused",n=';border-bottom: 1px solid ',m=';color:',l="table-row-selected",k="table-row-background-odd",d="default",j="table-row-background-focused-selected",g="qx.ui.table.rowrenderer.Default",c="table-row-line",b="'",f="height:",e=";",h="px;",a="1px solid ",i="Boolean";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__oA=t;
this.__oA={};
this.__oB={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(d));
var u=qx.theme.manager.Color.getInstance();
this.__oB.bgcolFocusedSelected=u.resolve(j);
this.__oB.bgcolFocused=u.resolve(o);
this.__oB.bgcolSelected=u.resolve(r);
this.__oB.bgcolEven=u.resolve(s);
this.__oB.bgcolOdd=u.resolve(k);
this.__oB.colSelected=u.resolve(l);
this.__oB.colNormal=u.resolve(q);
this.__oB.horLine=u.resolve(c);
},properties:{highlightFocusRow:{check:i,init:true}},members:{__oB:null,__oC:null,__oA:null,_insetY:1,_renderFont:function(v){if(v){this.__oC=v.getStyles();
this.__oA=qx.bom.element.Style.compile(this.__oC);
this.__oA=this.__oA.replace(/"/g,b);
}else{this.__oA=t;
this.__oC=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(w,x){var z=this.__oC;
var y=x.style;
qx.bom.element.Style.setStyles(x,z);

if(w.focusedRow&&this.getHighlightFocusRow()){y.backgroundColor=w.selected?this.__oB.bgcolFocusedSelected:this.__oB.bgcolFocused;
}else{if(w.selected){y.backgroundColor=this.__oB.bgcolSelected;
}else{y.backgroundColor=(w.row%2==0)?this.__oB.bgcolEven:this.__oB.bgcolOdd;
}}y.color=w.selected?this.__oB.colSelected:this.__oB.colNormal;
y.borderBottom=a+this.__oB.horLine;
},getRowHeightStyle:function(A){if(qx.bom.client.Feature.CONTENT_BOX){A-=this._insetY;
}return f+A+h;
},createRowStyle:function(B){var C=[];
C.push(e);
C.push(this.__oA);
C.push(p);

if(B.focusedRow&&this.getHighlightFocusRow()){C.push(B.selected?this.__oB.bgcolFocusedSelected:this.__oB.bgcolFocused);
}else{if(B.selected){C.push(this.__oB.bgcolSelected);
}else{C.push((B.row%2==0)?this.__oB.bgcolEven:this.__oB.bgcolOdd);
}}C.push(m);
C.push(B.selected?this.__oB.colSelected:this.__oB.colNormal);
C.push(n,this.__oB.horLine);
return C.join(t);
},getRowClass:function(D){return t;
},getRowAttributes:function(E){return t;
}},destruct:function(){this.__oB=this.__oC=this.__oA=null;
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
(function(){var c="hovered",b="__qg",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(d){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__qf=new qx.ui.core.Blocker(this);
this.__qg=d;
},members:{__qg:null,__qh:null,__qi:null,__qf:null,getPaneScroller:function(){return this.__qg;
},getTable:function(){return this.__qg.getTable();
},getBlocker:function(){return this.__qf;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(e,f,g){var h=this.getHeaderWidgetAtColumn(e);

if(h!=null){h.setWidth(f);
}},setMouseOverColumn:function(i){if(i!=this.__qi){if(this.__qi!=null){var j=this.getHeaderWidgetAtColumn(this.__qi);

if(j!=null){j.removeState(c);
}}
if(i!=null){this.getHeaderWidgetAtColumn(i).addState(c);
}this.__qi=i;
}},getHeaderWidgetAtColumn:function(k){var l=this.getPaneScroller().getTablePaneModel().getX(k);
return this._getChildren()[l];
},showColumnMoveFeedback:function(m,x){var q=this.getContainerLocation();

if(this.__qh==null){var v=this.getTable();
var n=this.getPaneScroller().getTablePaneModel().getX(m);
var p=this._getChildren()[n];
var r=v.getTableModel();
var t=v.getTableColumnModel();
var u={xPos:n,col:m,name:r.getColumnName(m),table:v};
var s=t.getHeaderCellRenderer(m);
var o=s.createHeaderCell(u);
var w=p.getBounds();
o.setWidth(w.width);
o.setHeight(w.height);
o.setZIndex(1000000);
o.setOpacity(0.8);
o.setLayoutProperties({top:q.top});
this.getApplicationRoot().add(o);
this.__qh=o;
}this.__qh.setLayoutProperties({left:q.left+x});
this.__qh.show();
},hideColumnMoveFeedback:function(){if(this.__qh!=null){this.__qh.destroy();
this.__qh=null;
}},isShowingColumnMoveFeedback:function(){return this.__qh!=null;
},_updateContent:function(y){var I=this.getTable();
var C=I.getTableModel();
var F=I.getTableColumnModel();
var H=this.getPaneScroller().getTablePaneModel();
var K=this._getChildren();
var D=H.getColumnCount();
var G=C.getSortColumnIndex();
if(y){this._cleanUpCells();
}var z={};
z.sortedAscending=C.isSortAscending();

for(var x=0;x<D;x++){var B=H.getColumnAtX(x);

if(B===undefined){continue;
}var J=F.getColumnWidth(B);
var E=F.getHeaderCellRenderer(B);
z.xPos=x;
z.col=B;
z.name=C.getColumnName(B);
z.editable=C.isColumnEditable(B);
z.sorted=(B==G);
z.table=I;
var A=K[x];
if(A==null){A=E.createHeaderCell(z);
A.set({width:J});
this._add(A);
}else{E.updateHeaderCell(z,A);
}}},_cleanUpCells:function(){var M=this._getChildren();

for(var x=M.length-1;x>=0;x--){var L=M[x];
L.destroy();
}}},destruct:function(){this.__qf.dispose();
this._disposeObjects(b);
}});
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
this.__jf=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__jf:null,_applyTimeoutInterval:function(h){this.__jf.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__jf){this.__jf.stop();
}this.__jf=null;
}});
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
(function(){var k="",j="Number",h='</div>',g='" ',f="paneUpdated",e='<div>',d="</div>",c="overflow: hidden;",b="qx.event.type.Data",a="paneReloadsData",E="div",D='style="',C="_applyMaxCacheLines",B="qx.ui.table.pane.Pane",A="width: 100%;",z="qx.event.type.Event",w="_applyVisibleRowCount",v='>',u="line-height: ",t="appear",r='class="',s="width:100%;",p="px;",q='<div ',n="'>",o="_applyFirstVisibleRow",l="<div style='",m=";position:relative;";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(F){qx.ui.core.Widget.call(this);
this.__pT=F;
this.__pU=0;
this.__pV=0;
this.__pW=[];
},events:{"paneReloadsData":b,"paneUpdated":z},properties:{firstVisibleRow:{check:j,init:0,apply:o},visibleRowCount:{check:j,init:0,apply:w},maxCacheLines:{check:j,init:1000,apply:C},allowShrinkX:{refine:true,init:false}},members:{__pV:null,__pU:null,__pT:null,__pX:null,__pY:null,__qa:null,__pW:null,__qb:0,_applyFirstVisibleRow:function(G,H){this.updateContent(false,G-H);
},_applyVisibleRowCount:function(I,J){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__pT;
},getTable:function(){return this.__pT.getTable();
},setFocusedCell:function(K,L,M){if(K!=this.__qa||L!=this.__pY){var N=this.__pY;
this.__qa=K;
this.__pY=L;
if(L!=N&&!M){if(N!==null){this.updateContent(false,null,N,true);
}
if(L!==null){this.updateContent(false,null,L,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(O,P){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(Q,R,S,T){this.__qc();
var V=this.getFirstVisibleRow();
var U=this.getVisibleRowCount();

if(R==-1||R>=V&&Q<V+U){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(W,X){if(this.__qb>=W&&W!==-1){this.__qc();
}},__qc:function(){this.__pW=[];
this.__qb=0;
},__qd:function(Y,ba,bb){if(!ba&&!bb&&this.__pW[Y]){return this.__pW[Y];
}else{return null;
}},__qe:function(bc,bd,be,bf){var bg=this.getMaxCacheLines();

if(!be&&!bf&&!this.__pW[bc]&&bg>0){this._applyMaxCacheLines(bg);
this.__pW[bc]=bd;
this.__qb+=1;
}},updateContent:function(bh,bi,bj,bk){if(bh){this.__qc();
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
bs.focusedRow=(this.__pY==bv);
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
bz.push({col:bY,xPos:x,editable:bA.isColumnEditable(bY),focusedCol:this.__qa==bY,styleLeft:bC,styleWidth:bF});
bC+=bF;
}var bX=[];
var ca=false;

for(var bE=bw;bE<bw+bx;bE++){var bH=bG.isSelectedIndex(bE);
var bK=(this.__pY==bE);
var bP=this.__qd(bE,bH,bK);

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
this.__qe(bE,bQ,bH,bK);
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
}}if(!this.__pX){this.__pX=document.createElement(E);
}var ck=e;
ck+=this._getRowsHtml(ci+ce,Math.abs(cb));
ck+=h;
this.__pX.innerHTML=ck;
var cf=this.__pX.firstChild.childNodes;
if(cb>0){for(var i=cf.length-1;i>=0;i--){var ch=cf[0];
cl.appendChild(ch);
}}else{for(var i=cf.length-1;i>=0;i--){var ch=cf[cf.length-1];
cl.insertBefore(ch,cl.firstChild);
}}if(this.__pY!==null){this._updateRowStyles(this.__pY-cb);
this._updateRowStyles(this.__pY);
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
this.__pU=cw;
this.__pV=cq;
this.fireEvent(f);
}},destruct:function(){this.__pX=this.__pT=this.__pW=null;
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
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f='" ',e="nowrap",d="default",c="qx.client",b="}",a="width:",H=".qooxdoo-table-cell-right { text-align:right } ",G="0px 6px",F='<div class="',E="0px",D="height:",C="1px solid ",B=".qooxdoo-table-cell-bold { font-weight:bold } ",A="String",z="} ",y='>',q="mshtml",r='</div>',o="ellipsis",p="content-box",m='left:',n="qx.ui.table.cellrenderer.Abstract",k='" style="',l="abstract",s="none",t="hidden",v="table-column-line",u='px;',x=".qooxdoo-table-cell-italic { font-style:italic} ",w="absolute";
qx.Class.define(n,{type:l,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var I=qx.ui.table.cellrenderer.Abstract;

if(!I.__nx){var K=qx.theme.manager.Color.getInstance();
I.__nx=this.self(arguments);
var J=h+
qx.bom.element.Style.compile({position:w,top:E,overflow:t,whiteSpace:e,borderRight:C+K.resolve(v),padding:G,cursor:d,textOverflow:o,userSelect:s})+z+H+x+B;

if(!qx.core.Variant.isSet(c,q)){J+=h+qx.bom.element.BoxSizing.compile(p)+b;
}I.__nx.stylesheet=qx.bom.Stylesheet.createElement(J);
}},properties:{defaultCellStyle:{init:null,check:A,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(L){return g;
},_getCellStyle:function(M){return M.style||j;
},_getCellAttributes:function(N){return j;
},_getContentHtml:function(O){return O.value||j;
},_getCellSizeStyle:function(P,Q,R,S){var T=j;

if(qx.bom.client.Feature.CONTENT_BOX){P-=R;
Q-=S;
}T+=a+Math.max(P,0)+i;
T+=D+Math.max(Q,0)+i;
return T;
},createDataCellHtml:function(U,V){V.push(F,this._getCellClass(U),k,m,U.styleLeft,u,this._getCellSizeStyle(U.styleWidth,U.styleHeight,this._insetX,this._insetY),this._getCellStyle(U),f,this._getCellAttributes(U),y+this._getContentHtml(U),r);
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
}var o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);
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
this.__kQ=u;
},statics:{getIntegerInstance:function(){var v=qx.util.format.NumberFormat;

if(v._integerInstance==null){v._integerInstance=new v();
v._integerInstance.setMaximumFractionDigits(0);
}return v._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__kQ:null,format:function(w){switch(w){case Infinity:return f;
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

for(F=z.length;F>3;F-=3){D=t+qx.locale.Number.getGroupSeparator(this.__kQ)+z.substring(F-3,F)+D;
}D=z.substring(0,F)+D;
}var B=this.getPrefix()?this.getPrefix():t;
var y=this.getPostfix()?this.getPostfix():t;
var E=B+(A?r:t)+D;

if(C.length>0){E+=t+qx.locale.Number.getDecimalSeparator(this.__kQ)+C;
}E+=y;
return E;
},parse:function(I){var N=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__kQ)+t);
var L=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__kQ)+t);
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
(function(){var a="qx.util.Permutation";
qx.Class.define(a,{statics:{permute:function(b,c,d){var f=qx.lang.Object.getKeys(b);
var e={};
var j=[];

for(var i=0;i<f.length;i++){j[i]=0;
var h=f[i];
e[h]=b[h][0];
}var g=function(k,l){if(k>=f.length){return;
}var n=f[k];
var m=b[n];

for(var i=0;i<m.length;i++){if(l!==i){j[k]=i;
e[n]=m[i];
c.call(d||window,e);
}g(k+1,j[k+1]);
}};
g(0,-1);
}}});
})();
(function(){var r="px",q=".qooxdoo-table-cell-icon {",p="abstract",o="",n="qx.ui.table.cellrenderer.AbstractImage",m=" qooxdoo-table-cell-icon",l="<div></div>",k="'",j="no-repeat",i="}",c="  text-align:center;",h="inline-block",f="static",b="top",a="  padding-top:1px;",e="title='",d="string",g="-moz-inline-box";
qx.Class.define(n,{extend:qx.ui.table.cellrenderer.Abstract,type:p,construct:function(){qx.ui.table.cellrenderer.Abstract.call(this);
var s=this.self(arguments);

if(!s.stylesheet){s.stylesheet=qx.bom.Stylesheet.createElement(q+c+a+i);
}},members:{__rP:16,__rQ:16,__rR:null,_insetY:2,_identifyImage:function(t){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(u){var v=this._identifyImage(u);
if(v==null||typeof v==d){v={url:v,tooltip:null};
}if(!v.imageWidth||!v.imageHeight){var w=this.__rS(v.url);
v.imageWidth=w.width;
v.imageHeight=w.height;
}v.width=v.imageWidth;
v.height=v.imageHeight;
return v;
},__rS:function(x){var A=qx.util.ResourceManager.getInstance();
var z=qx.io.ImageLoader;
var y,B;
if(A.has(x)){y=A.getImageWidth(x);
B=A.getImageHeight(x);
}else if(z.isLoaded(x)){y=z.getWidth(x);
B=z.getHeight(x);
}else{y=this.__rP;
B=this.__rQ;
}return {width:y,height:B};
},createDataCellHtml:function(C,D){this.__rR=this._getImageInfos(C);
return qx.ui.table.cellrenderer.Abstract.prototype.createDataCellHtml.call(this,C,D);
},_getCellClass:function(E){return qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this)+m;
},_getContentHtml:function(F){var content=l;
if(this.__rR.url){content=qx.bom.element.Decoration.create(this.__rR.url,j,{width:this.__rR.width+r,height:this.__rR.height+r,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?g:h,verticalAlign:b,position:f});
}return content;
},_getCellAttributes:function(G){var H=this.__rR.tooltip;

if(H){return e+H+k;
}else{return o;
}}},destruct:function(){this.__rR=null;
}});
})();
(function(){var g="String",f="_applyIconTrue",e="decoration/table/boolean-true.png",d="qx.ui.table.cellrenderer.Boolean",c=";padding-top:4px;",b="decoration/table/boolean-false.png",a="_applyIconFalse";
qx.Class.define(d,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){qx.ui.table.cellrenderer.AbstractImage.call(this);
this.__xY=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:g,init:e,apply:f},iconFalse:{check:g,init:b,apply:a}},members:{__ya:null,__yb:false,__xY:null,_applyIconTrue:function(h){this.__ya=this.__xY.resolve(h);
},_applyIconFalse:function(i){this.__yb=this.__xY.resolve(i);
},_insetY:5,_getCellStyle:function(j){return qx.ui.table.cellrenderer.AbstractImage.prototype._getCellStyle.call(this,j)+c;
},_identifyImage:function(k){var l={imageWidth:11,imageHeight:11};

switch(k.value){case true:l.url=this.__ya;
break;
case false:l.url=this.__yb;
break;
default:l.url=null;
break;
}return l;
}},destruct:function(){this.__xY=null;
}});
})();
(function(){var s="",r="==",q=">",p="between",o="<",n="regex",m="!between",l=">=",k="!=",j="<=",c="font-weight",h=";",f="text-align",b='g',a=":",e="qx.ui.table.cellrenderer.Conditional",d="color",g="font-style";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Default,construct:function(t,u,v,w){qx.ui.table.cellrenderer.Default.call(this);
this.numericAllowed=[r,k,q,o,l,j];
this.betweenAllowed=[p,m];
this.conditions=[];
this.__xT=t||s;
this.__xU=u||s;
this.__xV=v||s;
this.__xW=w||s;
},members:{__xT:null,__xU:null,__xV:null,__xW:null,__xX:function(x,y){if(x[1]!=null){y[f]=x[1];
}
if(x[2]!=null){y[d]=x[2];
}
if(x[3]!=null){y[g]=x[3];
}
if(x[4]!=null){y[c]=x[4];
}},addNumericCondition:function(z,A,B,C,D,E,F){var G=null;

if(qx.lang.Array.contains(this.numericAllowed,z)){if(A!=null){G=[z,B,C,D,E,A,F];
}}
if(G!=null){this.conditions.push(G);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(H,I,J,K,L,M,N,O){if(qx.lang.Array.contains(this.betweenAllowed,H)){if(I!=null&&J!=null){var P=[H,K,L,M,N,I,J,O];
}}
if(P!=null){this.conditions.push(P);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(Q,R,S,T,U,V){if(Q!=null){var W=[n,R,S,T,U,Q,V];
}
if(W!=null){this.conditions.push(W);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(X){if(!this.conditions.length){return X.style||s;
}var bd=X.table.getTableModel();
var i;
var bf;
var Y;
var bb={"text-align":this.__xT,"color":this.__xU,"font-style":this.__xV,"font-weight":this.__xW};

for(i in this.conditions){bf=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][6],X.row);
}
switch(this.conditions[i][0]){case r:if(Y==this.conditions[i][5]){bf=true;
}break;
case k:if(Y!=this.conditions[i][5]){bf=true;
}break;
case q:if(Y>this.conditions[i][5]){bf=true;
}break;
case o:if(Y<this.conditions[i][5]){bf=true;
}break;
case l:if(Y>=this.conditions[i][5]){bf=true;
}break;
case j:if(Y<=this.conditions[i][5]){bf=true;
}break;
}}else if(qx.lang.Array.contains(this.betweenAllowed,this.conditions[i][0])){if(this.conditions[i][7]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][7],X.row);
}
switch(this.conditions[i][0]){case p:if(Y>=this.conditions[i][5]&&Y<=this.conditions[i][6]){bf=true;
}break;
case m:if(Y<this.conditions[i][5]&&Y>this.conditions[i][6]){bf=true;
}break;
}}else if(this.conditions[i][0]==n){if(this.conditions[i][6]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][6],X.row);
}var ba=new RegExp(this.conditions[i][5],b);
bf=ba.test(Y);
}if(bf==true){this.__xX(this.conditions[i],bb);
}}var be=[];

for(var bc in bb){if(bb[bc]){be.push(bc,a,bb[bc],h);
}}return be.join(s);
}},destruct:function(){this.numericAllowed=this.betweenAllowed=this.conditions=null;
}});
})();
(function(){var d="",c="qx.util.format.DateFormat",b="qooxdoo-table-cell",a="qx.ui.table.cellrenderer.Date";
qx.Class.define(a,{extend:qx.ui.table.cellrenderer.Conditional,properties:{dateFormat:{check:c,init:null,nullable:true}},members:{_getContentHtml:function(e){var f=this.getDateFormat();

if(f){if(e.value){return qx.bom.String.escape(f.format(e.value));
}else{return d;
}}else{return e.value||d;
}},_getCellClass:function(g){return b;
}}});
})();
(function(){var e="",d="qooxdoo-table-cell qooxdoo-table-cell-right",c="0",b="qx.util.format.NumberFormat",a="qx.ui.table.cellrenderer.Number";
qx.Class.define(a,{extend:qx.ui.table.cellrenderer.Conditional,properties:{numberFormat:{check:b,init:null,nullable:true}},members:{_getContentHtml:function(f){var g=this.getNumberFormat();

if(g){if(f.value||f.value==0){return g.format(f.value);
}else{return e;
}}else{return f.value==0?c:(f.value||e);
}},_getCellClass:function(h){return d;
}}});
})();
(function(){var b="qx.ui.table.cellrenderer.Image",a="";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(c,d){qx.ui.table.cellrenderer.AbstractImage.call(this);

if(c){this.__rT=c;
}
if(d){this.__rU=d;
}this.__rV=qx.util.AliasManager.getInstance();
},members:{__rV:null,__rU:16,__rT:16,_identifyImage:function(e){var f={imageWidth:this.__rT,imageHeight:this.__rU};

if(e.value==a){f.url=null;
}else{f.url=this.__rV.resolve(e.value);
}f.tooltip=e.tooltip;
return f;
}},destruct:function(){this.__rV=null;
}});
})();
(function(){var c="qx.ui.table.cellrenderer.String",b="qooxdoo-table-cell",a="";
qx.Class.define(c,{extend:qx.ui.table.cellrenderer.Conditional,members:{_getContentHtml:function(d){return qx.bom.String.escape(d.value||a);
},_getCellClass:function(e){return b;
}}});
})();
(function(){var c="",b="qx.ui.table.cellrenderer.Password",a="*";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.Default,members:{_getContentHtml:function(d){var e=d.value;

if(e===null){e=c;
}d.value=e.replace(/./g,a);
return qx.bom.String.escape(this._formatValue(d));
}}});
})();
(function(){var c="qooxdoo-table-cell",b="qx.ui.table.cellrenderer.Html",a="";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.Conditional,members:{_getContentHtml:function(d){return (d.value||a);
},_getCellClass:function(e){return c;
}}});
})();
(function(){var b="Function",a="qx.ui.table.cellrenderer.Dynamic";
qx.Class.define(a,{extend:qx.ui.table.cellrenderer.Default,construct:function(c){qx.ui.table.cellrenderer.Default.call(this);

if(c){this.setCellRendererFactoryFunction(c);
}},properties:{cellRendererFactoryFunction:{check:b,nullable:true,init:null}},members:{createDataCellHtml:function(d,e){var g=this.getCellRendererFactoryFunction();

if(!g){throw new Error("No function provided! Aborting.");
}var f=g(d);
return f.createDataCellHtml(d,e);
}}});
})();
(function(){var d="Function",c="undefined",b="qx.ui.table.cellrenderer.Replace",a="Object";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.Default,properties:{replaceMap:{check:a,nullable:true,init:null},replaceFunction:{check:d,nullable:true,init:null}},members:{_getContentHtml:function(e){var h=e.value;
var f=this.getReplaceMap();
var g=this.getReplaceFunction();
var i;
if(f){i=f[h];

if(typeof i!=c){e.value=i;
return qx.bom.String.escape(this._formatValue(e));
}}if(g){e.value=g(h);
}return qx.bom.String.escape(this._formatValue(e));
},addReversedReplaceMap:function(){var j=this.getReplaceMap();

for(var l in j){var k=j[l];
j[k]=l;
}return true;
}}});
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

