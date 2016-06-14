(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.table.Table_Events","qx.theme":"qx.theme.Classic"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.0.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_DE":{},"en":{},"en_US":{},"fr":{"%1 of %2 rows":"ligne %1 de %2","%1 rows":"%1 lignes","one of one row":"ligne une de une","one row":"une ligne"},"fr_FR":{}};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["demobrowser:demobrowser.demo.table.Table_Events-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"5f228b6b8482"},
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

qx.$$packageData['5f228b6b8482']={"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-copy.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-cut.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-paste.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-spreadsheet.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Oxygen/22/actions/media-record.png":[22,22,"png","qx"],"qx/icon/Oxygen/32/status/dialog-information.png":[32,32,"png","qx"],"qx/icon/Tango/16/actions/edit-copy.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-cut.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-paste.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-spreadsheet.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/media-record.png":[22,22,"png","qx"],"qx/icon/Tango/32/status/dialog-information.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]}};
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
(function(){var f="qx.locale.MTranslation";
qx.Mixin.define(f,{members:{tr:function(g,h){var i=qx.locale.Manager;

if(i){return i.tr.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(a,b,c,d){var e=qx.locale.Manager;

if(e){return e.trn.apply(e,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(j,k,l){var m=qx.locale.Manager;

if(m){return m.trc.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var c="abstract",b="qx.application.AbstractGui";
qx.Class.define(b,{type:c,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__cb:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__cb;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__cb=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(a){},terminate:function(){}},destruct:function(){this.__cb=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var e="qx.ui.table.selection.Model",d="qx.ui.table.selection.Manager";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},properties:{selectionModel:{check:e}},members:{__xN:null,handleMouseDown:function(a,b){if(b.isLeftPressed()){var c=this.getSelectionModel();

if(!c.isSelectedIndex(a)){this._handleSelectEvent(a,b);
this.__xN=true;
}else{this.__xN=false;
}}else if(b.isRightPressed()&&b.getModifiers()==0){var c=this.getSelectionModel();

if(!c.isSelectedIndex(a)){c.setSelectionInterval(a,a);
}}},handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__xN){this._handleSelectEvent(f,g);
}},handleClick:function(j,k){},handleSelectKeyDown:function(h,i){this._handleSelectEvent(h,i);
},handleMoveKeyDown:function(q,r){var t=this.getSelectionModel();

switch(r.getModifiers()){case 0:t.setSelectionInterval(q,q);
break;
case qx.event.type.Dom.SHIFT_MASK:var s=t.getAnchorSelectionIndex();

if(s==-1){t.setSelectionInterval(q,q);
}else{t.setSelectionInterval(s,q);
}break;
}},_handleSelectEvent:function(l,m){var p=this.getSelectionModel();
var n=p.getLeadSelectionIndex();
var o=p.getAnchorSelectionIndex();

if(m.isShiftPressed()){if(l!=n||p.isSelectionEmpty()){if(o==-1){o=l;
}
if(m.isCtrlOrCommandPressed()){p.addSelectionInterval(o,l);
}else{p.setSelectionInterval(o,l);
}}}else if(m.isCtrlOrCommandPressed()){if(p.isSelectedIndex(l)){p.removeSelectionInterval(l,l);
}else{p.addSelectionInterval(l,l);
}}else{p.setSelectionInterval(l,l);
}}}});
})();
(function(){var R="px",Q="Cell ",P="x",O="demobrowser.demo.table.MUtil",N="500px",M="Column #",L="#FFE",K="div",J="absolute";
qx.Mixin.define(O,{construct:function(){this._tableLeft=10;
},members:{getTableMock:function(){var w=this.getColumnModelMock();
var u=this.getModelMock();
var v=new qx.ui.table.selection.Model();
var y=new qx.ui.table.selection.Manager();
y.setSelectionModel(v);
var t={getTableModel:function(){return u;
},getTableColumnModel:function(){return w;
},getRowHeight:function(){return 20;
},getForceLineHeight:function(){return true;
},getSelectionModel:function(){return v;
},getDataRowRenderer:function(){return new qx.ui.table.rowrenderer.Default(t);
},updateContent:function(){},setFocusedCell:function(F,G){},getKeepFirstVisibleRowComplete:function(){return true;
},_updateScrollBarVisibility:function(){},getSelectionManager:function(){return y;
},getNewTablePaneHeader:function(h){return function(H){var I=new qx.ui.table.pane.Header(H);
return I;
};
},getNewTablePane:function(l){return function(c){return new qx.ui.table.pane.Pane(c);
};
},getEnabled:function(){return true;
}};
return t;
},getSelectionMock:function(){return {isSelectedIndex:function(e){return e==0;
},resetSelection:function(){}};
},getColumnModelMock:function(){return {getColumnCount:function(){return 4;
},getVisibleColumnCount:function(){return 4;
},getVisibleColumnAtX:function(x){return x;
},getColumnWidth:function(k){return 100;
},setColumnWidth:function(D,E){},getVisibleX:function(x){return x;
},getHeaderCellRenderer:function(a){return new qx.ui.table.headerrenderer.Default();
},getDataCellRenderer:function(){return new qx.ui.table.cellrenderer.Default();
},addListener:function(){}};
},getPaneModelMock:function(){var S={getColumnAtX:function(x){return x;
},getColumnCount:function(){return 4;
},getX:function(C){return C;
},getColumnLeft:function(b){return b*100;
},getTotalWidth:function(){return 4*100;
}};
return S;
},getModelMock:function(){return {getSortColumnIndex:function(){return 0;
},isSortAscending:function(){return true;
},isColumnSortable:function(d){return true;
},getColumnName:function(q){return M+q;
},isColumnEditable:function(j){return false;
},sortByColumn:function(o,p){},getRowCount:function(){return 500;
},prefetchRows:function(){},getRowData:function(f){var g=[];

for(var i=0;i<4;i++){g.push(Q+i+P+f);
}return g;
},getValue:function(m,n){return Q+m+P+n;
}};
},getPaneMock:function(){return {getFirstVisibleRow:function(){return 0;
}};
},getScrollerMock:function(){var A=this.getTableMock();
var z=this.getPaneModelMock();
var B=this.getPaneMock();
return {getTable:function(){return A;
},getTablePaneModel:function(){return z;
},getTablePane:function(){return B;
}};
},_getNewTableDiv:function(r){var s=qx.bom.Element.create(K);
qx.bom.element.Style.setStyles(s,{position:J,left:this._tableLeft+R,width:(r||150)+R,top:20+R,height:N,backgroundColor:L});
this._tableLeft+=(r||150)+20;
document.body.appendChild(s);
return s;
}}});
})();
(function(){var l="_controls",k="icon/32/status/dialog-information.png",j="",i="_table",h="center",g="en",f="icon/16/apps/office-spreadsheet.png",d="OK",c="demobrowser.demo.table.TableDemo",b="_container",a="execute";
qx.Class.define(c,{extend:qx.application.Standalone,include:demobrowser.demo.table.MUtil,members:{__zJ:null,main:function(){arguments.callee.base.call(this);
qx.locale.Manager.getInstance().setLocale(g);
this._container=new qx.ui.window.Window(this.getCaption(),f).set({width:600,height:400,contentPadding:[0,0,0,0],showClose:false,showMinimize:false});
this._container.setLayout(new qx.ui.layout.VBox());
this._container.open();
this.getRoot().add(this._container,{left:50,top:10});
this._table=this.createTable();
this._controls=this.createControls();

if(this._controls){this._container.add(this._controls);
}this._container.add(this._table,{flex:1});
},nextId:0,createRandomRows:function(q){var t=[];
var s=new Date().getTime();
var u=400*24*60*60*1000;

for(var v=0;v<q;v++){var r=new Date(s+Math.random()*u-u/2);
t.push([this.nextId++,Math.random()*10000,r,(Math.random()>0.5)]);
}return t;
},getCaption:function(){return j;
},createTable:function(){throw new Error("abstract method call");
},createControls:function(){return null;
},showDialog:function(m){if(!this.__zJ){var p=this.__zJ=new qx.ui.window.Window().set({modal:true,showMinimize:false,showMaximize:false,width:180,contentPadding:[10,10,10,10]});
p.moveTo(315,100);
var n=new qx.ui.layout.Grid(15,15);
n.setRowFlex(0,1);
n.setColumnFlex(1,1);
p.setLayout(n);
p.add(new qx.ui.basic.Image(k),{row:0,column:0});
p.add(new qx.ui.basic.Label().set({rich:true,allowGrowY:true}),{row:0,column:1});
var o=new qx.ui.form.Button(d).set({alignX:h,allowGrowX:false,padding:[2,10]});
o.addListener(a,function(e){p.close();
},this);
p.add(o,{row:1,column:0,colSpan:2});
}this.__zJ.getChildren()[1].setValue(m);
this.__zJ.open();
this.__zJ.getChildren()[2].focus();
}},destruct:function(){this._disposeObjects(i,l,b);
}});
})();
(function(){var r="",q="columnVisibilityMenuCreateEnd",p="Boolean",o="icon/16/actions/edit-cut.png",n="A number",m="changeValue",l="Column",k="sorted",j="tableWidthChanged",i="verticalScrollBarChanged",P="icon/16/actions/edit-copy.png",O="icon/22/actions/media-record.png",N="cellContextmenu",M="_events",L="Cut",K="_tableModel",J="Table",I="asc",H="icon/16/actions/edit-paste.png",G="columnVisibilityMenuCreateStart",y="cellDblclick",z="_eventsWin",w="Copy",x="Name",u="desc",v="Paste",s="Event log",t="cellClick",A="metaDataChanged",B="demobrowser.demo.table.Table_Events",D="Row",C="A date",F="Capture events",E="ID";
qx.Class.define(B,{extend:demobrowser.demo.table.TableDemo,members:{getCaption:function(){return J;
},main:function(){arguments.callee.base.call(this);
var V=this._eventsWin=new qx.ui.window.Window(s).set({height:400,width:290,showClose:false,showMinimize:false,contentPadding:0});
V.setLayout(new qx.ui.layout.Canvas());
V.open();
this.getRoot().add(V,{left:670,top:10});
this._events=new qx.ui.table.model.Simple();
this._events.setColumns([x,D,l]);
this._events.setData([]);
var U=new qx.ui.table.Table(this._events);
U.getTableColumnModel().setColumnWidth(0,150);
U.getTableColumnModel().setColumnWidth(1,60);
U.getTableColumnModel().setColumnWidth(2,60);
V.add(U,{edge:0});
},createTable:function(){var f=this.createRandomRows(50);
var a=this._tableModel=new qx.ui.table.model.Simple();
a.setColumns([E,n,C,p]);
a.setData(f);
a.setColumnEditable(1,true);
a.setColumnEditable(2,true);
var g=new qx.ui.table.Table(a);
g.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
var b=g.getTableColumnModel();
b.setDataCellRenderer(3,new qx.ui.table.cellrenderer.Boolean());
var h=function(e){this._events.addRows([[e.getType(),r,r,r]],0);
};
var d=function(e){this._events.addRows([[e.getType(),e.getRow(),e.getColumn()]],0);
};
var c=function(e){var T=e.getData();
this._events.addRows([[e.getType(),T.ascending?I:u,T.columnIndex]],0);
};
g.addListener(G,h,this);
g.addListener(q,h,this);
g.addListener(j,h,this);
g.addListener(i,h,this);
g.addListener(t,d,this);
g.addListener(y,d,this);
g.addListener(N,d,this);
a.addListener(k,c,this);
a.addListener(A,h,this);
g.setContextMenu(this.getContextMenu());
return g;
},createControls:function(){var S=new qx.ui.toolbar.ToolBar();
var Q,R;
R=new qx.ui.toolbar.Part();
S.add(R);
Q=new qx.ui.toolbar.CheckBox(F,O).set({value:true});
R.add(Q);
Q.addListener(m,function(e){if(Q.isValue()){this._events.setData([]);
this._eventsWin.open();
}else{this._eventsWin.close();
}},this);
return S;
},getContextMenu:function(){var W=new qx.ui.menu.Menu();
var Y=new qx.ui.menu.Button(L,o);
var ba=new qx.ui.menu.Button(w,P);
var X=new qx.ui.menu.Button(v,H);
W.add(Y);
W.add(ba);
W.add(X);
return W;
}},destruct:function(){this._disposeObjects(K,z,M);
}});
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
(function(){var m="object",l="__cW",k="_applyTheme",j="qx.theme.manager.Decoration",i="Theme",h="string",g="singleton";
qx.Class.define(j,{type:g,extend:qx.core.Object,properties:{theme:{check:i,nullable:true,apply:k}},members:{__cW:null,resolve:function(n){if(!n){return null;
}
if(typeof n===m){return n;
}var q=this.getTheme();

if(!q){return null;
}var q=this.getTheme();

if(!q){return null;
}var r=this.__cW;

if(!r){r=this.__cW={};
}var o=r[n];

if(o){return o;
}var p=q.decorations[n];

if(!p){return null;
}var s=p.decorator;

if(s==null){throw new Error("Missing definition of which decorator to use in entry: "+n+"!");
}return r[n]=(new s).set(p.style);
},isValidPropertyValue:function(e){if(typeof e===h){return this.isDynamic(e);
}else if(typeof e===m){var f=e.constructor;
return qx.Class.hasInterface(f,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(t){if(!t){return false;
}var u=this.getTheme();

if(!u){return false;
}return !!u.decorations[t];
},_applyTheme:function(a,b){var d=qx.util.AliasManager.getInstance();

if(b){for(var c in b.aliases){d.remove(c);
}}
if(a){for(var c in a.aliases){d.add(c,a.aliases[c]);
}}
if(!a){this.__cW={};
}}},destruct:function(){this._disposeMap(l);
}});
})();
(function(){var c="qx.ui.decoration.IDecorator";
qx.Interface.define(c,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(a,b){},getInsets:function(){}}});
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
(function(){var g="qx.theme.manager.Font",f="Theme",e="changeTheme",d="_applyTheme",c="singleton";
qx.Class.define(g,{type:c,extend:qx.util.ValueManager,properties:{theme:{check:f,nullable:true,apply:d,event:e}},members:{resolveDynamic:function(a){var b=this._dynamic;
return a instanceof qx.bom.Font?a:b[a];
},resolve:function(k){var n=this._dynamic;
var l=n[k];

if(l){return l;
}var m=this.getTheme();

if(m!==null&&m.fonts[k]){return n[k]=(new qx.bom.Font).set(m.fonts[k]);
}return k;
},isDynamic:function(h){var j=this._dynamic;

if(h&&(h instanceof qx.bom.Font||j[h]!==undefined)){return true;
}var i=this.getTheme();

if(i!==null&&h&&i.fonts[h]){j[h]=(new qx.bom.Font).set(i.fonts[h]);
return true;
}return false;
},_applyTheme:function(o){var p=this._getDynamic();

for(var s in p){if(p[s].themed){p[s].dispose();
delete p[s];
}}
if(o){var q=o.fonts;
var r=qx.bom.Font;

for(var s in q){p[s]=(new r).set(q[s]);
p[s].themed=true;
}}this._setDynamic(p);
}}});
})();
(function(){var w="",v="underline",u="Boolean",t="px",s='"',r="italic",q="normal",p="bold",o="_applyItalic",n="_applyBold",I="Integer",H="_applyFamily",G="_applyLineHeight",F="Array",E="overline",D="line-through",C="qx.bom.Font",B="Number",A="_applyDecoration",z=" ",x="_applySize",y=",";
qx.Class.define(C,{extend:qx.core.Object,construct:function(N,O){arguments.callee.base.call(this);

if(N!==undefined){this.setSize(N);
}
if(O!==undefined){this.setFamily(O);
}},statics:{fromString:function(c){var g=new qx.bom.Font();
var e=c.split(/\s+/);
var name=[];
var f;

for(var i=0;i<e.length;i++){switch(f=e[i]){case p:g.setBold(true);
break;
case r:g.setItalic(true);
break;
case v:g.setDecoration(v);
break;
default:var d=parseInt(f,10);

if(d==f||qx.lang.String.contains(f,t)){g.setSize(d);
}else{name.push(f);
}break;
}}
if(name.length>0){g.setFamily(name);
}return g;
},fromConfig:function(k){var m=new qx.bom.Font;
m.set(k);
return m;
},__cY:{fontFamily:w,fontSize:w,fontWeight:w,fontStyle:w,textDecoration:w,lineHeight:1.2},getDefaultStyles:function(){return this.__cY;
}},properties:{size:{check:I,nullable:true,apply:x},lineHeight:{check:B,nullable:true,apply:G},family:{check:F,nullable:true,apply:H},bold:{check:u,nullable:true,apply:n},italic:{check:u,nullable:true,apply:o},decoration:{check:[v,D,E],nullable:true,apply:A}},members:{__da:null,__db:null,__dc:null,__dd:null,__de:null,__df:null,_applySize:function(J,K){this.__da=J===null?null:J+t;
},_applyLineHeight:function(a,b){this.__df=a===null?null:a;
},_applyFamily:function(P,Q){var R=w;

for(var i=0,l=P.length;i<l;i++){if(P[i].indexOf(z)>0){R+=s+P[i]+s;
}else{R+=P[i];
}
if(i!==l-1){R+=y;
}}this.__db=R;
},_applyBold:function(h,j){this.__dc=h===null?null:h?p:q;
},_applyItalic:function(L,M){this.__dd=L===null?null:L?r:q;
},_applyDecoration:function(S,T){this.__de=S===null?null:S;
},getStyles:function(){return {fontFamily:this.__db,fontSize:this.__da,fontWeight:this.__dc,fontStyle:this.__dd,textDecoration:this.__de,lineHeight:this.__df};
}}});
})();
(function(){var h="qx.theme.manager.Icon",g="Theme",f="_applyTheme",e="singleton";
qx.Class.define(h,{type:e,extend:qx.core.Object,properties:{theme:{check:g,nullable:true,apply:f}},members:{_applyTheme:function(a,b){var d=qx.util.AliasManager.getInstance();

if(b){for(var c in b.aliases){d.remove(c);
}}
if(a){for(var c in a.aliases){d.add(c,a.aliases[c]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__dg={};
this.__dh={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__di:{},__dg:null,__dh:null,_applyTheme:function(z,A){this.__dh={};
this.__dg={};
},__dj:function(B,C,D){var H=C.appearances;
var K=H[B];

if(!K){var L=b;
var E=[];
var J=B.split(L);
var I;

while(!K&&J.length>0){E.unshift(J.pop());
var F=J.join(L);
K=H[F];

if(K){I=K.alias||K;

if(typeof I===h){var G=I+L+E.join(L);
return this.__dj(G,C,D);
}}}if(D!=null){return this.__dj(D,C);
}return null;
}else if(typeof K===h){return this.__dj(K,C,D);
}else if(K.include&&!K.style){return this.__dj(K.include,C,D);
}return B;
},styleFrom:function(i,j,k,l){if(!k){k=this.getTheme();
}var r=this.__dh;
var m=r[i];

if(!m){m=r[i]=this.__dj(i,k,l);
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
}}var q=this.__dg;

if(q[x]!==undefined){return q[x];
}if(!j){j=this.__di;
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
}},destruct:function(){this.__dg=this.__dh=null;
}});
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
(function(){var x="focusout",w="interval",v="mouseover",u="mouseout",t="mousemove",s="widget",r="__dv",q="qx.ui.tooltip.ToolTip",p="Boolean",o="__dt",l="_applyCurrent",n="qx.ui.tooltip.Manager",m="tooltip-error",k="singleton",j="__ds";
qx.Class.define(n,{type:k,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,v,this.__dC,this,true);
this.__ds=new qx.event.Timer();
this.__ds.addListener(w,this.__dz,this);
this.__dt=new qx.event.Timer();
this.__dt.addListener(w,this.__dA,this);
this.__du={left:0,top:0};
},properties:{current:{check:q,nullable:true,apply:l},showInvalidTooltips:{check:p,init:true}},members:{__du:null,__dt:null,__ds:null,__dv:null,__dw:null,__dx:function(){if(!this.__dv){this.__dv=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__dv;
},__dy:function(){if(!this.__dw){this.__dw=new qx.ui.tooltip.ToolTip().set({appearance:m});
this.__dw.syncAppearance();
}return this.__dw;
},_applyCurrent:function(C,D){if(D&&qx.ui.core.Widget.contains(D,C)){return;
}if(D){if(!D.isDisposed()){D.exclude();
}this.__ds.stop();
this.__dt.stop();
}var F=qx.event.Registration;
var E=document.body;
if(C){this.__ds.startWith(C.getShowTimeout());
F.addListener(E,u,this.__dD,this,true);
F.addListener(E,x,this.__dE,this,true);
F.addListener(E,t,this.__dB,this,true);
}else{F.removeListener(E,u,this.__dD,this,true);
F.removeListener(E,x,this.__dE,this,true);
F.removeListener(E,t,this.__dB,this,true);
}},__dz:function(e){var a=this.getCurrent();

if(a&&!a.isDisposed()){this.__dt.startWith(a.getHideTimeout());

if(a.getPlaceMethod()==s){a.placeToWidget(a.getOpener());
}else{a.placeToPoint(this.__du);
}a.show();
}this.__ds.stop();
},__dA:function(e){var G=this.getCurrent();

if(G&&!G.isDisposed()){G.exclude();
}this.__dt.stop();
this.resetCurrent();
},__dB:function(e){var B=this.__du;
B.left=e.getDocumentLeft();
B.top=e.getDocumentTop();
},__dC:function(e){var g=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!g){return;
}var h;
while(g!=null){var h=g.getToolTip();
var i=g.getToolTipText()||null;
var f=g.getToolTipIcon()||null;

if(qx.Class.hasInterface(g.constructor,qx.ui.form.IForm)&&!g.isValid()){var d=g.getInvalidMessage();
}
if(h||i||f||d){break;
}g=g.getLayoutParent();
}
if(!g){return;
}
if(g.isBlockToolTip()){return;
}if(d&&g.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var h=this.__dy().set({label:d});
}else if(!h){var h=this.__dx().set({label:i,icon:f});
}this.setCurrent(h);
h.setOpener(g);
},__dD:function(e){var y=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!y){return;
}var z=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!z){return;
}var A=this.getCurrent();
if(A&&(z==A||qx.ui.core.Widget.contains(A,z))){return;
}if(z&&y&&qx.ui.core.Widget.contains(y,z)){return;
}if(A&&!z){this.setCurrent(null);
}else{this.resetCurrent();
}},__dE:function(e){var b=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!b){return;
}var c=this.getCurrent();
if(c&&c==b.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,v,this.__dC,this,true);
this._disposeObjects(j,o,r);
this.__du=null;
}});
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
(function(){var f="qx.ui.core.MChildrenHandling";
qx.Mixin.define(f,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(j){return this._indexOf(j);
},add:function(a,b){this._add(a,b);
},addAt:function(l,m,n){this._addAt(l,m,n);
},addBefore:function(g,h,i){this._addBefore(g,h,i);
},addAfter:function(c,d,e){this._addAfter(c,d,e);
},remove:function(o){this._remove(o);
},removeAt:function(k){return this._removeAt(k);
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
(function(){var l="Integer",k="_applyDimension",j="Boolean",i="_applyStretching",h="_applyMargin",g="shorthand",f="_applyAlign",e="allowShrinkY",d="bottom",c="baseline",z="marginBottom",y="qx.ui.core.LayoutItem",x="center",w="marginTop",v="allowGrowX",u="middle",t="marginLeft",s="allowShrinkX",r="top",q="right",o="marginRight",p="abstract",m="allowGrowY",n="left";
qx.Class.define(y,{type:p,extend:qx.core.Object,properties:{minWidth:{check:l,nullable:true,apply:k,init:null,themeable:true},width:{check:l,nullable:true,apply:k,init:null,themeable:true},maxWidth:{check:l,nullable:true,apply:k,init:null,themeable:true},minHeight:{check:l,nullable:true,apply:k,init:null,themeable:true},height:{check:l,nullable:true,apply:k,init:null,themeable:true},maxHeight:{check:l,nullable:true,apply:k,init:null,themeable:true},allowGrowX:{check:j,apply:i,init:true,themeable:true},allowShrinkX:{check:j,apply:i,init:true,themeable:true},allowGrowY:{check:j,apply:i,init:true,themeable:true},allowShrinkY:{check:j,apply:i,init:true,themeable:true},allowStretchX:{group:[v,s],mode:g,themeable:true},allowStretchY:{group:[m,e],mode:g,themeable:true},marginTop:{check:l,init:0,apply:h,themeable:true},marginRight:{check:l,init:0,apply:h,themeable:true},marginBottom:{check:l,init:0,apply:h,themeable:true},marginLeft:{check:l,init:0,apply:h,themeable:true},margin:{group:[w,o,z,t],mode:g,themeable:true},alignX:{check:[n,x,q],nullable:true,apply:f,themeable:true},alignY:{check:[r,u,d,c],nullable:true,apply:f,themeable:true}},members:{__dH:null,__dI:null,__dJ:null,__dK:null,__dL:null,__dM:null,__dN:null,getBounds:function(){return this.__dM||this.__dI||null;
},clearSeparators:function(){},renderSeparator:function(S,T){},renderLayout:function(W,top,X,Y){var ba;
{};
var bb=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var bb=this._getHeightForWidth(X);
}
if(bb!=null&&bb!==this.__dH){this.__dH=bb;
qx.ui.core.queue.Layout.add(this);
return null;
}var bd=this.__dI;

if(!bd){bd=this.__dI={};
}var bc={};

if(W!==bd.left||top!==bd.top){bc.position=true;
bd.left=W;
bd.top=top;
}
if(X!==bd.width||Y!==bd.height){bc.size=true;
bd.width=X;
bd.height=Y;
}if(this.__dJ){bc.local=true;
delete this.__dJ;
}
if(this.__dL){bc.margin=true;
delete this.__dL;
}return bc;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__dJ;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__dJ=true;
this.__dK=null;
},getSizeHint:function(U){var V=this.__dK;

if(V){return V;
}
if(U===false){return null;
}V=this.__dK=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__dH&&this.getHeight()==null){V.height=this.__dH;
}if(V.minWidth>V.width){V.width=V.minWidth;
}
if(V.maxWidth<V.width){V.width=V.maxWidth;
}
if(!this.getAllowGrowX()){V.maxWidth=V.width;
}
if(!this.getAllowShrinkX()){V.minWidth=V.width;
}if(V.minHeight>V.height){V.height=V.minHeight;
}
if(V.maxHeight<V.height){V.height=V.maxHeight;
}
if(!this.getAllowGrowY()){V.maxHeight=V.height;
}
if(!this.getAllowShrinkY()){V.minHeight=V.height;
}return V;
},_computeSizeHint:function(){var Q=this.getMinWidth()||0;
var N=this.getMinHeight()||0;
var R=this.getWidth()||Q;
var P=this.getHeight()||N;
var M=this.getMaxWidth()||Infinity;
var O=this.getMaxHeight()||Infinity;
return {minWidth:Q,width:R,maxWidth:M,minHeight:N,height:P,maxHeight:O};
},_hasHeightForWidth:function(){var F=this._getLayout();

if(F){return F.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(A){var B=this._getLayout();

if(B&&B.hasHeightForWidth()){return B.getHeightForWidth(A);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__dL=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__dM;
},setUserBounds:function(J,top,K,L){this.__dM={left:J,top:top,width:K,height:L};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__dM;
qx.ui.core.queue.Layout.add(this);
},__dO:{},setLayoutProperties:function(G){if(G==null){return;
}var H=this.__dN;

if(!H){H=this.__dN={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(G);
}for(var I in G){if(G[I]==null){delete H[I];
}else{H[I]=G[I];
}}},getLayoutProperties:function(){return this.__dN||this.__dO;
},clearLayoutProperties:function(){delete this.__dN;
},updateLayoutProperties:function(C){var D=this._getLayout();

if(D){var E;
{};
D.invalidateChildrenCache();
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
},clone:function(){var a=arguments.callee.base.call(this);
var b=this.__dN;

if(b){a.__dN=qx.lang.Object.clone(b);
}return a;
}},destruct:function(){this.$$parent=this.$$subparent=this.__dN=this.__dI=this.__dM=this.__dK=null;
}});
})();
(function(){var f="qx.ui.core.DecoratorFactory",e="$$nopool$$";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__dP={};
},statics:{MAX_SIZE:15,__dQ:e},members:{__dP:null,getDecoratorElement:function(l){var q=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(l)){var o=l;
var n=qx.theme.manager.Decoration.getInstance().resolve(l);
}else{var o=q.__dQ;
n=l;
}var p=this.__dP;

if(p[o]&&p[o].length>0){var m=p[o].pop();
}else{var m=this._createDecoratorElement(n,o);
}m.$$pooled=false;
return m;
},poolDecorator:function(a){if(!a||a.$$pooled){return;
}var d=qx.ui.core.DecoratorFactory;
var b=a.getId();

if(b==d.__dQ){a.dispose();
return;
}var c=this.__dP;

if(!c[b]){c[b]=[];
}
if(c[b].length>d.MAX_SIZE){a.dispose();
}else{a.$$pooled=true;
c[b].push(a);
}},_createDecoratorElement:function(i,j){var k=new qx.html.Decorator(i,j);
{};
return k;
},toString:function(){return arguments.callee.base.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var h=this.__dP;

for(var g in h){qx.util.DisposeUtil.disposeArray(h,g);
}}this.__dP=null;
}});
})();
(function(){var dB="px",dA="Boolean",dz="qx.event.type.Mouse",dy="qx.event.type.Drag",dx="visible",dw="qx.event.type.Focus",dv="on",du="Integer",dt="excluded",ds="qx.event.type.Data",dd="_applyPadding",dc="qx.event.type.Event",db="hidden",da="contextmenu",cY="String",cX="tabIndex",cW="backgroundColor",cV="focused",cU="changeVisibility",cT="mshtml",dI="hovered",dJ="qx.event.type.KeySequence",dG="qx.client",dH="absolute",dE="drag",dF="div",dC="disabled",dD="move",dK="dragstart",dL="qx.dynlocale",dk="dragchange",dj="dragend",dm="resize",dl="Decorator",dp="zIndex",dn="$$widget",dr="opacity",dq="default",di="Color",dh="changeToolTipText",bK="beforeContextmenuOpen",bL="_applyNativeContextMenu",bM="__ef",bN="_applyBackgroundColor",bO="_applyFocusable",bP="changeShadow",bQ="qx.event.type.KeyInput",bR="__dX",bS="createChildControl",bT="__eb",dP="Font",dO="_applyShadow",dN="_applyEnabled",dM="_applySelectable",dT="Number",dS="_applyKeepActive",dR="_applyVisibility",dQ="repeat",dV="qxDraggable",dU="__dR",ct="syncAppearance",cu="paddingLeft",cr="_applyDroppable",cs="#",cx="qx.event.type.MouseWheel",cy="_applyCursor",cv="_applyDraggable",cw="changeTextColor",cp="changeContextMenu",cq="__dS",cc="paddingTop",cb="changeSelectable",ce="hideFocus",cd="none",bX="outline",bW="_applyAppearance",ca="_applyOpacity",bY="url(",bV=")",bU="qx.ui.core.Widget",cD="_applyFont",cE="cursor",cF="qxDroppable",cG="changeZIndex",cz="changeEnabled",cA="changeFont",cB="_applyDecorator",cC="_applyZIndex",cH="_applyTextColor",cI="qx.ui.menu.Menu",cm="_applyToolTipText",cl="__ed",ck="true",cj="widget",ci="changeDecorator",ch="__dV",cg="_applyTabIndex",cf="changeAppearance",co="shorthand",cn="/",cJ="",cK="_applyContextMenu",cL="paddingBottom",cM="__dW",cN="changeNativeContextMenu",cO="qx.ui.tooltip.ToolTip",cP="qxKeepActive",cQ="_applyKeepFocus",cR="paddingRight",cS="changeBackgroundColor",dg="changeLocale",df="qxKeepFocus",de="qx/static/blank.gif";
qx.Class.define(bU,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__dR=this._createContainerElement();
this.__dS=this.__ee();
this.__dR.add(this.__dS);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:dc,disappear:dc,createChildControl:ds,resize:ds,move:ds,syncAppearance:ds,mousemove:dz,mouseover:dz,mouseout:dz,mousedown:dz,mouseup:dz,click:dz,dblclick:dz,contextmenu:dz,beforeContextmenuOpen:dz,mousewheel:cx,keyup:dJ,keydown:dJ,keypress:dJ,keyinput:bQ,focus:dw,blur:dw,focusin:dw,focusout:dw,activate:dw,deactivate:dw,capture:dc,losecapture:dc,drop:dy,dragleave:dy,dragover:dy,drag:dy,dragstart:dy,dragend:dy,dragchange:dy,droprequest:dy},properties:{paddingTop:{check:du,init:0,apply:dd,themeable:true},paddingRight:{check:du,init:0,apply:dd,themeable:true},paddingBottom:{check:du,init:0,apply:dd,themeable:true},paddingLeft:{check:du,init:0,apply:dd,themeable:true},padding:{group:[cc,cR,cL,cu],mode:co,themeable:true},zIndex:{nullable:true,init:null,apply:cC,event:cG,check:du,themeable:true},decorator:{nullable:true,init:null,apply:cB,event:ci,check:dl,themeable:true},shadow:{nullable:true,init:null,apply:dO,event:bP,check:dl,themeable:true},backgroundColor:{nullable:true,check:di,apply:bN,event:cS,themeable:true},textColor:{nullable:true,check:di,apply:cH,event:cw,themeable:true,inheritable:true},font:{nullable:true,apply:cD,check:dP,event:cA,themeable:true,inheritable:true,dispose:true},opacity:{check:dT,apply:ca,themeable:true,nullable:true,init:null},cursor:{check:cY,apply:cy,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:cO,nullable:true},toolTipText:{check:cY,nullable:true,event:dh,apply:cm},toolTipIcon:{check:cY,nullable:true,event:dh},blockToolTip:{check:dA,init:false},visibility:{check:[dx,db,dt],init:dx,apply:dR,event:cU},enabled:{init:true,check:dA,inheritable:true,apply:dN,event:cz},anonymous:{init:false,check:dA},tabIndex:{check:du,nullable:true,apply:cg},focusable:{check:dA,init:false,apply:bO},keepFocus:{check:dA,init:false,apply:cQ},keepActive:{check:dA,init:false,apply:dS},draggable:{check:dA,init:false,apply:cv},droppable:{check:dA,init:false,apply:cr},selectable:{check:dA,init:false,event:cb,apply:dM},contextMenu:{check:cI,apply:cK,nullable:true,event:cp},nativeContextMenu:{check:dA,init:false,themeable:true,event:cN,apply:bL},appearance:{check:cY,init:cj,apply:bW,event:cf}},statics:{DEBUG:false,getWidgetByElement:function(bj){while(bj){var bk=bj.$$widget;
if(bk!=null){return qx.core.ObjectRegistry.fromHashCode(bk);
}bj=bj.parentNode;
}return null;
},contains:function(parent,dW){while(dW){if(parent==dW){return true;
}dW=dW.getLayoutParent();
}return false;
},__dT:new qx.ui.core.DecoratorFactory(),__dU:new qx.ui.core.DecoratorFactory()},members:{__dR:null,__dS:null,__dV:null,__dW:null,__dX:null,__dY:null,__ea:null,__eb:null,_getLayout:function(){return this.__eb;
},_setLayout:function(gC){{};

if(this.__eb){this.__eb.connectToWidget(null);
}
if(gC){gC.connectToWidget(this);
}this.__eb=gC;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var fA=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(fA);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(fA);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__ec:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var M=qx.theme.manager.Decoration.getInstance();
var O=M.resolve(a).getInsets();
var N=M.resolve(b).getInsets();

if(O.top!=N.top||O.right!=N.right||O.bottom!=N.bottom||O.left!=N.left){return true;
}return false;
},renderLayout:function(g,top,h,j){var t=arguments.callee.base.call(this,g,top,h,j);
if(!t){return;
}var m=this.getContainerElement();
var content=this.getContentElement();
var q=t.size||this._updateInsets;
var u=dB;
var r={};
if(t.position){r.left=g+u;
r.top=top+u;
}if(t.size){r.width=h+u;
r.height=j+u;
}
if(t.position||t.size){m.setStyles(r);
}
if(q||t.local||t.margin){var k=this.getInsets();
var innerWidth=h-k.left-k.right;
var innerHeight=j-k.top-k.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var o={};

if(this._updateInsets){o.left=k.left+u;
o.top=k.top+u;
}
if(q){o.width=innerWidth+u;
o.height=innerHeight+u;
}
if(q||this._updateInsets){content.setStyles(o);
}
if(t.size){var s=this.__dX;

if(s){s.setStyles({width:h+dB,height:j+dB});
}}
if(t.size||this._updateInsets){if(this.__dV){this.__dV.resize(h,j);
}}
if(t.size){if(this.__dW){var k=this.__dW.getInsets();
var p=h+k.left+k.right;
var n=j+k.top+k.bottom;
this.__dW.resize(p,n);
}}
if(q||t.local||t.margin){if(this.__eb&&this.hasLayoutChildren()){this.__eb.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(t.position&&this.hasListener(dD)){this.fireDataEvent(dD,this.getBounds());
}
if(t.size&&this.hasListener(dm)){this.fireDataEvent(dm,this.getBounds());
}delete this._updateInsets;
return t;
},__ed:null,clearSeparators:function(){var fQ=this.__ed;

if(!fQ){return;
}var fR=qx.ui.core.Widget.__dT;
var content=this.getContentElement();
var fP;

for(var i=0,l=fQ.length;i<l;i++){fP=fQ[i];
fR.poolDecorator(fP);
content.remove(fP);
}fQ.length=0;
},renderSeparator:function(J,K){var L=qx.ui.core.Widget.__dT.getDecoratorElement(J);
this.getContentElement().add(L);
L.resize(K.width,K.height);
L.setStyles({left:K.left+dB,top:K.top+dB});
if(!this.__ed){this.__ed=[L];
}else{this.__ed.push(L);
}},_computeSizeHint:function(){var fd=this.getWidth();
var fc=this.getMinWidth();
var eX=this.getMaxWidth();
var fb=this.getHeight();
var eY=this.getMinHeight();
var fa=this.getMaxHeight();
{};
var fe=this._getContentHint();
var eW=this.getInsets();
var fg=eW.left+eW.right;
var ff=eW.top+eW.bottom;

if(fd==null){fd=fe.width+fg;
}
if(fb==null){fb=fe.height+ff;
}
if(fc==null){fc=fg;

if(fe.minWidth!=null){fc+=fe.minWidth;
}}
if(eY==null){eY=ff;

if(fe.minHeight!=null){eY+=fe.minHeight;
}}
if(eX==null){if(fe.maxWidth==null){eX=Infinity;
}else{eX=fe.maxWidth+fg;
}}
if(fa==null){if(fe.maxHeight==null){fa=Infinity;
}else{fa=fe.maxHeight+ff;
}}return {width:fd,minWidth:fc,maxWidth:eX,height:fb,minHeight:eY,maxHeight:fa};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__eb){this.__eb.invalidateLayoutCache();
}},_getContentHint:function(){var gA=this.__eb;

if(gA){if(this.hasLayoutChildren()){var gz;
var gB=gA.getSizeHint();
{};
return gB;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dX){var ec=this.getInsets();
var ef=ec.left+ec.right;
var ee=ec.top+ec.bottom;
var ed=dX-ef;
var ea=this._getLayout();

if(ea&&ea.hasHeightForWidth()){var dY=ea.getHeightForWidth(dX);
}else{dY=this._getContentHeightForWidth(ed);
}var eb=dY+ee;
return eb;
},_getContentHeightForWidth:function(by){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var fi=this.getPaddingRight();
var fk=this.getPaddingBottom();
var fj=this.getPaddingLeft();

if(this.__dV){var fh=this.__dV.getInsets();
{};
top+=fh.top;
fi+=fh.right;
fk+=fh.bottom;
fj+=fh.left;
}return {"top":top,"right":fi,"bottom":fk,"left":fj};
},getInnerSize:function(){var eP=this.getBounds();

if(!eP){return null;
}var eO=this.getInsets();
return {width:eP.width-eO.left-eO.right,height:eP.height-eO.top-eO.bottom};
},show:function(){this.setVisibility(dx);
},hide:function(){this.setVisibility(db);
},exclude:function(){this.setVisibility(dt);
},isVisible:function(){return this.getVisibility()===dx;
},isHidden:function(){return this.getVisibility()!==dx;
},isExcluded:function(){return this.getVisibility()===dt;
},isSeeable:function(){var gN=this.getContainerElement().getDomElement();

if(gN){return gN.offsetWidth>0;
}var gM=this;

do{if(!gM.isVisible()){return false;
}
if(gM.isRootWidget()){return true;
}gM=gM.getLayoutParent();
}while(gM);
return false;
},_createContainerElement:function(){var gv=new qx.html.Element(dF);
{};
gv.setStyles({"position":dH,"zIndex":0});
gv.setAttribute(dn,this.toHashCode());
{};
return gv;
},__ee:function(){var gw=this._createContentElement();
{};
gw.setStyles({"position":dH,"zIndex":10});
return gw;
},_createContentElement:function(){var fO=new qx.html.Element(dF);
fO.setStyles({"overflowX":db,"overflowY":db});
return fO;
},getContainerElement:function(){return this.__dR;
},getContentElement:function(){return this.__dS;
},getDecoratorElement:function(){return this.__dV||null;
},getShadowElement:function(){return this.__dW||null;
},__ef:null,getLayoutChildren:function(){var fw=this.__ef;

if(!fw){return this.__eg;
}var fx;

for(var i=0,l=fw.length;i<l;i++){var fv=fw[i];

if(fv.hasUserBounds()||fv.isExcluded()){if(fx==null){fx=fw.concat();
}qx.lang.Array.remove(fx,fv);
}}return fx||fw;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var gD=this.__eb;

if(gD){gD.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var bg=this.__ef;

if(!bg){return false;
}var bh;

for(var i=0,l=bg.length;i<l;i++){bh=bg[i];

if(!bh.hasUserBounds()&&!bh.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__eg:[],_getChildren:function(){return this.__ef||this.__eg;
},_indexOf:function(eg){var eh=this.__ef;

if(!eh){return -1;
}return eh.indexOf(eg);
},_hasChildren:function(){var I=this.__ef;
return I!=null&&(!!I[0]);
},addChildrenToQueue:function(gb){var gc=this.__ef;

if(!gc){return;
}var gd;

for(var i=0,l=gc.length;i<l;i++){gd=gc[i];
gb[gd.$$hash]=gd;
gd.addChildrenToQueue(gb);
}},_add:function(eD,eE){if(eD.getLayoutParent()==this){qx.lang.Array.remove(this.__ef,eD);
}
if(this.__ef){this.__ef.push(eD);
}else{this.__ef=[eD];
}this.__eh(eD,eE);
},_addAt:function(eH,eI,eJ){if(!this.__ef){this.__ef=[];
}if(eH.getLayoutParent()==this){qx.lang.Array.remove(this.__ef,eH);
}var eK=this.__ef[eI];

if(eK===eH){return eH.setLayoutProperties(eJ);
}
if(eK){qx.lang.Array.insertBefore(this.__ef,eH,eK);
}else{this.__ef.push(eH);
}this.__eh(eH,eJ);
},_addBefore:function(fX,fY,ga){{};

if(fX==fY){return;
}
if(!this.__ef){this.__ef=[];
}if(fX.getLayoutParent()==this){qx.lang.Array.remove(this.__ef,fX);
}qx.lang.Array.insertBefore(this.__ef,fX,fY);
this.__eh(fX,ga);
},_addAfter:function(ey,ez,eA){{};

if(ey==ez){return;
}
if(!this.__ef){this.__ef=[];
}if(ey.getLayoutParent()==this){qx.lang.Array.remove(this.__ef,ey);
}qx.lang.Array.insertAfter(this.__ef,ey,ez);
this.__eh(ey,eA);
},_remove:function(bi){if(!this.__ef){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__ef,bi);
this.__ei(bi);
},_removeAt:function(bw){if(!this.__ef){throw new Error("This widget has no children!");
}var bx=this.__ef[bw];
qx.lang.Array.removeAt(this.__ef,bw);
this.__ei(bx);
return bx;
},_removeAll:function(){if(!this.__ef){return;
}var gf=this.__ef.concat();
this.__ef.length=0;

for(var i=gf.length-1;i>=0;i--){this.__ei(gf[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__eh:function(gx,gy){{};
var parent=gx.getLayoutParent();

if(parent&&parent!=this){parent._remove(gx);
}gx.setLayoutParent(this);
if(gy){gx.setLayoutProperties(gy);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(gx);
}},__ei:function(ge){{};

if(ge.getLayoutParent()!==this){throw new Error("Remove Error: "+ge+" is not a child of this widget!");
}ge.setLayoutParent(null);
if(this.__eb){this.__eb.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(ge);
}},capture:function(fD){this.getContainerElement().capture(fD);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(bn,bo,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dX){return;
}var fK=this.__dX=new qx.html.Element;
{};
fK.setStyles({position:dH,top:0,left:0,zIndex:7});
var fL=this.getBounds();

if(fL){this.__dX.setStyles({width:fL.width+dB,height:fL.height+dB});
}if(qx.core.Variant.isSet(dG,cT)){fK.setStyles({backgroundImage:bY+qx.util.ResourceManager.getInstance().toUri(de)+bV,backgroundRepeat:dQ});
}this.getContainerElement().add(fK);
},_applyDecorator:function(gO,gP){{};
var gT=qx.ui.core.Widget.__dT;
var gR=this.getContainerElement();
if(!this.__dX&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(gP){gR.remove(this.__dV);
gT.poolDecorator(this.__dV);
}if(gO){var gS=this.__dV=gT.getDecoratorElement(gO);
gS.setStyle(dp,5);
var gQ=this.getBackgroundColor();
gS.tint(gQ);
gR.add(gS);
}else{delete this.__dV;
this._applyBackgroundColor(this.getBackgroundColor());
}if(gO&&!gP&&gQ){this.getContainerElement().setStyle(cW,null);
}if(this.__ec(gP,gO)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(gO){var gU=this.getBounds();

if(gU){gS.resize(gU.width,gU.height);
this.__dX&&
this.__dX.setStyles({width:gU.width+dB,height:gU.height+dB});
}}},_applyShadow:function(P,Q){var X=qx.ui.core.Widget.__dU;
var S=this.getContainerElement();
if(Q){S.remove(this.__dW);
X.poolDecorator(this.__dW);
}if(P){var U=this.__dW=X.getDecoratorElement(P);
S.add(U);
var W=U.getInsets();
U.setStyles({left:(-W.left)+dB,top:(-W.top)+dB});
var V=this.getBounds();

if(V){var T=V.width+W.left+W.right;
var R=V.height+W.top+W.bottom;
U.resize(T,R);
}U.tint(null);
}else{delete this.__dW;
}},_applyToolTipText:function(ei,ej){if(qx.core.Variant.isSet(dL,dv)){if(this.__ea){return;
}var ek=qx.locale.Manager.getInstance();
this.__ea=ek.addListener(dg,function(){if(ei&&ei.translate){this.setToolTipText(ei.translate());
}},this);
}},_applyTextColor:function(be,bf){},_applyZIndex:function(gs,gt){this.getContainerElement().setStyle(dp,gs==null?0:gs);
},_applyVisibility:function(gV,gW){var gX=this.getContainerElement();

if(gV===dx){gX.show();
}else{gX.hide();
}var parent=this.$$parent;

if(parent&&(gW==null||gV==null||gW===dt||gV===dt)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(bH,bI){this.getContainerElement().setStyle(dr,bH==1?null:bH);
if(qx.core.Variant.isSet(dG,cT)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var bJ=(bH==1||bH==null)?null:0.99;
this.getContentElement().setStyle(dr,bJ);
}}},_applyCursor:function(eL,eM){if(eL==null&&!this.isSelectable()){eL=dq;
}this.getContainerElement().setStyle(cE,eL,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(eR,eS){var eT=this.getBackgroundColor();
var eV=this.getContainerElement();

if(this.__dV){this.__dV.tint(eT);
eV.setStyle(cW,null);
}else{var eU=qx.theme.manager.Color.getInstance().resolve(eT);
eV.setStyle(cW,eU);
}},_applyFont:function(gK,gL){},__ej:null,$$stateChanges:null,_forwardStates:null,hasState:function(ev){var ew=this.__ej;
return ew&&ew[ev];
},addState:function(eq){var er=this.__ej;

if(!er){er=this.__ej={};
}
if(er[eq]){return;
}this.__ej[eq]=true;
if(eq===dI){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var eu=this.__em;

if(forward&&forward[eq]&&eu){var es;

for(var et in eu){es=eu[et];

if(es instanceof qx.ui.core.Widget){eu[et].addState(eq);
}}}},removeState:function(Y){var ba=this.__ej;

if(!ba||!ba[Y]){return;
}delete this.__ej[Y];
if(Y===dI){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bd=this.__em;

if(forward&&forward[Y]&&bd){for(var bc in bd){var bb=bd[bc];

if(bb instanceof qx.ui.core.Widget){bb.removeState(Y);
}}}},replaceState:function(fp,fq){var fr=this.__ej;

if(!fr){fr=this.__ej={};
}
if(!fr[fq]){fr[fq]=true;
}
if(fr[fp]){delete fr[fp];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fu=this.__em;

if(forward&&forward[fq]&&fu){for(var ft in fu){var fs=fu[ft];

if(fs instanceof qx.ui.core.Widget){fs.replaceState(fp,fq);
}}}},__ek:null,__el:null,syncAppearance:function(){var gm=this.__ej;
var gl=this.__ek;
var gn=qx.theme.manager.Appearance.getInstance();
var gj=qx.core.Property.$$method.setThemed;
var gr=qx.core.Property.$$method.resetThemed;
if(this.__el){delete this.__el;
if(gl){var gi=gn.styleFrom(gl,gm,null,this.getAppearance());
if(gi){gl=null;
}}}if(!gl){var gk=this;
var gq=[];

do{gq.push(gk.$$subcontrol||gk.getAppearance());
}while(gk=gk.$$subparent);
gl=this.__ek=gq.reverse().join(cn).replace(/#[0-9]+/g,cJ);
}var go=gn.styleFrom(gl,gm,null,this.getAppearance());

if(go){var gp;

if(gi){for(var gp in gi){if(go[gp]===undefined){this[gr[gp]]();
}}}{};
for(var gp in go){go[gp]===undefined?this[gr[gp]]():this[gj[gp]](go[gp]);
}}else if(gi){for(var gp in gi){this[gr[gp]]();
}}this.fireDataEvent(ct,this.__ej);
},_applyAppearance:function(fE,fF){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dY){qx.ui.core.queue.Appearance.add(this);
this.__dY=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__el=true;
qx.ui.core.queue.Appearance.add(this);
var H=this.__em;

if(H){var F;

for(var G in H){F=H[G];

if(F instanceof qx.ui.core.Widget){F.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var gu=this;

while(gu.getAnonymous()){gu=gu.getLayoutParent();

if(!gu){return null;
}}return gu;
},getFocusTarget:function(){var bz=this;

if(!bz.getEnabled()){return null;
}
while(bz.getAnonymous()||!bz.getFocusable()){bz=bz.getLayoutParent();

if(!bz||!bz.getEnabled()){return null;
}}return bz;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(bs,bt){var bu=this.getFocusElement();
if(bs){var bv=this.getTabIndex();

if(bv==null){bv=1;
}bu.setAttribute(cX,bv);
if(qx.core.Variant.isSet(dG,cT)){bu.setAttribute(ce,ck);
}else{bu.setStyle(bX,cd);
}}else{if(bu.isNativelyFocusable()){bu.setAttribute(cX,-1);
}else if(bt){bu.setAttribute(cX,null);
}}},_applyKeepFocus:function(bA){var bB=this.getFocusElement();
bB.setAttribute(df,bA?dv:null);
},_applyKeepActive:function(fV){var fW=this.getContainerElement();
fW.setAttribute(cP,fV?dv:null);
},_applyTabIndex:function(eN){if(eN==null){eN=1;
}else if(eN<1||eN>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&eN!=null){this.getFocusElement().setAttribute(cX,eN);
}},_applySelectable:function(ex){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(ex);
this.getContentElement().setSelectable(ex);
},_applyEnabled:function(fB,fC){if(fB===false){this.addState(dC);
this.removeState(dI);
if(this.isFocusable()){this.removeState(cV);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(dC);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(v,w,name){},_applyContextMenu:function(fn,fo){if(fo){fo.removeState(da);

if(fo.getOpener()==this){fo.resetOpener();
}
if(!fn){this.removeListener(da,this._onContextMenuOpen);
fo.removeListener(cU,this._onBeforeContextMenuOpen,this);
}}
if(fn){fn.setOpener(this);
fn.addState(da);

if(!fo){this.addListener(da,this._onContextMenuOpen);
fn.addListener(cU,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==dx&&this.hasListener(bK)){this.fireDataEvent(bK,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(eB,eC){if(!this.isEnabled()&&eB===true){eB=false;
}qx.ui.core.DragDropCursor.getInstance();
if(eB){this.addListener(dK,this._onDragStart);
this.addListener(dE,this._onDrag);
this.addListener(dj,this._onDragEnd);
this.addListener(dk,this._onDragChange);
}else{this.removeListener(dK,this._onDragStart);
this.removeListener(dE,this._onDrag);
this.removeListener(dj,this._onDragEnd);
this.removeListener(dk,this._onDragChange);
}this.getContainerElement().setAttribute(dV,eB?dv:null);
},_applyDroppable:function(bl,bm){if(!this.isEnabled()&&bl===true){bl=false;
}this.getContainerElement().setAttribute(cF,bl?dv:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(dq);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var fI=qx.ui.core.DragDropCursor.getInstance();
var fJ=e.getCurrentAction();
fJ?fI.setAction(fJ):fI.resetAction();
},visualizeFocus:function(){this.addState(cV);
},visualizeBlur:function(){this.removeState(cV);
},scrollChildIntoView:function(em,en,eo,ep){this.scrollChildIntoViewX(em,en,ep);
this.scrollChildIntoViewY(em,eo,ep);
},scrollChildIntoViewX:function(bE,bF,bG){this.getContentElement().scrollChildIntoViewX(bE.getContainerElement(),bF,bG);
},scrollChildIntoViewY:function(fS,fT,fU){this.getContentElement().scrollChildIntoViewY(fS.getContainerElement(),fT,fU);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(E){if(!this.__em){return false;
}return !!this.__em[E];
},__em:null,_getCreatedChildControls:function(){return this.__em;
},getChildControl:function(c,d){if(!this.__em){if(d){return null;
}this.__em={};
}var f=this.__em[c];

if(f){return f;
}
if(d===true){return null;
}return this._createChildControl(c);
},_showChildControl:function(gE){var gF=this.getChildControl(gE);
gF.show();
return gF;
},_excludeChildControl:function(gg){var gh=this.getChildControl(gg,true);

if(gh){gh.exclude();
}},_isChildControlVisible:function(fG){var fH=this.getChildControl(fG,true);

if(fH){return fH.isVisible();
}return false;
},_createChildControl:function(z){if(!this.__em){this.__em={};
}else if(this.__em[z]){throw new Error("Child control '"+z+"' already created!");
}var D=z.indexOf(cs);

if(D==-1){var A=this._createChildControlImpl(z);
}else{var A=this._createChildControlImpl(z.substring(0,D));
}
if(!A){throw new Error("Unsupported control: "+z);
}A.$$subcontrol=z;
A.$$subparent=this;
var B=this.__ej;
var forward=this._forwardStates;

if(B&&forward&&A instanceof qx.ui.core.Widget){for(var C in B){if(forward[C]){A.addState(C);
}}}this.fireDataEvent(bS,A);
return this.__em[z]=A;
},_createChildControlImpl:function(eQ){return null;
},_disposeChildControls:function(){var gJ=this.__em;

if(!gJ){return;
}var gH=qx.ui.core.Widget;

for(var gI in gJ){var gG=gJ[gI];

if(!gH.contains(this,gG)){gG.destroy();
}else{gG.dispose();
}}delete this.__em;
},_findTopControl:function(){var br=this;

while(br){if(!br.$$subparent){return br;
}br=br.$$subparent;
}return null;
},getContainerLocation:function(fM){var fN=this.getContainerElement().getDomElement();
return fN?qx.bom.element.Location.get(fN,fM):null;
},getContentLocation:function(eF){var eG=this.getContentElement().getDomElement();
return eG?qx.bom.element.Location.get(eG,eF):null;
},setDomLeft:function(fy){var fz=this.getContainerElement().getDomElement();

if(fz){fz.style.left=fy+dB;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(bp){var bq=this.getContainerElement().getDomElement();

if(bq){bq.style.top=bp+dB;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(x,top){var y=this.getContainerElement().getDomElement();

if(y){y.style.left=x+dB;
y.style.top=top+dB;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var bC=arguments.callee.base.call(this);

if(this.getChildren){var bD=this.getChildren();

for(var i=0,l=bD.length;i<l;i++){bC.add(bD[i].clone());
}}return bC;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(dL,dv)){if(this.__ea){qx.locale.Manager.getInstance().removeListenerById(this.__ea);
}}this.getContainerElement().setAttribute(dn,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var fm=qx.ui.core.Widget;
var fl=this.getContainerElement();

if(this.__dV){fl.remove(this.__dV);
fm.__dT.poolDecorator(this.__dV);
}
if(this.__dW){fl.remove(this.__dW);
fm.__dU.poolDecorator(this.__dW);
}this.clearSeparators();
this.__dV=this.__dW=this.__ed=null;
}else{this._disposeArray(cl);
this._disposeObjects(ch,cM);
}this._disposeArray(bM);
this.__ej=this.__em=null;
this._disposeObjects(bT,dU,cq,bR);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(g){arguments.callee.base.call(this);

if(g!=null){this._setLayout(g);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(i){this.fireNonBubblingEvent(b,qx.event.type.Data,[i]);
},_afterRemoveChild:function(h){this.fireNonBubblingEvent(a,qx.event.type.Data,[h]);
}},defer:function(e,f){qx.ui.core.MChildrenHandling.remap(f);
qx.ui.core.MLayoutHandling.remap(f);
}});
})();
(function(){var t="keep-align",s="interval",r="Integer",q="direct",p="best-fit",o="mouse",n="bottom-left",m="disappear",l="Boolean",k="bottom-right",H="widget",G="qx.ui.core.MPlacement",F="left-top",E="offsetRight",D="shorthand",C="offsetLeft",B="top-left",A="appear",z="offsetBottom",y="top-right",w="offsetTop",x="right-bottom",u="right-top",v="left-bottom";
qx.Mixin.define(G,{properties:{position:{check:[B,y,n,k,F,v,u,x],init:n,themeable:true},placeMethod:{check:[H,o],init:o,themeable:true},domMove:{check:l,init:false},placementModeX:{check:[q,t,p],init:t,themeable:true},placementModeY:{check:[q,t,p],init:t,themeable:true},offsetLeft:{check:r,init:0,themeable:true},offsetTop:{check:r,init:0,themeable:true},offsetRight:{check:r,init:0,themeable:true},offsetBottom:{check:r,init:0,themeable:true},offset:{group:[w,E,z,C],mode:D,themeable:true}},members:{__en:null,getLayoutLocation:function(e){var h,g,i,top;
g=e.getBounds();
i=g.left;
top=g.top;
var j=g;
e=e.getLayoutParent();

while(e&&!e.isRootWidget()){g=e.getBounds();
i+=g.left;
top+=g.top;
h=e.getInsets();
i+=h.left;
top+=h.top;
e=e.getLayoutParent();
}if(e.isRootWidget()){var f=e.getContainerLocation();

if(f){i+=f.left;
top+=f.top;
}}return {left:i,top:top,right:i+j.width,bottom:top+j.height};
},moveTo:function(X,top){if(this.getDomMove()){this.setDomPosition(X,top);
}else{this.setLayoutProperties({left:X,top:top});
}},placeToWidget:function(K,L){if(L){this.__en=qx.lang.Function.bind(this.placeToWidget,this,K,false);
qx.event.Idle.getInstance().addListener(s,this.__en);
this.addListener(m,function(){if(this.__en){qx.event.Idle.getInstance().removeListener(s,this.__en);
this.__en=null;
}},this);
}var M=K.getContainerLocation()||this.getLayoutLocation(K);
this.__ep(M);
},placeToMouse:function(event){var J=event.getDocumentLeft();
var top=event.getDocumentTop();
var I={left:J,top:top,right:J,bottom:top};
this.__ep(I);
},placeToElement:function(N,O){var location=qx.bom.element.Location.get(N);
var P={left:location.left,top:location.top,right:location.left+N.offsetWidth,bottom:location.top+N.offsetHeight};
if(O){this.__en=qx.lang.Function.bind(this.placeToElement,this,N,false);
qx.event.Idle.getInstance().addListener(s,this.__en);
this.addListener(m,function(){if(this.__en){qx.event.Idle.getInstance().removeListener(s,this.__en);
this.__en=null;
}},this);
}this.__ep(P);
},placeToPoint:function(c){var d={left:c.left,top:c.top,right:c.left,bottom:c.top};
this.__ep(d);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__eo:function(S){var T=null;

if(this._computePlacementSize){var T=this._computePlacementSize();
}else if(this.isVisible()){var T=this.getBounds();
}
if(T==null){this.addListenerOnce(A,function(){this.__eo(S);
},this);
}else{S.call(this,T);
}},__ep:function(W){this.__eo(function(a){var b=qx.util.placement.Placement.compute(a,this.getLayoutParent().getBounds(),W,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(b.left,b.top);
});
},setSmart:function(Q){{};
var R=Q?t:q;
this.set({placementModeX:R,placementModeY:R});
},getSmart:function(){{};
var U=this.getPlacementModeX()==t?true:false;
var V=this.getPlacementModeY()==t?true:false;
return U&&V;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__en){qx.event.Idle.getInstance().removeListener(s,this.__en);
}}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){arguments.callee.base.call(this,f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(g,h){arguments.callee.base.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var r="atom",q="Integer",p="String",o="_applyRich",n="qx.ui.tooltip.ToolTip",m="_applyIcon",l="tooltip",k="qx.ui.core.Widget",j="mouseover",i="Boolean",h="_applyLabel";
qx.Class.define(n,{extend:qx.ui.popup.Popup,construct:function(u,v){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(r);
if(u!=null){this.setLabel(u);
}
if(v!=null){this.setIcon(v);
}this.addListener(j,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:l},showTimeout:{check:q,init:700,themeable:true},hideTimeout:{check:q,init:4000,themeable:true},label:{check:p,nullable:true,apply:h},icon:{check:p,nullable:true,apply:m,themeable:true},rich:{check:i,init:false,apply:o},opener:{check:k,nullable:true}},members:{_createChildControlImpl:function(s){var t;

switch(s){case r:t=new qx.ui.basic.Atom;
this._add(t);
break;
}return t||arguments.callee.base.call(this,s);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(w,x){var y=this.getChildControl(r);
w==null?y.resetIcon:y.setIcon(w);
},_applyLabel:function(a,b){var c=this.getChildControl(r);
a==null?c.resetLabel():c.setLabel(a);
},_applyRich:function(d,f){var g=this.getChildControl(r);
g.setRich(d);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__eq:{},remove:function(q){delete this.__eq[q.$$hash];
},add:function(c){this.__eq[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var m=this.__et();
for(var i=m.length-1;i>=0;i--){var n=m[i];
if(n.hasValidLayout()){continue;
}if(n.isRootWidget()&&!n.hasUserBounds()){var p=n.getSizeHint();
n.renderLayout(0,0,p.width,p.height);
}else{var o=n.getBounds();
n.renderLayout(o.left,o.top,o.width,o.height);
}}},getNestingLevel:function(x){var y=this.__es;
var A=0;
var parent=x;
while(true){if(y[parent.$$hash]!=null){A+=y[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
A+=1;
}var z=A;

while(x&&x!==parent){y[x.$$hash]=z--;
x=x.$$parent;
}return A;
},__er:function(){var w=qx.ui.core.queue.Visibility;
this.__es={};
var v=[];
var u=this.__eq;
var r,t;

for(var s in u){r=u[s];

if(w.isVisible(r)){t=this.getNestingLevel(r);
if(!v[t]){v[t]={};
}v[t][s]=r;
delete u[s];
}}return v;
},__et:function(){var g=[];
var j=this.__er();

for(var f=j.length-1;f>=0;f--){if(!j[f]){continue;
}
for(var e in j[f]){var d=j[f][e];
if(f==0||d.isRootWidget()||d.hasUserBounds()){g.push(d);
d.invalidateLayoutCache();
continue;
}var l=d.getSizeHint(false);

if(l){d.invalidateLayoutCache();
var h=d.getSizeHint();
var k=(!d.getBounds()||l.minWidth!==h.minWidth||l.width!==h.width||l.maxWidth!==h.maxWidth||l.minHeight!==h.minHeight||l.height!==h.height||l.maxHeight!==h.maxHeight);
}else{k=true;
}
if(k){var parent=d.getLayoutParent();

if(!j[f-1]){j[f-1]={};
}j[f-1][parent.$$hash]=parent;
}else{g.push(d);
}}}return g;
}}});
})();
(function(){var d="qx.event.handler.UserAction";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){arguments.callee.base.call(this);
this.__eu=k;
this.__ev=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eu:null,__ev:null,canHandleEvent:function(f,g){},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){}},destruct:function(){this.__eu=this.__ev=null;
},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var f="qx.util.DeferredCallManager",e="singleton";
qx.Class.define(f,{extend:qx.core.Object,type:e,construct:function(){this.__ew={};
this.__ex=qx.lang.Function.bind(this.__eB,this);
this.__ey=false;
},members:{__ez:null,__eA:null,__ew:null,__ey:null,__ex:null,schedule:function(a){if(this.__ez==null){this.__ez=window.setTimeout(this.__ex,0);
}var b=a.toHashCode();
if(this.__eA&&this.__eA[b]){return;
}this.__ew[b]=a;
this.__ey=true;
},cancel:function(c){var d=c.toHashCode();
if(this.__eA&&this.__eA[d]){this.__eA[d]=null;
return;
}delete this.__ew[d];
if(qx.lang.Object.isEmpty(this.__ew)&&this.__ez!=null){window.clearTimeout(this.__ez);
this.__ez=null;
}},__eB:qx.event.GlobalError.observeMethod(function(){this.__ez=null;
while(this.__ey){this.__eA=qx.lang.Object.clone(this.__ew);
this.__ew={};
this.__ey=false;

for(var h in this.__eA){var g=this.__eA[h];

if(g){this.__eA[h]=null;
g.call();
}}}this.__eA=null;
})},destruct:function(){if(this.__ez!=null){window.clearTimeout(this.__ez);
}this.__ex=this.__ew=null;
}});
})();
(function(){var c="qx.util.DeferredCall";
qx.Class.define(c,{extend:qx.core.Object,construct:function(d,e){arguments.callee.base.call(this);
this.__eC=d;
this.__eD=e||null;
this.__eE=qx.util.DeferredCallManager.getInstance();
},members:{__eC:null,__eD:null,__eE:null,cancel:function(){this.__eE.cancel(this);
},schedule:function(){this.__eE.schedule(this);
},call:function(){this.__eD?this.__eC.apply(this.__eD):this.__eC();
}},destruct:function(a,b){this.cancel();
this.__eD=this.__eC=this.__eE=null;
}});
})();
(function(){var bz="element",by="qx.client",bx="div",bw="",bv="mshtml",bu="none",bt="scroll",bs="text",br="qx.html.Element",bq="|capture|",bT="focus",bS="gecko",bR="blur",bQ="deactivate",bP="capture",bO="userSelect",bN="-moz-none",bM="visible",bL="releaseCapture",bK="|bubble|",bG="__fc",bH="qxSelectable",bE="tabIndex",bF="off",bC="activate",bD="MozUserSelect",bA="normal",bB="webkit",bI="hidden",bJ="on";
qx.Class.define(br,{extend:qx.core.Object,construct:function(G){arguments.callee.base.call(this);
this.__eF=G||bx;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__eG:{},_scheduleFlush:function(cS){qx.html.Element.__fo.schedule();
},flush:function(){var cJ;
{};
var cB=this.__eH();
var cA=cB.getFocus();

if(cA&&this.__eL(cA)){cB.blur(cA);
}var cQ=cB.getActive();

if(cQ&&this.__eL(cQ)){qx.bom.Element.deactivate(cQ);
}var cE=this.__eJ();

if(cE&&this.__eL(cE)){qx.bom.Element.releaseCapture(cE);
}var cK=[];
var cL=this._modified;

for(var cI in cL){cJ=cL[cI];
if(cJ.__fg()){if(cJ.__eM&&qx.dom.Hierarchy.isRendered(cJ.__eM)){cK.push(cJ);
}else{{};
cJ.__ff();
}delete cL[cI];
}}
for(var i=0,l=cK.length;i<l;i++){cJ=cK[i];
{};
cJ.__ff();
}var cG=this._visibility;

for(var cI in cG){cJ=cG[cI];
{};
cJ.__eM.style.display=cJ.__eP?bw:bu;
if(qx.core.Variant.isSet(by,bv)){if(!(document.documentMode>=8)){cJ.__eM.style.visibility=cJ.__eP?bM:bI;
}}delete cG[cI];
}var scroll=this._scroll;

for(var cI in scroll){cJ=scroll[cI];
var cR=cJ.__eM;

if(cR&&cR.offsetWidth){var cD=true;
if(cJ.__eS!=null){cJ.__eM.scrollLeft=cJ.__eS;
delete cJ.__eS;
}if(cJ.__eT!=null){cJ.__eM.scrollTop=cJ.__eT;
delete cJ.__eT;
}var cN=cJ.__eQ;

if(cN!=null){var cH=cN.element.getDomElement();

if(cH&&cH.offsetWidth){qx.bom.element.Scroll.intoViewX(cH,cR,cN.align);
delete cJ.__eQ;
}else{cD=false;
}}var cO=cJ.__eR;

if(cO!=null){var cH=cO.element.getDomElement();

if(cH&&cH.offsetWidth){qx.bom.element.Scroll.intoViewY(cH,cR,cO.align);
delete cJ.__eR;
}else{cD=false;
}}if(cD){delete scroll[cI];
}}}var cC={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var cP=this._actions[i];
var cM=cP.element.__eM;

if(!cM||!cC[cP.type]&&!cP.element.__fg()){continue;
}var cF=cP.args;
cF.unshift(cM);
qx.bom.Element[cP.type].apply(qx.bom.Element,cF);
}this._actions=[];
for(var cI in this.__eG){var cz=this.__eG[cI];
var cR=cz.element.__eM;

if(cR){qx.bom.Selection.set(cR,cz.start,cz.end);
delete this.__eG[cI];
}}qx.event.handler.Appear.refresh();
},__eH:function(){if(!this.__eI){var dV=qx.event.Registration.getManager(window);
this.__eI=dV.getHandler(qx.event.handler.Focus);
}return this.__eI;
},__eJ:function(){if(!this.__eK){var dm=qx.event.Registration.getManager(window);
this.__eK=dm.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__eK.getCaptureElement();
},__eL:function(o){var p=qx.core.ObjectRegistry.fromHashCode(o.$$element);
return p&&!p.__fg();
}},members:{__eF:null,__eM:null,__eN:false,__eO:true,__eP:true,__eQ:null,__eR:null,__eS:null,__eT:null,__eU:null,__eV:null,__eW:null,__eX:null,__eY:null,__fa:null,__fb:null,__fc:null,__fd:null,__fe:null,_scheduleChildrenUpdate:function(){if(this.__fd){return;
}this.__fd=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bz);
},_createDomElement:function(){return qx.bom.Element.create(this.__eF);
},__ff:function(){{};
var B=this.__fc;

if(B){var length=B.length;
var C;

for(var i=0;i<length;i++){C=B[i];

if(C.__eP&&C.__eO&&!C.__eM){C.__ff();
}}}
if(!this.__eM){this.__eM=this._createDomElement();
this.__eM.$$element=this.$$hash;
this._copyData(false);

if(B&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__fd){this._syncChildren();
}}delete this.__fd;
},_insertChildren:function(){var I=this.__fc;
var length=I.length;
var K;

if(length>2){var J=document.createDocumentFragment();

for(var i=0;i<length;i++){K=I[i];

if(K.__eM&&K.__eO){J.appendChild(K.__eM);
}}this.__eM.appendChild(J);
}else{var J=this.__eM;

for(var i=0;i<length;i++){K=I[i];

if(K.__eM&&K.__eO){J.appendChild(K.__eM);
}}}},_syncChildren:function(){var cb;
var cg=qx.core.ObjectRegistry;
var bW=this.__fc;
var ce=bW.length;
var bX;
var cc;
var ca=this.__eM;
var cd=ca.childNodes;
var bY=0;
var cf;
{};
for(var i=cd.length-1;i>=0;i--){cf=cd[i];
cc=cg.fromHashCode(cf.$$element);

if(!cc||!cc.__eO||cc.__fe!==this){ca.removeChild(cf);
{};
}}for(var i=0;i<ce;i++){bX=bW[i];
if(bX.__eO){cc=bX.__eM;
cf=cd[bY];

if(!cc){continue;
}if(cc!=cf){if(cf){ca.insertBefore(cc,cf);
}else{ca.appendChild(cc);
}{};
}bY++;
}}{};
},_copyData:function(t){var z=this.__eM;
var w=this.__eY;

if(w){var u=qx.bom.element.Attribute;

for(var A in w){u.set(z,A,w[A]);
}}var w=this.__eX;

if(w){var v=qx.bom.element.Style;

if(t){v.setStyles(z,w);
}else{v.setCss(z,v.compile(w));
}}var w=this.__fa;

if(w){for(var A in w){this._applyProperty(A,w[A]);
}}var w=this.__fb;

if(w){qx.event.Registration.getManager(z).importListeners(z,w);
delete this.__fb;
}},_syncData:function(){var h=this.__eM;
var g=qx.bom.element.Attribute;
var d=qx.bom.element.Style;
var f=this.__eV;

if(f){var m=this.__eY;

if(m){var j;

for(var k in f){j=m[k];

if(j!==undefined){g.set(h,k,j);
}else{g.reset(h,k);
}}}this.__eV=null;
}var f=this.__eU;

if(f){var m=this.__eX;

if(m){var c={};

for(var k in f){c[k]=m[k];
}d.setStyles(h,c);
}this.__eU=null;
}var f=this.__eW;

if(f){var m=this.__fa;

if(m){var j;

for(var k in f){this._applyProperty(k,m[k]);
}}this.__eW=null;
}},__fg:function(){var dg=this;
while(dg){if(dg.__eN){return true;
}
if(!dg.__eO||!dg.__eP){return false;
}dg=dg.__fe;
}return false;
},__fh:function(dc){if(dc.__fe===this){throw new Error("Child is already in: "+dc);
}
if(dc.__eN){throw new Error("Root elements could not be inserted into other ones.");
}if(dc.__fe){dc.__fe.remove(dc);
}dc.__fe=this;
if(!this.__fc){this.__fc=[];
}if(this.__eM){this._scheduleChildrenUpdate();
}},__fi:function(U){if(U.__fe!==this){throw new Error("Has no child: "+U);
}if(this.__eM){this._scheduleChildrenUpdate();
}delete U.__fe;
},__fj:function(E){if(E.__fe!==this){throw new Error("Has no child: "+E);
}if(this.__eM){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__fc||null;
},getChild:function(dT){var dU=this.__fc;
return dU&&dU[dT]||null;
},hasChildren:function(){var dY=this.__fc;
return dY&&dY[0]!==undefined;
},indexOf:function(dO){var dP=this.__fc;
return dP?dP.indexOf(dO):-1;
},hasChild:function(cT){var cU=this.__fc;
return cU&&cU.indexOf(cT)!==-1;
},add:function(cv){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__fh(arguments[i]);
}this.__fc.push.apply(this.__fc,arguments);
}else{this.__fh(cv);
this.__fc.push(cv);
}return this;
},addAt:function(cX,cY){this.__fh(cX);
qx.lang.Array.insertAt(this.__fc,cX,cY);
return this;
},remove:function(bg){var bh=this.__fc;

if(!bh){return;
}
if(arguments[1]){var bi;

for(var i=0,l=arguments.length;i<l;i++){bi=arguments[i];
this.__fi(bi);
qx.lang.Array.remove(bh,bi);
}}else{this.__fi(bg);
qx.lang.Array.remove(bh,bg);
}return this;
},removeAt:function(cp){var cq=this.__fc;

if(!cq){throw new Error("Has no children!");
}var cr=cq[cp];

if(!cr){throw new Error("Has no child at this position!");
}this.__fi(cr);
qx.lang.Array.removeAt(this.__fc,cp);
return this;
},removeAll:function(){var dF=this.__fc;

if(dF){for(var i=0,l=dF.length;i<l;i++){this.__fi(dF[i]);
}dF.length=0;
}return this;
},getParent:function(){return this.__fe||null;
},insertInto:function(parent,V){parent.__fh(this);

if(V==null){parent.__fc.push(this);
}else{qx.lang.Array.insertAt(this.__fc,this,V);
}return this;
},insertBefore:function(da){var parent=da.__fe;
parent.__fh(this);
qx.lang.Array.insertBefore(parent.__fc,this,da);
return this;
},insertAfter:function(L){var parent=L.__fe;
parent.__fh(this);
qx.lang.Array.insertAfter(parent.__fc,this,L);
return this;
},moveTo:function(dp){var parent=this.__fe;
parent.__fj(this);
var dq=parent.__fc.indexOf(this);

if(dq===dp){throw new Error("Could not move to same index!");
}else if(dq<dp){dp--;
}qx.lang.Array.removeAt(parent.__fc,dq);
qx.lang.Array.insertAt(parent.__fc,this,dp);
return this;
},moveBefore:function(F){var parent=this.__fe;
return this.moveTo(parent.__fc.indexOf(F));
},moveAfter:function(s){var parent=this.__fe;
return this.moveTo(parent.__fc.indexOf(s)+1);
},free:function(){var parent=this.__fe;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__fc){return;
}parent.__fi(this);
qx.lang.Array.remove(parent.__fc,this);
return this;
},getDomElement:function(){return this.__eM||null;
},getNodeName:function(){return this.__eF;
},setNodeName:function(name){this.__eF=name;
},setRoot:function(n){this.__eN=n;
},useMarkup:function(cw){if(this.__eM){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(by,bv)){var cx=document.createElement(bx);
}else{var cx=qx.html.Element.__fk;

if(!cx){cx=qx.html.Element.__fk=document.createElement(bx);
}}cx.innerHTML=cw;
this.__eM=cx.firstChild;
this.__eM.$$element=this.$$hash;
this._copyData(true);
return this.__eM;
},useElement:function(cy){if(this.__eM){throw new Error("Could not overwrite existing element!");
}this.__eM=cy;
this.__eM.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var b=this.getAttribute(bE);

if(b>=1){return true;
}var a=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(b>=0&&a[this.__eF]){return true;
}return false;
},setSelectable:function(H){this.setAttribute(bH,H?bJ:bF);
if(qx.core.Variant.isSet(by,bB)){this.setStyle(bO,H?bA:bu);
}else if(qx.core.Variant.isSet(by,bS)){this.setStyle(bD,H?bs:bN);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__eF];
},include:function(){if(this.__eO){return;
}delete this.__eO;

if(this.__fe){this.__fe._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__eO){return;
}this.__eO=false;

if(this.__fe){this.__fe._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__eO===true;
},show:function(){if(this.__eP){return;
}
if(this.__eM){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bz);
}if(this.__fe){this.__fe._scheduleChildrenUpdate();
}delete this.__eP;
},hide:function(){if(!this.__eP){return;
}
if(this.__eM){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bz);
}this.__eP=false;
},isVisible:function(){return this.__eP===true;
},scrollChildIntoViewX:function(dx,dy,dz){var dA=this.__eM;
var dB=dx.getDomElement();

if(dz!==false&&dA&&dA.offsetWidth&&dB&&dB.offsetWidth){qx.bom.element.Scroll.intoViewX(dB,dA,dy);
}else{this.__eQ={element:dx,align:dy};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bz);
}delete this.__eS;
},scrollChildIntoViewY:function(ds,dt,du){var dv=this.__eM;
var dw=ds.getDomElement();

if(du!==false&&dv&&dv.offsetWidth&&dw&&dw.offsetWidth){qx.bom.element.Scroll.intoViewY(dw,dv,dt);
}else{this.__eR={element:ds,align:dt};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bz);
}delete this.__eT;
},scrollToX:function(x,cV){var cW=this.__eM;

if(cV!==true&&cW&&cW.offsetWidth){cW.scrollLeft=x;
}else{this.__eS=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bz);
}delete this.__eQ;
},getScrollX:function(){var dS=this.__eM;

if(dS){return dS.scrollLeft;
}return this.__eS||0;
},scrollToY:function(y,q){var r=this.__eM;

if(q!==true&&r&&r.offsetWidth){r.scrollTop=y;
}else{this.__eT=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bz);
}delete this.__eR;
},getScrollY:function(){var bp=this.__eM;

if(bp){return bp.scrollTop;
}return this.__eT||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(bt,this.__fm,this);
},enableScrolling:function(){this.removeListener(bt,this.__fm,this);
},__fl:null,__fm:function(e){if(!this.__fl){this.__fl=true;
this.__eM.scrollTop=0;
this.__eM.scrollLeft=0;
delete this.__fl;
}},getTextSelection:function(){var bU=this.__eM;

if(bU){return qx.bom.Selection.get(bU);
}return null;
},getTextSelectionLength:function(){var D=this.__eM;

if(D){return qx.bom.Selection.getLength(D);
}return null;
},getTextSelectionStart:function(){var dn=this.__eM;

if(dn){return qx.bom.Selection.getStart(dn);
}return null;
},getTextSelectionEnd:function(){var dX=this.__eM;

if(dX){return qx.bom.Selection.getEnd(dX);
}return null;
},setTextSelection:function(cm,cn){var co=this.__eM;

if(co){qx.bom.Selection.set(co,cm,cn);
return;
}qx.html.Element.__eG[this.toHashCode()]={element:this,start:cm,end:cn};
qx.html.Element._scheduleFlush(bz);
},clearTextSelection:function(){var be=this.__eM;

if(be){qx.bom.Selection.clear(be);
}delete qx.html.Element.__eG[this.toHashCode()];
},__fn:function(dG,dH){var dI=qx.html.Element._actions;
dI.push({type:dG,element:this,args:dH||[]});
qx.html.Element._scheduleFlush(bz);
},focus:function(){this.__fn(bT);
},blur:function(){this.__fn(bR);
},activate:function(){this.__fn(bC);
},deactivate:function(){this.__fn(bQ);
},capture:function(dr){this.__fn(bP,[dr!==false]);
},releaseCapture:function(){this.__fn(bL);
},setStyle:function(cs,ct,cu){if(!this.__eX){this.__eX={};
}
if(this.__eX[cs]==ct){return;
}
if(ct==null){delete this.__eX[cs];
}else{this.__eX[cs]=ct;
}if(this.__eM){if(cu){qx.bom.element.Style.set(this.__eM,cs,ct);
return this;
}if(!this.__eU){this.__eU={};
}this.__eU[cs]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bz);
}return this;
},setStyles:function(dJ,dK){var dL=qx.bom.element.Style;

if(!this.__eX){this.__eX={};
}
if(this.__eM){if(!this.__eU){this.__eU={};
}
for(var dN in dJ){var dM=dJ[dN];

if(this.__eX[dN]==dM){continue;
}
if(dM==null){delete this.__eX[dN];
}else{this.__eX[dN]=dM;
}if(dK){dL.set(this.__eM,dN,dM);
continue;
}this.__eU[dN]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bz);
}else{for(var dN in dJ){var dM=dJ[dN];

if(this.__eX[dN]==dM){continue;
}
if(dM==null){delete this.__eX[dN];
}else{this.__eX[dN]=dM;
}}}return this;
},removeStyle:function(dk,dl){this.setStyle(dk,null,dl);
},getStyle:function(dQ){return this.__eX?this.__eX[dQ]:null;
},getAllStyles:function(){return this.__eX||null;
},setAttribute:function(cj,ck,cl){if(!this.__eY){this.__eY={};
}
if(this.__eY[cj]==ck){return;
}
if(ck==null){delete this.__eY[cj];
}else{this.__eY[cj]=ck;
}if(this.__eM){if(cl){qx.bom.element.Attribute.set(this.__eM,cj,ck);
return this;
}if(!this.__eV){this.__eV={};
}this.__eV[cj]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bz);
}return this;
},setAttributes:function(dh,di){for(var dj in dh){this.setAttribute(dj,dh[dj],di);
}return this;
},removeAttribute:function(ch,ci){this.setAttribute(ch,null,ci);
},getAttribute:function(M){return this.__eY?this.__eY[M]:null;
},_applyProperty:function(name,bV){},_setProperty:function(dd,de,df){if(!this.__fa){this.__fa={};
}
if(this.__fa[dd]==de){return;
}
if(de==null){delete this.__fa[dd];
}else{this.__fa[dd]=de;
}if(this.__eM){if(df){this._applyProperty(dd,de);
return this;
}if(!this.__eW){this.__eW={};
}this.__eW[dd]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bz);
}return this;
},_removeProperty:function(N,O){this._setProperty(N,null,O);
},_getProperty:function(dC){var dD=this.__fa;

if(!dD){return null;
}var dE=dD[dC];
return dE==null?null:dE;
},addListener:function(bj,bk,self,bl){var bm;

if(this.$$disposed){return null;
}{};

if(this.__eM){return qx.event.Registration.addListener(this.__eM,bj,bk,self,bl);
}
if(!this.__fb){this.__fb={};
}
if(bl==null){bl=false;
}var bn=qx.event.Manager.getNextUniqueId();
var bo=bj+(bl?bq:bK)+bn;
this.__fb[bo]={type:bj,listener:bk,self:self,capture:bl,unique:bn};
return bo;
},removeListener:function(W,X,self,Y){var ba;

if(this.$$disposed){return null;
}{};

if(this.__eM){qx.event.Registration.removeListener(this.__eM,W,X,self,Y);
}else{var bc=this.__fb;
var bb;

if(Y==null){Y=false;
}
for(var bd in bc){bb=bc[bd];
if(bb.listener===X&&bb.self===self&&bb.capture===Y&&bb.type===W){delete bc[bd];
break;
}}}return this;
},removeListenerById:function(bf){if(this.$$disposed){return null;
}
if(this.__eM){qx.event.Registration.removeListenerById(this.__eM,bf);
}else{delete this.__fb[bf];
}return this;
},hasListener:function(P,Q){if(this.$$disposed){return false;
}
if(this.__eM){return qx.event.Registration.hasListener(this.__eM,P,Q);
}var S=this.__fb;
var R;

if(Q==null){Q=false;
}
for(var T in S){R=S[T];
if(R.capture===Q&&R.type===P){return true;
}}return false;
}},defer:function(dR){dR.__fo=new qx.util.DeferredCall(dR.flush,dR);
},destruct:function(){var dW=this.__eM;

if(dW){qx.event.Registration.getManager(dW).removeAllListeners(dW);
dW.$$element=bw;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__fe;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(bG);
this.__eY=this.__eX=this.__fb=this.__fa=this.__eV=this.__eU=this.__eW=this.__eM=this.__fe=this.__eQ=this.__eR=null;
}});
})();
(function(){var d="qx.ui.core.queue.Manager",c="useraction";
qx.Class.define(d,{statics:{__fp:false,__fq:{},__fr:0,MAX_RETRIES:10,scheduleFlush:function(h){var self=qx.ui.core.queue.Manager;
self.__fq[h]=true;

if(!self.__fp){self.__fu.schedule();
self.__fp=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__fs){return;
}self.__fs=true;
self.__fu.cancel();
var f=self.__fq;
self.__ft(function(){while(f.visibility||f.widget||f.appearance||f.layout||f.element){if(f.widget){delete f.widget;
qx.ui.core.queue.Widget.flush();
}
if(f.visibility){delete f.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(f.appearance){delete f.appearance;
qx.ui.core.queue.Appearance.flush();
}if(f.widget||f.visibility||f.appearance){continue;
}
if(f.layout){delete f.layout;
qx.ui.core.queue.Layout.flush();
}if(f.widget||f.visibility||f.appearance||f.layout){continue;
}
if(f.element){delete f.element;
qx.html.Element.flush();
}}},function(){self.__fp=false;
});
self.__ft(function(){if(f.dispose){delete f.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__fs=false;
});
self.__fr=0;
},__ft:function(a,b){var self=qx.ui.core.queue.Manager;

try{a();
}catch(e){{};
self.__fp=false;
self.__fs=false;
self.__fr+=1;

if(self.__fr<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__fr-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{b();
}}},defer:function(g){g.__fu=new qx.util.DeferredCall(g.flush);
qx.html.Element._scheduleFlush=g.scheduleFlush;
qx.event.Registration.addListener(window,c,g.flush);
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
(function(){var H="qx.client",G="character",F="EndToEnd",E="input",D="textarea",C="StartToStart",B='character',A="qx.bom.Selection",z="button",y="#text",x="body";
qx.Class.define(A,{statics:{getSelectionObject:qx.core.Variant.select(H,{"mshtml":function(b){return b.selection;
},"default":function(T){return qx.dom.Node.getWindow(T).getSelection();
}}),get:qx.core.Variant.select(H,{"mshtml":function(R){var S=qx.bom.Range.get(qx.dom.Node.getDocument(R));
return S.text;
},"default":function(bf){if(this.__hs(bf)){return bf.value.substring(bf.selectionStart,bf.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(bf)).toString();
}}}),getLength:qx.core.Variant.select(H,{"mshtml":function(f){var h=this.get(f);
var g=qx.util.StringSplit.split(h,/\r\n/);
return h.length-(g.length-1);
},"opera":function(bn){var bs,bq,bo;

if(this.__hs(bn)){var br=bn.selectionStart;
var bp=bn.selectionEnd;
bs=bn.value.substring(br,bp);
bq=bp-br;
}else{bs=qx.bom.Selection.get(bn);
bq=bs.length;
}bo=qx.util.StringSplit.split(bs,/\r\n/);
return bq-(bo.length-1);
},"default":function(by){if(this.__hs(by)){return by.selectionEnd-by.selectionStart;
}else{return this.get(by).length;
}}}),getStart:qx.core.Variant.select(H,{"mshtml":function(V){if(this.__hs(V)){var bb=qx.bom.Range.get();
if(!V.contains(bb.parentElement())){return -1;
}var bc=qx.bom.Range.get(V);
var ba=V.value.length;
bc.moveToBookmark(bb.getBookmark());
bc.moveEnd(B,ba);
return ba-bc.text.length;
}else{var bc=qx.bom.Range.get(V);
var X=bc.parentElement();
var bd=qx.bom.Range.get();
bd.moveToElementText(X);
var W=qx.bom.Range.get(qx.dom.Node.getBodyElement(V));
W.setEndPoint(C,bc);
W.setEndPoint(F,bd);
if(bd.compareEndPoints(C,W)==0){return 0;
}var Y;
var be=0;

while(true){Y=W.moveStart(G,-1);
if(bd.compareEndPoints(C,W)==0){break;
}if(Y==0){break;
}else{be++;
}}return ++be;
}},"gecko|webkit":function(c){if(this.__hs(c)){return c.selectionStart;
}else{var e=qx.dom.Node.getDocument(c);
var d=this.getSelectionObject(e);
if(d.anchorOffset<d.focusOffset){return d.anchorOffset;
}else{return d.focusOffset;
}}},"default":function(U){if(this.__hs(U)){return U.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(U)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(H,{"mshtml":function(I){if(this.__hs(I)){var N=qx.bom.Range.get();
if(!I.contains(N.parentElement())){return -1;
}var O=qx.bom.Range.get(I);
var M=I.value.length;
O.moveToBookmark(N.getBookmark());
O.moveStart(B,-M);
return O.text.length;
}else{var O=qx.bom.Range.get(I);
var K=O.parentElement();
var P=qx.bom.Range.get();
P.moveToElementText(K);
var M=P.text.length;
var J=qx.bom.Range.get(qx.dom.Node.getBodyElement(I));
J.setEndPoint(F,O);
J.setEndPoint(C,P);
if(P.compareEndPoints(F,J)==0){return M-1;
}var L;
var Q=0;

while(true){L=J.moveEnd(G,1);
if(P.compareEndPoints(F,J)==0){break;
}if(L==0){break;
}else{Q++;
}}return M-(++Q);
}},"gecko|webkit":function(u){if(this.__hs(u)){return u.selectionEnd;
}else{var w=qx.dom.Node.getDocument(u);
var v=this.getSelectionObject(w);
if(v.focusOffset>v.anchorOffset){return v.focusOffset;
}else{return v.anchorOffset;
}}},"default":function(a){if(this.__hs(a)){return a.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a)).focusOffset;
}}}),__hs:function(bm){return qx.dom.Node.isElement(bm)&&(bm.nodeName.toLowerCase()==E||bm.nodeName.toLowerCase()==D);
},set:qx.core.Variant.select(H,{"mshtml":function(bt,bu,bv){var bw;
if(qx.dom.Node.isDocument(bt)){bt=bt.body;
}
if(qx.dom.Node.isElement(bt)||qx.dom.Node.isText(bt)){switch(bt.nodeName.toLowerCase()){case E:case D:case z:if(bv===undefined){bv=bt.value.length;
}
if(bu>=0&&bu<=bt.value.length&&bv>=0&&bv<=bt.value.length){bw=qx.bom.Range.get(bt);
bw.collapse(true);
bw.moveStart(G,bu);
bw.moveEnd(G,bv-bu);
bw.select();
return true;
}break;
case y:if(bv===undefined){bv=bt.nodeValue.length;
}
if(bu>=0&&bu<=bt.nodeValue.length&&bv>=0&&bv<=bt.nodeValue.length){bw=qx.bom.Range.get(qx.dom.Node.getBodyElement(bt));
bw.moveToElementText(bt.parentNode);
bw.collapse(true);
bw.moveStart(G,bu);
bw.moveEnd(G,bv-bu);
bw.select();
return true;
}break;
default:if(bv===undefined){bv=bt.childNodes.length-1;
}if(bt.childNodes[bu]&&bt.childNodes[bv]){bw=qx.bom.Range.get(qx.dom.Node.getBodyElement(bt));
bw.moveToElementText(bt.childNodes[bu]);
bw.collapse(true);
var bx=qx.bom.Range.get(qx.dom.Node.getBodyElement(bt));
bx.moveToElementText(bt.childNodes[bv]);
bw.setEndPoint(F,bx);
bw.select();
return true;
}}}return false;
},"default":function(n,o,p){var t=n.nodeName.toLowerCase();

if(qx.dom.Node.isElement(n)&&(t==E||t==D)){if(p===undefined){p=n.value.length;
}if(o>=0&&o<=n.value.length&&p>=0&&p<=n.value.length){n.focus();
n.select();
n.setSelectionRange(o,p);
return true;
}}else{var r=false;
var s=qx.dom.Node.getWindow(n).getSelection();
var q=qx.bom.Range.get(n);
if(qx.dom.Node.isText(n)){if(p===undefined){p=n.length;
}
if(o>=0&&o<n.length&&p>=0&&p<=n.length){r=true;
}}else if(qx.dom.Node.isElement(n)){if(p===undefined){p=n.childNodes.length-1;
}
if(o>=0&&n.childNodes[o]&&p>=0&&n.childNodes[p]){r=true;
}}else if(qx.dom.Node.isDocument(n)){n=n.body;

if(p===undefined){p=n.childNodes.length-1;
}
if(o>=0&&n.childNodes[o]&&p>=0&&n.childNodes[p]){r=true;
}}
if(r){if(!s.isCollapsed){s.collapseToStart();
}q.setStart(n,o);
if(qx.dom.Node.isText(n)){q.setEnd(n,p);
}else{q.setEndAfter(n.childNodes[p]);
}if(s.rangeCount>0){s.removeAllRanges();
}s.addRange(q);
return true;
}}return false;
}}),setAll:function(i){return qx.bom.Selection.set(i,0);
},clear:qx.core.Variant.select(H,{"mshtml":function(j){var k=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(j));
var l=qx.bom.Range.get(j);
var parent=l.parentElement();
var m=qx.bom.Range.get(qx.dom.Node.getDocument(j));
if(parent==m.parentElement()&&parent==j){k.empty();
}},"default":function(bg){var bi=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bg));
var bk=bg.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bg)&&(bk==E||bk==D)){bg.setSelectionRange(0,0);
qx.bom.Element.blur(bg);
}else if(qx.dom.Node.isDocument(bg)||bk==x){bi.collapse(bg.body?bg.body:bg,0);
}else{var bj=qx.bom.Range.get(bg);

if(!bj.collapsed){var bl;
var bh=bj.commonAncestorContainer;
if(qx.dom.Node.isElement(bg)&&qx.dom.Node.isText(bh)){bl=bh.parentNode;
}else{bl=bh;
}
if(bl==bg){bi.collapse(bg,0);
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
(function(){var p="",o="g",n="$",m="qx.util.StringSplit",l="\\$&",k="^";
qx.Class.define(m,{statics:{split:function(a,b,c){var f=p;
if(b===undefined){return [a.toString()];
}else if(b===null||b.constructor!==RegExp){b=new RegExp(String(b).replace(/[.*+?^${}()|[\]\/\\]/g,l),o);
}else{f=b.toString().replace(/^[\S\s]+\//,p);

if(!b.global){b=new RegExp(b.source,o+f);
}}var e=new RegExp(k+b.source+n,f);
if(c===undefined||+c<0){c=false;
}else{c=Math.floor(+c);

if(!c){return [];
}}var h,g=[],d=0,i=0;

while((c?i++<=c:true)&&(h=b.exec(a))){if((h[0].length===0)&&(b.lastIndex>h.index)){b.lastIndex--;
}
if(b.lastIndex>d){if(h.length>1){h[0].replace(e,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined){h[j]=undefined;
}}});
}g=g.concat(a.substring(d,h.index),(h.index===a.length?[]:h.slice(1)));
d=b.lastIndex;
}
if(h[0].length===0){b.lastIndex++;
}}return (d===a.length)?(b.test(p)?g:g.concat(p)):(c?g:g.concat(a.substring(d)));
}}});
})();
(function(){var e="qx.ui.core.queue.Widget",d="widget";
qx.Class.define(e,{statics:{__ht:{},remove:function(h){delete this.__ht[h.$$hash];
},add:function(f){var g=this.__ht;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(d);
},flush:function(){var a=this.__ht;
var c;

for(var b in a){c=a[b];
delete a[b];
c.syncWidget();
}for(var b in a){return;
}this.__ht={};
}}});
})();
(function(){var i="qx.ui.core.queue.Visibility",h="visibility";
qx.Class.define(i,{statics:{__hu:{},__hv:{},remove:function(j){var k=j.$$hash;
delete this.__hv[k];
delete this.__hu[k];
},isVisible:function(l){return this.__hv[l.$$hash]||false;
},__hw:function(m){var o=this.__hv;
var n=m.$$hash;
var p;
if(m.isExcluded()){p=false;
}else{var parent=m.$$parent;

if(parent){p=this.__hw(parent);
}else{p=m.isRootWidget();
}}return o[n]=p;
},add:function(a){var b=this.__hu;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(h);
},flush:function(){var c=this.__hu;
var g=this.__hv;
for(var d in c){if(g[d]!=null){c[d].addChildrenToQueue(c);
}}var f={};

for(var d in c){f[d]=g[d];
g[d]=null;
}for(var d in c){var e=c[d];
delete c[d];
if(g[d]==null){this.__hw(e);
}if(g[d]&&g[d]!=f[d]){e.checkAppearanceNeeds();
}}this.__hu={};
}}});
})();
(function(){var g="appearance",f="qx.ui.core.queue.Appearance";
qx.Class.define(f,{statics:{__hx:{},remove:function(e){delete this.__hx[e.$$hash];
},add:function(h){var i=this.__hx;

if(i[h.$$hash]){return;
}i[h.$$hash]=h;
qx.ui.core.queue.Manager.scheduleFlush(g);
},has:function(j){return !!this.__hx[j.$$hash];
},flush:function(){var d=qx.ui.core.queue.Visibility;
var a=this.__hx;
var c;

for(var b in a){c=a[b];
delete a[b];
if(d.isVisible(c)){c.syncAppearance();
}else{c.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__hy:{},add:function(f){var g=this.__hy;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__hy;

for(var e in c){var d=c[e];
delete c[e];
d.dispose();
}for(var e in c){return;
}this.__hy={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(d,e){arguments.callee.base.call(this);
this.__hz=d;
this.__hA=e||d.toHashCode();
this.useMarkup(d.getMarkup());
var f={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){f.pointerEvents=c;
}this.setStyles(f);
},members:{__hA:null,__hz:null,getId:function(){return this.__hA;
},getDecorator:function(){return this.__hz;
},resize:function(h,i){this.__hz.resize(this.getDomElement(),h,i);
},tint:function(g){this.__hz.tint(this.getDomElement(),g);
},getInsets:function(){return this.__hz.getInsets();
}},destruct:function(){this.__hz=null;
}});
})();
(function(){var k="blur",j="focus",h="input",g="load",f="qx.ui.core.EventHandler",e="activate";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__hB=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__hB:null,__hC:{focusin:1,focusout:1,focus:1,blur:1},__hD:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(G,H){return G instanceof qx.ui.core.Widget;
},_dispatchEvent:function(n){var s=n.getTarget();
var r=qx.ui.core.Widget.getWidgetByElement(s);
var t=false;

while(r&&r.isAnonymous()){var t=true;
r=r.getLayoutParent();
}if(r&&t&&n.getType()==e){r.getContainerElement().activate();
}if(this.__hC[n.getType()]){r=r&&r.getFocusTarget();
if(!r){return;
}}if(n.getRelatedTarget){var A=n.getRelatedTarget();
var z=qx.ui.core.Widget.getWidgetByElement(A);

while(z&&z.isAnonymous()){z=z.getLayoutParent();
}
if(z){if(this.__hC[n.getType()]){z=z.getFocusTarget();
}if(z===r){return;
}}}var v=n.getCurrentTarget();
var x=qx.ui.core.Widget.getWidgetByElement(v);

if(!x||x.isAnonymous()){return;
}if(this.__hC[n.getType()]){x=x.getFocusTarget();
}var y=n.getType();

if(!x||!(x.isEnabled()||this.__hD[y])){return;
}var o=n.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var u=this.__hB.getListeners(x,y,o);

if(!u||u.length===0){return;
}var p=qx.event.Pool.getInstance().getObject(n.constructor);
n.clone(p);
p.setTarget(r);
p.setRelatedTarget(z||null);
p.setCurrentTarget(x);
var B=n.getOriginalTarget();

if(B){var q=qx.ui.core.Widget.getWidgetByElement(B);

while(q&&q.isAnonymous()){q=q.getLayoutParent();
}p.setOriginalTarget(q);
}else{p.setOriginalTarget(s);
}for(var i=0,l=u.length;i<l;i++){var w=u[i].context||x;
u[i].handler.call(w,p);
}if(p.getPropagationStopped()){n.stopPropagation();
}
if(p.getDefaultPrevented()){n.preventDefault();
}qx.event.Pool.getInstance().poolObject(p);
},registerEvent:function(a,b,c){var d;

if(b===j||b===k){d=a.getFocusElement();
}else if(b===g||b===h){d=a.getContentElement();
}else{d=a.getContainerElement();
}
if(d){d.addListener(b,this._dispatchEvent,this,c);
}},unregisterEvent:function(C,D,E){var F;

if(D===j||D===k){F=C.getFocusElement();
}else if(D===g||D===h){F=C.getContentElement();
}else{F=C.getContainerElement();
}
if(F){F.removeListener(D,this._dispatchEvent,this,E);
}}},destruct:function(){this.__hB=null;
},defer:function(m){qx.event.Registration.addHandler(m);
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
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__hI:function(){var d=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__hI();
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(x){var x=x||t;
this.__hJ=x;
this.length=x.length;
},members:{$$isString:true,length:0,__hJ:null,toString:function(){return this.__hJ;
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
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__hK=c;
this.__hL=d;
},members:{__hK:null,__hL:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hK,this.__hL);
}}});
})();
(function(){var y="_",x="",w="qx.dynlocale",v="on",u="_applyLocale",t="changeLocale",s="C",r="qx.locale.Manager",q="String",p="singleton";
qx.Class.define(r,{type:p,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hM=qx.$$translations||{};
this.__hN=qx.$$locales||{};
var P=qx.bom.client.Locale;
var N=P.LOCALE;
var O=P.VARIANT;

if(O!==x){N+=y+O;
}this.setLocale(N||this.__hO);
},statics:{tr:function(D,E){var F=qx.lang.Array.fromArguments(arguments);
F.splice(0,1);
return qx.locale.Manager.getInstance().translate(D,F);
},trn:function(k,l,m,n){var o=qx.lang.Array.fromArguments(arguments);
o.splice(0,3);
if(m!=1){return qx.locale.Manager.getInstance().translate(l,o);
}else{return qx.locale.Manager.getInstance().translate(k,o);
}},trc:function(z,A,B){var C=qx.lang.Array.fromArguments(arguments);
C.splice(0,2);
return qx.locale.Manager.getInstance().translate(A,C);
},marktr:function(g){return g;
}},properties:{locale:{check:q,nullable:true,apply:u,event:t}},members:{__hO:s,__hP:null,__hQ:null,__hM:null,__hN:null,getLanguage:function(){return this.__hQ;
},getTerritory:function(){return this.getLocale().split(y)[1]||x;
},getAvailableLocales:function(){var f=[];

for(var e in this.__hN){if(e!=this.__hO){f.push(e);
}}return f;
},__hR:function(K){var M;
var L=K.indexOf(y);

if(L==-1){M=K;
}else{M=K.substring(0,L);
}return M;
},_applyLocale:function(h,j){this.__hP=h;
this.__hQ=this.__hR(h);
},addTranslation:function(G,H){var I=this.__hM;

if(I[G]){for(var J in H){I[G][J]=H[J];
}}else{I[G]=H;
}},addLocale:function(a,b){var c=this.__hN;

if(c[a]){for(var d in b){c[a][d]=b[d];
}}else{c[a]=b;
}},translate:function(Q,R,S){var X;
var V=this.__hM;

if(!V){return Q;
}
if(S){var U=this.__hR(S);
}else{S=this.__hP;
U=this.__hQ;
}
if(!X&&V[S]){X=V[S][Q];
}
if(!X&&V[U]){X=V[U][Q];
}
if(!X&&V[this.__hO]){X=V[this.__hO][Q];
}
if(!X){X=Q;
}
if(R.length>0){var T=[];

for(var i=0;i<R.length;i++){var W=R[i];

if(W&&W.translate){T[i]=W.translate();
}else{T[i]=W;
}}X=qx.lang.String.format(X,T);
}
if(qx.core.Variant.isSet(w,v)){X=new qx.locale.LocalizedString(X,Q,R);
}return X;
},localize:function(Y,ba,bb){var bg;
var be=this.__hN;

if(!be){return Y;
}
if(bb){var bd=this.__hR(bb);
}else{bb=this.__hP;
bd=this.__hQ;
}
if(!bg&&be[bb]){bg=be[bb][Y];
}
if(!bg&&be[bd]){bg=be[bd][Y];
}
if(!bg&&be[this.__hO]){bg=be[this.__hO][Y];
}
if(!bg){bg=Y;
}
if(ba.length>0){var bc=[];

for(var i=0;i<ba.length;i++){var bf=ba[i];

if(bf.translate){bc[i]=bf.translate();
}else{bc[i]=bf;
}}bg=qx.lang.String.format(bg,bc);
}
if(qx.core.Variant.isSet(w,v)){bg=new qx.locale.LocalizedString(bg,Y,ba);
}return bg;
}},destruct:function(){this.__hM=this.__hN=null;
}});
})();
(function(){var n="source",m="scale",l="no-repeat",k="mshtml",j="backgroundImage",i="qx.client",h="div",g="qx.html.Image";
qx.Class.define(g,{extend:qx.html.Element,members:{_applyProperty:function(name,a){arguments.callee.base.call(this,name,a);

if(name===n){var e=this.getDomElement();
var b=this.getAllStyles();

if(this.getNodeName()==h&&this.getStyle(j)){b.backgroundPosition=null;
b.backgroundRepeat=null;
}var c=this._getProperty(n);
var d=this._getProperty(m);
var f=d?m:l;
qx.bom.element.Decoration.update(e,c,f,b);
}},_createDomElement:function(){var r=this._getProperty(m);
var s=r?m:l;

if(qx.core.Variant.isSet(i,k)){var q=this._getProperty(n);
this.setNodeName(qx.bom.element.Decoration.getTagName(s,q));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(s));
}return arguments.callee.base.call(this);
},_copyData:function(o){return arguments.callee.base.call(this,true);
},setSource:function(t){this._setProperty(n,t);
return this;
},getSource:function(){return this._getProperty(n);
},resetSource:function(){this._removeProperty(n);
return this;
},setScale:function(p){this._setProperty(m,p);
return this;
},getScale:function(){return this._getProperty(m);
}}});
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
(function(){var J="nonScaled",I="scaled",H="alphaScaled",G=".png",F="replacement",E="hidden",D="div",C="Boolean",B="_applyScale",A="px",u="_applySource",z="-disabled.$1",x="__iq",t="img",s="changeSource",w="qx.client",v="String",y="image",r="qx.ui.basic.Image";
qx.Class.define(r,{extend:qx.ui.core.Widget,construct:function(c){this.__iq={};
arguments.callee.base.call(this);

if(c){this.setSource(c);
}},properties:{source:{check:v,init:null,nullable:true,event:s,apply:u,themeable:true},scale:{check:C,init:false,themeable:true,apply:B},appearance:{refine:true,init:y},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__ir:null,__is:null,__it:null,__iq:null,getContentElement:function(){return this.__ix();
},_createContentElement:function(){return this.__ix();
},_getContentHint:function(){return {width:this.__ir||0,height:this.__is||0};
},_applyEnabled:function(S,T){arguments.callee.base.call(this,S,T);

if(this.getSource()){this._styleSource();
}},_applySource:function(bd){this._styleSource();
},_applyScale:function(k){this._styleSource();
},__iu:function(bi){this.__it=bi;
},__iv:function(){if(this.__it==null){var q=this.getSource();
var p=false;

if(q!=null){p=qx.lang.String.endsWith(q,G);
}
if(this.getScale()&&p&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__it=H;
}else if(this.getScale()){this.__it=I;
}else{this.__it=J;
}}return this.__it;
},__iw:function(l){var m;
var n;

if(l==H){m=true;
n=D;
}else if(l==J){m=false;
n=D;
}else{m=true;
n=t;
}var o=new qx.html.Image(n);
o.setScale(m);
o.setStyles({"overflowX":E,"overflowY":E});
return o;
},__ix:function(){var j=this.__iv();

if(this.__iq[j]==null){this.__iq[j]=this.__iw(j);
}return this.__iq[j];
},_styleSource:function(){var bh=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!bh){this.getContentElement().resetSource();
return;
}this.__iy(bh);
if(qx.util.ResourceManager.getInstance().has(bh)){this.__iA(this.getContentElement(),bh);
}else if(qx.io.ImageLoader.isLoaded(bh)){this.__iB(this.getContentElement(),bh);
}else{this.__iC(this.getContentElement(),bh);
}},__iy:qx.core.Variant.select(w,{"mshtml":function(K){var M=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var L=qx.lang.String.endsWith(K,G);

if(M&&L){if(this.getScale()&&this.__iv()!=H){this.__iu(H);
}else if(!this.getScale()&&this.__iv()!=J){this.__iu(J);
}}else{if(this.getScale()&&this.__iv()!=I){this.__iu(I);
}else if(!this.getScale()&&this.__iv()!=J){this.__iu(J);
}}this.__iz(this.__ix());
},"default":function(U){if(this.getScale()&&this.__iv()!=I){this.__iu(I);
}else if(!this.getScale()&&this.__iv(J)){this.__iu(J);
}this.__iz(this.__ix());
}}),__iz:function(V){var Y=this.getContainerElement();
var ba=Y.getChild(0);

if(ba!=V){if(ba!=null){var bc=A;
var W={};
var X=this.getInnerSize();

if(X!=null){W.width=X.width+bc;
W.height=X.height+bc;
}var bb=this.getInsets();
W.left=bb.left+bc;
W.top=bb.top+bc;
W.zIndex=10;
V.setStyles(W,true);
V.setSelectable(this.getSelectable());
}Y.removeAt(0);
Y.addAt(V,0);
}},__iA:function(d,e){var g=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var f=e.replace(/\.([a-z]+)$/,z);

if(g.has(f)){e=f;
this.addState(F);
}else{this.removeState(F);
}}if(d.getSource()===e){return;
}d.setSource(e);
this.__iF(g.getImageWidth(e),g.getImageHeight(e));
},__iB:function(N,O){var Q=qx.io.ImageLoader;
N.setSource(O);
var P=Q.getWidth(O);
var R=Q.getHeight(O);
this.__iF(P,R);
},__iC:function(be,bf){var self;
var bg=qx.io.ImageLoader;
{};
if(!bg.isFailed(bf)){bg.load(bf,this.__iE,this);
}else{if(be!=null){be.resetSource();
}}},__iE:function(h,i){if(h!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(i.failed){this.warn("Image could not be loaded: "+h);
}this._styleSource();
},__iF:function(a,b){if(a!==this.__ir||b!==this.__is){this.__ir=a;
this.__is=b;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(x);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){arguments.callee.base.call(this);
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
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){arguments.callee.base.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__iG=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__iG:null,_applyTimeoutInterval:function(h){this.__iG.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__iG){this.__iG.stop();
}this.__iG=null;
}});
})();
(function(){var J="top",I="right",H="bottom",G="left",F="align-start",E="qx.util.placement.AbstractAxis",D="edge-start",C="align-end",B="edge-end",A="-",x="best-fit",z='__iH',y="qx.util.placement.Placement",w="keep-align",v="direct";
qx.Class.define(y,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iH=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:E},axisY:{check:E},edge:{check:[J,I,H,G],init:J},align:{check:[J,I,H,G],init:I}},statics:{__iI:null,compute:function(c,d,e,f,g,h,i){this.__iI=this.__iI||new qx.util.placement.Placement();
var l=g.split(A);
var k=l[0];
var j=l[1];
this.__iI.set({axisX:this.__iM(h),axisY:this.__iM(i),edge:k,align:j});
return this.__iI.compute(c,d,e,f);
},__iJ:null,__iK:null,__iL:null,__iM:function(K){switch(K){case v:this.__iJ=this.__iJ||new qx.util.placement.DirectAxis();
return this.__iJ;
case w:this.__iK=this.__iK||new qx.util.placement.KeepAlignAxis();
return this.__iK;
case x:this.__iL=this.__iL||new qx.util.placement.BestFitAxis();
return this.__iL;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__iH:null,compute:function(o,p,q,r){{};
var s=this.getAxisX()||this.__iH;
var u=s.computeStart(o.width,{start:q.left,end:q.right},{start:r.left,end:r.right},p.width,this.__iN());
var t=this.getAxisY()||this.__iH;
var top=t.computeStart(o.height,{start:q.top,end:q.bottom},{start:r.top,end:r.bottom},p.height,this.__iO());
return {left:u,top:top};
},__iN:function(){var n=this.getEdge();
var m=this.getAlign();

if(n==G){return D;
}else if(n==I){return B;
}else if(m==G){return F;
}else if(m==I){return C;
}},__iO:function(){var b=this.getEdge();
var a=this.getAlign();

if(b==J){return D;
}else if(b==H){return B;
}else if(a==J){return F;
}else if(a==H){return C;
}}},destruct:function(){this._disposeObjects(z);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(i,j,k,l,m){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(n,o,p,q){switch(q){case e:return o.start-p.end-n;
case b:return o.end+p.start;
case d:return o.start+p.start;
case c:return o.end-p.end-n;
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
(function(){var o="mousedown",n="__iP",m="blur",l="singleton",k="qx.ui.popup.Manager";
qx.Class.define(k,{type:l,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iP={};
qx.event.Registration.addListener(document.documentElement,o,this.__iR,this,true);
qx.bom.Element.addListener(window,m,this.hideAll,this);
},members:{__iP:null,add:function(p){{};
this.__iP[p.$$hash]=p;
this.__iQ();
},remove:function(q){{};
var r=this.__iP;

if(r){delete r[q.$$hash];
this.__iQ();
}},hideAll:function(){var j=this.__iP;

if(j){for(var i in j){j[i].exclude();
}}},__iQ:function(){var c=1e7;
var b=this.__iP;

for(var a in b){b[a].setZIndex(c++);
}},__iR:function(e){var g=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var h=this.__iP;

for(var f in h){var d=h[f];

if(!d.getAutoHide()||g==d||qx.ui.core.Widget.contains(d,g)){continue;
}d.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,o,this.__iR,this,true);
this._disposeMap(n);
}});
})();
(function(){var c="abstract",b="qx.ui.layout.Abstract";
qx.Class.define(b,{type:c,extend:qx.core.Object,members:{__hE:null,_invalidChildrenCache:null,__hF:null,invalidateLayoutCache:function(){this.__hE=null;
},renderLayout:function(d,e){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__hE){return this.__hE;
}return this.__hE=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(h){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var i=this.__hF;

if(i instanceof qx.ui.core.LayoutItem){i.clearSeparators();
}},_renderSeparator:function(f,g){this.__hF.renderSeparator(f,g);
},connectToWidget:function(a){if(a&&this.__hF){throw new Error("It is not possible to manually set the connected widget.");
}this.__hF=a;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__hF;
},_applyLayoutChange:function(){if(this.__hF){this.__hF.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__hF.getLayoutChildren();
}},destruct:function(){this.__hF=this.__hE=null;
}});
})();
(function(){var h="qx.ui.layout.Grow";
qx.Class.define(h,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(a,b){var f=this._getLayoutChildren();
var e,g,d,c;
for(var i=0,l=f.length;i<l;i++){e=f[i];
g=e.getSizeHint();
d=a;

if(d<g.minWidth){d=g.minWidth;
}else if(d>g.maxWidth){d=g.maxWidth;
}c=b;

if(c<g.minHeight){c=g.minHeight;
}else if(c>g.maxHeight){c=g.maxHeight;
}e.renderLayout(0,0,d,c);
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
(function(){var v="label",u="icon",t="Boolean",s="both",r="String",q="left",p="changeGap",o="changeShow",n="bottom",m="_applyCenter",I="changeIcon",H="qx.ui.basic.Atom",G="changeLabel",F="Integer",E="_applyIconPosition",D="top",C="right",B="_applyRich",A="_applyIcon",z="_applyShow",x="_applyLabel",y="_applyGap",w="atom";
qx.Class.define(H,{extend:qx.ui.core.Widget,construct:function(k,l){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(k!=null){this.setLabel(k);
}
if(l!=null){this.setIcon(l);
}},properties:{appearance:{refine:true,init:w},label:{apply:x,nullable:true,check:r,event:G},rich:{check:t,init:false,apply:B},icon:{check:r,apply:A,nullable:true,themeable:true,event:I},gap:{check:F,nullable:false,event:p,apply:y,themeable:true,init:4},show:{init:s,check:[s,v,u],themeable:true,inheritable:true,apply:z,event:o},iconPosition:{init:q,check:[D,C,n,q],themeable:true,apply:E},center:{init:false,check:t,themeable:true,apply:m}},members:{_createChildControlImpl:function(N){var O;

switch(N){case v:O=new qx.ui.basic.Label(this.getLabel());
O.setAnonymous(true);
O.setRich(this.getRich());
this._add(O);

if(this.getLabel()==null||this.getShow()===u){O.exclude();
}break;
case u:O=new qx.ui.basic.Image(this.getIcon());
O.setAnonymous(true);
this._addAt(O,0);

if(this.getIcon()==null||this.getShow()===v){O.exclude();
}break;
}return O||arguments.callee.base.call(this,N);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===u){this._excludeChildControl(v);
}else{this._showChildControl(v);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===v){this._excludeChildControl(u);
}else{this._showChildControl(u);
}},_applyLabel:function(h,i){var j=this.getChildControl(v,true);

if(j){j.setValue(h);
}this._handleLabel();
},_applyRich:function(P,Q){var R=this.getChildControl(v,true);

if(R){R.setRich(P);
}},_applyIcon:function(a,b){var c=this.getChildControl(u,true);

if(c){c.setSource(a);
}this._handleIcon();
},_applyGap:function(d,e){this._getLayout().setGap(d);
},_applyShow:function(J,K){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(L,M){this._getLayout().setIconPosition(L);
},_applyCenter:function(f,g){this._getLayout().setCenter(f);
}}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(l,m){var v=qx.ui.layout.Util;
var o=this.getIconPosition();
var r=this._getLayoutChildren();
var length=r.length;
var F,top,E,p;
var A,u;
var y=this.getGap();
var D=this.getCenter();
if(o===k||o===f){var w=length-1;
var s=-1;
var q=-1;
}else{var w=0;
var s=length;
var q=1;
}if(o==h||o==k){if(D){var z=0;

for(var i=w;i!=s;i+=q){p=r[i].getSizeHint().height;

if(p>0){z+=p;

if(i!=w){z+=y;
}}}top=Math.round((m-z)/2);
}else{top=0;
}
for(var i=w;i!=s;i+=q){A=r[i];
u=A.getSizeHint();
E=Math.min(u.maxWidth,Math.max(l,u.minWidth));
p=u.height;
F=v.computeHorizontalAlignOffset(d,E,l);
A.renderLayout(F,top,E,p);
if(p>0){top+=p+y;
}}}else{var t=l;
var n=null;
var C=0;

for(var i=w;i!=s;i+=q){A=r[i];
E=A.getSizeHint().width;

if(E>0){if(!n&&A instanceof qx.ui.basic.Label){n=A;
}else{t-=E;
}C++;
}}
if(C>1){var B=(C-1)*y;
t-=B;
}
if(n){var u=n.getSizeHint();
var x=Math.max(u.minWidth,Math.min(t,u.maxWidth));
t-=x;
}
if(D&&t>0){F=Math.round(t/2);
}else{F=0;
}
for(var i=w;i!=s;i+=q){A=r[i];
u=A.getSizeHint();
p=Math.min(u.maxHeight,Math.max(m,u.minHeight));

if(A===n){E=x;
}else{E=u.width;
}top=v.computeVerticalAlignOffset(e,u.height,m);
A.renderLayout(F,top,E,p);
if(E>0){F+=E+y;
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
(function(){var y="middle",x="qx.ui.layout.Util",w="left",v="center",u="top",t="bottom",s="right";
qx.Class.define(x,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(ba,bb,bc){var be,bi,bd,bj;
var bf=bb>bc;
var bk=Math.abs(bb-bc);
var bl,bg;
var bh={};

for(bi in ba){be=ba[bi];
bh[bi]={potential:bf?be.max-be.value:be.value-be.min,flex:bf?be.flex:1/be.flex,offset:0};
}while(bk!=0){bj=Infinity;
bd=0;

for(bi in bh){be=bh[bi];

if(be.potential>0){bd+=be.flex;
bj=Math.min(bj,be.potential/be.flex);
}}if(bd==0){break;
}bj=Math.min(bk,bj*bd)/bd;
bl=0;

for(bi in bh){be=bh[bi];

if(be.potential>0){bg=Math.min(bk,be.potential,Math.ceil(bj*be.flex));
bl+=bg-bj*be.flex;

if(bl>=1){bl-=1;
bg-=1;
}be.potential-=bg;

if(bf){be.offset+=bg;
}else{be.offset-=bg;
}bk-=bg;
}}}return bh;
},computeHorizontalAlignOffset:function(z,A,B,C,D){if(C==null){C=0;
}
if(D==null){D=0;
}var E=0;

switch(z){case w:E=C;
break;
case s:E=B-A-D;
break;
case v:E=Math.round((B-A)/2);
if(E<C){E=C;
}else if(E<D){E=Math.max(C,B-A-D);
}break;
}return E;
},computeVerticalAlignOffset:function(F,G,H,I,J){if(I==null){I=0;
}
if(J==null){J=0;
}var K=0;

switch(F){case u:K=I;
break;
case t:K=H-G-J;
break;
case y:K=Math.round((H-G)/2);
if(K<I){K=I;
}else if(K<J){K=Math.max(I,H-G-J);
}break;
}return K;
},collapseMargins:function(o){var p=0,r=0;

for(var i=0,l=arguments.length;i<l;i++){var q=arguments[i];

if(q<0){r=Math.min(r,q);
}else if(q>0){p=Math.max(p,q);
}}return p+r;
},computeHorizontalGaps:function(a,b,c){if(b==null){b=0;
}var d=0;

if(c){d+=a[0].getMarginLeft();

for(var i=1,l=a.length;i<l;i+=1){d+=this.collapseMargins(b,a[i-1].getMarginRight(),a[i].getMarginLeft());
}d+=a[l-1].getMarginRight();
}else{for(var i=1,l=a.length;i<l;i+=1){d+=a[i].getMarginLeft()+a[i].getMarginRight();
}d+=(b*(l-1));
}return d;
},computeVerticalGaps:function(bm,bn,bo){if(bn==null){bn=0;
}var bp=0;

if(bo){bp+=bm[0].getMarginTop();

for(var i=1,l=bm.length;i<l;i+=1){bp+=this.collapseMargins(bn,bm[i-1].getMarginBottom(),bm[i].getMarginTop());
}bp+=bm[l-1].getMarginBottom();
}else{for(var i=1,l=bm.length;i<l;i+=1){bp+=bm[i].getMarginTop()+bm[i].getMarginBottom();
}bp+=(bn*(l-1));
}return bp;
},computeHorizontalSeparatorGaps:function(L,M,N){var Q=qx.theme.manager.Decoration.getInstance().resolve(N);
var P=Q.getInsets();
var O=P.left+P.right;
var R=0;

for(var i=0,l=L.length;i<l;i++){var S=L[i];
R+=S.getMarginLeft()+S.getMarginRight();
}R+=(M+O+M)*(l-1);
return R;
},computeVerticalSeparatorGaps:function(e,f,g){var k=qx.theme.manager.Decoration.getInstance().resolve(g);
var j=k.getInsets();
var h=j.top+j.bottom;
var m=0;

for(var i=0,l=e.length;i<l;i++){var n=e[i];
m+=n.getMarginTop()+n.getMarginBottom();
}m+=(f+h+f)*(l-1);
return m;
},arrangeIdeals:function(T,U,V,W,X,Y){if(U<T||X<W){if(U<T&&X<W){U=T;
X=W;
}else if(U<T){X-=(T-U);
U=T;
if(X<W){X=W;
}}else if(X<W){U-=(W-X);
X=W;
if(U<T){U=T;
}}}
if(U>V||X>Y){if(U>V&&X>Y){U=V;
X=Y;
}else if(U>V){X+=(U-V);
U=V;
if(X>Y){X=Y;
}}else if(X>Y){U+=(X-Y);
X=Y;
if(U>V){U=V;
}}}return {begin:U,end:X};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var q="qx.dynlocale",p="text",o="Boolean",n="qx.client",m="color",l="userSelect",k="changeLocale",j="enabled",i="none",h="on",L="_applyTextAlign",K="qx.ui.core.Widget",J="gecko",I="changeTextAlign",H="_applyWrap",G="changeValue",F="changeContent",E="qx.ui.basic.Label",D="A",C="_applyValue",x="center",y="_applyBuddy",v="String",w="textAlign",t="right",u="changeRich",r="_applyRich",s="click",z="label",A="webkit",B="left";
qx.Class.define(E,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(d){arguments.callee.base.call(this);

if(d!=null){this.setValue(d);
}
if(qx.core.Variant.isSet(q,h)){qx.locale.Manager.getInstance().addListener(k,this._onChangeLocale,this);
}},properties:{rich:{check:o,init:false,event:u,apply:r},wrap:{check:o,init:true,apply:H},value:{check:v,apply:C,event:G,nullable:true},buddy:{check:K,apply:y,nullable:true,init:null},textAlign:{check:[B,x,t],nullable:true,themeable:true,apply:L,event:I},appearance:{refine:true,init:z},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__iS:null,__iT:null,__iU:null,__iV:null,_getContentHint:function(){if(this.__iT){this.__iW=this.__iX();
delete this.__iT;
}return {width:this.__iW.width,height:this.__iW.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(O){if(qx.core.Variant.isSet(n,J)){if(O&&!this.isRich()){{};
return;
}}arguments.callee.base.call(this,O);
if(qx.core.Variant.isSet(n,A)){this.getContainerElement().setStyle(l,O?p:i);
this.getContentElement().setStyle(l,O?p:i);
}},_getContentHeightForWidth:function(g){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__iX(g).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(P,Q){this.getContentElement().setStyle(w,P);
},_applyTextColor:function(bc,bd){if(bc){this.getContentElement().setStyle(m,qx.theme.manager.Color.getInstance().resolve(bc));
}else{this.getContentElement().removeStyle(m);
}},__iW:{width:0,height:0},_applyFont:function(R,S){var T;

if(R){this.__iS=qx.theme.manager.Font.getInstance().resolve(R);
T=this.__iS.getStyles();
}else{this.__iS=null;
T=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(T);
this.__iT=true;
qx.ui.core.queue.Layout.add(this);
},__iX:function(U){var Y=qx.bom.Label;
var W=this.getFont();
var V=W?this.__iS.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||D;
var X=this.getRich();
return X?Y.getHtmlSize(content,V,U):Y.getTextSize(content,V);
},_applyBuddy:function(b,c){if(c!=null){c.removeBinding(this.__iU);
this.__iU=null;
this.removeListenerById(this.__iV);
this.__iV=null;
}
if(b!=null){this.__iU=b.bind(j,this,j);
this.__iV=this.addListener(s,b.focus,b);
}},_applyRich:function(f){this.getContentElement().setRich(f);
this.__iT=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(ba,bb){if(ba&&!this.isRich()){{};
}},_onChangeLocale:qx.core.Variant.select(q,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(M,N){this.getContentElement().setValue(M);
this.__iT=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(F,M,N);
}},destruct:function(){if(qx.core.Variant.isSet(q,h)){qx.locale.Manager.getInstance().removeListener(k,this._onChangeLocale,this);
}if(this.__iU!=null){var a=this.getBuddy();

if(a!=null&&!a.isDisposed()){a.removeBinding(this.__iU);
}}this.__iS=this.__iU=null;
}});
})();
(function(){var g="value",f="Please use the getValue() method instead.",e="qx.html.Label",d="Please use the setValue() method instead.";
qx.Class.define(e,{extend:qx.html.Element,members:{__iY:null,_applyProperty:function(name,h){arguments.callee.base.call(this,name,h);

if(name==g){var i=this.getDomElement();
qx.bom.Label.setValue(i,h);
}},_createDomElement:function(){var k=this.__iY;
var j=qx.bom.Label.create(this._content,k);
return j;
},_copyData:function(m){return arguments.callee.base.call(this,true);
},setRich:function(a){var b=this.getDomElement();

if(b){throw new Error("The label mode cannot be modified after initial creation");
}a=!!a;

if(this.__iY==a){return;
}this.__iY=a;
return this;
},setValue:function(c){this._setProperty(g,c);
return this;
},getValue:function(){return this._getProperty(g);
},setContent:function(l){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
return this.setValue(l);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
return this.getValue();
}}});
})();
(function(){var o="qx.client",n="gecko",m="div",l="inherit",k="text",j="value",i="",h="hidden",g="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",f="nowrap",F="auto",E="ellipsis",D="normal",C="label",B="px",A="crop",z="end",y="100%",x="visible",w="qx.bom.Label",u="Please use the setValue() method instead.",v="opera",s="Please use the getValue() method instead.",t="block",q="none",r="-1000px",p="absolute";
qx.Class.define(w,{statics:{__ja:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jb:function(){var be=this.__jd(false);
document.body.insertBefore(be,document.body.firstChild);
return this._textElement=be;
},__jc:function(){var Y=this.__jd(true);
document.body.insertBefore(Y,document.body.firstChild);
return this._htmlElement=Y;
},__jd:function(I){var J=qx.bom.Element.create(m);
var K=J.style;
K.width=K.height=F;
K.left=K.top=r;
K.visibility=h;
K.position=p;
K.overflow=x;

if(I){K.whiteSpace=D;
}else{K.whiteSpace=f;

if(qx.core.Variant.isSet(o,n)){var L=document.createElementNS(g,C);
for(var M in this.__ja){L.style[M]=l;
}J.appendChild(L);
}}return J;
},__je:function(bf){var bg={};

if(bf){bg.whiteSpace=D;
}else if(qx.core.Variant.isSet(o,n)){bg.display=t;
}else{bg.overflow=h;
bg.whiteSpace=f;
bg.textOverflow=E;
bg.userSelect=q;
if(qx.core.Variant.isSet(o,v)){bg.OTextOverflow=E;
}}return bg;
},create:function(content,a,b){if(!b){b=window;
}
if(a){var c=b.document.createElement(m);
c.useHtml=true;
}else if(qx.core.Variant.isSet(o,n)){var c=b.document.createElement(m);
var d=b.document.createElementNS(g,C);
d.style.cursor=l;
d.style.color=l;
d.style.overflow=h;
d.style.maxWidth=y;
for(var e in this.__ja){d.style[e]=l;
}d.setAttribute(A,z);
c.appendChild(d);
}else{var c=b.document.createElement(m);
qx.bom.element.Style.setStyles(c,this.__je(a));
}
if(content){this.setValue(c,content);
}return c;
},setValue:function(G,H){H=H||i;

if(G.useHtml){G.innerHTML=H;
}else if(qx.core.Variant.isSet(o,n)){G.firstChild.setAttribute(j,H);
}else{qx.bom.element.Attribute.set(G,k,H);
}},getValue:function(bd){if(bd.useHtml){return bd.innerHTML;
}else if(qx.core.Variant.isSet(o,n)){return bd.firstChild.getAttribute(j)||i;
}else{return qx.bom.element.Attribute.get(bd,k);
}},getHtmlSize:function(content,S,T){var U=this._htmlElement||this.__jc();
U.style.width=T!==undefined?T+B:F;
U.innerHTML=content;
return this.__jf(U,S);
},getTextSize:function(V,W){var X=this._textElement||this.__jb();

if(qx.core.Variant.isSet(o,n)){X.firstChild.setAttribute(j,V);
}else{qx.bom.element.Attribute.set(X,k,V);
}return this.__jf(X,W);
},__jf:function(N,O){var P=this.__ja;

if(!O){O={};
}
for(var Q in P){N.style[Q]=O[Q]||i;
}var R=qx.bom.element.Dimension.getSize(N);

if(qx.core.Variant.isSet(o,n)){if(!qx.bom.client.Platform.WIN){R.width++;
}}return R;
},setContent:function(bb,bc){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
this.setValue(bb,bc);
},getContent:function(ba){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
return this.getValue(ba);
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
(function(){var d="qx.event.type.Data",c="qx.ui.form.IForm";
qx.Interface.define(c,{events:{"changeEnabled":d,"changeValid":d,"changeInvalidMessage":d,"changeRequired":d},members:{setEnabled:function(e){return arguments.length==1;
},getEnabled:function(){},setRequired:function(b){return arguments.length==1;
},getRequired:function(){},setValid:function(a){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var h="Use 'getBlocker().getContentBlockerElement()' instead.",g="Use 'getBlocker().getBlockerElement()' instead.",f="_applyBlockerColor",e="Number",d="qx.ui.core.MBlocker",c="_applyBlockerOpacity",b="Color",a="__jh";
qx.Mixin.define(d,{construct:function(){this.__jh=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:b,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:c,themeable:true}},members:{__jh:null,_applyBlockerColor:function(i,j){this.__jh.setColor(i);
},_applyBlockerOpacity:function(k,l){this.__jh.setOpacity(k);
},block:function(){this.__jh.block();
},isBlocked:function(){return this.__jh.isBlocked();
},unblock:function(){this.__jh.unblock();
},forceUnblock:function(){this.__jh.forceUnblock();
},blockContent:function(m){this.__jh.blockContent(m);
},isContentBlocked:function(){return this.__jh.isContentBlocked();
},unblockContent:function(){this.__jh.unblockContent();
},forceUnblockContent:function(){this.__jh.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.__jh.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.__jh.getBlockerElement();
},getBlocker:function(){return this.__jh;
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var l="qx.ui.window.Window",k="changeModal",j="changeVisibility",i="changeActive",h="_applyActiveWindow",g="__ji",f="qx.ui.window.MDesktop",d="__jj";
qx.Mixin.define(f,{properties:{activeWindow:{check:l,apply:h,init:null,nullable:true}},members:{__ji:null,__jj:null,getWindowManager:function(){if(!this.__jj){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__jj;
},supportsMaximize:function(){return true;
},setWindowManager:function(o){if(this.__jj){this.__jj.setDesktop(null);
}o.setDesktop(this);
this.__jj=o;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(b,c){this.getWindowManager().changeActiveWindow(b,c);

if(b){b.setActive(true);
}
if(c){c.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(p){if(qx.Class.isDefined(l)&&p instanceof qx.ui.window.Window){this._addWindow(p);
}},_addWindow:function(m){if(!qx.lang.Array.contains(this.getWindows(),m)){this.getWindows().push(m);
m.addListener(i,this._onChangeActive,this);
m.addListener(k,this._onChangeModal,this);
m.addListener(j,this._onChangeVisibility,this);
}
if(m.getActive()){this.setActiveWindow(m);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(n){if(qx.Class.isDefined(l)&&n instanceof qx.ui.window.Window){this._removeWindow(n);
}},_removeWindow:function(a){qx.lang.Array.remove(this.getWindows(),a);
a.removeListener(i,this._onChangeActive,this);
a.removeListener(k,this._onChangeModal,this);
a.removeListener(j,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__ji){this.__ji=[];
}return this.__ji;
}},destruct:function(){this._disposeArray(g);
this._disposeObjects(d);
}});
})();
(function(){var x="contextmenu",w="help",v="qx.client",u="changeGlobalCursor",t="abstract",s="Boolean",r="root",q="",p=" !important",o="_applyGlobalCursor",l="_applyNativeHelp",n=";",m="qx.ui.root.Abstract",k="String",j="*";
qx.Class.define(m,{type:t,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:r},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:k,nullable:true,themeable:true,apply:o,event:u},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:s,init:false,apply:l}},members:{__jk:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(v,{"mshtml":function(a,b){},"default":function(c,d){var f=qx.bom.Stylesheet;
var g=this.__jk;

if(!g){this.__jk=g=f.createElement();
}f.removeAllRules(g);

if(c){f.addRule(g,j,qx.bom.element.Cursor.compile(c).replace(n,q)+p);
}}}),_applyNativeContextMenu:function(y,z){if(y){this.removeListener(x,this._onNativeContextMenu,this,true);
}else{this.addListener(x,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(v,{"mshtml":function(h,i){if(i===false){qx.bom.Event.removeNativeListener(document,w,qx.lang.Function.returnFalse);
}
if(h===false){qx.bom.Event.addNativeListener(document,w,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__jk=null;
},defer:function(A,B){qx.ui.core.MChildrenHandling.remap(B);
}});
})();
(function(){var r="resize",q="position",p="0px",o="webkit",n="paddingLeft",m="$$widget",l="qx.ui.root.Application",k="hidden",j="qx.client",i="div",f="paddingTop",h="100%",g="absolute";
qx.Class.define(l,{extend:qx.ui.root.Abstract,construct:function(s){this.__jl=qx.dom.Node.getWindow(s);
this.__jm=s;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__jl,r,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__jl:null,__jm:null,_createContainerElement:function(){var w=this.__jm;

if(qx.core.Variant.isSet(j,o)){if(!w.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var A=w.documentElement.style;
var x=w.body.style;
A.overflow=x.overflow=k;
A.padding=A.margin=x.padding=x.margin=p;
A.width=A.height=x.width=x.height=h;
var z=w.createElement(i);
w.body.appendChild(z);
var y=new qx.html.Root(z);
y.setStyle(q,g);
y.setAttribute(m,this.toHashCode());
return y;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var a=qx.bom.Viewport.getWidth(this.__jl);
var b=qx.bom.Viewport.getHeight(this.__jl);
return {minWidth:a,width:a,maxWidth:a,minHeight:b,height:b,maxHeight:b};
},_applyPadding:function(c,d,name){if(c&&(name==f||name==n)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,c,d,name);
},_applyDecorator:function(t,u){arguments.callee.base.call(this,t,u);

if(!t){return;
}var v=this.getDecoratorElement().getInsets();

if(v.left||v.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__jl=this.__jm=null;
}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="This method is not needed anymore.",f="resize",d="keyup",c="keypress",b="backgroundColor",a="_applyOpacity",y="Use 'getBlockerElement' instead.",x="__jv",w="opacity",v="interval",u="__jq",t="Tab",s="Color",r="qx.ui.root.Page",q="__js",p="Use 'getContentBlockerElement' instead.",n="Number",o="qx.ui.core.Blocker",m="_applyColor";
qx.Class.define(o,{extend:qx.core.Object,construct:function(C){arguments.callee.base.call(this);
this._widget=C;
this._isPageRoot=(qx.Class.isDefined(r)&&C instanceof qx.ui.root.Page);

if(this._isPageRoot){C.addListener(f,this.__jw,this);
}this.__jn=[];
this.__jo=[];
this.__jp=[];
},properties:{color:{check:s,init:null,nullable:true,apply:m,themeable:true},opacity:{check:n,init:1,apply:a,themeable:true}},members:{__jq:null,__jr:0,__js:null,__jp:null,__jn:null,__jo:null,__jt:null,__ju:0,__jv:null,_isPageRoot:false,_widget:null,__jw:function(e){var M=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:M.width,height:M.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:M.width,height:M.height});
}},_applyColor:function(z,A){var B=qx.theme.manager.Color.getInstance().resolve(z);
this.__jx(b,B);
},_applyOpacity:function(T,U){this.__jx(w,T);
},__jx:function(H,I){var J=[];
this.__jq&&J.push(this.__jq);
this.__js&&J.push(this.__js);

for(var i=0;i<J.length;i++){J[i].setStyle(H,I);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
this.__ju+=1;

if(this.__ju==1){this.__jt=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
this.__ju-=1;

if(this.__ju==0){this._widget.setAnonymous(this.__jt);
}},_backupActiveWidget:function(){var K=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__jn.push(K.getActive());
this.__jo.push(K.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var P=this.__jn.length;

if(P>0){var O=this.__jn[P-1];

if(O){qx.bom.Element.activate(O);
}this.__jn.pop();
}var N=this.__jo.length;

if(N>0){var O=this.__jo[N-1];

if(O){qx.bom.Element.focus(this.__jo[N-1]);
}this.__jo.pop();
}},__jy:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__jq){this.__jq=this.__jy();
this.__jq.setStyle(l,15);
this._widget.getContainerElement().add(this.__jq);
this.__jq.exclude();
}return this.__jq;
},block:function(){this.__jr++;

if(this.__jr<2){this._backupActiveWidget();
var V=this.getBlockerElement();
V.include();
V.activate();
V.addListener(h,this.__jD,this);
V.addListener(c,this.__jC,this);
V.addListener(j,this.__jC,this);
V.addListener(d,this.__jC,this);
}},isBlocked:function(){return this.__jr>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__jr--;

if(this.__jr<1){this.__jz();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__jr=0;
this.__jz();
},__jz:function(){this._restoreActiveWidget();
var S=this.getBlockerElement();
S.removeListener(h,this.__jD,this);
S.removeListener(c,this.__jC,this);
S.removeListener(j,this.__jC,this);
S.removeListener(d,this.__jC,this);
S.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__js){this.__js=this.__jy();
this._widget.getContentElement().add(this.__js);
this.__js.exclude();
}return this.__js;
},blockContent:function(Q){var R=this.getContentBlockerElement();
R.setStyle(l,Q);
this.__jp.push(Q);

if(this.__jp.length<2){R.include();

if(this._isPageRoot){if(!this.__jv){this.__jv=new qx.event.Timer(300);
this.__jv.addListener(v,this.__jB,this);
}this.__jv.start();
this.__jB();
}}},isContentBlocked:function(){return this.__jp.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jp.pop();
var D=this.__jp[this.__jp.length-1];
var E=this.getContentBlockerElement();
E.setStyle(l,D);

if(this.__jp.length<1){this.__jA();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jp=[];
var L=this.getContentBlockerElement();
L.setStyle(l,null);
this.__jA();
},__jA:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__jv.stop();
}},__jB:function(){var F=this._widget.getContainerElement().getDomElement();
var G=qx.dom.Node.getDocument(F);
this.getContentBlockerElement().setStyles({height:G.documentElement.scrollHeight+k,width:G.documentElement.scrollWidth+k});
},__jC:function(e){if(e.getKeyIdentifier()==t){e.stop();
}},__jD:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(f,this.__jw,this);
}this._disposeObjects(q,u,x);
this.__jt=this.__jn=this.__jo=this._widget=this.__jp=null;
}});
})();
(function(){var x="cursor",w="100%",v="dblclick",u="mshtml",t="mouseup",s="mousedown",r="disappear",q="appear",p="contextmenu",o="mousewheel",h=")",n="mouseover",k="mouseout",f="qx.html.Blocker",d="click",j="repeat",i="mousemove",l="url(",c="qx.client",m="qx/static/blank.gif",g="absolute";
qx.Class.define(f,{extend:qx.html.Element,construct:function(a,b){arguments.callee.base.call(this);
var a=a?qx.theme.manager.Color.getInstance().resolve(a):null;
this.setStyles({position:g,width:w,height:w,opacity:b||0,backgroundColor:a});
this.addListener(s,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(v,this._stopPropagation,this);
this.addListener(i,this._stopPropagation,this);
this.addListener(n,this._stopPropagation,this);
this.addListener(k,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
if(qx.core.Variant.isSet(c,u)){this.setStyles({backgroundImage:l+qx.util.ResourceManager.getInstance().toUri(m)+h,backgroundRepeat:j});
}this.addListener(q,this.__jE,this);
this.addListener(r,this.__jE,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__jE:function(){var y=this.getStyle(x);
this.setStyle(x,null,true);
this.setStyle(x,y,true);
}}});
})();
(function(){var N="keypress",M="focusout",L="__jF",K="activate",J="Tab",I="singleton",H="deactivate",G="focusin",F="qx.ui.core.FocusHandler";
qx.Class.define(F,{extend:qx.core.Object,type:I,construct:function(){arguments.callee.base.call(this);
this.__jF={};
},members:{__jF:null,__jG:null,__jH:null,__jI:null,connectTo:function(O){O.addListener(N,this.__jJ,this);
O.addListener(G,this._onFocusIn,this,true);
O.addListener(M,this._onFocusOut,this,true);
O.addListener(K,this._onActivate,this,true);
O.addListener(H,this._onDeactivate,this,true);
},addRoot:function(P){this.__jF[P.$$hash]=P;
},removeRoot:function(a){delete this.__jF[a.$$hash];
},getActiveWidget:function(){return this.__jG;
},isActive:function(V){return this.__jG==V;
},getFocusedWidget:function(){return this.__jH;
},isFocused:function(Y){return this.__jH==Y;
},isFocusRoot:function(p){return !!this.__jF[p.$$hash];
},_onActivate:function(e){var X=e.getTarget();
this.__jG=X;
var W=this.__jK(X);

if(W!=this.__jI){this.__jI=W;
}},_onDeactivate:function(e){var be=e.getTarget();

if(this.__jG==be){this.__jG=null;
}},_onFocusIn:function(e){var bf=e.getTarget();

if(bf!=this.__jH){this.__jH=bf;
bf.visualizeFocus();
}},_onFocusOut:function(e){var bg=e.getTarget();

if(bg==this.__jH){this.__jH=null;
bg.visualizeBlur();
}},__jJ:function(e){if(e.getKeyIdentifier()!=J){return;
}
if(!this.__jI){return;
}e.stopPropagation();
e.preventDefault();
var T=this.__jH;

if(!e.isShiftPressed()){var U=T?this.__jO(T):this.__jM();
}else{var U=T?this.__jP(T):this.__jN();
}if(U){U.tabFocus();
}},__jK:function(bh){var bi=this.__jF;

while(bh){if(bi[bh.$$hash]){return bh;
}bh=bh.getLayoutParent();
}return null;
},__jL:function(b,c){if(b===c){return 0;
}var f=b.getTabIndex()||0;
var d=c.getTabIndex()||0;

if(f!=d){return f-d;
}var m=b.getContainerElement().getDomElement();
var k=c.getContainerElement().getDomElement();
var j=qx.bom.element.Location;
var h=j.get(m);
var g=j.get(k);
if(h.top!=g.top){return h.top-g.top;
}if(h.left!=g.left){return h.left-g.left;
}var n=b.getZIndex();
var o=c.getZIndex();

if(n!=o){return n-o;
}return 0;
},__jM:function(){return this.__jS(this.__jI,null);
},__jN:function(){return this.__jT(this.__jI,null);
},__jO:function(ba){var bb=this.__jI;

if(bb==ba){return this.__jM();
}
while(ba&&ba.getAnonymous()){ba=ba.getLayoutParent();
}
if(ba==null){return [];
}var bc=[];
this.__jQ(bb,ba,bc);
bc.sort(this.__jL);
var bd=bc.length;
return bd>0?bc[0]:this.__jM();
},__jP:function(B){var C=this.__jI;

if(C==B){return this.__jN();
}
while(B&&B.getAnonymous()){B=B.getLayoutParent();
}
if(B==null){return [];
}var D=[];
this.__jR(C,B,D);
D.sort(this.__jL);
var E=D.length;
return E>0?D[E-1]:this.__jN();
},__jQ:function(parent,q,r){var s=parent.getLayoutChildren();
var t;

for(var i=0,l=s.length;i<l;i++){t=s[i];
if(!(t instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(t)&&t.isEnabled()&&t.isVisible()){if(t.isTabable()&&this.__jL(q,t)<0){r.push(t);
}this.__jQ(t,q,r);
}}},__jR:function(parent,u,v){var w=parent.getLayoutChildren();
var x;

for(var i=0,l=w.length;i<l;i++){x=w[i];
if(!(x instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(x)&&x.isEnabled()&&x.isVisible()){if(x.isTabable()&&this.__jL(u,x)>0){v.push(x);
}this.__jR(x,u,v);
}}},__jS:function(parent,Q){var R=parent.getLayoutChildren();
var S;

for(var i=0,l=R.length;i<l;i++){S=R[i];
if(!(S instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(S)&&S.isEnabled()&&S.isVisible()){if(S.isTabable()){if(Q==null||this.__jL(S,Q)<0){Q=S;
}}Q=this.__jS(S,Q);
}}return Q;
},__jT:function(parent,y){var z=parent.getLayoutChildren();
var A;

for(var i=0,l=z.length;i<l;i++){A=z[i];
if(!(A instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(A)&&A.isEnabled()&&A.isVisible()){if(A.isTabable()){if(y==null||this.__jL(A,y)>0){y=A;
}}y=this.__jT(A,y);
}}return y;
}},destruct:function(){this._disposeMap(L);
this.__jH=this.__jG=this.__jI=null;
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
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){arguments.callee.base.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){arguments.callee.base.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var A="..",z="changeSelection",y="Use 'resetSelection' instead",x=" [",w="]",v="qx.event.type.Event",u="Ranges:",t="qx.ui.table.selection.Model",s="_applySelectionMode",r="Use '_resetSelection' instead.";
qx.Class.define(t,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__xO=[];
this.__xP=-1;
this.__xQ=-1;
this.hasBatchModeRefCount=0;
this.__xR=false;
},events:{"changeSelection":v},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:s}},members:{__xR:null,__xP:null,__xQ:null,__xO:null,_applySelectionMode:function(P){this.resetSelection();
},setBatchMode:function(M){if(M){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__xR){this.__xR=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__xP;
},_setAnchorSelectionIndex:function(I){this.__xP=I;
},getLeadSelectionIndex:function(){return this.__xQ;
},_setLeadSelectionIndex:function(Q){this.__xQ=Q;
},_getSelectedRangeArr:function(){return this.__xO;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
this.resetSelection();
},isSelectionEmpty:function(){return this.__xO.length==0;
},getSelectedCount:function(){var U=0;

for(var i=0;i<this.__xO.length;i++){var T=this.__xO[i];
U+=T.maxIndex-T.minIndex+1;
}return U;
},isSelectedIndex:function(a){for(var i=0;i<this.__xO.length;i++){var b=this.__xO[i];

if(a>=b.minIndex&&a<=b.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var q=[];

for(var i=0;i<this.__xO.length;i++){q.push({minIndex:this.__xO[i].minIndex,maxIndex:this.__xO[i].maxIndex});
}return q;
},iterateSelection:function(N,O){for(var i=0;i<this.__xO.length;i++){for(var j=this.__xO[i].minIndex;j<=this.__xO[i].maxIndex;j++){N.call(O,j);
}}},setSelectionInterval:function(J,K){var L=arguments.callee.self;

switch(this.getSelectionMode()){case L.NO_SELECTION:return;
case L.SINGLE_SELECTION:if(this.isSelectedIndex(K)){return;
}J=K;
break;
case L.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=J;i<=K;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(J,K);
this._fireChangeSelection();
},addSelectionInterval:function(c,d){var f=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case f.NO_SELECTION:return;
case f.MULTIPLE_INTERVAL_SELECTION:case f.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(c,d);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(c,d);
break;
}},removeSelectionInterval:function(g,h){this.__xP=g;
this.__xQ=h;
var k=Math.min(g,h);
var m=Math.max(g,h);
for(var i=0;i<this.__xO.length;i++){var o=this.__xO[i];

if(o.minIndex>m){break;
}else if(o.maxIndex>=k){var p=(o.minIndex>=k)&&(o.minIndex<=m);
var n=(o.maxIndex>=k)&&(o.maxIndex<=m);

if(p&&n){this.__xO.splice(i,1);
i--;
}else if(p){o.minIndex=m+1;
}else if(n){o.maxIndex=k-1;
}else{var l={minIndex:m+1,maxIndex:o.maxIndex};
this.__xO.splice(i+1,0,l);
o.maxIndex=k-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__xO=[];
this.__xP=-1;
this.__xQ=-1;
},_clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
this._resetSelection();
},_addSelectionInterval:function(B,C){this.__xP=B;
this.__xQ=C;
var D=Math.min(B,C);
var F=Math.max(B,C);
var E=0;

for(;E<this.__xO.length;E++){var G=this.__xO[E];

if(G.minIndex>D){break;
}}this.__xO.splice(E,0,{minIndex:D,maxIndex:F});
var H=this.__xO[0];

for(var i=1;i<this.__xO.length;i++){var G=this.__xO[i];

if(H.maxIndex+1>=G.minIndex){H.maxIndex=Math.max(H.maxIndex,G.maxIndex);
this.__xO.splice(i,1);
i--;
}else{H=G;
}}},_dumpRanges:function(){var R=u;

for(var i=0;i<this.__xO.length;i++){var S=this.__xO[i];
R+=x+S.minIndex+A+S.maxIndex+w;
}this.debug(R);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__xR=true;
}else{this.fireEvent(z);
}}},destruct:function(){this.__xO=null;
}});
})();
(function(){var e="qx.ui.table.IRowRenderer";
qx.Interface.define(e,{members:{updateDataRowElement:function(a,b){},getRowHeightStyle:function(d){},createRowStyle:function(c){},getRowClass:function(f){}}});
})();
(function(){var v="",u="table-row-background-even",t="table-row-background-selected",s="table-row",r="background-color:",q="table-row-background-focused",p=';border-bottom: 1px solid ',o=';color:',n="table-row-selected",m="table-row-background-odd",f="default",l="table-row-background-focused-selected",i="qx.ui.table.rowrenderer.Default",e="table-row-line",d="'",h="height:",g=";",j="px;",c="1px solid ",k="Boolean";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){arguments.callee.base.call(this);
this.__xS=v;
this.__xS={};
this.__xT={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(f));
var w=qx.theme.manager.Color.getInstance();
this.__xT.bgcolFocusedSelected=w.resolve(l);
this.__xT.bgcolFocused=w.resolve(q);
this.__xT.bgcolSelected=w.resolve(t);
this.__xT.bgcolEven=w.resolve(u);
this.__xT.bgcolOdd=w.resolve(m);
this.__xT.colSelected=w.resolve(n);
this.__xT.colNormal=w.resolve(s);
this.__xT.horLine=w.resolve(e);
},properties:{highlightFocusRow:{check:k,init:true}},members:{__xT:null,__xU:null,__xS:null,_insetY:1,_renderFont:function(x){if(x){this.__xU=x.getStyles();
this.__xS=qx.bom.element.Style.compile(this.__xU);
this.__xS=this.__xS.replace(/"/g,d);
}else{this.__xS=v;
this.__xU=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(y,z){var B=this.__xU;
var A=z.style;
qx.bom.element.Style.setStyles(z,B);

if(y.focusedRow&&this.getHighlightFocusRow()){A.backgroundColor=y.selected?this.__xT.bgcolFocusedSelected:this.__xT.bgcolFocused;
}else{if(y.selected){A.backgroundColor=this.__xT.bgcolSelected;
}else{A.backgroundColor=(y.row%2==0)?this.__xT.bgcolEven:this.__xT.bgcolOdd;
}}A.color=y.selected?this.__xT.colSelected:this.__xT.colNormal;
A.borderBottom=c+this.__xT.horLine;
},getRowHeightStyle:function(b){if(qx.bom.client.Feature.CONTENT_BOX){b-=this._insetY;
}return h+b+j;
},createRowStyle:function(C){var D=[];
D.push(g);
D.push(this.__xS);
D.push(r);

if(C.focusedRow&&this.getHighlightFocusRow()){D.push(C.selected?this.__xT.bgcolFocusedSelected:this.__xT.bgcolFocused);
}else{if(C.selected){D.push(this.__xT.bgcolSelected);
}else{D.push((C.row%2==0)?this.__xT.bgcolEven:this.__xT.bgcolOdd);
}}D.push(o);
D.push(C.selected?this.__xT.colSelected:this.__xT.colNormal);
D.push(p,this.__xT.horLine);
return D.join(v);
},getRowClass:function(a){return v;
}},destruct:function(){this.__xT=this.__xU=this.__xS=null;
}});
})();
(function(){var h="hovered",g="__xV",f="qx.ui.table.pane.Header";
qx.Class.define(f,{extend:qx.ui.core.Widget,construct:function(c){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__xV=c;
},members:{__xV:null,__xW:null,__xX:null,getPaneScroller:function(){return this.__xV;
},getTable:function(){return this.__xV.getTable();
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(w,y){var z=this.getHeaderWidgetAtColumn(w);

if(z!=null){z.setWidth(y);
}},setMouseOverColumn:function(i){if(i!=this.__xX){if(this.__xX!=null){var j=this.getHeaderWidgetAtColumn(this.__xX);

if(j!=null){j.removeState(h);
}}
if(i!=null){this.getHeaderWidgetAtColumn(i).addState(h);
}this.__xX=i;
}},getHeaderWidgetAtColumn:function(d){var e=this.getPaneScroller().getTablePaneModel().getX(d);
return this._getChildren()[e];
},showColumnMoveFeedback:function(A,x){var E=this.getContainerLocation();

if(this.__xW==null){var B=this.getPaneScroller().getTablePaneModel().getX(A);
var D=this._getChildren()[B];
var F=this.getTable().getTableModel();
var H=this.getTable().getTableColumnModel();
var I={xPos:B,col:A,name:F.getColumnName(A)};
var G=H.getHeaderCellRenderer(A);
var C=G.createHeaderCell(I);
var J=D.getBounds();
C.setWidth(J.width);
C.setHeight(J.height);
C.setZIndex(1000000);
C.setOpacity(0.8);
C.setLayoutProperties({top:E.top});
this.getApplicationRoot().add(C);
this.__xW=C;
}this.__xW.setLayoutProperties({left:E.left+x});
this.__xW.show();
},hideColumnMoveFeedback:function(){if(this.__xW!=null){this.__xW.destroy();
this.__xW=null;
}},isShowingColumnMoveFeedback:function(){return this.__xW!=null;
},_updateContent:function(k){var p=this.getTable().getTableModel();
var s=this.getTable().getTableColumnModel();
var t=this.getPaneScroller().getTablePaneModel();
var v=this._getChildren();
var q=t.getColumnCount();
var l=p.getSortColumnIndex();
if(k){this._cleanUpCells();
}var m={};
m.sortedAscending=p.isSortAscending();

for(var x=0;x<q;x++){var o=t.getColumnAtX(x);

if(o===undefined){continue;
}var u=s.getColumnWidth(o);
var r=s.getHeaderCellRenderer(o);
m.xPos=x;
m.col=o;
m.name=p.getColumnName(o);
m.editable=p.isColumnEditable(o);
m.sorted=(o==l);
var n=v[x];
if(n==null){n=r.createHeaderCell(m);
n.set({width:u});
this._add(n);
}else{r.updateHeaderCell(m,n);
}}},_cleanUpCells:function(){var b=this._getChildren();

for(var x=b.length-1;x>=0;x--){var a=b[x];
a.destroy();
}}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var I="_applyLayoutChange",H="left",G="center",F="top",E="Decorator",D="middle",C="_applyReversed",B="bottom",A="Boolean",z="right",x="Integer",y="qx.ui.layout.HBox";
qx.Class.define(y,{extend:qx.ui.layout.Abstract,construct:function(J,K,L){arguments.callee.base.call(this);

if(J){this.setSpacing(J);
}
if(K){this.setAlignX(K);
}
if(L){this.setSeparator(L);
}},properties:{alignX:{check:[H,G,z],init:H,apply:I},alignY:{check:[F,D,B],init:F,apply:I},spacing:{check:x,init:0,apply:I},separator:{check:E,nullable:true,apply:I},reversed:{check:A,init:false,apply:C}},members:{__kY:null,__la:null,__lb:null,__lc:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__ld:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__kY&&this.__kY.length!=length&&this.__la&&this.__kY;
var u;
var s=r?this.__kY:new Array(length);
var v=r?this.__la:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}else{v[i]=0;
}}if(!r){this.__kY=s;
this.__la=v;
}this.__lb=t;
this.__lc=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(M,N){if(this._invalidChildrenCache){this.__ld();
}var T=this.__lc;
var length=T.length;
var bd=qx.ui.layout.Util;
var bc=this.getSpacing();
var bg=this.getSeparator();

if(bg){var Q=bd.computeHorizontalSeparatorGaps(T,bc,bg);
}else{var Q=bd.computeHorizontalGaps(T,bc,true);
}var i,O,ba,Y;
var bf=[];
var U=Q;

for(i=0;i<length;i+=1){Y=this.__kY[i];
ba=Y!=null?Math.floor((M-Q)*Y):T[i].getSizeHint().width;
bf.push(ba);
U+=ba;
}if(this.__lb&&U!=M){var W={};
var bb,be;

for(i=0;i<length;i+=1){bb=this.__la[i];

if(bb>0){V=T[i].getSizeHint();
W[i]={min:V.minWidth,value:bf[i],max:V.maxWidth,flex:bb};
}}var R=bd.computeFlexOffsets(W,M,U);

for(i in R){be=R[i].offset;
bf[i]+=be;
U+=be;
}}var bk=T[0].getMarginLeft();
if(U<M&&this.getAlignX()!=H){bk=M-U;

if(this.getAlignX()===G){bk=Math.round(bk/2);
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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ld();
}var g=qx.ui.layout.Util;
var q=this.__lc;
var a=0,h=0,e=0;
var d=0,f=0;
var n,b,p;
for(var i=0,l=q.length;i<l;i+=1){n=q[i];
b=n.getSizeHint();
h+=b.width;
var m=this.__la[i];
var c=this.__kY[i];

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
}},destruct:function(){this.__kY=this.__la=this.__lc=null;
}});
})();
(function(){var bC="",bB="Number",bA='</div>',bz='" ',by="paneUpdated",bx='<div>',bw="</div>",bv="overflow: hidden;",bu="qx.event.type.Data",bt="paneReloadsData",bU="div",bT='style="',bS="_applyMaxCacheLines",bR="qx.ui.table.pane.Pane",bQ="width: 100%;",bP="qx.event.type.Event",bO="_applyVisibleRowCount",bN='>',bM="line-height: ",bL="appear",bJ='class="',bK="width:100%;",bH="px;",bI='<div ',bF="'>",bG="_applyFirstVisibleRow",bD="<div style='",bE=";position:relative;";
qx.Class.define(bR,{extend:qx.ui.core.Widget,construct:function(ce){arguments.callee.base.call(this);
this.__xY=ce;
this.__ya=0;
this.__yb=0;
this.__yc=[];
},events:{"paneReloadsData":bu,"paneUpdated":bP},properties:{firstVisibleRow:{check:bB,init:0,apply:bG},visibleRowCount:{check:bB,init:0,apply:bO},maxCacheLines:{check:bB,init:1000,apply:bS},allowShrinkX:{refine:true,init:false}},members:{__yb:null,__ya:null,__xY:null,__yd:null,__ye:null,__yf:null,__yc:null,__yg:0,_applyFirstVisibleRow:function(bX,bY){this.updateContent(false,bX-bY);
},_applyVisibleRowCount:function(ca,cb){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__xY;
},getTable:function(){return this.__xY.getTable();
},setFocusedCell:function(cf,cg,ch){if(cf!=this.__yf||cg!=this.__ye){var ci=this.__ye;
this.__yf=cf;
this.__ye=cg;
if(cg!=ci&&!ch){if(ci!==null){this.updateContent(false,null,ci,true);
}
if(cg!==null){this.updateContent(false,null,cg,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(bV,bW){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(a,b,c,d){this.__yh();
var f=this.getFirstVisibleRow();
var e=this.getVisibleRowCount();

if(b==-1||b>=f&&a<f+e){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(cc,cd){if(this.__yg>=cc&&cc!==-1){this.__yh();
}},__yh:function(){this.__yc=[];
this.__yg=0;
},__yi:function(bq,br,bs){if(!br&&!bs&&this.__yc[bq]){return this.__yc[bq];
}else{return null;
}},__yj:function(t,u,v,w){var z=this.getMaxCacheLines();

if(!v&&!w&&!this.__yc[t]&&z>0){this._applyMaxCacheLines(z);
this.__yc[t]=u;
this.__yg+=1;
}},updateContent:function(cj,ck,cl,cm){if(cj){this.__yh();
}if(ck&&Math.abs(ck)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(ck);
}else if(cm&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(cl);
}else{this._updateAllRows();
}},_updateRowStyles:function(h){var m=this.getContentElement().getDomElement();

if(!m||!m.firstChild){this._updateAllRows();
return;
}var q=this.getTable();
var k=q.getSelectionModel();
var n=q.getTableModel();
var r=q.getDataRowRenderer();
var l=m.firstChild.childNodes;
var p={table:q};
var s=this.getFirstVisibleRow();
var y=0;
var j=l.length;

if(h!=null){var o=h-s;

if(o>=0&&o<j){s=h;
y=o;
j=o+1;
}else{return;
}}
for(;y<j;y++,s++){p.row=s;
p.selected=k.isSelectedIndex(s);
p.focusedRow=(this.__ye==s);
p.rowData=n.getRowData(s);
r.updateDataRowElement(p,l[y]);
}},_getRowsHtml:function(N,O){var U=this.getTable();
var X=U.getSelectionModel();
var R=U.getTableModel();
var S=U.getTableColumnModel();
var bm=this.getPaneScroller().getTablePaneModel();
var bd=U.getDataRowRenderer();
R.prefetchRows(N,N+O-1);
var bj=U.getRowHeight();
var bl=bm.getColumnCount();
var T=0;
var Q=[];
for(var x=0;x<bl;x++){var bo=bm.getColumnAtX(x);
var W=S.getColumnWidth(bo);
Q.push({col:bo,xPos:x,editable:R.isColumnEditable(bo),focusedCol:this.__yf==bo,styleLeft:T,styleWidth:W});
T+=W;
}var bn=[];
var bp=false;

for(var V=N;V<N+O;V++){var Y=X.isSelectedIndex(V);
var bc=(this.__ye==V);
var bg=this.__yi(V,Y,bc);

if(bg){bn.push(bg);
continue;
}var bf=[];
var bi={table:U};
bi.styleHeight=bj;
bi.row=V;
bi.selected=Y;
bi.focusedRow=bc;
bi.rowData=R.getRowData(V);

if(!bi.rowData){bp=true;
}bf.push(bI);
var P=bd.getRowClass(bi);

if(P){bf.push(bJ,P,bz);
}var be=bd.createRowStyle(bi);
be+=bE+bd.getRowHeightStyle(bj)+bK;

if(be){bf.push(bT,be,bz);
}bf.push(bN);

for(var x=0;x<bl;x++){var ba=Q[x];

for(var bk in ba){bi[bk]=ba[bk];
}var bo=bi.col;
bi.value=R.getValue(bo,V);
var bb=S.getDataCellRenderer(bo);
bb.createDataCellHtml(bi,bf);
}bf.push(bA);
var bh=bf.join(bC);
this.__yj(V,bh,Y,bc);
bn.push(bh);
}this.fireDataEvent(bt,bp);
return bn.join(bC);
},_scrollContent:function(A){var B=this.getContentElement().getDomElement();

if(!(B&&B.firstChild)){this._updateAllRows();
return;
}var K=B.firstChild;
var C=K.childNodes;
var I=this.getVisibleRowCount();
var H=this.getFirstVisibleRow();
var F=this.getTable().getTableModel();
var L=0;
L=F.getRowCount();
if(H+I>L){this._updateAllRows();
return;
}var M=A<0?I+A:0;
var D=A<0?0:I-A;

for(i=Math.abs(A)-1;i>=0;i--){var G=C[M];

try{K.removeChild(G);
}catch(g){break;
}}if(!this.__yd){this.__yd=document.createElement(bU);
}var J=bx;
J+=this._getRowsHtml(H+D,Math.abs(A));
J+=bA;
this.__yd.innerHTML=J;
var E=this.__yd.firstChild.childNodes;
if(A>0){for(var i=E.length-1;i>=0;i--){var G=E[0];
K.appendChild(G);
}}else{for(var i=E.length-1;i>=0;i--){var G=E[E.length-1];
K.insertBefore(G,K.firstChild);
}}if(this.__ye!==null){this._updateRowStyles(this.__ye-A);
this._updateRowStyles(this.__ye);
}this.fireEvent(by);
},_updateAllRows:function(){var cq=this.getContentElement().getDomElement();

if(!cq){this.addListenerOnce(bL,arguments.callee,this);
return;
}var cw=this.getTable();
var ct=cw.getTableModel();
var cv=this.getPaneScroller().getTablePaneModel();
var cu=cv.getColumnCount();
var cn=cw.getRowHeight();
var cr=this.getFirstVisibleRow();
var co=this.getVisibleRowCount();
var cx=ct.getRowCount();

if(cr+co>cx){co=Math.max(0,cx-cr);
}var cp=cv.getTotalWidth();
var cs;
if(co>0){cs=[bD,bQ,(cw.getForceLineHeight()?bM+cn+bH:bC),bv,bF,this._getRowsHtml(cr,co),bw];
}else{cs=[];
}var cy=cs.join(bC);
cq.innerHTML=cy;
this.setWidth(cp);
this.__ya=cu;
this.__yb=co;
this.fireEvent(by);
}},destruct:function(){this.__yd=this.__xY=this.__yc=null;
}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(b){return true;
},updateHeaderCell:function(c,d){return true;
}}});
})();
(function(){var b="qx.ui.table.headerrenderer.Default",a="String";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:a,init:null,nullable:true}},members:{createHeaderCell:function(g){var h=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(g,h);
return h;
},updateHeaderCell:function(c,d){var e=qx.ui.table.headerrenderer.Default;
if(c.name&&c.name.translate){d.setLabel(c.name.translate());
}else{d.setLabel(c.name);
}var f=d.getToolTip();

if(this.getToolTip()!=null){if(f==null){f=new qx.ui.tooltip.ToolTip(this.getToolTip());
d.setToolTip(f);
qx.util.DisposeUtil.disposeTriggeredBy(f,d);
}else{f.setLabel(this.getToolTip());
}}c.sorted?d.addState(e.STATE_SORTED):d.removeState(e.STATE_SORTED);
c.sortedAscending?d.addState(e.STATE_SORTED_ASCENDING):d.removeState(e.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var k="icon",j="label",i="String",h="sort-icon",g="_applySortIcon",f="_applyIcon",e="table-header-cell",d="qx.ui.table.headerrenderer.HeaderCell",c="_applyLabel";
qx.Class.define(d,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var l=new qx.ui.layout.Grid();
l.setRowFlex(0,1);
l.setColumnFlex(1,1);
l.setColumnFlex(2,1);
this.setLayout(l);
},properties:{appearance:{refine:true,init:e},label:{check:i,init:null,nullable:true,apply:c},sortIcon:{check:i,init:null,nullable:true,apply:g,themeable:true},icon:{check:i,init:null,nullable:true,apply:f}},members:{_applyLabel:function(q,r){if(q){this._showChildControl(j).setValue(q);
}else{this._excludeChildControl(j);
}},_applySortIcon:function(m,n){if(m){this._showChildControl(h).setSource(m);
}else{this._excludeChildControl(h);
}},_applyIcon:function(o,p){if(o){this._showChildControl(k).setSource(o);
}else{this._excludeChildControl(k);
}},_createChildControlImpl:function(a){var b;

switch(a){case j:b=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(b,{row:0,column:1});
break;
case h:b=new qx.ui.basic.Image(this.getSortIcon());
b.setAnonymous(true);
this._add(b,{row:0,column:2});
break;
case k:b=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(b,{row:0,column:0});
break;
}return b||arguments.callee.base.call(this,a);
}}});
})();
(function(){var bw="left",bv="top",bu="_applyLayoutChange",bt="hAlign",bs="flex",br="vAlign",bq="Integer",bp="minWidth",bo="width",bn="minHeight",bk="qx.ui.layout.Grid",bm="height",bl="maxHeight",bj="maxWidth";
qx.Class.define(bk,{extend:qx.ui.layout.Abstract,construct:function(dC,dD){arguments.callee.base.call(this);
this.__nG=[];
this.__nH=[];

if(dC){this.setSpacingX(dC);
}
if(dD){this.setSpacingY(dD);
}},properties:{spacingX:{check:bq,init:0,apply:bu},spacingY:{check:bq,init:0,apply:bu}},members:{__nI:null,__nG:null,__nH:null,__nJ:null,__nK:null,__nL:null,__nM:null,__nN:null,__nO:null,verifyLayoutProperty:null,__nP:function(){var cq=[];
var cp=[];
var cr=[];
var cn=-1;
var cm=-1;
var ct=this._getLayoutChildren();

for(var i=0,l=ct.length;i<l;i++){var co=ct[i];
var cs=co.getLayoutProperties();
var cu=cs.row;
var cl=cs.column;
cs.colSpan=cs.colSpan||1;
cs.rowSpan=cs.rowSpan||1;
if(cu==null||cl==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+co+"' must be defined!");
}
if(cq[cu]&&cq[cu][cl]){throw new Error("Cannot add widget '"+co+"'!. "+"There is already a widget '"+cq[cu][cl]+"' in this cell ("+cu+", "+cl+")");
}
for(var x=cl;x<cl+cs.colSpan;x++){for(var y=cu;y<cu+cs.rowSpan;y++){if(cq[y]==undefined){cq[y]=[];
}cq[y][x]=co;
cm=Math.max(cm,x);
cn=Math.max(cn,y);
}}
if(cs.rowSpan>1){cr.push(co);
}
if(cs.colSpan>1){cp.push(co);
}}for(var y=0;y<=cn;y++){if(cq[y]==undefined){cq[y]=[];
}}this.__nI=cq;
this.__nJ=cp;
this.__nK=cr;
this.__nL=cn;
this.__nM=cm;
this.__nN=null;
this.__nO=null;
delete this._invalidChildrenCache;
},_setRowData:function(dG,dH,dI){var dJ=this.__nG[dG];

if(!dJ){this.__nG[dG]={};
this.__nG[dG][dH]=dI;
}else{dJ[dH]=dI;
}},_setColumnData:function(bS,bT,bU){var bV=this.__nH[bS];

if(!bV){this.__nH[bS]={};
this.__nH[bS][bT]=bU;
}else{bV[bT]=bU;
}},setSpacing:function(ea){this.setSpacingY(ea);
this.setSpacingX(ea);
return this;
},setColumnAlign:function(P,Q,R){{};
this._setColumnData(P,bt,Q);
this._setColumnData(P,br,R);
this._applyLayoutChange();
return this;
},getColumnAlign:function(A){var B=this.__nH[A]||{};
return {vAlign:B.vAlign||bv,hAlign:B.hAlign||bw};
},setRowAlign:function(e,f,g){{};
this._setRowData(e,bt,f);
this._setRowData(e,br,g);
this._applyLayoutChange();
return this;
},getRowAlign:function(U){var V=this.__nG[U]||{};
return {vAlign:V.vAlign||bv,hAlign:V.hAlign||bw};
},getCellWidget:function(Y,ba){if(this._invalidChildrenCache){this.__nP();
}var Y=this.__nI[Y]||{};
return Y[ba]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__nP();
}return this.__nL+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__nP();
}return this.__nM+1;
},getCellAlign:function(bb,bc){var bi=bv;
var bg=bw;
var bh=this.__nG[bb];
var be=this.__nH[bc];
var bd=this.__nI[bb][bc];

if(bd){var bf={vAlign:bd.getAlignY(),hAlign:bd.getAlignX()};
}else{bf={};
}if(bf.vAlign){bi=bf.vAlign;
}else if(bh&&bh.vAlign){bi=bh.vAlign;
}else if(be&&be.vAlign){bi=be.vAlign;
}if(bf.hAlign){bg=bf.hAlign;
}else if(be&&be.hAlign){bg=be.hAlign;
}else if(bh&&bh.hAlign){bg=bh.hAlign;
}return {vAlign:bi,hAlign:bg};
},setColumnFlex:function(cx,cy){this._setColumnData(cx,bs,cy);
this._applyLayoutChange();
return this;
},getColumnFlex:function(c){var d=this.__nH[c]||{};
return d.flex!==undefined?d.flex:0;
},setRowFlex:function(bL,bM){this._setRowData(bL,bs,bM);
this._applyLayoutChange();
return this;
},getRowFlex:function(bW){var bX=this.__nG[bW]||{};
var bY=bX.flex!==undefined?bX.flex:0;
return bY;
},setColumnMaxWidth:function(cv,cw){this._setColumnData(cv,bj,cw);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(W){var X=this.__nH[W]||{};
return X.maxWidth!==undefined?X.maxWidth:Infinity;
},setColumnWidth:function(N,O){this._setColumnData(N,bo,O);
this._applyLayoutChange();
return this;
},getColumnWidth:function(a){var b=this.__nH[a]||{};
return b.width!==undefined?b.width:null;
},setColumnMinWidth:function(dK,dL){this._setColumnData(dK,bp,dL);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(cK){var cL=this.__nH[cK]||{};
return cL.minWidth||0;
},setRowMaxHeight:function(L,M){this._setRowData(L,bl,M);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(C){var D=this.__nG[C]||{};
return D.maxHeight||Infinity;
},setRowHeight:function(dE,dF){this._setRowData(dE,bm,dF);
this._applyLayoutChange();
return this;
},getRowHeight:function(dX){var dY=this.__nG[dX]||{};
return dY.height!==undefined?dY.height:null;
},setRowMinHeight:function(S,T){this._setRowData(S,bn,T);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(dt){var du=this.__nG[dt]||{};
return du.minHeight||0;
},__nQ:function(bN){var bR=bN.getSizeHint();
var bQ=bN.getMarginLeft()+bN.getMarginRight();
var bP=bN.getMarginTop()+bN.getMarginBottom();
var bO={height:bR.height+bP,width:bR.width+bQ,minHeight:bR.minHeight+bP,minWidth:bR.minWidth+bQ,maxHeight:bR.maxHeight+bP,maxWidth:bR.maxWidth+bQ};
return bO;
},_fixHeightsRowSpan:function(bx){var bI=this.getSpacingY();

for(var i=0,l=this.__nK.length;i<l;i++){var bA=this.__nK[i];
var bC=this.__nQ(bA);
var bD=bA.getLayoutProperties();
var bz=bD.row;
var bG=bI*(bD.rowSpan-1);
var by=bG;
var bF={};

for(var j=0;j<bD.rowSpan;j++){var bK=bD.row+j;
var bB=bx[bK];
var bJ=this.getRowFlex(bK);

if(bJ>0){bF[bK]={min:bB.minHeight,value:bB.height,max:bB.maxHeight,flex:bJ};
}bG+=bB.height;
by+=bB.minHeight;
}if(bG<bC.height){var bH=qx.ui.layout.Util.computeFlexOffsets(bF,bC.height,bG);

for(var j=0;j<bD.rowSpan;j++){var bE=bH[bz+j]?bH[bz+j].offset:0;
bx[bz+j].height+=bE;
}}if(by<bC.minHeight){var bH=qx.ui.layout.Util.computeFlexOffsets(bF,bC.minHeight,by);

for(var j=0;j<bD.rowSpan;j++){var bE=bH[bz+j]?bH[bz+j].offset:0;
bx[bz+j].minHeight+=bE;
}}}},_fixWidthsColSpan:function(h){var o=this.getSpacingX();

for(var i=0,l=this.__nJ.length;i<l;i++){var k=this.__nJ[i];
var n=this.__nQ(k);
var q=k.getLayoutProperties();
var m=q.column;
var w=o*(q.colSpan-1);
var p=w;
var r={};
var t;

for(var j=0;j<q.colSpan;j++){var z=q.column+j;
var v=h[z];
var u=this.getColumnFlex(z);
if(u>0){r[z]={min:v.minWidth,value:v.width,max:v.maxWidth,flex:u};
}w+=v.width;
p+=v.minWidth;
}if(w<n.width){var s=qx.ui.layout.Util.computeFlexOffsets(r,n.width,w);

for(var j=0;j<q.colSpan;j++){t=s[m+j]?s[m+j].offset:0;
h[m+j].width+=t;
}}if(p<n.minWidth){var s=qx.ui.layout.Util.computeFlexOffsets(r,n.minWidth,p);

for(var j=0;j<q.colSpan;j++){t=s[m+j]?s[m+j].offset:0;
h[m+j].minWidth+=t;
}}}},_getRowHeights:function(){if(this.__nN!=null){return this.__nN;
}var dV=[];
var dO=this.__nL;
var dN=this.__nM;

for(var dW=0;dW<=dO;dW++){var dP=0;
var dR=0;
var dQ=0;

for(var dU=0;dU<=dN;dU++){var dM=this.__nI[dW][dU];

if(!dM){continue;
}var dS=dM.getLayoutProperties().rowSpan||0;

if(dS>1){continue;
}var dT=this.__nQ(dM);

if(this.getRowFlex(dW)>0){dP=Math.max(dP,dT.minHeight);
}else{dP=Math.max(dP,dT.height);
}dR=Math.max(dR,dT.height);
}var dP=Math.max(dP,this.getRowMinHeight(dW));
var dQ=this.getRowMaxHeight(dW);

if(this.getRowHeight(dW)!==null){var dR=this.getRowHeight(dW);
}else{var dR=Math.max(dP,Math.min(dR,dQ));
}dV[dW]={minHeight:dP,height:dR,maxHeight:dQ};
}
if(this.__nK.length>0){this._fixHeightsRowSpan(dV);
}this.__nN=dV;
return dV;
},_getColWidths:function(){if(this.__nO!=null){return this.__nO;
}var cD=[];
var cA=this.__nM;
var cC=this.__nL;

for(var cI=0;cI<=cA;cI++){var cG=0;
var cF=0;
var cB=Infinity;

for(var cJ=0;cJ<=cC;cJ++){var cz=this.__nI[cJ][cI];

if(!cz){continue;
}var cE=cz.getLayoutProperties().colSpan||0;

if(cE>1){continue;
}var cH=this.__nQ(cz);

if(this.getColumnFlex(cI)>0){cF=Math.max(cF,cH.minWidth);
}else{cF=Math.max(cF,cH.width);
}cG=Math.max(cG,cH.width);
}var cF=Math.max(cF,this.getColumnMinWidth(cI));
var cB=this.getColumnMaxWidth(cI);

if(this.getColumnWidth(cI)!==null){var cG=this.getColumnWidth(cI);
}else{var cG=Math.max(cF,Math.min(cG,cB));
}cD[cI]={minWidth:cF,width:cG,maxWidth:cB};
}
if(this.__nJ.length>0){this._fixWidthsColSpan(cD);
}this.__nO=cD;
return cD;
},_getColumnFlexOffsets:function(E){var F=this.getSizeHint();
var J=E-F.width;

if(J==0){return {};
}var H=this._getColWidths();
var G={};

for(var i=0,l=H.length;i<l;i++){var K=H[i];
var I=this.getColumnFlex(i);

if((I<=0)||(K.width==K.maxWidth&&J>0)||(K.width==K.minWidth&&J<0)){continue;
}G[i]={min:K.minWidth,value:K.width,max:K.maxWidth,flex:I};
}return qx.ui.layout.Util.computeFlexOffsets(G,E,F.width);
},_getRowFlexOffsets:function(dv){var dw=this.getSizeHint();
var dz=dv-dw.height;

if(dz==0){return {};
}var dA=this._getRowHeights();
var dx={};

for(var i=0,l=dA.length;i<l;i++){var dB=dA[i];
var dy=this.getRowFlex(i);

if((dy<=0)||(dB.height==dB.maxHeight&&dz>0)||(dB.height==dB.minHeight&&dz<0)){continue;
}dx[i]={min:dB.minHeight,value:dB.height,max:dB.maxHeight,flex:dy};
}return qx.ui.layout.Util.computeFlexOffsets(dx,dv,dw.height);
},renderLayout:function(cM,cN){if(this._invalidChildrenCache){this.__nP();
}var dc=qx.ui.layout.Util;
var cP=this.getSpacingX();
var cV=this.getSpacingY();
var dh=this._getColWidths();
var dg=this._getColumnFlexOffsets(cM);
var cQ=[];
var dj=this.__nM;
var cO=this.__nL;
var di;

for(var dk=0;dk<=dj;dk++){di=dg[dk]?dg[dk].offset:0;
cQ[dk]=dh[dk].width+di;
}var cY=this._getRowHeights();
var db=this._getRowFlexOffsets(cN);
var dr=[];

for(var cW=0;cW<=cO;cW++){di=db[cW]?db[cW].offset:0;
dr[cW]=cY[cW].height+di;
}var ds=0;

for(var dk=0;dk<=dj;dk++){var top=0;

for(var cW=0;cW<=cO;cW++){var de=this.__nI[cW][dk];
if(!de){top+=dr[cW]+cV;
continue;
}var cR=de.getLayoutProperties();
if(cR.row!==cW||cR.column!==dk){top+=dr[cW]+cV;
continue;
}var dq=cP*(cR.colSpan-1);

for(var i=0;i<cR.colSpan;i++){dq+=cQ[dk+i];
}var df=cV*(cR.rowSpan-1);

for(var i=0;i<cR.rowSpan;i++){df+=dr[cW+i];
}var cS=de.getSizeHint();
var dn=de.getMarginTop();
var dd=de.getMarginLeft();
var da=de.getMarginBottom();
var cU=de.getMarginRight();
var cX=Math.max(cS.minWidth,Math.min(dq-dd-cU,cS.maxWidth));
var dp=Math.max(cS.minHeight,Math.min(df-dn-da,cS.maxHeight));
var dl=this.getCellAlign(cW,dk);
var dm=ds+dc.computeHorizontalAlignOffset(dl.hAlign,cX,dq,dd,cU);
var cT=top+dc.computeVerticalAlignOffset(dl.vAlign,dp,df,dn,da);
de.renderLayout(dm,cT,cX,dp);
top+=dr[cW]+cV;
}ds+=cQ[dk]+cP;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__nO=null;
this.__nN=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__nP();
}var ce=this._getColWidths();
var cg=0,ch=0;

for(var i=0,l=ce.length;i<l;i++){var ci=ce[i];

if(this.getColumnFlex(i)>0){cg+=ci.minWidth;
}else{cg+=ci.width;
}ch+=ci.width;
}var cj=this._getRowHeights();
var cc=0,cf=0;

for(var i=0,l=cj.length;i<l;i++){var ck=cj[i];

if(this.getRowFlex(i)>0){cc+=ck.minHeight;
}else{cc+=ck.height;
}cf+=ck.height;
}var cb=this.getSpacingX()*(ce.length-1);
var ca=this.getSpacingY()*(cj.length-1);
var cd={minWidth:cg+cb,width:ch+cb,minHeight:cc+ca,height:cf+ca};
return cd;
}},destruct:function(){this.__nI=this.__nG=this.__nH=this.__nJ=this.__nK=this.__nO=this.__nN=null;
}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var k="",j="px;",i=".qooxdoo-table-cell {",h="qooxdoo-table-cell",g='" ',f="nowrap",e="default",d="qx.client",c="}",b="width:",H=".qooxdoo-table-cell-right { text-align:right } ",G="0px 6px",F='<div class="',E="0px",D="height:",C="1px solid ",B=".qooxdoo-table-cell-bold { font-weight:bold } ",A="table-row-line",z='>',y="mshtml",r='</div>',s="ellipsis",p="content-box",q='left:',n="qx.ui.table.cellrenderer.Abstract",o='" style="',l="abstract",m="none",t="hidden",u="} ",w='px;',v=".qooxdoo-table-cell-italic { font-style:italic} ",x="absolute";
qx.Class.define(n,{type:l,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
var I=qx.ui.table.cellrenderer.Abstract;

if(!I.__yk){var K=qx.theme.manager.Color.getInstance();
I.__yk=arguments.callee.self;
var J=i+
qx.bom.element.Style.compile({position:x,top:E,overflow:t,whiteSpace:f,borderRight:C+K.resolve(A),padding:G,cursor:e,textOverflow:s,userSelect:m})+u+H+v+B;

if(!qx.core.Variant.isSet(d,y)){J+=i+qx.bom.element.BoxSizing.compile(p)+c;
}I.__yk.stylesheet=qx.bom.Stylesheet.createElement(J);
}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(a){return h;
},_getCellStyle:function(L){return L.style||k;
},_getCellAttributes:function(U){return k;
},_getContentHtml:function(R){return R.value||k;
},_getCellSizeStyle:function(M,N,O,P){var Q=k;

if(qx.bom.client.Feature.CONTENT_BOX){M-=O;
N-=P;
}Q+=b+Math.max(M,0)+j;
Q+=D+Math.max(N,0)+j;
return Q;
},createDataCellHtml:function(S,T){T.push(F,this._getCellClass(S),o,q,S.styleLeft,w,this._getCellSizeStyle(S.styleWidth,S.styleHeight,this._insetX,this._insetY),this._getCellStyle(S),g,this._getCellAttributes(S),z+this._getContentHtml(S),r);
}}});
})();
(function(){var i="",h="number",g="Boolean",f="qx.ui.table.cellrenderer.Default",e=" qooxdoo-table-cell-bold",d=" qooxdoo-table-cell-right",c=" qooxdoo-table-cell-italic",b="string";
qx.Class.define(f,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4},properties:{useAutoAlign:{check:g,init:true}},members:{_getStyleFlags:function(m){if(this.getUseAutoAlign()){if(typeof m.value==h){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}},_getCellClass:function(j){var k=arguments.callee.base.call(this,j);

if(!k){return i;
}var l=this._getStyleFlags(j);

if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){k+=d;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){k+=e;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){k+=c;
}return k;
},_getContentHtml:function(a){return qx.bom.String.escape(this._formatValue(a));
},_formatValue:function(n){var p=n.value;

if(p==null){return i;
}
if(typeof p==b){return p;
}else if(typeof p==h){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);
}else if(p instanceof Date){o=qx.util.format.DateFormat.getDateInstance().format(p);
}else{o=p;
}return o;
}}});
})();
(function(){var j="\n",i="",h=" &nbsp;",g="<br>",f=" ",e="qx.bom.String";
qx.Class.define(e,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(d){return qx.util.StringEscape.escape(d,qx.bom.String.FROM_CHARCODE);
},unescape:function(k){return qx.util.StringEscape.unescape(k,qx.bom.String.TO_CHARCODE);
},fromText:function(o){return qx.bom.String.escape(o).replace(/(  |\n)/g,function(l){var m={"  ":h,"\n":g};
return m[l]||l;
});
},toText:function(n){return qx.bom.String.unescape(n.replace(/\s+|<([^>])+>/gi,function(p){if(/\s+/.test(p)){return f;
}else if(/^<BR|^<br/gi.test(p)){return j;
}else{return i;
}}));
}},defer:function(a,b,c){a.FROM_CHARCODE=qx.lang.Object.invert(a.TO_CHARCODE);
}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Class.define(a,{statics:{escape:function(m,n){var p,r=d;

for(var i=0,l=m.length;i<l;i++){var q=m.charAt(i);
var o=q.charCodeAt(0);

if(n[o]){p=f+n[o]+g;
}else{if(o>0x7F){p=b+o+g;
}else{p=q;
}}r+=p;
}return r;
},unescape:function(s,t){return s.replace(/&[#\w]+;/gi,function(h){var j=h;
var h=h.substring(1,h.length-1);
var k=t[h];

if(k){j=String.fromCharCode(k);
}else{if(h.charAt(0)==c){if(h.charAt(1).toUpperCase()==e){k=h.substring(2);
if(k.match(/^[0-9A-Fa-f]+$/gi)){j=String.fromCharCode(parseInt(k,16));
}}else{k=h.substring(1);
if(k.match(/^\d+$/gi)){j=String.fromCharCode(parseInt(k,10));
}}}}return j;
});
}}});
})();
(function(){var b="qx.util.format.IFormat";
qx.Interface.define(b,{members:{format:function(a){},parse:function(c){}}});
})();
(function(){var C="",B="Number",A="-",z="0",y="String",x="changeNumberFormat",w='(',v="g",u="Boolean",t="$",m="NaN",s='([0-9]{1,3}(?:',p='{0,1}[0-9]{3}){0,})',l='\\d+){0,1}',k="qx.util.format.NumberFormat",o="Infinity",n="^",q=".",j="-Infinity",r='([-+]){0,1}';
qx.Class.define(k,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(D){arguments.callee.base.call(this);
this.__ql=D;
},statics:{getIntegerInstance:function(){var Q=qx.util.format.NumberFormat;

if(Q._integerInstance==null){Q._integerInstance=new Q();
Q._integerInstance.setMaximumFractionDigits(0);
}return Q._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:B,init:0},maximumIntegerDigits:{check:B,nullable:true},minimumFractionDigits:{check:B,init:0},maximumFractionDigits:{check:B,nullable:true},groupingUsed:{check:u,init:true},prefix:{check:y,init:C,event:x},postfix:{check:y,init:C,event:x}},members:{__ql:null,format:function(E){switch(E){case Infinity:return o;
case -Infinity:return j;
case NaN:return m;
}var I=(E<0);

if(I){E=-E;
}
if(this.getMaximumFractionDigits()!=null){var P=Math.pow(10,this.getMaximumFractionDigits());
E=Math.round(E*P)/P;
}var O=String(Math.floor(E)).length;
var F=C+E;
var L=F.substring(0,O);

while(L.length<this.getMinimumIntegerDigits()){L=z+L;
}
if(this.getMaximumIntegerDigits()!=null&&L.length>this.getMaximumIntegerDigits()){L=L.substring(L.length-this.getMaximumIntegerDigits());
}var K=F.substring(O+1);

while(K.length<this.getMinimumFractionDigits()){K+=z;
}
if(this.getMaximumFractionDigits()!=null&&K.length>this.getMaximumFractionDigits()){K=K.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var H=L;
L=C;
var N;

for(N=H.length;N>3;N-=3){L=C+qx.locale.Number.getGroupSeparator(this.__ql)+H.substring(N-3,N)+L;
}L=H.substring(0,N)+L;
}var J=this.getPrefix()?this.getPrefix():C;
var G=this.getPostfix()?this.getPostfix():C;
var M=J+(I?A:C)+L;

if(K.length>0){M+=C+qx.locale.Number.getDecimalSeparator(this.__ql)+K;
}M+=G;
return M;
},parse:function(a){var f=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__ql)+C);
var d=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__ql)+C);
var b=new RegExp(n+qx.lang.String.escapeRegexpChars(this.getPrefix())+r+s+f+p+w+d+l+qx.lang.String.escapeRegexpChars(this.getPostfix())+t);
var e=b.exec(a);

if(e==null){throw new Error("Number string '"+a+"' does not match the number format");
}var g=(e[1]==A);
var i=e[2];
var h=e[3];
i=i.replace(new RegExp(f,v),C);
var c=(g?A:C)+i;

if(h!=null&&h.length!=0){h=h.replace(new RegExp(d),C);
c+=q+h;
}return parseFloat(c);
}}});
})();
(function(){var e="cldr_number_decimal_separator",d="cldr_number_percent_format",c="qx.locale.Number",b="cldr_number_group_separator";
qx.Class.define(c,{statics:{getDecimalSeparator:function(g){return qx.locale.Manager.getInstance().localize(e,[],g);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(b,[],f);
},getPercentFormat:function(a){return qx.locale.Manager.getInstance().localize(d,[],a);
}}});
})();
(function(){var dn="(\\d\\d?)",dm="format",dl="",dk="abbreviated",dj="wide",di="(",dh=")",dg="|",df="stand-alone",de="wildcard",cS="default",cR="literal",cQ="'",cP="hour",cO="(\\d\\d?\\d?)",cN="ms",cM="narrow",cL="-",cK="quoted_literal",cJ='a',dv="HH:mm:ss",dw="+",dt="HHmmss",du="long",dr='z',ds="0",dp="sec",dq="day",dx='Z',dy=" ",cW="min",cV="mm",cY="(\\d+)",cX="h",db="KK",da='L',dd="Z",dc="(\\d\\d+)",cU="EEEE",cT="^",bK=":",bL='y',bM="K",bN="a",bO="([\\+\\-]\\d\\d:?\\d\\d)",bP="GMT",bQ="dd",bR="qx.util.format.DateFormat",bS="yyy",bT="H",dC="YYYY",dB="y",dA="HH",dz="EE",dG='h',dF="S",dE='s',dD='A',dI="yyyyyy",dH="kk",ct="ss",cu='H',cr='S',cs="MMMM",cx='c',cy="d",cv="([a-zA-Z]+)",cw='k',cp="m",cq='Y',cc='D',cb="yyyyy",ce='K',cd="hh",bX="SSS",bW="MM",ca="yy",bY="(\\d\\d\\d\\d\\d\\d+)",bV="yyyy-MM-dd HH:mm:ss",bU="(\\d\\d\\d\\d\\d+)",cD="short",cE='d',cF="unkown",cG='m',cz="(\\d\\d\\d\\d)",cA="(\\d\\d\\d+)",cB="k",cC='M',cH="(\\d\\d\\d\\d+)",cI="SS",cm="MMM",cl="s",ck="M",cj='w',ci="EEE",ch="$",cg="?",cf='E',co="z",cn="yyyy";
qx.Class.define(bR,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(v,w){arguments.callee.base.call(this);

if(!w){this.__wP=qx.locale.Manager.getInstance().getLocale();
}else{this.__wP=w;
}
if(v!=null){this.__wQ=v.toString();
}else{this.__wQ=qx.locale.Date.getDateFormat(du,this.__wP)+dy+qx.locale.Date.getDateTimeFormat(dt,dv,this.__wP);
}},statics:{getDateTimeInstance:function(){var E=qx.util.format.DateFormat;
var D=qx.locale.Date.getDateFormat(du)+dy+qx.locale.Date.getDateTimeFormat(dt,dv);

if(E._dateInstance==null||E._dateInstance.__wQ!=D){E._dateTimeInstance=new E();
}return E._dateTimeInstance;
},getDateInstance:function(){var y=qx.util.format.DateFormat;
var x=qx.locale.Date.getDateFormat(cD)+dl;

if(y._dateInstance==null||y._dateInstance.__wQ!=x){y._dateInstance=new y(x);
}return y._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:bV,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__wP:null,__wQ:null,__wR:null,__wS:null,__wT:null,__wU:function(s,t){var u=dl+s;

while(u.length<t){u=ds+u;
}return u;
},__wV:function(z){var A=new Date(z.getTime());
var B=A.getDate();

while(A.getMonth()!=0){A.setDate(-1);
B+=A.getDate()+1;
}return B;
},__wW:function(g){return new Date(g.getTime()+(3-((g.getDay()+6)%7))*86400000);
},__wX:function(bk){var bm=this.__wW(bk);
var bn=bm.getFullYear();
var bl=this.__wW(new Date(bn,0,4));
return Math.floor(1.5+(bm.getTime()-bl.getTime())/86400000/7);
},format:function(bq){if(bq==null){return null;
}var bw=qx.util.format.DateFormat;
var bx=this.__wP;
var bH=bq.getFullYear();
var bB=bq.getMonth();
var bJ=bq.getDate();
var br=bq.getDay();
var bC=bq.getHours();
var by=bq.getMinutes();
var bD=bq.getSeconds();
var bF=bq.getMilliseconds();
var bI=bq.getTimezoneOffset();
var bu=bI>0?1:-1;
var bs=Math.floor(Math.abs(bI)/60);
var bz=Math.abs(bI)%60;
this.__wY();
var bG=dl;

for(var i=0;i<this.__wT.length;i++){var bE=this.__wT[i];

if(bE.type==cR){bG+=bE.text;
}else{var bv=bE.character;
var bA=bE.size;
var bt=cg;

switch(bv){case bL:case cq:if(bA==2){bt=this.__wU(bH%100,2);
}else{bt=bH+dl;

if(bA>bt.length){for(var i=bt.length;i<bA;i++){bt=ds+bt;
}}}break;
case cc:bt=this.__wU(this.__wV(bq),bA);
break;
case cE:bt=this.__wU(bJ,bA);
break;
case cj:bt=this.__wU(this.__wX(bq),bA);
break;
case cf:if(bA==2){bt=qx.locale.Date.getDayName(cM,br,bx,dm);
}else if(bA==3){bt=qx.locale.Date.getDayName(dk,br,bx,dm);
}else if(bA==4){bt=qx.locale.Date.getDayName(dj,br,bx,dm);
}break;
case cx:if(bA==2){bt=qx.locale.Date.getDayName(cM,br,bx,df);
}else if(bA==3){bt=qx.locale.Date.getDayName(dk,br,bx,df);
}else if(bA==4){bt=qx.locale.Date.getDayName(dj,br,bx,df);
}break;
case cC:if(bA==1||bA==2){bt=this.__wU(bB+1,bA);
}else if(bA==3){bt=qx.locale.Date.getMonthName(dk,bB,bx,dm);
}else if(bA==4){bt=qx.locale.Date.getMonthName(dj,bB,bx,dm);
}break;
case da:if(bA==1||bA==2){bt=this.__wU(bB+1,bA);
}else if(bA==3){bt=qx.locale.Date.getMonthName(dk,bB,bx,df);
}else if(bA==4){bt=qx.locale.Date.getMonthName(dj,bB,bx,df);
}break;
case cJ:bt=(bC<12)?qx.locale.Date.getAmMarker(bx):qx.locale.Date.getPmMarker(bx);
break;
case cu:bt=this.__wU(bC,bA);
break;
case cw:bt=this.__wU((bC==0)?24:bC,bA);
break;
case ce:bt=this.__wU(bC%12,bA);
break;
case dG:bt=this.__wU(((bC%12)==0)?12:(bC%12),bA);
break;
case cG:bt=this.__wU(by,bA);
break;
case dE:bt=this.__wU(bD,bA);
break;
case cr:bt=this.__wU(bF,bA);
break;
case dr:if(bA==1){bt=bP+((bu>0)?cL:dw)+this.__wU(Math.abs(bs))+bK+this.__wU(bz,2);
}else if(bA==2){bt=bw.MEDIUM_TIMEZONE_NAMES[bs];
}else if(bA==3){bt=bw.FULL_TIMEZONE_NAMES[bs];
}break;
case dx:bt=((bu>0)?cL:dw)+this.__wU(Math.abs(bs),2)+this.__wU(bz,2);
break;
}bG+=bt;
}}return bG;
},parse:function(bd){this.__xa();
var bj=this.__wR.regex.exec(bd);

if(bj==null){throw new Error("Date string '"+bd+"' does not match the date format: "+this.__wQ);
}var be={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var bf=1;

for(var i=0;i<this.__wR.usedRules.length;i++){var bh=this.__wR.usedRules[i];
var bg=bj[bf];

if(bh.field!=null){be[bh.field]=parseInt(bg,10);
}else{bh.manipulator(be,bg);
}bf+=(bh.groups==null)?1:bh.groups;
}var bi=new Date(be.year,be.month,be.day,(be.ispm)?(be.hour+12):be.hour,be.min,be.sec,be.ms);

if(be.month!=bi.getMonth()||be.year!=bi.getFullYear()){throw new Error("Error parsing date '"+bd+"': the value for day or month is too large");
}return bi;
},__wY:function(){if(this.__wT!=null){return;
}this.__wT=[];
var X;
var V=0;
var ba=dl;
var T=this.__wQ;
var W=cS;
var i=0;

while(i<T.length){var Y=T.charAt(i);

switch(W){case cK:if(Y==cQ){if(i+1>=T.length){i++;
break;
}var U=T.charAt(i+1);

if(U==cQ){ba+=Y;
i++;
}else{i++;
W=cF;
}}else{ba+=Y;
i++;
}break;
case de:if(Y==X){V++;
i++;
}else{this.__wT.push({type:de,character:X,size:V});
X=null;
V=0;
W=cS;
}break;
default:if((Y>=cJ&&Y<=dr)||(Y>=dD&&Y<=dx)){X=Y;
W=de;
}else if(Y==cQ){if(i+1>=T.length){ba+=Y;
i++;
break;
}var U=T.charAt(i+1);

if(U==cQ){ba+=Y;
i++;
}i++;
W=cK;
}else{W=cS;
}
if(W!=cS){if(ba.length>0){this.__wT.push({type:cR,text:ba});
ba=dl;
}}else{ba+=Y;
i++;
}break;
}}if(X!=null){this.__wT.push({type:de,character:X,size:V});
}else if(ba.length>0){this.__wT.push({type:cR,text:ba});
}},__xa:function(){if(this.__wR!=null){return ;
}var K=this.__wQ;
this.__xb();
this.__wY();
var Q=[];
var M=cT;

for(var I=0;I<this.__wT.length;I++){var R=this.__wT[I];

if(R.type==cR){M+=qx.lang.String.escapeRegexpChars(R.text);
}else{var J=R.character;
var N=R.size;
var L;

for(var S=0;S<this.__wS.length;S++){var O=this.__wS[S];

if(J==O.pattern.charAt(0)&&N==O.pattern.length){L=O;
break;
}}if(L==null){var P=dl;

for(var i=0;i<N;i++){P+=J;
}throw new Error("Malformed date format: "+K+". Wildcard "+P+" is not supported");
}else{Q.push(L);
M+=L.regex;
}}}M+=ch;
var H;

try{H=new RegExp(M);
}catch(C){throw new Error("Malformed date format: "+K);
}this.__wR={regex:H,"usedRules":Q,pattern:M};
},__xb:function(){var dO=qx.util.format.DateFormat;
var dU=qx.lang.String;

if(this.__wS!=null){return ;
}var dP=this.__wS=[];
var ec=function(m,n){n=parseInt(n,10);

if(n<dO.ASSUME_YEAR_2000_THRESHOLD){n+=2000;
}else if(n<100){n+=1900;
}m.year=n;
};
var dV=function(h,j){h.month=parseInt(j,10)-1;
};
var dS=function(a,b){a.ispm=(b==dO.PM_MARKER);
};
var dR=function(k,l){k.hour=parseInt(l,10)%24;
};
var dQ=function(e,f){e.hour=parseInt(f,10)%12;
};
var dY=function(q,r){return;
};
var dW=qx.locale.Date.getMonthNames(dk,this.__wP,dm);

for(var i=0;i<dW.length;i++){dW[i]=dU.escapeRegexpChars(dW[i].toString());
}var dX=function(o,p){p=dU.escapeRegexpChars(p);
o.month=dW.indexOf(p);
};
var dL=qx.locale.Date.getMonthNames(dj,this.__wP,dm);

for(var i=0;i<dL.length;i++){dL[i]=dU.escapeRegexpChars(dL[i].toString());
}var dK=function(c,d){d=dU.escapeRegexpChars(d);
c.month=dL.indexOf(d);
};
var dN=qx.locale.Date.getDayNames(cM,this.__wP,dm);

for(var i=0;i<dN.length;i++){dN[i]=dU.escapeRegexpChars(dN[i].toString());
}var dJ=function(bo,bp){bp=dU.escapeRegexpChars(bp);
bo.month=dN.indexOf(bp);
};
var ea=qx.locale.Date.getDayNames(dk,this.__wP,dm);

for(var i=0;i<ea.length;i++){ea[i]=dU.escapeRegexpChars(ea[i].toString());
}var dT=function(bb,bc){bc=dU.escapeRegexpChars(bc);
bb.month=ea.indexOf(bc);
};
var eb=qx.locale.Date.getDayNames(dj,this.__wP,dm);

for(var i=0;i<eb.length;i++){eb[i]=dU.escapeRegexpChars(eb[i].toString());
}var dM=function(F,G){G=dU.escapeRegexpChars(G);
F.month=eb.indexOf(G);
};
dP.push({pattern:dC,regex:cz,manipulator:ec});
dP.push({pattern:dB,regex:cY,manipulator:ec});
dP.push({pattern:ca,regex:dc,manipulator:ec});
dP.push({pattern:bS,regex:cA,manipulator:ec});
dP.push({pattern:cn,regex:cH,manipulator:ec});
dP.push({pattern:cb,regex:bU,manipulator:ec});
dP.push({pattern:dI,regex:bY,manipulator:ec});
dP.push({pattern:ck,regex:dn,manipulator:dV});
dP.push({pattern:bW,regex:dn,manipulator:dV});
dP.push({pattern:cm,regex:di+dW.join(dg)+dh,manipulator:dX});
dP.push({pattern:cs,regex:di+dL.join(dg)+dh,manipulator:dK});
dP.push({pattern:bQ,regex:dn,field:dq});
dP.push({pattern:cy,regex:dn,field:dq});
dP.push({pattern:dz,regex:di+dN.join(dg)+dh,manipulator:dJ});
dP.push({pattern:ci,regex:di+ea.join(dg)+dh,manipulator:dT});
dP.push({pattern:cU,regex:di+eb.join(dg)+dh,manipulator:dM});
dP.push({pattern:bN,regex:di+dO.AM_MARKER+dg+dO.PM_MARKER+dh,manipulator:dS});
dP.push({pattern:dA,regex:dn,field:cP});
dP.push({pattern:bT,regex:dn,field:cP});
dP.push({pattern:dH,regex:dn,manipulator:dR});
dP.push({pattern:cB,regex:dn,manipulator:dR});
dP.push({pattern:db,regex:dn,field:cP});
dP.push({pattern:bM,regex:dn,field:cP});
dP.push({pattern:cd,regex:dn,manipulator:dQ});
dP.push({pattern:cX,regex:dn,manipulator:dQ});
dP.push({pattern:cV,regex:dn,field:cW});
dP.push({pattern:cp,regex:dn,field:cW});
dP.push({pattern:ct,regex:dn,field:dp});
dP.push({pattern:cl,regex:dn,field:dp});
dP.push({pattern:bX,regex:cO,field:cN});
dP.push({pattern:cI,regex:cO,field:cN});
dP.push({pattern:dF,regex:cO,field:cN});
dP.push({pattern:dd,regex:bO,manipulator:dY});
dP.push({pattern:co,regex:cv,manipulator:dY});
}},destruct:function(){this.__wT=this.__wR=this.__wS=null;
}});
})();
(function(){var G="_",F="format",E="thu",D="sat",C="cldr_day_",B="cldr_month_",A="wed",z="fri",y="tue",x="mon",X="sun",W="short",V="HH:mm",U="HHmmsszz",T="HHmm",S="HHmmss",R="cldr_date_format_",Q="HH:mm:ss zz",P="full",O="cldr_pm",M="long",N="medium",K="cldr_am",L="qx.locale.Date",I="cldr_date_time_format_",J="cldr_time_format_",H="HH:mm:ss";
qx.Class.define(L,{statics:{__wO:qx.locale.Manager.getInstance(),getAmMarker:function(Y){return this.__wO.localize(K,[],Y);
},getPmMarker:function(bf){return this.__wO.localize(O,[],bf);
},getDayNames:function(length,a,b){var b=b?b:F;
{};
var d=[X,x,y,A,E,z,D];
var e=[];

for(var i=0;i<d.length;i++){var c=C+b+G+length+G+d[i];
e.push(this.__wO.localize(c,[],a));
}return e;
},getDayName:function(length,s,t,u){var u=u?u:F;
{};
var w=[X,x,y,A,E,z,D];
var v=C+u+G+length+G+w[s];
return this.__wO.localize(v,[],t);
},getMonthNames:function(length,bu,bv){var bv=bv?bv:F;
{};
var bx=[];

for(var i=0;i<12;i++){var bw=B+bv+G+length+G+(i+1);
bx.push(this.__wO.localize(bw,[],bu));
}return bx;
},getMonthName:function(length,bj,bk,bl){var bl=bl?bl:F;
{};
var bm=B+bl+G+length+G+(bj+1);
return this.__wO.localize(bm,[],bk);
},getDateFormat:function(k,l){{};
var m=R+k;
return this.__wO.localize(m,[],l);
},getDateTimeFormat:function(n,o,p){var r=I+n;
var q=this.__wO.localize(r,[],p);

if(q==r){q=o;
}return q;
},getTimeFormat:function(f,g){{};
var j=J+f;
var h=this.__wO.localize(j,[],g);

if(h!=j){return h;
}
switch(f){case W:case N:return qx.locale.Date.getDateTimeFormat(T,V);
case M:return qx.locale.Date.getDateTimeFormat(S,H);
case P:return qx.locale.Date.getDateTimeFormat(U,Q);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(bg){var bh={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bi=qx.locale.Date._getTerritory(bg);
return bh[bi]!=null?bh[bi]:1;
},getWeekendStart:function(bn){var bp={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var bo=qx.locale.Date._getTerritory(bn);
return bp[bo]!=null?bp[bo]:6;
},getWeekendEnd:function(ba){var bb={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var bc=qx.locale.Date._getTerritory(ba);
return bb[bc]!=null?bb[bc]:0;
},isWeekend:function(bq,br){var bt=qx.locale.Date.getWeekendStart(br);
var bs=qx.locale.Date.getWeekendEnd(br);

if(bs>bt){return ((bq>=bt)&&(bq<=bs));
}else{return ((bq>=bt)||(bq<=bs));
}},_getTerritory:function(bd){if(bd){var be=bd.split(G)[1]||bd;
}else{be=this.__wO.getTerritory()||this.__wO.getLanguage();
}return be.toUpperCase();
}}});
})();
(function(){var o="indexOf",n="addAfter",m="add",l="addBefore",k="_",j="addAt",i="hasChildren",h="removeAt",g="removeAll",f="getChildren",d="remove",e="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(e,{members:{__mn:function(p,q,r,s){var t=this.getChildrenContainer();

if(t===this){p=k+p;
}return (t[p])(q,r,s);
},getChildren:function(){return this.__mn(f);
},hasChildren:function(){return this.__mn(i);
},add:function(a,b){return this.__mn(m,a,b);
},remove:function(B){return this.__mn(d,B);
},removeAll:function(){return this.__mn(g);
},indexOf:function(A){return this.__mn(o,A);
},addAt:function(x,y,z){this.__mn(j,x,y,z);
},addBefore:function(u,v,w){this.__mn(l,u,v,w);
},addAfter:function(C,D,E){this.__mn(n,C,D,E);
},removeAt:function(c){this.__mn(h,c);
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var q="Boolean",p="resize",o="mousedown",n="w-resize",m="sw-resize",l="n-resize",k="resizableRight",j="ne-resize",i="se-resize",h="Integer",F="e-resize",E="resizableLeft",D="mousemove",C="move",B="shorthand",A="maximized",z="nw-resize",y="mouseout",x="qx.ui.core.MResizable",w="mouseup",u="losecapture",v="resize-frame",s="resizableBottom",t="s-resize",r="resizableTop";
qx.Mixin.define(x,{construct:function(){this.addListener(o,this.__pm,this,true);
this.addListener(w,this.__pn,this);
this.addListener(D,this.__pp,this);
this.addListener(y,this.__pq,this);
this.addListener(u,this.__po,this);
},properties:{resizableTop:{check:q,init:true},resizableRight:{check:q,init:true},resizableBottom:{check:q,init:true},resizableLeft:{check:q,init:true},resizable:{group:[r,k,s,E],mode:B},resizeSensitivity:{check:h,init:5},useResizeFrame:{check:q,init:true}},members:{__pc:null,__pd:null,__pe:null,__pf:null,__pg:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__ph:function(){var a=this.__pc;

if(!a){a=this.__pc=new qx.ui.core.Widget();
a.setAppearance(v);
a.exclude();
qx.core.Init.getApplication().getRoot().add(a);
}return a;
},__pi:function(){var U=this.__pg;
var T=this.__ph();
T.setUserBounds(U.left,U.top,U.width,U.height);
T.show();
T.setZIndex(this.getZIndex()+1);
},__pj:function(e){var M=this.__pd;
var N=this.getSizeHint();
var P=this.__pg;
var L=P.width;
var O=P.height;
var R=P.left;
var top=P.top;
var Q;

if((M&this.RESIZE_TOP)||(M&this.RESIZE_BOTTOM)){Q=e.getDocumentTop()-this.__pf;

if(M&this.RESIZE_TOP){O-=Q;
}else{O+=Q;
}
if(O<N.minHeight){O=N.minHeight;
}else if(O>N.maxHeight){O=N.maxHeight;
}
if(M&this.RESIZE_TOP){top+=P.height-O;
}}
if((M&this.RESIZE_LEFT)||(M&this.RESIZE_RIGHT)){Q=e.getDocumentLeft()-this.__pe;

if(M&this.RESIZE_LEFT){L-=Q;
}else{L+=Q;
}
if(L<N.minWidth){L=N.minWidth;
}else if(L>N.maxWidth){L=N.maxWidth;
}
if(M&this.RESIZE_LEFT){R+=P.width-L;
}}return {viewportLeft:R,viewportTop:top,parentLeft:P.bounds.left+R-P.left,parentTop:P.bounds.top+top-P.top,width:L,height:O};
},__pk:{1:l,2:t,4:n,8:F,5:z,6:m,9:j,10:i},__pl:function(e){var I=this.getContentLocation();
var G=this.getResizeSensitivity();
var K=e.getDocumentLeft();
var J=e.getDocumentTop();
var H=0;

if(this.getResizableTop()&&Math.abs(I.top-J)<G){H+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(I.bottom-J)<G){H+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(I.left-K)<G){H+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(I.right-K)<G){H+=this.RESIZE_RIGHT;
}this.__pd=H;
},__pm:function(e){if(!this.__pd){return;
}this.addState(p);
this.__pe=e.getDocumentLeft();
this.__pf=e.getDocumentTop();
var location=this.getContainerLocation();
var S=this.getBounds();
this.__pg={top:location.top,left:location.left,width:S.width,height:S.height,bounds:qx.lang.Object.clone(S)};
if(this.getUseResizeFrame()){this.__pi();
}this.capture();
e.stop();
},__pn:function(e){if(!this.hasState(p)){return;
}if(this.getUseResizeFrame()){this.__ph().exclude();
}var V=this.__pj(e);
this.setWidth(V.width);
this.setHeight(V.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:V.parentLeft,top:V.parentTop});
}this.__pd=0;
this.removeState(p);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__po:function(e){if(!this.__pd){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(C);
if(this.getUseResizeFrame()){this.__ph().exclude();
}},__pp:function(e){if(this.hasState(p)){var f=this.__pj(e);
if(this.getUseResizeFrame()){var c=this.__ph();
c.setUserBounds(f.viewportLeft,f.viewportTop,f.width,f.height);
}else{this.setWidth(f.width);
this.setHeight(f.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:f.parentLeft,top:f.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(A)){this.__pl(e);
var g=this.__pd;
var d=this.getApplicationRoot();

if(g){var b=this.__pk[g];
this.setCursor(b);
d.setGlobalCursor(b);
}else if(this.getCursor()){this.resetCursor();
d.resetGlobalCursor();
}}},__pq:function(e){if(this.getCursor()&&!this.hasState(p)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__pc!=null&&!qx.core.ObjectRegistry.inShutDown){this.__pc.destroy();
this.__pc=null;
}}});
})();
(function(){var n="move",m="Boolean",l="__ps",k="mouseup",j="mousedown",i="__pr",h="losecapture",g="qx.ui.core.MMovable",f="mousemove",d="maximized",c="move-frame";
qx.Mixin.define(g,{properties:{movable:{check:m,init:true},useMoveFrame:{check:m,init:false}},members:{__pr:null,__ps:null,__pt:null,__pu:null,__pv:null,__pw:null,__px:null,__py:false,__pz:null,__pA:0,_activateMoveHandle:function(o){if(this.__pr){throw new Error("The move handle could not be redefined!");
}this.__pr=o;
o.addListener(j,this._onMoveMouseDown,this);
o.addListener(k,this._onMoveMouseUp,this);
o.addListener(f,this._onMoveMouseMove,this);
o.addListener(h,this.__pE,this);
},__pB:function(){var t=this.__ps;

if(!t){t=this.__ps=new qx.ui.core.Widget();
t.setAppearance(c);
t.exclude();
qx.core.Init.getApplication().getRoot().add(t);
}return t;
},__pC:function(){var location=this.getContainerLocation();
var b=this.getBounds();
var a=this.__pB();
a.setUserBounds(location.left,location.top,b.width,b.height);
a.show();
a.setZIndex(this.getZIndex()+1);
},__pD:function(e){var v=this.__pt;
var y=Math.max(v.left,Math.min(v.right,e.getDocumentLeft()));
var x=Math.max(v.top,Math.min(v.bottom,e.getDocumentTop()));
var u=this.__pu+y;
var w=this.__pv+x;
return {viewportLeft:u,viewportTop:w,parentLeft:u-this.__pw,parentTop:w-this.__px};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(d)){return;
}var parent=this.getLayoutParent();
var r=parent.getContentLocation();
var s=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__py=true;
this.__pz=parent.getBlockerColor();
this.__pA=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
}}this.__pt={left:r.left,top:r.top,right:r.left+s.width,bottom:r.top+s.height};
var q=this.getContainerLocation();
this.__pw=r.left;
this.__px=r.top;
this.__pu=q.left-e.getDocumentLeft();
this.__pv=q.top-e.getDocumentTop();
this.addState(n);
this.__pr.capture();
if(this.getUseMoveFrame()){this.__pC();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(n)){return;
}var p=this.__pD(e);

if(this.getUseMoveFrame()){this.__pB().setDomPosition(p.viewportLeft,p.viewportTop);
}else{this.setDomPosition(p.parentLeft,p.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(n)){return;
}this.removeState(n);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__py){parent.unblockContent();
parent.setBlockerColor(this.__pz);
parent.setBlockerOpacity(this.__pA);
this.__pz=null;
this.__pA=0;
}}this.__pr.releaseCapture();
var z=this.__pD(e);
this.setLayoutProperties({left:z.parentLeft,top:z.parentTop});
if(this.getUseMoveFrame()){this.__pB().exclude();
}e.stopPropagation();
},__pE:function(e){if(!this.hasState(n)){return;
}this.removeState(n);
if(this.getUseMoveFrame()){this.__pB().exclude();
}}},destruct:function(){this._disposeObjects(l,i);
this.__pt=null;
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__mQ:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__mR:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__mR[name];
s[t]();
}else{var u=this.__mQ[name];
s[u](q);
}}}});
})();
(function(){var b="qx.ui.window.IWindowManager";
qx.Interface.define(b,{members:{setDesktop:function(c){this.assertInterface(c,qx.ui.window.IDesktop);
},changeActiveWindow:function(e,f){},updateStack:function(){},bringToFront:function(a){this.assertInstance(a,qx.ui.window.Window);
},sendToBack:function(d){this.assertInstance(d,qx.ui.window.Window);
}}});
})();
(function(){var e="__pF",d="qx.ui.window.Manager";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__pF:null,setDesktop:function(m){this.__pF=m;
this.updateStack();
},getDesktop:function(){return this.__pF;
},changeActiveWindow:function(n,o){if(n){this.bringToFront(n);
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__pF.forceUnblockContent();
var g=this.__pF.getWindows();
var k=this._minZIndex-1;
var j=false;
var h,f=null;

for(var i=0,l=g.length;i<l;i++){h=g[i];

if(!h.isVisible()){continue;
}k+=2;
h.setZIndex(k);
if(h.getModal()){this.__pF.blockContent(k-1);
}j=j||h.isActive();
f=h;
}
if(!j){this.__pF.setActiveWindow(f);
}},bringToFront:function(p){var q=this.__pF.getWindows();
var r=qx.lang.Array.remove(q,p);

if(r){q.push(p);
this.updateStack();
}},sendToBack:function(a){var b=this.__pF.getWindows();
var c=qx.lang.Array.remove(b,a);

if(c){b.unshift(a);
this.updateStack();
}}},destruct:function(){this._disposeObjects(e);
}});
})();
(function(){var x="Boolean",w="qx.event.type.Event",v="captionbar",u="maximize-button",t="_applyCaptionBarChange",s="restore-button",r="minimize-button",q="close-button",p="maximized",o="execute",bf="pane",be="title",bd="icon",bc="statusbar-text",bb="statusbar",ba="normal",Y="String",X="active",W="beforeClose",V="beforeMinimize",E="mousedown",F="changeStatus",C="changeIcon",D="excluded",A="_applyCaption",B="_applyActive",y="beforeRestore",z="minimize",G="dblclick",H="changeModal",N="_applyShowStatusbar",M="_applyStatus",P="qx.ui.window.Window",O="changeCaption",R="_applyIcon",Q="focusout",J="beforeMaximize",U="maximize",T="restore",S="window",I="close",K="changeActive",L="minimized";
qx.Class.define(P,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(bt,bu){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(v);
this._createChildControl(bf);
if(bu!=null){this.setIcon(bu);
}
if(bt!=null){this.setCaption(bt);
}this._updateCaptionBar();
this.addListener(E,this._onWindowMouseDown,this,true);
this.addListener(Q,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":w,"close":w,"beforeMinimize":w,"minimize":w,"beforeMaximize":w,"maximize":w,"beforeRestore":w,"restore":w},properties:{appearance:{refine:true,init:S},visibility:{refine:true,init:D},focusable:{refine:true,init:true},active:{check:x,init:false,apply:B,event:K},modal:{check:x,init:false,event:H},caption:{apply:A,event:O,nullable:true},icon:{check:Y,nullable:true,apply:R,event:C,themeable:true},status:{check:Y,nullable:true,apply:M,event:F},showClose:{check:x,init:true,apply:t,themeable:true},showMaximize:{check:x,init:true,apply:t,themeable:true},showMinimize:{check:x,init:true,apply:t,themeable:true},allowClose:{check:x,init:true,apply:t},allowMaximize:{check:x,init:true,apply:t},allowMinimize:{check:x,init:true,apply:t},showStatusbar:{check:x,init:false,apply:N}},members:{__pG:null,__pH:null,getChildrenContainer:function(){return this.getChildControl(bf);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
arguments.callee.base.call(this,parent);
},_createChildControlImpl:function(c){var d;

switch(c){case bb:d=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(d);
d.add(this.getChildControl(bc));
break;
case bc:d=new qx.ui.basic.Label();
d.setValue(this.getStatus());
break;
case bf:d=new qx.ui.container.Composite();
this._add(d,{flex:1});
break;
case v:var g=new qx.ui.layout.Grid();
g.setRowFlex(0,1);
g.setColumnFlex(1,1);
d=new qx.ui.container.Composite(g);
this._add(d);
d.addListener(G,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(d);
break;
case bd:d=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(v).add(d,{row:0,column:0});
break;
case be:d=new qx.ui.basic.Label(this.getCaption());
d.setWidth(0);
d.setAllowGrowX(true);
var f=this.getChildControl(v);
f.add(d,{row:0,column:1});
break;
case r:d=new qx.ui.form.Button();
d.setFocusable(false);
d.addListener(o,this._onMinimizeButtonClick,this);
this.getChildControl(v).add(d,{row:0,column:2});
break;
case s:d=new qx.ui.form.Button();
d.setFocusable(false);
d.addListener(o,this._onRestoreButtonClick,this);
this.getChildControl(v).add(d,{row:0,column:3});
break;
case u:d=new qx.ui.form.Button();
d.setFocusable(false);
d.addListener(o,this._onMaximizeButtonClick,this);
this.getChildControl(v).add(d,{row:0,column:4});
break;
case q:d=new qx.ui.form.Button();
d.setFocusable(false);
d.addListener(o,this._onCloseButtonClick,this);
this.getChildControl(v).add(d,{row:0,column:6});
break;
}return d||arguments.callee.base.call(this,c);
},_updateCaptionBar:function(){var bg;

if(this.getIcon()){this._showChildControl(bd);
}else{this._excludeChildControl(bd);
}
if(this.getCaption()){this._showChildControl(be);
}else{this._excludeChildControl(be);
}
if(this.getShowMinimize()){this._showChildControl(r);
bg=this.getChildControl(r);
this.getAllowMinimize()?bg.resetEnabled():bg.setEnabled(false);
}else{this._excludeChildControl(r);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(s);
this._excludeChildControl(u);
}else{this._showChildControl(u);
this._excludeChildControl(s);
}bg=this.getChildControl(u);
this.getAllowMaximize()?bg.resetEnabled():bg.setEnabled(false);
}else{this._excludeChildControl(u);
this._excludeChildControl(s);
}
if(this.getShowClose()){this._showChildControl(q);
bg=this.getChildControl(q);
this.getAllowClose()?bg.resetEnabled():bg.setEnabled(false);
}else{this._excludeChildControl(q);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(W,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(I);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bk=parent.getBounds();

if(bk){var bl=this.getSizeHint();
var bj=Math.round((bk.width-bl.width)/2);
var top=Math.round((bk.height-bl.height)/2);

if(top<0){top=0;
}this.moveTo(bj,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(J,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var br=this.getLayoutProperties();
this.__pH=br.left===undefined?0:br.left;
this.__pG=br.top===undefined?0:br.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(p);
this._updateCaptionBar();
this.fireEvent(U);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(V,qx.event.type.Event,[false,true])){var l=this.getLayoutProperties();
this.__pH=l.left===undefined?0:l.left;
this.__pG=l.top===undefined?0:l.top;
this.removeState(p);
this.hide();
this.fireEvent(z);
}},restore:function(){if(this.getMode()===ba){return;
}
if(this.fireNonBubblingEvent(y,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bi=this.__pH;
var top=this.__pG;
this.setLayoutProperties({edge:null,left:bi,top:top});
this.removeState(p);
this._updateCaptionBar();
this.fireEvent(T);
}},moveTo:function(bh,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bh,top:top});
},isMaximized:function(){return this.hasState(p);
},getMode:function(){if(!this.isVisible()){return L;
}else{if(this.isMaximized()){return p;
}else{return ba;
}}},_applyActive:function(j,k){if(k){this.removeState(X);
}else{this.addState(X);
}},_getContentPaddingTarget:function(){return this.getChildControl(bf);
},_applyShowStatusbar:function(h,i){if(h){this._showChildControl(bb);
}else{this._excludeChildControl(bb);
}},_applyCaptionBarChange:function(bp,bq){this._updateCaptionBar();
},_applyStatus:function(bm,bn){var bo=this.getChildControl(bc,true);

if(bo){bo.setValue(bm);
}},_applyCaption:function(m,n){this.getChildControl(be).setValue(m);
},_applyIcon:function(a,b){this.getChildControl(bd).setSource(a);
},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bs=e.getRelatedTarget();

if(bs!=null&&!qx.ui.core.Widget.contains(this,bs)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(r).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(s).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(u).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(q).reset();
}}});
})();
(function(){var b="qx.ui.window.IDesktop";
qx.Interface.define(b,{members:{setWindowManager:function(a){this.assertInterface(a,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){arguments.callee.base.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignY(p);
}
if(q){this.setSeparator(q);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__kJ:null,__kK:null,__kL:null,__kM:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kN:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__kJ&&this.__kJ.length!=length&&this.__kK&&this.__kJ;
var u;
var t=r?this.__kJ:new Array(length);
var v=r?this.__kK:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}else{v[i]=0;
}}if(!r){this.__kJ=t;
this.__kK=v;
}this.__kL=s;
this.__kM=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(M,N){if(this._invalidChildrenCache){this.__kN();
}var U=this.__kM;
var length=U.length;
var bf=qx.ui.layout.Util;
var be=this.getSpacing();
var bi=this.getSeparator();

if(bi){var R=bf.computeVerticalSeparatorGaps(U,be,bi);
}else{var R=bf.computeVerticalGaps(U,be,true);
}var i,P,Q,Y;
var ba=[];
var bg=R;

for(i=0;i<length;i+=1){Y=this.__kJ[i];
Q=Y!=null?Math.floor((N-R)*Y):U[i].getSizeHint().height;
ba.push(Q);
bg+=Q;
}if(this.__kL&&bg!=N){var W={};
var bd,bh;

for(i=0;i<length;i+=1){bd=this.__kK[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kN();
}var D=qx.ui.layout.Util;
var L=this.__kM;
var z=0,C=0,B=0;
var x=0,E=0;
var I,y,K;
for(var i=0,l=L.length;i<l;i+=1){I=L[i];
y=I.getSizeHint();
C+=y.height;
var H=this.__kK[i];
var A=this.__kJ[i];

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
}},destruct:function(){this.__kJ=this.__kK=this.__kM=null;
}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__mc:null,__md:false,__me:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__md){this.__md=false;
}else{this.__md=true;
o.execute(this);
}}this.fireEvent(n);
},__mf:function(e){if(this.__md){this.__md=false;
return;
}this.__md=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__me);
}
if(p!=null){this.__me=p.addListener(n,this.__mf,this);
}var t=this.__mc;

if(t==null){this.__mc=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__mc=null;
}});
})();
(function(){var c="qx.ui.form.IExecutable",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"execute":b},members:{setCommand:function(a){return arguments.length==1;
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
(function(){var p="qx.event.type.Data",o="EVENT_TYPE_DATA_CHANGED",n="qx.ui.table.ITableModel",m="New code should not use this. Instead, use the text string 'dataChanged' literally.",l="New code should not use this. Instead, use the text string 'metaDataChanged' literally.",k="qx.event.type.Event",j="EVENT_TYPE_META_DATA_CHANGED";
qx.Interface.define(n,{events:{"dataChanged":p,"metaDataChanged":k,"sorted":p},statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},members:{getRowCount:function(){},getRowData:function(i){},getColumnCount:function(){},getColumnId:function(q){},getColumnIndexById:function(a){},getColumnName:function(e){},isColumnEditable:function(d){},isColumnSortable:function(f){},sortByColumn:function(g,h){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(r,s){},getValue:function(t,u){},getValueById:function(b,c){},setValue:function(v,w,x){},setValueById:function(y,z,A){}}});
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,o,m);
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,j,l);
})();
(function(){var h="metaDataChanged",g="qx.event.type.Data",f="qx.event.type.Event",e="abstract",d="qx.ui.table.model.Abstract";
qx.Class.define(d,{type:e,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":g,"metaDataChanged":f,"sorted":g},construct:function(){arguments.callee.base.call(this);
this.__Ag=[];
this.__Ah=[];
this.__Ai={};
},members:{__Ag:null,__Ah:null,__Ai:null,__Aj:null,getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(v){return null;
},isColumnEditable:function(z){return false;
},isColumnSortable:function(A){return false;
},sortByColumn:function(w,x){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(l,m){},getValue:function(r,s){throw new Error("getValue is abstract");
},getValueById:function(E,F){return this.getValue(this.getColumnIndexById(E),F);
},setValue:function(B,C,D){throw new Error("setValue is abstract");
},setValueById:function(n,o,p){this.setValue(this.getColumnIndexById(n),o,p);
},getColumnCount:function(){return this.__Ag.length;
},getColumnIndexById:function(u){return this.__Ai[u];
},getColumnId:function(t){return this.__Ag[t];
},getColumnName:function(k){return this.__Ah[k];
},setColumnIds:function(q){this.__Ag=q;
this.__Ai={};

for(var i=0;i<q.length;i++){this.__Ai[q[i]]=i;
}this.__Ah=new Array(q.length);
if(!this.__Aj){this.fireEvent(h);
}},setColumnNamesByIndex:function(j){if(this.__Ag.length!=j.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__Ag.length+" != "+j.length);
}this.__Ah=j;
this.fireEvent(h);
},setColumnNamesById:function(y){this.__Ah=new Array(this.__Ag.length);

for(var i=0;i<this.__Ag.length;++i){this.__Ah[i]=y[this.__Ag[i]];
}},setColumns:function(a,b){var c=this.__Ag.length==0||b;

if(b==null){if(this.__Ag.length==0){b=a;
}else{b=this.__Ag;
}}
if(b.length!=a.length){throw new Error("columnIdArr and columnNameArr have different length: "+b.length+" != "+a.length);
}
if(c){this.__Aj=true;
this.setColumnIds(b);
this.__Aj=false;
}this.setColumnNamesByIndex(a);
}},destruct:function(){this.__Ag=this.__Ah=this.__Ai=null;
}});
})();
(function(){var I="dataChanged",H="metaDataChanged",G="qx.ui.table.model.Simple",F="Boolean",E="sorted";
qx.Class.define(G,{extend:qx.ui.table.model.Abstract,construct:function(){arguments.callee.base.call(this);
this.__Ak=[];
this.__Al=-1;
this.__Am=[];
this.__An=null;
},properties:{caseSensitiveSorting:{check:F,init:true}},statics:{_defaultSortComparatorAscending:function(bl,bm){var bn=bl[arguments.callee.columnIndex];
var bo=bm[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(bn)&&qx.lang.Type.isNumber(bo)){var bp=isNaN(bn)?isNaN(bo)?0:1:isNaN(bo)?-1:null;

if(bp!=null){return bp;
}}return (bn>bo)?1:((bn==bo)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(l,m){var n=(l[arguments.callee.columnIndex].toLowerCase?l[arguments.callee.columnIndex].toLowerCase():l[arguments.callee.columnIndex]);
var o=(m[arguments.callee.columnIndex].toLowerCase?m[arguments.callee.columnIndex].toLowerCase():m[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(n)&&qx.lang.Type.isNumber(o)){var p=isNaN(n)?isNaN(o)?0:1:isNaN(o)?-1:null;

if(p!=null){return p;
}}return (n>o)?1:((n==o)?0:-1);
},_defaultSortComparatorDescending:function(S,T){var U=S[arguments.callee.columnIndex];
var V=T[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(U)&&qx.lang.Type.isNumber(V)){var W=isNaN(U)?isNaN(V)?0:1:isNaN(V)?-1:null;

if(W!=null){return W;
}}return (U<V)?1:((U==V)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(be,bf){var bg=(be[arguments.callee.columnIndex].toLowerCase?be[arguments.callee.columnIndex].toLowerCase():be[arguments.callee.columnIndex]);
var bh=(bf[arguments.callee.columnIndex].toLowerCase?bf[arguments.callee.columnIndex].toLowerCase():bf[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(bg)&&qx.lang.Type.isNumber(bh)){var bi=isNaN(bg)?isNaN(bh)?0:1:isNaN(bh)?-1:null;

if(bi!=null){return bi;
}}return (bg<bh)?1:((bg==bh)?0:-1);
}},members:{__Ak:null,__An:null,__Ao:null,__Am:null,__Al:null,__Ap:null,getRowData:function(bM){var bN=this.__Ak[bM];

if(bN==null||bN.originalData==null){return bN;
}else{return bN.originalData;
}},getRowDataAsMap:function(c){var e=this.__Ak[c];
var d={};

for(var f=0;f<this.getColumnCount();f++){d[this.getColumnId(f)]=e[f];
}return d;
},getDataAsMapArray:function(){var bE=this.getRowCount();
var bD=[];

for(var i=0;i<bE;i++){bD.push(this.getRowDataAsMap(i));
}return bD;
},setEditable:function(bc){this.__An=[];

for(var bd=0;bd<this.getColumnCount();bd++){this.__An[bd]=bc;
}this.fireEvent(H);
},setColumnEditable:function(h,k){if(k!=this.isColumnEditable(h)){if(this.__An==null){this.__An=[];
}this.__An[h]=k;
this.fireEvent(H);
}},isColumnEditable:function(g){return this.__An?(this.__An[g]==true):false;
},setColumnSortable:function(z,A){if(A!=this.isColumnSortable(z)){if(this.__Ao==null){this.__Ao=[];
}this.__Ao[z]=A;
this.fireEvent(H);
}},isColumnSortable:function(bO){return (this.__Ao?(this.__Ao[bO]!==false):true);
},sortByColumn:function(u,v){var y;
var x=this.__Am[u];

if(x){y=(v?x.ascending:x.descending);
}else{if(this.getCaseSensitiveSorting()){y=(v?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{y=(v?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}y.columnIndex=u;
this.__Ak.sort(y);
this.__Al=u;
this.__Ap=v;
var w={columnIndex:u,ascending:v};
this.fireDataEvent(E,w);
this.fireEvent(H);
},setSortMethods:function(bF,bG){var bH;

if(qx.lang.Type.isFunction(bG)){bH={ascending:bG,descending:function(bj,bk){return bG(bk,bj);
}};
}else{bH=bG;
}this.__Am[bF]=bH;
},getSortMethods:function(N){return this.__Am[N];
},clearSorting:function(){if(this.__Al!=-1){this.__Al=-1;
this.__Ap=true;
this.fireEvent(H);
}},getSortColumnIndex:function(){return this.__Al;
},isSortAscending:function(){return this.__Ap;
},getRowCount:function(){return this.__Ak.length;
},getValue:function(a,b){if(b<0||b>=this.__Ak.length){throw new Error("this.__rowArr out of bounds: "+b+" (0.."+this.__Ak.length+")");
}return this.__Ak[b][a];
},setValue:function(O,P,Q){if(this.__Ak[P][O]!=Q){this.__Ak[P][O]=Q;
if(this.hasListener(I)){var R={firstRow:P,lastRow:P,firstColumn:O,lastColumn:O};
this.fireDataEvent(I,R);
}
if(O==this.__Al){this.clearSorting();
}}},setData:function(bq,br){this.__Ak=bq;
if(this.hasListener(I)){var bs={firstRow:0,lastRow:bq.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(I,bs);
}
if(br!==false){this.clearSorting();
}},getData:function(){return this.__Ak;
},setDataAsMapArray:function(B,C,D){this.setData(this._mapArray2RowArr(B,C),D);
},addRows:function(J,K,L){if(K==null){K=this.__Ak.length;
}J.splice(0,0,K,0);
Array.prototype.splice.apply(this.__Ak,J);
var M={firstRow:K,lastRow:this.__Ak.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(I,M);

if(L!==false){this.clearSorting();
}},addRowsAsMapArray:function(q,r,s,t){this.addRows(this._mapArray2RowArr(q,s),r,t);
},setRows:function(X,Y,ba){if(Y==null){Y=0;
}X.splice(0,0,Y,X.length);
Array.prototype.splice.apply(this.__Ak,X);
var bb={firstRow:Y,lastRow:this.__Ak.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(I,bb);

if(ba!==false){this.clearSorting();
}},setRowsAsMapArray:function(bI,bJ,bK,bL){this.setRows(this._mapArray2RowArr(bI,bK),bJ,bL);
},removeRows:function(bt,bu,bv){this.__Ak.splice(bt,bu);
var bw={firstRow:bt,lastRow:this.__Ak.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bt,removeCount:bu};
this.fireDataEvent(I,bw);

if(bv!==false){this.clearSorting();
}},_mapArray2RowArr:function(bx,by){var bC=bx.length;
var bz=this.getColumnCount();
var bB=new Array(bC);
var bA;

for(var i=0;i<bC;++i){bA=[];

if(by){bA.originalData=bx[i];
}
for(var j=0;j<bz;++j){bA[j]=bx[i][this.getColumnId(j)];
}bB[i]=bA;
}return bB;
}},destruct:function(){this.__Ak=this.__An=this.__Am=this.__Ao=null;
}});
})();
(function(){var dk="Function",dj="Boolean",di="column-button",dh="qx.event.type.Data",dg="statusbar",df="qx.ui.table.pane.CellEvent",de="PageUp",dd="changeLocale",dc="changeSelection",db="qx.dynlocale",ex="__zU",ew="Enter",ev="metaDataChanged",eu="dataChanged",et="on",es="_applyStatusBarVisible",er="columnVisibilityMenuCreateStart",eq="blur",ep="qx.ui.table.Table",eo="columnVisibilityMenuCreateEnd",ds="Use 'resetSelection' instead.",dt="verticalScrollBarChanged",dq="_applyMetaColumnCounts",dr="one of one row",dn="focus",dp="changeDataRowRenderer",dl="changeHeaderCellHeight",dm="Escape",dA="A",dB="changeSelectionModel",dP="__zT",dL="Left",dX="Down",dS="Integer",ek="_applyHeaderCellHeight",ee="visibilityChanged",dG="qx.ui.table.ITableModel",en="orderChanged",em="_applySelectionModel",el="__zS",dE="menu",dI="_applyAdditionalStatusBarText",dK="_applyFocusCellOnMouseMove",dN="table",dQ="_applyColumnVisibilityButtonVisible",dT="changeTableModel",ea="qx.event.type.Event",eg="tableWidthChanged",du="End",dv="Object",dH="_applyShowCellFocusIndicator",dW="resize",dV="changeScrollY",dU="_applyTableModel",ec="menu-button",eb="_applyKeepFirstVisibleRowComplete",dR="widthChanged",dY="Home",cX="_applyRowHeight",ef="F2",dw="appear",dx="Up",dM="%1 rows",cY="qx.ui.table.selection.Model",da="one row",dD="__zK",dy="__zL",dz="PageDown",dC="%1 of %2 rows",dO="keypress",ei="changeRowHeight",eh="Number",dJ="changeVisible",ej="qx.ui.table.IRowRenderer",dF="Right",ed="Space";
qx.Class.define(ep,{extend:qx.ui.core.Widget,construct:function(bM,bN){arguments.callee.base.call(this);
if(!bN){bN={};
}
if(bN.selectionManager){this.setNewSelectionManager(bN.selectionManager);
}
if(bN.selectionModel){this.setNewSelectionModel(bN.selectionModel);
}
if(bN.tableColumnModel){this.setNewTableColumnModel(bN.tableColumnModel);
}
if(bN.tablePane){this.setNewTablePane(bN.tablePane);
}
if(bN.tablePaneHeader){this.setNewTablePaneHeader(bN.tablePaneHeader);
}
if(bN.tablePaneScroller){this.setNewTablePaneScroller(bN.tablePaneScroller);
}
if(bN.tablePaneModel){this.setNewTablePaneModel(bN.tablePaneModel);
}
if(bN.columnMenu){this.setNewColumnMenu(bN.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__zK=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__zK,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__zL=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(bM||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(dO,this._onKeyPress);
this.addListener(dn,this._onFocusChanged);
this.addListener(eq,this._onFocusChanged);
var bO=new qx.ui.core.Widget().set({height:0});
this._add(bO);
bO.addListener(dW,this._onResize,this);
this.__zM=null;
this.__zN=null;
if(qx.core.Variant.isSet(db,et)){qx.locale.Manager.getInstance().addListener(dd,this._onChangeLocale,this);
}this.initStatusBarVisible();
},events:{"columnVisibilityMenuCreateStart":dh,"columnVisibilityMenuCreateEnd":dh,"tableWidthChanged":ea,"verticalScrollBarChanged":dh,"cellClick":df,"cellDblclick":df,"cellContextmenu":df,"dataEdited":dh},statics:{__zO:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:dN},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectable:{refine:true,init:false},selectionModel:{check:cY,apply:em,event:dB},tableModel:{check:dG,apply:dU,event:dT},rowHeight:{check:eh,init:20,apply:cX,event:ei},forceLineHeight:{check:dj,init:true},headerCellHeight:{check:dS,init:16,apply:ek,event:dl,nullable:true},statusBarVisible:{check:dj,init:true,apply:es},additionalStatusBarText:{nullable:true,init:null,apply:dI},columnVisibilityButtonVisible:{check:dj,init:true,apply:dQ},metaColumnCounts:{check:dv,apply:dq},focusCellOnMouseMove:{check:dj,init:false,apply:dK},rowFocusChangeModifiesSelection:{check:dj,init:true},showCellFocusIndicator:{check:dj,init:true,apply:dH},keepFirstVisibleRowComplete:{check:dj,init:true,apply:eb},alwaysUpdateCells:{check:dj,init:false},dataRowRenderer:{check:ej,init:null,nullable:true,event:dp},modalCellEditorPreOpenFunction:{check:dk,init:null,nullable:true},newColumnMenu:{check:dk,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:dk,init:function(h){return new qx.ui.table.selection.Manager(h);
}},newSelectionModel:{check:dk,init:function(eI){return new qx.ui.table.selection.Model(eI);
}},newTableColumnModel:{check:dk,init:function(cF){return new qx.ui.table.columnmodel.Basic(cF);
}},newTablePane:{check:dk,init:function(cs){return new qx.ui.table.pane.Pane(cs);
}},newTablePaneHeader:{check:dk,init:function(bR){return new qx.ui.table.pane.Header(bR);
}},newTablePaneScroller:{check:dk,init:function(bu){return new qx.ui.table.pane.Scroller(bu);
}},newTablePaneModel:{check:dk,init:function(j){return new qx.ui.table.pane.Model(j);
}}},members:{__zM:null,__zN:null,__zK:null,__zL:null,__zP:null,__zQ:null,__zR:null,__zS:null,__zT:null,__zU:null,_createChildControlImpl:function(cp){var cq;

switch(cp){case dg:cq=new qx.ui.basic.Label();
cq.set({allowGrowX:true});
this._add(cq);
break;
case di:cq=this.getNewColumnMenu()();
cq.set({focusable:false});
var cr=cq.factory(dE,{table:this});
cr.addListener(dw,this._initColumnMenu,this);
break;
}return cq||arguments.callee.base.call(this,cp);
},_applySelectionModel:function(ci,cj){this.__zL.setSelectionModel(ci);

if(cj!=null){cj.removeListener(dc,this._onSelectionChanged,this);
}ci.addListener(dc,this._onSelectionChanged,this);
},_applyRowHeight:function(k,m){var n=this._getPaneScrollerArr();

for(var i=0;i<n.length;i++){n[i].updateVerScrollBarMaximum();
}},_applyHeaderCellHeight:function(br,bs){var bt=this._getPaneScrollerArr();

for(var i=0;i<bt.length;i++){bt[i].getHeader().setHeight(br);
}},getEmptyTableModel:function(){if(!this.__zU){this.__zU=new qx.ui.table.model.Simple();
this.__zU.setColumns([]);
this.__zU.setData([]);
}return this.__zU;
},_applyTableModel:function(ck,cl){this.getTableColumnModel().init(ck.getColumnCount(),this);

if(cl!=null){cl.removeListener(ev,this._onTableModelMetaDataChanged,this);
cl.removeListener(eu,this._onTableModelDataChanged,this);
}ck.addListener(ev,this._onTableModelMetaDataChanged,this);
ck.addListener(eu,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,ck.getRowCount(),0,ck.getColumnCount());
this._onTableModelMetaDataChanged();
},getTableColumnModel:function(){if(!this.__zT){var W=this.__zT=this.getNewTableColumnModel()(this);
W.addListener(ee,this._onColVisibilityChanged,this);
W.addListener(dR,this._onColWidthChanged,this);
W.addListener(en,this._onColOrderChanged,this);
var V=this.getTableModel();
W.init(V.getColumnCount(),this);
var T=this._getPaneScrollerArr();

for(var i=0;i<T.length;i++){var U=T[i];
var X=U.getTablePaneModel();
X.setTableColumnModel(W);
}}return this.__zT;
},_applyStatusBarVisible:function(bP,bQ){if(bP){this._showChildControl(dg);
}else{this._excludeChildControl(dg);
}
if(bP){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(bz,bA){this.__zP=bz;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(q,r){if(q){this._showChildControl(di);
}else{this._excludeChildControl(di);
}},_applyMetaColumnCounts:function(u,v){var D=u;
var w=this._getPaneScrollerArr();
var B={};

if(u>v){var F=qx.event.Registration.getManager(w[0]);

for(var G in qx.ui.table.Table.__zO){B[G]={};
B[G].capture=F.getListeners(w[0],G,true);
B[G].bubble=F.getListeners(w[0],G,false);
}}this._cleanUpMetaColumns(D.length);
var C=0;

for(var i=0;i<w.length;i++){var H=w[i];
var E=H.getTablePaneModel();
E.setFirstColumnX(C);
E.setMaxColumnCount(D[i]);
C+=D[i];
}if(D.length>w.length){var A=this.getTableColumnModel();

for(var i=w.length;i<D.length;i++){var E=this.getNewTablePaneModel()(A);
E.setFirstColumnX(C);
E.setMaxColumnCount(D[i]);
C+=D[i];
var H=this.getNewTablePaneScroller()(this);
H.setTablePaneModel(E);
H.addListener(dV,this._onScrollY,this);
for(G in qx.ui.table.Table.__zO){if(!B[G]){break;
}
if(B[G].capture&&B[G].capture.length>0){var y=B[G].capture;

for(var i=0;i<y.length;i++){var z=y[i].context;

if(!z){z=this;
}else if(z==w[0]){z=H;
}H.addListener(G,y[i].handler,z,true);
}}
if(B[G].bubble&&B[G].bubble.length>0){var J=B[G].bubble;

for(var i=0;i<J.length;i++){var z=J[i].context;

if(!z){z=this;
}else if(z==w[0]){z=H;
}H.addListener(G,J[i].handler,z,false);
}}}var I=(i==D.length-1)?1:0;
this.__zK.add(H,{flex:I});
w=this._getPaneScrollerArr();
}}for(var i=0;i<w.length;i++){var H=w[i];
var K=(i==(w.length-1));
H.getHeader().setHeight(this.getHeaderCellHeight());
H.setTopRightWidget(K?this.getChildControl(di):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(di);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(cm,cn){var co=this._getPaneScrollerArr();

for(var i=0;i<co.length;i++){co[i].setFocusCellOnMouseMove(cm);
}},_applyShowCellFocusIndicator:function(cx,cy){var cz=this._getPaneScrollerArr();

for(var i=0;i<cz.length;i++){cz[i].setShowCellFocusIndicator(cx);
}},_applyKeepFirstVisibleRowComplete:function(bo,bp){var bq=this._getPaneScrollerArr();

for(var i=0;i<bq.length;i++){bq[i].onKeepFirstVisibleRowCompleteChanged();
}},getSelectionManager:function(){return this.__zL;
},_getPaneScrollerArr:function(){return this.__zK.getChildren();
},getPaneScroller:function(ey){return this._getPaneScrollerArr()[ey];
},_cleanUpMetaColumns:function(cg){var ch=this._getPaneScrollerArr();

if(ch!=null){for(var i=ch.length-1;i>=cg;i--){ch[i].destroy();
}}},_onChangeLocale:function(bT){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(o){var p=this._getPaneScrollerArr();

for(var i=0;i<p.length;i++){p[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(N){var O=this._getPaneScrollerArr();

for(var i=0;i<O.length;i++){O[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(L){var M=L.getData();
this._updateTableData(M.firstRow,M.lastRow,M.firstColumn,M.lastColumn,M.removeStart,M.removeCount);
},_updateTableData:function(ba,bb,bc,bd,be,bf){var bg=this._getPaneScrollerArr();
if(bf){this.getSelectionModel().removeSelectionInterval(be,be+bf);
}
for(var i=0;i<bg.length;i++){bg[i].onTableModelDataChanged(ba,bb,bc,bd);
}var bh=this.getTableModel().getRowCount();

if(bh!=this.__zQ){this.__zQ=bh;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(bX){if(!this.__zR){this.__zR=true;
var bY=this._getPaneScrollerArr();

for(var i=0;i<bY.length;i++){bY[i].setScrollY(bX.getData());
}this.__zR=false;
}},_onKeyPress:function(ez){if(!this.getEnabled()){return;
}var eG=this.__zN;
var eD=true;
var eH=ez.getKeyIdentifier();

if(this.isEditing()){if(ez.getModifiers()==0){switch(eH){case ew:this.stopEditing();
var eG=this.__zN;
this.moveFocusedCell(0,1);

if(this.__zN!=eG){eD=this.startEditing();
}break;
case dm:this.cancelEditing();
this.focus();
break;
default:eD=false;
break;
}}return;
}else{if(ez.isCtrlPressed()){eD=true;

switch(eH){case dA:var eE=this.getTableModel().getRowCount();

if(eE>0){this.getSelectionModel().setSelectionInterval(0,eE-1);
}break;
default:eD=false;
break;
}}else{switch(eH){case ed:this.__zL.handleSelectKeyDown(this.__zN,ez);
break;
case ef:case ew:eD=this.startEditing();
break;
case dY:this.setFocusedCell(this.__zM,0,true);
break;
case du:var eE=this.getTableModel().getRowCount();
this.setFocusedCell(this.__zM,eE-1,true);
break;
case dL:this.moveFocusedCell(-1,0);
break;
case dF:this.moveFocusedCell(1,0);
break;
case dx:this.moveFocusedCell(0,-1);
break;
case dX:this.moveFocusedCell(0,1);
break;
case de:case dz:var eC=this.getPaneScroller(0);
var eF=eC.getTablePane();
var eE=eF.getVisibleRowCount()-1;
var eB=this.getRowHeight();
var eA=(eH==de)?-1:1;
eC.setScrollY(eC.getScrollY()+eA*eE*eB);
this.moveFocusedCell(0,eA*eE);
break;
default:eD=false;
}}}
if(eG!=this.__zN&&this.getRowFocusChangeModifiesSelection()){this.__zL.handleMoveKeyDown(this.__zN,ez);
}
if(eD){ez.preventDefault();
ez.stopPropagation();
}},_onFocusChanged:function(bx){var by=this._getPaneScrollerArr();

for(var i=0;i<by.length;i++){by[i].onFocusChanged();
}},_onColVisibilityChanged:function(bU){var bV=this._getPaneScrollerArr();

for(var i=0;i<bV.length;i++){bV[i].onColVisibilityChanged();
}var bW=bU.getData();

if(this.__zS!=null&&bW.col!=null&&bW.visible!=null){this.__zS[bW.col].setVisible(bW.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(a){var b=this._getPaneScrollerArr();

for(var i=0;i<b.length;i++){var c=a.getData();
b[i].setColumnWidth(c.col,c.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(bi){var bj=this._getPaneScrollerArr();

for(var i=0;i<bj.length;i++){bj[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(bB){var bC=this._getMetaColumnAtPageX(bB);
return (bC!=-1)?this.getPaneScroller(bC):null;
},setFocusedCell:function(P,Q,R){if(!this.isEditing()&&(P!=this.__zM||Q!=this.__zN)){if(P===null){P=0;
}this.__zM=P;
this.__zN=Q;
var S=this._getPaneScrollerArr();

for(var i=0;i<S.length;i++){S[i].setFocusedCell(P,Q);
}
if(P!==null&&R){this.scrollCellVisible(P,Q);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,ds);
this.resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__zM;
},getFocusedRow:function(){return this.__zN;
},highlightFocusedRow:function(Y){this.getDataRowRenderer().setHighlightFocusRow(Y);
},clearFocusedRowHighlight:function(){this.resetCellFocus();
var cW=this._getPaneScrollerArr();

for(var i=0;i<cW.length;i++){cW[i].onFocusChanged();
}},moveFocusedCell:function(cK,cL){var cP=this.__zM;
var cQ=this.__zN;

if(cP===null||cQ===null){return;
}
if(cK!=0){var cO=this.getTableColumnModel();
var x=cO.getVisibleX(cP);
var cN=cO.getVisibleColumnCount();
x=qx.lang.Number.limit(x+cK,0,cN-1);
cP=cO.getVisibleColumnAtX(x);
}
if(cL!=0){var cM=this.getTableModel();
cQ=qx.lang.Number.limit(cQ+cL,0,cM.getRowCount()-1);
}this.setFocusedCell(cP,cQ,true);
},scrollCellVisible:function(cG,cH){var cI=this.getTableColumnModel();
var x=cI.getVisibleX(cG);
var cJ=this._getMetaColumnAtColumnX(x);

if(cJ!=-1){this.getPaneScroller(cJ).scrollCellVisible(cG,cH);
}},isEditing:function(){if(this.__zM!=null){var x=this.getTableColumnModel().getVisibleX(this.__zM);
var bS=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(bS).isEditing();
}return false;
},startEditing:function(){if(this.__zM!=null){var x=this.getTableColumnModel().getVisibleX(this.__zM);
var t=this._getMetaColumnAtColumnX(x);
var s=this.getPaneScroller(t).startEditing();
return s;
}return false;
},stopEditing:function(){if(this.__zM!=null){var x=this.getTableColumnModel().getVisibleX(this.__zM);
var eJ=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(eJ).stopEditing();
}},cancelEditing:function(){if(this.__zM!=null){var x=this.getTableColumnModel().getVisibleX(this.__zM);
var cE=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(cE).cancelEditing();
}},updateContent:function(){var cR=this._getPaneScrollerArr();

for(var i=0;i<cR.length;i++){cR[i].getTablePane().updateContent();
}},_getMetaColumnAtPageX:function(cu){var cv=this._getPaneScrollerArr();

for(var i=0;i<cv.length;i++){var cw=cv[i].getContainerLocation();

if(cu>=cw.left&&cu<=cw.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(bk){var bm=this.getMetaColumnCounts();
var bn=0;

for(var i=0;i<bm.length;i++){var bl=bm[i];
bn+=bl;

if(bl==-1||bk<bn){return i;
}}return -1;
},_updateStatusBar:function(){var cS=this.getTableModel();

if(this.getStatusBarVisible()){var cT=this.getSelectionModel().getSelectedCount();
var cV=cS.getRowCount();
var cU;

if(cV>=0){if(cT==0){cU=this.trn(da,dM,cV,cV);
}else{cU=this.trn(dr,dC,cV,cT,cV);
}}
if(this.__zP){if(cU){cU+=this.__zP;
}else{cU=this.__zP;
}}
if(cU){this.getChildControl(dg).setValue(cU);
}}},_updateScrollerWidths:function(){var cc=this._getPaneScrollerArr();

for(var i=0;i<cc.length;i++){var ce=(i==(cc.length-1));
var cf=cc[i].getTablePaneModel().getTotalWidth();
cc[i].setPaneWidth(cf);
var cd=ce?1:0;
cc[i].setLayoutProperties({flex:cd});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var eN=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var eQ=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var eK=this._getPaneScrollerArr();
var eM=false;
var eP=false;

for(var i=0;i<eK.length;i++){var eR=(i==(eK.length-1));
var eL=eK[i].getNeededScrollBars(eM,!eR);

if(eL&eN){eM=true;
}
if(eR&&(eL&eQ)){eP=true;
}}for(var i=0;i<eK.length;i++){var eR=(i==(eK.length-1));
var eO;
eK[i].setHorizontalScrollBarVisible(eM);
if(eR){eO=eK[i].getVerticalScrollBarVisible();
}eK[i].setVerticalScrollBarVisible(eR&&eP);
if(eR&&eP!=eO){this.fireDataEvent(dt,eP);
}}},_initColumnMenu:function(){var bH=this.getTableModel();
var bI=this.getTableColumnModel();
var bJ=this.getChildControl(di);
bJ.empty();
var bG=bJ.getMenu();
var bK={table:this,menu:bG,columnButton:bJ};
this.fireDataEvent(er,bK);
this.__zS={};

for(var bL=0,l=bH.getColumnCount();bL<l;bL++){var bF=bJ.factory(ec,{text:bH.getColumnName(bL),column:bL,bVisible:bI.isColumnVisible(bL)});
qx.core.Assert.assertInterface(bF,qx.ui.table.IColumnMenuItem);
bF.addListener(dJ,this._createColumnVisibilityCheckBoxHandler(bL),this);
this.__zS[bL]=bF;
}var bK={table:this,menu:bG,columnButton:bJ};
this.fireDataEvent(eo,bK);
},_createColumnVisibilityCheckBoxHandler:function(ct){return function(ca){var cb=this.getTableColumnModel();
cb.setColumnVisible(ct,ca.getData());
};
},setColumnWidth:function(bD,bE){this.getTableColumnModel().setColumnWidth(bD,bE);
},_onResize:function(){this.fireEvent(eg);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(d,e,self,f){if(arguments.callee.self.__zO[d]){for(var i=0,g=this._getPaneScrollerArr();i<g.length;i++){g[i].addListener.apply(g[i],arguments);
}}else{return arguments.callee.base.call(this,d,e,self,f);
}},removeListener:function(cA,cB,self,cC){if(arguments.callee.self.__zO[cA]){for(var i=0,cD=this._getPaneScrollerArr();i<cD.length;i++){cD[i].removeListener.apply(cD[i],arguments);
}}else{arguments.callee.base.call(this,cA,cB,self,cC);
}},destroy:function(){this.getChildControl(di).getMenu().destroy();
arguments.callee.base.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(db,et)){qx.locale.Manager.getInstance().removeListener(dd,this._onChangeLocale,this);
}var bw=this.getSelectionModel();

if(bw){bw.dispose();
}var bv=this.getDataRowRenderer();

if(bv){bv.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(dy,dD,ex,ex,dP);
this._disposeMap(el);
}});
})();
(function(){var n="pressed",m="hovered",l="changeVisibility",k="qx.ui.menu.Menu",j="submenu",i="Enter",h="contextmenu",g="changeMenu",f="qx.ui.form.MenuButton",d="abandoned",c="_applyMenu";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p,q){arguments.callee.base.call(this,o,p);
if(q!=null){this.setMenu(q);
}},properties:{menu:{check:k,nullable:true,apply:c,event:g}},members:{_applyMenu:function(r,s){if(s){s.removeListener(l,this._onMenuChange,this);
s.resetOpener();
}
if(r){r.addListener(l,this._onMenuChange,this);
r.setOpener(this);
r.removeState(j);
r.removeState(h);
}},open:function(t){var u=this.getMenu();

if(u){qx.ui.menu.Manager.getInstance().hideAll();
u.setOpener(this);
u.open();
if(t){var v=u.getSelectables()[0];

if(v){u.setSelectedButton(v);
}}}},_onMenuChange:function(e){var b=this.getMenu();

if(b.isVisible()){this.addState(n);
}else{this.removeState(n);
}},_onMouseDown:function(e){var a=this.getMenu();

if(a){if(!a.isVisible()){this.open();
}else{a.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(m);
},_onMouseOut:function(e){this.removeState(m);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:this.removeState(d);
this.addState(n);
var w=this.getMenu();

if(w){if(!w.isVisible()){this.open();
}else{w.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var c="qx.ui.table.IColumnMenuButton";
qx.Interface.define(c,{properties:{menu:{}},members:{factory:function(a,b){return true;
},empty:function(){return true;
}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){arguments.callee.base.call(this);
},members:{__zV:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
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
}},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}}});
})();
(function(){var R="keypress",Q="interval",P="keydown",O="mousedown",N="keyup",M="__mh",L="blur",K="Enter",J="__mi",I="Up",C="Escape",H="qx.ui.menu.Manager",F="Left",B="__mg",A="Down",E="Right",D="singleton",G="Space";
qx.Class.define(H,{type:D,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__mg=[];
var bx=document.body;
var by=qx.event.Registration;
by.addListener(window.document.documentElement,O,this._onMouseDown,this,true);
by.addListener(bx,P,this._onKeyUpDown,this,true);
by.addListener(bx,N,this._onKeyUpDown,this,true);
by.addListener(bx,R,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,L,this.hideAll,this);
this.__mh=new qx.event.Timer;
this.__mh.addListener(Q,this._onOpenInterval,this);
this.__mi=new qx.event.Timer;
this.__mi.addListener(Q,this._onCloseInterval,this);
},members:{__mj:null,__mk:null,__mh:null,__mi:null,__mg:null,_getChild:function(h,j,k,l){var m=h.getChildren();
var length=m.length;
var n;

for(var i=j;i<length&&i>=0;i+=k){n=m[i];

if(n.isEnabled()&&!n.isAnonymous()){return n;
}}
if(l){i=i==length?0:length-1;

for(;i!=j;i+=k){n=m[i];

if(n.isEnabled()&&!n.isAnonymous()){return n;
}}}return null;
},_isInMenu:function(v){while(v){if(v instanceof qx.ui.menu.Menu){return true;
}v=v.getLayoutParent();
}return false;
},_getMenuButton:function(z){while(z){if(z instanceof qx.ui.menu.AbstractButton){return z;
}z=z.getLayoutParent();
}return null;
},add:function(t){{};
var u=this.__mg;
u.push(t);
t.setZIndex(1e6+u.length);
},remove:function(r){{};
var s=this.__mg;

if(s){qx.lang.Array.remove(s,r);
}},hideAll:function(){var bj=this.__mg;

if(bj){for(var i=bj.length-1;i>=0;i--){bj[i].exclude();
}}},getActiveMenu:function(){var x=this.__mg;
return x.length>0?x[x.length-1]:null;
},scheduleOpen:function(g){this.cancelClose(g);
if(g.isVisible()){if(this.__mj){this.cancelOpen(this.__mj);
}}else if(this.__mj!=g){this.__mj=g;
this.__mh.restartWith(g.getOpenInterval());
}},scheduleClose:function(bc){this.cancelOpen(bc);
if(!bc.isVisible()){if(this.__mk){this.cancelClose(this.__mk);
}}else if(this.__mk!=bc){this.__mk=bc;
this.__mi.restartWith(bc.getCloseInterval());
}},cancelOpen:function(w){if(this.__mj==w){this.__mh.stop();
this.__mj=null;
}},cancelClose:function(o){if(this.__mk==o){this.__mi.stop();
this.__mk=null;
}},_onOpenInterval:function(e){this.__mh.stop();
this.__mj.open();
this.__mj=null;
},_onCloseInterval:function(e){this.__mi.stop();
this.__mk.exclude();
this.__mk=null;
},_onMouseDown:function(e){var y=e.getTarget();
y=qx.ui.core.Widget.getWidgetByElement(y);
if(y==null){this.hideAll();
return;
}if(y.getMenu&&y.getMenu()&&y.getMenu().isVisible()){return;
}if(this.__mg.length>0&&!this._isInMenu(y)){this.hideAll();
}},__ml:{"Enter":1,"Space":1},__mm:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var S=this.getActiveMenu();

if(!S){return;
}var T=e.getKeyIdentifier();

if(this.__mm[T]||(this.__ml[T]&&S.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var a=this.getActiveMenu();

if(!a){return;
}var b=e.getKeyIdentifier();
var d=this.__mm[b];
var c=this.__ml[b];

if(d){switch(b){case I:this._onKeyPressUp(a);
break;
case A:this._onKeyPressDown(a);
break;
case F:this._onKeyPressLeft(a);
break;
case E:this._onKeyPressRight(a);
break;
case C:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(c){var f=a.getSelectedButton();

if(f){switch(b){case K:this._onKeyPressEnter(a,f,e);
break;
case G:this._onKeyPressSpace(a,f,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(bz){var bA=bz.getSelectedButton();
var bB=bz.getChildren();
var bD=bA?bz.indexOf(bA)-1:bB.length-1;
var bC=this._getChild(bz,bD,-1,true);
if(bC){bz.setSelectedButton(bC);
}else{bz.resetSelectedButton();
}},_onKeyPressDown:function(bt){var bu=bt.getSelectedButton();
var bw=bu?bt.indexOf(bu)+1:0;
var bv=this._getChild(bt,bw,1,true);
if(bv){bt.setSelectedButton(bv);
}else{bt.resetSelectedButton();
}},_onKeyPressLeft:function(U){var ba=U.getOpener();

if(!ba){return;
}if(ba instanceof qx.ui.menu.Button){var W=ba.getLayoutParent();
W.resetOpenedButton();
W.setSelectedButton(ba);
}else if(ba instanceof qx.ui.menubar.Button){var Y=ba.getMenuBar().getMenuButtons();
var V=Y.indexOf(ba);
if(V===-1){return;
}var bb=null;
var length=Y.length;

for(var i=1;i<=length;i++){var X=Y[(V-i+length)%length];

if(X.isEnabled()){bb=X;
break;
}}
if(bb&&bb!=ba){bb.open(true);
}}},_onKeyPressRight:function(bk){var bm=bk.getSelectedButton();
if(bm){var bl=bm.getMenu();

if(bl){bk.setOpenedButton(bm);
var bs=this._getChild(bl,0,1);

if(bs){bl.setSelectedButton(bs);
}return;
}}else if(!bk.getOpenedButton()){var bs=this._getChild(bk,0,1);

if(bs){bk.setSelectedButton(bs);

if(bs.getMenu()){bk.setOpenedButton(bs);
}return;
}}var bq=bk.getOpener();
if(bq instanceof qx.ui.menu.Button&&bm){while(bq){bq=bq.getLayoutParent();

if(bq instanceof qx.ui.menu.Menu){bq=bq.getOpener();

if(bq instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bq){return;
}}if(bq instanceof qx.ui.menubar.Button){var bp=bq.getMenuBar().getMenuButtons();
var bn=bp.indexOf(bq);
if(bn===-1){return;
}var br=null;
var length=bp.length;

for(var i=1;i<=length;i++){var bo=bp[(bn+i)%length];

if(bo.isEnabled()){br=bo;
break;
}}
if(br&&br!=bq){br.open(true);
}}},_onKeyPressEnter:function(bg,bh,e){if(bh.hasListener(R)){var bi=e.clone();
bi.setBubbles(false);
bi.setTarget(bh);
bh.dispatchEvent(bi);
}this.hideAll();
},_onKeyPressSpace:function(bd,be,e){if(be.hasListener(R)){var bf=e.clone();
bf.setBubbles(false);
bf.setTarget(be);
be.dispatchEvent(bf);
}}},destruct:function(){var q=qx.event.Registration;
var p=document.body;
q.removeListener(window.document.documentElement,O,this._onMouseDown,this,true);
q.removeListener(p,P,this._onKeyUpDown,this,true);
q.removeListener(p,N,this._onKeyUpDown,this,true);
q.removeListener(p,R,this._onKeyPress,this,true);
this._disposeObjects(M,J);
this._disposeArray(B);
}});
})();
(function(){var K="slidebar",J="Integer",I="resize",H="qx.ui.core.Widget",G="selected",F="visible",E="Boolean",D="mouseout",C="excluded",B="menu",ba="_applySelectedButton",Y="_applySpacingY",X="_blocker",W="_applyCloseInterval",V="_applyBlockerColor",U="_applyIconColumnWidth",T="mouseover",S="_applyArrowColumnWidth",R="qx.ui.menu.Menu",Q="Color",O="Number",P="_applyOpenInterval",M="_applySpacingX",N="_applyBlockerOpacity",L="_applyOpenedButton";
qx.Class.define(R,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
var b=this.getApplicationRoot();
b.add(this);
this.addListener(T,this._onMouseOver);
this.addListener(D,this._onMouseOut);
this.addListener(I,this._onResize,this);
b.addListener(I,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(b);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:B},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:C},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:J,apply:M,init:0,themeable:true},spacingY:{check:J,apply:Y,init:0,themeable:true},iconColumnWidth:{check:J,init:0,themeable:true,apply:U},arrowColumnWidth:{check:J,init:0,themeable:true,apply:S},blockerColor:{check:Q,init:null,nullable:true,apply:V,themeable:true},blockerOpacity:{check:O,init:1,apply:N,themeable:true},selectedButton:{check:H,nullable:true,apply:ba},openedButton:{check:H,nullable:true,apply:L},opener:{check:H,nullable:true},openInterval:{check:J,themeable:true,init:250,apply:P},closeInterval:{check:J,themeable:true,init:250,apply:W},blockBackground:{check:E,themeable:true,init:false}},members:{__mo:null,__mp:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__mr();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__mr();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(j){this.placeToPoint(j);
this.__mr();
this.show();
this._placementTarget=j;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var bf=[];
var bg=this.getChildren();

for(var i=0;i<bg.length;i++){if(bg[i].isEnabled()){bf.push(bg[i]);
}}return bf;
},_applyIconColumnWidth:function(k,l){this._getMenuLayout().setIconColumnWidth(k);
},_applyArrowColumnWidth:function(bn,bo){this._getMenuLayout().setArrowColumnWidth(bn);
},_applySpacingX:function(bd,be){this._getMenuLayout().setColumnSpacing(bd);
},_applySpacingY:function(bb,bc){this._getMenuLayout().setSpacing(bb);
},_applyVisibility:function(d,f){arguments.callee.base.call(this,d,f);
var g=qx.ui.menu.Manager.getInstance();

if(d===F){g.add(this);
var h=this.getParentMenu();

if(h){h.setOpenedButton(this.getOpener());
}}else if(f===F){g.remove(this);
var h=this.getParentMenu();

if(h&&h.getOpenedButton()==this.getOpener()){h.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__mq();
},__mq:function(){if(this.isVisible()){if(this.getBlockBackground()){var c=this.getZIndex();
this._blocker.blockContent(c-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var bp=this.getOpener();

if(!bp||!(bp instanceof qx.ui.menu.AbstractButton)){return null;
}
while(bp&&!(bp instanceof qx.ui.menu.Menu)){bp=bp.getLayoutParent();
}return bp;
},_applySelectedButton:function(r,s){if(s){s.removeState(G);
}
if(r){r.addState(G);
}},_applyOpenedButton:function(bq,br){if(br){br.getMenu().exclude();
}
if(bq){bq.getMenu().open();
}},_applyBlockerColor:function(bl,bm){this._blocker.setColor(bl);
},_applyBlockerOpacity:function(bj,bk){this._blocker.setOpacity(bj);
},getChildrenContainer:function(){return this.getChildControl(K,true)||this;
},_createChildControlImpl:function(m){var n;

switch(m){case K:var n=new qx.ui.menu.MenuSlideBar();
var p=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var o=n.getLayout();
n.setLayout(p);
o.dispose();
var q=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<q.length;i++){n.add(q[i]);
}this.removeListener(I,this._onResize,this);
n.getChildrenContainer().addListener(I,this._onResize,this);
this._add(n);
break;
}return n||arguments.callee.base.call(this,m);
},_getMenuLayout:function(){if(this.hasChildControl(K)){return this.getChildControl(K).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(K)){return this.getChildControl(K).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__mr:function(){var z=this._getMenuBounds();

if(!z){this.addListenerOnce(I,this.__mr,this);
return;
}var y=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var A=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(z.height+top);
this.moveTo(A,0);
});
}else if(top+z.height>y){this._assertSlideBar(function(){this.setHeight(y-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(a){if(this.hasChildControl(K)){return a.call(this);
}this.__mp=a;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(K);

if(this.__mp){this.__mp.call(this);
delete this.__mp;
}},_onResize:function(){if(this.isVisible()){var x=this._placementTarget;

if(!x){return;
}else if(x instanceof qx.ui.core.Widget){this.placeToWidget(x);
}else if(x.top!==undefined){this.placeToPoint(x);
}else{throw new Error("Unknown target: "+x);
}this.__mr();
}},_onMouseOver:function(e){var u=qx.ui.menu.Manager.getInstance();
u.cancelClose(this);
var v=e.getTarget();

if(v.isEnabled()&&v instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(v);
var t=v.getMenu&&v.getMenu();

if(t){t.setOpener(v);
u.scheduleOpen(t);
this.__mo=t;
}else{var w=this.getOpenedButton();

if(w){u.scheduleClose(w.getMenu());
}
if(this.__mo){u.cancelOpen(this.__mo);
this.__mo=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var bh=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bi=this.getOpenedButton();
bi?this.setSelectedButton(bi):this.resetSelectedButton();
if(bi){bh.cancelClose(bi.getMenu());
}if(this.__mo){bh.cancelOpen(this.__mo);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(I,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(X);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__ms:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__ms=[0,0,0,0];
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
}var p=arguments.callee.base.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__ms||null;
}},destruct:function(){this.__ms=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var w="icon",v="label",u="arrow",t="shortcut",s="changeLocale",r="qx.dynlocale",q="submenu",p="on",o="String",n="qx.ui.menu.Menu",h="qx.ui.menu.AbstractButton",m="keypress",k="",g="_applyIcon",f="mouseup",j="abstract",i="_applyLabel",l="_applyMenu",d="changeCommand";
qx.Class.define(h,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:j,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(f,this._onMouseUp);
this.addListener(m,this._onKeyPress);
this.addListener(d,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:o,apply:i,nullable:true},menu:{check:n,apply:l,nullable:true},icon:{check:o,apply:g,themeable:true,nullable:true}},members:{_createChildControlImpl:function(B){var C;

switch(B){case w:C=new qx.ui.basic.Image;
C.setAnonymous(true);
this._add(C,{column:0});
break;
case v:C=new qx.ui.basic.Label;
C.setAnonymous(true);
this._add(C,{column:1});
break;
case t:C=new qx.ui.basic.Label;
C.setAnonymous(true);
this._add(C,{column:2});
break;
case u:C=new qx.ui.basic.Image;
C.setAnonymous(true);
this._add(C,{column:3});
break;
}return C||arguments.callee.base.call(this,B);
},_forwardStates:{selected:1},getChildrenSizes:function(){var D=0,E=0,F=0,J=0;

if(this._isChildControlVisible(w)){var K=this.getChildControl(w);
D=K.getMarginLeft()+K.getSizeHint().width+K.getMarginRight();
}
if(this._isChildControlVisible(v)){var H=this.getChildControl(v);
E=H.getMarginLeft()+H.getSizeHint().width+H.getMarginRight();
}
if(this._isChildControlVisible(t)){var G=this.getChildControl(t);
F=G.getMarginLeft()+G.getSizeHint().width+G.getMarginRight();
}
if(this._isChildControlVisible(u)){var I=this.getChildControl(u);
J=I.getMarginLeft()+I.getSizeHint().width+I.getMarginRight();
}return [D,E,F,J];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var c=e.getData();

if(qx.core.Variant.isSet(r,p)){var a=e.getOldData();

if(!a){qx.locale.Manager.getInstance().addListener(s,this._onChangeLocale,this);
}
if(!c){qx.locale.Manager.getInstance().removeListener(s,this._onChangeLocale,this);
}}var b=c!=null?c.toString():k;
this.getChildControl(t).setValue(b);
},_onChangeLocale:qx.core.Variant.select(r,{"on":function(e){var L=this.getCommand();

if(L!=null){this.getChildControl(t).setValue(L.toString());
}},"off":null}),_applyIcon:function(M,N){if(M){this._showChildControl(w).setSource(M);
}else{this._excludeChildControl(w);
}},_applyLabel:function(x,y){if(x){this._showChildControl(v).setValue(x);
}else{this._excludeChildControl(v);
}},_applyMenu:function(z,A){if(A){A.resetOpener();
A.removeState(q);
}
if(z){this._showChildControl(u);
z.setOpener(this);
z.addState(q);
}else{this._excludeChildControl(u);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(r,p)){qx.locale.Manager.getInstance().removeListener(s,this._onChangeLocale,this);
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
}var o=this.__mt(q[0]);
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
}},__mt:function(x){while(!(x instanceof qx.ui.menu.Menu)){x=x.getLayoutParent();
}return x;
},_computeSizeHint:function(){var v=this._getLayoutChildren();
var u=0;
var w=0;

for(var i=0,l=v.length;i<l;i++){var t=v[i].getSizeHint();
w+=t.width;
u=Math.max(u,t.height);
}return {width:w,height:u};
}}});
})();
(function(){var A="horizontal",z="scrollpane",y="vertical",x="button-backward",w="button-forward",v="content",u="execute",t="qx.ui.container.SlideBar",s="scrollY",r="removeChildWidget",n="scrollX",q="_applyOrientation",p="mousewheel",m="Integer",l="slidebar",o="update";
qx.Class.define(t,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(I){arguments.callee.base.call(this);
var J=this.getChildControl(z);
this._add(J,{flex:1});

if(I!=null){this.setOrientation(I);
}else{this.initOrientation();
}this.addListener(p,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:l},orientation:{check:[A,y],init:A,apply:q},scrollStep:{check:m,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(v);
},_createChildControlImpl:function(G){var H;

switch(G){case w:H=new qx.ui.form.RepeatButton;
H.addListener(u,this._onExecuteForward,this);
H.setFocusable(false);
this._addAt(H,2);
break;
case x:H=new qx.ui.form.RepeatButton;
H.addListener(u,this._onExecuteBackward,this);
H.setFocusable(false);
this._addAt(H,0);
break;
case v:H=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){H.addListener(r,this._onRemoveChild,this);
}this.getChildControl(z).add(H);
break;
case z:H=new qx.ui.core.scroll.ScrollPane();
H.addListener(o,this._onResize,this);
H.addListener(n,this._onScroll,this);
H.addListener(s,this._onScroll,this);
break;
}return H||arguments.callee.base.call(this,G);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(B){var C=this.getChildControl(z);

if(this.getOrientation()===A){C.scrollByX(B);
}else{C.scrollByY(B);
}},scrollTo:function(g){var h=this.getChildControl(z);

if(this.getOrientation()===A){h.scrollToX(g);
}else{h.scrollToY(g);
}},_applyOrientation:function(a,b){var f=[this.getLayout(),this._getLayout()];
var d=this.getChildControl(w);
var c=this.getChildControl(x);
if(b==y){d.removeState(y);
c.removeState(y);
d.addState(A);
c.addState(A);
}else if(b==A){d.removeState(A);
c.removeState(A);
d.addState(y);
c.addState(y);
}
if(a==A){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(f[0]){f[0].dispose();
}
if(f[1]){f[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(z).getChildren()[0];

if(!content){return;
}var i=this.getInnerSize();
var k=content.getBounds();
var j=(this.getOrientation()===A)?k.width>i.width:k.height>i.height;

if(j){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(z).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var E=this.getChildControl(z);

if(this.getOrientation()===A){var D=E.getScrollX();
var F=E.getScrollMaxX();
}else{var D=E.getScrollY();
var F=E.getScrollMaxY();
}this.getChildControl(x).setEnabled(D>0);
this.getChildControl(w).setEnabled(D<F);
},_showArrows:function(){this._showChildControl(w);
this._showChildControl(x);
},_hideArrows:function(){this._excludeChildControl(w);
this._excludeChildControl(x);
this.scrollTo(0);
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){arguments.callee.base.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g){var h;

switch(g){case c:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteForward,this);
this._addAt(h,2);
break;
case e:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteBackward,this);
this._addAt(h,0);
break;
}return h||arguments.callee.base.call(this,g);
}}});
})();
(function(){var o="pressed",n="abandoned",m="Integer",l="hovered",k="qx.event.type.Event",j="Enter",i="Space",h="press",g="qx.ui.form.RepeatButton",f="release",b="interval",d="__mu",c="execute";
qx.Class.define(g,{extend:qx.ui.form.Button,construct:function(p,q){arguments.callee.base.call(this,p,q);
this.__mu=new qx.event.AcceleratingTimer();
this.__mu.addListener(b,this._onInterval,this);
},events:{"execute":k,"press":k,"release":k},properties:{interval:{check:m,init:100},firstInterval:{check:m,init:500},minTimer:{check:m,init:20},timerDecrease:{check:m,init:2}},members:{__mv:null,__mu:null,press:function(){if(this.isEnabled()){if(!this.hasState(o)){this.__mw();
}this.removeState(n);
this.addState(o);
}},release:function(a){if(!this.isEnabled()){return;
}if(this.hasState(o)){if(!this.__mv){this.execute();
}}this.removeState(o);
this.removeState(n);
this.__mx();
},_applyEnabled:function(r,s){arguments.callee.base.call(this,r,s);

if(!r){this.removeState(o);
this.removeState(n);
this.__mx();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
this.__mu.start();
}this.addState(l);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(l);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
this.__mu.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__mw();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(n)){this.addState(l);

if(this.hasState(o)&&!this.__mv){this.execute();
}}this.__mx();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case j:case i:if(this.hasState(o)){if(!this.__mv){this.execute();
}this.removeState(o);
this.removeState(n);
e.stopPropagation();
this.__mx();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case j:case i:this.removeState(n);
this.addState(o);
e.stopPropagation();
this.__mw();
}},_onInterval:function(e){this.__mv=true;
this.fireEvent(c);
},__mw:function(){this.fireEvent(h);
this.__mv=false;
this.__mu.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(n);
this.addState(o);
},__mx:function(){this.fireEvent(f);
this.__mu.stop();
this.removeState(n);
this.removeState(o);
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var e="Integer",d="interval",c="__my",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__my=new qx.event.Timer(this.getInterval());
this.__my.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__my:null,__mz:null,start:function(){this.__my.setInterval(this.getFirstInterval());
this.__my.start();
},stop:function(){this.__my.stop();
this.__mz=null;
},_onInterval:function(){this.__my.stop();

if(this.__mz==null){this.__mz=this.getInterval();
}this.__mz=Math.max(this.getMinimum(),this.__mz-this.getDecrease());
this.__my.setInterval(this.__mz);
this.__my.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var I="resize",H="scrollY",G="update",F="scrollX",E="_applyScrollX",D="_applyScrollY",C="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",B="appear",A="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",z="qx.event.type.Event",v="qx.ui.core.scroll.ScrollPane",w="scroll";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(I,this._onUpdate);
var g=this.getContentElement();
g.addListener(w,this._onScroll,this);
g.addListener(B,this._onAppear,this);
},events:{update:z},properties:{scrollX:{check:C,apply:E,event:F,init:0},scrollY:{check:A,apply:D,event:H,init:0}},members:{add:function(a){var b=this._getChildren()[0];

if(b){this._remove(b);
b.removeListener(I,this._onUpdate,this);
}
if(a){this._add(a);
a.addListener(I,this._onUpdate,this);
}},remove:function(f){if(f){this._remove(f);
f.removeListener(I,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(G);
},_onScroll:function(e){var K=this.getContentElement();
this.setScrollX(K.getScrollX());
this.setScrollY(K.getScrollY());
},_onAppear:function(e){var n=this.getContentElement();
var k=this.getScrollX();
var l=n.getScrollX();

if(k!=l){n.scrollToX(k);
}var o=this.getScrollY();
var m=n.getScrollY();

if(o!=m){n.scrollToY(o);
}},getItemTop:function(L){var top=0;

do{top+=L.getBounds().top;
L=L.getLayoutParent();
}while(L&&L!==this);
return top;
},getItemBottom:function(N){return this.getItemTop(N)+N.getBounds().height;
},getItemLeft:function(h){var i=0;
var parent;

do{i+=h.getBounds().left;
parent=h.getLayoutParent();

if(parent){i+=parent.getInsets().left;
}h=parent;
}while(h&&h!==this);
return i;
},getItemRight:function(J){return this.getItemLeft(J)+J.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var s=this.getInnerSize();
var r=this.getScrollSize();

if(s&&r){return Math.max(0,r.width-s.width);
}return 0;
},getScrollMaxY:function(){var d=this.getInnerSize();
var c=this.getScrollSize();

if(d&&c){return Math.max(0,c.height-d.height);
}return 0;
},scrollToX:function(t){var u=this.getScrollMaxX();

if(t<0){t=0;
}else if(t>u){t=u;
}this.setScrollX(t);
},scrollToY:function(p){var q=this.getScrollMaxY();

if(p<0){p=0;
}else if(p>q){p=q;
}this.setScrollY(p);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(M){this.getContentElement().scrollToX(M);
},_applyScrollY:function(j){this.getContentElement().scrollToY(j);
}}});
})();
(function(){var k="Integer",j="hovered",i="hover-button",h="interval",g="mouseover",f="mouseout",d="__mA",c="qx.ui.form.HoverButton";
qx.Class.define(c,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(a,b){arguments.callee.base.call(this,a,b);
this.addListener(g,this._onMouseOver,this);
this.addListener(f,this._onMouseOut,this);
this.__mA=new qx.event.AcceleratingTimer();
this.__mA.addListener(h,this._onInterval,this);
},properties:{appearance:{refine:true,init:i},interval:{check:k,init:80},firstInterval:{check:k,init:200},minTimer:{check:k,init:20},timerDecrease:{check:k,init:2}},members:{__mA:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__mA.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(j);
},_onMouseOut:function(e){this.__mA.stop();
this.removeState(j);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__mA.stop();
}}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){arguments.callee.base.call(this);
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
(function(){var k="pressed",j="hovered",i="inherit",h="qx.ui.menubar.Button",g="keydown",f="menubar-button",d="keyup";
qx.Class.define(h,{extend:qx.ui.form.MenuButton,construct:function(a,b,c){arguments.callee.base.call(this,a,b,c);
this.removeListener(g,this._onKeyDown);
this.removeListener(d,this._onKeyUp);
},properties:{appearance:{refine:true,init:f},show:{refine:true,init:i},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(l){arguments.callee.base.call(this,l);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var n=this.getMenu();
var menubar=this.getMenuBar();

if(n.isVisible()){this.addState(k);
if(menubar){menubar.setOpenMenu(n);
}}else{this.removeState(k);
if(menubar&&menubar.getOpenMenu()==n){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
var m=this.getMenu();

if(m&&m.isVisible()&&!this.hasState(k)){this.addState(k);
}},_onMouseOver:function(e){this.addState(j);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__mb:false,_setAllowMenuOpenHover:function(t){this.__mb=t;
},_isAllowMenuOpenHover:function(){return this.__mb;
},_applySpacing:function(m,n){var o=this._getLayout();
m==null?o.resetSpacing():o.setSpacing(m);
},addSpacer:function(){var s=new qx.ui.core.Spacer;
this._add(s,{flex:1});
return s;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var q=this.getChildren();
var p=[];
var r;

for(var i=0,l=q.length;i<l;i++){r=q[i];

if(r instanceof qx.ui.menubar.Button){p.push(r);
}else if(r instanceof qx.ui.toolbar.Part){p.push.apply(p,r.getMenuButtons());
}}return p;
}}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(c,d){arguments.callee.base.call(this);
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
(function(){var p="container",o="handle",n="both",m="Integer",k="middle",j="qx.ui.toolbar.Part",h="icon",g="label",f="changeShow",e="_applySpacing",d="toolbar/part";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(o);
},properties:{appearance:{refine:true,init:d},show:{init:n,check:[n,g,h],inheritable:true,event:f},spacing:{nullable:true,check:m,themeable:true,apply:e}},members:{_createChildControlImpl:function(t){var u;

switch(t){case o:u=new qx.ui.basic.Image();
u.setAlignY(k);
this._add(u);
break;
case p:u=new qx.ui.toolbar.PartContainer;
this._add(u);
break;
}return u||arguments.callee.base.call(this,t);
},getChildrenContainer:function(){return this.getChildControl(p);
},_applySpacing:function(q,r){var s=this.getChildControl(p).getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var b=this.getChildren();
var a=[];
var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];

if(c instanceof qx.ui.menubar.Button){a.push(c);
}}return a;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var h="checked",g="menu-checkbox",f="Boolean",d="_applyValue",c="changeValue",b="qx.ui.menu.CheckBox",a="execute";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(k,l){arguments.callee.base.call(this);
if(k!=null){if(k.translate){this.setLabel(k.translate());
}else{this.setLabel(k);
}}
if(l!=null){this.setMenu(l);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:f,init:false,apply:d,event:c,nullable:true}},members:{_applyValue:function(i,j){i?this.addState(h):this.removeState(h);
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
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(i){arguments.callee.base.call(this,i);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__zW:false,_applyVisible:function(g,h){if(!this.bInListener){this.setValue(g);
}}}});
})();
(function(){var b="qx.ui.table.ICellEditorFactory";
qx.Interface.define(b,{members:{createCellEditor:function(a){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var f="",e="Function",d="abstract",c="number",b="appear",a="qx.ui.table.celleditor.AbstractField";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:d,properties:{validationFunction:{check:e,nullable:true,init:null}},members:{_createEditor:function(){throw new Error("Abstract method call!");
},createCellEditor:function(g){var h=this._createEditor();
h.originalValue=g.value;

if(g.value===null||g.value===undefined){g.value=f;
}h.setValue(f+g.value);
h.addListener(b,function(){h.selectAllText();
});
return h;
},getCellEditorValue:function(i){var k=i.getValue();
var j=this.getValidationFunction();

if(j){k=j(k,i.originalValue);
}
if(typeof i.originalValue==c){k=parseFloat(k);
}return k;
}}});
})();
(function(){var b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{_createEditor:function(){var c=new qx.ui.form.TextField();
c.setAppearance(a);
return c;
}}});
})();
(function(){var j="qx.event.type.Data",h="visibilityChanged",g="orderChanged",f="visibilityChangedPre",e="widthChanged",d="qx.ui.table.columnmodel.Basic",c="__Ae",b="__Af",a="__Ad";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__zX=[];
this.__zY=[];
},events:{"widthChanged":j,"visibilityChangedPre":j,"visibilityChanged":j,"orderChanged":j},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__Aa:null,__Ab:null,__zY:null,__zX:null,__Ac:null,__Ad:null,__Ae:null,__Af:null,init:function(S){{};
this.__Ac=[];
var V=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var W=this.__Ad||(this.__Ad=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var U=this.__Ae||(this.__Ae=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var T=this.__Af||(this.__Af=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__zX=[];
this.__zY=[];

for(var Y=0;Y<S;Y++){this.__Ac[Y]={width:V,headerRenderer:W,dataRenderer:U,editorFactory:T};
this.__zX[Y]=Y;
this.__zY[Y]=Y;
}this.__Ab=null;

for(var Y=0;Y<S;Y++){var X={col:Y,visible:true};
this.fireDataEvent(f,X);
this.fireDataEvent(h,X);
}},getVisibleColumns:function(){return this.__zY!=null?this.__zY:[];
},setColumnWidth:function(o,p){{};
var r=this.__Ac[o].width;

if(r!=p){this.__Ac[o].width=p;
var q={col:o,newWidth:p,oldWidth:r};
this.fireDataEvent(e,q);
}},getColumnWidth:function(bi){{};
return this.__Ac[bi].width;
},setHeaderCellRenderer:function(ba,bb){{};
var bc=this.__Ac[ba].headerRenderer;

if(bc!==this.__Ad){bc.dispose();
}this.__Ac[ba].headerRenderer=bb;
},getHeaderCellRenderer:function(K){{};
return this.__Ac[K].headerRenderer;
},setDataCellRenderer:function(s,t){{};
var u=this.__Ac[s].headerRenderer;

if(u!==this.__Ae){u.dispose();
}this.__Ac[s].dataRenderer=t;
},getDataCellRenderer:function(v){{};
return this.__Ac[v].dataRenderer;
},setCellEditorFactory:function(M,N){{};
var O=this.__Ac[M].headerRenderer;

if(O!==this.__Af){O.dispose();
}this.__Ac[M].editorFactory=N;
},getCellEditorFactory:function(n){{};
return this.__Ac[n].editorFactory;
},_getColToXPosMap:function(){if(this.__Ab==null){this.__Ab={};

for(var R=0;R<this.__zX.length;R++){var Q=this.__zX[R];
this.__Ab[Q]={overX:R};
}
for(var P=0;P<this.__zY.length;P++){var Q=this.__zY[P];
this.__Ab[Q].visX=P;
}}return this.__Ab;
},getVisibleColumnCount:function(){return this.__zY!=null?this.__zY.length:0;
},getVisibleColumnAtX:function(m){{};
return this.__zY[m];
},getVisibleX:function(L){{};
return this._getColToXPosMap()[L].visX;
},getOverallColumnCount:function(){return this.__zX.length;
},getOverallColumnAtX:function(bj){{};
return this.__zX[bj];
},getOverallX:function(k){{};
return this._getColToXPosMap()[k].overX;
},isColumnVisible:function(l){{};
return (this._getColToXPosMap()[l].visX!=null);
},setColumnVisible:function(w,y){{};

if(y!=this.isColumnVisible(w)){if(y){var E=this._getColToXPosMap();
var B=E[w].overX;

if(B==null){throw new Error("Showing column failed: "+w+". The column is not added to this TablePaneModel.");
}var C;

for(var x=B+1;x<this.__zX.length;x++){var D=this.__zX[x];
var z=E[D].visX;

if(z!=null){C=z;
break;
}}if(C==null){C=this.__zY.length;
}this.__zY.splice(C,0,w);
}else{var A=this.getVisibleX(w);
this.__zY.splice(A,1);
}this.__Ab=null;
if(!this.__Aa){var F={col:w,visible:y};
this.fireDataEvent(f,F);
this.fireDataEvent(h,F);
}}},moveColumn:function(bd,be){{};
this.__Aa=true;
var bh=this.__zX[bd];
var bf=this.isColumnVisible(bh);

if(bf){this.setColumnVisible(bh,false);
}this.__zX.splice(bd,1);
this.__zX.splice(be,0,bh);
this.__Ab=null;

if(bf){this.setColumnVisible(bh,true);
}this.__Aa=false;
var bg={col:bh,fromOverXPos:bd,toOverXPos:be};
this.fireDataEvent(g,bg);
},setColumnsOrder:function(G){{};

if(G.length==this.__zX.length){this.__Aa=true;
var J=new Array(G.length);

for(var H=0;H<this.__zX.length;H++){var I=this.isColumnVisible(H);
J[H]=I;

if(I){this.setColumnVisible(H,false);
}}this.__zX=qx.lang.Array.clone(G);
this.__Ab=null;
for(var H=0;H<this.__zX.length;H++){if(J[H]){this.setColumnVisible(H,true);
}}this.__Aa=false;
this.fireDataEvent(g);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__zX.length+", got "+G.length);
}}},destruct:function(){for(var i=0;i<this.__Ac.length;i++){this.__Ac[i].headerRenderer.dispose();
this.__Ac[i].dataRenderer.dispose();
this.__Ac[i].editorFactory.dispose();
}this.__zX=this.__zY=this.__Ac=this.__Ab=null;
this._disposeObjects(a,c,b);
}});
})();
(function(){var k="Boolean",j="invalid",i="qx.ui.form.MForm",h="_applyValid",g="",f="changeRequired",e="changeValid",d="changeInvalidMessage",c="String";
qx.Mixin.define(i,{properties:{valid:{check:k,init:true,apply:h,event:e},required:{check:k,init:false,event:f},invalidMessage:{check:c,init:g,event:d}},members:{_applyValid:function(a,b){a?this.removeState(j):this.addState(j);
}}});
})();
(function(){var ba="showingPlaceholder",Y="color",X="",W="none",V="qx.client",U="Boolean",T="qx.event.type.Data",S="readonly",R="input",Q="focusin",bM="visibility",bL="focusout",bK="hidden",bJ="absolute",bI="readOnly",bH="text",bG="_applyTextAlign",bF="px",bE="RegExp",bD=")",bh="syncAppearance",bi="gecko",bf="A",bg="change",bd="textAlign",be="focused",bb="center",bc="visible",bj="disabled",bk="url(",br="String",bp="resize",bv="qx.ui.form.AbstractField",bt="transparent",bz="off",bx="spellcheck",bm="false",bC="right",bB="PositiveInteger",bA="mshtml",bl="abstract",bn="block",bo="webkit",bq="_applyReadOnly",bs="_applyPlaceholder",bu="left",bw="changeValue",by="qx/static/blank.gif";
qx.Class.define(bv,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:bl,construct:function(w){arguments.callee.base.call(this);

if(w!=null){this.setValue(w);
}this.getContentElement().addListener(bg,this._onChangeContent,this);
this.addListener(bh,this._syncPlaceholder,this);
},events:{"input":T,"changeValue":T},properties:{textAlign:{check:[bu,bb,bC],nullable:true,themeable:true,apply:bG},readOnly:{check:U,apply:bq,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:bB,init:Infinity},liveUpdate:{check:U,init:false},placeholder:{check:br,nullable:true,apply:bs},filter:{check:bE,nullable:true,init:null}},members:{__le:true,__lf:null,__lg:null,__lh:null,getFocusElement:function(){var bN=this.getContentElement();

if(bN){return bN;
}},_createInputElement:function(){return new qx.html.Input(bH);
},renderLayout:function(c,top,d,f){var g=this._updateInsets;
var k=arguments.callee.base.call(this,c,top,d,f);
if(!k){return;
}var i=k.size||g;
var l=bF;

if(i||k.local||k.margin){var h=this.getInsets();
var innerWidth=d-h.left-h.right;
var innerHeight=f-h.top-h.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var j=this.getContentElement();

if(g){this.__lk().setStyles({"left":h.left+l,"top":h.top+l});
}
if(i){this.__lk().setStyles({"width":innerWidth+l,"height":innerHeight+l});
j.setStyles({"width":innerWidth+l,"height":innerHeight+l});
}},_createContentElement:function(){var m=this._createInputElement();
m.setStyles({"border":W,"padding":0,"margin":0,"display":bn,"background":bt,"outline":W,"appearance":W,"position":bJ,"autoComplete":bz});
m.setSelectable(this.getSelectable());
m.setEnabled(this.getEnabled());
m.addListener(R,this._onHtmlInput,this);
if(qx.core.Variant.isSet(V,bi)){m.setAttribute(bx,bm);
}if(qx.core.Variant.isSet(V,bo)){m.setStyle(bp,W);
}if(qx.core.Variant.isSet(V,bA)){m.setStyles({backgroundImage:bk+qx.util.ResourceManager.getInstance().toUri(by)+bD});
}return m;
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);
this.getContentElement().setEnabled(a);

if(a){this._showPlaceholder();
}else{this._removePlaceholder();
}},__li:{width:16,height:16},_getContentHint:function(){return {width:this.__li.width*10,height:this.__li.height||16};
},_applyFont:function(p,q){var r;

if(p){var s=qx.theme.manager.Font.getInstance().resolve(p);
r=s.getStyles();
}else{r=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(r);
this.__lk().setStyles(r);
if(p){this.__li=qx.bom.Label.getTextSize(bf,r);
}else{delete this.__li;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(M,N){if(M){this.getContentElement().setStyle(Y,qx.theme.manager.Color.getInstance().resolve(M));
this.__lk().setStyle(Y,qx.theme.manager.Color.getInstance().resolve(M));
}else{this.getContentElement().removeStyle(Y);
this.__lk().removeStyle(Y);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__li;
},_onHtmlInput:function(e){var A=e.getData();
var z=true;
this.__le=false;
if(this.getFilter()!=null){var B=X;
var x=A.search(this.getFilter());
var y=A;

while(x>=0){B=B+(y.charAt(x));
y=y.substring(x+1,y.length);
x=y.search(this.getFilter());
}
if(B!=A){z=false;
A=B;
this.getContentElement().setValue(A);
}}if(A.length>this.getMaxLength()){var z=false;
this.getContentElement().setValue(A.substr(0,this.getMaxLength()));
}if(z){this.fireDataEvent(R,A,this.__lh);
this.__lh=A;
if(this.getLiveUpdate()){this.__lj(A);
}}},__lj:function(G){this.fireNonBubblingEvent(bw,qx.event.type.Data,[G,this.__lg]);
this.__lg=G;
},setValue:function(C){if(C===null){if(this.__le){return C;
}C=X;
this.__le=true;
}else{this.__le=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(C)){var E=this.getContentElement();

if(C.length>this.getMaxLength()){C=C.substr(0,this.getMaxLength());
}
if(E.getValue()!=C){var F=E.getValue();
E.setValue(C);
var D=this.__le?null:C;
this.__lg=F;
this.__lj(D);
}this._showPlaceholder();
return C;
}throw new Error("Invalid value type: "+C);
},getValue:function(){var v=this.getContentElement().getValue();
return this.__le?null:v;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__le=e.getData()===null;
this.__lj(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(n,o){this.getContentElement().setTextSelection(n,o);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var I=this.getValue()||X;
var H=this.getPlaceholder();

if(H!=null&&I==X&&!this.hasState(be)&&!this.hasState(bj)){if(this.hasState(ba)){this._syncPlaceholder();
}else{this.addState(ba);
}}},_removePlaceholder:function(){if(this.hasState(ba)){this.__lk().setStyle(bM,bK);
this.removeState(ba);
}},_syncPlaceholder:function(){if(this.hasState(ba)){this.__lk().setStyle(bM,bc);
}},__lk:function(){if(this.__lf==null){this.__lf=new qx.html.Label();
this.__lf.setStyles({"visibility":bK,"zIndex":6,"position":bJ});
this.getContainerElement().add(this.__lf);
}return this.__lf;
},_applyPlaceholder:function(t,u){this.__lk().setValue(t);

if(t!=null){this.addListener(Q,this._removePlaceholder,this);
this.addListener(bL,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(Q,this._removePlaceholder,this);
this.removeListener(bL,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(O,P){this.getContentElement().setStyle(bd,O);
},_applyReadOnly:function(J,K){var L=this.getContentElement();
L.setAttribute(bI,J);

if(J){this.addState(S);
this.setFocusable(false);
}else{this.removeState(S);
this.setFocusable(true);
}}},destruct:function(){this.__lf=null;
}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var r="none",q="wrap",p="value",o="qx.client",n="textarea",m="off",l="on",k="qxSelectable",j="",i="webkit",e="input",h="qx.html.Input",g="select",d="disabled",c="read-only",f="userSelect";
qx.Class.define(h,{extend:qx.html.Element,construct:function(z){arguments.callee.base.call(this);
this.__ll=z;
if(z===g||z===n){this.setNodeName(z);
}else{this.setNodeName(e);
}},members:{__ll:null,__lm:null,__ln:null,_createDomElement:function(){return qx.bom.Input.create(this.__ll);
},_applyProperty:function(name,s){arguments.callee.base.call(this,name,s);
var t=this.getDomElement();

if(name===p){qx.bom.Input.setValue(t,s);
}else if(name===q){qx.bom.Input.setWrap(t,s);
}},setEnabled:qx.core.Variant.select(o,{"webkit":function(u){this.__ln=u;

if(!u){this.setStyles({"userModify":c,"userSelect":r});
}else{this.setStyles({"userModify":null,"userSelect":this.__lm?null:r});
}},"default":function(a){this.setAttribute(d,a===false);
}}),setSelectable:qx.core.Variant.select(o,{"webkit":function(x){this.__lm=x;
this.setAttribute(k,x?l:m);
if(qx.core.Variant.isSet(o,i)){var y=this.__ln?x?null:r:r;
this.setStyle(f,y);
}},"default":function(b){this.setAttribute(k,b?l:m);
}}),setValue:function(v){var w=this.getDomElement();

if(w){if(w.value!=v){qx.bom.Input.setValue(w,v);
}}else{this._setProperty(p,v);
}return this;
},getValue:function(){var B=this.getDomElement();

if(B){return qx.bom.Input.getValue(B);
}return this._getProperty(p)||j;
},setWrap:function(A){if(this.__ll===n){this._setProperty(q,A);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__ll===n){return this._getProperty(q);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
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
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var S="Boolean",R="resize-line",Q="mousedown",P="qx.event.type.Data",O="mouseup",N="qx.ui.table.pane.CellEvent",M="scroll",L="focus-indicator",K="excluded",J="scrollbar-y",bQ="visible",bP="mousemove",bO="header",bN="editing",bM="click",bL="modelChanged",bK="scrollbar-x",bJ="cellClick",bI="pane",bH="mouseout",ba="changeHorizontalScrollBarVisible",bb="bottom",X="_applyScrollTimeout",Y="changeScrollX",V="_applyTablePaneModel",W="Integer",T="dblclick",U="__yo",be="dataEdited",bf="__yp",bn="mousewheel",bl="interval",bv="qx.ui.table.pane.Scroller",bq="__yv",bD="_applyShowCellFocusIndicator",bA="__yt",bh="resize",bG="vertical",bF="changeScrollY",bE="appear",bg="table-scroller",bj="beforeSort",bk="cellDblclick",bm="__yr",bo="horizontal",br="losecapture",bx="contextmenu",bC="__yu",bc="__yn",bd="col-resize",bi="disappear",bu="_applyVerticalScrollBarVisible",bt="__ys",bs="_applyHorizontalScrollBarVisible",bz="cellContextmenu",by="close",bp="changeTablePaneModel",bw="qx.ui.table.pane.Model",I="__yq",bB="changeVerticalScrollBarVisible";
qx.Class.define(bv,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(fq){arguments.callee.base.call(this);
this.__ym=fq;
var fr=new qx.ui.layout.Grid();
fr.setColumnFlex(0,1);
fr.setRowFlex(1,1);
this._setLayout(fr);
this.__yn=this._showChildControl(bK);
this.__yo=this._showChildControl(J);
this.__yp=this._showChildControl(bO);
this.__yq=this._showChildControl(bI);
this.__yr=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__yr,{row:0,column:0,colSpan:2});
this.__ys=new qx.ui.table.pane.Clipper();
this.__ys.add(this.__yp);
this.__ys.addListener(br,this._onChangeCaptureHeader,this);
this.__ys.addListener(bP,this._onMousemoveHeader,this);
this.__ys.addListener(Q,this._onMousedownHeader,this);
this.__ys.addListener(O,this._onMouseupHeader,this);
this.__ys.addListener(bM,this._onClickHeader,this);
this.__yr.add(this.__ys,{flex:1});
this.__yt=new qx.ui.table.pane.Clipper();
this.__yt.add(this.__yq);
this.__yt.addListener(bn,this._onMousewheel,this);
this.__yt.addListener(bP,this._onMousemovePane,this);
this.__yt.addListener(Q,this._onMousedownPane,this);
this.__yt.addListener(O,this._onMouseupPane,this);
this.__yt.addListener(bM,this._onClickPane,this);
this.__yt.addListener(bx,this._onContextMenu,this);
this.__yt.addListener(T,this._onDblclickPane,this);
this.__yt.addListener(bh,this._onResizePane,this);
this._add(this.__yt,{row:1,column:0});
this.__yu=this.getChildControl(L);
this.getChildControl(R).hide();
this.addListener(bH,this._onMouseout,this);
this.addListener(bE,this._onAppear,this);
this.addListener(bi,this._onDisappear,this);
this.__yv=new qx.event.Timer();
this.__yv.addListener(bl,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":P,"changeScrollX":P,"cellClick":N,"cellDblclick":N,"cellContextmenu":N,"beforeSort":P},properties:{horizontalScrollBarVisible:{check:S,init:true,apply:bs,event:ba},verticalScrollBarVisible:{check:S,init:true,apply:bu,event:bB},tablePaneModel:{check:bw,apply:V,event:bp},liveResize:{check:S,init:false},focusCellOnMouseMove:{check:S,init:false},selectBeforeFocus:{check:S,init:false},showCellFocusIndicator:{check:S,init:true,apply:bD},scrollTimeout:{check:W,init:100,apply:X},appearance:{refine:true,init:bg}},members:{__yw:null,__ym:null,__yx:null,__yy:null,__yz:null,__yA:null,__yB:null,__yC:null,__yD:null,__yE:null,__yF:null,__yG:null,__yH:null,__yI:null,__yJ:null,__yK:null,__yL:null,__yM:null,__yN:null,__yO:null,__yP:null,__yQ:null,__yn:null,__yo:null,__yp:null,__ys:null,__yq:null,__yt:null,__yu:null,__yr:null,__yv:null,getPaneInsetRight:function(){var cg=this.getTopRightWidget();
var ch=cg&&cg.isVisible()&&cg.getBounds()?cg.getBounds().width:0;
var cf=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(ch,cf);
},setPaneWidth:function(cE){if(this.isVerticalScrollBarVisible()){cE+=this.getPaneInsetRight();
}this.setWidth(cE);
},_createChildControlImpl:function(dr){var ds;

switch(dr){case bO:ds=(this.getTable().getNewTablePaneHeader())(this);
break;
case bI:ds=(this.getTable().getNewTablePane())(this);
break;
case L:ds=new qx.ui.table.pane.FocusIndicator(this);
ds.setUserBounds(0,0,0,0);
ds.setZIndex(1000);
ds.addListener(O,this._onMouseupFocusIndicator,this);
this.__yt.add(ds);
ds.exclude();
break;
case R:ds=new qx.ui.core.Widget();
ds.setUserBounds(0,0,0,0);
ds.setZIndex(1000);
this.__yt.add(ds);
break;
case bK:ds=this._createScrollBar(bo).set({minWidth:0,alignY:bb});
ds.addListener(M,this._onScrollX,this);
this._add(ds,{row:2,column:0});
break;
case J:ds=this._createScrollBar(bG);
ds.addListener(M,this._onScrollY,this);
this._add(ds,{row:1,column:1});
break;
}return ds||arguments.callee.base.call(this,dr);
},_applyHorizontalScrollBarVisible:function(fu,fv){this.__yn.setVisibility(fu?bQ:K);

if(!fu){this.setScrollY(0,true);
}},_applyVerticalScrollBarVisible:function(E,F){this.__yo.setVisibility(E?bQ:K);

if(!E){this.setScrollX(0);
}},_applyTablePaneModel:function(eN,eO){if(eO!=null){eO.removeListener(bL,this._onPaneModelChanged,this);
}eN.addListener(bL,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(G,H){if(G){this._updateFocusIndicator();
}else{if(this.__yu){this.__yu.hide();
}}},getScrollY:function(){return this.__yo.getPosition();
},setScrollY:function(scrollY,D){this.__yo.scrollTo(scrollY);

if(D){this._updateContent();
}},getScrollX:function(){return this.__yn.getPosition();
},setScrollX:function(scrollX){this.__yn.scrollTo(scrollX);
},getTable:function(){return this.__ym;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(dV,dW){this.__yp.setColumnWidth(dV,dW);
this.__yq.setColumnWidth(dV,dW);
var dX=this.getTablePaneModel();
var x=dX.getX(dV);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__yp.onColOrderChanged();
this.__yq.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(eI,eJ,eK,eL){this.__yq.onTableModelDataChanged(eI,eJ,eK,eL);
var eM=this.getTable().getTableModel().getRowCount();

if(eM!=this.__yw){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=eM){if(eM==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),eM-1);
}}this.__yw=eM;
}},onSelectionChanged:function(){this.__yq.onSelectionChanged();
},onFocusChanged:function(){this.__yq.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__yp.onTableModelMetaDataChanged();
this.__yq.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__yp.onPaneModelChanged();
this.__yq.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__yp._updateContent();
this.__ym._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var dK=this.__yt.getInnerSize();

if(!dK){return ;
}var dI=this.getTablePaneModel().getTotalWidth();
var dJ=this.__yn;

if(dK.width<dI){var dH=Math.max(0,dI-dK.width);
dJ.setMaximum(dH);
dJ.setKnobFactor(dK.width/dI);
var dL=dJ.getPosition();
dJ.setPosition(Math.min(dL,dH));
}else{dJ.setMaximum(0);
dJ.setKnobFactor(1);
dJ.setPosition(0);
}},updateVerScrollBarMaximum:function(){var ek=this.__yt.getInnerSize();

if(!ek){return ;
}var ei=this.getTable().getTableModel();
var ee=ei.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){ee+=1;
}var ed=this.getTable().getRowHeight();
var eg=ee*ed;
var ej=this.__yo;

if(ek.height<eg){var ef=Math.max(0,eg-ek.height);
ej.setMaximum(ef);
ej.setKnobFactor(ek.height/eg);
var eh=ej.getPosition();
ej.setPosition(Math.min(eh,ef));
}else{ej.setMaximum(0);
ej.setKnobFactor(1);
ej.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var dh=e.getData();
this.fireDataEvent(Y,dh,e.getOldData());
this.__ys.scrollToX(dh);
this.__yt.scrollToX(dh);
},_onScrollY:function(e){this.fireDataEvent(bF,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var eE=this.getTable();

if(!eE.getEnabled()){return;
}var eG=qx.bom.client.Engine.GECKO?1:3;
var eF=this.__yo.getPosition()+((e.getWheelDelta()*eG)*eE.getRowHeight());
this.__yo.scrollTo(eF);
if(this.__yK&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__yK,this.__yL);
}e.stop();
},__yR:function(cu){var cz=this.getTable();
var cA=this.__yp.getHeaderWidgetAtColumn(this.__yF);
var cv=cA.getSizeHint().minWidth;
var cx=Math.max(cv,this.__yH+cu-this.__yG);

if(this.getLiveResize()){var cw=cz.getTableColumnModel();
cw.setColumnWidth(this.__yF,cx);
}else{this.__yp.setColumnWidth(this.__yF,cx);
var cy=this.getTablePaneModel();
this._showResizeLine(cy.getColumnLeft(this.__yF)+cx);
}this.__yG+=cx-this.__yH;
this.__yH=cx;
},__yS:function(cK){var cL=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__yp.isShowingColumnMoveFeedback()||cK>this.__yE+cL||cK<this.__yE-cL){this.__yB+=cK-this.__yE;
this.__yp.showColumnMoveFeedback(this.__yA,this.__yB);
var cM=this.__ym.getTablePaneScrollerAtPageX(cK);

if(this.__yD&&this.__yD!=cM){this.__yD.hideColumnMoveFeedback();
}
if(cM!=null){this.__yC=cM.showColumnMoveFeedback(cK);
}else{this.__yC=null;
}this.__yD=cM;
this.__yE=cK;
}},_onMousemoveHeader:function(e){var et=this.getTable();

if(!et.getEnabled()){return;
}var eu=false;
var en=null;
var er=e.getDocumentLeft();
var es=e.getDocumentTop();
this.__yK=er;
this.__yL=es;

if(this.__yF!=null){this.__yR(er);
eu=true;
e.stopPropagation();
}else if(this.__yA!=null){this.__yS(er);
e.stopPropagation();
}else{var eo=this._getResizeColumnForPageX(er);

if(eo!=-1){eu=true;
}else{var eq=et.getTableModel();
var ev=this._getColumnForPageX(er);

if(ev!=null&&eq.isColumnSortable(ev)){en=ev;
}}}var ep=eu?bd:null;
this.getApplicationRoot().setGlobalCursor(ep);
this.setCursor(ep);
this.__yp.setMouseOverColumn(en);
},_onMousemovePane:function(e){var cN=this.getTable();

if(!cN.getEnabled()){return;
}var cP=e.getDocumentLeft();
var cQ=e.getDocumentTop();
this.__yK=cP;
this.__yL=cQ;
var cO=this._getRowForPagePos(cP,cQ);

if(cO!=null&&this._getColumnForPageX(cP)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cP,cQ);
}}this.__yp.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cd=e.getDocumentLeft();
var ce=this._getResizeColumnForPageX(cd);

if(ce!=-1){this._startResizeHeader(ce,cd);
e.stop();
}else{var cc=this._getColumnForPageX(cd);

if(cc!=null){this._startMoveHeader(cc,cd);
e.stop();
}}},_startResizeHeader:function(bY,ca){var cb=this.getTable().getTableColumnModel();
this.__yF=bY;
this.__yG=ca;
this.__yH=cb.getColumnWidth(this.__yF);
this.__ys.capture();
},_startMoveHeader:function(k,l){this.__yA=k;
this.__yE=l;
this.__yB=this.getTablePaneModel().getColumnLeft(k);
this.__ys.capture();
},_onMousedownPane:function(e){var p=this.getTable();

if(!p.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var m=e.getDocumentLeft();
var o=e.getDocumentTop();
var r=this._getRowForPagePos(m,o);
var q=this._getColumnForPageX(m);

if(r!==null){this.__yI={row:r,col:q};
var n=this.getSelectBeforeFocus();

if(n){p.getSelectionManager().handleMouseDown(r,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(m,o);
}
if(!n){p.getSelectionManager().handleMouseDown(r,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__yI&&this.__yu.getRow()==this.__yI.row&&this.__yu.getColumn()==this.__yI.col){this.__yI={};
this.fireEvent(bJ,qx.ui.table.pane.CellEvent,[this,e,this.__yI.row,this.__yI.col],true);
}},_onChangeCaptureHeader:function(e){if(this.__yF!=null){this._stopResizeHeader();
}
if(this.__yA!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var eH=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
eH.setColumnWidth(this.__yF,this.__yH);
}this.__yF=null;
this.__ys.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
},_stopMoveHeader:function(){var w=this.getTable().getTableColumnModel();
var y=this.getTablePaneModel();
this.__yp.hideColumnMoveFeedback();

if(this.__yD){this.__yD.hideColumnMoveFeedback();
}
if(this.__yC!=null){var A=y.getFirstColumnX()+y.getX(this.__yA);
var v=this.__yC;

if(v!=A&&v!=A+1){var z=w.getVisibleColumnAtX(A);
var u=w.getVisibleColumnAtX(v);
var t=w.getOverallX(z);
var s=(u!=null)?w.getOverallX(u):w.getOverallColumnCount();

if(s>t){s--;
}w.moveColumn(t,s);
}}this.__yA=null;
this.__yC=null;
this.__ys.releaseCapture();
},_onMouseupPane:function(e){var cq=this.getTable();

if(!cq.getEnabled()){return;
}var cr=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(cr!=-1&&cr!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){cq.getSelectionManager().handleMouseUp(cr,e);
}},_onMouseupHeader:function(e){var cp=this.getTable();

if(!cp.getEnabled()){return;
}
if(this.__yF!=null){this._stopResizeHeader();
this.__yJ=true;
e.stop();
}else if(this.__yA!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__yJ){this.__yJ=false;
return;
}var eA=this.getTable();

if(!eA.getEnabled()){return;
}var ey=eA.getTableModel();
var ez=e.getDocumentLeft();
var ex=this._getResizeColumnForPageX(ez);

if(ex==-1){var eD=this._getColumnForPageX(ez);

if(eD!=null&&ey.isColumnSortable(eD)){var ew=ey.getSortColumnIndex();
var eB=(eD!=ew)?true:!ey.isSortAscending();
var eC={column:eD,ascending:eB};

if(this.fireDataEvent(bj,eC)){ey.sortByColumn(eD,eB);
eA.getSelectionModel().resetSelection();
}}}e.stop();
},_onClickPane:function(e){var cF=this.getTable();

if(!cF.getEnabled()){return;
}var cI=e.getDocumentLeft();
var cJ=e.getDocumentTop();
var cG=this._getRowForPagePos(cI,cJ);
var cH=this._getColumnForPageX(cI);

if(cG!=null&&cH!=null){cF.getSelectionManager().handleClick(cG,e);

if(this.__yu.isHidden()||(this.__yI&&cG==this.__yI.row&&cH==this.__yI.col)){this.__yI={};
this.fireEvent(bJ,qx.ui.table.pane.CellEvent,[this,e,cG,cH],true);
}}},_onContextMenu:function(e){var cn=e.getDocumentLeft();
var co=e.getDocumentTop();
var cl=this._getRowForPagePos(cn,co);
var cm=this._getColumnForPageX(cn);

if(this.__yu.isHidden()||(this.__yI&&cl==this.__yI.row&&cm==this.__yI.col)){this.__yI={};
this.fireEvent(bz,qx.ui.table.pane.CellEvent,[this,e,cl,cm],true);
var ck=this.getTable().getContextMenu();

if(ck){if(ck.getChildren().length>0){ck.openAtMouse(e);
}else{ck.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var cC=e.getDocumentLeft();
var cD=e.getDocumentTop();
this._focusCellAtPagePos(cC,cD);
this.startEditing();
var cB=this._getRowForPagePos(cC,cD);

if(cB!=-1&&cB!=null){this.fireEvent(bk,qx.ui.table.pane.CellEvent,[this,e,cB],true);
}},_onMouseout:function(e){var df=this.getTable();

if(!df.getEnabled()){return;
}if(this.__yF==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__yp.setMouseOverColumn(null);
},_showResizeLine:function(x){var eQ=this._showChildControl(R);
var eP=eQ.getWidth();
var eR=this.__yt.getBounds();
eQ.setUserBounds(x-Math.round(eP/2),0,eP,eR.height);
},_hideResizeLine:function(){this._excludeChildControl(R);
},showColumnMoveFeedback:function(cR){var db=this.getTablePaneModel();
var da=this.getTable().getTableColumnModel();
var cU=this.__yq.getContainerLocation().left;
var cY=db.getColumnCount();
var cV=0;
var cT=0;
var de=cU;

for(var cS=0;cS<cY;cS++){var cW=db.getColumnAtX(cS);
var dc=da.getColumnWidth(cW);

if(cR<de+dc/2){break;
}de+=dc;
cV=cS+1;
cT=de-cU;
}var cX=this.__yt.getContainerLocation().left;
var dd=this.__yt.getBounds().width;
var scrollX=cX-cU;
cT=qx.lang.Number.limit(cT,scrollX+2,scrollX+dd-1);
this._showResizeLine(cT);
return db.getFirstColumnX()+cV;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dY,ea){var ec=this._getRowForPagePos(dY,ea);

if(ec!=-1&&ec!=null){var eb=this._getColumnForPageX(dY);
this.__ym.setFocusedCell(eb,ec);
}},setFocusedCell:function(ci,cj){if(!this.isEditing()){this.__yq.setFocusedCell(ci,cj,this.__yy);
this.__yM=ci;
this.__yN=cj;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__yM;
},getFocusedRow:function(){return this.__yN;
},scrollCellVisible:function(dt,du){var dE=this.getTablePaneModel();
var dv=dE.getX(dt);

if(dv!=-1){var dB=this.__yt.getInnerSize();

if(!dB){return;
}var dC=this.getTable().getTableColumnModel();
var dy=dE.getColumnLeft(dt);
var dF=dC.getColumnWidth(dt);
var dw=this.getTable().getRowHeight();
var dG=du*dw;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var dD=Math.min(dy,dy+dF-dB.width);
var dA=dy;
this.setScrollX(Math.max(dD,Math.min(dA,scrollX)));
var dx=dG+dw-dB.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){dx+=dw;
}var dz=dG;
this.setScrollY(Math.max(dx,Math.min(dz,scrollY)),true);
}},isEditing:function(){return this.__yO!=null;
},startEditing:function(){var dm=this.getTable();
var dk=dm.getTableModel();
var dp=this.__yM;

if(!this.isEditing()&&(dp!=null)&&dk.isColumnEditable(dp)){var dq=this.__yN;
var di=this.getTablePaneModel().getX(dp);
var dj=dk.getValue(dp,dq);
this.__yP=dm.getTableColumnModel().getCellEditorFactory(dp);
var dl={col:dp,row:dq,xPos:di,value:dj,table:dm};
this.__yO=this.__yP.createCellEditor(dl);
if(this.__yO===null){return false;
}else if(this.__yO instanceof qx.ui.window.Window){this.__yO.setModal(true);
this.__yO.setShowClose(false);
this.__yO.addListener(by,this._onCellEditorModalWindowClose,this);
var f=dm.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__yO,dl);
}this.__yO.open();
}else{var dn=this.__yu.getInnerSize();
this.__yO.setUserBounds(0,0,dn.width,dn.height);
this.__yu.addListener(Q,function(e){e.stopPropagation();
});
this.__yu.add(this.__yO);
this.__yu.addState(bN);
this.__yu.setKeepActive(false);
this.__yO.focus();
this.__yO.activate();
}return true;
}return false;
},stopEditing:function(){this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var C=this.__yP.getCellEditorValue(this.__yO);
var B=this.getTable().getTableModel().getValue(this.__yM,this.__yN);
this.getTable().getTableModel().setValue(this.__yM,this.__yN,C);
this.__ym.focus();
this.__ym.fireDataEvent(be,{row:this.__yN,col:this.__yM,oldValue:B,value:C});
}},cancelEditing:function(){if(this.isEditing()&&!this.__yO.pendingDispose){if(this._cellEditorIsModalWindow){this.__yO.destroy();
this.__yO=null;
this.__yP=null;
this.__yO.pendingDispose=true;
}else{this.__yu.removeState(bN);
this.__yu.setKeepActive(true);
this.__yO.destroy();
this.__yO=null;
this.__yP=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(bR){var bU=this.getTable().getTableColumnModel();
var bV=this.getTablePaneModel();
var bT=bV.getColumnCount();
var bX=this.__yp.getContainerLocation().left;

for(var x=0;x<bT;x++){var bS=bV.getColumnAtX(x);
var bW=bU.getColumnWidth(bS);
bX+=bW;

if(bR<bX){return bS;
}}return null;
},_getResizeColumnForPageX:function(a){var g=this.getTable().getTableColumnModel();
var h=this.getTablePaneModel();
var d=h.getColumnCount();
var j=this.__yp.getContainerLocation().left;
var b=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<d;x++){var c=h.getColumnAtX(x);
var i=g.getColumnWidth(c);
j+=i;

if(a>=(j-b)&&a<=(j+b)){return c;
}}return -1;
},_getRowForPagePos:function(dM,dN){var dO=this.__yq.getContentLocation();

if(dM<dO.left||dM>dO.right){return null;
}
if(dN>=dO.top&&dN<=dO.bottom){var dP=this.getTable().getRowHeight();
var scrollY=this.__yo.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/dP)*dP;
}var dS=scrollY+dN-dO.top;
var dU=Math.floor(dS/dP);
var dT=this.getTable().getTableModel();
var dQ=dT.getRowCount();
return (dU<dQ)?dU:null;
}var dR=this.__yp.getContainerLocation();

if(dN>=dR.top&&dN<=dR.bottom&&dM<=dR.right){return -1;
}return null;
},setTopRightWidget:function(fs){var ft=this.__yQ;

if(ft!=null){this.__yr.remove(ft);
}
if(fs!=null){this.__yr.add(fs);
}this.__yQ=fs;
},getTopRightWidget:function(){return this.__yQ;
},getHeader:function(){return this.__yp;
},getTablePane:function(){return this.__yq;
},getVerticalScrollBarWidth:function(){var ct=this.__yo;
return ct.isVisible()?(ct.getSizeHint().width||0):0;
},getNeededScrollBars:function(fc,fd){var fj=this.__yo.getSizeHint().width;
var fk=this.__yt.getInnerSize();
var fe=fk?fk.width:0;

if(this.getVerticalScrollBarVisible()){fe+=fj;
}var fn=fk?fk.height:0;

if(this.getHorizontalScrollBarVisible()){fn+=fj;
}var fh=this.getTable().getTableModel();
var fl=fh.getRowCount();
var fo=this.getTablePaneModel().getTotalWidth();
var fm=this.getTable().getRowHeight()*fl;
var fg=false;
var fp=false;

if(fo>fe){fg=true;

if(fm>fn-fj){fp=true;
}}else if(fm>fn){fp=true;

if(!fd&&(fo>fe-fj)){fg=true;
}}var fi=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var ff=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((fc||fg)?fi:0)|((fd||!fp)?0:ff);
},_applyScrollTimeout:function(el,em){this._startInterval(el);
},_startInterval:function(cs){this.__yv.setInterval(cs);
this.__yv.start();
},_stopInterval:function(){this.__yv.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__yy&&!this.__yq._layoutPending){this.__yy=false;
this._updateContent();
}}),_updateContent:function(){var eW=this.__yt.getInnerSize();

if(!eW){return;
}var fa=eW.height;
var scrollX=this.__yn.getPosition();
var scrollY=this.__yo.getPosition();
var eT=this.getTable().getRowHeight();
var eU=Math.floor(scrollY/eT);
var eY=this.__yq.getFirstVisibleRow();
this.__yq.setFirstVisibleRow(eU);
var eV=Math.ceil(fa/eT);
var eS=0;
var eX=this.getTable().getKeepFirstVisibleRowComplete();

if(!eX){eV++;
eS=scrollY%eT;
}this.__yq.setVisibleRowCount(eV);

if(eU!=eY){this._updateFocusIndicator();
}this.__yt.scrollToX(scrollX);
if(!eX){this.__yt.scrollToY(eS);
}},_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var fb=this.getTable();

if(!fb.getEnabled()){return;
}this.__yu.moveToCell(this.__yM,this.__yN);
}},destruct:function(){this._stopInterval();
var dg=this.getTablePaneModel();

if(dg){dg.dispose();
}this.__yI=this.__yQ=this.__ym=null;
this._disposeObjects(bc,U,bt,bA,bC,bf,I,bm,bq);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var t="horizontal",s="px",r="scroll",q="vertical",p="-1px",o="qx.client",n="0",m="hidden",l="mousedown",k="qx.ui.core.scroll.NativeScrollBar",I="PositiveNumber",H="__ns",G="Integer",F="mousemove",E="_applyMaximum",D="_applyOrientation",C="appear",B="opera",A="PositiveInteger",z="mshtml",x="mouseup",y="Number",v="_applyPosition",w="scrollbar",u="native";
qx.Class.define(k,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(W){arguments.callee.base.call(this);
this.addState(u);
this.getContentElement().addListener(r,this._onScroll,this);
this.addListener(l,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);
this.addListener(F,this._stopPropagation,this);

if(qx.core.Variant.isSet(o,B)){this.addListener(C,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(W!=null){this.setOrientation(W);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:w},orientation:{check:[t,q],init:t,apply:D},maximum:{check:A,apply:E,init:100},position:{check:y,init:0,apply:v,event:r},singleStep:{check:G,init:20},knobFactor:{check:I,nullable:true}},members:{__nr:null,__ns:null,_getScrollPaneElement:function(){if(!this.__ns){this.__ns=new qx.html.Element();
}return this.__ns;
},renderLayout:function(S,top,T,U){var V=arguments.callee.base.call(this,S,top,T,U);
this._updateScrollBar();
return V;
},_getContentHint:function(){var j=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__nr?100:j,maxWidth:this.__nr?null:j,minWidth:this.__nr?null:j,height:this.__nr?j:100,maxHeight:this.__nr?j:null,minHeight:this.__nr?j:null};
},_applyEnabled:function(K,L){arguments.callee.base.call(this,K,L);
this._updateScrollBar();
},_applyMaximum:function(J){this._updateScrollBar();
},_applyPosition:function(c){var content=this.getContentElement();

if(this.__nr){content.scrollToX(c);
}else{content.scrollToY(c);
}},_applyOrientation:function(d,f){var g=this.__nr=d===t;
this.set({allowGrowX:g,allowShrinkX:g,allowGrowY:!g,allowShrinkY:!g});

if(g){this.replaceState(q,t);
}else{this.replaceState(t,q);
}this.getContentElement().setStyles({overflowX:g?r:m,overflowY:g?m:r});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var P=this.__nr;
var Q=this.getBounds();

if(!Q){return;
}
if(this.isEnabled()){var R=P?Q.width:Q.height;
var O=this.getMaximum()+R;
}else{O=0;
}if(qx.core.Variant.isSet(o,z)){var Q=this.getBounds();
this.getContentElement().setStyles({left:P?n:p,top:P?p:n,width:(P?Q.width:Q.width+1)+s,height:(P?Q.height+1:Q.height)+s});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(P?O:1)+s,height:(P?1:O)+s});
this.scrollTo(this.getPosition());
},scrollTo:function(i){this.setPosition(Math.max(0,Math.min(this.getMaximum(),i)));
},scrollBy:function(h){this.scrollTo(this.getPosition()+h);
},scrollBySteps:function(a){var b=this.getSingleStep();
this.scrollBy(a*b);
},_onScroll:function(e){var N=this.getContentElement();
var M=this.__nr?N.getScrollX():N.getScrollY();
this.setPosition(M);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(H);
}});
})();
(function(){var l="slider",k="horizontal",j="button-begin",i="vertical",h="button-end",g="Integer",f="execute",d="right",c="left",b="down",A="up",z="PositiveNumber",y="changeValue",x="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",w="_applyKnobFactor",v="knob",u="qx.ui.core.scroll.ScrollBar",t="resize",s="_applyOrientation",r="_applyPageStep",p="PositiveInteger",q="scroll",n="_applyPosition",o="scrollbar",m="_applyMaximum";
qx.Class.define(u,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(E){arguments.callee.base.call(this);
this._createChildControl(j);
this._createChildControl(l).addListener(t,this._onResizeSlider,this);
this._createChildControl(h);
if(E!=null){this.setOrientation(E);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[k,i],init:k,apply:s},maximum:{check:p,apply:m,init:100},position:{check:x,init:0,apply:n,event:q},singleStep:{check:g,init:20},pageStep:{check:g,init:10,apply:r},knobFactor:{check:z,apply:w,nullable:true}},members:{__nt:2,_createChildControlImpl:function(B){var C;

switch(B){case l:C=new qx.ui.core.scroll.ScrollSlider();
C.setPageStep(100);
C.setFocusable(false);
C.addListener(y,this._onChangeSliderValue,this);
this._add(C,{flex:1});
break;
case j:C=new qx.ui.form.RepeatButton();
C.setFocusable(false);
C.addListener(f,this._onExecuteBegin,this);
this._add(C);
break;
case h:C=new qx.ui.form.RepeatButton();
C.setFocusable(false);
C.addListener(f,this._onExecuteEnd,this);
this._add(C);
break;
}return C||arguments.callee.base.call(this,B);
},_applyMaximum:function(F){this.getChildControl(l).setMaximum(F);
},_applyPosition:function(D){this.getChildControl(l).setValue(D);
},_applyKnobFactor:function(R){this.getChildControl(l).setKnobFactor(R);
},_applyPageStep:function(a){this.getChildControl(l).setPageStep(a);
},_applyOrientation:function(G,H){var I=this._getLayout();

if(I){I.dispose();
}if(G===k){this._setLayout(new qx.ui.layout.HBox());
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
}this.getChildControl(l).setOrientation(G);
},scrollTo:function(K){this.getChildControl(l).slideTo(K);
},scrollBy:function(J){this.getChildControl(l).slideBy(J);
},scrollBySteps:function(P){var Q=this.getSingleStep();
this.getChildControl(l).slideBy(P*Q);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var L=this.getChildControl(l).getChildControl(v);
var O=L.getSizeHint();
var M=false;
var N=this.getChildControl(l).getInnerSize();

if(this.getOrientation()==i){if(N.height<O.minHeight+this.__nt){M=true;
}}else{if(N.width<O.minWidth+this.__nt){M=true;
}}
if(M){L.exclude();
}else{L.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(e){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(b){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(c){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(d){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var bf="knob",be="horizontal",bd="vertical",bc="Integer",bb="px",ba="mousemove",Y="resize",X="left",W="top",V="mouseup",bJ="slider",bI="PageUp",bH="mousedown",bG="height",bF="changeValue",bE="Left",bD="Down",bC="Up",bB="dblclick",bA="qx.ui.form.Slider",bm="PageDown",bn="mousewheel",bk="interval",bl="_applyValue",bi="_applyKnobFactor",bj="End",bg="width",bh="_applyOrientation",bo="Home",bp="floor",bs="_applyMinimum",br="click",bu="Right",bt="keypress",bw="ceil",bv="losecapture",bq="contextmenu",bz="_applyMaximum",by="Number",bx="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(bA,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(n){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bt,this._onKeyPress);
this.addListener(bn,this._onMouseWheel);
this.addListener(bH,this._onMouseDown);
this.addListener(V,this._onMouseUp);
this.addListener(bv,this._onMouseUp);
this.addListener(Y,this._onUpdate);
this.addListener(bq,this._onStopEvent);
this.addListener(br,this._onStopEvent);
this.addListener(bB,this._onStopEvent);
if(n!=null){this.setOrientation(n);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bJ},focusable:{refine:true,init:true},orientation:{check:[be,bd],init:be,apply:bh},value:{check:bx,init:0,apply:bl,event:bF,nullable:true},minimum:{check:bc,init:0,apply:bs},maximum:{check:bc,init:100,apply:bz},singleStep:{check:bc,init:1},pageStep:{check:bc,init:10},knobFactor:{check:by,apply:bi,nullable:true}},members:{__nu:null,__nv:null,__nw:null,__nx:null,__ny:null,__nz:null,__nA:null,__nB:null,__nC:null,_forwardStates:{invalid:true},_createChildControlImpl:function(o){var p;

switch(o){case bf:p=new qx.ui.core.Widget();
p.addListener(Y,this._onUpdate,this);
this._add(p);
break;
}return p||arguments.callee.base.call(this,o);
},_onMouseWheel:function(e){var A=e.getWheelDelta()>0?1:-1;
this.slideBy(A*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var r=this.getOrientation()===be;
var q=r?bE:bC;
var forward=r?bu:bD;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case q:this.slideBack();
break;
case bm:this.slidePageForward();
break;
case bI:this.slidePageBack();
break;
case bo:this.slideToBegin();
break;
case bj:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__nx){return;
}var i=this.__nE;
var g=this.getChildControl(bf);
var h=i?X:W;
var k=i?e.getDocumentLeft():e.getDocumentTop();
var l=this.__nu=qx.bom.element.Location.get(this.getContentElement().getDomElement())[h];
var j=this.__nv=qx.bom.element.Location.get(g.getContainerElement().getDomElement())[h];

if(e.getTarget()===g){this.__nx=true;
this.__ny=k+l-j;
}else{this.__nz=true;
this.__nA=k<=j?-1:1;
this.__nF(e);
this._onInterval();
if(!this.__nC){this.__nC=new qx.event.Timer(100);
this.__nC.addListener(bk,this._onInterval,this);
}this.__nC.start();
}this.addListener(ba,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__nx){this.releaseCapture();
delete this.__nx;
delete this.__ny;
}else if(this.__nz){this.__nC.stop();
this.releaseCapture();
delete this.__nz;
delete this.__nA;
delete this.__nB;
}this.removeListener(ba,this._onMouseMove);
if(e.getType()===V){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__nx){var C=this.__nE?e.getDocumentLeft():e.getDocumentTop();
var B=C-this.__ny;
this.slideTo(this._positionToValue(B));
}else if(this.__nz){this.__nF(e);
}e.stopPropagation();
},_onInterval:function(e){var bQ=this.getValue()+(this.__nA*this.getPageStep());
if(bQ<this.getMinimum()){bQ=this.getMinimum();
}else if(bQ>this.getMaximum()){bQ=this.getMaximum();
}var bR=this.__nA==-1;

if((bR&&bQ<=this.__nB)||(!bR&&bQ>=this.__nB)){bQ=this.__nB;
}this.slideTo(bQ);
},_onUpdate:function(e){var v=this.getInnerSize();
var w=this.getChildControl(bf).getBounds();
var u=this.__nE?bg:bG;
this._updateKnobSize();
this.__nD=v[u]-w[u];
this.__nw=w[u];
this._updateKnobPosition();
},__nE:false,__nD:0,__nF:function(e){var D=this.__nE;
var K=D?e.getDocumentLeft():e.getDocumentTop();
var M=this.__nu;
var E=this.__nv;
var O=this.__nw;
var L=K-M;

if(K>=E){L-=O;
}var I=this._positionToValue(L);
var F=this.getMinimum();
var G=this.getMaximum();

if(I<F){I=F;
}else if(I>G){I=G;
}else{var J=this.getValue();
var H=this.getPageStep();
var N=this.__nA<0?bp:bw;
I=J+(Math[N]((I-J)/H)*H);
}if(this.__nB==null||(this.__nA==-1&&I<=this.__nB)||(this.__nA==1&&I>=this.__nB)){this.__nB=I;
}},_positionToValue:function(bK){var bL=this.__nD;
if(bL==null||bL==0){return 0;
}var bN=bK/bL;

if(bN<0){bN=0;
}else if(bN>1){bN=1;
}var bM=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bM*bN);
},_valueToPosition:function(P){var Q=this.__nD;

if(Q==null){return 0;
}var R=this.getMaximum()-this.getMinimum();
if(R==0){return 0;
}var P=P-this.getMinimum();
var S=P/R;

if(S<0){S=0;
}else if(S>1){S=1;
}return Math.round(Q*S);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(s){var t=this.getChildControl(bf).getContainerElement();

if(this.__nE){t.setStyle(X,s+bb,true);
}else{t.setStyle(W,s+bb,true);
}},_updateKnobSize:function(){var bT=this.getKnobFactor();

if(bT==null){return;
}var bS=this.getInnerSize();

if(bS==null){return;
}if(this.__nE){this.getChildControl(bf).setWidth(Math.round(bT*bS.width));
}else{this.getChildControl(bf).setHeight(Math.round(bT*bS.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(x){this.slideTo(this.getValue()+x);
},slideTo:function(m){if(m<this.getMinimum()){m=this.getMinimum();
}else if(m>this.getMaximum()){m=this.getMaximum();
}else{m=this.getMinimum()+Math.round((m-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(m);
},_applyOrientation:function(c,d){var f=this.getChildControl(bf);
this.__nE=c===be;
if(this.__nE){this.removeState(bd);
f.removeState(bd);
this.addState(be);
f.addState(be);
f.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(be);
f.removeState(be);
this.addState(bd);
f.addState(bd);
f.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(a,b){if(a!=null){this._updateKnobSize();
}else{if(this.__nE){this.getChildControl(bf).resetWidth();
}else{this.getChildControl(bf).resetHeight();
}}},_applyValue:function(y,z){if(y!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(bO,bP){if(this.getValue()<bO){this.setValue(bO);
}this._updateKnobPosition();
},_applyMaximum:function(T,U){if(this.getValue()>T){this.setValue(T);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(b){this.getContentElement().scrollToX(b,false);
},scrollToY:function(c){this.getContentElement().scrollToY(c,true);
}}});
})();
(function(){var h="Integer",g="Escape",f="keypress",d="Enter",c="excluded",b="qx.ui.table.pane.FocusIndicator";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(i){arguments.callee.base.call(this);
this.__yl=i;
this.setKeepActive(true);
this.addListener(f,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:c},row:{check:h,nullable:true},column:{check:h,nullable:true}},members:{__yl:null,_onKeyPress:function(e){var a=e.getKeyIdentifier();

if(a!==g&&a!==d){e.stopPropagation();
}},moveToCell:function(j,k){if(j==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var l=this.__yl.getTablePaneModel().getX(j);

if(l==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var q=this.__yl.getTable();
var o=q.getTableColumnModel();
var p=this.__yl.getTablePaneModel();
var n=this.__yl.getTablePane().getFirstVisibleRow();
var m=q.getRowHeight();
this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);
this.show();
this.setRow(k);
this.setColumn(j);
}}}},destruct:function(){this.__yl=null;
}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);

if(e!=null){this.setRow(e);
}else{this.setRow(c._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(f!=null){this.setColumn(f);
}else{this.setColumn(c._getColumnForPageX(this.getDocumentLeft()));
}},clone:function(g){var h=arguments.callee.base.call(this,g);
h.set({row:this.getRow(),column:this.getColumn()});
return h;
}}});
})();
(function(){var a="qx.lang.Number";
qx.Class.define(a,{statics:{isInRange:function(h,i,j){return h>=i&&h<=j;
},isBetweenRange:function(b,c,d){return b>c&&b<d;
},limit:function(e,f,g){if(g!=null&&e>g){return g;
}else if(f!=null&&e<f){return f;
}else{return e;
}}}});
})();
(function(){var l="Number",k="qx.event.type.Event",j="_applyFirstColumnX",i="Integer",h="qx.ui.table.pane.Model",g="_applyMaxColumnCount",f="visibilityChangedPre";
qx.Class.define(h,{extend:qx.core.Object,construct:function(e){arguments.callee.base.call(this);
e.addListener(f,this._onColVisibilityChanged,this);
this.__yT=e;
},events:{"modelChanged":k},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:i,init:0,apply:j},maxColumnCount:{check:l,init:-1,apply:g}},members:{__yU:null,__yT:null,_applyFirstColumnX:function(o,p){this.__yU=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(q,r){this.__yU=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(A){this.__yT=A;
this.__yU=null;
},_onColVisibilityChanged:function(v){this.__yU=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__yU==null){var s=this.getFirstColumnX();
var u=this.getMaxColumnCount();
var t=this.__yT.getVisibleColumnCount();

if(u==-1||(s+u)>t){this.__yU=t-s;
}else{this.__yU=u;
}}return this.__yU;
},getColumnAtX:function(m){var n=this.getFirstColumnX();
return this.__yT.getVisibleColumnAtX(n+m);
},getX:function(w){var y=this.getFirstColumnX();
var z=this.getMaxColumnCount();
var x=this.__yT.getVisibleX(w)-y;

if(x>=0&&(z==-1||x<z)){return x;
}else{return -1;
}},getColumnLeft:function(a){var d=0;
var c=this.getColumnCount();

for(var x=0;x<c;x++){var b=this.getColumnAtX(x);

if(b==a){return d;
}d+=this.__yT.getColumnWidth(b);
}return -1;
},getTotalWidth:function(){var B=0;
var C=this.getColumnCount();

for(var x=0;x<C;x++){var D=this.getColumnAtX(x);
B+=this.__yT.getColumnWidth(D);
}return B;
}},destruct:function(){this.__yT=null;
}});
})();
(function(){var cD="",cC="!",cB="'!",cA="'",cz="Expected '",cy="' (rgb(",cx=",",cw=")), but found value '",cv="Event (",cu="Expected value to be the CSS color '",dK="' but found ",dJ="The value '",dI="qx.core.Object",dH="Expected value to be an array but found ",dG=") was fired.",dF="Expected value to be an integer >= 0 but found ",dE="' to be not equal with '",dD="' to '",dC="qx.ui.core.Widget",dB="Called assertTrue with '",cK="Expected value to be a map but found ",cL="The function did not raise an exception!",cI="Expected value to be undefined but found ",cJ="Expected value to be a DOM element but found  '",cG="Expected value to be a regular expression but found ",cH="' to implement the interface '",cE="Expected value to be null but found ",cF="Invalid argument 'type'",cS="Called assert with 'false'",cT="Assertion error! ",dg="Expected value to be a string but found ",dc="null",dp="' but found '",dj="' must must be a key of the map '",dx="The String '",du="Expected value not to be undefined but found ",cX="qx.util.ColorUtil",dA=": ",dz="The raised exception does not have the expected type! ",dy=") not fired.",cW="qx.core.Assert",da="Expected value to be typeof object but found ",db="' (identical) but found '",de="' must have any of the values defined in the array '",dh="Expected value to be a number but found ",dk="Called assertFalse with '",dr="]",dw="Expected value to be a qooxdoo object but found ",cM="' arguments.",cN="Expected value not to be null but found ",cY="Array[",dn="' does not match the regular expression '",dm="' to be not identical with '",dl="' arguments but found '",dt="', which cannot be converted to a CSS color!",ds="Expected object '",di="qx.core.AssertionError",dq="Expected value to be a boolean but found ",cr="))!",dv="Expected value to be a qooxdoo widget but found ",cO="Expected value '%1' to be in the range '%2'..'%3'!",cP="Expected value to be typeof '",dd="Expected value to be typeof function but found ",cs="Expected value to be an integer but found ",ct="Called fail().",cV="The parameter 're' must be a string or a regular expression.",cQ="Expected value to be a number >= 0 but found ",cR="Expected value to be instanceof '",cU="Wrong number of arguments given. Expected '",df="object";
qx.Class.define(cW,{statics:{__bv:true,__bw:function(bY,ca){var cb=cD;

for(var i=1,l=arguments.length;i<l;i++){cb=cb+this.__bx(arguments[i]);
}var cd=cT+bY+dA+cb;

if(this.__bv){qx.Bootstrap.error(cd);
}
if(qx.Class.isDefined(di)){var cc=new qx.core.AssertionError(bY,cb);

if(this.__bv){qx.Bootstrap.error("Stack trace: \n"+cc.getStackTrace());
}throw cc;
}else{throw new Error(cd);
}},__bx:function(bW){var bX;

if(bW===null){bX=dc;
}else if(qx.lang.Type.isArray(bW)&&bW.length>10){bX=cY+bW.length+dr;
}else if((bW instanceof Object)&&(bW.toString==null)){bX=qx.lang.Json.stringify(bW,null,2);
}else{try{bX=bW.toString();
}catch(e){bX=cD;
}}return bX;
},assert:function(M,N){M==true||this.__bw(N||cD,cS);
},fail:function(dQ){this.__bw(dQ||cD,ct);
},assertTrue:function(dO,dP){(dO===true)||this.__bw(dP||cD,dB,dO,cA);
},assertFalse:function(x,y){(x===false)||this.__bw(y||cD,dk,x,cA);
},assertEquals:function(bK,bL,bM){bK==bL||this.__bw(bM||cD,cz,bK,dp,bL,cB);
},assertNotEquals:function(bd,be,bf){bd!=be||this.__bw(bf||cD,cz,bd,dE,be,cB);
},assertIdentical:function(bp,bq,br){bp===bq||this.__bw(br||cD,cz,bp,db,bq,cB);
},assertNotIdentical:function(dL,dM,dN){dL!==dM||this.__bw(dN||cD,cz,dL,dm,dM,cB);
},assertNotUndefined:function(bg,bh){bg!==undefined||this.__bw(bh||cD,du,bg,cC);
},assertUndefined:function(T,U){T===undefined||this.__bw(U||cD,cI,T,cC);
},assertNotNull:function(P,Q){P!==null||this.__bw(Q||cD,cN,P,cC);
},assertNull:function(s,t){s===null||this.__bw(t||cD,cE,s,cC);
},assertJsonEquals:function(ce,cf,cg){this.assertEquals(qx.lang.Json.stringify(ce),qx.lang.Json.stringify(cf),cg);
},assertMatch:function(bQ,bR,bS){this.assertString(bQ);
this.assert(qx.lang.Type.isRegExp(bR)||qx.lang.Type.isString(bR),cV);
bQ.search(bR)>=0||this.__bw(bS||cD,dx,bQ,dn,bR.toString(),cB);
},assertArgumentsCount:function(dS,dT,dU,dV){var dW=dS.length;
(dW>=dT&&dW<=dU)||this.__bw(dV||cD,cU,dT,dD,dU,dl,arguments.length,cM);
},assertEventFired:function(F,event,G,H,I){var K=false;
var J=function(e){if(H){H.call(F,e);
}K=true;
};
var L=F.addListener(event,J,F);
G.call();
K===true||this.__bw(I||cD,cv,event,dy);
F.removeListenerById(L);
},assertEventNotFired:function(d,event,f,g){var j=false;
var h=function(e){j=true;
};
var k=d.addListener(event,h,d);
f.call();
j===false||this.__bw(g||cD,cv,event,dG);
d.removeListenerById(k);
},assertException:function(V,W,X,Y){var W=W||Error;
var ba;

try{this.__bv=false;
V();
}catch(O){ba=O;
}finally{this.__bv=true;
}
if(ba==null){this.__bw(Y||cD,cL);
}ba instanceof W||this.__bw(Y||cD,dz,W);

if(X){this.assertMatch(ba.toString(),X,Y);
}},assertInArray:function(bN,bO,bP){bO.indexOf(bN)!==-1||this.__bw(bP||cD,dJ,bN,de,bO,cA);
},assertArrayEquals:function(bk,bl,bm){this.assertArray(bk,bm);
this.assertArray(bl,bm);
this.assertEquals(bk.length,bl.length,bm);

for(var i=0;i<bk.length;i++){this.assertIdentical(bk[i],bl[i],bm);
}},assertKeyInMap:function(u,v,w){v[u]!==undefined||this.__bw(w||cD,dJ,u,dj,v,cA);
},assertFunction:function(bb,bc){qx.lang.Type.isFunction(bb)||this.__bw(bc||cD,dd,bb,cC);
},assertString:function(bi,bj){qx.lang.Type.isString(bi)||this.__bw(bj||cD,dg,bi,cC);
},assertBoolean:function(bn,bo){qx.lang.Type.isBoolean(bn)||this.__bw(bo||cD,dq,bn,cC);
},assertNumber:function(cl,cm){(qx.lang.Type.isNumber(cl)&&isFinite(cl))||this.__bw(cm||cD,dh,cl,cC);
},assertPositiveNumber:function(cp,cq){(qx.lang.Type.isNumber(cp)&&isFinite(cp)&&cp>=0)||this.__bw(cq||cD,cQ,cp,cC);
},assertInteger:function(bI,bJ){(qx.lang.Type.isNumber(bI)&&isFinite(bI)&&bI%1===0)||this.__bw(bJ||cD,cs,bI,cC);
},assertPositiveInteger:function(p,q){var r=(qx.lang.Type.isNumber(p)&&isFinite(p)&&p%1===0&&p>=0);
r||this.__bw(q||cD,dF,p,cC);
},assertInRange:function(bE,bF,bG,bH){(bE>=bF&&bE<=bG)||this.__bw(bH||cD,qx.lang.String.format(cO,[bE,bF,bG]));
},assertObject:function(m,n){var o=m!==null&&(qx.lang.Type.isObject(m)||typeof m===df);
o||this.__bw(n||cD,da,(m),cC);
},assertArray:function(z,A){qx.lang.Type.isArray(z)||this.__bw(A||cD,dH,z,cC);
},assertMap:function(ch,ci){qx.lang.Type.isObject(ch)||this.__bw(ci||cD,cK,ch,cC);
},assertRegExp:function(cn,co){qx.lang.Type.isRegExp(cn)||this.__bw(co||cD,cG,cn,cC);
},assertType:function(bs,bt,bu){this.assertString(bt,cF);
typeof (bs)===bt||this.__bw(bu||cD,cP,bt,dK,bs,cC);
},assertInstance:function(B,C,D){var E=C.classname||C+cD;
B instanceof C||this.__bw(D||cD,cR,E,dK,B,cC);
},assertInterface:function(a,b,c){qx.Class.implementsInterface(a,b)||this.__bw(c||cD,ds,a,cH,b,cB);
},assertCssColor:function(bv,bw,bx){var by=qx.Class.getByName(cX);

if(!by){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var bA=by.stringToRgb(bv);

try{var bz=by.stringToRgb(bw);
}catch(dR){this.__bw(bx||cD,cu,bv,cy,bA.join(cx),cw,bw,dt);
}var bB=bA[0]==bz[0]&&bA[1]==bz[1]&&bA[2]==bz[2];
bB||this.__bw(bx||cD,cu,bA,cy,bA.join(cx),cw,bw,cy,bz.join(cx),cr);
},assertElement:function(cj,ck){!!(cj&&cj.nodeType===1)||this.__bw(ck||cD,cJ,cj,cB);
},assertQxObject:function(bC,bD){this.__by(bC,dI)||this.__bw(bD||cD,dw,bC,cC);
},assertQxWidget:function(R,S){this.__by(R,dC)||this.__bw(S||cD,dv,R,cC);
},__by:function(bT,bU){if(!bT){return false;
}var bV=bT.constructor;

while(bV){if(bV.classname===bU){return true;
}bV=bV.superclass;
}return false;
}}});
})();
(function(){var w='',u='"',t=':',s=']',r='null',q=': ',p='object',o='function',m=',',l='\n',bg='\\u',bf=',\n',be='0000',bd='string',bc="Cannot stringify a recursive object.",bb='0',ba='-',Y='}',X='String',W='Boolean',D='\\\\',E='\\f',B='\\t',C='{\n',z='[]',A="qx.lang.JsonImpl",x='Z',y='\\n',F='Object',G='{}',N='@',L='.',Q='(',P='Array',S='T',R='\\r',I='{',V='JSON.parse',U=' ',T='[',H='Number',J=')',K='[\n',M='\\"',O='\\b';
qx.Class.define(A,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__cF:null,__cG:null,__cH:null,__cI:null,stringify:function(bp,bq,br){this.__cF=w;
this.__cG=w;
this.__cI=[];

if(qx.lang.Type.isNumber(br)){var br=Math.min(10,Math.floor(br));

for(var i=0;i<br;i+=1){this.__cG+=U;
}}else if(qx.lang.Type.isString(br)){if(br.length>10){br=br.slice(0,10);
}this.__cG=br;
}if(bq&&(qx.lang.Type.isFunction(bq)||qx.lang.Type.isArray(bq))){this.__cH=bq;
}else{this.__cH=null;
}return this.__cJ(w,{'':bp});
},__cJ:function(bs,bt){var bw=this.__cF,bu,bx=bt[bs];
if(bx&&qx.lang.Type.isFunction(bx.toJSON)){bx=bx.toJSON(bs);
}else if(qx.lang.Type.isDate(bx)){bx=this.dateToJSON(bx);
}if(typeof this.__cH===o){bx=this.__cH.call(bt,bs,bx);
}
if(bx===null){return r;
}
if(bx===undefined){return undefined;
}switch(qx.lang.Type.getClass(bx)){case X:return this.__cK(bx);
case H:return isFinite(bx)?String(bx):r;
case W:return String(bx);
case P:this.__cF+=this.__cG;
bu=[];

if(this.__cI.indexOf(bx)!==-1){throw new TypeError(bc);
}this.__cI.push(bx);
var length=bx.length;

for(var i=0;i<length;i+=1){bu[i]=this.__cJ(i,bx)||r;
}this.__cI.pop();
if(bu.length===0){var bv=z;
}else if(this.__cF){bv=K+this.__cF+bu.join(bf+this.__cF)+l+bw+s;
}else{bv=T+bu.join(m)+s;
}this.__cF=bw;
return bv;
case F:this.__cF+=this.__cG;
bu=[];

if(this.__cI.indexOf(bx)!==-1){throw new TypeError(bc);
}this.__cI.push(bx);
if(this.__cH&&typeof this.__cH===p){var length=this.__cH.length;

for(var i=0;i<length;i+=1){var k=this.__cH[i];

if(typeof k===bd){var v=this.__cJ(k,bx);

if(v){bu.push(this.__cK(k)+(this.__cF?q:t)+v);
}}}}else{for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__cJ(k,bx);

if(v){bu.push(this.__cK(k)+(this.__cF?q:t)+v);
}}}}this.__cI.pop();
if(bu.length===0){var bv=G;
}else if(this.__cF){bv=C+this.__cF+bu.join(bf+this.__cF)+l+bw+Y;
}else{bv=I+bu.join(m)+Y;
}this.__cF=bw;
return bv;
}},dateToJSON:function(bh){var bi=function(n){return n<10?bb+n:n;
};
var bj=function(n){var bo=bi(n);
return n<100?bb+bo:bo;
};
return isFinite(bh.valueOf())?bh.getUTCFullYear()+ba+bi(bh.getUTCMonth()+1)+ba+bi(bh.getUTCDate())+S+bi(bh.getUTCHours())+t+bi(bh.getUTCMinutes())+t+bi(bh.getUTCSeconds())+L+bj(bh.getUTCMilliseconds())+x:null;
},__cK:function(f){var g={'\b':O,'\t':B,'\n':y,'\f':E,'\r':R,'"':M,'\\':D};
var h=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
h.lastIndex=0;

if(h.test(f)){return u+
f.replace(h,function(a){var c=g[a];
return typeof c===bd?c:bg+(be+a.charCodeAt(0).toString(16)).slice(-4);
})+u;
}else{return u+f+u;
}},parse:function(b,d){var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
e.lastIndex=0;
if(e.test(b)){b=b.replace(e,function(a){return bg+(be+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,N).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,s).replace(/(?:^|:|,)(?:\s*\[)+/g,w))){var j=eval(Q+b+J);
return typeof d===o?this.__cL({'':j},w,d):j;
}throw new SyntaxError(V);
},__cL:function(bk,bl,bm){var bn=bk[bl];

if(bn&&typeof bn===p){for(var k in bn){if(Object.hasOwnProperty.call(bn,k)){var v=this.__cL(bn,k,bm);

if(v!==undefined){bn[k]=v;
}else{delete bn[k];
}}}}return bm.call(bk,bl,bn);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var u="px",t=".qooxdoo-table-cell-icon {",s="abstract",r="",q="qx.ui.table.cellrenderer.AbstractImage",p=" qooxdoo-table-cell-icon",o="<div></div>",n="'",m="no-repeat",l="}",f="  text-align:center;",k="inline-block",i="static",e="top",d="  padding-top:1px;",h="title='",g="string",j="-moz-inline-box";
qx.Class.define(q,{extend:qx.ui.table.cellrenderer.Abstract,type:s,construct:function(){arguments.callee.base.call(this);
var c=arguments.callee.self;

if(!c.stylesheet){c.stylesheet=qx.bom.Stylesheet.createElement(t+f+d+l);
}},members:{__zr:16,__zs:16,_insetY:2,__zt:null,_identifyImage:function(w){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(F){var G=this._identifyImage(F);
if(G==null||typeof F==g){G={url:G,tooltip:null};
}
if(F.width&&F.height){var H={width:F.imageWidth,height:F.imageHeight};
}else{H=this.__zu(G.url);
}G.width=H.width;
G.height=H.height;
return G;
},__zu:function(y){var B=qx.util.ResourceManager.getInstance();
var A=qx.io.ImageLoader;
var z,C;
if(B.has(y)){z=B.getImageWidth(y);
C=B.getImageHeight(y);
}else if(A.isLoaded(y)){z=A.getWidth(y);
C=A.getHeight(y);
}else{z=this.__zr;
C=this.__zs;
}return {width:z,height:C};
},createDataCellHtml:function(D,E){this.__zt=this._getImageInfos(D);
return arguments.callee.base.call(this,D,E);
},_getCellClass:function(v){return arguments.callee.base.call(this)+p;
},_getContentHtml:function(x){var content=o;
if(this.__zt.url){var content=qx.bom.element.Decoration.create(this.__zt.url,m,{width:this.__zt.width+u,height:this.__zt.height+u,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?j:k,verticalAlign:e,position:i});
}return content;
},_getCellAttributes:function(a){var b=this.__zt.tooltip;

if(b){return h+b+n;
}else{return r;
}}},destruct:function(){this.__zt=null;
}});
})();
(function(){var j="String",i="_applyIconTrue",h="decoration/table/boolean-true.png",g="qx.ui.table.cellrenderer.Boolean",f=";padding-top:4px;",e="decoration/table/boolean-false.png",d="_applyIconFalse";
qx.Class.define(g,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){arguments.callee.base.call(this);
this.__zv=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:j,init:h,apply:i},iconFalse:{check:j,init:e,apply:d}},members:{__zw:null,__zx:false,__zv:null,_applyIconTrue:function(c){this.__zw=this.__zv.resolve(c);
},_applyIconFalse:function(l){this.__zx=this.__zv.resolve(l);
},_insetY:5,_getCellStyle:function(k){return arguments.callee.base.call(this,k)+f;
},_identifyImage:function(a){var b={imageWidth:11,imageHeight:11};

switch(a.value){case true:b.url=this.__zw;
break;
case false:b.url=this.__zx;
break;
default:b.url=null;
break;
}return b;
}},destruct:function(){this.__zv=null;
}});
})();
(function(){var s="pressed",r="abandoned",q="hovered",p="checked",o="Space",n="Enter",m="mouseup",l="mousedown",k="Boolean",j="_applyValue",c="mouseover",i="mouseout",g="qx.ui.form.ToggleButton",b="keydown",a="changeValue",f="button",d="keyup",h="execute";
qx.Class.define(g,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(t,u){arguments.callee.base.call(this,t,u);
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
(function(){var e="inherit",d="toolbar-button",c="qx.ui.toolbar.CheckBox",b="keydown",a="keyup";
qx.Class.define(c,{extend:qx.ui.form.ToggleButton,construct:function(f,g){arguments.callee.base.call(this,f,g);
this.removeListener(b,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
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
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
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


qx.$$loader.init();

