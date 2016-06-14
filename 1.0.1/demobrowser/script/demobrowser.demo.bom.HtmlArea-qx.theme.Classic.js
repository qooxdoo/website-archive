(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.bom.HtmlArea","qx.theme":"qx.theme.Classic"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.0.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["demobrowser:demobrowser.demo.bom.HtmlArea-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"475d6b087068"},
  boot : "boot",
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
}

qx.$$loader.signalStartup = function () {
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
        l.importPackageData(qx.$$packageData[bootPackageHash]);
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['475d6b087068']={"resources":{"demobrowser/demo/icons/htmlarea/format-fill-color.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/format-list-ordered.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/format-list-unordered.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/format-text-color.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/insert-table.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/insert-text.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/qooxdoo_logo.png":[136,41,"png","demobrowser.demo"],"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-clear.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-copy.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-cut.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-delete.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-paste.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-redo.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-select-all.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-undo.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-indent-less.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-indent-more.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-center.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-fill.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-left.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-right.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-bold.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-direction-ltr.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-direction-rtl.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-italic.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-strikethrough.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-underline.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/insert-image.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/insert-link.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/insert-text.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.html":"qx"}};
(function(){var z="toString",y=".",x="default",w="Object",v='"',u="Array",t="()",s="String",r="Function",q=".prototype",X="function",W="Boolean",V="Error",U="RegExp",T="warn",S="hasOwnProperty",R="string",Q="toLocaleString",P='\", "',O="info",G="BROKEN_IE",H="isPrototypeOf",E="Date",F="",C="qx.Bootstrap",D="]",A="Class",B="error",I="[Class ",J="valueOf",L="Number",K="count",N="debug",M="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return I+this.classname+D;
},createNamespace:function(name,bn){var bp=name.split(y);
var parent=window;
var bo=bp[0];

for(var i=0,bq=bp.length-1;i<bq;i++,bo=bp[i]){if(!parent[bo]){parent=parent[bo]={};
}else{parent=parent[bo];
}}parent[bo]=bn;
return bo;
},setDisplayName:function(bl,bm,name){bl.displayName=bm+y+name+t;
},setDisplayNames:function(bg,bh){for(var name in bg){var bi=bg[name];

if(bi instanceof Function){bi.displayName=bh+y+name+t;
}}},define:function(name,Y){if(!Y){var Y={statics:{}};
}var be;
var bc=null;
qx.Bootstrap.setDisplayNames(Y.statics,name);

if(Y.members){qx.Bootstrap.setDisplayNames(Y.members,name+q);
be=Y.construct||new Function;
var ba=Y.statics;

for(var bb in ba){be[bb]=ba[bb];
}bc=be.prototype;
var bf=Y.members;

for(var bb in bf){bc[bb]=bf[bb];
}}else{be=Y.statics||{};
}var bd=this.createNamespace(name,be);
be.name=be.classname=name;
be.basename=bd;
be.$$type=A;
if(!be.hasOwnProperty(z)){be.toString=this.genericToString;
}if(Y.defer){Y.defer(be,bc);
}qx.Bootstrap.$$registry[name]=Y.statics;
return be;
}};
qx.Bootstrap.define(C,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bj){return bj.__count__;
},"default":function(bA){var length=0;

for(var bB in bA){length++;
}return length;
}})[(({}).__count__==0)?K:x],objectMergeWith:function(bw,bx,by){if(by===undefined){by=true;
}
for(var bz in bx){if(by||bw[bz]===undefined){bw[bz]=bx[bz];
}}return bw;
},__a:[H,S,Q,z,J],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bP){var bQ=[];

for(var bT in bP){bQ.push(bT);
}var bR=qx.Bootstrap.__a;
var bS=Object.prototype.hasOwnProperty;

for(var i=0,a=bR,l=a.length;i<l;i++){if(bS.call(bP,a[i])){bQ.push(a[i]);
}}return bQ;
},"default":function(bF){var bG=[];

for(var bH in bF){bG.push(bH);
}return bG;
}})[typeof (Object.keys)==
X?M:
(function(){for(var bE in {toString:1}){return bE;
}})()!==z?G:x],getKeysAsString:function(bN){var bO=qx.Bootstrap.getKeys(bN);

if(bO.length==0){return F;
}return v+bO.join(P)+v;
},__b:{"[object String]":s,"[object Array]":u,"[object Object]":w,"[object RegExp]":U,"[object Number]":L,"[object Boolean]":W,"[object Date]":E,"[object Function]":r,"[object Error]":V},firstUp:function(f){return f.charAt(0).toUpperCase()+f.substr(1);
},firstLow:function(bU){return bU.charAt(0).toLowerCase()+bU.substr(1);
},getClass:function(g){var h=Object.prototype.toString.call(g);
return (qx.Bootstrap.__b[h]||h.slice(8,-1));
},isString:function(e){return (e!==null&&(typeof e===R||qx.Bootstrap.getClass(e)==s||e instanceof String||(!!e&&!!e.$$isString)));
},isArray:function(bJ){return (bJ!==null&&(bJ instanceof Array||(bJ&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bJ.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bJ)==u||(!!bJ&&!!bJ.$$isArray)));
},isObject:function(b){return (b!==undefined&&b!==null&&qx.Bootstrap.getClass(b)==w);
},isFunction:function(bV){return qx.Bootstrap.getClass(bV)==r;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bI,name){while(bI){if(bI.$$properties&&bI.$$properties[name]){return bI.$$properties[name];
}bI=bI.superclass;
}return null;
},hasProperty:function(d,name){return !!qx.Bootstrap.getPropertyDefinition(d,name);
},getEventType:function(br,name){var br=br.constructor;

while(br.superclass){if(br.$$events&&br.$$events[name]!==undefined){return br.$$events[name];
}br=br.superclass;
}return null;
},supportsEvent:function(bk,name){return !!qx.Bootstrap.getEventType(bk,name);
},getByInterface:function(bK,bL){var bM,i,l;

while(bK){if(bK.$$implements){bM=bK.$$flatImplements;

for(i=0,l=bM.length;i<l;i++){if(bM[i]===bL){return bK;
}}}bK=bK.superclass;
}return null;
},hasInterface:function(j,k){return !!qx.Bootstrap.getByInterface(j,k);
},getMixins:function(o){var p=[];

while(o){if(o.$$includes){p.push.apply(p,o.$$flatIncludes);
}o=o.superclass;
}return p;
},$$logs:[],debug:function(bu,bv){qx.Bootstrap.$$logs.push([N,arguments]);
},info:function(m,n){qx.Bootstrap.$$logs.push([O,arguments]);
},warn:function(bC,bD){qx.Bootstrap.$$logs.push([T,arguments]);
},error:function(bs,bt){qx.Bootstrap.$$logs.push([B,arguments]);
},trace:function(c){}}});
})();
(function(){var k="qx.allowUrlSettings",j="&",h="qx.core.Setting",g="qx.allowUrlVariants",f="qx.propertyDebugLevel",e="qxsetting",d=":",c=".";
qx.Bootstrap.define(h,{statics:{__c:{},define:function(l,m){if(m===undefined){throw new Error('Default value of setting "'+l+'" must be defined!');
}
if(!this.__c[l]){this.__c[l]={};
}else if(this.__c[l].defaultValue!==undefined){throw new Error('Setting "'+l+'" is already defined!');
}this.__c[l].defaultValue=m;
},get:function(n){var o=this.__c[n];

if(o===undefined){throw new Error('Setting "'+n+'" is not defined.');
}
if(o.value!==undefined){return o.value;
}return o.defaultValue;
},set:function(p,q){if((p.split(c)).length<2){throw new Error('Malformed settings key "'+p+'". Must be following the schema "namespace.key".');
}
if(!this.__c[p]){this.__c[p]={};
}this.__c[p].value=q;
},__d:function(){if(window.qxsettings){for(var b in window.qxsettings){this.set(b,window.qxsettings[b]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(a){}this.__e();
}},__e:function(){if(this.get(k)!=true){return;
}var s=document.location.search.slice(1).split(j);

for(var i=0;i<s.length;i++){var r=s[i].split(d);

if(r.length!=3||r[0]!=e){continue;
}this.set(r[1],decodeURIComponent(r[2]));
}}},defer:function(t){t.define(k,false);
t.define(g,false);
t.define(f,0);
t.__d();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__f:function(){var t=d;
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
window.alert("Unsupported client: "+w+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=z;
this.UNKNOWN_VERSION=v;
this.NAME=t;
this.FULLVERSION=x;
this.VERSION=parseFloat(x);
}},defer:function(A){A.__f();
}});
})();
(function(){var z="on",y="off",x="|",w="default",u="object",t="&",s="qx.aspects",r="$",q="qx.allowUrlVariants",p="qx.debug",h="qx.client",o="qx.dynlocale",m="webkit",g="qxvariant",f="opera",k=":",j="qx.core.Variant",n="mshtml",e="gecko";
qx.Bootstrap.define(j,{statics:{__g:{},__h:{},compilerIsSet:function(){return true;
},define:function(E,F,G){{};

if(!this.__g[E]){this.__g[E]={};
}else{}this.__g[E].allowedValues=F;
this.__g[E].defaultValue=G;
},get:function(P){var Q=this.__g[P];
{};

if(Q.value!==undefined){return Q.value;
}return Q.defaultValue;
},__i:function(){if(window.qxvariants){for(var d in qxvariants){{};

if(!this.__g[d]){this.__g[d]={};
}this.__g[d].value=qxvariants[d];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(D){}this.__j(this.__g);
}},__j:function(){if(qx.core.Setting.get(q)!=true){return;
}var A=document.location.search.slice(1).split(t);

for(var i=0;i<A.length;i++){var B=A[i].split(k);

if(B.length!=3||B[0]!=g){continue;
}var C=B[1];

if(!this.__g[C]){this.__g[C]={};
}this.__g[C].value=decodeURIComponent(B[2]);
}},select:function(a,b){{};

for(var c in b){if(this.isSet(a,c)){return b[c];
}}
if(b[w]!==undefined){return b[w];
}{};
},isSet:function(H,I){var J=H+r+I;

if(this.__h[J]!==undefined){return this.__h[J];
}var L=false;
if(I.indexOf(x)<0){L=this.get(H)===I;
}else{var K=I.split(x);

for(var i=0,l=K.length;i<l;i++){if(this.get(H)===K[i]){L=true;
break;
}}}this.__h[J]=L;
return L;
},__k:function(v){return typeof v===u&&v!==null&&v instanceof Array;
},__l:function(v){return typeof v===u&&v!==null&&!(v instanceof Array);
},__m:function(M,N){for(var i=0,l=M.length;i<l;i++){if(M[i]==N){return true;
}}return false;
}},defer:function(O){O.define(h,[e,n,f,m],qx.bom.client.Engine.NAME);
O.define(p,[z,y],z);
O.define(s,[z,y],y);
O.define(o,[z,y],z);
O.__i();
}});
})();
(function(){var t="function",s="Boolean",r="qx.Interface",q="]",p="toggle",o="Interface",n="is",m="[Interface ";
qx.Bootstrap.define(r,{statics:{define:function(name,M){if(M){if(M.extend&&!(M.extend instanceof Array)){M.extend=[M.extend];
}{};
var N=M.statics?M.statics:{};
if(M.extend){N.$$extends=M.extend;
}
if(M.properties){N.$$properties=M.properties;
}
if(M.members){N.$$members=M.members;
}
if(M.events){N.$$events=M.events;
}}else{var N={};
}N.$$type=o;
N.name=name;
N.toString=this.genericToString;
N.basename=qx.Bootstrap.createNamespace(name,N);
qx.Interface.$$registry[name]=N;
return N;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(H){if(!H){return [];
}var I=H.concat();

for(var i=0,l=H.length;i<l;i++){if(H[i].$$extends){I.push.apply(I,this.flatten(H[i].$$extends));
}}return I;
},__n:function(u,v,w,x){var B=w.$$members;

if(B){for(var A in B){if(qx.Bootstrap.isFunction(B[A])){var z=this.__o(v,A);
var y=z||qx.Bootstrap.isFunction(u[A]);

if(!y){throw new Error('Implementation of method "'+A+'" is missing in class "'+v.classname+'" required by interface "'+w.name+'"');
}var C=x===true&&!z&&!qx.Bootstrap.hasInterface(v,w);

if(C){u[A]=this.__r(w,u[A],A,B[A]);
}}else{if(typeof u[A]===undefined){if(typeof u[A]!==t){throw new Error('Implementation of member "'+A+'" is missing in class "'+v.classname+'" required by interface "'+w.name+'"');
}}}}}},__o:function(e,f){var k=f.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!k){return false;
}var g=qx.Bootstrap.firstLow(k[2]);
var h=qx.Bootstrap.getPropertyDefinition(e,g);

if(!h){return false;
}var j=k[0]==n||k[0]==p;

if(j){return qx.Bootstrap.getPropertyDefinition(e,g).check==s;
}return true;
},__p:function(J,K){if(K.$$properties){for(var L in K.$$properties){if(!qx.Bootstrap.getPropertyDefinition(J,L)){throw new Error('The property "'+L+'" is not supported by Class "'+J.classname+'"!');
}}}},__q:function(O,P){if(P.$$events){for(var Q in P.$$events){if(!qx.Bootstrap.supportsEvent(O,Q)){throw new Error('The event "'+Q+'" is not supported by Class "'+O.classname+'"!');
}}}},assertObject:function(D,E){var G=D.constructor;
this.__n(D,G,E,false);
this.__p(G,E);
this.__q(G,E);
var F=E.$$extends;

if(F){for(var i=0,l=F.length;i<l;i++){this.assertObject(D,F[i]);
}}},assert:function(a,b,c){this.__n(a.prototype,a,b,c);
this.__p(a,b);
this.__q(a,b);
var d=b.$$extends;

if(d){for(var i=0,l=d.length;i<l;i++){this.assert(a,d[i],c);
}}},genericToString:function(){return m+this.name+q;
},$$registry:{},__r:function(){},__s:null,__t:function(){}}});
})();
(function(){var k="qx.Mixin",j=".prototype",h="constructor",g="[Mixin ",f="]",e="destruct",d="Mixin";
qx.Bootstrap.define(k,{statics:{define:function(name,a){if(a){if(a.include&&!(a.include instanceof Array)){a.include=[a.include];
}{};
var c=a.statics?a.statics:{};
qx.Bootstrap.setDisplayNames(c,name);

for(var b in c){if(c[b] instanceof Function){c[b].$$mixin=c;
}}if(a.construct){c.$$constructor=a.construct;
qx.Bootstrap.setDisplayName(a.construct,name,h);
}
if(a.include){c.$$includes=a.include;
}
if(a.properties){c.$$properties=a.properties;
}
if(a.members){c.$$members=a.members;
qx.Bootstrap.setDisplayNames(a.members,name+j);
}
for(var b in c.$$members){if(c.$$members[b] instanceof Function){c.$$members[b].$$mixin=c;
}}
if(a.events){c.$$events=a.events;
}
if(a.destruct){c.$$destructor=a.destruct;
qx.Bootstrap.setDisplayName(a.destruct,name,e);
}}else{var c={};
}c.$$type=d;
c.name=name;
c.toString=this.genericToString;
c.basename=qx.Bootstrap.createNamespace(name,c);
this.$$registry[name]=c;
return c;
},checkCompatibility:function(p){var s=this.flatten(p);
var t=s.length;

if(t<2){return true;
}var w={};
var v={};
var u={};
var r;

for(var i=0;i<t;i++){r=s[i];

for(var q in r.events){if(u[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+u[q]+'" in member "'+q+'"!');
}u[q]=r.name;
}
for(var q in r.properties){if(w[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+w[q]+'" in property "'+q+'"!');
}w[q]=r.name;
}
for(var q in r.members){if(v[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+v[q]+'" in member "'+q+'"!');
}v[q]=r.name;
}}return true;
},isCompatible:function(m,n){var o=qx.Bootstrap.getMixins(n);
o.push(m);
return qx.Mixin.checkCompatibility(o);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return g+this.name+f;
},$$registry:{},__u:null,__v:function(){}}});
})();
(function(){var bn=';',bm="string",bl='return this.',bk="boolean",bj='!==undefined)',bi="set",bh="",bg="this.",bf="setThemed",be='else if(this.',cE="resetThemed",cD="reset",cC="setRuntime",cB="init",cA="resetRuntime",cz="(a[",cy="return this.",cx="();",cw="get",cv="refresh",bu='else ',bv='if(this.',bs=' of an instance of ',bt=' is not (yet) ready!");',bq="]);",br='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bo="$$init_",bp='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bC='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bD=" of class ",bW="$$theme_",bS='qx.core.Assert.assertInstance(value, Date, msg) || true',cf='value !== null && value.nodeType !== undefined',ca="is",cr="': ",cl='var inherit=prop.$$inherit;',bL='value !== null && value.nodeType === 9 && value.documentElement',cu="shorthand",ct='return init;',cs='value !== null && value.$$type === "Mixin"',bJ='qx.core.Assert.assertMap(value, msg) || true',bO="Boolean",bQ='return value;',bU='qx.core.Assert.assertNumber(value, msg) || true',bX='qx.core.Assert.assertPositiveInteger(value, msg) || true',cb="Error in property ",ch='if(init==qx.core.Property.$$inherit)init=null;',cn="$$inherit_",bw="()",bx='qx.core.Assert.assertInteger(value, msg) || true',bN='value !== null && value.$$type === "Interface"',ce="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cd='value !== null && value.$$type === "Theme"',cc='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cj='value !== null && value.type !== undefined',ci='value !== null && value.document',bY=" in method ",cg='qx.core.Assert.assertInstance(value, Error, msg) || true',bb="())",cm="(!this.",by='qx.core.Assert.assertBoolean(value, msg) || true',bz='return null;',bT='var init=this.',bc=" with incoming value '",bd='qx.core.Assert.assertObject(value, msg) || true',bI='value !== null && value.nodeType === 1 && value.attributes',bA='throw new Error("Property ',bB="$$runtime_",bH="$$useinit_",bV='qx.core.Assert.assertString(value, msg) || true',cp="inherit",co="$$user_",bP='value !== null && value.$$type === "Class"',cq='qx.core.Assert.assertFunction(value, msg) || true',bK='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',ck='qx.core.Assert.assertArray(value, msg) || true',bE="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",bG='qx.core.Assert.assertPositiveNumber(value, msg) || true',bM="toggle",bR="object",bF="qx.core.Property";
qx.Bootstrap.define(bF,{statics:{__w:{"Boolean":by,"String":bV,"Number":bU,"Integer":bx,"PositiveNumber":bG,"PositiveInteger":bX,"Error":cg,"RegExp":cc,"Object":bd,"Array":ck,"Map":bJ,"Function":cq,"Date":bS,"Node":cf,"Element":bI,"Document":bL,"Window":ci,"Event":cj,"Class":bP,"Mixin":cs,"Interface":bN,"Theme":cd,"Color":bp,"Decorator":bK,"Font":bC},__x:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:cp,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bm,dispose:bk,inheritable:bk,nullable:bk,themeable:bk,refine:bk,init:null,apply:bm,event:bm,check:null,transform:bm,deferredInit:bk,validate:null},$$allowedGroupKeys:{name:bm,group:bR,mode:bm,themeable:bk},$$inheritable:{},refresh:function(cI){var parent=cI.getLayoutParent();

if(parent){var cL=cI.constructor;
var cN=this.$$store.inherit;
var cM=this.$$store.init;
var cK=this.$$method.refresh;
var cO;
var cJ;
{};

while(cL){cO=cL.$$properties;

if(cO){for(var name in this.$$inheritable){if(cO[name]&&cI[cK[name]]){cJ=parent[cN[name]];

if(cJ===undefined){cJ=parent[cM[name]];
}{};
cI[cK[name]](cJ);
}}}cL=cL.superclass;
}}},attach:function(z){var A=z.$$properties;

if(A){for(var name in A){this.attachMethods(z,name,A[name]);
}}z.$$propertiesAttached=true;
},attachMethods:function(J,name,K){K.group?this.__y(J,K,name):this.__z(J,K,name);
},__y:function(cT,cU,name){var dc=qx.Bootstrap.firstUp(name);
var db=cT.prototype;
var dd=cU.themeable===true;
{};
var de=[];
var cX=[];

if(dd){var cV=[];
var da=[];
}var cY=ce;
de.push(cY);

if(dd){cV.push(cY);
}
if(cU.mode==cu){var cW=bE;
de.push(cW);

if(dd){cV.push(cW);
}}
for(var i=0,a=cU.group,l=a.length;i<l;i++){{};
de.push(bg,this.$$method.set[a[i]],cz,i,bq);
cX.push(bg,this.$$method.reset[a[i]],cx);

if(dd){{};
cV.push(bg,this.$$method.setThemed[a[i]],cz,i,bq);
da.push(bg,this.$$method.resetThemed[a[i]],cx);
}}this.$$method.set[name]=bi+dc;
db[this.$$method.set[name]]=new Function(de.join(bh));
this.$$method.reset[name]=cD+dc;
db[this.$$method.reset[name]]=new Function(cX.join(bh));

if(dd){this.$$method.setThemed[name]=bf+dc;
db[this.$$method.setThemed[name]]=new Function(cV.join(bh));
this.$$method.resetThemed[name]=cE+dc;
db[this.$$method.resetThemed[name]]=new Function(da.join(bh));
}},__z:function(b,c,name){var e=qx.Bootstrap.firstUp(name);
var g=b.prototype;
{};
if(c.dispose===undefined&&typeof c.check===bm){c.dispose=this.__x[c.check]||qx.Bootstrap.classIsDefined(c.check)||(qx.Interface&&qx.Interface.isDefined(c.check));
}var f=this.$$method;
var d=this.$$store;
d.runtime[name]=bB+name;
d.user[name]=co+name;
d.theme[name]=bW+name;
d.init[name]=bo+name;
d.inherit[name]=cn+name;
d.useinit[name]=bH+name;
f.get[name]=cw+e;
g[f.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,b,name,cw);
};
f.set[name]=bi+e;
g[f.set[name]]=function(u){return qx.core.Property.executeOptimizedSetter(this,b,name,bi,arguments);
};
f.reset[name]=cD+e;
g[f.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,cD);
};

if(c.inheritable||c.apply||c.event||c.deferredInit){f.init[name]=cB+e;
g[f.init[name]]=function(I){return qx.core.Property.executeOptimizedSetter(this,b,name,cB,arguments);
};
}
if(c.inheritable){f.refresh[name]=cv+e;
g[f.refresh[name]]=function(h){return qx.core.Property.executeOptimizedSetter(this,b,name,cv,arguments);
};
}f.setRuntime[name]=cC+e;
g[f.setRuntime[name]]=function(L){return qx.core.Property.executeOptimizedSetter(this,b,name,cC,arguments);
};
f.resetRuntime[name]=cA+e;
g[f.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,cA);
};

if(c.themeable){f.setThemed[name]=bf+e;
g[f.setThemed[name]]=function(cP){return qx.core.Property.executeOptimizedSetter(this,b,name,bf,arguments);
};
f.resetThemed[name]=cE+e;
g[f.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,cE);
};
}
if(c.check===bO){g[bM+e]=new Function(cy+f.set[name]+cm+f.get[name]+bb);
g[ca+e]=new Function(cy+f.get[name]+bw);
}},__A:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(B,C,D,E,F){var G=B.constructor.classname;
var H=cb+D+bD+G+bY+this.$$method[E][D]+bc+F+cr;
throw new Error(H+(this.__A[C]||"Unknown reason: "+C));
},__B:function(dt,du,name,dv,dw,dx){var dy=this.$$method[dv][name];
{du[dy]=new Function("value",dw.join(""));
};
{};
qx.Bootstrap.setDisplayName(du[dy],dt.classname+".prototype",dy);
if(dx===undefined){return dt[dy]();
}else{return dt[dy](dx[0]);
}},executeOptimizedGetter:function(O,P,name,Q){var S=P.$$properties[name];
var U=P.prototype;
var R=[];
var T=this.$$store;
R.push(bv,T.runtime[name],bj);
R.push(bl,T.runtime[name],bn);

if(S.inheritable){R.push(be,T.inherit[name],bj);
R.push(bl,T.inherit[name],bn);
R.push(bu);
}R.push(bv,T.user[name],bj);
R.push(bl,T.user[name],bn);

if(S.themeable){R.push(be,T.theme[name],bj);
R.push(bl,T.theme[name],bn);
}
if(S.deferredInit&&S.init===undefined){R.push(be,T.init[name],bj);
R.push(bl,T.init[name],bn);
}R.push(bu);

if(S.init!==undefined){if(S.inheritable){R.push(bT,T.init[name],bn);

if(S.nullable){R.push(ch);
}else if(S.init!==undefined){R.push(bl,T.init[name],bn);
}else{R.push(br,name,bs,P.classname,bt);
}R.push(ct);
}else{R.push(bl,T.init[name],bn);
}}else if(S.inheritable||S.nullable){R.push(bz);
}else{R.push(bA,name,bs,P.classname,bt);
}return this.__B(O,U,name,Q,R);
},executeOptimizedSetter:function(j,k,name,m,n){var s=k.$$properties[name];
var r=k.prototype;
var p=[];
var o=m===bi||m===bf||m===cC||(m===cB&&s.init===undefined);
var q=s.apply||s.event||s.inheritable;
var t=this.__C(m,name);
this.__D(p,s,name,m,o);

if(o){this.__E(p,k,s,name);
}
if(q){this.__F(p,o,t,m);
}
if(s.inheritable){p.push(cl);
}{};

if(!q){this.__H(p,name,m,o);
}else{this.__I(p,s,name,m,o);
}
if(s.inheritable){this.__J(p,s,name,m);
}else if(q){this.__K(p,s,name,m);
}
if(q){this.__L(p,s,name);
if(s.inheritable&&r._getChildren){this.__M(p,name);
}}if(o){p.push(bQ);
}return this.__B(j,r,name,m,p,n);
},__C:function(M,name){if(M==="setRuntime"||M==="resetRuntime"){var N=this.$$store.runtime[name];
}else if(M==="setThemed"||M==="resetThemed"){N=this.$$store.theme[name];
}else if(M==="init"){N=this.$$store.init[name];
}else{N=this.$$store.user[name];
}return N;
},__D:function(df,dg,name,dh,di){{if(!dg.nullable||dg.check||dg.inheritable){df.push('var prop=qx.core.Property;');
}if(dh==="set"){df.push('if(value===undefined)prop.error(this,2,"',name,'","',dh,'",value);');
}};
},__E:function(cF,cG,cH,name){if(cH.transform){cF.push('value=this.',cH.transform,'(value);');
}if(cH.validate){if(typeof cH.validate==="string"){cF.push('this.',cH.validate,'(value);');
}else if(cH.validate instanceof Function){cF.push(cG.classname,'.$$properties.',name);
cF.push('.validate.call(this, value);');
}}},__F:function(dj,dk,dl,dm){var dn=(dm==="reset"||dm==="resetThemed"||dm==="resetRuntime");

if(dk){dj.push('if(this.',dl,'===value)return value;');
}else if(dn){dj.push('if(this.',dl,'===undefined)return;');
}},__G:undefined,__H:function(X,name,Y,ba){if(Y==="setRuntime"){X.push('this.',this.$$store.runtime[name],'=value;');
}else if(Y==="resetRuntime"){X.push('if(this.',this.$$store.runtime[name],'!==undefined)');
X.push('delete this.',this.$$store.runtime[name],';');
}else if(Y==="set"){X.push('this.',this.$$store.user[name],'=value;');
}else if(Y==="reset"){X.push('if(this.',this.$$store.user[name],'!==undefined)');
X.push('delete this.',this.$$store.user[name],';');
}else if(Y==="setThemed"){X.push('this.',this.$$store.theme[name],'=value;');
}else if(Y==="resetThemed"){X.push('if(this.',this.$$store.theme[name],'!==undefined)');
X.push('delete this.',this.$$store.theme[name],';');
}else if(Y==="init"&&ba){X.push('this.',this.$$store.init[name],'=value;');
}},__I:function(dp,dq,name,dr,ds){if(dq.inheritable){dp.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{dp.push('var computed, old;');
}dp.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(dr==="setRuntime"){dp.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dr==="resetRuntime"){dp.push('delete this.',this.$$store.runtime[name],';');
dp.push('if(this.',this.$$store.user[name],'!==undefined)');
dp.push('computed=this.',this.$$store.user[name],';');
dp.push('else if(this.',this.$$store.theme[name],'!==undefined)');
dp.push('computed=this.',this.$$store.theme[name],';');
dp.push('else if(this.',this.$$store.init[name],'!==undefined){');
dp.push('computed=this.',this.$$store.init[name],';');
dp.push('this.',this.$$store.useinit[name],'=true;');
dp.push('}');
}else{dp.push('old=computed=this.',this.$$store.runtime[name],';');
if(dr==="set"){dp.push('this.',this.$$store.user[name],'=value;');
}else if(dr==="reset"){dp.push('delete this.',this.$$store.user[name],';');
}else if(dr==="setThemed"){dp.push('this.',this.$$store.theme[name],'=value;');
}else if(dr==="resetThemed"){dp.push('delete this.',this.$$store.theme[name],';');
}else if(dr==="init"&&ds){dp.push('this.',this.$$store.init[name],'=value;');
}}dp.push('}');
dp.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(dr==="set"){if(!dq.inheritable){dp.push('old=this.',this.$$store.user[name],';');
}dp.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dr==="reset"){if(!dq.inheritable){dp.push('old=this.',this.$$store.user[name],';');
}dp.push('delete this.',this.$$store.user[name],';');
dp.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dp.push('computed=this.',this.$$store.runtime[name],';');
dp.push('if(this.',this.$$store.theme[name],'!==undefined)');
dp.push('computed=this.',this.$$store.theme[name],';');
dp.push('else if(this.',this.$$store.init[name],'!==undefined){');
dp.push('computed=this.',this.$$store.init[name],';');
dp.push('this.',this.$$store.useinit[name],'=true;');
dp.push('}');
}else{if(dr==="setRuntime"){dp.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dq.inheritable){dp.push('computed=this.',this.$$store.user[name],';');
}else{dp.push('old=computed=this.',this.$$store.user[name],';');
}if(dr==="setThemed"){dp.push('this.',this.$$store.theme[name],'=value;');
}else if(dr==="resetThemed"){dp.push('delete this.',this.$$store.theme[name],';');
}else if(dr==="init"&&ds){dp.push('this.',this.$$store.init[name],'=value;');
}}dp.push('}');
if(dq.themeable){dp.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!dq.inheritable){dp.push('old=this.',this.$$store.theme[name],';');
}
if(dr==="setRuntime"){dp.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dr==="set"){dp.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dr==="setThemed"){dp.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dr==="resetThemed"){dp.push('delete this.',this.$$store.theme[name],';');
dp.push('if(this.',this.$$store.init[name],'!==undefined){');
dp.push('computed=this.',this.$$store.init[name],';');
dp.push('this.',this.$$store.useinit[name],'=true;');
dp.push('}');
}else if(dr==="init"){if(ds){dp.push('this.',this.$$store.init[name],'=value;');
}dp.push('computed=this.',this.$$store.theme[name],';');
}else if(dr==="refresh"){dp.push('computed=this.',this.$$store.theme[name],';');
}dp.push('}');
}dp.push('else if(this.',this.$$store.useinit[name],'){');

if(!dq.inheritable){dp.push('old=this.',this.$$store.init[name],';');
}
if(dr==="init"){if(ds){dp.push('computed=this.',this.$$store.init[name],'=value;');
}else{dp.push('computed=this.',this.$$store.init[name],';');
}}else if(dr==="set"||dr==="setRuntime"||dr==="setThemed"||dr==="refresh"){dp.push('delete this.',this.$$store.useinit[name],';');

if(dr==="setRuntime"){dp.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dr==="set"){dp.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dr==="setThemed"){dp.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dr==="refresh"){dp.push('computed=this.',this.$$store.init[name],';');
}}dp.push('}');
if(dr==="set"||dr==="setRuntime"||dr==="setThemed"||dr==="init"){dp.push('else{');

if(dr==="setRuntime"){dp.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dr==="set"){dp.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dr==="setThemed"){dp.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dr==="init"){if(ds){dp.push('computed=this.',this.$$store.init[name],'=value;');
}else{dp.push('computed=this.',this.$$store.init[name],';');
}dp.push('this.',this.$$store.useinit[name],'=true;');
}dp.push('}');
}},__J:function(w,x,name,y){w.push('if(computed===undefined||computed===inherit){');

if(y==="refresh"){w.push('computed=value;');
}else{w.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}w.push('if((computed===undefined||computed===inherit)&&');
w.push('this.',this.$$store.init[name],'!==undefined&&');
w.push('this.',this.$$store.init[name],'!==inherit){');
w.push('computed=this.',this.$$store.init[name],';');
w.push('this.',this.$$store.useinit[name],'=true;');
w.push('}else{');
w.push('delete this.',this.$$store.useinit[name],';}');
w.push('}');
w.push('if(old===computed)return value;');
w.push('if(computed===inherit){');
w.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
w.push('}');
w.push('else if(computed===undefined)');
w.push('delete this.',this.$$store.inherit[name],';');
w.push('else this.',this.$$store.inherit[name],'=computed;');
w.push('var backup=computed;');
if(x.init!==undefined&&y!=="init"){w.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{w.push('if(old===undefined)old=null;');
}w.push('if(computed===undefined||computed==inherit)computed=null;');
},__K:function(cQ,cR,name,cS){if(cS!=="set"&&cS!=="setRuntime"&&cS!=="setThemed"){cQ.push('if(computed===undefined)computed=null;');
}cQ.push('if(old===computed)return value;');
if(cR.init!==undefined&&cS!=="init"){cQ.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cQ.push('if(old===undefined)old=null;');
}},__L:function(V,W,name){if(W.apply){V.push('this.',W.apply,'(computed, old, "',name,'");');
}if(W.event){V.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",W.event,"')){","reg.fireEvent(this, '",W.event,"', qx.event.type.Data, [computed, old]",")}");
}},__M:function(v,name){v.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
v.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
v.push('}');
}}});
})();
(function(){var bi="[Class ",bh="]",bg="static",bf="extend",be="qx.Class",bd="singleton";
qx.Bootstrap.define(be,{statics:{define:function(name,bx){if(!bx){var bx={};
}if(bx.include&&!(bx.include instanceof Array)){bx.include=[bx.include];
}if(bx.implement&&!(bx.implement instanceof Array)){bx.implement=[bx.implement];
}if(!bx.hasOwnProperty(bf)&&!bx.type){bx.type=bg;
}{};
var bz=this.__S(name,bx.type,bx.extend,bx.statics,bx.construct,bx.destruct);
if(bx.extend){if(bx.properties){this.__U(bz,bx.properties,true);
}if(bx.members){this.__W(bz,bx.members,true,true,false);
}if(bx.events){this.__T(bz,bx.events,true);
}if(bx.include){for(var i=0,l=bx.include.length;i<l;i++){this.__ba(bz,bx.include[i],false);
}}}if(bx.settings){for(var by in bx.settings){qx.core.Setting.define(by,bx.settings[by]);
}}if(bx.variants){for(var by in bx.variants){qx.core.Variant.define(by,bx.variants[by].allowedValues,bx.variants[by].defaultValue);
}}if(bx.implement){for(var i=0,l=bx.implement.length;i<l;i++){this.__Y(bz,bx.implement[i]);
}}{};
if(bx.defer){bx.defer.self=bz;
bx.defer(bz,bz.prototype,{add:function(name,k){var m={};
m[name]=k;
qx.Class.__U(bz,m,true);
}});
}return bz;
},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(V,W){{};
qx.Class.__ba(V,W,false);
},patch:function(bv,bw){{};
qx.Class.__ba(bv,bw,true);
},isSubClassOf:function(v,w){if(!v){return false;
}
if(v==w){return true;
}
if(v.prototype instanceof w){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(n){var o=[];

while(n){if(n.$$properties){o.push.apply(o,qx.Bootstrap.getKeys(n.$$properties));
}n=n.superclass;
}return o;
},getByProperty:function(E,name){while(E){if(E.$$properties&&E.$$properties[name]){return E;
}E=E.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(G,H){return G.$$includes&&G.$$includes.indexOf(H)!==-1;
},getByMixin:function(g,h){var j,i,l;

while(g){if(g.$$includes){j=g.$$flatIncludes;

for(i=0,l=j.length;i<l;i++){if(j[i]===h){return g;
}}}g=g.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bb,bc){return !!this.getByMixin(bb,bc);
},hasOwnInterface:function(bA,bB){return bA.$$implements&&bA.$$implements.indexOf(bB)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bj){var bk=[];

while(bj){if(bj.$$implements){bk.push.apply(bk,bj.$$flatImplements);
}bj=bj.superclass;
}return bk;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(d,e){var f=d.constructor;

if(this.hasInterface(f,e)){return true;
}
try{qx.Interface.assertObject(d,e);
return true;
}catch(B){}
try{qx.Interface.assert(f,e,false);
return true;
}catch(F){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bi+this.classname+bh;
},$$registry:qx.Bootstrap.$$registry,__O:null,__P:null,__Q:function(){},__R:function(){},__S:function(name,bC,bD,bE,bF,bG){var bL;

if(!bD&&true){bL=bE||{};
qx.Bootstrap.setDisplayNames(bL,name);
}else{bL={};

if(bD){if(!bF){bF=this.__bb();
}bL=this.__bd(bF,name,bC);
qx.Bootstrap.setDisplayName(bF,name,"constructor");
}if(bE){qx.Bootstrap.setDisplayNames(bE,name);
var bM;

for(var i=0,a=qx.Bootstrap.getKeys(bE),l=a.length;i<l;i++){bM=a[i];
var bI=bE[bM];
{bL[bM]=bI;
};
}}}var bK=qx.Bootstrap.createNamespace(name,bL,false);
bL.name=bL.classname=name;
bL.basename=bK;
bL.$$type="Class";

if(bC){bL.$$classtype=bC;
}if(!bL.hasOwnProperty("toString")){bL.toString=this.genericToString;
}
if(bD){var bN=bD.prototype;
var bH=this.__bc();
bH.prototype=bN;
var bJ=new bH;
bL.prototype=bJ;
bJ.name=bJ.classname=name;
bJ.basename=bK;
bF.base=bL.superclass=bD;
bF.self=bL.constructor=bJ.constructor=bL;
if(bG){{};
bL.$$destructor=bG;
qx.Bootstrap.setDisplayName(bG,name,"destruct");
}}this.$$registry[name]=bL;
return bL;
},__T:function(bl,bm,bn){var bo,bo;
{};

if(bl.$$events){for(var bo in bm){bl.$$events[bo]=bm[bo];
}}else{bl.$$events=bm;
}},__U:function(Q,R,S){var U;

if(S===undefined){S=false;
}var T=!!Q.$$propertiesAttached;

for(var name in R){U=R[name];
{};
U.name=name;
if(!U.refine){if(Q.$$properties===undefined){Q.$$properties={};
}Q.$$properties[name]=U;
}if(U.init!==undefined){Q.prototype["$$init_"+name]=U.init;
}if(U.event!==undefined){var event={};
event[U.event]="qx.event.type.Data";
this.__T(Q,event,S);
}if(U.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(T){qx.core.Property.attachMethods(Q,name,U);
}}},__V:null,__W:function(I,J,K,L,M){var N=I.prototype;
var P,O;
qx.Bootstrap.setDisplayNames(J,I.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(J),l=a.length;i<l;i++){P=a[i];
O=J[P];
{};
if(L!==false&&O instanceof Function&&O.$$type==null){if(M==true){O=this.__X(O,N[P]);
}else{if(N[P]){O.base=N[P];
}O.self=I;
}{};
}N[P]=O;
}},__X:function(b,c){if(c){return function(){var D=b.base;
b.base=c;
var C=b.apply(this,arguments);
b.base=D;
return C;
};
}else{return b;
}},__Y:function(s,t){{};
var u=qx.Interface.flatten([t]);

if(s.$$implements){s.$$implements.push(t);
s.$$flatImplements.push.apply(s.$$flatImplements,u);
}else{s.$$implements=[t];
s.$$flatImplements=u;
}},__ba:function(bq,br,bs){{};

if(this.hasMixin(bq,br)){return;
}var bu=qx.Mixin.flatten([br]);
var bt;

for(var i=0,l=bu.length;i<l;i++){bt=bu[i];
if(bt.$$events){this.__T(bq,bt.$$events,bs);
}if(bt.$$properties){this.__U(bq,bt.$$properties,bs);
}if(bt.$$members){this.__W(bq,bt.$$members,bs,bs,bs);
}}if(bq.$$includes){bq.$$includes.push(br);
bq.$$flatIncludes.push.apply(bq.$$flatIncludes,bu);
}else{bq.$$includes=[br];
bq.$$flatIncludes=bu;
}},__bb:function(){function bp(){arguments.callee.base.apply(this,arguments);
}return bp;
},__bc:function(){return function(){};
},__bd:function(x,name,y){var z;
var A=function(){var r=arguments.callee.constructor;
{};
if(!r.$$propertiesAttached){qx.core.Property.attach(r);
}var q=r.$$original.apply(this,arguments);
if(r.$$includes){var p=r.$$flatIncludes;

for(var i=0,l=p.length;i<l;i++){if(p[i].$$constructor){p[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return q;
};
{};
if(y===bd){A.getInstance=this.getInstance;
}A.$$original=x;
x.wrapper=A;
return A;
}},defer:function(){var X,Y,ba;
{};
}});
})();
(function(){var p="qx.client",o="on",n="function",m="mousedown",l="qx.bom.Event",k="return;",j="mouseover",i="HTMLEvents";
qx.Class.define(l,{statics:{addNativeListener:qx.core.Variant.select(p,{"mshtml":function(q,r,s){q.attachEvent(o+r,s);
},"default":function(D,E,F){D.addEventListener(E,F,false);
}}),removeNativeListener:qx.core.Variant.select(p,{"mshtml":function(t,u,v){try{t.detachEvent(o+u,v);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(f,g,h){f.removeEventListener(g,h,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(p,{"mshtml":function(e){if(e.type===j){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(p,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==m&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(C){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(a){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(b,c){if(document.createEventObject){var d=document.createEventObject();
return b.fireEvent(o+c,d);
}else{var d=document.createEvent(i);
d.initEvent(c,true,true);
return !b.dispatchEvent(d);
}},supportsEvent:qx.core.Variant.select(p,{"webkit":function(A,B){return A.hasOwnProperty(o+B);
},"default":function(w,x){var y=o+x;
var z=(y in w);

if(!z){z=typeof w[y]==n;

if(!z&&w.setAttribute){w.setAttribute(y,k);
z=typeof w[y]==n;
w.removeAttribute(y);
}}return z;
}})}});
})();
(function(){var co="|bubble",cn="|capture",cm="|",cl="_",ck="unload",cj="UNKNOWN_",ci="DOM_",ch="c",cg="__bj",cf="WIN_",cc="capture",ce="qx.event.Manager",cd="__bi",cb="QX_";
qx.Class.define(ce,{extend:Object,construct:function(cp,cq){this.__be=cp;
this.__bf=qx.core.ObjectRegistry.toHashCode(cp);
this.__bg=cq;
if(cp.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(cp,ck,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(cp,ck,arguments.callee);
self.dispose();
}));
}this.__bh={};
this.__bi={};
this.__bj={};
this.__bk={};
},statics:{__bl:0,getNextUniqueId:function(){return (this.__bl++).toString(36);
}},members:{__bg:null,__bh:null,__bj:null,__bm:null,__bi:null,__bk:null,__be:null,__bf:null,getWindow:function(){return this.__be;
},getWindowId:function(){return this.__bf;
},getHandler:function(c){var d=this.__bi[c.classname];

if(d){return d;
}return this.__bi[c.classname]=new c(this);
},getDispatcher:function(a){var b=this.__bj[a.classname];

if(b){return b;
}return this.__bj[a.classname]=new a(this,this.__bg);
},getListeners:function(n,o,p){var q=n.$$hash||qx.core.ObjectRegistry.toHashCode(n);
var s=this.__bh[q];

if(!s){return null;
}var t=o+(p?cn:co);
var r=s[t];
return r?r.concat():null;
},serializeListeners:function(D){var K=D.$$hash||qx.core.ObjectRegistry.toHashCode(D);
var M=this.__bh[K];
var I=[];

if(M){var G,L,E,H,J;

for(var F in M){G=F.indexOf(cm);
L=F.substring(0,G);
E=F.charAt(G+1)==ch;
H=M[F];

for(var i=0,l=H.length;i<l;i++){J=H[i];
I.push({self:J.context,handler:J.handler,type:L,capture:E});
}}}return I;
},toggleAttachedEvents:function(u,v){var A=u.$$hash||qx.core.ObjectRegistry.toHashCode(u);
var C=this.__bh[A];

if(C){var x,B,w,y;

for(var z in C){x=z.indexOf(cm);
B=z.substring(0,x);
w=z.charCodeAt(x+1)===99;
y=C[z];

if(v){this.__bn(u,B,w);
}else{this.__bo(u,B,w);
}}}},hasListener:function(bt,bu,bv){{};
var bw=bt.$$hash||qx.core.ObjectRegistry.toHashCode(bt);
var by=this.__bh[bw];

if(!by){return false;
}var bz=bu+(bv?cn:co);
var bx=by[bz];
return bx&&bx.length>0;
},importListeners:function(cv,cw){{};
var cC=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);
var cD=this.__bh[cC]={};
var cz=qx.event.Manager;

for(var cx in cw){var cA=cw[cx];
var cB=cA.type+(cA.capture?cn:co);
var cy=cD[cB];

if(!cy){cy=cD[cB]=[];
this.__bn(cv,cA.type,cA.capture);
}cy.push({handler:cA.listener,context:cA.self,unique:cA.unique||(cz.__bl++).toString(36)});
}},addListener:function(bi,bj,bk,self,bl){var bp;
{};
var bq=bi.$$hash||qx.core.ObjectRegistry.toHashCode(bi);
var bs=this.__bh[bq];

if(!bs){bs=this.__bh[bq]={};
}var bo=bj+(bl?cn:co);
var bn=bs[bo];

if(!bn){bn=bs[bo]=[];
}if(bn.length===0){this.__bn(bi,bj,bl);
}var br=(qx.event.Manager.__bl++).toString(36);
var bm={handler:bk,context:self,unique:br};
bn.push(bm);
return bo+cm+br;
},findHandler:function(N,O){var Y=false,R=false,ba=false;
var X;

if(N.nodeType===1){Y=true;
X=ci+N.tagName.toLowerCase()+cl+O;
}else if(N==this.__be){R=true;
X=cf+O;
}else if(N.classname){ba=true;
X=cb+N.classname+cl+O;
}else{X=cj+N+cl+O;
}var T=this.__bk;

if(T[X]){return T[X];
}var W=this.__bg.getHandlers();
var S=qx.event.IEventHandler;
var U,V,Q,P;

for(var i=0,l=W.length;i<l;i++){U=W[i];
Q=U.SUPPORTED_TYPES;

if(Q&&!Q[O]){continue;
}P=U.TARGET_CHECK;

if(P){if(!Y&&P===S.TARGET_DOMNODE){continue;
}else if(!R&&P===S.TARGET_WINDOW){continue;
}else if(!ba&&P===S.TARGET_OBJECT){continue;
}}V=this.getHandler(W[i]);

if(U.IGNORE_CAN_HANDLE||V.canHandleEvent(N,O)){T[X]=V;
return V;
}}return null;
},__bn:function(cr,cs,ct){var cu=this.findHandler(cr,cs);

if(cu){cu.registerEvent(cr,cs,ct);
return;
}{};
},removeListener:function(bQ,bR,bS,self,bT){var bX;
{};
var bY=bQ.$$hash||qx.core.ObjectRegistry.toHashCode(bQ);
var ca=this.__bh[bY];

if(!ca){return false;
}var bU=bR+(bT?cn:co);
var bV=ca[bU];

if(!bV){return false;
}var bW;

for(var i=0,l=bV.length;i<l;i++){bW=bV[i];

if(bW.handler===bS&&bW.context===self){qx.lang.Array.removeAt(bV,i);

if(bV.length==0){this.__bo(bQ,bR,bT);
}return true;
}}return false;
},removeListenerById:function(bE,bF){var bL;
{};
var bJ=bF.split(cm);
var bO=bJ[0];
var bG=bJ[1].charCodeAt(0)==99;
var bN=bJ[2];
var bM=bE.$$hash||qx.core.ObjectRegistry.toHashCode(bE);
var bP=this.__bh[bM];

if(!bP){return false;
}var bK=bO+(bG?cn:co);
var bI=bP[bK];

if(!bI){return false;
}var bH;

for(var i=0,l=bI.length;i<l;i++){bH=bI[i];

if(bH.unique===bN){qx.lang.Array.removeAt(bI,i);

if(bI.length==0){this.__bo(bE,bO,bG);
}return true;
}}return false;
},removeAllListeners:function(bb){var bf=bb.$$hash||qx.core.ObjectRegistry.toHashCode(bb);
var bh=this.__bh[bf];

if(!bh){return false;
}var bd,bg,bc;

for(var be in bh){if(bh[be].length>0){bd=be.split(cm);
bg=bd[0];
bc=bd[1]===cc;
this.__bo(bb,bg,bc);
}}delete this.__bh[bf];
return true;
},__bo:function(bA,bB,bC){var bD=this.findHandler(bA,bB);

if(bD){bD.unregisterEvent(bA,bB,bC);
return;
}{};
},dispatchEvent:function(e,event){var k;
{};
var m=event.getType();

if(!event.getBubbles()&&!this.hasListener(e,m)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(e);
}var j=this.__bg.getDispatchers();
var h;
var g=false;

for(var i=0,l=j.length;i<l;i++){h=this.getDispatcher(j[i]);
if(h.canDispatchEvent(e,event,m)){h.dispatchEvent(e,event,m);
g=true;
break;
}}
if(!g){qx.log.Logger.error(this,"No dispatcher can handle event of type "+m+" on "+e);
return true;
}var f=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !f;
},dispose:function(){this.__bg.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,cd);
qx.util.DisposeUtil.disposeMap(this,cg);
this.__bh=this.__be=this.__bm=null;
this.__bg=this.__bk=null;
}}});
})();
(function(){var k="qx.dom.Node",j="qx.client",h="";
qx.Class.define(k,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(n){return n.nodeType===
this.DOCUMENT?n:
n.ownerDocument||n.document;
},getWindow:qx.core.Variant.select(j,{"mshtml":function(l){if(l.nodeType==null){return l;
}if(l.nodeType!==this.DOCUMENT){l=l.ownerDocument;
}return l.parentWindow;
},"default":function(p){if(p.nodeType==null){return p;
}if(p.nodeType!==this.DOCUMENT){p=p.ownerDocument;
}return p.defaultView;
}}),getDocumentElement:function(t){return this.getDocument(t).documentElement;
},getBodyElement:function(m){return this.getDocument(m).body;
},isNode:function(c){return !!(c&&c.nodeType!=null);
},isElement:function(b){return !!(b&&b.nodeType===this.ELEMENT);
},isDocument:function(r){return !!(r&&r.nodeType===this.DOCUMENT);
},isText:function(o){return !!(o&&o.nodeType===this.TEXT);
},isWindow:function(s){return !!(s&&s.history&&s.location&&s.document);
},isNodeName:function(d,e){if(!e||!d||!d.nodeName){return false;
}return e.toLowerCase()==qx.dom.Node.getName(d);
},getName:function(q){if(!q||!q.nodeName){return null;
}return q.nodeName.toLowerCase();
},getText:function(f){if(!f||!f.nodeType){return null;
}
switch(f.nodeType){case 1:var i,a=[],g=f.childNodes,length=g.length;

for(i=0;i<length;i++){a[i]=this.getText(g[i]);
}return a.join(h);
case 2:return f.nodeValue;
break;
case 3:return f.nodeValue;
break;
}return null;
}}});
})();
(function(){var s="mshtml",r="qx.client",q="[object Array]",p="qx.lang.Array",o="qx",n="number",m="string";
qx.Class.define(p,{statics:{toArray:function(bk,bl){return this.cast(bk,Array,bl);
},cast:function(T,U,V){if(T.constructor===U){return T;
}
if(qx.Class.hasInterface(T,qx.data.IListData)){var T=T.toArray();
}var W=new U;
if(qx.core.Variant.isSet(r,s)){if(T.item){for(var i=V||0,l=T.length;i<l;i++){W.push(T[i]);
}return W;
}}if(Object.prototype.toString.call(T)===q&&V==null){W.push.apply(W,T);
}else{W.push.apply(W,Array.prototype.slice.call(T,V||0));
}return W;
},fromArguments:function(N,O){return Array.prototype.slice.call(N,O||0);
},fromCollection:function(bp){if(qx.core.Variant.isSet(r,s)){if(bp.item){var bq=[];

for(var i=0,l=bp.length;i<l;i++){bq[i]=bp[i];
}return bq;
}}return Array.prototype.slice.call(bp,0);
},fromShortHand:function(Q){var S=Q.length;
var R=qx.lang.Array.clone(Q);
switch(S){case 1:R[1]=R[2]=R[3]=R[0];
break;
case 2:R[2]=R[0];
case 3:R[3]=R[1];
}return R;
},clone:function(P){return P.concat();
},insertAt:function(f,g,i){f.splice(i,0,g);
return f;
},insertBefore:function(t,u,v){var i=t.indexOf(v);

if(i==-1){t.push(u);
}else{t.splice(i,0,u);
}return t;
},insertAfter:function(bf,bg,bh){var i=bf.indexOf(bh);

if(i==-1||i==(bf.length-1)){bf.push(bg);
}else{bf.splice(i+1,0,bg);
}return bf;
},removeAt:function(bi,i){return bi.splice(i,1)[0];
},removeAll:function(bo){bo.length=0;
return this;
},append:function(J,K){{};
Array.prototype.push.apply(J,K);
return J;
},exclude:function(bb,bc){{};

for(var i=0,be=bc.length,bd;i<be;i++){bd=bb.indexOf(bc[i]);

if(bd!=-1){bb.splice(bd,1);
}}return bb;
},remove:function(L,M){var i=L.indexOf(M);

if(i!=-1){L.splice(i,1);
return M;
}},contains:function(bm,bn){return bm.indexOf(bn)!==-1;
},equals:function(b,c){var length=b.length;

if(length!==c.length){return false;
}
for(var i=0;i<length;i++){if(b[i]!==c[i]){return false;
}}return true;
},sum:function(d){var e=0;

for(var i=0,l=d.length;i<l;i++){e+=d[i];
}return e;
},max:function(X){{};
var i,ba=X.length,Y=X[0];

for(i=1;i<ba;i++){if(X[i]>Y){Y=X[i];
}}return Y===undefined?null:Y;
},min:function(h){{};
var i,k=h.length,j=h[0];

for(i=1;i<k;i++){if(h[i]<j){j=h[i];
}}return j===undefined?null:j;
},unique:function(w){var G=[],y={},B={},D={};
var C,x=0;
var H=o+qx.lang.Date.now();
var z=false,F=false,I=false;
for(var i=0,E=w.length;i<E;i++){C=w[i];
if(C===null){if(!z){z=true;
G.push(C);
}}else if(C===undefined){}else if(C===false){if(!F){F=true;
G.push(C);
}}else if(C===true){if(!I){I=true;
G.push(C);
}}else if(typeof C===m){if(!y[C]){y[C]=1;
G.push(C);
}}else if(typeof C===n){if(!B[C]){B[C]=1;
G.push(C);
}}else{A=C[H];

if(A==null){A=C[H]=x++;
}
if(!D[A]){D[A]=C;
G.push(C);
}}}for(var A in D){try{delete D[A][H];
}catch(bj){try{D[A][H]=null;
}catch(a){throw new Error("Cannot clean-up map entry doneObjects["+A+"]["+H+"]");
}}}return G;
}}});
})();
(function(){var o="()",n=".",m=".prototype.",l='anonymous()',k="qx.lang.Function",j=".constructor()";
qx.Class.define(k,{statics:{getCaller:function(x){return x.caller?x.caller.callee:x.callee.caller;
},getName:function(t){if(t.displayName){return t.displayName;
}
if(t.$$original||t.wrapper||t.classname){return t.classname+j;
}
if(t.$$mixin){for(var v in t.$$mixin.$$members){if(t.$$mixin.$$members[v]==t){return t.$$mixin.name+m+v+o;
}}for(var v in t.$$mixin){if(t.$$mixin[v]==t){return t.$$mixin.name+n+v+o;
}}}
if(t.self){var w=t.self.constructor;

if(w){for(var v in w.prototype){if(w.prototype[v]==t){return w.classname+m+v+o;
}}for(var v in w){if(w[v]==t){return w.classname+n+v+o;
}}}}var u=t.toString().match(/function\s*(\w*)\s*\(.*/);

if(u&&u.length>=1&&u[1]){return u[1]+o;
}return l;
},globalEval:function(D){if(window.execScript){return window.execScript(D);
}else{return eval.call(window,D);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(c,d){{};
if(!d){return c;
}if(!(d.self||d.args||d.delay!=null||d.periodical!=null||d.attempt)){return c;
}return function(event){{};
var q=qx.lang.Array.fromArguments(arguments);
if(d.args){q=d.args.concat(q);
}
if(d.delay||d.periodical){var p=qx.event.GlobalError.observeMethod(function(){return c.apply(d.self||this,q);
});

if(d.delay){return window.setTimeout(p,d.delay);
}
if(d.periodical){return window.setInterval(p,d.periodical);
}}else if(d.attempt){var r=false;

try{r=c.apply(d.self||this,q);
}catch(s){}return r;
}else{return c.apply(d.self||this,q);
}};
},bind:function(B,self,C){return this.create(B,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(a,b){return this.create(a,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(g,self,h){if(arguments.length<3){return function(event){return g.call(self||this,event||window.event);
};
}else{var i=qx.lang.Array.fromArguments(arguments,2);
return function(event){var H=[event||window.event];
H.push.apply(H,i);
g.apply(self||this,H);
};
}},attempt:function(e,self,f){return this.create(e,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(E,F,self,G){return this.create(E,{delay:F,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(y,z,self,A){return this.create(y,{periodical:z,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var v="qx.event.Registration";
qx.Class.define(v,{statics:{__bp:{},getManager:function(B){if(B==null){{};
B=window;
}else if(B.nodeType){B=qx.dom.Node.getWindow(B);
}else if(!qx.dom.Node.isWindow(B)){B=window;
}var D=B.$$hash||qx.core.ObjectRegistry.toHashCode(B);
var C=this.__bp[D];

if(!C){C=new qx.event.Manager(B,this);
this.__bp[D]=C;
}return C;
},removeManager:function(N){var O=N.getWindowId();
delete this.__bp[O];
},addListener:function(x,y,z,self,A){return this.getManager(x).addListener(x,y,z,self,A);
},removeListener:function(k,l,m,self,n){return this.getManager(k).removeListener(k,l,m,self,n);
},removeListenerById:function(L,M){return this.getManager(L).removeListenerById(L,M);
},removeAllListeners:function(w){return this.getManager(w).removeAllListeners(w);
},hasListener:function(E,F,G){return this.getManager(E).hasListener(E,F,G);
},serializeListeners:function(i){return this.getManager(i).serializeListeners(i);
},createEvent:function(H,I,J){{};
if(I==null){I=qx.event.type.Event;
}var K=qx.event.Pool.getInstance().getObject(I);

if(!K){return;
}J?K.init.apply(K,J):K.init();
if(H){K.setType(H);
}return K;
},dispatchEvent:function(u,event){return this.getManager(u).dispatchEvent(u,event);
},fireEvent:function(o,p,q,r){var s;
{};
var t=this.createEvent(p,q||null,r);
return this.getManager(o).dispatchEvent(o,t);
},fireNonBubblingEvent:function(c,d,e,f){{};
var g=this.getManager(c);

if(!g.hasListener(c,d,false)){return true;
}var h=this.createEvent(d,e||null,f);
return g.dispatchEvent(c,h);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bq:[],addHandler:function(j){{};
this.__bq.push(j);
this.__bq.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bq;
},__br:[],addDispatcher:function(P,Q){{};
this.__br.push(P);
this.__br.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__br;
}}});
})();
(function(){var n="$$hash",m="qx.core.ObjectRegistry";
qx.Class.define(m,{statics:{inShutDown:false,__bs:{},__bt:0,__bu:[],register:function(u){var x=this.__bs;

if(!x){return;
}var w=u.$$hash;

if(w==null){var v=this.__bu;

if(v.length>0){w=v.pop();
}else{w=(this.__bt++).toString(36);
}u.$$hash=w;
}{};
x[w]=u;
},unregister:function(r){var s=r.$$hash;

if(s==null){return;
}var t=this.__bs;

if(t&&t[s]){delete t[s];
this.__bu.push(s);
}try{delete r.$$hash;
}catch(j){if(r.removeAttribute){r.removeAttribute(n);
}}},toHashCode:function(o){{};
var q=o.$$hash;

if(q!=null){return q;
}var p=this.__bu;

if(p.length>0){q=p.pop();
}else{q=(this.__bt++).toString(36);
}return o.$$hash=q;
},clearHashCode:function(y){{};
var z=y.$$hash;

if(z!=null){this.__bu.push(z);
try{delete y.$$hash;
}catch(h){if(y.removeAttribute){y.removeAttribute(n);
}}}},fromHashCode:function(g){return this.__bs[g]||null;
},shutdown:function(){this.inShutDown=true;
var d=this.__bs;
var f=[];

for(var e in d){f.push(e);
}f.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var c,i=0,l=f.length;

while(true){try{for(;i<l;i++){e=f[i];
c=d[e];

if(c&&c.dispose){c.dispose();
}}}catch(k){qx.Bootstrap.error(this,"Could not dispose object "+c.toString()+": "+k);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bs;
},getRegistry:function(){return this.__bs;
}}});
})();
(function(){var e="qx.data.MBinding";
qx.Mixin.define(e,{members:{bind:function(a,b,c,d){return qx.data.SingleValueBinding.bind(this,a,b,c,d);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(c){this.__bz=[];
this.setMaxMessages(c||50);
},members:{__bA:0,__bz:null,__bB:50,setMaxMessages:function(b){this.__bB=b;
this.clearHistory();
},getMaxMessages:function(){return this.__bB;
},process:function(h){var i=this.getMaxMessages();

if(this.__bz.length<i){this.__bz.push(h);
}else{this.__bz[this.__bA++]=h;

if(this.__bA>=i){this.__bA=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(d){if(d>this.__bz.length){d=this.__bz.length;
}
if(this.__bz.length==this.getMaxMessages()){var f=this.__bA-1;
}else{f=this.__bz.length-1;
}var e=f-d+1;

if(e<0){e+=this.__bz.length;
}var g;

if(e<=f){g=this.__bz.slice(e,f+1);
}else{g=this.__bz.slice(e,this.__bz.length).concat(this.__bz.slice(0,f+1));
}return g;
},clearHistory:function(){this.__bz=[];
this.__bA=0;
}}});
})();
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",G="number",F="stringify",E="]",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",x="qx.log.Logger",s=")}",t="#",q="warn",r="document",o="{...(",p="[",m="text[",n="[...(",u="\n",v=")]",w="object";
qx.Class.define(x,{statics:{__bC:A,setLevel:function(J){this.__bC=J;
},getLevel:function(){return this.__bC;
},setTreshold:function(bD){this.__bF.setMaxMessages(bD);
},getTreshold:function(){return this.__bF.getMaxMessages();
},__bD:{},__bE:0,register:function(bI){if(bI.$$id){return;
}var bJ=this.__bE++;
this.__bD[bJ]=bI;
bI.$$id=bJ;
var bK=this.__bF.getAllLogEvents();

for(var i=0,l=bK.length;i<l;i++){bI.process(bK[i]);
}},unregister:function(bG){var bH=bG.$$id;

if(bH==null){return;
}delete this.__bD[bH];
delete bG.$$id;
},debug:function(H,I){qx.log.Logger.__bH(A,arguments);
},info:function(ba,bb){qx.log.Logger.__bH(e,arguments);
},warn:function(bj,bk){qx.log.Logger.__bH(q,arguments);
},error:function(bE,bF){qx.log.Logger.__bH(j,arguments);
},trace:function(bl){qx.log.Logger.__bH(e,[bl,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(bm,bn){var bo;
{};
},deprecatedClassWarning:function(K,L){var M;
{};
},deprecatedEventWarning:function(N,event,O){var P;
{};
},deprecatedMixinWarning:function(bg,bh){var bi;
{};
},deprecatedConstantWarning:function(bp,bq,br){var self,bs;
{};
},clear:function(){this.__bF.clearHistory();
},__bF:new qx.log.appender.RingBuffer(50),__bG:{debug:0,info:1,warn:2,error:3},__bH:function(bt,bu){var bz=this.__bG;

if(bz[bt]<bz[this.__bC]){return;
}var bw=bu.length<2?null:bu[0];
var by=bw?1:0;
var bv=[];

for(var i=by,l=bu.length;i<l;i++){bv.push(this.__bJ(bu[i],true));
}var bA=new Date;
var bB={time:bA,offset:bA-qx.Bootstrap.LOADSTART,level:bt,items:bv,win:window};
if(bw){if(bw instanceof qx.core.Object){bB.object=bw.$$hash;
}else if(bw.$$type){bB.clazz=bw;
}}this.__bF.process(bB);
var bC=this.__bD;

for(var bx in bC){bC[bx].process(bB);
}},__bI:function(be){if(be===undefined){return y;
}else if(be===null){return b;
}
if(be.$$type){return a;
}var bf=typeof be;

if(bf===C||bf==c||bf===G||bf===B){return bf;
}else if(bf===w){if(be.nodeType){return k;
}else if(be.classname){return d;
}else if(be instanceof Array){return g;
}else if(be instanceof Error){return j;
}else{return z;
}}
if(be.toString){return F;
}return D;
},__bJ:function(Q,R){var Y=this.__bI(Q);
var U=D;
var T=[];

switch(Y){case b:case y:U=Y;
break;
case c:case G:case B:U=Q;
break;
case k:if(Q.nodeType===9){U=r;
}else if(Q.nodeType===3){U=m+Q.nodeValue+E;
}else if(Q.nodeType===1){U=Q.nodeName.toLowerCase();

if(Q.id){U+=t+Q.id;
}}else{U=k;
}break;
case C:U=qx.lang.Function.getName(Q)||Y;
break;
case d:U=Q.basename+p+Q.$$hash+E;
break;
case a:case F:U=Q.toString();
break;
case j:T=qx.dev.StackTrace.getStackTraceFromError(Q);
U=Q.toString();
break;
case g:if(R){U=[];

for(var i=0,l=Q.length;i<l;i++){if(U.length>20){U.push(h+(l-i)+f);
break;
}U.push(this.__bJ(Q[i],false));
}}else{U=n+Q.length+v;
}break;
case z:if(R){var S;
var X=[];

for(var W in Q){X.push(W);
}X.sort();
U=[];

for(var i=0,l=X.length;i<l;i++){if(U.length>20){U.push(h+(l-i)+f);
break;
}W=X[i];
S=this.__bJ(Q[W],false);
S.key=W;
U.push(S);
}}else{var V=0;

for(var W in Q){V++;
}U=o+V+s;
}break;
}return {type:Y,text:U,trace:T};
}},defer:function(bc){var bd=qx.Bootstrap.$$logs;

for(var i=0;i<bd.length;i++){this.__bH(bd[i][0],bd[i][1]);
}qx.Bootstrap.debug=bc.debug;
qx.Bootstrap.info=bc.info;
qx.Bootstrap.warn=bc.warn;
qx.Bootstrap.error=bc.error;
qx.Bootstrap.trace=bc.trace;
}});
})();
(function(){var L="set",K="get",J="reset",I="qx.core.Object",H="]",G="[",F="$$user_",E="Object";
qx.Class.define(I,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:E},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+G+this.$$hash+H;
},base:function(O,P){{};

if(arguments.length===1){return O.callee.base.call(this);
}else{return O.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(ba){return ba.callee.self;
},clone:function(){var bd=this.constructor;
var bc=new bd;
var bf=qx.Class.getProperties(bd);
var be=qx.core.Property.$$store.user;
var bg=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bf.length;i<l;i++){name=bf[i];

if(this.hasOwnProperty(be[name])){bc[bg[name]](this[be[name]]);
}}return bc;
},set:function(g,h){var k=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(g)){if(!this[k[g]]){if(this[L+qx.Bootstrap.firstUp(g)]!=undefined){this[L+qx.Bootstrap.firstUp(g)](h);
return;
}{};
}return this[k[g]](h);
}else{for(var j in g){if(!this[k[j]]){if(this[L+qx.Bootstrap.firstUp(j)]!=undefined){this[L+qx.Bootstrap.firstUp(j)](g[j]);
continue;
}{};
}this[k[j]](g[j]);
}return this;
}},get:function(q){var r=qx.core.Property.$$method.get;

if(!this[r[q]]){if(this[K+qx.Bootstrap.firstUp(q)]!=undefined){return this[K+qx.Bootstrap.firstUp(q)]();
}{};
}return this[r[q]]();
},reset:function(bx){var by=qx.core.Property.$$method.reset;

if(!this[by[bx]]){if(this[J+qx.Bootstrap.firstUp(bx)]!=undefined){this[J+qx.Bootstrap.firstUp(bx)]();
return;
}{};
}this[by[bx]]();
},__bK:qx.event.Registration,addListener:function(bl,bm,self,bn){if(!this.$$disposed){return this.__bK.addListener(this,bl,bm,self,bn);
}return null;
},addListenerOnce:function(br,bs,self,bt){var bu=function(e){bs.call(self||this,e);
this.removeListener(br,bu,this,bt);
};
return this.addListener(br,bu,this,bt);
},removeListener:function(bo,bp,self,bq){if(!this.$$disposed){return this.__bK.removeListener(this,bo,bp,self,bq);
}return false;
},removeListenerById:function(M){if(!this.$$disposed){return this.__bK.removeListenerById(this,M);
}return false;
},hasListener:function(bv,bw){return this.__bK.hasListener(this,bv,bw);
},dispatchEvent:function(f){if(!this.$$disposed){return this.__bK.dispatchEvent(this,f);
}return true;
},fireEvent:function(m,n,o){if(!this.$$disposed){return this.__bK.fireEvent(this,m,n,o);
}return true;
},fireNonBubblingEvent:function(b,c,d){if(!this.$$disposed){return this.__bK.fireNonBubblingEvent(this,b,c,d);
}return true;
},fireDataEvent:function(V,W,X,Y){if(!this.$$disposed){if(X===undefined){X=null;
}return this.__bK.fireNonBubblingEvent(this,V,qx.event.type.Data,[W,X,!!Y]);
}return true;
},__bL:null,setUserData:function(bj,bk){if(!this.__bL){this.__bL={};
}this.__bL[bj]=bk;
},getUserData:function(s){if(!this.__bL){return null;
}var t=this.__bL[s];
return t===undefined?null:t;
},__bM:qx.log.Logger,debug:function(bh){this.__bM.debug(this,bh);
},info:function(bi){this.__bM.info(this,bi);
},warn:function(D){this.__bM.warn(this,D);
},error:function(bz){this.__bM.error(this,bz);
},trace:function(){this.__bM.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var T,R;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var S=this.constructor;
var Q;

while(S.superclass){if(S.$$destructor){S.$$destructor.call(this);
}if(S.$$includes){Q=S.$$flatIncludes;

for(var i=0,l=Q.length;i<l;i++){if(Q[i].$$destructor){Q[i].$$destructor.call(this);
}}}S=S.superclass;
}var U=qx.Class.getProperties(this.constructor);

for(var i=0,l=U.length;i<l;i++){delete this[F+U[i]];
}{};
},_disposeFields:function(C){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bb){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(N){qx.util.DisposeUtil.disposeArray(this,N);
},_disposeMap:function(a){qx.util.DisposeUtil.disposeMap(this,a);
}},settings:{"qx.disposerDebugLevel":0},defer:function(p){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__bL=null;
var w=this.constructor;
var A;
var B=qx.core.Property.$$store;
var y=B.user;
var z=B.theme;
var u=B.inherit;
var x=B.useinit;
var v=B.init;

while(w){A=w.$$properties;

if(A){for(var name in A){if(A[name].dispose){this[y[name]]=this[z[name]]=this[u[name]]=this[x[name]]=this[v[name]]=undefined;
}}}w=w.superclass;
}}});
})();
(function(){var c="qx.event.IEventHandler";
qx.Interface.define(c,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(a,b){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}}});
})();
(function(){var f="qx.globalErrorHandling",e="on",d="qx.event.GlobalError";
qx.Class.define(d,{statics:{setErrorHandler:function(j,k){this.__bN=j||null;
this.__bO=k||window;

if(qx.core.Setting.get(f)===e){if(j&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__bP,this);
}
if(!j&&window.onerror){window.onerror=null;
}}},__bP:function(g,h,i){if(this.__bN){this.handleError(new qx.core.WindowError(g,h,i));
return true;
}},observeMethod:function(a){if(qx.core.Setting.get(f)===e){var self=this;
return function(){if(!self.__bN){return a.apply(this,arguments);
}
try{return a.apply(this,arguments);
}catch(l){self.handleError(new qx.core.GlobalError(l,arguments));
}};
}else{return a;
}},handleError:function(c){if(this.__bN){this.__bN.call(this.__bO,c);
}}},defer:function(b){qx.core.Setting.define(f,e);
b.setErrorHandler(null,null);
}});
})();
(function(){var p="ready",o="qx.client",n="mshtml",m="load",l="unload",k="qx.event.handler.Application",j="complete",i="gecko|opera|webkit",h="left",g="DOMContentLoaded",f="shutdown";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(y){arguments.callee.base.call(this);
this._window=y.getWindow();
this.__bQ=false;
this.__bR=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__bS:false,onScriptLoaded:function(){this.__bS=true;
var a=qx.event.handler.Application.$$instance;

if(a){a.__bV();
}}},members:{canHandleEvent:function(u,v){},registerEvent:function(b,c,d){},unregisterEvent:function(r,s,t){},__bT:null,__bQ:null,__bR:null,__bU:null,__bV:function(){var w=qx.event.handler.Application;
if(!this.__bT&&this.__bQ&&w.__bS){if(qx.core.Variant.isSet(o,n)){if(qx.event.Registration.hasListener(this._window,p)){this.__bT=true;
qx.event.Registration.fireEvent(this._window,p);
}}else{this.__bT=true;
qx.event.Registration.fireEvent(this._window,p);
}}},isApplicationReady:function(){return this.__bT;
},_initObserver:function(){if(qx.$$domReady||document.readyState==j){this.__bQ=true;
this.__bV();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(o,i)){qx.bom.Event.addNativeListener(this._window,g,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(o,n)){var self=this;
var x=function(){try{document.documentElement.doScroll(h);

if(document.body){self._onNativeLoadWrapped();
}}catch(z){window.setTimeout(x,100);
}};
x();
}qx.bom.Event.addNativeListener(this._window,m,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,l,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,m,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,l,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__bQ=true;
this.__bV();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__bU){this.__bU=true;

try{qx.event.Registration.fireEvent(this._window,f);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var h="qx.event.handler.Window";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){arguments.callee.base.call(this);
this._manager=c;
this._window=c.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(n,o,p){},unregisterEvent:function(d,f,g){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);
}},_stopWindowObserver:function(){var k=qx.event.handler.Window.SUPPORTED_TYPES;

for(var j in k){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeWrapper);
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
},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var c="qx.event.dispatch.Direct";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(m){this._manager=m;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(a,event,b){return !event.getBubbles();
},dispatchEvent:function(d,event,e){var h,f;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var j=this._manager.getListeners(d,e,false);

if(j){for(var i=0,l=j.length;i<l;i++){var g=j[i].context||d;
j[i].handler.call(g,event);
}}}},defer:function(k){qx.event.Registration.addDispatcher(k);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__bX||null;
},__bW:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Setting.get(d);
var j=qx.Class.getByName(i);

if(j){this.__bX=new j;
var h=new Date;
this.__bX.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__bX.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__bY:function(e){var g=this.__bX;

if(g){e.setReturnValue(g.close());
}},__ca:function(){var l=this.__bX;

if(l){l.terminate();
}}},defer:function(k){qx.event.Registration.addListener(window,f,k.__bW,k);
qx.event.Registration.addListener(window,a,k.__ca,k);
qx.event.Registration.addListener(window,c,k.__bY,k);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var cl="div",ck="0px",cj="outline",ci="mshtml",ch="hideFocus",cg="none",cf="true",ce="qx.client",cd="16px",cc="840px",bF="left",bE="<tr>",bD="<option value=''></option>",bC="1px solid #AAA",bB="'>",bA="value='",bz="#",by="</option>",bx="qooxdoo logo",bw="change",cs="select",ct="</tr>",cq="",cr="clear:both",co="Insert Table",cp="Color (Hex): ",cm="Georgia",cn="<p>This low-level widget can be used separately at ",cu="http://",cv="BgColor (Hex): ",bU="Indent More",bT="Change font family",bW="demobrowser/demo/icons/htmlarea/format-fill-color.png",bV="Align Right",bY="Format Italic",bX="qx/icon/Oxygen/16/actions/format-text-underline.png",cb="350px",ca='<h1>About</h1><p>qooxdoo (pronounced [ku:ksdu:]) is a comprehensive and innovative Ajax application framework. Leveraging object-oriented JavaScript allows developers to build impressive cross-browser applications. No <acronym title="HyperText Markup Language">HTML</acronym>, <acronym title="Cascading Style Sheets">CSS</acronym> nor <acronym title="Document Object Model">DOM</acronym> knowledge is needed. qooxdoo includes a platform-independent development tool chain, a state-of-the-art <acronym title="Graphical User Interface">GUI</acronym> toolkit and an advanced client-server communication layer. It is Open Source under an <acronym title="GNU Lesser General Public License">LGPL</acronym>/<acronym title="Eclipse Public License">EPL</acronym> dual <a href="http://qooxdoo.org/license" class="wikilink1" title="license">license</a>.</p>',bS="white",bR="buttons at the toolbar.</p>",n="demobrowser/demo/icons/htmlarea/format-list-ordered.png",o="qx/icon/Oxygen/16/actions/format-indent-more.png",p="Comic Sans MS",q="Tahoma",r="20px 20px",s="float",t="<h1>HtmlArea low-level widget</h1>",u="<td>First Row, First cell</td>",v="demobrowser/demo/icons/htmlarea/qooxdoo_logo.png",w="Align Left",cz="qx/icon/Oxygen/16/actions/format-justify-center.png",cy="input",cx="Align Justify",cw="demobrowser/demo/icons/htmlarea/insert-text.png",cD="Insert Horizontal Ruler",cC="demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png",cB="demobrowser/demo/icons/htmlarea/format-list-unordered.png",cA="HTML Code:",cF="Set Text Background Color",cE="Insert Link",V="on",W="You can play around with this widget by hitting the ",T="<td>Second Row, First cell</td>",U="</tbody>",ba="Set Text Color",bb="demobrowser/demo/icons/htmlarea/format-text-color.png",X="traditional web pages / single-page applications.<br/> ",Y="demobrowser/demo/icons/htmlarea/insert-table.png",R="qx/icon/Oxygen/16/actions/edit-undo.png",S="qx/icon/Oxygen/16/actions/edit-clear.png",E="Arial Black",D="Impact",G="Change font size",F="Link: ",A="Redo Last Undo Step",z="Format Bold",C="off",B="qx/icon/Oxygen/16/actions/format-text-strikethrough.png",y="br",x="marginRight",bg="image",bh="<option qxKeepFocus='on' qxSelectable='off'",bi="click",bj="<option qxKeepFocus='on' qxSelectable='off' ",bc="Remove Format",bd="blank.html",be="qx/icon/Oxygen/16/actions/insert-image.png",bf="<p style='margin-bottom:10px'><b>No UI-level code</b> is included in this demo.",bk="</table>",bl="<td>First Row, Second cell</td>",O="Insert HTML Code",N="qx/icon/Oxygen/16/actions/insert-link.png",M="Insert Ordered List",L="demobrowser.demo.bom.HtmlArea",K="qx/icon/Oxygen/16/actions/format-justify-left.png",J="Courier",I="Courier New",H="4px",Q="qx/icon/Oxygen/16/actions/format-justify-right.png",P="qx/icon/Oxygen/16/actions/format-text-bold.png",bm="<td>Second Row, Second cell</td>",bn="Insert Image",bo="qx/icon/Oxygen/16/actions/format-indent-less.png",bp="<tbody>",bq="Times New Roman",br="Align Center",bs="qx/icon/Oxygen/16/actions/edit-redo.png",bt="Lucida Console",bu="innerHTML",bv="Undo Last Change",bJ="qx/icon/Oxygen/16/actions/format-text-italic.png",bI="Arial",bH="qx/icon/Oxygen/16/actions/format-justify-fill.png",bG="Verdana",bN="Indent Less",bM="Format Strikethrough",bL="Format Underline",bK="<table border='1'>",bP="Inserted Unordered List",bO="FontSize: ",bQ="It is the foundation for the UI widget component.</p>";
qx.Class.define(L,{extend:qx.application.Native,members:{__sE:null,__sF:null,__sG:null,__sH:null,__sI:null,main:function(){arguments.callee.base.call(this);
this.__sE=qx.bom.Element.create(cl);
qx.bom.element.Style.setStyles(this.__sE,{margin:r});
var cJ=qx.bom.Element.create(cl);
qx.bom.element.Style.setStyles(cJ,{width:cc,padding:ck,margin:ck});
var cI=t+cn+X+bQ+bf+W+bR;
qx.bom.element.Attribute.set(cJ,bu,cI);
this.__sF=qx.bom.Element.create(cl);
qx.bom.element.Style.setStyles(this.__sF,{width:cc,padding:ck,margin:ck,lineHeight:ck,border:bC});
this.__sG=qx.bom.Element.create(cl);
qx.bom.element.Style.setStyles(this.__sG,{width:cc,height:cb,border:bC,borderTop:ck,backgroundColor:bS});
qx.dom.Element.insertEnd(this.__sG,this.__sE);
var cH=ca;
this.__sH=new qx.bom.htmlarea.HtmlArea(this.__sG,cH,null,bd);
this.__sS();
qx.dom.Element.insertBegin(this.__sF,this.__sE);
qx.dom.Element.insertBegin(cJ,this.__sE);
qx.dom.Element.insertBegin(this.__sE,document.body);
},__sJ:function(e){var m=window.prompt(bO,cq);
this.setFontSize(parseInt(m));
},__sK:function(e){var b=window.prompt(cp,bz);
this.setTextColor(b);
},__sL:function(e){var cG=window.prompt(cv,bz);
this.setTextBackgroundColor(cG);
},__sM:function(e){var cW={src:qx.util.ResourceManager.getInstance().toUri(v),border:0,title:bx,alt:bx};
this.insertImage(cW);
},__sN:function(e){var cV=bK+bp+bE+u+bl+ct+bE+T+bm+ct+U+bk;
this.insertHtml(cV);
},__sO:function(e){var cU=window.prompt(F,cu);
this.insertHyperLink(cU);
},__sP:function(e){var a=window.prompt(cA,cq);
this.insertHtml(a);
},__sQ:function(){var cY=qx.bom.Element.create(cl);
qx.bom.element.Style.setStyles(cY,{"float":bF});
var db;
var da=qx.bom.Element.create(cs,{title:bT});

if(qx.core.Variant.isSet(ce,ci)){qx.bom.element.Attribute.set(da,ch,cf);
}else{qx.bom.element.Style.set(da,cj,cg);
}db=qx.bom.Collection.html(bD);
qx.dom.Element.insertEnd(db[0],da);
var dc=[q,bG,bq,bI,E,I,J,cm,D,p,bt];
var cX;
var dd;

for(var i=0,j=dc.length;i<j;i++){cX=bh+bA+dc[i]+bB+dc[i]+by;
dd=qx.bom.Collection.html(cX);

if(qx.core.Variant.isSet(ce,ci)){qx.bom.element.Attribute.set(dd[0],ch,cf);
}else{qx.bom.element.Style.set(dd[0],cj,cg);
}qx.dom.Element.insertEnd(dd[0],da);
}qx.event.Registration.addListener(da,bw,function(e){var c=e.getTarget();
var d=c.selectedIndex;

if(d!=0){this.setFontFamily(c.options[d].value);
c.options[0].selected=true;
}},this.__sH);
qx.dom.Element.insertBegin(da,cY);
return cY;
},__sR:function(){var g=qx.bom.Element.create(cl);
qx.bom.element.Style.setStyles(g,{"marginRight":cd,"float":bF});
var k;
var h=qx.bom.Element.create(cs,{title:G});

if(qx.core.Variant.isSet(ce,ci)){qx.bom.element.Attribute.set(h,ch,cf);
}else{qx.bom.element.Style.set(h,cj,cg);
}k=qx.bom.Collection.html(bD);
qx.dom.Element.insertEnd(k[0],h);
var l;
var f;

for(var i=1;i<=7;i++){f=bj+bA+i+bB+i+by;
l=qx.bom.Collection.html(f);

if(qx.core.Variant.isSet(ce,ci)){qx.bom.element.Attribute.set(l[0],ch,cf);
}else{qx.bom.element.Style.set(l[0],cj,cg);
}qx.dom.Element.insertEnd(l[0],h);
}qx.event.Registration.addListener(h,bw,function(e){var cS=e.getTarget();
var cT=cS.selectedIndex;

if(cT!=0){this.setFontSize(cS.options[cT].value);
cS.options[0].selected=true;
}},this.__sH);
qx.dom.Element.insertBegin(h,g);
return g;
},__sS:function(){var cL=[{bold:{text:z,image:P,action:this.__sH.setBold},italic:{text:bY,image:bJ,action:this.__sH.setItalic},underline:{text:bL,image:bX,action:this.__sH.setUnderline},strikethrough:{text:bM,image:B,action:this.__sH.setStrikeThrough},removeFormat:{text:bc,image:S,action:this.__sH.removeFormat}},{alignLeft:{text:w,image:K,action:this.__sH.setJustifyLeft},alignCenter:{text:br,image:cz,action:this.__sH.setJustifyCenter},alignRight:{text:bV,image:Q,action:this.__sH.setJustifyRight},alignJustify:{text:cx,image:bH,action:this.__sH.setJustifyFull}},{fontFamily:{custom:this.__sQ},fontSize:{custom:this.__sR},fontColor:{text:ba,image:bb,action:this.__sK},textBackgroundColor:{text:cF,image:bW,action:this.__sL}},{indent:{text:bU,image:o,action:this.__sH.insertIndent},outdent:{text:bN,image:bo,action:this.__sH.insertOutdent}},{insertImage:{text:bn,image:be,action:this.__sM},insertTable:{text:co,image:Y,action:this.__sN},insertLink:{text:cE,image:N,action:this.__sO},insertHTML:{text:O,image:cw,action:this.__sP},insertHR:{text:cD,image:cC,action:this.__sH.insertHorizontalRuler}},{ol:{text:M,image:n,action:this.__sH.insertOrderedList},ul:{text:bP,image:cB,action:this.__sH.insertUnorderedList}},{undo:{text:bv,image:R,action:this.__sH.undo},redo:{text:A,image:bs,action:this.__sH.redo}}];
var cN,cR,cK,cP;

for(var i=0,j=cL.length;i<j;i++){cR={};
cR[x]=i==j-1?ck:cd;
cR[s]=bF;
cN=qx.bom.Element.create(cl);
qx.bom.element.Style.setStyles(cN,cR);

for(var cO in cL[i]){var cQ=cL[i][cO];

if(cQ.custom){cK=cQ.custom.call(this);
}else{var cM=qx.util.AliasManager.getInstance().resolve(cQ.image);
cP={type:bg,src:qx.util.ResourceManager.getInstance().toUri(cM),title:cQ.text,qxKeepFocus:V,qxSelectable:C};
cK=qx.bom.Element.create(cy,cP);
qx.bom.element.Style.setStyles(cK,{width:cd,height:cd,padding:H});

if(qx.core.Variant.isSet(ce,ci)){qx.bom.element.Attribute.set(cK,ch,cf);
}else{qx.bom.element.Style.set(cK,cj,cg);
}qx.event.Registration.addListener(cK,bi,cQ.action,this.__sH);
}qx.dom.Element.insertEnd(cK,cN);
}qx.dom.Element.insertEnd(cN,this.__sF);
}qx.dom.Element.insertEnd(qx.bom.Element.create(y,{style:cr}),this.__sF);
}}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__cc:function(){this.QUIRKS_MODE=this.__cd();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__cd:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__cc();
}});
})();
(function(){var s="qx.lang.Object";
qx.Class.define(s,{statics:{empty:function(d){{};

for(var e in d){if(d.hasOwnProperty(e)){delete d[e];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(J){{};
return J.__count__===0;
}:
function(o){{};

for(var p in o){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(H,I){{};
return H.__count__>=I;
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
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(C,D){{};
return qx.lang.Object.mergeWith(C,D,false);
},merge:function(E,F){{};
var G=arguments.length;

for(var i=1;i<G;i++){qx.lang.Object.mergeWith(E,arguments[i]);
}return E;
},clone:function(a){{};
var b={};

for(var c in a){b[c]=a[c];
}return b;
},invert:function(w){{};
var x={};

for(var y in w){x[w[y].toString()]=y;
}return x;
},getKeyFromValue:function(z,A){{};

for(var B in z){if(z.hasOwnProperty(B)&&z[B]===A){return B;
}}return null;
},contains:function(m,n){{};
return this.getKeyFromValue(m,n)!==null;
},select:function(f,g){{};
return g[f];
},fromArray:function(q){{};
var r={};

for(var i=0,l=q.length;i<l;i++){{};
r[q[i].toString()]=true;
}return r;
}}});
})();
(function(){var o="emulated",n="native",m='"',k="qx.lang.Core",j="\\\\",h="\\\"",g="[object Error]";
qx.Class.define(k,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==g)?o:n,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?n:o,{"native":Array.prototype.indexOf,"emulated":function(C,D){if(D==null){D=0;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i<this.length;i++){if(this[i]===C){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?n:o,{"native":Array.prototype.lastIndexOf,"emulated":function(A,B){if(B==null){B=this.length-1;
}else if(B<0){B=Math.max(0,this.length+B);
}
for(var i=B;i>=0;i--){if(this[i]===A){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?n:o,{"native":Array.prototype.forEach,"emulated":function(d,e){var l=this.length;

for(var i=0;i<l;i++){var f=this[i];

if(f!==undefined){d.call(e||window,f,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?n:o,{"native":Array.prototype.filter,"emulated":function(p,q){var r=[];
var l=this.length;

for(var i=0;i<l;i++){var s=this[i];

if(s!==undefined){if(p.call(q||window,s,i,this)){r.push(this[i]);
}}}return r;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?n:o,{"native":Array.prototype.map,"emulated":function(w,x){var y=[];
var l=this.length;

for(var i=0;i<l;i++){var z=this[i];

if(z!==undefined){y[i]=w.call(x||window,z,i,this);
}}return y;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?n:o,{"native":Array.prototype.some,"emulated":function(a,b){var l=this.length;

for(var i=0;i<l;i++){var c=this[i];

if(c!==undefined){if(a.call(b||window,c,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?n:o,{"native":Array.prototype.every,"emulated":function(t,u){var l=this.length;

for(var i=0;i<l;i++){var v=this[i];

if(v!==undefined){if(!t.call(u||window,v,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?n:o,{"native":String.prototype.quote,"emulated":function(){return m+this.replace(/\\/g,j).replace(/\"/g,h)+m;
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
(function(){var q="indexOf",p="lastIndexOf",o="slice",n="concat",m="join",k="toLocaleUpperCase",j="shift",h="substr",g="filter",f="unshift",N="match",M="quote",L="qx.lang.Generics",K="localeCompare",J="sort",I="some",H="charAt",G="split",F="substring",E="pop",y="toUpperCase",z="replace",w="push",x="charCodeAt",u="every",v="reverse",r="search",t="forEach",A="map",B="toLowerCase",D="splice",C="toLocaleLowerCase";
qx.Class.define(L,{statics:{__cM:{"Array":[m,v,J,w,E,j,f,D,n,o,q,p,t,A,g,I,u],"String":[M,F,B,y,H,x,q,p,C,k,K,N,r,z,G,h,n,o]},__cN:function(O,P){return function(s){return O.prototype[P].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cO:function(){var a=qx.lang.Generics.__cM;

for(var e in a){var c=window[e];
var b=a[e];

for(var i=0,l=b.length;i<l;i++){var d=b[i];

if(!c[d]){c[d]=qx.lang.Generics.__cN(c,d);
}}}}},defer:function(Q){Q.__cO();
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(i,j){},splice:function(f,g,h){},contains:function(e){},getLength:function(){},toArray:function(){}}});
})();
(function(){var m="qx.event.type.Event";
qx.Class.define(m,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(j,k){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!j;
this._cancelable=!!k;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(g){if(g){var h=g;
}else{var h=qx.event.Pool.getInstance().getObject(this.constructor);
}h._type=this._type;
h._target=this._target;
h._currentTarget=this._currentTarget;
h._relatedTarget=this._relatedTarget;
h._originalTarget=this._originalTarget;
h._stopPropagation=this._stopPropagation;
h._bubbles=this._bubbles;
h._preventDefault=this._preventDefault;
h._cancelable=this._cancelable;
return h;
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
},setType:function(e){this._type=e;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(l){this._eventPhase=l;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(f){this._target=f;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(b){this._currentTarget=b;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(a){this._relatedTarget=a;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(c){this._originalTarget=c;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(i){this._bubbles=i;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(d){this._cancelable=d;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__ch:null,__ci:null,init:function(d,e,f){arguments.callee.base.call(this,false,f);
this.__ch=d;
this.__ci=e;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c.__ch=this.__ch;
c.__ci=this.__ci;
return c;
},getData:function(){return this.__ch;
},getOldData:function(){return this.__ci;
}},destruct:function(){this.__ch=this.__ci=null;
}});
})();
(function(){var bI="get",bH="",bG="[",bF="last",bE="change",bD="]",bC=".",bB="Number",bA="String",bz="set",bX="deepBinding",bW="item",bV="reset",bU="' (",bT="Boolean",bS=").",bR=") to the object '",bQ="Integer",bP="qx.data.SingleValueBinding",bO="No event could be found for the property",bM="PositiveNumber",bN="Binding from '",bK="PositiveInteger",bL="Binding does not exist!",bJ="Date";
qx.Class.define(bP,{statics:{DEBUG_ON:false,__cq:{},bind:function(cu,cv,cw,cx,cy){var cI=this.__cs(cu,cv,cw,cx,cy);
var cD=cv.split(bC);
var cA=this.__cz(cD);
var cH=[];
var cE=[];
var cF=[];
var cB=[];
var cC=cu;
for(var i=0;i<cD.length;i++){if(cA[i]!==bH){cB.push(bE);
}else{cB.push(this.__cu(cC,cD[i]));
}cH[i]=cC;
if(i==cD.length-1){if(cA[i]!==bH){var cL=cA[i]===bF?cC.length-1:cA[i];
var cz=cC.getItem(cL);
this.__cy(cz,cw,cx,cy,cu);
cF[i]=this.__cA(cC,cB[i],cw,cx,cy,cA[i]);
}else{if(cD[i]!=null&&cC[bI+qx.lang.String.firstUp(cD[i])]!=null){var cz=cC[bI+qx.lang.String.firstUp(cD[i])]();
this.__cy(cz,cw,cx,cy,cu);
}cF[i]=this.__cA(cC,cB[i],cw,cx,cy);
}}else{var cJ={index:i,propertyNames:cD,sources:cH,listenerIds:cF,arrayIndexValues:cA,targetObject:cw,targetPropertyChain:cx,options:cy,listeners:cE};
var cG=qx.lang.Function.bind(this.__cr,this,cJ);
cE.push(cG);
cF[i]=cC.addListener(cB[i],cG);
}if(cC[bI+qx.lang.String.firstUp(cD[i])]==null){cC=null;
}else if(cA[i]!==bH){cC=cC[bI+qx.lang.String.firstUp(cD[i])](cA[i]);
}else{cC=cC[bI+qx.lang.String.firstUp(cD[i])]();
}
if(!cC){break;
}}var cK={type:bX,listenerIds:cF,sources:cH,targetListenerIds:cI.listenerIds,targets:cI.targets};
this.__cB(cK,cu,cv,cw,cx);
return cK;
},__cr:function(Y){if(Y.options&&Y.options.onUpdate){Y.options.onUpdate(Y.sources[Y.index],Y.targetObject);
}for(var j=Y.index+1;j<Y.propertyNames.length;j++){var bd=Y.sources[j];
Y.sources[j]=null;

if(!bd){continue;
}bd.removeListenerById(Y.listenerIds[j]);
}var bd=Y.sources[Y.index];
for(var j=Y.index+1;j<Y.propertyNames.length;j++){if(Y.arrayIndexValues[j-1]!==bH){bd=bd[bI+qx.lang.String.firstUp(Y.propertyNames[j-1])](Y.arrayIndexValues[j-1]);
}else{bd=bd[bI+qx.lang.String.firstUp(Y.propertyNames[j-1])]();
}Y.sources[j]=bd;
if(!bd){this.__cv(Y.targetObject,Y.targetPropertyChain);
break;
}if(j==Y.propertyNames.length-1){if(qx.Class.implementsInterface(bd,qx.data.IListData)){var be=Y.arrayIndexValues[j]===bF?bd.length-1:Y.arrayIndexValues[j];
var bb=bd.getItem(be);
this.__cy(bb,Y.targetObject,Y.targetPropertyChain,Y.options,Y.sources[Y.index]);
Y.listenerIds[j]=this.__cA(bd,bE,Y.targetObject,Y.targetPropertyChain,Y.options,Y.arrayIndexValues[j]);
}else{if(Y.propertyNames[j]!=null&&bd[bI+qx.lang.String.firstUp(Y.propertyNames[j])]!=null){var bb=bd[bI+qx.lang.String.firstUp(Y.propertyNames[j])]();
this.__cy(bb,Y.targetObject,Y.targetPropertyChain,Y.options,Y.sources[Y.index]);
}var bc=this.__cu(bd,Y.propertyNames[j]);
Y.listenerIds[j]=this.__cA(bd,bc,Y.targetObject,Y.targetPropertyChain,Y.options);
}}else{if(Y.listeners[j]==null){var ba=qx.lang.Function.bind(this.__cr,this,Y);
Y.listeners.push(ba);
}if(qx.Class.implementsInterface(bd,qx.data.IListData)){var bc=bE;
}else{var bc=this.__cu(bd,Y.propertyNames[j]);
}Y.listenerIds[j]=bd.addListener(bc,Y.listeners[j]);
}}},__cs:function(cc,cd,ce,cf,cg){var ck=cf.split(bC);
var ci=this.__cz(ck);
var cp=[];
var co=[];
var cm=[];
var cl=[];
var cj=ce;
for(var i=0;i<ck.length-1;i++){if(ci[i]!==bH){cl.push(bE);
}else{try{cl.push(this.__cu(cj,ck[i]));
}catch(e){break;
}}cp[i]=cj;
var cn=function(){for(var j=i+1;j<ck.length-1;j++){var cS=cp[j];
cp[j]=null;

if(!cS){continue;
}cS.removeListenerById(cm[j]);
}var cS=cp[i];
for(var j=i+1;j<ck.length-1;j++){var cQ=qx.lang.String.firstUp(ck[j-1]);
if(ci[j-1]!==bH){var cT=ci[j-1]===bF?cS.getLength()-1:ci[j-1];
cS=cS[bI+cQ](cT);
}else{cS=cS[bI+cQ]();
}cp[j]=cS;
if(co[j]==null){co.push(cn);
}if(qx.Class.implementsInterface(cS,qx.data.IListData)){var cR=bE;
}else{try{var cR=qx.data.SingleValueBinding.__cu(cS,ck[j]);
}catch(e){break;
}}cm[j]=cS.addListener(cR,co[j]);
}qx.data.SingleValueBinding.__ct(cc,cd,ce,cf);
};
co.push(cn);
cm[i]=cj.addListener(cl[i],cn);
var ch=qx.lang.String.firstUp(ck[i]);
if(cj[bI+ch]==null){cj=null;
}else if(ci[i]!==bH){cj=cj[bI+ch](ci[i]);
}else{cj=cj[bI+ch]();
}
if(!cj){break;
}}return {listenerIds:cm,targets:cp};
},__ct:function(a,b,c,d){var k=this.__cx(a,b);

if(k!=null){var m=b.substring(b.lastIndexOf(bC)+1,b.length);
if(m.charAt(m.length-1)==bD){var f=m.substring(m.lastIndexOf(bG)+1,m.length-1);
var h=m.substring(0,m.lastIndexOf(bG));
var l=k[bI+qx.lang.String.firstUp(h)]();

if(f==bF){f=l.length-1;
}
if(l!=null){var g=l.getItem(f);
}}else{var g=k[bI+qx.lang.String.firstUp(m)]();
}}this.__cw(c,d,g);
},__cu:function(bp,bq){var br=this.__cD(bp,bq);
if(br==null){if(qx.Class.supportsEvent(bp.constructor,bq)){br=bq;
}else if(qx.Class.supportsEvent(bp.constructor,bE+qx.lang.String.firstUp(bq))){br=bE+qx.lang.String.firstUp(bq);
}else{throw new qx.core.AssertionError(bO,bq);
}}return br;
},__cv:function(bs,bt){var bu=this.__cx(bs,bt);

if(bu!=null){var bv=bt.substring(bt.lastIndexOf(bC)+1,bt.length);
if(bv.charAt(bv.length-1)==bD){this.__cw(bs,bt,null);
return;
}if(bu[bV+qx.lang.String.firstUp(bv)]!=undefined){bu[bV+qx.lang.String.firstUp(bv)]();
}else{bu[bz+qx.lang.String.firstUp(bv)](null);
}}},__cw:function(bh,bi,bj){var bn=this.__cx(bh,bi);

if(bn!=null){var bo=bi.substring(bi.lastIndexOf(bC)+1,bi.length);
if(bo.charAt(bo.length-1)==bD){var bk=bo.substring(bo.lastIndexOf(bG)+1,bo.length-1);
var bm=bo.substring(0,bo.lastIndexOf(bG));
var bl=bn[bI+qx.lang.String.firstUp(bm)]();

if(bk==bF){bk=bl.length-1;
}
if(bl!=null){bl.setItem(bk,bj);
}}else{bn[bz+qx.lang.String.firstUp(bo)](bj);
}}},__cx:function(M,N){var Q=N.split(bC);
var R=M;
for(var i=0;i<Q.length-1;i++){try{var P=Q[i];
if(P.indexOf(bD)==P.length-1){var O=P.substring(P.indexOf(bG)+1,P.length-1);
P=P.substring(0,P.indexOf(bG));
}R=R[bI+qx.lang.String.firstUp(P)]();

if(O!=null){if(O==bF){O=R.length-1;
}R=R.getItem(O);
O=null;
}}catch(C){return null;
}}return R;
},__cy:function(cW,cX,cY,da,db){cW=this.__cC(cW,cX,cY,da);
if(cW==null){this.__cv(cX,cY);
}if(cW!=undefined){try{this.__cw(cX,cY,cW);
if(da&&da.onUpdate){da.onUpdate(db,cX,cW);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(da&&da.onSetFail){da.onSetFail(e);
}else{this.warn("Failed so set value "+cW+" on "+cX+". Error message: "+e);
}}}},__cz:function(bY){var ca=[];
for(var i=0;i<bY.length;i++){var name=bY[i];
if(qx.lang.String.endsWith(name,bD)){var cb=name.substring(name.indexOf(bG)+1,name.indexOf(bD));
if(name.indexOf(bD)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cb!==bF){if(cb==bH||isNaN(parseInt(cb))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(bG)!=0){bY[i]=name.substring(0,name.indexOf(bG));
ca[i]=bH;
ca[i+1]=cb;
bY.splice(i+1,0,bW);
i++;
}else{ca[i]=cb;
bY.splice(i,1,bW);
}}else{ca[i]=bH;
}}return ca;
},__cA:function(t,u,v,w,x,y){var z;
{};
var B=function(cM,e){if(cM!==bH){if(cM===bF){cM=t.length-1;
}var cP=t.getItem(cM);
if(cP==undefined){qx.data.SingleValueBinding.__cv(v,w);
}var cN=e.getData().start;
var cO=e.getData().end;

if(cM<cN||cM>cO){return;
}}else{var cP=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+t+" by "+u+" to "+v+" ("+w+")");
qx.log.Logger.debug("Data before conversion: "+cP);
}cP=qx.data.SingleValueBinding.__cC(cP,v,w,x);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+cP);
}try{if(cP!=undefined){qx.data.SingleValueBinding.__cw(v,w,cP);
}else{qx.data.SingleValueBinding.__cv(v,w);
}if(x&&x.onUpdate){x.onUpdate(t,v,cP);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(x&&x.onSetFail){x.onSetFail(e);
}else{this.warn("Failed so set value "+cP+" on "+v+". Error message: "+e);
}}};
if(!y){y=bH;
}B=qx.lang.Function.bind(B,t,y);
var A=t.addListener(u,B);
return A;
},__cB:function(o,p,q,r,s){if(this.__cq[p.toHashCode()]===undefined){this.__cq[p.toHashCode()]=[];
}this.__cq[p.toHashCode()].push([o,p,q,r,s]);
},__cC:function(D,E,F,G){if(G&&G.converter){var I;

if(E.getModel){I=E.getModel();
}return G.converter(D,I);
}else{var K=this.__cx(E,F);
var L=F.substring(F.lastIndexOf(bC)+1,F.length);
if(K==null){return D;
}var J=qx.Class.getPropertyDefinition(K.constructor,L);
var H=J==null?bH:J.check;
return this.__cE(D,H);
}},__cD:function(bw,bx){var by=qx.Class.getPropertyDefinition(bw.constructor,bx);

if(by==null){return null;
}return by.event;
},__cE:function(V,W){var X=qx.lang.Type.getClass(V);
if((X==bB||X==bA)&&(W==bQ||W==bK)){V=parseInt(V);
}if((X==bT||X==bB||X==bJ)&&W==bA){V=V+bH;
}if((X==bB||X==bA)&&(W==bB||W==bM)){V=parseFloat(V);
}return V;
},removeBindingFromObject:function(S,T){if(T.type==bX){for(var i=0;i<T.sources.length;i++){if(T.sources[i]){T.sources[i].removeListenerById(T.listenerIds[i]);
}}for(var i=0;i<T.targets.length;i++){if(T.targets[i]){T.targets[i].removeListenerById(T.targetListenerIds[i]);
}}}else{S.removeListenerById(T);
}var U=this.__cq[S.toHashCode()];
if(U!=undefined){for(var i=0;i<U.length;i++){if(U[i][0]==T){qx.lang.Array.remove(U,U[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(dc){{};
var dd=this.__cq[dc.toHashCode()];

if(dd!=undefined){for(var i=dd.length-1;i>=0;i--){this.removeBindingFromObject(dc,dd[i][0]);
}}},getAllBindingsForObject:function(n){if(this.__cq[n.toHashCode()]===undefined){this.__cq[n.toHashCode()]=[];
}return this.__cq[n.toHashCode()];
},removeAllBindings:function(){for(var bg in this.__cq){var bf=qx.core.ObjectRegistry.fromHashCode(bg);
if(bf==null){delete this.__cq[bg];
continue;
}this.removeAllBindingsForObject(bf);
}this.__cq={};
},getAllBindings:function(){return this.__cq;
},showBindingInLog:function(cq,cr){var ct;
for(var i=0;i<this.__cq[cq.toHashCode()].length;i++){if(this.__cq[cq.toHashCode()][i][0]==cr){ct=this.__cq[cq.toHashCode()][i];
break;
}}
if(ct===undefined){var cs=bL;
}else{var cs=bN+ct[1]+bU+ct[2]+bR+ct[3]+bU+ct[4]+bS;
}qx.log.Logger.debug(cs);
},showAllBindingsInLog:function(){for(var cV in this.__cq){var cU=qx.core.ObjectRegistry.fromHashCode(cV);

for(var i=0;i<this.__cq[cV].length;i++){this.showBindingInLog(cU,this.__cq[cV][i][0]);
}}}}});
})();
(function(){var r="",q="g",p="0",o='\\$1',n="%",m='-',l="qx.lang.String",k=' ',j='\n',h="undefined";
qx.Class.define(l,{statics:{camelCase:function(f){return f.replace(/\-([a-z])/g,function(d,e){return e.toUpperCase();
});
},hyphenate:function(a){return a.replace(/[A-Z]/g,function(g){return (m+g.charAt(0).toLowerCase());
});
},capitalize:function(Q){return Q.replace(/\b[a-z]/g,function(G){return G.toUpperCase();
});
},clean:function(s){return this.trim(s.replace(/\s+/g,k));
},trimLeft:function(t){return t.replace(/^\s+/,r);
},trimRight:function(H){return H.replace(/\s+$/,r);
},trim:function(b){return b.replace(/^\s+|\s+$/g,r);
},startsWith:function(M,N){return M.indexOf(N)===0;
},endsWith:function(E,F){return E.substring(E.length-F.length,E.length)===F;
},repeat:function(O,P){return O.length>=0?new Array(P+1).join(O):r;
},pad:function(J,length,K){var L=length-J.length;

if(L>0){if(typeof K===h){K=p;
}return this.repeat(K,L)+J;
}else{return J;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(x,y){return x.indexOf(y)!=-1;
},format:function(u,v){var w=u;

for(var i=0;i<v.length;i++){w=w.replace(new RegExp(n+(i+1),q),v[i]);
}return w;
},escapeRegexpChars:function(I){return I.replace(/([.*+?^${}()|[\]\/\\])/g,o);
},toArray:function(c){return c.split(/\B|\b/g);
},stripTags:function(D){return D.replace(/<\/?[^>]+>/gi,r);
},stripScripts:function(z,A){var C=r;
var B=z.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){C+=arguments[1]+j;
return r;
});

if(A===true){qx.lang.Function.globalEval(C);
}return B;
}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cj=c;
this.__ck=d||b;
this.__cl=e===undefined?-1:e;
},members:{__cj:null,__ck:null,__cl:null,toString:function(){return this.__cj;
},getUri:function(){return this.__ck;
},getLineNumber:function(){return this.__cl;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Class.define(a,{extend:Error,construct:function(c,d){{};
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
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__ce=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__ce:null,message:null,getComment:function(){return this.__ce;
},toString:function(){return this.__ce+c+this.message;
}}});
})();
(function(){var c="qx.core.AssertionError";
qx.Class.define(c,{extend:qx.type.BaseError,construct:function(a,b){qx.type.BaseError.call(this,a,b);
this.__cf=qx.dev.StackTrace.getStackTrace();
},members:{__cf:null,getStackTrace:function(){return this.__cf;
}}});
})();
(function(){var p=":",o="qx.client",n="anonymous",m="...",l="qx.dev.StackTrace",k="",j="\n",h="/source/class/",g=".";
qx.Class.define(l,{statics:{getStackTrace:qx.core.Variant.select(o,{"gecko":function(){try{throw new Error();
}catch(a){var x=this.getStackTraceFromError(a);
qx.lang.Array.removeAt(x,0);
var v=this.getStackTraceFromCaller(arguments);
var t=v.length>x.length?v:x;

for(var i=0;i<Math.min(v.length,x.length);i++){var u=v[i];

if(u.indexOf(n)>=0){continue;
}var B=u.split(p);

if(B.length!=2){continue;
}var z=B[0];
var s=B[1];
var r=x[i];
var C=r.split(p);
var y=C[0];
var q=C[1];

if(qx.Class.getByName(y)){var w=y;
}else{w=z;
}var A=w+p;

if(s){A+=s+p;
}A+=q;
t[i]=A;
}return t;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var D;

try{D.bar();
}catch(f){var E=this.getStackTraceFromError(f);
qx.lang.Array.removeAt(E,0);
return E;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(o,{"opera":function(F){return [];
},"default":function(V){var bb=[];
var ba=qx.lang.Function.getCaller(V);
var W={};

while(ba){var X=qx.lang.Function.getName(ba);
bb.push(X);

try{ba=ba.caller;
}catch(U){break;
}
if(!ba){break;
}var Y=qx.core.ObjectRegistry.toHashCode(ba);

if(W[Y]){bb.push(m);
break;
}W[Y]=ba;
}return bb;
}}),getStackTraceFromError:qx.core.Variant.select(o,{"gecko":function(G){if(!G.stack){return [];
}var M=/@(.+):(\d+)$/gm;
var H;
var I=[];

while((H=M.exec(G.stack))!=null){var J=H[1];
var L=H[2];
var K=this.__cg(J);
I.push(K+p+L);
}return I;
},"webkit":function(bc){if(bc.sourceURL&&bc.line){return [this.__cg(bc.sourceURL)+p+bc.line];
}else{return [];
}},"opera":function(N){if(N.message.indexOf("Backtrace:")<0){return [];
}var P=[];
var Q=qx.lang.String.trim(N.message.split("Backtrace:")[1]);
var R=Q.split(j);

for(var i=0;i<R.length;i++){var O=R[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(O&&O.length>=2){var T=O[1];
var S=this.__cg(O[2]);
P.push(S+p+T);
}}return P;
},"default":function(){return [];
}}),__cg:function(b){var e=h;
var c=b.indexOf(e);
var d=(c==-1)?b:b.substring(c+e.length).replace(/\//g,g).replace(/\.js$/,k);
return d;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var g="qx.lang.Type",f="Error",e="RegExp",d="Date",c="Number",b="Boolean";
qx.Class.define(g,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(h){return this.getClass(h)==e;
},isNumber:function(a){return (a!==null&&(this.getClass(a)==c||a instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==b||i instanceof Boolean));
},isDate:function(k){return (k!==null&&(this.getClass(k)==d||k instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==f||j instanceof Error));
}}});
})();
(function(){var f="qx.util.ObjectPool",e="Integer";
qx.Class.define(f,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.__cp={};

if(a!=null){this.setSize(a);
}},properties:{size:{check:e,init:Infinity}},members:{__cp:null,getObject:function(g){if(this.$$disposed){return;
}
if(!g){throw new Error("Class needs to be defined!");
}var h=null;
var j=this.__cp[g.classname];

if(j){h=j.pop();
}
if(h){h.$$pooled=false;
}else{h=new g;
}return h;
},poolObject:function(b){if(!this.__cp){return;
}var c=b.classname;
var d=this.__cp[c];

if(b.$$pooled){throw new Error("Object is already pooled: "+b);
}
if(!d){this.__cp[c]=d=[];
}if(d.length>this.getSize()){if(b.destroy){b.destroy();
}else{b.dispose();
}return;
}b.$$pooled=true;
d.push(b);
}},destruct:function(){var n=this.__cp;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__cp;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var k="qx.util.DisposeUtil";
qx.Class.define(k,{statics:{disposeFields:function(a,b){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=b.length;i<l;i++){var name=b[i];

if(a[name]==null||!a.hasOwnProperty(name)){continue;
}a[name]=null;
}},disposeObjects:function(s,t){var name;

for(var i=0,l=t.length;i<l;i++){name=t[i];

if(s[name]==null||!s.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(s[name].dispose){s[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}s[name]=null;
}},disposeArray:function(c,d){var f=c[d];

if(!f){return;
}if(qx.core.ObjectRegistry.inShutDown){c[d]=null;
return;
}try{var e;

for(var i=f.length-1;i>=0;i--){e=f[i];

if(e){e.dispose();
}}}catch(q){throw new Error("The array field: "+d+" of object: "+c+" has non disposable entries: "+q);
}f.length=0;
c[d]=null;
},disposeMap:function(m,n){var o=m[n];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){m[n]=null;
return;
}try{for(var p in o){if(o.hasOwnProperty(p)){o[p].dispose();
}}}catch(r){throw new Error("The map field: "+n+" of object: "+m+" has non disposable entries: "+r);
}m[n]=null;
},disposeTriggeredBy:function(g,h){var j=h.dispose;
h.dispose=function(){j.call(h);
g.dispose();
};
}}});
})();
(function(){var g="qx.event.handler.Object";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(i,j){return qx.Class.supportsEvent(i.constructor,j);
},registerEvent:function(a,b,c){},unregisterEvent:function(d,e,f){}},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(h,i,j,k,l){arguments.callee.base.call(this,k,l);
this._target=i||qx.bom.Event.getTarget(h);
this._relatedTarget=j||qx.bom.Event.getRelatedTarget(h);

if(h.timeStamp){this._timeStamp=h.timeStamp;
}this._native=h;
this._returnValue=null;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
var g={};
f._native=this._cloneNativeEvent(this._native,g);
f._returnValue=this._returnValue;
return f;
},_cloneNativeEvent:function(c,d){d.preventDefault=qx.lang.Function.empty;
return d;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(b){this._returnValue=b;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__cP:function(){var o=navigator.platform;
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
}}},defer:function(n){n.__cP();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__cQ:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__cR:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__cQ){J.push(I);
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
}else{this.NAME=this.__cQ[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__cR();
}});
})();
(function(){var f="abstract",e="qx.event.dispatch.AbstractBubbling";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:f,construct:function(c){this._manager=c;
},members:{_getParent:function(d){throw new Error("Missing implementation");
},canDispatchEvent:function(a,event,b){return event.getBubbles();
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
(function(){var b="qx.event.dispatch.DomBubbling";
qx.Class.define(b,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(a){return a.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var d="qx.event.handler.UserAction";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){arguments.callee.base.call(this);
this.__eu=k;
this.__ev=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eu:null,__ev:null,canHandleEvent:function(f,g){},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){}},destruct:function(){this.__eu=this.__ev=null;
},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var Y="keydown",X="qx.client",W="keypress",V="NumLock",U="keyup",T="Enter",S="0",R="9",Q="-",P="PageUp",cg="+",cf="PrintScreen",ce="gecko",cd="A",cc="Z",cb="Left",ca="F5",bY="Down",bX="Up",bW="F11",bg="F6",bh="useraction",be="F3",bf="keyinput",bc="Insert",bd="F8",ba="End",bb="/",bo="Delete",bp="*",bB="F1",bx="F4",bJ="Home",bE="F2",bS="F12",bO="PageDown",bt="F7",bV="F9",bU="F10",bT="Right",bs="text",bv="Escape",bw="webkit",bz="5",bC="3",bF="Meta",bL="7",bQ="CapsLock",bi="input",bj="Control",bu="Space",bI="Tab",bH="Shift",bG="Pause",bN="Unidentified",bM="qx.event.handler.Keyboard",bD="mshtml",bK="mshtml|webkit",M="6",bP="off",bk="Apps",bl="4",by="Alt",N="2",O="Scroll",br="1",bm="8",bn="Win",bq="autoComplete",bA=",",bR="Backspace";
qx.Class.define(bM,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cz){arguments.callee.base.call(this);
this.__fv=cz;
this.__fw=cz.getWindow();
if(qx.core.Variant.isSet(X,ce)){this.__fx=this.__fw;
}else{this.__fx=this.__fw.document.documentElement;
}this.__fy={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(u){if(this._identifierToKeyCodeMap[u]){return true;
}
if(u.length!=1){return false;
}
if(u>=S&&u<=R){return true;
}
if(u>=cd&&u<=cc){return true;
}
switch(u){case cg:case Q:case bp:case bb:return true;
default:return false;
}}},members:{__fz:null,__fv:null,__fw:null,__fx:null,__fy:null,__fA:null,__fB:null,__fC:null,canHandleEvent:function(cx,cy){},registerEvent:function(cJ,cK,cL){},unregisterEvent:function(e,f,g){},_fireInputEvent:function(E,F){var G=this.__fD();
if(G&&G.offsetWidth!=0){var event=qx.event.Registration.createEvent(bf,qx.event.type.KeyInput,[E,G,F]);
this.__fv.dispatchEvent(G,event);
}if(this.__fw){qx.event.Registration.fireEvent(this.__fw,bh,qx.event.type.Data,[bf]);
}},_fireSequenceEvent:function(i,j,k){var l=this.__fD();
var m=i.keyCode;
var event=qx.event.Registration.createEvent(j,qx.event.type.KeySequence,[i,l,k]);
this.__fv.dispatchEvent(l,event);
if(qx.core.Variant.isSet(X,bK)){if(j==Y&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(m)&&!this._emulateKeyPress[m]){this._fireSequenceEvent(i,W,k);
}}}if(this.__fw){qx.event.Registration.fireEvent(this.__fw,bh,qx.event.type.Data,[j]);
}},__fD:function(){var cH=this.__fv.getHandler(qx.event.handler.Focus);
var cI=cH.getActive();
if(!cI||cI.offsetWidth==0){cI=cH.getFocus();
}if(!cI||cI.offsetWidth==0){cI=this.__fv.getWindow().document.body;
}return cI;
},_initKeyObserver:function(){this.__fz=qx.lang.Function.listener(this.__fE,this);
this.__fC=qx.lang.Function.listener(this.__fG,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fx,U,this.__fz);
Event.addNativeListener(this.__fx,Y,this.__fz);
Event.addNativeListener(this.__fx,W,this.__fC);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fx,U,this.__fz);
Event.removeNativeListener(this.__fx,Y,this.__fz);
Event.removeNativeListener(this.__fx,W,this.__fC);

for(var cB in (this.__fB||{})){var cA=this.__fB[cB];
Event.removeNativeListener(cA.target,W,cA.callback);
}delete (this.__fB);
},__fE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(X,{"mshtml":function(ci){ci=window.event||ci;
var cl=ci.keyCode;
var cj=0;
var ck=ci.type;
if(!(this.__fy[cl]==Y&&ck==Y)){this._idealKeyHandler(cl,cj,ck,ci);
}if(ck==Y){if(this._isNonPrintableKeyCode(cl)||this._emulateKeyPress[cl]){this._idealKeyHandler(cl,cj,W,ci);
}}this.__fy[cl]=ck;
},"gecko":function(cq){var cu=this._keyCodeFix[cq.keyCode]||cq.keyCode;
var cs=0;
var ct=cq.type;
if(qx.bom.client.Platform.WIN){var cr=cu?this._keyCodeToIdentifier(cu):this._charCodeToIdentifier(cs);

if(!(this.__fy[cr]==Y&&ct==Y)){this._idealKeyHandler(cu,cs,ct,cq);
}this.__fy[cr]=ct;
}else{this._idealKeyHandler(cu,cs,ct,cq);
}this.__fF(cq.target,ct,cu);
},"webkit":function(a){var d=0;
var b=0;
var c=a.type;
if(qx.bom.client.Engine.VERSION<525.13){if(c==U||c==Y){d=this._charCode2KeyCode[a.charCode]||a.keyCode;
}else{if(this._charCode2KeyCode[a.charCode]){d=this._charCode2KeyCode[a.charCode];
}else{b=a.charCode;
}}this._idealKeyHandler(d,b,c,a);
}else{d=a.keyCode;
if(!(this.__fy[d]==Y&&c==Y)){this._idealKeyHandler(d,b,c,a);
}if(c==Y){if(this._isNonPrintableKeyCode(d)||this._emulateKeyPress[d]){this._idealKeyHandler(d,b,W,a);
}}this.__fy[d]=c;
}},"opera":function(h){this.__fA=h.keyCode;
this._idealKeyHandler(h.keyCode,0,h.type,h);
}})),__fF:qx.core.Variant.select(X,{"gecko":function(cC,cD,cE){if(cD===Y&&(cE==33||cE==34||cE==38||cE==40)&&cC.type==bs&&cC.tagName.toLowerCase()===bi&&cC.getAttribute(bq)!==bP){if(!this.__fB){this.__fB={};
}var cG=qx.core.ObjectRegistry.toHashCode(cC);

if(this.__fB[cG]){return;
}var self=this;
this.__fB[cG]={target:cC,callback:function(D){qx.bom.Event.stopPropagation(D);
self.__fG(D);
}};
var cF=qx.event.GlobalError.observeMethod(this.__fB[cG].callback);
qx.bom.Event.addNativeListener(cC,W,cF);
}},"default":null}),__fG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(X,{"mshtml":function(I){I=window.event||I;

if(this._charCode2KeyCode[I.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[I.keyCode],0,I.type,I);
}else{this._idealKeyHandler(0,I.keyCode,I.type,I);
}},"gecko":function(cm){var cp=this._keyCodeFix[cm.keyCode]||cm.keyCode;
var cn=cm.charCode;
var co=cm.type;
this._idealKeyHandler(cp,cn,co,cm);
},"webkit":function(z){if(qx.bom.client.Engine.VERSION<525.13){var C=0;
var A=0;
var B=z.type;

if(B==U||B==Y){C=this._charCode2KeyCode[z.charCode]||z.keyCode;
}else{if(this._charCode2KeyCode[z.charCode]){C=this._charCode2KeyCode[z.charCode];
}else{A=z.charCode;
}}this._idealKeyHandler(C,A,B,z);
}else{if(this._charCode2KeyCode[z.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[z.keyCode],0,z.type,z);
}else{this._idealKeyHandler(0,z.keyCode,z.type,z);
}}},"opera":function(J){var L=J.keyCode;
var K=J.type;
if(L!=this.__fA){this._idealKeyHandler(0,this.__fA,K,J);
}else{if(this._keyCodeToIdentifierMap[J.keyCode]){this._idealKeyHandler(J.keyCode,0,J.type,J);
}else{this._idealKeyHandler(0,J.keyCode,J.type,J);
}}}})),_idealKeyHandler:function(n,o,p,q){var r;
if(n||(!n&&!o)){r=this._keyCodeToIdentifier(n);
this._fireSequenceEvent(q,p,r);
}else{r=this._charCodeToIdentifier(o);
this._fireSequenceEvent(q,W,r);
this._fireInputEvent(q,o);
}},_specialCharCodeMap:{8:bR,9:bI,13:T,27:bv,32:bu},_emulateKeyPress:qx.core.Variant.select(X,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bH,17:bj,18:by,20:bQ,224:bF,37:cb,38:bX,39:bT,40:bY,33:P,34:bO,35:ba,36:bJ,45:bc,46:bo,112:bB,113:bE,114:be,115:bx,116:ca,117:bg,118:bt,119:bd,120:bV,121:bU,122:bW,123:bS,144:V,44:cf,145:O,19:bG,91:bn,93:bk},_numpadToCharCode:{96:S.charCodeAt(0),97:br.charCodeAt(0),98:N.charCodeAt(0),99:bC.charCodeAt(0),100:bl.charCodeAt(0),101:bz.charCodeAt(0),102:M.charCodeAt(0),103:bL.charCodeAt(0),104:bm.charCodeAt(0),105:R.charCodeAt(0),106:bp.charCodeAt(0),107:cg.charCodeAt(0),109:Q.charCodeAt(0),110:bA.charCodeAt(0),111:bb.charCodeAt(0)},_charCodeA:cd.charCodeAt(0),_charCodeZ:cc.charCodeAt(0),_charCode0:S.charCodeAt(0),_charCode9:R.charCodeAt(0),_isNonPrintableKeyCode:function(ch){return this._keyCodeToIdentifierMap[ch]?true:false;
},_isIdentifiableKeyCode:function(H){if(H>=this._charCodeA&&H<=this._charCodeZ){return true;
}if(H>=this._charCode0&&H<=this._charCode9){return true;
}if(this._specialCharCodeMap[H]){return true;
}if(this._numpadToCharCode[H]){return true;
}if(this._isNonPrintableKeyCode(H)){return true;
}return false;
},_keyCodeToIdentifier:function(cv){if(this._isIdentifiableKeyCode(cv)){var cw=this._numpadToCharCode[cv];

if(cw){return String.fromCharCode(cw);
}return (this._keyCodeToIdentifierMap[cv]||this._specialCharCodeMap[cv]||String.fromCharCode(cv));
}else{return bN;
}},_charCodeToIdentifier:function(s){return this._specialCharCodeMap[s]||String.fromCharCode(s).toUpperCase();
},_identifierToKeyCode:function(t){return qx.event.handler.Keyboard._identifierToKeyCodeMap[t]||t.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__fA=this.__fv=this.__fw=this.__fx=this.__fy=null;
},defer:function(v,w,x){qx.event.Registration.addHandler(v);
if(!v._identifierToKeyCodeMap){v._identifierToKeyCodeMap={};

for(var y in w._keyCodeToIdentifierMap){v._identifierToKeyCodeMap[w._keyCodeToIdentifierMap[y]]=parseInt(y,10);
}
for(var y in w._specialCharCodeMap){v._identifierToKeyCodeMap[w._specialCharCodeMap[y]]=parseInt(y,10);
}}
if(qx.core.Variant.isSet(X,bD)){w._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(X,ce)){w._keyCodeFix={12:w._identifierToKeyCode(V)};
}else if(qx.core.Variant.isSet(X,bw)){if(qx.bom.client.Engine.VERSION<525.13){w._charCode2KeyCode={63289:w._identifierToKeyCode(V),63276:w._identifierToKeyCode(P),63277:w._identifierToKeyCode(bO),63275:w._identifierToKeyCode(ba),63273:w._identifierToKeyCode(bJ),63234:w._identifierToKeyCode(cb),63232:w._identifierToKeyCode(bX),63235:w._identifierToKeyCode(bT),63233:w._identifierToKeyCode(bY),63272:w._identifierToKeyCode(bo),63302:w._identifierToKeyCode(bc),63236:w._identifierToKeyCode(bB),63237:w._identifierToKeyCode(bE),63238:w._identifierToKeyCode(be),63239:w._identifierToKeyCode(bx),63240:w._identifierToKeyCode(ca),63241:w._identifierToKeyCode(bg),63242:w._identifierToKeyCode(bt),63243:w._identifierToKeyCode(bd),63244:w._identifierToKeyCode(bV),63245:w._identifierToKeyCode(bU),63246:w._identifierToKeyCode(bW),63247:w._identifierToKeyCode(bS),63248:w._identifierToKeyCode(cf),3:w._identifierToKeyCode(T),12:w._identifierToKeyCode(V),13:w._identifierToKeyCode(T)};
}else{w._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var B="qx.client",A="mouseup",z="click",y="mousedown",x="contextmenu",w="mousewheel",v="dblclick",u="mshtml",t="mouseover",s="mouseout",n="DOMMouseScroll",r="mousemove",q="on",m="mshtml|webkit|opera",l="useraction",p="gecko|webkit",o="qx.event.handler.Mouse";
qx.Class.define(o,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(X){arguments.callee.base.call(this);
this.__fH=X;
this.__fI=X.getWindow();
this.__fJ=this.__fI.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__fK:null,__fL:null,__fM:null,__fN:null,__fO:null,__fH:null,__fI:null,__fJ:null,canHandleEvent:function(Y,ba){},registerEvent:qx.bom.client.System.IPHONE?
function(O,P,Q){O[q+P]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(e,f,g){e[q+f]=undefined;
}:qx.lang.Function.returnNull,__fP:function(L,M,N){if(!N){N=L.target||L.srcElement;
}if(N&&N.nodeType){qx.event.Registration.fireEvent(N,M||L.type,M==w?qx.event.type.MouseWheel:qx.event.type.Mouse,[L,N,null,true,true]);
}qx.event.Registration.fireEvent(this.__fI,l,qx.event.type.Data,[M||L.type]);
},_initButtonObserver:function(){this.__fK=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fJ,y,this.__fK);
Event.addNativeListener(this.__fJ,A,this.__fK);
Event.addNativeListener(this.__fJ,z,this.__fK);
Event.addNativeListener(this.__fJ,v,this.__fK);
Event.addNativeListener(this.__fJ,x,this.__fK);
},_initMoveObserver:function(){this.__fL=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fJ,r,this.__fL);
Event.addNativeListener(this.__fJ,t,this.__fL);
Event.addNativeListener(this.__fJ,s,this.__fL);
},_initWheelObserver:function(){this.__fM=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var c=qx.core.Variant.isSet(B,m)?w:n;
var d=qx.core.Variant.isSet(B,u)?this.__fJ:this.__fI;
Event.addNativeListener(d,c,this.__fM);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fJ,y,this.__fK);
Event.removeNativeListener(this.__fJ,A,this.__fK);
Event.removeNativeListener(this.__fJ,z,this.__fK);
Event.removeNativeListener(this.__fJ,v,this.__fK);
Event.removeNativeListener(this.__fJ,x,this.__fK);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fJ,r,this.__fL);
Event.removeNativeListener(this.__fJ,t,this.__fL);
Event.removeNativeListener(this.__fJ,s,this.__fL);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var a=qx.core.Variant.isSet(B,m)?w:n;
var b=qx.core.Variant.isSet(B,u)?this.__fJ:this.__fI;
Event.removeNativeListener(b,a,this.__fM);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(C){this.__fP(C);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(D){var E=D.type;
var F=D.target||D.srcElement;
if(qx.core.Variant.isSet(B,p)){if(F&&F.nodeType==3){F=F.parentNode;
}}
if(this.__fQ){this.__fQ(D,E,F);
}
if(this.__fS){this.__fS(D,E,F);
}this.__fP(D,E,F);

if(this.__fR){this.__fR(D,E,F);
}
if(this.__fT){this.__fT(D,E,F);
}this.__fN=E;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(K){this.__fP(K,w);
}),__fQ:qx.core.Variant.select(B,{"webkit":function(R,S,T){if(qx.bom.client.Engine.VERSION<530){if(S==x){this.__fP(R,A,T);
}}},"default":null}),__fR:qx.core.Variant.select(B,{"opera":function(H,I,J){if(I==A&&H.button==2){this.__fP(H,x,J);
}},"default":null}),__fS:qx.core.Variant.select(B,{"mshtml":function(U,V,W){if(V==A&&this.__fN==z){this.__fP(U,y,W);
}else if(V==v){this.__fP(U,z,W);
}},"default":null}),__fT:qx.core.Variant.select(B,{"mshtml":null,"default":function(h,i,j){switch(i){case y:this.__fO=j;
break;
case A:if(j!==this.__fO){var k=qx.dom.Hierarchy.getCommonParent(j,this.__fO);
this.__fP(h,z,k);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__fH=this.__fI=this.__fJ=this.__fO=null;
},defer:function(G){qx.event.Registration.addHandler(G);
}});
})();
(function(){var e="qx.event.handler.Capture";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(f,g){},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){}},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var I="alias",H="copy",G="blur",F="mouseout",E="keydown",D="Ctrl",C="Shift",B="mousemove",A="move",z="mouseover",Y="Alt",X="keyup",W="mouseup",V="dragend",U="on",T="mousedown",S="qxDraggable",R="drag",Q="drop",P="qxDroppable",N="qx.event.handler.DragDrop",O="droprequest",L="dragstart",M="dragchange",J="dragleave",K="dragover";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bm){arguments.callee.base.call(this);
this.__fU=bm;
this.__fV=bm.getWindow().document.documentElement;
this.__fU.addListener(this.__fV,T,this._onMouseDown,this);
this.__gi();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__fU:null,__fV:null,__fW:null,__fX:null,__fY:null,__ga:null,__gb:null,__gc:null,__gd:null,__ge:null,__gf:false,__gg:0,__gh:0,canHandleEvent:function(b,c){},registerEvent:function(k,l,m){},unregisterEvent:function(be,bf,bg){},addType:function(bb){this.__fY[bb]=true;
},addAction:function(o){this.__ga[o]=true;
},supportsType:function(bk){return !!this.__fY[bk];
},supportsAction:function(h){return !!this.__ga[h];
},getData:function(y){if(!this.__gp||!this.__fW){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__fY[y]){throw new Error("Unsupported data type: "+y+"!");
}
if(!this.__gc[y]){this.__gd=y;
this.__gk(O,this.__fX,this.__fW,false);
}
if(!this.__gc[y]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__gc[y]||null;
},getCurrentAction:function(){return this.__ge;
},addData:function(bc,bd){this.__gc[bc]=bd;
},getCurrentType:function(){return this.__gd;
},__gi:function(){this.__fY={};
this.__ga={};
this.__gb={};
this.__gc={};
},__gj:function(){var bj=this.__ga;
var bh=this.__gb;
var bi=null;

if(this.__gp){if(bh.Shift&&bh.Ctrl&&bj.alias){bi=I;
}else if(bh.Shift&&bh.Alt&&bj.copy){bi=H;
}else if(bh.Shift&&bj.move){bi=A;
}else if(bh.Alt&&bj.alias){bi=I;
}else if(bh.Ctrl&&bj.copy){bi=H;
}else if(bj.move){bi=A;
}else if(bj.copy){bi=H;
}else if(bj.alias){bi=I;
}}
if(bi!=this.__ge){this.__ge=bi;
this.__gk(M,this.__fX,this.__fW,false);
}},__gk:function(r,s,t,u,v){var x=qx.event.Registration;
var w=x.createEvent(r,qx.event.type.Drag,[u,v]);

if(s!==t){w.setRelatedTarget(t);
}return x.dispatchEvent(s,w);
},__gl:function(g){while(g&&g.nodeType==1){if(g.getAttribute(S)==U){return g;
}g=g.parentNode;
}return null;
},__gm:function(n){while(n&&n.nodeType==1){if(n.getAttribute(P)==U){return n;
}n=n.parentNode;
}return null;
},__gn:function(){this.__fX=null;
this.__fU.removeListener(this.__fV,B,this._onMouseMove,this,true);
this.__fU.removeListener(this.__fV,W,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,G,this._onWindowBlur,this);
this.__gi();
},__go:function(){if(this.__gf){this.__fU.removeListener(this.__fV,z,this._onMouseOver,this,true);
this.__fU.removeListener(this.__fV,F,this._onMouseOut,this,true);
this.__fU.removeListener(this.__fV,E,this._onKeyDown,this,true);
this.__fU.removeListener(this.__fV,X,this._onKeyUp,this,true);
this.__gk(V,this.__fX,this.__fW,false);
this.__gf=false;
}this.__gp=false;
this.__fW=null;
this.__gn();
},__gp:false,_onWindowBlur:function(e){this.__go();
},_onKeyDown:function(e){var bl=e.getKeyIdentifier();

switch(bl){case Y:case D:case C:if(!this.__gb[bl]){this.__gb[bl]=true;
this.__gj();
}}},_onKeyUp:function(e){var f=e.getKeyIdentifier();

switch(f){case Y:case D:case C:if(this.__gb[f]){this.__gb[f]=false;
this.__gj();
}}},_onMouseDown:function(e){if(this.__gf){return;
}var ba=this.__gl(e.getTarget());

if(ba){this.__gg=e.getDocumentLeft();
this.__gh=e.getDocumentTop();
this.__fX=ba;
this.__fU.addListener(this.__fV,B,this._onMouseMove,this,true);
this.__fU.addListener(this.__fV,W,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,G,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__gp){this.__gk(Q,this.__fW,this.__fX,false,e);
}if(this.__gf){e.stopPropagation();
}this.__go();
},_onMouseMove:function(e){if(this.__gf){if(!this.__gk(R,this.__fX,this.__fW,true,e)){this.__go();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gg)>3||Math.abs(e.getDocumentTop()-this.__gh)>3){if(this.__gk(L,this.__fX,this.__fW,true,e)){this.__gf=true;
this.__fU.addListener(this.__fV,z,this._onMouseOver,this,true);
this.__fU.addListener(this.__fV,F,this._onMouseOut,this,true);
this.__fU.addListener(this.__fV,E,this._onKeyDown,this,true);
this.__fU.addListener(this.__fV,X,this._onKeyUp,this,true);
var a=this.__gb;
a.Ctrl=e.isCtrlPressed();
a.Shift=e.isShiftPressed();
a.Alt=e.isAltPressed();
this.__gj();
}else{this.__gk(V,this.__fX,this.__fW,false);
this.__gn();
}}}},_onMouseOver:function(e){var p=e.getTarget();
var q=this.__gm(p);

if(q&&q!=this.__fW){this.__gp=this.__gk(K,q,this.__fX,true,e);
this.__fW=q;
this.__gj();
}},_onMouseOut:function(e){var j=this.__gm(e.getTarget());
var i=this.__gm(e.getRelatedTarget());

if(j&&j!==i&&j==this.__fW){this.__gk(J,this.__fW,i,false,e);
this.__fW=null;
this.__gp=false;
qx.event.Timer.once(this.__gj,this,0);
}}},destruct:function(){this.__fX=this.__fW=this.__fU=this.__fV=this.__fY=this.__ga=this.__gb=this.__gc=null;
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var t="-",s="qx.event.handler.Element";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(z){arguments.callee.base.call(this);
this._manager=z;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(d,e){},registerEvent:function(f,g,h){var k=qx.core.ObjectRegistry.toHashCode(f);
var i=k+t+g;
var j=qx.lang.Function.listener(this._onNative,this,i);
qx.bom.Event.addNativeListener(f,g,j);
this._registeredEvents[i]={element:f,type:g,listener:j};
},unregisterEvent:function(l,m,n){var q=this._registeredEvents;

if(!q){return;
}var r=qx.core.ObjectRegistry.toHashCode(l);
var o=r+t+m;
var p=this._registeredEvents[o];
qx.bom.Event.removeNativeListener(l,m,p.listener);
delete this._registeredEvents[o];
},_onNative:qx.event.GlobalError.observeMethod(function(v,w){var y=this._registeredEvents;

if(!y){return;
}var x=y[w];
qx.event.Registration.fireNonBubblingEvent(x.element,x.type,qx.event.type.Native,[v]);
})},destruct:function(){var a;
var b=this._registeredEvents;

for(var c in b){a=b[c];
qx.bom.Event.removeNativeListener(a.element,a.type,a.listener);
}this._manager=this._registeredEvents=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var m="qx.event.handler.Appear",l="disappear",k="appear";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(p){arguments.callee.base.call(this);
this.__gq=p;
this.__gr={};
qx.event.handler.Appear.__gs[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__gs:{},refresh:function(){var n=this.__gs;

for(var o in n){n[o].refresh();
}}},members:{__gq:null,__gr:null,canHandleEvent:function(w,x){},registerEvent:function(q,r,s){var t=qx.core.ObjectRegistry.toHashCode(q)+r;
var u=this.__gr;

if(u&&!u[t]){u[t]=q;
q.$$displayed=q.offsetWidth>0;
}},unregisterEvent:function(f,g,h){var i=qx.core.ObjectRegistry.toHashCode(f)+g;
var j=this.__gr;

if(!j){return;
}
if(j[i]){delete j[i];
}},refresh:function(){var d=this.__gr;
var e;

for(var c in d){e=d[c];
var a=e.offsetWidth>0;

if((!!e.$$displayed)!==a){e.$$displayed=a;
var b=qx.event.Registration.createEvent(a?k:l);
this.__gq.dispatchEvent(e,b);
}}}},destruct:function(){this.__gq=this.__gr=null;
delete qx.event.handler.Appear.__gs[this.$$hash];
},defer:function(v){qx.event.Registration.addHandler(v);
}});
})();
(function(){var r="mshtml",q="",p="qx.client",o=">",n="<",m=" ",k="='",h="qx.bom.Element",g="div",f="' ",e="></";
qx.Class.define(h,{statics:{__gt:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,s,t){if(!t){t=window;
}
if(!name){throw new Error("The tag name is missing!");
}var v=this.__gt;
var u=q;

for(var x in s){if(v[x]){u+=x+k+s[x]+f;
}}var y;
if(u!=q){if(qx.bom.client.Engine.MSHTML){y=t.document.createElement(n+name+m+u+o);
}else{var w=t.document.createElement(g);
w.innerHTML=n+name+m+u+e+name+o;
y=w.firstChild;
}}else{y=t.document.createElement(name);
}
for(var x in s){if(!v[x]){qx.bom.element.Attribute.set(y,x,s[x]);
}}return y;
},empty:function(C){return C.innerHTML=q;
},addListener:function(a,b,c,self,d){return qx.event.Registration.addListener(a,b,c,self,d);
},removeListener:function(W,X,Y,self,ba){return qx.event.Registration.removeListener(W,X,Y,self,ba);
},removeListenerById:function(bb,bc){return qx.event.Registration.removeListenerById(bb,bc);
},hasListener:function(z,A,B){return qx.event.Registration.hasListener(z,A,B);
},focus:function(D){qx.event.Registration.getManager(D).getHandler(qx.event.handler.Focus).focus(D);
},blur:function(H){qx.event.Registration.getManager(H).getHandler(qx.event.handler.Focus).blur(H);
},activate:function(E){qx.event.Registration.getManager(E).getHandler(qx.event.handler.Focus).activate(E);
},deactivate:function(V){qx.event.Registration.getManager(V).getHandler(qx.event.handler.Focus).deactivate(V);
},capture:function(F,G){qx.event.Registration.getManager(F).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(F,G);
},releaseCapture:function(I){qx.event.Registration.getManager(I).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(I);
},clone:function(J,K){var N;

if(K||(qx.core.Variant.isSet(p,r)&&!qx.xml.Document.isXmlDocument(J))){var R=qx.event.Registration.getManager(J);
var L=qx.dom.Hierarchy.getDescendants(J);
L.push(J);
}if(qx.core.Variant.isSet(p,r)){for(var i=0,l=L.length;i<l;i++){R.toggleAttachedEvents(L[i],false);
}}var N=J.cloneNode(true);
if(qx.core.Variant.isSet(p,r)){for(var i=0,l=L.length;i<l;i++){R.toggleAttachedEvents(L[i],true);
}}if(K===true){var U=qx.dom.Hierarchy.getDescendants(N);
U.push(N);
var M,P,T,O;

for(var i=0,S=L.length;i<S;i++){T=L[i];
M=R.serializeListeners(T);

if(M.length>0){P=U[i];

for(var j=0,Q=M.length;j<Q;j++){O=M[j];
R.addListener(P,O.type,O.handler,O.self,O.capture);
}}}}return N;
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(b,c){var c=arguments.callee.base.call(this,b,c);
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
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._charCode=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._charCode=this._charCode;
return c;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._identifier=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._identifier=this._identifier;
return c;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var bm="qx.client",bl="blur",bk="focus",bj="mousedown",bi="on",bh="mouseup",bg="DOMFocusOut",bf="DOMFocusIn",be="selectstart",bd="onmousedown",bF="onfocusout",bE="onfocusin",bD="onmouseup",bC="onselectstart",bB="draggesture",bA="qx.event.handler.Focus",bz="_applyFocus",by="deactivate",bx="textarea",bw="_applyActive",bt="input",bu="focusin",br="qxSelectable",bs="tabIndex",bp="off",bq="activate",bn="focusout",bo="qxKeepFocus",bv="qxKeepActive";
qx.Class.define(bA,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(m){arguments.callee.base.call(this);
this._manager=m;
this._window=m.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bw,nullable:true},focus:{apply:bz,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gu:null,__gv:null,__gw:null,__gx:null,__gy:null,__gz:null,__gA:null,__gB:null,__gC:null,__gD:null,canHandleEvent:function(z,A){},registerEvent:function(bI,bJ,bK){},unregisterEvent:function(R,S,T){},focus:function(o){try{o.focus();
}catch(l){}this.setFocus(o);
this.setActive(o);
},activate:function(B){this.setActive(B);
},blur:function(bL){try{bL.blur();
}catch(H){}
if(this.getActive()===bL){this.resetActive();
}
if(this.getFocus()===bL){this.resetFocus();
}},deactivate:function(bG){if(this.getActive()===bG){this.resetActive();
}},tryActivate:function(L){var M=this.__gS(L);

if(M){this.setActive(M);
}},__gE:function(t,u,v,w){var y=qx.event.Registration;
var x=y.createEvent(v,qx.event.type.Focus,[t,u,w]);
y.dispatchEvent(t,x);
},_windowFocused:true,__gF:function(){if(this._windowFocused){this._windowFocused=false;
this.__gE(this._window,null,bl,false);
}},__gG:function(){if(!this._windowFocused){this._windowFocused=true;
this.__gE(this._window,null,bk,false);
}},_initObserver:qx.core.Variant.select(bm,{"gecko":function(){this.__gu=qx.lang.Function.listener(this.__gM,this);
this.__gv=qx.lang.Function.listener(this.__gN,this);
this.__gw=qx.lang.Function.listener(this.__gL,this);
this.__gx=qx.lang.Function.listener(this.__gK,this);
this.__gy=qx.lang.Function.listener(this.__gH,this);
this._document.addEventListener(bj,this.__gu,true);
this._document.addEventListener(bh,this.__gv,true);
this._window.addEventListener(bk,this.__gw,true);
this._window.addEventListener(bl,this.__gx,true);
this._window.addEventListener(bB,this.__gy,true);
},"mshtml":function(){this.__gu=qx.lang.Function.listener(this.__gM,this);
this.__gv=qx.lang.Function.listener(this.__gN,this);
this.__gA=qx.lang.Function.listener(this.__gI,this);
this.__gB=qx.lang.Function.listener(this.__gJ,this);
this.__gz=qx.lang.Function.listener(this.__gP,this);
this._document.attachEvent(bd,this.__gu);
this._document.attachEvent(bD,this.__gv);
this._document.attachEvent(bE,this.__gA);
this._document.attachEvent(bF,this.__gB);
this._document.attachEvent(bC,this.__gz);
},"webkit":function(){this.__gu=qx.lang.Function.listener(this.__gM,this);
this.__gv=qx.lang.Function.listener(this.__gN,this);
this.__gB=qx.lang.Function.listener(this.__gJ,this);
this.__gw=qx.lang.Function.listener(this.__gL,this);
this.__gx=qx.lang.Function.listener(this.__gK,this);
this.__gz=qx.lang.Function.listener(this.__gP,this);
this._document.addEventListener(bj,this.__gu,true);
this._document.addEventListener(bh,this.__gv,true);
this._document.addEventListener(be,this.__gz,false);
this._window.addEventListener(bg,this.__gB,true);
this._window.addEventListener(bk,this.__gw,true);
this._window.addEventListener(bl,this.__gx,true);
},"opera":function(){this.__gu=qx.lang.Function.listener(this.__gM,this);
this.__gv=qx.lang.Function.listener(this.__gN,this);
this.__gA=qx.lang.Function.listener(this.__gI,this);
this.__gB=qx.lang.Function.listener(this.__gJ,this);
this._document.addEventListener(bj,this.__gu,true);
this._document.addEventListener(bh,this.__gv,true);
this._window.addEventListener(bf,this.__gA,true);
this._window.addEventListener(bg,this.__gB,true);
}}),_stopObserver:qx.core.Variant.select(bm,{"gecko":function(){this._document.removeEventListener(bj,this.__gu,true);
this._document.removeEventListener(bh,this.__gv,true);
this._window.removeEventListener(bk,this.__gw,true);
this._window.removeEventListener(bl,this.__gx,true);
this._window.removeEventListener(bB,this.__gy,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,bd,this.__gu);
qx.bom.Event.removeNativeListener(this._document,bD,this.__gv);
qx.bom.Event.removeNativeListener(this._document,bE,this.__gA);
qx.bom.Event.removeNativeListener(this._document,bF,this.__gB);
qx.bom.Event.removeNativeListener(this._document,bC,this.__gz);
},"webkit":function(){this._document.removeEventListener(bj,this.__gu,true);
this._document.removeEventListener(be,this.__gz,false);
this._window.removeEventListener(bf,this.__gA,true);
this._window.removeEventListener(bg,this.__gB,true);
this._window.removeEventListener(bk,this.__gw,true);
this._window.removeEventListener(bl,this.__gx,true);
},"opera":function(){this._document.removeEventListener(bj,this.__gu,true);
this._window.removeEventListener(bf,this.__gA,true);
this._window.removeEventListener(bg,this.__gB,true);
this._window.removeEventListener(bk,this.__gw,true);
this._window.removeEventListener(bl,this.__gx,true);
}}),__gH:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"gecko":function(e){if(!this.__gT(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__gI:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml":function(e){this.__gG();
var b=e.srcElement;
var a=this.__gR(b);

if(a){this.setFocus(a);
}this.tryActivate(b);
},"opera":function(e){var bH=e.target;

if(bH==this._document||bH==this._window){this.__gG();

if(this.__gC){this.setFocus(this.__gC);
delete this.__gC;
}
if(this.__gD){this.setActive(this.__gD);
delete this.__gD;
}}else{this.setFocus(bH);
this.tryActivate(bH);
if(!this.__gT(bH)){bH.selectionStart=0;
bH.selectionEnd=0;
}}},"default":null})),__gJ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml":function(e){if(!e.toElement){this.__gF();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var r=e.target;

if(r===this.getFocus()){this.resetFocus();
}
if(r===this.getActive()){this.resetActive();
}},"opera":function(e){var I=e.target;

if(I==this._document){this.__gF();
this.__gC=this.getFocus();
this.__gD=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(I===this.getFocus()){this.resetFocus();
}
if(I===this.getActive()){this.resetActive();
}}},"default":null})),__gK:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__gF();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__gF();
this.__gC=this.getFocus();
this.__gD=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__gL:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"gecko":function(e){var bc=e.target;

if(bc===this._window||bc===this._document){this.__gG();
bc=this._body;
}this.setFocus(bc);
this.tryActivate(bc);
},"webkit":function(e){var P=e.target;

if(P===this._window||P===this._document){this.__gG();

if(this.__gC){this.setFocus(this.__gC);
delete this.__gC;
}
if(this.__gD){this.setActive(this.__gD);
delete this.__gD;
}}else{this.setFocus(P);
this.tryActivate(P);
}},"default":null})),__gM:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"gecko":function(e){var Q=this.__gR(e.target);

if(!Q){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bb=e.srcElement;
var ba=this.__gR(bb);

if(ba){if(!this.__gT(bb)){bb.unselectable=bi;
try{document.selection.empty();
}catch(e){}try{ba.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__gT(bb)){bb.unselectable=bi;
}}},"webkit":function(e){var K=e.target;
var J=this.__gR(K);

if(J){this.setFocus(J);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var E=e.target;
var C=this.__gR(E);

if(!this.__gT(E)){qx.bom.Event.preventDefault(e);
if(C){var D=this.getFocus();

if(D&&D.selectionEnd){D.selectionStart=0;
D.selectionEnd=0;
D.blur();
}if(C){this.setFocus(C);
}}}else if(C){this.setFocus(C);
}},"default":null})),__gN:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml":function(e){var n=e.srcElement;

if(n.unselectable){n.unselectable=bp;
}this.tryActivate(this.__gO(n));
},"gecko":function(e){var s=e.target;

while(s&&s.offsetWidth===undefined){s=s.parentNode;
}
if(s){this.tryActivate(s);
}},"webkit|opera":function(e){this.tryActivate(this.__gO(e.target));
},"default":null})),__gO:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml|webkit":function(F){var G=this.getFocus();

if(G&&F!=G&&(G.nodeName.toLowerCase()===bt||G.nodeName.toLowerCase()===bx)){F=G;
}return F;
},"default":function(d){return d;
}})),__gP:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml|webkit":function(e){var c=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__gT(c)){qx.bom.Event.preventDefault(e);
}},"default":null})),__gQ:function(h){var i=qx.bom.element.Attribute.get(h,bs);

if(i>=1){return true;
}var j=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(i>=0&&j[h.tagName]){return true;
}return false;
},__gR:function(k){while(k&&k.nodeType===1){if(k.getAttribute(bo)==bi){return null;
}
if(this.__gQ(k)){return k;
}k=k.parentNode;
}return this._body;
},__gS:function(N){var O=N;

while(N&&N.nodeType===1){if(N.getAttribute(bv)==bi){return null;
}N=N.parentNode;
}return O;
},__gT:function(f){while(f&&f.nodeType===1){var g=f.getAttribute(br);

if(g!=null){return g===bi;
}f=f.parentNode;
}return true;
},_applyActive:function(X,Y){if(Y){this.__gE(Y,X,by,true);
}
if(X){this.__gE(X,Y,bq,true);
}},_applyFocus:function(p,q){if(q){this.__gE(q,p,bn,true);
}
if(p){this.__gE(p,q,bu,true);
}if(q){this.__gE(q,p,bl,false);
}
if(p){this.__gE(p,q,bk,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__gU=null;
},defer:function(U){qx.event.Registration.addHandler(U);
var V=U.FOCUSABLE_ELEMENTS;

for(var W in V){V[W.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var q="",p="qx.client",o="readOnly",n="accessKey",m="qx.bom.element.Attribute",l="rowSpan",k="vAlign",j="className",i="textContent",h="'",E="htmlFor",D="longDesc",C="cellSpacing",B="frameBorder",A="='",z="useMap",y="innerText",x="innerHTML",w="tabIndex",v="dateTime",t="maxLength",u="mshtml",r="cellPadding",s="colSpan";
qx.Class.define(m,{statics:{__gV:{names:{"class":j,"for":E,html:x,text:qx.core.Variant.isSet(p,u)?y:i,colspan:s,rowspan:l,valign:k,datetime:v,accesskey:n,tabindex:w,maxlength:t,readonly:o,longdesc:D,cellpadding:r,cellspacing:C,frameborder:B,usemap:z},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:q,maxLength:10000000,className:q,innerHTML:q,innerText:q,textContent:q,htmlFor:q,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(d){var e=[];
var g=this.__gV.runtime;

for(var f in d){if(!g[f]){e.push(f,A,d[f],h);
}}return e.join(q);
},get:qx.core.Variant.select(p,{"mshtml":function(J,name){var L=this.__gV;
var K;
name=L.names[name]||name;
if(L.original[name]){K=J.getAttribute(name,2);
}else if(L.property[name]){if(L.propertyDefault[name]&&K==L.propertyDefault[name]){return null;
}K=J[name];
}else{K=J.getAttribute(name);
}if(L.bools[name]){return !!K;
}return K;
},"default":function(F,name){var H=this.__gV;
var G;
name=H.names[name]||name;
if(H.property[name]){if(H.propertyDefault[name]&&G==H.propertyDefault[name]){return null;
}G=F[name];

if(G==null){G=F.getAttribute(name);
}}else{G=F.getAttribute(name);
}if(H.bools[name]){return !!G;
}return G;
}}),set:function(a,name,b){var c=this.__gV;
name=c.names[name]||name;
if(c.bools[name]){b=!!b;
}if(c.property[name]){if(b==null){b=c.propertyDefault[name];

if(b===undefined){b=null;
}}a[name]=b;
}else{if(b===true){a.setAttribute(name,name);
}else if(b===false||b===null){a.removeAttribute(name);
}else{a.setAttribute(name,b);
}}},reset:function(I,name){this.set(I,name,null);
}}});
})();
(function(){var l="left",k="right",j="middle",i="qx.client",h="dblclick",g="click",f="none",e="contextmenu",d="qx.event.type.Mouse";
qx.Class.define(d,{extend:qx.event.type.Dom,members:{init:function(m,n,o,p,q){arguments.callee.base.call(this,m,n,o,p,q);

if(!o){this._relatedTarget=qx.bom.Event.getRelatedTarget(m);
}return this;
},_cloneNativeEvent:function(b,c){var c=arguments.callee.base.call(this,b,c);
c.button=b.button;
c.clientX=b.clientX;
c.clientY=b.clientY;
c.pageX=b.pageX;
c.pageY=b.pageY;
c.screenX=b.screenX;
c.screenY=b.screenY;
c.wheelDelta=b.wheelDelta;
c.detail=b.detail;
c.srcElement=b.srcElement;
return c;
},__gW:qx.core.Variant.select(i,{"mshtml":{1:l,2:k,4:j},"default":{0:l,2:k,1:j}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case g:case h:return l;
case e:return k;
default:return this.__gW[this._native.button]||f;
}},isLeftPressed:function(){return this.getButton()===l;
},isMiddlePressed:function(){return this.getButton()===j;
},isRightPressed:function(){return this.getButton()===k;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(i,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(r);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(i,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(a);
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
(function(){var f="qx.client",e="qx.bom.Viewport";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"opera":function(m){if(qx.bom.client.Engine.VERSION<9.5){return (m||window).document.body.clientWidth;
}else{var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientWidth:n.body.clientWidth;
}},"webkit":function(s){if(qx.bom.client.Engine.VERSION<523.15){return (s||window).innerWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"default":function(i){var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientWidth:j.body.clientWidth;
}}),getHeight:qx.core.Variant.select(f,{"opera":function(a){if(qx.bom.client.Engine.VERSION<9.5){return (a||window).document.body.clientHeight;
}else{var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientHeight:b.body.clientHeight;
}},"webkit":function(c){if(qx.bom.client.Engine.VERSION<523.15){return (c||window).innerHeight;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientHeight:d.body.clientHeight;
}},"default":function(g){var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientHeight:h.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(f,{"mshtml":function(o){var p=(o||window).document;
return p.documentElement.scrollLeft||p.body.scrollLeft;
},"default":function(r){return (r||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(f,{"mshtml":function(k){var l=(k||window).document;
return l.documentElement.scrollTop||l.body.scrollTop;
},"default":function(q){return (q||window).pageYOffset;
}})}});
})();
(function(){var l="CSS1Compat",k="position:absolute;width:0;height:0;width:1",j="qx.bom.Document",i="1px",h="qx.client",g="div";
qx.Class.define(j,{statics:{isQuirksMode:qx.core.Variant.select(h,{"mshtml":function(p){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (p||window).document.compatMode!==l;
}},"webkit":function(e){if(document.compatMode===undefined){var f=(e||window).document.createElement(g);
f.style.cssText=k;
return f.style.width===i?true:false;
}else{return (e||window).document.compatMode!==l;
}},"default":function(d){return (d||window).document.compatMode!==l;
}}),isStandardMode:function(q){return !this.isQuirksMode(q);
},getWidth:function(m){var n=(m||window).document;
var o=qx.bom.Viewport.getWidth(m);
var scroll=this.isStandardMode(m)?n.documentElement.scrollWidth:n.body.scrollWidth;
return Math.max(scroll,o);
},getHeight:function(a){var b=(a||window).document;
var c=qx.bom.Viewport.getHeight(a);
var scroll=this.isStandardMode(a)?b.documentElement.scrollHeight:b.body.scrollHeight;
return Math.max(scroll,c);
}}});
})();
(function(){var k="qx.client",j="ie",i="msie",h="android",g="operamini",f="mobile chrome",e=")(/| )([0-9]+\.[0-9])",d="iemobile",c="opera mobi",b="Mobile Safari",y="operamobile",x="mobile safari",w="IEMobile|Maxthon|MSIE",v="qx.bom.client.Browser",u="opera mini",t="(",s="opera",r="mshtml",q="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",o="5.0",l="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",m="Mobile/";
qx.Bootstrap.define(v,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__gX:function(B){var C=navigator.userAgent;
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
}},defer:qx.core.Variant.select(k,{"webkit":function(A){A.__gX(p);
},"gecko":function(G){G.__gX(l);
},"mshtml":function(z){z.__gX(w);
},"opera":function(a){a.__gX(q);
}})});
})();
(function(){var i="qx.client",h="qx.dom.Hierarchy",g="previousSibling",f="*",e="nextSibling",d="parentNode";
qx.Class.define(h,{statics:{getNodeIndex:function(n){var o=0;

while(n&&(n=n.previousSibling)){o++;
}return o;
},getElementIndex:function(j){var k=0;
var l=qx.dom.Node.ELEMENT;

while(j&&(j=j.previousSibling)){if(j.nodeType==l){k++;
}}return k;
},getNextElementSibling:function(R){while(R&&(R=R.nextSibling)&&!qx.dom.Node.isElement(R)){continue;
}return R||null;
},getPreviousElementSibling:function(a){while(a&&(a=a.previousSibling)&&!qx.dom.Node.isElement(a)){continue;
}return a||null;
},contains:qx.core.Variant.select(i,{"webkit|mshtml|opera":function(p,q){if(qx.dom.Node.isDocument(p)){var r=qx.dom.Node.getDocument(q);
return p&&r==p;
}else if(qx.dom.Node.isDocument(q)){return false;
}else{return p.contains(q);
}},"gecko":function(U,V){return !!(U.compareDocumentPosition(V)&16);
},"default":function(S,T){while(T){if(S==T){return true;
}T=T.parentNode;
}return false;
}}),isRendered:function(C){if(!C.offsetParent){return false;
}var D=C.ownerDocument||C.document;
if(D.body.contains){return D.body.contains(C);
}if(D.compareDocumentPosition){return !!(D.compareDocumentPosition(C)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(E,F){return this.contains(F,E);
},getCommonParent:qx.core.Variant.select(i,{"mshtml|opera":function(O,P){if(O===P){return O;
}
while(O&&qx.dom.Node.isElement(O)){if(O.contains(P)){return O;
}O=O.parentNode;
}return null;
},"default":function(G,H){if(G===H){return G;
}var I={};
var L=qx.core.ObjectRegistry;
var K,J;

while(G||H){if(G){K=L.toHashCode(G);

if(I[K]){return I[K];
}I[K]=G;
G=G.parentNode;
}
if(H){J=L.toHashCode(H);

if(I[J]){return I[J];
}I[J]=H;
H=H.parentNode;
}}return null;
}}),getAncestors:function(b){return this._recursivelyCollect(b,d);
},getChildElements:function(x){x=x.firstChild;

if(!x){return [];
}var y=this.getNextSiblings(x);

if(x.nodeType===1){y.unshift(x);
}return y;
},getDescendants:function(v){return qx.lang.Array.fromCollection(v.getElementsByTagName(f));
},getFirstDescendant:function(c){c=c.firstChild;

while(c&&c.nodeType!=1){c=c.nextSibling;
}return c;
},getLastDescendant:function(m){m=m.lastChild;

while(m&&m.nodeType!=1){m=m.previousSibling;
}return m;
},getPreviousSiblings:function(w){return this._recursivelyCollect(w,g);
},getNextSiblings:function(Q){return this._recursivelyCollect(Q,e);
},_recursivelyCollect:function(s,t){var u=[];

while(s=s[t]){if(s.nodeType==1){u.push(s);
}}return u;
},getSiblings:function(M){return this.getPreviousSiblings(M).reverse().concat(this.getNextSiblings(M));
},isEmpty:function(N){N=N.firstChild;

while(N){if(N.nodeType===qx.dom.Node.ELEMENT||N.nodeType===qx.dom.Node.TEXT){return false;
}N=N.nextSibling;
}return true;
},cleanWhitespace:function(z){var A=z.firstChild;

while(A){var B=A.nextSibling;

if(A.nodeType==3&&!/\S/.test(A.nodeValue)){z.removeChild(A);
}A=B;
}}}});
})();
(function(){var g="qx.client",f="qx.event.type.Drag";
qx.Class.define(f,{extend:qx.event.type.Event,members:{init:function(n,o){arguments.callee.base.call(this,true,n);

if(o){this._native=o.getNativeEvent()||null;
this._originalTarget=o.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(h){var i=arguments.callee.base.call(this,h);
i._native=this._native;
return i;
},getDocumentLeft:qx.core.Variant.select(g,{"mshtml":function(){if(this._native==null){return 0;
}var c=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(c);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(g,{"mshtml":function(){if(this._native==null){return 0;
}var j=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(j);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(a){this.getManager().addType(a);
},addAction:function(l){this.getManager().addAction(l);
},supportsType:function(b){return this.getManager().supportsType(b);
},supportsAction:function(m){return this.getManager().supportsAction(m);
},addData:function(d,e){this.getManager().addData(d,e);
},getData:function(k){return this.getManager().getData(k);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(o){arguments.callee.base.call(this);
this.setEnabled(false);

if(o!=null){this.setInterval(o);
}var self=this;
this.__dF=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(k,l,m){var n=new qx.event.Timer(m);
n.addListener(h,function(e){n.stop();
k.call(l,e);
n.dispose();
l=null;
},l);
n.start();
return n;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__dG:null,__dF:null,_applyInterval:function(i,j){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__dG);
this.__dG=null;
}else if(p){this.__dG=window.setInterval(this.__dF,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(s){this.setInterval(s);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(r){this.stop();
this.startWith(r);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__dG){window.clearInterval(this.__dG);
}this.__dG=this.__dF=null;
}});
})();
(function(){var n="losecapture",m="qx.client",l="blur",k="focus",j="click",i="qx.event.dispatch.MouseCapture",h="capture",g="scroll";
qx.Class.define(i,{extend:qx.event.dispatch.AbstractBubbling,construct:function(d,e){arguments.callee.base.call(this,d);
this.__gY=d.getWindow();
this.__ha=e;
d.addListener(this.__gY,l,this.releaseCapture,this);
d.addListener(this.__gY,k,this.releaseCapture,this);
d.addListener(this.__gY,g,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__ha:null,__hb:null,__hc:true,__gY:null,_getParent:function(f){return f.parentNode;
},canDispatchEvent:function(q,event,r){return (this.__hb&&this.__hd[r]);
},dispatchEvent:function(b,event,c){if(c==j){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__hc||!qx.dom.Hierarchy.contains(this.__hb,b)){b=this.__hb;
}arguments.callee.base.call(this,b,event,c);
},__hd:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(u,v){var v=v!==false;

if(this.__hb===u&&this.__hc==v){return;
}
if(this.__hb){this.releaseCapture();
}this.nativeSetCapture(u,v);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(u,n,function(){qx.bom.Event.removeNativeListener(u,n,arguments.callee);
self.releaseCapture();
});
}this.__hc=v;
this.__hb=u;
this.__ha.fireEvent(u,h,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__hb;
},releaseCapture:function(){var p=this.__hb;

if(!p){return;
}this.__hb=null;
this.__ha.fireEvent(p,n,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(p);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(m,{"mshtml":function(s,t){s.setCapture(t!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(m,{"mshtml":function(o){o.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__hb=this.__gY=this.__ha=null;
},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var u="qx.client",t="",s="mshtml",r="'",q="SelectionLanguage",p="qx.xml.Document",o=" />",n="MSXML2.DOMDocument.3.0",m='<\?xml version="1.0" encoding="utf-8"?>\n<',k="MSXML2.XMLHTTP.3.0",f="MSXML2.XMLHTTP.6.0",j=" xmlns='",h="text/xml",e="XPath",d="MSXML2.DOMDocument.6.0",g="HTML";
qx.Class.define(p,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(v){if(v.nodeType===9){return v.documentElement.nodeName!==g;
}else if(v.ownerDocument){return this.isXmlDocument(v.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(u,{"mshtml":function(z,A){var B=new ActiveXObject(this.DOMDOC);
B.setProperty(q,e);

if(A){var C=m;
C+=A;

if(z){C+=j+z+r;
}C+=o;
B.loadXML(C);
}return B;
},"default":function(F,G){return document.implementation.createDocument(F||t,G||t,null);
}}),fromString:qx.core.Variant.select(u,{"mshtml":function(D){var E=qx.xml.Document.create();
E.loadXML(D);
return E;
},"default":function(w){var x=new DOMParser();
return x.parseFromString(w,h);
}})},defer:function(a){if(qx.core.Variant.isSet(u,s)){var b=[d,n];
var c=[f,k];

for(var i=0,l=b.length;i<l;i++){try{new ActiveXObject(b[i]);
new ActiveXObject(c[i]);
}catch(y){continue;
}a.DOMDOC=b[i];
a.XMLHTTP=c[i];
break;
}}}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
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
}return d+top+l+w+l+x+l+A+i;
},get:function(C,D){var F=qx.bom.element.Style.get(C,c,D,false);
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
},set:function(o,p){if(!p){o.style.clip=a;
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
},reset:function(B){B.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var n="n-resize",m="e-resize",l="nw-resize",k="ne-resize",j="",i="cursor:",h="qx.client",g=";",f="qx.bom.element.Cursor",e="cursor",d="hand";
qx.Class.define(f,{statics:{__hf:qx.core.Variant.select(h,{"mshtml":{"cursor":d,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"opera":{"col-resize":m,"row-resize":n,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"default":{}}),compile:function(o){return i+(this.__hf[o]||o)+g;
},get:function(p,q){return qx.bom.element.Style.get(p,e,q,false);
},set:function(b,c){b.style.cursor=this.__hf[c]||c;
},reset:function(a){a.style.cursor=j;
}}});
})();
(function(){var v="",u="qx.client",t=";",s="filter",r="opacity:",q="opacity",p="MozOpacity",o=");",n=")",m="zoom:1;filter:alpha(opacity=",j="qx.bom.element.Opacity",l="alpha(opacity=",k="-moz-opacity:";
qx.Class.define(j,{statics:{compile:qx.core.Variant.select(u,{"mshtml":function(K){if(K>=1){return v;
}
if(K<0.00001){K=0;
}return m+(K*100)+o;
},"gecko":function(w){if(w==1){w=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return k+w+t;
}else{return r+w+t;
}},"default":function(A){if(A==1){return v;
}return r+A+t;
}}),set:qx.core.Variant.select(u,{"mshtml":function(x,y){var z=qx.bom.element.Style.get(x,s,qx.bom.element.Style.COMPUTED_MODE,false);
if(y>=1){x.style.filter=z.replace(/alpha\([^\)]*\)/gi,v);
return;
}
if(y<0.00001){y=0;
}if(!x.currentStyle||!x.currentStyle.hasLayout){x.style.zoom=1;
}x.style.filter=z.replace(/alpha\([^\)]*\)/gi,v)+l+y*100+n;
},"gecko":function(B,C){if(C==1){C=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){B.style.MozOpacity=C;
}else{B.style.opacity=C;
}},"default":function(e,f){if(f==1){f=v;
}e.style.opacity=f;
}}),reset:qx.core.Variant.select(u,{"mshtml":function(I){var J=qx.bom.element.Style.get(I,s,qx.bom.element.Style.COMPUTED_MODE,false);
I.style.filter=J.replace(/alpha\([^\)]*\)/gi,v);
},"gecko":function(H){if(qx.bom.client.Engine.VERSION<1.7){H.style.MozOpacity=v;
}else{H.style.opacity=v;
}},"default":function(G){G.style.opacity=v;
}}),get:qx.core.Variant.select(u,{"mshtml":function(a,b){var c=qx.bom.element.Style.get(a,s,b,false);

if(c){var d=c.match(/alpha\(opacity=(.*)\)/);

if(d&&d[1]){return parseFloat(d[1])/100;
}}return 1.0;
},"gecko":function(g,h){var i=qx.bom.element.Style.get(g,qx.bom.client.Engine.VERSION<1.7?p:q,h,false);

if(i==0.999999){i=1.0;
}
if(i!=null){return parseFloat(i);
}return 1.0;
},"default":function(D,E){var F=qx.bom.element.Style.get(D,q,E,false);

if(F!=null){return parseFloat(F);
}return 1.0;
}})}});
})();
(function(){var v="qx.client",u="",t="boxSizing",s="box-sizing",r=":",q="border-box",p="qx.bom.element.BoxSizing",o="KhtmlBoxSizing",n="-moz-box-sizing",m="WebkitBoxSizing",h=";",k="-khtml-box-sizing",j="content-box",g="-webkit-box-sizing",f="MozBoxSizing";
qx.Class.define(p,{statics:{__hg:qx.core.Variant.select(v,{"mshtml":null,"webkit":[t,o,m],"gecko":[f],"opera":[t]}),__hh:qx.core.Variant.select(v,{"mshtml":null,"webkit":[s,k,g],"gecko":[n],"opera":[s]}),__hi:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__hj:function(w){var x=this.__hi;
return x.tags[w.tagName.toLowerCase()]||x.types[w.type];
},compile:qx.core.Variant.select(v,{"mshtml":function(d){{};
},"default":function(a){var c=this.__hh;
var b=u;

if(c){for(var i=0,l=c.length;i<l;i++){b+=c[i]+r+a+h;
}}return b;
}}),get:qx.core.Variant.select(v,{"mshtml":function(E){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(E))){if(!this.__hj(E)){return j;
}}return q;
},"default":function(y){var A=this.__hg;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==u){return z;
}}}return u;
}}),set:qx.core.Variant.select(v,{"mshtml":function(F,G){{};
},"default":function(B,C){var D=this.__hg;

if(D){for(var i=0,l=D.length;i<l;i++){B.style[D[i]]=C;
}}}}),reset:function(e){this.set(e,u);
}}});
})();
(function(){var bF="",bE="qx.client",bD="hidden",bC="-moz-scrollbars-none",bB="overflow",bA=";",bz="overflowY",by=":",bx="overflowX",bw="overflow:",bR="none",bQ="scroll",bP="borderLeftStyle",bO="borderRightStyle",bN="div",bM="borderRightWidth",bL="overflow-y",bK="borderLeftWidth",bJ="-moz-scrollbars-vertical",bI="100px",bG="qx.bom.element.Overflow",bH="overflow-x";
qx.Class.define(bG,{statics:{__he:null,getScrollbarWidth:function(){if(this.__he!==null){return this.__he;
}var bf=qx.bom.element.Style;
var bh=function(O,P){return parseInt(bf.get(O,P))||0;
};
var bi=function(W){return (bf.get(W,bO)==bR?0:bh(W,bM));
};
var bg=function(bv){return (bf.get(bv,bP)==bR?0:bh(bv,bK));
};
var bk=qx.core.Variant.select(bE,{"mshtml":function(X){if(bf.get(X,bz)==bD||X.clientWidth==0){return bi(X);
}return Math.max(0,X.offsetWidth-X.clientLeft-X.clientWidth);
},"default":function(k){if(k.clientWidth==0){var l=bf.get(k,bB);
var m=(l==bQ||l==bJ?16:0);
return Math.max(0,bi(k)+m);
}return Math.max(0,(k.offsetWidth-k.clientWidth-bg(k)));
}});
var bj=function(F){return bk(F)-bi(F);
};
var t=document.createElement(bN);
var s=t.style;
s.height=s.width=bI;
s.overflow=bQ;
document.body.appendChild(t);
var c=bj(t);
this.__he=c?c:16;
document.body.removeChild(t);
return this.__he;
},_compile:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(i,j){if(j==bD){j=bC;
}return bw+j+bA;
}:
function(g,h){return g+by+h+bA;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(br,bs){return bw+bs+bA;
}:
function(bb,bc){return bb+by+bc+bA;
},"default":function(q,r){return q+by+r+bA;
}}),compileX:function(G){return this._compile(bH,G);
},compileY:function(K){return this._compile(bL,K);
},getX:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bm,bn){var bo=qx.bom.element.Style.get(bm,bB,bn,false);

if(bo===bC){bo=bD;
}return bo;
}:
function(H,I){return qx.bom.element.Style.get(H,bx,I,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ca,cb){return qx.bom.element.Style.get(ca,bB,cb,false);
}:
function(v,w){return qx.bom.element.Style.get(v,bx,w,false);
},"default":function(b,d){return qx.bom.element.Style.get(b,bx,d,false);
}}),setX:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(e,f){if(f==bD){f=bC;
}e.style.overflow=f;
}:
function(D,E){D.style.overflowX=E;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(S,T){S.style.overflow=T;
}:
function(cc,cd){cc.style.overflowX=cd;
},"default":function(B,C){B.style.overflowX=C;
}}),resetX:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(a){a.style.overflow=bF;
}:
function(bW){bW.style.overflowX=bF;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ce,cf){ce.style.overflow=bF;
}:
function(L,M){L.style.overflowX=bF;
},"default":function(bl){bl.style.overflowX=bF;
}}),getY:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(n,o){var p=qx.bom.element.Style.get(n,bB,o,false);

if(p===bC){p=bD;
}return p;
}:
function(z,A){return qx.bom.element.Style.get(z,bz,A,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bX,bY){return qx.bom.element.Style.get(bX,bB,bY,false);
}:
function(bt,bu){return qx.bom.element.Style.get(bt,bz,bu,false);
},"default":function(bd,be){return qx.bom.element.Style.get(bd,bz,be,false);
}}),setY:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bp,bq){if(bq===bD){bq=bC;
}bp.style.overflow=bq;
}:
function(Q,R){Q.style.overflowY=R;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(U,V){U.style.overflow=V;
}:
function(bS,bT){bS.style.overflowY=bT;
},"default":function(Y,ba){Y.style.overflowY=ba;
}}),resetY:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(u){u.style.overflow=bF;
}:
function(J){J.style.overflowY=bF;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bU,bV){bU.style.overflow=bF;
}:
function(x,y){x.style.overflowY=bF;
},"default":function(N){N.style.overflowY=bF;
}})}});
})();
(function(){var u="",t="qx.client",s="user-select",r="userSelect",q="appearance",p="style",o="MozUserModify",n="px",m="-webkit-appearance",l="styleFloat",Q="-webkit-user-select",P="-moz-appearance",O="pixelHeight",N="MozAppearance",M=":",L="pixelTop",K="pixelLeft",J="text-overflow",I="-moz-user-select",H="MozUserSelect",B="qx.bom.element.Style",C="-moz-user-modify",z="-webkit-user-modify",A="WebkitUserSelect",x="-o-text-overflow",y="pixelRight",v="cssFloat",w="pixelWidth",D="pixelBottom",E=";",G="WebkitUserModify",F="WebkitAppearance";
qx.Class.define(B,{statics:{__hk:{styleNames:{"float":qx.core.Variant.select(t,{"mshtml":l,"default":v}),"appearance":qx.core.Variant.select(t,{"gecko":N,"webkit":F,"default":q}),"userSelect":qx.core.Variant.select(t,{"gecko":H,"webkit":A,"default":r}),"userModify":qx.core.Variant.select(t,{"gecko":o,"webkit":G,"default":r})},cssNames:{"appearance":qx.core.Variant.select(t,{"gecko":P,"webkit":m,"default":q}),"userSelect":qx.core.Variant.select(t,{"gecko":I,"webkit":Q,"default":s}),"userModify":qx.core.Variant.select(t,{"gecko":C,"webkit":z,"default":s}),"textOverflow":qx.core.Variant.select(t,{"opera":x,"default":J})},mshtmlPixel:{width:w,height:O,left:K,right:y,top:L,bottom:D},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__hl:{},compile:function(br){var bv=[];
var bz=this.__hk;
var by=bz.special;
var bw=bz.cssNames;
var bu=this.__hl;
var bx=qx.lang.String;
var name,bt,bs;

for(name in br){bs=br[name];

if(bs==null){continue;
}name=bw[name]||name;
if(by[name]){bv.push(by[name].compile(bs));
}else{bt=bu[name];

if(!bt){bt=bu[name]=bx.hyphenate(name);
}bv.push(bt,M,bs,E);
}}return bv.join(u);
},setCss:qx.core.Variant.select(t,{"mshtml":function(bo,bp){bo.style.cssText=bp;
},"default":function(R,S){R.setAttribute(p,S);
}}),getCss:qx.core.Variant.select(t,{"mshtml":function(bq){return bq.style.cssText.toLowerCase();
},"default":function(X){return X.getAttribute(p);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(T,name,U,V){{};
var W=this.__hk;
name=W.styleNames[name]||name;
if(V!==false&&W.special[name]){return W.special[name].set(T,U);
}else{T.style[name]=U!==null?U:u;
}},setStyles:function(bf,bg,bh){{};
var bn=this.__hk;
var bk=bn.styleNames;
var bm=bn.special;
var bi=bf.style;

for(var bl in bg){var bj=bg[bl];
var name=bk[bl]||bl;

if(bj===undefined){if(bh!==false&&bm[name]){bm[name].reset(bf);
}else{bi[name]=u;
}}else{if(bh!==false&&bm[name]){bm[name].set(bf,bj);
}else{bi[name]=bj!==null?bj:u;
}}}},reset:function(i,name,j){var k=this.__hk;
name=k.styleNames[name]||name;
if(j!==false&&k.special[name]){return k.special[name].reset(i);
}else{i.style[name]=u;
}},get:qx.core.Variant.select(t,{"mshtml":function(a,name,b,c){var h=this.__hk;
name=h.styleNames[name]||name;
if(c!==false&&h.special[name]){return h.special[name].get(a,b);
}if(!a.currentStyle){return a.style[name]||u;
}switch(b){case this.LOCAL_MODE:return a.style[name]||u;
case this.CASCADED_MODE:return a.currentStyle[name]||u;
default:var g=a.currentStyle[name]||u;
if(/^-?[\.\d]+(px)?$/i.test(g)){return g;
}var f=h.mshtmlPixel[name];

if(f){var d=a.style[name];
a.style[name]=g||0;
var e=a.style[f]+n;
a.style[name]=d;
return e;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(g)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return g;
}},"default":function(Y,name,ba,bb){var be=this.__hk;
name=be.styleNames[name]||name;
if(bb!==false&&be.special[name]){return be.special[name].get(Y,ba);
}switch(ba){case this.LOCAL_MODE:return Y.style[name]||u;
case this.CASCADED_MODE:if(Y.currentStyle){return Y.currentStyle[name]||u;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bc=qx.dom.Node.getDocument(Y);
var bd=bc.defaultView.getComputedStyle(Y,null);
return bd?bd[name]:u;
}}})}});
})();
(function(){var d="qx.dom.Element";
qx.Class.define(d,{statics:{hasChild:function(parent,r){return r.parentNode===parent;
},hasChildren:function(c){return !!c.firstChild;
},hasChildElements:function(s){s=s.firstChild;

while(s){if(s.nodeType===1){return true;
}s=s.nextSibling;
}return false;
},getParentElement:function(e){return e.parentNode;
},isInDom:function(x,y){if(!y){y=window;
}var z=y.document.getElementsByTagName(x.nodeName);

for(var i=0,l=z.length;i<l;i++){if(z[i]===x){return true;
}}return false;
},insertAt:function(f,parent,g){var h=parent.childNodes[g];

if(h){parent.insertBefore(f,h);
}else{parent.appendChild(f);
}return true;
},insertBegin:function(A,parent){if(parent.firstChild){this.insertBefore(A,parent.firstChild);
}else{parent.appendChild(A);
}},insertEnd:function(b,parent){parent.appendChild(b);
},insertBefore:function(p,q){q.parentNode.insertBefore(p,q);
return true;
},insertAfter:function(v,w){var parent=w.parentNode;

if(w==parent.lastChild){parent.appendChild(v);
}else{return this.insertBefore(v,w.nextSibling);
}return true;
},remove:function(a){if(!a.parentNode){return false;
}a.parentNode.removeChild(a);
return true;
},removeChild:function(B,parent){if(B.parentNode!==parent){return false;
}parent.removeChild(B);
return true;
},removeChildAt:function(j,parent){var k=parent.childNodes[j];

if(!k){return false;
}parent.removeChild(k);
return true;
},replaceChild:function(t,u){if(!u.parentNode){return false;
}u.parentNode.replaceChild(t,u);
return true;
},replaceAt:function(m,n,parent){var o=parent.childNodes[n];

if(!o){return false;
}parent.replaceChild(m,o);
return true;
}}});
})();
(function(){var gN="qx.client",gM="",gL="mshtml",gK="gecko",gJ="qx.event.type.Data",gI="enter",gH="qx.event.type.Event",gG=" ",gF='"',gE="left",fx="Boolean",fw="text-align",fv="right",fu="qx.bom.htmlarea.HtmlArea.debug",ft="on",fs="inserthtml",fr="string",fq="italic",fp="body",fo="underline",gU="old_id",gV="b",gS="loadingError",gT="contextmenu",gQ="pageup",gR="end",gO="div",gP='On',gW="redo",gX="i",gn="opera",gm="backspace",gp="bold",go="mouseup",gr="y",gq="down",gt="style",gs="100%",gl='</head>',gk='<head>',dC="k",dD=":",dE='redo',dF='Off',dG="g",dH="keypress",dI=";",dJ="undo",dK="text-decoration",dL="pagedown",hm="justify",hl="center",hk='</style>',hj="u",hq="focus",hp="backgroundimage",ho="click",hn='<style type="text/css">',hs="up",hr="blur",eD="None",eE="control",eB="delete",eC="'",eH=">",eI='</body></html>',eF="line-through",eG="z",ez="keydown",eA="keyup",ef="backgroundcolor",ee="focusout",eh="webkit",eg="mshtml|opera",eb="-",ea="backgroundColor",ed="li",ec='undo',dY="<br class='webkit-block-placeholder' />",dX="textbackgroundcolor",eN="Function",eO="fontSize",eP="textcolor",eQ="br",eJ="home",eK="<",eL="focused",eM="fontFamily",eR="load",eS="setUnderline",er="backgroundPosition",eq="<!--",ep="transparent",eo='/www.w3.org/1999/xhtml" xml:lang="en" lang="en">',en="'>",em='underline',ek='bold',ej="&copy;",ev="ul",eu="cursorContext",eT="readyAfterInvalid",eU="styleWithCSS",eV=" />",eW="id",eX="setBold",eY="P",fa="<P>&nbsp;</P>",fb="</",fc="qx/static/blank.html",fd="&gt;",fF='="',fE="paddingLeft",fD="X",fC="#",fJ="backgroundRepeat",fI="insertimage",fH="a",fG="&amp;",fM="removeformat",fL="marginLeft",gg="ready",gh="<p>&nbsp;</p>",ge='DOCTYPE html PUBLIC "-/',gf="outline",gc=" html, body {overflow-x: visible; } ",gd='<body>',ga="insertorderedlist",gb='body { font-size:100.01%; font-family:Verdana, Geneva, Arial, Helvetica, sans-serif; background-color:transparent; overflow:visible; background-image:none; margin:0px; padding:5px; } ',gi="font-family",gj="hideFocus",gx="none",gw='/DTD XHTML 1.0 Transitional/',gz='<html xmlns="http:/',gy="S",gB="fontsize",gA="setItalic",gD="font-style",gC="xhtml",gv="focusOut",gu="justifyleft",hf="paddingTop",hg="marginBottom",hh='<title></title><meta http-equiv="Content-type" content="text/html; charset=UTF-8" />',hi="Control",hb='/W3C/',hc="placeholder",hd='size',he="backgroundImage",gY="marginTop",ha="> ",dB=" { ",dA="font-weight",dz="LI",dy='italic',dx='<!',dw="off",dv="&quot;",du="marginRight",dt="STYLE",ds="justifyfull",dO="inserthyperlink",dP="<br />",dM='html { margin:0px; padding:0px; } ',dN="<br>",dS="__sV",dT='/EN" "http:/',dQ="justifycenter",dR="<br /><div id='placeholder'></div>",dV="useCSS",dW="object",fN="strikethrough",fK="font-size",fU="indent",fQ="text/html",fA="true",fy="1.9",ei=' style="',fB="messengerContent",et="insertunorderedlist",es="Text",fg="&lt;",fh="inserthorizontalrule",fi='<br/><div class="placeholder"></div>',fj="selectall",fk="String",fl=" SCRIPT STYLE DIV SPAN TR TD TBODY TABLE EM STRONG FONT A P B I U STRIKE H1 H2 H3 H4 H5 H6 ",fm="justifyright",fn='/www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',fe="ol",ff="//text()[string-length(normalize-space(.))>0]",fz="outdent",fT="fontfamily",fS="<body style='",fR="qx.bom.htmlarea.HtmlArea",fY="paddingBottom",fX="$",fW="-->",fV=" }",fP="paddingRight",fO='html { width:100%; height:100%; margin:0px; padding:0px; overflow-y:auto; overflow-x:auto; } ',dU="Off",ey='p { margin:0px; padding:0px; }',ew='body { font-size: 100.01%; font-family:Verdana, Geneva, Arial, Helvetica, sans-serif; width:100%; height:100%; background-color:transparent; overflow:auto; background-image:none; margin:0px; padding:5px; } ';
qx.Class.define(fR,{extend:qx.core.Object,construct:function(cR,cS,cT,cU){arguments.callee.base.call(this);
var cW=cU||qx.util.ResourceManager.getInstance().toUri(fc);
this.__tq(cR);
this.__tr();
this._createAndAddIframe(cW);
this._addIframeLoadListener();
this.__sT=qx.bom.htmlarea.HtmlArea.__sW(cT);
if(typeof cS===fr){this.__sU=cS;
}if(qx.core.Variant.isSet(gN,gn)){var cV=qx.dom.Node.getWindow(cR);
var cX=qx.event.Registration.getManager(cV).getHandler(qx.event.handler.Keyboard);
cX._keyCodeToIdentifierMap[35]=fC;
cX._keyCodeToIdentifierMap[45]=eb;
cX._keyCodeToIdentifierMap[112]=eY;
cX._keyCodeToIdentifierMap[115]=gy;
cX._keyCodeToIdentifierMap[120]=fD;
}this.__sV=this.__tA();
},events:{"load":gH,"loadingError":gJ,"messengerContent":gJ,"cursorContext":gJ,"ready":gH,"readyAfterInvalid":gH,"focused":gH,"focusOut":gH,"contextmenu":gJ,"undoRedoState":gJ},statics:{simpleLinebreak:dN,EMPTY_DIV:"<div></div>",GetWordsRegExp:/([^\u0000-\u0040\u005b-\u005f\u007b-\u007f]|['])+/g,CleanupWordsRegExp:/[\u0000-\u0040]/gi,hotkeyInfo:{bold:{method:eX},italic:{method:gA},underline:{method:eS},undo:{method:dJ},redo:{method:gW}},__sW:function(H){if(H==null||H==gM){return gM;
}else if(typeof H==dW){var I=gM;

for(var i in H){I+=i+dB+H[i]+fV;
}return I;
}else{return H;
}},__sX:function(cB){var cC={};
var a=cB.split(dI);
var i;

for(i=0;i<a.length;i++){var cD=a[i],cE=cD.indexOf(dD);

if(cE===-1){continue;
}var name=qx.lang.String.trim(cD.substring(0,cE));
var cF=qx.lang.String.trim(cD.substring(cE+1,cD.length));

if(name&&cF){cC[name]=cF;
}}return cC;
},__sY:function(S,T,U,V){var bb=[];

switch(S.nodeType){case 1:case 11:var i;
var Y=S.tagName.toLowerCase();
var bd={};
var W={};
var closed=(!(S.hasChildNodes()||qx.bom.htmlarea.HtmlArea.__ta(S)));

if(T){if(qx.core.Variant.isSet(gN,gL)){if(Y==gO&&S.className&&S.className==hc){for(i=S.firstChild;i;i=i.nextSibling){bb.push(qx.bom.htmlarea.HtmlArea.__sY(i,true,U,V));
}return bb.join(gM);
}}var bc=S.attributes;
var ba=bc.length;
var a;

for(i=0;i<ba;i++){a=bc[i];
if(!a.specified){continue;
}var name=qx.dom.Node.getName(a);
var be=a.nodeValue;
if(/(_moz|contenteditable)/.test(name)){continue;
}
if(name!=gt){if(qx.bom.client.Engine.MSHTML){if(name==eW&&S.getAttribute(gU)){be=S.getAttribute(gU);
}else if(!isNaN(be)){be=S.getAttribute(name);
}else{be=a.nodeValue;
}}else{be=a.nodeValue;
}}else{be=S.style.cssText;
}
if(/(_moz|^$)/.test(be)){continue;
}if(name==gU){continue;
}if(!be){continue;
}if(name.charAt(0)===fX){continue;
}bd[name]=be;
}if(bd.style!==undefined){W=qx.bom.htmlarea.HtmlArea.__sX(bd.style);
delete bd.style;
}if(V){var X={domElement:S,tag:Y,attributes:bd,styles:W};
V(X);
X.domElement=null;
Y=X.tag;
}if(Y){bb.push(eK,Y);
for(var name in bd){var be=bd[name];
bb.push(gG,name,fF,be.toString().replace(new RegExp(gF,dG),eC),gF);
}if(!qx.lang.Object.isEmpty(W)){bb.push(ei);

for(var name in W){var be=W[name];
bb.push(name,dD,be.toString().replace(new RegExp(gF,dG),eC),dI);
}bb.push(gF);
}bb.push(closed?eV:eH);
}}for(i=S.firstChild;i;i=i.nextSibling){bb.push(qx.bom.htmlarea.HtmlArea.__sY(i,true,U,V));
}if(T&&!closed&&Y){bb.push(fb,Y,eH);
}break;
case 3:bb.push(U?S.data:qx.bom.htmlarea.HtmlArea.__tb(S.data));
break;
case 8:bb.push(eq,S.data,fW);
break;
}return bb.join(gM);
},closingTags:fl,__ta:function(Q){return (qx.bom.htmlarea.HtmlArea.closingTags.indexOf(gG+Q.tagName+gG)!=-1);
},__tb:function(s){s=s.replace(/&/ig,fG);
s=s.replace(/</ig,fg);
s=s.replace(/>/ig,fd);
s=s.replace(/\x22/ig,dv);
s=s.replace(/\xA9/ig,ej);
return s;
},isBlockNode:function(w){if(!qx.dom.Node.isElement(w)){return false;
}w=qx.dom.Node.getName(w);
return /^(body|form|textarea|fieldset|ul|ol|dl|li|div|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(w);
},isParagraphParent:function(bB){if(!qx.dom.Node.isElement(bB)){return false;
}bB=qx.dom.Node.getName(bB);
return /^(body|td|th|caption|fieldset|div)$/.test(bB);
}},properties:{contentType:{check:fk,init:gC},messengerMode:{check:fx,init:false},insertParagraphOnLinebreak:{check:fx,init:true},insertLinebreakOnCtrlEnter:{check:fx,init:true},postProcess:{check:eN,nullable:true,init:null},useUndoRedo:{check:fx,init:true}},members:{__tc:null,__td:false,__te:false,__tf:false,__tg:false,__th:false,__sV:null,__ti:null,__tj:null,__tk:null,__tl:null,__sT:null,__tm:null,__tn:null,__to:false,__tp:false,__tq:function(bf){if(qx.dom.Node.isElement(bf)&&qx.dom.Node.isNodeName(bf,gO)){this.__tc=bf;
}},_createAndAddIframe:function(bo){this.__tl=qx.bom.Iframe.create();
qx.bom.Iframe.setSource(this.__tl,bo);
if(qx.core.Variant.isSet(gN,gL)){qx.bom.element.Attribute.set(this.__tl,gj,fA);
}else{qx.bom.element.Style.set(this.__tl,gf,gx);
}qx.bom.element.Style.setStyles(this.__tl,{width:gs,height:gs});
qx.dom.Element.insertBegin(this.__tl,this.__tc);
},_getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__tl);
},_getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__tl);
},_addIframeLoadListener:function(){qx.event.Registration.addListener(this.__tl,eR,this._loaded,this);
},__tr:function(){this.__tm={"xhtml":{doctype:dx+ge+hb+gw+dT+fn,html:gz+eo,meta:hh,style:qx.core.Variant.select(gN,{"mshtml":dM+ew,"default":fO+gb}),contentStyle:ey,body:gd,footer:eI}};
},__sU:gM,getIframeObject:function(){return this.__tl;
},getCommandManager:function(){return this.__sV;
},setValue:function(ht){if(typeof ht===fr){this.__sU=ht;
var hu=this._getIframeDocument();

if(hu&&hu.body){hu.body.innerHTML=ht;
}}},getValue:function(){return this.__sU;
},getComputedValue:function(cJ){return this.getHtml(cJ);
},getCompleteHtml:function(){var cI=this.__tm[this.getContentType()];
var cH=cI.html+gk+cI.meta+hn+cI.contentStyle+hk+gl;
cH+=fS+this.__ts()+en;
cH+=this.getHtml()+eI;
return cH;
},__ts:function(){var cv=[ea,he,fJ,er,eM,eO,gY,hg,fL,du,hf,fY,fE,fP];
var cu=qx.bom.element.Style;
var ct=this.getContentBody();
var cy={};
var cx,cz;
var cw=qx.bom.client.Engine.MSHTML?2:1;

for(var i=0,j=cv.length;i<j;i++){cx=cv[i];
cz=cu.get(ct,cx,cw);

if(cz!==undefined&&cz!=gM){cy[cx]=cz;
}}return qx.bom.element.Style.compile(cy);
},getContentDocument:function(){if(this.__td){return this._getIframeDocument();
}},getContentBody:function(){if(this.__td){return this._getIframeDocument().body;
}},getContentWindow:function(){if(this.__td){return this._getIframeWindow();
}},getWords:function(b){if(!b){b=this.getContentBody();
}
if(!b){return [];
}var d=b.cloneNode(true);
d.innerHTML=d.innerHTML.replace(/>/gi,ha);
d.innerHTML=d.innerHTML.replace(/\n/gi,gG);
d.innerHTML=d.innerHTML.replace(/<!--.*-->/gi,gM);
var c=qx.core.Variant.isSet(gN,eg)?d.innerText:d.textContent;
var f=c.match(qx.bom.htmlarea.HtmlArea.GetWordsRegExp);
return !f?[]:f;
},getWordsWithElement:function(){var y=this.getTextNodes();
var C={};
var i,j,D,z,x;

for(var i=0,B=y.length;i<B;++i){z=y[i];
D=z.nodeValue.split(gG);

for(var j=0,A=D.length;j<A;++j){x=this._cleanupWord(D[j]);

if(x!=null&&x.length>1){if(!C[x]){C[x]=[];
}C[x].push(z);
}}}return C;
},_cleanupWord:function(dq){if(!dq){return null;
}return dq.replace(qx.bom.htmlarea.HtmlArea.CleanupWordsRegExp,gM);
},getTextNodes:function(){return this._fetchTextNodes(this.getContentBody());
},_fetchTextNodes:function(E){var G=[];
var F;
if(E.hasChildNodes){for(var i=0;i<E.childNodes.length;i++){F=this._fetchTextNodes(E.childNodes[i]);
qx.lang.Array.append(G,F);
}}if(E.nodeType==3){if(E.nodeValue.length>1){G.push(E);
}}return G;
},__tt:0,__tu:function(){var bD=this._getIframeDocument();
if(!bD){this.__tt++;

if(this.__tt>5){this.error('cant load HtmlArea. Document is not available. '+bD);
this.fireDataEvent(gS);
}else{{};
qx.event.Timer.once(function(){this.__tu();
},this,0);
}}else{this.__tt=0;
this._onDocumentIsReady();
}},_loaded:function(e){if(this.__tf){return;
}
if(this.__te){this.__tv();
return;
}if(qx.core.Variant.isSet(gN,gL)){this.__tu();
}else{this._onDocumentIsReady();
}},isReady:function(){return this.__td;
},_onDocumentIsReady:function(){var cs=new qx.bom.htmlarea.manager.Command(this);

if(this.getUseUndoRedo()){cs=new qx.bom.htmlarea.manager.UndoRedo(cs,this);
}this.__tf=true;
if(qx.core.Variant.isSet(gN,gL)){this.setEditable(true);
}this.__ty();
this.__tz();
if(!qx.core.Variant.isSet(gN,gL)){this.setEditable(true);
}this.__td=true;
this.__sV=cs;
cs.setContentDocument(this._getIframeDocument());
this.__tB();
this.fireEvent(gg);
},forceEditable:qx.core.Variant.select(gN,{"gecko":function(){var v=this._getIframeDocument();

if(v){if(qx.bom.client.Engine.VERSION>=fy){v.designMode=dU;
v.body.contentEditable=false;
v.body.contentEditable=true;
}else{v.body.contentEditable=true;
this.__tC(true);
}}},"default":qx.lang.Function.empty}),invalidateEditor:qx.core.Variant.select(gN,{"gecko":function(){this.__tf=false;
this.__td=false;
this.__te=true;
},"default":function(){}}),__tv:qx.core.Variant.select(gN,{"gecko":function(){this.__ty();
this.__tz();
this.__sV.setContentDocument(this._getIframeDocument());
this.setEditable(true);
this.forceEditable();
this.__tf=true;
this.__td=true;
this.__te=false;
this.fireEvent(eT);
},"default":function(){}}),__tw:function(hv){var hx=gM;

if(!hv){return hx;
}
try{var hw=hv.getAttribute(gt);

if(!hw){return hx;
}if(qx.core.Variant.isSet(gN,gL)){hx=hw.cssText;
}else{hx=hw;
}}catch(bI){this.error("can't extract style from elem. ");
}return hx;
},__tx:function(df){var dg=qx.bom.client.Engine.GECKO?gc:gM;
var dh=this.__tm[this.getContentType()];
var di=gk+dh.meta+hn+dg+dh.style+dh.contentStyle+this.__sT+hk+gl;
var content=dh.body+df;
return dh.html+di+content+dh.footer;
},__ty:function(){var bl=this.getValue();

if(typeof bl==fr){var bk=this._getIframeDocument();

try{bk.open(fQ,true);
bk.write(this.__tx(bl));
bk.close();
}catch(e){this.error("cant open document on source '"+qx.bom.Iframe.queryCurrentUrl(this.__tl)+"'",e);
this.fireDataEvent(gS,e);
}}},__tz:function(){var O=qx.event.Registration;
var M=this._getIframeDocument();
O.addListener(M.body,dH,this._handleKeyPress,this);
O.addListener(M.body,eA,this._handleKeyUp,this);
O.addListener(M.body,ez,this._handleKeyDown,this);
var N=qx.bom.client.Engine.WEBKIT?this._getIframeWindow():M.body;
O.addListener(N,hq,this._handleFocusEvent,this);
O.addListener(N,hr,this._handleBlurEvent,this);
O.addListener(M,ee,this._handleFocusOutEvent,this);
var L=qx.bom.client.Engine.MSHTML?ho:go;
O.addListener(M.body,L,this._handleMouseUpOnBody,this);
O.addListener(M.documentElement,L,this._handleMouseUpOnDocument,this);
O.addListener(M.documentElement,gT,this._handleContextMenuEvent,this);
},__tA:function(){if(this.__ti==null){this.__ti={execute:function(bE,bF){this.stackedCommands=true;
this.commandStack.push({command:bE,value:bF});
},commandStack:[],stackedCommands:false};
}this.__ti.stackedCommands=false;
return this.__ti;
},__tB:function(){var cP=this.__ti;

if(cP!=null&&cP.stackedCommands){var cQ=cP.commandStack;

if(cQ!=null){for(var i=0,j=cQ.length;i<j;i++){this.__sV.execute(cQ[i].command,cQ[i].value);
}}}},__tC:function(dn){var dp=this._getIframeDocument();

if(this.__tf&&dp){try{if(qx.core.Variant.isSet(gN,gK)){dp.designMode=(dn!==false)?dF:gP;
}dp.designMode=(dn!==false)?gP:dF;
}catch(e){}}},setEditable:function(bG){if(this.__tf){this.__tC(true);
if(qx.core.Variant.isSet(gN,gK)){try{var bH=this._getIframeDocument();
bH.execCommand(eU,false,true);
}catch(bz){try{var bH=this._getIframeDocument();
bH.execCommand(dV,false,false);
}catch(hy){if(!this.__td){this.error("Failed to enable rich edit functionality");
this.fireDataEvent(gS,hy);
}else{throw new Error("Failed to enable rich edit functionality");
}}}}this.__tg=bG;
}},getEditable:function(){return this.__tg;
},isEditable:function(){return this.__tg;
},__tD:false,_handleKeyUp:function(e){var r=e.getKeyIdentifier().toLowerCase();
var u=e.isCtrlPressed();
this.__tj=e;

if(false&&qx.core.Setting.get(fu)==ft){this.debug(e.getType()+" | "+r);
}if(qx.core.Variant.isSet(gN,gL)){if(this.__tD){switch(r){case gI:if(this.getInsertLinebreakOnCtrlEnter()){var t=this.__tL(this.getSelection());

if(t){t.collapse(true);
t.pasteHTML(fi);
}this.__tG();
}break;
case eE:this.__tD=false;
return;
break;
}}}else if(qx.core.Variant.isSet(gN,gK)){switch(r){case gE:case fv:case hs:case gq:case gQ:case dL:case eB:case gR:case gm:this.__th=(this.getFocusNode()==this.getContentBody().firstChild);
break;
}}else if(qx.core.Variant.isSet(gN,eh)){if(u){if(this.getInsertLinebreakOnCtrlEnter()&&r==gI){this.__tE();
e.preventDefault();
e.stopPropagation();
this.__tG();
}this.__tD=false;
}}},__tE:function(){var bi=this.getSelection();
var bj=gM;
if(bi&&(bi.focusNode.textContent==gM||bi.focusNode.parentElement.tagName==dz)){bj=dY;
}this.__sV.execute(fs,bj+qx.bom.htmlarea.HtmlArea.simpleLinebreak);
},_handleKeyDown:qx.core.Variant.select(gN,{"mshtml|webkit":function(e){var br=e.getKeyIdentifier().toLowerCase();

if(false&&qx.core.Setting.get(fu)==ft){}if(this.__tD&&(br==eG||br==gr||br==gV||br==hj||br==gX||br==dC)){e.preventDefault();
e.stopPropagation();
}if(br==eE){this.__tD=true;
}},"default":function(e){}}),_handleKeyPress:function(e){var bO=this.getContentDocument();
var bK=e.getKeyIdentifier().toLowerCase();
var bM=e.isCtrlPressed();
var bN=e.isShiftPressed();
this.__tj=e;

if(false&&qx.core.Setting.get(fu)==ft){this.debug(e.getType()+" | "+bK);
}if(this.__to){var bV=!(qx.core.Variant.isSet(gN,gL)&&bK==gI)||!(qx.core.Variant.isSet(gN,gK)&&bK==gI);

if(bV){this.__tG();
this.__to=false;
}}
switch(bK){case gI:if(!bN&&!bM&&this.getMessengerMode()){e.preventDefault();
e.stopPropagation();
var bT=new qx.event.type.Data(fB,this.getComputedValue());
this.dispatchEvent(bT,true);
this.resetHtml();
}if(bM){if(!this.getInsertLinebreakOnCtrlEnter()){return;
}e.preventDefault();
e.stopPropagation();

if(qx.core.Variant.isSet(gN,gK)){if(this.__tJ()){this.insertHtml(dP);
this.__tG();
return;
}this.insertHtml(dR);
}else if(qx.core.Variant.isSet(gN,gn)){var bU=this.getSelection();
var bP=this.__tL(bU);

if(bU&&bP){var bQ=bO.createElement(eQ);
bP.collapse(true);
bP.insertNode(bQ);
bP.collapse(true);
bP.selectNode(bQ);
bU.addRange(bP);
bP.collapse(true);
}}this.__tG();
}if(qx.core.Variant.isSet(gN,gL)){if(!this.getInsertParagraphOnLinebreak()){if(this.__sV.execute(fs,qx.bom.htmlarea.HtmlArea.simpleLinebreak)){this.__tG();
e.preventDefault();
e.stopPropagation();
}}}else if(qx.core.Variant.isSet(gN,gK)){if(this.getInsertParagraphOnLinebreak()&&!bN&&!bM){var bU=this.getSelection();

if(bU){var bL=bU.focusNode;
if(this.__tJ()){this.__tG();
return;
}if(this.__tK()){this.__tG();
return;
}while(!qx.dom.Node.isNodeName(bL,fp)){if(qx.dom.Node.isNodeName(bL,ed)){this.__tG();
return;
}bL=bL.parentNode;
}}this.__sV.insertParagraphOnLinebreak();
e.preventDefault();
e.stopPropagation();
this.__tG();
this.__to=true;
}}else if(qx.core.Variant.isSet(gN,eh)){if(this.getInsertParagraphOnLinebreak()&&bN){this.__tE();
e.preventDefault();
e.stopPropagation();
this.__tG();
}}break;
case hs:if(qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.FULLVERSION<1.9&&bN){var bU=this.getSelection();
if(bU&&bU.focusNode==bO.body.firstChild){if(this.__th){if(bU.focusOffset!=0){bU.extend(bU.focusNode,0);
}}}}this.__tG();
break;
case eJ:if(qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.FULLVERSION<1.9){if(bM){var bU=this.getSelection();
if(bN){if(bU&&(bU.focusOffset!=0)||(bU.focusNode!=bO.body.firstChild)){bU.extend(bO.body.firstChild,0);
}}else{var bR=null;
var bS;
if(bO){bR=bO.evaluate(ff,bO.body,null,XPathResult.ANY_TYPE,null);
}
if(bR&&bU){while(bS=bR.iterateNext()){if(bS&&bS.parentNode&&bS.parentNode.tagName!=dt){try{bU.extend(bS,0);

if(!this.isSelectionCollapsed()){bU.collapseToStart();
}}catch(e){}break;
}}}}}}this.__tG();
break;
case gE:case fv:case gq:case gQ:case dL:case eB:case gR:case gm:this.__tG();
break;
case gV:if(bM){this.__tF(ek,true);
}break;
case gX:case dC:if(bM){this.__tF(dy,true);
}break;
case hj:if(bM){this.__tF(em,true);
}break;
case eG:if(bM&&!bN){this.__tF(ec,true);
}else if(bM&&bN){this.__tF(dE,true);
}break;
case gr:if(bM){this.__tF(dE,true);
}break;
case fH:if(bM){this.selectAll();
}break;
}this.__tj=null;
},__tF:function(dj,dk){var dm=null;
var dl=qx.bom.htmlarea.HtmlArea.hotkeyInfo;

if(dl[dj]){dm=dl[dj].method;
}
if(dm!=null&&this[dm]){this[dm]();

if(dk){this.__tj.preventDefault();
this.__tj.stopPropagation();
}
if(this.isSelectionCollapsed()){this.__to=true;
}this.__tG();
}},_handleFocusEvent:function(e){this.__tk=null;
this.fireEvent(eL);
},_handleBlurEvent:function(e){this.__sU=this.getComputedValue();
},_handleFocusOutEvent:function(e){if(this.__tk==null){this.__tk=this.getSelectedHtml();
}this.fireEvent(gv);
},_handleMouseUpOnBody:function(e){if(false&&qx.core.Setting.get(fu)==ft){this.debug("handleMouse "+e.getType());
}this.__tp=true;
this.__tG();
},_handleMouseUpOnDocument:qx.core.Variant.select(gN,{"mshtml":qx.lang.Function.empty,"default":function(e){if(!this.__tp){qx.bom.Element.activate(this.getContentBody());
}this.__tp=false;
}}),_handleContextMenuEvent:function(e){var cM=e.getViewportLeft();
var cL=e.getViewportTop();
var cN=qx.bom.element.Location.getLeft(this.__tc)+cM;
var cO=qx.bom.element.Location.getTop(this.__tc)+cL;
var cK={x:cN,y:cO,relX:cM,relY:cL,target:e.getTarget()};
e.preventDefault();
e.stopPropagation();
qx.event.Timer.once(function(){this.fireDataEvent(gT,cK);
},this,0);
},isLoaded:function(){return this.__tf;
},insertHtml:function(R){return this.__sV.execute(fs,R);
},removeFormat:function(){return this.__sV.execute(fM);
},setBold:function(){return this.__sV.execute(gp);
},setItalic:function(){return this.__sV.execute(fq);
},setUnderline:function(){return this.__sV.execute(fo);
},setStrikeThrough:function(){return this.__sV.execute(fN);
},setFontSize:function(bw){return this.__sV.execute(gB,bw);
},setFontFamily:function(bA){return this.__sV.execute(fT,bA);
},setTextColor:function(bh){return this.__sV.execute(eP,bh);
},setTextBackgroundColor:function(bC){return this.__sV.execute(dX,bC);
},setJustifyLeft:function(){return this.__sV.execute(gu);
},setJustifyCenter:function(){return this.__sV.execute(dQ);
},setJustifyRight:function(){return this.__sV.execute(fm);
},setJustifyFull:function(){return this.__sV.execute(ds);
},insertIndent:function(){return this.__sV.execute(fU);
},insertOutdent:function(){return this.__sV.execute(fz);
},insertOrderedList:function(){return this.__sV.execute(ga);
},insertUnorderedList:function(){return this.__sV.execute(et);
},insertHorizontalRuler:function(){return this.__sV.execute(fh);
},insertImage:function(P){return this.__sV.execute(fI,P);
},insertHyperLink:function(h){return this.__sV.execute(dO,h);
},removeBackgroundColor:function(){this.__sV.execute(ef,ep);
},setBackgroundColor:function(dc){this.__sV.execute(ef,dc);
},removeBackgroundImage:function(){this.__sV.execute(hp);
},setBackgroundImage:function(n,o,p){return this.__sV.execute(hp,[n,o,p]);
},selectAll:function(){return this.__sV.execute(fj);
},undo:function(){if(this.getUseUndoRedo()){return this.__sV.execute(dJ);
}else{return true;
}},redo:function(){if(this.getUseUndoRedo()){return this.__sV.execute(gW);
}else{return true;
}},resetHtml:function(){var cY=this._getIframeDocument();
while(cY.body.firstChild){cY.body.removeChild(cY.body.firstChild);
}if(qx.bom.client.Engine.GECKO){cY.body.innerHTML=gh;
}else if(qx.bom.client.Engine.WEBKIT){var da=this.getSelection();
var db=cY.createRange();

if(db&&da){da.addRange(db);
}}},getHtml:function(bm){var bn=this._getIframeDocument();

if(bn==null){return null;
}return qx.bom.htmlarea.HtmlArea.__sY(bn.body,false,bm,this.getPostProcess());
},containsOnlyPlaceholder:qx.core.Variant.select(gN,{"mshtml":function(){var hB=this._getIframeDocument();
return (hB.body.innerHTML==fa);
},"default":qx.lang.Function.returnFalse}),getContextInformation:function(){return this.__tH();
},__tG:function(){qx.event.Timer.once(function(e){var dr=this.__tH();
this.fireDataEvent(eu,dr);
},this,200);
},__tH:function(){if(this._processingExamineCursorContext||this.getEditable()==false){return;
}this._processingExamineCursorContext=true;
var cb=this.getFocusNode();

if(cb==null){return;
}
if(qx.dom.Node.isText(cb)){cb=cb.parentNode;
}var cf=this._getIframeDocument();
var cp=qx.core.Variant.isSet(gN,gL)?cb.currentStyle:cf.defaultView.getComputedStyle(cb,null);
var ci=false;
var bX=false;
var cd=false;
var cc=false;
var cj=false;
var co=false;
var ce=false;
var cq=false;
var ca=false;
var cl=false;
var cn=null;
var cr=null;
var ch=null;

if(cp!=null){if(qx.core.Variant.isSet(gN,gL)){bX=cp.fontStyle==fq;
cd=cp.textDecoration.indexOf(fo)!==-1;
cc=cp.textDecoration.indexOf(eF)!==-1;
cn=cp.fontSize;
ch=cp.fontFamily;
ce=cp.textAlign==gE;
cq=cp.textAlign==hl;
ca=cp.textAlign==fv;
cl=cp.textAlign==hm;
}else{bX=cp.getPropertyValue(gD)==fq;
cd=cp.getPropertyValue(dK).indexOf(fo)!==-1;
cc=cp.getPropertyValue(dK).indexOf(eF)!==-1;
cn=cp.getPropertyValue(fK);
ch=cp.getPropertyValue(gi);
ce=cp.getPropertyValue(fw)==gE;
cq=cp.getPropertyValue(fw)==hl;
ca=cp.getPropertyValue(fw)==fv;
cl=cp.getPropertyValue(fw)==hm;
}
if(qx.core.Variant.isSet(gN,eg)){ci=cp.fontWeight==700;
}else{ci=cp.getPropertyValue(dA)==gp||qx.dom.Node.isNodeName(cb,gV);
}}var bY=cb;
if(bY!=null&&bY.parentNode!=null&&!qx.dom.Node.isDocument(bY.parentNode)){while(bY!=null&&!qx.dom.Node.isNodeName(bY,fp)){var cg=qx.dom.Node.getName(bY);

if(cg==fe){co=true;
break;
}else if(cg==ev){cj=true;
break;
}
if(cr==null||cr==gM){cr=qx.bom.element.Attribute.get(bY,hd);
}bY=bY.parentNode;
}}var ck={bold:ci?1:0,italic:bX?1:0,underline:cd?1:0,strikethrough:cc?1:0,fontSize:(cr==null)?cn:cr,fontFamily:ch,insertUnorderedList:cj?1:0,insertOrderedList:co?1:0,justifyLeft:ce?1:0,justifyCenter:cq?1:0,justifyRight:ca?1:0,justifyFull:cl?1:0};
this._processingExamineCursorContext=false;
return ck;
},getSelection:qx.core.Variant.select(gN,{"mshtml":function(){return this._getIframeDocument()?this._getIframeDocument().selection:null;
},"default":function(){return this._getIframeWindow()?this._getIframeWindow().getSelection():null;
}}),isSelectionCollapsed:qx.core.Variant.select(gN,{"mshtml":function(){return this.getSelection()&&this.getSelection().type==eD;
},"default":function(){return this.getSelection()&&this.getSelection().isCollapsed;
}}),getSelectedText:qx.core.Variant.select(gN,{"mshtml":function(){return this.getRange()?this.getRange().text:gM;
},"default":function(){return this.getRange()?this.getRange().toString():gM;
}}),getSelectedHtml:function(){if(this.__tk!=null){return this.__tk;
}var bg=this.getRange();

if(!bg){return gM;
}else{return this.__tI(bg);
}},__tI:qx.core.Variant.select(gN,{"mshtml":function(cG){if(!cG){return gM;
}return cG.item?cG.item(0).outerHTML:cG.htmlText;
},"default":function(k){var l=this._getIframeDocument();

if(l&&k){try{var m=l.createElement(fp);
m.appendChild(k.cloneContents());
return m.innerHTML;
}catch(bW){}return k+gM;
}return gM;
}}),clearSelection:qx.core.Variant.select(gN,{"mshtml":function(){var q=this.getSelection();

if(q){q.empty();
}},"default":function(){var cA=this.getSelection();

if(cA){cA.collapseToStart();
}}}),__tJ:qx.core.Variant.select(gN,{"gecko":function(){var J=this.getSelection();
var K=this.getFocusNode();
return J&&this.isSelectionCollapsed()&&K!=null&&qx.dom.Node.isText(K)&&J.anchorOffset<K.length;
},"default":function(){return false;
}}),__tK:qx.core.Variant.select(gN,{"gecko":function(){return qx.dom.Node.isElement(this.getFocusNode());
},"default":function(){return false;
}}),getRange:function(){return this.__tL(this.getSelection());
},__tL:qx.core.Variant.select(gN,{"mshtml":function(hz){var hA=this._getIframeDocument();

if(hz){try{return hz.createRange();
}catch(g){return hA?hA.body.createTextRange():null;
}}else{return hA?hA.body.createTextRange():null;
}},"default":function(dd){var de=this._getIframeDocument();

if(dd){try{return dd.getRangeAt(0);
}catch(hC){return de?de.createRange():null;
}}else{return de?de.createRange():null;
}}}),saveRange:qx.core.Variant.select(gN,{"mshtml":function(){this.__tn=this.getRange();
},"default":function(){}}),getSavedRange:qx.core.Variant.select(gN,{"mshtml":function(){return this.__tn;
},"default":function(){}}),resetSavedRange:qx.core.Variant.select(gN,{"mshtml":function(){this.__tn=null;
},"default":function(){}}),getFocusNode:qx.core.Variant.select(gN,{"mshtml":function(){var bp=this.getSelection();
var bq;

switch(bp.type){case es:case eD:bq=this.__tL(bp);

if(bq){bq.collapse(false);
return bq.parentElement();
}else{return null;
}break;
case hi:bq=this.__tL(bp);

if(bq){try{bq.collapse(false);
}catch(bJ){}return bq.item(0);
}else{return null;
}break;
default:return this._getIframeDocument().body;
}},"default":function(){var bx=this.getSelection();

if(bx&&bx.focusNode){return bx.focusNode;
}return this._getIframeDocument().body;
}})},settings:{"qx.bom.htmlarea.HtmlArea.debug":dw},destruct:function(){try{var bt=this._getIframeDocument();
var bv=qx.event.Registration;
bv.removeListener(bt.body,dH,this._handleKeyPress,this);
bv.removeListener(bt.body,eA,this._handleKeyUp,this);
bv.removeListener(bt.body,ez,this._handleKeyDown,this);
var bu=qx.bom.client.Engine.WEBKIT?this._getIframeWindow():bt.body;
bv.removeListener(bu,hq,this._handleFocusEvent);
bv.removeListener(bu,hr,this._handleBlurEvent);
bv.removeListener(bt,ee,this._handleFocusOutEvent);
var bs=qx.bom.client.Engine.MSHTML?ho:go;
bv.removeListener(bt.body,bs,this._handleMouseUpOnBody,this);
bv.removeListener(bt.body,bs,this._handleMouseUpOnDocument,this);
bv.removeListener(bt.documentElement,gT,this._handleContextMenuEvent,this);
}catch(by){}this._disposeObjects(dS);
this.__tm=this.__tl=this.__tc=this.__ti=null;
}});
})();
(function(){var p="/",o="mshtml",n="",m="qx.client",l="?",k="string",j="qx.util.ResourceManager",i="singleton";
qx.Class.define(j,{extend:qx.core.Object,type:i,statics:{__hG:qx.$$resources||{},__hH:{}},members:{has:function(B){return !!arguments.callee.self.__hG[B];
},getData:function(w){return arguments.callee.self.__hG[w]||null;
},getImageWidth:function(q){var r=arguments.callee.self.__hG[q];
return r?r[0]:null;
},getImageHeight:function(z){var A=arguments.callee.self.__hG[z];
return A?A[1]:null;
},getImageFormat:function(a){var b=arguments.callee.self.__hG[a];
return b?b[2]:null;
},isClippedImage:function(x){var y=arguments.callee.self.__hG[x];
return y&&y.length>4;
},toUri:function(s){if(s==null){return s;
}var t=arguments.callee.self.__hG[s];

if(!t){return s;
}
if(typeof t===k){var v=t;
}else{var v=t[3];
if(!v){return s;
}}var u=n;

if(qx.core.Variant.isSet(m,o)&&qx.bom.client.Feature.SSL){u=arguments.callee.self.__hH[v];
}return u+qx.$$libraries[v].resourceUri+p+s;
}},defer:function(c){if(qx.core.Variant.isSet(m,o)){if(qx.bom.client.Feature.SSL){for(var g in qx.$$libraries){var e;

if(qx.$$libraries[g].resourceUri){e=qx.$$libraries[g].resourceUri;
}else{c.__hH[g]=n;
continue;
}if(e.match(/^\/\//)!=null){c.__hH[g]=window.location.protocol;
}else if(e.match(/^\.\//)!=null){var d=document.URL;
c.__hH[g]=d.substring(0,d.lastIndexOf(p)+1);
}else if(e.match(/^http/)!=null){}else{var h=window.location.href.indexOf(l);
var f;

if(h==-1){f=window.location.href;
}else{f=window.location.href.substring(0,h);
}c.__hH[g]=f.substring(0,f.lastIndexOf(p)+1);
}}}}}});
})();
(function(){var k="qx.event.handler.Iframe",j="load",i="iframe";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(l){qx.event.Registration.fireEvent(l,j);
})},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===i;
},registerEvent:function(d,e,f){},unregisterEvent:function(a,b,c){}},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var k="qx.client",j="webkit",i="body",h="iframe",g="qx.bom.Iframe";
qx.Class.define(g,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(w,x){var w=w?qx.lang.Object.clone(w):{};
var y=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var z in y){if(w[z]==null){w[z]=y[z];
}}return qx.bom.Element.create(h,w,x);
},getWindow:qx.core.Variant.select(k,{"mshtml|gecko":function(D){try{return D.contentWindow;
}catch(n){return null;
}},"default":function(c){try{var d=this.getDocument(c);
return d?d.defaultView:null;
}catch(v){return null;
}}}),getDocument:qx.core.Variant.select(k,{"mshtml":function(B){try{var C=this.getWindow(B);
return C?C.document:null;
}catch(u){return null;
}},"default":function(e){try{return e.contentDocument;
}catch(t){return null;
}}}),getBody:function(a){try{var b=this.getDocument(a);
return b?b.getElementsByTagName(i)[0]:null;
}catch(f){return null;
}},setSource:function(q,r){try{if(this.getWindow(q)&&qx.dom.Hierarchy.isRendered(q)){try{if(qx.core.Variant.isSet(k,j)&&qx.bom.client.Platform.MAC){var s=this.getContentWindow();

if(s){s.stop();
}}this.getWindow(q).location.replace(r);
}catch(A){q.src=r;
}}else{q.src=r;
}}catch(p){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(l){var m=this.getDocument(l);

try{if(m&&m.location){return m.location.href;
}}catch(o){}return null;
}}});
})();
(function(){var cw="qx.client",cv="",cu="legacy-font-size",ct="mshtml",cs="inserthtml",cr="span",cq='color',cp="text-decoration",co=';',cn="__ue",bx="transparent",bw='">',bv="child",bu="gecko",bt="font-family",bs="text-align",br='text-decoration',bq="BackColor",bp="FontSize",bo="BODY",cD="</font>",cE="backgroundPosition",cB="font-size",cC="p",cz="underline",cA='|',cx="id",cy="string",cF="background-color",cG="backgroundRepeat",bV="font",bU=":",bX="InsertHtml",bW="none",ca=" ",bY=";",cc="px",cb="backgroundImage",bT="Control",bS="__uf",a="__paragraph__",b=':',c="qx.bom.htmlarea.HtmlArea.debug",d="on",f="size",g="textDecoration",h="undefined",m="backgroundColor",n="_moz",o="top",cK="/>",cJ="formatBlock",cI="insertParagraph",cH="li",cO='<span style="',cN="__uy",cM="no-repeat",cL=' <a href="',cQ="FONT",cP="|top|bottom|center|left|right|right top|left top|left bottom|right bottom|",N="__placeholder__",O='font-family:',L="<p style='",M="outdent",R='</a> ',S="InsertImage",P="__resetHtml",Q="FontName",J="__uh",K="line-through",w="__ua",v="blockquote",y="__ux",x="style",s="__uw",r="P",u="qx.bom.htmlarea.manager.Command",t="'><br class='webkit-block-placeholder' />",q="a",p='"',X="<span></span>",Y="type",ba="CreateLink",bb="__uv",T="='",U="<img ",V="qx_link",W='"></span>',bc="Italic",bd="InsertUnorderedList",G="OL",F='text-align:',E="Bold",D="ForeColor",C="url(",B='" ',A="repeat repeat-x repeat-y no-repeat",z="__uu",I='</p>',H="<hr />",be='<font style="',bf="IMG",bg='<p id="',bh="StrikeThrough",bi="LI",bj="__getHtml",bk='>',bl="__ut",bm='" size="',bn="Indent",bB="HiliteColor",bA="br",bz="Copy",by="</span>",bF="Paste",bE="RemoveFormat",bD="JustifyRight",bC="indent",bH="' ",bG='',bO="__uk",bP='style="',bM="JustifyCenter",bN="_moz_dirty",bK="color",bL="JustifyLeft",bI="Underline",bJ="SelectAll",bQ="Cut",bR="__us",cg=")",cf="href",ci='<span id="',ch="__uj",ck="UL",cj="JustifyFull",cm="Outdent",cl="webkit",ce="selectall",cd="InsertOrderedList";
qx.Class.define(u,{extend:qx.core.Object,construct:function(gw){arguments.callee.base.call(this);
this.__tM=gw;
this.__tN=null;
this._commands=null;
this.__tU();
this.__tO={"Bold":true,"Italic":true,"Underline":true,"StrikeThrough":true};
this.__tP=[10,12,16,18,24,32,48];
this.__tQ=0;
},statics:{__tR:cP,__tS:A},members:{__tN:null,__tM:null,__tT:false,__tO:null,__tP:null,__tQ:null,setContentDocument:function(fO){this.__tN=fO;
},getCommandObject:function(eD){if(this._commands[eD]){return this._commands[eD];
}else{return null;
}},__tU:function(){this._commands={bold:{useBuiltin:true,identifier:E,method:null},italic:{useBuiltin:true,identifier:bc,method:null},underline:{useBuiltin:true,identifier:bI,method:null},strikethrough:{useBuiltin:true,identifier:bh,method:null},fontfamily:{useBuiltin:true,identifier:Q,method:null},fontsize:{useBuiltin:false,identifier:bp,method:bR},textcolor:{useBuiltin:true,identifier:D,method:null},textbackgroundcolor:{useBuiltin:false,identifier:null,method:bl},backgroundcolor:{useBuiltin:false,identifier:null,method:z},backgroundimage:{useBuiltin:false,identifier:null,method:bb},justifyleft:{useBuiltin:false,identifier:bL,method:cn},justifyright:{useBuiltin:false,identifier:bD,method:cn},justifycenter:{useBuiltin:false,identifier:bM,method:cn},justifyfull:{useBuiltin:false,identifier:cj,method:cn},indent:{useBuiltin:true,identifier:bn,method:null},outdent:{useBuiltin:true,identifier:cm,method:null},copy:{useBuiltin:true,identifier:bz,method:null},cut:{useBuiltin:true,identifier:bQ,method:null},paste:{useBuiltin:true,identifier:bF,method:null},insertorderedlist:{useBuiltin:false,identifier:cd,method:bS},insertunorderedlist:{useBuiltin:false,identifier:bd,method:bS},inserthorizontalrule:{useBuiltin:false,identifier:bX,method:bO},insertimage:{useBuiltin:false,identifier:S,method:J},inserthyperlink:{useBuiltin:false,identifier:ba,method:ch},selectall:{useBuiltin:false,identifier:bJ,method:s},selectedtext:{useBuiltin:false,identifier:null,method:y},selectedhtml:{useBuiltin:false,identifier:null,method:cN},inserthtml:{useBuiltin:false,identifier:bX,method:w},resethtml:{useBuiltin:false,identifier:null,method:P},gethtml:{useBuiltin:false,identifier:null,method:bj},removeformat:{useBuiltin:true,identifier:bE,method:null}};
},execute:function(gs,gt){if(!this.__tM.isReady()){this.error("editor not ready! '"+gs+"':'"+gt+"'");
return false;
}gs=gs.toLowerCase();
gt=gt!=null?gt:null;
if(this._commands[gs]){var gu;
var gv=this._commands[gs];
if(!(qx.bom.client.Engine.WEBKIT&&(gs==bC||gs==M))){if(this.__tV()){this.__tW();
}}if(gv.useBuiltin){gu=this.__tX(gv.identifier,false,gt);
}else{if(gv.method!=null&&this[gv.method]){gu=this[gv.method].call(this,gt,gv);
}else{this.error("The method '"+gv.method+"' you calling to execute the command '"+gs+"' is not available!");
}}this.__tM.resetSavedRange();
return gu;
}else{this.error("Command "+gs+" is currently not supported!");
}},__tV:function(){var fh=this.__tM.getFocusNode();
var fk=false;
var fi=false;

if(fh){if(fh.nodeType==3){var fj=qx.dom.Hierarchy.getAncestors(fh);

for(var i=0,j=fj.length;i<j;i++){if(fj[i].tagName==r){fk=true;
break;
}}}else if(fh.nodeType==1&&fh.tagName==bo){fi=true;
}}return fi||!fk;
},__tW:function(){this.__tX(cJ,false,cC);
},__tX:function(dn,dp,dq){try{var dt=this.__tN;
var dr=false;
var ds=this.__tM.getRange();
this.__tN.body.focus();
if(qx.core.Variant.isSet(cw,ct)){if(dn!=ce){ds.select();
if(((ds.text)&&(ds.text.length>0))||((ds.length==1)&&(ds.item(0))&&(ds.item(0).tagName==bf))){dt=ds;
}else{dt=this.__tN;
}}if((qx.core.Variant.isSet(cw,ct))&&(this.__tO[dn])){if(ds.text==cv){dr=true;
}}}var du=dt.execCommand(dn,dp,dq);

if(dr&&ds.text!=cv){ds.collapse();
}
if(false&&qx.core.Setting.get(c)==d){this.debug("execCommand "+dn+" with value "+dq+" succeded");
}this.__tT=false;
}catch(hd){if(false&&qx.core.Setting.get(c)==d){this.debug("execCommand "+dn+" with value "+dq+" failed");
}return false;
}return du;
},__tY:qx.core.Variant.select(cw,{"mshtml":function(){var gf=this.__tM;
var ge=gf.getSavedRange()!=null?gf.getSavedRange():gf.getRange();
return ge;
},"default":function(){return this.__tM.getRange();
}}),__ua:qx.core.Variant.select(cw,{"mshtml":function(dv,dw){var dz;
if(dv==qx.bom.htmlarea.HtmlArea.simpleLinebreak){return this.__ud();
}else{this.__tN.body.focus();
var dy=this.__tM.getSelection();
var dx=this.__tY();
if(dx&&dy&&dy.type!=bT){try{dx.pasteHTML(dv);
dx.collapse(false);
dx.select();
dz=true;
}catch(e){}}else{dz=false;
}this.__tM.resetSavedRange();
return dz;
}},"default":function(ea,eb){this.__tN.body.focus();
return this.__tN.execCommand(eb.identifier,false,ea);
}}),insertParagraphOnLinebreak:qx.core.Variant.select(cw,{"gecko":function(){var fw=this.__un();
var fA=this.__ub(fw);
var fs=this.__ul(fw);
var fx=N+Date.parse(new Date());
var fy=a+Date.parse(new Date());
var fq=bG;
var fu=ci+fx+W;
fq+=fu;
fq+=bg+fy+B+fA+bk;
fq+=fs+I;
this.__tM.getCommandManager().addUndoStep(cs,cI,this.getCommandObject(cs));
this.execute(cs,fq);
this.__uc();
this.__tN.getElementById(fx).removeAttribute(cx);
var fv=this.__tN.getElementById(fy);

if(fv.previousSibling.innerHTML==fu){var fp=this.__um();
var ft=this.__tN.createElement(bA);
var fr=this.__tN.createAttribute(bN);
fr.nodeValue=cv;
ft.setAttributeNode(fr);
var fz=this.__tN.createAttribute(Y);
fz.nodeValue=n;
ft.setAttributeNode(fz);
fv.previousSibling.appendChild(fp);
fv.previousSibling.appendChild(ft);
}return true;
},"webkit":function(){var fl=this.getCurrentStyles();
var fm=cv;
var fo={"background-color":true,"text-align":true};
for(var fn in fl){if(fo[fn]){fm+=fn+bU+fl[fn]+bY;
}}this.__tM.insertHtml(L+fm+t);
},"default":qx.lang.Function.empty}),__ub:qx.core.Variant.select(cw,{"gecko":function(dP){var dU=bP;
var dT=dP.child;
if(dT[bs]){dU+=F+dT[bs]+co;
delete dP.child[bs];
}if(dT[bt]){dU+=O+dT[bt]+co;
delete dP.child[bt];
}var dS={"padding-top":true,"padding-bottom":true,"padding-left":true,"padding-right":true};
var dQ={"margin-top":true,"margin-bottom":true,"margin-left":true,"margin-right":true};

for(var dR in dT){if(dS[dR]||dQ[dR]){dU+=dR+b+dT[dR]+co;
delete dP.child[dR];
}}dU+=p;
return dU;
},"default":function(){return cv;
}}),__uc:qx.core.Variant.select(cw,{"gecko":function(){var gq=this.__tM.getSelection();

if(!gq||!gq.focusNode){return;
}var gj=gq.focusNode;
var go=gq.focusNode;

while(!qx.dom.Node.isNodeName(go,cC)){go=go.parentNode;
}var gn=go.previousSibling.id;
var gr=go.nextSibling?go.nextSibling.id:null;

if(qx.lang.String.startsWith(gn,a)&&gn==gr){var gp=go.nextSibling;
var gl=this.__tM.getRange();
gl.selectNode(gp);
gq.addRange(gl);
var gk=qx.bom.htmlarea.HtmlArea.EMPTY_DIV;
this.__tM.getCommandManager().addUndoStep(cs,gk,this.getCommandObject(cs));
this.execute(cs,gk);
var gm=this.__tM.getRange();

if(gj){while(gj&&gj.firstChild&&qx.dom.Node.isElement(gj.firstChild)){gj=gj.firstChild;
}}gm.selectNode(gj);
gq.addRange(gm);
gm.collapse(true);
}},"default":qx.lang.Function.empty}),__ud:qx.core.Variant.select(cw,{"mshtml":function(){var cT=this.__tM.getRange();
if(cT&&!qx.dom.Node.isNodeName(cT.parentElement(),cH)){cT.pasteHTML(qx.bom.htmlarea.HtmlArea.simpleLinebreak);
cT.collapse(false);
cT.select();
return true;
}return false;
},"default":function(){return false;
}}),__ue:function(hk,hl){var hm=qx.core.Variant.isSet(cw,ct)?this.__tM.getRange():this.__tN;
return hm.execCommand(hl.identifier,false,hk);
},__uf:function(fU,fV){if(qx.core.Variant.isSet(cw,ct)){var fW=this.__tM.getFocusNode();
this.__ug(fW);
}this.__tN.body.focus();
var fX=this.__tN.execCommand(fV.identifier,false,fU);

if(qx.core.Variant.isSet(cw,cl)){var fW=this.__tM.getFocusNode();
this.__ug(fW.parentNode);
}return fX;
},__ug:function(cR){var cS=[];
var parent=cR.parentNode;

while(qx.dom.Node.isNodeName(parent,v)){cS.push(parent);
parent=parent.parentNode;
}if(cS.length>0){parent.appendChild(cR);
parent.removeChild(cS[cS.length-1]);
}},__uh:qx.core.Variant.select(cw,{"gecko":function(gM,gN){if(gM.src){this.__tN.execCommand(gN.identifier,false,gM.src);
delete gM.src;
var hb=this.__tM.getSelection();
if(hb){var ha=hb.anchorNode;
var gU=hb.anchorOffset;
var gR=ha.childNodes[gU-1];
var gX;

for(var gT in gM){gX=this.__tN.createAttribute(gT);
gX.nodeValue=gM[gT];
gR.setAttributeNode(gX);
}var gS={"font":true,"span":true};
var gP=null;
var gW=true;
if(qx.dom.Node.isElement(gR.previousSibling)&&gS[qx.dom.Node.getName(gR.previousSibling)]){gP=gR.previousSibling;
}else if(gS[qx.dom.Node.getName(gR.parentNode)]){gP=gR.parentNode;
gW=false;
}var gQ=this.__tN.createDocumentFragment();
var hc;

if(gW&&gP!=null){var gS=this.__ui(gP);
gQ.appendChild(gS.root);
hc=gS.inline;
}else{hc=this.__tN.createElement(cr);
gQ.appendChild(hc);
}var gY=this.__tN.createTextNode(cv);
hc.appendChild(gY);
var gV=gR.parentNode;
if(gR==gV.lastChild){gV.appendChild(gQ);
}else{gV.insertBefore(gQ,gR.nextSibling);
}var gO=this.__tM.getRange();
gO.selectNodeContents(hc);
}return true;
}else{return false;
}},"mshtml":function(eL,eM){var eQ=false;
var eR=U;

for(var eN in eL){eR+=eN+T+eL[eN]+bH;
}eR+=cK;
var eO=this.__tM.getSelection();
var eP=this.__tY();
if(eO&&eO.type!=bT){try{eP.select();
eP.pasteHTML(eR);
eQ=true;
}catch(e){}}this.__tM.resetSavedRange();
return eQ;
},"default":function(cU,cV){return this.__tN.execCommand(cV.identifier,false,cU.src);
}}),__ui:function(gD){while(gD.firstChild&&gD.firstChild.nodeType==1){gD=gD.firstChild;
}var gH=this.__un(gD);
var gL,gF,gJ;
var gE=cv;
var parent=null;
var gK=null;
var gI=gH.child;

while(gI){gK=this.__tN.createElement(gI[cu]?bV:cr);
gF=this.__tN.createAttribute(x);
gK.setAttributeNode(gF);
for(var gG in gI){if(gG!=bv&&gG!=cu){gE+=gG+bU+gI[gG]+bY;
}else if(gG==cu){gJ=this.__tN.createAttribute(f);
gJ.nodeValue=gI[gG];
gK.setAttributeNode(gJ);
}}gF.nodeValue=gE;

if(parent!=null){parent.appendChild(gK);
}else{gL=gK;
}parent=gK;
gI=gI.child;
gE=cv;
}return {root:gL,inline:gK};
},__uj:qx.core.Variant.select(cw,{"gecko|opera":function(cW,cX){var de=this.__tM.getSelection();
var db=this.__tM.getRange();
if(de.isCollapsed){var da=V+(++this.__tQ);
var df=this.__tN.createElement(q);
var dc=this.__tN.createAttribute(cf);
var cY=this.__tN.createAttribute(cx);
var dd=this.__tN.createTextNode(cW);
cY.nodeValue=da;
df.setAttributeNode(cY);
dc.nodeValue=cW;
df.setAttributeNode(dc);
df.appendChild(dd);
db.insertNode(df);
db.selectNode(df);
de.collapseToEnd();
return true;
}else{return this.__tN.execCommand(cX.identifier,false,cW);
}},"mshtml":function(fY,ga){try{var gc;
var gb=this.__tY();
var gd=this.__tM;
var gb=gd.getSavedRange()!=null?gd.getSavedRange():gd.getRange();

if(gb!=null&&gb.text!=cv){gc=gb.execCommand(ga.identifier,false,fY);
}else{gc=this.__ua(cL+fY+bw+fY+R,ga);
}this.__tM.resetSavedRange();
return gc;
}catch(e){{};
return false;
}},"default":function(he,hf){return this.__tN.execCommand(hf.identifier,false,he);
}}),__uk:function(gg,gh){var gi=H;
if(qx.core.Variant.isSet(cw,bu)){gi+=this.__ul();
}return this.__ua(gi,gh);
},__ul:function(eS){var eW=cv;
var eV=cO;
var eU=[];
var fa=typeof eS!==h?eS:this.__un();
var eX=fa.child;
var eY=false;
if(qx.lang.Object.isEmpty(eX)){return cv;
}
while(eX){eY=eX[cu]!=null;
eW+=eY?be:eV;

for(var eT in eX){eW+=(eT!=bv&&eT!=cu)?eT+b+eX[eT]+co:cv;
}eW+=eY?bm+eX[cu]+bw:bw;
eU.unshift(eY?cD:by);
eX=eX.child;
}if(eU.length==1&&eU[0]==cD){eW+=X;
}for(var i=0,j=eU.length;i<j;i++){eW+=eU[i];
}return eW;
},__um:function(){var eF=this.__tN.createDocumentFragment();
var eK=this.__un();
var parent=eF;
var eI=eK.child;
var eG;
var eJ=false;

while(eI){eJ=eI[cu]!=null;
eG=this.__tN.createElement(eJ?bV:cr);
parent.appendChild(eG);
for(var eE in eI){if(eE!=bv&&eE!=cu){qx.bom.element.Style.set(eG,eE,eI[eE]);
}}
if(eJ){var eH=this.__tN.createAttribute(f);
eH.nodeValue=eI[cu];
eG.setAttributeNode(eH);
}parent=eG;
eI=eI.child;
}return eF;
},__un:function(fb){var fd={};
var fe=null;
var ff=this.getCurrentStyles(fb);
fe=fd.child={};

for(var fc in ff){if(fc!=cp){fe[fc]=ff[fc];
}}if(ff[cp]){var fg=ff[cp];
for(var i=0,j=fg.length;i<j;i++){if(fe==null){fe=fd.child={};
}else{fe=fe.child={};
}fe[cq]=fg[i][cq];
fe[br]=fg[i][br];
}}if(ff[cq]&&ff[br]){fe=fe.child={};
fe[cq]=ff[cq];
}return fd;
},getCurrentStyles:function(gx){if(gx==null){var gz=this.__tM.getSelection();

if(!gz||gz.focusNode==null){return {};
}gx=(gz.focusNode.nodeType==3)?gz.focusNode.parentNode:gz.focusNode;
}var gA=qx.dom.Hierarchy.getAncestors(gx);
var gC=qx.lang.Array.insertBefore(gA,gx,gA[0]);
var gy=this.__uo(gC);
var gB=this.__up(gy,gC);
return gB;
},__uo:function(dV){var dY={};
var dW,dX;

for(var i=0,j=dV.length;i<j;i++){dX=dV[i];

for(var k=0,l=dX.style.length;k<l;k++){dW=dX.style[k];

if(dW.length>0&&typeof dY[dW]===h){dY[dW]=dX.style.getPropertyValue(dW);
}}if(dX.tagName.toUpperCase()==cQ&&dX.size&&dY[cu]===undefined){dY[cu]=dX.size;
}}if(dY[cu]&&dY[cB]){delete dY[cB];
}return dY;
},__up:function(dI,dJ){var dO=dJ[0];
var dM=this.__tM.getContentWindow().getComputedStyle(dO,null);
var dK;
var dN={};

for(var dL in dI){if(dL!=cu){dK=dM.getPropertyValue(dL);
}else{dK=dI[dL];
}if(dL==cF&&dK==bx){dN[dL]=this.__ur(dJ);
}else if(dL==cp){dN[dL]=this.__uq(dJ);
}else{dN[dL]=dK;
}}return dN;
},__uq:function(ee){var eh,ej,ef;
var ei=[];
var eg=this.__tM.getContentWindow();

for(var i=0,j=ee.length;i<j;i++){ef=eg.getComputedStyle(ee[i],null);
eh=ef.getPropertyValue(cp);
ej=ef.getPropertyValue(bK);
if(eh!=bW){ei.push({'text-decoration':eh,'color':ej});
}}return ei;
},__ur:function(hg){var hi,hh,hj;

for(var i=0;i<hg.length;i++){hi=hg[i];
hh=this.__tM.getContentWindow().getComputedStyle(hi,null);
hj=hh.getPropertyValue(cF);
if(hj!=bx){return hj;
}}},__us:function(eo,ep){var eC=this.__tM.getSelection();
var ew=(qx.core.Variant.isSet(cw,ct))?this.__tM.getRange():ew=eC.getRangeAt(0);
var ey=[];
var eB;
var ev=[G,ck];
var eq,i,j,ez;
ez=(qx.core.Variant.isSet(cw,ct))?ew.parentElement():ew.commonAncestorContainer;
if(ez.tagName==bo){for(var i=0;i<ev.length;i++){eq=ez.getElementsByTagName(ev[i]);

for(var j=0;j<eq.length;j++){if(eq[j]){ey.push(eq[j]);
}}}}else if(qx.lang.Array.contains(ev,ez.tagName)){ey.push(ez);
}
if(ey.length>0){for(var i=0;i<ey.length;i++){var es=ey[i];
eB=(qx.core.Variant.isSet(cw,ct))?
((es==ez)||(ez.tagName==bo)):
eC.containsNode(es,false);
for(j=0;j<es.childNodes.length;j++){var eu=es.childNodes[j];
if(eB||
(eC.focusNode.nodeValue&&qx.dom.Hierarchy.contains(eu,eC.focusNode)&&(eC.focusOffset==eC.focusNode.nodeValue.length))||
(qx.dom.Hierarchy.contains(eu,eC.anchorNode)&&(eC.anchorOffset==0))||
(eC.containsNode(eu,false))){eu.style.fontSize=(this.__tP[eo]||eo)+cc;
}}}}else{var et=(qx.core.Variant.isSet(cw,ct))?ez:eC.focusNode;
var eA=qx.dom.Hierarchy.getAncestors(et);

for(i=0;i<eA.length;i++){if(eA[i].tagName==bi){if(((qx.core.Variant.isSet(cw,bu))&&
((eC.anchorOffset==0)&&
(eC.focusNode.nodeValue&&(eC.focusOffset==eC.focusNode.nodeValue.length))&&
qx.dom.Hierarchy.contains(eA[i].firstChild,eC.anchorNode)&&
qx.dom.Hierarchy.contains(eA[i].lastChild,eC.focusNode)))||
((qx.core.Variant.isSet(cw,ct))&&(ew.htmlText==eA[i].innerHTML))){eA[i].style.fontSize=(this.__tP[eo]||eo)+cc;
}break;
}}}if(qx.core.Variant.isSet(cw,ct)){this.__tN.body.focus();
this.__tM.getRange().select();
return this.__tN.execCommand(bp,false,eo);
}else if(qx.core.Variant.isSet(cw,bu)){var parent=ew.commonAncestorContainer;
if(parent.nodeType===1){var er=parent.getElementsByTagName(cr);

for(i=0;i<er.length;i++){if(er[i].style.fontSize){er[i].style.fontSize=null;
}}}}return this.__tN.execCommand(bp,false,eo);
},__ut:qx.core.Variant.select(cw,{"mshtml":function(fE,fF){this.__tN.body.focus();
return this.__tN.execCommand(bq,false,fE);
},"gecko|opera":function(ec,ed){this.__tN.body.focus();
return this.__tN.execCommand(bB,false,ec);
},"webkit":function(dg,dh){var di=this.__tM.getSelection();
var dj=this.__tM.getRange();
if(!di||!di.isCollapsed){this.__tN.body.focus();
this.__tN.execCommand(bq,false,dg);
if(di){di.collapseToEnd();
}return true;
}else{var dl=di.anchorOffset;
var dm=di.anchorOffset;
var dj=di.getRangeAt(0);
var dk=di.anchorNode;
while(dm>0){if(dk.nodeValue.charCodeAt(dm)==160||dk.nodeValue.charCodeAt(dm)==32){break;
}else{dm--;
}}while(dl<dk.nodeValue.length){if(dk.nodeValue.charCodeAt(dl)==160||dk.nodeValue.charCodeAt(dl)==32){break;
}else{dl++;
}}dj.setStart(di.anchorNode,di.anchorNode.nodeValue.charAt(dm)==ca?dm+1:dm);
dj.setEnd(di.anchorNode,dl);
di.addRange(dj);
this.__tN.body.focus();
this.__tN.execCommand(bq,false,dg);
di.collapseToEnd();
return true;
}}}),__uu:function(fG,fH){fG=fG!=null&&typeof fG==cy?fG:bx;
qx.bom.element.Style.set(this.__tN.body,m,fG);
return true;
},__uv:function(dA,dB){var dC,dE,dD;
var dF=qx.bom.htmlarea.manager.Command;

if(dA==null){dC=null;
}else{dC=dA[0];
dE=dA[1];
dD=dA[2];
}if(dC==null||typeof dC!=cy){qx.bom.element.Style.set(this.__tN.body,cb,cv);
qx.bom.element.Style.set(this.__tN.body,cG,cv);
qx.bom.element.Style.set(this.__tN.body,cE,cv);
return true;
}else{if(dC.search(/^url.*\(/)==-1){dC=C+dC+cg;
}}if(dE!=null&&!qx.lang.String.contains(dF.__tS,dE)){{};
return false;
}else{dE=cM;
}
if(dD!=null){if(qx.lang.Type.isString(dD)&&!qx.lang.String.contains(dF.__tR,cA+dD+cA)){{};
return false;
}else{if(qx.lang.Type.isArray(dD)&&dD.length==2){dD=dD[0]+ca+dD[1];
}else{{};
return false;
}}}else{dD=o;
}qx.bom.element.Style.set(this.__tN.body,cb,dC);
qx.bom.element.Style.set(this.__tN.body,cG,dE);
qx.bom.element.Style.set(this.__tN.body,cE,dD);
return true;
},__uw:qx.core.Variant.select(cw,{"mshtml":function(fB,fC){var fD=this.__tN.body.createTextRange();
fD.select();
return true;
},"default":function(em,en){return this.__tX(en.identifier,false,em);
}}),__ux:function(){return this.__tM.getSelectedText();
},__uy:function(){return this.__tM.getSelectedHtml();
},__uz:qx.core.Variant.select(cw,{"webkit":function(fI,fJ){var fK=this.__tM.getContextInformation();
var fM=this.__tM.getFocusNode();
if(fK.underline){fM.style.textDecoration=bW;
}else{if(fK.strikethrough){var fN=this.__tN.createElement(cr);
qx.bom.element.Style.set(fN,g,cz);
fM.appendChild(fN);
var fL=this.__tM.getSelection();

if(fL){fL.extend(fN,0);

if(!fL.isCollapsed){fL.collapseToEnd();
}}}else{fM.style.textDecoration=cz;
}}return true;
},"default":function(dG,dH){return this.__tX(dH.identifier,false,dG);
}}),__uA:qx.core.Variant.select(cw,{"webkit":function(fP,fQ){var fS=this.__tM.getFocusNode();
var fT=this.__tN.createElement(cr);
qx.bom.element.Style.set(fT,g,K);
fS.appendChild(fT);
var fR=this.__tM.getSelection();

if(fR){fR.extend(fT,0);

if(!fR.isCollapsed){fR.collapseToEnd();
}}return true;
},"default":function(ek,el){return this.__tX(el.identifier,false,ek);
}})},destruct:function(){this.__tN=this.__tM=this._commands=this.__tO=this.__tP=null;
}});
})();
(function(){var bz="qx.client",by="Command",bx="mshtml",bw="gecko",bv="Custom",bu="Content",bt="Internal",bs="inserthtml",br="backgroundimage",bq="backgroundcolor",cu="webkit",ct="backgroundColor",cs="mousedown",cr="table",cq="backgroundImage",cp="backgroundRepeat",co="p",cn="backgroundPosition",cm="td",cl="img",bG="inserthyperlink",bH="mouseup",bE="keypress",bF="qx.bom.htmlarea.HtmlArea.debug",bC="on",bD="undo",bA="undoRedoState",bB="pageup",bK="b",bL="control",bT="end",bR="right",cb="qx_link",bV="insertunorderedlist",ch="Undo",cf="pagedown",bN="k",ck="home",cj="a",ci="insertorderedlist",bM="y",bP="justifyright",bQ="redo",bS="insertParagraph",bU="qx.bom.htmlarea.manager.UndoRedo",bW="left",cc="i",cg="Redo",bI="__uB",bJ="u",bO="enter",ca="insertimage",bY="z",bX="down",ce="up",cd="body";
qx.Class.define(bU,{extend:qx.core.Object,construct:function(F,G){arguments.callee.base.call(this);
this.__uB=F;
this.__uC=G;
this.__uD=[];
this.__uE=[];
this._commands=null;
this.__uF=null;
this.__uG={};
this.__uH={command:true,content:true,custom:true};
this.__vg();
this.__uI=qx.lang.Function.bind(this._handleKeyPress,this);
this.__uJ=qx.lang.Function.bind(this._handleMouseUp,this);

if(qx.core.Variant.isSet(bz,bx)){this.__uK=qx.lang.Function.bind(this._handleMouseDown,this);
}},members:{__uL:false,__uM:false,__uN:false,__uH:null,__uG:null,__uB:null,__uF:null,__uD:null,__uE:null,__uC:null,__uI:null,__uJ:null,__uK:null,__uO:null,setContentDocument:function(Q){this.__uF=Q;
this.__uB.setContentDocument(Q);
qx.event.Registration.addListener(Q.body,bE,this.__uI,this);
qx.event.Registration.addListener(Q.body,bH,this.__uJ,this);

if(qx.core.Variant.isSet(bz,bx)){qx.event.Registration.addListener(Q.body,cs,this.__uK,this,true);
}},insertParagraphOnLinebreak:function(){return this.__uB.insertParagraphOnLinebreak();
},execute:function(r,s){var t;
r=r.toLowerCase();
if(this._commands[r]){if(this._commands[r].passthrough){t=this.__uB.execute(r,s);
}else{t=this[r].call(this);
}}else{if(qx.core.Variant.isSet(bz,bx)||qx.core.Variant.isSet(bz,cu)){this.__vh(r,s,this.__uB.getCommandObject(r));
t=this.__uB.execute(r,s);
if(!t){this.__uD.pop();
}}else{t=this.__uB.execute(r,s);

if(t){this.__vh(r,s,this.__uB.getCommandObject(r));
}}
if(r==bD&&this.__uD.length==0){this.__uM=false;
this.__vp();
}else if(r==bQ&&this.__uE.length==0){this.__uL=false;
this.__vp();
}}this.__uN=false;
return t;
},addUndoStep:function(U,V,W){this.__vh(U,V,W);
},registerHandler:function(cJ,cK,cL,cM){this.__uG[cJ]={undo:cK,redo:cL,context:cM};
},isUndoPossible:function(){return this.__uM;
},undo:function(){var g;

if(this.__uN){this.__vj();
}if(this.__uD.length>0){var f=this.__uD.pop();

if(this.__uH[f.actionType.toLowerCase()]){switch(f.actionType){case by:g=this.__uQ(f);
break;
case bu:g=this.__uU(f);
break;
case bt:g=this.__uT(f);
break;
case bv:g=this.__uP(f);
break;
}}else if(this.__uG[f.actionType]){var d=this.__uG[f.actionType];
g=d.undo.call(d.context?d.context:this,f);
this.__vl(f);
}else{this.error("actionType "+f.actionType+" is not managed! Please provide a handler method!");
}this.__uL=true;
this.__vp();
return g;
}},__uP:qx.core.Variant.select(bz,{"mshtml|webkit":function(B){var C=this.__uF.body.innerHTML;
var E=B.content;
this.__uF.body.innerHTML=E;
var D=B;
D.content=C;
this.__vl(D);
return true;
},"default":function(cw){var cA=cw;
var cz=qx.bom.element.Style;
switch(cw.command){case bq:cA.parameter=[cz.get(this.__uF.body,ct)];
break;
case br:cA.parameter=[cz.get(this.__uF.body,cq),cz.get(this.__uF.body,cp),cz.get(this.__uF.body,cn)];
break;
}this.__vl(cA);
if(cw.command==bG){if(qx.core.Variant.isSet(bz,bw)){var cy=cb+this.__uB.__hyperLinkId;
var cx=this.__uF.getElementById(cy);

if(cx){cx.parentNode.removeChild(cx);
return true;
}else{return false;
}}}else{return this.__uB.execute(cw.command,cw.value);
}}}),__uQ:qx.core.Variant.select(bz,{"mshtml|webkit":function(cG){},"default":function(y){this.__vl(y);

if(qx.core.Variant.isSet(bz,bw)){if(y.command==bs&&y.value==qx.bom.htmlarea.HtmlArea.EMPTY_DIV&&this.__uR(bs,bS)){this.__uS();
}}return this.__uV();
}}),__uR:function(R,S){if(this.__uD.length>0){var T=this.__uD[this.__uD.length-1];
return (T.command==R&&T.value==S);
}return false;
},__uS:function(){this.__uV();

if(this.__uD.length>0){var bm=this.__uD.pop();
this.__vl(bm);
}},__uT:function(X){this.__vl(X);
return this.__uV();
},__uU:qx.core.Variant.select(bz,{"gecko":function(bl){this.__vl(bl);

try{return this.__uV();
}catch(bh){{};
}},"mshtml|webkit":function(A){},"default":function(cN){this.__vl(cN);
return this.__uV();
}}),__uV:function(){try{return this.__uF.execCommand(ch,false,null);
}catch(e){return false;
}},isRedoPossible:function(){return this.__uL;
},redo:function(){if(this.__uL){var cP;
if(this.__uE.length>0){var cQ=this.__uE.pop();

if(this.__uH[cQ.actionType.toLowerCase()]){switch(cQ.actionType){case by:cP=this.__uX(cQ);
break;
case bu:cP=this.__ve(cQ);
break;
case bt:cP=this.__vd(cQ);
break;
case bv:cP=this.__uW(cQ);
break;
}}else if(this.__uG[cQ.actionType]){var cO=this.__uG[cQ.actionType];
cP=cO.redo.call(cO.context?cO.context:this,cQ);
this.__vk(cQ);
}else{this.error("actionType "+cQ.actionType+" is not managed! Please provide a handler method!");
}this.__uM=true;
this.__vp();
}return cP;
}},__uW:qx.core.Variant.select(bz,{"mshtml|webkit":function(n){var o=this.__uF.body.innerHTML;
var q=n.content;
this.__uF.body.innerHTML=q;
var p=n;
p.content=o;
this.__vk(p);
return true;
},"default":function(L){this.__vk(L);
return this.__vf();
}}),__uX:qx.core.Variant.select(bz,{"mshtml|webkit":function(cR){},"default":function(bi){this.__vk(bi);
var bj=this.__vf();

if(qx.core.Variant.isSet(bz,bw)){if(this.__uY(bs,qx.bom.htmlarea.HtmlArea.EMPTY_DIV)){var bk=this.__va();
this.__vb();

if(bk!=null){this.__vc(bk);
}}}return bj;
}}),__uY:function(bn,bo){if(this.__uE.length>0){var bp=this.__uE[this.__uE.length-1];
return (bp.command==bn&&bp.value==bo);
}return false;
},__va:function(){if(this.__uC==null){return null;
}var cE=this.__uC.getSelection();
var cF=cE?cE.focusNode:null;

if(cF==null){return null;
}
try{while(cF.nodeName.toLowerCase()!=co){cF=cF.parentNode;

if(!cF||qx.dom.Node.isNodeName(cF,cd)){return null;
}}}catch(I){return null;
}
if(cF!=null&&qx.dom.Node.isNodeName(cF,co)){return cF;
}else{return null;
}},__vb:function(){var cB=this.__uE.pop();
this.__vk(cB);
this.__vf();
},__vc:qx.core.Variant.select(bz,{"gecko":function(u){if(u==this.__uC.getContentBody().lastChild){return;
}var x=u.firstChild;

while(x.firstChild){x=x.firstChild;
}var v=this.__uC.getSelection();
var w=this.__uC.getRange();

if(v&&w){w.selectNode(x);
v.addRange(w);
w.collapse(true);
}},"default":qx.lang.Function.empty}),__vd:function(K){this.__vk(K);
return this.__vf();
},__ve:qx.core.Variant.select(bz,{"mshtml|webkit":function(J){},"default":function(z){this.__vk(z);
return this.__vf();
}}),__vf:function(){try{return this.__uF.execCommand(cg,false,null);
}catch(e){return false;
}},__vg:function(){this._commands={undo:{passthrough:false},redo:{passthrough:false}};
this.__uB.getCommandObject(bq).customUndo=true;
this.__uB.getCommandObject(br).customUndo=true;

if(qx.core.Variant.isSet(bz,bw)){}},__vh:qx.core.Variant.select(bz,{"mshtml|webkit":function(M,N,O){var P=this.getUndoRedoObject();
P.commandObject=O;
P.command=M;
P.value=N;
P.actionType=bv;
P.content=this.__uF.body.innerHTML;
this.__vi(P);
},"default":function(bb,bc,bd){if(this.__uC==null){return;
}var bf=this.getUndoRedoObject();
bf.commandObject=bd;
bf.command=bb;
bf.value=bc;
bf.actionType=bv;
var be=this.__uC.getSelection();

if(bd.customUndo){var bg=[];

switch(bb){case bq:bg.push(qx.bom.element.Style.get(this.__uF.body,ct));
break;
case br:bg.push(qx.bom.element.Style.get(this.__uF.body,cq),qx.bom.element.Style.get(this.__uF.body,cp),qx.bom.element.Style.get(this.__uF.body,cn));
break;
case bG:if(be&&!be.isCollapsed){bf.actionType=by;
}break;
}bf.parameter=bg;
}else{if(qx.core.Variant.isSet(bz,bw)){if(be&&be.isCollapsed){switch(bb){case ci:case bV:case bP:case bs:case ca:bf.actionType=by;
break;
default:return;
}}else{bf.actionType=by;
}}else{bf.actionType=by;
}}this.__vi(bf);
}}),__vi:function(H){if(this.__uN){this.__vj();
}this.__vk(H);
this.__uL=false;
this.__uE=[];
this.__vp();
},__vj:function(){var cC=this.__uD[this.__uD.length-1];

if(cC==null||cC.actionType!=bu){var cD=this.getUndoRedoObject();
cD.actionType=bu;

if(qx.core.Variant.isSet(bz,bx)||qx.core.Variant.isSet(bz,cu)){cD.content=this.__uO;
cD.actionType=bv;
this.__uO=null;
}this.__vk(cD);
this.__uN=false;
}},getUndoRedoObject:function(){return {actionType:null,commandObject:null,command:null,value:null,parameter:null,range:null,marker:null,content:null};
},__vk:function(Y){if(false&&qx.core.Setting.get(bF)==bC){this.debug("ADD TO UNDO STACK");
this.debug(Y.actionType+" "+Y.command+" "+Y.value);
}this.__uD.push(Y);
},__vl:function(ba){if(false&&qx.core.Setting.get(bF)==bC){this.debug("ADD TO REDO STACK");
this.debug(ba.actionType+" "+ba.command+" "+ba.value);
}this.__uE.push(ba);
},_handleKeyPress:function(e){var cH=e.getKeyIdentifier().toLowerCase();
var cI=e.isCtrlPressed();

switch(cH){case bL:case bW:case bR:case ce:case bX:case bB:case cf:case ck:case bT:case bO:break;
case cj:case bK:case cc:case bJ:case bN:case bM:case bY:if(!cI){this.__vm();
}break;
default:this.__uL=false;
this.__uE=[];
this.__vm();
}},__vm:function(){if(!this.__uN){this.__uN=true;
this.__uM=true;
if(qx.core.Variant.isSet(bz,bx)||qx.core.Variant.isSet(bz,cu)){this.__uO=this.__uF.body.innerHTML;
}this.__vp();
}},__vn:null,_handleMouseDown:qx.core.Variant.select(bz,{"mshtml":function(e){var c=e.getOriginalTarget();

if(qx.dom.Node.isElement(c)&&(qx.dom.Node.isNodeName(c,cl)||qx.dom.Node.isNodeName(c,cr))){this.__vn={node:c,content:c.outerHTML};
}else{this.__vn=null;
}},"default":function(e){return true;
}}),_handleMouseUp:qx.core.Variant.select(bz,{"gecko":function(e){if(this.__uC==null){return;
}var k=this.__uC.getSelection();

if(!k){this.__vn=null;
return;
}var h=k.anchorNode;
var l=h.childNodes[k.anchorOffset];
if(qx.dom.Node.isNodeName(l,cl)){if(this.__vn==null){this.__vn=l.cloneNode(true);
}else{if(this.__vn.style.width!=l.style.width||this.__vn.style.height!=l.style.height){this.__vo();
this.__vn=l.cloneNode(true);
}}}else if(qx.dom.Node.isNodeName(h,cm)||qx.dom.Node.isNodeName(h.parentNode,cm)){var m=h.parentNode;

while(qx.dom.Node.isNodeName(m,cr)){m=m.parentNode;
}if(this.__vn==null){this.__vn=m.cloneNode(true);
}else{qx.event.Timer.once(function(){if(m.style.width!=this.__vn.style.width||m.style.height!=this.__vn.style.height||m.innerHTML!=this.__vn.innerHTML){this.__vo();
this.__vn=m.cloneNode(true);
}},this,0);
}}else{this.__vn=null;
}},"default":function(e){var cv=e.srcElement;

if(this.__vn!=null){if(cv.nodeType==1){if(cv==this.__vn.node){if(cv.outerHTML!=this.__vn.content){this.__vn.content=cv.outerHTML;
this.__vo();
}}else{for(var i=0,j=cv.childNodes.length;i<j;i++){if(cv.childNodes[i]==this.__vn.node){if(cv.childNodes[i].outerHTML!=this.__vn.content){this.__vn.content=cv.childNodes[i].outerHTML;
this.__vo();
}}}}}else{this.__vn=null;
}}}}),__vo:qx.core.Variant.select(bz,{"mshtml|webkit":function(){this.__vh(bt,null,null);
},"default":function(){var a=this.getUndoRedoObject();
a.actionType=bt;
this.__vk(a);
}}),__vp:function(){qx.event.Timer.once(function(e){if(this.__uC!=null){var b={undo:this.isUndoPossible()?0:-1,redo:this.isRedoPossible()?0:-1};
this.__uC.fireDataEvent(bA,b);
}},this,200);
}},destruct:function(){try{qx.event.Registration.removeListener(this.__uF.body,bE,this.__uI);
qx.event.Registration.removeListener(this.__uF,bH,this.__uJ);

if(qx.core.Variant.isSet(bz,bx)){qx.event.Registration.removeListener(this.__uF,cs,this.__uK);
}}catch(e){}this._disposeObjects(bI);
this.__uC=this.__uD=this.__uE=this._commands=this.__uF=null;
this.__uH=this.__uG=null;
}});
})();
(function(){var bb="borderTopWidth",ba="borderLeftWidth",Y="marginTop",X="marginLeft",W="scroll",V="qx.client",U="border-box",T="borderBottomWidth",S="borderRightWidth",R="auto",bq="padding",bp="qx.bom.element.Location",bo="paddingLeft",bn="static",bm="marginBottom",bl="visible",bk="BODY",bj="paddingBottom",bi="paddingTop",bh="marginRight",bf="position",bg="margin",bd="overflow",be="paddingRight",bc="border";
qx.Class.define(bp,{statics:{__hm:function(a,b){return qx.bom.element.Style.get(a,b,qx.bom.element.Style.COMPUTED_MODE,false);
},__hn:function(C,D){return parseInt(qx.bom.element.Style.get(C,D,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ho:function(bE){var bH=0,top=0;
if(bE.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bG=qx.dom.Node.getWindow(bE);
bH-=qx.bom.Viewport.getScrollLeft(bG);
top-=qx.bom.Viewport.getScrollTop(bG);
}else{var bF=qx.dom.Node.getDocument(bE).body;
bE=bE.parentNode;
while(bE&&bE!=bF){bH+=bE.scrollLeft;
top+=bE.scrollTop;
bE=bE.parentNode;
}}return {left:bH,top:top};
},__hp:qx.core.Variant.select(V,{"mshtml":function(bt){var bv=qx.dom.Node.getDocument(bt);
var bu=bv.body;
var bw=0;
var top=0;
bw-=bu.clientLeft+bv.documentElement.clientLeft;
top-=bu.clientTop+bv.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bw+=this.__hn(bu,ba);
top+=this.__hn(bu,bb);
}return {left:bw,top:top};
},"webkit":function(o){var q=qx.dom.Node.getDocument(o);
var p=q.body;
var r=p.offsetLeft;
var top=p.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){r+=this.__hn(p,ba);
top+=this.__hn(p,bb);
}return {left:r,top:top};
},"gecko":function(E){var F=qx.dom.Node.getDocument(E).body;
var G=F.offsetLeft;
var top=F.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){G+=this.__hn(F,X);
top+=this.__hn(F,Y);
}if(qx.bom.element.BoxSizing.get(F)!==U){G+=this.__hn(F,ba);
top+=this.__hn(F,bb);
}return {left:G,top:top};
},"default":function(bz){var bA=qx.dom.Node.getDocument(bz).body;
var bB=bA.offsetLeft;
var top=bA.offsetTop;
return {left:bB,top:top};
}}),__hq:qx.core.Variant.select(V,{"mshtml|webkit":function(M){var O=qx.dom.Node.getDocument(M);
if(M.getBoundingClientRect){var P=M.getBoundingClientRect();
var Q=P.left;
var top=P.top;
}else{var Q=M.offsetLeft;
var top=M.offsetTop;
M=M.offsetParent;
var N=O.body;
while(M&&M!=N){Q+=M.offsetLeft;
top+=M.offsetTop;
Q+=this.__hn(M,ba);
top+=this.__hn(M,bb);
M=M.offsetParent;
}}return {left:Q,top:top};
},"gecko":function(bL){if(bL.getBoundingClientRect){var bO=bL.getBoundingClientRect();
var bP=Math.round(bO.left);
var top=Math.round(bO.top);
}else{var bP=0;
var top=0;
var bM=qx.dom.Node.getDocument(bL).body;
var bN=qx.bom.element.BoxSizing;

if(bN.get(bL)!==U){bP-=this.__hn(bL,ba);
top-=this.__hn(bL,bb);
}
while(bL&&bL!==bM){bP+=bL.offsetLeft;
top+=bL.offsetTop;
if(bN.get(bL)!==U){bP+=this.__hn(bL,ba);
top+=this.__hn(bL,bb);
}if(bL.parentNode&&this.__hm(bL.parentNode,bd)!=bl){bP+=this.__hn(bL.parentNode,ba);
top+=this.__hn(bL.parentNode,bb);
}bL=bL.offsetParent;
}}return {left:bP,top:top};
},"default":function(J){var L=0;
var top=0;
var K=qx.dom.Node.getDocument(J).body;
while(J&&J!==K){L+=J.offsetLeft;
top+=J.offsetTop;
J=J.offsetParent;
}return {left:L,top:top};
}}),get:function(c,d){if(c.tagName==bk){var location=this.__hr(c);
var k=location.left;
var top=location.top;
}else{var e=this.__hp(c);
var j=this.__hq(c);
var scroll=this.__ho(c);
var k=j.left+e.left-scroll.left;
var top=j.top+e.top-scroll.top;
}var f=k+c.offsetWidth;
var g=top+c.offsetHeight;

if(d){if(d==bq||d==W){var h=qx.bom.element.Overflow.getX(c);

if(h==W||h==R){f+=c.scrollWidth-c.offsetWidth+this.__hn(c,ba)+this.__hn(c,S);
}var i=qx.bom.element.Overflow.getY(c);

if(i==W||i==R){g+=c.scrollHeight-c.offsetHeight+this.__hn(c,bb)+this.__hn(c,T);
}}
switch(d){case bq:k+=this.__hn(c,bo);
top+=this.__hn(c,bi);
f-=this.__hn(c,be);
g-=this.__hn(c,bj);
case W:k-=c.scrollLeft;
top-=c.scrollTop;
f-=c.scrollLeft;
g-=c.scrollTop;
case bc:k+=this.__hn(c,ba);
top+=this.__hn(c,bb);
f-=this.__hn(c,S);
g-=this.__hn(c,T);
break;
case bg:k-=this.__hn(c,X);
top-=this.__hn(c,Y);
f+=this.__hn(c,bh);
g+=this.__hn(c,bm);
break;
}}return {left:k,top:top,right:f,bottom:g};
},__hr:qx.core.Variant.select(V,{"default":function(br){var top=br.offsetTop+this.__hn(br,Y);
var bs=br.offsetLeft+this.__hn(br,X);
return {left:bs,top:top};
},"mshtml":function(l){var top=l.offsetTop;
var m=l.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__hn(l,Y);
m+=this.__hn(l,X);
}return {left:m,top:top};
},"gecko":function(bC){var top=bC.offsetTop+this.__hn(bC,Y)+this.__hn(bC,ba);
var bD=bC.offsetLeft+this.__hn(bC,X)+this.__hn(bC,bb);
return {left:bD,top:top};
}}),getLeft:function(s,t){return this.get(s,t).left;
},getTop:function(bx,by){return this.get(bx,by).top;
},getRight:function(H,I){return this.get(H,I).right;
},getBottom:function(u,v){return this.get(u,v).bottom;
},getRelative:function(w,x,y,z){var B=this.get(w,y);
var A=this.get(x,z);
return {left:B.left-A.left,top:B.top-A.top,right:B.right-A.right,bottom:B.bottom-A.bottom};
},getPosition:function(n){return this.getRelative(n,this.getOffsetParent(n));
},getOffsetParent:function(bI){var bK=bI.offsetParent||document.body;
var bJ=qx.bom.element.Style;

while(bK&&(!/^body|html$/i.test(bK.tagName)&&bJ.get(bK,bf)===bn)){bK=bK.offsetParent;
}return bK;
}}});
})();
(function(){var o="mshtml",n="pop.push.reverse.shift.sort.splice.unshift.join.slice",m="number",l="qx.type.BaseArray",k="qx.client",j=".";
qx.Class.define(l,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function h(a){if(qx.core.Variant.isSet(k,o)){g.prototype={length:0,$$isArray:true};
var d=n.split(j);

for(var length=d.length;length;){g.prototype[d[--length]]=Array.prototype[d[length]];
}}var e=Array.prototype.slice;
g.prototype.concat=function(){var q=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var p;

if(arguments[i] instanceof g){p=e.call(arguments[i],0);
}else if(arguments[i] instanceof Array){p=arguments[i];
}else{p=[arguments[i]];
}q.push.apply(q,p);
}return q;
};
g.prototype.toString=function(){return e.call(this,0).toString();
};
g.prototype.toLocaleString=function(){return e.call(this,0).toLocaleString();
};
g.prototype.constructor=g;
g.prototype.indexOf=qx.lang.Core.arrayIndexOf;
g.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
g.prototype.forEach=qx.lang.Core.arrayForEach;
g.prototype.some=qx.lang.Core.arraySome;
g.prototype.every=qx.lang.Core.arrayEvery;
var b=qx.lang.Core.arrayFilter;
var c=qx.lang.Core.arrayMap;
g.prototype.filter=function(){var u=new this.constructor;
u.push.apply(u,b.apply(this,arguments));
return u;
};
g.prototype.map=function(){var t=new this.constructor;
t.push.apply(t,c.apply(this,arguments));
return t;
};
g.prototype.slice=function(){var r=new this.constructor;
r.push.apply(r,Array.prototype.slice.apply(this,arguments));
return r;
};
g.prototype.splice=function(){var s=new this.constructor;
s.push.apply(s,Array.prototype.splice.apply(this,arguments));
return s;
};
g.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
g.prototype.valueOf=function(){return this.length;
};
return g;
}function g(length){if(arguments.length===1&&typeof length===m){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function f(){}f.prototype=[];
g.prototype=new f;
g.prototype.length=0;
qx.type.BaseArray=h(g);
})();
})();
(function(){var w="change",v="input",u="qx.client",t="text",s="password",r="checkbox",q="radio",p="textarea",n="keypress",m="opera",d="propertychange",k="blur",h="keydown",c="keyup",b="select-multiple",g="checked",f="value",j="select",a="qx.event.handler.Input";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(u,m)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__lo:false,__lp:null,__lq:null,canHandleEvent:function(O,P){var Q=O.tagName.toLowerCase();

if(P===v&&(Q===v||Q===p)){return true;
}
if(P===w&&(Q===v||Q===p||Q===j)){return true;
}return false;
},registerEvent:qx.core.Variant.select(u,{"mshtml":function(I,J,K){if(!I.__lr){var L=I.tagName.toLowerCase();
var M=I.type;

if(M===t||M===s||L===p||M===r||M===q){qx.bom.Event.addNativeListener(I,d,this._onPropertyWrapper);
}
if(M!==r&&M!==q){qx.bom.Event.addNativeListener(I,w,this._onChangeValueWrapper);
}
if(M===t||M===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,I);
qx.bom.Event.addNativeListener(I,n,this._onKeyPressWrapped);
}I.__lr=true;
}},"default":function(bc,bd,be){if(bd===v){this.__ls(bc);
}else if(bd===w){if(bc.type===q||bc.type===r){qx.bom.Event.addNativeListener(bc,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(bc,w,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(u,m)){if(bc.type===t||bc.type===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,bc);
qx.bom.Event.addNativeListener(bc,n,this._onKeyPressWrapped);
}}}}}),__ls:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(R){var S=R.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&S==p){qx.bom.Event.addNativeListener(R,n,this._onInputWrapper);
}qx.bom.Event.addNativeListener(R,v,this._onInputWrapper);
},"opera":function(bf){qx.bom.Event.addNativeListener(bf,c,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(bf,h,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(bf,k,this._onBlurWrapper);
qx.bom.Event.addNativeListener(bf,v,this._onInputWrapper);
},"default":function(bb){qx.bom.Event.addNativeListener(bb,v,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(u,{"mshtml":function(E,F){if(E.__lr){var G=E.tagName.toLowerCase();
var H=E.type;

if(H===t||H===s||G===p||H===r||H===q){qx.bom.Event.removeNativeListener(E,d,this._onPropertyWrapper);
}
if(H!==r&&H!==q){qx.bom.Event.removeNativeListener(E,w,this._onChangeValueWrapper);
}
if(H===t||H===s){qx.bom.Event.removeNativeListener(E,n,this._onKeyPressWrapped);
}
try{delete E.__lr;
}catch(X){E.__lr=null;
}}},"default":function(T,U){if(U===v){this.__ls(T);
}else if(U===w){if(T.type===q||T.type===r){qx.bom.Event.removeNativeListener(T,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(T,w,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(u,m)){if(T.type===t||T.type===s){qx.bom.Event.removeNativeListener(T,n,this._onKeyPressWrapped);
}}}}),__lt:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(A){var B=A.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&B==p){qx.bom.Event.removeNativeListener(A,n,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(A,v,this._onInputWrapper);
},"opera":function(z){qx.bom.Event.removeNativeListener(z,c,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(z,h,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(z,k,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(z,v,this._onInputWrapper);
},"default":function(x){qx.bom.Event.removeNativeListener(x,v,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(u,{"mshtml|opera":function(e,N){if(e.keyCode===13){if(N.value!==this.__lq){this.__lq=N.value;
qx.event.Registration.fireEvent(N,w,qx.event.type.Data,[N.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__lo=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__lo=false;
}},"default":null}),_onBlur:qx.core.Variant.select(u,{"opera":function(e){if(this.__lp){window.clearTimeout(this.__lp);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var C=e.target;
if(!this.__lo){if(qx.core.Variant.isSet(u,m)){this.__lp=window.setTimeout(function(){qx.event.Registration.fireEvent(C,v,qx.event.type.Data,[C.value]);
},0);
}else{qx.event.Registration.fireEvent(C,v,qx.event.type.Data,[C.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var ba=e.target||e.srcElement;
var Y=ba.value;

if(ba.type===b){var Y=[];

for(var i=0,o=ba.options,l=o.length;i<l;i++){if(o[i].selected){Y.push(o[i].value);
}}}qx.event.Registration.fireEvent(ba,w,qx.event.type.Data,[Y]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var D=e.target;

if(D.type===q){if(D.checked){qx.event.Registration.fireEvent(D,w,qx.event.type.Data,[D.value]);
}}else{qx.event.Registration.fireEvent(D,w,qx.event.type.Data,[D.checked]);
}}),_onProperty:qx.core.Variant.select(u,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var V=e.target||e.srcElement;
var W=e.propertyName;

if(W===f&&(V.type===t||V.type===s||V.tagName.toLowerCase()===p)){if(!V.__inValueSet){qx.event.Registration.fireEvent(V,v,qx.event.type.Data,[V.value]);
}}else if(W===g){if(V.type===r){qx.event.Registration.fireEvent(V,w,qx.event.type.Data,[V.checked]);
}else if(V.checked){qx.event.Registration.fireEvent(V,w,qx.event.type.Data,[V.value]);
}}}),"default":function(){}})},defer:function(y){qx.event.Registration.addHandler(y);
}});
})();
(function(){var H="",G="select",F="soft",E="off",D="qx.client",C="wrap",B="text",A="mshtml",z="number",y="checkbox",r="select-one",x="input",u="option",q="value",p="radio",t="qx.bom.Input",s="nowrap",v="textarea",o="auto",w="normal";
qx.Class.define(t,{statics:{__lu:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(K,L,M){{};
var L=L?qx.lang.Object.clone(L):{};
var N;

if(K===v||K===G){N=K;
}else{N=x;
L.type=K;
}return qx.bom.Element.create(N,L,M);
},setValue:function(S,T){var Y=S.nodeName.toLowerCase();
var V=S.type;
var Array=qx.lang.Array;
var ba=qx.lang.Type;

if(typeof T===z){T+=H;
}
if((V===y||V===p)){if(ba.isArray(T)){S.checked=Array.contains(T,S.value);
}else{S.checked=S.value==T;
}}else if(Y===G){var U=ba.isArray(T);
var bb=S.options;
var W,X;

for(var i=0,l=bb.length;i<l;i++){W=bb[i];
X=W.getAttribute(q);

if(X==null){X=W.text;
}W.selected=U?Array.contains(T,X):T==X;
}
if(U&&T.length==0){S.selectedIndex=-1;
}}else if(V===B&&qx.core.Variant.isSet(D,A)){S.__lv=true;
S.value=T;
S.__lv=null;
}else{S.value=T;
}},getValue:function(c){var j=c.nodeName.toLowerCase();

if(j===u){return (c.attributes.value||{}).specified?c.value:c.text;
}
if(j===G){var d=c.selectedIndex;
if(d<0){return null;
}var k=[];
var n=c.options;
var m=c.type==r;
var h=qx.bom.Input;
var g;
for(var i=m?d:0,f=m?d+1:n.length;i<f;i++){var e=n[i];

if(e.selected){g=h.getValue(e);
if(m){return g;
}k.push(g);
}}return k;
}else{return (c.value||H).replace(/\r/g,H);
}},setWrap:qx.core.Variant.select(D,{"mshtml":function(a,b){a.wrap=b?F:E;
},"gecko|webkit":function(O,P){var R=P?F:E;
var Q=P?H:o;
O.setAttribute(C,R);
O.style.overflow=Q;
},"default":function(I,J){I.style.whiteSpace=J?w:s;
}})}});
})();
(function(){var ec="",eb="string",ea="div",dY="previousSibling",dX="*",dW="href",dV="e",dU="[object Array]",dT="Syntax error, unrecognized expression: ",dS="HTML",eJ="text",eI="file",eH="+",eG="'/>",eF="CLASS",eE="radio",eD="script",eC="className",eB="BUTTON",eA="TAG",ej="password",ek="htmlFor",eh="reset",ei="<a href='#'></a>",ef="<a name='",eg="#",ed="qx.bom.Selector",ee="button",el="parentNode",em="NAME",es="number",er="submit",eu="image",et="<div class='test e'></div><div class='test'></div>",ew="~",ev="checkbox",eo="sourceIndex",ez="\\",ey="hidden",ex=".TEST",en="<p class='TEST'></p>",ep="undefined",eq="ID";
qx.Class.define(ed,{statics:{query:null,matches:null}});
(function(){var dv=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,dD=0,dz=Object.prototype.toString,dx=false,dF=true;
var dq=[0,0];
dq.sort(function(){dF=false;
return 0;
});
var dr=function(bM,bN,bO,bP){bO=bO||[];
var bY=bN=bN||document;

if(bN.nodeType!==1&&bN.nodeType!==9){return [];
}
if(!bM||typeof bM!==eb){return bO;
}var bV=[],m,bS,bQ,cb,bU,bT=true,bR=dw(bN),bX=bM;
while((dv.exec(ec),m=dv.exec(bX))!==null){bX=m[3];
bV.push(m[1]);

if(m[2]){bU=m[3];
break;
}}
if(bV.length>1&&dy.exec(bM)){if(bV.length===2&&dt.relative[bV[0]]){bS=ds(bV[0]+bV[1],bN);
}else{bS=dt.relative[bV[0]]?[bN]:dr(bV.shift(),bN);

while(bV.length){bM=bV.shift();

if(dt.relative[bM])bM+=bV.shift();
bS=ds(bM,bS);
}}}else{if(!bP&&bV.length>1&&bN.nodeType===9&&!bR&&dt.match.ID.test(bV[0])&&!dt.match.ID.test(bV[bV.length-1])){var bW=dr.find(bV.shift(),bN,bR);
bN=bW.expr?dr.filter(bW.expr,bW.set)[0]:bW.set[0];
}
if(bN){var bW=bP?
{expr:bV.pop(),set:dp(bP)}:dr.find(bV.pop(),bV.length===1&&(bV[0]===ew||bV[0]===eH)&&bN.parentNode?bN.parentNode:bN,bR);
bS=bW.expr?dr.filter(bW.expr,bW.set):bW.set;

if(bV.length>0){bQ=dp(bS);
}else{bT=false;
}
while(bV.length){var cc=bV.pop(),ca=cc;

if(!dt.relative[cc]){cc=ec;
}else{ca=bV.pop();
}
if(ca==null){ca=bN;
}dt.relative[cc](bQ,ca,bR);
}}else{bQ=bV=[];
}}
if(!bQ){bQ=bS;
}
if(!bQ){throw dT+(cc||bM);
}
if(dz.call(bQ)===dU){if(!bT){bO.push.apply(bO,bQ);
}else if(bN&&bN.nodeType===1){for(var i=0;bQ[i]!=null;i++){if(bQ[i]&&(bQ[i]===true||bQ[i].nodeType===1&&du(bN,bQ[i]))){bO.push(bS[i]);
}}}else{for(var i=0;bQ[i]!=null;i++){if(bQ[i]&&bQ[i].nodeType===1){bO.push(bS[i]);
}}}}else{dp(bQ,bO);
}
if(bU){dr(bU,bY,bO,bP);
dr.uniqueSort(bO);
}return bO;
};
dr.uniqueSort=function(E){if(dA){dx=dF;
E.sort(dA);

if(dx){for(var i=1;i<E.length;i++){if(E[i]===E[i-1]){E.splice(i--,1);
}}}}return E;
};
dr.matches=function(cq,cr){return dr(cq,null,null,cr);
};
dr.find=function(U,V,W){var X,ba;

if(!U){return [];
}
for(var i=0,l=dt.order.length;i<l;i++){var Y=dt.order[i],ba;

if((ba=dt.leftMatch[Y].exec(U))){var bb=ba[1];
ba.splice(1,1);

if(bb.substr(bb.length-1)!==ez){ba[1]=(ba[1]||ec).replace(/\\/g,ec);
X=dt.find[Y](ba,V,W);

if(X!=null){U=U.replace(dt.match[Y],ec);
break;
}}}}
if(!X){X=V.getElementsByTagName(dX);
}return {set:X,expr:U};
};
dr.filter=function(fg,fh,fi,fj){var fk=fg,fp=[],fl=fh,fu,ft,fm=fh&&fh[0]&&dw(fh[0]);

while(fg&&fh.length){for(var fs in dt.filter){if((fu=dt.match[fs].exec(fg))!=null){var fn=dt.filter[fs],fr,fo;
ft=false;

if(fl==fp){fp=[];
}
if(dt.preFilter[fs]){fu=dt.preFilter[fs](fu,fl,fi,fp,fj,fm);

if(!fu){ft=fr=true;
}else if(fu===true){continue;
}}
if(fu){for(var i=0;(fo=fl[i])!=null;i++){if(fo){fr=fn(fo,fu,i,fl);
var fq=fj^!!fr;

if(fi&&fr!=null){if(fq){ft=true;
}else{fl[i]=false;
}}else if(fq){fp.push(fo);
ft=true;
}}}}
if(fr!==undefined){if(!fi){fl=fp;
}fg=fg.replace(dt.match[fs],ec);

if(!ft){return [];
}break;
}}}if(fg==fk){if(ft==null){throw dT+fg;
}else{break;
}}fk=fg;
}return fl;
};
var dt=dr.selectors={order:[eq,em,eA],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":eC,"for":ek},attrHandle:{href:function(cd){return cd.getAttribute(dW);
}},relative:{"+":function(w,x,y){var z=typeof x===eb,B=z&&!/\W/.test(x),C=z&&!B;

if(B&&!y){x=x.toUpperCase();
}
for(var i=0,l=w.length,A;i<l;i++){if((A=w[i])){while((A=A.previousSibling)&&A.nodeType!==1){}w[i]=C||A&&A.nodeName===x?A||false:A===x;
}}
if(C){dr.filter(x,w,true);
}},">":function(fC,fD,fE){var fF=typeof fD===eb;

if(fF&&!/\W/.test(fD)){fD=fE?fD:fD.toUpperCase();

for(var i=0,l=fC.length;i<l;i++){var fG=fC[i];

if(fG){var parent=fG.parentNode;
fC[i]=parent.nodeName===fD?parent:false;
}}}else{for(var i=0,l=fC.length;i<l;i++){var fG=fC[i];

if(fG){fC[i]=fF?fG.parentNode:fG.parentNode===fD;
}}
if(fF){dr.filter(fD,fC,true);
}}},"":function(I,J,K){var L=dD++,M=dE;

if(!/\W/.test(J)){var N=J=K?J:J.toUpperCase();
M=dG;
}M(el,J,L,I,N,K);
},"~":function(bc,bd,be){var bf=dD++,bg=dE;

if(typeof bd===eb&&!/\W/.test(bd)){var bh=bd=be?bd:bd.toUpperCase();
bg=dG;
}bg(dY,bd,bf,bc,bh,be);
}},find:{ID:function(cm,cn,co){if(typeof cn.getElementById!=="undefined"&&!co){var m=cn.getElementById(cm[1]);
return m?[m]:[];
}},NAME:function(fH,fI,fJ){if(typeof fI.getElementsByName!=="undefined"){var fL=[],fK=fI.getElementsByName(fH[1]);

for(var i=0,l=fK.length;i<l;i++){if(fK[i].getAttribute("name")===fH[1]){fL.push(fK[i]);
}}return fL.length===0?null:fL;
}},TAG:function(dJ,dK){return dK.getElementsByTagName(dJ[1]);
}},preFilter:{CLASS:function(cK,cL,cM,cN,cO,cP){cK=" "+cK[1].replace(/\\/g,"")+" ";

if(cP){return cK;
}
for(var i=0,cQ;(cQ=cL[i])!=null;i++){if(cQ){if(cO^(cQ.className&&(" "+cQ.className+" ").indexOf(cK)>=0)){if(!cM)cN.push(cQ);
}else if(cM){cL[i]=false;
}}}return false;
},ID:function(fv){return fv[1].replace(/\\/g,"");
},TAG:function(dO,dP){for(var i=0;dP[i]===false;i++){}return dP[i]&&dw(dP[i])?dO[1]:dO[1].toUpperCase();
},CHILD:function(eO){if(eO[1]=="nth"){var eP=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(eO[2]=="even"&&"2n"||eO[2]=="odd"&&"2n+1"||!/\D/.test(eO[2])&&"0n+"+eO[2]||eO[2]);
eO[2]=(eP[1]+(eP[2]||1))-0;
eO[3]=eP[3]-0;
}eO[0]=dD++;
return eO;
},ATTR:function(dh,di,dj,dk,dl,dm){var name=dh[1].replace(/\\/g,"");

if(!dm&&dt.attrMap[name]){dh[1]=dt.attrMap[name];
}
if(dh[2]==="~="){dh[4]=" "+dh[4]+" ";
}return dh;
},PSEUDO:function(cE,cF,cG,cH,cI){if(cE[1]==="not"){if((dv.exec(cE[3])||"").length>1||/^\w/.test(cE[3])){cE[3]=dr(cE[3],null,null,cF);
}else{var cJ=dr.filter(cE[3],cF,cG,true^cI);

if(!cG){cH.push.apply(cH,cJ);
}return false;
}}else if(dt.match.POS.test(cE[0])||dt.match.CHILD.test(cE[0])){return true;
}return cE;
},POS:function(P){P.unshift(true);
return P;
}},filters:{enabled:function(dL){return dL.disabled===false&&dL.type!==ey;
},disabled:function(fa){return fa.disabled===true;
},checked:function(D){return D.checked===true;
},selected:function(eY){eY.parentNode.selectedIndex;
return eY.selected===true;
},parent:function(Q){return !!Q.firstChild;
},empty:function(ck){return !ck.firstChild;
},has:function(F,i,G){return !!dr(G[3],F).length;
},header:function(H){return /h\d/i.test(H.nodeName);
},text:function(fB){return eJ===fB.type;
},radio:function(T){return eE===T.type;
},checkbox:function(cl){return ev===cl.type;
},file:function(fA){return eI===fA.type;
},password:function(bA){return ej===bA.type;
},submit:function(r){return er===r.type;
},image:function(ff){return eu===ff.type;
},reset:function(bL){return eh===bL.type;
},button:function(q){return ee===q.type||q.nodeName.toUpperCase()===eB;
},input:function(bz){return /input|select|textarea|button/i.test(bz.nodeName);
}},setFilters:{first:function(O,i){return i===0;
},last:function(ce,i,cf,cg){return i===cg.length-1;
},even:function(eW,i){return i%2===0;
},odd:function(dn,i){return i%2===1;
},lt:function(cx,i,cy){return i<cy[3]-0;
},gt:function(bo,i,bp){return i>bp[3]-0;
},nth:function(R,i,S){return S[3]-0==i;
},eq:function(cW,i,cX){return cX[3]-0==i;
}},filter:{PSEUDO:function(cz,cA,i,cB){var name=cA[1],cC=dt.filters[name];

if(cC){return cC(cz,i,cA,cB);
}else if(name==="contains"){return (cz.textContent||cz.innerText||"").indexOf(cA[3])>=0;
}else if(name==="not"){var cD=cA[3];

for(var i=0,l=cD.length;i<l;i++){if(cD[i]===cz){return false;
}}return true;
}},CHILD:function(bq,br){var bx=br[1],bs=bq;

switch(bx){case 'only':case 'first':while((bs=bs.previousSibling)){if(bs.nodeType===1)return false;
}
if(bx=='first')return true;
bs=bq;
case 'last':while((bs=bs.nextSibling)){if(bs.nodeType===1)return false;
}return true;
case 'nth':var by=br[2],bu=br[3];

if(by==1&&bu==0){return true;
}var bw=br[0],parent=bq.parentNode;

if(parent&&(parent.sizcache!==bw||!bq.nodeIndex)){var bt=0;

for(bs=parent.firstChild;bs;bs=bs.nextSibling){if(bs.nodeType===1){bs.nodeIndex=++bt;
}}parent.sizcache=bw;
}var bv=bq.nodeIndex-bu;

if(by==0){return bv==0;
}else{return (bv%by==0&&bv/by>=0);
}}},ID:function(dM,dN){return dM.nodeType===1&&dM.getAttribute("id")===dN;
},TAG:function(cv,cw){return (cw==="*"&&cv.nodeType===1)||cv.nodeName===cw;
},CLASS:function(cR,cS){return (" "+(cR.className||cR.getAttribute("class"))+" ").indexOf(cS)>-1;
},ATTR:function(eQ,eR){var name=eR[1],eV=dt.attrHandle[name]?dt.attrHandle[name](eQ):eQ[name]!=null?eQ[name]:eQ.getAttribute(name),eU=eV+"",eT=eR[2],eS=eR[4];
return eV==null?eT==="!=":eT==="="?eU===eS:eT==="*="?eU.indexOf(eS)>=0:eT==="~="?(" "+eU+" ").indexOf(eS)>=0:!eS?eU&&eV!==false:eT==="!="?eU!=eS:eT==="^="?eU.indexOf(eS)===0:eT==="$="?eU.substr(eU.length-eS.length)===eS:eT==="|="?eU===eS||eU.substr(0,eS.length+1)===eS+"-":false;
},POS:function(s,t,i,u){var name=t[2],v=dt.setFilters[name];

if(v){return v(s,i,t,u);
}}}};
var dy=dt.match.POS;

for(var dC in dt.match){dt.match[dC]=new RegExp(dt.match[dC].source+/(?![^\[]*\])(?![^\(]*\))/.source);
dt.leftMatch[dC]=new RegExp(/(^(?:.|\r|\n)*?)/.source+dt.match[dC].source);
}var dp=function(dH,dI){dH=Array.prototype.slice.call(dH,0);

if(dI){dI.push.apply(dI,dH);
return dI;
}return dH;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0);
}catch(e){dp=function(bi,bj){var bk=bj||[];

if(dz.call(bi)===dU){Array.prototype.push.apply(bk,bi);
}else{if(typeof bi.length===es){for(var i=0,l=bi.length;i<l;i++){bk.push(bi[i]);
}}else{for(var i=0;bi[i];i++){bk.push(bi[i]);
}}}return bk;
};
}var dA;

if(document.documentElement.compareDocumentPosition){dA=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){dx=true;
}return 0;
}var bB=a.compareDocumentPosition(b)&4?-1:a===b?0:1;

if(bB===0){dx=true;
}return bB;
};
}else if(eo in document.documentElement){dA=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){dx=true;
}return 0;
}var cp=a.sourceIndex-b.sourceIndex;

if(cp===0){dx=true;
}return cp;
};
}else if(document.createRange){dA=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){dx=true;
}return 0;
}var fx=a.ownerDocument.createRange(),fy=b.ownerDocument.createRange();
fx.setStart(a,0);
fx.setEnd(a,0);
fy.setStart(b,0);
fy.setEnd(b,0);
var fw=fx.compareBoundaryPoints(Range.START_TO_END,fy);

if(fw===0){dx=true;
}return fw;
};
}(function(){var cu=document.createElement(ea),ct=eD+(new Date).getTime();
cu.innerHTML=ef+ct+eG;
var cs=document.documentElement;
cs.insertBefore(cu,cs.firstChild);
if(!!document.getElementById(ct)){dt.find.ID=function(ch,ci,cj){if(typeof ci.getElementById!=="undefined"&&!cj){var m=ci.getElementById(ch[1]);
return m?m.id===ch[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===ch[1]?[m]:undefined:[];
}};
dt.filter.ID=function(cT,cU){var cV=typeof cT.getAttributeNode!=="undefined"&&cT.getAttributeNode("id");
return cT.nodeType===1&&cV&&cV.nodeValue===cU;
};
}cs.removeChild(cu);
cs=cu=null;
})();
(function(){var fP=document.createElement(ea);
fP.appendChild(document.createComment(ec));
if(fP.getElementsByTagName(dX).length>0){dt.find.TAG=function(fb,fc){var fe=fc.getElementsByTagName(fb[1]);
if(fb[1]==="*"){var fd=[];

for(var i=0;fe[i];i++){if(fe[i].nodeType===1){fd.push(fe[i]);
}}fe=fd;
}return fe;
};
}fP.innerHTML=ei;

if(fP.firstChild&&typeof fP.firstChild.getAttribute!==ep&&fP.firstChild.getAttribute(dW)!==eg){dt.attrHandle.href=function(fz){return fz.getAttribute(dW,2);
};
}fP=null;
})();

if(document.querySelectorAll)(function(){var bm=dr,bl=document.createElement(ea);
bl.innerHTML=en;
if(bl.querySelectorAll&&bl.querySelectorAll(ex).length===0){return;
}dr=function(eK,eL,eM,eN){eL=eL||document;
if(!eN&&eL.nodeType===9&&!dw(eL)){try{return dp(eL.querySelectorAll(eK),eM);
}catch(e){}}return bm(eK,eL,eM,eN);
};

for(var bn in bm){dr[bn]=bm[bn];
}bl=null;
})();

if(document.getElementsByClassName&&document.documentElement.getElementsByClassName)(function(){var eX=document.createElement(ea);
eX.innerHTML=et;
if(eX.getElementsByClassName(dV).length===0)return;
eX.lastChild.className=dV;

if(eX.getElementsByClassName(dV).length===1)return;
dt.order.splice(1,0,eF);
dt.find.CLASS=function(fM,fN,fO){if(typeof fN.getElementsByClassName!=="undefined"&&!fO){return fN.getElementsByClassName(fM[1]);
}};
eX=null;
})();
function dG(d,f,g,h,j,k){var n=d==dY&&!k;

for(var i=0,l=h.length;i<l;i++){var p=h[i];

if(p){if(n&&p.nodeType===1){p.sizcache=g;
p.sizset=i;
}p=p[d];
var o=false;

while(p){if(p.sizcache===g){o=h[p.sizset];
break;
}
if(p.nodeType===1&&!k){p.sizcache=g;
p.sizset=i;
}
if(p.nodeName===f){o=p;
break;
}p=p[d];
}h[i]=o;
}}}function dE(bC,bD,bE,bF,bG,bH){var bI=bC==dY&&!bH;

for(var i=0,l=bF.length;i<l;i++){var bK=bF[i];

if(bK){if(bI&&bK.nodeType===1){bK.sizcache=bE;
bK.sizset=i;
}bK=bK[bC];
var bJ=false;

while(bK){if(bK.sizcache===bE){bJ=bF[bK.sizset];
break;
}
if(bK.nodeType===1){if(!bH){bK.sizcache=bE;
bK.sizset=i;
}
if(typeof bD!==eb){if(bK===bD){bJ=true;
break;
}}else if(dr.filter(bD,[bK]).length>0){bJ=bK;
break;
}}bK=bK[bC];
}bF[i]=bJ;
}}}var du=document.compareDocumentPosition?
function(a,b){return a.compareDocumentPosition(b)&16;
}:
function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
var dw=function(c){return c.nodeType===9&&c.documentElement.nodeName!==dS||!!c.ownerDocument&&c.ownerDocument.documentElement.nodeName!==dS;
};
var ds=function(cY,da){var dc=[],db=ec,de,dd=da.nodeType?[da]:da;
while((de=dt.match.PSEUDO.exec(cY))){db+=de[0];
cY=cY.replace(dt.match.PSEUDO,ec);
}cY=dt.relative[cY]?cY+dX:cY;

for(var i=0,l=dd.length;i<l;i++){dr(cY,dd[i],dc);
}return dr.filter(db,dc);
};
var dB=qx.bom.Selector;
dB.query=function(dQ,dR){return dr(dQ,dR);
};
dB.matches=function(df,dg){return dr(df,null,null,dg);
};
})();
})();
(function(){var f="(\\s|$)",e="(^|\\s)",d="",c="qx.bom.element.Class",b=" ",a="$2";
qx.Class.define(c,{statics:{add:function(i,name){if(!this.has(i,name)){i.className+=(i.className?b:d)+name;
}return name;
},get:function(j){return j.className;
},has:function(g,name){var h=new RegExp(e+name+f);
return h.test(g.className);
},remove:function(k,name){var l=new RegExp(e+name+f);
k.className=k.className.replace(l,a);
return name;
},replace:function(m,n,o){this.remove(m,n);
return this.add(m,o);
},toggle:function(p,name,q){if(q==null){q=!this.has(p,name);
}q?this.add(p,name):this.remove(p,name);
return name;
}}});
})();
(function(){var cL="get",cK="set",cJ="reset",cI=":not(",cH="getValue",cG="append",cF=")",cE="getPreviousSiblings",cD="getOffsetParent",cC="qx.bom.Collection",dk="setValue",dj="prepend",di="string",dh="getAncestors",dg="#",df="remove",de=">*",dd="add",dc="*",db="",cS="addListener",cT="has",cQ="toggle",cR="getSiblings",cO="replace",cP="after",cM="replaceWith",cN="setCss",cU="setStyles",cV="before",cX="getNextSiblings",cW="getPosition",da="getCss",cY="removeListener";
(function(){var w=function(cs,ct){return function(bh,bi,bj,bk,bl,bm){var length=this.length;

if(length>0){var bn=cs[ct];

for(var i=0;i<length;i++){if(this[i].nodeType===1){bn.call(cs,this[i],bh,bi,bj,bk,bl,bm);
}}}return this;
};
};
var v=function(bB,bC){return function(n,o,p,q,r,s){if(this.length>0){var t=this[0].nodeType===1?bB[bC](this[0],n,o,p,q,r,s):null;

if(t&&t.nodeType){return this.__rQ([t]);
}else{return t;
}}return null;
};
};
qx.Class.define(cC,{extend:qx.type.BaseArray,statics:{query:function(ba,bb){var bc=qx.bom.Selector.query(ba,bb);
return qx.lang.Array.cast(bc,qx.bom.Collection);
},id:function(dn){var dp=document.getElementById(dn);
if(dp&&dp.id!=dn){return qx.bom.Collection.query(dg+dn);
}return new qx.bom.Collection(dp);
},html:function(bK,bL){var bM=qx.bom.Html.clean([bK],bL);
return qx.lang.Array.cast(bM,qx.bom.Collection);
},__rM:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(f,g){var k=qx.bom.Collection;
if(f.nodeType){return new k(f);
}else if(typeof f===di){var h=k.__rM.exec(f);

if(h){return h[1]?k.html(h[1],g):k.id(h[3].substring(1));
}else{return k.query(f,g);
}}else{return qx.lang.Array.cast(f,qx.bom.Collection);
}}},members:{__rN:null,setAttribute:w(qx.bom.element.Attribute,cK),resetAttribute:w(qx.bom.element.Attribute,cJ),getAttribute:v(qx.bom.element.Attribute,cL),addClass:w(qx.bom.element.Class,dd),getClass:v(qx.bom.element.Class,cL),hasClass:v(qx.bom.element.Class,cT),removeClass:w(qx.bom.element.Class,df),replaceClass:w(qx.bom.element.Class,cO),toggleClass:w(qx.bom.element.Class,cQ),setValue:w(qx.bom.Input,dk),getValue:v(qx.bom.Input,cH),setStyle:w(qx.bom.element.Style,cK),setStyles:w(qx.bom.element.Style,cU),resetStyle:w(qx.bom.element.Style,cJ),getStyle:v(qx.bom.element.Style,cL),setCss:w(qx.bom.element.Style,cN),getCss:w(qx.bom.element.Style,da),getOffset:v(qx.bom.element.Location,cL),getPosition:v(qx.bom.element.Location,cW),getOffsetParent:v(qx.bom.element.Location,cD),setScrollLeft:function(T){var Node=qx.dom.Node;

for(var i=0,l=this.length,U;i<l;i++){U=this[i];

if(Node.isElement(U)){U.scrollLeft=T;
}else if(Node.isWindow(U)){U.scrollTo(T,this.getScrollTop(U));
}else if(Node.isDocument(U)){Node.getWindow(U).scrollTo(T,this.getScrollTop(U));
}}return this;
},setScrollTop:function(bz){var Node=qx.dom.Node;

for(var i=0,l=this.length,bA;i<l;i++){bA=this[i];

if(Node.isElement(bA)){bA.scrollTop=bz;
}else if(Node.isWindow(bA)){bA.scrollTo(this.getScrollLeft(bA),bz);
}else if(Node.isDocument(bA)){Node.getWindow(bA).scrollTo(this.getScrollLeft(bA),bz);
}}return this;
},getScrollLeft:function(){var bp=this[0];

if(!bp){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(bp)||Node.isDocument(bp)){return qx.bom.Viewport.getScrollLeft();
}return bp.scrollLeft;
},getScrollTop:function(){var bd=this[0];

if(!bd){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(bd)||Node.isDocument(bd)){return qx.bom.Viewport.getScrollTop();
}return bd.scrollTop;
},getWidth:function(){var by=this[0];
var Node=qx.dom.Node;

if(by){if(Node.isElement(by)){return qx.bom.element.Dimension.getWidth(by);
}else if(Node.isDocument(by)){return qx.bom.Document.getWidth(Node.getWindow(by));
}else if(Node.isWindow(by)){return qx.bom.Viewport.getWidth(by);
}}return null;
},getContentWidth:function(){var O=this[0];

if(qx.dom.Node.isElement(O)){return qx.bom.element.Dimension.getContentWidth(O);
}return null;
},getHeight:function(){var W=this[0];
var Node=qx.dom.Node;

if(W){if(Node.isElement(W)){return qx.bom.element.Dimension.getHeight(W);
}else if(Node.isDocument(W)){return qx.bom.Document.getHeight(Node.getWindow(W));
}else if(Node.isWindow(W)){return qx.bom.Viewport.getHeight(W);
}}return null;
},getContentHeight:function(){var bD=this[0];

if(qx.dom.Node.isElement(bD)){return qx.bom.element.Dimension.getContentHeight(bD);
}return null;
},addListener:w(qx.bom.Element,cS),removeListener:w(qx.bom.Element,cY),eq:function(dr){return this.slice(dr,+dr+1);
},filter:function(P,Q){var R;

if(qx.lang.Type.isFunction(P)){R=qx.type.BaseArray.prototype.filter.call(this,P,Q);
}else{R=qx.bom.Selector.matches(P,this);
}return this.__rQ(R);
},is:function(d){return !!d&&qx.bom.Selector.matches(d,this).length>0;
},__rO:/^.[^:#\[\.,]*$/,not:function(x){if(this.__rO.test(x)){var y=qx.bom.Selector.matches(cI+x+cF,this);
return this.__rQ(y);
}var y=qx.bom.Selector.matches(x,this);
return this.filter(function(dy){return y.indexOf(dy)===-1;
});
},add:function(cd,ce){var cf=qx.bom.Selector.query(cd,ce);
var cg=qx.lang.Array.unique(this.concat(cf));
return this.__rQ(cg);
},children:function(be){var bf=[];

for(var i=0,l=this.length;i<l;i++){bf.push.apply(bf,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(be){bf=qx.bom.Selector.matches(be,bf);
}return this.__rQ(bf);
},closest:function(co){var cp=new qx.bom.Collection(1);
var cr=qx.bom.Selector;
var cq=this.map(function(m){while(m&&m.ownerDocument){cp[0]=m;

if(cr.matches(co,cp).length>0){return m;
}m=m.parentNode;
}});
return this.__rQ(qx.lang.Array.unique(cq));
},contents:function(){var bF=[];
var bE=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bF.push.apply(bF,bE.fromCollection(this[i].childNodes));
}return this.__rQ(bF);
},find:function(ca){var cc=qx.bom.Selector;
if(this.length===1){return this.__rQ(cc.query(ca,this[0]));
}else{var cb=[];

for(var i=0,l=this.length;i<l;i++){cb.push.apply(cb,cc.query(ca,this[i]));
}return this.__rQ(qx.lang.Array.unique(cb));
}},next:function(a){var b=qx.dom.Hierarchy;
var c=this.map(b.getNextElementSibling,b);
if(a){c=qx.bom.Selector.matches(a,c);
}return this.__rQ(c);
},nextAll:function(N){return this.__rP(cX,N);
},prev:function(cy){var cz=qx.dom.Hierarchy;
var cA=this.map(cz.getPreviousElementSibling,cz);
if(cy){cA=qx.bom.Selector.matches(cy,cA);
}return this.__rQ(cA);
},prevAll:function(bs){return this.__rP(cE,bs);
},parent:function(dv){var Element=qx.dom.Element;
var dw=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(dv){dw=qx.bom.Selector.matches(dv,dw);
}return this.__rQ(dw);
},parents:function(bt){return this.__rP(dh,bt);
},siblings:function(ch){return this.__rP(cR,ch);
},__rP:function(z,A){var C=[];
var B=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){C.push.apply(C,B[z](this[i]));
}var D=qx.lang.Array.unique(C);
if(A){D=qx.bom.Selector.matches(A,D);
}return this.__rQ(D);
},__rQ:function(dl){var dm=new qx.bom.Collection;
dm.__rN=this;
dl=Array.prototype.slice.call(dl,0);
dm.push.apply(dm,dl);
return dm;
},andSelf:function(){return this.add(this.__rN);
},end:function(){return this.__rN||new qx.bom.Collection();
},__rR:function(bN,bO){var bT=this[0];
var bS=bT.ownerDocument||bT;
var bR=bS.createDocumentFragment();
var bV=qx.bom.Html.clean(bN,bS,bR);
var bX=bR.firstChild;
if(bX){var bP=this.length-1;

for(var i=0,l=bP;i<l;i++){bO.call(this,this[i],bR.cloneNode(true));
}bO.call(this,this[bP],bR);
}if(bV){var bQ;
var bW=qx.io.ScriptLoader;
var bU=qx.lang.Function;

for(var i=0,l=bV.length;i<l;i++){bQ=bV[i];
if(bQ.src){bW.get().load(bQ.src);
}else{bU.globalEval(bQ.text||bQ.textContent||bQ.innerHTML||db);
}if(bQ.parentNode){bQ.parentNode.removeChild(bQ);
}}}return this;
},__rS:function(ci,cj){var cl=qx.bom.Selector;
var ck=qx.lang.Array;
var cn=[];

for(var i=0,l=ci.length;i<l;i++){{};
cn.push.apply(cn,cl.query(ci[i]));
}cn=ck.cast(ck.unique(cn),qx.bom.Collection);
for(var i=0,cm=this.length;i<cm;i++){cn[cj](this[i]);
}return this;
},append:function(Y){return this.__rR(arguments,this.__rT);
},prepend:function(dx){return this.__rR(arguments,this.__rU);
},__rT:function(bw,bx){bw.appendChild(bx);
},__rU:function(bq,br){bq.insertBefore(br,bq.firstChild);
},appendTo:function(u){return this.__rS(arguments,cG);
},prependTo:function(F){return this.__rS(arguments,dj);
},before:function(ds){return this.__rR(arguments,this.__rV);
},after:function(V){return this.__rR(arguments,this.__rW);
},__rV:function(dt,du){dt.parentNode.insertBefore(du,dt);
},__rW:function(bG,bH){bG.parentNode.insertBefore(bH,bG.nextSibling);
},insertBefore:function(bg){return this.__rS(arguments,cV);
},insertAfter:function(bo){return this.__rS(arguments,cP);
},wrapAll:function(content){var bJ=this[0];

if(bJ){var bI=qx.bom.Collection.create(content,bJ.ownerDocument).clone();
if(bJ.parentNode){bJ.parentNode.insertBefore(bI[0],bJ);
}bI.map(this.__rX).append(this);
}return this;
},__rX:function(dq){while(dq.firstChild){dq=dq.firstChild;
}return dq;
},wrapInner:function(content){var X=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){X[0]=this[i];
X.contents().wrapAll(content);
}return this;
},wrap:function(content){var cB=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){cB[0]=this[i];
cB.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(e){return this.__rS(arguments,cM);
},remove:function(cu){var cw=this;

if(cu){cw=this.filter(cu);

if(cw.length==0){return this;
}}for(var i=0,cx=cw.length,cv;i<cx;i++){cv=cw[i];

if(cv.parentNode){cv.parentNode.removeChild(cv);
}}return cw;
},destroy:function(G){if(this.length==0){return this;
}var I=qx.bom.Selector;
var L=this;

if(G){L=this.filter(G);

if(L.length==0){return this;
}}var K=qx.event.Registration.getManager(this[0]);

for(var i=0,l=L.length,J,M;i<l;i++){J=L[i];
K.removeAllListeners(J);
M=I.query(dc,J);

for(var j=0,H=M.length;j<H;j++){K.removeAllListeners(M[j]);
}if(J.parentNode){J.parentNode.removeChild(J);
}}if(G){L.end();
qx.lang.Array.exclude(this,L);
}else{this.length=0;
}return this;
},empty:function(){var E=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){E.query(de,this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(S){var Element=qx.bom.Element;
return S?
this.map(function(bY){return Element.clone(bY,true);
}):this.map(Element.clone,Element);
}},defer:function(bu,bv){if(window.$==null){window.$=bu.create;
}}});
})();
})();
(function(){var m="qx.client",k="string",h="script",g="<table>",f="<fieldset>",e="<select multiple='multiple'>",d="</div>",c="</select>",b="</tr></tbody></table>",a="<col",J="div",I="<table><tbody><tr>",H=">",G="<table><tbody></tbody><colgroup>",F="<th",E="</tbody></table>",D="<td",C="</colgroup></table>",B="<opt",A="text/javascript",t="",u="</fieldset>",r="<table><tbody>",s="div<div>",p="<table",q="mshtml",n="qx.bom.Html",o="<leg",v="tbody",w="<tr",y="</table>",x="undefined",z="></";
qx.Class.define(n,{statics:{__rY:function(be,bf,bg){return bg.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?be:bf+z+bg+H;
},__sa:{opt:[1,e,c],leg:[1,f,u],table:[1,g,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Variant.select(m,{"mshtml":[1,s,d],"default":null})},__sb:function(K,L){var R=L.createElement(J);
K=K.replace(/(<(\w+)[^>]*?)\/>/g,this.__rY);
var N=K.replace(/^\s+/,t).substring(0,5).toLowerCase();
var Q,M=this.__sa;

if(!N.indexOf(B)){Q=M.opt;
}else if(!N.indexOf(o)){Q=M.leg;
}else if(N.match(/^<(thead|tbody|tfoot|colg|cap)/)){Q=M.table;
}else if(!N.indexOf(w)){Q=M.tr;
}else if(!N.indexOf(D)||!N.indexOf(F)){Q=M.td;
}else if(!N.indexOf(a)){Q=M.col;
}else{Q=M.def;
}if(Q){R.innerHTML=Q[1]+K+Q[2];
var P=Q[0];

while(P--){R=R.lastChild;
}}else{R.innerHTML=K;
}if(qx.core.Variant.isSet(m,q)){var S=/<tbody/i.test(K);
var O=!N.indexOf(p)&&!S?R.firstChild&&R.firstChild.childNodes:Q[1]==g&&!S?R.childNodes:[];

for(var j=O.length-1;j>=0;--j){if(O[j].tagName.toLowerCase()===v&&!O[j].childNodes.length){O[j].parentNode.removeChild(O[j]);
}}if(/^\s/.test(K)){R.insertBefore(L.createTextNode(K.match(/^\s*/)[0]),R.firstChild);
}}return qx.lang.Array.fromCollection(R.childNodes);
},clean:function(T,U,V){U=U||document;
if(typeof U.createElement===x){U=U.ownerDocument||U[0]&&U[0].ownerDocument||document;
}if(!V&&T.length===1&&typeof T[0]===k){var bd=/^<(\w+)\s*\/?>$/.exec(T[0]);

if(bd){return [U.createElement(bd[1])];
}}var W,Y=[];

for(var i=0,l=T.length;i<l;i++){W=T[i];
if(typeof W===k){W=this.__sb(W,U);
}if(W.nodeType){Y.push(W);
}else if(W instanceof qx.type.BaseArray){Y.push.apply(Y,Array.prototype.slice.call(W,0));
}else if(W.toElement){Y.push(W.toElement());
}else{Y.push.apply(Y,W);
}}if(V){var bc=[],bb=qx.lang.Array,ba,X;

for(var i=0;Y[i];i++){ba=Y[i];

if(ba.nodeType==1&&ba.tagName.toLowerCase()===h&&(!ba.type||ba.type.toLowerCase()===A)){if(ba.parentNode){ba.parentNode.removeChild(Y[i]);
}bc.push(ba);
}else{if(ba.nodeType===1){X=bb.fromCollection(ba.getElementsByTagName(h));
Y.splice.apply(Y,[i+1,0].concat(X));
}V.appendChild(ba);
}}return bc;
}return Y;
}}});
})();
(function(){var l="mshtml",k="qx.client",j="qx.bom.element.Dimension",i="paddingRight",h="paddingLeft",g="paddingTop",f="paddingBottom";
qx.Class.define(j,{statics:{getWidth:qx.core.Variant.select(k,{"gecko":function(d){if(d.getBoundingClientRect){var e=d.getBoundingClientRect();
return Math.round(e.right)-Math.round(e.left);
}else{return d.offsetWidth;
}},"default":function(m){return m.offsetWidth;
}}),getHeight:qx.core.Variant.select(k,{"gecko":function(b){if(b.getBoundingClientRect){var c=b.getBoundingClientRect();
return Math.round(c.bottom)-Math.round(c.top);
}else{return b.offsetHeight;
}},"default":function(C){return C.offsetHeight;
}}),getSize:function(a){return {width:this.getWidth(a),height:this.getHeight(a)};
},__jg:{visible:true,hidden:true},getContentWidth:function(v){var x=qx.bom.element.Style;
var y=qx.bom.element.Overflow.getX(v);
var z=parseInt(x.get(v,h),10);
var B=parseInt(x.get(v,i),10);

if(this.__jg[y]){return v.clientWidth-z-B;
}else{if(v.clientWidth>=v.scrollWidth){return Math.max(v.clientWidth,v.scrollWidth)-z-B;
}else{var A=v.scrollWidth-z;
var w=qx.bom.client.Engine;

if(w.NAME===l&&w.VERSION==6){A-=B;
}return A;
}}},getContentHeight:function(o){var q=qx.bom.element.Style;
var s=qx.bom.element.Overflow.getY(o);
var t=parseInt(q.get(o,g),10);
var r=parseInt(q.get(o,f),10);

if(this.__jg[s]){return o.clientHeight-t-r;
}else{if(o.clientHeight>=o.scrollHeight){return Math.max(o.clientHeight,o.scrollHeight)-t-r;
}else{var u=o.scrollHeight-t;
var p=qx.bom.client.Engine;

if(p.NAME===l&&p.VERSION==6){u-=r;
}return u;
}}},getContentSize:function(n){return {width:this.getContentWidth(n),height:this.getContentHeight(n)};
}}});
})();
(function(){var o="success",n="head",m="complete",l="error",k="load",j="fail",i="loaded",h="readystatechange",g="qx.io.ScriptLoader",f="script",b="qx.client",d="text/javascript",c="abort";
qx.Class.define(g,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__sc=qx.lang.Function.bind(this.__si,this);
this.__sd=document.createElement(f);
},members:{__se:null,__sf:null,__sg:null,__sc:null,__sd:null,load:function(p,q,r){if(this.__se){throw new Error("Another request is still running!");
}this.__se=true;
var s=document.getElementsByTagName(n)[0];
var t=this.__sd;
this.__sf=q||null;
this.__sg=r||window;
t.type=d;
t.onerror=t.onload=t.onreadystatechange=this.__sc;
t.src=p;
s.appendChild(t);
},abort:function(){if(this.__se){this.__sh(c);
}},__sh:function(status){var a=this.__sd;
a.onerror=a.onload=a.onreadystatechange=null;
document.getElementsByTagName(n)[0].removeChild(a);
delete this.__se;
if(this.__sf){this.__sf.call(this.__sg,status);
delete this.__sf;
}},__si:qx.event.GlobalError.observeMethod(qx.core.Variant.select(b,{"mshtml":function(e){var u=this.__sd.readyState;

if(u==i){this.__sh(o);
}else if(u==m){this.__sh(o);
}else{return;
}},"opera":function(e){if(qx.lang.Type.isString(e)||e.type===l){return this.__sh(j);
}else if(e.type===k){return this.__sh(o);
}else{return;
}},"default":function(e){if(qx.lang.Type.isString(e)||e.type===l){this.__sh(j);
}else if(e.type===k){this.__sh(o);
}else if(e.type===h&&(e.target.readyState===m||e.target.readyState===i)){this.__sh(o);
}else{return;
}}}))},destruct:function(){this.__sd.onerror=this.__sd.onload=this.__sd.onreadystatechange=null;
this.__sd=this.__sc=this.__sf=this.__sg=null;
}});
})();
(function(){var c="qx.util.ValueManager",b="abstract";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(d){return this._dynamic[d];
},isDynamic:function(e){return !!this._dynamic[e];
},resolve:function(a){if(a&&this._dynamic[a]){return this._dynamic[a];
}return a;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cX={};
this.add(a,h);
},members:{__cX:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__cX[k]){return this.__cX[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__cX[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(r,s){this.__cX[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(j))===r){u[t]=s+t.substring(r.length);
}}},remove:function(o){delete this.__cX[o];
},resolve:function(p){var q=this._getDynamic();

if(p!==null){p=this._preprocess(p);
}return q[p]||p;
}},destruct:function(){this.__cX=null;
}});
})();
(function(){var n="'>",m="[",l=", ",k="</span>",h="<span class='type-",g="</span> ",f="}",e="",d="]",c="{",K="map",J="<span class='object'>",I="]:",H="&gt;",G="<span class='object' title='Object instance with hash code: ",F="string",E="level-",D="0",C="&lt;",B="<span class='offset'>",u=":",v="qx.log.appender.Util",s="&amp;",t="&#39;",q="DIV",r="<span>",o="&quot;",p="<span class='type-key'>",w="</span>:<span class='type-",x="</span>: ",z=" ",y="]</span>: ",A="?";
qx.Class.define(v,{statics:{toHtml:function(ba){var bk=[];
var bh,bj,bc,be;
bk.push(B,this.formatOffset(ba.offset,6),g);

if(ba.object){var bb=ba.win.qx.core.ObjectRegistry.fromHashCode(ba.object);

if(bb){bk.push(G+bb.$$hash+n,bb.classname,m,bb.$$hash,y);
}}else if(ba.clazz){bk.push(J+ba.clazz.classname,x);
}var bd=ba.items;

for(var i=0,bi=bd.length;i<bi;i++){bh=bd[i];
bj=bh.text;

if(bj instanceof Array){var be=[];

for(var j=0,bg=bj.length;j<bg;j++){bc=bj[j];

if(typeof bc===F){be.push(r+this.escapeHTML(bc)+k);
}else if(bc.key){be.push(p+bc.key+w+bc.type+n+this.escapeHTML(bc.text)+k);
}else{be.push(h+bc.type+n+this.escapeHTML(bc.text)+k);
}}bk.push(h+bh.type+n);

if(bh.type===K){bk.push(c,be.join(l),f);
}else{bk.push(m,be.join(l),d);
}bk.push(k);
}else{bk.push(h+bh.type+n+this.escapeHTML(bj)+g);
}}var bf=document.createElement(q);
bf.innerHTML=bk.join(e);
bf.className=E+ba.level;
return bf;
},formatOffset:function(M,length){var P=M.toString();
var N=(length||6)-P.length;
var O=e;

for(var i=0;i<N;i++){O+=D;
}return O+P;
},escapeHTML:function(bl){return String(bl).replace(/[<>&"']/g,this.__jU);
},__jU:function(a){var b={"<":C,">":H,"&":s,"'":t,'"':o};
return b[a]||A;
},toText:function(L){return this.toTextArray(L).join(z);
},toTextArray:function(Q){var Y=[];
Y.push(this.formatOffset(Q.offset,6));

if(Q.object){var R=Q.win.qx.core.ObjectRegistry.fromHashCode(Q.object);

if(R){Y.push(R.classname+m+R.$$hash+I);
}}else if(Q.clazz){Y.push(Q.clazz.classname+u);
}var S=Q.items;
var V,X;

for(var i=0,W=S.length;i<W;i++){V=S[i];
X=V.text;

if(X instanceof Array){var T=[];

for(var j=0,U=X.length;j<U;j++){T.push(X[j].text);
}
if(V.type===K){Y.push(c,T.join(l),f);
}else{Y.push(m,T.join(l),d);
}}else{Y.push(X);
}}return Y;
}}});
})();
(function(){var k="debug",j="log",i="qx.log.appender.Native",h="qx.client";
qx.Class.define(i,{statics:{process:qx.core.Variant.select(h,{"gecko":function(a){if(window.console&&console.firebug){console[a.level].call(console,qx.log.appender.Util.toText(a));
}},"mshtml":function(e){if(window.console){var g=e.level;

if(g==k){g=j;
}var f=qx.log.appender.Util.toText(e);
console[g](f);
}},"webkit":function(b){if(window.console){var d=b.level;

if(d==k){d=j;
}var c=qx.log.appender.Util.toText(b);
console[d](c);
}},"opera":function(l){}})},defer:function(m){qx.log.Logger.register(m);
}});
})();
(function(){var s="",r='</div>',q="Up",p="none",o="keypress",n='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',m="Enter",l="px",k='.qxconsole .messages .user-result{background:white}',j='.qxconsole .messages .level-error{background:#FFE2D5}',be="div",bd="user-command",bc='<div class="command">',bb='.qxconsole .command input:focus{outline:none;}',ba='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Y='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',X='.qxconsole .messages div{padding:0px 4px;}',W='.qxconsole .messages .level-debug{background:white}',V='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',U="DIV",z='.qxconsole .messages .level-user{background:#E3EFE9}',A='<div class="qxconsole">',x="D",y='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',v='.qxconsole .messages .type-string{color:black;font-weight:normal;}',w='.qxconsole .control a{text-decoration:none;color:black;}',t='<div class="messages">',u='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',B='<input type="text"/>',C="clear",J='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',H='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',N='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',L='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',Q='.qxconsole .messages .user-command{color:blue}',P="F7",E="qx.log.appender.Console",T='.qxconsole .messages .level-info{background:#DEEDFA}',S="block",R='.qxconsole .messages .level-warn{background:#FFF7D5}',D='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',F='.qxconsole .messages .user-error{background:#FFE2D5}',G='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',I='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',K=">>> ",M="Down",O='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(E,{statics:{init:function(){var a=[N,G,w,n,X,Q,k,F,W,T,R,j,z,v,O,u,H,y,ba,V,Y,D,L,J,bb];
qx.bom.Stylesheet.createElement(a.join(s));
var c=[A,I,t,r,bc,B,r,r];
var d=document.createElement(U);
d.innerHTML=c.join(s);
var b=d.firstChild;
document.body.appendChild(d.firstChild);
this.__jV=b;
this.__jW=b.childNodes[1];
this.__jX=b.childNodes[2].firstChild;
this.__kd();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,o,this.__ke,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__jW.innerHTML=s;
},process:function(bg){this.__jW.appendChild(qx.log.appender.Util.toHtml(bg));
this.__jY();
},__jY:function(){this.__jW.scrollTop=this.__jW.scrollHeight;
},__ka:true,toggle:function(){if(!this.__jV){this.init();
}else if(this.__jV.style.display==p){this.show();
}else{this.__jV.style.display=p;
}},show:function(){if(!this.__jV){this.init();
}else{this.__jV.style.display=S;
this.__jW.scrollTop=this.__jW.scrollHeight;
}},__kb:[],execute:function(){var i=this.__jX.value;

if(i==s){return;
}
if(i==C){return this.clear();
}var g=document.createElement(be);
g.innerHTML=qx.log.appender.Util.escapeHTML(K+i);
g.className=bd;
this.__kb.push(i);
this.__kc=this.__kb.length;
this.__jW.appendChild(g);
this.__jY();

try{var h=window.eval(i);
}catch(bf){qx.log.Logger.error(bf);
}
if(h!==undefined){qx.log.Logger.debug(h);
}},__kd:function(e){this.__jW.style.height=(this.__jV.clientHeight-this.__jV.firstChild.offsetHeight-this.__jV.lastChild.offsetHeight)+l;
},__ke:function(e){var bi=e.getKeyIdentifier();
if((bi==P)||(bi==x&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__jV){return;
}if(!qx.dom.Hierarchy.contains(this.__jV,e.getTarget())){return;
}if(bi==m&&this.__jX.value!=s){this.execute();
this.__jX.value=s;
}if(bi==q||bi==M){this.__kc+=bi==q?-1:1;
this.__kc=Math.min(Math.max(0,this.__kc),this.__kb.length);
var bh=this.__kb[this.__kc];
this.__jX.value=bh||s;
this.__jX.select();
}}},defer:function(f){qx.event.Registration.addListener(document.documentElement,o,f.__ke,f);
}});
})();
(function(){var C="qx.client",B="head",A="text/css",z="stylesheet",y="}",x='@import "',w="{",v='";',u="qx.bom.Stylesheet",t="link",s="style";
qx.Class.define(u,{statics:{includeFile:function(a,b){if(!b){b=document;
}var c=b.createElement(t);
c.type=A;
c.rel=z;
c.href=qx.util.ResourceManager.getInstance().toUri(a);
var d=b.getElementsByTagName(B)[0];
d.appendChild(c);
},createElement:qx.core.Variant.select(C,{"mshtml":function(bf){var bg=document.createStyleSheet();

if(bf){bg.cssText=bf;
}return bg;
},"default":function(D){var E=document.createElement(s);
E.type=A;

if(D){E.appendChild(document.createTextNode(D));
}document.getElementsByTagName(B)[0].appendChild(E);
return E.sheet;
}}),addRule:qx.core.Variant.select(C,{"mshtml":function(l,m,n){l.addRule(m,n);
},"default":function(P,Q,R){P.insertRule(Q+w+R+y,P.cssRules.length);
}}),removeRule:qx.core.Variant.select(C,{"mshtml":function(L,M){var N=L.rules;
var O=N.length;

for(var i=O-1;i>=0;--i){if(N[i].selectorText==M){L.removeRule(i);
}}},"default":function(g,h){var j=g.cssRules;
var k=j.length;

for(var i=k-1;i>=0;--i){if(j[i].selectorText==h){g.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(C,{"mshtml":function(S){var T=S.rules;
var U=T.length;

for(var i=U-1;i>=0;i--){S.removeRule(i);
}},"default":function(I){var J=I.cssRules;
var K=J.length;

for(var i=K-1;i>=0;i--){I.deleteRule(i);
}}}),addImport:qx.core.Variant.select(C,{"mshtml":function(bd,be){bd.addImport(be);
},"default":function(e,f){e.insertRule(x+f+v,e.cssRules.length);
}}),removeImport:qx.core.Variant.select(C,{"mshtml":function(Y,ba){var bb=Y.imports;
var bc=bb.length;

for(var i=bc-1;i>=0;i--){if(bb[i].href==ba){Y.removeImport(i);
}}},"default":function(o,p){var q=o.cssRules;
var r=q.length;

for(var i=r-1;i>=0;i--){if(q[i].href==p){o.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(C,{"mshtml":function(V){var W=V.imports;
var X=W.length;

for(var i=X-1;i>=0;i--){V.removeImport(i);
}},"default":function(F){var G=F.cssRules;
var H=G.length;

for(var i=H-1;i>=0;i--){if(G[i].type==G[i].IMPORT_RULE){F.deleteRule(i);
}}}})}});
})();
(function(){var t=": ",s="Summary: (",r="qx.dev.ObjectSummary",q="\n",p=" Objects)\n\n",o=")\r\n",n=" (",m=" Objects)\r\n\r\n",l=", ";
qx.Class.define(r,{statics:{getInfo:function(){var c={};
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
var h=s+k+p;

for(var i=0;i<j.length;i++){h+=j[i].number+t+j[i].classname+q;
}return h;
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
var C=s+F+m;

for(var i=0;i<D.length;i++){C+=D[i].number+t+D[i].classname+n+D[i].aHashCode.join(l)+o;
}return C;
}}});
})();
(function(){var ct="window",cs="",cr="childNodes",cq="nodeName",cp="nodeType",co="document",cn="function",cm="firstChild",cl="qx.client",ck="external",bB="location",bA="[native code]",bz="lastChild",by="scrollY",bx="scrollWidth",bw="defaultView",bv="closed",bu="content",bt="qx",bs="</td><td>",cA="filters",cB="locationbar",cy="screenX",cz="previousSibling",cw="scrollX",cx="Global namespace is polluted by the following unknown objects:\n\n",cu="doctype",cv="parent",cC="qx.dev.Pollution",cD="outerText",ca="applets",bY="parentElement",cc="designMode",cb="cookie",ce="fullScreen",cd="links",cg="pageXOffset",cf="frames",bX="documentElement",bW="screenY",j="statusbar",k="history",l="sun",m="pkcs11",n="java",o="style",p="innerWidth",q="plugins",r="implementation",s="clientWidth",cH="compatMode",cG="length",cF="textContent",cE="controllers",cL="netscape",cK="self",cJ="domConfig",cI="attributes",cN="clientHeight",cM="outerHeight",R="parentNode",S="innerHeight",P="title",Q="ownerDocument",V="<table>",W="globalStorage",T="Global namespace is not polluted by any unknown objects.",U="toolbar",N="outerHTML",O="crypto",A="forms",z="scrollbars",C="frameElement",B="Components",w="body",v="clientInformation",y="offscreenBuffering",x="embeds",u="localName",t="scrollTop",bc="isMultiLine",bd="scrollLeft",be="images",bf="event",X="offsetHeight",Y="scrollMaxY",ba="sessionStorage",bb="screen",bg="name",bh="offsetLeft",K="console",J="XMLHttpRequest",I="mshtml",H="nextSibling",G="innerText",F="menubar",E="scopeName",D="top",M="outerWidth",L=": ",bi="\n",bj="status",bk="contentEditable",bl="anchors",bm="</table>",bn="<tr style='vertical-align:top'><td>",bo="scrollMaxX",bp="screenTop",bq="defaultStatus",br="styleSheets",bF="className",bE="personalbar",bD="</td></tr>",bC="currentStyle",bJ="directories",bI="navigator",bH="pageYOffset",bG="screenLeft",bL="opener",bK="scrollHeight",bS="__firebug__",bT="Option",bQ="innerHTML",bR="tabIndex",bO="offsetTop",bP="[function]",bM="clipboardData",bN="Packages",bU="tagName",bV="offsetWidth",ci="mshtml|opera",ch="undefined",cj="Image";
qx.Class.define(cC,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bt,n,l,bN,bS,B,cE,ba,W,K,bf,y,bM,v,bT,cj,ck,bp,bG,cG,ct,co,bB,bI,cL,cv,cf,D,z,bg,cw,by,cK,bb,k,bu,F,U,cB,bE,j,bJ,bv,O,m,bL,bj,bq,p,S,M,cM,cy,bW,cg,bH,bo,Y,ce,C,J],"document":[cJ,bB,cH,r,bw,P,w,br,bX,cq,cp,cm,bz,cu,be,ca,cd,A,bl,cb,x,q,cc,cr],"body":[cF,bQ,N,G,cD,E,bY,bU,cA,bk,co,bC,bc,cN,s,bz,cm,bO,bh,bV,X,bR,bF,cI,cz,H,Q,u,cr,R,cp,cq,o,t,bd,bx,bK]},getInfo:function(a){var b=qx.dev.Pollution.getTextList(a||ct);

if(b){return cx+b;
}else{return T;
}},extract:function(cO){var cQ=[];
var cP=qx.dev.Pollution.ignore[cO];
if(qx.core.Variant.isSet(cl,I)){if(cO==ct){cP=cP.slice(0);

for(var cR=0;cR<window.length;cR++){cP.push(cs+cR);
}}}var cS=qx.dev.Pollution.names[cO];

for(var cT in cS){try{if(qx.core.Variant.isSet(cl,ci)){if(cO==ct&&cT==ck){continue;
}}if(typeof cS[cT]==ch||cS[cT]===null){continue;
}if(typeof cS[cT]==cn&&cS[cT].toString().indexOf(bA)!=-1){continue;
}if(typeof cS[cT].constructor==cn){if((cS[cT].constructor.toString().indexOf(bA)!=-1)||(cS[cT].constructor.toString().indexOf(bP)!=-1)){continue;
}}if(qx.lang.Array.contains(cP,cT)){continue;
}}catch(cU){continue;
}cQ.push({"key":cT,"value":cS[cT]});
}return cQ;
},getHtmlTable:function(c){var e=[];
var d=bn;
var g=bs;
var h=bD;
e.push(V);
var f=this.extract(c);

for(var i=0;i<f.length;i++){e.push(d+f[i].key+g+f[i].value+h);
}e.push(bm);
return e.join(cs);
},getTextList:function(cV){var cX=[];
var cY=L;
var da=bi;
var cW=this.extract(cV);

for(var i=0;i<cW.length;i++){cX.push(cW[i].key+cY+cW[i].value+da);
}return cX.join(cs);
}}});
})();
(function(){var H="other",G="widgets",F="fonts",E="appearances",D="qx.Theme",C="]",B="[Theme ",A="colors",z="decorations",y="Theme",v="meta",x="borders",w="icons";
qx.Bootstrap.define(D,{statics:{define:function(name,m){if(!m){var m={};
}m.include=this.__dk(m.include);
m.patch=this.__dk(m.patch);
{};
var n={$$type:y,name:name,title:m.title,toString:this.genericToString};
if(m.extend){n.supertheme=m.extend;
}n.basename=qx.Bootstrap.createNamespace(name,n);
this.__dn(n,m);
this.__dl(n,m);
this.$$registry[name]=n;
for(var i=0,a=m.include,l=a.length;i<l;i++){this.include(n,a[i]);
}
for(var i=0,a=m.patch,l=a.length;i<l;i++){this.patch(n,a[i]);
}},__dk:function(o){if(!o){return [];
}
if(qx.Bootstrap.isArray(o)){return o;
}else{return [o];
}},__dl:function(b,c){var d=c.aliases||{};

if(c.extend&&c.extend.aliases){qx.Bootstrap.objectMergeWith(d,c.extend.aliases,false);
}b.aliases=d;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return B+this.name+C;
},__dm:function(P){for(var i=0,Q=this.__do,l=Q.length;i<l;i++){if(P[Q[i]]){return Q[i];
}}},__dn:function(I,J){var M=this.__dm(J);
if(J.extend&&!M){M=J.extend.type;
}I.type=M||H;
if(!M){return;
}var O=function(){};
if(J.extend){O.prototype=new J.extend.$$clazz;
}var N=O.prototype;
var L=J[M];
for(var K in L){N[K]=L[K];
if(N[K].base){{};
N[K].base=J.extend;
}}I.$$clazz=O;
I[M]=new O;
},$$registry:{},__do:[A,x,z,F,w,G,E,v],__dp:null,__dq:null,__dr:function(){},patch:function(p,q){var s=this.__dm(q);

if(s!==this.__dm(p)){throw new Error("The mixins '"+p.name+"' are not compatible '"+q.name+"'!");
}var r=q[s];
var t=p.$$clazz.prototype;

for(var u in r){t[u]=r[u];
}},include:function(e,f){var h=f.type;

if(h!==e.type){throw new Error("The mixins '"+e.name+"' are not compatible '"+f.name+"'!");
}var g=f[h];
var j=e.$$clazz.prototype;

for(var k in g){if(j[k]!==undefined){continue;
}j[k]=g[k];
}}}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var c="qx.ui.decoration.IDecorator";
qx.Interface.define(c,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(a,b){},getInsets:function(){}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,e,b],mode:c}},members:{__mM:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__mM=null;
},getInsets:function(){if(this.__mM){return this.__mM;
}var a=this._getDefaultInsets();
return this.__mM={left:this.getInsetLeft()==null?a.left:this.getInsetLeft(),right:this.getInsetRight()==null?a.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?a.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?a.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__mM=null;
}},destruct:function(){this.__mM=null;
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
(function(){var v="_applyStyle",u="Color",t="px",s="solid",r="dotted",q="double",p="dashed",o="",n="_applyWidth",m="qx.ui.decoration.Uniform",j="px ",l=" ",k="scale",i="PositiveInteger",h="absolute";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(w,x,y){arguments.callee.base.call(this);
if(w!=null){this.setWidth(w);
}
if(x!=null){this.setStyle(x);
}
if(y!=null){this.setColor(y);
}},properties:{width:{check:i,init:0,apply:n},style:{nullable:true,check:[s,r,p,q],init:s,apply:v},color:{nullable:true,check:u,apply:v},backgroundColor:{check:u,nullable:true,apply:v}},members:{__oL:null,_getDefaultInsets:function(){var z=this.getWidth();
return {top:z,right:z,bottom:z,left:z};
},_isInitialized:function(){return !!this.__oL;
},getMarkup:function(){if(this.__oL){return this.__oL;
}var a={position:h,top:0,left:0};
var b=this.getWidth();
{};
var d=qx.theme.manager.Color.getInstance();
a.border=b+j+this.getStyle()+l+d.resolve(this.getColor());
var c=this._generateBackgroundMarkup(a);
return this.__oL=c;
},resize:function(A,B,C){var E=this.getBackgroundImage()&&this.getBackgroundRepeat()==k;

if(E||qx.bom.client.Feature.CONTENT_BOX){var D=this.getWidth()*2;
B-=D;
C-=D;
if(B<0){B=0;
}
if(C<0){C=0;
}}A.style.width=B+t;
A.style.height=C+t;
},tint:function(e,f){var g=qx.theme.manager.Color.getInstance();

if(f==null){f=this.getBackgroundColor();
}e.style.backgroundColor=g.resolve(f)||o;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__oL=null;
}});
})();
(function(){var m="_applyStyle",l="solid",k="Color",j="double",i="px ",h="dotted",g="_applyWidth",f="dashed",e="Number",d=" ",I="shorthand",H="px",G="widthTop",F="styleRight",E="styleLeft",D="widthLeft",C="widthBottom",B="styleTop",A="colorBottom",z="styleBottom",t="widthRight",u="colorLeft",r="colorRight",s="colorTop",p="scale",q="border-top",n="border-left",o="border-right",v="qx.ui.decoration.Single",w="",y="border-bottom",x="absolute";
qx.Class.define(v,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(O,P,Q){arguments.callee.base.call(this);
if(O!=null){this.setWidth(O);
}
if(P!=null){this.setStyle(P);
}
if(Q!=null){this.setColor(Q);
}},properties:{widthTop:{check:e,init:0,apply:g},widthRight:{check:e,init:0,apply:g},widthBottom:{check:e,init:0,apply:g},widthLeft:{check:e,init:0,apply:g},styleTop:{nullable:true,check:[l,h,f,j],init:l,apply:m},styleRight:{nullable:true,check:[l,h,f,j],init:l,apply:m},styleBottom:{nullable:true,check:[l,h,f,j],init:l,apply:m},styleLeft:{nullable:true,check:[l,h,f,j],init:l,apply:m},colorTop:{nullable:true,check:k,apply:m},colorRight:{nullable:true,check:k,apply:m},colorBottom:{nullable:true,check:k,apply:m},colorLeft:{nullable:true,check:k,apply:m},backgroundColor:{check:k,nullable:true,apply:m},left:{group:[D,E,u]},right:{group:[t,F,r]},top:{group:[G,B,s]},bottom:{group:[C,z,A]},width:{group:[G,t,C,D],mode:I},style:{group:[B,F,z,E],mode:I},color:{group:[s,r,A,u],mode:I}},members:{__oM:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__oM;
},getMarkup:function(J){if(this.__oM){return this.__oM;
}var K=qx.theme.manager.Color.getInstance();
var L={};
var N=this.getWidthTop();

if(N>0){L[q]=N+i+this.getStyleTop()+d+K.resolve(this.getColorTop());
}var N=this.getWidthRight();

if(N>0){L[o]=N+i+this.getStyleRight()+d+K.resolve(this.getColorRight());
}var N=this.getWidthBottom();

if(N>0){L[y]=N+i+this.getStyleBottom()+d+K.resolve(this.getColorBottom());
}var N=this.getWidthLeft();

if(N>0){L[n]=N+i+this.getStyleLeft()+d+K.resolve(this.getColorLeft());
}{};
L.position=x;
L.top=0;
L.left=0;
var M=this._generateBackgroundMarkup(L);
return this.__oM=M;
},resize:function(R,S,T){var V=this.getBackgroundImage()&&this.getBackgroundRepeat()==p;

if(V||qx.bom.client.Feature.CONTENT_BOX){var U=this.getInsets();
S-=U.left+U.right;
T-=U.top+U.bottom;
if(S<0){S=0;
}
if(T<0){T=0;
}}R.style.width=S+H;
R.style.height=T+H;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||w;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__oM=null;
}});
})();
(function(){var o="px ",n=" ",m="Color",l="Number",k=";",j="px",i="shorthand",h="innerWidthRight",g="border-left:",f='<div style="position:absolute;top:0;left:0;',H="innerColorBottom",G='</div>',F='',E="scale",D="border-top",C="innerWidthTop",B="border-left",A="innerColorRight",z="innerColorTop",y="innerColorLeft",v="border-top:",w="qx.ui.decoration.Double",t="border-right:",u="border-bottom",r='">',s="innerWidthBottom",p="innerWidthLeft",q="border-bottom:",x="border-right";
qx.Class.define(w,{extend:qx.ui.decoration.Single,construct:function(N,O,P,innerWidth,Q){arguments.callee.base.call(this,N,O,P,innerWidth,Q);
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(Q!=null){this.setInnerColor(Q);
}},properties:{innerWidthTop:{check:l,init:0},innerWidthRight:{check:l,init:0},innerWidthBottom:{check:l,init:0},innerWidthLeft:{check:l,init:0},innerWidth:{group:[C,h,s,p],mode:i},innerColorTop:{nullable:true,check:m},innerColorRight:{nullable:true,check:m},innerColorBottom:{nullable:true,check:m},innerColorLeft:{nullable:true,check:m},innerColor:{group:[z,A,H,y],mode:i}},members:{__pI:null,_getDefaultInsets:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
},_isInitialized:function(){return !!this.__pI;
},getMarkup:function(){if(this.__pI){return this.__pI;
}var a=qx.theme.manager.Color.getInstance();
var d={};
var b=this.getInnerWidthTop();

if(b>0){d[D]=b+o+this.getStyleTop()+n+a.resolve(this.getInnerColorTop());
}var b=this.getInnerWidthRight();

if(b>0){d[x]=b+o+this.getStyleRight()+n+a.resolve(this.getInnerColorRight());
}var b=this.getInnerWidthBottom();

if(b>0){d[u]=b+o+this.getStyleBottom()+n+a.resolve(this.getInnerColorBottom());
}var b=this.getInnerWidthLeft();

if(b>0){d[B]=b+o+this.getStyleLeft()+n+a.resolve(this.getInnerColorLeft());
}{};
var e=this._generateBackgroundMarkup(d);
var c=F;
var b=this.getWidthTop();

if(b>0){c+=v+b+o+this.getStyleTop()+n+a.resolve(this.getColorTop())+k;
}var b=this.getWidthRight();

if(b>0){c+=t+b+o+this.getStyleRight()+n+a.resolve(this.getColorRight())+k;
}var b=this.getWidthBottom();

if(b>0){c+=q+b+o+this.getStyleBottom()+n+a.resolve(this.getColorBottom())+k;
}var b=this.getWidthLeft();

if(b>0){c+=g+b+o+this.getStyleLeft()+n+a.resolve(this.getColorLeft())+k;
}{};
return this.__pI=f+c+r+e+G;
},resize:function(I,J,K){var M=this.getBackgroundImage()&&this.getBackgroundRepeat()==E;

if(M||qx.bom.client.Feature.CONTENT_BOX){var L=this.getInsets();
var innerWidth=J-L.left-L.right;
var innerHeight=K-L.top-L.bottom;
}else{var innerWidth=J-this.getWidthLeft()-this.getWidthRight();
var innerHeight=K-this.getWidthTop()-this.getWidthBottom();
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}I.firstChild.style.width=innerWidth+j;
I.firstChild.style.height=innerHeight+j;
}},destruct:function(){this.__pI=null;
}});
})();
(function(){var s="px",r="0px",q="-1px",p="no-repeat",o="scale-x",n="scale-y",m="-tr",l="-l",k='</div>',j="scale",G="qx.client",F="-br",E="-t",D="-tl",C="-r",B='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',A="_applyBaseImage",z="-b",y="String",x="",v="-bl",w="-c",t="mshtml",u="qx.ui.decoration.Grid";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,construct:function(H,I){arguments.callee.base.call(this);
if(H!=null){this.setBaseImage(H);
}
if(I!=null){this.setInsets(I);
}},properties:{baseImage:{check:y,nullable:true,apply:A}},members:{__oN:null,__oO:null,__oP:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__oN;
},getMarkup:function(){if(this.__oN){return this.__oN;
}var N=qx.bom.element.Decoration;
var O=this.__oO;
var P=this.__oP;
var Q=[];
Q.push(B);
Q.push(N.create(O.tl,p,{top:0,left:0}));
Q.push(N.create(O.t,o,{top:0,left:P.left+s}));
Q.push(N.create(O.tr,p,{top:0,right:0}));
Q.push(N.create(O.bl,p,{bottom:0,left:0}));
Q.push(N.create(O.b,o,{bottom:0,left:P.left+s}));
Q.push(N.create(O.br,p,{bottom:0,right:0}));
Q.push(N.create(O.l,n,{top:P.top+s,left:0}));
Q.push(N.create(O.c,j,{top:P.top+s,left:P.left+s}));
Q.push(N.create(O.r,n,{top:P.top+s,right:0}));
Q.push(k);
return this.__oN=Q.join(x);
},resize:function(J,K,L){var M=this.__oP;
var innerWidth=K-M.left-M.right;
var innerHeight=L-M.top-M.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}J.style.width=K+s;
J.style.height=L+s;
J.childNodes[1].style.width=innerWidth+s;
J.childNodes[4].style.width=innerWidth+s;
J.childNodes[7].style.width=innerWidth+s;
J.childNodes[6].style.height=innerHeight+s;
J.childNodes[7].style.height=innerHeight+s;
J.childNodes[8].style.height=innerHeight+s;

if(qx.core.Variant.isSet(G,t)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(K%2==1){J.childNodes[2].style.marginRight=q;
J.childNodes[5].style.marginRight=q;
J.childNodes[8].style.marginRight=q;
}else{J.childNodes[2].style.marginRight=r;
J.childNodes[5].style.marginRight=r;
J.childNodes[8].style.marginRight=r;
}
if(L%2==1){J.childNodes[3].style.marginBottom=q;
J.childNodes[4].style.marginBottom=q;
J.childNodes[5].style.marginBottom=q;
}else{J.childNodes[3].style.marginBottom=r;
J.childNodes[4].style.marginBottom=r;
J.childNodes[5].style.marginBottom=r;
}}}},tint:function(h,i){},_applyBaseImage:function(a,b){{};

if(a){var f=this._resolveImageUrl(a);
var g=/(.*)(\.[a-z]+)$/.exec(f);
var e=g[1];
var d=g[2];
var c=this.__oO={tl:e+D+d,t:e+E+d,tr:e+m+d,bl:e+v+d,b:e+z+d,br:e+F+d,l:e+l+d,c:e+w+d,r:e+C+d};
this.__oP=this._computeEdgeSizes(c);
}},_resolveImageUrl:function(T){return qx.util.AliasManager.getInstance().resolve(T);
},_computeEdgeSizes:function(R){var S=qx.util.ResourceManager.getInstance();
return {top:S.getImageHeight(R.t),bottom:S.getImageHeight(R.b),left:S.getImageWidth(R.l),right:S.getImageWidth(R.r)};
}},destruct:function(){this.__oN=this.__oO=this.__oP=null;
}});
})();
(function(){var r="_applyStyle",q='"></div>',p="Color",o="1px",n='<div style="',m='border:',l="1px solid ",k="",j=";",i="px",D='</div>',C="qx.ui.decoration.Beveled",B='<div style="position:absolute;top:1px;left:1px;',A='border-bottom:',z='border-right:',y='border-left:',x='border-top:',w="Number",v='<div style="position:absolute;top:1px;left:0px;',u='position:absolute;top:0px;left:1px;',s='<div style="overflow:hidden;font-size:0;line-height:0;">',t="absolute";
qx.Class.define(C,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(f,g,h){arguments.callee.base.call(this);
if(f!=null){this.setOuterColor(f);
}
if(g!=null){this.setInnerColor(g);
}
if(h!=null){this.setInnerOpacity(h);
}},properties:{innerColor:{check:p,nullable:true,apply:r},innerOpacity:{check:w,init:1,apply:r},outerColor:{check:p,nullable:true,apply:r},backgroundColor:{check:p,nullable:true,apply:r}},members:{__oQ:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__oQ;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__oQ){return this.__oQ;
}var a=qx.theme.manager.Color.getInstance();
var b=[];
var e=l+a.resolve(this.getOuterColor())+j;
var d=l+a.resolve(this.getInnerColor())+j;
b.push(s);
b.push(n);
b.push(m,e);
b.push(qx.bom.element.Opacity.compile(0.35));
b.push(q);
b.push(v);
b.push(y,e);
b.push(z,e);
b.push(q);
b.push(n);
b.push(u);
b.push(x,e);
b.push(A,e);
b.push(q);
var c={position:t,top:o,left:o};
b.push(this._generateBackgroundMarkup(c));
b.push(B);
b.push(m,d);
b.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
b.push(q);
b.push(D);
return this.__oQ=b.join(k);
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
}var O=i;
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
}P.childNodes[3].style.backgroundColor=R.resolve(Q)||k;
}},destruct:function(){this.__oQ=null;
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",x="table-header-border",w="border-separator",v="tooltip-text",u="invalid",t="white",s="dotted",r="effect",q="table-focus-indicator",p="border-focused-invalid",o="qx/decoration/Classic",m="border-lead",n="decoration/shadow/shadow-small.png",k="qx.theme.classic.Decoration",l="decoration/shadow/shadow.png";
qx.Theme.define(k,{aliases:{decoration:o},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:u}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:w}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:w}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:l,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:u,innerColor:p,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:s,color:m}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:t,colorLeft:t,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:x,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:q,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:x,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:x,styleRight:f,widthBottom:2,colorBottom:r,styleBottom:f}}}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var fW="button",fV="widget",fU="background",fT="atom",fS="inset-thin",fR="outset",fQ="text-disabled",fP="text-selected",fO="inset",fN="groupbox",eQ="cell",eP="focused-inset",eO="tooltip",eN="image",eM="menu-button",eL="middle",eK="decoration/arrows/down.gif",eJ="spinner",eI="background-selected",eH="list",ge="button-hovered",gf="checkbox",gc="toolbar-button",gd="button-frame",ga="popup",gb="textfield",fX="label",fY="background-invalid",gg="background-disabled",gh="bold",fw="white",fv="shadow-small",fy="invalid",fx="scrollbar",fA="center",fz="datechooser/button",fC="button-abandoned",fB="background-light",fu="main",ft="date-chooser",dg="date-chooser-title",dh="radiobutton",di="default",dj="combobox",dk="background-field",dl="outset-thin",dm="menu-slidebar-button",dn="scrollbar/button",dp="combobox/button",dq="table-header-cell",gv="decoration/arrows/right.gif",gu="decoration/arrows/up.gif",gt="text",gs="decoration/arrows/down-small.gif",gz="icon/16/places/folder.png",gy="tree-folder",gx="slidebar/button-forward",gw="icon/16/mimetypes/text-plain.png",gB="right-top",gA="button-checked",ed=".png",ee="background-focused",eb="datechooser",ec="slidebar/button-backward",eh="selectbox",ei="treevirtual-folder",ef="decoration/form/",eg="decoration/tree/minus.gif",dY="",ea="decoration/tree/plus.gif",dI="-invalid",dH="decoration/arrows/left.gif",dK="icon/16/places/folder-open.png",dJ="table-row-background-even",dE="decoration/treevirtual/cross_minus.gif",dD="radiobutton-hovered",dG="decoration/treevirtual/start_plus.gif",dF="decoration/cursors/",dC="icon/16/actions/dialog-ok.png",dB="slidebar",en="table-scroller-focus-indicator",eo="move-frame",ep="nodrop",eq="tabview-page-button-left",ej="decoration/arrows/up-small.gif",ek="move",el="radiobutton-checked-focused",em="qx.theme.classic.Appearance",er="decoration/menu/checkbox.gif",es="tooltip-error",dT="right",dS="decoration/arrows/rewind.gif",dR="table-scroller-header",dQ="radiobutton-disabled",dP="table-pane",dO="focused-outset",dN="checkbox-hovered",dM="icon/16/actions/dialog-cancel.png",dX="menu-slidebar",dW="datechooser-date-pane",et="background-pane",eu="decoration/treevirtual/cross_plus.gif",ev="qx/icon/Oxygen/16/actions/window-close.png",ew="datechooser-week",ex="icon/16/apps/office-calendar.png",ey="datechooser-weekday",ez="table-header-border",eA="table-header-cell-hover",eB="window-active-caption-text",eC="window-active-caption",eX="icon",eW="checkbox-checked-focused",eV="toolbar-separator",eU="groove",fc="checkbox-pressed",fb="tooltip-invalid",fa="decoration/window/restore.gif",eY="decoration/menu/checkbox-invert.gif",ff="scrollarea",fe="window-inactive-caption-text",fp="best-fit",fq="up.gif",fn="keep-align",fo="tabview-page-button-right",fl="checkbox-disabled",fm="tabview-page-button-top",fj="tabview-page-button-bottom",fk="row-layer",fr="decoration/menu/radiobutton.gif",fs="decoration/arrows/",fG="decoration/table/descending.png",fF="tooltip-text",fI="checkbox-checked-hovered",fH="left.gif",fK="decoration/arrows/up-invert.gif",fJ="alias",fM="checkbox-checked-disabled",fL="decoration/arrows/right-invert.gif",fE="radiobutton-checked-disabled",fD="lead-item",go="checkbox-focused",gp="border-dark",gq="decoration/treevirtual/end_plus.gif",gr="decoration/treevirtual/start_minus.gif",gk="radiobutton-checked-hovered",gl="decoration/window/minimize.gif",gm="checkbox-checked",gn="table-header-cell-hovered",gi="down.gif",gj="decoration/treevirtual/end.gif",df="decoration/treevirtual/end_minus.gif",de="window-inactive-caption",dd="decoration/menu/radiobutton-invert.gif",dc="text-placeholder",db="slider",da="decoration/table/select-column-order.png",cY="decoration/arrows/next.gif",cX="table-header",cW="decoration/treevirtual/only_minus.gif",cV="datechooser-week-header",dt="decoration/window/maximize.gif",du="decoration/treevirtual/only_plus.gif",dr="checkbox-checked-pressed",ds="decoration/arrows/down-invert.gif",dx="menu-separator",dy="decoration/splitpane/knob-vertical.png",dv=".gif",dw="decoration/arrows/forward.gif",dz="radiobutton-checked-pressed",dA="table-statusbar",fg="radiobutton-pressed",fd="copy",fi="table-row-background-selected",fh="radiobutton-focused",eS="decoration/splitpane/knob-horizontal.png",eR="right.gif",dL="radiobutton-checked",eT="decoration/treevirtual/cross.gif",dV="decoration/table/ascending.png",dU="decoration/treevirtual/line.gif",eD="date-chooser-selected",eE="toolbar-part-handle",eF="decoration/window/close.gif",eG="icon/16/actions/view-refresh.png";
qx.Theme.define(em,{appearances:{"widget":{},"label":{style:function(gH){return {textColor:gH.disabled?fQ:undefined};
}},"image":{style:function(W){return {opacity:!W.replacement&&W.disabled?0.3:undefined};
}},"atom":{},"atom/label":fX,"atom/icon":eN,"root":{style:function(r){return {backgroundColor:fU,textColor:gt,font:di};
}},"popup":{style:function(cs){return {decorator:fu,backgroundColor:et,shadow:fv};
}},"tooltip":{include:ga,style:function(x){return {backgroundColor:eO,textColor:fF,decorator:eO,shadow:fv,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":fT,"tooltip-error":{include:eO,style:function(bP){return {textColor:fP,showTimeout:100,hideTimeout:10000,decorator:es,font:gh,backgroundColor:fb};
}},"tooltip-error/atom":fT,"iframe":{style:function(cU){return {backgroundColor:fw,decorator:fO};
}},"move-frame":{style:function(bJ){return {decorator:fu};
}},"resize-frame":eo,"dragdrop-cursor":{style:function(be){var bf=ep;

if(be.copy){bf=fd;
}else if(be.move){bf=ek;
}else if(be.alias){bf=fJ;
}return {source:dF+bf+dv,position:gB,offset:[2,16,2,6]};
}},"button-frame":{alias:fT,style:function(L){if(L.pressed||L.abandoned||L.checked){var N=!L.inner&&L.focused?eP:fO;
var M=[4,3,2,5];
}else{var N=!L.inner&&L.focused?dO:fR;
var M=[3,4];
}return {backgroundColor:L.abandoned?fC:L.hovered?ge:L.checked?gA:fW,decorator:N,padding:M};
}},"button":{alias:gd,include:gd,style:function(C){return {center:true};
}},"hover-button":{alias:fT,include:fT,style:function(bO){return {backgroundColor:bO.hovered?eI:undefined,textColor:bO.hovered?fP:undefined};
}},"splitbutton":{},"splitbutton/button":fW,"splitbutton/arrow":{alias:fW,include:fW,style:function(bw){return {icon:eK};
}},"scrollarea/corner":{style:function(){return {backgroundColor:fU};
}},"scrollarea":fV,"scrollarea/pane":fV,"scrollarea/scrollbar-x":fx,"scrollarea/scrollbar-y":fx,"list":{alias:ff,style:function(bR){var bV;
var bT=!!bR.focused;
var bU=!!bR.invalid;
var bS=!!bR.disabled;

if(bU&&!bS){bV=fY;
}else if(bT&&!bU&&!bS){bV=ee;
}else if(bS){bV=gg;
}else{bV=fw;
}return {decorator:bR.focused?eP:fO,backgroundColor:bV};
}},"listitem":{alias:fT,style:function(v){return {gap:4,padding:v.lead?[2,4]:[3,5],backgroundColor:v.selected?eI:undefined,textColor:v.selected?fP:undefined,decorator:v.lead?fD:undefined};
}},"textfield":{style:function(bl){var bq;
var bo=!!bl.focused;
var bp=!!bl.invalid;
var bm=!!bl.disabled;

if(bp&&!bm){bq=fY;
}else if(bo&&!bp&&!bm){bq=ee;
}else if(bm){bq=gg;
}else{bq=dk;
}var bn;

if(bl.disabled){bn=fQ;
}else if(bl.showingPlaceholder){bn=dc;
}else{bn=undefined;
}return {decorator:bl.focused?eP:fO,padding:[2,3],textColor:bn,backgroundColor:bq};
}},"textarea":gb,"checkbox":{alias:fT,style:function(cz){var cB;

if(cz.checked&&cz.focused){cB=eW;
}else if(cz.checked&&cz.disabled){cB=fM;
}else if(cz.checked&&cz.pressed){cB=dr;
}else if(cz.checked&&cz.hovered){cB=fI;
}else if(cz.checked){cB=gm;
}else if(cz.disabled){cB=fl;
}else if(cz.focused){cB=go;
}else if(cz.pressed){cB=fc;
}else if(cz.hovered){cB=dN;
}else{cB=gf;
}var cA=cz.invalid&&!cz.disabled?dI:dY;
return {icon:ef+cB+cA+ed,gap:6};
}},"radiobutton":{alias:gf,include:gf,style:function(gD){var gF;

if(gD.checked&&gD.focused){gF=el;
}else if(gD.checked&&gD.disabled){gF=fE;
}else if(gD.checked&&gD.pressed){gF=dz;
}else if(gD.checked&&gD.hovered){gF=gk;
}else if(gD.checked){gF=dL;
}else if(gD.disabled){gF=dQ;
}else if(gD.focused){gF=fh;
}else if(gD.pressed){gF=fg;
}else if(gD.hovered){gF=dD;
}else{gF=dh;
}var gE=gD.invalid&&!gD.disabled?dI:dY;
return {icon:ef+gF+gE+ed,shadow:undefined};
}},"spinner":{style:function(U){return {decorator:U.focused?eP:fO,textColor:U.disabled?fQ:undefined};
}},"spinner/textfield":{include:gb,style:function(ha){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:fW,include:fW,style:function(H){return {icon:ej,padding:H.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:H.hovered?ge:fW};
}},"spinner/downbutton":{alias:fW,include:fW,style:function(bE){return {icon:gs,padding:bE.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:bE.hovered?ge:fW};
}},"datefield":dj,"datefield/button":{alias:dp,include:dp,style:function(bg){return {icon:ex,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:eb,include:eb,style:function(z){return {decorator:z.focused?eP:fO};
}},"groupbox":{style:function(bB){return {backgroundColor:fU};
}},"groupbox/legend":{alias:fT,style:function(T){return {backgroundColor:fU,textColor:T.invalid?fy:undefined,paddingRight:4,paddingLeft:4,marginRight:10,marginLeft:10};
}},"groupbox/frame":{style:function(bs){return {padding:[12,9],decorator:eU};
}},"check-groupbox":fN,"check-groupbox/legend":{alias:gf,include:gf,style:function(br){return {backgroundColor:fU,textColor:br.invalid?fy:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"radio-groupbox":fN,"radio-groupbox/legend":{alias:dh,include:dh,style:function(gV){return {backgroundColor:fU,textColor:gV.invalid?fy:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"toolbar":{style:function(cp){return {backgroundColor:fU};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(cP){return {decorator:eE,backgroundColor:fU,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(p){return {margin:[3,2],decorator:eV};
}},"toolbar-button":{alias:fT,style:function(cG){if(cG.pressed||cG.checked||cG.abandoned){var cI=fS;
var cH=[3,2,1,4];
}else if(cG.hovered){var cI=dl;
var cH=[2,3];
}else{var cI=undefined;
var cH=[3,4];
}return {cursor:di,decorator:cI,padding:cH,backgroundColor:cG.abandoned?fC:cG.checked?fB:fW};
}},"toolbar-menubutton":{alias:gc,include:gc,style:function(bX){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:eN,include:eN,style:function(bQ){return {source:gs};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":gc,"toolbar-splitbutton/arrow":{alias:gc,include:gc,style:function(bk){return {icon:eK};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:fW,include:fW,style:function(gG){return {icon:gG.vertical?eK:cY};
}},"slidebar/button-backward":{alias:fW,include:fW,style:function(d){return {icon:d.vertical?gu:dH};
}},"tabview":{},"tabview/bar":{alias:dB,style:function(ce){var cf=0,ci=0,cg=0,ch=0;

if(ce.barTop){cg=-2;
}else if(ce.barBottom){cf=-2;
}else if(ce.barRight){ch=-2;
}else{ci=-2;
}return {marginBottom:cg,marginTop:cf,marginLeft:ch,marginRight:ci};
}},"tabview/bar/button-forward":{include:gx,alias:gx,style:function(cw){if(cw.barTop||cw.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:ec,alias:ec,style:function(bK){if(bK.barTop||bK.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(hb){return {backgroundColor:fU,decorator:fR,padding:10};
}},"tabview-page":fV,"tabview-page/button":{style:function(gJ){var gS;
var gQ=0,gO=0,gL=0,gN=0;

if(gJ.barTop||gJ.barBottom){var gM=2,gK=2,gP=6,gR=6;
}else{var gM=6,gK=6,gP=6,gR=6;
}
if(gJ.barTop){gS=fm;
}else if(gJ.barRight){gS=fo;
}else if(gJ.barBottom){gS=fj;
}else{gS=eq;
}
if(gJ.checked){if(gJ.barTop||gJ.barBottom){gP+=2;
gR+=2;
}else{gM+=2;
gK+=2;
}}else{if(gJ.barTop||gJ.barBottom){gL+=2;
gQ+=2;
}else if(gJ.barLeft||gJ.barRight){gO+=2;
gN+=2;
}}
if(gJ.checked){if(!gJ.firstTab){if(gJ.barTop||gJ.barBottom){gN=-4;
}else{gQ=-4;
}}
if(!gJ.lastTab){if(gJ.barTop||gJ.barBottom){gO=-4;
}else{gL=-4;
}}}return {zIndex:gJ.checked?10:5,decorator:gS,backgroundColor:fU,padding:[gM,gR,gK,gP],margin:[gQ,gO,gL,gN]};
}},"tabview-page/button/label":fX,"tabview-page/button/icon":eN,"tabview-page/button/close-button":{alias:fT,style:function(cN){return {icon:ev};
}},"scrollbar":{},"scrollbar/slider":{alias:db,style:function(cv){return {backgroundColor:fB};
}},"scrollbar/slider/knob":{include:gd,style:function(cJ){return {height:14,width:14,minHeight:cJ.horizontal?undefined:9,minWidth:cJ.horizontal?9:undefined};
}},"scrollbar/button":{alias:fW,include:fW,style:function(bt){var bu;

if(bt.up||bt.down){if(bt.pressed||bt.abandoned||bt.checked){bu=[5,2,3,4];
}else{bu=[4,3];
}}else{if(bt.pressed||bt.abandoned||bt.checked){bu=[4,3,2,5];
}else{bu=[3,4];
}}var bv=fs;

if(bt.left){bv+=fH;
}else if(bt.right){bv+=eR;
}else if(bt.up){bv+=fq;
}else{bv+=gi;
}return {padding:bu,icon:bv};
}},"scrollbar/button-begin":dn,"scrollbar/button-end":dn,"slider":{style:function(I){var J;

if(I.disabled){J=gg;
}else if(I.invalid){J=fY;
}else if(I.focused){J=fB;
}else{J=dk;
}return {backgroundColor:J,decorator:I.focused?eP:fO};
}},"slider/knob":{include:gd,style:function(gT){return {width:14,height:14,decorator:fR};
}},"tree-folder/open":{style:function(D){return {source:D.opened?eg:ea};
}},"tree-folder":{style:function(hc){return {padding:[2,3,2,0],icon:hc.opened?dK:gz};
}},"tree-folder/icon":{style:function(cn){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(i){return {padding:[1,2],backgroundColor:i.selected?eI:undefined,textColor:i.selected?fP:undefined};
}},"tree-file":{include:gy,alias:gy,style:function(u){return {icon:gw};
}},"tree":{include:eH,alias:eH,style:function(cq){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(bx){return {decorator:fu};
}},"treevirtual-folder":{style:function(by){return {icon:(by.opened?dK:gz)};
}},"treevirtual-file":{include:ei,alias:ei,style:function(cu){return {icon:gw};
}},"treevirtual-line":{style:function(cx){return {icon:dU};
}},"treevirtual-contract":{style:function(gY){return {icon:eg};
}},"treevirtual-expand":{style:function(ct){return {icon:ea};
}},"treevirtual-only-contract":{style:function(gC){return {icon:cW};
}},"treevirtual-only-expand":{style:function(bG){return {icon:du};
}},"treevirtual-start-contract":{style:function(y){return {icon:gr};
}},"treevirtual-start-expand":{style:function(bI){return {icon:dG};
}},"treevirtual-end-contract":{style:function(bM){return {icon:df};
}},"treevirtual-end-expand":{style:function(cy){return {icon:gq};
}},"treevirtual-cross-contract":{style:function(cS){return {icon:dE};
}},"treevirtual-cross-expand":{style:function(m){return {icon:eu};
}},"treevirtual-end":{style:function(bb){return {icon:gj};
}},"treevirtual-cross":{style:function(o){return {icon:eT};
}},"window":{style:function(bC){return {contentPadding:[10,10,10,10],backgroundColor:fU,decorator:bC.maximized?undefined:fR,shadow:bC.maximized?undefined:fv};
}},"window/pane":{},"window/captionbar":{style:function(cd){return {padding:1,backgroundColor:cd.active?eC:de,textColor:cd.active?eB:fe};
}},"window/icon":{style:function(ca){return {marginRight:4};
}},"window/title":{style:function(g){return {cursor:di,font:gh,marginRight:20,alignY:eL};
}},"window/minimize-button":{include:fW,alias:fW,style:function(n){return {icon:gl,padding:n.pressed||n.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:fW,alias:fW,style:function(ba){return {icon:fa,padding:ba.pressed||ba.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:fW,alias:fW,style:function(P){return {icon:dt,padding:P.pressed||P.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:fW,alias:fW,style:function(gI){return {marginLeft:2,icon:eF,padding:gI.pressed||gI.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(t){return {decorator:fS,padding:[2,6]};
}},"window/statusbar-text":fX,"resizer":{style:function(bh){return {decorator:fR};
}},"splitpane":{},"splitpane/splitter":{style:function(bc){return {backgroundColor:fU};
}},"splitpane/splitter/knob":{style:function(co){return {source:co.horizontal?eS:dy,padding:2};
}},"splitpane/slider":{style:function(cM){return {backgroundColor:gp,opacity:0.3};
}},"selectbox":{include:gd,style:function(A){var B=fW;

if(A.invalid&&!A.disabled){B=fY;
}else if(A.abandoned){B=fC;
}else if(!A.abandoned&&A.hovered){B=ge;
}else if(!A.abandoned&&!A.hovered&&A.checked){B=gA;
}return {backgroundColor:B};
}},"selectbox/atom":fT,"selectbox/popup":ga,"selectbox/list":eH,"selectbox/arrow":{style:function(cL){return {source:eK,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(bj){return {decorator:fR};
}},"datechooser/navigation-bar":{style:function(cQ){return {backgroundColor:ft,textColor:cQ.disabled?fQ:cQ.invalid?fy:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":eO,"datechooser/last-month-button-tooltip":eO,"datechooser/next-year-button-tooltip":eO,"datechooser/next-month-button-tooltip":eO,"datechooser/last-year-button":fz,"datechooser/last-month-button":fz,"datechooser/next-year-button":fz,"datechooser/next-month-button":fz,"datechooser/button/icon":{},"datechooser/button":{style:function(e){var f={width:17,show:eX};

if(e.lastYear){f.icon=dS;
}else if(e.lastMonth){f.icon=dH;
}else if(e.nextYear){f.icon=dw;
}else if(e.nextMonth){f.icon=gv;
}
if(e.pressed||e.checked||e.abandoned){f.decorator=fS;
}else if(e.hovered){f.decorator=dl;
}else{f.decorator=undefined;
}
if(e.pressed||e.checked||e.abandoned){f.padding=[2,0,0,2];
}else if(e.hovered){f.padding=1;
}else{f.padding=2;
}return f;
}},"datechooser/month-year-label":{style:function(cr){return {font:gh,textAlign:fA};
}},"datechooser/date-pane":{style:function(s){return {decorator:dW,backgroundColor:ft};
}},"datechooser/weekday":{style:function(cm){return {decorator:ey,font:gh,textAlign:fA,textColor:cm.disabled?fQ:cm.weekend?dg:ft,backgroundColor:cm.weekend?ft:dg};
}},"datechooser/day":{style:function(gU){return {textAlign:fA,decorator:gU.today?fu:undefined,textColor:gU.disabled?fQ:gU.selected?fP:gU.otherMonth?fQ:undefined,backgroundColor:gU.disabled?undefined:gU.selected?eD:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(X){return {textAlign:fA,textColor:dg,padding:[2,4],decorator:X.header?cV:ew};
}},"combobox":{style:function(bz){var bA;

if(bz.disabled){bA=gg;
}else if(bz.invalid){bA=fY;
}else if(bz.focused){bA=fB;
}else{bA=dk;
}return {decorator:bz.focused?eP:fO,textColor:bz.disabled?fQ:undefined,backgroundColor:bA};
}},"combobox/button":{alias:fW,include:fW,style:function(cj){return {icon:eK,backgroundColor:cj.hovered?ge:fW};
}},"combobox/popup":ga,"combobox/list":eH,"combobox/textfield":{include:gb,style:function(bi){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(j){var k={backgroundColor:fU,shadow:fv,decorator:fR,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:j.submenu||j.contextmenu?fp:fn};

if(j.submenu){k.position=gB;
k.offset=[-2,-3];
}
if(j.contextmenu){k.offset=4;
}return k;
}},"menu/slidebar":dX,"menu-slidebar":fV,"menu-slidebar-button":{style:function(cb){return {backgroundColor:cb.hovered?eI:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:dm,style:function(bL){return {icon:bL.hovered?fK:gu};
}},"menu-slidebar/button-forward":{include:dm,style:function(bH){return {icon:bH.hovered?ds:eK};
}},"menu-separator":{style:function(gX){return {height:0,decorator:dx,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:fT,style:function(l){return {backgroundColor:l.selected?eI:undefined,textColor:l.selected?fP:undefined,padding:[2,6]};
}},"menu-button/icon":{include:eN,style:function(V){return {alignY:eL};
}},"menu-button/label":{include:fX,style:function(Y){return {alignY:eL,padding:1};
}},"menu-button/shortcut":{include:fX,style:function(cl){return {alignY:eL,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:eN,style:function(q){return {source:q.selected?fL:gv,alignY:eL};
}},"menu-checkbox":{alias:eM,include:eM,style:function(w){return {icon:!w.checked?undefined:w.selected?eY:er};
}},"menu-radiobutton":{alias:eM,include:eM,style:function(Q){return {icon:!Q.checked?undefined:Q.selected?dd:fr};
}},"menubar":{style:function(S){return {backgroundColor:fU,decorator:fR};
}},"menubar-button":{alias:fT,style:function(bY){return {padding:[2,6],backgroundColor:bY.pressed||bY.hovered?eI:undefined,textColor:bY.pressed||bY.hovered?fP:undefined};
}},"colorselector":fV,"colorselector/control-bar":fV,"colorselector/visual-pane":fN,"colorselector/control-pane":fV,"colorselector/preset-grid":fV,"colorselector/colorbucket":{style:function(cD){return {decorator:fS,width:16,height:16};
}},"colorselector/preset-field-set":fN,"colorselector/input-field-set":fN,"colorselector/preview-field-set":fN,"colorselector/hex-field-composite":fV,"colorselector/hex-field":gb,"colorselector/rgb-spinner-composite":fV,"colorselector/rgb-spinner-red":eJ,"colorselector/rgb-spinner-green":eJ,"colorselector/rgb-spinner-blue":eJ,"colorselector/hsb-spinner-composite":fV,"colorselector/hsb-spinner-hue":eJ,"colorselector/hsb-spinner-saturation":eJ,"colorselector/hsb-spinner-brightness":eJ,"colorselector/preview-content-old":{style:function(bD){return {decorator:fS,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(O){return {decorator:fS,backgroundColor:fw,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(b){return {decorator:fS,margin:5};
}},"colorselector/brightness-field":{style:function(bN){return {decorator:fS,margin:[5,7]};
}},"colorselector/hue-saturation-pane":fV,"colorselector/hue-saturation-handle":fV,"colorselector/brightness-pane":fV,"colorselector/brightness-handle":fV,"table":fV,"table/statusbar":{style:function(gW){return {decorator:dA,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:fW,style:function(E){var G,F;

if(E.pressed||E.checked||E.abandoned){G=fS;
F=[3,2,1,4];
}else if(E.hovered){G=dl;
F=[2,3];
}else{G=undefined;
F=[3,4];
}return {decorator:G,padding:F,backgroundColor:E.abandoned?fC:fW,icon:da};
}},"table-column-reset-button":{extend:eM,alias:eM,style:function(){return {icon:eG};
}},"table-scroller/scrollbar-x":fx,"table-scroller/scrollbar-y":fx,"table-scroller":fV,"table-scroller/header":{style:function(cC){return {decorator:dR,backgroundColor:cX};
}},"table-scroller/pane":{style:function(K){return {backgroundColor:dP};
}},"table-scroller/focus-indicator":{style:function(R){return {decorator:en};
}},"table-scroller/resize-line":{style:function(cK){return {backgroundColor:ez,width:3};
}},"table-header-cell":{alias:fT,style:function(c){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:c.hovered?0:2,decorator:c.hovered?gn:dq,backgroundColor:c.hovered?eA:dq,sortIcon:c.sorted?(c.sortedAscending?dV:fG):undefined};
}},"table-header-cell/sort-icon":{style:function(cT){return {alignY:eL};
}},"table-editor-textfield":{include:gb,style:function(ck){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:eh,alias:eh,style:function(cO){return {padding:[0,2]};
}},"table-editor-combobox":{include:dj,alias:dj,style:function(h){return {decorator:undefined};
}},"colorpopup":{alias:ga,include:ga,style:function(bd){return {decorator:fR,padding:5,backgroundColor:fU};
}},"colorpopup/field":{style:function(a){return {decorator:fS,margin:2,width:14,height:14,backgroundColor:fU};
}},"colorpopup/selector-button":fW,"colorpopup/auto-button":fW,"colorpopup/preview-pane":fN,"colorpopup/current-preview":{style:function(bW){return {height:20,padding:4,marginLeft:4,decorator:fS,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(cF){return {height:20,padding:4,marginRight:4,decorator:fS,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:fW,include:fW,style:function(cE){return {icon:dC};
}},"colorpopup/colorselector-cancelbutton":{alias:fW,include:fW,style:function(bF){return {icon:dM};
}},"virtual-list":eH,"virtual-list/row-layer":fk,"row-layer":fV,"column-layer":fV,"cell":{style:function(cR){return {backgroundColor:cR.selected?fi:dJ,textColor:cR.selected?fP:gt,padding:[3,6]};
}},"cell-string":eQ,"cell-number":{include:eQ,style:function(hd){return {textAlign:dT};
}},"cell-image":eQ,"cell-boolean":eQ,"cell-atom":eQ,"cell-date":eQ,"cell-html":eQ,"htmlarea":{"include":fV,style:function(cc){return {backgroundColor:fw};
}}}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a},icons:{}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
})();
(function(){var K="px",J="qx.client",I="div",H="img",G="",F="no-repeat",E="scale-x",D="mshtml",C="scale",B="scale-y",bh="qx/icon",bf="repeat",be=".png",bd="crop",bc="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",bb='<div style="',ba="repeat-y",Y='<img src="',X="qx.bom.element.Decoration",W="', sizingMethod='",R="png",S="')",P='"></div>',Q='"/>',N='" style="',O="none",L="webkit",M=" ",T="repeat-x",U="DXImageTransform.Microsoft.AlphaImageLoader",V="absolute";
qx.Class.define(X,{statics:{DEBUG:false,__hS:{},__hT:qx.core.Variant.isSet(J,D),__hU:qx.core.Variant.select(J,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hV:{"scale-x":H,"scale-y":H,"scale":H,"repeat":I,"no-repeat":I,"repeat-x":I,"repeat-y":I},update:function(f,g,h,i){var k=this.getTagName(h,g);

if(k!=f.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var l=this.getAttributes(g,h,i);

if(k===H){f.src=l.src;
}if(f.style.backgroundPosition!=G&&l.style.backgroundPosition===undefined){l.style.backgroundPosition=null;
}if(f.style.clip!=G&&l.style.clip===undefined){l.style.clip=null;
}var j=qx.bom.element.Style;
j.setStyles(f,l.style);
if(this.__hT){try{f.filters[U].apply();
}catch(e){}}},create:function(n,o,p){var q=this.getTagName(o,n);
var s=this.getAttributes(n,o,p);
var r=qx.bom.element.Style.compile(s.style);

if(q===H){return Y+s.src+N+r+Q;
}else{return bb+r+P;
}},getTagName:function(bq,br){if(qx.core.Variant.isSet(J,D)){if(br&&this.__hT&&this.__hU[bq]&&qx.lang.String.endsWith(br,be)){return I;
}}return this.__hV[bq];
},getAttributes:function(bi,bj,bk){if(!bk){bk={};
}
if(!bk.position){bk.position=V;
}
if(qx.core.Variant.isSet(J,D)){bk.fontSize=0;
bk.lineHeight=0;
}else if(qx.core.Variant.isSet(J,L)){bk.WebkitUserDrag=O;
}var bm=qx.util.ResourceManager.getInstance().getImageFormat(bi)||qx.io.ImageLoader.getFormat(bi);
{};
var bl;
if(this.__hT&&this.__hU[bj]&&bm===R){bl=this.__hY(bk,bj,bi);
}else{if(bj===C){bl=this.__ia(bk,bj,bi);
}else if(bj===E||bj===B){bl=this.__ib(bk,bj,bi);
}else{bl=this.__ie(bk,bj,bi);
}}return bl;
},__hW:function(bW,bX,bY){if(bW.width==null&&bX!=null){bW.width=bX+K;
}
if(bW.height==null&&bY!=null){bW.height=bY+K;
}return bW;
},__hX:function(bn){var bo=qx.util.ResourceManager.getInstance().getImageWidth(bn)||qx.io.ImageLoader.getWidth(bn);
var bp=qx.util.ResourceManager.getInstance().getImageHeight(bn)||qx.io.ImageLoader.getHeight(bn);
return {width:bo,height:bp};
},__hY:function(bQ,bR,bS){var bV=this.__hX(bS);
bQ=this.__hW(bQ,bV.width,bV.height);
var bU=bR==F?bd:C;
var bT=bc+qx.util.ResourceManager.getInstance().toUri(bS)+W+bU+S;
bQ.filter=bT;
bQ.backgroundImage=bQ.backgroundRepeat=G;
return {style:bQ};
},__ia:function(bE,bF,bG){var bH=qx.util.ResourceManager.getInstance().toUri(bG);
var bI=this.__hX(bG);
bE=this.__hW(bE,bI.width,bI.height);
return {src:bH,style:bE};
},__ib:function(t,u,v){var z=qx.util.ResourceManager.getInstance();
var y=z.isClippedImage(v);
var A=this.__hX(v);

if(y){var x=z.getData(v);
var w=z.toUri(x[4]);

if(u===E){t=this.__ic(t,x,A.height);
}else{t=this.__id(t,x,A.width);
}return {src:w,style:t};
}else{{};

if(u==E){t.height=A.height==null?null:A.height+K;
}else if(u==B){t.width=A.width==null?null:A.width+K;
}var w=z.toUri(v);
return {src:w,style:t};
}},__ic:function(a,b,c){var d=qx.util.ResourceManager.getInstance().getImageHeight(b[4]);
a.clip={top:-b[6],height:c};
a.height=d+K;
if(a.top!=null){a.top=(parseInt(a.top,10)+b[6])+K;
}else if(a.bottom!=null){a.bottom=(parseInt(a.bottom,10)+c-d-b[6])+K;
}return a;
},__id:function(bA,bB,bC){var bD=qx.util.ResourceManager.getInstance().getImageWidth(bB[4]);
bA.clip={left:-bB[5],width:bC};
bA.width=bD+K;
if(bA.left!=null){bA.left=(parseInt(bA.left,10)+bB[5])+K;
}else if(bA.right!=null){bA.right=(parseInt(bA.right,10)+bC-bD-bB[5])+K;
}return bA;
},__ie:function(bs,bt,bu){var bz=qx.util.ResourceManager.getInstance().isClippedImage(bu);
var by=this.__hX(bu);
if(bz&&bt!==bf){var bx=qx.util.ResourceManager.getInstance().getData(bu);
var bw=qx.bom.element.Background.getStyles(bx[4],bt,bx[5],bx[6]);

for(var bv in bw){bs[bv]=bw[bv];
}
if(by.width!=null&&bs.width==null&&(bt==ba||bt===F)){bs.width=by.width+K;
}
if(by.height!=null&&bs.height==null&&(bt==T||bt===F)){bs.height=by.height+K;
}return {style:bs};
}else{{};
bs=this.__hW(bs,by.width,by.height);
bs=this.__if(bs,bu,bt);
return {style:bs};
}},__if:function(bJ,bK,bL){var top=null;
var bP=null;

if(bJ.backgroundPosition){var bM=bJ.backgroundPosition.split(M);
bP=parseInt(bM[0]);

if(isNaN(bP)){bP=bM[0];
}top=parseInt(bM[1]);

if(isNaN(top)){top=bM[1];
}}var bO=qx.bom.element.Background.getStyles(bK,bL,bP,top);

for(var bN in bO){bJ[bN]=bO[bN];
}if(bJ.filter){bJ.filter=G;
}return bJ;
},__ig:function(m){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(m)&&m.indexOf(bh)==-1){if(!this.__hS[m]){qx.log.Logger.debug("Potential clipped image candidate: "+m);
this.__hS[m]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(J,{"mshtml":function(){return qx.bom.element.Decoration.__hT;
},"default":function(){return false;
}})}});
})();
(function(){var n="qx.client",m="load",k="qx.io.ImageLoader";
qx.Bootstrap.define(k,{statics:{__ih:{},__ii:{width:null,height:null},__ij:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(A){var B=this.__ih[A];
return !!(B&&B.loaded);
},isFailed:function(h){var j=this.__ih[h];
return !!(j&&j.failed);
},isLoading:function(o){var p=this.__ih[o];
return !!(p&&p.loading);
},getFormat:function(q){var r=this.__ih[q];
return r?r.format:null;
},getSize:function(a){var b=this.__ih[a];
return b?
{width:b.width,height:b.height}:this.__ii;
},getWidth:function(G){var H=this.__ih[G];
return H?H.width:null;
},getHeight:function(C){var D=this.__ih[C];
return D?D.height:null;
},load:function(t,u,v){var w=this.__ih[t];

if(!w){w=this.__ih[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__ik,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
}},__ik:qx.event.GlobalError.observeMethod(function(event,c,d){var e=this.__ih[d];
if(event.type===m){e.loaded=true;
e.width=this.__il(c);
e.height=this.__im(c);
var f=this.__ij.exec(d);

if(f!=null){e.format=f[1];
}}else{e.failed=true;
}c.onload=c.onerror=null;
var g=e.callbacks;
delete e.loading;
delete e.callbacks;
for(var i=0,l=g.length;i<l;i+=2){g[i].call(g[i+1],d,e);
}}),__il:qx.core.Variant.select(n,{"gecko":function(F){return F.naturalWidth;
},"default":function(s){return s.width;
}}),__im:qx.core.Variant.select(n,{"gecko":function(z){return z.naturalHeight;
},"default":function(E){return E.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__in:[i,null,h,b,null,j,e,null,j],__io:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ip:function(n,top){var o=qx.bom.client.Engine;

if(o.GECKO&&o.VERSION<1.9&&n==top&&typeof n==m){top+=0.01;
}
if(n){var p=(typeof n==m)?n+k:n;
}else{p=l;
}
if(top){var q=(typeof top==m)?top+k:top;
}else{q=l;
}return p+d+q;
},compile:function(r,s,t,top){var u=this.__ip(t,top);
var v=qx.util.ResourceManager.getInstance().toUri(r);
var w=this.__in;
w[1]=v;
w[4]=u;
w[7]=s;
return w.join(g);
},getStyles:function(D,E,F,top){if(!D){return this.__io;
}var G=this.__ip(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I={backgroundPosition:G,backgroundImage:c+H+f};

if(E!=null){I.backgroundRepeat=E;
}return I;
},set:function(x,y,z,A,top){var B=this.getStyles(y,z,A,top);

for(var C in B){x.style[C]=B[C];
}}}});
})();
(function(){var l="_applyTheme",k="qx.theme.manager.Color",j="Theme",i="changeTheme",h="string",g="singleton";
qx.Class.define(k,{type:g,extend:qx.util.ValueManager,properties:{theme:{check:j,nullable:true,apply:l,event:i}},members:{_applyTheme:function(a){var b={};

if(a){var c=a.colors;
var d=qx.util.ColorUtil;
var e;

for(var f in c){e=c[f];

if(typeof e===h){if(!d.isCssString(e)){throw new Error("Could not parse color: "+e);
}}else if(e instanceof Array){e=d.rgbToRgbString(e);
}else{throw new Error("Could not parse color: "+e);
}b[f]=e;
}}this._setDynamic(b);
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.colors[p]){return s[p]=r.colors[p];
}return p;
},isDynamic:function(m){var o=this._dynamic;

if(m&&(o[m]!==undefined)){return true;
}var n=this.getTheme();

if(n!==null&&m&&(n.colors[m]!==undefined)){o[m]=n.colors[m];
return true;
}return false;
}}});
})();
(function(){var k=",",j="rgb(",h=")",e="qx.theme.manager.Color",d="qx.util.ColorUtil";
qx.Class.define(d,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(m){return this.NAMED[m]!==undefined;
},isSystemColor:function(n){return this.SYSTEM[n]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(e);
},isThemedColor:function(R){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(R);
},stringToRgb:function(I){if(this.supportsThemes()&&this.isThemedColor(I)){var I=qx.theme.manager.Color.getInstance().resolveDynamic(I);
}
if(this.isNamedColor(I)){return this.NAMED[I];
}else if(this.isSystemColor(I)){throw new Error("Could not convert system colors to RGB: "+I);
}else if(this.isRgbString(I)){return this.__cS();
}else if(this.isHex3String(I)){return this.__cU();
}else if(this.isHex6String(I)){return this.__cV();
}throw new Error("Could not parse color: "+I);
},cssStringToRgb:function(L){if(this.isNamedColor(L)){return this.NAMED[L];
}else if(this.isSystemColor(L)){throw new Error("Could not convert system colors to RGB: "+L);
}else if(this.isRgbString(L)){return this.__cS();
}else if(this.isRgbaString(L)){return this.__cT();
}else if(this.isHex3String(L)){return this.__cU();
}else if(this.isHex6String(L)){return this.__cV();
}throw new Error("Could not parse color: "+L);
},stringToRgbString:function(Q){return this.rgbToRgbString(this.stringToRgb(Q));
},rgbToRgbString:function(P){return j+P[0]+k+P[1]+k+P[2]+h;
},rgbToHexString:function(J){return (qx.lang.String.pad(J[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(J[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(J[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(l){return this.isThemedColor(l)||this.isNamedColor(l)||this.isHex3String(l)||this.isHex6String(l)||this.isRgbString(l);
},isCssString:function(C){return this.isSystemColor(C)||this.isNamedColor(C)||this.isHex3String(C)||this.isHex6String(C)||this.isRgbString(C);
},isHex3String:function(v){return this.REGEXP.hex3.test(v);
},isHex6String:function(c){return this.REGEXP.hex6.test(c);
},isRgbString:function(D){return this.REGEXP.rgb.test(D);
},isRgbaString:function(a){return this.REGEXP.rgba.test(a);
},__cS:function(){var V=parseInt(RegExp.$1,10);
var U=parseInt(RegExp.$2,10);
var T=parseInt(RegExp.$3,10);
return [V,U,T];
},__cT:function(){var O=parseInt(RegExp.$1,10);
var N=parseInt(RegExp.$2,10);
var M=parseInt(RegExp.$3,10);
return [O,N,M];
},__cU:function(){var G=parseInt(RegExp.$1,16)*17;
var F=parseInt(RegExp.$2,16)*17;
var E=parseInt(RegExp.$3,16)*17;
return [G,F,E];
},__cV:function(){var u=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var s=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var o=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [u,s,o];
},hex3StringToRgb:function(K){if(this.isHex3String(K)){return this.__cU(K);
}throw new Error("Invalid hex3 value: "+K);
},hex6StringToRgb:function(S){if(this.isHex6String(S)){return this.__cV(S);
}throw new Error("Invalid hex6 value: "+S);
},hexStringToRgb:function(H){if(this.isHex3String(H)){return this.__cU(H);
}
if(this.isHex6String(H)){return this.__cV(H);
}throw new Error("Invalid hex value: "+H);
},rgbToHsb:function(W){var Y,ba,bc;
var bi=W[0];
var bf=W[1];
var X=W[2];
var bh=(bi>bf)?bi:bf;

if(X>bh){bh=X;
}var bb=(bi<bf)?bi:bf;

if(X<bb){bb=X;
}bc=bh/255.0;

if(bh!=0){ba=(bh-bb)/bh;
}else{ba=0;
}
if(ba==0){Y=0;
}else{var be=(bh-bi)/(bh-bb);
var bg=(bh-bf)/(bh-bb);
var bd=(bh-X)/(bh-bb);

if(bi==bh){Y=bd-bg;
}else if(bf==bh){Y=2.0+be-bd;
}else{Y=4.0+bg-be;
}Y=Y/6.0;

if(Y<0){Y=Y+1.0;
}}return [Math.round(Y*360),Math.round(ba*100),Math.round(bc*100)];
},hsbToRgb:function(w){var i,f,p,q,t;
var x=w[0]/360;
var y=w[1]/100;
var z=w[2]/100;

if(x>=1.0){x%=1.0;
}
if(y>1.0){y=1.0;
}
if(z>1.0){z=1.0;
}var A=Math.floor(255*z);
var B={};

if(y==0.0){B.red=B.green=B.blue=A;
}else{x*=6.0;
i=Math.floor(x);
f=x-i;
p=Math.floor(A*(1.0-y));
q=Math.floor(A*(1.0-(y*f)));
t=Math.floor(A*(1.0-(y*(1.0-f))));

switch(i){case 0:B.red=A;
B.green=t;
B.blue=p;
break;
case 1:B.red=q;
B.green=A;
B.blue=p;
break;
case 2:B.red=p;
B.green=A;
B.blue=t;
break;
case 3:B.red=p;
B.green=q;
B.blue=A;
break;
case 4:B.red=t;
B.green=p;
B.blue=A;
break;
case 5:B.red=A;
B.green=p;
B.blue=q;
break;
}}return [B.red,B.green,B.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();


qx.$$loader.init();

