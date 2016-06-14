(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.progressive.ProgressiveTable_Conditional","qx.theme":"qx.theme.Classic"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.progressive.ProgressiveTable_Conditional-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"cf9717d8c3e9"},
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

qx.$$packageData['cf9717d8c3e9']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};
(function(){var r="toString",q=".",p="default",o="Object",n='"',m="Array",k="()",j="String",h="Function",g=".prototype",Q="function",P="Boolean",O="Error",N="constructor",M="warn",L="hasOwnProperty",K="string",J="toLocaleString",I="RegExp",H='\", "',y="info",z="BROKEN_IE",w="isPrototypeOf",x="Date",u="",v="qx.Bootstrap",s="]",t="Class",A="error",B="[Class ",D="valueOf",C="Number",F="count",E="debug",G="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return B+this.classname+s;
},createNamespace:function(name,bd){var bf=name.split(q);
var parent=window;
var be=bf[0];

for(var i=0,bg=bf.length-1;i<bg;i++,be=bf[i]){if(!parent[be]){parent=parent[be]={};
}else{parent=parent[be];
}}parent[be]=bd;
return be;
},setDisplayName:function(cd,ce,name){cd.displayName=ce+q+name+k;
},setDisplayNames:function(bT,bU){for(var name in bT){var bV=bT[name];

if(bV instanceof Function){bV.displayName=bU+q+name+k;
}}},define:function(name,bx){if(!bx){var bx={statics:{}};
}var bC;
var bA=null;
qx.Bootstrap.setDisplayNames(bx.statics,name);

if(bx.members||bx.extend){qx.Bootstrap.setDisplayNames(bx.members,name+g);
bC=bx.construct||new Function;

if(bx.extend){this.extendClass(bC,bC,bx.extend,name,bB);
}var by=bx.statics||{};
for(var i=0,bD=qx.Bootstrap.getKeys(by),l=bD.length;i<l;i++){var bE=bD[i];
bC[bE]=by[bE];
}bA=bC.prototype;
var bz=bx.members||{};
for(var i=0,bD=qx.Bootstrap.getKeys(bz),l=bD.length;i<l;i++){var bE=bD[i];
bA[bE]=bz[bE];
}}else{bC=bx.statics||{};
}var bB=this.createNamespace(name,bC);
bC.name=bC.classname=name;
bC.basename=bB;
bC.$$type=t;
if(!bC.hasOwnProperty(r)){bC.toString=this.genericToString;
}if(bx.defer){bx.defer(bC,bA);
}qx.Bootstrap.$$registry[name]=bx.statics;
return bC;
}};
qx.Bootstrap.define(v,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bh,bi,bj,name,bk){var bn=bj.prototype;
var bm=new Function;
bm.prototype=bn;
var bl=new bm;
bh.prototype=bl;
bl.name=bl.classname=name;
bl.basename=bk;
bi.base=bh.superclass=bj;
bi.self=bh.constructor=bl.constructor=bh;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bF){return bF.__count__;
},"default":function(ca){var length=0;

for(var cb in ca){length++;
}return length;
}})[(({}).__count__==0)?F:p],objectMergeWith:function(b,c,d){if(d===undefined){d=true;
}
for(var e in c){if(d||b[e]===undefined){b[e]=c[e];
}}return b;
},__a:[w,L,J,r,D,N],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(cf){var cg=[];

for(var cj in cf){cg.push(cj);
}var ch=qx.Bootstrap.__a;
var ci=Object.prototype.hasOwnProperty;

for(var i=0,a=ch,l=a.length;i<l;i++){if(ci.call(cf,a[i])){cg.push(a[i]);
}}return cg;
},"default":function(W){var X=[];

for(var Y in W){X.push(Y);
}return X;
}})[typeof (Object.keys)==
Q?G:
(function(){for(var bX in {toString:1}){return bX;
}})()!==r?z:p],getKeysAsString:function(bo){var bp=qx.Bootstrap.getKeys(bo);

if(bp.length==0){return u;
}return n+bp.join(H)+n;
},__b:{"[object String]":j,"[object Array]":m,"[object Object]":o,"[object RegExp]":I,"[object Number]":C,"[object Boolean]":P,"[object Date]":x,"[object Function]":h,"[object Error]":O},bind:function(bt,self,bu){var bv=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bW=Array.prototype.slice.call(arguments,0,arguments.length);
return bt.apply(self,bv.concat(bW));
};
},firstUp:function(bI){return bI.charAt(0).toUpperCase()+bI.substr(1);
},firstLow:function(f){return f.charAt(0).toLowerCase()+f.substr(1);
},getClass:function(R){var S=Object.prototype.toString.call(R);
return (qx.Bootstrap.__b[S]||S.slice(8,-1));
},isString:function(bQ){return (bQ!==null&&(typeof bQ===K||qx.Bootstrap.getClass(bQ)==j||bQ instanceof String||(!!bQ&&!!bQ.$$isString)));
},isArray:function(T){return (T!==null&&(T instanceof Array||(T&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(T.constructor,qx.data.IListData))||qx.Bootstrap.getClass(T)==m||(!!T&&!!T.$$isArray)));
},isObject:function(bw){return (bw!==undefined&&bw!==null&&qx.Bootstrap.getClass(bw)==o);
},isFunction:function(bS){return qx.Bootstrap.getClass(bS)==h;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bY,name){while(bY){if(bY.$$properties&&bY.$$properties[name]){return bY.$$properties[name];
}bY=bY.superclass;
}return null;
},hasProperty:function(bs,name){return !!qx.Bootstrap.getPropertyDefinition(bs,name);
},getEventType:function(bR,name){var bR=bR.constructor;

while(bR.superclass){if(bR.$$events&&bR.$$events[name]!==undefined){return bR.$$events[name];
}bR=bR.superclass;
}return null;
},supportsEvent:function(ba,name){return !!qx.Bootstrap.getEventType(ba,name);
},getByInterface:function(bL,bM){var bN,i,l;

while(bL){if(bL.$$implements){bN=bL.$$flatImplements;

for(i=0,l=bN.length;i<l;i++){if(bN[i]===bM){return bL;
}}}bL=bL.superclass;
}return null;
},hasInterface:function(bb,bc){return !!qx.Bootstrap.getByInterface(bb,bc);
},getMixins:function(bG){var bH=[];

while(bG){if(bG.$$includes){bH.push.apply(bH,bG.$$flatIncludes);
}bG=bG.superclass;
}return bH;
},$$logs:[],debug:function(U,V){qx.Bootstrap.$$logs.push([E,arguments]);
},info:function(bO,bP){qx.Bootstrap.$$logs.push([y,arguments]);
},warn:function(bJ,bK){qx.Bootstrap.$$logs.push([M,arguments]);
},error:function(bq,br){qx.Bootstrap.$$logs.push([A,arguments]);
},trace:function(cc){}}});
})();
(function(){var l="qx.allowUrlSettings",k="&",j="qx.core.Setting",h="qx.allowUrlVariants",g="qx.propertyDebugLevel",f="qxsetting",e=":",d=".";
qx.Bootstrap.define(j,{statics:{__c:{},define:function(m,n){if(n===undefined){throw new Error('Default value of setting "'+m+'" must be defined!');
}
if(!this.__c[m]){this.__c[m]={};
}else if(this.__c[m].defaultValue!==undefined){throw new Error('Setting "'+m+'" is already defined!');
}this.__c[m].defaultValue=n;
},get:function(a){var b=this.__c[a];

if(b===undefined){throw new Error('Setting "'+a+'" is not defined.');
}
if(b.value!==undefined){return b.value;
}return b.defaultValue;
},set:function(o,p){if((o.split(d)).length<2){throw new Error('Malformed settings key "'+o+'". Must be following the schema "namespace.key".');
}
if(!this.__c[o]){this.__c[o]={};
}this.__c[o].value=p;
},__d:function(){if(window.qxsettings){for(var q in window.qxsettings){this.set(q,window.qxsettings[q]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(c){}this.__e();
}},__e:function(){if(this.get(l)!=true){return;
}var t=document.location.search.slice(1).split(k);

for(var i=0;i<t.length;i++){var s=t[i].split(e);

if(s.length!=3||s[0]!=f){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(r){r.define(l,false);
r.define(h,false);
r.define(g,0);
r.__d();
}});
})();
(function(){var t="function",s="Boolean",r="qx.Interface",q="]",p="toggle",o="Interface",n="is",m="[Interface ";
qx.Bootstrap.define(r,{statics:{define:function(name,x){if(x){if(x.extend&&!(x.extend instanceof Array)){x.extend=[x.extend];
}{};
var y=x.statics?x.statics:{};
if(x.extend){y.$$extends=x.extend;
}
if(x.properties){y.$$properties=x.properties;
}
if(x.members){y.$$members=x.members;
}
if(x.events){y.$$events=x.events;
}}else{var y={};
}y.$$type=o;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
qx.Interface.$$registry[name]=y;
return y;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(M){if(!M){return [];
}var N=M.concat();

for(var i=0,l=M.length;i<l;i++){if(M[i].$$extends){N.push.apply(N,this.flatten(M[i].$$extends));
}}return N;
},__f:function(D,E,F,G){var K=F.$$members;

if(K){for(var J in K){if(qx.Bootstrap.isFunction(K[J])){var I=this.__g(E,J);
var H=I||qx.Bootstrap.isFunction(D[J]);

if(!H){throw new Error('Implementation of method "'+J+'" is missing in class "'+E.classname+'" required by interface "'+F.name+'"');
}var L=G===true&&!I&&!qx.Bootstrap.hasInterface(E,F);

if(L){D[J]=this.__j(F,D[J],J,K[J]);
}}else{if(typeof D[J]===undefined){if(typeof D[J]!==t){throw new Error('Implementation of member "'+J+'" is missing in class "'+E.classname+'" required by interface "'+F.name+'"');
}}}}}},__g:function(a,b){var f=b.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!f){return false;
}var c=qx.Bootstrap.firstLow(f[2]);
var d=qx.Bootstrap.getPropertyDefinition(a,c);

if(!d){return false;
}var e=f[0]==n||f[0]==p;

if(e){return qx.Bootstrap.getPropertyDefinition(a,c).check==s;
}return true;
},__h:function(u,v){if(v.$$properties){for(var w in v.$$properties){if(!qx.Bootstrap.getPropertyDefinition(u,w)){throw new Error('The property "'+w+'" is not supported by Class "'+u.classname+'"!');
}}}},__i:function(O,P){if(P.$$events){for(var Q in P.$$events){if(!qx.Bootstrap.supportsEvent(O,Q)){throw new Error('The event "'+Q+'" is not supported by Class "'+O.classname+'"!');
}}}},assertObject:function(g,h){var k=g.constructor;
this.__f(g,k,h,false);
this.__h(k,h);
this.__i(k,h);
var j=h.$$extends;

if(j){for(var i=0,l=j.length;i<l;i++){this.assertObject(g,j[i]);
}}},assert:function(z,A,B){this.__f(z.prototype,z,A,B);
this.__h(z,A);
this.__i(z,A);
var C=A.$$extends;

if(C){for(var i=0,l=C.length;i<l;i++){this.assert(z,C[i],B);
}}},genericToString:function(){return m+this.name+q;
},$$registry:{},__j:function(){},__k:null,__l:function(){}}});
})();
(function(){var q="qx.Mixin",p=".prototype",o="constructor",n="[Mixin ",m="]",k="destruct",j="Mixin";
qx.Bootstrap.define(q,{statics:{define:function(name,t){if(t){if(t.include&&!(t.include instanceof Array)){t.include=[t.include];
}{};
var v=t.statics?t.statics:{};
qx.Bootstrap.setDisplayNames(v,name);

for(var u in v){if(v[u] instanceof Function){v[u].$$mixin=v;
}}if(t.construct){v.$$constructor=t.construct;
qx.Bootstrap.setDisplayName(t.construct,name,o);
}
if(t.include){v.$$includes=t.include;
}
if(t.properties){v.$$properties=t.properties;
}
if(t.members){v.$$members=t.members;
qx.Bootstrap.setDisplayNames(t.members,name+p);
}
for(var u in v.$$members){if(v.$$members[u] instanceof Function){v.$$members[u].$$mixin=v;
}}
if(t.events){v.$$events=t.events;
}
if(t.destruct){v.$$destructor=t.destruct;
qx.Bootstrap.setDisplayName(t.destruct,name,k);
}}else{var v={};
}v.$$type=j;
v.name=name;
v.toString=this.genericToString;
v.basename=qx.Bootstrap.createNamespace(name,v);
this.$$registry[name]=v;
return v;
},checkCompatibility:function(a){var d=this.flatten(a);
var e=d.length;

if(e<2){return true;
}var h={};
var g={};
var f={};
var c;

for(var i=0;i<e;i++){c=d[i];

for(var b in c.events){if(f[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+f[b]+'" in member "'+b+'"!');
}f[b]=c.name;
}
for(var b in c.properties){if(h[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+h[b]+'" in property "'+b+'"!');
}h[b]=c.name;
}
for(var b in c.members){if(g[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+g[b]+'" in member "'+b+'"!');
}g[b]=c.name;
}}return true;
},isCompatible:function(w,x){var y=qx.Bootstrap.getMixins(x);
y.push(w);
return qx.Mixin.checkCompatibility(y);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(r){if(!r){return [];
}var s=r.concat();

for(var i=0,l=r.length;i<l;i++){if(r[i].$$includes){s.push.apply(s,this.flatten(r[i].$$includes));
}}return s;
},genericToString:function(){return n+this.name+m;
},$$registry:{},__m:null,__n:function(){}}});
})();
(function(){var cd=';',cc="boolean",cb='return this.',ca="string",bY="",bX="setThemed",bW='!==undefined)',bV="this.",bU="set",bT="resetThemed",bI="setRuntime",bH="init",bG='else if(this.',bF="resetRuntime",bE="reset",bD="();",bC='else ',bB='if(this.',bA="return this.",bz="get",ck=";",cl="(a[",ci=' of an instance of ',cj="refresh",cg=' is not (yet) ready!");',ch="]);",ce='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',cf='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',cm='value !== null && value.nodeType === 9 && value.documentElement',cn='value !== null && value.$$type === "Mixin"',bM='return init;',bL='var init=this.',bO='value !== null && value.nodeType === 1 && value.attributes',bN="var parent = this.getLayoutParent();",bQ="Error in property ",bP='qx.core.Assert.assertInstance(value, Date, msg) || true',bS="if (!parent) return;",bR=" in method ",bK='qx.core.Assert.assertInstance(value, Error, msg) || true',bJ='Undefined value is not allowed!',D="inherit",E='Is invalid!',F="MSIE 6.0",G="': ",H=" of class ",I='value !== null && value.nodeType !== undefined',J='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',K='qx.core.Assert.assertPositiveInteger(value, msg) || true',L='if(init==qx.core.Property.$$inherit)init=null;',M='value !== null && value.$$type === "Interface"',cr='var inherit=prop.$$inherit;',cq="var value = parent.",cp="$$useinit_",co="(value);",cv="$$runtime_",cu='Requires exactly one argument!',ct="$$user_",cs='qx.core.Assert.assertArray(value, msg) || true',cx='qx.core.Assert.assertPositiveNumber(value, msg) || true',cw=".prototype",bj="Boolean",bk='return value;',bh='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bi='Does not allow any arguments!',bn="()",bo="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bl='value !== null && value.$$type === "Theme"',bm="())",bf='return null;',bg='qx.core.Assert.assertObject(value, msg) || true',U='qx.core.Assert.assertString(value, msg) || true',T="if (value===undefined) value = parent.",W='value !== null && value.$$type === "Class"',V='qx.core.Assert.assertFunction(value, msg) || true',Q="object",P="$$init_",S="$$theme_",R='qx.core.Assert.assertMap(value, msg) || true',O='qx.core.Assert.assertNumber(value, msg) || true',N='Null value is not allowed!',bt='qx.core.Assert.assertInteger(value, msg) || true',bu="value",bv="rv:1.8.1",bw="shorthand",bp='qx.core.Assert.assertInstance(value, RegExp, msg) || true',bq='value !== null && value.type !== undefined',br='value !== null && value.document',bs='throw new Error("Property ',bx="(!this.",by='qx.core.Assert.assertBoolean(value, msg) || true',be="toggle",bd="$$inherit_",bc=" with incoming value '",bb="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",ba="qx.core.Property",Y="is",X='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(ba,{statics:{__o:{"Boolean":by,"String":U,"Number":O,"Integer":bt,"PositiveNumber":cx,"PositiveInteger":K,"Error":bK,"RegExp":bp,"Object":bg,"Array":cs,"Map":R,"Function":V,"Date":bP,"Node":I,"Element":bO,"Document":cm,"Window":br,"Event":bq,"Class":W,"Mixin":cn,"Interface":M,"Theme":bl,"Color":ce,"Decorator":J,"Font":cf},__p:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:D,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:ca,dispose:cc,dereference:cc,inheritable:cc,nullable:cc,themeable:cc,refine:cc,init:null,apply:ca,event:ca,check:null,transform:ca,deferredInit:cc,validate:null},$$allowedGroupKeys:{name:ca,group:Q,mode:ca,themeable:cc},$$inheritable:{},__q:function(cG){var cH=this.__r(cG);

if(!cH.length){var cI=qx.lang.Function.empty;
}else{cI=this.__s(cH);
}cG.prototype.$$refreshInheritables=cI;
},__r:function(cJ){var cL=[];

while(cJ){var cK=cJ.$$properties;

if(cK){for(var name in this.$$inheritable){if(cK[name]&&cK[name].inheritable){cL.push(name);
}}}cJ=cJ.superclass;
}return cL;
},__s:function(dz){var dD=this.$$store.inherit;
var dC=this.$$store.init;
var dB=this.$$method.refresh;
var dA=[bN,bS];

for(var i=0,l=dz.length;i<l;i++){var name=dz[i];
dA.push(cq,dD[name],ck,T,dC[name],ck,bV,dB[name],co);
}return new Function(dA.join(bY));
},refresh:function(du){{};
du.$$refreshInheritables();
},attachRefreshInheritables:function(o){o.prototype.$$refreshInheritables=function(){qx.core.Property.__q(o);
return this.$$refreshInheritables();
};
},attachMethods:function(dH,name,dI){dI.group?this.__t(dH,dI,name):this.__u(dH,dI,name);
},__t:function(s,t,name){var A=qx.Bootstrap.firstUp(name);
var z=s.prototype;
var B=t.themeable===true;
{};
var C=[];
var w=[];

if(B){var u=[];
var y=[];
}var x=bo;
C.push(x);

if(B){u.push(x);
}
if(t.mode==bw){var v=bb;
C.push(v);

if(B){u.push(v);
}}
for(var i=0,a=t.group,l=a.length;i<l;i++){{};
C.push(bV,this.$$method.set[a[i]],cl,i,ch);
w.push(bV,this.$$method.reset[a[i]],bD);

if(B){{};
u.push(bV,this.$$method.setThemed[a[i]],cl,i,ch);
y.push(bV,this.$$method.resetThemed[a[i]],bD);
}}this.$$method.set[name]=bU+A;
z[this.$$method.set[name]]=new Function(C.join(bY));
this.$$method.reset[name]=bE+A;
z[this.$$method.reset[name]]=new Function(w.join(bY));

if(B){this.$$method.setThemed[name]=bX+A;
z[this.$$method.setThemed[name]]=new Function(u.join(bY));
this.$$method.resetThemed[name]=bT+A;
z[this.$$method.resetThemed[name]]=new Function(y.join(bY));
}},__u:function(cT,cU,name){var cW=qx.Bootstrap.firstUp(name);
var cY=cT.prototype;
{};
{};
if(cU.dereference===undefined&&typeof cU.check===ca){cU.dereference=this.__v(cU.check);
}var cX=this.$$method;
var cV=this.$$store;
cV.runtime[name]=cv+name;
cV.user[name]=ct+name;
cV.theme[name]=S+name;
cV.init[name]=P+name;
cV.inherit[name]=bd+name;
cV.useinit[name]=cp+name;
cX.get[name]=bz+cW;
cY[cX.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cT,name,bz);
};
cX.set[name]=bU+cW;
cY[cX.set[name]]=function(cz){return qx.core.Property.executeOptimizedSetter(this,cT,name,bU,arguments);
};
cX.reset[name]=bE+cW;
cY[cX.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cT,name,bE);
};

if(cU.inheritable||cU.apply||cU.event||cU.deferredInit){cX.init[name]=bH+cW;
cY[cX.init[name]]=function(n){return qx.core.Property.executeOptimizedSetter(this,cT,name,bH,arguments);
};
}
if(cU.inheritable){cX.refresh[name]=cj+cW;
cY[cX.refresh[name]]=function(ds){return qx.core.Property.executeOptimizedSetter(this,cT,name,cj,arguments);
};
}cX.setRuntime[name]=bI+cW;
cY[cX.setRuntime[name]]=function(dG){return qx.core.Property.executeOptimizedSetter(this,cT,name,bI,arguments);
};
cX.resetRuntime[name]=bF+cW;
cY[cX.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cT,name,bF);
};

if(cU.themeable){cX.setThemed[name]=bX+cW;
cY[cX.setThemed[name]]=function(cy){return qx.core.Property.executeOptimizedSetter(this,cT,name,bX,arguments);
};
cX.resetThemed[name]=bT+cW;
cY[cX.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cT,name,bT);
};
}
if(cU.check===bj){cY[be+cW]=new Function(bA+cX.set[name]+bx+cX.get[name]+bm);
cY[Y+cW]=new Function(bA+cX.get[name]+bn);
}},__v:function(dy){return !!this.__p[dy];
},__w:function(dt){return this.__p[dt]||qx.Bootstrap.classIsDefined(dt)||(qx.Interface&&qx.Interface.isDefined(dt));
},__x:{0:X,1:cu,2:bJ,3:bi,4:N,5:E},error:function(da,db,dc,dd,de){var df=da.constructor.classname;
var dg=bQ+dc+H+df+bR+this.$$method[dd][dc]+bc+de+G;
throw new Error(dg+(this.__x[db]||"Unknown reason: "+db));
},__y:function(cA,cB,name,cC,cD,cE){var cF=this.$$method[cC][name];
{cB[cF]=new Function(bu,cD.join(bY));
};
{};
qx.Bootstrap.setDisplayName(cB[cF],cA.classname+cw,cF);
if(cE===undefined){return cA[cF]();
}else{return cA[cF](cE[0]);
}},executeOptimizedGetter:function(dJ,dK,name,dL){var dN=dK.$$properties[name];
var dP=dK.prototype;
var dM=[];
var dO=this.$$store;
dM.push(bB,dO.runtime[name],bW);
dM.push(cb,dO.runtime[name],cd);

if(dN.inheritable){dM.push(bG,dO.inherit[name],bW);
dM.push(cb,dO.inherit[name],cd);
dM.push(bC);
}dM.push(bB,dO.user[name],bW);
dM.push(cb,dO.user[name],cd);

if(dN.themeable){dM.push(bG,dO.theme[name],bW);
dM.push(cb,dO.theme[name],cd);
}
if(dN.deferredInit&&dN.init===undefined){dM.push(bG,dO.init[name],bW);
dM.push(cb,dO.init[name],cd);
}dM.push(bC);

if(dN.init!==undefined){if(dN.inheritable){dM.push(bL,dO.init[name],cd);

if(dN.nullable){dM.push(L);
}else if(dN.init!==undefined){dM.push(cb,dO.init[name],cd);
}else{dM.push(bh,name,ci,dK.classname,cg);
}dM.push(bM);
}else{dM.push(cb,dO.init[name],cd);
}}else if(dN.inheritable||dN.nullable){dM.push(bf);
}else{dM.push(bs,name,ci,dK.classname,cg);
}return this.__y(dJ,dP,name,dL,dM);
},executeOptimizedSetter:function(b,c,name,d,e){var k=c.$$properties[name];
var j=c.prototype;
var g=[];
var f=d===bU||d===bX||d===bI||(d===bH&&k.init===undefined);
var h=k.apply||k.event||k.inheritable;
var m=this.__z(d,name);
this.__A(g,k,name,d,f);

if(f){this.__B(g,c,k,name);
}
if(h){this.__C(g,f,m,d);
}
if(k.inheritable){g.push(cr);
}{};

if(!h){this.__E(g,name,d,f);
}else{this.__F(g,k,name,d,f);
}
if(k.inheritable){this.__G(g,k,name,d);
}else if(h){this.__H(g,k,name,d);
}
if(h){this.__I(g,k,name);
if(k.inheritable&&j._getChildren){this.__J(g,name);
}}if(f){g.push(bk);
}return this.__y(b,j,name,d,g,e);
},__z:function(dh,name){if(dh===bI||dh===bF){var di=this.$$store.runtime[name];
}else if(dh===bX||dh===bT){di=this.$$store.theme[name];
}else if(dh===bH){di=this.$$store.init[name];
}else{di=this.$$store.user[name];
}return di;
},__A:function(dQ,dR,name,dS,dT){{if(!dR.nullable||dR.check||dR.inheritable){dQ.push('var prop=qx.core.Property;');
}if(dS==="set"){dQ.push('if(value===undefined)prop.error(this,2,"',name,'","',dS,'",value);');
}};
},__B:function(cQ,cR,cS,name){if(cS.transform){cQ.push('value=this.',cS.transform,'(value);');
}if(cS.validate){if(typeof cS.validate==="string"){cQ.push('this.',cS.validate,'(value);');
}else if(cS.validate instanceof Function){cQ.push(cR.classname,'.$$properties.',name);
cQ.push('.validate.call(this, value);');
}}},__C:function(dm,dn,dp,dq){var dr=(dq==="reset"||dq==="resetThemed"||dq==="resetRuntime");

if(dn){dm.push('if(this.',dp,'===value)return value;');
}else if(dr){dm.push('if(this.',dp,'===undefined)return;');
}},__D:undefined,__E:function(dj,name,dk,dl){if(dk==="setRuntime"){dj.push('this.',this.$$store.runtime[name],'=value;');
}else if(dk==="resetRuntime"){dj.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dj.push('delete this.',this.$$store.runtime[name],';');
}else if(dk==="set"){dj.push('this.',this.$$store.user[name],'=value;');
}else if(dk==="reset"){dj.push('if(this.',this.$$store.user[name],'!==undefined)');
dj.push('delete this.',this.$$store.user[name],';');
}else if(dk==="setThemed"){dj.push('this.',this.$$store.theme[name],'=value;');
}else if(dk==="resetThemed"){dj.push('if(this.',this.$$store.theme[name],'!==undefined)');
dj.push('delete this.',this.$$store.theme[name],';');
}else if(dk==="init"&&dl){dj.push('this.',this.$$store.init[name],'=value;');
}},__F:function(cM,cN,name,cO,cP){if(cN.inheritable){cM.push('var computed, old=this.',this.$$store.inherit[name],';');
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
}},__G:function(dU,dV,name,dW){dU.push('if(computed===undefined||computed===inherit){');

if(dW==="refresh"){dU.push('computed=value;');
}else{dU.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dU.push('if((computed===undefined||computed===inherit)&&');
dU.push('this.',this.$$store.init[name],'!==undefined&&');
dU.push('this.',this.$$store.init[name],'!==inherit){');
dU.push('computed=this.',this.$$store.init[name],';');
dU.push('this.',this.$$store.useinit[name],'=true;');
dU.push('}else{');
dU.push('delete this.',this.$$store.useinit[name],';}');
dU.push('}');
dU.push('if(old===computed)return value;');
dU.push('if(computed===inherit){');
dU.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dU.push('}');
dU.push('else if(computed===undefined)');
dU.push('delete this.',this.$$store.inherit[name],';');
dU.push('else this.',this.$$store.inherit[name],'=computed;');
dU.push('var backup=computed;');
if(dV.init!==undefined&&dW!=="init"){dU.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dU.push('if(old===undefined)old=null;');
}dU.push('if(computed===undefined||computed==inherit)computed=null;');
},__H:function(dv,dw,name,dx){if(dx!=="set"&&dx!=="setRuntime"&&dx!=="setThemed"){dv.push('if(computed===undefined)computed=null;');
}dv.push('if(old===computed)return value;');
if(dw.init!==undefined&&dx!=="init"){dv.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dv.push('if(old===undefined)old=null;');
}},__I:function(dE,dF,name){if(dF.apply){dE.push('this.',dF.apply,'(computed, old, "',name,'");');
}if(dF.event){dE.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",dF.event,"')){","reg.fireEvent(this, '",dF.event,"', qx.event.type.Data, [computed, old]",")}");
}},__J:function(dX,name){dX.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
dX.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
dX.push('}');
}},defer:function(p){var r=navigator.userAgent.indexOf(F)!=-1;
var q=navigator.userAgent.indexOf(bv)!=-1;
if(r||q){p.__v=p.__w;
}}});
})();
(function(){var v="[Class ",u="]",t="extend",s="qx.Class",r=".",q="static";
qx.Bootstrap.define(s,{statics:{define:function(name,f){if(!f){var f={};
}if(f.include&&!(f.include instanceof Array)){f.include=[f.include];
}if(f.implement&&!(f.implement instanceof Array)){f.implement=[f.implement];
}var g=false;

if(!f.hasOwnProperty(t)&&!f.type){f.type=q;
g=true;
}{};
var h=this.__O(name,f.type,f.extend,f.statics,f.construct,f.destruct,f.include);
if(f.extend){if(f.properties){this.__Q(h,f.properties,true);
}if(f.members){this.__S(h,f.members,true,true,false);
}if(f.events){this.__P(h,f.events,true);
}if(f.include){for(var i=0,l=f.include.length;i<l;i++){this.__W(h,f.include[i],false);
}}}if(f.settings){for(var j in f.settings){qx.core.Setting.define(j,f.settings[j]);
}}if(f.variants){for(var j in f.variants){qx.core.Variant.define(j,f.variants[j].allowedValues,f.variants[j].defaultValue);
}}if(f.implement){for(var i=0,l=f.implement.length;i<l;i++){this.__U(h,f.implement[i]);
}}{};
if(f.defer){f.defer.self=h;
f.defer(h,h.prototype,{add:function(name,J){var K={};
K[name]=J;
qx.Class.__Q(h,K,true);
}});
}return h;
},undefine:function(name){delete this.$$registry[name];
var bv=name.split(r);
var bx=[window];

for(var i=0;i<bv.length;i++){bx.push(bx[i][bv[i]]);
}for(var i=bx.length-1;i>=1;i--){var bw=bx[i];
var parent=bx[i-1];

if(qx.Bootstrap.isFunction(bw)||qx.Bootstrap.objectGetLength(bw)===0){delete parent[bv[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(w,x){{};
qx.Class.__W(w,x,false);
},patch:function(R,S){{};
qx.Class.__W(R,S,true);
},isSubClassOf:function(bg,bh){if(!bg){return false;
}
if(bg==bh){return true;
}
if(bg.prototype instanceof bh){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(bG){var bH=[];

while(bG){if(bG.$$properties){bH.push.apply(bH,qx.Bootstrap.getKeys(bG.$$properties));
}bG=bG.superclass;
}return bH;
},getByProperty:function(p,name){while(p){if(p.$$properties&&p.$$properties[name]){return p;
}p=p.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bd,be){return bd.$$includes&&bd.$$includes.indexOf(be)!==-1;
},getByMixin:function(bs,bt){var bu,i,l;

while(bs){if(bs.$$includes){bu=bs.$$flatIncludes;

for(i=0,l=bu.length;i<l;i++){if(bu[i]===bt){return bs;
}}}bs=bs.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(H,I){return !!this.getByMixin(H,I);
},hasOwnInterface:function(b,c){return b.$$implements&&b.$$implements.indexOf(c)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bq){var br=[];

while(bq){if(bq.$$implements){br.push.apply(br,bq.$$flatImplements);
}bq=bq.superclass;
}return br;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(m,n){var o=m.constructor;

if(this.hasInterface(o,n)){return true;
}
try{qx.Interface.assertObject(m,n);
return true;
}catch(bf){}
try{qx.Interface.assert(o,n,false);
return true;
}catch(T){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return v+this.classname+u;
},$$registry:qx.Bootstrap.$$registry,__K:null,__L:null,__M:function(){},__N:function(){},__O:function(name,bR,bS,bT,bU,bV,bW){var ca;

if(!bS&&true){ca=bT||{};
qx.Bootstrap.setDisplayNames(ca,name);
}else{var ca={};

if(bS){if(!bU){bU=this.__X();
}
if(this.__ba(bS,bW)){ca=this.__bb(bU,name,bR);
}else{ca=bU;
}if(bR==="singleton"){ca.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bU,name,"constructor");
}if(bT){qx.Bootstrap.setDisplayNames(bT,name);
var cb;

for(var i=0,a=qx.Bootstrap.getKeys(bT),l=a.length;i<l;i++){cb=a[i];
var bX=bT[cb];
{ca[cb]=bX;
};
}}}var bY=qx.Bootstrap.createNamespace(name,ca);
ca.name=ca.classname=name;
ca.basename=bY;
ca.$$type="Class";

if(bR){ca.$$classtype=bR;
}if(!ca.hasOwnProperty("toString")){ca.toString=this.genericToString;
}
if(bS){qx.Bootstrap.extendClass(ca,bU,bS,name,bY);
if(bV){{};
ca.$$destructor=bV;
qx.Bootstrap.setDisplayName(bV,name,"destruct");
}}this.$$registry[name]=ca;
return ca;
},__P:function(by,bz,bA){var bB,bB;
{};

if(by.$$events){for(var bB in bz){by.$$events[bB]=bz[bB];
}}else{by.$$events=bz;
}},__Q:function(bM,bN,bO){var bP;

if(bO===undefined){bO=false;
}var bQ=bM.prototype;

for(var name in bN){bP=bN[name];
{};
bP.name=name;
if(!bP.refine){if(bM.$$properties===undefined){bM.$$properties={};
}bM.$$properties[name]=bP;
}if(bP.init!==undefined){bM.prototype["$$init_"+name]=bP.init;
}if(bP.event!==undefined){var event={};
event[bP.event]="qx.event.type.Data";
this.__P(bM,event,bO);
}if(bP.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bQ.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bM);
}}
if(!bP.refine){qx.core.Property.attachMethods(bM,name,bP);
}}},__R:null,__S:function(bi,bj,bk,bl,bm){var bn=bi.prototype;
var bp,bo;
qx.Bootstrap.setDisplayNames(bj,bi.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bj),l=a.length;i<l;i++){bp=a[i];
bo=bj[bp];
{};
if(bl!==false&&bo instanceof Function&&bo.$$type==null){if(bm==true){bo=this.__T(bo,bn[bp]);
}else{if(bn[bp]){bo.base=bn[bp];
}bo.self=bi;
}{};
}bn[bp]=bo;
}},__T:function(X,Y){if(Y){return function(){var e=X.base;
X.base=Y;
var d=X.apply(this,arguments);
X.base=e;
return d;
};
}else{return X;
}},__U:function(U,V){{};
var W=qx.Interface.flatten([V]);

if(U.$$implements){U.$$implements.push(V);
U.$$flatImplements.push.apply(U.$$flatImplements,W);
}else{U.$$implements=[V];
U.$$flatImplements=W;
}},__V:function(B){var name=B.classname;
var C=this.__bb(B,name,B.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(B),l=a.length;i<l;i++){D=a[i];

if(B.hasOwnProperty(D)){C[D]=B[D];
}}C.prototype=B.prototype;
var F=B.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(F),l=a.length;i<l;i++){D=a[i];

if(F.hasOwnProperty(D)){var G=F[D];

if(G.self==B){G.self=C;
}}}for(var D in this.$$registry){var E=this.$$registry[D];

if(!E){continue;
}
if(E.base==B){E.base=C;
}
if(E.superclass==B){E.superclass=C;
}
if(E.$$original){if(E.$$original.base==B){E.$$original.base=C;
}
if(E.$$original.superclass==B){E.$$original.superclass=C;
}}}qx.Bootstrap.createNamespace(name,C);
this.$$registry[name]=C;
return C;
},__W:function(L,M,N){{};

if(this.hasMixin(L,M)){return;
}var Q=L.$$original;

if(M.$$constructor&&!Q){L=this.__V(L);
}var P=qx.Mixin.flatten([M]);
var O;

for(var i=0,l=P.length;i<l;i++){O=P[i];
if(O.$$events){this.__P(L,O.$$events,N);
}if(O.$$properties){this.__Q(L,O.$$properties,N);
}if(O.$$members){this.__S(L,O.$$members,N,N,N);
}}if(L.$$includes){L.$$includes.push(M);
L.$$flatIncludes.push.apply(L.$$flatIncludes,P);
}else{L.$$includes=[M];
L.$$flatIncludes=P;
}},__X:function(){function k(){k.base.apply(this,arguments);
}return k;
},__Y:function(){return function(){};
},__ba:function(bI,bJ){{};
if(bI&&bI.$$includes){var bK=bI.$$flatIncludes;

for(var i=0,l=bK.length;i<l;i++){if(bK[i].$$constructor){return true;
}}}if(bJ){var bL=qx.Mixin.flatten(bJ);

for(var i=0,l=bL.length;i<l;i++){if(bL[i].$$constructor){return true;
}}}return false;
},__bb:function(bC,name,bD){var bE;
var bF=function(){var A=bF;
{};
var z=A.$$original.apply(this,arguments);
if(A.$$includes){var y=A.$$flatIncludes;

for(var i=0,l=y.length;i<l;i++){if(y[i].$$constructor){y[i].$$constructor.apply(this,arguments);
}}}{};
return z;
};
{};
bF.$$original=bC;
bC.wrapper=bF;
return bF;
}},defer:function(){var ba,bb,bc;
{};
}});
})();
(function(){var t="gecko",s="1.9.0.0",r=".",q="[object Opera]",p="function",o="[^\\.0-9]",n="525.26",m="",l="mshtml",k="AppleWebKit/",e="unknown",j="9.6.0",h="4.0",d="Gecko",c="opera",g="webkit",f="0.0.0",i="8.0",b="qx.bom.client.Engine";
qx.Bootstrap.define(b,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__bf:function(){var u=e;
var y=f;
var x=window.navigator.userAgent;
var A=false;
var w=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==q){u=c;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(x)){y=RegExp.$1+r+RegExp.$2;

if(RegExp.$3!=m){y+=r+RegExp.$3;
}}else{w=true;
y=j;
}}else if(window.navigator.userAgent.indexOf(k)!=-1){u=g;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(x)){y=RegExp.$1;
var z=RegExp(o).exec(y);

if(z){y=y.slice(0,z.index);
}}else{w=true;
y=n;
}}else if(window.controllers&&window.navigator.product===d){u=t;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(x)){y=RegExp.$1;
}else{w=true;
y=s;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(x)){u=l;
y=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(y<8&&/Trident\/([^\);]+)(\)|;)/.test(x)){if(RegExp.$1===h){y=i;
}}this.MSHTML=true;
}else{var v=window.qxFail;

if(v&&typeof v===p){var u=v();

if(u.NAME&&u.FULLVERSION){u=u.NAME;
this[u.toUpperCase()]=true;
y=u.FULLVERSION;
}}else{A=true;
w=true;
y=s;
u=t;
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(a){a.__bf();
}});
})();
(function(){var G="on",F="off",E="|",D="default",C="object",B="&",A="qx.aspects",z="$",y="qx.allowUrlVariants",x="qx.debug",q="qx.client",w="qx.dynlocale",t="webkit",p="qxvariant",o="opera",s=":",r="qx.core.Variant",u="mshtml",n="gecko";
qx.Bootstrap.define(r,{statics:{__bg:{},__bh:{},compilerIsSet:function(){return true;
},define:function(j,k,m){{};

if(!this.__bg[j]){this.__bg[j]={};
}else{}this.__bg[j].allowedValues=k;
this.__bg[j].defaultValue=m;
},get:function(L){var M=this.__bg[L];
{};

if(M.value!==undefined){return M.value;
}return M.defaultValue;
},__bi:function(){if(window.qxvariants){for(var K in qxvariants){{};

if(!this.__bg[K]){this.__bg[K]={};
}this.__bg[K].value=qxvariants[K];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(h){}this.__bj(this.__bg);
}},__bj:function(){if(qx.core.Setting.get(y)!=true){return;
}var N=document.location.search.slice(1).split(B);

for(var i=0;i<N.length;i++){var O=N[i].split(s);

if(O.length!=3||O[0]!=p){continue;
}var P=O[1];

if(!this.__bg[P]){this.__bg[P]={};
}this.__bg[P].value=decodeURIComponent(O[2]);
}},select:function(H,I){{};

for(var J in I){if(this.isSet(H,J)){return I[J];
}}
if(I[D]!==undefined){return I[D];
}{};
},isSet:function(a,b){var c=a+z+b;

if(this.__bh[c]!==undefined){return this.__bh[c];
}var e=false;
if(b.indexOf(E)<0){e=this.get(a)===b;
}else{var d=b.split(E);

for(var i=0,l=d.length;i<l;i++){if(this.get(a)===d[i]){e=true;
break;
}}}this.__bh[c]=e;
return e;
},__bk:function(v){return typeof v===C&&v!==null&&v instanceof Array;
},__bl:function(v){return typeof v===C&&v!==null&&!(v instanceof Array);
},__bm:function(f,g){for(var i=0,l=f.length;i<l;i++){if(f[i]==g){return true;
}}return false;
}},defer:function(Q){Q.define(q,[n,u,o,t],qx.bom.client.Engine.NAME);
Q.define(x,[G,F],G);
Q.define(A,[G,F],F);
Q.define(w,[G,F],G);
Q.__bi();
}});
})();
(function(){var r="qx.client",q="on",p="function",o="mousedown",n="qx.bom.Event",m="return;",l="mouseover",k="HTMLEvents";
qx.Class.define(n,{statics:{addNativeListener:qx.core.Variant.select(r,{"mshtml":function(s,t,u){s.attachEvent(q+t,u);
},"default":function(v,w,x){v.addEventListener(w,x,false);
}}),removeNativeListener:qx.core.Variant.select(r,{"mshtml":function(C,D,E){try{C.detachEvent(q+D,E);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(c,d,f){c.removeEventListener(d,f,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(r,{"mshtml":function(e){if(e.type===l){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(r,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==o&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(j){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(F){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(g,h){if(document.createEventObject){var i=document.createEventObject();
return g.fireEvent(q+h,i);
}else{var i=document.createEvent(k);
i.initEvent(h,true,true);
return !g.dispatchEvent(i);
}},supportsEvent:qx.core.Variant.select(r,{"webkit":function(a,b){return a.hasOwnProperty(q+b);
},"default":function(y,z){var A=q+z;
var B=(A in y);

if(!B){B=typeof y[A]==p;

if(!B&&y.setAttribute){y.setAttribute(A,m);
B=typeof y[A]==p;
y.removeAttribute(A);
}}return B;
}})}});
})();
(function(){var bk="|bubble",bj="|capture",bi="|",bh="",bg="_",bf="unload",be="UNKNOWN_",bd="__bs",bc="__br",bb="c",X="DOM_",ba="WIN_",Y="capture",W="qx.event.Manager",V="QX_";
qx.Class.define(W,{extend:Object,construct:function(z,A){this.__bn=z;
this.__bo=qx.core.ObjectRegistry.toHashCode(z);
this.__bp=A;
if(z.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(z,bf,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(z,bf,arguments.callee);
self.dispose();
}));
}this.__bq={};
this.__br={};
this.__bs={};
this.__bt={};
},statics:{__bu:0,getNextUniqueId:function(){return (this.__bu++)+bh;
}},members:{__bp:null,__bq:null,__bs:null,__bv:null,__br:null,__bt:null,__bn:null,__bo:null,getWindow:function(){return this.__bn;
},getWindowId:function(){return this.__bo;
},getHandler:function(x){var y=this.__br[x.classname];

if(y){return y;
}return this.__br[x.classname]=new x(this);
},getDispatcher:function(cj){var ck=this.__bs[cj.classname];

if(ck){return ck;
}return this.__bs[cj.classname]=new cj(this,this.__bp);
},getListeners:function(cc,cd,ce){var cf=cc.$$hash||qx.core.ObjectRegistry.toHashCode(cc);
var ch=this.__bq[cf];

if(!ch){return null;
}var ci=cd+(ce?bj:bk);
var cg=ch[ci];
return cg?cg.concat():null;
},serializeListeners:function(cl){var cs=cl.$$hash||qx.core.ObjectRegistry.toHashCode(cl);
var cu=this.__bq[cs];
var cq=[];

if(cu){var co,ct,cm,cp,cr;

for(var cn in cu){co=cn.indexOf(bi);
ct=cn.substring(0,co);
cm=cn.charAt(co+1)==bb;
cp=cu[cn];

for(var i=0,l=cp.length;i<l;i++){cr=cp[i];
cq.push({self:cr.context,handler:cr.handler,type:ct,capture:cm});
}}}return cq;
},toggleAttachedEvents:function(bF,bG){var bL=bF.$$hash||qx.core.ObjectRegistry.toHashCode(bF);
var bN=this.__bq[bL];

if(bN){var bI,bM,bH,bJ;

for(var bK in bN){bI=bK.indexOf(bi);
bM=bK.substring(0,bI);
bH=bK.charCodeAt(bI+1)===99;
bJ=bN[bK];

if(bG){this.__bw(bF,bM,bH);
}else{this.__bx(bF,bM,bH);
}}}},hasListener:function(m,n,o){{};
var p=m.$$hash||qx.core.ObjectRegistry.toHashCode(m);
var r=this.__bq[p];

if(!r){return false;
}var s=n+(o?bj:bk);
var q=r[s];
return q&&q.length>0;
},importListeners:function(M,N){{};
var T=M.$$hash||qx.core.ObjectRegistry.toHashCode(M);
var U=this.__bq[T]={};
var Q=qx.event.Manager;

for(var O in N){var R=N[O];
var S=R.type+(R.capture?bj:bk);
var P=U[S];

if(!P){P=U[S]=[];
this.__bw(M,R.type,R.capture);
}P.push({handler:R.listener,context:R.self,unique:R.unique||(Q.__bu++)+bh});
}},addListener:function(cv,cw,cx,self,cy){var cC;
{};
var cD=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);
var cF=this.__bq[cD];

if(!cF){cF=this.__bq[cD]={};
}var cB=cw+(cy?bj:bk);
var cA=cF[cB];

if(!cA){cA=cF[cB]=[];
}if(cA.length===0){this.__bw(cv,cw,cy);
}var cE=(qx.event.Manager.__bu++)+bh;
var cz={handler:cx,context:self,unique:cE};
cA.push(cz);
return cB+bi+cE;
},findHandler:function(bl,bm){var bw=false,bp=false,bx=false;
var bv;

if(bl.nodeType===1){bw=true;
bv=X+bl.tagName.toLowerCase()+bg+bm;
}else if(bl==this.__bn){bp=true;
bv=ba+bm;
}else if(bl.classname){bx=true;
bv=V+bl.classname+bg+bm;
}else{bv=be+bl+bg+bm;
}var br=this.__bt;

if(br[bv]){return br[bv];
}var bu=this.__bp.getHandlers();
var bq=qx.event.IEventHandler;
var bs,bt,bo,bn;

for(var i=0,l=bu.length;i<l;i++){bs=bu[i];
bo=bs.SUPPORTED_TYPES;

if(bo&&!bo[bm]){continue;
}bn=bs.TARGET_CHECK;

if(bn){if(!bw&&bn===bq.TARGET_DOMNODE){continue;
}else if(!bp&&bn===bq.TARGET_WINDOW){continue;
}else if(!bx&&bn===bq.TARGET_OBJECT){continue;
}}bt=this.getHandler(bu[i]);

if(bs.IGNORE_CAN_HANDLE||bt.canHandleEvent(bl,bm)){br[bv]=bt;
return bt;
}}return null;
},__bw:function(t,u,v){var w=this.findHandler(t,u);

if(w){w.registerEvent(t,u,v);
return;
}{};
},removeListener:function(a,b,c,self,d){var h;
{};
var j=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var k=this.__bq[j];

if(!k){return false;
}var e=b+(d?bj:bk);
var f=k[e];

if(!f){return false;
}var g;

for(var i=0,l=f.length;i<l;i++){g=f[i];

if(g.handler===c&&g.context===self){qx.lang.Array.removeAt(f,i);

if(f.length==0){this.__bx(a,b,d);
}return true;
}}return false;
},removeListenerById:function(bP,bQ){var bW;
{};
var bU=bQ.split(bi);
var ca=bU[0];
var bR=bU[1].charCodeAt(0)==99;
var bY=bU[2];
var bX=bP.$$hash||qx.core.ObjectRegistry.toHashCode(bP);
var cb=this.__bq[bX];

if(!cb){return false;
}var bV=ca+(bR?bj:bk);
var bT=cb[bV];

if(!bT){return false;
}var bS;

for(var i=0,l=bT.length;i<l;i++){bS=bT[i];

if(bS.unique===bY){qx.lang.Array.removeAt(bT,i);

if(bT.length==0){this.__bx(bP,ca,bR);
}return true;
}}return false;
},removeAllListeners:function(by){var bC=by.$$hash||qx.core.ObjectRegistry.toHashCode(by);
var bE=this.__bq[bC];

if(!bE){return false;
}var bA,bD,bz;

for(var bB in bE){if(bE[bB].length>0){bA=bB.split(bi);
bD=bA[0];
bz=bA[1]===Y;
this.__bx(by,bD,bz);
}}delete this.__bq[bC];
return true;
},deleteAllListeners:function(bO){delete this.__bq[bO];
},__bx:function(B,C,D){var E=this.findHandler(B,C);

if(E){E.unregisterEvent(B,C,D);
return;
}{};
},dispatchEvent:function(F,event){var K;
{};
var L=event.getType();

if(!event.getBubbles()&&!this.hasListener(F,L)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(F);
}var J=this.__bp.getDispatchers();
var I;
var H=false;

for(var i=0,l=J.length;i<l;i++){I=this.getDispatcher(J[i]);
if(I.canDispatchEvent(F,event,L)){I.dispatchEvent(F,event,L);
H=true;
break;
}}
if(!H){{};
return true;
}var G=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !G;
},dispose:function(){this.__bp.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,bc);
qx.util.DisposeUtil.disposeMap(this,bd);
this.__bq=this.__bn=this.__bv=null;
this.__bp=this.__bt=null;
}}});
})();
(function(){var k="qx.dom.Node",j="qx.client",h="";
qx.Class.define(k,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(m){return m.nodeType===
this.DOCUMENT?m:
m.ownerDocument||m.document;
},getWindow:qx.core.Variant.select(j,{"mshtml":function(l){if(l.nodeType==null){return l;
}if(l.nodeType!==this.DOCUMENT){l=l.ownerDocument;
}return l.parentWindow;
},"default":function(o){if(o.nodeType==null){return o;
}if(o.nodeType!==this.DOCUMENT){o=o.ownerDocument;
}return o.defaultView;
}}),getDocumentElement:function(q){return this.getDocument(q).documentElement;
},getBodyElement:function(d){return this.getDocument(d).body;
},isNode:function(f){return !!(f&&f.nodeType!=null);
},isElement:function(e){return !!(e&&e.nodeType===this.ELEMENT);
},isDocument:function(g){return !!(g&&g.nodeType===this.DOCUMENT);
},isText:function(p){return !!(p&&p.nodeType===this.TEXT);
},isWindow:function(n){return !!(n&&n.history&&n.location&&n.document);
},isNodeName:function(b,c){if(!c||!b||!b.nodeName){return false;
}return c.toLowerCase()==qx.dom.Node.getName(b);
},getName:function(r){if(!r||!r.nodeName){return null;
}return r.nodeName.toLowerCase();
},getText:function(s){if(!s||!s.nodeType){return null;
}
switch(s.nodeType){case 1:var i,a=[],t=s.childNodes,length=t.length;

for(i=0;i<length;i++){a[i]=this.getText(t[i]);
}return a.join(h);
case 2:return s.nodeValue;
break;
case 3:return s.nodeValue;
break;
}return null;
}}});
})();
(function(){var ba="mshtml",Y="qx.client",X="[object Array]",W="qx.lang.Array",V="qx",U="number",T="string";
qx.Class.define(W,{statics:{toArray:function(bb,bc){return this.cast(bb,Array,bc);
},cast:function(a,b,c){if(a.constructor===b){return a;
}
if(qx.Class.hasInterface(a,qx.data.IListData)){var a=a.toArray();
}var d=new b;
if(qx.core.Variant.isSet(Y,ba)){if(a.item){for(var i=c||0,l=a.length;i<l;i++){d.push(a[i]);
}return d;
}}if(Object.prototype.toString.call(a)===X&&c==null){d.push.apply(d,a);
}else{d.push.apply(d,Array.prototype.slice.call(a,c||0));
}return d;
},fromArguments:function(D,E){return Array.prototype.slice.call(D,E||0);
},fromCollection:function(bm){if(qx.core.Variant.isSet(Y,ba)){if(bm.item){var bn=[];

for(var i=0,l=bm.length;i<l;i++){bn[i]=bm[i];
}return bn;
}}return Array.prototype.slice.call(bm,0);
},fromShortHand:function(O){var Q=O.length;
var P=qx.lang.Array.clone(O);
switch(Q){case 1:P[1]=P[2]=P[3]=P[0];
break;
case 2:P[2]=P[0];
case 3:P[3]=P[1];
}return P;
},clone:function(bi){return bi.concat();
},insertAt:function(F,G,i){F.splice(i,0,G);
return F;
},insertBefore:function(k,m,n){var i=k.indexOf(n);

if(i==-1){k.push(m);
}else{k.splice(i,0,m);
}return k;
},insertAfter:function(bo,bp,bq){var i=bo.indexOf(bq);

if(i==-1||i==(bo.length-1)){bo.push(bp);
}else{bo.splice(i+1,0,bp);
}return bo;
},removeAt:function(S,i){return S.splice(i,1)[0];
},removeAll:function(g){g.length=0;
return this;
},append:function(bd,be){{};
Array.prototype.push.apply(bd,be);
return bd;
},exclude:function(H,I){{};

for(var i=0,K=I.length,J;i<K;i++){J=H.indexOf(I[i]);

if(J!=-1){H.splice(J,1);
}}return H;
},remove:function(B,C){var i=B.indexOf(C);

if(i!=-1){B.splice(i,1);
return C;
}},contains:function(e,f){return e.indexOf(f)!==-1;
},equals:function(bk,bl){var length=bk.length;

if(length!==bl.length){return false;
}
for(var i=0;i<length;i++){if(bk[i]!==bl[i]){return false;
}}return true;
},sum:function(h){var j=0;

for(var i=0,l=h.length;i<l;i++){j+=h[i];
}return j;
},max:function(bf){{};
var i,bh=bf.length,bg=bf[0];

for(i=1;i<bh;i++){if(bf[i]>bg){bg=bf[i];
}}return bg===undefined?null:bg;
},min:function(L){{};
var i,N=L.length,M=L[0];

for(i=1;i<N;i++){if(L[i]<M){M=L[i];
}}return M===undefined?null:M;
},unique:function(o){var y=[],q={},t={},v={};
var u,p=0;
var z=V+qx.lang.Date.now();
var r=false,x=false,A=false;
for(var i=0,w=o.length;i<w;i++){u=o[i];
if(u===null){if(!r){r=true;
y.push(u);
}}else if(u===undefined){}else if(u===false){if(!x){x=true;
y.push(u);
}}else if(u===true){if(!A){A=true;
y.push(u);
}}else if(typeof u===T){if(!q[u]){q[u]=1;
y.push(u);
}}else if(typeof u===U){if(!t[u]){t[u]=1;
y.push(u);
}}else{s=u[z];

if(s==null){s=u[z]=p++;
}
if(!v[s]){v[s]=u;
y.push(u);
}}}for(var s in v){try{delete v[s][z];
}catch(bj){try{v[s][z]=null;
}catch(R){throw new Error("Cannot clean-up map entry doneObjects["+s+"]["+z+"]");
}}}return y;
}}});
})();
(function(){var j="()",i=".",h=".prototype.",g='anonymous()',f="qx.lang.Function",e=".constructor()";
qx.Class.define(f,{statics:{getCaller:function(d){return d.caller?d.caller.callee:d.callee.caller;
},getName:function(q){if(q.displayName){return q.displayName;
}
if(q.$$original||q.wrapper||q.classname){return q.classname+e;
}
if(q.$$mixin){for(var s in q.$$mixin.$$members){if(q.$$mixin.$$members[s]==q){return q.$$mixin.name+h+s+j;
}}for(var s in q.$$mixin){if(q.$$mixin[s]==q){return q.$$mixin.name+i+s+j;
}}}
if(q.self){var t=q.self.constructor;

if(t){for(var s in t.prototype){if(t.prototype[s]==q){return t.classname+h+s+j;
}}for(var s in t){if(t[s]==q){return t.classname+i+s+j;
}}}}var r=q.toString().match(/function\s*(\w*)\s*\(.*/);

if(r&&r.length>=1&&r[1]){return r[1]+j;
}return g;
},globalEval:function(p){if(window.execScript){return window.execScript(p);
}else{return eval.call(window,p);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(u,v){{};
if(!v){return u;
}if(!(v.self||v.args||v.delay!=null||v.periodical!=null||v.attempt)){return u;
}return function(event){{};
var E=qx.lang.Array.fromArguments(arguments);
if(v.args){E=v.args.concat(E);
}
if(v.delay||v.periodical){var D=qx.event.GlobalError.observeMethod(function(){return u.apply(v.self||this,E);
});

if(v.delay){return window.setTimeout(D,v.delay);
}
if(v.periodical){return window.setInterval(D,v.periodical);
}}else if(v.attempt){var F=false;

try{F=u.apply(v.self||this,E);
}catch(o){}return F;
}else{return u.apply(v.self||this,E);
}};
},bind:function(G,self,H){return this.create(G,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(w,x){return this.create(w,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(y,self,z){if(arguments.length<3){return function(event){return y.call(self||this,event||window.event);
};
}else{var A=qx.lang.Array.fromArguments(arguments,2);
return function(event){var k=[event||window.event];
k.push.apply(k,A);
y.apply(self||this,k);
};
}},attempt:function(B,self,C){return this.create(B,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(a,b,self,c){return this.create(a,{delay:b,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(l,m,self,n){return this.create(l,{periodical:m,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var q="qx.event.Registration";
qx.Class.define(q,{statics:{__by:{},getManager:function(v){if(v==null){{};
v=window;
}else if(v.nodeType){v=qx.dom.Node.getWindow(v);
}else if(!qx.dom.Node.isWindow(v)){v=window;
}var x=v.$$hash||qx.core.ObjectRegistry.toHashCode(v);
var w=this.__by[x];

if(!w){w=new qx.event.Manager(v,this);
this.__by[x]=w;
}return w;
},removeManager:function(Q){var R=Q.getWindowId();
delete this.__by[R];
},addListener:function(m,n,o,self,p){return this.getManager(m).addListener(m,n,o,self,p);
},removeListener:function(c,d,e,self,f){return this.getManager(c).removeListener(c,d,e,self,f);
},removeListenerById:function(g,h){return this.getManager(g).removeListenerById(g,h);
},removeAllListeners:function(E){return this.getManager(E).removeAllListeners(E);
},deleteAllListeners:function(F){var G=F.$$hash;

if(G){this.getManager(F).deleteAllListeners(G);
}},hasListener:function(j,k,l){return this.getManager(j).hasListener(j,k,l);
},serializeListeners:function(i){return this.getManager(i).serializeListeners(i);
},createEvent:function(r,s,t){{};
if(s==null){s=qx.event.type.Event;
}var u=qx.event.Pool.getInstance().getObject(s);
t?u.init.apply(u,t):u.init();
if(r){u.setType(r);
}return u;
},dispatchEvent:function(S,event){return this.getManager(S).dispatchEvent(S,event);
},fireEvent:function(K,L,M,N){var O;
{};
var P=this.createEvent(L,M||null,N);
return this.getManager(K).dispatchEvent(K,P);
},fireNonBubblingEvent:function(y,z,A,B){{};
var C=this.getManager(y);

if(!C.hasListener(y,z,false)){return true;
}var D=this.createEvent(z,A||null,B);
return C.dispatchEvent(y,D);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bz:[],addHandler:function(H){{};
this.__bz.push(H);
this.__bz.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bz;
},__bA:[],addDispatcher:function(I,J){{};
this.__bA.push(I);
this.__bA.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bA;
}}});
})();
(function(){var k="$$hash",j="",h="qx.core.ObjectRegistry";
qx.Class.define(h,{statics:{inShutDown:false,__bc:{},__bd:0,__be:[],register:function(d){var g=this.__bc;

if(!g){return;
}var f=d.$$hash;

if(f==null){var e=this.__be;

if(e.length>0){f=e.pop();
}else{f=(this.__bd++)+j;
}d.$$hash=f;
}{};
g[f]=d;
},unregister:function(y){var z=y.$$hash;

if(z==null){return;
}var A=this.__bc;

if(A&&A[z]){delete A[z];
this.__be.push(z);
}try{delete y.$$hash;
}catch(m){if(y.removeAttribute){y.removeAttribute(k);
}}},toHashCode:function(u){{};
var w=u.$$hash;

if(w!=null){return w;
}var v=this.__be;

if(v.length>0){w=v.pop();
}else{w=(this.__bd++)+j;
}return u.$$hash=w;
},clearHashCode:function(o){{};
var p=o.$$hash;

if(p!=null){this.__be.push(p);
try{delete o.$$hash;
}catch(n){if(o.removeAttribute){o.removeAttribute(k);
}}}},fromHashCode:function(x){return this.__bc[x]||null;
},shutdown:function(){this.inShutDown=true;
var r=this.__bc;
var t=[];

for(var s in r){t.push(s);
}t.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var q,i=0,l=t.length;

while(true){try{for(;i<l;i++){s=t[i];
q=r[s];

if(q&&q.dispose){q.dispose();
}}}catch(c){qx.Bootstrap.error(this,"Could not dispose object "+q.toString()+": "+c);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bc;
},getRegistry:function(){return this.__bc;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var F=":",E="qx.client",D="anonymous",C="...",B="qx.dev.StackTrace",A="",z="\n",y="/source/class/",x=".";
qx.Class.define(B,{statics:{getStackTrace:qx.core.Variant.select(E,{"gecko":function(){try{throw new Error();
}catch(V){var P=this.getStackTraceFromError(V);
qx.lang.Array.removeAt(P,0);
var N=this.getStackTraceFromCaller(arguments);
var L=N.length>P.length?N:P;

for(var i=0;i<Math.min(N.length,P.length);i++){var M=N[i];

if(M.indexOf(D)>=0){continue;
}var T=M.split(F);

if(T.length!=2){continue;
}var R=T[0];
var K=T[1];
var J=P[i];
var U=J.split(F);
var Q=U[0];
var I=U[1];

if(qx.Class.getByName(Q)){var O=Q;
}else{O=R;
}var S=O+F;

if(K){S+=K+F;
}S+=I;
L[i]=S;
}return L;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var G;

try{G.bar();
}catch(j){var H=this.getStackTraceFromError(j);
qx.lang.Array.removeAt(H,0);
return H;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(E,{"opera":function(a){return [];
},"default":function(k){var p=[];
var o=qx.lang.Function.getCaller(k);
var l={};

while(o){var m=qx.lang.Function.getName(o);
p.push(m);

try{o=o.caller;
}catch(bc){break;
}
if(!o){break;
}var n=qx.core.ObjectRegistry.toHashCode(o);

if(l[n]){p.push(C);
break;
}l[n]=o;
}return p;
}}),getStackTraceFromError:qx.core.Variant.select(E,{"gecko":function(q){if(!q.stack){return [];
}var w=/@(.+):(\d+)$/gm;
var r;
var s=[];

while((r=w.exec(q.stack))!=null){var t=r[1];
var v=r[2];
var u=this.__bB(t);
s.push(u+F+v);
}return s;
},"webkit":function(bb){if(bb.sourceURL&&bb.line){return [this.__bB(bb.sourceURL)+F+bb.line];
}else{return [];
}},"opera":function(b){if(b.message.indexOf("Backtrace:")<0){return [];
}var d=[];
var e=qx.lang.String.trim(b.message.split("Backtrace:")[1]);
var f=e.split(z);

for(var i=0;i<f.length;i++){var c=f[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(c&&c.length>=2){var h=c[1];
var g=this.__bB(c[2]);
d.push(g+F+h);
}}return d;
},"default":function(){return [];
}}),__bB:function(W){var ba=y;
var X=W.indexOf(ba);
var Y=(X==-1)?W:W.substring(X+ba.length).replace(/\//g,x).replace(/\.js$/,A);
return Y;
}}});
})();
(function(){var b="qx.log.appender.RingBuffer";
qx.Class.define(b,{extend:Object,construct:function(a){this.__bC=[];
this.setMaxMessages(a||50);
},members:{__bD:0,__bC:null,__bE:50,setMaxMessages:function(i){this.__bE=i;
this.clearHistory();
},getMaxMessages:function(){return this.__bE;
},process:function(g){var h=this.getMaxMessages();

if(this.__bC.length<h){this.__bC.push(g);
}else{this.__bC[this.__bD++]=g;

if(this.__bD>=h){this.__bD=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(c){if(c>this.__bC.length){c=this.__bC.length;
}
if(this.__bC.length==this.getMaxMessages()){var e=this.__bD-1;
}else{e=this.__bC.length-1;
}var d=e-c+1;

if(d<0){d+=this.__bC.length;
}var f;

if(d<=e){f=this.__bC.slice(d,e+1);
}else{f=this.__bC.slice(d,this.__bC.length).concat(this.__bC.slice(0,e+1));
}return f;
},clearHistory:function(){this.__bC=[];
this.__bD=0;
}}});
})();
(function(){var bt="node",bs="error",br="...(+",bq="array",bp=")",bo="info",bn="instance",bm="string",bl="null",bk="class",bO="number",bN="stringify",bM="]",bL="unknown",bK="function",bJ="boolean",bI="debug",bH="map",bG="undefined",bF="qx.log.Logger",bA=")}",bB="#",by="warn",bz="document",bw="{...(",bx="[",bu="text[",bv="[...(",bC="\n",bD=")]",bE="object";
qx.Class.define(bF,{statics:{__bF:bI,setLevel:function(k){this.__bF=k;
},getLevel:function(){return this.__bF;
},setTreshold:function(f){this.__bI.setMaxMessages(f);
},getTreshold:function(){return this.__bI.getMaxMessages();
},__bG:{},__bH:0,register:function(F){if(F.$$id){return;
}var G=this.__bH++;
this.__bG[G]=F;
F.$$id=G;
var H=this.__bI.getAllLogEvents();

for(var i=0,l=H.length;i<l;i++){F.process(H[i]);
}},unregister:function(a){var b=a.$$id;

if(b==null){return;
}delete this.__bG[b];
delete a.$$id;
},debug:function(q,r){qx.log.Logger.__bK(bI,arguments);
},info:function(m,n){qx.log.Logger.__bK(bo,arguments);
},warn:function(z,A){qx.log.Logger.__bK(by,arguments);
},error:function(o,p){qx.log.Logger.__bK(bs,arguments);
},trace:function(bP){qx.log.Logger.__bK(bo,[bP,qx.dev.StackTrace.getStackTrace().join(bC)]);
},deprecatedMethodWarning:function(I,J){var K;
{};
},deprecatedClassWarning:function(g,h){var j;
{};
},deprecatedEventWarning:function(c,event,d){var e;
{};
},deprecatedMixinWarning:function(w,x){var y;
{};
},deprecatedConstantWarning:function(B,C,D){var self,E;
{};
},deprecateMethodOverriding:function(U,V,W,X){var Y;
{};
},clear:function(){this.__bI.clearHistory();
},__bI:new qx.log.appender.RingBuffer(50),__bJ:{debug:0,info:1,warn:2,error:3},__bK:function(ba,bb){var bg=this.__bJ;

if(bg[ba]<bg[this.__bF]){return;
}var bd=bb.length<2?null:bb[0];
var bf=bd?1:0;
var bc=[];

for(var i=bf,l=bb.length;i<l;i++){bc.push(this.__bM(bb[i],true));
}var bh=new Date;
var bi={time:bh,offset:bh-qx.Bootstrap.LOADSTART,level:ba,items:bc,win:window};
if(bd){if(bd instanceof qx.core.Object){bi.object=bd.$$hash;
}else if(bd.$$type){bi.clazz=bd;
}}this.__bI.process(bi);
var bj=this.__bG;

for(var be in bj){bj[be].process(bi);
}},__bL:function(u){if(u===undefined){return bG;
}else if(u===null){return bl;
}
if(u.$$type){return bk;
}var v=typeof u;

if(v===bK||v==bm||v===bO||v===bJ){return v;
}else if(v===bE){if(u.nodeType){return bt;
}else if(u.classname){return bn;
}else if(u instanceof Array){return bq;
}else if(u instanceof Error){return bs;
}else{return bH;
}}
if(u.toString){return bN;
}return bL;
},__bM:function(L,M){var T=this.__bL(L);
var P=bL;
var O=[];

switch(T){case bl:case bG:P=T;
break;
case bm:case bO:case bJ:P=L;
break;
case bt:if(L.nodeType===9){P=bz;
}else if(L.nodeType===3){P=bu+L.nodeValue+bM;
}else if(L.nodeType===1){P=L.nodeName.toLowerCase();

if(L.id){P+=bB+L.id;
}}else{P=bt;
}break;
case bK:P=qx.lang.Function.getName(L)||T;
break;
case bn:P=L.basename+bx+L.$$hash+bM;
break;
case bk:case bN:P=L.toString();
break;
case bs:O=qx.dev.StackTrace.getStackTraceFromError(L);
P=L.toString();
break;
case bq:if(M){P=[];

for(var i=0,l=L.length;i<l;i++){if(P.length>20){P.push(br+(l-i)+bp);
break;
}P.push(this.__bM(L[i],false));
}}else{P=bv+L.length+bD;
}break;
case bH:if(M){var N;
var S=[];

for(var R in L){S.push(R);
}S.sort();
P=[];

for(var i=0,l=S.length;i<l;i++){if(P.length>20){P.push(br+(l-i)+bp);
break;
}R=S[i];
N=this.__bM(L[R],false);
N.key=R;
P.push(N);
}}else{var Q=0;

for(var R in L){Q++;
}P=bw+Q+bA;
}break;
}return {type:T,text:P,trace:O};
}},defer:function(s){var t=qx.Bootstrap.$$logs;

for(var i=0;i<t.length;i++){this.__bK(t[i][0],t[i][1]);
}qx.Bootstrap.debug=s.debug;
qx.Bootstrap.info=s.info;
qx.Bootstrap.warn=s.warn;
qx.Bootstrap.error=s.error;
qx.Bootstrap.trace=s.trace;
}});
})();
(function(){var bc="set",bb="get",ba="reset",Y="MSIE 6.0",X="qx.core.Object",W="]",V="rv:1.8.1",U="[",T="$$user_",S="Object";
qx.Class.define(X,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:S},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+U+this.$$hash+W;
},base:function(bp,bq){{};

if(arguments.length===1){return bp.callee.base.call(this);
}else{return bp.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(n){return n.callee.self;
},clone:function(){var bl=this.constructor;
var bk=new bl;
var bn=qx.Class.getProperties(bl);
var bm=qx.core.Property.$$store.user;
var bo=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bn.length;i<l;i++){name=bn[i];

if(this.hasOwnProperty(bm[name])){bk[bo[name]](this[bm[name]]);
}}return bk;
},set:function(bg,bh){var bj=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(bg)){if(!this[bj[bg]]){if(this[bc+qx.Bootstrap.firstUp(bg)]!=undefined){this[bc+qx.Bootstrap.firstUp(bg)](bh);
return;
}{};
}return this[bj[bg]](bh);
}else{for(var bi in bg){if(!this[bj[bi]]){if(this[bc+qx.Bootstrap.firstUp(bi)]!=undefined){this[bc+qx.Bootstrap.firstUp(bi)](bg[bi]);
continue;
}{};
}this[bj[bi]](bg[bi]);
}return this;
}},get:function(bt){var bu=qx.core.Property.$$method.get;

if(!this[bu[bt]]){if(this[bb+qx.Bootstrap.firstUp(bt)]!=undefined){return this[bb+qx.Bootstrap.firstUp(bt)]();
}{};
}return this[bu[bt]]();
},reset:function(P){var Q=qx.core.Property.$$method.reset;

if(!this[Q[P]]){if(this[ba+qx.Bootstrap.firstUp(P)]!=undefined){this[ba+qx.Bootstrap.firstUp(P)]();
return;
}{};
}this[Q[P]]();
},__bN:qx.event.Registration,addListener:function(d,f,self,g){if(!this.$$disposed){return this.__bN.addListener(this,d,f,self,g);
}return null;
},addListenerOnce:function(y,z,self,A){var B=function(e){z.call(self||this,e);
this.removeListener(y,B,this,A);
};
return this.addListener(y,B,this,A);
},removeListener:function(bv,bw,self,bx){if(!this.$$disposed){return this.__bN.removeListener(this,bv,bw,self,bx);
}return false;
},removeListenerById:function(w){if(!this.$$disposed){return this.__bN.removeListenerById(this,w);
}return false;
},hasListener:function(b,c){return this.__bN.hasListener(this,b,c);
},dispatchEvent:function(br){if(!this.$$disposed){return this.__bN.dispatchEvent(this,br);
}return true;
},fireEvent:function(M,N,O){if(!this.$$disposed){return this.__bN.fireEvent(this,M,N,O);
}return true;
},fireNonBubblingEvent:function(r,s,t){if(!this.$$disposed){return this.__bN.fireNonBubblingEvent(this,r,s,t);
}return true;
},fireDataEvent:function(h,j,k,m){if(!this.$$disposed){if(k===undefined){k=null;
}return this.__bN.fireNonBubblingEvent(this,h,qx.event.type.Data,[j,k,!!m]);
}return true;
},__bO:null,setUserData:function(o,p){if(!this.__bO){this.__bO={};
}this.__bO[o]=p;
},getUserData:function(bG){if(!this.__bO){return null;
}var bH=this.__bO[bG];
return bH===undefined?null:bH;
},__bP:qx.log.Logger,debug:function(be){this.__bP.debug(this,be);
},info:function(bf){this.__bP.info(this,bf);
},warn:function(u){this.__bP.warn(this,u);
},error:function(bs){this.__bP.error(this,bs);
},trace:function(){this.__bP.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var K,I,H,L;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var J=this.constructor;
var G;

while(J.superclass){if(J.$$destructor){J.$$destructor.call(this);
}if(J.$$includes){G=J.$$flatIncludes;

for(var i=0,l=G.length;i<l;i++){if(G[i].$$destructor){G[i].$$destructor.call(this);
}}}J=J.superclass;
}if(this.__bQ){this.__bQ();
}{};
},__bQ:null,__bR:function(){var a=qx.Class.getProperties(this.constructor);

for(var i=0,l=a.length;i<l;i++){delete this[T+a[i]];
}},_disposeFields:function(q){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(v){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(x){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(R){qx.util.DisposeUtil.disposeArray(this,R);
},_disposeMap:function(bd){qx.util.DisposeUtil.disposeMap(this,bd);
}},settings:{"qx.disposerDebugLevel":0},defer:function(C,D){{};
var F=navigator.userAgent.indexOf(Y)!=-1;
var E=navigator.userAgent.indexOf(V)!=-1;
if(F||E){D.__bQ=D.__bR;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__bO=null;
var bA=this.constructor;
var bE;
var bF=qx.core.Property.$$store;
var bC=bF.user;
var bD=bF.theme;
var by=bF.inherit;
var bB=bF.useinit;
var bz=bF.init;

while(bA){bE=bA.$$properties;

if(bE){for(var name in bE){if(bE[name].dispose||bE[name].dereference){this[bC[name]]=this[bD[name]]=this[by[name]]=this[bB[name]]=this[bz[name]]=undefined;
}}}bA=bA.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(h,i){},registerEvent:function(e,f,g){},unregisterEvent:function(b,c,d){}}});
})();
(function(){var j="qx.globalErrorHandling",i="on",h="qx.event.GlobalError";
qx.Bootstrap.define(h,{statics:{setErrorHandler:function(k,l){this.__cW=k||null;
this.__cX=l||window;

if(qx.core.Setting.get(j)===i){if(k&&window.onerror){var m=qx.Bootstrap.bind(this.__da,this);

if(this.__cY==null){this.__cY=window.onerror;
}var self=this;
window.onerror=function(e){self.__cY(e);
m(e);
};
}
if(k&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__da,this);
}if(this.__cW==null){if(this.__cY!=null){window.onerror=this.__cY;
this.__cY=null;
}else{window.onerror=null;
}}}},__da:function(b,c,d){if(this.__cW){this.handleError(new qx.core.WindowError(b,c,d));
return true;
}},observeMethod:function(g){if(qx.core.Setting.get(j)===i){var self=this;
return function(){if(!self.__cW){return g.apply(this,arguments);
}
try{return g.apply(this,arguments);
}catch(f){self.handleError(new qx.core.GlobalError(f,arguments));
}};
}else{return g;
}},handleError:function(n){if(this.__cW){this.__cW.call(this.__cX,n);
}}},defer:function(a){qx.core.Setting.define(j,i);
a.setErrorHandler(null,null);
}});
})();
(function(){var o="ready",n="qx.client",m="mshtml",l="load",k="unload",j="qx.event.handler.Application",i="complete",h="gecko|opera|webkit",g="left",f="DOMContentLoaded",d="shutdown";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){qx.core.Object.call(this);
this._window=q.getWindow();
this.__gJ=false;
this.__gK=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__gN();
}}},members:{canHandleEvent:function(r,s){},registerEvent:function(a,b,c){},unregisterEvent:function(w,x,y){},__gL:null,__gJ:null,__gK:null,__gM:null,__gN:function(){if(!this.__gL&&this.__gJ&&qx.$$loader.scriptLoaded){if(qx.core.Variant.isSet(n,m)){if(qx.event.Registration.hasListener(this._window,o)){this.__gL=true;
qx.event.Registration.fireEvent(this._window,o);
}}else{this.__gL=true;
qx.event.Registration.fireEvent(this._window,o);
}}},isApplicationReady:function(){return this.__gL;
},_initObserver:function(){if(qx.$$domReady||document.readyState==i||document.readyState==o){this.__gJ=true;
this.__gN();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(n,h)){qx.bom.Event.addNativeListener(this._window,f,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(n,m)){var self=this;
var u=function(){try{document.documentElement.doScroll(g);

if(document.body){self._onNativeLoadWrapped();
}}catch(v){window.setTimeout(u,100);
}};
u();
}qx.bom.Event.addNativeListener(this._window,l,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,k,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,l,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,k,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gJ=true;
this.__gN();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gM){this.__gM=true;

try{qx.event.Registration.fireEvent(this._window,d);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(t){qx.event.Registration.addHandler(t);
}});
})();
(function(){var g="qx.event.handler.Window";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this._manager=u;
this._window=u.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(d,f){},registerEvent:function(h,i,j){},unregisterEvent:function(r,s,t){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var b=qx.event.handler.Window.SUPPORTED_TYPES;

for(var a in b){qx.bom.Event.addNativeListener(this._window,a,this._onNativeWrapper);
}},_stopWindowObserver:function(){var l=qx.event.handler.Window.SUPPORTED_TYPES;

for(var k in l){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var n=this._window;

try{var q=n.document;
}catch(e){return ;
}var o=q.documentElement;
var m=e.target||e.srcElement;

if(m==null||m===n||m===q||m===o){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,n]);
qx.event.Registration.dispatchEvent(n,event);
var p=event.getReturnValue();

if(p!=null){e.returnValue=p;
return p;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(c){qx.event.Registration.addHandler(c);
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
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(m){this._manager=m;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(h,event,j){return !event.getBubbles();
},dispatchEvent:function(b,event,c){var f,d;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var g=this._manager.getListeners(b,c,false);

if(g){for(var i=0,l=g.length;i<l;i++){var e=g[i].context||b;
g[i].handler.call(e,event);
}}}},defer:function(k){qx.event.Registration.addDispatcher(k);
}});
})();
(function(){var j="ready",i="qx.application",h="beforeunload",g="qx.core.Init",f="shutdown";
qx.Class.define(g,{statics:{getApplication:function(){return this.__gO||null;
},ready:function(){if(this.__gO){return;
}
if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var b=qx.core.Setting.get(i);
var c=qx.Class.getByName(b);

if(c){this.__gO=new c;
var a=new Date;
this.__gO.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-a)+"ms");
var a=new Date;
this.__gO.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-a)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+b);
}},__gP:function(e){var k=this.__gO;

if(k){e.setReturnValue(k.close());
}},__gQ:function(){var l=this.__gO;

if(l){l.terminate();
}}},defer:function(d){qx.event.Registration.addListener(window,j,d.ready,d);
qx.event.Registration.addListener(window,f,d.__gQ,d);
qx.event.Registration.addListener(window,h,d.__gP,d);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var f="qx.locale.MTranslation";
qx.Mixin.define(f,{members:{tr:function(k,l){var m=qx.locale.Manager;

if(m){return m.tr.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(a,b,c,d){var e=qx.locale.Manager;

if(e){return e.trn.apply(e,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(g,h,i){var j=qx.locale.Manager;

if(j){return j.trc.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__re:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__re;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__re=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__re=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var u=">",t="",s="row",q="1100EE",p="3300CC",o="2200DD",n="end",m="880077",l="Number 1",k="4400BB",Q="0099FF",P="DD0022",O="center",N="660099",M="0066FF",L="AA0055",K="EE0011",J="990066",I="770088",H="BB0044",C="0000FF",D="right",A="00CCFF",B="bold",y="CC0033",z="demobrowser.demo.progressive.ProgressiveTable_Conditional",v="5500AA",w="FF0000",E="Number 2",F="0033FF",G="ID";
qx.Class.define(z,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);
var e=function(R){var S=[];

for(var T=0;T<R;T++){var x=Math.random()*1000;
S.push({renderer:s,location:n,data:[T,x,x]});
}return S;
};
var h=new qx.ui.progressive.renderer.table.Widths(3);
var c=[G,l,E];
var d=new qx.ui.progressive.headfoot.TableHeading(h,c);
var b=new qx.ui.progressive.headfoot.Progress(h,c);
var j=new qx.ui.progressive.structure.Default(d,b);
var a=new qx.ui.progressive.Progressive(j);
var g=new qx.ui.progressive.model.Default();
var f=e(100);
g.addElements(f);
a.setDataModel(g);
var i=new qx.ui.progressive.renderer.table.Row(h);
a.addRenderer(s,i);
var r=new qx.ui.progressive.renderer.table.cell.Conditional(D,t,t,t);
r.addNumericCondition(u,0,null,w,null,null);
r.addNumericCondition(u,50,null,K,null,null);
r.addNumericCondition(u,100,null,P,null,null);
r.addNumericCondition(u,150,null,y,null,null);
r.addNumericCondition(u,200,null,H,null,null);
r.addNumericCondition(u,250,null,L,null,null);
r.addNumericCondition(u,300,null,J,null,null);
r.addNumericCondition(u,350,null,m,null,null);
r.addNumericCondition(u,400,null,I,null,null);
r.addNumericCondition(u,450,null,N,null,null);
r.addNumericCondition(u,500,null,v,null,null);
r.addNumericCondition(u,550,null,k,null,null);
r.addNumericCondition(u,600,null,p,null,null);
r.addNumericCondition(u,650,null,o,null,null);
r.addNumericCondition(u,700,null,q,null,null);
r.addNumericCondition(u,750,null,C,null,null);
r.addNumericCondition(u,800,null,F,null,null);
r.addNumericCondition(u,850,null,M,null,null);
r.addNumericCondition(u,900,null,Q,null,null);
r.addNumericCondition(u,950,O,A,null,B);
i.addRenderer(2,r);
this.getRoot().add(a,{edge:50});
a.render();
}}});
})();
(function(){var e="qx.event.type.Event";
qx.Class.define(e,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(i,j){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!i;
this._cancelable=!!j;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(a){if(a){var b=a;
}else{var b=qx.event.Pool.getInstance().getObject(this.constructor);
}b._type=this._type;
b._target=this._target;
b._currentTarget=this._currentTarget;
b._relatedTarget=this._relatedTarget;
b._originalTarget=this._originalTarget;
b._stopPropagation=this._stopPropagation;
b._bubbles=this._bubbles;
b._preventDefault=this._preventDefault;
b._cancelable=this._cancelable;
return b;
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
},setTarget:function(c){this._target=c;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(m){this._currentTarget=m;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(l){this._relatedTarget=l;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(k){this._originalTarget=k;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(h){this._bubbles=h;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(d){this._cancelable=d;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cF:null,__cG:null,init:function(d,e,f){qx.event.type.Event.prototype.init.call(this,false,f);
this.__cF=d;
this.__cG=e;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
c.__cF=this.__cF;
c.__cG=this.__cG;
return c;
},getData:function(){return this.__cF;
},getOldData:function(){return this.__cG;
}},destruct:function(){this.__cF=this.__cG=null;
}});
})();
(function(){var bc="get",bb="",ba="[",Y="last",X="change",W="]",V=".",U="Number",T="String",S="set",br="deepBinding",bq="item",bp="reset",bo="' (",bn="Boolean",bm=").",bl=") to the object '",bk="Integer",bj="qx.data.SingleValueBinding",bi="No event could be found for the property",bg="PositiveNumber",bh="Binding from '",be="PositiveInteger",bf="Binding does not exist!",bd="Date";
qx.Class.define(bj,{statics:{DEBUG_ON:false,__cH:{},bind:function(cG,cH,cI,cJ,cK){var cU=this.__cJ(cG,cH,cI,cJ,cK);
var cP=cH.split(V);
var cM=this.__cQ(cP);
var cT=[];
var cQ=[];
var cR=[];
var cN=[];
var cO=cG;
for(var i=0;i<cP.length;i++){if(cM[i]!==bb){cN.push(X);
}else{cN.push(this.__cL(cO,cP[i]));
}cT[i]=cO;
if(i==cP.length-1){if(cM[i]!==bb){var cX=cM[i]===Y?cO.length-1:cM[i];
var cL=cO.getItem(cX);
this.__cP(cL,cI,cJ,cK,cG);
cR[i]=this.__cR(cO,cN[i],cI,cJ,cK,cM[i]);
}else{if(cP[i]!=null&&cO[bc+qx.lang.String.firstUp(cP[i])]!=null){var cL=cO[bc+qx.lang.String.firstUp(cP[i])]();
this.__cP(cL,cI,cJ,cK,cG);
}cR[i]=this.__cR(cO,cN[i],cI,cJ,cK);
}}else{var cV={index:i,propertyNames:cP,sources:cT,listenerIds:cR,arrayIndexValues:cM,targetObject:cI,targetPropertyChain:cJ,options:cK,listeners:cQ};
var cS=qx.lang.Function.bind(this.__cI,this,cV);
cQ.push(cS);
cR[i]=cO.addListener(cN[i],cS);
}if(cO[bc+qx.lang.String.firstUp(cP[i])]==null){cO=null;
}else if(cM[i]!==bb){cO=cO[bc+qx.lang.String.firstUp(cP[i])](cM[i]);
}else{cO=cO[bc+qx.lang.String.firstUp(cP[i])]();
}
if(!cO){break;
}}var cW={type:br,listenerIds:cR,sources:cT,targetListenerIds:cU.listenerIds,targets:cU.targets};
this.__cS(cW,cG,cH,cI,cJ);
return cW;
},__cI:function(cm){if(cm.options&&cm.options.onUpdate){cm.options.onUpdate(cm.sources[cm.index],cm.targetObject);
}for(var j=cm.index+1;j<cm.propertyNames.length;j++){var cq=cm.sources[j];
cm.sources[j]=null;

if(!cq){continue;
}cq.removeListenerById(cm.listenerIds[j]);
}var cq=cm.sources[cm.index];
for(var j=cm.index+1;j<cm.propertyNames.length;j++){if(cm.arrayIndexValues[j-1]!==bb){cq=cq[bc+qx.lang.String.firstUp(cm.propertyNames[j-1])](cm.arrayIndexValues[j-1]);
}else{cq=cq[bc+qx.lang.String.firstUp(cm.propertyNames[j-1])]();
}cm.sources[j]=cq;
if(!cq){this.__cM(cm.targetObject,cm.targetPropertyChain);
break;
}if(j==cm.propertyNames.length-1){if(qx.Class.implementsInterface(cq,qx.data.IListData)){var cr=cm.arrayIndexValues[j]===Y?cq.length-1:cm.arrayIndexValues[j];
var co=cq.getItem(cr);
this.__cP(co,cm.targetObject,cm.targetPropertyChain,cm.options,cm.sources[cm.index]);
cm.listenerIds[j]=this.__cR(cq,X,cm.targetObject,cm.targetPropertyChain,cm.options,cm.arrayIndexValues[j]);
}else{if(cm.propertyNames[j]!=null&&cq[bc+qx.lang.String.firstUp(cm.propertyNames[j])]!=null){var co=cq[bc+qx.lang.String.firstUp(cm.propertyNames[j])]();
this.__cP(co,cm.targetObject,cm.targetPropertyChain,cm.options,cm.sources[cm.index]);
}var cp=this.__cL(cq,cm.propertyNames[j]);
cm.listenerIds[j]=this.__cR(cq,cp,cm.targetObject,cm.targetPropertyChain,cm.options);
}}else{if(cm.listeners[j]==null){var cn=qx.lang.Function.bind(this.__cI,this,cm);
cm.listeners.push(cn);
}if(qx.Class.implementsInterface(cq,qx.data.IListData)){var cp=X;
}else{var cp=this.__cL(cq,cm.propertyNames[j]);
}cm.listenerIds[j]=cq.addListener(cp,cm.listeners[j]);
}}},__cJ:function(bw,bx,by,bz,bA){var bE=bz.split(V);
var bC=this.__cQ(bE);
var bJ=[];
var bI=[];
var bG=[];
var bF=[];
var bD=by;
for(var i=0;i<bE.length-1;i++){if(bC[i]!==bb){bF.push(X);
}else{try{bF.push(this.__cL(bD,bE[i]));
}catch(e){break;
}}bJ[i]=bD;
var bH=function(){for(var j=i+1;j<bE.length-1;j++){var cE=bJ[j];
bJ[j]=null;

if(!cE){continue;
}cE.removeListenerById(bG[j]);
}var cE=bJ[i];
for(var j=i+1;j<bE.length-1;j++){var cC=qx.lang.String.firstUp(bE[j-1]);
if(bC[j-1]!==bb){var cF=bC[j-1]===Y?cE.getLength()-1:bC[j-1];
cE=cE[bc+cC](cF);
}else{cE=cE[bc+cC]();
}bJ[j]=cE;
if(bI[j]==null){bI.push(bH);
}if(qx.Class.implementsInterface(cE,qx.data.IListData)){var cD=X;
}else{try{var cD=qx.data.SingleValueBinding.__cL(cE,bE[j]);
}catch(e){break;
}}bG[j]=cE.addListener(cD,bI[j]);
}qx.data.SingleValueBinding.__cK(bw,bx,by,bz);
};
bI.push(bH);
bG[i]=bD.addListener(bF[i],bH);
var bB=qx.lang.String.firstUp(bE[i]);
if(bD[bc+bB]==null){bD=null;
}else if(bC[i]!==bb){bD=bD[bc+bB](bC[i]);
}else{bD=bD[bc+bB]();
}
if(!bD){break;
}}return {listenerIds:bG,targets:bJ};
},__cK:function(bS,bT,bU,bV){var ca=this.__cO(bS,bT);

if(ca!=null){var cc=bT.substring(bT.lastIndexOf(V)+1,bT.length);
if(cc.charAt(cc.length-1)==W){var bW=cc.substring(cc.lastIndexOf(ba)+1,cc.length-1);
var bY=cc.substring(0,cc.lastIndexOf(ba));
var cb=ca[bc+qx.lang.String.firstUp(bY)]();

if(bW==Y){bW=cb.length-1;
}
if(cb!=null){var bX=cb.getItem(bW);
}}else{var bX=ca[bc+qx.lang.String.firstUp(cc)]();
}}this.__cN(bU,bV,bX);
},__cL:function(P,Q){var R=this.__cU(P,Q);
if(R==null){if(qx.Class.supportsEvent(P.constructor,Q)){R=Q;
}else if(qx.Class.supportsEvent(P.constructor,X+qx.lang.String.firstUp(Q))){R=X+qx.lang.String.firstUp(Q);
}else{throw new qx.core.AssertionError(bi,Q);
}}return R;
},__cM:function(m,n){var o=this.__cO(m,n);

if(o!=null){var p=n.substring(n.lastIndexOf(V)+1,n.length);
if(p.charAt(p.length-1)==W){this.__cN(m,n,null);
return;
}if(o[bp+qx.lang.String.firstUp(p)]!=undefined){o[bp+qx.lang.String.firstUp(p)]();
}else{o[S+qx.lang.String.firstUp(p)](null);
}}},__cN:function(H,I,J){var N=this.__cO(H,I);

if(N!=null){var O=I.substring(I.lastIndexOf(V)+1,I.length);
if(O.charAt(O.length-1)==W){var K=O.substring(O.lastIndexOf(ba)+1,O.length-1);
var M=O.substring(0,O.lastIndexOf(ba));
var L=N[bc+qx.lang.String.firstUp(M)]();

if(K==Y){K=L.length-1;
}
if(L!=null){L.setItem(K,J);
}}else{N[S+qx.lang.String.firstUp(O)](J);
}}},__cO:function(q,r){var u=r.split(V);
var v=q;
for(var i=0;i<u.length-1;i++){try{var t=u[i];
if(t.indexOf(W)==t.length-1){var s=t.substring(t.indexOf(ba)+1,t.length-1);
t=t.substring(0,t.indexOf(ba));
}v=v[bc+qx.lang.String.firstUp(t)]();

if(s!=null){if(s==Y){s=v.length-1;
}v=v.getItem(s);
s=null;
}}catch(cs){return null;
}}return v;
},__cP:function(C,D,E,F,G){C=this.__cT(C,D,E,F);
if(C==null){this.__cM(D,E);
}if(C!=undefined){try{this.__cN(D,E,C);
if(F&&F.onUpdate){F.onUpdate(G,D,C);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(F&&F.onSetFail){F.onSetFail(e);
}else{this.warn("Failed so set value "+C+" on "+D+". Error message: "+e);
}}}},__cQ:function(bP){var bQ=[];
for(var i=0;i<bP.length;i++){var name=bP[i];
if(qx.lang.String.endsWith(name,W)){var bR=name.substring(name.indexOf(ba)+1,name.indexOf(W));
if(name.indexOf(W)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bR!==Y){if(bR==bb||isNaN(parseInt(bR))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(ba)!=0){bP[i]=name.substring(0,name.indexOf(ba));
bQ[i]=bb;
bQ[i+1]=bR;
bP.splice(i+1,0,bq);
i++;
}else{bQ[i]=bR;
bP.splice(i,1,bq);
}}else{bQ[i]=bb;
}}return bQ;
},__cR:function(cd,ce,cf,cg,ch,ci){var cj;
{};
var cl=function(bs,e){if(bs!==bb){if(bs===Y){bs=cd.length-1;
}var bv=cd.getItem(bs);
if(bv==undefined){qx.data.SingleValueBinding.__cM(cf,cg);
}var bt=e.getData().start;
var bu=e.getData().end;

if(bs<bt||bs>bu){return;
}}else{var bv=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cd+" by "+ce+" to "+cf+" ("+cg+")");
qx.log.Logger.debug("Data before conversion: "+bv);
}bv=qx.data.SingleValueBinding.__cT(bv,cf,cg,ch);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+bv);
}try{if(bv!=undefined){qx.data.SingleValueBinding.__cN(cf,cg,bv);
}else{qx.data.SingleValueBinding.__cM(cf,cg);
}if(ch&&ch.onUpdate){ch.onUpdate(cd,cf,bv);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(ch&&ch.onSetFail){ch.onSetFail(e);
}else{this.warn("Failed so set value "+bv+" on "+cf+". Error message: "+e);
}}};
if(!ci){ci=bb;
}cl=qx.lang.Function.bind(cl,cd,ci);
var ck=cd.addListener(ce,cl);
return ck;
},__cS:function(w,x,y,z,A){if(this.__cH[x.toHashCode()]===undefined){this.__cH[x.toHashCode()]=[];
}this.__cH[x.toHashCode()].push([w,x,y,z,A]);
},__cT:function(a,b,c,d){if(d&&d.converter){var g;

if(b.getModel){g=b.getModel();
}return d.converter(a,g);
}else{var k=this.__cO(b,c);
var l=c.substring(c.lastIndexOf(V)+1,c.length);
if(k==null){return a;
}var h=qx.Class.getPropertyDefinition(k.constructor,l);
var f=h==null?bb:h.check;
return this.__cV(a,f);
}},__cU:function(bM,bN){var bO=qx.Class.getPropertyDefinition(bM.constructor,bN);

if(bO==null){return null;
}return bO.event;
},__cV:function(cY,da){var db=qx.lang.Type.getClass(cY);
if((db==U||db==T)&&(da==bk||da==be)){cY=parseInt(cY);
}if((db==bn||db==U||db==bd)&&da==T){cY=cY+bb;
}if((db==U||db==T)&&(da==U||da==bg)){cY=parseFloat(cY);
}return cY;
},removeBindingFromObject:function(ct,cu){if(cu.type==br){for(var i=0;i<cu.sources.length;i++){if(cu.sources[i]){cu.sources[i].removeListenerById(cu.listenerIds[i]);
}}for(var i=0;i<cu.targets.length;i++){if(cu.targets[i]){cu.targets[i].removeListenerById(cu.targetListenerIds[i]);
}}}else{ct.removeListenerById(cu);
}var cv=this.__cH[ct.toHashCode()];
if(cv!=undefined){for(var i=0;i<cv.length;i++){if(cv[i][0]==cu){qx.lang.Array.remove(cv,cv[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cA){{};
var cB=this.__cH[cA.toHashCode()];

if(cB!=undefined){for(var i=cB.length-1;i>=0;i--){this.removeBindingFromObject(cA,cB[i][0]);
}}},getAllBindingsForObject:function(B){if(this.__cH[B.toHashCode()]===undefined){this.__cH[B.toHashCode()]=[];
}return this.__cH[B.toHashCode()];
},removeAllBindings:function(){for(var bL in this.__cH){var bK=qx.core.ObjectRegistry.fromHashCode(bL);
if(bK==null){delete this.__cH[bL];
continue;
}this.removeAllBindingsForObject(bK);
}this.__cH={};
},getAllBindings:function(){return this.__cH;
},showBindingInLog:function(cw,cx){var cz;
for(var i=0;i<this.__cH[cw.toHashCode()].length;i++){if(this.__cH[cw.toHashCode()][i][0]==cx){cz=this.__cH[cw.toHashCode()][i];
break;
}}
if(cz===undefined){var cy=bf;
}else{var cy=bh+cz[1]+bo+cz[2]+bl+cz[3]+bo+cz[4]+bm;
}qx.log.Logger.debug(cy);
},showAllBindingsInLog:function(){for(var dd in this.__cH){var dc=qx.core.ObjectRegistry.fromHashCode(dd);

for(var i=0;i<this.__cH[dd].length;i++){this.showBindingInLog(dc,this.__cH[dd][i][0]);
}}}}});
})();
(function(){var p="",o="g",n="0",m='\\$1',l="%",k='-',j="qx.lang.String",h=' ',g='\n',f="undefined";
qx.Class.define(j,{statics:{camelCase:function(N){return N.replace(/\-([a-z])/g,function(r,s){return s.toUpperCase();
});
},hyphenate:function(z){return z.replace(/[A-Z]/g,function(K){return (k+K.charAt(0).toLowerCase());
});
},capitalize:function(J){return J.replace(/\b[a-z]/g,function(G){return G.toUpperCase();
});
},clean:function(a){return this.trim(a.replace(/\s+/g,h));
},trimLeft:function(e){return e.replace(/^\s+/,p);
},trimRight:function(Q){return Q.replace(/\s+$/,p);
},trim:function(M){return M.replace(/^\s+|\s+$/g,p);
},startsWith:function(O,P){return O.indexOf(P)===0;
},endsWith:function(A,B){return A.substring(A.length-B.length,A.length)===B;
},repeat:function(H,I){return H.length>0?new Array(I+1).join(H):p;
},pad:function(v,length,w){var x=length-v.length;

if(x>0){if(typeof w===f){w=n;
}return this.repeat(w,x)+v;
}else{return v;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(t,u){return t.indexOf(u)!=-1;
},format:function(b,c){var d=b;

for(var i=0;i<c.length;i++){d=d.replace(new RegExp(l+(i+1),o),c[i]);
}return d;
},escapeRegexpChars:function(y){return y.replace(/([.*+?^${}()|[\]\/\\])/g,m);
},toArray:function(q){return q.split(/\B|\b/g);
},stripTags:function(L){return L.replace(/<\/?[^>]+>/gi,p);
},stripScripts:function(C,D){var F=p;
var E=C.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){F+=arguments[1]+g;
return p;
});

if(D===true){qx.lang.Function.globalEval(F);
}return E;
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.event.type.Event",b="qx.data.IListData";
qx.Interface.define(b,{events:{"change":d,"changeLength":c},members:{getItem:function(a){},setItem:function(i,j){},splice:function(f,g,h){},contains:function(e){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var e="",d="qx.core.WindowError";
qx.Bootstrap.define(d,{extend:Error,construct:function(a,b,c){Error.call(this,a);
this.__db=a;
this.__dc=b||e;
this.__dd=c===undefined?-1:c;
},members:{__db:null,__dc:null,__dd:null,toString:function(){return this.__db;
},getUri:function(){return this.__dc;
},getLineNumber:function(){return this.__dd;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__de=b+(c&&c.message?c.message:c);
Error.call(this,this.__de);
this.__df=d;
this.__dg=c;
},members:{__dg:null,__df:null,__de:null,toString:function(){return this.__de;
},getArguments:function(){return this.__df;
},getSourceException:function(){return this.__dg;
}},destruct:function(){this.__dg=null;
this.__df=null;
this.__de=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__dh=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__dh:null,message:null,getComment:function(){return this.__dh;
},toString:function(){return this.__dh+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__di=qx.dev.StackTrace.getStackTrace();
},members:{__di:null,getStackTrace:function(){return this.__di;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var h="qx.lang.Type",g="Error",f="RegExp",e="Date",d="Number",c="Boolean";
qx.Class.define(h,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(k){return this.getClass(k)==f;
},isNumber:function(b){return (b!==null&&(this.getClass(b)==d||b instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==c||i instanceof Boolean));
},isDate:function(a){return (a!==null&&(this.getClass(a)==e||a instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==g||j instanceof Error));
}}});
})();
(function(){var c="qx.util.ObjectPool",b="Integer";
qx.Class.define(c,{extend:qx.core.Object,construct:function(a){qx.core.Object.call(this);
this.__dj={};

if(a!=null){this.setSize(a);
}},properties:{size:{check:b,init:Infinity}},members:{__dj:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__dj[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__dj){return;
}var h=g.classname;
var j=this.__dj[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__dj[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__dj;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__dj;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeFields:function(t,u){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=u.length;i<l;i++){var name=u[i];

if(t[name]==null||!t.hasOwnProperty(name)){continue;
}t[name]=null;
}},disposeObjects:function(h,j,k){var name;

for(var i=0,l=j.length;i<l;i++){name=j[i];

if(h[name]==null||!h.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(h[name].dispose){if(!k&&h[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{h[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}h[name]=null;
}},disposeArray:function(m,n){var p=m[n];

if(!p){return;
}if(qx.core.ObjectRegistry.inShutDown){m[n]=null;
return;
}try{var o;

for(var i=p.length-1;i>=0;i--){o=p[i];

if(o){o.dispose();
}}}catch(b){throw new Error("The array field: "+n+" of object: "+m+" has non disposable entries: "+b);
}p.length=0;
m[n]=null;
},disposeMap:function(d,e){var f=d[e];

if(!f){return;
}if(qx.core.ObjectRegistry.inShutDown){d[e]=null;
return;
}try{for(var g in f){if(f.hasOwnProperty(g)){f[g].dispose();
}}}catch(c){throw new Error("The map field: "+e+" of object: "+d+" has non disposable entries: "+c);
}d[e]=null;
},disposeTriggeredBy:function(q,r){var s=r.dispose;
r.dispose=function(){s.call(r);
q.dispose();
};
}}});
})();
(function(){var f="qx.event.handler.Object";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(a,b){return qx.Class.supportsEvent(a.constructor,b);
},registerEvent:function(g,h,i){},unregisterEvent:function(c,d,e){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__dk:function(){this.QUIRKS_MODE=this.__dl();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__dl:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__dk();
}});
})();
(function(){var k="qx.lang.Object";
qx.Class.define(k,{statics:{empty:function(u){{};

for(var v in u){if(u.hasOwnProperty(v)){delete u[v];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(J){{};
return J.__count__===0;
}:
function(h){{};

for(var j in h){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(m,n){{};
return m.__count__>=n;
}:
function(w,x){{};

if(x<=0){return true;
}var length=0;

for(var y in w){if((++length)>=x){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(o){{};
var q=[];
var p=this.getKeys(o);

for(var i=0,l=p.length;i<l;i++){q.push(o[p[i]]);
}return q;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(c,d){{};
return qx.lang.Object.mergeWith(c,d,false);
},merge:function(E,F){{};
var G=arguments.length;

for(var i=1;i<G;i++){qx.lang.Object.mergeWith(E,arguments[i]);
}return E;
},clone:function(z){{};
var A={};

for(var B in z){A[B]=z[B];
}return A;
},invert:function(r){{};
var s={};

for(var t in r){s[r[t].toString()]=t;
}return s;
},getKeyFromValue:function(e,f){{};

for(var g in e){if(e.hasOwnProperty(g)&&e[g]===f){return g;
}}return null;
},contains:function(a,b){{};
return this.getKeyFromValue(a,b)!==null;
},select:function(H,I){{};
return I[H];
},fromArray:function(C){{};
var D={};

for(var i=0,l=C.length;i<l;i++){{};
D[C[i].toString()]=true;
}return D;
}}});
})();
(function(){var v="emulated",u="native",t='"',s="qx.lang.Core",r="\\\\",q="\\\"",p="[object Error]";
qx.Class.define(s,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==p)?v:u,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?u:v,{"native":Array.prototype.indexOf,"emulated":function(y,z){if(z==null){z=0;
}else if(z<0){z=Math.max(0,this.length+z);
}
for(var i=z;i<this.length;i++){if(this[i]===y){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?u:v,{"native":Array.prototype.lastIndexOf,"emulated":function(w,x){if(x==null){x=this.length-1;
}else if(x<0){x=Math.max(0,this.length+x);
}
for(var i=x;i>=0;i--){if(this[i]===w){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?u:v,{"native":Array.prototype.forEach,"emulated":function(m,n){var l=this.length;

for(var i=0;i<l;i++){var o=this[i];

if(o!==undefined){m.call(n||window,o,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?u:v,{"native":Array.prototype.filter,"emulated":function(A,B){var C=[];
var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(A.call(B||window,D,i,this)){C.push(this[i]);
}}}return C;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?u:v,{"native":Array.prototype.map,"emulated":function(g,h){var j=[];
var l=this.length;

for(var i=0;i<l;i++){var k=this[i];

if(k!==undefined){j[i]=g.call(h||window,k,i,this);
}}return j;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?u:v,{"native":Array.prototype.some,"emulated":function(d,e){var l=this.length;

for(var i=0;i<l;i++){var f=this[i];

if(f!==undefined){if(d.call(e||window,f,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?u:v,{"native":Array.prototype.every,"emulated":function(a,b){var l=this.length;

for(var i=0;i<l;i++){var c=this[i];

if(c!==undefined){if(!a.call(b||window,c,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?u:v,{"native":String.prototype.quote,"emulated":function(){return t+this.replace(/\\/g,r).replace(/\"/g,q)+t;
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
qx.Class.define(G,{statics:{__dm:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__dn:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__do:function(){var J=qx.lang.Generics.__dm;

for(var N in J){var L=window[N];
var K=J[N];

for(var i=0,l=K.length;i<l;i++){var M=K[i];

if(!L[M]){L[M]=qx.lang.Generics.__dn(L,M);
}}}}},defer:function(O){O.__do();
}});
})();
(function(){var f="qx.event.type.Native";
qx.Class.define(f,{extend:qx.event.type.Event,members:{init:function(a,b,c,d,e){qx.event.type.Event.prototype.init.call(this,d,e);
this._target=b||qx.bom.Event.getTarget(a);
this._relatedTarget=c||qx.bom.Event.getRelatedTarget(a);

if(a.timeStamp){this._timeStamp=a.timeStamp;
}this._native=a;
this._returnValue=null;
return this;
},clone:function(j){var k=qx.event.type.Event.prototype.clone.call(this,j);
var l={};
k._native=this._cloneNativeEvent(this._native,l);
k._returnValue=this._returnValue;
return k;
},_cloneNativeEvent:function(g,h){h.preventDefault=qx.lang.Function.empty;
return h;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(i){this._returnValue=i;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__eF:function(){var o=navigator.platform;
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
}}},defer:function(n){n.__eF();
}});
})();
(function(){var n="win98",m="osx2",l="osx0",k="osx4",j="win95",i="win2000",h="osx1",g="osx5",f="osx3",e="Windows NT 5.01",L=")",K="winxp",J="freebsd",I="sunos",H="SV1",G="|",F="nintendods",E="winnt4",D="wince",C="winme",u="os9",v="\.",s="osx",t="linux",q="netbsd",r="winvista",o="openbsd",p="(",w="win2003",x="symbian",z="win7",y="g",B="qx.bom.client.System",A=" Mobile/";
qx.Class.define(B,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__eG:{"Windows NT 6.1":z,"Windows NT 6.0":r,"Windows NT 5.2":w,"Windows NT 5.1":K,"Windows NT 5.0":i,"Windows 2000":i,"Windows NT 4.0":E,"Win 9x 4.90":C,"Windows CE":D,"Windows 98":n,"Win98":n,"Windows 95":j,"Win95":j,"Linux":t,"FreeBSD":J,"NetBSD":q,"OpenBSD":o,"SunOS":I,"Symbian System":x,"Nitro":F,"PSP":"sonypsp","Mac OS X 10_5":g,"Mac OS X 10.5":g,"Mac OS X 10_4":k,"Mac OS X 10.4":k,"Mac OS X 10_3":f,"Mac OS X 10.3":f,"Mac OS X 10_2":m,"Mac OS X 10.2":m,"Mac OS X 10_1":h,"Mac OS X 10.1":h,"Mac OS X 10_0":l,"Mac OS X 10.0":l,"Mac OS X":s,"Mac OS 9":u},__eH:function(){var c=navigator.userAgent;
var b=[];

for(var a in this.__eG){b.push(a);
}var d=new RegExp(p+b.join(G).replace(/\./g,v)+L,y);

if(!d.test(c)){this.UNKNOWN_SYSTEM=true;

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
if(qx.bom.client.Engine.WEBKIT&&RegExp(A).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__eG[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(c.indexOf(e)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&c.indexOf(H)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__eH();
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(j,k){var n=null;
var q=null;
var t=null;
var u=null;
var p=null;

if(j){n=j.meta.color||null;
q=j.meta.decoration||null;
t=j.meta.font||null;
u=j.meta.icon||null;
p=j.meta.appearance||null;
}var r=qx.theme.manager.Color.getInstance();
var s=qx.theme.manager.Decoration.getInstance();
var l=qx.theme.manager.Font.getInstance();
var o=qx.theme.manager.Icon.getInstance();
var m=qx.theme.manager.Appearance.getInstance();
r.setTheme(n);
s.setTheme(q);
l.setTheme(t);
o.setTheme(u);
m.setTheme(p);
},initialize:function(){var h=qx.core.Setting;
var g,i;
g=h.get(e);

if(g){i=qx.Theme.getByName(g);

if(!i){throw new Error("The theme to use is not available: "+g);
}this.setTheme(i);
}}},settings:{"qx.theme":c}});
})();
(function(){var e="qx.util.ValueManager",d="abstract";
qx.Class.define(e,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(b){return this._dynamic[b];
},isDynamic:function(c){return !!this._dynamic[c];
},resolve:function(a){if(a&&this._dynamic[a]){return this._dynamic[a];
}return a;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var i="_applyTheme",h="qx.theme.manager.Color",g="Theme",f="changeTheme",e="string",d="singleton";
qx.Class.define(h,{type:d,extend:qx.util.ValueManager,properties:{theme:{check:g,nullable:true,apply:i,event:f}},members:{_applyTheme:function(j){var k={};

if(j){var l=j.colors;
var m=qx.util.ColorUtil;
var n;

for(var o in l){n=l[o];

if(typeof n===e){if(!m.isCssString(n)){throw new Error("Could not parse color: "+n);
}}else if(n instanceof Array){n=m.rgbToRgbString(n);
}else{throw new Error("Could not parse color: "+n);
}k[o]=n;
}}this._setDynamic(k);
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.colors[p]){return s[p]=r.colors[p];
}return p;
},isDynamic:function(a){var c=this._dynamic;

if(a&&(c[a]!==undefined)){return true;
}var b=this.getTheme();

if(b!==null&&a&&(b.colors[a]!==undefined)){c[a]=b.colors[a];
return true;
}return false;
}}});
})();
(function(){var L=",",K="rgb(",J=")",I="qx.theme.manager.Color",H="qx.util.ColorUtil";
qx.Class.define(H,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(B){return this.NAMED[B]!==undefined;
},isSystemColor:function(y){return this.SYSTEM[y]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(I);
},isThemedColor:function(bg){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(bg);
},stringToRgb:function(C){if(this.supportsThemes()&&this.isThemedColor(C)){var C=qx.theme.manager.Color.getInstance().resolveDynamic(C);
}
if(this.isNamedColor(C)){return this.NAMED[C];
}else if(this.isSystemColor(C)){throw new Error("Could not convert system colors to RGB: "+C);
}else if(this.isRgbString(C)){return this.__hJ();
}else if(this.isHex3String(C)){return this.__hL();
}else if(this.isHex6String(C)){return this.__hM();
}throw new Error("Could not parse color: "+C);
},cssStringToRgb:function(z){if(this.isNamedColor(z)){return this.NAMED[z];
}else if(this.isSystemColor(z)){throw new Error("Could not convert system colors to RGB: "+z);
}else if(this.isRgbString(z)){return this.__hJ();
}else if(this.isRgbaString(z)){return this.__hK();
}else if(this.isHex3String(z)){return this.__hL();
}else if(this.isHex6String(z)){return this.__hM();
}throw new Error("Could not parse color: "+z);
},stringToRgbString:function(S){return this.rgbToRgbString(this.stringToRgb(S));
},rgbToRgbString:function(Q){return K+Q[0]+L+Q[1]+L+Q[2]+J;
},rgbToHexString:function(A){return (qx.lang.String.pad(A[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(A[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(A[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(U){return this.isThemedColor(U)||this.isNamedColor(U)||this.isHex3String(U)||this.isHex6String(U)||this.isRgbString(U);
},isCssString:function(a){return this.isSystemColor(a)||this.isNamedColor(a)||this.isHex3String(a)||this.isHex6String(a)||this.isRgbString(a);
},isHex3String:function(bh){return this.REGEXP.hex3.test(bh);
},isHex6String:function(bi){return this.REGEXP.hex6.test(bi);
},isRgbString:function(T){return this.REGEXP.rgb.test(T);
},isRgbaString:function(R){return this.REGEXP.rgba.test(R);
},__hJ:function(){var x=parseInt(RegExp.$1,10);
var w=parseInt(RegExp.$2,10);
var v=parseInt(RegExp.$3,10);
return [x,w,v];
},__hK:function(){var P=parseInt(RegExp.$1,10);
var O=parseInt(RegExp.$2,10);
var N=parseInt(RegExp.$3,10);
return [P,O,N];
},__hL:function(){var F=parseInt(RegExp.$1,16)*17;
var E=parseInt(RegExp.$2,16)*17;
var D=parseInt(RegExp.$3,16)*17;
return [F,E,D];
},__hM:function(){var bf=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var be=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var bd=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [bf,be,bd];
},hex3StringToRgb:function(G){if(this.isHex3String(G)){return this.__hL(G);
}throw new Error("Invalid hex3 value: "+G);
},hex6StringToRgb:function(M){if(this.isHex6String(M)){return this.__hM(M);
}throw new Error("Invalid hex6 value: "+M);
},hexStringToRgb:function(bc){if(this.isHex3String(bc)){return this.__hL(bc);
}
if(this.isHex6String(bc)){return this.__hM(bc);
}throw new Error("Invalid hex value: "+bc);
},rgbToHsb:function(c){var e,h,k;
var u=c[0];
var n=c[1];
var d=c[2];
var s=(u>n)?u:n;

if(d>s){s=d;
}var j=(u<n)?u:n;

if(d<j){j=d;
}k=s/255.0;

if(s!=0){h=(s-j)/s;
}else{h=0;
}
if(h==0){e=0;
}else{var m=(s-u)/(s-j);
var o=(s-n)/(s-j);
var l=(s-d)/(s-j);

if(u==s){e=l-o;
}else if(n==s){e=2.0+m-l;
}else{e=4.0+o-m;
}e=e/6.0;

if(e<0){e=e+1.0;
}}return [Math.round(e*360),Math.round(h*100),Math.round(k*100)];
},hsbToRgb:function(V){var i,f,p,q,t;
var W=V[0]/360;
var X=V[1]/100;
var Y=V[2]/100;

if(W>=1.0){W%=1.0;
}
if(X>1.0){X=1.0;
}
if(Y>1.0){Y=1.0;
}var ba=Math.floor(255*Y);
var bb={};

if(X==0.0){bb.red=bb.green=bb.blue=ba;
}else{W*=6.0;
i=Math.floor(W);
f=W-i;
p=Math.floor(ba*(1.0-X));
q=Math.floor(ba*(1.0-(X*f)));
t=Math.floor(ba*(1.0-(X*(1.0-f))));

switch(i){case 0:bb.red=ba;
bb.green=t;
bb.blue=p;
break;
case 1:bb.red=q;
bb.green=ba;
bb.blue=p;
break;
case 2:bb.red=p;
bb.green=ba;
bb.blue=t;
break;
case 3:bb.red=p;
bb.green=q;
bb.blue=ba;
break;
case 4:bb.red=t;
bb.green=p;
bb.blue=ba;
break;
case 5:bb.red=ba;
bb.green=p;
bb.blue=q;
break;
}}return [bb.red,bb.green,bb.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var n="object",m="_applyTheme",l="__gR",k="qx.theme.manager.Decoration",j="Theme",i="changeTheme",h="string",g="singleton";
qx.Class.define(k,{type:g,extend:qx.core.Object,properties:{theme:{check:j,nullable:true,apply:m,event:i}},members:{__gR:null,resolve:function(a){if(!a){return null;
}
if(typeof a===n){return a;
}var d=this.getTheme();

if(!d){return null;
}var d=this.getTheme();

if(!d){return null;
}var e=this.__gR;

if(!e){e=this.__gR={};
}var b=e[a];

if(b){return b;
}var c=d.decorations[a];

if(!c){return null;
}var f=c.decorator;

if(f==null){throw new Error("Missing definition of which decorator to use in entry: "+a+"!");
}return e[a]=(new f).set(c.style);
},isValidPropertyValue:function(u){if(typeof u===h){return this.isDynamic(u);
}else if(typeof u===n){var v=u.constructor;
return qx.Class.hasInterface(v,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(o){if(!o){return false;
}var p=this.getTheme();

if(!p){return false;
}return !!p.decorations[o];
},_applyTheme:function(q,r){var t=qx.util.AliasManager.getInstance();

if(r){for(var s in r.aliases){t.remove(s);
}}
if(q){for(var s in q.aliases){t.add(s,q.aliases[s]);
}}
if(!q){this.__gR={};
}}},destruct:function(){this._disposeMap(l);
}});
})();
(function(){var c="qx.ui.decoration.IDecorator";
qx.Interface.define(c,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(a,b){},getInsets:function(){}}});
})();
(function(){var k="/",j="0",i="qx/static",h="http://",g="https://",f="file://",e="qx.util.AliasManager",d="singleton",c=".",b="static";
qx.Class.define(e,{type:d,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__gS={};
this.add(b,i);
},members:{__gS:null,_preprocess:function(r){var u=this._getDynamic();

if(u[r]===false){return r;
}else if(u[r]===undefined){if(r.charAt(0)===k||r.charAt(0)===c||r.indexOf(h)===0||r.indexOf(g)===j||r.indexOf(f)===0){u[r]=false;
return r;
}
if(this.__gS[r]){return this.__gS[r];
}var t=r.substring(0,r.indexOf(k));
var s=this.__gS[t];

if(s!==undefined){u[r]=s+r.substring(t.length);
}}return r;
},add:function(l,m){this.__gS[l]=m;
var o=this._getDynamic();
for(var n in o){if(n.substring(0,n.indexOf(k))===l){o[n]=m+n.substring(l.length);
}}},remove:function(a){delete this.__gS[a];
},resolve:function(p){var q=this._getDynamic();

if(p!==null){p=this._preprocess(p);
}return q[p]||p;
}},destruct:function(){this.__gS=null;
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(l){var m=this._dynamic;
return l instanceof qx.bom.Font?l:m[l];
},resolve:function(s){var v=this._dynamic;
var t=v[s];

if(t){return t;
}var u=this.getTheme();

if(u!==null&&u.fonts[s]){return v[s]=(new qx.bom.Font).set(u.fonts[s]);
}return s;
},isDynamic:function(i){var k=this._dynamic;

if(i&&(i instanceof qx.bom.Font||k[i]!==undefined)){return true;
}var j=this.getTheme();

if(j!==null&&i&&j.fonts[i]){k[i]=(new qx.bom.Font).set(j.fonts[i]);
return true;
}return false;
},__jX:function(f,g){if(f[g].include){var h=f[f[g].include];
f[g].include=null;
delete f[g].include;
f[g]=qx.lang.Object.mergeWith(f[g],h,false);
this.__jX(f,g);
}},_applyTheme:function(n){var o=this._getDynamic();

for(var r in o){if(o[r].themed){o[r].dispose();
delete o[r];
}}
if(n){var p=n.fonts;
var q=qx.bom.Font;

for(var r in p){if(p[r].include&&p[p[r].include]){this.__jX(p,r);
}o[r]=(new q).set(p[r]);
o[r].themed=true;
}}this._setDynamic(o);
}}});
})();
(function(){var r="",q="underline",p="Boolean",o="px",n='"',m="italic",k="normal",j="bold",h="_applyItalic",g="_applyBold",D="Integer",C="_applyFamily",B="_applyLineHeight",A="Array",z="overline",y="line-through",x="qx.bom.Font",w="Number",v="_applyDecoration",u=" ",s="_applySize",t=",";
qx.Class.define(x,{extend:qx.core.Object,construct:function(c,d){qx.core.Object.call(this);

if(c!==undefined){this.setSize(c);
}
if(d!==undefined){this.setFamily(d);
}},statics:{fromString:function(P){var T=new qx.bom.Font();
var R=P.split(/\s+/);
var name=[];
var S;

for(var i=0;i<R.length;i++){switch(S=R[i]){case j:T.setBold(true);
break;
case m:T.setItalic(true);
break;
case q:T.setDecoration(q);
break;
default:var Q=parseInt(S,10);

if(Q==S||qx.lang.String.contains(S,o)){T.setSize(Q);
}else{name.push(S);
}break;
}}
if(name.length>0){T.setFamily(name);
}return T;
},fromConfig:function(N){var O=new qx.bom.Font;
O.set(N);
return O;
},__jY:{fontFamily:r,fontSize:r,fontWeight:r,fontStyle:r,textDecoration:r,lineHeight:1.2},getDefaultStyles:function(){return this.__jY;
}},properties:{size:{check:D,nullable:true,apply:s},lineHeight:{check:w,nullable:true,apply:B},family:{check:A,nullable:true,apply:C},bold:{check:p,nullable:true,apply:g},italic:{check:p,nullable:true,apply:h},decoration:{check:[q,y,z],nullable:true,apply:v}},members:{__ka:null,__kb:null,__kc:null,__kd:null,__ke:null,__kf:null,_applySize:function(J,K){this.__ka=J===null?null:J+o;
},_applyLineHeight:function(L,M){this.__kf=L===null?null:L;
},_applyFamily:function(G,H){var I=r;

for(var i=0,l=G.length;i<l;i++){if(G[i].indexOf(u)>0){I+=n+G[i]+n;
}else{I+=G[i];
}
if(i!==l-1){I+=t;
}}this.__kb=I;
},_applyBold:function(a,b){this.__kc=a===null?null:a?j:k;
},_applyItalic:function(e,f){this.__kd=e===null?null:e?m:k;
},_applyDecoration:function(E,F){this.__ke=E===null?null:E;
},getStyles:function(){return {fontFamily:this.__kb,fontSize:this.__ka,fontWeight:this.__kc,fontStyle:this.__kd,textDecoration:this.__ke,lineHeight:this.__kf};
}}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var j="string",i="_applyTheme",h="qx.theme.manager.Appearance",g=":",f="Theme",e="changeTheme",d="/",c="singleton";
qx.Class.define(h,{type:c,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hN={};
this.__hO={};
},properties:{theme:{check:f,nullable:true,event:e,apply:i}},members:{__hP:{},__hN:null,__hO:null,_applyTheme:function(a,b){this.__hO={};
this.__hN={};
},__hQ:function(k,l,m){var q=l.appearances;
var t=q[k];

if(!t){var u=d;
var n=[];
var s=k.split(u);
var r;

while(!t&&s.length>0){n.unshift(s.pop());
var o=s.join(u);
t=q[o];

if(t){r=t.alias||t;

if(typeof r===j){var p=r+u+n.join(u);
return this.__hQ(p,l,m);
}}}if(m!=null){return this.__hQ(m,l);
}return null;
}else if(typeof t===j){return this.__hQ(t,l,m);
}else if(t.include&&!t.style){return this.__hQ(t.include,l,m);
}return k;
},styleFrom:function(v,w,x,y){if(!x){x=this.getTheme();
}var E=this.__hO;
var z=E[v];

if(!z){z=E[v]=this.__hQ(v,x,y);
}var J=x.appearances[z];

if(!J){this.warn("Missing appearance: "+v);
return null;
}if(!J.style){return null;
}var K=z;

if(w){var L=J.$$bits;

if(!L){L=J.$$bits={};
J.$$length=0;
}var C=0;

for(var F in w){if(!w[F]){continue;
}
if(L[F]==null){L[F]=1<<J.$$length++;
}C+=L[F];
}if(C>0){K+=g+C;
}}var D=this.__hN;

if(D[K]!==undefined){return D[K];
}if(!w){w=this.__hP;
}var H;
if(J.include||J.base){var B=J.style(w);
var A;

if(J.include){A=this.styleFrom(J.include,w,x,y);
}H={};
if(J.base){var G=this.styleFrom(z,w,J.base,y);

if(J.include){for(var I in G){if(!A.hasOwnProperty(I)&&!B.hasOwnProperty(I)){H[I]=G[I];
}}}else{for(var I in G){if(!B.hasOwnProperty(I)){H[I]=G[I];
}}}}if(J.include){for(var I in A){if(!B.hasOwnProperty(I)){H[I]=A[I];
}}}for(var I in B){H[I]=B[I];
}}else{H=J.style(w);
}return D[K]=H||null;
}},destruct:function(){this.__hN=this.__hO=null;
}});
})();
(function(){var v="other",u="widgets",t="fonts",s="appearances",r="qx.Theme",q="]",p="[Theme ",o="colors",n="decorations",m="Theme",h="meta",k="borders",j="icons";
qx.Bootstrap.define(r,{statics:{define:function(name,b){if(!b){var b={};
}b.include=this.__qT(b.include);
b.patch=this.__qT(b.patch);
{};
var c={$$type:m,name:name,title:b.title,toString:this.genericToString};
if(b.extend){c.supertheme=b.extend;
}c.basename=qx.Bootstrap.createNamespace(name,c);
this.__qW(c,b);
this.__qU(c,b);
this.$$registry[name]=c;
for(var i=0,a=b.include,l=a.length;i<l;i++){this.include(c,a[i]);
}
for(var i=0,a=b.patch,l=a.length;i<l;i++){this.patch(c,a[i]);
}},__qT:function(d){if(!d){return [];
}
if(qx.Bootstrap.isArray(d)){return d;
}else{return [d];
}},__qU:function(e,f){var g=f.aliases||{};

if(f.extend&&f.extend.aliases){qx.Bootstrap.objectMergeWith(g,f.extend.aliases,false);
}e.aliases=g;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return p+this.name+q;
},__qV:function(C){for(var i=0,D=this.__qX,l=D.length;i<l;i++){if(C[D[i]]){return D[i];
}}},__qW:function(K,L){var O=this.__qV(L);
if(L.extend&&!O){O=L.extend.type;
}K.type=O||v;
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
},$$registry:{},__qX:[o,k,n,t,j,u,s,h],__qY:null,__ra:null,__rb:function(){},patch:function(E,F){var H=this.__qV(F);

if(H!==this.__qV(E)){throw new Error("The mixins '"+E.name+"' are not compatible '"+F.name+"'!");
}var G=F[H];
var I=E.$$clazz.prototype;

for(var J in G){I[J]=G[J];
}},include:function(w,x){var z=x.type;

if(z!==w.type){throw new Error("The mixins '"+w.name+"' are not compatible '"+x.name+"'!");
}var y=x[z];
var A=w.$$clazz.prototype;

for(var B in y){if(A[B]!==undefined){continue;
}A[B]=y[B];
}}}});
})();
(function(){var v="focusout",u="interval",t="mouseover",s="mouseout",r="mousemove",q="__rf",p="widget",o="__rg",n="qx.ui.tooltip.ToolTip",m="Boolean",j="__ri",l="_applyCurrent",k="qx.ui.tooltip.Manager",i="tooltip-error",h="singleton";
qx.Class.define(k,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,t,this.__rp,this,true);
this.__rf=new qx.event.Timer();
this.__rf.addListener(u,this.__rm,this);
this.__rg=new qx.event.Timer();
this.__rg.addListener(u,this.__rn,this);
this.__rh={left:0,top:0};
},properties:{current:{check:n,nullable:true,apply:l},showInvalidTooltips:{check:m,init:true}},members:{__rh:null,__rg:null,__rf:null,__ri:null,__rj:null,__rk:function(){if(!this.__ri){this.__ri=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__ri;
},__rl:function(){if(!this.__rj){this.__rj=new qx.ui.tooltip.ToolTip().set({appearance:i});
this.__rj.syncAppearance();
}return this.__rj;
},_applyCurrent:function(D,E){if(E&&qx.ui.core.Widget.contains(E,D)){return;
}if(E){if(!E.isDisposed()){E.exclude();
}this.__rf.stop();
this.__rg.stop();
}var G=qx.event.Registration;
var F=document.body;
if(D){this.__rf.startWith(D.getShowTimeout());
G.addListener(F,s,this.__rq,this,true);
G.addListener(F,v,this.__rr,this,true);
G.addListener(F,r,this.__ro,this,true);
}else{G.removeListener(F,s,this.__rq,this,true);
G.removeListener(F,v,this.__rr,this,true);
G.removeListener(F,r,this.__ro,this,true);
}},__rm:function(e){var g=this.getCurrent();

if(g&&!g.isDisposed()){this.__rg.startWith(g.getHideTimeout());

if(g.getPlaceMethod()==p){g.placeToWidget(g.getOpener());
}else{g.placeToPoint(this.__rh);
}g.show();
}this.__rf.stop();
},__rn:function(e){var C=this.getCurrent();

if(C&&!C.isDisposed()){C.exclude();
}this.__rg.stop();
this.resetCurrent();
},__ro:function(e){var w=this.__rh;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__rp:function(e){var c=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!c){return;
}var d;
while(c!=null){var d=c.getToolTip();
var f=c.getToolTipText()||null;
var b=c.getToolTipIcon()||null;

if(qx.Class.hasInterface(c.constructor,qx.ui.form.IForm)&&!c.isValid()){var a=c.getInvalidMessage();
}
if(d||f||b||a){break;
}c=c.getLayoutParent();
}
if(!c){return;
}
if(c.isBlockToolTip()){return;
}if(a&&c.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var d=this.__rl().set({label:a});
}else if(!d){var d=this.__rk().set({label:f,icon:b});
}this.setCurrent(d);
d.setOpener(c);
},__rq:function(e){var x=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!x){return;
}var y=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!y){return;
}var z=this.getCurrent();
if(z&&(y==z||qx.ui.core.Widget.contains(z,y))){return;
}if(y&&x&&qx.ui.core.Widget.contains(x,y)){return;
}if(z&&!y){this.setCurrent(null);
}else{this.resetCurrent();
}},__rr:function(e){var A=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!A){return;
}var B=this.getCurrent();
if(B&&B==A.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,t,this.__rp,this,true);
this._disposeObjects(q,o,j);
this.__rh=null;
}});
})();
(function(){var i="interval",h="qx.event.Timer",g="_applyInterval",f="_applyEnabled",d="Boolean",c="qx.event.type.Event",b="Integer";
qx.Class.define(h,{extend:qx.core.Object,construct:function(a){qx.core.Object.call(this);
this.setEnabled(false);

if(a!=null){this.setInterval(a);
}var self=this;
this.__gb=function(){self._oninterval.call(self);
};
},events:{"interval":c},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__gc=j;
m.addListener(i,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:d,apply:f},interval:{check:b,init:1000,apply:g}},members:{__gd:null,__gb:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__gd);
this.__gd=null;
}else if(p){this.__gd=window.setInterval(this.__gb,this.getInterval());
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
if(this.getEnabled()){this.fireEvent(i);
}})},destruct:function(){if(this.__gd){window.clearInterval(this.__gd);
}this.__gd=this.__gb=null;
}});
})();
(function(){var f="qx.ui.core.MChildrenHandling";
qx.Mixin.define(f,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(m){return this._indexOf(m);
},add:function(h,i){this._add(h,i);
},addAt:function(j,k,l){this._addAt(j,k,l);
},addBefore:function(n,o,p){this._addBefore(n,o,p);
},addAfter:function(c,d,e){this._addAfter(c,d,e);
},remove:function(g){this._remove(g);
},removeAt:function(a){return this._removeAt(a);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(b){b.getChildren=b._getChildren;
b.hasChildren=b._hasChildren;
b.indexOf=b._indexOf;
b.add=b._add;
b.addAt=b._addAt;
b.addBefore=b._addBefore;
b.addAfter=b._addAfter;
b.remove=b._remove;
b.removeAt=b._removeAt;
b.removeAll=b._removeAll;
}}});
})();
(function(){var b="qx.ui.core.MLayoutHandling";
qx.Mixin.define(b,{members:{setLayout:function(c){return this._setLayout(c);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(a){a.getLayout=a._getLayout;
a.setLayout=a._setLayout;
}}});
})();
(function(){var H="Integer",G="_applyDimension",F="Boolean",E="_applyStretching",D="_applyMargin",C="shorthand",B="_applyAlign",A="allowShrinkY",z="bottom",y="baseline",V="marginBottom",U="qx.ui.core.LayoutItem",T="center",S="marginTop",R="allowGrowX",Q="middle",P="marginLeft",O="allowShrinkX",N="top",M="right",K="marginRight",L="abstract",I="allowGrowY",J="left";
qx.Class.define(U,{type:L,extend:qx.core.Object,properties:{minWidth:{check:H,nullable:true,apply:G,init:null,themeable:true},width:{check:H,nullable:true,apply:G,init:null,themeable:true},maxWidth:{check:H,nullable:true,apply:G,init:null,themeable:true},minHeight:{check:H,nullable:true,apply:G,init:null,themeable:true},height:{check:H,nullable:true,apply:G,init:null,themeable:true},maxHeight:{check:H,nullable:true,apply:G,init:null,themeable:true},allowGrowX:{check:F,apply:E,init:true,themeable:true},allowShrinkX:{check:F,apply:E,init:true,themeable:true},allowGrowY:{check:F,apply:E,init:true,themeable:true},allowShrinkY:{check:F,apply:E,init:true,themeable:true},allowStretchX:{group:[R,O],mode:C,themeable:true},allowStretchY:{group:[I,A],mode:C,themeable:true},marginTop:{check:H,init:0,apply:D,themeable:true},marginRight:{check:H,init:0,apply:D,themeable:true},marginBottom:{check:H,init:0,apply:D,themeable:true},marginLeft:{check:H,init:0,apply:D,themeable:true},margin:{group:[S,K,V,P],mode:C,themeable:true},alignX:{check:[J,T,M],nullable:true,apply:B,themeable:true},alignY:{check:[N,Q,z,y],nullable:true,apply:B,themeable:true}},members:{__bS:null,__bT:null,__bU:null,__bV:null,__bW:null,__bX:null,__bY:null,getBounds:function(){return this.__bX||this.__bT||null;
},clearSeparators:function(){},renderSeparator:function(g,h){},renderLayout:function(r,top,s,t){var u;
{};
var v=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var v=this._getHeightForWidth(s);
}
if(v!=null&&v!==this.__bS){this.__bS=v;
qx.ui.core.queue.Layout.add(this);
return null;
}var x=this.__bT;

if(!x){x=this.__bT={};
}var w={};

if(r!==x.left||top!==x.top){w.position=true;
x.left=r;
x.top=top;
}
if(s!==x.width||t!==x.height){w.size=true;
x.width=s;
x.height=t;
}if(this.__bU){w.local=true;
delete this.__bU;
}
if(this.__bW){w.margin=true;
delete this.__bW;
}return w;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__bU;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__bU=true;
this.__bV=null;
},getSizeHint:function(Y){var ba=this.__bV;

if(ba){return ba;
}
if(Y===false){return null;
}ba=this.__bV=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__bS&&this.getHeight()==null){ba.height=this.__bS;
}if(ba.minWidth>ba.width){ba.width=ba.minWidth;
}
if(ba.maxWidth<ba.width){ba.width=ba.maxWidth;
}
if(!this.getAllowGrowX()){ba.maxWidth=ba.width;
}
if(!this.getAllowShrinkX()){ba.minWidth=ba.width;
}if(ba.minHeight>ba.height){ba.height=ba.minHeight;
}
if(ba.maxHeight<ba.height){ba.height=ba.maxHeight;
}
if(!this.getAllowGrowY()){ba.maxHeight=ba.height;
}
if(!this.getAllowShrinkY()){ba.minHeight=ba.height;
}return ba;
},_computeSizeHint:function(){var p=this.getMinWidth()||0;
var m=this.getMinHeight()||0;
var q=this.getWidth()||p;
var o=this.getHeight()||m;
var l=this.getMaxWidth()||Infinity;
var n=this.getMaxHeight()||Infinity;
return {minWidth:p,width:q,maxWidth:l,minHeight:m,height:o,maxHeight:n};
},_hasHeightForWidth:function(){var c=this._getLayout();

if(c){return c.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(W){var X=this._getLayout();

if(X&&X.hasHeightForWidth()){return X.getHeightForWidth(W);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__bW=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__bX;
},setUserBounds:function(i,top,j,k){this.__bX={left:i,top:top,width:j,height:k};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__bX;
qx.ui.core.queue.Layout.add(this);
},__ca:{},setLayoutProperties:function(bb){if(bb==null){return;
}var bc=this.__bY;

if(!bc){bc=this.__bY={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(bb);
}for(var bd in bb){if(bb[bd]==null){delete bc[bd];
}else{bc[bd]=bb[bd];
}}},getLayoutProperties:function(){return this.__bY||this.__ca;
},clearLayoutProperties:function(){delete this.__bY;
},updateLayoutProperties:function(d){var e=this._getLayout();

if(e){var f;
{};
e.invalidateChildrenCache();
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
},clone:function(){var a=qx.core.Object.prototype.clone.call(this);
var b=this.__bY;

if(b){a.__bY=qx.lang.Object.clone(b);
}return a;
}},destruct:function(){this.$$parent=this.$$subparent=this.__bY=this.__bT=this.__bX=this.__bV=null;
}});
})();
(function(){var d="qx.ui.core.DecoratorFactory",c="$$nopool$$";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cb={};
},statics:{MAX_SIZE:15,__cc:c},members:{__cb:null,getDecoratorElement:function(h){var m=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(h)){var k=h;
var j=qx.theme.manager.Decoration.getInstance().resolve(h);
}else{var k=m.__cc;
j=h;
}var l=this.__cb;

if(l[k]&&l[k].length>0){var i=l[k].pop();
}else{var i=this._createDecoratorElement(j,k);
}i.$$pooled=false;
return i;
},poolDecorator:function(n){if(!n||n.$$pooled){return;
}var q=qx.ui.core.DecoratorFactory;
var o=n.getId();

if(o==q.__cc){n.dispose();
return;
}var p=this.__cb;

if(!p[o]){p[o]=[];
}
if(p[o].length>q.MAX_SIZE){n.dispose();
}else{n.$$pooled=true;
p[o].push(n);
}},_createDecoratorElement:function(e,f){var g=new qx.html.Decorator(e,f);
{};
return g;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var b=this.__cb;

for(var a in b){qx.util.DisposeUtil.disposeArray(b,a);
}}this.__cb=null;
}});
})();
(function(){var bU="px",bT="Boolean",bS="qx.event.type.Mouse",bR="qx.event.type.Drag",bQ="visible",bP="qx.event.type.Focus",bO="on",bN="Integer",bM="excluded",bL="qx.event.type.Data",bx="_applyPadding",bw="qx.event.type.Event",bv="hidden",bu="contextmenu",bt="String",bs="tabIndex",br="backgroundColor",bq="focused",bp="changeVisibility",bo="mshtml",cc="hovered",cd="qx.event.type.KeySequence",ca="qx.client",cb="absolute",bX="drag",bY="div",bV="disabled",bW="move",ce="dragstart",cf="qx.dynlocale",bE="dragchange",bD="dragend",bG="resize",bF="Decorator",bI="zIndex",bH="opacity",bK="default",bJ="Color",bC="changeToolTipText",bB="beforeContextmenuOpen",c="_applyNativeContextMenu",d="_applyBackgroundColor",f="_applyFocusable",g="changeShadow",h="qx.event.type.KeyInput",j="createChildControl",k="Font",m="_applyShadow",n="__cj",o="_applyEnabled",cj="_applySelectable",ci="Number",ch="_applyKeepActive",cg="_applyVisibility",cn="repeat",cm="qxDraggable",cl="syncAppearance",ck="paddingLeft",cp="_applyDroppable",co="__ce",N="#",O="qx.event.type.MouseWheel",L="_applyCursor",M="_applyDraggable",R="changeTextColor",S="$$widget",P="changeContextMenu",Q="paddingTop",J="changeSelectable",K="hideFocus",w="none",v="__co",y="__cd",x="outline",s="_applyAppearance",r="_applyOpacity",u="url(",t=")",q="qx.ui.core.Widget",p="_applyFont",X="cursor",Y="qxDroppable",ba="changeZIndex",bb="__cq",T="changeEnabled",U="changeFont",V="_applyDecorator",W="_applyZIndex",bc="__ci",bd="_applyTextColor",G="qx.ui.menu.Menu",F="_applyToolTipText",E="true",D="widget",C="changeDecorator",B="_applyTabIndex",A="__ch",z="changeAppearance",I="shorthand",H="/",be="",bf="_applyContextMenu",bg="paddingBottom",bh="changeNativeContextMenu",bi="qx.ui.tooltip.ToolTip",bj="qxKeepActive",bk="_applyKeepFocus",bl="paddingRight",bm="changeBackgroundColor",bn="changeLocale",bA="qxKeepFocus",bz="__cm",by="qx/static/blank.gif";
qx.Class.define(q,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__cd=this._createContainerElement();
this.__ce=this.__cp();
this.__cd.add(this.__ce);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bw,disappear:bw,createChildControl:bL,resize:bL,move:bL,syncAppearance:bL,mousemove:bS,mouseover:bS,mouseout:bS,mousedown:bS,mouseup:bS,click:bS,dblclick:bS,contextmenu:bS,beforeContextmenuOpen:bS,mousewheel:O,keyup:cd,keydown:cd,keypress:cd,keyinput:h,focus:bP,blur:bP,focusin:bP,focusout:bP,activate:bP,deactivate:bP,capture:bw,losecapture:bw,drop:bR,dragleave:bR,dragover:bR,drag:bR,dragstart:bR,dragend:bR,dragchange:bR,droprequest:bR},properties:{paddingTop:{check:bN,init:0,apply:bx,themeable:true},paddingRight:{check:bN,init:0,apply:bx,themeable:true},paddingBottom:{check:bN,init:0,apply:bx,themeable:true},paddingLeft:{check:bN,init:0,apply:bx,themeable:true},padding:{group:[Q,bl,bg,ck],mode:I,themeable:true},zIndex:{nullable:true,init:null,apply:W,event:ba,check:bN,themeable:true},decorator:{nullable:true,init:null,apply:V,event:C,check:bF,themeable:true},shadow:{nullable:true,init:null,apply:m,event:g,check:bF,themeable:true},backgroundColor:{nullable:true,check:bJ,apply:d,event:bm,themeable:true},textColor:{nullable:true,check:bJ,apply:bd,event:R,themeable:true,inheritable:true},font:{nullable:true,apply:p,check:k,event:U,themeable:true,inheritable:true,dereference:true},opacity:{check:ci,apply:r,themeable:true,nullable:true,init:null},cursor:{check:bt,apply:L,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bi,nullable:true},toolTipText:{check:bt,nullable:true,event:bC,apply:F},toolTipIcon:{check:bt,nullable:true,event:bC},blockToolTip:{check:bT,init:false},visibility:{check:[bQ,bv,bM],init:bQ,apply:cg,event:bp},enabled:{init:true,check:bT,inheritable:true,apply:o,event:T},anonymous:{init:false,check:bT},tabIndex:{check:bN,nullable:true,apply:B},focusable:{check:bT,init:false,apply:f},keepFocus:{check:bT,init:false,apply:bk},keepActive:{check:bT,init:false,apply:ch},draggable:{check:bT,init:false,apply:M},droppable:{check:bT,init:false,apply:cp},selectable:{check:bT,init:false,event:J,apply:cj},contextMenu:{check:G,apply:bf,nullable:true,event:P},nativeContextMenu:{check:bT,init:false,themeable:true,event:bh,apply:c},appearance:{check:bt,init:D,apply:s,event:z}},statics:{DEBUG:false,getWidgetByElement:function(eB){while(eB){var eC=eB.$$widget;
if(eC!=null){return qx.core.ObjectRegistry.fromHashCode(eC);
}try{eB=eB.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,gT){while(gT){if(parent==gT){return true;
}gT=gT.getLayoutParent();
}return false;
},__cf:new qx.ui.core.DecoratorFactory(),__cg:new qx.ui.core.DecoratorFactory()},members:{__cd:null,__ce:null,__ch:null,__ci:null,__cj:null,__ck:null,__cl:null,__cm:null,_getLayout:function(){return this.__cm;
},_setLayout:function(gF){{};

if(this.__cm){this.__cm.connectToWidget(null);
}
if(gF){gF.connectToWidget(this);
}this.__cm=gF;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var dq=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(dq);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(dq);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__cn:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var ee=qx.theme.manager.Decoration.getInstance();
var eg=ee.resolve(a).getInsets();
var ef=ee.resolve(b).getInsets();

if(eg.top!=ef.top||eg.right!=ef.right||eg.bottom!=ef.bottom||eg.left!=ef.left){return true;
}return false;
},renderLayout:function(eR,top,eS,eT){var fd=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,eR,top,eS,eT);
if(!fd){return;
}var eV=this.getContainerElement();
var content=this.getContentElement();
var fa=fd.size||this._updateInsets;
var fe=bU;
var fb={};
if(fd.position){fb.left=eR+fe;
fb.top=top+fe;
}if(fd.size){fb.width=eS+fe;
fb.height=eT+fe;
}
if(fd.position||fd.size){eV.setStyles(fb);
}
if(fa||fd.local||fd.margin){var eU=this.getInsets();
var innerWidth=eS-eU.left-eU.right;
var innerHeight=eT-eU.top-eU.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var eX={};

if(this._updateInsets){eX.left=eU.left+fe;
eX.top=eU.top+fe;
}
if(fa){eX.width=innerWidth+fe;
eX.height=innerHeight+fe;
}
if(fa||this._updateInsets){content.setStyles(eX);
}
if(fd.size){var fc=this.__cj;

if(fc){fc.setStyles({width:eS+bU,height:eT+bU});
}}
if(fd.size||this._updateInsets){if(this.__ch){this.__ch.resize(eS,eT);
}}
if(fd.size){if(this.__ci){var eU=this.__ci.getInsets();
var eY=eS+eU.left+eU.right;
var eW=eT+eU.top+eU.bottom;
this.__ci.resize(eY,eW);
}}
if(fa||fd.local||fd.margin){if(this.__cm&&this.hasLayoutChildren()){this.__cm.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(fd.position&&this.hasListener(bW)){this.fireDataEvent(bW,this.getBounds());
}
if(fd.size&&this.hasListener(bG)){this.fireDataEvent(bG,this.getBounds());
}delete this._updateInsets;
return fd;
},__co:null,clearSeparators:function(){var gl=this.__co;

if(!gl){return;
}var gm=qx.ui.core.Widget.__cf;
var content=this.getContentElement();
var gk;

for(var i=0,l=gl.length;i<l;i++){gk=gl[i];
gm.poolDecorator(gk);
content.remove(gk);
}gl.length=0;
},renderSeparator:function(cH,cI){var cJ=qx.ui.core.Widget.__cf.getDecoratorElement(cH);
this.getContentElement().add(cJ);
cJ.resize(cI.width,cI.height);
cJ.setStyles({left:cI.left+bU,top:cI.top+bU});
if(!this.__co){this.__co=[cJ];
}else{this.__co.push(cJ);
}},_computeSizeHint:function(){var fO=this.getWidth();
var fN=this.getMinWidth();
var fJ=this.getMaxWidth();
var fM=this.getHeight();
var fK=this.getMinHeight();
var fL=this.getMaxHeight();
{};
var fP=this._getContentHint();
var fI=this.getInsets();
var fR=fI.left+fI.right;
var fQ=fI.top+fI.bottom;

if(fO==null){fO=fP.width+fR;
}
if(fM==null){fM=fP.height+fQ;
}
if(fN==null){fN=fR;

if(fP.minWidth!=null){fN+=fP.minWidth;
}}
if(fK==null){fK=fQ;

if(fP.minHeight!=null){fK+=fP.minHeight;
}}
if(fJ==null){if(fP.maxWidth==null){fJ=Infinity;
}else{fJ=fP.maxWidth+fR;
}}
if(fL==null){if(fP.maxHeight==null){fL=Infinity;
}else{fL=fP.maxHeight+fQ;
}}return {width:fO,minWidth:fN,maxWidth:fJ,height:fM,minHeight:fK,maxHeight:fL};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__cm){this.__cm.invalidateLayoutCache();
}},_getContentHint:function(){var fT=this.__cm;

if(fT){if(this.hasLayoutChildren()){var fS;
var fU=fT.getSizeHint();
{};
return fU;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(fu){var fy=this.getInsets();
var fB=fy.left+fy.right;
var fA=fy.top+fy.bottom;
var fz=fu-fB;
var fw=this._getLayout();

if(fw&&fw.hasHeightForWidth()){var fv=fw.getHeightForWidth(fu);
}else{fv=this._getContentHeightForWidth(fz);
}var fx=fv+fA;
return fx;
},_getContentHeightForWidth:function(gB){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var dk=this.getPaddingRight();
var dm=this.getPaddingBottom();
var dl=this.getPaddingLeft();

if(this.__ch){var dj=this.__ch.getInsets();
{};
top+=dj.top;
dk+=dj.right;
dm+=dj.bottom;
dl+=dj.left;
}return {"top":top,"right":dk,"bottom":dm,"left":dl};
},getInnerSize:function(){var dt=this.getBounds();

if(!dt){return null;
}var ds=this.getInsets();
return {width:dt.width-ds.left-ds.right,height:dt.height-ds.top-ds.bottom};
},show:function(){this.setVisibility(bQ);
},hide:function(){this.setVisibility(bv);
},exclude:function(){this.setVisibility(bM);
},isVisible:function(){return this.getVisibility()===bQ;
},isHidden:function(){return this.getVisibility()!==bQ;
},isExcluded:function(){return this.getVisibility()===bM;
},isSeeable:function(){var di=this.getContainerElement().getDomElement();

if(di){return di.offsetWidth>0;
}var dh=this;

do{if(!dh.isVisible()){return false;
}
if(dh.isRootWidget()){return true;
}dh=dh.getLayoutParent();
}while(dh);
return false;
},_createContainerElement:function(){var dz={"$$widget":this.toHashCode()};
{};
var dy={zIndex:0,position:cb};
return new qx.html.Element(bY,dy,dz);
},__cp:function(){var cN=this._createContentElement();
{};
cN.setStyles({"position":cb,"zIndex":10});
return cN;
},_createContentElement:function(){return new qx.html.Element(bY,{overflowX:bv,overflowY:bv});
},getContainerElement:function(){return this.__cd;
},getContentElement:function(){return this.__ce;
},getDecoratorElement:function(){return this.__ch||null;
},getShadowElement:function(){return this.__ci||null;
},__cq:null,getLayoutChildren:function(){var gb=this.__cq;

if(!gb){return this.__cr;
}var gc;

for(var i=0,l=gb.length;i<l;i++){var ga=gb[i];

if(ga.hasUserBounds()||ga.isExcluded()){if(gc==null){gc=gb.concat();
}qx.lang.Array.remove(gc,ga);
}}return gc||gb;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var fY=this.__cm;

if(fY){fY.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var gG=this.__cq;

if(!gG){return false;
}var gH;

for(var i=0,l=gG.length;i<l;i++){gH=gG[i];

if(!gH.hasUserBounds()&&!gH.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__cr:[],_getChildren:function(){return this.__cq||this.__cr;
},_indexOf:function(fC){var fD=this.__cq;

if(!fD){return -1;
}return fD.indexOf(fC);
},_hasChildren:function(){var en=this.__cq;
return en!=null&&(!!en[0]);
},addChildrenToQueue:function(ew){var ex=this.__cq;

if(!ex){return;
}var ey;

for(var i=0,l=ex.length;i<l;i++){ey=ex[i];
ew[ey.$$hash]=ey;
ey.addChildrenToQueue(ew);
}},_add:function(fi,fj){if(fi.getLayoutParent()==this){qx.lang.Array.remove(this.__cq,fi);
}
if(this.__cq){this.__cq.push(fi);
}else{this.__cq=[fi];
}this.__cs(fi,fj);
},_addAt:function(eN,eO,eP){if(!this.__cq){this.__cq=[];
}if(eN.getLayoutParent()==this){qx.lang.Array.remove(this.__cq,eN);
}var eQ=this.__cq[eO];

if(eQ===eN){return eN.setLayoutProperties(eP);
}
if(eQ){qx.lang.Array.insertBefore(this.__cq,eN,eQ);
}else{this.__cq.push(eN);
}this.__cs(eN,eP);
},_addBefore:function(fn,fo,fp){{};

if(fn==fo){return;
}
if(!this.__cq){this.__cq=[];
}if(fn.getLayoutParent()==this){qx.lang.Array.remove(this.__cq,fn);
}qx.lang.Array.insertBefore(this.__cq,fn,fo);
this.__cs(fn,fp);
},_addAfter:function(eh,ei,ej){{};

if(eh==ei){return;
}
if(!this.__cq){this.__cq=[];
}if(eh.getLayoutParent()==this){qx.lang.Array.remove(this.__cq,eh);
}qx.lang.Array.insertAfter(this.__cq,eh,ei);
this.__cs(eh,ej);
},_remove:function(gC){if(!this.__cq){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__cq,gC);
this.__ct(gC);
},_removeAt:function(ez){if(!this.__cq){throw new Error("This widget has no children!");
}var eA=this.__cq[ez];
qx.lang.Array.removeAt(this.__cq,ez);
this.__ct(eA);
return eA;
},_removeAll:function(){if(!this.__cq){return;
}var gK=this.__cq.concat();
this.__cq.length=0;

for(var i=gK.length-1;i>=0;i--){this.__ct(gK[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__cs:function(cQ,cR){{};
var parent=cQ.getLayoutParent();

if(parent&&parent!=this){parent._remove(cQ);
}cQ.setLayoutParent(this);
if(cR){cQ.setLayoutProperties(cR);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(cQ);
}},__ct:function(fm){{};

if(fm.getLayoutParent()!==this){throw new Error("Remove Error: "+fm+" is not a child of this widget!");
}fm.setLayoutParent(null);
if(this.__cm){this.__cm.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(fm);
}},capture:function(gq){this.getContainerElement().capture(gq);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(dS,dT,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__cj){return;
}var cO=this.__cj=new qx.html.Element;
{};
cO.setStyles({position:cb,top:0,left:0,zIndex:7});
var cP=this.getBounds();

if(cP){this.__cj.setStyles({width:cP.width+bU,height:cP.height+bU});
}if(qx.core.Variant.isSet(ca,bo)){cO.setStyles({backgroundImage:u+qx.util.ResourceManager.getInstance().toUri(by)+t,backgroundRepeat:cn});
}this.getContainerElement().add(cO);
},_applyDecorator:function(eE,eF){{};
var eJ=qx.ui.core.Widget.__cf;
var eH=this.getContainerElement();
if(!this.__cj&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(eF){eH.remove(this.__ch);
eJ.poolDecorator(this.__ch);
}if(eE){var eI=this.__ch=eJ.getDecoratorElement(eE);
eI.setStyle(bI,5);
var eG=this.getBackgroundColor();
eI.tint(eG);
eH.add(eI);
}else{delete this.__ch;
this._applyBackgroundColor(this.getBackgroundColor());
}if(eE&&!eF&&eG){this.getContainerElement().setStyle(br,null);
}if(this.__cn(eF,eE)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(eE){var eK=this.getBounds();

if(eK){eI.resize(eK.width,eK.height);
this.__cj&&
this.__cj.setStyles({width:eK.width+bU,height:eK.height+bU});
}}},_applyShadow:function(dU,dV){var ed=qx.ui.core.Widget.__cg;
var dX=this.getContainerElement();
if(dV){dX.remove(this.__ci);
ed.poolDecorator(this.__ci);
}if(dU){var ea=this.__ci=ed.getDecoratorElement(dU);
dX.add(ea);
var ec=ea.getInsets();
ea.setStyles({left:(-ec.left)+bU,top:(-ec.top)+bU});
var eb=this.getBounds();

if(eb){var dY=eb.width+ec.left+ec.right;
var dW=eb.height+ec.top+ec.bottom;
ea.resize(dY,dW);
}ea.tint(null);
}else{delete this.__ci;
}},_applyToolTipText:function(gL,gM){if(qx.core.Variant.isSet(cf,bO)){if(this.__cl){return;
}var gN=qx.locale.Manager.getInstance();
this.__cl=gN.addListener(bn,function(){if(gL&&gL.translate){this.setToolTipText(gL.translate());
}},this);
}},_applyTextColor:function(df,dg){},_applyZIndex:function(gD,gE){this.getContainerElement().setStyle(bI,gD==null?0:gD);
},_applyVisibility:function(gf,gg){var gh=this.getContainerElement();

if(gf===bQ){gh.show();
}else{gh.hide();
}var parent=this.$$parent;

if(parent&&(gg==null||gf==null||gg===bM||gf===bM)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(cq,cr){this.getContainerElement().setStyle(bH,cq==1?null:cq);
if(qx.core.Variant.isSet(ca,bo)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var cs=(cq==1||cq==null)?null:0.99;
this.getContentElement().setStyle(bH,cs);
}}},_applyCursor:function(dO,dP){if(dO==null&&!this.isSelectable()){dO=bK;
}this.getContainerElement().setStyle(X,dO,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(gO,gP){var gQ=this.getBackgroundColor();
var gS=this.getContainerElement();

if(this.__ch){this.__ch.tint(gQ);
gS.setStyle(br,null);
}else{var gR=qx.theme.manager.Color.getInstance().resolve(gQ);
gS.setStyle(br,gR);
}},_applyFont:function(dw,dx){},__cu:null,$$stateChanges:null,_forwardStates:null,hasState:function(da){var db=this.__cu;
return db&&db[da];
},addState:function(cU){var cV=this.__cu;

if(!cV){cV=this.__cu={};
}
if(cV[cU]){return;
}this.__cu[cU]=true;
if(cU===cc){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cY=this.__cx;

if(forward&&forward[cU]&&cY){var cW;

for(var cX in cY){cW=cY[cX];

if(cW instanceof qx.ui.core.Widget){cY[cX].addState(cU);
}}}},removeState:function(gu){var gv=this.__cu;

if(!gv||!gv[gu]){return;
}delete this.__cu[gu];
if(gu===cc){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gy=this.__cx;

if(forward&&forward[gu]&&gy){for(var gx in gy){var gw=gy[gx];

if(gw instanceof qx.ui.core.Widget){gw.removeState(gu);
}}}},replaceState:function(cu,cv){var cw=this.__cu;

if(!cw){cw=this.__cu={};
}
if(!cw[cv]){cw[cv]=true;
}
if(cw[cu]){delete cw[cu];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cz=this.__cx;

if(forward&&forward[cv]&&cz){for(var cy in cz){var cx=cz[cy];

if(cx instanceof qx.ui.core.Widget){cx.replaceState(cu,cv);
}}}},__cv:null,__cw:null,syncAppearance:function(){var dE=this.__cu;
var dD=this.__cv;
var dF=qx.theme.manager.Appearance.getInstance();
var dB=qx.core.Property.$$method.setThemed;
var dJ=qx.core.Property.$$method.resetThemed;
if(this.__cw){delete this.__cw;
if(dD){var dA=dF.styleFrom(dD,dE,null,this.getAppearance());
if(dA){dD=null;
}}}if(!dD){var dC=this;
var dI=[];

do{dI.push(dC.$$subcontrol||dC.getAppearance());
}while(dC=dC.$$subparent);
dD=this.__cv=dI.reverse().join(H).replace(/#[0-9]+/g,be);
}var dG=dF.styleFrom(dD,dE,null,this.getAppearance());

if(dG){var dH;

if(dA){for(var dH in dA){if(dG[dH]===undefined){this[dJ[dH]]();
}}}{};
for(var dH in dG){dG[dH]===undefined?this[dJ[dH]]():this[dB[dH]](dG[dH]);
}}else if(dA){for(var dH in dA){this[dJ[dH]]();
}}this.fireDataEvent(cl,this.__cu);
},_applyAppearance:function(fk,fl){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__ck){qx.ui.core.queue.Appearance.add(this);
this.__ck=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__cw=true;
qx.ui.core.queue.Appearance.add(this);
var gW=this.__cx;

if(gW){var gU;

for(var gV in gW){gU=gW[gV];

if(gU instanceof qx.ui.core.Widget){gU.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var gt=this;

while(gt.getAnonymous()){gt=gt.getLayoutParent();

if(!gt){return null;
}}return gt;
},getFocusTarget:function(){var dr=this;

if(!dr.getEnabled()){return null;
}
while(dr.getAnonymous()||!dr.getFocusable()){dr=dr.getLayoutParent();

if(!dr||!dr.getEnabled()){return null;
}}return dr;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(eq,er){var es=this.getFocusElement();
if(eq){var et=this.getTabIndex();

if(et==null){et=1;
}es.setAttribute(bs,et);
if(qx.core.Variant.isSet(ca,bo)){es.setAttribute(K,E);
}else{es.setStyle(x,w);
}}else{if(es.isNativelyFocusable()){es.setAttribute(bs,-1);
}else if(er){es.setAttribute(bs,null);
}}},_applyKeepFocus:function(ek){var em=this.getFocusElement();
em.setAttribute(bA,ek?bO:null);
},_applyKeepActive:function(fs){var ft=this.getContainerElement();
ft.setAttribute(bj,fs?bO:null);
},_applyTabIndex:function(eD){if(eD==null){eD=1;
}else if(eD<1||eD>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&eD!=null){this.getFocusElement().setAttribute(bs,eD);
}},_applySelectable:function(eL,eM){if(eM!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(eL);
this.getContentElement().setSelectable(eL);
},_applyEnabled:function(dQ,dR){if(dQ===false){this.addState(bV);
this.removeState(cc);
if(this.isFocusable()){this.removeState(bq);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(bV);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(fq,fr,name){},_applyContextMenu:function(gd,ge){if(ge){ge.removeState(bu);

if(ge.getOpener()==this){ge.resetOpener();
}
if(!gd){this.removeListener(bu,this._onContextMenuOpen);
ge.removeListener(bp,this._onBeforeContextMenuOpen,this);
}}
if(gd){gd.setOpener(this);
gd.addState(bu);

if(!ge){this.addListener(bu,this._onContextMenuOpen);
gd.addListener(bp,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==bQ&&this.hasListener(bB)){this.fireDataEvent(bB,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(dd,de){if(!this.isEnabled()&&dd===true){dd=false;
}qx.ui.core.DragDropCursor.getInstance();
if(dd){this.addListener(ce,this._onDragStart);
this.addListener(bX,this._onDrag);
this.addListener(bD,this._onDragEnd);
this.addListener(bE,this._onDragChange);
}else{this.removeListener(ce,this._onDragStart);
this.removeListener(bX,this._onDrag);
this.removeListener(bD,this._onDragEnd);
this.removeListener(bE,this._onDragChange);
}this.getContainerElement().setAttribute(cm,dd?bO:null);
},_applyDroppable:function(gz,gA){if(!this.isEnabled()&&gz===true){gz=false;
}this.getContainerElement().setAttribute(Y,gz?bO:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bK);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var dn=qx.ui.core.DragDropCursor.getInstance();
var dp=e.getCurrentAction();
dp?dn.setAction(dp):dn.resetAction();
},visualizeFocus:function(){this.addState(bq);
},visualizeBlur:function(){this.removeState(bq);
},scrollChildIntoView:function(dK,dL,dM,dN){this.scrollChildIntoViewX(dK,dL,dN);
this.scrollChildIntoViewY(dK,dM,dN);
},scrollChildIntoViewX:function(ff,fg,fh){this.getContentElement().scrollChildIntoViewX(ff.getContainerElement(),fg,fh);
},scrollChildIntoViewY:function(gn,go,gp){this.getContentElement().scrollChildIntoViewY(gn.getContainerElement(),go,gp);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(ct){if(!this.__cx){return false;
}return !!this.__cx[ct];
},__cx:null,_getCreatedChildControls:function(){return this.__cx;
},getChildControl:function(cK,cL){if(!this.__cx){if(cL){return null;
}this.__cx={};
}var cM=this.__cx[cK];

if(cM){return cM;
}
if(cL===true){return null;
}return this._createChildControl(cK);
},_showChildControl:function(fW){var fX=this.getChildControl(fW);
fX.show();
return fX;
},_excludeChildControl:function(eu){var ev=this.getChildControl(eu,true);

if(ev){ev.exclude();
}},_isChildControlVisible:function(eo){var ep=this.getChildControl(eo,true);

if(ep){return ep.isVisible();
}return false;
},_createChildControl:function(cC){if(!this.__cx){this.__cx={};
}else if(this.__cx[cC]){throw new Error("Child control '"+cC+"' already created!");
}var cG=cC.indexOf(N);

if(cG==-1){var cD=this._createChildControlImpl(cC);
}else{var cD=this._createChildControlImpl(cC.substring(0,cG));
}
if(!cD){throw new Error("Unsupported control: "+cC);
}cD.$$subcontrol=cC;
cD.$$subparent=this;
var cE=this.__cu;
var forward=this._forwardStates;

if(cE&&forward&&cD instanceof qx.ui.core.Widget){for(var cF in cE){if(forward[cF]){cD.addState(cF);
}}}this.fireDataEvent(j,cD);
return this.__cx[cC]=cD;
},_createChildControlImpl:function(fV){return null;
},_disposeChildControls:function(){var fH=this.__cx;

if(!fH){return;
}var fF=qx.ui.core.Widget;

for(var fG in fH){var fE=fH[fG];

if(!fF.contains(this,fE)){fE.destroy();
}else{fE.dispose();
}}delete this.__cx;
},_findTopControl:function(){var dc=this;

while(dc){if(!dc.$$subparent){return dc;
}dc=dc.$$subparent;
}return null;
},getContainerLocation:function(cS){var cT=this.getContainerElement().getDomElement();
return cT?qx.bom.element.Location.get(cT,cS):null;
},getContentLocation:function(cA){var cB=this.getContentElement().getDomElement();
return cB?qx.bom.element.Location.get(cB,cA):null;
},setDomLeft:function(gI){var gJ=this.getContainerElement().getDomElement();

if(gJ){gJ.style.left=gI+bU;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(du){var dv=this.getContainerElement().getDomElement();

if(dv){dv.style.top=du+bU;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(gi,top){var gj=this.getContainerElement().getDomElement();

if(gj){gj.style.left=gi+bU;
gj.style.top=top+bU;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var gX=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var gY=this.getChildren();

for(var i=0,l=gY.length;i<l;i++){gX.add(gY[i].clone());
}}return gX;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(cf,bO)){if(this.__cl){qx.locale.Manager.getInstance().removeListenerById(this.__cl);
}}this.getContainerElement().setAttribute(S,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var gs=qx.ui.core.Widget;
var gr=this.getContainerElement();

if(this.__ch){gr.remove(this.__ch);
gs.__cf.poolDecorator(this.__ch);
}
if(this.__ci){gr.remove(this.__ci);
gs.__cg.poolDecorator(this.__ci);
}this.clearSeparators();
this.__ch=this.__ci=this.__co=null;
}else{this._disposeArray(v);
this._disposeObjects(A,bc);
}this._disposeArray(bb);
this.__cu=this.__cx=null;
this._disposeObjects(bz,y,co,n);
}});
})();
(function(){var g="qx.event.type.Data",f="qx.ui.container.Composite",e="addChildWidget",d="removeChildWidget";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(h){qx.ui.core.Widget.call(this);

if(h!=null){this._setLayout(h);
}},events:{addChildWidget:g,removeChildWidget:g},members:{_afterAddChild:function(c){this.fireNonBubblingEvent(e,qx.event.type.Data,[c]);
},_afterRemoveChild:function(i){this.fireNonBubblingEvent(d,qx.event.type.Data,[i]);
}},defer:function(a,b){qx.ui.core.MChildrenHandling.remap(b);
qx.ui.core.MLayoutHandling.remap(b);
}});
})();
(function(){var J="keep-align",I="Integer",H="interval",G="direct",F="disappear",E="best-fit",D="mouse",C="bottom-left",B="Boolean",A="bottom-right",X="widget",W="qx.ui.core.MPlacement",V="left-top",U="offsetRight",T="shorthand",S="offsetLeft",R="top-left",Q="appear",P="offsetBottom",O="top-right",M="offsetTop",N="right-bottom",K="right-top",L="left-bottom";
qx.Mixin.define(W,{properties:{position:{check:[R,O,C,A,V,L,K,N],init:C,themeable:true},placeMethod:{check:[X,D],init:D,themeable:true},domMove:{check:B,init:false},placementModeX:{check:[G,J,E],init:J,themeable:true},placementModeY:{check:[G,J,E],init:J,themeable:true},offsetLeft:{check:I,init:0,themeable:true},offsetTop:{check:I,init:0,themeable:true},offsetRight:{check:I,init:0,themeable:true},offsetBottom:{check:I,init:0,themeable:true},offset:{group:[M,U,P,S],mode:T,themeable:true}},members:{__ih:null,__ii:null,__ij:null,getLayoutLocation:function(d){var g,f,h,top;
f=d.getBounds();
h=f.left;
top=f.top;
var i=f;
d=d.getLayoutParent();

while(d&&!d.isRootWidget()){f=d.getBounds();
h+=f.left;
top+=f.top;
g=d.getInsets();
h+=g.left;
top+=g.top;
d=d.getLayoutParent();
}if(d.isRootWidget()){var e=d.getContainerLocation();

if(e){h+=e.left;
top+=e.top;
}}return {left:h,top:top,right:h+i.width,bottom:top+i.height};
},moveTo:function(a,top){if(this.getDomMove()){this.setDomPosition(a,top);
}else{this.setLayoutProperties({left:a,top:top});
}},placeToWidget:function(l,m){if(m){this.__ik();
this.__ih=qx.lang.Function.bind(this.placeToWidget,this,l,false);
qx.event.Idle.getInstance().addListener(H,this.__ih);
this.__ij=function(){this.__ik();
};
this.addListener(F,this.__ij,this);
}var n=l.getContainerLocation()||this.getLayoutLocation(l);
this.__im(n);
},__ik:function(){if(this.__ih){qx.event.Idle.getInstance().removeListener(H,this.__ih);
this.__ih=null;
}
if(this.__ij){this.removeListener(F,this.__ij,this);
this.__ij=null;
}},placeToMouse:function(event){var z=event.getDocumentLeft();
var top=event.getDocumentTop();
var y={left:z,top:top,right:z,bottom:top};
this.__im(y);
},placeToElement:function(o,p){var location=qx.bom.element.Location.get(o);
var q={left:location.left,top:location.top,right:location.left+o.offsetWidth,bottom:location.top+o.offsetHeight};
if(p){this.__ih=qx.lang.Function.bind(this.placeToElement,this,o,false);
qx.event.Idle.getInstance().addListener(H,this.__ih);
this.addListener(F,function(){if(this.__ih){qx.event.Idle.getInstance().removeListener(H,this.__ih);
this.__ih=null;
}},this);
}this.__im(q);
},placeToPoint:function(j){var k={left:j.left,top:j.top,right:j.left,bottom:j.top};
this.__im(k);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__il:function(w){var x=null;

if(this._computePlacementSize){var x=this._computePlacementSize();
}else if(this.isVisible()){var x=this.getBounds();
}
if(x==null){this.addListenerOnce(Q,function(){this.__il(w);
},this);
}else{w.call(this,x);
}},__im:function(v){this.__il(function(r){var s=qx.util.placement.Placement.compute(r,this.getLayoutParent().getBounds(),v,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(s.left,s.top);
});
},setSmart:function(t){{};
var u=t?J:G;
this.set({placementModeX:u,placementModeY:u});
},getSmart:function(){{};
var b=this.getPlacementModeX()==J?true:false;
var c=this.getPlacementModeY()==J?true:false;
return b&&c;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){this.__ik();
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(i){qx.ui.container.Composite.call(this,i);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(f,g){qx.ui.container.Composite.prototype._applyVisibility.call(this,f,g);
var h=qx.ui.popup.Manager.getInstance();
f===d?h.add(this):h.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var n="atom",m="Integer",l="String",k="_applyRich",j="qx.ui.tooltip.ToolTip",i="_applyIcon",h="tooltip",g="qx.ui.core.Widget",f="mouseover",d="Boolean",c="_applyLabel";
qx.Class.define(j,{extend:qx.ui.popup.Popup,construct:function(a,b){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(n);
if(a!=null){this.setLabel(a);
}
if(b!=null){this.setIcon(b);
}this.addListener(f,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:h},showTimeout:{check:m,init:700,themeable:true},hideTimeout:{check:m,init:4000,themeable:true},label:{check:l,nullable:true,apply:c},icon:{check:l,nullable:true,apply:i,themeable:true},rich:{check:d,init:false,apply:k},opener:{check:g,nullable:true}},members:{_createChildControlImpl:function(u){var v;

switch(u){case n:v=new qx.ui.basic.Atom;
this._add(v);
break;
}return v||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,u);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(o,p){var q=this.getChildControl(n);
o==null?q.resetIcon:q.setIcon(o);
},_applyLabel:function(w,x){var y=this.getChildControl(n);
w==null?y.resetLabel():y.setLabel(w);
},_applyRich:function(r,s){var t=this.getChildControl(n);
t.setRich(r);
}}});
})();
(function(){var g="qx.ui.core.queue.Layout",f="layout";
qx.Class.define(g,{statics:{__dp:{},remove:function(a){delete this.__dp[a.$$hash];
},add:function(h){this.__dp[h.$$hash]=h;
qx.ui.core.queue.Manager.scheduleFlush(f);
},flush:function(){var j=this.__ds();
for(var i=j.length-1;i>=0;i--){var k=j[i];
if(k.hasValidLayout()){continue;
}if(k.isRootWidget()&&!k.hasUserBounds()){var m=k.getSizeHint();
k.renderLayout(0,0,m.width,m.height);
}else{var l=k.getBounds();
k.renderLayout(l.left,l.top,l.width,l.height);
}}},getNestingLevel:function(b){var c=this.__dr;
var e=0;
var parent=b;
while(true){if(c[parent.$$hash]!=null){e+=c[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
e+=1;
}var d=e;

while(b&&b!==parent){c[b.$$hash]=d--;
b=b.$$parent;
}return e;
},__dq:function(){var A=qx.ui.core.queue.Visibility;
this.__dr={};
var z=[];
var y=this.__dp;
var v,x;

for(var w in y){v=y[w];

if(A.isVisible(v)){x=this.getNestingLevel(v);
if(!z[x]){z[x]={};
}z[x][w]=v;
delete y[w];
}}return z;
},__ds:function(){var q=[];
var s=this.__dq();

for(var p=s.length-1;p>=0;p--){if(!s[p]){continue;
}
for(var o in s[p]){var n=s[p][o];
if(p==0||n.isRootWidget()||n.hasUserBounds()){q.push(n);
n.invalidateLayoutCache();
continue;
}var u=n.getSizeHint(false);

if(u){n.invalidateLayoutCache();
var r=n.getSizeHint();
var t=(!n.getBounds()||u.minWidth!==r.minWidth||u.width!==r.width||u.maxWidth!==r.maxWidth||u.minHeight!==r.minHeight||u.height!==r.height||u.maxHeight!==r.maxHeight);
}else{t=true;
}
if(t){var parent=n.getLayoutParent();

if(!s[p-1]){s[p-1]={};
}s[p-1][parent.$$hash]=parent;
}else{q.push(n);
}}}return q;
}}});
})();
(function(){var f="qx.event.handler.UserAction";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){qx.core.Object.call(this);
this.__dt=h;
this.__du=h.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dt:null,__du:null,canHandleEvent:function(a,b){},registerEvent:function(c,d,e){},unregisterEvent:function(i,j,k){}},destruct:function(){this.__dt=this.__du=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var d="qx.util.DeferredCallManager",c="singleton";
qx.Class.define(d,{extend:qx.core.Object,type:c,construct:function(){this.__dv={};
this.__dw=qx.lang.Function.bind(this.__dA,this);
this.__dx=false;
},members:{__dy:null,__dz:null,__dv:null,__dx:null,__dw:null,schedule:function(a){if(this.__dy==null){this.__dy=window.setTimeout(this.__dw,0);
}var b=a.toHashCode();
if(this.__dz&&this.__dz[b]){return;
}this.__dv[b]=a;
this.__dx=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__dz&&this.__dz[f]){this.__dz[f]=null;
return;
}delete this.__dv[f];
if(qx.lang.Object.isEmpty(this.__dv)&&this.__dy!=null){window.clearTimeout(this.__dy);
this.__dy=null;
}},__dA:qx.event.GlobalError.observeMethod(function(){this.__dy=null;
while(this.__dx){this.__dz=qx.lang.Object.clone(this.__dv);
this.__dv={};
this.__dx=false;

for(var h in this.__dz){var g=this.__dz[h];

if(g){this.__dz[h]=null;
g.call();
}}}this.__dz=null;
})},destruct:function(){if(this.__dy!=null){window.clearTimeout(this.__dy);
}this.__dw=this.__dv=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){qx.core.Object.call(this);
this.__dB=b;
this.__dC=c||null;
this.__dD=qx.util.DeferredCallManager.getInstance();
},members:{__dB:null,__dC:null,__dD:null,cancel:function(){this.__dD.cancel(this);
},schedule:function(){this.__dD.schedule(this);
},call:function(){this.__dC?this.__dB.apply(this.__dC):this.__dB();
}},destruct:function(d,e){this.cancel();
this.__dC=this.__dB=this.__dD=null;
}});
})();
(function(){var Y="element",X="qx.client",W="qxSelectable",V="off",U="on",T="div",S="",R="mshtml",Q="none",P="scroll",br="text",bq="qx.html.Element",bp="|capture|",bo="activate",bn="blur",bm="deactivate",bl="capture",bk="userSelect",bj="-moz-none",bi="visible",bg="releaseCapture",bh="|bubble|",be="__eb",bf="tabIndex",bc="focus",bd="MozUserSelect",ba="normal",bb="hidden";
qx.Class.define(bq,{extend:qx.core.Object,construct:function(b,c,d){qx.core.Object.call(this);
this.__dE=b||T;
this.__dF=c||null;
this.__dG=d||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__dH:{},_scheduleFlush:function(u){qx.html.Element.__em.schedule();
},flush:function(){var ck;
{};
var cc=this.__dI();
var cb=cc.getFocus();

if(cb&&this.__dM(cb)){cc.blur(cb);
}var cr=cc.getActive();

if(cr&&this.__dM(cr)){qx.bom.Element.deactivate(cr);
}var cf=this.__dK();

if(cf&&this.__dM(cf)){qx.bom.Element.releaseCapture(cf);
}var cl=[];
var cm=this._modified;

for(var cj in cm){ck=cm[cj];
if(ck.__ef()){if(ck.__dN&&qx.dom.Hierarchy.isRendered(ck.__dN)){cl.push(ck);
}else{{};
ck.__ee();
}delete cm[cj];
}}
for(var i=0,l=cl.length;i<l;i++){ck=cl[i];
{};
ck.__ee();
}var ch=this._visibility;

for(var cj in ch){ck=ch[cj];
var cn=ck.__dN;

if(!cn){delete ch[cj];
continue;
}{};
if(!ck.$$disposed){cn.style.display=ck.__dQ?S:Q;
if(qx.core.Variant.isSet(X,R)){if(!(document.documentMode>=8)){cn.style.visibility=ck.__dQ?bi:bb;
}}}delete ch[cj];
}var scroll=this._scroll;

for(var cj in scroll){ck=scroll[cj];
var cs=ck.__dN;

if(cs&&cs.offsetWidth){var ce=true;
if(ck.__dT!=null){ck.__dN.scrollLeft=ck.__dT;
delete ck.__dT;
}if(ck.__dU!=null){ck.__dN.scrollTop=ck.__dU;
delete ck.__dU;
}var co=ck.__dR;

if(co!=null){var ci=co.element.getDomElement();

if(ci&&ci.offsetWidth){qx.bom.element.Scroll.intoViewX(ci,cs,co.align);
delete ck.__dR;
}else{ce=false;
}}var cp=ck.__dS;

if(cp!=null){var ci=cp.element.getDomElement();

if(ci&&ci.offsetWidth){qx.bom.element.Scroll.intoViewY(ci,cs,cp.align);
delete ck.__dS;
}else{ce=false;
}}if(ce){delete scroll[cj];
}}}var cd={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var cq=this._actions[i];
var cn=cq.element.__dN;

if(!cn||!cd[cq.type]&&!cq.element.__ef()){continue;
}var cg=cq.args;
cg.unshift(cn);
qx.bom.Element[cq.type].apply(qx.bom.Element,cg);
}this._actions=[];
for(var cj in this.__dH){var ca=this.__dH[cj];
var cs=ca.element.__dN;

if(cs){qx.bom.Selection.set(cs,ca.start,ca.end);
delete this.__dH[cj];
}}qx.event.handler.Appear.refresh();
},__dI:function(){if(!this.__dJ){var bG=qx.event.Registration.getManager(window);
this.__dJ=bG.getHandler(qx.event.handler.Focus);
}return this.__dJ;
},__dK:function(){if(!this.__dL){var bU=qx.event.Registration.getManager(window);
this.__dL=bU.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__dL.getCaptureElement();
},__dM:function(bI){var bJ=qx.core.ObjectRegistry.fromHashCode(bI.$$element);
return bJ&&!bJ.__ef();
}},members:{__dE:null,__dN:null,__dO:false,__dP:true,__dQ:true,__dR:null,__dS:null,__dT:null,__dU:null,__dV:null,__dW:null,__dX:null,__dF:null,__dG:null,__dY:null,__ea:null,__eb:null,__ec:null,__ed:null,_scheduleChildrenUpdate:function(){if(this.__ec){return;
}this.__ec=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(Y);
},_createDomElement:function(){return qx.bom.Element.create(this.__dE);
},__ee:function(){{};
var bM=this.__eb;

if(bM){var length=bM.length;
var bN;

for(var i=0;i<length;i++){bN=bM[i];

if(bN.__dQ&&bN.__dP&&!bN.__dN){bN.__ee();
}}}
if(!this.__dN){this.__dN=this._createDomElement();
this.__dN.$$element=this.$$hash;
this._copyData(false);

if(bM&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__ec){this._syncChildren();
}}delete this.__ec;
},_insertChildren:function(){var dl=this.__eb;
var length=dl.length;
var dn;

if(length>2){var dm=document.createDocumentFragment();

for(var i=0;i<length;i++){dn=dl[i];

if(dn.__dN&&dn.__dP){dm.appendChild(dn.__dN);
}}this.__dN.appendChild(dm);
}else{var dm=this.__dN;

for(var i=0;i<length;i++){dn=dl[i];

if(dn.__dN&&dn.__dP){dm.appendChild(dn.__dN);
}}}},_syncChildren:function(){var cL;
var cQ=qx.core.ObjectRegistry;
var cH=this.__eb;
var cO=cH.length;
var cI;
var cM;
var cK=this.__dN;
var cN=cK.childNodes;
var cJ=0;
var cP;
{};
for(var i=cN.length-1;i>=0;i--){cP=cN[i];
cM=cQ.fromHashCode(cP.$$element);

if(!cM||!cM.__dP||cM.__ed!==this){cK.removeChild(cP);
{};
}}for(var i=0;i<cO;i++){cI=cH[i];
if(cI.__dP){cM=cI.__dN;
cP=cN[cJ];

if(!cM){continue;
}if(cM!=cP){if(cP){cK.insertBefore(cM,cP);
}else{cK.appendChild(cM);
}{};
}cJ++;
}}{};
},_copyData:function(dd){var dh=this.__dN;
var dg=this.__dG;

if(dg){var de=qx.bom.element.Attribute;

for(var di in dg){de.set(dh,di,dg[di]);
}}var dg=this.__dF;

if(dg){var df=qx.bom.element.Style;

if(dd){df.setStyles(dh,dg);
}else{df.setCss(dh,df.compile(dg));
}}var dg=this.__dY;

if(dg){for(var di in dg){this._applyProperty(di,dg[di]);
}}var dg=this.__ea;

if(dg){qx.event.Registration.getManager(dh).importListeners(dh,dg);
delete this.__ea;
}},_syncData:function(){var dN=this.__dN;
var dM=qx.bom.element.Attribute;
var dK=qx.bom.element.Style;
var dL=this.__dW;

if(dL){var dQ=this.__dG;

if(dQ){var dO;

for(var dP in dL){dO=dQ[dP];

if(dO!==undefined){dM.set(dN,dP,dO);
}else{dM.reset(dN,dP);
}}}this.__dW=null;
}var dL=this.__dV;

if(dL){var dQ=this.__dF;

if(dQ){var dJ={};

for(var dP in dL){dJ[dP]=dQ[dP];
}dK.setStyles(dN,dJ);
}this.__dV=null;
}var dL=this.__dX;

if(dL){var dQ=this.__dY;

if(dQ){var dO;

for(var dP in dL){this._applyProperty(dP,dQ[dP]);
}}this.__dX=null;
}},__ef:function(){var cY=this;
while(cY){if(cY.__dO){return true;
}
if(!cY.__dP||!cY.__dQ){return false;
}cY=cY.__ed;
}return false;
},__eg:function(bH){if(bH.__ed===this){throw new Error("Child is already in: "+bH);
}
if(bH.__dO){throw new Error("Root elements could not be inserted into other ones.");
}if(bH.__ed){bH.__ed.remove(bH);
}bH.__ed=this;
if(!this.__eb){this.__eb=[];
}if(this.__dN){this._scheduleChildrenUpdate();
}},__eh:function(du){if(du.__ed!==this){throw new Error("Has no child: "+du);
}if(this.__dN){this._scheduleChildrenUpdate();
}delete du.__ed;
},__ei:function(G){if(G.__ed!==this){throw new Error("Has no child: "+G);
}if(this.__dN){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__eb||null;
},getChild:function(dW){var dX=this.__eb;
return dX&&dX[dW]||null;
},hasChildren:function(){var dt=this.__eb;
return dt&&dt[0]!==undefined;
},indexOf:function(da){var dc=this.__eb;
return dc?dc.indexOf(da):-1;
},hasChild:function(dT){var dU=this.__eb;
return dU&&dU.indexOf(dT)!==-1;
},add:function(bO){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__eg(arguments[i]);
}this.__eb.push.apply(this.__eb,arguments);
}else{this.__eg(bO);
this.__eb.push(bO);
}return this;
},addAt:function(s,t){this.__eg(s);
qx.lang.Array.insertAt(this.__eb,s,t);
return this;
},remove:function(bR){var bS=this.__eb;

if(!bS){return;
}
if(arguments[1]){var bT;

for(var i=0,l=arguments.length;i<l;i++){bT=arguments[i];
this.__eh(bT);
qx.lang.Array.remove(bS,bT);
}}else{this.__eh(bR);
qx.lang.Array.remove(bS,bR);
}return this;
},removeAt:function(ct){var cu=this.__eb;

if(!cu){throw new Error("Has no children!");
}var cv=cu[ct];

if(!cv){throw new Error("Has no child at this position!");
}this.__eh(cv);
qx.lang.Array.removeAt(this.__eb,ct);
return this;
},removeAll:function(){var dp=this.__eb;

if(dp){for(var i=0,l=dp.length;i<l;i++){this.__eh(dp[i]);
}dp.length=0;
}return this;
},getParent:function(){return this.__ed||null;
},insertInto:function(parent,O){parent.__eg(this);

if(O==null){parent.__eb.push(this);
}else{qx.lang.Array.insertAt(this.__eb,this,O);
}return this;
},insertBefore:function(v){var parent=v.__ed;
parent.__eg(this);
qx.lang.Array.insertBefore(parent.__eb,this,v);
return this;
},insertAfter:function(bK){var parent=bK.__ed;
parent.__eg(this);
qx.lang.Array.insertAfter(parent.__eb,this,bK);
return this;
},moveTo:function(C){var parent=this.__ed;
parent.__ei(this);
var D=parent.__eb.indexOf(this);

if(D===C){throw new Error("Could not move to same index!");
}else if(D<C){C--;
}qx.lang.Array.removeAt(parent.__eb,D);
qx.lang.Array.insertAt(parent.__eb,this,C);
return this;
},moveBefore:function(dC){var parent=this.__ed;
return this.moveTo(parent.__eb.indexOf(dC));
},moveAfter:function(E){var parent=this.__ed;
return this.moveTo(parent.__eb.indexOf(E)+1);
},free:function(){var parent=this.__ed;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__eb){return;
}parent.__eh(this);
qx.lang.Array.remove(parent.__eb,this);
return this;
},getDomElement:function(){return this.__dN||null;
},getNodeName:function(){return this.__dE;
},setNodeName:function(name){this.__dE=name;
},setRoot:function(dV){this.__dO=dV;
},useMarkup:function(dG){if(this.__dN){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(X,R)){var dH=document.createElement(T);
}else{var dH=qx.bom.Element.getHelperElement();
}dH.innerHTML=dG;
this.useElement(dH.firstChild);
return this.__dN;
},useElement:function(cB){if(this.__dN){throw new Error("Could not overwrite existing element!");
}this.__dN=cB;
this.__dN.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var g=this.getAttribute(bf);

if(g>=1){return true;
}var f=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(g>=0&&f[this.__dE]){return true;
}return false;
},setSelectable:qx.core.Variant.select(X,{"webkit":function(F){this.setAttribute(W,F?U:V);
this.setStyle(bk,F?ba:Q);
},"gecko":function(dv){this.setAttribute(W,dv?U:V);
this.setStyle(bd,dv?br:bj);
},"default":function(q){this.setAttribute(W,q?U:V);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__dE];
},include:function(){if(this.__dP){return;
}delete this.__dP;

if(this.__ed){this.__ed._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__dP){return;
}this.__dP=false;

if(this.__ed){this.__ed._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__dP===true;
},show:function(){if(this.__dQ){return;
}
if(this.__dN){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(Y);
}if(this.__ed){this.__ed._scheduleChildrenUpdate();
}delete this.__dQ;
},hide:function(){if(!this.__dQ){return;
}
if(this.__dN){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(Y);
}this.__dQ=false;
},isVisible:function(){return this.__dQ===true;
},scrollChildIntoViewX:function(dw,dx,dy){var dz=this.__dN;
var dA=dw.getDomElement();

if(dy!==false&&dz&&dz.offsetWidth&&dA&&dA.offsetWidth){qx.bom.element.Scroll.intoViewX(dA,dz,dx);
}else{this.__dR={element:dw,align:dx};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(Y);
}delete this.__dT;
},scrollChildIntoViewY:function(cw,cx,cy){var cz=this.__dN;
var cA=cw.getDomElement();

if(cy!==false&&cz&&cz.offsetWidth&&cA&&cA.offsetWidth){qx.bom.element.Scroll.intoViewY(cA,cz,cx);
}else{this.__dS={element:cw,align:cx};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(Y);
}delete this.__dU;
},scrollToX:function(x,M){var N=this.__dN;

if(M!==true&&N&&N.offsetWidth){N.scrollLeft=x;
}else{this.__dT=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(Y);
}delete this.__dR;
},getScrollX:function(){var dB=this.__dN;

if(dB){return dB.scrollLeft;
}return this.__dT||0;
},scrollToY:function(y,bV){var bW=this.__dN;

if(bV!==true&&bW&&bW.offsetWidth){bW.scrollTop=y;
}else{this.__dU=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(Y);
}delete this.__dS;
},getScrollY:function(){var bP=this.__dN;

if(bP){return bP.scrollTop;
}return this.__dU||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(P,this.__ek,this);
},enableScrolling:function(){this.removeListener(P,this.__ek,this);
},__ej:null,__ek:function(e){if(!this.__ej){this.__ej=true;
this.__dN.scrollTop=0;
this.__dN.scrollLeft=0;
delete this.__ej;
}},getTextSelection:function(){var cX=this.__dN;

if(cX){return qx.bom.Selection.get(cX);
}return null;
},getTextSelectionLength:function(){var bY=this.__dN;

if(bY){return qx.bom.Selection.getLength(bY);
}return null;
},getTextSelectionStart:function(){var dI=this.__dN;

if(dI){return qx.bom.Selection.getStart(dI);
}return null;
},getTextSelectionEnd:function(){var bX=this.__dN;

if(bX){return qx.bom.Selection.getEnd(bX);
}return null;
},setTextSelection:function(cC,cD){var cE=this.__dN;

if(cE){qx.bom.Selection.set(cE,cC,cD);
return;
}qx.html.Element.__dH[this.toHashCode()]={element:this,start:cC,end:cD};
qx.html.Element._scheduleFlush(Y);
},clearTextSelection:function(){var bQ=this.__dN;

if(bQ){qx.bom.Selection.clear(bQ);
}delete qx.html.Element.__dH[this.toHashCode()];
},__el:function(bA,bB){var bC=qx.html.Element._actions;
bC.push({type:bA,element:this,args:bB||[]});
qx.html.Element._scheduleFlush(Y);
},focus:function(){this.__el(bc);
},blur:function(){this.__el(bn);
},activate:function(){this.__el(bo);
},deactivate:function(){this.__el(bm);
},capture:function(r){this.__el(bl,[r!==false]);
},releaseCapture:function(){this.__el(bg);
},setStyle:function(dD,dE,dF){if(!this.__dF){this.__dF={};
}
if(this.__dF[dD]==dE){return;
}
if(dE==null){delete this.__dF[dD];
}else{this.__dF[dD]=dE;
}if(this.__dN){if(dF){qx.bom.element.Style.set(this.__dN,dD,dE);
return this;
}if(!this.__dV){this.__dV={};
}this.__dV[dD]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(Y);
}return this;
},setStyles:function(H,I){var J=qx.bom.element.Style;

if(!this.__dF){this.__dF={};
}
if(this.__dN){if(!this.__dV){this.__dV={};
}
for(var L in H){var K=H[L];

if(this.__dF[L]==K){continue;
}
if(K==null){delete this.__dF[L];
}else{this.__dF[L]=K;
}if(I){J.set(this.__dN,L,K);
continue;
}this.__dV[L]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(Y);
}else{for(var L in H){var K=H[L];

if(this.__dF[L]==K){continue;
}
if(K==null){delete this.__dF[L];
}else{this.__dF[L]=K;
}}}return this;
},removeStyle:function(cF,cG){this.setStyle(cF,null,cG);
},getStyle:function(a){return this.__dF?this.__dF[a]:null;
},getAllStyles:function(){return this.__dF||null;
},setAttribute:function(dY,ea,eb){if(!this.__dG){this.__dG={};
}
if(this.__dG[dY]==ea){return;
}
if(ea==null){delete this.__dG[dY];
}else{this.__dG[dY]=ea;
}if(this.__dN){if(eb){qx.bom.element.Attribute.set(this.__dN,dY,ea);
return this;
}if(!this.__dW){this.__dW={};
}this.__dW[dY]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(Y);
}return this;
},setAttributes:function(w,z){for(var A in w){this.setAttribute(A,w[A],z);
}return this;
},removeAttribute:function(dj,dk){this.setAttribute(dj,null,dk);
},getAttribute:function(cW){return this.__dG?this.__dG[cW]:null;
},_applyProperty:function(name,bL){},_setProperty:function(dq,dr,ds){if(!this.__dY){this.__dY={};
}
if(this.__dY[dq]==dr){return;
}
if(dr==null){delete this.__dY[dq];
}else{this.__dY[dq]=dr;
}if(this.__dN){if(ds){this._applyProperty(dq,dr);
return this;
}if(!this.__dX){this.__dX={};
}this.__dX[dq]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(Y);
}return this;
},_removeProperty:function(dR,dS){this._setProperty(dR,null,dS);
},_getProperty:function(bD){var bE=this.__dY;

if(!bE){return null;
}var bF=bE[bD];
return bF==null?null:bF;
},addListener:function(j,k,self,m){var n;

if(this.$$disposed){return null;
}{};

if(this.__dN){return qx.event.Registration.addListener(this.__dN,j,k,self,m);
}
if(!this.__ea){this.__ea={};
}
if(m==null){m=false;
}var o=qx.event.Manager.getNextUniqueId();
var p=j+(m?bp:bh)+o;
this.__ea[p]={type:j,listener:k,self:self,capture:m,unique:o};
return p;
},removeListener:function(bt,bu,self,bv){var bw;

if(this.$$disposed){return null;
}{};

if(this.__dN){qx.event.Registration.removeListener(this.__dN,bt,bu,self,bv);
}else{var by=this.__ea;
var bx;

if(bv==null){bv=false;
}
for(var bz in by){bx=by[bz];
if(bx.listener===bu&&bx.self===self&&bx.capture===bv&&bx.type===bt){delete by[bz];
break;
}}}return this;
},removeListenerById:function(h){if(this.$$disposed){return null;
}
if(this.__dN){qx.event.Registration.removeListenerById(this.__dN,h);
}else{delete this.__ea[h];
}return this;
},hasListener:function(cR,cS){if(this.$$disposed){return false;
}
if(this.__dN){return qx.event.Registration.hasListener(this.__dN,cR,cS);
}var cU=this.__ea;
var cT;

if(cS==null){cS=false;
}
for(var cV in cU){cT=cU[cV];
if(cT.capture===cS&&cT.type===cR){return true;
}}return false;
}},defer:function(bs){bs.__em=new qx.util.DeferredCall(bs.flush,bs);
},destruct:function(){var B=this.__dN;

if(B){qx.event.Registration.getManager(B).removeAllListeners(B);
B.$$element=S;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__ed;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(be);
this.__dG=this.__dF=this.__ea=this.__dY=this.__dW=this.__dV=this.__dX=this.__dN=this.__ed=this.__dR=this.__dS=null;
}});
})();
(function(){var f="qx.ui.core.queue.Manager",d="useraction";
qx.Class.define(f,{statics:{__en:false,__eo:{},__ep:0,MAX_RETRIES:10,scheduleFlush:function(g){var self=qx.ui.core.queue.Manager;
self.__eo[g]=true;

if(!self.__en){self.__es.schedule();
self.__en=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__eq){return;
}self.__eq=true;
self.__es.cancel();
var c=self.__eo;
self.__er(function(){while(c.visibility||c.widget||c.appearance||c.layout||c.element){if(c.widget){delete c.widget;
qx.ui.core.queue.Widget.flush();
}
if(c.visibility){delete c.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(c.appearance){delete c.appearance;
qx.ui.core.queue.Appearance.flush();
}if(c.widget||c.visibility||c.appearance){continue;
}
if(c.layout){delete c.layout;
qx.ui.core.queue.Layout.flush();
}if(c.widget||c.visibility||c.appearance||c.layout){continue;
}
if(c.element){delete c.element;
qx.html.Element.flush();
}}},function(){self.__en=false;
});
self.__er(function(){if(c.dispose){delete c.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__eq=false;
});
self.__ep=0;
},__er:function(a,b){var self=qx.ui.core.queue.Manager;

try{a();
}catch(e){{};
self.__en=false;
self.__eq=false;
self.__ep+=1;

if(self.__ep<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__ep-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{b();
}}},defer:function(h){h.__es=new qx.util.DeferredCall(h.flush);
qx.html.Element._scheduleFlush=h.scheduleFlush;
qx.event.Registration.addListener(window,d,h.flush);
}});
})();
(function(){var c="abstract",b="qx.event.dispatch.AbstractBubbling";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:c,construct:function(a){this._manager=a;
},members:{_getParent:function(f){throw new Error("Missing implementation");
},canDispatchEvent:function(d,event,e){return event.getBubbles();
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
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var C="keydown",B="qx.client",A="keypress",z="NumLock",y="keyup",x="Enter",w="0",v="9",u="-",t="PageUp",bJ="+",bI="PrintScreen",bH="gecko",bG="A",bF="Z",bE="Left",bD="F5",bC="Down",bB="Up",bA="F11",J="F6",K="useraction",H="F3",I="keyinput",F="Insert",G="F8",D="End",E="/",R="Delete",S="*",bf="F1",bb="F4",bn="Home",bi="F2",bw="F12",bs="PageDown",W="F7",bz="F9",by="F10",bx="Right",V="text",Y="Escape",ba="webkit",bd="5",bg="3",bj="Meta",bp="7",bu="CapsLock",L="input",M="Control",X="Space",bm="Tab",bl="Shift",bk="Pause",br="Unidentified",bq="qx.event.handler.Keyboard",bh="mshtml",bo="mshtml|webkit",q="6",bt="off",N="Apps",O="4",bc="Alt",r="2",s="Scroll",U="1",P="8",Q="Win",T="autoComplete",be=",",bv="Backspace";
qx.Class.define(bq,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cH){qx.core.Object.call(this);
this.__et=cH;
this.__eu=cH.getWindow();
if(qx.core.Variant.isSet(B,bH)){this.__ev=this.__eu;
}else{this.__ev=this.__eu.document.documentElement;
}this.__ew={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cG){if(this._identifierToKeyCodeMap[cG]){return true;
}
if(cG.length!=1){return false;
}
if(cG>=w&&cG<=v){return true;
}
if(cG>=bG&&cG<=bF){return true;
}
switch(cG){case bJ:case u:case S:case E:return true;
default:return false;
}}},members:{__ex:null,__et:null,__eu:null,__ev:null,__ew:null,__ey:null,__ez:null,__eA:null,canHandleEvent:function(m,n){},registerEvent:function(i,j,k){},unregisterEvent:function(bT,bU,bV){},_fireInputEvent:function(ct,cu){var cv=this.__eB();
if(cv&&cv.offsetWidth!=0){var event=qx.event.Registration.createEvent(I,qx.event.type.KeyInput,[ct,cv,cu]);
this.__et.dispatchEvent(cv,event);
}if(this.__eu){qx.event.Registration.fireEvent(this.__eu,K,qx.event.type.Data,[I]);
}},_fireSequenceEvent:function(ce,cf,cg){var ch=this.__eB();
var ci=ce.keyCode;
var event=qx.event.Registration.createEvent(cf,qx.event.type.KeySequence,[ce,ch,cg]);
this.__et.dispatchEvent(ch,event);
if(qx.core.Variant.isSet(B,bo)){if(cf==C&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(ci)&&!this._emulateKeyPress[ci]){this._fireSequenceEvent(ce,A,cg);
}}}if(this.__eu){qx.event.Registration.fireEvent(this.__eu,K,qx.event.type.Data,[cf]);
}},__eB:function(){var bP=this.__et.getHandler(qx.event.handler.Focus);
var bQ=bP.getActive();
if(!bQ||bQ.offsetWidth==0){bQ=bP.getFocus();
}if(!bQ||bQ.offsetWidth==0){bQ=this.__et.getWindow().document.body;
}return bQ;
},_initKeyObserver:function(){this.__ex=qx.lang.Function.listener(this.__eC,this);
this.__eA=qx.lang.Function.listener(this.__eE,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ev,y,this.__ex);
Event.addNativeListener(this.__ev,C,this.__ex);
Event.addNativeListener(this.__ev,A,this.__eA);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ev,y,this.__ex);
Event.removeNativeListener(this.__ev,C,this.__ex);
Event.removeNativeListener(this.__ev,A,this.__eA);

for(var bS in (this.__ez||{})){var bR=this.__ez[bS];
Event.removeNativeListener(bR.target,A,bR.callback);
}delete (this.__ez);
},__eC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(B,{"mshtml":function(e){e=window.event||e;
var h=e.keyCode;
var f=0;
var g=e.type;
if(!(this.__ew[h]==C&&g==C)){this._idealKeyHandler(h,f,g,e);
}if(g==C){if(this._isNonPrintableKeyCode(h)||this._emulateKeyPress[h]){this._idealKeyHandler(h,f,A,e);
}}this.__ew[h]=g;
},"gecko":function(bK){var bO=this._keyCodeFix[bK.keyCode]||bK.keyCode;
var bM=0;
var bN=bK.type;
if(qx.bom.client.Platform.WIN){var bL=bO?this._keyCodeToIdentifier(bO):this._charCodeToIdentifier(bM);

if(!(this.__ew[bL]==C&&bN==C)){this._idealKeyHandler(bO,bM,bN,bK);
}this.__ew[bL]=bN;
}else{this._idealKeyHandler(bO,bM,bN,bK);
}this.__eD(bK.target,bN,bO);
},"webkit":function(cj){var cm=0;
var ck=0;
var cl=cj.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cl==y||cl==C){cm=this._charCode2KeyCode[cj.charCode]||cj.keyCode;
}else{if(this._charCode2KeyCode[cj.charCode]){cm=this._charCode2KeyCode[cj.charCode];
}else{ck=cj.charCode;
}}this._idealKeyHandler(cm,ck,cl,cj);
}else{cm=cj.keyCode;
if(!(this.__ew[cm]==C&&cl==C)){this._idealKeyHandler(cm,ck,cl,cj);
}if(cl==C){if(this._isNonPrintableKeyCode(cm)||this._emulateKeyPress[cm]){this._idealKeyHandler(cm,ck,A,cj);
}}this.__ew[cm]=cl;
}},"opera":function(o){this.__ey=o.keyCode;
this._idealKeyHandler(o.keyCode,0,o.type,o);
}})),__eD:qx.core.Variant.select(B,{"gecko":function(co,cp,cq){if(cp===C&&(cq==33||cq==34||cq==38||cq==40)&&co.type==V&&co.tagName.toLowerCase()===L&&co.getAttribute(T)!==bt){if(!this.__ez){this.__ez={};
}var cs=qx.core.ObjectRegistry.toHashCode(co);

if(this.__ez[cs]){return;
}var self=this;
this.__ez[cs]={target:co,callback:function(bW){qx.bom.Event.stopPropagation(bW);
self.__eE(bW);
}};
var cr=qx.event.GlobalError.observeMethod(this.__ez[cs].callback);
qx.bom.Event.addNativeListener(co,A,cr);
}},"default":null}),__eE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(B,{"mshtml":function(l){l=window.event||l;

if(this._charCode2KeyCode[l.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[l.keyCode],0,l.type,l);
}else{this._idealKeyHandler(0,l.keyCode,l.type,l);
}},"gecko":function(cC){var cF=this._keyCodeFix[cC.keyCode]||cC.keyCode;
var cD=cC.charCode;
var cE=cC.type;
this._idealKeyHandler(cF,cD,cE,cC);
},"webkit":function(cw){if(qx.bom.client.Engine.VERSION<525.13){var cz=0;
var cx=0;
var cy=cw.type;

if(cy==y||cy==C){cz=this._charCode2KeyCode[cw.charCode]||cw.keyCode;
}else{if(this._charCode2KeyCode[cw.charCode]){cz=this._charCode2KeyCode[cw.charCode];
}else{cx=cw.charCode;
}}this._idealKeyHandler(cz,cx,cy,cw);
}else{if(this._charCode2KeyCode[cw.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cw.keyCode],0,cw.type,cw);
}else{this._idealKeyHandler(0,cw.keyCode,cw.type,cw);
}}},"opera":function(b){var d=b.keyCode;
var c=b.type;
if(d!=this.__ey){this._idealKeyHandler(0,this.__ey,c,b);
}else{if(this._keyCodeToIdentifierMap[b.keyCode]){this._idealKeyHandler(b.keyCode,0,b.type,b);
}else{this._idealKeyHandler(0,b.keyCode,b.type,b);
}}}})),_idealKeyHandler:function(bY,ca,cb,cc){var cd;
if(bY||(!bY&&!ca)){cd=this._keyCodeToIdentifier(bY);
this._fireSequenceEvent(cc,cb,cd);
}else{cd=this._charCodeToIdentifier(ca);
this._fireSequenceEvent(cc,A,cd);
this._fireInputEvent(cc,ca);
}},_specialCharCodeMap:{8:bv,9:bm,13:x,27:Y,32:X},_emulateKeyPress:qx.core.Variant.select(B,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bl,17:M,18:bc,20:bu,224:bj,37:bE,38:bB,39:bx,40:bC,33:t,34:bs,35:D,36:bn,45:F,46:R,112:bf,113:bi,114:H,115:bb,116:bD,117:J,118:W,119:G,120:bz,121:by,122:bA,123:bw,144:z,44:bI,145:s,19:bk,91:Q,93:N},_numpadToCharCode:{96:w.charCodeAt(0),97:U.charCodeAt(0),98:r.charCodeAt(0),99:bg.charCodeAt(0),100:O.charCodeAt(0),101:bd.charCodeAt(0),102:q.charCodeAt(0),103:bp.charCodeAt(0),104:P.charCodeAt(0),105:v.charCodeAt(0),106:S.charCodeAt(0),107:bJ.charCodeAt(0),109:u.charCodeAt(0),110:be.charCodeAt(0),111:E.charCodeAt(0)},_charCodeA:bG.charCodeAt(0),_charCodeZ:bF.charCodeAt(0),_charCode0:w.charCodeAt(0),_charCode9:v.charCodeAt(0),_isNonPrintableKeyCode:function(bX){return this._keyCodeToIdentifierMap[bX]?true:false;
},_isIdentifiableKeyCode:function(cn){if(cn>=this._charCodeA&&cn<=this._charCodeZ){return true;
}if(cn>=this._charCode0&&cn<=this._charCode9){return true;
}if(this._specialCharCodeMap[cn]){return true;
}if(this._numpadToCharCode[cn]){return true;
}if(this._isNonPrintableKeyCode(cn)){return true;
}return false;
},_keyCodeToIdentifier:function(cA){if(this._isIdentifiableKeyCode(cA)){var cB=this._numpadToCharCode[cA];

if(cB){return String.fromCharCode(cB);
}return (this._keyCodeToIdentifierMap[cA]||this._specialCharCodeMap[cA]||String.fromCharCode(cA));
}else{return br;
}},_charCodeToIdentifier:function(a){return this._specialCharCodeMap[a]||String.fromCharCode(a).toUpperCase();
},_identifierToKeyCode:function(p){return qx.event.handler.Keyboard._identifierToKeyCodeMap[p]||p.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__ey=this.__et=this.__eu=this.__ev=this.__ew=null;
},defer:function(cI,cJ,cK){qx.event.Registration.addHandler(cI);
if(!cI._identifierToKeyCodeMap){cI._identifierToKeyCodeMap={};

for(var cL in cJ._keyCodeToIdentifierMap){cI._identifierToKeyCodeMap[cJ._keyCodeToIdentifierMap[cL]]=parseInt(cL,10);
}
for(var cL in cJ._specialCharCodeMap){cI._identifierToKeyCodeMap[cJ._specialCharCodeMap[cL]]=parseInt(cL,10);
}}
if(qx.core.Variant.isSet(B,bh)){cJ._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(B,bH)){cJ._keyCodeFix={12:cJ._identifierToKeyCode(z)};
}else if(qx.core.Variant.isSet(B,ba)){if(qx.bom.client.Engine.VERSION<525.13){cJ._charCode2KeyCode={63289:cJ._identifierToKeyCode(z),63276:cJ._identifierToKeyCode(t),63277:cJ._identifierToKeyCode(bs),63275:cJ._identifierToKeyCode(D),63273:cJ._identifierToKeyCode(bn),63234:cJ._identifierToKeyCode(bE),63232:cJ._identifierToKeyCode(bB),63235:cJ._identifierToKeyCode(bx),63233:cJ._identifierToKeyCode(bC),63272:cJ._identifierToKeyCode(R),63302:cJ._identifierToKeyCode(F),63236:cJ._identifierToKeyCode(bf),63237:cJ._identifierToKeyCode(bi),63238:cJ._identifierToKeyCode(H),63239:cJ._identifierToKeyCode(bb),63240:cJ._identifierToKeyCode(bD),63241:cJ._identifierToKeyCode(J),63242:cJ._identifierToKeyCode(W),63243:cJ._identifierToKeyCode(G),63244:cJ._identifierToKeyCode(bz),63245:cJ._identifierToKeyCode(by),63246:cJ._identifierToKeyCode(bA),63247:cJ._identifierToKeyCode(bw),63248:cJ._identifierToKeyCode(bI),3:cJ._identifierToKeyCode(x),12:cJ._identifierToKeyCode(z),13:cJ._identifierToKeyCode(x)};
}else{cJ._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var s="qx.client",r="mouseup",q="click",p="mousedown",o="contextmenu",n="mousewheel",m="dblclick",l="mshtml",k="mouseover",j="mouseout",e="DOMMouseScroll",i="mousemove",h="on",d="mshtml|webkit|opera",c="useraction",g="gecko|webkit",f="qx.event.handler.Mouse";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this.__eI=a;
this.__eJ=a.getWindow();
this.__eK=this.__eJ.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__eL:null,__eM:null,__eN:null,__eO:null,__eP:null,__eI:null,__eJ:null,__eK:null,canHandleEvent:function(Y,ba){},registerEvent:qx.bom.client.System.IPHONE?
function(I,J,K){I[h+J]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(t,u,v){t[h+u]=undefined;
}:qx.lang.Function.returnNull,__eQ:function(F,G,H){if(!H){H=F.target||F.srcElement;
}if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G||F.type,G==n?qx.event.type.MouseWheel:qx.event.type.Mouse,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__eJ,c,qx.event.type.Data,[G||F.type]);
},_initButtonObserver:function(){this.__eL=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eK,p,this.__eL);
Event.addNativeListener(this.__eK,r,this.__eL);
Event.addNativeListener(this.__eK,q,this.__eL);
Event.addNativeListener(this.__eK,m,this.__eL);
Event.addNativeListener(this.__eK,o,this.__eL);
},_initMoveObserver:function(){this.__eM=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eK,i,this.__eM);
Event.addNativeListener(this.__eK,k,this.__eM);
Event.addNativeListener(this.__eK,j,this.__eM);
},_initWheelObserver:function(){this.__eN=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var L=qx.core.Variant.isSet(s,d)?n:e;
var M=qx.core.Variant.isSet(s,l)?this.__eK:this.__eJ;
Event.addNativeListener(M,L,this.__eN);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eK,p,this.__eL);
Event.removeNativeListener(this.__eK,r,this.__eL);
Event.removeNativeListener(this.__eK,q,this.__eL);
Event.removeNativeListener(this.__eK,m,this.__eL);
Event.removeNativeListener(this.__eK,o,this.__eL);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eK,i,this.__eM);
Event.removeNativeListener(this.__eK,k,this.__eM);
Event.removeNativeListener(this.__eK,j,this.__eM);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var T=qx.core.Variant.isSet(s,d)?n:e;
var U=qx.core.Variant.isSet(s,l)?this.__eK:this.__eJ;
Event.removeNativeListener(U,T,this.__eN);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(b){this.__eQ(b);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(Q){var R=Q.type;
var S=Q.target||Q.srcElement;
if(qx.core.Variant.isSet(s,g)){if(S&&S.nodeType==3){S=S.parentNode;
}}
if(this.__eR){this.__eR(Q,R,S);
}
if(this.__eT){this.__eT(Q,R,S);
}this.__eQ(Q,R,S);

if(this.__eS){this.__eS(Q,R,S);
}
if(this.__eU){this.__eU(Q,R,S);
}this.__eO=R;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(E){this.__eQ(E,n);
}),__eR:qx.core.Variant.select(s,{"webkit":function(A,B,C){if(qx.bom.client.Engine.VERSION<530){if(B==o){this.__eQ(A,r,C);
}}},"default":null}),__eS:qx.core.Variant.select(s,{"opera":function(V,W,X){if(W==r&&V.button==2){this.__eQ(V,o,X);
}},"default":null}),__eT:qx.core.Variant.select(s,{"mshtml":function(N,O,P){if(O==r&&this.__eO==q){this.__eQ(N,p,P);
}else if(O==m){this.__eQ(N,q,P);
}},"default":null}),__eU:qx.core.Variant.select(s,{"mshtml":null,"default":function(w,x,y){switch(x){case p:this.__eP=y;
break;
case r:if(y!==this.__eP){var z=qx.dom.Hierarchy.getCommonParent(y,this.__eP);
this.__eQ(w,q,z);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__eI=this.__eJ=this.__eK=this.__eP=null;
},defer:function(D){qx.event.Registration.addHandler(D);
}});
})();
(function(){var e="qx.event.handler.Capture";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(b,c,d){},unregisterEvent:function(f,g,h){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var K="alias",J="copy",I="blur",H="mouseout",G="keydown",F="Ctrl",E="Shift",D="mousemove",C="move",B="mouseover",bb="Alt",ba="keyup",Y="mouseup",X="dragend",W="on",V="mousedown",U="qxDraggable",T="drag",S="drop",R="qxDroppable",P="qx.event.handler.DragDrop",Q="droprequest",N="dragstart",O="dragchange",L="dragleave",M="dragover";
qx.Class.define(P,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){qx.core.Object.call(this);
this.__eV=h;
this.__eW=h.getWindow().document.documentElement;
this.__eV.addListener(this.__eW,V,this._onMouseDown,this);
this.__fj();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__eV:null,__eW:null,__eX:null,__eY:null,__fa:null,__fb:null,__fc:null,__fd:null,__fe:null,__ff:null,__fg:false,__fh:0,__fi:0,canHandleEvent:function(bl,bm){},registerEvent:function(x,y,z){},unregisterEvent:function(c,d,f){},addType:function(bi){this.__fa[bi]=true;
},addAction:function(i){this.__fb[i]=true;
},supportsType:function(bj){return !!this.__fa[bj];
},supportsAction:function(bh){return !!this.__fb[bh];
},getData:function(bk){if(!this.__fq||!this.__eX){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__fa[bk]){throw new Error("Unsupported data type: "+bk+"!");
}
if(!this.__fd[bk]){this.__fe=bk;
this.__fl(Q,this.__eY,this.__eX,false);
}
if(!this.__fd[bk]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__fd[bk]||null;
},getCurrentAction:function(){return this.__ff;
},addData:function(a,b){this.__fd[a]=b;
},getCurrentType:function(){return this.__fe;
},isSessionActive:function(){return this.__fg;
},__fj:function(){this.__fa={};
this.__fb={};
this.__fc={};
this.__fd={};
},__fk:function(){if(this.__eY==null){return;
}var be=this.__fb;
var bc=this.__fc;
var bd=null;

if(this.__fq){if(bc.Shift&&bc.Ctrl&&be.alias){bd=K;
}else if(bc.Shift&&bc.Alt&&be.copy){bd=J;
}else if(bc.Shift&&be.move){bd=C;
}else if(bc.Alt&&be.alias){bd=K;
}else if(bc.Ctrl&&be.copy){bd=J;
}else if(be.move){bd=C;
}else if(be.copy){bd=J;
}else if(be.alias){bd=K;
}}
if(bd!=this.__ff){this.__ff=bd;
this.__fl(O,this.__eY,this.__eX,false);
}},__fl:function(m,n,o,p,q){var s=qx.event.Registration;
var r=s.createEvent(m,qx.event.type.Drag,[p,q]);

if(n!==o){r.setRelatedTarget(o);
}return s.dispatchEvent(n,r);
},__fm:function(u){while(u&&u.nodeType==1){if(u.getAttribute(U)==W){return u;
}u=u.parentNode;
}return null;
},__fn:function(A){while(A&&A.nodeType==1){if(A.getAttribute(R)==W){return A;
}A=A.parentNode;
}return null;
},__fo:function(){this.__eY=null;
this.__eV.removeListener(this.__eW,D,this._onMouseMove,this,true);
this.__eV.removeListener(this.__eW,Y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,I,this._onWindowBlur,this);
this.__fj();
},__fp:function(){if(this.__fg){this.__eV.removeListener(this.__eW,B,this._onMouseOver,this,true);
this.__eV.removeListener(this.__eW,H,this._onMouseOut,this,true);
this.__eV.removeListener(this.__eW,G,this._onKeyDown,this,true);
this.__eV.removeListener(this.__eW,ba,this._onKeyUp,this,true);
this.__fl(X,this.__eY,this.__eX,false);
this.__fg=false;
}this.__fq=false;
this.__eX=null;
this.__fo();
},__fq:false,_onWindowBlur:function(e){this.__fp();
},_onKeyDown:function(e){var k=e.getKeyIdentifier();

switch(k){case bb:case F:case E:if(!this.__fc[k]){this.__fc[k]=true;
this.__fk();
}}},_onKeyUp:function(e){var t=e.getKeyIdentifier();

switch(t){case bb:case F:case E:if(this.__fc[t]){this.__fc[t]=false;
this.__fk();
}}},_onMouseDown:function(e){if(this.__fg){return;
}var j=this.__fm(e.getTarget());

if(j){this.__fh=e.getDocumentLeft();
this.__fi=e.getDocumentTop();
this.__eY=j;
this.__eV.addListener(this.__eW,D,this._onMouseMove,this,true);
this.__eV.addListener(this.__eW,Y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,I,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fq){this.__fl(S,this.__eX,this.__eY,false,e);
}if(this.__fg){e.stopPropagation();
}this.__fp();
},_onMouseMove:function(e){if(this.__fg){if(!this.__fl(T,this.__eY,this.__eX,true,e)){this.__fp();
}}else{if(Math.abs(e.getDocumentLeft()-this.__fh)>3||Math.abs(e.getDocumentTop()-this.__fi)>3){if(this.__fl(N,this.__eY,this.__eX,true,e)){this.__fg=true;
this.__eV.addListener(this.__eW,B,this._onMouseOver,this,true);
this.__eV.addListener(this.__eW,H,this._onMouseOut,this,true);
this.__eV.addListener(this.__eW,G,this._onKeyDown,this,true);
this.__eV.addListener(this.__eW,ba,this._onKeyUp,this,true);
var l=this.__fc;
l.Ctrl=e.isCtrlPressed();
l.Shift=e.isShiftPressed();
l.Alt=e.isAltPressed();
this.__fk();
}else{this.__fl(X,this.__eY,this.__eX,false);
this.__fo();
}}}},_onMouseOver:function(e){var bf=e.getTarget();
var bg=this.__fn(bf);

if(bg&&bg!=this.__eX){this.__fq=this.__fl(M,bg,this.__eY,true,e);
this.__eX=bg;
this.__fk();
}},_onMouseOut:function(e){var w=this.__fn(e.getTarget());
var v=this.__fn(e.getRelatedTarget());

if(w&&w!==v&&w==this.__eX){this.__fl(L,this.__eX,v,false,e);
this.__eX=null;
this.__fq=false;
qx.event.Timer.once(this.__fk,this,0);
}}},destruct:function(){this.__eY=this.__eX=this.__eV=this.__eW=this.__fa=this.__fb=this.__fc=this.__fd=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var y="-",x="qx.event.handler.Element";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(z){qx.core.Object.call(this);
this._manager=z;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(r,s,t){var w=qx.core.ObjectRegistry.toHashCode(r);
var u=w+y+s;
var v=qx.lang.Function.listener(this._onNative,this,u);
qx.bom.Event.addNativeListener(r,s,v);
this._registeredEvents[u]={element:r,type:s,listener:v};
},unregisterEvent:function(h,i,j){var m=this._registeredEvents;

if(!m){return;
}var n=qx.core.ObjectRegistry.toHashCode(h);
var k=n+y+i;
var l=this._registeredEvents[k];

if(l){qx.bom.Event.removeNativeListener(h,i,l.listener);
}delete this._registeredEvents[k];
},_onNative:qx.event.GlobalError.observeMethod(function(d,e){var g=this._registeredEvents;

if(!g){return;
}var f=g[e];
qx.event.Registration.fireNonBubblingEvent(f.element,f.type,qx.event.type.Native,[d]);
})},destruct:function(){var o;
var p=this._registeredEvents;

for(var q in p){o=p[q];
qx.bom.Event.removeNativeListener(o.element,o.type,o.listener);
}this._manager=this._registeredEvents=null;
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var l="qx.event.handler.Appear",k="disappear",j="appear";
qx.Class.define(l,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(i){qx.core.Object.call(this);
this.__fr=i;
this.__fs={};
qx.event.handler.Appear.__ft[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__ft:{},refresh:function(){var r=this.__ft;

for(var s in r){r[s].refresh();
}}},members:{__fr:null,__fs:null,canHandleEvent:function(f,g){},registerEvent:function(t,u,v){var w=qx.core.ObjectRegistry.toHashCode(t)+u;
var x=this.__fs;

if(x&&!x[w]){x[w]=t;
t.$$displayed=t.offsetWidth>0;
}},unregisterEvent:function(a,b,c){var d=qx.core.ObjectRegistry.toHashCode(a)+b;
var e=this.__fs;

if(!e){return;
}
if(e[d]){delete e[d];
}},refresh:function(){var p=this.__fs;
var q;

for(var o in p){q=p[o];
var m=q.offsetWidth>0;

if((!!q.$$displayed)!==m){q.$$displayed=m;
var n=qx.event.Registration.createEvent(m?j:k);
this.__fr.dispatchEvent(q,n);
}}}},destruct:function(){this.__fr=this.__fs=null;
delete qx.event.handler.Appear.__ft[this.$$hash];
},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var t="mshtml",s="",r="qx.client",q=">",p=" ",o="<",n="='",m="none",k="qx.bom.Element",h="' ",f="div",g="></";
qx.Class.define(k,{statics:{__fu:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__fv:{},getHelperElement:function(x){if(!x){x=window;
}var z=x.location.href;

if(!qx.bom.Element.__fv[z]){var y=qx.bom.Element.__fv[z]=x.document.createElement(f);
if(qx.bom.client.Engine.WEBKIT){y.style.display=m;
x.document.body.appendChild(y);
}}return qx.bom.Element.__fv[z];
},create:function(name,T,U){if(!U){U=window;
}
if(!name){throw new Error("The tag name is missing!");
}var W=this.__fu;
var V=s;

for(var Y in T){if(W[Y]){V+=Y+n+T[Y]+h;
}}var ba;
if(V!=s){if(qx.bom.client.Engine.MSHTML){ba=U.document.createElement(o+name+p+V+q);
}else{var X=qx.bom.Element.getHelperElement(U);
X.innerHTML=o+name+p+V+g+name+q;
ba=X.firstChild;
}}else{ba=U.document.createElement(name);
}
for(var Y in T){if(!W[Y]){qx.bom.element.Attribute.set(ba,Y,T[Y]);
}}return ba;
},empty:function(bf){return bf.innerHTML=s;
},addListener:function(bb,bc,bd,self,be){return qx.event.Registration.addListener(bb,bc,bd,self,be);
},removeListener:function(N,O,P,self,Q){return qx.event.Registration.removeListener(N,O,P,self,Q);
},removeListenerById:function(b,c){return qx.event.Registration.removeListenerById(b,c);
},hasListener:function(u,v,w){return qx.event.Registration.hasListener(u,v,w);
},focus:function(R){qx.event.Registration.getManager(R).getHandler(qx.event.handler.Focus).focus(R);
},blur:function(S){qx.event.Registration.getManager(S).getHandler(qx.event.handler.Focus).blur(S);
},activate:function(bg){qx.event.Registration.getManager(bg).getHandler(qx.event.handler.Focus).activate(bg);
},deactivate:function(A){qx.event.Registration.getManager(A).getHandler(qx.event.handler.Focus).deactivate(A);
},capture:function(d,e){qx.event.Registration.getManager(d).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(d,e);
},releaseCapture:function(a){qx.event.Registration.getManager(a).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(a);
},clone:function(B,C){var F;

if(C||(qx.core.Variant.isSet(r,t)&&!qx.xml.Document.isXmlDocument(B))){var J=qx.event.Registration.getManager(B);
var D=qx.dom.Hierarchy.getDescendants(B);
D.push(B);
}if(qx.core.Variant.isSet(r,t)){for(var i=0,l=D.length;i<l;i++){J.toggleAttachedEvents(D[i],false);
}}var F=B.cloneNode(true);
if(qx.core.Variant.isSet(r,t)){for(var i=0,l=D.length;i<l;i++){J.toggleAttachedEvents(D[i],true);
}}if(C===true){var M=qx.dom.Hierarchy.getDescendants(F);
M.push(F);
var E,H,L,G;

for(var i=0,K=D.length;i<K;i++){L=D[i];
E=J.serializeListeners(L);

if(E.length>0){H=M[i];

for(var j=0,I=E.length;j<I;j++){G=E[j];
J.addListener(H,G.type,G.handler,G.self,G.capture);
}}}}return F;
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Native.prototype._cloneNativeEvent.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var c=0;
var b=this._native;

if(b.shiftKey){c|=qx.event.type.Dom.SHIFT_MASK;
}
if(b.ctrlKey){c|=qx.event.type.Dom.CTRL_MASK;
}
if(b.altKey){c|=qx.event.type.Dom.ALT_MASK;
}
if(b.metaKey){c|=qx.event.type.Dom.META_MASK;
}return c;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){qx.event.type.Dom.prototype.init.call(this,d,e,null,true,true);
this._charCode=f;
return this;
},clone:function(b){var c=qx.event.type.Dom.prototype.clone.call(this,b);
c._charCode=this._charCode;
return c;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){qx.event.type.Dom.prototype.init.call(this,d,e,null,true,true);
this._identifier=f;
return this;
},clone:function(b){var c=qx.event.type.Dom.prototype.clone.call(this,b);
c._identifier=this._identifier;
return c;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var V="qx.client",U="blur",T="focus",S="mousedown",R="on",Q="mouseup",P="DOMFocusOut",O="DOMFocusIn",N="selectstart",M="onmousedown",bq="onfocusout",bp="onfocusin",bo="onmouseup",bn="onselectstart",bm="draggesture",bl="qx.event.handler.Focus",bk="_applyFocus",bj="deactivate",bi="textarea",bh="_applyActive",bd="input",be="focusin",bb="qxSelectable",bc="tabIndex",Y="off",ba="activate",W="mshtml",X="focusout",bf="qxKeepFocus",bg="qxKeepActive";
qx.Class.define(bl,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this._manager=b;
this._window=b.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bh,nullable:true},focus:{apply:bk,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__fw:null,__fx:null,__fy:null,__fz:null,__fA:null,__fB:null,__fC:null,__fD:null,__fE:null,__fF:null,canHandleEvent:function(bK,bL){},registerEvent:function(c,d,f){},unregisterEvent:function(C,D,E){},focus:function(bF){if(qx.core.Variant.isSet(V,W)){window.setTimeout(function(){try{bF.focus();
}catch(l){}},0);
}else{try{bF.focus();
}catch(A){}}this.setFocus(bF);
this.setActive(bF);
},activate:function(bv){this.setActive(bv);
},blur:function(m){try{m.blur();
}catch(q){}
if(this.getActive()===m){this.resetActive();
}
if(this.getFocus()===m){this.resetFocus();
}},deactivate:function(k){if(this.getActive()===k){this.resetActive();
}},tryActivate:function(bt){var bu=this.__fU(bt);

if(bu){this.setActive(bu);
}},__fG:function(t,u,v,w){var y=qx.event.Registration;
var x=y.createEvent(v,qx.event.type.Focus,[t,u,w]);
y.dispatchEvent(t,x);
},_windowFocused:true,__fH:function(){if(this._windowFocused){this._windowFocused=false;
this.__fG(this._window,null,U,false);
}},__fI:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fG(this._window,null,T,false);
}},_initObserver:qx.core.Variant.select(V,{"gecko":function(){this.__fw=qx.lang.Function.listener(this.__fO,this);
this.__fx=qx.lang.Function.listener(this.__fP,this);
this.__fy=qx.lang.Function.listener(this.__fN,this);
this.__fz=qx.lang.Function.listener(this.__fM,this);
this.__fA=qx.lang.Function.listener(this.__fJ,this);
this._document.addEventListener(S,this.__fw,true);
this._document.addEventListener(Q,this.__fx,true);
this._window.addEventListener(T,this.__fy,true);
this._window.addEventListener(U,this.__fz,true);
this._window.addEventListener(bm,this.__fA,true);
},"mshtml":function(){this.__fw=qx.lang.Function.listener(this.__fO,this);
this.__fx=qx.lang.Function.listener(this.__fP,this);
this.__fC=qx.lang.Function.listener(this.__fK,this);
this.__fD=qx.lang.Function.listener(this.__fL,this);
this.__fB=qx.lang.Function.listener(this.__fR,this);
this._document.attachEvent(M,this.__fw);
this._document.attachEvent(bo,this.__fx);
this._document.attachEvent(bp,this.__fC);
this._document.attachEvent(bq,this.__fD);
this._document.attachEvent(bn,this.__fB);
},"webkit":function(){this.__fw=qx.lang.Function.listener(this.__fO,this);
this.__fx=qx.lang.Function.listener(this.__fP,this);
this.__fD=qx.lang.Function.listener(this.__fL,this);
this.__fy=qx.lang.Function.listener(this.__fN,this);
this.__fz=qx.lang.Function.listener(this.__fM,this);
this.__fB=qx.lang.Function.listener(this.__fR,this);
this._document.addEventListener(S,this.__fw,true);
this._document.addEventListener(Q,this.__fx,true);
this._document.addEventListener(N,this.__fB,false);
this._window.addEventListener(P,this.__fD,true);
this._window.addEventListener(T,this.__fy,true);
this._window.addEventListener(U,this.__fz,true);
},"opera":function(){this.__fw=qx.lang.Function.listener(this.__fO,this);
this.__fx=qx.lang.Function.listener(this.__fP,this);
this.__fC=qx.lang.Function.listener(this.__fK,this);
this.__fD=qx.lang.Function.listener(this.__fL,this);
this._document.addEventListener(S,this.__fw,true);
this._document.addEventListener(Q,this.__fx,true);
this._window.addEventListener(O,this.__fC,true);
this._window.addEventListener(P,this.__fD,true);
}}),_stopObserver:qx.core.Variant.select(V,{"gecko":function(){this._document.removeEventListener(S,this.__fw,true);
this._document.removeEventListener(Q,this.__fx,true);
this._window.removeEventListener(T,this.__fy,true);
this._window.removeEventListener(U,this.__fz,true);
this._window.removeEventListener(bm,this.__fA,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,M,this.__fw);
qx.bom.Event.removeNativeListener(this._document,bo,this.__fx);
qx.bom.Event.removeNativeListener(this._document,bp,this.__fC);
qx.bom.Event.removeNativeListener(this._document,bq,this.__fD);
qx.bom.Event.removeNativeListener(this._document,bn,this.__fB);
},"webkit":function(){this._document.removeEventListener(S,this.__fw,true);
this._document.removeEventListener(N,this.__fB,false);
this._window.removeEventListener(O,this.__fC,true);
this._window.removeEventListener(P,this.__fD,true);
this._window.removeEventListener(T,this.__fy,true);
this._window.removeEventListener(U,this.__fz,true);
},"opera":function(){this._document.removeEventListener(S,this.__fw,true);
this._window.removeEventListener(O,this.__fC,true);
this._window.removeEventListener(P,this.__fD,true);
this._window.removeEventListener(T,this.__fy,true);
this._window.removeEventListener(U,this.__fz,true);
}}),__fJ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"gecko":function(e){if(!this.__fV(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fK:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"mshtml":function(e){this.__fI();
var bs=e.srcElement;
var br=this.__fT(bs);

if(br){this.setFocus(br);
}this.tryActivate(bs);
},"opera":function(e){var F=e.target;

if(F==this._document||F==this._window){this.__fI();

if(this.__fE){this.setFocus(this.__fE);
delete this.__fE;
}
if(this.__fF){this.setActive(this.__fF);
delete this.__fF;
}}else{this.setFocus(F);
this.tryActivate(F);
if(!this.__fV(F)){F.selectionStart=0;
F.selectionEnd=0;
}}},"default":null})),__fL:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"mshtml":function(e){if(!e.toElement){this.__fH();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bz=e.target;

if(bz===this.getFocus()){this.resetFocus();
}
if(bz===this.getActive()){this.resetActive();
}},"opera":function(e){var bC=e.target;

if(bC==this._document){this.__fH();
this.__fE=this.getFocus();
this.__fF=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bC===this.getFocus()){this.resetFocus();
}
if(bC===this.getActive()){this.resetActive();
}}},"default":null})),__fM:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__fH();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__fH();
this.__fE=this.getFocus();
this.__fF=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__fN:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"gecko":function(e){var bw=e.target;

if(bw===this._window||bw===this._document){this.__fI();
bw=this._body;
}this.setFocus(bw);
this.tryActivate(bw);
},"webkit":function(e){var by=e.target;

if(by===this._window||by===this._document){this.__fI();

if(this.__fE){this.setFocus(this.__fE);
delete this.__fE;
}
if(this.__fF){this.setActive(this.__fF);
delete this.__fF;
}}else{this.setFocus(by);
this.tryActivate(by);
}},"default":null})),__fO:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"gecko":function(e){var B=this.__fT(e.target);

if(!B){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bE=e.srcElement;
var bD=this.__fT(bE);

if(bD){if(!this.__fV(bE)){bE.unselectable=R;
try{document.selection.empty();
}catch(e){}try{bD.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__fV(bE)){bE.unselectable=R;
}}},"webkit":function(e){var p=e.target;
var o=this.__fT(p);

if(o){this.setFocus(o);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var L=e.target;
var J=this.__fT(L);

if(!this.__fV(L)){qx.bom.Event.preventDefault(e);
if(J){var K=this.getFocus();

if(K&&K.selectionEnd){K.selectionStart=0;
K.selectionEnd=0;
K.blur();
}if(J){this.setFocus(J);
}}}else if(J){this.setFocus(J);
}},"default":null})),__fP:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"mshtml":function(e){var a=e.srcElement;

if(a.unselectable){a.unselectable=Y;
}this.tryActivate(this.__fQ(a));
},"gecko":function(e){var z=e.target;

while(z&&z.offsetWidth===undefined){z=z.parentNode;
}
if(z){this.tryActivate(z);
}},"webkit|opera":function(e){this.tryActivate(this.__fQ(e.target));
},"default":null})),__fQ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"mshtml|webkit":function(bM){var bN=this.getFocus();

if(bN&&bM!=bN&&(bN.nodeName.toLowerCase()===bd||bN.nodeName.toLowerCase()===bi)){bM=bN;
}return bM;
},"default":function(j){return j;
}})),__fR:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"mshtml|webkit":function(e){var n=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__fV(n)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fS:function(G){var H=qx.bom.element.Attribute.get(G,bc);

if(H>=1){return true;
}var I=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(H>=0&&I[G.tagName]){return true;
}return false;
},__fT:function(bx){while(bx&&bx.nodeType===1){if(bx.getAttribute(bf)==R){return null;
}
if(this.__fS(bx)){return bx;
}bx=bx.parentNode;
}return this._body;
},__fU:function(bG){var bH=bG;

while(bG&&bG.nodeType===1){if(bG.getAttribute(bg)==R){return null;
}bG=bG.parentNode;
}return bH;
},__fV:function(bA){while(bA&&bA.nodeType===1){var bB=bA.getAttribute(bb);

if(bB!=null){return bB===R;
}bA=bA.parentNode;
}return true;
},_applyActive:function(r,s){if(s){this.__fG(s,r,bj,true);
}
if(r){this.__fG(r,s,ba,true);
}},_applyFocus:function(bI,bJ){if(bJ){this.__fG(bJ,bI,X,true);
}
if(bI){this.__fG(bI,bJ,be,true);
}if(bJ){this.__fG(bJ,bI,U,false);
}
if(bI){this.__fG(bI,bJ,T,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fW=null;
},defer:function(g){qx.event.Registration.addHandler(g);
var h=g.FOCUSABLE_ELEMENTS;

for(var i in h){h[i.toUpperCase()]=1;
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
qx.Class.define(i,{statics:{__fX:{names:{"class":f,"for":B,html:u,text:qx.core.Variant.isSet(l,p)?v:e,colspan:o,rowspan:h,valign:g,datetime:r,accesskey:j,tabindex:t,maxlength:s,readonly:k,longdesc:A,cellpadding:q,cellspacing:z,frameborder:y,usemap:w},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:n,className:n,innerHTML:n,innerText:n,textContent:n,htmlFor:n,tabIndex:0,maxLength:qx.core.Variant.select(l,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(D){var E=[];
var G=this.__fX.runtime;

for(var F in D){if(!G[F]){E.push(F,x,D[F],C);
}}return E.join(n);
},get:qx.core.Variant.select(l,{"mshtml":function(H,name){var J=this.__fX;
var I;
name=J.names[name]||name;
if(J.original[name]){I=H.getAttribute(name,2);
}else if(J.property[name]){I=H[name];

if(typeof J.propertyDefault[name]!==m&&I==J.propertyDefault[name]){if(typeof J.bools[name]===m){return null;
}else{return I;
}}}else{I=H.getAttribute(name);
}if(J.bools[name]){return !!I;
}return I;
},"default":function(b,name){var d=this.__fX;
var c;
name=d.names[name]||name;
if(d.property[name]){c=b[name];

if(typeof d.propertyDefault[name]!==m&&c==d.propertyDefault[name]){if(typeof d.bools[name]===m){return null;
}else{return c;
}}}else{c=b.getAttribute(name);
}if(d.bools[name]){return !!c;
}return c;
}}),set:function(K,name,L){var M=this.__fX;
name=M.names[name]||name;
if(M.bools[name]){L=!!L;
}if(M.property[name]&&(!(K[name]===undefined)||M.qxProperties[name])){if(L==null){if(M.removeableProperties[name]){K.removeAttribute(name);
return;
}else if(typeof M.propertyDefault[name]!==m){L=M.propertyDefault[name];
}}K[name]=L;
}else{if(L===true){K.setAttribute(name,name);
}else if(L===false||L===null){K.removeAttribute(name);
}else{K.setAttribute(name,L);
}}},reset:function(a,name){this.set(a,name,null);
}}});
})();
(function(){var j="left",i="right",h="middle",g="qx.client",f="dblclick",e="click",d="none",c="contextmenu",b="qx.event.type.Mouse";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{init:function(m,n,o,p,q){qx.event.type.Dom.prototype.init.call(this,m,n,o,p,q);

if(!o){this._relatedTarget=qx.bom.Event.getRelatedTarget(m);
}return this;
},_cloneNativeEvent:function(k,l){var l=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,k,l);
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
return l;
},__fY:qx.core.Variant.select(g,{"mshtml":{1:j,2:i,4:h},"default":{0:j,2:i,1:h}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:case f:return j;
case c:return i;
default:return this.__fY[this._native.button]||d;
}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(g,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(a);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(g,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
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
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var i="qx.client",h="qx.bom.Viewport";
qx.Class.define(h,{statics:{getWidth:qx.core.Variant.select(i,{"opera":function(d){if(qx.bom.client.Engine.VERSION<9.5){return (d||window).document.body.clientWidth;
}else{var e=(d||window).document;
return qx.bom.Document.isStandardMode(d)?e.documentElement.clientWidth:e.body.clientWidth;
}},"webkit":function(s){if(qx.bom.client.Engine.VERSION<523.15){return (s||window).innerWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"default":function(q){var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientWidth:r.body.clientWidth;
}}),getHeight:qx.core.Variant.select(i,{"opera":function(k){if(qx.bom.client.Engine.VERSION<9.5){return (k||window).document.body.clientHeight;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}},"webkit":function(f){if(qx.bom.client.Engine.VERSION<523.15){return (f||window).innerHeight;
}else{var g=(f||window).document;
return qx.bom.Document.isStandardMode(f)?g.documentElement.clientHeight:g.body.clientHeight;
}},"default":function(o){var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientHeight:p.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(i,{"mshtml":function(m){var n=(m||window).document;
return n.documentElement.scrollLeft||n.body.scrollLeft;
},"default":function(c){return (c||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(i,{"mshtml":function(a){var b=(a||window).document;
return b.documentElement.scrollTop||b.body.scrollTop;
},"default":function(j){return (j||window).pageYOffset;
}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(k){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (k||window).document.compatMode!==f;
}},"webkit":function(o){if(document.compatMode===undefined){var p=(o||window).document.createElement(a);
p.style.cssText=e;
return p.style.width===c?true:false;
}else{return (o||window).document.compatMode!==f;
}},"default":function(g){return (g||window).document.compatMode!==f;
}}),isStandardMode:function(q){return !this.isQuirksMode(q);
},getWidth:function(l){var m=(l||window).document;
var n=qx.bom.Viewport.getWidth(l);
var scroll=this.isStandardMode(l)?m.documentElement.scrollWidth:m.body.scrollWidth;
return Math.max(scroll,n);
},getHeight:function(h){var i=(h||window).document;
var j=qx.bom.Viewport.getHeight(h);
var scroll=this.isStandardMode(h)?i.documentElement.scrollHeight:i.body.scrollHeight;
return Math.max(scroll,j);
}}});
})();
(function(){var k="qx.client",j="ie",i="msie",h="android",g="operamini",f="mobile chrome",e=")(/| )([0-9]+\.[0-9])",d="iemobile",c="opera mobi",b="Mobile Safari",y="operamobile",x="mobile safari",w="IEMobile|Maxthon|MSIE",v="qx.bom.client.Browser",u="opera mini",t="(",s="opera",r="mshtml",q="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",o="5.0",l="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",m="Mobile/";
qx.Bootstrap.define(v,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__ga:function(B){var C=navigator.userAgent;
var E=new RegExp(t+B+e);
var F=C.match(E);

if(!F){return;
}var name=F[1].toLowerCase();
var D=F[3];
if(C.match(/Version(\/| )([0-9]+\.[0-9])/)){D=RegExp.$2;
}
if(qx.core.Variant.isSet(k,n)){if(name===h){name=f;
}else if(C.indexOf(b)!==-1||C.indexOf(m)!==-1){name=x;
}}else if(qx.core.Variant.isSet(k,r)){if(name===i){name=j;
if(qx.bom.client.System.WINCE&&name===j){name=d;
D=o;
}}}else if(qx.core.Variant.isSet(k,s)){if(name===c){name=y;
}else if(name===u){name=g;
}}this.NAME=name;
this.FULLVERSION=D;
this.VERSION=parseFloat(D,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(k,{"webkit":function(a){a.__ga(p);
},"gecko":function(G){G.__ga(l);
},"mshtml":function(z){z.__ga(w);
},"opera":function(A){A.__ga(q);
}})});
})();
(function(){var P="qx.client",O="qx.dom.Hierarchy",N="previousSibling",M="*",L="nextSibling",K="parentNode";
qx.Class.define(O,{statics:{getNodeIndex:function(D){var E=0;

while(D&&(D=D.previousSibling)){E++;
}return E;
},getElementIndex:function(f){var g=0;
var h=qx.dom.Node.ELEMENT;

while(f&&(f=f.previousSibling)){if(f.nodeType==h){g++;
}}return g;
},getNextElementSibling:function(b){while(b&&(b=b.nextSibling)&&!qx.dom.Node.isElement(b)){continue;
}return b||null;
},getPreviousElementSibling:function(V){while(V&&(V=V.previousSibling)&&!qx.dom.Node.isElement(V)){continue;
}return V||null;
},contains:qx.core.Variant.select(P,{"webkit|mshtml|opera":function(p,q){if(qx.dom.Node.isDocument(p)){var r=qx.dom.Node.getDocument(q);
return p&&r==p;
}else if(qx.dom.Node.isDocument(q)){return false;
}else{return p.contains(q);
}},"gecko":function(c,d){return !!(c.compareDocumentPosition(d)&16);
},"default":function(T,U){while(U){if(T==U){return true;
}U=U.parentNode;
}return false;
}}),isRendered:function(I){if(!I.offsetParent){return false;
}var J=I.ownerDocument||I.document;
if(J.body.contains){return J.body.contains(I);
}if(J.compareDocumentPosition){return !!(J.compareDocumentPosition(I)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(u,v){return this.contains(v,u);
},getCommonParent:qx.core.Variant.select(P,{"mshtml|opera":function(j,k){if(j===k){return j;
}
while(j&&qx.dom.Node.isElement(j)){if(j.contains(k)){return j;
}j=j.parentNode;
}return null;
},"default":function(x,y){if(x===y){return x;
}var z={};
var C=qx.core.ObjectRegistry;
var B,A;

while(x||y){if(x){B=C.toHashCode(x);

if(z[B]){return z[B];
}z[B]=x;
x=x.parentNode;
}
if(y){A=C.toHashCode(y);

if(z[A]){return z[A];
}z[A]=y;
y=y.parentNode;
}}return null;
}}),getAncestors:function(o){return this._recursivelyCollect(o,K);
},getChildElements:function(G){G=G.firstChild;

if(!G){return [];
}var H=this.getNextSiblings(G);

if(G.nodeType===1){H.unshift(G);
}return H;
},getDescendants:function(s){return qx.lang.Array.fromCollection(s.getElementsByTagName(M));
},getFirstDescendant:function(a){a=a.firstChild;

while(a&&a.nodeType!=1){a=a.nextSibling;
}return a;
},getLastDescendant:function(e){e=e.lastChild;

while(e&&e.nodeType!=1){e=e.previousSibling;
}return e;
},getPreviousSiblings:function(F){return this._recursivelyCollect(F,N);
},getNextSiblings:function(w){return this._recursivelyCollect(w,L);
},_recursivelyCollect:function(l,m){var n=[];

while(l=l[m]){if(l.nodeType==1){n.push(l);
}}return n;
},getSiblings:function(i){return this.getPreviousSiblings(i).reverse().concat(this.getNextSiblings(i));
},isEmpty:function(t){t=t.firstChild;

while(t){if(t.nodeType===qx.dom.Node.ELEMENT||t.nodeType===qx.dom.Node.TEXT){return false;
}t=t.nextSibling;
}return true;
},cleanWhitespace:function(Q){var R=Q.firstChild;

while(R){var S=R.nextSibling;

if(R.nodeType==3&&!/\S/.test(R.nodeValue)){Q.removeChild(R);
}R=S;
}}}});
})();
(function(){var e="qx.client",d="qx.event.type.Drag";
qx.Class.define(d,{extend:qx.event.type.Event,members:{init:function(n,o){qx.event.type.Event.prototype.init.call(this,true,n);

if(o){this._native=o.getNativeEvent()||null;
this._originalTarget=o.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(l){var m=qx.event.type.Event.prototype.clone.call(this,l);
m._native=this._native;
return m;
},getDocumentLeft:qx.core.Variant.select(e,{"mshtml":function(){if(this._native==null){return 0;
}var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(e,{"mshtml":function(){if(this._native==null){return 0;
}var h=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(h);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(j){this.getManager().addType(j);
},addAction:function(g){this.getManager().addAction(g);
},supportsType:function(c){return this.getManager().supportsType(c);
},supportsAction:function(k){return this.getManager().supportsAction(k);
},addData:function(a,b){this.getManager().addData(a,b);
},getData:function(i){return this.getManager().getData(i);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var s="losecapture",r="qx.client",q="blur",p="focus",o="click",n="qx.event.dispatch.MouseCapture",m="capture",l="scroll";
qx.Class.define(n,{extend:qx.event.dispatch.AbstractBubbling,construct:function(e,f){qx.event.dispatch.AbstractBubbling.call(this,e);
this.__ge=e.getWindow();
this.__gf=f;
e.addListener(this.__ge,q,this.releaseCapture,this);
e.addListener(this.__ge,p,this.releaseCapture,this);
e.addListener(this.__ge,l,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__gf:null,__gg:null,__gh:true,__ge:null,_getParent:function(d){return d.parentNode;
},canDispatchEvent:function(j,event,k){return (this.__gg&&this.__gi[k]);
},dispatchEvent:function(g,event,h){if(h==o){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__gh||!qx.dom.Hierarchy.contains(this.__gg,g)){g=this.__gg;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,g,event,h);
},__gi:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(t,u){var u=u!==false;

if(this.__gg===t&&this.__gh==u){return;
}
if(this.__gg){this.releaseCapture();
}this.nativeSetCapture(t,u);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(t,s,function(){qx.bom.Event.removeNativeListener(t,s,arguments.callee);
self.releaseCapture();
});
}this.__gh=u;
this.__gg=t;
this.__gf.fireEvent(t,m,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__gg;
},releaseCapture:function(){var v=this.__gg;

if(!v){return;
}this.__gg=null;
this.__gf.fireEvent(v,s,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(v);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(r,{"mshtml":function(b,c){b.setCapture(c!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(r,{"mshtml":function(a){a.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__gg=this.__ge=this.__gf=null;
},defer:function(i){qx.event.Registration.addDispatcher(i);
}});
})();
(function(){var v="qx.client",u="",t="mshtml",s="'",r="SelectionLanguage",q="qx.xml.Document",p=" />",o="MSXML2.DOMDocument.3.0",n='<\?xml version="1.0" encoding="utf-8"?>\n<',m="MSXML2.XMLHTTP.3.0",g="MSXML2.XMLHTTP.6.0",k=" xmlns='",j="text/xml",f="XPath",e="MSXML2.DOMDocument.6.0",h="HTML";
qx.Class.define(q,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(w){if(w.nodeType===9){return w.documentElement.nodeName!==h;
}else if(w.ownerDocument){return this.isXmlDocument(w.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(v,{"mshtml":function(x,y){var z=new ActiveXObject(this.DOMDOC);
z.setProperty(r,f);

if(y){var A=n;
A+=y;

if(x){A+=k+x+s;
}A+=p;
z.loadXML(A);
}return z;
},"default":function(a,b){return document.implementation.createDocument(a||u,b||u,null);
}}),fromString:qx.core.Variant.select(v,{"mshtml":function(F){var G=qx.xml.Document.create();
G.loadXML(F);
return G;
},"default":function(c){var d=new DOMParser();
return d.parseFromString(c,j);
}})},defer:function(B){if(qx.core.Variant.isSet(v,t)){var C=[e,o];
var D=[g,m];

for(var i=0,l=C.length;i<l;i++){try{new ActiveXObject(C[i]);
new ActiveXObject(D[i]);
}catch(E){continue;
}B.DOMDOC=C[i];
B.XMLHTTP=D[i];
break;
}}}});
})();
(function(){var G="visible",F="scroll",E="borderBottomWidth",D="borderTopWidth",C="left",B="borderLeftWidth",A="bottom",z="top",y="right",x="qx.bom.element.Scroll",w="borderRightWidth";
qx.Class.define(x,{statics:{intoViewX:function(a,stop,b){var parent=a.parentNode;
var g=qx.dom.Node.getDocument(a);
var c=g.body;
var o,m,j;
var q,h,r;
var k,s,v;
var t,e,n,d;
var i,u,l;
var f=b===C;
var p=b===y;
stop=stop?stop.parentNode:g;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===c||qx.bom.element.Overflow.getY(parent)!=G)){if(parent===c){m=parent.scrollLeft;
j=m+qx.bom.Viewport.getWidth();
q=qx.bom.Viewport.getWidth();
h=parent.clientWidth;
r=parent.scrollWidth;
k=0;
s=0;
v=0;
}else{o=qx.bom.element.Location.get(parent);
m=o.left;
j=o.right;
q=parent.offsetWidth;
h=parent.clientWidth;
r=parent.scrollWidth;
k=parseInt(qx.bom.element.Style.get(parent,B),10)||0;
s=parseInt(qx.bom.element.Style.get(parent,w),10)||0;
v=q-h-k-s;
}t=qx.bom.element.Location.get(a);
e=t.left;
n=t.right;
d=a.offsetWidth;
i=e-m-k;
u=n-j+s;
l=0;
if(f){l=i;
}else if(p){l=u+v;
}else if(i<0||d>h){l=i;
}else if(u>0){l=u+v;
}parent.scrollLeft+=l;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,F);
}}
if(parent===c){break;
}parent=parent.parentNode;
}},intoViewY:function(H,stop,I){var parent=H.parentNode;
var O=qx.dom.Node.getDocument(H);
var J=O.body;
var W,K,S;
var Y,V,Q;
var M,N,L;
var bb,bc,X,R;
var U,P,bd;
var ba=I===z;
var T=I===A;
stop=stop?stop.parentNode:O;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===J||qx.bom.element.Overflow.getY(parent)!=G)){if(parent===J){K=parent.scrollTop;
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
M=parseInt(qx.bom.element.Style.get(parent,D),10)||0;
N=parseInt(qx.bom.element.Style.get(parent,E),10)||0;
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
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,F);
}}
if(parent===J){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var G="",F="qx.client",E="hidden",D="-moz-scrollbars-none",C="overflow",B=";",A="overflowY",z=":",y="overflowX",x="overflow:",S="none",R="scroll",Q="borderLeftStyle",P="borderRightStyle",O="div",N="borderRightWidth",M="overflow-y",L="borderLeftWidth",K="-moz-scrollbars-vertical",J="100px",H="qx.bom.element.Overflow",I="overflow-x";
qx.Class.define(H,{statics:{__gj:null,getScrollbarWidth:function(){if(this.__gj!==null){return this.__gj;
}var l=qx.bom.element.Style;
var n=function(h,i){return parseInt(l.get(h,i))||0;
};
var o=function(bJ){return (l.get(bJ,P)==S?0:n(bJ,N));
};
var m=function(bU){return (l.get(bU,Q)==S?0:n(bU,L));
};
var q=qx.core.Variant.select(F,{"mshtml":function(ca){if(l.get(ca,A)==E||ca.clientWidth==0){return o(ca);
}return Math.max(0,ca.offsetWidth-ca.clientLeft-ca.clientWidth);
},"default":function(bm){if(bm.clientWidth==0){var bn=l.get(bm,C);
var bo=(bn==R||bn==K?16:0);
return Math.max(0,o(bm)+bo);
}return Math.max(0,(bm.offsetWidth-bm.clientWidth-m(bm)));
}});
var p=function(bA){return q(bA)-o(bA);
};
var t=document.createElement(O);
var s=t.style;
s.height=s.width=J;
s.overflow=R;
document.body.appendChild(t);
var c=p(t);
this.__gj=c?c:16;
document.body.removeChild(t);
return this.__gj;
},_compile:qx.core.Variant.select(F,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bK,bL){if(bL==E){bL=D;
}return x+bL+B;
}:
function(bh,bi){return bh+z+bi+B;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(V,W){return x+W+B;
}:
function(ce,cf){return ce+z+cf+B;
},"default":function(bP,bQ){return bP+z+bQ+B;
}}),compileX:function(bM){return this._compile(I,bM);
},compileY:function(bz){return this._compile(M,bz);
},getX:qx.core.Variant.select(F,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bE,bF){var bG=qx.bom.element.Style.get(bE,C,bF,false);

if(bG===D){bG=E;
}return bG;
}:
function(f,g){return qx.bom.element.Style.get(f,y,g,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(a,b){return qx.bom.element.Style.get(a,C,b,false);
}:
function(bH,bI){return qx.bom.element.Style.get(bH,y,bI,false);
},"default":function(j,k){return qx.bom.element.Style.get(j,y,k,false);
}}),setX:qx.core.Variant.select(F,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bf,bg){if(bg==E){bg=D;
}bf.style.overflow=bg;
}:
function(bN,bO){bN.style.overflowX=bO;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ba,bb){ba.style.overflow=bb;
}:
function(T,U){T.style.overflowX=U;
},"default":function(bS,bT){bS.style.overflowX=bT;
}}),resetX:qx.core.Variant.select(F,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bD){bD.style.overflow=G;
}:
function(bX){bX.style.overflowX=G;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bv,bw){bv.style.overflow=G;
}:
function(bt,bu){bt.style.overflowX=G;
},"default":function(bl){bl.style.overflowX=G;
}}),getY:qx.core.Variant.select(F,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cb,cc){var cd=qx.bom.element.Style.get(cb,C,cc,false);

if(cd===D){cd=E;
}return cd;
}:
function(r,u){return qx.bom.element.Style.get(r,A,u,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(X,Y){return qx.bom.element.Style.get(X,C,Y,false);
}:
function(br,bs){return qx.bom.element.Style.get(br,A,bs,false);
},"default":function(v,w){return qx.bom.element.Style.get(v,A,w,false);
}}),setY:qx.core.Variant.select(F,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bd,be){if(be===E){be=D;
}bd.style.overflow=be;
}:
function(bV,bW){bV.style.overflowY=bW;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bx,by){bx.style.overflow=by;
}:
function(bB,bC){bB.style.overflowY=bC;
},"default":function(bp,bq){bp.style.overflowY=bq;
}}),resetY:qx.core.Variant.select(F,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bY){bY.style.overflow=G;
}:
function(bc){bc.style.overflowY=G;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bj,bk){bj.style.overflow=G;
}:
function(d,e){d.style.overflowY=G;
},"default":function(bR){bR.style.overflowY=G;
}})}});
})();
(function(){var v="auto",u="px",t=",",s="clip:auto;",r="rect(",q=");",p="",o=")",n="qx.bom.element.Clip",m="string",j="rect(auto)",l="clip:rect(",k="clip",i="rect(auto,auto,auto,auto)";
qx.Class.define(n,{statics:{compile:function(w){if(!w){return s;
}var B=w.left;
var top=w.top;
var A=w.width;
var z=w.height;
var x,y;

if(B==null){x=(A==null?v:A+u);
B=v;
}else{x=(A==null?v:B+A+u);
B=B+u;
}
if(top==null){y=(z==null?v:z+u);
top=v;
}else{y=(z==null?v:top+z+u);
top=top+u;
}return l+top+t+x+t+y+t+B+q;
},get:function(C,D){var F=qx.bom.element.Style.get(C,k,D,false);
var K,top,I,H;
var E,G;

if(typeof F===m&&F!==v&&F!==p){F=qx.lang.String.trim(F);
if(/\((.*)\)/.test(F)){var J=RegExp.$1.split(t);
top=qx.lang.String.trim(J[0]);
E=qx.lang.String.trim(J[1]);
G=qx.lang.String.trim(J[2]);
K=qx.lang.String.trim(J[3]);
if(K===v){K=null;
}
if(top===v){top=null;
}
if(E===v){E=null;
}
if(G===v){G=null;
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
},set:function(b,c){if(!c){b.style.clip=i;
return;
}var h=c.left;
var top=c.top;
var g=c.width;
var f=c.height;
var d,e;

if(h==null){d=(g==null?v:g+u);
h=v;
}else{d=(g==null?v:h+g+u);
h=h+u;
}
if(top==null){e=(f==null?v:f+u);
top=v;
}else{e=(f==null?v:top+f+u);
top=top+u;
}b.style.clip=r+top+t+d+t+e+t+h+o;
},reset:function(a){a.style.clip=qx.bom.client.Engine.MSHTML?j:v;
}}});
})();
(function(){var n="n-resize",m="e-resize",l="nw-resize",k="ne-resize",j="",i="cursor:",h="qx.client",g=";",f="qx.bom.element.Cursor",e="cursor",d="hand";
qx.Class.define(f,{statics:{__gk:qx.core.Variant.select(h,{"mshtml":{"cursor":d,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"opera":{"col-resize":m,"row-resize":n,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"default":{}}),compile:function(o){return i+(this.__gk[o]||o)+g;
},get:function(a,b){return qx.bom.element.Style.get(a,e,b,false);
},set:function(p,q){p.style.cursor=this.__gk[q]||q;
},reset:function(c){c.style.cursor=j;
}}});
})();
(function(){var u="",t="qx.client",s=";",r="filter",q="opacity:",p="opacity",o="MozOpacity",n=");",m=")",l="zoom:1;filter:alpha(opacity=",i="qx.bom.element.Opacity",k="alpha(opacity=",j="-moz-opacity:";
qx.Class.define(i,{statics:{compile:qx.core.Variant.select(t,{"mshtml":function(D){if(D>=1){return u;
}
if(D<0.00001){D=0;
}return l+(D*100)+n;
},"gecko":function(f){if(f==1){f=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return j+f+s;
}else{return q+f+s;
}},"default":function(G){if(G==1){return u;
}return q+G+s;
}}),set:qx.core.Variant.select(t,{"mshtml":function(y,z){var A=qx.bom.element.Style.get(y,r,qx.bom.element.Style.COMPUTED_MODE,false);
if(z>=1){y.style.filter=A.replace(/alpha\([^\)]*\)/gi,u);
return;
}
if(z<0.00001){z=0;
}if(!y.currentStyle||!y.currentStyle.hasLayout){y.style.zoom=1;
}y.style.filter=A.replace(/alpha\([^\)]*\)/gi,u)+k+z*100+m;
},"gecko":function(g,h){if(h==1){h=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){g.style.MozOpacity=h;
}else{g.style.opacity=h;
}},"default":function(E,F){if(F==1){F=u;
}E.style.opacity=F;
}}),reset:qx.core.Variant.select(t,{"mshtml":function(B){var C=qx.bom.element.Style.get(B,r,qx.bom.element.Style.COMPUTED_MODE,false);
B.style.filter=C.replace(/alpha\([^\)]*\)/gi,u);
},"gecko":function(e){if(qx.bom.client.Engine.VERSION<1.7){e.style.MozOpacity=u;
}else{e.style.opacity=u;
}},"default":function(a){a.style.opacity=u;
}}),get:qx.core.Variant.select(t,{"mshtml":function(H,I){var J=qx.bom.element.Style.get(H,r,I,false);

if(J){var K=J.match(/alpha\(opacity=(.*)\)/);

if(K&&K[1]){return parseFloat(K[1])/100;
}}return 1.0;
},"gecko":function(b,c){var d=qx.bom.element.Style.get(b,qx.bom.client.Engine.VERSION<1.7?o:p,c,false);

if(d==0.999999){d=1.0;
}
if(d!=null){return parseFloat(d);
}return 1.0;
},"default":function(v,w){var x=qx.bom.element.Style.get(v,p,w,false);

if(x!=null){return parseFloat(x);
}return 1.0;
}})}});
})();
(function(){var t="qx.client",s="",r="boxSizing",q="box-sizing",p=":",o="border-box",n="qx.bom.element.BoxSizing",m="KhtmlBoxSizing",k="-moz-box-sizing",j="WebkitBoxSizing",f=";",h="-khtml-box-sizing",g="content-box",e="-webkit-box-sizing",d="MozBoxSizing";
qx.Class.define(n,{statics:{__gl:qx.core.Variant.select(t,{"mshtml":null,"webkit":[r,m,j],"gecko":[d],"opera":[r]}),__gm:qx.core.Variant.select(t,{"mshtml":null,"webkit":[q,h,e],"gecko":[k],"opera":[q]}),__gn:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__go:function(z){var A=this.__gn;
return A.tags[z.tagName.toLowerCase()]||A.types[z.type];
},compile:qx.core.Variant.select(t,{"mshtml":function(D){{};
},"default":function(E){var G=this.__gm;
var F=s;

if(G){for(var i=0,l=G.length;i<l;i++){F+=G[i]+p+E+f;
}}return F;
}}),get:qx.core.Variant.select(t,{"mshtml":function(C){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(C))){if(!this.__go(C)){return g;
}}return o;
},"default":function(a){var c=this.__gl;
var b;

if(c){for(var i=0,l=c.length;i<l;i++){b=qx.bom.element.Style.get(a,c[i],null,false);

if(b!=null&&b!==s){return b;
}}}return s;
}}),set:qx.core.Variant.select(t,{"mshtml":function(u,v){{};
},"default":function(w,x){var y=this.__gl;

if(y){for(var i=0,l=y.length;i<l;i++){w.style[y[i]]=x;
}}}}),reset:function(B){this.set(B,s);
}}});
})();
(function(){var o="",n="qx.client",m="userSelect",k="style",h="MozUserModify",g="px",f="float",e="borderImage",d="styleFloat",c="appearance",H="pixelHeight",G='Ms',F=":",E="cssFloat",D="pixelTop",C="pixelLeft",B='O',A="qx.bom.element.Style",z='Khtml',y='string',v="pixelRight",w='Moz',t="pixelWidth",u="pixelBottom",r=";",s="textOverflow",p="userModify",q='Webkit',x="WebkitUserModify";
qx.Class.define(A,{statics:{__gp:function(){var bu=[c,m,s,e];
var by={};
var bv=document.documentElement.style;
var bz=[w,q,z,B,G];

for(var i=0,l=bu.length;i<l;i++){var bA=bu[i];
var bw=bA;

if(bv[bA]){by[bw]=bA;
continue;
}bA=qx.lang.String.firstUp(bA);

for(var j=0,bB=bz.length;j<bB;j++){var bx=bz[j]+bA;

if(typeof bv[bx]==y){by[bw]=bx;
break;
}}}this.__gq=by;
this.__gq[p]=qx.core.Variant.select(n,{"gecko":h,"webkit":x,"default":m});
this.__gr={};

for(var bw in by){this.__gr[bw]=this.__gv(by[bw]);
}this.__gq[f]=qx.core.Variant.select(n,{"mshtml":d,"default":E});
},__gs:{width:t,height:H,left:C,right:v,top:D,bottom:u},__gt:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(bo){var bq=[];
var bs=this.__gt;
var br=this.__gr;
var name,bp;

for(name in bo){bp=bo[name];

if(bp==null){continue;
}name=br[name]||name;
if(bs[name]){bq.push(bs[name].compile(bp));
}else{bq.push(this.__gv(name),F,bp,r);
}}return bq.join(o);
},__gu:{},__gv:function(R){var S=this.__gu;
var T=S[R];

if(!T){T=S[R]=qx.lang.String.hyphenate(R);
}return T;
},setCss:qx.core.Variant.select(n,{"mshtml":function(P,Q){P.style.cssText=Q;
},"default":function(a,b){a.setAttribute(k,b);
}}),getCss:qx.core.Variant.select(n,{"mshtml":function(bD){return bD.style.cssText.toLowerCase();
},"default":function(bn){return bn.getAttribute(k);
}}),isPropertySupported:function(bC){return (this.__gt[bC]||this.__gq[bC]||bC in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(U,name,V,W){{};
name=this.__gq[name]||name;
if(W!==false&&this.__gt[name]){return this.__gt[name].set(U,V);
}else{U.style[name]=V!==null?V:o;
}},setStyles:function(X,Y,ba){{};
var bd=this.__gq;
var bf=this.__gt;
var bb=X.style;

for(var be in Y){var bc=Y[be];
var name=bd[be]||be;

if(bc===undefined){if(ba!==false&&bf[name]){bf[name].reset(X);
}else{bb[name]=o;
}}else{if(ba!==false&&bf[name]){bf[name].set(X,bc);
}else{bb[name]=bc!==null?bc:o;
}}}},reset:function(I,name,J){name=this.__gq[name]||name;
if(J!==false&&this.__gt[name]){return this.__gt[name].reset(I);
}else{I.style[name]=o;
}},get:qx.core.Variant.select(n,{"mshtml":function(bg,name,bh,bi){name=this.__gq[name]||name;
if(bi!==false&&this.__gt[name]){return this.__gt[name].get(bg,bh);
}if(!bg.currentStyle){return bg.style[name]||o;
}switch(bh){case this.LOCAL_MODE:return bg.style[name]||o;
case this.CASCADED_MODE:return bg.currentStyle[name]||o;
default:var bm=bg.currentStyle[name]||o;
if(/^-?[\.\d]+(px)?$/i.test(bm)){return bm;
}var bl=this.__gs[name];

if(bl){var bj=bg.style[name];
bg.style[name]=bm||0;
var bk=bg.style[bl]+g;
bg.style[name]=bj;
return bk;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bm)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bm;
}},"default":function(K,name,L,M){name=this.__gq[name]||name;
if(M!==false&&this.__gt[name]){return this.__gt[name].get(K,L);
}switch(L){case this.LOCAL_MODE:return K.style[name]||o;
case this.CASCADED_MODE:if(K.currentStyle){return K.currentStyle[name]||o;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var N=qx.dom.Node.getDocument(K);
var O=N.defaultView.getComputedStyle(K,null);
return O?O[name]:o;
}}})},defer:function(bt){bt.__gp();
}});
})();
(function(){var X="borderTopWidth",W="borderLeftWidth",V="marginTop",U="marginLeft",T="scroll",S="qx.client",R="border-box",Q="borderBottomWidth",P="borderRightWidth",O="auto",bn="padding",bm="qx.bom.element.Location",bl="paddingLeft",bk="static",bj="marginBottom",bi="visible",bh="BODY",bg="paddingBottom",bf="paddingTop",be="marginRight",bc="position",bd="margin",ba="overflow",bb="paddingRight",Y="border";
qx.Class.define(bm,{statics:{__gw:function(by,bz){return qx.bom.element.Style.get(by,bz,qx.bom.element.Style.COMPUTED_MODE,false);
},__gx:function(bO,bP){return parseInt(qx.bom.element.Style.get(bO,bP,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gy:function(I){var L=0,top=0;
if(I.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var K=qx.dom.Node.getWindow(I);
L-=qx.bom.Viewport.getScrollLeft(K);
top-=qx.bom.Viewport.getScrollTop(K);
}else{var J=qx.dom.Node.getDocument(I).body;
I=I.parentNode;
while(I&&I!=J){L+=I.scrollLeft;
top+=I.scrollTop;
I=I.parentNode;
}}return {left:L,top:top};
},__gz:qx.core.Variant.select(S,{"mshtml":function(bA){var bC=qx.dom.Node.getDocument(bA);
var bB=bC.body;
var bD=0;
var top=0;
bD-=bB.clientLeft+bC.documentElement.clientLeft;
top-=bB.clientTop+bC.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bD+=this.__gx(bB,W);
top+=this.__gx(bB,X);
}return {left:bD,top:top};
},"webkit":function(bK){var bM=qx.dom.Node.getDocument(bK);
var bL=bM.body;
var bN=bL.offsetLeft;
var top=bL.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bN+=this.__gx(bL,W);
top+=this.__gx(bL,X);
}return {left:bN,top:top};
},"gecko":function(l){var m=qx.dom.Node.getDocument(l).body;
var n=m.offsetLeft;
var top=m.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){n+=this.__gx(m,U);
top+=this.__gx(m,V);
}if(qx.bom.element.BoxSizing.get(m)!==R){n+=this.__gx(m,W);
top+=this.__gx(m,X);
}return {left:n,top:top};
},"default":function(c){var d=qx.dom.Node.getDocument(c).body;
var e=d.offsetLeft;
var top=d.offsetTop;
return {left:e,top:top};
}}),__gA:qx.core.Variant.select(S,{"mshtml|webkit":function(x){var z=qx.dom.Node.getDocument(x);
if(x.getBoundingClientRect){var A=x.getBoundingClientRect();
var B=A.left;
var top=A.top;
}else{var B=x.offsetLeft;
var top=x.offsetTop;
x=x.offsetParent;
var y=z.body;
while(x&&x!=y){B+=x.offsetLeft;
top+=x.offsetTop;
B+=this.__gx(x,W);
top+=this.__gx(x,X);
x=x.offsetParent;
}}return {left:B,top:top};
},"gecko":function(bo){if(bo.getBoundingClientRect){var br=bo.getBoundingClientRect();
var bs=Math.round(br.left);
var top=Math.round(br.top);
}else{var bs=0;
var top=0;
var bp=qx.dom.Node.getDocument(bo).body;
var bq=qx.bom.element.BoxSizing;

if(bq.get(bo)!==R){bs-=this.__gx(bo,W);
top-=this.__gx(bo,X);
}
while(bo&&bo!==bp){bs+=bo.offsetLeft;
top+=bo.offsetTop;
if(bq.get(bo)!==R){bs+=this.__gx(bo,W);
top+=this.__gx(bo,X);
}if(bo.parentNode&&this.__gw(bo.parentNode,ba)!=bi){bs+=this.__gx(bo.parentNode,W);
top+=this.__gx(bo.parentNode,X);
}bo=bo.offsetParent;
}}return {left:bs,top:top};
},"default":function(bt){var bv=0;
var top=0;
var bu=qx.dom.Node.getDocument(bt).body;
while(bt&&bt!==bu){bv+=bt.offsetLeft;
top+=bt.offsetTop;
bt=bt.offsetParent;
}return {left:bv,top:top};
}}),get:function(o,p){if(o.tagName==bh){var location=this.__gB(o);
var w=location.left;
var top=location.top;
}else{var q=this.__gz(o);
var v=this.__gA(o);
var scroll=this.__gy(o);
var w=v.left+q.left-scroll.left;
var top=v.top+q.top-scroll.top;
}var r=w+o.offsetWidth;
var s=top+o.offsetHeight;

if(p){if(p==bn||p==T){var t=qx.bom.element.Overflow.getX(o);

if(t==T||t==O){r+=o.scrollWidth-o.offsetWidth+this.__gx(o,W)+this.__gx(o,P);
}var u=qx.bom.element.Overflow.getY(o);

if(u==T||u==O){s+=o.scrollHeight-o.offsetHeight+this.__gx(o,X)+this.__gx(o,Q);
}}
switch(p){case bn:w+=this.__gx(o,bl);
top+=this.__gx(o,bf);
r-=this.__gx(o,bb);
s-=this.__gx(o,bg);
case T:w-=o.scrollLeft;
top-=o.scrollTop;
r-=o.scrollLeft;
s-=o.scrollTop;
case Y:w+=this.__gx(o,W);
top+=this.__gx(o,X);
r-=this.__gx(o,P);
s-=this.__gx(o,Q);
break;
case bd:w-=this.__gx(o,U);
top-=this.__gx(o,V);
r+=this.__gx(o,be);
s+=this.__gx(o,bj);
break;
}}return {left:w,top:top,right:r,bottom:s};
},__gB:qx.core.Variant.select(S,{"default":function(f){var top=f.offsetTop+this.__gx(f,V);
var g=f.offsetLeft+this.__gx(f,U);
return {left:g,top:top};
},"mshtml":function(bE){var top=bE.offsetTop;
var bF=bE.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__gx(bE,V);
bF+=this.__gx(bE,U);
}return {left:bF,top:top};
},"gecko":function(j){var top=j.offsetTop+this.__gx(j,V)+this.__gx(j,W);
var k=j.offsetLeft+this.__gx(j,U)+this.__gx(j,X);
return {left:k,top:top};
}}),getLeft:function(bw,bx){return this.get(bw,bx).left;
},getTop:function(h,i){return this.get(h,i).top;
},getRight:function(a,b){return this.get(a,b).right;
},getBottom:function(M,N){return this.get(M,N).bottom;
},getRelative:function(C,D,E,F){var H=this.get(C,E);
var G=this.get(D,F);
return {left:H.left-G.left,top:H.top-G.top,right:H.right-G.right,bottom:H.bottom-G.bottom};
},getPosition:function(bG){return this.getRelative(bG,this.getOffsetParent(bG));
},getOffsetParent:function(bH){var bJ=bH.offsetParent||document.body;
var bI=qx.bom.element.Style;

while(bJ&&(!/^body|html$/i.test(bJ.tagName)&&bI.get(bJ,bc)===bk)){bJ=bJ.offsetParent;
}return bJ;
}}});
})();
(function(){var C="qx.client",B="character",A="EndToEnd",z="input",y="textarea",x="StartToStart",w='character',v="qx.bom.Selection",u="button",t="#text",s="body";
qx.Class.define(v,{statics:{getSelectionObject:qx.core.Variant.select(C,{"mshtml":function(i){return i.selection;
},"default":function(V){return qx.dom.Node.getWindow(V).getSelection();
}}),get:qx.core.Variant.select(C,{"mshtml":function(N){var O=qx.bom.Range.get(qx.dom.Node.getDocument(N));
return O.text;
},"default":function(a){if(this.__gC(a)){return a.value.substring(a.selectionStart,a.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(a)).toString();
}}}),getLength:qx.core.Variant.select(C,{"mshtml":function(bw){var by=this.get(bw);
var bx=qx.util.StringSplit.split(by,/\r\n/);
return by.length-(bx.length-1);
},"opera":function(P){var U,S,Q;

if(this.__gC(P)){var T=P.selectionStart;
var R=P.selectionEnd;
U=P.value.substring(T,R);
S=R-T;
}else{U=qx.bom.Selection.get(P);
S=U.length;
}Q=qx.util.StringSplit.split(U,/\r\n/);
return S-(Q.length-1);
},"default":function(bk){if(this.__gC(bk)){return bk.selectionEnd-bk.selectionStart;
}else{return this.get(bk).length;
}}}),getStart:qx.core.Variant.select(C,{"mshtml":function(E){if(this.__gC(E)){var J=qx.bom.Range.get();
if(!E.contains(J.parentElement())){return -1;
}var K=qx.bom.Range.get(E);
var I=E.value.length;
K.moveToBookmark(J.getBookmark());
K.moveEnd(w,I);
return I-K.text.length;
}else{var K=qx.bom.Range.get(E);
var G=K.parentElement();
var L=qx.bom.Range.get();
L.moveToElementText(G);
var F=qx.bom.Range.get(qx.dom.Node.getBodyElement(E));
F.setEndPoint(x,K);
F.setEndPoint(A,L);
if(L.compareEndPoints(x,F)==0){return 0;
}var H;
var M=0;

while(true){H=F.moveStart(B,-1);
if(L.compareEndPoints(x,F)==0){break;
}if(H==0){break;
}else{M++;
}}return ++M;
}},"gecko|webkit":function(bt){if(this.__gC(bt)){return bt.selectionStart;
}else{var bv=qx.dom.Node.getDocument(bt);
var bu=this.getSelectionObject(bv);
if(bu.anchorOffset<bu.focusOffset){return bu.anchorOffset;
}else{return bu.focusOffset;
}}},"default":function(d){if(this.__gC(d)){return d.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(d)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(C,{"mshtml":function(j){if(this.__gC(j)){var o=qx.bom.Range.get();
if(!j.contains(o.parentElement())){return -1;
}var p=qx.bom.Range.get(j);
var n=j.value.length;
p.moveToBookmark(o.getBookmark());
p.moveStart(w,-n);
return p.text.length;
}else{var p=qx.bom.Range.get(j);
var l=p.parentElement();
var q=qx.bom.Range.get();
q.moveToElementText(l);
var n=q.text.length;
var k=qx.bom.Range.get(qx.dom.Node.getBodyElement(j));
k.setEndPoint(A,p);
k.setEndPoint(x,q);
if(q.compareEndPoints(A,k)==0){return n-1;
}var m;
var r=0;

while(true){m=k.moveEnd(B,1);
if(q.compareEndPoints(A,k)==0){break;
}if(m==0){break;
}else{r++;
}}return n-(++r);
}},"gecko|webkit":function(bq){if(this.__gC(bq)){return bq.selectionEnd;
}else{var bs=qx.dom.Node.getDocument(bq);
var br=this.getSelectionObject(bs);
if(br.focusOffset>br.anchorOffset){return br.focusOffset;
}else{return br.anchorOffset;
}}},"default":function(D){if(this.__gC(D)){return D.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(D)).focusOffset;
}}}),__gC:function(b){return qx.dom.Node.isElement(b)&&(b.nodeName.toLowerCase()==z||b.nodeName.toLowerCase()==y);
},set:qx.core.Variant.select(C,{"mshtml":function(bl,bm,bn){var bo;
if(qx.dom.Node.isDocument(bl)){bl=bl.body;
}
if(qx.dom.Node.isElement(bl)||qx.dom.Node.isText(bl)){switch(bl.nodeName.toLowerCase()){case z:case y:case u:if(bn===undefined){bn=bl.value.length;
}
if(bm>=0&&bm<=bl.value.length&&bn>=0&&bn<=bl.value.length){bo=qx.bom.Range.get(bl);
bo.collapse(true);
bo.moveStart(B,bm);
bo.moveEnd(B,bn-bm);
bo.select();
return true;
}break;
case t:if(bn===undefined){bn=bl.nodeValue.length;
}
if(bm>=0&&bm<=bl.nodeValue.length&&bn>=0&&bn<=bl.nodeValue.length){bo=qx.bom.Range.get(qx.dom.Node.getBodyElement(bl));
bo.moveToElementText(bl.parentNode);
bo.collapse(true);
bo.moveStart(B,bm);
bo.moveEnd(B,bn-bm);
bo.select();
return true;
}break;
default:if(bn===undefined){bn=bl.childNodes.length-1;
}if(bl.childNodes[bm]&&bl.childNodes[bn]){bo=qx.bom.Range.get(qx.dom.Node.getBodyElement(bl));
bo.moveToElementText(bl.childNodes[bm]);
bo.collapse(true);
var bp=qx.bom.Range.get(qx.dom.Node.getBodyElement(bl));
bp.moveToElementText(bl.childNodes[bn]);
bo.setEndPoint(A,bp);
bo.select();
return true;
}}}return false;
},"default":function(bd,be,bf){var bj=bd.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bd)&&(bj==z||bj==y)){if(bf===undefined){bf=bd.value.length;
}if(be>=0&&be<=bd.value.length&&bf>=0&&bf<=bd.value.length){bd.focus();
bd.select();
bd.setSelectionRange(be,bf);
return true;
}}else{var bh=false;
var bi=qx.dom.Node.getWindow(bd).getSelection();
var bg=qx.bom.Range.get(bd);
if(qx.dom.Node.isText(bd)){if(bf===undefined){bf=bd.length;
}
if(be>=0&&be<bd.length&&bf>=0&&bf<=bd.length){bh=true;
}}else if(qx.dom.Node.isElement(bd)){if(bf===undefined){bf=bd.childNodes.length-1;
}
if(be>=0&&bd.childNodes[be]&&bf>=0&&bd.childNodes[bf]){bh=true;
}}else if(qx.dom.Node.isDocument(bd)){bd=bd.body;

if(bf===undefined){bf=bd.childNodes.length-1;
}
if(be>=0&&bd.childNodes[be]&&bf>=0&&bd.childNodes[bf]){bh=true;
}}
if(bh){if(!bi.isCollapsed){bi.collapseToStart();
}bg.setStart(bd,be);
if(qx.dom.Node.isText(bd)){bg.setEnd(bd,bf);
}else{bg.setEndAfter(bd.childNodes[bf]);
}if(bi.rangeCount>0){bi.removeAllRanges();
}bi.addRange(bg);
return true;
}}return false;
}}),setAll:function(c){return qx.bom.Selection.set(c,0);
},clear:qx.core.Variant.select(C,{"mshtml":function(e){var f=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(e));
var g=qx.bom.Range.get(e);
var parent=g.parentElement();
var h=qx.bom.Range.get(qx.dom.Node.getDocument(e));
if(parent==h.parentElement()&&parent==e){f.empty();
}},"default":function(W){var Y=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(W));
var bb=W.nodeName.toLowerCase();
if(qx.dom.Node.isElement(W)&&(bb==z||bb==y)){W.setSelectionRange(0,0);
qx.bom.Element.blur(W);
}else if(qx.dom.Node.isDocument(W)||bb==s){Y.collapse(W.body?W.body:W,0);
}else{var ba=qx.bom.Range.get(W);

if(!ba.collapsed){var bc;
var X=ba.commonAncestorContainer;
if(qx.dom.Node.isElement(W)&&qx.dom.Node.isText(X)){bc=X.parentNode;
}else{bc=X;
}
if(bc==W){Y.collapse(W,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(p){if(qx.dom.Node.isElement(p)){switch(p.nodeName.toLowerCase()){case d:switch(p.type){case j:case i:case c:case l:case f:case h:case g:return p.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}break;
case e:case b:case l:return p.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}}else{if(p==null){p=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}},"default":function(m){var n=qx.dom.Node.getDocument(m);
var o=qx.bom.Selection.getSelectionObject(n);

if(o.rangeCount>0){return o.getRangeAt(0);
}else{return n.createRange();
}}})}});
})();
(function(){var f="",e="g",d="$",c="qx.util.StringSplit",b="\\$&",a="^";
qx.Class.define(c,{statics:{split:function(g,h,k){var n=f;
if(h===undefined){return [g.toString()];
}else if(h===null||h.constructor!==RegExp){h=new RegExp(String(h).replace(/[.*+?^${}()|[\]\/\\]/g,b),e);
}else{n=h.toString().replace(/^[\S\s]+\//,f);

if(!h.global){h=new RegExp(h.source,e+n);
}}var m=new RegExp(a+h.source+d,n);
if(k===undefined||+k<0){k=false;
}else{k=Math.floor(+k);

if(!k){return [];
}}var p,o=[],l=0,i=0;

while((k?i++<=k:true)&&(p=h.exec(g))){if((p[0].length===0)&&(h.lastIndex>p.index)){h.lastIndex--;
}
if(h.lastIndex>l){if(p.length>1){p[0].replace(m,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined){p[j]=undefined;
}}});
}o=o.concat(g.substring(l,p.index),(p.index===g.length?[]:p.slice(1)));
l=h.lastIndex;
}
if(p[0].length===0){h.lastIndex++;
}}return (l===g.length)?(h.test(f)?o:o.concat(f)):(k?o:o.concat(g.substring(l)));
}}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__gD:{},remove:function(h){delete this.__gD[h.$$hash];
},add:function(c){var d=this.__gD;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var e=this.__gD;
var g;

for(var f in e){g=e[f];
delete e[f];
g.syncWidget();
}for(var f in e){return;
}this.__gD={};
}}});
})();
(function(){var i="qx.ui.core.queue.Visibility",h="visibility";
qx.Class.define(i,{statics:{__gE:{},__gF:{},remove:function(e){var f=e.$$hash;
delete this.__gF[f];
delete this.__gE[f];
},isVisible:function(g){return this.__gF[g.$$hash]||false;
},__gG:function(a){var c=this.__gF;
var b=a.$$hash;
var d;
if(a.isExcluded()){d=false;
}else{var parent=a.$$parent;

if(parent){d=this.__gG(parent);
}else{d=a.isRootWidget();
}}return c[b]=d;
},add:function(j){var k=this.__gE;

if(k[j.$$hash]){return;
}k[j.$$hash]=j;
qx.ui.core.queue.Manager.scheduleFlush(h);
},flush:function(){var l=this.__gE;
var p=this.__gF;
for(var m in l){if(p[m]!=null){l[m].addChildrenToQueue(l);
}}var o={};

for(var m in l){o[m]=p[m];
p[m]=null;
}for(var m in l){var n=l[m];
delete l[m];
if(p[m]==null){this.__gG(n);
}if(p[m]&&p[m]!=o[m]){n.checkAppearanceNeeds();
}}this.__gE={};
}}});
})();
(function(){var c="appearance",b="qx.ui.core.queue.Appearance";
qx.Class.define(b,{statics:{__gH:{},remove:function(a){delete this.__gH[a.$$hash];
},add:function(e){var f=this.__gH;

if(f[e.$$hash]){return;
}f[e.$$hash]=e;
qx.ui.core.queue.Manager.scheduleFlush(c);
},has:function(d){return !!this.__gH[d.$$hash];
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__gH;
var i;

for(var h in g){i=g[h];
delete g[h];
if(j.isVisible(i)){i.syncAppearance();
}else{i.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__gI:{},add:function(f){var g=this.__gI;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__gI;

for(var e in c){var d=c[e];
delete c[e];
d.dispose();
}for(var e in c){return;
}this.__gI={};
}}});
})();
(function(){var e="none",d="qx.html.Decorator",c="absolute";
qx.Class.define(d,{extend:qx.html.Element,construct:function(f,g){var h={position:c,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){h.pointerEvents=e;
}qx.html.Element.call(this,null,h);
this.__gT=f;
this.__gU=g||f.toHashCode();
this.useMarkup(f.getMarkup());
},members:{__gU:null,__gT:null,getId:function(){return this.__gU;
},getDecorator:function(){return this.__gT;
},resize:function(a,b){this.__gT.resize(this.getDomElement(),a,b);
},tint:function(i){this.__gT.tint(this.getDomElement(),i);
},getInsets:function(){return this.__gT.getInsets();
}},destruct:function(){this.__gT=null;
}});
})();
(function(){var j="blur",h="focus",g="input",f="load",e="qx.ui.core.EventHandler",d="activate";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__gV=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__gV:null,__gW:{focusin:1,focusout:1,focus:1,blur:1},__gX:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(a,b){return a instanceof qx.ui.core.Widget;
},_dispatchEvent:function(t){var y=t.getTarget();
var x=qx.ui.core.Widget.getWidgetByElement(y);
var z=false;

while(x&&x.isAnonymous()){var z=true;
x=x.getLayoutParent();
}if(x&&z&&t.getType()==d){x.getContainerElement().activate();
}if(this.__gW[t.getType()]){x=x&&x.getFocusTarget();
if(!x){return;
}}if(t.getRelatedTarget){var G=t.getRelatedTarget();
var F=qx.ui.core.Widget.getWidgetByElement(G);

while(F&&F.isAnonymous()){F=F.getLayoutParent();
}
if(F){if(this.__gW[t.getType()]){F=F.getFocusTarget();
}if(F===x){return;
}}}var B=t.getCurrentTarget();
var D=qx.ui.core.Widget.getWidgetByElement(B);

if(!D||D.isAnonymous()){return;
}if(this.__gW[t.getType()]){D=D.getFocusTarget();
}var E=t.getType();

if(!D||!(D.isEnabled()||this.__gX[E])){return;
}var u=t.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var A=this.__gV.getListeners(D,E,u);

if(!A||A.length===0){return;
}var v=qx.event.Pool.getInstance().getObject(t.constructor);
t.clone(v);
v.setTarget(x);
v.setRelatedTarget(F||null);
v.setCurrentTarget(D);
var H=t.getOriginalTarget();

if(H){var w=qx.ui.core.Widget.getWidgetByElement(H);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}v.setOriginalTarget(w);
}else{v.setOriginalTarget(y);
}for(var i=0,l=A.length;i<l;i++){var C=A[i].context||D;
A[i].handler.call(C,v);
}if(v.getPropagationStopped()){t.stopPropagation();
}
if(v.getDefaultPrevented()){t.preventDefault();
}qx.event.Pool.getInstance().poolObject(v);
},registerEvent:function(k,m,n){var o;

if(m===h||m===j){o=k.getFocusElement();
}else if(m===f||m===g){o=k.getContentElement();
}else{o=k.getContainerElement();
}
if(o){o.addListener(m,this._dispatchEvent,this,n);
}},unregisterEvent:function(p,q,r){var s;

if(q===h||q===j){s=p.getFocusElement();
}else if(q===f||q===g){s=p.getContentElement();
}else{s=p.getContainerElement();
}
if(s){s.removeListener(q,this._dispatchEvent,this,r);
}}},destruct:function(){this.__gV=null;
},defer:function(c){qx.event.Registration.addHandler(c);
}});
})();
(function(){var q="/",p="mshtml",o="",n="qx.client",m="?",l="string",k="qx.util.ResourceManager",j="singleton";
qx.Class.define(k,{extend:qx.core.Object,type:j,statics:{__gY:qx.$$resources||{},__ha:{}},members:{has:function(v){return !!this.self(arguments).__gY[v];
},getData:function(e){return this.self(arguments).__gY[e]||null;
},getImageWidth:function(t){var u=this.self(arguments).__gY[t];
return u?u[0]:null;
},getImageHeight:function(h){var i=this.self(arguments).__gY[h];
return i?i[1]:null;
},getImageFormat:function(r){var s=this.self(arguments).__gY[r];
return s?s[2]:null;
},isClippedImage:function(f){var g=this.self(arguments).__gY[f];
return g&&g.length>4;
},toUri:function(a){if(a==null){return a;
}var b=this.self(arguments).__gY[a];

if(!b){return a;
}
if(typeof b===l){var d=b;
}else{var d=b[3];
if(!d){return a;
}}var c=o;

if(qx.core.Variant.isSet(n,p)&&qx.bom.client.Feature.SSL){c=this.self(arguments).__ha[d];
}return c+qx.$$libraries[d].resourceUri+q+a;
}},defer:function(w){if(qx.core.Variant.isSet(n,p)){if(qx.bom.client.Feature.SSL){for(var A in qx.$$libraries){var y;

if(qx.$$libraries[A].resourceUri){y=qx.$$libraries[A].resourceUri;
}else{w.__ha[A]=o;
continue;
}if(y.match(/^\/\//)!=null){w.__ha[A]=window.location.protocol;
}else if(y.match(/^\.\//)!=null){var x=document.URL;
w.__ha[A]=x.substring(0,x.lastIndexOf(q)+1);
}else if(y.match(/^http/)!=null){}else{var B=window.location.href.indexOf(m);
var z;

if(B==-1){z=window.location.href;
}else{z=window.location.href.substring(0,B);
}w.__ha[A]=z.substring(0,z.lastIndexOf(q)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__hb:function(){var e=(navigator.userLanguage||navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__hb();
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__hc=u;
this.length=u.length;
},members:{$$isString:true,length:0,__hc:null,toString:function(){return this.__hc;
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
this.__hd=c;
this.__he=d;
},members:{__hd:null,__he:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hd,this.__he);
}}});
})();
(function(){var B="_",A="",z="_applyLocale",y="changeLocale",x="C",w="qx.dynlocale",v="on",u="qx.locale.Manager",t="String",s="singleton";
qx.Class.define(u,{type:s,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hf=qx.$$translations||{};
this.__hg=qx.$$locales||{};
var E=qx.bom.client.Locale;
var C=E.LOCALE;
var D=E.VARIANT;

if(D!==A){C+=B+D;
}this.setLocale(C||this.__hh);
},statics:{tr:function(bb,bc){var bd=qx.lang.Array.fromArguments(arguments);
bd.splice(0,1);
return qx.locale.Manager.getInstance().translate(bb,bd);
},trn:function(H,I,J,K){var L=qx.lang.Array.fromArguments(arguments);
L.splice(0,3);
if(J!=1){return qx.locale.Manager.getInstance().translate(I,L);
}else{return qx.locale.Manager.getInstance().translate(H,L);
}},trc:function(a,b,c){var d=qx.lang.Array.fromArguments(arguments);
d.splice(0,2);
return qx.locale.Manager.getInstance().translate(b,d);
},marktr:function(r){return r;
}},properties:{locale:{check:t,nullable:true,apply:z,event:y}},members:{__hh:x,__hi:null,__hj:null,__hf:null,__hg:null,getLanguage:function(){return this.__hj;
},getTerritory:function(){return this.getLocale().split(B)[1]||A;
},getAvailableLocales:function(){var V=[];

for(var U in this.__hg){if(U!=this.__hh){V.push(U);
}}return V;
},__hk:function(be){var bg;
var bf=be.indexOf(B);

if(bf==-1){bg=be;
}else{bg=be.substring(0,bf);
}return bg;
},_applyLocale:function(F,G){this.__hi=F;
this.__hj=this.__hk(F);
},addTranslation:function(n,o){var p=this.__hf;

if(p[n]){for(var q in o){p[n][q]=o[q];
}}else{p[n]=o;
}},addLocale:function(M,N){var O=this.__hg;

if(O[M]){for(var P in N){O[M][P]=N[P];
}}else{O[M]=N;
}},translate:function(W,X,Y){var ba=this.__hf;
return this.__hl(ba,W,X,Y);
},localize:function(Q,R,S){var T=this.__hg;
return this.__hl(T,Q,R,S);
},__hl:function(e,f,g,h){var j;

if(!e){return f;
}
if(h){var l=this.__hk(h);
}else{h=this.__hi;
l=this.__hj;
}if(!j&&e[h]){j=e[h][f];
}if(!j&&e[l]){j=e[l][f];
}if(!j&&e[this.__hh]){j=e[this.__hh][f];
}
if(!j){j=f;
}
if(g.length>0){var k=[];

for(var i=0;i<g.length;i++){var m=g[i];

if(m&&m.translate){k[i]=m.translate();
}else{k[i]=m;
}}j=qx.lang.String.format(j,k);
}
if(qx.core.Variant.isSet(w,v)){j=new qx.locale.LocalizedString(j,f,g);
}return j;
}},destruct:function(){this.__hf=this.__hg=null;
}});
})();
(function(){var H="px",G="qx.client",F="div",E="img",D="",C="no-repeat",B="scale-x",A="mshtml",z="scale",y="scale-y",bd="qx/icon",bc="repeat",bb=".png",ba="crop",Y="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",X='<div style="',W="repeat-y",V='<img src="',U="qx.bom.element.Decoration",T="', sizingMethod='",O="png",P="')",M='"></div>',N='"/>',K='" style="',L="none",I="webkit",J=" ",Q="repeat-x",R="DXImageTransform.Microsoft.AlphaImageLoader",S="absolute";
qx.Class.define(U,{statics:{DEBUG:false,__hm:{},__hn:qx.core.Variant.isSet(G,A),__ho:qx.core.Variant.select(G,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hp:{"scale-x":E,"scale-y":E,"scale":E,"repeat":F,"no-repeat":F,"repeat-x":F,"repeat-y":F},update:function(j,k,l,m){var o=this.getTagName(l,k);

if(o!=j.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var p=this.getAttributes(k,l,m);

if(o===E){j.src=p.src;
}if(j.style.backgroundPosition!=D&&p.style.backgroundPosition===undefined){p.style.backgroundPosition=null;
}if(j.style.clip!=D&&p.style.clip===undefined){p.style.clip=null;
}var n=qx.bom.element.Style;
n.setStyles(j,p.style);
if(this.__hn){try{j.filters[R].apply();
}catch(e){}}},create:function(bu,bv,bw){var bx=this.getTagName(bv,bu);
var bz=this.getAttributes(bu,bv,bw);
var by=qx.bom.element.Style.compile(bz.style);

if(bx===E){return V+bz.src+K+by+N;
}else{return X+by+M;
}},getTagName:function(be,bf){if(qx.core.Variant.isSet(G,A)){if(bf&&this.__hn&&this.__ho[be]&&qx.lang.String.endsWith(bf,bb)){return F;
}}return this.__hp[be];
},getAttributes:function(bp,bq,br){if(!br){br={};
}
if(!br.position){br.position=S;
}
if(qx.core.Variant.isSet(G,A)){br.fontSize=0;
br.lineHeight=0;
}else if(qx.core.Variant.isSet(G,I)){br.WebkitUserDrag=L;
}var bt=qx.util.ResourceManager.getInstance().getImageFormat(bp)||qx.io.ImageLoader.getFormat(bp);
{};
var bs;
if(this.__hn&&this.__ho[bq]&&bt===O){bs=this.__hs(br,bq,bp);
}else{if(bq===z){bs=this.__ht(br,bq,bp);
}else if(bq===B||bq===y){bs=this.__hu(br,bq,bp);
}else{bs=this.__hx(br,bq,bp);
}}return bs;
},__hq:function(bK,bL,bM){if(bK.width==null&&bL!=null){bK.width=bL+H;
}
if(bK.height==null&&bM!=null){bK.height=bM+H;
}return bK;
},__hr:function(bh){var bi=qx.util.ResourceManager.getInstance().getImageWidth(bh)||qx.io.ImageLoader.getWidth(bh);
var bj=qx.util.ResourceManager.getInstance().getImageHeight(bh)||qx.io.ImageLoader.getHeight(bh);
return {width:bi,height:bj};
},__hs:function(bA,bB,bC){var bF=this.__hr(bC);
bA=this.__hq(bA,bF.width,bF.height);
var bE=bB==C?ba:z;
var bD=Y+qx.util.ResourceManager.getInstance().toUri(bC)+T+bE+P;
bA.filter=bD;
bA.backgroundImage=bA.backgroundRepeat=D;
return {style:bA};
},__ht:function(bk,bl,bm){var bn=qx.util.ResourceManager.getInstance().toUri(bm);
var bo=this.__hr(bm);
bk=this.__hq(bk,bo.width,bo.height);
return {src:bn,style:bk};
},__hu:function(bN,bO,bP){var bT=qx.util.ResourceManager.getInstance();
var bS=bT.isClippedImage(bP);
var bU=this.__hr(bP);

if(bS){var bR=bT.getData(bP);
var bQ=bT.toUri(bR[4]);

if(bO===B){bN=this.__hv(bN,bR,bU.height);
}else{bN=this.__hw(bN,bR,bU.width);
}return {src:bQ,style:bN};
}else{{};

if(bO==B){bN.height=bU.height==null?null:bU.height+H;
}else if(bO==y){bN.width=bU.width==null?null:bU.width+H;
}var bQ=bT.toUri(bP);
return {src:bQ,style:bN};
}},__hv:function(bV,bW,bX){var bY=qx.util.ResourceManager.getInstance().getImageHeight(bW[4]);
bV.clip={top:-bW[6],height:bX};
bV.height=bY+H;
if(bV.top!=null){bV.top=(parseInt(bV.top,10)+bW[6])+H;
}else if(bV.bottom!=null){bV.bottom=(parseInt(bV.bottom,10)+bX-bY-bW[6])+H;
}return bV;
},__hw:function(bG,bH,bI){var bJ=qx.util.ResourceManager.getInstance().getImageWidth(bH[4]);
bG.clip={left:-bH[5],width:bI};
bG.width=bJ+H;
if(bG.left!=null){bG.left=(parseInt(bG.left,10)+bH[5])+H;
}else if(bG.right!=null){bG.right=(parseInt(bG.right,10)+bI-bJ-bH[5])+H;
}return bG;
},__hx:function(a,b,c){var i=qx.util.ResourceManager.getInstance().isClippedImage(c);
var h=this.__hr(c);
if(i&&b!==bc){var g=qx.util.ResourceManager.getInstance().getData(c);
var f=qx.bom.element.Background.getStyles(g[4],b,g[5],g[6]);

for(var d in f){a[d]=f[d];
}
if(h.width!=null&&a.width==null&&(b==W||b===C)){a.width=h.width+H;
}
if(h.height!=null&&a.height==null&&(b==Q||b===C)){a.height=h.height+H;
}return {style:a};
}else{{};
a=this.__hq(a,h.width,h.height);
a=this.__hy(a,c,b);
return {style:a};
}},__hy:function(r,s,t){var top=null;
var x=null;

if(r.backgroundPosition){var u=r.backgroundPosition.split(J);
x=parseInt(u[0]);

if(isNaN(x)){x=u[0];
}top=parseInt(u[1]);

if(isNaN(top)){top=u[1];
}}var w=qx.bom.element.Background.getStyles(s,t,x,top);

for(var v in w){r[v]=w[v];
}if(r.filter){r.filter=D;
}return r;
},__hz:function(q){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(q)&&q.indexOf(bd)==-1){if(!this.__hm[q]){qx.log.Logger.debug("Potential clipped image candidate: "+q);
this.__hm[q]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(G,{"mshtml":function(){return qx.bom.element.Decoration.__hn;
},"default":function(){return false;
}})}});
})();
(function(){var r="qx.client",q="load",p="qx.io.ImageLoader";
qx.Bootstrap.define(p,{statics:{__hA:{},__hB:{width:null,height:null},__hC:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(t){var u=this.__hA[t];
return !!(u&&u.loaded);
},isFailed:function(y){var z=this.__hA[y];
return !!(z&&z.failed);
},isLoading:function(f){var g=this.__hA[f];
return !!(g&&g.loading);
},getFormat:function(c){var d=this.__hA[c];
return d?d.format:null;
},getSize:function(A){var B=this.__hA[A];
return B?
{width:B.width,height:B.height}:this.__hB;
},getWidth:function(w){var x=this.__hA[w];
return x?x.width:null;
},getHeight:function(a){var b=this.__hA[a];
return b?b.height:null;
},load:function(C,D,E){var F=this.__hA[C];

if(!F){F=this.__hA[C]={};
}if(D&&!E){E=window;
}if(F.loaded||F.loading||F.failed){if(D){if(F.loading){F.callbacks.push(D,E);
}else{D.call(E,C,F);
}}}else{F.loading=true;
F.callbacks=[];

if(D){F.callbacks.push(D,E);
}var H=new Image();
var G=qx.lang.Function.listener(this.__hD,this,H,C);
H.onload=G;
H.onerror=G;
H.src=C;
}},__hD:qx.event.GlobalError.observeMethod(function(event,j,k){var m=this.__hA[k];
if(event.type===q){m.loaded=true;
m.width=this.__hE(j);
m.height=this.__hF(j);
var n=this.__hC.exec(k);

if(n!=null){m.format=n[1];
}}else{m.failed=true;
}j.onload=j.onerror=null;
var o=m.callbacks;
delete m.loading;
delete m.callbacks;
for(var i=0,l=o.length;i<l;i+=2){o[i].call(o[i+1],k,m);
}}),__hE:qx.core.Variant.select(r,{"gecko":function(s){return s.naturalWidth;
},"default":function(e){return e.width;
}}),__hF:qx.core.Variant.select(r,{"gecko":function(v){return v.naturalHeight;
},"default":function(h){return h.height;
}})}});
})();
(function(){var s="number",r="0",q="px",p=";",o="background-image:url(",n=");",m="",l=")",k="background-repeat:",j=" ",g="qx.bom.element.Background",i="url(",h="background-position:";
qx.Class.define(g,{statics:{__hG:[o,null,n,h,null,p,k,null,p],__hH:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__hI:function(t,top){var u=qx.bom.client.Engine;

if(u.GECKO&&u.VERSION<1.9&&t==top&&typeof t==s){top+=0.01;
}
if(t){var v=(typeof t==s)?t+q:t;
}else{v=r;
}
if(top){var w=(typeof top==s)?top+q:top;
}else{w=r;
}return v+j+w;
},compile:function(x,y,z,top){var A=this.__hI(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C=this.__hG;
C[1]=B;
C[4]=A;
C[7]=y;
return C.join(m);
},getStyles:function(a,b,c,top){if(!a){return this.__hH;
}var d=this.__hI(c,top);
var e=qx.util.ResourceManager.getInstance().toUri(a);
var f={backgroundPosition:d,backgroundImage:i+e+l};

if(b!=null){f.backgroundRepeat=b;
}return f;
},set:function(D,E,F,G,top){var H=this.getStyles(E,F,G,top);

for(var I in H){D.style[I]=H[I];
}}}});
})();
(function(){var n="source",m="scale",l="no-repeat",k="qx.client",j="mshtml",i="webkit",h="backgroundImage",g="div",f="qx.html.Image",e="qx/static/blank.gif";
qx.Class.define(f,{extend:qx.html.Element,members:{_applyProperty:function(name,p){qx.html.Element.prototype._applyProperty.call(this,name,p);

if(name===n){var t=this.getDomElement();
var q=this.getAllStyles();

if(this.getNodeName()==g&&this.getStyle(h)){q.backgroundPosition=null;
q.backgroundRepeat=null;
}var r=this._getProperty(n);
var s=this._getProperty(m);
var u=s?m:l;
qx.bom.element.Decoration.update(t,r,u,q);
}},_createDomElement:function(){var b=this._getProperty(m);
var c=b?m:l;

if(qx.core.Variant.isSet(k,j)){var a=this._getProperty(n);
this.setNodeName(qx.bom.element.Decoration.getTagName(c,a));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(c));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(o){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(d){this._setProperty(n,d);
return this;
},getSource:function(){return this._getProperty(n);
},resetSource:function(){if(qx.core.Variant.isSet(k,i)){this._setProperty(n,qx.util.ResourceManager.getInstance().toUri(e));
}else{this._removeProperty(n,true);
}return this;
},setScale:function(v){this._setProperty(m,v);
return this;
},getScale:function(){return this._getProperty(m);
}}});
})();
(function(){var E="nonScaled",D="scaled",C="alphaScaled",B=".png",A="replacement",z="hidden",y="div",x="Boolean",w="_applyScale",v="px",p="_applySource",u="-disabled.$1",s="__hR",o="img",n="changeSource",r="qx.client",q="String",t="image",m="qx.ui.basic.Image";
qx.Class.define(m,{extend:qx.ui.core.Widget,construct:function(H){this.__hR={};
qx.ui.core.Widget.call(this);

if(H){this.setSource(H);
}},properties:{source:{check:q,init:null,nullable:true,event:n,apply:p,themeable:true},scale:{check:x,init:false,themeable:true,apply:w},appearance:{refine:true,init:t},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hS:null,__hT:null,__hU:null,__hR:null,getContentElement:function(){return this.__hY();
},_createContentElement:function(){return this.__hY();
},_getContentHint:function(){return {width:this.__hS||0,height:this.__hT||0};
},_applyEnabled:function(V,W){qx.ui.core.Widget.prototype._applyEnabled.call(this,V,W);

if(this.getSource()){this._styleSource();
}},_applySource:function(be){this._styleSource();
},_applyScale:function(bf){this._styleSource();
},__hV:function(bg){this.__hU=bg;
},__hW:function(){if(this.__hU==null){var bi=this.getSource();
var bh=false;

if(bi!=null){bh=qx.lang.String.endsWith(bi,B);
}
if(this.getScale()&&bh&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hU=C;
}else if(this.getScale()){this.__hU=D;
}else{this.__hU=E;
}}return this.__hU;
},__hX:function(I){var J;
var K;

if(I==C){J=true;
K=y;
}else if(I==E){J=false;
K=y;
}else{J=true;
K=o;
}var L=new qx.html.Image(K);
L.setScale(J);
L.setStyles({"overflowX":z,"overflowY":z});
return L;
},__hY:function(){var l=this.__hW();

if(this.__hR[l]==null){this.__hR[l]=this.__hX(l);
}return this.__hR[l];
},_styleSource:function(){var X=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!X){this.getContentElement().resetSource();
return;
}this.__ia(X);
if(qx.util.ResourceManager.getInstance().has(X)){this.__ic(this.getContentElement(),X);
}else if(qx.io.ImageLoader.isLoaded(X)){this.__id(this.getContentElement(),X);
}else{this.__ie(this.getContentElement(),X);
}},__ia:qx.core.Variant.select(r,{"mshtml":function(Y){var bb=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var ba=qx.lang.String.endsWith(Y,B);

if(bb&&ba){if(this.getScale()&&this.__hW()!=C){this.__hV(C);
}else if(!this.getScale()&&this.__hW()!=E){this.__hV(E);
}}else{if(this.getScale()&&this.__hW()!=D){this.__hV(D);
}else if(!this.getScale()&&this.__hW()!=E){this.__hV(E);
}}this.__ib(this.__hY());
},"default":function(k){if(this.getScale()&&this.__hW()!=D){this.__hV(D);
}else if(!this.getScale()&&this.__hW(E)){this.__hV(E);
}this.__ib(this.__hY());
}}),__ib:function(a){var d=this.getContainerElement();
var e=d.getChild(0);

if(e!=a){if(e!=null){var g=v;
var b={};
var c=this.getInnerSize();

if(c!=null){b.width=c.width+g;
b.height=c.height+g;
}var f=this.getInsets();
b.left=f.left+g;
b.top=f.top+g;
b.zIndex=10;
a.setStyles(b,true);
a.setSelectable(this.getSelectable());
}d.removeAt(0);
d.addAt(a,0);
}},__ic:function(M,N){var P=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var O=N.replace(/\.([a-z]+)$/,u);

if(P.has(O)){N=O;
this.addState(A);
}else{this.removeState(A);
}}if(M.getSource()===N){return;
}M.setSource(N);
this.__ig(P.getImageWidth(N),P.getImageHeight(N));
},__id:function(Q,R){var T=qx.io.ImageLoader;
Q.setSource(R);
var S=T.getWidth(R);
var U=T.getHeight(R);
this.__ig(S,U);
},__ie:function(h,i){var self;
var j=qx.io.ImageLoader;
{};
if(!j.isFailed(i)){j.load(i,this.__if,this);
}else{if(h!=null){h.resetSource();
}}},__if:function(F,G){if(this.$$disposed===true){return;
}if(F!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(G.failed){this.warn("Image could not be loaded: "+F);
}this._styleSource();
},__ig:function(bc,bd){if(bc!==this.__hS||bd!==this.__hT){this.__hS=bc;
this.__hT=bd;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(s);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var j=this.getApplicationRoot();
j.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(h,i){if(i){this.removeState(i);
}
if(h){this.addState(h);
}}}});
})();
(function(){var g="interval",f="Number",e="_applyTimeoutInterval",d="qx.event.type.Event",c="qx.event.Idle",b="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){qx.core.Object.call(this);
var h=new qx.event.Timer(this.getTimeoutInterval());
h.addListener(g,this._onInterval,this);
h.start();
this.__in=h;
},events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__in:null,_applyTimeoutInterval:function(a){this.__in.setInterval(a);
},_onInterval:function(){this.fireEvent(g);
}},destruct:function(){if(this.__in){this.__in.stop();
}this.__in=null;
}});
})();
(function(){var I="top",H="right",G="bottom",F="left",E="align-start",D="qx.util.placement.AbstractAxis",C="edge-start",B="align-end",A="edge-end",z="-",w="best-fit",y="qx.util.placement.Placement",x="keep-align",v='__io',u="direct";
qx.Class.define(y,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__io=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:D},axisY:{check:D},edge:{check:[I,H,G,F],init:I},align:{check:[I,H,G,F],init:H}},statics:{__ip:null,compute:function(k,l,m,n,o,p,q){this.__ip=this.__ip||new qx.util.placement.Placement();
var t=o.split(z);
var s=t[0];
var r=t[1];
this.__ip.set({axisX:this.__it(p),axisY:this.__it(q),edge:s,align:r});
return this.__ip.compute(k,l,m,n);
},__iq:null,__ir:null,__is:null,__it:function(h){switch(h){case u:this.__iq=this.__iq||new qx.util.placement.DirectAxis();
return this.__iq;
case x:this.__ir=this.__ir||new qx.util.placement.KeepAlignAxis();
return this.__ir;
case w:this.__is=this.__is||new qx.util.placement.BestFitAxis();
return this.__is;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__io:null,compute:function(a,b,c,d){{};
var e=this.getAxisX()||this.__io;
var g=e.computeStart(a.width,{start:c.left,end:c.right},{start:d.left,end:d.right},b.width,this.__iu());
var f=this.getAxisY()||this.__io;
var top=f.computeStart(a.height,{start:c.top,end:c.bottom},{start:d.top,end:d.bottom},b.height,this.__iv());
return {left:g,top:top};
},__iu:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==F){return C;
}else if(K==H){return A;
}else if(J==F){return E;
}else if(J==H){return B;
}},__iv:function(){var j=this.getEdge();
var i=this.getAlign();

if(j==I){return C;
}else if(j==G){return A;
}else if(i==I){return E;
}else if(i==G){return B;
}}},destruct:function(){this._disposeObjects(v);
}});
})();
(function(){var i="edge-start",h="align-start",g="align-end",f="edge-end",e="qx.util.placement.AbstractAxis";
qx.Class.define(e,{extend:qx.core.Object,members:{computeStart:function(m,n,o,p,q){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(a,b,c,d){switch(d){case i:return b.start-c.end-a;
case f:return b.end+c.start;
case h:return b.start+c.start;
case g:return b.end-c.end-a;
}},_isInRange:function(j,k,l){return j>=0&&j+k<=l;
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
(function(){var h="mousedown",g="blur",f="__lC",d="singleton",c="qx.ui.popup.Manager";
qx.Class.define(c,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__lC={};
qx.event.Registration.addListener(document.documentElement,h,this.__lE,this,true);
qx.bom.Element.addListener(window,g,this.hideAll,this);
},members:{__lC:null,add:function(r){{};
this.__lC[r.$$hash]=r;
this.__lD();
},remove:function(a){{};
var b=this.__lC;

if(b){delete b[a.$$hash];
this.__lD();
}},hideAll:function(){var m=this.__lC;

if(m){for(var l in m){m[l].exclude();
}}},__lD:function(){var k=1e7;
var j=this.__lC;

for(var i in j){j[i].setZIndex(k++);
}},__lE:function(e){var p=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var q=this.__lC;

for(var o in q){var n=q[o];

if(!n.getAutoHide()||p==n||qx.ui.core.Widget.contains(n,p)){continue;
}n.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,h,this.__lE,this,true);
this._disposeMap(f);
}});
})();
(function(){var d="abstract",c="qx.ui.layout.Abstract";
qx.Class.define(c,{type:d,extend:qx.core.Object,members:{__iw:null,_invalidChildrenCache:null,__ix:null,invalidateLayoutCache:function(){this.__iw=null;
},renderLayout:function(f,g){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__iw){return this.__iw;
}return this.__iw=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(a){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var b=this.__ix;

if(b instanceof qx.ui.core.LayoutItem){b.clearSeparators();
}},_renderSeparator:function(h,i){this.__ix.renderSeparator(h,i);
},connectToWidget:function(e){if(e&&this.__ix){throw new Error("It is not possible to manually set the connected widget.");
}this.__ix=e;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__ix;
},_applyLayoutChange:function(){if(this.__ix){this.__ix.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__ix.getLayoutChildren();
}},destruct:function(){this.__ix=this.__iw=null;
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
(function(){var n="label",m="icon",l="Boolean",k="both",j="String",i="left",h="changeGap",g="changeShow",f="bottom",e="_applyCenter",A="changeIcon",z="qx.ui.basic.Atom",y="changeLabel",x="Integer",w="_applyIconPosition",v="top",u="right",t="_applyRich",s="_applyIcon",r="_applyShow",p="_applyLabel",q="_applyGap",o="atom";
qx.Class.define(z,{extend:qx.ui.core.Widget,construct:function(N,O){{};
qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(N!=null){this.setLabel(N);
}
if(O!=null){this.setIcon(O);
}},properties:{appearance:{refine:true,init:o},label:{apply:p,nullable:true,check:j,event:y},rich:{check:l,init:false,apply:t},icon:{check:j,apply:s,nullable:true,themeable:true,event:A},gap:{check:x,nullable:false,event:h,apply:q,themeable:true,init:4},show:{init:k,check:[k,n,m],themeable:true,inheritable:true,apply:r,event:g},iconPosition:{init:i,check:[v,u,f,i],themeable:true,apply:w},center:{init:false,check:l,themeable:true,apply:e}},members:{_createChildControlImpl:function(c){var d;

switch(c){case n:d=new qx.ui.basic.Label(this.getLabel());
d.setAnonymous(true);
d.setRich(this.getRich());
this._add(d);

if(this.getLabel()==null||this.getShow()===m){d.exclude();
}break;
case m:d=new qx.ui.basic.Image(this.getIcon());
d.setAnonymous(true);
this._addAt(d,0);

if(this.getIcon()==null||this.getShow()===n){d.exclude();
}break;
}return d||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,c);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===m){this._excludeChildControl(n);
}else{this._showChildControl(n);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===n){this._excludeChildControl(m);
}else{this._showChildControl(m);
}},_applyLabel:function(P,Q){var R=this.getChildControl(n,true);

if(R){R.setValue(P);
}this._handleLabel();
},_applyRich:function(D,E){var F=this.getChildControl(n,true);

if(F){F.setRich(D);
}},_applyIcon:function(K,L){var M=this.getChildControl(m,true);

if(M){M.setSource(K);
}this._handleIcon();
},_applyGap:function(a,b){this._getLayout().setGap(a);
},_applyShow:function(I,J){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(B,C){this._getLayout().setIconPosition(B);
},_applyCenter:function(G,H){this._getLayout().setCenter(G);
}}});
})();
(function(){var F="bottom",E="_applyLayoutChange",D="top",C="left",B="right",A="middle",z="center",y="qx.ui.layout.Atom",x="Integer",w="Boolean";
qx.Class.define(y,{extend:qx.ui.layout.Abstract,properties:{gap:{check:x,init:4,apply:E},iconPosition:{check:[C,D,B,F],init:C,apply:E},center:{check:w,init:false,apply:E}},members:{verifyLayoutProperty:null,renderLayout:function(a,b){var l=qx.ui.layout.Util;
var d=this.getIconPosition();
var g=this._getLayoutChildren();
var length=g.length;
var v,top,u,e;
var q,k;
var o=this.getGap();
var t=this.getCenter();
if(d===F||d===B){var m=length-1;
var h=-1;
var f=-1;
}else{var m=0;
var h=length;
var f=1;
}if(d==D||d==F){if(t){var p=0;

for(var i=m;i!=h;i+=f){e=g[i].getSizeHint().height;

if(e>0){p+=e;

if(i!=m){p+=o;
}}}top=Math.round((b-p)/2);
}else{top=0;
}
for(var i=m;i!=h;i+=f){q=g[i];
k=q.getSizeHint();
u=Math.min(k.maxWidth,Math.max(a,k.minWidth));
e=k.height;
v=l.computeHorizontalAlignOffset(z,u,a);
q.renderLayout(v,top,u,e);
if(e>0){top+=e+o;
}}}else{var j=a;
var c=null;
var s=0;

for(var i=m;i!=h;i+=f){q=g[i];
u=q.getSizeHint().width;

if(u>0){if(!c&&q instanceof qx.ui.basic.Label){c=q;
}else{j-=u;
}s++;
}}
if(s>1){var r=(s-1)*o;
j-=r;
}
if(c){var k=c.getSizeHint();
var n=Math.max(k.minWidth,Math.min(j,k.maxWidth));
j-=n;
}
if(t&&j>0){v=Math.round(j/2);
}else{v=0;
}
for(var i=m;i!=h;i+=f){q=g[i];
k=q.getSizeHint();
e=Math.min(k.maxHeight,Math.max(b,k.minHeight));

if(q===c){u=n;
}else{u=k.width;
}top=l.computeVerticalAlignOffset(A,k.height,b);
q.renderLayout(v,top,u,e);
if(u>0){v+=u+o;
}}}},_computeSizeHint:function(){var Q=this._getLayoutChildren();
var length=Q.length;
var I,O;
if(length===1){var I=Q[0].getSizeHint();
O={width:I.width,height:I.height,minWidth:I.minWidth,minHeight:I.minHeight};
}else{var M=0,N=0;
var J=0,L=0;
var K=this.getIconPosition();
var P=this.getGap();

if(K===D||K===F){var G=0;

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
(function(){var A="middle",z="qx.ui.layout.Util",y="left",x="center",w="top",v="bottom",u="right";
qx.Class.define(z,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(F,G,H){var J,N,I,O;
var K=G>H;
var P=Math.abs(G-H);
var Q,L;
var M={};

for(N in F){J=F[N];
M[N]={potential:K?J.max-J.value:J.value-J.min,flex:K?J.flex:1/J.flex,offset:0};
}while(P!=0){O=Infinity;
I=0;

for(N in M){J=M[N];

if(J.potential>0){I+=J.flex;
O=Math.min(O,J.potential/J.flex);
}}if(I==0){break;
}O=Math.min(P,O*I)/I;
Q=0;

for(N in M){J=M[N];

if(J.potential>0){L=Math.min(P,J.potential,Math.ceil(O*J.flex));
Q+=L-O*J.flex;

if(Q>=1){Q-=1;
L-=1;
}J.potential-=L;

if(K){J.offset+=L;
}else{J.offset-=L;
}P-=L;
}}}return M;
},computeHorizontalAlignOffset:function(bc,bd,be,bf,bg){if(bf==null){bf=0;
}
if(bg==null){bg=0;
}var bh=0;

switch(bc){case y:bh=bf;
break;
case u:bh=be-bd-bg;
break;
case x:bh=Math.round((be-bd)/2);
if(bh<bf){bh=bf;
}else if(bh<bg){bh=Math.max(bf,be-bd-bg);
}break;
}return bh;
},computeVerticalAlignOffset:function(o,p,q,r,s){if(r==null){r=0;
}
if(s==null){s=0;
}var t=0;

switch(o){case w:t=r;
break;
case v:t=q-p-s;
break;
case A:t=Math.round((q-p)/2);
if(t<r){t=r;
}else if(t<s){t=Math.max(r,q-p-s);
}break;
}return t;
},collapseMargins:function(X){var Y=0,bb=0;

for(var i=0,l=arguments.length;i<l;i++){var ba=arguments[i];

if(ba<0){bb=Math.min(bb,ba);
}else if(ba>0){Y=Math.max(Y,ba);
}}return Y+bb;
},computeHorizontalGaps:function(B,C,D){if(C==null){C=0;
}var E=0;

if(D){E+=B[0].getMarginLeft();

for(var i=1,l=B.length;i<l;i+=1){E+=this.collapseMargins(C,B[i-1].getMarginRight(),B[i].getMarginLeft());
}E+=B[l-1].getMarginRight();
}else{for(var i=1,l=B.length;i<l;i+=1){E+=B[i].getMarginLeft()+B[i].getMarginRight();
}E+=(C*(l-1));
}return E;
},computeVerticalGaps:function(a,b,c){if(b==null){b=0;
}var d=0;

if(c){d+=a[0].getMarginTop();

for(var i=1,l=a.length;i<l;i+=1){d+=this.collapseMargins(b,a[i-1].getMarginBottom(),a[i].getMarginTop());
}d+=a[l-1].getMarginBottom();
}else{for(var i=1,l=a.length;i<l;i+=1){d+=a[i].getMarginTop()+a[i].getMarginBottom();
}d+=(b*(l-1));
}return d;
},computeHorizontalSeparatorGaps:function(e,f,g){var k=qx.theme.manager.Decoration.getInstance().resolve(g);
var j=k.getInsets();
var h=j.left+j.right;
var m=0;

for(var i=0,l=e.length;i<l;i++){var n=e[i];
m+=n.getMarginLeft()+n.getMarginRight();
}m+=(f+h+f)*(l-1);
return m;
},computeVerticalSeparatorGaps:function(bi,bj,bk){var bn=qx.theme.manager.Decoration.getInstance().resolve(bk);
var bm=bn.getInsets();
var bl=bm.top+bm.bottom;
var bo=0;

for(var i=0,l=bi.length;i<l;i++){var bp=bi[i];
bo+=bp.getMarginTop()+bp.getMarginBottom();
}bo+=(bj+bl+bj)*(l-1);
return bo;
},arrangeIdeals:function(R,S,T,U,V,W){if(S<R||V<U){if(S<R&&V<U){S=R;
V=U;
}else if(S<R){V-=(R-S);
S=R;
if(V<U){V=U;
}}else if(V<U){S-=(U-V);
V=U;
if(S<R){S=R;
}}}
if(S>T||V>W){if(S>T&&V>W){S=T;
V=W;
}else if(S>T){V+=(S-T);
S=T;
if(V>W){V=W;
}}else if(V>W){S+=(V-W);
V=W;
if(S>T){S=T;
}}}return {begin:S,end:V};
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IStringForm";
qx.Interface.define(b,{events:{"changeValue":c},members:{setValue:function(a){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var n="qx.dynlocale",m="text",l="Boolean",k="qx.client",j="color",i="userSelect",h="changeLocale",g="enabled",f="none",d="on",I="_applyTextAlign",H="qx.ui.core.Widget",G="gecko",F="changeTextAlign",E="_applyWrap",D="changeValue",C="changeContent",B="qx.ui.basic.Label",A="A",z="_applyValue",u="center",v="_applyBuddy",s="String",t="textAlign",q="right",r="changeRich",o="_applyRich",p="click",w="label",x="webkit",y="left";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(J){qx.ui.core.Widget.call(this);

if(J!=null){this.setValue(J);
}
if(qx.core.Variant.isSet(n,d)){qx.locale.Manager.getInstance().addListener(h,this._onChangeLocale,this);
}},properties:{rich:{check:l,init:false,event:r,apply:o},wrap:{check:l,init:true,apply:E},value:{check:s,apply:z,event:D,nullable:true},buddy:{check:H,apply:v,nullable:true,init:null},textAlign:{check:[y,u,q],nullable:true,themeable:true,apply:I,event:F},appearance:{refine:true,init:w},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__jJ:null,__jK:null,__jL:null,__jM:null,_getContentHint:function(){if(this.__jK){this.__jN=this.__jO();
delete this.__jK;
}return {width:this.__jN.width,height:this.__jN.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(c){if(qx.core.Variant.isSet(k,G)){if(c&&!this.isRich()){{};
return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,c);
if(qx.core.Variant.isSet(k,x)){this.getContainerElement().setStyle(i,c?m:f);
this.getContentElement().setStyle(i,c?m:f);
}},_getContentHeightForWidth:function(R){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__jO(R).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(W,X){this.getContentElement().setStyle(t,W);
},_applyTextColor:function(a,b){if(a){this.getContentElement().setStyle(j,qx.theme.manager.Color.getInstance().resolve(a));
}else{this.getContentElement().removeStyle(j);
}},__jN:{width:0,height:0},_applyFont:function(L,M){var N;

if(L){this.__jJ=qx.theme.manager.Font.getInstance().resolve(L);
N=this.__jJ.getStyles();
}else{this.__jJ=null;
N=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(N);
this.__jK=true;
qx.ui.core.queue.Layout.add(this);
},__jO:function(Y){var bd=qx.bom.Label;
var bb=this.getFont();
var ba=bb?this.__jJ.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||A;
var bc=this.getRich();
return bc?bd.getHtmlSize(content,ba,Y):bd.getTextSize(content,ba);
},_applyBuddy:function(U,V){if(V!=null){V.removeBinding(this.__jL);
this.__jL=null;
this.removeListenerById(this.__jM);
this.__jM=null;
}
if(U!=null){this.__jL=U.bind(g,this,g);
this.__jM=this.addListener(p,U.focus,U);
}},_applyRich:function(K){this.getContentElement().setRich(K);
this.__jK=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(P,Q){if(P&&!this.isRich()){{};
}},_onChangeLocale:qx.core.Variant.select(n,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(S,T){this.getContentElement().setValue(S);
this.__jK=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(C,S,T);
}},destruct:function(){if(qx.core.Variant.isSet(n,d)){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);
}if(this.__jL!=null){var O=this.getBuddy();

if(O!=null&&!O.isDisposed()){O.removeBinding(this.__jL);
}}this.__jJ=this.__jL=null;
}});
})();
(function(){var h="value",g="Please use the getValue() method instead.",f="qx.html.Label",e="Please use the setValue() method instead.";
qx.Class.define(f,{extend:qx.html.Element,members:{__jP:null,_applyProperty:function(name,a){qx.html.Element.prototype._applyProperty.call(this,name,a);

if(name==h){var b=this.getDomElement();
qx.bom.Label.setValue(b,a);
}},_createDomElement:function(){var j=this.__jP;
var i=qx.bom.Label.create(this._content,j);
return i;
},_copyData:function(l){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(c){var d=this.getDomElement();

if(d){throw new Error("The label mode cannot be modified after initial creation");
}c=!!c;

if(this.__jP==c){return;
}this.__jP=c;
return this;
},setValue:function(m){this._setProperty(h,m);
return this;
},getValue:function(){return this._getProperty(h);
},setContent:function(k){qx.log.Logger.deprecatedMethodWarning(arguments.callee,e);
return this.setValue(k);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.getValue();
}}});
})();
(function(){var q="qx.client",p="gecko",o="div",n="inherit",m="text",l="value",k="",j="hidden",i="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",h="nowrap",I="auto",H="0",G="ellipsis",F="normal",E="label",D="px",C="crop",B="end",A="100%",z="visible",x="qx.bom.Label",y="Please use the setValue() method instead.",v="opera",w="Please use the getValue() method instead.",t="block",u="none",r="-1000px",s="absolute";
qx.Class.define(x,{statics:{__jQ:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jR:function(){var bb=this.__jT(false);
document.body.insertBefore(bb,document.body.firstChild);
return this._textElement=bb;
},__jS:function(){var P=this.__jT(true);
document.body.insertBefore(P,document.body.firstChild);
return this._htmlElement=P;
},__jT:function(K){var L=qx.bom.Element.create(o);
var M=L.style;
M.width=M.height=I;
M.left=M.top=r;
M.visibility=j;
M.position=s;
M.overflow=z;

if(K){M.whiteSpace=F;
}else{M.whiteSpace=h;

if(qx.core.Variant.isSet(q,p)){var N=document.createElementNS(i,E);
var M=N.style;
M.padding=H;

for(var O in this.__jQ){M[O]=n;
}L.appendChild(N);
}}return L;
},__jU:function(S){var T={};

if(S){T.whiteSpace=F;
}else if(qx.core.Variant.isSet(q,p)){T.display=t;
}else{T.overflow=j;
T.whiteSpace=h;
T.textOverflow=G;
T.userSelect=u;
if(qx.core.Variant.isSet(q,v)){T.OTextOverflow=G;
}}return T;
},create:function(content,U,V){if(!V){V=window;
}
if(U){var W=V.document.createElement(o);
W.useHtml=true;
}else if(qx.core.Variant.isSet(q,p)){var W=V.document.createElement(o);
var Y=V.document.createElementNS(i,E);
var X=Y.style;
X.cursor=n;
X.color=n;
X.overflow=j;
X.maxWidth=A;
X.padding=H;
for(var ba in this.__jQ){Y.style[ba]=n;
}Y.setAttribute(C,B);
W.appendChild(Y);
}else{var W=V.document.createElement(o);
qx.bom.element.Style.setStyles(W,this.__jU(U));
}
if(content){this.setValue(W,content);
}return W;
},setValue:function(Q,R){R=R||k;

if(Q.useHtml){Q.innerHTML=R;
}else if(qx.core.Variant.isSet(q,p)){Q.firstChild.setAttribute(l,R);
}else{qx.bom.element.Attribute.set(Q,m,R);
}},getValue:function(g){if(g.useHtml){return g.innerHTML;
}else if(qx.core.Variant.isSet(q,p)){return g.firstChild.getAttribute(l)||k;
}else{return qx.bom.element.Attribute.get(g,m);
}},getHtmlSize:function(content,d,e){var f=this._htmlElement||this.__jS();
f.style.width=e!==undefined?e+D:I;
f.innerHTML=content;
return this.__jV(f,d);
},getTextSize:function(a,b){var c=this._textElement||this.__jR();

if(qx.core.Variant.isSet(q,p)){c.firstChild.setAttribute(l,a);
}else{qx.bom.element.Attribute.set(c,m,a);
}return this.__jV(c,b);
},__jV:function(bc,bd){var be=this.__jQ;

if(!bd){bd={};
}
for(var bf in be){bc.style[bf]=bd[bf]||k;
}var bg=qx.bom.element.Dimension.getSize(bc);

if(qx.core.Variant.isSet(q,p)){if(!qx.bom.client.Platform.WIN){bg.width++;
}}return bg;
},setContent:function(bh,bi){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
this.setValue(bh,bi);
},getContent:function(J){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return this.getValue(J);
}}});
})();
(function(){var y="0px",x="mshtml",w="qx.client",v="qx.bom.element.Dimension",u="paddingRight",t="paddingLeft",s="paddingTop",r="paddingBottom";
qx.Class.define(v,{statics:{getWidth:qx.core.Variant.select(w,{"gecko":function(B){if(B.getBoundingClientRect){var C=B.getBoundingClientRect();
return Math.round(C.right)-Math.round(C.left);
}else{return B.offsetWidth;
}},"default":function(j){return j.offsetWidth;
}}),getHeight:qx.core.Variant.select(w,{"gecko":function(a){if(a.getBoundingClientRect){var b=a.getBoundingClientRect();
return Math.round(b.bottom)-Math.round(b.top);
}else{return a.offsetHeight;
}},"default":function(D){return D.offsetHeight;
}}),getSize:function(z){return {width:this.getWidth(z),height:this.getHeight(z)};
},__jW:{visible:true,hidden:true},getContentWidth:function(c){var e=qx.bom.element.Style;
var f=qx.bom.element.Overflow.getX(c);
var g=parseInt(e.get(c,t)||y,10);
var i=parseInt(e.get(c,u)||y,10);

if(this.__jW[f]){return c.clientWidth-g-i;
}else{if(c.clientWidth>=c.scrollWidth){return Math.max(c.clientWidth,c.scrollWidth)-g-i;
}else{var h=c.scrollWidth-g;
var d=qx.bom.client.Engine;

if(d.NAME===x&&d.VERSION==6){h-=i;
}return h;
}}},getContentHeight:function(k){var m=qx.bom.element.Style;
var o=qx.bom.element.Overflow.getY(k);
var p=parseInt(m.get(k,s)||y,10);
var n=parseInt(m.get(k,r)||y,10);

if(this.__jW[o]){return k.clientHeight-p-n;
}else{if(k.clientHeight>=k.scrollHeight){return Math.max(k.clientHeight,k.scrollHeight)-p-n;
}else{var q=k.scrollHeight-p;
var l=qx.bom.client.Engine;

if(l.NAME===x&&l.VERSION==6){q-=n;
}return q;
}}},getContentSize:function(A){return {width:this.getContentWidth(A),height:this.getContentHeight(A)};
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.form.IForm";
qx.Interface.define(c,{events:{"changeEnabled":d,"changeValid":d,"changeInvalidMessage":d,"changeRequired":d},members:{setEnabled:function(f){return arguments.length==1;
},getEnabled:function(){},setRequired:function(b){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(a){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var k="Use 'getBlocker().getContentBlockerElement()' instead.",j="Use 'getBlocker().getBlockerElement()' instead.",i="_applyBlockerColor",h="Number",g="__rs",f="qx.ui.core.MBlocker",e="_applyBlockerOpacity",d="Color";
qx.Mixin.define(f,{construct:function(){this.__rs=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:d,init:null,nullable:true,apply:i,themeable:true},blockerOpacity:{check:h,init:1,apply:e,themeable:true}},members:{__rs:null,_applyBlockerColor:function(l,m){this.__rs.setColor(l);
},_applyBlockerOpacity:function(a,b){this.__rs.setOpacity(a);
},block:function(){this.__rs.block();
},isBlocked:function(){return this.__rs.isBlocked();
},unblock:function(){this.__rs.unblock();
},forceUnblock:function(){this.__rs.forceUnblock();
},blockContent:function(c){this.__rs.blockContent(c);
},isContentBlocked:function(){return this.__rs.isContentBlocked();
},unblockContent:function(){this.__rs.unblockContent();
},forceUnblockContent:function(){this.__rs.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);
return this.__rs.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return this.__rs.getBlockerElement();
},getBlocker:function(){return this.__rs;
}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var k="qx.ui.window.Window",j="changeModal",i="changeVisibility",h="changeActive",g="_applyActiveWindow",f="__rt",d="__ru",c="qx.ui.window.MDesktop";
qx.Mixin.define(c,{properties:{activeWindow:{check:k,apply:g,init:null,nullable:true}},members:{__rt:null,__ru:null,getWindowManager:function(){if(!this.__ru){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__ru;
},supportsMaximize:function(){return true;
},setWindowManager:function(p){if(this.__ru){this.__ru.setDesktop(null);
}p.setDesktop(this);
this.__ru=p;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(a,b){this.getWindowManager().changeActiveWindow(a,b);

if(a){a.setActive(true);
}
if(b){b.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(o){if(qx.Class.isDefined(k)&&o instanceof qx.ui.window.Window){this._addWindow(o);
}},_addWindow:function(l){if(!qx.lang.Array.contains(this.getWindows(),l)){this.getWindows().push(l);
l.addListener(h,this._onChangeActive,this);
l.addListener(j,this._onChangeModal,this);
l.addListener(i,this._onChangeVisibility,this);
}
if(l.getActive()){this.setActiveWindow(l);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(n){if(qx.Class.isDefined(k)&&n instanceof qx.ui.window.Window){this._removeWindow(n);
}},_removeWindow:function(m){qx.lang.Array.remove(this.getWindows(),m);
m.removeListener(h,this._onChangeActive,this);
m.removeListener(j,this._onChangeModal,this);
m.removeListener(i,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__rt){this.__rt=[];
}return this.__rt;
}},destruct:function(){this._disposeArray(f);
this._disposeObjects(d);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__rv:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(A,B){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__rv;

if(!z){this.__rv=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,a,qx.bom.element.Cursor.compile(w).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(q,r){if(q){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(u,v){if(v===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(u===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__rv=null;
},defer:function(s,t){qx.ui.core.MChildrenHandling.remap(t);
}});
})();
(function(){var n="resize",m="position",l="0px",k="webkit",j="paddingLeft",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(q){this.__rw=qx.dom.Node.getWindow(q);
this.__rx=q;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__rw,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__rw:null,__rx:null,_createContainerElement:function(){var r=this.__rx;
if(qx.core.Variant.isSet(f,k)){if(!r.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var v=r.documentElement.style;
var s=r.body.style;
v.overflow=s.overflow=g;
v.padding=v.margin=s.padding=s.margin=l;
v.width=v.height=s.width=s.height=c;
var u=r.createElement(d);
r.body.appendChild(u);
var t=new qx.html.Root(u);
t.setStyle(m,b);
t.setAttribute(i,this.toHashCode());
return t;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var o=qx.bom.Viewport.getWidth(this.__rw);
var p=qx.bom.Viewport.getHeight(this.__rw);
return {minWidth:o,width:o,maxWidth:o,minHeight:p,height:p,maxHeight:p};
},_applyPadding:function(z,A,name){if(z&&(name==a||name==j)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,z,A,name);
},_applyDecorator:function(w,x){qx.ui.root.Abstract.prototype._applyDecorator.call(this,w,x);

if(!w){return;
}var y=this.getDecoratorElement().getInsets();

if(y.left||y.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__rw=this.__rx=null;
}});
})();
(function(){var u="zIndex",t="px",s="keydown",r="deactivate",q="This method is not needed anymore.",p="resize",o="keyup",n="keypress",m="backgroundColor",l="_applyOpacity",H="Use 'getBlockerElement' instead.",G="opacity",F="interval",E="Tab",D="Color",C="__mM",B="qx.ui.root.Page",A="Use 'getContentBlockerElement' instead.",z="Number",y="qx.ui.core.Blocker",w="__mJ",x="__mH",v="_applyColor";
qx.Class.define(y,{extend:qx.core.Object,construct:function(J){qx.core.Object.call(this);
this._widget=J;
this._isPageRoot=(qx.Class.isDefined(B)&&J instanceof qx.ui.root.Page);

if(this._isPageRoot){J.addListener(p,this.__mN,this);
}this.__mE=[];
this.__mF=[];
this.__mG=[];
},properties:{color:{check:D,init:null,nullable:true,apply:v,themeable:true},opacity:{check:z,init:1,apply:l,themeable:true}},members:{__mH:null,__mI:0,__mJ:null,__mG:null,__mE:null,__mF:null,__mK:null,__mL:0,__mM:null,_isPageRoot:false,_widget:null,__mN:function(e){var K=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:K.width,height:K.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:K.width,height:K.height});
}},_applyColor:function(h,j){var k=qx.theme.manager.Color.getInstance().resolve(h);
this.__mO(m,k);
},_applyOpacity:function(N,O){this.__mO(G,N);
},__mO:function(b,c){var d=[];
this.__mH&&d.push(this.__mH);
this.__mJ&&d.push(this.__mJ);

for(var i=0;i<d.length;i++){d[i].setStyle(b,c);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
this.__mL+=1;

if(this.__mL==1){this.__mK=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
this.__mL-=1;

if(this.__mL==0){this._widget.setAnonymous(this.__mK);
}},_backupActiveWidget:function(){var V=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__mE.push(V.getActive());
this.__mF.push(V.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var U=this.__mE.length;

if(U>0){var T=this.__mE[U-1];

if(T){qx.bom.Element.activate(T);
}this.__mE.pop();
}var S=this.__mF.length;

if(S>0){var T=this.__mF[S-1];

if(T){qx.bom.Element.focus(this.__mF[S-1]);
}this.__mF.pop();
}},__mP:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,H);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__mH){this.__mH=this.__mP();
this.__mH.setStyle(u,15);
this._widget.getContainerElement().add(this.__mH);
this.__mH.exclude();
}return this.__mH;
},block:function(){this.__mI++;

if(this.__mI<2){this._backupActiveWidget();
var a=this.getBlockerElement();
a.include();
a.activate();
a.addListener(r,this.__mU,this);
a.addListener(n,this.__mT,this);
a.addListener(s,this.__mT,this);
a.addListener(o,this.__mT,this);
}},isBlocked:function(){return this.__mI>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__mI--;

if(this.__mI<1){this.__mQ();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__mI=0;
this.__mQ();
},__mQ:function(){this._restoreActiveWidget();
var I=this.getBlockerElement();
I.removeListener(r,this.__mU,this);
I.removeListener(n,this.__mT,this);
I.removeListener(s,this.__mT,this);
I.removeListener(o,this.__mT,this);
I.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__mJ){this.__mJ=this.__mP();
this._widget.getContentElement().add(this.__mJ);
this.__mJ.exclude();
}return this.__mJ;
},blockContent:function(P){var Q=this.getContentBlockerElement();
Q.setStyle(u,P);
this.__mG.push(P);

if(this.__mG.length<2){Q.include();

if(this._isPageRoot){if(!this.__mM){this.__mM=new qx.event.Timer(300);
this.__mM.addListener(F,this.__mS,this);
}this.__mM.start();
this.__mS();
}}},isContentBlocked:function(){return this.__mG.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mG.pop();
var L=this.__mG[this.__mG.length-1];
var M=this.getContentBlockerElement();
M.setStyle(u,L);

if(this.__mG.length<1){this.__mR();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mG=[];
var R=this.getContentBlockerElement();
R.setStyle(u,null);
this.__mR();
},__mR:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__mM.stop();
}},__mS:function(){var f=this._widget.getContainerElement().getDomElement();
var g=qx.dom.Node.getDocument(f);
this.getContentBlockerElement().setStyles({height:g.documentElement.scrollHeight+t,width:g.documentElement.scrollWidth+t});
},__mT:function(e){if(e.getKeyIdentifier()==E){e.stop();
}},__mU:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(p,this.__mN,this);
}this._disposeObjects(w,x,C);
this.__mK=this.__mE=this.__mF=this._widget=this.__mG=null;
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
this.addListener(s,this.__mV,this);
this.addListener(n,this.__mV,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__mV:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var F="keypress",E="focusout",D="activate",C="Tab",B="singleton",A="deactivate",z="__oL",y="focusin",x="qx.ui.core.FocusHandler";
qx.Class.define(x,{extend:qx.core.Object,type:B,construct:function(){qx.core.Object.call(this);
this.__oL={};
},members:{__oL:null,__oM:null,__oN:null,__oO:null,connectTo:function(a){a.addListener(F,this.__oP,this);
a.addListener(y,this._onFocusIn,this,true);
a.addListener(E,this._onFocusOut,this,true);
a.addListener(D,this._onActivate,this,true);
a.addListener(A,this._onDeactivate,this,true);
},addRoot:function(w){this.__oL[w.$$hash]=w;
},removeRoot:function(bi){delete this.__oL[bi.$$hash];
},getActiveWidget:function(){return this.__oM;
},isActive:function(k){return this.__oM==k;
},getFocusedWidget:function(){return this.__oN;
},isFocused:function(G){return this.__oN==G;
},isFocusRoot:function(d){return !!this.__oL[d.$$hash];
},_onActivate:function(e){var c=e.getTarget();
this.__oM=c;
var b=this.__oQ(c);

if(b!=this.__oO){this.__oO=b;
}},_onDeactivate:function(e){var f=e.getTarget();

if(this.__oM==f){this.__oM=null;
}},_onFocusIn:function(e){var J=e.getTarget();

if(J!=this.__oN){this.__oN=J;
J.visualizeFocus();
}},_onFocusOut:function(e){var bd=e.getTarget();

if(bd==this.__oN){this.__oN=null;
bd.visualizeBlur();
}},__oP:function(e){if(e.getKeyIdentifier()!=C){return;
}
if(!this.__oO){return;
}e.stopPropagation();
e.preventDefault();
var u=this.__oN;

if(!e.isShiftPressed()){var v=u?this.__oU(u):this.__oS();
}else{var v=u?this.__oV(u):this.__oT();
}if(v){v.tabFocus();
}},__oQ:function(H){var I=this.__oL;

while(H){if(I[H.$$hash]){return H;
}H=H.getLayoutParent();
}return null;
},__oR:function(R,S){if(R===S){return 0;
}var U=R.getTabIndex()||0;
var T=S.getTabIndex()||0;

if(U!=T){return U-T;
}var ba=R.getContainerElement().getDomElement();
var Y=S.getContainerElement().getDomElement();
var X=qx.bom.element.Location;
var W=X.get(ba);
var V=X.get(Y);
if(W.top!=V.top){return W.top-V.top;
}if(W.left!=V.left){return W.left-V.left;
}var bb=R.getZIndex();
var bc=S.getZIndex();

if(bb!=bc){return bb-bc;
}return 0;
},__oS:function(){return this.__oY(this.__oO,null);
},__oT:function(){return this.__pa(this.__oO,null);
},__oU:function(m){var n=this.__oO;

if(n==m){return this.__oS();
}
while(m&&m.getAnonymous()){m=m.getLayoutParent();
}
if(m==null){return [];
}var o=[];
this.__oW(n,m,o);
o.sort(this.__oR);
var p=o.length;
return p>0?o[0]:this.__oS();
},__oV:function(be){var bf=this.__oO;

if(bf==be){return this.__oT();
}
while(be&&be.getAnonymous()){be=be.getLayoutParent();
}
if(be==null){return [];
}var bg=[];
this.__oX(bf,be,bg);
bg.sort(this.__oR);
var bh=bg.length;
return bh>0?bg[bh-1]:this.__oT();
},__oW:function(parent,q,r){var s=parent.getLayoutChildren();
var t;

for(var i=0,l=s.length;i<l;i++){t=s[i];
if(!(t instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(t)&&t.isEnabled()&&t.isVisible()){if(t.isTabable()&&this.__oR(q,t)<0){r.push(t);
}this.__oW(t,q,r);
}}},__oX:function(parent,N,O){var P=parent.getLayoutChildren();
var Q;

for(var i=0,l=P.length;i<l;i++){Q=P[i];
if(!(Q instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(Q)&&Q.isEnabled()&&Q.isVisible()){if(Q.isTabable()&&this.__oR(N,Q)>0){O.push(Q);
}this.__oX(Q,N,O);
}}},__oY:function(parent,K){var L=parent.getLayoutChildren();
var M;

for(var i=0,l=L.length;i<l;i++){M=L[i];
if(!(M instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(M)&&M.isEnabled()&&M.isVisible()){if(M.isTabable()){if(K==null||this.__oR(M,K)<0){K=M;
}}K=this.__oY(M,K);
}}return K;
},__pa:function(parent,g){var h=parent.getLayoutChildren();
var j;

for(var i=0,l=h.length;i<l;i++){j=h[i];
if(!(j instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(j)&&j.isEnabled()&&j.isVisible()){if(j.isTabable()){if(g==null||this.__oR(j,g)>0){g=j;
}}g=this.__pa(j,g);
}}return g;
}},destruct:function(){this._disposeMap(z);
this.__oN=this.__oM=this.__oO=null;
}});
})();
(function(){var G="qx.client",F="head",E="text/css",D="stylesheet",C="}",B='@import "',A="{",z='";',y="qx.bom.Stylesheet",x="link",w="style";
qx.Class.define(y,{statics:{includeFile:function(j,k){if(!k){k=document;
}var l=k.createElement(x);
l.type=E;
l.rel=D;
l.href=qx.util.ResourceManager.getInstance().toUri(j);
var m=k.getElementsByTagName(F)[0];
m.appendChild(l);
},createElement:qx.core.Variant.select(G,{"mshtml":function(M){var N=document.createStyleSheet();

if(M){N.cssText=M;
}return N;
},"default":function(u){var v=document.createElement(w);
v.type=E;

if(u){v.appendChild(document.createTextNode(u));
}document.getElementsByTagName(F)[0].appendChild(v);
return v.sheet;
}}),addRule:qx.core.Variant.select(G,{"mshtml":function(be,bf,bg){be.addRule(bf,bg);
},"default":function(c,d,e){c.insertRule(d+A+e+C,c.cssRules.length);
}}),removeRule:qx.core.Variant.select(G,{"mshtml":function(O,P){var Q=O.rules;
var R=Q.length;

for(var i=R-1;i>=0;--i){if(Q[i].selectorText==P){O.removeRule(i);
}}},"default":function(q,r){var s=q.cssRules;
var t=s.length;

for(var i=t-1;i>=0;--i){if(s[i].selectorText==r){q.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(G,{"mshtml":function(J){var K=J.rules;
var L=K.length;

for(var i=L-1;i>=0;i--){J.removeRule(i);
}},"default":function(n){var o=n.cssRules;
var p=o.length;

for(var i=p-1;i>=0;i--){n.deleteRule(i);
}}}),addImport:qx.core.Variant.select(G,{"mshtml":function(a,b){a.addImport(b);
},"default":function(H,I){H.insertRule(B+I+z,H.cssRules.length);
}}),removeImport:qx.core.Variant.select(G,{"mshtml":function(ba,bb){var bc=ba.imports;
var bd=bc.length;

for(var i=bd-1;i>=0;i--){if(bc[i].href==bb){ba.removeImport(i);
}}},"default":function(V,W){var X=V.cssRules;
var Y=X.length;

for(var i=Y-1;i>=0;i--){if(X[i].href==W){V.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(G,{"mshtml":function(f){var g=f.imports;
var h=g.length;

for(var i=h-1;i>=0;i--){f.removeImport(i);
}},"default":function(S){var T=S.cssRules;
var U=T.length;

for(var i=U-1;i>=0;i--){if(T[i].type==T[i].IMPORT_RULE){S.deleteRule(i);
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
(function(){var b="qx.html.Root";
qx.Class.define(b,{extend:qx.html.Element,construct:function(a){qx.html.Element.call(this);

if(a!=null){this.useElement(a);
}},members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var d="maxWidth",c="qx.ui.progressive.renderer.table.Widths",b="minWidth",a="width";
qx.Class.define(c,{extend:qx.core.Object,construct:function(g){qx.core.Object.call(this);
this.__KT=[];

for(var i=0;i<g;i++){this.__KT[i]=new qx.ui.core.ColumnData();
}},members:{__KT:null,getData:function(){return this.__KT;
},set:function(h,j){for(var k in j){switch(k){case a:this.setWidth(h,j[k]);
break;
case b:this.setMinWidth(h,j[k]);
break;
case d:this.setMaxWidth(h,j[k]);
break;
default:throw new Error("Unrecognized key: "+k);
}}},setWidth:function(l,m){if(l>this.__KT.length-1||l<0){throw new Error("Column number out of range");
}this.__KT[l].setColumnWidth(m);
},setMinWidth:function(n,o){if(n>this.__KT.length-1||n<0){throw new Error("Column number out of range");
}this.__KT[n].setMinWidth(o);
},setMaxWidth:function(e,f){if(e>this.__KT.length-1||e<0){throw new Error("Column number out of range");
}this.__KT[e].setMaxWidth(f);
}}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(e);
},members:{__lT:null,renderLayout:function(j,top,k,l){this.__lT=k;
},getComputedWidth:function(){return this.__lT;
},getFlex:function(){return this.getLayoutProperties().flex||0;
},setColumnWidth:function(f,g){var g=g||0;
var h=null;

if(typeof f==c){this.setWidth(f);
}else if(typeof f==d){if(f==e){g=1;
}else{var i=f.match(/^[0-9]+(?:\.[0-9]+)?([%\*])$/);

if(i){if(i[1]==b){g=parseFloat(f);
}else{h=f;
}}}}this.setLayoutProperties({flex:g,width:h});
}},settings:{"qx.tableResizeDebug":false}});
})();
(function(){var b="qx.ui.progressive.headfoot.Abstract",a="abstract";
qx.Class.define(b,{type:a,extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.HBox());
},members:{__Ho:null,join:function(c){this.__Ho=c;
}},destruct:function(){this.__Ho=null;
}});
})();
(function(){var l="progressive-table-header-cell",k="resize",j="progressive-table-header",h="_layout",g="qx.ui.progressive.headfoot.TableHeading";
qx.Class.define(g,{extend:qx.ui.progressive.headfoot.Abstract,construct:function(a,b){qx.ui.progressive.headfoot.Abstract.call(this);
this.__Hp=a;
var d=a.getData();
this.__Hq=[];
for(var i=0;i<d.length;i++){var f=new qx.ui.basic.Atom(b[i]);
f.setAppearance(l);
this.add(f);
this.__Hq[i]=f;
}var c=new qx.ui.core.Widget();
c.set({height:16,appearance:l,minWidth:0,width:0});
this.add(c,{flex:1});
this.addListener(k,this._resizeColumns,this);
this.__Hr=new qx.ui.layout.HBox();
this.__Hr.connectToWidget(this);
},properties:{appearance:{refine:true,init:j}},members:{__Hp:null,__Hs:null,__Hq:null,__Hr:null,join:function(o){qx.ui.progressive.headfoot.Abstract.prototype.join.call(this,o);
},getLayoutChildren:function(){if(this.__Hs){return this.__Hp.getData();
}else{return qx.ui.progressive.headfoot.Abstract.prototype.getLayoutChildren.call(this);
}},_resizeColumns:function(e){var m=this.getBounds().width-qx.bom.element.Overflow.getScrollbarWidth();
this.__Hs=true;
this.__Hr.renderLayout(m,100);
this.__Hs=false;
var n=this.__Hp.getData();
for(var i=0;i<n.length;i++){this.__Hq[i].setWidth(n[i].getComputedWidth());
}}},destruct:function(){this.__Hp=this.__Hq=null;
this._disposeObjects(h);
}});
})();
(function(){var F="_applyLayoutChange",E="left",D="center",C="top",B="Decorator",A="middle",z="_applyReversed",y="bottom",x="Boolean",w="right",u="Integer",v="qx.ui.layout.HBox";
qx.Class.define(v,{extend:qx.ui.layout.Abstract,construct:function(r,s,t){qx.ui.layout.Abstract.call(this);

if(r){this.setSpacing(r);
}
if(s){this.setAlignX(s);
}
if(t){this.setSeparator(t);
}},properties:{alignX:{check:[E,D,w],init:E,apply:F},alignY:{check:[C,A,y],init:C,apply:F},spacing:{check:u,init:0,apply:F},separator:{check:B,nullable:true,apply:F},reversed:{check:x,init:false,apply:z}},members:{__ki:null,__kj:null,__kk:null,__kl:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__km:function(){var L=this._getLayoutChildren();
var length=L.length;
var I=false;
var G=this.__ki&&this.__ki.length!=length&&this.__kj&&this.__ki;
var J;
var H=G?this.__ki:new Array(length);
var K=G?this.__kj:new Array(length);
if(this.getReversed()){L=L.concat().reverse();
}for(var i=0;i<length;i++){J=L[i].getLayoutProperties();

if(J.width!=null){H[i]=parseFloat(J.width)/100;
}
if(J.flex!=null){K[i]=J.flex;
I=true;
}else{K[i]=0;
}}if(!G){this.__ki=H;
this.__kj=K;
}this.__kk=I;
this.__kl=L;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(M,N){if(this._invalidChildrenCache){this.__km();
}var T=this.__kl;
var length=T.length;
var bd=qx.ui.layout.Util;
var bc=this.getSpacing();
var bg=this.getSeparator();

if(bg){var Q=bd.computeHorizontalSeparatorGaps(T,bc,bg);
}else{var Q=bd.computeHorizontalGaps(T,bc,true);
}var i,O,ba,Y;
var bf=[];
var U=Q;

for(i=0;i<length;i+=1){Y=this.__ki[i];
ba=Y!=null?Math.floor((M-Q)*Y):T[i].getSizeHint().width;
bf.push(ba);
U+=ba;
}if(this.__kk&&U!=M){var W={};
var bb,be;

for(i=0;i<length;i+=1){bb=this.__kj[i];

if(bb>0){V=T[i].getSizeHint();
W[i]={min:V.minWidth,value:bf[i],max:V.maxWidth,flex:bb};
}}var R=bd.computeFlexOffsets(W,M,U);

for(i in R){be=R[i].offset;
bf[i]+=be;
U+=be;
}}var bk=T[0].getMarginLeft();
if(U<M&&this.getAlignX()!=E){bk=M-U;

if(this.getAlignX()===D){bk=Math.round(bk/2);
}}var V,top,P,ba,S,bi,X;
var bc=this.getSpacing();
this._clearSeparators();
if(bg){var bh=qx.theme.manager.Decoration.getInstance().resolve(bg).getInsets();
var bj=bh.left+bh.right;
}for(i=0;i<length;i+=1){O=T[i];
ba=bf[i];
V=O.getSizeHint();
bi=O.getMarginTop();
X=O.getMarginBottom();
P=Math.max(V.minHeight,Math.min(N-bi-X,V.maxHeight));
top=bd.computeVerticalAlignOffset(O.getAlignY()||this.getAlignY(),P,N,bi,X);
if(i>0){if(bg){bk+=S+bc;
this._renderSeparator(bg,{left:bk,top:0,width:bj,height:N});
bk+=bj+bc+O.getMarginLeft();
}else{bk+=bd.collapseMargins(bc,S,O.getMarginLeft());
}}O.renderLayout(bk,top,ba,P);
bk+=ba;
S=O.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__km();
}var g=qx.ui.layout.Util;
var q=this.__kl;
var a=0,h=0,e=0;
var d=0,f=0;
var n,b,p;
for(var i=0,l=q.length;i<l;i+=1){n=q[i];
b=n.getSizeHint();
h+=b.width;
var m=this.__kj[i];
var c=this.__ki[i];

if(m){a+=b.minWidth;
}else if(c){e=Math.max(e,Math.round(b.minWidth/c));
}else{a+=b.width;
}p=n.getMarginTop()+n.getMarginBottom();
if((b.height+p)>f){f=b.height+p;
}if((b.minHeight+p)>d){d=b.minHeight+p;
}}a+=e;
var k=this.getSpacing();
var o=this.getSeparator();

if(o){var j=g.computeHorizontalSeparatorGaps(q,k,o);
}else{var j=g.computeHorizontalGaps(q,k,true);
}return {minWidth:a+j,width:h+j,minHeight:d,height:f};
}},destruct:function(){this.__ki=this.__kj=this.__kl=null;
}});
})();
(function(){var q="progressive-progressbar-indicator-undone",p="progress",o="%",n="progressive-progressbar-indicator-done",m="progressive-progressbar-percent-text",l="renderStart",k="progressive-progressbar-background",j="qx.ui.progressive.headfoot.Progress",i="__KO",h="__KP",f="progressive-progressbar-percent-background",g="renderEnd";
qx.Class.define(j,{extend:qx.ui.progressive.headfoot.Abstract,construct:function(s,t){qx.ui.progressive.headfoot.Abstract.call(this);
this.setHeight(16);
this.setPadding(0);
this.__KN={};
var u=qx.theme.manager.Color.getInstance();
this.__KN.background=u.resolve(k);
this.__KN.indicatorDone=u.resolve(n);
this.__KN.indicatorUndone=u.resolve(q);
this.__KN.percentBackground=u.resolve(f);
this.__KN.percentText=u.resolve(m);
this.set({backgroundColor:this.__KN.background});
this.__KO=new qx.ui.core.Widget();
this.__KO.set({width:0,backgroundColor:this.__KN.indicatorDone});
this.add(this.__KO);
var v=new qx.ui.core.Widget();
v.set({backgroundColor:this.__KN.indicatorUndone});
this.add(v,{flex:1});
this.__KP=new qx.ui.basic.Atom("0%");
this.__KP.set({width:100,backgroundColor:this.__KN.percentBackground,textColor:this.__KN.percentText});
this.add(this.__KP);
this.exclude();
},members:{__KQ:null,__KN:null,__KO:null,__KP:null,join:function(r){qx.ui.progressive.headfoot.Abstract.prototype.join.call(this,r);
r.addListener(l,function(e){this.__KQ=e.getData().initial;
this.show();
},this);
r.addListener(p,function(e){var c=1.0-(e.getData().remaining/this.__KQ);
var d=this.getBounds();

if(d){var a=Math.floor((d.width-this.__KP.getBounds().width)*c);
var b=Math.floor(c*100)+o;

if(!isNaN(a)){this.__KO.setMinWidth(a);
this.__KP.setLabel(b);
}}},this);
r.addListener(g,function(e){this.exclude();
},this);
}},destruct:function(){this.__KN=null;
this._disposeObjects(i,h);
}});
})();
(function(){var d="abstract",c="qx.ui.progressive.structure.Abstract",b="overflowY",a="auto";
qx.Class.define(c,{type:d,extend:qx.core.Object,construct:function(f){qx.core.Object.call(this);
if(!f){this.__IX=new qx.ui.core.Widget();
this.__IY=this.__IX;
}else{this.__IX=null;
this.__IY=f;
}this.__IY.getContentElement().setStyle(b,a);
},members:{__IX:null,__IY:null,applyStructure:function(e){throw new Error("applyStructure() is abstract");
},getPane:function(){return this.__IY;
}},destruct:function(){if(this.__IX){this.__IX.dispose();
}this.__IX=this.__IY=null;
}});
})();
(function(){var a="qx.ui.progressive.structure.Default";
qx.Class.define(a,{extend:qx.ui.progressive.structure.Abstract,construct:function(b,c,d){qx.ui.progressive.structure.Abstract.call(this,d);
if(!b){this.__Ja=new qx.ui.progressive.headfoot.Null();
this.__Jb=this.__Ja;
}else{this.__Ja=null;
this.__Jb=b;
}if(!c){this.__Jc=new qx.ui.progressive.headfoot.Null();
this.__Jd=this.__Jc;
}else{this.__Jc=null;
this.__Jd=c;
}},members:{__Jb:null,__Jd:null,__Ja:null,__Jc:null,applyStructure:function(e){this.__Jb.join(e);
this.__Jd.join(e);
e.add(this.__Jb);
e.add(this.getPane(),{flex:1});
e.add(this.__Jd);
},getHeader:function(){return this.__Jb;
},getFooter:function(){return this.__Jd;
}},destruct:function(){if(this.__Ja){this.__Ja.dispose();
this.__Ja=null;
}
if(this.__Jc){this.__Jc.dispose();
this.__Jc=null;
}this.__Jb=this.__Jd=null;
}});
})();
(function(){var a="qx.ui.progressive.headfoot.Null";
qx.Class.define(a,{extend:qx.ui.progressive.headfoot.Abstract,construct:function(){qx.ui.progressive.headfoot.Abstract.call(this);
this.exclude();
}});
})();
(function(){var r="qx.event.type.Data",q="dataAvailable",p="renderStart",o="Integer",n="_applyDataModel",m="Boolean",l="qx.ui.progressive.model.Abstract",k="progress",j="white",h="qx.ui.progressive.Progressive",f="progressDetail",g="renderEnd";
qx.Class.define(h,{extend:qx.ui.container.Composite,construct:function(x){qx.ui.container.Composite.call(this,new qx.ui.layout.VBox());
this.__Je={};
this.set({backgroundColor:j});
if(!x){x=new qx.ui.progressive.structure.Default();
}this.__Jf=x;
x.applyStructure(this);
this.__Jg=false;
this.__Jh=false;
this.__Ji=0;
},events:{"renderStart":r,"renderEnd":r,"progress":r,"progressDetail":r},properties:{dataModel:{check:l,apply:n},batchSize:{check:o,init:20},flushWidgetQueueAfterBatch:{check:m,init:false},interElementTimeout:{check:o,init:0}},members:{__Je:null,__Jh:null,__Jj:null,__Ji:null,__Jg:null,__Jf:null,getStructure:function(){return this.__Jf;
},addRenderer:function(name,t){this.__Je[name]=t;
t.join(this,name);
},removeRenderer:function(name){if(!this.__Je[name]){throw new Error("No existing renderer named "+name);
}delete this.__Je[name];
},render:function(){if(this.__Jh){return;
}this.__Jh=true;
var s=new qx.ui.progressive.State({progressive:this,model:this.getDataModel(),pane:this.__Jf.getPane(),batchSize:this.getBatchSize(),rendererData:this.__Jl(),userData:{}});
this.__Jj=new Date();
if(this.__Jg){this.__Ji=s.getModel().getElementCount();
this.fireDataEvent(p,{state:s,initial:this.__Ji});
this.__Jk(s);
}else{qx.event.Timer.once(function(){this.__Ji=s.getModel().getElementCount();
this.fireDataEvent(p,{state:s,initial:this.__Ji});
this.__Jk(s);
this.__Jg=true;
},this,10);
}},_applyDataModel:function(v,w){if(w){w.removeListener(q,this.__Jm,this);
w.dispose();
}v.addListener(q,this.__Jm,this);
},__Jk:function(a){var b;
var d;
var c;

for(var i=a.getBatchSize();i>0;i--){b=a.getModel().getNextElement();

if(!b){this.debug("Render time: "+(new Date()-this.__Jj)+"ms");
this.__Jh=false;
this.fireDataEvent(g,a);
a.dispose();
return ;
}d=b.element;
c=this.__Je[d.renderer];
c.render(a,d);
this.fireDataEvent(f,{initial:this.__Ji,remaining:b.remaining,element:d});
}this.fireDataEvent(k,{initial:this.__Ji,remaining:b.remaining});
if(this.getFlushWidgetQueueAfterBatch()){qx.ui.core.queue.Manager.flush();
}qx.event.Timer.once(function(){this.__Jk(a);
},this,this.getInterElementTimeout());
},__Jl:function(){var u={};

for(var name in this.__Je){u[name]={};
}return u;
},__Jm:function(e){this.__Ji=e.getData();
this.render();
}},destruct:function(){for(var name in this.__Je){this.__Je[name].dispose();
}this.__Jj=this.__Je=this.__Jf=null;
}});
})();
(function(){var I="_applyLayoutChange",H="top",G="left",F="middle",E="Decorator",D="center",C="_applyReversed",B="bottom",A="qx.ui.layout.VBox",z="Integer",x="right",y="Boolean";
qx.Class.define(A,{extend:qx.ui.layout.Abstract,construct:function(bi,bj,bk){qx.ui.layout.Abstract.call(this);

if(bi){this.setSpacing(bi);
}
if(bj){this.setAlignY(bj);
}
if(bk){this.setSeparator(bk);
}},properties:{alignY:{check:[H,F,B],init:H,apply:I},alignX:{check:[G,D,x],init:G,apply:I},spacing:{check:z,init:0,apply:I},separator:{check:E,nullable:true,apply:I},reversed:{check:y,init:false,apply:C}},members:{__iy:null,__iz:null,__iA:null,__iB:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__iC:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__iy&&this.__iy.length!=length&&this.__iz&&this.__iy;
var u;
var t=r?this.__iy:new Array(length);
var v=r?this.__iz:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}else{v[i]=0;
}}if(!r){this.__iy=t;
this.__iz=v;
}this.__iA=s;
this.__iB=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(J,K){if(this._invalidChildrenCache){this.__iC();
}var R=this.__iB;
var length=R.length;
var bc=qx.ui.layout.Util;
var bb=this.getSpacing();
var bf=this.getSeparator();

if(bf){var O=bc.computeVerticalSeparatorGaps(R,bb,bf);
}else{var O=bc.computeVerticalGaps(R,bb,true);
}var i,M,N,V;
var W=[];
var bd=O;

for(i=0;i<length;i+=1){V=this.__iy[i];
N=V!=null?Math.floor((K-O)*V):R[i].getSizeHint().height;
W.push(N);
bd+=N;
}if(this.__iA&&bd!=K){var T={};
var ba,be;

for(i=0;i<length;i+=1){ba=this.__iz[i];

if(ba>0){S=R[i].getSizeHint();
T[i]={min:S.minHeight,value:W[i],max:S.maxHeight,flex:ba};
}}var P=bc.computeFlexOffsets(T,K,bd);

for(i in P){be=P[i].offset;
W[i]+=be;
bd+=be;
}}var top=R[0].getMarginTop();
if(bd<K&&this.getAlignY()!=H){top=K-bd;

if(this.getAlignY()===F){top=Math.round(top/2);
}}var S,bh,X,N,U,Y,Q;
this._clearSeparators();
if(bf){var bg=qx.theme.manager.Decoration.getInstance().resolve(bf).getInsets();
var L=bg.top+bg.bottom;
}for(i=0;i<length;i+=1){M=R[i];
N=W[i];
S=M.getSizeHint();
Y=M.getMarginLeft();
Q=M.getMarginRight();
X=Math.max(S.minWidth,Math.min(J-Y-Q,S.maxWidth));
bh=bc.computeHorizontalAlignOffset(M.getAlignX()||this.getAlignX(),X,J,Y,Q);
if(i>0){if(bf){top+=U+bb;
this._renderSeparator(bf,{top:top,left:0,height:L,width:J});
top+=L+bb+M.getMarginTop();
}else{top+=bc.collapseMargins(bb,U,M.getMarginTop());
}}M.renderLayout(bh,top,X,N);
top+=N;
U=M.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__iC();
}var g=qx.ui.layout.Util;
var q=this.__iB;
var c=0,f=0,e=0;
var a=0,h=0;
var n,b,p;
for(var i=0,l=q.length;i<l;i+=1){n=q[i];
b=n.getSizeHint();
f+=b.height;
var m=this.__iz[i];
var d=this.__iy[i];

if(m){c+=b.minHeight;
}else if(d){e=Math.max(e,Math.round(b.minHeight/d));
}else{c+=b.height;
}p=n.getMarginLeft()+n.getMarginRight();
if((b.width+p)>h){h=b.width+p;
}if((b.minWidth+p)>a){a=b.minWidth+p;
}}c+=e;
var k=this.getSpacing();
var o=this.getSeparator();

if(o){var j=g.computeVerticalSeparatorGaps(q,k,o);
}else{var j=g.computeVerticalGaps(q,k,true);
}return {minHeight:c+j,height:f+j,minWidth:a,width:h};
}},destruct:function(){this.__iy=this.__iz=this.__iB=null;
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
this.__Jt=[];
},members:{__Jt:null,addElements:function(c){this.__Jt=this.__Jt.concat(c);
this.fireDataEvent(b,this.__Jt.length);
},addElement:function(d){this.__Jt.push(d);
this.fireDataEvent(b,this.__Jt.length);
},getElementCount:function(){return this.__Jt.length;
},getNextElement:function(){if(this.__Jt.length>0){return ({element:this.__Jt.shift(),remaining:this.__Jt.length});
}return null;
}},destruct:function(){this.__Jt=null;
}});
})();
(function(){var d="qx.ui.progressive.renderer.Abstract",c="abstract";
qx.Class.define(d,{type:c,extend:qx.core.Object,members:{render:function(a,b){throw new Error("render() is abstract");
},join:function(e,name){}}});
})();
(function(){var q=".qx-progressive-",p="-col-",o="px;",n="-row",m="}",l="width: ",k="0px ",j="qx-progressive-",h="px",g="  font-size: 11px;",Y="padding: ",X="px ",W='',V="__Ik",U="end",T="qx.client",S="div",R="  position: absolute;",Q="  width : 100%;",P="__columnData",x="  border-bottom:1px solid #eeeeee;",y="",v="  top: 0px;",w="  overflow:hidden;",t=" {",u="  cursor:default;",r="  font-family: 'Segoe UI', Corbel, Calibri, Tahoma, 'Lucida Sans Unicode', sans-serif;",s="-row {",z="resize",A="start",H="relative",F="  -o-text-overflow: ellipsis;",J="mshtml",I="  border-right:1px solid #f2f2f2;",L="  white-space:nowrap;",K=';-moz-user-select:none;',C="  padding : 0px 6px 0px 6px;",O="qx.ui.progressive.renderer.table.Row",N="progressive-table-row-background-odd",M="  text-overflow:ellipsis;",B="  height: 100%;",D="progressive-table-row-background-even",E="__Ih",G="left: ";
qx.Class.define(O,{extend:qx.ui.progressive.renderer.Abstract,construct:function(bf){qx.ui.progressive.renderer.Abstract.call(this);
this.__If=bf;
this.__Ig={};
this.__Ih=new qx.ui.progressive.renderer.table.cell.Default();
this.__Ii=null;
this.__Ij={};
var bg=qx.theme.manager.Color.getInstance();
this.__Ij.bgcol=[];
this.__Ij.bgcol[0]=bg.resolve(D);
this.__Ij.bgcol[1]=bg.resolve(N);
this.__Ik=new qx.ui.layout.HBox();
this.__Ik.connectToWidget(this);
},statics:{__Il:null,__Im:6,__In:R+v+B+w+M+F+L+I+x+C+u+g+r+(qx.core.Variant.isSet(T,J)?W:K)},properties:{defaultRowHeight:{init:16}},members:{__Ii:null,__Io:null,__Ip:null,__If:null,__Ig:null,__Ih:null,__Ij:null,__Ik:null,join:function(bs,name){if(this.__Ii){throw new Error("Renderer is already joined to a Progressive.");
}this.__Ii=bs;
this.__Io=name;
var bu=qx.ui.progressive.renderer.table.Row;

if(!bu.__Il){bu.__Il={};
}var bt=bs.toHashCode();

if(!bu.__Il[bt]){bu.__Il[bt]={rowstylesheet:null,cellstylesheet:[]};
var bv=q+bt+s+Q+m;
bu.__Il[bt].rowstylesheet=qx.bom.Stylesheet.createElement(bv);
var bw=this.__If.getData();

for(var i=0;i<bw.length;i++){var bv=q+bt+p+i+t+bu.__In+m;
bu.__Il[bt].cellstylesheet[i]=qx.bom.Stylesheet.createElement(bv);
}this.__Ip=bt;
var bx=bs.getStructure().getPane();
bx.addListener(z,this._resizeColumns,this);
}},addRenderer:function(ba,bb){var bc=this.__If.getData();

if(ba<0||ba>=bc.length){throw new Error("Column "+ba+" out of range (max: "+(bc.length-1)+")");
}this.__Ig[ba]=bb;
},removeRenderer:function(bd){var be=this.__If.getData();

if(bd<0||bd>=be.length){throw new Error("Column "+bd+" out of range (max: "+(be.length-1)+")");
}
if(!this.__Ig[bd]){throw new Error("No existing renderer for column "+bd);
}delete this.__Ig[bd];
},render:function(by,bz){var bJ=bz.data;
var bE=[];
var bG;
var bF;
var bC=0;
if(by.getRendererData()[this.__Io].end===undefined){by.getRendererData()[this.__Io]={end:0,start:1,rows:0,totalHeight:0};
}var bI=document.createElement(S);
for(var i=0;i<bJ.length;i++){var bD=j+this.__Ip+p+i;
bF=this.__Ig[i]||this.__Ih;
bG={state:by,rowDiv:bI,stylesheet:bD,element:bz,dataIndex:i,cellData:bJ[i],height:bC};
bE.push(bF.render(bG));
if(bG.height>bC){bC=bG.height;
}}bC=(bC>0?bC:this.getDefaultRowHeight());
var bH=by.getRendererData()[this.__Io];
bH.totalHeight+=bC;
bI.style.position=H;
bI.style.height=bC+h;
bI.className=j+this.__Ip+n;
bI.innerHTML=bE.join(y);
switch(bz.location){case U:var bA=bH.end||0;
bI.style.backgroundColor=this.__Ij.bgcol[bA];
bH.end=(bA==0?1:0);
by.getPane().getContentElement().getDomElement().appendChild(bI);
break;
case A:var bB=by.getPane().getContentElement().getDomElement();
var bK=bB.childNodes;
if(bK.length>0){var bA=bH.start;
bI.style.backgroundColor=this.__Ij.bgcol[bA];
bH.start=(bA==0?1:0);
bB.insertBefore(bI,bK[0]);
break;
}else{bB.appendChild(bI);
}break;
default:throw new Error("Invalid location: "+bz.location);
}++bH.rows;
},getLayoutChildren:function(){return this.__If.getData();
},_resizeColumns:function(e){var bo=this.__Ii.getStructure().getPane();
var bl=bo.getBounds().width-qx.bom.element.Overflow.getScrollbarWidth();
var bm=q+this.__Ip+n;
var bi=qx.ui.progressive.renderer.table.Row;
qx.bom.Stylesheet.removeRule(bi.__Il[this.__Ip].rowstylesheet,bm);
var bk=l+bl+o;
qx.bom.Stylesheet.addRule(bi.__Il[this.__Ip].rowstylesheet,bm,bk);
this.__Ik.renderLayout(bl,100);
var bn=this.__If.getData();
for(var i=0,br=0;i<bn.length;i++,br+=bl){var bm=q+this.__Ip+p+i;
var bi=qx.ui.progressive.renderer.table.Row;
qx.bom.Stylesheet.removeRule(bi.__Il[this.__Ip].cellstylesheet[i],bm);
bl=bn[i].getComputedWidth();
{};
var bj;

if(qx.bom.client.Feature.CONTENT_BOX){bj=qx.ui.progressive.renderer.table.Row.__Im*2;
}else{bj=-1;
}var bq=(bl-bj)+o;
var bp=k+qx.ui.progressive.renderer.table.Row.__Im+X+k+qx.ui.progressive.renderer.table.Row.__Im+o;
var bh=br+o;
var bk=bi.__In+l+bq+G+bh+Y+bp;
qx.bom.Stylesheet.addRule(bi.__Il[this.__Ip].cellstylesheet[i],bm,bk);
}}},destruct:function(){var name;

for(name in this.__Ig){this.__Ig[name]=null;
}var b=qx.ui.progressive.renderer.table.Row;
var a=this.__Ii.toHashCode();

if(b.__Il&&b.__Il[a]){if(b.__Il[a].rowstylesheet){var d=q+this.__Ip+n;
var b=qx.ui.progressive.renderer.table.Row;
qx.bom.Stylesheet.removeRule(b.__Il[this.__Ip].rowstylesheet,d);
}if(b.__Il[a].cellstylesheet){for(var i=b.__Il[a].cellstylesheet.length-1;i>=0;i--){var d=q+this.__Ip+p+i;
var c=b.__Il[this.__Ip].cellstylesheet[i];
var b=qx.ui.progressive.renderer.table.Row;
qx.bom.Stylesheet.removeRule(c,d);
}}}
if(this.__Ii&&this.__Ii.getRendererData){var f=this.__Ii.getRendererData();

if(f&&f[this.__Io]&&f[this.__Io].end!==undefined){f[this.__Io]=null;
}}this.__Ij=this.__Ig=this.__Ii=this.__If=null;
this._disposeObjects(V,E,P);
}});
})();
(function(){var k="",j="'",i="abstract",h=">",g="</div>",f="<div ",e="' ",d="style='",c="qx.ui.progressive.renderer.table.cell.Abstract",b="class='";
qx.Class.define(c,{type:i,extend:qx.core.Object,members:{_getCellStyle:function(a){return k;
},_getCellExtras:function(l){return k;
},_getContentHtml:function(p){return p.cellData||k;
},render:function(m){var o=[];
var n=this._getCellStyle(m);
o.push(f,b,m.stylesheet,e);

if(n){o.push(d,n,j);
}o.push(this._getCellExtras(m),h,this._getContentHtml(m),g);
return o.join(k);
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
(function(){var i="",h="<br",g=" &nbsp;",f="<br>",e=" ",d="\n",c="qx.bom.String";
qx.Class.define(c,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(b){return qx.util.StringEscape.escape(b,qx.bom.String.FROM_CHARCODE);
},unescape:function(a){return qx.util.StringEscape.unescape(a,qx.bom.String.TO_CHARCODE);
},fromText:function(j){return qx.bom.String.escape(j).replace(/(  |\n)/g,function(p){var q={"  ":g,"\n":f};
return q[p]||p;
});
},toText:function(n){return qx.bom.String.unescape(n.replace(/\s+|<([^>])+>/gi,function(o){if(o.indexOf(h)===0){return d;
}else if(o.length>0&&o.replace(/^\s*/,i).replace(/\s*$/,i)==i){return e;
}else{return i;
}}));
}},defer:function(k,l,m){k.FROM_CHARCODE=qx.lang.Object.invert(k.TO_CHARCODE);
}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Class.define(a,{statics:{escape:function(o,p){var r,t=d;

for(var i=0,l=o.length;i<l;i++){var s=o.charAt(i);
var q=s.charCodeAt(0);

if(p[q]){r=f+p[q]+g;
}else{if(q>0x7F){r=b+q+g;
}else{r=s;
}}t+=r;
}return t;
},unescape:function(m,n){return m.replace(/&[#\w]+;/gi,function(h){var j=h;
var h=h.substring(1,h.length-1);
var k=n[h];

if(k){j=String.fromCharCode(k);
}else{if(h.charAt(0)==c){if(h.charAt(1).toUpperCase()==e){k=h.substring(2);
if(k.match(/^[0-9A-Fa-f]+$/gi)){j=String.fromCharCode(parseInt(k,16));
}}else{k=h.substring(1);
if(k.match(/^\d+$/gi)){j=String.fromCharCode(parseInt(k,10));
}}}}return j;
});
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var u="",t="Number",s="-",r="0",q="String",p="changeNumberFormat",o='(',n="g",m="Boolean",l="$",e="NaN",k='([0-9]{1,3}(?:',h='{0,1}[0-9]{3}){0,})',d='\\d+){0,1}',c="qx.util.format.NumberFormat",g="Infinity",f="^",i=".",b="-Infinity",j='([-+]){0,1}';
qx.Class.define(c,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(a){qx.core.Object.call(this);
this.__lF=a;
},statics:{getIntegerInstance:function(){var H=qx.util.format.NumberFormat;

if(H._integerInstance==null){H._integerInstance=new H();
H._integerInstance.setMaximumFractionDigits(0);
}return H._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:t,init:0},maximumIntegerDigits:{check:t,nullable:true},minimumFractionDigits:{check:t,init:0},maximumFractionDigits:{check:t,nullable:true},groupingUsed:{check:m,init:true},prefix:{check:q,init:u,event:p},postfix:{check:q,init:u,event:p}},members:{__lF:null,format:function(v){switch(v){case Infinity:return g;
case -Infinity:return b;
case NaN:return e;
}var z=(v<0);

if(z){v=-v;
}
if(this.getMaximumFractionDigits()!=null){var G=Math.pow(10,this.getMaximumFractionDigits());
v=Math.round(v*G)/G;
}var F=String(Math.floor(v)).length;
var w=u+v;
var C=w.substring(0,F);

while(C.length<this.getMinimumIntegerDigits()){C=r+C;
}
if(this.getMaximumIntegerDigits()!=null&&C.length>this.getMaximumIntegerDigits()){C=C.substring(C.length-this.getMaximumIntegerDigits());
}var B=w.substring(F+1);

while(B.length<this.getMinimumFractionDigits()){B+=r;
}
if(this.getMaximumFractionDigits()!=null&&B.length>this.getMaximumFractionDigits()){B=B.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var y=C;
C=u;
var E;

for(E=y.length;E>3;E-=3){C=u+qx.locale.Number.getGroupSeparator(this.__lF)+y.substring(E-3,E)+C;
}C=y.substring(0,E)+C;
}var A=this.getPrefix()?this.getPrefix():u;
var x=this.getPostfix()?this.getPostfix():u;
var D=A+(z?s:u)+C;

if(B.length>0){D+=u+qx.locale.Number.getDecimalSeparator(this.__lF)+B;
}D+=x;
return D;
},parse:function(I){var N=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__lF)+u);
var L=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__lF)+u);
var J=new RegExp(f+qx.lang.String.escapeRegexpChars(this.getPrefix())+j+k+N+h+o+L+d+qx.lang.String.escapeRegexpChars(this.getPostfix())+l);
var M=J.exec(I);

if(M==null){throw new Error("Number string '"+I+"' does not match the number format");
}var O=(M[1]==s);
var Q=M[2];
var P=M[3];
Q=Q.replace(new RegExp(N,n),u);
var K=(O?s:u)+Q;

if(P!=null&&P.length!=0){P=P.replace(new RegExp(L),u);
K+=i+P;
}return parseFloat(K);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var dn="(\\d\\d?)",dm="format",dl="",dk="abbreviated",dj="wide",di="(",dh=")",dg="|",df="stand-alone",de="wildcard",cS="default",cR="literal",cQ="'",cP="hour",cO="(\\d\\d?\\d?)",cN="ms",cM="narrow",cL="-",cK="quoted_literal",cJ='a',dv="HH:mm:ss",dw="+",dt="HHmmss",du="long",dr='z',ds="0",dp="sec",dq="day",dx='Z',dy=" ",cW="min",cV="mm",cY="(\\d+)",cX="h",db="KK",da='L',dd="Z",dc="(\\d\\d+)",cU="EEEE",cT="^",bK=":",bL='y',bM="K",bN="a",bO="([\\+\\-]\\d\\d:?\\d\\d)",bP="GMT",bQ="dd",bR="qx.util.format.DateFormat",bS="yyy",bT="H",dC="YYYY",dB="y",dA="HH",dz="EE",dG='h',dF="S",dE='s',dD='A',dI="yyyyyy",dH="kk",ct="ss",cu='H',cr='S',cs="MMMM",cx='c',cy="d",cv="([a-zA-Z]+)",cw='k',cp="m",cq='Y',cc='D',cb="yyyyy",ce='K',cd="hh",bX="SSS",bW="MM",ca="yy",bY="(\\d\\d\\d\\d\\d\\d+)",bV="yyyy-MM-dd HH:mm:ss",bU="(\\d\\d\\d\\d\\d+)",cD="short",cE='d',cF="unkown",cG='m',cz="(\\d\\d\\d\\d)",cA="(\\d\\d\\d+)",cB="k",cC='M',cH="(\\d\\d\\d\\d+)",cI="SS",cm="MMM",cl="s",ck="M",cj='w',ci="EEE",ch="$",cg="?",cf='E',co="z",cn="yyyy";
qx.Class.define(bR,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(bE,bF){qx.core.Object.call(this);

if(!bF){this.__lG=qx.locale.Manager.getInstance().getLocale();
}else{this.__lG=bF;
}
if(bE!=null){this.__lH=bE.toString();
}else{this.__lH=qx.locale.Date.getDateFormat(du,this.__lG)+dy+qx.locale.Date.getDateTimeFormat(dt,dv,this.__lG);
}},statics:{getDateTimeInstance:function(){var bD=qx.util.format.DateFormat;
var bC=qx.locale.Date.getDateFormat(du)+dy+qx.locale.Date.getDateTimeFormat(dt,dv);

if(bD._dateInstance==null||bD._dateInstance.__lH!=bC){bD._dateTimeInstance=new bD();
}return bD._dateTimeInstance;
},getDateInstance:function(){var bH=qx.util.format.DateFormat;
var bG=qx.locale.Date.getDateFormat(cD)+dl;

if(bH._dateInstance==null||bH._dateInstance.__lH!=bG){bH._dateInstance=new bH(bG);
}return bH._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:bV,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__lG:null,__lH:null,__lI:null,__lJ:null,__lK:null,__lL:function(dJ,dK){var dL=dl+dJ;

while(dL.length<dK){dL=ds+dL;
}return dL;
},__lM:function(a){var b=new Date(a.getTime());
var c=b.getDate();

while(b.getMonth()!=0){b.setDate(-1);
c+=b.getDate()+1;
}return c;
},__lN:function(ea){return new Date(ea.getTime()+(3-((ea.getDay()+6)%7))*86400000);
},__lO:function(G){var I=this.__lN(G);
var J=I.getFullYear();
var H=this.__lN(new Date(J,0,4));
return Math.floor(1.5+(I.getTime()-H.getTime())/86400000/7);
},format:function(bi){if(bi==null){return null;
}var bo=qx.util.format.DateFormat;
var bp=this.__lG;
var bz=bi.getFullYear();
var bt=bi.getMonth();
var bB=bi.getDate();
var bj=bi.getDay();
var bu=bi.getHours();
var bq=bi.getMinutes();
var bv=bi.getSeconds();
var bx=bi.getMilliseconds();
var bA=bi.getTimezoneOffset();
var bm=bA>0?1:-1;
var bk=Math.floor(Math.abs(bA)/60);
var br=Math.abs(bA)%60;
this.__lP();
var by=dl;

for(var i=0;i<this.__lK.length;i++){var bw=this.__lK[i];

if(bw.type==cR){by+=bw.text;
}else{var bn=bw.character;
var bs=bw.size;
var bl=cg;

switch(bn){case bL:case cq:if(bs==2){bl=this.__lL(bz%100,2);
}else{bl=bz+dl;

if(bs>bl.length){for(var i=bl.length;i<bs;i++){bl=ds+bl;
}}}break;
case cc:bl=this.__lL(this.__lM(bi),bs);
break;
case cE:bl=this.__lL(bB,bs);
break;
case cj:bl=this.__lL(this.__lO(bi),bs);
break;
case cf:if(bs==2){bl=qx.locale.Date.getDayName(cM,bj,bp,dm);
}else if(bs==3){bl=qx.locale.Date.getDayName(dk,bj,bp,dm);
}else if(bs==4){bl=qx.locale.Date.getDayName(dj,bj,bp,dm);
}break;
case cx:if(bs==2){bl=qx.locale.Date.getDayName(cM,bj,bp,df);
}else if(bs==3){bl=qx.locale.Date.getDayName(dk,bj,bp,df);
}else if(bs==4){bl=qx.locale.Date.getDayName(dj,bj,bp,df);
}break;
case cC:if(bs==1||bs==2){bl=this.__lL(bt+1,bs);
}else if(bs==3){bl=qx.locale.Date.getMonthName(dk,bt,bp,dm);
}else if(bs==4){bl=qx.locale.Date.getMonthName(dj,bt,bp,dm);
}break;
case da:if(bs==1||bs==2){bl=this.__lL(bt+1,bs);
}else if(bs==3){bl=qx.locale.Date.getMonthName(dk,bt,bp,df);
}else if(bs==4){bl=qx.locale.Date.getMonthName(dj,bt,bp,df);
}break;
case cJ:bl=(bu<12)?qx.locale.Date.getAmMarker(bp):qx.locale.Date.getPmMarker(bp);
break;
case cu:bl=this.__lL(bu,bs);
break;
case cw:bl=this.__lL((bu==0)?24:bu,bs);
break;
case ce:bl=this.__lL(bu%12,bs);
break;
case dG:bl=this.__lL(((bu%12)==0)?12:(bu%12),bs);
break;
case cG:bl=this.__lL(bq,bs);
break;
case dE:bl=this.__lL(bv,bs);
break;
case cr:bl=this.__lL(bx,bs);
break;
case dr:if(bs==1){bl=bP+((bm>0)?cL:dw)+this.__lL(Math.abs(bk))+bK+this.__lL(br,2);
}else if(bs==2){bl=bo.MEDIUM_TIMEZONE_NAMES[bk];
}else if(bs==3){bl=bo.FULL_TIMEZONE_NAMES[bk];
}break;
case dx:bl=((bm>0)?cL:dw)+this.__lL(Math.abs(bk),2)+this.__lL(br,2);
break;
}by+=bl;
}}return by;
},parse:function(dM){this.__lQ();
var dS=this.__lI.regex.exec(dM);

if(dS==null){throw new Error("Date string '"+dM+"' does not match the date format: "+this.__lH);
}var dN={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var dO=1;

for(var i=0;i<this.__lI.usedRules.length;i++){var dQ=this.__lI.usedRules[i];
var dP=dS[dO];

if(dQ.field!=null){dN[dQ.field]=parseInt(dP,10);
}else{dQ.manipulator(dN,dP);
}dO+=(dQ.groups==null)?1:dQ.groups;
}var dR=new Date(dN.year,dN.month,dN.day,(dN.ispm)?(dN.hour+12):dN.hour,dN.min,dN.sec,dN.ms);

if(dN.month!=dR.getMonth()||dN.year!=dR.getFullYear()){throw new Error("Error parsing date '"+dM+"': the value for day or month is too large");
}return dR;
},__lP:function(){if(this.__lK!=null){return;
}this.__lK=[];
var D;
var B=0;
var F=dl;
var z=this.__lH;
var C=cS;
var i=0;

while(i<z.length){var E=z.charAt(i);

switch(C){case cK:if(E==cQ){if(i+1>=z.length){i++;
break;
}var A=z.charAt(i+1);

if(A==cQ){F+=E;
i++;
}else{i++;
C=cF;
}}else{F+=E;
i++;
}break;
case de:if(E==D){B++;
i++;
}else{this.__lK.push({type:de,character:D,size:B});
D=null;
B=0;
C=cS;
}break;
default:if((E>=cJ&&E<=dr)||(E>=dD&&E<=dx)){D=E;
C=de;
}else if(E==cQ){if(i+1>=z.length){F+=E;
i++;
break;
}var A=z.charAt(i+1);

if(A==cQ){F+=E;
i++;
}i++;
C=cK;
}else{C=cS;
}
if(C!=cS){if(F.length>0){this.__lK.push({type:cR,text:F});
F=dl;
}}else{F+=E;
i++;
}break;
}}if(D!=null){this.__lK.push({type:de,character:D,size:B});
}else if(F.length>0){this.__lK.push({type:cR,text:F});
}},__lQ:function(){if(this.__lI!=null){return ;
}var W=this.__lH;
this.__lR();
this.__lP();
var bd=[];
var Y=cT;

for(var U=0;U<this.__lK.length;U++){var be=this.__lK[U];

if(be.type==cR){Y+=qx.lang.String.escapeRegexpChars(be.text);
}else{var V=be.character;
var ba=be.size;
var X;

for(var bf=0;bf<this.__lJ.length;bf++){var bb=this.__lJ[bf];

if(V==bb.pattern.charAt(0)&&ba==bb.pattern.length){X=bb;
break;
}}if(X==null){var bc=dl;

for(var i=0;i<ba;i++){bc+=V;
}throw new Error("Malformed date format: "+W+". Wildcard "+bc+" is not supported");
}else{bd.push(X);
Y+=X.regex;
}}}Y+=ch;
var T;

try{T=new RegExp(Y);
}catch(M){throw new Error("Malformed date format: "+W);
}this.__lI={regex:T,"usedRules":bd,pattern:Y};
},__lR:function(){var j=qx.util.format.DateFormat;
var p=qx.lang.String;

if(this.__lJ!=null){return ;
}var k=this.__lJ=[];
var w=function(eb,ec){ec=parseInt(ec,10);

if(ec<j.ASSUME_YEAR_2000_THRESHOLD){ec+=2000;
}else if(ec<100){ec+=1900;
}eb.year=ec;
};
var q=function(x,y){x.month=parseInt(y,10)-1;
};
var n=function(R,S){R.ispm=(S==j.PM_MARKER);
};
var m=function(dX,dY){dX.hour=parseInt(dY,10)%24;
};
var l=function(dV,dW){dV.hour=parseInt(dW,10)%12;
};
var t=function(N,O){return;
};
var r=qx.locale.Date.getMonthNames(dk,this.__lG,dm);

for(var i=0;i<r.length;i++){r[i]=p.escapeRegexpChars(r[i].toString());
}var s=function(K,L){L=p.escapeRegexpChars(L);
K.month=r.indexOf(L);
};
var f=qx.locale.Date.getMonthNames(dj,this.__lG,dm);

for(var i=0;i<f.length;i++){f[i]=p.escapeRegexpChars(f[i].toString());
}var e=function(dT,dU){dU=p.escapeRegexpChars(dU);
dT.month=f.indexOf(dU);
};
var h=qx.locale.Date.getDayNames(cM,this.__lG,dm);

for(var i=0;i<h.length;i++){h[i]=p.escapeRegexpChars(h[i].toString());
}var d=function(P,Q){Q=p.escapeRegexpChars(Q);
P.month=h.indexOf(Q);
};
var u=qx.locale.Date.getDayNames(dk,this.__lG,dm);

for(var i=0;i<u.length;i++){u[i]=p.escapeRegexpChars(u[i].toString());
}var o=function(bI,bJ){bJ=p.escapeRegexpChars(bJ);
bI.month=u.indexOf(bJ);
};
var v=qx.locale.Date.getDayNames(dj,this.__lG,dm);

for(var i=0;i<v.length;i++){v[i]=p.escapeRegexpChars(v[i].toString());
}var g=function(bg,bh){bh=p.escapeRegexpChars(bh);
bg.month=v.indexOf(bh);
};
k.push({pattern:dC,regex:cz,manipulator:w});
k.push({pattern:dB,regex:cY,manipulator:w});
k.push({pattern:ca,regex:dc,manipulator:w});
k.push({pattern:bS,regex:cA,manipulator:w});
k.push({pattern:cn,regex:cH,manipulator:w});
k.push({pattern:cb,regex:bU,manipulator:w});
k.push({pattern:dI,regex:bY,manipulator:w});
k.push({pattern:ck,regex:dn,manipulator:q});
k.push({pattern:bW,regex:dn,manipulator:q});
k.push({pattern:cm,regex:di+r.join(dg)+dh,manipulator:s});
k.push({pattern:cs,regex:di+f.join(dg)+dh,manipulator:e});
k.push({pattern:bQ,regex:dn,field:dq});
k.push({pattern:cy,regex:dn,field:dq});
k.push({pattern:dz,regex:di+h.join(dg)+dh,manipulator:d});
k.push({pattern:ci,regex:di+u.join(dg)+dh,manipulator:o});
k.push({pattern:cU,regex:di+v.join(dg)+dh,manipulator:g});
k.push({pattern:bN,regex:di+j.AM_MARKER+dg+j.PM_MARKER+dh,manipulator:n});
k.push({pattern:dA,regex:dn,field:cP});
k.push({pattern:bT,regex:dn,field:cP});
k.push({pattern:dH,regex:dn,manipulator:m});
k.push({pattern:cB,regex:dn,manipulator:m});
k.push({pattern:db,regex:dn,field:cP});
k.push({pattern:bM,regex:dn,field:cP});
k.push({pattern:cd,regex:dn,manipulator:l});
k.push({pattern:cX,regex:dn,manipulator:l});
k.push({pattern:cV,regex:dn,field:cW});
k.push({pattern:cp,regex:dn,field:cW});
k.push({pattern:ct,regex:dn,field:dp});
k.push({pattern:cl,regex:dn,field:dp});
k.push({pattern:bX,regex:cO,field:cN});
k.push({pattern:cI,regex:cO,field:cN});
k.push({pattern:dF,regex:cO,field:cN});
k.push({pattern:dd,regex:bO,manipulator:t});
k.push({pattern:co,regex:cv,manipulator:t});
}},destruct:function(){this.__lK=this.__lI=this.__lJ=null;
}});
})();
(function(){var D="_",C="format",B="thu",A="sat",z="cldr_day_",y="cldr_month_",x="wed",w="fri",v="tue",u="mon",U="sun",T="short",S="HH:mm",R="HHmmsszz",Q="HHmm",P="HHmmss",O="cldr_date_format_",N="HH:mm:ss zz",M="full",L="cldr_pm",J="long",K="medium",H="cldr_am",I="qx.locale.Date",F="cldr_date_time_format_",G="cldr_time_format_",E="HH:mm:ss";
qx.Class.define(I,{statics:{__lS:qx.locale.Manager.getInstance(),getAmMarker:function(j){return this.__lS.localize(H,[],j);
},getPmMarker:function(bb){return this.__lS.localize(L,[],bb);
},getDayNames:function(length,p,q){var q=q?q:C;
{};
var s=[U,u,v,x,B,w,A];
var t=[];

for(var i=0;i<s.length;i++){var r=z+q+D+length+D+s[i];
t.push(this.__lS.localize(r,[],p));
}return t;
},getDayName:function(length,k,l,m){var m=m?m:C;
{};
var o=[U,u,v,x,B,w,A];
var n=z+m+D+length+D+o[k];
return this.__lS.localize(n,[],l);
},getMonthNames:function(length,bk,bl){var bl=bl?bl:C;
{};
var bn=[];

for(var i=0;i<12;i++){var bm=y+bl+D+length+D+(i+1);
bn.push(this.__lS.localize(bm,[],bk));
}return bn;
},getMonthName:function(length,bc,bd,be){var be=be?be:C;
{};
var bf=y+be+D+length+D+(bc+1);
return this.__lS.localize(bf,[],bd);
},getDateFormat:function(a,b){{};
var c=O+a;
return this.__lS.localize(c,[],b);
},getDateTimeFormat:function(V,W,X){var ba=F+V;
var Y=this.__lS.localize(ba,[],X);

if(Y==ba){Y=W;
}return Y;
},getTimeFormat:function(bo,bp){{};
var br=G+bo;
var bq=this.__lS.localize(br,[],bp);

if(bq!=br){return bq;
}
switch(bo){case T:case K:return qx.locale.Date.getDateTimeFormat(Q,S);
case J:return qx.locale.Date.getDateTimeFormat(P,E);
case M:return qx.locale.Date.getDateTimeFormat(R,N);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(bv){var bw={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bx=qx.locale.Date._getTerritory(bv);
return bw[bx]!=null?bw[bx]:1;
},getWeekendStart:function(f){var h={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var g=qx.locale.Date._getTerritory(f);
return h[g]!=null?h[g]:6;
},getWeekendEnd:function(bs){var bt={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var bu=qx.locale.Date._getTerritory(bs);
return bt[bu]!=null?bt[bu]:0;
},isWeekend:function(bg,bh){var bj=qx.locale.Date.getWeekendStart(bh);
var bi=qx.locale.Date.getWeekendEnd(bh);

if(bi>bj){return ((bg>=bj)&&(bg<=bi));
}else{return ((bg>=bj)||(bg<=bi));
}},_getTerritory:function(d){if(d){var e=d.split(D)[1]||d;
}else{e=this.__lS.getTerritory()||this.__lS.getLanguage();
}return e.toUpperCase();
}}});
})();
(function(){var w="",v="regex",u="==",t=">",s="!between",r="between",q="<",p='g',o=":",n=";",k=">=",m="qx.ui.progressive.renderer.table.cell.Conditional",l="!=",j="<=";
qx.Class.define(m,{extend:qx.ui.progressive.renderer.table.cell.Abstract,construct:function(x,y,z,A){qx.ui.progressive.renderer.table.cell.Abstract.call(this);
this.__GR=["==","!=",">","<",">=","<="];
this.__GS=["between","!between"];
this.__GT=[];
this.__GU=x||"";
this.__GV=y||"";
this.__GW=z||"";
this.__GX=A||"";
},members:{__GR:null,__GS:null,__GT:null,__GU:null,__GV:null,__GW:null,__GX:null,__GY:function(W,X){if(W.align){X["text-align"]=W.align;
}
if(W.color){X["color"]=W.color;
}
if(W.style){X["font-style"]=W.style;
}
if(W.weight){X["font-weight"]=W.weight;
}},addNumericCondition:function(B,C,D,E,F,G,H){if(!qx.lang.Array.contains(this.__GR,B)||C==null){throw new Error("Condition not recognized or value is null!");
}this.__GT.push({condition:B,align:D,color:E,style:F,weight:G,value1:C,target:H});
},addBetweenCondition:function(O,P,Q,R,S,T,U,V){if(!qx.lang.Array.contains(this.__GS,O)||P==null||Q==null){throw new Error("Condition not recognized or value1/value2 is null!");
}this.__GT.push({condition:O,align:R,color:S,style:T,weight:U,value1:P,value2:Q,target:V});
},addRegex:function(I,J,K,L,M,N){if(!I){throw new Error("regex cannot be null!");
}this.__GT.push({condition:v,align:J,color:K,style:L,weight:M,regex:I,target:N});
},_getCellStyle:function(a){if(this.__GT.length==0){return a.style||w;
}var i;
var e;
var b;
var d={"text-align":this.__GU,"color":this.__GV,"font-style":this.__GW,"font-weight":this.__GX};

for(i=0;i<this.__GT.length;i++){var h=this.__GT[i];
e=false;

if(qx.lang.Array.contains(this.__GR,h.condition)){if(h.target==null){b=a.cellData;
}else{b=a.element.data[h.target];
}
switch(h.condition){case u:if(b==h.value1){e=true;
}break;
case l:if(b!=h.value1){e=true;
}break;
case t:if(b>h.value1){e=true;
}break;
case q:if(b<h.value1){e=true;
}break;
case k:if(b>=h.value1){e=true;
}break;
case j:if(b<=h.value1){e=true;
}break;
}}else if(qx.lang.Array.contains(this.__GS,h.condition)){if(h.target==null){b=a.cellData;
}else{b=a.element.data[h.target];
}
switch(h.condition){case r:if(b>=h.value1&&b<=h.value2){e=true;
}break;
case s:if(b<h.value1&&b>h.value2){e=true;
}break;
}}else if(h.condition==v){if(h.target==null){b=a.cellData;
}else{b=a.element.data[h.target];
}var c=new RegExp(h.value1,p);
e=c.test(b);
}if(e){this.__GY(h,d);
}var f=[];

for(var g in d){if(d[g]){f.push(g,o,d[g],n);
}}}return f.join(w);
}},destruct:function(){this.__GR=this.__GS=this.__GT=null;
}});
})();
(function(){var v="'>",u="[",t=", ",s="</span>",r="<span class='type-",q="</span> ",p="}",o="",n="]",m="{",M="map",L="<span class='object'>",K="]:",J="<span class='object' title='Object instance with hash code: ",I="string",H="level-",G="0",F="<span class='offset'>",E=":",D="qx.log.appender.Util",B="DIV",C="<span>",z="<span class='type-key'>",A="</span>:<span class='type-",x="</span>: ",y=" ",w="]</span>: ";
qx.Class.define(D,{statics:{toHtml:function(R){var bc=[];
var Y,bb,T,V;
bc.push(F,this.formatOffset(R.offset,6),q);

if(R.object){var S=R.win.qx.core.ObjectRegistry.fromHashCode(R.object);

if(S){bc.push(J+S.$$hash+v,S.classname,u,S.$$hash,w);
}}else if(R.clazz){bc.push(L+R.clazz.classname,x);
}var U=R.items;

for(var i=0,ba=U.length;i<ba;i++){Y=U[i];
bb=Y.text;

if(bb instanceof Array){var V=[];

for(var j=0,X=bb.length;j<X;j++){T=bb[j];

if(typeof T===I){V.push(C+this.escapeHTML(T)+s);
}else if(T.key){V.push(z+T.key+A+T.type+v+this.escapeHTML(T.text)+s);
}else{V.push(r+T.type+v+this.escapeHTML(T.text)+s);
}}bc.push(r+Y.type+v);

if(Y.type===M){bc.push(m,V.join(t),p);
}else{bc.push(u,V.join(t),n);
}bc.push(s);
}else{bc.push(r+Y.type+v+this.escapeHTML(bb)+q);
}}var W=document.createElement(B);
W.innerHTML=bc.join(o);
W.className=H+R.level;
return W;
},formatOffset:function(N,length){var Q=N.toString();
var O=(length||6)-Q.length;
var P=o;

for(var i=0;i<O;i++){P+=G;
}return P+Q;
},escapeHTML:function(bf){return String(bf).replace(/[<>&"']/g,this.__CI);
},__CI:function(bd){var be={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&#39;",'"':"&quot;"};
return be[bd]||"?";
},toText:function(a){return this.toTextArray(a).join(y);
},toTextArray:function(b){var l=[];
l.push(this.formatOffset(b.offset,6));

if(b.object){var c=b.win.qx.core.ObjectRegistry.fromHashCode(b.object);

if(c){l.push(c.classname+u+c.$$hash+K);
}}else if(b.clazz){l.push(b.clazz.classname+E);
}var d=b.items;
var g,k;

for(var i=0,h=d.length;i<h;i++){g=d[i];
k=g.text;

if(k instanceof Array){var e=[];

for(var j=0,f=k.length;j<f;j++){e.push(k[j].text);
}
if(g.type===M){l.push(m,e.join(t),p);
}else{l.push(u,e.join(t),n);
}}else{l.push(k);
}}return l;
}}});
})();
(function(){var d="debug",c="log",b="qx.log.appender.Native",a="qx.client";
qx.Class.define(b,{statics:{process:qx.core.Variant.select(a,{"gecko":function(j){if(window.console&&console.firebug){console[j.level].call(console,qx.log.appender.Util.toText(j));
}},"mshtml":function(e){if(window.console){var g=e.level;

if(g==d){g=c;
}var f=qx.log.appender.Util.toText(e);
console[g](f);
}},"webkit":function(k){if(window.console){var m=k.level;

if(m==d){m=c;
}var l=qx.log.appender.Util.toText(k);
console[m](l);
}},"opera":function(h){}})},defer:function(i){qx.log.Logger.register(i);
}});
})();
(function(){var n="",m='</div>',l="none",k="keypress",j='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',i='.qxconsole .messages .user-result{background:white}',h='.qxconsole .messages .level-error{background:#FFE2D5}',g="div",f="user-command",d='<div class="command">',S='.qxconsole .command input:focus{outline:none;}',R='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',P='.qxconsole .messages div{padding:0px 4px;}',O='.qxconsole .messages .level-debug{background:white}',N='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',M="DIV",L='.qxconsole .messages .level-user{background:#E3EFE9}',K='<div class="qxconsole">',J='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',u='.qxconsole .messages .type-string{color:black;font-weight:normal;}',v='.qxconsole .control a{text-decoration:none;color:black;}',s='<div class="messages">',t='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',q='<input type="text"/>',r="clear",o='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',p='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',w='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',x='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',B='.qxconsole .messages .user-command{color:blue}',A="qx.log.appender.Console",D='.qxconsole .messages .level-info{background:#DEEDFA}',C="block",F='.qxconsole .messages .level-warn{background:#FFF7D5}',E='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',z='.qxconsole .messages .user-error{background:#FFE2D5}',I='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',H='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',G=">>> ",y='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(A,{statics:{init:function(){var T=[w,I,v,j,P,B,i,z,O,D,F,h,L,u,y,t,p,J,R,N,Q,E,x,o,S];
qx.bom.Stylesheet.createElement(T.join(n));
var V=[K,H,s,m,d,q,m,m];
var W=document.createElement(M);
W.innerHTML=V.join(n);
var U=W.firstChild;
document.body.appendChild(W.firstChild);
this.__KE=U;
this.__KF=U.childNodes[1];
this.__KG=U.childNodes[2].firstChild;
this.__KL();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,k,this.__KM,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__KF.innerHTML=n;
},process:function(c){this.__KF.appendChild(qx.log.appender.Util.toHtml(c));
this.__KH();
},__KH:function(){this.__KF.scrollTop=this.__KF.scrollHeight;
},__KI:true,toggle:function(){if(!this.__KE){this.init();
}else if(this.__KE.style.display==l){this.show();
}else{this.__KE.style.display=l;
}},show:function(){if(!this.__KE){this.init();
}else{this.__KE.style.display=C;
this.__KF.scrollTop=this.__KF.scrollHeight;
}},__KJ:[],execute:function(){var bb=this.__KG.value;

if(bb==n){return;
}
if(bb==r){return this.clear();
}var Y=document.createElement(g);
Y.innerHTML=qx.log.appender.Util.escapeHTML(G+bb);
Y.className=f;
this.__KJ.push(bb);
this.__KK=this.__KJ.length;
this.__KF.appendChild(Y);
this.__KH();

try{var ba=window.eval(bb);
}catch(bc){qx.log.Logger.error(bc);
}
if(ba!==undefined){qx.log.Logger.debug(ba);
}},__KL:function(e){this.__KF.style.height=(this.__KE.clientHeight-this.__KE.firstChild.offsetHeight-this.__KE.lastChild.offsetHeight)+"px";
},__KM:function(e){var b=e.getKeyIdentifier();
if((b=="F7")||(b=="D"&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__KE){return;
}if(!qx.dom.Hierarchy.contains(this.__KE,e.getTarget())){return;
}if(b=="Enter"&&this.__KG.value!=""){this.execute();
this.__KG.value="";
}if(b=="Up"||b=="Down"){this.__KK+=b=="Up"?-1:1;
this.__KK=Math.min(Math.max(0,this.__KK),this.__KJ.length);
var a=this.__KJ[this.__KK];
this.__KG.value=a||"";
this.__KG.select();
}}},defer:function(X){qx.event.Registration.addListener(document.documentElement,k,X.__KM,X);
}});
})();
(function(){var F=": ",E="Summary: (",D="qx.dev.ObjectSummary",C="\n",B=" Objects)\n\n",A=")\r\n",z=" (",y=" Objects)\r\n\r\n",x=", ";
qx.Class.define(D,{statics:{getInfo:function(){var c={};
var k=0;
var d;
var f=qx.core.ObjectRegistry.getRegistry();

for(var g in f){d=f[g];

if(d&&d.isDisposed()===false){if(c[d.classname]==null){c[d.classname]=1;
}else{c[d.classname]++;
}k++;
}}var j=[];

for(var e in c){j.push({classname:e,number:c[e]});
}j.sort(function(a,b){return b.number-a.number;
});
var h=E+k+B;

for(var i=0;i<j.length;i++){h+=j[i].number+F+j[i].classname+C;
}return h;
},getNewObjects:function(){var m={};
var w=0;
var n;
var r=qx.core.ObjectRegistry.getRegistry();
var p={};
var v;

for(var s in r){n=r[s];

if(n&&n.__disposed===false){var q=n.classname;

if(m[q]==null){m[q]=1;
}else{m[q]++;
}v=p[q];

if(v==null){v=p[q]=new Array();
}v[v.length]=n.toHashCode();
w++;
}}
if(!this._m_dObjectList){this._m_dObjectList={};
}var l={};

for(var q in m){if(!(q in this._m_dObjectList)){this._m_dObjectList[q]=0;
}
if(this._m_dObjectList[q]>=0&&this._m_dObjectList[q]<m[q]){l[q]=m[q]-this._m_dObjectList[q];
}}this._m_dObjectList=m;
var u=[];

for(var o in l){u.push({classname:o,number:l[o],aHashCode:p[o]});
}u.sort(function(a,b){return b.number-a.number;
});
var t=E+w+y;

for(var i=0;i<u.length;i++){t+=u[i].number+F+u[i].classname+z+u[i].aHashCode.join(x)+A;
}return t;
}}});
})();
(function(){var cl="window",ck="",cj="childNodes",ci="nodeName",ch="nodeType",cg="document",cf="function",ce="firstChild",cd="qx.client",cc="external",bt="location",bs="[native code]",br="lastChild",bq="scrollY",bp="scrollWidth",bo="defaultView",bn="closed",bm="content",bl="qx",bk="</td><td>",cs="filters",ct="locationbar",cq="screenX",cr="previousSibling",co="scrollX",cp="Global namespace is polluted by the following unknown objects:\n\n",cm="doctype",cn="parent",cu="qx.dev.Pollution",cv="outerText",bR="applets",bQ="parentElement",bT="designMode",bS="cookie",bV="fullScreen",bU="links",bX="pageXOffset",bW="frames",bP="documentElement",bO="screenY",a="statusbar",b="history",c="sun",d="pkcs11",e="java",f="style",g="innerWidth",h="plugins",j="implementation",k="clientWidth",cz="compatMode",cy="length",cx="textContent",cw="controllers",cD="netscape",cC="self",cB="domConfig",cA="attributes",cF="clientHeight",cE="outerHeight",J="parentNode",K="innerHeight",H="title",I="ownerDocument",N="<table>",O="globalStorage",L="Global namespace is not polluted by any unknown objects.",M="toolbar",F="outerHTML",G="crypto",s="forms",r="scrollbars",u="frameElement",t="Components",o="body",n="clientInformation",q="offscreenBuffering",p="embeds",m="localName",l="scrollTop",T="isMultiLine",U="scrollLeft",V="images",W="event",P="offsetHeight",Q="scrollMaxY",R="sessionStorage",S="screen",X="name",Y="offsetLeft",C="console",B="XMLHttpRequest",A="mshtml",z="nextSibling",y="innerText",x="menubar",w="scopeName",v="top",E="outerWidth",D=": ",ba="\n",bb="status",bc="contentEditable",bd="anchors",be="</table>",bf="<tr style='vertical-align:top'><td>",bg="scrollMaxX",bh="screenTop",bi="defaultStatus",bj="styleSheets",bx="className",bw="personalbar",bv="</td></tr>",bu="currentStyle",bB="directories",bA="navigator",bz="pageYOffset",by="screenLeft",bD="opener",bC="scrollHeight",bK="__firebug__",bL="Option",bI="innerHTML",bJ="tabIndex",bG="offsetTop",bH="[function]",bE="clipboardData",bF="Packages",bM="tagName",bN="offsetWidth",ca="mshtml|opera",bY="undefined",cb="Image";
qx.Class.define(cu,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bl,e,c,bF,bK,t,cw,R,O,C,W,q,bE,n,bL,cb,cc,bh,by,cy,cl,cg,bt,bA,cD,cn,bW,v,r,X,co,bq,cC,S,b,bm,x,M,ct,bw,a,bB,bn,G,d,bD,bb,bi,g,K,E,cE,cq,bO,bX,bz,bg,Q,bV,u,B],"document":[cB,bt,cz,j,bo,H,o,bj,bP,ci,ch,ce,br,cm,V,bR,bU,s,bd,bS,p,h,bT,cj],"body":[cx,bI,F,y,cv,w,bQ,bM,cs,bc,cg,bu,T,cF,k,br,ce,bG,Y,bN,P,bJ,bx,cA,cr,z,I,m,cj,J,ch,ci,f,l,U,bp,bC]},getInfo:function(cY){var da=qx.dev.Pollution.getTextList(cY||cl);

if(da){return cp+da;
}else{return L;
}},extract:function(cG){var cI=[];
var cH=qx.dev.Pollution.ignore[cG];
if(qx.core.Variant.isSet(cd,A)){if(cG==cl){cH=cH.slice(0);

for(var cJ=0;cJ<window.length;cJ++){cH.push(ck+cJ);
}}}var cK=qx.dev.Pollution.names[cG];

for(var cL in cK){try{if(qx.core.Variant.isSet(cd,ca)){if(cG==cl&&cL==cc){continue;
}}if(typeof cK[cL]==bY||cK[cL]===null){continue;
}if(typeof cK[cL]==cf&&cK[cL].toString().indexOf(bs)!=-1){continue;
}if(typeof cK[cL].constructor==cf){if((cK[cL].constructor.toString().indexOf(bs)!=-1)||(cK[cL].constructor.toString().indexOf(bH)!=-1)){continue;
}}if(qx.lang.Array.contains(cH,cL)){continue;
}}catch(cX){continue;
}cI.push({"key":cL,"value":cK[cL]});
}return cI;
},getHtmlTable:function(cR){var cT=[];
var cS=bf;
var cV=bk;
var cW=bv;
cT.push(N);
var cU=this.extract(cR);

for(var i=0;i<cU.length;i++){cT.push(cS+cU[i].key+cV+cU[i].value+cW);
}cT.push(be);
return cT.join(ck);
},getTextList:function(cM){var cO=[];
var cP=D;
var cQ=ba;
var cN=this.extract(cM);

for(var i=0;i<cN.length;i++){cO.push(cN[i].key+cP+cN[i].value+cQ);
}return cO.join(ck);
}}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,e,b],mode:c}},members:{__rY:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__rY=null;
},getInsets:function(){if(this.__rY){return this.__rY;
}var a=this._getDefaultInsets();
return this.__rY={left:this.getInsetLeft()==null?a.left:this.getInsetLeft(),right:this.getInsetRight()==null?a.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?a.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?a.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__rY=null;
}},destruct:function(){this.__rY=null;
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
(function(){var p="_applyStyle",o="",n="Color",m="px",l="solid",k="dotted",j="double",i="dashed",h="_applyWidth",g="qx.ui.decoration.Uniform",d="px ",f=" ",e="scale",c="PositiveInteger",b="absolute";
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(C,D,E){qx.ui.decoration.Abstract.call(this);
if(C!=null){this.setWidth(C);
}
if(D!=null){this.setStyle(D);
}
if(E!=null){this.setColor(E);
}},properties:{width:{check:c,init:0,apply:h},style:{nullable:true,check:[l,k,i,j],init:l,apply:p},color:{nullable:true,check:n,apply:p},backgroundColor:{check:n,nullable:true,apply:p}},members:{__sa:null,_getDefaultInsets:function(){var a=this.getWidth();
return {top:a,right:a,bottom:a,left:a};
},_isInitialized:function(){return !!this.__sa;
},getMarkup:function(){if(this.__sa){return this.__sa;
}var t={position:b,top:0,left:0};
var u=this.getWidth();
{};
var w=qx.theme.manager.Color.getInstance();
t.border=u+d+this.getStyle()+f+(w.resolve(this.getColor())||o);
var v=this._generateBackgroundMarkup(t);
return this.__sa=v;
},resize:function(x,y,z){var B=this.getBackgroundImage()&&this.getBackgroundRepeat()==e;

if(B||qx.bom.client.Feature.CONTENT_BOX){var A=this.getWidth()*2;
y-=A;
z-=A;
if(y<0){y=0;
}
if(z<0){z=0;
}}x.style.width=y+m;
x.style.height=z+m;
},tint:function(q,r){var s=qx.theme.manager.Color.getInstance();

if(r==null){r=this.getBackgroundColor();
}q.style.backgroundColor=s.resolve(r)||o;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__sa=null;
}});
})();
(function(){var m="_applyStyle",l="solid",k="Color",j="",i="double",h="px ",g="dotted",f="_applyWidth",e="dashed",d="Number",I=" ",H="shorthand",G="px",F="widthTop",E="styleRight",D="styleLeft",C="widthLeft",B="widthBottom",A="styleTop",z="colorBottom",t="styleBottom",u="widthRight",r="colorLeft",s="colorRight",p="colorTop",q="scale",n="border-top",o="border-left",v="border-right",w="qx.ui.decoration.Single",y="border-bottom",x="absolute";
qx.Class.define(w,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(O,P,Q){qx.ui.decoration.Abstract.call(this);
if(O!=null){this.setWidth(O);
}
if(P!=null){this.setStyle(P);
}
if(Q!=null){this.setColor(Q);
}},properties:{widthTop:{check:d,init:0,apply:f},widthRight:{check:d,init:0,apply:f},widthBottom:{check:d,init:0,apply:f},widthLeft:{check:d,init:0,apply:f},styleTop:{nullable:true,check:[l,g,e,i],init:l,apply:m},styleRight:{nullable:true,check:[l,g,e,i],init:l,apply:m},styleBottom:{nullable:true,check:[l,g,e,i],init:l,apply:m},styleLeft:{nullable:true,check:[l,g,e,i],init:l,apply:m},colorTop:{nullable:true,check:k,apply:m},colorRight:{nullable:true,check:k,apply:m},colorBottom:{nullable:true,check:k,apply:m},colorLeft:{nullable:true,check:k,apply:m},backgroundColor:{check:k,nullable:true,apply:m},left:{group:[C,D,r]},right:{group:[u,E,s]},top:{group:[F,A,p]},bottom:{group:[B,t,z]},width:{group:[F,u,B,C],mode:H},style:{group:[A,E,t,D],mode:H},color:{group:[p,s,z,r],mode:H}},members:{__sc:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__sc;
},getMarkup:function(J){if(this.__sc){return this.__sc;
}var K=qx.theme.manager.Color.getInstance();
var L={};
var N=this.getWidthTop();

if(N>0){L[n]=N+h+this.getStyleTop()+I+(K.resolve(this.getColorTop())||j);
}var N=this.getWidthRight();

if(N>0){L[v]=N+h+this.getStyleRight()+I+(K.resolve(this.getColorRight())||j);
}var N=this.getWidthBottom();

if(N>0){L[y]=N+h+this.getStyleBottom()+I+(K.resolve(this.getColorBottom())||j);
}var N=this.getWidthLeft();

if(N>0){L[o]=N+h+this.getStyleLeft()+I+(K.resolve(this.getColorLeft())||j);
}{};
L.position=x;
L.top=0;
L.left=0;
var M=this._generateBackgroundMarkup(L);
return this.__sc=M;
},resize:function(R,S,T){var V=this.getBackgroundImage()&&this.getBackgroundRepeat()==q;

if(V||qx.bom.client.Feature.CONTENT_BOX){var U=this.getInsets();
S-=U.left+U.right;
T-=U.top+U.bottom;
if(S<0){S=0;
}
if(T<0){T=0;
}}R.style.width=S+G;
R.style.height=T+G;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||j;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__sc=null;
}});
})();
(function(){var j="px ",i=" ",h="Color",g="Number",f=";",e="px",d="shorthand",c="innerWidthRight",b="border-left:",a='<div style="position:absolute;top:0;left:0;',D="innerColorBottom",C='</div>',B='',A="scale",z="border-top",y="innerWidthTop",x="border-left",w="innerColorRight",v="innerColorTop",u="relative",q="border-top:",r="qx.ui.decoration.Double",o="border-right:",p="innerColorLeft",m="border-bottom",n='">',k="innerWidthBottom",l="innerWidthLeft",s="border-bottom:",t="border-right";
qx.Class.define(r,{extend:qx.ui.decoration.Single,construct:function(E,F,G,innerWidth,H){qx.ui.decoration.Single.call(this,E,F,G,innerWidth,H);
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(H!=null){this.setInnerColor(H);
}},properties:{innerWidthTop:{check:g,init:0},innerWidthRight:{check:g,init:0},innerWidthBottom:{check:g,init:0},innerWidthLeft:{check:g,init:0},innerWidth:{group:[y,c,k,l],mode:d},innerColorTop:{nullable:true,check:h},innerColorRight:{nullable:true,check:h},innerColorBottom:{nullable:true,check:h},innerColorLeft:{nullable:true,check:h},innerColor:{group:[v,w,D,p],mode:d}},members:{__Fc:null,_getDefaultInsets:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
},_isInitialized:function(){return !!this.__Fc;
},getMarkup:function(){if(this.__Fc){return this.__Fc;
}var N=qx.theme.manager.Color.getInstance();
var Q={position:u};
var O=this.getInnerWidthTop();

if(O>0){Q[z]=O+j+this.getStyleTop()+i+N.resolve(this.getInnerColorTop());
}var O=this.getInnerWidthRight();

if(O>0){Q[t]=O+j+this.getStyleRight()+i+N.resolve(this.getInnerColorRight());
}var O=this.getInnerWidthBottom();

if(O>0){Q[m]=O+j+this.getStyleBottom()+i+N.resolve(this.getInnerColorBottom());
}var O=this.getInnerWidthLeft();

if(O>0){Q[x]=O+j+this.getStyleLeft()+i+N.resolve(this.getInnerColorLeft());
}{};
var R=this._generateBackgroundMarkup(Q);
var P=B;
var O=this.getWidthTop();

if(O>0){P+=q+O+j+this.getStyleTop()+i+N.resolve(this.getColorTop())+f;
}var O=this.getWidthRight();

if(O>0){P+=o+O+j+this.getStyleRight()+i+N.resolve(this.getColorRight())+f;
}var O=this.getWidthBottom();

if(O>0){P+=s+O+j+this.getStyleBottom()+i+N.resolve(this.getColorBottom())+f;
}var O=this.getWidthLeft();

if(O>0){P+=b+O+j+this.getStyleLeft()+i+N.resolve(this.getColorLeft())+f;
}{};
return this.__Fc=a+P+n+R+C;
},resize:function(I,J,K){var M=this.getBackgroundImage()&&this.getBackgroundRepeat()==A;

if(M||qx.bom.client.Feature.CONTENT_BOX){var L=this.getInsets();
var innerWidth=J-L.left-L.right;
var innerHeight=K-L.top-L.bottom;
}else{var innerWidth=J-this.getWidthLeft()-this.getWidthRight();
var innerHeight=K-this.getWidthTop()-this.getWidthBottom();
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}I.firstChild.style.width=innerWidth+e;
I.firstChild.style.height=innerHeight+e;
}},destruct:function(){this.__Fc=null;
}});
})();
(function(){var m="Number",l="_applyInsets",k="-l",j="insetRight",i="insetTop",h="_applyBaseImage",g="insetBottom",f="set",e="shorthand",d="-t",a="insetLeft",c="String",b="qx.ui.decoration.Grid";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(q,r){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__sd=new qx.ui.decoration.css3.BorderImage();

if(q){this.__se(q);
}}else{this.__sd=new qx.ui.decoration.GridDiv(q);
}
if(r!=null){this.__sd.setInsets(r);
}},properties:{baseImage:{check:c,nullable:true,apply:h},insetLeft:{check:m,nullable:true,apply:l},insetRight:{check:m,nullable:true,apply:l},insetBottom:{check:m,nullable:true,apply:l},insetTop:{check:m,nullable:true,apply:l},insets:{group:[i,j,g,a],mode:e}},members:{__sd:null,getMarkup:function(){return this.__sd.getMarkup();
},resize:function(A,B,C){this.__sd.resize(A,B,C);
},tint:function(D,E){},getInsets:function(){return this.__sd.getInsets();
},_applyInsets:function(n,o,name){var p=f+qx.lang.String.firstUp(name);
this.__sd[p](n);
},_applyBaseImage:function(F,G){if(this.__sd instanceof qx.ui.decoration.GridDiv){this.__sd.setBaseImage(F);
}else{this.__se(F);
}},__se:function(s){this.__sd.setBorderImage(s);
var w=qx.util.AliasManager.getInstance().resolve(s);
var x=/(.*)(\.[a-z]+)$/.exec(w);
var u=x[1];
var v=x[2];
var t=qx.util.ResourceManager.getInstance();
var y=t.getImageHeight(u+d+v);
var z=t.getImageWidth(u+k+v);
this.__sd.setSlice([y,z]);
}},destruct:function(){this.__sd=null;
}});
})();
(function(){var o="_applyStyle",n='"></div>',m="Color",l="1px",k='<div style="',j='border:',i="1px solid ",h="",g=";",f="px",A='</div>',z="qx.ui.decoration.Beveled",y='<div style="position:absolute;top:1px;left:1px;',x='border-bottom:',w='border-right:',v='border-left:',u='border-top:',t="Number",s='<div style="position:absolute;top:1px;left:0px;',r='position:absolute;top:0px;left:1px;',p='<div style="overflow:hidden;font-size:0;line-height:0;">',q="absolute";
qx.Class.define(z,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(P,Q,R){qx.ui.decoration.Abstract.call(this);
if(P!=null){this.setOuterColor(P);
}
if(Q!=null){this.setInnerColor(Q);
}
if(R!=null){this.setInnerOpacity(R);
}},properties:{innerColor:{check:m,nullable:true,apply:o},innerOpacity:{check:t,init:1,apply:o},outerColor:{check:m,nullable:true,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__sf:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__sf;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__sf){return this.__sf;
}var a=qx.theme.manager.Color.getInstance();
var b=[];
var e=i+a.resolve(this.getOuterColor())+g;
var d=i+a.resolve(this.getInnerColor())+g;
b.push(p);
b.push(k);
b.push(j,e);
b.push(qx.bom.element.Opacity.compile(0.35));
b.push(n);
b.push(s);
b.push(v,e);
b.push(w,e);
b.push(n);
b.push(k);
b.push(r);
b.push(u,e);
b.push(x,e);
b.push(n);
var c={position:q,top:l,left:l};
b.push(this._generateBackgroundMarkup(c));
b.push(y);
b.push(j,d);
b.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
b.push(n);
b.push(A);
return this.__sf=b.join(h);
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
}var O=f;
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
},tint:function(B,C){var D=qx.theme.manager.Color.getInstance();

if(C==null){C=this.getBackgroundColor();
}B.childNodes[3].style.backgroundColor=D.resolve(C)||h;
}},destruct:function(){this.__sf=null;
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",y="table-header-border",x="dotted",w="border-separator",v="tooltip-text",u="invalid",t="white",s="decoration/shadow/shadow.png",r="black",q="effect",p="table-focus-indicator",n="border-focused-invalid",o="qx/decoration/Classic",l="border-lead",m="decoration/shadow/shadow-small.png",k="qx.theme.classic.Decoration";
qx.Theme.define(k,{aliases:{decoration:o},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:r,style:x}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:u}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:w}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:w}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:m,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:u,innerColor:n,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:x,color:l}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:t,colorLeft:t,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:y,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:p,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f,widthBottom:2,colorBottom:q,styleBottom:f}}}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var gq="button",gp="widget",go="background",gn="atom",gm="inset-thin",gl="outset",gk="text-disabled",gj="text-selected",gi="inset",gh="groupbox",fk="cell",fj="focused-inset",fi="tooltip",fh="image",fg="menu-button",ff="middle",fe="decoration/arrows/down.gif",fd="spinner",fc="background-selected",fb="list",gx="button-hovered",gy="checkbox",gv="toolbar-button",gw="button-frame",gt="popup",gu="textfield",gr="label",gs="background-invalid",gz="background-disabled",gA="bold",fP="white",fO="shadow-small",fR="invalid",fQ="scrollbar",fT="center",fS="datechooser/button",fV="button-abandoned",fU="background-light",fN="main",fM="date-chooser",dB="date-chooser-title",dC="radiobutton",dD="default",dE="combobox",dF="background-field",dG="outset-thin",dH="menu-slidebar-button",dI="scrollbar/button",dJ="combobox/button",dK="table-header-cell",gO="decoration/arrows/right.gif",gN="decoration/arrows/up.gif",gM="text",gL="decoration/arrows/down-small.gif",gS="icon/16/places/folder.png",gR="tree-folder",gQ="slidebar/button-forward",gP="icon/16/mimetypes/text-plain.png",gU="right-top",gT="button-checked",ex=".png",ey="background-focused",ev="datechooser",ew="slidebar/button-backward",eB="selectbox",eC="treevirtual-folder",ez="decoration/form/",eA="decoration/tree/minus.gif",et="",eu="decoration/tree/plus.gif",ed="-invalid",ec="decoration/arrows/left.gif",ef="icon/16/places/folder-open.png",ee="table-row-background-even",dY="decoration/treevirtual/cross_minus.gif",dX="radiobutton-hovered",eb="keyboard-focus",ea="decoration/treevirtual/start_plus.gif",dW="decoration/cursors/",dV="icon/16/actions/dialog-ok.png",eH="slidebar",eI="table-scroller-focus-indicator",eJ="move-frame",eK="nodrop",eD="tabview-page-button-left",eE="decoration/arrows/up-small.gif",eF="move",eG="radiobutton-checked-focused",eL="qx.theme.classic.Appearance",eM="decoration/menu/checkbox.gif",eo="tooltip-error",en="right",em="decoration/arrows/rewind.gif",el="table-scroller-header",ek="table-pane",ej="focused-outset",ei="checkbox-hovered",eh="icon/16/actions/dialog-cancel.png",es="menu-slidebar",er="datechooser-date-pane",eN="background-pane",eO="decoration/treevirtual/cross_plus.gif",eP="qx/icon/Oxygen/16/actions/window-close.png",eQ="datechooser-week",eR="icon/16/apps/office-calendar.png",eS="datechooser-weekday",eT="table-header-border",eU="table-header-cell-hover",eV="window-active-caption-text",eW="window-active-caption",fr="icon",fq="checkbox-checked-focused",fp="toolbar-separator",fo="groove",fv="checkbox-pressed",fu="tooltip-invalid",ft="decoration/window/restore.gif",fs="decoration/menu/checkbox-invert.gif",fy="scrollarea",fx="window-inactive-caption-text",fI="best-fit",fJ="up.gif",fG="keep-align",fH="tabview-page-button-right",fE="tabview-page-button-top",fF="tabview-page-button-bottom",fC="row-layer",fD="decoration/menu/radiobutton.gif",fK="decoration/arrows/",fL="decoration/table/descending.png",ga="tooltip-text",fY="checkbox-checked-hovered",gc="left.gif",gb="decoration/arrows/up-invert.gif",ge="alias",gd="checkbox-checked-disabled",gg="decoration/arrows/right-invert.gif",gf="radiobutton-checked-disabled",fX="lead-item",fW="checkbox-focused",gH="border-dark",gI="decoration/treevirtual/end_plus.gif",gJ="decoration/treevirtual/start_minus.gif",gK="radiobutton-checked-hovered",gD="decoration/window/minimize.gif",gE="checkbox-checked",gF="table-header-cell-hovered",gG="down.gif",gB="decoration/treevirtual/end.gif",gC="decoration/treevirtual/end_minus.gif",dA="window-inactive-caption",dz="decoration/menu/radiobutton-invert.gif",dy="text-placeholder",dx="slider",dw="decoration/table/select-column-order.png",dv="decoration/arrows/next.gif",du="table-header",dt="decoration/treevirtual/only_minus.gif",ds="datechooser-week-header",dr="decoration/window/maximize.gif",dN="decoration/treevirtual/only_plus.gif",dO="checkbox-checked-pressed",dL="decoration/arrows/down-invert.gif",dM="menu-separator",dR="decoration/splitpane/knob-vertical.png",dS=".gif",dP="decoration/arrows/forward.gif",dQ="radiobutton-checked-pressed",dT="table-statusbar",dU="radiobutton-pressed",fz="copy",fw="table-row-background-selected",fB="radiobutton-focused",fA="decoration/splitpane/knob-horizontal.png",fm="right.gif",fl="radiobutton-checked",eg="decoration/treevirtual/cross.gif",fn="decoration/table/ascending.png",eq="decoration/treevirtual/line.gif",ep="date-chooser-selected",eX="toolbar-part-handle",eY="decoration/window/close.gif",fa="icon/16/actions/view-refresh.png";
qx.Theme.define(eL,{appearances:{"widget":{},"label":{style:function(bF){return {textColor:bF.disabled?gk:undefined};
}},"image":{style:function(y){return {opacity:!y.replacement&&y.disabled?0.3:undefined};
}},"atom":{},"atom/label":gr,"atom/icon":fh,"root":{style:function(R){return {backgroundColor:go,textColor:gM,font:dD};
}},"popup":{style:function(cc){return {decorator:fN,backgroundColor:eN,shadow:fO};
}},"tooltip":{include:gt,style:function(I){return {backgroundColor:fi,textColor:ga,decorator:fi,shadow:fO,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":gn,"tooltip-error":{include:fi,style:function(cD){return {textColor:gj,showTimeout:100,hideTimeout:10000,decorator:eo,font:gA,backgroundColor:fu};
}},"tooltip-error/atom":gn,"iframe":{style:function(dh){return {backgroundColor:fP,decorator:gi};
}},"move-frame":{style:function(bY){return {decorator:fN};
}},"resize-frame":eJ,"dragdrop-cursor":{style:function(bP){var bQ=eK;

if(bP.copy){bQ=fz;
}else if(bP.move){bQ=eF;
}else if(bP.alias){bQ=ge;
}return {source:dW+bQ+dS,position:gU,offset:[2,16,2,6]};
}},"button-frame":{alias:gn,style:function(F){if(F.pressed||F.abandoned||F.checked){var H=!F.inner&&F.focused?fj:gi;
var G=[4,3,2,5];
}else{var H=!F.inner&&F.focused?ej:gl;
var G=[3,4];
}return {backgroundColor:F.abandoned?fV:F.hovered?gx:F.checked?gT:gq,decorator:H,padding:G};
}},"button":{alias:gw,include:gw,style:function(bu){return {center:true};
}},"hover-button":{alias:gn,include:gn,style:function(m){return {backgroundColor:m.hovered?fc:undefined,textColor:m.hovered?gj:undefined};
}},"splitbutton":{},"splitbutton/button":gq,"splitbutton/arrow":{alias:gq,include:gq,style:function(cC){return {icon:fe};
}},"scrollarea/corner":{style:function(){return {backgroundColor:go};
}},"scrollarea":gp,"scrollarea/pane":gp,"scrollarea/scrollbar-x":fQ,"scrollarea/scrollbar-y":fQ,"list":{alias:fy,style:function(U){var Y;
var W=!!U.focused;
var X=!!U.invalid;
var V=!!U.disabled;

if(X&&!V){Y=gs;
}else if(W&&!X&&!V){Y=ey;
}else if(V){Y=gz;
}else{Y=fP;
}return {decorator:U.focused?fj:gi,backgroundColor:Y};
}},"listitem":{alias:gn,style:function(C){return {gap:4,padding:C.lead?[2,4]:[3,5],backgroundColor:C.selected?fc:undefined,textColor:C.selected?gj:undefined,decorator:C.lead?fX:undefined};
}},"textfield":{style:function(r){var w;
var u=!!r.focused;
var v=!!r.invalid;
var s=!!r.disabled;

if(v&&!s){w=gs;
}else if(u&&!v&&!s){w=ey;
}else if(s){w=gz;
}else{w=dF;
}var t;

if(r.disabled){t=gk;
}else if(r.showingPlaceholder){t=dy;
}else{t=undefined;
}return {decorator:r.focused?fj:gi,padding:[2,3],textColor:t,backgroundColor:w};
}},"textarea":gu,"checkbox":{alias:gn,style:function(cy){var cA;

if(cy.checked&&cy.focused){cA=fq;
}else if(cy.checked&&cy.disabled){cA=gd;
}else if(cy.checked&&cy.pressed){cA=dO;
}else if(cy.checked&&cy.hovered){cA=fY;
}else if(cy.checked){cA=gE;
}else if(cy.focused){cA=fW;
}else if(cy.pressed){cA=fv;
}else if(cy.hovered){cA=ei;
}else{cA=gy;
}var cz=cy.invalid&&!cy.disabled?ed:et;
return {icon:ez+cA+cz+ex,gap:6};
}},"radiobutton":{alias:gy,include:gy,style:function(bS){var bU;

if(bS.checked&&bS.focused){bU=eG;
}else if(bS.checked&&bS.disabled){bU=gf;
}else if(bS.checked&&bS.pressed){bU=dQ;
}else if(bS.checked&&bS.hovered){bU=gK;
}else if(bS.checked){bU=fl;
}else if(bS.focused){bU=fB;
}else if(bS.pressed){bU=dU;
}else if(bS.hovered){bU=dX;
}else{bU=dC;
}var bT=bS.invalid&&!bS.disabled?ed:et;
return {icon:ez+bU+bT+ex,shadow:undefined};
}},"spinner":{style:function(l){return {decorator:l.focused?fj:gi,textColor:l.disabled?gk:undefined};
}},"spinner/textfield":{include:gu,style:function(cB){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:gq,include:gq,style:function(o){return {icon:eE,padding:o.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:o.hovered?gx:gq};
}},"spinner/downbutton":{alias:gq,include:gq,style:function(bJ){return {icon:gL,padding:bJ.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:bJ.hovered?gx:gq};
}},"datefield":dE,"datefield/button":{alias:dJ,include:dJ,style:function(x){return {icon:eR,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:ev,include:ev,style:function(bn){return {decorator:bn.focused?fj:gi};
}},"groupbox":{style:function(i){return {backgroundColor:go};
}},"groupbox/legend":{alias:gn,style:function(cd){return {backgroundColor:go,textColor:cd.invalid?fR:undefined,paddingRight:4,paddingLeft:4,marginRight:10,marginLeft:10};
}},"groupbox/frame":{style:function(E){return {padding:[12,9],decorator:fo};
}},"check-groupbox":gh,"check-groupbox/legend":{alias:gy,include:gy,style:function(P){return {backgroundColor:go,textColor:P.invalid?fR:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"radio-groupbox":gh,"radio-groupbox/legend":{alias:dC,include:dC,style:function(cq){return {backgroundColor:go,textColor:cq.invalid?fR:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"toolbar":{style:function(T){return {backgroundColor:go};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(cL){return {decorator:eX,backgroundColor:go,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(co){return {margin:[3,2],decorator:fp};
}},"toolbar-button":{alias:gn,style:function(bg){if(bg.pressed||bg.checked||bg.abandoned){var bi=gm;
var bh=[3,2,1,4];
}else if(bg.hovered){var bi=dG;
var bh=[2,3];
}else{var bi=undefined;
var bh=[3,4];
}return {cursor:dD,decorator:bi,padding:bh,backgroundColor:bg.abandoned?fV:bg.checked?fU:gq};
}},"toolbar-menubutton":{alias:gv,include:gv,style:function(bI){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:fh,include:fh,style:function(cK){return {source:gL};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":gv,"toolbar-splitbutton/arrow":{alias:gv,include:gv,style:function(gW){return {icon:fe};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gq,include:gq,style:function(dq){return {icon:dq.vertical?fe:dv};
}},"slidebar/button-backward":{alias:gq,include:gq,style:function(bw){return {icon:bw.vertical?gN:ec};
}},"tabview":{},"tabview/bar":{alias:eH,style:function(cs){var ct=0,cw=0,cu=0,cv=0;

if(cs.barTop){cu=-2;
}else if(cs.barBottom){ct=-2;
}else if(cs.barRight){cv=-2;
}else{cw=-2;
}return {marginBottom:cu,marginTop:ct,marginLeft:cv,marginRight:cw};
}},"tabview/bar/button-forward":{include:gQ,alias:gQ,style:function(Q){if(Q.barTop||Q.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:ew,alias:ew,style:function(b){if(b.barTop||b.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(bW){return {backgroundColor:go,decorator:gl,padding:10};
}},"tabview-page":gp,"tabview-page/button":{style:function(cV){var df;
var dd=0,db=0,cX=0,da=0;

if(cV.barTop||cV.barBottom){var cY=2,cW=2,dc=6,de=6;
}else{var cY=6,cW=6,dc=6,de=6;
}
if(cV.barTop){df=fE;
}else if(cV.barRight){df=fH;
}else if(cV.barBottom){df=fF;
}else{df=eD;
}
if(cV.checked){if(cV.barTop||cV.barBottom){dc+=2;
de+=2;
}else{cY+=2;
cW+=2;
}}else{if(cV.barTop||cV.barBottom){cX+=2;
dd+=2;
}else if(cV.barLeft||cV.barRight){db+=2;
da+=2;
}}
if(cV.checked){if(!cV.firstTab){if(cV.barTop||cV.barBottom){da=-4;
}else{dd=-4;
}}
if(!cV.lastTab){if(cV.barTop||cV.barBottom){db=-4;
}else{cX=-4;
}}}return {zIndex:cV.checked?10:5,decorator:df,backgroundColor:go,padding:[cY,de,cW,dc],margin:[dd,db,cX,da]};
}},"tabview-page/button/label":{alias:gr,style:function(cF){return {padding:[0,1,0,1],margin:cF.focused?0:1,decorator:cF.focused?eb:undefined};
}},"tabview-page/button/icon":fh,"tabview-page/button/close-button":{alias:gn,style:function(bE){return {icon:eP};
}},"scrollbar":{},"scrollbar/slider":{alias:dx,style:function(cj){return {backgroundColor:fU};
}},"scrollbar/slider/knob":{include:gw,style:function(c){return {height:14,width:14,minHeight:c.horizontal?undefined:9,minWidth:c.horizontal?9:undefined};
}},"scrollbar/button":{alias:gq,include:gq,style:function(bx){var by;

if(bx.up||bx.down){if(bx.pressed||bx.abandoned||bx.checked){by=[5,2,3,4];
}else{by=[4,3];
}}else{if(bx.pressed||bx.abandoned||bx.checked){by=[4,3,2,5];
}else{by=[3,4];
}}var bz=fK;

if(bx.left){bz+=gc;
}else if(bx.right){bz+=fm;
}else if(bx.up){bz+=fJ;
}else{bz+=gG;
}return {padding:by,icon:bz};
}},"scrollbar/button-begin":dI,"scrollbar/button-end":dI,"slider":{style:function(bb){var bc;

if(bb.disabled){bc=gz;
}else if(bb.invalid){bc=gs;
}else if(bb.focused){bc=fU;
}else{bc=dF;
}return {backgroundColor:bc,decorator:bb.focused?fj:gi};
}},"slider/knob":{include:gw,style:function(cN){return {width:14,height:14,decorator:gl};
}},"tree-folder/open":{style:function(bp){return {source:bp.opened?eA:eu};
}},"tree-folder":{style:function(n){return {padding:[2,3,2,0],icon:n.opened?ef:gS};
}},"tree-folder/icon":{style:function(cb){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(bD){return {padding:[1,2],backgroundColor:bD.selected?fc:undefined,textColor:bD.selected?gj:undefined};
}},"tree-file":{include:gR,alias:gR,style:function(cI){return {icon:gP};
}},"tree":{include:fb,alias:fb,style:function(bO){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(bM){return {decorator:fN};
}},"treevirtual-folder":{style:function(cS){return {icon:(cS.opened?ef:gS)};
}},"treevirtual-file":{include:eC,alias:eC,style:function(q){return {icon:gP};
}},"treevirtual-line":{style:function(ck){return {icon:eq};
}},"treevirtual-contract":{style:function(d){return {icon:eA};
}},"treevirtual-expand":{style:function(di){return {icon:eu};
}},"treevirtual-only-contract":{style:function(z){return {icon:dt};
}},"treevirtual-only-expand":{style:function(O){return {icon:dN};
}},"treevirtual-start-contract":{style:function(cm){return {icon:gJ};
}},"treevirtual-start-expand":{style:function(br){return {icon:ea};
}},"treevirtual-end-contract":{style:function(bN){return {icon:gC};
}},"treevirtual-end-expand":{style:function(cT){return {icon:gI};
}},"treevirtual-cross-contract":{style:function(gV){return {icon:dY};
}},"treevirtual-cross-expand":{style:function(e){return {icon:eO};
}},"treevirtual-end":{style:function(bV){return {icon:gB};
}},"treevirtual-cross":{style:function(cP){return {icon:eg};
}},"window":{style:function(cE){return {contentPadding:[10,10,10,10],backgroundColor:go,decorator:cE.maximized?undefined:gl,shadow:cE.maximized?undefined:fO};
}},"window/pane":{},"window/captionbar":{style:function(bd){return {padding:1,backgroundColor:bd.active?eW:dA,textColor:bd.active?eV:fx};
}},"window/icon":{style:function(bt){return {marginRight:4};
}},"window/title":{style:function(hd){return {cursor:dD,font:gA,marginRight:20,alignY:ff};
}},"window/minimize-button":{include:gq,alias:gq,style:function(p){return {icon:gD,padding:p.pressed||p.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:gq,alias:gq,style:function(ca){return {icon:ft,padding:ca.pressed||ca.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:gq,alias:gq,style:function(f){return {icon:dr,padding:f.pressed||f.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:gq,alias:gq,style:function(bA){return {marginLeft:2,icon:eY,padding:bA.pressed||bA.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(N){return {decorator:gm,padding:[2,6]};
}},"window/statusbar-text":gr,"resizer":{style:function(h){return {decorator:gl};
}},"splitpane":{},"splitpane/splitter":{style:function(ch){return {backgroundColor:go};
}},"splitpane/splitter/knob":{style:function(gX){return {source:gX.horizontal?fA:dR,padding:2};
}},"splitpane/slider":{style:function(bj){return {backgroundColor:gH,opacity:0.3};
}},"selectbox":{include:gw,style:function(dk){var dl=gq;

if(dk.invalid&&!dk.disabled){dl=gs;
}else if(dk.abandoned){dl=fV;
}else if(!dk.abandoned&&dk.hovered){dl=gx;
}else if(!dk.abandoned&&!dk.hovered&&dk.checked){dl=gT;
}return {backgroundColor:dl};
}},"selectbox/atom":gn,"selectbox/popup":gt,"selectbox/list":fb,"selectbox/arrow":{style:function(cp){return {source:fe,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(g){return {decorator:gl};
}},"datechooser/navigation-bar":{style:function(cO){return {backgroundColor:fM,textColor:cO.disabled?gk:cO.invalid?fR:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":fi,"datechooser/last-month-button-tooltip":fi,"datechooser/next-year-button-tooltip":fi,"datechooser/next-month-button-tooltip":fi,"datechooser/last-year-button":fS,"datechooser/last-month-button":fS,"datechooser/next-year-button":fS,"datechooser/next-month-button":fS,"datechooser/button/icon":{},"datechooser/button":{style:function(J){var K={width:17,show:fr};

if(J.lastYear){K.icon=em;
}else if(J.lastMonth){K.icon=ec;
}else if(J.nextYear){K.icon=dP;
}else if(J.nextMonth){K.icon=gO;
}
if(J.pressed||J.checked||J.abandoned){K.decorator=gm;
}else if(J.hovered){K.decorator=dG;
}else{K.decorator=undefined;
}
if(J.pressed||J.checked||J.abandoned){K.padding=[2,0,0,2];
}else if(J.hovered){K.padding=1;
}else{K.padding=2;
}return K;
}},"datechooser/month-year-label":{style:function(A){return {font:gA,textAlign:fT};
}},"datechooser/date-pane":{style:function(cr){return {decorator:er,backgroundColor:fM};
}},"datechooser/weekday":{style:function(dp){return {decorator:eS,font:gA,textAlign:fT,textColor:dp.disabled?gk:dp.weekend?dB:fM,backgroundColor:dp.weekend?fM:dB};
}},"datechooser/day":{style:function(B){return {textAlign:fT,decorator:B.today?fN:undefined,textColor:B.disabled?gk:B.selected?gj:B.otherMonth?gk:undefined,backgroundColor:B.disabled?undefined:B.selected?ep:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(dm){return {textAlign:fT,textColor:dB,padding:[2,4],decorator:dm.header?ds:eQ};
}},"combobox":{style:function(cQ){var cR;

if(cQ.disabled){cR=gz;
}else if(cQ.invalid){cR=gs;
}else if(cQ.focused){cR=fU;
}else{cR=dF;
}return {decorator:cQ.focused?fj:gi,textColor:cQ.disabled?gk:undefined,backgroundColor:cR};
}},"combobox/button":{alias:gq,include:gq,style:function(L){return {icon:fe,backgroundColor:L.hovered?gx:gq};
}},"combobox/popup":gt,"combobox/list":fb,"combobox/textfield":{include:gu,style:function(dg){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(bG){var bH={backgroundColor:go,shadow:fO,decorator:gl,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:bG.submenu||bG.contextmenu?fI:fG};

if(bG.submenu){bH.position=gU;
bH.offset=[-2,-3];
}
if(bG.contextmenu){bH.offset=4;
}return bH;
}},"menu/slidebar":es,"menu-slidebar":gp,"menu-slidebar-button":{style:function(cH){return {backgroundColor:cH.hovered?fc:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:dH,style:function(cG){return {icon:cG.hovered?gb:gN};
}},"menu-slidebar/button-forward":{include:dH,style:function(bv){return {icon:bv.hovered?dL:fe};
}},"menu-separator":{style:function(S){return {height:0,decorator:dM,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:gn,style:function(gY){return {backgroundColor:gY.selected?fc:undefined,textColor:gY.selected?gj:undefined,padding:[2,6]};
}},"menu-button/icon":{include:fh,style:function(j){return {alignY:ff};
}},"menu-button/label":{include:gr,style:function(bs){return {alignY:ff,padding:1};
}},"menu-button/shortcut":{include:gr,style:function(ci){return {alignY:ff,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:fh,style:function(cx){return {source:cx.selected?gg:gO,alignY:ff};
}},"menu-checkbox":{alias:fg,include:fg,style:function(bB){return {icon:!bB.checked?undefined:bB.selected?fs:eM};
}},"menu-radiobutton":{alias:fg,include:fg,style:function(ce){return {icon:!ce.checked?undefined:ce.selected?dz:fD};
}},"menubar":{style:function(cJ){return {backgroundColor:go,decorator:gl};
}},"menubar-button":{alias:gn,style:function(ba){return {padding:[2,6],backgroundColor:ba.pressed||ba.hovered?fc:undefined,textColor:ba.pressed||ba.hovered?gj:undefined};
}},"colorselector":gp,"colorselector/control-bar":gp,"colorselector/visual-pane":gh,"colorselector/control-pane":gp,"colorselector/preset-grid":gp,"colorselector/colorbucket":{style:function(k){return {decorator:gm,width:16,height:16};
}},"colorselector/preset-field-set":gh,"colorselector/input-field-set":gh,"colorselector/preview-field-set":gh,"colorselector/hex-field-composite":gp,"colorselector/hex-field":gu,"colorselector/rgb-spinner-composite":gp,"colorselector/rgb-spinner-red":fd,"colorselector/rgb-spinner-green":fd,"colorselector/rgb-spinner-blue":fd,"colorselector/hsb-spinner-composite":gp,"colorselector/hsb-spinner-hue":fd,"colorselector/hsb-spinner-saturation":fd,"colorselector/hsb-spinner-brightness":fd,"colorselector/preview-content-old":{style:function(cU){return {decorator:gm,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(cn){return {decorator:gm,backgroundColor:fP,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(bC){return {decorator:gm,margin:5};
}},"colorselector/brightness-field":{style:function(bk){return {decorator:gm,margin:[5,7]};
}},"colorselector/hue-saturation-pane":gp,"colorselector/hue-saturation-handle":gp,"colorselector/brightness-pane":gp,"colorselector/brightness-handle":gp,"table":gp,"table/statusbar":{style:function(dn){return {decorator:dT,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:gq,style:function(ha){var hc,hb;

if(ha.pressed||ha.checked||ha.abandoned){hc=gm;
hb=[3,2,1,4];
}else if(ha.hovered){hc=dG;
hb=[2,3];
}else{hc=undefined;
hb=[3,4];
}return {decorator:hc,padding:hb,backgroundColor:ha.abandoned?fV:gq,icon:dw};
}},"table-column-reset-button":{extend:fg,alias:fg,style:function(){return {icon:fa};
}},"table-scroller/scrollbar-x":fQ,"table-scroller/scrollbar-y":fQ,"table-scroller":gp,"table-scroller/header":{style:function(cg){return {decorator:el,backgroundColor:du};
}},"table-scroller/pane":{style:function(bK){return {backgroundColor:ek};
}},"table-scroller/focus-indicator":{style:function(a){return {decorator:eI};
}},"table-scroller/resize-line":{style:function(cM){return {backgroundColor:eT,width:3};
}},"table-header-cell":{alias:gn,style:function(bL){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:bL.hovered?0:2,decorator:bL.hovered?gF:dK,backgroundColor:bL.hovered?eU:dK,sortIcon:bL.sorted?(bL.sortedAscending?fn:fL):undefined};
}},"table-header-cell/sort-icon":{style:function(bo){return {alignY:ff};
}},"table-editor-textfield":{include:gu,style:function(bm){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:eB,alias:eB,style:function(cl){return {padding:[0,2]};
}},"table-editor-combobox":{include:dE,alias:dE,style:function(bl){return {decorator:undefined};
}},"colorpopup":{alias:gt,include:gt,style:function(D){return {decorator:gl,padding:5,backgroundColor:go};
}},"colorpopup/field":{style:function(dj){return {decorator:gm,margin:2,width:14,height:14,backgroundColor:go};
}},"colorpopup/selector-button":gq,"colorpopup/auto-button":gq,"colorpopup/preview-pane":gh,"colorpopup/current-preview":{style:function(bq){return {height:20,padding:4,marginLeft:4,decorator:gm,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(M){return {height:20,padding:4,marginRight:4,decorator:gm,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:gq,include:gq,style:function(be){return {icon:dV};
}},"colorpopup/colorselector-cancelbutton":{alias:gq,include:gq,style:function(bR){return {icon:eh};
}},"virtual-list":fb,"virtual-list/row-layer":fC,"row-layer":gp,"column-layer":gp,"cell":{style:function(cf){return {backgroundColor:cf.selected?fw:ee,textColor:cf.selected?gj:gM,padding:[3,6]};
}},"cell-string":fk,"cell-number":{include:fk,style:function(bf){return {textAlign:en};
}},"cell-image":fk,"cell-boolean":fk,"cell-atom":fk,"cell-date":fk,"cell-html":fk,"htmlarea":{"include":gp,style:function(bX){return {backgroundColor:fP};
}}}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a},icons:{}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
})();
(function(){var q="_applyStyle",p="stretch",o="Integer",n="px",m=" ",l="repeat",k="round",j="shorthand",i="px ",h="sliceBottom",F=";'></div>",E="<div style='",D="sliceLeft",C="sliceRight",B="repeatX",A="String",z="qx.ui.decoration.css3.BorderImage",y="border-box",x="",w='") ',u="sliceTop",v='url("',s="hidden",t="repeatY",r="absolute";
qx.Class.define(z,{extend:qx.ui.decoration.Abstract,construct:function(f,g){qx.ui.decoration.Abstract.call(this);
if(f!=null){this.setBorderImage(f);
}
if(g!=null){this.setSlice(g);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:A,nullable:true,apply:q},sliceTop:{check:o,init:0,apply:q},sliceRight:{check:o,init:0,apply:q},sliceBottom:{check:o,init:0,apply:q},sliceLeft:{check:o,init:0,apply:q},slice:{group:[u,C,h,D],mode:j},repeatX:{check:[p,l,k],init:p,apply:q},repeatY:{check:[p,l,k],init:p,apply:q},repeat:{group:[B,t],mode:j}},members:{__sg:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sg;
},getMarkup:function(){if(this.__sg){return this.__sg;
}var a=this._resolveImageUrl(this.getBorderImage());
var b=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var c=[this.getRepeatX(),this.getRepeatY()].join(m);
this.__sg=[E,qx.bom.element.Style.compile({"borderImage":v+a+w+b.join(m)+m+c,position:r,lineHeight:0,fontSize:0,overflow:s,boxSizing:y,borderWidth:b.join(i)+n}),F].join(x);
return this.__sg;
},resize:function(H,I,J){H.style.width=I+n;
H.style.height=J+n;
},tint:function(d,e){},_applyStyle:function(){{};
},_resolveImageUrl:function(G){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(G));
}},destruct:function(){this.__sg=null;
}});
})();
(function(){var A="px",z="0px",y="-1px",x="no-repeat",w="scale-x",v="scale-y",u="-tr",t="-l",s='</div>',r="scale",O="qx.client",N="-br",M="-t",L="-tl",K="-r",J='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',I="_applyBaseImage",H="-b",G="String",F="",D="-bl",E="qx.ui.decoration.GridDiv",B="-c",C="mshtml";
qx.Class.define(E,{extend:qx.ui.decoration.Abstract,construct:function(S,T){qx.ui.decoration.Abstract.call(this);
if(S!=null){this.setBaseImage(S);
}
if(T!=null){this.setInsets(T);
}},properties:{baseImage:{check:G,nullable:true,apply:I}},members:{__sh:null,__si:null,__sj:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sh;
},getMarkup:function(){if(this.__sh){return this.__sh;
}var c=qx.bom.element.Decoration;
var d=this.__si;
var e=this.__sj;
var f=[];
f.push(J);
f.push(c.create(d.tl,x,{top:0,left:0}));
f.push(c.create(d.t,w,{top:0,left:e.left+A}));
f.push(c.create(d.tr,x,{top:0,right:0}));
f.push(c.create(d.bl,x,{bottom:0,left:0}));
f.push(c.create(d.b,w,{bottom:0,left:e.left+A}));
f.push(c.create(d.br,x,{bottom:0,right:0}));
f.push(c.create(d.l,v,{top:e.top+A,left:0}));
f.push(c.create(d.c,r,{top:e.top+A,left:e.left+A}));
f.push(c.create(d.r,v,{top:e.top+A,right:0}));
f.push(s);
return this.__sh=f.join(F);
},resize:function(n,o,p){var q=this.__sj;
var innerWidth=o-q.left-q.right;
var innerHeight=p-q.top-q.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}n.style.width=o+A;
n.style.height=p+A;
n.childNodes[1].style.width=innerWidth+A;
n.childNodes[4].style.width=innerWidth+A;
n.childNodes[7].style.width=innerWidth+A;
n.childNodes[6].style.height=innerHeight+A;
n.childNodes[7].style.height=innerHeight+A;
n.childNodes[8].style.height=innerHeight+A;

if(qx.core.Variant.isSet(O,C)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(o%2==1){n.childNodes[2].style.marginRight=y;
n.childNodes[5].style.marginRight=y;
n.childNodes[8].style.marginRight=y;
}else{n.childNodes[2].style.marginRight=z;
n.childNodes[5].style.marginRight=z;
n.childNodes[8].style.marginRight=z;
}
if(p%2==1){n.childNodes[3].style.marginBottom=y;
n.childNodes[4].style.marginBottom=y;
n.childNodes[5].style.marginBottom=y;
}else{n.childNodes[3].style.marginBottom=z;
n.childNodes[4].style.marginBottom=z;
n.childNodes[5].style.marginBottom=z;
}}}},tint:function(a,b){},_applyBaseImage:function(g,h){{};

if(g){var l=this._resolveImageUrl(g);
var m=/(.*)(\.[a-z]+)$/.exec(l);
var k=m[1];
var j=m[2];
var i=this.__si={tl:k+L+j,t:k+M+j,tr:k+u+j,bl:k+D+j,b:k+H+j,br:k+N+j,l:k+t+j,c:k+B+j,r:k+K+j};
this.__sj=this._computeEdgeSizes(i);
}},_resolveImageUrl:function(R){return qx.util.AliasManager.getInstance().resolve(R);
},_computeEdgeSizes:function(P){var Q=qx.util.ResourceManager.getInstance();
return {top:Q.getImageHeight(P.t),bottom:Q.getImageHeight(P.b),left:Q.getImageWidth(P.l),right:Q.getImageWidth(P.r)};
}},destruct:function(){this.__sh=this.__si=this.__sj=null;
}});
})();


qx.$$loader.init();

