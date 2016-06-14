(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.test.Tokenizer","qx.theme":"qx.theme.Modern"};
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
  uris : [["__out__:demobrowser.demo.test.Tokenizer-qx.theme.Modern.js"]],
  urisBefore : [],
  packageHashes : {"0":"f4ba92683572"},
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

qx.$$packageData['f4ba92683572']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","demobrowser.demo"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","demobrowser.demo"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"]},"translations":{}};
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
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var j="</pre>",h="<pre>",g="js",f="",e="demobrowser.demo.test.Tokenizer",d="input",c="btn",b="html",a="output";
qx.Class.define(e,{extend:qx.application.Native,members:{main:function(){qx.application.Native.prototype.main.call(this);
var l=document.getElementById(d);
var o=document.getElementById(a);
document.getElementById(c).onclick=function(){var k=qx.dev.Tokenizer.tokenizeJavaScript(l.value);
o.innerHTML=qx.bom.String.escape(qx.util.Json.stringify(k,true));
};
var n=function(){var p=qx.dev.Tokenizer.tokenizeJavaScript(l.value);
var q=[];

for(var i=0;i<p.length;i++){q[i]=p[i].value;
}o.innerHTML=h+qx.bom.String.escape(q.join(f))+j;
};
document.getElementById(g).onclick=n;
var m=function(){o.innerHTML=h+qx.dev.Tokenizer.javaScriptToHtml(l.value)+j;
};
document.getElementById(b).onclick=m;
m();
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
(function(){var l="</span>",k="sym",j="nl",h="qxkey",g="ws",f=">",e="qqstr",d="<",c="qstr",b="linecomment",bg="ident",bf="keyword",be="regexp",bd="&",bc="|",bb="fullcomment",ba="atom",Y="\\r\\n|\\r|\\n",X="\\s*\\)*",W="\\s",s="^",t='["][^"]*["]',q="real",r="\\s*[,\\)]",o="<span class='string'>",p="[a-zA-Z_][a-zA-Z0-9_]*\\b",m="<span class='comment'>",n="[+-]?\\d+",w="\\s*\\(*\\s*",x="&nbsp;",F="qx.dev.Tokenizer",D="\\t",M="\\s*\\)*\\s*\\)",H="\\.(?:replace)\\s*\\(\\s*\\(*\\s*",S="\\)*\\.(?:test|exec)\\s*\\(\\s*",Q="<span class='regexp'>",z="int",V="'>",U="<span class='",T="(?:\\/(?!\\*)[^\\t\\n\\r\\f\\v\\/]+?\\/[mgi]*)",y=".",B="\\s*\\)*\\s*?,?",C="[\\(,]\\s*",E="<span class='ident'>",G="g",I="[+-]?\\d+(([.]\\d+)*([eE][+-]?\\d+))?",N="\\/\\*(?:.|[\\n\\r])*?\\*\\/",R="\n",u="$",v="['][^']*[']",A="tab",L="\\/\\/.*?[\\n\\r$]",K="<br>",J=" ",P="(?::|=|\\?)\\s*\\(*\\s*",O="\\.(?:match|search|split)\\s*\\(\\s*\\(*\\s*";
qx.Class.define(F,{extend:qx.core.Object,statics:{tokenizeJavaScript:function(bp){var bT={"break":1,"case":1,"catch":1,"continue":1,"default":1,"delete":1,"do":1,"else":1,"finally":1,"for":1,"function":1,"if":1,"in":1,"instanceof":1,"new":1,"return":1,"switch":1,"throw":1,"try":1,"typeof":1,"var":1,"while":1,"with":1};
var bG={"void":1,"null":1,"true":1,"false":1,"NaN":1,"Infinity":1,"this":1};
var bs={"statics":1,"members":1,"construct":1,"destruct":1,"events":1,"properties":1,"extend":1,"implement":1};
var bC=function(bo){return new RegExp(s+bo+u);
};
var bM=L;
var bD=N;
var bw=p;
var bF=n;
var bA=I;
var bI=t;
var bH=v;
var bu=D;
var bP=Y;
var bR=W;
var bB=T;
var bE=[O+bB+M,H+bB+B,w+bB+S,P+bB+X,C+bB+r].join(bc);
var bN=bC(bM);
var bx=bC(bD);
var bK=bC(bw);
var bt=bC(bF);
var bQ=bC(bA);
var bz=bC(bI);
var br=bC(bH);
var bL=bC(bu);
var by=bC(bP);
var bq=bC(bR);
var bv=bC(bE);
var bJ=new RegExp([bM,bD,bw,bF,bA,bI,bH,bH,bu,bP,bR,bE,y].join(bc),G);
var bO=[];
var a=bp.match(bJ);

for(var i=0;i<a.length;i++){var bS=a[i];

if(bS.match(bN)){bO.push({type:b,value:bS});
}else if(bS.match(bx)){bO.push({type:bb,value:bS});
}else if(bS.match(bv)){bO.push({type:be,value:bS});
}else if(bS.match(br)){bO.push({type:c,value:bS});
}else if(bS.match(bz)){bO.push({type:e,value:bS});
}else if(bT[bS]){bO.push({type:bf,value:bS});
}else if(bG[bS]){bO.push({type:ba,value:bS});
}else if(bs[bS]){bO.push({type:h,value:bS});
}else if(bS.match(bK)){bO.push({type:bg,value:bS});
}else if(bS.match(bQ)){bO.push({type:q,value:bS});
}else if(bS.match(bt)){bO.push({type:z,value:bS});
}else if(bS.match(by)){bO.push({type:j,value:bS});
}else if(bS.match(bC(bq))){bO.push({type:g,value:bS});
}else if(bS.match(bL)){bO.push({type:A,value:bS});
}else if(bS==f){bO.push({type:k,value:f});
}else if(bS==d){bO.push({type:k,value:d});
}else if(bS==bd){bO.push({type:k,value:bd});
}else{bO.push({type:k,value:bS});
}}return bO;
},javaScriptToHtml:function(bh){var bl=qx.dev.Tokenizer.tokenizeJavaScript(bh);
var bk=new qx.util.StringBuilder();

for(var i=0;i<bl.length;i++){var bm=bl[i];
var bj=qx.bom.String.escape(bm.value);

switch(bm.type){case be:bk.add(Q,bj,l);
break;
case bg:bk.add(E,bj,l);
break;
case b:case bb:bk.add(m,bj,l);
break;
case c:case e:bk.add(o,bj,l);
break;
case bf:case ba:case h:bk.add(U,bm.type,V,bj,l);
break;
case j:var bi=qx.bom.client.Engine.MSHTML?K:R;
bk.add(bi);
break;
case g:var bn=qx.bom.client.Engine.MSHTML?x:J;
bk.add(bn);
break;
default:bk.add(bj);
}}return bk.get();
}}});
})();
(function(){var j="mshtml",h="pop.push.reverse.shift.sort.splice.unshift.join.slice",g="number",f="qx.type.BaseArray",e="qx.client",d=".";
qx.Class.define(f,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function o(q){if(qx.core.Variant.isSet(e,j)){n.prototype={length:0,$$isArray:true};
var t=h.split(d);

for(var length=t.length;length;){n.prototype[t[--length]]=Array.prototype[t[length]];
}}var u=Array.prototype.slice;
n.prototype.concat=function(){var l=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var k;

if(arguments[i] instanceof n){k=u.call(arguments[i],0);
}else if(arguments[i] instanceof Array){k=arguments[i];
}else{k=[arguments[i]];
}l.push.apply(l,k);
}return l;
};
n.prototype.toString=function(){return u.call(this,0).toString();
};
n.prototype.toLocaleString=function(){return u.call(this,0).toLocaleString();
};
n.prototype.constructor=n;
n.prototype.indexOf=qx.lang.Core.arrayIndexOf;
n.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
n.prototype.forEach=qx.lang.Core.arrayForEach;
n.prototype.some=qx.lang.Core.arraySome;
n.prototype.every=qx.lang.Core.arrayEvery;
var r=qx.lang.Core.arrayFilter;
var s=qx.lang.Core.arrayMap;
n.prototype.filter=function(){var a=new this.constructor;
a.push.apply(a,r.apply(this,arguments));
return a;
};
n.prototype.map=function(){var p=new this.constructor;
p.push.apply(p,s.apply(this,arguments));
return p;
};
n.prototype.slice=function(){var b=new this.constructor;
b.push.apply(b,Array.prototype.slice.apply(this,arguments));
return b;
};
n.prototype.splice=function(){var c=new this.constructor;
c.push.apply(c,Array.prototype.splice.apply(this,arguments));
return c;
};
n.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
n.prototype.valueOf=function(){return this.length;
};
return n;
}function n(length){if(arguments.length===1&&typeof length===g){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function m(){}m.prototype=[];
n.prototype=new m;
n.prototype.length=0;
qx.type.BaseArray=o(n);
})();
})();
(function(){var b="",a="qx.util.StringBuilder";
qx.Class.define(a,{extend:qx.type.BaseArray,members:{clear:function(){this.length=0;
},get:function(){return this.join(b);
},add:null,isEmpty:function(){return this.length===0;
},size:function(){return this.join(b).length;
}},defer:function(c,d){d.add=d.push;
d.toString=d.get;
d.valueOf=d.get;
}});
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
(function(){var C=",",B="",A="string",z="null",y="qx.jsonDebugging",x='"',w="__pH",v='\\u00',u="new Date(Date.UTC(",t="__px",Y='\\\\',X='\\f',W="__pz",V='\\"',U="))",T="}",S='(',R=":",Q="{",P='\\r',J="__pI",K='\\t',H="]",I="__py",F="[",G="Use 'parse' instead!",D="qx.jsonEncodeUndefined",E='\\b',L="__pA",M="qx.util.Json",O=')',N='\\n';
qx.Class.define(M,{statics:{__pv:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__pw:{"function":t,"boolean":I,"number":W,"string":L,"object":w,"undefined":J},__px:function(bj,bk){return String(bj);
},__py:function(bd,be){return String(bd);
},__pz:function(bb,bc){return isFinite(bb)?String(bb):z;
},__pA:function(bg,bh){var bi;

if(/["\\\x00-\x1f]/.test(bg)){bi=bg.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__pC);
}else{bi=bg;
}return x+bi+x;
},__pB:{'\b':E,'\t':K,'\n':N,'\f':X,'\r':P,'"':V,'\\':Y},__pC:function(a,b){var s=qx.util.Json.__pB[b];

if(s){return s;
}s=b.charCodeAt();
return v+Math.floor(s/16).toString(16)+(s%16).toString(16);
},__pD:function(bn,bo){var bq=[],bt=true,bs,bp;
var br=qx.util.Json.__pK;
bq.push(F);

if(br){qx.util.Json.__pE+=qx.util.Json.BEAUTIFYING_INDENT;
bq.push(qx.util.Json.__pE);
}
for(var i=0,l=bn.length;i<l;i++){bp=bn[i];
bs=this.__pw[typeof bp];

if(bs){bp=this[bs](bp,i+B);

if(typeof bp==A){if(!bt){bq.push(C);

if(br){bq.push(qx.util.Json.__pE);
}}bq.push(bp);
bt=false;
}}}
if(br){qx.util.Json.__pE=qx.util.Json.__pE.substring(0,qx.util.Json.__pE.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bq.push(qx.util.Json.__pE);
}bq.push(H);
return bq.join(B);
},__pF:function(c,d){var e=c.getUTCFullYear()+C+c.getUTCMonth()+C+c.getUTCDate()+C+c.getUTCHours()+C+c.getUTCMinutes()+C+c.getUTCSeconds()+C+c.getUTCMilliseconds();
return u+e+U;
},__pG:function(k,m){var p=[],r=true,o,n;
var q=qx.util.Json.__pK;
p.push(Q);

if(q){qx.util.Json.__pE+=qx.util.Json.BEAUTIFYING_INDENT;
p.push(qx.util.Json.__pE);
}
for(var m in k){n=k[m];
o=this.__pw[typeof n];

if(o){n=this[o](n,m);

if(typeof n==A){if(!r){p.push(C);

if(q){p.push(qx.util.Json.__pE);
}}p.push(this.__pA(m),R,n);
r=false;
}}}
if(q){qx.util.Json.__pE=qx.util.Json.__pE.substring(0,qx.util.Json.__pE.length-qx.util.Json.BEAUTIFYING_INDENT.length);
p.push(qx.util.Json.__pE);
}p.push(T);
return p.join(B);
},__pH:function(f,g){if(f){if(qx.lang.Type.isFunction(f.toJSON)&&f.toJSON!==this.__pv){return this.__pJ(f.toJSON(g),g);
}else if(qx.lang.Type.isDate(f)){return this.__pF(f,g);
}else if(qx.lang.Type.isArray(f)){return this.__pD(f,g);
}else if(qx.lang.Type.isObject(f)){return this.__pG(f,g);
}return B;
}return z;
},__pI:function(bl,bm){if(qx.core.Setting.get(D)){return z;
}},__pJ:function(h,j){return this[this.__pw[typeof h]](h,j);
},stringify:function(bu,bv){this.__pK=bv;
this.__pE=this.BEAUTIFYING_LINE_END;
var bw=this.__pJ(bu,B);

if(typeof bw!=A){bw=null;
}if(qx.core.Setting.get(y)){qx.log.Logger.debug(this,"JSON request: "+bw);
}return bw;
},parse:function(by,bz){if(bz===undefined){bz=true;
}
if(qx.core.Setting.get(y)){qx.log.Logger.debug(this,"JSON response: "+by);
}
if(bz){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(by.replace(/"(\\.|[^"\\])*"/g,B))){throw new Error("Could not parse JSON string!");
}}
try{var bA=(by&&by.length>0)?eval(S+by+O):null;
return bA;
}catch(bx){throw new Error("Could not evaluate JSON string: "+bx.message);
}},parseQx:function(bf){qx.log.Logger.deprecatedMethodWarning(arguments.callee,G);
return qx.util.Json.parse(bf,false);
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(ba){ba.__pv=Date.prototype.toJSON;
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
(function(){var f="qx.event.handler.UserAction";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){qx.core.Object.call(this);
this.__dt=h;
this.__du=h.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dt:null,__du:null,canHandleEvent:function(a,b){},registerEvent:function(c,d,e){},unregisterEvent:function(i,j,k){}},destruct:function(){this.__dt=this.__du=null;
},defer:function(g){qx.event.Registration.addHandler(g);
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
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var c="qx.ui.decoration.IDecorator";
qx.Interface.define(c,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(a,b){},getInsets:function(){}}});
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
(function(){var i="px",h="qx.ui.decoration.Background",g="",f="_applyStyle",e="Color",d="absolute";
qx.Class.define(h,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(c){qx.ui.decoration.Abstract.call(this);

if(c!=null){this.setBackgroundColor(c);
}},properties:{backgroundColor:{check:e,nullable:true,apply:f}},members:{__sb:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sb;
},getMarkup:function(){if(this.__sb){return this.__sb;
}var a={position:d,top:0,left:0};
var b=this._generateBackgroundMarkup(a);
return this.__sb=b;
},resize:function(j,k,l){j.style.width=k+i;
j.style.height=l+i;
},tint:function(m,n){var o=qx.theme.manager.Color.getInstance();

if(n==null){n=this.getBackgroundColor();
}m.style.backgroundColor=o.resolve(n)||g;
},_applyStyle:function(){{};
}},destruct:function(){this.__sb=null;
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
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bs="decoration/table/header-cell.png",br="decoration/form/input.png",bq="#f8f8f8",bp="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bo="#b6b6b6",bn="background-pane",bm="repeat-y",bl="decoration/form/input-focused.png",bk="#33508D",bj="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="black",p="decoration/form/button-c.png",q="decoration/scrollbar/scrollbar-bg-vertical.png",n="decoration/form/button.png",o="decoration/form/button-checked.png",B="decoration/tabview/tab-button-left-inactive.png",C="decoration/groupbox/groupbox.png",O="#FAFAFA",K="decoration/pane/pane.png",W="dotted",R="decoration/toolbar/toolbar-part.gif",bf="decoration/tabview/tab-button-top-inactive.png",bc="decoration/menu/bar-background.png",G="center",bi="decoration/tabview/tab-button-bottom-active.png",bh="decoration/form/button-hovered.png",bg="decoration/form/tooltip-error-arrow.png",F="decoration/window/captionbar-inactive.png",I="qx/decoration/Modern",J="decoration/menu/background.png",M="decoration/window/statusbar.png",P="border-focused",S="table-focus-indicator",Y="#F2F2F2",be="decoration/form/button-checked-c.png",v="decoration/scrollbar/scrollbar-bg-horizontal.png",w="qx.theme.modern.Decoration",H="#f4f4f4",V="decoration/shadow/shadow-small.png",U="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",bb="decoration/form/tooltip-error.png",ba="decoration/form/button-focused.png",Q="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",a="decoration/tabview/tab-button-right-active.png",bd="decoration/form/button-pressed.png",x="no-repeat",y="decoration/window/captionbar-active.png",L="decoration/tabview/tab-button-left-active.png",b="background-splitpane",c="decoration/form/button-checked-focused.png",E="#C5C5C5",z="decoration/toolbar/toolbar-gradient.png",A="decoration/tabview/tab-button-right-inactive.png",D="#b8b8b8",N="decoration/shadow/shadow.png";
qx.Theme.define(w,{aliases:{decoration:I},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bj,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bj,backgroundRepeat:l,bottom:[2,m,bk]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bk]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:C}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:W}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bg,backgroundPositionY:G,backgroundRepeat:x,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:v,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:q,backgroundRepeat:bm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bh,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:P,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:z,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:p,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:be,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:D,colorRight:H,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:R,backgroundRepeat:bm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bi}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:L}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:a}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:A}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bn,width:3,color:b,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bn,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:y}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:S,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthRight:1,colorRight:Y,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:E,widthBottom:1,colorBottom:O}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bc,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:l}}}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var hv="button-frame",hu="atom",ht="widget",hs="main",hr="button",hq="text-selected",hp="image",ho="bold",hn="middle",hm="background-light",fY="text-disabled",fX="groupbox",fW="decoration/arrows/down.png",fV="cell",fU="selected",fT="border-invalid",fS="input",fR="input-disabled",fQ="menu-button",fP="input-focused-invalid",hC="toolbar-button",hD="spinner",hA="input-focused",hB="popup",hy="tooltip",hz="label",hw="list",hx="tree-item",hE="treevirtual-contract",hF="scrollbar",gU="datechooser/nav-button",gT="text-hovered",gW="center",gV="treevirtual-expand",gY="textfield",gX="decoration/arrows/right.png",hb="background-application",ha="radiobutton",gS="white",gR="invalid",dV="combobox",dW="right-top",dX="checkbox",dY="text-title",ea="qx/static/blank.gif",eb="scrollbar/button",ec="right",ed="combobox/button",ee="icon/16/places/folder.png",ef="text-label",hT="decoration/tree/closed.png",hS="scrollbar-slider-horizontal",hR="decoration/arrows/left.png",hQ="button-focused",hX="text-light",hW="menu-slidebar-button",hV="text-input",hU="slidebar/button-forward",ia="background-splitpane",hY=".png",eX="decoration/tree/open.png",eY="default",eV="decoration/arrows/down-small.png",eW="datechooser",fc="slidebar/button-backward",fd="selectbox",fa="treevirtual-folder",fb="shadow-popup",eT="icon/16/mimetypes/office-document.png",eU="background-medium",ez="table",ey="decoration/arrows/up.png",eB="decoration/form/",eA="",ev="-invalid",eu="icon/16/places/folder-open.png",ex="button-checked",ew="decoration/window/maximize-active-hovered.png",et="radiobutton-hovered",es="keyboard-focus",fj="decoration/cursors/",fk="slidebar",fl="tooltip-error-arrow",fm="table-scroller-focus-indicator",ff="move-frame",fg="nodrop",fh="decoration/table/boolean-true.png",fi="table-header-cell",fn="menu",fo="app-header",eM="row-layer",eL="text-inactive",eK="move",eJ="radiobutton-checked-focused",eI="decoration/window/restore-active-hovered.png",eH="shadow-window",eG="table-column-button",eF="right.png",eQ="tabview-page-button-bottom-inactive",eP="tooltip-error",fp="window-statusbar",fq="button-hovered",fr="decoration/scrollbar/scrollbar-",fs="background-tip",ft="scrollbar-slider-horizontal-disabled",fu="table-scroller-header",fv="button-pressed",fw="table-pane",fx="decoration/window/close-active.png",fy="native",gh="checkbox-hovered",gg="button-invalid-shadow",gf="checkbox-checked",ge="decoration/window/minimize-active-hovered.png",gl="menubar",gk="icon/16/actions/dialog-cancel.png",gj="tabview-page-button-top-inactive",gi="tabview-page-button-left-inactive",gp="menu-slidebar",go="toolbar-button-checked",gM="decoration/tree/open-selected.png",gN="radiobutton-checked",gK="decoration/window/minimize-inactive.png",gL="icon/16/apps/office-calendar.png",gI="group",gJ="tabview-page-button-right-inactive",gG="decoration/window/minimize-active.png",gH="decoration/window/restore-inactive.png",gO="checkbox-checked-focused",gP="splitpane",hf="combobox/textfield",he="button-preselected-focused",hh="decoration/window/close-active-hovered.png",hg="qx/icon/Tango/16/actions/window-close.png",hj="checkbox-pressed",hi="button-disabled",hl="selected-dragover",hk="border-separator",hd="decoration/window/maximize-inactive.png",hc="dragover",hM="scrollarea",hN="scrollbar-vertical",hO="decoration/menu/checkbox-invert.gif",hP="decoration/toolbar/toolbar-handle-knob.gif",hI="icon/22/mimetypes/office-document.png",hJ="button-preselected",hK="button-checked-focused",hL="up.png",hG="best-fit",hH="decoration/tree/closed-selected.png",dU="qx.theme.modern.Appearance",dT="text-active",dS="toolbar-button-hovered",dR="progressive-table-header",dQ="decoration/table/select-column-order.png",dP="decoration/menu/radiobutton.gif",dO="decoration/arrows/forward.png",dN="decoration/table/descending.png",dM="window-captionbar-active",dL="checkbox-checked-hovered",ei="scrollbar-slider-vertical",ej="toolbar",eg="alias",eh="decoration/window/restore-active.png",em="decoration/table/boolean-false.png",en="checkbox-checked-disabled",ek="icon/32/mimetypes/office-document.png",el="radiobutton-checked-disabled",ep="tabview-pane",eq="decoration/arrows/rewind.png",gt="checkbox-focused",gn="top",gA="#EEE",gw="icon/16/actions/dialog-ok.png",gc="radiobutton-checked-hovered",ga="table-header-cell-hovered",eD="window",gd="text-gray",eO="decoration/menu/radiobutton-invert.gif",eN="text-placeholder",fH="slider",fI="keep-align",fJ="down.png",fK="tabview-page-button-top-active",fL="icon/32/places/folder-open.png",fM="icon/22/places/folder.png",fN="decoration/window/maximize-active.png",fO="checkbox-checked-pressed",fF="decoration/window/close-inactive.png",fG="tabview-page-button-left-active",gb="toolbar-part",gz="decoration/splitpane/knob-vertical.png",gy=".gif",gx="icon/22/places/folder-open.png",gE="radiobutton-checked-pressed",gD="table-statusbar",gC="radiobutton-pressed",gB="window-captionbar-inactive",gv="copy",gu="radiobutton-focused",eo="decoration/arrows/down-invert.png",eS="decoration/menu/checkbox.gif",eR="decoration/splitpane/knob-horizontal.png",gm="icon/32/places/folder.png",fe="toolbar-separator",gs="tabview-page-button-bottom-active",gr="decoration/arrows/up-small.png",gq="decoration/table/ascending.png",eC="decoration/arrows/up-invert.png",gF="small",er="tabview-page-button-right-active",eE="-disabled",fz="scrollbar-horizontal",fA="progressive-table-header-cell",fB="menu-separator",fC="pane",fD="decoration/arrows/right-invert.png",fE="left.png",gQ="icon/16/actions/view-refresh.png";
qx.Theme.define(dU,{appearances:{"widget":{},"root":{style:function(dd){return {backgroundColor:hb,textColor:ef,font:eY};
}},"label":{style:function(dr){return {textColor:dr.disabled?fY:undefined};
}},"move-frame":{style:function(A){return {decorator:hs};
}},"resize-frame":ff,"dragdrop-cursor":{style:function(ca){var cb=fg;

if(ca.copy){cb=gv;
}else if(ca.move){cb=eK;
}else if(ca.alias){cb=eg;
}return {source:fj+cb+gy,position:dW,offset:[2,16,2,6]};
}},"image":{style:function(bx){return {opacity:!bx.replacement&&bx.disabled?0.3:1};
}},"atom":{},"atom/label":hz,"atom/icon":hp,"popup":{style:function(T){return {decorator:hs,backgroundColor:hm,shadow:fb};
}},"button-frame":{alias:hu,style:function(dF){var dH,dG;

if(dF.checked&&dF.focused&&!dF.inner){dH=hK;
dG=undefined;
}else if(dF.disabled){dH=hi;
dG=undefined;
}else if(dF.pressed){dH=fv;
dG=gT;
}else if(dF.checked){dH=ex;
dG=undefined;
}else if(dF.hovered){dH=fq;
dG=gT;
}else if(dF.preselected&&dF.focused&&!dF.inner){dH=he;
dG=gT;
}else if(dF.preselected){dH=hJ;
dG=gT;
}else if(dF.focused&&!dF.inner){dH=hQ;
dG=undefined;
}else{dH=hr;
dG=undefined;
}return {decorator:dH,textColor:dG,shadow:dF.invalid&&!dF.disabled?gg:undefined};
}},"button-frame/image":{style:function(cX){return {opacity:!cX.replacement&&cX.disabled?0.5:1};
}},"button":{alias:hv,include:hv,style:function(cv){return {padding:[2,8],center:true};
}},"hover-button":{alias:hu,include:hu,style:function(dm){return {decorator:dm.hovered?fU:undefined,textColor:dm.hovered?hq:undefined};
}},"splitbutton":{},"splitbutton/button":hr,"splitbutton/arrow":{alias:hr,include:hr,style:function(bD){return {icon:fW,padding:2,marginLeft:1};
}},"checkbox":{alias:hu,style:function(cB){var cD;

if(cB.checked&&cB.focused){cD=gO;
}else if(cB.checked&&cB.disabled){cD=en;
}else if(cB.checked&&cB.pressed){cD=fO;
}else if(cB.checked&&cB.hovered){cD=dL;
}else if(cB.checked){cD=gf;
}else if(cB.focused){cD=gt;
}else if(cB.pressed){cD=hj;
}else if(cB.hovered){cD=gh;
}else{cD=dX;
}var cC=cB.invalid&&!cB.disabled?ev:eA;
return {icon:eB+cD+cC+hY,gap:6};
}},"radiobutton":{alias:hu,style:function(cI){var cK;

if(cI.checked&&cI.focused){cK=eJ;
}else if(cI.checked&&cI.disabled){cK=el;
}else if(cI.checked&&cI.pressed){cK=gE;
}else if(cI.checked&&cI.hovered){cK=gc;
}else if(cI.checked){cK=gN;
}else if(cI.focused){cK=gu;
}else if(cI.pressed){cK=gC;
}else if(cI.hovered){cK=et;
}else{cK=ha;
}var cJ=cI.invalid&&!cI.disabled?ev:eA;
return {icon:eB+cK+cJ+hY,gap:6};
}},"textfield":{style:function(bG){var bL;
var bJ=!!bG.focused;
var bK=!!bG.invalid;
var bH=!!bG.disabled;

if(bJ&&bK&&!bH){bL=fP;
}else if(bJ&&!bK&&!bH){bL=hA;
}else if(bH){bL=fR;
}else if(!bJ&&bK&&!bH){bL=fT;
}else{bL=fS;
}var bI;

if(bG.disabled){bI=fY;
}else if(bG.showingPlaceholder){bI=eN;
}else{bI=hV;
}return {decorator:bL,padding:[2,4,1],textColor:bI};
}},"textarea":{include:gY,style:function(d){return {padding:4};
}},"spinner":{style:function(I){var M;
var K=!!I.focused;
var L=!!I.invalid;
var J=!!I.disabled;

if(K&&L&&!J){M=fP;
}else if(K&&!L&&!J){M=hA;
}else if(J){M=fR;
}else if(!K&&L&&!J){M=fT;
}else{M=fS;
}return {decorator:M};
}},"spinner/textfield":{style:function(cp){return {marginRight:2,padding:[2,4,1],textColor:cp.disabled?fY:hV};
}},"spinner/upbutton":{alias:hv,include:hv,style:function(dg){return {icon:gr,padding:dg.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:hv,include:hv,style:function(cc){return {icon:eV,padding:cc.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":dV,"datefield/button":{alias:ed,include:ed,style:function(cn){return {icon:gL,padding:[0,3],decorator:undefined};
}},"datefield/textfield":hf,"datefield/list":{alias:eW,include:eW,style:function(H){return {decorator:undefined};
}},"groupbox":{style:function(V){return {legendPosition:gn};
}},"groupbox/legend":{alias:hu,style:function(cs){return {padding:[1,0,1,4],textColor:cs.invalid?gR:dY,font:ho};
}},"groupbox/frame":{style:function(f){return {padding:12,decorator:gI};
}},"check-groupbox":fX,"check-groupbox/legend":{alias:dX,include:dX,style:function(dc){return {padding:[1,0,1,4],textColor:dc.invalid?gR:dY,font:ho};
}},"radio-groupbox":fX,"radio-groupbox/legend":{alias:ha,include:ha,style:function(bM){return {padding:[1,0,1,4],textColor:bM.invalid?gR:dY,font:ho};
}},"scrollarea":{style:function(cU){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(C){return {backgroundColor:hb};
}},"scrollarea/pane":ht,"scrollarea/scrollbar-x":hF,"scrollarea/scrollbar-y":hF,"scrollbar":{style:function(ig){if(ig[fy]){return {};
}return {width:ig.horizontal?undefined:16,height:ig.horizontal?16:undefined,decorator:ig.horizontal?fz:hN,padding:1};
}},"scrollbar/slider":{alias:fH,style:function(cu){return {padding:cu.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:hv,style:function(bl){var bm=bl.horizontal?hS:ei;

if(bl.disabled){bm+=eE;
}return {decorator:bm,minHeight:bl.horizontal?undefined:9,minWidth:bl.horizontal?9:undefined};
}},"scrollbar/button":{alias:hv,include:hv,style:function(br){var bs=fr;

if(br.left){bs+=fE;
}else if(br.right){bs+=eF;
}else if(br.up){bs+=hL;
}else{bs+=fJ;
}
if(br.left||br.right){return {padding:[0,0,0,br.left?3:4],icon:bs,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:bs,width:14,height:15};
}}},"scrollbar/button-begin":eb,"scrollbar/button-end":eb,"slider":{style:function(bN){var bR;
var bP=!!bN.focused;
var bQ=!!bN.invalid;
var bO=!!bN.disabled;

if(bP&&bQ&&!bO){bR=fP;
}else if(bP&&!bQ&&!bO){bR=hA;
}else if(bO){bR=fR;
}else if(!bP&&bQ&&!bO){bR=fT;
}else{bR=fS;
}return {decorator:bR};
}},"slider/knob":{include:hv,style:function(v){return {decorator:v.disabled?ft:hS,shadow:undefined,height:14,width:14};
}},"list":{alias:hM,style:function(cg){var ck;
var ci=!!cg.focused;
var cj=!!cg.invalid;
var ch=!!cg.disabled;

if(ci&&cj&&!ch){ck=fP;
}else if(ci&&!cj&&!ch){ck=hA;
}else if(ch){ck=fR;
}else if(!ci&&cj&&!ch){ck=fT;
}else{ck=fS;
}return {backgroundColor:hm,decorator:ck};
}},"list/pane":ht,"listitem":{alias:hu,style:function(cE){var cF;

if(cE.dragover){cF=cE.selected?hl:hc;
}else{cF=cE.selected?fU:undefined;
}return {padding:cE.dragover?[4,4,2,4]:4,textColor:cE.selected?hq:undefined,decorator:cF};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:hv,include:hv,style:function(dC){return {padding:5,center:true,icon:dC.vertical?fW:gX};
}},"slidebar/button-backward":{alias:hv,include:hv,style:function(dh){return {padding:5,center:true,icon:dh.vertical?ey:hR};
}},"tabview":{style:function(cm){return {contentPadding:16};
}},"tabview/bar":{alias:fk,style:function(cN){var cO={marginBottom:cN.barTop?-1:0,marginTop:cN.barBottom?-4:0,marginLeft:cN.barRight?-3:0,marginRight:cN.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(cN.barTop||cN.barBottom){cO.paddingLeft=5;
cO.paddingRight=7;
}else{cO.paddingTop=5;
cO.paddingBottom=7;
}return cO;
}},"tabview/bar/button-forward":{include:hU,alias:hU,style:function(db){if(db.barTop||db.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:fc,alias:fc,style:function(dw){if(dw.barTop||dw.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(cA){return {decorator:ep,minHeight:100,marginBottom:cA.barBottom?-1:0,marginTop:cA.barTop?-1:0,marginLeft:cA.barLeft?-1:0,marginRight:cA.barRight?-1:0};
}},"tabview-page":ht,"tabview-page/button":{alias:hu,style:function(n){var t,p=0;
var s=0,o=0,q=0,r=0;

if(n.checked){if(n.barTop){t=fK;
p=[6,14];
q=n.firstTab?0:-5;
r=n.lastTab?0:-5;
}else if(n.barBottom){t=gs;
p=[6,14];
q=n.firstTab?0:-5;
r=n.lastTab?0:-5;
}else if(n.barRight){t=er;
p=[6,13];
s=n.firstTab?0:-5;
o=n.lastTab?0:-5;
}else{t=fG;
p=[6,13];
s=n.firstTab?0:-5;
o=n.lastTab?0:-5;
}}else{if(n.barTop){t=gj;
p=[4,10];
s=4;
q=n.firstTab?5:1;
r=1;
}else if(n.barBottom){t=eQ;
p=[4,10];
o=4;
q=n.firstTab?5:1;
r=1;
}else if(n.barRight){t=gJ;
p=[4,10];
r=5;
s=n.firstTab?5:1;
o=1;
q=1;
}else{t=gi;
p=[4,10];
q=5;
s=n.firstTab?5:1;
o=1;
r=1;
}}return {zIndex:n.checked?10:5,decorator:t,padding:p,marginTop:s,marginBottom:o,marginLeft:q,marginRight:r,textColor:n.checked?dT:eL};
}},"tabview-page/button/label":{alias:hz,style:function(cQ){return {padding:[0,1,0,1],margin:cQ.focused?0:1,decorator:cQ.focused?es:undefined};
}},"tabview-page/button/close-button":{alias:hu,style:function(ic){return {icon:hg};
}},"toolbar":{style:function(l){return {decorator:ej,spacing:2};
}},"toolbar/part":{style:function(bY){return {decorator:gb,spacing:2};
}},"toolbar/part/container":{style:function(du){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(id){return {source:hP,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:hu,style:function(j){return {marginTop:2,marginBottom:2,padding:(j.pressed||j.checked||j.hovered)&&!j.disabled||(j.disabled&&j.checked)?3:5,decorator:j.pressed||(j.checked&&!j.hovered)||(j.checked&&j.disabled)?go:j.hovered&&!j.disabled?dS:undefined};
}},"toolbar-menubutton":{alias:hC,include:hC,style:function(G){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:hp,include:hp,style:function(bf){return {source:eV};
}},"toolbar-splitbutton":{style:function(W){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:hC,include:hC,style:function(N){return {icon:fW,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:hC,include:hC,style:function(cS){return {padding:cS.pressed||cS.checked?1:cS.hovered?1:3,icon:fW,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(bC){return {decorator:fe,margin:7};
}},"tree":hw,"tree-item":{style:function(dz){return {padding:[2,6],textColor:dz.selected?hq:undefined,decorator:dz.selected?fU:undefined};
}},"tree-item/icon":{include:hp,style:function(ib){return {paddingRight:5};
}},"tree-item/label":hz,"tree-item/open":{include:hp,style:function(dj){var dk;

if(dj.selected&&dj.opened){dk=gM;
}else if(dj.selected&&!dj.opened){dk=hH;
}else if(dj.opened){dk=eX;
}else{dk=hT;
}return {padding:[0,5,0,2],source:dk};
}},"tree-folder":{include:hx,alias:hx,style:function(cL){var cM;

if(cL.small){cM=cL.opened?eu:ee;
}else if(cL.large){cM=cL.opened?fL:gm;
}else{cM=cL.opened?gx:fM;
}return {icon:cM};
}},"tree-file":{include:hx,alias:hx,style:function(cW){return {icon:cW.small?eT:cW.large?ek:hI};
}},"treevirtual":ez,"treevirtual-folder":{style:function(dq){return {icon:dq.opened?eu:ee};
}},"treevirtual-file":{include:fa,alias:fa,style:function(u){return {icon:eT};
}},"treevirtual-line":{style:function(e){return {icon:ea};
}},"treevirtual-contract":{style:function(dv){return {icon:eX,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(dl){return {icon:hT,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":hE,"treevirtual-only-expand":gV,"treevirtual-start-contract":hE,"treevirtual-start-expand":gV,"treevirtual-end-contract":hE,"treevirtual-end-expand":gV,"treevirtual-cross-contract":hE,"treevirtual-cross-expand":gV,"treevirtual-end":{style:function(bh){return {icon:ea};
}},"treevirtual-cross":{style:function(cY){return {icon:ea};
}},"tooltip":{include:hB,style:function(bX){return {backgroundColor:fs,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":hu,"tooltip-error":{include:hy,style:function(bg){return {textColor:hq,placeMethod:ht,offset:[0,0,0,14],marginTop:-2,position:dW,showTimeout:100,hideTimeout:10000,decorator:eP,shadow:fl,font:ho};
}},"tooltip-error/atom":hu,"window":{style:function(bk){return {shadow:eH,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(di){return {decorator:eD};
}},"window/captionbar":{style:function(cR){return {decorator:cR.active?dM:gB,textColor:cR.active?gS:gd,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(bA){return {margin:[5,0,3,6]};
}},"window/title":{style:function(ds){return {alignY:hn,font:ho,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:hu,style:function(y){return {icon:y.active?y.hovered?ge:gG:gK,margin:[4,8,2,0]};
}},"window/restore-button":{alias:hu,style:function(bV){return {icon:bV.active?bV.hovered?eI:eh:gH,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:hu,style:function(bt){return {icon:bt.active?bt.hovered?ew:fN:hd,margin:[4,8,2,0]};
}},"window/close-button":{alias:hu,style:function(bE){return {icon:bE.active?bE.hovered?hh:fx:fF,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(dA){return {padding:[2,6],decorator:fp,minHeight:18};
}},"window/statusbar-text":{style:function(ie){return {font:gF};
}},"iframe":{style:function(bF){return {decorator:hs};
}},"resizer":{style:function(co){return {decorator:fC};
}},"splitpane":{style:function(cw){return {decorator:gP};
}},"splitpane/splitter":{style:function(k){return {width:k.horizontal?3:undefined,height:k.vertical?3:undefined,backgroundColor:ia};
}},"splitpane/splitter/knob":{style:function(Y){return {source:Y.horizontal?eR:gz};
}},"splitpane/slider":{style:function(x){return {width:x.horizontal?3:undefined,height:x.vertical?3:undefined,backgroundColor:ia};
}},"selectbox":{alias:hv,include:hv,style:function(dD){return {padding:[2,8]};
}},"selectbox/atom":hu,"selectbox/popup":hB,"selectbox/list":{alias:hw},"selectbox/arrow":{include:hp,style:function(cH){return {source:fW,paddingLeft:5};
}},"datechooser":{style:function(O){var S;
var Q=!!O.focused;
var R=!!O.invalid;
var P=!!O.disabled;

if(Q&&R&&!P){S=fP;
}else if(Q&&!R&&!P){S=hA;
}else if(P){S=fR;
}else if(!Q&&R&&!P){S=fT;
}else{S=fS;
}return {padding:2,decorator:S,backgroundColor:hm};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:hv,alias:hv,style:function(dn){var dp={padding:[2,4],shadow:undefined};

if(dn.lastYear){dp.icon=eq;
dp.marginRight=1;
}else if(dn.lastMonth){dp.icon=hR;
}else if(dn.nextYear){dp.icon=dO;
dp.marginLeft=1;
}else if(dn.nextMonth){dp.icon=gX;
}return dp;
}},"datechooser/last-year-button-tooltip":hy,"datechooser/last-month-button-tooltip":hy,"datechooser/next-year-button-tooltip":hy,"datechooser/next-month-button-tooltip":hy,"datechooser/last-year-button":gU,"datechooser/last-month-button":gU,"datechooser/next-month-button":gU,"datechooser/next-year-button":gU,"datechooser/month-year-label":{style:function(ct){return {font:ho,textAlign:gW,textColor:ct.disabled?fY:undefined};
}},"datechooser/date-pane":{style:function(bw){return {textColor:bw.disabled?fY:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(by){return {textColor:by.disabled?fY:by.weekend?hX:undefined,textAlign:gW,paddingTop:2,backgroundColor:eU};
}},"datechooser/week":{style:function(bu){return {textAlign:gW,padding:[2,4],backgroundColor:eU};
}},"datechooser/day":{style:function(z){return {textAlign:gW,decorator:z.disabled?undefined:z.selected?fU:undefined,textColor:z.disabled?fY:z.selected?hq:z.otherMonth?hX:undefined,font:z.today?ho:undefined,padding:[2,4]};
}},"combobox":{style:function(ba){var be;
var bc=!!ba.focused;
var bd=!!ba.invalid;
var bb=!!ba.disabled;

if(bc&&bd&&!bb){be=fP;
}else if(bc&&!bd&&!bb){be=hA;
}else if(bb){be=fR;
}else if(!bc&&bd&&!bb){be=fT;
}else{be=fS;
}return {decorator:be};
}},"combobox/popup":hB,"combobox/list":{alias:hw},"combobox/button":{include:hv,alias:hv,style:function(bn){var bo={icon:fW,padding:2};

if(bn.selected){bo.decorator=hQ;
}return bo;
}},"combobox/textfield":{include:gY,style:function(B){return {decorator:undefined};
}},"menu":{style:function(cd){var ce={decorator:fn,shadow:fb,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:cd.submenu||cd.contextmenu?hG:fI};

if(cd.submenu){ce.position=dW;
ce.offset=[-2,-3];
}return ce;
}},"menu/slidebar":gp,"menu-slidebar":ht,"menu-slidebar-button":{style:function(a){return {decorator:a.hovered?fU:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:hW,style:function(dt){return {icon:dt.hovered?eC:ey};
}},"menu-slidebar/button-forward":{include:hW,style:function(m){return {icon:m.hovered?eo:fW};
}},"menu-separator":{style:function(cl){return {height:0,decorator:fB,margin:[4,2]};
}},"menu-button":{alias:hu,style:function(g){return {decorator:g.selected?fU:undefined,textColor:g.selected?hq:undefined,padding:[4,6]};
}},"menu-button/icon":{include:hp,style:function(bz){return {alignY:hn};
}},"menu-button/label":{include:hz,style:function(bq){return {alignY:hn,padding:1};
}},"menu-button/shortcut":{include:hz,style:function(bi){return {alignY:hn,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:hp,style:function(cz){return {source:cz.selected?fD:gX,alignY:hn};
}},"menu-checkbox":{alias:fQ,include:fQ,style:function(dI){return {icon:!dI.checked?undefined:dI.selected?hO:eS};
}},"menu-radiobutton":{alias:fQ,include:fQ,style:function(X){return {icon:!X.checked?undefined:X.selected?eO:dP};
}},"menubar":{style:function(dE){return {decorator:gl};
}},"menubar-button":{alias:hu,style:function(U){return {decorator:U.pressed||U.hovered?fU:undefined,textColor:U.pressed||U.hovered?hq:undefined,padding:[3,8]};
}},"colorselector":ht,"colorselector/control-bar":ht,"colorselector/control-pane":ht,"colorselector/visual-pane":fX,"colorselector/preset-grid":ht,"colorselector/colorbucket":{style:function(cy){return {decorator:hs,width:16,height:16};
}},"colorselector/preset-field-set":fX,"colorselector/input-field-set":fX,"colorselector/preview-field-set":fX,"colorselector/hex-field-composite":ht,"colorselector/hex-field":gY,"colorselector/rgb-spinner-composite":ht,"colorselector/rgb-spinner-red":hD,"colorselector/rgb-spinner-green":hD,"colorselector/rgb-spinner-blue":hD,"colorselector/hsb-spinner-composite":ht,"colorselector/hsb-spinner-hue":hD,"colorselector/hsb-spinner-saturation":hD,"colorselector/hsb-spinner-brightness":hD,"colorselector/preview-content-old":{style:function(bS){return {decorator:hs,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(da){return {decorator:hs,backgroundColor:hm,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(cP){return {decorator:hs,margin:5};
}},"colorselector/brightness-field":{style:function(cr){return {decorator:hs,margin:[5,7]};
}},"colorselector/hue-saturation-pane":ht,"colorselector/hue-saturation-handle":ht,"colorselector/brightness-pane":ht,"colorselector/brightness-handle":ht,"colorpopup":{alias:hB,include:hB,style:function(D){return {padding:5,backgroundColor:hb};
}},"colorpopup/field":{style:function(bW){return {decorator:hs,margin:2,width:14,height:14,backgroundColor:hm};
}},"colorpopup/selector-button":hr,"colorpopup/auto-button":hr,"colorpopup/preview-pane":fX,"colorpopup/current-preview":{style:function(cV){return {height:20,padding:4,marginLeft:4,decorator:hs,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(E){return {height:20,padding:4,marginRight:4,decorator:hs,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:hr,include:hr,style:function(cG){return {icon:gw};
}},"colorpopup/colorselector-cancelbutton":{alias:hr,include:hr,style:function(cq){return {icon:gk};
}},"table":{alias:ht,style:function(dB){return {decorator:ez};
}},"table-header":{},"table/statusbar":{style:function(F){return {decorator:gD,padding:[0,2]};
}},"table/column-button":{alias:hv,style:function(bB){return {decorator:eG,padding:3,icon:dQ};
}},"table-column-reset-button":{include:fQ,alias:fQ,style:function(){return {icon:gQ};
}},"table-scroller":ht,"table-scroller/scrollbar-x":hF,"table-scroller/scrollbar-y":hF,"table-scroller/header":{style:function(df){return {decorator:fu};
}},"table-scroller/pane":{style:function(bv){return {backgroundColor:fw};
}},"table-scroller/focus-indicator":{style:function(bj){return {decorator:fm};
}},"table-scroller/resize-line":{style:function(bT){return {backgroundColor:hk,width:2};
}},"table-header-cell":{alias:hu,style:function(bp){return {minWidth:13,minHeight:20,padding:bp.hovered?[3,4,2,4]:[3,4],decorator:bp.hovered?ga:fi,sortIcon:bp.sorted?(bp.sortedAscending?gq:dN):undefined};
}},"table-header-cell/label":{style:function(cT){return {minWidth:0,alignY:hn,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(cf){return {alignY:hn,alignX:ec};
}},"table-header-cell/icon":{style:function(i){return {minWidth:0,alignY:hn,paddingRight:5};
}},"table-editor-textfield":{include:gY,style:function(bU){return {decorator:undefined,padding:[2,2],backgroundColor:hm};
}},"table-editor-selectbox":{include:fd,alias:fd,style:function(cx){return {padding:[0,2],backgroundColor:hm};
}},"table-editor-combobox":{include:dV,alias:dV,style:function(c){return {decorator:undefined,backgroundColor:hm};
}},"progressive-table-header":{alias:ht,style:function(w){return {decorator:dR};
}},"progressive-table-header-cell":{alias:hu,style:function(dx){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:fA};
}},"app-header":{style:function(dK){return {font:ho,textColor:hq,padding:[8,12],decorator:fo};
}},"virtual-list":hw,"virtual-list/row-layer":eM,"row-layer":{style:function(h){return {colorEven:gS,colorOdd:gA};
}},"column-layer":ht,"cell":{style:function(dJ){return {textColor:dJ.selected?hq:ef,padding:[3,6],font:eY};
}},"cell-string":fV,"cell-number":{include:fV,style:function(dy){return {textAlign:ec};
}},"cell-image":fV,"cell-boolean":{include:fV,style:function(de){return {iconTrue:fh,iconFalse:em};
}},"cell-atom":fV,"cell-date":fV,"cell-html":fV,"htmlarea":{"include":ht,style:function(b){return {backgroundColor:gS};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
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

