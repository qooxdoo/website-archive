(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.bom.Iframe","qx.theme":"qx.theme.Modern"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.1.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.bom.Iframe-qx.theme.Modern.js"]],
  urisBefore : [],
  packageHashes : {"0":"872a0366f7d8"},
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  
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
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
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

qx.$$packageData['872a0366f7d8']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser.demo"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-132],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-110],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"]},"translations":{}};
(function(){var bv="toString",bu=".",bt="default",bs="Object",br='"',bq="Array",bp="()",bo="String",bn="Function",bm=".prototype",bU="function",bT="Boolean",bS="Error",bR="constructor",bQ="warn",bP="hasOwnProperty",bO="string",bN="toLocaleString",bM="RegExp",bL='\", "',bC="info",bD="BROKEN_IE",bA="isPrototypeOf",bB="Date",by="",bz="qx.Bootstrap",bw="]",bx="Class",bE="error",bF="[Class ",bH="valueOf",bG="Number",bJ="count",bI="debug",bK="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bF+this.classname+bw;
},createNamespace:function(name,bc){var be=name.split(bu);
var parent=window;
var bd=be[0];

for(var i=0,bf=be.length-1;i<bf;i++,bd=be[i]){if(!parent[bd]){parent=parent[bd]={};
}else{parent=parent[bd];
}}parent[bd]=bc;
return bd;
},setDisplayName:function(ba,bb,name){ba.displayName=bb+bu+name+bp;
},setDisplayNames:function(H,I){for(var name in H){var J=H[name];

if(J instanceof Function){J.displayName=I+bu+name+bp;
}}},define:function(name,P){if(!P){var P={statics:{}};
}var U;
var S=null;
qx.Bootstrap.setDisplayNames(P.statics,name);

if(P.members||P.extend){qx.Bootstrap.setDisplayNames(P.members,name+bm);
U=P.construct||new Function;

if(P.extend){this.extendClass(U,U,P.extend,name,T);
}var Q=P.statics||{};
for(var i=0,V=qx.Bootstrap.getKeys(Q),l=V.length;i<l;i++){var W=V[i];
U[W]=Q[W];
}S=U.prototype;
var R=P.members||{};
for(var i=0,V=qx.Bootstrap.getKeys(R),l=V.length;i<l;i++){var W=V[i];
S[W]=R[W];
}}else{U=P.statics||{};
}var T=this.createNamespace(name,U);
U.name=U.classname=name;
U.basename=T;
U.$$type=bx;
if(!U.hasOwnProperty(bv)){U.toString=this.genericToString;
}if(P.defer){P.defer(U,S);
}qx.Bootstrap.$$registry[name]=P.statics;
return U;
}};
qx.Bootstrap.define(bz,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(o,p,q,name,r){var u=q.prototype;
var t=new Function;
t.prototype=u;
var s=new t;
o.prototype=s;
s.name=s.classname=name;
s.basename=r;
p.base=o.superclass=q;
p.self=o.constructor=s.constructor=o;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(X){return X.__count__;
},"default":function(bi){var length=0;

for(var bj in bi){length++;
}return length;
}})[(({}).__count__==0)?bJ:bt],objectMergeWith:function(j,k,m){if(m===undefined){m=true;
}
for(var n in k){if(m||j[n]===undefined){j[n]=k[n];
}}return j;
},__gL:[bA,bP,bN,bv,bH,bR],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(ce){var cf=[];
var ch=Object.prototype.hasOwnProperty;

for(var ci in ce){if(ch.call(ce,ci)){cf.push(ci);
}}var cg=qx.Bootstrap.__gL;

for(var i=0,a=cg,l=a.length;i<l;i++){if(ch.call(ce,a[i])){cf.push(a[i]);
}}return cf;
},"default":function(v){var w=[];
var x=Object.prototype.hasOwnProperty;

for(var y in v){if(x.call(v,y)){w.push(y);
}}return w;
}})[typeof (Object.keys)==
bU?bK:
(function(){for(var N in {toString:1}){return N;
}})()!==bv?bD:bt],getKeysAsString:function(e){var f=qx.Bootstrap.getKeys(e);

if(f.length==0){return by;
}return br+f.join(bL)+br;
},__gM:{"[object String]":bo,"[object Array]":bq,"[object Object]":bs,"[object RegExp]":bM,"[object Number]":bG,"[object Boolean]":bT,"[object Date]":bB,"[object Function]":bn,"[object Error]":bS},bind:function(bY,self,ca){var cb=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var d=Array.prototype.slice.call(arguments,0,arguments.length);
return bY.apply(self,cb.concat(d));
};
},firstUp:function(bV){return bV.charAt(0).toUpperCase()+bV.substr(1);
},firstLow:function(bg){return bg.charAt(0).toLowerCase()+bg.substr(1);
},getClass:function(B){var C=Object.prototype.toString.call(B);
return (qx.Bootstrap.__gM[C]||C.slice(8,-1));
},isString:function(bh){return (bh!==null&&(typeof bh===bO||qx.Bootstrap.getClass(bh)==bo||bh instanceof String||(!!bh&&!!bh.$$isString)));
},isArray:function(D){return (D!==null&&(D instanceof Array||(D&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(D.constructor,qx.data.IListData))||qx.Bootstrap.getClass(D)==bq||(!!D&&!!D.$$isArray)));
},isObject:function(K){return (K!==undefined&&K!==null&&qx.Bootstrap.getClass(K)==bs);
},isFunction:function(Y){return qx.Bootstrap.getClass(Y)==bn;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(M,name){while(M){if(M.$$properties&&M.$$properties[name]){return M.$$properties[name];
}M=M.superclass;
}return null;
},hasProperty:function(h,name){return !!qx.Bootstrap.getPropertyDefinition(h,name);
},getEventType:function(O,name){var O=O.constructor;

while(O.superclass){if(O.$$events&&O.$$events[name]!==undefined){return O.$$events[name];
}O=O.superclass;
}return null;
},supportsEvent:function(L,name){return !!qx.Bootstrap.getEventType(L,name);
},getByInterface:function(E,F){var G,i,l;

while(E){if(E.$$implements){G=E.$$flatImplements;

for(i=0,l=G.length;i<l;i++){if(G[i]===F){return E;
}}}E=E.superclass;
}return null;
},hasInterface:function(z,A){return !!qx.Bootstrap.getByInterface(z,A);
},getMixins:function(bW){var bX=[];

while(bW){if(bW.$$includes){bX.push.apply(bX,bW.$$flatIncludes);
}bW=bW.superclass;
}return bX;
},$$logs:[],debug:function(cj,ck){qx.Bootstrap.$$logs.push([bI,arguments]);
},info:function(cc,cd){qx.Bootstrap.$$logs.push([bC,arguments]);
},warn:function(bk,bl){qx.Bootstrap.$$logs.push([bQ,arguments]);
},error:function(b,c){qx.Bootstrap.$$logs.push([bE,arguments]);
},trace:function(g){}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__dM:{},define:function(j,k){if(k===undefined){throw new Error('Default value of setting "'+j+'" must be defined!');
}
if(!this.__dM[j]){this.__dM[j]={};
}else if(this.__dM[j].defaultValue!==undefined){throw new Error('Setting "'+j+'" is already defined!');
}this.__dM[j].defaultValue=k;
},get:function(n){var o=this.__dM[n];

if(o===undefined){throw new Error('Setting "'+n+'" is not defined.');
}
if(o.value!==undefined){return o.value;
}return o.defaultValue;
},set:function(l,m){if((l.split(a)).length<2){throw new Error('Malformed settings key "'+l+'". Must be following the schema "namespace.key".');
}
if(!this.__dM[l]){this.__dM[l]={};
}this.__dM[l].value=m;
},__dN:function(){if(window.qxsettings){for(var r in window.qxsettings){this.set(r,window.qxsettings[r]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(p){}this.__dO();
}},__dO:function(){if(this.get(h)!=true){return;
}var t=document.location.search.slice(1).split(g);

for(var i=0;i<t.length;i++){var s=t[i].split(b);

if(s.length!=3||s[0]!=c){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(q){q.define(h,false);
q.define(e,false);
q.define(d,0);
q.__dN();
}});
})();
(function(){var m="function",k="Boolean",j="qx.Interface",h="]",g="toggle",f="Interface",e="is",d="[Interface ";
qx.Bootstrap.define(j,{statics:{define:function(name,n){if(n){if(n.extend&&!(n.extend instanceof Array)){n.extend=[n.extend];
}{};
var o=n.statics?n.statics:{};
if(n.extend){o.$$extends=n.extend;
}
if(n.properties){o.$$properties=n.properties;
}
if(n.members){o.$$members=n.members;
}
if(n.events){o.$$events=n.events;
}}else{var o={};
}o.$$type=f;
o.name=name;
o.toString=this.genericToString;
o.basename=qx.Bootstrap.createNamespace(name,o);
qx.Interface.$$registry[name]=o;
return o;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(D){if(!D){return [];
}var E=D.concat();

for(var i=0,l=D.length;i<l;i++){if(D[i].$$extends){E.push.apply(E,this.flatten(D[i].$$extends));
}}return E;
},__eV:function(I,J,K,L){var P=K.$$members;

if(P){for(var O in P){if(qx.Bootstrap.isFunction(P[O])){var N=this.__eW(J,O);
var M=N||qx.Bootstrap.isFunction(I[O]);

if(!M){throw new Error('Implementation of method "'+O+'" is missing in class "'+J.classname+'" required by interface "'+K.name+'"');
}var Q=L===true&&!N&&!qx.Bootstrap.hasInterface(J,K);

if(Q){I[O]=this.__fa(K,I[O],O,P[O]);
}}else{if(typeof I[O]===undefined){if(typeof I[O]!==m){throw new Error('Implementation of member "'+O+'" is missing in class "'+J.classname+'" required by interface "'+K.name+'"');
}}}}}},__eW:function(t,u){var y=u.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!y){return false;
}var v=qx.Bootstrap.firstLow(y[2]);
var w=qx.Bootstrap.getPropertyDefinition(t,v);

if(!w){return false;
}var x=y[0]==e||y[0]==g;

if(x){return qx.Bootstrap.getPropertyDefinition(t,v).check==k;
}return true;
},__eX:function(a,b){if(b.$$properties){for(var c in b.$$properties){if(!qx.Bootstrap.getPropertyDefinition(a,c)){throw new Error('The property "'+c+'" is not supported by Class "'+a.classname+'"!');
}}}},__eY:function(F,G){if(G.$$events){for(var H in G.$$events){if(!qx.Bootstrap.supportsEvent(F,H)){throw new Error('The event "'+H+'" is not supported by Class "'+F.classname+'"!');
}}}},assertObject:function(p,q){var s=p.constructor;
this.__eV(p,s,q,false);
this.__eX(s,q);
this.__eY(s,q);
var r=q.$$extends;

if(r){for(var i=0,l=r.length;i<l;i++){this.assertObject(p,r[i]);
}}},assert:function(z,A,B){this.__eV(z.prototype,z,A,B);
this.__eX(z,A);
this.__eY(z,A);
var C=A.$$extends;

if(C){for(var i=0,l=C.length;i<l;i++){this.assert(z,C[i],B);
}}},genericToString:function(){return d+this.name+h;
},$$registry:{},__fa:function(){},__fb:null,__fc:function(){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,o){if(o){if(o.include&&!(o.include instanceof Array)){o.include=[o.include];
}{};
var q=o.statics?o.statics:{};
qx.Bootstrap.setDisplayNames(q,name);

for(var p in q){if(q[p] instanceof Function){q[p].$$mixin=q;
}}if(o.construct){q.$$constructor=o.construct;
qx.Bootstrap.setDisplayName(o.construct,name,e);
}
if(o.include){q.$$includes=o.include;
}
if(o.properties){q.$$properties=o.properties;
}
if(o.members){q.$$members=o.members;
qx.Bootstrap.setDisplayNames(o.members,name+f);
}
for(var p in q.$$members){if(q.$$members[p] instanceof Function){q.$$members[p].$$mixin=q;
}}
if(o.events){q.$$events=o.events;
}
if(o.destruct){q.$$destructor=o.destruct;
qx.Bootstrap.setDisplayName(o.destruct,name,b);
}}else{var q={};
}q.$$type=a;
q.name=name;
q.toString=this.genericToString;
q.basename=qx.Bootstrap.createNamespace(name,q);
this.$$registry[name]=q;
return q;
},checkCompatibility:function(r){var u=this.flatten(r);
var v=u.length;

if(v<2){return true;
}var y={};
var x={};
var w={};
var t;

for(var i=0;i<v;i++){t=u[i];

for(var s in t.events){if(w[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+w[s]+'" in member "'+s+'"!');
}w[s]=t.name;
}
for(var s in t.properties){if(y[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+y[s]+'" in property "'+s+'"!');
}y[s]=t.name;
}
for(var s in t.members){if(x[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+x[s]+'" in member "'+s+'"!');
}x[s]=t.name;
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
},$$registry:{},__dJ:null,__dK:function(){}}});
})();
(function(){var ei=';',eh='computed=this.',eg='=value;',ef='this.',ee="set",ed="setThemed",ec="setRuntime",eb="init",ea='if(this.',dY='delete this.',di='!==undefined)',dh='}',dg="resetThemed",df='else if(this.',de="string",dd="boolean",dc='return this.',db="reset",da="resetRuntime",cY='!==undefined){',ep="",eq="refresh",en='=true;',eo="this.",el=";",em='old=this.',ej="();",ek='else ',er='if(old===undefined)old=this.',es='old=computed=this.',dH="return this.",dG="get",dJ='(value);',dI="(a[",dL='if(old===computed)return value;',dK='if(old===undefined)old=null;',dN=' of an instance of ',dM=' is not (yet) ready!");',dF="]);",dE='!==inherit){',bP='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bQ='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bR='value !== null && value.nodeType === 9 && value.documentElement',bS='===value)return value;',bT='value !== null && value.$$type === "Mixin"',bU='return init;',bV='var init=this.',bW='value !== null && value.nodeType === 1 && value.attributes',bX="var parent = this.getLayoutParent();",bY="Error in property ",eG='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',eF='.validate.call(this, value);',eE='qx.core.Assert.assertInstance(value, Date, msg) || true',eD='else{',eK="if (!parent) return;",eJ=" in method ",eI='qx.core.Assert.assertInstance(value, Error, msg) || true',eH='=computed;',eM='Undefined value is not allowed!',eL='(backup);',cy="MSIE 6.0",cz='if(computed===inherit){',cw="inherit",cx='Is invalid!',cC='if(value===undefined)prop.error(this,2,"',cD='var computed, old=this.',cA='else if(computed===undefined)',cB="': ",cu=" of class ",cv='value !== null && value.nodeType !== undefined',ch='===undefined)return;',cg='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',cj="')){",ci='qx.core.Assert.assertPositiveInteger(value, msg) || true',cd='else this.',cc='value=this.',cf='","',ce='if(init==qx.core.Property.$$inherit)init=null;',cb='value !== null && value.$$type === "Interface"',ca='var inherit=prop.$$inherit;',cI="', qx.event.type.Data, [computed, old]",cJ="var value = parent.",cK="$$useinit_",cL='computed=undefined;delete this.',cE="(value);",cF='Requires exactly one argument!',cG='",value);',cH='computed=value;',cM="$$runtime_",cN=';}',cr="$$user_",cq='){',cp='qx.core.Assert.assertArray(value, msg) || true',co='if(computed===undefined||computed===inherit){',cn='qx.core.Assert.assertPositiveNumber(value, msg) || true',cm=".prototype",cl="Boolean",ck=")}",ct='(computed, old, "',cs='return value;',cO='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cP="if(reg.hasListener(this, '",cQ='Does not allow any arguments!',cR=')a[i].',cS="()",cT="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cU='.$$properties.',cV='value !== null && value.$$type === "Theme"',cW="var reg=qx.event.Registration;",cX="())",dm='return null;',dl='qx.core.Assert.assertObject(value, msg) || true',dk='");',dj='qx.core.Assert.assertString(value, msg) || true',dr='var pa=this.getLayoutParent();if(pa)computed=pa.',dq="if (value===undefined) value = parent.",dp='value !== null && value.$$type === "Class"',dn='qx.core.Assert.assertFunction(value, msg) || true',dt='!==undefined&&',ds='var computed, old;',dA='var backup=computed;',dB='}else{',dy="object",dz="$$init_",dw="$$theme_",dx='if(computed===undefined)computed=null;',du='qx.core.Assert.assertMap(value, msg) || true',dv='qx.core.Assert.assertNumber(value, msg) || true',dC='if((computed===undefined||computed===inherit)&&',dD="reg.fireEvent(this, '",dR='Null value is not allowed!',dQ='qx.core.Assert.assertInteger(value, msg) || true',dT="value",dS="rv:1.8.1",dV="shorthand",dU='qx.core.Assert.assertInstance(value, RegExp, msg) || true',dX='value !== null && value.type !== undefined',dW='value !== null && value.document',dP='throw new Error("Property ',dO="(!this.",ez='qx.core.Assert.assertBoolean(value, msg) || true',eA='if(a[i].',eB="toggle",eC="$$inherit_",ev='var prop=qx.core.Property;',ew=" with incoming value '",ex="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",ey='if(computed===undefined||computed==inherit)computed=null;',et="qx.core.Property",eu="is",bO='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(et,{statics:{__kp:{"Boolean":ez,"String":dj,"Number":dv,"Integer":dQ,"PositiveNumber":cn,"PositiveInteger":ci,"Error":eI,"RegExp":dU,"Object":dl,"Array":cp,"Map":du,"Function":dn,"Date":eE,"Node":cv,"Element":bW,"Document":bR,"Window":dW,"Event":dX,"Class":dp,"Mixin":bT,"Interface":cb,"Theme":cV,"Color":bP,"Decorator":cg,"Font":bQ},__kq:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:cw,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:de,dispose:dd,dereference:dd,inheritable:dd,nullable:dd,themeable:dd,refine:dd,init:null,apply:de,event:de,check:null,transform:de,deferredInit:dd,validate:null},$$allowedGroupKeys:{name:de,group:dy,mode:de,themeable:dd},$$inheritable:{},__kr:function(K){var L=this.__ks(K);

if(!L.length){var M=qx.lang.Function.empty;
}else{M=this.__kt(L);
}K.prototype.$$refreshInheritables=M;
},__ks:function(bv){var bx=[];

while(bv){var bw=bv.$$properties;

if(bw){for(var name in this.$$inheritable){if(bw[name]&&bw[name].inheritable){bx.push(name);
}}}bv=bv.superclass;
}return bx;
},__kt:function(eT){var eX=this.$$store.inherit;
var eW=this.$$store.init;
var eV=this.$$method.refresh;
var eU=[bX,eK];

for(var i=0,l=eT.length;i<l;i++){var name=eT[i];
eU.push(cJ,eX[name],el,dq,eW[name],el,eo,eV[name],cE);
}return new Function(eU.join(ep));
},refresh:function(bs){{};
bs.$$refreshInheritables();
},attachRefreshInheritables:function(eR){eR.prototype.$$refreshInheritables=function(){qx.core.Property.__kr(eR);
return this.$$refreshInheritables();
};
},attachMethods:function(I,name,J){J.group?this.__ku(I,J,name):this.__kv(I,J,name);
},__ku:function(T,U,name){var bc=qx.Bootstrap.firstUp(name);
var bb=T.prototype;
var bd=U.themeable===true;
{};
var be=[];
var X=[];

if(bd){var V=[];
var ba=[];
}var Y=cT;
be.push(Y);

if(bd){V.push(Y);
}
if(U.mode==dV){var W=ex;
be.push(W);

if(bd){V.push(W);
}}
for(var i=0,a=U.group,l=a.length;i<l;i++){{};
be.push(eo,this.$$method.set[a[i]],dI,i,dF);
X.push(eo,this.$$method.reset[a[i]],ej);

if(bd){{};
V.push(eo,this.$$method.setThemed[a[i]],dI,i,dF);
ba.push(eo,this.$$method.resetThemed[a[i]],ej);
}}this.$$method.set[name]=ee+bc;
bb[this.$$method.set[name]]=new Function(be.join(ep));
this.$$method.reset[name]=db+bc;
bb[this.$$method.reset[name]]=new Function(X.join(ep));

if(bd){this.$$method.setThemed[name]=ed+bc;
bb[this.$$method.setThemed[name]]=new Function(V.join(ep));
this.$$method.resetThemed[name]=dg+bc;
bb[this.$$method.resetThemed[name]]=new Function(ba.join(ep));
}},__kv:function(N,O,name){var Q=qx.Bootstrap.firstUp(name);
var S=N.prototype;
{};
{};
if(O.dereference===undefined&&typeof O.check===de){O.dereference=this.__kw(O.check);
}var R=this.$$method;
var P=this.$$store;
P.runtime[name]=cM+name;
P.user[name]=cr+name;
P.theme[name]=dw+name;
P.init[name]=dz+name;
P.inherit[name]=eC+name;
P.useinit[name]=cK+name;
R.get[name]=dG+Q;
S[R.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,N,name,dG);
};
R.set[name]=ee+Q;
S[R.set[name]]=function(bk){return qx.core.Property.executeOptimizedSetter(this,N,name,ee,arguments);
};
R.reset[name]=db+Q;
S[R.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,N,name,db);
};

if(O.inheritable||O.apply||O.event||O.deferredInit){R.init[name]=eb+Q;
S[R.init[name]]=function(bI){return qx.core.Property.executeOptimizedSetter(this,N,name,eb,arguments);
};
}
if(O.inheritable){R.refresh[name]=eq+Q;
S[R.refresh[name]]=function(bt){return qx.core.Property.executeOptimizedSetter(this,N,name,eq,arguments);
};
}R.setRuntime[name]=ec+Q;
S[R.setRuntime[name]]=function(bj){return qx.core.Property.executeOptimizedSetter(this,N,name,ec,arguments);
};
R.resetRuntime[name]=da+Q;
S[R.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,N,name,da);
};

if(O.themeable){R.setThemed[name]=ed+Q;
S[R.setThemed[name]]=function(e){return qx.core.Property.executeOptimizedSetter(this,N,name,ed,arguments);
};
R.resetThemed[name]=dg+Q;
S[R.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,N,name,dg);
};
}
if(O.check===cl){S[eB+Q]=new Function(dH+R.set[name]+dO+R.get[name]+cX);
S[eu+Q]=new Function(dH+R.get[name]+cS);
}},__kw:function(bu){return !!this.__kq[bu];
},__kx:function(bf){return this.__kq[bf]||qx.Bootstrap.classIsDefined(bf)||(qx.Interface&&qx.Interface.isDefined(bf));
},__ky:{0:bO,1:cF,2:eM,3:cQ,4:dR,5:cx},error:function(bl,bm,bn,bo,bp){var bq=bl.constructor.classname;
var br=bY+bn+cu+bq+eJ+this.$$method[bo][bn]+ew+bp+cB;
throw new Error(br+(this.__ky[bm]||"Unknown reason: "+bm));
},__kz:function(q,r,name,s,t,u){var v=this.$$method[s][name];
{r[v]=new Function(dT,t.join(ep));
};
{};
qx.Bootstrap.setDisplayName(r[v],q.classname+cm,v);
if(u===undefined){return q[v]();
}else{return q[v](u[0]);
}},executeOptimizedGetter:function(h,j,name,k){var n=j.$$properties[name];
var p=j.prototype;
var m=[];
var o=this.$$store;
m.push(ea,o.runtime[name],di);
m.push(dc,o.runtime[name],ei);

if(n.inheritable){m.push(df,o.inherit[name],di);
m.push(dc,o.inherit[name],ei);
m.push(ek);
}m.push(ea,o.user[name],di);
m.push(dc,o.user[name],ei);

if(n.themeable){m.push(df,o.theme[name],di);
m.push(dc,o.theme[name],ei);
}
if(n.deferredInit&&n.init===undefined){m.push(df,o.init[name],di);
m.push(dc,o.init[name],ei);
}m.push(ek);

if(n.init!==undefined){if(n.inheritable){m.push(bV,o.init[name],ei);

if(n.nullable){m.push(ce);
}else if(n.init!==undefined){m.push(dc,o.init[name],ei);
}else{m.push(cO,name,dN,j.classname,dM);
}m.push(bU);
}else{m.push(dc,o.init[name],ei);
}}else if(n.inheritable||n.nullable){m.push(dm);
}else{m.push(dP,name,dN,j.classname,dM);
}return this.__kz(h,p,name,k,m);
},executeOptimizedSetter:function(y,z,name,A,B){var G=z.$$properties[name];
var F=z.prototype;
var D=[];
var C=A===ee||A===ed||A===ec||(A===eb&&G.init===undefined);
var E=G.apply||G.event||G.inheritable;
var H=this.__kA(A,name);
this.__kB(D,G,name,A,C);

if(C){this.__kC(D,z,G,name);
}
if(E){this.__kD(D,C,H,A);
}
if(G.inheritable){D.push(ca);
}{};

if(!E){this.__kF(D,name,A,C);
}else{this.__kG(D,G,name,A,C);
}
if(G.inheritable){this.__kH(D,G,name,A);
}else if(E){this.__kI(D,G,name,A);
}
if(E){this.__kJ(D,G,name);
if(G.inheritable&&F._getChildren){this.__kK(D,name);
}}if(C){D.push(cs);
}return this.__kz(y,F,name,A,D,B);
},__kA:function(f,name){if(f===ec||f===da){var g=this.$$store.runtime[name];
}else if(f===ed||f===dg){g=this.$$store.theme[name];
}else if(f===eb){g=this.$$store.init[name];
}else{g=this.$$store.user[name];
}return g;
},__kB:function(eN,eO,name,eP,eQ){{if(!eO.nullable||eO.check||eO.inheritable){eN.push(ev);
}if(eP===ee){eN.push(cC,name,cf,eP,cG);
}};
},__kC:function(bg,bh,bi,name){if(bi.transform){bg.push(cc,bi.transform,dJ);
}if(bi.validate){if(typeof bi.validate===de){bg.push(ef,bi.validate,dJ);
}else if(bi.validate instanceof Function){bg.push(bh.classname,cU,name);
bg.push(eF);
}}},__kD:function(bJ,bK,bL,bM){var bN=(bM===db||bM===dg||bM===da);

if(bK){bJ.push(ea,bL,bS);
}else if(bN){bJ.push(ea,bL,ch);
}},__kE:undefined,__kF:function(eY,name,fa,fb){if(fa===ec){eY.push(ef,this.$$store.runtime[name],eg);
}else if(fa===da){eY.push(ea,this.$$store.runtime[name],di);
eY.push(dY,this.$$store.runtime[name],ei);
}else if(fa===ee){eY.push(ef,this.$$store.user[name],eg);
}else if(fa===db){eY.push(ea,this.$$store.user[name],di);
eY.push(dY,this.$$store.user[name],ei);
}else if(fa===ed){eY.push(ef,this.$$store.theme[name],eg);
}else if(fa===dg){eY.push(ea,this.$$store.theme[name],di);
eY.push(dY,this.$$store.theme[name],ei);
}else if(fa===eb&&fb){eY.push(ef,this.$$store.init[name],eg);
}},__kG:function(bB,bC,name,bD,bE){if(bC.inheritable){bB.push(cD,this.$$store.inherit[name],ei);
}else{bB.push(ds);
}bB.push(ea,this.$$store.runtime[name],cY);

if(bD===ec){bB.push(eh,this.$$store.runtime[name],eg);
}else if(bD===da){bB.push(dY,this.$$store.runtime[name],ei);
bB.push(ea,this.$$store.user[name],di);
bB.push(eh,this.$$store.user[name],ei);
bB.push(df,this.$$store.theme[name],di);
bB.push(eh,this.$$store.theme[name],ei);
bB.push(df,this.$$store.init[name],cY);
bB.push(eh,this.$$store.init[name],ei);
bB.push(ef,this.$$store.useinit[name],en);
bB.push(dh);
}else{bB.push(es,this.$$store.runtime[name],ei);
if(bD===ee){bB.push(ef,this.$$store.user[name],eg);
}else if(bD===db){bB.push(dY,this.$$store.user[name],ei);
}else if(bD===ed){bB.push(ef,this.$$store.theme[name],eg);
}else if(bD===dg){bB.push(dY,this.$$store.theme[name],ei);
}else if(bD===eb&&bE){bB.push(ef,this.$$store.init[name],eg);
}}bB.push(dh);
bB.push(df,this.$$store.user[name],cY);

if(bD===ee){if(!bC.inheritable){bB.push(em,this.$$store.user[name],ei);
}bB.push(eh,this.$$store.user[name],eg);
}else if(bD===db){if(!bC.inheritable){bB.push(em,this.$$store.user[name],ei);
}bB.push(dY,this.$$store.user[name],ei);
bB.push(ea,this.$$store.runtime[name],di);
bB.push(eh,this.$$store.runtime[name],ei);
bB.push(ea,this.$$store.theme[name],di);
bB.push(eh,this.$$store.theme[name],ei);
bB.push(df,this.$$store.init[name],cY);
bB.push(eh,this.$$store.init[name],ei);
bB.push(ef,this.$$store.useinit[name],en);
bB.push(dh);
}else{if(bD===ec){bB.push(eh,this.$$store.runtime[name],eg);
}else if(bC.inheritable){bB.push(eh,this.$$store.user[name],ei);
}else{bB.push(es,this.$$store.user[name],ei);
}if(bD===ed){bB.push(ef,this.$$store.theme[name],eg);
}else if(bD===dg){bB.push(dY,this.$$store.theme[name],ei);
}else if(bD===eb&&bE){bB.push(ef,this.$$store.init[name],eg);
}}bB.push(dh);
if(bC.themeable){bB.push(df,this.$$store.theme[name],cY);

if(!bC.inheritable){bB.push(em,this.$$store.theme[name],ei);
}
if(bD===ec){bB.push(eh,this.$$store.runtime[name],eg);
}else if(bD===ee){bB.push(eh,this.$$store.user[name],eg);
}else if(bD===ed){bB.push(eh,this.$$store.theme[name],eg);
}else if(bD===dg){bB.push(dY,this.$$store.theme[name],ei);
bB.push(ea,this.$$store.init[name],cY);
bB.push(eh,this.$$store.init[name],ei);
bB.push(ef,this.$$store.useinit[name],en);
bB.push(dh);
}else if(bD===eb){if(bE){bB.push(ef,this.$$store.init[name],eg);
}bB.push(eh,this.$$store.theme[name],ei);
}else if(bD===eq){bB.push(eh,this.$$store.theme[name],ei);
}bB.push(dh);
}bB.push(df,this.$$store.useinit[name],cq);

if(!bC.inheritable){bB.push(em,this.$$store.init[name],ei);
}
if(bD===eb){if(bE){bB.push(eh,this.$$store.init[name],eg);
}else{bB.push(eh,this.$$store.init[name],ei);
}}else if(bD===ee||bD===ec||bD===ed||bD===eq){bB.push(dY,this.$$store.useinit[name],ei);

if(bD===ec){bB.push(eh,this.$$store.runtime[name],eg);
}else if(bD===ee){bB.push(eh,this.$$store.user[name],eg);
}else if(bD===ed){bB.push(eh,this.$$store.theme[name],eg);
}else if(bD===eq){bB.push(eh,this.$$store.init[name],ei);
}}bB.push(dh);
if(bD===ee||bD===ec||bD===ed||bD===eb){bB.push(eD);

if(bD===ec){bB.push(eh,this.$$store.runtime[name],eg);
}else if(bD===ee){bB.push(eh,this.$$store.user[name],eg);
}else if(bD===ed){bB.push(eh,this.$$store.theme[name],eg);
}else if(bD===eb){if(bE){bB.push(eh,this.$$store.init[name],eg);
}else{bB.push(eh,this.$$store.init[name],ei);
}bB.push(ef,this.$$store.useinit[name],en);
}bB.push(dh);
}},__kH:function(by,bz,name,bA){by.push(co);

if(bA===eq){by.push(cH);
}else{by.push(dr,this.$$store.inherit[name],ei);
}by.push(dC);
by.push(ef,this.$$store.init[name],dt);
by.push(ef,this.$$store.init[name],dE);
by.push(eh,this.$$store.init[name],ei);
by.push(ef,this.$$store.useinit[name],en);
by.push(dB);
by.push(dY,this.$$store.useinit[name],cN);
by.push(dh);
by.push(dL);
by.push(cz);
by.push(cL,this.$$store.inherit[name],ei);
by.push(dh);
by.push(cA);
by.push(dY,this.$$store.inherit[name],ei);
by.push(cd,this.$$store.inherit[name],eH);
by.push(dA);
if(bz.init!==undefined&&bA!==eb){by.push(er,this.$$store.init[name],el);
}else{by.push(dK);
}by.push(ey);
},__kI:function(b,c,name,d){if(d!==ee&&d!==ec&&d!==ed){b.push(dx);
}b.push(dL);
if(c.init!==undefined&&d!==eb){b.push(er,this.$$store.init[name],el);
}else{b.push(dK);
}},__kJ:function(w,x,name){if(x.apply){w.push(ef,x.apply,ct,name,dk);
}if(x.event){w.push(cW,cP,x.event,cj,dD,x.event,cI,ck);
}},__kK:function(eS,name){eS.push(eG);
eS.push(eA,this.$$method.refresh[name],cR,this.$$method.refresh[name],eL);
eS.push(dh);
}},defer:function(bF){var bH=navigator.userAgent.indexOf(cy)!=-1;
var bG=navigator.userAgent.indexOf(dS)!=-1;
if(bH||bG){bF.__kw=bF.__kx;
}}});
})();
(function(){var C="[Class ",B="]",A="$$init_",z="toString",y="constructor",x="singleton",w=".prototype",v="extend",u="Class",t="destruct",q="qx.Class",s=".",r="static",p="qx.event.type.Data";
qx.Bootstrap.define(q,{statics:{define:function(name,ba){if(!ba){var ba={};
}if(ba.include&&!(ba.include instanceof Array)){ba.include=[ba.include];
}if(ba.implement&&!(ba.implement instanceof Array)){ba.implement=[ba.implement];
}var bb=false;

if(!ba.hasOwnProperty(v)&&!ba.type){ba.type=r;
bb=true;
}{};
var bc=this.__bz(name,ba.type,ba.extend,ba.statics,ba.construct,ba.destruct,ba.include);
if(ba.extend){if(ba.properties){this.__bB(bc,ba.properties,true);
}if(ba.members){this.__bD(bc,ba.members,true,true,false);
}if(ba.events){this.__bA(bc,ba.events,true);
}if(ba.include){for(var i=0,l=ba.include.length;i<l;i++){this.__bH(bc,ba.include[i],false);
}}}if(ba.settings){for(var bd in ba.settings){qx.core.Setting.define(bd,ba.settings[bd]);
}}if(ba.variants){for(var bd in ba.variants){qx.core.Variant.define(bd,ba.variants[bd].allowedValues,ba.variants[bd].defaultValue);
}}if(ba.implement){for(var i=0,l=ba.implement.length;i<l;i++){this.__bF(bc,ba.implement[i]);
}}{};
if(ba.defer){ba.defer.self=bc;
ba.defer(bc,bc.prototype,{add:function(name,bA){var bB={};
bB[name]=bA;
qx.Class.__bB(bc,bB,true);
}});
}return bc;
},undefine:function(name){delete this.$$registry[name];
var K=name.split(s);
var M=[window];

for(var i=0;i<K.length;i++){M.push(M[i][K[i]]);
}for(var i=M.length-1;i>=1;i--){var L=M[i];
var parent=M[i-1];

if(qx.Bootstrap.isFunction(L)||qx.Bootstrap.objectGetLength(L)===0){delete parent[K[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bU,bV){{};
qx.Class.__bH(bU,bV,false);
},patch:function(bD,bE){{};
qx.Class.__bH(bD,bE,true);
},isSubClassOf:function(N,O){if(!N){return false;
}
if(N==O){return true;
}
if(N.prototype instanceof O){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(I){var J=[];

while(I){if(I.$$properties){J.push.apply(J,qx.Bootstrap.getKeys(I.$$properties));
}I=I.superclass;
}return J;
},getByProperty:function(P,name){while(P){if(P.$$properties&&P.$$properties[name]){return P;
}P=P.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(b,c){return b.$$includes&&b.$$includes.indexOf(c)!==-1;
},getByMixin:function(bN,bO){var bP,i,l;

while(bN){if(bN.$$includes){bP=bN.$$flatIncludes;

for(i=0,l=bP.length;i<l;i++){if(bP[i]===bO){return bN;
}}}bN=bN.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bW,bX){return !!this.getByMixin(bW,bX);
},hasOwnInterface:function(bS,bT){return bS.$$implements&&bS.$$implements.indexOf(bT)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bQ){var bR=[];

while(bQ){if(bQ.$$implements){bR.push.apply(bR,bQ.$$flatImplements);
}bQ=bQ.superclass;
}return bR;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(ch,ci){var cj=ch.constructor;

if(this.hasInterface(cj,ci)){return true;
}
try{qx.Interface.assertObject(ch,ci);
return true;
}catch(Q){}
try{qx.Interface.assert(cj,ci,false);
return true;
}catch(bC){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return C+this.classname+B;
},$$registry:qx.Bootstrap.$$registry,__bv:null,__bw:null,__bx:function(){},__by:function(){},__bz:function(name,bk,bl,bm,bn,bo,bp){var bs;

if(!bl&&true){bs=bm||{};
qx.Bootstrap.setDisplayNames(bs,name);
}else{var bs={};

if(bl){if(!bn){bn=this.__bI();
}
if(this.__bK(bl,bp)){bs=this.__bL(bn,name,bk);
}else{bs=bn;
}if(bk===x){bs.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bn,name,y);
}if(bm){qx.Bootstrap.setDisplayNames(bm,name);
var bt;

for(var i=0,a=qx.Bootstrap.getKeys(bm),l=a.length;i<l;i++){bt=a[i];
var bq=bm[bt];
{bs[bt]=bq;
};
}}}var br=qx.Bootstrap.createNamespace(name,bs);
bs.name=bs.classname=name;
bs.basename=br;
bs.$$type=u;

if(bk){bs.$$classtype=bk;
}if(!bs.hasOwnProperty(z)){bs.toString=this.genericToString;
}
if(bl){qx.Bootstrap.extendClass(bs,bn,bl,name,br);
if(bo){{};
bs.$$destructor=bo;
qx.Bootstrap.setDisplayName(bo,name,t);
}}this.$$registry[name]=bs;
return bs;
},__bA:function(bJ,bK,bL){var bM,bM;
{};

if(bJ.$$events){for(var bM in bK){bJ.$$events[bM]=bK[bM];
}}else{bJ.$$events=bK;
}},__bB:function(D,E,F){var G;

if(F===undefined){F=false;
}var H=D.prototype;

for(var name in E){G=E[name];
{};
G.name=name;
if(!G.refine){if(D.$$properties===undefined){D.$$properties={};
}D.$$properties[name]=G;
}if(G.init!==undefined){D.prototype[A+name]=G.init;
}if(G.event!==undefined){var event={};
event[G.event]=p;
this.__bA(D,event,F);
}if(G.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!H.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(D);
}}
if(!G.refine){qx.core.Property.attachMethods(D,name,G);
}}},__bC:null,__bD:function(R,S,T,U,V){var W=R.prototype;
var Y,X;
qx.Bootstrap.setDisplayNames(S,R.classname+w);

for(var i=0,a=qx.Bootstrap.getKeys(S),l=a.length;i<l;i++){Y=a[i];
X=S[Y];
{};
if(U!==false&&X instanceof Function&&X.$$type==null){if(V==true){X=this.__bE(X,W[Y]);
}else{if(W[Y]){X.base=W[Y];
}X.self=R;
}{};
}W[Y]=X;
}},__bE:function(bY,ca){if(ca){return function(){var bf=bY.base;
bY.base=ca;
var be=bY.apply(this,arguments);
bY.base=bf;
return be;
};
}else{return bY;
}},__bF:function(cb,cc){{};
var cd=qx.Interface.flatten([cc]);

if(cb.$$implements){cb.$$implements.push(cc);
cb.$$flatImplements.push.apply(cb.$$flatImplements,cd);
}else{cb.$$implements=[cc];
cb.$$flatImplements=cd;
}},__bG:function(h){var name=h.classname;
var j=this.__bL(h,name,h.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(h),l=a.length;i<l;i++){k=a[i];
j[k]=h[k];
}j.prototype=h.prototype;
var n=h.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(n),l=a.length;i<l;i++){k=a[i];
var o=n[k];
if(o&&o.self==h){o.self=j;
}}for(var k in this.$$registry){var m=this.$$registry[k];

if(!m){continue;
}
if(m.base==h){m.base=j;
}
if(m.superclass==h){m.superclass=j;
}
if(m.$$original){if(m.$$original.base==h){m.$$original.base=j;
}
if(m.$$original.superclass==h){m.$$original.superclass=j;
}}}qx.Bootstrap.createNamespace(name,j);
this.$$registry[name]=j;
return j;
},__bH:function(bu,bv,bw){{};

if(this.hasMixin(bu,bv)){return;
}var bz=bu.$$original;

if(bv.$$constructor&&!bz){bu=this.__bG(bu);
}var by=qx.Mixin.flatten([bv]);
var bx;

for(var i=0,l=by.length;i<l;i++){bx=by[i];
if(bx.$$events){this.__bA(bu,bx.$$events,bw);
}if(bx.$$properties){this.__bB(bu,bx.$$properties,bw);
}if(bx.$$members){this.__bD(bu,bx.$$members,bw,bw,bw);
}}if(bu.$$includes){bu.$$includes.push(bv);
bu.$$flatIncludes.push.apply(bu.$$flatIncludes,by);
}else{bu.$$includes=[bv];
bu.$$flatIncludes=by;
}},__bI:function(){function g(){g.base.apply(this,arguments);
}return g;
},__bJ:function(){return function(){};
},__bK:function(bF,bG){{};
if(bF&&bF.$$includes){var bH=bF.$$flatIncludes;

for(var i=0,l=bH.length;i<l;i++){if(bH[i].$$constructor){return true;
}}}if(bG){var bI=qx.Mixin.flatten(bG);

for(var i=0,l=bI.length;i<l;i++){if(bI[i].$$constructor){return true;
}}}return false;
},__bL:function(bg,name,bh){var bi;
var bj=function(){var f=bj;
{};
var e=f.$$original.apply(this,arguments);
if(f.$$includes){var d=f.$$flatIncludes;

for(var i=0,l=d.length;i<l;i++){if(d[i].$$constructor){d[i].$$constructor.apply(this,arguments);
}}}{};
return e;
};
{};
bj.$$original=bg;
bg.wrapper=bj;
return bj;
}},defer:function(){var ce,cf,cg;
{};
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__dL:function(){var u=d;
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
}},defer:function(t){t.__dL();
}});
})();
(function(){var y="on",x="off",w="|",u="default",t="object",s="&",r="qx.aspects",q="$",p="qx.allowUrlVariants",o="qx.debug",g="qx.client",n="qx.dynlocale",k="webkit",f="qxvariant",e="opera",j=":",h="qx.core.Variant",m="mshtml",d="gecko";
qx.Bootstrap.define(h,{statics:{__jH:{},__jI:{},compilerIsSet:function(){return true;
},define:function(J,K,L){{};

if(!this.__jH[J]){this.__jH[J]={};
}else{}this.__jH[J].allowedValues=K;
this.__jH[J].defaultValue=L;
},get:function(H){var I=this.__jH[H];
{};

if(I.value!==undefined){return I.value;
}return I.defaultValue;
},__jJ:function(){if(window.qxvariants){for(var F in qxvariants){{};

if(!this.__jH[F]){this.__jH[F]={};
}this.__jH[F].value=qxvariants[F];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(E){}this.__jK(this.__jH);
}},__jK:function(){if(qx.core.Setting.get(p)!=true){return;
}var a=document.location.search.slice(1).split(s);

for(var i=0;i<a.length;i++){var b=a[i].split(j);

if(b.length!=3||b[0]!=f){continue;
}var c=b[1];

if(!this.__jH[c]){this.__jH[c]={};
}this.__jH[c].value=decodeURIComponent(b[2]);
}},select:function(z,A){{};

for(var B in A){if(this.isSet(z,B)){return A[B];
}}
if(A[u]!==undefined){return A[u];
}{};
},isSet:function(M,N){var O=M+q+N;

if(this.__jI[O]!==undefined){return this.__jI[O];
}var Q=false;
if(N.indexOf(w)<0){Q=this.get(M)===N;
}else{var P=N.split(w);

for(var i=0,l=P.length;i<l;i++){if(this.get(M)===P[i]){Q=true;
break;
}}}this.__jI[O]=Q;
return Q;
},__jL:function(v){return typeof v===t&&v!==null&&v instanceof Array;
},__jM:function(v){return typeof v===t&&v!==null&&!(v instanceof Array);
},__jN:function(C,D){for(var i=0,l=C.length;i<l;i++){if(C[i]==D){return true;
}}return false;
}},defer:function(G){G.define(g,[d,m,e,k],qx.bom.client.Engine.NAME);
G.define(o,[y,x],y);
G.define(r,[y,x],x);
G.define(n,[y,x],y);
G.__jJ();
}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(j,k,l){j.attachEvent(h+k,l);
},"default":function(s,t,u){s.addEventListener(t,u,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(v,w,x){try{v.detachEvent(h+w,x);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(m,n,o){m.removeEventListener(n,o,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(i,{"mshtml":function(e){if(e.type===b){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(i,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(F){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(y){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(p,q){if(document.createEventObject){var r=document.createEventObject();
return p.fireEvent(h+q,r);
}else{var r=document.createEvent(a);
r.initEvent(q,true,true);
return !p.dispatchEvent(r);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(z,A){return z.hasOwnProperty(h+A);
},"default":function(B,C){var D=h+C;
var E=(D in B);

if(!E){E=typeof B[D]==g;

if(!E&&B.setAttribute){B.setAttribute(D,c);
E=typeof B[D]==g;
B.removeAttribute(D);
}}return E;
}})}});
})();
(function(){var q="|bubble",p="|capture",o="|",n="",m="_",k="unload",j="__eG",h="UNKNOWN_",g="c",f="DOM_",c="WIN_",e="capture",d="qx.event.Manager",b="__eF",a="QX_";
qx.Class.define(d,{extend:Object,construct:function(ba,bb){this.__eB=ba;
this.__eC=qx.core.ObjectRegistry.toHashCode(ba);
this.__eD=bb;
if(ba.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(ba,k,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(ba,k,arguments.callee);
self.dispose();
}));
}this.__eE={};
this.__eF={};
this.__eG={};
this.__eH={};
},statics:{__eI:0,getNextUniqueId:function(){return (this.__eI++)+n;
}},members:{__eD:null,__eE:null,__eG:null,__eJ:null,__eF:null,__eH:null,__eB:null,__eC:null,getWindow:function(){return this.__eB;
},getWindowId:function(){return this.__eC;
},getHandler:function(X){var Y=this.__eF[X.classname];

if(Y){return Y;
}return this.__eF[X.classname]=new X(this);
},getDispatcher:function(bM){var bN=this.__eG[bM.classname];

if(bN){return bN;
}return this.__eG[bM.classname]=new bM(this,this.__eD);
},getListeners:function(v,w,x){var y=v.$$hash||qx.core.ObjectRegistry.toHashCode(v);
var A=this.__eE[y];

if(!A){return null;
}var B=w+(x?p:q);
var z=A[B];
return z?z.concat():null;
},serializeListeners:function(ca){var ch=ca.$$hash||qx.core.ObjectRegistry.toHashCode(ca);
var cj=this.__eE[ch];
var cf=[];

if(cj){var cd,ci,cb,ce,cg;

for(var cc in cj){cd=cc.indexOf(o);
ci=cc.substring(0,cd);
cb=cc.charAt(cd+1)==g;
ce=cj[cc];

for(var i=0,l=ce.length;i<l;i++){cg=ce[i];
cf.push({self:cg.context,handler:cg.handler,type:ci,capture:cb});
}}}return cf;
},toggleAttachedEvents:function(cx,cy){var cD=cx.$$hash||qx.core.ObjectRegistry.toHashCode(cx);
var cF=this.__eE[cD];

if(cF){var cA,cE,cz,cB;

for(var cC in cF){cA=cC.indexOf(o);
cE=cC.substring(0,cA);
cz=cC.charCodeAt(cA+1)===99;
cB=cF[cC];

if(cy){this.__eK(cx,cE,cz);
}else{this.__eL(cx,cE,cz);
}}}},hasListener:function(bF,bG,bH){{};
var bI=bF.$$hash||qx.core.ObjectRegistry.toHashCode(bF);
var bK=this.__eE[bI];

if(!bK){return false;
}var bL=bG+(bH?p:q);
var bJ=bK[bL];
return bJ&&bJ.length>0;
},importListeners:function(co,cp){{};
var cv=co.$$hash||qx.core.ObjectRegistry.toHashCode(co);
var cw=this.__eE[cv]={};
var cs=qx.event.Manager;

for(var cq in cp){var ct=cp[cq];
var cu=ct.type+(ct.capture?p:q);
var cr=cw[cu];

if(!cr){cr=cw[cu]=[];
this.__eK(co,ct.type,ct.capture);
}cr.push({handler:ct.listener,context:ct.self,unique:ct.unique||(cs.__eI++)+n});
}},addListener:function(bO,bP,bQ,self,bR){var bV;
{};
var bW=bO.$$hash||qx.core.ObjectRegistry.toHashCode(bO);
var bY=this.__eE[bW];

if(!bY){bY=this.__eE[bW]={};
}var bU=bP+(bR?p:q);
var bT=bY[bU];

if(!bT){bT=bY[bU]=[];
}if(bT.length===0){this.__eK(bO,bP,bR);
}var bX=(qx.event.Manager.__eI++)+n;
var bS={handler:bQ,context:self,unique:bX};
bT.push(bS);
return bU+o+bX;
},findHandler:function(K,L){var V=false,O=false,W=false;
var U;

if(K.nodeType===1){V=true;
U=f+K.tagName.toLowerCase()+m+L;
}else if(K==this.__eB){O=true;
U=c+L;
}else if(K.classname){W=true;
U=a+K.classname+m+L;
}else{U=h+K+m+L;
}var Q=this.__eH;

if(Q[U]){return Q[U];
}var T=this.__eD.getHandlers();
var P=qx.event.IEventHandler;
var R,S,N,M;

for(var i=0,l=T.length;i<l;i++){R=T[i];
N=R.SUPPORTED_TYPES;

if(N&&!N[L]){continue;
}M=R.TARGET_CHECK;

if(M){if(!V&&M===P.TARGET_DOMNODE){continue;
}else if(!O&&M===P.TARGET_WINDOW){continue;
}else if(!W&&M===P.TARGET_OBJECT){continue;
}}S=this.getHandler(T[i]);

if(R.IGNORE_CAN_HANDLE||S.canHandleEvent(K,L)){Q[U]=S;
return S;
}}return null;
},__eK:function(r,s,t){var u=this.findHandler(r,s);

if(u){u.registerEvent(r,s,t);
return;
}{};
},removeListener:function(bv,bw,bx,self,by){var bC;
{};
var bD=bv.$$hash||qx.core.ObjectRegistry.toHashCode(bv);
var bE=this.__eE[bD];

if(!bE){return false;
}var bz=bw+(by?p:q);
var bA=bE[bz];

if(!bA){return false;
}var bB;

for(var i=0,l=bA.length;i<l;i++){bB=bA[i];

if(bB.handler===bx&&bB.context===self){qx.lang.Array.removeAt(bA,i);

if(bA.length==0){this.__eL(bv,bw,by);
}return true;
}}return false;
},removeListenerById:function(bj,bk){var bq;
{};
var bo=bk.split(o);
var bt=bo[0];
var bl=bo[1].charCodeAt(0)==99;
var bs=bo[2];
var br=bj.$$hash||qx.core.ObjectRegistry.toHashCode(bj);
var bu=this.__eE[br];

if(!bu){return false;
}var bp=bt+(bl?p:q);
var bn=bu[bp];

if(!bn){return false;
}var bm;

for(var i=0,l=bn.length;i<l;i++){bm=bn[i];

if(bm.unique===bs){qx.lang.Array.removeAt(bn,i);

if(bn.length==0){this.__eL(bj,bt,bl);
}return true;
}}return false;
},removeAllListeners:function(bc){var bg=bc.$$hash||qx.core.ObjectRegistry.toHashCode(bc);
var bi=this.__eE[bg];

if(!bi){return false;
}var be,bh,bd;

for(var bf in bi){if(bi[bf].length>0){be=bf.split(o);
bh=be[0];
bd=be[1]===e;
this.__eL(bc,bh,bd);
}}delete this.__eE[bg];
return true;
},deleteAllListeners:function(C){delete this.__eE[C];
},__eL:function(ck,cl,cm){var cn=this.findHandler(ck,cl);

if(cn){cn.unregisterEvent(ck,cl,cm);
return;
}{};
},dispatchEvent:function(D,event){var I;
{};
var J=event.getType();

if(!event.getBubbles()&&!this.hasListener(D,J)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(D);
}var H=this.__eD.getDispatchers();
var G;
var F=false;

for(var i=0,l=H.length;i<l;i++){G=this.getDispatcher(H[i]);
if(G.canDispatchEvent(D,event,J)){G.dispatchEvent(D,event,J);
F=true;
break;
}}
if(!F){{};
return true;
}var E=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !E;
},dispose:function(){this.__eD.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,b);
qx.util.DisposeUtil.disposeMap(this,j);
this.__eE=this.__eB=this.__eJ=null;
this.__eD=this.__eH=null;
}}});
})();
(function(){var d="qx.dom.Node",c="qx.client",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(q){return q.nodeType===
this.DOCUMENT?q:
q.ownerDocument||q.document;
},getWindow:qx.core.Variant.select(c,{"mshtml":function(j){if(j.nodeType==null){return j;
}if(j.nodeType!==this.DOCUMENT){j=j.ownerDocument;
}return j.parentWindow;
},"default":function(r){if(r.nodeType==null){return r;
}if(r.nodeType!==this.DOCUMENT){r=r.ownerDocument;
}return r.defaultView;
}}),getDocumentElement:function(k){return this.getDocument(k).documentElement;
},getBodyElement:function(e){return this.getDocument(e).body;
},isNode:function(l){return !!(l&&l.nodeType!=null);
},isElement:function(t){return !!(t&&t.nodeType===this.ELEMENT);
},isDocument:function(p){return !!(p&&p.nodeType===this.DOCUMENT);
},isText:function(f){return !!(f&&f.nodeType===this.TEXT);
},isWindow:function(m){return !!(m&&m.history&&m.location&&m.document);
},isNodeName:function(n,o){if(!o||!n||!n.nodeName){return false;
}return o.toLowerCase()==qx.dom.Node.getName(n);
},getName:function(s){if(!s||!s.nodeName){return null;
}return s.nodeName.toLowerCase();
},getText:function(g){if(!g||!g.nodeType){return null;
}
switch(g.nodeType){case 1:var i,a=[],h=g.childNodes,length=h.length;

for(i=0;i<length;i++){a[i]=this.getText(h[i]);
}return a.join(b);
case 2:return g.nodeValue;
break;
case 3:return g.nodeValue;
break;
}return null;
}}});
})();
(function(){var L="mshtml",K="qx.client",J="[object Array]",I="qx.lang.Array",H="qx",G="number",F="string";
qx.Class.define(I,{statics:{toArray:function(B,C){return this.cast(B,Array,C);
},cast:function(t,u,v){if(t.constructor===u){return t;
}
if(qx.Class.hasInterface(t,qx.data.IListData)){var t=t.toArray();
}var w=new u;
if(qx.core.Variant.isSet(K,L)){if(t.item){for(var i=v||0,l=t.length;i<l;i++){w.push(t[i]);
}return w;
}}if(Object.prototype.toString.call(t)===J&&v==null){w.push.apply(w,t);
}else{w.push.apply(w,Array.prototype.slice.call(t,v||0));
}return w;
},fromArguments:function(bc,bd){return Array.prototype.slice.call(bc,bd||0);
},fromCollection:function(r){if(qx.core.Variant.isSet(K,L)){if(r.item){var s=[];

for(var i=0,l=r.length;i<l;i++){s[i]=r[i];
}return s;
}}return Array.prototype.slice.call(r,0);
},fromShortHand:function(U){var W=U.length;
var V=qx.lang.Array.clone(U);
switch(W){case 1:V[1]=V[2]=V[3]=V[0];
break;
case 2:V[2]=V[0];
case 3:V[3]=V[1];
}return V;
},clone:function(e){return e.concat();
},insertAt:function(P,Q,i){P.splice(i,0,Q);
return P;
},insertBefore:function(X,Y,ba){var i=X.indexOf(ba);

if(i==-1){X.push(Y);
}else{X.splice(i,0,Y);
}return X;
},insertAfter:function(o,p,q){var i=o.indexOf(q);

if(i==-1||i==(o.length-1)){o.push(p);
}else{o.splice(i+1,0,p);
}return o;
},removeAt:function(bb,i){return bb.splice(i,1)[0];
},removeAll:function(R){R.length=0;
return this;
},append:function(a,b){{};
Array.prototype.push.apply(a,b);
return a;
},exclude:function(f,g){{};

for(var i=0,j=g.length,h;i<j;i++){h=f.indexOf(g[i]);

if(h!=-1){f.splice(h,1);
}}return f;
},remove:function(c,d){var i=c.indexOf(d);

if(i!=-1){c.splice(i,1);
return d;
}},contains:function(S,T){return S.indexOf(T)!==-1;
},equals:function(M,N){var length=M.length;

if(length!==N.length){return false;
}
for(var i=0;i<length;i++){if(M[i]!==N[i]){return false;
}}return true;
},sum:function(D){var E=0;

for(var i=0,l=D.length;i<l;i++){E+=D[i];
}return E;
},max:function(k){{};
var i,n=k.length,m=k[0];

for(i=1;i<n;i++){if(k[i]>m){m=k[i];
}}return m===undefined?null:m;
},min:function(y){{};
var i,A=y.length,z=y[0];

for(i=1;i<A;i++){if(y[i]<z){z=y[i];
}}return z===undefined?null:z;
},unique:function(be){var bo=[],bg={},bj={},bl={};
var bk,bf=0;
var bp=H+qx.lang.Date.now();
var bh=false,bn=false,bq=false;
for(var i=0,bm=be.length;i<bm;i++){bk=be[i];
if(bk===null){if(!bh){bh=true;
bo.push(bk);
}}else if(bk===undefined){}else if(bk===false){if(!bn){bn=true;
bo.push(bk);
}}else if(bk===true){if(!bq){bq=true;
bo.push(bk);
}}else if(typeof bk===F){if(!bg[bk]){bg[bk]=1;
bo.push(bk);
}}else if(typeof bk===G){if(!bj[bk]){bj[bk]=1;
bo.push(bk);
}}else{bi=bk[bp];

if(bi==null){bi=bk[bp]=bf++;
}
if(!bl[bi]){bl[bi]=bk;
bo.push(bk);
}}}for(var bi in bl){try{delete bl[bi][bp];
}catch(O){try{bl[bi][bp]=null;
}catch(x){throw new Error("Cannot clean-up map entry doneObjects["+bi+"]["+bp+"]");
}}}return bo;
}}});
})();
(function(){var z="()",y=".",x=".prototype.",w='anonymous()',v="qx.lang.Function",u=".constructor()";
qx.Class.define(v,{statics:{getCaller:function(B){return B.caller?B.caller.callee:B.callee.caller;
},getName:function(m){if(m.displayName){return m.displayName;
}
if(m.$$original||m.wrapper||m.classname){return m.classname+u;
}
if(m.$$mixin){for(var o in m.$$mixin.$$members){if(m.$$mixin.$$members[o]==m){return m.$$mixin.name+x+o+z;
}}for(var o in m.$$mixin){if(m.$$mixin[o]==m){return m.$$mixin.name+y+o+z;
}}}
if(m.self){var p=m.self.constructor;

if(p){for(var o in p.prototype){if(p.prototype[o]==m){return p.classname+x+o+z;
}}for(var o in p){if(p[o]==m){return p.classname+y+o+z;
}}}}var n=m.toString().match(/function\s*(\w*)\s*\(.*/);

if(n&&n.length>=1&&n[1]){return n[1]+z;
}return w;
},globalEval:function(A){if(window.execScript){return window.execScript(A);
}else{return eval.call(window,A);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(j,k){{};
if(!k){return j;
}if(!(k.self||k.args||k.delay!=null||k.periodical!=null||k.attempt)){return j;
}return function(event){{};
var G=qx.lang.Array.fromArguments(arguments);
if(k.args){G=k.args.concat(G);
}
if(k.delay||k.periodical){var F=qx.event.GlobalError.observeMethod(function(){return j.apply(k.self||this,G);
});

if(k.delay){return window.setTimeout(F,k.delay);
}
if(k.periodical){return window.setInterval(F,k.periodical);
}}else if(k.attempt){var H=false;

try{H=j.apply(k.self||this,G);
}catch(q){}return H;
}else{return j.apply(k.self||this,G);
}};
},bind:function(c,self,d){return this.create(c,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(a,b){return this.create(a,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(C,self,D){if(arguments.length<3){return function(event){return C.call(self||this,event||window.event);
};
}else{var E=qx.lang.Array.fromArguments(arguments,2);
return function(event){var l=[event||window.event];
l.push.apply(l,E);
C.apply(self||this,l);
};
}},attempt:function(h,self,i){return this.create(h,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(r,s,self,t){return this.create(r,{delay:s,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(e,f,self,g){return this.create(e,{periodical:f,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__eq:{},getManager:function(K){if(K==null){{};
K=window;
}else if(K.nodeType){K=qx.dom.Node.getWindow(K);
}else if(!qx.dom.Node.isWindow(K)){K=window;
}var M=K.$$hash||qx.core.ObjectRegistry.toHashCode(K);
var L=this.__eq[M];

if(!L){L=new qx.event.Manager(K,this);
this.__eq[M]=L;
}return L;
},removeManager:function(R){var S=R.getWindowId();
delete this.__eq[S];
},addListener:function(N,O,P,self,Q){return this.getManager(N).addListener(N,O,P,self,Q);
},removeListener:function(h,i,j,self,k){return this.getManager(h).removeListener(h,i,j,self,k);
},removeListenerById:function(G,H){return this.getManager(G).removeListenerById(G,H);
},removeAllListeners:function(I){return this.getManager(I).removeAllListeners(I);
},deleteAllListeners:function(p){var q=p.$$hash;

if(q){this.getManager(p).deleteAllListeners(q);
}},hasListener:function(d,e,f){return this.getManager(d).hasListener(d,e,f);
},serializeListeners:function(g){return this.getManager(g).serializeListeners(g);
},createEvent:function(l,m,n){{};
if(m==null){m=qx.event.type.Event;
}var o=qx.event.Pool.getInstance().getObject(m);
n?o.init.apply(o,n):o.init();
if(l){o.setType(l);
}return o;
},dispatchEvent:function(J,event){return this.getManager(J).dispatchEvent(J,event);
},fireEvent:function(x,y,z,A){var B;
{};
var C=this.createEvent(y,z||null,A);
return this.getManager(x).dispatchEvent(x,C);
},fireNonBubblingEvent:function(r,s,t,u){{};
var v=this.getManager(r);

if(!v.hasListener(r,s,false)){return true;
}var w=this.createEvent(s,t||null,u);
return v.dispatchEvent(r,w);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__er:[],addHandler:function(F){{};
this.__er.push(F);
this.__er.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__er;
},__es:[],addDispatcher:function(D,E){{};
this.__es.push(D);
this.__es.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__es;
}}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__gY:{},__ha:0,__hb:[],register:function(u){var x=this.__gY;

if(!x){return;
}var w=u.$$hash;

if(w==null){var v=this.__hb;

if(v.length>0){w=v.pop();
}else{w=(this.__ha++)+d;
}u.$$hash=w;
}{};
x[w]=u;
},unregister:function(n){var o=n.$$hash;

if(o==null){return;
}var p=this.__gY;

if(p&&p[o]){delete p[o];
this.__hb.push(o);
}try{delete n.$$hash;
}catch(k){if(n.removeAttribute){n.removeAttribute(e);
}}},toHashCode:function(y){{};
var A=y.$$hash;

if(A!=null){return A;
}var z=this.__hb;

if(z.length>0){A=z.pop();
}else{A=(this.__ha++)+d;
}return y.$$hash=A;
},clearHashCode:function(h){{};
var j=h.$$hash;

if(j!=null){this.__hb.push(j);
try{delete h.$$hash;
}catch(g){if(h.removeAttribute){h.removeAttribute(e);
}}}},fromHashCode:function(f){return this.__gY[f]||null;
},shutdown:function(){this.inShutDown=true;
var r=this.__gY;
var t=[];

for(var s in r){t.push(s);
}t.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var q,i=0,l=t.length;

while(true){try{for(;i<l;i++){s=t[i];
q=r[s];

if(q&&q.dispose){q.dispose();
}}}catch(m){qx.Bootstrap.error(this,"Could not dispose object "+q.toString()+": "+m);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__gY;
},getRegistry:function(){return this.__gY;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var q=":",p="qx.client",o="anonymous",n="...",m="qx.dev.StackTrace",l="",k="\n",j="/source/class/",h=".";
qx.Class.define(m,{statics:{getStackTrace:qx.core.Variant.select(p,{"gecko":function(){try{throw new Error();
}catch(X){var D=this.getStackTraceFromError(X);
qx.lang.Array.removeAt(D,0);
var B=this.getStackTraceFromCaller(arguments);
var z=B.length>D.length?B:D;

for(var i=0;i<Math.min(B.length,D.length);i++){var A=B[i];

if(A.indexOf(o)>=0){continue;
}var H=A.split(q);

if(H.length!=2){continue;
}var F=H[0];
var y=H[1];
var x=D[i];
var I=x.split(q);
var E=I[0];
var w=I[1];

if(qx.Class.getByName(E)){var C=E;
}else{C=F;
}var G=C+q;

if(y){G+=y+q;
}G+=w;
z[i]=G;
}return z;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var ba;

try{ba.bar();
}catch(W){var bb=this.getStackTraceFromError(W);
qx.lang.Array.removeAt(bb,0);
return bb;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(p,{"opera":function(v){return [];
},"default":function(J){var O=[];
var N=qx.lang.Function.getCaller(J);
var K={};

while(N){var L=qx.lang.Function.getName(N);
O.push(L);

try{N=N.caller;
}catch(Y){break;
}
if(!N){break;
}var M=qx.core.ObjectRegistry.toHashCode(N);

if(K[M]){O.push(n);
break;
}K[M]=N;
}return O;
}}),getStackTraceFromError:qx.core.Variant.select(p,{"gecko":function(P){if(!P.stack){return [];
}var V=/@(.+):(\d+)$/gm;
var Q;
var R=[];

while((Q=V.exec(P.stack))!=null){var S=Q[1];
var U=Q[2];
var T=this.__jB(S);
R.push(T+q+U);
}return R;
},"webkit":function(bc){if(bc.sourceURL&&bc.line){return [this.__jB(bc.sourceURL)+q+bc.line];
}else{return [];
}},"opera":function(a){if(a.message.indexOf("Backtrace:")<0){return [];
}var c=[];
var d=qx.lang.String.trim(a.message.split("Backtrace:")[1]);
var e=d.split(k);

for(var i=0;i<e.length;i++){var b=e[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(b&&b.length>=2){var g=b[1];
var f=this.__jB(b[2]);
c.push(f+q+g);
}}return c;
},"default":function(){return [];
}}),__jB:function(r){var u=j;
var s=r.indexOf(u);
var t=(s==-1)?r:r.substring(s+u.length).replace(/\//g,h).replace(/\.js$/,l);
return t;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(i){this.__ke=[];
this.setMaxMessages(i||50);
},members:{__kf:0,__ke:null,__kg:50,setMaxMessages:function(b){this.__kg=b;
this.clearHistory();
},getMaxMessages:function(){return this.__kg;
},process:function(c){var d=this.getMaxMessages();

if(this.__ke.length<d){this.__ke.push(c);
}else{this.__ke[this.__kf++]=c;

if(this.__kf>=d){this.__kf=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(e){if(e>this.__ke.length){e=this.__ke.length;
}
if(this.__ke.length==this.getMaxMessages()){var g=this.__kf-1;
}else{g=this.__ke.length-1;
}var f=g-e+1;

if(f<0){f+=this.__ke.length;
}var h;

if(f<=g){h=this.__ke.slice(f,g+1);
}else{h=this.__ke.slice(f,this.__ke.length).concat(this.__ke.slice(0,g+1));
}return h;
},clearHistory:function(){this.__ke=[];
this.__kf=0;
}}});
})();
(function(){var U="node",T="error",S="...(+",R="array",Q=")",P="info",O="instance",N="string",M="null",L="class",bq="number",bp="stringify",bo="]",bn="unknown",bm="function",bl="boolean",bk="debug",bj="map",bi="undefined",bh="qx.log.Logger",bc=")}",bd="#",ba="warn",bb="document",X="{...(",Y="[",V="text[",W="[...(",be="\n",bf=")]",bg="object";
qx.Class.define(bh,{statics:{__et:bk,setLevel:function(d){this.__et=d;
},getLevel:function(){return this.__et;
},setTreshold:function(H){this.__ew.setMaxMessages(H);
},getTreshold:function(){return this.__ew.getMaxMessages();
},__eu:{},__ev:0,register:function(bN){if(bN.$$id){return;
}var bO=this.__ev++;
this.__eu[bO]=bN;
bN.$$id=bO;
var bP=this.__ew.getAllLogEvents();

for(var i=0,l=bP.length;i<l;i++){bN.process(bP[i]);
}},unregister:function(s){var t=s.$$id;

if(t==null){return;
}delete this.__eu[t];
delete s.$$id;
},debug:function(u,v){qx.log.Logger.__ey(bk,arguments);
},info:function(w,x){qx.log.Logger.__ey(P,arguments);
},warn:function(k,m){qx.log.Logger.__ey(ba,arguments);
},error:function(I,J){qx.log.Logger.__ey(T,arguments);
},trace:function(K){qx.log.Logger.__ey(P,[K,qx.dev.StackTrace.getStackTrace().join(be)]);
},deprecatedMethodWarning:function(a,b){var c;
{};
},deprecatedClassWarning:function(bK,bL){var bM;
{};
},deprecatedEventWarning:function(n,event,o){var p;
{};
},deprecatedMixinWarning:function(E,F){var G;
{};
},deprecatedConstantWarning:function(A,B,C){var self,D;
{};
},deprecateMethodOverriding:function(e,f,g,h){var j;
{};
},clear:function(){this.__ew.clearHistory();
},__ew:new qx.log.appender.RingBuffer(50),__ex:{debug:0,info:1,warn:2,error:3},__ey:function(bA,bB){var bG=this.__ex;

if(bG[bA]<bG[this.__et]){return;
}var bD=bB.length<2?null:bB[0];
var bF=bD?1:0;
var bC=[];

for(var i=bF,l=bB.length;i<l;i++){bC.push(this.__eA(bB[i],true));
}var bH=new Date;
var bI={time:bH,offset:bH-qx.Bootstrap.LOADSTART,level:bA,items:bC,win:window};
if(bD){if(bD instanceof qx.core.Object){bI.object=bD.$$hash;
}else if(bD.$$type){bI.clazz=bD;
}}this.__ew.process(bI);
var bJ=this.__eu;

for(var bE in bJ){bJ[bE].process(bI);
}},__ez:function(y){if(y===undefined){return bi;
}else if(y===null){return M;
}
if(y.$$type){return L;
}var z=typeof y;

if(z===bm||z==N||z===bq||z===bl){return z;
}else if(z===bg){if(y.nodeType){return U;
}else if(y.classname){return O;
}else if(y instanceof Array){return R;
}else if(y instanceof Error){return T;
}else{return bj;
}}
if(y.toString){return bp;
}return bn;
},__eA:function(br,bs){var bz=this.__ez(br);
var bv=bn;
var bu=[];

switch(bz){case M:case bi:bv=bz;
break;
case N:case bq:case bl:bv=br;
break;
case U:if(br.nodeType===9){bv=bb;
}else if(br.nodeType===3){bv=V+br.nodeValue+bo;
}else if(br.nodeType===1){bv=br.nodeName.toLowerCase();

if(br.id){bv+=bd+br.id;
}}else{bv=U;
}break;
case bm:bv=qx.lang.Function.getName(br)||bz;
break;
case O:bv=br.basename+Y+br.$$hash+bo;
break;
case L:case bp:bv=br.toString();
break;
case T:bu=qx.dev.StackTrace.getStackTraceFromError(br);
bv=br.toString();
break;
case R:if(bs){bv=[];

for(var i=0,l=br.length;i<l;i++){if(bv.length>20){bv.push(S+(l-i)+Q);
break;
}bv.push(this.__eA(br[i],false));
}}else{bv=W+br.length+bf;
}break;
case bj:if(bs){var bt;
var by=[];

for(var bx in br){by.push(bx);
}by.sort();
bv=[];

for(var i=0,l=by.length;i<l;i++){if(bv.length>20){bv.push(S+(l-i)+Q);
break;
}bx=by[i];
bt=this.__eA(br[bx],false);
bt.key=bx;
bv.push(bt);
}}else{var bw=0;

for(var bx in br){bw++;
}bv=X+bw+bc;
}break;
}return {type:bz,text:bv,trace:bu};
}},defer:function(q){var r=qx.Bootstrap.$$logs;

for(var i=0;i<r.length;i++){q.__ey(r[i][0],r[i][1]);
}qx.Bootstrap.debug=q.debug;
qx.Bootstrap.info=q.info;
qx.Bootstrap.warn=q.warn;
qx.Bootstrap.error=q.error;
qx.Bootstrap.trace=q.trace;
}});
})();
(function(){var bu="set",bt="get",bs="reset",br="MSIE 6.0",bq="qx.core.Object",bp="]",bo="rv:1.8.1",bn="[",bm="$$user_",bl="Object";
qx.Class.define(bq,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bl},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bn+this.$$hash+bp;
},base:function(E,F){{};

if(arguments.length===1){return E.callee.base.call(this);
}else{return E.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(Y){return Y.callee.self;
},clone:function(){var b=this.constructor;
var a=new b;
var d=qx.Class.getProperties(b);
var c=qx.core.Property.$$store.user;
var f=qx.core.Property.$$method.set;
var name;
for(var i=0,l=d.length;i<l;i++){name=d[i];

if(this.hasOwnProperty(c[name])){a[f[name]](this[c[name]]);
}}return a;
},set:function(N,O){var Q=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(N)){if(!this[Q[N]]){if(this[bu+qx.Bootstrap.firstUp(N)]!=undefined){this[bu+qx.Bootstrap.firstUp(N)](O);
return;
}{};
}return this[Q[N]](O);
}else{for(var P in N){if(!this[Q[P]]){if(this[bu+qx.Bootstrap.firstUp(P)]!=undefined){this[bu+qx.Bootstrap.firstUp(P)](N[P]);
continue;
}{};
}this[Q[P]](N[P]);
}return this;
}},get:function(R){var S=qx.core.Property.$$method.get;

if(!this[S[R]]){if(this[bt+qx.Bootstrap.firstUp(R)]!=undefined){return this[bt+qx.Bootstrap.firstUp(R)]();
}{};
}return this[S[R]]();
},reset:function(s){var t=qx.core.Property.$$method.reset;

if(!this[t[s]]){if(this[bs+qx.Bootstrap.firstUp(s)]!=undefined){this[bs+qx.Bootstrap.firstUp(s)]();
return;
}{};
}this[t[s]]();
},__kh:qx.event.Registration,addListener:function(bv,bw,self,bx){if(!this.$$disposed){return this.__kh.addListener(this,bv,bw,self,bx);
}return null;
},addListenerOnce:function(g,h,self,j){var k=function(e){h.call(self||this,e);
this.removeListener(g,k,this,j);
};
return this.addListener(g,k,this,j);
},removeListener:function(K,L,self,M){if(!this.$$disposed){return this.__kh.removeListener(this,K,L,self,M);
}return false;
},removeListenerById:function(W){if(!this.$$disposed){return this.__kh.removeListenerById(this,W);
}return false;
},hasListener:function(bF,bG){return this.__kh.hasListener(this,bF,bG);
},dispatchEvent:function(bH){if(!this.$$disposed){return this.__kh.dispatchEvent(this,bH);
}return true;
},fireEvent:function(bC,bD,bE){if(!this.$$disposed){return this.__kh.fireEvent(this,bC,bD,bE);
}return true;
},fireNonBubblingEvent:function(T,U,V){if(!this.$$disposed){return this.__kh.fireNonBubblingEvent(this,T,U,V);
}return true;
},fireDataEvent:function(n,o,p,q){if(!this.$$disposed){if(p===undefined){p=null;
}return this.__kh.fireNonBubblingEvent(this,n,qx.event.type.Data,[o,p,!!q]);
}return true;
},__ki:null,setUserData:function(G,H){if(!this.__ki){this.__ki={};
}this.__ki[G]=H;
},getUserData:function(u){if(!this.__ki){return null;
}var v=this.__ki[u];
return v===undefined?null:v;
},__kj:qx.log.Logger,debug:function(D){this.__kj.debug(this,D);
},info:function(I){this.__kj.info(this,I);
},warn:function(ba){this.__kj.warn(this,ba);
},error:function(X){this.__kj.error(this,X);
},trace:function(){this.__kj.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var A,y,x,B;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var z=this.constructor;
var w;

while(z.superclass){if(z.$$destructor){z.$$destructor.call(this);
}if(z.$$includes){w=z.$$flatIncludes;

for(var i=0,l=w.length;i<l;i++){if(w[i].$$destructor){w[i].$$destructor.call(this);
}}}z=z.superclass;
}if(this.__kk){this.__kk();
}{};
},__kk:null,__kl:function(){var bk=qx.Class.getProperties(this.constructor);

for(var i=0,l=bk.length;i<l;i++){delete this[bm+bk[i]];
}},_disposeFields:function(J){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(m){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bb){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(C){qx.util.DisposeUtil.disposeArray(this,C);
},_disposeMap:function(r){qx.util.DisposeUtil.disposeMap(this,r);
}},settings:{"qx.disposerDebugLevel":0},defer:function(by,bz){{};
var bB=navigator.userAgent.indexOf(br)!=-1;
var bA=navigator.userAgent.indexOf(bo)!=-1;
if(bB||bA){bz.__kk=bz.__kl;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__ki=null;
var be=this.constructor;
var bi;
var bj=qx.core.Property.$$store;
var bg=bj.user;
var bh=bj.theme;
var bc=bj.inherit;
var bf=bj.useinit;
var bd=bj.init;

while(be){bi=be.$$properties;

if(bi){for(var name in bi){if(bi[name].dispose||bi[name].dereference){this[bg[name]]=this[bh[name]]=this[bc[name]]=this[bf[name]]=this[bd[name]]=undefined;
}}}be=be.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(d,f){this.__jk=d||null;
this.__jl=f||window;

if(qx.core.Setting.get(c)===b){if(d&&window.onerror){var g=qx.Bootstrap.bind(this.__jn,this);

if(this.__jm==null){this.__jm=window.onerror;
}var self=this;
window.onerror=function(e){self.__jm(e);
g(e);
};
}
if(d&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__jn,this);
}if(this.__jk==null){if(this.__jm!=null){window.onerror=this.__jm;
this.__jm=null;
}else{window.onerror=null;
}}}},__jn:function(j,k,l){if(this.__jk){this.handleError(new qx.core.WindowError(j,k,l));
return true;
}},observeMethod:function(m){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__jk){return m.apply(this,arguments);
}
try{return m.apply(this,arguments);
}catch(n){self.handleError(new qx.core.GlobalError(n,arguments));
}};
}else{return m;
}},handleError:function(h){if(this.__jk){this.__jk.call(this.__jl,h);
}}},defer:function(i){qx.core.Setting.define(c,b);
i.setErrorHandler(null,null);
}});
})();
(function(){var m="ready",l="qx.client",k="mshtml",j="load",i="unload",h="qx.event.handler.Application",g="complete",f="gecko|opera|webkit",d="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(x){qx.core.Object.call(this);
this._window=x.getWindow();
this.__gR=false;
this.__gS=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__gV();
}}},members:{canHandleEvent:function(n,o){},registerEvent:function(u,v,w){},unregisterEvent:function(r,s,t){},__gT:null,__gR:null,__gS:null,__gU:null,__gV:function(){if(!this.__gT&&this.__gR&&qx.$$loader.scriptLoaded){if(qx.core.Variant.isSet(l,k)){if(qx.event.Registration.hasListener(this._window,m)){this.__gT=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__gT=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__gT;
},_initObserver:function(){if(qx.$$domReady||document.readyState==g||document.readyState==m){this.__gR=true;
this.__gV();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(l,f)){qx.bom.Event.addNativeListener(this._window,c,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(l,k)){var self=this;
var y=function(){try{document.documentElement.doScroll(d);

if(document.body){self._onNativeLoadWrapped();
}}catch(a){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,i,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,i,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gR=true;
this.__gV();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gU){this.__gU=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){qx.core.Object.call(this);
this._manager=h;
this._window=h.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(o,p){},registerEvent:function(i,j,k){},unregisterEvent:function(d,f,g){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var c=qx.event.handler.Window.SUPPORTED_TYPES;

for(var b in c){qx.bom.Event.addNativeListener(this._window,b,this._onNativeWrapper);
}},_stopWindowObserver:function(){var n=qx.event.handler.Window.SUPPORTED_TYPES;

for(var m in n){qx.bom.Event.removeNativeListener(this._window,m,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var r=this._window;

try{var u=r.document;
}catch(e){return ;
}var s=u.documentElement;
var q=e.target||e.srcElement;

if(q==null||q===r||q===u||q===s){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,r]);
qx.event.Registration.dispatchEvent(r,event);
var t=event.getReturnValue();

if(t!=null){e.returnValue=t;
return t;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(l){qx.event.Registration.addHandler(l);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(k,event,m){return !event.getBubbles();
},dispatchEvent:function(c,event,d){var g,e;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var h=this._manager.getListeners(c,d,false);

if(h){for(var i=0,l=h.length;i<l;i++){var f=h[i].context||c;
h[i].handler.call(f,event);
}}}},defer:function(j){qx.event.Registration.addDispatcher(j);
}});
})();
(function(){var i="ready",h="qx.application",g="beforeunload",f="qx.core.Init",d="shutdown";
qx.Class.define(f,{statics:{getApplication:function(){return this.__jh||null;
},ready:function(){if(this.__jh){return;
}
if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var b=qx.core.Setting.get(h);
var c=qx.Class.getByName(b);

if(c){this.__jh=new c;
var a=new Date;
this.__jh.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-a)+"ms");
var a=new Date;
this.__jh.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-a)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+b);
}},__ji:function(e){var k=this.__jh;

if(k){e.setReturnValue(k.close());
}},__jj:function(){var j=this.__jh;

if(j){j.terminate();
}}},defer:function(l){qx.event.Registration.addListener(window,i,l.ready,l);
qx.event.Registration.addListener(window,d,l.__jj,l);
qx.event.Registration.addListener(window,g,l.__ji,l);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var g="demobrowser.demo.bom.Iframe",f="http://gmx.com",d="testFrame",c="",b="load",a="dummy";
qx.Class.define(g,{extend:qx.application.Native,members:{main:function(){qx.application.Native.prototype.main.call(this);
var h=qx.bom.Iframe.create({name:d,src:f});
qx.bom.Element.addListener(h,b,function(e){this.debug("Content loaded.");
},this);
document.body.appendChild(h);
document.getElementById(a).innerHTML=c;
}}});
})();
(function(){var g="qx.event.type.Event";
qx.Class.define(g,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(h,i){{};
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
},setType:function(l){this._type=l;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(c){this._eventPhase=c;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(a){this._target=a;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(f){this._currentTarget=f;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(b){this._relatedTarget=b;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(m){this._originalTarget=m;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(k){this._bubbles=k;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(j){this._cancelable=j;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__iB:null,__iC:null,init:function(d,e,f){qx.event.type.Event.prototype.init.call(this,false,f);
this.__iB=d;
this.__iC=e;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
c.__iB=this.__iB;
c.__iC=this.__iC;
return c;
},getData:function(){return this.__iB;
},getOldData:function(){return this.__iC;
}},destruct:function(){this.__iB=this.__iC=null;
}});
})();
(function(){var cv="get",cu="",ct="[",cs="last",cr="change",cq="]",cp=".",co="Number",cn="String",cm="set",cK="deepBinding",cJ="item",cI="reset",cH="' (",cG="Boolean",cF=") to the object '",cE="Integer",cD="qx.data.SingleValueBinding",cC="No event could be found for the property",cB="Binding from '",cz="PositiveNumber",cA="PositiveInteger",cx="Binding does not exist!",cy=").",cw="Date";
qx.Class.define(cD,{statics:{DEBUG_ON:false,__fo:{},bind:function(v,w,x,y,z){var J=this.__fq(v,w,x,y,z);
var E=w.split(cp);
var B=this.__fx(E);
var I=[];
var F=[];
var G=[];
var C=[];
var D=v;
for(var i=0;i<E.length;i++){if(B[i]!==cu){C.push(cr);
}else{C.push(this.__fs(D,E[i]));
}I[i]=D;
if(i==E.length-1){if(B[i]!==cu){var M=B[i]===cs?D.length-1:B[i];
var A=D.getItem(M);
this.__fw(A,x,y,z,v);
G[i]=this.__fy(D,C[i],x,y,z,B[i]);
}else{if(E[i]!=null&&D[cv+qx.lang.String.firstUp(E[i])]!=null){var A=D[cv+qx.lang.String.firstUp(E[i])]();
this.__fw(A,x,y,z,v);
}G[i]=this.__fy(D,C[i],x,y,z);
}}else{var K={index:i,propertyNames:E,sources:I,listenerIds:G,arrayIndexValues:B,targetObject:x,targetPropertyChain:y,options:z,listeners:F};
var H=qx.lang.Function.bind(this.__fp,this,K);
F.push(H);
G[i]=D.addListener(C[i],H);
}if(D[cv+qx.lang.String.firstUp(E[i])]==null){D=null;
}else if(B[i]!==cu){D=D[cv+qx.lang.String.firstUp(E[i])](B[i]);
}else{D=D[cv+qx.lang.String.firstUp(E[i])]();
}
if(!D){break;
}}var L={type:cK,listenerIds:G,sources:I,targetListenerIds:J.listenerIds,targets:J.targets};
this.__fz(L,v,w,x,y);
return L;
},__fp:function(bz){if(bz.options&&bz.options.onUpdate){bz.options.onUpdate(bz.sources[bz.index],bz.targetObject);
}for(var j=bz.index+1;j<bz.propertyNames.length;j++){var bD=bz.sources[j];
bz.sources[j]=null;

if(!bD){continue;
}bD.removeListenerById(bz.listenerIds[j]);
}var bD=bz.sources[bz.index];
for(var j=bz.index+1;j<bz.propertyNames.length;j++){if(bz.arrayIndexValues[j-1]!==cu){bD=bD[cv+qx.lang.String.firstUp(bz.propertyNames[j-1])](bz.arrayIndexValues[j-1]);
}else{bD=bD[cv+qx.lang.String.firstUp(bz.propertyNames[j-1])]();
}bz.sources[j]=bD;
if(!bD){this.__ft(bz.targetObject,bz.targetPropertyChain);
break;
}if(j==bz.propertyNames.length-1){if(qx.Class.implementsInterface(bD,qx.data.IListData)){var bE=bz.arrayIndexValues[j]===cs?bD.length-1:bz.arrayIndexValues[j];
var bB=bD.getItem(bE);
this.__fw(bB,bz.targetObject,bz.targetPropertyChain,bz.options,bz.sources[bz.index]);
bz.listenerIds[j]=this.__fy(bD,cr,bz.targetObject,bz.targetPropertyChain,bz.options,bz.arrayIndexValues[j]);
}else{if(bz.propertyNames[j]!=null&&bD[cv+qx.lang.String.firstUp(bz.propertyNames[j])]!=null){var bB=bD[cv+qx.lang.String.firstUp(bz.propertyNames[j])]();
this.__fw(bB,bz.targetObject,bz.targetPropertyChain,bz.options,bz.sources[bz.index]);
}var bC=this.__fs(bD,bz.propertyNames[j]);
bz.listenerIds[j]=this.__fy(bD,bC,bz.targetObject,bz.targetPropertyChain,bz.options);
}}else{if(bz.listeners[j]==null){var bA=qx.lang.Function.bind(this.__fp,this,bz);
bz.listeners.push(bA);
}if(qx.Class.implementsInterface(bD,qx.data.IListData)){var bC=cr;
}else{var bC=this.__fs(bD,bz.propertyNames[j]);
}bz.listenerIds[j]=bD.addListener(bC,bz.listeners[j]);
}}},__fq:function(bb,bc,bd,be,bf){var bj=be.split(cp);
var bh=this.__fx(bj);
var bo=[];
var bn=[];
var bl=[];
var bk=[];
var bi=bd;
for(var i=0;i<bj.length-1;i++){if(bh[i]!==cu){bk.push(cr);
}else{try{bk.push(this.__fs(bi,bj[i]));
}catch(e){break;
}}bo[i]=bi;
var bm=function(){for(var j=i+1;j<bj.length-1;j++){var ck=bo[j];
bo[j]=null;

if(!ck){continue;
}ck.removeListenerById(bl[j]);
}var ck=bo[i];
for(var j=i+1;j<bj.length-1;j++){var ci=qx.lang.String.firstUp(bj[j-1]);
if(bh[j-1]!==cu){var cl=bh[j-1]===cs?ck.getLength()-1:bh[j-1];
ck=ck[cv+ci](cl);
}else{ck=ck[cv+ci]();
}bo[j]=ck;
if(bn[j]==null){bn.push(bm);
}if(qx.Class.implementsInterface(ck,qx.data.IListData)){var cj=cr;
}else{try{var cj=qx.data.SingleValueBinding.__fs(ck,bj[j]);
}catch(e){break;
}}bl[j]=ck.addListener(cj,bn[j]);
}qx.data.SingleValueBinding.__fr(bb,bc,bd,be,bf);
};
bn.push(bm);
bl[i]=bi.addListener(bk[i],bm);
var bg=qx.lang.String.firstUp(bj[i]);
if(bi[cv+bg]==null){bi=null;
}else if(bh[i]!==cu){bi=bi[cv+bg](bh[i]);
}else{bi=bi[cv+bg]();
}
if(!bi){break;
}}return {listenerIds:bl,targets:bo};
},__fr:function(bR,bS,bT,bU,bV){var ca=this.__fv(bR,bS);

if(ca!=null){var cc=bS.substring(bS.lastIndexOf(cp)+1,bS.length);
if(cc.charAt(cc.length-1)==cq){var bW=cc.substring(cc.lastIndexOf(ct)+1,cc.length-1);
var bY=cc.substring(0,cc.lastIndexOf(ct));
var cb=ca[cv+qx.lang.String.firstUp(bY)]();

if(bW==cs){bW=cb.length-1;
}
if(cb!=null){var bX=cb.getItem(bW);
}}else{var bX=ca[cv+qx.lang.String.firstUp(cc)]();
}}bX=qx.data.SingleValueBinding.__fA(bX,bT,bU,bV);
this.__fu(bT,bU,bX);
},__fs:function(cd,ce){var cf=this.__fB(cd,ce);
if(cf==null){if(qx.Class.supportsEvent(cd.constructor,ce)){cf=ce;
}else if(qx.Class.supportsEvent(cd.constructor,cr+qx.lang.String.firstUp(ce))){cf=cr+qx.lang.String.firstUp(ce);
}else{throw new qx.core.AssertionError(cC,ce);
}}return cf;
},__ft:function(r,s){var t=this.__fv(r,s);

if(t!=null){var u=s.substring(s.lastIndexOf(cp)+1,s.length);
if(u.charAt(u.length-1)==cq){this.__fu(r,s,null);
return;
}if(t[cI+qx.lang.String.firstUp(u)]!=undefined){t[cI+qx.lang.String.firstUp(u)]();
}else{t[cm+qx.lang.String.firstUp(u)](null);
}}},__fu:function(a,b,c){var h=this.__fv(a,b);

if(h!=null){var k=b.substring(b.lastIndexOf(cp)+1,b.length);
if(k.charAt(k.length-1)==cq){var d=k.substring(k.lastIndexOf(ct)+1,k.length-1);
var g=k.substring(0,k.lastIndexOf(ct));
var f=h[cv+qx.lang.String.firstUp(g)]();

if(d==cs){d=f.length-1;
}
if(f!=null){f.setItem(d,c);
}}else{h[cm+qx.lang.String.firstUp(k)](c);
}}},__fv:function(l,m){var p=m.split(cp);
var q=l;
for(var i=0;i<p.length-1;i++){try{var o=p[i];
if(o.indexOf(cq)==o.length-1){var n=o.substring(o.indexOf(ct)+1,o.length-1);
o=o.substring(0,o.indexOf(ct));
}q=q[cv+qx.lang.String.firstUp(o)]();

if(n!=null){if(n==cs){n=q.length-1;
}q=q.getItem(n);
n=null;
}}catch(cV){return null;
}}return q;
},__fw:function(cW,cX,cY,da,db){cW=this.__fA(cW,cX,cY,da);
if(cW==null){this.__ft(cX,cY);
}if(cW!=undefined){try{this.__fu(cX,cY,cW);
if(da&&da.onUpdate){da.onUpdate(db,cX,cW);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(da&&da.onSetFail){da.onSetFail(e);
}else{this.warn("Failed so set value "+cW+" on "+cX+". Error message: "+e);
}}}},__fx:function(bO){var bP=[];
for(var i=0;i<bO.length;i++){var name=bO[i];
if(qx.lang.String.endsWith(name,cq)){var bQ=name.substring(name.indexOf(ct)+1,name.indexOf(cq));
if(name.indexOf(cq)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bQ!==cs){if(bQ==cu||isNaN(parseInt(bQ))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(ct)!=0){bO[i]=name.substring(0,name.indexOf(ct));
bP[i]=cu;
bP[i+1]=bQ;
bO.splice(i+1,0,cJ);
i++;
}else{bP[i]=bQ;
bO.splice(i,1,cJ);
}}else{bP[i]=cu;
}}return bP;
},__fy:function(bF,bG,bH,bI,bJ,bK){var bL;
{};
var bN=function(N,e){if(N!==cu){if(N===cs){N=bF.length-1;
}var Q=bF.getItem(N);
if(Q==undefined){qx.data.SingleValueBinding.__ft(bH,bI);
}var O=e.getData().start;
var P=e.getData().end;

if(N<O||N>P){return;
}}else{var Q=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bF+" by "+bG+" to "+bH+" ("+bI+")");
qx.log.Logger.debug("Data before conversion: "+Q);
}Q=qx.data.SingleValueBinding.__fA(Q,bH,bI,bJ);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+Q);
}try{if(Q!=undefined){qx.data.SingleValueBinding.__fu(bH,bI,Q);
}else{qx.data.SingleValueBinding.__ft(bH,bI);
}if(bJ&&bJ.onUpdate){bJ.onUpdate(bF,bH,Q);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bJ&&bJ.onSetFail){bJ.onSetFail(e);
}else{this.warn("Failed so set value "+Q+" on "+bH+". Error message: "+e);
}}};
if(!bK){bK=cu;
}bN=qx.lang.Function.bind(bN,bF,bK);
var bM=bF.addListener(bG,bN);
return bM;
},__fz:function(bp,bq,br,bs,bt){if(this.__fo[bq.toHashCode()]===undefined){this.__fo[bq.toHashCode()]=[];
}this.__fo[bq.toHashCode()].push([bp,bq,br,bs,bt]);
},__fA:function(cM,cN,cO,cP){if(cP&&cP.converter){var cR;

if(cN.getModel){cR=cN.getModel();
}return cP.converter(cM,cR);
}else{var cT=this.__fv(cN,cO);
var cU=cO.substring(cO.lastIndexOf(cp)+1,cO.length);
if(cT==null){return cM;
}var cS=qx.Class.getPropertyDefinition(cT.constructor,cU);
var cQ=cS==null?cu:cS.check;
return this.__fC(cM,cQ);
}},__fB:function(dc,dd){var de=qx.Class.getPropertyDefinition(dc.constructor,dd);

if(de==null){return null;
}return de.event;
},__fC:function(V,W){var X=qx.lang.Type.getClass(V);
if((X==co||X==cn)&&(W==cE||W==cA)){V=parseInt(V);
}if((X==cG||X==co||X==cw)&&W==cn){V=V+cu;
}if((X==co||X==cn)&&(W==co||W==cz)){V=parseFloat(V);
}return V;
},removeBindingFromObject:function(bw,bx){if(bx.type==cK){for(var i=0;i<bx.sources.length;i++){if(bx.sources[i]){bx.sources[i].removeListenerById(bx.listenerIds[i]);
}}for(var i=0;i<bx.targets.length;i++){if(bx.targets[i]){bx.targets[i].removeListenerById(bx.targetListenerIds[i]);
}}}else{bw.removeListenerById(bx);
}var by=this.__fo[bw.toHashCode()];
if(by!=undefined){for(var i=0;i<by.length;i++){if(by[i][0]==bx){qx.lang.Array.remove(by,by[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(Y){{};
var ba=this.__fo[Y.toHashCode()];

if(ba!=undefined){for(var i=ba.length-1;i>=0;i--){this.removeBindingFromObject(Y,ba[i][0]);
}}},getAllBindingsForObject:function(cL){if(this.__fo[cL.toHashCode()]===undefined){this.__fo[cL.toHashCode()]=[];
}return this.__fo[cL.toHashCode()];
},removeAllBindings:function(){for(var bv in this.__fo){var bu=qx.core.ObjectRegistry.fromHashCode(bv);
if(bu==null){delete this.__fo[bv];
continue;
}this.removeAllBindingsForObject(bu);
}this.__fo={};
},getAllBindings:function(){return this.__fo;
},showBindingInLog:function(R,S){var U;
for(var i=0;i<this.__fo[R.toHashCode()].length;i++){if(this.__fo[R.toHashCode()][i][0]==S){U=this.__fo[R.toHashCode()][i];
break;
}}
if(U===undefined){var T=cx;
}else{var T=cB+U[1]+cH+U[2]+cF+U[3]+cH+U[4]+cy;
}qx.log.Logger.debug(T);
},showAllBindingsInLog:function(){for(var ch in this.__fo){var cg=qx.core.ObjectRegistry.fromHashCode(ch);

for(var i=0;i<this.__fo[ch].length;i++){this.showBindingInLog(cg,this.__fo[ch][i][0]);
}}}}});
})();
(function(){var m="",l="g",k="0",j='\\$1',h="%",g='-',f="qx.lang.String",e=' ',d='\n',c="undefined";
qx.Class.define(f,{statics:{camelCase:function(A){return A.replace(/\-([a-z])/g,function(t,u){return u.toUpperCase();
});
},hyphenate:function(H){return H.replace(/[A-Z]/g,function(v){return (g+v.charAt(0).toLowerCase());
});
},capitalize:function(I){return I.replace(/\b[a-z]/g,function(z){return z.toUpperCase();
});
},clean:function(n){return this.trim(n.replace(/\s+/g,e));
},trimLeft:function(a){return a.replace(/^\s+/,m);
},trimRight:function(y){return y.replace(/\s+$/,m);
},trim:function(b){return b.replace(/^\s+|\s+$/g,m);
},startsWith:function(o,p){return o.indexOf(p)===0;
},endsWith:function(B,C){return B.substring(B.length-C.length,B.length)===C;
},repeat:function(O,P){return O.length>0?new Array(P+1).join(O):m;
},pad:function(q,length,r){var s=length-q.length;

if(s>0){if(typeof r===c){r=k;
}return this.repeat(r,s)+q;
}else{return q;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(w,x){return w.indexOf(x)!=-1;
},format:function(E,F){var G=E;

for(var i=0;i<F.length;i++){G=G.replace(new RegExp(h+(i+1),l),F[i]);
}return G;
},escapeRegexpChars:function(Q){return Q.replace(/([.*+?^${}()|[\]\/\\])/g,j);
},toArray:function(D){return D.split(/\B|\b/g);
},stripTags:function(N){return N.replace(/<\/?[^>]+>/gi,m);
},stripScripts:function(J,K){var M=m;
var L=J.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){M+=arguments[1]+d;
return m;
});

if(K===true){qx.lang.Function.globalEval(M);
}return L;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(h){},setItem:function(i,j){},splice:function(e,f,g){},contains:function(d){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cp=c;
this.__cq=d||b;
this.__cr=e===undefined?-1:e;
},members:{__cp:null,__cq:null,__cr:null,toString:function(){return this.__cp;
},getUri:function(){return this.__cq;
},getLineNumber:function(){return this.__cr;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__jC=b+(c&&c.message?c.message:c);
Error.call(this,this.__jC);
this.__jD=d;
this.__jE=c;
},members:{__jE:null,__jD:null,__jC:null,toString:function(){return this.__jC;
},getArguments:function(){return this.__jD;
},getSourceException:function(){return this.__jE;
}},destruct:function(){this.__jE=null;
this.__jD=null;
this.__jC=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__cm=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cm:null,message:null,getComment:function(){return this.__cm;
},toString:function(){return this.__cm+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__km=qx.dev.StackTrace.getStackTrace();
},members:{__km:null,getStackTrace:function(){return this.__km;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(k){return (k!==null&&(this.getClass(k)==b||k instanceof Number));
},isBoolean:function(j){return (j!==null&&(this.getClass(j)==a||j instanceof Boolean));
},isDate:function(i){return (i!==null&&(this.getClass(i)==c||i instanceof Date));
},isError:function(h){return (h!==null&&(this.getClass(h)==e||h instanceof Error));
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(j){qx.core.Object.call(this);
this.__eU={};

if(j!=null){this.setSize(j);
}},properties:{size:{check:a,init:Infinity}},members:{__eU:null,getObject:function(c){if(this.$$disposed){return new c;
}
if(!c){throw new Error("Class needs to be defined!");
}var d=null;
var e=this.__eU[c.classname];

if(e){d=e.pop();
}
if(d){d.$$pooled=false;
}else{d=new c;
}return d;
},poolObject:function(f){if(!this.__eU){return;
}var g=f.classname;
var h=this.__eU[g];

if(f.$$pooled){throw new Error("Object is already pooled: "+f);
}
if(!h){this.__eU[g]=h=[];
}if(h.length>this.getSize()){if(f.destroy){f.destroy();
}else{f.dispose();
}return;
}f.$$pooled=true;
h.push(f);
}},destruct:function(){var n=this.__eU;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__eU;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeFields:function(g,h){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=h.length;i<l;i++){var name=h[i];

if(g[name]==null||!g.hasOwnProperty(name)){continue;
}g[name]=null;
}},disposeObjects:function(s,t,u){var name;

for(var i=0,l=t.length;i<l;i++){name=t[i];

if(s[name]==null||!s.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(s[name].dispose){if(!u&&s[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{s[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}s[name]=null;
}},disposeArray:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var i=o.length-1;i>=0;i--){n=o[i];

if(n){n.dispose();
}}}catch(j){throw new Error("The array field: "+m+" of object: "+k+" has non disposable entries: "+j);
}o.length=0;
k[m]=null;
},disposeMap:function(c,d){var e=c[d];

if(!e){return;
}if(qx.core.ObjectRegistry.inShutDown){c[d]=null;
return;
}try{for(var f in e){if(e.hasOwnProperty(f)){e[f].dispose();
}}}catch(b){throw new Error("The map field: "+d+" of object: "+c+" has non disposable entries: "+b);
}c[d]=null;
},disposeTriggeredBy:function(p,q){var r=q.dispose;
q.dispose=function(){r.call(q);
p.dispose();
};
}}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){return qx.Class.supportsEvent(f.constructor,g);
},registerEvent:function(h,i,j){},unregisterEvent:function(b,c,d){}},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__fP:function(){this.QUIRKS_MODE=this.__fQ();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__fQ:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__fP();
}});
})();
(function(){var c="qx.lang.Object";
qx.Class.define(c,{statics:{empty:function(v){{};

for(var w in v){if(v.hasOwnProperty(w)){delete v[w];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(u){{};
return u.__count__===0;
}:
function(s){{};

for(var t in s){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(x,y){{};
return x.__count__>=y;
}:
function(n,o){{};

if(o<=0){return true;
}var length=0;

for(var p in n){if((++length)>=o){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(E){{};
var G=[];
var F=this.getKeys(E);

for(var i=0,l=F.length;i<l;i++){G.push(E[F[i]]);
}return G;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(a,b){{};
return qx.lang.Object.mergeWith(a,b,false);
},merge:function(B,C){{};
var D=arguments.length;

for(var i=1;i<D;i++){qx.lang.Object.mergeWith(B,arguments[i]);
}return B;
},clone:function(H){{};
var I={};

for(var J in H){I[J]=H[J];
}return I;
},invert:function(d){{};
var e={};

for(var f in d){e[d[f].toString()]=f;
}return e;
},getKeyFromValue:function(g,h){{};

for(var j in g){if(g.hasOwnProperty(j)&&g[j]===h){return j;
}}return null;
},contains:function(z,A){{};
return this.getKeyFromValue(z,A)!==null;
},select:function(q,r){{};
return r[q];
},fromArray:function(k){{};
var m={};

for(var i=0,l=k.length;i<l;i++){{};
m[k[i].toString()]=true;
}return m;
}}});
})();
(function(){var m="emulated",k="native",j='"',h="qx.lang.Core",g="\\\\",f="\\\"",e="[object Error]";
qx.Class.define(h,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==e)?m:k,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?k:m,{"native":Array.prototype.indexOf,"emulated":function(C,D){if(D==null){D=0;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i<this.length;i++){if(this[i]===C){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?k:m,{"native":Array.prototype.lastIndexOf,"emulated":function(n,o){if(o==null){o=this.length-1;
}else if(o<0){o=Math.max(0,this.length+o);
}
for(var i=o;i>=0;i--){if(this[i]===n){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?k:m,{"native":Array.prototype.forEach,"emulated":function(z,A){var l=this.length;

for(var i=0;i<l;i++){var B=this[i];

if(B!==undefined){z.call(A||window,B,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?k:m,{"native":Array.prototype.filter,"emulated":function(v,w){var x=[];
var l=this.length;

for(var i=0;i<l;i++){var y=this[i];

if(y!==undefined){if(v.call(w||window,y,i,this)){x.push(this[i]);
}}}return x;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?k:m,{"native":Array.prototype.map,"emulated":function(a,b){var c=[];
var l=this.length;

for(var i=0;i<l;i++){var d=this[i];

if(d!==undefined){c[i]=a.call(b||window,d,i,this);
}}return c;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?k:m,{"native":Array.prototype.some,"emulated":function(s,t){var l=this.length;

for(var i=0;i<l;i++){var u=this[i];

if(u!==undefined){if(s.call(t||window,u,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?k:m,{"native":Array.prototype.every,"emulated":function(p,q){var l=this.length;

for(var i=0;i<l;i++){var r=this[i];

if(r!==undefined){if(!p.call(q||window,r,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?k:m,{"native":String.prototype.quote,"emulated":function(){return j+this.replace(/\\/g,g).replace(/\"/g,f)+j;
}})}});
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
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__en:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__eo:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__ep:function(){var K=qx.lang.Generics.__en;

for(var O in K){var M=window[O];
var L=K[O];

for(var i=0,l=L.length;i<l;i++){var N=L[i];

if(!M[N]){M[N]=qx.lang.Generics.__eo(M,N);
}}}}},defer:function(J){J.__ep();
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(g,h,i,j,k){qx.event.type.Event.prototype.init.call(this,j,k);
this._target=h||qx.bom.Event.getTarget(g);
this._relatedTarget=i||qx.bom.Event.getRelatedTarget(g);

if(g.timeStamp){this._timeStamp=g.timeStamp;
}this._native=g;
this._returnValue=null;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
var d={};
c._native=this._cloneNativeEvent(this._native,d);
c._returnValue=this._returnValue;
return c;
},_cloneNativeEvent:function(e,f){f.preventDefault=qx.lang.Function.empty;
return f;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__js:function(){var o=navigator.platform;
if(o==null||o===k){o=navigator.userAgent;
}
if(o.indexOf(e)!=-1||o.indexOf(l)!=-1||o.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(g)!=-1||o.indexOf(b)!=-1||o.indexOf(c)!=-1||o.indexOf(m)!=-1||o.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(a)!=-1||o.indexOf(i)!=-1||o.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(n){n.__js();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__kc:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__kd:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__kc){J.push(I);
}var L=new RegExp(l+J.join(C).replace(/\./g,r)+H,u);

if(!L.test(K)){this.UNKNOWN_SYSTEM=true;

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
}else{this.NAME=this.__kc[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__kd();
}});
})();
(function(){var c="qx.event.handler.Iframe",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(k){qx.event.Registration.fireEvent(k,b);
})},members:{canHandleEvent:function(l,m){return l.tagName.toLowerCase()===a;
},registerEvent:function(h,i,j){},unregisterEvent:function(e,f,g){}},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var g="qx.client",f="webkit",e="body",d="iframe",c="qx.bom.Iframe";
qx.Class.define(c,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(t,u){var t=t?qx.lang.Object.clone(t):{};
var v=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var w in v){if(t[w]==null){t[w]=v[w];
}}return qx.bom.Element.create(d,t,u);
},getWindow:qx.core.Variant.select(g,{"mshtml|gecko":function(A){try{return A.contentWindow;
}catch(i){return null;
}},"default":function(a){try{var b=this.getDocument(a);
return b?b.defaultView:null;
}catch(h){return null;
}}}),getDocument:qx.core.Variant.select(g,{"mshtml":function(p){try{var q=this.getWindow(p);
return q?q.document:null;
}catch(j){return null;
}},"default":function(z){try{return z.contentDocument;
}catch(y){return null;
}}}),getBody:function(l){try{var m=this.getDocument(l);
return m?m.getElementsByTagName(e)[0]:null;
}catch(o){return null;
}},setSource:function(B,C){try{if(this.getWindow(B)&&qx.dom.Hierarchy.isRendered(B)){try{if(qx.core.Variant.isSet(g,f)&&qx.bom.client.Platform.MAC){var D=this.getContentWindow();

if(D){D.stop();
}}this.getWindow(B).location.replace(C);
}catch(x){B.src=C;
}}else{B.src=C;
}}catch(k){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(r){var s=this.getDocument(r);

try{if(s&&s.location){return s.location.href;
}}catch(n){}return null;
}}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(d){this._manager=d;
},members:{_getParent:function(c){throw new Error("Missing implementation");
},canDispatchEvent:function(w,event,x){return event.getBubbles();
},dispatchEvent:function(e,event,f){var parent=e;
var q=this._manager;
var n,u;
var l;
var p,s;
var r;
var t=[];
n=q.getListeners(e,f,true);
u=q.getListeners(e,f,false);

if(n){t.push(n);
}
if(u){t.push(u);
}var parent=this._getParent(e);
var h=[];
var g=[];
var k=[];
var o=[];
while(parent!=null){n=q.getListeners(parent,f,true);

if(n){k.push(n);
o.push(parent);
}u=q.getListeners(parent,f,false);

if(u){h.push(u);
g.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=k.length-1;i>=0;i--){r=o[i];
event.setCurrentTarget(r);
l=k[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||r;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(e);

for(var i=0,v=t.length;i<v;i++){l=t[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||e;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,v=h.length;i<v;i++){r=g[i];
event.setCurrentTarget(r);
l=h[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||r;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(e){return e.parentNode;
},canDispatchEvent:function(b,event,c){return b.nodeType!==undefined&&event.getBubbles();
}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this.__jo=k;
this.__jp=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jo:null,__jp:null,canHandleEvent:function(b,c){},registerEvent:function(h,i,j){},unregisterEvent:function(d,e,f){}},destruct:function(){this.__jo=this.__jp=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var bm="keydown",bl="qx.client",bk="keypress",bj="NumLock",bi="keyup",bh="Enter",bg="0",bf="9",be="-",bd="PageUp",cu="+",ct="PrintScreen",cs="gecko",cr="A",cq="Z",cp="Left",co="F5",cn="Down",cm="Up",cl="F11",bt="F6",bu="useraction",br="F3",bs="keyinput",bp="Insert",bq="F8",bn="End",bo="/",bB="Delete",bC="*",bO="cmd",bK="F1",bW="F4",bR="Home",ch="F2",cc="F12",bG="PageDown",ck="F7",cj="Win",ci="F9",bF="F10",bI="Right",bJ="text",bM="Escape",bP="webkit",bS="5",bY="3",ce="Meta",bv="7",bw="CapsLock",bH="input",bV="Control",bU="Space",bT="Tab",cb="Shift",ca="Pause",bQ="Unidentified",bX="qx.event.handler.Keyboard",ba="mshtml|webkit",cd="6",bx="off",by="Apps",bL="4",bb="Alt",bc="mshtml",bE="2",bz="Scroll",bA="1",bD="8",bN="autoComplete",cg=",",cf="Backspace";
qx.Class.define(bX,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(L){qx.core.Object.call(this);
this.__fX=L;
this.__fY=L.getWindow();
if(qx.core.Variant.isSet(bl,cs)){this.__ga=this.__fY;
}else{this.__ga=this.__fY.document.documentElement;
}this.__gb={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(m){if(this._identifierToKeyCodeMap[m]){return true;
}
if(m.length!=1){return false;
}
if(m>=bg&&m<=bf){return true;
}
if(m>=cr&&m<=cq){return true;
}
switch(m){case cu:case be:case bC:case bo:return true;
default:return false;
}}},members:{__gc:null,__fX:null,__fY:null,__ga:null,__gb:null,__gd:null,__ge:null,__gf:null,canHandleEvent:function(G,H){},registerEvent:function(I,J,K){},unregisterEvent:function(q,r,s){},_fireInputEvent:function(n,o){var p=this.__gg();
if(p&&p.offsetWidth!=0){var event=qx.event.Registration.createEvent(bs,qx.event.type.KeyInput,[n,p,o]);
this.__fX.dispatchEvent(p,event);
}if(this.__fY){qx.event.Registration.fireEvent(this.__fY,bu,qx.event.type.Data,[bs]);
}},_fireSequenceEvent:function(h,i,j){var k=this.__gg();
var l=h.keyCode;
var event=qx.event.Registration.createEvent(i,qx.event.type.KeySequence,[h,k,j]);
this.__fX.dispatchEvent(k,event);
if(qx.core.Variant.isSet(bl,ba)){if(i==bm&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(l)&&!this._emulateKeyPress[l]){this._fireSequenceEvent(h,bk,j);
}}}if(this.__fY){qx.event.Registration.fireEvent(this.__fY,bu,qx.event.type.Data,[i]);
}},__gg:function(){var y=this.__fX.getHandler(qx.event.handler.Focus);
var z=y.getActive();
if(!z||z.offsetWidth==0){z=y.getFocus();
}if(!z||z.offsetWidth==0){z=this.__fX.getWindow().document.body;
}return z;
},_initKeyObserver:function(){this.__gc=qx.lang.Function.listener(this.__gh,this);
this.__gf=qx.lang.Function.listener(this.__gj,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ga,bi,this.__gc);
Event.addNativeListener(this.__ga,bm,this.__gc);
Event.addNativeListener(this.__ga,bk,this.__gf);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ga,bi,this.__gc);
Event.removeNativeListener(this.__ga,bm,this.__gc);
Event.removeNativeListener(this.__ga,bk,this.__gf);

for(var B in (this.__ge||{})){var A=this.__ge[B];
Event.removeNativeListener(A.target,bk,A.callback);
}delete (this.__ge);
},__gh:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bl,{"mshtml":function(V){V=window.event||V;
var Y=V.keyCode;
var W=0;
var X=V.type;
if(!(this.__gb[Y]==bm&&X==bm)){this._idealKeyHandler(Y,W,X,V);
}if(X==bm){if(this._isNonPrintableKeyCode(Y)||this._emulateKeyPress[Y]){this._idealKeyHandler(Y,W,bk,V);
}}this.__gb[Y]=X;
},"gecko":function(N){var R=this._keyCodeFix[N.keyCode]||N.keyCode;
var P=0;
var Q=N.type;
if(qx.bom.client.Platform.WIN){var O=R?this._keyCodeToIdentifier(R):this._charCodeToIdentifier(P);

if(!(this.__gb[O]==bm&&Q==bm)){this._idealKeyHandler(R,P,Q,N);
}this.__gb[O]=Q;
}else{this._idealKeyHandler(R,P,Q,N);
}this.__gi(N.target,Q,R);
},"webkit":function(c){var f=0;
var d=0;
var e=c.type;
if(qx.bom.client.Engine.VERSION<525.13){if(e==bi||e==bm){f=this._charCode2KeyCode[c.charCode]||c.keyCode;
}else{if(this._charCode2KeyCode[c.charCode]){f=this._charCode2KeyCode[c.charCode];
}else{d=c.charCode;
}}this._idealKeyHandler(f,d,e,c);
}else{f=c.keyCode;
if(!(this.__gb[f]==bm&&e==bm)){this._idealKeyHandler(f,d,e,c);
}if(e==bm){if(this._isNonPrintableKeyCode(f)||this._emulateKeyPress[f]){this._idealKeyHandler(f,d,bk,c);
}}this.__gb[f]=e;
}},"opera":function(x){this.__gd=x.keyCode;
this._idealKeyHandler(x.keyCode,0,x.type,x);
}})),__gi:qx.core.Variant.select(bl,{"gecko":function(cv,cw,cx){if(cw===bm&&(cx==33||cx==34||cx==38||cx==40)&&cv.type==bJ&&cv.tagName.toLowerCase()===bH&&cv.getAttribute(bN)!==bx){if(!this.__ge){this.__ge={};
}var cz=qx.core.ObjectRegistry.toHashCode(cv);

if(this.__ge[cz]){return;
}var self=this;
this.__ge[cz]={target:cv,callback:function(w){qx.bom.Event.stopPropagation(w);
self.__gj(w);
}};
var cy=qx.event.GlobalError.observeMethod(this.__ge[cz].callback);
qx.bom.Event.addNativeListener(cv,bk,cy);
}},"default":null}),__gj:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bl,{"mshtml":function(b){b=window.event||b;

if(this._charCode2KeyCode[b.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[b.keyCode],0,b.type,b);
}else{this._idealKeyHandler(0,b.keyCode,b.type,b);
}},"gecko":function(C){var F=this._keyCodeFix[C.keyCode]||C.keyCode;
var D=C.charCode;
var E=C.type;
this._idealKeyHandler(F,D,E,C);
},"webkit":function(cJ){if(qx.bom.client.Engine.VERSION<525.13){var cM=0;
var cK=0;
var cL=cJ.type;

if(cL==bi||cL==bm){cM=this._charCode2KeyCode[cJ.charCode]||cJ.keyCode;
}else{if(this._charCode2KeyCode[cJ.charCode]){cM=this._charCode2KeyCode[cJ.charCode];
}else{cK=cJ.charCode;
}}this._idealKeyHandler(cM,cK,cL,cJ);
}else{if(this._charCode2KeyCode[cJ.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cJ.keyCode],0,cJ.type,cJ);
}else{this._idealKeyHandler(0,cJ.keyCode,cJ.type,cJ);
}}},"opera":function(t){var v=t.keyCode;
var u=t.type;
if(v!=this.__gd){this._idealKeyHandler(0,this.__gd,u,t);
}else{if(this._keyCodeToIdentifierMap[t.keyCode]){this._idealKeyHandler(t.keyCode,0,t.type,t);
}else{this._idealKeyHandler(0,t.keyCode,t.type,t);
}}}})),_idealKeyHandler:function(cA,cB,cC,cD){var cE;
if(cA||(!cA&&!cB)){cE=this._keyCodeToIdentifier(cA);
this._fireSequenceEvent(cD,cC,cE);
}else{cE=this._charCodeToIdentifier(cB);
this._fireSequenceEvent(cD,bk,cE);
this._fireInputEvent(cD,cB);
}},_specialCharCodeMap:{8:cf,9:bT,13:bh,27:bM,32:bU},_emulateKeyPress:qx.core.Variant.select(bl,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:cb,17:bV,18:bb,20:bw,224:ce,37:cp,38:cm,39:bI,40:cn,33:bd,34:bG,35:bn,36:bR,45:bp,46:bB,112:bK,113:ch,114:br,115:bW,116:co,117:bt,118:ck,119:bq,120:ci,121:bF,122:cl,123:cc,144:bj,44:ct,145:bz,19:ca,91:qx.bom.client.Platform.MAC?bO:cj,92:cj,93:qx.bom.client.Platform.MAC?bO:by},_numpadToCharCode:{96:bg.charCodeAt(0),97:bA.charCodeAt(0),98:bE.charCodeAt(0),99:bY.charCodeAt(0),100:bL.charCodeAt(0),101:bS.charCodeAt(0),102:cd.charCodeAt(0),103:bv.charCodeAt(0),104:bD.charCodeAt(0),105:bf.charCodeAt(0),106:bC.charCodeAt(0),107:cu.charCodeAt(0),109:be.charCodeAt(0),110:cg.charCodeAt(0),111:bo.charCodeAt(0)},_charCodeA:cr.charCodeAt(0),_charCodeZ:cq.charCodeAt(0),_charCode0:bg.charCodeAt(0),_charCode9:bf.charCodeAt(0),_isNonPrintableKeyCode:function(a){return this._keyCodeToIdentifierMap[a]?true:false;
},_isIdentifiableKeyCode:function(g){if(g>=this._charCodeA&&g<=this._charCodeZ){return true;
}if(g>=this._charCode0&&g<=this._charCode9){return true;
}if(this._specialCharCodeMap[g]){return true;
}if(this._numpadToCharCode[g]){return true;
}if(this._isNonPrintableKeyCode(g)){return true;
}return false;
},_keyCodeToIdentifier:function(T){if(this._isIdentifiableKeyCode(T)){var U=this._numpadToCharCode[T];

if(U){return String.fromCharCode(U);
}return (this._keyCodeToIdentifierMap[T]||this._specialCharCodeMap[T]||String.fromCharCode(T));
}else{return bQ;
}},_charCodeToIdentifier:function(M){return this._specialCharCodeMap[M]||String.fromCharCode(M).toUpperCase();
},_identifierToKeyCode:function(S){return qx.event.handler.Keyboard._identifierToKeyCodeMap[S]||S.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gd=this.__fX=this.__fY=this.__ga=this.__gb=null;
},defer:function(cF,cG,cH){qx.event.Registration.addHandler(cF);
if(!cF._identifierToKeyCodeMap){cF._identifierToKeyCodeMap={};

for(var cI in cG._keyCodeToIdentifierMap){cF._identifierToKeyCodeMap[cG._keyCodeToIdentifierMap[cI]]=parseInt(cI,10);
}
for(var cI in cG._specialCharCodeMap){cF._identifierToKeyCodeMap[cG._specialCharCodeMap[cI]]=parseInt(cI,10);
}}
if(qx.core.Variant.isSet(bl,bc)){cG._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(bl,cs)){cG._keyCodeFix={12:cG._identifierToKeyCode(bj)};
}else if(qx.core.Variant.isSet(bl,bP)){if(qx.bom.client.Engine.VERSION<525.13){cG._charCode2KeyCode={63289:cG._identifierToKeyCode(bj),63276:cG._identifierToKeyCode(bd),63277:cG._identifierToKeyCode(bG),63275:cG._identifierToKeyCode(bn),63273:cG._identifierToKeyCode(bR),63234:cG._identifierToKeyCode(cp),63232:cG._identifierToKeyCode(cm),63235:cG._identifierToKeyCode(bI),63233:cG._identifierToKeyCode(cn),63272:cG._identifierToKeyCode(bB),63302:cG._identifierToKeyCode(bp),63236:cG._identifierToKeyCode(bK),63237:cG._identifierToKeyCode(ch),63238:cG._identifierToKeyCode(br),63239:cG._identifierToKeyCode(bW),63240:cG._identifierToKeyCode(co),63241:cG._identifierToKeyCode(bt),63242:cG._identifierToKeyCode(ck),63243:cG._identifierToKeyCode(bq),63244:cG._identifierToKeyCode(ci),63245:cG._identifierToKeyCode(bF),63246:cG._identifierToKeyCode(cl),63247:cG._identifierToKeyCode(cc),63248:cG._identifierToKeyCode(ct),3:cG._identifierToKeyCode(bh),12:cG._identifierToKeyCode(bj),13:cG._identifierToKeyCode(bh)};
}else{cG._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var u="qx.client",t="mouseup",s="click",r="mousedown",q="contextmenu",p="mousewheel",o="dblclick",n="mshtml",m="mouseover",l="mouseout",g="DOMMouseScroll",k="mousemove",j="on",f="mshtml|webkit|opera",e="useraction",i="gecko|webkit",h="qx.event.handler.Mouse";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__dS=d;
this.__dT=d.getWindow();
this.__dU=this.__dT.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dV:null,__dW:null,__dX:null,__dY:null,__ea:null,__dS:null,__dT:null,__dU:null,canHandleEvent:function(U,V){},registerEvent:qx.bom.client.System.IPHONE?
function(a,b,c){a[j+b]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(N,O,P){N[j+O]=undefined;
}:qx.lang.Function.returnNull,__eb:function(C,D,E){if(!E){E=C.target||C.srcElement;
}if(E&&E.nodeType){qx.event.Registration.fireEvent(E,D||C.type,D==p?qx.event.type.MouseWheel:qx.event.type.Mouse,[C,E,null,true,true]);
}qx.event.Registration.fireEvent(this.__dT,e,qx.event.type.Data,[D||C.type]);
},_initButtonObserver:function(){this.__dV=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dU,r,this.__dV);
Event.addNativeListener(this.__dU,t,this.__dV);
Event.addNativeListener(this.__dU,s,this.__dV);
Event.addNativeListener(this.__dU,o,this.__dV);
Event.addNativeListener(this.__dU,q,this.__dV);
},_initMoveObserver:function(){this.__dW=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dU,k,this.__dW);
Event.addNativeListener(this.__dU,m,this.__dW);
Event.addNativeListener(this.__dU,l,this.__dW);
},_initWheelObserver:function(){this.__dX=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var S=qx.core.Variant.isSet(u,f)?p:g;
var T=qx.core.Variant.isSet(u,n)?this.__dU:this.__dT;
Event.addNativeListener(T,S,this.__dX);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dU,r,this.__dV);
Event.removeNativeListener(this.__dU,t,this.__dV);
Event.removeNativeListener(this.__dU,s,this.__dV);
Event.removeNativeListener(this.__dU,o,this.__dV);
Event.removeNativeListener(this.__dU,q,this.__dV);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dU,k,this.__dW);
Event.removeNativeListener(this.__dU,m,this.__dW);
Event.removeNativeListener(this.__dU,l,this.__dW);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var Q=qx.core.Variant.isSet(u,f)?p:g;
var R=qx.core.Variant.isSet(u,n)?this.__dU:this.__dT;
Event.removeNativeListener(R,Q,this.__dX);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(y){this.__eb(y);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(J){var K=J.type;
var L=J.target||J.srcElement;
if(qx.core.Variant.isSet(u,i)){if(L&&L.nodeType==3){L=L.parentNode;
}}
if(this.__ec){this.__ec(J,K,L);
}
if(this.__ee){this.__ee(J,K,L);
}this.__eb(J,K,L);

if(this.__ed){this.__ed(J,K,L);
}
if(this.__ef){this.__ef(J,K,L);
}this.__dY=K;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(M){this.__eb(M,p);
}),__ec:qx.core.Variant.select(u,{"webkit":function(z,A,B){if(qx.bom.client.Engine.VERSION<530){if(A==q){this.__eb(z,t,B);
}}},"default":null}),__ed:qx.core.Variant.select(u,{"opera":function(F,G,H){if(G==t&&F.button==2){this.__eb(F,q,H);
}},"default":null}),__ee:qx.core.Variant.select(u,{"mshtml":function(v,w,x){if(w==t&&this.__dY==s){this.__eb(v,r,x);
}else if(w==o){this.__eb(v,s,x);
}},"default":null}),__ef:qx.core.Variant.select(u,{"mshtml":null,"default":function(W,X,Y){switch(X){case r:this.__ea=Y;
break;
case t:if(Y!==this.__ea){var ba=qx.dom.Hierarchy.getCommonParent(Y,this.__ea);
this.__eb(W,s,ba);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dS=this.__dT=this.__dU=this.__ea=null;
},defer:function(I){qx.event.Registration.addHandler(I);
}});
})();
(function(){var b="qx.event.handler.Capture";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(f,g,h){},unregisterEvent:function(c,d,e){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Ctrl",d="Shift",c="mousemove",b="move",a="mouseover",A="Alt",z="keyup",y="mouseup",x="dragend",w="on",v="mousedown",u="qxDraggable",t="drag",s="drop",r="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(Y){qx.core.Object.call(this);
this.__ig=Y;
this.__ih=Y.getWindow().document.documentElement;
this.__ig.addListener(this.__ih,v,this._onMouseDown,this);
this.__it();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__ig:null,__ih:null,__ii:null,__ij:null,__ik:null,__il:null,__im:null,__in:null,__io:null,__ip:null,__iq:false,__ir:0,__is:0,canHandleEvent:function(W,X){},registerEvent:function(ba,bb,bc){},unregisterEvent:function(bi,bj,bk){},addType:function(bl){this.__ik[bl]=true;
},addAction:function(P){this.__il[P]=true;
},supportsType:function(bh){return !!this.__ik[bh];
},supportsAction:function(B){return !!this.__il[B];
},getData:function(F){if(!this.__iA||!this.__ii){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__ik[F]){throw new Error("Unsupported data type: "+F+"!");
}
if(!this.__in[F]){this.__io=F;
this.__iv(q,this.__ij,this.__ii,false);
}
if(!this.__in[F]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__in[F]||null;
},getCurrentAction:function(){return this.__ip;
},addData:function(Q,R){this.__in[Q]=R;
},getCurrentType:function(){return this.__io;
},isSessionActive:function(){return this.__iq;
},__it:function(){this.__ik={};
this.__il={};
this.__im={};
this.__in={};
},__iu:function(){if(this.__ij==null){return;
}var E=this.__il;
var C=this.__im;
var D=null;

if(this.__iA){if(C.Shift&&C.Ctrl&&E.alias){D=k;
}else if(C.Shift&&C.Alt&&E.copy){D=j;
}else if(C.Shift&&E.move){D=b;
}else if(C.Alt&&E.alias){D=k;
}else if(C.Ctrl&&E.copy){D=j;
}else if(E.move){D=b;
}else if(E.copy){D=j;
}else if(E.alias){D=k;
}}
if(D!=this.__ip){this.__ip=D;
this.__iv(o,this.__ij,this.__ii,false);
}},__iv:function(I,J,K,L,M){var O=qx.event.Registration;
var N=O.createEvent(I,qx.event.type.Drag,[L,M]);

if(J!==K){N.setRelatedTarget(K);
}return O.dispatchEvent(J,N);
},__iw:function(bm){while(bm&&bm.nodeType==1){if(bm.getAttribute(u)==w){return bm;
}bm=bm.parentNode;
}return null;
},__ix:function(bg){while(bg&&bg.nodeType==1){if(bg.getAttribute(r)==w){return bg;
}bg=bg.parentNode;
}return null;
},__iy:function(){this.__ij=null;
this.__ig.removeListener(this.__ih,c,this._onMouseMove,this,true);
this.__ig.removeListener(this.__ih,y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__it();
},__iz:function(){if(this.__iq){this.__ig.removeListener(this.__ih,a,this._onMouseOver,this,true);
this.__ig.removeListener(this.__ih,h,this._onMouseOut,this,true);
this.__ig.removeListener(this.__ih,g,this._onKeyDown,this,true);
this.__ig.removeListener(this.__ih,z,this._onKeyUp,this,true);
this.__iv(x,this.__ij,this.__ii,false);
this.__iq=false;
}this.__iA=false;
this.__ii=null;
this.__iy();
},__iA:false,_onWindowBlur:function(e){this.__iz();
},_onKeyDown:function(e){var S=e.getKeyIdentifier();

switch(S){case A:case f:case d:if(!this.__im[S]){this.__im[S]=true;
this.__iu();
}}},_onKeyUp:function(e){var G=e.getKeyIdentifier();

switch(G){case A:case f:case d:if(this.__im[G]){this.__im[G]=false;
this.__iu();
}}},_onMouseDown:function(e){if(this.__iq){return;
}var H=this.__iw(e.getTarget());

if(H){this.__ir=e.getDocumentLeft();
this.__is=e.getDocumentTop();
this.__ij=H;
this.__ig.addListener(this.__ih,c,this._onMouseMove,this,true);
this.__ig.addListener(this.__ih,y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__iA){this.__iv(s,this.__ii,this.__ij,false,e);
}if(this.__iq){e.stopPropagation();
}this.__iz();
},_onMouseMove:function(e){if(this.__iq){if(!this.__iv(t,this.__ij,this.__ii,true,e)){this.__iz();
}}else{if(Math.abs(e.getDocumentLeft()-this.__ir)>3||Math.abs(e.getDocumentTop()-this.__is)>3){if(this.__iv(n,this.__ij,this.__ii,true,e)){this.__iq=true;
this.__ig.addListener(this.__ih,a,this._onMouseOver,this,true);
this.__ig.addListener(this.__ih,h,this._onMouseOut,this,true);
this.__ig.addListener(this.__ih,g,this._onKeyDown,this,true);
this.__ig.addListener(this.__ih,z,this._onKeyUp,this,true);
var bf=this.__im;
bf.Ctrl=e.isCtrlPressed();
bf.Shift=e.isShiftPressed();
bf.Alt=e.isAltPressed();
this.__iu();
}else{this.__iv(x,this.__ij,this.__ii,false);
this.__iy();
}}}},_onMouseOver:function(e){var bd=e.getTarget();
var be=this.__ix(bd);

if(be&&be!=this.__ii){this.__iA=this.__iv(m,be,this.__ij,true,e);
this.__ii=be;
this.__iu();
}},_onMouseOut:function(e){var V=this.__ix(e.getTarget());
var U=this.__ix(e.getRelatedTarget());

if(V&&V!==U&&V==this.__ii){this.__iv(l,this.__ii,U,false,e);
this.__ii=null;
this.__iA=false;
qx.event.Timer.once(this.__iu,this,0);
}}},destruct:function(){this.__ij=this.__ii=this.__ig=this.__ih=this.__ik=this.__il=this.__im=this.__in=null;
},defer:function(T){qx.event.Registration.addHandler(T);
}});
})();
(function(){var h="-",g="qx.event.handler.Element";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){qx.core.Object.call(this);
this._manager=n;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(v,w){},registerEvent:function(a,b,c){var f=qx.core.ObjectRegistry.toHashCode(a);
var d=f+h+b;
var e=qx.lang.Function.listener(this._onNative,this,d);
qx.bom.Event.addNativeListener(a,b,e);
this._registeredEvents[d]={element:a,type:b,listener:e};
},unregisterEvent:function(o,p,q){var t=this._registeredEvents;

if(!t){return;
}var u=qx.core.ObjectRegistry.toHashCode(o);
var r=u+h+p;
var s=this._registeredEvents[r];

if(s){qx.bom.Event.removeNativeListener(o,p,s.listener);
}delete this._registeredEvents[r];
},_onNative:qx.event.GlobalError.observeMethod(function(j,k){var m=this._registeredEvents;

if(!m){return;
}var l=m[k];
qx.event.Registration.fireNonBubblingEvent(l.element,l.type,qx.event.type.Native,[j]);
})},destruct:function(){var x;
var y=this._registeredEvents;

for(var z in y){x=y[z];
qx.bom.Event.removeNativeListener(x.element,x.type,x.listener);
}this._manager=this._registeredEvents=null;
},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var e="qx.event.handler.Appear",d="disappear",c="appear";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this.__bM=k;
this.__bN={};
qx.event.handler.Appear.__bO[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__bO:{},refresh:function(){var w=this.__bO;

for(var x in w){w[x].refresh();
}}},members:{__bM:null,__bN:null,canHandleEvent:function(a,b){},registerEvent:function(l,m,n){var o=qx.core.ObjectRegistry.toHashCode(l)+m;
var p=this.__bN;

if(p&&!p[o]){p[o]=l;
l.$$displayed=l.offsetWidth>0;
}},unregisterEvent:function(r,s,t){var u=qx.core.ObjectRegistry.toHashCode(r)+s;
var v=this.__bN;

if(!v){return;
}
if(v[u]){delete v[u];
}},refresh:function(){var i=this.__bN;
var j;

for(var h in i){j=i[h];
var f=j.offsetWidth>0;

if((!!j.$$displayed)!==f){j.$$displayed=f;
var g=qx.event.Registration.createEvent(f?c:d);
this.__bM.dispatchEvent(j,g);
}}}},destruct:function(){this.__bM=this.__bN=null;
delete qx.event.handler.Appear.__bO[this.$$hash];
},defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var o="mshtml",n="",m="qx.client",k=">",h=" ",g="<",f="='",e="none",d="qx.bom.Element",c="' ",a="div",b="></";
qx.Class.define(d,{statics:{__jt:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__ju:{},getHelperElement:function(z){if(!z){z=window;
}var B=z.location.href;

if(!qx.bom.Element.__ju[B]){var A=qx.bom.Element.__ju[B]=z.document.createElement(a);
if(qx.bom.client.Engine.WEBKIT){A.style.display=e;
z.document.body.appendChild(A);
}}return qx.bom.Element.__ju[B];
},create:function(name,G,H){if(!H){H=window;
}
if(!name){throw new Error("The tag name is missing!");
}var J=this.__jt;
var I=n;

for(var L in G){if(J[L]){I+=L+f+G[L]+c;
}}var M;
if(I!=n){if(qx.bom.client.Engine.MSHTML){M=H.document.createElement(g+name+h+I+k);
}else{var K=qx.bom.Element.getHelperElement(H);
K.innerHTML=g+name+h+I+b+name+k;
M=K.firstChild;
}}else{M=H.document.createElement(name);
}
for(var L in G){if(!J[L]){qx.bom.element.Attribute.set(M,L,G[L]);
}}return M;
},empty:function(bf){return bf.innerHTML=n;
},addListener:function(v,w,x,self,y){return qx.event.Registration.addListener(v,w,x,self,y);
},removeListener:function(p,q,r,self,s){return qx.event.Registration.removeListener(p,q,r,self,s);
},removeListenerById:function(ba,bb){return qx.event.Registration.removeListenerById(ba,bb);
},hasListener:function(D,E,F){return qx.event.Registration.hasListener(D,E,F);
},focus:function(bg){qx.event.Registration.getManager(bg).getHandler(qx.event.handler.Focus).focus(bg);
},blur:function(be){qx.event.Registration.getManager(be).getHandler(qx.event.handler.Focus).blur(be);
},activate:function(bc){qx.event.Registration.getManager(bc).getHandler(qx.event.handler.Focus).activate(bc);
},deactivate:function(C){qx.event.Registration.getManager(C).getHandler(qx.event.handler.Focus).deactivate(C);
},capture:function(t,u){qx.event.Registration.getManager(t).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(t,u);
},releaseCapture:function(bd){qx.event.Registration.getManager(bd).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(bd);
},clone:function(N,O){var R;

if(O||(qx.core.Variant.isSet(m,o)&&!qx.xml.Document.isXmlDocument(N))){var V=qx.event.Registration.getManager(N);
var P=qx.dom.Hierarchy.getDescendants(N);
P.push(N);
}if(qx.core.Variant.isSet(m,o)){for(var i=0,l=P.length;i<l;i++){V.toggleAttachedEvents(P[i],false);
}}var R=N.cloneNode(true);
if(qx.core.Variant.isSet(m,o)){for(var i=0,l=P.length;i<l;i++){V.toggleAttachedEvents(P[i],true);
}}if(O===true){var Y=qx.dom.Hierarchy.getDescendants(R);
Y.push(R);
var Q,T,X,S;

for(var i=0,W=P.length;i<W;i++){X=P[i];
Q=V.serializeListeners(X);

if(Q.length>0){T=Y[i];

for(var j=0,U=Q.length;j<U;j++){S=Q[j];
V.addListener(T,S.type,S.handler,S.self,S.capture);
}}}}return R;
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
(function(){var bf="qx.client",be="blur",bd="focus",bc="mousedown",bb="on",ba="mouseup",Y="DOMFocusOut",X="DOMFocusIn",W="selectstart",V="onmousedown",bz="onfocusout",by="onfocusin",bx="onmouseup",bw="onselectstart",bv="draggesture",bu="qx.event.handler.Focus",bt="_applyFocus",bs="deactivate",br="textarea",bq="_applyActive",bm="input",bn="focusin",bk="qxSelectable",bl="tabIndex",bi="off",bj="activate",bg="mshtml",bh="focusout",bo="qxKeepFocus",bp="qxKeepActive";
qx.Class.define(bu,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(s){qx.core.Object.call(this);
this._manager=s;
this._window=s.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bq,nullable:true},focus:{apply:bt,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__iD:null,__iE:null,__iF:null,__iG:null,__iH:null,__iI:null,__iJ:null,__iK:null,__iL:null,__iM:null,canHandleEvent:function(S,T){},registerEvent:function(J,K,L){},unregisterEvent:function(bL,bM,bN){},focus:function(U){if(qx.core.Variant.isSet(bf,bg)){window.setTimeout(function(){try{U.focus();
}catch(a){}},0);
}else{try{U.focus();
}catch(Q){}}this.setFocus(U);
this.setActive(U);
},activate:function(bJ){this.setActive(bJ);
},blur:function(bK){try{bK.blur();
}catch(w){}
if(this.getActive()===bK){this.resetActive();
}
if(this.getFocus()===bK){this.resetFocus();
}},deactivate:function(R){if(this.getActive()===R){this.resetActive();
}},tryActivate:function(bF){var bG=this.__jc(bF);

if(bG){this.setActive(bG);
}},__iN:function(l,m,n,o){var q=qx.event.Registration;
var p=q.createEvent(n,qx.event.type.Focus,[l,m,o]);
q.dispatchEvent(l,p);
},_windowFocused:true,__iO:function(){if(this._windowFocused){this._windowFocused=false;
this.__iN(this._window,null,be,false);
}},__iP:function(){if(!this._windowFocused){this._windowFocused=true;
this.__iN(this._window,null,bd,false);
}},_initObserver:qx.core.Variant.select(bf,{"gecko":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iF=qx.lang.Function.listener(this.__iU,this);
this.__iG=qx.lang.Function.listener(this.__iT,this);
this.__iH=qx.lang.Function.listener(this.__iQ,this);
this._document.addEventListener(bc,this.__iD,true);
this._document.addEventListener(ba,this.__iE,true);
this._window.addEventListener(bd,this.__iF,true);
this._window.addEventListener(be,this.__iG,true);
this._window.addEventListener(bv,this.__iH,true);
},"mshtml":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iJ=qx.lang.Function.listener(this.__iR,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this.__iI=qx.lang.Function.listener(this.__iY,this);
this._document.attachEvent(V,this.__iD);
this._document.attachEvent(bx,this.__iE);
this._document.attachEvent(by,this.__iJ);
this._document.attachEvent(bz,this.__iK);
this._document.attachEvent(bw,this.__iI);
},"webkit":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this.__iF=qx.lang.Function.listener(this.__iU,this);
this.__iG=qx.lang.Function.listener(this.__iT,this);
this.__iI=qx.lang.Function.listener(this.__iY,this);
this._document.addEventListener(bc,this.__iD,true);
this._document.addEventListener(ba,this.__iE,true);
this._document.addEventListener(W,this.__iI,false);
this._window.addEventListener(Y,this.__iK,true);
this._window.addEventListener(bd,this.__iF,true);
this._window.addEventListener(be,this.__iG,true);
},"opera":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iJ=qx.lang.Function.listener(this.__iR,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this._document.addEventListener(bc,this.__iD,true);
this._document.addEventListener(ba,this.__iE,true);
this._window.addEventListener(X,this.__iJ,true);
this._window.addEventListener(Y,this.__iK,true);
}}),_stopObserver:qx.core.Variant.select(bf,{"gecko":function(){this._document.removeEventListener(bc,this.__iD,true);
this._document.removeEventListener(ba,this.__iE,true);
this._window.removeEventListener(bd,this.__iF,true);
this._window.removeEventListener(be,this.__iG,true);
this._window.removeEventListener(bv,this.__iH,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,V,this.__iD);
qx.bom.Event.removeNativeListener(this._document,bx,this.__iE);
qx.bom.Event.removeNativeListener(this._document,by,this.__iJ);
qx.bom.Event.removeNativeListener(this._document,bz,this.__iK);
qx.bom.Event.removeNativeListener(this._document,bw,this.__iI);
},"webkit":function(){this._document.removeEventListener(bc,this.__iD,true);
this._document.removeEventListener(W,this.__iI,false);
this._window.removeEventListener(X,this.__iJ,true);
this._window.removeEventListener(Y,this.__iK,true);
this._window.removeEventListener(bd,this.__iF,true);
this._window.removeEventListener(be,this.__iG,true);
},"opera":function(){this._document.removeEventListener(bc,this.__iD,true);
this._window.removeEventListener(X,this.__iJ,true);
this._window.removeEventListener(Y,this.__iK,true);
this._window.removeEventListener(bd,this.__iF,true);
this._window.removeEventListener(be,this.__iG,true);
}}),__iQ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){if(!this.__jd(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__iR:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){this.__iP();
var O=e.srcElement;
var N=this.__jb(O);

if(N){this.setFocus(N);
}this.tryActivate(O);
},"opera":function(e){var bI=e.target;

if(bI==this._document||bI==this._window){this.__iP();

if(this.__iL){this.setFocus(this.__iL);
delete this.__iL;
}
if(this.__iM){this.setActive(this.__iM);
delete this.__iM;
}}else{this.setFocus(bI);
this.tryActivate(bI);
if(!this.__jd(bI)){bI.selectionStart=0;
bI.selectionEnd=0;
}}},"default":null})),__iS:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){if(!e.toElement){this.__iO();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bE=e.target;

if(bE===this.getFocus()){this.resetFocus();
}
if(bE===this.getActive()){this.resetActive();
}},"opera":function(e){var B=e.target;

if(B==this._document){this.__iO();
this.__iL=this.getFocus();
this.__iM=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(B===this.getFocus()){this.resetFocus();
}
if(B===this.getActive()){this.resetActive();
}}},"default":null})),__iT:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__iO();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__iO();
this.__iL=this.getFocus();
this.__iM=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__iU:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){var bH=e.target;

if(bH===this._window||bH===this._document){this.__iP();
bH=this._body;
}this.setFocus(bH);
this.tryActivate(bH);
},"webkit":function(e){var M=e.target;

if(M===this._window||M===this._document){this.__iP();

if(this.__iL){this.setFocus(this.__iL);
delete this.__iL;
}
if(this.__iM){this.setActive(this.__iM);
delete this.__iM;
}}else{this.setFocus(M);
this.tryActivate(M);
}},"default":null})),__iV:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){var bA=this.__jb(e.target);

if(!bA){qx.bom.Event.preventDefault(e);
}else if(bA===this._body){this.setFocus(bA);
}},"mshtml":function(e){var y=e.srcElement;
var x=this.__jb(y);

if(x){if(!this.__jd(y)){y.unselectable=bb;
try{document.selection.empty();
}catch(e){}try{x.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__jd(y)){y.unselectable=bb;
}}},"webkit":function(e){var A=e.target;
var z=this.__jb(A);

if(z){this.setFocus(z);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var I=e.target;
var G=this.__jb(I);

if(!this.__jd(I)){qx.bom.Event.preventDefault(e);
if(G){var H=this.getFocus();

if(H&&H.selectionEnd){H.selectionStart=0;
H.selectionEnd=0;
H.blur();
}if(G){this.setFocus(G);
}}}else if(G){this.setFocus(G);
}},"default":null})),__iW:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){var r=e.srcElement;

if(r.unselectable){r.unselectable=bi;
}this.tryActivate(this.__iX(r));
},"gecko":function(e){var t=e.target;

while(t&&t.offsetWidth===undefined){t=t.parentNode;
}
if(t){this.tryActivate(t);
}},"webkit|opera":function(e){this.tryActivate(this.__iX(e.target));
},"default":null})),__iX:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml|webkit":function(h){var i=this.getFocus();

if(i&&h!=i&&(i.nodeName.toLowerCase()===bm||i.nodeName.toLowerCase()===br)){h=i;
}return h;
},"default":function(F){return F;
}})),__iY:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml|webkit":function(e){var P=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__jd(P)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ja:function(b){var c=qx.bom.element.Attribute.get(b,bl);

if(c>=1){return true;
}var d=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(c>=0&&d[b.tagName]){return true;
}return false;
},__jb:function(bB){while(bB&&bB.nodeType===1){if(bB.getAttribute(bo)==bb){return null;
}
if(this.__ja(bB)){return bB;
}bB=bB.parentNode;
}return this._body;
},__jc:function(bC){var bD=bC;

while(bC&&bC.nodeType===1){if(bC.getAttribute(bp)==bb){return null;
}bC=bC.parentNode;
}return bD;
},__jd:function(u){while(u&&u.nodeType===1){var v=u.getAttribute(bk);

if(v!=null){return v===bb;
}u=u.parentNode;
}return true;
},_applyActive:function(j,k){if(k){this.__iN(k,j,bs,true);
}
if(j){this.__iN(j,k,bj,true);
}},_applyFocus:function(f,g){if(g){this.__iN(g,f,bh,true);
}
if(f){this.__iN(f,g,bn,true);
}if(g){this.__iN(g,f,be,false);
}
if(f){this.__iN(f,g,bd,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__je=null;
},defer:function(C){qx.event.Registration.addHandler(C);
var D=C.FOCUSABLE_ELEMENTS;

for(var E in D){D[E.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var n="",m="undefined",l="qx.client",k="readOnly",j="accessKey",i="qx.bom.element.Attribute",h="rowSpan",g="vAlign",f="className",e="textContent",C="'",B="htmlFor",A="longDesc",z="cellSpacing",y="frameBorder",x="='",w="useMap",v="innerText",u="innerHTML",t="tabIndex",r="dateTime",s="maxLength",p="mshtml",q="cellPadding",o="colSpan";
qx.Class.define(i,{statics:{__gk:{names:{"class":f,"for":B,html:u,text:qx.core.Variant.isSet(l,p)?v:e,colspan:o,rowspan:h,valign:g,datetime:r,accesskey:j,tabindex:t,maxlength:s,readonly:k,longdesc:A,cellpadding:q,cellspacing:z,frameborder:y,usemap:w},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:n,className:n,innerHTML:n,innerText:n,textContent:n,htmlFor:n,tabIndex:0,maxLength:qx.core.Variant.select(l,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(a){var b=[];
var d=this.__gk.runtime;

for(var c in a){if(!d[c]){b.push(c,x,a[c],C);
}}return b.join(n);
},get:qx.core.Variant.select(l,{"mshtml":function(K,name){var M=this.__gk;
var L;
name=M.names[name]||name;
if(M.original[name]){L=K.getAttribute(name,2);
}else if(M.property[name]){L=K[name];

if(typeof M.propertyDefault[name]!==m&&L==M.propertyDefault[name]){if(typeof M.bools[name]===m){return null;
}else{return L;
}}}else{L=K.getAttribute(name);
}if(M.bools[name]){return !!L;
}return L;
},"default":function(E,name){var G=this.__gk;
var F;
name=G.names[name]||name;
if(G.property[name]){F=E[name];

if(typeof G.propertyDefault[name]!==m&&F==G.propertyDefault[name]){if(typeof G.bools[name]===m){return null;
}else{return F;
}}}else{F=E.getAttribute(name);
}if(G.bools[name]){return !!F;
}return F;
}}),set:function(H,name,I){var J=this.__gk;
name=J.names[name]||name;
if(J.bools[name]){I=!!I;
}if(J.property[name]&&(!(H[name]===undefined)||J.qxProperties[name])){if(I==null){if(J.removeableProperties[name]){H.removeAttribute(name);
return;
}else if(typeof J.propertyDefault[name]!==m){I=J.propertyDefault[name];
}}H[name]=I;
}else{if(I===true){H.setAttribute(name,name);
}else if(I===false||I===null){H.removeAttribute(name);
}else{H.setAttribute(name,I);
}}},reset:function(D,name){this.set(D,name,null);
}}});
})();
(function(){var i="left",h="right",g="middle",f="qx.client",e="dblclick",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(m,n,o,p,q){qx.event.type.Dom.prototype.init.call(this,m,n,o,p,q);

if(!o){this._relatedTarget=qx.bom.Event.getRelatedTarget(m);
}return this;
},_cloneNativeEvent:function(j,k){var k=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,j,k);
k.button=j.button;
k.clientX=j.clientX;
k.clientY=j.clientY;
k.pageX=j.pageX;
k.pageY=j.pageY;
k.screenX=j.screenX;
k.screenY=j.screenY;
k.wheelDelta=j.wheelDelta;
k.detail=j.detail;
k.srcElement=j.srcElement;
return k;
},__jq:qx.core.Variant.select(f,{"mshtml":{1:i,2:h,4:g},"default":{0:i,2:h,1:g}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case d:case e:return i;
case b:return h;
default:return this.__jq[this._native.button]||c;
}},isLeftPressed:function(){return this.getButton()===i;
},isMiddlePressed:function(){return this.getButton()===g;
},isRightPressed:function(){return this.getButton()===h;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(l);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(r);
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
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){if(qx.bom.client.Platform.MAC){return -(this._native.wheelDelta/1200);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.bom.client.Platform.WIN){var d=120;
if(qx.bom.client.Engine.VERSION==533.16){d=1200;
}}else{d=40;
if(qx.bom.client.Engine.VERSION==533.16||qx.bom.client.Engine.VERSION==533.17){d=1200;
}}return -(this._native.wheelDelta/d);
}}})}});
})();
(function(){var d="qx.client",c="qx.bom.Viewport";
qx.Class.define(c,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(k){if(qx.bom.client.Engine.VERSION<9.5){return (k||window).document.body.clientWidth;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientWidth:l.body.clientWidth;
}},"webkit":function(s){if(qx.bom.client.Engine.VERSION<523.15){return (s||window).innerWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"default":function(g){var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(e){if(qx.bom.client.Engine.VERSION<9.5){return (e||window).document.body.clientHeight;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}},"webkit":function(o){if(qx.bom.client.Engine.VERSION<523.15){return (o||window).innerHeight;
}else{var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientHeight:p.body.clientHeight;
}},"default":function(q){var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientHeight:r.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(a){var b=(a||window).document;
return b.documentElement.scrollLeft||b.body.scrollLeft;
},"default":function(n){return (n||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(i){var j=(i||window).document;
return j.documentElement.scrollTop||j.body.scrollTop;
},"default":function(m){return (m||window).pageYOffset;
}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(k){if(qx.bom.client.Engine.VERSION>=8){return (k||window).document.documentMode===5;
}else{return (k||window).document.compatMode!==f;
}},"webkit":function(m){if(document.compatMode===undefined){var n=(m||window).document.createElement(a);
n.style.cssText=e;
return n.style.width===c?true:false;
}else{return (m||window).document.compatMode!==f;
}},"default":function(l){return (l||window).document.compatMode!==f;
}}),isStandardMode:function(j){return !this.isQuirksMode(j);
},getWidth:function(g){var h=(g||window).document;
var i=qx.bom.Viewport.getWidth(g);
var scroll=this.isStandardMode(g)?h.documentElement.scrollWidth:h.body.scrollWidth;
return Math.max(scroll,i);
},getHeight:function(o){var p=(o||window).document;
var q=qx.bom.Viewport.getHeight(o);
var scroll=this.isStandardMode(o)?p.documentElement.scrollHeight:p.body.scrollHeight;
return Math.max(scroll,q);
}}});
})();
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__ko:function(z){var A=navigator.userAgent;
var C=new RegExp(s+z+d);
var D=A.match(C);

if(!D){return;
}var name=D[1].toLowerCase();
var B=D[3];
if(A.match(/Version(\/| )([0-9]+\.[0-9])/)){B=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(A.indexOf(a)!==-1||A.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
B=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=B;
this.VERSION=parseFloat(B,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(G){G.__ko(o);
},"gecko":function(E){E.__ko(k);
},"mshtml":function(F){F.__ko(v);
},"opera":function(y){y.__ko(p);
}})});
})();
(function(){var N="qx.client",M="qx.dom.Hierarchy",L="previousSibling",K="*",J="nextSibling",I="parentNode";
qx.Class.define(M,{statics:{getNodeIndex:function(O){var P=0;

while(O&&(O=O.previousSibling)){P++;
}return P;
},getElementIndex:function(D){var E=0;
var F=qx.dom.Node.ELEMENT;

while(D&&(D=D.previousSibling)){if(D.nodeType==F){E++;
}}return E;
},getNextElementSibling:function(k){while(k&&(k=k.nextSibling)&&!qx.dom.Node.isElement(k)){continue;
}return k||null;
},getPreviousElementSibling:function(T){while(T&&(T=T.previousSibling)&&!qx.dom.Node.isElement(T)){continue;
}return T||null;
},contains:qx.core.Variant.select(N,{"webkit|mshtml|opera":function(t,u){if(qx.dom.Node.isDocument(t)){var v=qx.dom.Node.getDocument(u);
return t&&v==t;
}else if(qx.dom.Node.isDocument(u)){return false;
}else{return t.contains(u);
}},"gecko":function(Q,R){return !!(Q.compareDocumentPosition(R)&16);
},"default":function(a,b){while(b){if(a==b){return true;
}b=b.parentNode;
}return false;
}}),isRendered:function(U){if(!U.offsetParent){return false;
}var V=U.ownerDocument||U.document;
if(V.body.contains){return V.body.contains(U);
}if(V.compareDocumentPosition){return !!(V.compareDocumentPosition(U)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(A,B){return this.contains(B,A);
},getCommonParent:qx.core.Variant.select(N,{"mshtml|opera":function(o,p){if(o===p){return o;
}
while(o&&qx.dom.Node.isElement(o)){if(o.contains(p)){return o;
}o=o.parentNode;
}return null;
},"default":function(e,f){if(e===f){return e;
}var g={};
var j=qx.core.ObjectRegistry;
var i,h;

while(e||f){if(e){i=j.toHashCode(e);

if(g[i]){return g[i];
}g[i]=e;
e=e.parentNode;
}
if(f){h=j.toHashCode(f);

if(g[h]){return g[h];
}g[h]=f;
f=f.parentNode;
}}return null;
}}),getAncestors:function(n){return this._recursivelyCollect(n,I);
},getChildElements:function(c){c=c.firstChild;

if(!c){return [];
}var d=this.getNextSiblings(c);

if(c.nodeType===1){d.unshift(c);
}return d;
},getDescendants:function(S){return qx.lang.Array.fromCollection(S.getElementsByTagName(K));
},getFirstDescendant:function(l){l=l.firstChild;

while(l&&l.nodeType!=1){l=l.nextSibling;
}return l;
},getLastDescendant:function(C){C=C.lastChild;

while(C&&C.nodeType!=1){C=C.previousSibling;
}return C;
},getPreviousSiblings:function(H){return this._recursivelyCollect(H,L);
},getNextSiblings:function(m){return this._recursivelyCollect(m,J);
},_recursivelyCollect:function(x,y){var z=[];

while(x=x[y]){if(x.nodeType==1){z.push(x);
}}return z;
},getSiblings:function(G){return this.getPreviousSiblings(G).reverse().concat(this.getNextSiblings(G));
},isEmpty:function(w){w=w.firstChild;

while(w){if(w.nodeType===qx.dom.Node.ELEMENT||w.nodeType===qx.dom.Node.TEXT){return false;
}w=w.nextSibling;
}return true;
},cleanWhitespace:function(q){var r=q.firstChild;

while(r){var s=r.nextSibling;

if(r.nodeType==3&&!/\S/.test(r.nodeValue)){q.removeChild(r);
}r=s;
}}}});
})();
(function(){var b="qx.client",a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(e,f){qx.event.type.Event.prototype.init.call(this,true,e);

if(f){this._native=f.getNativeEvent()||null;
this._originalTarget=f.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(l){var m=qx.event.type.Event.prototype.clone.call(this,l);
m._native=this._native;
return m;
},getDocumentLeft:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var i=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(i);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var d=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(d);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(g){this.getManager().addType(g);
},addAction:function(n){this.getManager().addAction(n);
},supportsType:function(c){return this.getManager().supportsType(c);
},supportsAction:function(o){return this.getManager().supportsAction(o);
},addData:function(j,k){this.getManager().addData(j,k);
},getData:function(h){return this.getManager().getData(h);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(p){qx.core.Object.call(this);
this.setEnabled(false);

if(p!=null){this.setInterval(p);
}var self=this;
this.__dP=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(i,j,k){var l=new qx.event.Timer(k);
l.__dQ=i;
l.addListener(h,function(e){l.stop();
i.call(j,e);
l.dispose();
j=null;
},j);
l.start();
return l;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__dR:null,__dP:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(r,s){if(s){window.clearInterval(this.__dR);
this.__dR=null;
}else if(r){this.__dR=window.setInterval(this.__dP,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(q){this.setInterval(q);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(m){this.stop();
this.startWith(m);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__dR){window.clearInterval(this.__dR);
}this.__dR=this.__dP=null;
}});
})();
(function(){var j="losecapture",i="qx.client",h="blur",g="focus",f="click",e="qx.event.dispatch.MouseCapture",d="capture",c="scroll";
qx.Class.define(e,{extend:qx.event.dispatch.AbstractBubbling,construct:function(n,o){qx.event.dispatch.AbstractBubbling.call(this,n);
this.__fD=n.getWindow();
this.__fE=o;
n.addListener(this.__fD,h,this.releaseCapture,this);
n.addListener(this.__fD,g,this.releaseCapture,this);
n.addListener(this.__fD,c,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fE:null,__fF:null,__fG:true,__fD:null,_getParent:function(t){return t.parentNode;
},canDispatchEvent:function(k,event,l){return (this.__fF&&this.__fH[l]);
},dispatchEvent:function(p,event,q){if(q==f){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fG||!qx.dom.Hierarchy.contains(this.__fF,p)){p=this.__fF;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,p,event,q);
},__fH:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(r,s){var s=s!==false;

if(this.__fF===r&&this.__fG==s){return;
}
if(this.__fF){this.releaseCapture();
}this.nativeSetCapture(r,s);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(r,j,function(){qx.bom.Event.removeNativeListener(r,j,arguments.callee);
self.releaseCapture();
});
}this.__fG=s;
this.__fF=r;
this.__fE.fireEvent(r,d,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fF;
},releaseCapture:function(){var u=this.__fF;

if(!u){return;
}this.__fF=null;
this.__fE.fireEvent(u,j,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(u);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(i,{"mshtml":function(a,b){a.setCapture(b!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fF=this.__fD=this.__fE=null;
},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
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
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(F){var G=qx.xml.Document.create();
G.loadXML(F);
return G;
},"default":function(D){var E=new DOMParser();
return E.parseFromString(D,e);
}})},defer:function(z){if(qx.core.Variant.isSet(r,p)){var A=[a,j];
var B=[c,g];

for(var i=0,l=A.length;i<l;i++){try{new ActiveXObject(A[i]);
new ActiveXObject(B[i]);
}catch(C){continue;
}z.DOMDOC=A[i];
z.XMLHTTP=B[i];
break;
}}}});
})();
(function(){var l="'>",k="[",h=", ",g="</span>",f="<span class='type-",e="</span> ",d="}",c="",b="]",a="{",I="map",H="<span class='object'>",G="]:",F="&gt;",E="<span class='object' title='Object instance with hash code: ",D="string",C="level-",B="0",A="&lt;",z="<span class='offset'>",s=":",t="qx.log.appender.Util",q="&amp;",r="&#39;",o="DIV",p="<span>",m="&quot;",n="<span class='type-key'>",u="</span>:<span class='type-",v="</span>: ",x=" ",w="]</span>: ",y="?";
qx.Class.define(t,{statics:{toHtml:function(R){var bc=[];
var Y,bb,T,V;
bc.push(z,this.formatOffset(R.offset,6),e);

if(R.object){var S=R.win.qx.core.ObjectRegistry.fromHashCode(R.object);

if(S){bc.push(E+S.$$hash+l,S.classname,k,S.$$hash,w);
}}else if(R.clazz){bc.push(H+R.clazz.classname,v);
}var U=R.items;

for(var i=0,ba=U.length;i<ba;i++){Y=U[i];
bb=Y.text;

if(bb instanceof Array){var V=[];

for(var j=0,X=bb.length;j<X;j++){T=bb[j];

if(typeof T===D){V.push(p+this.escapeHTML(T)+g);
}else if(T.key){V.push(n+T.key+u+T.type+l+this.escapeHTML(T.text)+g);
}else{V.push(f+T.type+l+this.escapeHTML(T.text)+g);
}}bc.push(f+Y.type+l);

if(Y.type===I){bc.push(a,V.join(h),d);
}else{bc.push(k,V.join(h),b);
}bc.push(g);
}else{bc.push(f+Y.type+l+this.escapeHTML(bb)+e);
}}var W=document.createElement(o);
W.innerHTML=bc.join(c);
W.className=C+R.level;
return W;
},formatOffset:function(N,length){var Q=N.toString();
var O=(length||6)-Q.length;
var P=c;

for(var i=0;i<O;i++){P+=B;
}return P+Q;
},escapeHTML:function(K){return String(K).replace(/[<>&"']/g,this.__tA);
},__tA:function(L){var M={"<":A,">":F,"&":q,"'":r,'"':m};
return M[L]||y;
},toText:function(J){return this.toTextArray(J).join(x);
},toTextArray:function(bd){var bl=[];
bl.push(this.formatOffset(bd.offset,6));

if(bd.object){var be=bd.win.qx.core.ObjectRegistry.fromHashCode(bd.object);

if(be){bl.push(be.classname+k+be.$$hash+G);
}}else if(bd.clazz){bl.push(bd.clazz.classname+s);
}var bf=bd.items;
var bi,bk;

for(var i=0,bj=bf.length;i<bj;i++){bi=bf[i];
bk=bi.text;

if(bk instanceof Array){var bg=[];

for(var j=0,bh=bk.length;j<bh;j++){bg.push(bk[j].text);
}
if(bi.type===I){bl.push(a,bg.join(h),d);
}else{bl.push(k,bg.join(h),b);
}}else{bl.push(bk);
}}return bl;
}}});
})();
(function(){var g="debug",f="log",e="qx.log.appender.Native",d="qx.client";
qx.Class.define(e,{statics:{process:qx.core.Variant.select(d,{"gecko":function(h){if(window.console&&console.firebug){console[h.level].call(console,qx.log.appender.Util.toText(h));
}},"mshtml":function(a){if(window.console){var c=a.level;

if(c==g){c=f;
}var b=qx.log.appender.Util.toText(a);
console[c](b);
}},"webkit":function(i){if(window.console){var k=i.level;

if(k==g){k=f;
}var j=qx.log.appender.Util.toText(i);
console[k](j);
}},"opera":function(m){}})},defer:function(l){qx.log.Logger.register(l);
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
this.__FX=X;
this.__FY=X.childNodes[1];
this.__Ga=X.childNodes[2].firstChild;
this.__Gf();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__Gg,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__FY.innerHTML=k;
},process:function(bc){this.__FY.appendChild(qx.log.appender.Util.toHtml(bc));
this.__Gb();
},__Gb:function(){this.__FY.scrollTop=this.__FY.scrollHeight;
},__Gc:true,toggle:function(){if(!this.__FX){this.init();
}else if(this.__FX.style.display==h){this.show();
}else{this.__FX.style.display=h;
}},show:function(){if(!this.__FX){this.init();
}else{this.__FX.style.display=K;
this.__FY.scrollTop=this.__FY.scrollHeight;
}},__Gd:[],execute:function(){var bg=this.__Ga.value;

if(bg==k){return;
}
if(bg==u){return this.clear();
}var be=document.createElement(V);
be.innerHTML=qx.log.appender.Util.escapeHTML(C+bg);
be.className=U;
this.__Gd.push(bg);
this.__Ge=this.__Gd.length;
this.__FY.appendChild(be);
this.__Gb();

try{var bf=window.eval(bg);
}catch(bb){qx.log.Logger.error(bb);
}
if(bf!==undefined){qx.log.Logger.debug(bf);
}},__Gf:function(e){this.__FY.style.height=(this.__FX.clientHeight-this.__FX.firstChild.offsetHeight-this.__FX.lastChild.offsetHeight)+c;
},__Gg:function(e){var bi=e.getKeyIdentifier();
if((bi==H)||(bi==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__FX){return;
}if(!qx.dom.Hierarchy.contains(this.__FX,e.getTarget())){return;
}if(bi==d&&this.__Ga.value!=k){this.execute();
this.__Ga.value=k;
}if(bi==i||bi==E){this.__Ge+=bi==i?-1:1;
this.__Ge=Math.min(Math.max(0,this.__Ge),this.__Gd.length);
var bh=this.__Gd[this.__Ge];
this.__Ga.value=bh||k;
this.__Ga.select();
}}},defer:function(bd){qx.event.Registration.addListener(document.documentElement,g,bd.__Gg,bd);
}});
})();
(function(){var l="/",k="mshtml",j="",i="qx.client",h="?",g="string",f="qx.util.ResourceManager",e="singleton";
qx.Class.define(f,{extend:qx.core.Object,type:e,statics:{__bP:qx.$$resources||{},__bQ:{}},members:{has:function(q){return !!this.self(arguments).__bP[q];
},getData:function(r){return this.self(arguments).__bP[r]||null;
},getImageWidth:function(A){var B=this.self(arguments).__bP[A];
return B?B[0]:null;
},getImageHeight:function(s){var t=this.self(arguments).__bP[s];
return t?t[1]:null;
},getImageFormat:function(o){var p=this.self(arguments).__bP[o];
return p?p[2]:null;
},isClippedImage:function(m){var n=this.self(arguments).__bP[m];
return n&&n.length>4;
},toUri:function(a){if(a==null){return a;
}var b=this.self(arguments).__bP[a];

if(!b){return a;
}
if(typeof b===g){var d=b;
}else{var d=b[3];
if(!d){return a;
}}var c=j;

if(qx.core.Variant.isSet(i,k)&&qx.bom.client.Feature.SSL){c=this.self(arguments).__bQ[d];
}return c+qx.$$libraries[d].resourceUri+l+a;
}},defer:function(u){if(qx.core.Variant.isSet(i,k)){if(qx.bom.client.Feature.SSL){for(var y in qx.$$libraries){var w;

if(qx.$$libraries[y].resourceUri){w=qx.$$libraries[y].resourceUri;
}else{u.__bQ[y]=j;
continue;
}if(w.match(/^\/\//)!=null){u.__bQ[y]=window.location.protocol;
}else if(w.match(/^\.\//)!=null){var v=document.URL;
u.__bQ[y]=v.substring(0,v.lastIndexOf(l)+1);
}else if(w.match(/^http/)!=null){}else{var z=window.location.href.indexOf(h);
var x;

if(z==-1){x=window.location.href;
}else{x=window.location.href.substring(0,z);
}u.__bQ[y]=x.substring(0,x.lastIndexOf(l)+1);
}}}}}});
})();
(function(){var o="qx.client",n="head",m="text/css",l="stylesheet",k="}",j='@import "',h="{",g='";',f="qx.bom.Stylesheet",e="link",d="style";
qx.Class.define(f,{statics:{includeFile:function(B,C){if(!C){C=document;
}var D=C.createElement(e);
D.type=m;
D.rel=l;
D.href=qx.util.ResourceManager.getInstance().toUri(B);
var E=C.getElementsByTagName(n)[0];
E.appendChild(D);
},createElement:qx.core.Variant.select(o,{"mshtml":function(I){var J=document.createStyleSheet();

if(I){J.cssText=I;
}return J;
},"default":function(P){var Q=document.createElement(d);
Q.type=m;

if(P){Q.appendChild(document.createTextNode(P));
}document.getElementsByTagName(n)[0].appendChild(Q);
return Q.sheet;
}}),addRule:qx.core.Variant.select(o,{"mshtml":function(F,G,H){F.addRule(G,H);
},"default":function(R,S,T){R.insertRule(S+h+T+k,R.cssRules.length);
}}),removeRule:qx.core.Variant.select(o,{"mshtml":function(U,V){var W=U.rules;
var X=W.length;

for(var i=X-1;i>=0;--i){if(W[i].selectorText==V){U.removeRule(i);
}}},"default":function(Y,ba){var bb=Y.cssRules;
var bc=bb.length;

for(var i=bc-1;i>=0;--i){if(bb[i].selectorText==ba){Y.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(o,{"mshtml":function(y){var z=y.rules;
var A=z.length;

for(var i=A-1;i>=0;i--){y.removeRule(i);
}},"default":function(p){var q=p.cssRules;
var r=q.length;

for(var i=r-1;i>=0;i--){p.deleteRule(i);
}}}),addImport:qx.core.Variant.select(o,{"mshtml":function(K,L){K.addImport(L);
},"default":function(w,x){w.insertRule(j+x+g,w.cssRules.length);
}}),removeImport:qx.core.Variant.select(o,{"mshtml":function(bd,be){var bf=bd.imports;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].href==be){bd.removeImport(i);
}}},"default":function(s,t){var u=s.cssRules;
var v=u.length;

for(var i=v-1;i>=0;i--){if(u[i].href==t){s.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(o,{"mshtml":function(M){var N=M.imports;
var O=N.length;

for(var i=O-1;i>=0;i--){M.removeImport(i);
}},"default":function(a){var b=a.cssRules;
var c=b.length;

for(var i=c-1;i>=0;i--){if(b[i].type==b[i].IMPORT_RULE){a.deleteRule(i);
}}}})}});
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
}}catch(cT){continue;
}cK.push({"key":cN,"value":cM[cN]});
}return cK;
},getHtmlTable:function(cU){var cW=[];
var cV=bf;
var cY=bk;
var da=bv;
cW.push(N);
var cX=this.extract(cU);

for(var i=0;i<cX.length;i++){cW.push(cV+cX[i].key+cY+cX[i].value+da);
}cW.push(be);
return cW.join(ck);
},getTextList:function(cO){var cQ=[];
var cR=D;
var cS=ba;
var cP=this.extract(cO);

for(var i=0;i<cP.length;i++){cQ.push(cP[i].key+cR+cP[i].value+cS);
}return cQ.join(ck);
}}});
})();
(function(){var q="other",p="widgets",o="fonts",n="appearances",m="qx.Theme",k="]",j="[Theme ",h="colors",g="decorations",f="Theme",c="meta",e="borders",d="icons";
qx.Bootstrap.define(m,{statics:{define:function(name,P){if(!P){var P={};
}P.include=this.__pq(P.include);
P.patch=this.__pq(P.patch);
{};
var Q={$$type:f,name:name,title:P.title,toString:this.genericToString};
if(P.extend){Q.supertheme=P.extend;
}Q.basename=qx.Bootstrap.createNamespace(name,Q);
this.__pt(Q,P);
this.__pr(Q,P);
this.$$registry[name]=Q;
for(var i=0,a=P.include,l=a.length;i<l;i++){this.include(Q,a[i]);
}
for(var i=0,a=P.patch,l=a.length;i<l;i++){this.patch(Q,a[i]);
}},__pq:function(b){if(!b){return [];
}
if(qx.Bootstrap.isArray(b)){return b;
}else{return [b];
}},__pr:function(M,N){var O=N.aliases||{};

if(N.extend&&N.extend.aliases){qx.Bootstrap.objectMergeWith(O,N.extend.aliases,false);
}M.aliases=O;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return j+this.name+k;
},__ps:function(K){for(var i=0,L=this.__pu,l=L.length;i<l;i++){if(K[L[i]]){return L[i];
}}},__pt:function(x,y){var B=this.__ps(y);
if(y.extend&&!B){B=y.extend.type;
}x.type=B||q;
if(!B){return;
}var D=function(){};
if(y.extend){D.prototype=new y.extend.$$clazz;
}var C=D.prototype;
var A=y[B];
for(var z in A){C[z]=A[z];
if(C[z].base){{};
C[z].base=y.extend;
}}x.$$clazz=D;
x[B]=new D;
},$$registry:{},__pu:[h,e,g,o,d,p,n,c],__pv:null,__pw:null,__px:function(){},patch:function(r,s){var u=this.__ps(s);

if(u!==this.__ps(r)){throw new Error("The mixins '"+r.name+"' are not compatible '"+s.name+"'!");
}var t=s[u];
var v=r.$$clazz.prototype;

for(var w in t){v[w]=t[w];
}},include:function(E,F){var H=F.type;

if(H!==E.type){throw new Error("The mixins '"+E.name+"' are not compatible '"+F.name+"'!");
}var G=F[H];
var I=E.$$clazz.prototype;

for(var J in G){if(I[J]!==undefined){continue;
}I[J]=G[J];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__me:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__me=null;
},getInsets:function(){if(this.__me){return this.__me;
}var j=this._getDefaultInsets();
return this.__me={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__me=null;
}},destruct:function(){this.__me=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){{};
var v=m;
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
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(s,t,u){qx.ui.decoration.Abstract.call(this);
if(s!=null){this.setWidth(s);
}
if(t!=null){this.setStyle(t);
}
if(u!=null){this.setColor(u);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[k,j,h,i],init:k,apply:o},color:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__ql:null,_getDefaultInsets:function(){var v=this.getWidth();
return {top:v,right:v,bottom:v,left:v};
},_isInitialized:function(){return !!this.__ql;
},getMarkup:function(){if(this.__ql){return this.__ql;
}var B={position:a,top:0,left:0};
var C=this.getWidth();
{};
var E=qx.theme.manager.Color.getInstance();
B.border=C+c+this.getStyle()+e+(E.resolve(this.getColor())||n);
var D=this._generateBackgroundMarkup(B);
return this.__ql=D;
},resize:function(w,x,y){var A=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(A||qx.bom.client.Feature.CONTENT_BOX){var z=this.getWidth()*2;
x-=z;
y-=z;
if(x<0){x=0;
}
if(y<0){y=0;
}}w.style.width=x+l;
w.style.height=y+l;
},tint:function(p,q){var r=qx.theme.manager.Color.getInstance();

if(q==null){q=this.getBackgroundColor();
}p.style.backgroundColor=r.resolve(q)||n;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__ql=null;
}});
})();
(function(){var f="px",e="qx.ui.decoration.Background",d="",c="_applyStyle",b="Color",a="absolute";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(g){qx.ui.decoration.Abstract.call(this);

if(g!=null){this.setBackgroundColor(g);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__mj:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mj;
},getMarkup:function(){if(this.__mj){return this.__mj;
}var k={position:a,top:0,left:0};
var l=this._generateBackgroundMarkup(k);
return this.__mj=l;
},resize:function(h,i,j){h.style.width=i+f;
h.style.height=j+f;
},tint:function(m,n){var o=qx.theme.manager.Color.getInstance();

if(n==null){n=this.getBackgroundColor();
}m.style.backgroundColor=o.resolve(n)||d;
},_applyStyle:function(){{};
}},destruct:function(){this.__mj=null;
}});
})();
(function(){var o="_applyStyle",n="solid",m="Color",l="",k="double",j="px ",i="dotted",h="_applyWidth",g="dashed",f="Number",K=" ",J="shorthand",I="px",H="widthTop",G="styleRight",F="styleLeft",E="widthLeft",D="widthBottom",C="styleTop",B="colorBottom",v="styleBottom",w="widthRight",t="colorLeft",u="colorRight",r="colorTop",s="scale",p="border-top",q="border-left",x="border-right",y="qx.ui.decoration.Single",A="border-bottom",z="absolute";
qx.Class.define(y,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(T,U,V){qx.ui.decoration.Abstract.call(this);
if(T!=null){this.setWidth(T);
}
if(U!=null){this.setStyle(U);
}
if(V!=null){this.setColor(V);
}},properties:{widthTop:{check:f,init:0,apply:h},widthRight:{check:f,init:0,apply:h},widthBottom:{check:f,init:0,apply:h},widthLeft:{check:f,init:0,apply:h},styleTop:{nullable:true,check:[n,i,g,k],init:n,apply:o},styleRight:{nullable:true,check:[n,i,g,k],init:n,apply:o},styleBottom:{nullable:true,check:[n,i,g,k],init:n,apply:o},styleLeft:{nullable:true,check:[n,i,g,k],init:n,apply:o},colorTop:{nullable:true,check:m,apply:o},colorRight:{nullable:true,check:m,apply:o},colorBottom:{nullable:true,check:m,apply:o},colorLeft:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o},left:{group:[E,F,t]},right:{group:[w,G,u]},top:{group:[H,C,r]},bottom:{group:[D,v,B]},width:{group:[H,w,D,E],mode:J},style:{group:[C,G,v,F],mode:J},color:{group:[r,u,B,t],mode:J}},members:{__od:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__od;
},getMarkup:function(O){if(this.__od){return this.__od;
}var P=qx.theme.manager.Color.getInstance();
var Q={};
var S=this.getWidthTop();

if(S>0){Q[p]=S+j+this.getStyleTop()+K+(P.resolve(this.getColorTop())||l);
}var S=this.getWidthRight();

if(S>0){Q[x]=S+j+this.getStyleRight()+K+(P.resolve(this.getColorRight())||l);
}var S=this.getWidthBottom();

if(S>0){Q[A]=S+j+this.getStyleBottom()+K+(P.resolve(this.getColorBottom())||l);
}var S=this.getWidthLeft();

if(S>0){Q[q]=S+j+this.getStyleLeft()+K+(P.resolve(this.getColorLeft())||l);
}{};
Q.position=z;
Q.top=0;
Q.left=0;
var R=this._generateBackgroundMarkup(Q);
return this.__od=R;
},resize:function(a,b,c){var e=this.getBackgroundImage()&&this.getBackgroundRepeat()==s;

if(e||qx.bom.client.Feature.CONTENT_BOX){var d=this.getInsets();
b-=d.left+d.right;
c-=d.top+d.bottom;
if(b<0){b=0;
}
if(c<0){c=0;
}}a.style.width=b+I;
a.style.height=c+I;
},tint:function(L,M){var N=qx.theme.manager.Color.getInstance();

if(M==null){M=this.getBackgroundColor();
}L.style.backgroundColor=N.resolve(M)||l;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__od=null;
}});
})();
(function(){var p="Number",o="_applyInsets",n="-l",m="insetRight",l="insetTop",k="_applyBaseImage",j="insetBottom",i="set",h="shorthand",g="-t",d="insetLeft",f="String",e="qx.ui.decoration.Grid";
qx.Class.define(e,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(C,D){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__lR=new qx.ui.decoration.css3.BorderImage();

if(C){this.__lS(C);
}}else{this.__lR=new qx.ui.decoration.GridDiv(C);
}
if(D!=null){this.__lR.setInsets(D);
}},properties:{baseImage:{check:f,nullable:true,apply:k},insetLeft:{check:p,nullable:true,apply:o},insetRight:{check:p,nullable:true,apply:o},insetBottom:{check:p,nullable:true,apply:o},insetTop:{check:p,nullable:true,apply:o},insets:{group:[l,m,j,d],mode:h}},members:{__lR:null,getMarkup:function(){return this.__lR.getMarkup();
},resize:function(a,b,c){this.__lR.resize(a,b,c);
},tint:function(q,r){},getInsets:function(){return this.__lR.getInsets();
},_applyInsets:function(E,F,name){var G=i+qx.lang.String.firstUp(name);
this.__lR[G](E);
},_applyBaseImage:function(s,t){if(this.__lR instanceof qx.ui.decoration.GridDiv){this.__lR.setBaseImage(s);
}else{this.__lS(s);
}},__lS:function(u){this.__lR.setBorderImage(u);
var y=qx.util.AliasManager.getInstance().resolve(u);
var z=/(.*)(\.[a-z]+)$/.exec(y);
var w=z[1];
var x=z[2];
var v=qx.util.ResourceManager.getInstance();
var A=v.getImageHeight(w+g+x);
var B=v.getImageWidth(w+n+x);
this.__lR.setSlice([A,B]);
}},destruct:function(){this.__lR=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(K,L,M){qx.ui.decoration.Abstract.call(this);
if(K!=null){this.setOuterColor(K);
}
if(L!=null){this.setInnerColor(L);
}
if(M!=null){this.setInnerOpacity(M);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__pR:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__pR;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__pR){return this.__pR;
}var N=qx.theme.manager.Color.getInstance();
var O=[];
var R=d+N.resolve(this.getOuterColor())+b;
var Q=d+N.resolve(this.getInnerColor())+b;
O.push(k);
O.push(f);
O.push(e,R);
O.push(qx.bom.element.Opacity.compile(0.35));
O.push(i);
O.push(n);
O.push(q,R);
O.push(r,R);
O.push(i);
O.push(f);
O.push(m);
O.push(p,R);
O.push(s,R);
O.push(i);
var P={position:l,top:g,left:g};
O.push(this._generateBackgroundMarkup(P));
O.push(t);
O.push(e,Q);
O.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
O.push(i);
O.push(v);
return this.__pR=O.join(c);
},resize:function(w,x,y){if(x<4){x=4;
}
if(y<4){y=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=x-2;
var outerHeight=y-2;
var E=outerWidth;
var D=outerHeight;
var innerWidth=x-4;
var innerHeight=y-4;
}else{var outerWidth=x;
var outerHeight=y;
var E=x-2;
var D=y-2;
var innerWidth=E;
var innerHeight=D;
}var G=a;
var C=w.childNodes[0].style;
C.width=outerWidth+G;
C.height=outerHeight+G;
var B=w.childNodes[1].style;
B.width=outerWidth+G;
B.height=D+G;
var A=w.childNodes[2].style;
A.width=E+G;
A.height=outerHeight+G;
var z=w.childNodes[3].style;
z.width=E+G;
z.height=D+G;
var F=w.childNodes[4].style;
F.width=innerWidth+G;
F.height=innerHeight+G;
},tint:function(H,I){var J=qx.theme.manager.Color.getInstance();

if(I==null){I=this.getBackgroundColor();
}H.childNodes[3].style.backgroundColor=J.resolve(I)||c;
}},destruct:function(){this.__pR=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bs="decoration/table/header-cell.png",br="decoration/form/input.png",bq="#f8f8f8",bp="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bo="#b6b6b6",bn="background-pane",bm="repeat-y",bl="decoration/form/input-focused.png",bk="#33508D",bj="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="black",p="decoration/form/button-c.png",q="decoration/scrollbar/scrollbar-bg-vertical.png",n="decoration/form/button.png",o="decoration/form/button-checked.png",B="decoration/tabview/tab-button-left-inactive.png",C="decoration/groupbox/groupbox.png",O="#FAFAFA",K="decoration/pane/pane.png",W="dotted",R="decoration/toolbar/toolbar-part.gif",bf="decoration/tabview/tab-button-top-inactive.png",bc="decoration/menu/bar-background.png",G="center",bi="decoration/tabview/tab-button-bottom-active.png",bh="decoration/form/button-hovered.png",bg="decoration/form/tooltip-error-arrow.png",F="decoration/window/captionbar-inactive.png",I="qx/decoration/Modern",J="decoration/menu/background.png",M="decoration/window/statusbar.png",P="border-focused",S="table-focus-indicator",Y="#F2F2F2",be="decoration/form/button-checked-c.png",v="decoration/scrollbar/scrollbar-bg-horizontal.png",w="qx.theme.modern.Decoration",H="#f4f4f4",V="decoration/shadow/shadow-small.png",U="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",bb="decoration/form/tooltip-error.png",ba="decoration/form/button-focused.png",Q="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",a="decoration/tabview/tab-button-right-active.png",bd="decoration/form/button-pressed.png",x="no-repeat",y="decoration/window/captionbar-active.png",L="decoration/tabview/tab-button-left-active.png",b="background-splitpane",c="decoration/form/button-checked-focused.png",E="#C5C5C5",z="decoration/toolbar/toolbar-gradient.png",A="decoration/tabview/tab-button-right-inactive.png",D="#b8b8b8",N="decoration/shadow/shadow.png";
qx.Theme.define(w,{aliases:{decoration:I},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bj,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bj,backgroundRepeat:l,bottom:[2,m,bk]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bk]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:C}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:W}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bg,backgroundPositionY:G,backgroundRepeat:x,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:v,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:q,backgroundRepeat:bm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bh,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:P,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:z,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:p,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:be,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:D,colorRight:H,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:R,backgroundRepeat:bm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bi}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:L}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:a}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:A}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bn,width:3,color:b,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bn,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:y}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:S,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthRight:1,colorRight:Y,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:E,widthBottom:1,colorBottom:O}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bc,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:l}}}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var eM="button-frame",eL="atom",eK="widget",eJ="main",eI="button",eH="text-selected",eG="image",eF="bold",eE="middle",eD="background-light",dq="text-disabled",dp="groupbox",dn="decoration/arrows/down.png",dm="cell",dl="selected",dk="border-invalid",dj="input",di="input-disabled",dh="menu-button",dg="input-focused-invalid",eT="toolbar-button",eU="spinner",eR="input-focused",eS="popup",eP="tooltip",eQ="label",eN="list",eO="tree-item",eV="treevirtual-contract",eW="scrollbar",em="datechooser/nav-button",el="text-hovered",eo="center",en="treevirtual-expand",eq="textfield",ep="decoration/arrows/right.png",es="background-application",er="radiobutton",ek="white",ej="invalid",bm="combobox",bn="right-top",bo="checkbox",bp="text-title",bq="qx/static/blank.gif",br="scrollbar/button",bs="right",bt="combobox/button",bu="icon/16/places/folder.png",bv="text-label",fl="decoration/tree/closed.png",fk="scrollbar-slider-horizontal",fj="decoration/arrows/left.png",fi="button-focused",fp="text-light",fo="menu-slidebar-button",fn="text-input",fm="slidebar/button-forward",fr="background-splitpane",fq=".png",co="decoration/tree/open.png",cp="default",cm="decoration/arrows/down-small.png",cn="datechooser",cs="slidebar/button-backward",ct="selectbox",cq="treevirtual-folder",cr="shadow-popup",ck="icon/16/mimetypes/office-document.png",cl="background-medium",bP="table",bO="decoration/arrows/up.png",bR="decoration/form/",bQ="",bL="-invalid",bK="icon/16/places/folder-open.png",bN="button-checked",bM="decoration/window/maximize-active-hovered.png",bJ="radiobutton-hovered",bI="keyboard-focus",cz="decoration/cursors/",cA="slidebar",cB="tooltip-error-arrow",cC="table-scroller-focus-indicator",cv="move-frame",cw="nodrop",cx="decoration/table/boolean-true.png",cy="table-header-cell",cD="menu",cE="app-header",cd="row-layer",cc="text-inactive",cb="move",ca="radiobutton-checked-focused",bY="decoration/window/restore-active-hovered.png",bX="shadow-window",bW="table-column-button",bV="right.png",ch="tabview-page-button-bottom-inactive",cg="tooltip-error",cF="window-statusbar",cG="button-hovered",cH="decoration/scrollbar/scrollbar-",cI="background-tip",cJ="scrollbar-slider-horizontal-disabled",cK="table-scroller-header",cL="button-pressed",cM="table-pane",cN="decoration/window/close-active.png",cO="native",dy="checkbox-hovered",dx="button-invalid-shadow",dw="checkbox-checked",dv="decoration/window/minimize-active-hovered.png",dC="menubar",dB="icon/16/actions/dialog-cancel.png",dA="tabview-page-button-top-inactive",dz="tabview-page-button-left-inactive",dG="menu-slidebar",dF="toolbar-button-checked",ee="decoration/tree/open-selected.png",ef="radiobutton-checked",ec="decoration/window/minimize-inactive.png",ed="icon/16/apps/office-calendar.png",ea="group",eb="tabview-page-button-right-inactive",dX="decoration/window/minimize-active.png",dY="decoration/window/restore-inactive.png",eg="checkbox-checked-focused",eh="splitpane",ew="combobox/textfield",ev="button-preselected-focused",ey="decoration/window/close-active-hovered.png",ex="qx/icon/Tango/16/actions/window-close.png",eA="checkbox-pressed",ez="button-disabled",eC="selected-dragover",eB="border-separator",eu="decoration/window/maximize-inactive.png",et="dragover",fe="scrollarea",ff="scrollbar-vertical",fg="decoration/menu/checkbox-invert.gif",fh="decoration/toolbar/toolbar-handle-knob.gif",fa="icon/22/mimetypes/office-document.png",fb="button-preselected",fc="button-checked-focused",fd="up.png",eX="best-fit",eY="decoration/tree/closed-selected.png",bl="qx.theme.modern.Appearance",bk="text-active",bj="toolbar-button-hovered",bi="progressive-table-header",bh="decoration/table/select-column-order.png",bg="decoration/menu/radiobutton.gif",bf="decoration/arrows/forward.png",be="decoration/table/descending.png",bd="window-captionbar-active",bc="checkbox-checked-hovered",by="scrollbar-slider-vertical",bz="toolbar",bw="alias",bx="decoration/window/restore-active.png",bC="decoration/table/boolean-false.png",bD="checkbox-checked-disabled",bA="icon/32/mimetypes/office-document.png",bB="radiobutton-checked-disabled",bF="tabview-pane",bG="decoration/arrows/rewind.png",dK="checkbox-focused",dE="top",dR="#EEE",dN="icon/16/actions/dialog-ok.png",dt="radiobutton-checked-hovered",dr="table-header-cell-hovered",bT="window",du="text-gray",cf="decoration/menu/radiobutton-invert.gif",ce="text-placeholder",cX="slider",cY="keep-align",da="down.png",db="tabview-page-button-top-active",dc="icon/32/places/folder-open.png",dd="icon/22/places/folder.png",de="decoration/window/maximize-active.png",df="checkbox-checked-pressed",cV="decoration/window/close-inactive.png",cW="tabview-page-button-left-active",ds="toolbar-part",dQ="decoration/splitpane/knob-vertical.png",dP=".gif",dO="icon/22/places/folder-open.png",dV="radiobutton-checked-pressed",dU="table-statusbar",dT="radiobutton-pressed",dS="window-captionbar-inactive",dM="copy",dL="radiobutton-focused",bE="decoration/arrows/down-invert.png",cj="decoration/menu/checkbox.gif",ci="decoration/splitpane/knob-horizontal.png",dD="icon/32/places/folder.png",cu="toolbar-separator",dJ="tabview-page-button-bottom-active",dI="decoration/arrows/up-small.png",dH="decoration/table/ascending.png",bS="decoration/arrows/up-invert.png",dW="small",bH="tabview-page-button-right-active",bU="-disabled",cP="scrollbar-horizontal",cQ="progressive-table-header-cell",cR="menu-separator",cS="pane",cT="decoration/arrows/right-invert.png",cU="left.png",ei="icon/16/actions/view-refresh.png";
qx.Theme.define(bl,{appearances:{"widget":{},"root":{style:function(fH){return {backgroundColor:es,textColor:bv,font:cp};
}},"label":{style:function(gy){return {textColor:gy.disabled?dq:undefined};
}},"move-frame":{style:function(hk){return {decorator:eJ};
}},"resize-frame":cv,"dragdrop-cursor":{style:function(A){var B=cw;

if(A.copy){B=dM;
}else if(A.move){B=cb;
}else if(A.alias){B=bw;
}return {source:cz+B+dP,position:bn,offset:[2,16,2,6]};
}},"image":{style:function(gw){return {opacity:!gw.replacement&&gw.disabled?0.3:1};
}},"atom":{},"atom/label":eQ,"atom/icon":eG,"popup":{style:function(L){return {decorator:eJ,backgroundColor:eD,shadow:cr};
}},"button-frame":{alias:eL,style:function(s){var u,t;

if(s.checked&&s.focused&&!s.inner){u=fc;
t=undefined;
}else if(s.disabled){u=ez;
t=undefined;
}else if(s.pressed){u=cL;
t=el;
}else if(s.checked){u=bN;
t=undefined;
}else if(s.hovered){u=cG;
t=el;
}else if(s.preselected&&s.focused&&!s.inner){u=ev;
t=el;
}else if(s.preselected){u=fb;
t=el;
}else if(s.focused&&!s.inner){u=fi;
t=undefined;
}else{u=eI;
t=undefined;
}return {decorator:u,textColor:t,shadow:s.invalid&&!s.disabled?dx:undefined};
}},"button-frame/image":{style:function(fV){return {opacity:!fV.replacement&&fV.disabled?0.5:1};
}},"button":{alias:eM,include:eM,style:function(G){return {padding:[2,8],center:true};
}},"hover-button":{alias:eL,include:eL,style:function(hO){return {decorator:hO.hovered?dl:undefined,textColor:hO.hovered?eH:undefined};
}},"splitbutton":{},"splitbutton/button":eI,"splitbutton/arrow":{alias:eI,include:eI,style:function(hJ){return {icon:dn,padding:2,marginLeft:1};
}},"checkbox":{alias:eL,style:function(hf){var hh;

if(hf.checked&&hf.focused){hh=eg;
}else if(hf.checked&&hf.disabled){hh=bD;
}else if(hf.checked&&hf.pressed){hh=df;
}else if(hf.checked&&hf.hovered){hh=bc;
}else if(hf.checked){hh=dw;
}else if(hf.focused){hh=dK;
}else if(hf.pressed){hh=eA;
}else if(hf.hovered){hh=dy;
}else{hh=bo;
}var hg=hf.invalid&&!hf.disabled?bL:bQ;
return {icon:bR+hh+hg+fq,gap:6};
}},"radiobutton":{alias:eL,style:function(c){var e;

if(c.checked&&c.focused){e=ca;
}else if(c.checked&&c.disabled){e=bB;
}else if(c.checked&&c.pressed){e=dV;
}else if(c.checked&&c.hovered){e=dt;
}else if(c.checked){e=ef;
}else if(c.focused){e=dL;
}else if(c.pressed){e=dT;
}else if(c.hovered){e=bJ;
}else{e=er;
}var d=c.invalid&&!c.disabled?bL:bQ;
return {icon:bR+e+d+fq,gap:6};
}},"textfield":{style:function(gA){var gF;
var gD=!!gA.focused;
var gE=!!gA.invalid;
var gB=!!gA.disabled;

if(gD&&gE&&!gB){gF=dg;
}else if(gD&&!gE&&!gB){gF=eR;
}else if(gB){gF=di;
}else if(!gD&&gE&&!gB){gF=dk;
}else{gF=dj;
}var gC;

if(gA.disabled){gC=dq;
}else if(gA.showingPlaceholder){gC=ce;
}else{gC=fn;
}return {decorator:gF,padding:[2,4,1],textColor:gC};
}},"textarea":{include:eq,style:function(gu){return {padding:4};
}},"spinner":{style:function(fy){var fC;
var fA=!!fy.focused;
var fB=!!fy.invalid;
var fz=!!fy.disabled;

if(fA&&fB&&!fz){fC=dg;
}else if(fA&&!fB&&!fz){fC=eR;
}else if(fz){fC=di;
}else if(!fA&&fB&&!fz){fC=dk;
}else{fC=dj;
}return {decorator:fC};
}},"spinner/textfield":{style:function(hc){return {marginRight:2,padding:[2,4,1],textColor:hc.disabled?dq:fn};
}},"spinner/upbutton":{alias:eM,include:eM,style:function(m){return {icon:dI,padding:m.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:eM,include:eM,style:function(ia){return {icon:cm,padding:ia.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":bm,"datefield/button":{alias:bt,include:bt,style:function(fM){return {icon:ed,padding:[0,3],decorator:undefined};
}},"datefield/textfield":ew,"datefield/list":{alias:cn,include:cn,style:function(hW){return {decorator:undefined};
}},"groupbox":{style:function(ie){return {legendPosition:dE};
}},"groupbox/legend":{alias:eL,style:function(w){return {padding:[1,0,1,4],textColor:w.invalid?ej:bp,font:eF};
}},"groupbox/frame":{style:function(o){return {padding:12,decorator:ea};
}},"check-groupbox":dp,"check-groupbox/legend":{alias:bo,include:bo,style:function(fx){return {padding:[1,0,1,4],textColor:fx.invalid?ej:bp,font:eF};
}},"radio-groupbox":dp,"radio-groupbox/legend":{alias:er,include:er,style:function(fF){return {padding:[1,0,1,4],textColor:fF.invalid?ej:bp,font:eF};
}},"scrollarea":{style:function(fv){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(fP){return {backgroundColor:es};
}},"scrollarea/pane":eK,"scrollarea/scrollbar-x":eW,"scrollarea/scrollbar-y":eW,"scrollbar":{style:function(go){if(go[cO]){return {};
}return {width:go.horizontal?undefined:16,height:go.horizontal?16:undefined,decorator:go.horizontal?cP:ff,padding:1};
}},"scrollbar/slider":{alias:cX,style:function(T){return {padding:T.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:eM,style:function(gr){var gs=gr.horizontal?fk:by;

if(gr.disabled){gs+=bU;
}return {decorator:gs,minHeight:gr.horizontal?undefined:9,minWidth:gr.horizontal?9:undefined};
}},"scrollbar/button":{alias:eM,include:eM,style:function(J){var K=cH;

if(J.left){K+=cU;
}else if(J.right){K+=bV;
}else if(J.up){K+=fd;
}else{K+=da;
}
if(J.left||J.right){return {padding:[0,0,0,J.left?3:4],icon:K,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:K,width:14,height:15};
}}},"scrollbar/button-begin":br,"scrollbar/button-end":br,"slider":{style:function(U){var Y;
var W=!!U.focused;
var X=!!U.invalid;
var V=!!U.disabled;

if(W&&X&&!V){Y=dg;
}else if(W&&!X&&!V){Y=eR;
}else if(V){Y=di;
}else if(!W&&X&&!V){Y=dk;
}else{Y=dj;
}return {decorator:Y};
}},"slider/knob":{include:eM,style:function(ft){return {decorator:ft.disabled?cJ:fk,shadow:undefined,height:14,width:14};
}},"list":{alias:fe,style:function(gN){var gR;
var gP=!!gN.focused;
var gQ=!!gN.invalid;
var gO=!!gN.disabled;

if(gP&&gQ&&!gO){gR=dg;
}else if(gP&&!gQ&&!gO){gR=eR;
}else if(gO){gR=di;
}else if(!gP&&gQ&&!gO){gR=dk;
}else{gR=dj;
}return {backgroundColor:eD,decorator:gR};
}},"list/pane":eK,"listitem":{alias:eL,style:function(hP){var hQ;

if(hP.dragover){hQ=hP.selected?eC:et;
}else{hQ=hP.selected?dl:undefined;
}return {padding:hP.dragover?[4,4,2,4]:4,textColor:hP.selected?eH:undefined,decorator:hQ};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:eM,include:eM,style:function(hE){return {padding:5,center:true,icon:hE.vertical?dn:ep};
}},"slidebar/button-backward":{alias:eM,include:eM,style:function(gG){return {padding:5,center:true,icon:gG.vertical?bO:fj};
}},"tabview":{style:function(hu){return {contentPadding:16};
}},"tabview/bar":{alias:cA,style:function(gh){var gi={marginBottom:gh.barTop?-1:0,marginTop:gh.barBottom?-4:0,marginLeft:gh.barRight?-3:0,marginRight:gh.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(gh.barTop||gh.barBottom){gi.paddingLeft=5;
gi.paddingRight=7;
}else{gi.paddingTop=5;
gi.paddingBottom=7;
}return gi;
}},"tabview/bar/button-forward":{include:fm,alias:fm,style:function(fS){if(fS.barTop||fS.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:cs,alias:cs,style:function(fK){if(fK.barTop||fK.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gH){return {decorator:bF,minHeight:100,marginBottom:gH.barBottom?-1:0,marginTop:gH.barTop?-1:0,marginLeft:gH.barLeft?-1:0,marginRight:gH.barRight?-1:0};
}},"tabview-page":eK,"tabview-page/button":{alias:eL,style:function(gU){var hb,gW=0;
var ha=0,gV=0,gX=0,gY=0;

if(gU.checked){if(gU.barTop){hb=db;
gW=[6,14];
gX=gU.firstTab?0:-5;
gY=gU.lastTab?0:-5;
}else if(gU.barBottom){hb=dJ;
gW=[6,14];
gX=gU.firstTab?0:-5;
gY=gU.lastTab?0:-5;
}else if(gU.barRight){hb=bH;
gW=[6,13];
ha=gU.firstTab?0:-5;
gV=gU.lastTab?0:-5;
}else{hb=cW;
gW=[6,13];
ha=gU.firstTab?0:-5;
gV=gU.lastTab?0:-5;
}}else{if(gU.barTop){hb=dA;
gW=[4,10];
ha=4;
gX=gU.firstTab?5:1;
gY=1;
}else if(gU.barBottom){hb=ch;
gW=[4,10];
gV=4;
gX=gU.firstTab?5:1;
gY=1;
}else if(gU.barRight){hb=eb;
gW=[4,10];
gY=5;
ha=gU.firstTab?5:1;
gV=1;
gX=1;
}else{hb=dz;
gW=[4,10];
gX=5;
ha=gU.firstTab?5:1;
gV=1;
gY=1;
}}return {zIndex:gU.checked?10:5,decorator:hb,padding:gW,marginTop:ha,marginBottom:gV,marginLeft:gX,marginRight:gY,textColor:gU.checked?bk:cc};
}},"tabview-page/button/label":{alias:eQ,style:function(q){return {padding:[0,1,0,1],margin:q.focused?0:1,decorator:q.focused?bI:undefined};
}},"tabview-page/button/close-button":{alias:eL,style:function(hp){return {icon:ex};
}},"toolbar":{style:function(fY){return {decorator:bz,spacing:2};
}},"toolbar/part":{style:function(hi){return {decorator:ds,spacing:2};
}},"toolbar/part/container":{style:function(hV){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hN){return {source:fh,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:eL,style:function(D){return {marginTop:2,marginBottom:2,padding:(D.pressed||D.checked||D.hovered)&&!D.disabled||(D.disabled&&D.checked)?3:5,decorator:D.pressed||(D.checked&&!D.hovered)||(D.checked&&D.disabled)?dF:D.hovered&&!D.disabled?bj:undefined};
}},"toolbar-menubutton":{alias:eT,include:eT,style:function(E){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:eG,include:eG,style:function(gm){return {source:cm};
}},"toolbar-splitbutton":{style:function(i){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:eT,include:eT,style:function(fJ){return {icon:dn,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:eT,include:eT,style:function(h){return {padding:h.pressed||h.checked?1:h.hovered?1:3,icon:dn,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(gL){return {decorator:cu,margin:7};
}},"tree":eN,"tree-item":{style:function(fE){return {padding:[2,6],textColor:fE.selected?eH:undefined,decorator:fE.selected?dl:undefined};
}},"tree-item/icon":{include:eG,style:function(hn){return {paddingRight:5};
}},"tree-item/label":eQ,"tree-item/open":{include:eG,style:function(gb){var gc;

if(gb.selected&&gb.opened){gc=ee;
}else if(gb.selected&&!gb.opened){gc=eY;
}else if(gb.opened){gc=co;
}else{gc=fl;
}return {padding:[0,5,0,2],source:gc};
}},"tree-folder":{include:eO,alias:eO,style:function(gp){var gq;

if(gp.small){gq=gp.opened?bK:bu;
}else if(gp.large){gq=gp.opened?dc:dD;
}else{gq=gp.opened?dO:dd;
}return {icon:gq};
}},"tree-file":{include:eO,alias:eO,style:function(hX){return {icon:hX.small?ck:hX.large?bA:fa};
}},"treevirtual":bP,"treevirtual-folder":{style:function(fX){return {icon:fX.opened?bK:bu};
}},"treevirtual-file":{include:cq,alias:cq,style:function(hx){return {icon:ck};
}},"treevirtual-line":{style:function(F){return {icon:bq};
}},"treevirtual-contract":{style:function(fD){return {icon:co,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(fN){return {icon:fl,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":eV,"treevirtual-only-expand":en,"treevirtual-start-contract":eV,"treevirtual-start-expand":en,"treevirtual-end-contract":eV,"treevirtual-end-expand":en,"treevirtual-cross-contract":eV,"treevirtual-cross-expand":en,"treevirtual-end":{style:function(hH){return {icon:bq};
}},"treevirtual-cross":{style:function(hs){return {icon:bq};
}},"tooltip":{include:eS,style:function(r){return {backgroundColor:cI,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":eL,"tooltip-error":{include:eP,style:function(H){return {textColor:eH,placeMethod:eK,offset:[0,0,0,14],marginTop:-2,position:bn,showTimeout:100,hideTimeout:10000,decorator:cg,shadow:cB,font:eF};
}},"tooltip-error/atom":eL,"window":{style:function(gg){return {shadow:bX,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(ic){return {decorator:bT};
}},"window/captionbar":{style:function(fG){return {decorator:fG.active?bd:dS,textColor:fG.active?ek:du,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(hT){return {margin:[5,0,3,6]};
}},"window/title":{style:function(he){return {alignY:eE,font:eF,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:eL,style:function(z){return {icon:z.active?z.hovered?dv:dX:ec,margin:[4,8,2,0]};
}},"window/restore-button":{alias:eL,style:function(id){return {icon:id.active?id.hovered?bY:bx:dY,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:eL,style:function(j){return {icon:j.active?j.hovered?bM:de:eu,margin:[4,8,2,0]};
}},"window/close-button":{alias:eL,style:function(p){return {icon:p.active?p.hovered?ey:cN:cV,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(fs){return {padding:[2,6],decorator:cF,minHeight:18};
}},"window/statusbar-text":{style:function(fu){return {font:dW};
}},"iframe":{style:function(hw){return {decorator:eJ};
}},"resizer":{style:function(fQ){return {decorator:cS};
}},"splitpane":{style:function(n){return {decorator:eh};
}},"splitpane/splitter":{style:function(R){return {width:R.horizontal?3:undefined,height:R.vertical?3:undefined,backgroundColor:fr};
}},"splitpane/splitter/knob":{style:function(gS){return {source:gS.horizontal?ci:dQ};
}},"splitpane/slider":{style:function(hd){return {width:hd.horizontal?3:undefined,height:hd.vertical?3:undefined,backgroundColor:fr};
}},"selectbox":{alias:eM,include:eM,style:function(fW){return {padding:[2,8]};
}},"selectbox/atom":eL,"selectbox/popup":eS,"selectbox/list":{alias:eN},"selectbox/arrow":{include:eG,style:function(ht){return {source:dn,paddingLeft:5};
}},"datechooser":{style:function(hz){var hD;
var hB=!!hz.focused;
var hC=!!hz.invalid;
var hA=!!hz.disabled;

if(hB&&hC&&!hA){hD=dg;
}else if(hB&&!hC&&!hA){hD=eR;
}else if(hA){hD=di;
}else if(!hB&&hC&&!hA){hD=dk;
}else{hD=dj;
}return {padding:2,decorator:hD,backgroundColor:eD};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:eM,alias:eM,style:function(hF){var hG={padding:[2,4],shadow:undefined};

if(hF.lastYear){hG.icon=bG;
hG.marginRight=1;
}else if(hF.lastMonth){hG.icon=fj;
}else if(hF.nextYear){hG.icon=bf;
hG.marginLeft=1;
}else if(hF.nextMonth){hG.icon=ep;
}return hG;
}},"datechooser/last-year-button-tooltip":eP,"datechooser/last-month-button-tooltip":eP,"datechooser/next-year-button-tooltip":eP,"datechooser/next-month-button-tooltip":eP,"datechooser/last-year-button":em,"datechooser/last-month-button":em,"datechooser/next-month-button":em,"datechooser/next-year-button":em,"datechooser/month-year-label":{style:function(ge){return {font:eF,textAlign:eo,textColor:ge.disabled?dq:undefined};
}},"datechooser/date-pane":{style:function(l){return {textColor:l.disabled?dq:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(hS){return {textColor:hS.disabled?dq:hS.weekend?fp:undefined,textAlign:eo,paddingTop:2,backgroundColor:cl};
}},"datechooser/week":{style:function(v){return {textAlign:eo,padding:[2,4],backgroundColor:cl};
}},"datechooser/day":{style:function(ba){return {textAlign:eo,decorator:ba.disabled?undefined:ba.selected?dl:undefined,textColor:ba.disabled?dq:ba.selected?eH:ba.otherMonth?fp:undefined,font:ba.today?eF:undefined,padding:[2,4]};
}},"combobox":{style:function(M){var Q;
var O=!!M.focused;
var P=!!M.invalid;
var N=!!M.disabled;

if(O&&P&&!N){Q=dg;
}else if(O&&!P&&!N){Q=eR;
}else if(N){Q=di;
}else if(!O&&P&&!N){Q=dk;
}else{Q=dj;
}return {decorator:Q};
}},"combobox/popup":eS,"combobox/list":{alias:eN},"combobox/button":{include:eM,alias:eM,style:function(x){var y={icon:dn,padding:2};

if(x.selected){y.decorator=fi;
}return y;
}},"combobox/textfield":{include:eq,style:function(hM){return {decorator:undefined};
}},"menu":{style:function(hK){var hL={decorator:cD,shadow:cr,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:hK.submenu||hK.contextmenu?eX:cY};

if(hK.submenu){hL.position=bn;
hL.offset=[-2,-3];
}return hL;
}},"menu/slidebar":dG,"menu-slidebar":eK,"menu-slidebar-button":{style:function(ga){return {decorator:ga.hovered?dl:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:fo,style:function(hy){return {icon:hy.hovered?bS:bO};
}},"menu-slidebar/button-forward":{include:fo,style:function(gx){return {icon:gx.hovered?bE:dn};
}},"menu-separator":{style:function(gv){return {height:0,decorator:cR,margin:[4,2]};
}},"menu-button":{alias:eL,style:function(k){return {decorator:k.selected?dl:undefined,textColor:k.selected?eH:undefined,padding:[4,6]};
}},"menu-button/icon":{include:eG,style:function(fR){return {alignY:eE};
}},"menu-button/label":{include:eQ,style:function(C){return {alignY:eE,padding:1};
}},"menu-button/shortcut":{include:eQ,style:function(gt){return {alignY:eE,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:eG,style:function(ib){return {source:ib.selected?cT:ep,alignY:eE};
}},"menu-checkbox":{alias:dh,include:dh,style:function(gk){return {icon:!gk.checked?undefined:gk.selected?fg:cj};
}},"menu-radiobutton":{alias:dh,include:dh,style:function(hl){return {icon:!hl.checked?undefined:hl.selected?cf:bg};
}},"menubar":{style:function(gK){return {decorator:dC};
}},"menubar-button":{alias:eL,style:function(gd){return {decorator:gd.pressed||gd.hovered?dl:undefined,textColor:gd.pressed||gd.hovered?eH:undefined,padding:[3,8]};
}},"colorselector":eK,"colorselector/control-bar":eK,"colorselector/control-pane":eK,"colorselector/visual-pane":dp,"colorselector/preset-grid":eK,"colorselector/colorbucket":{style:function(hR){return {decorator:eJ,width:16,height:16};
}},"colorselector/preset-field-set":dp,"colorselector/input-field-set":dp,"colorselector/preview-field-set":dp,"colorselector/hex-field-composite":eK,"colorselector/hex-field":eq,"colorselector/rgb-spinner-composite":eK,"colorselector/rgb-spinner-red":eU,"colorselector/rgb-spinner-green":eU,"colorselector/rgb-spinner-blue":eU,"colorselector/hsb-spinner-composite":eK,"colorselector/hsb-spinner-hue":eU,"colorselector/hsb-spinner-saturation":eU,"colorselector/hsb-spinner-brightness":eU,"colorselector/preview-content-old":{style:function(I){return {decorator:eJ,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(bb){return {decorator:eJ,backgroundColor:eD,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(a){return {decorator:eJ,margin:5};
}},"colorselector/brightness-field":{style:function(gf){return {decorator:eJ,margin:[5,7]};
}},"colorselector/hue-saturation-pane":eK,"colorselector/hue-saturation-handle":eK,"colorselector/brightness-pane":eK,"colorselector/brightness-handle":eK,"colorpopup":{alias:eS,include:eS,style:function(gM){return {padding:5,backgroundColor:es};
}},"colorpopup/field":{style:function(fI){return {decorator:eJ,margin:2,width:14,height:14,backgroundColor:eD};
}},"colorpopup/selector-button":eI,"colorpopup/auto-button":eI,"colorpopup/preview-pane":dp,"colorpopup/current-preview":{style:function(S){return {height:20,padding:4,marginLeft:4,decorator:eJ,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(fT){return {height:20,padding:4,marginRight:4,decorator:eJ,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:eI,include:eI,style:function(hI){return {icon:dN};
}},"colorpopup/colorselector-cancelbutton":{alias:eI,include:eI,style:function(fL){return {icon:dB};
}},"table":{alias:eK,style:function(g){return {decorator:bP};
}},"table-header":{},"table/statusbar":{style:function(hq){return {decorator:dU,padding:[0,2]};
}},"table/column-button":{alias:eM,style:function(hm){return {decorator:bW,padding:3,icon:bh};
}},"table-column-reset-button":{include:dh,alias:dh,style:function(){return {icon:ei};
}},"table-scroller":eK,"table-scroller/scrollbar-x":eW,"table-scroller/scrollbar-y":eW,"table-scroller/header":{style:function(gJ){return {decorator:cK};
}},"table-scroller/pane":{style:function(fU){return {backgroundColor:cM};
}},"table-scroller/focus-indicator":{style:function(gj){return {decorator:cC};
}},"table-scroller/resize-line":{style:function(fO){return {backgroundColor:eB,width:2};
}},"table-header-cell":{alias:eL,style:function(b){return {minWidth:13,minHeight:20,padding:b.hovered?[3,4,2,4]:[3,4],decorator:b.hovered?dr:cy,sortIcon:b.sorted?(b.sortedAscending?dH:be):undefined};
}},"table-header-cell/label":{style:function(gl){return {minWidth:0,alignY:eE,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(ho){return {alignY:eE,alignX:bs};
}},"table-header-cell/icon":{style:function(fw){return {minWidth:0,alignY:eE,paddingRight:5};
}},"table-editor-textfield":{include:eq,style:function(hY){return {decorator:undefined,padding:[2,2],backgroundColor:eD};
}},"table-editor-selectbox":{include:ct,alias:ct,style:function(gz){return {padding:[0,2],backgroundColor:eD};
}},"table-editor-combobox":{include:bm,alias:bm,style:function(gI){return {decorator:undefined,backgroundColor:eD};
}},"progressive-table-header":{alias:eK,style:function(hv){return {decorator:bi};
}},"progressive-table-header-cell":{alias:eL,style:function(ig){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:cQ};
}},"app-header":{style:function(hj){return {font:eF,textColor:eH,padding:[8,12],decorator:cE};
}},"virtual-list":eN,"virtual-list/row-layer":cd,"row-layer":{style:function(hr){return {colorEven:ek,colorOdd:dR};
}},"column-layer":eK,"cell":{style:function(gT){return {textColor:gT.selected?eH:bv,padding:[3,6],font:cp};
}},"cell-string":dm,"cell-number":{include:dm,style:function(f){return {textAlign:bs};
}},"cell-image":dm,"cell-boolean":{include:dm,style:function(gn){return {iconTrue:cx,iconFalse:bC};
}},"cell-atom":dm,"cell-date":dm,"cell-html":dm,"htmlarea":{"include":eK,style:function(hU){return {backgroundColor:ek};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(e){return this._dynamic[e];
},isDynamic:function(f){return !!this._dynamic[f];
},resolve:function(d){if(d&&this._dynamic[d]){return this._dynamic[d];
}return d;
},_setDynamic:function(c){this._dynamic=c;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__fO={};
this.add(a,h);
},members:{__fO:null,_preprocess:function(p){var s=this._getDynamic();

if(s[p]===false){return p;
}else if(s[p]===undefined){if(p.charAt(0)===j||p.charAt(0)===b||p.indexOf(g)===0||p.indexOf(f)===i||p.indexOf(e)===0){s[p]=false;
return p;
}
if(this.__fO[p]){return this.__fO[p];
}var r=p.substring(0,p.indexOf(j));
var q=this.__fO[r];

if(q!==undefined){s[p]=q+p.substring(r.length);
}}return p;
},add:function(l,m){this.__fO[l]=m;
var o=this._getDynamic();
for(var n in o){if(n.substring(0,n.indexOf(j))===l){o[n]=m+n.substring(l.length);
}}},remove:function(k){delete this.__fO[k];
},resolve:function(t){var u=this._getDynamic();

if(t!==null){t=this._preprocess(t);
}return u[t]||t;
}},destruct:function(){this.__fO=null;
}});
})();
(function(){var p="px",o="qx.client",n="div",m="img",l="",k="no-repeat",j="scale-x",i="mshtml",h="scale",g="scale-y",L="qx/icon",K="repeat",J=".png",I="crop",H="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",G='<div style="',F="repeat-y",E='<img src="',D="qx.bom.element.Decoration",C="', sizingMethod='",w="png",x="')",u='"></div>',v='"/>',s='" style="',t="none",q="webkit",r=" ",y="repeat-x",z="DXImageTransform.Microsoft.AlphaImageLoader",B="qx/static/blank.gif",A="absolute";
qx.Class.define(D,{statics:{DEBUG:false,__gl:{},__gm:qx.core.Variant.isSet(o,i),__gn:qx.core.Variant.select(o,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__go:{"scale-x":m,"scale-y":m,"scale":m,"repeat":n,"no-repeat":n,"repeat-x":n,"repeat-y":n},update:function(bs,bt,bu,bv){var bx=this.getTagName(bu,bt);

if(bx!=bs.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var by=this.getAttributes(bt,bu,bv);

if(bx===m){bs.src=by.src||qx.util.ResourceManager.getInstance().toUri(B);
}if(bs.style.backgroundPosition!=l&&by.style.backgroundPosition===undefined){by.style.backgroundPosition=null;
}if(bs.style.clip!=l&&by.style.clip===undefined){by.style.clip=null;
}var bw=qx.bom.element.Style;
bw.setStyles(bs,by.style);
if(this.__gm){try{bs.filters[z].apply();
}catch(e){}}},create:function(bU,bV,bW){var bX=this.getTagName(bV,bU);
var ca=this.getAttributes(bU,bV,bW);
var bY=qx.bom.element.Style.compile(ca.style);

if(bX===m){return E+ca.src+s+bY+v;
}else{return G+bY+u;
}},getTagName:function(bS,bT){if(qx.core.Variant.isSet(o,i)){if(bT&&this.__gm&&this.__gn[bS]&&qx.lang.String.endsWith(bT,J)){return n;
}}return this.__go[bS];
},getAttributes:function(a,b,c){if(!c){c={};
}
if(!c.position){c.position=A;
}
if(qx.core.Variant.isSet(o,i)){c.fontSize=0;
c.lineHeight=0;
}else if(qx.core.Variant.isSet(o,q)){c.WebkitUserDrag=t;
}var f=qx.util.ResourceManager.getInstance().getImageFormat(a)||qx.io.ImageLoader.getFormat(a);
{};
var d;
if(this.__gm&&this.__gn[b]&&f===w){d=this.__gr(c,b,a);
}else{if(b===h){d=this.__gs(c,b,a);
}else if(b===j||b===g){d=this.__gt(c,b,a);
}else{d=this.__gw(c,b,a);
}}return d;
},__gp:function(bb,bc,bd){if(bb.width==null&&bc!=null){bb.width=bc+p;
}
if(bb.height==null&&bd!=null){bb.height=bd+p;
}return bb;
},__gq:function(Q){var R=qx.util.ResourceManager.getInstance().getImageWidth(Q)||qx.io.ImageLoader.getWidth(Q);
var S=qx.util.ResourceManager.getInstance().getImageHeight(Q)||qx.io.ImageLoader.getHeight(Q);
return {width:R,height:S};
},__gr:function(bz,bA,bB){var bE=this.__gq(bB);
bz=this.__gp(bz,bE.width,bE.height);
var bD=bA==k?I:h;
var bC=H+qx.util.ResourceManager.getInstance().toUri(bB)+C+bD+x;
bz.filter=bC;
bz.backgroundImage=bz.backgroundRepeat=l;
return {style:bz};
},__gs:function(be,bf,bh){var bi=qx.util.ResourceManager.getInstance().toUri(bh);
var bj=this.__gq(bh);
be=this.__gp(be,bj.width,bj.height);
return {src:bi,style:be};
},__gt:function(bK,bL,bM){var bQ=qx.util.ResourceManager.getInstance();
var bP=bQ.isClippedImage(bM);
var bR=this.__gq(bM);

if(bP){var bO=bQ.getData(bM);
var bN=bQ.toUri(bO[4]);

if(bL===j){bK=this.__gu(bK,bO,bR.height);
}else{bK=this.__gv(bK,bO,bR.width);
}return {src:bN,style:bK};
}else{{};

if(bL==j){bK.height=bR.height==null?null:bR.height+p;
}else if(bL==g){bK.width=bR.width==null?null:bR.width+p;
}var bN=bQ.toUri(bM);
return {src:bN,style:bK};
}},__gu:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().getImageHeight(bG[4]);
bF.clip={top:-bG[6],height:bH};
bF.height=bI+p;
if(bF.top!=null){bF.top=(parseInt(bF.top,10)+bG[6])+p;
}else if(bF.bottom!=null){bF.bottom=(parseInt(bF.bottom,10)+bH-bI-bG[6])+p;
}return bF;
},__gv:function(M,N,O){var P=qx.util.ResourceManager.getInstance().getImageWidth(N[4]);
M.clip={left:-N[5],width:O};
M.width=P+p;
if(M.left!=null){M.left=(parseInt(M.left,10)+N[5])+p;
}else if(M.right!=null){M.right=(parseInt(M.right,10)+O-P-N[5])+p;
}return M;
},__gw:function(bk,bl,bm){var br=qx.util.ResourceManager.getInstance().isClippedImage(bm);
var bq=this.__gq(bm);
if(br&&bl!==K){var bp=qx.util.ResourceManager.getInstance().getData(bm);
var bo=qx.bom.element.Background.getStyles(bp[4],bl,bp[5],bp[6]);

for(var bn in bo){bk[bn]=bo[bn];
}
if(bq.width!=null&&bk.width==null&&(bl==F||bl===k)){bk.width=bq.width+p;
}
if(bq.height!=null&&bk.height==null&&(bl==y||bl===k)){bk.height=bq.height+p;
}return {style:bk};
}else{{};
bk=this.__gp(bk,bq.width,bq.height);
bk=this.__gx(bk,bm,bl);
return {style:bk};
}},__gx:function(T,U,V){var top=null;
var ba=null;

if(T.backgroundPosition){var W=T.backgroundPosition.split(r);
ba=parseInt(W[0]);

if(isNaN(ba)){ba=W[0];
}top=parseInt(W[1]);

if(isNaN(top)){top=W[1];
}}var Y=qx.bom.element.Background.getStyles(U,V,ba,top);

for(var X in Y){T[X]=Y[X];
}if(T.filter){T.filter=l;
}return T;
},__gy:function(bJ){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bJ)&&bJ.indexOf(L)==-1){if(!this.__gl[bJ]){qx.log.Logger.debug("Potential clipped image candidate: "+bJ);
this.__gl[bJ]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(o,{"mshtml":function(){return qx.bom.element.Decoration.__gm;
},"default":function(){return false;
}})}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(F){if(!F){return k;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?n:J+m);
K=n;
}else{G=(J==null?n:K+J+m);
K=K+m;
}
if(top==null){H=(I==null?n:I+m);
top=n;
}else{H=(I==null?n:top+I+m);
top=top+m;
}return d+top+l+G+l+H+l+K+i;
},get:function(p,q){var s=qx.bom.element.Style.get(p,c,q,false);
var x,top,v,u;
var r,t;

if(typeof s===e&&s!==n&&s!==h){s=qx.lang.String.trim(s);
if(/\((.*)\)/.test(s)){var w=RegExp.$1.split(l);
top=qx.lang.String.trim(w[0]);
r=qx.lang.String.trim(w[1]);
t=qx.lang.String.trim(w[2]);
x=qx.lang.String.trim(w[3]);
if(x===n){x=null;
}
if(top===n){top=null;
}
if(r===n){r=null;
}
if(t===n){t=null;
}if(top!=null){top=parseInt(top,10);
}
if(r!=null){r=parseInt(r,10);
}
if(t!=null){t=parseInt(t,10);
}
if(x!=null){x=parseInt(x,10);
}if(r!=null&&x!=null){v=r-x;
}else if(r!=null){v=r;
}
if(t!=null&&top!=null){u=t-top;
}else if(t!=null){u=t;
}}else{throw new Error("Could not parse clip string: "+s);
}}return {left:x||null,top:top||null,width:v||null,height:u||null};
},set:function(y,z){if(!z){y.style.clip=a;
return;
}var E=z.left;
var top=z.top;
var D=z.width;
var C=z.height;
var A,B;

if(E==null){A=(D==null?n:D+m);
E=n;
}else{A=(D==null?n:E+D+m);
E=E+m;
}
if(top==null){B=(C==null?n:C+m);
top=n;
}else{B=(C==null?n:top+C+m);
top=top+m;
}y.style.clip=j+top+l+A+l+B+l+E+g;
},reset:function(o){o.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__eg:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(a){return g+(this.__eg[a]||a)+e;
},get:function(o,p){return qx.bom.element.Style.get(o,c,p,false);
},set:function(m,n){m.style.cursor=this.__eg[n]||n;
},reset:function(q){q.style.cursor=h;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(v){if(v>=1){return m;
}
if(v<0.00001){v=0;
}return d+(v*100)+f;
},"gecko":function(C){if(C==1){C=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+C+k;
}else{return i+C+k;
}},"default":function(B){if(B==1){return m;
}return i+B+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(E,F){var G=qx.bom.element.Style.get(E,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(F>=1){E.style.filter=G.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(F<0.00001){F=0;
}if(!E.currentStyle||!E.currentStyle.hasLayout){E.style.zoom=1;
}E.style.filter=G.replace(/alpha\([^\)]*\)/gi,m)+c+F*100+e;
},"gecko":function(H,I){if(I==1){I=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){H.style.MozOpacity=I;
}else{H.style.opacity=I;
}},"default":function(w,x){if(x==1){x=m;
}w.style.opacity=x;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(J){var K=qx.bom.element.Style.get(J,j,qx.bom.element.Style.COMPUTED_MODE,false);
J.style.filter=K.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(u){if(qx.bom.client.Engine.VERSION<1.7){u.style.MozOpacity=m;
}else{u.style.opacity=m;
}},"default":function(D){D.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(n,o){var p=qx.bom.element.Style.get(n,j,o,false);

if(p){var q=p.match(/alpha\(opacity=(.*)\)/);

if(q&&q[1]){return parseFloat(q[1])/100;
}}return 1.0;
},"gecko":function(r,s){var t=qx.bom.element.Style.get(r,qx.bom.client.Engine.VERSION<1.7?g:h,s,false);

if(t==0.999999){t=1.0;
}
if(t!=null){return parseFloat(t);
}return 1.0;
},"default":function(y,z){var A=qx.bom.element.Style.get(y,h,z,false);

if(A!=null){return parseFloat(A);
}return 1.0;
}})}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__ci:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__cj:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__ck:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cl:function(v){var w=this.__ck;
return w.tags[v.tagName.toLowerCase()]||w.types[v.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(A){{};
},"default":function(s){var u=this.__cj;
var t=p;

if(u){for(var i=0,l=u.length;i<l;i++){t+=u[i]+m+s+c;
}}return t;
}}),get:qx.core.Variant.select(q,{"mshtml":function(r){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(r))){if(!this.__cl(r)){return d;
}}return k;
},"default":function(x){var z=this.__ci;
var y;

if(z){for(var i=0,l=z.length;i<l;i++){y=qx.bom.element.Style.get(x,z[i],null,false);

if(y!=null&&y!==p){return y;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(F,G){{};
},"default":function(C,D){var E=this.__ci;

if(E){for(var i=0,l=E.length;i<l;i++){C.style[E[i]]=D;
}}}}),reset:function(B){this.set(B,p);
}}});
})();
(function(){var bp="",bo="qx.client",bn="hidden",bm="-moz-scrollbars-none",bl="overflow",bk=";",bj="overflowY",bi=":",bh="overflowX",bg="overflow:",bB="none",bA="scroll",bz="borderLeftStyle",by="borderRightStyle",bx="div",bw="borderRightWidth",bv="overflow-y",bu="borderLeftWidth",bt="-moz-scrollbars-vertical",bs="100px",bq="qx.bom.element.Overflow",br="overflow-x";
qx.Class.define(bq,{statics:{__jv:null,getScrollbarWidth:function(){if(this.__jv!==null){return this.__jv;
}var g=qx.bom.element.Style;
var i=function(bI,bJ){return parseInt(g.get(bI,bJ))||0;
};
var j=function(a){return (g.get(a,by)==bB?0:i(a,bw));
};
var h=function(ca){return (g.get(ca,bz)==bB?0:i(ca,bu));
};
var l=qx.core.Variant.select(bo,{"mshtml":function(cf){if(g.get(cf,bj)==bn||cf.clientWidth==0){return j(cf);
}return Math.max(0,cf.offsetWidth-cf.clientLeft-cf.clientWidth);
},"default":function(o){if(o.clientWidth==0){var p=g.get(o,bl);
var q=(p==bA||p==bt?16:0);
return Math.max(0,j(o)+q);
}return Math.max(0,(o.offsetWidth-o.clientWidth-h(o)));
}});
var k=function(bM){return l(bM)-j(bM);
};
var t=document.createElement(bx);
var s=t.style;
s.height=s.width=bs;
s.overflow=bA;
document.body.appendChild(t);
var c=k(t);
this.__jv=c?c:16;
document.body.removeChild(t);
return this.__jv;
},_compile:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(T,U){if(U==bn){U=bm;
}return bg+U+bk;
}:
function(cd,ce){return cd+bi+ce+bk;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bT,bU){return bg+bU+bk;
}:
function(D,E){return D+bi+E+bk;
},"default":function(bN,bO){return bN+bi+bO+bk;
}}),compileX:function(bV){return this._compile(br,bV);
},compileY:function(V){return this._compile(bv,V);
},getX:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(K,L){var M=qx.bom.element.Style.get(K,bl,L,false);

if(M===bm){M=bn;
}return M;
}:
function(bE,bF){return qx.bom.element.Style.get(bE,bh,bF,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(P,Q){return qx.bom.element.Style.get(P,bl,Q,false);
}:
function(cb,cc){return qx.bom.element.Style.get(cb,bh,cc,false);
},"default":function(b,d){return qx.bom.element.Style.get(b,bh,d,false);
}}),setX:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(v,w){if(w==bn){w=bm;
}v.style.overflow=w;
}:
function(bR,bS){bR.style.overflowX=bS;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(z,A){z.style.overflow=A;
}:
function(e,f){e.style.overflowX=f;
},"default":function(G,H){G.style.overflowX=H;
}}),resetX:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bC){bC.style.overflow=bp;
}:
function(F){F.style.overflowX=bp;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bG,bH){bG.style.overflow=bp;
}:
function(R,S){R.style.overflowX=bp;
},"default":function(bb){bb.style.overflowX=bp;
}}),getY:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bW,bX){var bY=qx.bom.element.Style.get(bW,bl,bX,false);

if(bY===bm){bY=bn;
}return bY;
}:
function(bP,bQ){return qx.bom.element.Style.get(bP,bj,bQ,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(x,y){return qx.bom.element.Style.get(x,bl,y,false);
}:
function(B,C){return qx.bom.element.Style.get(B,bj,C,false);
},"default":function(N,O){return qx.bom.element.Style.get(N,bj,O,false);
}}),setY:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bc,bd){if(bd===bn){bd=bm;
}bc.style.overflow=bd;
}:
function(Y,ba){Y.style.overflowY=ba;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(m,n){m.style.overflow=n;
}:
function(be,bf){be.style.overflowY=bf;
},"default":function(W,X){W.style.overflowY=X;
}}),resetY:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(u){u.style.overflow=bp;
}:
function(r){r.style.overflowY=bp;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(I,J){I.style.overflow=bp;
}:
function(bK,bL){bK.style.overflowY=bp;
},"default":function(bD){bD.style.overflowY=bp;
}})}});
})();
(function(){var m="",k="qx.client",h="userSelect",g="style",f="MozUserModify",e="px",d="float",c="borderImage",b="styleFloat",a="appearance",F="pixelHeight",E='Ms',D=":",C="cssFloat",B="pixelTop",A="pixelLeft",z='O',y="qx.bom.element.Style",x='Khtml',w='string',t="pixelRight",u='Moz',r="pixelWidth",s="pixelBottom",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(y,{statics:{__bS:function(){var bw=[a,h,q,c];
var bA={};
var bx=document.documentElement.style;
var bB=[u,o,x,z,E];

for(var i=0,l=bw.length;i<l;i++){var bC=bw[i];
var by=bC;

if(bx[bC]){bA[by]=bC;
continue;
}bC=qx.lang.String.firstUp(bC);

for(var j=0,bD=bB.length;j<bD;j++){var bz=bB[j]+bC;

if(typeof bx[bz]==w){bA[by]=bz;
break;
}}}this.__bT=bA;
this.__bT[n]=qx.core.Variant.select(k,{"gecko":f,"webkit":v,"default":h});
this.__bU={};

for(var by in bA){this.__bU[by]=this.__bY(bA[by]);
}this.__bT[d]=qx.core.Variant.select(k,{"mshtml":b,"default":C});
},__bV:{width:r,height:F,left:A,right:t,top:B,bottom:s},__bW:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(M){var O=[];
var Q=this.__bW;
var P=this.__bU;
var name,N;

for(name in M){N=M[name];

if(N==null){continue;
}name=P[name]||name;
if(Q[name]){O.push(Q[name].compile(N));
}else{O.push(this.__bY(name),D,N,p);
}}return O.join(m);
},__bX:{},__bY:function(J){var K=this.__bX;
var L=K[J];

if(!L){L=K[J]=qx.lang.String.hyphenate(J);
}return L;
},setCss:qx.core.Variant.select(k,{"mshtml":function(bg,bh){bg.style.cssText=bh;
},"default":function(bl,bm){bl.setAttribute(g,bm);
}}),getCss:qx.core.Variant.select(k,{"mshtml":function(bj){return bj.style.cssText.toLowerCase();
},"default":function(bi){return bi.getAttribute(g);
}}),isPropertySupported:function(bk){return (this.__bW[bk]||this.__bT[bk]||bk in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(G,name,H,I){{};
name=this.__bT[name]||name;
if(I!==false&&this.__bW[name]){return this.__bW[name].set(G,H);
}else{G.style[name]=H!==null?H:m;
}},setStyles:function(bn,bo,bp){{};
var bs=this.__bT;
var bu=this.__bW;
var bq=bn.style;

for(var bt in bo){var br=bo[bt];
var name=bs[bt]||bt;

if(br===undefined){if(bp!==false&&bu[name]){bu[name].reset(bn);
}else{bq[name]=m;
}}else{if(bp!==false&&bu[name]){bu[name].set(bn,br);
}else{bq[name]=br!==null?br:m;
}}}},reset:function(R,name,S){name=this.__bT[name]||name;
if(S!==false&&this.__bW[name]){return this.__bW[name].reset(R);
}else{R.style[name]=m;
}},get:qx.core.Variant.select(k,{"mshtml":function(Y,name,ba,bb){name=this.__bT[name]||name;
if(bb!==false&&this.__bW[name]){return this.__bW[name].get(Y,ba);
}if(!Y.currentStyle){return Y.style[name]||m;
}switch(ba){case this.LOCAL_MODE:return Y.style[name]||m;
case this.CASCADED_MODE:return Y.currentStyle[name]||m;
default:var bf=Y.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bf)){return bf;
}var be=this.__bV[name];

if(be){var bc=Y.style[name];
Y.style[name]=bf||0;
var bd=Y.style[be]+e;
Y.style[name]=bc;
return bd;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bf)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bf;
}},"default":function(T,name,U,V){name=this.__bT[name]||name;
if(V!==false&&this.__bW[name]){return this.__bW[name].get(T,U);
}switch(U){case this.LOCAL_MODE:return T.style[name]||m;
case this.CASCADED_MODE:if(T.currentStyle){return T.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var W=qx.dom.Node.getDocument(T);
var X=W.defaultView.getComputedStyle(T,null);
return X?X[name]:m;
}}})},defer:function(bv){bv.__bS();
}});
})();
(function(){var h="qx.client",g="load",f="qx.io.ImageLoader";
qx.Bootstrap.define(f,{statics:{__jV:{},__jW:{width:null,height:null},__jX:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(G){var H=this.__jV[G];
return !!(H&&H.loaded);
},isFailed:function(B){var C=this.__jV[B];
return !!(C&&C.failed);
},isLoading:function(r){var s=this.__jV[r];
return !!(s&&s.loading);
},getFormat:function(y){var z=this.__jV[y];
return z?z.format:null;
},getSize:function(v){var w=this.__jV[v];
return w?
{width:w.width,height:w.height}:this.__jW;
},getWidth:function(t){var u=this.__jV[t];
return u?u.width:null;
},getHeight:function(D){var E=this.__jV[D];
return E?E.height:null;
},load:function(j,k,m){var n=this.__jV[j];

if(!n){n=this.__jV[j]={};
}if(k&&!m){m=window;
}if(n.loaded||n.loading||n.failed){if(k){if(n.loading){n.callbacks.push(k,m);
}else{k.call(m,j,n);
}}}else{n.loading=true;
n.callbacks=[];

if(k){n.callbacks.push(k,m);
}var p=new Image();
var o=qx.lang.Function.listener(this.__jY,this,p,j);
p.onload=o;
p.onerror=o;
p.src=j;
}},__jY:qx.event.GlobalError.observeMethod(function(event,a,b){var c=this.__jV[b];
if(event.type===g){c.loaded=true;
c.width=this.__ka(a);
c.height=this.__kb(a);
var d=this.__jX.exec(b);

if(d!=null){c.format=d[1];
}}else{c.failed=true;
}a.onload=a.onerror=null;
var e=c.callbacks;
delete c.loading;
delete c.callbacks;
for(var i=0,l=e.length;i<l;i+=2){e[i].call(e[i+1],b,c);
}}),__ka:qx.core.Variant.select(h,{"gecko":function(F){return F.naturalWidth;
},"default":function(x){return x.width;
}}),__kb:qx.core.Variant.select(h,{"gecko":function(q){return q.naturalHeight;
},"default":function(A){return A.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__cs:[i,null,h,b,null,j,e,null,j],__ct:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cu:function(t,top){var u=qx.bom.client.Engine;

if(u.GECKO&&u.VERSION<1.9&&t==top&&typeof t==m){top+=0.01;
}
if(t){var v=(typeof t==m)?t+k:t;
}else{v=l;
}
if(top){var w=(typeof top==m)?top+k:top;
}else{w=l;
}return v+d+w;
},compile:function(D,E,F,top){var G=this.__cu(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I=this.__cs;
I[1]=H;
I[4]=G;
I[7]=E;
return I.join(g);
},getStyles:function(x,y,z,top){if(!x){return this.__ct;
}var A=this.__cu(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C={backgroundPosition:A,backgroundImage:c+B+f};

if(y!=null){C.backgroundRepeat=y;
}return C;
},set:function(n,o,p,q,top){var r=this.getStyles(o,p,q,top);

for(var s in r){n.style[s]=r[s];
}}}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(n){var o={};

if(n){var p=n.colors;
var q=qx.util.ColorUtil;
var r;

for(var s in p){r=p[s];

if(typeof r===b){if(!q.isCssString(r)){throw new Error("Could not parse color: "+r);
}}else if(r instanceof Array){r=q.rgbToRgbString(r);
}else{throw new Error("Could not parse color: "+r);
}o[s]=r;
}}this._setDynamic(o);
},resolve:function(g){var j=this._dynamic;
var h=j[g];

if(h){return h;
}var i=this.getTheme();

if(i!==null&&i.colors[g]){return j[g]=i.colors[g];
}return g;
},isDynamic:function(k){var m=this._dynamic;

if(k&&(m[k]!==undefined)){return true;
}var l=this.getTheme();

if(l!==null&&k&&(l.colors[k]!==undefined)){m[k]=l.colors[k];
return true;
}return false;
}}});
})();
(function(){var bb=",",ba="rgb(",Y=")",X="qx.theme.manager.Color",W="qx.util.ColorUtil";
qx.Class.define(W,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(c){return this.NAMED[c]!==undefined;
},isSystemColor:function(d){return this.SYSTEM[d]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(X);
},isThemedColor:function(L){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(L);
},stringToRgb:function(a){if(this.supportsThemes()&&this.isThemedColor(a)){var a=qx.theme.manager.Color.getInstance().resolveDynamic(a);
}
if(this.isNamedColor(a)){return this.NAMED[a];
}else if(this.isSystemColor(a)){throw new Error("Could not convert system colors to RGB: "+a);
}else if(this.isRgbString(a)){return this.__fK();
}else if(this.isHex3String(a)){return this.__fM();
}else if(this.isHex6String(a)){return this.__fN();
}throw new Error("Could not parse color: "+a);
},cssStringToRgb:function(s){if(this.isNamedColor(s)){return this.NAMED[s];
}else if(this.isSystemColor(s)){throw new Error("Could not convert system colors to RGB: "+s);
}else if(this.isRgbString(s)){return this.__fK();
}else if(this.isRgbaString(s)){return this.__fL();
}else if(this.isHex3String(s)){return this.__fM();
}else if(this.isHex6String(s)){return this.__fN();
}throw new Error("Could not parse color: "+s);
},stringToRgbString:function(V){return this.rgbToRgbString(this.stringToRgb(V));
},rgbToRgbString:function(bc){return ba+bc[0]+bb+bc[1]+bb+bc[2]+Y;
},rgbToHexString:function(v){return (qx.lang.String.pad(v[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(v[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(v[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(u){return this.isThemedColor(u)||this.isNamedColor(u)||this.isHex3String(u)||this.isHex6String(u)||this.isRgbString(u);
},isCssString:function(bd){return this.isSystemColor(bd)||this.isNamedColor(bd)||this.isHex3String(bd)||this.isHex6String(bd)||this.isRgbString(bd);
},isHex3String:function(bi){return this.REGEXP.hex3.test(bi);
},isHex6String:function(l){return this.REGEXP.hex6.test(l);
},isRgbString:function(be){return this.REGEXP.rgb.test(be);
},isRgbaString:function(x){return this.REGEXP.rgba.test(x);
},__fK:function(){var bh=parseInt(RegExp.$1,10);
var bg=parseInt(RegExp.$2,10);
var bf=parseInt(RegExp.$3,10);
return [bh,bg,bf];
},__fL:function(){var O=parseInt(RegExp.$1,10);
var N=parseInt(RegExp.$2,10);
var M=parseInt(RegExp.$3,10);
return [O,N,M];
},__fM:function(){var o=parseInt(RegExp.$1,16)*17;
var n=parseInt(RegExp.$2,16)*17;
var m=parseInt(RegExp.$3,16)*17;
return [o,n,m];
},__fN:function(){var k=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var j=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var h=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [k,j,h];
},hex3StringToRgb:function(y){if(this.isHex3String(y)){return this.__fM(y);
}throw new Error("Invalid hex3 value: "+y);
},hex6StringToRgb:function(w){if(this.isHex6String(w)){return this.__fN(w);
}throw new Error("Invalid hex6 value: "+w);
},hexStringToRgb:function(e){if(this.isHex3String(e)){return this.__fM(e);
}
if(this.isHex6String(e)){return this.__fN(e);
}throw new Error("Invalid hex value: "+e);
},rgbToHsb:function(z){var B,C,E;
var K=z[0];
var H=z[1];
var A=z[2];
var J=(K>H)?K:H;

if(A>J){J=A;
}var D=(K<H)?K:H;

if(A<D){D=A;
}E=J/255.0;

if(J!=0){C=(J-D)/J;
}else{C=0;
}
if(C==0){B=0;
}else{var G=(J-K)/(J-D);
var I=(J-H)/(J-D);
var F=(J-A)/(J-D);

if(K==J){B=F-I;
}else if(H==J){B=2.0+G-F;
}else{B=4.0+I-G;
}B=B/6.0;

if(B<0){B=B+1.0;
}}return [Math.round(B*360),Math.round(C*100),Math.round(E*100)];
},hsbToRgb:function(P){var i,f,p,q,t;
var Q=P[0]/360;
var R=P[1]/100;
var S=P[2]/100;

if(Q>=1.0){Q%=1.0;
}
if(R>1.0){R=1.0;
}
if(S>1.0){S=1.0;
}var T=Math.floor(255*S);
var U={};

if(R==0.0){U.red=U.green=U.blue=T;
}else{Q*=6.0;
i=Math.floor(Q);
f=Q-i;
p=Math.floor(T*(1.0-R));
q=Math.floor(T*(1.0-(R*f)));
t=Math.floor(T*(1.0-(R*(1.0-f))));

switch(i){case 0:U.red=T;
U.green=t;
U.blue=p;
break;
case 1:U.red=q;
U.green=T;
U.blue=p;
break;
case 2:U.red=p;
U.green=T;
U.blue=t;
break;
case 3:U.red=p;
U.green=q;
U.blue=T;
break;
case 4:U.red=t;
U.green=p;
U.blue=T;
break;
case 5:U.red=T;
U.green=p;
U.blue=q;
break;
}}return [U.red,U.green,U.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var l="_applyStyle",k="stretch",j="Integer",i="px",h=" ",g="repeat",f="round",e="shorthand",d="px ",c="sliceBottom",A=";'></div>",z="<div style='",y="sliceLeft",x="sliceRight",w="repeatX",v="String",u="qx.ui.decoration.css3.BorderImage",t="border-box",s="",r='") ',p="sliceTop",q='url("',n="hidden",o="repeatY",m="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,construct:function(F,G){qx.ui.decoration.Abstract.call(this);
if(F!=null){this.setBorderImage(F);
}
if(G!=null){this.setSlice(G);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:v,nullable:true,apply:l},sliceTop:{check:j,init:0,apply:l},sliceRight:{check:j,init:0,apply:l},sliceBottom:{check:j,init:0,apply:l},sliceLeft:{check:j,init:0,apply:l},slice:{group:[p,x,c,y],mode:e},repeatX:{check:[k,g,f],init:k,apply:l},repeatY:{check:[k,g,f],init:k,apply:l},repeat:{group:[w,o],mode:e}},members:{__lN:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lN;
},getMarkup:function(){if(this.__lN){return this.__lN;
}var B=this._resolveImageUrl(this.getBorderImage());
var C=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var D=[this.getRepeatX(),this.getRepeatY()].join(h);
this.__lN=[z,qx.bom.element.Style.compile({"borderImage":q+B+r+C.join(h)+h+D,position:m,lineHeight:0,fontSize:0,overflow:n,boxSizing:t,borderWidth:C.join(d)+i}),A].join(s);
return this.__lN;
},resize:function(H,I,J){H.style.width=I+i;
H.style.height=J+i;
},tint:function(a,b){},_applyStyle:function(){{};
},_resolveImageUrl:function(E){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(E));
}},destruct:function(){this.__lN=null;
}});
})();
(function(){var l="px",k="0px",j="-1px",i="no-repeat",h="scale-x",g="scale-y",f="-tr",e="-l",d='</div>',c="scale",z="qx.client",y="-br",x="-t",w="-tl",v="-r",u='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',t="_applyBaseImage",s="-b",r="String",q="",o="-bl",p="qx.ui.decoration.GridDiv",m="-c",n="mshtml";
qx.Class.define(p,{extend:qx.ui.decoration.Abstract,construct:function(a,b){qx.ui.decoration.Abstract.call(this);
if(a!=null){this.setBaseImage(a);
}
if(b!=null){this.setInsets(b);
}},properties:{baseImage:{check:r,nullable:true,apply:t}},members:{__lO:null,__lP:null,__lQ:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lO;
},getMarkup:function(){if(this.__lO){return this.__lO;
}var H=qx.bom.element.Decoration;
var I=this.__lP;
var J=this.__lQ;
var K=[];
K.push(u);
K.push(H.create(I.tl,i,{top:0,left:0}));
K.push(H.create(I.t,h,{top:0,left:J.left+l}));
K.push(H.create(I.tr,i,{top:0,right:0}));
K.push(H.create(I.bl,i,{bottom:0,left:0}));
K.push(H.create(I.b,h,{bottom:0,left:J.left+l}));
K.push(H.create(I.br,i,{bottom:0,right:0}));
K.push(H.create(I.l,g,{top:J.top+l,left:0}));
K.push(H.create(I.c,c,{top:J.top+l,left:J.left+l}));
K.push(H.create(I.r,g,{top:J.top+l,right:0}));
K.push(d);
return this.__lO=K.join(q);
},resize:function(A,B,C){var D=this.__lQ;
var innerWidth=B-D.left-D.right;
var innerHeight=C-D.top-D.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}A.style.width=B+l;
A.style.height=C+l;
A.childNodes[1].style.width=innerWidth+l;
A.childNodes[4].style.width=innerWidth+l;
A.childNodes[7].style.width=innerWidth+l;
A.childNodes[6].style.height=innerHeight+l;
A.childNodes[7].style.height=innerHeight+l;
A.childNodes[8].style.height=innerHeight+l;

if(qx.core.Variant.isSet(z,n)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(B%2==1){A.childNodes[2].style.marginRight=j;
A.childNodes[5].style.marginRight=j;
A.childNodes[8].style.marginRight=j;
}else{A.childNodes[2].style.marginRight=k;
A.childNodes[5].style.marginRight=k;
A.childNodes[8].style.marginRight=k;
}
if(C%2==1){A.childNodes[3].style.marginBottom=j;
A.childNodes[4].style.marginBottom=j;
A.childNodes[5].style.marginBottom=j;
}else{A.childNodes[3].style.marginBottom=k;
A.childNodes[4].style.marginBottom=k;
A.childNodes[5].style.marginBottom=k;
}}}},tint:function(F,G){},_applyBaseImage:function(L,M){{};

if(L){var Q=this._resolveImageUrl(L);
var R=/(.*)(\.[a-z]+)$/.exec(Q);
var P=R[1];
var O=R[2];
var N=this.__lP={tl:P+w+O,t:P+x+O,tr:P+f+O,bl:P+o+O,b:P+s+O,br:P+y+O,l:P+e+O,c:P+m+O,r:P+v+O};
this.__lQ=this._computeEdgeSizes(N);
}},_resolveImageUrl:function(E){return qx.util.AliasManager.getInstance().resolve(E);
},_computeEdgeSizes:function(S){var T=qx.util.ResourceManager.getInstance();
return {top:T.getImageHeight(S.t),bottom:T.getImageHeight(S.b),left:T.getImageWidth(S.l),right:T.getImageWidth(S.r)};
}},destruct:function(){this.__lO=this.__lP=this.__lQ=null;
}});
})();


qx.$$loader.init();

