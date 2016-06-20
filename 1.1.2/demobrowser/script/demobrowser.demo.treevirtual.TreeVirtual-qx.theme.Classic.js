(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.treevirtual.TreeVirtual","qx.theme":"qx.theme.Classic"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.1.2"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.treevirtual.TreeVirtual-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"71e6511d8e5d"},
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

qx.$$packageData['71e6511d8e5d']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser.demo"],"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-132],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-110],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","Reset column widths":"Spaltenbreite zurücksetzen","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_DE":{},"en":{},"en_US":{},"fr":{"%1 of %2 rows":"ligne %1 de %2","%1 rows":"%1 lignes","Reset column widths":"Réinitialiser la largeur des colonnes","one of one row":"ligne une de une","one row":"une ligne"},"fr_FR":{}}};
(function(){var s="toString",r=".",q="default",p="Object",o='"',n="Array",m="()",k="String",j="Function",h=".prototype",R="function",Q="Boolean",P="Error",O="constructor",N="warn",M="hasOwnProperty",L="string",K="toLocaleString",J="RegExp",I='\", "',z="info",A="BROKEN_IE",x="isPrototypeOf",y="Date",v="",w="qx.Bootstrap",t="]",u="Class",B="error",C="[Class ",E="valueOf",D="Number",G="count",F="debug",H="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return C+this.classname+t;
},createNamespace:function(name,bH){var bJ=name.split(r);
var parent=window;
var bI=bJ[0];

for(var i=0,bK=bJ.length-1;i<bK;i++,bI=bJ[i]){if(!parent[bI]){parent=parent[bI]={};
}else{parent=parent[bI];
}}parent[bI]=bH;
return bI;
},setDisplayName:function(bM,bN,name){bM.displayName=bN+r+name+m;
},setDisplayNames:function(bV,bW){for(var name in bV){var bX=bV[name];

if(bX instanceof Function){bX.displayName=bW+r+name+m;
}}},define:function(name,bz){if(!bz){var bz={statics:{}};
}var bE;
var bC=null;
qx.Bootstrap.setDisplayNames(bz.statics,name);

if(bz.members||bz.extend){qx.Bootstrap.setDisplayNames(bz.members,name+h);
bE=bz.construct||new Function;

if(bz.extend){this.extendClass(bE,bE,bz.extend,name,bD);
}var bA=bz.statics||{};
for(var i=0,bF=qx.Bootstrap.getKeys(bA),l=bF.length;i<l;i++){var bG=bF[i];
bE[bG]=bA[bG];
}bC=bE.prototype;
var bB=bz.members||{};
for(var i=0,bF=qx.Bootstrap.getKeys(bB),l=bF.length;i<l;i++){var bG=bF[i];
bC[bG]=bB[bG];
}}else{bE=bz.statics||{};
}var bD=this.createNamespace(name,bE);
bE.name=bE.classname=name;
bE.basename=bD;
bE.$$type=u;
if(!bE.hasOwnProperty(s)){bE.toString=this.genericToString;
}if(bz.defer){bz.defer(bE,bC);
}qx.Bootstrap.$$registry[name]=bz.statics;
return bE;
}};
qx.Bootstrap.define(w,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(U,V,W,name,X){var bb=W.prototype;
var ba=new Function;
ba.prototype=bb;
var Y=new ba;
U.prototype=Y;
Y.name=Y.classname=name;
Y.basename=X;
V.base=U.superclass=W;
V.self=U.constructor=Y.constructor=U;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bg){return bg.__count__;
},"default":function(bn){var length=0;

for(var bo in bn){length++;
}return length;
}})[(({}).__count__==0)?G:q],objectMergeWith:function(bY,ca,cb){if(cb===undefined){cb=true;
}
for(var cc in ca){if(cb||bY[cc]===undefined){bY[cc]=ca[cc];
}}return bY;
},__gL:[x,M,K,s,E,O],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bi){var bj=[];
var bl=Object.prototype.hasOwnProperty;

for(var bm in bi){if(bl.call(bi,bm)){bj.push(bm);
}}var bk=qx.Bootstrap.__gL;

for(var i=0,a=bk,l=a.length;i<l;i++){if(bl.call(bi,a[i])){bj.push(a[i]);
}}return bj;
},"default":function(ch){var ci=[];
var cj=Object.prototype.hasOwnProperty;

for(var ck in ch){if(cj.call(ch,ck)){ci.push(ck);
}}return ci;
}})[typeof (Object.keys)==
R?H:
(function(){for(var cg in {toString:1}){return cg;
}})()!==s?A:q],getKeysAsString:function(bx){var by=qx.Bootstrap.getKeys(bx);

if(by.length==0){return v;
}return o+by.join(I)+o;
},__gM:{"[object String]":k,"[object Array]":n,"[object Object]":p,"[object RegExp]":J,"[object Number]":D,"[object Boolean]":Q,"[object Date]":y,"[object Function]":j,"[object Error]":P},bind:function(cd,self,ce){var cf=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bf=Array.prototype.slice.call(arguments,0,arguments.length);
return cd.apply(self,cf.concat(bf));
};
},firstUp:function(bh){return bh.charAt(0).toUpperCase()+bh.substr(1);
},firstLow:function(bQ){return bQ.charAt(0).toLowerCase()+bQ.substr(1);
},getClass:function(bd){var be=Object.prototype.toString.call(bd);
return (qx.Bootstrap.__gM[be]||be.slice(8,-1));
},isString:function(T){return (T!==null&&(typeof T===L||qx.Bootstrap.getClass(T)==k||T instanceof String||(!!T&&!!T.$$isString)));
},isArray:function(e){return (e!==null&&(e instanceof Array||(e&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(e.constructor,qx.data.IListData))||qx.Bootstrap.getClass(e)==n||(!!e&&!!e.$$isArray)));
},isObject:function(bL){return (bL!==undefined&&bL!==null&&qx.Bootstrap.getClass(bL)==p);
},isFunction:function(d){return qx.Bootstrap.getClass(d)==j;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(S,name){while(S){if(S.$$properties&&S.$$properties[name]){return S.$$properties[name];
}S=S.superclass;
}return null;
},hasProperty:function(br,name){return !!qx.Bootstrap.getPropertyDefinition(br,name);
},getEventType:function(bT,name){var bT=bT.constructor;

while(bT.superclass){if(bT.$$events&&bT.$$events[name]!==undefined){return bT.$$events[name];
}bT=bT.superclass;
}return null;
},supportsEvent:function(bc,name){return !!qx.Bootstrap.getEventType(bc,name);
},getByInterface:function(bs,bt){var bu,i,l;

while(bs){if(bs.$$implements){bu=bs.$$flatImplements;

for(i=0,l=bu.length;i<l;i++){if(bu[i]===bt){return bs;
}}}bs=bs.superclass;
}return null;
},hasInterface:function(bR,bS){return !!qx.Bootstrap.getByInterface(bR,bS);
},getMixins:function(bp){var bq=[];

while(bp){if(bp.$$includes){bq.push.apply(bq,bp.$$flatIncludes);
}bp=bp.superclass;
}return bq;
},$$logs:[],debug:function(bv,bw){qx.Bootstrap.$$logs.push([F,arguments]);
},info:function(f,g){qx.Bootstrap.$$logs.push([z,arguments]);
},warn:function(bO,bP){qx.Bootstrap.$$logs.push([N,arguments]);
},error:function(b,c){qx.Bootstrap.$$logs.push([B,arguments]);
},trace:function(bU){}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__dM:{},define:function(m,n){if(n===undefined){throw new Error('Default value of setting "'+m+'" must be defined!');
}
if(!this.__dM[m]){this.__dM[m]={};
}else if(this.__dM[m].defaultValue!==undefined){throw new Error('Setting "'+m+'" is already defined!');
}this.__dM[m].defaultValue=n;
},get:function(k){var l=this.__dM[k];

if(l===undefined){throw new Error('Setting "'+k+'" is not defined.');
}
if(l.value!==undefined){return l.value;
}return l.defaultValue;
},set:function(r,s){if((r.split(a)).length<2){throw new Error('Malformed settings key "'+r+'". Must be following the schema "namespace.key".');
}
if(!this.__dM[r]){this.__dM[r]={};
}this.__dM[r].value=s;
},__dN:function(){if(window.qxsettings){for(var q in window.qxsettings){this.set(q,window.qxsettings[q]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(t){}this.__dO();
}},__dO:function(){if(this.get(h)!=true){return;
}var p=document.location.search.slice(1).split(g);

for(var i=0;i<p.length;i++){var o=p[i].split(b);

if(o.length!=3||o[0]!=c){continue;
}this.set(o[1],decodeURIComponent(o[2]));
}}},defer:function(j){j.define(h,false);
j.define(e,false);
j.define(d,0);
j.__dN();
}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,A){if(A){if(A.extend&&!(A.extend instanceof Array)){A.extend=[A.extend];
}{};
var B=A.statics?A.statics:{};
if(A.extend){B.$$extends=A.extend;
}
if(A.properties){B.$$properties=A.properties;
}
if(A.members){B.$$members=A.members;
}
if(A.events){B.$$events=A.events;
}}else{var B={};
}B.$$type=c;
B.name=name;
B.toString=this.genericToString;
B.basename=qx.Bootstrap.createNamespace(name,B);
qx.Interface.$$registry[name]=B;
return B;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(M){if(!M){return [];
}var N=M.concat();

for(var i=0,l=M.length;i<l;i++){if(M[i].$$extends){N.push.apply(N,this.flatten(M[i].$$extends));
}}return N;
},__eV:function(r,s,t,u){var y=t.$$members;

if(y){for(var x in y){if(qx.Bootstrap.isFunction(y[x])){var w=this.__eW(s,x);
var v=w||qx.Bootstrap.isFunction(r[x]);

if(!v){throw new Error('Implementation of method "'+x+'" is missing in class "'+s.classname+'" required by interface "'+t.name+'"');
}var z=u===true&&!w&&!qx.Bootstrap.hasInterface(s,t);

if(z){r[x]=this.__fa(t,r[x],x,y[x]);
}}else{if(typeof r[x]===undefined){if(typeof r[x]!==h){throw new Error('Implementation of member "'+x+'" is missing in class "'+s.classname+'" required by interface "'+t.name+'"');
}}}}}},__eW:function(C,D){var H=D.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!H){return false;
}var E=qx.Bootstrap.firstLow(H[2]);
var F=qx.Bootstrap.getPropertyDefinition(C,E);

if(!F){return false;
}var G=H[0]==b||H[0]==d;

if(G){return qx.Bootstrap.getPropertyDefinition(C,E).check==g;
}return true;
},__eX:function(o,p){if(p.$$properties){for(var q in p.$$properties){if(!qx.Bootstrap.getPropertyDefinition(o,q)){throw new Error('The property "'+q+'" is not supported by Class "'+o.classname+'"!');
}}}},__eY:function(O,P){if(P.$$events){for(var Q in P.$$events){if(!qx.Bootstrap.supportsEvent(O,Q)){throw new Error('The event "'+Q+'" is not supported by Class "'+O.classname+'"!');
}}}},assertObject:function(j,k){var n=j.constructor;
this.__eV(j,n,k,false);
this.__eX(n,k);
this.__eY(n,k);
var m=k.$$extends;

if(m){for(var i=0,l=m.length;i<l;i++){this.assertObject(j,m[i]);
}}},assert:function(I,J,K){this.__eV(I.prototype,I,J,K);
this.__eX(I,J);
this.__eY(I,J);
var L=J.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assert(I,L[i],K);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__fa:function(){},__fb:null,__fc:function(){}}});
})();
(function(){var q="qx.Mixin",p=".prototype",o="constructor",n="[Mixin ",m="]",k="destruct",j="Mixin";
qx.Bootstrap.define(q,{statics:{define:function(name,r){if(r){if(r.include&&!(r.include instanceof Array)){r.include=[r.include];
}{};
var t=r.statics?r.statics:{};
qx.Bootstrap.setDisplayNames(t,name);

for(var s in t){if(t[s] instanceof Function){t[s].$$mixin=t;
}}if(r.construct){t.$$constructor=r.construct;
qx.Bootstrap.setDisplayName(r.construct,name,o);
}
if(r.include){t.$$includes=r.include;
}
if(r.properties){t.$$properties=r.properties;
}
if(r.members){t.$$members=r.members;
qx.Bootstrap.setDisplayNames(r.members,name+p);
}
for(var s in t.$$members){if(t.$$members[s] instanceof Function){t.$$members[s].$$mixin=t;
}}
if(r.events){t.$$events=r.events;
}
if(r.destruct){t.$$destructor=r.destruct;
qx.Bootstrap.setDisplayName(r.destruct,name,k);
}}else{var t={};
}t.$$type=j;
t.name=name;
t.toString=this.genericToString;
t.basename=qx.Bootstrap.createNamespace(name,t);
this.$$registry[name]=t;
return t;
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
},genericToString:function(){return n+this.name+m;
},$$registry:{},__dJ:null,__dK:function(){}}});
})();
(function(){var cv=';',cu='computed=this.',ct='=value;',cs='this.',cr="set",cq="setThemed",cp="setRuntime",co="init",cn='if(this.',cm='delete this.',bw='!==undefined)',bv='}',bu="resetThemed",bt='else if(this.',bs="string",br="boolean",bq='return this.',bp="reset",bo="resetRuntime",bn='!==undefined){',cC="",cD="refresh",cA='=true;',cB="this.",cy=";",cz='old=this.',cw="();",cx='else ',cE='if(old===undefined)old=this.',cF='old=computed=this.',bU="return this.",bT="get",bW='(value);',bV="(a[",bY='if(old===computed)return value;',bX='if(old===undefined)old=null;',cb=' of an instance of ',ca=' is not (yet) ready!");',bS="]);",bR='!==inherit){',c='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',d='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',e='value !== null && value.nodeType === 9 && value.documentElement',f='===value)return value;',g='value !== null && value.$$type === "Mixin"',h='return init;',j='var init=this.',k='value !== null && value.nodeType === 1 && value.attributes',m="var parent = this.getLayoutParent();",n="Error in property ",cT='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',cS='.validate.call(this, value);',cR='qx.core.Assert.assertInstance(value, Date, msg) || true',cQ='else{',cX="if (!parent) return;",cW=" in method ",cV='qx.core.Assert.assertInstance(value, Error, msg) || true',cU='=computed;',da='Undefined value is not allowed!',cY='(backup);',M="MSIE 6.0",N='if(computed===inherit){',K="inherit",L='Is invalid!',Q='if(value===undefined)prop.error(this,2,"',R='var computed, old=this.',O='else if(computed===undefined)',P="': ",I=" of class ",J='value !== null && value.nodeType !== undefined',v='===undefined)return;',u='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',x="')){",w='qx.core.Assert.assertPositiveInteger(value, msg) || true',r='else this.',q='value=this.',t='","',s='if(init==qx.core.Property.$$inherit)init=null;',p='value !== null && value.$$type === "Interface"',o='var inherit=prop.$$inherit;',W="', qx.event.type.Data, [computed, old]",X="var value = parent.",Y="$$useinit_",ba='computed=undefined;delete this.',S="(value);",T='Requires exactly one argument!',U='",value);',V='computed=value;',bb="$$runtime_",bc=';}',F="$$user_",E='){',D='qx.core.Assert.assertArray(value, msg) || true',C='if(computed===undefined||computed===inherit){',B='qx.core.Assert.assertPositiveNumber(value, msg) || true',A=".prototype",z="Boolean",y=")}",H='(computed, old, "',G='return value;',bd='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',be="if(reg.hasListener(this, '",bf='Does not allow any arguments!',bg=')a[i].',bh="()",bi="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bj='.$$properties.',bk='value !== null && value.$$type === "Theme"',bl="var reg=qx.event.Registration;",bm="())",bA='return null;',bz='qx.core.Assert.assertObject(value, msg) || true',by='");',bx='qx.core.Assert.assertString(value, msg) || true',bE='var pa=this.getLayoutParent();if(pa)computed=pa.',bD="if (value===undefined) value = parent.",bC='value !== null && value.$$type === "Class"',bB='qx.core.Assert.assertFunction(value, msg) || true',bG='!==undefined&&',bF='var computed, old;',bN='var backup=computed;',bO='}else{',bL="object",bM="$$init_",bJ="$$theme_",bK='if(computed===undefined)computed=null;',bH='qx.core.Assert.assertMap(value, msg) || true',bI='qx.core.Assert.assertNumber(value, msg) || true',bP='if((computed===undefined||computed===inherit)&&',bQ="reg.fireEvent(this, '",cf='Null value is not allowed!',ce='qx.core.Assert.assertInteger(value, msg) || true',ch="value",cg="rv:1.8.1",cj="shorthand",ci='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cl='value !== null && value.type !== undefined',ck='value !== null && value.document',cd='throw new Error("Property ',cc="(!this.",cM='qx.core.Assert.assertBoolean(value, msg) || true',cN='if(a[i].',cO="toggle",cP="$$inherit_",cI='var prop=qx.core.Property;',cJ=" with incoming value '",cK="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",cL='if(computed===undefined||computed==inherit)computed=null;',cG="qx.core.Property",cH="is",b='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(cG,{statics:{__kq:{"Boolean":cM,"String":bx,"Number":bI,"Integer":ce,"PositiveNumber":B,"PositiveInteger":w,"Error":cV,"RegExp":ci,"Object":bz,"Array":D,"Map":bH,"Function":bB,"Date":cR,"Node":J,"Element":k,"Document":e,"Window":ck,"Event":cl,"Class":bC,"Mixin":g,"Interface":p,"Theme":bk,"Color":c,"Decorator":u,"Font":d},__kr:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:K,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bs,dispose:br,dereference:br,inheritable:br,nullable:br,themeable:br,refine:br,init:null,apply:bs,event:bs,check:null,transform:bs,deferredInit:br,validate:null},$$allowedGroupKeys:{name:bs,group:bL,mode:bs,themeable:br},$$inheritable:{},__ks:function(dS){var dT=this.__kt(dS);

if(!dT.length){var dU=qx.lang.Function.empty;
}else{dU=this.__ku(dT);
}dS.prototype.$$refreshInheritables=dU;
},__kt:function(dj){var dl=[];

while(dj){var dk=dj.$$properties;

if(dk){for(var name in this.$$inheritable){if(dk[name]&&dk[name].inheritable){dl.push(name);
}}}dj=dj.superclass;
}return dl;
},__ku:function(eN){var eR=this.$$store.inherit;
var eQ=this.$$store.init;
var eP=this.$$method.refresh;
var eO=[m,cX];

for(var i=0,l=eN.length;i<l;i++){var name=eN[i];
eO.push(X,eR[name],cy,bD,eQ[name],cy,cB,eP[name],S);
}return new Function(eO.join(cC));
},refresh:function(eo){{};
eo.$$refreshInheritables();
},attachRefreshInheritables:function(ed){ed.prototype.$$refreshInheritables=function(){qx.core.Property.__ks(ed);
return this.$$refreshInheritables();
};
},attachMethods:function(dm,name,dn){dn.group?this.__kv(dm,dn,name):this.__kw(dm,dn,name);
},__kv:function(du,dv,name){var dC=qx.Bootstrap.firstUp(name);
var dB=du.prototype;
var dD=dv.themeable===true;
{};
var dE=[];
var dy=[];

if(dD){var dw=[];
var dA=[];
}var dz=bi;
dE.push(dz);

if(dD){dw.push(dz);
}
if(dv.mode==cj){var dx=cK;
dE.push(dx);

if(dD){dw.push(dx);
}}
for(var i=0,a=dv.group,l=a.length;i<l;i++){{};
dE.push(cB,this.$$method.set[a[i]],bV,i,bS);
dy.push(cB,this.$$method.reset[a[i]],cw);

if(dD){{};
dw.push(cB,this.$$method.setThemed[a[i]],bV,i,bS);
dA.push(cB,this.$$method.resetThemed[a[i]],cw);
}}this.$$method.set[name]=cr+dC;
dB[this.$$method.set[name]]=new Function(dE.join(cC));
this.$$method.reset[name]=bp+dC;
dB[this.$$method.reset[name]]=new Function(dy.join(cC));

if(dD){this.$$method.setThemed[name]=cq+dC;
dB[this.$$method.setThemed[name]]=new Function(dw.join(cC));
this.$$method.resetThemed[name]=bu+dC;
dB[this.$$method.resetThemed[name]]=new Function(dA.join(cC));
}},__kw:function(dd,de,name){var dg=qx.Bootstrap.firstUp(name);
var di=dd.prototype;
{};
{};
if(de.dereference===undefined&&typeof de.check===bs){de.dereference=this.__kx(de.check);
}var dh=this.$$method;
var df=this.$$store;
df.runtime[name]=bb+name;
df.user[name]=F+name;
df.theme[name]=bJ+name;
df.init[name]=bM+name;
df.inherit[name]=cP+name;
df.useinit[name]=Y+name;
dh.get[name]=bT+dg;
di[dh.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,dd,name,bT);
};
dh.set[name]=cr+dg;
di[dh.set[name]]=function(ee){return qx.core.Property.executeOptimizedSetter(this,dd,name,cr,arguments);
};
dh.reset[name]=bp+dg;
di[dh.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dd,name,bp);
};

if(de.inheritable||de.apply||de.event||de.deferredInit){dh.init[name]=co+dg;
di[dh.init[name]]=function(eV){return qx.core.Property.executeOptimizedSetter(this,dd,name,co,arguments);
};
}
if(de.inheritable){dh.refresh[name]=cD+dg;
di[dh.refresh[name]]=function(db){return qx.core.Property.executeOptimizedSetter(this,dd,name,cD,arguments);
};
}dh.setRuntime[name]=cp+dg;
di[dh.setRuntime[name]]=function(ec){return qx.core.Property.executeOptimizedSetter(this,dd,name,cp,arguments);
};
dh.resetRuntime[name]=bo+dg;
di[dh.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dd,name,bo);
};

if(de.themeable){dh.setThemed[name]=cq+dg;
di[dh.setThemed[name]]=function(dF){return qx.core.Property.executeOptimizedSetter(this,dd,name,cq,arguments);
};
dh.resetThemed[name]=bu+dg;
di[dh.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dd,name,bu);
};
}
if(de.check===z){di[cO+dg]=new Function(bU+dh.set[name]+cc+dh.get[name]+bm);
di[cH+dg]=new Function(bU+dh.get[name]+bh);
}},__kx:function(eC){return !!this.__kr[eC];
},__ky:function(fb){return this.__kr[fb]||qx.Bootstrap.classIsDefined(fb)||(qx.Interface&&qx.Interface.isDefined(fb));
},__kz:{0:b,1:T,2:da,3:bf,4:cf,5:L},error:function(eG,eH,eI,eJ,eK){var eL=eG.constructor.classname;
var eM=n+eI+I+eL+cW+this.$$method[eJ][eI]+cJ+eK+P;
throw new Error(eM+(this.__kz[eH]||"Unknown reason: "+eH));
},__kA:function(ei,ej,name,ek,el,em){var en=this.$$method[ek][name];
{ej[en]=new Function(ch,el.join(cC));
};
{};
qx.Bootstrap.setDisplayName(ej[en],ei.classname+A,en);
if(em===undefined){return ei[en]();
}else{return ei[en](em[0]);
}},executeOptimizedGetter:function(dL,dM,name,dN){var dP=dM.$$properties[name];
var dR=dM.prototype;
var dO=[];
var dQ=this.$$store;
dO.push(cn,dQ.runtime[name],bw);
dO.push(bq,dQ.runtime[name],cv);

if(dP.inheritable){dO.push(bt,dQ.inherit[name],bw);
dO.push(bq,dQ.inherit[name],cv);
dO.push(cx);
}dO.push(cn,dQ.user[name],bw);
dO.push(bq,dQ.user[name],cv);

if(dP.themeable){dO.push(bt,dQ.theme[name],bw);
dO.push(bq,dQ.theme[name],cv);
}
if(dP.deferredInit&&dP.init===undefined){dO.push(bt,dQ.init[name],bw);
dO.push(bq,dQ.init[name],cv);
}dO.push(cx);

if(dP.init!==undefined){if(dP.inheritable){dO.push(j,dQ.init[name],cv);

if(dP.nullable){dO.push(s);
}else if(dP.init!==undefined){dO.push(bq,dQ.init[name],cv);
}else{dO.push(bd,name,cb,dM.classname,ca);
}dO.push(h);
}else{dO.push(bq,dQ.init[name],cv);
}}else if(dP.inheritable||dP.nullable){dO.push(bA);
}else{dO.push(cd,name,cb,dM.classname,ca);
}return this.__kA(dL,dR,name,dN,dO);
},executeOptimizedSetter:function(ep,eq,name,er,es){var ex=eq.$$properties[name];
var ew=eq.prototype;
var eu=[];
var et=er===cr||er===cq||er===cp||(er===co&&ex.init===undefined);
var ev=ex.apply||ex.event||ex.inheritable;
var ey=this.__kB(er,name);
this.__kC(eu,ex,name,er,et);

if(et){this.__kD(eu,eq,ex,name);
}
if(ev){this.__kE(eu,et,ey,er);
}
if(ex.inheritable){eu.push(o);
}{};

if(!ev){this.__kG(eu,name,er,et);
}else{this.__kH(eu,ex,name,er,et);
}
if(ex.inheritable){this.__kI(eu,ex,name,er);
}else if(ev){this.__kJ(eu,ex,name,er);
}
if(ev){this.__kK(eu,ex,name);
if(ex.inheritable&&ew._getChildren){this.__kL(eu,name);
}}if(et){eu.push(G);
}return this.__kA(ep,ew,name,er,eu,es);
},__kB:function(ea,name){if(ea===cp||ea===bo){var eb=this.$$store.runtime[name];
}else if(ea===cq||ea===bu){eb=this.$$store.theme[name];
}else if(ea===co){eb=this.$$store.init[name];
}else{eb=this.$$store.user[name];
}return eb;
},__kC:function(eW,eX,name,eY,fa){{if(!eX.nullable||eX.check||eX.inheritable){eW.push(cI);
}if(eY===cr){eW.push(Q,name,t,eY,U);
}};
},__kD:function(ef,eg,eh,name){if(eh.transform){ef.push(q,eh.transform,bW);
}if(eh.validate){if(typeof eh.validate===bs){ef.push(cs,eh.validate,bW);
}else if(eh.validate instanceof Function){ef.push(eg.classname,bj,name);
ef.push(cS);
}}},__kE:function(dp,dq,dr,ds){var dt=(ds===bp||ds===bu||ds===bo);

if(dq){dp.push(cn,dr,f);
}else if(dt){dp.push(cn,dr,v);
}},__kF:undefined,__kG:function(eS,name,eT,eU){if(eT===cp){eS.push(cs,this.$$store.runtime[name],ct);
}else if(eT===bo){eS.push(cn,this.$$store.runtime[name],bw);
eS.push(cm,this.$$store.runtime[name],cv);
}else if(eT===cr){eS.push(cs,this.$$store.user[name],ct);
}else if(eT===bp){eS.push(cn,this.$$store.user[name],bw);
eS.push(cm,this.$$store.user[name],cv);
}else if(eT===cq){eS.push(cs,this.$$store.theme[name],ct);
}else if(eT===bu){eS.push(cn,this.$$store.theme[name],bw);
eS.push(cm,this.$$store.theme[name],cv);
}else if(eT===co&&eU){eS.push(cs,this.$$store.init[name],ct);
}},__kH:function(dV,dW,name,dX,dY){if(dW.inheritable){dV.push(R,this.$$store.inherit[name],cv);
}else{dV.push(bF);
}dV.push(cn,this.$$store.runtime[name],bn);

if(dX===cp){dV.push(cu,this.$$store.runtime[name],ct);
}else if(dX===bo){dV.push(cm,this.$$store.runtime[name],cv);
dV.push(cn,this.$$store.user[name],bw);
dV.push(cu,this.$$store.user[name],cv);
dV.push(bt,this.$$store.theme[name],bw);
dV.push(cu,this.$$store.theme[name],cv);
dV.push(bt,this.$$store.init[name],bn);
dV.push(cu,this.$$store.init[name],cv);
dV.push(cs,this.$$store.useinit[name],cA);
dV.push(bv);
}else{dV.push(cF,this.$$store.runtime[name],cv);
if(dX===cr){dV.push(cs,this.$$store.user[name],ct);
}else if(dX===bp){dV.push(cm,this.$$store.user[name],cv);
}else if(dX===cq){dV.push(cs,this.$$store.theme[name],ct);
}else if(dX===bu){dV.push(cm,this.$$store.theme[name],cv);
}else if(dX===co&&dY){dV.push(cs,this.$$store.init[name],ct);
}}dV.push(bv);
dV.push(bt,this.$$store.user[name],bn);

if(dX===cr){if(!dW.inheritable){dV.push(cz,this.$$store.user[name],cv);
}dV.push(cu,this.$$store.user[name],ct);
}else if(dX===bp){if(!dW.inheritable){dV.push(cz,this.$$store.user[name],cv);
}dV.push(cm,this.$$store.user[name],cv);
dV.push(cn,this.$$store.runtime[name],bw);
dV.push(cu,this.$$store.runtime[name],cv);
dV.push(cn,this.$$store.theme[name],bw);
dV.push(cu,this.$$store.theme[name],cv);
dV.push(bt,this.$$store.init[name],bn);
dV.push(cu,this.$$store.init[name],cv);
dV.push(cs,this.$$store.useinit[name],cA);
dV.push(bv);
}else{if(dX===cp){dV.push(cu,this.$$store.runtime[name],ct);
}else if(dW.inheritable){dV.push(cu,this.$$store.user[name],cv);
}else{dV.push(cF,this.$$store.user[name],cv);
}if(dX===cq){dV.push(cs,this.$$store.theme[name],ct);
}else if(dX===bu){dV.push(cm,this.$$store.theme[name],cv);
}else if(dX===co&&dY){dV.push(cs,this.$$store.init[name],ct);
}}dV.push(bv);
if(dW.themeable){dV.push(bt,this.$$store.theme[name],bn);

if(!dW.inheritable){dV.push(cz,this.$$store.theme[name],cv);
}
if(dX===cp){dV.push(cu,this.$$store.runtime[name],ct);
}else if(dX===cr){dV.push(cu,this.$$store.user[name],ct);
}else if(dX===cq){dV.push(cu,this.$$store.theme[name],ct);
}else if(dX===bu){dV.push(cm,this.$$store.theme[name],cv);
dV.push(cn,this.$$store.init[name],bn);
dV.push(cu,this.$$store.init[name],cv);
dV.push(cs,this.$$store.useinit[name],cA);
dV.push(bv);
}else if(dX===co){if(dY){dV.push(cs,this.$$store.init[name],ct);
}dV.push(cu,this.$$store.theme[name],cv);
}else if(dX===cD){dV.push(cu,this.$$store.theme[name],cv);
}dV.push(bv);
}dV.push(bt,this.$$store.useinit[name],E);

if(!dW.inheritable){dV.push(cz,this.$$store.init[name],cv);
}
if(dX===co){if(dY){dV.push(cu,this.$$store.init[name],ct);
}else{dV.push(cu,this.$$store.init[name],cv);
}}else if(dX===cr||dX===cp||dX===cq||dX===cD){dV.push(cm,this.$$store.useinit[name],cv);

if(dX===cp){dV.push(cu,this.$$store.runtime[name],ct);
}else if(dX===cr){dV.push(cu,this.$$store.user[name],ct);
}else if(dX===cq){dV.push(cu,this.$$store.theme[name],ct);
}else if(dX===cD){dV.push(cu,this.$$store.init[name],cv);
}}dV.push(bv);
if(dX===cr||dX===cp||dX===cq||dX===co){dV.push(cQ);

if(dX===cp){dV.push(cu,this.$$store.runtime[name],ct);
}else if(dX===cr){dV.push(cu,this.$$store.user[name],ct);
}else if(dX===cq){dV.push(cu,this.$$store.theme[name],ct);
}else if(dX===co){if(dY){dV.push(cu,this.$$store.init[name],ct);
}else{dV.push(cu,this.$$store.init[name],cv);
}dV.push(cs,this.$$store.useinit[name],cA);
}dV.push(bv);
}},__kI:function(ez,eA,name,eB){ez.push(C);

if(eB===cD){ez.push(V);
}else{ez.push(bE,this.$$store.inherit[name],cv);
}ez.push(bP);
ez.push(cs,this.$$store.init[name],bG);
ez.push(cs,this.$$store.init[name],bR);
ez.push(cu,this.$$store.init[name],cv);
ez.push(cs,this.$$store.useinit[name],cA);
ez.push(bO);
ez.push(cm,this.$$store.useinit[name],bc);
ez.push(bv);
ez.push(bY);
ez.push(N);
ez.push(ba,this.$$store.inherit[name],cv);
ez.push(bv);
ez.push(O);
ez.push(cm,this.$$store.inherit[name],cv);
ez.push(r,this.$$store.inherit[name],cU);
ez.push(bN);
if(eA.init!==undefined&&eB!==co){ez.push(cE,this.$$store.init[name],cy);
}else{ez.push(bX);
}ez.push(cL);
},__kJ:function(dG,dH,name,dI){if(dI!==cr&&dI!==cp&&dI!==cq){dG.push(bK);
}dG.push(bY);
if(dH.init!==undefined&&dI!==co){dG.push(cE,this.$$store.init[name],cy);
}else{dG.push(bX);
}},__kK:function(dJ,dK,name){if(dK.apply){dJ.push(cs,dK.apply,H,name,by);
}if(dK.event){dJ.push(bl,be,dK.event,x,bQ,dK.event,W,y);
}},__kL:function(dc,name){dc.push(cT);
dc.push(cN,this.$$method.refresh[name],bg,this.$$method.refresh[name],cY);
dc.push(bv);
}},defer:function(eD){var eF=navigator.userAgent.indexOf(M)!=-1;
var eE=navigator.userAgent.indexOf(cg)!=-1;
if(eF||eE){eD.__kx=eD.__ky;
}}});
})();
(function(){var bT="[Class ",bS="]",bR="$$init_",bQ="toString",bP="constructor",bO="singleton",bN=".prototype",bM="extend",bL="Class",bK="destruct",bH="qx.Class",bJ=".",bI="static",bG="qx.event.type.Data";
qx.Bootstrap.define(bH,{statics:{define:function(name,b){if(!b){var b={};
}if(b.include&&!(b.include instanceof Array)){b.include=[b.include];
}if(b.implement&&!(b.implement instanceof Array)){b.implement=[b.implement];
}var c=false;

if(!b.hasOwnProperty(bM)&&!b.type){b.type=bI;
c=true;
}{};
var d=this.__bz(name,b.type,b.extend,b.statics,b.construct,b.destruct,b.include);
if(b.extend){if(b.properties){this.__bB(d,b.properties,true);
}if(b.members){this.__bD(d,b.members,true,true,false);
}if(b.events){this.__bA(d,b.events,true);
}if(b.include){for(var i=0,l=b.include.length;i<l;i++){this.__bH(d,b.include[i],false);
}}}if(b.settings){for(var e in b.settings){qx.core.Setting.define(e,b.settings[e]);
}}if(b.variants){for(var e in b.variants){qx.core.Variant.define(e,b.variants[e].allowedValues,b.variants[e].defaultValue);
}}if(b.implement){for(var i=0,l=b.implement.length;i<l;i++){this.__bF(d,b.implement[i]);
}}{};
if(b.defer){b.defer.self=d;
b.defer(d,d.prototype,{add:function(name,D){var E={};
E[name]=D;
qx.Class.__bB(d,E,true);
}});
}return d;
},undefine:function(name){delete this.$$registry[name];
var bw=name.split(bJ);
var by=[window];

for(var i=0;i<bw.length;i++){by.push(by[i][bw[i]]);
}for(var i=by.length-1;i>=1;i--){var bx=by[i];
var parent=by[i-1];

if(qx.Bootstrap.isFunction(bx)||qx.Bootstrap.objectGetLength(bx)===0){delete parent[bw[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(ci,cj){{};
qx.Class.__bH(ci,cj,false);
},patch:function(ca,cb){{};
qx.Class.__bH(ca,cb,true);
},isSubClassOf:function(k,m){if(!k){return false;
}
if(k==m){return true;
}
if(k.prototype instanceof m){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(F){var G=[];

while(F){if(F.$$properties){G.push.apply(G,qx.Bootstrap.getKeys(F.$$properties));
}F=F.superclass;
}return G;
},getByProperty:function(bm,name){while(bm){if(bm.$$properties&&bm.$$properties[name]){return bm;
}bm=bm.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(n,o){return n.$$includes&&n.$$includes.indexOf(o)!==-1;
},getByMixin:function(cf,cg){var ch,i,l;

while(cf){if(cf.$$includes){ch=cf.$$flatIncludes;

for(i=0,l=ch.length;i<l;i++){if(ch[i]===cg){return cf;
}}}cf=cf.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bz,bA){return !!this.getByMixin(bz,bA);
},hasOwnInterface:function(t,u){return t.$$implements&&t.$$implements.indexOf(u)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(p){var q=[];

while(p){if(p.$$implements){q.push.apply(q,p.$$flatImplements);
}p=p.superclass;
}return q;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(v,w){var x=v.constructor;

if(this.hasInterface(x,w)){return true;
}
try{qx.Interface.assertObject(v,w);
return true;
}catch(C){}
try{qx.Interface.assert(x,w,false);
return true;
}catch(bB){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bT+this.classname+bS;
},$$registry:qx.Bootstrap.$$registry,__bv:null,__bw:null,__bx:function(){},__by:function(){},__bz:function(name,H,I,J,K,L,M){var P;

if(!I&&true){P=J||{};
qx.Bootstrap.setDisplayNames(P,name);
}else{var P={};

if(I){if(!K){K=this.__bI();
}
if(this.__bK(I,M)){P=this.__bL(K,name,H);
}else{P=K;
}if(H===bO){P.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(K,name,bP);
}if(J){qx.Bootstrap.setDisplayNames(J,name);
var Q;

for(var i=0,a=qx.Bootstrap.getKeys(J),l=a.length;i<l;i++){Q=a[i];
var N=J[Q];
{P[Q]=N;
};
}}}var O=qx.Bootstrap.createNamespace(name,P);
P.name=P.classname=name;
P.basename=O;
P.$$type=bL;

if(H){P.$$classtype=H;
}if(!P.hasOwnProperty(bQ)){P.toString=this.genericToString;
}
if(I){qx.Bootstrap.extendClass(P,K,I,name,O);
if(L){{};
P.$$destructor=L;
qx.Bootstrap.setDisplayName(L,name,bK);
}}this.$$registry[name]=P;
return P;
},__bA:function(f,g,h){var j,j;
{};

if(f.$$events){for(var j in g){f.$$events[j]=g[j];
}}else{f.$$events=g;
}},__bB:function(br,bs,bt){var bu;

if(bt===undefined){bt=false;
}var bv=br.prototype;

for(var name in bs){bu=bs[name];
{};
bu.name=name;
if(!bu.refine){if(br.$$properties===undefined){br.$$properties={};
}br.$$properties[name]=bu;
}if(bu.init!==undefined){br.prototype[bR+name]=bu.init;
}if(bu.event!==undefined){var event={};
event[bu.event]=bG;
this.__bA(br,event,bt);
}if(bu.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bv.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(br);
}}
if(!bu.refine){qx.core.Property.attachMethods(br,name,bu);
}}},__bC:null,__bD:function(R,S,T,U,V){var W=R.prototype;
var Y,X;
qx.Bootstrap.setDisplayNames(S,R.classname+bN);

for(var i=0,a=qx.Bootstrap.getKeys(S),l=a.length;i<l;i++){Y=a[i];
X=S[Y];
{};
if(U!==false&&X instanceof Function&&X.$$type==null){if(V==true){X=this.__bE(X,W[Y]);
}else{if(W[Y]){X.base=W[Y];
}X.self=R;
}{};
}W[Y]=X;
}},__bE:function(bU,bV){if(bV){return function(){var s=bU.base;
bU.base=bV;
var r=bU.apply(this,arguments);
bU.base=s;
return r;
};
}else{return bU;
}},__bF:function(bC,bD){{};
var bE=qx.Interface.flatten([bD]);

if(bC.$$implements){bC.$$implements.push(bD);
bC.$$flatImplements.push.apply(bC.$$flatImplements,bE);
}else{bC.$$implements=[bD];
bC.$$flatImplements=bE;
}},__bG:function(ba){var name=ba.classname;
var bb=this.__bL(ba,name,ba.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(ba),l=a.length;i<l;i++){bc=a[i];
bb[bc]=ba[bc];
}bb.prototype=ba.prototype;
var be=ba.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(be),l=a.length;i<l;i++){bc=a[i];
var bf=be[bc];
if(bf&&bf.self==ba){bf.self=bb;
}}for(var bc in this.$$registry){var bd=this.$$registry[bc];

if(!bd){continue;
}
if(bd.base==ba){bd.base=bb;
}
if(bd.superclass==ba){bd.superclass=bb;
}
if(bd.$$original){if(bd.$$original.base==ba){bd.$$original.base=bb;
}
if(bd.$$original.superclass==ba){bd.$$original.superclass=bb;
}}}qx.Bootstrap.createNamespace(name,bb);
this.$$registry[name]=bb;
return bb;
},__bH:function(bg,bh,bi){{};

if(this.hasMixin(bg,bh)){return;
}var bl=bg.$$original;

if(bh.$$constructor&&!bl){bg=this.__bG(bg);
}var bk=qx.Mixin.flatten([bh]);
var bj;

for(var i=0,l=bk.length;i<l;i++){bj=bk[i];
if(bj.$$events){this.__bA(bg,bj.$$events,bi);
}if(bj.$$properties){this.__bB(bg,bj.$$properties,bi);
}if(bj.$$members){this.__bD(bg,bj.$$members,bi,bi,bi);
}}if(bg.$$includes){bg.$$includes.push(bh);
bg.$$flatIncludes.push.apply(bg.$$flatIncludes,bk);
}else{bg.$$includes=[bh];
bg.$$flatIncludes=bk;
}},__bI:function(){function bF(){bF.base.apply(this,arguments);
}return bF;
},__bJ:function(){return function(){};
},__bK:function(y,z){{};
if(y&&y.$$includes){var A=y.$$flatIncludes;

for(var i=0,l=A.length;i<l;i++){if(A[i].$$constructor){return true;
}}}if(z){var B=qx.Mixin.flatten(z);

for(var i=0,l=B.length;i<l;i++){if(B[i].$$constructor){return true;
}}}return false;
},__bL:function(bn,name,bo){var bp;
var bq=function(){var bY=bq;
{};
var bX=bY.$$original.apply(this,arguments);
if(bY.$$includes){var bW=bY.$$flatIncludes;

for(var i=0,l=bW.length;i<l;i++){if(bW[i].$$constructor){bW[i].$$constructor.apply(this,arguments);
}}}{};
return bX;
};
{};
bq.$$original=bn;
bn.wrapper=bq;
return bq;
}},defer:function(){var cc,cd,ce;
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
qx.Bootstrap.define(h,{statics:{__jI:{},__jJ:{},compilerIsSet:function(){return true;
},define:function(H,I,J){{};

if(!this.__jI[H]){this.__jI[H]={};
}else{}this.__jI[H].allowedValues=I;
this.__jI[H].defaultValue=J;
},get:function(K){var L=this.__jI[K];
{};

if(L.value!==undefined){return L.value;
}return L.defaultValue;
},__jK:function(){if(window.qxvariants){for(var z in qxvariants){{};

if(!this.__jI[z]){this.__jI[z]={};
}this.__jI[z].value=qxvariants[z];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(P){}this.__jL(this.__jI);
}},__jL:function(){if(qx.core.Setting.get(p)!=true){return;
}var M=document.location.search.slice(1).split(s);

for(var i=0;i<M.length;i++){var N=M[i].split(j);

if(N.length!=3||N[0]!=f){continue;
}var O=N[1];

if(!this.__jI[O]){this.__jI[O]={};
}this.__jI[O].value=decodeURIComponent(N[2]);
}},select:function(a,b){{};

for(var c in b){if(this.isSet(a,c)){return b[c];
}}
if(b[u]!==undefined){return b[u];
}{};
},isSet:function(C,D){var E=C+q+D;

if(this.__jJ[E]!==undefined){return this.__jJ[E];
}var G=false;
if(D.indexOf(w)<0){G=this.get(C)===D;
}else{var F=D.split(w);

for(var i=0,l=F.length;i<l;i++){if(this.get(C)===F[i]){G=true;
break;
}}}this.__jJ[E]=G;
return G;
},__jM:function(v){return typeof v===t&&v!==null&&v instanceof Array;
},__jN:function(v){return typeof v===t&&v!==null&&!(v instanceof Array);
},__jO:function(A,B){for(var i=0,l=A.length;i<l;i++){if(A[i]==B){return true;
}}return false;
}},defer:function(Q){Q.define(g,[d,m,e,k],qx.bom.client.Engine.NAME);
Q.define(o,[y,x],y);
Q.define(r,[y,x],x);
Q.define(n,[y,x],y);
Q.__jK();
}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(s,t,u){s.attachEvent(h+t,u);
},"default":function(D,E,F){D.addEventListener(E,F,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(z,A,B){try{z.detachEvent(h+A,B);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(o,p,q){o.removeEventListener(p,q,false);
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
}catch(C){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(r){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(j,k){if(document.createEventObject){var l=document.createEventObject();
return j.fireEvent(h+k,l);
}else{var l=document.createEvent(a);
l.initEvent(k,true,true);
return !j.dispatchEvent(l);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(m,n){return m.hasOwnProperty(h+n);
},"default":function(v,w){var x=h+w;
var y=(x in v);

if(!y){y=typeof v[x]==g;

if(!y&&v.setAttribute){v.setAttribute(x,c);
y=typeof v[x]==g;
v.removeAttribute(x);
}}return y;
}})}});
})();
(function(){var G="|bubble",F="|capture",E="|",D="",C="_",B="unload",A="__eG",z="UNKNOWN_",y="c",x="DOM_",u="WIN_",w="capture",v="qx.event.Manager",t="__eF",s="QX_";
qx.Class.define(v,{extend:Object,construct:function(bT,bU){this.__eB=bT;
this.__eC=qx.core.ObjectRegistry.toHashCode(bT);
this.__eD=bU;
if(bT.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(bT,B,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(bT,B,arguments.callee);
self.dispose();
}));
}this.__eE={};
this.__eF={};
this.__eG={};
this.__eH={};
},statics:{__eI:0,getNextUniqueId:function(){return (this.__eI++)+D;
}},members:{__eD:null,__eE:null,__eG:null,__eJ:null,__eF:null,__eH:null,__eB:null,__eC:null,getWindow:function(){return this.__eB;
},getWindowId:function(){return this.__eC;
},getHandler:function(cn){var co=this.__eF[cn.classname];

if(co){return co;
}return this.__eF[cn.classname]=new cn(this);
},getDispatcher:function(cl){var cm=this.__eG[cl.classname];

if(cm){return cm;
}return this.__eG[cl.classname]=new cl(this,this.__eD);
},getListeners:function(O,P,Q){var R=O.$$hash||qx.core.ObjectRegistry.toHashCode(O);
var T=this.__eE[R];

if(!T){return null;
}var U=P+(Q?F:G);
var S=T[U];
return S?S.concat():null;
},serializeListeners:function(bh){var bo=bh.$$hash||qx.core.ObjectRegistry.toHashCode(bh);
var bq=this.__eE[bo];
var bm=[];

if(bq){var bk,bp,bi,bl,bn;

for(var bj in bq){bk=bj.indexOf(E);
bp=bj.substring(0,bk);
bi=bj.charAt(bk+1)==y;
bl=bq[bj];

for(var i=0,l=bl.length;i<l;i++){bn=bl[i];
bm.push({self:bn.context,handler:bn.handler,type:bp,capture:bi});
}}}return bm;
},toggleAttachedEvents:function(a,b){var g=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var j=this.__eE[g];

if(j){var d,h,c,e;

for(var f in j){d=f.indexOf(E);
h=f.substring(0,d);
c=f.charCodeAt(d+1)===99;
e=j[f];

if(b){this.__eK(a,h,c);
}else{this.__eL(a,h,c);
}}}},hasListener:function(k,m,n){{};
var o=k.$$hash||qx.core.ObjectRegistry.toHashCode(k);
var q=this.__eE[o];

if(!q){return false;
}var r=m+(n?F:G);
var p=q[r];
return p&&p.length>0;
},importListeners:function(br,bs){{};
var by=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);
var bz=this.__eE[by]={};
var bv=qx.event.Manager;

for(var bt in bs){var bw=bs[bt];
var bx=bw.type+(bw.capture?F:G);
var bu=bz[bx];

if(!bu){bu=bz[bx]=[];
this.__eK(br,bw.type,bw.capture);
}bu.push({handler:bw.listener,context:bw.self,unique:bw.unique||(bv.__eI++)+D});
}},addListener:function(ca,cb,cc,self,cd){var ch;
{};
var ci=ca.$$hash||qx.core.ObjectRegistry.toHashCode(ca);
var ck=this.__eE[ci];

if(!ck){ck=this.__eE[ci]={};
}var cg=cb+(cd?F:G);
var cf=ck[cg];

if(!cf){cf=ck[cg]=[];
}if(cf.length===0){this.__eK(ca,cb,cd);
}var cj=(qx.event.Manager.__eI++)+D;
var ce={handler:cc,context:self,unique:cj};
cf.push(ce);
return cg+E+cj;
},findHandler:function(cp,cq){var cA=false,ct=false,cB=false;
var cz;

if(cp.nodeType===1){cA=true;
cz=x+cp.tagName.toLowerCase()+C+cq;
}else if(cp==this.__eB){ct=true;
cz=u+cq;
}else if(cp.classname){cB=true;
cz=s+cp.classname+C+cq;
}else{cz=z+cp+C+cq;
}var cv=this.__eH;

if(cv[cz]){return cv[cz];
}var cy=this.__eD.getHandlers();
var cu=qx.event.IEventHandler;
var cw,cx,cs,cr;

for(var i=0,l=cy.length;i<l;i++){cw=cy[i];
cs=cw.SUPPORTED_TYPES;

if(cs&&!cs[cq]){continue;
}cr=cw.TARGET_CHECK;

if(cr){if(!cA&&cr===cu.TARGET_DOMNODE){continue;
}else if(!ct&&cr===cu.TARGET_WINDOW){continue;
}else if(!cB&&cr===cu.TARGET_OBJECT){continue;
}}cx=this.getHandler(cy[i]);

if(cw.IGNORE_CAN_HANDLE||cx.canHandleEvent(cp,cq)){cv[cz]=cx;
return cx;
}}return null;
},__eK:function(cC,cD,cE){var cF=this.findHandler(cC,cD);

if(cF){cF.registerEvent(cC,cD,cE);
return;
}{};
},removeListener:function(V,W,X,self,Y){var bd;
{};
var be=V.$$hash||qx.core.ObjectRegistry.toHashCode(V);
var bf=this.__eE[be];

if(!bf){return false;
}var ba=W+(Y?F:G);
var bb=bf[ba];

if(!bb){return false;
}var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];

if(bc.handler===X&&bc.context===self){qx.lang.Array.removeAt(bb,i);

if(bb.length==0){this.__eL(V,W,Y);
}return true;
}}return false;
},removeListenerById:function(bH,bI){var bO;
{};
var bM=bI.split(E);
var bR=bM[0];
var bJ=bM[1].charCodeAt(0)==99;
var bQ=bM[2];
var bP=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);
var bS=this.__eE[bP];

if(!bS){return false;
}var bN=bR+(bJ?F:G);
var bL=bS[bN];

if(!bL){return false;
}var bK;

for(var i=0,l=bL.length;i<l;i++){bK=bL[i];

if(bK.unique===bQ){qx.lang.Array.removeAt(bL,i);

if(bL.length==0){this.__eL(bH,bR,bJ);
}return true;
}}return false;
},removeAllListeners:function(bA){var bE=bA.$$hash||qx.core.ObjectRegistry.toHashCode(bA);
var bG=this.__eE[bE];

if(!bG){return false;
}var bC,bF,bB;

for(var bD in bG){if(bG[bD].length>0){bC=bD.split(E);
bF=bC[0];
bB=bC[1]===w;
this.__eL(bA,bF,bB);
}}delete this.__eE[bE];
return true;
},deleteAllListeners:function(bg){delete this.__eE[bg];
},__eL:function(bV,bW,bX){var bY=this.findHandler(bV,bW);

if(bY){bY.unregisterEvent(bV,bW,bX);
return;
}{};
},dispatchEvent:function(H,event){var M;
{};
var N=event.getType();

if(!event.getBubbles()&&!this.hasListener(H,N)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(H);
}var L=this.__eD.getDispatchers();
var K;
var J=false;

for(var i=0,l=L.length;i<l;i++){K=this.getDispatcher(L[i]);
if(K.canDispatchEvent(H,event,N)){K.dispatchEvent(H,event,N);
J=true;
break;
}}
if(!J){{};
return true;
}var I=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !I;
},dispose:function(){this.__eD.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,t);
qx.util.DisposeUtil.disposeMap(this,A);
this.__eE=this.__eB=this.__eJ=null;
this.__eD=this.__eH=null;
}}});
})();
(function(){var e="qx.dom.Node",d="qx.client",c="";
qx.Class.define(e,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(n){return n.nodeType===
this.DOCUMENT?n:
n.ownerDocument||n.document;
},getWindow:qx.core.Variant.select(d,{"mshtml":function(b){if(b.nodeType==null){return b;
}if(b.nodeType!==this.DOCUMENT){b=b.ownerDocument;
}return b.parentWindow;
},"default":function(m){if(m.nodeType==null){return m;
}if(m.nodeType!==this.DOCUMENT){m=m.ownerDocument;
}return m.defaultView;
}}),getDocumentElement:function(q){return this.getDocument(q).documentElement;
},getBodyElement:function(p){return this.getDocument(p).body;
},isNode:function(f){return !!(f&&f.nodeType!=null);
},isElement:function(o){return !!(o&&o.nodeType===this.ELEMENT);
},isDocument:function(j){return !!(j&&j.nodeType===this.DOCUMENT);
},isText:function(r){return !!(r&&r.nodeType===this.TEXT);
},isWindow:function(t){return !!(t&&t.history&&t.location&&t.document);
},isNodeName:function(g,h){if(!h||!g||!g.nodeName){return false;
}return h.toLowerCase()==qx.dom.Node.getName(g);
},getName:function(s){if(!s||!s.nodeName){return null;
}return s.nodeName.toLowerCase();
},getText:function(k){if(!k||!k.nodeType){return null;
}
switch(k.nodeType){case 1:var i,a=[],l=k.childNodes,length=l.length;

for(i=0;i<length;i++){a[i]=this.getText(l[i]);
}return a.join(c);
case 2:return k.nodeValue;
break;
case 3:return k.nodeValue;
break;
}return null;
}}});
})();
(function(){var bg="mshtml",bf="qx.client",be="[object Array]",bd="qx.lang.Array",bc="qx",bb="number",ba="string";
qx.Class.define(bd,{statics:{toArray:function(bi,bj){return this.cast(bi,Array,bj);
},cast:function(D,E,F){if(D.constructor===E){return D;
}
if(qx.Class.hasInterface(D,qx.data.IListData)){var D=D.toArray();
}var G=new E;
if(qx.core.Variant.isSet(bf,bg)){if(D.item){for(var i=F||0,l=D.length;i<l;i++){G.push(D[i]);
}return G;
}}if(Object.prototype.toString.call(D)===be&&F==null){G.push.apply(G,D);
}else{G.push.apply(G,Array.prototype.slice.call(D,F||0));
}return G;
},fromArguments:function(bp,bq){return Array.prototype.slice.call(bp,bq||0);
},fromCollection:function(r){if(qx.core.Variant.isSet(bf,bg)){if(r.item){var s=[];

for(var i=0,l=r.length;i<l;i++){s[i]=r[i];
}return s;
}}return Array.prototype.slice.call(r,0);
},fromShortHand:function(w){var y=w.length;
var x=qx.lang.Array.clone(w);
switch(y){case 1:x[1]=x[2]=x[3]=x[0];
break;
case 2:x[2]=x[0];
case 3:x[3]=x[1];
}return x;
},clone:function(bh){return bh.concat();
},insertAt:function(K,L,i){K.splice(i,0,L);
return K;
},insertBefore:function(n,o,p){var i=n.indexOf(p);

if(i==-1){n.push(o);
}else{n.splice(i,0,o);
}return n;
},insertAfter:function(H,I,J){var i=H.indexOf(J);

if(i==-1||i==(H.length-1)){H.push(I);
}else{H.splice(i+1,0,I);
}return H;
},removeAt:function(m,i){return m.splice(i,1)[0];
},removeAll:function(q){q.length=0;
return this;
},append:function(bn,bo){{};
Array.prototype.push.apply(bn,bo);
return bn;
},exclude:function(c,d){{};

for(var i=0,f=d.length,e;i<f;i++){e=c.indexOf(d[i]);

if(e!=-1){c.splice(e,1);
}}return c;
},remove:function(a,b){var i=a.indexOf(b);

if(i!=-1){a.splice(i,1);
return b;
}},contains:function(g,h){return g.indexOf(h)!==-1;
},equals:function(A,B){var length=A.length;

if(length!==B.length){return false;
}
for(var i=0;i<length;i++){if(A[i]!==B[i]){return false;
}}return true;
},sum:function(j){var k=0;

for(var i=0,l=j.length;i<l;i++){k+=j[i];
}return k;
},max:function(t){{};
var i,v=t.length,u=t[0];

for(i=1;i<v;i++){if(t[i]>u){u=t[i];
}}return u===undefined?null:u;
},min:function(bk){{};
var i,bm=bk.length,bl=bk[0];

for(i=1;i<bm;i++){if(bk[i]<bl){bl=bk[i];
}}return bl===undefined?null:bl;
},unique:function(M){var W=[],O={},R={},T={};
var S,N=0;
var X=bc+qx.lang.Date.now();
var P=false,V=false,Y=false;
for(var i=0,U=M.length;i<U;i++){S=M[i];
if(S===null){if(!P){P=true;
W.push(S);
}}else if(S===undefined){}else if(S===false){if(!V){V=true;
W.push(S);
}}else if(S===true){if(!Y){Y=true;
W.push(S);
}}else if(typeof S===ba){if(!O[S]){O[S]=1;
W.push(S);
}}else if(typeof S===bb){if(!R[S]){R[S]=1;
W.push(S);
}}else{Q=S[X];

if(Q==null){Q=S[X]=N++;
}
if(!T[Q]){T[Q]=S;
W.push(S);
}}}for(var Q in T){try{delete T[Q][X];
}catch(z){try{T[Q][X]=null;
}catch(C){throw new Error("Cannot clean-up map entry doneObjects["+Q+"]["+X+"]");
}}}return W;
}}});
})();
(function(){var B="()",A=".",z=".prototype.",y='anonymous()',x="qx.lang.Function",w=".constructor()";
qx.Class.define(x,{statics:{getCaller:function(H){return H.caller?H.caller.callee:H.callee.caller;
},getName:function(a){if(a.displayName){return a.displayName;
}
if(a.$$original||a.wrapper||a.classname){return a.classname+w;
}
if(a.$$mixin){for(var c in a.$$mixin.$$members){if(a.$$mixin.$$members[c]==a){return a.$$mixin.name+z+c+B;
}}for(var c in a.$$mixin){if(a.$$mixin[c]==a){return a.$$mixin.name+A+c+B;
}}}
if(a.self){var d=a.self.constructor;

if(d){for(var c in d.prototype){if(d.prototype[c]==a){return d.classname+z+c+B;
}}for(var c in d){if(d[c]==a){return d.classname+A+c+B;
}}}}var b=a.toString().match(/function\s*(\w*)\s*\(.*/);

if(b&&b.length>=1&&b[1]){return b[1]+B;
}return y;
},globalEval:function(i){if(window.execScript){return window.execScript(i);
}else{return eval.call(window,i);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(g,h){{};
if(!h){return g;
}if(!(h.self||h.args||h.delay!=null||h.periodical!=null||h.attempt)){return g;
}return function(event){{};
var k=qx.lang.Array.fromArguments(arguments);
if(h.args){k=h.args.concat(k);
}
if(h.delay||h.periodical){var j=qx.event.GlobalError.observeMethod(function(){return g.apply(h.self||this,k);
});

if(h.delay){return window.setTimeout(j,h.delay);
}
if(h.periodical){return window.setInterval(j,h.periodical);
}}else if(h.attempt){var l=false;

try{l=g.apply(h.self||this,k);
}catch(v){}return l;
}else{return g.apply(h.self||this,k);
}};
},bind:function(e,self,f){return this.create(e,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(C,D){return this.create(C,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(p,self,q){if(arguments.length<3){return function(event){return p.call(self||this,event||window.event);
};
}else{var r=qx.lang.Array.fromArguments(arguments,2);
return function(event){var o=[event||window.event];
o.push.apply(o,r);
p.apply(self||this,o);
};
}},attempt:function(m,self,n){return this.create(m,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(s,t,self,u){return this.create(s,{delay:t,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(E,F,self,G){return this.create(E,{periodical:F,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__eq:{},getManager:function(q){if(q==null){{};
q=window;
}else if(q.nodeType){q=qx.dom.Node.getWindow(q);
}else if(!qx.dom.Node.isWindow(q)){q=window;
}var s=q.$$hash||qx.core.ObjectRegistry.toHashCode(q);
var r=this.__eq[s];

if(!r){r=new qx.event.Manager(q,this);
this.__eq[s]=r;
}return r;
},removeManager:function(P){var Q=P.getWindowId();
delete this.__eq[Q];
},addListener:function(z,A,B,self,C){return this.getManager(z).addListener(z,A,B,self,C);
},removeListener:function(g,h,i,self,j){return this.getManager(g).removeListener(g,h,i,self,j);
},removeListenerById:function(d,e){return this.getManager(d).removeListenerById(d,e);
},removeAllListeners:function(f){return this.getManager(f).removeAllListeners(f);
},deleteAllListeners:function(R){var S=R.$$hash;

if(S){this.getManager(R).deleteAllListeners(S);
}},hasListener:function(F,G,H){return this.getManager(F).hasListener(F,G,H);
},serializeListeners:function(l){return this.getManager(l).serializeListeners(l);
},createEvent:function(m,n,o){{};
if(n==null){n=qx.event.type.Event;
}var p=qx.event.Pool.getInstance().getObject(n);
o?p.init.apply(p,o):p.init();
if(m){p.setType(m);
}return p;
},dispatchEvent:function(k,event){return this.getManager(k).dispatchEvent(k,event);
},fireEvent:function(I,J,K,L){var M;
{};
var N=this.createEvent(J,K||null,L);
return this.getManager(I).dispatchEvent(I,N);
},fireNonBubblingEvent:function(t,u,v,w){{};
var x=this.getManager(t);

if(!x.hasListener(t,u,false)){return true;
}var y=this.createEvent(u,v||null,w);
return x.dispatchEvent(t,y);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__er:[],addHandler:function(O){{};
this.__er.push(O);
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
(function(){var h="$$hash",g="",f="qx.core.ObjectRegistry";
qx.Class.define(f,{statics:{inShutDown:false,__gY:{},__ha:0,__hb:[],register:function(j){var n=this.__gY;

if(!n){return;
}var m=j.$$hash;

if(m==null){var k=this.__hb;

if(k.length>0){m=k.pop();
}else{m=(this.__ha++)+g;
}j.$$hash=m;
}{};
n[m]=j;
},unregister:function(c){var d=c.$$hash;

if(d==null){return;
}var e=this.__gY;

if(e&&e[d]){delete e[d];
this.__hb.push(d);
}try{delete c.$$hash;
}catch(v){if(c.removeAttribute){c.removeAttribute(h);
}}},toHashCode:function(s){{};
var u=s.$$hash;

if(u!=null){return u;
}var t=this.__hb;

if(t.length>0){u=t.pop();
}else{u=(this.__ha++)+g;
}return s.$$hash=u;
},clearHashCode:function(o){{};
var p=o.$$hash;

if(p!=null){this.__hb.push(p);
try{delete o.$$hash;
}catch(r){if(o.removeAttribute){o.removeAttribute(h);
}}}},fromHashCode:function(q){return this.__gY[q]||null;
},shutdown:function(){this.inShutDown=true;
var x=this.__gY;
var z=[];

for(var y in x){z.push(y);
}z.sort(function(a,b){return parseInt(b)-parseInt(a);
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
}catch(U){var D=this.getStackTraceFromError(U);
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
},"opera":function(){var J;

try{J.bar();
}catch(S){var K=this.getStackTraceFromError(S);
qx.lang.Array.removeAt(K,0);
return K;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(p,{"opera":function(T){return [];
},"default":function(W){var bc=[];
var bb=qx.lang.Function.getCaller(W);
var X={};

while(bb){var Y=qx.lang.Function.getName(bb);
bc.push(Y);

try{bb=bb.caller;
}catch(v){break;
}
if(!bb){break;
}var ba=qx.core.ObjectRegistry.toHashCode(bb);

if(X[ba]){bc.push(n);
break;
}X[ba]=bb;
}return bc;
}}),getStackTraceFromError:qx.core.Variant.select(p,{"gecko":function(a){if(!a.stack){return [];
}var g=/@(.+):(\d+)$/gm;
var b;
var c=[];

while((b=g.exec(a.stack))!=null){var d=b[1];
var f=b[2];
var e=this.__jC(d);
c.push(e+q+f);
}return c;
},"webkit":function(V){if(V.sourceURL&&V.line){return [this.__jC(V.sourceURL)+q+V.line];
}else{return [];
}},"opera":function(L){if(L.message.indexOf("Backtrace:")<0){return [];
}var N=[];
var O=qx.lang.String.trim(L.message.split("Backtrace:")[1]);
var P=O.split(k);

for(var i=0;i<P.length;i++){var M=P[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(M&&M.length>=2){var R=M[1];
var Q=this.__jC(M[2]);
N.push(Q+q+R);
}}return N;
},"default":function(){return [];
}}),__jC:function(r){var u=j;
var s=r.indexOf(u);
var t=(s==-1)?r:r.substring(s+u.length).replace(/\//g,h).replace(/\.js$/,l);
return t;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(i){this.__kf=[];
this.setMaxMessages(i||50);
},members:{__kg:0,__kf:null,__kh:50,setMaxMessages:function(h){this.__kh=h;
this.clearHistory();
},getMaxMessages:function(){return this.__kh;
},process:function(f){var g=this.getMaxMessages();

if(this.__kf.length<g){this.__kf.push(f);
}else{this.__kf[this.__kg++]=f;

if(this.__kg>=g){this.__kg=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(b){if(b>this.__kf.length){b=this.__kf.length;
}
if(this.__kf.length==this.getMaxMessages()){var d=this.__kg-1;
}else{d=this.__kf.length-1;
}var c=d-b+1;

if(c<0){c+=this.__kf.length;
}var e;

if(c<=d){e=this.__kf.slice(c,d+1);
}else{e=this.__kf.slice(c,this.__kf.length).concat(this.__kf.slice(0,d+1));
}return e;
},clearHistory:function(){this.__kf=[];
this.__kg=0;
}}});
})();
(function(){var br="node",bq="error",bp="...(+",bo="array",bn=")",bm="info",bl="instance",bk="string",bj="null",bi="class",bM="number",bL="stringify",bK="]",bJ="unknown",bI="function",bH="boolean",bG="debug",bF="map",bE="undefined",bD="qx.log.Logger",by=")}",bz="#",bw="warn",bx="document",bu="{...(",bv="[",bs="text[",bt="[...(",bA="\n",bB=")]",bC="object";
qx.Class.define(bD,{statics:{__et:bG,setLevel:function(k){this.__et=k;
},getLevel:function(){return this.__et;
},setTreshold:function(bP){this.__ew.setMaxMessages(bP);
},getTreshold:function(){return this.__ew.getMaxMessages();
},__eu:{},__ev:0,register:function(K){if(K.$$id){return;
}var L=this.__ev++;
this.__eu[L]=K;
K.$$id=L;
var M=this.__ew.getAllLogEvents();

for(var i=0,l=M.length;i<l;i++){K.process(M[i]);
}},unregister:function(R){var S=R.$$id;

if(S==null){return;
}delete this.__eu[S];
delete R.$$id;
},debug:function(m,n){qx.log.Logger.__ey(bG,arguments);
},info:function(P,Q){qx.log.Logger.__ey(bm,arguments);
},warn:function(o,p){qx.log.Logger.__ey(bw,arguments);
},error:function(N,O){qx.log.Logger.__ey(bq,arguments);
},trace:function(bf){qx.log.Logger.__ey(bm,[bf,qx.dev.StackTrace.getStackTrace().join(bA)]);
},deprecatedMethodWarning:function(T,U){var V;
{};
},deprecatedClassWarning:function(bc,bd){var be;
{};
},deprecatedEventWarning:function(H,event,I){var J;
{};
},deprecatedMixinWarning:function(E,F){var G;
{};
},deprecatedConstantWarning:function(q,r,s){var self,t;
{};
},deprecateMethodOverriding:function(W,X,Y,ba){var bb;
{};
},clear:function(){this.__ew.clearHistory();
},__ew:new qx.log.appender.RingBuffer(50),__ex:{debug:0,info:1,warn:2,error:3},__ey:function(u,v){var A=this.__ex;

if(A[u]<A[this.__et]){return;
}var x=v.length<2?null:v[0];
var z=x?1:0;
var w=[];

for(var i=z,l=v.length;i<l;i++){w.push(this.__eA(v[i],true));
}var B=new Date;
var C={time:B,offset:B-qx.Bootstrap.LOADSTART,level:u,items:w,win:window};
if(x){if(x instanceof qx.core.Object){C.object=x.$$hash;
}else if(x.$$type){C.clazz=x;
}}this.__ew.process(C);
var D=this.__eu;

for(var y in D){D[y].process(C);
}},__ez:function(bg){if(bg===undefined){return bE;
}else if(bg===null){return bj;
}
if(bg.$$type){return bi;
}var bh=typeof bg;

if(bh===bI||bh==bk||bh===bM||bh===bH){return bh;
}else if(bh===bC){if(bg.nodeType){return br;
}else if(bg.classname){return bl;
}else if(bg instanceof Array){return bo;
}else if(bg instanceof Error){return bq;
}else{return bF;
}}
if(bg.toString){return bL;
}return bJ;
},__eA:function(a,b){var j=this.__ez(a);
var e=bJ;
var d=[];

switch(j){case bj:case bE:e=j;
break;
case bk:case bM:case bH:e=a;
break;
case br:if(a.nodeType===9){e=bx;
}else if(a.nodeType===3){e=bs+a.nodeValue+bK;
}else if(a.nodeType===1){e=a.nodeName.toLowerCase();

if(a.id){e+=bz+a.id;
}}else{e=br;
}break;
case bI:e=qx.lang.Function.getName(a)||j;
break;
case bl:e=a.basename+bv+a.$$hash+bK;
break;
case bi:case bL:e=a.toString();
break;
case bq:d=qx.dev.StackTrace.getStackTraceFromError(a);
e=a.toString();
break;
case bo:if(b){e=[];

for(var i=0,l=a.length;i<l;i++){if(e.length>20){e.push(bp+(l-i)+bn);
break;
}e.push(this.__eA(a[i],false));
}}else{e=bt+a.length+bB;
}break;
case bF:if(b){var c;
var h=[];

for(var g in a){h.push(g);
}h.sort();
e=[];

for(var i=0,l=h.length;i<l;i++){if(e.length>20){e.push(bp+(l-i)+bn);
break;
}g=h[i];
c=this.__eA(a[g],false);
c.key=g;
e.push(c);
}}else{var f=0;

for(var g in a){f++;
}e=bu+f+by;
}break;
}return {type:j,text:e,trace:d};
}},defer:function(bN){var bO=qx.Bootstrap.$$logs;

for(var i=0;i<bO.length;i++){bN.__ey(bO[i][0],bO[i][1]);
}qx.Bootstrap.debug=bN.debug;
qx.Bootstrap.info=bN.info;
qx.Bootstrap.warn=bN.warn;
qx.Bootstrap.error=bN.error;
qx.Bootstrap.trace=bN.trace;
}});
})();
(function(){var bp="set",bo="get",bn="reset",bm="MSIE 6.0",bl="qx.core.Object",bk="]",bj="rv:1.8.1",bi="[",bh="$$user_",bg="Object";
qx.Class.define(bl,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bg},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bi+this.$$hash+bk;
},base:function(bz,bA){{};

if(arguments.length===1){return bz.callee.base.call(this);
}else{return bz.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(q){return q.callee.self;
},clone:function(){var M=this.constructor;
var L=new M;
var O=qx.Class.getProperties(M);
var N=qx.core.Property.$$store.user;
var P=qx.core.Property.$$method.set;
var name;
for(var i=0,l=O.length;i<l;i++){name=O[i];

if(this.hasOwnProperty(N[name])){L[P[name]](this[N[name]]);
}}return L;
},set:function(A,B){var D=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(A)){if(!this[D[A]]){if(this[bp+qx.Bootstrap.firstUp(A)]!=undefined){this[bp+qx.Bootstrap.firstUp(A)](B);
return;
}{};
}return this[D[A]](B);
}else{for(var C in A){if(!this[D[C]]){if(this[bp+qx.Bootstrap.firstUp(C)]!=undefined){this[bp+qx.Bootstrap.firstUp(C)](A[C]);
continue;
}{};
}this[D[C]](A[C]);
}return this;
}},get:function(U){var V=qx.core.Property.$$method.get;

if(!this[V[U]]){if(this[bo+qx.Bootstrap.firstUp(U)]!=undefined){return this[bo+qx.Bootstrap.firstUp(U)]();
}{};
}return this[V[U]]();
},reset:function(h){var j=qx.core.Property.$$method.reset;

if(!this[j[h]]){if(this[bn+qx.Bootstrap.firstUp(h)]!=undefined){this[bn+qx.Bootstrap.firstUp(h)]();
return;
}{};
}this[j[h]]();
},__ki:qx.event.Registration,addListener:function(x,y,self,z){if(!this.$$disposed){return this.__ki.addListener(this,x,y,self,z);
}return null;
},addListenerOnce:function(bB,bC,self,bD){var bE=function(e){bC.call(self||this,e);
this.removeListener(bB,bE,this,bD);
};
return this.addListener(bB,bE,this,bD);
},removeListener:function(R,S,self,T){if(!this.$$disposed){return this.__ki.removeListener(this,R,S,self,T);
}return false;
},removeListenerById:function(Q){if(!this.$$disposed){return this.__ki.removeListenerById(this,Q);
}return false;
},hasListener:function(o,p){return this.__ki.hasListener(this,o,p);
},dispatchEvent:function(d){if(!this.$$disposed){return this.__ki.dispatchEvent(this,d);
}return true;
},fireEvent:function(bF,bG,bH){if(!this.$$disposed){return this.__ki.fireEvent(this,bF,bG,bH);
}return true;
},fireNonBubblingEvent:function(a,b,c){if(!this.$$disposed){return this.__ki.fireNonBubblingEvent(this,a,b,c);
}return true;
},fireDataEvent:function(E,F,G,H){if(!this.$$disposed){if(G===undefined){G=null;
}return this.__ki.fireNonBubblingEvent(this,E,qx.event.type.Data,[F,G,!!H]);
}return true;
},__kj:null,setUserData:function(m,n){if(!this.__kj){this.__kj={};
}this.__kj[m]=n;
},getUserData:function(f){if(!this.__kj){return null;
}var g=this.__kj[f];
return g===undefined?null:g;
},__kk:qx.log.Logger,debug:function(W){this.__kk.debug(this,W);
},info:function(bf){this.__kk.info(this,bf);
},warn:function(bq){this.__kk.warn(this,bq);
},error:function(K){this.__kk.error(this,K);
},trace:function(){this.__kk.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bc,ba,Y,bd;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var bb=this.constructor;
var X;

while(bb.superclass){if(bb.$$destructor){bb.$$destructor.call(this);
}if(bb.$$includes){X=bb.$$flatIncludes;

for(var i=0,l=X.length;i<l;i++){if(X[i].$$destructor){X[i].$$destructor.call(this);
}}}bb=bb.superclass;
}if(this.__kl){this.__kl();
}{};
},__kl:null,__km:function(){var I=qx.Class.getProperties(this.constructor);

for(var i=0,l=I.length;i<l;i++){delete this[bh+I[i]];
}},_disposeFields:function(J){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(w){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(be){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(v){qx.util.DisposeUtil.disposeArray(this,v);
},_disposeMap:function(k){qx.util.DisposeUtil.disposeMap(this,k);
}},settings:{"qx.disposerDebugLevel":0},defer:function(r,s){{};
var u=navigator.userAgent.indexOf(bm)!=-1;
var t=navigator.userAgent.indexOf(bj)!=-1;
if(u||t){s.__kl=s.__km;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__kj=null;
var bt=this.constructor;
var bx;
var by=qx.core.Property.$$store;
var bv=by.user;
var bw=by.theme;
var br=by.inherit;
var bu=by.useinit;
var bs=by.init;

while(bt){bx=bt.$$properties;

if(bx){for(var name in bx){if(bx[name].dispose||bx[name].dereference){this[bv[name]]=this[bw[name]]=this[br[name]]=this[bu[name]]=this[bs[name]]=undefined;
}}}bt=bt.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(e,f){},registerEvent:function(b,c,d){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(h,i){this.__jk=h||null;
this.__jl=i||window;

if(qx.core.Setting.get(c)===b){if(h&&window.onerror){var j=qx.Bootstrap.bind(this.__jn,this);

if(this.__jm==null){this.__jm=window.onerror;
}var self=this;
window.onerror=function(e){self.__jm(e);
j(e);
};
}
if(h&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__jn,this);
}if(this.__jk==null){if(this.__jm!=null){window.onerror=this.__jm;
this.__jm=null;
}else{window.onerror=null;
}}}},__jn:function(d,f,g){if(this.__jk){this.handleError(new qx.core.WindowError(d,f,g));
return true;
}},observeMethod:function(n){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__jk){return n.apply(this,arguments);
}
try{return n.apply(this,arguments);
}catch(l){self.handleError(new qx.core.GlobalError(l,arguments));
}};
}else{return n;
}},handleError:function(m){if(this.__jk){this.__jk.call(this.__jl,m);
}}},defer:function(k){qx.core.Setting.define(c,b);
k.setErrorHandler(null,null);
}});
})();
(function(){var n="ready",m="qx.client",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="gecko|opera|webkit",f="left",d="DOMContentLoaded",c="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(r){qx.core.Object.call(this);
this._window=r.getWindow();
this.__gR=false;
this.__gS=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var w=qx.event.handler.Application.$$instance;

if(w){w.__gV();
}}},members:{canHandleEvent:function(a,b){},registerEvent:function(o,p,q){},unregisterEvent:function(s,t,u){},__gT:null,__gR:null,__gS:null,__gU:null,__gV:function(){if(!this.__gT&&this.__gR&&qx.$$loader.scriptLoaded){if(qx.core.Variant.isSet(m,l)){if(qx.event.Registration.hasListener(this._window,n)){this.__gT=true;
qx.event.Registration.fireEvent(this._window,n);
}}else{this.__gT=true;
qx.event.Registration.fireEvent(this._window,n);
}}},isApplicationReady:function(){return this.__gT;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==n){this.__gR=true;
this.__gV();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(m,g)){qx.bom.Event.addNativeListener(this._window,d,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(m,l)){var self=this;
var v=function(){try{document.documentElement.doScroll(f);

if(document.body){self._onNativeLoadWrapped();
}}catch(y){window.setTimeout(v,100);
}};
v();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gR=true;
this.__gV();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gU){this.__gU=true;

try{qx.event.Registration.fireEvent(this._window,c);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(s){qx.core.Object.call(this);
this._manager=s;
this._window=s.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(k,l){},registerEvent:function(b,c,d){},unregisterEvent:function(f,g,h){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var j=qx.event.handler.Window.SUPPORTED_TYPES;

for(var i in j){qx.bom.Event.addNativeListener(this._window,i,this._onNativeWrapper);
}},_stopWindowObserver:function(){var u=qx.event.handler.Window.SUPPORTED_TYPES;

for(var t in u){qx.bom.Event.removeNativeListener(this._window,t,this._onNativeWrapper);
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
},defer:function(r){qx.event.Registration.addHandler(r);
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
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(h){this._manager=h;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(j,event,k){return !event.getBubbles();
},dispatchEvent:function(b,event,c){var f,d;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var g=this._manager.getListeners(b,c,false);

if(g){for(var i=0,l=g.length;i<l;i++){var e=g[i].context||b;
g[i].handler.call(e,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__jh||null;
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
var j=qx.core.Setting.get(d);
var k=qx.Class.getByName(j);

if(k){this.__jh=new k;
var i=new Date;
this.__jh.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-i)+"ms");
var i=new Date;
this.__jh.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-i)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+j);
}},__ji:function(e){var l=this.__jh;

if(l){e.setReturnValue(l.close());
}},__jj:function(){var h=this.__jh;

if(h){h.terminate();
}}},defer:function(g){qx.event.Registration.addListener(window,f,g.ready,g);
qx.event.Registration.addListener(window,a,g.__jj,g);
qx.event.Registration.addListener(window,c,g.__ji,g);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var c="qx.locale.MTranslation";
qx.Mixin.define(c,{members:{tr:function(h,i){var j=qx.locale.Manager;

if(j){return j.tr.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(k,l,m,n){var o=qx.locale.Manager;

if(o){return o.trn.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(d,e,f){var g=qx.locale.Manager;

if(g){return g.trc.apply(g,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(a){var b=qx.locale.Manager;

if(b){return b.marktr.apply(b,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__lN:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__lN;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__lN=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__lN=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var r="Trash",q="Windows (C:)",p="Data",o="Documents (D:)",n="background-color: cyan;",m="demobrowser.demo.treevirtual.TreeVirtual",l="Edit",k="Workspace",j="Network",h="Spam Message #",c="Inbox",g="Desktop",f="Sent",b="background-color: red; color: white;",a="Files",e="Tree",d="Spam";
qx.Class.define(m,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);
qx.Class.include(qx.ui.treevirtual.TreeVirtual,qx.ui.treevirtual.MNode);
var s=new qx.ui.treevirtual.TreeVirtual(e);
s.set({width:400});
s.setColumnWidth(0,400);
s.setAlwaysShowOpenCloseSymbol(true);
this.getRoot().add(s,{left:10,top:30,bottom:30});
var w=s.getDataModel();
var t=w.addBranch(null,g,true);
s.nodeSetLabelStyle(t,b);
var v;
w.addBranch(t,a,true);
v=w.addBranch(t,k,true);
w.addLeaf(v,q);
w.addLeaf(v,o);
w.addBranch(t,j,true);
v=w.addBranch(t,r,true);
s.nodeSetCellStyle(v,n);
var u=w.addBranch(null,c,true);
v=w.addBranch(u,d,false);

for(var i=1;i<3000;i++){w.addLeaf(v,h+i);
}w.addBranch(u,f,true);
w.addBranch(u,r,true);
w.addBranch(u,p,true);
w.addBranch(u,l,true);
w.setData();
}}});
})();
(function(){var j="qx.event.type.Event";
qx.Class.define(j,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(l,m){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!l;
this._cancelable=!!m;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(e){if(e){var f=e;
}else{var f=qx.event.Pool.getInstance().getObject(this.constructor);
}f._type=this._type;
f._target=this._target;
f._currentTarget=this._currentTarget;
f._relatedTarget=this._relatedTarget;
f._originalTarget=this._originalTarget;
f._stopPropagation=this._stopPropagation;
f._bubbles=this._bubbles;
f._preventDefault=this._preventDefault;
f._cancelable=this._cancelable;
return f;
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
},setType:function(i){this._type=i;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(d){this._eventPhase=d;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(k){this._target=k;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(c){this._currentTarget=c;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(g){this._relatedTarget=g;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(a){this._originalTarget=a;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(h){this._bubbles=h;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(b){this._cancelable=b;
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
(function(){var bO="get",bN="",bM="[",bL="last",bK="change",bJ="]",bI=".",bH="Number",bG="String",bF="set",ce="deepBinding",cd="item",cc="reset",cb="' (",ca="Boolean",bY=") to the object '",bX="Integer",bW="qx.data.SingleValueBinding",bV="No event could be found for the property",bU="Binding from '",bS="PositiveNumber",bT="PositiveInteger",bQ="Binding does not exist!",bR=").",bP="Date";
qx.Class.define(bW,{statics:{DEBUG_ON:false,__fo:{},bind:function(cr,cs,ct,cu,cv){var cF=this.__fq(cr,cs,ct,cu,cv);
var cA=cs.split(bI);
var cx=this.__fx(cA);
var cE=[];
var cB=[];
var cC=[];
var cy=[];
var cz=cr;
for(var i=0;i<cA.length;i++){if(cx[i]!==bN){cy.push(bK);
}else{cy.push(this.__fs(cz,cA[i]));
}cE[i]=cz;
if(i==cA.length-1){if(cx[i]!==bN){var cI=cx[i]===bL?cz.length-1:cx[i];
var cw=cz.getItem(cI);
this.__fw(cw,ct,cu,cv,cr);
cC[i]=this.__fy(cz,cy[i],ct,cu,cv,cx[i]);
}else{if(cA[i]!=null&&cz[bO+qx.lang.String.firstUp(cA[i])]!=null){var cw=cz[bO+qx.lang.String.firstUp(cA[i])]();
this.__fw(cw,ct,cu,cv,cr);
}cC[i]=this.__fy(cz,cy[i],ct,cu,cv);
}}else{var cG={index:i,propertyNames:cA,sources:cE,listenerIds:cC,arrayIndexValues:cx,targetObject:ct,targetPropertyChain:cu,options:cv,listeners:cB};
var cD=qx.lang.Function.bind(this.__fp,this,cG);
cB.push(cD);
cC[i]=cz.addListener(cy[i],cD);
}if(cz[bO+qx.lang.String.firstUp(cA[i])]==null){cz=null;
}else if(cx[i]!==bN){cz=cz[bO+qx.lang.String.firstUp(cA[i])](cx[i]);
}else{cz=cz[bO+qx.lang.String.firstUp(cA[i])]();
}
if(!cz){break;
}}var cH={type:ce,listenerIds:cC,sources:cE,targetListenerIds:cF.listenerIds,targets:cF.targets};
this.__fz(cH,cr,cs,ct,cu);
return cH;
},__fp:function(cN){if(cN.options&&cN.options.onUpdate){cN.options.onUpdate(cN.sources[cN.index],cN.targetObject);
}for(var j=cN.index+1;j<cN.propertyNames.length;j++){var cR=cN.sources[j];
cN.sources[j]=null;

if(!cR){continue;
}cR.removeListenerById(cN.listenerIds[j]);
}var cR=cN.sources[cN.index];
for(var j=cN.index+1;j<cN.propertyNames.length;j++){if(cN.arrayIndexValues[j-1]!==bN){cR=cR[bO+qx.lang.String.firstUp(cN.propertyNames[j-1])](cN.arrayIndexValues[j-1]);
}else{cR=cR[bO+qx.lang.String.firstUp(cN.propertyNames[j-1])]();
}cN.sources[j]=cR;
if(!cR){this.__ft(cN.targetObject,cN.targetPropertyChain);
break;
}if(j==cN.propertyNames.length-1){if(qx.Class.implementsInterface(cR,qx.data.IListData)){var cS=cN.arrayIndexValues[j]===bL?cR.length-1:cN.arrayIndexValues[j];
var cP=cR.getItem(cS);
this.__fw(cP,cN.targetObject,cN.targetPropertyChain,cN.options,cN.sources[cN.index]);
cN.listenerIds[j]=this.__fy(cR,bK,cN.targetObject,cN.targetPropertyChain,cN.options,cN.arrayIndexValues[j]);
}else{if(cN.propertyNames[j]!=null&&cR[bO+qx.lang.String.firstUp(cN.propertyNames[j])]!=null){var cP=cR[bO+qx.lang.String.firstUp(cN.propertyNames[j])]();
this.__fw(cP,cN.targetObject,cN.targetPropertyChain,cN.options,cN.sources[cN.index]);
}var cQ=this.__fs(cR,cN.propertyNames[j]);
cN.listenerIds[j]=this.__fy(cR,cQ,cN.targetObject,cN.targetPropertyChain,cN.options);
}}else{if(cN.listeners[j]==null){var cO=qx.lang.Function.bind(this.__fp,this,cN);
cN.listeners.push(cO);
}if(qx.Class.implementsInterface(cR,qx.data.IListData)){var cQ=bK;
}else{var cQ=this.__fs(cR,cN.propertyNames[j]);
}cN.listenerIds[j]=cR.addListener(cQ,cN.listeners[j]);
}}},__fq:function(Y,ba,bb,bc,bd){var bh=bc.split(bI);
var bf=this.__fx(bh);
var bm=[];
var bl=[];
var bj=[];
var bi=[];
var bg=bb;
for(var i=0;i<bh.length-1;i++){if(bf[i]!==bN){bi.push(bK);
}else{try{bi.push(this.__fs(bg,bh[i]));
}catch(e){break;
}}bm[i]=bg;
var bk=function(){for(var j=i+1;j<bh.length-1;j++){var bs=bm[j];
bm[j]=null;

if(!bs){continue;
}bs.removeListenerById(bj[j]);
}var bs=bm[i];
for(var j=i+1;j<bh.length-1;j++){var bq=qx.lang.String.firstUp(bh[j-1]);
if(bf[j-1]!==bN){var bt=bf[j-1]===bL?bs.getLength()-1:bf[j-1];
bs=bs[bO+bq](bt);
}else{bs=bs[bO+bq]();
}bm[j]=bs;
if(bl[j]==null){bl.push(bk);
}if(qx.Class.implementsInterface(bs,qx.data.IListData)){var br=bK;
}else{try{var br=qx.data.SingleValueBinding.__fs(bs,bh[j]);
}catch(e){break;
}}bj[j]=bs.addListener(br,bl[j]);
}qx.data.SingleValueBinding.__fr(Y,ba,bb,bc,bd);
};
bl.push(bk);
bj[i]=bg.addListener(bi[i],bk);
var be=qx.lang.String.firstUp(bh[i]);
if(bg[bO+be]==null){bg=null;
}else if(bf[i]!==bN){bg=bg[bO+be](bf[i]);
}else{bg=bg[bO+be]();
}
if(!bg){break;
}}return {listenerIds:bj,targets:bm};
},__fr:function(cT,cU,cV,cW,cX){var dc=this.__fv(cT,cU);

if(dc!=null){var de=cU.substring(cU.lastIndexOf(bI)+1,cU.length);
if(de.charAt(de.length-1)==bJ){var cY=de.substring(de.lastIndexOf(bM)+1,de.length-1);
var db=de.substring(0,de.lastIndexOf(bM));
var dd=dc[bO+qx.lang.String.firstUp(db)]();

if(cY==bL){cY=dd.length-1;
}
if(dd!=null){var da=dd.getItem(cY);
}}else{var da=dc[bO+qx.lang.String.firstUp(de)]();
}}da=qx.data.SingleValueBinding.__fA(da,cV,cW,cX);
this.__fu(cV,cW,da);
},__fs:function(J,K){var L=this.__fB(J,K);
if(L==null){if(qx.Class.supportsEvent(J.constructor,K)){L=K;
}else if(qx.Class.supportsEvent(J.constructor,bK+qx.lang.String.firstUp(K))){L=bK+qx.lang.String.firstUp(K);
}else{throw new qx.core.AssertionError(bV,K);
}}return L;
},__ft:function(P,Q){var R=this.__fv(P,Q);

if(R!=null){var S=Q.substring(Q.lastIndexOf(bI)+1,Q.length);
if(S.charAt(S.length-1)==bJ){this.__fu(P,Q,null);
return;
}if(R[cc+qx.lang.String.firstUp(S)]!=undefined){R[cc+qx.lang.String.firstUp(S)]();
}else{R[bF+qx.lang.String.firstUp(S)](null);
}}},__fu:function(t,u,v){var z=this.__fv(t,u);

if(z!=null){var A=u.substring(u.lastIndexOf(bI)+1,u.length);
if(A.charAt(A.length-1)==bJ){var w=A.substring(A.lastIndexOf(bM)+1,A.length-1);
var y=A.substring(0,A.lastIndexOf(bM));
var x=z[bO+qx.lang.String.firstUp(y)]();

if(w==bL){w=x.length-1;
}
if(x!=null){x.setItem(w,v);
}}else{z[bF+qx.lang.String.firstUp(A)](v);
}}},__fv:function(bz,bA){var bD=bA.split(bI);
var bE=bz;
for(var i=0;i<bD.length-1;i++){try{var bC=bD[i];
if(bC.indexOf(bJ)==bC.length-1){var bB=bC.substring(bC.indexOf(bM)+1,bC.length-1);
bC=bC.substring(0,bC.indexOf(bM));
}bE=bE[bO+qx.lang.String.firstUp(bC)]();

if(bB!=null){if(bB==bL){bB=bE.length-1;
}bE=bE.getItem(bB);
bB=null;
}}catch(O){return null;
}}return bE;
},__fw:function(T,U,V,W,X){T=this.__fA(T,U,V,W);
if(T==null){this.__ft(U,V);
}if(T!=undefined){try{this.__fu(U,V,T);
if(W&&W.onUpdate){W.onUpdate(X,U,T);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(W&&W.onSetFail){W.onSetFail(e);
}else{this.warn("Failed so set value "+T+" on "+U+". Error message: "+e);
}}}},__fx:function(bn){var bo=[];
for(var i=0;i<bn.length;i++){var name=bn[i];
if(qx.lang.String.endsWith(name,bJ)){var bp=name.substring(name.indexOf(bM)+1,name.indexOf(bJ));
if(name.indexOf(bJ)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bp!==bL){if(bp==bN||isNaN(parseInt(bp))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(bM)!=0){bn[i]=name.substring(0,name.indexOf(bM));
bo[i]=bN;
bo[i+1]=bp;
bn.splice(i+1,0,cd);
i++;
}else{bo[i]=bp;
bn.splice(i,1,cd);
}}else{bo[i]=bN;
}}return bo;
},__fy:function(cf,cg,ch,ci,cj,ck){var cl;
{};
var cn=function(cJ,e){if(cJ!==bN){if(cJ===bL){cJ=cf.length-1;
}var cM=cf.getItem(cJ);
if(cM==undefined){qx.data.SingleValueBinding.__ft(ch,ci);
}var cK=e.getData().start;
var cL=e.getData().end;

if(cJ<cK||cJ>cL){return;
}}else{var cM=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cf+" by "+cg+" to "+ch+" ("+ci+")");
qx.log.Logger.debug("Data before conversion: "+cM);
}cM=qx.data.SingleValueBinding.__fA(cM,ch,ci,cj);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+cM);
}try{if(cM!=undefined){qx.data.SingleValueBinding.__fu(ch,ci,cM);
}else{qx.data.SingleValueBinding.__ft(ch,ci);
}if(cj&&cj.onUpdate){cj.onUpdate(cf,ch,cM);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cj&&cj.onSetFail){cj.onSetFail(e);
}else{this.warn("Failed so set value "+cM+" on "+ch+". Error message: "+e);
}}};
if(!ck){ck=bN;
}cn=qx.lang.Function.bind(cn,cf,ck);
var cm=cf.addListener(cg,cn);
return cm;
},__fz:function(B,C,D,E,F){if(this.__fo[C.toHashCode()]===undefined){this.__fo[C.toHashCode()]=[];
}this.__fo[C.toHashCode()].push([B,C,D,E,F]);
},__fA:function(b,c,d,f){if(f&&f.converter){var h;

if(c.getModel){h=c.getModel();
}return f.converter(b,h);
}else{var l=this.__fv(c,d);
var m=d.substring(d.lastIndexOf(bI)+1,d.length);
if(l==null){return b;
}var k=qx.Class.getPropertyDefinition(l.constructor,m);
var g=k==null?bN:k.check;
return this.__fC(b,g);
}},__fB:function(bw,bx){var by=qx.Class.getPropertyDefinition(bw.constructor,bx);

if(by==null){return null;
}return by.event;
},__fC:function(G,H){var I=qx.lang.Type.getClass(G);
if((I==bH||I==bG)&&(H==bX||H==bT)){G=parseInt(G);
}if((I==ca||I==bH||I==bP)&&H==bG){G=G+bN;
}if((I==bH||I==bG)&&(H==bH||H==bS)){G=parseFloat(G);
}return G;
},removeBindingFromObject:function(co,cp){if(cp.type==ce){for(var i=0;i<cp.sources.length;i++){if(cp.sources[i]){cp.sources[i].removeListenerById(cp.listenerIds[i]);
}}for(var i=0;i<cp.targets.length;i++){if(cp.targets[i]){cp.targets[i].removeListenerById(cp.targetListenerIds[i]);
}}}else{co.removeListenerById(cp);
}var cq=this.__fo[co.toHashCode()];
if(cq!=undefined){for(var i=0;i<cq.length;i++){if(cq[i][0]==cp){qx.lang.Array.remove(cq,cq[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(n){{};
var o=this.__fo[n.toHashCode()];

if(o!=undefined){for(var i=o.length-1;i>=0;i--){this.removeBindingFromObject(n,o[i][0]);
}}},getAllBindingsForObject:function(a){if(this.__fo[a.toHashCode()]===undefined){this.__fo[a.toHashCode()]=[];
}return this.__fo[a.toHashCode()];
},removeAllBindings:function(){for(var N in this.__fo){var M=qx.core.ObjectRegistry.fromHashCode(N);
if(M==null){delete this.__fo[N];
continue;
}this.removeAllBindingsForObject(M);
}this.__fo={};
},getAllBindings:function(){return this.__fo;
},showBindingInLog:function(p,q){var s;
for(var i=0;i<this.__fo[p.toHashCode()].length;i++){if(this.__fo[p.toHashCode()][i][0]==q){s=this.__fo[p.toHashCode()][i];
break;
}}
if(s===undefined){var r=bQ;
}else{var r=bU+s[1]+cb+s[2]+bY+s[3]+cb+s[4]+bR;
}qx.log.Logger.debug(r);
},showAllBindingsInLog:function(){for(var bv in this.__fo){var bu=qx.core.ObjectRegistry.fromHashCode(bv);

for(var i=0;i<this.__fo[bv].length;i++){this.showBindingInLog(bu,this.__fo[bv][i][0]);
}}}}});
})();
(function(){var K="",J="g",I="0",H='\\$1',G="%",F='-',E="qx.lang.String",D=' ',C='\n',B="undefined";
qx.Class.define(E,{statics:{camelCase:function(d){return d.replace(/\-([a-z])/g,function(j,k){return k.toUpperCase();
});
},hyphenate:function(O){return O.replace(/[A-Z]/g,function(L){return (F+L.charAt(0).toLowerCase());
});
},capitalize:function(g){return g.replace(/\b[a-z]/g,function(A){return A.toUpperCase();
});
},clean:function(l){return this.trim(l.replace(/\s+/g,D));
},trimLeft:function(f){return f.replace(/^\s+/,K);
},trimRight:function(c){return c.replace(/\s+$/,K);
},trim:function(h){return h.replace(/^\s+|\s+$/g,K);
},startsWith:function(a,b){return a.indexOf(b)===0;
},endsWith:function(t,u){return t.substring(t.length-u.length,t.length)===u;
},repeat:function(y,z){return y.length>0?new Array(z+1).join(y):K;
},pad:function(m,length,n){var o=length-m.length;

if(o>0){if(typeof n===B){n=I;
}return this.repeat(n,o)+m;
}else{return m;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(P,Q){return P.indexOf(Q)!=-1;
},format:function(v,w){var x=v;

for(var i=0;i<w.length;i++){x=x.replace(new RegExp(G+(i+1),J),w[i]);
}return x;
},escapeRegexpChars:function(e){return e.replace(/([.*+?^${}()|[\]\/\\])/g,H);
},toArray:function(M){return M.split(/\B|\b/g);
},stripTags:function(N){return N.replace(/<\/?[^>]+>/gi,K);
},stripScripts:function(p,q){var s=K;
var r=p.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){s+=arguments[1]+C;
return K;
});

if(q===true){qx.lang.Function.globalEval(s);
}return r;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(j){},setItem:function(h,i){},splice:function(e,f,g){},contains:function(d){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var e="",d="qx.core.WindowError";
qx.Bootstrap.define(d,{extend:Error,construct:function(a,b,c){Error.call(this,a);
this.__cp=a;
this.__cq=b||e;
this.__cr=c===undefined?-1:c;
},members:{__cp:null,__cq:null,__cr:null,toString:function(){return this.__cp;
},getUri:function(){return this.__cq;
},getLineNumber:function(){return this.__cr;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__jD=b+(c&&c.message?c.message:c);
Error.call(this,this.__jD);
this.__jE=d;
this.__jF=c;
},members:{__jF:null,__jE:null,__jD:null,toString:function(){return this.__jD;
},getArguments:function(){return this.__jE;
},getSourceException:function(){return this.__jF;
}},destruct:function(){this.__jF=null;
this.__jE=null;
this.__jD=null;
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
this.__kn=qx.dev.StackTrace.getStackTrace();
},members:{__kn:null,getStackTrace:function(){return this.__kn;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(j){return (j!==null&&(this.getClass(j)==b||j instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(k){return (k!==null&&(this.getClass(k)==c||k instanceof Date));
},isError:function(h){return (h!==null&&(this.getClass(h)==e||h instanceof Error));
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__eU={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__eU:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__eU[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(k){if(!this.__eU){return;
}var m=k.classname;
var n=this.__eU[m];

if(k.$$pooled){throw new Error("Object is already pooled: "+k);
}
if(!n){this.__eU[m]=n=[];
}if(n.length>this.getSize()){if(k.destroy){k.destroy();
}else{k.dispose();
}return;
}k.$$pooled=true;
n.push(k);
}},destruct:function(){var j=this.__eU;
var g,h,i,l;

for(g in j){h=j[g];

for(i=0,l=h.length;i<l;i++){h[i].dispose();
}}delete this.__eU;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var b="qx.util.DisposeUtil";
qx.Class.define(b,{statics:{disposeFields:function(c,d){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=d.length;i<l;i++){var name=d[i];

if(c[name]==null||!c.hasOwnProperty(name)){continue;
}c[name]=null;
}},disposeObjects:function(k,m,n){var name;

for(var i=0,l=m.length;i<l;i++){name=m[i];

if(k[name]==null||!k.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(k[name].dispose){if(!n&&k[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{k[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}k[name]=null;
}},disposeArray:function(f,g){var j=f[g];

if(!j){return;
}if(qx.core.ObjectRegistry.inShutDown){f[g]=null;
return;
}try{var h;

for(var i=j.length-1;i>=0;i--){h=j[i];

if(h){h.dispose();
}}}catch(a){throw new Error("The array field: "+g+" of object: "+f+" has non disposable entries: "+a);
}j.length=0;
f[g]=null;
},disposeMap:function(o,p){var q=o[p];

if(!q){return;
}if(qx.core.ObjectRegistry.inShutDown){o[p]=null;
return;
}try{for(var r in q){if(q.hasOwnProperty(r)){q[r].dispose();
}}}catch(e){throw new Error("The map field: "+p+" of object: "+o+" has non disposable entries: "+e);
}o[p]=null;
},disposeTriggeredBy:function(s,t){var u=t.dispose;
t.dispose=function(){u.call(t);
s.dispose();
};
}}});
})();
(function(){var b="qx.event.handler.Object";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(c,d){return qx.Class.supportsEvent(c.constructor,d);
},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var d="CSS1Compat",c="qx.bom.client.Feature",b="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",a="label";
qx.Class.define(c,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,XUL:false,CSS_TEXT_OVERFLOW:("textOverflow" in document.documentElement.style||"OTextOverflow" in document.documentElement.style),HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__fP:function(){this.QUIRKS_MODE=this.__fQ();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;

try{document.createElementNS(b,a);
this.XUL=true;
}catch(e){this.XUL=false;
}},__fQ:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==d;
}}},defer:function(f){f.__fP();
}});
})();
(function(){var c="qx.lang.Object";
qx.Class.define(c,{statics:{empty:function(F){{};

for(var G in F){if(F.hasOwnProperty(G)){delete F[G];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(f){{};
return f.__count__===0;
}:
function(g){{};

for(var h in g){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(a,b){{};
return a.__count__>=b;
}:
function(A,B){{};

if(B<=0){return true;
}var length=0;

for(var C in A){if((++length)>=B){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(u){{};
var w=[];
var v=this.getKeys(u);

for(var i=0,l=v.length;i<l;i++){w.push(u[v[i]]);
}return w;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(p,q){{};
return qx.lang.Object.mergeWith(p,q,false);
},merge:function(H,I){{};
var J=arguments.length;

for(var i=1;i<J;i++){qx.lang.Object.mergeWith(H,arguments[i]);
}return H;
},clone:function(x){{};
var y={};

for(var z in x){y[z]=x[z];
}return y;
},invert:function(r){{};
var s={};

for(var t in r){s[r[t].toString()]=t;
}return s;
},getKeyFromValue:function(j,k){{};

for(var m in j){if(j.hasOwnProperty(m)&&j[m]===k){return m;
}}return null;
},contains:function(D,E){{};
return this.getKeyFromValue(D,E)!==null;
},select:function(d,e){{};
return e[d];
},fromArray:function(n){{};
var o={};

for(var i=0,l=n.length;i<l;i++){{};
o[n[i].toString()]=true;
}return o;
}}});
})();
(function(){var j="emulated",h="native",g='"',f="qx.lang.Core",e="\\\\",d="\\\"",c="[object Error]";
qx.Class.define(f,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==c)?j:h,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?h:j,{"native":Array.prototype.indexOf,"emulated":function(s,t){if(t==null){t=0;
}else if(t<0){t=Math.max(0,this.length+t);
}
for(var i=t;i<this.length;i++){if(this[i]===s){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?h:j,{"native":Array.prototype.lastIndexOf,"emulated":function(a,b){if(b==null){b=this.length-1;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i>=0;i--){if(this[i]===a){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?h:j,{"native":Array.prototype.forEach,"emulated":function(k,m){var l=this.length;

for(var i=0;i<l;i++){var n=this[i];

if(n!==undefined){k.call(m||window,n,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?h:j,{"native":Array.prototype.filter,"emulated":function(o,p){var q=[];
var l=this.length;

for(var i=0;i<l;i++){var r=this[i];

if(r!==undefined){if(o.call(p||window,r,i,this)){q.push(this[i]);
}}}return q;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?h:j,{"native":Array.prototype.map,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){w[i]=u.call(v||window,x,i,this);
}}return w;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?h:j,{"native":Array.prototype.some,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){if(y.call(z||window,A,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?h:j,{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?h:j,{"native":String.prototype.quote,"emulated":function(){return g+this.replace(/\\/g,e).replace(/\"/g,d)+g;
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
(function(){var n="indexOf",m="lastIndexOf",k="slice",j="concat",h="join",g="toLocaleUpperCase",f="shift",e="substr",d="filter",c="unshift",K="match",J="quote",I="qx.lang.Generics",H="localeCompare",G="sort",F="some",E="charAt",D="split",C="substring",B="pop",v="toUpperCase",w="replace",t="push",u="charCodeAt",q="every",r="reverse",o="search",p="forEach",x="map",y="toLowerCase",A="splice",z="toLocaleLowerCase";
qx.Class.define(I,{statics:{__en:{"Array":[h,r,G,t,B,f,c,A,j,k,n,m,p,x,d,F,q],"String":[J,C,y,v,E,u,n,m,z,g,H,K,o,w,D,e,j,k]},__eo:function(a,b){return function(s){return a.prototype[b].apply(s,Array.prototype.slice.call(arguments,1));
};
},__ep:function(){var L=qx.lang.Generics.__en;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__eo(N,O);
}}}}},defer:function(Q){Q.__ep();
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
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__js:function(){var n=navigator.platform;
if(n==null||n===k){n=navigator.userAgent;
}
if(n.indexOf(e)!=-1||n.indexOf(l)!=-1||n.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(n.indexOf(g)!=-1||n.indexOf(b)!=-1||n.indexOf(c)!=-1||n.indexOf(m)!=-1||n.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(n.indexOf(a)!=-1||n.indexOf(i)!=-1||n.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(o){o.__js();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__kd:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__ke:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__kd){J.push(I);
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
}else{this.NAME=this.__kd[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__ke();
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
(function(){var V=",",U="rgb(",T=")",S="qx.theme.manager.Color",R="qx.util.ColorUtil";
qx.Class.define(R,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(s){return this.NAMED[s]!==undefined;
},isSystemColor:function(W){return this.SYSTEM[W]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(S);
},isThemedColor:function(J){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(J);
},stringToRgb:function(o){if(this.supportsThemes()&&this.isThemedColor(o)){var o=qx.theme.manager.Color.getInstance().resolveDynamic(o);
}
if(this.isNamedColor(o)){return this.NAMED[o];
}else if(this.isSystemColor(o)){throw new Error("Could not convert system colors to RGB: "+o);
}else if(this.isRgbString(o)){return this.__fK();
}else if(this.isHex3String(o)){return this.__fM();
}else if(this.isHex6String(o)){return this.__fN();
}throw new Error("Could not parse color: "+o);
},cssStringToRgb:function(X){if(this.isNamedColor(X)){return this.NAMED[X];
}else if(this.isSystemColor(X)){throw new Error("Could not convert system colors to RGB: "+X);
}else if(this.isRgbString(X)){return this.__fK();
}else if(this.isRgbaString(X)){return this.__fL();
}else if(this.isHex3String(X)){return this.__fM();
}else if(this.isHex6String(X)){return this.__fN();
}throw new Error("Could not parse color: "+X);
},stringToRgbString:function(H){return this.rgbToRgbString(this.stringToRgb(H));
},rgbToRgbString:function(bi){return U+bi[0]+V+bi[1]+V+bi[2]+T;
},rgbToHexString:function(be){return (qx.lang.String.pad(be[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(be[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(be[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(e){return this.isThemedColor(e)||this.isNamedColor(e)||this.isHex3String(e)||this.isHex6String(e)||this.isRgbString(e);
},isCssString:function(ba){return this.isSystemColor(ba)||this.isNamedColor(ba)||this.isHex3String(ba)||this.isHex6String(ba)||this.isRgbString(ba);
},isHex3String:function(u){return this.REGEXP.hex3.test(u);
},isHex6String:function(j){return this.REGEXP.hex6.test(j);
},isRgbString:function(h){return this.REGEXP.rgb.test(h);
},isRgbaString:function(Y){return this.REGEXP.rgba.test(Y);
},__fK:function(){var bh=parseInt(RegExp.$1,10);
var bg=parseInt(RegExp.$2,10);
var bf=parseInt(RegExp.$3,10);
return [bh,bg,bf];
},__fL:function(){var d=parseInt(RegExp.$1,10);
var c=parseInt(RegExp.$2,10);
var a=parseInt(RegExp.$3,10);
return [d,c,a];
},__fM:function(){var m=parseInt(RegExp.$1,16)*17;
var l=parseInt(RegExp.$2,16)*17;
var k=parseInt(RegExp.$3,16)*17;
return [m,l,k];
},__fN:function(){var bd=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var bc=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var bb=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [bd,bc,bb];
},hex3StringToRgb:function(n){if(this.isHex3String(n)){return this.__fM(n);
}throw new Error("Invalid hex3 value: "+n);
},hex6StringToRgb:function(K){if(this.isHex6String(K)){return this.__fN(K);
}throw new Error("Invalid hex6 value: "+K);
},hexStringToRgb:function(I){if(this.isHex3String(I)){return this.__fM(I);
}
if(this.isHex6String(I)){return this.__fN(I);
}throw new Error("Invalid hex value: "+I);
},rgbToHsb:function(v){var x,y,A;
var G=v[0];
var D=v[1];
var w=v[2];
var F=(G>D)?G:D;

if(w>F){F=w;
}var z=(G<D)?G:D;

if(w<z){z=w;
}A=F/255.0;

if(F!=0){y=(F-z)/F;
}else{y=0;
}
if(y==0){x=0;
}else{var C=(F-G)/(F-z);
var E=(F-D)/(F-z);
var B=(F-w)/(F-z);

if(G==F){x=B-E;
}else if(D==F){x=2.0+C-B;
}else{x=4.0+E-C;
}x=x/6.0;

if(x<0){x=x+1.0;
}}return [Math.round(x*360),Math.round(y*100),Math.round(A*100)];
},hsbToRgb:function(L){var i,f,p,q,t;
var M=L[0]/360;
var N=L[1]/100;
var O=L[2]/100;

if(M>=1.0){M%=1.0;
}
if(N>1.0){N=1.0;
}
if(O>1.0){O=1.0;
}var P=Math.floor(255*O);
var Q={};

if(N==0.0){Q.red=Q.green=Q.blue=P;
}else{M*=6.0;
i=Math.floor(M);
f=M-i;
p=Math.floor(P*(1.0-N));
q=Math.floor(P*(1.0-(N*f)));
t=Math.floor(P*(1.0-(N*(1.0-f))));

switch(i){case 0:Q.red=P;
Q.green=t;
Q.blue=p;
break;
case 1:Q.red=q;
Q.green=P;
Q.blue=p;
break;
case 2:Q.red=p;
Q.green=P;
Q.blue=t;
break;
case 3:Q.red=p;
Q.green=q;
Q.blue=P;
break;
case 4:Q.red=t;
Q.green=p;
Q.blue=P;
break;
case 5:Q.red=P;
Q.green=p;
Q.blue=q;
break;
}}return [Q.red,Q.green,Q.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var j="object",i="_applyTheme",h="__bR",g="qx.theme.manager.Decoration",f="Theme",e="changeTheme",d="string",c="singleton";
qx.Class.define(g,{type:c,extend:qx.core.Object,properties:{theme:{check:f,nullable:true,apply:i,event:e}},members:{__bR:null,resolve:function(m){if(!m){return null;
}
if(typeof m===j){return m;
}var p=this.getTheme();

if(!p){return null;
}var p=this.getTheme();

if(!p){return null;
}var q=this.__bR;

if(!q){q=this.__bR={};
}var n=q[m];

if(n){return n;
}var o=p.decorations[m];

if(!o){return null;
}var r=o.decorator;

if(r==null){throw new Error("Missing definition of which decorator to use in entry: "+m+"!");
}return q[m]=(new r).set(o.style);
},isValidPropertyValue:function(a){if(typeof a===d){return this.isDynamic(a);
}else if(typeof a===j){var b=a.constructor;
return qx.Class.hasInterface(b,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(k){if(!k){return false;
}var l=this.getTheme();

if(!l){return false;
}return !!l.decorations[k];
},_applyTheme:function(s,t){var v=qx.util.AliasManager.getInstance();

if(t){for(var u in t.aliases){v.remove(u);
}}
if(s){for(var u in s.aliases){v.add(u,s.aliases[u]);
}}
if(!s){this.__bR={};
}}},destruct:function(){this._disposeMap(h);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var l="/",k="0",j="qx/static",i="http://",h="https://",g="file://",f="qx.util.AliasManager",e="singleton",d=".",c="static";
qx.Class.define(f,{type:e,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__fO={};
this.add(c,j);
},members:{__fO:null,_preprocess:function(r){var u=this._getDynamic();

if(u[r]===false){return r;
}else if(u[r]===undefined){if(r.charAt(0)===l||r.charAt(0)===d||r.indexOf(i)===0||r.indexOf(h)===k||r.indexOf(g)===0){u[r]=false;
return r;
}
if(this.__fO[r]){return this.__fO[r];
}var t=r.substring(0,r.indexOf(l));
var s=this.__fO[t];

if(s!==undefined){u[r]=s+r.substring(t.length);
}}return r;
},add:function(n,o){this.__fO[n]=o;
var q=this._getDynamic();
for(var p in q){if(p.substring(0,p.indexOf(l))===n){q[p]=o+p.substring(n.length);
}}},remove:function(m){delete this.__fO[m];
},resolve:function(a){var b=this._getDynamic();

if(a!==null){a=this._preprocess(a);
}return b[a]||a;
}},destruct:function(){this.__fO=null;
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(o){var p=this._dynamic;
return o instanceof qx.bom.Font?o:p[o];
},resolve:function(k){var n=this._dynamic;
var l=n[k];

if(l){return l;
}var m=this.getTheme();

if(m!==null&&m.fonts[k]){return n[k]=(new qx.bom.Font).set(m.fonts[k]);
}return k;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(q instanceof qx.bom.Font||s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&r.fonts[q]){s[q]=(new qx.bom.Font).set(r.fonts[q]);
return true;
}return false;
},__gW:function(t,u){if(t[u].include){var v=t[t[u].include];
t[u].include=null;
delete t[u].include;
t[u]=qx.lang.Object.mergeWith(t[u],v,false);
this.__gW(t,u);
}},_applyTheme:function(f){var g=this._getDynamic();

for(var j in g){if(g[j].themed){g[j].dispose();
delete g[j];
}}
if(f){var h=f.fonts;
var i=qx.bom.Font;

for(var j in h){if(h[j].include&&h[h[j].include]){this.__gW(h,j);
}g[j]=(new i).set(h[j]);
g[j].themed=true;
}}this._setDynamic(g);
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",x="Integer",w="_applyFamily",v="_applyLineHeight",u="Array",t="overline",s="line-through",r="qx.bom.Font",q="Number",p="_applyDecoration",o=" ",m="_applySize",n=",";
qx.Class.define(r,{extend:qx.core.Object,construct:function(O,P){qx.core.Object.call(this);

if(O!==undefined){this.setSize(O);
}
if(P!==undefined){this.setFamily(P);
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
},__ca:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__ca;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__cb:null,__cc:null,__cd:null,__ce:null,__cf:null,__cg:null,_applySize:function(J,K){this.__cb=J===null?null:J+g;
},_applyLineHeight:function(A,B){this.__cg=A===null?null:A;
},_applyFamily:function(L,M){var N=k;

for(var i=0,l=L.length;i<l;i++){if(L[i].indexOf(o)>0){N+=f+L[i]+f;
}else{N+=L[i];
}
if(i!==l-1){N+=n;
}}this.__cc=N;
},_applyBold:function(S,T){this.__cd=S===null?null:S?c:d;
},_applyItalic:function(Q,R){this.__ce=Q===null?null:Q?e:d;
},_applyDecoration:function(y,z){this.__cf=y===null?null:y;
},getStyles:function(){return {fontFamily:this.__cc,fontSize:this.__cb,fontWeight:this.__cd,fontStyle:this.__ce,textDecoration:this.__cf,lineHeight:this.__cg};
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
this.__de={};
this.__df={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__dg:{},__de:null,__df:null,_applyTheme:function(K,L){this.__df={};
this.__de={};
},__dh:function(z,A,B){var F=A.appearances;
var I=F[z];

if(!I){var J=b;
var C=[];
var H=z.split(J);
var G;

while(!I&&H.length>0){C.unshift(H.pop());
var D=H.join(J);
I=F[D];

if(I){G=I.alias||I;

if(typeof G===h){var E=G+J+C.join(J);
return this.__dh(E,A,B);
}}}if(B!=null){return this.__dh(B,A);
}return null;
}else if(typeof I===h){return this.__dh(I,A,B);
}else if(I.include&&!I.style){return this.__dh(I.include,A,B);
}return z;
},styleFrom:function(i,j,k,l){if(!k){k=this.getTheme();
}var r=this.__df;
var m=r[i];

if(!m){m=r[i]=this.__dh(i,k,l);
}var w=k.appearances[m];

if(!w){this.warn("Missing appearance: "+i);
return null;
}if(!w.style){return null;
}var x=m;

if(j){var y=w.$$bits;

if(!y){y=w.$$bits={};
w.$$length=0;
}var p=0;

for(var s in j){if(!j[s]){continue;
}
if(y[s]==null){y[s]=1<<w.$$length++;
}p+=y[s];
}if(p>0){x+=e+p;
}}var q=this.__de;

if(q[x]!==undefined){return q[x];
}if(!j){j=this.__dg;
}var u;
if(w.include||w.base){var o=w.style(j);
var n;

if(w.include){n=this.styleFrom(w.include,j,k,l);
}u={};
if(w.base){var t=this.styleFrom(m,j,w.base,l);

if(w.include){for(var v in t){if(!n.hasOwnProperty(v)&&!o.hasOwnProperty(v)){u[v]=t[v];
}}}else{for(var v in t){if(!o.hasOwnProperty(v)){u[v]=t[v];
}}}}if(w.include){for(var v in n){if(!o.hasOwnProperty(v)){u[v]=n[v];
}}}for(var v in o){u[v]=o[v];
}}else{u=w.style(j);
}return q[x]=u||null;
}},destruct:function(){this.__de=this.__df=null;
}});
})();
(function(){var v="other",u="widgets",t="fonts",s="appearances",r="qx.Theme",q="]",p="[Theme ",o="colors",n="decorations",m="Theme",h="meta",k="borders",j="icons";
qx.Bootstrap.define(r,{statics:{define:function(name,O){if(!O){var O={};
}O.include=this.__pr(O.include);
O.patch=this.__pr(O.patch);
{};
var P={$$type:m,name:name,title:O.title,toString:this.genericToString};
if(O.extend){P.supertheme=O.extend;
}P.basename=qx.Bootstrap.createNamespace(name,P);
this.__pu(P,O);
this.__ps(P,O);
this.$$registry[name]=P;
for(var i=0,a=O.include,l=a.length;i<l;i++){this.include(P,a[i]);
}
for(var i=0,a=O.patch,l=a.length;i<l;i++){this.patch(P,a[i]);
}},__pr:function(Q){if(!Q){return [];
}
if(qx.Bootstrap.isArray(Q)){return Q;
}else{return [Q];
}},__ps:function(L,M){var N=M.aliases||{};

if(M.extend&&M.extend.aliases){qx.Bootstrap.objectMergeWith(N,M.extend.aliases,false);
}L.aliases=N;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return p+this.name+q;
},__pt:function(C){for(var i=0,D=this.__pv,l=D.length;i<l;i++){if(C[D[i]]){return D[i];
}}},__pu:function(E,F){var I=this.__pt(F);
if(F.extend&&!I){I=F.extend.type;
}E.type=I||v;
if(!I){return;
}var K=function(){};
if(F.extend){K.prototype=new F.extend.$$clazz;
}var J=K.prototype;
var H=F[I];
for(var G in H){J[G]=H[G];
if(J[G].base){{};
J[G].base=F.extend;
}}E.$$clazz=K;
E[I]=new K;
},$$registry:{},__pv:[o,k,n,t,j,u,s,h],__pw:null,__px:null,__py:function(){},patch:function(b,c){var e=this.__pt(c);

if(e!==this.__pt(b)){throw new Error("The mixins '"+b.name+"' are not compatible '"+c.name+"'!");
}var d=c[e];
var f=b.$$clazz.prototype;

for(var g in d){f[g]=d[g];
}},include:function(w,x){var z=x.type;

if(z!==w.type){throw new Error("The mixins '"+w.name+"' are not compatible '"+x.name+"'!");
}var y=x[z];
var A=w.$$clazz.prototype;

for(var B in y){if(A[B]!==undefined){continue;
}A[B]=y[B];
}}}});
})();
(function(){var u="focusout",t="interval",s="mouseover",r="mouseout",q="mousemove",p="__ph",o="widget",n="__pf",m="qx.ui.tooltip.ToolTip",l="Boolean",i="__pe",k="_applyCurrent",j="qx.ui.tooltip.Manager",h="tooltip-error",g="singleton";
qx.Class.define(j,{type:g,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,s,this.__po,this,true);
this.__pe=new qx.event.Timer();
this.__pe.addListener(t,this.__pl,this);
this.__pf=new qx.event.Timer();
this.__pf.addListener(t,this.__pm,this);
this.__pg={left:0,top:0};
},properties:{current:{check:m,nullable:true,apply:k},showInvalidTooltips:{check:l,init:true}},members:{__pg:null,__pf:null,__pe:null,__ph:null,__pi:null,__pj:function(){if(!this.__ph){this.__ph=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__ph;
},__pk:function(){if(!this.__pi){this.__pi=new qx.ui.tooltip.ToolTip().set({appearance:h});
this.__pi.syncAppearance();
}return this.__pi;
},_applyCurrent:function(w,x){if(x&&qx.ui.core.Widget.contains(x,w)){return;
}if(x){if(!x.isDisposed()){x.exclude();
}this.__pe.stop();
this.__pf.stop();
}var z=qx.event.Registration;
var y=document.body;
if(w){this.__pe.startWith(w.getShowTimeout());
z.addListener(y,r,this.__pp,this,true);
z.addListener(y,u,this.__pq,this,true);
z.addListener(y,q,this.__pn,this,true);
}else{z.removeListener(y,r,this.__pp,this,true);
z.removeListener(y,u,this.__pq,this,true);
z.removeListener(y,q,this.__pn,this,true);
}},__pl:function(e){var A=this.getCurrent();

if(A&&!A.isDisposed()){this.__pf.startWith(A.getHideTimeout());

if(A.getPlaceMethod()==o){A.placeToWidget(A.getOpener());
}else{A.placeToPoint(this.__pg);
}A.show();
}this.__pe.stop();
},__pm:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__pf.stop();
this.resetCurrent();
},__pn:function(e){var B=this.__pg;
B.left=e.getDocumentLeft();
B.top=e.getDocumentTop();
},__po:function(e){var c=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

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
}var d=this.__pk().set({label:a});
}else if(!d){var d=this.__pj().set({label:f,icon:b});
}this.setCurrent(d);
d.setOpener(c);
},__pp:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!E){return;
}var F=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&(F==G||qx.ui.core.Widget.contains(G,F))){return;
}if(F&&E&&qx.ui.core.Widget.contains(E,F)){return;
}if(G&&!F){this.setCurrent(null);
}else{this.resetCurrent();
}},__pq:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=this.getCurrent();
if(D&&D==C.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,s,this.__po,this,true);
this._disposeObjects(i,n,p);
this.__pg=null;
}});
})();
(function(){var i="interval",h="qx.event.Timer",g="_applyInterval",f="_applyEnabled",d="Boolean",c="qx.event.type.Event",b="Integer";
qx.Class.define(h,{extend:qx.core.Object,construct:function(j){qx.core.Object.call(this);
this.setEnabled(false);

if(j!=null){this.setInterval(j);
}var self=this;
this.__dP=function(){self._oninterval.call(self);
};
},events:{"interval":c},statics:{once:function(p,q,r){var s=new qx.event.Timer(r);
s.__dQ=p;
s.addListener(i,function(e){s.stop();
p.call(q,e);
s.dispose();
q=null;
},q);
s.start();
return s;
}},properties:{enabled:{init:true,check:d,apply:f},interval:{check:b,init:1000,apply:g}},members:{__dR:null,__dP:null,_applyInterval:function(k,l){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(m,n){if(n){window.clearInterval(this.__dR);
this.__dR=null;
}else if(m){this.__dR=window.setInterval(this.__dP,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(a){this.setInterval(a);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(o){this.stop();
this.startWith(o);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(i);
}})},destruct:function(){if(this.__dR){window.clearInterval(this.__dR);
}this.__dR=this.__dP=null;
}});
})();
(function(){var b="qx.ui.core.MChildrenHandling";
qx.Mixin.define(b,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(l){return this._indexOf(l);
},add:function(j,k){this._add(j,k);
},addAt:function(g,h,i){this._addAt(g,h,i);
},addBefore:function(m,n,o){this._addBefore(m,n,o);
},addAfter:function(d,e,f){this._addAfter(d,e,f);
},remove:function(p){this._remove(p);
},removeAt:function(c){return this._removeAt(c);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(a){a.getChildren=a._getChildren;
a.hasChildren=a._hasChildren;
a.indexOf=a._indexOf;
a.add=a._add;
a.addAt=a._addAt;
a.addBefore=a._addBefore;
a.addAfter=a._addAfter;
a.remove=a._remove;
a.removeAt=a._removeAt;
a.removeAll=a._removeAll;
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
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__eM:null,__eN:null,__eO:null,__eP:null,__eQ:null,__eR:null,__eS:null,getBounds:function(){return this.__eR||this.__eN||null;
},clearSeparators:function(){},renderSeparator:function(I,J){},renderLayout:function(A,top,B,C){var D;
{};
var E=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var E=this._getHeightForWidth(B);
}
if(E!=null&&E!==this.__eM){this.__eM=E;
qx.ui.core.queue.Layout.add(this);
return null;
}var G=this.__eN;

if(!G){G=this.__eN={};
}var F={};

if(A!==G.left||top!==G.top){F.position=true;
G.left=A;
G.top=top;
}
if(B!==G.width||C!==G.height){F.size=true;
G.width=B;
G.height=C;
}if(this.__eO){F.local=true;
delete this.__eO;
}
if(this.__eQ){F.margin=true;
delete this.__eQ;
}return F;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__eO;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__eO=true;
this.__eP=null;
},getSizeHint:function(bc){var bd=this.__eP;

if(bd){return bd;
}
if(bc===false){return null;
}bd=this.__eP=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__eM&&this.getHeight()==null){bd.height=this.__eM;
}if(bd.minWidth>bd.width){bd.width=bd.minWidth;
}
if(bd.maxWidth<bd.width){bd.width=bd.maxWidth;
}
if(!this.getAllowGrowX()){bd.maxWidth=bd.width;
}
if(!this.getAllowShrinkX()){bd.minWidth=bd.width;
}if(bd.minHeight>bd.height){bd.height=bd.minHeight;
}
if(bd.maxHeight<bd.height){bd.height=bd.maxHeight;
}
if(!this.getAllowGrowY()){bd.maxHeight=bd.height;
}
if(!this.getAllowShrinkY()){bd.minHeight=bd.height;
}return bd;
},_computeSizeHint:function(){var O=this.getMinWidth()||0;
var L=this.getMinHeight()||0;
var P=this.getWidth()||O;
var N=this.getHeight()||L;
var K=this.getMaxWidth()||Infinity;
var M=this.getMaxHeight()||Infinity;
return {minWidth:O,width:P,maxWidth:K,minHeight:L,height:N,maxHeight:M};
},_hasHeightForWidth:function(){var H=this._getLayout();

if(H){return H.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(Q){var R=this._getLayout();

if(R&&R.hasHeightForWidth()){return R.getHeightForWidth(Q);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__eQ=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__eR;
},setUserBounds:function(S,top,T,U){this.__eR={left:S,top:top,width:T,height:U};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__eR;
qx.ui.core.queue.Layout.add(this);
},__eT:{},setLayoutProperties:function(Y){if(Y==null){return;
}var ba=this.__eS;

if(!ba){ba=this.__eS={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(Y);
}for(var bb in Y){if(Y[bb]==null){delete ba[bb];
}else{ba[bb]=Y[bb];
}}},getLayoutProperties:function(){return this.__eS||this.__eT;
},clearLayoutProperties:function(){delete this.__eS;
},updateLayoutProperties:function(V){var W=this._getLayout();

if(W){var X;
{};
W.invalidateChildrenCache();
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
},clone:function(){var y=qx.core.Object.prototype.clone.call(this);
var z=this.__eS;

if(z){y.__eS=qx.lang.Object.clone(z);
}return y;
}},destruct:function(){this.$$parent=this.$$subparent=this.__eS=this.__eN=this.__eR=this.__eP=null;
}});
})();
(function(){var b="qx.ui.core.DecoratorFactory",a="$$nopool$$";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cn={};
},statics:{MAX_SIZE:15,__co:a},members:{__cn:null,getDecoratorElement:function(g){var l=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(g)){var j=g;
var i=qx.theme.manager.Decoration.getInstance().resolve(g);
}else{var j=l.__co;
i=g;
}var k=this.__cn;

if(k[j]&&k[j].length>0){var h=k[j].pop();
}else{var h=this._createDecoratorElement(i,j);
}h.$$pooled=false;
return h;
},poolDecorator:function(c){if(!c||c.$$pooled||c.isDisposed()){return;
}var f=qx.ui.core.DecoratorFactory;
var d=c.getId();

if(d==f.__co){c.dispose();
return;
}var e=this.__cn;

if(!e[d]){e[d]=[];
}
if(e[d].length>f.MAX_SIZE){c.dispose();
}else{c.$$pooled=true;
e[d].push(c);
}},_createDecoratorElement:function(m,n){var o=new qx.html.Decorator(m,n);
{};
return o;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__cn;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__cn=null;
}});
})();
(function(){var gq="px",gp="Boolean",go="qx.event.type.Mouse",gn="qx.event.type.Drag",gm="visible",gl="qx.event.type.Focus",gk="on",gj="Integer",gi="excluded",gh="qx.event.type.Data",fS="_applyPadding",fR="qx.event.type.Event",fQ="hidden",fP="contextmenu",fO="String",fN="tabIndex",fM="backgroundColor",fL="focused",fK="changeVisibility",fJ="mshtml",gx="hovered",gy="qx.event.type.KeySequence",gv="qx.client",gw="absolute",gt="drag",gu="div",gr="disabled",gs="move",gz="dragstart",gA="qx.dynlocale",ga="dragchange",fY="dragend",gc="resize",gb="Decorator",ge="zIndex",gd="opacity",gg="default",gf="Color",fX="changeToolTipText",fW="beforeContextmenuOpen",eA="_applyNativeContextMenu",eB="_applyBackgroundColor",eC="__dj",eD="_applyFocusable",eE="changeShadow",eF="qx.event.type.KeyInput",eG="createChildControl",eH="Font",eI="_applyShadow",eJ="_applyEnabled",gE="_applySelectable",gD="Number",gC="_applyKeepActive",gB="__dk",gI="_applyVisibility",gH="repeat",gG="qxDraggable",gF="syncAppearance",gK="paddingLeft",gJ="_applyDroppable",fj="#",fk="__ds",fh="qx.event.type.MouseWheel",fi="_applyCursor",fn="_applyDraggable",fo="changeTextColor",fl="$$widget",fm="changeContextMenu",ff="paddingTop",fg="changeSelectable",eR="hideFocus",eQ="none",eT="outline",eS="_applyAppearance",eN="_applyOpacity",eM="url(",eP=")",eO="qx.ui.core.Widget",eL="_applyFont",eK="cursor",ft="qxDroppable",fu="__du",fv="__dn",fw="changeZIndex",fp="changeEnabled",fq="changeFont",fr="_applyDecorator",fs="_applyZIndex",fx="_applyTextColor",fy="qx.ui.menu.Menu",fc="__do",fb="_applyToolTipText",fa="true",eY="widget",eX="changeDecorator",eW="_applyTabIndex",eV="changeAppearance",eU="shorthand",fe="__dw",fd="/",fz="",fA="_applyContextMenu",fB="paddingBottom",fC="changeNativeContextMenu",fD="qx.ui.tooltip.ToolTip",fE="qxKeepActive",fF="_applyKeepFocus",fG="__dp",fH="paddingRight",fI="changeBackgroundColor",fV="changeLocale",fU="qxKeepFocus",fT="qx/static/blank.gif";
qx.Class.define(eO,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__dj=this._createContainerElement();
this.__dk=this.__dv();
this.__dj.add(this.__dk);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:fR,disappear:fR,createChildControl:gh,resize:gh,move:gh,syncAppearance:gh,mousemove:go,mouseover:go,mouseout:go,mousedown:go,mouseup:go,click:go,dblclick:go,contextmenu:go,beforeContextmenuOpen:go,mousewheel:fh,keyup:gy,keydown:gy,keypress:gy,keyinput:eF,focus:gl,blur:gl,focusin:gl,focusout:gl,activate:gl,deactivate:gl,capture:fR,losecapture:fR,drop:gn,dragleave:gn,dragover:gn,drag:gn,dragstart:gn,dragend:gn,dragchange:gn,droprequest:gn},properties:{paddingTop:{check:gj,init:0,apply:fS,themeable:true},paddingRight:{check:gj,init:0,apply:fS,themeable:true},paddingBottom:{check:gj,init:0,apply:fS,themeable:true},paddingLeft:{check:gj,init:0,apply:fS,themeable:true},padding:{group:[ff,fH,fB,gK],mode:eU,themeable:true},zIndex:{nullable:true,init:null,apply:fs,event:fw,check:gj,themeable:true},decorator:{nullable:true,init:null,apply:fr,event:eX,check:gb,themeable:true},shadow:{nullable:true,init:null,apply:eI,event:eE,check:gb,themeable:true},backgroundColor:{nullable:true,check:gf,apply:eB,event:fI,themeable:true},textColor:{nullable:true,check:gf,apply:fx,event:fo,themeable:true,inheritable:true},font:{nullable:true,apply:eL,check:eH,event:fq,themeable:true,inheritable:true,dereference:true},opacity:{check:gD,apply:eN,themeable:true,nullable:true,init:null},cursor:{check:fO,apply:fi,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:fD,nullable:true},toolTipText:{check:fO,nullable:true,event:fX,apply:fb},toolTipIcon:{check:fO,nullable:true,event:fX},blockToolTip:{check:gp,init:false},visibility:{check:[gm,fQ,gi],init:gm,apply:gI,event:fK},enabled:{init:true,check:gp,inheritable:true,apply:eJ,event:fp},anonymous:{init:false,check:gp},tabIndex:{check:gj,nullable:true,apply:eW},focusable:{check:gp,init:false,apply:eD},keepFocus:{check:gp,init:false,apply:fF},keepActive:{check:gp,init:false,apply:gC},draggable:{check:gp,init:false,apply:fn},droppable:{check:gp,init:false,apply:gJ},selectable:{check:gp,init:false,event:fg,apply:gE},contextMenu:{check:fy,apply:fA,nullable:true,event:fm},nativeContextMenu:{check:gp,init:false,themeable:true,event:fC,apply:eA},appearance:{check:fO,init:eY,apply:eS,event:eV}},statics:{DEBUG:false,getWidgetByElement:function(cc){while(cc){var cd=cc.$$widget;
if(cd!=null){return qx.core.ObjectRegistry.fromHashCode(cd);
}try{cc=cc.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,bG){while(bG){if(parent==bG){return true;
}bG=bG.getLayoutParent();
}return false;
},__dl:new qx.ui.core.DecoratorFactory(),__dm:new qx.ui.core.DecoratorFactory()},members:{__dj:null,__dk:null,__dn:null,__do:null,__dp:null,__dq:null,__dr:null,__ds:null,_getLayout:function(){return this.__ds;
},_setLayout:function(de){{};

if(this.__ds){this.__ds.connectToWidget(null);
}
if(de){de.connectToWidget(this);
}this.__ds=de;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var dy=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(dy);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(dy);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__dt:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var dn=qx.theme.manager.Decoration.getInstance();
var dq=dn.resolve(a).getInsets();
var dp=dn.resolve(b).getInsets();

if(dq.top!=dp.top||dq.right!=dp.right||dq.bottom!=dp.bottom||dq.left!=dp.left){return true;
}return false;
},renderLayout:function(ed,top,ee,ef){var ep=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,ed,top,ee,ef);
if(!ep){return;
}var eh=this.getContainerElement();
var content=this.getContentElement();
var em=ep.size||this._updateInsets;
var eq=gq;
var en={};
if(ep.position){en.left=ed+eq;
en.top=top+eq;
}if(ep.size){en.width=ee+eq;
en.height=ef+eq;
}
if(ep.position||ep.size){eh.setStyles(en);
}
if(em||ep.local||ep.margin){var eg=this.getInsets();
var innerWidth=ee-eg.left-eg.right;
var innerHeight=ef-eg.top-eg.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var ej={};

if(this._updateInsets){ej.left=eg.left+eq;
ej.top=eg.top+eq;
}
if(em){ej.width=innerWidth+eq;
ej.height=innerHeight+eq;
}
if(em||this._updateInsets){content.setStyles(ej);
}
if(ep.size){var eo=this.__dp;

if(eo){eo.setStyles({width:ee+gq,height:ef+gq});
}}
if(ep.size||this._updateInsets){if(this.__dn){this.__dn.resize(ee,ef);
}}
if(ep.size){if(this.__do){var eg=this.__do.getInsets();
var ek=ee+eg.left+eg.right;
var ei=ef+eg.top+eg.bottom;
this.__do.resize(ek,ei);
}}
if(em||ep.local||ep.margin){if(this.__ds&&this.hasLayoutChildren()){this.__ds.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(ep.position&&this.hasListener(gs)){this.fireDataEvent(gs,this.getBounds());
}
if(ep.size&&this.hasListener(gc)){this.fireDataEvent(gc,this.getBounds());
}delete this._updateInsets;
return ep;
},__du:null,clearSeparators:function(){var gX=this.__du;

if(!gX){return;
}var gY=qx.ui.core.Widget.__dl;
var content=this.getContentElement();
var gW;

for(var i=0,l=gX.length;i<l;i++){gW=gX[i];
gY.poolDecorator(gW);
content.remove(gW);
}gX.length=0;
},renderSeparator:function(k,m){var n=qx.ui.core.Widget.__dl.getDecoratorElement(k);
this.getContentElement().add(n);
n.resize(m.width,m.height);
n.setStyles({left:m.left+gq,top:m.top+gq});
if(!this.__du){this.__du=[n];
}else{this.__du.push(n);
}},_computeSizeHint:function(){var dW=this.getWidth();
var dV=this.getMinWidth();
var dR=this.getMaxWidth();
var dU=this.getHeight();
var dS=this.getMinHeight();
var dT=this.getMaxHeight();
{};
var dX=this._getContentHint();
var dQ=this.getInsets();
var ea=dQ.left+dQ.right;
var dY=dQ.top+dQ.bottom;

if(dW==null){dW=dX.width+ea;
}
if(dU==null){dU=dX.height+dY;
}
if(dV==null){dV=ea;

if(dX.minWidth!=null){dV+=dX.minWidth;
}}
if(dS==null){dS=dY;

if(dX.minHeight!=null){dS+=dX.minHeight;
}}
if(dR==null){if(dX.maxWidth==null){dR=Infinity;
}else{dR=dX.maxWidth+ea;
}}
if(dT==null){if(dX.maxHeight==null){dT=Infinity;
}else{dT=dX.maxHeight+dY;
}}return {width:dW,minWidth:dV,maxWidth:dR,height:dU,minHeight:dS,maxHeight:dT};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__ds){this.__ds.invalidateLayoutCache();
}},_getContentHint:function(){var s=this.__ds;

if(s){if(this.hasLayoutChildren()){var r;
var t=s.getSizeHint();
{};
return t;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(Y){var bd=this.getInsets();
var bg=bd.left+bd.right;
var bf=bd.top+bd.bottom;
var be=Y-bg;
var bb=this._getLayout();

if(bb&&bb.hasHeightForWidth()){var ba=bb.getHeightForWidth(Y);
}else{ba=this._getContentHeightForWidth(be);
}var bc=ba+bf;
return bc;
},_getContentHeightForWidth:function(cl){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var bD=this.getPaddingRight();
var bF=this.getPaddingBottom();
var bE=this.getPaddingLeft();

if(this.__dn){var bC=this.__dn.getInsets();
{};
top+=bC.top;
bD+=bC.right;
bF+=bC.bottom;
bE+=bC.left;
}return {"top":top,"right":bD,"bottom":bF,"left":bE};
},getInnerSize:function(){var br=this.getBounds();

if(!br){return null;
}var bq=this.getInsets();
return {width:br.width-bq.left-bq.right,height:br.height-bq.top-bq.bottom};
},show:function(){this.setVisibility(gm);
},hide:function(){this.setVisibility(fQ);
},exclude:function(){this.setVisibility(gi);
},isVisible:function(){return this.getVisibility()===gm;
},isHidden:function(){return this.getVisibility()!==gm;
},isExcluded:function(){return this.getVisibility()===gi;
},isSeeable:function(){var dC=this.getContainerElement().getDomElement();

if(dC){return dC.offsetWidth>0;
}var dB=this;

do{if(!dB.isVisible()){return false;
}
if(dB.isRootWidget()){return true;
}dB=dB.getLayoutParent();
}while(dB);
return false;
},_createContainerElement:function(){var I={"$$widget":this.toHashCode()};
{};
var H={zIndex:0,position:gw};
return new qx.html.Element(gu,H,I);
},__dv:function(){var cC=this._createContentElement();
{};
cC.setStyles({"position":gw,"zIndex":10});
return cC;
},_createContentElement:function(){return new qx.html.Element(gu,{overflowX:fQ,overflowY:fQ});
},getContainerElement:function(){return this.__dj;
},getContentElement:function(){return this.__dk;
},getDecoratorElement:function(){return this.__dn||null;
},getShadowElement:function(){return this.__do||null;
},__dw:null,getLayoutChildren:function(){var F=this.__dw;

if(!F){return this.__dx;
}var G;

for(var i=0,l=F.length;i<l;i++){var E=F[i];

if(E.hasUserBounds()||E.isExcluded()){if(G==null){G=F.concat();
}qx.lang.Array.remove(G,E);
}}return G||F;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var c=this.__ds;

if(c){c.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var bs=this.__dw;

if(!bs){return false;
}var bt;

for(var i=0,l=bs.length;i<l;i++){bt=bs[i];

if(!bt.hasUserBounds()&&!bt.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__dx:[],_getChildren:function(){return this.__dw||this.__dx;
},_indexOf:function(dj){var dk=this.__dw;

if(!dk){return -1;
}return dk.indexOf(dj);
},_hasChildren:function(){var D=this.__dw;
return D!=null&&(!!D[0]);
},addChildrenToQueue:function(V){var W=this.__dw;

if(!W){return;
}var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
V[X.$$hash]=X;
X.addChildrenToQueue(V);
}},_add:function(dz,dA){if(dz.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,dz);
}
if(this.__dw){this.__dw.push(dz);
}else{this.__dw=[dz];
}this.__dy(dz,dA);
},_addAt:function(gN,gO,gP){if(!this.__dw){this.__dw=[];
}if(gN.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,gN);
}var gQ=this.__dw[gO];

if(gQ===gN){return gN.setLayoutProperties(gP);
}
if(gQ){qx.lang.Array.insertBefore(this.__dw,gN,gQ);
}else{this.__dw.push(gN);
}this.__dy(gN,gP);
},_addBefore:function(dD,dE,dF){{};

if(dD==dE){return;
}
if(!this.__dw){this.__dw=[];
}if(dD.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,dD);
}qx.lang.Array.insertBefore(this.__dw,dD,dE);
this.__dy(dD,dF);
},_addAfter:function(gT,gU,gV){{};

if(gT==gU){return;
}
if(!this.__dw){this.__dw=[];
}if(gT.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,gT);
}qx.lang.Array.insertAfter(this.__dw,gT,gU);
this.__dy(gT,gV);
},_remove:function(cV){if(!this.__dw){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__dw,cV);
this.__dz(cV);
},_removeAt:function(dI){if(!this.__dw){throw new Error("This widget has no children!");
}var dJ=this.__dw[dI];
qx.lang.Array.removeAt(this.__dw,dI);
this.__dz(dJ);
return dJ;
},_removeAll:function(){if(!this.__dw){return;
}var bh=this.__dw.concat();
this.__dw.length=0;

for(var i=bh.length-1;i>=0;i--){this.__dz(bh[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__dy:function(ds,dt){{};
var parent=ds.getLayoutParent();

if(parent&&parent!=this){parent._remove(ds);
}ds.setLayoutParent(this);
if(dt){ds.setLayoutProperties(dt);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(ds);
}},__dz:function(bB){{};

if(bB.getLayoutParent()!==this){throw new Error("Remove Error: "+bB+" is not a child of this widget!");
}bB.setLayoutParent(null);
if(this.__ds){this.__ds.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(bB);
}},capture:function(cI){this.getContainerElement().capture(cI);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(cm,cn,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dp){return;
}var df=this.__dp=new qx.html.Element;
{};
df.setStyles({position:gw,top:0,left:0,zIndex:7});
var dg=this.getBounds();

if(dg){this.__dp.setStyles({width:dg.width+gq,height:dg.height+gq});
}if(qx.core.Variant.isSet(gv,fJ)){df.setStyles({backgroundImage:eM+qx.util.ResourceManager.getInstance().toUri(fT)+eP,backgroundRepeat:gH});
}this.getContainerElement().add(df);
},_applyDecorator:function(cO,cP){{};
var cT=qx.ui.core.Widget.__dl;
var cR=this.getContainerElement();
if(!this.__dp&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(cP){cR.remove(this.__dn);
cT.poolDecorator(this.__dn);
}if(cO){var cS=this.__dn=cT.getDecoratorElement(cO);
cS.setStyle(ge,5);
var cQ=this.getBackgroundColor();
cS.tint(cQ);
cR.add(cS);
}else{delete this.__dn;
this._applyBackgroundColor(this.getBackgroundColor());
}if(cO&&!cP&&cQ){this.getContainerElement().setStyle(fM,null);
}if(this.__dt(cP,cO)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(cO){var cU=this.getBounds();

if(cU){cS.resize(cU.width,cU.height);
this.__dp&&
this.__dp.setStyles({width:cU.width+gq,height:cU.height+gq});
}}},_applyShadow:function(u,v){var C=qx.ui.core.Widget.__dm;
var x=this.getContainerElement();
if(v){x.remove(this.__do);
C.poolDecorator(this.__do);
}if(u){var z=this.__do=C.getDecoratorElement(u);
x.add(z);
var B=z.getInsets();
z.setStyles({left:(-B.left)+gq,top:(-B.top)+gq});
var A=this.getBounds();

if(A){var y=A.width+B.left+B.right;
var w=A.height+B.top+B.bottom;
z.resize(y,w);
}z.tint(null);
}else{delete this.__do;
}},_applyToolTipText:function(er,es){if(qx.core.Variant.isSet(gA,gk)){if(this.__dr){return;
}var et=qx.locale.Manager.getInstance();
this.__dr=et.addListener(fV,function(){if(er&&er.translate){this.setToolTipText(er.translate());
}},this);
}},_applyTextColor:function(eb,ec){},_applyZIndex:function(cK,cL){this.getContainerElement().setStyle(ge,cK==null?0:cK);
},_applyVisibility:function(bi,bj){var bk=this.getContainerElement();

if(bi===gm){bk.show();
}else{bk.hide();
}var parent=this.$$parent;

if(parent&&(bj==null||bi==null||bj===gi||bi===gi)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(cu,cv){this.getContainerElement().setStyle(gd,cu==1?null:cu);
if(qx.core.Variant.isSet(gv,fJ)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var cw=(cu==1||cu==null)?null:0.99;
this.getContentElement().setStyle(gd,cw);
}}},_applyCursor:function(dG,dH){if(dG==null&&!this.isSelectable()){dG=gg;
}this.getContainerElement().setStyle(eK,dG,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(bK,bL){var bM=this.getBackgroundColor();
var bO=this.getContainerElement();

if(this.__dn){this.__dn.tint(bM);
bO.setStyle(fM,null);
}else{var bN=qx.theme.manager.Color.getInstance().resolve(bM);
bO.setStyle(fM,bN);
}},_applyFont:function(dc,dd){},__dA:null,$$stateChanges:null,_forwardStates:null,hasState:function(dK){var dL=this.__dA;
return !!dL&&!!dL[dK];
},addState:function(bl){var bm=this.__dA;

if(!bm){bm=this.__dA={};
}
if(bm[bl]){return;
}this.__dA[bl]=true;
if(bl===gx){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bp=this.__dD;

if(forward&&forward[bl]&&bp){var bn;

for(var bo in bp){bn=bp[bo];

if(bn instanceof qx.ui.core.Widget){bp[bo].addState(bl);
}}}},removeState:function(d){var f=this.__dA;

if(!f||!f[d]){return;
}delete this.__dA[d];
if(d===gx){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var j=this.__dD;

if(forward&&forward[d]&&j){for(var h in j){var g=j[h];

if(g instanceof qx.ui.core.Widget){g.removeState(d);
}}}},replaceState:function(eu,ev){var ew=this.__dA;

if(!ew){ew=this.__dA={};
}
if(!ew[ev]){ew[ev]=true;
}
if(ew[eu]){delete ew[eu];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var ez=this.__dD;

if(forward&&forward[ev]&&ez){for(var ey in ez){var ex=ez[ey];

if(ex instanceof qx.ui.core.Widget){ex.replaceState(eu,ev);
}}}},__dB:null,__dC:null,syncAppearance:function(){var N=this.__dA;
var M=this.__dB;
var O=qx.theme.manager.Appearance.getInstance();
var K=qx.core.Property.$$method.setThemed;
var S=qx.core.Property.$$method.resetThemed;
if(this.__dC){delete this.__dC;
if(M){var J=O.styleFrom(M,N,null,this.getAppearance());
if(J){M=null;
}}}if(!M){var L=this;
var R=[];

do{R.push(L.$$subcontrol||L.getAppearance());
}while(L=L.$$subparent);
M=this.__dB=R.reverse().join(fd).replace(/#[0-9]+/g,fz);
}var P=O.styleFrom(M,N,null,this.getAppearance());

if(P){var Q;

if(J){for(var Q in J){if(P[Q]===undefined){this[S[Q]]();
}}}{};
for(var Q in P){P[Q]===undefined?this[S[Q]]():this[K[Q]](P[Q]);
}}else if(J){for(var Q in J){this[S[Q]]();
}}this.fireDataEvent(gF,this.__dA);
},_applyAppearance:function(T,U){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dq){qx.ui.core.queue.Appearance.add(this);
this.__dq=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__dC=true;
qx.ui.core.queue.Appearance.add(this);
var cz=this.__dD;

if(cz){var cx;

for(var cy in cz){cx=cz[cy];

if(cx instanceof qx.ui.core.Widget){cx.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var cJ=this;

while(cJ.getAnonymous()){cJ=cJ.getLayoutParent();

if(!cJ){return null;
}}return cJ;
},getFocusTarget:function(){var cb=this;

if(!cb.getEnabled()){return null;
}
while(cb.getAnonymous()||!cb.getFocusable()){cb=cb.getLayoutParent();

if(!cb||!cb.getEnabled()){return null;
}}return cb;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(bU,bV){var bW=this.getFocusElement();
if(bU){var bX=this.getTabIndex();

if(bX==null){bX=1;
}bW.setAttribute(fN,bX);
if(qx.core.Variant.isSet(gv,fJ)){bW.setAttribute(eR,fa);
}else{bW.setStyle(eT,eQ);
}}else{if(bW.isNativelyFocusable()){bW.setAttribute(fN,-1);
}else if(bV){bW.setAttribute(fN,null);
}}},_applyKeepFocus:function(cM){var cN=this.getFocusElement();
cN.setAttribute(fU,cM?gk:null);
},_applyKeepActive:function(bP){var bQ=this.getContainerElement();
bQ.setAttribute(fE,bP?gk:null);
},_applyTabIndex:function(bR){if(bR==null){bR=1;
}else if(bR<1||bR>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&bR!=null){this.getFocusElement().setAttribute(fN,bR);
}},_applySelectable:function(cj,ck){if(ck!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(cj);
this.getContentElement().setSelectable(cj);
},_applyEnabled:function(du,dv){if(du===false){this.addState(gr);
this.removeState(gx);
if(this.isFocusable()){this.removeState(fL);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(gr);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(co,cp,name){},_applyContextMenu:function(bY,ca){if(ca){ca.removeState(fP);

if(ca.getOpener()==this){ca.resetOpener();
}
if(!bY){this.removeListener(fP,this._onContextMenuOpen);
ca.removeListener(fK,this._onBeforeContextMenuOpen,this);
}}
if(bY){bY.setOpener(this);
bY.addState(fP);

if(!ca){this.addListener(fP,this._onContextMenuOpen);
bY.addListener(fK,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==gm&&this.hasListener(fW)){this.fireDataEvent(fW,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gL,gM){if(!this.isEnabled()&&gL===true){gL=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gL){this.addListener(gz,this._onDragStart);
this.addListener(gt,this._onDrag);
this.addListener(fY,this._onDragEnd);
this.addListener(ga,this._onDragChange);
}else{this.removeListener(gz,this._onDragStart);
this.removeListener(gt,this._onDrag);
this.removeListener(fY,this._onDragEnd);
this.removeListener(ga,this._onDragChange);
}this.getContainerElement().setAttribute(gG,gL?gk:null);
},_applyDroppable:function(cq,cr){if(!this.isEnabled()&&cq===true){cq=false;
}this.getContainerElement().setAttribute(ft,cq?gk:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(gg);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var bw=qx.ui.core.DragDropCursor.getInstance();
var bx=e.getCurrentAction();
bx?bw.setAction(bx):bw.resetAction();
},visualizeFocus:function(){this.addState(fL);
},visualizeBlur:function(){this.removeState(fL);
},scrollChildIntoView:function(cX,cY,da,db){this.scrollChildIntoViewX(cX,cY,db);
this.scrollChildIntoViewY(cX,da,db);
},scrollChildIntoViewX:function(by,bz,bA){this.getContentElement().scrollChildIntoViewX(by.getContainerElement(),bz,bA);
},scrollChildIntoViewY:function(bH,bI,bJ){this.getContentElement().scrollChildIntoViewY(bH.getContainerElement(),bI,bJ);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(dr){if(!this.__dD){return false;
}return !!this.__dD[dr];
},__dD:null,_getCreatedChildControls:function(){return this.__dD;
},getChildControl:function(o,p){if(!this.__dD){if(p){return null;
}this.__dD={};
}var q=this.__dD[o];

if(q){return q;
}
if(p===true){return null;
}return this._createChildControl(o);
},_showChildControl:function(dw){var dx=this.getChildControl(dw);
dx.show();
return dx;
},_excludeChildControl:function(cs){var ct=this.getChildControl(cs,true);

if(ct){ct.exclude();
}},_isChildControlVisible:function(dl){var dm=this.getChildControl(dl,true);

if(dm){return dm.isVisible();
}return false;
},_createChildControl:function(ce){if(!this.__dD){this.__dD={};
}else if(this.__dD[ce]){throw new Error("Child control '"+ce+"' already created!");
}var ci=ce.indexOf(fj);

if(ci==-1){var cf=this._createChildControlImpl(ce);
}else{var cf=this._createChildControlImpl(ce.substring(0,ci));
}
if(!cf){throw new Error("Unsupported control: "+ce);
}cf.$$subcontrol=ce;
cf.$$subparent=this;
var cg=this.__dA;
var forward=this._forwardStates;

if(cg&&forward&&cf instanceof qx.ui.core.Widget){for(var ch in cg){if(forward[ch]){cf.addState(ch);
}}}this.fireDataEvent(eG,cf);
return this.__dD[ce]=cf;
},_createChildControlImpl:function(cW){return null;
},_disposeChildControls:function(){var dP=this.__dD;

if(!dP){return;
}var dN=qx.ui.core.Widget;

for(var dO in dP){var dM=dP[dO];

if(!dN.contains(this,dM)){dM.destroy();
}else{dM.dispose();
}}delete this.__dD;
},_findTopControl:function(){var cF=this;

while(cF){if(!cF.$$subparent){return cF;
}cF=cF.$$subparent;
}return null;
},getContainerLocation:function(cD){var cE=this.getContainerElement().getDomElement();
return cE?qx.bom.element.Location.get(cE,cD):null;
},getContentLocation:function(cA){var cB=this.getContentElement().getDomElement();
return cB?qx.bom.element.Location.get(cB,cA):null;
},setDomLeft:function(dh){var di=this.getContainerElement().getDomElement();

if(di){di.style.left=dh+gq;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(gR){var gS=this.getContainerElement().getDomElement();

if(gS){gS.style.top=gR+gq;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(bu,top){var bv=this.getContainerElement().getDomElement();

if(bv){bv.style.left=bu+gq;
bv.style.top=top+gq;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var cG=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var cH=this.getChildren();

for(var i=0,l=cH.length;i<l;i++){cG.add(cH[i].clone());
}}return cG;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(gA,gk)){if(this.__dr){qx.locale.Manager.getInstance().removeListenerById(this.__dr);
}}this.getContainerElement().setAttribute(fl,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var bT=qx.ui.core.Widget;
var bS=this.getContainerElement();

if(this.__dn){bS.remove(this.__dn);
bT.__dl.poolDecorator(this.__dn);
}
if(this.__do){bS.remove(this.__do);
bT.__dm.poolDecorator(this.__do);
}this.clearSeparators();
this.__dn=this.__do=this.__du=null;
}else{this._disposeArray(fu);
this._disposeObjects(fv,fc);
}this._disposeArray(fe);
this.__dA=this.__dD=null;
this._disposeObjects(fk,eC,gB,fG);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(h){qx.ui.core.Widget.call(this);

if(h!=null){this._setLayout(h);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(e){this.fireNonBubblingEvent(b,qx.event.type.Data,[e]);
},_afterRemoveChild:function(i){this.fireNonBubblingEvent(a,qx.event.type.Data,[i]);
}},defer:function(f,g){qx.ui.core.MChildrenHandling.remap(g);
qx.ui.core.MLayoutHandling.remap(g);
}});
})();
(function(){var m="keep-align",l="Integer",k="interval",j="direct",i="disappear",h="best-fit",g="mouse",f="bottom-left",e="Boolean",d="bottom-right",A="widget",z="qx.ui.core.MPlacement",y="left-top",x="offsetRight",w="shorthand",v="offsetLeft",u="top-left",t="appear",s="offsetBottom",r="top-right",p="offsetTop",q="right-bottom",n="right-top",o="left-bottom";
qx.Mixin.define(z,{properties:{position:{check:[u,r,f,d,y,o,n,q],init:f,themeable:true},placeMethod:{check:[A,g],init:g,themeable:true},domMove:{check:e,init:false},placementModeX:{check:[j,m,h],init:m,themeable:true},placementModeY:{check:[j,m,h],init:m,themeable:true},offsetLeft:{check:l,init:0,themeable:true},offsetTop:{check:l,init:0,themeable:true},offsetRight:{check:l,init:0,themeable:true},offsetBottom:{check:l,init:0,themeable:true},offset:{group:[p,x,s,v],mode:w,themeable:true}},members:{__hr:null,__hs:null,__ht:null,getLayoutLocation:function(S){var V,U,W,top;
U=S.getBounds();
W=U.left;
top=U.top;
var X=U;
S=S.getLayoutParent();

while(S&&!S.isRootWidget()){U=S.getBounds();
W+=U.left;
top+=U.top;
V=S.getInsets();
W+=V.left;
top+=V.top;
S=S.getLayoutParent();
}if(S.isRootWidget()){var T=S.getContainerLocation();

if(T){W+=T.left;
top+=T.top;
}}return {left:W,top:top,right:W+X.width,bottom:top+X.height};
},moveTo:function(L,top){if(this.getDomMove()){this.setDomPosition(L,top);
}else{this.setLayoutProperties({left:L,top:top});
}},placeToWidget:function(a,b){if(b){this.__hu();
this.__hr=qx.lang.Function.bind(this.placeToWidget,this,a,false);
qx.event.Idle.getInstance().addListener(k,this.__hr);
this.__ht=function(){this.__hu();
};
this.addListener(i,this.__ht,this);
}var c=a.getContainerLocation()||this.getLayoutLocation(a);
this.__hw(c);
},__hu:function(){if(this.__hr){qx.event.Idle.getInstance().removeListener(k,this.__hr);
this.__hr=null;
}
if(this.__ht){this.removeListener(i,this.__ht,this);
this.__ht=null;
}},placeToMouse:function(event){var C=event.getDocumentLeft();
var top=event.getDocumentTop();
var B={left:C,top:top,right:C,bottom:top};
this.__hw(B);
},placeToElement:function(D,E){var location=qx.bom.element.Location.get(D);
var F={left:location.left,top:location.top,right:location.left+D.offsetWidth,bottom:location.top+D.offsetHeight};
if(E){this.__hr=qx.lang.Function.bind(this.placeToElement,this,D,false);
qx.event.Idle.getInstance().addListener(k,this.__hr);
this.addListener(i,function(){if(this.__hr){qx.event.Idle.getInstance().removeListener(k,this.__hr);
this.__hr=null;
}},this);
}this.__hw(F);
},placeToPoint:function(O){var P={left:O.left,top:O.top,right:O.left,bottom:O.top};
this.__hw(P);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__hv:function(H){var I=null;

if(this._computePlacementSize){var I=this._computePlacementSize();
}else if(this.isVisible()){var I=this.getBounds();
}
if(I==null){this.addListenerOnce(t,function(){this.__hv(H);
},this);
}else{H.call(this,I);
}},__hw:function(G){this.__hv(function(J){var K=qx.util.placement.Placement.compute(J,this.getLayoutParent().getBounds(),G,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(K.left,K.top);
});
},setSmart:function(M){{};
var N=M?m:j;
this.set({placementModeX:N,placementModeY:N});
},getSmart:function(){{};
var Q=this.getPlacementModeX()==m?true:false;
var R=this.getPlacementModeY()==m?true:false;
return Q&&R;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){this.__hu();
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
(function(){var o="atom",n="Integer",m="String",l="_applyRich",k="qx.ui.tooltip.ToolTip",j="_applyIcon",i="tooltip",h="qx.ui.core.Widget",g="mouseover",f="Boolean",d="_applyLabel";
qx.Class.define(k,{extend:qx.ui.popup.Popup,construct:function(x,y){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(o);
if(x!=null){this.setLabel(x);
}
if(y!=null){this.setIcon(y);
}this.addListener(g,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:i},showTimeout:{check:n,init:700,themeable:true},hideTimeout:{check:n,init:4000,themeable:true},label:{check:m,nullable:true,apply:d},icon:{check:m,nullable:true,apply:j,themeable:true},rich:{check:f,init:false,apply:l},opener:{check:h,nullable:true}},members:{_createChildControlImpl:function(p){var q;

switch(p){case o:q=new qx.ui.basic.Atom;
this._add(q);
break;
}return q||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,p);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(u,v){var w=this.getChildControl(o);
u==null?w.resetIcon():w.setIcon(u);
},_applyLabel:function(r,s){var t=this.getChildControl(o);
r==null?t.resetLabel():t.setLabel(r);
},_applyRich:function(a,b){var c=this.getChildControl(o);
c.setRich(a);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__gN:{},remove:function(o){delete this.__gN[o.$$hash];
},add:function(c){this.__gN[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var k=this.__gQ();
for(var i=k.length-1;i>=0;i--){var l=k[i];
if(l.hasValidLayout()){continue;
}if(l.isRootWidget()&&!l.hasUserBounds()){var n=l.getSizeHint();
l.renderLayout(0,0,n.width,n.height);
}else{var m=l.getBounds();
l.renderLayout(m.left,m.top,m.width,m.height);
}}},getNestingLevel:function(p){var q=this.__gP;
var s=0;
var parent=p;
while(true){if(q[parent.$$hash]!=null){s+=q[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
s+=1;
}var r=s;

while(p&&p!==parent){q[p.$$hash]=r--;
p=p.$$parent;
}return s;
},__gO:function(){var j=qx.ui.core.queue.Visibility;
this.__gP={};
var h=[];
var g=this.__gN;
var d,f;

for(var e in g){d=g[e];

if(j.isVisible(d)){f=this.getNestingLevel(d);
if(!h[f]){h[f]={};
}h[f][e]=d;
delete g[e];
}}return h;
},__gQ:function(){var w=[];
var y=this.__gO();

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
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this.__jo=k;
this.__jp=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jo:null,__jp:null,canHandleEvent:function(h,i){},registerEvent:function(b,c,d){},unregisterEvent:function(e,f,g){}},destruct:function(){this.__jo=this.__jp=null;
},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__fi={};
this.__fj=qx.lang.Function.bind(this.__fn,this);
this.__fk=false;
},members:{__fl:null,__fm:null,__fi:null,__fk:null,__fj:null,schedule:function(g){if(this.__fl==null){this.__fl=window.setTimeout(this.__fj,0);
}var h=g.toHashCode();
if(this.__fm&&this.__fm[h]){return;
}this.__fi[h]=g;
this.__fk=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__fm&&this.__fm[f]){this.__fm[f]=null;
return;
}delete this.__fi[f];
if(qx.lang.Object.isEmpty(this.__fi)&&this.__fl!=null){window.clearTimeout(this.__fl);
this.__fl=null;
}},__fn:qx.event.GlobalError.observeMethod(function(){this.__fl=null;
while(this.__fk){this.__fm=qx.lang.Object.clone(this.__fi);
this.__fi={};
this.__fk=false;

for(var d in this.__fm){var c=this.__fm[d];

if(c){this.__fm[d]=null;
c.call();
}}}this.__fm=null;
})},destruct:function(){if(this.__fl!=null){window.clearTimeout(this.__fl);
}this.__fj=this.__fi=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(d,e){qx.core.Object.call(this);
this.__gI=d;
this.__gJ=e||null;
this.__gK=qx.util.DeferredCallManager.getInstance();
},members:{__gI:null,__gJ:null,__gK:null,cancel:function(){this.__gK.cancel(this);
},schedule:function(){this.__gK.schedule(this);
},call:function(){this.__gJ?this.__gI.apply(this.__gJ):this.__gI();
}},destruct:function(b,c){this.cancel();
this.__gJ=this.__gI=this.__gK=null;
}});
})();
(function(){var cR="element",cQ="qx.client",cP="qxSelectable",cO="off",cN="on",cM="div",cL="",cK="mshtml",cJ="none",cI="scroll",dl="text",dk="qx.html.Element",dj="|capture|",di="activate",dh="blur",dg="deactivate",df="capture",de="userSelect",dd="__cR",dc="-moz-none",cY="visible",da="releaseCapture",cW="|bubble|",cX="tabIndex",cU="focus",cV="MozUserSelect",cS="normal",cT="hidden";
qx.Class.define(dk,{extend:qx.core.Object,construct:function(cr,cs,ct){qx.core.Object.call(this);
this.__cv=cr||cM;
this.__cw=cs||null;
this.__cx=ct||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__cy:{},_scheduleFlush:function(E){qx.html.Element.__dd.schedule();
},flush:function(){var bA;
{};
var bs=this.__cz();
var br=bs.getFocus();

if(br&&this.__cD(br)){bs.blur(br);
}var bH=bs.getActive();

if(bH&&this.__cD(bH)){qx.bom.Element.deactivate(bH);
}var bv=this.__cB();

if(bv&&this.__cD(bv)){qx.bom.Element.releaseCapture(bv);
}var bB=[];
var bC=this._modified;

for(var bz in bC){bA=bC[bz];
if(bA.__cV()){if(bA.__cE&&qx.dom.Hierarchy.isRendered(bA.__cE)){bB.push(bA);
}else{{};
bA.__cU();
}delete bC[bz];
}}
for(var i=0,l=bB.length;i<l;i++){bA=bB[i];
{};
bA.__cU();
}var bx=this._visibility;

for(var bz in bx){bA=bx[bz];
var bD=bA.__cE;

if(!bD){delete bx[bz];
continue;
}{};
if(!bA.$$disposed){bD.style.display=bA.__cH?cL:cJ;
if(qx.core.Variant.isSet(cQ,cK)){if(!(document.documentMode>=8)){bD.style.visibility=bA.__cH?cY:cT;
}}}delete bx[bz];
}var scroll=this._scroll;

for(var bz in scroll){bA=scroll[bz];
var bI=bA.__cE;

if(bI&&bI.offsetWidth){var bu=true;
if(bA.__cK!=null){bA.__cE.scrollLeft=bA.__cK;
delete bA.__cK;
}if(bA.__cL!=null){bA.__cE.scrollTop=bA.__cL;
delete bA.__cL;
}var bE=bA.__cI;

if(bE!=null){var by=bE.element.getDomElement();

if(by&&by.offsetWidth){qx.bom.element.Scroll.intoViewX(by,bI,bE.align);
delete bA.__cI;
}else{bu=false;
}}var bF=bA.__cJ;

if(bF!=null){var by=bF.element.getDomElement();

if(by&&by.offsetWidth){qx.bom.element.Scroll.intoViewY(by,bI,bF.align);
delete bA.__cJ;
}else{bu=false;
}}if(bu){delete scroll[bz];
}}}var bt={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bG=this._actions[i];
var bD=bG.element.__cE;

if(!bD||!bt[bG.type]&&!bG.element.__cV()){continue;
}var bw=bG.args;
bw.unshift(bD);
qx.bom.Element[bG.type].apply(qx.bom.Element,bw);
}this._actions=[];
for(var bz in this.__cy){var bq=this.__cy[bz];
var bI=bq.element.__cE;

if(bI){qx.bom.Selection.set(bI,bq.start,bq.end);
delete this.__cy[bz];
}}qx.event.handler.Appear.refresh();
},__cz:function(){if(!this.__cA){var cx=qx.event.Registration.getManager(window);
this.__cA=cx.getHandler(qx.event.handler.Focus);
}return this.__cA;
},__cB:function(){if(!this.__cC){var w=qx.event.Registration.getManager(window);
this.__cC=w.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__cC.getCaptureElement();
},__cD:function(cv){var cw=qx.core.ObjectRegistry.fromHashCode(cv.$$element);
return cw&&!cw.__cV();
}},members:{__cv:null,__cE:null,__cF:false,__cG:true,__cH:true,__cI:null,__cJ:null,__cK:null,__cL:null,__cM:null,__cN:null,__cO:null,__cw:null,__cx:null,__cP:null,__cQ:null,__cR:null,__cS:null,__cT:null,_scheduleChildrenUpdate:function(){if(this.__cS){return;
}this.__cS=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cR);
},_createDomElement:function(){return qx.bom.Element.create(this.__cv);
},__cU:function(){{};
var ca=this.__cR;

if(ca){var length=ca.length;
var cb;

for(var i=0;i<length;i++){cb=ca[i];

if(cb.__cH&&cb.__cG&&!cb.__cE){cb.__cU();
}}}
if(!this.__cE){this.__cE=this._createDomElement();
this.__cE.$$element=this.$$hash;
this._copyData(false);

if(ca&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__cS){this._syncChildren();
}}delete this.__cS;
},_insertChildren:function(){var bn=this.__cR;
var length=bn.length;
var bp;

if(length>2){var bo=document.createDocumentFragment();

for(var i=0;i<length;i++){bp=bn[i];

if(bp.__cE&&bp.__cG){bo.appendChild(bp.__cE);
}}this.__cE.appendChild(bo);
}else{var bo=this.__cE;

for(var i=0;i<length;i++){bp=bn[i];

if(bp.__cE&&bp.__cG){bo.appendChild(bp.__cE);
}}}},_syncChildren:function(){var be;
var bj=qx.core.ObjectRegistry;
var ba=this.__cR;
var bh=ba.length;
var bb;
var bf;
var bd=this.__cE;
var bg=bd.childNodes;
var bc=0;
var bi;
{};
for(var i=bg.length-1;i>=0;i--){bi=bg[i];
bf=bj.fromHashCode(bi.$$element);

if(!bf||!bf.__cG||bf.__cT!==this){bd.removeChild(bi);
{};
}}for(var i=0;i<bh;i++){bb=ba[i];
if(bb.__cG){bf=bb.__cE;
bi=bg[bc];

if(!bf){continue;
}if(bf!=bi){if(bi){bd.insertBefore(bf,bi);
}else{bd.appendChild(bf);
}{};
}bc++;
}}{};
},_copyData:function(o){var s=this.__cE;
var r=this.__cx;

if(r){var p=qx.bom.element.Attribute;

for(var t in r){p.set(s,t,r[t]);
}}var r=this.__cw;

if(r){var q=qx.bom.element.Style;

if(o){q.setStyles(s,r);
}else{q.setCss(s,q.compile(r));
}}var r=this.__cP;

if(r){for(var t in r){this._applyProperty(t,r[t]);
}}var r=this.__cQ;

if(r){qx.event.Registration.getManager(s).importListeners(s,r);
delete this.__cQ;
}},_syncData:function(){var dI=this.__cE;
var dH=qx.bom.element.Attribute;
var dF=qx.bom.element.Style;
var dG=this.__cN;

if(dG){var dL=this.__cx;

if(dL){var dJ;

for(var dK in dG){dJ=dL[dK];

if(dJ!==undefined){dH.set(dI,dK,dJ);
}else{dH.reset(dI,dK);
}}}this.__cN=null;
}var dG=this.__cM;

if(dG){var dL=this.__cw;

if(dL){var dE={};

for(var dK in dG){dE[dK]=dL[dK];
}dF.setStyles(dI,dE);
}this.__cM=null;
}var dG=this.__cO;

if(dG){var dL=this.__cP;

if(dL){var dJ;

for(var dK in dG){this._applyProperty(dK,dL[dK]);
}}this.__cO=null;
}},__cV:function(){var ea=this;
while(ea){if(ea.__cF){return true;
}
if(!ea.__cG||!ea.__cH){return false;
}ea=ea.__cT;
}return false;
},__cW:function(dY){if(dY.__cT===this){throw new Error("Child is already in: "+dY);
}
if(dY.__cF){throw new Error("Root elements could not be inserted into other ones.");
}if(dY.__cT){dY.__cT.remove(dY);
}dY.__cT=this;
if(!this.__cR){this.__cR=[];
}if(this.__cE){this._scheduleChildrenUpdate();
}},__cX:function(z){if(z.__cT!==this){throw new Error("Has no child: "+z);
}if(this.__cE){this._scheduleChildrenUpdate();
}delete z.__cT;
},__cY:function(g){if(g.__cT!==this){throw new Error("Has no child: "+g);
}if(this.__cE){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__cR||null;
},getChild:function(dT){var dU=this.__cR;
return dU&&dU[dT]||null;
},hasChildren:function(){var ch=this.__cR;
return ch&&ch[0]!==undefined;
},indexOf:function(F){var G=this.__cR;
return G?G.indexOf(F):-1;
},hasChild:function(cE){var cF=this.__cR;
return cF&&cF.indexOf(cE)!==-1;
},add:function(bY){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__cW(arguments[i]);
}this.__cR.push.apply(this.__cR,arguments);
}else{this.__cW(bY);
this.__cR.push(bY);
}return this;
},addAt:function(dw,dx){this.__cW(dw);
qx.lang.Array.insertAt(this.__cR,dw,dx);
return this;
},remove:function(c){var d=this.__cR;

if(!d){return;
}
if(arguments[1]){var f;

for(var i=0,l=arguments.length;i<l;i++){f=arguments[i];
this.__cX(f);
qx.lang.Array.remove(d,f);
}}else{this.__cX(c);
qx.lang.Array.remove(d,c);
}return this;
},removeAt:function(bk){var bl=this.__cR;

if(!bl){throw new Error("Has no children!");
}var bm=bl[bk];

if(!bm){throw new Error("Has no child at this position!");
}this.__cX(bm);
qx.lang.Array.removeAt(this.__cR,bk);
return this;
},removeAll:function(){var cC=this.__cR;

if(cC){for(var i=0,l=cC.length;i<l;i++){this.__cX(cC[i]);
}cC.length=0;
}return this;
},getParent:function(){return this.__cT||null;
},insertInto:function(parent,Y){parent.__cW(this);

if(Y==null){parent.__cR.push(this);
}else{qx.lang.Array.insertAt(this.__cR,this,Y);
}return this;
},insertBefore:function(bQ){var parent=bQ.__cT;
parent.__cW(this);
qx.lang.Array.insertBefore(parent.__cR,this,bQ);
return this;
},insertAfter:function(P){var parent=P.__cT;
parent.__cW(this);
qx.lang.Array.insertAfter(parent.__cR,this,P);
return this;
},moveTo:function(cy){var parent=this.__cT;
parent.__cY(this);
var cz=parent.__cR.indexOf(this);

if(cz===cy){throw new Error("Could not move to same index!");
}else if(cz<cy){cy--;
}qx.lang.Array.removeAt(parent.__cR,cz);
qx.lang.Array.insertAt(parent.__cR,this,cy);
return this;
},moveBefore:function(bX){var parent=this.__cT;
return this.moveTo(parent.__cR.indexOf(bX));
},moveAfter:function(D){var parent=this.__cT;
return this.moveTo(parent.__cR.indexOf(D)+1);
},free:function(){var parent=this.__cT;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__cR){return;
}parent.__cX(this);
qx.lang.Array.remove(parent.__cR,this);
return this;
},getDomElement:function(){return this.__cE||null;
},getNodeName:function(){return this.__cv;
},setNodeName:function(name){this.__cv=name;
},setRoot:function(cu){this.__cF=cu;
},useMarkup:function(cA){if(this.__cE){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(cQ,cK)){var cB=document.createElement(cM);
}else{var cB=qx.bom.Element.getHelperElement();
}cB.innerHTML=cA;
this.useElement(cB.firstChild);
return this.__cE;
},useElement:function(cD){if(this.__cE){throw new Error("Could not overwrite existing element!");
}this.__cE=cD;
this.__cE.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var cf=this.getAttribute(cX);

if(cf>=1){return true;
}var ce=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(cf>=0&&ce[this.__cv]){return true;
}return false;
},setSelectable:qx.core.Variant.select(cQ,{"webkit":function(v){this.setAttribute(cP,v?cN:cO);
this.setStyle(de,v?cS:cJ);
},"gecko":function(A){this.setAttribute(cP,A?cN:cO);
this.setStyle(cV,A?dl:dc);
},"default":function(M){this.setAttribute(cP,M?cN:cO);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__cv];
},include:function(){if(this.__cG){return;
}delete this.__cG;

if(this.__cT){this.__cT._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__cG){return;
}this.__cG=false;

if(this.__cT){this.__cT._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__cG===true;
},show:function(){if(this.__cH){return;
}
if(this.__cE){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cR);
}if(this.__cT){this.__cT._scheduleChildrenUpdate();
}delete this.__cH;
},hide:function(){if(!this.__cH){return;
}
if(this.__cE){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cR);
}this.__cH=false;
},isVisible:function(){return this.__cH===true;
},scrollChildIntoViewX:function(H,I,J){var K=this.__cE;
var L=H.getDomElement();

if(J!==false&&K&&K.offsetWidth&&L&&L.offsetWidth){qx.bom.element.Scroll.intoViewX(L,K,I);
}else{this.__cI={element:H,align:I};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cR);
}delete this.__cK;
},scrollChildIntoViewY:function(Q,R,S){var T=this.__cE;
var U=Q.getDomElement();

if(S!==false&&T&&T.offsetWidth&&U&&U.offsetWidth){qx.bom.element.Scroll.intoViewY(U,T,R);
}else{this.__cJ={element:Q,align:R};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cR);
}delete this.__cL;
},scrollToX:function(x,dp){var dq=this.__cE;

if(dp!==true&&dq&&dq.offsetWidth){dq.scrollLeft=x;
}else{this.__cK=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cR);
}delete this.__cI;
},getScrollX:function(){var O=this.__cE;

if(O){return O.scrollLeft;
}return this.__cK||0;
},scrollToY:function(y,dy){var dz=this.__cE;

if(dy!==true&&dz&&dz.offsetWidth){dz.scrollTop=y;
}else{this.__cL=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cR);
}delete this.__cJ;
},getScrollY:function(){var cG=this.__cE;

if(cG){return cG.scrollTop;
}return this.__cL||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(cI,this.__db,this);
},enableScrolling:function(){this.removeListener(cI,this.__db,this);
},__da:null,__db:function(e){if(!this.__da){this.__da=true;
this.__cE.scrollTop=0;
this.__cE.scrollLeft=0;
delete this.__da;
}},getTextSelection:function(){var cH=this.__cE;

if(cH){return qx.bom.Selection.get(cH);
}return null;
},getTextSelectionLength:function(){var eb=this.__cE;

if(eb){return qx.bom.Selection.getLength(eb);
}return null;
},getTextSelectionStart:function(){var dD=this.__cE;

if(dD){return qx.bom.Selection.getStart(dD);
}return null;
},getTextSelectionEnd:function(){var V=this.__cE;

if(V){return qx.bom.Selection.getEnd(V);
}return null;
},setTextSelection:function(dA,dB){var dC=this.__cE;

if(dC){qx.bom.Selection.set(dC,dA,dB);
return;
}qx.html.Element.__cy[this.toHashCode()]={element:this,start:dA,end:dB};
qx.html.Element._scheduleFlush(cR);
},clearTextSelection:function(){var N=this.__cE;

if(N){qx.bom.Selection.clear(N);
}delete qx.html.Element.__cy[this.toHashCode()];
},__dc:function(cl,cm){var cn=qx.html.Element._actions;
cn.push({type:cl,element:this,args:cm||[]});
qx.html.Element._scheduleFlush(cR);
},focus:function(){this.__dc(cU);
},blur:function(){this.__dc(dh);
},activate:function(){this.__dc(di);
},deactivate:function(){this.__dc(dg);
},capture:function(dM){this.__dc(df,[dM!==false]);
},releaseCapture:function(){this.__dc(da);
},setStyle:function(bR,bS,bT){if(!this.__cw){this.__cw={};
}
if(this.__cw[bR]==bS){return;
}
if(bS==null){delete this.__cw[bR];
}else{this.__cw[bR]=bS;
}if(this.__cE){if(bT){qx.bom.element.Style.set(this.__cE,bR,bS);
return this;
}if(!this.__cM){this.__cM={};
}this.__cM[bR]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cR);
}return this;
},setStyles:function(h,j){var k=qx.bom.element.Style;

if(!this.__cw){this.__cw={};
}
if(this.__cE){if(!this.__cM){this.__cM={};
}
for(var n in h){var m=h[n];

if(this.__cw[n]==m){continue;
}
if(m==null){delete this.__cw[n];
}else{this.__cw[n]=m;
}if(j){k.set(this.__cE,n,m);
continue;
}this.__cM[n]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cR);
}else{for(var n in h){var m=h[n];

if(this.__cw[n]==m){continue;
}
if(m==null){delete this.__cw[n];
}else{this.__cw[n]=m;
}}}return this;
},removeStyle:function(B,C){this.setStyle(B,null,C);
},getStyle:function(b){return this.__cw?this.__cw[b]:null;
},getAllStyles:function(){return this.__cw||null;
},setAttribute:function(dV,dW,dX){if(!this.__cx){this.__cx={};
}
if(this.__cx[dV]==dW){return;
}
if(dW==null){delete this.__cx[dV];
}else{this.__cx[dV]=dW;
}if(this.__cE){if(dX){qx.bom.element.Attribute.set(this.__cE,dV,dW);
return this;
}if(!this.__cN){this.__cN={};
}this.__cN[dV]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cR);
}return this;
},setAttributes:function(bU,bV){for(var bW in bU){this.setAttribute(bW,bU[bW],bV);
}return this;
},removeAttribute:function(cc,cd){this.setAttribute(cc,null,cd);
},getAttribute:function(u){return this.__cx?this.__cx[u]:null;
},_applyProperty:function(name,cg){},_setProperty:function(co,cp,cq){if(!this.__cP){this.__cP={};
}
if(this.__cP[co]==cp){return;
}
if(cp==null){delete this.__cP[co];
}else{this.__cP[co]=cp;
}if(this.__cE){if(cq){this._applyProperty(co,cp);
return this;
}if(!this.__cO){this.__cO={};
}this.__cO[co]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cR);
}return this;
},_removeProperty:function(dm,dn){this._setProperty(dm,null,dn);
},_getProperty:function(ci){var cj=this.__cP;

if(!cj){return null;
}var ck=cj[ci];
return ck==null?null:ck;
},addListener:function(dN,dO,self,dP){var dQ;

if(this.$$disposed){return null;
}{};

if(this.__cE){return qx.event.Registration.addListener(this.__cE,dN,dO,self,dP);
}
if(!this.__cQ){this.__cQ={};
}
if(dP==null){dP=false;
}var dR=qx.event.Manager.getNextUniqueId();
var dS=dN+(dP?dj:cW)+dR;
this.__cQ[dS]={type:dN,listener:dO,self:self,capture:dP,unique:dR};
return dS;
},removeListener:function(bJ,bK,self,bL){var bM;

if(this.$$disposed){return null;
}{};

if(this.__cE){qx.event.Registration.removeListener(this.__cE,bJ,bK,self,bL);
}else{var bO=this.__cQ;
var bN;

if(bL==null){bL=false;
}
for(var bP in bO){bN=bO[bP];
if(bN.listener===bK&&bN.self===self&&bN.capture===bL&&bN.type===bJ){delete bO[bP];
break;
}}}return this;
},removeListenerById:function(X){if(this.$$disposed){return null;
}
if(this.__cE){qx.event.Registration.removeListenerById(this.__cE,X);
}else{delete this.__cQ[X];
}return this;
},hasListener:function(dr,ds){if(this.$$disposed){return false;
}
if(this.__cE){return qx.event.Registration.hasListener(this.__cE,dr,ds);
}var du=this.__cQ;
var dt;

if(ds==null){ds=false;
}
for(var dv in du){dt=du[dv];
if(dt.capture===ds&&dt.type===dr){return true;
}}return false;
}},defer:function(a){a.__dd=new qx.util.DeferredCall(a.flush,a);
},destruct:function(){var W=this.__cE;

if(W){qx.event.Registration.getManager(W).removeAllListeners(W);
W.$$element=cL;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__cT;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(dd);
this.__cx=this.__cw=this.__cQ=this.__cP=this.__cN=this.__cM=this.__cO=this.__cE=this.__cT=this.__cI=this.__cJ=null;
}});
})();
(function(){var b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__jQ:false,__jR:{},__jS:0,MAX_RETRIES:10,scheduleFlush:function(f){var self=qx.ui.core.queue.Manager;
self.__jR[f]=true;

if(!self.__jQ){self.__jV.schedule();
self.__jQ=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__jT){return;
}self.__jT=true;
self.__jV.cancel();
var g=self.__jR;
self.__jU(function(){while(g.visibility||g.widget||g.appearance||g.layout||g.element){if(g.widget){delete g.widget;
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
}}},function(){self.__jQ=false;
});
self.__jU(function(){if(g.dispose){delete g.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__jT=false;
});
self.__jS=0;
},__jU:function(c,d){var self=qx.ui.core.queue.Manager;

try{c();
}catch(e){{};
self.__jQ=false;
self.__jT=false;
self.__jS+=1;

if(self.__jS<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__jS-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{d();
}}},defer:function(h){h.__jV=new qx.util.DeferredCall(h.flush);
qx.html.Element._scheduleFlush=h.scheduleFlush;
qx.event.Registration.addListener(window,a,h.flush);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(c){this._manager=c;
},members:{_getParent:function(v){throw new Error("Missing implementation");
},canDispatchEvent:function(w,event,x){return event.getBubbles();
},dispatchEvent:function(d,event,e){var parent=d;
var p=this._manager;
var m,t;
var k;
var o,r;
var q;
var s=[];
m=p.getListeners(d,e,true);
t=p.getListeners(d,e,false);

if(m){s.push(m);
}
if(t){s.push(t);
}var parent=this._getParent(d);
var g=[];
var f=[];
var h=[];
var n=[];
while(parent!=null){m=p.getListeners(parent,e,true);

if(m){h.push(m);
n.push(parent);
}t=p.getListeners(parent,e,false);

if(t){g.push(t);
f.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=h.length-1;i>=0;i--){q=n[i];
event.setCurrentTarget(q);
k=h[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||q;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(d);

for(var i=0,u=s.length;i<u;i++){k=s[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||d;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,u=g.length;i<u;i++){q=f[i];
event.setCurrentTarget(q);
k=g[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||q;
o.handler.call(r,event);
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
(function(){var u="keydown",t="qx.client",s="keypress",r="NumLock",q="keyup",p="Enter",o="0",n="9",m="-",l="PageUp",bC="+",bB="PrintScreen",bA="gecko",bz="A",by="Z",bx="Left",bw="F5",bv="Down",bu="Up",bt="F11",B="F6",C="useraction",z="F3",A="keyinput",x="Insert",y="F8",v="End",w="/",J="Delete",K="*",W="cmd",S="F1",bf="F4",ba="Home",bp="F2",bk="F12",O="PageDown",bs="F7",br="Win",bq="F9",N="F10",Q="Right",R="text",U="Escape",X="webkit",bb="5",bh="3",bm="Meta",D="7",E="CapsLock",P="input",be="Control",bd="Space",bc="Tab",bj="Shift",bi="Pause",Y="Unidentified",bg="qx.event.handler.Keyboard",i="mshtml|webkit",bl="6",F="off",G="Apps",T="4",j="Alt",k="mshtml",M="2",H="Scroll",I="1",L="8",V="autoComplete",bo=",",bn="Backspace";
qx.Class.define(bg,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cL){qx.core.Object.call(this);
this.__fX=cL;
this.__fY=cL.getWindow();
if(qx.core.Variant.isSet(t,bA)){this.__ga=this.__fY;
}else{this.__ga=this.__fY.document.documentElement;
}this.__gb={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cA){if(this._identifierToKeyCodeMap[cA]){return true;
}
if(cA.length!=1){return false;
}
if(cA>=o&&cA<=n){return true;
}
if(cA>=bz&&cA<=by){return true;
}
switch(cA){case bC:case m:case K:case w:return true;
default:return false;
}}},members:{__gc:null,__fX:null,__fY:null,__ga:null,__gb:null,__gd:null,__ge:null,__gf:null,canHandleEvent:function(bK,bL){},registerEvent:function(a,b,c){},unregisterEvent:function(cx,cy,cz){},_fireInputEvent:function(bU,bV){var bW=this.__gg();
if(bW&&bW.offsetWidth!=0){var event=qx.event.Registration.createEvent(A,qx.event.type.KeyInput,[bU,bW,bV]);
this.__fX.dispatchEvent(bW,event);
}if(this.__fY){qx.event.Registration.fireEvent(this.__fY,C,qx.event.type.Data,[A]);
}},_fireSequenceEvent:function(d,e,f){var g=this.__gg();
var h=d.keyCode;
var event=qx.event.Registration.createEvent(e,qx.event.type.KeySequence,[d,g,f]);
this.__fX.dispatchEvent(g,event);
if(qx.core.Variant.isSet(t,i)){if(e==u&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(h)&&!this._emulateKeyPress[h]){this._fireSequenceEvent(d,s,f);
}}}if(this.__fY){qx.event.Registration.fireEvent(this.__fY,C,qx.event.type.Data,[e]);
}},__gg:function(){var cF=this.__fX.getHandler(qx.event.handler.Focus);
var cG=cF.getActive();
if(!cG||cG.offsetWidth==0){cG=cF.getFocus();
}if(!cG||cG.offsetWidth==0){cG=this.__fX.getWindow().document.body;
}return cG;
},_initKeyObserver:function(){this.__gc=qx.lang.Function.listener(this.__gh,this);
this.__gf=qx.lang.Function.listener(this.__gj,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ga,q,this.__gc);
Event.addNativeListener(this.__ga,u,this.__gc);
Event.addNativeListener(this.__ga,s,this.__gf);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ga,q,this.__gc);
Event.removeNativeListener(this.__ga,u,this.__gc);
Event.removeNativeListener(this.__ga,s,this.__gf);

for(var ci in (this.__ge||{})){var ch=this.__ge[ci];
Event.removeNativeListener(ch.target,s,ch.callback);
}delete (this.__ge);
},__gh:qx.event.GlobalError.observeMethod(qx.core.Variant.select(t,{"mshtml":function(co){co=window.event||co;
var cr=co.keyCode;
var cp=0;
var cq=co.type;
if(!(this.__gb[cr]==u&&cq==u)){this._idealKeyHandler(cr,cp,cq,co);
}if(cq==u){if(this._isNonPrintableKeyCode(cr)||this._emulateKeyPress[cr]){this._idealKeyHandler(cr,cp,s,co);
}}this.__gb[cr]=cq;
},"gecko":function(bP){var bT=this._keyCodeFix[bP.keyCode]||bP.keyCode;
var bR=0;
var bS=bP.type;
if(qx.bom.client.Platform.WIN){var bQ=bT?this._keyCodeToIdentifier(bT):this._charCodeToIdentifier(bR);

if(!(this.__gb[bQ]==u&&bS==u)){this._idealKeyHandler(bT,bR,bS,bP);
}this.__gb[bQ]=bS;
}else{this._idealKeyHandler(bT,bR,bS,bP);
}this.__gi(bP.target,bS,bT);
},"webkit":function(cd){var cg=0;
var ce=0;
var cf=cd.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cf==q||cf==u){cg=this._charCode2KeyCode[cd.charCode]||cd.keyCode;
}else{if(this._charCode2KeyCode[cd.charCode]){cg=this._charCode2KeyCode[cd.charCode];
}else{ce=cd.charCode;
}}this._idealKeyHandler(cg,ce,cf,cd);
}else{cg=cd.keyCode;
if(!(this.__gb[cg]==u&&cf==u)){this._idealKeyHandler(cg,ce,cf,cd);
}if(cf==u){if(this._isNonPrintableKeyCode(cg)||this._emulateKeyPress[cg]){this._idealKeyHandler(cg,ce,s,cd);
}}this.__gb[cg]=cf;
}},"opera":function(bI){this.__gd=bI.keyCode;
this._idealKeyHandler(bI.keyCode,0,bI.type,bI);
}})),__gi:qx.core.Variant.select(t,{"gecko":function(cj,ck,cl){if(ck===u&&(cl==33||cl==34||cl==38||cl==40)&&cj.type==R&&cj.tagName.toLowerCase()===P&&cj.getAttribute(V)!==F){if(!this.__ge){this.__ge={};
}var cn=qx.core.ObjectRegistry.toHashCode(cj);

if(this.__ge[cn]){return;
}var self=this;
this.__ge[cn]={target:cj,callback:function(bJ){qx.bom.Event.stopPropagation(bJ);
self.__gj(bJ);
}};
var cm=qx.event.GlobalError.observeMethod(this.__ge[cn].callback);
qx.bom.Event.addNativeListener(cj,s,cm);
}},"default":null}),__gj:qx.event.GlobalError.observeMethod(qx.core.Variant.select(t,{"mshtml":function(bD){bD=window.event||bD;

if(this._charCode2KeyCode[bD.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bD.keyCode],0,bD.type,bD);
}else{this._idealKeyHandler(0,bD.keyCode,bD.type,bD);
}},"gecko":function(cB){var cE=this._keyCodeFix[cB.keyCode]||cB.keyCode;
var cC=cB.charCode;
var cD=cB.type;
this._idealKeyHandler(cE,cC,cD,cB);
},"webkit":function(bE){if(qx.bom.client.Engine.VERSION<525.13){var bH=0;
var bF=0;
var bG=bE.type;

if(bG==q||bG==u){bH=this._charCode2KeyCode[bE.charCode]||bE.keyCode;
}else{if(this._charCode2KeyCode[bE.charCode]){bH=this._charCode2KeyCode[bE.charCode];
}else{bF=bE.charCode;
}}this._idealKeyHandler(bH,bF,bG,bE);
}else{if(this._charCode2KeyCode[bE.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bE.keyCode],0,bE.type,bE);
}else{this._idealKeyHandler(0,bE.keyCode,bE.type,bE);
}}},"opera":function(cH){var cJ=cH.keyCode;
var cI=cH.type;
if(cJ!=this.__gd){this._idealKeyHandler(0,this.__gd,cI,cH);
}else{if(this._keyCodeToIdentifierMap[cH.keyCode]){this._idealKeyHandler(cH.keyCode,0,cH.type,cH);
}else{this._idealKeyHandler(0,cH.keyCode,cH.type,cH);
}}}})),_idealKeyHandler:function(bX,bY,ca,cb){var cc;
if(bX||(!bX&&!bY)){cc=this._keyCodeToIdentifier(bX);
this._fireSequenceEvent(cb,ca,cc);
}else{cc=this._charCodeToIdentifier(bY);
this._fireSequenceEvent(cb,s,cc);
this._fireInputEvent(cb,bY);
}},_specialCharCodeMap:{8:bn,9:bc,13:p,27:U,32:bd},_emulateKeyPress:qx.core.Variant.select(t,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bj,17:be,18:j,20:E,224:bm,37:bx,38:bu,39:Q,40:bv,33:l,34:O,35:v,36:ba,45:x,46:J,112:S,113:bp,114:z,115:bf,116:bw,117:B,118:bs,119:y,120:bq,121:N,122:bt,123:bk,144:r,44:bB,145:H,19:bi,91:qx.bom.client.Platform.MAC?W:br,92:br,93:qx.bom.client.Platform.MAC?W:G},_numpadToCharCode:{96:o.charCodeAt(0),97:I.charCodeAt(0),98:M.charCodeAt(0),99:bh.charCodeAt(0),100:T.charCodeAt(0),101:bb.charCodeAt(0),102:bl.charCodeAt(0),103:D.charCodeAt(0),104:L.charCodeAt(0),105:n.charCodeAt(0),106:K.charCodeAt(0),107:bC.charCodeAt(0),109:m.charCodeAt(0),110:bo.charCodeAt(0),111:w.charCodeAt(0)},_charCodeA:bz.charCodeAt(0),_charCodeZ:by.charCodeAt(0),_charCode0:o.charCodeAt(0),_charCode9:n.charCodeAt(0),_isNonPrintableKeyCode:function(cK){return this._keyCodeToIdentifierMap[cK]?true:false;
},_isIdentifiableKeyCode:function(bO){if(bO>=this._charCodeA&&bO<=this._charCodeZ){return true;
}if(bO>=this._charCode0&&bO<=this._charCode9){return true;
}if(this._specialCharCodeMap[bO]){return true;
}if(this._numpadToCharCode[bO]){return true;
}if(this._isNonPrintableKeyCode(bO)){return true;
}return false;
},_keyCodeToIdentifier:function(bM){if(this._isIdentifiableKeyCode(bM)){var bN=this._numpadToCharCode[bM];

if(bN){return String.fromCharCode(bN);
}return (this._keyCodeToIdentifierMap[bM]||this._specialCharCodeMap[bM]||String.fromCharCode(bM));
}else{return Y;
}},_charCodeToIdentifier:function(cM){return this._specialCharCodeMap[cM]||String.fromCharCode(cM).toUpperCase();
},_identifierToKeyCode:function(cs){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cs]||cs.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gd=this.__fX=this.__fY=this.__ga=this.__gb=null;
},defer:function(ct,cu,cv){qx.event.Registration.addHandler(ct);
if(!ct._identifierToKeyCodeMap){ct._identifierToKeyCodeMap={};

for(var cw in cu._keyCodeToIdentifierMap){ct._identifierToKeyCodeMap[cu._keyCodeToIdentifierMap[cw]]=parseInt(cw,10);
}
for(var cw in cu._specialCharCodeMap){ct._identifierToKeyCodeMap[cu._specialCharCodeMap[cw]]=parseInt(cw,10);
}}
if(qx.core.Variant.isSet(t,k)){cu._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(t,bA)){cu._keyCodeFix={12:cu._identifierToKeyCode(r)};
}else if(qx.core.Variant.isSet(t,X)){if(qx.bom.client.Engine.VERSION<525.13){cu._charCode2KeyCode={63289:cu._identifierToKeyCode(r),63276:cu._identifierToKeyCode(l),63277:cu._identifierToKeyCode(O),63275:cu._identifierToKeyCode(v),63273:cu._identifierToKeyCode(ba),63234:cu._identifierToKeyCode(bx),63232:cu._identifierToKeyCode(bu),63235:cu._identifierToKeyCode(Q),63233:cu._identifierToKeyCode(bv),63272:cu._identifierToKeyCode(J),63302:cu._identifierToKeyCode(x),63236:cu._identifierToKeyCode(S),63237:cu._identifierToKeyCode(bp),63238:cu._identifierToKeyCode(z),63239:cu._identifierToKeyCode(bf),63240:cu._identifierToKeyCode(bw),63241:cu._identifierToKeyCode(B),63242:cu._identifierToKeyCode(bs),63243:cu._identifierToKeyCode(y),63244:cu._identifierToKeyCode(bq),63245:cu._identifierToKeyCode(N),63246:cu._identifierToKeyCode(bt),63247:cu._identifierToKeyCode(bk),63248:cu._identifierToKeyCode(bB),3:cu._identifierToKeyCode(p),12:cu._identifierToKeyCode(r),13:cu._identifierToKeyCode(p)};
}else{cu._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var v="qx.client",u="mouseup",t="click",s="mousedown",r="contextmenu",q="mousewheel",p="dblclick",o="mshtml",n="mouseover",m="mouseout",h="DOMMouseScroll",l="mousemove",k="on",g="mshtml|webkit|opera",f="useraction",j="gecko|webkit",i="qx.event.handler.Mouse";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(W){qx.core.Object.call(this);
this.__dS=W;
this.__dT=W.getWindow();
this.__dU=this.__dT.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dV:null,__dW:null,__dX:null,__dY:null,__ea:null,__dS:null,__dT:null,__dU:null,canHandleEvent:function(d,e){},registerEvent:qx.bom.client.System.IPHONE?
function(z,A,B){z[k+A]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(L,M,N){L[k+M]=undefined;
}:qx.lang.Function.returnNull,__eb:function(C,D,E){if(!E){E=C.target||C.srcElement;
}if(E&&E.nodeType){qx.event.Registration.fireEvent(E,D||C.type,D==q?qx.event.type.MouseWheel:qx.event.type.Mouse,[C,E,null,true,true]);
}qx.event.Registration.fireEvent(this.__dT,f,qx.event.type.Data,[D||C.type]);
},_initButtonObserver:function(){this.__dV=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dU,s,this.__dV);
Event.addNativeListener(this.__dU,u,this.__dV);
Event.addNativeListener(this.__dU,t,this.__dV);
Event.addNativeListener(this.__dU,p,this.__dV);
Event.addNativeListener(this.__dU,r,this.__dV);
},_initMoveObserver:function(){this.__dW=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dU,l,this.__dW);
Event.addNativeListener(this.__dU,n,this.__dW);
Event.addNativeListener(this.__dU,m,this.__dW);
},_initWheelObserver:function(){this.__dX=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var x=qx.core.Variant.isSet(v,g)?q:h;
var y=qx.core.Variant.isSet(v,o)?this.__dU:this.__dT;
Event.addNativeListener(y,x,this.__dX);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dU,s,this.__dV);
Event.removeNativeListener(this.__dU,u,this.__dV);
Event.removeNativeListener(this.__dU,t,this.__dV);
Event.removeNativeListener(this.__dU,p,this.__dV);
Event.removeNativeListener(this.__dU,r,this.__dV);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dU,l,this.__dW);
Event.removeNativeListener(this.__dU,n,this.__dW);
Event.removeNativeListener(this.__dU,m,this.__dW);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var G=qx.core.Variant.isSet(v,g)?q:h;
var H=qx.core.Variant.isSet(v,o)?this.__dU:this.__dT;
Event.removeNativeListener(H,G,this.__dX);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(V){this.__eb(V);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(X){var Y=X.type;
var ba=X.target||X.srcElement;
if(qx.core.Variant.isSet(v,j)){if(ba&&ba.nodeType==3){ba=ba.parentNode;
}}
if(this.__ec){this.__ec(X,Y,ba);
}
if(this.__ee){this.__ee(X,Y,ba);
}this.__eb(X,Y,ba);

if(this.__ed){this.__ed(X,Y,ba);
}
if(this.__ef){this.__ef(X,Y,ba);
}this.__dY=Y;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(F){this.__eb(F,q);
}),__ec:qx.core.Variant.select(v,{"webkit":function(a,b,c){if(qx.bom.client.Engine.VERSION<530){if(b==r){this.__eb(a,u,c);
}}},"default":null}),__ed:qx.core.Variant.select(v,{"opera":function(O,P,Q){if(P==u&&O.button==2){this.__eb(O,r,Q);
}},"default":null}),__ee:qx.core.Variant.select(v,{"mshtml":function(I,J,K){if(J==u&&this.__dY==t){this.__eb(I,s,K);
}else if(J==p){this.__eb(I,t,K);
}},"default":null}),__ef:qx.core.Variant.select(v,{"mshtml":null,"default":function(R,S,T){switch(S){case s:this.__ea=T;
break;
case u:if(T!==this.__ea){var U=qx.dom.Hierarchy.getCommonParent(T,this.__ea);
this.__eb(R,t,U);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dS=this.__dT=this.__dU=this.__ea=null;
},defer:function(w){qx.event.Registration.addHandler(w);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(b,c,d){},unregisterEvent:function(e,f,g){}},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var J="alias",I="copy",H="blur",G="mouseout",F="keydown",E="Ctrl",D="Shift",C="mousemove",B="move",A="mouseover",ba="Alt",Y="keyup",X="mouseup",W="dragend",V="on",U="mousedown",T="qxDraggable",S="drag",R="drop",Q="qxDroppable",O="qx.event.handler.DragDrop",P="droprequest",M="dragstart",N="dragchange",K="dragleave",L="dragover";
qx.Class.define(O,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bf){qx.core.Object.call(this);
this.__ig=bf;
this.__ih=bf.getWindow().document.documentElement;
this.__ig.addListener(this.__ih,U,this._onMouseDown,this);
this.__it();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__ig:null,__ih:null,__ii:null,__ij:null,__ik:null,__il:null,__im:null,__in:null,__io:null,__ip:null,__iq:false,__ir:0,__is:0,canHandleEvent:function(p,q){},registerEvent:function(c,d,f){},unregisterEvent:function(bg,bh,bi){},addType:function(bb){this.__ik[bb]=true;
},addAction:function(n){this.__il[n]=true;
},supportsType:function(bd){return !!this.__ik[bd];
},supportsAction:function(y){return !!this.__il[y];
},getData:function(w){if(!this.__iA||!this.__ii){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__ik[w]){throw new Error("Unsupported data type: "+w+"!");
}
if(!this.__in[w]){this.__io=w;
this.__iv(P,this.__ij,this.__ii,false);
}
if(!this.__in[w]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__in[w]||null;
},getCurrentAction:function(){return this.__ip;
},addData:function(a,b){this.__in[a]=b;
},getCurrentType:function(){return this.__io;
},isSessionActive:function(){return this.__iq;
},__it:function(){this.__ik={};
this.__il={};
this.__im={};
this.__in={};
},__iu:function(){if(this.__ij==null){return;
}var bm=this.__il;
var bk=this.__im;
var bl=null;

if(this.__iA){if(bk.Shift&&bk.Ctrl&&bm.alias){bl=J;
}else if(bk.Shift&&bk.Alt&&bm.copy){bl=I;
}else if(bk.Shift&&bm.move){bl=B;
}else if(bk.Alt&&bm.alias){bl=J;
}else if(bk.Ctrl&&bm.copy){bl=I;
}else if(bm.move){bl=B;
}else if(bm.copy){bl=I;
}else if(bm.alias){bl=J;
}}
if(bl!=this.__ip){this.__ip=bl;
this.__iv(N,this.__ij,this.__ii,false);
}},__iv:function(g,h,i,j,k){var m=qx.event.Registration;
var l=m.createEvent(g,qx.event.type.Drag,[j,k]);

if(h!==i){l.setRelatedTarget(i);
}return m.dispatchEvent(h,l);
},__iw:function(bc){while(bc&&bc.nodeType==1){if(bc.getAttribute(T)==V){return bc;
}bc=bc.parentNode;
}return null;
},__ix:function(bj){while(bj&&bj.nodeType==1){if(bj.getAttribute(Q)==V){return bj;
}bj=bj.parentNode;
}return null;
},__iy:function(){this.__ij=null;
this.__ig.removeListener(this.__ih,C,this._onMouseMove,this,true);
this.__ig.removeListener(this.__ih,X,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,H,this._onWindowBlur,this);
this.__it();
},__iz:function(){if(this.__iq){this.__ig.removeListener(this.__ih,A,this._onMouseOver,this,true);
this.__ig.removeListener(this.__ih,G,this._onMouseOut,this,true);
this.__ig.removeListener(this.__ih,F,this._onKeyDown,this,true);
this.__ig.removeListener(this.__ih,Y,this._onKeyUp,this,true);
this.__iv(W,this.__ij,this.__ii,false);
this.__iq=false;
}this.__iA=false;
this.__ii=null;
this.__iy();
},__iA:false,_onWindowBlur:function(e){this.__iz();
},_onKeyDown:function(e){var x=e.getKeyIdentifier();

switch(x){case ba:case E:case D:if(!this.__im[x]){this.__im[x]=true;
this.__iu();
}}},_onKeyUp:function(e){var t=e.getKeyIdentifier();

switch(t){case ba:case E:case D:if(this.__im[t]){this.__im[t]=false;
this.__iu();
}}},_onMouseDown:function(e){if(this.__iq){return;
}var z=this.__iw(e.getTarget());

if(z){this.__ir=e.getDocumentLeft();
this.__is=e.getDocumentTop();
this.__ij=z;
this.__ig.addListener(this.__ih,C,this._onMouseMove,this,true);
this.__ig.addListener(this.__ih,X,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,H,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__iA){this.__iv(R,this.__ii,this.__ij,false,e);
}if(this.__iq){e.stopPropagation();
}this.__iz();
},_onMouseMove:function(e){if(this.__iq){if(!this.__iv(S,this.__ij,this.__ii,true,e)){this.__iz();
}}else{if(Math.abs(e.getDocumentLeft()-this.__ir)>3||Math.abs(e.getDocumentTop()-this.__is)>3){if(this.__iv(M,this.__ij,this.__ii,true,e)){this.__iq=true;
this.__ig.addListener(this.__ih,A,this._onMouseOver,this,true);
this.__ig.addListener(this.__ih,G,this._onMouseOut,this,true);
this.__ig.addListener(this.__ih,F,this._onKeyDown,this,true);
this.__ig.addListener(this.__ih,Y,this._onKeyUp,this,true);
var o=this.__im;
o.Ctrl=e.isCtrlPressed();
o.Shift=e.isShiftPressed();
o.Alt=e.isAltPressed();
this.__iu();
}else{this.__iv(W,this.__ij,this.__ii,false);
this.__iy();
}}}},_onMouseOver:function(e){var r=e.getTarget();
var s=this.__ix(r);

if(s&&s!=this.__ii){this.__iA=this.__iv(L,s,this.__ij,true,e);
this.__ii=s;
this.__iu();
}},_onMouseOut:function(e){var v=this.__ix(e.getTarget());
var u=this.__ix(e.getRelatedTarget());

if(v&&v!==u&&v==this.__ii){this.__iv(K,this.__ii,u,false,e);
this.__ii=null;
this.__iA=false;
qx.event.Timer.once(this.__iu,this,0);
}}},destruct:function(){this.__ij=this.__ii=this.__ig=this.__ih=this.__ik=this.__il=this.__im=this.__in=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var d="-",c="qx.event.handler.Element";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(p){qx.core.Object.call(this);
this._manager=p;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(u,v,w){var z=qx.core.ObjectRegistry.toHashCode(u);
var x=z+d+v;
var y=qx.lang.Function.listener(this._onNative,this,x);
qx.bom.Event.addNativeListener(u,v,y);
this._registeredEvents[x]={element:u,type:v,listener:y};
},unregisterEvent:function(e,f,g){var j=this._registeredEvents;

if(!j){return;
}var k=qx.core.ObjectRegistry.toHashCode(e);
var h=k+d+f;
var i=this._registeredEvents[h];

if(i){qx.bom.Event.removeNativeListener(e,f,i.listener);
}delete this._registeredEvents[h];
},_onNative:qx.event.GlobalError.observeMethod(function(q,r){var t=this._registeredEvents;

if(!t){return;
}var s=t[r];
qx.event.Registration.fireNonBubblingEvent(s.element,s.type,qx.event.type.Native,[q]);
})},destruct:function(){var l;
var m=this._registeredEvents;

for(var n in m){l=m[n];
qx.bom.Event.removeNativeListener(l.element,l.type,l.listener);
}this._manager=this._registeredEvents=null;
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var d="qx.event.handler.Appear",c="disappear",b="appear";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this.__bM=a;
this.__bN={};
qx.event.handler.Appear.__bO[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__bO:{},refresh:function(){var p=this.__bO;

for(var q in p){p[q].refresh();
}}},members:{__bM:null,__bN:null,canHandleEvent:function(r,s){},registerEvent:function(e,f,g){var h=qx.core.ObjectRegistry.toHashCode(e)+f;
var i=this.__bN;

if(i&&!i[h]){i[h]=e;
e.$$displayed=e.offsetWidth>0;
}},unregisterEvent:function(j,k,l){var m=qx.core.ObjectRegistry.toHashCode(j)+k;
var n=this.__bN;

if(!n){return;
}
if(n[m]){delete n[m];
}},refresh:function(){var w=this.__bN;
var x;

for(var v in w){x=w[v];
var t=x.offsetWidth>0;

if((!!x.$$displayed)!==t){x.$$displayed=t;
var u=qx.event.Registration.createEvent(t?b:c);
this.__bM.dispatchEvent(x,u);
}}}},destruct:function(){this.__bM=this.__bN=null;
delete qx.event.handler.Appear.__bO[this.$$hash];
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var u="mshtml",t="",s="qx.client",r=" ",q=">",p="<",o="='",n="none",m="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",k="qx.bom.Element",f="' ",h="div",g="></";
qx.Class.define(k,{statics:{__jt:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__ju:{},__jv:{},allowCreationWithMarkup:function(bb){if(!bb){bb=window;
}var bc=bb.location.href;

if(qx.bom.Element.__jv[bc]==undefined){try{bb.document.createElement(m);
qx.bom.Element.__jv[bc]=true;
}catch(e){qx.bom.Element.__jv[bc]=false;
}}return qx.bom.Element.__jv[bc];
},getHelperElement:function(w){if(!w){w=window;
}var y=w.location.href;

if(!qx.bom.Element.__ju[y]){var x=qx.bom.Element.__ju[y]=w.document.createElement(h);
if(qx.bom.client.Engine.WEBKIT){x.style.display=n;
w.document.body.appendChild(x);
}}return qx.bom.Element.__ju[y];
},create:function(name,L,M){if(!M){M=window;
}
if(!name){throw new Error("The tag name is missing!");
}var O=this.__jt;
var N=t;

for(var Q in L){if(O[Q]){N+=Q+o+L[Q]+f;
}}var R;
if(N!=t){if(qx.bom.Element.allowCreationWithMarkup(M)){R=M.document.createElement(p+name+r+N+q);
}else{var P=qx.bom.Element.getHelperElement(M);
P.innerHTML=p+name+r+N+g+name+q;
R=P.firstChild;
}}else{R=M.document.createElement(name);
}
for(var Q in L){if(!O[Q]){qx.bom.element.Attribute.set(R,Q,L[Q]);
}}return R;
},empty:function(W){return W.innerHTML=t;
},addListener:function(S,T,U,self,V){return qx.event.Registration.addListener(S,T,U,self,V);
},removeListener:function(a,b,c,self,d){return qx.event.Registration.removeListener(a,b,c,self,d);
},removeListenerById:function(bf,bg){return qx.event.Registration.removeListenerById(bf,bg);
},hasListener:function(bh,bi,bj){return qx.event.Registration.hasListener(bh,bi,bj);
},focus:function(X){qx.event.Registration.getManager(X).getHandler(qx.event.handler.Focus).focus(X);
},blur:function(bk){qx.event.Registration.getManager(bk).getHandler(qx.event.handler.Focus).blur(bk);
},activate:function(Y){qx.event.Registration.getManager(Y).getHandler(qx.event.handler.Focus).activate(Y);
},deactivate:function(ba){qx.event.Registration.getManager(ba).getHandler(qx.event.handler.Focus).deactivate(ba);
},capture:function(bd,be){qx.event.Registration.getManager(bd).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(bd,be);
},releaseCapture:function(v){qx.event.Registration.getManager(v).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(v);
},clone:function(z,A){var D;

if(A||(qx.core.Variant.isSet(s,u)&&!qx.xml.Document.isXmlDocument(z))){var H=qx.event.Registration.getManager(z);
var B=qx.dom.Hierarchy.getDescendants(z);
B.push(z);
}if(qx.core.Variant.isSet(s,u)){for(var i=0,l=B.length;i<l;i++){H.toggleAttachedEvents(B[i],false);
}}var D=z.cloneNode(true);
if(qx.core.Variant.isSet(s,u)){for(var i=0,l=B.length;i<l;i++){H.toggleAttachedEvents(B[i],true);
}}if(A===true){var K=qx.dom.Hierarchy.getDescendants(D);
K.push(D);
var C,F,J,E;

for(var i=0,I=B.length;i<I;i++){J=B[i];
C=H.serializeListeners(J);

if(C.length>0){F=K[i];

for(var j=0,G=C.length;j<G;j++){E=C[j];
H.addListener(F,E.type,E.handler,E.self,E.capture);
}}}}return D;
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
(function(){var bq="qx.client",bp="blur",bo="focus",bn="mousedown",bm="on",bl="mouseup",bk="DOMFocusOut",bj="DOMFocusIn",bi="selectstart",bh="onmousedown",bK="onfocusout",bJ="onfocusin",bI="onmouseup",bH="onselectstart",bG="draggesture",bF="qx.event.handler.Focus",bE="_applyFocus",bD="deactivate",bC="textarea",bB="_applyActive",bx="input",by="focusin",bv="qxSelectable",bw="tabIndex",bt="off",bu="activate",br="mshtml",bs="focusout",bz="qxKeepFocus",bA="qxKeepActive";
qx.Class.define(bF,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(X){qx.core.Object.call(this);
this._manager=X;
this._window=X.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bB,nullable:true},focus:{apply:bE,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__iD:null,__iE:null,__iF:null,__iG:null,__iH:null,__iI:null,__iJ:null,__iK:null,__iL:null,__iM:null,canHandleEvent:function(k,l){},registerEvent:function(A,B,C){},unregisterEvent:function(Y,ba,bb){},focus:function(o){if(qx.core.Variant.isSet(bq,br)){window.setTimeout(function(){try{o.focus();
}catch(K){}},0);
}else{try{o.focus();
}catch(W){}}this.setFocus(o);
this.setActive(o);
},activate:function(b){this.setActive(b);
},blur:function(bd){try{bd.blur();
}catch(T){}
if(this.getActive()===bd){this.resetActive();
}
if(this.getFocus()===bd){this.resetFocus();
}},deactivate:function(bN){if(this.getActive()===bN){this.resetActive();
}},tryActivate:function(y){var z=this.__jc(y);

if(z){this.setActive(z);
}},__iN:function(N,O,P,Q){var S=qx.event.Registration;
var R=S.createEvent(P,qx.event.type.Focus,[N,O,Q]);
S.dispatchEvent(N,R);
},_windowFocused:true,__iO:function(){if(this._windowFocused){this._windowFocused=false;
this.__iN(this._window,null,bp,false);
}},__iP:function(){if(!this._windowFocused){this._windowFocused=true;
this.__iN(this._window,null,bo,false);
}},_initObserver:qx.core.Variant.select(bq,{"gecko":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iF=qx.lang.Function.listener(this.__iU,this);
this.__iG=qx.lang.Function.listener(this.__iT,this);
this.__iH=qx.lang.Function.listener(this.__iQ,this);
this._document.addEventListener(bn,this.__iD,true);
this._document.addEventListener(bl,this.__iE,true);
this._window.addEventListener(bo,this.__iF,true);
this._window.addEventListener(bp,this.__iG,true);
this._window.addEventListener(bG,this.__iH,true);
},"mshtml":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iJ=qx.lang.Function.listener(this.__iR,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this.__iI=qx.lang.Function.listener(this.__iY,this);
this._document.attachEvent(bh,this.__iD);
this._document.attachEvent(bI,this.__iE);
this._document.attachEvent(bJ,this.__iJ);
this._document.attachEvent(bK,this.__iK);
this._document.attachEvent(bH,this.__iI);
},"webkit":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this.__iF=qx.lang.Function.listener(this.__iU,this);
this.__iG=qx.lang.Function.listener(this.__iT,this);
this.__iI=qx.lang.Function.listener(this.__iY,this);
this._document.addEventListener(bn,this.__iD,true);
this._document.addEventListener(bl,this.__iE,true);
this._document.addEventListener(bi,this.__iI,false);
this._window.addEventListener(bk,this.__iK,true);
this._window.addEventListener(bo,this.__iF,true);
this._window.addEventListener(bp,this.__iG,true);
},"opera":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iJ=qx.lang.Function.listener(this.__iR,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this._document.addEventListener(bn,this.__iD,true);
this._document.addEventListener(bl,this.__iE,true);
this._window.addEventListener(bj,this.__iJ,true);
this._window.addEventListener(bk,this.__iK,true);
}}),_stopObserver:qx.core.Variant.select(bq,{"gecko":function(){this._document.removeEventListener(bn,this.__iD,true);
this._document.removeEventListener(bl,this.__iE,true);
this._window.removeEventListener(bo,this.__iF,true);
this._window.removeEventListener(bp,this.__iG,true);
this._window.removeEventListener(bG,this.__iH,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,bh,this.__iD);
qx.bom.Event.removeNativeListener(this._document,bI,this.__iE);
qx.bom.Event.removeNativeListener(this._document,bJ,this.__iJ);
qx.bom.Event.removeNativeListener(this._document,bK,this.__iK);
qx.bom.Event.removeNativeListener(this._document,bH,this.__iI);
},"webkit":function(){this._document.removeEventListener(bn,this.__iD,true);
this._document.removeEventListener(bi,this.__iI,false);
this._window.removeEventListener(bj,this.__iJ,true);
this._window.removeEventListener(bk,this.__iK,true);
this._window.removeEventListener(bo,this.__iF,true);
this._window.removeEventListener(bp,this.__iG,true);
},"opera":function(){this._document.removeEventListener(bn,this.__iD,true);
this._window.removeEventListener(bj,this.__iJ,true);
this._window.removeEventListener(bk,this.__iK,true);
this._window.removeEventListener(bo,this.__iF,true);
this._window.removeEventListener(bp,this.__iG,true);
}}),__iQ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"gecko":function(e){if(!this.__jd(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__iR:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"mshtml":function(e){this.__iP();
var V=e.srcElement;
var U=this.__jb(V);

if(U){this.setFocus(U);
}this.tryActivate(V);
},"opera":function(e){var a=e.target;

if(a==this._document||a==this._window){this.__iP();

if(this.__iL){this.setFocus(this.__iL);
delete this.__iL;
}
if(this.__iM){this.setActive(this.__iM);
delete this.__iM;
}}else{this.setFocus(a);
this.tryActivate(a);
if(!this.__jd(a)){a.selectionStart=0;
a.selectionEnd=0;
}}},"default":null})),__iS:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"mshtml":function(e){if(!e.toElement){this.__iO();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var H=e.target;

if(H===this.getFocus()){this.resetFocus();
}
if(H===this.getActive()){this.resetActive();
}},"opera":function(e){var f=e.target;

if(f==this._document){this.__iO();
this.__iL=this.getFocus();
this.__iM=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(f===this.getFocus()){this.resetFocus();
}
if(f===this.getActive()){this.resetActive();
}}},"default":null})),__iT:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__iO();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__iO();
this.__iL=this.getFocus();
this.__iM=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__iU:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"gecko":function(e){var g=e.target;

if(g===this._window||g===this._document){this.__iP();
g=this._body;
}this.setFocus(g);
this.tryActivate(g);
},"webkit":function(e){var r=e.target;

if(r===this._window||r===this._document){this.__iP();

if(this.__iL){this.setFocus(this.__iL);
delete this.__iL;
}
if(this.__iM){this.setActive(this.__iM);
delete this.__iM;
}}else{this.setFocus(r);
this.tryActivate(r);
}},"default":null})),__iV:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"gecko":function(e){var G=this.__jb(e.target);

if(!G){qx.bom.Event.preventDefault(e);
}else if(G===this._body){this.setFocus(G);
}},"mshtml":function(e){var u=e.srcElement;
var t=this.__jb(u);

if(t){if(!this.__jd(u)){u.unselectable=bm;
try{document.selection.empty();
}catch(e){}try{t.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__jd(u)){u.unselectable=bm;
}}},"webkit":function(e){var d=e.target;
var c=this.__jb(d);

if(c){this.setFocus(c);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var j=e.target;
var h=this.__jb(j);

if(!this.__jd(j)){qx.bom.Event.preventDefault(e);
if(h){var i=this.getFocus();

if(i&&i.selectionEnd){i.selectionStart=0;
i.selectionEnd=0;
i.blur();
}if(h){this.setFocus(h);
}}}else if(h){this.setFocus(h);
}},"default":null})),__iW:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"mshtml":function(e){var bc=e.srcElement;

if(bc.unselectable){bc.unselectable=bt;
}this.tryActivate(this.__iX(bc));
},"gecko":function(e){var be=e.target;

while(be&&be.offsetWidth===undefined){be=be.parentNode;
}
if(be){this.tryActivate(be);
}},"webkit|opera":function(e){this.tryActivate(this.__iX(e.target));
},"default":null})),__iX:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"mshtml|webkit":function(bf){var bg=this.getFocus();

if(bg&&bf!=bg&&(bg.nodeName.toLowerCase()===bx||bg.nodeName.toLowerCase()===bC)){bf=bg;
}return bf;
},"default":function(s){return s;
}})),__iY:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"mshtml|webkit":function(e){var bL=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__jd(bL)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ja:function(D){var E=qx.bom.element.Attribute.get(D,bw);

if(E>=1){return true;
}var F=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(E>=0&&F[D.tagName]){return true;
}return false;
},__jb:function(bM){while(bM&&bM.nodeType===1){if(bM.getAttribute(bz)==bm){return null;
}
if(this.__ja(bM)){return bM;
}bM=bM.parentNode;
}return this._body;
},__jc:function(I){var J=I;

while(I&&I.nodeType===1){if(I.getAttribute(bA)==bm){return null;
}I=I.parentNode;
}return J;
},__jd:function(p){while(p&&p.nodeType===1){var q=p.getAttribute(bv);

if(q!=null){return q===bm;
}p=p.parentNode;
}return true;
},_applyActive:function(L,M){if(M){this.__iN(M,L,bD,true);
}
if(L){this.__iN(L,M,bu,true);
}},_applyFocus:function(m,n){if(n){this.__iN(n,m,bs,true);
}
if(m){this.__iN(m,n,by,true);
}if(n){this.__iN(n,m,bp,false);
}
if(m){this.__iN(m,n,bo,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__je=null;
},defer:function(v){qx.event.Registration.addHandler(v);
var w=v.FOCUSABLE_ELEMENTS;

for(var x in w){w[x.toUpperCase()]=1;
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
qx.Class.define(e,{statics:{__gk:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__gk.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(K,name){var M=this.__gk;
var L;
name=M.names[name]||name;
if(M.original[name]){L=K.getAttribute(name,2);
}else if(M.property[name]){L=K[name];

if(typeof M.propertyDefault[name]!==i&&L==M.propertyDefault[name]){if(typeof M.bools[name]===i){return null;
}else{return L;
}}}else{L=K.getAttribute(name);
}if(M.bools[name]){return !!L;
}return L;
},"default":function(D,name){var F=this.__gk;
var E;
name=F.names[name]||name;
if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
}}),set:function(H,name,I){var J=this.__gk;
name=J.names[name]||name;
if(J.bools[name]){I=!!I;
}if(J.property[name]&&(!(H[name]===undefined)||J.qxProperties[name])){if(I==null){if(J.removeableProperties[name]){H.removeAttribute(name);
return;
}else if(typeof J.propertyDefault[name]!==i){I=J.propertyDefault[name];
}}H[name]=I;
}else{if(I===true){H.setAttribute(name,name);
}else if(I===false||I===null){H.removeAttribute(name);
}else{H.setAttribute(name,I);
}}},reset:function(G,name){this.set(G,name,null);
}}});
})();
(function(){var n="left",m="right",l="middle",k="qx.client",j="dblclick",i="click",h="none",g="contextmenu",f="qx.event.type.Mouse";
qx.Class.define(f,{extend:qx.event.type.Dom,members:{init:function(a,b,c,d,e){qx.event.type.Dom.prototype.init.call(this,a,b,c,d,e);

if(!c){this._relatedTarget=qx.bom.Event.getRelatedTarget(a);
}return this;
},_cloneNativeEvent:function(p,q){var q=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,p,q);
q.button=p.button;
q.clientX=p.clientX;
q.clientY=p.clientY;
q.pageX=p.pageX;
q.pageY=p.pageY;
q.screenX=p.screenX;
q.screenY=p.screenY;
q.wheelDelta=p.wheelDelta;
q.detail=p.detail;
q.srcElement=p.srcElement;
return q;
},__jq:qx.core.Variant.select(k,{"mshtml":{1:n,2:m,4:l},"default":{0:n,2:m,1:l}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case i:case j:return n;
case g:return m;
default:return this.__jq[this._native.button]||h;
}},isLeftPressed:function(){return this.getButton()===n;
},isMiddlePressed:function(){return this.getButton()===l;
},isRightPressed:function(){return this.getButton()===m;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(k,{"mshtml":function(){var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(o);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(k,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
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
(function(){var b="qx.client",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Variant.select(b,{"opera":function(s){if(qx.bom.client.Engine.VERSION<9.5){return (s||window).document.body.clientWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"webkit":function(c){if(qx.bom.client.Engine.VERSION<523.15){return (c||window).innerWidth;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientWidth:o.body.clientWidth;
}}),getHeight:qx.core.Variant.select(b,{"opera":function(i){if(qx.bom.client.Engine.VERSION<9.5){return (i||window).document.body.clientHeight;
}else{var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientHeight:j.body.clientHeight;
}},"webkit":function(e){if(qx.bom.client.Engine.VERSION<523.15){return (e||window).innerHeight;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}},"default":function(l){var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientHeight:m.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(b,{"mshtml":function(p){var q=(p||window).document;
return q.documentElement.scrollLeft||q.body.scrollLeft;
},"default":function(r){return (r||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(b,{"mshtml":function(g){var h=(g||window).document;
return h.documentElement.scrollTop||h.body.scrollTop;
},"default":function(k){return (k||window).pageYOffset;
}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(q){if(qx.bom.client.Engine.VERSION>=8){return (q||window).document.documentMode===5;
}else{return (q||window).document.compatMode!==f;
}},"webkit":function(n){if(document.compatMode===undefined){var o=(n||window).document.createElement(a);
o.style.cssText=e;
return o.style.width===c?true:false;
}else{return (n||window).document.compatMode!==f;
}},"default":function(m){return (m||window).document.compatMode!==f;
}}),isStandardMode:function(p){return !this.isQuirksMode(p);
},getWidth:function(g){var h=(g||window).document;
var i=qx.bom.Viewport.getWidth(g);
var scroll=this.isStandardMode(g)?h.documentElement.scrollWidth:h.body.scrollWidth;
return Math.max(scroll,i);
},getHeight:function(j){var k=(j||window).document;
var l=qx.bom.Viewport.getHeight(j);
var scroll=this.isStandardMode(j)?k.documentElement.scrollHeight:k.body.scrollHeight;
return Math.max(scroll,l);
}}});
})();
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__kp:function(A){var B=navigator.userAgent;
var D=new RegExp(s+A+d);
var E=B.match(D);

if(!E){return;
}var name=E[1].toLowerCase();
var C=E[3];
if(B.match(/Version(\/| )([0-9]+\.[0-9])/)){C=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(B.indexOf(a)!==-1||B.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
C=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=C;
this.VERSION=parseFloat(C,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(y){y.__kp(o);
},"gecko":function(z){z.__kp(k);
},"mshtml":function(G){G.__kp(v);
},"opera":function(F){F.__kp(p);
}})});
})();
(function(){var R="qx.client",Q="qx.dom.Hierarchy",P="previousSibling",O="*",N="nextSibling",M="parentNode";
qx.Class.define(Q,{statics:{getNodeIndex:function(A){var B=0;

while(A&&(A=A.previousSibling)){B++;
}return B;
},getElementIndex:function(p){var q=0;
var r=qx.dom.Node.ELEMENT;

while(p&&(p=p.previousSibling)){if(p.nodeType==r){q++;
}}return q;
},getNextElementSibling:function(S){while(S&&(S=S.nextSibling)&&!qx.dom.Node.isElement(S)){continue;
}return S||null;
},getPreviousElementSibling:function(C){while(C&&(C=C.previousSibling)&&!qx.dom.Node.isElement(C)){continue;
}return C||null;
},contains:qx.core.Variant.select(R,{"webkit|mshtml|opera":function(H,I){if(qx.dom.Node.isDocument(H)){var J=qx.dom.Node.getDocument(I);
return H&&J==H;
}else if(qx.dom.Node.isDocument(I)){return false;
}else{return H.contains(I);
}},"gecko":function(D,E){return !!(D.compareDocumentPosition(E)&16);
},"default":function(s,t){while(t){if(s==t){return true;
}t=t.parentNode;
}return false;
}}),isRendered:function(F){if(!F.offsetParent){return false;
}var G=F.ownerDocument||F.document;
if(G.body.contains){return G.body.contains(F);
}if(G.compareDocumentPosition){return !!(G.compareDocumentPosition(F)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(g,h){return this.contains(h,g);
},getCommonParent:qx.core.Variant.select(R,{"mshtml|opera":function(m,n){if(m===n){return m;
}
while(m&&qx.dom.Node.isElement(m)){if(m.contains(n)){return m;
}m=m.parentNode;
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
}}),getAncestors:function(T){return this._recursivelyCollect(T,M);
},getChildElements:function(K){K=K.firstChild;

if(!K){return [];
}var L=this.getNextSiblings(K);

if(K.nodeType===1){L.unshift(K);
}return L;
},getDescendants:function(u){return qx.lang.Array.fromCollection(u.getElementsByTagName(O));
},getFirstDescendant:function(z){z=z.firstChild;

while(z&&z.nodeType!=1){z=z.nextSibling;
}return z;
},getLastDescendant:function(l){l=l.lastChild;

while(l&&l.nodeType!=1){l=l.previousSibling;
}return l;
},getPreviousSiblings:function(o){return this._recursivelyCollect(o,P);
},getNextSiblings:function(V){return this._recursivelyCollect(V,N);
},_recursivelyCollect:function(i,j){var k=[];

while(i=i[j]){if(i.nodeType==1){k.push(i);
}}return k;
},getSiblings:function(v){return this.getPreviousSiblings(v).reverse().concat(this.getNextSiblings(v));
},isEmpty:function(U){U=U.firstChild;

while(U){if(U.nodeType===qx.dom.Node.ELEMENT||U.nodeType===qx.dom.Node.TEXT){return false;
}U=U.nextSibling;
}return true;
},cleanWhitespace:function(w){var x=w.firstChild;

while(x){var y=x.nextSibling;

if(x.nodeType==3&&!/\S/.test(x.nodeValue)){w.removeChild(x);
}x=y;
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
}var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(o);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(l);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(i){this.getManager().addType(i);
},addAction:function(e){this.getManager().addAction(e);
},supportsType:function(n){return this.getManager().supportsType(n);
},supportsAction:function(h){return this.getManager().supportsAction(h);
},addData:function(f,g){this.getManager().addData(f,g);
},getData:function(m){return this.getManager().getData(m);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var j="losecapture",i="qx.client",h="blur",g="focus",f="click",e="qx.event.dispatch.MouseCapture",d="capture",c="scroll";
qx.Class.define(e,{extend:qx.event.dispatch.AbstractBubbling,construct:function(n,o){qx.event.dispatch.AbstractBubbling.call(this,n);
this.__fD=n.getWindow();
this.__fE=o;
n.addListener(this.__fD,h,this.releaseCapture,this);
n.addListener(this.__fD,g,this.releaseCapture,this);
n.addListener(this.__fD,c,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fE:null,__fF:null,__fG:true,__fD:null,_getParent:function(u){return u.parentNode;
},canDispatchEvent:function(a,event,b){return (this.__fF&&this.__fH[b]);
},dispatchEvent:function(p,event,q){if(q==f){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fG||!qx.dom.Hierarchy.contains(this.__fF,p)){p=this.__fF;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,p,event,q);
},__fH:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(l,m){var m=m!==false;

if(this.__fF===l&&this.__fG==m){return;
}
if(this.__fF){this.releaseCapture();
}this.nativeSetCapture(l,m);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(l,j,function(){qx.bom.Event.removeNativeListener(l,j,arguments.callee);
self.releaseCapture();
});
}this.__fG=m;
this.__fF=l;
this.__fE.fireEvent(l,d,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fF;
},releaseCapture:function(){var v=this.__fF;

if(!v){return;
}this.__fF=null;
this.__fE.fireEvent(v,j,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(v);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(i,{"mshtml":function(r,s){r.setCapture(s!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(i,{"mshtml":function(t){t.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fF=this.__fD=this.__fE=null;
},defer:function(k){qx.event.Registration.addDispatcher(k);
}});
})();
(function(){var t="qx.client",s="",r="mshtml",q="'",p="SelectionLanguage",o="qx.xml.Document",n=" />",m="MSXML2.DOMDocument.3.0",k='<\?xml version="1.0" encoding="utf-8"?>\n<',j="MSXML2.XMLHTTP.3.0",e="MSXML2.XMLHTTP.6.0",h=" xmlns='",g="text/xml",d="XPath",c="MSXML2.DOMDocument.6.0",f="HTML";
qx.Class.define(o,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(D){if(D.nodeType===9){return D.documentElement.nodeName!==f;
}else if(D.ownerDocument){return this.isXmlDocument(D.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(t,{"mshtml":function(u,v){var w=new ActiveXObject(this.DOMDOC);
w.setProperty(p,d);

if(v){var x=k;
x+=v;

if(u){x+=h+u+q;
}x+=n;
w.loadXML(x);
}return w;
},"default":function(E,F){return document.implementation.createDocument(E||s,F||s,null);
}}),fromString:qx.core.Variant.select(t,{"mshtml":function(a){var b=qx.xml.Document.create();
b.loadXML(a);
return b;
},"default":function(y){var z=new DOMParser();
return z.parseFromString(y,g);
}})},defer:function(A){if(qx.core.Variant.isSet(t,r)){var B=[c,m];
var C=[e,j];

for(var i=0,l=B.length;i<l;i++){try{new ActiveXObject(B[i]);
new ActiveXObject(C[i]);
}catch(G){continue;
}A.DOMDOC=B[i];
A.XMLHTTP=C[i];
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
(function(){var bC="",bB="qx.client",bA="hidden",bz="-moz-scrollbars-none",by="overflow",bx=";",bw="overflowY",bv=":",bu="overflowX",bt="overflow:",bO="none",bN="scroll",bM="borderLeftStyle",bL="borderRightStyle",bK="div",bJ="borderRightWidth",bI="overflow-y",bH="borderLeftWidth",bG="-moz-scrollbars-vertical",bF="100px",bD="qx.bom.element.Overflow",bE="overflow-x";
qx.Class.define(bD,{statics:{__jw:null,getScrollbarWidth:function(){if(this.__jw!==null){return this.__jw;
}var bf=qx.bom.element.Style;
var bh=function(m,n){return parseInt(bf.get(m,n))||0;
};
var bi=function(be){return (bf.get(be,bL)==bO?0:bh(be,bJ));
};
var bg=function(bU){return (bf.get(bU,bM)==bO?0:bh(bU,bH));
};
var bk=qx.core.Variant.select(bB,{"mshtml":function(i){if(bf.get(i,bw)==bA||i.clientWidth==0){return bi(i);
}return Math.max(0,i.offsetWidth-i.clientLeft-i.clientWidth);
},"default":function(M){if(M.clientWidth==0){var N=bf.get(M,by);
var O=(N==bN||N==bG?16:0);
return Math.max(0,bi(M)+O);
}return Math.max(0,(M.offsetWidth-M.clientWidth-bg(M)));
}});
var bj=function(bs){return bk(bs)-bi(bs);
};
var t=document.createElement(bK);
var s=t.style;
s.height=s.width=bF;
s.overflow=bN;
document.body.appendChild(t);
var c=bj(t);
this.__jw=c?c:16;
document.body.removeChild(t);
return this.__jw;
},_compile:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bq,br){if(br==bA){br=bz;
}return bt+br+bx;
}:
function(S,T){return S+bv+T+bx;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ce,cf){return bt+cf+bx;
}:
function(bR,bS){return bR+bv+bS+bx;
},"default":function(o,p){return o+bv+p+bx;
}}),compileX:function(l){return this._compile(bE,l);
},compileY:function(bn){return this._compile(bI,bn);
},getX:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(W,X){var Y=qx.bom.element.Style.get(W,by,X,false);

if(Y===bz){Y=bA;
}return Y;
}:
function(j,k){return qx.bom.element.Style.get(j,bu,k,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bc,bd){return qx.bom.element.Style.get(bc,by,bd,false);
}:
function(ba,bb){return qx.bom.element.Style.get(ba,bu,bb,false);
},"default":function(bo,bp){return qx.bom.element.Style.get(bo,bu,bp,false);
}}),setX:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(w,x){if(x==bA){x=bz;
}w.style.overflow=x;
}:
function(P,Q){P.style.overflowX=Q;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(f,g){f.style.overflow=g;
}:
function(bP,bQ){bP.style.overflowX=bQ;
},"default":function(B,C){B.style.overflowX=C;
}}),resetX:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(A){A.style.overflow=bC;
}:
function(H){H.style.overflowX=bC;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bX,bY){bX.style.overflow=bC;
}:
function(a,b){a.style.overflowX=bC;
},"default":function(bT){bT.style.overflowX=bC;
}}),getY:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(E,F){var G=qx.bom.element.Style.get(E,by,F,false);

if(G===bz){G=bA;
}return G;
}:
function(ca,cb){return qx.bom.element.Style.get(ca,bw,cb,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(q,r){return qx.bom.element.Style.get(q,by,r,false);
}:
function(U,V){return qx.bom.element.Style.get(U,bw,V,false);
},"default":function(bV,bW){return qx.bom.element.Style.get(bV,bw,bW,false);
}}),setY:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(u,v){if(v===bA){v=bz;
}u.style.overflow=v;
}:
function(bl,bm){bl.style.overflowY=bm;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(cc,cd){cc.style.overflow=cd;
}:
function(y,z){y.style.overflowY=z;
},"default":function(I,J){I.style.overflowY=J;
}}),resetY:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(D){D.style.overflow=bC;
}:
function(R){R.style.overflowY=bC;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(K,L){K.style.overflow=bC;
}:
function(d,e){d.style.overflowY=bC;
},"default":function(h){h.style.overflowY=bC;
}})}});
})();
(function(){var u="auto",t="px",s=",",r="clip:auto;",q="rect(",p=");",o="",n=")",m="qx.bom.element.Clip",l="string",i="rect(auto)",k="clip:rect(",j="clip",h="rect(auto,auto,auto,auto)";
qx.Class.define(m,{statics:{compile:function(E){if(!E){return r;
}var J=E.left;
var top=E.top;
var I=E.width;
var H=E.height;
var F,G;

if(J==null){F=(I==null?u:I+t);
J=u;
}else{F=(I==null?u:J+I+t);
J=J+t;
}
if(top==null){G=(H==null?u:H+t);
top=u;
}else{G=(H==null?u:top+H+t);
top=top+t;
}return k+top+s+F+s+G+s+J+p;
},get:function(v,w){var y=qx.bom.element.Style.get(v,j,w,false);
var D,top,B,A;
var x,z;

if(typeof y===l&&y!==u&&y!==o){y=qx.lang.String.trim(y);
if(/\((.*)\)/.test(y)){var C=RegExp.$1.split(s);
top=qx.lang.String.trim(C[0]);
x=qx.lang.String.trim(C[1]);
z=qx.lang.String.trim(C[2]);
D=qx.lang.String.trim(C[3]);
if(D===u){D=null;
}
if(top===u){top=null;
}
if(x===u){x=null;
}
if(z===u){z=null;
}if(top!=null){top=parseInt(top,10);
}
if(x!=null){x=parseInt(x,10);
}
if(z!=null){z=parseInt(z,10);
}
if(D!=null){D=parseInt(D,10);
}if(x!=null&&D!=null){B=x-D;
}else if(x!=null){B=x;
}
if(z!=null&&top!=null){A=z-top;
}else if(z!=null){A=z;
}}else{throw new Error("Could not parse clip string: "+y);
}}return {left:D||null,top:top||null,width:B||null,height:A||null};
},set:function(a,b){if(!b){a.style.clip=h;
return;
}var g=b.left;
var top=b.top;
var f=b.width;
var e=b.height;
var c,d;

if(g==null){c=(f==null?u:f+t);
g=u;
}else{c=(f==null?u:g+f+t);
g=g+t;
}
if(top==null){d=(e==null?u:e+t);
top=u;
}else{d=(e==null?u:top+e+t);
top=top+t;
}a.style.clip=q+top+s+c+s+d+s+g+n;
},reset:function(K){K.style.clip=qx.bom.client.Engine.MSHTML?i:u;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__eg:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(q){return f+(this.__eg[q]||q)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__eg[p]||p;
},reset:function(l){l.style.cursor=g;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(A){if(A>=1){return m;
}
if(A<0.00001){A=0;
}return d+(A*100)+f;
},"gecko":function(w){if(w==1){w=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+w+k;
}else{return i+w+k;
}},"default":function(F){if(F==1){return m;
}return i+F+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(x,y){var z=qx.bom.element.Style.get(x,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(y>=1){x.style.filter=z.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(y<0.00001){y=0;
}if(!x.currentStyle||!x.currentStyle.hasLayout){x.style.zoom=1;
}x.style.filter=z.replace(/alpha\([^\)]*\)/gi,m)+c+y*100+e;
},"gecko":function(J,K){if(K==1){K=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){J.style.MozOpacity=K;
}else{J.style.opacity=K;
}},"default":function(D,E){if(E==1){E=m;
}D.style.opacity=E;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(B){var C=qx.bom.element.Style.get(B,j,qx.bom.element.Style.COMPUTED_MODE,false);
B.style.filter=C.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(r){if(qx.bom.client.Engine.VERSION<1.7){r.style.MozOpacity=m;
}else{r.style.opacity=m;
}},"default":function(n){n.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(s,t){var u=qx.bom.element.Style.get(s,j,t,false);

if(u){var v=u.match(/alpha\(opacity=(.*)\)/);

if(v&&v[1]){return parseFloat(v[1])/100;
}}return 1.0;
},"gecko":function(G,H){var I=qx.bom.element.Style.get(G,qx.bom.client.Engine.VERSION<1.7?g:h,H,false);

if(I==0.999999){I=1.0;
}
if(I!=null){return parseFloat(I);
}return 1.0;
},"default":function(o,p){var q=qx.bom.element.Style.get(o,h,p,false);

if(q!=null){return parseFloat(q);
}return 1.0;
}})}});
})();
(function(){var t="qx.client",s="",r="boxSizing",q="box-sizing",p=":",o="border-box",n="qx.bom.element.BoxSizing",m="KhtmlBoxSizing",k="-moz-box-sizing",j="WebkitBoxSizing",f=";",h="-khtml-box-sizing",g="content-box",e="-webkit-box-sizing",d="MozBoxSizing";
qx.Class.define(n,{statics:{__ci:qx.core.Variant.select(t,{"mshtml":null,"webkit":[r,m,j],"gecko":[d],"opera":[r]}),__cj:qx.core.Variant.select(t,{"mshtml":null,"webkit":[q,h,e],"gecko":[k],"opera":[q]}),__ck:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cl:function(F){var G=this.__ck;
return G.tags[F.tagName.toLowerCase()]||G.types[F.type];
},compile:qx.core.Variant.select(t,{"mshtml":function(D){{};
},"default":function(a){var c=this.__cj;
var b=s;

if(c){for(var i=0,l=c.length;i<l;i++){b+=c[i]+p+a+f;
}}return b;
}}),get:qx.core.Variant.select(t,{"mshtml":function(A){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(A))){if(!this.__cl(A)){return g;
}}return o;
},"default":function(x){var z=this.__ci;
var y;

if(z){for(var i=0,l=z.length;i<l;i++){y=qx.bom.element.Style.get(x,z[i],null,false);

if(y!=null&&y!==s){return y;
}}}return s;
}}),set:qx.core.Variant.select(t,{"mshtml":function(B,C){{};
},"default":function(u,v){var w=this.__ci;

if(w){for(var i=0,l=w.length;i<l;i++){u.style[w[i]]=v;
}}}}),reset:function(E){this.set(E,s);
}}});
})();
(function(){var m="",k="qx.client",h="userSelect",g="style",f="MozUserModify",e="px",d="float",c="borderImage",b="styleFloat",a="appearance",F="pixelHeight",E='Ms',D=":",C="cssFloat",B="pixelTop",A="pixelLeft",z='O',y="qx.bom.element.Style",x='Khtml',w='string',t="pixelRight",u='Moz',r="pixelWidth",s="pixelBottom",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(y,{statics:{__bS:function(){var bd=[a,h,q,c];
var bh={};
var be=document.documentElement.style;
var bi=[u,o,x,z,E];

for(var i=0,l=bd.length;i<l;i++){var bj=bd[i];
var bf=bj;

if(be[bj]){bh[bf]=bj;
continue;
}bj=qx.lang.String.firstUp(bj);

for(var j=0,bk=bi.length;j<bk;j++){var bg=bi[j]+bj;

if(typeof be[bg]==w){bh[bf]=bg;
break;
}}}this.__bT=bh;
this.__bT[n]=qx.core.Variant.select(k,{"gecko":f,"webkit":v,"default":h});
this.__bU={};

for(var bf in bh){this.__bU[bf]=this.__bY(bh[bf]);
}this.__bT[d]=qx.core.Variant.select(k,{"mshtml":b,"default":C});
},__bV:{width:r,height:F,left:A,right:t,top:B,bottom:s},__bW:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(P){var R=[];
var T=this.__bW;
var S=this.__bU;
var name,Q;

for(name in P){Q=P[name];

if(Q==null){continue;
}name=S[name]||name;
if(T[name]){R.push(T[name].compile(Q));
}else{R.push(this.__bY(name),D,Q,p);
}}return R.join(m);
},__bX:{},__bY:function(br){var bs=this.__bX;
var bt=bs[br];

if(!bt){bt=bs[br]=qx.lang.String.hyphenate(br);
}return bt;
},setCss:qx.core.Variant.select(k,{"mshtml":function(V,W){V.style.cssText=W;
},"default":function(ba,bb){ba.setAttribute(g,bb);
}}),getCss:qx.core.Variant.select(k,{"mshtml":function(bc){return bc.style.cssText.toLowerCase();
},"default":function(bq){return bq.getAttribute(g);
}}),isPropertySupported:function(U){return (this.__bW[U]||this.__bT[U]||U in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bu,name,bv,bw){{};
name=this.__bT[name]||name;
if(bw!==false&&this.__bW[name]){return this.__bW[name].set(bu,bv);
}else{bu.style[name]=bv!==null?bv:m;
}},setStyles:function(H,I,J){{};
var M=this.__bT;
var O=this.__bW;
var K=H.style;

for(var N in I){var L=I[N];
var name=M[N]||N;

if(L===undefined){if(J!==false&&O[name]){O[name].reset(H);
}else{K[name]=m;
}}else{if(J!==false&&O[name]){O[name].set(H,L);
}else{K[name]=L!==null?L:m;
}}}},reset:function(X,name,Y){name=this.__bT[name]||name;
if(Y!==false&&this.__bW[name]){return this.__bW[name].reset(X);
}else{X.style[name]=m;
}},get:qx.core.Variant.select(k,{"mshtml":function(bx,name,by,bz){name=this.__bT[name]||name;
if(bz!==false&&this.__bW[name]){return this.__bW[name].get(bx,by);
}if(!bx.currentStyle){return bx.style[name]||m;
}switch(by){case this.LOCAL_MODE:return bx.style[name]||m;
case this.CASCADED_MODE:return bx.currentStyle[name]||m;
default:var bD=bx.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bD)){return bD;
}var bC=this.__bV[name];

if(bC){var bA=bx.style[name];
bx.style[name]=bD||0;
var bB=bx.style[bC]+e;
bx.style[name]=bA;
return bB;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bD)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bD;
}},"default":function(bl,name,bm,bn){name=this.__bT[name]||name;
if(bn!==false&&this.__bW[name]){return this.__bW[name].get(bl,bm);
}switch(bm){case this.LOCAL_MODE:return bl.style[name]||m;
case this.CASCADED_MODE:if(bl.currentStyle){return bl.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bo=qx.dom.Node.getDocument(bl);
var bp=bo.defaultView.getComputedStyle(bl,null);
return bp?bp[name]:m;
}}})},defer:function(G){G.__bS();
}});
})();
(function(){var p="borderTopWidth",o="borderLeftWidth",n="marginTop",m="marginLeft",l="scroll",k="qx.client",j="border-box",i="borderBottomWidth",h="borderRightWidth",g="auto",E="padding",D="qx.bom.element.Location",C="paddingLeft",B="static",A="marginBottom",z="visible",y="BODY",x="paddingBottom",w="paddingTop",v="marginRight",t="position",u="margin",r="overflow",s="paddingRight",q="border";
qx.Class.define(D,{statics:{__hx:function(bF,bG){return qx.bom.element.Style.get(bF,bG,qx.bom.element.Style.COMPUTED_MODE,false);
},__hy:function(bA,bB){return parseInt(qx.bom.element.Style.get(bA,bB,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__hz:function(X){var bb=0,top=0;
if(X.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var ba=qx.dom.Node.getWindow(X);
bb-=qx.bom.Viewport.getScrollLeft(ba);
top-=qx.bom.Viewport.getScrollTop(ba);
}else{var Y=qx.dom.Node.getDocument(X).body;
X=X.parentNode;
while(X&&X!=Y){bb+=X.scrollLeft;
top+=X.scrollTop;
X=X.parentNode;
}}return {left:bb,top:top};
},__hA:qx.core.Variant.select(k,{"mshtml":function(br){var bt=qx.dom.Node.getDocument(br);
var bs=bt.body;
var bu=0;
var top=0;
bu-=bs.clientLeft+bt.documentElement.clientLeft;
top-=bs.clientTop+bt.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bu+=this.__hy(bs,o);
top+=this.__hy(bs,p);
}return {left:bu,top:top};
},"webkit":function(bn){var bp=qx.dom.Node.getDocument(bn);
var bo=bp.body;
var bq=bo.offsetLeft;
var top=bo.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bq+=this.__hy(bo,o);
top+=this.__hy(bo,p);
}return {left:bq,top:top};
},"gecko":function(bx){var by=qx.dom.Node.getDocument(bx).body;
var bz=by.offsetLeft;
var top=by.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bz+=this.__hy(by,m);
top+=this.__hy(by,n);
}if(qx.bom.element.BoxSizing.get(by)!==j){bz+=this.__hy(by,o);
top+=this.__hy(by,p);
}return {left:bz,top:top};
},"default":function(bC){var bD=qx.dom.Node.getDocument(bC).body;
var bE=bD.offsetLeft;
var top=bD.offsetTop;
return {left:bE,top:top};
}}),__hB:qx.core.Variant.select(k,{"mshtml|webkit":function(bH){var bJ=qx.dom.Node.getDocument(bH);
if(bH.getBoundingClientRect){var bK=bH.getBoundingClientRect();
var bL=bK.left;
var top=bK.top;
}else{var bL=bH.offsetLeft;
var top=bH.offsetTop;
bH=bH.offsetParent;
var bI=bJ.body;
while(bH&&bH!=bI){bL+=bH.offsetLeft;
top+=bH.offsetTop;
bL+=this.__hy(bH,o);
top+=this.__hy(bH,p);
bH=bH.offsetParent;
}}return {left:bL,top:top};
},"gecko":function(N){if(N.getBoundingClientRect){var Q=N.getBoundingClientRect();
var R=Math.round(Q.left);
var top=Math.round(Q.top);
}else{var R=0;
var top=0;
var O=qx.dom.Node.getDocument(N).body;
var P=qx.bom.element.BoxSizing;

if(P.get(N)!==j){R-=this.__hy(N,o);
top-=this.__hy(N,p);
}
while(N&&N!==O){R+=N.offsetLeft;
top+=N.offsetTop;
if(P.get(N)!==j){R+=this.__hy(N,o);
top+=this.__hy(N,p);
}if(N.parentNode&&this.__hx(N.parentNode,r)!=z){R+=this.__hy(N.parentNode,o);
top+=this.__hy(N.parentNode,p);
}N=N.offsetParent;
}}return {left:R,top:top};
},"default":function(U){var W=0;
var top=0;
var V=qx.dom.Node.getDocument(U).body;
while(U&&U!==V){W+=U.offsetLeft;
top+=U.offsetTop;
U=U.offsetParent;
}return {left:W,top:top};
}}),get:function(bc,bd){if(bc.tagName==y){var location=this.__hC(bc);
var bk=location.left;
var top=location.top;
}else{var be=this.__hA(bc);
var bj=this.__hB(bc);
var scroll=this.__hz(bc);
var bk=bj.left+be.left-scroll.left;
var top=bj.top+be.top-scroll.top;
}var bf=bk+bc.offsetWidth;
var bg=top+bc.offsetHeight;

if(bd){if(bd==E||bd==l){var bh=qx.bom.element.Overflow.getX(bc);

if(bh==l||bh==g){bf+=bc.scrollWidth-bc.offsetWidth+this.__hy(bc,o)+this.__hy(bc,h);
}var bi=qx.bom.element.Overflow.getY(bc);

if(bi==l||bi==g){bg+=bc.scrollHeight-bc.offsetHeight+this.__hy(bc,p)+this.__hy(bc,i);
}}
switch(bd){case E:bk+=this.__hy(bc,C);
top+=this.__hy(bc,w);
bf-=this.__hy(bc,s);
bg-=this.__hy(bc,x);
case l:bk-=bc.scrollLeft;
top-=bc.scrollTop;
bf-=bc.scrollLeft;
bg-=bc.scrollTop;
case q:bk+=this.__hy(bc,o);
top+=this.__hy(bc,p);
bf-=this.__hy(bc,h);
bg-=this.__hy(bc,i);
break;
case u:bk-=this.__hy(bc,m);
top-=this.__hy(bc,n);
bf+=this.__hy(bc,v);
bg+=this.__hy(bc,A);
break;
}}return {left:bk,top:top,right:bf,bottom:bg};
},__hC:qx.core.Variant.select(k,{"default":function(bl){var top=bl.offsetTop+this.__hy(bl,n);
var bm=bl.offsetLeft+this.__hy(bl,m);
return {left:bm,top:top};
},"mshtml":function(d){var top=d.offsetTop;
var e=d.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__hy(d,n);
e+=this.__hy(d,m);
}return {left:e,top:top};
},"gecko":function(bO){var top=bO.offsetTop+this.__hy(bO,n)+this.__hy(bO,o);
var bP=bO.offsetLeft+this.__hy(bO,m)+this.__hy(bO,p);
return {left:bP,top:top};
}}),getLeft:function(bv,bw){return this.get(bv,bw).left;
},getTop:function(S,T){return this.get(S,T).top;
},getRight:function(F,G){return this.get(F,G).right;
},getBottom:function(bM,bN){return this.get(bM,bN).bottom;
},getRelative:function(H,I,J,K){var M=this.get(H,J);
var L=this.get(I,K);
return {left:M.left-L.left,top:M.top-L.top,right:M.right-L.right,bottom:M.bottom-L.bottom};
},getPosition:function(f){return this.getRelative(f,this.getOffsetParent(f));
},getOffsetParent:function(a){var c=a.offsetParent||document.body;
var b=qx.bom.element.Style;

while(c&&(!/^body|html$/i.test(c.tagName)&&b.get(c,t)===B)){c=c.offsetParent;
}return c;
}}});
})();
(function(){var q="qx.client",p="character",o="EndToEnd",n="input",m="textarea",l="StartToStart",k='character',j="qx.bom.Selection",i="button",h="#text",g="body";
qx.Class.define(j,{statics:{getSelectionObject:qx.core.Variant.select(q,{"mshtml":function(bm){return bm.selection;
},"default":function(z){return qx.dom.Node.getWindow(z).getSelection();
}}),get:qx.core.Variant.select(q,{"mshtml":function(bs){var bt=qx.bom.Range.get(qx.dom.Node.getDocument(bs));
return bt.text;
},"default":function(by){if(this.__jP(by)){return by.value.substring(by.selectionStart,by.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(by)).toString();
}}}),getLength:qx.core.Variant.select(q,{"mshtml":function(r){var t=this.get(r);
var s=qx.util.StringSplit.split(t,/\r\n/);
return t.length-(s.length-1);
},"opera":function(a){var f,d,b;

if(this.__jP(a)){var e=a.selectionStart;
var c=a.selectionEnd;
f=a.value.substring(e,c);
d=c-e;
}else{f=qx.bom.Selection.get(a);
d=f.length;
}b=qx.util.StringSplit.split(f,/\r\n/);
return d-(b.length-1);
},"default":function(bn){if(this.__jP(bn)){return bn.selectionEnd-bn.selectionStart;
}else{return this.get(bn).length;
}}}),getStart:qx.core.Variant.select(q,{"mshtml":function(A){if(this.__jP(A)){var F=qx.bom.Range.get();
if(!A.contains(F.parentElement())){return -1;
}var G=qx.bom.Range.get(A);
var E=A.value.length;
G.moveToBookmark(F.getBookmark());
G.moveEnd(k,E);
return E-G.text.length;
}else{var G=qx.bom.Range.get(A);
var C=G.parentElement();
var H=qx.bom.Range.get();
H.moveToElementText(C);
var B=qx.bom.Range.get(qx.dom.Node.getBodyElement(A));
B.setEndPoint(l,G);
B.setEndPoint(o,H);
if(H.compareEndPoints(l,B)==0){return 0;
}var D;
var I=0;

while(true){D=B.moveStart(p,-1);
if(H.compareEndPoints(l,B)==0){break;
}if(D==0){break;
}else{I++;
}}return ++I;
}},"gecko|webkit":function(ba){if(this.__jP(ba)){return ba.selectionStart;
}else{var bc=qx.dom.Node.getDocument(ba);
var bb=this.getSelectionObject(bc);
if(bb.anchorOffset<bb.focusOffset){return bb.anchorOffset;
}else{return bb.focusOffset;
}}},"default":function(L){if(this.__jP(L)){return L.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(L)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(q,{"mshtml":function(bd){if(this.__jP(bd)){var bi=qx.bom.Range.get();
if(!bd.contains(bi.parentElement())){return -1;
}var bj=qx.bom.Range.get(bd);
var bh=bd.value.length;
bj.moveToBookmark(bi.getBookmark());
bj.moveStart(k,-bh);
return bj.text.length;
}else{var bj=qx.bom.Range.get(bd);
var bf=bj.parentElement();
var bk=qx.bom.Range.get();
bk.moveToElementText(bf);
var bh=bk.text.length;
var be=qx.bom.Range.get(qx.dom.Node.getBodyElement(bd));
be.setEndPoint(o,bj);
be.setEndPoint(l,bk);
if(bk.compareEndPoints(o,be)==0){return bh-1;
}var bg;
var bl=0;

while(true){bg=be.moveEnd(p,1);
if(bk.compareEndPoints(o,be)==0){break;
}if(bg==0){break;
}else{bl++;
}}return bh-(++bl);
}},"gecko|webkit":function(bo){if(this.__jP(bo)){return bo.selectionEnd;
}else{var bq=qx.dom.Node.getDocument(bo);
var bp=this.getSelectionObject(bq);
if(bp.focusOffset>bp.anchorOffset){return bp.focusOffset;
}else{return bp.anchorOffset;
}}},"default":function(K){if(this.__jP(K)){return K.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(K)).focusOffset;
}}}),__jP:function(J){return qx.dom.Node.isElement(J)&&(J.nodeName.toLowerCase()==n||J.nodeName.toLowerCase()==m);
},set:qx.core.Variant.select(q,{"mshtml":function(u,v,w){var x;
if(qx.dom.Node.isDocument(u)){u=u.body;
}
if(qx.dom.Node.isElement(u)||qx.dom.Node.isText(u)){switch(u.nodeName.toLowerCase()){case n:case m:case i:if(w===undefined){w=u.value.length;
}
if(v>=0&&v<=u.value.length&&w>=0&&w<=u.value.length){x=qx.bom.Range.get(u);
x.collapse(true);
x.moveStart(p,v);
x.moveEnd(p,w-v);
x.select();
return true;
}break;
case h:if(w===undefined){w=u.nodeValue.length;
}
if(v>=0&&v<=u.nodeValue.length&&w>=0&&w<=u.nodeValue.length){x=qx.bom.Range.get(qx.dom.Node.getBodyElement(u));
x.moveToElementText(u.parentNode);
x.collapse(true);
x.moveStart(p,v);
x.moveEnd(p,w-v);
x.select();
return true;
}break;
default:if(w===undefined){w=u.childNodes.length-1;
}if(u.childNodes[v]&&u.childNodes[w]){x=qx.bom.Range.get(qx.dom.Node.getBodyElement(u));
x.moveToElementText(u.childNodes[v]);
x.collapse(true);
var y=qx.bom.Range.get(qx.dom.Node.getBodyElement(u));
y.moveToElementText(u.childNodes[w]);
x.setEndPoint(o,y);
x.select();
return true;
}}}return false;
},"default":function(M,N,O){var S=M.nodeName.toLowerCase();

if(qx.dom.Node.isElement(M)&&(S==n||S==m)){if(O===undefined){O=M.value.length;
}if(N>=0&&N<=M.value.length&&O>=0&&O<=M.value.length){M.focus();
M.select();
M.setSelectionRange(N,O);
return true;
}}else{var Q=false;
var R=qx.dom.Node.getWindow(M).getSelection();
var P=qx.bom.Range.get(M);
if(qx.dom.Node.isText(M)){if(O===undefined){O=M.length;
}
if(N>=0&&N<M.length&&O>=0&&O<=M.length){Q=true;
}}else if(qx.dom.Node.isElement(M)){if(O===undefined){O=M.childNodes.length-1;
}
if(N>=0&&M.childNodes[N]&&O>=0&&M.childNodes[O]){Q=true;
}}else if(qx.dom.Node.isDocument(M)){M=M.body;

if(O===undefined){O=M.childNodes.length-1;
}
if(N>=0&&M.childNodes[N]&&O>=0&&M.childNodes[O]){Q=true;
}}
if(Q){if(!R.isCollapsed){R.collapseToStart();
}P.setStart(M,N);
if(qx.dom.Node.isText(M)){P.setEnd(M,O);
}else{P.setEndAfter(M.childNodes[O]);
}if(R.rangeCount>0){R.removeAllRanges();
}R.addRange(P);
return true;
}}return false;
}}),setAll:function(br){return qx.bom.Selection.set(br,0);
},clear:qx.core.Variant.select(q,{"mshtml":function(bu){var bv=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bu));
var bw=qx.bom.Range.get(bu);
var parent=bw.parentElement();
var bx=qx.bom.Range.get(qx.dom.Node.getDocument(bu));
if(parent==bx.parentElement()&&parent==bu){bv.empty();
}},"default":function(T){var V=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(T));
var X=T.nodeName.toLowerCase();
if(qx.dom.Node.isElement(T)&&(X==n||X==m)){T.setSelectionRange(0,0);
qx.bom.Element.blur(T);
}else if(qx.dom.Node.isDocument(T)||X==g){V.collapse(T.body?T.body:T,0);
}else{var W=qx.bom.Range.get(T);

if(!W.collapsed){var Y;
var U=W.commonAncestorContainer;
if(qx.dom.Node.isElement(T)&&qx.dom.Node.isText(U)){Y=U.parentNode;
}else{Y=U;
}
if(Y==T){V.collapse(T,0);
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
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__hq:{},remove:function(c){delete this.__hq[c.$$hash];
},add:function(d){var e=this.__hq;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__hq;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__hq={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__hc:{},__hd:{},remove:function(g){var h=g.$$hash;
delete this.__hd[h];
delete this.__hc[h];
},isVisible:function(i){return this.__hd[i.$$hash]||false;
},__he:function(c){var e=this.__hd;
var d=c.$$hash;
var f;
if(c.isExcluded()){f=false;
}else{var parent=c.$$parent;

if(parent){f=this.__he(parent);
}else{f=c.isRootWidget();
}}return e[d]=f;
},add:function(j){var k=this.__hc;

if(k[j.$$hash]){return;
}k[j.$$hash]=j;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var l=this.__hc;
var p=this.__hd;
for(var m in l){if(p[m]!=null){l[m].addChildrenToQueue(l);
}}var o={};

for(var m in l){o[m]=p[m];
p[m]=null;
}for(var m in l){var n=l[m];
delete l[m];
if(p[m]==null){this.__he(n);
}if(p[m]&&p[m]!=o[m]){n.checkAppearanceNeeds();
}}this.__hc={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__gz:{},remove:function(d){delete this.__gz[d.$$hash];
},add:function(i){var j=this.__gz;

if(j[i.$$hash]){return;
}j[i.$$hash]=i;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(c){return !!this.__gz[c.$$hash];
},flush:function(){var h=qx.ui.core.queue.Visibility;
var e=this.__gz;
var g;

for(var f in e){g=e[f];
delete e[f];
if(h.isVisible(g)){g.syncAppearance();
}else{g.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__em:{},add:function(f){var g=this.__em;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__em;

for(var e in c){var d=c[e];
delete c[e];
d.dispose();
}for(var e in c){return;
}this.__em={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(d,e){var f={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){f.pointerEvents=c;
}qx.html.Element.call(this,null,f);
this.__jf=d;
this.__jg=e||d.toHashCode();
this.useMarkup(d.getMarkup());
},members:{__jg:null,__jf:null,getId:function(){return this.__jg;
},getDecorator:function(){return this.__jf;
},resize:function(g,h){this.__jf.resize(this.getDomElement(),g,h);
},tint:function(i){this.__jf.tint(this.getDomElement(),i);
},getInsets:function(){return this.__jf.getInsets();
}},destruct:function(){this.__jf=null;
}});
})();
(function(){var w="blur",v="focus",u="input",t="load",s="qx.ui.core.EventHandler",r="activate";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__dE=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__dE:null,__dF:{focusin:1,focusout:1,focus:1,blur:1},__dG:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(G,H){return G instanceof qx.ui.core.Widget;
},_dispatchEvent:function(a){var f=a.getTarget();
var e=qx.ui.core.Widget.getWidgetByElement(f);
var g=false;

while(e&&e.isAnonymous()){var g=true;
e=e.getLayoutParent();
}if(e&&g&&a.getType()==r){e.getContainerElement().activate();
}if(this.__dF[a.getType()]){e=e&&e.getFocusTarget();
if(!e){return;
}}if(a.getRelatedTarget){var p=a.getRelatedTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);

while(o&&o.isAnonymous()){o=o.getLayoutParent();
}
if(o){if(this.__dF[a.getType()]){o=o.getFocusTarget();
}if(o===e){return;
}}}var j=a.getCurrentTarget();
var m=qx.ui.core.Widget.getWidgetByElement(j);

if(!m||m.isAnonymous()){return;
}if(this.__dF[a.getType()]){m=m.getFocusTarget();
}var n=a.getType();

if(!m||!(m.isEnabled()||this.__dG[n])){return;
}var b=a.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var h=this.__dE.getListeners(m,n,b);

if(!h||h.length===0){return;
}var c=qx.event.Pool.getInstance().getObject(a.constructor);
a.clone(c);
c.setTarget(e);
c.setRelatedTarget(o||null);
c.setCurrentTarget(m);
var q=a.getOriginalTarget();

if(q){var d=qx.ui.core.Widget.getWidgetByElement(q);

while(d&&d.isAnonymous()){d=d.getLayoutParent();
}c.setOriginalTarget(d);
}else{c.setOriginalTarget(f);
}for(var i=0,l=h.length;i<l;i++){var k=h[i].context||m;
h[i].handler.call(k,c);
}if(c.getPropagationStopped()){a.stopPropagation();
}
if(c.getDefaultPrevented()){a.preventDefault();
}qx.event.Pool.getInstance().poolObject(c);
},registerEvent:function(C,D,E){var F;

if(D===v||D===w){F=C.getFocusElement();
}else if(D===t||D===u){F=C.getContentElement();
}else{F=C.getContainerElement();
}
if(F){F.addListener(D,this._dispatchEvent,this,E);
}},unregisterEvent:function(x,y,z){var A;

if(y===v||y===w){A=x.getFocusElement();
}else if(y===t||y===u){A=x.getContentElement();
}else{A=x.getContainerElement();
}
if(A){A.removeListener(y,this._dispatchEvent,this,z);
}}},destruct:function(){this.__dE=null;
},defer:function(B){qx.event.Registration.addHandler(B);
}});
})();
(function(){var h="/",g="mshtml",f="",e="qx.client",d="?",c="string",b="qx.util.ResourceManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__bP:qx.$$resources||{},__bQ:{}},members:{has:function(w){return !!this.self(arguments).__bP[w];
},getData:function(x){return this.self(arguments).__bP[x]||null;
},getImageWidth:function(y){var z=this.self(arguments).__bP[y];
return z?z[0]:null;
},getImageHeight:function(A){var B=this.self(arguments).__bP[A];
return B?B[1]:null;
},getImageFormat:function(u){var v=this.self(arguments).__bP[u];
return v?v[2]:null;
},isClippedImage:function(s){var t=this.self(arguments).__bP[s];
return t&&t.length>4;
},toUri:function(o){if(o==null){return o;
}var p=this.self(arguments).__bP[o];

if(!p){return o;
}
if(typeof p===c){var r=p;
}else{var r=p[3];
if(!r){return o;
}}var q=f;

if(qx.core.Variant.isSet(e,g)&&qx.bom.client.Feature.SSL){q=this.self(arguments).__bQ[r];
}return q+qx.$$libraries[r].resourceUri+h+o;
}},defer:function(i){if(qx.core.Variant.isSet(e,g)){if(qx.bom.client.Feature.SSL){for(var m in qx.$$libraries){var k;

if(qx.$$libraries[m].resourceUri){k=qx.$$libraries[m].resourceUri;
}else{i.__bQ[m]=f;
continue;
}if(k.match(/^\/\//)!=null){i.__bQ[m]=window.location.protocol;
}else if(k.match(/^\.\//)!=null){var j=document.URL;
i.__bQ[m]=j.substring(0,j.lastIndexOf(h)+1);
}else if(k.match(/^http/)!=null){}else{var n=window.location.href.indexOf(d);
var l;

if(n==-1){l=window.location.href;
}else{l=window.location.href.substring(0,n);
}i.__bQ[m]=l.substring(0,l.lastIndexOf(h)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__ko:function(){var e=(navigator.userLanguage||navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__ko();
}});
})();
(function(){var w="",v='indexOf',u='slice',t='concat',s='toLocaleLowerCase',r="qx.type.BaseString",q='match',p='toLocaleUpperCase',o='search',n='replace',f='toLowerCase',m='charCodeAt',j='split',e='substring',d='lastIndexOf',h='substr',g='toUpperCase',k='charAt';
qx.Class.define(r,{extend:Object,construct:function(x){var x=x||w;
this.__kM=x;
this.length=x.length;
},members:{$$isString:true,length:0,__kM:null,toString:function(){return this.__kM;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(y,z){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(a,b){{};
var c=[k,m,t,v,d,q,n,o,u,j,h,e,f,g,s,p];
b.valueOf=b.toString;

if(new a(w).valueOf()==null){delete b.valueOf;
}
for(var i=0,l=c.length;i<l;i++){b[c[i]]=String.prototype[c[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__dH=c;
this.__dI=d;
},members:{__dH:null,__dI:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__dH,this.__dI);
}}});
})();
(function(){var k="_",j="",h="_applyLocale",g="changeLocale",f="C",e="qx.dynlocale",d="on",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hD=qx.$$translations||{};
this.__hE=qx.$$locales||{};
var T=qx.bom.client.Locale;
var R=T.LOCALE;
var S=T.VARIANT;

if(S!==j){R+=k+S;
}this.setLocale(R||this.__hF);
},statics:{tr:function(l,m){var n=qx.lang.Array.fromArguments(arguments);
n.splice(0,1);
return qx.locale.Manager.getInstance().translate(l,n);
},trn:function(E,F,G,H){var I=qx.lang.Array.fromArguments(arguments);
I.splice(0,3);
if(G!=1){return qx.locale.Manager.getInstance().translate(F,I);
}else{return qx.locale.Manager.getInstance().translate(E,I);
}},trc:function(K,L,M){var N=qx.lang.Array.fromArguments(arguments);
N.splice(0,2);
return qx.locale.Manager.getInstance().translate(L,N);
},marktr:function(J){return J;
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__hF:f,__hG:null,__hH:null,__hD:null,__hE:null,getLanguage:function(){return this.__hH;
},getTerritory:function(){return this.getLocale().split(k)[1]||j;
},getAvailableLocales:function(){var V=[];

for(var U in this.__hE){if(U!=this.__hF){V.push(U);
}}return V;
},__hI:function(O){var Q;
var P=O.indexOf(k);

if(P==-1){Q=O;
}else{Q=O.substring(0,P);
}return Q;
},_applyLocale:function(bf,bg){this.__hG=bf;
this.__hH=this.__hI(bf);
},addTranslation:function(s,t){var u=this.__hD;

if(u[s]){for(var v in t){u[s][v]=t[v];
}}else{u[s]=t;
}},addLocale:function(W,X){var Y=this.__hE;

if(Y[W]){for(var ba in X){Y[W][ba]=X[ba];
}}else{Y[W]=X;
}},translate:function(bb,bc,bd){var be=this.__hD;
return this.__hJ(be,bb,bc,bd);
},localize:function(o,p,q){var r=this.__hE;
return this.__hJ(r,o,p,q);
},__hJ:function(w,x,y,z){var A;

if(!w){return x;
}
if(z){var C=this.__hI(z);
}else{z=this.__hG;
C=this.__hH;
}if(!A&&w[z]){A=w[z][x];
}if(!A&&w[C]){A=w[C][x];
}if(!A&&w[this.__hF]){A=w[this.__hF][x];
}
if(!A){A=x;
}
if(y.length>0){var B=[];

for(var i=0;i<y.length;i++){var D=y[i];

if(D&&D.translate){B[i]=D.translate();
}else{B[i]=D;
}}A=qx.lang.String.format(A,B);
}
if(qx.core.Variant.isSet(e,d)){A=new qx.locale.LocalizedString(A,x,y);
}return A;
}},destruct:function(){this.__hD=this.__hE=null;
}});
})();
(function(){var p="px",o="qx.client",n="div",m="img",l="",k="no-repeat",j="scale-x",i="mshtml",h="scale",g="scale-y",L="qx/icon",K="repeat",J=".png",I="crop",H="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",G='<div style="',F="repeat-y",E='<img src="',D="qx.bom.element.Decoration",C="', sizingMethod='",w="png",x="')",u='"></div>',v='"/>',s='" style="',t="none",q="webkit",r=" ",y="repeat-x",z="DXImageTransform.Microsoft.AlphaImageLoader",B="qx/static/blank.gif",A="absolute";
qx.Class.define(D,{statics:{DEBUG:false,__gl:{},__gm:qx.core.Variant.isSet(o,i),__gn:qx.core.Variant.select(o,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__go:{"scale-x":m,"scale-y":m,"scale":m,"repeat":n,"no-repeat":n,"repeat-x":n,"repeat-y":n},update:function(bu,bv,bw,bx){var bz=this.getTagName(bw,bv);

if(bz!=bu.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bA=this.getAttributes(bv,bw,bx);

if(bz===m){bu.src=bA.src||qx.util.ResourceManager.getInstance().toUri(B);
}if(bu.style.backgroundPosition!=l&&bA.style.backgroundPosition===undefined){bA.style.backgroundPosition=null;
}if(bu.style.clip!=l&&bA.style.clip===undefined){bA.style.clip=null;
}var by=qx.bom.element.Style;
by.setStyles(bu,bA.style);
if(this.__gm){try{bu.filters[z].apply();
}catch(e){}}},create:function(Y,ba,bb){var bc=this.getTagName(ba,Y);
var be=this.getAttributes(Y,ba,bb);
var bd=qx.bom.element.Style.compile(be.style);

if(bc===m){return E+be.src+s+bd+v;
}else{return G+bd+u;
}},getTagName:function(bN,bO){if(qx.core.Variant.isSet(o,i)){if(bO&&this.__gm&&this.__gn[bN]&&qx.lang.String.endsWith(bO,J)){return n;
}}return this.__go[bN];
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
},__gp:function(bP,bQ,bR){if(bP.width==null&&bQ!=null){bP.width=bQ+p;
}
if(bP.height==null&&bR!=null){bP.height=bR+p;
}return bP;
},__gq:function(bK){var bL=qx.util.ResourceManager.getInstance().getImageWidth(bK)||qx.io.ImageLoader.getWidth(bK);
var bM=qx.util.ResourceManager.getInstance().getImageHeight(bK)||qx.io.ImageLoader.getHeight(bK);
return {width:bL,height:bM};
},__gr:function(bo,bp,bq){var bt=this.__gq(bq);
bo=this.__gp(bo,bt.width,bt.height);
var bs=bp==k?I:h;
var br=H+qx.util.ResourceManager.getInstance().toUri(bq)+C+bs+x;
bo.filter=br;
bo.backgroundImage=bo.backgroundRepeat=l;
return {style:bo};
},__gs:function(bB,bC,bD){var bE=qx.util.ResourceManager.getInstance().toUri(bD);
var bF=this.__gq(bD);
bB=this.__gp(bB,bF.width,bF.height);
return {src:bE,style:bB};
},__gt:function(Q,R,S){var W=qx.util.ResourceManager.getInstance();
var V=W.isClippedImage(S);
var X=this.__gq(S);

if(V){var U=W.getData(S);
var T=W.toUri(U[4]);

if(R===j){Q=this.__gu(Q,U,X.height);
}else{Q=this.__gv(Q,U,X.width);
}return {src:T,style:Q};
}else{{};

if(R==j){Q.height=X.height==null?null:X.height+p;
}else if(R==g){Q.width=X.width==null?null:X.width+p;
}var T=W.toUri(S);
return {src:T,style:Q};
}},__gu:function(M,N,O){var P=qx.util.ResourceManager.getInstance().getImageHeight(N[4]);
M.clip={top:-N[6],height:O};
M.height=P+p;
if(M.top!=null){M.top=(parseInt(M.top,10)+N[6])+p;
}else if(M.bottom!=null){M.bottom=(parseInt(M.bottom,10)+O-P-N[6])+p;
}return M;
},__gv:function(bG,bH,bI){var bJ=qx.util.ResourceManager.getInstance().getImageWidth(bH[4]);
bG.clip={left:-bH[5],width:bI};
bG.width=bJ+p;
if(bG.left!=null){bG.left=(parseInt(bG.left,10)+bH[5])+p;
}else if(bG.right!=null){bG.right=(parseInt(bG.right,10)+bI-bJ-bH[5])+p;
}return bG;
},__gw:function(bf,bh,bi){var bn=qx.util.ResourceManager.getInstance().isClippedImage(bi);
var bm=this.__gq(bi);
if(bn&&bh!==K){var bl=qx.util.ResourceManager.getInstance().getData(bi);
var bk=qx.bom.element.Background.getStyles(bl[4],bh,bl[5],bl[6]);

for(var bj in bk){bf[bj]=bk[bj];
}
if(bm.width!=null&&bf.width==null&&(bh==F||bh===k)){bf.width=bm.width+p;
}
if(bm.height!=null&&bf.height==null&&(bh==y||bh===k)){bf.height=bm.height+p;
}return {style:bf};
}else{{};
bf=this.__gp(bf,bm.width,bm.height);
bf=this.__gx(bf,bi,bh);
return {style:bf};
}},__gx:function(bS,bT,bU){var top=null;
var bY=null;

if(bS.backgroundPosition){var bV=bS.backgroundPosition.split(r);
bY=parseInt(bV[0]);

if(isNaN(bY)){bY=bV[0];
}top=parseInt(bV[1]);

if(isNaN(top)){top=bV[1];
}}var bX=qx.bom.element.Background.getStyles(bT,bU,bY,top);

for(var bW in bX){bS[bW]=bX[bW];
}if(bS.filter){bS.filter=l;
}return bS;
},__gy:function(ca){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ca)&&ca.indexOf(L)==-1){if(!this.__gl[ca]){qx.log.Logger.debug("Potential clipped image candidate: "+ca);
this.__gl[ca]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(o,{"mshtml":function(){return qx.bom.element.Decoration.__gm;
},"default":function(){return false;
}})}});
})();
(function(){var d="qx.client",c="load",b="qx.io.ImageLoader";
qx.Bootstrap.define(b,{statics:{__jW:{},__jX:{width:null,height:null},__jY:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(r){var s=this.__jW[r];
return !!(s&&s.loaded);
},isFailed:function(e){var f=this.__jW[e];
return !!(f&&f.failed);
},isLoading:function(h){var j=this.__jW[h];
return !!(j&&j.loading);
},getFormat:function(G){var H=this.__jW[G];
return H?H.format:null;
},getSize:function(k){var m=this.__jW[k];
return m?
{width:m.width,height:m.height}:this.__jX;
},getWidth:function(n){var o=this.__jW[n];
return o?o.width:null;
},getHeight:function(p){var q=this.__jW[p];
return q?q.height:null;
},load:function(v,w,x){var y=this.__jW[v];

if(!y){y=this.__jW[v]={};
}if(w&&!x){x=window;
}if(y.loaded||y.loading||y.failed){if(w){if(y.loading){y.callbacks.push(w,x);
}else{w.call(x,v,y);
}}}else{y.loading=true;
y.callbacks=[];

if(w){y.callbacks.push(w,x);
}var A=new Image();
var z=qx.lang.Function.listener(this.__ka,this,A,v);
A.onload=z;
A.onerror=z;
A.src=v;
}},__ka:qx.event.GlobalError.observeMethod(function(event,B,C){var D=this.__jW[C];
if(event.type===c){D.loaded=true;
D.width=this.__kb(B);
D.height=this.__kc(B);
var E=this.__jY.exec(C);

if(E!=null){D.format=E[1];
}}else{D.failed=true;
}B.onload=B.onerror=null;
var F=D.callbacks;
delete D.loading;
delete D.callbacks;
for(var i=0,l=F.length;i<l;i+=2){F[i].call(F[i+1],C,D);
}}),__kb:qx.core.Variant.select(d,{"gecko":function(a){return a.naturalWidth;
},"default":function(u){return u.width;
}}),__kc:qx.core.Variant.select(d,{"gecko":function(t){return t.naturalHeight;
},"default":function(g){return g.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__cs:[i,null,h,b,null,j,e,null,j],__ct:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cu:function(n,top){var o=qx.bom.client.Engine;

if(o.GECKO&&o.VERSION<1.9&&n==top&&typeof n==m){top+=0.01;
}
if(n){var p=(typeof n==m)?n+k:n;
}else{p=l;
}
if(top){var q=(typeof top==m)?top+k:top;
}else{q=l;
}return p+d+q;
},compile:function(r,s,t,top){var u=this.__cu(t,top);
var v=qx.util.ResourceManager.getInstance().toUri(r);
var w=this.__cs;
w[1]=v;
w[4]=u;
w[7]=s;
return w.join(g);
},getStyles:function(D,E,F,top){if(!D){return this.__ct;
}var G=this.__cu(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I={backgroundPosition:G,backgroundImage:c+H+f};

if(E!=null){I.backgroundRepeat=E;
}return I;
},set:function(x,y,z,A,top){var B=this.getStyles(y,z,A,top);

for(var C in B){x.style[C]=B[C];
}}}});
})();
(function(){var j="source",i="scale",h="no-repeat",g="qx.client",f="mshtml",e="webkit",d="backgroundImage",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,m){qx.html.Element.prototype._applyProperty.call(this,name,m);

if(name===j){var q=this.getDomElement();
var n=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(d)){n.backgroundPosition=null;
n.backgroundRepeat=null;
}var o=this._getProperty(j);
var p=this._getProperty(i);
var r=p?i:h;
if(o!=null){qx.bom.element.Decoration.update(q,o,r,n);
}}},_createDomElement:function(){var t=this._getProperty(i);
var u=t?i:h;

if(qx.core.Variant.isSet(g,f)){var s=this._getProperty(j);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(u,s));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(u));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(l){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(k){this._setProperty(j,k);
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
(function(){var l="nonScaled",k="scaled",j="alphaScaled",i=".png",h="qx.client",g="div",f="replacement",e="hidden",d="Boolean",c="px",x="scale",w="changeSource",v="qx.ui.basic.Image",u="__hK",t="-disabled.$1",s="String",r="_applySource",q="img",p="image",o="mshtml",m="_applyScale",n="no-repeat";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(U){this.__hK={};
qx.ui.core.Widget.call(this);

if(U){this.setSource(U);
}},properties:{source:{check:s,init:null,nullable:true,event:w,apply:r,themeable:true},scale:{check:d,init:false,themeable:true,apply:m},appearance:{refine:true,init:p},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hL:null,__hM:null,__hN:null,__hK:null,getContentElement:function(){return this.__hR();
},_createContentElement:function(){return this.__hR();
},_getContentHint:function(){return {width:this.__hL||0,height:this.__hM||0};
},_applyEnabled:function(V,W){qx.ui.core.Widget.prototype._applyEnabled.call(this,V,W);

if(this.getSource()){this._styleSource();
}},_applySource:function(bm){this._styleSource();
},_applyScale:function(a){this._styleSource();
},__hO:function(b){this.__hN=b;
},__hP:function(){if(this.__hN==null){var I=this.getSource();
var H=false;

if(I!=null){H=qx.lang.String.endsWith(I,i);
}
if(this.getScale()&&H&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hN=j;
}else if(this.getScale()){this.__hN=k;
}else{this.__hN=l;
}}return this.__hN;
},__hQ:function(bi){var bj;
var bk;

if(bi==j){bj=true;
bk=g;
}else if(bi==l){bj=false;
bk=g;
}else{bj=true;
bk=q;
}var bl=new qx.html.Image(bk);
bl.setScale(bj);
bl.setStyles({"overflowX":e,"overflowY":e});
return bl;
},__hR:function(){var y=this.__hP();

if(this.__hK[y]==null){this.__hK[y]=this.__hQ(y);
}return this.__hK[y];
},_styleSource:function(){var X=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!X){this.getContentElement().resetSource();
return;
}this.__hS(X);

if(qx.core.Variant.isSet(h,o)){var Y=this.getScale()?x:n;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(Y,X);
}if(qx.util.ResourceManager.getInstance().has(X)){this.__hU(this.getContentElement(),X);
}else if(qx.io.ImageLoader.isLoaded(X)){this.__hV(this.getContentElement(),X);
}else{this.__hW(this.getContentElement(),X);
}},__hS:qx.core.Variant.select(h,{"mshtml":function(R){var T=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var S=qx.lang.String.endsWith(R,i);

if(T&&S){if(this.getScale()&&this.__hP()!=j){this.__hO(j);
}else if(!this.getScale()&&this.__hP()!=l){this.__hO(l);
}}else{if(this.getScale()&&this.__hP()!=k){this.__hO(k);
}else if(!this.getScale()&&this.__hP()!=l){this.__hO(l);
}}this.__hT(this.__hR());
},"default":function(Q){if(this.getScale()&&this.__hP()!=k){this.__hO(k);
}else if(!this.getScale()&&this.__hP(l)){this.__hO(l);
}this.__hT(this.__hR());
}}),__hT:function(J){var M=this.getContainerElement();
var N=M.getChild(0);

if(N!=J){if(N!=null){var P=c;
var K={};
var L=this.getInnerSize();

if(L!=null){K.width=L.width+P;
K.height=L.height+P;
}var O=this.getInsets();
K.left=O.left+P;
K.top=O.top+P;
K.zIndex=10;
J.setStyles(K,true);
J.setSelectable(this.getSelectable());
}M.removeAt(0);
M.addAt(J,0);
}},__hU:function(B,C){var E=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var D=C.replace(/\.([a-z]+)$/,t);

if(E.has(D)){C=D;
this.addState(f);
}else{this.removeState(f);
}}if(B.getSource()===C){return;
}B.setSource(C);
this.__hY(E.getImageWidth(C),E.getImageHeight(C));
},__hV:function(bd,be){var bg=qx.io.ImageLoader;
bd.setSource(be);
var bf=bg.getWidth(be);
var bh=bg.getHeight(be);
this.__hY(bf,bh);
},__hW:function(ba,bb){var self;
var bc=qx.io.ImageLoader;
{};
if(!bc.isFailed(bb)){bc.load(bb,this.__hX,this);
}else{if(ba!=null){ba.resetSource();
}}},__hX:function(z,A){if(this.$$disposed===true){return;
}if(z!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(A.failed){this.warn("Image could not be loaded: "+z);
}this._styleSource();
},__hY:function(F,G){if(F!==this.__hL||G!==this.__hM){this.__hL=F;
this.__hM=G;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(u);
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
this.__jx=h;
},events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__jx:null,_applyTimeoutInterval:function(a){this.__jx.setInterval(a);
},_onInterval:function(){this.fireEvent(g);
}},destruct:function(){if(this.__jx){this.__jx.stop();
}this.__jx=null;
}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d='__gA',b="keep-align",a="direct";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__gA=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__gB:null,compute:function(w,x,y,z,A,B,C){this.__gB=this.__gB||new qx.util.placement.Placement();
var F=A.split(f);
var E=F[0];
var D=F[1];
this.__gB.set({axisX:this.__gF(B),axisY:this.__gF(C),edge:E,align:D});
return this.__gB.compute(w,x,y,z);
},__gC:null,__gD:null,__gE:null,__gF:function(I){switch(I){case a:this.__gC=this.__gC||new qx.util.placement.DirectAxis();
return this.__gC;
case b:this.__gD=this.__gD||new qx.util.placement.KeepAlignAxis();
return this.__gD;
case c:this.__gE=this.__gE||new qx.util.placement.BestFitAxis();
return this.__gE;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__gA:null,compute:function(p,q,r,s){{};
var t=this.getAxisX()||this.__gA;
var v=t.computeStart(p.width,{start:r.left,end:r.right},{start:s.left,end:s.right},q.width,this.__gG());
var u=this.getAxisY()||this.__gA;
var top=u.computeStart(p.height,{start:r.top,end:r.bottom},{start:s.top,end:s.bottom},q.height,this.__gH());
return {left:v,top:top};
},__gG:function(){var H=this.getEdge();
var G=this.getAlign();

if(H==l){return i;
}else if(H==n){return g;
}else if(G==l){return k;
}else if(G==n){return h;
}},__gH:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(n,o,p,q){switch(q){case e:return o.start-p.end-n;
case b:return o.end+p.start;
case d:return o.start+p.start;
case c:return o.end-p.end-n;
}},_isInRange:function(k,l,m){return k>=0&&k+l<=m;
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
(function(){var h="mousedown",g="__pT",f="blur",d="singleton",c="qx.ui.popup.Manager";
qx.Class.define(c,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__pT={};
qx.event.Registration.addListener(document.documentElement,h,this.__pV,this,true);
qx.bom.Element.addListener(window,f,this.hideAll,this);
},members:{__pT:null,add:function(l){{};
this.__pT[l.$$hash]=l;
this.__pU();
},remove:function(q){{};
var r=this.__pT;

if(r){delete r[q.$$hash];
this.__pU();
}},hideAll:function(){var b=this.__pT;

if(b){for(var a in b){b[a].exclude();
}}},__pU:function(){var k=1e7;
var j=this.__pT;

for(var i in j){j[i].setZIndex(k++);
}},__pV:function(e){var o=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var p=this.__pT;

for(var n in p){var m=p[n];

if(!m.getAutoHide()||o==m||qx.ui.core.Widget.contains(m,o)){continue;
}m.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,h,this.__pV,this,true);
this._disposeMap(g);
}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__fI:null,_invalidChildrenCache:null,__fJ:null,invalidateLayoutCache:function(){this.__fI=null;
},renderLayout:function(f,g){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__fI){return this.__fI;
}return this.__fI=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var h=this.__fJ;

if(h instanceof qx.ui.core.LayoutItem){h.clearSeparators();
}},_renderSeparator:function(c,d){this.__fJ.renderSeparator(c,d);
},connectToWidget:function(i){if(i&&this.__fJ){throw new Error("It is not possible to manually set the connected widget.");
}this.__fJ=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__fJ;
},_applyLayoutChange:function(){if(this.__fJ){this.__fJ.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__fJ.getLayoutChildren();
}},destruct:function(){this.__fJ=this.__fI=null;
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
(function(){var m="label",l="icon",k="Boolean",j="both",i="String",h="left",g="changeGap",f="changeShow",e="bottom",d="_applyCenter",z="changeIcon",y="qx.ui.basic.Atom",x="changeLabel",w="Integer",v="_applyIconPosition",u="top",t="right",s="_applyRich",r="_applyIcon",q="_applyShow",o="_applyLabel",p="_applyGap",n="atom";
qx.Class.define(y,{extend:qx.ui.core.Widget,construct:function(H,I){{};
qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(H!=null){this.setLabel(H);
}
if(I!=null){this.setIcon(I);
}},properties:{appearance:{refine:true,init:n},label:{apply:o,nullable:true,check:i,event:x},rich:{check:k,init:false,apply:s},icon:{check:i,apply:r,nullable:true,themeable:true,event:z},gap:{check:w,nullable:false,event:g,apply:p,themeable:true,init:4},show:{init:j,check:[j,m,l],themeable:true,inheritable:true,apply:q,event:f},iconPosition:{init:h,check:[u,t,e,h],themeable:true,apply:v},center:{init:false,check:k,themeable:true,apply:d}},members:{_createChildControlImpl:function(Q){var R;

switch(Q){case m:R=new qx.ui.basic.Label(this.getLabel());
R.setAnonymous(true);
R.setRich(this.getRich());
this._add(R);

if(this.getLabel()==null||this.getShow()===l){R.exclude();
}break;
case l:R=new qx.ui.basic.Image(this.getIcon());
R.setAnonymous(true);
this._addAt(R,0);

if(this.getIcon()==null||this.getShow()===m){R.exclude();
}break;
}return R||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,Q);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===l){this._excludeChildControl(m);
}else{this._showChildControl(m);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===m){this._excludeChildControl(l);
}else{this._showChildControl(l);
}},_applyLabel:function(E,F){var G=this.getChildControl(m,true);

if(G){G.setValue(E);
}this._handleLabel();
},_applyRich:function(N,O){var P=this.getChildControl(m,true);

if(P){P.setRich(N);
}},_applyIcon:function(a,b){var c=this.getChildControl(l,true);

if(c){c.setSource(a);
}this._handleIcon();
},_applyGap:function(C,D){this._getLayout().setGap(C);
},_applyShow:function(J,K){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(L,M){this._getLayout().setIconPosition(L);
},_applyCenter:function(A,B){this._getLayout().setCenter(A);
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
},computeHorizontalAlignOffset:function(be,bf,bg,bh,bi){if(bh==null){bh=0;
}
if(bi==null){bi=0;
}var bj=0;

switch(be){case e:bj=bh;
break;
case a:bj=bg-bf-bi;
break;
case d:bj=Math.round((bg-bf)/2);
if(bj<bh){bj=bh;
}else if(bj<bi){bj=Math.max(bh,bg-bf-bi);
}break;
}return bj;
},computeVerticalAlignOffset:function(X,Y,ba,bb,bc){if(bb==null){bb=0;
}
if(bc==null){bc=0;
}var bd=0;

switch(X){case c:bd=bb;
break;
case b:bd=ba-Y-bc;
break;
case g:bd=Math.round((ba-Y)/2);
if(bd<bb){bd=bb;
}else if(bd<bc){bd=Math.max(bb,ba-Y-bc);
}break;
}return bd;
},collapseMargins:function(v){var w=0,y=0;

for(var i=0,l=arguments.length;i<l;i++){var x=arguments[i];

if(x<0){y=Math.min(y,x);
}else if(x>0){w=Math.max(w,x);
}}return w+y;
},computeHorizontalGaps:function(H,I,J){if(I==null){I=0;
}var K=0;

if(J){K+=H[0].getMarginLeft();

for(var i=1,l=H.length;i<l;i+=1){K+=this.collapseMargins(I,H[i-1].getMarginRight(),H[i].getMarginLeft());
}K+=H[l-1].getMarginRight();
}else{for(var i=1,l=H.length;i<l;i+=1){K+=H[i].getMarginLeft()+H[i].getMarginRight();
}K+=(I*(l-1));
}return K;
},computeVerticalGaps:function(h,j,k){if(j==null){j=0;
}var m=0;

if(k){m+=h[0].getMarginTop();

for(var i=1,l=h.length;i<l;i+=1){m+=this.collapseMargins(j,h[i-1].getMarginBottom(),h[i].getMarginTop());
}m+=h[l-1].getMarginBottom();
}else{for(var i=1,l=h.length;i<l;i+=1){m+=h[i].getMarginTop()+h[i].getMarginBottom();
}m+=(j*(l-1));
}return m;
},computeHorizontalSeparatorGaps:function(n,o,p){var s=qx.theme.manager.Decoration.getInstance().resolve(p);
var r=s.getInsets();
var q=r.left+r.right;
var t=0;

for(var i=0,l=n.length;i<l;i++){var u=n[i];
t+=u.getMarginLeft()+u.getMarginRight();
}t+=(o+q+o)*(l-1);
return t;
},computeVerticalSeparatorGaps:function(z,A,B){var E=qx.theme.manager.Decoration.getInstance().resolve(B);
var D=E.getInsets();
var C=D.top+D.bottom;
var F=0;

for(var i=0,l=z.length;i<l;i++){var G=z[i];
F+=G.getMarginTop()+G.getMarginBottom();
}F+=(A+C+A)*(l-1);
return F;
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
(function(){var k="qx.dynlocale",j="text",i="Boolean",h="color",g="userSelect",f="changeLocale",d="enabled",c="none",b="on",a="_applyTextAlign",H="qx.ui.core.Widget",G="nowrap",F="changeTextAlign",E="_applyWrap",D="changeValue",C="qx.client",B="changeContent",A="qx.ui.basic.Label",z="A",y="whiteSpace",r="_applyValue",s="center",p="_applyBuddy",q="String",n="textAlign",o="right",l="changeRich",m="normal",t="_applyRich",u="click",w="label",v="webkit",x="left";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(I){qx.ui.core.Widget.call(this);

if(I!=null){this.setValue(I);
}
if(qx.core.Variant.isSet(k,b)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:l,apply:t},wrap:{check:i,init:true,apply:E},value:{check:q,apply:r,event:D,nullable:true},buddy:{check:H,apply:p,nullable:true,init:null},textAlign:{check:[x,s,o],nullable:true,themeable:true,apply:a,event:F},appearance:{refine:true,init:w},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__fR:null,__fS:null,__fT:null,__fU:null,_getContentHint:function(){if(this.__fS){this.__fV=this.__fW();
delete this.__fS;
}return {width:this.__fV.width,height:this.__fV.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(N){if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){if(N&&!this.isRich()){{};
return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,N);
if(qx.core.Variant.isSet(C,v)){this.getContainerElement().setStyle(g,N?j:c);
this.getContentElement().setStyle(g,N?j:c);
}},_getContentHeightForWidth:function(O){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__fW(O).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(J,K){this.getContentElement().setStyle(n,J);
},_applyTextColor:function(L,M){if(L){this.getContentElement().setStyle(h,qx.theme.manager.Color.getInstance().resolve(L));
}else{this.getContentElement().removeStyle(h);
}},__fV:{width:0,height:0},_applyFont:function(Q,R){var S;

if(Q){this.__fR=qx.theme.manager.Font.getInstance().resolve(Q);
S=this.__fR.getStyles();
}else{this.__fR=null;
S=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(S);
this.__fS=true;
qx.ui.core.queue.Layout.add(this);
},__fW:function(T){var X=qx.bom.Label;
var V=this.getFont();
var U=V?this.__fR.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||z;
var W=this.getRich();
return W?X.getHtmlSize(content,U,T):X.getTextSize(content,U);
},_applyBuddy:function(bc,bd){if(bd!=null){bd.removeBinding(this.__fT);
this.__fT=null;
this.removeListenerById(this.__fU);
this.__fU=null;
}
if(bc!=null){this.__fT=bc.bind(d,this,d);
this.__fU=this.addListener(u,function(){if(bc.isFocusable()){bc.focus.apply(bc);
}},this);
}},_applyRich:function(Y){this.getContentElement().setRich(Y);
this.__fS=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(be,bf){if(be&&!this.isRich()){{};
}
if(this.isRich()){var bg=be?m:G;
this.getContentElement().setStyle(y,bg);
}},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(ba,bb){this.getContentElement().setValue(ba);
this.__fS=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(B,ba,bb);
}},destruct:function(){if(qx.core.Variant.isSet(k,b)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}if(this.__fT!=null){var P=this.getBuddy();

if(P!=null&&!P.isDisposed()){P.removeBinding(this.__fT);
}}this.__fR=this.__fT=null;
}});
})();
(function(){var d="value",c="Please use the getValue() method instead.",b="qx.html.Label",a="Please use the setValue() method instead.";
qx.Class.define(b,{extend:qx.html.Element,members:{__di:null,_applyProperty:function(name,l){qx.html.Element.prototype._applyProperty.call(this,name,l);

if(name==d){var m=this.getDomElement();
qx.bom.Label.setValue(m,l);
}},_createDomElement:function(){var g=this.__di;
var f=qx.bom.Label.create(this._content,g);
return f;
},_copyData:function(h){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(j){var k=this.getDomElement();

if(k){throw new Error("The label mode cannot be modified after initial creation");
}j=!!j;

if(this.__di==j){return;
}this.__di=j;
return this;
},setValue:function(i){this._setProperty(d,i);
return this;
},getValue:function(){return this._getProperty(d);
},setContent:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,a);
return this.setValue(e);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
return this.getValue();
}}});
})();
(function(){var o="div",n="inherit",m="text",l="value",k="",j="hidden",i="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",h="nowrap",g="qx.client",f="auto",G="0",F="ellipsis",E="normal",D="label",C="px",B="crop",A="gecko",z="end",y="100%",x="visible",v="qx.bom.Label",w="Please use the setValue() method instead.",t="opera",u="Please use the getValue() method instead.",r="block",s="none",p="-1000px",q="absolute";
qx.Class.define(v,{statics:{__ia:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__ib:function(){var bi=this.__id(false);
document.body.insertBefore(bi,document.body.firstChild);
return this._textElement=bi;
},__ic:function(){var V=this.__id(true);
document.body.insertBefore(V,document.body.firstChild);
return this._htmlElement=V;
},__id:function(a){var b=qx.bom.Element.create(o);
var c=b.style;
c.width=c.height=f;
c.left=c.top=p;
c.visibility=j;
c.position=q;
c.overflow=x;

if(a){c.whiteSpace=E;
}else{c.whiteSpace=h;

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var d=document.createElementNS(i,D);
var c=d.style;
c.padding=G;

for(var e in this.__ia){c[e]=n;
}b.appendChild(d);
}}return b;
},__ie:function(H){var I={};

if(H){I.whiteSpace=E;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){I.display=r;
}else{I.overflow=j;
I.whiteSpace=h;
I.textOverflow=F;
I.userSelect=s;
if(qx.core.Variant.isSet(g,t)){I.OTextOverflow=F;
}}return I;
},create:function(content,W,X){if(!X){X=window;
}
if(W){var Y=X.document.createElement(o);
Y.useHtml=true;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var Y=X.document.createElement(o);
var bb=X.document.createElementNS(i,D);
var ba=bb.style;
ba.cursor=n;
ba.color=n;
ba.overflow=j;
ba.maxWidth=y;
ba.padding=G;
for(var bc in this.__ia){bb.style[bc]=n;
}bb.setAttribute(B,z);
Y.appendChild(bb);
}else{var Y=X.document.createElement(o);
qx.bom.element.Style.setStyles(Y,this.__ie(W));
}
if(content){this.setValue(Y,content);
}return Y;
},setValue:function(L,M){M=M||k;

if(L.useHtml){L.innerHTML=M;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){L.firstChild.setAttribute(l,M);
}else{qx.bom.element.Attribute.set(L,m,M);
}},getValue:function(bh){if(bh.useHtml){return bh.innerHTML;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){return bh.firstChild.getAttribute(l)||k;
}else{return qx.bom.element.Attribute.get(bh,m);
}},getHtmlSize:function(content,bd,be){var bf=this._htmlElement||this.__ic();
bf.style.width=be!==undefined?be+C:f;
bf.innerHTML=content;
return this.__if(bf,bd);
},getTextSize:function(N,O){var P=this._textElement||this.__ib();

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){P.firstChild.setAttribute(l,N);
}else{qx.bom.element.Attribute.set(P,m,N);
}return this.__if(P,O);
},__if:function(Q,R){var S=this.__ia;

if(!R){R={};
}
for(var T in S){Q.style[T]=R[T]||k;
}var U=qx.bom.element.Dimension.getSize(Q);

if(qx.core.Variant.isSet(g,A)){if(!qx.bom.client.Platform.WIN){U.width++;
}}return U;
},setContent:function(J,K){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
this.setValue(J,K);
},getContent:function(bg){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
return this.getValue(bg);
}}});
})();
(function(){var j="0px",i="mshtml",h="qx.client",g="qx.bom.element.Dimension",f="paddingRight",e="paddingLeft",d="paddingTop",c="paddingBottom";
qx.Class.define(g,{statics:{getWidth:qx.core.Variant.select(h,{"gecko":function(a){if(a.getBoundingClientRect){var b=a.getBoundingClientRect();
return Math.round(b.right)-Math.round(b.left);
}else{return a.offsetWidth;
}},"default":function(D){return D.offsetWidth;
}}),getHeight:qx.core.Variant.select(h,{"gecko":function(y){if(y.getBoundingClientRect){var z=y.getBoundingClientRect();
return Math.round(z.bottom)-Math.round(z.top);
}else{return y.offsetHeight;
}},"default":function(C){return C.offsetHeight;
}}),getSize:function(B){return {width:this.getWidth(B),height:this.getHeight(B)};
},__gX:{visible:true,hidden:true},getContentWidth:function(r){var t=qx.bom.element.Style;
var u=qx.bom.element.Overflow.getX(r);
var v=parseInt(t.get(r,e)||j,10);
var x=parseInt(t.get(r,f)||j,10);

if(this.__gX[u]){return r.clientWidth-v-x;
}else{if(r.clientWidth>=r.scrollWidth){return Math.max(r.clientWidth,r.scrollWidth)-v-x;
}else{var w=r.scrollWidth-v;
var s=qx.bom.client.Engine;

if(s.NAME===i&&s.VERSION==6){w-=x;
}return w;
}}},getContentHeight:function(k){var m=qx.bom.element.Style;
var o=qx.bom.element.Overflow.getY(k);
var p=parseInt(m.get(k,d)||j,10);
var n=parseInt(m.get(k,c)||j,10);

if(this.__gX[o]){return k.clientHeight-p-n;
}else{if(k.clientHeight>=k.scrollHeight){return Math.max(k.clientHeight,k.scrollHeight)-p-n;
}else{var q=k.scrollHeight-p;
var l=qx.bom.client.Engine;

if(l.NAME===i&&l.VERSION==6){q-=n;
}return q;
}}},getContentSize:function(A){return {width:this.getContentWidth(A),height:this.getContentHeight(A)};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(d){return arguments.length==1;
},getEnabled:function(){},setRequired:function(c){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var h="Use 'getBlocker().getContentBlockerElement()' instead.",g="Use 'getBlocker().getBlockerElement()' instead.",f="_applyBlockerColor",e="Number",d="qx.ui.core.MBlocker",c="_applyBlockerOpacity",b="Color",a="__qn";
qx.Mixin.define(d,{construct:function(){this.__qn=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:b,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:c,themeable:true}},members:{__qn:null,_applyBlockerColor:function(l,m){this.__qn.setColor(l);
},_applyBlockerOpacity:function(i,j){this.__qn.setOpacity(i);
},block:function(){this.__qn.block();
},isBlocked:function(){return this.__qn.isBlocked();
},unblock:function(){this.__qn.unblock();
},forceUnblock:function(){this.__qn.forceUnblock();
},blockContent:function(k){this.__qn.blockContent(k);
},isContentBlocked:function(){return this.__qn.isContentBlocked();
},unblockContent:function(){this.__qn.unblockContent();
},forceUnblockContent:function(){this.__qn.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.__qn.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.__qn.getBlockerElement();
},getBlocker:function(){return this.__qn;
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__mm",b="__ml",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__ml:null,__mm:null,getWindowManager:function(){if(!this.__mm){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__mm;
},supportsMaximize:function(){return true;
},setWindowManager:function(l){if(this.__mm){this.__mm.setDesktop(null);
}l.setDesktop(this);
this.__mm=l;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(n,o){this.getWindowManager().changeActiveWindow(n,o);

if(n){n.setActive(true);
}
if(o){o.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(j){if(qx.Class.isDefined(i)&&j instanceof qx.ui.window.Window){this._addWindow(j);
}},_addWindow:function(p){if(!qx.lang.Array.contains(this.getWindows(),p)){this.getWindows().push(p);
p.addListener(f,this._onChangeActive,this);
p.addListener(h,this._onChangeModal,this);
p.addListener(g,this._onChangeVisibility,this);
}
if(p.getActive()){this.setActiveWindow(p);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(m){if(qx.Class.isDefined(i)&&m instanceof qx.ui.window.Window){this._removeWindow(m);
}},_removeWindow:function(k){qx.lang.Array.remove(this.getWindows(),k);
k.removeListener(f,this._onChangeActive,this);
k.removeListener(h,this._onChangeModal,this);
k.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__ml){this.__ml=[];
}return this.__ml;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var r="contextmenu",q="help",p="qx.client",o="changeGlobalCursor",n="abstract",m="Boolean",l="root",k="",j=" !important",i="_applyGlobalCursor",f="_applyNativeHelp",h=";",g="qx.ui.root.Abstract",d="String",c="*";
qx.Class.define(g,{type:n,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:l},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:d,nullable:true,themeable:true,apply:i,event:o},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:m,init:false,apply:f}},members:{__lc:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(p,{"mshtml":function(A,B){},"default":function(s,t){var u=qx.bom.Stylesheet;
var v=this.__lc;

if(!v){this.__lc=v=u.createElement();
}u.removeAllRules(v);

if(s){u.addRule(v,c,qx.bom.element.Cursor.compile(s).replace(h,k)+j);
}}}),_applyNativeContextMenu:function(y,z){if(y){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(p,{"mshtml":function(a,b){if(b===false){qx.bom.Event.removeNativeListener(document,q,qx.lang.Function.returnFalse);
}
if(a===false){qx.bom.Event.addNativeListener(document,q,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__lc=null;
},defer:function(w,x){qx.ui.core.MChildrenHandling.remap(x);
}});
})();
(function(){var n="resize",m="position",l="0px",k="webkit",j="paddingLeft",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(s){this.__qo=qx.dom.Node.getWindow(s);
this.__qp=s;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__qo,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__qo:null,__qp:null,_createContainerElement:function(){var w=this.__qp;
if(qx.core.Variant.isSet(f,k)){if(!w.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var A=w.documentElement.style;
var x=w.body.style;
A.overflow=x.overflow=g;
A.padding=A.margin=x.padding=x.margin=l;
A.width=A.height=x.width=x.height=c;
var z=w.createElement(d);
w.body.appendChild(z);
var y=new qx.html.Root(z);
y.setStyle(m,b);
y.setAttribute(i,this.toHashCode());
return y;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var q=qx.bom.Viewport.getWidth(this.__qo);
var r=qx.bom.Viewport.getHeight(this.__qo);
return {minWidth:q,width:q,maxWidth:q,minHeight:r,height:r,maxHeight:r};
},_applyPadding:function(o,p,name){if(o&&(name==a||name==j)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,o,p,name);
},_applyDecorator:function(t,u){qx.ui.root.Abstract.prototype._applyDecorator.call(this,t,u);

if(!t){return;
}var v=this.getDecoratorElement().getInsets();

if(v.left||v.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__qo=this.__qp=null;
}});
})();
(function(){var y="zIndex",x="px",w="keydown",v="deactivate",u="This method is not needed anymore.",t="resize",s="keyup",r="keypress",q="backgroundColor",p="_applyOpacity",L="Use 'getBlockerElement' instead.",K="opacity",J="__nR",I="interval",H="Tab",G="__nP",F="Color",E="qx.ui.root.Page",D="Use 'getContentBlockerElement' instead.",C="Number",A="qx.ui.core.Blocker",B="__nU",z="_applyColor";
qx.Class.define(A,{extend:qx.core.Object,construct:function(h){qx.core.Object.call(this);
this._widget=h;
this._isPageRoot=(qx.Class.isDefined(E)&&h instanceof qx.ui.root.Page);

if(this._isPageRoot){h.addListener(t,this.__nV,this);
}this.__nM=[];
this.__nN=[];
this.__nO=[];
},properties:{color:{check:F,init:null,nullable:true,apply:z,themeable:true},opacity:{check:C,init:1,apply:p,themeable:true}},members:{__nP:null,__nQ:0,__nR:null,__nO:null,__nM:null,__nN:null,__nS:null,__nT:0,__nU:null,_isPageRoot:false,_widget:null,__nV:function(e){var d=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:d.width,height:d.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:d.width,height:d.height});
}},_applyColor:function(O,P){var Q=qx.theme.manager.Color.getInstance().resolve(O);
this.__nW(q,Q);
},_applyOpacity:function(j,k){this.__nW(K,j);
},__nW:function(m,n){var o=[];
this.__nP&&o.push(this.__nP);
this.__nR&&o.push(this.__nR);

for(var i=0;i<o.length;i++){o[i].setStyle(m,n);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
this.__nT+=1;

if(this.__nT==1){this.__nS=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
this.__nT-=1;

if(this.__nT==0){this._widget.setAnonymous(this.__nS);
}},_backupActiveWidget:function(){var l=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__nM.push(l.getActive());
this.__nN.push(l.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var T=this.__nM.length;

if(T>0){var S=this.__nM[T-1];

if(S){qx.bom.Element.activate(S);
}this.__nM.pop();
}var R=this.__nN.length;

if(R>0){var S=this.__nN[R-1];

if(S){qx.bom.Element.focus(this.__nN[R-1]);
}this.__nN.pop();
}},__nX:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,L);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__nP){this.__nP=this.__nX();
this.__nP.setStyle(y,15);
this._widget.getContainerElement().add(this.__nP);
this.__nP.exclude();
}return this.__nP;
},block:function(){this.__nQ++;

if(this.__nQ<2){this._backupActiveWidget();
var a=this.getBlockerElement();
a.include();
a.activate();
a.addListener(v,this.__od,this);
a.addListener(r,this.__oc,this);
a.addListener(w,this.__oc,this);
a.addListener(s,this.__oc,this);
}},isBlocked:function(){return this.__nQ>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__nQ--;

if(this.__nQ<1){this.__nY();
this.__nQ=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__nQ=0;
this.__nY();
},__nY:function(){this._restoreActiveWidget();
var M=this.getBlockerElement();
M.removeListener(v,this.__od,this);
M.removeListener(r,this.__oc,this);
M.removeListener(w,this.__oc,this);
M.removeListener(s,this.__oc,this);
M.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__nR){this.__nR=this.__nX();
this._widget.getContentElement().add(this.__nR);
this.__nR.exclude();
}return this.__nR;
},blockContent:function(U){var V=this.getContentBlockerElement();
V.setStyle(y,U);
this.__nO.push(U);

if(this.__nO.length<2){V.include();

if(this._isPageRoot){if(!this.__nU){this.__nU=new qx.event.Timer(300);
this.__nU.addListener(I,this.__ob,this);
}this.__nU.start();
this.__ob();
}}},isContentBlocked:function(){return this.__nO.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nO.pop();
var b=this.__nO[this.__nO.length-1];
var c=this.getContentBlockerElement();
c.setStyle(y,b);

if(this.__nO.length<1){this.__oa();
this.__nO=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nO=[];
var N=this.getContentBlockerElement();
N.setStyle(y,null);
this.__oa();
},__oa:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__nU.stop();
}},__ob:function(){var f=this._widget.getContainerElement().getDomElement();
var g=qx.dom.Node.getDocument(f);
this.getContentBlockerElement().setStyles({height:g.documentElement.scrollHeight+x,width:g.documentElement.scrollWidth+x});
},__oc:function(e){if(e.getKeyIdentifier()==H){e.stop();
}},__od:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(t,this.__nV,this);
}this._disposeObjects(J,G,B);
this.__nS=this.__nM=this.__nN=this._widget=this.__nO=null;
}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="qx.client",b="div",a="dblclick",w="mousewheel",v="qx.html.Blocker",u="mousemove",t="mouseover",s="appear",r="click",q="mshtml",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(v,{extend:qx.html.Element,construct:function(y,z){var y=y?qx.theme.manager.Color.getInstance().resolve(y):null;
var A={position:m,width:j,height:j,opacity:z||0,backgroundColor:y};
if(qx.core.Variant.isSet(c,q)){A.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
A.backgroundRepeat=i;
}qx.html.Element.call(this,b,A);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(s,this.__pc,this);
this.addListener(n,this.__pc,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__pc:function(){var x=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,x,true);
}}});
})();
(function(){var o="keypress",n="focusout",m="activate",k="Tab",j="__bg",h="singleton",g="deactivate",f="focusin",d="qx.ui.core.FocusHandler";
qx.Class.define(d,{extend:qx.core.Object,type:h,construct:function(){qx.core.Object.call(this);
this.__bg={};
},members:{__bg:null,__bh:null,__bi:null,__bj:null,connectTo:function(bi){bi.addListener(o,this.__bk,this);
bi.addListener(f,this._onFocusIn,this,true);
bi.addListener(n,this._onFocusOut,this,true);
bi.addListener(m,this._onActivate,this,true);
bi.addListener(g,this._onDeactivate,this,true);
},addRoot:function(Y){this.__bg[Y.$$hash]=Y;
},removeRoot:function(v){delete this.__bg[v.$$hash];
},getActiveWidget:function(){return this.__bh;
},isActive:function(q){return this.__bh==q;
},getFocusedWidget:function(){return this.__bi;
},isFocused:function(p){return this.__bi==p;
},isFocusRoot:function(ba){return !!this.__bg[ba.$$hash];
},_onActivate:function(e){var L=e.getTarget();
this.__bh=L;
var K=this.__bl(L);

if(K!=this.__bj){this.__bj=K;
}},_onDeactivate:function(e){var J=e.getTarget();

if(this.__bh==J){this.__bh=null;
}},_onFocusIn:function(e){var a=e.getTarget();

if(a!=this.__bi){this.__bi=a;
a.visualizeFocus();
}},_onFocusOut:function(e){var P=e.getTarget();

if(P==this.__bi){this.__bi=null;
P.visualizeBlur();
}},__bk:function(e){if(e.getKeyIdentifier()!=k){return;
}
if(!this.__bj){return;
}e.stopPropagation();
e.preventDefault();
var w=this.__bi;

if(!e.isShiftPressed()){var x=w?this.__bp(w):this.__bn();
}else{var x=w?this.__bq(w):this.__bo();
}if(x){x.tabFocus();
}},__bl:function(b){var c=this.__bg;

while(b){if(c[b.$$hash]){return b;
}b=b.getLayoutParent();
}return null;
},__bm:function(y,z){if(y===z){return 0;
}var B=y.getTabIndex()||0;
var A=z.getTabIndex()||0;

if(B!=A){return B-A;
}var G=y.getContainerElement().getDomElement();
var F=z.getContainerElement().getDomElement();
var E=qx.bom.element.Location;
var D=E.get(G);
var C=E.get(F);
if(D.top!=C.top){return D.top-C.top;
}if(D.left!=C.left){return D.left-C.left;
}var H=y.getZIndex();
var I=z.getZIndex();

if(H!=I){return H-I;
}return 0;
},__bn:function(){return this.__bt(this.__bj,null);
},__bo:function(){return this.__bu(this.__bj,null);
},__bp:function(r){var s=this.__bj;

if(s==r){return this.__bn();
}
while(r&&r.getAnonymous()){r=r.getLayoutParent();
}
if(r==null){return [];
}var t=[];
this.__br(s,r,t);
t.sort(this.__bm);
var u=t.length;
return u>0?t[0]:this.__bn();
},__bq:function(U){var V=this.__bj;

if(V==U){return this.__bo();
}
while(U&&U.getAnonymous()){U=U.getLayoutParent();
}
if(U==null){return [];
}var W=[];
this.__bs(V,U,W);
W.sort(this.__bm);
var X=W.length;
return X>0?W[X-1]:this.__bo();
},__br:function(parent,Q,R){var S=parent.getLayoutChildren();
var T;

for(var i=0,l=S.length;i<l;i++){T=S[i];
if(!(T instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(T)&&T.isEnabled()&&T.isVisible()){if(T.isTabable()&&this.__bm(Q,T)<0){R.push(T);
}this.__br(T,Q,R);
}}},__bs:function(parent,bb,bc){var bd=parent.getLayoutChildren();
var be;

for(var i=0,l=bd.length;i<l;i++){be=bd[i];
if(!(be instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(be)&&be.isEnabled()&&be.isVisible()){if(be.isTabable()&&this.__bm(bb,be)>0){bc.push(be);
}this.__bs(be,bb,bc);
}}},__bt:function(parent,bf){var bg=parent.getLayoutChildren();
var bh;

for(var i=0,l=bg.length;i<l;i++){bh=bg[i];
if(!(bh instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bh)&&bh.isEnabled()&&bh.isVisible()){if(bh.isTabable()){if(bf==null||this.__bm(bh,bf)<0){bf=bh;
}}bf=this.__bt(bh,bf);
}}return bf;
},__bu:function(parent,M){var N=parent.getLayoutChildren();
var O;

for(var i=0,l=N.length;i<l;i++){O=N[i];
if(!(O instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(O)&&O.isEnabled()&&O.isVisible()){if(O.isTabable()){if(M==null||this.__bm(O,M)>0){M=O;
}}M=this.__bu(O,M);
}}return M;
}},destruct:function(){this._disposeMap(j);
this.__bi=this.__bh=this.__bj=null;
}});
})();
(function(){var p="qx.client",o="head",n="text/css",m="stylesheet",l="}",k='@import "',j="{",h='";',g="qx.bom.Stylesheet",f="link",e="style";
qx.Class.define(g,{statics:{includeFile:function(bd,be){if(!be){be=document;
}var bf=be.createElement(f);
bf.type=n;
bf.rel=m;
bf.href=qx.util.ResourceManager.getInstance().toUri(bd);
var bg=be.getElementsByTagName(o)[0];
bg.appendChild(bf);
},createElement:qx.core.Variant.select(p,{"mshtml":function(bb){var bc=document.createStyleSheet();

if(bb){bc.cssText=bb;
}return bc;
},"default":function(t){var u=document.createElement(e);
u.type=n;

if(t){u.appendChild(document.createTextNode(t));
}document.getElementsByTagName(o)[0].appendChild(u);
return u.sheet;
}}),addRule:qx.core.Variant.select(p,{"mshtml":function(C,D,E){C.addRule(D,E);
},"default":function(q,r,s){q.insertRule(r+j+s+l,q.cssRules.length);
}}),removeRule:qx.core.Variant.select(p,{"mshtml":function(R,S){var T=R.rules;
var U=T.length;

for(var i=U-1;i>=0;--i){if(T[i].selectorText==S){R.removeRule(i);
}}},"default":function(H,I){var J=H.cssRules;
var K=J.length;

for(var i=K-1;i>=0;--i){if(J[i].selectorText==I){H.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(p,{"mshtml":function(L){var M=L.rules;
var N=M.length;

for(var i=N-1;i>=0;i--){L.removeRule(i);
}},"default":function(O){var P=O.cssRules;
var Q=P.length;

for(var i=Q-1;i>=0;i--){O.deleteRule(i);
}}}),addImport:qx.core.Variant.select(p,{"mshtml":function(V,W){V.addImport(W);
},"default":function(F,G){F.insertRule(k+G+h,F.cssRules.length);
}}),removeImport:qx.core.Variant.select(p,{"mshtml":function(v,w){var x=v.imports;
var y=x.length;

for(var i=y-1;i>=0;i--){if(x[i].href==w){v.removeImport(i);
}}},"default":function(a,b){var c=a.cssRules;
var d=c.length;

for(var i=d-1;i>=0;i--){if(c[i].href==b){a.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(p,{"mshtml":function(z){var A=z.imports;
var B=A.length;

for(var i=B-1;i>=0;i--){z.removeImport(i);
}},"default":function(X){var Y=X.cssRules;
var ba=Y.length;

for(var i=ba-1;i>=0;i--){if(Y[i].type==Y[i].IMPORT_RULE){X.deleteRule(i);
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
(function(){var M="column-button",L="Function",K="Boolean",J="qx.event.type.Data",I="statusbar",H="qx.ui.table.pane.CellEvent",G="PageUp",F='"',E="changeLocale",D="changeSelection",ca="qx.dynlocale",bY="__AV",bX="Enter",bW="metaDataChanged",bV="dataChanged",bU="on",bT="_applyStatusBarVisible",bS="columnVisibilityMenuCreateStart",bR="blur",bQ="qx.ui.table.Table",T="columnVisibilityMenuCreateEnd",U="Use 'resetSelection' instead.",R="verticalScrollBarChanged",S="_applyMetaColumnCounts",P="one of one row",Q="focus",N="changeDataRowRenderer",O="changeHeaderCellHeight",bc="Escape",bd="A",bs="changeSelectionModel",bo="Left",bA="Down",bv="Integer",bM="_applyHeaderCellHeight",bG="visibilityChanged",bj="qx.ui.table.ITableModel",bP="orderChanged",bO="_applySelectionModel",bN="menu",bh="_applyAdditionalStatusBarText",bl="_applyFocusCellOnMouseMove",bn="table",bq="_applyColumnVisibilityButtonVisible",bt="changeTableModel",bw="qx.event.type.Event",bC="__AL",bI="tableWidthChanged",V="End",W="Object",bk="_applyShowCellFocusIndicator",bz="resize",by="__AU",bx="changeScrollY",bE="_applyTableModel",bD="menu-button",bu="_applyKeepFirstVisibleRowComplete",bB="widthChanged",A="Home",bH="_applyRowHeight",X="F2",Y="appear",bp="Up",B="%1 rows",C="qx.ui.table.selection.Model",bg="one row",ba="__AM",bb="PageDown",bf="%1 of %2 rows",br="keypress",bK="changeRowHeight",bJ="Number",bm="__AT",bL="changeVisible",bi="qx.ui.table.IRowRenderer",bF="Right",be="Space";
qx.Class.define(bQ,{extend:qx.ui.core.Widget,construct:function(eI,eJ){qx.ui.core.Widget.call(this);
if(!eJ){eJ={};
}
if(eJ.selectionManager){this.setNewSelectionManager(eJ.selectionManager);
}
if(eJ.selectionModel){this.setNewSelectionModel(eJ.selectionModel);
}
if(eJ.tableColumnModel){this.setNewTableColumnModel(eJ.tableColumnModel);
}
if(eJ.tablePane){this.setNewTablePane(eJ.tablePane);
}
if(eJ.tablePaneHeader){this.setNewTablePaneHeader(eJ.tablePaneHeader);
}
if(eJ.tablePaneScroller){this.setNewTablePaneScroller(eJ.tablePaneScroller);
}
if(eJ.tablePaneModel){this.setNewTablePaneModel(eJ.tablePaneModel);
}
if(eJ.columnMenu){this.setNewColumnMenu(eJ.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__AL=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__AL,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__AM=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(eI||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(br,this._onKeyPress);
this.addListener(Q,this._onFocusChanged);
this.addListener(bR,this._onFocusChanged);
var eK=new qx.ui.core.Widget().set({height:0});
this._add(eK);
eK.addListener(bz,this._onResize,this);
this.__AN=null;
this.__AO=null;
if(qx.core.Variant.isSet(ca,bU)){qx.locale.Manager.getInstance().addListener(E,this._onChangeLocale,this);
}this.initStatusBarVisible();
},events:{"columnVisibilityMenuCreateStart":J,"columnVisibilityMenuCreateEnd":J,"tableWidthChanged":bw,"verticalScrollBarChanged":J,"cellClick":H,"cellDblclick":H,"cellContextmenu":H,"dataEdited":J},statics:{__AP:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:bn},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectable:{refine:true,init:false},selectionModel:{check:C,apply:bO,event:bs},tableModel:{check:bj,apply:bE,event:bt},rowHeight:{check:bJ,init:20,apply:bH,event:bK},forceLineHeight:{check:K,init:true},headerCellHeight:{check:bv,init:16,apply:bM,event:O,nullable:true},statusBarVisible:{check:K,init:true,apply:bT},additionalStatusBarText:{nullable:true,init:null,apply:bh},columnVisibilityButtonVisible:{check:K,init:true,apply:bq},metaColumnCounts:{check:W,apply:S},focusCellOnMouseMove:{check:K,init:false,apply:bl},rowFocusChangeModifiesSelection:{check:K,init:true},showCellFocusIndicator:{check:K,init:true,apply:bk},keepFirstVisibleRowComplete:{check:K,init:true,apply:bu},alwaysUpdateCells:{check:K,init:false},dataRowRenderer:{check:bi,init:null,nullable:true,event:N},modalCellEditorPreOpenFunction:{check:L,init:null,nullable:true},newColumnMenu:{check:L,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:L,init:function(ce){return new qx.ui.table.selection.Manager(ce);
}},newSelectionModel:{check:L,init:function(fb){return new qx.ui.table.selection.Model(fb);
}},newTableColumnModel:{check:L,init:function(cc){return new qx.ui.table.columnmodel.Basic(cc);
}},newTablePane:{check:L,init:function(co){return new qx.ui.table.pane.Pane(co);
}},newTablePaneHeader:{check:L,init:function(cd){return new qx.ui.table.pane.Header(cd);
}},newTablePaneScroller:{check:L,init:function(cH){return new qx.ui.table.pane.Scroller(cH);
}},newTablePaneModel:{check:L,init:function(eL){return new qx.ui.table.pane.Model(eL);
}}},members:{__AN:null,__AO:null,__AL:null,__AM:null,__AQ:null,__AR:null,__AS:null,__AT:null,__AU:null,__AV:null,_createChildControlImpl:function(eg){var eh;

switch(eg){case I:eh=new qx.ui.basic.Label();
eh.set({allowGrowX:true});
this._add(eh);
break;
case M:eh=this.getNewColumnMenu()();
eh.set({focusable:false});
var ei=eh.factory(bN,{table:this});
ei.addListener(Y,this._initColumnMenu,this);
break;
}return eh||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,eg);
},_applySelectionModel:function(dF,dG){this.__AM.setSelectionModel(dF);

if(dG!=null){dG.removeListener(D,this._onSelectionChanged,this);
}dF.addListener(D,this._onSelectionChanged,this);
},_applyRowHeight:function(dC,dD){var dE=this._getPaneScrollerArr();

for(var i=0;i<dE.length;i++){dE[i].updateVerScrollBarMaximum();
}},_applyHeaderCellHeight:function(eA,eB){var eC=this._getPaneScrollerArr();

for(var i=0;i<eC.length;i++){eC[i].getHeader().setHeight(eA);
}},getEmptyTableModel:function(){if(!this.__AV){this.__AV=new qx.ui.table.model.Simple();
this.__AV.setColumns([]);
this.__AV.setData([]);
}return this.__AV;
},_applyTableModel:function(h,j){this.getTableColumnModel().init(h.getColumnCount(),this);

if(j!=null){j.removeListener(bW,this._onTableModelMetaDataChanged,this);
j.removeListener(bV,this._onTableModelDataChanged,this);
}h.addListener(bW,this._onTableModelMetaDataChanged,this);
h.addListener(bV,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,h.getRowCount(),0,h.getColumnCount());
this._onTableModelMetaDataChanged();
},getTableColumnModel:function(){if(!this.__AU){var ed=this.__AU=this.getNewTableColumnModel()(this);
ed.addListener(bG,this._onColVisibilityChanged,this);
ed.addListener(bB,this._onColWidthChanged,this);
ed.addListener(bP,this._onColOrderChanged,this);
var ec=this.getTableModel();
ed.init(ec.getColumnCount(),this);
var eb=this._getPaneScrollerArr();

for(var i=0;i<eb.length;i++){var ee=eb[i];
var ef=ee.getTablePaneModel();
ef.setTableColumnModel(ed);
}}return this.__AU;
},_applyStatusBarVisible:function(dS,dT){if(dS){this._showChildControl(I);
}else{this._excludeChildControl(I);
}
if(dS){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(dM,dN){this.__AQ=dM;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(cY,da){if(cY){this._showChildControl(M);
}else{this._excludeChildControl(M);
}},_applyMetaColumnCounts:function(cI,cJ){var cQ=cI;
var cK=this._getPaneScrollerArr();
var cO={};

if(cI>cJ){var cS=qx.event.Registration.getManager(cK[0]);

for(var cT in qx.ui.table.Table.__AP){cO[cT]={};
cO[cT].capture=cS.getListeners(cK[0],cT,true);
cO[cT].bubble=cS.getListeners(cK[0],cT,false);
}}this._cleanUpMetaColumns(cQ.length);
var cP=0;

for(var i=0;i<cK.length;i++){var cU=cK[i];
var cR=cU.getTablePaneModel();
cR.setFirstColumnX(cP);
cR.setMaxColumnCount(cQ[i]);
cP+=cQ[i];
}if(cQ.length>cK.length){var cN=this.getTableColumnModel();

for(var i=cK.length;i<cQ.length;i++){var cR=this.getNewTablePaneModel()(cN);
cR.setFirstColumnX(cP);
cR.setMaxColumnCount(cQ[i]);
cP+=cQ[i];
var cU=this.getNewTablePaneScroller()(this);
cU.setTablePaneModel(cR);
cU.addListener(bx,this._onScrollY,this);
for(cT in qx.ui.table.Table.__AP){if(!cO[cT]){break;
}
if(cO[cT].capture&&cO[cT].capture.length>0){var cL=cO[cT].capture;

for(var i=0;i<cL.length;i++){var cM=cL[i].context;

if(!cM){cM=this;
}else if(cM==cK[0]){cM=cU;
}cU.addListener(cT,cL[i].handler,cM,true);
}}
if(cO[cT].bubble&&cO[cT].bubble.length>0){var cW=cO[cT].bubble;

for(var i=0;i<cW.length;i++){var cM=cW[i].context;

if(!cM){cM=this;
}else if(cM==cK[0]){cM=cU;
}cU.addListener(cT,cW[i].handler,cM,false);
}}}var cV=(i==cQ.length-1)?1:0;
this.__AL.add(cU,{flex:cV});
cK=this._getPaneScrollerArr();
}}for(var i=0;i<cK.length;i++){var cU=cK[i];
var cX=(i==(cK.length-1));
cU.getHeader().setHeight(this.getHeaderCellHeight());
cU.setTopRightWidget(cX?this.getChildControl(M):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(M);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(dH,dI){var dJ=this._getPaneScrollerArr();

for(var i=0;i<dJ.length;i++){dJ[i].setFocusCellOnMouseMove(dH);
}},_applyShowCellFocusIndicator:function(df,dg){var dh=this._getPaneScrollerArr();

for(var i=0;i<dh.length;i++){dh[i].setShowCellFocusIndicator(df);
}},_applyKeepFirstVisibleRowComplete:function(cC,cD){var cE=this._getPaneScrollerArr();

for(var i=0;i<cE.length;i++){cE[i].onKeepFirstVisibleRowCompleteChanged();
}},getSelectionManager:function(){return this.__AM;
},_getPaneScrollerArr:function(){return this.__AL.getChildren();
},getPaneScroller:function(ea){return this._getPaneScrollerArr()[ea];
},_cleanUpMetaColumns:function(k){var m=this._getPaneScrollerArr();

if(m!=null){for(var i=m.length-1;i>=k;i--){m[i].destroy();
}}},_onChangeLocale:function(cb){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(di){var dj=this._getPaneScrollerArr();

for(var i=0;i<dj.length;i++){dj[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(dK){var dL=this._getPaneScrollerArr();

for(var i=0;i<dL.length;i++){dL[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(ek){var el=ek.getData();
this._updateTableData(el.firstRow,el.lastRow,el.firstColumn,el.lastColumn,el.removeStart,el.removeCount);
},_updateTableData:function(r,s,t,u,v,w){var y=this._getPaneScrollerArr();
if(w){this.getSelectionModel().removeSelectionInterval(v,v+w);
}
for(var i=0;i<y.length;i++){y[i].onTableModelDataChanged(r,s,t,u);
}var z=this.getTableModel().getRowCount();

if(z!=this.__AR){this.__AR=z;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(cF){if(!this.__AS){this.__AS=true;
var cG=this._getPaneScrollerArr();

for(var i=0;i<cG.length;i++){cG[i].setScrollY(cF.getData());
}this.__AS=false;
}},_onKeyPress:function(dt){if(!this.getEnabled()){return;
}var dA=this.__AO;
var dx=true;
var dB=dt.getKeyIdentifier();

if(this.isEditing()){if(dt.getModifiers()==0){switch(dB){case bX:this.stopEditing();
var dA=this.__AO;
this.moveFocusedCell(0,1);

if(this.__AO!=dA){dx=this.startEditing();
}break;
case bc:this.cancelEditing();
this.focus();
break;
default:dx=false;
break;
}}}else{if(dt.isCtrlPressed()){dx=true;

switch(dB){case bd:var dy=this.getTableModel().getRowCount();

if(dy>0){this.getSelectionModel().setSelectionInterval(0,dy-1);
}break;
default:dx=false;
break;
}}else{switch(dB){case be:this.__AM.handleSelectKeyDown(this.__AO,dt);
break;
case X:case bX:this.startEditing();
dx=true;
break;
case A:this.setFocusedCell(this.__AN,0,true);
break;
case V:var dy=this.getTableModel().getRowCount();
this.setFocusedCell(this.__AN,dy-1,true);
break;
case bo:this.moveFocusedCell(-1,0);
break;
case bF:this.moveFocusedCell(1,0);
break;
case bp:this.moveFocusedCell(0,-1);
break;
case bA:this.moveFocusedCell(0,1);
break;
case G:case bb:var dw=this.getPaneScroller(0);
var dz=dw.getTablePane();
var dy=dz.getVisibleRowCount()-1;
var dv=this.getRowHeight();
var du=(dB==G)?-1:1;
dw.setScrollY(dw.getScrollY()+du*dy*dv);
this.moveFocusedCell(0,du*dy);
break;
default:dx=false;
}}}
if(dA!=this.__AO&&this.getRowFocusChangeModifiesSelection()){this.__AM.handleMoveKeyDown(this.__AO,dt);
}
if(dx){dt.preventDefault();
dt.stopPropagation();
}},_onFocusChanged:function(cj){var ck=this._getPaneScrollerArr();

for(var i=0;i<ck.length;i++){ck[i].onFocusChanged();
}},_onColVisibilityChanged:function(eO){var eP=this._getPaneScrollerArr();

for(var i=0;i<eP.length;i++){eP[i].onColVisibilityChanged();
}var eQ=eO.getData();

if(this.__AT!=null&&eQ.col!=null&&eQ.visible!=null){this.__AT[eQ.col].setVisible(eQ.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(db){var dc=this._getPaneScrollerArr();

for(var i=0;i<dc.length;i++){var dd=db.getData();
dc[i].setColumnWidth(dd.col,dd.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(dl){var dm=this._getPaneScrollerArr();

for(var i=0;i<dm.length;i++){dm[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(p){var q=this._getMetaColumnAtPageX(p);
return (q!=-1)?this.getPaneScroller(q):null;
},setFocusedCell:function(eE,eF,eG){if(!this.isEditing()&&(eE!=this.__AN||eF!=this.__AO)){if(eE===null){eE=0;
}this.__AN=eE;
this.__AO=eF;
var eH=this._getPaneScrollerArr();

for(var i=0;i<eH.length;i++){eH[i].setFocusedCell(eE,eF);
}
if(eE!==null&&eG){this.scrollCellVisible(eE,eF);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,U);
this.resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__AN;
},getFocusedRow:function(){return this.__AO;
},highlightFocusedRow:function(eM){this.getDataRowRenderer().setHighlightFocusRow(eM);
},clearFocusedRowHighlight:function(){this.resetCellFocus();
var de=this._getPaneScrollerArr();

for(var i=0;i<de.length;i++){de[i].onFocusChanged();
}},moveFocusedCell:function(em,en){var er=this.__AN;
var es=this.__AO;

if(er===null||es===null){return;
}
if(em!=0){var eq=this.getTableColumnModel();
var x=eq.getVisibleX(er);
var ep=eq.getVisibleColumnCount();
x=qx.lang.Number.limit(x+em,0,ep-1);
er=eq.getVisibleColumnAtX(x);
}
if(en!=0){var eo=this.getTableModel();
es=qx.lang.Number.limit(es+en,0,eo.getRowCount()-1);
}this.setFocusedCell(er,es,true);
},scrollCellVisible:function(dO,dP){var dQ=this.getTableColumnModel();
var x=dQ.getVisibleX(dO);
var dR=this._getMetaColumnAtColumnX(x);

if(dR!=-1){this.getPaneScroller(dR).scrollCellVisible(dO,dP);
}},isEditing:function(){if(this.__AN!=null){var x=this.getTableColumnModel().getVisibleX(this.__AN);
var eN=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(eN).isEditing();
}return false;
},startEditing:function(){if(this.__AN!=null){var x=this.getTableColumnModel().getVisibleX(this.__AN);
var dV=this._getMetaColumnAtColumnX(x);
var dU=this.getPaneScroller(dV).startEditing();
return dU;
}return false;
},stopEditing:function(){if(this.__AN!=null){var x=this.getTableColumnModel().getVisibleX(this.__AN);
var g=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(g).stopEditing();
}},cancelEditing:function(){if(this.__AN!=null){var x=this.getTableColumnModel().getVisibleX(this.__AN);
var dW=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(dW).cancelEditing();
}},updateContent:function(){var eD=this._getPaneScrollerArr();

for(var i=0;i<eD.length;i++){eD[i].getTablePane().updateContent();
}},blockHeaderElements:function(){var ds=this._getPaneScrollerArr();

for(var i=0;i<ds.length;i++){ds[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(M).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var dk=this._getPaneScrollerArr();

for(var i=0;i<dk.length;i++){dk[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(M).getBlocker().unblockContent();
},_getMetaColumnAtPageX:function(cl){var cm=this._getPaneScrollerArr();

for(var i=0;i<cm.length;i++){var cn=cm[i].getContainerLocation();

if(cl>=cn.left&&cl<=cn.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(cf){var ch=this.getMetaColumnCounts();
var ci=0;

for(var i=0;i<ch.length;i++){var cg=ch[i];
ci+=cg;

if(cg==-1||cf<ci){return i;
}}return -1;
},_updateStatusBar:function(){var dn=this.getTableModel();

if(this.getStatusBarVisible()){var dp=this.getSelectionModel().getSelectedCount();
var dr=dn.getRowCount();
var dq;

if(dr>=0){if(dp==0){dq=this.trn(bg,B,dr,dr);
}else{dq=this.trn(P,bf,dr,dp,dr);
}}
if(this.__AQ){if(dq){dq+=this.__AQ;
}else{dq=this.__AQ;
}}
if(dq){this.getChildControl(I).setValue(dq);
}}},_updateScrollerWidths:function(){var a=this._getPaneScrollerArr();

for(var i=0;i<a.length;i++){var c=(i==(a.length-1));
var d=a[i].getTablePaneModel().getTotalWidth();
a[i].setPaneWidth(d);
var b=c?1:0;
a[i].setLayoutProperties({flex:b});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var cs=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var cv=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var cp=this._getPaneScrollerArr();
var cr=false;
var cu=false;

for(var i=0;i<cp.length;i++){var cw=(i==(cp.length-1));
var cq=cp[i].getNeededScrollBars(cr,!cw);

if(cq&cs){cr=true;
}
if(cw&&(cq&cv)){cu=true;
}}for(var i=0;i<cp.length;i++){var cw=(i==(cp.length-1));
var ct;
cp[i].setHorizontalScrollBarVisible(cr);
if(cw){ct=cp[i].getVerticalScrollBarVisible();
}cp[i].setVerticalScrollBarVisible(cw&&cu);
if(cw&&cu!=ct){this.fireDataEvent(R,cu);
}}},_initColumnMenu:function(){var ev=this.getTableModel();
var ew=this.getTableColumnModel();
var ex=this.getChildControl(M);
ex.empty();
var eu=ex.getMenu();
var ey={table:this,menu:eu,columnButton:ex};
this.fireDataEvent(bS,ey);
this.__AT={};

for(var ez=0,l=ev.getColumnCount();ez<l;ez++){var et=ex.factory(bD,{text:ev.getColumnName(ez),column:ez,bVisible:ew.isColumnVisible(ez)});
qx.core.Assert.assertInterface(et,qx.ui.table.IColumnMenuItem);
et.addListener(bL,this._createColumnVisibilityCheckBoxHandler(ez),this);
this.__AT[ez]=et;
}var ey={table:this,menu:eu,columnButton:ex};
this.fireDataEvent(T,ey);
},_createColumnVisibilityCheckBoxHandler:function(ej){return function(dX){var dY=this.getTableColumnModel();
dY.setColumnVisible(ej,dX.getData());
};
},setColumnWidth:function(e,f){this.getTableColumnModel().setColumnWidth(e,f);
},_onResize:function(){this.fireEvent(bI);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(eR,eS,self,eT){if(this.self(arguments).__AP[eR]){var eV=[eR];

for(var i=0,eU=this._getPaneScrollerArr();i<eU.length;i++){eV.push(eU[i].addListener.apply(eU[i],arguments));
}return eV.join(F);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,eR,eS,self,eT);
}},removeListener:function(eW,eX,self,eY){if(this.self(arguments).__AP[eW]){for(var i=0,fa=this._getPaneScrollerArr();i<fa.length;i++){fa[i].removeListener.apply(fa[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,eW,eX,self,eY);
}},removeListenerById:function(cx){var cB=cx.split(F);
var cA=cB.shift();

if(this.self(arguments).__AP[cA]){var cz=true;

for(var i=0,cy=this._getPaneScrollerArr();i<cy.length;i++){cz=cy[i].removeListenerById.call(cy[i],cB[i])&&cz;
}return cz;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,cx);
}},destroy:function(){this.getChildControl(M).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(ca,bU)){qx.locale.Manager.getInstance().removeListener(E,this._onChangeLocale,this);
}var o=this.getSelectionModel();

if(o){o.dispose();
}var n=this.getDataRowRenderer();

if(n){n.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(ba,bC,bY,bY,by);
this._disposeMap(bm);
}});
})();
(function(){var J="..",I="changeSelection",H="Use 'resetSelection' instead",G=" [",F="]",E="qx.event.type.Event",D="Ranges:",C="qx.ui.table.selection.Model",B="_applySelectionMode",A="Use '_resetSelection' instead.";
qx.Class.define(C,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__AW=[];
this.__AX=-1;
this.__AY=-1;
this.hasBatchModeRefCount=0;
this.__Ba=false;
},events:{"changeSelection":E},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:B}},members:{__Ba:null,__AX:null,__AY:null,__AW:null,_applySelectionMode:function(o){this.resetSelection();
},setBatchMode:function(z){if(z){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__Ba){this.__Ba=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__AX;
},_setAnchorSelectionIndex:function(c){this.__AX=c;
},getLeadSelectionIndex:function(){return this.__AY;
},_setLeadSelectionIndex:function(p){this.__AY=p;
},_getSelectedRangeArr:function(){return this.__AW;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,H);
this.resetSelection();
},isSelectionEmpty:function(){return this.__AW.length==0;
},getSelectedCount:function(){var U=0;

for(var i=0;i<this.__AW.length;i++){var T=this.__AW[i];
U+=T.maxIndex-T.minIndex+1;
}return U;
},isSelectedIndex:function(R){for(var i=0;i<this.__AW.length;i++){var S=this.__AW[i];

if(R>=S.minIndex&&R<=S.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var v=[];

for(var i=0;i<this.__AW.length;i++){v.push({minIndex:this.__AW[i].minIndex,maxIndex:this.__AW[i].maxIndex});
}return v;
},iterateSelection:function(a,b){for(var i=0;i<this.__AW.length;i++){for(var j=this.__AW[i].minIndex;j<=this.__AW[i].maxIndex;j++){a.call(b,j);
}}},setSelectionInterval:function(s,t){var u=this.self(arguments);

switch(this.getSelectionMode()){case u.NO_SELECTION:return;
case u.SINGLE_SELECTION:if(this.isSelectedIndex(t)){return;
}s=t;
break;
case u.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=s;i<=t;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(s,t);
this._fireChangeSelection();
},addSelectionInterval:function(w,x){var y=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case y.NO_SELECTION:return;
case y.MULTIPLE_INTERVAL_SELECTION:case y.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(w,x);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(w,x);
break;
}},removeSelectionInterval:function(d,f){this.__AX=d;
this.__AY=f;
var g=Math.min(d,f);
var k=Math.max(d,f);
for(var i=0;i<this.__AW.length;i++){var m=this.__AW[i];

if(m.minIndex>k){break;
}else if(m.maxIndex>=g){var n=(m.minIndex>=g)&&(m.minIndex<=k);
var l=(m.maxIndex>=g)&&(m.maxIndex<=k);

if(n&&l){this.__AW.splice(i,1);
i--;
}else if(n){m.minIndex=k+1;
}else if(l){m.maxIndex=g-1;
}else{var h={minIndex:k+1,maxIndex:m.maxIndex};
this.__AW.splice(i+1,0,h);
m.maxIndex=g-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__AW=[];
this.__AX=-1;
this.__AY=-1;
},_clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A);
this._resetSelection();
},_addSelectionInterval:function(K,L){this.__AX=K;
this.__AY=L;
var M=Math.min(K,L);
var O=Math.max(K,L);
var N=0;

for(;N<this.__AW.length;N++){var P=this.__AW[N];

if(P.minIndex>M){break;
}}this.__AW.splice(N,0,{minIndex:M,maxIndex:O});
var Q=this.__AW[0];

for(var i=1;i<this.__AW.length;i++){var P=this.__AW[i];

if(Q.maxIndex+1>=P.minIndex){Q.maxIndex=Math.max(Q.maxIndex,P.maxIndex);
this.__AW.splice(i,1);
i--;
}else{Q=P;
}}},_dumpRanges:function(){var q=D;

for(var i=0;i<this.__AW.length;i++){var r=this.__AW[i];
q+=G+r.minIndex+J+r.maxIndex+F;
}this.debug(q);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__Ba=true;
}else{this.fireEvent(I);
}}},destruct:function(){this.__AW=null;
}});
})();
(function(){var E="dataChanged",D="qx.event.type.Data",C="Left",B="Right",A="hidden",z="Boolean",y="Enter",x="number",w="changeSelection",v="dataEdited",r="object",u="qx.ui.treevirtual.TreeVirtual",t="string",q="treevirtual";
qx.Class.define(u,{extend:qx.ui.table.Table,construct:function(O,P){if(!P){P={};
}
if(!P.dataModel){P.dataModel=new qx.ui.treevirtual.SimpleTreeDataModel();
}
if(P.treeColumn===undefined){P.treeColumn=0;
P.dataModel.setTreeColumn(P.treeColumn);
}
if(!P.treeDataCellRenderer){P.treeDataCellRenderer=new qx.ui.treevirtual.SimpleTreeDataCellRenderer();
}
if(!P.defaultDataCellRenderer){P.defaultDataCellRenderer=new qx.ui.treevirtual.DefaultDataCellRenderer();
}
if(!P.dataRowRenderer){P.dataRowRenderer=new qx.ui.treevirtual.SimpleTreeDataRowRenderer();
}
if(!P.selectionManager){P.selectionManager=function(bj){return new qx.ui.treevirtual.SelectionManager(bj);
};
}
if(!P.tableColumnModel){P.tableColumnModel=function(ba){return new qx.ui.table.columnmodel.Resize(ba);
};
}if(typeof (O)==t){O=[O];
}P.dataModel.setColumns(O);
P.dataModel.setTreeColumn(P.treeColumn);
P.dataModel.setTree(this);
qx.ui.table.Table.call(this,P.dataModel,P);
this.addListener(v,function(e){this.getDataModel().setData();
},this);
this.setColumnVisibilityButtonVisible(O.length>1);
this.setRowHeight(16);
this.setMetaColumnCounts(O.length>1?[1,-1]:[1]);
this.setOverflow(A);
var R=P.treeDataCellRenderer;
var Q=P.defaultDataCellRenderer;
var U=this.getTableColumnModel();
var T=this.getDataModel().getTreeColumn();

for(var i=0;i<O.length;i++){U.setDataCellRenderer(i,i==T?R:Q);
}this.setDataRowRenderer(P.dataRowRenderer);
this.setFocusCellOnMouseMove(true);
this.setShowCellFocusIndicator(false);
var S=this._getPaneScrollerArr();
for(var i=0;i<S.length;i++){S[i].setSelectBeforeFocus(true);
}},events:{"treeOpenWithContent":D,"treeOpenWhileEmpty":D,"treeClose":D,"changeSelection":D},statics:{SelectionMode:{NONE:qx.ui.table.selection.Model.NO_SELECTION,SINGLE:qx.ui.table.selection.Model.SINGLE_SELECTION,SINGLE_INTERVAL:qx.ui.table.selection.Model.SINGLE_INTERVAL_SELECTION,MULTIPLE_INTERVAL:qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION,MULTIPLE_INTERVAL_TOGGLE:qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION_TOGGLE}},properties:{openCloseClickSelectsRow:{check:z,init:false},appearance:{refine:true,init:q}},members:{getDataModel:function(){return this.getTableModel();
},setUseTreeLines:function(b){var bd=this.getDataModel();
var bb=bd.getTreeColumn();
var bc=this.getTableColumnModel().getDataCellRenderer(bb);
bc.setUseTreeLines(b);
if(bd.hasListener(E)){var be={firstRow:0,lastRow:bd.getRowCount()-1,firstColumn:0,lastColumn:bd.getColumnCount()-1};
bd.fireDataEvent(E,be);
}},getUseTreeLines:function(){var g=this.getDataModel().getTreeColumn();
var h=this.getTableColumnModel().getDataCellRenderer(g);
return h.getUseTreeLines();
},setAlwaysShowOpenCloseSymbol:function(b){var X=this.getDataModel();
var V=X.getTreeColumn();
var W=this.getTableColumnModel().getDataCellRenderer(V);
W.setAlwaysShowOpenCloseSymbol(b);
if(X.hasListener(E)){var Y={firstRow:0,lastRow:X.getRowCount()-1,firstColumn:0,lastColumn:X.getColumnCount()-1};
X.fireDataEvent(E,Y);
}},setExcludeFirstLevelTreeLines:function(b){var d=this.getDataModel();
var a=d.getTreeColumn();
var c=this.getTableColumnModel().getDataCellRenderer(a);
c.setExcludeFirstLevelTreeLines(b);
if(d.hasListener(E)){var f={firstRow:0,lastRow:d.getRowCount()-1,firstColumn:0,lastColumn:d.getColumnCount()-1};
d.fireDataEvent(E,f);
}},getExcludeFirstLevelTreeLines:function(){var bf=this.getDataModel().getTreeColumn();
var bg=this.getTableColumnModel().getDataCellRenderer(bf);
return bg.getExcludeFirstLevelTreeLines();
},getAlwaysShowOpenCloseSymbol:function(){var bh=this.getDataModel().getTreeColumn();
var bi=this.getTableColumnModel().getDataCellRenderer(bh);
return bi.getAlwaysShowOpenCloseSymbol();
},setSelectionMode:function(F){this.getSelectionModel().setSelectionMode(F);
},getSelectionMode:function(){return this.getSelectionModel().getSelectionMode();
},getHierarchy:function(k){var o=this;
var n=[];
var l;
var p;

if(typeof (k)==r){l=k;
p=l.nodeId;
}else if(typeof (k)==x){p=k;
}else{throw new Error("Expected node object or node id");
}function m(M){if(!M){return ;
}var N=o.getDataModel().getData()[M];
n.unshift(N.label);
m(N.parentNodeId);
}m(p);
return n;
},getSelectedNodes:function(){return this.getDataModel().getSelectedNodes();
},_onKeyPress:function(bk){if(!this.getEnabled()){return;
}var bt=bk.getKeyIdentifier();
var bp=false;
var br=bk.getModifiers();

if(br==0){switch(bt){case y:var bm=this.getDataModel();
var bn=this.getFocusedColumn();
var bq=bm.getTreeColumn();

if(bn==bq){var bs=this.getFocusedRow();
var bl=bm.getValue(bq,bs);

if(!bl.bHideOpenClose){bm.setState(bl,{bOpened:!bl.bOpened});
}bp=true;
}break;
case C:this.moveFocusedCell(-1,0);
break;
case B:this.moveFocusedCell(1,0);
break;
}}else if(br==qx.event.type.Dom.CTRL_MASK){switch(bt){case C:var bm=this.getDataModel();
var bs=this.getFocusedRow();
var bq=bm.getTreeColumn();
var bl=bm.getValue(bq,bs);
if((bl.type==qx.ui.treevirtual.SimpleTreeDataModel.Type.BRANCH)&&!bl.bHideOpenClose&&bl.bOpened){bm.setState(bl,{bOpened:!bl.bOpened});
}this.setFocusedCell(bq,bs,true);
bp=true;
break;
case B:var bm=this.getDataModel();
var bs=this.getFocusedRow();
var bq=bm.getTreeColumn();
var bl=bm.getValue(bq,bs);
if((bl.type==qx.ui.treevirtual.SimpleTreeDataModel.Type.BRANCH)&&!bl.bHideOpenClose&&!bl.bOpened){bm.setState(bl,{bOpened:!bl.bOpened});
}this.setFocusedCell(bq,bs,true);
bp=true;
break;
}}else if(br==qx.event.type.Dom.SHIFT_MASK){switch(bt){case C:var bm=this.getDataModel();
var bs=this.getFocusedRow();
var bq=bm.getTreeColumn();
var bl=bm.getValue(bq,bs);
if(bl.parentNodeId){var bo=bm.getRowFromNodeId(bl.parentNodeId);
this.setFocusedCell(this._focusedCol,bo,true);
}bp=true;
break;
case B:var bm=this.getDataModel();
var bs=this.getFocusedRow();
var bq=bm.getTreeColumn();
var bl=bm.getValue(bq,bs);
if((bl.type==qx.ui.treevirtual.SimpleTreeDataModel.Type.BRANCH)&&!bl.bHideOpenClose){if(!bl.bOpened){bm.setState(bl,{bOpened:!bl.bOpened});
}if(bl.children.length>0){this.moveFocusedCell(0,1);
}}bp=true;
break;
}}if(bp){bk.preventDefault();
bk.stopPropagation();
}else{qx.ui.table.Table.prototype._onKeyPress.call(this,bk);
}},_onSelectionChanged:function(K){this.getDataModel()._clearSelections();
if(this.getSelectionMode()!=qx.ui.treevirtual.TreeVirtual.SelectionMode.NONE){var L=this._calculateSelectedNodes();
this.fireDataEvent(w,L);
}qx.ui.table.Table.prototype._onSelectionChanged.call(this,K);
},_calculateSelectedNodes:function(){var J=this.getDataModel();
var H=this.getSelectionModel().getSelectedRanges();
var I=[];
var G;

for(var i=0;i<H.length;i++){for(var j=H[i].minIndex;j<=H[i].maxIndex;j++){G=J.getValue(J.getTreeColumn(),j);
J.setState(G,{bSelected:true});
I.push(G);
}}return I;
},setOverflow:function(s){if(s!=A){throw new Error("Tree overflow must be hidden.  "+"The internal elements of it will scroll.");
}}}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignY(p);
}
if(q){this.setSeparator(q);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__eh:null,__ei:null,__ej:null,__ek:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__el:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__eh&&this.__eh.length!=length&&this.__ei&&this.__eh;
var u;
var t=r?this.__eh:new Array(length);
var v=r?this.__ei:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}else{v[i]=0;
}}if(!r){this.__eh=t;
this.__ei=v;
}this.__ej=s;
this.__ek=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(M,N){if(this._invalidChildrenCache){this.__el();
}var U=this.__ek;
var length=U.length;
var bf=qx.ui.layout.Util;
var be=this.getSpacing();
var bi=this.getSeparator();

if(bi){var R=bf.computeVerticalSeparatorGaps(U,be,bi);
}else{var R=bf.computeVerticalGaps(U,be,true);
}var i,P,Q,Y;
var ba=[];
var bg=R;

for(i=0;i<length;i+=1){Y=this.__eh[i];
Q=Y!=null?Math.floor((N-R)*Y):U[i].getSizeHint().height;
ba.push(Q);
bg+=Q;
}if(this.__ej&&bg!=N){var W={};
var bd,bh;

for(i=0;i<length;i+=1){bd=this.__ei[i];

if(bd>0){V=U[i].getSizeHint();
W[i]={min:V.minHeight,value:ba[i],max:V.maxHeight,flex:bd};
}}var S=bf.computeFlexOffsets(W,N,bg);

for(i in S){bh=S[i].offset;
ba[i]+=bh;
bg+=bh;
}}var top=U[0].getMarginTop();
if(bg<N&&this.getAlignY()!=m){top=N-bg;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var V,bk,bb,Q,X,bc,T;
this._clearSeparators();
if(bi){var bj=qx.theme.manager.Decoration.getInstance().resolve(bi).getInsets();
var O=bj.top+bj.bottom;
}for(i=0;i<length;i+=1){P=U[i];
Q=ba[i];
V=P.getSizeHint();
bc=P.getMarginLeft();
T=P.getMarginRight();
bb=Math.max(V.minWidth,Math.min(M-bc-T,V.maxWidth));
bk=bf.computeHorizontalAlignOffset(P.getAlignX()||this.getAlignX(),bb,M,bc,T);
if(i>0){if(bi){top+=X+be;
this._renderSeparator(bi,{top:top,left:0,height:O,width:M});
top+=O+be+P.getMarginTop();
}else{top+=bf.collapseMargins(be,X,P.getMarginTop());
}}P.renderLayout(bk,top,bb,Q);
top+=Q;
X=P.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__el();
}var D=qx.ui.layout.Util;
var L=this.__ek;
var z=0,C=0,B=0;
var x=0,E=0;
var I,y,K;
for(var i=0,l=L.length;i<l;i+=1){I=L[i];
y=I.getSizeHint();
C+=y.height;
var H=this.__ei[i];
var A=this.__eh[i];

if(H){z+=y.minHeight;
}else if(A){B=Math.max(B,Math.round(y.minHeight/A));
}else{z+=y.height;
}K=I.getMarginLeft()+I.getMarginRight();
if((y.width+K)>E){E=y.width+K;
}if((y.minWidth+K)>x){x=y.minWidth+K;
}}z+=B;
var G=this.getSpacing();
var J=this.getSeparator();

if(J){var F=D.computeVerticalSeparatorGaps(L,G,J);
}else{var F=D.computeVerticalGaps(L,G,true);
}return {minHeight:z+F,height:C+F,minWidth:x,width:E};
}},destruct:function(){this.__eh=this.__ei=this.__ek=null;
}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(bi,bj,bk){qx.ui.layout.Abstract.call(this);

if(bi){this.setSpacing(bi);
}
if(bj){this.setAlignX(bj);
}
if(bk){this.setSeparator(bk);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__fd:null,__fe:null,__ff:null,__fg:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__fh:function(){var I=this._getLayoutChildren();
var length=I.length;
var F=false;
var D=this.__fd&&this.__fd.length!=length&&this.__fe&&this.__fd;
var G;
var E=D?this.__fd:new Array(length);
var H=D?this.__fe:new Array(length);
if(this.getReversed()){I=I.concat().reverse();
}for(var i=0;i<length;i++){G=I[i].getLayoutProperties();

if(G.width!=null){E[i]=parseFloat(G.width)/100;
}
if(G.flex!=null){H[i]=G.flex;
F=true;
}else{H[i]=0;
}}if(!D){this.__fd=E;
this.__fe=H;
}this.__ff=F;
this.__fg=I;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(J,K){if(this._invalidChildrenCache){this.__fh();
}var Q=this.__fg;
var length=Q.length;
var ba=qx.ui.layout.Util;
var Y=this.getSpacing();
var bd=this.getSeparator();

if(bd){var N=ba.computeHorizontalSeparatorGaps(Q,Y,bd);
}else{var N=ba.computeHorizontalGaps(Q,Y,true);
}var i,L,W,V;
var bc=[];
var R=N;

for(i=0;i<length;i+=1){V=this.__fd[i];
W=V!=null?Math.floor((J-N)*V):Q[i].getSizeHint().width;
bc.push(W);
R+=W;
}if(this.__ff&&R!=J){var T={};
var X,bb;

for(i=0;i<length;i+=1){X=this.__fe[i];

if(X>0){S=Q[i].getSizeHint();
T[i]={min:S.minWidth,value:bc[i],max:S.maxWidth,flex:X};
}}var O=ba.computeFlexOffsets(T,J,R);

for(i in O){bb=O[i].offset;
bc[i]+=bb;
R+=bb;
}}var bh=Q[0].getMarginLeft();
if(R<J&&this.getAlignX()!=m){bh=J-R;

if(this.getAlignX()===k){bh=Math.round(bh/2);
}}var S,top,M,W,P,bf,U;
var Y=this.getSpacing();
this._clearSeparators();
if(bd){var be=qx.theme.manager.Decoration.getInstance().resolve(bd).getInsets();
var bg=be.left+be.right;
}for(i=0;i<length;i+=1){L=Q[i];
W=bc[i];
S=L.getSizeHint();
bf=L.getMarginTop();
U=L.getMarginBottom();
M=Math.max(S.minHeight,Math.min(K-bf-U,S.maxHeight));
top=ba.computeVerticalAlignOffset(L.getAlignY()||this.getAlignY(),M,K,bf,U);
if(i>0){if(bd){bh+=P+Y;
this._renderSeparator(bd,{left:bh,top:0,width:bg,height:K});
bh+=bg+Y+L.getMarginLeft();
}else{bh+=ba.collapseMargins(Y,P,L.getMarginLeft());
}}L.renderLayout(bh,top,W,M);
bh+=W;
P=L.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__fh();
}var u=qx.ui.layout.Util;
var C=this.__fg;
var o=0,v=0,s=0;
var r=0,t=0;
var z,p,B;
for(var i=0,l=C.length;i<l;i+=1){z=C[i];
p=z.getSizeHint();
v+=p.width;
var y=this.__fe[i];
var q=this.__fd[i];

if(y){o+=p.minWidth;
}else if(q){s=Math.max(s,Math.round(p.minWidth/q));
}else{o+=p.width;
}B=z.getMarginTop()+z.getMarginBottom();
if((p.height+B)>t){t=p.height+B;
}if((p.minHeight+B)>r){r=p.minHeight+B;
}}o+=s;
var x=this.getSpacing();
var A=this.getSeparator();

if(A){var w=u.computeHorizontalSeparatorGaps(C,x,A);
}else{var w=u.computeHorizontalGaps(C,x,true);
}return {minWidth:o+w,width:v+w,minHeight:r,height:t};
}},destruct:function(){this.__fd=this.__fe=this.__fg=null;
}});
})();
(function(){var b="qx.ui.table.IRowRenderer";
qx.Interface.define(b,{members:{updateDataRowElement:function(d,e){},getRowHeightStyle:function(c){},createRowStyle:function(a){},getRowClass:function(f){}}});
})();
(function(){var t="",s="table-row-background-even",r="table-row-background-selected",q="table-row",p="background-color:",o="table-row-background-focused",n=';border-bottom: 1px solid ',m=';color:',l="table-row-selected",k="table-row-background-odd",d="default",j="table-row-background-focused-selected",g="qx.ui.table.rowrenderer.Default",c="table-row-line",b="'",f="height:",e=";",h="px;",a="1px solid ",i="Boolean";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__Bb=t;
this.__Bb={};
this.__Bc={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(d));
var w=qx.theme.manager.Color.getInstance();
this.__Bc.bgcolFocusedSelected=w.resolve(j);
this.__Bc.bgcolFocused=w.resolve(o);
this.__Bc.bgcolSelected=w.resolve(r);
this.__Bc.bgcolEven=w.resolve(s);
this.__Bc.bgcolOdd=w.resolve(k);
this.__Bc.colSelected=w.resolve(l);
this.__Bc.colNormal=w.resolve(q);
this.__Bc.horLine=w.resolve(c);
},properties:{highlightFocusRow:{check:i,init:true}},members:{__Bc:null,__Bd:null,__Bb:null,_insetY:1,_renderFont:function(z){if(z){this.__Bd=z.getStyles();
this.__Bb=qx.bom.element.Style.compile(this.__Bd);
this.__Bb=this.__Bb.replace(/"/g,b);
}else{this.__Bb=t;
this.__Bd=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(A,B){var D=this.__Bd;
var C=B.style;
qx.bom.element.Style.setStyles(B,D);

if(A.focusedRow&&this.getHighlightFocusRow()){C.backgroundColor=A.selected?this.__Bc.bgcolFocusedSelected:this.__Bc.bgcolFocused;
}else{if(A.selected){C.backgroundColor=this.__Bc.bgcolSelected;
}else{C.backgroundColor=(A.row%2==0)?this.__Bc.bgcolEven:this.__Bc.bgcolOdd;
}}C.color=A.selected?this.__Bc.colSelected:this.__Bc.colNormal;
C.borderBottom=a+this.__Bc.horLine;
},getRowHeightStyle:function(u){if(qx.bom.client.Feature.CONTENT_BOX){u-=this._insetY;
}return f+u+h;
},createRowStyle:function(x){var y=[];
y.push(e);
y.push(this.__Bb);
y.push(p);

if(x.focusedRow&&this.getHighlightFocusRow()){y.push(x.selected?this.__Bc.bgcolFocusedSelected:this.__Bc.bgcolFocused);
}else{if(x.selected){y.push(this.__Bc.bgcolSelected);
}else{y.push((x.row%2==0)?this.__Bc.bgcolEven:this.__Bc.bgcolOdd);
}}y.push(m);
y.push(x.selected?this.__Bc.colSelected:this.__Bc.colNormal);
y.push(n,this.__Bc.horLine);
return y.join(t);
},getRowClass:function(v){return t;
}},destruct:function(){this.__Bc=this.__Bd=this.__Bb=null;
}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__jy:null,__jz:false,__jA:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__jz){this.__jz=false;
}else{this.__jz=true;
o.execute(this);
}}this.fireEvent(n);
},__jB:function(e){if(this.__jz){this.__jz=false;
return;
}this.__jz=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__jA);
}
if(p!=null){this.__jA=p.addListener(n,this.__jB,this);
}var t=this.__jy;

if(t==null){this.__jy=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__jy=null;
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
}},open:function(u){var v=this.getMenu();

if(v){qx.ui.menu.Manager.getInstance().hideAll();
v.setOpener(this);
v.open();
if(u){var w=v.getSelectables()[0];

if(w){v.setSelectedButton(w);
}}}},_onMenuChange:function(e){var r=this.getMenu();

if(r.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){var t=this.getMenu();

if(t){if(!t.isVisible()){this.open();
}else{t.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(k);
},_onMouseOut:function(e){this.removeState(k);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(b);
this.addState(l);
var s=this.getMenu();

if(s){if(!s.isVisible()){this.open();
}else{s.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__Be=new qx.ui.core.Blocker(this);
},members:{__Bf:null,__Be:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
this.setMenu(j);
return j;
case f:var m=new qx.ui.table.columnmenu.MenuItem(h.text);
m.setVisible(h.bVisible);
this.getMenu().add(m);
return m;
case c:var k=new qx.ui.menu.Button(h.text);
k.set({appearance:e});
return k;
case d:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+g);
}},getBlocker:function(){return this.__Be;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__Be.dispose();
}});
})();
(function(){var v="keypress",u="interval",t="keydown",s="mousedown",r="keyup",q="__ms",p="blur",o="Enter",n="__mr",m="Up",f="__mt",l="Escape",j="qx.ui.menu.Manager",d="Left",c="Down",h="Right",g="singleton",k="Space";
qx.Class.define(j,{type:g,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__mr=[];
var bC=document.body;
var bD=qx.event.Registration;
bD.addListener(window.document.documentElement,s,this._onMouseDown,this,true);
bD.addListener(bC,t,this._onKeyUpDown,this,true);
bD.addListener(bC,r,this._onKeyUpDown,this,true);
bD.addListener(bC,v,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,p,this.hideAll,this);
this.__ms=new qx.event.Timer;
this.__ms.addListener(u,this._onOpenInterval,this);
this.__mt=new qx.event.Timer;
this.__mt.addListener(u,this._onCloseInterval,this);
},members:{__mu:null,__mv:null,__ms:null,__mt:null,__mr:null,_getChild:function(bg,bh,bi,bj){var bk=bg.getChildren();
var length=bk.length;
var bl;

for(var i=bh;i<length&&i>=0;i+=bi){bl=bk[i];

if(bl.isEnabled()&&!bl.isAnonymous()){return bl;
}}
if(bj){i=i==length?0:length-1;

for(;i!=bh;i+=bi){bl=bk[i];

if(bl.isEnabled()&&!bl.isAnonymous()){return bl;
}}}return null;
},_isInMenu:function(bd){while(bd){if(bd instanceof qx.ui.menu.Menu){return true;
}bd=bd.getLayoutParent();
}return false;
},_getMenuButton:function(be){while(be){if(be instanceof qx.ui.menu.AbstractButton){return be;
}be=be.getLayoutParent();
}return null;
},add:function(bv){{};
var bw=this.__mr;
bw.push(bv);
bv.setZIndex(1e6+bw.length);
},remove:function(bb){{};
var bc=this.__mr;

if(bc){qx.lang.Array.remove(bc,bb);
}},hideAll:function(){var z=this.__mr;

if(z){for(var i=z.length-1;i>=0;i--){z[i].exclude();
}}},getActiveMenu:function(){var W=this.__mr;
return W.length>0?W[W.length-1]:null;
},scheduleOpen:function(O){this.cancelClose(O);
if(O.isVisible()){if(this.__mu){this.cancelOpen(this.__mu);
}}else if(this.__mu!=O){this.__mu=O;
this.__ms.restartWith(O.getOpenInterval());
}},scheduleClose:function(I){this.cancelOpen(I);
if(!I.isVisible()){if(this.__mv){this.cancelClose(this.__mv);
}}else if(this.__mv!=I){this.__mv=I;
this.__mt.restartWith(I.getCloseInterval());
}},cancelOpen:function(A){if(this.__mu==A){this.__ms.stop();
this.__mu=null;
}},cancelClose:function(bB){if(this.__mv==bB){this.__mt.stop();
this.__mv=null;
}},_onOpenInterval:function(e){this.__ms.stop();
this.__mu.open();
this.__mu=null;
},_onCloseInterval:function(e){this.__mt.stop();
this.__mv.exclude();
this.__mv=null;
},_onMouseDown:function(e){var bf=e.getTarget();
bf=qx.ui.core.Widget.getWidgetByElement(bf);
if(bf==null){this.hideAll();
return;
}if(bf.getMenu&&bf.getMenu()&&bf.getMenu().isVisible()){return;
}if(this.__mr.length>0&&!this._isInMenu(bf)){this.hideAll();
}},__mw:{"Enter":1,"Space":1},__mx:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var P=this.getActiveMenu();

if(!P){return;
}var Q=e.getKeyIdentifier();

if(this.__mx[Q]||(this.__mw[Q]&&P.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var R=this.getActiveMenu();

if(!R){return;
}var S=e.getKeyIdentifier();
var U=this.__mx[S];
var T=this.__mw[S];

if(U){switch(S){case m:this._onKeyPressUp(R);
break;
case c:this._onKeyPressDown(R);
break;
case d:this._onKeyPressLeft(R);
break;
case h:this._onKeyPressRight(R);
break;
case l:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(T){var V=R.getSelectedButton();

if(V){switch(S){case o:this._onKeyPressEnter(R,V,e);
break;
case k:this._onKeyPressSpace(R,V,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(J){var K=J.getSelectedButton();
var L=J.getChildren();
var N=K?J.indexOf(K)-1:L.length-1;
var M=this._getChild(J,N,-1,true);
if(M){J.setSelectedButton(M);
}else{J.resetSelectedButton();
}},_onKeyPressDown:function(bx){var by=bx.getSelectedButton();
var bA=by?bx.indexOf(by)+1:0;
var bz=this._getChild(bx,bA,1,true);
if(bz){bx.setSelectedButton(bz);
}else{bx.resetSelectedButton();
}},_onKeyPressLeft:function(B){var G=B.getOpener();

if(!G){return;
}if(G instanceof qx.ui.menu.Button){var D=G.getLayoutParent();
D.resetOpenedButton();
D.setSelectedButton(G);
}else if(G instanceof qx.ui.menubar.Button){var F=G.getMenuBar().getMenuButtons();
var C=F.indexOf(G);
if(C===-1){return;
}var H=null;
var length=F.length;

for(var i=1;i<=length;i++){var E=F[(C-i+length)%length];

if(E.isEnabled()){H=E;
break;
}}
if(H&&H!=G){H.open(true);
}}},_onKeyPressRight:function(bm){var bo=bm.getSelectedButton();
if(bo){var bn=bo.getMenu();

if(bn){bm.setOpenedButton(bo);
var bu=this._getChild(bn,0,1);

if(bu){bn.setSelectedButton(bu);
}return;
}}else if(!bm.getOpenedButton()){var bu=this._getChild(bm,0,1);

if(bu){bm.setSelectedButton(bu);

if(bu.getMenu()){bm.setOpenedButton(bu);
}return;
}}var bs=bm.getOpener();
if(bs instanceof qx.ui.menu.Button&&bo){while(bs){bs=bs.getLayoutParent();

if(bs instanceof qx.ui.menu.Menu){bs=bs.getOpener();

if(bs instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bs){return;
}}if(bs instanceof qx.ui.menubar.Button){var br=bs.getMenuBar().getMenuButtons();
var bp=br.indexOf(bs);
if(bp===-1){return;
}var bt=null;
var length=br.length;

for(var i=1;i<=length;i++){var bq=br[(bp+i)%length];

if(bq.isEnabled()){bt=bq;
break;
}}
if(bt&&bt!=bs){bt.open(true);
}}},_onKeyPressEnter:function(w,x,e){if(x.hasListener(v)){var y=e.clone();
y.setBubbles(false);
y.setTarget(x);
x.dispatchEvent(y);
}this.hideAll();
},_onKeyPressSpace:function(X,Y,e){if(Y.hasListener(v)){var ba=e.clone();
ba.setBubbles(false);
ba.setTarget(Y);
Y.dispatchEvent(ba);
}}},destruct:function(){var b=qx.event.Registration;
var a=document.body;
b.removeListener(window.document.documentElement,s,this._onMouseDown,this,true);
b.removeListener(a,t,this._onKeyUpDown,this,true);
b.removeListener(a,r,this._onKeyUpDown,this,true);
b.removeListener(a,v,this._onKeyPress,this,true);
this._disposeObjects(q,f);
this._disposeArray(n);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__ch:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__ch(c);
},hasChildren:function(){return this.__ch(f);
},add:function(y,z){return this.__ch(j,y,z);
},remove:function(E){return this.__ch(a,E);
},removeAll:function(){return this.__ch(d);
},indexOf:function(r){return this.__ch(l,r);
},addAt:function(v,w,x){this.__ch(g,v,w,x);
},addBefore:function(A,B,C){this.__ch(i,A,B,C);
},addAfter:function(s,t,u){this.__ch(k,s,t,u);
},removeAt:function(D){this.__ch(e,D);
}}});
})();
(function(){var s="slidebar",r="Integer",q="resize",p="qx.ui.core.Widget",o="selected",n="visible",m="Boolean",l="mouseout",k="excluded",j="menu",H="_applySelectedButton",G="_applyOpenInterval",F="_applySpacingY",E="_blocker",D="_applyCloseInterval",C="_applyBlockerColor",B="_applyIconColumnWidth",A="mouseover",z="qx.ui.menu.Menu",y="Color",w="Number",x="_applyOpenedButton",u="_applySpacingX",v="_applyBlockerOpacity",t="_applyArrowColumnWidth";
qx.Class.define(z,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var f=this.getApplicationRoot();
f.add(this);
this.addListener(A,this._onMouseOver);
this.addListener(l,this._onMouseOut);
this.addListener(q,this._onResize,this);
f.addListener(q,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(f);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:j},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:k},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:r,apply:u,init:0,themeable:true},spacingY:{check:r,apply:F,init:0,themeable:true},iconColumnWidth:{check:r,init:0,themeable:true,apply:B},arrowColumnWidth:{check:r,init:0,themeable:true,apply:t},blockerColor:{check:y,init:null,nullable:true,apply:C,themeable:true},blockerOpacity:{check:w,init:1,apply:v,themeable:true},selectedButton:{check:p,nullable:true,apply:H},openedButton:{check:p,nullable:true,apply:x},opener:{check:p,nullable:true},openInterval:{check:r,themeable:true,init:250,apply:G},closeInterval:{check:r,themeable:true,init:250,apply:D},blockBackground:{check:m,themeable:true,init:false}},members:{__lz:null,__lA:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__lC();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__lC();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(bd){this.placeToPoint(bd);
this.__lC();
this.show();
this._placementTarget=bd;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var T=[];
var U=this.getChildren();

for(var i=0;i<U.length;i++){if(U[i].isEnabled()){T.push(U[i]);
}}return T;
},_applyIconColumnWidth:function(X,Y){this._getMenuLayout().setIconColumnWidth(X);
},_applyArrowColumnWidth:function(I,J){this._getMenuLayout().setArrowColumnWidth(I);
},_applySpacingX:function(g,h){this._getMenuLayout().setColumnSpacing(g);
},_applySpacingY:function(V,W){this._getMenuLayout().setSpacing(V);
},_applyVisibility:function(a,b){qx.ui.core.Widget.prototype._applyVisibility.call(this,a,b);
var c=qx.ui.menu.Manager.getInstance();

if(a===n){c.add(this);
var d=this.getParentMenu();

if(d){d.setOpenedButton(this.getOpener());
}}else if(b===n){c.remove(this);
var d=this.getParentMenu();

if(d&&d.getOpenedButton()==this.getOpener()){d.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__lB();
},__lB:function(){if(this.isVisible()){if(this.getBlockBackground()){var N=this.getZIndex();
this._blocker.blockContent(N-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var bc=this.getOpener();

if(!bc||!(bc instanceof qx.ui.menu.AbstractButton)){return null;
}
while(bc&&!(bc instanceof qx.ui.menu.Menu)){bc=bc.getLayoutParent();
}return bc;
},_applySelectedButton:function(bm,bn){if(bn){bn.removeState(o);
}
if(bm){bm.addState(o);
}},_applyOpenedButton:function(ba,bb){if(bb){bb.getMenu().exclude();
}
if(ba){ba.getMenu().open();
}},_applyBlockerColor:function(O,P){this._blocker.setColor(O);
},_applyBlockerOpacity:function(K,L){this._blocker.setOpacity(K);
},getChildrenContainer:function(){return this.getChildControl(s,true)||this;
},_createChildControlImpl:function(bg){var bh;

switch(bg){case s:var bh=new qx.ui.menu.MenuSlideBar();
var bj=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bi=bh.getLayout();
bh.setLayout(bj);
bi.dispose();
var bk=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bk.length;i++){bh.add(bk[i]);
}this.removeListener(q,this._onResize,this);
bh.getChildrenContainer().addListener(q,this._onResize,this);
this._add(bh);
break;
}return bh||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bg);
},_getMenuLayout:function(){if(this.hasChildControl(s)){return this.getChildControl(s).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(s)){return this.getChildControl(s).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__lC:function(){var R=this._getMenuBounds();

if(!R){this.addListenerOnce(q,this.__lC,this);
return;
}var Q=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var S=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(R.height+top);
this.moveTo(S,0);
});
}else if(top+R.height>Q){this._assertSlideBar(function(){this.setHeight(Q-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bl){if(this.hasChildControl(s)){return bl.call(this);
}this.__lA=bl;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(s);

if(this.__lA){this.__lA.call(this);
delete this.__lA;
}},_onResize:function(){if(this.isVisible()){var M=this._placementTarget;

if(!M){return;
}else if(M instanceof qx.ui.core.Widget){this.placeToWidget(M);
}else if(M.top!==undefined){this.placeToPoint(M);
}else{throw new Error("Unknown target: "+M);
}this.__lC();
}},_onMouseOver:function(e){var bp=qx.ui.menu.Manager.getInstance();
bp.cancelClose(this);
var bq=e.getTarget();

if(bq.isEnabled()&&bq instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bq);
var bo=bq.getMenu&&bq.getMenu();

if(bo){bo.setOpener(bq);
bp.scheduleOpen(bo);
this.__lz=bo;
}else{var br=this.getOpenedButton();

if(br){bp.scheduleClose(br.getMenu());
}
if(this.__lz){bp.cancelOpen(this.__lz);
this.__lz=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var be=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bf=this.getOpenedButton();
bf?this.setSelectedButton(bf):this.resetSelectedButton();
if(bf){be.cancelClose(bf.getMenu());
}if(this.__lz){be.cancelOpen(this.__lz);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(q,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(E);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__oY:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__oY=[0,0,0,0];
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
},getColumnSizes:function(){return this.__oY||null;
}},destruct:function(){this.__oY=null;
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
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(A){var B;

switch(A){case t:B=new qx.ui.basic.Image;
B.setAnonymous(true);
this._add(B,{column:0});
break;
case s:B=new qx.ui.basic.Label;
B.setAnonymous(true);
this._add(B,{column:1});
break;
case q:B=new qx.ui.basic.Label;
B.setAnonymous(true);
this._add(B,{column:2});
break;
case r:B=new qx.ui.basic.Image;
B.setAnonymous(true);
this._add(B,{column:3});
break;
}return B||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,A);
},_forwardStates:{selected:1},getChildrenSizes:function(){var E=0,F=0,G=0,K=0;

if(this._isChildControlVisible(t)){var L=this.getChildControl(t);
E=L.getMarginLeft()+L.getSizeHint().width+L.getMarginRight();
}
if(this._isChildControlVisible(s)){var I=this.getChildControl(s);
F=I.getMarginLeft()+I.getSizeHint().width+I.getMarginRight();
}
if(this._isChildControlVisible(q)){var H=this.getChildControl(q);
G=H.getMarginLeft()+H.getSizeHint().width+H.getMarginRight();
}
if(this._isChildControlVisible(r)){var J=this.getChildControl(r);
K=J.getMarginLeft()+J.getSizeHint().width+J.getMarginRight();
}return [E,F,G,K];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var z=e.getData();

if(qx.core.Variant.isSet(o,m)){var x=e.getOldData();

if(!x){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!z){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var y=z!=null?z.toString():h;
this.getChildControl(q).setValue(y);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var w=this.getCommand();

if(w!=null){this.getChildControl(q).setValue(w.toString());
}},"off":null}),_applyIcon:function(M,N){if(M){this._showChildControl(t).setSource(M);
}else{this._excludeChildControl(t);
}},_applyLabel:function(C,D){if(C){this._showChildControl(s).setValue(C);
}else{this._excludeChildControl(s);
}},_applyMenu:function(u,v){if(v){v.resetOpener();
v.removeState(n);
}
if(u){this._showChildControl(r);
u.setOpener(this);
u.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(o,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(e,f){var r=this._getLayoutChildren();
var q;
var h;
var j=[];

for(var i=0,l=r.length;i<l;i++){q=r[i];
h=q.getLayoutProperties().column;
j[h]=q;
}var p=this.__mg(r[0]);
var s=p.getColumnSizes();
var m=p.getSpacingX();
var k=qx.lang.Array.sum(s)+m*(s.length-1);

if(k<e){s[1]+=e-k;
}var t=0,top=0;
var n=qx.ui.layout.Util;

for(var i=0,l=s.length;i<l;i++){q=j[i];

if(q){var g=q.getSizeHint();
var top=n.computeVerticalAlignOffset(q.getAlignY()||c,g.height,f,0,0);
var o=n.computeHorizontalAlignOffset(q.getAlignX()||a,g.width,s[i],q.getMarginLeft(),q.getMarginRight());
q.renderLayout(t+o,top,g.width,g.height);
}t+=s[i]+m;
}},__mg:function(d){while(!(d instanceof qx.ui.menu.Menu)){d=d.getLayoutParent();
}return d;
},_computeSizeHint:function(){var w=this._getLayoutChildren();
var v=0;
var x=0;

for(var i=0,l=w.length;i<l;i++){var u=w[i].getSizeHint();
x+=u.width;
v=Math.max(v,u.height);
}return {width:x,height:v};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var t="horizontal",s="scrollpane",r="vertical",q="button-backward",p="button-forward",o="content",n="execute",m="qx.ui.container.SlideBar",l="scrollY",k="removeChildWidget",g="scrollX",j="_applyOrientation",i="mousewheel",f="Integer",d="slidebar",h="update";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(y){qx.ui.core.Widget.call(this);
var z=this.getChildControl(s);
this._add(z,{flex:1});

if(y!=null){this.setOrientation(y);
}else{this.initOrientation();
}this.addListener(i,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:d},orientation:{check:[t,r],init:t,apply:j},scrollStep:{check:f,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(o);
},_createChildControlImpl:function(w){var x;

switch(w){case p:x=new qx.ui.form.RepeatButton;
x.addListener(n,this._onExecuteForward,this);
x.setFocusable(false);
this._addAt(x,2);
break;
case q:x=new qx.ui.form.RepeatButton;
x.addListener(n,this._onExecuteBackward,this);
x.setFocusable(false);
this._addAt(x,0);
break;
case o:x=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){x.addListener(k,this._onRemoveChild,this);
}this.getChildControl(s).add(x);
break;
case s:x=new qx.ui.core.scroll.ScrollPane();
x.addListener(h,this._onResize,this);
x.addListener(g,this._onScroll,this);
x.addListener(l,this._onScroll,this);
break;
}return x||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,w);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(u){var v=this.getChildControl(s);

if(this.getOrientation()===t){v.scrollByX(u);
}else{v.scrollByY(u);
}},scrollTo:function(F){var G=this.getChildControl(s);

if(this.getOrientation()===t){G.scrollToX(F);
}else{G.scrollToY(F);
}},_applyOrientation:function(A,B){var E=[this.getLayout(),this._getLayout()];
var D=this.getChildControl(p);
var C=this.getChildControl(q);
if(B==r){D.removeState(r);
C.removeState(r);
D.addState(t);
C.addState(t);
}else if(B==t){D.removeState(t);
C.removeState(t);
D.addState(r);
C.addState(r);
}
if(A==t){this._setLayout(new qx.ui.layout.HBox());
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
},_onResize:function(e){var content=this.getChildControl(s).getChildren()[0];

if(!content){return;
}var a=this.getInnerSize();
var c=content.getBounds();
var b=(this.getOrientation()===t)?c.width>a.width:c.height>a.height;

if(b){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(s).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var I=this.getChildControl(s);

if(this.getOrientation()===t){var H=I.getScrollX();
var J=I.getScrollMaxX();
}else{var H=I.getScrollY();
var J=I.getScrollMaxY();
}this.getChildControl(q).setEnabled(H>0);
this.getChildControl(p).setEnabled(H<J);
},_showArrows:function(){this._showChildControl(p);
this._showChildControl(q);
},_hideArrows:function(){this._excludeChildControl(p);
this._excludeChildControl(q);
this.scrollTo(0);
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g){var h;

switch(g){case c:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteForward,this);
this._addAt(h,2);
break;
case e:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteBackward,this);
this._addAt(h,0);
break;
}return h||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__lX",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__lX=new qx.event.AcceleratingTimer();
this.__lX.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__lY:null,__lX:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__ma();
}this.removeState(m);
this.addState(n);
}},release:function(s){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__lY){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__mb();
},_applyEnabled:function(q,r){qx.ui.form.Button.prototype._applyEnabled.call(this,q,r);

if(!q){this.removeState(n);
this.removeState(m);
this.__mb();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__lX.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__lX.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__ma();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__lY){this.execute();
}}this.__mb();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__lY){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__mb();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__ma();
}},_onInterval:function(e){this.__lY=true;
this.fireEvent(b);
},__ma:function(){this.fireEvent(g);
this.__lY=false;
this.__lX.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__mb:function(){this.fireEvent(d);
this.__lX.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="qx.event.type.Event",b="qx.event.AcceleratingTimer",a="__pa";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__pa=new qx.event.Timer(this.getInterval());
this.__pa.addListener(d,this._onInterval,this);
},events:{"interval":c},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__pa:null,__pb:null,start:function(){this.__pa.setInterval(this.getFirstInterval());
this.__pa.start();
},stop:function(){this.__pa.stop();
this.__pb=null;
},_onInterval:function(){this.__pa.stop();

if(this.__pb==null){this.__pb=this.getInterval();
}this.__pb=Math.max(this.getMinimum(),this.__pb-this.getDecrease());
this.__pa.setInterval(this.__pb);
this.__pa.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var K="resize",J="scrollY",I="update",H="scrollX",G="_applyScrollX",F="_applyScrollY",E="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",D="appear",C="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",B="qx.event.type.Event",z="qx.ui.core.scroll.ScrollPane",A="scroll";
qx.Class.define(z,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(K,this._onUpdate);
var h=this.getContentElement();
h.addListener(A,this._onScroll,this);
h.addListener(D,this._onAppear,this);
},events:{update:B},properties:{scrollX:{check:E,apply:G,event:H,init:0},scrollY:{check:C,apply:F,event:J,init:0}},members:{add:function(j){var k=this._getChildren()[0];

if(k){this._remove(k);
k.removeListener(K,this._onUpdate,this);
}
if(j){this._add(j);
j.addListener(K,this._onUpdate,this);
}},remove:function(N){if(N){this._remove(N);
N.removeListener(K,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(I);
},_onScroll:function(e){var i=this.getContentElement();
this.setScrollX(i.getScrollX());
this.setScrollY(i.getScrollY());
},_onAppear:function(e){var u=this.getContentElement();
var r=this.getScrollX();
var s=u.getScrollX();

if(r!=s){u.scrollToX(r);
}var v=this.getScrollY();
var t=u.getScrollY();

if(v!=t){u.scrollToY(v);
}},getItemTop:function(f){var top=0;

do{top+=f.getBounds().top;
f=f.getLayoutParent();
}while(f&&f!==this);
return top;
},getItemBottom:function(g){return this.getItemTop(g)+g.getBounds().height;
},getItemLeft:function(p){var q=0;
var parent;

do{q+=p.getBounds().left;
parent=p.getLayoutParent();

if(parent){q+=parent.getInsets().left;
}p=parent;
}while(p&&p!==this);
return q;
},getItemRight:function(w){return this.getItemLeft(w)+w.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var m=this.getInnerSize();
var l=this.getScrollSize();

if(m&&l){return Math.max(0,l.width-m.width);
}return 0;
},getScrollMaxY:function(){var d=this.getInnerSize();
var c=this.getScrollSize();

if(d&&c){return Math.max(0,c.height-d.height);
}return 0;
},scrollToX:function(L){var M=this.getScrollMaxX();

if(L<0){L=0;
}else if(L>M){L=M;
}this.setScrollX(L);
},scrollToY:function(n){var o=this.getScrollMaxY();

if(n<0){n=0;
}else if(n>o){n=o;
}this.setScrollY(n);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(b){this.getContentElement().scrollToX(b);
},_applyScrollY:function(a){this.getContentElement().scrollToY(a);
}}});
})();
(function(){var k="Integer",j="hovered",i="hover-button",h="interval",g="mouseover",f="mouseout",d="__lD",c="qx.ui.form.HoverButton";
qx.Class.define(c,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(a,b){qx.ui.basic.Atom.call(this,a,b);
this.addListener(g,this._onMouseOver,this);
this.addListener(f,this._onMouseOut,this);
this.__lD=new qx.event.AcceleratingTimer();
this.__lD.addListener(h,this._onInterval,this);
},properties:{appearance:{refine:true,init:i},interval:{check:k,init:80},firstInterval:{check:k,init:200},minTimer:{check:k,init:20},timerDecrease:{check:k,init:2}},members:{__lD:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__lD.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(j);
},_onMouseOut:function(e){this.__lD.stop();
this.removeState(j);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__lD.stop();
}}},destruct:function(){this._disposeObjects(d);
}});
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
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(k,l,m){qx.ui.form.MenuButton.call(this,k,l,m);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(i){qx.ui.form.MenuButton.prototype.open.call(this,i);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var j=this.getMenu();
var menubar=this.getMenuBar();

if(j.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(j);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==j){menubar.resetOpenMenu();
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
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__pz:false,_setAllowMenuOpenHover:function(t){this.__pz=t;
},_isAllowMenuOpenHover:function(){return this.__pz;
},_applySpacing:function(q,r){var s=this._getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSpacer:function(){var p=new qx.ui.core.Spacer;
this._add(p,{flex:1});
return p;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var n=this.getChildren();
var m=[];
var o;

for(var i=0,l=n.length;i<l;i++){o=n[i];

if(o instanceof qx.ui.menubar.Button){m.push(o);
}else if(o instanceof qx.ui.toolbar.Part){m.push.apply(m,o.getMenuButtons());
}}return m;
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
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var m="container",k="handle",j="both",h="Integer",g="middle",f="qx.ui.toolbar.Part",e="icon",d="label",c="changeShow",b="_applySpacing",a="toolbar/part";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(t){var u;

switch(t){case k:u=new qx.ui.basic.Image();
u.setAlignY(g);
this._add(u);
break;
case m:u=new qx.ui.toolbar.PartContainer;
this._add(u);
break;
}return u||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,t);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(q,r){var s=this.getChildControl(m).getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var o=this.getChildren();
var n=[];
var p;

for(var i=0,l=o.length;i<l;i++){p=o[i];

if(p instanceof qx.ui.menubar.Button){n.push(p);
}}return n;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
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
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(i){qx.ui.menu.CheckBox.call(this,i);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__Bg:false,_applyVisible:function(g,h){if(!this.bInListener){this.setValue(g);
}}}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__vb:null,handleMouseDown:function(e,f){if(f.isLeftPressed()){var g=this.getSelectionModel();

if(!g.isSelectedIndex(e)){this._handleSelectEvent(e,f);
this.__vb=true;
}else{this.__vb=false;
}}else if(f.isRightPressed()&&f.getModifiers()==0){var g=this.getSelectionModel();

if(!g.isSelectedIndex(e)){g.setSelectionInterval(e,e);
}}},handleMouseUp:function(c,d){if(d.isLeftPressed()&&!this.__vb){this._handleSelectEvent(c,d);
}},handleClick:function(s,t){},handleSelectKeyDown:function(m,n){this._handleSelectEvent(m,n);
},handleMoveKeyDown:function(o,p){var r=this.getSelectionModel();

switch(p.getModifiers()){case 0:r.setSelectionInterval(o,o);
break;
case qx.event.type.Dom.SHIFT_MASK:var q=r.getAnchorSelectionIndex();

if(q==-1){r.setSelectionInterval(o,o);
}else{r.setSelectionInterval(q,o);
}break;
}},_handleSelectEvent:function(h,i){var l=this.getSelectionModel();
var j=l.getLeadSelectionIndex();
var k=l.getAnchorSelectionIndex();

if(i.isShiftPressed()){if(h!=j||l.isSelectionEmpty()){if(k==-1){k=h;
}
if(i.isCtrlOrCommandPressed()){l.addSelectionInterval(k,h);
}else{l.setSelectionInterval(k,h);
}}}else if(i.isCtrlOrCommandPressed()){if(l.isSelectedIndex(h)){l.removeSelectionInterval(h,h);
}else{l.addSelectionInterval(h,h);
}}else{l.setSelectionInterval(h,h);
}}}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(d){return true;
},updateHeaderCell:function(b,c){return true;
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
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f='" ',e="nowrap",d="default",c="qx.client",b="}",a="width:",G=".qooxdoo-table-cell-right { text-align:right } ",F="0px 6px",E='<div class="',D="0px",C="height:",B="1px solid ",A=".qooxdoo-table-cell-bold { font-weight:bold } ",z="table-row-line",y='>',x="mshtml",q='</div>',r="ellipsis",o="content-box",p='left:',m="qx.ui.table.cellrenderer.Abstract",n='" style="',k="abstract",l="none",s="hidden",t="} ",v='px;',u=".qooxdoo-table-cell-italic { font-style:italic} ",w="absolute";
qx.Class.define(m,{type:k,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var I=qx.ui.table.cellrenderer.Abstract;

if(!I.__un){var K=qx.theme.manager.Color.getInstance();
I.__un=this.self(arguments);
var J=h+
qx.bom.element.Style.compile({position:w,top:D,overflow:s,whiteSpace:e,borderRight:B+K.resolve(z),padding:F,cursor:d,textOverflow:r,userSelect:l})+t+G+u+A;

if(!qx.core.Variant.isSet(c,x)){J+=h+qx.bom.element.BoxSizing.compile(o)+b;
}I.__un.stylesheet=qx.bom.Stylesheet.createElement(J);
}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(H){return g;
},_getCellStyle:function(L){return L.style||j;
},_getCellAttributes:function(R){return j;
},_getContentHtml:function(S){return S.value||j;
},_getCellSizeStyle:function(M,N,O,P){var Q=j;

if(qx.bom.client.Feature.CONTENT_BOX){M-=O;
N-=P;
}Q+=a+Math.max(M,0)+i;
Q+=C+Math.max(N,0)+i;
return Q;
},createDataCellHtml:function(T,U){U.push(E,this._getCellClass(T),n,p,T.styleLeft,v,this._getCellSizeStyle(T.styleWidth,T.styleHeight,this._insetX,this._insetY),this._getCellStyle(T),f,this._getCellAttributes(T),y+this._getContentHtml(T),q);
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4,_numberFormat:null},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(o){if(this.getUseAutoAlign()){if(typeof o.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}return 0;
},_getCellClass:function(l){var m=qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this,l);

if(!m){return h;
}var n=this._getStyleFlags(l);

if(n&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){m+=c;
}
if(n&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){m+=d;
}
if(n&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){m+=b;
}return m;
},_getContentHtml:function(p){return qx.bom.String.escape(this._formatValue(p));
},_formatValue:function(i){var k=i.value;
var j;

if(k==null){return h;
}
if(typeof k==a){return k;
}else if(typeof k==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var j=qx.ui.table.cellrenderer.Default._numberFormat.format(k);
}else if(k instanceof Date){j=qx.util.format.DateFormat.getDateInstance().format(k);
}else{j=k;
}return j;
}}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var f="",e="Function",d="abstract",c="number",b="appear",a="qx.ui.table.celleditor.AbstractField";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:d,properties:{validationFunction:{check:e,nullable:true,init:null}},members:{_createEditor:function(){throw new Error("Abstract method call!");
},createCellEditor:function(j){var k=this._createEditor();
k.originalValue=j.value;

if(j.value===null||j.value===undefined){j.value=f;
}k.setValue(f+j.value);
k.addListener(b,function(){k.selectAllText();
});
return k;
},getCellEditorValue:function(g){var i=g.getValue();
var h=this.getValidationFunction();

if(h){i=h(i,g.originalValue);
}
if(typeof g.originalValue==c){i=parseFloat(i);
}return i;
}}});
})();
(function(){var c="number",b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{getCellEditorValue:function(d){var f=d.getValue();
var e=this.getValidationFunction();

if(e){f=e(f,d.originalValue);
}
if(typeof d.originalValue==c){if(f!=null){f=parseFloat(f);
}}return f;
},_createEditor:function(){var g=new qx.ui.form.TextField();
g.setAppearance(a);
return g;
}}});
})();
(function(){var q="qx.event.type.Data",p="visibilityChanged",o="orderChanged",n="visibilityChangedPre",m="__ut",l="widthChanged",k="qx.ui.table.columnmodel.Basic",j="__uu",h="__uv";
qx.Class.define(k,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__uo=[];
this.__up=[];
},events:{"widthChanged":q,"visibilityChangedPre":q,"visibilityChanged":q,"orderChanged":q},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__uq:null,__ur:null,__up:null,__uo:null,__us:null,__ut:null,__uu:null,__uv:null,init:function(O){{};
this.__us=[];
var R=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var S=this.__ut||(this.__ut=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var Q=this.__uu||(this.__uu=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var P=this.__uv||(this.__uv=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__uo=[];
this.__up=[];

for(var U=0;U<O;U++){this.__us[U]={width:R,headerRenderer:S,dataRenderer:Q,editorFactory:P};
this.__uo[U]=U;
this.__up[U]=U;
}this.__ur=null;

for(var U=0;U<O;U++){var T={col:U,visible:true};
this.fireDataEvent(n,T);
this.fireDataEvent(p,T);
}},getVisibleColumns:function(){return this.__up!=null?this.__up:[];
},setColumnWidth:function(w,y){{};
var A=this.__us[w].width;

if(A!=y){this.__us[w].width=y;
var z={col:w,newWidth:y,oldWidth:A};
this.fireDataEvent(l,z);
}},getColumnWidth:function(a){{};
return this.__us[a].width;
},setHeaderCellRenderer:function(b,c){{};
var d=this.__us[b].headerRenderer;

if(d!==this.__ut){d.dispose();
}this.__us[b].headerRenderer=c;
},getHeaderCellRenderer:function(E){{};
return this.__us[E].headerRenderer;
},setDataCellRenderer:function(s,t){{};
var u=this.__us[s].dataRenderer;

if(u!==this.__uu){u.dispose();
}this.__us[s].dataRenderer=t;
},getDataCellRenderer:function(r){{};
return this.__us[r].dataRenderer;
},setCellEditorFactory:function(F,G){{};
var H=this.__us[F].headerRenderer;

if(H!==this.__uv){H.dispose();
}this.__us[F].editorFactory=G;
},getCellEditorFactory:function(bj){{};
return this.__us[bj].editorFactory;
},_getColToXPosMap:function(){if(this.__ur==null){this.__ur={};

for(var g=0;g<this.__uo.length;g++){var f=this.__uo[g];
this.__ur[f]={overX:g};
}
for(var e=0;e<this.__up.length;e++){var f=this.__up[e];
this.__ur[f].visX=e;
}}return this.__ur;
},getVisibleColumnCount:function(){return this.__up!=null?this.__up.length:0;
},getVisibleColumnAtX:function(v){{};
return this.__up[v];
},getVisibleX:function(I){{};
return this._getColToXPosMap()[I].visX;
},getOverallColumnCount:function(){return this.__uo.length;
},getOverallColumnAtX:function(D){{};
return this.__uo[D];
},getOverallX:function(C){{};
return this._getColToXPosMap()[C].overX;
},isColumnVisible:function(B){{};
return (this._getColToXPosMap()[B].visX!=null);
},setColumnVisible:function(ba,bb){{};

if(bb!=this.isColumnVisible(ba)){if(bb){var bh=this._getColToXPosMap();
var be=bh[ba].overX;

if(be==null){throw new Error("Showing column failed: "+ba+". The column is not added to this TablePaneModel.");
}var bf;

for(var x=be+1;x<this.__uo.length;x++){var bg=this.__uo[x];
var bc=bh[bg].visX;

if(bc!=null){bf=bc;
break;
}}if(bf==null){bf=this.__up.length;
}this.__up.splice(bf,0,ba);
}else{var bd=this.getVisibleX(ba);
this.__up.splice(bd,1);
}this.__ur=null;
if(!this.__uq){var bi={col:ba,visible:bb};
this.fireDataEvent(n,bi);
this.fireDataEvent(p,bi);
}}},moveColumn:function(J,K){{};
this.__uq=true;
var N=this.__uo[J];
var L=this.isColumnVisible(N);

if(L){this.setColumnVisible(N,false);
}this.__uo.splice(J,1);
this.__uo.splice(K,0,N);
this.__ur=null;

if(L){this.setColumnVisible(N,true);
}this.__uq=false;
var M={col:N,fromOverXPos:J,toOverXPos:K};
this.fireDataEvent(o,M);
},setColumnsOrder:function(V){{};

if(V.length==this.__uo.length){this.__uq=true;
var Y=new Array(V.length);

for(var W=0;W<this.__uo.length;W++){var X=this.isColumnVisible(W);
Y[W]=X;

if(X){this.setColumnVisible(W,false);
}}this.__uo=qx.lang.Array.clone(V);
this.__ur=null;
for(var W=0;W<this.__uo.length;W++){if(Y[W]){this.setColumnVisible(W,true);
}}this.__uq=false;
this.fireDataEvent(o);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__uo.length+", got "+V.length);
}}},destruct:function(){for(var i=0;i<this.__us.length;i++){this.__us[i].headerRenderer.dispose();
this.__us[i].dataRenderer.dispose();
this.__us[i].editorFactory.dispose();
}this.__uo=this.__up=this.__us=this.__ur=null;
this._disposeObjects(m,j,h);
}});
})();
(function(){var i="icon",h="label",g="String",f="sort-icon",e="_applySortIcon",d="_applyIcon",c="table-header-cell",b="qx.ui.table.headerrenderer.HeaderCell",a="_applyLabel";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var p=new qx.ui.layout.Grid();
p.setRowFlex(0,1);
p.setColumnFlex(1,1);
p.setColumnFlex(2,1);
this.setLayout(p);
},properties:{appearance:{refine:true,init:c},label:{check:g,init:null,nullable:true,apply:a},sortIcon:{check:g,init:null,nullable:true,apply:e,themeable:true},icon:{check:g,init:null,nullable:true,apply:d}},members:{_applyLabel:function(q,r){if(q){this._showChildControl(h).setValue(q);
}else{this._excludeChildControl(h);
}},_applySortIcon:function(l,m){if(l){this._showChildControl(f).setSource(l);
}else{this._excludeChildControl(f);
}},_applyIcon:function(n,o){if(n){this._showChildControl(i).setSource(n);
}else{this._excludeChildControl(i);
}},_createChildControlImpl:function(j){var k;

switch(j){case h:k=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(k,{row:0,column:1});
break;
case f:k=new qx.ui.basic.Image(this.getSortIcon());
k.setAnonymous(true);
this._add(k,{row:0,column:2});
break;
case i:k=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(k,{row:0,column:0});
break;
}return k||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,j);
}}});
})();
(function(){var bT="left",bS="top",bR="_applyLayoutChange",bQ="hAlign",bP="flex",bO="vAlign",bN="Integer",bM="minWidth",bL="width",bK="minHeight",bH="qx.ui.layout.Grid",bJ="height",bI="maxHeight",bG="maxWidth";
qx.Class.define(bH,{extend:qx.ui.layout.Abstract,construct:function(q,r){qx.ui.layout.Abstract.call(this);
this.__hf=[];
this.__hg=[];

if(q){this.setSpacingX(q);
}
if(r){this.setSpacingY(r);
}},properties:{spacingX:{check:bN,init:0,apply:bR},spacingY:{check:bN,init:0,apply:bR}},members:{__hh:null,__hf:null,__hg:null,__hi:null,__hj:null,__hk:null,__hl:null,__hm:null,__hn:null,verifyLayoutProperty:null,__ho:function(){var cc=[];
var cb=[];
var cd=[];
var bY=-1;
var bX=-1;
var cf=this._getLayoutChildren();

for(var i=0,l=cf.length;i<l;i++){var ca=cf[i];
var ce=ca.getLayoutProperties();
var cg=ce.row;
var bW=ce.column;
ce.colSpan=ce.colSpan||1;
ce.rowSpan=ce.rowSpan||1;
if(cg==null||bW==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+ca+"' must be defined!");
}
if(cc[cg]&&cc[cg][bW]){throw new Error("Cannot add widget '"+ca+"'!. "+"There is already a widget '"+cc[cg][bW]+"' in this cell ("+cg+", "+bW+")");
}
for(var x=bW;x<bW+ce.colSpan;x++){for(var y=cg;y<cg+ce.rowSpan;y++){if(cc[y]==undefined){cc[y]=[];
}cc[y][x]=ca;
bX=Math.max(bX,x);
bY=Math.max(bY,y);
}}
if(ce.rowSpan>1){cd.push(ca);
}
if(ce.colSpan>1){cb.push(ca);
}}for(var y=0;y<=bY;y++){if(cc[y]==undefined){cc[y]=[];
}}this.__hh=cc;
this.__hi=cb;
this.__hj=cd;
this.__hk=bY;
this.__hl=bX;
this.__hm=null;
this.__hn=null;
delete this._invalidChildrenCache;
},_setRowData:function(bm,bn,bo){var bp=this.__hf[bm];

if(!bp){this.__hf[bm]={};
this.__hf[bm][bn]=bo;
}else{bp[bn]=bo;
}},_setColumnData:function(s,t,u){var v=this.__hg[s];

if(!v){this.__hg[s]={};
this.__hg[s][t]=u;
}else{v[t]=u;
}},setSpacing:function(dU){this.setSpacingY(dU);
this.setSpacingX(dU);
return this;
},setColumnAlign:function(dX,dY,ea){{};
this._setColumnData(dX,bQ,dY);
this._setColumnData(dX,bO,ea);
this._applyLayoutChange();
return this;
},getColumnAlign:function(e){var f=this.__hg[e]||{};
return {vAlign:f.vAlign||bS,hAlign:f.hAlign||bT};
},setRowAlign:function(ba,bb,bc){{};
this._setRowData(ba,bQ,bb);
this._setRowData(ba,bO,bc);
this._applyLayoutChange();
return this;
},getRowAlign:function(cr){var cs=this.__hf[cr]||{};
return {vAlign:cs.vAlign||bS,hAlign:cs.hAlign||bT};
},getCellWidget:function(J,K){if(this._invalidChildrenCache){this.__ho();
}var J=this.__hh[J]||{};
return J[K]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__ho();
}return this.__hk+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__ho();
}return this.__hl+1;
},getCellAlign:function(ch,ci){var co=bS;
var cm=bT;
var cn=this.__hf[ch];
var ck=this.__hg[ci];
var cj=this.__hh[ch][ci];

if(cj){var cl={vAlign:cj.getAlignY(),hAlign:cj.getAlignX()};
}else{cl={};
}if(cl.vAlign){co=cl.vAlign;
}else if(cn&&cn.vAlign){co=cn.vAlign;
}else if(ck&&ck.vAlign){co=ck.vAlign;
}if(cl.hAlign){cm=cl.hAlign;
}else if(ck&&ck.hAlign){cm=ck.hAlign;
}else if(cn&&cn.hAlign){cm=cn.hAlign;
}return {vAlign:co,hAlign:cm};
},setColumnFlex:function(cG,cH){this._setColumnData(cG,bP,cH);
this._applyLayoutChange();
return this;
},getColumnFlex:function(a){var b=this.__hg[a]||{};
return b.flex!==undefined?b.flex:0;
},setRowFlex:function(bk,bl){this._setRowData(bk,bP,bl);
this._applyLayoutChange();
return this;
},getRowFlex:function(k){var m=this.__hf[k]||{};
var n=m.flex!==undefined?m.flex:0;
return n;
},setColumnMaxWidth:function(dV,dW){this._setColumnData(dV,bG,dW);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bi){var bj=this.__hg[bi]||{};
return bj.maxWidth!==undefined?bj.maxWidth:Infinity;
},setColumnWidth:function(dS,dT){this._setColumnData(dS,bL,dT);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bE){var bF=this.__hg[bE]||{};
return bF.width!==undefined?bF.width:null;
},setColumnMinWidth:function(c,d){this._setColumnData(c,bM,d);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(o){var p=this.__hg[o]||{};
return p.minWidth||0;
},setRowMaxHeight:function(bU,bV){this._setRowData(bU,bI,bV);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(dQ){var dR=this.__hf[dQ]||{};
return dR.maxHeight||Infinity;
},setRowHeight:function(cp,cq){this._setRowData(cp,bJ,cq);
this._applyLayoutChange();
return this;
},getRowHeight:function(cE){var cF=this.__hf[cE]||{};
return cF.height!==undefined?cF.height:null;
},setRowMinHeight:function(dO,dP){this._setRowData(dO,bK,dP);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(g){var h=this.__hf[g]||{};
return h.minHeight||0;
},__hp:function(bd){var bh=bd.getSizeHint();
var bg=bd.getMarginLeft()+bd.getMarginRight();
var bf=bd.getMarginTop()+bd.getMarginBottom();
var be={height:bh.height+bf,width:bh.width+bg,minHeight:bh.minHeight+bf,minWidth:bh.minWidth+bg,maxHeight:bh.maxHeight+bf,maxWidth:bh.maxWidth+bg};
return be;
},_fixHeightsRowSpan:function(bq){var bB=this.getSpacingY();

for(var i=0,l=this.__hj.length;i<l;i++){var bt=this.__hj[i];
var bv=this.__hp(bt);
var bw=bt.getLayoutProperties();
var bs=bw.row;
var bz=bB*(bw.rowSpan-1);
var br=bz;
var by={};

for(var j=0;j<bw.rowSpan;j++){var bD=bw.row+j;
var bu=bq[bD];
var bC=this.getRowFlex(bD);

if(bC>0){by[bD]={min:bu.minHeight,value:bu.height,max:bu.maxHeight,flex:bC};
}bz+=bu.height;
br+=bu.minHeight;
}if(bz<bv.height){var bA=qx.ui.layout.Util.computeFlexOffsets(by,bv.height,bz);

for(var j=0;j<bw.rowSpan;j++){var bx=bA[bs+j]?bA[bs+j].offset:0;
bq[bs+j].height+=bx;
}}if(br<bv.minHeight){var bA=qx.ui.layout.Util.computeFlexOffsets(by,bv.minHeight,br);

for(var j=0;j<bw.rowSpan;j++){var bx=bA[bs+j]?bA[bs+j].offset:0;
bq[bs+j].minHeight+=bx;
}}}},_fixWidthsColSpan:function(L){var P=this.getSpacingX();

for(var i=0,l=this.__hi.length;i<l;i++){var M=this.__hi[i];
var O=this.__hp(M);
var R=M.getLayoutProperties();
var N=R.column;
var X=P*(R.colSpan-1);
var Q=X;
var S={};
var U;

for(var j=0;j<R.colSpan;j++){var Y=R.column+j;
var W=L[Y];
var V=this.getColumnFlex(Y);
if(V>0){S[Y]={min:W.minWidth,value:W.width,max:W.maxWidth,flex:V};
}X+=W.width;
Q+=W.minWidth;
}if(X<O.width){var T=qx.ui.layout.Util.computeFlexOffsets(S,O.width,X);

for(var j=0;j<R.colSpan;j++){U=T[N+j]?T[N+j].offset:0;
L[N+j].width+=U;
}}if(Q<O.minWidth){var T=qx.ui.layout.Util.computeFlexOffsets(S,O.minWidth,Q);

for(var j=0;j<R.colSpan;j++){U=T[N+j]?T[N+j].offset:0;
L[N+j].minWidth+=U;
}}}},_getRowHeights:function(){if(this.__hm!=null){return this.__hm;
}var cY=[];
var cR=this.__hk;
var cQ=this.__hl;

for(var da=0;da<=cR;da++){var cS=0;
var cU=0;
var cT=0;

for(var cX=0;cX<=cQ;cX++){var cP=this.__hh[da][cX];

if(!cP){continue;
}var cV=cP.getLayoutProperties().rowSpan||0;

if(cV>1){continue;
}var cW=this.__hp(cP);

if(this.getRowFlex(da)>0){cS=Math.max(cS,cW.minHeight);
}else{cS=Math.max(cS,cW.height);
}cU=Math.max(cU,cW.height);
}var cS=Math.max(cS,this.getRowMinHeight(da));
var cT=this.getRowMaxHeight(da);

if(this.getRowHeight(da)!==null){var cU=this.getRowHeight(da);
}else{var cU=Math.max(cS,Math.min(cU,cT));
}cY[da]={minHeight:cS,height:cU,maxHeight:cT};
}
if(this.__hj.length>0){this._fixHeightsRowSpan(cY);
}this.__hm=cY;
return cY;
},_getColWidths:function(){if(this.__hn!=null){return this.__hn;
}var C=[];
var z=this.__hl;
var B=this.__hk;

for(var H=0;H<=z;H++){var F=0;
var E=0;
var A=Infinity;

for(var I=0;I<=B;I++){var w=this.__hh[I][H];

if(!w){continue;
}var D=w.getLayoutProperties().colSpan||0;

if(D>1){continue;
}var G=this.__hp(w);

if(this.getColumnFlex(H)>0){E=Math.max(E,G.minWidth);
}else{E=Math.max(E,G.width);
}F=Math.max(F,G.width);
}var E=Math.max(E,this.getColumnMinWidth(H));
var A=this.getColumnMaxWidth(H);

if(this.getColumnWidth(H)!==null){var F=this.getColumnWidth(H);
}else{var F=Math.max(E,Math.min(F,A));
}C[H]={minWidth:E,width:F,maxWidth:A};
}
if(this.__hi.length>0){this._fixWidthsColSpan(C);
}this.__hn=C;
return C;
},_getColumnFlexOffsets:function(cI){var cJ=this.getSizeHint();
var cN=cI-cJ.width;

if(cN==0){return {};
}var cL=this._getColWidths();
var cK={};

for(var i=0,l=cL.length;i<l;i++){var cO=cL[i];
var cM=this.getColumnFlex(i);

if((cM<=0)||(cO.width==cO.maxWidth&&cN>0)||(cO.width==cO.minWidth&&cN<0)){continue;
}cK[i]={min:cO.minWidth,value:cO.width,max:cO.maxWidth,flex:cM};
}return qx.ui.layout.Util.computeFlexOffsets(cK,cI,cJ.width);
},_getRowFlexOffsets:function(db){var dc=this.getSizeHint();
var df=db-dc.height;

if(df==0){return {};
}var dg=this._getRowHeights();
var dd={};

for(var i=0,l=dg.length;i<l;i++){var dh=dg[i];
var de=this.getRowFlex(i);

if((de<=0)||(dh.height==dh.maxHeight&&df>0)||(dh.height==dh.minHeight&&df<0)){continue;
}dd[i]={min:dh.minHeight,value:dh.height,max:dh.maxHeight,flex:de};
}return qx.ui.layout.Util.computeFlexOffsets(dd,db,dc.height);
},renderLayout:function(di,dj){if(this._invalidChildrenCache){this.__ho();
}var dy=qx.ui.layout.Util;
var dl=this.getSpacingX();
var ds=this.getSpacingY();
var dD=this._getColWidths();
var dC=this._getColumnFlexOffsets(di);
var dm=[];
var dF=this.__hl;
var dk=this.__hk;
var dE;

for(var dG=0;dG<=dF;dG++){dE=dC[dG]?dC[dG].offset:0;
dm[dG]=dD[dG].width+dE;
}var dv=this._getRowHeights();
var dx=this._getRowFlexOffsets(dj);
var dM=[];

for(var dt=0;dt<=dk;dt++){dE=dx[dt]?dx[dt].offset:0;
dM[dt]=dv[dt].height+dE;
}var dN=0;

for(var dG=0;dG<=dF;dG++){var top=0;

for(var dt=0;dt<=dk;dt++){var dA=this.__hh[dt][dG];
if(!dA){top+=dM[dt]+ds;
continue;
}var dn=dA.getLayoutProperties();
if(dn.row!==dt||dn.column!==dG){top+=dM[dt]+ds;
continue;
}var dL=dl*(dn.colSpan-1);

for(var i=0;i<dn.colSpan;i++){dL+=dm[dG+i];
}var dB=ds*(dn.rowSpan-1);

for(var i=0;i<dn.rowSpan;i++){dB+=dM[dt+i];
}var dp=dA.getSizeHint();
var dJ=dA.getMarginTop();
var dz=dA.getMarginLeft();
var dw=dA.getMarginBottom();
var dr=dA.getMarginRight();
var du=Math.max(dp.minWidth,Math.min(dL-dz-dr,dp.maxWidth));
var dK=Math.max(dp.minHeight,Math.min(dB-dJ-dw,dp.maxHeight));
var dH=this.getCellAlign(dt,dG);
var dI=dN+dy.computeHorizontalAlignOffset(dH.hAlign,du,dL,dz,dr);
var dq=top+dy.computeVerticalAlignOffset(dH.vAlign,dK,dB,dJ,dw);
dA.renderLayout(dI,dq,du,dK);
top+=dM[dt]+ds;
}dN+=dm[dG]+dl;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__hn=null;
this.__hm=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ho();
}var cx=this._getColWidths();
var cz=0,cA=0;

for(var i=0,l=cx.length;i<l;i++){var cB=cx[i];

if(this.getColumnFlex(i)>0){cz+=cB.minWidth;
}else{cz+=cB.width;
}cA+=cB.width;
}var cC=this._getRowHeights();
var cv=0,cy=0;

for(var i=0,l=cC.length;i<l;i++){var cD=cC[i];

if(this.getRowFlex(i)>0){cv+=cD.minHeight;
}else{cv+=cD.height;
}cy+=cD.height;
}var cu=this.getSpacingX()*(cx.length-1);
var ct=this.getSpacingY()*(cC.length-1);
var cw={minWidth:cz+cu,width:cA+cu,minHeight:cv+ct,height:cy+ct};
return cw;
}},destruct:function(){this.__hh=this.__hf=this.__hg=this.__hi=this.__hj=this.__hn=this.__hm=null;
}});
})();
(function(){var h="",g="<br",f=" &nbsp;",e="<br>",d=" ",c="\n",b="qx.bom.String";
qx.Class.define(b,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(q){return qx.util.StringEscape.escape(q,qx.bom.String.FROM_CHARCODE);
},unescape:function(p){return qx.util.StringEscape.unescape(p,qx.bom.String.TO_CHARCODE);
},fromText:function(a){return qx.bom.String.escape(a).replace(/(  |\n)/g,function(m){var n={"  ":f,"\n":e};
return n[m]||m;
});
},toText:function(i){return qx.bom.String.unescape(i.replace(/\s+|<([^>])+>/gi,function(o){if(o.indexOf(g)===0){return c;
}else if(o.length>0&&o.replace(/^\s*/,h).replace(/\s*$/,h)==h){return d;
}else{return h;
}}));
}},defer:function(j,k,l){j.FROM_CHARCODE=qx.lang.Object.invert(j.TO_CHARCODE);
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
(function(){var F="",E="Number",D="-",C="0",B="String",A="changeNumberFormat",z='(',y="g",x="Boolean",w="$",p="NaN",v='([0-9]{1,3}(?:',s='{0,1}[0-9]{3}){0,})',o='\\d+){0,1}',n="qx.util.format.NumberFormat",r="Infinity",q="^",t=".",m="-Infinity",u='([-+]){0,1}';
qx.Class.define(n,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(G){qx.core.Object.call(this);
this.__uz=G;
},statics:{getIntegerInstance:function(){var Q=qx.util.format.NumberFormat;

if(Q._integerInstance==null){Q._integerInstance=new Q();
Q._integerInstance.setMaximumFractionDigits(0);
}return Q._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:E,init:0},maximumIntegerDigits:{check:E,nullable:true},minimumFractionDigits:{check:E,init:0},maximumFractionDigits:{check:E,nullable:true},groupingUsed:{check:x,init:true},prefix:{check:B,init:F,event:A},postfix:{check:B,init:F,event:A}},members:{__uz:null,format:function(a){switch(a){case Infinity:return r;
case -Infinity:return m;
case NaN:return p;
}var e=(a<0);

if(e){a=-a;
}
if(this.getMaximumFractionDigits()!=null){var l=Math.pow(10,this.getMaximumFractionDigits());
a=Math.round(a*l)/l;
}var k=String(Math.floor(a)).length;
var b=F+a;
var h=b.substring(0,k);

while(h.length<this.getMinimumIntegerDigits()){h=C+h;
}
if(this.getMaximumIntegerDigits()!=null&&h.length>this.getMaximumIntegerDigits()){h=h.substring(h.length-this.getMaximumIntegerDigits());
}var g=b.substring(k+1);

while(g.length<this.getMinimumFractionDigits()){g+=C;
}
if(this.getMaximumFractionDigits()!=null&&g.length>this.getMaximumFractionDigits()){g=g.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var d=h;
h=F;
var j;

for(j=d.length;j>3;j-=3){h=F+qx.locale.Number.getGroupSeparator(this.__uz)+d.substring(j-3,j)+h;
}h=d.substring(0,j)+h;
}var f=this.getPrefix()?this.getPrefix():F;
var c=this.getPostfix()?this.getPostfix():F;
var i=f+(e?D:F)+h;

if(g.length>0){i+=F+qx.locale.Number.getDecimalSeparator(this.__uz)+g;
}i+=c;
return i;
},parse:function(H){var M=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__uz)+F);
var K=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__uz)+F);
var I=new RegExp(q+qx.lang.String.escapeRegexpChars(this.getPrefix())+u+v+M+s+z+K+o+qx.lang.String.escapeRegexpChars(this.getPostfix())+w);
var L=I.exec(H);

if(L==null){throw new Error("Number string '"+H+"' does not match the number format");
}var N=(L[1]==D);
var P=L[2];
var O=L[3];
P=P.replace(new RegExp(M,y),F);
var J=(N?D:F)+P;

if(O!=null&&O.length!=0){O=O.replace(new RegExp(K),F);
J+=t+O;
}return parseFloat(J);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(f){return qx.locale.Manager.getInstance().localize(d,[],f);
},getGroupSeparator:function(e){return qx.locale.Manager.getInstance().localize(a,[],e);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var bV="(\\d\\d?)",bU="format",bT="",bS="abbreviated",bR="wide",bQ="(",bP=")",bO="|",bN="stand-alone",bM="wildcard",bB="default",bA="literal",bz="'",by="hour",bx="(\\d\\d?\\d?)",bw="ms",bv="narrow",bu="-",bt="quoted_literal",bs='a',cd="HH:mm:ss",ce="+",cb="HHmmss",cc="long",bY='z',ca="0",bW="sec",bX="day",cf='Z',cg=" ",bF="min",bE="mm",bH="(\\d+)",bG="h",bJ="KK",bI='L',bL="Z",bK="(\\d\\d+)",bD="EEEE",bC="^",t=":",u='y',v="K",w="a",x="([\\+\\-]\\d\\d:?\\d\\d)",y="GMT",z="dd",A="qx.util.format.DateFormat",B="yyy",C="H",ck="YYYY",cj="y",ci="HH",ch="EE",co='h',cn="S",cm='s',cl='A',cq="yyyyyy",cp="kk",bc="ss",bd='H',ba='S',bb="MMMM",bg='c',bh="d",be="([a-zA-Z]+)",bf='k',X="m",Y='Y',K='D',J="yyyyy",M='K',L="hh",G="SSS",F="MM",I="yy",H="(\\d\\d\\d\\d\\d\\d+)",E="yyyy-MM-dd HH:mm:ss",D="(\\d\\d\\d\\d\\d+)",bm="short",bn='d',bo="unkown",bp='m',bi="(\\d\\d\\d\\d)",bj="(\\d\\d\\d+)",bk="k",bl='M',bq="(\\d\\d\\d\\d+)",br="SS",U="MMM",T="s",S="M",R='w',Q="EEE",P="$",O="?",N='E',W="z",V="yyyy";
qx.Class.define(A,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(db,dc){qx.core.Object.call(this);

if(!dc){this.__uA=qx.locale.Manager.getInstance().getLocale();
}else{this.__uA=dc;
}
if(db!=null){this.__uB=db.toString();
}else{this.__uB=qx.locale.Date.getDateFormat(cc,this.__uA)+cg+qx.locale.Date.getDateTimeFormat(cb,cd,this.__uA);
}},statics:{getDateTimeInstance:function(){var cs=qx.util.format.DateFormat;
var cr=qx.locale.Date.getDateFormat(cc)+cg+qx.locale.Date.getDateTimeFormat(cb,cd);

if(cs._dateInstance==null||cs._dateInstance.__uB!=cr){cs._dateTimeInstance=new cs();
}return cs._dateTimeInstance;
},getDateInstance:function(){var dQ=qx.util.format.DateFormat;
var dP=qx.locale.Date.getDateFormat(bm)+bT;

if(dQ._dateInstance==null||dQ._dateInstance.__uB!=dP){dQ._dateInstance=new dQ(dP);
}return dQ._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:E,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__uA:null,__uB:null,__uC:null,__uD:null,__uE:null,__uF:function(dJ,dK){var dL=bT+dJ;

while(dL.length<dK){dL=ca+dL;
}return dL;
},__uG:function(cT){var cU=new Date(cT.getTime());
var cV=cU.getDate();

while(cU.getMonth()!=0){cU.setDate(-1);
cV+=cU.getDate()+1;
}return cV;
},__uH:function(cS){return new Date(cS.getTime()+(3-((cS.getDay()+6)%7))*86400000);
},__uI:function(cO){var cQ=this.__uH(cO);
var cR=cQ.getFullYear();
var cP=this.__uH(new Date(cR,0,4));
return Math.floor(1.5+(cQ.getTime()-cP.getTime())/86400000/7);
},format:function(dh){if(dh==null){return null;
}var dn=qx.util.format.DateFormat;
var dp=this.__uA;
var dz=dh.getFullYear();
var dt=dh.getMonth();
var dB=dh.getDate();
var di=dh.getDay();
var du=dh.getHours();
var dq=dh.getMinutes();
var dv=dh.getSeconds();
var dx=dh.getMilliseconds();
var dA=dh.getTimezoneOffset();
var dl=dA>0?1:-1;
var dj=Math.floor(Math.abs(dA)/60);
var dr=Math.abs(dA)%60;
this.__uJ();
var dy=bT;

for(var i=0;i<this.__uE.length;i++){var dw=this.__uE[i];

if(dw.type==bA){dy+=dw.text;
}else{var dm=dw.character;
var ds=dw.size;
var dk=O;

switch(dm){case u:case Y:if(ds==2){dk=this.__uF(dz%100,2);
}else{dk=dz+bT;

if(ds>dk.length){for(var i=dk.length;i<ds;i++){dk=ca+dk;
}}}break;
case K:dk=this.__uF(this.__uG(dh),ds);
break;
case bn:dk=this.__uF(dB,ds);
break;
case R:dk=this.__uF(this.__uI(dh),ds);
break;
case N:if(ds==2){dk=qx.locale.Date.getDayName(bv,di,dp,bU);
}else if(ds==3){dk=qx.locale.Date.getDayName(bS,di,dp,bU);
}else if(ds==4){dk=qx.locale.Date.getDayName(bR,di,dp,bU);
}break;
case bg:if(ds==2){dk=qx.locale.Date.getDayName(bv,di,dp,bN);
}else if(ds==3){dk=qx.locale.Date.getDayName(bS,di,dp,bN);
}else if(ds==4){dk=qx.locale.Date.getDayName(bR,di,dp,bN);
}break;
case bl:if(ds==1||ds==2){dk=this.__uF(dt+1,ds);
}else if(ds==3){dk=qx.locale.Date.getMonthName(bS,dt,dp,bU);
}else if(ds==4){dk=qx.locale.Date.getMonthName(bR,dt,dp,bU);
}break;
case bI:if(ds==1||ds==2){dk=this.__uF(dt+1,ds);
}else if(ds==3){dk=qx.locale.Date.getMonthName(bS,dt,dp,bN);
}else if(ds==4){dk=qx.locale.Date.getMonthName(bR,dt,dp,bN);
}break;
case bs:dk=(du<12)?qx.locale.Date.getAmMarker(dp):qx.locale.Date.getPmMarker(dp);
break;
case bd:dk=this.__uF(du,ds);
break;
case bf:dk=this.__uF((du==0)?24:du,ds);
break;
case M:dk=this.__uF(du%12,ds);
break;
case co:dk=this.__uF(((du%12)==0)?12:(du%12),ds);
break;
case bp:dk=this.__uF(dq,ds);
break;
case cm:dk=this.__uF(dv,ds);
break;
case ba:dk=this.__uF(dx,ds);
break;
case bY:if(ds==1){dk=y+((dl>0)?bu:ce)+this.__uF(Math.abs(dj))+t+this.__uF(dr,2);
}else if(ds==2){dk=dn.MEDIUM_TIMEZONE_NAMES[dj];
}else if(ds==3){dk=dn.FULL_TIMEZONE_NAMES[dj];
}break;
case cf:dk=((dl>0)?bu:ce)+this.__uF(Math.abs(dj),2)+this.__uF(dr,2);
break;
}dy+=dk;
}}return dy;
},parse:function(dC){this.__uK();
var dI=this.__uC.regex.exec(dC);

if(dI==null){throw new Error("Date string '"+dC+"' does not match the date format: "+this.__uB);
}var dD={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var dE=1;

for(var i=0;i<this.__uC.usedRules.length;i++){var dG=this.__uC.usedRules[i];
var dF=dI[dE];

if(dG.field!=null){dD[dG.field]=parseInt(dF,10);
}else{dG.manipulator(dD,dF);
}dE+=(dG.groups==null)?1:dG.groups;
}var dH=new Date(dD.year,dD.month,dD.day,(dD.ispm)?(dD.hour+12):dD.hour,dD.min,dD.sec,dD.ms);

if(dD.month!=dH.getMonth()||dD.year!=dH.getFullYear()){throw new Error("Error parsing date '"+dC+"': the value for day or month is too large");
}return dH;
},__uJ:function(){if(this.__uE!=null){return;
}this.__uE=[];
var dX;
var dV=0;
var ea=bT;
var dT=this.__uB;
var dW=bB;
var i=0;

while(i<dT.length){var dY=dT.charAt(i);

switch(dW){case bt:if(dY==bz){if(i+1>=dT.length){i++;
break;
}var dU=dT.charAt(i+1);

if(dU==bz){ea+=dY;
i++;
}else{i++;
dW=bo;
}}else{ea+=dY;
i++;
}break;
case bM:if(dY==dX){dV++;
i++;
}else{this.__uE.push({type:bM,character:dX,size:dV});
dX=null;
dV=0;
dW=bB;
}break;
default:if((dY>=bs&&dY<=bY)||(dY>=cl&&dY<=cf)){dX=dY;
dW=bM;
}else if(dY==bz){if(i+1>=dT.length){ea+=dY;
i++;
break;
}var dU=dT.charAt(i+1);

if(dU==bz){ea+=dY;
i++;
}i++;
dW=bt;
}else{dW=bB;
}
if(dW!=bB){if(ea.length>0){this.__uE.push({type:bA,text:ea});
ea=bT;
}}else{ea+=dY;
i++;
}break;
}}if(dX!=null){this.__uE.push({type:bM,character:dX,size:dV});
}else if(ea.length>0){this.__uE.push({type:bA,text:ea});
}},__uK:function(){if(this.__uC!=null){return ;
}var f=this.__uB;
this.__uL();
this.__uJ();
var m=[];
var h=bC;

for(var d=0;d<this.__uE.length;d++){var n=this.__uE[d];

if(n.type==bA){h+=qx.lang.String.escapeRegexpChars(n.text);
}else{var e=n.character;
var j=n.size;
var g;

for(var o=0;o<this.__uD.length;o++){var k=this.__uD[o];

if(e==k.pattern.charAt(0)&&j==k.pattern.length){g=k;
break;
}}if(g==null){var l=bT;

for(var i=0;i<j;i++){l+=e;
}throw new Error("Malformed date format: "+f+". Wildcard "+l+" is not supported");
}else{m.push(g);
h+=g.regex;
}}}h+=P;
var c;

try{c=new RegExp(h);
}catch(dO){throw new Error("Malformed date format: "+f);
}this.__uC={regex:c,"usedRules":m,pattern:h};
},__uL:function(){var cy=qx.util.format.DateFormat;
var cE=qx.lang.String;

if(this.__uD!=null){return ;
}var cz=this.__uD=[];
var cL=function(r,s){s=parseInt(s,10);

if(s<cy.ASSUME_YEAR_2000_THRESHOLD){s+=2000;
}else if(s<100){s+=1900;
}r.year=s;
};
var cF=function(dd,de){dd.month=parseInt(de,10)-1;
};
var cC=function(df,dg){df.ispm=(dg==cy.PM_MARKER);
};
var cB=function(a,b){a.hour=parseInt(b,10)%24;
};
var cA=function(cW,cX){cW.hour=parseInt(cX,10)%12;
};
var cI=function(dR,dS){return;
};
var cG=qx.locale.Date.getMonthNames(bS,this.__uA,bU);

for(var i=0;i<cG.length;i++){cG[i]=cE.escapeRegexpChars(cG[i].toString());
}var cH=function(p,q){q=cE.escapeRegexpChars(q);
p.month=cG.indexOf(q);
};
var cv=qx.locale.Date.getMonthNames(bR,this.__uA,bU);

for(var i=0;i<cv.length;i++){cv[i]=cE.escapeRegexpChars(cv[i].toString());
}var cu=function(cY,da){da=cE.escapeRegexpChars(da);
cY.month=cv.indexOf(da);
};
var cx=qx.locale.Date.getDayNames(bv,this.__uA,bU);

for(var i=0;i<cx.length;i++){cx[i]=cE.escapeRegexpChars(cx[i].toString());
}var ct=function(dM,dN){dN=cE.escapeRegexpChars(dN);
dM.month=cx.indexOf(dN);
};
var cJ=qx.locale.Date.getDayNames(bS,this.__uA,bU);

for(var i=0;i<cJ.length;i++){cJ[i]=cE.escapeRegexpChars(cJ[i].toString());
}var cD=function(cM,cN){cN=cE.escapeRegexpChars(cN);
cM.month=cJ.indexOf(cN);
};
var cK=qx.locale.Date.getDayNames(bR,this.__uA,bU);

for(var i=0;i<cK.length;i++){cK[i]=cE.escapeRegexpChars(cK[i].toString());
}var cw=function(eb,ec){ec=cE.escapeRegexpChars(ec);
eb.month=cK.indexOf(ec);
};
cz.push({pattern:ck,regex:bi,manipulator:cL});
cz.push({pattern:cj,regex:bH,manipulator:cL});
cz.push({pattern:I,regex:bK,manipulator:cL});
cz.push({pattern:B,regex:bj,manipulator:cL});
cz.push({pattern:V,regex:bq,manipulator:cL});
cz.push({pattern:J,regex:D,manipulator:cL});
cz.push({pattern:cq,regex:H,manipulator:cL});
cz.push({pattern:S,regex:bV,manipulator:cF});
cz.push({pattern:F,regex:bV,manipulator:cF});
cz.push({pattern:U,regex:bQ+cG.join(bO)+bP,manipulator:cH});
cz.push({pattern:bb,regex:bQ+cv.join(bO)+bP,manipulator:cu});
cz.push({pattern:z,regex:bV,field:bX});
cz.push({pattern:bh,regex:bV,field:bX});
cz.push({pattern:ch,regex:bQ+cx.join(bO)+bP,manipulator:ct});
cz.push({pattern:Q,regex:bQ+cJ.join(bO)+bP,manipulator:cD});
cz.push({pattern:bD,regex:bQ+cK.join(bO)+bP,manipulator:cw});
cz.push({pattern:w,regex:bQ+cy.AM_MARKER+bO+cy.PM_MARKER+bP,manipulator:cC});
cz.push({pattern:ci,regex:bV,field:by});
cz.push({pattern:C,regex:bV,field:by});
cz.push({pattern:cp,regex:bV,manipulator:cB});
cz.push({pattern:bk,regex:bV,manipulator:cB});
cz.push({pattern:bJ,regex:bV,field:by});
cz.push({pattern:v,regex:bV,field:by});
cz.push({pattern:L,regex:bV,manipulator:cA});
cz.push({pattern:bG,regex:bV,manipulator:cA});
cz.push({pattern:bE,regex:bV,field:bF});
cz.push({pattern:X,regex:bV,field:bF});
cz.push({pattern:bc,regex:bV,field:bW});
cz.push({pattern:T,regex:bV,field:bW});
cz.push({pattern:G,regex:bx,field:bw});
cz.push({pattern:br,regex:bx,field:bw});
cz.push({pattern:cn,regex:bx,field:bw});
cz.push({pattern:bL,regex:x,manipulator:cI});
cz.push({pattern:W,regex:be,manipulator:cI});
}},destruct:function(){this.__uE=this.__uC=this.__uD=null;
}});
})();
(function(){var o="_",n="format",m="thu",l="sat",k="cldr_day_",j="cldr_month_",h="wed",g="fri",f="tue",e="mon",F="sun",E="short",D="HH:mm",C="HHmmsszz",B="HHmm",A="HHmmss",z="cldr_date_format_",y="HH:mm:ss zz",x="full",w="cldr_pm",u="long",v="medium",s="cldr_am",t="qx.locale.Date",q="cldr_date_time_format_",r="cldr_time_format_",p="HH:mm:ss";
qx.Class.define(t,{statics:{__uM:qx.locale.Manager.getInstance(),getAmMarker:function(bb){return this.__uM.localize(s,[],bb);
},getPmMarker:function(L){return this.__uM.localize(w,[],L);
},getDayNames:function(length,bo,bp){var bp=bp?bp:n;
{};
var br=[F,e,f,h,m,g,l];
var bs=[];

for(var i=0;i<br.length;i++){var bq=k+bp+o+length+o+br[i];
bs.push(this.__uM.localize(bq,[],bo));
}return bs;
},getDayName:function(length,M,N,O){var O=O?O:n;
{};
var Q=[F,e,f,h,m,g,l];
var P=k+O+o+length+o+Q[M];
return this.__uM.localize(P,[],N);
},getMonthNames:function(length,bk,bl){var bl=bl?bl:n;
{};
var bn=[];

for(var i=0;i<12;i++){var bm=j+bl+o+length+o+(i+1);
bn.push(this.__uM.localize(bm,[],bk));
}return bn;
},getMonthName:function(length,a,b,c){var c=c?c:n;
{};
var d=j+c+o+length+o+(a+1);
return this.__uM.localize(d,[],b);
},getDateFormat:function(X,Y){{};
var ba=z+X;
return this.__uM.localize(ba,[],Y);
},getDateTimeFormat:function(G,H,I){var K=q+G;
var J=this.__uM.localize(K,[],I);

if(J==K){J=H;
}return J;
},getTimeFormat:function(bg,bh){{};
var bj=r+bg;
var bi=this.__uM.localize(bj,[],bh);

if(bi!=bj){return bi;
}
switch(bg){case E:case v:return qx.locale.Date.getDateTimeFormat(B,D);
case u:return qx.locale.Date.getDateTimeFormat(A,p);
case x:return qx.locale.Date.getDateTimeFormat(C,y);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(R){var S={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var T=qx.locale.Date._getTerritory(R);
return S[T]!=null?S[T]:1;
},getWeekendStart:function(bv){var bx={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var bw=qx.locale.Date._getTerritory(bv);
return bx[bw]!=null?bx[bw]:6;
},getWeekendEnd:function(U){var V={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var W=qx.locale.Date._getTerritory(U);
return V[W]!=null?V[W]:0;
},isWeekend:function(bc,bd){var bf=qx.locale.Date.getWeekendStart(bd);
var be=qx.locale.Date.getWeekendEnd(bd);

if(be>bf){return ((bc>=bf)&&(bc<=be));
}else{return ((bc>=bf)||(bc<=be));
}},_getTerritory:function(bt){if(bt){var bu=bt.split(o)[1]||bt;
}else{bu=this.__uM.getTerritory()||this.__uM.getLanguage();
}return bu.toUpperCase();
}}});
})();
(function(){var i="Boolean",h="invalid",g="qx.ui.form.MForm",f="_applyValid",e="",d="changeRequired",c="changeValid",b="changeInvalidMessage",a="String";
qx.Mixin.define(g,{properties:{valid:{check:i,init:true,apply:f,event:c},required:{check:i,init:false,event:d},invalidMessage:{check:a,init:e,event:b}},members:{_applyValid:function(j,k){j?this.removeState(h):this.addState(h);
}}});
})();
(function(){var n="showingPlaceholder",m="color",l="",k="none",j="qx.dynlocale",i="Boolean",h="qx.client",g="qx.event.type.Data",f="readonly",d="input",bc="focusin",bb="visibility",ba="focusout",Y="changeLocale",X="hidden",W="on",V="absolute",U="readOnly",T="text",S="_applyTextAlign",u="px",v="RegExp",s=")",t="syncAppearance",q="changeValue",r="A",o="change",p="textAlign",y="focused",z="center",G="visible",E="disabled",K="url(",I="off",O="String",M="resize",B="qx.ui.form.AbstractField",R="transparent",Q="spellcheck",P="false",A="right",C="PositiveInteger",D="mshtml",F="abstract",H="block",J="webkit",L="_applyReadOnly",N="_applyPlaceholder",w="left",x="qx/static/blank.gif";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:F,construct:function(bd){qx.ui.core.Widget.call(this);

if(bd!=null){this.setValue(bd);
}this.getContentElement().addListener(o,this._onChangeContent,this);
this.addListener(t,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(j,W)){qx.locale.Manager.getInstance().addListener(Y,this._onChangeLocale,this);
}},events:{"input":g,"changeValue":g},properties:{textAlign:{check:[w,z,A],nullable:true,themeable:true,apply:S},readOnly:{check:i,apply:L,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:C,init:Infinity},liveUpdate:{check:i,init:false},placeholder:{check:O,nullable:true,apply:N},filter:{check:v,nullable:true,init:null}},members:{__q:true,__r:null,__s:null,__t:null,getFocusElement:function(){var bu=this.getContentElement();

if(bu){return bu;
}},_createInputElement:function(){return new qx.html.Input(T);
},renderLayout:function(bj,top,bk,bl){var bm=this._updateInsets;
var bq=qx.ui.core.Widget.prototype.renderLayout.call(this,bj,top,bk,bl);
if(!bq){return;
}var bo=bq.size||bm;
var br=u;

if(bo||bq.local||bq.margin){var bn=this.getInsets();
var innerWidth=bk-bn.left-bn.right;
var innerHeight=bl-bn.top-bn.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bp=this.getContentElement();

if(bm){this.__w().setStyles({"left":bn.left+br,"top":bn.top+br});
}
if(bo){this.__w().setStyles({"width":innerWidth+br,"height":innerHeight+br});
bp.setStyles({"width":innerWidth+br,"height":innerHeight+br});
}},_createContentElement:function(){var bL=this._createInputElement();
bL.setStyles({"border":k,"padding":0,"margin":0,"display":H,"background":R,"outline":k,"appearance":k,"position":V,"autoComplete":I});
bL.setSelectable(this.getSelectable());
bL.setEnabled(this.getEnabled());
bL.addListener(d,this._onHtmlInput,this);
bL.setAttribute(Q,P);
if(qx.core.Variant.isSet(h,J)){bL.setStyle(M,k);
}if(qx.core.Variant.isSet(h,D)){bL.setStyles({backgroundImage:K+qx.util.ResourceManager.getInstance().toUri(x)+s});
}return bL;
},_applyEnabled:function(bJ,bK){qx.ui.core.Widget.prototype._applyEnabled.call(this,bJ,bK);
this.getContentElement().setEnabled(bJ);

if(bJ){this._showPlaceholder();
}else{this._removePlaceholder();
}},__u:{width:16,height:16},_getContentHint:function(){return {width:this.__u.width*10,height:this.__u.height||16};
},_applyFont:function(bz,bA){var bB;

if(bz){var bC=qx.theme.manager.Font.getInstance().resolve(bz);
bB=bC.getStyles();
}else{bB=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bB);
this.__w().setStyles(bB);
if(bz){this.__u=qx.bom.Label.getTextSize(r,bB);
}else{delete this.__u;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bM,bN){if(bM){this.getContentElement().setStyle(m,qx.theme.manager.Color.getInstance().resolve(bM));
this.__w().setStyle(m,qx.theme.manager.Color.getInstance().resolve(bM));
}else{this.getContentElement().removeStyle(m);
this.__w().removeStyle(m);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__u;
},_onHtmlInput:function(e){var bh=e.getData();
var bg=true;
this.__q=false;
if(this.getFilter()!=null){var bi=l;
var be=bh.search(this.getFilter());
var bf=bh;

while(be>=0){bi=bi+(bf.charAt(be));
bf=bf.substring(be+1,bf.length);
be=bf.search(this.getFilter());
}
if(bi!=bh){bg=false;
bh=bi;
this.getContentElement().setValue(bh);
}}if(bh.length>this.getMaxLength()){var bg=false;
this.getContentElement().setValue(bh.substr(0,this.getMaxLength()));
}if(bg){this.fireDataEvent(d,bh,this.__t);
this.__t=bh;
if(this.getLiveUpdate()){this.__v(bh);
}}},__v:function(a){if(this.__s!=a){this.fireNonBubblingEvent(q,qx.event.type.Data,[a,this.__s]);
this.__s=a;
}},setValue:function(bD){if(bD===null){if(this.__q){return bD;
}bD=l;
this.__q=true;
}else{this.__q=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bD)){var bF=this.getContentElement();

if(bD.length>this.getMaxLength()){bD=bD.substr(0,this.getMaxLength());
}
if(bF.getValue()!=bD){var bG=bF.getValue();
bF.setValue(bD);
var bE=this.__q?null:bD;
this.__s=bG;
this.__v(bE);
}this._showPlaceholder();
return bD;
}throw new Error("Invalid value type: "+bD);
},getValue:function(){var by=this.getContentElement().getValue();
return this.__q?null:by;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__q=e.getData()===null;
this.__v(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bs,bt){this.getContentElement().setTextSelection(bs,bt);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var c=this.getValue()||l;
var b=this.getPlaceholder();

if(b!=null&&c==l&&!this.hasState(y)&&!this.hasState(E)){if(this.hasState(n)){this._syncPlaceholder();
}else{this.addState(n);
}}},_removePlaceholder:function(){if(this.hasState(n)){this.__w().setStyle(bb,X);
this.removeState(n);
}},_syncPlaceholder:function(){if(this.hasState(n)){this.__w().setStyle(bb,G);
}},__w:function(){if(this.__r==null){this.__r=new qx.html.Label();
this.__r.setStyles({"visibility":X,"zIndex":6,"position":V});
this.getContainerElement().add(this.__r);
}return this.__r;
},_onChangeLocale:qx.core.Variant.select(j,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bH,bI){this.__w().setValue(bH);

if(bH!=null){this.addListener(bc,this._removePlaceholder,this);
this.addListener(ba,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bc,this._removePlaceholder,this);
this.removeListener(ba,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(bO,bP){this.getContentElement().setStyle(p,bO);
},_applyReadOnly:function(bv,bw){var bx=this.getContentElement();
bx.setAttribute(U,bv);

if(bv){this.addState(f);
this.setFocusable(false);
}else{this.removeState(f);
this.setFocusable(true);
}}},destruct:function(){this.__r=null;

if(qx.core.Variant.isSet(j,W)){qx.locale.Manager.getInstance().removeListener(Y,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var t="none",s="wrap",r="value",q="qx.client",p="textarea",o="off",n="on",m="qxSelectable",l="",k="webkit",g="input",j="qx.html.Input",i="select",f="disabled",e="read-only",h="userSelect";
qx.Class.define(j,{extend:qx.html.Element,construct:function(a,b,c){if(a===i||a===p){var d=a;
}else{d=g;
}qx.html.Element.call(this,d,b,c);
this.__c=a;
},members:{__c:null,__d:null,__e:null,_createDomElement:function(){return qx.bom.Input.create(this.__c);
},_applyProperty:function(name,x){qx.html.Element.prototype._applyProperty.call(this,name,x);
var y=this.getDomElement();

if(name===r){qx.bom.Input.setValue(y,x);
}else if(name===s){qx.bom.Input.setWrap(y,x);
}},setEnabled:qx.core.Variant.select(q,{"webkit":function(z){this.__e=z;

if(!z){this.setStyles({"userModify":e,"userSelect":t});
}else{this.setStyles({"userModify":null,"userSelect":this.__d?null:t});
}},"default":function(B){this.setAttribute(f,B===false);
}}),setSelectable:qx.core.Variant.select(q,{"webkit":function(u){this.__d=u;
this.setAttribute(m,u?n:o);
if(qx.core.Variant.isSet(q,k)){var v=this.__e?u?null:t:t;
this.setStyle(h,v);
}},"default":function(w){this.setAttribute(m,w?n:o);
}}),setValue:function(C){var D=this.getDomElement();

if(D){if(D.value!=C){qx.bom.Input.setValue(D,C);
}}else{this._setProperty(r,C);
}return this;
},getValue:function(){var E=this.getDomElement();

if(E){return qx.bom.Input.getValue(E);
}return this._getProperty(r)||l;
},setWrap:function(A){if(this.__c===p){this._setProperty(s,A);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__c===p){return this._getProperty(s);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var w="change",v="input",u="qx.client",t="text",s="password",r="checkbox",q="radio",p="textarea",n="keypress",m="opera",d="propertychange",k="blur",h="keydown",c="keyup",b="select-multiple",g="checked",f="value",j="select",a="qx.event.handler.Input";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(u,m)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__g:false,__h:null,__i:null,canHandleEvent:function(L,M){var N=L.tagName.toLowerCase();

if(M===v&&(N===v||N===p)){return true;
}
if(M===w&&(N===v||N===p||N===j)){return true;
}return false;
},registerEvent:qx.core.Variant.select(u,{"mshtml":function(Y,ba,bb){if(!Y.__j){var bc=Y.tagName.toLowerCase();
var bd=Y.type;

if(bd===t||bd===s||bc===p||bd===r||bd===q){qx.bom.Event.addNativeListener(Y,d,this._onPropertyWrapper);
}
if(bd!==r&&bd!==q){qx.bom.Event.addNativeListener(Y,w,this._onChangeValueWrapper);
}
if(bd===t||bd===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,Y);
qx.bom.Event.addNativeListener(Y,n,this._onKeyPressWrapped);
}Y.__j=true;
}},"default":function(O,P,Q){if(P===v){this.__k(O);
}else if(P===w){if(O.type===q||O.type===r){qx.bom.Event.addNativeListener(O,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(O,w,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(u,m)){if(O.type===t||O.type===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,O);
qx.bom.Event.addNativeListener(O,n,this._onKeyPressWrapped);
}}}}}),__k:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(S){var T=S.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&T==p){qx.bom.Event.addNativeListener(S,n,this._onInputWrapper);
}qx.bom.Event.addNativeListener(S,v,this._onInputWrapper);
},"opera":function(x){qx.bom.Event.addNativeListener(x,c,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(x,h,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(x,k,this._onBlurWrapper);
qx.bom.Event.addNativeListener(x,v,this._onInputWrapper);
},"default":function(A){qx.bom.Event.addNativeListener(A,v,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(u,{"mshtml":function(C,D){if(C.__j){var E=C.tagName.toLowerCase();
var F=C.type;

if(F===t||F===s||E===p||F===r||F===q){qx.bom.Event.removeNativeListener(C,d,this._onPropertyWrapper);
}
if(F!==r&&F!==q){qx.bom.Event.removeNativeListener(C,w,this._onChangeValueWrapper);
}
if(F===t||F===s){qx.bom.Event.removeNativeListener(C,n,this._onKeyPressWrapped);
}
try{delete C.__j;
}catch(z){C.__j=null;
}}},"default":function(H,I){if(I===v){this.__k(H);
}else if(I===w){if(H.type===q||H.type===r){qx.bom.Event.removeNativeListener(H,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(H,w,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(u,m)){if(H.type===t||H.type===s){qx.bom.Event.removeNativeListener(H,n,this._onKeyPressWrapped);
}}}}),__l:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(W){var X=W.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&X==p){qx.bom.Event.removeNativeListener(W,n,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(W,v,this._onInputWrapper);
},"opera":function(R){qx.bom.Event.removeNativeListener(R,c,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(R,h,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(R,k,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(R,v,this._onInputWrapper);
},"default":function(V){qx.bom.Event.removeNativeListener(V,v,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(u,{"mshtml|opera":function(e,U){if(e.keyCode===13){if(U.value!==this.__i){this.__i=U.value;
qx.event.Registration.fireEvent(U,w,qx.event.type.Data,[U.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__g=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__g=false;
}},"default":null}),_onBlur:qx.core.Variant.select(u,{"opera":function(e){if(this.__h){window.clearTimeout(this.__h);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var G=e.target;
if(!this.__g){if(qx.core.Variant.isSet(u,m)){this.__h=window.setTimeout(function(){qx.event.Registration.fireEvent(G,v,qx.event.type.Data,[G.value]);
},0);
}else{qx.event.Registration.fireEvent(G,v,qx.event.type.Data,[G.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var bf=e.target||e.srcElement;
var be=bf.value;

if(bf.type===b){var be=[];

for(var i=0,o=bf.options,l=o.length;i<l;i++){if(o[i].selected){be.push(o[i].value);
}}}qx.event.Registration.fireEvent(bf,w,qx.event.type.Data,[be]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var y=e.target;

if(y.type===q){if(y.checked){qx.event.Registration.fireEvent(y,w,qx.event.type.Data,[y.value]);
}}else{qx.event.Registration.fireEvent(y,w,qx.event.type.Data,[y.checked]);
}}),_onProperty:qx.core.Variant.select(u,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var J=e.target||e.srcElement;
var K=e.propertyName;

if(K===f&&(J.type===t||J.type===s||J.tagName.toLowerCase()===p)){if(!J.$$inValueSet){qx.event.Registration.fireEvent(J,v,qx.event.type.Data,[J.value]);
}}else if(K===g){if(J.type===r){qx.event.Registration.fireEvent(J,w,qx.event.type.Data,[J.checked]);
}else if(J.checked){qx.event.Registration.fireEvent(J,w,qx.event.type.Data,[J.value]);
}}}),"default":function(){}})},defer:function(B){qx.event.Registration.addHandler(B);
}});
})();
(function(){var v="",u="select",t="soft",s="off",r="qx.client",q="wrap",p="text",o="mshtml",n="number",m="checkbox",d="select-one",k="input",g="option",c="value",b="radio",f="qx.bom.Input",e="nowrap",h="textarea",a="auto",j="normal";
qx.Class.define(f,{statics:{__f:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(R,S,T){{};
var S=S?qx.lang.Object.clone(S):{};
var U;

if(R===h||R===u){U=R;
}else{U=k;
S.type=R;
}return qx.bom.Element.create(U,S,T);
},setValue:function(I,J){var O=I.nodeName.toLowerCase();
var L=I.type;
var Array=qx.lang.Array;
var P=qx.lang.Type;

if(typeof J===n){J+=v;
}
if((L===m||L===b)){if(P.isArray(J)){I.checked=Array.contains(J,I.value);
}else{I.checked=I.value==J;
}}else if(O===u){var K=P.isArray(J);
var Q=I.options;
var M,N;

for(var i=0,l=Q.length;i<l;i++){M=Q[i];
N=M.getAttribute(c);

if(N==null){N=M.text;
}M.selected=K?Array.contains(J,N):J==N;
}
if(K&&J.length==0){I.selectedIndex=-1;
}}else if(L===p&&qx.core.Variant.isSet(r,o)){I.$$inValueSet=true;
I.value=J;
I.$$inValueSet=null;
}else{I.value=J;
}},getValue:function(y){var E=y.nodeName.toLowerCase();

if(E===g){return (y.attributes.value||{}).specified?y.value:y.text;
}
if(E===u){var z=y.selectedIndex;
if(z<0){return null;
}var F=[];
var H=y.options;
var G=y.type==d;
var D=qx.bom.Input;
var C;
for(var i=G?z:0,B=G?z+1:H.length;i<B;i++){var A=H[i];

if(A.selected){C=D.getValue(A);
if(G){return C;
}F.push(C);
}}return F;
}else{return (y.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Variant.select(r,{"mshtml":function(ba,bb){ba.wrap=bb?t:s;
},"gecko|webkit":function(V,W){var Y=W?t:s;
var X=W?v:a;
V.setAttribute(q,Y);
V.style.overflow=X;
},"default":function(w,x){w.style.whiteSpace=x?j:e;
}})}});
})();
(function(){var bN="",bM="Number",bL='</div>',bK='" ',bJ="paneUpdated",bI='<div>',bH="</div>",bG="overflow: hidden;",bF="qx.event.type.Data",bE="paneReloadsData",cg="div",cf='style="',ce="_applyMaxCacheLines",cd="qx.ui.table.pane.Pane",cc="width: 100%;",cb="qx.event.type.Event",ca="_applyVisibleRowCount",bY='>',bX="line-height: ",bW="appear",bU='class="',bV="width:100%;",bS="px;",bT='<div ',bQ="'>",bR="_applyFirstVisibleRow",bO="<div style='",bP=";position:relative;";
qx.Class.define(cd,{extend:qx.ui.core.Widget,construct:function(bj){qx.ui.core.Widget.call(this);
this.__Bh=bj;
this.__Bi=0;
this.__Bj=0;
this.__Bk=[];
},events:{"paneReloadsData":bF,"paneUpdated":cb},properties:{firstVisibleRow:{check:bM,init:0,apply:bR},visibleRowCount:{check:bM,init:0,apply:ca},maxCacheLines:{check:bM,init:1000,apply:ce},allowShrinkX:{refine:true,init:false}},members:{__Bj:null,__Bi:null,__Bh:null,__Bl:null,__Bm:null,__Bn:null,__Bk:null,__Bo:0,_applyFirstVisibleRow:function(bq,br){this.updateContent(false,bq-br);
},_applyVisibleRowCount:function(bf,bg){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__Bh;
},getTable:function(){return this.__Bh.getTable();
},setFocusedCell:function(ch,ci,cj){if(ch!=this.__Bn||ci!=this.__Bm){var ck=this.__Bm;
this.__Bn=ch;
this.__Bm=ci;
if(ci!=ck&&!cj){if(ck!==null){this.updateContent(false,null,ck,true);
}
if(ci!==null){this.updateContent(false,null,ci,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(bh,bi){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(bk,bl,bm,bn){this.__Bp();
var bp=this.getFirstVisibleRow();
var bo=this.getVisibleRowCount();

if(bl==-1||bl>=bp&&bk<bp+bo){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(cw,cx){if(this.__Bo>=cw&&cw!==-1){this.__Bp();
}},__Bp:function(){this.__Bk=[];
this.__Bo=0;
},__Bq:function(F,G,H){if(!G&&!H&&this.__Bk[F]){return this.__Bk[F];
}else{return null;
}},__Br:function(I,J,K,L){var M=this.getMaxCacheLines();

if(!K&&!L&&!this.__Bk[I]&&M>0){this._applyMaxCacheLines(M);
this.__Bk[I]=J;
this.__Bo+=1;
}},updateContent:function(bb,bc,bd,be){if(bb){this.__Bp();
}if(bc&&Math.abs(bc)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(bc);
}else if(be&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(bd);
}else{this._updateAllRows();
}},_updateRowStyles:function(cl){var cp=this.getContentElement().getDomElement();

if(!cp||!cp.firstChild){this._updateAllRows();
return;
}var ct=this.getTable();
var cn=ct.getSelectionModel();
var cq=ct.getTableModel();
var cu=ct.getDataRowRenderer();
var co=cp.firstChild.childNodes;
var cs={table:ct};
var cv=this.getFirstVisibleRow();
var y=0;
var cm=co.length;

if(cl!=null){var cr=cl-cv;

if(cr>=0&&cr<cm){cv=cl;
y=cr;
cm=cr+1;
}else{return;
}}
for(;y<cm;y++,cv++){cs.row=cv;
cs.selected=cn.isSelectedIndex(cv);
cs.focusedRow=(this.__Bm==cv);
cs.rowData=cq.getRowData(cv);
cu.updateDataRowElement(cs,co[y]);
}},_getRowsHtml:function(a,b){var h=this.getTable();
var l=h.getSelectionModel();
var e=h.getTableModel();
var f=h.getTableColumnModel();
var B=this.getPaneScroller().getTablePaneModel();
var q=h.getDataRowRenderer();
e.prefetchRows(a,a+b-1);
var w=h.getRowHeight();
var A=B.getColumnCount();
var g=0;
var d=[];
for(var x=0;x<A;x++){var D=B.getColumnAtX(x);
var k=f.getColumnWidth(D);
d.push({col:D,xPos:x,editable:e.isColumnEditable(D),focusedCol:this.__Bn==D,styleLeft:g,styleWidth:k});
g+=k;
}var C=[];
var E=false;

for(var j=a;j<a+b;j++){var m=l.isSelectedIndex(j);
var p=(this.__Bm==j);
var t=this.__Bq(j,m,p);

if(t){C.push(t);
continue;
}var s=[];
var v={table:h};
v.styleHeight=w;
v.row=j;
v.selected=m;
v.focusedRow=p;
v.rowData=e.getRowData(j);

if(!v.rowData){E=true;
}s.push(bT);
var c=q.getRowClass(v);

if(c){s.push(bU,c,bK);
}var r=q.createRowStyle(v);
r+=bP+q.getRowHeightStyle(w)+bV;

if(r){s.push(cf,r,bK);
}s.push(bY);

for(var x=0;x<A;x++){var n=d[x];

for(var z in n){v[z]=n[z];
}var D=v.col;
v.value=e.getValue(D,j);
var o=f.getDataCellRenderer(D);
o.createDataCellHtml(v,s);
}s.push(bL);
var u=s.join(bN);
this.__Br(j,u,m,p);
C.push(u);
}this.fireDataEvent(bE,E);
return C.join(bN);
},_scrollContent:function(N){var O=this.getContentElement().getDomElement();

if(!(O&&O.firstChild)){this._updateAllRows();
return;
}var X=O.firstChild;
var P=X.childNodes;
var V=this.getVisibleRowCount();
var U=this.getFirstVisibleRow();
var S=this.getTable().getTableModel();
var Y=0;
Y=S.getRowCount();
if(U+V>Y){this._updateAllRows();
return;
}var ba=N<0?V+N:0;
var Q=N<0?0:V-N;

for(i=Math.abs(N)-1;i>=0;i--){var T=P[ba];

try{X.removeChild(T);
}catch(cy){break;
}}if(!this.__Bl){this.__Bl=document.createElement(cg);
}var W=bI;
W+=this._getRowsHtml(U+Q,Math.abs(N));
W+=bL;
this.__Bl.innerHTML=W;
var R=this.__Bl.firstChild.childNodes;
if(N>0){for(var i=R.length-1;i>=0;i--){var T=R[0];
X.appendChild(T);
}}else{for(var i=R.length-1;i>=0;i--){var T=R[R.length-1];
X.insertBefore(T,X.firstChild);
}}if(this.__Bm!==null){this._updateRowStyles(this.__Bm-N);
this._updateRowStyles(this.__Bm);
}this.fireEvent(bJ);
},_updateAllRows:function(){var bv=this.getContentElement().getDomElement();

if(!bv){this.addListenerOnce(bW,arguments.callee,this);
return;
}var bB=this.getTable();
var by=bB.getTableModel();
var bA=this.getPaneScroller().getTablePaneModel();
var bz=bA.getColumnCount();
var bs=bB.getRowHeight();
var bw=this.getFirstVisibleRow();
var bt=this.getVisibleRowCount();
var bC=by.getRowCount();

if(bw+bt>bC){bt=Math.max(0,bC-bw);
}var bu=bA.getTotalWidth();
var bx;
if(bt>0){bx=[bO,cc,(bB.getForceLineHeight()?bX+bs+bS:bN),bG,bQ,this._getRowsHtml(bw,bt),bH];
}else{bx=[];
}var bD=bx.join(bN);
bv.innerHTML=bD;
this.setWidth(bu);
this.__Bi=bz;
this.__Bj=bt;
this.fireEvent(bJ);
}},destruct:function(){this.__Bl=this.__Bh=this.__Bk=null;
}});
})();
(function(){var c="hovered",b="__Bt",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(d){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__Bs=new qx.ui.core.Blocker(this);
this.__Bt=d;
},members:{__Bt:null,__Bu:null,__Bv:null,__Bs:null,getPaneScroller:function(){return this.__Bt;
},getTable:function(){return this.__Bt.getTable();
},getBlocker:function(){return this.__Bs;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(u,v){var w=this.getHeaderWidgetAtColumn(u);

if(w!=null){w.setWidth(v);
}},setMouseOverColumn:function(s){if(s!=this.__Bv){if(this.__Bv!=null){var t=this.getHeaderWidgetAtColumn(this.__Bv);

if(t!=null){t.removeState(c);
}}
if(s!=null){this.getHeaderWidgetAtColumn(s).addState(c);
}this.__Bv=s;
}},getHeaderWidgetAtColumn:function(g){var h=this.getPaneScroller().getTablePaneModel().getX(g);
return this._getChildren()[h];
},showColumnMoveFeedback:function(i,x){var m=this.getContainerLocation();

if(this.__Bu==null){var j=this.getPaneScroller().getTablePaneModel().getX(i);
var l=this._getChildren()[j];
var n=this.getTable().getTableModel();
var p=this.getTable().getTableColumnModel();
var q={xPos:j,col:i,name:n.getColumnName(i)};
var o=p.getHeaderCellRenderer(i);
var k=o.createHeaderCell(q);
var r=l.getBounds();
k.setWidth(r.width);
k.setHeight(r.height);
k.setZIndex(1000000);
k.setOpacity(0.8);
k.setLayoutProperties({top:m.top});
this.getApplicationRoot().add(k);
this.__Bu=k;
}this.__Bu.setLayoutProperties({left:m.left+x});
this.__Bu.show();
},hideColumnMoveFeedback:function(){if(this.__Bu!=null){this.__Bu.destroy();
this.__Bu=null;
}},isShowingColumnMoveFeedback:function(){return this.__Bu!=null;
},_updateContent:function(y){var D=this.getTable().getTableModel();
var G=this.getTable().getTableColumnModel();
var H=this.getPaneScroller().getTablePaneModel();
var J=this._getChildren();
var E=H.getColumnCount();
var z=D.getSortColumnIndex();
if(y){this._cleanUpCells();
}var A={};
A.sortedAscending=D.isSortAscending();

for(var x=0;x<E;x++){var C=H.getColumnAtX(x);

if(C===undefined){continue;
}var I=G.getColumnWidth(C);
var F=G.getHeaderCellRenderer(C);
A.xPos=x;
A.col=C;
A.name=D.getColumnName(C);
A.editable=D.isColumnEditable(C);
A.sorted=(C==z);
var B=J[x];
if(B==null){B=F.createHeaderCell(A);
B.set({width:I});
this._add(B);
}else{F.updateHeaderCell(A,B);
}}},_cleanUpCells:function(){var f=this._getChildren();

for(var x=f.length-1;x>=0;x--){var e=f[x];
e.destroy();
}}},destruct:function(){this.__Bs.dispose();
this._disposeObjects(b);
}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var M="Boolean",L="resize-line",K="mousedown",J="qx.event.type.Data",I="mouseup",H="qx.ui.table.pane.CellEvent",G="scroll",F="excluded",E="scrollbar-y",D="visible",bK="mousemove",bJ="header",bI="editing",bH="click",bG="modelChanged",bF="scrollbar-x",bE="cellClick",bD="__Bx",bC="focus-indicator",bB="mouseout",T="changeHorizontalScrollBarVisible",U="__Bz",R="bottom",S="_applyScrollTimeout",P="changeScrollX",Q="_applyTablePaneModel",N="Integer",O="dblclick",X="__BC",Y="dataEdited",bh="mousewheel",bf="interval",bp="__BB",bk="qx.ui.table.pane.Scroller",bx="__BF",bu="_applyShowCellFocusIndicator",bb="__BE",bA="__BD",bz="__BA",by="resize",ba="vertical",bd="changeScrollY",be="__By",bg="appear",bi="table-scroller",bl="beforeSort",br="cellDblclick",bw="horizontal",V="losecapture",W="contextmenu",bc="col-resize",bo="disappear",bn="_applyVerticalScrollBarVisible",bm="_applyHorizontalScrollBarVisible",bt="pane",bs="cellContextmenu",bj="close",bq="changeTablePaneModel",C="qx.ui.table.pane.Model",bv="changeVerticalScrollBarVisible";
qx.Class.define(bk,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(fq){qx.ui.core.Widget.call(this);
this.__Bw=fq;
var fr=new qx.ui.layout.Grid();
fr.setColumnFlex(0,1);
fr.setRowFlex(1,1);
this._setLayout(fr);
this.__Bx=this._showChildControl(bF);
this.__By=this._showChildControl(E);
this.__Bz=this._showChildControl(bJ);
this.__BA=this._showChildControl("pane");
this.__BB=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__BB,{row:0,column:0,colSpan:2});
this.__BC=new qx.ui.table.pane.Clipper();
this.__BC.add(this.__Bz);
this.__BC.addListener(V,this._onChangeCaptureHeader,this);
this.__BC.addListener(bK,this._onMousemoveHeader,this);
this.__BC.addListener(K,this._onMousedownHeader,this);
this.__BC.addListener(I,this._onMouseupHeader,this);
this.__BC.addListener(bH,this._onClickHeader,this);
this.__BB.add(this.__BC,{flex:1});
this.__BD=new qx.ui.table.pane.Clipper();
this.__BD.add(this.__BA);
this.__BD.addListener(bh,this._onMousewheel,this);
this.__BD.addListener(bK,this._onMousemovePane,this);
this.__BD.addListener(K,this._onMousedownPane,this);
this.__BD.addListener(I,this._onMouseupPane,this);
this.__BD.addListener(bH,this._onClickPane,this);
this.__BD.addListener(W,this._onContextMenu,this);
this.__BD.addListener(O,this._onDblclickPane,this);
this.__BD.addListener(by,this._onResizePane,this);
this._add(this.__BD,{row:1,column:0});
this.__BE=this.getChildControl("focus-indicator");
this.getChildControl(L).hide();
this.addListener(bB,this._onMouseout,this);
this.addListener(bg,this._onAppear,this);
this.addListener(bo,this._onDisappear,this);
this.__BF=new qx.event.Timer();
this.__BF.addListener(bf,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":J,"changeScrollX":J,"cellClick":H,"cellDblclick":H,"cellContextmenu":H,"beforeSort":J},properties:{horizontalScrollBarVisible:{check:M,init:true,apply:bm,event:T},verticalScrollBarVisible:{check:M,init:true,apply:bn,event:bv},tablePaneModel:{check:C,apply:Q,event:bq},liveResize:{check:M,init:false},focusCellOnMouseMove:{check:M,init:false},selectBeforeFocus:{check:M,init:false},showCellFocusIndicator:{check:M,init:true,apply:bu},scrollTimeout:{check:N,init:100,apply:S},appearance:{refine:true,init:bi}},members:{__BG:null,__Bw:null,__BH:null,__BI:null,__BJ:null,__BK:null,__BL:null,__BM:null,__BN:null,__BO:null,__BP:null,__BQ:null,__BR:null,__BS:null,__BT:null,__BU:null,__BV:null,__BW:null,__BX:null,__BY:null,__Ca:null,__Cb:null,__Bx:null,__By:null,__Bz:null,__BC:null,__BA:null,__BD:null,__BE:null,__BB:null,__BF:null,getPaneInsetRight:function(){var dJ=this.getTopRightWidget();
var dK=dJ&&dJ.isVisible()&&dJ.getBounds()?dJ.getBounds().width:0;
var dI=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(dK,dI);
},setPaneWidth:function(ev){if(this.isVerticalScrollBarVisible()){ev+=this.getPaneInsetRight();
}this.setWidth(ev);
},_createChildControlImpl:function(eo){var ep;

switch(eo){case bJ:ep=(this.getTable().getNewTablePaneHeader())(this);
break;
case bt:ep=(this.getTable().getNewTablePane())(this);
break;
case bC:ep=new qx.ui.table.pane.FocusIndicator(this);
ep.setUserBounds(0,0,0,0);
ep.setZIndex(1000);
ep.addListener(I,this._onMouseupFocusIndicator,this);
this.__BD.add(ep);
ep.exclude();
break;
case L:ep=new qx.ui.core.Widget();
ep.setUserBounds(0,0,0,0);
ep.setZIndex(1000);
this.__BD.add(ep);
break;
case bF:ep=this._createScrollBar(bw).set({minWidth:0,alignY:R});
ep.addListener(G,this._onScrollX,this);
this._add(ep,{row:2,column:0});
break;
case E:ep=this._createScrollBar(ba);
ep.addListener(G,this._onScrollY,this);
this._add(ep,{row:1,column:1});
break;
}return ep||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,eo);
},_applyHorizontalScrollBarVisible:function(a,b){this.__Bx.setVisibility(a?D:F);

if(!a){this.setScrollY(0,true);
}},_applyVerticalScrollBarVisible:function(dt,du){this.__By.setVisibility(dt?D:F);

if(!dt){this.setScrollX(0);
}},_applyTablePaneModel:function(bT,bU){if(bU!=null){bU.removeListener(bG,this._onPaneModelChanged,this);
}bT.addListener(bG,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(dk,dl){if(dk){this._updateFocusIndicator();
}else{if(this.__BE){this.__BE.hide();
}}},getScrollY:function(){return this.__By.getPosition();
},setScrollY:function(scrollY,bL){this.__By.scrollTo(scrollY);

if(bL){this._updateContent();
}},getScrollX:function(){return this.__Bx.getPosition();
},setScrollX:function(scrollX){this.__Bx.scrollTo(scrollX);
},getTable:function(){return this.__Bw;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(dy,dz){this.__Bz.setColumnWidth(dy,dz);
this.__BA.setColumnWidth(dy,dz);
var dA=this.getTablePaneModel();
var x=dA.getX(dy);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__Bz.onColOrderChanged();
this.__BA.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bO,bP,bQ,bR){this.__BA.onTableModelDataChanged(bO,bP,bQ,bR);
var bS=this.getTable().getTableModel().getRowCount();

if(bS!=this.__BG){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bS){if(bS==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bS-1);
}}this.__BG=bS;
}},onSelectionChanged:function(){this.__BA.onSelectionChanged();
},onFocusChanged:function(){this.__BA.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__Bz.onTableModelMetaDataChanged();
this.__BA.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__Bz.onPaneModelChanged();
this.__BA.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__Bz._updateContent();
this.__Bw._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var et=this.__BD.getInnerSize();

if(!et){return ;
}var er=this.getTablePaneModel().getTotalWidth();
var es=this.__Bx;

if(et.width<er){var eq=Math.max(0,er-et.width);
es.setMaximum(eq);
es.setKnobFactor(et.width/er);
var eu=es.getPosition();
es.setPosition(Math.min(eu,eq));
}else{es.setMaximum(0);
es.setKnobFactor(1);
es.setPosition(0);
}},updateVerScrollBarMaximum:function(){var cd=this.__BD.getInnerSize();

if(!cd){return ;
}var cb=this.getTable().getTableModel();
var bW=cb.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bW+=1;
}var bV=this.getTable().getRowHeight();
var bY=bW*bV;
var cc=this.__By;

if(cd.height<bY){var bX=Math.max(0,bY-cd.height);
cc.setMaximum(bX);
cc.setKnobFactor(cd.height/bY);
var ca=cc.getPosition();
cc.setPosition(Math.min(ca,bX));
}else{cc.setMaximum(0);
cc.setKnobFactor(1);
cc.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var dm=e.getData();
this.fireDataEvent(P,dm,e.getOldData());
this.__BC.scrollToX(dm);
this.__BD.scrollToX(dm);
},_onScrollY:function(e){this.fireDataEvent(bd,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var cg=this.getTable();

if(!cg.getEnabled()){return;
}var ci=qx.bom.client.Engine.GECKO?1:3;
var ch=this.__By.getPosition()+((e.getWheelDelta()*ci)*cg.getRowHeight());
this.__By.scrollTo(ch);
if(this.__BU&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__BU,this.__BV);
}e.stop();
},__Cc:function(cj){var co=this.getTable();
var cp=this.__Bz.getHeaderWidgetAtColumn(this.__BP);
var ck=cp.getSizeHint().minWidth;
var cm=Math.max(ck,this.__BR+cj-this.__BQ);

if(this.getLiveResize()){var cl=co.getTableColumnModel();
cl.setColumnWidth(this.__BP,cm);
}else{this.__Bz.setColumnWidth(this.__BP,cm);
var cn=this.getTablePaneModel();
this._showResizeLine(cn.getColumnLeft(this.__BP)+cm);
}this.__BQ+=cm-this.__BR;
this.__BR=cm;
},__Cd:function(dh){var di=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__Bz.isShowingColumnMoveFeedback()||dh>this.__BO+di||dh<this.__BO-di){this.__BL+=dh-this.__BO;
this.__Bz.showColumnMoveFeedback(this.__BK,this.__BL);
var dj=this.__Bw.getTablePaneScrollerAtPageX(dh);

if(this.__BN&&this.__BN!=dj){this.__BN.hideColumnMoveFeedback();
}
if(dj!=null){this.__BM=dj.showColumnMoveFeedback(dh);
}else{this.__BM=null;
}this.__BN=dj;
this.__BO=dh;
}},_onMousemoveHeader:function(e){var cM=this.getTable();

if(!cM.getEnabled()){return;
}var cN=false;
var cG=null;
var cK=e.getDocumentLeft();
var cL=e.getDocumentTop();
this.__BU=cK;
this.__BV=cL;

if(this.__BP!=null){this.__Cc(cK);
cN=true;
e.stopPropagation();
}else if(this.__BK!=null){this.__Cd(cK);
e.stopPropagation();
}else{var cH=this._getResizeColumnForPageX(cK);

if(cH!=-1){cN=true;
}else{var cJ=cM.getTableModel();
var cO=this._getColumnForPageX(cK);

if(cO!=null&&cJ.isColumnSortable(cO)){cG=cO;
}}}var cI=cN?bc:null;
this.getApplicationRoot().setGlobalCursor(cI);
this.setCursor(cI);
this.__Bz.setMouseOverColumn(cG);
},_onMousemovePane:function(e){var ew=this.getTable();

if(!ew.getEnabled()){return;
}var ey=e.getDocumentLeft();
var ez=e.getDocumentTop();
this.__BU=ey;
this.__BV=ez;
var ex=this._getRowForPagePos(ey,ez);

if(ex!=null&&this._getColumnForPageX(ey)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(ey,ez);
}}this.__Bz.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var dr=e.getDocumentLeft();
var ds=this._getResizeColumnForPageX(dr);

if(ds!=-1){this._startResizeHeader(ds,dr);
e.stop();
}else{var dq=this._getColumnForPageX(dr);

if(dq!=null){this._startMoveHeader(dq,dr);
e.stop();
}}},_startResizeHeader:function(dv,dw){var dx=this.getTable().getTableColumnModel();
this.__BP=dv;
this.__BQ=dw;
this.__BR=dx.getColumnWidth(this.__BP);
this.__BC.capture();
},_startMoveHeader:function(em,en){this.__BK=em;
this.__BO=en;
this.__BL=this.getTablePaneModel().getColumnLeft(em);
this.__BC.capture();
},_onMousedownPane:function(e){var cS=this.getTable();

if(!cS.getEnabled()){return;
}
if(cS.isEditing()){cS.stopEditing();
}var cP=e.getDocumentLeft();
var cR=e.getDocumentTop();
var cU=this._getRowForPagePos(cP,cR);
var cT=this._getColumnForPageX(cP);

if(cU!==null){this.__BS={row:cU,col:cT};
var cQ=this.getSelectBeforeFocus();

if(cQ){cS.getSelectionManager().handleMouseDown(cU,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cP,cR);
}
if(!cQ){cS.getSelectionManager().handleMouseDown(cU,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__BS&&!this.isEditing()&&this.__BE.getRow()==this.__BS.row&&this.__BE.getColumn()==this.__BS.col){this.__BS={};
this.fireEvent(bE,qx.ui.table.pane.CellEvent,[this,e,this.__BS.row,this.__BS.col],true);
}},_onChangeCaptureHeader:function(e){if(this.__BP!=null){this._stopResizeHeader();
}
if(this.__BK!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var dn=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
dn.setColumnWidth(this.__BP,this.__BR);
}this.__BP=null;
this.__BC.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var dp=this.__BY.getBounds().height;
this.__BY.setUserBounds(0,0,this.__BR,dp);
}},_stopMoveHeader:function(){var eX=this.getTable().getTableColumnModel();
var eY=this.getTablePaneModel();
this.__Bz.hideColumnMoveFeedback();

if(this.__BN){this.__BN.hideColumnMoveFeedback();
}
if(this.__BM!=null){var fb=eY.getFirstColumnX()+eY.getX(this.__BK);
var eW=this.__BM;

if(eW!=fb&&eW!=fb+1){var fa=eX.getVisibleColumnAtX(fb);
var eV=eX.getVisibleColumnAtX(eW);
var eU=eX.getOverallX(fa);
var eT=(eV!=null)?eX.getOverallX(eV):eX.getOverallColumnCount();

if(eT>eU){eT--;
}eX.moveColumn(eU,eT);
this._updateFocusIndicator();
}}this.__BK=null;
this.__BM=null;
this.__BC.releaseCapture();
},_onMouseupPane:function(e){var bM=this.getTable();

if(!bM.getEnabled()){return;
}var bN=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(bN!=-1&&bN!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){bM.getSelectionManager().handleMouseUp(bN,e);
}},_onMouseupHeader:function(e){var eI=this.getTable();

if(!eI.getEnabled()){return;
}
if(this.__BP!=null){this._stopResizeHeader();
this.__BT=true;
e.stop();
}else if(this.__BK!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__BT){this.__BT=false;
return;
}var eN=this.getTable();

if(!eN.getEnabled()){return;
}var eL=eN.getTableModel();
var eM=e.getDocumentLeft();
var eK=this._getResizeColumnForPageX(eM);

if(eK==-1){var eQ=this._getColumnForPageX(eM);

if(eQ!=null&&eL.isColumnSortable(eQ)){var eJ=eL.getSortColumnIndex();
var eO=(eQ!=eJ)?true:!eL.isSortAscending();
var eP={column:eQ,ascending:eO};

if(this.fireDataEvent(bl,eP)){eL.sortByColumn(eQ,eO);
eN.getSelectionModel().resetSelection();
}}}e.stop();
},_onClickPane:function(e){var fs=this.getTable();

if(!fs.getEnabled()){return;
}var fv=e.getDocumentLeft();
var fw=e.getDocumentTop();
var ft=this._getRowForPagePos(fv,fw);
var fu=this._getColumnForPageX(fv);

if(ft!=null&&fu!=null){fs.getSelectionManager().handleClick(ft,e);

if(this.__BE.isHidden()||(this.__BS&&!this.isEditing()&&ft==this.__BS.row&&fu==this.__BS.col)){this.__BS={};
this.fireEvent(bE,qx.ui.table.pane.CellEvent,[this,e,ft,fu],true);
}}},_onContextMenu:function(e){var eD=e.getDocumentLeft();
var eE=e.getDocumentTop();
var eB=this._getRowForPagePos(eD,eE);
var eC=this._getColumnForPageX(eD);

if(this.__BE.isHidden()||(this.__BS&&eB==this.__BS.row&&eC==this.__BS.col)){this.__BS={};
this.fireEvent(bs,qx.ui.table.pane.CellEvent,[this,e,eB,eC],true);
var eA=this.getTable().getContextMenu();

if(eA){if(eA.getChildren().length>0){eA.openAtMouse(e);
}else{eA.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dG=e.getDocumentLeft();
var dH=e.getDocumentTop();
this._focusCellAtPagePos(dG,dH);
this.startEditing();
var dF=this._getRowForPagePos(dG,dH);

if(dF!=-1&&dF!=null){this.fireEvent(br,qx.ui.table.pane.CellEvent,[this,e,dF],true);
}},_onMouseout:function(e){var cY=this.getTable();

if(!cY.getEnabled()){return;
}if(this.__BP==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__Bz.setMouseOverColumn(null);
},_showResizeLine:function(x){var cW=this._showChildControl(L);
var cV=cW.getWidth();
var cX=this.__BD.getBounds();
cW.setUserBounds(x-Math.round(cV/2),0,cV,cX.height);
},_hideResizeLine:function(){this._excludeChildControl(L);
},showColumnMoveFeedback:function(dN){var dW=this.getTablePaneModel();
var dV=this.getTable().getTableColumnModel();
var dQ=this.__BA.getContainerLocation().left;
var dU=dW.getColumnCount();
var dR=0;
var dP=0;
var ea=dQ;

for(var dO=0;dO<dU;dO++){var dS=dW.getColumnAtX(dO);
var dX=dV.getColumnWidth(dS);

if(dN<ea+dX/2){break;
}ea+=dX;
dR=dO+1;
dP=ea-dQ;
}var dT=this.__BD.getContainerLocation().left;
var dY=this.__BD.getBounds().width;
var scrollX=dT-dQ;
dP=qx.lang.Number.limit(dP,scrollX+2,scrollX+dY-1);
this._showResizeLine(dP);
return dW.getFirstColumnX()+dR;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dB,dC){var dE=this._getRowForPagePos(dB,dC);

if(dE!=-1&&dE!=null){var dD=this._getColumnForPageX(dB);
this.__Bw.setFocusedCell(dD,dE);
}},setFocusedCell:function(eF,eG){if(!this.isEditing()){this.__BA.setFocusedCell(eF,eG,this.__BI);
this.__BW=eF;
this.__BX=eG;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__BW;
},getFocusedRow:function(){return this.__BX;
},scrollCellVisible:function(fc,fd){var fn=this.getTablePaneModel();
var fe=fn.getX(fc);

if(fe!=-1){var fk=this.__BD.getInnerSize();

if(!fk){return;
}var fl=this.getTable().getTableColumnModel();
var fh=fn.getColumnLeft(fc);
var fo=fl.getColumnWidth(fc);
var ff=this.getTable().getRowHeight();
var fp=fd*ff;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var fm=Math.min(fh,fh+fo-fk.width);
var fj=fh;
this.setScrollX(Math.max(fm,Math.min(fj,scrollX)));
var fg=fp+ff-fk.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){fg+=ff;
}var fi=fp;
this.setScrollY(Math.max(fg,Math.min(fi,scrollY)),true);
}},isEditing:function(){return this.__BY!=null;
},startEditing:function(){var cu=this.getTable();
var cs=cu.getTableModel();
var cw=this.__BW;

if(!this.isEditing()&&(cw!=null)&&cs.isColumnEditable(cw)){var cx=this.__BX;
var cq=this.getTablePaneModel().getX(cw);
var cr=cs.getValue(cw,cx);
this.__Ca=cu.getTableColumnModel().getCellEditorFactory(cw);
var ct={col:cw,row:cx,xPos:cq,value:cr,table:cu};
this.__BY=this.__Ca.createCellEditor(ct);
if(this.__BY===null){return false;
}else if(this.__BY instanceof qx.ui.window.Window){this.__BY.setModal(true);
this.__BY.setShowClose(false);
this.__BY.addListener(bj,this._onCellEditorModalWindowClose,this);
var f=cu.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__BY,ct);
}this.__BY.open();
}else{var cv=this.__BE.getInnerSize();
this.__BY.setUserBounds(0,0,cv.width,cv.height);
this.__BE.addListener(K,function(e){this.__BS={row:this.__BX,col:this.__BW};
e.stopPropagation();
},this);
this.__BE.add(this.__BY);
this.__BE.addState(bI);
this.__BE.setKeepActive(false);
this.__BY.focus();
this.__BY.activate();
}return true;
}return false;
},stopEditing:function(){this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var el=this.__Ca.getCellEditorValue(this.__BY);
var ek=this.getTable().getTableModel().getValue(this.__BW,this.__BX);
this.getTable().getTableModel().setValue(this.__BW,this.__BX,el);
this.__Bw.focus();
this.__Bw.fireDataEvent(Y,{row:this.__BX,col:this.__BW,oldValue:ek,value:el});
}},cancelEditing:function(){if(this.isEditing()&&!this.__BY.pendingDispose){if(this._cellEditorIsModalWindow){this.__BY.destroy();
this.__BY=null;
this.__Ca=null;
this.__BY.pendingDispose=true;
}else{this.__BE.removeState(bI);
this.__BE.setKeepActive(true);
this.__BY.destroy();
this.__BY=null;
this.__Ca=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(da){var dd=this.getTable().getTableColumnModel();
var de=this.getTablePaneModel();
var dc=de.getColumnCount();
var dg=this.__Bz.getContainerLocation().left;

for(var x=0;x<dc;x++){var db=de.getColumnAtX(x);
var df=dd.getColumnWidth(db);
dg+=df;

if(da<dg){return db;
}}return null;
},_getResizeColumnForPageX:function(d){var j=this.getTable().getTableColumnModel();
var k=this.getTablePaneModel();
var i=k.getColumnCount();
var m=this.__Bz.getContainerLocation().left;
var g=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<i;x++){var h=k.getColumnAtX(x);
var l=j.getColumnWidth(h);
m+=l;

if(d>=(m-g)&&d<=(m+g)){return h;
}}return -1;
},_getRowForPagePos:function(eb,ec){var ed=this.__BA.getContentLocation();

if(eb<ed.left||eb>ed.right){return null;
}
if(ec>=ed.top&&ec<=ed.bottom){var ee=this.getTable().getRowHeight();
var scrollY=this.__By.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/ee)*ee;
}var eh=scrollY+ec-ed.top;
var ej=Math.floor(eh/ee);
var ei=this.getTable().getTableModel();
var ef=ei.getRowCount();
return (ej<ef)?ej:null;
}var eg=this.__Bz.getContainerLocation();

if(ec>=eg.top&&ec<=eg.bottom&&eb<=eg.right){return -1;
}return null;
},setTopRightWidget:function(eR){var eS=this.__Cb;

if(eS!=null){this.__BB.remove(eS);
}
if(eR!=null){this.__BB.add(eR);
}this.__Cb=eR;
},getTopRightWidget:function(){return this.__Cb;
},getHeader:function(){return this.__Bz;
},getTablePane:function(){return this.__BA;
},getVerticalScrollBarWidth:function(){var c=this.__By;
return c.isVisible()?(c.getSizeHint().width||0):0;
},getNeededScrollBars:function(n,o){var u=this.__By.getSizeHint().width;
var v=this.__BD.getInnerSize();
var p=v?v.width:0;

if(this.getVerticalScrollBarVisible()){p+=u;
}var z=v?v.height:0;

if(this.getHorizontalScrollBarVisible()){z+=u;
}var s=this.getTable().getTableModel();
var w=s.getRowCount();
var A=this.getTablePaneModel().getTotalWidth();
var y=this.getTable().getRowHeight()*w;
var r=false;
var B=false;

if(A>p){r=true;

if(y>z-u){B=true;
}}else if(y>z){B=true;

if(!o&&(A>p-u)){r=true;
}}var t=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var q=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((n||r)?t:0)|((o||!B)?0:q);
},_applyScrollTimeout:function(dL,dM){this._startInterval(dL);
},_startInterval:function(ce){this.__BF.setInterval(ce);
this.__BF.start();
},_stopInterval:function(){this.__BF.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__BI&&!this.__BA._layoutPending){this.__BI=false;
this._updateContent();
}}),_updateContent:function(){var cC=this.__BD.getInnerSize();

if(!cC){return;
}var cF=cC.height;
var scrollX=this.__Bx.getPosition();
var scrollY=this.__By.getPosition();
var cz=this.getTable().getRowHeight();
var cA=Math.floor(scrollY/cz);
var cE=this.__BA.getFirstVisibleRow();
this.__BA.setFirstVisibleRow(cA);
var cB=Math.ceil(cF/cz);
var cy=0;
var cD=this.getTable().getKeepFirstVisibleRowComplete();

if(!cD){cB++;
cy=scrollY%cz;
}this.__BA.setVisibleRowCount(cB);

if(cA!=cE){this._updateFocusIndicator();
}this.__BD.scrollToX(scrollX);
if(!cD){this.__BD.scrollToY(cy);
}},_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var eH=this.getTable();

if(!eH.getEnabled()){return;
}this.__BE.moveToCell(this.__BW,this.__BX);
}},destruct:function(){this._stopInterval();
var cf=this.getTablePaneModel();

if(cf){cf.dispose();
}this.__BS=this.__Cb=this.__Bw=null;
this._disposeObjects(bD,be,X,bA,bb,U,bz,bp,bx);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(d){this.assertNumber(d);
},scrollBy:function(e){this.assertNumber(e);
},scrollBySteps:function(c){this.assertNumber(c);
}}});
})();
(function(){var l="horizontal",k="px",j="scroll",i="vertical",h="-1px",g="qx.client",f="0",d="hidden",c="mousedown",b="qx.ui.core.scroll.NativeScrollBar",A="PositiveNumber",z="Integer",y="mousemove",x="_applyMaximum",w="_applyOrientation",v="appear",u="opera",t="PositiveInteger",s="mshtml",r="mouseup",p="Number",q="_applyPosition",n="scrollbar",o="__oI",m="native";
qx.Class.define(b,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(V){qx.ui.core.Widget.call(this);
this.addState(m);
this.getContentElement().addListener(j,this._onScroll,this);
this.addListener(c,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(y,this._stopPropagation,this);

if(qx.core.Variant.isSet(g,u)){this.addListener(v,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(V!=null){this.setOrientation(V);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[l,i],init:l,apply:w},maximum:{check:t,apply:x,init:100},position:{check:p,init:0,apply:q,event:j},singleStep:{check:z,init:20},knobFactor:{check:A,nullable:true}},members:{__oH:null,__oI:null,_getScrollPaneElement:function(){if(!this.__oI){this.__oI=new qx.html.Element();
}return this.__oI;
},renderLayout:function(K,top,L,M){var N=qx.ui.core.Widget.prototype.renderLayout.call(this,K,top,L,M);
this._updateScrollBar();
return N;
},_getContentHint:function(){var O=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__oH?100:O,maxWidth:this.__oH?null:O,minWidth:this.__oH?null:O,height:this.__oH?O:100,maxHeight:this.__oH?O:null,minHeight:this.__oH?O:null};
},_applyEnabled:function(R,S){qx.ui.core.Widget.prototype._applyEnabled.call(this,R,S);
this._updateScrollBar();
},_applyMaximum:function(W){this._updateScrollBar();
},_applyPosition:function(a){var content=this.getContentElement();

if(this.__oH){content.scrollToX(a);
}else{content.scrollToY(a);
}},_applyOrientation:function(B,C){var D=this.__oH=B===l;
this.set({allowGrowX:D,allowShrinkX:D,allowGrowY:!D,allowShrinkY:!D});

if(D){this.replaceState(i,l);
}else{this.replaceState(l,i);
}this.getContentElement().setStyles({overflowX:D?j:d,overflowY:D?d:j});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var G=this.__oH;
var H=this.getBounds();

if(!H){return;
}
if(this.isEnabled()){var I=G?H.width:H.height;
var F=this.getMaximum()+I;
}else{F=0;
}if(qx.core.Variant.isSet(g,s)){var H=this.getBounds();
this.getContentElement().setStyles({left:G?f:h,top:G?h:f,width:(G?H.width:H.width+1)+k,height:(G?H.height+1:H.height)+k});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(G?F:1)+k,height:(G?1:F)+k});
this.scrollTo(this.getPosition());
},scrollTo:function(E){this.setPosition(Math.max(0,Math.min(this.getMaximum(),E)));
},scrollBy:function(J){this.scrollTo(this.getPosition()+J);
},scrollBySteps:function(T){var U=this.getSingleStep();
this.scrollBy(T*U);
},_onScroll:function(e){var Q=this.getContentElement();
var P=this.__oH?Q.getScrollX():Q.getScrollY();
this.setPosition(P);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(o);
}});
})();
(function(){var n="slider",m="horizontal",l="button-begin",k="vertical",j="button-end",i="Integer",h="execute",g="right",f="left",d="down",C="up",B="PositiveNumber",A="changeValue",z="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",y="_applyKnobFactor",x="knob",w="qx.ui.core.scroll.ScrollBar",v="resize",u="_applyOrientation",t="_applyPageStep",r="PositiveInteger",s="scroll",p="_applyPosition",q="scrollbar",o="_applyMaximum";
qx.Class.define(w,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(J){qx.ui.core.Widget.call(this);
this._createChildControl(l);
this._createChildControl(n).addListener(v,this._onResizeSlider,this);
this._createChildControl(j);
if(J!=null){this.setOrientation(J);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:q},orientation:{check:[m,k],init:m,apply:u},maximum:{check:r,apply:o,init:100},position:{check:z,init:0,apply:p,event:s},singleStep:{check:i,init:20},pageStep:{check:i,init:10,apply:t},knobFactor:{check:B,apply:y,nullable:true}},members:{__mj:2,_createChildControlImpl:function(E){var F;

switch(E){case n:F=new qx.ui.core.scroll.ScrollSlider();
F.setPageStep(100);
F.setFocusable(false);
F.addListener(A,this._onChangeSliderValue,this);
this._add(F,{flex:1});
break;
case l:F=new qx.ui.form.RepeatButton();
F.setFocusable(false);
F.addListener(h,this._onExecuteBegin,this);
this._add(F);
break;
case j:F=new qx.ui.form.RepeatButton();
F.setFocusable(false);
F.addListener(h,this._onExecuteEnd,this);
this._add(F);
break;
}return F||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,E);
},_applyMaximum:function(G){this.getChildControl(n).setMaximum(G);
},_applyPosition:function(K){this.getChildControl(n).setValue(K);
},_applyKnobFactor:function(L){this.getChildControl(n).setKnobFactor(L);
},_applyPageStep:function(Q){this.getChildControl(n).setPageStep(Q);
},_applyOrientation:function(a,b){var c=this._getLayout();

if(c){c.dispose();
}if(a===m){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(k,m);
this.getChildControl(l).replaceState(C,f);
this.getChildControl(j).replaceState(d,g);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(m,k);
this.getChildControl(l).replaceState(f,C);
this.getChildControl(j).replaceState(g,d);
}this.getChildControl(n).setOrientation(a);
},scrollTo:function(D){this.getChildControl(n).slideTo(D);
},scrollBy:function(R){this.getChildControl(n).slideBy(R);
},scrollBySteps:function(H){var I=this.getSingleStep();
this.getChildControl(n).slideBy(H*I);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var M=this.getChildControl(n).getChildControl(x);
var P=M.getSizeHint();
var N=false;
var O=this.getChildControl(n).getInnerSize();

if(this.getOrientation()==k){if(O.height<P.minHeight+this.__mj){N=true;
}}else{if(O.width<P.minWidth+this.__mj){N=true;
}}
if(N){M.exclude();
}else{M.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IRange";
qx.Interface.define(b,{members:{setMinimum:function(a){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(e){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(c){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var bf="knob",be="horizontal",bd="vertical",bc="Integer",bb="hovered",ba="left",Y="top",X="mouseup",W="pressed",V="px",bP="mousemove",bO="resize",bN="slider",bM="mousedown",bL="PageUp",bK="mouseout",bJ="changeValue",bI="Left",bH="Down",bG="Up",bm="dblclick",bn="qx.ui.form.Slider",bk="PageDown",bl="mousewheel",bi="interval",bj="_applyValue",bg="_applyKnobFactor",bh="End",bo="height",bp="Right",bw="width",bu="_applyOrientation",bA="Home",by="mouseover",bC="floor",bB="_applyMinimum",br="click",bF="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",bE="keypress",bD="ceil",bq="losecapture",bs="contextmenu",bt="_applyMaximum",bv="Number",bx="changeMaximum",bz="changeMinimum";
qx.Class.define(bn,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(x){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bE,this._onKeyPress);
this.addListener(bl,this._onMouseWheel);
this.addListener(bM,this._onMouseDown);
this.addListener(X,this._onMouseUp);
this.addListener(bq,this._onMouseUp);
this.addListener(bO,this._onUpdate);
this.addListener(bs,this._onStopEvent);
this.addListener(br,this._onStopEvent);
this.addListener(bm,this._onStopEvent);
if(x!=null){this.setOrientation(x);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bN},focusable:{refine:true,init:true},orientation:{check:[be,bd],init:be,apply:bu},value:{check:bF,init:0,apply:bj,event:bJ,nullable:true},minimum:{check:bc,init:0,apply:bB,event:bz},maximum:{check:bc,init:100,apply:bt,event:bx},singleStep:{check:bc,init:1},pageStep:{check:bc,init:10},knobFactor:{check:bv,apply:bg,nullable:true}},members:{__mI:null,__mJ:null,__mK:null,__mL:null,__mM:null,__mN:null,__mO:null,__mP:null,__mQ:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bS){var bT;

switch(bS){case bf:bT=new qx.ui.core.Widget();
bT.addListener(bO,this._onUpdate,this);
bT.addListener(by,this._onMouseOver);
bT.addListener(bK,this._onMouseOut);
this._add(bT);
break;
}return bT||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bS);
},_onMouseOver:function(e){this.addState(bb);
},_onMouseOut:function(e){this.removeState(bb);
},_onMouseWheel:function(e){var K=e.getWheelDelta()>0?1:-1;
this.slideBy(K*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bV=this.getOrientation()===be;
var bU=bV?bI:bG;
var forward=bV?bp:bH;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bU:this.slideBack();
break;
case bk:this.slidePageForward();
break;
case bL:this.slidePageBack();
break;
case bA:this.slideToBegin();
break;
case bh:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__mL){return;
}var R=this.__mS;
var P=this.getChildControl(bf);
var Q=R?ba:Y;
var T=R?e.getDocumentLeft():e.getDocumentTop();
var U=this.__mI=qx.bom.element.Location.get(this.getContentElement().getDomElement())[Q];
var S=this.__mJ=qx.bom.element.Location.get(P.getContainerElement().getDomElement())[Q];

if(e.getTarget()===P){this.__mL=true;
this.__mM=T+U-S;
P.addState(W);
}else{this.__mN=true;
this.__mO=T<=S?-1:1;
this.__mT(e);
this._onInterval();
if(!this.__mQ){this.__mQ=new qx.event.Timer(100);
this.__mQ.addListener(bi,this._onInterval,this);
}this.__mQ.start();
}this.addListener(bP,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__mL){this.releaseCapture();
delete this.__mL;
delete this.__mM;
this.getChildControl(bf).removeState(W);
if(e.getType()===X){var j;
var k;
var i;

if(this.__mS){j=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__mI);
i=qx.bom.element.Location.get(this.getContentElement().getDomElement())[Y];
k=e.getDocumentTop()-(i+this.getChildControl(bf).getBounds().top);
}else{j=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__mI);
i=qx.bom.element.Location.get(this.getContentElement().getDomElement())[ba];
k=e.getDocumentLeft()-(i+this.getChildControl(bf).getBounds().left);
}
if(k<0||k>this.__mK||j<0||j>this.__mK){this.getChildControl(bf).removeState(bb);
}}}else if(this.__mN){this.__mQ.stop();
this.releaseCapture();
delete this.__mN;
delete this.__mO;
delete this.__mP;
}this.removeListener(bP,this._onMouseMove);
if(e.getType()===X){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__mL){var f=this.__mS?e.getDocumentLeft():e.getDocumentTop();
var d=f-this.__mM;
this.slideTo(this._positionToValue(d));
}else if(this.__mN){this.__mT(e);
}e.stopPropagation();
},_onInterval:function(e){var bQ=this.getValue()+(this.__mO*this.getPageStep());
if(bQ<this.getMinimum()){bQ=this.getMinimum();
}else if(bQ>this.getMaximum()){bQ=this.getMaximum();
}var bR=this.__mO==-1;

if((bR&&bQ<=this.__mP)||(!bR&&bQ>=this.__mP)){bQ=this.__mP;
}this.slideTo(bQ);
},_onUpdate:function(e){var b=this.getInnerSize();
var c=this.getChildControl(bf).getBounds();
var a=this.__mS?bw:bo;
this._updateKnobSize();
this.__mR=b[a]-c[a];
this.__mK=c[a];
this._updateKnobPosition();
},__mS:false,__mR:0,__mT:function(e){var l=this.__mS;
var s=l?e.getDocumentLeft():e.getDocumentTop();
var u=this.__mI;
var m=this.__mJ;
var w=this.__mK;
var t=s-u;

if(s>=m){t-=w;
}var q=this._positionToValue(t);
var n=this.getMinimum();
var o=this.getMaximum();

if(q<n){q=n;
}else if(q>o){q=o;
}else{var r=this.getValue();
var p=this.getPageStep();
var v=this.__mO<0?bC:bD;
q=r+(Math[v]((q-r)/p)*p);
}if(this.__mP==null||(this.__mO==-1&&q<=this.__mP)||(this.__mO==1&&q>=this.__mP)){this.__mP=q;
}},_positionToValue:function(C){var D=this.__mR;
if(D==null||D==0){return 0;
}var F=C/D;

if(F<0){F=0;
}else if(F>1){F=1;
}var E=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(E*F);
},_valueToPosition:function(L){var M=this.__mR;

if(M==null){return 0;
}var N=this.getMaximum()-this.getMinimum();
if(N==0){return 0;
}var L=L-this.getMinimum();
var O=L/N;

if(O<0){O=0;
}else if(O>1){O=1;
}return Math.round(M*O);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(cc){var cd=this.getChildControl(bf).getContainerElement();

if(this.__mS){cd.setStyle(ba,cc+V,true);
}else{cd.setStyle(Y,cc+V,true);
}},_updateKnobSize:function(){var B=this.getKnobFactor();

if(B==null){return;
}var A=this.getInnerSize();

if(A==null){return;
}if(this.__mS){this.getChildControl(bf).setWidth(Math.round(B*A.width));
}else{this.getChildControl(bf).setHeight(Math.round(B*A.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(G){this.slideTo(this.getValue()+G);
},slideTo:function(bW){if(bW<this.getMinimum()){bW=this.getMinimum();
}else if(bW>this.getMaximum()){bW=this.getMaximum();
}else{bW=this.getMinimum()+Math.round((bW-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bW);
},_applyOrientation:function(H,I){var J=this.getChildControl(bf);
this.__mS=H===be;
if(this.__mS){this.removeState(bd);
J.removeState(bd);
this.addState(be);
J.addState(be);
J.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(be);
J.removeState(be);
this.addState(bd);
J.addState(bd);
J.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(ca,cb){if(ca!=null){this._updateKnobSize();
}else{if(this.__mS){this.getChildControl(bf).resetWidth();
}else{this.getChildControl(bf).resetHeight();
}}},_applyValue:function(y,z){if(y!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(g,h){if(this.getValue()<g){this.setValue(g);
}this._updateKnobPosition();
},_applyMaximum:function(bX,bY){if(this.getValue()>bX){this.setValue(bX);
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
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(b){this.getContentElement().scrollToX(b,false);
},scrollToY:function(c){this.getContentElement().scrollToY(c,true);
}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(h){qx.ui.container.Composite.call(this);
this.__Ce=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__Ce:null,_onKeyPress:function(e){var q=e.getKeyIdentifier();

if(q!==f&&q!==c){e.stopPropagation();
}},moveToCell:function(i,j){if(i==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var k=this.__Ce.getTablePaneModel().getX(i);

if(k==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var p=this.__Ce.getTable();
var n=p.getTableColumnModel();
var o=this.__Ce.getTablePaneModel();
var m=this.__Ce.getTablePane().getFirstVisibleRow();
var l=p.getRowHeight();
this.setUserBounds(o.getColumnLeft(i)-2,(j-m)*l-2,n.getColumnWidth(i)+3,l+3);
this.show();
this.setRow(j);
this.setColumn(i);
}}}},destruct:function(){this.__Ce=null;
}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(e,f,g,h){f.clone(this);
this.setBubbles(false);

if(g!=null){this.setRow(g);
}else{this.setRow(e._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(h!=null){this.setColumn(h);
}else{this.setColumn(e._getColumnForPageX(this.getDocumentLeft()));
}},clone:function(c){var d=qx.event.type.Mouse.prototype.clone.call(this,c);
d.set({row:this.getRow(),column:this.getColumn()});
return d;
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
(function(){var q="resize",p="Boolean",o="mouseup",n="mousedown",m="losecapture",l="resizableBottom",k="mouseout",j="resizableRight",i="resizableLeft",h="mousemove",c="move",g="shorthand",f="maximized",b="resizableTop",a="Integer",d="qx.ui.core.MResizable";
qx.Mixin.define(d,{construct:function(){this.addListener(n,this.__bb,this,true);
this.addListener(o,this.__bc,this);
this.addListener(h,this.__be,this);
this.addListener(k,this.__bf,this);
this.addListener(m,this.__bd,this);
var r=this.getContainerElement().getDomElement();

if(r==null){r=window;
}this.__O=qx.event.Registration.getManager(r).getHandler(qx.event.handler.DragDrop);
},properties:{resizableTop:{check:p,init:true},resizableRight:{check:p,init:true},resizableBottom:{check:p,init:true},resizableLeft:{check:p,init:true},resizable:{group:[b,j,l,i],mode:g},resizeSensitivity:{check:a,init:5},useResizeFrame:{check:p,init:true}},members:{__O:null,__P:null,__Q:null,__R:null,__S:null,__T:null,__U:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__V:function(){var E=this.__P;

if(!E){E=this.__P=new qx.ui.core.Widget();
E.setAppearance("resize-frame");
E.exclude();
qx.core.Init.getApplication().getRoot().add(E);
}return E;
},__W:function(){var G=this.__T;
var F=this.__V();
F.setUserBounds(G.left,G.top,G.width,G.height);
F.show();
F.setZIndex(this.getZIndex()+1);
},__X:function(e){var t=this.__Q;
var u=this.getSizeHint();
var x=this.__U;
var w=this.__T;
var s=w.width;
var v=w.height;
var z=w.left;
var top=w.top;
var y;

if((t&this.RESIZE_TOP)||(t&this.RESIZE_BOTTOM)){y=Math.max(x.top,Math.min(x.bottom,e.getDocumentTop()))-this.__S;

if(t&this.RESIZE_TOP){v-=y;
}else{v+=y;
}
if(v<u.minHeight){v=u.minHeight;
}else if(v>u.maxHeight){v=u.maxHeight;
}
if(t&this.RESIZE_TOP){top+=w.height-v;
}}
if((t&this.RESIZE_LEFT)||(t&this.RESIZE_RIGHT)){y=Math.max(x.left,Math.min(x.right,e.getDocumentLeft()))-this.__R;

if(t&this.RESIZE_LEFT){s-=y;
}else{s+=y;
}
if(s<u.minWidth){s=u.minWidth;
}else if(s>u.maxWidth){s=u.maxWidth;
}
if(t&this.RESIZE_LEFT){z+=w.width-s;
}}return {viewportLeft:z,viewportTop:top,parentLeft:w.bounds.left+z-w.left,parentTop:w.bounds.top+top-w.top,width:s,height:v};
},__Y:{1:"n-resize",2:"s-resize",4:"w-resize",8:"e-resize",5:"nw-resize",6:"sw-resize",9:"ne-resize",10:"se-resize"},__ba:function(e){var J=this.getContentLocation();
var H=this.getResizeSensitivity();
var L=e.getDocumentLeft();
var K=e.getDocumentTop();
var I=0;

if(this.getResizableTop()&&Math.abs(J.top-K)<H){I+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(J.bottom-K)<H){I+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(J.left-L)<H){I+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(J.right-L)<H){I+=this.RESIZE_RIGHT;
}this.__Q=I;
},__bb:function(e){if(!this.__Q){return;
}this.addState(q);
this.__R=e.getDocumentLeft();
this.__S=e.getDocumentTop();
var location=this.getContainerLocation();
var D=this.getBounds();
this.__T={top:location.top,left:location.left,width:D.width,height:D.height,bounds:qx.lang.Object.clone(D)};
var parent=this.getLayoutParent();
var B=parent.getContentLocation();
var C=parent.getBounds();
this.__U={left:B.left,top:B.top,right:B.left+C.width,bottom:B.top+C.height};
if(this.getUseResizeFrame()){this.__W();
}this.capture();
e.stop();
},__bc:function(e){if(!this.hasState(q)){return;
}if(this.getUseResizeFrame()){this.__V().exclude();
}var A=this.__X(e);
this.setWidth(A.width);
this.setHeight(A.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:A.parentLeft,top:A.parentTop});
}this.__Q=0;
this.removeState(q);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__bd:function(e){if(!this.__Q){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(c);
if(this.getUseResizeFrame()){this.__V().exclude();
}},__be:function(e){if(this.hasState(q)){var P=this.__X(e);
if(this.getUseResizeFrame()){var N=this.__V();
N.setUserBounds(P.viewportLeft,P.viewportTop,P.width,P.height);
}else{this.setWidth(P.width);
this.setHeight(P.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:P.parentLeft,top:P.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(f)&&!this.__O.isSessionActive()){this.__ba(e);
var Q=this.__Q;
var O=this.getApplicationRoot();

if(Q){var M=this.__Y[Q];
this.setCursor(M);
O.setGlobalCursor(M);
}else if(this.getCursor()){this.resetCursor();
O.resetGlobalCursor();
}}},__bf:function(e){if(this.getCursor()&&!this.hasState(q)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__P!=null&&!qx.core.ObjectRegistry.inShutDown){this.__P.destroy();
this.__P=null;
}this.__O=null;
}});
})();
(function(){var l="move",k="Boolean",j="mouseup",i="mousedown",h="losecapture",g="__x",f="qx.ui.core.MMovable",d="__y",c="mousemove",b="maximized";
qx.Mixin.define(f,{properties:{movable:{check:k,init:true},useMoveFrame:{check:k,init:false}},members:{__x:null,__y:null,__z:null,__A:null,__B:null,__C:null,__D:null,__E:false,__F:null,__G:0,_activateMoveHandle:function(y){if(this.__x){throw new Error("The move handle could not be redefined!");
}this.__x=y;
y.addListener(i,this._onMoveMouseDown,this);
y.addListener(j,this._onMoveMouseUp,this);
y.addListener(c,this._onMoveMouseMove,this);
y.addListener(h,this.__K,this);
},__H:function(){var v=this.__y;

if(!v){v=this.__y=new qx.ui.core.Widget();
v.setAppearance("move-frame");
v.exclude();
qx.core.Init.getApplication().getRoot().add(v);
}return v;
},__I:function(){var location=this.getContainerLocation();
var x=this.getBounds();
var w=this.__H();
w.setUserBounds(location.left,location.top,x.width,x.height);
w.show();
w.setZIndex(this.getZIndex()+1);
},__J:function(e){var o=this.__z;
var r=Math.max(o.left,Math.min(o.right,e.getDocumentLeft()));
var q=Math.max(o.top,Math.min(o.bottom,e.getDocumentTop()));
var n=this.__A+r;
var p=this.__B+q;
return {viewportLeft:n,viewportTop:p,parentLeft:n-this.__C,parentTop:p-this.__D};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(b)){return;
}var parent=this.getLayoutParent();
var t=parent.getContentLocation();
var u=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__E=true;
this.__F=parent.getBlockerColor();
this.__G=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
}}this.__z={left:t.left,top:t.top,right:t.left+u.width,bottom:t.top+u.height};
var s=this.getContainerLocation();
this.__C=t.left;
this.__D=t.top;
this.__A=s.left-e.getDocumentLeft();
this.__B=s.top-e.getDocumentTop();
this.addState(l);
this.__x.capture();
if(this.getUseMoveFrame()){this.__I();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(l)){return;
}var a=this.__J(e);

if(this.getUseMoveFrame()){this.__H().setDomPosition(a.viewportLeft,a.viewportTop);
}else{this.setDomPosition(a.parentLeft,a.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__E){parent.unblockContent();
parent.setBlockerColor(this.__F);
parent.setBlockerOpacity(this.__G);
this.__F=null;
this.__G=0;
}}this.__x.releaseCapture();
var m=this.__J(e);
this.setLayoutProperties({left:m.parentLeft,top:m.parentTop});
if(this.getUseMoveFrame()){this.__H().exclude();
}e.stopPropagation();
},__K:function(e){if(!this.hasState("move")){return;
}this.removeState("move");
if(this.getUseMoveFrame()){this.__H().exclude();
}}},destruct:function(){this._disposeObjects(d,g);
this.__z=null;
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__jG:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__jH:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__jH[name];
s[t]();
}else{var u=this.__jG[name];
s[u](q);
}}}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(f){this.assertInterface(f,qx.ui.window.IDesktop);
},changeActiveWindow:function(d,e){},updateStack:function(){},bringToFront:function(b){this.assertInstance(b,qx.ui.window.Window);
},sendToBack:function(c){this.assertInstance(c,qx.ui.window.Window);
}}});
})();
(function(){var b="__N",a="qx.ui.window.Manager";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__N:null,setDesktop:function(j){this.__N=j;
this.updateStack();
},getDesktop:function(){return this.__N;
},changeActiveWindow:function(k,m){if(k){this.bringToFront(k);
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__N.forceUnblockContent();
var o=this.__N.getWindows();
var r=this._minZIndex-1;
var q=false;
var p,n=null;

for(var i=0,l=o.length;i<l;i++){p=o[i];

if(!p.isVisible()){continue;
}r+=2;
p.setZIndex(r);
if(p.getModal()){this.__N.blockContent(r-1);
}q=q||p.isActive();
n=p;
}
if(!q){this.__N.setActiveWindow(n);
}},bringToFront:function(c){var d=this.__N.getWindows();
var e=qx.lang.Array.remove(d,c);

if(e){d.push(c);
this.updateStack();
}},sendToBack:function(f){var g=this.__N.getWindows();
var h=qx.lang.Array.remove(g,f);

if(h){g.unshift(f);
this.updateStack();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var K="Boolean",J="qx.event.type.Event",I="captionbar",H="_applyCaptionBarChange",G="maximize-button",F="restore-button",E="minimize-button",D="close-button",C="title",B="icon",bq="maximized",bp="execute",bo="pane",bn="statusbar-text",bm="statusbar",bl="String",bk="normal",bj="active",bi="beforeClose",bh="beforeMinimize",R="mousedown",S="changeStatus",P="changeIcon",Q="excluded",N="dblclick",O="_applyActive",L="beforeRestore",M="minimize",T="changeModal",U="_applyShowStatusbar",Y="_applyStatus",X="qx.ui.window.Window",bb="changeCaption",ba="focusout",bd="beforeMaximize",bc="maximize",W="restore",bg="window",bf="close",be="changeActive",V="minimized";
qx.Class.define(X,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(s,t){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(I);
this._createChildControl(bo);
if(t!=null){this.setIcon(t);
}
if(s!=null){this.setCaption(s);
}this._updateCaptionBar();
this.addListener(R,this._onWindowMouseDown,this,true);
this.addListener(ba,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
{};
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":J,"close":J,"beforeMinimize":J,"minimize":J,"beforeMaximize":J,"maximize":J,"beforeRestore":J,"restore":J},properties:{appearance:{refine:true,init:bg},visibility:{refine:true,init:Q},focusable:{refine:true,init:true},active:{check:K,init:false,apply:O,event:be},modal:{check:K,init:false,event:T},caption:{apply:H,event:bb,nullable:true},icon:{check:bl,nullable:true,apply:H,event:P,themeable:true},status:{check:bl,nullable:true,apply:Y,event:S},showClose:{check:K,init:true,apply:H,themeable:true},showMaximize:{check:K,init:true,apply:H,themeable:true},showMinimize:{check:K,init:true,apply:H,themeable:true},allowClose:{check:K,init:true,apply:H},allowMaximize:{check:K,init:true,apply:H},allowMinimize:{check:K,init:true,apply:H},showStatusbar:{check:K,init:false,apply:U}},members:{__L:null,__M:null,getChildrenContainer:function(){return this.getChildControl(bo);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);
},_createChildControlImpl:function(a){var b;

switch(a){case bm:b=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(b);
b.add(this.getChildControl(bn));
break;
case bn:b=new qx.ui.basic.Label();
b.setValue(this.getStatus());
break;
case bo:b=new qx.ui.container.Composite();
this._add(b,{flex:1});
break;
case I:var d=new qx.ui.layout.Grid();
d.setRowFlex(0,1);
d.setColumnFlex(1,1);
b=new qx.ui.container.Composite(d);
this._add(b);
b.addListener(N,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(b);
break;
case B:b=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(I).add(b,{row:0,column:0});
break;
case C:b=new qx.ui.basic.Label(this.getCaption());
b.setWidth(0);
b.setAllowGrowX(true);
var c=this.getChildControl(I);
c.add(b,{row:0,column:1});
break;
case E:b=new qx.ui.form.Button();
b.setFocusable(false);
b.addListener(bp,this._onMinimizeButtonClick,this);
this.getChildControl(I).add(b,{row:0,column:2});
break;
case F:b=new qx.ui.form.Button();
b.setFocusable(false);
b.addListener(bp,this._onRestoreButtonClick,this);
this.getChildControl(I).add(b,{row:0,column:3});
break;
case G:b=new qx.ui.form.Button();
b.setFocusable(false);
b.addListener(bp,this._onMaximizeButtonClick,this);
this.getChildControl(I).add(b,{row:0,column:4});
break;
case D:b=new qx.ui.form.Button();
b.setFocusable(false);
b.addListener(bp,this._onCloseButtonClick,this);
this.getChildControl(I).add(b,{row:0,column:6});
break;
}return b||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,a);
},_updateCaptionBar:function(){var i;
var j=this.getIcon();

if(j){this.getChildControl(B).setSource(j);
this._showChildControl(B);
}else{this._excludeChildControl(B);
}var h=this.getCaption();

if(h){this.getChildControl(C).setValue(h);
this._showChildControl(C);
}else{this._excludeChildControl(C);
}
if(this.getShowMinimize()){this._showChildControl(E);
i=this.getChildControl(E);
this.getAllowMinimize()?i.resetEnabled():i.setEnabled(false);
}else{this._excludeChildControl(E);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(F);
this._excludeChildControl(G);
}else{this._showChildControl(G);
this._excludeChildControl(F);
}i=this.getChildControl(G);
this.getAllowMaximize()?i.resetEnabled():i.setEnabled(false);
}else{this._excludeChildControl(G);
this._excludeChildControl(F);
}
if(this.getShowClose()){this._showChildControl(D);
i=this.getChildControl(D);
this.getAllowClose()?i.resetEnabled():i.setEnabled(false);
}else{this._excludeChildControl(D);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(bi,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(bf);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var q=parent.getBounds();

if(q){var r=this.getSizeHint();
var p=Math.round((q.width-r.width)/2);
var top=Math.round((q.height-r.height)/2);

if(top<0){top=0;
}this.moveTo(p,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(bd,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var br=this.getLayoutProperties();
this.__M=br.left===undefined?0:br.left;
this.__L=br.top===undefined?0:br.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(bq);
this._updateCaptionBar();
this.fireEvent(bc);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(bh,qx.event.type.Event,[false,true])){var o=this.getLayoutProperties();
this.__M=o.left===undefined?0:o.left;
this.__L=o.top===undefined?0:o.top;
this.removeState(bq);
this.hide();
this.fireEvent(M);
}},restore:function(){if(this.getMode()===bk){return;
}
if(this.fireNonBubblingEvent(L,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var k=this.__M;
var top=this.__L;
this.setLayoutProperties({edge:null,left:k,top:top});
this.removeState(bq);
this._updateCaptionBar();
this.fireEvent(W);
}},moveTo:function(l,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:l,top:top});
},isMaximized:function(){return this.hasState(bq);
},getMode:function(){if(!this.isVisible()){return V;
}else{if(this.isMaximized()){return bq;
}else{return bk;
}}},_applyActive:function(m,n){if(n){this.removeState(bj);
}else{this.addState(bj);
}},_getContentPaddingTarget:function(){return this.getChildControl(bo);
},_applyShowStatusbar:function(w,x){if(w){this._showChildControl(bm);
}else{this._excludeChildControl(bm);
}},_applyCaptionBarChange:function(u,v){this._updateCaptionBar();
},_applyStatus:function(y,z){var A=this.getChildControl(bn,true);

if(A){A.setValue(y);
}},_applyCaption:function(bt,bu){{};
this.getChildControl(C).setValue(bt);
},_applyIcon:function(f,g){{};
this.getChildControl(B).setSource(f);
},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bs=e.getRelatedTarget();

if(bs!=null&&!qx.ui.core.Widget.contains(this,bs)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(E).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(F).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(G).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(D).reset();
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var g="Number",f="qx.event.type.Event",e="_applyFirstColumnX",d="Integer",c="qx.ui.table.pane.Model",b="_applyMaxColumnCount",a="visibilityChangedPre";
qx.Class.define(c,{extend:qx.core.Object,construct:function(n){qx.core.Object.call(this);
n.addListener(a,this._onColVisibilityChanged,this);
this.__Cf=n;
},events:{"modelChanged":f},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:d,init:0,apply:e},maxColumnCount:{check:g,init:-1,apply:b}},members:{__Cg:null,__Cf:null,_applyFirstColumnX:function(v,w){this.__Cg=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(t,u){this.__Cg=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(h){this.__Cf=h;
this.__Cg=null;
},_onColVisibilityChanged:function(m){this.__Cg=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__Cg==null){var y=this.getFirstColumnX();
var A=this.getMaxColumnCount();
var z=this.__Cf.getVisibleColumnCount();

if(A==-1||(y+A)>z){this.__Cg=z-y;
}else{this.__Cg=A;
}}return this.__Cg;
},getColumnAtX:function(o){var p=this.getFirstColumnX();
return this.__Cf.getVisibleColumnAtX(p+o);
},getX:function(q){var r=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var x=this.__Cf.getVisibleX(q)-r;

if(x>=0&&(s==-1||x<s)){return x;
}else{return -1;
}},getColumnLeft:function(i){var l=0;
var k=this.getColumnCount();

for(var x=0;x<k;x++){var j=this.getColumnAtX(x);

if(j==i){return l;
}l+=this.__Cf.getColumnWidth(j);
}return -1;
},getTotalWidth:function(){var B=0;
var C=this.getColumnCount();

for(var x=0;x<C;x++){var D=this.getColumnAtX(x);
B+=this.__Cf.getColumnWidth(D);
}return B;
}},destruct:function(){this.__Cf=null;
}});
})();
(function(){var h="qx.event.type.Data",g="EVENT_TYPE_DATA_CHANGED",f="qx.ui.table.ITableModel",e="New code should not use this. Instead, use the text string 'dataChanged' literally.",d="New code should not use this. Instead, use the text string 'metaDataChanged' literally.",c="qx.event.type.Event",b="EVENT_TYPE_META_DATA_CHANGED";
qx.Interface.define(f,{events:{"dataChanged":h,"metaDataChanged":c,"sorted":h},statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},members:{getRowCount:function(){},getRowData:function(i){},getColumnCount:function(){},getColumnId:function(a){},getColumnIndexById:function(o){},getColumnName:function(n){},isColumnEditable:function(A){},isColumnSortable:function(m){},sortByColumn:function(w,x){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(p,q){},getValue:function(u,v){},getValueById:function(y,z){},setValue:function(r,s,t){},setValueById:function(j,k,l){}}});
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,g,e);
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,b,d);
})();
(function(){var j="metaDataChanged",h="qx.event.type.Data",g="qx.event.type.Event",f="abstract",e="qx.ui.table.model.Abstract";
qx.Class.define(e,{type:f,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":h,"metaDataChanged":g,"sorted":h},construct:function(){qx.core.Object.call(this);
this.__wi=[];
this.__wj=[];
this.__wk={};
},members:{__wi:null,__wj:null,__wk:null,__wl:null,getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(C){return null;
},isColumnEditable:function(B){return false;
},isColumnSortable:function(l){return false;
},sortByColumn:function(v,w){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(E,F){},getValue:function(x,y){throw new Error("getValue is abstract");
},getValueById:function(z,A){return this.getValue(this.getColumnIndexById(z),A);
},setValue:function(r,s,t){throw new Error("setValue is abstract");
},setValueById:function(n,o,p){this.setValue(this.getColumnIndexById(n),o,p);
},getColumnCount:function(){return this.__wi.length;
},getColumnIndexById:function(u){return this.__wk[u];
},getColumnId:function(q){return this.__wi[q];
},getColumnName:function(d){return this.__wj[d];
},setColumnIds:function(D){this.__wi=D;
this.__wk={};

for(var i=0;i<D.length;i++){this.__wk[D[i]]=i;
}this.__wj=new Array(D.length);
if(!this.__wl){this.fireEvent(j);
}},setColumnNamesByIndex:function(k){if(this.__wi.length!=k.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__wi.length+" != "+k.length);
}this.__wj=k;
this.fireEvent(j);
},setColumnNamesById:function(m){this.__wj=new Array(this.__wi.length);

for(var i=0;i<this.__wi.length;++i){this.__wj[i]=m[this.__wi[i]];
}},setColumns:function(a,b){var c=this.__wi.length==0||b;

if(b==null){if(this.__wi.length==0){b=a;
}else{b=this.__wi;
}}
if(b.length!=a.length){throw new Error("columnIdArr and columnNameArr have different length: "+b.length+" != "+a.length);
}
if(c){this.__wl=true;
this.setColumnIds(b);
this.__wl=false;
}this.setColumnNamesByIndex(a);
}},destruct:function(){this.__wi=this.__wj=this.__wk=null;
}});
})();
(function(){var n="dataChanged",m="metaDataChanged",l="qx.ui.table.model.Simple",k="Boolean",h="sorted";
qx.Class.define(l,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__wm=[];
this.__wn=-1;
this.__wo=[];
this.__wp=null;
},properties:{caseSensitiveSorting:{check:k,init:true}},statics:{_defaultSortComparatorAscending:function(s,t){var u=s[arguments.callee.columnIndex];
var v=t[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(u)&&qx.lang.Type.isNumber(v)){var w=isNaN(u)?isNaN(v)?0:1:isNaN(v)?-1:null;

if(w!=null){return w;
}}return (u>v)?1:((u==v)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(a,b){var c=(a[arguments.callee.columnIndex].toLowerCase?a[arguments.callee.columnIndex].toLowerCase():a[arguments.callee.columnIndex]);
var d=(b[arguments.callee.columnIndex].toLowerCase?b[arguments.callee.columnIndex].toLowerCase():b[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(c)&&qx.lang.Type.isNumber(d)){var e=isNaN(c)?isNaN(d)?0:1:isNaN(d)?-1:null;

if(e!=null){return e;
}}return (c>d)?1:((c==d)?0:-1);
},_defaultSortComparatorDescending:function(bE,bF){var bG=bE[arguments.callee.columnIndex];
var bH=bF[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(bG)&&qx.lang.Type.isNumber(bH)){var bI=isNaN(bG)?isNaN(bH)?0:1:isNaN(bH)?-1:null;

if(bI!=null){return bI;
}}return (bG<bH)?1:((bG==bH)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(bx,by){var bz=(bx[arguments.callee.columnIndex].toLowerCase?bx[arguments.callee.columnIndex].toLowerCase():bx[arguments.callee.columnIndex]);
var bA=(by[arguments.callee.columnIndex].toLowerCase?by[arguments.callee.columnIndex].toLowerCase():by[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(bz)&&qx.lang.Type.isNumber(bA)){var bB=isNaN(bz)?isNaN(bA)?0:1:isNaN(bA)?-1:null;

if(bB!=null){return bB;
}}return (bz<bA)?1:((bz==bA)?0:-1);
}},members:{__wm:null,__wp:null,__wq:null,__wo:null,__wn:null,__wr:null,getRowData:function(f){var g=this.__wm[f];

if(g==null||g.originalData==null){return g;
}else{return g.originalData;
}},getRowDataAsMap:function(C){var E=this.__wm[C];
var D={};

for(var F=0;F<this.getColumnCount();F++){D[this.getColumnId(F)]=E[F];
}return D;
},getDataAsMapArray:function(){var bK=this.getRowCount();
var bJ=[];

for(var i=0;i<bK;i++){bJ.push(this.getRowDataAsMap(i));
}return bJ;
},setEditable:function(be){this.__wp=[];

for(var bf=0;bf<this.getColumnCount();bf++){this.__wp[bf]=be;
}this.fireEvent(m);
},setColumnEditable:function(bq,br){if(br!=this.isColumnEditable(bq)){if(this.__wp==null){this.__wp=[];
}this.__wp[bq]=br;
this.fireEvent(m);
}},isColumnEditable:function(bw){return this.__wp?(this.__wp[bw]==true):false;
},setColumnSortable:function(P,Q){if(Q!=this.isColumnSortable(P)){if(this.__wq==null){this.__wq=[];
}this.__wq[P]=Q;
this.fireEvent(m);
}},isColumnSortable:function(B){return (this.__wq?(this.__wq[B]!==false):true);
},sortByColumn:function(R,S){var V;
var U=this.__wo[R];

if(U){V=(S?U.ascending:U.descending);
}else{if(this.getCaseSensitiveSorting()){V=(S?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{V=(S?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}V.columnIndex=R;
this.__wm.sort(V);
this.__wn=R;
this.__wr=S;
var T={columnIndex:R,ascending:S};
this.fireDataEvent(h,T);
this.fireEvent(m);
},setSortMethods:function(bb,bc){var bd;

if(qx.lang.Type.isFunction(bc)){bd={ascending:bc,descending:function(bC,bD){return bc(bD,bC);
}};
}else{bd=bc;
}this.__wo[bb]=bd;
},getSortMethods:function(O){return this.__wo[O];
},clearSorting:function(){if(this.__wn!=-1){this.__wn=-1;
this.__wr=true;
this.fireEvent(m);
}},getSortColumnIndex:function(){return this.__wn;
},isSortAscending:function(){return this.__wr;
},getRowCount:function(){return this.__wm.length;
},getValue:function(G,H){if(H<0||H>=this.__wm.length){throw new Error("this.__rowArr out of bounds: "+H+" (0.."+this.__wm.length+")");
}return this.__wm[H][G];
},setValue:function(o,p,q){if(this.__wm[p][o]!=q){this.__wm[p][o]=q;
if(this.hasListener(n)){var r={firstRow:p,lastRow:p,firstColumn:o,lastColumn:o};
this.fireDataEvent(n,r);
}
if(o==this.__wn){this.clearSorting();
}}},setData:function(bk,bl){this.__wm=bk;
if(this.hasListener(n)){var bm={firstRow:0,lastRow:bk.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(n,bm);
}
if(bl!==false){this.clearSorting();
}},getData:function(){return this.__wm;
},setDataAsMapArray:function(bn,bo,bp){this.setData(this._mapArray2RowArr(bn,bo),bp);
},addRows:function(x,y,z){if(y==null){y=this.__wm.length;
}x.splice(0,0,y,0);
Array.prototype.splice.apply(this.__wm,x);
var A={firstRow:y,lastRow:this.__wm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(n,A);

if(z!==false){this.clearSorting();
}},addRowsAsMapArray:function(bL,bM,bN,bO){this.addRows(this._mapArray2RowArr(bL,bN),bM,bO);
},setRows:function(bs,bt,bu){if(bt==null){bt=0;
}bs.splice(0,0,bt,bs.length);
Array.prototype.splice.apply(this.__wm,bs);
var bv={firstRow:bt,lastRow:this.__wm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(n,bv);

if(bu!==false){this.clearSorting();
}},setRowsAsMapArray:function(bg,bh,bi,bj){this.setRows(this._mapArray2RowArr(bg,bi),bh,bj);
},removeRows:function(W,X,Y){this.__wm.splice(W,X);
var ba={firstRow:W,lastRow:this.__wm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:W,removeCount:X};
this.fireDataEvent(n,ba);

if(Y!==false){this.clearSorting();
}},_mapArray2RowArr:function(I,J){var N=I.length;
var K=this.getColumnCount();
var M=new Array(N);
var L;

for(var i=0;i<N;++i){L=[];

if(J){L.originalData=I[i];
}
for(var j=0;j<K;++j){L[j]=I[i][this.getColumnId(j)];
}M[i]=L;
}return M;
}},destruct:function(){this.__wm=this.__wp=this.__wo=this.__wq=null;
}});
})();
(function(){var cd="",cc="!",cb="'!",ca="'",bY="Expected '",bX="' (rgb(",bW=",",bV=")), but found value '",bU="Event (",bT="Expected value to be the CSS color '",dj="' but found ",di="The value '",dh="qx.core.Object",dg="Expected value to be an array but found ",df=") was fired.",de="Expected value to be an integer >= 0 but found ",dd="' to be not equal with '",dc="' to '",db="qx.ui.core.Widget",da="Called assertTrue with '",ck="Expected value to be a map but found ",cl="The function did not raise an exception!",ci="Expected value to be undefined but found ",cj="Expected value to be a DOM element but found  '",cg="Expected value to be a regular expression but found ",ch="' to implement the interface '",ce="Expected value to be null but found ",cf="Invalid argument 'type'",cs="Called assert with 'false'",ct="Assertion error! ",cF="Expected value to be a string but found ",cB="null",cN="' but found '",cI="' must must be a key of the map '",cV="The String '",cS="Expected value not to be undefined but found ",cx="qx.util.ColorUtil",cY=": ",cX="The raised exception does not have the expected type! ",cW=") not fired.",cw="qx.core.Assert",cz="Expected value to be typeof object but found ",cA="' (identical) but found '",cD="' must have any of the values defined in the array '",cG="Expected value to be a number but found ",cJ="Called assertFalse with '",cP="]",cU="Expected value to be a qooxdoo object but found ",cm="' arguments.",cn="Expected value not to be null but found ",cy="Array[",cM="' does not match the regular expression '",cL="' to be not identical with '",cK="' arguments but found '",cR="', which cannot be converted to a CSS color!",cQ="Expected object '",cH="qx.core.AssertionError",cO="Expected value to be a boolean but found ",bQ="))!",cT="Expected value to be a qooxdoo widget but found ",co="Expected value '%1' to be in the range '%2'..'%3'!",cp="Expected value to be typeof '",cC="Expected value to be typeof function but found ",bR="Expected value to be an integer but found ",bS="Called fail().",cv="The parameter 're' must be a string or a regular expression.",cq="Expected value to be a number >= 0 but found ",cr="Expected value to be instanceof '",cu="Wrong number of arguments given. Expected '",cE="object";
qx.Class.define(cw,{statics:{__rV:true,__rW:function(bp,bq){var br=cd;

for(var i=1,l=arguments.length;i<l;i++){br=br+this.__rX(arguments[i]);
}var bt=ct+bp+cY+br;

if(this.__rV){qx.Bootstrap.error(bt);
}
if(qx.Class.isDefined(cH)){var bs=new qx.core.AssertionError(bp,br);

if(this.__rV){qx.Bootstrap.error("Stack trace: \n"+bs.getStackTrace());
}throw bs;
}else{throw new Error(bt);
}},__rX:function(dz){var dA;

if(dz===null){dA=cB;
}else if(qx.lang.Type.isArray(dz)&&dz.length>10){dA=cy+dz.length+cP;
}else if((dz instanceof Object)&&(dz.toString==null)){dA=qx.lang.Json.stringify(dz,null,2);
}else{try{dA=dz.toString();
}catch(e){dA=cd;
}}return dA;
},assert:function(by,bz){by==true||this.__rW(bz||cd,cs);
},fail:function(bx){this.__rW(bx||cd,bS);
},assertTrue:function(bg,bh){(bg===true)||this.__rW(bh||cd,da,bg,ca);
},assertFalse:function(R,S){(R===false)||this.__rW(S||cd,cJ,R,ca);
},assertEquals:function(bE,bF,bG){bE==bF||this.__rW(bG||cd,bY,bE,cN,bF,cb);
},assertNotEquals:function(t,u,v){t!=u||this.__rW(v||cd,bY,t,dd,u,cb);
},assertIdentical:function(bm,bn,bo){bm===bn||this.__rW(bo||cd,bY,bm,cA,bn,cb);
},assertNotIdentical:function(bd,be,bf){bd!==be||this.__rW(bf||cd,bY,bd,cL,be,cb);
},assertNotUndefined:function(dD,dE){dD!==undefined||this.__rW(dE||cd,cS,dD,cc);
},assertUndefined:function(N,O){N===undefined||this.__rW(O||cd,ci,N,cc);
},assertNotNull:function(k,m){k!==null||this.__rW(m||cd,cn,k,cc);
},assertNull:function(bk,bl){bk===null||this.__rW(bl||cd,ce,bk,cc);
},assertJsonEquals:function(bu,bv,bw){this.assertEquals(qx.lang.Json.stringify(bu),qx.lang.Json.stringify(bv),bw);
},assertMatch:function(B,C,D){this.assertString(B);
this.assert(qx.lang.Type.isRegExp(C)||qx.lang.Type.isString(C),cv);
B.search(C)>=0||this.__rW(D||cd,cV,B,cM,C.toString(),cb);
},assertArgumentsCount:function(dI,dJ,dK,dL){var dM=dI.length;
(dM>=dJ&&dM<=dK)||this.__rW(dL||cd,cu,dJ,dc,dK,cK,arguments.length,cm);
},assertEventFired:function(dk,event,dl,dm,dn){var dq=false;
var dp=function(e){if(dm){dm.call(dk,e);
}dq=true;
};
var dr=dk.addListener(event,dp,dk);
dl.call();
dq===true||this.__rW(dn||cd,bU,event,cW);
dk.removeListenerById(dr);
},assertEventNotFired:function(n,event,o,p){var r=false;
var q=function(e){r=true;
};
var s=n.addListener(event,q,n);
o.call();
r===false||this.__rW(p||cd,bU,event,df);
n.removeListenerById(s);
},assertException:function(dP,dQ,dR,dS){var dQ=dQ||Error;
var dT;

try{this.__rV=false;
dP();
}catch(bH){dT=bH;
}finally{this.__rV=true;
}
if(dT==null){this.__rW(dS||cd,cl);
}dT instanceof dQ||this.__rW(dS||cd,cX,dQ);

if(dR){this.assertMatch(dT.toString(),dR,dS);
}},assertInArray:function(T,U,V){U.indexOf(T)!==-1||this.__rW(V||cd,di,T,cD,U,ca);
},assertArrayEquals:function(dU,dV,dW){this.assertArray(dU,dW);
this.assertArray(dV,dW);
this.assertEquals(dU.length,dV.length,dW);

for(var i=0;i<dU.length;i++){this.assertIdentical(dU[i],dV[i],dW);
}},assertKeyInMap:function(ba,bb,bc){bb[ba]!==undefined||this.__rW(bc||cd,di,ba,cI,bb,ca);
},assertFunction:function(a,b){qx.lang.Type.isFunction(a)||this.__rW(b||cd,cC,a,cc);
},assertString:function(f,g){qx.lang.Type.isString(f)||this.__rW(g||cd,cF,f,cc);
},assertBoolean:function(h,j){qx.lang.Type.isBoolean(h)||this.__rW(j||cd,cO,h,cc);
},assertNumber:function(bi,bj){(qx.lang.Type.isNumber(bi)&&isFinite(bi))||this.__rW(bj||cd,cG,bi,cc);
},assertPositiveNumber:function(bO,bP){(qx.lang.Type.isNumber(bO)&&isFinite(bO)&&bO>=0)||this.__rW(bP||cd,cq,bO,cc);
},assertInteger:function(dB,dC){(qx.lang.Type.isNumber(dB)&&isFinite(dB)&&dB%1===0)||this.__rW(dC||cd,bR,dB,cc);
},assertPositiveInteger:function(W,X){var Y=(qx.lang.Type.isNumber(W)&&isFinite(W)&&W%1===0&&W>=0);
Y||this.__rW(X||cd,de,W,cc);
},assertInRange:function(E,F,G,H){(E>=F&&E<=G)||this.__rW(H||cd,qx.lang.String.format(co,[E,F,G]));
},assertObject:function(y,z){var A=y!==null&&(qx.lang.Type.isObject(y)||typeof y===cE);
A||this.__rW(z||cd,cz,(y),cc);
},assertArray:function(w,x){qx.lang.Type.isArray(w)||this.__rW(x||cd,dg,w,cc);
},assertMap:function(dN,dO){qx.lang.Type.isObject(dN)||this.__rW(dO||cd,ck,dN,cc);
},assertRegExp:function(c,d){qx.lang.Type.isRegExp(c)||this.__rW(d||cd,cg,c,cc);
},assertType:function(K,L,M){this.assertString(L,cf);
typeof (K)===L||this.__rW(M||cd,cp,L,dj,K,cc);
},assertInstance:function(bI,bJ,bK){var bL=bJ.classname||bJ+cd;
bI instanceof bJ||this.__rW(bK||cd,cr,bL,dj,bI,cc);
},assertInterface:function(dF,dG,dH){qx.Class.implementsInterface(dF,dG)||this.__rW(dH||cd,cQ,dF,ch,dG,cb);
},assertCssColor:function(ds,dt,du){var dv=qx.Class.getByName(cx);

if(!dv){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dx=dv.stringToRgb(ds);

try{var dw=dv.stringToRgb(dt);
}catch(bD){this.__rW(du||cd,bT,ds,bX,dx.join(bW),bV,dt,cR);
}var dy=dx[0]==dw[0]&&dx[1]==dw[1]&&dx[2]==dw[2];
dy||this.__rW(du||cd,bT,dx,bX,dx.join(bW),bV,dt,bX,dw.join(bW),bQ);
},assertElement:function(P,Q){!!(P&&P.nodeType===1)||this.__rW(Q||cd,cj,P,cb);
},assertQxObject:function(I,J){this.__rY(I,dh)||this.__rW(J||cd,cU,I,cc);
},assertQxWidget:function(bM,bN){this.__rY(bM,db)||this.__rW(bN||cd,cT,bM,cc);
},__rY:function(bA,bB){if(!bA){return false;
}var bC=bA.constructor;

while(bC){if(bC.classname===bB){return true;
}bC=bC.superclass;
}return false;
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__sc:null,__sd:null,__se:null,__sf:null,stringify:function(bv,bw,bx){this.__sc=p;
this.__sd=p;
this.__sf=[];

if(qx.lang.Type.isNumber(bx)){var bx=Math.min(10,Math.floor(bx));

for(var i=0;i<bx;i+=1){this.__sd+=O;
}}else if(qx.lang.Type.isString(bx)){if(bx.length>10){bx=bx.slice(0,10);
}this.__sd=bx;
}if(bw&&(qx.lang.Type.isFunction(bw)||qx.lang.Type.isArray(bw))){this.__se=bw;
}else{this.__se=null;
}return this.__sg(p,{'':bv});
},__sg:function(bm,bn){var bq=this.__sc,bo,br=bn[bm];
if(br&&qx.lang.Type.isFunction(br.toJSON)){br=br.toJSON(bm);
}else if(qx.lang.Type.isDate(br)){br=this.dateToJSON(br);
}if(typeof this.__se===e){br=this.__se.call(bn,bm,br);
}
if(br===null){return h;
}
if(br===undefined){return undefined;
}switch(qx.lang.Type.getClass(br)){case R:return this.__sh(br);
case B:return isFinite(br)?String(br):h;
case Q:return String(br);
case J:this.__sc+=this.__sd;
bo=[];

if(this.__sf.indexOf(br)!==-1){throw new TypeError(V);
}this.__sf.push(br);
var length=br.length;

for(var i=0;i<length;i+=1){bo[i]=this.__sg(i,br)||h;
}this.__sf.pop();
if(bo.length===0){var bp=s;
}else if(this.__sc){bp=E+this.__sc+bo.join(Y+this.__sc)+b+bq+l;
}else{bp=N+bo.join(d)+l;
}this.__sc=bq;
return bp;
case z:this.__sc+=this.__sd;
bo=[];

if(this.__sf.indexOf(br)!==-1){throw new TypeError(V);
}this.__sf.push(br);
if(this.__se&&typeof this.__se===f){var length=this.__se.length;

for(var i=0;i<length;i+=1){var k=this.__se[i];

if(typeof k===W){var v=this.__sg(k,br);

if(v){bo.push(this.__sh(k)+(this.__sc?g:m)+v);
}}}}else{for(var k in br){if(Object.hasOwnProperty.call(br,k)){var v=this.__sg(k,br);

if(v){bo.push(this.__sh(k)+(this.__sc?g:m)+v);
}}}}this.__sf.pop();
if(bo.length===0){var bp=A;
}else if(this.__sc){bp=w+this.__sc+bo.join(Y+this.__sc)+b+bq+S;
}else{bp=C+bo.join(d)+S;
}this.__sc=bq;
return bp;
}},dateToJSON:function(bs){var bt=function(n){return n<10?U+n:n;
};
var bu=function(n){var be=bt(n);
return n<100?U+be:be;
};
return isFinite(bs.valueOf())?bs.getUTCFullYear()+T+bt(bs.getUTCMonth()+1)+T+bt(bs.getUTCDate())+M+bt(bs.getUTCHours())+m+bt(bs.getUTCMinutes())+m+bt(bs.getUTCSeconds())+F+bu(bs.getUTCMilliseconds())+q:null;
},__sh:function(bb){var bc={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bd=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bd.lastIndex=0;

if(bd.test(bb)){return o+
bb.replace(bd,function(a){var c=bc[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bb+o;
}},parse:function(bj,bk){var bl=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bl.lastIndex=0;
if(bl.test(bj)){bj=bj.replace(bl,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bj.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+bj+D);
return typeof bk===e?this.__si({'':j},p,bk):j;
}throw new SyntaxError(P);
},__si:function(bf,bg,bh){var bi=bf[bg];

if(bi&&typeof bi===f){for(var k in bi){if(Object.hasOwnProperty.call(bi,k)){var v=this.__si(bi,k,bh);

if(v!==undefined){bi[k]=v;
}else{delete bi[k];
}}}}return bh.call(bf,bg,bi);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var A="number",z="dataChanged",y="object",x="treeOpenWhileEmpty",w="treeOpenWithContent",v="bSelected",u="qx.ui.treevirtual.SimpleTreeDataModel",t="bOpened",s="treeClose";
qx.Class.define(u,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this._rowArr=[];
this._nodeArr=[];
this._nodeRowMap=[];
this._treeColumn=0;
this._selections={};
this._nodeArr.push(this.self(arguments).__AJ());
this.__AI=null;
},statics:{__AJ:function(){return {label:"<virtual root>",nodeId:0,bOpened:true,children:[]};
},Type:{LEAF:1,BRANCH:2}},members:{__AK:null,__AI:null,_rowArr:null,_nodeArr:null,_nodeRowMap:null,_treeColumn:null,_selections:null,setTree:function(bB){this.__AK=bB;
},getTree:function(){return this.__AK;
},setEditable:function(S){this.__AI=[];

for(var T=0;T<this.getColumnCount();T++){this.__AI[T]=S;
}this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
},setColumnEditable:function(L,M){if(M!=this.isColumnEditable(L)){if(this.__AI==null){this.__AI=[];
}this.__AI[L]=M;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},isColumnEditable:function(Y){return (this.__AI?this.__AI[Y]==true:false);
},isColumnSortable:function(bw){return false;
},sortByColumn:function(W,X){throw new Error("Trees can not be sorted by column");
},getSortColumnIndex:function(){return -1;
},setTreeColumn:function(f){this._treeColumn=f;
},getTreeColumn:function(){return this._treeColumn;
},getRowCount:function(){return this._rowArr.length;
},getRowData:function(ba){return this._rowArr[ba];
},getValue:function(U,V){if(V<0||V>=this._rowArr.length){throw new Error("this._rowArr row "+"("+V+") out of bounds: "+this._rowArr+" (0.."+(this._rowArr.length-1)+")");
}
if(U<0||U>=this._rowArr[V].length){throw new Error("this._rowArr column "+"("+U+") out of bounds: "+this._rowArr[V]+" (0.."+(this._rowArr[V].length-1)+")");
}return this._rowArr[V][U];
},setValue:function(bp,bq,br){if(bp==this._treeColumn){return ;
}var bs=this.getNodeFromRow(bq);

if(bs.columnData[bp]!=br){bs.columnData[bp]=br;
this.setData();
if(this.hasListener(z)){var bt={firstRow:bs.nodeId,lastRow:bs.nodeId,firstColumn:bp,lastColumn:bp};
this.fireDataEvent(z,bt);
}}},_addNode:function(g,h,k,l,m,n,o){var r;
if(g){r=this._nodeArr[g];

if(!r){throw new Error("Request to add a child to a non-existent parent");
}if(r.type==qx.ui.treevirtual.SimpleTreeDataModel.Type.LEAF){throw new Error("Sorry, a LEAF may not have children.");
}}else{r=this._nodeArr[0];
g=0;
}if(m==qx.ui.treevirtual.SimpleTreeDataModel.Type.LEAF){k=false;
l=false;
}var q=this._nodeArr.length;
var p={type:m,nodeId:q,parentNodeId:g,label:h,bSelected:false,bOpened:k,bHideOpenClose:l,icon:n,iconSelected:o,children:[],columnData:[]};
this._nodeArr.push(p);
r.children.push(q);
return q;
},addBranch:function(B,C,D,E,F,G){return this._addNode(B,C,D,E,qx.ui.treevirtual.SimpleTreeDataModel.Type.BRANCH,F,G);
},addLeaf:function(bx,by,bz,bA){return this._addNode(bx,by,false,false,qx.ui.treevirtual.SimpleTreeDataModel.Type.LEAF,bz,bA);
},prune:function(a,b){var c;
var d;

if(typeof (a)==y){c=a;
d=c.nodeId;
}else if(typeof (a)==A){d=a;
}else{throw new Error("Expected node object or node id");
}for(var i=this._nodeArr[d].children.length-1;i>=0;i--){this.prune(this._nodeArr[d].children[i],true);
}if(b&&d!=0){c=this._nodeArr[d];
qx.lang.Array.remove(this._nodeArr[c.parentNodeId].children,d);
if(this._selections[d]){delete this._selections[d];
}this._nodeArr[d]=null;
}},move:function(bb,bc){var bh;
var bd;
var bg;
var be;
bc=bc||0;

if(typeof (bb)==y){bh=bb;
bd=bh.nodeId;
}else if(typeof (bb)==A){bd=bb;
bh=this._nodeArr[bd];
}else{throw new Error("Expected move node object or node id");
}
if(typeof (bc)==y){bg=bc;
be=bg.nodeId;
}else if(typeof (bc)==A){be=bc;
bg=this._nodeArr[be];
}else{throw new Error("Expected parent node object or node id");
}if(bg.type==qx.ui.treevirtual.SimpleTreeDataModel.Type.LEAF){throw new Error("Sorry, a LEAF may not have children.");
}var bf=this._nodeArr[bh.parentNodeId];
qx.lang.Array.remove(bf.children,bd);
bg.children.push(bd);
this._nodeArr[bd].parentNodeId=be;
},setData:function(H){var J=this;
function I(){var bv=function(bi,bj){var bn=null;
var bm;
var bk=J._nodeArr[bi].children.length;

for(var i=0;i<bk;i++){bm=J._nodeArr[bi].children[i];
bn=J._nodeArr[bm];
if(bn==null){continue;
}bn.level=bj;
bn.bFirstChild=(i==0);
bn.lastChild=[i==bk-1];
var parent=J._nodeArr[bn.parentNodeId];
while(parent.nodeId){var bo=parent.lastChild[parent.lastChild.length-1];
bn.lastChild.unshift(bo);
parent=J._nodeArr[parent.parentNodeId];
}if(!bn.columnData){bn.columnData=[];
}
if(bn.columnData.length<J.getColumnCount()){bn.columnData[J.getColumnCount()-1]=null;
}var bl=[];
if(bn.columnData){for(var j=0;j<bn.columnData.length;j++){if(j==J._treeColumn){bl.push(bn);
}else{bl.push(bn.columnData[j]);
}}}else{bl.push(bn);
}if(bn.bSelected){bl.selected=true;
}J._nodeRowMap[bn.nodeId]=J._rowArr.length;
J._rowArr.push(bl);
if(bn.bOpened){bv(bm,bj+1);
}}};
J._rowArr=[];
J._nodeRowMap=[];
bv(0,1);
if(J.hasListener(z)){var bu={firstRow:0,lastRow:J._rowArr.length-1,firstColumn:0,lastColumn:J.getColumnCount()-1};
J.fireDataEvent(z,bu);
}}
if(H instanceof Array){for(var i=0;i<H.length;i++){if(H[i].selected){this._selections[i]=true;
}}this._nodeArr=H;
}else if(H!==null&&H!==undefined){throw new Error("Expected array of node objects or null/undefined; "+"got "+typeof (H));
}I();
},getData:function(){return this._nodeArr;
},clearData:function(){this._clearSelections();
this.setData([this.self(arguments).__AJ()]);
},setColumnData:function(P,Q,R){this._nodeArr[P].columnData[Q]=R;
},getColumnData:function(N,O){return this._nodeArr[N].columnData[O];
},setState:function(bC,bD){var bE;
var bJ;

if(typeof (bC)==y){bE=bC;
bJ=bE.nodeId;
}else if(typeof (bC)==A){bJ=bC;
bE=this._nodeArr[bJ];
}else{throw new Error("Expected node object or node id");
}
for(var bH in bD){switch(bH){case v:var bK=this.getRowFromNodeId(bJ);
var bF=this.getTree().getSelectionModel();
var bG=qx.ui.treevirtual.TreeVirtual;
var bL=(typeof (bK)===A&&this.getTree().getSelectionMode()!=bG.SelectionMode.NONE);
if(bD[bH]){this._selections[bJ]=true;
if(bL&&!bF.isSelectedIndex(bK)){bF.setSelectionInterval(bK,bK);
}}else{delete this._selections[bJ];
if(bL&&bF.isSelectedIndex(bK)){bF.removeSelectionInterval(bK,bK);
}}break;
case t:if(bD[bH]==bE.bOpened){break;
}var bI=this.__AK;
if(bE.bOpened){bI.fireDataEvent(s,bE);
}else{if(bE.children.length>0){bI.fireDataEvent(w,bE);
}else{bI.fireDataEvent(x,bE);
}}if(!bE.bHideOpenClose){bE.bOpened=!bE.bOpened;
bI.getSelectionModel()._resetSelection();
}this.setData();
break;
default:break;
}bE[bH]=bD[bH];
}},getNodeRowMap:function(){return this._nodeRowMap;
},getRowFromNodeId:function(e){return this._nodeRowMap[e];
},getNodeFromRow:function(K){return this._nodeArr[this._rowArr[K][this._treeColumn].nodeId];
},_clearSelections:function(){for(var bO in this._selections){this._nodeArr[bO].bSelected=false;
}this._selections={};
},getSelectedNodes:function(){var bM=[];

for(var bN in this._selections){bM.push(this._nodeArr[bN]);
}return bM;
}},destruct:function(){this._rowArr=this._nodeArr=this._nodeRowMap=this._selections=this.__AK=null;
}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__mf:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__mf=null;
},getInsets:function(){if(this.__mf){return this.__mf;
}var j=this._getDefaultInsets();
return this.__mf={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__mf=null;
}},destruct:function(){this.__mf=null;
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
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(u,v,w){qx.ui.decoration.Abstract.call(this);
if(u!=null){this.setWidth(u);
}
if(v!=null){this.setStyle(v);
}
if(w!=null){this.setColor(w);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[k,j,h,i],init:k,apply:o},color:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__qm:null,_getDefaultInsets:function(){var B=this.getWidth();
return {top:B,right:B,bottom:B,left:B};
},_isInitialized:function(){return !!this.__qm;
},getMarkup:function(){if(this.__qm){return this.__qm;
}var x={position:a,top:0,left:0};
var y=this.getWidth();
{};
var A=qx.theme.manager.Color.getInstance();
x.border=y+c+this.getStyle()+e+(A.resolve(this.getColor())||n);
var z=this._generateBackgroundMarkup(x);
return this.__qm=z;
},resize:function(p,q,r){var t=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(t||qx.bom.client.Feature.CONTENT_BOX){var s=this.getWidth()*2;
q-=s;
r-=s;
if(q<0){q=0;
}
if(r<0){r=0;
}}p.style.width=q+l;
p.style.height=r+l;
},tint:function(C,D){var E=qx.theme.manager.Color.getInstance();

if(D==null){D=this.getBackgroundColor();
}C.style.backgroundColor=E.resolve(D)||n;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__qm=null;
}});
})();
(function(){var f="px",e="qx.ui.decoration.Background",d="",c="_applyStyle",b="Color",a="absolute";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(o){qx.ui.decoration.Abstract.call(this);

if(o!=null){this.setBackgroundColor(o);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__mk:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mk;
},getMarkup:function(){if(this.__mk){return this.__mk;
}var j={position:a,top:0,left:0};
var k=this._generateBackgroundMarkup(j);
return this.__mk=k;
},resize:function(g,h,i){g.style.width=h+f;
g.style.height=i+f;
},tint:function(l,m){var n=qx.theme.manager.Color.getInstance();

if(m==null){m=this.getBackgroundColor();
}l.style.backgroundColor=n.resolve(m)||d;
},_applyStyle:function(){{};
}},destruct:function(){this.__mk=null;
}});
})();
(function(){var m="_applyStyle",l="solid",k="Color",j="",i="double",h="px ",g="dotted",f="_applyWidth",e="dashed",d="Number",I=" ",H="shorthand",G="px",F="widthTop",E="styleRight",D="styleLeft",C="widthLeft",B="widthBottom",A="styleTop",z="colorBottom",t="styleBottom",u="widthRight",r="colorLeft",s="colorRight",p="colorTop",q="scale",n="border-top",o="border-left",v="border-right",w="qx.ui.decoration.Single",y="border-bottom",x="absolute";
qx.Class.define(w,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){qx.ui.decoration.Abstract.call(this);
if(a!=null){this.setWidth(a);
}
if(b!=null){this.setStyle(b);
}
if(c!=null){this.setColor(c);
}},properties:{widthTop:{check:d,init:0,apply:f},widthRight:{check:d,init:0,apply:f},widthBottom:{check:d,init:0,apply:f},widthLeft:{check:d,init:0,apply:f},styleTop:{nullable:true,check:[l,g,e,i],init:l,apply:m},styleRight:{nullable:true,check:[l,g,e,i],init:l,apply:m},styleBottom:{nullable:true,check:[l,g,e,i],init:l,apply:m},styleLeft:{nullable:true,check:[l,g,e,i],init:l,apply:m},colorTop:{nullable:true,check:k,apply:m},colorRight:{nullable:true,check:k,apply:m},colorBottom:{nullable:true,check:k,apply:m},colorLeft:{nullable:true,check:k,apply:m},backgroundColor:{check:k,nullable:true,apply:m},left:{group:[C,D,r]},right:{group:[u,E,s]},top:{group:[F,A,p]},bottom:{group:[B,t,z]},width:{group:[F,u,B,C],mode:H},style:{group:[A,E,t,D],mode:H},color:{group:[p,s,z,r],mode:H}},members:{__oe:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__oe;
},getMarkup:function(J){if(this.__oe){return this.__oe;
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
return this.__oe=M;
},resize:function(R,S,T){var V=this.getBackgroundImage()&&this.getBackgroundRepeat()==q;

if(V||qx.bom.client.Feature.CONTENT_BOX){var U=this.getInsets();
S-=U.left+U.right;
T-=U.top+U.bottom;
if(S<0){S=0;
}
if(T<0){T=0;
}}R.style.width=S+G;
R.style.height=T+G;
},tint:function(O,P){var Q=qx.theme.manager.Color.getInstance();

if(P==null){P=this.getBackgroundColor();
}O.style.backgroundColor=Q.resolve(P)||j;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__oe=null;
}});
})();
(function(){var m="Number",l="_applyInsets",k="-l",j="insetRight",i="insetTop",h="_applyBaseImage",g="insetBottom",f="set",e="shorthand",d="-t",a="insetLeft",c="String",b="qx.ui.decoration.Grid";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(F,G){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__lS=new qx.ui.decoration.css3.BorderImage();

if(F){this.__lT(F);
}}else{this.__lS=new qx.ui.decoration.GridDiv(F);
}
if(G!=null){this.__lS.setInsets(G);
}},properties:{baseImage:{check:c,nullable:true,apply:h},insetLeft:{check:m,nullable:true,apply:l},insetRight:{check:m,nullable:true,apply:l},insetBottom:{check:m,nullable:true,apply:l},insetTop:{check:m,nullable:true,apply:l},insets:{group:[i,j,g,a],mode:e}},members:{__lS:null,getMarkup:function(){return this.__lS.getMarkup();
},resize:function(q,r,s){this.__lS.resize(q,r,s);
},tint:function(t,u){},getInsets:function(){return this.__lS.getInsets();
},_applyInsets:function(n,o,name){var p=f+qx.lang.String.firstUp(name);
this.__lS[p](n);
},_applyBaseImage:function(D,E){if(this.__lS instanceof qx.ui.decoration.GridDiv){this.__lS.setBaseImage(D);
}else{this.__lT(D);
}},__lT:function(v){this.__lS.setBorderImage(v);
var z=qx.util.AliasManager.getInstance().resolve(v);
var A=/(.*)(\.[a-z]+)$/.exec(z);
var x=A[1];
var y=A[2];
var w=qx.util.ResourceManager.getInstance();
var B=w.getImageHeight(x+d+y);
var C=w.getImageWidth(x+k+y);
this.__lS.setSlice([B,C]);
}},destruct:function(){this.__lS=null;
}});
})();
(function(){var o="_applyStyle",n='"></div>',m="Color",l="1px",k='<div style="',j='border:',i="1px solid ",h="",g=";",f="px",A='</div>',z="qx.ui.decoration.Beveled",y='<div style="position:absolute;top:1px;left:1px;',x='border-bottom:',w='border-right:',v='border-left:',u='border-top:',t="Number",s='<div style="position:absolute;top:1px;left:0px;',r='position:absolute;top:0px;left:1px;',p='<div style="overflow:hidden;font-size:0;line-height:0;">',q="absolute";
qx.Class.define(z,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(M,N,O){qx.ui.decoration.Abstract.call(this);
if(M!=null){this.setOuterColor(M);
}
if(N!=null){this.setInnerColor(N);
}
if(O!=null){this.setInnerOpacity(O);
}},properties:{innerColor:{check:m,nullable:true,apply:o},innerOpacity:{check:t,init:1,apply:o},outerColor:{check:m,nullable:true,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__pS:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__pS;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__pS){return this.__pS;
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
return this.__pS=b.join(h);
},resize:function(B,C,D){if(C<4){C=4;
}
if(D<4){D=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=C-2;
var outerHeight=D-2;
var J=outerWidth;
var I=outerHeight;
var innerWidth=C-4;
var innerHeight=D-4;
}else{var outerWidth=C;
var outerHeight=D;
var J=C-2;
var I=D-2;
var innerWidth=J;
var innerHeight=I;
}var L=f;
var H=B.childNodes[0].style;
H.width=outerWidth+L;
H.height=outerHeight+L;
var G=B.childNodes[1].style;
G.width=outerWidth+L;
G.height=I+L;
var F=B.childNodes[2].style;
F.width=J+L;
F.height=outerHeight+L;
var E=B.childNodes[3].style;
E.width=J+L;
E.height=I+L;
var K=B.childNodes[4].style;
K.width=innerWidth+L;
K.height=innerHeight+L;
},tint:function(P,Q){var R=qx.theme.manager.Color.getInstance();

if(Q==null){Q=this.getBackgroundColor();
}P.childNodes[3].style.backgroundColor=R.resolve(Q)||h;
}},destruct:function(){this.__pS=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bs="decoration/table/header-cell.png",br="decoration/form/input.png",bq="#f8f8f8",bp="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bo="#b6b6b6",bn="background-pane",bm="repeat-y",bl="decoration/form/input-focused.png",bk="#33508D",bj="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="black",p="decoration/form/button-c.png",q="decoration/scrollbar/scrollbar-bg-vertical.png",n="decoration/form/button.png",o="decoration/form/button-checked.png",B="decoration/tabview/tab-button-left-inactive.png",C="decoration/groupbox/groupbox.png",O="#FAFAFA",K="decoration/pane/pane.png",W="dotted",R="decoration/toolbar/toolbar-part.gif",bf="decoration/tabview/tab-button-top-inactive.png",bc="decoration/menu/bar-background.png",G="center",bi="decoration/tabview/tab-button-bottom-active.png",bh="decoration/form/button-hovered.png",bg="decoration/form/tooltip-error-arrow.png",F="decoration/window/captionbar-inactive.png",I="qx/decoration/Modern",J="decoration/menu/background.png",M="decoration/window/statusbar.png",P="border-focused",S="table-focus-indicator",Y="#F2F2F2",be="decoration/form/button-checked-c.png",v="decoration/scrollbar/scrollbar-bg-horizontal.png",w="qx.theme.modern.Decoration",H="#f4f4f4",V="decoration/shadow/shadow-small.png",U="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",bb="decoration/form/tooltip-error.png",ba="decoration/form/button-focused.png",Q="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",a="decoration/tabview/tab-button-right-active.png",bd="decoration/form/button-pressed.png",x="no-repeat",y="decoration/window/captionbar-active.png",L="decoration/tabview/tab-button-left-active.png",b="background-splitpane",c="decoration/form/button-checked-focused.png",E="#C5C5C5",z="decoration/toolbar/toolbar-gradient.png",A="decoration/tabview/tab-button-right-inactive.png",D="#b8b8b8",N="decoration/shadow/shadow.png";
qx.Theme.define(w,{aliases:{decoration:I},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bj,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bj,backgroundRepeat:l,bottom:[2,m,bk]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bk]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:C}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:W}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bg,backgroundPositionY:G,backgroundRepeat:x,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:v,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:q,backgroundRepeat:bm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bh,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:P,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:z,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:p,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:be,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:D,colorRight:H,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:R,backgroundRepeat:bm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bi}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:L}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:a}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:A}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bn,width:3,color:b,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bn,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:y}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:S,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthRight:1,colorRight:Y,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:E,widthBottom:1,colorBottom:O}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bc,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:l}}}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var gx="button-frame",gw="atom",gv="widget",gu="main",gt="button",gs="text-selected",gr="image",gq="bold",gp="middle",go="background-light",fb="text-disabled",fa="groupbox",eY="decoration/arrows/down.png",eX="cell",eW="selected",eV="border-invalid",eU="input",eT="input-disabled",eS="menu-button",eR="input-focused-invalid",gE="toolbar-button",gF="spinner",gC="input-focused",gD="popup",gA="tooltip",gB="label",gy="list",gz="tree-item",gG="treevirtual-contract",gH="scrollbar",fW="datechooser/nav-button",fV="text-hovered",fY="center",fX="treevirtual-expand",gb="textfield",ga="decoration/arrows/right.png",gd="background-application",gc="radiobutton",fU="white",fT="invalid",cW="combobox",cX="right-top",cY="checkbox",da="text-title",db="qx/static/blank.gif",dc="scrollbar/button",dd="right",de="combobox/button",df="icon/16/places/folder.png",dg="text-label",gV="decoration/tree/closed.png",gU="scrollbar-slider-horizontal",gT="decoration/arrows/left.png",gS="button-focused",ha="text-light",gY="menu-slidebar-button",gX="text-input",gW="slidebar/button-forward",hc="background-splitpane",hb=".png",ea="decoration/tree/open.png",eb="default",dX="decoration/arrows/down-small.png",dY="datechooser",ee="slidebar/button-backward",ef="selectbox",ec="treevirtual-folder",ed="shadow-popup",dV="icon/16/mimetypes/office-document.png",dW="background-medium",dB="table",dA="decoration/arrows/up.png",dD="decoration/form/",dC="",dx="-invalid",dw="icon/16/places/folder-open.png",dz="button-checked",dy="decoration/window/maximize-active-hovered.png",dv="radiobutton-hovered",du="keyboard-focus",el="decoration/cursors/",em="slidebar",en="tooltip-error-arrow",eo="table-scroller-focus-indicator",eh="move-frame",ei="nodrop",ej="decoration/table/boolean-true.png",ek="table-header-cell",ep="menu",eq="app-header",dO="row-layer",dN="text-inactive",dM="move",dL="radiobutton-checked-focused",dK="decoration/window/restore-active-hovered.png",dJ="shadow-window",dI="table-column-button",dH="right.png",dS="tabview-page-button-bottom-inactive",dR="tooltip-error",er="window-statusbar",es="button-hovered",et="decoration/scrollbar/scrollbar-",eu="background-tip",ev="scrollbar-slider-horizontal-disabled",ew="table-scroller-header",ex="button-pressed",ey="table-pane",ez="decoration/window/close-active.png",eA="native",fj="checkbox-hovered",fi="button-invalid-shadow",fh="checkbox-checked",fg="decoration/window/minimize-active-hovered.png",fn="menubar",fm="icon/16/actions/dialog-cancel.png",fl="tabview-page-button-top-inactive",fk="tabview-page-button-left-inactive",fr="menu-slidebar",fq="toolbar-button-checked",fO="decoration/tree/open-selected.png",fP="radiobutton-checked",fM="decoration/window/minimize-inactive.png",fN="icon/16/apps/office-calendar.png",fK="group",fL="tabview-page-button-right-inactive",fI="decoration/window/minimize-active.png",fJ="decoration/window/restore-inactive.png",fQ="checkbox-checked-focused",fR="splitpane",gh="combobox/textfield",gg="button-preselected-focused",gj="decoration/window/close-active-hovered.png",gi="qx/icon/Tango/16/actions/window-close.png",gl="checkbox-pressed",gk="button-disabled",gn="selected-dragover",gm="border-separator",gf="decoration/window/maximize-inactive.png",ge="dragover",gO="scrollarea",gP="scrollbar-vertical",gQ="decoration/menu/checkbox-invert.gif",gR="decoration/toolbar/toolbar-handle-knob.gif",gK="icon/22/mimetypes/office-document.png",gL="button-preselected",gM="button-checked-focused",gN="up.png",gI="best-fit",gJ="decoration/tree/closed-selected.png",cV="qx.theme.modern.Appearance",cU="text-active",cT="toolbar-button-hovered",cS="progressive-table-header",cR="decoration/table/select-column-order.png",cQ="decoration/menu/radiobutton.gif",cP="decoration/arrows/forward.png",cO="decoration/table/descending.png",cN="window-captionbar-active",cM="checkbox-checked-hovered",dj="scrollbar-slider-vertical",dk="toolbar",dh="alias",di="decoration/window/restore-active.png",dn="decoration/table/boolean-false.png",dp="checkbox-checked-disabled",dl="icon/32/mimetypes/office-document.png",dm="radiobutton-checked-disabled",dr="tabview-pane",ds="decoration/arrows/rewind.png",fv="checkbox-focused",fp="top",fC="#EEE",fy="icon/16/actions/dialog-ok.png",fe="radiobutton-checked-hovered",fc="table-header-cell-hovered",dF="window",ff="text-gray",dQ="decoration/menu/radiobutton-invert.gif",dP="text-placeholder",eJ="slider",eK="keep-align",eL="down.png",eM="tabview-page-button-top-active",eN="icon/32/places/folder-open.png",eO="icon/22/places/folder.png",eP="decoration/window/maximize-active.png",eQ="checkbox-checked-pressed",eH="decoration/window/close-inactive.png",eI="tabview-page-button-left-active",fd="toolbar-part",fB="decoration/splitpane/knob-vertical.png",fA=".gif",fz="icon/22/places/folder-open.png",fG="radiobutton-checked-pressed",fF="table-statusbar",fE="radiobutton-pressed",fD="window-captionbar-inactive",fx="copy",fw="radiobutton-focused",dq="decoration/arrows/down-invert.png",dU="decoration/menu/checkbox.gif",dT="decoration/splitpane/knob-horizontal.png",fo="icon/32/places/folder.png",eg="toolbar-separator",fu="tabview-page-button-bottom-active",ft="decoration/arrows/up-small.png",fs="decoration/table/ascending.png",dE="decoration/arrows/up-invert.png",fH="small",dt="tabview-page-button-right-active",dG="-disabled",eB="scrollbar-horizontal",eC="progressive-table-header-cell",eD="menu-separator",eE="pane",eF="decoration/arrows/right-invert.png",eG="left.png",fS="icon/16/actions/view-refresh.png";
qx.Theme.define(cV,{appearances:{"widget":{},"root":{style:function(hA){return {backgroundColor:gd,textColor:dg,font:eb};
}},"label":{style:function(hY){return {textColor:hY.disabled?fb:undefined};
}},"move-frame":{style:function(bz){return {decorator:gu};
}},"resize-frame":eh,"dragdrop-cursor":{style:function(bM){var bN=ei;

if(bM.copy){bN=fx;
}else if(bM.move){bN=dM;
}else if(bM.alias){bN=dh;
}return {source:el+bN+fA,position:cX,offset:[2,16,2,6]};
}},"image":{style:function(hT){return {opacity:!hT.replacement&&hT.disabled?0.3:1};
}},"atom":{},"atom/label":gB,"atom/icon":gr,"popup":{style:function(bA){return {decorator:gu,backgroundColor:go,shadow:ed};
}},"button-frame":{alias:gw,style:function(ba){var bc,bb;

if(ba.checked&&ba.focused&&!ba.inner){bc=gM;
bb=undefined;
}else if(ba.disabled){bc=gk;
bb=undefined;
}else if(ba.pressed){bc=ex;
bb=fV;
}else if(ba.checked){bc=dz;
bb=undefined;
}else if(ba.hovered){bc=es;
bb=fV;
}else if(ba.preselected&&ba.focused&&!ba.inner){bc=gg;
bb=fV;
}else if(ba.preselected){bc=gL;
bb=fV;
}else if(ba.focused&&!ba.inner){bc=gS;
bb=undefined;
}else{bc=gt;
bb=undefined;
}return {decorator:bc,textColor:bb,shadow:ba.invalid&&!ba.disabled?fi:undefined};
}},"button-frame/image":{style:function(cc){return {opacity:!cc.replacement&&cc.disabled?0.5:1};
}},"button":{alias:gx,include:gx,style:function(e){return {padding:[2,8],center:true};
}},"hover-button":{alias:gw,include:gw,style:function(hj){return {decorator:hj.hovered?eW:undefined,textColor:hj.hovered?gs:undefined};
}},"splitbutton":{},"splitbutton/button":gt,"splitbutton/arrow":{alias:gt,include:gt,style:function(G){return {icon:eY,padding:2,marginLeft:1};
}},"checkbox":{alias:gw,style:function(cB){var cD;

if(cB.checked&&cB.focused){cD=fQ;
}else if(cB.checked&&cB.disabled){cD=dp;
}else if(cB.checked&&cB.pressed){cD=eQ;
}else if(cB.checked&&cB.hovered){cD=cM;
}else if(cB.checked){cD=fh;
}else if(cB.focused){cD=fv;
}else if(cB.pressed){cD=gl;
}else if(cB.hovered){cD=fj;
}else{cD=cY;
}var cC=cB.invalid&&!cB.disabled?dx:dC;
return {icon:dD+cD+cC+hb,gap:6};
}},"radiobutton":{alias:gw,style:function(be){var bg;

if(be.checked&&be.focused){bg=dL;
}else if(be.checked&&be.disabled){bg=dm;
}else if(be.checked&&be.pressed){bg=fG;
}else if(be.checked&&be.hovered){bg=fe;
}else if(be.checked){bg=fP;
}else if(be.focused){bg=fw;
}else if(be.pressed){bg=fE;
}else if(be.hovered){bg=dv;
}else{bg=gc;
}var bf=be.invalid&&!be.disabled?dx:dC;
return {icon:dD+bg+bf+hb,gap:6};
}},"textfield":{style:function(bk){var bp;
var bn=!!bk.focused;
var bo=!!bk.invalid;
var bl=!!bk.disabled;

if(bn&&bo&&!bl){bp=eR;
}else if(bn&&!bo&&!bl){bp=gC;
}else if(bl){bp=eT;
}else if(!bn&&bo&&!bl){bp=eV;
}else{bp=eU;
}var bm;

if(bk.disabled){bm=fb;
}else if(bk.showingPlaceholder){bm=dP;
}else{bm=gX;
}return {decorator:bp,padding:[2,4,1],textColor:bm};
}},"textarea":{include:gb,style:function(hw){return {padding:4};
}},"spinner":{style:function(U){var Y;
var W=!!U.focused;
var X=!!U.invalid;
var V=!!U.disabled;

if(W&&X&&!V){Y=eR;
}else if(W&&!X&&!V){Y=gC;
}else if(V){Y=eT;
}else if(!W&&X&&!V){Y=eV;
}else{Y=eU;
}return {decorator:Y};
}},"spinner/textfield":{style:function(cI){return {marginRight:2,padding:[2,4,1],textColor:cI.disabled?fb:gX};
}},"spinner/upbutton":{alias:gx,include:gx,style:function(hl){return {icon:ft,padding:hl.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:gx,include:gx,style:function(hy){return {icon:dX,padding:hy.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":cW,"datefield/button":{alias:de,include:de,style:function(hR){return {icon:fN,padding:[0,3],decorator:undefined};
}},"datefield/textfield":gh,"datefield/list":{alias:dY,include:dY,style:function(E){return {decorator:undefined};
}},"groupbox":{style:function(F){return {legendPosition:fp};
}},"groupbox/legend":{alias:gw,style:function(P){return {padding:[1,0,1,4],textColor:P.invalid?fT:da,font:gq};
}},"groupbox/frame":{style:function(ca){return {padding:12,decorator:fK};
}},"check-groupbox":fa,"check-groupbox/legend":{alias:cY,include:cY,style:function(hQ){return {padding:[1,0,1,4],textColor:hQ.invalid?fT:da,font:gq};
}},"radio-groupbox":fa,"radio-groupbox/legend":{alias:gc,include:gc,style:function(t){return {padding:[1,0,1,4],textColor:t.invalid?fT:da,font:gq};
}},"scrollarea":{style:function(co){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(hN){return {backgroundColor:gd};
}},"scrollarea/pane":gv,"scrollarea/scrollbar-x":gH,"scrollarea/scrollbar-y":gH,"scrollbar":{style:function(hJ){if(hJ[eA]){return {};
}return {width:hJ.horizontal?undefined:16,height:hJ.horizontal?16:undefined,decorator:hJ.horizontal?eB:gP,padding:1};
}},"scrollbar/slider":{alias:eJ,style:function(D){return {padding:D.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:gx,style:function(cE){var cF=cE.horizontal?gU:dj;

if(cE.disabled){cF+=dG;
}return {decorator:cF,minHeight:cE.horizontal?undefined:9,minWidth:cE.horizontal?9:undefined};
}},"scrollbar/button":{alias:gx,include:gx,style:function(cG){var cH=et;

if(cG.left){cH+=eG;
}else if(cG.right){cH+=dH;
}else if(cG.up){cH+=gN;
}else{cH+=eL;
}
if(cG.left||cG.right){return {padding:[0,0,0,cG.left?3:4],icon:cH,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:cH,width:14,height:15};
}}},"scrollbar/button-begin":dc,"scrollbar/button-end":dc,"slider":{style:function(w){var A;
var y=!!w.focused;
var z=!!w.invalid;
var x=!!w.disabled;

if(y&&z&&!x){A=eR;
}else if(y&&!z&&!x){A=gC;
}else if(x){A=eT;
}else if(!y&&z&&!x){A=eV;
}else{A=eU;
}return {decorator:A};
}},"slider/knob":{include:gx,style:function(hx){return {decorator:hx.disabled?ev:gU,shadow:undefined,height:14,width:14};
}},"list":{alias:gO,style:function(ia){var ie;
var ic=!!ia.focused;
var id=!!ia.invalid;
var ib=!!ia.disabled;

if(ic&&id&&!ib){ie=eR;
}else if(ic&&!id&&!ib){ie=gC;
}else if(ib){ie=eT;
}else if(!ic&&id&&!ib){ie=eV;
}else{ie=eU;
}return {backgroundColor:go,decorator:ie};
}},"list/pane":gv,"listitem":{alias:gw,style:function(cs){var ct;

if(cs.dragover){ct=cs.selected?gn:ge;
}else{ct=cs.selected?eW:undefined;
}return {padding:cs.dragover?[4,4,2,4]:4,textColor:cs.selected?gs:undefined,decorator:ct};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gx,include:gx,style:function(bQ){return {padding:5,center:true,icon:bQ.vertical?eY:ga};
}},"slidebar/button-backward":{alias:gx,include:gx,style:function(f){return {padding:5,center:true,icon:f.vertical?dA:gT};
}},"tabview":{style:function(O){return {contentPadding:16};
}},"tabview/bar":{alias:em,style:function(bO){var bP={marginBottom:bO.barTop?-1:0,marginTop:bO.barBottom?-4:0,marginLeft:bO.barRight?-3:0,marginRight:bO.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(bO.barTop||bO.barBottom){bP.paddingLeft=5;
bP.paddingRight=7;
}else{bP.paddingTop=5;
bP.paddingBottom=7;
}return bP;
}},"tabview/bar/button-forward":{include:gW,alias:gW,style:function(cz){if(cz.barTop||cz.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:ee,alias:ee,style:function(bd){if(bd.barTop||bd.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(bT){return {decorator:dr,minHeight:100,marginBottom:bT.barBottom?-1:0,marginTop:bT.barTop?-1:0,marginLeft:bT.barLeft?-1:0,marginRight:bT.barRight?-1:0};
}},"tabview-page":gv,"tabview-page/button":{alias:gw,style:function(ch){var cn,cj=0;
var cm=0,ci=0,ck=0,cl=0;

if(ch.checked){if(ch.barTop){cn=eM;
cj=[6,14];
ck=ch.firstTab?0:-5;
cl=ch.lastTab?0:-5;
}else if(ch.barBottom){cn=fu;
cj=[6,14];
ck=ch.firstTab?0:-5;
cl=ch.lastTab?0:-5;
}else if(ch.barRight){cn=dt;
cj=[6,13];
cm=ch.firstTab?0:-5;
ci=ch.lastTab?0:-5;
}else{cn=eI;
cj=[6,13];
cm=ch.firstTab?0:-5;
ci=ch.lastTab?0:-5;
}}else{if(ch.barTop){cn=fl;
cj=[4,10];
cm=4;
ck=ch.firstTab?5:1;
cl=1;
}else if(ch.barBottom){cn=dS;
cj=[4,10];
ci=4;
ck=ch.firstTab?5:1;
cl=1;
}else if(ch.barRight){cn=fL;
cj=[4,10];
cl=5;
cm=ch.firstTab?5:1;
ci=1;
ck=1;
}else{cn=fk;
cj=[4,10];
ck=5;
cm=ch.firstTab?5:1;
ci=1;
cl=1;
}}return {zIndex:ch.checked?10:5,decorator:cn,padding:cj,marginTop:cm,marginBottom:ci,marginLeft:ck,marginRight:cl,textColor:ch.checked?cU:dN};
}},"tabview-page/button/label":{alias:gB,style:function(hX){return {padding:[0,1,0,1],margin:hX.focused?0:1,decorator:hX.focused?du:undefined};
}},"tabview-page/button/close-button":{alias:gw,style:function(hS){return {icon:gi};
}},"toolbar":{style:function(v){return {decorator:dk,spacing:2};
}},"toolbar/part":{style:function(hH){return {decorator:fd,spacing:2};
}},"toolbar/part/container":{style:function(bH){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hq){return {source:gR,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:gw,style:function(hd){return {marginTop:2,marginBottom:2,padding:(hd.pressed||hd.checked||hd.hovered)&&!hd.disabled||(hd.disabled&&hd.checked)?3:5,decorator:hd.pressed||(hd.checked&&!hd.hovered)||(hd.checked&&hd.disabled)?fq:hd.hovered&&!hd.disabled?cT:undefined};
}},"toolbar-menubutton":{alias:gE,include:gE,style:function(Q){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:gr,include:gr,style:function(hh){return {source:dX};
}},"toolbar-splitbutton":{style:function(hi){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:gE,include:gE,style:function(bx){return {icon:eY,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:gE,include:gE,style:function(b){return {padding:b.pressed||b.checked?1:b.hovered?1:3,icon:eY,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(B){return {decorator:eg,margin:7};
}},"tree":gy,"tree-item":{style:function(by){return {padding:[2,6],textColor:by.selected?gs:undefined,decorator:by.selected?eW:undefined};
}},"tree-item/icon":{include:gr,style:function(cq){return {paddingRight:5};
}},"tree-item/label":gB,"tree-item/open":{include:gr,style:function(cd){var ce;

if(cd.selected&&cd.opened){ce=fO;
}else if(cd.selected&&!cd.opened){ce=gJ;
}else if(cd.opened){ce=ea;
}else{ce=gV;
}return {padding:[0,5,0,2],source:ce};
}},"tree-folder":{include:gz,alias:gz,style:function(R){var S;

if(R.small){S=R.opened?dw:df;
}else if(R.large){S=R.opened?eN:fo;
}else{S=R.opened?fz:eO;
}return {icon:S};
}},"tree-file":{include:gz,alias:gz,style:function(L){return {icon:L.small?dV:L.large?dl:gK};
}},"treevirtual":dB,"treevirtual-folder":{style:function(hU){return {icon:hU.opened?dw:df};
}},"treevirtual-file":{include:ec,alias:ec,style:function(bv){return {icon:dV};
}},"treevirtual-line":{style:function(hO){return {icon:db};
}},"treevirtual-contract":{style:function(cA){return {icon:ea,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(cv){return {icon:gV,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":gG,"treevirtual-only-expand":fX,"treevirtual-start-contract":gG,"treevirtual-start-expand":fX,"treevirtual-end-contract":gG,"treevirtual-end-expand":fX,"treevirtual-cross-contract":gG,"treevirtual-cross-expand":fX,"treevirtual-end":{style:function(bU){return {icon:db};
}},"treevirtual-cross":{style:function(he){return {icon:db};
}},"tooltip":{include:gD,style:function(bG){return {backgroundColor:eu,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":gw,"tooltip-error":{include:gA,style:function(bi){return {textColor:gs,placeMethod:gv,offset:[0,0,0,14],marginTop:-2,position:cX,showTimeout:100,hideTimeout:10000,decorator:dR,shadow:en,font:gq};
}},"tooltip-error/atom":gw,"window":{style:function(hL){return {shadow:dJ,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(cL){return {decorator:dF};
}},"window/captionbar":{style:function(bS){return {decorator:bS.active?cN:fD,textColor:bS.active?fU:ff,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(cf){return {margin:[5,0,3,6]};
}},"window/title":{style:function(cw){return {alignY:gp,font:gq,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:gw,style:function(cr){return {icon:cr.active?cr.hovered?fg:fI:fM,margin:[4,8,2,0]};
}},"window/restore-button":{alias:gw,style:function(ho){return {icon:ho.active?ho.hovered?dK:di:fJ,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:gw,style:function(hP){return {icon:hP.active?hP.hovered?dy:eP:gf,margin:[4,8,2,0]};
}},"window/close-button":{alias:gw,style:function(hM){return {icon:hM.active?hM.hovered?gj:ez:eH,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(bu){return {padding:[2,6],decorator:er,minHeight:18};
}},"window/statusbar-text":{style:function(cy){return {font:fH};
}},"iframe":{style:function(bI){return {decorator:gu};
}},"resizer":{style:function(bs){return {decorator:eE};
}},"splitpane":{style:function(bV){return {decorator:fR};
}},"splitpane/splitter":{style:function(hI){return {width:hI.horizontal?3:undefined,height:hI.vertical?3:undefined,backgroundColor:hc};
}},"splitpane/splitter/knob":{style:function(J){return {source:J.horizontal?dT:fB};
}},"splitpane/slider":{style:function(cx){return {width:cx.horizontal?3:undefined,height:cx.vertical?3:undefined,backgroundColor:hc};
}},"selectbox":{alias:gx,include:gx,style:function(I){return {padding:[2,8]};
}},"selectbox/atom":gw,"selectbox/popup":gD,"selectbox/list":{alias:gy},"selectbox/arrow":{include:gr,style:function(bL){return {source:eY,paddingLeft:5};
}},"datechooser":{style:function(hr){var hv;
var ht=!!hr.focused;
var hu=!!hr.invalid;
var hs=!!hr.disabled;

if(ht&&hu&&!hs){hv=eR;
}else if(ht&&!hu&&!hs){hv=gC;
}else if(hs){hv=eT;
}else if(!ht&&hu&&!hs){hv=eV;
}else{hv=eU;
}return {padding:2,decorator:hv,backgroundColor:go};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:gx,alias:gx,style:function(M){var N={padding:[2,4],shadow:undefined};

if(M.lastYear){N.icon=ds;
N.marginRight=1;
}else if(M.lastMonth){N.icon=gT;
}else if(M.nextYear){N.icon=cP;
N.marginLeft=1;
}else if(M.nextMonth){N.icon=ga;
}return N;
}},"datechooser/last-year-button-tooltip":gA,"datechooser/last-month-button-tooltip":gA,"datechooser/next-year-button-tooltip":gA,"datechooser/next-month-button-tooltip":gA,"datechooser/last-year-button":fW,"datechooser/last-month-button":fW,"datechooser/next-month-button":fW,"datechooser/next-year-button":fW,"datechooser/month-year-label":{style:function(hK){return {font:gq,textAlign:fY,textColor:hK.disabled?fb:undefined};
}},"datechooser/date-pane":{style:function(bK){return {textColor:bK.disabled?fb:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(br){return {textColor:br.disabled?fb:br.weekend?ha:undefined,textAlign:fY,paddingTop:2,backgroundColor:dW};
}},"datechooser/week":{style:function(bE){return {textAlign:fY,padding:[2,4],backgroundColor:dW};
}},"datechooser/day":{style:function(hz){return {textAlign:fY,decorator:hz.disabled?undefined:hz.selected?eW:undefined,textColor:hz.disabled?fb:hz.selected?gs:hz.otherMonth?ha:undefined,font:hz.today?gq:undefined,padding:[2,4]};
}},"combobox":{style:function(hB){var hF;
var hD=!!hB.focused;
var hE=!!hB.invalid;
var hC=!!hB.disabled;

if(hD&&hE&&!hC){hF=eR;
}else if(hD&&!hE&&!hC){hF=gC;
}else if(hC){hF=eT;
}else if(!hD&&hE&&!hC){hF=eV;
}else{hF=eU;
}return {decorator:hF};
}},"combobox/popup":gD,"combobox/list":{alias:gy},"combobox/button":{include:gx,alias:gx,style:function(p){var q={icon:eY,padding:2};

if(p.selected){q.decorator=gS;
}return q;
}},"combobox/textfield":{include:gb,style:function(l){return {decorator:undefined};
}},"menu":{style:function(bW){var bX={decorator:ep,shadow:ed,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:bW.submenu||bW.contextmenu?gI:eK};

if(bW.submenu){bX.position=cX;
bX.offset=[-2,-3];
}return bX;
}},"menu/slidebar":fr,"menu-slidebar":gv,"menu-slidebar-button":{style:function(u){return {decorator:u.hovered?eW:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:gY,style:function(bj){return {icon:bj.hovered?dE:dA};
}},"menu-slidebar/button-forward":{include:gY,style:function(hp){return {icon:hp.hovered?dq:eY};
}},"menu-separator":{style:function(o){return {height:0,decorator:eD,margin:[4,2]};
}},"menu-button":{alias:gw,style:function(cg){return {decorator:cg.selected?eW:undefined,textColor:cg.selected?gs:undefined,padding:[4,6]};
}},"menu-button/icon":{include:gr,style:function(bw){return {alignY:gp};
}},"menu-button/label":{include:gB,style:function(j){return {alignY:gp,padding:1};
}},"menu-button/shortcut":{include:gB,style:function(k){return {alignY:gp,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:gr,style:function(g){return {source:g.selected?eF:ga,alignY:gp};
}},"menu-checkbox":{alias:eS,include:eS,style:function(a){return {icon:!a.checked?undefined:a.selected?gQ:dU};
}},"menu-radiobutton":{alias:eS,include:eS,style:function(i){return {icon:!i.checked?undefined:i.selected?dQ:cQ};
}},"menubar":{style:function(bR){return {decorator:fn};
}},"menubar-button":{alias:gw,style:function(ig){return {decorator:ig.pressed||ig.hovered?eW:undefined,textColor:ig.pressed||ig.hovered?gs:undefined,padding:[3,8]};
}},"colorselector":gv,"colorselector/control-bar":gv,"colorselector/control-pane":gv,"colorselector/visual-pane":fa,"colorselector/preset-grid":gv,"colorselector/colorbucket":{style:function(hW){return {decorator:gu,width:16,height:16};
}},"colorselector/preset-field-set":fa,"colorselector/input-field-set":fa,"colorselector/preview-field-set":fa,"colorselector/hex-field-composite":gv,"colorselector/hex-field":gb,"colorselector/rgb-spinner-composite":gv,"colorselector/rgb-spinner-red":gF,"colorselector/rgb-spinner-green":gF,"colorselector/rgb-spinner-blue":gF,"colorselector/hsb-spinner-composite":gv,"colorselector/hsb-spinner-hue":gF,"colorselector/hsb-spinner-saturation":gF,"colorselector/hsb-spinner-brightness":gF,"colorselector/preview-content-old":{style:function(h){return {decorator:gu,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(m){return {decorator:gu,backgroundColor:go,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(T){return {decorator:gu,margin:5};
}},"colorselector/brightness-field":{style:function(cu){return {decorator:gu,margin:[5,7]};
}},"colorselector/hue-saturation-pane":gv,"colorselector/hue-saturation-handle":gv,"colorselector/brightness-pane":gv,"colorselector/brightness-handle":gv,"colorpopup":{alias:gD,include:gD,style:function(bF){return {padding:5,backgroundColor:gd};
}},"colorpopup/field":{style:function(r){return {decorator:gu,margin:2,width:14,height:14,backgroundColor:go};
}},"colorpopup/selector-button":gt,"colorpopup/auto-button":gt,"colorpopup/preview-pane":fa,"colorpopup/current-preview":{style:function(cK){return {height:20,padding:4,marginLeft:4,decorator:gu,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(c){return {height:20,padding:4,marginRight:4,decorator:gu,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:gt,include:gt,style:function(cb){return {icon:fy};
}},"colorpopup/colorselector-cancelbutton":{alias:gt,include:gt,style:function(hG){return {icon:fm};
}},"table":{alias:gv,style:function(C){return {decorator:dB};
}},"table-header":{},"table/statusbar":{style:function(H){return {decorator:fF,padding:[0,2]};
}},"table/column-button":{alias:gx,style:function(bh){return {decorator:dI,padding:3,icon:cR};
}},"table-column-reset-button":{include:eS,alias:eS,style:function(){return {icon:fS};
}},"table-scroller":gv,"table-scroller/scrollbar-x":gH,"table-scroller/scrollbar-y":gH,"table-scroller/header":{style:function(bB){return {decorator:ew};
}},"table-scroller/pane":{style:function(cp){return {backgroundColor:ey};
}},"table-scroller/focus-indicator":{style:function(bY){return {decorator:eo};
}},"table-scroller/resize-line":{style:function(d){return {backgroundColor:gm,width:2};
}},"table-header-cell":{alias:gw,style:function(bJ){return {minWidth:13,minHeight:20,padding:bJ.hovered?[3,4,2,4]:[3,4],decorator:bJ.hovered?fc:ek,sortIcon:bJ.sorted?(bJ.sortedAscending?fs:cO):undefined};
}},"table-header-cell/label":{style:function(hn){return {minWidth:0,alignY:gp,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(K){return {alignY:gp,alignX:dd};
}},"table-header-cell/icon":{style:function(n){return {minWidth:0,alignY:gp,paddingRight:5};
}},"table-editor-textfield":{include:gb,style:function(hg){return {decorator:undefined,padding:[2,2],backgroundColor:go};
}},"table-editor-selectbox":{include:ef,alias:ef,style:function(s){return {padding:[0,2],backgroundColor:go};
}},"table-editor-combobox":{include:cW,alias:cW,style:function(hf){return {decorator:undefined,backgroundColor:go};
}},"progressive-table-header":{alias:gv,style:function(hk){return {decorator:cS};
}},"progressive-table-header-cell":{alias:gw,style:function(bq){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:eC};
}},"app-header":{style:function(bC){return {font:gq,textColor:gs,padding:[8,12],decorator:eq};
}},"virtual-list":gy,"virtual-list/row-layer":dO,"row-layer":{style:function(bD){return {colorEven:fU,colorOdd:fC};
}},"column-layer":gv,"cell":{style:function(hV){return {textColor:hV.selected?gs:dg,padding:[3,6],font:eb};
}},"cell-string":eX,"cell-number":{include:eX,style:function(bt){return {textAlign:dd};
}},"cell-image":eX,"cell-boolean":{include:eX,style:function(hm){return {iconTrue:ej,iconFalse:dn};
}},"cell-atom":eX,"cell-date":eX,"cell-html":eX,"htmlarea":{"include":gv,style:function(cJ){return {backgroundColor:fU};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var o="px ",n=" ",m="Color",l="Number",k=";",j="px",i="shorthand",h="innerWidthRight",g="border-left:",f='<div style="position:absolute;top:0;left:0;',J="innerColorBottom",I='</div>',H='',G="scale",F="border-top",E="innerWidthTop",D="border-left",C="innerColorRight",B="innerColorTop",A="relative",v="border-top:",w="qx.ui.decoration.Double",t="border-right:",u='line-height:0;',r="innerColorLeft",s="border-bottom",p='">',q="innerWidthBottom",x="innerWidthLeft",y="border-bottom:",z="border-right";
qx.Class.define(w,{extend:qx.ui.decoration.Single,construct:function(P,Q,R,innerWidth,S){qx.ui.decoration.Single.call(this,P,Q,R,innerWidth,S);
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(S!=null){this.setInnerColor(S);
}},properties:{innerWidthTop:{check:l,init:0},innerWidthRight:{check:l,init:0},innerWidthBottom:{check:l,init:0},innerWidthLeft:{check:l,init:0},innerWidth:{group:[E,h,q,x],mode:i},innerColorTop:{nullable:true,check:m},innerColorRight:{nullable:true,check:m},innerColorBottom:{nullable:true,check:m},innerColorLeft:{nullable:true,check:m},innerColor:{group:[B,C,J,r],mode:i}},members:{__Ag:null,_getDefaultInsets:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
},_isInitialized:function(){return !!this.__Ag;
},getMarkup:function(){if(this.__Ag){return this.__Ag;
}var K=qx.theme.manager.Color.getInstance();
var N={position:A};
var L=this.getInnerWidthTop();

if(L>0){N[F]=L+o+this.getStyleTop()+n+K.resolve(this.getInnerColorTop());
}var L=this.getInnerWidthRight();

if(L>0){N[z]=L+o+this.getStyleRight()+n+K.resolve(this.getInnerColorRight());
}var L=this.getInnerWidthBottom();

if(L>0){N[s]=L+o+this.getStyleBottom()+n+K.resolve(this.getInnerColorBottom());
}var L=this.getInnerWidthLeft();

if(L>0){N[D]=L+o+this.getStyleLeft()+n+K.resolve(this.getInnerColorLeft());
}{};
var O=this._generateBackgroundMarkup(N);
var M=u;
if((qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION<8)||(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.DOCUMENT_MODE<8)){M=H;
}var L=this.getWidthTop();

if(L>0){M+=v+L+o+this.getStyleTop()+n+K.resolve(this.getColorTop())+k;
}var L=this.getWidthRight();

if(L>0){M+=t+L+o+this.getStyleRight()+n+K.resolve(this.getColorRight())+k;
}var L=this.getWidthBottom();

if(L>0){M+=y+L+o+this.getStyleBottom()+n+K.resolve(this.getColorBottom())+k;
}var L=this.getWidthLeft();

if(L>0){M+=g+L+o+this.getStyleLeft()+n+K.resolve(this.getColorLeft())+k;
}{};
return this.__Ag=f+M+p+O+I;
},resize:function(a,b,c){var e=this.getBackgroundImage()&&this.getBackgroundRepeat()==G;

if(e||qx.bom.client.Feature.CONTENT_BOX){var d=this.getInsets();
var innerWidth=b-d.left-d.right;
var innerHeight=c-d.top-d.bottom;
}else{var innerWidth=b-this.getWidthLeft()-this.getWidthRight();
var innerHeight=c-this.getWidthTop()-this.getWidthBottom();
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}a.firstChild.style.width=innerWidth+j;
a.firstChild.style.height=innerHeight+j;
}},destruct:function(){this.__Ag=null;
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",y="table-header-border",x="dotted",w="border-separator",v="tooltip-text",u="invalid",t="white",s="decoration/shadow/shadow.png",r="black",q="effect",p="table-focus-indicator",n="border-focused-invalid",o="qx/decoration/Classic",l="border-lead",m="decoration/shadow/shadow-small.png",k="qx.theme.classic.Decoration";
qx.Theme.define(k,{aliases:{decoration:o},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:r,style:x}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:u}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:w}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:w}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:m,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:u,innerColor:n,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:x,color:l}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:t,colorLeft:t,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:y,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:p,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f,widthBottom:2,colorBottom:q,styleBottom:f}}}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var et="button",es="widget",er="background",eq="atom",ep="inset-thin",eo="outset",en="text-disabled",em="text-selected",el="inset",ek="image",dm="groupbox",dl="cell",dk="focused-inset",dj="tooltip",di="menu-button",dh="middle",dg="decoration/arrows/down.gif",df="spinner",de="background-selected",dd="list",eA="button-hovered",eB="checkbox",ey="toolbar-button",ez="button-frame",ew="popup",ex="textfield",eu="label",ev="background-invalid",eC="background-disabled",eD="bold",dS="white",dR="shadow-small",dU="invalid",dT="scrollbar",dW="center",dV="datechooser/button",dY="button-abandoned",dX="background-light",dQ="main",dP="date-chooser",bD="date-chooser-title",bE="radiobutton",bF="default",bG="combobox",bH="background-field",bI="outset-thin",bJ="menu-slidebar-button",bK="scrollbar/button",bL="combobox/button",bM="table-header-cell",eR="decoration/arrows/right.gif",eQ="decoration/arrows/up.gif",eP="text",eO="decoration/arrows/down-small.gif",eV="icon/16/places/folder.png",eU="tree-folder",eT="slidebar/button-forward",eS="icon/16/mimetypes/text-plain.png",eX="right-top",eW="button-checked",cz=".png",cA="background-focused",cx="datechooser",cy="slidebar/button-backward",cD="selectbox",cE="treevirtual-folder",cB="decoration/form/",cC="decoration/tree/minus.gif",cv="",cw="decoration/tree/plus.gif",cf="-invalid",ce="decoration/arrows/left.gif",ch="icon/16/places/folder-open.png",cg="table-row-background-even",cb="decoration/treevirtual/cross_minus.gif",ca="radiobutton-hovered",cd="keyboard-focus",cc="decoration/treevirtual/start_plus.gif",bY="decoration/cursors/",bX="icon/16/actions/dialog-ok.png",cJ="slidebar",cK="table-scroller-focus-indicator",cL="move-frame",cM="nodrop",cF="tabview-page-button-left",cG="decoration/arrows/up-small.gif",cH="move",cI="radiobutton-checked-focused",cN="qx.theme.classic.Appearance",cO="decoration/menu/checkbox.gif",cq="tooltip-error",cp="right",co="decoration/arrows/rewind.gif",cn="table-scroller-header",cm="table-pane",cl="focused-outset",ck="checkbox-hovered",cj="icon/16/actions/dialog-cancel.png",cu="menu-slidebar",ct="datechooser-date-pane",cP="background-pane",cQ="decoration/treevirtual/cross_plus.gif",cR="qx/icon/Oxygen/16/actions/window-close.png",cS="datechooser-week",cT="icon/16/apps/office-calendar.png",cU="datechooser-weekday",cV="table-header-border",cW="table-header-cell-hover",cX="window-active-caption-text",cY="window-active-caption",du="icon",dt="checkbox-checked-focused",ds="toolbar-separator",dr="groove",dy="checkbox-pressed",dx="tooltip-invalid",dw="decoration/window/restore.gif",dv="decoration/menu/checkbox-invert.gif",dB="scrollarea",dA="window-inactive-caption-text",dL="best-fit",dM="up.gif",dJ="keep-align",dK="tabview-page-button-right",dH="tabview-page-button-top",dI="tabview-page-button-bottom",dF="row-layer",dG="decoration/menu/radiobutton.gif",dN="decoration/arrows/",dO="decoration/table/descending.png",ed="tooltip-text",ec="checkbox-checked-hovered",ef="left.gif",ee="decoration/arrows/up-invert.gif",eh="alias",eg="checkbox-checked-disabled",ej="decoration/arrows/right-invert.gif",ei="radiobutton-checked-disabled",eb="lead-item",ea="checkbox-focused",eK="border-dark",eL="decoration/treevirtual/end_plus.gif",eM="decoration/treevirtual/start_minus.gif",eN="radiobutton-checked-hovered",eG="decoration/window/minimize.gif",eH="checkbox-checked",eI="table-header-cell-hovered",eJ="down.gif",eE="decoration/treevirtual/end.gif",eF="decoration/treevirtual/end_minus.gif",bC="window-inactive-caption",bB="decoration/menu/radiobutton-invert.gif",bA="text-placeholder",bz="slider",by="decoration/table/select-column-order.png",bx="decoration/arrows/next.gif",bw="table-header",bv="decoration/treevirtual/only_minus.gif",bu="datechooser-week-header",bt="decoration/window/maximize.gif",bP="decoration/treevirtual/only_plus.gif",bQ="checkbox-checked-pressed",bN="decoration/arrows/down-invert.gif",bO="menu-separator",bT="decoration/splitpane/knob-vertical.png",bU=".gif",bR="decoration/arrows/forward.gif",bS="radiobutton-checked-pressed",bV="table-statusbar",bW="radiobutton-pressed",dC="copy",dz="table-row-background-selected",dE="radiobutton-focused",dD="decoration/splitpane/knob-horizontal.png",dp="right.gif",dn="radiobutton-checked",ci="decoration/treevirtual/cross.gif",dq="decoration/table/ascending.png",cs="decoration/treevirtual/line.gif",cr="date-chooser-selected",da="toolbar-part-handle",db="decoration/window/close.gif",dc="icon/16/actions/view-refresh.png";
qx.Theme.define(cN,{appearances:{"widget":{},"label":{style:function(D){return {textColor:D.disabled?en:undefined};
}},"image":{style:function(gE){return {opacity:!gE.replacement&&gE.disabled?0.3:undefined};
}},"atom":{},"atom/label":eu,"atom/icon":ek,"root":{style:function(K){return {backgroundColor:er,textColor:eP,font:bF};
}},"popup":{style:function(X){return {decorator:dQ,backgroundColor:cP,shadow:dR};
}},"tooltip":{include:ew,style:function(fl){return {backgroundColor:dj,textColor:ed,decorator:dj,shadow:dR,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":eq,"tooltip-error":{include:dj,style:function(I){return {textColor:em,showTimeout:100,hideTimeout:10000,decorator:cq,font:eD,backgroundColor:dx};
}},"tooltip-error/atom":eq,"iframe":{style:function(fh){return {backgroundColor:dS,decorator:el};
}},"move-frame":{style:function(fK){return {decorator:dQ};
}},"resize-frame":cL,"dragdrop-cursor":{style:function(gi){var gj=cM;

if(gi.copy){gj=dC;
}else if(gi.move){gj=cH;
}else if(gi.alias){gj=eh;
}return {source:bY+gj+bU,position:eX,offset:[2,16,2,6]};
}},"button-frame":{alias:eq,style:function(fx){if(fx.pressed||fx.abandoned||fx.checked){var fz=!fx.inner&&fx.focused?dk:el;
var fy=[4,3,2,5];
}else{var fz=!fx.inner&&fx.focused?cl:eo;
var fy=[3,4];
}return {backgroundColor:fx.abandoned?dY:fx.hovered?eA:fx.checked?eW:et,decorator:fz,padding:fy};
}},"button":{alias:ez,include:ez,style:function(o){return {center:true};
}},"hover-button":{alias:eq,include:eq,style:function(fe){return {backgroundColor:fe.hovered?de:undefined,textColor:fe.hovered?em:undefined};
}},"splitbutton":{},"splitbutton/button":et,"splitbutton/arrow":{alias:et,include:et,style:function(fT){return {icon:dg};
}},"scrollarea/corner":{style:function(){return {backgroundColor:er};
}},"scrollarea":es,"scrollarea/pane":es,"scrollarea/scrollbar-x":dT,"scrollarea/scrollbar-y":dT,"list":{alias:dB,style:function(d){var h;
var f=!!d.focused;
var g=!!d.invalid;
var e=!!d.disabled;

if(g&&!e){h=ev;
}else if(f&&!g&&!e){h=cA;
}else if(e){h=eC;
}else{h=dS;
}return {decorator:d.focused?dk:el,backgroundColor:h};
}},"listitem":{alias:eq,style:function(fG){return {gap:4,padding:fG.lead?[2,4]:[3,5],backgroundColor:fG.selected?de:undefined,textColor:fG.selected?em:undefined,decorator:fG.lead?eb:undefined};
}},"textfield":{style:function(gb){var gg;
var ge=!!gb.focused;
var gf=!!gb.invalid;
var gc=!!gb.disabled;

if(gf&&!gc){gg=ev;
}else if(ge&&!gf&&!gc){gg=cA;
}else if(gc){gg=eC;
}else{gg=bH;
}var gd;

if(gb.disabled){gd=en;
}else if(gb.showingPlaceholder){gd=bA;
}else{gd=undefined;
}return {decorator:gb.focused?dk:el,padding:[2,3],textColor:gd,backgroundColor:gg};
}},"textarea":ex,"checkbox":{alias:eq,style:function(gN){var gP;

if(gN.checked&&gN.focused){gP=dt;
}else if(gN.checked&&gN.disabled){gP=eg;
}else if(gN.checked&&gN.pressed){gP=bQ;
}else if(gN.checked&&gN.hovered){gP=ec;
}else if(gN.checked){gP=eH;
}else if(gN.focused){gP=ea;
}else if(gN.pressed){gP=dy;
}else if(gN.hovered){gP=ck;
}else{gP=eB;
}var gO=gN.invalid&&!gN.disabled?cf:cv;
return {icon:cB+gP+gO+cz,gap:6};
}},"radiobutton":{alias:eB,include:eB,style:function(gn){var gp;

if(gn.checked&&gn.focused){gp=cI;
}else if(gn.checked&&gn.disabled){gp=ei;
}else if(gn.checked&&gn.pressed){gp=bS;
}else if(gn.checked&&gn.hovered){gp=eN;
}else if(gn.checked){gp=dn;
}else if(gn.focused){gp=dE;
}else if(gn.pressed){gp=bW;
}else if(gn.hovered){gp=ca;
}else{gp=bE;
}var go=gn.invalid&&!gn.disabled?cf:cv;
return {icon:cB+gp+go+cz,shadow:undefined};
}},"spinner":{style:function(gw){return {decorator:gw.focused?dk:el,textColor:gw.disabled?en:undefined};
}},"spinner/textfield":{include:ex,style:function(gx){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:et,include:et,style:function(fu){return {icon:cG,padding:fu.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:fu.hovered?eA:et};
}},"spinner/downbutton":{alias:et,include:et,style:function(gr){return {icon:eO,padding:gr.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:gr.hovered?eA:et};
}},"datefield":bG,"datefield/button":{alias:bL,include:bL,style:function(bf){return {icon:cT,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:cx,include:cx,style:function(gJ){return {decorator:gJ.focused?dk:el};
}},"groupbox":{style:function(fU){return {backgroundColor:er};
}},"groupbox/legend":{alias:eq,style:function(fF){return {backgroundColor:er,textColor:fF.invalid?dU:undefined,paddingRight:4,paddingLeft:4,marginRight:10,marginLeft:10};
}},"groupbox/frame":{style:function(gL){return {padding:[12,9],decorator:dr};
}},"check-groupbox":dm,"check-groupbox/legend":{alias:eB,include:eB,style:function(gI){return {backgroundColor:er,textColor:gI.invalid?dU:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"radio-groupbox":dm,"radio-groupbox/legend":{alias:bE,include:bE,style:function(br){return {backgroundColor:er,textColor:br.invalid?dU:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"toolbar":{style:function(M){return {backgroundColor:er};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(fJ){return {decorator:da,backgroundColor:er,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(fo){return {margin:[3,2],decorator:ds};
}},"toolbar-button":{alias:eq,style:function(A){if(A.pressed||A.checked||A.abandoned){var C=ep;
var B=[3,2,1,4];
}else if(A.hovered){var C=bI;
var B=[2,3];
}else{var C=undefined;
var B=[3,4];
}return {cursor:bF,decorator:C,padding:B,backgroundColor:A.abandoned?dY:A.checked?dX:et};
}},"toolbar-menubutton":{alias:ey,include:ey,style:function(k){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:ek,include:ek,style:function(fj){return {source:eO};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":ey,"toolbar-splitbutton/arrow":{alias:ey,include:ey,style:function(fc){return {icon:dg};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:et,include:et,style:function(hc){return {icon:hc.vertical?dg:bx};
}},"slidebar/button-backward":{alias:et,include:et,style:function(fS){return {icon:fS.vertical?eQ:ce};
}},"tabview":{},"tabview/bar":{alias:cJ,style:function(N){var O=0,R=0,P=0,Q=0;

if(N.barTop){P=-2;
}else if(N.barBottom){O=-2;
}else if(N.barRight){Q=-2;
}else{R=-2;
}return {marginBottom:P,marginTop:O,marginLeft:Q,marginRight:R};
}},"tabview/bar/button-forward":{include:eT,alias:eT,style:function(fg){if(fg.barTop||fg.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:cy,alias:cy,style:function(T){if(T.barTop||T.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(gW){return {backgroundColor:er,decorator:eo,padding:10};
}},"tabview-page":es,"tabview-page/button":{style:function(q){var z;
var x=0,v=0,s=0,u=0;

if(q.barTop||q.barBottom){var t=2,r=2,w=6,y=6;
}else{var t=6,r=6,w=6,y=6;
}
if(q.barTop){z=dH;
}else if(q.barRight){z=dK;
}else if(q.barBottom){z=dI;
}else{z=cF;
}
if(q.checked){if(q.barTop||q.barBottom){w+=2;
y+=2;
}else{t+=2;
r+=2;
}}else{if(q.barTop||q.barBottom){s+=2;
x+=2;
}else if(q.barLeft||q.barRight){v+=2;
u+=2;
}}
if(q.checked){if(!q.firstTab){if(q.barTop||q.barBottom){u=-4;
}else{x=-4;
}}
if(!q.lastTab){if(q.barTop||q.barBottom){v=-4;
}else{s=-4;
}}}return {zIndex:q.checked?10:5,decorator:z,backgroundColor:er,padding:[t,y,r,w],margin:[x,v,s,u]};
}},"tabview-page/button/label":{alias:eu,style:function(U){return {padding:[0,1,0,1],margin:U.focused?0:1,decorator:U.focused?cd:undefined};
}},"tabview-page/button/icon":ek,"tabview-page/button/close-button":{alias:eq,style:function(fW){return {icon:cR};
}},"scrollbar":{},"scrollbar/slider":{alias:bz,style:function(bj){return {backgroundColor:dX};
}},"scrollbar/slider/knob":{include:ez,style:function(bk){return {height:14,width:14,minHeight:bk.horizontal?undefined:9,minWidth:bk.horizontal?9:undefined};
}},"scrollbar/button":{alias:et,include:et,style:function(fO){var fP;

if(fO.up||fO.down){if(fO.pressed||fO.abandoned||fO.checked){fP=[5,2,3,4];
}else{fP=[4,3];
}}else{if(fO.pressed||fO.abandoned||fO.checked){fP=[4,3,2,5];
}else{fP=[3,4];
}}var fQ=dN;

if(fO.left){fQ+=ef;
}else if(fO.right){fQ+=dp;
}else if(fO.up){fQ+=dM;
}else{fQ+=eJ;
}return {padding:fP,icon:fQ};
}},"scrollbar/button-begin":bK,"scrollbar/button-end":bK,"slider":{style:function(fX){var fY;

if(fX.disabled){fY=eC;
}else if(fX.invalid){fY=ev;
}else if(fX.focused){fY=dX;
}else{fY=bH;
}return {backgroundColor:fY,decorator:fX.focused?dk:el};
}},"slider/knob":{include:ez,style:function(ft){return {width:14,height:14,decorator:eo};
}},"tree-folder/open":{style:function(F){return {source:F.opened?cC:cw};
}},"tree-folder":{style:function(bo){return {padding:[2,3,2,0],icon:bo.opened?ch:eV};
}},"tree-folder/icon":{style:function(bi){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(gh){return {padding:[1,2],backgroundColor:gh.selected?de:undefined,textColor:gh.selected?em:undefined};
}},"tree-file":{include:eU,alias:eU,style:function(fH){return {icon:eS};
}},"tree":{include:dd,alias:dd,style:function(gH){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(c){return {decorator:dQ};
}},"treevirtual-folder":{style:function(gC){return {icon:(gC.opened?ch:eV)};
}},"treevirtual-file":{include:cE,alias:cE,style:function(J){return {icon:eS};
}},"treevirtual-line":{style:function(fb){return {icon:cs};
}},"treevirtual-contract":{style:function(Y){return {icon:cC};
}},"treevirtual-expand":{style:function(p){return {icon:cw};
}},"treevirtual-only-contract":{style:function(gu){return {icon:bv};
}},"treevirtual-only-expand":{style:function(L){return {icon:bP};
}},"treevirtual-start-contract":{style:function(bm){return {icon:eM};
}},"treevirtual-start-expand":{style:function(ba){return {icon:cc};
}},"treevirtual-end-contract":{style:function(ga){return {icon:eF};
}},"treevirtual-end-expand":{style:function(b){return {icon:eL};
}},"treevirtual-cross-contract":{style:function(fR){return {icon:cb};
}},"treevirtual-cross-expand":{style:function(fm){return {icon:cQ};
}},"treevirtual-end":{style:function(gs){return {icon:eE};
}},"treevirtual-cross":{style:function(gM){return {icon:ci};
}},"window":{style:function(gR){return {contentPadding:[10,10,10,10],backgroundColor:er,decorator:gR.maximized?undefined:eo,shadow:gR.maximized?undefined:dR};
}},"window/pane":{},"window/captionbar":{style:function(i){return {padding:1,backgroundColor:i.active?cY:bC,textColor:i.active?cX:dA};
}},"window/icon":{style:function(gG){return {marginRight:4};
}},"window/title":{style:function(gQ){return {cursor:bF,font:eD,marginRight:20,alignY:dh};
}},"window/minimize-button":{include:et,alias:et,style:function(fv){return {icon:eG,padding:fv.pressed||fv.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:et,alias:et,style:function(gm){return {icon:dw,padding:gm.pressed||gm.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:et,alias:et,style:function(fI){return {icon:bt,padding:fI.pressed||fI.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:et,alias:et,style:function(gS){return {marginLeft:2,icon:db,padding:gS.pressed||gS.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(ff){return {decorator:ep,padding:[2,6]};
}},"window/statusbar-text":eu,"resizer":{style:function(gt){return {decorator:eo};
}},"splitpane":{},"splitpane/splitter":{style:function(gz){return {backgroundColor:er};
}},"splitpane/splitter/knob":{style:function(bb){return {source:bb.horizontal?dD:bT,padding:2};
}},"splitpane/slider":{style:function(W){return {backgroundColor:eK,opacity:0.3};
}},"selectbox":{include:ez,style:function(G){var H=et;

if(G.invalid&&!G.disabled){H=ev;
}else if(G.abandoned){H=dY;
}else if(!G.abandoned&&G.hovered){H=eA;
}else if(!G.abandoned&&!G.hovered&&G.checked){H=eW;
}return {backgroundColor:H};
}},"selectbox/atom":eq,"selectbox/popup":ew,"selectbox/list":dd,"selectbox/arrow":{include:ek,style:function(gy){return {source:dg,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(bg){return {decorator:eo};
}},"datechooser/navigation-bar":{style:function(n){return {backgroundColor:dP,textColor:n.disabled?en:n.invalid?dU:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":dj,"datechooser/last-month-button-tooltip":dj,"datechooser/next-year-button-tooltip":dj,"datechooser/next-month-button-tooltip":dj,"datechooser/last-year-button":dV,"datechooser/last-month-button":dV,"datechooser/next-year-button":dV,"datechooser/next-month-button":dV,"datechooser/button/icon":{},"datechooser/button":{style:function(fr){var fs={width:17,show:du};

if(fr.lastYear){fs.icon=co;
}else if(fr.lastMonth){fs.icon=ce;
}else if(fr.nextYear){fs.icon=bR;
}else if(fr.nextMonth){fs.icon=eR;
}
if(fr.pressed||fr.checked||fr.abandoned){fs.decorator=ep;
}else if(fr.hovered){fs.decorator=bI;
}else{fs.decorator=undefined;
}
if(fr.pressed||fr.checked||fr.abandoned){fs.padding=[2,0,0,2];
}else if(fr.hovered){fs.padding=1;
}else{fs.padding=2;
}return fs;
}},"datechooser/month-year-label":{style:function(fA){return {font:eD,textAlign:dW};
}},"datechooser/date-pane":{style:function(fk){return {decorator:ct,backgroundColor:dP};
}},"datechooser/weekday":{style:function(ha){return {decorator:cU,font:eD,textAlign:dW,textColor:ha.disabled?en:ha.weekend?bD:dP,backgroundColor:ha.weekend?dP:bD};
}},"datechooser/day":{style:function(gk){return {textAlign:dW,decorator:gk.today?dQ:undefined,textColor:gk.disabled?en:gk.selected?em:gk.otherMonth?en:undefined,backgroundColor:gk.disabled?undefined:gk.selected?cr:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(l){return {textAlign:dW,textColor:bD,padding:[2,4],decorator:l.header?bu:cS};
}},"combobox":{style:function(bd){var be;

if(bd.disabled){be=eC;
}else if(bd.invalid){be=ev;
}else if(bd.focused){be=dX;
}else{be=bH;
}return {decorator:bd.focused?dk:el,textColor:bd.disabled?en:undefined,backgroundColor:be};
}},"combobox/button":{alias:et,include:et,style:function(fn){return {icon:dg,backgroundColor:fn.hovered?eA:et};
}},"combobox/popup":ew,"combobox/list":dd,"combobox/textfield":{include:ex,style:function(gA){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(fL){var fM={backgroundColor:er,shadow:dR,decorator:eo,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:fL.submenu||fL.contextmenu?dL:dJ};

if(fL.submenu){fM.position=eX;
fM.offset=[-2,-3];
}
if(fL.contextmenu){fM.offset=4;
}return fM;
}},"menu/slidebar":cu,"menu-slidebar":es,"menu-slidebar-button":{style:function(fq){return {backgroundColor:fq.hovered?de:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:bJ,style:function(fi){return {icon:fi.hovered?ee:eQ};
}},"menu-slidebar/button-forward":{include:bJ,style:function(gY){return {icon:gY.hovered?bN:dg};
}},"menu-separator":{style:function(bp){return {height:0,decorator:bO,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:eq,style:function(fw){return {backgroundColor:fw.selected?de:undefined,textColor:fw.selected?em:undefined,padding:[2,6]};
}},"menu-button/icon":{include:ek,style:function(bl){return {alignY:dh};
}},"menu-button/label":{include:eu,style:function(eY){return {alignY:dh,padding:1};
}},"menu-button/shortcut":{include:eu,style:function(gF){return {alignY:dh,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:ek,style:function(gq){return {source:gq.selected?ej:eR,alignY:dh};
}},"menu-checkbox":{alias:di,include:di,style:function(m){return {icon:!m.checked?undefined:m.selected?dv:cO};
}},"menu-radiobutton":{alias:di,include:di,style:function(fV){return {icon:!fV.checked?undefined:fV.selected?bB:dG};
}},"menubar":{style:function(j){return {backgroundColor:er,decorator:eo};
}},"menubar-button":{alias:eq,style:function(S){return {padding:[2,6],backgroundColor:S.pressed||S.hovered?de:undefined,textColor:S.pressed||S.hovered?em:undefined};
}},"colorselector":es,"colorselector/control-bar":es,"colorselector/visual-pane":dm,"colorselector/control-pane":es,"colorselector/preset-grid":es,"colorselector/colorbucket":{style:function(bc){return {decorator:ep,width:16,height:16};
}},"colorselector/preset-field-set":dm,"colorselector/input-field-set":dm,"colorselector/preview-field-set":dm,"colorselector/hex-field-composite":es,"colorselector/hex-field":ex,"colorselector/rgb-spinner-composite":es,"colorselector/rgb-spinner-red":df,"colorselector/rgb-spinner-green":df,"colorselector/rgb-spinner-blue":df,"colorselector/hsb-spinner-composite":es,"colorselector/hsb-spinner-hue":df,"colorselector/hsb-spinner-saturation":df,"colorselector/hsb-spinner-brightness":df,"colorselector/preview-content-old":{style:function(fB){return {decorator:ep,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(gX){return {decorator:ep,backgroundColor:dS,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(gB){return {decorator:ep,margin:5};
}},"colorselector/brightness-field":{style:function(fa){return {decorator:ep,margin:[5,7]};
}},"colorselector/hue-saturation-pane":es,"colorselector/hue-saturation-handle":es,"colorselector/brightness-pane":es,"colorselector/brightness-handle":es,"table":es,"table/statusbar":{style:function(fC){return {decorator:bV,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:et,style:function(gT){var gV,gU;

if(gT.pressed||gT.checked||gT.abandoned){gV=ep;
gU=[3,2,1,4];
}else if(gT.hovered){gV=bI;
gU=[2,3];
}else{gV=undefined;
gU=[3,4];
}return {decorator:gV,padding:gU,backgroundColor:gT.abandoned?dY:et,icon:by};
}},"table-column-reset-button":{extend:di,alias:di,style:function(){return {icon:dc};
}},"table-scroller/scrollbar-x":dT,"table-scroller/scrollbar-y":dT,"table-scroller":es,"table-scroller/header":{style:function(E){return {decorator:cn,backgroundColor:bw};
}},"table-scroller/pane":{style:function(V){return {backgroundColor:cm};
}},"table-scroller/focus-indicator":{style:function(fE){return {decorator:cK};
}},"table-scroller/resize-line":{style:function(hb){return {backgroundColor:cV,width:3};
}},"table-header-cell":{alias:eq,style:function(bh){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:bh.hovered?0:2,decorator:bh.hovered?eI:bM,backgroundColor:bh.hovered?cW:bM,sortIcon:bh.sorted?(bh.sortedAscending?dq:dO):undefined};
}},"table-header-cell/sort-icon":{style:function(fN){return {alignY:dh};
}},"table-editor-textfield":{include:ex,style:function(hd){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:cD,alias:cD,style:function(gD){return {padding:[0,2]};
}},"table-editor-combobox":{include:bG,alias:bG,style:function(bq){return {decorator:undefined};
}},"colorpopup":{alias:ew,include:ew,style:function(gK){return {decorator:eo,padding:5,backgroundColor:er};
}},"colorpopup/field":{style:function(fD){return {decorator:ep,margin:2,width:14,height:14,backgroundColor:er};
}},"colorpopup/selector-button":et,"colorpopup/auto-button":et,"colorpopup/preview-pane":dm,"colorpopup/current-preview":{style:function(gv){return {height:20,padding:4,marginLeft:4,decorator:ep,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(gl){return {height:20,padding:4,marginRight:4,decorator:ep,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:et,include:et,style:function(fp){return {icon:bX};
}},"colorpopup/colorselector-cancelbutton":{alias:et,include:et,style:function(bn){return {icon:cj};
}},"virtual-list":dd,"virtual-list/row-layer":dF,"row-layer":es,"column-layer":es,"cell":{style:function(bs){return {backgroundColor:bs.selected?dz:cg,textColor:bs.selected?em:eP,padding:[3,6]};
}},"cell-string":dl,"cell-number":{include:dl,style:function(a){return {textAlign:cp};
}},"cell-image":dl,"cell-boolean":dl,"cell-atom":dl,"cell-date":dl,"cell-html":dl,"htmlarea":{"include":es,style:function(fd){return {backgroundColor:dS};
}}}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a},icons:{}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
})();
(function(){var l='px;',k="",j="Boolean",h='',g='px',e='</div>',d='<div style="position:absolute;',c=";",b='left:',a='">',Y='</span>',X='background-image:url(',W="treevirtual-start-contract",V='">&nbsp;</div>',U="treevirtual-file",T="qx.ui.treevirtual.SimpleTreeDataCellRenderer",S="qx.client",R="treevirtual-only-expand",Q='style="',P='top:0;',t='background-repeat:no-repeat;',u='>',r='right:',s='<div style="',p='" title="',q="treevirtual-end",m="treevirtual-cross",n=');',v='<span',w="treevirtual-end-contract",D=';width:',B=';"',H="treevirtual-end-expand",F="treevirtual-only-contract",L="treevirtual-contract",J='top:',y="content-box",O='bottom:',N="treevirtual-start-expand",M="mshtml",x="treevirtual-cross-contract",z="treevirtual-folder",A='width:',C="treevirtual-expand",E="treevirtual-cross-expand",G="treevirtual-line",I=';height:',K='height:';
qx.Class.define(T,{extend:qx.ui.table.cellrenderer.Abstract,construct:function(){var bI=qx.ui.treevirtual.SimpleTreeDataCellRenderer;
if(bI.__Ch){bI.__Cm();
bI.__Ch=false;
}qx.ui.table.cellrenderer.Abstract.call(this);
this.__Ci=qx.util.AliasManager.getInstance();
this.__Cj=qx.util.ResourceManager.getInstance();
this.__Ck=qx.theme.manager.Appearance.getInstance();
this.BLANK=this.__Cj.toUri(this.__Ci.resolve("static/blank.gif"));
},statics:{__Cl:{},__Ch:true,__Cm:function(){qx.theme.manager.Meta.getInstance().initialize();
var bP=qx.ui.treevirtual.SimpleTreeDataCellRenderer;
var bS=qx.io.ImageLoader;
var bQ=qx.util.AliasManager.getInstance();
var bT=qx.util.ResourceManager.getInstance();
var bR=qx.theme.manager.Appearance.getInstance();
var bU=function(f){bS.load(bT.toUri(bQ.resolve(f)));
};
bP.__Cl.line=bR.styleFrom(G);
bU(bP.__Cl.line.icon);
bP.__Cl.contract=bR.styleFrom(L);
bU(bP.__Cl.contract.icon);
bP.__Cl.expand=bR.styleFrom(C);
bU(bP.__Cl.expand.icon);
bP.__Cl.onlyContract=bR.styleFrom(F);
bU(bP.__Cl.onlyContract.icon);
bP.__Cl.onlyExpand=bR.styleFrom(R);
bU(bP.__Cl.onlyExpand.icon);
bP.__Cl.startContract=bR.styleFrom(W);
bU(bP.__Cl.startContract.icon);
bP.__Cl.startExpand=bR.styleFrom(N);
bU(bP.__Cl.startExpand.icon);
bP.__Cl.endContract=bR.styleFrom(w);
bU(bP.__Cl.endContract.icon);
bP.__Cl.endExpand=bR.styleFrom(H);
bU(bP.__Cl.endExpand.icon);
bP.__Cl.crossContract=bR.styleFrom(x);
bU(bP.__Cl.crossContract.icon);
bP.__Cl.crossExpand=bR.styleFrom(E);
bU(bP.__Cl.crossExpand.icon);
bP.__Cl.end=bR.styleFrom(q);
bU(bP.__Cl.end.icon);
bP.__Cl.cross=bR.styleFrom(m);
bU(bP.__Cl.cross.icon);
}},properties:{useTreeLines:{check:j,init:true},excludeFirstLevelTreeLines:{check:j,init:false},alwaysShowOpenCloseSymbol:{check:j,init:false}},members:{__Ci:null,__Ck:null,__Cj:null,_getCellStyle:function(bX){var bY=bX.value;
var ca=qx.ui.table.cellrenderer.Abstract.prototype._getCellStyle.call(this,bX)+(bY.cellStyle?bY.cellStyle+c:k);
return ca;
},_getContentHtml:function(bo){var bq=k;
var br=0;
var bt=this._addExtraContentBeforeIndentation(bo,br);
bq+=bt.html;
br=bt.pos;
var bs=this._addIndentation(bo,br);
bq+=bs.html;
br=bs.pos;
bt=this._addExtraContentBeforeIcon(bo,br);
bq+=bt.html;
br=bt.pos;
var bp=this._addIcon(bo,br);
bq+=bp.html;
br=bp.pos;
bt=this._addExtraContentBeforeLabel(bo,br);
bq+=bt.html;
br=bt.pos;
bq+=this._addLabel(bo,br);
return bq;
},_addImage:function(bD){var bF=[];
var bE=this.__Cj.toUri(this.__Ci.resolve(bD.url));
if(bD.position){var bG=bD.position;
bF.push(d);

if(!qx.core.Variant.isSet(S,M)){bF.push(qx.bom.element.BoxSizing.compile(y));
}
if(bG.top!==undefined){bF.push(J+bG.top+l);
}
if(bG.right!==undefined){bF.push(r+bG.right+l);
}
if(bG.bottom!==undefined){bF.push(O+bG.bottom+l);
}
if(bG.left!==undefined){bF.push(b+bG.left+l);
}
if(bG.width!==undefined){bF.push(A+bG.width+l);
}
if(bG.height!==undefined){bF.push(K+bG.height+l);
}bF.push(a);
}bF.push(s);
bF.push(X+bE+n);
bF.push(t);

if(bD.imageWidth&&bD.imageHeight){bF.push(D+bD.imageWidth+g+I+bD.imageHeight+g);
}var bH=bD.tooltip;

if(bH!=null){bF.push(p+bH);
}bF.push(V);

if(bD.position){bF.push(e);
}return bF.join(k);
},_addIndentation:function(bc,bd){var be=bc.value;
var bf;
var bg=k;
var bj=this.getUseTreeLines();
var bh=this.getExcludeFirstLevelTreeLines();
var bi=this.getAlwaysShowOpenCloseSymbol();

for(var i=0;i<be.level;i++){bf=this._getIndentSymbol(i,be,bj,bi,bh);
bg+=this._addImage({url:bf.icon,position:{top:0+(bf.paddingTop||0),left:bd+(bf.paddingLeft||0),width:19,height:16}});
bd+=19;
}return ({html:bg,pos:bd});
},_addIcon:function(bJ,bK){var bL=bJ.value;
var bN=(bL.bSelected?bL.iconSelected:bL.icon);

if(!bN){if(bL.type==qx.ui.treevirtual.SimpleTreeDataModel.Type.LEAF){var o=this.__Ck.styleFrom(U);
}else{var bM={opened:bL.bOpened};
var o=this.__Ck.styleFrom(z,bM);
}bN=o.icon;
}var bO=this._addImage({url:bN,position:{top:0,left:bK,width:19,height:16}});
return ({html:bO,pos:bK+19});
},_addLabel:function(bk,bl){var bm=bk.value;
var bn=d+b+bl+l+P+(bm.labelStyle?bm.labelStyle+c:k)+a+v+(bk.labelSpanStyle?Q+bk.labelSpanStyle+B:k)+u+bm.label+Y+e;
return bn;
},_addExtraContentBeforeIndentation:function(ba,bb){return {html:h,pos:bb};
},_addExtraContentBeforeIcon:function(bu,bv){return {html:h,pos:bv};
},_addExtraContentBeforeLabel:function(bV,bW){return {html:h,pos:bW};
},_getIndentSymbol:function(bw,bx,by,bz,bA){var bB=qx.ui.treevirtual.SimpleTreeDataCellRenderer;
if(bw==0&&bA){by=false;
}if(bw<bx.level-1){return (by&&!bx.lastChild[bw]?bB.__Cl.line:{icon:this.BLANK});
}var bC=bx.lastChild[bx.lastChild.length-1];
if(bx.type==qx.ui.treevirtual.SimpleTreeDataModel.Type.BRANCH&&!bx.bHideOpenClose){if(bx.children.length>0||bz){if(!by){return (bx.bOpened?bB.__Cl.contract:bB.__Cl.expand);
}if(bw==0&&bx.bFirstChild){if(bC){return (bx.bOpened?bB.__Cl.onlyContract:bB.__Cl.onlyExpand);
}else{return (bx.bOpened?bB.__Cl.startContract:bB.__Cl.startExpand);
}}if(bC){return (bx.bOpened?bB.__Cl.endContract:bB.__Cl.endExpand);
}return (bx.bOpened?bB.__Cl.crossContract:bB.__Cl.crossExpand);
}}if(by){if(bx.parentNodeId==0){if(bC&&bx.bFirstChild){return {icon:this.BLANK};
}if(bC){return bB.__Cl.end;
}if(bx.bFirstChild){return (bx.bOpened?bB.__Cl.startContract:bB.__Cl.startExpand);
}}return (bC?bB.__Cl.end:bB.__Cl.cross);
}return {icon:this.BLANK};
}},destruct:function(){this.__Ci=this.__Cj=this.__Ck=null;
}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(z,A){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setBorderImage(z);
}
if(A!=null){this.setSlice(A);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__lO:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lO;
},getMarkup:function(){if(this.__lO){return this.__lO;
}var E=this._resolveImageUrl(this.getBorderImage());
var F=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var G=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__lO=[x,qx.bom.element.Style.compile({"borderImage":o+E+p+F.join(f)+f+G,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:F.join(b)+g}),y].join(q);
return this.__lO;
},resize:function(B,C,D){B.style.width=C+g;
B.style.height=D+g;
},tint:function(I,J){},_applyStyle:function(){{};
},_resolveImageUrl:function(H){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(H));
}},destruct:function(){this.__lO=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",x="qx.client",w="-br",v="-t",u="-tl",t="-r",s='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',r="_applyBaseImage",q="-b",p="String",o="",m="-bl",n="qx.ui.decoration.GridDiv",k="-c",l="mshtml";
qx.Class.define(n,{extend:qx.ui.decoration.Abstract,construct:function(O,P){qx.ui.decoration.Abstract.call(this);
if(O!=null){this.setBaseImage(O);
}
if(P!=null){this.setInsets(P);
}},properties:{baseImage:{check:p,nullable:true,apply:r}},members:{__lP:null,__lQ:null,__lR:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lP;
},getMarkup:function(){if(this.__lP){return this.__lP;
}var K=qx.bom.element.Decoration;
var L=this.__lQ;
var M=this.__lR;
var N=[];
N.push(s);
N.push(K.create(L.tl,g,{top:0,left:0}));
N.push(K.create(L.t,f,{top:0,left:M.left+j}));
N.push(K.create(L.tr,g,{top:0,right:0}));
N.push(K.create(L.bl,g,{bottom:0,left:0}));
N.push(K.create(L.b,f,{bottom:0,left:M.left+j}));
N.push(K.create(L.br,g,{bottom:0,right:0}));
N.push(K.create(L.l,e,{top:M.top+j,left:0}));
N.push(K.create(L.c,a,{top:M.top+j,left:M.left+j}));
N.push(K.create(L.r,e,{top:M.top+j,right:0}));
N.push(b);
return this.__lP=N.join(o);
},resize:function(Q,R,S){var T=this.__lR;
var innerWidth=R-T.left-T.right;
var innerHeight=S-T.top-T.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}Q.style.width=R+j;
Q.style.height=S+j;
Q.childNodes[1].style.width=innerWidth+j;
Q.childNodes[4].style.width=innerWidth+j;
Q.childNodes[7].style.width=innerWidth+j;
Q.childNodes[6].style.height=innerHeight+j;
Q.childNodes[7].style.height=innerHeight+j;
Q.childNodes[8].style.height=innerHeight+j;

if(qx.core.Variant.isSet(x,l)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(R%2==1){Q.childNodes[2].style.marginRight=h;
Q.childNodes[5].style.marginRight=h;
Q.childNodes[8].style.marginRight=h;
}else{Q.childNodes[2].style.marginRight=i;
Q.childNodes[5].style.marginRight=i;
Q.childNodes[8].style.marginRight=i;
}
if(S%2==1){Q.childNodes[3].style.marginBottom=h;
Q.childNodes[4].style.marginBottom=h;
Q.childNodes[5].style.marginBottom=h;
}else{Q.childNodes[3].style.marginBottom=i;
Q.childNodes[4].style.marginBottom=i;
Q.childNodes[5].style.marginBottom=i;
}}}},tint:function(I,J){},_applyBaseImage:function(B,C){{};

if(B){var G=this._resolveImageUrl(B);
var H=/(.*)(\.[a-z]+)$/.exec(G);
var F=H[1];
var E=H[2];
var D=this.__lQ={tl:F+u+E,t:F+v+E,tr:F+d+E,bl:F+m+E,b:F+q+E,br:F+w+E,l:F+c+E,c:F+k+E,r:F+t+E};
this.__lR=this._computeEdgeSizes(D);
}},_resolveImageUrl:function(y){return qx.util.AliasManager.getInstance().resolve(y);
},_computeEdgeSizes:function(z){var A=qx.util.ResourceManager.getInstance();
return {top:A.getImageHeight(z.t),bottom:A.getImageHeight(z.b),left:A.getImageWidth(z.l),right:A.getImageWidth(z.r)};
}},destruct:function(){this.__lP=this.__lQ=this.__lR=null;
}});
})();
(function(){var a="qx.ui.treevirtual.DefaultDataCellRenderer";
qx.Class.define(a,{extend:qx.ui.table.cellrenderer.Default,construct:function(){qx.ui.table.cellrenderer.Default.call(this);
},members:{_getCellStyle:function(b){var c=qx.ui.table.cellrenderer.Default.prototype._getCellStyle.call(this,b)+qx.ui.treevirtual.SimpleTreeDataCellRenderer.MAIN_DIV_STYLE;
return c;
}}});
})();
(function(){var a="qx.ui.treevirtual.SimpleTreeDataRowRenderer";
qx.Class.define(a,{extend:qx.ui.table.rowrenderer.Default,construct:function(){qx.ui.table.rowrenderer.Default.call(this);
},members:{updateDataRowElement:function(b,c){var f=b.table;
var h=b.rowData;
var g=f.getTableModel();
var e=g.getTreeColumn();
var d=h[e];
b.selected=d.bSelected;

if(d.bSelected){var i=b.row;
f.getSelectionModel()._addSelectionInterval(i,i);
}qx.ui.table.rowrenderer.Default.prototype.updateDataRowElement.call(this,b,c);
}}});
})();
(function(){var g="qx.ui.treevirtual.SelectionManager",f="Space",e="Enter";
qx.Class.define(g,{extend:qx.ui.table.selection.Manager,construct:function(h){qx.ui.table.selection.Manager.call(this);
this.__vc=h;
},members:{__vc:null,getTable:function(){return this.__vc;
},handleMoveKeyDown:function(E,F){var H=this.getSelectionModel();

switch(F.getModifiers()){case 0:break;
case qx.event.type.Dom.SHIFT_MASK:var G=H.getAnchorSelectionIndex();

if(G==-1){H.setSelectionInterval(E,E);
}else{H.setSelectionInterval(G,E);
}break;
}},_handleSelectEvent:function(j,k){var o=this;
function l(p,q,r){var C=p.getDataModel();
var w=C.getTreeColumn();
if(r instanceof qx.event.type.Mouse){if(!p.getFocusCellOnMouseMove()){var v=p._getPaneScrollerArr();

for(var i=0;i<v.length;i++){v[i]._focusCellAtPagePos(r.getViewportLeft(),r.getViewportTop());
}}}var u=p.getFocusedColumn();
if(u!=w){p.startEditing();
return false;
}var s=C.getValue(w,p.getFocusedRow());

if(!s){return false;
}if(r instanceof qx.event.type.Mouse){var y=p.getTableColumnModel();
var A=y._getColToXPosMap();
var D=qx.bom.element.Location.getLeft(p.getContentElement().getDomElement());

for(i=0;i<A[w].visX;i++){D+=y.getColumnWidth(A[i].visX);
}var x=r.getViewportLeft();
var z=2;
var t=D+(s.level-1)*19+2;

if(x>=t-z&&x<=t+19+z){C.setState(s,{bOpened:!s.bOpened});
return p.getOpenCloseClickSelectsRow()?false:true;
}else{return o._handleExtendedClick(p,r,s,D);
}}else{var B=r.getKeyIdentifier();

switch(B){case f:return false;
case e:if(!s.bHideOpenClose){C.setState(s,{bOpened:!s.bOpened});
}return p.getOpenCloseClickSelectsRow()?false:true;
default:return true;
}}}var n=l(this.__vc,j,k);
if(!n){var m=qx.ui.table.selection.Manager;
m.prototype._handleSelectEvent.call(this,j,k);
}},_handleExtendedClick:function(a,b,c,d){return false;
}},destruct:function(){this.__vc=null;
}});
})();
(function(){var n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",e="Reset column widths",b="changeBehavior",d="user-button",c="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){qx.ui.table.columnmodel.Basic.call(this);
this.__uw=false;
this.__ux=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:b}},members:{__ux:null,__uw:null,__uy:null,_applyBehavior:function(p,q){if(q!=null){q.dispose();
q=null;
}p._setNumColumns(this.getOverallColumnCount());
p.setTableColumnModel(this);
},init:function(u,v){qx.ui.table.columnmodel.Basic.prototype.init.call(this,u);

if(this.__uy==null){this.__uy=v;
v.addListener(n,this._onappear,this);
v.addListener(l,this._onTableWidthChanged,this);
v.addListener(k,this._onverticalscrollbarchanged,this);
v.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(c,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(u);
},getTable:function(){return this.__uy;
},_addResetColumnWidthButton:function(event){var t=event.getData();
var s=t.columnButton;
var r=t.menu;
var o;
o=s.factory(g);
r.add(o);
o=s.factory(d,{text:this.tr(e)});
r.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__uw){return ;
}this.__uw=true;
{};
this.getBehavior().onAppear(event,event.getType()!==n);
this.__uy._updateScrollerWidths();
this.__uy._updateScrollBarVisibility();
this.__uw=false;
this.__ux=true;
},_onTableWidthChanged:function(event){if(this.__uw||!this.__ux){return ;
}this.__uw=true;
{};
this.getBehavior().onTableWidthChanged(event);
this.__uw=false;
},_onverticalscrollbarchanged:function(event){if(this.__uw||!this.__ux){return ;
}this.__uw=true;
{};
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__uy&&!this.__uy.isDisposed()){this.__uy._updateScrollerWidths();
this.__uy._updateScrollBarVisibility();
}},this,0);
this.__uw=false;
},_oncolumnwidthchanged:function(event){if(this.__uw||!this.__ux){return ;
}this.__uw=true;
{};
this.getBehavior().onColumnWidthChanged(event);
this.__uw=false;
},_onvisibilitychanged:function(event){if(this.__uw||!this.__ux){return ;
}this.__uw=true;
{};
this.getBehavior().onVisibilityChanged(event);
this.__uw=false;
}},destruct:function(){this.__uy=null;
}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(e);
},members:{__uN:null,renderLayout:function(f,top,g,h){this.__uN=g;
},getComputedWidth:function(){return this.__uN;
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
(function(){var b="qx.ui.table.columnmodel.resizebehavior.Abstract",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,members:{_setNumColumns:function(i){throw new Error("_setNumColumns is abstract");
},onAppear:function(event,c){throw new Error("onAppear is abstract");
},onTableWidthChanged:function(event){throw new Error("onTableWidthChanged is abstract");
},onVerticalScrollBarChanged:function(event){throw new Error("onVerticalScrollBarChanged is abstract");
},onColumnWidthChanged:function(event){throw new Error("onColumnWidthChanged is abstract");
},onVisibilityChanged:function(event){throw new Error("onVisibilityChanged is abstract");
},_getAvailableWidth:function(){var e=this.getTableColumnModel();
var h=e.getTable();
var d=h._getPaneScrollerArr();

if(!d[0]||!d[0].getLayoutParent().getBounds()){return null;
}var g=d[0].getLayoutParent().getBounds().width;
var f=d[d.length-1];
g-=f.getPaneInsetRight();
return g;
}}});
})();
(function(){var s="Function",r="Boolean",q="minWidth",p="width",o="qx.ui.table.columnmodel.Resize",n="qx.ui.table.columnmodel.resizebehavior.Default",m="__uQ",k="maxWidth",j="__uP";
qx.Class.define(n,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){qx.ui.table.columnmodel.resizebehavior.Abstract.call(this);
this.__uO=[];
this.__uP=new qx.ui.layout.HBox();
this.__uP.connectToWidget(this);
this.__uQ=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:s,init:function(A){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:r,init:false},tableColumnModel:{check:o}},members:{__uP:null,__uR:null,__uO:null,__uQ:null,__uS:false,setWidth:function(J,K,L){if(J>=this.__uO.length){throw new Error("Column number out of range");
}this.__uO[J].setColumnWidth(K,L);
this.__uQ.schedule();
},setMinWidth:function(w,x){if(w>=this.__uO.length){throw new Error("Column number out of range");
}this.__uO[w].setMinWidth(x);
this.__uQ.schedule();
},setMaxWidth:function(M,N){if(M>=this.__uO.length){throw new Error("Column number out of range");
}this.__uO[M].setMaxWidth(N);
this.__uQ.schedule();
},set:function(O,P){for(var Q in P){switch(Q){case p:this.setWidth(O,P[Q]);
break;
case q:this.setMinWidth(O,P[Q]);
break;
case k:this.setMaxWidth(O,P[Q]);
break;
default:throw new Error("Unknown property: "+Q);
}}},onAppear:function(event,t){if(t===true||!this.__uS||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__uS=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var v=event.getData();
if(v.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(y){var z=this.__uO;
if(y<=z.length){z.splice(y,z.length);
return;
}for(var i=z.length;i<y;i++){z[i]=this.getNewResizeBehaviorColumnData()();
z[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__uR;
},_computeColumnsFlexWidth:function(){this.__uQ.cancel();
var V=this._getAvailableWidth();

if(V===null){return;
}var R=this.getTableColumnModel();
var T=R.getVisibleColumns();
var U=T.length;
var S=this.__uO;
var i,l;

if(U===0){return;
}var X=[];

for(i=0;i<U;i++){X.push(S[T[i]]);
}this.__uR=X;
this.__uT();
this.__uP.renderLayout(V,100);
for(i=0,l=X.length;i<l;i++){var W=X[i].getComputedWidth();
R.setColumnWidth(T[i],W);
}},__uT:function(){this.__uP.invalidateChildrenCache();
var u=this.__uR;

for(var i=0,l=u.length;i<l;i++){u[i].invalidateLayoutCache();
}},_extendNextColumn:function(event){var e=this.getTableColumnModel();
var h=event.getData();
var c=e.getVisibleColumns();
var b=this._getAvailableWidth();
var a=c.length;
if(h.newWidth>h.oldWidth){return ;
}var i;
var d;
var g=0;

for(i=0;i<a;i++){g+=e.getColumnWidth(c[i]);
}if(g<b){for(i=0;i<c.length;i++){if(c[i]==h.col){d=c[i+1];
break;
}}
if(d){var f=(b-(g-e.getColumnWidth(d)));
e.setColumnWidth(d,f);
}}},_extendLastColumn:function(event){var E=this.getTableColumnModel();
var I=event.getData();
if(I.visible){return;
}var D=E.getVisibleColumns();
if(D.length==0){return;
}var C=this._getAvailableWidth(E);
var B=D.length;
var i;
var G;
var H=0;

for(i=0;i<B;i++){H+=E.getColumnWidth(D[i]);
}if(H<C){G=D[D.length-1];
var F=(C-(H-E.getColumnWidth(G)));
E.setColumnWidth(G,F);
}},_getResizeColumnData:function(){return this.__uO;
}},destruct:function(){this.__uO=this.__uR=null;
this._disposeObjects(j,m);
}});
})();
(function(){var e="number",d="object",c="qx.ui.treevirtual.MNode";
qx.Mixin.define(c,{members:{nodeGet:function(y){if(typeof (y)==d){return y;
}else if(typeof (y)==e){return this.getTableModel().getData()[y];
}else{throw new Error("Expected node object or node id");
}},nodeToggleOpened:function(C){var D;
var E;

if(typeof (C)==d){D=C;
E=D.nodeId;
}else if(typeof (C)==e){E=C;
D=this.getTableModel().getData()[E];
}else{throw new Error("Expected node object or node id");
}this.getTableModel().setState(E,{bOpened:!D.bOpened});
},nodeSetState:function(z,A){var B;

if(typeof (z)==d){B=z.nodeId;
}else if(typeof (z)==e){B=z;
}else{throw new Error("Expected node object or node id");
}this.getTableModel().setState(B,A);
},nodeSetLabel:function(s,t){this.nodeSetState(s,{label:t});
},nodeGetLabel:function(J){var K=this.nodeGet(J);
return K.label;
},nodeSetSelected:function(a,b){this.nodeSetState(a,{bSelected:b});
},nodeGetSelected:function(p){var q=this.nodeGet(p);
return q.bSelected;
},nodeSetOpened:function(w,b){var x;

if(typeof (w)==d){x=w;
}else if(typeof (w)==e){x=this.getTableModel().getData()[w];
}else{throw new Error("Expected node object or node id");
}if(b!=x.bOpened){this.nodeToggleOpened(x);
}},nodeGetOpened:function(F){var G=this.nodeGet(F);
return G.bOpened;
},nodeSetHideOpenClose:function(r,b){this.nodeSetState(r,{bHideOpenClose:b});
},nodeGetHideOpenClose:function(j){var k=this.nodeGet(j);
return k.bHideOpenClose;
},nodeSetIcon:function(u,v){this.nodeSetState(u,{icon:v});
},nodeGetIcon:function(h){var i=this.nodeGet(h);
return i.icon;
},nodeSetSelectedIcon:function(L,M){this.nodeSetState(L,{iconSelected:M});
},nodeGetSelectedIcon:function(H){var I=this.nodeGet(H);
return I.iconSelected;
},nodeSetCellStyle:function(N,O){this.nodeSetState(N,{cellStyle:O});
},nodeGetCellStyle:function(f){var g=this.nodeGet(f);
return g.cellStyle;
},nodeSetLabelStyle:function(n,o){this.nodeSetState(n,{labelStyle:o});
},nodeGetLabelStyle:function(l){var m=this.nodeGet(l);
return m.cellStyle;
}}});
})();
(function(){var n="'>",m="[",l=", ",k="</span>",h="<span class='type-",g="</span> ",f="}",e="",d="]",c="{",K="map",J="<span class='object'>",I="]:",H="&gt;",G="<span class='object' title='Object instance with hash code: ",F="string",E="level-",D="0",C="&lt;",B="<span class='offset'>",u=":",v="qx.log.appender.Util",s="&amp;",t="&#39;",q="DIV",r="<span>",o="&quot;",p="<span class='type-key'>",w="</span>:<span class='type-",x="</span>: ",z=" ",y="]</span>: ",A="?";
qx.Class.define(v,{statics:{toHtml:function(L){var V=[];
var S,U,N,P;
V.push(B,this.formatOffset(L.offset,6),g);

if(L.object){var M=L.win.qx.core.ObjectRegistry.fromHashCode(L.object);

if(M){V.push(G+M.$$hash+n,M.classname,m,M.$$hash,y);
}}else if(L.clazz){V.push(J+L.clazz.classname,x);
}var O=L.items;

for(var i=0,T=O.length;i<T;i++){S=O[i];
U=S.text;

if(U instanceof Array){var P=[];

for(var j=0,R=U.length;j<R;j++){N=U[j];

if(typeof N===F){P.push(r+this.escapeHTML(N)+k);
}else if(N.key){P.push(p+N.key+w+N.type+n+this.escapeHTML(N.text)+k);
}else{P.push(h+N.type+n+this.escapeHTML(N.text)+k);
}}V.push(h+S.type+n);

if(S.type===K){V.push(c,P.join(l),f);
}else{V.push(m,P.join(l),d);
}V.push(k);
}else{V.push(h+S.type+n+this.escapeHTML(U)+g);
}}var Q=document.createElement(q);
Q.innerHTML=V.join(e);
Q.className=E+L.level;
return Q;
},formatOffset:function(Y,length){var bc=Y.toString();
var ba=(length||6)-bc.length;
var bb=e;

for(var i=0;i<ba;i++){bb+=D;
}return bb+bc;
},escapeHTML:function(W){return String(W).replace(/[<>&"']/g,this.__tB);
},__tB:function(a){var b={"<":C,">":H,"&":s,"'":t,'"':o};
return b[a]||A;
},toText:function(X){return this.toTextArray(X).join(z);
},toTextArray:function(bd){var bl=[];
bl.push(this.formatOffset(bd.offset,6));

if(bd.object){var be=bd.win.qx.core.ObjectRegistry.fromHashCode(bd.object);

if(be){bl.push(be.classname+m+be.$$hash+I);
}}else if(bd.clazz){bl.push(bd.clazz.classname+u);
}var bf=bd.items;
var bi,bk;

for(var i=0,bj=bf.length;i<bj;i++){bi=bf[i];
bk=bi.text;

if(bk instanceof Array){var bg=[];

for(var j=0,bh=bk.length;j<bh;j++){bg.push(bk[j].text);
}
if(bi.type===K){bl.push(c,bg.join(l),f);
}else{bl.push(m,bg.join(l),d);
}}else{bl.push(bk);
}}return bl;
}}});
})();
(function(){var d="debug",c="log",b="qx.log.appender.Native",a="qx.client";
qx.Class.define(b,{statics:{process:qx.core.Variant.select(a,{"gecko":function(m){if(window.console&&console.firebug){console[m.level].call(console,qx.log.appender.Util.toText(m));
}},"mshtml":function(g){if(window.console){var i=g.level;

if(i==d){i=c;
}var h=qx.log.appender.Util.toText(g);
console[i](h);
}},"webkit":function(j){if(window.console){var l=j.level;

if(l==d){l=c;
}var k=qx.log.appender.Util.toText(j);
console[l](k);
}},"opera":function(f){}})},defer:function(e){qx.log.Logger.register(e);
}});
})();
(function(){var k="",j='</div>',i="Up",h="none",g="keypress",f='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',d="Enter",c="px",b='.qxconsole .messages .user-result{background:white}',a='.qxconsole .messages .level-error{background:#FFE2D5}',V="div",U="user-command",T='<div class="command">',S='.qxconsole .command input:focus{outline:none;}',R='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',P='.qxconsole .messages div{padding:0px 4px;}',O='.qxconsole .messages .level-debug{background:white}',N='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',M="DIV",r='.qxconsole .messages .level-user{background:#E3EFE9}',s='<div class="qxconsole">',p="D",q='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',n='.qxconsole .messages .type-string{color:black;font-weight:normal;}',o='.qxconsole .control a{text-decoration:none;color:black;}',l='<div class="messages">',m='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',t='<input type="text"/>',u="clear",B='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',z='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',F='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',D='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',I='.qxconsole .messages .user-command{color:blue}',H="F7",w="qx.log.appender.Console",L='.qxconsole .messages .level-info{background:#DEEDFA}',K="block",J='.qxconsole .messages .level-warn{background:#FFF7D5}',v='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',x='.qxconsole .messages .user-error{background:#FFE2D5}',y='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',A='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',C=">>> ",E="Down",G='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(w,{statics:{init:function(){var bd=[F,y,o,f,P,I,b,x,O,L,J,a,r,n,G,m,z,q,R,N,Q,v,D,B,S];
qx.bom.Stylesheet.createElement(bd.join(k));
var bf=[s,A,l,j,T,t,j,j];
var bg=document.createElement(M);
bg.innerHTML=bf.join(k);
var be=bg.firstChild;
document.body.appendChild(bg.firstChild);
this.__FY=be;
this.__Ga=be.childNodes[1];
this.__Gb=be.childNodes[2].firstChild;
this.__Gg();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__Gh,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__Ga.innerHTML=k;
},process:function(W){this.__Ga.appendChild(qx.log.appender.Util.toHtml(W));
this.__Gc();
},__Gc:function(){this.__Ga.scrollTop=this.__Ga.scrollHeight;
},__Gd:true,toggle:function(){if(!this.__FY){this.init();
}else if(this.__FY.style.display==h){this.show();
}else{this.__FY.style.display=h;
}},show:function(){if(!this.__FY){this.init();
}else{this.__FY.style.display=K;
this.__Ga.scrollTop=this.__Ga.scrollHeight;
}},__Ge:[],execute:function(){var bc=this.__Gb.value;

if(bc==k){return;
}
if(bc==u){return this.clear();
}var ba=document.createElement(V);
ba.innerHTML=qx.log.appender.Util.escapeHTML(C+bc);
ba.className=U;
this.__Ge.push(bc);
this.__Gf=this.__Ge.length;
this.__Ga.appendChild(ba);
this.__Gc();

try{var bb=window.eval(bc);
}catch(Y){qx.log.Logger.error(Y);
}
if(bb!==undefined){qx.log.Logger.debug(bb);
}},__Gg:function(e){this.__Ga.style.height=(this.__FY.clientHeight-this.__FY.firstChild.offsetHeight-this.__FY.lastChild.offsetHeight)+c;
},__Gh:function(e){var bi=e.getKeyIdentifier();
if((bi==H)||(bi==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__FY){return;
}if(!qx.dom.Hierarchy.contains(this.__FY,e.getTarget())){return;
}if(bi==d&&this.__Gb.value!=k){this.execute();
this.__Gb.value=k;
}if(bi==i||bi==E){this.__Gf+=bi==i?-1:1;
this.__Gf=Math.min(Math.max(0,this.__Gf),this.__Ge.length);
var bh=this.__Ge[this.__Gf];
this.__Gb.value=bh||k;
this.__Gb.select();
}}},defer:function(X){qx.event.Registration.addListener(document.documentElement,g,X.__Gh,X);
}});
})();
(function(){var x=": ",w="Summary: (",v="qx.dev.ObjectSummary",u="\n",t=" Objects)\n\n",s=")\r\n",r=" (",q=" Objects)\r\n\r\n",p=", ";
qx.Class.define(v,{statics:{getInfo:function(){var y={};
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
var D=w+F+t;

for(var i=0;i<E.length;i++){D+=E[i].number+x+E[i].classname+u;
}return D;
},getNewObjects:function(){var d={};
var o=0;
var e;
var j=qx.core.ObjectRegistry.getRegistry();
var g={};
var n;

for(var k in j){e=j[k];

if(e&&e.__disposed===false){var h=e.classname;

if(d[h]==null){d[h]=1;
}else{d[h]++;
}n=g[h];

if(n==null){n=g[h]=new Array();
}n[n.length]=e.toHashCode();
o++;
}}
if(!this._m_dObjectList){this._m_dObjectList={};
}var c={};

for(var h in d){if(!(h in this._m_dObjectList)){this._m_dObjectList[h]=0;
}
if(this._m_dObjectList[h]>=0&&this._m_dObjectList[h]<d[h]){c[h]=d[h]-this._m_dObjectList[h];
}}this._m_dObjectList=d;
var m=[];

for(var f in c){m.push({classname:f,number:c[f],aHashCode:g[f]});
}m.sort(function(a,b){return b.number-a.number;
});
var l=w+o+q;

for(var i=0;i<m.length;i++){l+=m[i].number+x+m[i].classname+r+m[i].aHashCode.join(p)+s;
}return l;
}}});
})();
(function(){var cm="window",cl="",ck="childNodes",cj="nodeName",ci="nodeType",ch="document",cg="function",cf="firstChild",ce="qx.client",cd="external",bu="location",bt="[native code]",bs="lastChild",br="scrollY",bq="scrollWidth",bp="defaultView",bo="closed",bn="content",bm="qx",bl="</td><td>",ct="filters",cu="locationbar",cr="screenX",cs="previousSibling",cp="scrollX",cq="Global namespace is polluted by the following unknown objects:\n\n",cn="doctype",co="parent",cv="qx.dev.Pollution",cw="outerText",bS="applets",bR="parentElement",bU="designMode",bT="cookie",bW="fullScreen",bV="links",bY="pageXOffset",bX="frames",bQ="documentElement",bP="screenY",b="statusbar",c="history",d="sun",e="pkcs11",f="java",g="style",h="innerWidth",j="plugins",k="implementation",l="clientWidth",cA="compatMode",cz="length",cy="textContent",cx="controllers",cE="netscape",cD="self",cC="domConfig",cB="attributes",cG="clientHeight",cF="outerHeight",K="parentNode",L="innerHeight",I="title",J="ownerDocument",O="<table>",P="globalStorage",M="Global namespace is not polluted by any unknown objects.",N="toolbar",G="outerHTML",H="crypto",t="forms",s="scrollbars",v="frameElement",u="Components",p="body",o="clientInformation",r="offscreenBuffering",q="embeds",n="localName",m="scrollTop",U="isMultiLine",V="scrollLeft",W="images",X="event",Q="offsetHeight",R="scrollMaxY",S="sessionStorage",T="screen",Y="name",ba="offsetLeft",D="console",C="XMLHttpRequest",B="mshtml",A="nextSibling",z="innerText",y="menubar",x="scopeName",w="top",F="outerWidth",E=": ",bb="\n",bc="status",bd="contentEditable",be="anchors",bf="</table>",bg="<tr style='vertical-align:top'><td>",bh="scrollMaxX",bi="screenTop",bj="defaultStatus",bk="styleSheets",by="className",bx="personalbar",bw="</td></tr>",bv="currentStyle",bC="directories",bB="navigator",bA="pageYOffset",bz="screenLeft",bE="opener",bD="scrollHeight",bL="__firebug__",bM="Option",bJ="innerHTML",bK="tabIndex",bH="offsetTop",bI="[function]",bF="clipboardData",bG="Packages",bN="tagName",bO="offsetWidth",cb="mshtml|opera",ca="undefined",cc="Image";
qx.Class.define(cv,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bm,f,d,bG,bL,u,cx,S,P,D,X,r,bF,o,bM,cc,cd,bi,bz,cz,cm,ch,bu,bB,cE,co,bX,w,s,Y,cp,br,cD,T,c,bn,y,N,cu,bx,b,bC,bo,H,e,bE,bc,bj,h,L,F,cF,cr,bP,bY,bA,bh,R,bW,v,C],"document":[cC,bu,cA,k,bp,I,p,bk,bQ,cj,ci,cf,bs,cn,W,bS,bV,t,be,bT,q,j,bU,ck],"body":[cy,bJ,G,z,cw,x,bR,bN,ct,bd,ch,bv,U,cG,l,bs,cf,bH,ba,bO,Q,bK,by,cB,cs,A,J,n,ck,K,ci,cj,g,m,V,bq,bD]},getInfo:function(cS){var cT=qx.dev.Pollution.getTextList(cS||cm);

if(cT){return cq+cT;
}else{return M;
}},extract:function(cU){var cW=[];
var cV=qx.dev.Pollution.ignore[cU];
if(qx.core.Variant.isSet(ce,B)){if(cU==cm){cV=cV.slice(0);

for(var cX=0;cX<window.length;cX++){cV.push(cl+cX);
}}}var cY=qx.dev.Pollution.names[cU];

for(var da in cY){try{if(qx.core.Variant.isSet(ce,cb)){if(cU==cm&&da==cd){continue;
}}if(typeof cY[da]==ca||cY[da]===null){continue;
}if(typeof cY[da]==cg&&cY[da].toString().indexOf(bt)!=-1){continue;
}if(typeof cY[da].constructor==cg){if((cY[da].constructor.toString().indexOf(bt)!=-1)||(cY[da].constructor.toString().indexOf(bI)!=-1)){continue;
}}if(qx.lang.Array.contains(cV,da)){continue;
}}catch(a){continue;
}cW.push({"key":da,"value":cY[da]});
}return cW;
},getHtmlTable:function(cH){var cJ=[];
var cI=bg;
var cL=bl;
var cM=bw;
cJ.push(O);
var cK=this.extract(cH);

for(var i=0;i<cK.length;i++){cJ.push(cI+cK[i].key+cL+cK[i].value+cM);
}cJ.push(bf);
return cJ.join(cl);
},getTextList:function(cN){var cP=[];
var cQ=E;
var cR=bb;
var cO=this.extract(cN);

for(var i=0;i<cO.length;i++){cP.push(cO[i].key+cQ+cO[i].value+cR);
}return cP.join(cl);
}}});
})();


qx.$$loader.init();

