(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.event.ElementResize","qx.theme":"qx.theme.Classic"};
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
  uris : [["__out__:demobrowser.demo.event.ElementResize-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"0b023a76f04b"},
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

qx.$$packageData['0b023a76f04b']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"]},"translations":{}};
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
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var f="resize",d="demobrowser.demo.event.ElementResize",c="width: ",b="px",a="px<br>height: ";
qx.Class.define(d,{extend:qx.application.Native,members:{main:function(){qx.application.Native.prototype.main.call(this);
var k=document.getElementById(f);
qx.bom.Element.addListener(k,f,this._onResize,this);
this.update(k,k.offsetWidth,k.offsetHeight);
},_onResize:function(e){var j=e.getData();
this.update(e.getTarget(),j.width,j.height);
},update:function(g,h,i){g.innerHTML=c+h+a+i+b;
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
(function(){var f="resize",d="interval",c="__sE",b="body",a="qx.event.handler.ElementResize";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(s){qx.core.Object.call(this);
this.__sC=s;
this.__sD={};
this.__sE=new qx.event.Timer(200);
this.__sE.addListener(d,this._onInterval,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{resize:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__sD:null,__sC:null,__sE:null,canHandleEvent:function(y,z){return y.tagName.toLowerCase()!==b;
},registerEvent:function(n,o,p){var r=qx.core.ObjectRegistry.toHashCode(n);
var q=this.__sD;

if(!q[r]){q[r]={element:n,width:qx.bom.element.Dimension.getWidth(n),height:qx.bom.element.Dimension.getHeight(n)};
this.__sE.start();
}},unregisterEvent:function(t,u,v){var x=qx.core.ObjectRegistry.toHashCode(t);
var w=this.__sD;

if(w[x]){delete w[x];

if(qx.lang.Object.isEmpty(w)){this.__sE.stop();
}}},_onInterval:function(e){var i=this.__sD;

for(var l in i){var m=i[l];
var h=m.element;
var k=qx.bom.element.Dimension.getWidth(h);
var j=qx.bom.element.Dimension.getHeight(h);

if(m.height!==j||m.width!==k){qx.event.Registration.fireNonBubblingEvent(h,f,qx.event.type.Data,[{width:k,oldWidth:m.width,height:j,oldHeight:m.height}]);
m.width=k;
m.height=j;
}}}},destruct:function(){this.__sC=this.__sD=null;
this._disposeObjects(c);
},defer:function(g){qx.event.Registration.addHandler(g);
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
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this.__jo=k;
this.__jp=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jo:null,__jp:null,canHandleEvent:function(h,i){},registerEvent:function(b,c,d){},unregisterEvent:function(e,f,g){}},destruct:function(){this.__jo=this.__jp=null;
},defer:function(j){qx.event.Registration.addHandler(j);
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
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
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


qx.$$loader.init();

