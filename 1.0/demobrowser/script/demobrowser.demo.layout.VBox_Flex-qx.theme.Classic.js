(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.layout.VBox_Flex","qx.theme":"qx.theme.Classic"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["demobrowser:demobrowser.demo.layout.VBox_Flex-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"1cdc9a5be9ca"},
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

qx.$$packageData['1cdc9a5be9ca']={"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-24,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-82,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-31,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-111,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-39,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-47,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-91,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-118,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-36,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-20,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-78,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-12,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-16,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-103,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-95,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-74,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-71,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-121,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-55,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-5,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-66,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-59,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-35,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-58,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-41,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-51,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-11,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-17,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-27,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-8,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]}};
(function(){var l=".",k="()",j="[Class ",h=".prototype",g="toString",f="qx.Bootstrap",e="]",d="Class";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return j+this.classname+e;
},createNamespace:function(name,m){var o=name.split(l);
var parent=window;
var n=o[0];

for(var i=0,p=o.length-1;i<p;i++,n=o[i]){if(!parent[n]){parent=parent[n]={};
}else{parent=parent[n];
}}parent[n]=m;
return n;
},setDisplayName:function(q,r,name){q.displayName=r+l+name+k;
},setDisplayNames:function(a,b){for(var name in a){var c=a[name];

if(c instanceof Function){c.displayName=b+l+name+k;
}}},define:function(name,s){if(!s){var s={statics:{}};
}var x;
var v=null;
qx.Bootstrap.setDisplayNames(s.statics,name);

if(s.members){qx.Bootstrap.setDisplayNames(s.members,name+h);
x=s.construct||new Function;
var t=s.statics;

for(var u in t){x[u]=t[u];
}v=x.prototype;
var y=s.members;

for(var u in y){v[u]=y[u];
}}else{x=s.statics||{};
}var w=this.createNamespace(name,x);
x.name=x.classname=name;
x.basename=w;
x.$$type=d;
if(!x.hasOwnProperty(g)){x.toString=this.genericToString;
}if(s.defer){s.defer(x,v);
}qx.Bootstrap.$$registry[name]=s.statics;
return x;
}};
qx.Bootstrap.define(f,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var n="qx.allowUrlSettings",m="&",l="qx.core.Setting",k="qx.allowUrlVariants",j="qx.propertyDebugLevel",h="qxsetting",g=":",f=".";
qx.Bootstrap.define(l,{statics:{__dz:{},define:function(a,b){if(b===undefined){throw new Error('Default value of setting "'+a+'" must be defined!');
}
if(!this.__dz[a]){this.__dz[a]={};
}else if(this.__dz[a].defaultValue!==undefined){throw new Error('Setting "'+a+'" is already defined!');
}this.__dz[a].defaultValue=b;
},get:function(s){var t=this.__dz[s];

if(t===undefined){throw new Error('Setting "'+s+'" is not defined.');
}
if(t.value!==undefined){return t.value;
}return t.defaultValue;
},set:function(d,e){if((d.split(f)).length<2){throw new Error('Malformed settings key "'+d+'". Must be following the schema "namespace.key".');
}
if(!this.__dz[d]){this.__dz[d]={};
}this.__dz[d].value=e;
},__dA:function(){if(window.qxsettings){for(var c in window.qxsettings){this.set(c,window.qxsettings[c]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(r){}this.__dB();
}},__dB:function(){if(this.get(n)!=true){return;
}var p=document.location.search.slice(1).split(m);

for(var i=0;i<p.length;i++){var o=p[i].split(g);

if(o.length!=3||o[0]!=h){continue;
}this.set(o[1],decodeURIComponent(o[2]));
}}},defer:function(q){q.define(n,false);
q.define(k,false);
q.define(j,0);
q.__dA();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__dy:function(){var t=d;
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
}},defer:function(A){A.__dy();
}});
})();
(function(){var A="on",z="off",y="|",x="default",w="object",u="&",t="qx.aspects",s="$",r="qx.allowUrlVariants",q="qx.debug",j="qx.client",p="qx.dynlocale",n="webkit",h="qxvariant",g="opera",m=":",k="qx.core.Variant",o="mshtml",f="gecko";
qx.Bootstrap.define(k,{statics:{__jk:{},__jl:{},compilerIsSet:function(){return true;
},define:function(a,b,c){{};

if(!this.__jk[a]){this.__jk[a]={};
}else{}this.__jk[a].allowedValues=b;
this.__jk[a].defaultValue=c;
},get:function(d){var e=this.__jk[d];
{};

if(e.value!==undefined){return e.value;
}return e.defaultValue;
},__jm:function(){if(window.qxvariants){for(var B in qxvariants){{};

if(!this.__jk[B]){this.__jk[B]={};
}this.__jk[B].value=qxvariants[B];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(K){}this.__jn(this.__jk);
}},__jn:function(){if(qx.core.Setting.get(r)!=true){return;
}var M=document.location.search.slice(1).split(u);

for(var i=0;i<M.length;i++){var N=M[i].split(m);

if(N.length!=3||N[0]!=h){continue;
}var O=N[1];

if(!this.__jk[O]){this.__jk[O]={};
}this.__jk[O].value=decodeURIComponent(N[2]);
}},select:function(C,D){{};

for(var E in D){if(this.isSet(C,E)){return D[E];
}}
if(D[x]!==undefined){return D[x];
}{};
},isSet:function(F,G){var H=F+s+G;

if(this.__jl[H]!==undefined){return this.__jl[H];
}var J=false;
if(G.indexOf(y)<0){J=this.get(F)===G;
}else{var I=G.split(y);

for(var i=0,l=I.length;i<l;i++){if(this.get(F)===I[i]){J=true;
break;
}}}this.__jl[H]=J;
return J;
},__jo:function(v){return typeof v===w&&v!==null&&v instanceof Array;
},__jp:function(v){return typeof v===w&&v!==null&&!(v instanceof Array);
},__jq:function(P,Q){for(var i=0,l=P.length;i<l;i++){if(P[i]==Q){return true;
}}return false;
}},defer:function(L){L.define(j,[f,o,g,n],qx.bom.client.Engine.NAME);
L.define(q,[A,z],A);
L.define(t,[A,z],z);
L.define(p,[A,z],A);
L.__jm();
}});
})();
(function(){var M="qx.client",L='"',K="valueOf",J="toLocaleString",I="isPrototypeOf",H="",G="toString",F="qx.lang.Object",E='\", "',D="hasOwnProperty";
qx.Bootstrap.define(F,{statics:{empty:function(bd){{};

for(var be in bd){if(bd.hasOwnProperty(be)){delete bd[be];
}}},isEmpty:qx.core.Variant.select(M,{"gecko":function(S){{};
return S.__count__===0;
},"default":function(f){{};

for(var g in f){return false;
}return true;
}}),hasMinLength:qx.core.Variant.select(M,{"gecko":function(W,X){{};
return W.__count__>=X;
},"default":function(N,O){{};

if(O<=0){return true;
}var length=0;

for(var P in N){if((++length)>=O){return true;
}}return false;
}}),getLength:qx.core.Variant.select(M,{"gecko":function(bk){{};
return bk.__count__;
},"default":function(bf){{};
var length=0;

for(var bg in bf){length++;
}return length;
}}),_shadowedKeys:[I,D,J,G,K],getKeys:qx.core.Variant.select(M,{"mshtml":function(Y){var ba=[];

for(var bc in Y){ba.push(bc);
}var bb=Object.prototype.hasOwnProperty;

for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(bb.call(Y,a[i])){ba.push(a[i]);
}}return ba;
},"default":function(h){var j=[];

for(var k in h){j.push(k);
}return j;
}}),getKeysAsString:function(x){{};
var y=qx.lang.Object.getKeys(x);

if(y.length==0){return H;
}return L+y.join(E)+L;
},getValues:function(T){{};
var V=[];
var U=this.getKeys(T);

for(var i=0,l=U.length;i<l;i++){V.push(T[U[i]]);
}return V;
},mergeWith:function(z,A,B){{};

if(B===undefined){B=true;
}
for(var C in A){if(B||z[C]===undefined){z[C]=A[C];
}}return z;
},carefullyMergeWith:function(v,w){{};
return qx.lang.Object.mergeWith(v,w,false);
},merge:function(m,n){{};
var o=arguments.length;

for(var i=1;i<o;i++){qx.lang.Object.mergeWith(m,arguments[i]);
}return m;
},clone:function(bh){{};
var bi={};

for(var bj in bh){bi[bj]=bh[bj];
}return bi;
},invert:function(s){{};
var t={};

for(var u in s){t[s[u].toString()]=u;
}return t;
},getKeyFromValue:function(p,q){{};

for(var r in p){if(p.hasOwnProperty(r)&&p[r]===q){return r;
}}return null;
},contains:function(Q,R){{};
return this.getKeyFromValue(Q,R)!==null;
},select:function(b,c){{};
return c[b];
},fromArray:function(d){{};
var e={};

for(var i=0,l=d.length;i<l;i++){{};
e[d[i].toString()]=true;
}return e;
}}});
})();
(function(){var q="Function",p="Boolean",o="Error",n="Number",m="Array",l="Date",k="RegExp",j="String",i="Object",h="qx.lang.Type",g="string";
qx.Bootstrap.define(h,{statics:{__iF:{"[object String]":j,"[object Array]":m,"[object Object]":i,"[object RegExp]":k,"[object Number]":n,"[object Boolean]":p,"[object Date]":l,"[object Function]":q,"[object Error]":o},getClass:function(c){var d=Object.prototype.toString.call(c);
return (this.__iF[d]||d.slice(8,-1));
},isString:function(t){return (t!==null&&(typeof t===g||this.getClass(t)==j||t instanceof String||(!!t&&!!t.$$isString)));
},isArray:function(e){return (e!==null&&(e instanceof Array||(e&&qx.Class.hasInterface(e.constructor,qx.data.IListData))||this.getClass(e)==m||(!!e&&!!e.$$isArray)));
},isObject:function(r){return (r!==undefined&&r!==null&&this.getClass(r)==i);
},isRegExp:function(u){return this.getClass(u)==k;
},isNumber:function(s){return (s!==null&&(this.getClass(s)==n||s instanceof Number));
},isBoolean:function(a){return (a!==null&&(this.getClass(a)==p||a instanceof Boolean));
},isDate:function(b){return (b!==null&&(this.getClass(b)==l||b instanceof Date));
},isError:function(f){return (f!==null&&(this.getClass(f)==o||f instanceof Error));
},isFunction:function(v){return this.getClass(v)==q;
}}});
})();
(function(){var p="[Class ",o="]",n="$$init_",m="toString",k="constructor",j="singleton",h=".prototype",g="extend",f="Class",e="destruct",b="qx.Class",d="static",c="qx.event.type.Data";
qx.Bootstrap.define(b,{statics:{define:function(name,bW){if(!bW){var bW={};
}if(bW.include&&!(bW.include instanceof Array)){bW.include=[bW.include];
}if(bW.implement&&!(bW.implement instanceof Array)){bW.implement=[bW.implement];
}if(!bW.hasOwnProperty(g)&&!bW.type){bW.type=d;
}{};
var bY=this.__bt(name,bW.type,bW.extend,bW.statics,bW.construct,bW.destruct);
if(bW.extend){if(bW.properties){this.__bv(bY,bW.properties,true);
}if(bW.members){this.__bx(bY,bW.members,true,true,false);
}if(bW.events){this.__bu(bY,bW.events,true);
}if(bW.include){for(var i=0,l=bW.include.length;i<l;i++){this.__bA(bY,bW.include[i],false);
}}}if(bW.settings){for(var bX in bW.settings){qx.core.Setting.define(bX,bW.settings[bX]);
}}if(bW.variants){for(var bX in bW.variants){qx.core.Variant.define(bX,bW.variants[bX].allowedValues,bW.variants[bX].defaultValue);
}}if(bW.implement){for(var i=0,l=bW.implement.length;i<l;i++){this.__bz(bY,bW.implement[i]);
}}{};
if(bW.defer){bW.defer.self=bY;
bW.defer(bY,bY.prototype,{add:function(name,bK){var bL={};
bL[name]=bK;
qx.Class.__bv(bY,bL,true);
}});
}return bY;
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(G,H){{};
qx.Class.__bA(G,H,false);
},patch:function(X,Y){{};
qx.Class.__bA(X,Y,true);
},isSubClassOf:function(bU,bV){if(!bU){return false;
}
if(bU==bV){return true;
}
if(bU.prototype instanceof bV){return true;
}return false;
},getPropertyDefinition:function(W,name){while(W){if(W.$$properties&&W.$$properties[name]){return W.$$properties[name];
}W=W.superclass;
}return null;
},getProperties:function(bS){var bT=[];

while(bS){if(bS.$$properties){bT.push.apply(bT,qx.lang.Object.getKeys(bS.$$properties));
}bS=bS.superclass;
}return bT;
},getByProperty:function(Q,name){while(Q){if(Q.$$properties&&Q.$$properties[name]){return Q;
}Q=Q.superclass;
}return null;
},hasProperty:function(C,name){return !!this.getPropertyDefinition(C,name);
},getEventType:function(s,name){var s=s.constructor;

while(s.superclass){if(s.$$events&&s.$$events[name]!==undefined){return s.$$events[name];
}s=s.superclass;
}return null;
},supportsEvent:function(R,name){return !!this.getEventType(R,name);
},hasOwnMixin:function(v,w){return v.$$includes&&v.$$includes.indexOf(w)!==-1;
},getByMixin:function(bF,bG){var bH,i,l;

while(bF){if(bF.$$includes){bH=bF.$$flatIncludes;

for(i=0,l=bH.length;i<l;i++){if(bH[i]===bG){return bF;
}}}bF=bF.superclass;
}return null;
},getMixins:function(bO){var bP=[];

while(bO){if(bO.$$includes){bP.push.apply(bP,bO.$$flatIncludes);
}bO=bO.superclass;
}return bP;
},hasMixin:function(bM,bN){return !!this.getByMixin(bM,bN);
},hasOwnInterface:function(bI,bJ){return bI.$$implements&&bI.$$implements.indexOf(bJ)!==-1;
},getByInterface:function(D,E){var F,i,l;

while(D){if(D.$$implements){F=D.$$flatImplements;

for(i=0,l=F.length;i<l;i++){if(F[i]===E){return D;
}}}D=D.superclass;
}return null;
},getInterfaces:function(bQ){var bR=[];

while(bQ){if(bQ.$$implements){bR.push.apply(bR,bQ.$$flatImplements);
}bQ=bQ.superclass;
}return bR;
},hasInterface:function(q,r){return !!this.getByInterface(q,r);
},implementsInterface:function(bv,bw){var bx=bv.constructor;

if(this.hasInterface(bx,bw)){return true;
}
try{qx.Interface.assertObject(bv,bw);
return true;
}catch(S){}
try{qx.Interface.assert(bx,bw,false);
return true;
}catch(bm){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return p+this.classname+o;
},$$registry:qx.Bootstrap.$$registry,__bp:null,__bq:null,__br:function(){},__bs:function(){},__bt:function(name,ba,bb,bc,bd,be){var bj;

if(!bb&&true){bj=bc||{};
qx.Bootstrap.setDisplayNames(bj,name);
}else{bj={};

if(bb){if(!bd){bd=this.__bB();
}bj=this.__bD(bd,name,ba);
qx.Bootstrap.setDisplayName(bd,name,k);
}if(bc){qx.Bootstrap.setDisplayNames(bc,name);
var bk;

for(var i=0,a=qx.lang.Object.getKeys(bc),l=a.length;i<l;i++){bk=a[i];
var bg=bc[bk];
{bj[bk]=bg;
};
}}}var bi=qx.Bootstrap.createNamespace(name,bj,false);
bj.name=bj.classname=name;
bj.basename=bi;
bj.$$type=f;

if(ba){bj.$$classtype=ba;
}if(!bj.hasOwnProperty(m)){bj.toString=this.genericToString;
}
if(bb){var bl=bb.prototype;
var bf=this.__bC();
bf.prototype=bl;
var bh=new bf;
bj.prototype=bh;
bh.name=bh.classname=name;
bh.basename=bi;
bd.base=bj.superclass=bb;
bd.self=bj.constructor=bh.constructor=bj;
if(be){{};
bj.$$destructor=be;
qx.Bootstrap.setDisplayName(be,name,e);
}}this.$$registry[name]=bj;
return bj;
},__bu:function(by,bz,bA){var bB,bB;
{};

if(by.$$events){for(var bB in bz){by.$$events[bB]=bz[bB];
}}else{by.$$events=bz;
}},__bv:function(I,J,K){var M;

if(K===undefined){K=false;
}var L=!!I.$$propertiesAttached;

for(var name in J){M=J[name];
{};
M.name=name;
if(!M.refine){if(I.$$properties===undefined){I.$$properties={};
}I.$$properties[name]=M;
}if(M.init!==undefined){I.prototype[n+name]=M.init;
}if(M.event!==undefined){var event={};
event[M.event]=c;
this.__bu(I,event,K);
}if(M.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(L){qx.core.Property.attachMethods(I,name,M);
}}},__bw:null,__bx:function(bn,bo,bp,bq,br){var bs=bn.prototype;
var bu,bt;
qx.Bootstrap.setDisplayNames(bo,bn.classname+h);

for(var i=0,a=qx.lang.Object.getKeys(bo),l=a.length;i<l;i++){bu=a[i];
bt=bo[bu];
{};
if(bq!==false&&bt instanceof Function&&bt.$$type==null){if(br==true){bt=this.__by(bt,bs[bu]);
}else{if(bs[bu]){bt.base=bs[bu];
}bt.self=bn;
}{};
}bs[bu]=bt;
}},__by:function(t,u){if(u){return function(){var cb=t.base;
t.base=u;
var ca=t.apply(this,arguments);
t.base=cb;
return ca;
};
}else{return t;
}},__bz:function(N,O){{};
var P=qx.Interface.flatten([O]);

if(N.$$implements){N.$$implements.push(O);
N.$$flatImplements.push.apply(N.$$flatImplements,P);
}else{N.$$implements=[O];
N.$$flatImplements=P;
}},__bA:function(cc,cd,ce){{};

if(this.hasMixin(cc,cd)){return;
}var cg=qx.Mixin.flatten([cd]);
var cf;

for(var i=0,l=cg.length;i<l;i++){cf=cg[i];
if(cf.$$events){this.__bu(cc,cf.$$events,ce);
}if(cf.$$properties){this.__bv(cc,cf.$$properties,ce);
}if(cf.$$members){this.__bx(cc,cf.$$members,ce,ce,ce);
}}if(cc.$$includes){cc.$$includes.push(cd);
cc.$$flatIncludes.push.apply(cc.$$flatIncludes,cg);
}else{cc.$$includes=[cd];
cc.$$flatIncludes=cg;
}},__bB:function(){function B(){arguments.callee.base.apply(this,arguments);
}return B;
},__bC:function(){return function(){};
},__bD:function(x,name,y){var z;
var A=function(){var V=arguments.callee.constructor;
{};
if(!V.$$propertiesAttached){qx.core.Property.attach(V);
}var U=V.$$original.apply(this,arguments);
if(V.$$includes){var T=V.$$flatIncludes;

for(var i=0,l=T.length;i<l;i++){if(T[i].$$constructor){T[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return U;
};
{};
if(y===j){A.getInstance=this.getInstance;
}A.$$original=x;
x.wrapper=A;
return A;
}},defer:function(bC){var bD,bC,bE;
{};
}});
})();
(function(){var F="other",E="widgets",D="fonts",C="appearances",B="qx.Theme",A="]",z="[Theme ",y="colors",x="decorations",w="Theme",t="meta",v="borders",u="icons";
qx.Class.define(B,{statics:{define:function(name,O){if(!O){var O={};
}O.include=this.__ou(O.include);
O.patch=this.__ou(O.patch);
{};
var P={$$type:w,name:name,title:O.title,toString:this.genericToString};
if(O.extend){P.supertheme=O.extend;
}P.basename=qx.Bootstrap.createNamespace(name,P);
this.__ox(P,O);
this.__ov(P,O);
this.$$registry[name]=P;
for(var i=0,a=O.include,l=a.length;i<l;i++){this.include(P,a[i]);
}
for(var i=0,a=O.patch,l=a.length;i<l;i++){this.patch(P,a[i]);
}},__ou:function(Q){if(!Q){return [];
}
if(qx.lang.Type.isArray(Q)){return Q;
}else{return [Q];
}},__ov:function(q,r){var s=r.aliases||{};

if(r.extend&&r.extend.aliases){qx.lang.Object.mergeWith(s,r.extend.aliases,false);
}q.aliases=s;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return z+this.name+A;
},__ow:function(G){for(var i=0,H=this.__oy,l=H.length;i<l;i++){if(G[H[i]]){return H[i];
}}},__ox:function(b,c){var f=this.__ow(c);
if(c.extend&&!f){f=c.extend.type;
}b.type=f||F;
if(!f){return;
}var h=function(){};
if(c.extend){h.prototype=new c.extend.$$clazz;
}var g=h.prototype;
var e=c[f];
for(var d in e){g[d]=e[d];
if(g[d].base){{};
g[d].base=c.extend;
}}b.$$clazz=h;
b[f]=new h;
},$$registry:{},__oy:[y,v,x,D,u,E,C,t],__oz:null,__oA:null,__oB:function(){},patch:function(j,k){var n=this.__ow(k);

if(n!==this.__ow(j)){throw new Error("The mixins '"+j.name+"' are not compatible '"+k.name+"'!");
}var m=k[n];
var o=j.$$clazz.prototype;

for(var p in m){o[p]=m[p];
}},include:function(I,J){var L=J.type;

if(L!==I.type){throw new Error("The mixins '"+I.name+"' are not compatible '"+J.name+"'!");
}var K=J[L];
var M=I.$$clazz.prototype;

for(var N in K){if(M[N]!==undefined){continue;
}M[N]=K[N];
}}}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var cK=';',cJ='computed=this.',cI='=value;',cH='this.',cG="set",cF="setThemed",cE="setRuntime",cD="init",cC='if(this.',cB='delete this.',bL='!==undefined)',bK='}',bJ="resetThemed",bI='else if(this.',bH="string",bG='return this.',bF="reset",bE="boolean",bD="resetRuntime",bC='!==undefined){',cR="refresh",cS='=true;',cP="",cQ="this.",cN='old=this.',cO="();",cL='else ',cM='if(old===undefined)old=this.',cT='old=computed=this.',cU="return this.",ck="get",cj='(value);',cm=";",cl="(a[",co='if(old===computed)return value;',cn='if(old===undefined)old=null;',cq=' of an instance of ',cp=' is not (yet) ready!");',ci="]);",ch='!==inherit){',t='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',u='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',v='value !== null && value.nodeType === 9 && value.documentElement',w='===value)return value;',x='value !== null && value.$$type === "Mixin"',y='return init;',z='var init=this.',A='value !== null && value.nodeType === 1 && value.attributes',B="Error in property ",C='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',dd='.validate.call(this, value);',dc='qx.core.Assert.assertInstance(value, Date, msg) || true',db='else{',da=" in method ",dh='qx.core.Assert.assertInstance(value, Error, msg) || true',dg='=computed;',df='Undefined value is not allowed!',de='(backup);',dj='if(computed===inherit){',di="inherit",bc='Is invalid!',bd='if(value===undefined)prop.error(this,2,"',ba='var computed, old=this.',bb='else if(computed===undefined)',bg="': ",bh=" of class ",be='value !== null && value.nodeType !== undefined',bf='===undefined)return;',X='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',Y="')){",K='qx.core.Assert.assertPositiveInteger(value, msg) || true',J='else this.',M='value=this.',L='","',G='if(init==qx.core.Property.$$inherit)init=null;',F='value !== null && value.$$type === "Interface"',I='var inherit=prop.$$inherit;',H="', qx.event.type.Data, [computed, old]",E="$$useinit_",D='computed=undefined;delete this.',bm='",value);',bn='computed=value;',bo="$$runtime_",bp='Requires exactly one argument!',bi=';}',bj="$$user_",bk='){',bl='qx.core.Assert.assertArray(value, msg) || true',bq='if(computed===undefined||computed===inherit){',br='qx.core.Assert.assertPositiveNumber(value, msg) || true',U=".prototype",T="Boolean",S=")}",R='(computed, old, "',Q='return value;',P='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',O="if(reg.hasListener(this, '",N='Does not allow any arguments!',W=')a[i].',V="()",bs="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bt='.$$properties.',bu='value !== null && value.$$type === "Theme"',bv="var reg=qx.event.Registration;",bw="())",bx='return null;',by='qx.core.Assert.assertObject(value, msg) || true',bz='");',bA='qx.core.Assert.assertString(value, msg) || true',bB='var pa=this.getLayoutParent();if(pa)computed=pa.',bP='value !== null && value.$$type === "Class"',bO='qx.core.Assert.assertFunction(value, msg) || true',bN='!==undefined&&',bM='var computed, old;',bT='var backup=computed;',bS='}else{',bR="object",bQ="$$init_",bV="$$theme_",bU='if(computed===undefined)computed=null;',cd='qx.core.Assert.assertMap(value, msg) || true',ce='qx.core.Assert.assertNumber(value, msg) || true',cb='if((computed===undefined||computed===inherit)&&',cc="reg.fireEvent(this, '",bY='Null value is not allowed!',ca='qx.core.Assert.assertInteger(value, msg) || true',bW="value",bX="shorthand",cf='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cg='value !== null && value.type !== undefined',cu='value !== null && value.document',ct='throw new Error("Property ',cw="(!this.",cv='qx.core.Assert.assertBoolean(value, msg) || true',cy='if(a[i].',cx="toggle",cA="$$inherit_",cz='var prop=qx.core.Property;',cs=" with incoming value '",cr="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",cV='if(computed===undefined||computed==inherit)computed=null;',cW="qx.core.Property",cX="is",cY='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(cW,{statics:{__jP:{"Boolean":cv,"String":bA,"Number":ce,"Integer":ca,"PositiveNumber":br,"PositiveInteger":K,"Error":dh,"RegExp":cf,"Object":by,"Array":bl,"Map":cd,"Function":bO,"Date":dc,"Node":be,"Element":A,"Document":v,"Window":cu,"Event":cg,"Class":bP,"Mixin":x,"Interface":F,"Theme":bu,"Color":t,"Decorator":X,"Font":u},__jQ:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:di,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bH,dispose:bE,inheritable:bE,nullable:bE,themeable:bE,refine:bE,init:null,apply:bH,event:bH,check:null,transform:bH,deferredInit:bE,validate:null},$$allowedGroupKeys:{name:bH,group:bR,mode:bH,themeable:bE},$$inheritable:{},refresh:function(dG){var parent=dG.getLayoutParent();

if(parent){var dJ=dG.constructor;
var dL=this.$$store.inherit;
var dK=this.$$store.init;
var dI=this.$$method.refresh;
var dM;
var dH;
{};

while(dJ){dM=dJ.$$properties;

if(dM){for(var name in this.$$inheritable){if(dM[name]&&dG[dI[name]]){dH=parent[dL[name]];

if(dH===undefined){dH=parent[dK[name]];
}{};
dG[dI[name]](dH);
}}}dJ=dJ.superclass;
}}},attach:function(r){var s=r.$$properties;

if(s){for(var name in s){this.attachMethods(r,name,s[name]);
}}r.$$propertiesAttached=true;
},attachMethods:function(dN,name,dO){dO.group?this.__jR(dN,dO,name):this.__jS(dN,dO,name);
},__jR:function(eu,ev,name){var eC=qx.lang.String.firstUp(name);
var eB=eu.prototype;
var eD=ev.themeable===true;
{};
var eE=[];
var ey=[];

if(eD){var ew=[];
var eA=[];
}var ez=bs;
eE.push(ez);

if(eD){ew.push(ez);
}
if(ev.mode==bX){var ex=cr;
eE.push(ex);

if(eD){ew.push(ex);
}}
for(var i=0,a=ev.group,l=a.length;i<l;i++){{};
eE.push(cQ,this.$$method.set[a[i]],cl,i,ci);
ey.push(cQ,this.$$method.reset[a[i]],cO);

if(eD){{};
ew.push(cQ,this.$$method.setThemed[a[i]],cl,i,ci);
eA.push(cQ,this.$$method.resetThemed[a[i]],cO);
}}this.$$method.set[name]=cG+eC;
eB[this.$$method.set[name]]=new Function(eE.join(cP));
this.$$method.reset[name]=bF+eC;
eB[this.$$method.reset[name]]=new Function(ey.join(cP));

if(eD){this.$$method.setThemed[name]=cF+eC;
eB[this.$$method.setThemed[name]]=new Function(ew.join(cP));
this.$$method.resetThemed[name]=bJ+eC;
eB[this.$$method.resetThemed[name]]=new Function(eA.join(cP));
}},__jS:function(ek,el,name){var en=qx.lang.String.firstUp(name);
var ep=ek.prototype;
{};
if(el.dispose===undefined&&typeof el.check===bH){el.dispose=this.__jQ[el.check]||qx.Class.isDefined(el.check)||qx.Interface.isDefined(el.check);
}var eo=this.$$method;
var em=this.$$store;
em.runtime[name]=bo+name;
em.user[name]=bj+name;
em.theme[name]=bV+name;
em.init[name]=bQ+name;
em.inherit[name]=cA+name;
em.useinit[name]=E+name;
eo.get[name]=ck+en;
ep[eo.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,ek,name,ck);
};
eo.set[name]=cG+en;
ep[eo.set[name]]=function(m){return qx.core.Property.executeOptimizedSetter(this,ek,name,cG,arguments);
};
eo.reset[name]=bF+en;
ep[eo.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,ek,name,bF);
};

if(el.inheritable||el.apply||el.event||el.deferredInit){eo.init[name]=cD+en;
ep[eo.init[name]]=function(c){return qx.core.Property.executeOptimizedSetter(this,ek,name,cD,arguments);
};
}
if(el.inheritable){eo.refresh[name]=cR+en;
ep[eo.refresh[name]]=function(q){return qx.core.Property.executeOptimizedSetter(this,ek,name,cR,arguments);
};
}eo.setRuntime[name]=cE+en;
ep[eo.setRuntime[name]]=function(ec){return qx.core.Property.executeOptimizedSetter(this,ek,name,cE,arguments);
};
eo.resetRuntime[name]=bD+en;
ep[eo.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,ek,name,bD);
};

if(el.themeable){eo.setThemed[name]=cF+en;
ep[eo.setThemed[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,ek,name,cF,arguments);
};
eo.resetThemed[name]=bJ+en;
ep[eo.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,ek,name,bJ);
};
}
if(el.check===T){ep[cx+en]=new Function(cU+eo.set[name]+cw+eo.get[name]+bw);
ep[cX+en]=new Function(cU+eo.get[name]+V);
}},__jT:{0:cY,1:bp,2:df,3:N,4:bY,5:bc},error:function(d,e,f,g,h){var j=d.constructor.classname;
var k=B+f+bh+j+da+this.$$method[g][f]+cs+h+bg;
throw new Error(k+(this.__jT[e]||"Unknown reason: "+e));
},__jU:function(dm,dn,name,dp,dq,dr){var ds=this.$$method[dp][name];
{dn[ds]=new Function(bW,dq.join(cP));
};
{};
qx.Bootstrap.setDisplayName(dn[ds],dm.classname+U,ds);
if(dr===undefined){return dm[ds]();
}else{return dm[ds](dr[0]);
}},executeOptimizedGetter:function(ed,ee,name,ef){var eh=ee.$$properties[name];
var ej=ee.prototype;
var eg=[];
var ei=this.$$store;
eg.push(cC,ei.runtime[name],bL);
eg.push(bG,ei.runtime[name],cK);

if(eh.inheritable){eg.push(bI,ei.inherit[name],bL);
eg.push(bG,ei.inherit[name],cK);
eg.push(cL);
}eg.push(cC,ei.user[name],bL);
eg.push(bG,ei.user[name],cK);

if(eh.themeable){eg.push(bI,ei.theme[name],bL);
eg.push(bG,ei.theme[name],cK);
}
if(eh.deferredInit&&eh.init===undefined){eg.push(bI,ei.init[name],bL);
eg.push(bG,ei.init[name],cK);
}eg.push(cL);

if(eh.init!==undefined){if(eh.inheritable){eg.push(z,ei.init[name],cK);

if(eh.nullable){eg.push(G);
}else if(eh.init!==undefined){eg.push(bG,ei.init[name],cK);
}else{eg.push(P,name,cq,ee.classname,cp);
}eg.push(y);
}else{eg.push(bG,ei.init[name],cK);
}}else if(eh.inheritable||eh.nullable){eg.push(bx);
}else{eg.push(ct,name,cq,ee.classname,cp);
}return this.__jU(ed,ej,name,ef,eg);
},executeOptimizedSetter:function(dP,dQ,name,dR,dS){var dX=dQ.$$properties[name];
var dW=dQ.prototype;
var dU=[];
var dT=dR===cG||dR===cF||dR===cE||(dR===cD&&dX.init===undefined);
var dV=dX.apply||dX.event||dX.inheritable;
var dY=this.__jV(dR,name);
this.__jW(dU,dX,name,dR,dT);

if(dT){this.__jX(dU,dQ,dX,name);
}
if(dV){this.__jY(dU,dT,dY,dR);
}
if(dX.inheritable){dU.push(I);
}{};

if(!dV){this.__kb(dU,name,dR,dT);
}else{this.__kc(dU,dX,name,dR,dT);
}
if(dX.inheritable){this.__kd(dU,dX,name,dR);
}else if(dV){this.__ke(dU,dX,name,dR);
}
if(dV){this.__kf(dU,dX,name);
if(dX.inheritable&&dW._getChildren){this.__kg(dU,name);
}}if(dT){dU.push(Q);
}return this.__jU(dP,dW,name,dR,dU,dS);
},__jV:function(dk,name){if(dk===cE||dk===bD){var dl=this.$$store.runtime[name];
}else if(dk===cF||dk===bJ){dl=this.$$store.theme[name];
}else if(dk===cD){dl=this.$$store.init[name];
}else{dl=this.$$store.user[name];
}return dl;
},__jW:function(dC,dD,name,dE,dF){{if(!dD.nullable||dD.check||dD.inheritable){dC.push(cz);
}if(dE===cG){dC.push(bd,name,L,dE,bm);
}};
},__jX:function(er,es,et,name){if(et.transform){er.push(M,et.transform,cj);
}if(et.validate){if(typeof et.validate===bH){er.push(cH,et.validate,cj);
}else if(et.validate instanceof Function){er.push(es.classname,bt,name);
er.push(dd);
}}},__jY:function(dx,dy,dz,dA){var dB=(dA===bF||dA===bJ||dA===bD);

if(dy){dx.push(cC,dz,w);
}else if(dB){dx.push(cC,dz,bf);
}},__ka:undefined,__kb:function(eI,name,eJ,eK){if(eJ===cE){eI.push(cH,this.$$store.runtime[name],cI);
}else if(eJ===bD){eI.push(cC,this.$$store.runtime[name],bL);
eI.push(cB,this.$$store.runtime[name],cK);
}else if(eJ===cG){eI.push(cH,this.$$store.user[name],cI);
}else if(eJ===bF){eI.push(cC,this.$$store.user[name],bL);
eI.push(cB,this.$$store.user[name],cK);
}else if(eJ===cF){eI.push(cH,this.$$store.theme[name],cI);
}else if(eJ===bJ){eI.push(cC,this.$$store.theme[name],bL);
eI.push(cB,this.$$store.theme[name],cK);
}else if(eJ===cD&&eK){eI.push(cH,this.$$store.init[name],cI);
}},__kc:function(dt,du,name,dv,dw){if(du.inheritable){dt.push(ba,this.$$store.inherit[name],cK);
}else{dt.push(bM);
}dt.push(cC,this.$$store.runtime[name],bC);

if(dv===cE){dt.push(cJ,this.$$store.runtime[name],cI);
}else if(dv===bD){dt.push(cB,this.$$store.runtime[name],cK);
dt.push(cC,this.$$store.user[name],bL);
dt.push(cJ,this.$$store.user[name],cK);
dt.push(bI,this.$$store.theme[name],bL);
dt.push(cJ,this.$$store.theme[name],cK);
dt.push(bI,this.$$store.init[name],bC);
dt.push(cJ,this.$$store.init[name],cK);
dt.push(cH,this.$$store.useinit[name],cS);
dt.push(bK);
}else{dt.push(cT,this.$$store.runtime[name],cK);
if(dv===cG){dt.push(cH,this.$$store.user[name],cI);
}else if(dv===bF){dt.push(cB,this.$$store.user[name],cK);
}else if(dv===cF){dt.push(cH,this.$$store.theme[name],cI);
}else if(dv===bJ){dt.push(cB,this.$$store.theme[name],cK);
}else if(dv===cD&&dw){dt.push(cH,this.$$store.init[name],cI);
}}dt.push(bK);
dt.push(bI,this.$$store.user[name],bC);

if(dv===cG){if(!du.inheritable){dt.push(cN,this.$$store.user[name],cK);
}dt.push(cJ,this.$$store.user[name],cI);
}else if(dv===bF){if(!du.inheritable){dt.push(cN,this.$$store.user[name],cK);
}dt.push(cB,this.$$store.user[name],cK);
dt.push(cC,this.$$store.runtime[name],bL);
dt.push(cJ,this.$$store.runtime[name],cK);
dt.push(cC,this.$$store.theme[name],bL);
dt.push(cJ,this.$$store.theme[name],cK);
dt.push(bI,this.$$store.init[name],bC);
dt.push(cJ,this.$$store.init[name],cK);
dt.push(cH,this.$$store.useinit[name],cS);
dt.push(bK);
}else{if(dv===cE){dt.push(cJ,this.$$store.runtime[name],cI);
}else if(du.inheritable){dt.push(cJ,this.$$store.user[name],cK);
}else{dt.push(cT,this.$$store.user[name],cK);
}if(dv===cF){dt.push(cH,this.$$store.theme[name],cI);
}else if(dv===bJ){dt.push(cB,this.$$store.theme[name],cK);
}else if(dv===cD&&dw){dt.push(cH,this.$$store.init[name],cI);
}}dt.push(bK);
if(du.themeable){dt.push(bI,this.$$store.theme[name],bC);

if(!du.inheritable){dt.push(cN,this.$$store.theme[name],cK);
}
if(dv===cE){dt.push(cJ,this.$$store.runtime[name],cI);
}else if(dv===cG){dt.push(cJ,this.$$store.user[name],cI);
}else if(dv===cF){dt.push(cJ,this.$$store.theme[name],cI);
}else if(dv===bJ){dt.push(cB,this.$$store.theme[name],cK);
dt.push(cC,this.$$store.init[name],bC);
dt.push(cJ,this.$$store.init[name],cK);
dt.push(cH,this.$$store.useinit[name],cS);
dt.push(bK);
}else if(dv===cD){if(dw){dt.push(cH,this.$$store.init[name],cI);
}dt.push(cJ,this.$$store.theme[name],cK);
}else if(dv===cR){dt.push(cJ,this.$$store.theme[name],cK);
}dt.push(bK);
}dt.push(bI,this.$$store.useinit[name],bk);

if(!du.inheritable){dt.push(cN,this.$$store.init[name],cK);
}
if(dv===cD){if(dw){dt.push(cJ,this.$$store.init[name],cI);
}else{dt.push(cJ,this.$$store.init[name],cK);
}}else if(dv===cG||dv===cE||dv===cF||dv===cR){dt.push(cB,this.$$store.useinit[name],cK);

if(dv===cE){dt.push(cJ,this.$$store.runtime[name],cI);
}else if(dv===cG){dt.push(cJ,this.$$store.user[name],cI);
}else if(dv===cF){dt.push(cJ,this.$$store.theme[name],cI);
}else if(dv===cR){dt.push(cJ,this.$$store.init[name],cK);
}}dt.push(bK);
if(dv===cG||dv===cE||dv===cF||dv===cD){dt.push(db);

if(dv===cE){dt.push(cJ,this.$$store.runtime[name],cI);
}else if(dv===cG){dt.push(cJ,this.$$store.user[name],cI);
}else if(dv===cF){dt.push(cJ,this.$$store.theme[name],cI);
}else if(dv===cD){if(dw){dt.push(cJ,this.$$store.init[name],cI);
}else{dt.push(cJ,this.$$store.init[name],cK);
}dt.push(cH,this.$$store.useinit[name],cS);
}dt.push(bK);
}},__kd:function(n,o,name,p){n.push(bq);

if(p===cR){n.push(bn);
}else{n.push(bB,this.$$store.inherit[name],cK);
}n.push(cb);
n.push(cH,this.$$store.init[name],bN);
n.push(cH,this.$$store.init[name],ch);
n.push(cJ,this.$$store.init[name],cK);
n.push(cH,this.$$store.useinit[name],cS);
n.push(bS);
n.push(cB,this.$$store.useinit[name],bi);
n.push(bK);
n.push(co);
n.push(dj);
n.push(D,this.$$store.inherit[name],cK);
n.push(bK);
n.push(bb);
n.push(cB,this.$$store.inherit[name],cK);
n.push(J,this.$$store.inherit[name],dg);
n.push(bT);
if(o.init!==undefined&&p!==cD){n.push(cM,this.$$store.init[name],cm);
}else{n.push(cn);
}n.push(cV);
},__ke:function(eF,eG,name,eH){if(eH!==cG&&eH!==cE&&eH!==cF){eF.push(bU);
}eF.push(co);
if(eG.init!==undefined&&eH!==cD){eF.push(cM,this.$$store.init[name],cm);
}else{eF.push(cn);
}},__kf:function(ea,eb,name){if(eb.apply){ea.push(cH,eb.apply,R,name,bz);
}if(eb.event){ea.push(bv,O,eb.event,Y,cc,eb.event,H,S);
}},__kg:function(eq,name){eq.push(C);
eq.push(cy,this.$$method.refresh[name],W,this.$$method.refresh[name],de);
eq.push(bK);
}}});
})();
(function(){var q="$$hash",p="qx.core.ObjectRegistry";
qx.Bootstrap.define(p,{statics:{inShutDown:false,__gu:{},__gv:0,__gw:[],register:function(e){var h=this.__gu;

if(!h){return;
}var g=e.$$hash;

if(g==null){var f=this.__gw;

if(f.length>0){g=f.pop();
}else{g=(this.__gv++).toString(36);
}e.$$hash=g;
}{};
h[g]=e;
},unregister:function(j){var k=j.$$hash;

if(k==null){return;
}var m=this.__gu;

if(m&&m[k]){delete m[k];
this.__gw.push(k);
}try{delete j.$$hash;
}catch(y){if(j.removeAttribute){j.removeAttribute(q);
}}},toHashCode:function(r){{};
var t=r.$$hash;

if(t!=null){return t;
}var s=this.__gw;

if(s.length>0){t=s.pop();
}else{t=(this.__gv++).toString(36);
}return r.$$hash=t;
},clearHashCode:function(n){{};
var o=n.$$hash;

if(o!=null){this.__gw.push(o);
try{delete n.$$hash;
}catch(d){if(n.removeAttribute){n.removeAttribute(q);
}}}},fromHashCode:function(z){return this.__gu[z]||null;
},shutdown:function(){this.inShutDown=true;
var v=this.__gu;
var x=[];

for(var w in v){x.push(w);
}x.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var u,i=0,l=x.length;

while(true){try{for(;i<l;i++){w=x[i];
u=v[w];

if(u&&u.dispose){u.dispose();
}}}catch(c){qx.log.Logger.error(this,"Could not dispose object "+u.toString()+": "+c);

if(i!==l){i++;
continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__gu;
},getRegistry:function(){return this.__gu;
}}});
})();
(function(){var t="qx.Mixin",s=".prototype",r="constructor",q="[Mixin ",p="]",o="destruct",n="Mixin";
qx.Bootstrap.define(t,{statics:{define:function(name,j){if(j){if(j.include&&!(j.include instanceof Array)){j.include=[j.include];
}{};
var m=j.statics?j.statics:{};
qx.Bootstrap.setDisplayNames(m,name);

for(var k in m){if(m[k] instanceof Function){m[k].$$mixin=m;
}}if(j.construct){m.$$constructor=j.construct;
qx.Bootstrap.setDisplayName(j.construct,name,r);
}
if(j.include){m.$$includes=j.include;
}
if(j.properties){m.$$properties=j.properties;
}
if(j.members){m.$$members=j.members;
qx.Bootstrap.setDisplayNames(j.members,name+s);
}
for(var k in m.$$members){if(m.$$members[k] instanceof Function){m.$$members[k].$$mixin=m;
}}
if(j.events){m.$$events=j.events;
}
if(j.destruct){m.$$destructor=j.destruct;
qx.Bootstrap.setDisplayName(j.destruct,name,o);
}}else{var m={};
}m.$$type=n;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
this.$$registry[name]=m;
return m;
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
},isCompatible:function(u,v){var w=qx.Class.getMixins(v);
w.push(u);
return qx.Mixin.checkCompatibility(w);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return q+this.name+p;
},$$registry:{},__dw:null,__dx:function(){}}});
})();
(function(){var e="qx.data.MBinding";
qx.Mixin.define(e,{members:{bind:function(a,b,c,d){return qx.data.SingleValueBinding.bind(this,a,b,c,d);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var q="qx.client",p="on",o="function",n="mousedown",m="qx.bom.Event",l="return;",k="mouseover",j="HTMLEvents";
qx.Bootstrap.define(m,{statics:{addNativeListener:qx.core.Variant.select(q,{"mshtml":function(y,z,A){y.attachEvent(p+z,A);
},"default":function(D,E,F){D.addEventListener(E,F,false);
}}),removeNativeListener:qx.core.Variant.select(q,{"mshtml":function(g,h,i){try{g.detachEvent(p+h,i);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(r,s,t){r.removeEventListener(s,t,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(q,{"mshtml":function(e){if(e.type===k){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(q,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==n&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(a){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(b){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(c,d){if(document.createEventObject){var f=document.createEventObject();
return c.fireEvent(p+d,f);
}else{var f=document.createEvent(j);
f.initEvent(d,true,true);
return !c.dispatchEvent(f);
}},supportsEvent:qx.core.Variant.select(q,{"webkit":function(B,C){return B.hasOwnProperty(p+C);
},"default":function(u,v){var w=p+v;
var x=(w in u);

if(!x){x=typeof u[w]==o;

if(!x&&u.setAttribute){u.setAttribute(w,l);
x=typeof u[w]==o;
u.removeAttribute(w);
}}return x;
}})}});
})();
(function(){var bh="|bubble",bg="|capture",bf="|",be="_",bd="unload",bc="__er",bb="UNKNOWN_",ba="DOM_",Y="__es",X="c",U="WIN_",W="capture",V="qx.event.Manager",T="QX_";
qx.Bootstrap.define(V,{construct:function(bU,bV){this.__en=bU;
this.__eo=qx.core.ObjectRegistry.toHashCode(bU);
this.__ep=bV;
if(bU.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(bU,bd,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(bU,bd,arguments.callee);
self.dispose();
}));
}this.__eq={};
this.__er={};
this.__es={};
this.__et={};
},statics:{__eu:0,getNextUniqueId:function(){return (this.__eu++).toString(36);
}},members:{__ep:null,__eq:null,__es:null,__ev:null,__er:null,__et:null,__en:null,__eo:null,getWindow:function(){return this.__en;
},getWindowId:function(){return this.__eo;
},getHandler:function(cg){var ch=this.__er[cg.classname];

if(ch){return ch;
}return this.__er[cg.classname]=new cg(this);
},getDispatcher:function(bF){var bG=this.__es[bF.classname];

if(bG){return bG;
}return this.__es[bF.classname]=new bF(this,this.__ep);
},getListeners:function(e,f,g){var h=e.$$hash||qx.core.ObjectRegistry.toHashCode(e);
var k=this.__eq[h];

if(!k){return null;
}var m=f+(g?bg:bh);
var j=k[m];
return j?j.concat():null;
},serializeListeners:function(z){var G=z.$$hash||qx.core.ObjectRegistry.toHashCode(z);
var I=this.__eq[G];
var E=[];

if(I){var C,H,A,D,F;

for(var B in I){C=B.indexOf(bf);
H=B.substring(0,C);
A=B.charAt(C+1)==X;
D=I[B];

for(var i=0,l=D.length;i<l;i++){F=D[i];
E.push({self:F.context,handler:F.handler,type:H,capture:A});
}}}return E;
},toggleAttachedEvents:function(bW,bX){var cd=bW.$$hash||qx.core.ObjectRegistry.toHashCode(bW);
var cf=this.__eq[cd];

if(cf){var ca,ce,bY,cb;

for(var cc in cf){ca=cc.indexOf(bf);
ce=cc.substring(0,ca);
bY=cc.charCodeAt(ca+1)===99;
cb=cf[cc];

if(bX){this.__ew(bW,ce,bY);
}else{this.__ex(bW,ce,bY);
}}}},hasListener:function(cx,cy,cz){{};
var cA=cx.$$hash||qx.core.ObjectRegistry.toHashCode(cx);
var cC=this.__eq[cA];

if(!cC){return false;
}var cD=cy+(cz?bg:bh);
var cB=cC[cD];
return cB&&cB.length>0;
},importListeners:function(bi,bj){{};
var bp=bi.$$hash||qx.core.ObjectRegistry.toHashCode(bi);
var bq=this.__eq[bp]={};
var bm=qx.event.Manager;

for(var bk in bj){var bn=bj[bk];
var bo=bn.type+(bn.capture?bg:bh);
var bl=bq[bo];

if(!bl){bl=bq[bo]=[];
this.__ew(bi,bn.type,bn.capture);
}bl.push({handler:bn.listener,context:bn.self,unique:bn.unique||(bm.__eu++).toString(36)});
}},addListener:function(ci,cj,ck,self,cl){var cp;
{};
var cq=ci.$$hash||qx.core.ObjectRegistry.toHashCode(ci);
var cs=this.__eq[cq];

if(!cs){cs=this.__eq[cq]={};
}var co=cj+(cl?bg:bh);
var cn=cs[co];

if(!cn){cn=cs[co]=[];
}if(cn.length===0){this.__ew(ci,cj,cl);
}var cr=(qx.event.Manager.__eu++).toString(36);
var cm={handler:ck,context:self,unique:cr};
cn.push(cm);
return co+bf+cr;
},findHandler:function(bH,bI){var bS=false,bL=false,bT=false;
var bR;

if(bH.nodeType===1){bS=true;
bR=ba+bH.tagName.toLowerCase()+be+bI;
}else if(bH==this.__en){bL=true;
bR=U+bI;
}else if(bH.classname){bT=true;
bR=T+bH.classname+be+bI;
}else{bR=bb+bH+be+bI;
}var bN=this.__et;

if(bN[bR]){return bN[bR];
}var bQ=this.__ep.getHandlers();
var bM=qx.event.IEventHandler;
var bO,bP,bK,bJ;

for(var i=0,l=bQ.length;i<l;i++){bO=bQ[i];
bK=bO.SUPPORTED_TYPES;

if(bK&&!bK[bI]){continue;
}bJ=bO.TARGET_CHECK;

if(bJ){if(!bS&&bJ===bM.TARGET_DOMNODE){continue;
}else if(!bL&&bJ===bM.TARGET_WINDOW){continue;
}else if(!bT&&bJ===bM.TARGET_OBJECT){continue;
}}bP=this.getHandler(bQ[i]);

if(bO.IGNORE_CAN_HANDLE||bP.canHandleEvent(bH,bI)){bN[bR]=bP;
return bP;
}}return null;
},__ew:function(a,b,c){var d=this.findHandler(a,b);

if(d){d.registerEvent(a,b,c);
return;
}{};
},removeListener:function(J,K,L,self,M){var Q;
{};
var R=J.$$hash||qx.core.ObjectRegistry.toHashCode(J);
var S=this.__eq[R];

if(!S){return false;
}var N=K+(M?bg:bh);
var O=S[N];

if(!O){return false;
}var P;

for(var i=0,l=O.length;i<l;i++){P=O[i];

if(P.handler===L&&P.context===self){qx.lang.Array.removeAt(O,i);

if(O.length==0){this.__ex(J,K,M);
}return true;
}}return false;
},removeListenerById:function(n,o){var u;
{};
var s=o.split(bf);
var x=s[0];
var p=s[1].charCodeAt(0)==99;
var w=s[2];
var v=n.$$hash||qx.core.ObjectRegistry.toHashCode(n);
var y=this.__eq[v];

if(!y){return false;
}var t=x+(p?bg:bh);
var r=y[t];

if(!r){return false;
}var q;

for(var i=0,l=r.length;i<l;i++){q=r[i];

if(q.unique===w){qx.lang.Array.removeAt(r,i);

if(r.length==0){this.__ex(n,x,p);
}return true;
}}return false;
},removeAllListeners:function(by){var bC=by.$$hash||qx.core.ObjectRegistry.toHashCode(by);
var bE=this.__eq[bC];

if(!bE){return false;
}var bA,bD,bz;

for(var bB in bE){if(bE[bB].length>0){bA=bB.split(bf);
bD=bA[0];
bz=bA[1]===W;
this.__ex(by,bD,bz);
}}delete this.__eq[bC];
return true;
},__ex:function(ct,cu,cv){var cw=this.findHandler(ct,cu);

if(cw){cw.unregisterEvent(ct,cu,cv);
return;
}{};
},dispatchEvent:function(br,event){var bw;
{};
var bx=event.getType();

if(!event.getBubbles()&&!this.hasListener(br,bx)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(br);
}var bv=this.__ep.getDispatchers();
var bu;
var bt=false;

for(var i=0,l=bv.length;i<l;i++){bu=this.getDispatcher(bv[i]);
if(bu.canDispatchEvent(br,event,bx)){bu.dispatchEvent(br,event,bx);
bt=true;
break;
}}
if(!bt){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bx+" on "+br);
return true;
}var bs=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bs;
},dispose:function(){this.__ep.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,bc);
qx.util.DisposeUtil.disposeMap(this,Y);
this.__eq=this.__en=this.__ev=null;
this.__ep=this.__et=null;
}}});
})();
(function(){var n="qx.dom.Node",m="qx.client",l="";
qx.Bootstrap.define(n,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(p){return p.nodeType===
this.DOCUMENT?p:
p.ownerDocument||p.document;
},getWindow:qx.core.Variant.select(m,{"mshtml":function(s){if(s.nodeType==null){return s;
}if(s.nodeType!==this.DOCUMENT){s=s.ownerDocument;
}return s.parentWindow;
},"default":function(h){if(h.nodeType==null){return h;
}if(h.nodeType!==this.DOCUMENT){h=h.ownerDocument;
}return h.defaultView;
}}),getDocumentElement:function(f){return this.getDocument(f).documentElement;
},getBodyElement:function(o){return this.getDocument(o).body;
},isNode:function(g){return !!(g&&g.nodeType!=null);
},isElement:function(t){return !!(t&&t.nodeType===this.ELEMENT);
},isDocument:function(d){return !!(d&&d.nodeType===this.DOCUMENT);
},isText:function(e){return !!(e&&e.nodeType===this.TEXT);
},isWindow:function(q){return !!(q&&q.history&&q.location&&q.document);
},isNodeName:function(j,k){if(!k||!j||!j.nodeName){return false;
}return k.toLowerCase()==qx.dom.Node.getName(j);
},getName:function(r){if(!r||!r.nodeName){return null;
}return r.nodeName.toLowerCase();
},getText:function(b){if(!b||!b.nodeType){return null;
}
switch(b.nodeType){case 1:var i,a=[],c=b.childNodes,length=c.length;

for(i=0;i<length;i++){a[i]=this.getText(c[i]);
}return a.join(l);
case 2:return b.nodeValue;
break;
case 3:return b.nodeValue;
break;
}return null;
}}});
})();
(function(){var z="mshtml",y="qx.client",x="[object Array]",w="qx.lang.Array",v="qx",u="number",t="string";
qx.Bootstrap.define(w,{statics:{toArray:function(B,C){return this.cast(B,Array,C);
},cast:function(K,L,M){if(K.constructor===L){return K;
}
if(qx.Class.hasInterface(K,qx.data.IListData)){var K=K.toArray();
}var N=new L;
if(qx.core.Variant.isSet(y,z)){if(K.item){for(var i=M||0,l=K.length;i<l;i++){N.push(K[i]);
}return N;
}}if(Object.prototype.toString.call(K)===x&&M==null){N.push.apply(N,K);
}else{N.push.apply(N,Array.prototype.slice.call(K,M||0));
}return N;
},fromArguments:function(D,E){return Array.prototype.slice.call(D,E||0);
},fromCollection:function(R){if(qx.core.Variant.isSet(y,z)){if(R.item){var S=[];

for(var i=0,l=R.length;i<l;i++){S[i]=R[i];
}return S;
}}return Array.prototype.slice.call(R,0);
},fromShortHand:function(bk){var bm=bk.length;
var bl=qx.lang.Array.clone(bk);
switch(bm){case 1:bl[1]=bl[2]=bl[3]=bl[0];
break;
case 2:bl[2]=bl[0];
case 3:bl[3]=bl[1];
}return bl;
},clone:function(p){return p.concat();
},insertAt:function(bb,bc,i){bb.splice(i,0,bc);
return bb;
},insertBefore:function(bh,bi,bj){var i=bh.indexOf(bj);

if(i==-1){bh.push(bi);
}else{bh.splice(i,0,bi);
}return bh;
},insertAfter:function(H,I,J){var i=H.indexOf(J);

if(i==-1||i==(H.length-1)){H.push(I);
}else{H.splice(i+1,0,I);
}return H;
},removeAt:function(s,i){return s.splice(i,1)[0];
},removeAll:function(V){V.length=0;
return this;
},append:function(T,U){{};
Array.prototype.push.apply(T,U);
return T;
},exclude:function(W,X){{};

for(var i=0,ba=X.length,Y;i<ba;i++){Y=W.indexOf(X[i]);

if(Y!=-1){W.splice(Y,1);
}}return W;
},remove:function(q,r){var i=q.indexOf(r);

if(i!=-1){q.splice(i,1);
return r;
}},contains:function(bn,bo){return bn.indexOf(bo)!==-1;
},equals:function(bp,bq){var length=bp.length;

if(length!==bq.length){return false;
}
for(var i=0;i<length;i++){if(bp[i]!==bq[i]){return false;
}}return true;
},sum:function(F){var G=0;

for(var i=0,l=F.length;i<l;i++){G+=F[i];
}return G;
},max:function(O){{};
var i,Q=O.length,P=O[0];

for(i=1;i<Q;i++){if(O[i]>P){P=O[i];
}}return P===undefined?null:P;
},min:function(be){{};
var i,bg=be.length,bf=be[0];

for(i=1;i<bg;i++){if(be[i]<bf){bf=be[i];
}}return bf===undefined?null:bf;
},unique:function(a){var m=[],c={},f={},h={};
var g,b=0;
var n=v+qx.lang.Date.now();
var d=false,k=false,o=false;
for(var i=0,j=a.length;i<j;i++){g=a[i];
if(g===null){if(!d){d=true;
m.push(g);
}}else if(g===undefined){}else if(g===false){if(!k){k=true;
m.push(g);
}}else if(g===true){if(!o){o=true;
m.push(g);
}}else if(typeof g===t){if(!c[g]){c[g]=1;
m.push(g);
}}else if(typeof g===u){if(!f[g]){f[g]=1;
m.push(g);
}}else{e=g[n];

if(e==null){e=g[n]=b++;
}
if(!h[e]){h[e]=g;
m.push(g);
}}}for(var e in h){try{delete h[e][n];
}catch(bd){try{h[e][n]=null;
}catch(A){throw new Error("Cannot clean-up map entry doneObjects["+e+"]["+n+"]");
}}}return m;
}}});
})();
(function(){var j="()",i=".",h=".prototype.",g='anonymous()',f="qx.lang.Function",e=".constructor()";
qx.Bootstrap.define(f,{statics:{getCaller:function(H){return H.caller?H.caller.callee:H.callee.caller;
},getName:function(w){if(w.displayName){return w.displayName;
}
if(w.$$original||w.wrapper||w.classname){return w.classname+e;
}
if(w.$$mixin){for(var y in w.$$mixin.$$members){if(w.$$mixin.$$members[y]==w){return w.$$mixin.name+h+y+j;
}}for(var y in w.$$mixin){if(w.$$mixin[y]==w){return w.$$mixin.name+i+y+j;
}}}
if(w.self){var z=w.self.constructor;

if(z){for(var y in z.prototype){if(z.prototype[y]==w){return z.classname+h+y+j;
}}for(var y in z){if(z[y]==w){return z.classname+i+y+j;
}}}}var x=w.toString().match(/function\s*(\w*)\s*\(.*/);

if(x&&x.length>=1&&x[1]){return x[1]+j;
}return g;
},globalEval:function(D){if(window.execScript){return window.execScript(D);
}else{return eval.call(window,D);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(B,C){{};
if(!C){return B;
}if(!(C.self||C.args||C.delay!=null||C.periodical!=null||C.attempt)){return B;
}return function(event){{};
var l=qx.lang.Array.fromArguments(arguments);
if(C.args){l=C.args.concat(l);
}
if(C.delay||C.periodical){var k=qx.event.GlobalError.observeMethod(function(){return B.apply(C.self||this,l);
});

if(C.delay){return window.setTimeout(k,C.delay);
}
if(C.periodical){return window.setInterval(k,C.periodical);
}}else if(C.attempt){var m=false;

try{m=B.apply(C.self||this,l);
}catch(A){}return m;
}else{return B.apply(C.self||this,l);
}};
},bind:function(n,self,o){return this.create(n,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(p,q){return this.create(p,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(E,self,F){if(arguments.length<3){return function(event){return E.call(self||this,event||window.event);
};
}else{var G=qx.lang.Array.fromArguments(arguments,2);
return function(event){var d=[event||window.event];
d.push.apply(d,G);
E.apply(self||this,d);
};
}},attempt:function(u,self,v){return this.create(u,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(a,b,self,c){return this.create(a,{delay:b,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(r,s,self,t){return this.create(r,{periodical:s,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var o="qx.event.Registration";
qx.Bootstrap.define(o,{statics:{__ec:{},getManager:function(t){if(t==null){{};
t=window;
}else if(t.nodeType){t=qx.dom.Node.getWindow(t);
}else if(!qx.dom.Node.isWindow(t)){t=window;
}var v=t.$$hash||qx.core.ObjectRegistry.toHashCode(t);
var u=this.__ec[v];

if(!u){u=new qx.event.Manager(t,this);
this.__ec[v]=u;
}return u;
},removeManager:function(z){var A=z.getWindowId();
delete this.__ec[A];
},addListener:function(I,J,K,self,L){return this.getManager(I).addListener(I,J,K,self,L);
},removeListener:function(p,q,r,self,s){return this.getManager(p).removeListener(p,q,r,self,s);
},removeListenerById:function(g,h){return this.getManager(g).removeListenerById(g,h);
},removeAllListeners:function(c){return this.getManager(c).removeAllListeners(c);
},hasListener:function(d,e,f){return this.getManager(d).hasListener(d,e,f);
},serializeListeners:function(Q){return this.getManager(Q).serializeListeners(Q);
},createEvent:function(M,N,O){{};
if(N==null){N=qx.event.type.Event;
}var P=qx.event.Pool.getInstance().getObject(N);

if(!P){return;
}O?P.init.apply(P,O):P.init();
if(M){P.setType(M);
}return P;
},dispatchEvent:function(H,event){return this.getManager(H).dispatchEvent(H,event);
},fireEvent:function(i,j,k,l){var m;
{};
var n=this.createEvent(j,k||null,l);
return this.getManager(i).dispatchEvent(i,n);
},fireNonBubblingEvent:function(B,C,D,E){{};
var F=this.getManager(B);

if(!F.hasListener(B,C,false)){return true;
}var G=this.createEvent(C,D||null,E);
return F.dispatchEvent(B,G);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__ed:[],addHandler:function(y){{};
this.__ed.push(y);
this.__ed.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__ed;
},__ee:[],addDispatcher:function(w,x){{};
this.__ee.push(w);
this.__ee.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__ee;
}}});
})();
(function(){var b="qx.log.appender.RingBuffer";
qx.Bootstrap.define(b,{construct:function(a){this.__jG=[];
this.setMaxMessages(a||50);
},members:{__jH:0,__jG:null,__jI:50,setMaxMessages:function(c){this.__jI=c;
this.clearHistory();
},getMaxMessages:function(){return this.__jI;
},process:function(d){var e=this.getMaxMessages();

if(this.__jG.length<e){this.__jG.push(d);
}else{this.__jG[this.__jH++]=d;

if(this.__jH>=e){this.__jH=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(f){if(f>this.__jG.length){f=this.__jG.length;
}
if(this.__jG.length==this.getMaxMessages()){var h=this.__jH-1;
}else{h=this.__jG.length-1;
}var g=h-f+1;

if(g<0){g+=this.__jG.length;
}var i;

if(g<=h){i=this.__jG.slice(g,h+1);
}else{i=this.__jG.slice(g,this.__jG.length).concat(this.__jG.slice(0,h+1));
}return i;
},clearHistory:function(){this.__jG=[];
this.__jH=0;
}}});
})();
(function(){var bi="node",bh="error",bg="...(+",bf="array",be=")",bd="info",bc="instance",bb="string",ba="null",Y="class",bD="number",bC="stringify",bB="]",bA="unknown",bz="function",by="boolean",bx="debug",bw="map",bv="undefined",bu="qx.log.Logger",bp=")}",bq="#",bn="warn",bo="document",bl="{...(",bm="[",bj="text[",bk="[...(",br="\n",bs=")]",bt="object";
qx.Bootstrap.define(bu,{statics:{__ef:bx,setLevel:function(a){this.__ef=a;
},getLevel:function(){return this.__ef;
},setTreshold:function(u){this.__ei.setMaxMessages(u);
},getTreshold:function(){return this.__ei.getMaxMessages();
},__eg:{},__eh:0,register:function(C){if(C.$$id){return;
}var D=this.__eh++;
this.__eg[D]=C;
C.$$id=D;
var E=this.__ei.getAllLogEvents();

for(var i=0,l=E.length;i<l;i++){C.process(E[i]);
}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__eg[P];
delete O.$$id;
},debug:function(n,o){this.__ek(bx,arguments);
},info:function(bE,bF){this.__ek(bd,arguments);
},warn:function(s,t){this.__ek(bn,arguments);
},error:function(bH,bI){this.__ek(bh,arguments);
},trace:function(bG){this.__ek(bd,[bG,qx.dev.StackTrace.getStackTrace().join(br)]);
},deprecatedMethodWarning:function(z,A){var B;
{};
},deprecatedClassWarning:function(Q,R){var S;
{};
},deprecatedEventWarning:function(p,event,q){var r;
{};
},deprecatedMixinWarning:function(V,W){var X;
{};
},deprecatedConstantWarning:function(v,w,x){var self,y;
{};
},clear:function(){this.__ei.clearHistory();
},__ei:new qx.log.appender.RingBuffer(50),__ej:{debug:0,info:1,warn:2,error:3},__ek:function(b,c){var h=this.__ej;

if(h[b]<h[this.__ef]){return;
}var e=c.length<2?null:c[0];
var g=e?1:0;
var d=[];

for(var i=g,l=c.length;i<l;i++){d.push(this.__em(c[i],true));
}var j=new Date;
var k={time:j,offset:j-qx.Bootstrap.LOADSTART,level:b,items:d,win:window};
if(e){if(e instanceof qx.core.Object){k.object=e.$$hash;
}else if(e.$$type){k.clazz=e;
}}this.__ei.process(k);
var m=this.__eg;

for(var f in m){m[f].process(k);
}},__el:function(T){if(T===undefined){return bv;
}else if(T===null){return ba;
}
if(T.$$type){return Y;
}var U=typeof T;

if(U===bz||U==bb||U===bD||U===by){return U;
}else if(U===bt){if(T.nodeType){return bi;
}else if(T.classname){return bc;
}else if(T instanceof Array){return bf;
}else if(T instanceof Error){return bh;
}else{return bw;
}}
if(T.toString){return bC;
}return bA;
},__em:function(F,G){var N=this.__el(F);
var J=bA;
var I=[];

switch(N){case ba:case bv:J=N;
break;
case bb:case bD:case by:J=F;
break;
case bi:if(F.nodeType===9){J=bo;
}else if(F.nodeType===3){J=bj+F.nodeValue+bB;
}else if(F.nodeType===1){J=F.nodeName.toLowerCase();

if(F.id){J+=bq+F.id;
}}else{J=bi;
}break;
case bz:J=qx.lang.Function.getName(F)||N;
break;
case bc:J=F.basename+bm+F.$$hash+bB;
break;
case Y:case bC:J=F.toString();
break;
case bh:I=qx.dev.StackTrace.getStackTraceFromError(F);
J=F.toString();
break;
case bf:if(G){J=[];

for(var i=0,l=F.length;i<l;i++){if(J.length>20){J.push(bg+(l-i)+be);
break;
}J.push(this.__em(F[i],false));
}}else{J=bk+F.length+bs;
}break;
case bw:if(G){var H;
var M=[];

for(var L in F){M.push(L);
}M.sort();
J=[];

for(var i=0,l=M.length;i<l;i++){if(J.length>20){J.push(bg+(l-i)+be);
break;
}L=M[i];
H=this.__em(F[L],false);
H.key=L;
J.push(H);
}}else{var K=0;

for(var L in F){K++;
}J=bl+K+bp;
}break;
}return {type:N,text:J,trace:I};
}}});
})();
(function(){var v="set",u="get",t="reset",s="qx.core.Object",r="]",q="[",p="$$user_",o="Don't use '_disposeFields' - instead assign directly to 'null'",n="Object";
qx.Class.define(s,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:n},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+q+this.$$hash+r;
},base:function(j,k){{};

if(arguments.length===1){return j.callee.base.call(this);
}else{return j.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bb){return bb.callee.self;
},clone:function(){var R=this.constructor;
var Q=new R;
var T=qx.Class.getProperties(R);
var S=qx.core.Property.$$store.user;
var U=qx.core.Property.$$method.set;
var name;
for(var i=0,l=T.length;i<l;i++){name=T[i];

if(this.hasOwnProperty(S[name])){Q[U[name]](this[S[name]]);
}}return Q;
},set:function(y,z){var B=qx.core.Property.$$method.set;

if(qx.lang.Type.isString(y)){if(!this[B[y]]){if(this[v+qx.lang.String.firstUp(y)]!=undefined){this[v+qx.lang.String.firstUp(y)](z);
return;
}{};
}return this[B[y]](z);
}else{for(var A in y){if(!this[B[A]]){if(this[v+qx.lang.String.firstUp(A)]!=undefined){this[v+qx.lang.String.firstUp(A)](y[A]);
continue;
}{};
}this[B[A]](y[A]);
}return this;
}},get:function(w){var x=qx.core.Property.$$method.get;

if(!this[x[w]]){if(this[u+qx.lang.String.firstUp(w)]!=undefined){return this[u+qx.lang.String.firstUp(w)]();
}{};
}return this[x[w]]();
},reset:function(O){var P=qx.core.Property.$$method.reset;

if(!this[P[O]]){if(this[t+qx.lang.String.firstUp(O)]!=undefined){this[t+qx.lang.String.firstUp(O)]();
return;
}{};
}this[P[O]]();
},__jJ:qx.event.Registration,addListener:function(by,bz,self,bA){if(!this.$$disposed){return this.__jJ.addListener(this,by,bz,self,bA);
}return null;
},addListenerOnce:function(bn,bo,self,bp){var bq=function(e){bo.call(self||this,e);
this.removeListener(bn,bq,this,bp);
};
return this.addListener(bn,bq,this,bp);
},removeListener:function(bc,bd,self,be){if(!this.$$disposed){return this.__jJ.removeListener(this,bc,bd,self,be);
}return false;
},removeListenerById:function(g){if(!this.$$disposed){return this.__jJ.removeListenerById(this,g);
}return false;
},hasListener:function(bg,bh){return this.__jJ.hasListener(this,bg,bh);
},dispatchEvent:function(f){if(!this.$$disposed){return this.__jJ.dispatchEvent(this,f);
}return true;
},fireEvent:function(br,bs,bt){if(!this.$$disposed){return this.__jJ.fireEvent(this,br,bs,bt);
}return true;
},fireNonBubblingEvent:function(L,M,N){if(!this.$$disposed){return this.__jJ.fireNonBubblingEvent(this,L,M,N);
}return true;
},fireDataEvent:function(bu,bv,bw,bx){if(!this.$$disposed){if(bw===undefined){bw=null;
}return this.__jJ.fireNonBubblingEvent(this,bu,qx.event.type.Data,[bv,bw,!!bx]);
}return true;
},__jK:null,setUserData:function(W,X){if(!this.__jK){this.__jK={};
}this.__jK[W]=X;
},getUserData:function(b){if(!this.__jK){return null;
}var c=this.__jK[b];
return c===undefined?null:c;
},__jL:qx.log.Logger,debug:function(V){this.__jL.debug(this,V);
},info:function(C){this.__jL.info(this,C);
},warn:function(d){this.__jL.warn(this,d);
},error:function(bf){this.__jL.error(this,bf);
},trace:function(){this.__jL.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bl,bj;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var bk=this.constructor;
var bi;

while(bk.superclass){if(bk.$$destructor){bk.$$destructor.call(this);
}if(bk.$$includes){bi=bk.$$flatIncludes;

for(var i=0,l=bi.length;i<l;i++){if(bi[i].$$destructor){bi[i].$$destructor.call(this);
}}}bk=bk.superclass;
}var bm=qx.Class.getProperties(this.constructor);

for(var i=0,l=bm.length;i<l;i++){delete this[p+bm[i]];
}{};
},_disposeFields:function(ba){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(h){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(a){qx.util.DisposeUtil.disposeArray(this,a);
},_disposeMap:function(m){qx.util.DisposeUtil.disposeMap(this,m);
}},settings:{"qx.disposerDebugLevel":0},defer:function(Y){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__jK=null;
var F=this.constructor;
var J;
var K=qx.core.Property.$$store;
var H=K.user;
var I=K.theme;
var D=K.inherit;
var G=K.useinit;
var E=K.init;

while(F){J=F.$$properties;

if(J){for(var name in J){if(J[name].dispose){this[H[name]]=this[I[name]]=this[D[name]]=this[G[name]]=this[E[name]]=undefined;
}}}F=F.superclass;
}}});
})();
(function(){var P="",O="g",N="0",M='\\$1',L="%",K='-',J="qx.lang.String",I=' ',H='\n',G="undefined";
qx.Bootstrap.define(J,{statics:{camelCase:function(D){return D.replace(/\-([a-z])/g,function(d,e){return e.toUpperCase();
});
},hyphenate:function(b){return b.replace(/[A-Z]/g,function(l){return (K+l.charAt(0).toLowerCase());
});
},capitalize:function(Q){return Q.replace(/\b[a-z]/g,function(w){return w.toUpperCase();
});
},clean:function(E){return this.trim(E.replace(/\s+/g,I));
},trimLeft:function(o){return o.replace(/^\s+/,P);
},trimRight:function(x){return x.replace(/\s+$/,P);
},trim:function(c){return c.replace(/^\s+|\s+$/g,P);
},startsWith:function(B,C){return B.indexOf(C)===0;
},endsWith:function(m,n){return m.substring(m.length-n.length,m.length)===n;
},repeat:function(z,A){return z.length>=0?new Array(A+1).join(z):P;
},pad:function(p,length,q){var r=length-p.length;

if(r>0){if(typeof q===G){q=N;
}return this.repeat(q,r)+p;
}else{return p;
}},firstUp:function(s){return s.charAt(0).toUpperCase()+s.substr(1);
},firstLow:function(F){return F.charAt(0).toLowerCase()+F.substr(1);
},contains:function(R,S){return R.indexOf(S)!=-1;
},format:function(t,u){var v=t;

for(var i=0;i<u.length;i++){v=v.replace(new RegExp(L+(i+1),O),u[i]);
}return v;
},escapeRegexpChars:function(k){return k.replace(/([.*+?^${}()|[\]\/\\])/g,M);
},toArray:function(y){return y.split(/\B|\b/g);
},stripTags:function(a){return a.replace(/<\/?[^>]+>/gi,P);
},stripScripts:function(f,g){var j=P;
var h=f.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){j+=arguments[1]+H;
return P;
});

if(g===true){qx.lang.Function.globalEval(j);
}return h;
}}});
})();
(function(){var s="function",r="Boolean",q="qx.Interface",p="]",o="toggle",n="Interface",m="is",k="[Interface ";
qx.Bootstrap.define(q,{statics:{define:function(name,t){if(t){if(t.extend&&!(t.extend instanceof Array)){t.extend=[t.extend];
}{};
var u=t.statics?t.statics:{};
if(t.extend){u.$$extends=t.extend;
}
if(t.properties){u.$$properties=t.properties;
}
if(t.members){u.$$members=t.members;
}
if(t.events){u.$$events=t.events;
}}else{var u={};
}u.$$type=n;
u.name=name;
u.toString=this.genericToString;
u.basename=qx.Bootstrap.createNamespace(name,u);
qx.Interface.$$registry[name]=u;
return u;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(E){if(!E){return [];
}var F=E.concat();

for(var i=0,l=E.length;i<l;i++){if(E[i].$$extends){F.push.apply(F,this.flatten(E[i].$$extends));
}}return F;
},__eH:function(a,b,c,d){var h=c.$$members;

if(h){for(var g in h){if(qx.lang.Type.isFunction(h[g])){var f=this.__eI(b,g);
var e=f||qx.lang.Type.isFunction(a[g]);

if(!e){throw new Error('Implementation of method "'+g+'" is missing in class "'+b.classname+'" required by interface "'+c.name+'"');
}var j=d===true&&!f&&!qx.Class.hasInterface(b,c);

if(j){a[g]=this.__eL(c,a[g],g,h[g]);
}}else{if(typeof a[g]===undefined){if(typeof a[g]!==s){throw new Error('Implementation of member "'+g+'" is missing in class "'+b.classname+'" required by interface "'+c.name+'"');
}}}}}},__eI:function(y,z){var D=z.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!D){return false;
}var A=qx.lang.String.firstLow(D[2]);
var B=qx.Class.hasProperty(y,A);

if(!B){return false;
}var C=D[0]==m||D[0]==o;

if(C){return qx.Class.getPropertyDefinition(y,A).check==r;
}return true;
},__eJ:function(G,H){if(H.$$properties){for(var I in H.$$properties){if(!qx.Class.hasProperty(G,I)){throw new Error('The property "'+I+'" is not supported by Class "'+G.classname+'"!');
}}}},__eK:function(v,w){if(w.$$events){for(var x in w.$$events){if(!qx.Class.supportsEvent(v,x)){throw new Error('The event "'+x+'" is not supported by Class "'+v.classname+'"!');
}}}},assertObject:function(J,K){var M=J.constructor;
this.__eH(J,M,K,false);
this.__eJ(M,K);
this.__eK(M,K);
var L=K.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assertObject(J,L[i]);
}}},assert:function(N,O,P){this.__eH(N.prototype,N,O,P);
this.__eJ(N,O);
this.__eK(N,O);
var Q=O.$$extends;

if(Q){for(var i=0,l=Q.length;i<l;i++){this.assert(N,Q[i],P);
}}},genericToString:function(){return k+this.name+p;
},$$registry:{},__eL:function(){},__eM:null,__eN:function(){}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,e,b],mode:c}},members:{__lh:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__lh=null;
},getInsets:function(){if(this.__lh){return this.__lh;
}var a=this._getDefaultInsets();
return this.__lh={left:this.getInsetLeft()==null?a.left:this.getInsetLeft(),right:this.getInsetRight()==null?a.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?a.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?a.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__lh=null;
}},destruct:function(){this.__lh=null;
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
(function(){var r="_applyStyle",q="Color",p="px",o="solid",n="dotted",m="double",l="dashed",k="",j="_applyWidth",i="qx.ui.decoration.Uniform",f="px ",h=" ",g="scale",e="PositiveInteger",d="absolute";
qx.Class.define(i,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){arguments.callee.base.call(this);
if(a!=null){this.setWidth(a);
}
if(b!=null){this.setStyle(b);
}
if(c!=null){this.setColor(c);
}},properties:{width:{check:e,init:0,apply:j},style:{nullable:true,check:[o,n,l,m],init:o,apply:r},color:{nullable:true,check:q,apply:r},backgroundColor:{check:q,nullable:true,apply:r}},members:{__po:null,_getDefaultInsets:function(){var s=this.getWidth();
return {top:s,right:s,bottom:s,left:s};
},_isInitialized:function(){return !!this.__po;
},getMarkup:function(){if(this.__po){return this.__po;
}var t={position:d,top:0,left:0};
var u=this.getWidth();
{};
var w=qx.theme.manager.Color.getInstance();
t.border=u+f+this.getStyle()+h+w.resolve(this.getColor());
var v=this._generateBackgroundMarkup(t);
return this.__po=v;
},resize:function(A,B,C){var E=this.getBackgroundImage()&&this.getBackgroundRepeat()==g;

if(E||qx.bom.client.Feature.CONTENT_BOX){var D=this.getWidth()*2;
B-=D;
C-=D;
if(B<0){B=0;
}
if(C<0){C=0;
}}A.style.width=B+p;
A.style.height=C+p;
},tint:function(x,y){var z=qx.theme.manager.Color.getInstance();

if(y==null){y=this.getBackgroundColor();
}x.style.backgroundColor=z.resolve(y)||k;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__po=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="double",f="px ",e="dotted",d="_applyWidth",c="dashed",b="Number",a=" ",F="shorthand",E="px",D="widthTop",C="styleRight",B="styleLeft",A="widthLeft",z="widthBottom",y="styleTop",x="colorBottom",w="styleBottom",q="widthRight",r="colorLeft",o="colorRight",p="colorTop",m="scale",n="border-top",k="border-left",l="border-right",s="qx.ui.decoration.Single",t="",v="border-bottom",u="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(T,U,V){arguments.callee.base.call(this);
if(T!=null){this.setWidth(T);
}
if(U!=null){this.setStyle(U);
}
if(V!=null){this.setColor(V);
}},properties:{widthTop:{check:b,init:0,apply:d},widthRight:{check:b,init:0,apply:d},widthBottom:{check:b,init:0,apply:d},widthLeft:{check:b,init:0,apply:d},styleTop:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleRight:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleBottom:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleLeft:{nullable:true,check:[i,e,c,g],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[A,B,r]},right:{group:[q,C,o]},top:{group:[D,y,p]},bottom:{group:[z,w,x]},width:{group:[D,q,z,A],mode:F},style:{group:[y,C,w,B],mode:F},color:{group:[p,o,x,r],mode:F}},members:{__nh:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__nh;
},getMarkup:function(L){if(this.__nh){return this.__nh;
}var M=qx.theme.manager.Color.getInstance();
var N={};
var P=this.getWidthTop();

if(P>0){N[n]=P+f+this.getStyleTop()+a+M.resolve(this.getColorTop());
}var P=this.getWidthRight();

if(P>0){N[l]=P+f+this.getStyleRight()+a+M.resolve(this.getColorRight());
}var P=this.getWidthBottom();

if(P>0){N[v]=P+f+this.getStyleBottom()+a+M.resolve(this.getColorBottom());
}var P=this.getWidthLeft();

if(P>0){N[k]=P+f+this.getStyleLeft()+a+M.resolve(this.getColorLeft());
}{};
N.position=u;
N.top=0;
N.left=0;
var O=this._generateBackgroundMarkup(N);
return this.__nh=O;
},resize:function(G,H,I){var K=this.getBackgroundImage()&&this.getBackgroundRepeat()==m;

if(K||qx.bom.client.Feature.CONTENT_BOX){var J=this.getInsets();
H-=J.left+J.right;
I-=J.top+J.bottom;
if(H<0){H=0;
}
if(I<0){I=0;
}}G.style.width=H+E;
G.style.height=I+E;
},tint:function(Q,R){var S=qx.theme.manager.Color.getInstance();

if(R==null){R=this.getBackgroundColor();
}Q.style.backgroundColor=S.resolve(R)||t;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__nh=null;
}});
})();
(function(){var j="px ",i=" ",h="Color",g="Number",f=";",e="px",d="shorthand",c="innerWidthRight",b="border-left:",a='<div style="position:absolute;top:0;left:0;',C="innerColorBottom",B='</div>',A='',z="scale",y="border-top",x="innerWidthTop",w="border-left",v="innerColorRight",u="innerColorTop",t="innerColorLeft",q="border-top:",r="qx.ui.decoration.Double",o="border-right:",p="border-bottom",m='">',n="innerWidthBottom",k="innerWidthLeft",l="border-bottom:",s="border-right";
qx.Class.define(r,{extend:qx.ui.decoration.Single,construct:function(D,E,F,innerWidth,G){arguments.callee.base.call(this,D,E,F,innerWidth,G);
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(G!=null){this.setInnerColor(G);
}},properties:{innerWidthTop:{check:g,init:0},innerWidthRight:{check:g,init:0},innerWidthBottom:{check:g,init:0},innerWidthLeft:{check:g,init:0},innerWidth:{group:[x,c,n,k],mode:d},innerColorTop:{nullable:true,check:h},innerColorRight:{nullable:true,check:h},innerColorBottom:{nullable:true,check:h},innerColorLeft:{nullable:true,check:h},innerColor:{group:[u,v,C,t],mode:d}},members:{__rj:null,_getDefaultInsets:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
},_isInitialized:function(){return !!this.__rj;
},getMarkup:function(){if(this.__rj){return this.__rj;
}var H=qx.theme.manager.Color.getInstance();
var K={};
var I=this.getInnerWidthTop();

if(I>0){K[y]=I+j+this.getStyleTop()+i+H.resolve(this.getInnerColorTop());
}var I=this.getInnerWidthRight();

if(I>0){K[s]=I+j+this.getStyleRight()+i+H.resolve(this.getInnerColorRight());
}var I=this.getInnerWidthBottom();

if(I>0){K[p]=I+j+this.getStyleBottom()+i+H.resolve(this.getInnerColorBottom());
}var I=this.getInnerWidthLeft();

if(I>0){K[w]=I+j+this.getStyleLeft()+i+H.resolve(this.getInnerColorLeft());
}{};
var L=this._generateBackgroundMarkup(K);
var J=A;
var I=this.getWidthTop();

if(I>0){J+=q+I+j+this.getStyleTop()+i+H.resolve(this.getColorTop())+f;
}var I=this.getWidthRight();

if(I>0){J+=o+I+j+this.getStyleRight()+i+H.resolve(this.getColorRight())+f;
}var I=this.getWidthBottom();

if(I>0){J+=l+I+j+this.getStyleBottom()+i+H.resolve(this.getColorBottom())+f;
}var I=this.getWidthLeft();

if(I>0){J+=b+I+j+this.getStyleLeft()+i+H.resolve(this.getColorLeft())+f;
}{};
return this.__rj=a+J+m+L+B;
},resize:function(M,N,O){var Q=this.getBackgroundImage()&&this.getBackgroundRepeat()==z;

if(Q||qx.bom.client.Feature.CONTENT_BOX){var P=this.getInsets();
var innerWidth=N-P.left-P.right;
var innerHeight=O-P.top-P.bottom;
}else{var innerWidth=N-this.getWidthLeft()-this.getWidthRight();
var innerHeight=O-this.getWidthTop()-this.getWidthBottom();
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}M.firstChild.style.width=innerWidth+e;
M.firstChild.style.height=innerHeight+e;
}},destruct:function(){this.__rj=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",x="qx.client",w="-br",v="-t",u="-tl",t="-r",s='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',r="_applyBaseImage",q="-b",p="String",o="",m="-bl",n="-c",k="mshtml",l="qx.ui.decoration.Grid";
qx.Class.define(l,{extend:qx.ui.decoration.Abstract,construct:function(F,G){arguments.callee.base.call(this);
if(F!=null){this.setBaseImage(F);
}
if(G!=null){this.setInsets(G);
}},properties:{baseImage:{check:p,nullable:true,apply:r}},members:{__ne:null,__nf:null,__ng:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ne;
},getMarkup:function(){if(this.__ne){return this.__ne;
}var H=qx.bom.element.Decoration;
var I=this.__nf;
var J=this.__ng;
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
return this.__ne=K.join(o);
},resize:function(Q,R,S){var T=this.__ng;
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

if(qx.core.Variant.isSet(x,k)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(R%2==1){Q.childNodes[2].style.marginRight=h;
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
}}}},tint:function(L,M){},_applyBaseImage:function(y,z){{};

if(y){var D=this._resolveImageUrl(y);
var E=/(.*)(\.[a-z]+)$/.exec(D);
var C=E[1];
var B=E[2];
var A=this.__nf={tl:C+u+B,t:C+v+B,tr:C+d+B,bl:C+m+B,b:C+q+B,br:C+w+B,l:C+c+B,c:C+n+B,r:C+t+B};
this.__ng=this._computeEdgeSizes(A);
}},_resolveImageUrl:function(N){return qx.util.AliasManager.getInstance().resolve(N);
},_computeEdgeSizes:function(O){var P=qx.util.ResourceManager.getInstance();
return {top:P.getImageHeight(O.t),bottom:P.getImageHeight(O.b),left:P.getImageWidth(O.l),right:P.getImageWidth(O.r)};
}},destruct:function(){this.__ne=this.__nf=this.__ng=null;
}});
})();
(function(){var u="_applyStyle",t='"></div>',s="Color",r="1px",q='<div style="',p='border:',o="1px solid ",n="",m=";",l="px",G='</div>',F="qx.ui.decoration.Beveled",E='<div style="position:absolute;top:1px;left:1px;',D='border-bottom:',C='border-right:',B='border-left:',A='border-top:',z="Number",y='<div style="position:absolute;top:1px;left:0px;',x='position:absolute;top:0px;left:1px;',v='<div style="overflow:hidden;font-size:0;line-height:0;">',w="absolute";
qx.Class.define(F,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(K,L,M){arguments.callee.base.call(this);
if(K!=null){this.setOuterColor(K);
}
if(L!=null){this.setInnerColor(L);
}
if(M!=null){this.setInnerOpacity(M);
}},properties:{innerColor:{check:s,nullable:true,apply:u},innerOpacity:{check:z,init:1,apply:u},outerColor:{check:s,nullable:true,apply:u},backgroundColor:{check:s,nullable:true,apply:u}},members:{__oO:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__oO;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__oO){return this.__oO;
}var N=qx.theme.manager.Color.getInstance();
var O=[];
var R=o+N.resolve(this.getOuterColor())+m;
var Q=o+N.resolve(this.getInnerColor())+m;
O.push(v);
O.push(q);
O.push(p,R);
O.push(qx.bom.element.Opacity.compile(0.35));
O.push(t);
O.push(y);
O.push(B,R);
O.push(C,R);
O.push(t);
O.push(q);
O.push(x);
O.push(A,R);
O.push(D,R);
O.push(t);
var P={position:w,top:r,left:r};
O.push(this._generateBackgroundMarkup(P));
O.push(E);
O.push(p,Q);
O.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
O.push(t);
O.push(G);
return this.__oO=O.join(n);
},resize:function(a,b,c){if(b<4){b=4;
}
if(c<4){c=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=b-2;
var outerHeight=c-2;
var i=outerWidth;
var h=outerHeight;
var innerWidth=b-4;
var innerHeight=c-4;
}else{var outerWidth=b;
var outerHeight=c;
var i=b-2;
var h=c-2;
var innerWidth=i;
var innerHeight=h;
}var k=l;
var g=a.childNodes[0].style;
g.width=outerWidth+k;
g.height=outerHeight+k;
var f=a.childNodes[1].style;
f.width=outerWidth+k;
f.height=h+k;
var e=a.childNodes[2].style;
e.width=i+k;
e.height=outerHeight+k;
var d=a.childNodes[3].style;
d.width=i+k;
d.height=h+k;
var j=a.childNodes[4].style;
j.width=innerWidth+k;
j.height=innerHeight+k;
},tint:function(H,I){var J=qx.theme.manager.Color.getInstance();

if(I==null){I=this.getBackgroundColor();
}H.childNodes[3].style.backgroundColor=J.resolve(I)||n;
}},destruct:function(){this.__oO=null;
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",x="table-header-border",w="border-separator",v="tooltip-text",u="invalid",t="white",s="dotted",r="effect",q="table-focus-indicator",p="border-focused-invalid",o="qx/decoration/Classic",m="border-lead",n="decoration/shadow/shadow-small.png",k="qx.theme.classic.Decoration",l="decoration/shadow/shadow.png";
qx.Theme.define(k,{aliases:{decoration:o},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:u}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:w}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:w}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:l,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:u,innerColor:p,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:s,color:m}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:t,colorLeft:t,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:x,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:q,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:x,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:x,styleRight:f,widthBottom:2,colorBottom:r,styleBottom:f}}}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var dI="button",dH="widget",dG="background",dF="atom",dE="inset-thin",dD="outset",dC="text-disabled",dB="text-selected",dA="inset",dz="groupbox",cB="cell",cA="focused-inset",cz="tooltip",cy="image",cx="menu-button",cw="middle",cv="decoration/arrows/down.gif",cu="spinner",ct="background-selected",cs="list",dP="button-hovered",dQ="checkbox",dN="toolbar-button",dO="button-frame",dL="popup",dM="textfield",dJ="label",dK="background-invalid",dR="background-disabled",dS="bold",dh="white",dg="shadow-small",dj="invalid",di="scrollbar",dl="center",dk="datechooser/button",dn="button-abandoned",dm="background-light",df="main",de="date-chooser",R="date-chooser-title",S="radiobutton",T="default",U="combobox",V="background-field",W="outset-thin",X="menu-slidebar-button",Y="scrollbar/button",ba="combobox/button",bb="table-header-cell",eh="decoration/arrows/right.gif",eg="decoration/arrows/up.gif",ef="text",ee="decoration/arrows/down-small.gif",el="icon/16/places/folder.png",ek="tree-folder",ej="slidebar/button-forward",ei="icon/16/mimetypes/text-plain.png",en="right-top",em="button-checked",bN=".png",bO="background-focused",bL="datechooser",bM="slidebar/button-backward",bR="selectbox",bS="treevirtual-folder",bP="decoration/form/",bQ="decoration/tree/minus.gif",bJ="",bK="decoration/tree/plus.gif",bt="-invalid",bs="decoration/arrows/left.gif",bv="icon/16/places/folder-open.png",bu="table-row-background-even",bp="decoration/treevirtual/cross_minus.gif",bo="radiobutton-hovered",br="decoration/treevirtual/start_plus.gif",bq="decoration/cursors/",bn="icon/16/actions/dialog-ok.png",bm="slidebar",bX="table-scroller-focus-indicator",bY="move-frame",ca="nodrop",cb="tabview-page-button-left",bT="decoration/arrows/up-small.gif",bU="move",bV="radiobutton-checked-focused",bW="qx.theme.classic.Appearance",cc="decoration/menu/checkbox.gif",cd="tooltip-error",bE="right",bD="decoration/arrows/rewind.gif",bC="table-scroller-header",bB="radiobutton-disabled",bA="table-pane",bz="focused-outset",by="checkbox-hovered",bx="icon/16/actions/dialog-cancel.png",bI="menu-slidebar",bH="datechooser-date-pane",ce="background-pane",cf="decoration/treevirtual/cross_plus.gif",cg="qx/icon/Oxygen/16/actions/window-close.png",ch="datechooser-week",ci="icon/16/apps/office-calendar.png",cj="datechooser-weekday",ck="table-header-border",cl="table-header-cell-hover",cm="window-active-caption-text",cn="window-active-caption",cI="icon",cH="checkbox-checked-focused",cG="toolbar-separator",cF="groove",cM="checkbox-pressed",cL="tooltip-invalid",cK="decoration/window/restore.gif",cJ="decoration/menu/checkbox-invert.gif",cP="scrollarea",cO="window-inactive-caption-text",da="best-fit",db="up.gif",cX="keep-align",cY="tabview-page-button-right",cV="checkbox-disabled",cW="tabview-page-button-top",cT="tabview-page-button-bottom",cU="row-layer",dc="decoration/menu/radiobutton.gif",dd="decoration/arrows/",ds="decoration/table/descending.png",dr="tooltip-text",du="checkbox-checked-hovered",dt="left.gif",dw="decoration/arrows/up-invert.gif",dv="alias",dy="checkbox-checked-disabled",dx="decoration/arrows/right-invert.gif",dq="radiobutton-checked-disabled",dp="lead-item",ea="checkbox-focused",eb="border-dark",ec="decoration/treevirtual/end_plus.gif",ed="decoration/treevirtual/start_minus.gif",dV="radiobutton-checked-hovered",dW="decoration/window/minimize.gif",dX="checkbox-checked",dY="table-header-cell-hovered",dT="down.gif",dU="decoration/treevirtual/end.gif",Q="decoration/treevirtual/end_minus.gif",P="window-inactive-caption",O="decoration/menu/radiobutton-invert.gif",N="text-placeholder",M="slider",L="decoration/table/select-column-order.png",K="decoration/arrows/next.gif",J="table-header",I="decoration/treevirtual/only_minus.gif",H="datechooser-week-header",be="decoration/window/maximize.gif",bf="decoration/treevirtual/only_plus.gif",bc="checkbox-checked-pressed",bd="decoration/arrows/down-invert.gif",bi="menu-separator",bj="decoration/splitpane/knob-vertical.png",bg=".gif",bh="decoration/arrows/forward.gif",bk="radiobutton-checked-pressed",bl="table-statusbar",cQ="radiobutton-pressed",cN="copy",cS="table-row-background-selected",cR="radiobutton-focused",cD="decoration/splitpane/knob-horizontal.png",cC="right.gif",bw="radiobutton-checked",cE="decoration/treevirtual/cross.gif",bG="decoration/table/ascending.png",bF="decoration/treevirtual/line.gif",co="date-chooser-selected",cp="toolbar-part-handle",cq="decoration/window/close.gif",cr="icon/16/actions/view-refresh.png";
qx.Theme.define(bW,{appearances:{"widget":{},"label":{style:function(fs){return {textColor:fs.disabled?dC:undefined};
}},"image":{style:function(fu){return {opacity:!fu.replacement&&fu.disabled?0.3:undefined};
}},"atom":{},"atom/label":dJ,"atom/icon":cy,"root":{style:function(ep){return {backgroundColor:dG,textColor:ef,font:T};
}},"popup":{style:function(fN){return {decorator:df,backgroundColor:ce,shadow:dg};
}},"tooltip":{include:dL,style:function(gS){return {backgroundColor:cz,textColor:dr,decorator:cz,shadow:dg,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":dF,"tooltip-error":{include:cz,style:function(gp){return {textColor:dB,showTimeout:100,hideTimeout:10000,decorator:cd,font:dS,backgroundColor:cL};
}},"tooltip-error/atom":dF,"iframe":{style:function(l){return {backgroundColor:dh,decorator:dA};
}},"move-frame":{style:function(gK){return {decorator:df};
}},"resize-frame":bY,"dragdrop-cursor":{style:function(ge){var gf=ca;

if(ge.copy){gf=cN;
}else if(ge.move){gf=bU;
}else if(ge.alias){gf=dv;
}return {source:bq+gf+bg,position:en,offset:[2,16,2,6]};
}},"button-frame":{alias:dF,style:function(fp){if(fp.pressed||fp.abandoned||fp.checked){var fr=!fp.inner&&fp.focused?cA:dA;
var fq=[4,3,2,5];
}else{var fr=!fp.inner&&fp.focused?bz:dD;
var fq=[3,4];
}return {backgroundColor:fp.abandoned?dn:fp.hovered?dP:fp.checked?em:dI,decorator:fr,padding:fq};
}},"button":{alias:dO,include:dO,style:function(eE){return {center:true};
}},"hover-button":{alias:dF,include:dF,style:function(fB){return {backgroundColor:fB.hovered?ct:undefined,textColor:fB.hovered?dB:undefined};
}},"splitbutton":{},"splitbutton/button":dI,"splitbutton/arrow":{alias:dI,include:dI,style:function(gz){return {icon:cv};
}},"scrollarea/corner":{style:function(){return {backgroundColor:dG};
}},"scrollarea":dH,"scrollarea/pane":dH,"scrollarea/scrollbar-x":di,"scrollarea/scrollbar-y":di,"list":{alias:cP,style:function(gr){var gv;
var gt=!!gr.focused;
var gu=!!gr.invalid;
var gs=!!gr.disabled;

if(gu&&!gs){gv=dK;
}else if(gt&&!gu&&!gs){gv=bO;
}else if(gs){gv=dR;
}else{gv=dh;
}return {decorator:gr.focused?cA:dA,backgroundColor:gv};
}},"listitem":{alias:dF,style:function(b){return {gap:4,padding:b.lead?[2,4]:[3,5],backgroundColor:b.selected?ct:undefined,textColor:b.selected?dB:undefined,decorator:b.lead?dp:undefined};
}},"textfield":{style:function(fW){var gc;
var ga=!!fW.focused;
var gb=!!fW.invalid;
var fX=!!fW.disabled;

if(gb&&!fX){gc=dK;
}else if(ga&&!gb&&!fX){gc=bO;
}else if(fX){gc=dR;
}else{gc=V;
}var fY;

if(fW.disabled){fY=dC;
}else if(fW.showingPlaceholder){fY=N;
}else{fY=undefined;
}return {decorator:fW.focused?cA:dA,padding:[2,3],textColor:fY,backgroundColor:gc};
}},"textarea":dM,"checkbox":{alias:dF,style:function(gl){var gn;

if(gl.checked&&gl.focused){gn=cH;
}else if(gl.checked&&gl.disabled){gn=dy;
}else if(gl.checked&&gl.pressed){gn=bc;
}else if(gl.checked&&gl.hovered){gn=du;
}else if(gl.checked){gn=dX;
}else if(gl.disabled){gn=cV;
}else if(gl.focused){gn=ea;
}else if(gl.pressed){gn=cM;
}else if(gl.hovered){gn=by;
}else{gn=dQ;
}var gm=gl.invalid&&!gl.disabled?bt:bJ;
return {icon:bP+gn+gm+bN,gap:6};
}},"radiobutton":{alias:dQ,include:dQ,style:function(gi){var gk;

if(gi.checked&&gi.focused){gk=bV;
}else if(gi.checked&&gi.disabled){gk=dq;
}else if(gi.checked&&gi.pressed){gk=bk;
}else if(gi.checked&&gi.hovered){gk=dV;
}else if(gi.checked){gk=bw;
}else if(gi.disabled){gk=bB;
}else if(gi.focused){gk=cR;
}else if(gi.pressed){gk=cQ;
}else if(gi.hovered){gk=bo;
}else{gk=S;
}var gj=gi.invalid&&!gi.disabled?bt:bJ;
return {icon:bP+gk+gj+bN,shadow:undefined};
}},"spinner":{style:function(fm){return {decorator:fm.focused?cA:dA,textColor:fm.disabled?dC:undefined};
}},"spinner/textfield":{include:dM,style:function(eM){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:dI,include:dI,style:function(ft){return {icon:bT,padding:ft.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:ft.hovered?dP:dI};
}},"spinner/downbutton":{alias:dI,include:dI,style:function(eK){return {icon:ee,padding:eK.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:eK.hovered?dP:dI};
}},"datefield":U,"datefield/button":{alias:ba,include:ba,style:function(gO){return {icon:ci,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:bL,include:bL,style:function(o){return {decorator:o.focused?cA:dA};
}},"groupbox":{style:function(gW){return {backgroundColor:dG};
}},"groupbox/legend":{alias:dF,style:function(eF){return {backgroundColor:dG,textColor:eF.invalid?dj:undefined,paddingRight:4,paddingLeft:4,marginRight:10,marginLeft:10};
}},"groupbox/frame":{style:function(s){return {padding:[12,9],decorator:cF};
}},"check-groupbox":dz,"check-groupbox/legend":{alias:dQ,include:dQ,style:function(ew){return {backgroundColor:dG,textColor:ew.invalid?dj:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"radio-groupbox":dz,"radio-groupbox/legend":{alias:S,include:S,style:function(fy){return {backgroundColor:dG,textColor:fy.invalid?dj:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"toolbar":{style:function(fH){return {backgroundColor:dG};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(fD){return {decorator:cp,backgroundColor:dG,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(gQ){return {margin:[3,2],decorator:cG};
}},"toolbar-button":{alias:dF,style:function(fP){if(fP.pressed||fP.checked||fP.abandoned){var fR=dE;
var fQ=[3,2,1,4];
}else if(fP.hovered){var fR=W;
var fQ=[2,3];
}else{var fR=undefined;
var fQ=[3,4];
}return {cursor:T,decorator:fR,padding:fQ,backgroundColor:fP.abandoned?dn:fP.checked?dm:dI};
}},"toolbar-menubutton":{alias:dN,include:dN,style:function(r){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:cy,include:cy,style:function(eL){return {source:ee};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":dN,"toolbar-splitbutton/arrow":{alias:dN,include:dN,style:function(fv){return {icon:cv};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dI,include:dI,style:function(i){return {icon:i.vertical?cv:K};
}},"slidebar/button-backward":{alias:dI,include:dI,style:function(gJ){return {icon:gJ.vertical?eg:bs};
}},"tabview":{},"tabview/bar":{alias:bm,style:function(eN){var eO=0,eR=0,eP=0,eQ=0;

if(eN.barTop){eP=-2;
}else if(eN.barBottom){eO=-2;
}else if(eN.barRight){eQ=-2;
}else{eR=-2;
}return {marginBottom:eP,marginTop:eO,marginLeft:eQ,marginRight:eR};
}},"tabview/bar/button-forward":{include:ej,alias:ej,style:function(hb){if(hb.barTop||hb.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bM,alias:bM,style:function(eu){if(eu.barTop||eu.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(fl){return {backgroundColor:dG,decorator:dD,padding:10};
}},"tabview-page":dH,"tabview-page/button":{style:function(eW){var fg;
var fe=0,fc=0,eY=0,fb=0;

if(eW.barTop||eW.barBottom){var fa=2,eX=2,fd=6,ff=6;
}else{var fa=6,eX=6,fd=6,ff=6;
}
if(eW.barTop){fg=cW;
}else if(eW.barRight){fg=cY;
}else if(eW.barBottom){fg=cT;
}else{fg=cb;
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
}}}return {zIndex:eW.checked?10:5,decorator:fg,backgroundColor:dG,padding:[fa,ff,eX,fd],margin:[fe,fc,eY,fb]};
}},"tabview-page/button/label":dJ,"tabview-page/button/icon":cy,"tabview-page/button/close-button":{alias:dF,style:function(fO){return {icon:cg};
}},"scrollbar":{},"scrollbar/slider":{alias:M,style:function(fk){return {backgroundColor:dm};
}},"scrollbar/slider/knob":{include:dO,style:function(d){return {height:14,width:14,minHeight:d.horizontal?undefined:9,minWidth:d.horizontal?9:undefined};
}},"scrollbar/button":{alias:dI,include:dI,style:function(B){var C;

if(B.up||B.down){if(B.pressed||B.abandoned||B.checked){C=[5,2,3,4];
}else{C=[4,3];
}}else{if(B.pressed||B.abandoned||B.checked){C=[4,3,2,5];
}else{C=[3,4];
}}var D=dd;

if(B.left){D+=dt;
}else if(B.right){D+=cC;
}else if(B.up){D+=db;
}else{D+=dT;
}return {padding:C,icon:D};
}},"scrollbar/button-begin":Y,"scrollbar/button-end":Y,"slider":{style:function(gg){var gh;

if(gg.disabled){gh=dR;
}else if(gg.invalid){gh=dK;
}else if(gg.focused){gh=dm;
}else{gh=V;
}return {backgroundColor:gh,decorator:gg.focused?cA:dA};
}},"slider/knob":{include:dO,style:function(G){return {width:14,height:14,decorator:dD};
}},"tree-folder/open":{style:function(fL){return {source:fL.opened?bQ:bK};
}},"tree-folder":{style:function(fn){return {padding:[2,3,2,0],icon:fn.opened?bv:el};
}},"tree-folder/icon":{style:function(fT){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(gF){return {padding:[1,2],backgroundColor:gF.selected?ct:undefined,textColor:gF.selected?dB:undefined};
}},"tree-file":{include:ek,alias:ek,style:function(fw){return {icon:ei};
}},"tree":{include:cs,alias:cs,style:function(eV){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(fF){return {decorator:df};
}},"treevirtual-folder":{style:function(e){return {icon:(e.opened?bv:el)};
}},"treevirtual-file":{include:bS,alias:bS,style:function(t){return {icon:ei};
}},"treevirtual-line":{style:function(fC){return {icon:bF};
}},"treevirtual-contract":{style:function(gT){return {icon:bQ};
}},"treevirtual-expand":{style:function(fx){return {icon:bK};
}},"treevirtual-only-contract":{style:function(eD){return {icon:I};
}},"treevirtual-only-expand":{style:function(eA){return {icon:bf};
}},"treevirtual-start-contract":{style:function(eH){return {icon:ed};
}},"treevirtual-start-expand":{style:function(E){return {icon:br};
}},"treevirtual-end-contract":{style:function(eT){return {icon:Q};
}},"treevirtual-end-expand":{style:function(q){return {icon:ec};
}},"treevirtual-cross-contract":{style:function(ha){return {icon:bp};
}},"treevirtual-cross-expand":{style:function(fo){return {icon:cf};
}},"treevirtual-end":{style:function(fA){return {icon:dU};
}},"treevirtual-cross":{style:function(h){return {icon:cE};
}},"window":{style:function(fI){return {contentPadding:[10,10,10,10],backgroundColor:dG,decorator:fI.maximized?undefined:dD,shadow:fI.maximized?undefined:dg};
}},"window/pane":{},"window/captionbar":{style:function(fh){return {padding:1,backgroundColor:fh.active?cn:P,textColor:fh.active?cm:cO};
}},"window/icon":{style:function(fS){return {marginRight:4};
}},"window/title":{style:function(eI){return {cursor:T,font:dS,marginRight:20,alignY:cw};
}},"window/minimize-button":{include:dI,alias:dI,style:function(eo){return {icon:dW,padding:eo.pressed||eo.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:dI,alias:dI,style:function(eC){return {icon:cK,padding:eC.pressed||eC.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:dI,alias:dI,style:function(m){return {icon:be,padding:m.pressed||m.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:dI,alias:dI,style:function(gy){return {marginLeft:2,icon:cq,padding:gy.pressed||gy.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(gI){return {decorator:dE,padding:[2,6]};
}},"window/statusbar-text":dJ,"resizer":{style:function(a){return {decorator:dD};
}},"splitpane":{},"splitpane/splitter":{style:function(ev){return {backgroundColor:dG};
}},"splitpane/splitter/knob":{style:function(fU){return {source:fU.horizontal?cD:bj,padding:2};
}},"splitpane/slider":{style:function(A){return {backgroundColor:eb,opacity:0.3};
}},"selectbox":{include:dO,style:function(y){var z=dI;

if(y.invalid&&!y.disabled){z=dK;
}else if(y.abandoned){z=dn;
}else if(!y.abandoned&&y.hovered){z=dP;
}else if(!y.abandoned&&!y.hovered&&y.checked){z=em;
}return {backgroundColor:z};
}},"selectbox/atom":dF,"selectbox/popup":dL,"selectbox/list":cs,"selectbox/arrow":{style:function(gG){return {source:cv,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(fK){return {decorator:dD};
}},"datechooser/navigation-bar":{style:function(c){return {backgroundColor:de,textColor:c.disabled?dC:c.invalid?dj:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":cz,"datechooser/last-month-button-tooltip":cz,"datechooser/next-year-button-tooltip":cz,"datechooser/next-month-button-tooltip":cz,"datechooser/last-year-button":dk,"datechooser/last-month-button":dk,"datechooser/next-year-button":dk,"datechooser/next-month-button":dk,"datechooser/button/icon":{},"datechooser/button":{style:function(gw){var gx={width:17,show:cI};

if(gw.lastYear){gx.icon=bD;
}else if(gw.lastMonth){gx.icon=bs;
}else if(gw.nextYear){gx.icon=bh;
}else if(gw.nextMonth){gx.icon=eh;
}
if(gw.pressed||gw.checked||gw.abandoned){gx.decorator=dE;
}else if(gw.hovered){gx.decorator=W;
}else{gx.decorator=undefined;
}
if(gw.pressed||gw.checked||gw.abandoned){gx.padding=[2,0,0,2];
}else if(gw.hovered){gx.padding=1;
}else{gx.padding=2;
}return gx;
}},"datechooser/month-year-label":{style:function(hd){return {font:dS,textAlign:dl};
}},"datechooser/date-pane":{style:function(eU){return {decorator:bH,backgroundColor:de};
}},"datechooser/weekday":{style:function(gU){return {decorator:cj,font:dS,textAlign:dl,textColor:gU.disabled?dC:gU.weekend?R:de,backgroundColor:gU.weekend?de:R};
}},"datechooser/day":{style:function(gq){return {textAlign:dl,decorator:gq.today?df:undefined,textColor:gq.disabled?dC:gq.selected?dB:gq.otherMonth?dC:undefined,backgroundColor:gq.disabled?undefined:gq.selected?co:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(fG){return {textAlign:dl,textColor:R,padding:[2,4],decorator:fG.header?H:ch};
}},"combobox":{style:function(gX){var gY;

if(gX.disabled){gY=dR;
}else if(gX.invalid){gY=dK;
}else if(gX.focused){gY=dm;
}else{gY=V;
}return {decorator:gX.focused?cA:dA,textColor:gX.disabled?dC:undefined,backgroundColor:gY};
}},"combobox/button":{alias:dI,include:dI,style:function(gP){return {icon:cv,backgroundColor:gP.hovered?dP:dI};
}},"combobox/popup":dL,"combobox/list":cs,"combobox/textfield":{include:dM,style:function(eG){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(eq){var er={backgroundColor:dG,shadow:dg,decorator:dD,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:eq.submenu||eq.contextmenu?da:cX};

if(eq.submenu){er.position=en;
er.offset=[-2,-3];
}
if(eq.contextmenu){er.offset=4;
}return er;
}},"menu/slidebar":bI,"menu-slidebar":dH,"menu-slidebar-button":{style:function(fV){return {backgroundColor:fV.hovered?ct:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:X,style:function(gV){return {icon:gV.hovered?dw:eg};
}},"menu-slidebar/button-forward":{include:X,style:function(f){return {icon:f.hovered?bd:cv};
}},"menu-separator":{style:function(gB){return {height:0,decorator:bi,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:dF,style:function(gN){return {backgroundColor:gN.selected?ct:undefined,textColor:gN.selected?dB:undefined,padding:[2,6]};
}},"menu-button/icon":{include:cy,style:function(k){return {alignY:cw};
}},"menu-button/label":{include:dJ,style:function(eS){return {alignY:cw,padding:1};
}},"menu-button/shortcut":{include:dJ,style:function(gD){return {alignY:cw,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:cy,style:function(et){return {source:et.selected?dx:eh,alignY:cw};
}},"menu-checkbox":{alias:cx,include:cx,style:function(n){return {icon:!n.checked?undefined:n.selected?cJ:cc};
}},"menu-radiobutton":{alias:cx,include:cx,style:function(fj){return {icon:!fj.checked?undefined:fj.selected?O:dc};
}},"menubar":{style:function(ez){return {backgroundColor:dG,decorator:dD};
}},"menubar-button":{alias:dF,style:function(gL){return {padding:[2,6],backgroundColor:gL.pressed||gL.hovered?ct:undefined,textColor:gL.pressed||gL.hovered?dB:undefined};
}},"colorselector":dH,"colorselector/control-bar":dH,"colorselector/visual-pane":dz,"colorselector/control-pane":dH,"colorselector/preset-grid":dH,"colorselector/colorbucket":{style:function(ey){return {decorator:dE,width:16,height:16};
}},"colorselector/preset-field-set":dz,"colorselector/input-field-set":dz,"colorselector/preview-field-set":dz,"colorselector/hex-field-composite":dH,"colorselector/hex-field":dM,"colorselector/rgb-spinner-composite":dH,"colorselector/rgb-spinner-red":cu,"colorselector/rgb-spinner-green":cu,"colorselector/rgb-spinner-blue":cu,"colorselector/hsb-spinner-composite":dH,"colorselector/hsb-spinner-hue":cu,"colorselector/hsb-spinner-saturation":cu,"colorselector/hsb-spinner-brightness":cu,"colorselector/preview-content-old":{style:function(gE){return {decorator:dE,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(gC){return {decorator:dE,backgroundColor:dh,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(p){return {decorator:dE,margin:5};
}},"colorselector/brightness-field":{style:function(g){return {decorator:dE,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dH,"colorselector/hue-saturation-handle":dH,"colorselector/brightness-pane":dH,"colorselector/brightness-handle":dH,"table":dH,"table/statusbar":{style:function(hc){return {decorator:bl,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:dI,style:function(u){var w,v;

if(u.pressed||u.checked||u.abandoned){w=dE;
v=[3,2,1,4];
}else if(u.hovered){w=W;
v=[2,3];
}else{w=undefined;
v=[3,4];
}return {decorator:w,padding:v,backgroundColor:u.abandoned?dn:dI,icon:L};
}},"table-column-reset-button":{extend:cx,alias:cx,style:function(){return {icon:cr};
}},"table-scroller/scrollbar-x":di,"table-scroller/scrollbar-y":di,"table-scroller":dH,"table-scroller/header":{style:function(es){return {decorator:bC,backgroundColor:J};
}},"table-scroller/pane":{style:function(fE){return {backgroundColor:bA};
}},"table-scroller/focus-indicator":{style:function(eJ){return {decorator:bX};
}},"table-scroller/resize-line":{style:function(j){return {backgroundColor:ck,width:3};
}},"table-header-cell":{alias:dF,style:function(fJ){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:fJ.hovered?0:2,decorator:fJ.hovered?dY:bb,backgroundColor:fJ.hovered?cl:bb,sortIcon:fJ.sorted?(fJ.sortedAscending?bG:ds):undefined};
}},"table-header-cell/sort-icon":{style:function(fz){return {alignY:cw};
}},"table-editor-textfield":{include:dM,style:function(eB){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:bR,alias:bR,style:function(gH){return {padding:[0,2]};
}},"table-editor-combobox":{include:U,alias:U,style:function(go){return {decorator:undefined};
}},"colorpopup":{alias:dL,include:dL,style:function(fM){return {decorator:dD,padding:5,backgroundColor:dG};
}},"colorpopup/field":{style:function(ex){return {decorator:dE,margin:2,width:14,height:14,backgroundColor:dG};
}},"colorpopup/selector-button":dI,"colorpopup/auto-button":dI,"colorpopup/preview-pane":dz,"colorpopup/current-preview":{style:function(fi){return {height:20,padding:4,marginLeft:4,decorator:dE,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(gA){return {height:20,padding:4,marginRight:4,decorator:dE,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dI,include:dI,style:function(F){return {icon:bn};
}},"colorpopup/colorselector-cancelbutton":{alias:dI,include:dI,style:function(gd){return {icon:bx};
}},"virtual-list":cs,"virtual-list/row-layer":cU,"row-layer":dH,"column-layer":dH,"cell":{style:function(gR){return {backgroundColor:gR.selected?cS:bu,textColor:gR.selected?dB:ef,padding:[3,6]};
}},"cell-string":cB,"cell-number":{include:cB,style:function(gM){return {textAlign:bE};
}},"cell-image":cB,"cell-boolean":cB,"cell-atom":cB,"cell-date":cB,"cell-html":cB,"htmlarea":{"include":dH,style:function(x){return {backgroundColor:dh};
}}}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a},icons:{}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
})();
(function(){var p="emulated",o="native",n='"',m="qx.lang.Core",k="\\\\",j="\\\"",h="[object Error]";
qx.Bootstrap.define(m,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==h)?p:o,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?o:p,{"native":Array.prototype.indexOf,"emulated":function(a,b){if(b==null){b=0;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i<this.length;i++){if(this[i]===a){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?o:p,{"native":Array.prototype.lastIndexOf,"emulated":function(f,g){if(g==null){g=this.length-1;
}else if(g<0){g=Math.max(0,this.length+g);
}
for(var i=g;i>=0;i--){if(this[i]===f){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?o:p,{"native":Array.prototype.forEach,"emulated":function(q,r){var l=this.length;

for(var i=0;i<l;i++){var s=this[i];

if(s!==undefined){q.call(r||window,s,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?o:p,{"native":Array.prototype.filter,"emulated":function(w,x){var y=[];
var l=this.length;

for(var i=0;i<l;i++){var z=this[i];

if(z!==undefined){if(w.call(x||window,z,i,this)){y.push(this[i]);
}}}return y;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?o:p,{"native":Array.prototype.map,"emulated":function(A,B){var C=[];
var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){C[i]=A.call(B||window,D,i,this);
}}return C;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?o:p,{"native":Array.prototype.some,"emulated":function(t,u){var l=this.length;

for(var i=0;i<l;i++){var v=this[i];

if(v!==undefined){if(t.call(u||window,v,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?o:p,{"native":Array.prototype.every,"emulated":function(c,d){var l=this.length;

for(var i=0;i<l;i++){var e=this[i];

if(e!==undefined){if(!c.call(d||window,e,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?o:p,{"native":String.prototype.quote,"emulated":function(){return n+this.replace(/\\/g,k).replace(/\"/g,j)+n;
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
(function(){var r="indexOf",q="lastIndexOf",p="slice",o="concat",n="join",m="toLocaleUpperCase",k="shift",j="substr",h="filter",g="unshift",O="match",N="quote",M="qx.lang.Generics",L="localeCompare",K="sort",J="some",I="charAt",H="split",G="substring",F="pop",z="toUpperCase",A="replace",x="push",y="charCodeAt",v="every",w="reverse",t="search",u="forEach",B="map",C="toLowerCase",E="splice",D="toLocaleLowerCase";
qx.Bootstrap.define(M,{statics:{__cb:{"Array":[n,w,K,x,F,k,g,E,o,p,r,q,u,B,h,J,v],"String":[N,G,C,z,I,y,r,q,D,m,L,O,t,A,H,j,o,p]},__cc:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cd:function(){var a=qx.lang.Generics.__cb;

for(var e in a){var c=window[e];
var b=a[e];

for(var i=0,l=b.length;i<l;i++){var d=b[i];

if(!c[d]){c[d]=qx.lang.Generics.__cc(c,d);
}}}}},defer:function(f){f.__cd();
}});
})();
(function(){var e="qx.event.type.Data",d="qx.event.type.Event",c="qx.data.IListData";
qx.Interface.define(c,{events:{"change":e,"changeLength":d},members:{getItem:function(a){},setItem:function(f,g){},splice:function(h,i,j){},contains:function(b){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var g="qx.globalErrorHandling",f="on",e="qx.event.GlobalError";
qx.Bootstrap.define(e,{statics:{setErrorHandler:function(i,j){this.__iC=i||null;
this.__iD=j||window;

if(qx.core.Setting.get(g)===f){if(i&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__iE,this);
}
if(!i&&window.onerror){window.onerror=null;
}}},__iE:function(b,c,d){if(this.__iC){this.handleError(new qx.core.WindowError(b,c,d));
return true;
}},observeMethod:function(l){if(qx.core.Setting.get(g)===f){var self=this;
return function(){if(!self.__iC){return l.apply(this,arguments);
}
try{return l.apply(this,arguments);
}catch(h){self.handleError(h);
}};
}else{return l;
}},handleError:function(k){if(this.__iC){this.__iC.call(this.__iD,k);
}}},defer:function(a){qx.core.Setting.define(g,f);
a.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__dY=c;
this.__ea=d||b;
this.__eb=e===undefined?-1:e;
},members:{__dY:null,__ea:null,__eb:null,toString:function(){return this.__dY;
},getUri:function(){return this.__ea;
},getLineNumber:function(){return this.__eb;
}}});
})();
(function(){var h="qx.event.type.Event";
qx.Class.define(h,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(a,b){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!a;
this._cancelable=!!b;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(k){if(k){var l=k;
}else{var l=qx.event.Pool.getInstance().getObject(this.constructor);
}l._type=this._type;
l._target=this._target;
l._currentTarget=this._currentTarget;
l._relatedTarget=this._relatedTarget;
l._originalTarget=this._originalTarget;
l._stopPropagation=this._stopPropagation;
l._bubbles=this._bubbles;
l._preventDefault=this._preventDefault;
l._cancelable=this._cancelable;
return l;
},stop:function(){this.stopPropagation();
this.preventDefault();
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(f){this._type=f;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(c){this._eventPhase=c;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(g){this._target=g;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(m){this._currentTarget=m;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(d){this._relatedTarget=d;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(j){this._originalTarget=j;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(e){this._bubbles=e;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(i){this._cancelable=i;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__hS:null,__hT:null,init:function(d,e,f){arguments.callee.base.call(this,false,f);
this.__hS=d;
this.__hT=e;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c.__hS=this.__hS;
c.__hT=this.__hT;
return c;
},getData:function(){return this.__hS;
},getOldData:function(){return this.__hT;
}},destruct:function(){this.__hS=this.__hT=null;
}});
})();
(function(){var d="qx.event.IEventHandler";
qx.Interface.define(d,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(h,i){},registerEvent:function(a,b,c){},unregisterEvent:function(e,f,g){}}});
})();
(function(){var p="ready",o="qx.client",n="mshtml",m="load",l="unload",k="qx.event.handler.Application",j="complete",i="gecko|opera|webkit",h="left",g="DOMContentLoaded",f="shutdown";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(z){arguments.callee.base.call(this);
this._window=z.getWindow();
this.__gn=false;
this.__go=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__gp:false,onScriptLoaded:function(){this.__gp=true;
var u=qx.event.handler.Application.$$instance;

if(u){u.__gs();
}}},members:{canHandleEvent:function(a,b){},registerEvent:function(q,r,s){},unregisterEvent:function(w,x,y){},__gq:null,__gn:null,__go:null,__gr:null,__gs:function(){var v=qx.event.handler.Application;
if(!this.__gq&&this.__gn&&v.__gp){if(qx.core.Variant.isSet(o,n)){if(qx.event.Registration.hasListener(this._window,p)){this.__gq=true;
qx.event.Registration.fireEvent(this._window,p);
}}else{this.__gq=true;
qx.event.Registration.fireEvent(this._window,p);
}}},isApplicationReady:function(){return this.__gq;
},_initObserver:function(){if(qx.$$domReady||document.readyState==j){this.__gn=true;
this.__gs();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(o,i)){qx.bom.Event.addNativeListener(this._window,g,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(o,n)){var self=this;
var c=function(){try{document.documentElement.doScroll(h);

if(document.body){self._onNativeLoadWrapped();
}}catch(d){window.setTimeout(c,100);
}};
c();
}qx.bom.Event.addNativeListener(this._window,m,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,l,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,m,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,l,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gn=true;
this.__gs();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gr){this.__gr=true;

try{qx.event.Registration.fireEvent(this._window,f);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(t){qx.event.Registration.addHandler(t);
}});
})();
(function(){var A=":",z="qx.client",y="anonymous",x="...",w="qx.dev.StackTrace",v="",u="\n",t="/source/class/",s=".";
qx.Bootstrap.define(w,{statics:{getStackTrace:qx.core.Variant.select(z,{"gecko":function(){try{throw new Error();
}catch(B){var h=this.getStackTraceFromError(B);
qx.lang.Array.removeAt(h,0);
var f=this.getStackTraceFromCaller(arguments);
var d=f.length>h.length?f:h;

for(var i=0;i<Math.min(f.length,h.length);i++){var e=f[i];

if(e.indexOf(y)>=0){continue;
}var m=e.split(A);

if(m.length!=2){continue;
}var k=m[0];
var c=m[1];
var b=h[i];
var n=b.split(A);
var j=n[0];
var a=n[1];

if(qx.Class.getByName(j)){var g=j;
}else{g=k;
}var l=g+A;

if(c){l+=c+A;
}l+=a;
d[i]=l;
}return d;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var p;

try{p.bar();
}catch(r){var q=this.getStackTraceFromError(r);
qx.lang.Array.removeAt(q,0);
return q;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(z,{"opera":function(bc){return [];
},"default":function(D){var I=[];
var H=qx.lang.Function.getCaller(D);
var E={};

while(H){var F=qx.lang.Function.getName(H);
I.push(F);

try{H=H.caller;
}catch(o){break;
}
if(!H){break;
}var G=qx.core.ObjectRegistry.toHashCode(H);

if(E[G]){I.push(x);
break;
}E[G]=H;
}return I;
}}),getStackTraceFromError:qx.core.Variant.select(z,{"gecko":function(U){if(!U.stack){return [];
}var bb=/@(.+):(\d+)$/gm;
var V;
var W=[];

while((V=bb.exec(U.stack))!=null){var X=V[1];
var ba=V[2];
var Y=this.__iS(X);
W.push(Y+A+ba);
}return W;
},"webkit":function(C){if(C.sourceURL&&C.line){return [this.__iS(C.sourceURL)+A+C.line];
}else{return [];
}},"opera":function(N){if(N.message.indexOf("Backtrace:")<0){return [];
}var P=[];
var Q=qx.lang.String.trim(N.message.split("Backtrace:")[1]);
var R=Q.split(u);

for(var i=0;i<R.length;i++){var O=R[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(O&&O.length>=2){var T=O[1];
var S=this.__iS(O[2]);
P.push(S+A+T);
}}return P;
},"default":function(){return [];
}}),__iS:function(J){var M=t;
var K=J.indexOf(M);
var L=(K==-1)?J:J.substring(K+M.length).replace(/\//g,s).replace(/\.js$/,v);
return L;
}}});
})();
(function(){var e="qx.util.ObjectPool",d="Integer";
qx.Class.define(e,{extend:qx.core.Object,construct:function(j){arguments.callee.base.call(this);
this.__eG={};

if(j!=null){this.setSize(j);
}},properties:{size:{check:d,init:Infinity}},members:{__eG:null,getObject:function(k){if(this.$$disposed){return;
}
if(!k){throw new Error("Class needs to be defined!");
}var m=null;
var n=this.__eG[k.classname];

if(n){m=n.pop();
}
if(m){m.$$pooled=false;
}else{m=new k;
}return m;
},poolObject:function(f){if(!this.__eG){return;
}var g=f.classname;
var h=this.__eG[g];

if(f.$$pooled){throw new Error("Object is already pooled: "+f);
}
if(!h){this.__eG[g]=h=[];
}if(h.length>this.getSize()){if(f.destroy){f.destroy();
}else{f.dispose();
}return;
}f.$$pooled=true;
h.push(f);
}},destruct:function(){var c=this.__eG;
var a,b,i,l;

for(a in c){b=c[a];

for(i=0,l=b.length;i<l;i++){b[i].dispose();
}}delete this.__eG;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var g="Don't use 'disposeFields' - instead assign directly to 'null'",f="qx.util.DisposeUtil";
qx.Class.define(f,{statics:{disposeFields:function(p,q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
var name;

for(var i=0,l=q.length;i<l;i++){var name=q[i];

if(p[name]==null||!p.hasOwnProperty(name)){continue;
}p[name]=null;
}},disposeObjects:function(h,j){var name;

for(var i=0,l=j.length;i<l;i++){name=j[i];

if(h[name]==null||!h.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(h[name].dispose){h[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}h[name]=null;
}},disposeArray:function(b,c){var e=b[c];

if(!e){return;
}if(qx.core.ObjectRegistry.inShutDown){b[c]=null;
return;
}try{var d;

for(var i=e.length-1;i>=0;i--){d=e[i];

if(d){d.dispose();
}}}catch(k){throw new Error("The array field: "+c+" of object: "+b+" has non disposable entries: "+k);
}e.length=0;
b[c]=null;
},disposeMap:function(r,s){var t=r[s];

if(!t){return;
}if(qx.core.ObjectRegistry.inShutDown){r[s]=null;
return;
}try{for(var u in t){if(t.hasOwnProperty(u)){t[u].dispose();
}}}catch(a){throw new Error("The map field: "+s+" of object: "+r+" has non disposable entries: "+a);
}r[s]=null;
},disposeTriggeredBy:function(m,n){var o=n.dispose;
n.dispose=function(){o.call(n);
m.dispose();
};
}}});
})();
(function(){var c="qx.event.IEventDispatcher";
qx.Interface.define(c,{members:{canDispatchEvent:function(a,event,b){this.assertInstance(event,qx.event.type.Event);
this.assertString(b);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var h="qx.event.dispatch.Direct";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(j){this._manager=j;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(k,event,m){return !event.getBubbles();
},dispatchEvent:function(a,event,b){var e,c;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var f=this._manager.getListeners(a,b,false);

if(f){for(var i=0,l=f.length;i<l;i++){var d=f[i].context||a;
f[i].handler.call(d,event);
}}}},defer:function(g){qx.event.Registration.addDispatcher(g);
}});
})();
(function(){var cA="get",cz="",cy="[",cx="last",cw="change",cv="]",cu=".",ct="Number",cs="String",cr="set",cP="deepBinding",cO="item",cN="reset",cM="' (",cL="Boolean",cK=").",cJ=") to the object '",cI="Integer",cH="qx.data.SingleValueBinding",cG="No event could be found for the property",cE="PositiveNumber",cF="Binding from '",cC="PositiveInteger",cD="Binding does not exist!",cB="Date";
qx.Class.define(cH,{statics:{DEBUG_ON:false,__fa:{},bind:function(M,N,O,P,Q){var bb=this.__fc(M,N,O,P,Q);
var V=N.split(cu);
var S=this.__fj(V);
var ba=[];
var W=[];
var X=[];
var T=[];
var U=M;
for(var i=0;i<V.length;i++){if(S[i]!==cz){T.push(cw);
}else{T.push(this.__fe(U,V[i]));
}ba[i]=U;
if(i==V.length-1){if(S[i]!==cz){var be=S[i]===cx?U.length-1:S[i];
var R=U.getItem(be);
this.__fi(R,O,P,Q,M);
X[i]=this.__fk(U,T[i],O,P,Q,S[i]);
}else{if(V[i]!=null&&U[cA+qx.lang.String.firstUp(V[i])]!=null){var R=U[cA+qx.lang.String.firstUp(V[i])]();
this.__fi(R,O,P,Q,M);
}X[i]=this.__fk(U,T[i],O,P,Q);
}}else{var bc={index:i,propertyNames:V,sources:ba,listenerIds:X,arrayIndexValues:S,targetObject:O,targetPropertyChain:P,options:Q,listeners:W};
var Y=qx.lang.Function.bind(this.__fb,this,bc);
W.push(Y);
X[i]=U.addListener(T[i],Y);
}if(U[cA+qx.lang.String.firstUp(V[i])]==null){U=null;
}else if(S[i]!==cz){U=U[cA+qx.lang.String.firstUp(V[i])](S[i]);
}else{U=U[cA+qx.lang.String.firstUp(V[i])]();
}
if(!U){break;
}}var bd={type:cP,listenerIds:X,sources:ba,targetListenerIds:bb.listenerIds,targets:bb.targets};
this.__fl(bd,M,N,O,P);
return bd;
},__fb:function(bk){if(bk.options&&bk.options.onUpdate){bk.options.onUpdate(bk.sources[bk.index],bk.targetObject);
}for(var j=bk.index+1;j<bk.propertyNames.length;j++){var bo=bk.sources[j];
bk.sources[j]=null;

if(!bo){continue;
}bo.removeListenerById(bk.listenerIds[j]);
}var bo=bk.sources[bk.index];
for(var j=bk.index+1;j<bk.propertyNames.length;j++){if(bk.arrayIndexValues[j-1]!==cz){bo=bo[cA+qx.lang.String.firstUp(bk.propertyNames[j-1])](bk.arrayIndexValues[j-1]);
}else{bo=bo[cA+qx.lang.String.firstUp(bk.propertyNames[j-1])]();
}bk.sources[j]=bo;
if(!bo){this.__ff(bk.targetObject,bk.targetPropertyChain);
break;
}if(j==bk.propertyNames.length-1){if(qx.Class.implementsInterface(bo,qx.data.IListData)){var bp=bk.arrayIndexValues[j]===cx?bo.length-1:bk.arrayIndexValues[j];
var bm=bo.getItem(bp);
this.__fi(bm,bk.targetObject,bk.targetPropertyChain,bk.options,bk.sources[bk.index]);
bk.listenerIds[j]=this.__fk(bo,cw,bk.targetObject,bk.targetPropertyChain,bk.options,bk.arrayIndexValues[j]);
}else{if(bk.propertyNames[j]!=null&&bo[cA+qx.lang.String.firstUp(bk.propertyNames[j])]!=null){var bm=bo[cA+qx.lang.String.firstUp(bk.propertyNames[j])]();
this.__fi(bm,bk.targetObject,bk.targetPropertyChain,bk.options,bk.sources[bk.index]);
}var bn=this.__fe(bo,bk.propertyNames[j]);
bk.listenerIds[j]=this.__fk(bo,bn,bk.targetObject,bk.targetPropertyChain,bk.options);
}}else{if(bk.listeners[j]==null){var bl=qx.lang.Function.bind(this.__fb,this,bk);
bk.listeners.push(bl);
}if(qx.Class.implementsInterface(bo,qx.data.IListData)){var bn=cw;
}else{var bn=this.__fe(bo,bk.propertyNames[j]);
}bk.listenerIds[j]=bo.addListener(bn,bk.listeners[j]);
}}},__fc:function(bu,bv,bw,bx,by){var bC=bx.split(cu);
var bA=this.__fj(bC);
var bH=[];
var bG=[];
var bE=[];
var bD=[];
var bB=bw;
for(var i=0;i<bC.length-1;i++){if(bA[i]!==cz){bD.push(cw);
}else{try{bD.push(this.__fe(bB,bC[i]));
}catch(e){break;
}}bH[i]=bB;
var bF=function(){for(var j=i+1;j<bC.length-1;j++){var bL=bH[j];
bH[j]=null;

if(!bL){continue;
}bL.removeListenerById(bE[j]);
}var bL=bH[i];
for(var j=i+1;j<bC.length-1;j++){var bJ=qx.lang.String.firstUp(bC[j-1]);
if(bA[j-1]!==cz){var bM=bA[j-1]===cx?bL.getLength()-1:bA[j-1];
bL=bL[cA+bJ](bM);
}else{bL=bL[cA+bJ]();
}bH[j]=bL;
if(bG[j]==null){bG.push(bF);
}if(qx.Class.implementsInterface(bL,qx.data.IListData)){var bK=cw;
}else{try{var bK=qx.data.SingleValueBinding.__fe(bL,bC[j]);
}catch(e){break;
}}bE[j]=bL.addListener(bK,bG[j]);
}qx.data.SingleValueBinding.__fd(bu,bv,bw,bx);
};
bG.push(bF);
bE[i]=bB.addListener(bD[i],bF);
var bz=qx.lang.String.firstUp(bC[i]);
if(bB[cA+bz]==null){bB=null;
}else if(bA[i]!==cz){bB=bB[cA+bz](bA[i]);
}else{bB=bB[cA+bz]();
}
if(!bB){break;
}}return {listenerIds:bE,targets:bH};
},__fd:function(u,v,w,x){var B=this.__fh(u,v);

if(B!=null){var D=v.substring(v.lastIndexOf(cu)+1,v.length);
if(D.charAt(D.length-1)==cv){var y=D.substring(D.lastIndexOf(cy)+1,D.length-1);
var A=D.substring(0,D.lastIndexOf(cy));
var C=B[cA+qx.lang.String.firstUp(A)]();

if(y==cx){y=C.length-1;
}
if(C!=null){var z=C.getItem(y);
}}else{var z=B[cA+qx.lang.String.firstUp(D)]();
}}this.__fg(w,x,z);
},__fe:function(bN,bO){var bP=this.__fn(bN,bO);
if(bP==null){if(qx.Class.supportsEvent(bN.constructor,bO)){bP=bO;
}else if(qx.Class.supportsEvent(bN.constructor,cw+qx.lang.String.firstUp(bO))){bP=cw+qx.lang.String.firstUp(bO);
}else{throw new qx.core.AssertionError(cG,bO);
}}return bP;
},__ff:function(cj,ck){var cl=this.__fh(cj,ck);

if(cl!=null){var cm=ck.substring(ck.lastIndexOf(cu)+1,ck.length);
if(cm.charAt(cm.length-1)==cv){this.__fg(cj,ck,null);
return;
}if(cl[cN+qx.lang.String.firstUp(cm)]!=undefined){cl[cN+qx.lang.String.firstUp(cm)]();
}else{cl[cr+qx.lang.String.firstUp(cm)](null);
}}},__fg:function(cS,cT,cU){var cY=this.__fh(cS,cT);

if(cY!=null){var da=cT.substring(cT.lastIndexOf(cu)+1,cT.length);
if(da.charAt(da.length-1)==cv){var cV=da.substring(da.lastIndexOf(cy)+1,da.length-1);
var cX=da.substring(0,da.lastIndexOf(cy));
var cW=cY[cA+qx.lang.String.firstUp(cX)]();

if(cV==cx){cV=cW.length-1;
}
if(cW!=null){cW.setItem(cV,cU);
}}else{cY[cr+qx.lang.String.firstUp(da)](cU);
}}},__fh:function(o,p){var s=p.split(cu);
var t=o;
for(var i=0;i<s.length-1;i++){try{var r=s[i];
if(r.indexOf(cv)==r.length-1){var q=r.substring(r.indexOf(cy)+1,r.length-1);
r=r.substring(0,r.indexOf(cy));
}t=t[cA+qx.lang.String.firstUp(r)]();

if(q!=null){if(q==cx){q=t.length-1;
}t=t.getItem(q);
q=null;
}}catch(bI){return null;
}}return t;
},__fi:function(bf,bg,bh,bi,bj){bf=this.__fm(bf,bg,bh,bi);
if(bf==null){this.__ff(bg,bh);
}if(bf!=undefined){try{this.__fg(bg,bh,bf);
if(bi&&bi.onUpdate){bi.onUpdate(bj,bg,bf);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bi&&bi.onSetFail){bi.onSetFail(e);
}else{this.warn("Failed so set value "+bf+" on "+bg+". Error message: "+e);
}}}},__fj:function(bq){var br=[];
for(var i=0;i<bq.length;i++){var name=bq[i];
if(qx.lang.String.endsWith(name,cv)){var bs=name.substring(name.indexOf(cy)+1,name.indexOf(cv));
if(name.indexOf(cv)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bs!==cx){if(bs==cz||isNaN(parseInt(bs))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(cy)!=0){bq[i]=name.substring(0,name.indexOf(cy));
br[i]=cz;
br[i+1]=bs;
bq.splice(i+1,0,cO);
i++;
}else{br[i]=bs;
bq.splice(i,1,cO);
}}else{br[i]=cz;
}}return br;
},__fk:function(c,d,f,g,h,k){var l;
{};
var n=function(cf,e){if(cf!==cz){if(cf===cx){cf=c.length-1;
}var ci=c.getItem(cf);
if(ci==undefined){qx.data.SingleValueBinding.__ff(f,g);
}var cg=e.getData().start;
var ch=e.getData().end;

if(cf<cg||cf>ch){return;
}}else{var ci=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+c+" by "+d+" to "+f+" ("+g+")");
qx.log.Logger.debug("Data before conversion: "+ci);
}ci=qx.data.SingleValueBinding.__fm(ci,f,g,h);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+ci);
}try{if(ci!=undefined){qx.data.SingleValueBinding.__fg(f,g,ci);
}else{qx.data.SingleValueBinding.__ff(f,g);
}if(h&&h.onUpdate){h.onUpdate(c,f,ci);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(h&&h.onSetFail){h.onSetFail(e);
}else{this.warn("Failed so set value "+ci+" on "+f+". Error message: "+e);
}}};
if(!k){k=cz;
}n=qx.lang.Function.bind(n,c,k);
var m=c.addListener(d,n);
return m;
},__fl:function(E,F,G,H,I){if(this.__fa[F.toHashCode()]===undefined){this.__fa[F.toHashCode()]=[];
}this.__fa[F.toHashCode()].push([E,F,G,H,I]);
},__fm:function(bQ,bR,bS,bT){if(bT&&bT.converter){var bV;

if(bR.getModel){bV=bR.getModel();
}return bT.converter(bQ,bV);
}else{var bX=this.__fh(bR,bS);
var bY=bS.substring(bS.lastIndexOf(cu)+1,bS.length);
if(bX==null){return bQ;
}var bW=qx.Class.getPropertyDefinition(bX.constructor,bY);
var bU=bW==null?cz:bW.check;
return this.__fo(bQ,bU);
}},__fn:function(cc,cd){var ce=qx.Class.getPropertyDefinition(cc.constructor,cd);

if(ce==null){return null;
}return ce.event;
},__fo:function(db,dc){var dd=qx.lang.Type.getClass(db);
if((dd==ct||dd==cs)&&(dc==cI||dc==cC)){db=parseInt(db);
}if((dd==cL||dd==ct||dd==cB)&&dc==cs){db=db+cz;
}if((dd==ct||dd==cs)&&(dc==ct||dc==cE)){db=parseFloat(db);
}return db;
},removeBindingFromObject:function(J,K){if(K.type==cP){for(var i=0;i<K.sources.length;i++){if(K.sources[i]){K.sources[i].removeListenerById(K.listenerIds[i]);
}}for(var i=0;i<K.targets.length;i++){if(K.targets[i]){K.targets[i].removeListenerById(K.targetListenerIds[i]);
}}}else{J.removeListenerById(K);
}var L=this.__fa[J.toHashCode()];
if(L!=undefined){for(var i=0;i<L.length;i++){if(L[i][0]==K){qx.lang.Array.remove(L,L[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(a){{};
var b=this.__fa[a.toHashCode()];

if(b!=undefined){for(var i=b.length-1;i>=0;i--){this.removeBindingFromObject(a,b[i][0]);
}}},getAllBindingsForObject:function(bt){if(this.__fa[bt.toHashCode()]===undefined){this.__fa[bt.toHashCode()]=[];
}return this.__fa[bt.toHashCode()];
},removeAllBindings:function(){for(var cR in this.__fa){var cQ=qx.core.ObjectRegistry.fromHashCode(cR);
if(cQ==null){delete this.__fa[cR];
continue;
}this.removeAllBindingsForObject(cQ);
}this.__fa={};
},getAllBindings:function(){return this.__fa;
},showBindingInLog:function(cn,co){var cq;
for(var i=0;i<this.__fa[cn.toHashCode()].length;i++){if(this.__fa[cn.toHashCode()][i][0]==co){cq=this.__fa[cn.toHashCode()][i];
break;
}}
if(cq===undefined){var cp=cD;
}else{var cp=cF+cq[1]+cM+cq[2]+cJ+cq[3]+cM+cq[4]+cK;
}qx.log.Logger.debug(cp);
},showAllBindingsInLog:function(){for(var cb in this.__fa){var ca=qx.core.ObjectRegistry.fromHashCode(cb);

for(var i=0;i<this.__fa[cb].length;i++){this.showBindingInLog(ca,this.__fa[cb][i][0]);
}}}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bX=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bX:null,message:null,getComment:function(){return this.__bX;
},toString:function(){return this.__bX+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__jM=qx.dev.StackTrace.getStackTrace();
},members:{__jM:null,getStackTrace:function(){return this.__jM;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var g="qx.event.handler.Object";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(a,b){return qx.Class.supportsEvent(a.constructor,b);
},registerEvent:function(h,i,j){},unregisterEvent:function(d,e,f){}},defer:function(c){qx.event.Registration.addHandler(c);
}});
})();
(function(){var c="qx.util.ValueManager",b="abstract";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(f){return this._dynamic[f];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];
}return e;
},_setDynamic:function(a){this._dynamic=a;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var n="/",m="0",l="qx/static",k="http://",j="https://",i="file://",h="qx.util.AliasManager",g="singleton",f=".",e="static";
qx.Class.define(h,{type:g,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__fA={};
this.add(e,l);
},members:{__fA:null,_preprocess:function(a){var d=this._getDynamic();

if(d[a]===false){return a;
}else if(d[a]===undefined){if(a.charAt(0)===n||a.charAt(0)===f||a.indexOf(k)===0||a.indexOf(j)===m||a.indexOf(i)===0){d[a]=false;
return a;
}
if(this.__fA[a]){return this.__fA[a];
}var c=a.substring(0,a.indexOf(n));
var b=this.__fA[c];

if(b!==undefined){d[a]=b+a.substring(c.length);
}}return a;
},add:function(r,s){this.__fA[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(n))===r){u[t]=s+t.substring(r.length);
}}},remove:function(o){delete this.__fA[o];
},resolve:function(p){var q=this._getDynamic();

if(p!==null){p=this._preprocess(p);
}return q[p]||p;
}},destruct:function(){this.__fA=null;
}});
})();
(function(){var y="px",x="qx.client",w="div",v="img",u="",t="scale-x",s="mshtml",r="no-repeat",q="scale",p="scale-y",S="qx/icon",R="repeat",Q=".png",P="crop",O="webkit",N="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",M='<div style="',L="repeat-y",K='<img src="',J="qx.bom.element.Decoration",F="', sizingMethod='",G="png",D="')",E='"/>',B='" style="',C="none",z=" ",A="repeat-x",H='"></div>',I="absolute";
qx.Class.define(J,{statics:{DEBUG:false,__iT:{},__iU:qx.core.Variant.isSet(x,s),__iV:qx.core.Variant.select(x,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__iW:{"scale-x":v,"scale-y":v,"scale":v,"repeat":w,"no-repeat":w,"repeat-x":w,"repeat-y":w},update:function(bQ,bR,bS,bT){var bV=this.getTagName(bS,bR);

if(bV!=bQ.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bW=this.getAttributes(bR,bS,bT);

if(bV===v){bQ.src=bW.src;
}if(bQ.style.backgroundPosition!=u&&bW.style.backgroundPosition===undefined){bW.style.backgroundPosition=null;
}if(bQ.style.clip!=u&&bW.style.clip===undefined){bW.style.clip=null;
}var bU=qx.bom.element.Style;
bU.setStyles(bQ,bW.style);
},create:function(T,U,V){var W=this.getTagName(U,T);
var Y=this.getAttributes(T,U,V);
var X=qx.bom.element.Style.compile(Y.style);

if(W===v){return K+Y.src+B+X+E;
}else{return M+X+H;
}},getTagName:function(ba,bb){if(qx.core.Variant.isSet(x,s)){if(bb&&this.__iU&&this.__iV[ba]&&qx.lang.String.endsWith(bb,Q)){return w;
}}return this.__iW[ba];
},getAttributes:function(bn,bo,bp){if(!bp){bp={};
}
if(!bp.position){bp.position=I;
}
if(qx.core.Variant.isSet(x,s)){bp.fontSize=0;
bp.lineHeight=0;
}else if(qx.core.Variant.isSet(x,O)){bp.WebkitUserDrag=C;
}var br=qx.util.ResourceManager.getInstance().getImageFormat(bn)||qx.io.ImageLoader.getFormat(bn);
{};
var bq;
if(this.__iU&&this.__iV[bo]&&br===G){bq=this.__ja(bp,bo,bn);
}else{if(bo===q){bq=this.__jb(bp,bo,bn);
}else if(bo===t||bo===p){bq=this.__jc(bp,bo,bn);
}else{bq=this.__jf(bp,bo,bn);
}}return bq;
},__iX:function(bs,bt,bu){if(bs.width==null&&bt!=null){bs.width=bt+y;
}
if(bs.height==null&&bu!=null){bs.height=bu+y;
}return bs;
},__iY:function(a){var b=qx.util.ResourceManager.getInstance().getImageWidth(a)||qx.io.ImageLoader.getWidth(a);
var c=qx.util.ResourceManager.getInstance().getImageHeight(a)||qx.io.ImageLoader.getHeight(a);
return {width:b,height:c};
},__ja:function(bv,bw,bx){var bA=this.__iY(bx);
bv=this.__iX(bv,bA.width,bA.height);
var bz=bw==r?P:q;
var by=N+qx.util.ResourceManager.getInstance().toUri(bx)+F+bz+D;
bv.filter=by;
bv.backgroundImage=bv.backgroundRepeat=u;
return {style:bv};
},__jb:function(bi,bj,bk){var bl=qx.util.ResourceManager.getInstance().toUri(bk);
var bm=this.__iY(bk);
bi=this.__iX(bi,bm.width,bm.height);
return {src:bl,style:bi};
},__jc:function(d,e,f){var j=qx.util.ResourceManager.getInstance();
var i=j.isClippedImage(f);
var k=this.__iY(f);

if(i){var h=j.getData(f);
var g=j.toUri(h[4]);

if(e===t){d=this.__jd(d,h,k.height);
}else{d=this.__je(d,h,k.width);
}return {src:g,style:d};
}else{{};

if(e==t){d.height=k.height==null?null:k.height+y;
}else if(e==p){d.width=k.width==null?null:k.width+y;
}var g=j.toUri(f);
return {src:g,style:d};
}},__jd:function(l,m,n){var o=qx.util.ResourceManager.getInstance().getImageHeight(m[4]);
l.clip={top:-m[6],height:n};
l.height=o+y;
if(l.top!=null){l.top=(parseInt(l.top,10)+m[6])+y;
}else if(l.bottom!=null){l.bottom=(parseInt(l.bottom,10)+n-o-m[6])+y;
}return l;
},__je:function(bd,be,bf){var bh=qx.util.ResourceManager.getInstance().getImageWidth(be[4]);
bd.clip={left:-be[5],width:bf};
bd.width=bh+y;
if(bd.left!=null){bd.left=(parseInt(bd.left,10)+be[5])+y;
}else if(bd.right!=null){bd.right=(parseInt(bd.right,10)+bf-bh-be[5])+y;
}return bd;
},__jf:function(bI,bJ,bK){var bP=qx.util.ResourceManager.getInstance().isClippedImage(bK);
var bO=this.__iY(bK);
if(bP&&bJ!==R){var bN=qx.util.ResourceManager.getInstance().getData(bK);
var bM=qx.bom.element.Background.getStyles(bN[4],bJ,bN[5],bN[6]);

for(var bL in bM){bI[bL]=bM[bL];
}
if(bO.width!=null&&bI.width==null&&(bJ==L||bJ===r)){bI.width=bO.width+y;
}
if(bO.height!=null&&bI.height==null&&(bJ==A||bJ===r)){bI.height=bO.height+y;
}return {style:bI};
}else{{};
bI=this.__iX(bI,bO.width,bO.height);
bI=this.__jg(bI,bK,bJ);
return {style:bI};
}},__jg:function(bB,bC,bD){var top=null;
var bH=null;

if(bB.backgroundPosition){var bE=bB.backgroundPosition.split(z);
bH=parseInt(bE[0]);

if(isNaN(bH)){bH=bE[0];
}top=parseInt(bE[1]);

if(isNaN(top)){top=bE[1];
}}var bG=qx.bom.element.Background.getStyles(bC,bD,bH,top);

for(var bF in bG){bB[bF]=bG[bF];
}if(bB.filter){bB.filter=u;
}return bB;
},__jh:function(bc){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bc)&&bc.indexOf(S)==-1){if(!this.__iT[bc]){qx.log.Logger.debug("Potential clipped image candidate: "+bc);
this.__iT[bc]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(x,{"mshtml":function(){return qx.bom.element.Decoration.__iU;
},"default":function(){return false;
}})}});
})();
(function(){var B="auto",A="px",z=",",y="clip:auto;",x="rect(",w=");",v="",u=")",t="qx.bom.element.Clip",s="string",p="rect(auto)",r="clip:rect(",q="clip",o="rect(auto,auto,auto,auto)";
qx.Class.define(t,{statics:{compile:function(h){if(!h){return y;
}var m=h.left;
var top=h.top;
var l=h.width;
var k=h.height;
var i,j;

if(m==null){i=(l==null?B:l+A);
m=B;
}else{i=(l==null?B:m+l+A);
m=m+A;
}
if(top==null){j=(k==null?B:k+A);
top=B;
}else{j=(k==null?B:top+k+A);
top=top+A;
}return r+top+z+i+z+j+z+m+w;
},get:function(C,D){var F=qx.bom.element.Style.get(C,q,D,false);
var K,top,I,H;
var E,G;

if(typeof F===s&&F!==B&&F!==v){F=qx.lang.String.trim(F);
if(/\((.*)\)/.test(F)){var J=RegExp.$1.split(z);
top=qx.lang.String.trim(J[0]);
E=qx.lang.String.trim(J[1]);
G=qx.lang.String.trim(J[2]);
K=qx.lang.String.trim(J[3]);
if(K===B){K=null;
}
if(top===B){top=null;
}
if(E===B){E=null;
}
if(G===B){G=null;
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
},set:function(a,b){if(!b){a.style.clip=o;
return;
}var g=b.left;
var top=b.top;
var f=b.width;
var e=b.height;
var c,d;

if(g==null){c=(f==null?B:f+A);
g=B;
}else{c=(f==null?B:g+f+A);
g=g+A;
}
if(top==null){d=(e==null?B:e+A);
top=B;
}else{d=(e==null?B:top+e+A);
top=top+A;
}a.style.clip=x+top+z+c+z+d+z+g+u;
},reset:function(n){n.style.clip=qx.bom.client.Engine.MSHTML?p:B;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__dR:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(a){return g+(this.__dR[a]||a)+e;
},get:function(n,o){return qx.bom.element.Style.get(n,c,o,false);
},set:function(p,q){p.style.cursor=this.__dR[q]||q;
},reset:function(m){m.style.cursor=h;
}}});
})();
(function(){var w="",v="qx.client",u=";",t="filter",s="opacity:",r="opacity",q="MozOpacity",p=");",o=")",n="zoom:1;filter:alpha(opacity=",k="qx.bom.element.Opacity",m="alpha(opacity=",l="-moz-opacity:";
qx.Class.define(k,{statics:{compile:qx.core.Variant.select(v,{"mshtml":function(z){if(z>=1){return w;
}
if(z<0.00001){z=0;
}return n+(z*100)+p;
},"gecko":function(D){if(D==1){D=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return l+D+u;
}else{return s+D+u;
}},"default":function(j){if(j==1){return w;
}return s+j+u;
}}),set:qx.core.Variant.select(v,{"mshtml":function(I,J){var K=qx.bom.element.Style.get(I,t,qx.bom.element.Style.COMPUTED_MODE,false);
if(J>=1){I.style.filter=K.replace(/alpha\([^\)]*\)/gi,w);
return;
}
if(J<0.00001){J=0;
}if(!I.currentStyle||!I.currentStyle.hasLayout){I.style.zoom=1;
}I.style.filter=K.replace(/alpha\([^\)]*\)/gi,w)+m+J*100+o;
},"gecko":function(e,f){if(f==1){f=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){e.style.MozOpacity=f;
}else{e.style.opacity=f;
}},"default":function(x,y){if(y==1){y=w;
}x.style.opacity=y;
}}),reset:qx.core.Variant.select(v,{"mshtml":function(A){var B=qx.bom.element.Style.get(A,t,qx.bom.element.Style.COMPUTED_MODE,false);
A.style.filter=B.replace(/alpha\([^\)]*\)/gi,w);
},"gecko":function(E){if(qx.bom.client.Engine.VERSION<1.7){E.style.MozOpacity=w;
}else{E.style.opacity=w;
}},"default":function(C){C.style.opacity=w;
}}),get:qx.core.Variant.select(v,{"mshtml":function(a,b){var c=qx.bom.element.Style.get(a,t,b,false);

if(c){var d=c.match(/alpha\(opacity=(.*)\)/);

if(d&&d[1]){return parseFloat(d[1])/100;
}}return 1.0;
},"gecko":function(F,G){var H=qx.bom.element.Style.get(F,qx.bom.client.Engine.VERSION<1.7?q:r,G,false);

if(H==0.999999){H=1.0;
}
if(H!=null){return parseFloat(H);
}return 1.0;
},"default":function(g,h){var i=qx.bom.element.Style.get(g,r,h,false);

if(i!=null){return parseFloat(i);
}return 1.0;
}})}});
})();
(function(){var w="qx.client",v="",u="boxSizing",t="box-sizing",s=":",r="border-box",q="qx.bom.element.BoxSizing",p="KhtmlBoxSizing",o="-moz-box-sizing",n="WebkitBoxSizing",j=";",m="-khtml-box-sizing",k="content-box",h="-webkit-box-sizing",g="MozBoxSizing";
qx.Class.define(q,{statics:{__bT:qx.core.Variant.select(w,{"mshtml":null,"webkit":[u,p,n],"gecko":[g],"opera":[u]}),__bU:qx.core.Variant.select(w,{"mshtml":null,"webkit":[t,m,h],"gecko":[o],"opera":[t]}),__bV:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__bW:function(x){var y=this.__bV;
return y.tags[x.tagName.toLowerCase()]||y.types[x.type];
},compile:qx.core.Variant.select(w,{"mshtml":function(z){{};
},"default":function(a){var c=this.__bU;
var b=v;

if(c){for(var i=0,l=c.length;i<l;i++){b+=c[i]+s+a+j;
}}return b;
}}),get:qx.core.Variant.select(w,{"mshtml":function(D){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(D))){if(!this.__bW(D)){return k;
}}return r;
},"default":function(d){var f=this.__bT;
var e;

if(f){for(var i=0,l=f.length;i<l;i++){e=qx.bom.element.Style.get(d,f[i],null,false);

if(e!=null&&e!==v){return e;
}}}return v;
}}),set:qx.core.Variant.select(w,{"mshtml":function(A,B){{};
},"default":function(E,F){var G=this.__bT;

if(G){for(var i=0,l=G.length;i<l;i++){E.style[G[i]]=F;
}}}}),reset:function(C){this.set(C,v);
}}});
})();
(function(){var N="",M="qx.client",L="hidden",K="-moz-scrollbars-none",J="overflow",I=";",H="overflowY",G=":",F="overflowX",E="overflow:",ba="none",Y="scroll",X="borderLeftStyle",W="borderRightStyle",V="div",U="borderRightWidth",T="overflow-y",S="borderLeftWidth",R="-moz-scrollbars-vertical",Q="100px",O="qx.bom.element.Overflow",P="overflow-x";
qx.Class.define(O,{statics:{__iM:null,getScrollbarWidth:function(){if(this.__iM!==null){return this.__iM;
}var ca=qx.bom.element.Style;
var cc=function(e,f){return parseInt(ca.get(e,f))||0;
};
var cd=function(D){return (ca.get(D,W)==ba?0:cc(D,U));
};
var cb=function(bW){return (ca.get(bW,X)==ba?0:cc(bW,S));
};
var cf=qx.core.Variant.select(M,{"mshtml":function(bI){if(ca.get(bI,H)==L||bI.clientWidth==0){return cd(bI);
}return Math.max(0,bI.offsetWidth-bI.clientLeft-bI.clientWidth);
},"default":function(o){if(o.clientWidth==0){var p=ca.get(o,J);
var q=(p==Y||p==R?16:0);
return Math.max(0,cd(o)+q);
}return Math.max(0,(o.offsetWidth-o.clientWidth-cb(o)));
}});
var ce=function(x){return cf(x)-cd(x);
};
var t=document.createElement(V);
var s=t.style;
s.height=s.width=Q;
s.overflow=Y;
document.body.appendChild(t);
var c=ce(t);
this.__iM=c?c:16;
document.body.removeChild(t);
return this.__iM;
},_compile:qx.core.Variant.select(M,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bN,bO){if(bO==L){bO=K;
}return E+bO+I;
}:
function(bT,bU){return bT+G+bU+I;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bw,bx){return E+bx+I;
}:
function(bu,bv){return bu+G+bv+I;
},"default":function(bL,bM){return bL+G+bM+I;
}}),compileX:function(bH){return this._compile(P,bH);
},compileY:function(i){return this._compile(T,i);
},getX:qx.core.Variant.select(M,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bh,bi){var bj=qx.bom.element.Style.get(bh,J,bi,false);

if(bj===K){bj=L;
}return bj;
}:
function(bJ,bK){return qx.bom.element.Style.get(bJ,F,bK,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bA,bB){return qx.bom.element.Style.get(bA,J,bB,false);
}:
function(bR,bS){return qx.bom.element.Style.get(bR,F,bS,false);
},"default":function(by,bz){return qx.bom.element.Style.get(by,F,bz,false);
}}),setX:qx.core.Variant.select(M,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bD,bE){if(bE==L){bE=K;
}bD.style.overflow=bE;
}:
function(bb,bc){bb.style.overflowX=bc;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bP,bQ){bP.style.overflow=bQ;
}:
function(bs,bt){bs.style.overflowX=bt;
},"default":function(bo,bp){bo.style.overflowX=bp;
}}),resetX:qx.core.Variant.select(M,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bV){bV.style.overflow=N;
}:
function(bn){bn.style.overflowX=N;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(g,h){g.style.overflow=N;
}:
function(bf,bg){bf.style.overflowX=N;
},"default":function(bC){bC.style.overflowX=N;
}}),getY:qx.core.Variant.select(M,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(j,k){var l=qx.bom.element.Style.get(j,J,k,false);

if(l===K){l=L;
}return l;
}:
function(bF,bG){return qx.bom.element.Style.get(bF,H,bG,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(m,n){return qx.bom.element.Style.get(m,J,n,false);
}:
function(bq,br){return qx.bom.element.Style.get(bq,H,br,false);
},"default":function(bX,bY){return qx.bom.element.Style.get(bX,H,bY,false);
}}),setY:qx.core.Variant.select(M,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(v,w){if(w===L){w=K;
}v.style.overflow=w;
}:
function(a,b){a.style.overflowY=b;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(y,z){y.style.overflow=z;
}:
function(bk,bl){bk.style.overflowY=bl;
},"default":function(B,C){B.style.overflowY=C;
}}),resetY:qx.core.Variant.select(M,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(A){A.style.overflow=N;
}:
function(bm){bm.style.overflowY=N;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bd,be){bd.style.overflow=N;
}:
function(r,u){r.style.overflowY=N;
},"default":function(d){d.style.overflowY=N;
}})}});
})();
(function(){var P="",O="qx.client",N="user-select",M="userSelect",L="appearance",K="style",J="MozUserModify",I="px",H="-webkit-appearance",G="styleFloat",bm="-webkit-user-select",bl="-moz-appearance",bk="pixelHeight",bj="MozAppearance",bi=":",bh="pixelTop",bg="pixelLeft",bf="text-overflow",be="-moz-user-select",bd="MozUserSelect",W="qx.bom.element.Style",X="-moz-user-modify",U="-webkit-user-modify",V="WebkitUserSelect",S="-o-text-overflow",T="pixelRight",Q="cssFloat",R="pixelWidth",Y="pixelBottom",ba=";",bc="WebkitUserModify",bb="WebkitAppearance";
qx.Class.define(W,{statics:{__bK:{styleNames:{"float":qx.core.Variant.select(O,{"mshtml":G,"default":Q}),"appearance":qx.core.Variant.select(O,{"gecko":bj,"webkit":bb,"default":L}),"userSelect":qx.core.Variant.select(O,{"gecko":bd,"webkit":V,"default":M}),"userModify":qx.core.Variant.select(O,{"gecko":J,"webkit":bc,"default":M})},cssNames:{"appearance":qx.core.Variant.select(O,{"gecko":bl,"webkit":H,"default":L}),"userSelect":qx.core.Variant.select(O,{"gecko":be,"webkit":bm,"default":N}),"userModify":qx.core.Variant.select(O,{"gecko":X,"webkit":U,"default":N}),"textOverflow":qx.core.Variant.select(O,{"opera":S,"default":bf})},mshtmlPixel:{width:R,height:bk,left:bg,right:T,top:bh,bottom:Y},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__bL:{},compile:function(bq){var bu=[];
var by=this.__bK;
var bx=by.special;
var bv=by.cssNames;
var bt=this.__bL;
var bw=qx.lang.String;
var name,bs,br;

for(name in bq){br=bq[name];

if(br==null){continue;
}name=bv[name]||name;
if(bx[name]){bu.push(bx[name].compile(br));
}else{bs=bt[name];

if(!bs){bs=bt[name]=bw.hyphenate(name);
}bu.push(bs,bi,br,ba);
}}return bu.join(P);
},setCss:qx.core.Variant.select(O,{"mshtml":function(s,t){s.style.cssText=t;
},"default":function(bn,bo){bn.setAttribute(K,bo);
}}),getCss:qx.core.Variant.select(O,{"mshtml":function(bp){return bp.style.cssText.toLowerCase();
},"default":function(bz){return bz.getAttribute(K);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(a,name,b,c){{};
var d=this.__bK;
name=d.styleNames[name]||name;
if(c!==false&&d.special[name]){return d.special[name].set(a,b);
}else{a.style[name]=b!==null?b:P;
}},setStyles:function(u,v,w){{};
var C=this.__bK;
var z=C.styleNames;
var B=C.special;
var x=u.style;

for(var A in v){var y=v[A];
var name=z[A]||A;

if(y===undefined){if(w!==false&&B[name]){B[name].reset(u);
}else{x[name]=P;
}}else{if(w!==false&&B[name]){B[name].set(u,y);
}else{x[name]=y!==null?y:P;
}}}},reset:function(D,name,E){var F=this.__bK;
name=F.styleNames[name]||name;
if(E!==false&&F.special[name]){return F.special[name].reset(D);
}else{D.style[name]=P;
}},get:qx.core.Variant.select(O,{"mshtml":function(e,name,f,g){var l=this.__bK;
name=l.styleNames[name]||name;
if(g!==false&&l.special[name]){return l.special[name].get(e,f);
}if(!e.currentStyle){return e.style[name]||P;
}switch(f){case this.LOCAL_MODE:return e.style[name]||P;
case this.CASCADED_MODE:return e.currentStyle[name]||P;
default:var k=e.currentStyle[name]||P;
if(/^-?[\.\d]+(px)?$/i.test(k)){return k;
}var j=l.mshtmlPixel[name];

if(j){var h=e.style[name];
e.style[name]=k||0;
var i=e.style[j]+I;
e.style[name]=h;
return i;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(k)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return k;
}},"default":function(m,name,n,o){var r=this.__bK;
name=r.styleNames[name]||name;
if(o!==false&&r.special[name]){return r.special[name].get(m,n);
}switch(n){case this.LOCAL_MODE:return m.style[name]||P;
case this.CASCADED_MODE:if(m.currentStyle){return m.currentStyle[name]||P;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var p=qx.dom.Node.getDocument(m);
var q=p.defaultView.getComputedStyle(m,null);
return q?q[name]:P;
}}})}});
})();
(function(){var j="CSS1Compat",i="position:absolute;width:0;height:0;width:1",h="qx.bom.Document",g="1px",f="qx.client",e="div";
qx.Class.define(h,{statics:{isQuirksMode:qx.core.Variant.select(f,{"mshtml":function(k){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (k||window).document.compatMode!==j;
}},"webkit":function(p){if(document.compatMode===undefined){var q=(p||window).document.createElement(e);
q.style.cssText=i;
return q.style.width===g?true:false;
}else{return (p||window).document.compatMode!==j;
}},"default":function(l){return (l||window).document.compatMode!==j;
}}),isStandardMode:function(d){return !this.isQuirksMode(d);
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
(function(){var j="qx.client",i="qx.bom.Viewport";
qx.Class.define(i,{statics:{getWidth:qx.core.Variant.select(j,{"opera":function(s){if(qx.bom.client.Engine.VERSION<9.5){return (s||window).document.body.clientWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"webkit":function(c){if(qx.bom.client.Engine.VERSION<523.15){return (c||window).innerWidth;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;
}},"default":function(e){var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;
}}),getHeight:qx.core.Variant.select(j,{"opera":function(g){if(qx.bom.client.Engine.VERSION<9.5){return (g||window).document.body.clientHeight;
}else{var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientHeight:h.body.clientHeight;
}},"webkit":function(q){if(qx.bom.client.Engine.VERSION<523.15){return (q||window).innerHeight;
}else{var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientHeight:r.body.clientHeight;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientHeight:o.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(j,{"mshtml":function(l){var m=(l||window).document;
return m.documentElement.scrollLeft||m.body.scrollLeft;
},"default":function(p){return (p||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(j,{"mshtml":function(a){var b=(a||window).document;
return b.documentElement.scrollTop||b.body.scrollTop;
},"default":function(k){return (k||window).pageYOffset;
}})}});
})();
(function(){var c="CSS1Compat",b="qx.bom.client.Feature";
qx.Bootstrap.define(b,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__fB:function(){this.QUIRKS_MODE=this.__fC();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__fC:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==c;
}}},defer:function(a){a.__fB();
}});
})();
(function(){var l="/",k="mshtml",j="qx.client",i="",h="?",g="string",f="qx.util.ResourceManager",e="singleton",d="qx.isSource";
qx.Class.define(f,{extend:qx.core.Object,type:e,statics:{__bH:qx.$$resources||{},__bI:{}},members:{has:function(C){return !!arguments.callee.self.__bH[C];
},getData:function(c){return arguments.callee.self.__bH[c]||null;
},getImageWidth:function(q){var r=arguments.callee.self.__bH[q];
return r?r[0]:null;
},getImageHeight:function(o){var p=arguments.callee.self.__bH[o];
return p?p[1]:null;
},getImageFormat:function(a){var b=arguments.callee.self.__bH[a];
return b?b[2]:null;
},isClippedImage:function(m){var n=arguments.callee.self.__bH[m];
return n&&n.length>4;
},toUri:function(s){if(s==null){return s;
}var t=arguments.callee.self.__bH[s];

if(!t){return s;
}
if(typeof t===g){var v=t;
}else{var v=t[3];
if(!v){return s;
}}var u=i;

if(qx.core.Variant.isSet(j,k)&&qx.bom.client.Feature.SSL){u=arguments.callee.self.__bI[v];
}return u+qx.$$libraries[v].resourceUri+l+s;
}},defer:function(w){if(qx.core.Variant.isSet(j,k)){if(qx.bom.client.Feature.SSL){for(var A in qx.$$libraries){var y=qx.$$libraries[A].resourceUri;
if(y.match(/^\/\//)!=null){w.__bI[A]=window.location.protocol;
}else if(y.match(/^\.\//)!=null&&qx.core.Setting.get(d)){var x=document.URL;
w.__bI[A]=x.substring(0,x.lastIndexOf(l));
}else if(y.match(/^http/)!=null){}else{var B=window.location.href.indexOf(h);
var z;

if(B==-1){z=window.location.href;
}else{z=window.location.href.substring(0,B);
}w.__bI[A]=z.substring(0,z.lastIndexOf(l)+1);
}}}}}});
})();
(function(){var m="qx.client",k="load",j="qx.io.ImageLoader";
qx.Bootstrap.define(j,{statics:{__jy:{},__jz:{width:null,height:null},__jA:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(a){var b=this.__jy[a];
return !!(b&&b.loaded);
},isFailed:function(p){var q=this.__jy[p];
return !!(q&&q.failed);
},isLoading:function(r){var s=this.__jy[r];
return !!(s&&s.loading);
},getFormat:function(v){var w=this.__jy[v];
return w?w.format:null;
},getSize:function(F){var G=this.__jy[F];
return G?
{width:G.width,height:G.height}:this.__jz;
},getWidth:function(x){var y=this.__jy[x];
return y?y.width:null;
},getHeight:function(n){var o=this.__jy[n];
return o?o.height:null;
},load:function(z,A,B){var C=this.__jy[z];

if(!C){C=this.__jy[z]={};
}if(A&&!B){B=window;
}if(C.loaded||C.loading||C.failed){if(A){if(C.loading){C.callbacks.push(A,B);
}else{A.call(B,z,C);
}}}else{C.loading=true;
C.callbacks=[];

if(A){C.callbacks.push(A,B);
}var E=new Image();
var D=qx.lang.Function.listener(this.__jB,this,E,z);
E.onload=D;
E.onerror=D;
E.src=z;
}},__jB:qx.event.GlobalError.observeMethod(function(event,c,d){var e=this.__jy[d];
if(event.type===k){e.loaded=true;
e.width=this.__jC(c);
e.height=this.__jD(c);
var f=this.__jA.exec(d);

if(f!=null){e.format=f[1];
}}else{e.failed=true;
}c.onload=c.onerror=null;
var g=e.callbacks;
delete e.loading;
delete e.callbacks;
for(var i=0,l=g.length;i<l;i+=2){g[i].call(g[i+1],d,e);
}}),__jC:qx.core.Variant.select(m,{"gecko":function(t){return t.naturalWidth;
},"default":function(h){return h.width;
}}),__jD:qx.core.Variant.select(m,{"gecko":function(u){return u.naturalHeight;
},"default":function(H){return H.height;
}})}});
})();
(function(){var s="number",r="0",q="px",p=";",o="background-image:url(",n=");",m="",l=")",k="background-repeat:",j=" ",g="qx.bom.element.Background",i="url(",h="background-position:";
qx.Class.define(g,{statics:{__ce:[o,null,n,h,null,p,k,null,p],__cf:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cg:function(z,top){var A=qx.bom.client.Engine;

if(A.GECKO&&A.VERSION<1.9&&z==top&&typeof z==s){top+=0.01;
}
if(z){var B=(typeof z==s)?z+q:z;
}else{B=r;
}
if(top){var C=(typeof top==s)?top+q:top;
}else{C=r;
}return B+j+C;
},compile:function(D,E,F,top){var G=this.__cg(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I=this.__ce;
I[1]=H;
I[4]=G;
I[7]=E;
return I.join(m);
},getStyles:function(t,u,v,top){if(!t){return this.__cf;
}var w=this.__cg(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y={backgroundPosition:w,backgroundImage:i+x+l};

if(u!=null){y.backgroundRepeat=u;
}return y;
},set:function(a,b,c,d,top){var e=this.getStyles(b,c,d,top);

for(var f in e){a.style[f]=e[f];
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
(function(){var B=",",A="rgb(",z=")",y="qx.theme.manager.Color",x="qx.util.ColorUtil";
qx.Class.define(x,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(H){return this.NAMED[H]!==undefined;
},isSystemColor:function(bd){return this.SYSTEM[bd]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(y);
},isThemedColor:function(be){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(be);
},stringToRgb:function(W){if(this.supportsThemes()&&this.isThemedColor(W)){var W=qx.theme.manager.Color.getInstance().resolveDynamic(W);
}
if(this.isNamedColor(W)){return this.NAMED[W];
}else if(this.isSystemColor(W)){throw new Error("Could not convert system colors to RGB: "+W);
}else if(this.isRgbString(W)){return this.__fw();
}else if(this.isHex3String(W)){return this.__fy();
}else if(this.isHex6String(W)){return this.__fz();
}throw new Error("Could not parse color: "+W);
},cssStringToRgb:function(d){if(this.isNamedColor(d)){return this.NAMED[d];
}else if(this.isSystemColor(d)){throw new Error("Could not convert system colors to RGB: "+d);
}else if(this.isRgbString(d)){return this.__fw();
}else if(this.isRgbaString(d)){return this.__fx();
}else if(this.isHex3String(d)){return this.__fy();
}else if(this.isHex6String(d)){return this.__fz();
}throw new Error("Could not parse color: "+d);
},stringToRgbString:function(K){return this.rgbToRgbString(this.stringToRgb(K));
},rgbToRgbString:function(I){return A+I[0]+B+I[1]+B+I[2]+z;
},rgbToHexString:function(C){return (qx.lang.String.pad(C[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(C[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(C[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(V){return this.isThemedColor(V)||this.isNamedColor(V)||this.isHex3String(V)||this.isHex6String(V)||this.isRgbString(V);
},isCssString:function(U){return this.isSystemColor(U)||this.isNamedColor(U)||this.isHex3String(U)||this.isHex6String(U)||this.isRgbString(U);
},isHex3String:function(G){return this.REGEXP.hex3.test(G);
},isHex6String:function(J){return this.REGEXP.hex6.test(J);
},isRgbString:function(bf){return this.REGEXP.rgb.test(bf);
},isRgbaString:function(a){return this.REGEXP.rgba.test(a);
},__fw:function(){var N=parseInt(RegExp.$1,10);
var M=parseInt(RegExp.$2,10);
var L=parseInt(RegExp.$3,10);
return [N,M,L];
},__fx:function(){var F=parseInt(RegExp.$1,10);
var E=parseInt(RegExp.$2,10);
var D=parseInt(RegExp.$3,10);
return [F,E,D];
},__fy:function(){var ba=parseInt(RegExp.$1,16)*17;
var Y=parseInt(RegExp.$2,16)*17;
var X=parseInt(RegExp.$3,16)*17;
return [ba,Y,X];
},__fz:function(){var bi=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var bh=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var bg=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [bi,bh,bg];
},hex3StringToRgb:function(c){if(this.isHex3String(c)){return this.__fy(c);
}throw new Error("Invalid hex3 value: "+c);
},hex6StringToRgb:function(bc){if(this.isHex6String(bc)){return this.__fz(bc);
}throw new Error("Invalid hex6 value: "+bc);
},hexStringToRgb:function(bb){if(this.isHex3String(bb)){return this.__fy(bb);
}
if(this.isHex6String(bb)){return this.__fz(bb);
}throw new Error("Invalid hex value: "+bb);
},rgbToHsb:function(e){var j,k,m;
var w=e[0];
var s=e[1];
var h=e[2];
var v=(w>s)?w:s;

if(h>v){v=h;
}var l=(w<s)?w:s;

if(h<l){l=h;
}m=v/255.0;

if(v!=0){k=(v-l)/v;
}else{k=0;
}
if(k==0){j=0;
}else{var o=(v-w)/(v-l);
var u=(v-s)/(v-l);
var n=(v-h)/(v-l);

if(w==v){j=n-u;
}else if(s==v){j=2.0+o-n;
}else{j=4.0+u-o;
}j=j/6.0;

if(j<0){j=j+1.0;
}}return [Math.round(j*360),Math.round(k*100),Math.round(m*100)];
},hsbToRgb:function(O){var i,f,p,q,t;
var P=O[0]/360;
var Q=O[1]/100;
var R=O[2]/100;

if(P>=1.0){P%=1.0;
}
if(Q>1.0){Q=1.0;
}
if(R>1.0){R=1.0;
}var S=Math.floor(255*R);
var T={};

if(Q==0.0){T.red=T.green=T.blue=S;
}else{P*=6.0;
i=Math.floor(P);
f=P-i;
p=Math.floor(S*(1.0-Q));
q=Math.floor(S*(1.0-(Q*f)));
t=Math.floor(S*(1.0-(Q*(1.0-f))));

switch(i){case 0:T.red=S;
T.green=t;
T.blue=p;
break;
case 1:T.red=q;
T.green=S;
T.blue=p;
break;
case 2:T.red=p;
T.green=S;
T.blue=t;
break;
case 3:T.red=p;
T.green=q;
T.blue=S;
break;
case 4:T.red=t;
T.green=p;
T.blue=S;
break;
case 5:T.red=S;
T.green=p;
T.blue=q;
break;
}}return [T.red,T.green,T.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var j="qx.event.handler.Window";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){arguments.callee.base.call(this);
this._manager=o;
this._window=o.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(k,l){},registerEvent:function(a,b,c){},unregisterEvent:function(s,t,u){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var n=qx.event.handler.Window.SUPPORTED_TYPES;

for(var m in n){qx.bom.Event.addNativeListener(this._window,m,this._onNativeWrapper);
}},_stopWindowObserver:function(){var q=qx.event.handler.Window.SUPPORTED_TYPES;

for(var p in q){qx.bom.Event.removeNativeListener(this._window,p,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var f=this._window;

try{var i=f.document;
}catch(e){return ;
}var g=i.documentElement;
var d=e.target||e.srcElement;

if(d==null||d===f||d===i||d===g){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,f]);
qx.event.Registration.dispatchEvent(f,event);
var h=event.getReturnValue();

if(h!=null){e.returnValue=h;
return h;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(r){qx.event.Registration.addHandler(r);
}});
})();
(function(){var g="ready",f="qx.application",d="beforeunload",c="qx.core.Init",b="shutdown";
qx.Class.define(c,{statics:{getApplication:function(){return this.__iz||null;
},__iy:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Setting.get(f);
var j=qx.Class.getByName(i);

if(j){this.__iz=new j;
var h=new Date;
this.__iz.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__iz.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__iA:function(e){var l=this.__iz;

if(l){e.setReturnValue(l.close());
}},__iB:function(){var k=this.__iz;

if(k){k.terminate();
}}},defer:function(a){qx.event.Registration.addListener(window,g,a.__iy,a);
qx.event.Registration.addListener(window,b,a.__iB,a);
qx.event.Registration.addListener(window,d,a.__iA,a);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(i,j){var k=qx.locale.Manager;

if(k){return k.tr.apply(k,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(d,e,f,g){var h=qx.locale.Manager;

if(h){return h.trn.apply(h,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(l,m,n){var o=qx.locale.Manager;

if(o){return o.trc.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(b){var c=qx.locale.Manager;

if(c){return c.marktr.apply(c,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__kX:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__kX;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__kX=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__kX=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var c="demobrowser.demo.util.LayoutApplication",b="east",a="click";
qx.Class.define(c,{extend:qx.application.Standalone,members:{main:function(){arguments.callee.base.call(this);
var d=new qx.ui.container.Composite(new qx.ui.layout.Dock());
var f=new qx.ui.container.Composite(new qx.ui.layout.Canvas()).set({minHeight:10,minWidth:10});
var g=new demobrowser.demo.util.PropertyEditor(f);
f.addListener(a,this._onClickRoot,this);
d.add(g,{edge:b});
d.add(f);
this._root=f;
this._editor=g;
qx.application.Standalone.prototype.getRoot.call(this).add(d,{edge:0});
},getRoot:function(){return this._root;
},_onClickRoot:function(e){if(e.getTarget()!==this._root){this._editor.handleWidgetClick(e);
}}},destruct:function(){this._root=this._editor=null;
}});
})();
(function(){var d="main",c="green",b="yellow",a="demobrowser.demo.layout.VBox_Flex";
qx.Class.define(a,{extend:demobrowser.demo.util.LayoutApplication,members:{main:function(){arguments.callee.base.call(this);
var scroll=new qx.ui.container.Scroll();
this.getRoot().add(scroll,{edge:0});
var l=new qx.ui.container.Composite(new qx.ui.layout.HBox(20)).set({padding:20});
scroll.add(l);
l.add(this.getBox1());
l.add(this.getBox2());
l.add(this.getBox3());
l.add(this.getBox4());
l.add(this.getBox5());
l.add(this.getBox6());
},getBox1:function(){var f=new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({decorator:d,backgroundColor:b,height:300,allowGrowY:false});
f.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c}),{flex:1});
f.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c}),{flex:2});
f.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c}),{flex:3});
return f;
},getBox2:function(){var g=new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({decorator:d,backgroundColor:b,height:300,allowGrowY:false});
g.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c,maxHeight:30}),{flex:1});
g.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c}),{flex:2});
g.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c,maxHeight:100}),{flex:3});
return g;
},getBox3:function(){var e=new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({decorator:d,backgroundColor:b,height:300,allowGrowY:false});

for(var i=0;i<25;i++){e.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c,height:5}),{flex:1});
}return e;
},getBox4:function(){var h=new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({decorator:d,backgroundColor:b,height:300,minHeight:300,allowGrowY:false});
h.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c,maxHeight:60}),{flex:1});
h.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c,maxHeight:60}),{flex:2});
h.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c,maxHeight:60}),{flex:3});
return h;
},getBox5:function(){var k=new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({height:150,minHeight:0,decorator:d,backgroundColor:b,allowGrowY:false});
k.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c,minHeight:60}),{flex:1});
k.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c,minHeight:60}),{flex:2});
k.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c,minHeight:60}),{flex:3});
return k;
},getBox6:function(){var j=new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({height:150,decorator:d,backgroundColor:b,allowGrowY:false});
j.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c,minHeight:60}),{flex:1});
j.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c,minHeight:60}),{flex:2});
j.add(new qx.ui.core.Widget().set({decorator:d,backgroundColor:c,minHeight:60}),{flex:3});
return j;
}}});
})();
(function(){var f="qx.event.type.Native";
qx.Class.define(f,{extend:qx.event.type.Event,members:{init:function(h,i,j,k,l){arguments.callee.base.call(this,k,l);
this._target=i||qx.bom.Event.getTarget(h);
this._relatedTarget=j||qx.bom.Event.getRelatedTarget(h);

if(h.timeStamp){this._timeStamp=h.timeStamp;
}this._native=h;
this._returnValue=null;
return this;
},clone:function(c){var d=arguments.callee.base.call(this,c);
var e={};
d._native=this._cloneNativeEvent(this._native,e);
d._returnValue=this._returnValue;
return d;
},_cloneNativeEvent:function(a,b){b.preventDefault=qx.lang.Function.empty;
return b;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(g){this._returnValue=g;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Bootstrap.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__iK:function(){var o=navigator.platform;
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
}}},defer:function(n){n.__iK();
}});
})();
(function(){var k="win98",j="osx2",i="osx0",h="osx4",g="win95",f="win2000",e="osx1",d="osx5",c="osx3",b="Windows NT 5.01",I=")",H="winxp",G="freebsd",F="sunos",E="SV1",D="|",C="nintendods",B="winnt4",A="wince",z="winme",r="os9",s="\.",p="osx",q="linux",n="netbsd",o="winvista",l="openbsd",m="(",t="win2003",u="symbian",w="win7",v="g",y="qx.bom.client.System",x=" Mobile/";
qx.Bootstrap.define(y,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__jE:{"Windows NT 6.1":w,"Windows NT 6.0":o,"Windows NT 5.2":t,"Windows NT 5.1":H,"Windows NT 5.0":f,"Windows 2000":f,"Windows NT 4.0":B,"Win 9x 4.90":z,"Windows CE":A,"Windows 98":k,"Win98":k,"Windows 95":g,"Win95":g,"Linux":q,"FreeBSD":G,"NetBSD":n,"OpenBSD":l,"SunOS":F,"Symbian System":u,"Nitro":C,"PSP":"sonypsp","Mac OS X 10_5":d,"Mac OS X 10.5":d,"Mac OS X 10_4":h,"Mac OS X 10.4":h,"Mac OS X 10_3":c,"Mac OS X 10.3":c,"Mac OS X 10_2":j,"Mac OS X 10.2":j,"Mac OS X 10_1":e,"Mac OS X 10.1":e,"Mac OS X 10_0":i,"Mac OS X 10.0":i,"Mac OS X":p,"Mac OS 9":r},__jF:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__jE){K.push(J);
}var M=new RegExp(m+K.join(D).replace(/\./g,s)+I,v);

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
if(qx.bom.client.Engine.WEBKIT&&RegExp(x).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__jE[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(b)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(E)!==-1){this.SP2=true;
}}}}},defer:function(a){a.__jF();
}});
})();
(function(){var i="_applyTheme",h="qx.theme",g="qx.theme.manager.Meta",f="qx.theme.Modern",e="Theme",d="singleton";
qx.Class.define(g,{type:d,extend:qx.core.Object,properties:{theme:{check:e,nullable:true,apply:i}},members:{_applyTheme:function(j,k){var n=null;
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
},initialize:function(){var b=qx.core.Setting;
var a,c;
a=b.get(h);

if(a){c=qx.Theme.getByName(a);

if(!c){throw new Error("The theme to use is not available: "+a);
}this.setTheme(c);
}}},settings:{"qx.theme":f}});
})();
(function(){var i="object",h="_applyTheme",g="__bJ",f="qx.theme.manager.Decoration",e="Theme",d="string",c="singleton";
qx.Class.define(f,{type:c,extend:qx.core.Object,properties:{theme:{check:e,nullable:true,apply:h}},members:{__bJ:null,resolve:function(j){if(!j){return null;
}
if(typeof j===i){return j;
}var m=this.getTheme();

if(!m){return null;
}var m=this.getTheme();

if(!m){return null;
}var n=this.__bJ;

if(!n){n=this.__bJ={};
}var k=n[j];

if(k){return k;
}var l=m.decorations[j];

if(!l){return null;
}var o=l.decorator;

if(o==null){throw new Error("Missing definition of which decorator to use in entry: "+j+"!");
}return n[j]=(new o).set(l.style);
},isValidPropertyValue:function(p){if(typeof p===d){return this.isDynamic(p);
}else if(typeof p===i){var q=p.constructor;
return qx.Class.hasInterface(q,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(a){if(!a){return false;
}var b=this.getTheme();

if(!b){return false;
}return !!b.decorations[a];
},_applyTheme:function(r,s){var u=qx.util.AliasManager.getInstance();

if(s){for(var t in s.aliases){u.remove(t);
}}
if(r){for(var t in r.aliases){u.add(t,r.aliases[t]);
}}
if(!r){this.__bJ={};
}}},destruct:function(){this._disposeMap(g);
}});
})();
(function(){var s="qx.theme.manager.Font",r="Theme",q="changeTheme",p="_applyTheme",o="singleton";
qx.Class.define(s,{type:o,extend:qx.util.ValueManager,properties:{theme:{check:r,nullable:true,apply:p,event:q}},members:{resolveDynamic:function(f){var g=this._dynamic;
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
},_applyTheme:function(a){var b=this._getDynamic();

for(var e in b){if(b[e].themed){b[e].dispose();
delete b[e];
}}
if(a){var c=a.fonts;
var d=qx.bom.Font;

for(var e in c){b[e]=(new d).set(c[e]);
b[e].themed=true;
}}this._setDynamic(b);
}}});
})();
(function(){var n="",m="underline",k="Boolean",j="px",h='"',g="italic",f="normal",e="bold",d="_applyItalic",c="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="overline",u="line-through",t="qx.bom.Font",s="Number",r="_applyDecoration",q=" ",o="_applySize",p=",";
qx.Class.define(t,{extend:qx.core.Object,construct:function(E,F){arguments.callee.base.call(this);

if(E!==undefined){this.setSize(E);
}
if(F!==undefined){this.setFamily(F);
}},statics:{fromString:function(P){var T=new qx.bom.Font();
var R=P.split(/\s+/);
var name=[];
var S;

for(var i=0;i<R.length;i++){switch(S=R[i]){case e:T.setBold(true);
break;
case g:T.setItalic(true);
break;
case m:T.setDecoration(m);
break;
default:var Q=parseInt(S,10);

if(Q==S||qx.lang.String.contains(S,j)){T.setSize(Q);
}else{name.push(S);
}break;
}}
if(name.length>0){T.setFamily(name);
}return T;
},fromConfig:function(A){var B=new qx.bom.Font;
B.set(A);
return B;
},__bM:{fontFamily:n,fontSize:n,fontWeight:n,fontStyle:n,textDecoration:n,lineHeight:1.2},getDefaultStyles:function(){return this.__bM;
}},properties:{size:{check:z,nullable:true,apply:o},lineHeight:{check:s,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:k,nullable:true,apply:c},italic:{check:k,nullable:true,apply:d},decoration:{check:[m,u,v],nullable:true,apply:r}},members:{__bN:null,__bO:null,__bP:null,__bQ:null,__bR:null,__bS:null,_applySize:function(C,D){this.__bN=C===null?null:C+j;
},_applyLineHeight:function(a,b){this.__bS=a===null?null:a;
},_applyFamily:function(I,J){var K=n;

for(var i=0,l=I.length;i<l;i++){if(I[i].indexOf(q)>0){K+=h+I[i]+h;
}else{K+=I[i];
}
if(i!==l-1){K+=p;
}}this.__bO=K;
},_applyBold:function(N,O){this.__bP=N===null?null:N?e:f;
},_applyItalic:function(L,M){this.__bQ=L===null?null:L?g:f;
},_applyDecoration:function(G,H){this.__bR=G===null?null:G;
},getStyles:function(){return {fontFamily:this.__bO,fontSize:this.__bN,fontWeight:this.__bP,fontStyle:this.__bQ,textDecoration:this.__bR,lineHeight:this.__bS};
}}});
})();
(function(){var d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(e,f){var h=qx.util.AliasManager.getInstance();

if(f){for(var g in f.aliases){h.remove(g);
}}
if(e){for(var g in e.aliases){h.add(g,e.aliases[g]);
}}}}});
})();
(function(){var J="string",I="_applyTheme",H="qx.theme.manager.Appearance",G=":",F="Theme",E="changeTheme",D="/",C="singleton";
qx.Class.define(H,{type:C,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__cQ={};
this.__cR={};
},properties:{theme:{check:F,nullable:true,event:E,apply:I}},members:{__cS:{},__cQ:null,__cR:null,_applyTheme:function(K,L){this.__cR={};
this.__cQ={};
},__cT:function(r,s,t){var x=s.appearances;
var A=x[r];

if(!A){var B=D;
var u=[];
var z=r.split(B);
var y;

while(!A&&z.length>0){u.unshift(z.pop());
var v=z.join(B);
A=x[v];

if(A){y=A.alias||A;

if(typeof y===J){var w=y+B+u.join(B);
return this.__cT(w,s,t);
}}}if(t!=null){return this.__cT(t,s);
}return null;
}else if(typeof A===J){return this.__cT(A,s,t);
}else if(A.include&&!A.style){return this.__cT(A.include,s,t);
}return r;
},styleFrom:function(a,b,c,d){if(!c){c=this.getTheme();
}var j=this.__cR;
var e=j[a];

if(!e){e=j[a]=this.__cT(a,c,d);
}var o=c.appearances[e];

if(!o){this.warn("Missing appearance: "+a);
return null;
}if(!o.style){return null;
}var p=e;

if(b){var q=o.$$bits;

if(!q){q=o.$$bits={};
o.$$length=0;
}var h=0;

for(var k in b){if(!b[k]){continue;
}
if(q[k]==null){q[k]=1<<o.$$length++;
}h+=q[k];
}if(h>0){p+=G+h;
}}var i=this.__cQ;

if(i[p]!==undefined){return i[p];
}if(!b){b=this.__cS;
}var m;
if(o.include||o.base){var g=o.style(b);
var f;

if(o.include){f=this.styleFrom(o.include,b,c,d);
}m={};
if(o.base){var l=this.styleFrom(e,b,o.base,d);

if(o.include){for(var n in l){if(!f.hasOwnProperty(n)&&!g.hasOwnProperty(n)){m[n]=l[n];
}}}else{for(var n in l){if(!g.hasOwnProperty(n)){m[n]=l[n];
}}}}if(o.include){for(var n in f){if(!g.hasOwnProperty(n)){m[n]=f[n];
}}}for(var n in g){m[n]=g[n];
}}else{m=o.style(b);
}return i[p]=m||null;
}},destruct:function(){this.__cQ=this.__cR=null;
}});
})();
(function(){var s="focusout",r="interval",q="mouseover",p="mouseout",o="mousemove",n="widget",m="qx.ui.tooltip.ToolTip",l="Boolean",k="_applyCurrent",j="__ok",g="qx.ui.tooltip.Manager",i="__oh",h="__oi",f="tooltip-error",d="singleton";
qx.Class.define(g,{type:d,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,q,this.__or,this,true);
this.__oh=new qx.event.Timer();
this.__oh.addListener(r,this.__oo,this);
this.__oi=new qx.event.Timer();
this.__oi.addListener(r,this.__op,this);
this.__oj={left:0,top:0};
},properties:{current:{check:m,nullable:true,apply:k},showInvalidTooltips:{check:l,init:true}},members:{__oj:null,__oi:null,__oh:null,__ok:null,__ol:null,__om:function(){if(!this.__ok){this.__ok=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__ok;
},__on:function(){if(!this.__ol){this.__ol=new qx.ui.tooltip.ToolTip().set({appearance:f});
this.__ol.syncAppearance();
}return this.__ol;
},_applyCurrent:function(D,E){if(E&&qx.ui.core.Widget.contains(E,D)){return;
}if(E){if(!E.isDisposed()){E.exclude();
}this.__oh.stop();
this.__oi.stop();
}var G=qx.event.Registration;
var F=document.body;
if(D){this.__oh.startWith(D.getShowTimeout());
G.addListener(F,p,this.__os,this,true);
G.addListener(F,s,this.__ot,this,true);
G.addListener(F,o,this.__oq,this,true);
}else{G.removeListener(F,p,this.__os,this,true);
G.removeListener(F,s,this.__ot,this,true);
G.removeListener(F,o,this.__oq,this,true);
}},__oo:function(e){var c=this.getCurrent();

if(c&&!c.isDisposed()){this.__oi.startWith(c.getHideTimeout());

if(c.getPlaceMethod()==n){c.placeToWidget(c.getOpener());
}else{c.placeToPoint(this.__oj);
}c.show();
}this.__oh.stop();
},__op:function(e){var t=this.getCurrent();

if(t&&!t.isDisposed()){t.exclude();
}this.__oi.stop();
this.resetCurrent();
},__oq:function(e){var x=this.__oj;
x.left=e.getDocumentLeft();
x.top=e.getDocumentTop();
},__or:function(e){var A=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!A){return;
}var B;
while(A!=null){var B=A.getToolTip();
var C=A.getToolTipText()||null;
var z=A.getToolTipIcon()||null;

if(qx.Class.hasInterface(A.constructor,qx.ui.form.IForm)&&!A.isValid()){var y=A.getInvalidMessage();
}
if(B||C||z||y){break;
}A=A.getLayoutParent();
}
if(!A){return;
}
if(A.isBlockToolTip()){return;
}if(y&&A.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var B=this.__on().set({label:y});
}else if(!B){var B=this.__om().set({label:C,icon:z});
}this.setCurrent(B);
B.setOpener(A);
},__os:function(e){var u=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!u){return;
}var v=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!v){return;
}var w=this.getCurrent();
if(w&&(v==w||qx.ui.core.Widget.contains(w,v))){return;
}if(v&&u&&qx.ui.core.Widget.contains(u,v)){return;
}if(w&&!v){this.setCurrent(null);
}else{this.resetCurrent();
}},__ot:function(e){var a=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!a){return;
}var b=this.getCurrent();
if(b&&b==a.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,q,this.__or,this,true);
this._disposeObjects(i,h,j);
this.__oj=null;
}});
})();
(function(){var m="interval",l="qx.event.Timer",k="_applyInterval",j="_applyEnabled",i="Boolean",h="qx.event.type.Event",g="Integer";
qx.Class.define(l,{extend:qx.core.Object,construct:function(r){arguments.callee.base.call(this);
this.setEnabled(false);

if(r!=null){this.setInterval(r);
}var self=this;
this.__dC=function(){self._oninterval.call(self);
};
},events:{"interval":h},statics:{once:function(n,o,p){var q=new qx.event.Timer(p);
q.addListener(m,function(e){q.stop();
n.call(o,e);
q.dispose();
o=null;
},o);
q.start();
return q;
}},properties:{enabled:{init:true,check:i,apply:j},interval:{check:g,init:1000,apply:k}},members:{__dD:null,__dC:null,_applyInterval:function(b,c){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(d,f){if(f){window.clearInterval(this.__dD);
this.__dD=null;
}else if(d){this.__dD=window.setInterval(this.__dC,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(s){this.setInterval(s);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(a){this.stop();
this.startWith(a);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(m);
}})},destruct:function(){if(this.__dD){window.clearInterval(this.__dD);
}this.__dD=this.__dC=null;
}});
})();
(function(){var d="qx.ui.core.MChildrenHandling";
qx.Mixin.define(d,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(p){return this._indexOf(p);
},add:function(e,f){this._add(e,f);
},addAt:function(i,j,k){this._addAt(i,j,k);
},addBefore:function(a,b,c){this._addBefore(a,b,c);
},addAfter:function(m,n,o){this._addAfter(m,n,o);
},remove:function(g){this._remove(g);
},removeAt:function(h){return this._removeAt(h);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(l){l.getChildren=l._getChildren;
l.hasChildren=l._hasChildren;
l.indexOf=l._indexOf;
l.add=l._add;
l.addAt=l._addAt;
l.addBefore=l._addBefore;
l.addAfter=l._addAfter;
l.remove=l._remove;
l.removeAt=l._removeAt;
l.removeAll=l._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var x="Integer",w="_applyDimension",v="Boolean",u="_applyStretching",t="_applyMargin",s="shorthand",r="_applyAlign",q="allowShrinkY",p="bottom",o="baseline",L="marginBottom",K="qx.ui.core.LayoutItem",J="center",I="marginTop",H="allowGrowX",G="middle",F="marginLeft",E="allowShrinkX",D="top",C="right",A="marginRight",B="abstract",y="allowGrowY",z="left";
qx.Class.define(K,{type:B,extend:qx.core.Object,properties:{minWidth:{check:x,nullable:true,apply:w,init:null,themeable:true},width:{check:x,nullable:true,apply:w,init:null,themeable:true},maxWidth:{check:x,nullable:true,apply:w,init:null,themeable:true},minHeight:{check:x,nullable:true,apply:w,init:null,themeable:true},height:{check:x,nullable:true,apply:w,init:null,themeable:true},maxHeight:{check:x,nullable:true,apply:w,init:null,themeable:true},allowGrowX:{check:v,apply:u,init:true,themeable:true},allowShrinkX:{check:v,apply:u,init:true,themeable:true},allowGrowY:{check:v,apply:u,init:true,themeable:true},allowShrinkY:{check:v,apply:u,init:true,themeable:true},allowStretchX:{group:[H,E],mode:s,themeable:true},allowStretchY:{group:[y,q],mode:s,themeable:true},marginTop:{check:x,init:0,apply:t,themeable:true},marginRight:{check:x,init:0,apply:t,themeable:true},marginBottom:{check:x,init:0,apply:t,themeable:true},marginLeft:{check:x,init:0,apply:t,themeable:true},margin:{group:[I,A,L,F],mode:s,themeable:true},alignX:{check:[z,J,C],nullable:true,apply:r,themeable:true},alignY:{check:[D,G,p,o],nullable:true,apply:r,themeable:true}},members:{__ey:null,__ez:null,__eA:null,__eB:null,__eC:null,__eD:null,__eE:null,getBounds:function(){return this.__eD||this.__ez||null;
},clearSeparators:function(){},renderSeparator:function(P,Q){},renderLayout:function(h,top,i,j){var k;
{};
var l=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var l=this._getHeightForWidth(i);
}
if(l!=null&&l!==this.__ey){this.__ey=l;
qx.ui.core.queue.Layout.add(this);
return null;
}var n=this.__ez;

if(!n){n=this.__ez={};
}var m={};

if(h!==n.left||top!==n.top){m.position=true;
n.left=h;
n.top=top;
}
if(i!==n.width||j!==n.height){m.size=true;
n.width=i;
n.height=j;
}if(this.__eA){m.local=true;
delete this.__eA;
}
if(this.__eC){m.margin=true;
delete this.__eC;
}return m;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__eA;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__eA=true;
this.__eB=null;
},getSizeHint:function(f){var g=this.__eB;

if(g){return g;
}
if(f===false){return null;
}g=this.__eB=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__ey&&this.getHeight()==null){g.height=this.__ey;
}if(g.minWidth>g.width){g.width=g.minWidth;
}
if(g.maxWidth<g.width){g.width=g.maxWidth;
}
if(!this.getAllowGrowX()){g.maxWidth=g.width;
}
if(!this.getAllowShrinkX()){g.minWidth=g.width;
}if(g.minHeight>g.height){g.height=g.minHeight;
}
if(g.maxHeight<g.height){g.height=g.maxHeight;
}
if(!this.getAllowGrowY()){g.maxHeight=g.height;
}
if(!this.getAllowShrinkY()){g.minHeight=g.height;
}return g;
},_computeSizeHint:function(){var X=this.getMinWidth()||0;
var U=this.getMinHeight()||0;
var Y=this.getWidth()||X;
var W=this.getHeight()||U;
var T=this.getMaxWidth()||Infinity;
var V=this.getMaxHeight()||Infinity;
return {minWidth:X,width:Y,maxWidth:T,minHeight:U,height:W,maxHeight:V};
},_hasHeightForWidth:function(){var bd=this._getLayout();

if(bd){return bd.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(d){var e=this._getLayout();

if(e&&e.hasHeightForWidth()){return e.getHeightForWidth(d);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__eC=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__eD;
},setUserBounds:function(M,top,N,O){this.__eD={left:M,top:top,width:N,height:O};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__eD;
qx.ui.core.queue.Layout.add(this);
},__eF:{},setLayoutProperties:function(a){if(a==null){return;
}var b=this.__eE;

if(!b){b=this.__eE={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(a);
}for(var c in a){if(a[c]==null){delete b[c];
}else{b[c]=a[c];
}}},getLayoutProperties:function(){return this.__eE||this.__eF;
},clearLayoutProperties:function(){delete this.__eE;
},updateLayoutProperties:function(ba){var bb=this._getLayout();

if(bb){var bc;
{};
bb.invalidateChildrenCache();
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
},clone:function(){var R=arguments.callee.base.call(this);
var S=this.__eE;

if(S){R.__eE=qx.lang.Object.clone(S);
}return R;
}},destruct:function(){this.$$parent=this.$$subparent=this.__eE=this.__ez=this.__eD=this.__eB=null;
}});
})();
(function(){var n="qx.ui.core.DecoratorFactory",m="$$nopool$$";
qx.Class.define(n,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__bY={};
},statics:{MAX_SIZE:15,__ca:m},members:{__bY:null,getDecoratorElement:function(c){var h=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(c)){var f=c;
var e=qx.theme.manager.Decoration.getInstance().resolve(c);
}else{var f=h.__ca;
e=c;
}var g=this.__bY;

if(g[f]&&g[f].length>0){var d=g[f].pop();
}else{var d=this._createDecoratorElement(e,f);
}d.$$pooled=false;
return d;
},poolDecorator:function(i){if(!i||i.$$pooled){return;
}var l=qx.ui.core.DecoratorFactory;
var j=i.getId();

if(j==l.__ca){i.dispose();
return;
}var k=this.__bY;

if(!k[j]){k[j]=[];
}
if(k[j].length>l.MAX_SIZE){i.dispose();
}else{i.$$pooled=true;
k[j].push(i);
}},_createDecoratorElement:function(o,p){var q=new qx.html.Decorator(o,p);
{};
return q;
},toString:function(){return arguments.callee.base.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var b=this.__bY;

for(var a in b){qx.util.DisposeUtil.disposeArray(b,a);
}}this.__bY=null;
}});
})();
(function(){var go="px",gn="Boolean",gm="qx.event.type.Mouse",gl="qx.event.type.Drag",gk="visible",gj="qx.event.type.Focus",gi="on",gh="Integer",gg="excluded",gf="qx.event.type.Data",fQ="_applyPadding",fP="qx.event.type.Event",fO="hidden",fN="contextmenu",fM="String",fL="tabIndex",fK="backgroundColor",fJ="focused",fI="changeVisibility",fH="mshtml",gv="hovered",gw="qx.event.type.KeySequence",gt="qx.client",gu="absolute",gr="drag",gs="div",gp="disabled",gq="move",gx="dragstart",gy="qx.dynlocale",fX="dragchange",fW="dragend",ga="resize",fY="Decorator",gc="zIndex",gb="$$widget",ge="opacity",gd="default",fV="Color",fU="changeToolTipText",ey="beforeContextmenuOpen",ez="_applyNativeContextMenu",eA="_applyBackgroundColor",eB="__dj",eC="_applyFocusable",eD="changeShadow",eE="qx.event.type.KeyInput",eF="__db",eG="createChildControl",eH="Font",gC="_applyShadow",gB="_applyEnabled",gA="_applySelectable",gz="Number",gG="_applyKeepActive",gF="_applyVisibility",gE="repeat",gD="qxDraggable",gI="syncAppearance",gH="paddingLeft",fh="_applyDroppable",fi="#",ff="qx.event.type.MouseWheel",fg="_applyCursor",fl="_applyDraggable",fm="changeTextColor",fj="changeContextMenu",fk="paddingTop",fd="changeSelectable",fe="hideFocus",eP="none",eO="outline",eR="_applyAppearance",eQ="_applyOpacity",eL="url(",eK=")",eN="qx.ui.core.Widget",eM="__df",eJ="_applyFont",eI="__cW",fr="cursor",fs="qxDroppable",ft="changeZIndex",fu="changeEnabled",fn="changeFont",fo="_applyDecorator",fp="_applyZIndex",fq="_applyTextColor",fv="qx.ui.menu.Menu",fw="_applyToolTipText",fa="true",eY="widget",eX="changeDecorator",eW="__dc",eV="_applyTabIndex",eU="__dh",eT="__cV",eS="changeAppearance",fc="shorthand",fb="/",fx="",fy="_applyContextMenu",fz="paddingBottom",fA="changeNativeContextMenu",fB="qx.ui.tooltip.ToolTip",fC="qxKeepActive",fD="_applyKeepFocus",fE="paddingRight",fF="changeBackgroundColor",fG="changeLocale",fT="qxKeepFocus",fS="__da",fR="qx/static/blank.gif";
qx.Class.define(eN,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__cV=this._createContainerElement();
this.__cW=this.__di();
this.__cV.add(this.__cW);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:fP,disappear:fP,createChildControl:gf,resize:gf,move:gf,syncAppearance:gf,mousemove:gm,mouseover:gm,mouseout:gm,mousedown:gm,mouseup:gm,click:gm,dblclick:gm,contextmenu:gm,beforeContextmenuOpen:gm,mousewheel:ff,keyup:gw,keydown:gw,keypress:gw,keyinput:eE,focus:gj,blur:gj,focusin:gj,focusout:gj,activate:gj,deactivate:gj,capture:fP,losecapture:fP,drop:gl,dragleave:gl,dragover:gl,drag:gl,dragstart:gl,dragend:gl,dragchange:gl,droprequest:gl},properties:{paddingTop:{check:gh,init:0,apply:fQ,themeable:true},paddingRight:{check:gh,init:0,apply:fQ,themeable:true},paddingBottom:{check:gh,init:0,apply:fQ,themeable:true},paddingLeft:{check:gh,init:0,apply:fQ,themeable:true},padding:{group:[fk,fE,fz,gH],mode:fc,themeable:true},zIndex:{nullable:true,init:null,apply:fp,event:ft,check:gh,themeable:true},decorator:{nullable:true,init:null,apply:fo,event:eX,check:fY,themeable:true},shadow:{nullable:true,init:null,apply:gC,event:eD,check:fY,themeable:true},backgroundColor:{nullable:true,check:fV,apply:eA,event:fF,themeable:true},textColor:{nullable:true,check:fV,apply:fq,event:fm,themeable:true,inheritable:true},font:{nullable:true,apply:eJ,check:eH,event:fn,themeable:true,inheritable:true,dispose:true},opacity:{check:gz,apply:eQ,themeable:true,nullable:true,init:null},cursor:{check:fM,apply:fg,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:fB,nullable:true},toolTipText:{check:fM,nullable:true,event:fU,apply:fw},toolTipIcon:{check:fM,nullable:true,event:fU},blockToolTip:{check:gn,init:false},visibility:{check:[gk,fO,gg],init:gk,apply:gF,event:fI},enabled:{init:true,check:gn,inheritable:true,apply:gB,event:fu},anonymous:{init:false,check:gn},tabIndex:{check:gh,nullable:true,apply:eV},focusable:{check:gn,init:false,apply:eC},keepFocus:{check:gn,init:false,apply:fD},keepActive:{check:gn,init:false,apply:gG},draggable:{check:gn,init:false,apply:fl},droppable:{check:gn,init:false,apply:fh},selectable:{check:gn,init:false,event:fd,apply:gA},contextMenu:{check:fv,apply:fy,nullable:true,event:fj},nativeContextMenu:{check:gn,init:false,themeable:true,event:fA,apply:ez},appearance:{check:fM,init:eY,apply:eR,event:eS}},statics:{DEBUG:false,getWidgetByElement:function(A){while(A){var B=A.$$widget;
if(B!=null){return qx.core.ObjectRegistry.fromHashCode(B);
}A=A.parentNode;
}return null;
},contains:function(parent,R){while(R){if(parent==R){return true;
}R=R.getLayoutParent();
}return false;
},__cX:new qx.ui.core.DecoratorFactory(),__cY:new qx.ui.core.DecoratorFactory()},members:{__cV:null,__cW:null,__da:null,__db:null,__dc:null,__dd:null,__de:null,__df:null,_getLayout:function(){return this.__df;
},_setLayout:function(C){{};

if(this.__df){this.__df.connectToWidget(null);
}
if(C){C.connectToWidget(this);
}this.__df=C;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var bp=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(bp);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(bp);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__dg:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var dc=qx.theme.manager.Decoration.getInstance();
var de=dc.resolve(a).getInsets();
var dd=dc.resolve(b).getInsets();

if(de.top!=dd.top||de.right!=dd.right||de.bottom!=dd.bottom||de.left!=dd.left){return true;
}return false;
},renderLayout:function(bw,top,bx,by){var bH=arguments.callee.base.call(this,bw,top,bx,by);
if(!bH){return;
}var bA=this.getContainerElement();
var content=this.getContentElement();
var bE=bH.size||this._updateInsets;
var bI=go;
var bF={};
if(bH.position){bF.left=bw+bI;
bF.top=top+bI;
}if(bH.size){bF.width=bx+bI;
bF.height=by+bI;
}
if(bH.position||bH.size){bA.setStyles(bF);
}
if(bE||bH.local||bH.margin){var bz=this.getInsets();
var innerWidth=bx-bz.left-bz.right;
var innerHeight=by-bz.top-bz.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bC={};

if(this._updateInsets){bC.left=bz.left+bI;
bC.top=bz.top+bI;
}
if(bE){bC.width=innerWidth+bI;
bC.height=innerHeight+bI;
}
if(bE||this._updateInsets){content.setStyles(bC);
}
if(bH.size){var bG=this.__dc;

if(bG){bG.setStyles({width:bx+go,height:by+go});
}}
if(bH.size||this._updateInsets){if(this.__da){this.__da.resize(bx,by);
}}
if(bH.size){if(this.__db){var bz=this.__db.getInsets();
var bD=bx+bz.left+bz.right;
var bB=by+bz.top+bz.bottom;
this.__db.resize(bD,bB);
}}
if(bE||bH.local||bH.margin){if(this.__df&&this.hasLayoutChildren()){this.__df.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(bH.position&&this.hasListener(gq)){this.fireDataEvent(gq,this.getBounds());
}
if(bH.size&&this.hasListener(ga)){this.fireDataEvent(ga,this.getBounds());
}delete this._updateInsets;
return bH;
},__dh:null,clearSeparators:function(){var dg=this.__dh;

if(!dg){return;
}var dh=qx.ui.core.Widget.__cX;
var content=this.getContentElement();
var df;

for(var i=0,l=dg.length;i<l;i++){df=dg[i];
dh.poolDecorator(df);
content.remove(df);
}dg.length=0;
},renderSeparator:function(cN,cO){var cP=qx.ui.core.Widget.__cX.getDecoratorElement(cN);
this.getContentElement().add(cP);
cP.resize(cO.width,cO.height);
cP.setStyles({left:cO.left+go,top:cO.top+go});
if(!this.__dh){this.__dh=[cP];
}else{this.__dh.push(cP);
}},_computeSizeHint:function(){var cx=this.getWidth();
var cw=this.getMinWidth();
var cs=this.getMaxWidth();
var cv=this.getHeight();
var ct=this.getMinHeight();
var cu=this.getMaxHeight();
{};
var cy=this._getContentHint();
var cr=this.getInsets();
var cA=cr.left+cr.right;
var cz=cr.top+cr.bottom;

if(cx==null){cx=cy.width+cA;
}
if(cv==null){cv=cy.height+cz;
}
if(cw==null){cw=cA;

if(cy.minWidth!=null){cw+=cy.minWidth;
}}
if(ct==null){ct=cz;

if(cy.minHeight!=null){ct+=cy.minHeight;
}}
if(cs==null){if(cy.maxWidth==null){cs=Infinity;
}else{cs=cy.maxWidth+cA;
}}
if(cu==null){if(cy.maxHeight==null){cu=Infinity;
}else{cu=cy.maxHeight+cz;
}}return {width:cx,minWidth:cw,maxWidth:cs,height:cv,minHeight:ct,maxHeight:cu};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__df){this.__df.invalidateLayoutCache();
}},_getContentHint:function(){var dD=this.__df;

if(dD){if(this.hasLayoutChildren()){var dC;
var dE=dD.getSizeHint();
{};
return dE;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dm){var dr=this.getInsets();
var du=dr.left+dr.right;
var dt=dr.top+dr.bottom;
var ds=dm-du;
var dp=this._getLayout();

if(dp&&dp.hasHeightForWidth()){var dn=dp.getHeightForWidth(dm);
}else{dn=this._getContentHeightForWidth(ds);
}var dq=dn+dt;
return dq;
},_getContentHeightForWidth:function(dI){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var q=this.getPaddingRight();
var s=this.getPaddingBottom();
var r=this.getPaddingLeft();

if(this.__da){var p=this.__da.getInsets();
{};
top+=p.top;
q+=p.right;
s+=p.bottom;
r+=p.left;
}return {"top":top,"right":q,"bottom":s,"left":r};
},getInnerSize:function(){var bb=this.getBounds();

if(!bb){return null;
}var ba=this.getInsets();
return {width:bb.width-ba.left-ba.right,height:bb.height-ba.top-ba.bottom};
},show:function(){this.setVisibility(gk);
},hide:function(){this.setVisibility(fO);
},exclude:function(){this.setVisibility(gg);
},isVisible:function(){return this.getVisibility()===gk;
},isHidden:function(){return this.getVisibility()!==gk;
},isExcluded:function(){return this.getVisibility()===gg;
},isSeeable:function(){var Y=this.getContainerElement().getDomElement();

if(Y){return Y.offsetWidth>0;
}var X=this;

do{if(!X.isVisible()){return false;
}
if(X.isRootWidget()){return true;
}X=X.getLayoutParent();
}while(X);
return false;
},_createContainerElement:function(){var F=new qx.html.Element(gs);
{};
F.setStyles({"position":gu,"zIndex":0});
F.setAttribute(gb,this.toHashCode());
{};
return F;
},__di:function(){var bP=this._createContentElement();
{};
bP.setStyles({"position":gu,"zIndex":10});
return bP;
},_createContentElement:function(){var gL=new qx.html.Element(gs);
gL.setStyles({"overflowX":fO,"overflowY":fO});
return gL;
},getContainerElement:function(){return this.__cV;
},getContentElement:function(){return this.__cW;
},getDecoratorElement:function(){return this.__da||null;
},getShadowElement:function(){return this.__db||null;
},__dj:null,getLayoutChildren:function(){var gN=this.__dj;

if(!gN){return this.__dk;
}var gO;

for(var i=0,l=gN.length;i<l;i++){var gM=gN[i];

if(gM.hasUserBounds()||gM.isExcluded()){if(gO==null){gO=gN.concat();
}qx.lang.Array.remove(gO,gM);
}}return gO||gN;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var N=this.__df;

if(N){N.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var ea=this.__dj;

if(!ea){return false;
}var eb;

for(var i=0,l=ea.length;i<l;i++){eb=ea[i];

if(!eb.hasUserBounds()&&!eb.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__dk:[],_getChildren:function(){return this.__dj||this.__dk;
},_indexOf:function(ee){var ef=this.__dj;

if(!ef){return -1;
}return ef.indexOf(ee);
},_hasChildren:function(){var dN=this.__dj;
return dN!=null&&(!!dN[0]);
},addChildrenToQueue:function(bq){var br=this.__dj;

if(!br){return;
}var bs;

for(var i=0,l=br.length;i<l;i++){bs=br[i];
bq[bs.$$hash]=bs;
bs.addChildrenToQueue(bq);
}},_add:function(P,Q){if(P.getLayoutParent()==this){qx.lang.Array.remove(this.__dj,P);
}
if(this.__dj){this.__dj.push(P);
}else{this.__dj=[P];
}this.__dl(P,Q);
},_addAt:function(bV,bW,bX){if(!this.__dj){this.__dj=[];
}if(bV.getLayoutParent()==this){qx.lang.Array.remove(this.__dj,bV);
}var bY=this.__dj[bW];

if(bY===bV){return bV.setLayoutProperties(bX);
}
if(bY){qx.lang.Array.insertBefore(this.__dj,bV,bY);
}else{this.__dj.push(bV);
}this.__dl(bV,bX);
},_addBefore:function(K,L,M){{};

if(K==L){return;
}
if(!this.__dj){this.__dj=[];
}if(K.getLayoutParent()==this){qx.lang.Array.remove(this.__dj,K);
}qx.lang.Array.insertBefore(this.__dj,K,L);
this.__dl(K,M);
},_addAfter:function(ev,ew,ex){{};

if(ev==ew){return;
}
if(!this.__dj){this.__dj=[];
}if(ev.getLayoutParent()==this){qx.lang.Array.remove(this.__dj,ev);
}qx.lang.Array.insertAfter(this.__dj,ev,ew);
this.__dl(ev,ex);
},_remove:function(eg){if(!this.__dj){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__dj,eg);
this.__dm(eg);
},_removeAt:function(gJ){if(!this.__dj){throw new Error("This widget has no children!");
}var gK=this.__dj[gJ];
qx.lang.Array.removeAt(this.__dj,gJ);
this.__dm(gK);
return gK;
},_removeAll:function(){if(!this.__dj){return;
}var O=this.__dj.concat();
this.__dj.length=0;

for(var i=O.length-1;i>=0;i--){this.__dm(O[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__dl:function(cd,ce){{};
var parent=cd.getLayoutParent();

if(parent&&parent!=this){parent._remove(cd);
}cd.setLayoutParent(this);
if(ce){cd.setLayoutProperties(ce);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(cd);
}},__dm:function(bm){{};

if(bm.getLayoutParent()!==this){throw new Error("Remove Error: "+bm+" is not a child of this widget!");
}bm.setLayoutParent(null);
if(this.__df){this.__df.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(bm);
}},capture:function(dT){this.getContainerElement().capture(dT);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(cJ,cK,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dc){return;
}var D=this.__dc=new qx.html.Element;
{};
D.setStyles({position:gu,top:0,left:0,zIndex:7});
var E=this.getBounds();

if(E){this.__dc.setStyles({width:E.width+go,height:E.height+go});
}if(qx.core.Variant.isSet(gt,fH)){D.setStyles({backgroundImage:eL+qx.util.ResourceManager.getInstance().toUri(fR)+eK,backgroundRepeat:gE});
}this.getContainerElement().add(D);
},_applyDecorator:function(dv,dw){{};
var dA=qx.ui.core.Widget.__cX;
var dy=this.getContainerElement();
if(!this.__dc&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(dw){dy.remove(this.__da);
dA.poolDecorator(this.__da);
}if(dv){var dz=this.__da=dA.getDecoratorElement(dv);
dz.setStyle(gc,5);
var dx=this.getBackgroundColor();
dz.tint(dx);
dy.add(dz);
}else{delete this.__da;
this._applyBackgroundColor(this.getBackgroundColor());
}if(dv&&!dw&&dx){this.getContainerElement().setStyle(fK,null);
}if(this.__dg(dw,dv)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(dv){var dB=this.getBounds();

if(dB){dz.resize(dB.width,dB.height);
this.__dc&&
this.__dc.setStyles({width:dB.width+go,height:dB.height+go});
}}},_applyShadow:function(gP,gQ){var gX=qx.ui.core.Widget.__cY;
var gS=this.getContainerElement();
if(gQ){gS.remove(this.__db);
gX.poolDecorator(this.__db);
}if(gP){var gU=this.__db=gX.getDecoratorElement(gP);
gS.add(gU);
var gW=gU.getInsets();
gU.setStyles({left:(-gW.left)+go,top:(-gW.top)+go});
var gV=this.getBounds();

if(gV){var gT=gV.width+gW.left+gW.right;
var gR=gV.height+gW.top+gW.bottom;
gU.resize(gT,gR);
}gU.tint(null);
}else{delete this.__db;
}},_applyToolTipText:function(bS,bT){if(qx.core.Variant.isSet(gy,gi)){if(this.__de){return;
}var bU=qx.locale.Manager.getInstance();
this.__de=bU.addListener(fG,function(){if(bS&&bS.translate){this.setToolTipText(bS.translate());
}},this);
}},_applyTextColor:function(bn,bo){},_applyZIndex:function(cl,cm){this.getContainerElement().setStyle(gc,cl==null?0:cl);
},_applyVisibility:function(U,V){var W=this.getContainerElement();

if(U===gk){W.show();
}else{W.hide();
}var parent=this.$$parent;

if(parent&&(V==null||U==null||V===gg||U===gg)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(ca,cb){this.getContainerElement().setStyle(ge,ca==1?null:ca);
if(qx.core.Variant.isSet(gt,fH)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var cc=(ca==1||ca==null)?null:0.99;
this.getContentElement().setStyle(ge,cc);
}}},_applyCursor:function(cR,cS){if(cR==null&&!this.isSelectable()){cR=gd;
}this.getContainerElement().setStyle(fr,cR,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(bK,bL){var bM=this.getBackgroundColor();
var bO=this.getContainerElement();

if(this.__da){this.__da.tint(bM);
bO.setStyle(fK,null);
}else{var bN=qx.theme.manager.Color.getInstance().resolve(bM);
bO.setStyle(fK,bN);
}},_applyFont:function(k,m){},__dn:null,$$stateChanges:null,_forwardStates:null,hasState:function(ek){var em=this.__dn;
return em&&em[ek];
},addState:function(dU){var dV=this.__dn;

if(!dV){dV=this.__dn={};
}
if(dV[dU]){return;
}this.__dn[dU]=true;
if(dU===gv){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var dY=this.__dq;

if(forward&&forward[dU]&&dY){var dW;

for(var dX in dY){dW=dY[dX];

if(dW instanceof qx.ui.core.Widget){dY[dX].addState(dU);
}}}},removeState:function(c){var d=this.__dn;

if(!d||!d[c]){return;
}delete this.__dn[c];
if(c===gv){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var h=this.__dq;

if(forward&&forward[c]&&h){for(var g in h){var f=h[g];

if(f instanceof qx.ui.core.Widget){f.removeState(c);
}}}},replaceState:function(cD,cE){var cF=this.__dn;

if(!cF){cF=this.__dn={};
}
if(!cF[cE]){cF[cE]=true;
}
if(cF[cD]){delete cF[cD];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cI=this.__dq;

if(forward&&forward[cE]&&cI){for(var cH in cI){var cG=cI[cH];

if(cG instanceof qx.ui.core.Widget){cG.replaceState(cD,cE);
}}}},__do:null,__dp:null,syncAppearance:function(){var bg=this.__dn;
var bf=this.__do;
var bh=qx.theme.manager.Appearance.getInstance();
var bd=qx.core.Property.$$method.setThemed;
var bl=qx.core.Property.$$method.resetThemed;
if(this.__dp){delete this.__dp;
if(bf){var bc=bh.styleFrom(bf,bg,null,this.getAppearance());
if(bc){bf=null;
}}}if(!bf){var be=this;
var bk=[];

do{bk.push(be.$$subcontrol||be.getAppearance());
}while(be=be.$$subparent);
bf=this.__do=bk.reverse().join(fb).replace(/#[0-9]+/g,fx);
}var bi=bh.styleFrom(bf,bg,null,this.getAppearance());

if(bi){var bj;

if(bc){for(var bj in bc){if(bi[bj]===undefined){this[bl[bj]]();
}}}{};
for(var bj in bi){bi[bj]===undefined?this[bl[bj]]():this[bd[bj]](bi[bj]);
}}else if(bc){for(var bj in bc){this[bl[bj]]();
}}this.fireDataEvent(gI,this.__dn);
},_applyAppearance:function(cj,ck){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dd){qx.ui.core.queue.Appearance.add(this);
this.__dd=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__dp=true;
qx.ui.core.queue.Appearance.add(this);
var ci=this.__dq;

if(ci){var cg;

for(var ch in ci){cg=ci[ch];

if(cg instanceof qx.ui.core.Widget){cg.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var eh=this;

while(eh.getAnonymous()){eh=eh.getLayoutParent();

if(!eh){return null;
}}return eh;
},getFocusTarget:function(){var en=this;

if(!en.getEnabled()){return null;
}
while(en.getAnonymous()||!en.getFocusable()){en=en.getLayoutParent();

if(!en||!en.getEnabled()){return null;
}}return en;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(er,es){var et=this.getFocusElement();
if(er){var eu=this.getTabIndex();

if(eu==null){eu=1;
}et.setAttribute(fL,eu);
if(qx.core.Variant.isSet(gt,fH)){et.setAttribute(fe,fa);
}else{et.setStyle(eO,eP);
}}else{if(et.isNativelyFocusable()){et.setAttribute(fL,-1);
}else if(es){et.setAttribute(fL,null);
}}},_applyKeepFocus:function(bQ){var bR=this.getFocusElement();
bR.setAttribute(fT,bQ?gi:null);
},_applyKeepActive:function(G){var H=this.getContainerElement();
H.setAttribute(fC,G?gi:null);
},_applyTabIndex:function(bJ){if(bJ==null){bJ=1;
}else if(bJ<1||bJ>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&bJ!=null){this.getFocusElement().setAttribute(fL,bJ);
}},_applySelectable:function(cQ){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(cQ);
this.getContentElement().setSelectable(cQ);
},_applyEnabled:function(di,dj){if(di===false){this.addState(gp);
this.removeState(gv);
if(this.isFocusable()){this.removeState(fJ);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(gp);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(ei,ej,name){},_applyContextMenu:function(da,db){if(db){db.removeState(fN);

if(db.getOpener()==this){db.resetOpener();
}
if(!da){this.removeListener(fN,this._onContextMenuOpen);
db.removeListener(fI,this._onBeforeContextMenuOpen,this);
}}
if(da){da.setOpener(this);
da.addState(fN);

if(!db){this.addListener(fN,this._onContextMenuOpen);
da.addListener(fI,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==gk&&this.hasListener(ey)){this.fireDataEvent(ey,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(cB,cC){if(!this.isEnabled()&&cB===true){cB=false;
}qx.ui.core.DragDropCursor.getInstance();
if(cB){this.addListener(gx,this._onDragStart);
this.addListener(gr,this._onDrag);
this.addListener(fW,this._onDragEnd);
this.addListener(fX,this._onDragChange);
}else{this.removeListener(gx,this._onDragStart);
this.removeListener(gr,this._onDrag);
this.removeListener(fW,this._onDragEnd);
this.removeListener(fX,this._onDragChange);
}this.getContainerElement().setAttribute(gD,cB?gi:null);
},_applyDroppable:function(bt,bu){if(!this.isEnabled()&&bt===true){bt=false;
}this.getContainerElement().setAttribute(fs,bt?gi:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(gd);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var dk=qx.ui.core.DragDropCursor.getInstance();
var dl=e.getCurrentAction();
dl?dk.setAction(dl):dk.resetAction();
},visualizeFocus:function(){this.addState(fJ);
},visualizeBlur:function(){this.removeState(fJ);
},scrollChildIntoView:function(cn,co,cp,cq){this.scrollChildIntoViewX(cn,co,cq);
this.scrollChildIntoViewY(cn,cp,cq);
},scrollChildIntoViewX:function(dF,dG,dH){this.getContentElement().scrollChildIntoViewX(dF.getContainerElement(),dG,dH);
},scrollChildIntoViewY:function(t,u,v){this.getContentElement().scrollChildIntoViewY(t.getContainerElement(),u,v);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(j){if(!this.__dq){return false;
}return !!this.__dq[j];
},__dq:null,_getCreatedChildControls:function(){return this.__dq;
},getChildControl:function(eo,ep){if(!this.__dq){if(ep){return null;
}this.__dq={};
}var eq=this.__dq[eo];

if(eq){return eq;
}
if(ep===true){return null;
}return this._createChildControl(eo);
},_showChildControl:function(cL){var cM=this.getChildControl(cL);
cM.show();
return cM;
},_excludeChildControl:function(cX){var cY=this.getChildControl(cX,true);

if(cY){cY.exclude();
}},_isChildControlVisible:function(n){var o=this.getChildControl(n,true);

if(o){return o.isVisible();
}return false;
},_createChildControl:function(dO){if(!this.__dq){this.__dq={};
}else if(this.__dq[dO]){throw new Error("Child control '"+dO+"' already created!");
}var dS=dO.indexOf(fi);

if(dS==-1){var dP=this._createChildControlImpl(dO);
}else{var dP=this._createChildControlImpl(dO.substring(0,dS));
}
if(!dP){throw new Error("Unsupported control: "+dO);
}dP.$$subcontrol=dO;
dP.$$subparent=this;
var dQ=this.__dn;
var forward=this._forwardStates;

if(dQ&&forward&&dP instanceof qx.ui.core.Widget){for(var dR in dQ){if(forward[dR]){dP.addState(dR);
}}}this.fireDataEvent(eG,dP);
return this.__dq[dO]=dP;
},_createChildControlImpl:function(bv){return null;
},_disposeChildControls:function(){var z=this.__dq;

if(!z){return;
}var x=qx.ui.core.Widget;

for(var y in z){var w=z[y];

if(!x.contains(this,w)){w.destroy();
}else{w.dispose();
}}delete this.__dq;
},_findTopControl:function(){var cf=this;

while(cf){if(!cf.$$subparent){return cf;
}cf=cf.$$subparent;
}return null;
},getContainerLocation:function(I){var J=this.getContainerElement().getDomElement();
return J?qx.bom.element.Location.get(J,I):null;
},getContentLocation:function(S){var T=this.getContentElement().getDomElement();
return T?qx.bom.element.Location.get(T,S):null;
},setDomLeft:function(cT){var cU=this.getContainerElement().getDomElement();

if(cU){cU.style.left=cT+go;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(dJ){var dK=this.getContainerElement().getDomElement();

if(dK){dK.style.top=dJ+go;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(dL,top){var dM=this.getContainerElement().getDomElement();

if(dM){dM.style.left=dL+go;
dM.style.top=top+go;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var cV=arguments.callee.base.call(this);

if(this.getChildren){var cW=this.getChildren();

for(var i=0,l=cW.length;i<l;i++){cV.add(cW[i].clone());
}}return cV;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(gy,gi)){if(this.__de){qx.locale.Manager.getInstance().removeListenerById(this.__de);
}}this.getContainerElement().setAttribute(gb,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var ed=qx.ui.core.Widget;
var ec=this.getContainerElement();

if(this.__da){ec.remove(this.__da);
ed.__cX.poolDecorator(this.__da);
}
if(this.__db){ec.remove(this.__db);
ed.__cY.poolDecorator(this.__db);
}this.clearSeparators();
this.__da=this.__db=this.__dh=null;
}else{this._disposeArray(eU);
this._disposeObjects(fS,eF);
}this._disposeArray(eB);
this.__dn=this.__dq=null;
this._disposeObjects(eM,eT,eI,eW);
}});
})();
(function(){var f="qx.event.type.Data",e="qx.ui.container.Composite",d="addChildWidget",c="removeChildWidget";
qx.Class.define(e,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(a){arguments.callee.base.call(this);

if(a!=null){this._setLayout(a);
}},events:{addChildWidget:f,removeChildWidget:f},members:{_afterAddChild:function(i){this.fireNonBubblingEvent(d,qx.event.type.Data,[i]);
},_afterRemoveChild:function(b){this.fireNonBubblingEvent(c,qx.event.type.Data,[b]);
}},defer:function(g,h){qx.ui.core.MChildrenHandling.remap(h);
qx.ui.core.MLayoutHandling.remap(h);
}});
})();
(function(){var v="keep-align",u="interval",t="Integer",s="direct",r="best-fit",q="mouse",p="bottom-left",o="disappear",n="Boolean",m="bottom-right",J="widget",I="qx.ui.core.MPlacement",H="left-top",G="offsetRight",F="shorthand",E="offsetLeft",D="top-left",C="appear",B="offsetBottom",A="top-right",y="offsetTop",z="right-bottom",w="right-top",x="left-bottom";
qx.Mixin.define(I,{properties:{position:{check:[D,A,p,m,H,x,w,z],init:p,themeable:true},placeMethod:{check:[J,q],init:q,themeable:true},domMove:{check:n,init:false},placementModeX:{check:[s,v,r],init:v,themeable:true},placementModeY:{check:[s,v,r],init:v,themeable:true},offsetLeft:{check:t,init:0,themeable:true},offsetTop:{check:t,init:0,themeable:true},offsetRight:{check:t,init:0,themeable:true},offsetBottom:{check:t,init:0,themeable:true},offset:{group:[y,G,B,E],mode:F,themeable:true}},members:{__gM:null,getLayoutLocation:function(g){var j,i,k,top;
i=g.getBounds();
k=i.left;
top=i.top;
var l=i;
g=g.getLayoutParent();

while(g&&!g.isRootWidget()){i=g.getBounds();
k+=i.left;
top+=i.top;
j=g.getInsets();
k+=j.left;
top+=j.top;
g=g.getLayoutParent();
}if(g.isRootWidget()){var h=g.getContainerLocation();

if(h){k+=h.left;
top+=h.top;
}}return {left:k,top:top,right:k+l.width,bottom:top+l.height};
},moveTo:function(V,top){if(this.getDomMove()){this.setDomPosition(V,top);
}else{this.setLayoutProperties({left:V,top:top});
}},placeToWidget:function(P,Q){if(Q){this.__gM=qx.lang.Function.bind(this.placeToWidget,this,P,false);
qx.event.Idle.getInstance().addListener(u,this.__gM);
this.addListener(o,function(){if(this.__gM){qx.event.Idle.getInstance().removeListener(u,this.__gM);
this.__gM=null;
}},this);
}var R=P.getContainerLocation()||this.getLayoutLocation(P);
this.__gO(R);
},placeToMouse:function(event){var f=event.getDocumentLeft();
var top=event.getDocumentTop();
var e={left:f,top:top,right:f,bottom:top};
this.__gO(e);
},placeToElement:function(S,T){var location=qx.bom.element.Location.get(S);
var U={left:location.left,top:location.top,right:location.left+S.offsetWidth,bottom:location.top+S.offsetHeight};
if(T){this.__gM=qx.lang.Function.bind(this.placeToElement,this,S,false);
qx.event.Idle.getInstance().addListener(u,this.__gM);
this.addListener(o,function(){if(this.__gM){qx.event.Idle.getInstance().removeListener(u,this.__gM);
this.__gM=null;
}},this);
}this.__gO(U);
},placeToPoint:function(N){var O={left:N.left,top:N.top,right:N.left,bottom:N.top};
this.__gO(O);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__gN:function(K){var L=null;

if(this._computePlacementSize){var L=this._computePlacementSize();
}else if(this.isVisible()){var L=this.getBounds();
}
if(L==null){this.addListenerOnce(C,function(){this.__gN(K);
},this);
}else{K.call(this,L);
}},__gO:function(M){this.__gN(function(c){var d=qx.util.placement.Placement.compute(c,this.getLayoutParent().getBounds(),M,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(d.left,d.top);
});
},setSmart:function(W){{};
var X=W?v:s;
this.set({placementModeX:X,placementModeY:X});
},getSmart:function(){{};
var a=this.getPlacementModeX()==v?true:false;
var b=this.getPlacementModeY()==v?true:false;
return a&&b;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__gM){qx.event.Idle.getInstance().removeListener(u,this.__gM);
}}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(i){arguments.callee.base.call(this,i);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(f,g){arguments.callee.base.call(this,f,g);
var h=qx.ui.popup.Manager.getInstance();
f===d?h.add(this):h.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(o,p){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(o!=null){this.setLabel(o);
}
if(p!=null){this.setIcon(p);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(m){var n;

switch(m){case l:n=new qx.ui.basic.Atom;
this._add(n);
break;
}return n||arguments.callee.base.call(this,m);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(t,u){var v=this.getChildControl(l);
t==null?v.resetIcon:v.setIcon(t);
},_applyLabel:function(w,x){var y=this.getChildControl(l);
w==null?y.resetLabel():y.setLabel(w);
},_applyRich:function(q,r){var s=this.getChildControl(l);
s.setRich(q);
}}});
})();
(function(){var l="qx.ui.core.queue.Layout",k="layout";
qx.Class.define(l,{statics:{__gj:{},remove:function(m){delete this.__gj[m.$$hash];
},add:function(j){this.__gj[j.$$hash]=j;
qx.ui.core.queue.Manager.scheduleFlush(k);
},flush:function(){var x=this.__gm();
for(var i=x.length-1;i>=0;i--){var y=x[i];
if(y.hasValidLayout()){continue;
}if(y.isRootWidget()&&!y.hasUserBounds()){var A=y.getSizeHint();
y.renderLayout(0,0,A.width,A.height);
}else{var z=y.getBounds();
y.renderLayout(z.left,z.top,z.width,z.height);
}}},getNestingLevel:function(n){var o=this.__gl;
var q=0;
var parent=n;
while(true){if(o[parent.$$hash]!=null){q+=o[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
q+=1;
}var p=q;

while(n&&n!==parent){o[n.$$hash]=p--;
n=n.$$parent;
}return q;
},__gk:function(){var w=qx.ui.core.queue.Visibility;
this.__gl={};
var v=[];
var u=this.__gj;
var r,t;

for(var s in u){r=u[s];

if(w.isVisible(r)){t=this.getNestingLevel(r);
if(!v[t]){v[t]={};
}v[t][s]=r;
delete u[s];
}}return v;
},__gm:function(){var d=[];
var f=this.__gk();

for(var c=f.length-1;c>=0;c--){if(!f[c]){continue;
}
for(var b in f[c]){var a=f[c][b];
if(c==0||a.isRootWidget()||a.hasUserBounds()){d.push(a);
a.invalidateLayoutCache();
continue;
}var h=a.getSizeHint(false);

if(h){a.invalidateLayoutCache();
var e=a.getSizeHint();
var g=(!a.getBounds()||h.minWidth!==e.minWidth||h.width!==e.width||h.maxWidth!==e.maxWidth||h.minHeight!==e.minHeight||h.height!==e.height||h.maxHeight!==e.maxHeight);
}else{g=true;
}
if(g){var parent=a.getLayoutParent();

if(!f[c-1]){f[c-1]={};
}f[c-1][parent.$$hash]=parent;
}else{d.push(a);
}}}return d;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this.__iG=g;
this.__iH=g.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__iG:null,__iH:null,canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(i,j,k){}},destruct:function(){this.__iG=this.__iH=null;
},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var f="qx.util.DeferredCallManager",e="singleton";
qx.Class.define(f,{extend:qx.core.Object,type:e,construct:function(){this.__eT={};
this.__eU=qx.lang.Function.bind(this.__eY,this);
this.__eV=false;
},members:{__eW:null,__eX:null,__eT:null,__eV:null,__eU:null,schedule:function(a){if(this.__eW==null){this.__eW=window.setTimeout(this.__eU,0);
}var b=a.toHashCode();
if(this.__eX&&this.__eX[b]){return;
}this.__eT[b]=a;
this.__eV=true;
},cancel:function(c){var d=c.toHashCode();
if(this.__eX&&this.__eX[d]){this.__eX[d]=null;
return;
}delete this.__eT[d];
if(qx.lang.Object.isEmpty(this.__eT)&&this.__eW!=null){window.clearTimeout(this.__eW);
this.__eW=null;
}},__eY:qx.event.GlobalError.observeMethod(function(){this.__eW=null;
while(this.__eV){this.__eX=qx.lang.Object.clone(this.__eT);
this.__eT={};
this.__eV=false;

for(var h in this.__eX){var g=this.__eX[h];

if(g){this.__eX[h]=null;
g.call();
}}}this.__eX=null;
})},destruct:function(){if(this.__eW!=null){window.clearTimeout(this.__eW);
}this.__eU=this.__eT=null;
}});
})();
(function(){var c="qx.util.DeferredCall";
qx.Class.define(c,{extend:qx.core.Object,construct:function(d,e){arguments.callee.base.call(this);
this.__gg=d;
this.__gh=e||null;
this.__gi=qx.util.DeferredCallManager.getInstance();
},members:{__gg:null,__gh:null,__gi:null,cancel:function(){this.__gi.cancel(this);
},schedule:function(){this.__gi.schedule(this);
},call:function(){this.__gh?this.__gg.apply(this.__gh):this.__gg();
}},destruct:function(a,b){this.cancel();
this.__gh=this.__gg=this.__gi=null;
}});
})();
(function(){var bn="element",bm="qx.client",bl="div",bk="",bj="mshtml",bi="none",bh="scroll",bg="qx.html.Element",bf="|capture|",be="activate",bD="blur",bC="deactivate",bB="userSelect",bA="__cD",bz="capture",by="visible",bx="releaseCapture",bw="|bubble|",bv="qxSelectable",bu="tabIndex",bs="off",bt="focus",bq="normal",br="webkit",bo="hidden",bp="on";
qx.Class.define(bg,{extend:qx.core.Object,construct:function(dO){arguments.callee.base.call(this);
this.__ch=dO||bl;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__ci:{},_scheduleFlush:function(dN){qx.html.Element.__cP.schedule();
},flush:function(){var dE;
{};
var dw=this.__cj();
var dv=dw.getFocus();

if(dv&&this.__cn(dv)){dw.blur(dv);
}var dL=dw.getActive();

if(dL&&this.__cn(dL)){qx.bom.Element.deactivate(dL);
}var dz=this.__cl();

if(dz&&this.__cn(dz)){qx.bom.Element.releaseCapture(dz);
}var dF=[];
var dG=this._modified;

for(var dD in dG){dE=dG[dD];
if(dE.__cH()){if(dE.__co&&qx.dom.Hierarchy.isRendered(dE.__co)){dF.push(dE);
}else{{};
dE.__cG();
}delete dG[dD];
}}
for(var i=0,l=dF.length;i<l;i++){dE=dF[i];
{};
dE.__cG();
}var dB=this._visibility;

for(var dD in dB){dE=dB[dD];
{};
dE.__co.style.display=dE.__cr?bk:bi;
if(qx.core.Variant.isSet(bm,bj)){if(!(document.documentMode>=8)){dE.__co.style.visibility=dE.__cr?by:bo;
}}delete dB[dD];
}var scroll=this._scroll;

for(var dD in scroll){dE=scroll[dD];
var dM=dE.__co;

if(dM&&dM.offsetWidth){var dy=true;
if(dE.__cu!=null){dE.__co.scrollLeft=dE.__cu;
delete dE.__cu;
}if(dE.__cv!=null){dE.__co.scrollTop=dE.__cv;
delete dE.__cv;
}var dI=dE.__cs;

if(dI!=null){var dC=dI.element.getDomElement();

if(dC&&dC.offsetWidth){qx.bom.element.Scroll.intoViewX(dC,dM,dI.align);
delete dE.__cs;
}else{dy=false;
}}var dJ=dE.__ct;

if(dJ!=null){var dC=dJ.element.getDomElement();

if(dC&&dC.offsetWidth){qx.bom.element.Scroll.intoViewY(dC,dM,dJ.align);
delete dE.__ct;
}else{dy=false;
}}if(dy){delete scroll[dD];
}}}var dx={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var dK=this._actions[i];
var dH=dK.element.__co;

if(!dH||!dx[dK.type]&&!dK.element.__cH()){continue;
}var dA=dK.args;
dA.unshift(dH);
qx.bom.Element[dK.type].apply(qx.bom.Element,dA);
}this._actions=[];
for(var dD in this.__ci){var du=this.__ci[dD];
var dM=du.element.__co;

if(dM){qx.bom.Selection.set(dM,du.start,du.end);
delete this.__ci[dD];
}}qx.event.handler.Appear.refresh();
},__cj:function(){if(!this.__ck){var cw=qx.event.Registration.getManager(window);
this.__ck=cw.getHandler(qx.event.handler.Focus);
}return this.__ck;
},__cl:function(){if(!this.__cm){var cV=qx.event.Registration.getManager(window);
this.__cm=cV.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__cm.getCaptureElement();
},__cn:function(q){var r=qx.core.ObjectRegistry.fromHashCode(q.$$element);
return r&&!r.__cH();
}},members:{__ch:null,__co:null,__cp:false,__cq:true,__cr:true,__cs:null,__ct:null,__cu:null,__cv:null,__cw:null,__cx:null,__cy:null,__cz:null,__cA:null,__cB:null,__cC:null,__cD:null,__cE:null,__cF:null,_scheduleChildrenUpdate:function(){if(this.__cE){return;
}this.__cE=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bn);
},_createDomElement:function(){return qx.bom.Element.create(this.__ch);
},__cG:function(){{};
var cc=this.__cD;

if(cc){var length=cc.length;
var cd;

for(var i=0;i<length;i++){cd=cc[i];

if(cd.__cr&&cd.__cq&&!cd.__co){cd.__cG();
}}}
if(!this.__co){this.__co=this._createDomElement();
this.__co.$$element=this.$$hash;
this._copyData(false);

if(cc&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__cE){this._syncChildren();
}}delete this.__cE;
},_insertChildren:function(){var bb=this.__cD;
var length=bb.length;
var bd;

if(length>2){var bc=document.createDocumentFragment();

for(var i=0;i<length;i++){bd=bb[i];

if(bd.__co&&bd.__cq){bc.appendChild(bd.__co);
}}this.__co.appendChild(bc);
}else{var bc=this.__co;

for(var i=0;i<length;i++){bd=bb[i];

if(bd.__co&&bd.__cq){bc.appendChild(bd.__co);
}}}},_syncChildren:function(){var cP;
var cU=qx.core.ObjectRegistry;
var cL=this.__cD;
var cS=cL.length;
var cM;
var cQ;
var cO=this.__co;
var cR=cO.childNodes;
var cN=0;
var cT;
{};
for(var i=cR.length-1;i>=0;i--){cT=cR[i];
cQ=cU.fromHashCode(cT.$$element);

if(!cQ||!cQ.__cq||cQ.__cF!==this){cO.removeChild(cT);
{};
}}for(var i=0;i<cS;i++){cM=cL[i];
if(cM.__cq){cQ=cM.__co;
cT=cR[cN];

if(!cQ){continue;
}if(cQ!=cT){if(cT){cO.insertBefore(cQ,cT);
}else{cO.appendChild(cQ);
}{};
}cN++;
}}{};
},_copyData:function(u){var A=this.__co;
var z=this.__cA;

if(z){var v=qx.bom.element.Attribute;

for(var B in z){v.set(A,B,z[B]);
}}var z=this.__cz;

if(z){var w=qx.bom.element.Style;

if(u){w.setStyles(A,z);
}else{w.setCss(A,w.compile(z));
}}var z=this.__cB;

if(z){for(var B in z){this._applyProperty(B,z[B]);
}}var z=this.__cC;

if(z){qx.event.Registration.getManager(A).importListeners(A,z);
delete this.__cC;
}},_syncData:function(){var dc=this.__co;
var da=qx.bom.element.Attribute;
var cX=qx.bom.element.Style;
var cY=this.__cx;

if(cY){var df=this.__cA;

if(df){var dd;

for(var de in cY){dd=df[de];

if(dd!==undefined){da.set(dc,de,dd);
}else{da.reset(dc,de);
}}}this.__cx=null;
}var cY=this.__cw;

if(cY){var df=this.__cz;

if(df){var cW={};

for(var de in cY){cW[de]=df[de];
}cX.setStyles(dc,cW);
}this.__cw=null;
}var cY=this.__cy;

if(cY){var df=this.__cB;

if(df){var dd;

for(var de in cY){this._applyProperty(de,df[de]);
}}this.__cy=null;
}},__cH:function(){var bS=this;
while(bS){if(bS.__cp){return true;
}
if(!bS.__cq||!bS.__cr){return false;
}bS=bS.__cF;
}return false;
},__cI:function(bT){if(bT.__cF===this){throw new Error("Child is already in: "+bT);
}
if(bT.__cp){throw new Error("Root elements could not be inserted into other ones.");
}if(bT.__cF){bT.__cF.remove(bT);
}bT.__cF=this;
if(!this.__cD){this.__cD=[];
}if(this.__co){this._scheduleChildrenUpdate();
}},__cJ:function(di){if(di.__cF!==this){throw new Error("Has no child: "+di);
}if(this.__co){this._scheduleChildrenUpdate();
}delete di.__cF;
},__cK:function(H){if(H.__cF!==this){throw new Error("Has no child: "+H);
}if(this.__co){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__cD||null;
},getChild:function(W){var X=this.__cD;
return X&&X[W]||null;
},hasChildren:function(){var s=this.__cD;
return s&&s[0]!==undefined;
},indexOf:function(Y){var ba=this.__cD;
return ba?ba.indexOf(Y):-1;
},hasChild:function(dq){var dr=this.__cD;
return dr&&dr.indexOf(dq)!==-1;
},add:function(dn){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__cI(arguments[i]);
}this.__cD.push.apply(this.__cD,arguments);
}else{this.__cI(dn);
this.__cD.push(dn);
}return this;
},addAt:function(cA,cB){this.__cI(cA);
qx.lang.Array.insertAt(this.__cD,cA,cB);
return this;
},remove:function(cE){var cF=this.__cD;

if(!cF){return;
}
if(arguments[1]){var cG;

for(var i=0,l=arguments.length;i<l;i++){cG=arguments[i];
this.__cJ(cG);
qx.lang.Array.remove(cF,cG);
}}else{this.__cJ(cE);
qx.lang.Array.remove(cF,cE);
}return this;
},removeAt:function(T){var U=this.__cD;

if(!U){throw new Error("Has no children!");
}var V=U[T];

if(!V){throw new Error("Has no child at this position!");
}this.__cJ(V);
qx.lang.Array.removeAt(this.__cD,T);
return this;
},removeAll:function(){var cp=this.__cD;

if(cp){for(var i=0,l=cp.length;i<l;i++){this.__cJ(cp[i]);
}cp.length=0;
}return this;
},getParent:function(){return this.__cF||null;
},insertInto:function(parent,ck){parent.__cI(this);

if(ck==null){parent.__cD.push(this);
}else{qx.lang.Array.insertAt(this.__cD,this,ck);
}return this;
},insertBefore:function(cq){var parent=cq.__cF;
parent.__cI(this);
qx.lang.Array.insertBefore(parent.__cD,this,cq);
return this;
},insertAfter:function(cK){var parent=cK.__cF;
parent.__cI(this);
qx.lang.Array.insertAfter(parent.__cD,this,cK);
return this;
},moveTo:function(ct){var parent=this.__cF;
parent.__cK(this);
var cu=parent.__cD.indexOf(this);

if(cu===ct){throw new Error("Could not move to same index!");
}else if(cu<ct){ct--;
}qx.lang.Array.removeAt(parent.__cD,cu);
qx.lang.Array.insertAt(parent.__cD,this,ct);
return this;
},moveBefore:function(ds){var parent=this.__cF;
return this.moveTo(parent.__cD.indexOf(ds));
},moveAfter:function(cj){var parent=this.__cF;
return this.moveTo(parent.__cD.indexOf(cj)+1);
},free:function(){var parent=this.__cF;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__cD){return;
}parent.__cJ(this);
qx.lang.Array.remove(parent.__cD,this);
return this;
},getDomElement:function(){return this.__co||null;
},getNodeName:function(){return this.__ch;
},setNodeName:function(name){this.__ch=name;
},setRoot:function(t){this.__cp=t;
},useMarkup:function(bY){if(this.__co){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(bm,bj)){var ca=document.createElement(bl);
}else{var ca=qx.html.Element.__cL;

if(!ca){ca=qx.html.Element.__cL=document.createElement(bl);
}}ca.innerHTML=bY;
this.__co=ca.firstChild;
this.__co.$$element=this.$$hash;
this._copyData(true);
return this.__co;
},useElement:function(cJ){if(this.__co){throw new Error("Could not overwrite existing element!");
}this.__co=cJ;
this.__co.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var bR=this.getAttribute(bu);

if(bR>=1){return true;
}var bQ=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bR>=0&&bQ[this.__ch]){return true;
}return false;
},setSelectable:function(dt){this.setAttribute(bv,dt?bp:bs);
if(qx.core.Variant.isSet(bm,br)){this.setStyle(bB,dt?bq:bi);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__ch];
},include:function(){if(this.__cq){return;
}delete this.__cq;

if(this.__cF){this.__cF._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__cq){return;
}this.__cq=false;

if(this.__cF){this.__cF._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__cq===true;
},show:function(){if(this.__cr){return;
}
if(this.__co){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bn);
}if(this.__cF){this.__cF._scheduleChildrenUpdate();
}delete this.__cr;
},hide:function(){if(!this.__cr){return;
}
if(this.__co){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bn);
}this.__cr=false;
},isVisible:function(){return this.__cr===true;
},scrollChildIntoViewX:function(ce,cf,cg){var ch=this.__co;
var ci=ce.getDomElement();

if(cg!==false&&ch&&ch.offsetWidth&&ci&&ci.offsetWidth){qx.bom.element.Scroll.intoViewX(ci,ch,cf);
}else{this.__cs={element:ce,align:cf};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bn);
}delete this.__cu;
},scrollChildIntoViewY:function(k,m,n){var o=this.__co;
var p=k.getDomElement();

if(n!==false&&o&&o.offsetWidth&&p&&p.offsetWidth){qx.bom.element.Scroll.intoViewY(p,o,m);
}else{this.__ct={element:k,align:m};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bn);
}delete this.__cv;
},scrollToX:function(x,cC){var cD=this.__co;

if(cC!==true&&cD&&cD.offsetWidth){cD.scrollLeft=x;
}else{this.__cu=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bn);
}delete this.__cs;
},getScrollX:function(){var cl=this.__co;

if(cl){return cl.scrollLeft;
}return this.__cu||0;
},scrollToY:function(y,cH){var cI=this.__co;

if(cH!==true&&cI&&cI.offsetWidth){cI.scrollTop=y;
}else{this.__cv=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bn);
}delete this.__ct;
},getScrollY:function(){var dp=this.__co;

if(dp){return dp.scrollTop;
}return this.__cv||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(bh,this.__cN,this);
},enableScrolling:function(){this.removeListener(bh,this.__cN,this);
},__cM:null,__cN:function(e){if(!this.__cM){this.__cM=true;
this.__co.scrollTop=0;
this.__co.scrollLeft=0;
delete this.__cM;
}},getTextSelection:function(){var C=this.__co;

if(C){return qx.bom.Selection.get(C);
}return null;
},getTextSelectionLength:function(){var bO=this.__co;

if(bO){return qx.bom.Selection.getLength(bO);
}return null;
},getTextSelectionStart:function(){var bF=this.__co;

if(bF){return qx.bom.Selection.getStart(bF);
}return null;
},getTextSelectionEnd:function(){var bP=this.__co;

if(bP){return qx.bom.Selection.getEnd(bP);
}return null;
},setTextSelection:function(dk,dl){var dm=this.__co;

if(dm){qx.bom.Selection.set(dm,dk,dl);
return;
}qx.html.Element.__ci[this.toHashCode()]={element:this,start:dk,end:dl};
qx.html.Element._scheduleFlush(bn);
},clearTextSelection:function(){var cb=this.__co;

if(cb){qx.bom.Selection.clear(cb);
}delete qx.html.Element.__ci[this.toHashCode()];
},__cO:function(bV,bW){var bX=qx.html.Element._actions;
bX.push({type:bV,element:this,args:bW||[]});
qx.html.Element._scheduleFlush(bn);
},focus:function(){this.__cO(bt);
},blur:function(){this.__cO(bD);
},activate:function(){this.__cO(be);
},deactivate:function(){this.__cO(bC);
},capture:function(D){this.__cO(bz,[D!==false]);
},releaseCapture:function(){this.__cO(bx);
},setStyle:function(bG,bH,bI){if(!this.__cz){this.__cz={};
}
if(this.__cz[bG]==bH){return;
}
if(bH==null){delete this.__cz[bG];
}else{this.__cz[bG]=bH;
}if(this.__co){if(bI){qx.bom.element.Style.set(this.__co,bG,bH);
return this;
}if(!this.__cw){this.__cw={};
}this.__cw[bG]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bn);
}return this;
},setStyles:function(L,M){var N=qx.bom.element.Style;

if(!this.__cz){this.__cz={};
}
if(this.__co){if(!this.__cw){this.__cw={};
}
for(var P in L){var O=L[P];

if(this.__cz[P]==O){continue;
}
if(O==null){delete this.__cz[P];
}else{this.__cz[P]=O;
}if(M){N.set(this.__co,P,O);
continue;
}this.__cw[P]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bn);
}else{for(var P in L){var O=L[P];

if(this.__cz[P]==O){continue;
}
if(O==null){delete this.__cz[P];
}else{this.__cz[P]=O;
}}}return this;
},removeStyle:function(cr,cs){this.setStyle(cr,null,cs);
},getStyle:function(E){return this.__cz?this.__cz[E]:null;
},getAllStyles:function(){return this.__cz||null;
},setAttribute:function(cm,cn,co){if(!this.__cA){this.__cA={};
}
if(this.__cA[cm]==cn){return;
}
if(cn==null){delete this.__cA[cm];
}else{this.__cA[cm]=cn;
}if(this.__co){if(co){qx.bom.element.Attribute.set(this.__co,cm,cn);
return this;
}if(!this.__cx){this.__cx={};
}this.__cx[cm]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bn);
}return this;
},setAttributes:function(cx,cy){for(var cz in cx){this.setAttribute(cz,cx[cz],cy);
}return this;
},removeAttribute:function(dg,dh){this.setAttribute(dg,null,dh);
},getAttribute:function(bE){return this.__cA?this.__cA[bE]:null;
},_applyProperty:function(name,cv){},_setProperty:function(I,J,K){if(!this.__cB){this.__cB={};
}
if(this.__cB[I]==J){return;
}
if(J==null){delete this.__cB[I];
}else{this.__cB[I]=J;
}if(this.__co){if(K){this._applyProperty(I,J);
return this;
}if(!this.__cy){this.__cy={};
}this.__cy[I]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bn);
}return this;
},_removeProperty:function(F,G){this._setProperty(F,null,G);
},_getProperty:function(Q){var R=this.__cB;

if(!R){return null;
}var S=R[Q];
return S==null?null:S;
},addListener:function(dP,dQ,self,dR){var dS;

if(this.$$disposed){return null;
}{};

if(this.__co){return qx.event.Registration.addListener(this.__co,dP,dQ,self,dR);
}
if(!this.__cC){this.__cC={};
}
if(dR==null){dR=false;
}var dT=qx.event.Manager.getNextUniqueId();
var dU=dP+(dR?bf:bw)+dT;
this.__cC[dU]={type:dP,listener:dQ,self:self,capture:dR,unique:dT};
return dU;
},removeListener:function(b,c,self,d){var f;

if(this.$$disposed){return null;
}{};

if(this.__co){qx.event.Registration.removeListener(this.__co,b,c,self,d);
}else{var h=this.__cC;
var g;

if(d==null){d=false;
}
for(var j in h){g=h[j];
if(g.listener===c&&g.self===self&&g.capture===d&&g.type===b){delete h[j];
break;
}}}return this;
},removeListenerById:function(dj){if(this.$$disposed){return null;
}
if(this.__co){qx.event.Registration.removeListenerById(this.__co,dj);
}else{delete this.__cC[dj];
}return this;
},hasListener:function(bJ,bK){if(this.$$disposed){return false;
}
if(this.__co){return qx.event.Registration.hasListener(this.__co,bJ,bK);
}var bM=this.__cC;
var bL;

if(bK==null){bK=false;
}
for(var bN in bM){bL=bM[bN];
if(bL.capture===bK&&bL.type===bJ){return true;
}}return false;
}},defer:function(bU){bU.__cP=new qx.util.DeferredCall(bU.flush,bU);
},destruct:function(){var a=this.__co;

if(a){qx.event.Registration.getManager(a).removeAllListeners(a);
a.$$element=bk;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__cF;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(bA);
this.__cA=this.__cz=this.__cC=this.__cB=this.__cx=this.__cw=this.__cy=this.__co=this.__cF=this.__cs=this.__ct=null;
}});
})();
(function(){var c="qx.ui.core.queue.Manager",b="useraction";
qx.Class.define(c,{statics:{__js:false,__jt:{},__ju:0,MAX_RETRIES:10,scheduleFlush:function(g){var self=qx.ui.core.queue.Manager;
self.__jt[g]=true;

if(!self.__js){self.__jx.schedule();
self.__js=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__jv){return;
}self.__jv=true;
self.__jx.cancel();
var h=self.__jt;
self.__jw(function(){while(h.visibility||h.widget||h.appearance||h.layout||h.element){if(h.widget){delete h.widget;
qx.ui.core.queue.Widget.flush();
}
if(h.visibility){delete h.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(h.appearance){delete h.appearance;
qx.ui.core.queue.Appearance.flush();
}if(h.widget||h.visibility||h.appearance){continue;
}
if(h.layout){delete h.layout;
qx.ui.core.queue.Layout.flush();
}if(h.widget||h.visibility||h.appearance||h.layout){continue;
}
if(h.element){delete h.element;
qx.html.Element.flush();
}}},function(){self.__js=false;
});
self.__jw(function(){if(h.dispose){delete h.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__jv=false;
});
self.__ju=0;
},__jw:function(d,f){var self=qx.ui.core.queue.Manager;

try{d();
}catch(e){{};
self.__js=false;
self.__jv=false;
self.__ju+=1;

if(self.__ju<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__ju-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{f();
}}},defer:function(a){a.__jx=new qx.util.DeferredCall(a.flush);
qx.html.Element._scheduleFlush=a.scheduleFlush;
qx.event.Registration.addListener(window,b,a.flush);
}});
})();
(function(){var t="abstract",s="qx.event.dispatch.AbstractBubbling";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:t,construct:function(x){this._manager=x;
},members:{_getParent:function(u){throw new Error("Missing implementation");
},canDispatchEvent:function(v,event,w){return event.getBubbles();
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
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var U="keydown",T="qx.client",S="keypress",R="NumLock",Q="keyup",P="Enter",O="0",N="9",M="-",L="PageUp",cc="+",cb="PrintScreen",ca="gecko",bY="A",bX="Z",bW="Left",bV="F5",bU="Down",bT="Up",bS="F11",bc="F6",bd="useraction",ba="F3",bb="keyinput",X="Insert",Y="F8",V="End",W="/",bk="Delete",bl="*",bx="F1",bt="F4",bF="Home",bA="F2",bO="F12",bK="PageDown",bp="F7",bR="F9",bQ="F10",bP="Right",bo="text",br="Escape",bs="webkit",bv="5",by="3",bB="Meta",bH="7",bM="CapsLock",be="input",bf="Control",bq="Space",bE="Tab",bD="Shift",bC="Pause",bJ="Unidentified",bI="qx.event.handler.Keyboard",bz="mshtml",bG="mshtml|webkit",I="6",bL="off",bg="Apps",bh="4",bu="Alt",J="2",K="Scroll",bn="1",bi="8",bj="Win",bm="autoComplete",bw=",",bN="Backspace";
qx.Class.define(bI,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cD){arguments.callee.base.call(this);
this.__fJ=cD;
this.__fK=cD.getWindow();
if(qx.core.Variant.isSet(T,ca)){this.__fL=this.__fK;
}else{this.__fL=this.__fK.document.documentElement;
}this.__fM={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cC){if(this._identifierToKeyCodeMap[cC]){return true;
}
if(cC.length!=1){return false;
}
if(cC>=O&&cC<=N){return true;
}
if(cC>=bY&&cC<=bX){return true;
}
switch(cC){case cc:case M:case bl:case W:return true;
default:return false;
}}},members:{__fN:null,__fJ:null,__fK:null,__fL:null,__fM:null,__fO:null,__fP:null,__fQ:null,canHandleEvent:function(x,y){},registerEvent:function(cw,cx,cy){},unregisterEvent:function(p,q,r){},_fireInputEvent:function(A,B){var C=this.__fR();
if(C&&C.offsetWidth!=0){var event=qx.event.Registration.createEvent(bb,qx.event.type.KeyInput,[A,C,B]);
this.__fJ.dispatchEvent(C,event);
}if(this.__fK){qx.event.Registration.fireEvent(this.__fK,bd,qx.event.type.Data,[bb]);
}},_fireSequenceEvent:function(D,E,F){var G=this.__fR();
var H=D.keyCode;
var event=qx.event.Registration.createEvent(E,qx.event.type.KeySequence,[D,G,F]);
this.__fJ.dispatchEvent(G,event);
if(qx.core.Variant.isSet(T,bG)){if(E==U&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(H)&&!this._emulateKeyPress[H]){this._fireSequenceEvent(D,S,F);
}}}if(this.__fK){qx.event.Registration.fireEvent(this.__fK,bd,qx.event.type.Data,[E]);
}},__fR:function(){var i=this.__fJ.getHandler(qx.event.handler.Focus);
var j=i.getActive();
if(!j||j.offsetWidth==0){j=i.getFocus();
}if(!j||j.offsetWidth==0){j=this.__fJ.getWindow().document.body;
}return j;
},_initKeyObserver:function(){this.__fN=qx.lang.Function.listener(this.__fS,this);
this.__fQ=qx.lang.Function.listener(this.__fU,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fL,Q,this.__fN);
Event.addNativeListener(this.__fL,U,this.__fN);
Event.addNativeListener(this.__fL,S,this.__fQ);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fL,Q,this.__fN);
Event.removeNativeListener(this.__fL,U,this.__fN);
Event.removeNativeListener(this.__fL,S,this.__fQ);

for(var cF in (this.__fP||{})){var cE=this.__fP[cF];
Event.removeNativeListener(cE.target,S,cE.callback);
}delete (this.__fP);
},__fS:qx.event.GlobalError.observeMethod(qx.core.Variant.select(T,{"mshtml":function(e){e=window.event||e;
var h=e.keyCode;
var f=0;
var g=e.type;
if(!(this.__fM[h]==U&&g==U)){this._idealKeyHandler(h,f,g,e);
}if(g==U){if(this._isNonPrintableKeyCode(h)||this._emulateKeyPress[h]){this._idealKeyHandler(h,f,S,e);
}}this.__fM[h]=g;
},"gecko":function(cH){var cL=this._keyCodeFix[cH.keyCode]||cH.keyCode;
var cJ=0;
var cK=cH.type;
if(qx.bom.client.Platform.WIN){var cI=cL?this._keyCodeToIdentifier(cL):this._charCodeToIdentifier(cJ);

if(!(this.__fM[cI]==U&&cK==U)){this._idealKeyHandler(cL,cJ,cK,cH);
}this.__fM[cI]=cK;
}else{this._idealKeyHandler(cL,cJ,cK,cH);
}this.__fT(cH.target,cK,cL);
},"webkit":function(cn){var cq=0;
var co=0;
var cp=cn.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cp==Q||cp==U){cq=this._charCode2KeyCode[cn.charCode]||cn.keyCode;
}else{if(this._charCode2KeyCode[cn.charCode]){cq=this._charCode2KeyCode[cn.charCode];
}else{co=cn.charCode;
}}this._idealKeyHandler(cq,co,cp,cn);
}else{cq=cn.keyCode;
if(!(this.__fM[cq]==U&&cp==U)){this._idealKeyHandler(cq,co,cp,cn);
}if(cp==U){if(this._isNonPrintableKeyCode(cq)||this._emulateKeyPress[cq]){this._idealKeyHandler(cq,co,S,cn);
}}this.__fM[cq]=cp;
}},"opera":function(cr){this.__fO=cr.keyCode;
this._idealKeyHandler(cr.keyCode,0,cr.type,cr);
}})),__fT:qx.core.Variant.select(T,{"gecko":function(s,t,u){if(t===U&&(u==33||u==34||u==38||u==40)&&s.type==bo&&s.tagName.toLowerCase()===be&&s.getAttribute(bm)!==bL){if(!this.__fP){this.__fP={};
}var w=qx.core.ObjectRegistry.toHashCode(s);

if(this.__fP[w]){return;
}var self=this;
this.__fP[w]={target:s,callback:function(z){qx.bom.Event.stopPropagation(z);
self.__fU(z);
}};
var v=qx.event.GlobalError.observeMethod(this.__fP[w].callback);
qx.bom.Event.addNativeListener(s,S,v);
}},"default":null}),__fU:qx.event.GlobalError.observeMethod(qx.core.Variant.select(T,{"mshtml":function(d){d=window.event||d;

if(this._charCode2KeyCode[d.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[d.keyCode],0,d.type,d);
}else{this._idealKeyHandler(0,d.keyCode,d.type,d);
}},"gecko":function(k){var n=this._keyCodeFix[k.keyCode]||k.keyCode;
var l=k.charCode;
var m=k.type;
this._idealKeyHandler(n,l,m,k);
},"webkit":function(cs){if(qx.bom.client.Engine.VERSION<525.13){var cv=0;
var ct=0;
var cu=cs.type;

if(cu==Q||cu==U){cv=this._charCode2KeyCode[cs.charCode]||cs.keyCode;
}else{if(this._charCode2KeyCode[cs.charCode]){cv=this._charCode2KeyCode[cs.charCode];
}else{ct=cs.charCode;
}}this._idealKeyHandler(cv,ct,cu,cs);
}else{if(this._charCode2KeyCode[cs.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cs.keyCode],0,cs.type,cs);
}else{this._idealKeyHandler(0,cs.keyCode,cs.type,cs);
}}},"opera":function(a){var c=a.keyCode;
var b=a.type;
if(c!=this.__fO){this._idealKeyHandler(0,this.__fO,b,a);
}else{if(this._keyCodeToIdentifierMap[a.keyCode]){this._idealKeyHandler(a.keyCode,0,a.type,a);
}else{this._idealKeyHandler(0,a.keyCode,a.type,a);
}}}})),_idealKeyHandler:function(cd,ce,cf,cg){var ch;
if(cd||(!cd&&!ce)){ch=this._keyCodeToIdentifier(cd);
this._fireSequenceEvent(cg,cf,ch);
}else{ch=this._charCodeToIdentifier(ce);
this._fireSequenceEvent(cg,S,ch);
this._fireInputEvent(cg,ce);
}},_specialCharCodeMap:{8:bN,9:bE,13:P,27:br,32:bq},_emulateKeyPress:qx.core.Variant.select(T,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bD,17:bf,18:bu,20:bM,224:bB,37:bW,38:bT,39:bP,40:bU,33:L,34:bK,35:V,36:bF,45:X,46:bk,112:bx,113:bA,114:ba,115:bt,116:bV,117:bc,118:bp,119:Y,120:bR,121:bQ,122:bS,123:bO,144:R,44:cb,145:K,19:bC,91:bj,93:bg},_numpadToCharCode:{96:O.charCodeAt(0),97:bn.charCodeAt(0),98:J.charCodeAt(0),99:by.charCodeAt(0),100:bh.charCodeAt(0),101:bv.charCodeAt(0),102:I.charCodeAt(0),103:bH.charCodeAt(0),104:bi.charCodeAt(0),105:N.charCodeAt(0),106:bl.charCodeAt(0),107:cc.charCodeAt(0),109:M.charCodeAt(0),110:bw.charCodeAt(0),111:W.charCodeAt(0)},_charCodeA:bY.charCodeAt(0),_charCodeZ:bX.charCodeAt(0),_charCode0:O.charCodeAt(0),_charCode9:N.charCodeAt(0),_isNonPrintableKeyCode:function(o){return this._keyCodeToIdentifierMap[o]?true:false;
},_isIdentifiableKeyCode:function(ci){if(ci>=this._charCodeA&&ci<=this._charCodeZ){return true;
}if(ci>=this._charCode0&&ci<=this._charCode9){return true;
}if(this._specialCharCodeMap[ci]){return true;
}if(this._numpadToCharCode[ci]){return true;
}if(this._isNonPrintableKeyCode(ci)){return true;
}return false;
},_keyCodeToIdentifier:function(cA){if(this._isIdentifiableKeyCode(cA)){var cB=this._numpadToCharCode[cA];

if(cB){return String.fromCharCode(cB);
}return (this._keyCodeToIdentifierMap[cA]||this._specialCharCodeMap[cA]||String.fromCharCode(cA));
}else{return bJ;
}},_charCodeToIdentifier:function(cz){return this._specialCharCodeMap[cz]||String.fromCharCode(cz).toUpperCase();
},_identifierToKeyCode:function(cG){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cG]||cG.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__fO=this.__fJ=this.__fK=this.__fL=this.__fM=null;
},defer:function(cj,ck,cl){qx.event.Registration.addHandler(cj);
if(!cj._identifierToKeyCodeMap){cj._identifierToKeyCodeMap={};

for(var cm in ck._keyCodeToIdentifierMap){cj._identifierToKeyCodeMap[ck._keyCodeToIdentifierMap[cm]]=parseInt(cm,10);
}
for(var cm in ck._specialCharCodeMap){cj._identifierToKeyCodeMap[ck._specialCharCodeMap[cm]]=parseInt(cm,10);
}}
if(qx.core.Variant.isSet(T,bz)){ck._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(T,ca)){ck._keyCodeFix={12:ck._identifierToKeyCode(R)};
}else if(qx.core.Variant.isSet(T,bs)){if(qx.bom.client.Engine.VERSION<525.13){ck._charCode2KeyCode={63289:ck._identifierToKeyCode(R),63276:ck._identifierToKeyCode(L),63277:ck._identifierToKeyCode(bK),63275:ck._identifierToKeyCode(V),63273:ck._identifierToKeyCode(bF),63234:ck._identifierToKeyCode(bW),63232:ck._identifierToKeyCode(bT),63235:ck._identifierToKeyCode(bP),63233:ck._identifierToKeyCode(bU),63272:ck._identifierToKeyCode(bk),63302:ck._identifierToKeyCode(X),63236:ck._identifierToKeyCode(bx),63237:ck._identifierToKeyCode(bA),63238:ck._identifierToKeyCode(ba),63239:ck._identifierToKeyCode(bt),63240:ck._identifierToKeyCode(bV),63241:ck._identifierToKeyCode(bc),63242:ck._identifierToKeyCode(bp),63243:ck._identifierToKeyCode(Y),63244:ck._identifierToKeyCode(bR),63245:ck._identifierToKeyCode(bQ),63246:ck._identifierToKeyCode(bS),63247:ck._identifierToKeyCode(bO),63248:ck._identifierToKeyCode(cb),3:ck._identifierToKeyCode(P),12:ck._identifierToKeyCode(R),13:ck._identifierToKeyCode(P)};
}else{ck._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var q="qx.client",p="mouseup",o="click",n="mousedown",m="contextmenu",l="mousewheel",k="dblclick",j="mshtml",i="mouseover",h="mouseout",c="DOMMouseScroll",g="mousemove",f="on",b="mshtml|webkit|opera",a="useraction",e="gecko|webkit",d="qx.event.handler.Mouse";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(t){arguments.callee.base.call(this);
this.__dE=t;
this.__dF=t.getWindow();
this.__dG=this.__dF.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dH:null,__dI:null,__dJ:null,__dK:null,__dL:null,__dE:null,__dF:null,__dG:null,canHandleEvent:function(T,U){},registerEvent:qx.bom.client.System.IPHONE?
function(A,B,C){A[f+B]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(E,F,G){E[f+F]=undefined;
}:qx.lang.Function.returnNull,__dM:function(H,I,J){if(!J){J=H.target||H.srcElement;
}if(J&&J.nodeType){qx.event.Registration.fireEvent(J,I||H.type,I==l?qx.event.type.MouseWheel:qx.event.type.Mouse,[H,J,null,true,true]);
}qx.event.Registration.fireEvent(this.__dF,a,qx.event.type.Data,[I||H.type]);
},_initButtonObserver:function(){this.__dH=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,n,this.__dH);
Event.addNativeListener(this.__dG,p,this.__dH);
Event.addNativeListener(this.__dG,o,this.__dH);
Event.addNativeListener(this.__dG,k,this.__dH);
Event.addNativeListener(this.__dG,m,this.__dH);
},_initMoveObserver:function(){this.__dI=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,g,this.__dI);
Event.addNativeListener(this.__dG,i,this.__dI);
Event.addNativeListener(this.__dG,h,this.__dI);
},_initWheelObserver:function(){this.__dJ=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var r=qx.core.Variant.isSet(q,b)?l:c;
var s=qx.core.Variant.isSet(q,j)?this.__dG:this.__dF;
Event.addNativeListener(s,r,this.__dJ);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,n,this.__dH);
Event.removeNativeListener(this.__dG,p,this.__dH);
Event.removeNativeListener(this.__dG,o,this.__dH);
Event.removeNativeListener(this.__dG,k,this.__dH);
Event.removeNativeListener(this.__dG,m,this.__dH);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,g,this.__dI);
Event.removeNativeListener(this.__dG,i,this.__dI);
Event.removeNativeListener(this.__dG,h,this.__dI);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var V=qx.core.Variant.isSet(q,b)?l:c;
var W=qx.core.Variant.isSet(q,j)?this.__dG:this.__dF;
Event.removeNativeListener(W,V,this.__dJ);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(D){this.__dM(D);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(u){var v=u.type;
var w=u.target||u.srcElement;
if(qx.core.Variant.isSet(q,e)){if(w&&w.nodeType==3){w=w.parentNode;
}}
if(this.__dN){this.__dN(u,v,w);
}
if(this.__dP){this.__dP(u,v,w);
}this.__dM(u,v,w);

if(this.__dO){this.__dO(u,v,w);
}
if(this.__dQ){this.__dQ(u,v,w);
}this.__dK=v;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(K){this.__dM(K,l);
}),__dN:qx.core.Variant.select(q,{"webkit":function(x,y,z){if(qx.bom.client.Engine.VERSION<530){if(y==m){this.__dM(x,p,z);
}}},"default":null}),__dO:qx.core.Variant.select(q,{"opera":function(L,M,N){if(M==p&&L.button==2){this.__dM(L,m,N);
}},"default":null}),__dP:qx.core.Variant.select(q,{"mshtml":function(X,Y,ba){if(Y==p&&this.__dK==o){this.__dM(X,n,ba);
}else if(Y==k){this.__dM(X,o,ba);
}},"default":null}),__dQ:qx.core.Variant.select(q,{"mshtml":null,"default":function(P,Q,R){switch(Q){case n:this.__dL=R;
break;
case p:if(R!==this.__dL){var S=qx.dom.Hierarchy.getCommonParent(R,this.__dL);
this.__dM(P,o,S);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dE=this.__dF=this.__dG=this.__dL=null;
},defer:function(O){qx.event.Registration.addHandler(O);
}});
})();
(function(){var b="qx.event.handler.Capture";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,d){},registerEvent:function(h,i,j){},unregisterEvent:function(e,f,g){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var o="alias",n="copy",m="blur",l="mouseout",k="keydown",j="Ctrl",i="Shift",h="mousemove",g="move",f="mouseover",E="Alt",D="keyup",C="mouseup",B="dragend",A="on",z="mousedown",y="qxDraggable",x="drag",w="drop",v="qxDroppable",t="qx.event.handler.DragDrop",u="droprequest",r="dragstart",s="dragchange",p="dragleave",q="dragover";
qx.Class.define(t,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(P){arguments.callee.base.call(this);
this.__hx=P;
this.__hy=P.getWindow().document.documentElement;
this.__hx.addListener(this.__hy,z,this._onMouseDown,this);
this.__hK();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__hx:null,__hy:null,__hz:null,__hA:null,__hB:null,__hC:null,__hD:null,__hE:null,__hF:null,__hG:null,__hH:false,__hI:0,__hJ:0,canHandleEvent:function(R,S){},registerEvent:function(bi,bj,bk){},unregisterEvent:function(b,c,d){},addType:function(a){this.__hB[a]=true;
},addAction:function(O){this.__hC[O]=true;
},supportsType:function(bb){return !!this.__hB[bb];
},supportsAction:function(bh){return !!this.__hC[bh];
},getData:function(N){if(!this.__hR||!this.__hz){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__hB[N]){throw new Error("Unsupported data type: "+N+"!");
}
if(!this.__hE[N]){this.__hF=N;
this.__hM(u,this.__hA,this.__hz,false);
}
if(!this.__hE[N]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__hE[N]||null;
},getCurrentAction:function(){return this.__hG;
},addData:function(G,H){this.__hE[G]=H;
},getCurrentType:function(){return this.__hF;
},__hK:function(){this.__hB={};
this.__hC={};
this.__hD={};
this.__hE={};
},__hL:function(){var bg=this.__hC;
var be=this.__hD;
var bf=null;

if(this.__hR){if(be.Shift&&be.Ctrl&&bg.alias){bf=o;
}else if(be.Shift&&be.Alt&&bg.copy){bf=n;
}else if(be.Shift&&bg.move){bf=g;
}else if(be.Alt&&bg.alias){bf=o;
}else if(be.Ctrl&&bg.copy){bf=n;
}else if(bg.move){bf=g;
}else if(bg.copy){bf=n;
}else if(bg.alias){bf=o;
}}
if(bf!=this.__hG){this.__hG=bf;
this.__hM(s,this.__hA,this.__hz,false);
}},__hM:function(T,U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(T,qx.event.type.Drag,[W,X]);

if(U!==V){Y.setRelatedTarget(V);
}return ba.dispatchEvent(U,Y);
},__hN:function(Q){while(Q&&Q.nodeType==1){if(Q.getAttribute(y)==A){return Q;
}Q=Q.parentNode;
}return null;
},__hO:function(F){while(F&&F.nodeType==1){if(F.getAttribute(v)==A){return F;
}F=F.parentNode;
}return null;
},__hP:function(){this.__hA=null;
this.__hx.removeListener(this.__hy,h,this._onMouseMove,this,true);
this.__hx.removeListener(this.__hy,C,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,m,this._onWindowBlur,this);
this.__hK();
},__hQ:function(){if(this.__hH){this.__hx.removeListener(this.__hy,f,this._onMouseOver,this,true);
this.__hx.removeListener(this.__hy,l,this._onMouseOut,this,true);
this.__hx.removeListener(this.__hy,k,this._onKeyDown,this,true);
this.__hx.removeListener(this.__hy,D,this._onKeyUp,this,true);
this.__hM(B,this.__hA,this.__hz,false);
this.__hH=false;
}this.__hR=false;
this.__hz=null;
this.__hP();
},__hR:false,_onWindowBlur:function(e){this.__hQ();
},_onKeyDown:function(e){var bc=e.getKeyIdentifier();

switch(bc){case E:case j:case i:if(!this.__hD[bc]){this.__hD[bc]=true;
this.__hL();
}}},_onKeyUp:function(e){var M=e.getKeyIdentifier();

switch(M){case E:case j:case i:if(this.__hD[M]){this.__hD[M]=false;
this.__hL();
}}},_onMouseDown:function(e){if(this.__hH){return;
}var I=this.__hN(e.getTarget());

if(I){this.__hI=e.getDocumentLeft();
this.__hJ=e.getDocumentTop();
this.__hA=I;
this.__hx.addListener(this.__hy,h,this._onMouseMove,this,true);
this.__hx.addListener(this.__hy,C,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,m,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__hR){this.__hM(w,this.__hz,this.__hA,false,e);
}if(this.__hH){e.stopPropagation();
}this.__hQ();
},_onMouseMove:function(e){if(this.__hH){if(!this.__hM(x,this.__hA,this.__hz,true,e)){this.__hQ();
}}else{if(Math.abs(e.getDocumentLeft()-this.__hI)>3||Math.abs(e.getDocumentTop()-this.__hJ)>3){if(this.__hM(r,this.__hA,this.__hz,true,e)){this.__hH=true;
this.__hx.addListener(this.__hy,f,this._onMouseOver,this,true);
this.__hx.addListener(this.__hy,l,this._onMouseOut,this,true);
this.__hx.addListener(this.__hy,k,this._onKeyDown,this,true);
this.__hx.addListener(this.__hy,D,this._onKeyUp,this,true);
var bd=this.__hD;
bd.Ctrl=e.isCtrlPressed();
bd.Shift=e.isShiftPressed();
bd.Alt=e.isAltPressed();
this.__hL();
}else{this.__hM(B,this.__hA,this.__hz,false);
this.__hP();
}}}},_onMouseOver:function(e){var bl=e.getTarget();
var bm=this.__hO(bl);

if(bm&&bm!=this.__hz){this.__hR=this.__hM(q,bm,this.__hA,true,e);
this.__hz=bm;
this.__hL();
}},_onMouseOut:function(e){var K=this.__hO(e.getTarget());
var J=this.__hO(e.getRelatedTarget());

if(K&&K!==J&&K==this.__hz){this.__hM(p,this.__hz,J,false,e);
this.__hz=null;
this.__hR=false;
qx.event.Timer.once(this.__hL,this,0);
}}},destruct:function(){this.__hA=this.__hz=this.__hx=this.__hy=this.__hB=this.__hC=this.__hD=this.__hE=null;
},defer:function(L){qx.event.Registration.addHandler(L);
}});
})();
(function(){var f="-",e="qx.event.handler.Element";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this._manager=g;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(h,i){},registerEvent:function(u,v,w){var z=qx.core.ObjectRegistry.toHashCode(u);
var x=z+f+v;
var y=qx.lang.Function.listener(this._onNative,this,x);
qx.bom.Event.addNativeListener(u,v,y);
this._registeredEvents[x]={element:u,type:v,listener:y};
},unregisterEvent:function(j,k,l){var o=this._registeredEvents;

if(!o){return;
}var p=qx.core.ObjectRegistry.toHashCode(j);
var m=p+f+k;
var n=this._registeredEvents[m];
qx.bom.Event.removeNativeListener(j,k,n.listener);
delete this._registeredEvents[m];
},_onNative:qx.event.GlobalError.observeMethod(function(q,r){var t=this._registeredEvents;

if(!t){return;
}var s=t[r];
qx.event.Registration.fireNonBubblingEvent(s.element,s.type,qx.event.type.Native,[q]);
})},destruct:function(){var b;
var c=this._registeredEvents;

for(var d in c){b=c[d];
qx.bom.Event.removeNativeListener(b.element,b.type,b.listener);
}this._manager=this._registeredEvents=null;
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var j="qx.event.handler.Appear",i="disappear",h="appear";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){arguments.callee.base.call(this);
this.__bE=k;
this.__bF={};
qx.event.handler.Appear.__bG[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__bG:{},refresh:function(){var a=this.__bG;

for(var b in a){a[b].refresh();
}}},members:{__bE:null,__bF:null,canHandleEvent:function(l,m){},registerEvent:function(t,u,v){var w=qx.core.ObjectRegistry.toHashCode(t)+u;
var x=this.__bF;

if(x&&!x[w]){x[w]=t;
t.$$displayed=t.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__bF;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var f=this.__bF;
var g;

for(var e in f){g=f[e];
var c=g.offsetWidth>0;

if((!!g.$$displayed)!==c){g.$$displayed=c;
var d=qx.event.Registration.createEvent(c?h:i);
this.__bE.dispatchEvent(g,d);
}}}},destruct:function(){this.__bE=this.__bF=null;
delete qx.event.handler.Appear.__bG[this.$$hash];
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var s="mshtml",r="",q="qx.client",p=">",o="<",n=" ",m="='",k="qx.bom.Element",h="div",g="' ",f="></";
qx.Class.define(k,{statics:{__iL:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,A,B){if(!B){B=window;
}
if(!name){throw new Error("The tag name is missing!");
}var D=this.__iL;
var C=r;

for(var F in A){if(D[F]){C+=F+m+A[F]+g;
}}var G;
if(C!=r){if(qx.bom.client.Engine.MSHTML){G=B.document.createElement(o+name+n+C+p);
}else{var E=B.document.createElement(h);
E.innerHTML=o+name+n+C+f+name+p;
G=E.firstChild;
}}else{G=B.document.createElement(name);
}
for(var F in A){if(!D[F]){qx.bom.element.Attribute.set(G,F,A[F]);
}}return G;
},empty:function(ba){return ba.innerHTML=r;
},addListener:function(H,I,J,self,K){return qx.event.Registration.addListener(H,I,J,self,K);
},removeListener:function(t,u,v,self,w){return qx.event.Registration.removeListener(t,u,v,self,w);
},removeListenerById:function(d,e){return qx.event.Registration.removeListenerById(d,e);
},hasListener:function(x,y,z){return qx.event.Registration.hasListener(x,y,z);
},focus:function(b){qx.event.Registration.getManager(b).getHandler(qx.event.handler.Focus).focus(b);
},blur:function(a){qx.event.Registration.getManager(a).getHandler(qx.event.handler.Focus).blur(a);
},activate:function(Y){qx.event.Registration.getManager(Y).getHandler(qx.event.handler.Focus).activate(Y);
},deactivate:function(c){qx.event.Registration.getManager(c).getHandler(qx.event.handler.Focus).deactivate(c);
},capture:function(bb,bc){qx.event.Registration.getManager(bb).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(bb,bc);
},releaseCapture:function(L){qx.event.Registration.getManager(L).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(L);
},clone:function(M,N){var Q;

if(N||(qx.core.Variant.isSet(q,s)&&!qx.xml.Document.isXmlDocument(M))){var U=qx.event.Registration.getManager(M);
var O=qx.dom.Hierarchy.getDescendants(M);
O.push(M);
}if(qx.core.Variant.isSet(q,s)){for(var i=0,l=O.length;i<l;i++){U.toggleAttachedEvents(O[i],false);
}}var Q=M.cloneNode(true);
if(qx.core.Variant.isSet(q,s)){for(var i=0,l=O.length;i<l;i++){U.toggleAttachedEvents(O[i],true);
}}if(N===true){var X=qx.dom.Hierarchy.getDescendants(Q);
X.push(Q);
var P,S,W,R;

for(var i=0,V=O.length;i<V;i++){W=O[i];
P=U.serializeListeners(W);

if(P.length>0){S=X[i];

for(var j=0,T=P.length;j<T;j++){R=P[j];
U.addListener(S,R.type,R.handler,R.self,R.capture);
}}}}return Q;
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
(function(){var f="qx.event.type.KeyInput";
qx.Class.define(f,{extend:qx.event.type.Dom,members:{init:function(c,d,e){arguments.callee.base.call(this,c,d,null,true,true);
this._charCode=e;
return this;
},clone:function(a){var b=arguments.callee.base.call(this,a);
b._charCode=this._charCode;
return b;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var d="qx.event.type.KeySequence";
qx.Class.define(d,{extend:qx.event.type.Dom,members:{init:function(a,b,c){arguments.callee.base.call(this,a,b,null,true,true);
this._identifier=c;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var E="qx.client",D="blur",C="focus",B="mousedown",A="on",z="mouseup",y="DOMFocusOut",x="DOMFocusIn",w="selectstart",v="onmousedown",bb="onfocusout",ba="onfocusin",Y="onmouseup",X="onselectstart",W="draggesture",V="gecko",U="qx.event.handler.Focus",T="_applyFocus",S="deactivate",R="textarea",L="qxIsRootPage",M="_applyActive",J="input",K="focusin",H="qxSelectable",I="tabIndex",F="off",G="activate",N="1",O="focusout",Q="qxKeepFocus",P="qxKeepActive";
qx.Class.define(U,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bw){arguments.callee.base.call(this);
this._manager=bw;
this._window=bw.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:M,nullable:true},focus:{apply:T,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__hU:null,__hV:null,__hW:null,__hX:null,__hY:null,__ia:null,__ib:null,__ic:null,__id:null,__ie:null,canHandleEvent:function(g,h){},registerEvent:function(bL,bM,bN){},unregisterEvent:function(j,k,l){},focus:function(u){try{u.focus();
}catch(bf){}this.setFocus(u);
this.setActive(u);
},activate:function(bO){this.setActive(bO);
},blur:function(bq){try{bq.blur();
}catch(f){}
if(this.getActive()===bq){this.resetActive();
}
if(this.getFocus()===bq){this.resetFocus();
}},deactivate:function(bj){if(this.getActive()===bj){this.resetActive();
}},tryActivate:function(bk){var bl=this.__it(bk);

if(bl){this.setActive(bl);
}},__if:function(o,p,q,r){var t=qx.event.Registration;
var s=t.createEvent(q,qx.event.type.Focus,[o,p,r]);
t.dispatchEvent(o,s);
},_windowFocused:true,__ig:function(){if(this._windowFocused){this._windowFocused=false;
this.__if(this._window,null,D,false);
}},__ih:function(){if(!this._windowFocused){this._windowFocused=true;
this.__if(this._window,null,C,false);
}},_initObserver:qx.core.Variant.select(E,{"gecko":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__hW=qx.lang.Function.listener(this.__im,this);
this.__hX=qx.lang.Function.listener(this.__il,this);
this.__hY=qx.lang.Function.listener(this.__ii,this);
this._document.addEventListener(B,this.__hU,true);
this._document.addEventListener(z,this.__hV,true);
this._window.addEventListener(C,this.__hW,true);
this._window.addEventListener(D,this.__hX,true);
this._window.addEventListener(W,this.__hY,true);
},"mshtml":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ib=qx.lang.Function.listener(this.__ij,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this.__ia=qx.lang.Function.listener(this.__iq,this);
this._document.attachEvent(v,this.__hU);
this._document.attachEvent(Y,this.__hV);
this._document.attachEvent(ba,this.__ib);
this._document.attachEvent(bb,this.__ic);
this._document.attachEvent(X,this.__ia);
},"webkit":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this.__hW=qx.lang.Function.listener(this.__im,this);
this.__hX=qx.lang.Function.listener(this.__il,this);
this.__ia=qx.lang.Function.listener(this.__iq,this);
this._document.addEventListener(B,this.__hU,true);
this._document.addEventListener(z,this.__hV,true);
this._document.addEventListener(w,this.__ia,false);
this._window.addEventListener(y,this.__ic,true);
this._window.addEventListener(C,this.__hW,true);
this._window.addEventListener(D,this.__hX,true);
},"opera":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ib=qx.lang.Function.listener(this.__ij,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this._document.addEventListener(B,this.__hU,true);
this._document.addEventListener(z,this.__hV,true);
this._window.addEventListener(x,this.__ib,true);
this._window.addEventListener(y,this.__ic,true);
}}),_stopObserver:qx.core.Variant.select(E,{"gecko":function(){this._document.removeEventListener(B,this.__hU,true);
this._document.removeEventListener(z,this.__hV,true);
this._window.removeEventListener(C,this.__hW,true);
this._window.removeEventListener(D,this.__hX,true);
this._window.removeEventListener(W,this.__hY,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,v,this.__hU);
qx.bom.Event.removeNativeListener(this._document,Y,this.__hV);
qx.bom.Event.removeNativeListener(this._document,ba,this.__ib);
qx.bom.Event.removeNativeListener(this._document,bb,this.__ic);
qx.bom.Event.removeNativeListener(this._document,X,this.__ia);
},"webkit":function(){this._document.removeEventListener(B,this.__hU,true);
this._document.removeEventListener(w,this.__ia,false);
this._window.removeEventListener(x,this.__ib,true);
this._window.removeEventListener(y,this.__ic,true);
this._window.removeEventListener(C,this.__hW,true);
this._window.removeEventListener(D,this.__hX,true);
},"opera":function(){this._document.removeEventListener(B,this.__hU,true);
this._window.removeEventListener(x,this.__ib,true);
this._window.removeEventListener(y,this.__ic,true);
this._window.removeEventListener(C,this.__hW,true);
this._window.removeEventListener(D,this.__hX,true);
}}),__ii:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"gecko":function(e){if(!this.__iu(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ij:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"mshtml":function(e){this.__ih();
var bE=e.srcElement;
var bD=this.__is(bE);

if(bD){this.setFocus(bD);
}this.tryActivate(bE);
},"opera":function(e){var bx=e.target;

if(bx==this._document||bx==this._window){this.__ih();

if(this.__id){this.setFocus(this.__id);
delete this.__id;
}
if(this.__ie){this.setActive(this.__ie);
delete this.__ie;
}}else{this.setFocus(bx);
this.tryActivate(bx);
if(!this.__iu(bx)){bx.selectionStart=0;
bx.selectionEnd=0;
}}},"default":null})),__ik:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"mshtml":function(e){if(!e.toElement){this.__ig();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bJ=e.target;

if(bJ===this.getFocus()){this.resetFocus();
}
if(bJ===this.getActive()){this.resetActive();
}},"opera":function(e){var i=e.target;

if(i==this._document){this.__ig();
this.__id=this.getFocus();
this.__ie=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(i===this.getFocus()){this.resetFocus();
}
if(i===this.getActive()){this.resetActive();
}}},"default":null})),__il:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__ig();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__ig();
this.__id=this.getFocus();
this.__ie=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__im:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"gecko":function(e){var b=e.target;

if(b===this._window||b===this._document){this.__ih();
b=this._body;
}this.setFocus(b);
this.tryActivate(b);
},"webkit":function(e){var be=e.target;

if(be===this._window||be===this._document){this.__ih();

if(this.__id){this.setFocus(this.__id);
delete this.__id;
}
if(this.__ie){this.setActive(this.__ie);
delete this.__ie;
}}else{this.setFocus(be);
this.tryActivate(be);
}},"default":null})),__in:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"gecko":function(e){var bo=e.target;
var bm=this.__is(bo);
var bn=this.__iu(bo);

if(!bn){qx.bom.Event.preventDefault(e);
if(bm){if(qx.core.Variant.isSet(E,V)){var bp=qx.bom.element.Attribute.get(bm,L)===N;

if(!bp){bm.focus();
}}else{bm.focus();
}}}else if(!bm){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bz=e.srcElement;
var by=this.__is(bz);

if(by){if(!this.__iu(bz)){bz.unselectable=A;
try{document.selection.empty();
}catch(e){}try{by.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__iu(bz)){bz.unselectable=A;
}}},"webkit":function(e){var n=e.target;
var m=this.__is(n);

if(m){this.setFocus(m);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bv=e.target;
var bt=this.__is(bv);

if(!this.__iu(bv)){qx.bom.Event.preventDefault(e);
if(bt){var bu=this.getFocus();

if(bu&&bu.selectionEnd){bu.selectionStart=0;
bu.selectionEnd=0;
bu.blur();
}if(bt){this.setFocus(bt);
}}}else if(bt){this.setFocus(bt);
}},"default":null})),__io:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"mshtml":function(e){var bK=e.srcElement;

if(bK.unselectable){bK.unselectable=F;
}this.tryActivate(this.__ip(bK));
},"gecko":function(e){var bA=e.target;

while(bA&&bA.offsetWidth===undefined){bA=bA.parentNode;
}
if(bA){this.tryActivate(bA);
}},"webkit|opera":function(e){this.tryActivate(this.__ip(e.target));
},"default":null})),__ip:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"mshtml|webkit":function(br){var bs=this.getFocus();

if(bs&&br!=bs&&(bs.nodeName.toLowerCase()===J||bs.nodeName.toLowerCase()===R)){br=bs;
}return br;
},"default":function(bc){return bc;
}})),__iq:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"mshtml|webkit":function(e){var bd=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__iu(bd)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ir:function(bP){var bQ=qx.bom.element.Attribute.get(bP,I);

if(bQ>=1){return true;
}var bR=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bQ>=0&&bR[bP.tagName]){return true;
}return false;
},__is:function(a){while(a&&a.nodeType===1){if(a.getAttribute(Q)==A){return null;
}
if(this.__ir(a)){return a;
}a=a.parentNode;
}return this._body;
},__it:function(bB){var bC=bB;

while(bB&&bB.nodeType===1){if(bB.getAttribute(P)==A){return null;
}bB=bB.parentNode;
}return bC;
},__iu:function(c){while(c&&c.nodeType===1){var d=c.getAttribute(H);

if(d!=null){return d===A;
}c=c.parentNode;
}return true;
},_applyActive:function(bF,bG){if(bG){this.__if(bG,bF,S,true);
}
if(bF){this.__if(bF,bG,G,true);
}},_applyFocus:function(bH,bI){if(bI){this.__if(bI,bH,O,true);
}
if(bH){this.__if(bH,bI,K,true);
}if(bI){this.__if(bI,bH,D,false);
}
if(bH){this.__if(bH,bI,C,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__iv=null;
},defer:function(bg){qx.event.Registration.addHandler(bg);
var bh=bg.FOCUSABLE_ELEMENTS;

for(var bi in bh){bh[bi.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var n="",m="qx.client",l="readOnly",k="accessKey",j="qx.bom.element.Attribute",i="rowSpan",h="vAlign",g="className",f="textContent",e="'",B="htmlFor",A="longDesc",z="cellSpacing",y="frameBorder",x="='",w="useMap",v="innerText",u="innerHTML",t="tabIndex",s="dateTime",q="maxLength",r="mshtml",o="cellPadding",p="colSpan";
qx.Class.define(j,{statics:{__fV:{names:{"class":g,"for":B,html:u,text:qx.core.Variant.isSet(m,r)?v:f,colspan:p,rowspan:i,valign:h,datetime:s,accesskey:k,tabindex:t,maxlength:q,readonly:l,longdesc:A,cellpadding:o,cellspacing:z,frameborder:y,usemap:w},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:n,maxLength:10000000,className:n,innerHTML:n,innerText:n,textContent:n,htmlFor:n,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(I){var J=[];
var L=this.__fV.runtime;

for(var K in I){if(!L[K]){J.push(K,x,I[K],e);
}}return J.join(n);
},get:qx.core.Variant.select(m,{"mshtml":function(F,name){var H=this.__fV;
var G;
name=H.names[name]||name;
if(H.original[name]){G=F.getAttribute(name,2);
}else if(H.property[name]){if(H.propertyDefault[name]&&G==H.propertyDefault[name]){return null;
}G=F[name];
}else{G=F.getAttribute(name);
}if(H.bools[name]){return !!G;
}return G;
},"default":function(a,name){var c=this.__fV;
var b;
name=c.names[name]||name;
if(c.property[name]){if(c.propertyDefault[name]&&b==c.propertyDefault[name]){return null;
}b=a[name];

if(b==null){b=a.getAttribute(name);
}}else{b=a.getAttribute(name);
}if(c.bools[name]){return !!b;
}return b;
}}),set:function(C,name,D){var E=this.__fV;
name=E.names[name]||name;
if(E.bools[name]){D=!!D;
}if(E.property[name]){if(D==null){D=E.propertyDefault[name];

if(D===undefined){D=null;
}}C[name]=D;
}else{if(D===true){C.setAttribute(name,name);
}else if(D===false||D===null){C.removeAttribute(name);
}else{C.setAttribute(name,D);
}}},reset:function(d,name){this.set(d,name,null);
}}});
})();
(function(){var n="left",m="right",l="middle",k="qx.client",j="dblclick",i="click",h="none",g="contextmenu",f="qx.event.type.Mouse";
qx.Class.define(f,{extend:qx.event.type.Dom,members:{init:function(a,b,c,d,e){arguments.callee.base.call(this,a,b,c,d,e);

if(!c){this._relatedTarget=qx.bom.Event.getRelatedTarget(a);
}return this;
},_cloneNativeEvent:function(o,p){var p=arguments.callee.base.call(this,o,p);
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
},__iI:qx.core.Variant.select(k,{"mshtml":{1:n,2:m,4:l},"default":{0:n,2:m,1:l}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case i:case j:return n;
case g:return m;
default:return this.__iI[this._native.button]||h;
}},isLeftPressed:function(){return this.getButton()===n;
},isMiddlePressed:function(){return this.getButton()===l;
},isRightPressed:function(){return this.getButton()===m;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(k,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(r);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(k,{"mshtml":function(){var q=qx.dom.Node.getWindow(this._native.srcElement);
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
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var l="qx.client",k="ie",j="msie",i="android",h="operamini",g="mobile chrome",f=")(/| )([0-9]+\.[0-9])",e="iemobile",d="opera mobi",c="Mobile Safari",z="operamobile",y="mobile safari",x="IEMobile|Maxthon|MSIE",w="qx.bom.client.Browser",v="opera mini",u="(",t="opera",s="mshtml",r="Opera Mini|Opera Mobi|Opera",q="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",o="webkit",p="5.0",m="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",n="Mobile/";
qx.Bootstrap.define(w,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__jO:function(A){var B=navigator.userAgent;
var D=new RegExp(u+A+f);
var E=B.match(D);

if(!E){return;
}var name=E[1].toLowerCase();
var C=E[3];
if(B.match(/Version(\/| )([0-9]+\.[0-9])/)){C=RegExp.$2;
}
if(qx.core.Variant.isSet(l,o)){if(name===i){name=g;
}else if(B.indexOf(c)!==-1||B.indexOf(n)!==-1){name=y;
}}else if(qx.core.Variant.isSet(l,s)){if(name===j){name=k;
if(qx.bom.client.System.WINCE&&name===k){name=e;
C=p;
}}}else if(qx.core.Variant.isSet(l,t)){if(name===d){name=z;
}else if(name===v){name=h;
}}this.NAME=name;
this.FULLVERSION=C;
this.VERSION=parseFloat(C,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(l,{"webkit":function(F){F.__jO(q);
},"gecko":function(b){b.__jO(m);
},"mshtml":function(G){G.__jO(x);
},"opera":function(a){a.__jO(r);
}})});
})();
(function(){var C="qx.client",B="qx.dom.Hierarchy",A="previousSibling",z="*",y="nextSibling",x="parentNode";
qx.Class.define(B,{statics:{getNodeIndex:function(b){var c=0;

while(b&&(b=b.previousSibling)){c++;
}return c;
},getElementIndex:function(r){var s=0;
var t=qx.dom.Node.ELEMENT;

while(r&&(r=r.previousSibling)){if(r.nodeType==t){s++;
}}return s;
},getNextElementSibling:function(L){while(L&&(L=L.nextSibling)&&!qx.dom.Node.isElement(L)){continue;
}return L||null;
},getPreviousElementSibling:function(Q){while(Q&&(Q=Q.previousSibling)&&!qx.dom.Node.isElement(Q)){continue;
}return Q||null;
},contains:qx.core.Variant.select(C,{"webkit|mshtml|opera":function(E,F){if(qx.dom.Node.isDocument(E)){var G=qx.dom.Node.getDocument(F);
return E&&G==E;
}else if(qx.dom.Node.isDocument(F)){return false;
}else{return E.contains(F);
}},"gecko":function(d,e){return !!(d.compareDocumentPosition(e)&16);
},"default":function(O,P){while(P){if(O==P){return true;
}P=P.parentNode;
}return false;
}}),isRendered:function(H){if(!H.offsetParent){return false;
}var I=H.ownerDocument||H.document;
if(I.body.contains){return I.body.contains(H);
}if(I.compareDocumentPosition){return !!(I.compareDocumentPosition(H)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(U,V){return this.contains(V,U);
},getCommonParent:qx.core.Variant.select(C,{"mshtml|opera":function(f,g){if(f===g){return f;
}
while(f&&qx.dom.Node.isElement(f)){if(f.contains(g)){return f;
}f=f.parentNode;
}return null;
},"default":function(h,i){if(h===i){return h;
}var j={};
var m=qx.core.ObjectRegistry;
var l,k;

while(h||i){if(h){l=m.toHashCode(h);

if(j[l]){return j[l];
}j[l]=h;
h=h.parentNode;
}
if(i){k=m.toHashCode(i);

if(j[k]){return j[k];
}j[k]=i;
i=i.parentNode;
}}return null;
}}),getAncestors:function(T){return this._recursivelyCollect(T,x);
},getChildElements:function(M){M=M.firstChild;

if(!M){return [];
}var N=this.getNextSiblings(M);

if(M.nodeType===1){N.unshift(M);
}return N;
},getDescendants:function(K){return qx.lang.Array.fromCollection(K.getElementsByTagName(z));
},getFirstDescendant:function(q){q=q.firstChild;

while(q&&q.nodeType!=1){q=q.nextSibling;
}return q;
},getLastDescendant:function(a){a=a.lastChild;

while(a&&a.nodeType!=1){a=a.previousSibling;
}return a;
},getPreviousSiblings:function(R){return this._recursivelyCollect(R,A);
},getNextSiblings:function(D){return this._recursivelyCollect(D,y);
},_recursivelyCollect:function(u,v){var w=[];

while(u=u[v]){if(u.nodeType==1){w.push(u);
}}return w;
},getSiblings:function(S){return this.getPreviousSiblings(S).reverse().concat(this.getNextSiblings(S));
},isEmpty:function(J){J=J.firstChild;

while(J){if(J.nodeType===qx.dom.Node.ELEMENT||J.nodeType===qx.dom.Node.TEXT){return false;
}J=J.nextSibling;
}return true;
},cleanWhitespace:function(n){var o=n.firstChild;

while(o){var p=o.nextSibling;

if(o.nodeType==3&&!/\S/.test(o.nodeValue)){n.removeChild(o);
}o=p;
}}}});
})();
(function(){var f="qx.client",e="qx.event.type.Drag";
qx.Class.define(e,{extend:qx.event.type.Event,members:{init:function(j,k){arguments.callee.base.call(this,true,j);

if(k){this._native=k.getNativeEvent()||null;
this._originalTarget=k.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(n){var o=arguments.callee.base.call(this,n);
o._native=this._native;
return o;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var b=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(b);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(l);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(c){this.getManager().addType(c);
},addAction:function(d){this.getManager().addAction(d);
},supportsType:function(m){return this.getManager().supportsType(m);
},supportsAction:function(a){return this.getManager().supportsAction(a);
},addData:function(h,i){this.getManager().addData(h,i);
},getData:function(g){return this.getManager().getData(g);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var l="losecapture",k="qx.client",j="blur",i="focus",h="click",g="qx.event.dispatch.MouseCapture",f="capture",e="scroll";
qx.Class.define(g,{extend:qx.event.dispatch.AbstractBubbling,construct:function(c,d){arguments.callee.base.call(this,c);
this.__fp=c.getWindow();
this.__fq=d;
c.addListener(this.__fp,j,this.releaseCapture,this);
c.addListener(this.__fp,i,this.releaseCapture,this);
c.addListener(this.__fp,e,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fq:null,__fr:null,__fs:true,__fp:null,_getParent:function(p){return p.parentNode;
},canDispatchEvent:function(n,event,o){return (this.__fr&&this.__ft[o]);
},dispatchEvent:function(q,event,r){if(r==h){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fs||!qx.dom.Hierarchy.contains(this.__fr,q)){q=this.__fr;
}arguments.callee.base.call(this,q,event,r);
},__ft:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(u,v){var v=v!==false;

if(this.__fr===u&&this.__fs==v){return;
}
if(this.__fr){this.releaseCapture();
}this.nativeSetCapture(u,v);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(u,l,function(){qx.bom.Event.removeNativeListener(u,l,arguments.callee);
self.releaseCapture();
});
}this.__fs=v;
this.__fr=u;
this.__fq.fireEvent(u,f,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fr;
},releaseCapture:function(){var t=this.__fr;

if(!t){return;
}this.__fr=null;
this.__fq.fireEvent(t,l,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(t);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(k,{"mshtml":function(a,b){a.setCapture(b!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(k,{"mshtml":function(s){s.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fr=this.__fp=this.__fq=null;
},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var x="qx.client",w="",v="mshtml",u="'",t="SelectionLanguage",s="qx.xml.Document",r=" />",q="MSXML2.DOMDocument.3.0",p='<\?xml version="1.0" encoding="utf-8"?>\n<',o="MSXML2.XMLHTTP.3.0",j="MSXML2.XMLHTTP.6.0",n=" xmlns='",m="text/xml",h="XPath",g="MSXML2.DOMDocument.6.0",k="HTML";
qx.Bootstrap.define(s,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(y){if(y.nodeType===9){return y.documentElement.nodeName!==k;
}else if(y.ownerDocument){return this.isXmlDocument(y.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(x,{"mshtml":function(c,d){var e=new ActiveXObject(this.DOMDOC);
e.setProperty(t,h);

if(d){var f=p;
f+=d;

if(c){f+=n+c+u;
}f+=r;
e.loadXML(f);
}return e;
},"default":function(F,G){return document.implementation.createDocument(F||w,G||w,null);
}}),fromString:qx.core.Variant.select(x,{"mshtml":function(a){var b=qx.xml.Document.create();
b.loadXML(a);
return b;
},"default":function(z){var A=new DOMParser();
return A.parseFromString(z,m);
}})},defer:function(B){if(qx.core.Variant.isSet(x,v)){var C=[g,q];
var D=[j,o];

for(var i=0,l=C.length;i<l;i++){try{new ActiveXObject(C[i]);
new ActiveXObject(D[i]);
}catch(E){continue;
}B.DOMDOC=C[i];
B.XMLHTTP=D[i];
break;
}}}});
})();
(function(){var G="visible",F="scroll",E="borderBottomWidth",D="borderTopWidth",C="left",B="borderLeftWidth",A="bottom",z="top",y="right",x="qx.bom.element.Scroll",w="borderRightWidth";
qx.Class.define(x,{statics:{intoViewX:function(K,stop,L){var parent=K.parentNode;
var Q=qx.dom.Node.getDocument(K);
var M=Q.body;
var Y,W,T;
var bb,R,bc;
var U,bd,bg;
var be,O,X,N;
var S,bf,V;
var P=L===C;
var ba=L===y;
stop=stop?stop.parentNode:Q;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===M||qx.bom.element.Overflow.getY(parent)!=G)){if(parent===M){W=parent.scrollLeft;
T=W+qx.bom.Viewport.getWidth();
bb=qx.bom.Viewport.getWidth();
R=parent.clientWidth;
bc=parent.scrollWidth;
U=0;
bd=0;
bg=0;
}else{Y=qx.bom.element.Location.get(parent);
W=Y.left;
T=Y.right;
bb=parent.offsetWidth;
R=parent.clientWidth;
bc=parent.scrollWidth;
U=parseInt(qx.bom.element.Style.get(parent,B),10)||0;
bd=parseInt(qx.bom.element.Style.get(parent,w),10)||0;
bg=bb-R-U-bd;
}be=qx.bom.element.Location.get(K);
O=be.left;
X=be.right;
N=K.offsetWidth;
S=O-W-U;
bf=X-T+bd;
V=0;
if(P){V=S;
}else if(ba){V=bf+bg;
}else if(S<0||N>R){V=S;
}else if(bf>0){V=bf+bg;
}parent.scrollLeft+=V;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,F);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoViewY:function(a,stop,b){var parent=a.parentNode;
var h=qx.dom.Node.getDocument(a);
var c=h.body;
var p,d,l;
var r,o,j;
var f,g,e;
var t,u,q,k;
var n,i,v;
var s=b===z;
var m=b===A;
stop=stop?stop.parentNode:h;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===c||qx.bom.element.Overflow.getY(parent)!=G)){if(parent===c){d=parent.scrollTop;
l=d+qx.bom.Viewport.getHeight();
r=qx.bom.Viewport.getHeight();
o=parent.clientHeight;
j=parent.scrollHeight;
f=0;
g=0;
e=0;
}else{p=qx.bom.element.Location.get(parent);
d=p.top;
l=p.bottom;
r=parent.offsetHeight;
o=parent.clientHeight;
j=parent.scrollHeight;
f=parseInt(qx.bom.element.Style.get(parent,D),10)||0;
g=parseInt(qx.bom.element.Style.get(parent,E),10)||0;
e=r-o-f-g;
}t=qx.bom.element.Location.get(a);
u=t.top;
q=t.bottom;
k=a.offsetHeight;
n=u-d-f;
i=q-l+g;
v=0;
if(s){v=n;
}else if(m){v=i+e;
}else if(n<0||k>o){v=n;
}else if(i>0){v=i+e;
}parent.scrollTop+=v;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,F);
}}
if(parent===c){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
}}});
})();
(function(){var l="borderTopWidth",k="borderLeftWidth",j="marginTop",i="marginLeft",h="scroll",g="qx.client",f="border-box",e="borderBottomWidth",d="borderRightWidth",c="auto",A="padding",z="qx.bom.element.Location",y="paddingLeft",x="static",w="marginBottom",v="visible",u="BODY",t="paddingBottom",s="paddingTop",r="marginRight",p="position",q="margin",n="overflow",o="paddingRight",m="border";
qx.Class.define(z,{statics:{__gP:function(bK,bL){return qx.bom.element.Style.get(bK,bL,qx.bom.element.Style.COMPUTED_MODE,false);
},__gQ:function(bI,bJ){return parseInt(qx.bom.element.Style.get(bI,bJ,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gR:function(bp){var bs=0,top=0;
if(bp.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var br=qx.dom.Node.getWindow(bp);
bs-=qx.bom.Viewport.getScrollLeft(br);
top-=qx.bom.Viewport.getScrollTop(br);
}else{var bq=qx.dom.Node.getDocument(bp).body;
bp=bp.parentNode;
while(bp&&bp!=bq){bs+=bp.scrollLeft;
top+=bp.scrollTop;
bp=bp.parentNode;
}}return {left:bs,top:top};
},__gS:qx.core.Variant.select(g,{"mshtml":function(bD){var bF=qx.dom.Node.getDocument(bD);
var bE=bF.body;
var bG=0;
var top=0;
bG-=bE.clientLeft+bF.documentElement.clientLeft;
top-=bE.clientTop+bF.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bG+=this.__gQ(bE,k);
top+=this.__gQ(bE,l);
}return {left:bG,top:top};
},"webkit":function(B){var D=qx.dom.Node.getDocument(B);
var C=D.body;
var E=C.offsetLeft;
var top=C.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){E+=this.__gQ(C,k);
top+=this.__gQ(C,l);
}return {left:E,top:top};
},"gecko":function(bg){var bh=qx.dom.Node.getDocument(bg).body;
var bi=bh.offsetLeft;
var top=bh.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bi+=this.__gQ(bh,i);
top+=this.__gQ(bh,j);
}if(qx.bom.element.BoxSizing.get(bh)!==f){bi+=this.__gQ(bh,k);
top+=this.__gQ(bh,l);
}return {left:bi,top:top};
},"default":function(bt){var bu=qx.dom.Node.getDocument(bt).body;
var bv=bu.offsetLeft;
var top=bu.offsetTop;
return {left:bv,top:top};
}}),__gT:qx.core.Variant.select(g,{"mshtml|webkit":function(O){var Q=qx.dom.Node.getDocument(O);
if(O.getBoundingClientRect){var R=O.getBoundingClientRect();
var S=R.left;
var top=R.top;
}else{var S=O.offsetLeft;
var top=O.offsetTop;
O=O.offsetParent;
var P=Q.body;
while(O&&O!=P){S+=O.offsetLeft;
top+=O.offsetTop;
S+=this.__gQ(O,k);
top+=this.__gQ(O,l);
O=O.offsetParent;
}}return {left:S,top:top};
},"gecko":function(bw){if(bw.getBoundingClientRect){var bz=bw.getBoundingClientRect();
var bA=Math.round(bz.left);
var top=Math.round(bz.top);
}else{var bA=0;
var top=0;
var bx=qx.dom.Node.getDocument(bw).body;
var by=qx.bom.element.BoxSizing;

if(by.get(bw)!==f){bA-=this.__gQ(bw,k);
top-=this.__gQ(bw,l);
}
while(bw&&bw!==bx){bA+=bw.offsetLeft;
top+=bw.offsetTop;
if(by.get(bw)!==f){bA+=this.__gQ(bw,k);
top+=this.__gQ(bw,l);
}if(bw.parentNode&&this.__gP(bw.parentNode,n)!=v){bA+=this.__gQ(bw.parentNode,k);
top+=this.__gQ(bw.parentNode,l);
}bw=bw.offsetParent;
}}return {left:bA,top:top};
},"default":function(H){var J=0;
var top=0;
var I=qx.dom.Node.getDocument(H).body;
while(H&&H!==I){J+=H.offsetLeft;
top+=H.offsetTop;
H=H.offsetParent;
}return {left:J,top:top};
}}),get:function(W,X){if(W.tagName==u){var location=this.__gU(W);
var bf=location.left;
var top=location.top;
}else{var Y=this.__gS(W);
var be=this.__gT(W);
var scroll=this.__gR(W);
var bf=be.left+Y.left-scroll.left;
var top=be.top+Y.top-scroll.top;
}var ba=bf+W.offsetWidth;
var bb=top+W.offsetHeight;

if(X){if(X==A||X==h){var bc=qx.bom.element.Overflow.getX(W);

if(bc==h||bc==c){ba+=W.scrollWidth-W.offsetWidth+this.__gQ(W,k)+this.__gQ(W,d);
}var bd=qx.bom.element.Overflow.getY(W);

if(bd==h||bd==c){bb+=W.scrollHeight-W.offsetHeight+this.__gQ(W,l)+this.__gQ(W,e);
}}
switch(X){case A:bf+=this.__gQ(W,y);
top+=this.__gQ(W,s);
ba-=this.__gQ(W,o);
bb-=this.__gQ(W,t);
case h:bf-=W.scrollLeft;
top-=W.scrollTop;
ba-=W.scrollLeft;
bb-=W.scrollTop;
case m:bf+=this.__gQ(W,k);
top+=this.__gQ(W,l);
ba-=this.__gQ(W,d);
bb-=this.__gQ(W,e);
break;
case q:bf-=this.__gQ(W,i);
top-=this.__gQ(W,j);
ba+=this.__gQ(W,r);
bb+=this.__gQ(W,w);
break;
}}return {left:bf,top:top,right:ba,bottom:bb};
},__gU:qx.core.Variant.select(g,{"default":function(bM){var top=bM.offsetTop+this.__gQ(bM,j);
var bN=bM.offsetLeft+this.__gQ(bM,i);
return {left:bN,top:top};
},"mshtml":function(F){var top=F.offsetTop;
var G=F.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__gQ(F,j);
G+=this.__gQ(F,i);
}return {left:G,top:top};
},"gecko":function(K){var top=K.offsetTop+this.__gQ(K,j)+this.__gQ(K,k);
var L=K.offsetLeft+this.__gQ(K,i)+this.__gQ(K,l);
return {left:L,top:top};
}}),getLeft:function(a,b){return this.get(a,b).left;
},getTop:function(bB,bC){return this.get(bB,bC).top;
},getRight:function(M,N){return this.get(M,N).right;
},getBottom:function(bO,bP){return this.get(bO,bP).bottom;
},getRelative:function(bj,bk,bl,bm){var bo=this.get(bj,bl);
var bn=this.get(bk,bm);
return {left:bo.left-bn.left,top:bo.top-bn.top,right:bo.right-bn.right,bottom:bo.bottom-bn.bottom};
},getPosition:function(bH){return this.getRelative(bH,this.getOffsetParent(bH));
},getOffsetParent:function(T){var V=T.offsetParent||document.body;
var U=qx.bom.element.Style;

while(V&&(!/^body|html$/i.test(V.tagName)&&U.get(V,p)===x)){V=V.offsetParent;
}return V;
}}});
})();
(function(){var u="qx.client",t="character",s="EndToEnd",r="input",q="textarea",p="StartToStart",o='character',n="qx.bom.Selection",m="button",l="#text",k="body";
qx.Class.define(n,{statics:{getSelectionObject:qx.core.Variant.select(u,{"mshtml":function(M){return M.selection;
},"default":function(C){return qx.dom.Node.getWindow(C).getSelection();
}}),get:qx.core.Variant.select(u,{"mshtml":function(bw){var bx=qx.bom.Range.get(qx.dom.Node.getDocument(bw));
return bx.text;
},"default":function(j){if(this.__jr(j)){return j.value.substring(j.selectionStart,j.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(j)).toString();
}}}),getLength:qx.core.Variant.select(u,{"mshtml":function(g){var i=this.get(g);
var h=qx.util.StringSplit.split(i,/\r\n/);
return i.length-(h.length-1);
},"opera":function(v){var A,y,w;

if(this.__jr(v)){var z=v.selectionStart;
var x=v.selectionEnd;
A=v.value.substring(z,x);
y=x-z;
}else{A=qx.bom.Selection.get(v);
y=A.length;
}w=qx.util.StringSplit.split(A,/\r\n/);
return y-(w.length-1);
},"default":function(ba){if(this.__jr(ba)){return ba.selectionEnd-ba.selectionStart;
}else{return this.get(ba).length;
}}}),getStart:qx.core.Variant.select(u,{"mshtml":function(D){if(this.__jr(D)){var I=qx.bom.Range.get();
if(!D.contains(I.parentElement())){return -1;
}var J=qx.bom.Range.get(D);
var H=D.value.length;
J.moveToBookmark(I.getBookmark());
J.moveEnd(o,H);
return H-J.text.length;
}else{var J=qx.bom.Range.get(D);
var F=J.parentElement();
var K=qx.bom.Range.get();
K.moveToElementText(F);
var E=qx.bom.Range.get(qx.dom.Node.getBodyElement(D));
E.setEndPoint(p,J);
E.setEndPoint(s,K);
if(K.compareEndPoints(p,E)==0){return 0;
}var G;
var L=0;

while(true){G=E.moveStart(t,-1);
if(K.compareEndPoints(p,E)==0){break;
}if(G==0){break;
}else{L++;
}}return ++L;
}},"gecko|webkit":function(bg){if(this.__jr(bg)){return bg.selectionStart;
}else{var bi=qx.dom.Node.getDocument(bg);
var bh=this.getSelectionObject(bi);
if(bh.anchorOffset<bh.focusOffset){return bh.anchorOffset;
}else{return bh.focusOffset;
}}},"default":function(bj){if(this.__jr(bj)){return bj.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bj)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(u,{"mshtml":function(Q){if(this.__jr(Q)){var V=qx.bom.Range.get();
if(!Q.contains(V.parentElement())){return -1;
}var W=qx.bom.Range.get(Q);
var U=Q.value.length;
W.moveToBookmark(V.getBookmark());
W.moveStart(o,-U);
return W.text.length;
}else{var W=qx.bom.Range.get(Q);
var S=W.parentElement();
var X=qx.bom.Range.get();
X.moveToElementText(S);
var U=X.text.length;
var R=qx.bom.Range.get(qx.dom.Node.getBodyElement(Q));
R.setEndPoint(s,W);
R.setEndPoint(p,X);
if(X.compareEndPoints(s,R)==0){return U-1;
}var T;
var Y=0;

while(true){T=R.moveEnd(t,1);
if(X.compareEndPoints(s,R)==0){break;
}if(T==0){break;
}else{Y++;
}}return U-(++Y);
}},"gecko|webkit":function(N){if(this.__jr(N)){return N.selectionEnd;
}else{var P=qx.dom.Node.getDocument(N);
var O=this.getSelectionObject(P);
if(O.focusOffset>O.anchorOffset){return O.focusOffset;
}else{return O.anchorOffset;
}}},"default":function(B){if(this.__jr(B)){return B.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(B)).focusOffset;
}}}),__jr:function(bk){return qx.dom.Node.isElement(bk)&&(bk.nodeName.toLowerCase()==r||bk.nodeName.toLowerCase()==q);
},set:qx.core.Variant.select(u,{"mshtml":function(bb,bc,bd){var be;
if(qx.dom.Node.isDocument(bb)){bb=bb.body;
}
if(qx.dom.Node.isElement(bb)||qx.dom.Node.isText(bb)){switch(bb.nodeName.toLowerCase()){case r:case q:case m:if(bd===undefined){bd=bb.value.length;
}
if(bc>=0&&bc<=bb.value.length&&bd>=0&&bd<=bb.value.length){be=qx.bom.Range.get(bb);
be.collapse(true);
be.moveStart(t,bc);
be.moveEnd(t,bd-bc);
be.select();
return true;
}break;
case l:if(bd===undefined){bd=bb.nodeValue.length;
}
if(bc>=0&&bc<=bb.nodeValue.length&&bd>=0&&bd<=bb.nodeValue.length){be=qx.bom.Range.get(qx.dom.Node.getBodyElement(bb));
be.moveToElementText(bb.parentNode);
be.collapse(true);
be.moveStart(t,bc);
be.moveEnd(t,bd-bc);
be.select();
return true;
}break;
default:if(bd===undefined){bd=bb.childNodes.length-1;
}if(bb.childNodes[bc]&&bb.childNodes[bd]){be=qx.bom.Range.get(qx.dom.Node.getBodyElement(bb));
be.moveToElementText(bb.childNodes[bc]);
be.collapse(true);
var bf=qx.bom.Range.get(qx.dom.Node.getBodyElement(bb));
bf.moveToElementText(bb.childNodes[bd]);
be.setEndPoint(s,bf);
be.select();
return true;
}}}return false;
},"default":function(bl,bm,bn){var br=bl.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bl)&&(br==r||br==q)){if(bn===undefined){bn=bl.value.length;
}if(bm>=0&&bm<=bl.value.length&&bn>=0&&bn<=bl.value.length){bl.focus();
bl.select();
bl.setSelectionRange(bm,bn);
return true;
}}else{var bp=false;
var bq=qx.dom.Node.getWindow(bl).getSelection();
var bo=qx.bom.Range.get(bl);
if(qx.dom.Node.isText(bl)){if(bn===undefined){bn=bl.length;
}
if(bm>=0&&bm<bl.length&&bn>=0&&bn<=bl.length){bp=true;
}}else if(qx.dom.Node.isElement(bl)){if(bn===undefined){bn=bl.childNodes.length-1;
}
if(bm>=0&&bl.childNodes[bm]&&bn>=0&&bl.childNodes[bn]){bp=true;
}}else if(qx.dom.Node.isDocument(bl)){bl=bl.body;

if(bn===undefined){bn=bl.childNodes.length-1;
}
if(bm>=0&&bl.childNodes[bm]&&bn>=0&&bl.childNodes[bn]){bp=true;
}}
if(bp){if(!bq.isCollapsed){bq.collapseToStart();
}bo.setStart(bl,bm);
if(qx.dom.Node.isText(bl)){bo.setEnd(bl,bn);
}else{bo.setEndAfter(bl.childNodes[bn]);
}if(bq.rangeCount>0){bq.removeAllRanges();
}bq.addRange(bo);
return true;
}}return false;
}}),setAll:function(by){return qx.bom.Selection.set(by,0);
},clear:qx.core.Variant.select(u,{"mshtml":function(bs){var bt=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bs));
var bu=qx.bom.Range.get(bs);
var parent=bu.parentElement();
var bv=qx.bom.Range.get(qx.dom.Node.getDocument(bs));
if(parent==bv.parentElement()&&parent==bs){bt.empty();
}},"default":function(a){var c=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a));
var e=a.nodeName.toLowerCase();
if(qx.dom.Node.isElement(a)&&(e==r||e==q)){a.setSelectionRange(0,0);
qx.bom.Element.blur(a);
}else if(qx.dom.Node.isDocument(a)||e==k){c.collapse(a.body?a.body:a,0);
}else{var d=qx.bom.Range.get(a);

if(!d.collapsed){var f;
var b=d.commonAncestorContainer;
if(qx.dom.Node.isElement(a)&&qx.dom.Node.isText(b)){f=b.parentNode;
}else{f=b;
}
if(f==a){c.collapse(a,0);
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
(function(){var f="",e="g",d="$",c="qx.util.StringSplit",b="\\$&",a="^";
qx.Bootstrap.define(c,{statics:{split:function(g,h,k){var n=f;
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
qx.Class.define(b,{statics:{__gL:{},remove:function(e){delete this.__gL[e.$$hash];
},add:function(c){var d=this.__gL;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__gL;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__gL={};
}}});
})();
(function(){var f="qx.ui.core.queue.Visibility",e="visibility";
qx.Class.define(f,{statics:{__gx:{},__gy:{},remove:function(c){var d=c.$$hash;
delete this.__gy[d];
delete this.__gx[d];
},isVisible:function(g){return this.__gy[g.$$hash]||false;
},__gz:function(h){var j=this.__gy;
var i=h.$$hash;
var k;
if(h.isExcluded()){k=false;
}else{var parent=h.$$parent;

if(parent){k=this.__gz(parent);
}else{k=h.isRootWidget();
}}return j[i]=k;
},add:function(a){var b=this.__gx;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(e);
},flush:function(){var l=this.__gx;
var p=this.__gy;
for(var m in l){if(p[m]!=null){l[m].addChildrenToQueue(l);
}}var o={};

for(var m in l){o[m]=p[m];
p[m]=null;
}for(var m in l){var n=l[m];
delete l[m];
if(p[m]==null){this.__gz(n);
}if(p[m]&&p[m]!=o[m]){n.checkAppearanceNeeds();
}}this.__gx={};
}}});
})();
(function(){var e="appearance",d="qx.ui.core.queue.Appearance";
qx.Class.define(d,{statics:{__fW:{},remove:function(f){delete this.__fW[f.$$hash];
},add:function(a){var b=this.__fW;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(e);
},has:function(c){return !!this.__fW[c.$$hash];
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__fW;
var i;

for(var h in g){i=g[h];
delete g[h];
if(j.isVisible(i)){i.syncAppearance();
}else{i.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__dX:{},add:function(f){var g=this.__dX;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__dX;

for(var e in c){var d=c[e];
delete c[e];
d.dispose();
}for(var e in c){return;
}this.__dX={};
}}});
})();
(function(){var e="none",d="qx.html.Decorator",c="absolute";
qx.Class.define(d,{extend:qx.html.Element,construct:function(f,g){arguments.callee.base.call(this);
this.__iw=f;
this.__ix=g||f.toHashCode();
this.useMarkup(f.getMarkup());
var h={position:c,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){h.pointerEvents=e;
}this.setStyles(h);
},members:{__ix:null,__iw:null,getId:function(){return this.__ix;
},getDecorator:function(){return this.__iw;
},resize:function(a,b){this.__iw.resize(this.getDomElement(),a,b);
},tint:function(i){this.__iw.tint(this.getDomElement(),i);
},getInsets:function(){return this.__iw.getInsets();
}},destruct:function(){this.__iw=null;
}});
})();
(function(){var g="blur",f="focus",e="input",d="load",c="qx.ui.core.EventHandler",b="activate";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__dr=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__dr:null,__ds:{focusin:1,focusout:1,focus:1,blur:1},__dt:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(G,H){return G instanceof qx.ui.core.Widget;
},_dispatchEvent:function(r){var w=r.getTarget();
var v=qx.ui.core.Widget.getWidgetByElement(w);
var x=false;

while(v&&v.isAnonymous()){var x=true;
v=v.getLayoutParent();
}if(v&&x&&r.getType()==b){v.getContainerElement().activate();
}if(this.__ds[r.getType()]){v=v&&v.getFocusTarget();
if(!v){return;
}}if(r.getRelatedTarget){var E=r.getRelatedTarget();
var D=qx.ui.core.Widget.getWidgetByElement(E);

while(D&&D.isAnonymous()){D=D.getLayoutParent();
}
if(D){if(this.__ds[r.getType()]){D=D.getFocusTarget();
}if(D===v){return;
}}}var z=r.getCurrentTarget();
var B=qx.ui.core.Widget.getWidgetByElement(z);

if(!B||B.isAnonymous()){return;
}if(this.__ds[r.getType()]){B=B.getFocusTarget();
}var C=r.getType();

if(!B||!(B.isEnabled()||this.__dt[C])){return;
}var s=r.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var y=this.__dr.getListeners(B,C,s);

if(!y||y.length===0){return;
}var t=qx.event.Pool.getInstance().getObject(r.constructor);
r.clone(t);
t.setTarget(v);
t.setRelatedTarget(D||null);
t.setCurrentTarget(B);
var F=r.getOriginalTarget();

if(F){var u=qx.ui.core.Widget.getWidgetByElement(F);

while(u&&u.isAnonymous()){u=u.getLayoutParent();
}t.setOriginalTarget(u);
}else{t.setOriginalTarget(w);
}for(var i=0,l=y.length;i<l;i++){var A=y[i].context||B;
y[i].handler.call(A,t);
}if(t.getPropagationStopped()){r.stopPropagation();
}
if(t.getDefaultPrevented()){r.preventDefault();
}qx.event.Pool.getInstance().poolObject(t);
},registerEvent:function(n,o,p){var q;

if(o===f||o===g){q=n.getFocusElement();
}else if(o===d||o===e){q=n.getContentElement();
}else{q=n.getContainerElement();
}
if(q){q.addListener(o,this._dispatchEvent,this,p);
}},unregisterEvent:function(h,j,k){var m;

if(j===f||j===g){m=h.getFocusElement();
}else if(j===d||j===e){m=h.getContentElement();
}else{m=h.getContainerElement();
}
if(m){m.removeListener(j,this._dispatchEvent,this,k);
}}},destruct:function(){this.__dr=null;
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Bootstrap.define(c,{statics:{LOCALE:"",VARIANT:"",__jN:function(){var d=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__jN();
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(z){var z=z||t;
this.__kh=z;
this.length=z.length;
},members:{$$isString:true,length:0,__kh:null,toString:function(){return this.__kh;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(u,v){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(w,x){{};
var y=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
x.valueOf=x.toString;

if(new w(t).valueOf()==null){delete x.valueOf;
}
for(var i=0,l=y.length;i<l;i++){x[y[i]]=String.prototype[y[i]];
}}});
})();
(function(){var d="qx.locale.LocalizedString";
qx.Class.define(d,{extend:qx.type.BaseString,construct:function(a,b,c){arguments.callee.base.call(this,a);
this.__du=b;
this.__dv=c;
},members:{__du:null,__dv:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__du,this.__dv);
}}});
})();
(function(){var C="_",B="",A="qx.dynlocale",z="on",y="_applyLocale",x="changeLocale",w="C",v="qx.locale.Manager",u="String",t="singleton";
qx.Class.define(v,{type:t,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__gV=qx.$$translations||{};
this.__gW=qx.$$locales||{};
var o=qx.bom.client.Locale;
var m=o.LOCALE;
var n=o.VARIANT;

if(n!==B){m+=C+n;
}this.setLocale(m||this.__gX);
},statics:{tr:function(J,K){var L=qx.lang.Array.fromArguments(arguments);
L.splice(0,1);
return qx.locale.Manager.getInstance().translate(J,L);
},trn:function(bc,bd,be,bf){var bg=qx.lang.Array.fromArguments(arguments);
bg.splice(0,3);
if(be!=1){return qx.locale.Manager.getInstance().translate(bd,bg);
}else{return qx.locale.Manager.getInstance().translate(bc,bg);
}},trc:function(F,G,H){var I=qx.lang.Array.fromArguments(arguments);
I.splice(0,2);
return qx.locale.Manager.getInstance().translate(G,I);
},marktr:function(a){return a;
}},properties:{locale:{check:u,nullable:true,apply:y,event:x}},members:{__gX:w,__gY:null,__ha:null,__gV:null,__gW:null,getLanguage:function(){return this.__ha;
},getTerritory:function(){return this.getLocale().split(C)[1]||B;
},getAvailableLocales:function(){var c=[];

for(var b in this.__gW){if(b!=this.__gX){c.push(b);
}}return c;
},__hb:function(Y){var bb;
var ba=Y.indexOf(C);

if(ba==-1){bb=Y;
}else{bb=Y.substring(0,ba);
}return bb;
},_applyLocale:function(D,E){this.__gY=D;
this.__ha=this.__hb(D);
},addTranslation:function(p,q){var r=this.__gV;

if(r[p]){for(var s in q){r[p][s]=q[s];
}}else{r[p]=q;
}},addLocale:function(U,V){var W=this.__gW;

if(W[U]){for(var X in V){W[U][X]=V[X];
}}else{W[U]=V;
}},translate:function(M,N,O){var T;
var R=this.__gV;

if(!R){return M;
}
if(O){var Q=this.__hb(O);
}else{O=this.__gY;
Q=this.__ha;
}
if(!T&&R[O]){T=R[O][M];
}
if(!T&&R[Q]){T=R[Q][M];
}
if(!T&&R[this.__gX]){T=R[this.__gX][M];
}
if(!T){T=M;
}
if(N.length>0){var P=[];

for(var i=0;i<N.length;i++){var S=N[i];

if(S&&S.translate){P[i]=S.translate();
}else{P[i]=S;
}}T=qx.lang.String.format(T,P);
}
if(qx.core.Variant.isSet(A,z)){T=new qx.locale.LocalizedString(T,M,N);
}return T;
},localize:function(d,e,f){var l;
var j=this.__gW;

if(!j){return d;
}
if(f){var h=this.__hb(f);
}else{f=this.__gY;
h=this.__ha;
}
if(!l&&j[f]){l=j[f][d];
}
if(!l&&j[h]){l=j[h][d];
}
if(!l&&j[this.__gX]){l=j[this.__gX][d];
}
if(!l){l=d;
}
if(e.length>0){var g=[];

for(var i=0;i<e.length;i++){var k=e[i];

if(k.translate){g[i]=k.translate();
}else{g[i]=k;
}}l=qx.lang.String.format(l,g);
}
if(qx.core.Variant.isSet(A,z)){l=new qx.locale.LocalizedString(l,d,e);
}return l;
}},destruct:function(){this.__gV=this.__gW=null;
}});
})();
(function(){var g="source",f="scale",e="no-repeat",d="mshtml",c="qx.client",b="qx.html.Image";
qx.Class.define(b,{extend:qx.html.Element,members:{_applyProperty:function(name,k){arguments.callee.base.call(this,name,k);

if(name===g){var o=this.getDomElement();
var l=this.getAllStyles();
var m=this._getProperty(g);
var n=this._getProperty(f);
var p=n?f:e;
qx.bom.element.Decoration.update(o,m,p,l);
}},_createDomElement:function(){var i=this._getProperty(f);
var j=i?f:e;

if(qx.core.Variant.isSet(c,d)){var h=this._getProperty(g);
this.setNodeName(qx.bom.element.Decoration.getTagName(j,h));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(j));
}return arguments.callee.base.call(this);
},_copyData:function(q){return arguments.callee.base.call(this,true);
},setSource:function(a){this._setProperty(g,a);
return this;
},getSource:function(){return this._getProperty(g);
},resetSource:function(){this._removeProperty(g);
return this;
},setScale:function(r){this._setProperty(f,r);
return this;
},getScale:function(){return this._getProperty(f);
}}});
})();
(function(){var s="nonScaled",r="scaled",q="alphaScaled",p=".png",o="replacement",n="hidden",m="div",l="Boolean",k="_applyScale",j="px",d="_applySource",i="-disabled.$1",g="img",c="changeSource",b="qx.client",f="__hc",e="String",h="image",a="qx.ui.basic.Image";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(K){this.__hc={};
arguments.callee.base.call(this);

if(K){this.setSource(K);
}},properties:{source:{check:e,init:null,nullable:true,event:c,apply:d,themeable:true},scale:{check:l,init:false,themeable:true,apply:k},appearance:{refine:true,init:h},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hd:null,__he:null,__hf:null,__hc:null,getContentElement:function(){return this.__hj();
},_createContentElement:function(){return this.__hj();
},_getContentHint:function(){return {width:this.__hd||0,height:this.__he||0};
},_applyEnabled:function(F,G){arguments.callee.base.call(this,F,G);

if(this.getSource()){this._styleSource();
}},_applySource:function(t){this._styleSource();
},_applyScale:function(H){this._styleSource();
},__hg:function(L){this.__hf=L;
},__hh:function(){if(this.__hf==null){var be=this.getSource();
var bd=false;

if(be!=null){bd=qx.lang.String.endsWith(be,p);
}
if(this.getScale()&&bd&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hf=q;
}else if(this.getScale()){this.__hf=r;
}else{this.__hf=s;
}}return this.__hf;
},__hi:function(M){var N;
var O;

if(M==q){N=true;
O=m;
}else if(M==s){N=false;
O=m;
}else{N=true;
O=g;
}var P=new qx.html.Image(O);
P.setScale(N);
P.setStyles({"overflowX":n,"overflowY":n});
return P;
},__hj:function(){var E=this.__hh();

if(this.__hc[E]==null){this.__hc[E]=this.__hi(E);
}return this.__hc[E];
},_styleSource:function(){var D=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!D){this.getContentElement().resetSource();
return;
}this.__hk(D);
if(qx.util.ResourceManager.getInstance().has(D)){this.__hm(this.getContentElement(),D);
}else if(qx.io.ImageLoader.isLoaded(D)){this.__hn(this.getContentElement(),D);
}else{this.__ho(this.getContentElement(),D);
}},__hk:qx.core.Variant.select(b,{"mshtml":function(A){var C=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var B=qx.lang.String.endsWith(A,p);

if(C&&B){if(this.getScale()&&this.__hh()!=q){this.__hg(q);
}else if(!this.getScale()&&this.__hh()!=s){this.__hg(s);
}}else{if(this.getScale()&&this.__hh()!=r){this.__hg(r);
}else if(!this.getScale()&&this.__hh()!=s){this.__hg(s);
}}this.__hl(this.__hj());
},"default":function(z){if(this.getScale()&&this.__hh()!=r){this.__hg(r);
}else if(!this.getScale()&&this.__hh(s)){this.__hg(s);
}this.__hl(this.__hj());
}}),__hl:function(Q){var T=this.getContainerElement();
var U=T.getChild(0);

if(U!=Q){if(U!=null){var W=j;
var R={};
var S=this.getInnerSize();

if(S!=null){R.width=S.width+W;
R.height=S.height+W;
}var V=this.getInsets();
R.left=V.left+W;
R.top=V.top+W;
Q.setStyles(R,true);
Q.setSelectable(this.getSelectable());
}T.removeAt(0);
T.addAt(Q,0);
}},__hm:function(bf,bg){var bi=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bh=bg.replace(/\.([a-z]+)$/,i);

if(bi.has(bh)){bg=bh;
this.addState(o);
}else{this.removeState(o);
}}if(bf.getSource()===bg){return;
}bf.setSource(bg);
this.__hq(bi.getImageWidth(bg),bi.getImageHeight(bg));
},__hn:function(X,Y){var bb=qx.io.ImageLoader;
X.setSource(Y);
var ba=bb.getWidth(Y);
var bc=bb.getHeight(Y);
this.__hq(ba,bc);
},__ho:function(w,x){var self;
var y=qx.io.ImageLoader;
{};
if(!y.isFailed(x)){y.load(x,this.__hp,this);
}else{if(w!=null){w.resetSource();
}}},__hp:function(u,v){if(u!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(v.failed){this.warn("Image could not be loaded: "+u);
}this._styleSource();
},__hq:function(I,J){if(I!==this.__hd||J!==this.__he){this.__hd=I;
this.__he=J;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(f);
}});
})();
(function(){var i="dragdrop-cursor",h="_applyAction",g="alias",f="qx.ui.core.DragDropCursor",e="move",d="singleton",c="copy";
qx.Class.define(f,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:d,construct:function(){arguments.callee.base.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var j=this.getApplicationRoot();
j.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:i},action:{check:[g,c,e],apply:h,nullable:true}},members:{_applyAction:function(a,b){if(b){this.removeState(b);
}
if(a){this.addState(a);
}}}});
})();
(function(){var g="interval",f="Number",e="_applyTimeoutInterval",d="qx.event.type.Event",c="qx.event.Idle",b="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){arguments.callee.base.call(this);
var h=new qx.event.Timer(this.getTimeoutInterval());
h.addListener(g,this._onInterval,this);
h.start();
this.__iN=h;
},events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__iN:null,_applyTimeoutInterval:function(a){this.__iN.setInterval(a);
},_onInterval:function(){this.fireEvent(g);
}},destruct:function(){if(this.__iN){this.__iN.stop();
}this.__iN=null;
}});
})();
(function(){var A="top",z="right",y="bottom",x="left",w="align-start",v="qx.util.placement.AbstractAxis",u="edge-start",t="align-end",s="edge-end",r="-",o="best-fit",q="qx.util.placement.Placement",p="keep-align",n='__fX',m="direct";
qx.Class.define(q,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__fX=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:v},axisY:{check:v},edge:{check:[A,z,y,x],init:A},align:{check:[A,z,y,x],init:z}},statics:{__fY:null,compute:function(c,d,e,f,g,h,i){this.__fY=this.__fY||new qx.util.placement.Placement();
var l=g.split(r);
var k=l[0];
var j=l[1];
this.__fY.set({axisX:this.__gd(h),axisY:this.__gd(i),edge:k,align:j});
return this.__fY.compute(c,d,e,f);
},__ga:null,__gb:null,__gc:null,__gd:function(B){switch(B){case m:this.__ga=this.__ga||new qx.util.placement.DirectAxis();
return this.__ga;
case p:this.__gb=this.__gb||new qx.util.placement.KeepAlignAxis();
return this.__gb;
case o:this.__gc=this.__gc||new qx.util.placement.BestFitAxis();
return this.__gc;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__fX:null,compute:function(C,D,E,F){{};
var G=this.getAxisX()||this.__fX;
var I=G.computeStart(C.width,{start:E.left,end:E.right},{start:F.left,end:F.right},D.width,this.__ge());
var H=this.getAxisY()||this.__fX;
var top=H.computeStart(C.height,{start:E.top,end:E.bottom},{start:F.top,end:F.bottom},D.height,this.__gf());
return {left:I,top:top};
},__ge:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==x){return u;
}else if(K==z){return s;
}else if(J==x){return w;
}else if(J==z){return t;
}},__gf:function(){var b=this.getEdge();
var a=this.getAlign();

if(b==A){return u;
}else if(b==y){return s;
}else if(a==A){return w;
}else if(a==y){return t;
}}},destruct:function(){this._disposeObjects(n);
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
(function(){var h="mousedown",g="blur",f="__oW",d="singleton",c="qx.ui.popup.Manager";
qx.Class.define(c,{type:d,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__oW={};
qx.event.Registration.addListener(document.documentElement,h,this.__oY,this,true);
qx.bom.Element.addListener(window,g,this.hideAll,this);
},members:{__oW:null,add:function(i){{};
this.__oW[i.$$hash]=i;
this.__oX();
},remove:function(n){{};
var o=this.__oW;

if(o){delete o[n.$$hash];
this.__oX();
}},hideAll:function(){var b=this.__oW;

if(b){for(var a in b){b[a].exclude();
}}},__oX:function(){var r=1e7;
var q=this.__oW;

for(var p in q){q[p].setZIndex(r++);
}},__oY:function(e){var l=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var m=this.__oW;

for(var k in m){var j=m[k];

if(!j.getAutoHide()||l==j||qx.ui.core.Widget.contains(j,l)){continue;
}j.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,h,this.__oY,this,true);
this._disposeMap(f);
}});
})();
(function(){var f="abstract",e="qx.ui.layout.Abstract";
qx.Class.define(e,{type:f,extend:qx.core.Object,members:{__fu:null,_invalidChildrenCache:null,__fv:null,invalidateLayoutCache:function(){this.__fu=null;
},renderLayout:function(g,h){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__fu){return this.__fu;
}return this.__fu=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(d){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var a=this.__fv;

if(a instanceof qx.ui.core.LayoutItem){a.clearSeparators();
}},_renderSeparator:function(b,c){this.__fv.renderSeparator(b,c);
},connectToWidget:function(i){if(i&&this.__fv){throw new Error("It is not possible to manually set the connected widget.");
}this.__fv=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__fv;
},_applyLayoutChange:function(){if(this.__fv){this.__fv.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__fv.getLayoutChildren();
}},destruct:function(){this.__fv=this.__fu=null;
}});
})();
(function(){var k="qx.ui.layout.Grow";
qx.Class.define(k,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(m,n){var r=this._getLayoutChildren();
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
}},_computeSizeHint:function(){var g=this._getLayoutChildren();
var e,j;
var h=0,f=0;
var d=0,b=0;
var a=Infinity,c=Infinity;
for(var i=0,l=g.length;i<l;i++){e=g[i];
j=e.getSizeHint();
h=Math.max(h,j.width);
f=Math.max(f,j.height);
d=Math.max(d,j.minWidth);
b=Math.max(b,j.minHeight);
a=Math.min(a,j.maxWidth);
c=Math.min(c,j.maxHeight);
}return {width:h,height:f,minWidth:d,minHeight:b,maxWidth:a,maxHeight:c};
}}});
})();
(function(){var y="label",x="icon",w="Boolean",v="both",u="String",t="left",s="changeGap",r="changeShow",q="bottom",p="_applyCenter",L="changeIcon",K="qx.ui.basic.Atom",J="changeLabel",I="Integer",H="_applyIconPosition",G="top",F="right",E="_applyRich",D="_applyIcon",C="_applyShow",A="_applyLabel",B="_applyGap",z="atom";
qx.Class.define(K,{extend:qx.ui.core.Widget,construct:function(M,N){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(M!=null){this.setLabel(M);
}
if(N!=null){this.setIcon(N);
}},properties:{appearance:{refine:true,init:z},label:{apply:A,nullable:true,check:u,event:J},rich:{check:w,init:false,apply:E},icon:{check:u,apply:D,nullable:true,themeable:true,event:L},gap:{check:I,nullable:false,event:s,apply:B,themeable:true,init:4},show:{init:v,check:[v,y,x],themeable:true,inheritable:true,apply:C,event:r},iconPosition:{init:t,check:[G,F,q,t],themeable:true,apply:H},center:{init:false,check:w,themeable:true,apply:p}},members:{_createChildControlImpl:function(O){var P;

switch(O){case y:P=new qx.ui.basic.Label(this.getLabel());
P.setAnonymous(true);
P.setRich(this.getRich());
this._add(P);

if(this.getLabel()==null||this.getShow()===x){P.exclude();
}break;
case x:P=new qx.ui.basic.Image(this.getIcon());
P.setAnonymous(true);
this._addAt(P,0);

if(this.getIcon()==null||this.getShow()===y){P.exclude();
}break;
}return P||arguments.callee.base.call(this,O);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===x){this._excludeChildControl(y);
}else{this._showChildControl(y);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===y){this._excludeChildControl(x);
}else{this._showChildControl(x);
}},_applyLabel:function(k,l){var m=this.getChildControl(y,true);

if(m){m.setValue(k);
}this._handleLabel();
},_applyRich:function(f,g){var h=this.getChildControl(y,true);

if(h){h.setRich(f);
}},_applyIcon:function(c,d){var e=this.getChildControl(x,true);

if(e){e.setSource(c);
}this._handleIcon();
},_applyGap:function(Q,R){this._getLayout().setGap(Q);
},_applyShow:function(a,b){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(n,o){this._getLayout().setIconPosition(n);
},_applyCenter:function(i,j){this._getLayout().setCenter(i);
}}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(w,x){var G=qx.ui.layout.Util;
var z=this.getIconPosition();
var C=this._getLayoutChildren();
var length=C.length;
var Q,top,P,A;
var L,F;
var J=this.getGap();
var O=this.getCenter();
if(z===k||z===f){var H=length-1;
var D=-1;
var B=-1;
}else{var H=0;
var D=length;
var B=1;
}if(z==h||z==k){if(O){var K=0;

for(var i=H;i!=D;i+=B){A=C[i].getSizeHint().height;

if(A>0){K+=A;

if(i!=H){K+=J;
}}}top=Math.round((x-K)/2);
}else{top=0;
}
for(var i=H;i!=D;i+=B){L=C[i];
F=L.getSizeHint();
P=Math.min(F.maxWidth,Math.max(w,F.minWidth));
A=F.height;
Q=G.computeHorizontalAlignOffset(d,P,w);
L.renderLayout(Q,top,P,A);
if(A>0){top+=A+J;
}}}else{var E=w;
var y=null;
var N=0;

for(var i=H;i!=D;i+=B){L=C[i];
P=L.getSizeHint().width;

if(P>0){if(!y&&L instanceof qx.ui.basic.Label){y=L;
}else{E-=P;
}N++;
}}
if(N>1){var M=(N-1)*J;
E-=M;
}
if(y){var F=y.getSizeHint();
var I=Math.max(F.minWidth,Math.min(E,F.maxWidth));
E-=I;
}
if(O&&E>0){Q=Math.round(E/2);
}else{Q=0;
}
for(var i=H;i!=D;i+=B){L=C[i];
F=L.getSizeHint();
A=Math.min(F.maxHeight,Math.max(x,F.minHeight));

if(L===y){P=I;
}else{P=F.width;
}top=G.computeVerticalAlignOffset(e,F.height,x);
L.renderLayout(Q,top,P,A);
if(P>0){Q+=P+J;
}}}},_computeSizeHint:function(){var v=this._getLayoutChildren();
var length=v.length;
var n,t;
if(length===1){var n=v[0].getSizeHint();
t={width:n.width,height:n.height,minWidth:n.minWidth,minHeight:n.minHeight};
}else{var r=0,s=0;
var o=0,q=0;
var p=this.getIconPosition();
var u=this.getGap();

if(p===h||p===k){var l=0;

for(var i=0;i<length;i++){n=v[i].getSizeHint();
s=Math.max(s,n.width);
r=Math.max(r,n.minWidth);
if(n.height>0){q+=n.height;
o+=n.minHeight;
l++;
}}
if(l>1){var m=(l-1)*u;
q+=m;
o+=m;
}}else{var l=0;

for(var i=0;i<length;i++){n=v[i].getSizeHint();
q=Math.max(q,n.height);
o=Math.max(o,n.minHeight);
if(n.width>0){s+=n.width;
r+=n.minWidth;
l++;
}}
if(l>1){var m=(l-1)*u;
s+=m;
r+=m;
}}t={minWidth:r,width:s,minHeight:o,height:q};
}return t;
}}});
})();
(function(){var q="middle",p="qx.ui.layout.Util",o="left",n="center",m="top",k="bottom",j="right";
qx.Class.define(p,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(X,Y,ba){var bc,bg,bb,bh;
var bd=Y>ba;
var bi=Math.abs(Y-ba);
var bj,be;
var bf={};

for(bg in X){bc=X[bg];
bf[bg]={potential:bd?bc.max-bc.value:bc.value-bc.min,flex:bd?bc.flex:1/bc.flex,offset:0};
}while(bi!=0){bh=Infinity;
bb=0;

for(bg in bf){bc=bf[bg];

if(bc.potential>0){bb+=bc.flex;
bh=Math.min(bh,bc.potential/bc.flex);
}}if(bb==0){break;
}bh=Math.min(bi,bh*bb)/bb;
bj=0;

for(bg in bf){bc=bf[bg];

if(bc.potential>0){be=Math.min(bi,bc.potential,Math.ceil(bh*bc.flex));
bj+=be-bh*bc.flex;

if(bj>=1){bj-=1;
be-=1;
}bc.potential-=be;

if(bd){bc.offset+=be;
}else{bc.offset-=be;
}bi-=be;
}}}return bf;
},computeHorizontalAlignOffset:function(bk,bl,bm,bn,bo){if(bn==null){bn=0;
}
if(bo==null){bo=0;
}var bp=0;

switch(bk){case o:bp=bn;
break;
case j:bp=bm-bl-bo;
break;
case n:bp=Math.round((bm-bl)/2);
if(bp<bn){bp=bn;
}else if(bp<bo){bp=Math.max(bn,bm-bl-bo);
}break;
}return bp;
},computeVerticalAlignOffset:function(r,s,t,u,v){if(u==null){u=0;
}
if(v==null){v=0;
}var w=0;

switch(r){case m:w=u;
break;
case k:w=t-s-v;
break;
case q:w=Math.round((t-s)/2);
if(w<u){w=u;
}else if(w<v){w=Math.max(u,t-s-v);
}break;
}return w;
},collapseMargins:function(D){var E=0,G=0;

for(var i=0,l=arguments.length;i<l;i++){var F=arguments[i];

if(F<0){G=Math.min(G,F);
}else if(F>0){E=Math.max(E,F);
}}return E+G;
},computeHorizontalGaps:function(a,b,c){if(b==null){b=0;
}var d=0;

if(c){d+=a[0].getMarginLeft();

for(var i=1,l=a.length;i<l;i+=1){d+=this.collapseMargins(b,a[i-1].getMarginRight(),a[i].getMarginLeft());
}d+=a[l-1].getMarginRight();
}else{for(var i=1,l=a.length;i<l;i+=1){d+=a[i].getMarginLeft()+a[i].getMarginRight();
}d+=(b*(l-1));
}return d;
},computeVerticalGaps:function(e,f,g){if(f==null){f=0;
}var h=0;

if(g){h+=e[0].getMarginTop();

for(var i=1,l=e.length;i<l;i+=1){h+=this.collapseMargins(f,e[i-1].getMarginBottom(),e[i].getMarginTop());
}h+=e[l-1].getMarginBottom();
}else{for(var i=1,l=e.length;i<l;i+=1){h+=e[i].getMarginTop()+e[i].getMarginBottom();
}h+=(f*(l-1));
}return h;
},computeHorizontalSeparatorGaps:function(H,I,J){var M=qx.theme.manager.Decoration.getInstance().resolve(J);
var L=M.getInsets();
var K=L.left+L.right;
var N=0;

for(var i=0,l=H.length;i<l;i++){var O=H[i];
N+=O.getMarginLeft()+O.getMarginRight();
}N+=(I+K+I)*(l-1);
return N;
},computeVerticalSeparatorGaps:function(P,Q,R){var U=qx.theme.manager.Decoration.getInstance().resolve(R);
var T=U.getInsets();
var S=T.top+T.bottom;
var V=0;

for(var i=0,l=P.length;i<l;i++){var W=P[i];
V+=W.getMarginTop()+W.getMarginBottom();
}V+=(Q+S+Q)*(l-1);
return V;
},arrangeIdeals:function(x,y,z,A,B,C){if(y<x||B<A){if(y<x&&B<A){y=x;
B=A;
}else if(y<x){B-=(x-y);
y=x;
if(B<A){B=A;
}}else if(B<A){y-=(A-B);
B=A;
if(y<x){y=x;
}}}
if(y>z||B>C){if(y>z&&B>C){y=z;
B=C;
}else if(y>z){B+=(y-z);
y=z;
if(B>C){B=C;
}}else if(B>C){y+=(B-C);
B=C;
if(y>z){y=z;
}}}return {begin:y,end:B};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var o="qx.dynlocale",n="text",m="Boolean",l="qx.client",k="color",j="userSelect",i="changeLocale",h="enabled",g="none",f="on",J="_applyTextAlign",I="qx.ui.core.Widget",H="gecko",G="changeTextAlign",F="_applyWrap",E="changeValue",D="changeContent",C="qx.ui.basic.Label",B="A",A="_applyValue",v="center",w="_applyBuddy",t="String",u="textAlign",r="right",s="changeRich",p="_applyRich",q="click",x="label",y="webkit",z="left";
qx.Class.define(C,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(K){arguments.callee.base.call(this);

if(K!=null){this.setValue(K);
}
if(qx.core.Variant.isSet(o,f)){qx.locale.Manager.getInstance().addListener(i,this._onChangeLocale,this);
}},properties:{rich:{check:m,init:false,event:s,apply:p},wrap:{check:m,init:true,apply:F},value:{check:t,apply:A,event:E,nullable:true},buddy:{check:I,apply:w,nullable:true,init:null},textAlign:{check:[z,v,r],nullable:true,themeable:true,apply:J,event:G},appearance:{refine:true,init:x},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__fD:null,__fE:null,__fF:null,__fG:null,_getContentHint:function(){if(this.__fE){this.__fH=this.__fI();
delete this.__fE;
}return {width:this.__fH.width,height:this.__fH.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(b){if(qx.core.Variant.isSet(l,H)){if(b&&!this.isRich()){{};
return;
}}arguments.callee.base.call(this,b);
if(qx.core.Variant.isSet(l,y)){this.getContainerElement().setStyle(j,b?n:g);
this.getContentElement().setStyle(j,b?n:g);
}},_getContentHeightForWidth:function(T){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__fI(T).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(L,M){this.getContentElement().setStyle(u,L);
},_applyTextColor:function(R,S){if(R){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(R));
}else{this.getContentElement().removeStyle(k);
}},__fH:{width:0,height:0},_applyFont:function(N,O){var P;

if(N){this.__fD=qx.theme.manager.Font.getInstance().resolve(N);
P=this.__fD.getStyles();
}else{this.__fD=null;
P=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(P);
this.__fE=true;
qx.ui.core.queue.Layout.add(this);
},__fI:function(U){var Y=qx.bom.Label;
var W=this.getFont();
var V=W?this.__fD.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||B;
var X=this.getRich();
return X?Y.getHtmlSize(content,V,U):Y.getTextSize(content,V);
},_applyBuddy:function(bc,bd){if(bd!=null){bd.removeBinding(this.__fF);
this.__fF=null;
this.removeListenerById(this.__fG);
this.__fG=null;
}
if(bc!=null){this.__fF=bc.bind(h,this,h);
this.__fG=this.addListener(q,bc.focus,bc);
}},_applyRich:function(Q){this.getContentElement().setRich(Q);
this.__fE=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(c,d){if(c&&!this.isRich()){{};
}},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(ba,bb){this.getContentElement().setValue(ba);
this.__fE=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(D,ba,bb);
}},destruct:function(){if(qx.core.Variant.isSet(o,f)){qx.locale.Manager.getInstance().removeListener(i,this._onChangeLocale,this);
}if(this.__fF!=null){var a=this.getBuddy();

if(a!=null&&!a.isDisposed()){a.removeBinding(this.__fF);
}}this.__fD=this.__fF=null;
}});
})();
(function(){var d="value",c="Please use the getValue() method instead.",b="qx.html.Label",a="Please use the setValue() method instead.";
qx.Class.define(b,{extend:qx.html.Element,members:{__cU:null,_applyProperty:function(name,i){arguments.callee.base.call(this,name,i);

if(name==d){var j=this.getDomElement();
qx.bom.Label.setValue(j,i);
}},_createDomElement:function(){var l=this.__cU;
var k=qx.bom.Label.create(this._content,l);
return k;
},_copyData:function(m){return arguments.callee.base.call(this,true);
},setRich:function(f){var g=this.getDomElement();

if(g){throw new Error("The label mode cannot be modified after initial creation");
}f=!!f;

if(this.__cU==f){return;
}this.__cU=f;
return this;
},setValue:function(e){this._setProperty(d,e);
return this;
},getValue:function(){return this._getProperty(d);
},setContent:function(h){qx.log.Logger.deprecatedMethodWarning(arguments.callee,a);
return this.setValue(h);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
return this.getValue();
}}});
})();
(function(){var x="qx.client",w="gecko",v="div",u="inherit",t="text",s="value",r="",q="hidden",p="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",o="nowrap",O="auto",N="ellipsis",M="normal",L="label",K="px",J="crop",I="end",H="100%",G="visible",F="qx.bom.Label",D="Please use the setValue() method instead.",E="opera",B="Please use the getValue() method instead.",C="block",z="none",A="-1000px",y="absolute";
qx.Class.define(F,{statics:{__hr:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__hs:function(){var V=this.__hu(false);
document.body.insertBefore(V,document.body.firstChild);
return this._textElement=V;
},__ht:function(){var n=this.__hu(true);
document.body.insertBefore(n,document.body.firstChild);
return this._htmlElement=n;
},__hu:function(a){var b=qx.bom.Element.create(v);
var c=b.style;
c.width=c.height=O;
c.left=c.top=A;
c.visibility=q;
c.position=y;
c.overflow=G;

if(a){c.whiteSpace=M;
}else{c.whiteSpace=o;

if(qx.core.Variant.isSet(x,w)){var d=document.createElementNS(p,L);
for(var e in this.__hr){d.style[e]=u;
}b.appendChild(d);
}}return b;
},__hv:function(P){var Q={};

if(P){Q.whiteSpace=M;
}else if(qx.core.Variant.isSet(x,w)){Q.display=C;
}else{Q.overflow=q;
Q.whiteSpace=o;
Q.textOverflow=N;
Q.userSelect=z;
if(qx.core.Variant.isSet(x,E)){Q.OTextOverflow=N;
}}return Q;
},create:function(content,W,X){if(!X){X=window;
}
if(W){var Y=X.document.createElement(v);
Y.useHtml=true;
}else if(qx.core.Variant.isSet(x,w)){var Y=X.document.createElement(v);
var ba=X.document.createElementNS(p,L);
ba.style.cursor=u;
ba.style.color=u;
ba.style.overflow=q;
ba.style.maxWidth=H;
for(var bb in this.__hr){ba.style[bb]=u;
}ba.setAttribute(J,I);
Y.appendChild(ba);
}else{var Y=X.document.createElement(v);
qx.bom.element.Style.setStyles(Y,this.__hv(W));
}
if(content){this.setValue(Y,content);
}return Y;
},setValue:function(be,bf){bf=bf||r;

if(be.useHtml){be.innerHTML=bf;
}else if(qx.core.Variant.isSet(x,w)){be.firstChild.setAttribute(s,bf);
}else{qx.bom.element.Attribute.set(be,t,bf);
}},getValue:function(bg){if(bg.useHtml){return bg.innerHTML;
}else if(qx.core.Variant.isSet(x,w)){return bg.firstChild.getAttribute(s)||r;
}else{return qx.bom.element.Attribute.get(bg,t);
}},getHtmlSize:function(content,S,T){var U=this._htmlElement||this.__ht();
U.style.width=T!==undefined?T+K:O;
U.innerHTML=content;
return this.__hw(U,S);
},getTextSize:function(k,l){var m=this._textElement||this.__hs();

if(qx.core.Variant.isSet(x,w)){m.firstChild.setAttribute(s,k);
}else{qx.bom.element.Attribute.set(m,t,k);
}return this.__hw(m,l);
},__hw:function(f,g){var h=this.__hr;

if(!g){g={};
}
for(var i in h){f.style[i]=g[i]||r;
}var j=qx.bom.element.Dimension.getSize(f);

if(qx.core.Variant.isSet(x,w)){if(!qx.bom.client.Platform.WIN){j.width++;
}}return j;
},setContent:function(bc,bd){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
this.setValue(bc,bd);
},getContent:function(R){qx.log.Logger.deprecatedMethodWarning(arguments.callee,B);
return this.getValue(R);
}}});
})();
(function(){var g="mshtml",f="qx.client",e="qx.bom.element.Dimension",d="paddingRight",c="paddingLeft",b="paddingTop",a="paddingBottom";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"gecko":function(j){if(j.getBoundingClientRect){var k=j.getBoundingClientRect();
return Math.round(k.right)-Math.round(k.left);
}else{return j.offsetWidth;
}},"default":function(i){return i.offsetWidth;
}}),getHeight:qx.core.Variant.select(f,{"gecko":function(t){if(t.getBoundingClientRect){var u=t.getBoundingClientRect();
return Math.round(u.bottom)-Math.round(u.top);
}else{return t.offsetHeight;
}},"default":function(s){return s.offsetHeight;
}}),getSize:function(h){return {width:this.getWidth(h),height:this.getHeight(h)};
},__gt:{visible:true,hidden:true},getContentWidth:function(l){var n=qx.bom.element.Style;
var o=qx.bom.element.Overflow.getX(l);
var p=parseInt(n.get(l,c),10);
var r=parseInt(n.get(l,d),10);

if(this.__gt[o]){return l.clientWidth-p-r;
}else{if(l.clientWidth>=l.scrollWidth){return Math.max(l.clientWidth,l.scrollWidth)-p-r;
}else{var q=l.scrollWidth-p;
var m=qx.bom.client.Engine;

if(m.NAME===g&&m.VERSION==6){q-=r;
}return q;
}}},getContentHeight:function(v){var x=qx.bom.element.Style;
var z=qx.bom.element.Overflow.getY(v);
var A=parseInt(x.get(v,b),10);
var y=parseInt(x.get(v,a),10);

if(this.__gt[z]){return v.clientHeight-A-y;
}else{if(v.clientHeight>=v.scrollHeight){return Math.max(v.clientHeight,v.scrollHeight)-A-y;
}else{var B=v.scrollHeight-A;
var w=qx.bom.client.Engine;

if(w.NAME===g&&w.VERSION==6){B-=y;
}return B;
}}},getContentSize:function(C){return {width:this.getContentWidth(C),height:this.getContentHeight(C)};
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(d){return arguments.length==1;
},getEnabled:function(){},setRequired:function(f){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(a){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var i="Use 'getBlocker().getContentBlockerElement()' instead.",h="Use 'getBlocker().getBlockerElement()' instead.",g="_applyBlockerColor",f="Number",e="__pB",d="qx.ui.core.MBlocker",c="_applyBlockerOpacity",b="Color";
qx.Mixin.define(d,{construct:function(){this.__pB=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:b,init:null,nullable:true,apply:g,themeable:true},blockerOpacity:{check:f,init:1,apply:c,themeable:true}},members:{__pB:null,_applyBlockerColor:function(j,k){this.__pB.setColor(j);
},_applyBlockerOpacity:function(l,m){this.__pB.setOpacity(l);
},block:function(){this.__pB.block();
},isBlocked:function(){return this.__pB.isBlocked();
},unblock:function(){this.__pB.unblock();
},forceUnblock:function(){this.__pB.forceUnblock();
},blockContent:function(a){this.__pB.blockContent(a);
},isContentBlocked:function(){return this.__pB.isContentBlocked();
},unblockContent:function(){this.__pB.unblockContent();
},forceUnblockContent:function(){this.__pB.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return this.__pB.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.__pB.getBlockerElement();
},getBlocker:function(){return this.__pB;
}},destruct:function(){this._disposeObjects(e);
}});
})();
(function(){var l="qx.ui.window.Window",k="changeModal",j="changeVisibility",i="changeActive",h="_applyActiveWindow",g="__ll",f="__lm",d="qx.ui.window.MDesktop";
qx.Mixin.define(d,{properties:{activeWindow:{check:l,apply:h,init:null,nullable:true}},members:{__ll:null,__lm:null,getWindowManager:function(){if(!this.__lm){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__lm;
},supportsMaximize:function(){return true;
},setWindowManager:function(p){if(this.__lm){this.__lm.setDesktop(null);
}p.setDesktop(this);
this.__lm=p;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(n,o){this.getWindowManager().changeActiveWindow(n,o);

if(n){n.setActive(true);
}
if(o){o.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(m){if(qx.Class.isDefined(l)&&m instanceof qx.ui.window.Window){this._addWindow(m);
}},_addWindow:function(b){if(!qx.lang.Array.contains(this.getWindows(),b)){this.getWindows().push(b);
b.addListener(i,this._onChangeActive,this);
b.addListener(k,this._onChangeModal,this);
b.addListener(j,this._onChangeVisibility,this);
}
if(b.getActive()){this.setActiveWindow(b);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(c){if(qx.Class.isDefined(l)&&c instanceof qx.ui.window.Window){this._removeWindow(c);
}},_removeWindow:function(a){qx.lang.Array.remove(this.getWindows(),a);
a.removeListener(i,this._onChangeActive,this);
a.removeListener(k,this._onChangeModal,this);
a.removeListener(j,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__ll){this.__ll=[];
}return this.__ll;
}},destruct:function(){this._disposeArray(g);
this._disposeObjects(f);
}});
})();
(function(){var r="contextmenu",q="help",p="qx.client",o="changeGlobalCursor",n="abstract",m="Boolean",l="root",k="",j=" !important",i="_applyGlobalCursor",f="_applyNativeHelp",h=";",g="qx.ui.root.Abstract",d="String",c="*";
qx.Class.define(g,{type:n,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:l},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:d,nullable:true,themeable:true,apply:i,event:o},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:m,init:false,apply:f}},members:{__kw:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(p,{"mshtml":function(s,t){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__kw;

if(!z){this.__kw=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,c,qx.bom.element.Cursor.compile(w).replace(h,k)+j);
}}}),_applyNativeContextMenu:function(u,v){if(u){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(p,{"mshtml":function(a,b){if(b===false){qx.bom.Event.removeNativeListener(document,q,qx.lang.Function.returnFalse);
}
if(a===false){qx.bom.Event.addNativeListener(document,q,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__kw=null;
},defer:function(A,B){qx.ui.core.MChildrenHandling.remap(B);
}});
})();
(function(){var q="resize",p="position",o="0px",n="webkit",m="paddingLeft",l="$$widget",k="qx.ui.root.Application",j="hidden",i="qx.client",h="div",d="paddingTop",g="100%",f="absolute";
qx.Class.define(k,{extend:qx.ui.root.Abstract,construct:function(c){this.__pF=qx.dom.Node.getWindow(c);
this.__pG=c;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__pF,q,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__pF:null,__pG:null,_createContainerElement:function(){var r=this.__pG;

if(qx.core.Variant.isSet(i,n)){if(!r.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var v=r.documentElement.style;
var s=r.body.style;
v.overflow=s.overflow=j;
v.padding=v.margin=s.padding=s.margin=o;
v.width=v.height=s.width=s.height=g;
var u=r.createElement(h);
r.body.appendChild(u);
var t=new qx.html.Root(u);
t.setStyle(p,f);
t.setAttribute(l,this.toHashCode());
return t;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var z=qx.bom.Viewport.getWidth(this.__pF);
var A=qx.bom.Viewport.getHeight(this.__pF);
return {minWidth:z,width:z,maxWidth:z,minHeight:A,height:A,maxHeight:A};
},_applyPadding:function(a,b,name){if(a&&(name==d||name==m)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,a,b,name);
},_applyDecorator:function(w,x){arguments.callee.base.call(this,w,x);

if(!w){return;
}var y=this.getDecoratorElement().getInsets();

if(y.left||y.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__pF=this.__pG=null;
}});
})();
(function(){var w="zIndex",v="px",u="keydown",t="deactivate",s="This method is not needed anymore.",r="resize",q="keyup",p="keypress",o="backgroundColor",n="_applyOpacity",J="Use 'getBlockerElement' instead.",I="opacity",H="__mR",G="interval",F="__mP",E="Tab",D="Color",C="qx.ui.root.Page",B="Use 'getContentBlockerElement' instead.",A="Number",y="qx.ui.core.Blocker",z="__mU",x="_applyColor";
qx.Class.define(y,{extend:qx.core.Object,construct:function(k){arguments.callee.base.call(this);
this._widget=k;
this._isPageRoot=(qx.Class.isDefined(C)&&k instanceof qx.ui.root.Page);

if(this._isPageRoot){k.addListener(r,this.__mV,this);
}this.__mM=[];
this.__mN=[];
this.__mO=[];
},properties:{color:{check:D,init:null,nullable:true,apply:x,themeable:true},opacity:{check:A,init:1,apply:n,themeable:true}},members:{__mP:null,__mQ:0,__mR:null,__mO:null,__mM:null,__mN:null,__mS:null,__mT:0,__mU:null,_isPageRoot:false,_widget:null,__mV:function(e){var l=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:l.width,height:l.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:l.width,height:l.height});
}},_applyColor:function(L,M){var N=qx.theme.manager.Color.getInstance().resolve(L);
this.__mW(o,N);
},_applyOpacity:function(U,V){this.__mW(I,U);
},__mW:function(g,h){var j=[];
this.__mP&&j.push(this.__mP);
this.__mR&&j.push(this.__mR);

for(var i=0;i<j.length;i++){j[i].setStyle(g,h);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
this.__mT+=1;

if(this.__mT==1){this.__mS=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
this.__mT-=1;

if(this.__mT==0){this._widget.setAnonymous(this.__mS);
}},_backupActiveWidget:function(){var K=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__mM.push(K.getActive());
this.__mN.push(K.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var T=this.__mM.length;

if(T>0){var S=this.__mM[T-1];

if(S){qx.bom.Element.activate(S);
}this.__mM.pop();
}var R=this.__mN.length;

if(R>0){var S=this.__mN[R-1];

if(S){qx.bom.Element.focus(this.__mN[R-1]);
}this.__mN.pop();
}},__mX:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,J);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__mP){this.__mP=this.__mX();
this.__mP.setStyle(w,15);
this._widget.getContainerElement().add(this.__mP);
this.__mP.exclude();
}return this.__mP;
},block:function(){this.__mQ++;

if(this.__mQ<2){this._backupActiveWidget();
var c=this.getBlockerElement();
c.include();
c.activate();
c.addListener(t,this.__nd,this);
c.addListener(p,this.__nc,this);
c.addListener(u,this.__nc,this);
c.addListener(q,this.__nc,this);
}},isBlocked:function(){return this.__mQ>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__mQ--;

if(this.__mQ<1){this.__mY();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__mQ=0;
this.__mY();
},__mY:function(){this._restoreActiveWidget();
var m=this.getBlockerElement();
m.removeListener(t,this.__nd,this);
m.removeListener(p,this.__nc,this);
m.removeListener(u,this.__nc,this);
m.removeListener(q,this.__nc,this);
m.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,B);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__mR){this.__mR=this.__mX();
this._widget.getContentElement().add(this.__mR);
this.__mR.exclude();
}return this.__mR;
},blockContent:function(a){var b=this.getContentBlockerElement();
b.setStyle(w,a);
this.__mO.push(a);

if(this.__mO.length<2){b.include();

if(this._isPageRoot){if(!this.__mU){this.__mU=new qx.event.Timer(300);
this.__mU.addListener(G,this.__nb,this);
}this.__mU.start();
this.__nb();
}}},isContentBlocked:function(){return this.__mO.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mO.pop();
var d=this.__mO[this.__mO.length-1];
var f=this.getContentBlockerElement();
f.setStyle(w,d);

if(this.__mO.length<1){this.__na();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mO=[];
var Q=this.getContentBlockerElement();
Q.setStyle(w,null);
this.__na();
},__na:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__mU.stop();
}},__nb:function(){var O=this._widget.getContainerElement().getDomElement();
var P=qx.dom.Node.getDocument(O);
this.getContentBlockerElement().setStyles({height:P.documentElement.scrollHeight+v,width:P.documentElement.scrollWidth+v});
},__nc:function(e){if(e.getKeyIdentifier()==E){e.stop();
}},__nd:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(r,this.__mV,this);
}this._disposeObjects(H,F,z);
this.__mS=this.__mM=this.__mN=this._widget=this.__mO=null;
}});
})();
(function(){var v="cursor",u="100%",t="dblclick",s="mshtml",r="mouseup",q="mousedown",p="disappear",o="appear",n="contextmenu",m="mousewheel",f=")",l="mouseover",i="mouseout",c="qx.html.Blocker",b="click",h="repeat",g="mousemove",j="url(",a="qx.client",k="qx/static/blank.gif",d="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(x,y){arguments.callee.base.call(this);
var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
this.setStyles({position:d,width:u,height:u,opacity:y||0,backgroundColor:x});
this.addListener(q,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(g,this._stopPropagation,this);
this.addListener(l,this._stopPropagation,this);
this.addListener(i,this._stopPropagation,this);
this.addListener(m,this._stopPropagation,this);
this.addListener(n,this._stopPropagation,this);
if(qx.core.Variant.isSet(a,s)){this.setStyles({backgroundImage:j+qx.util.ResourceManager.getInstance().toUri(k)+f,backgroundRepeat:h});
}this.addListener(o,this.__oe,this);
this.addListener(p,this.__oe,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__oe:function(){var w=this.getStyle(v);
this.setStyle(v,null,true);
this.setStyle(v,w,true);
}}});
})();
(function(){var W="keypress",V="focusout",U="activate",T="__ba",S="Tab",R="singleton",Q="deactivate",P="focusin",O="qx.ui.core.FocusHandler";
qx.Class.define(O,{extend:qx.core.Object,type:R,construct:function(){arguments.callee.base.call(this);
this.__ba={};
},members:{__ba:null,__bb:null,__bc:null,__bd:null,connectTo:function(be){be.addListener(W,this.__be,this);
be.addListener(P,this._onFocusIn,this,true);
be.addListener(V,this._onFocusOut,this,true);
be.addListener(U,this._onActivate,this,true);
be.addListener(Q,this._onDeactivate,this,true);
},addRoot:function(E){this.__ba[E.$$hash]=E;
},removeRoot:function(t){delete this.__ba[t.$$hash];
},getActiveWidget:function(){return this.__bb;
},isActive:function(a){return this.__bb==a;
},getFocusedWidget:function(){return this.__bc;
},isFocused:function(u){return this.__bc==u;
},isFocusRoot:function(y){return !!this.__ba[y.$$hash];
},_onActivate:function(e){var A=e.getTarget();
this.__bb=A;
var z=this.__bf(A);

if(z!=this.__bd){this.__bd=z;
}},_onDeactivate:function(e){var F=e.getTarget();

if(this.__bb==F){this.__bb=null;
}},_onFocusIn:function(e){var b=e.getTarget();

if(b!=this.__bc){this.__bc=b;
b.visualizeFocus();
}},_onFocusOut:function(e){var v=e.getTarget();

if(v==this.__bc){this.__bc=null;
v.visualizeBlur();
}},__be:function(e){if(e.getKeyIdentifier()!=S){return;
}
if(!this.__bd){return;
}e.stopPropagation();
e.preventDefault();
var w=this.__bc;

if(!e.isShiftPressed()){var x=w?this.__bj(w):this.__bh();
}else{var x=w?this.__bk(w):this.__bi();
}if(x){x.tabFocus();
}},__bf:function(bc){var bd=this.__ba;

while(bc){if(bd[bc.$$hash]){return bc;
}bc=bc.getLayoutParent();
}return null;
},__bg:function(g,h){if(g===h){return 0;
}var k=g.getTabIndex()||0;
var j=h.getTabIndex()||0;

if(k!=j){return k-j;
}var q=g.getContainerElement().getDomElement();
var p=h.getContainerElement().getDomElement();
var o=qx.bom.element.Location;
var n=o.get(q);
var m=o.get(p);
if(n.top!=m.top){return n.top-m.top;
}if(n.left!=m.left){return n.left-m.left;
}var r=g.getZIndex();
var s=h.getZIndex();

if(r!=s){return r-s;
}return 0;
},__bh:function(){return this.__bn(this.__bd,null);
},__bi:function(){return this.__bo(this.__bd,null);
},__bj:function(K){var L=this.__bd;

if(L==K){return this.__bh();
}
while(K&&K.getAnonymous()){K=K.getLayoutParent();
}
if(K==null){return [];
}var M=[];
this.__bl(L,K,M);
M.sort(this.__bg);
var N=M.length;
return N>0?M[0]:this.__bh();
},__bk:function(X){var Y=this.__bd;

if(Y==X){return this.__bi();
}
while(X&&X.getAnonymous()){X=X.getLayoutParent();
}
if(X==null){return [];
}var ba=[];
this.__bm(Y,X,ba);
ba.sort(this.__bg);
var bb=ba.length;
return bb>0?ba[bb-1]:this.__bi();
},__bl:function(parent,G,H){var I=parent.getLayoutChildren();
var J;

for(var i=0,l=I.length;i<l;i++){J=I[i];
if(!(J instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(J)&&J.isEnabled()&&J.isVisible()){if(J.isTabable()&&this.__bg(G,J)<0){H.push(J);
}this.__bl(J,G,H);
}}},__bm:function(parent,bf,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()&&this.__bg(bf,bi)>0){bg.push(bi);
}this.__bm(bi,bf,bg);
}}},__bn:function(parent,B){var C=parent.getLayoutChildren();
var D;

for(var i=0,l=C.length;i<l;i++){D=C[i];
if(!(D instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(D)&&D.isEnabled()&&D.isVisible()){if(D.isTabable()){if(B==null||this.__bg(D,B)<0){B=D;
}}B=this.__bn(D,B);
}}return B;
},__bo:function(parent,c){var d=parent.getLayoutChildren();
var f;

for(var i=0,l=d.length;i<l;i++){f=d[i];
if(!(f instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(f)&&f.isEnabled()&&f.isVisible()){if(f.isTabable()){if(c==null||this.__bg(f,c)>0){c=f;
}}c=this.__bo(f,c);
}}return c;
}},destruct:function(){this._disposeMap(T);
this.__bc=this.__bb=this.__bd=null;
}});
})();
(function(){var v="qx.client",u="head",t="text/css",s="stylesheet",r="}",q='@import "',p="{",o='";',n="qx.bom.Stylesheet",m="link",l="style";
qx.Class.define(n,{statics:{includeFile:function(ba,bb){if(!bb){bb=document;
}var bc=bb.createElement(m);
bc.type=t;
bc.rel=s;
bc.href=qx.util.ResourceManager.getInstance().toUri(ba);
var bd=bb.getElementsByTagName(u)[0];
bd.appendChild(bc);
},createElement:qx.core.Variant.select(v,{"mshtml":function(j){var k=document.createStyleSheet();

if(j){k.cssText=j;
}return k;
},"default":function(A){var B=document.createElement(l);
B.type=t;

if(A){B.appendChild(document.createTextNode(A));
}document.getElementsByTagName(u)[0].appendChild(B);
return B.sheet;
}}),addRule:qx.core.Variant.select(v,{"mshtml":function(L,M,N){L.addRule(M,N);
},"default":function(C,D,E){C.insertRule(D+p+E+r,C.cssRules.length);
}}),removeRule:qx.core.Variant.select(v,{"mshtml":function(V,W){var X=V.rules;
var Y=X.length;

for(var i=Y-1;i>=0;--i){if(X[i].selectorText==W){V.removeRule(i);
}}},"default":function(O,P){var Q=O.cssRules;
var R=Q.length;

for(var i=R-1;i>=0;--i){if(Q[i].selectorText==P){O.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(v,{"mshtml":function(be){var bf=be.rules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){be.removeRule(i);
}},"default":function(S){var T=S.cssRules;
var U=T.length;

for(var i=U-1;i>=0;i--){S.deleteRule(i);
}}}),addImport:qx.core.Variant.select(v,{"mshtml":function(c,d){c.addImport(d);
},"default":function(a,b){a.insertRule(q+b+o,a.cssRules.length);
}}),removeImport:qx.core.Variant.select(v,{"mshtml":function(w,x){var y=w.imports;
var z=y.length;

for(var i=z-1;i>=0;i--){if(y[i].href==x){w.removeImport(i);
}}},"default":function(e,f){var g=e.cssRules;
var h=g.length;

for(var i=h-1;i>=0;i--){if(g[i].href==f){e.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(v,{"mshtml":function(F){var G=F.imports;
var H=G.length;

for(var i=H-1;i>=0;i--){F.removeImport(i);
}},"default":function(I){var J=I.cssRules;
var K=J.length;

for(var i=K-1;i>=0;i--){if(J[i].type==J[i].IMPORT_RULE){I.deleteRule(i);
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
qx.Class.define(a,{extend:qx.html.Element,construct:function(c){arguments.callee.base.call(this);

if(c!=null){this.useElement(c);
}},members:{useElement:function(b){arguments.callee.base.call(this,b);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var T="_applyLayoutChange",S="left",R="top",Q="Decorator",P="Integer",O="x",N="y",M="auto",L="qx.ui.layout.Dock",K="_applySort",E="west",J="north",H="south",D="center",C="east",G="Boolean",F="bottom",I="right";
qx.Class.define(L,{extend:qx.ui.layout.Abstract,construct:function(a,b,c,d){arguments.callee.base.call(this);

if(a){this.setSpacingX(a);
}
if(b){this.setSpacingY(b);
}
if(c){this.setSeparatorX(c);
}
if(d){this.setSeparatorY(d);
}},properties:{sort:{check:[M,N,O],init:M,apply:K},separatorX:{check:Q,nullable:true,apply:T},separatorY:{check:Q,nullable:true,apply:T},connectSeparators:{check:G,init:false,apply:T},spacingX:{check:P,init:0,apply:T},spacingY:{check:P,init:0,apply:T}},members:{__oP:null,__oQ:null,verifyLayoutProperty:null,_applySort:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__oR:{north:1,south:2,west:3,east:4,center:5},__oS:{1:R,2:F,3:S,4:I},__oT:function(){var U=this._getLayoutChildren();
var bd,W;
var length=U.length;
var Y=[];
var bc=[];
var ba=[];
var V=this.getSort()===N;
var bb=this.getSort()===O;

for(var i=0;i<length;i++){bd=U[i];
ba=bd.getLayoutProperties().edge;

if(ba===D){if(W){throw new Error("It is not allowed to have more than one child aligned to 'center'!");
}W=bd;
}else if(bb||V){if(ba===J||ba===H){V?Y.push(bd):bc.push(bd);
}else if(ba===E||ba===C){V?bc.push(bd):Y.push(bd);
}}else{Y.push(bd);
}}var be=Y.concat(bc);

if(W){be.push(W);
}this.__oP=be;
var X=[];

for(var i=0;i<length;i++){ba=be[i].getLayoutProperties().edge;
X[i]=this.__oR[ba]||5;
}this.__oQ=X;
delete this._invalidChildrenCache;
},renderLayout:function(bf,bg){if(this._invalidChildrenCache){this.__oT();
}var bz=qx.ui.layout.Util;
var bm=this.__oP;
var bA=this.__oQ;
var length=bm.length;
var bp,bi,bo,bu,bv,bF,bs,bj,bC;
var bJ=[];
var br=[];
var bI=this._getSeparatorWidths();
var bN=this.getSpacingX();
var bM=this.getSpacingY();
var bn=-bN;
var bB=-bM;

if(bI.x){bn-=bI.x+bN;
}
if(bI.y){bB-=bI.y+bM;
}
for(var i=0;i<length;i++){bi=bm[i];
bu=bi.getLayoutProperties();
bo=bi.getSizeHint();
bs=bo.width;
bj=bo.height;

if(bu.width!=null){bs=Math.floor(bf*parseFloat(bu.width)/100);

if(bs<bo.minWidth){bs=bo.minWidth;
}else if(bs>bo.maxWidth){bs=bo.maxWidth;
}}
if(bu.height!=null){bj=Math.floor(bg*parseFloat(bu.height)/100);

if(bj<bo.minHeight){bj=bo.minHeight;
}else if(bj>bo.maxHeight){bj=bo.maxHeight;
}}bJ[i]=bs;
br[i]=bj;
switch(bA[i]){case 1:case 2:bB+=bj+bi.getMarginTop()+bi.getMarginBottom()+bM;

if(bI.y){bB+=bI.y+bM;
}break;
case 3:case 4:bn+=bs+bi.getMarginLeft()+bi.getMarginRight()+bN;

if(bI.x){bn+=bI.x+bN;
}break;
default:bn+=bs+bi.getMarginLeft()+bi.getMarginRight()+bN;
bB+=bj+bi.getMarginTop()+bi.getMarginBottom()+bM;

if(bI.x){bn+=bI.x+bN;
}
if(bI.y){bB+=bI.y+bM;
}}}if(bn!=bf){bp={};
bF=bn<bf;

for(var i=0;i<length;i++){bi=bm[i];

switch(bA[i]){case 3:case 4:case 5:bv=bi.getLayoutProperties().flex;
if(bv==null&&bA[i]==5){bv=1;
}
if(bv>0){bo=bi.getSizeHint();
bp[i]={min:bo.minWidth,value:bJ[i],max:bo.maxWidth,flex:bv};
}}}var bk=bz.computeFlexOffsets(bp,bf,bn);

for(var i in bk){bC=bk[i].offset;
bJ[i]+=bC;
bn+=bC;
}}if(bB!=bg){bp=[];
bF=bB<bg;

for(var i=0;i<length;i++){bi=bm[i];

switch(bA[i]){case 1:case 2:case 5:bv=bi.getLayoutProperties().flex;
if(bv==null&&bA[i]==5){bv=1;
}
if(bv>0){bo=bi.getSizeHint();
bp[i]={min:bo.minHeight,value:br[i],max:bo.maxHeight,flex:bv};
}}}var bk=bz.computeFlexOffsets(bp,bg,bB);

for(var i in bk){bC=bk[i].offset;
br[i]+=bC;
bB+=bC;
}}this._clearSeparators();
var bG=this.getSeparatorX(),bH=this.getSeparatorY();
var bK=this.getConnectSeparators();
var bx=0,bE=0;
var bR,top,bs,bj,bw,bO;
var by,bL,bQ,bh;
var bP,bq,bt,bl;
var bD=this.__oS;

for(var i=0;i<length;i++){bi=bm[i];
bO=bA[i];
bo=bi.getSizeHint();
bP=bi.getMarginTop();
bq=bi.getMarginBottom();
bt=bi.getMarginLeft();
bl=bi.getMarginRight();
switch(bO){case 1:case 2:bs=bf-bt-bl;
if(bs<bo.minWidth){bs=bo.minWidth;
}else if(bs>bo.maxWidth){bs=bo.maxWidth;
}bj=br[i];
top=bx+bz.computeVerticalAlignOffset(bD[bO],bj,bg,bP,bq);
bR=bE+bz.computeHorizontalAlignOffset(bi.getAlignX()||S,bs,bf,bt,bl);
if(bI.y){if(bO==1){bL=bx+bj+bP+bM+bq;
}else{bL=bx+bg-bj-bP-bM-bq-bI.y;
}by=bR;
bQ=bf;

if(bK&&by>0){by-=bN+bt;
bQ+=(bN)*2;
}else{by-=bt;
}this._renderSeparator(bH,{left:by,top:bL,width:bQ,height:bI.y});
}bw=bj+bP+bq+bM;

if(bI.y){bw+=bI.y+bM;
}bg-=bw;
if(bO==1){bx+=bw;
}break;
case 3:case 4:bj=bg-bP-bq;
if(bj<bo.minHeight){bj=bo.minHeight;
}else if(bj>bo.maxHeight){bj=bo.maxHeight;
}bs=bJ[i];
bR=bE+bz.computeHorizontalAlignOffset(bD[bO],bs,bf,bt,bl);
top=bx+bz.computeVerticalAlignOffset(bi.getAlignY()||R,bj,bg,bP,bq);
if(bI.x){if(bO==3){by=bE+bs+bt+bN+bl;
}else{by=bE+bf-bs-bt-bN-bl-bI.x;
}bL=top;
bh=bg;

if(bK&&bL>0){bL-=bM+bP;
bh+=(bM)*2;
}else{bL-=bP;
}this._renderSeparator(bG,{left:by,top:bL,width:bI.x,height:bh});
}bw=bs+bt+bl+bN;

if(bI.x){bw+=bI.x+bN;
}bf-=bw;
if(bO==3){bE+=bw;
}break;
default:bs=bf-bt-bl;
bj=bg-bP-bq;
if(bs<bo.minWidth){bs=bo.minWidth;
}else if(bs>bo.maxWidth){bs=bo.maxWidth;
}if(bj<bo.minHeight){bj=bo.minHeight;
}else if(bj>bo.maxHeight){bj=bo.maxHeight;
}bR=bE+bz.computeHorizontalAlignOffset(bi.getAlignX()||S,bs,bf,bt,bl);
top=bx+bz.computeVerticalAlignOffset(bi.getAlignY()||R,bj,bg,bP,bq);
}bi.renderLayout(bR,top,bs,bj);
}},_getSeparatorWidths:function(){var bT=this.getSeparatorX(),bS=this.getSeparatorY();

if(bT||bS){var bY=qx.theme.manager.Decoration.getInstance();
}
if(bT){var ca=bY.resolve(bT);
var bV=ca.getInsets();
var bW=bV.left+bV.right;
}
if(bS){var cb=bY.resolve(bS);
var bU=cb.getInsets();
var bX=bU.top+bU.bottom;
}return {x:bW||0,y:bX||0};
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__oT();
}var h=this.__oP;
var s=this.__oQ;
var length=h.length;
var m,t;
var o,n;
var p=0,A=0;
var e=0,v=0;
var q=0,z=0;
var f=0,u=0;
var w=this._getSeparatorWidths();
var y=this.getSpacingX(),x=this.getSpacingY();
var k=-y,j=-x;

if(w.x){k-=w.x+y;
}
if(w.y){j-=w.y+x;
}for(var i=0;i<length;i++){t=h[i];
m=t.getSizeHint();
o=t.getMarginLeft()+t.getMarginRight();
n=t.getMarginTop()+t.getMarginBottom();
switch(s[i]){case 1:case 2:q=Math.max(q,m.width+p+o);
z=Math.max(z,m.minWidth+A+o);
f+=m.height+n;
u+=m.minHeight+n;
j+=x;

if(w.y){j+=w.y+x;
}break;
case 3:case 4:e=Math.max(e,m.height+f+n);
v=Math.max(v,m.minHeight+u+n);
p+=m.width+o;
A+=m.minWidth+o;
k+=y;

if(w.x){k+=w.x+y;
}break;
default:p+=m.width+o;
A+=m.minWidth+o;
f+=m.height+n;
u+=m.minHeight+n;
k+=y;

if(w.x){k+=w.x+y;
}j+=x;

if(w.y){j+=w.y+x;
}}}var l=Math.max(A,z)+k;
var B=Math.max(p,q)+k;
var r=Math.max(v,u)+j;
var g=Math.max(e,f)+j;
return {minWidth:l,width:B,minHeight:r,height:g};
}},destruct:function(){this.__oQ=this.__oP=null;
}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var v="scrollbar-y",u="scrollbar-x",t="pane",s="auto",r="corner",q="on",p="changeVisibility",o="scroll",n="_computeScrollbars",m="off",f="scrollY",l="qx.ui.core.scroll.AbstractScrollArea",i="abstract",c="update",b="scrollX",h="mousewheel",g="scrollbarY",j="scrollbarX",a="horizontal",k="scrollarea",d="vertical";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:i,construct:function(){arguments.callee.base.call(this);
var y=new qx.ui.layout.Grid();
y.setColumnFlex(0,1);
y.setRowFlex(0,1);
this._setLayout(y);
this.addListener(h,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:k},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[s,q,m],init:s,themeable:true,apply:n},scrollbarY:{check:[s,q,m],init:s,themeable:true,apply:n},scrollbar:{group:[j,g]}},members:{_createChildControlImpl:function(z){var A;

switch(z){case t:A=new qx.ui.core.scroll.ScrollPane();
A.addListener(c,this._computeScrollbars,this);
A.addListener(b,this._onScrollPaneX,this);
A.addListener(f,this._onScrollPaneY,this);
this._add(A,{row:0,column:0});
break;
case u:A=this._createScrollBar(a);
A.setMinWidth(0);
A.exclude();
A.addListener(o,this._onScrollBarX,this);
A.addListener(p,this._onChangeScrollbarXVisibility,this);
this._add(A,{row:1,column:0});
break;
case v:A=this._createScrollBar(d);
A.setMinHeight(0);
A.exclude();
A.addListener(o,this._onScrollBarY,this);
A.addListener(p,this._onChangeScrollbarYVisibility,this);
this._add(A,{row:0,column:1});
break;
case r:A=new qx.ui.core.Widget();
A.setWidth(0);
A.setHeight(0);
A.exclude();
this._add(A,{row:1,column:1});
break;
}return A||arguments.callee.base.call(this,z);
},getPaneSize:function(){return this.getChildControl(t).getInnerSize();
},getItemTop:function(ba){return this.getChildControl(t).getItemTop(ba);
},getItemBottom:function(Q){return this.getChildControl(t).getItemBottom(Q);
},getItemLeft:function(x){return this.getChildControl(t).getItemLeft(x);
},getItemRight:function(U){return this.getChildControl(t).getItemRight(U);
},scrollToX:function(bb){qx.ui.core.queue.Manager.flush();
this.getChildControl(u).scrollTo(bb);
},scrollByX:function(R){qx.ui.core.queue.Manager.flush();
this.getChildControl(u).scrollBy(R);
},getScrollX:function(){var P=this.getChildControl(u,true);
return P?P.getPosition():0;
},scrollToY:function(S){qx.ui.core.queue.Manager.flush();
this.getChildControl(v).scrollTo(S);
},scrollByY:function(T){qx.ui.core.queue.Manager.flush();
this.getChildControl(v).scrollBy(T);
},getScrollY:function(){var w=this.getChildControl(v,true);
return w?w.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(t).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(t).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var N=this._isChildControlVisible(u);
var O=this._isChildControlVisible(v);
var M=(O)?this.getChildControl(v,true):(N?this.getChildControl(u,true):null);

if(M){M.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var X=this._isChildControlVisible(u);
var Y=this._isChildControlVisible(v);

if(!X){this.scrollToX(0);
}X&&Y?this._showChildControl(r):this._excludeChildControl(r);
},_onChangeScrollbarYVisibility:function(e){var V=this._isChildControlVisible(u);
var W=this._isChildControlVisible(v);

if(!W){this.scrollToY(0);
}V&&W?this._showChildControl(r):this._excludeChildControl(r);
},_computeScrollbars:function(){var H=this.getChildControl(t);
var content=H.getChildren()[0];

if(!content){this._excludeChildControl(u);
this._excludeChildControl(v);
return;
}var B=this.getInnerSize();
var G=H.getInnerSize();
var E=H.getScrollSize();
if(!G||!E){return;
}var J=this.getScrollbarX();
var K=this.getScrollbarY();

if(J===s&&K===s){var F=E.width>B.width;
var L=E.height>B.height;
if((F||L)&&!(F&&L)){if(F){L=E.height>G.height;
}else if(L){F=E.width>G.width;
}}}else{var F=J===q;
var L=K===q;
if(E.width>(F?G.width:B.width)&&J===s){F=true;
}
if(E.height>(F?G.height:B.height)&&K===s){L=true;
}}if(F){var D=this.getChildControl(u);
D.show();
var I=Math.max(0,E.width-G.width);
D.setMaximum(I);
D.setKnobFactor(I>0?G.width/E.width:0);
}else{this._excludeChildControl(u);
}
if(L){var C=this.getChildControl(v);
C.show();
var I=Math.max(0,E.height-G.height);
C.setMaximum(I);
C.setKnobFactor(I>0?G.height/E.height:0);
}else{this._excludeChildControl(v);
}}}});
})();
(function(){var u="bold",t="wlpe_qx.ui.layout.Grid",s="black",r="demobrowser.demo.util.PropertyEditor",q="Widget Properties",p="lpe_qx.ui.layout.HBox",o="wlpe_qx.ui.layout.Dock",n="wlpe_",m="lpe_qx.ui.layout.Dock",l="lpe_",I="solid",H="string",G="wlpe_qx.ui.layout.HBox",F="wlpe_qx.ui.layout.Canvas",E="wlpe_qx.ui.layout.VBox",D=" layout properties",C="_applyWidget",B="qx.ui.core.Widget",A=" properties",z="wlpe_qx.ui.layout.Basic",x="Selected Widget",y="lpe_qx.ui.layout.Grid",v="pane",w="white";
qx.Class.define(r,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(){arguments.callee.base.call(this);
this.setWidth(null);
this._editorGroups={};
var d=new qx.ui.decoration.Single();
d.setLeft(1,I,s);
this.setDecorator(d);
this.setBackgroundColor(w);
var g=new qx.ui.container.Composite().set({padding:[20,14]});
this.getChildControl(v).add(g);
this._pane=g;
var f=new qx.ui.layout.VBox().set({spacing:5});
g.setLayout(f);
g.add(this._createWidgetIndicator());
g.add(new qx.ui.basic.Label(q).set({font:u,padding:[1,0,5,0]}));
var h=qx.lang.Object.clone(demobrowser.demo.util.PropertyGroup.WIDGET_PROPERTIES);
h.value={type:H,nullable:true};
this._layoutControls=new demobrowser.demo.util.PropertyGroup(h);
g.add(this._layoutControls);
},properties:{widget:{check:B,apply:C}},members:{handleWidgetClick:function(e){var J=e.getTarget();
this.setWidget(J);
},_createWidgetIndicator:function(){var P=new qx.ui.container.Composite(new qx.ui.layout.VBox().set({spacing:5}));
P.add(this._createLabel(x));
this._widgetIndicator=new qx.ui.basic.Label().set({height:30,allowGrowX:true,allowGrowY:true,padding:5});
P._add(this._widgetIndicator);
return P;
},_createLabel:function(K){return new qx.ui.basic.Label(K).set({font:u,allowGrowX:true,padding:[5,0,5,0]});
},_createContainer:function(Q,R){var S=new qx.ui.container.Composite(new qx.ui.layout.VBox().set({spacing:5}));
S.add(this._createLabel(Q));
S.add(R);
return S;
},updateWidgetLayoutPropertyEditor:function(i){var k=i.getLayoutParent()?i.getLayoutParent()._getLayout():null;
var j=this.getWidgetLayoutPropertyEditor(k);

if(j){j.getChildren()[1].setSelected(i);
}
if(j===this._wlpe){return;
}
if(this._wlpe){this._pane.remove(this._wlpe);
}
if(!j){this._wlpe=j;
return;
}this._pane.addAfter(j,this._layoutControls);
this._wlpe=j;
},updateLayoutPropertyEditor:function(a){var c=a.getLayout?a.getLayout():null;
var b=this.getLayoutPropertyEditor(c);

if(b){b.getChildren()[1].setSelected(c);
}
if(b===this._lpe){return;
}
if(this._lpe){this._pane.remove(this._lpe);
}
if(!b){this._lpe=b;
return;
}this._pane.add(b);
this._lpe=b;
},getWidgetLayoutPropertyEditor:function(T){if(!T){return null;
}var name=n+T.constructor.classname;
var U;

if(this._editorGroups[name]){return this._editorGroups[name];
}
switch(name){case G:case E:U=new demobrowser.demo.util.LayoutPropertyGroup(demobrowser.demo.util.LayoutPropertyGroup.BOX_PROPERTIES);
break;
case F:U=new demobrowser.demo.util.LayoutPropertyGroup(demobrowser.demo.util.LayoutPropertyGroup.CANVAS_PROPERTIES);
break;
case z:U=new demobrowser.demo.util.LayoutPropertyGroup(demobrowser.demo.util.LayoutPropertyGroup.BASIC_PROPERTIES);
break;
case o:U=new demobrowser.demo.util.LayoutPropertyGroup(demobrowser.demo.util.LayoutPropertyGroup.DOCK_PROPERTIES);
break;
case t:U=new demobrowser.demo.util.LayoutPropertyGroup(demobrowser.demo.util.LayoutPropertyGroup.GRID_PROPERTIES);
break;
}
if(!U){return null;
}this._editorGroups[name]=this._createContainer(T.constructor.classname+D,U);
return this._editorGroups[name];
},getLayoutPropertyEditor:function(L){if(!L){return null;
}var name=l+L.constructor.classname;
var M;

if(this._editorGroups[name]){return this._editorGroups[name];
}
switch(name){case p:M=new demobrowser.demo.util.PropertyGroup(demobrowser.demo.util.PropertyGroup.HBOX_PROPERTIES);
break;
case m:M=new demobrowser.demo.util.PropertyGroup(demobrowser.demo.util.PropertyGroup.DOCK_PROPERTIES);
break;
case y:M=new demobrowser.demo.util.PropertyGroup(demobrowser.demo.util.PropertyGroup.GRID_PROPERTIES);
break;
}
if(!M){return null;
}this._editorGroups[name]=this._createContainer(L.constructor.classname+A,M);
return this._editorGroups[name];
},_applyWidget:function(N,O){this._layoutControls.setSelected(N);
this._widgetIndicator.setBackgroundColor(N.getBackgroundColor());
this._widgetIndicator.setDecorator(N.getDecorator());
this._widgetIndicator.setValue(N.toString());
this.updateLayoutPropertyEditor(N);
this.updateWidgetLayoutPropertyEditor(N);
}},destruct:function(){this._pane=this._editorGroups=this._widgetIndicator=this._layoutControls=null;
}});
})();
(function(){var c="qx.ui.core.scroll.IScrollBar",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"scroll":b},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(d){this.assertNumber(d);
},scrollBy:function(a){this.assertNumber(a);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var p="horizontal",o="px",n="scroll",m="vertical",l="-1px",k="qx.client",j="0",i="hidden",h="mousedown",g="qx.ui.core.scroll.NativeScrollBar",E="PositiveNumber",D="Integer",C="mousemove",B="_applyMaximum",A="_applyOrientation",z="appear",y="opera",x="PositiveInteger",w="mshtml",v="mouseup",t="Number",u="__nL",r="_applyPosition",s="scrollbar",q="native";
qx.Class.define(g,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(K){arguments.callee.base.call(this);
this.addState(q);
this.getContentElement().addListener(n,this._onScroll,this);
this.addListener(h,this._stopPropagation,this);
this.addListener(v,this._stopPropagation,this);
this.addListener(C,this._stopPropagation,this);

if(qx.core.Variant.isSet(k,y)){this.addListener(z,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(K!=null){this.setOrientation(K);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:s},orientation:{check:[p,m],init:p,apply:A},maximum:{check:x,apply:B,init:100},position:{check:t,init:0,apply:r,event:n},singleStep:{check:D,init:20},knobFactor:{check:E,nullable:true}},members:{__nK:null,__nL:null,_getScrollPaneElement:function(){if(!this.__nL){this.__nL=new qx.html.Element();
}return this.__nL;
},renderLayout:function(G,top,H,I){var J=arguments.callee.base.call(this,G,top,H,I);
this._updateScrollBar();
return J;
},_getContentHint:function(){var c=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__nK?100:c,maxWidth:this.__nK?null:c,minWidth:this.__nK?null:c,height:this.__nK?c:100,maxHeight:this.__nK?c:null,minHeight:this.__nK?c:null};
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);
this._updateScrollBar();
},_applyMaximum:function(S){this._updateScrollBar();
},_applyPosition:function(U){var content=this.getContentElement();

if(this.__nK){content.scrollToX(U);
}else{content.scrollToY(U);
}},_applyOrientation:function(L,M){var N=this.__nK=L===p;
this.set({allowGrowX:N,allowShrinkX:N,allowGrowY:!N,allowShrinkY:!N});

if(N){this.replaceState(m,p);
}else{this.replaceState(p,m);
}this.getContentElement().setStyles({overflowX:N?n:i,overflowY:N?i:n});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var P=this.__nK;
var Q=this.getBounds();

if(!Q){return;
}
if(this.isEnabled()){var R=P?Q.width:Q.height;
var O=this.getMaximum()+R;
}else{O=0;
}if(qx.core.Variant.isSet(k,w)){var Q=this.getBounds();
this.getContentElement().setStyles({left:P?j:l,top:P?l:j,width:(P?Q.width:Q.width+1)+o,height:(P?Q.height+1:Q.height)+o});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(P?O:1)+o,height:(P?1:O)+o});
this.scrollTo(this.getPosition());
},scrollTo:function(T){this.setPosition(Math.max(0,Math.min(this.getMaximum(),T)));
},scrollBy:function(F){this.scrollTo(this.getPosition()+F);
},scrollBySteps:function(d){var f=this.getSingleStep();
this.scrollBy(d*f);
},_onScroll:function(e){var W=this.getContentElement();
var V=this.__nK?W.getScrollX():W.getScrollY();
this.setPosition(V);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(u);
}});
})();
(function(){var n="slider",m="horizontal",l="button-begin",k="vertical",j="button-end",i="Integer",h="execute",g="right",f="left",d="down",C="up",B="PositiveNumber",A="changeValue",z="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",y="_applyKnobFactor",x="knob",w="qx.ui.core.scroll.ScrollBar",v="resize",u="_applyOrientation",t="_applyPageStep",r="PositiveInteger",s="scroll",p="_applyPosition",q="scrollbar",o="_applyMaximum";
qx.Class.define(w,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(G){arguments.callee.base.call(this);
this._createChildControl(l);
this._createChildControl(n).addListener(v,this._onResizeSlider,this);
this._createChildControl(j);
if(G!=null){this.setOrientation(G);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:q},orientation:{check:[m,k],init:m,apply:u},maximum:{check:r,apply:o,init:100},position:{check:z,init:0,apply:p,event:s},singleStep:{check:i,init:20},pageStep:{check:i,init:10,apply:t},knobFactor:{check:B,apply:y,nullable:true}},members:{__lj:2,_createChildControlImpl:function(Q){var R;

switch(Q){case n:R=new qx.ui.core.scroll.ScrollSlider();
R.setPageStep(100);
R.setFocusable(false);
R.addListener(A,this._onChangeSliderValue,this);
this._add(R,{flex:1});
break;
case l:R=new qx.ui.form.RepeatButton();
R.setFocusable(false);
R.addListener(h,this._onExecuteBegin,this);
this._add(R);
break;
case j:R=new qx.ui.form.RepeatButton();
R.setFocusable(false);
R.addListener(h,this._onExecuteEnd,this);
this._add(R);
break;
}return R||arguments.callee.base.call(this,Q);
},_applyMaximum:function(b){this.getChildControl(n).setMaximum(b);
},_applyPosition:function(F){this.getChildControl(n).setValue(F);
},_applyKnobFactor:function(a){this.getChildControl(n).setKnobFactor(a);
},_applyPageStep:function(H){this.getChildControl(n).setPageStep(H);
},_applyOrientation:function(J,K){var L=this._getLayout();

if(L){L.dispose();
}if(J===m){this._setLayout(new qx.ui.layout.HBox());
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
}this.getChildControl(n).setOrientation(J);
},scrollTo:function(c){this.getChildControl(n).slideTo(c);
},scrollBy:function(I){this.getChildControl(n).slideBy(I);
},scrollBySteps:function(D){var E=this.getSingleStep();
this.getChildControl(n).slideBy(D*E);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var M=this.getChildControl(n).getChildControl(x);
var P=M.getSizeHint();
var N=false;
var O=this.getChildControl(n).getInnerSize();

if(this.getOrientation()==k){if(O.height<P.minHeight+this.__lj){N=true;
}}else{if(O.width<P.minWidth+this.__lj){N=true;
}}
if(N){M.exclude();
}else{M.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var c="qx.ui.form.IRange";
qx.Interface.define(c,{members:{setMinimum:function(d){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(e){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(a){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(b){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var i="Boolean",h="invalid",g="qx.ui.form.MForm",f="_applyValid",e="",d="changeRequired",c="changeValid",b="changeInvalidMessage",a="String";
qx.Mixin.define(g,{properties:{valid:{check:i,init:true,apply:f,event:c},required:{check:i,init:false,event:d},invalidMessage:{check:a,init:e,event:b}},members:{_applyValid:function(j,k){j?this.removeState(h):this.addState(h);
}}});
})();
(function(){var q="knob",p="horizontal",o="vertical",n="Integer",m="px",l="mousemove",k="resize",j="left",i="top",h="mouseup",U="slider",T="PageUp",S="mousedown",R="height",Q="changeValue",P="Left",O="Down",N="Up",M="dblclick",L="qx.ui.form.Slider",x="PageDown",y="mousewheel",v="interval",w="_applyValue",t="_applyKnobFactor",u="End",r="width",s="_applyOrientation",z="Home",A="floor",D="_applyMinimum",C="click",F="Right",E="keypress",H="ceil",G="losecapture",B="contextmenu",K="_applyMaximum",J="Number",I="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(L,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(g){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(E,this._onKeyPress);
this.addListener(y,this._onMouseWheel);
this.addListener(S,this._onMouseDown);
this.addListener(h,this._onMouseUp);
this.addListener(G,this._onMouseUp);
this.addListener(k,this._onUpdate);
this.addListener(B,this._onStopEvent);
this.addListener(C,this._onStopEvent);
this.addListener(M,this._onStopEvent);
if(g!=null){this.setOrientation(g);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:U},focusable:{refine:true,init:true},orientation:{check:[p,o],init:p,apply:s},value:{check:I,init:0,apply:w,event:Q,nullable:true},minimum:{check:n,init:0,apply:D},maximum:{check:n,init:100,apply:K},singleStep:{check:n,init:1},pageStep:{check:n,init:10},knobFactor:{check:J,apply:t,nullable:true}},members:{__lI:null,__lJ:null,__lK:null,__lL:null,__lM:null,__lN:null,__lO:null,__lP:null,__lQ:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bk){var bl;

switch(bk){case q:bl=new qx.ui.core.Widget();
bl.addListener(k,this._onUpdate,this);
this._add(bl);
break;
}return bl||arguments.callee.base.call(this,bk);
},_onMouseWheel:function(e){var d=e.getWheelDelta()>0?1:-1;
this.slideBy(d*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var c=this.getOrientation()===p;
var b=c?P:N;
var forward=c?F:O;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case b:this.slideBack();
break;
case x:this.slidePageForward();
break;
case T:this.slidePageBack();
break;
case z:this.slideToBegin();
break;
case u:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__lL){return;
}var bG=this.__lS;
var bE=this.getChildControl(q);
var bF=bG?j:i;
var bI=bG?e.getDocumentLeft():e.getDocumentTop();
var bJ=this.__lI=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bF];
var bH=this.__lJ=qx.bom.element.Location.get(bE.getContainerElement().getDomElement())[bF];

if(e.getTarget()===bE){this.__lL=true;
this.__lM=bI+bJ-bH;
}else{this.__lN=true;
this.__lO=bI<=bH?-1:1;
this.__lT(e);
this._onInterval();
if(!this.__lQ){this.__lQ=new qx.event.Timer(100);
this.__lQ.addListener(v,this._onInterval,this);
}this.__lQ.start();
}this.addListener(l,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__lL){this.releaseCapture();
delete this.__lL;
delete this.__lM;
}else if(this.__lN){this.__lQ.stop();
this.releaseCapture();
delete this.__lN;
delete this.__lO;
delete this.__lP;
}this.removeListener(l,this._onMouseMove);
if(e.getType()===h){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__lL){var bR=this.__lS?e.getDocumentLeft():e.getDocumentTop();
var bQ=bR-this.__lM;
this.slideTo(this._positionToValue(bQ));
}else if(this.__lN){this.__lT(e);
}e.stopPropagation();
},_onInterval:function(e){var be=this.getValue()+(this.__lO*this.getPageStep());
if(be<this.getMinimum()){be=this.getMinimum();
}else if(be>this.getMaximum()){be=this.getMaximum();
}var bf=this.__lO==-1;

if((bf&&be<=this.__lP)||(!bf&&be>=this.__lP)){be=this.__lP;
}this.slideTo(be);
},_onUpdate:function(e){var W=this.getInnerSize();
var X=this.getChildControl(q).getBounds();
var V=this.__lS?r:R;
this._updateKnobSize();
this.__lR=W[V]-X[V];
this.__lK=X[V];
this._updateKnobPosition();
},__lS:false,__lR:0,__lT:function(e){var bq=this.__lS;
var bx=bq?e.getDocumentLeft():e.getDocumentTop();
var bz=this.__lI;
var br=this.__lJ;
var bB=this.__lK;
var by=bx-bz;

if(bx>=br){by-=bB;
}var bv=this._positionToValue(by);
var bs=this.getMinimum();
var bt=this.getMaximum();

if(bv<bs){bv=bs;
}else if(bv>bt){bv=bt;
}else{var bw=this.getValue();
var bu=this.getPageStep();
var bA=this.__lO<0?A:H;
bv=bw+(Math[bA]((bv-bw)/bu)*bu);
}if(this.__lP==null||(this.__lO==-1&&bv<=this.__lP)||(this.__lO==1&&bv>=this.__lP)){this.__lP=bv;
}},_positionToValue:function(bg){var bh=this.__lR;
if(bh==null||bh==0){return 0;
}var bj=bg/bh;

if(bj<0){bj=0;
}else if(bj>1){bj=1;
}var bi=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bi*bj);
},_valueToPosition:function(bK){var bL=this.__lR;

if(bL==null){return 0;
}var bM=this.getMaximum()-this.getMinimum();
if(bM==0){return 0;
}var bK=bK-this.getMinimum();
var bN=bK/bM;

if(bN<0){bN=0;
}else if(bN>1){bN=1;
}return Math.round(bL*bN);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bS){var bT=this.getChildControl(q).getContainerElement();

if(this.__lS){bT.setStyle(j,bS+m,true);
}else{bT.setStyle(i,bS+m,true);
}},_updateKnobSize:function(){var ba=this.getKnobFactor();

if(ba==null){return;
}var Y=this.getInnerSize();

if(Y==null){return;
}if(this.__lS){this.getChildControl(q).setWidth(Math.round(ba*Y.width));
}else{this.getChildControl(q).setHeight(Math.round(ba*Y.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(a){this.slideTo(this.getValue()+a);
},slideTo:function(f){if(f<this.getMinimum()){f=this.getMinimum();
}else if(f>this.getMaximum()){f=this.getMaximum();
}else{f=this.getMinimum()+Math.round((f-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(f);
},_applyOrientation:function(bb,bc){var bd=this.getChildControl(q);
this.__lS=bb===p;
if(this.__lS){this.removeState(o);
bd.removeState(o);
this.addState(p);
bd.addState(p);
bd.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(p);
bd.removeState(p);
this.addState(o);
bd.addState(o);
bd.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bC,bD){if(bC!=null){this._updateKnobSize();
}else{if(this.__lS){this.getChildControl(q).resetWidth();
}else{this.getChildControl(q).resetHeight();
}}},_applyValue:function(bo,bp){if(bo!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(bO,bP){if(this.getValue()<bO){this.setValue(bO);
}this._updateKnobPosition();
},_applyMaximum:function(bm,bn){if(this.getValue()>bm){this.setValue(bm);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__iO:null,__iP:false,__iQ:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__iP){this.__iP=false;
}else{this.__iP=true;
o.execute(this);
}}this.fireEvent(n);
},__iR:function(e){if(this.__iP){this.__iP=false;
return;
}this.__iP=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__iQ);
}
if(p!=null){this.__iQ=p.addListener(n,this.__iR,this);
}var t=this.__iO;

if(t==null){this.__iO=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__iO=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var r="pressed",q="abandoned",p="hovered",o="Enter",n="Space",m="dblclick",l="qx.ui.form.Button",k="mouseup",j="mousedown",i="mouseover",f="mouseout",h="keydown",g="button",d="keyup";
qx.Class.define(l,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(a,b,c){arguments.callee.base.call(this,a,b);

if(c!=null){this.setCommand(c);
}this.addListener(i,this._onMouseOver);
this.addListener(f,this._onMouseOut);
this.addListener(j,this._onMouseDown);
this.addListener(k,this._onMouseUp);
this.addListener(h,this._onKeyDown);
this.addListener(d,this._onKeyUp);
this.addListener(m,this._onStopEvent);
},properties:{appearance:{refine:true,init:g},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(q)){return;
}this.addState(r);
},release:function(){if(this.hasState(r)){this.removeState(r);
}},reset:function(){this.removeState(r);
this.removeState(q);
this.removeState(p);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(q)){this.removeState(q);
this.addState(r);
}this.addState(p);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(p);

if(this.hasState(r)){this.removeState(r);
this.addState(q);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(q);
this.addState(r);
},_onMouseUp:function(e){this.releaseCapture();
var s=this.hasState(r);
var t=this.hasState(q);

if(s){this.removeState(r);
}
if(t){this.removeState(q);
}else{this.addState(p);

if(s){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case o:case n:this.removeState(q);
this.addState(r);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case o:case n:if(this.hasState(r)){this.removeState(q);
this.removeState(r);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var q="pressed",p="abandoned",o="Integer",n="hovered",m="qx.event.type.Event",l="Enter",k="Space",j="press",i="qx.ui.form.RepeatButton",h="release",d="interval",g="__lc",f="execute";
qx.Class.define(i,{extend:qx.ui.form.Button,construct:function(r,s){arguments.callee.base.call(this,r,s);
this.__lc=new qx.event.AcceleratingTimer();
this.__lc.addListener(d,this._onInterval,this);
},events:{"execute":m,"press":m,"release":m},properties:{interval:{check:o,init:100},firstInterval:{check:o,init:500},minTimer:{check:o,init:20},timerDecrease:{check:o,init:2}},members:{__ld:null,__lc:null,press:function(){if(this.isEnabled()){if(!this.hasState(q)){this.__le();
}this.removeState(p);
this.addState(q);
}},release:function(a){if(!this.isEnabled()){return;
}if(this.hasState(q)){if(!this.__ld){this.execute();
}}this.removeState(q);
this.removeState(p);
this.__lf();
},_applyEnabled:function(b,c){arguments.callee.base.call(this,b,c);

if(!b){this.removeState(q);
this.removeState(p);
this.__lf();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(p)){this.removeState(p);
this.addState(q);
this.__lc.start();
}this.addState(n);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(n);

if(this.hasState(q)){this.removeState(q);
this.addState(p);
this.__lc.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__le();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(p)){this.addState(n);

if(this.hasState(q)&&!this.__ld){this.execute();
}}this.__lf();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(q)){if(!this.__ld){this.execute();
}this.removeState(q);
this.removeState(p);
e.stopPropagation();
this.__lf();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(p);
this.addState(q);
e.stopPropagation();
this.__le();
}},_onInterval:function(e){this.__ld=true;
this.fireEvent(f);
},__le:function(){this.fireEvent(j);
this.__ld=false;
this.__lc.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(p);
this.addState(q);
},__lf:function(){this.fireEvent(h);
this.__lc.stop();
this.removeState(p);
this.removeState(q);
}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var e="Integer",d="interval",c="__oc",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__oc=new qx.event.Timer(this.getInterval());
this.__oc.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__oc:null,__od:null,start:function(){this.__oc.setInterval(this.getFirstInterval());
this.__oc.start();
},stop:function(){this.__oc.stop();
this.__od=null;
},_onInterval:function(){this.__oc.stop();

if(this.__od==null){this.__od=this.getInterval();
}this.__od=Math.max(this.getMinimum(),this.__od-this.getDecrease());
this.__oc.setInterval(this.__od);
this.__oc.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var q="_applyLayoutChange",p="left",o="center",n="top",m="Decorator",k="middle",j="_applyReversed",h="bottom",g="Boolean",f="right",d="Integer",e="qx.ui.layout.HBox";
qx.Class.define(e,{extend:qx.ui.layout.Abstract,construct:function(a,b,c){arguments.callee.base.call(this);

if(a){this.setSpacing(a);
}
if(b){this.setAlignX(b);
}
if(c){this.setSeparator(c);
}},properties:{alignX:{check:[p,o,f],init:p,apply:q},alignY:{check:[n,k,h],init:n,apply:q},spacing:{check:d,init:0,apply:q},separator:{check:m,nullable:true,apply:q},reversed:{check:g,init:false,apply:j}},members:{__eO:null,__eP:null,__eQ:null,__eR:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__eS:function(){var bk=this._getLayoutChildren();
var length=bk.length;
var bh=false;
var bf=this.__eO&&this.__eO.length!=length&&this.__eP&&this.__eO;
var bi;
var bg=bf?this.__eO:new Array(length);
var bj=bf?this.__eP:new Array(length);
if(this.getReversed()){bk=bk.concat().reverse();
}for(var i=0;i<length;i++){bi=bk[i].getLayoutProperties();

if(bi.width!=null){bg[i]=parseFloat(bi.width)/100;
}
if(bi.flex!=null){bj[i]=bi.flex;
bh=true;
}else{bj[i]=0;
}}if(!bf){this.__eO=bg;
this.__eP=bj;
}this.__eQ=bh;
this.__eR=bk;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(r,s){if(this._invalidChildrenCache){this.__eS();
}var y=this.__eR;
var length=y.length;
var H=qx.ui.layout.Util;
var G=this.getSpacing();
var K=this.getSeparator();

if(K){var v=H.computeHorizontalSeparatorGaps(y,G,K);
}else{var v=H.computeHorizontalGaps(y,G,true);
}var i,t,E,D;
var J=[];
var z=v;

for(i=0;i<length;i+=1){D=this.__eO[i];
E=D!=null?Math.floor((r-v)*D):y[i].getSizeHint().width;
J.push(E);
z+=E;
}if(this.__eQ&&z!=r){var B={};
var F,I;

for(i=0;i<length;i+=1){F=this.__eP[i];

if(F>0){A=y[i].getSizeHint();
B[i]={min:A.minWidth,value:J[i],max:A.maxWidth,flex:F};
}}var w=H.computeFlexOffsets(B,r,z);

for(i in w){I=w[i].offset;
J[i]+=I;
z+=I;
}}var O=y[0].getMarginLeft();
if(z<r&&this.getAlignX()!=p){O=r-z;

if(this.getAlignX()===o){O=Math.round(O/2);
}}var A,top,u,E,x,M,C;
var G=this.getSpacing();
this._clearSeparators();
if(K){var L=qx.theme.manager.Decoration.getInstance().resolve(K).getInsets();
var N=L.left+L.right;
}for(i=0;i<length;i+=1){t=y[i];
E=J[i];
A=t.getSizeHint();
M=t.getMarginTop();
C=t.getMarginBottom();
u=Math.max(A.minHeight,Math.min(s-M-C,A.maxHeight));
top=H.computeVerticalAlignOffset(t.getAlignY()||this.getAlignY(),u,s,M,C);
if(i>0){if(K){O+=x+G;
this._renderSeparator(K,{left:O,top:0,width:N,height:s});
O+=N+G+t.getMarginLeft();
}else{O+=H.collapseMargins(G,x,t.getMarginLeft());
}}t.renderLayout(O,top,E,u);
O+=E;
x=t.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__eS();
}var V=qx.ui.layout.Util;
var be=this.__eR;
var P=0,W=0,T=0;
var S=0,U=0;
var bb,Q,bd;
for(var i=0,l=be.length;i<l;i+=1){bb=be[i];
Q=bb.getSizeHint();
W+=Q.width;
var ba=this.__eP[i];
var R=this.__eO[i];

if(ba){P+=Q.minWidth;
}else if(R){T=Math.max(T,Math.round(Q.minWidth/R));
}else{P+=Q.width;
}bd=bb.getMarginTop()+bb.getMarginBottom();
if((Q.height+bd)>U){U=Q.height+bd;
}if((Q.minHeight+bd)>S){S=Q.minHeight+bd;
}}P+=T;
var Y=this.getSpacing();
var bc=this.getSeparator();

if(bc){var X=V.computeHorizontalSeparatorGaps(be,Y,bc);
}else{var X=V.computeHorizontalGaps(be,Y,true);
}return {minWidth:P+X,width:W+X,minHeight:S,height:U};
}},destruct:function(){this.__eO=this.__eP=this.__eR=null;
}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(u,v,w){arguments.callee.base.call(this);

if(u){this.setSpacing(u);
}
if(v){this.setAlignY(v);
}
if(w){this.setSeparator(w);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__dS:null,__dT:null,__dU:null,__dV:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__dW:function(){var t=this._getLayoutChildren();
var length=t.length;
var p=false;
var o=this.__dS&&this.__dS.length!=length&&this.__dT&&this.__dS;
var r;
var q=o?this.__dS:new Array(length);
var s=o?this.__dT:new Array(length);
if(this.getReversed()){t=t.concat().reverse();
}for(var i=0;i<length;i++){r=t[i].getLayoutProperties();

if(r.height!=null){q[i]=parseFloat(r.height)/100;
}
if(r.flex!=null){s[i]=r.flex;
p=true;
}else{s[i]=0;
}}if(!o){this.__dS=q;
this.__dT=s;
}this.__dU=p;
this.__dV=t;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(M,N){if(this._invalidChildrenCache){this.__dW();
}var U=this.__dV;
var length=U.length;
var bf=qx.ui.layout.Util;
var be=this.getSpacing();
var bi=this.getSeparator();

if(bi){var R=bf.computeVerticalSeparatorGaps(U,be,bi);
}else{var R=bf.computeVerticalGaps(U,be,true);
}var i,P,Q,Y;
var ba=[];
var bg=R;

for(i=0;i<length;i+=1){Y=this.__dS[i];
Q=Y!=null?Math.floor((N-R)*Y):U[i].getSizeHint().height;
ba.push(Q);
bg+=Q;
}if(this.__dU&&bg!=N){var W={};
var bd,bh;

for(i=0;i<length;i+=1){bd=this.__dT[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__dW();
}var D=qx.ui.layout.Util;
var L=this.__dV;
var z=0,C=0,B=0;
var x=0,E=0;
var I,y,K;
for(var i=0,l=L.length;i<l;i+=1){I=L[i];
y=I.getSizeHint();
C+=y.height;
var H=this.__dT[i];
var A=this.__dS[i];

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
}},destruct:function(){this.__dS=this.__dT=this.__dV=null;
}});
})();
(function(){var cT="left",cS="top",cR="_applyLayoutChange",cQ="hAlign",cP="flex",cO="vAlign",cN="Integer",cM="minWidth",cL="width",cK="minHeight",cH="qx.ui.layout.Grid",cJ="height",cI="maxHeight",cG="maxWidth";
qx.Class.define(cH,{extend:qx.ui.layout.Abstract,construct:function(cv,cw){arguments.callee.base.call(this);
this.__gA=[];
this.__gB=[];

if(cv){this.setSpacingX(cv);
}
if(cw){this.setSpacingY(cw);
}},properties:{spacingX:{check:cN,init:0,apply:cR},spacingY:{check:cN,init:0,apply:cR}},members:{__gC:null,__gA:null,__gB:null,__gD:null,__gE:null,__gF:null,__gG:null,__gH:null,__gI:null,verifyLayoutProperty:null,__gJ:function(){var T=[];
var S=[];
var U=[];
var Q=-1;
var P=-1;
var W=this._getLayoutChildren();

for(var i=0,l=W.length;i<l;i++){var R=W[i];
var V=R.getLayoutProperties();
var X=V.row;
var O=V.column;
V.colSpan=V.colSpan||1;
V.rowSpan=V.rowSpan||1;
if(X==null||O==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+R+"' must be defined!");
}
if(T[X]&&T[X][O]){throw new Error("Cannot add widget '"+R+"'!. "+"There is already a widget '"+T[X][O]+"' in this cell ("+X+", "+O+")");
}
for(var x=O;x<O+V.colSpan;x++){for(var y=X;y<X+V.rowSpan;y++){if(T[y]==undefined){T[y]=[];
}T[y][x]=R;
P=Math.max(P,x);
Q=Math.max(Q,y);
}}
if(V.rowSpan>1){U.push(R);
}
if(V.colSpan>1){S.push(R);
}}for(var y=0;y<=Q;y++){if(T[y]==undefined){T[y]=[];
}}this.__gC=T;
this.__gD=S;
this.__gE=U;
this.__gF=Q;
this.__gG=P;
this.__gH=null;
this.__gI=null;
delete this._invalidChildrenCache;
},_setRowData:function(e,f,g){var h=this.__gA[e];

if(!h){this.__gA[e]={};
this.__gA[e][f]=g;
}else{h[f]=g;
}},_setColumnData:function(q,r,s){var t=this.__gB[q];

if(!t){this.__gB[q]={};
this.__gB[q][r]=s;
}else{t[r]=s;
}},setSpacing:function(dJ){this.setSpacingY(dJ);
this.setSpacingX(dJ);
return this;
},setColumnAlign:function(L,M,N){{};
this._setColumnData(L,cQ,M);
this._setColumnData(L,cO,N);
this._applyLayoutChange();
return this;
},getColumnAlign:function(cx){var cy=this.__gB[cx]||{};
return {vAlign:cy.vAlign||cS,hAlign:cy.hAlign||cT};
},setRowAlign:function(k,m,n){{};
this._setRowData(k,cQ,m);
this._setRowData(k,cO,n);
this._applyLayoutChange();
return this;
},getRowAlign:function(bP){var bQ=this.__gA[bP]||{};
return {vAlign:bQ.vAlign||cS,hAlign:bQ.hAlign||cT};
},getCellWidget:function(dD,dE){if(this._invalidChildrenCache){this.__gJ();
}var dD=this.__gC[dD]||{};
return dD[dE]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__gJ();
}return this.__gF+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__gJ();
}return this.__gG+1;
},getCellAlign:function(bp,bq){var bw=cS;
var bu=cT;
var bv=this.__gA[bp];
var bs=this.__gB[bq];
var br=this.__gC[bp][bq];

if(br){var bt={vAlign:br.getAlignY(),hAlign:br.getAlignX()};
}else{bt={};
}if(bt.vAlign){bw=bt.vAlign;
}else if(bv&&bv.vAlign){bw=bv.vAlign;
}else if(bs&&bs.vAlign){bw=bs.vAlign;
}if(bt.hAlign){bu=bt.hAlign;
}else if(bs&&bs.hAlign){bu=bs.hAlign;
}else if(bv&&bv.hAlign){bu=bv.hAlign;
}return {vAlign:bw,hAlign:bu};
},setColumnFlex:function(c,d){this._setColumnData(c,cP,d);
this._applyLayoutChange();
return this;
},getColumnFlex:function(cm){var cn=this.__gB[cm]||{};
return cn.flex!==undefined?cn.flex:0;
},setRowFlex:function(dK,dL){this._setRowData(dK,cP,dL);
this._applyLayoutChange();
return this;
},getRowFlex:function(cf){var cg=this.__gA[cf]||{};
var ch=cg.flex!==undefined?cg.flex:0;
return ch;
},setColumnMaxWidth:function(ck,cl){this._setColumnData(ck,cG,cl);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(ci){var cj=this.__gB[ci]||{};
return cj.maxWidth!==undefined?cj.maxWidth:Infinity;
},setColumnWidth:function(bn,bo){this._setColumnData(bn,cL,bo);
this._applyLayoutChange();
return this;
},getColumnWidth:function(o){var p=this.__gB[o]||{};
return p.width!==undefined?p.width:null;
},setColumnMinWidth:function(cU,cV){this._setColumnData(cU,cM,cV);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(u){var v=this.__gB[u]||{};
return v.minWidth||0;
},setRowMaxHeight:function(a,b){this._setRowData(a,cI,b);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(dH){var dI=this.__gA[dH]||{};
return dI.maxHeight||Infinity;
},setRowHeight:function(dF,dG){this._setRowData(dF,cJ,dG);
this._applyLayoutChange();
return this;
},getRowHeight:function(w){var z=this.__gA[w]||{};
return z.height!==undefined?z.height:null;
},setRowMinHeight:function(cd,ce){this._setRowData(cd,cK,ce);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(cz){var cA=this.__gA[cz]||{};
return cA.minHeight||0;
},__gK:function(cB){var cF=cB.getSizeHint();
var cE=cB.getMarginLeft()+cB.getMarginRight();
var cD=cB.getMarginTop()+cB.getMarginBottom();
var cC={height:cF.height+cD,width:cF.width+cE,minHeight:cF.minHeight+cD,minWidth:cF.minWidth+cE,maxHeight:cF.maxHeight+cD,maxWidth:cF.maxWidth+cE};
return cC;
},_fixHeightsRowSpan:function(Y){var bk=this.getSpacingY();

for(var i=0,l=this.__gE.length;i<l;i++){var bc=this.__gE[i];
var be=this.__gK(bc);
var bf=bc.getLayoutProperties();
var bb=bf.row;
var bi=bk*(bf.rowSpan-1);
var ba=bi;
var bh={};

for(var j=0;j<bf.rowSpan;j++){var bm=bf.row+j;
var bd=Y[bm];
var bl=this.getRowFlex(bm);

if(bl>0){bh[bm]={min:bd.minHeight,value:bd.height,max:bd.maxHeight,flex:bl};
}bi+=bd.height;
ba+=bd.minHeight;
}if(bi<be.height){var bj=qx.ui.layout.Util.computeFlexOffsets(bh,be.height,bi);

for(var j=0;j<bf.rowSpan;j++){var bg=bj[bb+j]?bj[bb+j].offset:0;
Y[bb+j].height+=bg;
}}if(ba<be.minHeight){var bj=qx.ui.layout.Util.computeFlexOffsets(bh,be.minHeight,ba);

for(var j=0;j<bf.rowSpan;j++){var bg=bj[bb+j]?bj[bb+j].offset:0;
Y[bb+j].minHeight+=bg;
}}}},_fixWidthsColSpan:function(dM){var dQ=this.getSpacingX();

for(var i=0,l=this.__gD.length;i<l;i++){var dN=this.__gD[i];
var dP=this.__gK(dN);
var dS=dN.getLayoutProperties();
var dO=dS.column;
var dY=dQ*(dS.colSpan-1);
var dR=dY;
var dT={};
var dV;

for(var j=0;j<dS.colSpan;j++){var ea=dS.column+j;
var dX=dM[ea];
var dW=this.getColumnFlex(ea);
if(dW>0){dT[ea]={min:dX.minWidth,value:dX.width,max:dX.maxWidth,flex:dW};
}dY+=dX.width;
dR+=dX.minWidth;
}if(dY<dP.width){var dU=qx.ui.layout.Util.computeFlexOffsets(dT,dP.width,dY);

for(var j=0;j<dS.colSpan;j++){dV=dU[dO+j]?dU[dO+j].offset:0;
dM[dO+j].width+=dV;
}}if(dR<dP.minWidth){var dU=qx.ui.layout.Util.computeFlexOffsets(dT,dP.minWidth,dR);

for(var j=0;j<dS.colSpan;j++){dV=dU[dO+j]?dU[dO+j].offset:0;
dM[dO+j].minWidth+=dV;
}}}},_getRowHeights:function(){if(this.__gH!=null){return this.__gH;
}var bN=[];
var bG=this.__gF;
var bF=this.__gG;

for(var bO=0;bO<=bG;bO++){var bH=0;
var bJ=0;
var bI=0;

for(var bM=0;bM<=bF;bM++){var bE=this.__gC[bO][bM];

if(!bE){continue;
}var bK=bE.getLayoutProperties().rowSpan||0;

if(bK>1){continue;
}var bL=this.__gK(bE);

if(this.getRowFlex(bO)>0){bH=Math.max(bH,bL.minHeight);
}else{bH=Math.max(bH,bL.height);
}bJ=Math.max(bJ,bL.height);
}var bH=Math.max(bH,this.getRowMinHeight(bO));
var bI=this.getRowMaxHeight(bO);

if(this.getRowHeight(bO)!==null){var bJ=this.getRowHeight(bO);
}else{var bJ=Math.max(bH,Math.min(bJ,bI));
}bN[bO]={minHeight:bH,height:bJ,maxHeight:bI};
}
if(this.__gE.length>0){this._fixHeightsRowSpan(bN);
}this.__gH=bN;
return bN;
},_getColWidths:function(){if(this.__gI!=null){return this.__gI;
}var E=[];
var B=this.__gG;
var D=this.__gF;

for(var J=0;J<=B;J++){var H=0;
var G=0;
var C=Infinity;

for(var K=0;K<=D;K++){var A=this.__gC[K][J];

if(!A){continue;
}var F=A.getLayoutProperties().colSpan||0;

if(F>1){continue;
}var I=this.__gK(A);

if(this.getColumnFlex(J)>0){G=Math.max(G,I.minWidth);
}else{G=Math.max(G,I.width);
}H=Math.max(H,I.width);
}var G=Math.max(G,this.getColumnMinWidth(J));
var C=this.getColumnMaxWidth(J);

if(this.getColumnWidth(J)!==null){var H=this.getColumnWidth(J);
}else{var H=Math.max(G,Math.min(H,C));
}E[J]={minWidth:G,width:H,maxWidth:C};
}
if(this.__gD.length>0){this._fixWidthsColSpan(E);
}this.__gI=E;
return E;
},_getColumnFlexOffsets:function(co){var cp=this.getSizeHint();
var ct=co-cp.width;

if(ct==0){return {};
}var cr=this._getColWidths();
var cq={};

for(var i=0,l=cr.length;i<l;i++){var cu=cr[i];
var cs=this.getColumnFlex(i);

if((cs<=0)||(cu.width==cu.maxWidth&&ct>0)||(cu.width==cu.minWidth&&ct<0)){continue;
}cq[i]={min:cu.minWidth,value:cu.width,max:cu.maxWidth,flex:cs};
}return qx.ui.layout.Util.computeFlexOffsets(cq,co,cp.width);
},_getRowFlexOffsets:function(bx){var by=this.getSizeHint();
var bB=bx-by.height;

if(bB==0){return {};
}var bC=this._getRowHeights();
var bz={};

for(var i=0,l=bC.length;i<l;i++){var bD=bC[i];
var bA=this.getRowFlex(i);

if((bA<=0)||(bD.height==bD.maxHeight&&bB>0)||(bD.height==bD.minHeight&&bB<0)){continue;
}bz[i]={min:bD.minHeight,value:bD.height,max:bD.maxHeight,flex:bA};
}return qx.ui.layout.Util.computeFlexOffsets(bz,bx,by.height);
},renderLayout:function(cW,cX){if(this._invalidChildrenCache){this.__gJ();
}var dm=qx.ui.layout.Util;
var da=this.getSpacingX();
var dg=this.getSpacingY();
var ds=this._getColWidths();
var dr=this._getColumnFlexOffsets(cW);
var db=[];
var du=this.__gG;
var cY=this.__gF;
var dt;

for(var dv=0;dv<=du;dv++){dt=dr[dv]?dr[dv].offset:0;
db[dv]=ds[dv].width+dt;
}var dj=this._getRowHeights();
var dl=this._getRowFlexOffsets(cX);
var dB=[];

for(var dh=0;dh<=cY;dh++){dt=dl[dh]?dl[dh].offset:0;
dB[dh]=dj[dh].height+dt;
}var dC=0;

for(var dv=0;dv<=du;dv++){var top=0;

for(var dh=0;dh<=cY;dh++){var dp=this.__gC[dh][dv];
if(!dp){top+=dB[dh]+dg;
continue;
}var dc=dp.getLayoutProperties();
if(dc.row!==dh||dc.column!==dv){top+=dB[dh]+dg;
continue;
}var dA=da*(dc.colSpan-1);

for(var i=0;i<dc.colSpan;i++){dA+=db[dv+i];
}var dq=dg*(dc.rowSpan-1);

for(var i=0;i<dc.rowSpan;i++){dq+=dB[dh+i];
}var dd=dp.getSizeHint();
var dy=dp.getMarginTop();
var dn=dp.getMarginLeft();
var dk=dp.getMarginBottom();
var df=dp.getMarginRight();
var di=Math.max(dd.minWidth,Math.min(dA-dn-df,dd.maxWidth));
var dz=Math.max(dd.minHeight,Math.min(dq-dy-dk,dd.maxHeight));
var dw=this.getCellAlign(dh,dv);
var dx=dC+dm.computeHorizontalAlignOffset(dw.hAlign,di,dA,dn,df);
var de=top+dm.computeVerticalAlignOffset(dw.vAlign,dz,dq,dy,dk);
dp.renderLayout(dx,de,di,dz);
top+=dB[dh]+dg;
}dC+=db[dv]+da;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__gI=null;
this.__gH=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__gJ();
}var bV=this._getColWidths();
var bX=0,bY=0;

for(var i=0,l=bV.length;i<l;i++){var ca=bV[i];

if(this.getColumnFlex(i)>0){bX+=ca.minWidth;
}else{bX+=ca.width;
}bY+=ca.width;
}var cb=this._getRowHeights();
var bT=0,bW=0;

for(var i=0,l=cb.length;i<l;i++){var cc=cb[i];

if(this.getRowFlex(i)>0){bT+=cc.minHeight;
}else{bT+=cc.height;
}bW+=cc.height;
}var bS=this.getSpacingX()*(bV.length-1);
var bR=this.getSpacingY()*(cb.length-1);
var bU={minWidth:bX+bS,width:bY+bS,minHeight:bT+bR,height:bW+bR};
return bU;
}},destruct:function(){this.__gC=this.__gA=this.__gB=this.__gD=this.__gE=this.__gI=this.__gH=null;
}});
})();
(function(){var n="resize",m="scrollY",l="update",k="scrollX",j="_applyScrollX",i="_applyScrollY",h="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",g="appear",f="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",d="qx.event.type.Event",b="qx.ui.core.scroll.ScrollPane",c="scroll";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(n,this._onUpdate);
var M=this.getContentElement();
M.addListener(c,this._onScroll,this);
M.addListener(g,this._onAppear,this);
},events:{update:d},properties:{scrollX:{check:h,apply:j,event:k,init:0},scrollY:{check:f,apply:i,event:m,init:0}},members:{add:function(q){var r=this._getChildren()[0];

if(r){this._remove(r);
r.removeListener(n,this._onUpdate,this);
}
if(q){this._add(q);
q.addListener(n,this._onUpdate,this);
}},remove:function(p){if(p){this._remove(p);
p.removeListener(n,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(l);
},_onScroll:function(e){var w=this.getContentElement();
this.setScrollX(w.getScrollX());
this.setScrollY(w.getScrollY());
},_onAppear:function(e){var K=this.getContentElement();
var H=this.getScrollX();
var I=K.getScrollX();

if(H!=I){K.scrollToX(H);
}var L=this.getScrollY();
var J=K.getScrollY();

if(L!=J){K.scrollToY(L);
}},getItemTop:function(A){var top=0;

do{top+=A.getBounds().top;
A=A.getLayoutParent();
}while(A&&A!==this);
return top;
},getItemBottom:function(a){return this.getItemTop(a)+a.getBounds().height;
},getItemLeft:function(D){var E=0;
var parent;

do{E+=D.getBounds().left;
parent=D.getLayoutParent();

if(parent){E+=parent.getInsets().left;
}D=parent;
}while(D&&D!==this);
return E;
},getItemRight:function(N){return this.getItemLeft(N)+N.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var t=this.getInnerSize();
var s=this.getScrollSize();

if(t&&s){return Math.max(0,s.width-t.width);
}return 0;
},getScrollMaxY:function(){var C=this.getInnerSize();
var B=this.getScrollSize();

if(C&&B){return Math.max(0,B.height-C.height);
}return 0;
},scrollToX:function(F){var G=this.getScrollMaxX();

if(F<0){F=0;
}else if(F>G){F=G;
}this.setScrollX(F);
},scrollToY:function(u){var v=this.getScrollMaxY();

if(u<0){u=0;
}else if(u>v){u=v;
}this.setScrollY(u);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(o){this.getContentElement().scrollToX(o);
},_applyScrollY:function(z){this.getContentElement().scrollToY(z);
}}});
})();
(function(){var E="value",D="changeValue",C="enum",B="set",A="int",z="string",y="bool",x="function",w="null",v="demobrowser.demo.util.PropertyGroup",s="_applySelected",u="get",t="top",r="changeSelection",q="right";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(H){arguments.callee.base.call(this);
this._properties=H;
var J=new qx.ui.layout.Grid(10,5);
J.setColumnAlign(0,q,t);
J.setColumnMinWidth(0,110);
this._setLayout(J);
this.set({allowShrinkX:false,allowShrinkY:false});
var Q=0;

for(var M in this._properties){var P=this._properties[M].type;
var L=this._properties[M].nullable;
this._add(new qx.ui.basic.Label(M).set({paddingTop:4}),{row:Q,column:0});

if(L){var K=new qx.ui.form.CheckBox(w);
K.addListener(D,this._createOnNullPropertyChange(M),this);
this._add(K,{row:Q,column:2});
this._properties[M].nullWidget=K;
}
if(P==A){var O=new qx.ui.form.Spinner().set({minimum:this._properties[M].min||0,maximum:this._properties[M].max!==undefined?this._properties[M].max:1000});
O.addListener(D,this._createOnIntPropertyChange(M),this);
this._add(O,{row:Q++,column:1});
}else if(P==y){var O=new qx.ui.form.CheckBox();
O.addListener(D,this._createOnBoolPropertyChange(M),this);
this._add(O,{row:Q++,column:1});
}else if(P==C){var N=this._properties[M].values;
var O=new qx.ui.form.RadioGroup();

for(var i=0;i<N.length;i++){var I=new qx.ui.form.RadioButton(N[i]);
I.setUserData(E,N[i]);
O.add(I);
this._add(I,{row:Q++,column:1});
}O.addListener(r,this._createOnEnumPropertyChange(M,O),this);
}else if(P==z){var O=new qx.ui.form.TextField();
O.setLiveUpdate(true);
O.addListener(D,this._createOnIntPropertyChange(M),this);
this._add(O,{row:Q++,column:1});
}this._properties[M].formItem=O;
}},statics:{WIDGET_PROPERTIES:{"width":{type:"int",nullable:true},"height":{type:"int",nullable:true},"minWidth":{type:"int",nullable:true},"minHeight":{type:"int",nullable:true},"maxWidth":{type:"int",nullable:true},"maxHeight":{type:"int",nullable:true},"allowGrowX":{type:"bool",nullable:false},"allowGrowY":{type:"bool",nullable:false},"allowShrinkX":{type:"bool",nullable:false},"allowShrinkY":{type:"bool",nullable:false},"marginTop":{type:"int",min:-1000,nullable:false},"marginRight":{type:"int",min:-1000,nullable:false},"marginBottom":{type:"int",min:-1000,nullable:false},"marginLeft":{type:"int",min:-1000,nullable:false},"paddingTop":{type:"int",nullable:false},"paddingRight":{type:"int",nullable:false},"paddingBottom":{type:"int",nullable:false},"paddingLeft":{type:"int",nullable:false},"alignX":{type:"enum",values:["left","center","right"],nullable:true},"alignY":{type:"enum",values:["top","middle","bottom","baseline"],nullable:true}},HBOX_PROPERTIES:{"alignX":{type:"enum",values:["left","center","right"],nullable:false},"alignY":{type:"enum",values:["top","middle","bottom","baseline"],nullable:false},"spacing":{type:"int",nullable:false},"reversed":{type:"bool",nullable:false}},DOCK_PROPERTIES:{"sort":{type:"enum",values:["auto","y","x"],nullable:false},"spacingX":{type:"int",nullable:false},"spacingY":{type:"int",nullable:false}},GRID_PROPERTIES:{"horizontalSpacing":{type:"int",nullable:false},"verticalSpacing":{type:"int",nullable:false}}},properties:{selected:{apply:s,nullable:true}},members:{_applySelected:function(F,G){this._updateControls(F);
},_setProperty:function(m,name,n){if(!m){return;
}var p=B+qx.lang.String.firstUp(name);
var o=this._properties[name].convert;

if(o){n=o(n);
}m[p](n);
},_getProperty:function(R,name){var S=u+qx.lang.String.firstUp(name);
return R[S]();
},_hasProperty:function(ba,name){var bb=B+qx.lang.String.firstUp(name);
return (typeof (ba[bb])==x);
},_createOnIntPropertyChange:function(W){return function(e){var a=this.getSelected();
this._setProperty(a,W,e.getTarget().getValue());
};
},_createOnBoolPropertyChange:function(T){return function(e){var bc=this.getSelected();
this._setProperty(bc,T,e.getTarget().getValue());
};
},_createOnEnumPropertyChange:function(U,V){return function(e){var Y=this.getSelected();
this._setProperty(Y,U,V.getSelection()[0].getUserData(E));
};
},_createOnNullPropertyChange:function(X){return function(e){var be=this.getSelected();
var bd=e.getTarget();

if(bd.getValue()){this._setProperty(be,X,null);
this._properties[X].formItem.setEnabled(false);
}else{var bf=null;

if(this._properties[X].type==C){bf=this._properties[X].formItem.getSelection()[0].getUserData(E);
}else{bf=this._properties[X].formItem.getValue();
}this._setProperty(be,X,bf);
this._properties[X].formItem.setEnabled(true);
}};
},_updateControls:function(b){for(var j in this._properties){var k=this._properties[j].type;
var f=this._properties[j].formItem;
var c=this._properties[j].nullable;

if(!this._hasProperty(b,j)){f.setEnabled(false);

if(c){this._properties[j].nullWidget.setEnabled(false);
}return;
}f.setEnabled(true);
var h=this._getProperty(b,j);

if(h!==null){if(k==A){f.setValue(parseInt(h));
}else if(k==z){f.setValue(h.toString());
}else if(k==y){f.setValue(!!h);
}else if(k==C){var d=f.getItems();

for(var i=0,l=d.length;i<l;i++){var g=d[i];

if(g.getUserData(E)==h){f.setSelection([g]);
break;
}}}}
if(c){this._properties[j].nullWidget.setValue(h==null);
this._properties[j].nullWidget.setEnabled(true);
f.setEnabled(h!==null);
}}}},destruct:function(){this._properties=null;
}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var u="pressed",t="abandoned",s="hovered",r="checked",q="Space",p="Enter",o="mouseup",n="mousedown",m="Boolean",l="_applyValue",f="mouseover",k="mouseout",i="qx.ui.form.ToggleButton",d="keydown",c="changeValue",h="button",g="keyup",j="execute";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(v,w){arguments.callee.base.call(this,v,w);
this.addListener(f,this._onMouseOver);
this.addListener(k,this._onMouseOut);
this.addListener(n,this._onMouseDown);
this.addListener(o,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(g,this._onKeyUp);
this.addListener(j,this._onExecute,this);
},properties:{appearance:{refine:true,init:h},focusable:{refine:true,init:true},value:{check:m,nullable:true,event:c,apply:l,init:false}},members:{_applyValue:function(a,b){a?this.addState(r):this.removeState(r);
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(s);

if(this.hasState(t)){this.removeState(t);
this.addState(u);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(s);

if(this.hasState(u)){if(!this.getValue()){this.removeState(u);
}this.addState(t);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(t);
this.addState(u);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(t)){this.removeState(t);
}else if(this.hasState(u)){this.execute();
}this.removeState(u);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case p:case q:this.removeState(t);
this.addState(u);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(u)){return;
}
switch(e.getKeyIdentifier()){case p:case q:this.removeState(t);
this.execute();
this.removeState(u);
e.stopPropagation();
}}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var b="checkbox",a="qx.ui.form.CheckBox";
qx.Class.define(a,{extend:qx.ui.form.ToggleButton,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(c){{};
arguments.callee.base.call(this,c);
this.setValue(false);
},properties:{appearance:{refine:true,init:b},allowGrowX:{refine:true,init:false}}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__ji:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__jj:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__jj[name];
s[t]();
}else{var u=this.__ji[name];
s[u](q);
}}}});
})();
(function(){var u="textfield",t="",s="downbutton",r="upbutton",q="Number",p="inner",o="PageUp",n="Boolean",m="changeValue",l="Down",R="Up",Q="execute",P="PageDown",O="changeLocale",N="qx.dynlocale",M="on",L="_applyEditable",K="_applyWrap",J="keydown",I="\-]",B="mousewheel",C="_applyValue",z="number",A="_applyMinimum",x="qx.util.format.NumberFormat",y="[0-9",v="keyup",w="spinner",D="this._checkValue(value)",E="_applyMaximum",G="changeNumberFormat",F="_applyNumberFormat",H="qx.ui.form.Spinner";
qx.Class.define(H,{extend:qx.ui.core.Widget,implement:[qx.ui.form.INumberForm,qx.ui.form.IRange,qx.ui.form.IForm],include:[qx.ui.core.MContentPadding,qx.ui.form.MForm],construct:function(bb,bc,bd){arguments.callee.base.call(this);
var be=new qx.ui.layout.Grid();
be.setColumnFlex(0,1);
be.setRowFlex(0,1);
be.setRowFlex(1,1);
this._setLayout(be);
this.addListener(J,this._onKeyDown,this);
this.addListener(v,this._onKeyUp,this);
this.addListener(B,this._onMouseWheel,this);

if(qx.core.Variant.isSet(N,M)){qx.locale.Manager.getInstance().addListener(O,this._onChangeLocale,this);
}this._createChildControl(u);
this._createChildControl(r);
this._createChildControl(s);
if(bb!=null){this.setMinimum(bb);
}
if(bd!=null){this.setMaximum(bd);
}
if(bc!==undefined){this.setValue(bc);
}else{this.initValue();
}},properties:{appearance:{refine:true,init:w},focusable:{refine:true,init:true},singleStep:{check:q,init:1},pageStep:{check:q,init:10},minimum:{check:q,apply:A,init:0},value:{check:D,nullable:true,apply:C,init:0,event:m},maximum:{check:q,apply:E,init:100},wrap:{check:n,init:false,apply:K},editable:{check:n,init:true,apply:L},numberFormat:{check:x,apply:F,nullable:true},allowShrinkY:{refine:true,init:false}},members:{__sz:null,__sA:false,__sB:false,_createChildControlImpl:function(j){var k;

switch(j){case u:k=new qx.ui.form.TextField();
k.setFilter(this._getFilterRegExp());
k.addState(p);
k.setWidth(40);
k.setFocusable(false);
k.addListener(m,this._onTextChange,this);
this._add(k,{column:0,row:0,rowSpan:2});
break;
case r:k=new qx.ui.form.RepeatButton();
k.addState(p);
k.setFocusable(false);
k.addListener(Q,this._countUp,this);
this._add(k,{column:1,row:0});
break;
case s:k=new qx.ui.form.RepeatButton();
k.addState(p);
k.setFocusable(false);
k.addListener(Q,this._countDown,this);
this._add(k,{column:1,row:1});
break;
}return k||arguments.callee.base.call(this,j);
},_getFilterRegExp:function(){var bz=qx.locale.Number.getDecimalSeparator(qx.locale.Manager.getInstance().getLocale());
var by=qx.locale.Number.getGroupSeparator(qx.locale.Manager.getInstance().getLocale());
var bx=t;
var bv=t;

if(this.getNumberFormat()!==null){bx=this.getNumberFormat().getPrefix()||t;
bv=this.getNumberFormat().getPostfix()||t;
}var bw=new RegExp(y+qx.lang.String.escapeRegexpChars(bz)+qx.lang.String.escapeRegexpChars(by)+qx.lang.String.escapeRegexpChars(bx)+qx.lang.String.escapeRegexpChars(bv)+I);
return bw;
},_forwardStates:{focused:true,invalid:true},tabFocus:function(){var X=this.getChildControl(u);
X.getFocusElement().focus();
X.selectAllText();
},_applyMinimum:function(bn,bo){if(this.getMaximum()<bn){this.setMaximum(bn);
}
if(this.getValue()<bn){this.setValue(bn);
}else{this._updateButtons();
}},_applyMaximum:function(bq,br){if(this.getMinimum()>bq){this.setMin(bq);
}
if(this.getValue()>bq){this.setValue(bq);
}else{this._updateButtons();
}},_applyEnabled:function(Y,ba){arguments.callee.base.call(this,Y,ba);
this._updateButtons();
},_checkValue:function(bp){return typeof bp===z&&bp>=this.getMinimum()&&bp<=this.getMaximum();
},_applyValue:function(bk,bl){var bm=this.getChildControl(u);
this._updateButtons();
this.__sz=bk;
if(bk!==null){if(this.getNumberFormat()){bm.setValue(this.getNumberFormat().format(bk));
}else{bm.setValue(bk+t);
}}else{bm.setValue(t);
}},_applyEditable:function(bf,bg){var bh=this.getChildControl(u);

if(bh){bh.setReadOnly(!bf);
}},_applyWrap:function(bA,bB){this._updateButtons();
},_applyNumberFormat:function(a,b){var c=this.getChildControl(u);
c.setFilter(this._getFilterRegExp());
this.getNumberFormat().addListener(G,this._onChangeNumberFormat,this);
this._applyValue(this.__sz,undefined);
},_getContentPaddingTarget:function(){return this.getChildControl(u);
},_updateButtons:function(){var h=this.getChildControl(r);
var g=this.getChildControl(s);
var i=this.getValue();

if(!this.getEnabled()){h.setEnabled(false);
g.setEnabled(false);
}else{if(this.getWrap()){h.setEnabled(true);
g.setEnabled(true);
}else{if(i!==null&&i<this.getMaximum()){h.setEnabled(true);
}else{h.setEnabled(false);
}if(i!==null&&i>this.getMinimum()){g.setEnabled(true);
}else{g.setEnabled(false);
}}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case o:this.__sA=true;
case R:this.getChildControl(r).press();
break;
case P:this.__sB=true;
case l:this.getChildControl(s).press();
break;
default:return ;
}e.stopPropagation();
e.preventDefault();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case o:this.getChildControl(r).release();
this.__sA=false;
break;
case R:this.getChildControl(r).release();
break;
case P:this.getChildControl(s).release();
this.__sB=false;
break;
case l:this.getChildControl(s).release();
break;
}},_onMouseWheel:function(e){if(e.getWheelDelta()>0){this._countDown();
}else{this._countUp();
}e.stop();
},_onTextChange:function(e){var bt=this.getChildControl(u);
var bu;
if(this.getNumberFormat()){try{bu=this.getNumberFormat().parse(bt.getValue());
}catch(U){}}if(bu===undefined){bu=parseFloat(bt.getValue(),10);
}if(!isNaN(bu)){if(bu>this.getMaximum()){bt.setValue(this.getMaximum()+t);
return;
}else if(bu<this.getMinimum()){bt.setValue(this.getMinimum()+t);
return;
}this.setValue(bu);
}else{this._applyValue(this.__sz,undefined);
}},_onChangeLocale:function(bi){if(this.getNumberFormat()!==null){this.setNumberFormat(this.getNumberFormat());
var bj=this.getChildControl(u);
bj.setFilter(this._getFilterRegExp());
bj.setValue(this.getNumberFormat().format(this.getValue()));
}},_onChangeNumberFormat:function(d){var f=this.getChildControl(u);
f.setFilter(this._getFilterRegExp());
f.setValue(this.getNumberFormat().format(this.getValue()));
},_countUp:function(){if(this.__sA){var T=this.getValue()+this.getPageStep();
}else{var T=this.getValue()+this.getSingleStep();
}if(this.getWrap()){if(T>this.getMaximum()){var S=this.getMaximum()-T;
T=this.getMinimum()+S;
}}this.gotoValue(T);
},_countDown:function(){if(this.__sB){var W=this.getValue()-this.getPageStep();
}else{var W=this.getValue()-this.getSingleStep();
}if(this.getWrap()){if(W<this.getMinimum()){var V=this.getMinimum()+W;
W=this.getMaximum()-V;
}}this.gotoValue(W);
},gotoValue:function(bs){return this.setValue(Math.min(this.getMaximum(),Math.max(this.getMinimum(),bs)));
}},destruct:function(){if(qx.core.Variant.isSet(N,M)){qx.locale.Manager.getInstance().removeListener(O,this._onChangeLocale,this);
}}});
})();
(function(){var P="showingPlaceholder",O="color",N="",M="none",L="qx.client",K="changeValue",J="Boolean",I="qx.event.type.Data",H="readonly",G="input",bC="focusin",bB="visibility",bA="focusout",bz="hidden",by="absolute",bx="readOnly",bw="text",bv="_applyTextAlign",bu="px",bt="RegExp",W=")",X="syncAppearance",U="gecko",V="A",S="change",T="textAlign",Q="focused",R="center",Y="visible",ba="disabled",bh="url(",bf="String",bl="resize",bj="qx.ui.form.AbstractField",bp="transparent",bn="off",bc="spellcheck",bs="false",br="right",bq="PositiveInteger",bb="mshtml",bd="abstract",be="block",bg="webkit",bi="_applyReadOnly",bk="_applyPlaceholder",bm="left",bo="qx/static/blank.gif";
qx.Class.define(bj,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:bd,construct:function(bM){arguments.callee.base.call(this);

if(bM!=null){this.setValue(bM);
}this.getContentElement().addListener(S,this._onChangeContent,this);
this.addListener(X,this._syncPlaceholder,this);
},events:{"input":I,"changeValue":I},properties:{textAlign:{check:[bm,R,br],nullable:true,themeable:true,apply:bv},readOnly:{check:J,apply:bi,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:bq,init:Infinity},liveUpdate:{check:J,init:false},placeholder:{check:bf,nullable:true,apply:bk},filter:{check:bt,nullable:true,init:null}},members:{__p:true,__q:null,getFocusElement:function(){var l=this.getContentElement();

if(l){return l;
}},_createInputElement:function(){return new qx.html.Input(bw);
},renderLayout:function(bD,top,bE,bF){var bG=this._updateInsets;
var bK=arguments.callee.base.call(this,bD,top,bE,bF);
if(!bK){return;
}var bI=bK.size||bG;
var bL=bu;

if(bI||bK.local||bK.margin){var bH=this.getInsets();
var innerWidth=bE-bH.left-bH.right;
var innerHeight=bF-bH.top-bH.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bJ=this.getContentElement();

if(bG){this.__s().setStyles({"left":bH.left+bL,"top":bH.top+bL});
}
if(bI){this.__s().setStyles({"width":innerWidth+bL,"height":innerHeight+bL});
bJ.setStyles({"width":innerWidth+bL,"height":innerHeight+bL});
}},_createContentElement:function(){var m=this._createInputElement();
m.setStyles({"border":M,"padding":0,"margin":0,"display":be,"background":bp,"outline":M,"appearance":M,"position":by,"autoComplete":bn});
m.setSelectable(this.getSelectable());
m.setEnabled(this.getEnabled());
m.addListener(G,this._onHtmlInput,this);
if(qx.core.Variant.isSet(L,U)){m.setAttribute(bc,bs);
}if(qx.core.Variant.isSet(L,bg)){m.setStyle(bl,M);
}if(qx.core.Variant.isSet(L,bb)){m.setStyles({backgroundImage:bh+qx.util.ResourceManager.getInstance().toUri(bo)+W});
}return m;
},_applyEnabled:function(p,q){arguments.callee.base.call(this,p,q);
this.getContentElement().setEnabled(p);

if(p){this._showPlaceholder();
}else{this._removePlaceholder();
}},__r:{width:16,height:16},_getContentHint:function(){return {width:this.__r.width*10,height:this.__r.height||16};
},_applyFont:function(c,d){var f;

if(c){var g=qx.theme.manager.Font.getInstance().resolve(c);
f=g.getStyles();
}else{f=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(f);
this.__s().setStyles(f);
if(c){this.__r=qx.bom.Label.getTextSize(V,f);
}else{delete this.__r;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(B,C){if(B){this.getContentElement().setStyle(O,qx.theme.manager.Color.getInstance().resolve(B));
this.__s().setStyle(O,qx.theme.manager.Color.getInstance().resolve(B));
}else{this.getContentElement().removeStyle(O);
this.__s().removeStyle(O);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__r;
},_onHtmlInput:function(e){var v=e.getData();
var u=true;
this.__p=false;
if(this.getFilter()!=null){var w=N;
var s=v.search(this.getFilter());
var t=v;

while(s>=0){w=w+(t.charAt(s));
t=t.substring(s+1,t.length);
s=t.search(this.getFilter());
}
if(w!=v){u=false;
v=w;
this.getContentElement().setValue(v);
}}if(v.length>this.getMaxLength()){var u=false;
this.getContentElement().setValue(v.substr(0,this.getMaxLength()));
}if(u){this.fireDataEvent(G,v);
if(this.getLiveUpdate()){this.fireNonBubblingEvent(K,qx.event.type.Data,[v]);
}}},setValue:function(x){if(x===null){if(this.__p){return x;
}x=N;
this.__p=true;
}else{this.__p=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(x)){var z=this.getContentElement();

if(x.length>this.getMaxLength()){x=x.substr(0,this.getMaxLength());
}
if(z.getValue()!=x){var A=z.getValue();
z.setValue(x);
var y=this.__p?null:x;
this.fireNonBubblingEvent(K,qx.event.type.Data,[y,A]);
}this._showPlaceholder();
return x;
}throw new Error("Invalid value type: "+x);
},getValue:function(){var r=this.getContentElement().getValue();
return this.__p?null:r;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__p=e.getData()===null;
this.fireNonBubblingEvent(K,qx.event.type.Data,[e.getData()]);
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(a,b){this.getContentElement().setTextSelection(a,b);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var i=this.getValue()||N;
var h=this.getPlaceholder();

if(h!=null&&i==N&&!this.hasState(Q)&&!this.hasState(ba)){if(this.hasState(P)){this._syncPlaceholder();
}else{this.addState(P);
}}},_removePlaceholder:function(){if(this.hasState(P)){this.__s().setStyle(bB,bz);
this.removeState(P);
}},_syncPlaceholder:function(){if(this.hasState(P)){this.__s().setStyle(bB,Y);
}},__s:function(){if(this.__q==null){this.__q=new qx.html.Label();
this.__q.setStyles({"visibility":bz,"zIndex":6,"position":by});
this.getContainerElement().add(this.__q);
}return this.__q;
},_applyPlaceholder:function(n,o){this.__s().setValue(n);

if(n!=null){this.addListener(bC,this._removePlaceholder,this);
this.addListener(bA,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bC,this._removePlaceholder,this);
this.removeListener(bA,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(j,k){this.getContentElement().setStyle(T,j);
},_applyReadOnly:function(D,E){var F=this.getContentElement();
F.setAttribute(bx,D);

if(D){this.addState(H);
this.setFocusable(false);
}else{this.removeState(H);
this.setFocusable(true);
}}},destruct:function(){this.__q=null;
}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var t="none",s="wrap",r="value",q="qx.client",p="textarea",o="off",n="on",m="qxSelectable",l="",k="webkit",g="input",j="qx.html.Input",i="select",f="disabled",e="read-only",h="userSelect";
qx.Class.define(j,{extend:qx.html.Element,construct:function(u){arguments.callee.base.call(this);
this.__c=u;
if(u===i||u===p){this.setNodeName(u);
}else{this.setNodeName(g);
}},members:{__c:null,__d:null,__e:null,_createDomElement:function(){return qx.bom.Input.create(this.__c);
},_applyProperty:function(name,a){arguments.callee.base.call(this,name,a);
var b=this.getDomElement();

if(name===r){qx.bom.Input.setValue(b,a);
}else if(name===s){qx.bom.Input.setWrap(b,a);
}},setEnabled:qx.core.Variant.select(q,{"webkit":function(v){this.__e=v;

if(!v){this.setStyles({"userModify":e,"userSelect":t});
}else{this.setStyles({"userModify":null,"userSelect":this.__d?null:t});
}},"default":function(w){this.setAttribute(f,w===false);
}}),setSelectable:qx.core.Variant.select(q,{"webkit":function(x){this.__d=x;
this.setAttribute(m,x?n:o);
if(qx.core.Variant.isSet(q,k)){var y=this.__e?x?null:t:t;
this.setStyle(h,y);
}},"default":function(d){this.setAttribute(m,d?n:o);
}}),setValue:function(A){var B=this.getDomElement();

if(B){if(B.value!=A){qx.bom.Input.setValue(B,A);
}}else{this._setProperty(r,A);
}return this;
},getValue:function(){var c=this.getDomElement();

if(c){return qx.bom.Input.getValue(c);
}return this._getProperty(r)||l;
},setWrap:function(z){if(this.__c===p){this._setProperty(s,z);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__c===p){return this._getProperty(s);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var C="change",B="input",A="checkbox",z="radio",y="textarea",x="qx.client",w="text",v="password",u="keypress",t="propertychange",p="select-multiple",s="checked",r="value",n="select",m="qx.event.handler.Input",q="Enter";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(N,O){var P=N.tagName.toLowerCase();

if(O===B&&(P===B||P===y)){return true;
}
if(O===C&&(P===B||P===y||P===n)){return true;
}return false;
},registerEvent:qx.core.Variant.select(x,{"mshtml":function(S,T,U){if(!S.__h){var V=S.tagName.toLowerCase();
var W=S.type;

if(W===w||W===v||V===y||W===A||W===z){qx.bom.Event.addNativeListener(S,t,this._onPropertyWrapper);
}
if(W!==A&&W!==z){qx.bom.Event.addNativeListener(S,C,this._onChangeValueWrapper);
}this.__k(S,W);
S.__h=true;
}},"default":function(G,H,I){if(H===B){this.__i(G);
}else if(H===C){if(G.type===z||G.type===A){qx.bom.Event.addNativeListener(G,C,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(G,C,this._onChangeValueWrapper);
}this.__k(G,G.type);
}}}),__i:qx.core.Variant.select(x,{"mshtml":null,"webkit":function(E){var F=E.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&F==y){qx.bom.Event.addNativeListener(E,u,this._onInputWrapper);
}qx.bom.Event.addNativeListener(E,B,this._onInputWrapper);
},"default":function(M){qx.bom.Event.addNativeListener(M,B,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(x,{"mshtml":function(a,b){if(a.__h){var c=a.tagName.toLowerCase();
var d=a.type;

if(d===w||d===v||c===y||d===A||d===z){qx.bom.Event.removeNativeListener(a,t,this._onPropertyWrapper);
}
if(d!==A&&d!==z){qx.bom.Event.removeNativeListener(a,C,this._onChangeValueWrapper);
}
try{delete a.__h;
}catch(Y){a.__h=null;
}}},"default":function(j,k){if(k===B){this.__i(j);
}else if(k===C){if(j.type===z||j.type===A){qx.bom.Event.removeNativeListener(j,C,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(j,C,this._onChangeValueWrapper);
}}}}),__j:qx.core.Variant.select(x,{"mshtml":null,"webkit":function(ba){var bb=ba.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&bb==y){qx.bom.Event.removeNativeListener(ba,u,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(ba,B,this._onInputWrapper);
},"default":function(f){qx.bom.Event.removeNativeListener(f,B,this._onInputWrapper);
}}),__k:qx.core.Variant.select(x,{"mshtml|opera":function(K,L){if(L===w||L===v){qx.event.Registration.addListener(K,u,function(e){if(e.getKeyIdentifier()===q){qx.event.Registration.fireEvent(K,C,qx.event.type.Data,[K.value]);
}});
}},"default":function(bc,bd){}}),_onInput:qx.event.GlobalError.observeMethod(function(e){var D=e.target;
qx.event.Registration.fireEvent(D,B,qx.event.type.Data,[D.value]);
}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var h=e.target||e.srcElement;
var g=h.value;

if(h.type===p){var g=[];

for(var i=0,o=h.options,l=o.length;i<l;i++){if(o[i].selected){g.push(o[i].value);
}}}qx.event.Registration.fireEvent(h,C,qx.event.type.Data,[g]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var X=e.target;

if(X.type===z){if(X.checked){qx.event.Registration.fireEvent(X,C,qx.event.type.Data,[X.value]);
}}else{qx.event.Registration.fireEvent(X,C,qx.event.type.Data,[X.checked]);
}}),_onProperty:qx.core.Variant.select(x,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var Q=e.target||e.srcElement;
var R=e.propertyName;

if(R===r&&(Q.type===w||Q.type===v||Q.tagName.toLowerCase()===y)){if(!Q.__inValueSet){qx.event.Registration.fireEvent(Q,B,qx.event.type.Data,[Q.value]);
}}else if(R===s){if(Q.type===A){qx.event.Registration.fireEvent(Q,C,qx.event.type.Data,[Q.checked]);
}else if(Q.checked){qx.event.Registration.fireEvent(Q,C,qx.event.type.Data,[Q.value]);
}}}),"default":function(){}})},defer:function(J){qx.event.Registration.addHandler(J);
}});
})();
(function(){var v="",u="select",t="soft",s="off",r="qx.client",q="wrap",p="text",o="mshtml",n="number",m="checkbox",d="select-one",k="input",g="option",c="value",b="radio",f="qx.bom.Input",e="nowrap",h="textarea",a="auto",j="normal";
qx.Class.define(f,{statics:{__f:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(w,x,y){{};
var x=x?qx.lang.Object.clone(x):{};
var z;

if(w===h||w===u){z=w;
}else{z=k;
x.type=w;
}return qx.bom.Element.create(z,x,y);
},setValue:function(A,B){var G=A.nodeName.toLowerCase();
var D=A.type;
var Array=qx.lang.Array;
var H=qx.lang.Type;

if(typeof B===n){B+=v;
}
if((D===m||D===b)){if(H.isArray(B)){A.checked=Array.contains(B,A.value);
}else{A.checked=A.value==B;
}}else if(G===u){var C=H.isArray(B);
var I=A.options;
var E,F;

for(var i=0,l=I.length;i<l;i++){E=I[i];
F=E.getAttribute(c);

if(F==null){F=E.text;
}E.selected=C?Array.contains(B,F):B==F;
}
if(C&&B.length==0){A.selectedIndex=-1;
}}else if(D===p&&qx.core.Variant.isSet(r,o)){A.__g=true;
A.value=B;
A.__g=null;
}else{A.value=B;
}},getValue:function(P){var V=P.nodeName.toLowerCase();

if(V===g){return (P.attributes.value||{}).specified?P.value:P.text;
}
if(V===u){var Q=P.selectedIndex;
if(Q<0){return null;
}var W=[];
var Y=P.options;
var X=P.type==d;
var U=qx.bom.Input;
var T;
for(var i=X?Q:0,S=X?Q+1:Y.length;i<S;i++){var R=Y[i];

if(R.selected){T=U.getValue(R);
if(X){return T;
}W.push(T);
}}return W;
}else{return (P.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Variant.select(r,{"mshtml":function(ba,bb){ba.wrap=bb?t:s;
},"gecko|webkit":function(L,M){var O=M?t:s;
var N=M?v:a;
L.setAttribute(q,O);
L.style.overflow=N;
},"default":function(J,K){J.style.whiteSpace=K?j:e;
}})}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(g){return qx.locale.Manager.getInstance().localize(d,[],g);
},getGroupSeparator:function(e){return qx.locale.Manager.getInstance().localize(a,[],e);
},getPercentFormat:function(f){return qx.locale.Manager.getInstance().localize(c,[],f);
}}});
})();
(function(){var c="qx.ui.core.ISingleSelection",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"changeSelection":b},members:{getSelection:function(){return true;
},setSelection:function(a){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var i="qx.ui.core.MSingleSelectionHandling",h="changeSelection",g="changeSelected",f="__kp",d="qx.event.type.Data";
qx.Mixin.define(i,{events:{"changeSelection":d},members:{__kp:null,getSelection:function(){var m=this.__kq().getSelected();

if(m){return [m];
}else{return [];
}},setSelection:function(j){switch(j.length){case 0:this.resetSelection();
break;
case 1:this.__kq().setSelected(j[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+j.length+" items!");
}},resetSelection:function(){this.__kq().resetSelected();
},isSelected:function(l){return this.__kq().isSelected(l);
},isSelectionEmpty:function(){return this.__kq().isSelectionEmpty();
},getSelectables:function(){return this.__kq().getSelectables();
},_onChangeSelected:function(e){var b=e.getData();
var a=e.getOldData();
b==null?b=[]:b=[b];
a==null?a=[]:a=[a];
this.fireDataEvent(h,b,a);
},__kq:function(){if(this.__kp==null){var k=this;
this.__kp=new qx.ui.core.SingleSelectionManager({getItems:function(){return k._getItems();
},isItemSelectable:function(c){if(k._isItemSelectable){return k._isItemSelectable(c);
}else{return c.isEnabled()&&c.isVisible();
}}});
this.__kp.addListener(g,this._onChangeSelected,this);
}this.__kp.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__kp;
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var e="change",d="qx.event.type.Data",c="qx.ui.form.MModelSelection",b="__ks",a="changeSelection";
qx.Mixin.define(c,{construct:function(){this.__ks=new qx.data.Array();
this.__ks.addListener(e,this.__kv,this);
this.addListener(a,this.__ku,this);
},events:{changeModelSelection:d},members:{__ks:null,__kt:false,__ku:function(){if(this.__kt){return;
}var h=this.getSelection();
var f=[];

for(var i=0;i<h.length;i++){var k=h[i];
var g=k.getModel?k.getModel():null;

if(g!==null){f.push(g);
}}this.setModelSelection(f);
},__kv:function(){this.__kt=true;
var o=this.getSelectables();
var q=[];
var p=this.__ks.toArray();

for(var i=0;i<p.length;i++){var s=p[i];

for(var j=0;j<o.length;j++){var t=o[j];
var n=t.getModel?t.getModel():null;

if(s===n){q.push(t);
break;
}}}this.setSelection(q);
this.__kt=false;
var r=this.getSelection();

if(!qx.lang.Array.equals(r,q)){this.__ku();
}},getModelSelection:function(){return this.__ks;
},setModelSelection:function(l){if(!l){this.__ks.removeAll();
return;
}{};
l.unshift(this.__ks.getLength());
l.unshift(0);
var m=this.__ks.splice.apply(this.__ks,l);
m.dispose();
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var x="Boolean",w="changeValue",v="_applyAllowEmptySelection",u="_applyInvalidMessage",t="qx.ui.form.RadioGroup",s="_applyValid",r="",q="changeRequired",p="changeValid",o="changeEnabled",k="__a",n="changeInvalidMessage",m="changeSelection",j="_applyEnabled",h="String";
qx.Class.define(t,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(d){arguments.callee.base.call(this);
this.__a=[];
this.addListener(m,this.__b,this);

if(d!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:x,apply:j,event:o},wrap:{check:x,init:true},allowEmptySelection:{check:x,init:false,apply:v},valid:{check:x,init:true,apply:s,event:p},required:{check:x,init:false,event:q},invalidMessage:{check:h,init:r,event:n,apply:u}},members:{__a:null,getItems:function(){return this.__a;
},add:function(y){var z=this.__a;
var A;

for(var i=0,l=arguments.length;i<l;i++){A=arguments[i];

if(qx.lang.Array.contains(z,A)){continue;
}A.addListener(w,this._onItemChangeChecked,this);
z.push(A);
A.setGroup(this);
if(A.getValue()){this.setSelection([A]);
}}if(!this.isAllowEmptySelection()&&z.length>0&&!this.getSelection()[0]){this.setSelection([z[0]]);
}},remove:function(F){var G=this.__a;

if(qx.lang.Array.contains(G,F)){qx.lang.Array.remove(G,F);
if(F.getGroup()===this){F.resetGroup();
}F.removeListener(w,this._onItemChangeChecked,this);
if(F.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__a;
},_onItemChangeChecked:function(e){var M=e.getTarget();

if(M.getValue()){this.setSelection([M]);
}else if(this.getSelection()[0]==M){this.resetSelection();
}},_applyInvalidMessage:function(D,E){for(var i=0;i<this.__a.length;i++){this.__a[i].setInvalidMessage(D);
}},_applyValid:function(B,C){for(var i=0;i<this.__a.length;i++){this.__a[i].setValid(B);
}},_applyEnabled:function(a,b){var c=this.__a;

if(a==null){for(var i=0,l=c.length;i<l;i++){c[i].resetEnabled();
}}else{for(var i=0,l=c.length;i<l;i++){c[i].setEnabled(a);
}}},_applyAllowEmptySelection:function(f,g){if(!f&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var N=this.getSelection()[0];
var P=this.__a;
var O=P.indexOf(N);

if(O==-1){return;
}var i=0;
var length=P.length;
if(this.getWrap()){O=(O+1)%length;
}else{O=Math.min(O+1,length-1);
}
while(i<length&&!P[O].getEnabled()){O=(O+1)%length;
i++;
}this.setSelection([P[O]]);
},selectPrevious:function(){var H=this.getSelection()[0];
var J=this.__a;
var I=J.indexOf(H);

if(I==-1){return;
}var i=0;
var length=J.length;
if(this.getWrap()){I=(I-1+length)%length;
}else{I=Math.max(I-1,0);
}
while(i<length&&!J[I].getEnabled()){I=(I-1+length)%length;
i++;
}this.setSelection([J[I]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__b:function(e){var L=e.getData()[0];
var K=e.getOldData()[0];

if(K){K.setValue(false);
}
if(L){L.setValue(true);
}}},destruct:function(){this._disposeArray(k);
}});
})();
(function(){var h="Boolean",g="qx.ui.core.SingleSelectionManager",f="__kk",e="changeSelected",d="__kl",c="__km",b="qx.event.type.Data";
qx.Class.define(g,{extend:qx.core.Object,construct:function(n){arguments.callee.base.call(this);
{};
this.__kk=n;
},events:{"changeSelected":b},properties:{allowEmptySelection:{check:h,init:true,apply:c}},members:{__kl:null,__kk:null,getSelected:function(){return this.__kl;
},setSelected:function(a){if(!this.__ko(a)){throw new Error("Could not select "+a+", because it is not a child element!");
}this.__kn(a);
},resetSelected:function(){this.__kn(null);
},isSelected:function(u){if(!this.__ko(u)){throw new Error("Could not check if "+u+" is selected,"+" because it is not a child element!");
}return this.__kl===u;
},isSelectionEmpty:function(){return this.__kl==null;
},getSelectables:function(){var o=this.__kk.getItems();
var p=[];

for(var i=0;i<o.length;i++){if(this.__kk.isItemSelectable(o[i])){p.push(o[i]);
}}return p;
},__km:function(q,r){if(!q){this.__kn(this.__kl);
}},__kn:function(j){var m=this.__kl;
var l=j;

if(l!=null&&m===l){return;
}
if(!this.isAllowEmptySelection()&&l==null){var k=this.getSelectables()[0];

if(k){l=k;
}}this.__kl=l;
this.fireDataEvent(e,l,m);
},__ko:function(s){var t=this.__kk.getItems();

for(var i=0;i<t.length;i++){if(t[i]===s){return true;
}}return false;
}},destruct:function(){if(this.__kk.toHashCode){this._disposeObjects(f);
}else{this.__kk=null;
}this._disposeObjects(d);
}});
})();
(function(){var j="[",i="]",h=".",g="idBubble",f="changeBubble",d="qx.data.marshal.MEventBubbling",c="qx.event.type.Data";
qx.Mixin.define(d,{events:{"changeBubble":c},members:{_applyEventPropagation:function(a,b,name){this.fireDataEvent(f,{value:a,name:name,old:b});
this._registerEventChaining(a,b,name);
},_registerEventChaining:function(k,l,name){if((k instanceof qx.core.Object)&&qx.Class.hasMixin(k.constructor,qx.data.marshal.MEventBubbling)){var m=qx.lang.Function.bind(this.__kr,this,name);
var n=k.addListener(f,m,this);
k.setUserData(g,n);
}if(l!=null&&l.getUserData&&l.getUserData(g)!=null){l.removeListenerById(l.getUserData(g));
}},__kr:function(name,e){var v=e.getData();
var r=v.value;
var p=v.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(v.name.indexOf){var u=v.name.indexOf(h)!=-1?v.name.indexOf(h):v.name.length;
var s=v.name.indexOf(j)!=-1?v.name.indexOf(j):v.name.length;

if(u<s){var o=v.name.substring(0,u);
var t=v.name.substring(u+1,v.name.length);

if(t[0]!=j){t=h+t;
}var q=name+j+o+i+t;
}else if(s<u){var o=v.name.substring(0,s);
var t=v.name.substring(s,v.name.length);
var q=name+j+o+i+t;
}else{var q=name+j+v.name+i;
}}else{var q=name+j+v.name+i;
}}else{var q=name+h+v.name;
}this.fireDataEvent(f,{value:r,name:q,old:p});
}}});
})();
(function(){var ba="change",Y="add",X="remove",W="order",V="",U="qx.data.Array",T="?",S="changeBubble",R="qx.event.type.Event",Q="number",O="changeLength",P="qx.event.type.Data";
qx.Class.define(U,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(a){arguments.callee.base.call(this);
if(a==undefined){this.__ki=[];
}else if(arguments.length>1){this.__ki=[];

for(var i=0;i<arguments.length;i++){this.__ki.push(arguments[i]);
}}else if(typeof a==Q){this.__ki=new Array(a);
}else if(a instanceof Array){this.__ki=qx.lang.Array.clone(a);
}else{this.__ki=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__ki.length;i++){this._applyEventPropagation(this.__ki[i],null,i);
}this.__kj();
},events:{"change":P,"changeLength":R},members:{__ki:null,concat:function(H){if(H){var I=this.__ki.concat(H);
}else{var I=this.__ki.concat();
}return new qx.data.Array(I);
},join:function(bc){return this.__ki.join(bc);
},pop:function(){var b=this.__ki.pop();
this.__kj();
this._applyEventPropagation(null,b,this.length-1);
this.fireDataEvent(ba,{start:this.length-1,end:this.length-1,type:X,items:[b]},null);
return b;
},push:function(n){for(var i=0;i<arguments.length;i++){this.__ki.push(arguments[i]);
this.__kj();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(ba,{start:this.length-1,end:this.length-1,type:Y,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__ki.reverse();
this.fireDataEvent(ba,{start:0,end:this.length-1,type:W,items:null},null);
},shift:function(){var F=this.__ki.shift();
this.__kj();
this._applyEventPropagation(null,F);
this.fireDataEvent(ba,{start:0,end:this.length-1,type:X,items:[F]},null);
return F;
},slice:function(bg,bh){return new qx.data.Array(this.__ki.slice(bg,bh));
},splice:function(p,q,r){var x=this.__ki.length;
var u=this.__ki.splice.apply(this.__ki,arguments);
if(this.__ki.length!=x){this.__kj();
}var v=q>0;
var s=arguments.length>2;
var t=null;

if(v||s){if(this.__ki.length>x){var w=Y;
}else if(this.__ki.length<x){var w=X;
t=u;
}else{var w=W;
}this.fireDataEvent(ba,{start:p,end:this.length-1,type:w,items:t},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,p+i);
}this.fireDataEvent(S,{value:this,name:T,old:u});
for(var i=0;i<u.length;i++){this._applyEventPropagation(null,u[i],i);
}return (new qx.data.Array(u));
},sort:function(N){this.__ki.sort.apply(this.__ki,arguments);
this.fireDataEvent(ba,{start:0,end:this.length-1,type:W,items:null},null);
},unshift:function(B){for(var i=arguments.length-1;i>=0;i--){this.__ki.unshift(arguments[i]);
this.__kj();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(ba,{start:0,end:this.length-1,type:Y,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__ki;
},getItem:function(bb){return this.__ki[bb];
},setItem:function(y,z){var A=this.__ki[y];
this.__ki[y]=z;
this._applyEventPropagation(z,A,y);
if(this.length!=this.__ki.length){this.__kj();
}this.fireDataEvent(ba,{start:y,end:y,type:Y,items:[z]},null);
},getLength:function(){return this.length;
},indexOf:function(M){return this.__ki.indexOf(M);
},toString:function(){if(this.__ki!=null){return this.__ki.toString();
}return V;
},contains:function(c){return this.__ki.indexOf(c)!==-1;
},copy:function(){return this.concat();
},insertAt:function(D,E){this.splice(D,0,E);
},insertBefore:function(J,K){var L=this.indexOf(J);

if(L==-1){this.push(K);
}else{this.splice(L,0,K);
}},insertAfter:function(f,g){var h=this.indexOf(f);

if(h==-1||h==(this.length-1)){this.push(g);
}else{this.splice(h+1,0,g);
}},removeAt:function(G){return this.splice(G,1)[0];
},removeAll:function(){for(var i=0;i<this.__ki.length;i++){this._applyEventPropagation(null,this.__ki[i],i);
}var e=this.getLength();
var d=this.__ki.concat();
this.__ki.length=0;
this.__kj();
this.fireDataEvent(ba,{start:0,end:e-1,type:X,items:d},null);
},append:function(m){{};
for(var i=0;i<m.length;i++){this._applyEventPropagation(m[i],null,this.__ki.length+i);
}Array.prototype.push.apply(this.__ki,m);
this.__kj();
},remove:function(bd){var be=this.indexOf(bd);

if(be!=-1){this.splice(be,1);
return bd;
}},equals:function(j){if(this.length!==j.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==j.getItem(i)){return false;
}}return true;
},sum:function(){var o=0;

for(var i=0;i<this.length;i++){o+=this.getItem(i);
}return o;
},max:function(){var C=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>C){C=this.getItem(i);
}}return C===undefined?null:C;
},min:function(){var bf=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bf){bf=this.getItem(i);
}}return bf===undefined?null:bf;
},forEach:function(k,l){for(var i=0;i<this.__ki.length;i++){k.call(l,this.__ki[i]);
}},__kj:function(){this.length=this.__ki.length;
this.fireEvent(O,qx.event.type.Event);
}},destruct:function(){this.__ki=null;
}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(d){},getValue:function(){},setGroup:function(c){this.assertInstance(c,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var q="checked",p="keypress",o="Boolean",n="Right",m="_applyValue",l="changeValue",k="qx.ui.form.RadioButton",j="radiobutton",i="Left",h="qx.ui.form.RadioGroup",d="Down",g="_applyGroup",f="Up",c="execute";
qx.Class.define(k,{extend:qx.ui.form.Button,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IForm,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(u){{};
arguments.callee.base.call(this,u);
this.addListener(c,this._onExecute);
this.addListener(p,this._onKeyPress);
},properties:{group:{check:h,nullable:true,apply:g},value:{check:o,nullable:true,event:l,apply:m,init:false},appearance:{refine:true,init:j},allowGrowX:{refine:true,init:false}},members:{_applyValue:function(r,s){r?this.addState(q):this.removeState(q);

if(r&&this.getFocusable()){this.focus();
}},_applyGroup:function(a,b){if(b){b.remove(this);
}
if(a){a.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onKeyPress:function(e){var t=this.getGroup();

if(!t){return;
}
switch(e.getKeyIdentifier()){case i:case f:t.selectPrevious();
break;
case n:case d:t.selectNext();
break;
}}}});
})();
(function(){var e="demobrowser.demo.util.LayoutPropertyGroup";
qx.Class.define(e,{extend:demobrowser.demo.util.PropertyGroup,statics:{BOX_PROPERTIES:{"flex":{type:"int",min:-1000,nullable:true}},BASIC_PROPERTIES:{"top":{type:"int",min:-1000,nullable:true},"left":{type:"int",min:-1000,nullable:true}},CANVAS_PROPERTIES:{"top":{type:"string",nullable:true,convert:function(a){if(parseInt(a).toString()==a){a=parseInt(a);
}return a||null;
}},"right":{type:"string",nullable:true,convert:function(l){if(parseInt(l).toString()==l){l=parseInt(l);
}return l||null;
}},"bottom":{type:"string",nullable:true,convert:function(o){if(parseInt(o).toString()==o){o=parseInt(o);
}return o||null;
}},"left":{type:"string",nullable:true,convert:function(j){if(parseInt(j).toString()==j){j=parseInt(j);
}return j||null;
}},"width":{type:"int",nullable:true,convert:function(m){return m==null?null:m+"%";
}},"height":{type:"int",nullable:true,convert:function(c){return c==null?null:c+"%";
}}},DOCK_PROPERTIES:{"width":{type:"int",nullable:true,convert:function(d){return d==null?null:d+"%";
}},"height":{type:"int",nullable:true,convert:function(b){return b==null?null:b+"%";
}},"edge":{type:"enum",values:["north","east","south","west","center"],nullable:false}},GRID_PROPERTIES:{"row":{type:"int",nullable:false},"column":{type:"int",nullable:false},"rowSpan":{type:"int",nullable:true},"colSpan":{type:"int",nullable:true}}},members:{_setProperty:function(f,name,g){var h=this._properties[name].convert;

if(h){g=h(g);
}var i={};
i[name]=g;
f.setLayoutProperties(i);
},_getProperty:function(n,name){return n.getLayoutProperties()[name]||null;
},_hasProperty:function(k,name){return true;
}}});
})();
(function(){var c="pane",b="qx.ui.container.Scroll";
qx.Class.define(b,{extend:qx.ui.core.scroll.AbstractScrollArea,include:[qx.ui.core.MContentPadding],construct:function(content){arguments.callee.base.call(this);

if(content){this.add(content);
}},members:{add:function(d){this.getChildControl(c).add(d);
},remove:function(a){this.getChildControl(c).remove(a);
},getChildren:function(){return this.getChildControl(c).getChildren();
},_getContentPaddingTarget:function(){return this.getChildControl(c);
}}});
})();
(function(){var w="'>",v="[",u=", ",t="</span>",s="<span class='type-",r="</span> ",q="}",p="",o="]",n="{",T="map",S="<span class='object'>",R="]:",Q="&gt;",P="<span class='object' title='Object instance with hash code: ",O="string",N="level-",M="0",L="&lt;",K="<span class='offset'>",D=":",E="qx.log.appender.Util",B="&amp;",C="&#39;",z="DIV",A="<span>",x="&quot;",y="<span class='type-key'>",F="</span>:<span class='type-",G="</span>: ",I=" ",H="]</span>: ",J="?";
qx.Class.define(E,{statics:{toHtml:function(a){var m=[];
var h,l,c,e;
m.push(K,this.formatOffset(a.offset,6),r);

if(a.object){var b=a.win.qx.core.ObjectRegistry.fromHashCode(a.object);

if(b){m.push(P+b.$$hash+w,b.classname,v,b.$$hash,H);
}}else if(a.clazz){m.push(S+a.clazz.classname,G);
}var d=a.items;

for(var i=0,k=d.length;i<k;i++){h=d[i];
l=h.text;

if(l instanceof Array){var e=[];

for(var j=0,g=l.length;j<g;j++){c=l[j];

if(typeof c===O){e.push(A+this.escapeHTML(c)+t);
}else if(c.key){e.push(y+c.key+F+c.type+w+this.escapeHTML(c.text)+t);
}else{e.push(s+c.type+w+this.escapeHTML(c.text)+t);
}}m.push(s+h.type+w);

if(h.type===T){m.push(n,e.join(u),q);
}else{m.push(v,e.join(u),o);
}m.push(t);
}else{m.push(s+h.type+w+this.escapeHTML(l)+r);
}}var f=document.createElement(z);
f.innerHTML=m.join(p);
f.className=N+a.level;
return f;
},formatOffset:function(bf,length){var bi=bf.toString();
var bg=(length||6)-bi.length;
var bh=p;

for(var i=0;i<bg;i++){bh+=M;
}return bh+bi;
},escapeHTML:function(U){return String(U).replace(/[<>&"']/g,this.__qQ);
},__qQ:function(bj){var bk={"<":L,">":Q,"&":B,"'":C,'"':x};
return bk[bj]||J;
},toText:function(bl){return this.toTextArray(bl).join(I);
},toTextArray:function(V){var be=[];
be.push(this.formatOffset(V.offset,6));

if(V.object){var W=V.win.qx.core.ObjectRegistry.fromHashCode(V.object);

if(W){be.push(W.classname+v+W.$$hash+R);
}}else if(V.clazz){be.push(V.clazz.classname+D);
}var X=V.items;
var bb,bd;

for(var i=0,bc=X.length;i<bc;i++){bb=X[i];
bd=bb.text;

if(bd instanceof Array){var Y=[];

for(var j=0,ba=bd.length;j<ba;j++){Y.push(bd[j].text);
}
if(bb.type===T){be.push(n,Y.join(u),q);
}else{be.push(v,Y.join(u),o);
}}else{be.push(bd);
}}return be;
}}});
})();
(function(){var i="debug",h="log",g="qx.log.appender.Native",f="qx.client";
qx.Bootstrap.define(g,{statics:{process:qx.core.Variant.select(f,{"gecko":function(b){if(window.console&&console.firebug){console[b.level].call(console,qx.log.appender.Util.toText(b));
}},"mshtml":function(k){if(window.console){var m=k.level;

if(m==i){m=h;
}var l=qx.log.appender.Util.toText(k);
console[m](l);
}},"webkit":function(c){if(window.console){var e=c.level;

if(e==i){e=h;
}var d=qx.log.appender.Util.toText(c);
console[e](d);
}},"opera":function(a){}})},defer:function(j){if(window.console&&window.console.clear){console.clear();
}qx.log.Logger.register(j);
}});
})();
(function(){var m="",l='</div>',k="Up",j="none",i="keypress",h='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',g="Enter",f="px",d='.qxconsole .messages .user-result{background:white}',c='.qxconsole .messages .level-error{background:#FFE2D5}',X="div",W="user-command",V='<div class="command">',U='.qxconsole .command input:focus{outline:none;}',T='.qxconsole .messages .type-key{color:#565656;font-style:italic}',S='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',R='.qxconsole .messages div{padding:0px 4px;}',Q='.qxconsole .messages .level-debug{background:white}',P='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',O="DIV",t='.qxconsole .messages .level-user{background:#E3EFE9}',u='<div class="qxconsole">',r="D",s='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',p='.qxconsole .messages .type-string{color:black;font-weight:normal;}',q='.qxconsole .control a{text-decoration:none;color:black;}',n='<div class="messages">',o='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',v='<input type="text"/>',w="clear",D='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',B='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',H='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',F='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',K='.qxconsole .messages .user-command{color:blue}',J="F7",y="qx.log.appender.Console",N='.qxconsole .messages .level-info{background:#DEEDFA}',M="block",L='.qxconsole .messages .level-warn{background:#FFF7D5}',x='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',z='.qxconsole .messages .user-error{background:#FFE2D5}',A='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',C='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',E=">>> ",G="Down",I='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(y,{statics:{init:function(){var be=[H,A,q,h,R,K,d,z,Q,N,L,c,t,p,I,o,B,s,T,P,S,x,F,D,U];
qx.bom.Stylesheet.createElement(be.join(m));
var bg=[u,C,n,l,V,v,l,l];
var bh=document.createElement(O);
bh.innerHTML=bg.join(m);
var bf=bh.firstChild;
document.body.appendChild(bh.firstChild);
this.__qH=bf;
this.__qI=bf.childNodes[1];
this.__qJ=bf.childNodes[2].firstChild;
this.__qO();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,i,this.__qP,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__qI.innerHTML=m;
},process:function(Y){this.__qI.appendChild(qx.log.appender.Util.toHtml(Y));
this.__qK();
},__qK:function(){this.__qI.scrollTop=this.__qI.scrollHeight;
},__qL:true,toggle:function(){if(!this.__qH){this.init();
}else if(this.__qH.style.display==j){this.show();
}else{this.__qH.style.display=j;
}},show:function(){if(!this.__qH){this.init();
}else{this.__qH.style.display=M;
this.__qI.scrollTop=this.__qI.scrollHeight;
}},__qM:[],execute:function(){var bd=this.__qJ.value;

if(bd==m){return;
}
if(bd==w){return this.clear();
}var bb=document.createElement(X);
bb.innerHTML=qx.log.appender.Util.escapeHTML(E+bd);
bb.className=W;
this.__qM.push(bd);
this.__qN=this.__qM.length;
this.__qI.appendChild(bb);
this.__qK();

try{var bc=window.eval(bd);
}catch(bi){qx.log.Logger.error(bi);
}
if(bc!==undefined){qx.log.Logger.debug(bc);
}},__qO:function(e){this.__qI.style.height=(this.__qH.clientHeight-this.__qH.firstChild.offsetHeight-this.__qH.lastChild.offsetHeight)+f;
},__qP:function(e){var b=e.getKeyIdentifier();
if((b==J)||(b==r&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__qH){return;
}if(!qx.dom.Hierarchy.contains(this.__qH,e.getTarget())){return;
}if(b==g&&this.__qJ.value!=m){this.execute();
this.__qJ.value=m;
}if(b==k||b==G){this.__qN+=b==k?-1:1;
this.__qN=Math.min(Math.max(0,this.__qN),this.__qM.length);
var a=this.__qM[this.__qN];
this.__qJ.value=a||m;
this.__qJ.select();
}}},defer:function(ba){qx.event.Registration.addListener(document.documentElement,i,ba.__qP,ba);
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
(function(){var cs="window",cr="",cq="childNodes",cp="nodeName",co="nodeType",cn="document",cm="function",cl="firstChild",ck="qx.client",cj="external",bA="location",bz="[native code]",by="lastChild",bx="scrollY",bw="scrollWidth",bv="defaultView",bu="closed",bt="content",bs="qx",br="</td><td>",cz="filters",cA="locationbar",cx="screenX",cy="previousSibling",cv="scrollX",cw="Global namespace is polluted by the following unknown objects:\n\n",ct="doctype",cu="parent",cB="qx.dev.Pollution",cC="outerText",bY="applets",bX="parentElement",cb="designMode",ca="cookie",cd="fullScreen",cc="links",cf="pageXOffset",ce="frames",bW="documentElement",bV="screenY",h="statusbar",j="history",k="sun",l="pkcs11",m="java",n="style",o="innerWidth",p="plugins",q="implementation",r="clientWidth",cG="compatMode",cF="length",cE="textContent",cD="controllers",cK="netscape",cJ="self",cI="domConfig",cH="attributes",cM="clientHeight",cL="outerHeight",Q="parentNode",R="innerHeight",O="title",P="ownerDocument",U="<table>",V="globalStorage",S="Global namespace is not polluted by any unknown objects.",T="toolbar",M="outerHTML",N="crypto",z="forms",y="scrollbars",B="frameElement",A="Components",v="body",u="clientInformation",x="offscreenBuffering",w="embeds",t="localName",s="scrollTop",bb="isMultiLine",bc="scrollLeft",bd="images",be="event",W="offsetHeight",X="scrollMaxY",Y="sessionStorage",ba="screen",bf="name",bg="offsetLeft",J="console",I="XMLHttpRequest",H="mshtml",G="nextSibling",F="innerText",E="menubar",D="scopeName",C="top",L="outerWidth",K=": ",bh="\n",bi="status",bj="contentEditable",bk="anchors",bl="</table>",bm="<tr style='vertical-align:top'><td>",bn="scrollMaxX",bo="screenTop",bp="defaultStatus",bq="styleSheets",bE="className",bD="personalbar",bC="</td></tr>",bB="currentStyle",bI="directories",bH="navigator",bG="pageYOffset",bF="screenLeft",bK="opener",bJ="scrollHeight",bR="__firebug__",bS="Option",bP="innerHTML",bQ="tabIndex",bN="offsetTop",bO="[function]",bL="clipboardData",bM="Packages",bT="tagName",bU="offsetWidth",ch="mshtml|opera",cg="undefined",ci="Image";
qx.Class.define(cB,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bs,m,k,bM,bR,A,cD,Y,V,J,be,x,bL,u,bS,ci,cj,bo,bF,cF,cs,cn,bA,bH,cK,cu,ce,C,y,bf,cv,bx,cJ,ba,j,bt,E,T,cA,bD,h,bI,bu,N,l,bK,bi,bp,o,R,L,cL,cx,bV,cf,bG,bn,X,cd,B,I],"document":[cI,bA,cG,q,bv,O,v,bq,bW,cp,co,cl,by,ct,bd,bY,cc,z,bk,ca,w,p,cb,cq],"body":[cE,bP,M,F,cC,D,bX,bT,cz,bj,cn,bB,bb,cM,r,by,cl,bN,bg,bU,W,bQ,bE,cH,cy,G,P,t,cq,Q,co,cp,n,s,bc,bw,bJ]},getInfo:function(cN){var cO=qx.dev.Pollution.getTextList(cN||cs);

if(cO){return cw+cO;
}else{return S;
}},extract:function(b){var d=[];
var c=qx.dev.Pollution.ignore[b];
if(qx.core.Variant.isSet(ck,H)){if(b==cs){c=c.slice(0);

for(var e=0;e<window.length;e++){c.push(cr+e);
}}}var f=qx.dev.Pollution.names[b];

for(var g in f){try{if(qx.core.Variant.isSet(ck,ch)){if(b==cs&&g==cj){continue;
}}if(typeof f[g]==cg||f[g]===null){continue;
}if(typeof f[g]==cm&&f[g].toString().indexOf(bz)!=-1){continue;
}if(typeof f[g].constructor==cm){if((f[g].constructor.toString().indexOf(bz)!=-1)||(f[g].constructor.toString().indexOf(bO)!=-1)){continue;
}}if(qx.lang.Array.contains(c,g)){continue;
}}catch(a){continue;
}d.push({"key":g,"value":f[g]});
}return d;
},getHtmlTable:function(cU){var cW=[];
var cV=bm;
var cY=br;
var da=bC;
cW.push(U);
var cX=this.extract(cU);

for(var i=0;i<cX.length;i++){cW.push(cV+cX[i].key+cY+cX[i].value+da);
}cW.push(bl);
return cW.join(cr);
},getTextList:function(cP){var cR=[];
var cS=K;
var cT=bh;
var cQ=this.extract(cP);

for(var i=0;i<cQ.length;i++){cR.push(cQ[i].key+cS+cQ[i].value+cT);
}return cR.join(cr);
}}});
})();


qx.$$loader.init();

