(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"showcase.Application","qx.theme":"showcase.theme.Theme","qx.version":"1.0.1"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.0.1"},"showcase":{"resourceUri":"resource","sourceUri":"script","version":"trunk"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","A date:":"Datum:","Command Menu (keyboard shortcuts)":"Command-Menü (Tastenkürzel)","Copy":"Kopieren","Cut":"Aussschneiden","Date format full:":"Vollständiges Datumsformat:","Date format long:":"Langes Datumsformat:","Date format medium:":"Mittellanges Datumsformat:","Date format short:":"kurzes Zeitformat:","Date full:":"Vollständiges Datum:","Date long:":"Langes Datum:","Date medium:":"Mittellanges Datum:","Date short:":"Zeit (kurz):","Delete":"Löschen","Form Elements":"Formular Widgets","Format of %1:":"Format von %1:","Last month":"Vorheriger Monat","Last year":"Vorheriges Jahr","Locale Information":"Lokalisierungsinformationen","Locale:":"Sprachkennung:","Localized ComboBox:":"Lokalisierte ComboBox:","Next month":"Nächster Monat","Next year":"Nächstes Jahr","Paste":"Einfügen","Redo":"Wiederholen","Reset column widths":"Spaltenbreite zurücksetzen","Search":"Suchen","Search Again":"Weiter suchen","Select All":"Alles auswählen","Territory code:":"Landeskennung:","Time format long:":"Langes Zeitformat:","Time format short:":"kurzes Zeitformat:","Time long:":"Zeit (lang):","Time short:":"Zeit (kurz):","Undo":"Rückgängig","Week start:":"Wochenanfang:","key_full_Alt":"Alt","key_full_Apps":"Kontextmenü","key_full_Backspace":"Rücktaste","key_full_CapsLock":"Feststelltaste","key_full_Control":"Steuerung","key_full_Delete":"Entfernen","key_full_Down":"Pfeil runter","key_full_End":"Ende","key_full_Enter":"Enter","key_full_Escape":"Escape","key_full_Home":"Position 1","key_full_Insert":"Einfügen","key_full_Left":"Pfeil links","key_full_Meta":"Meta","key_full_NumLock":"NumLock","key_full_PageDown":"Bild runter ","key_full_PageUp":"Bild hoch","key_full_Pause":"Pause","key_full_PrintScreen":"Drucken","key_full_Right":"Pfeil rechts","key_full_Scroll":"Rollen","key_full_Shift":"Umschalttaste","key_full_Space":"Leertaste","key_full_Tab":"Tabulator","key_full_Up":"Pfeil hoch","key_full_Win":"Windowstaste","key_short_Alt":"Alt","key_short_Apps":"Kontext","key_short_Backspace":"Rück","key_short_CapsLock":"Feststell","key_short_Control":"Strg","key_short_Delete":"Entf","key_short_Down":"Runter","key_short_End":"Ende","key_short_Enter":"Enter","key_short_Escape":"Esc","key_short_Home":"Pos1","key_short_Insert":"Einfg","key_short_Left":"Links","key_short_Meta":"Meta","key_short_NumLock":"Num","key_short_PageDown":"Bild runter","key_short_PageUp":"Bild hoch","key_short_Pause":"Pause","key_short_PrintScreen":"Druck","key_short_Right":"Rechts ","key_short_Scroll":"Rollen","key_short_Shift":"Umschalt","key_short_Space":"Leer","key_short_Tab":"Tab","key_short_Up":"Hoch","key_short_Win":"Win","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_AT":{},"de_DE":{},"en":{},"en_US":{},"es":{"%1 of %2 rows":"%1 de %2 filas","%1 rows":"%1 filas","A date:":"Una fecha:","Command Menu (keyboard shortcuts)":"Menú de comando (claves del teclado)","Copy":"Copiar","Cut":"Cortar","Date format full:":"Formato de fecha completo:","Date format long:":"Formato de fecha largo:","Date format medium:":"Formato de fecha mediano:","Date format short:":"Formato de hora corto:","Date full:":"Fecha completo:","Date long:":"Fecha largo:","Date medium:":"Fecha mediano:","Date short:":"Hora corto:","Delete":"Borrar","Format of %1:":"Formato de %1:","Last month":"Último mes","Last year":"Último año","Locale Information":"Información de la localisación","Locale:":"Localisación:","Localized ComboBox:":"ComboBox:","Next month":"Mes siguiente","Next year":"Año siguiente","Paste":"Pegar","Redo":"Rehacer","Reset column widths":"Reestablecer anchos de columnas","Search":"Búsqueda","Search Again":"Buscar otra vez","Select All":"Seleccionar todo","Territory code:":"Código regional:","Time format long:":"Formato de hora largo:","Time format short:":"Formato de hora corto:","Time long:":"Hora largo:","Time short:":"Hora corto:","Undo":"Deshacer","Week start:":"Inicio de semana:","key_full_Alt":"Alt","key_full_Apps":"Aplicaciones","key_full_Backspace":"Retroceso","key_full_CapsLock":"Bloqueo Mayúsculas","key_full_Control":"Control","key_full_Delete":"Suprimir","key_full_Down":"Flecha abajo","key_full_End":"Fin","key_full_Enter":"Intro","key_full_Escape":"Escape","key_full_Home":"Inicio","key_full_Insert":"Insertar","key_full_Left":"Flecha izquierda","key_full_Meta":"Meta","key_full_NumLock":"Bloqueo Numérico","key_full_PageDown":"Avanzar Página","key_full_PageUp":"Retroceder Página","key_full_Pause":"Pausa","key_full_PrintScreen":"Imprimir Pantalla","key_full_Right":"Flecha derecha","key_full_Scroll":"Bloq. Despl.","key_full_Shift":"Mayúscula","key_full_Space":"Espacio","key_full_Tab":"Tabulador","key_full_Up":"Flecha arriba","key_full_Win":"Windows","key_short_Alt":"Alt","key_short_Apps":"Aplic","key_short_Backspace":"Retroceso","key_short_CapsLock":"BloqMayús","key_short_Control":"Ctrl","key_short_Control_Mac":"Ctrl","key_short_Delete":"Supr","key_short_Down":"Abajo","key_short_End":"Fin","key_short_Enter":"Intro","key_short_Escape":"Esc","key_short_Home":"Inicio","key_short_Insert":"Insert","key_short_Left":"Izquierda","key_short_Meta":"Meta","key_short_NumLock":"BloqNum","key_short_PageDown":"AvPág","key_short_PageUp":"RePág","key_short_Pause":"Pausa","key_short_PrintScreen":"ImprPant","key_short_Right":"Derecha","key_short_Scroll":"BloqDespl","key_short_Shift":"Mayús","key_short_Space":"Espacio","key_short_Tab":"Tab","key_short_Up":"Arriba","key_short_Win":"Win","one of one row":"una de una fila","one row":"una fila"},"es_ES":{},"es_MX":{}};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_AT":{"cldr_date_format_full":"EEEE, dd. MMMM y","cldr_date_format_long":"dd. MMMM y","cldr_month_format_abbreviated_1":"Jän","cldr_month_format_wide_1":"Jänner"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_GB":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_date_format_full":"EEEE, d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yyyy","cldr_date_time_format_MEd":"E, d/M","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_yMEd":"EEE, d/M/yyyy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyyyMM":"MM/yyyy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"’","quotationStart":"‘"},"en_US":{},"es":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"a.m.","cldr_date_format_full":"EEEE d 'de' MMMM 'de' y","cldr_date_format_long":"d 'de' MMMM 'de' y","cldr_date_format_medium":"dd/MM/yyyy","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d-M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d 'de' MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd-MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"MM/dd","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hhmm":"hh:mm a","cldr_date_time_format_hhmmss":"hh:mm:ss a","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d MMM y","cldr_date_time_format_yMMMM":"MMMM 'de' y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ yyyy","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM-yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ 'de' yy","cldr_date_time_format_yyyyMM":"MM/yyyy","cldr_day_format_abbreviated_fri":"vie","cldr_day_format_abbreviated_mon":"lun","cldr_day_format_abbreviated_sat":"sáb","cldr_day_format_abbreviated_sun":"dom","cldr_day_format_abbreviated_thu":"jue","cldr_day_format_abbreviated_tue":"mar","cldr_day_format_abbreviated_wed":"mié","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"viernes","cldr_day_format_wide_mon":"lunes","cldr_day_format_wide_sat":"sábado","cldr_day_format_wide_sun":"domingo","cldr_day_format_wide_thu":"jueves","cldr_day_format_wide_tue":"martes","cldr_day_format_wide_wed":"miércoles","cldr_day_stand-alone_abbreviated_fri":"vie","cldr_day_stand-alone_abbreviated_mon":"lun","cldr_day_stand-alone_abbreviated_sat":"sáb","cldr_day_stand-alone_abbreviated_sun":"dom","cldr_day_stand-alone_abbreviated_thu":"jue","cldr_day_stand-alone_abbreviated_tue":"mar","cldr_day_stand-alone_abbreviated_wed":"mié","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"viernes","cldr_day_stand-alone_wide_mon":"lunes","cldr_day_stand-alone_wide_sat":"sábado","cldr_day_stand-alone_wide_sun":"domingo","cldr_day_stand-alone_wide_thu":"jueves","cldr_day_stand-alone_wide_tue":"martes","cldr_day_stand-alone_wide_wed":"miércoles","cldr_month_format_abbreviated_1":"ene","cldr_month_format_abbreviated_10":"oct","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dic","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"abr","cldr_month_format_abbreviated_5":"may","cldr_month_format_abbreviated_6":"jun","cldr_month_format_abbreviated_7":"jul","cldr_month_format_abbreviated_8":"ago","cldr_month_format_abbreviated_9":"sep","cldr_month_format_wide_1":"enero","cldr_month_format_wide_10":"octubre","cldr_month_format_wide_11":"noviembre","cldr_month_format_wide_12":"diciembre","cldr_month_format_wide_2":"febrero","cldr_month_format_wide_3":"marzo","cldr_month_format_wide_4":"abril","cldr_month_format_wide_5":"mayo","cldr_month_format_wide_6":"junio","cldr_month_format_wide_7":"julio","cldr_month_format_wide_8":"agosto","cldr_month_format_wide_9":"septiembre","cldr_month_stand-alone_narrow_1":"E","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"p.m.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"’","quotationStart":"‘"},"es_ES":{},"es_MX":{"cldr_number_decimal_separator":".","cldr_number_group_separator":","}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"animation":[],"boot":[0],"data":[0,1,11],"dragdrop":[0],"form":[0,1,3,4,5,6,9],"htmleditor":[0,1,3,2,4,12],"i18n":[0,1,3,4,5,6],"table":[0,1,3,2,5,7],"theme":[0,3,2,10],"tree":[0,3,2,8]},
  uris : [["showcase:showcase.js"],["showcase:showcase-0.js"],["showcase:showcase-1.js"],["showcase:showcase-2.js"],["showcase:showcase-3.js"],["showcase:showcase-4.js"],["showcase:showcase-5.js"],["showcase:showcase-6.js"],["showcase:showcase-7.js"],["showcase:showcase-8.js"],["showcase:showcase-9.js"],["showcase:showcase-10.js"],["showcase:showcase-11.js"]],
  urisBefore : [],
  packageHashes : {"0":"d5b61de09b0d","1":"9bbf4fb45115","2":"b82a7512b6c9","3":"4dd64145b417","4":"a59a2ad7827d","5":"6f1e58388dbe","6":"fd60765d3d35","7":"a9c000d7d2c1","8":"5aa464f0e577","9":"abb0d3b5ba3a","10":"59e433348db9","11":"1d13b61b08f1","12":"158948264deb"},
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

qx.$$packageData['d5b61de09b0d']={"resources":{"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/icon/Tango/64/actions/object-flip-horizontal.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/audio-card.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/audio-input-microphone.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/battery.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/camera-photo.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/camera-web.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/computer.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/display.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/drive-harddisk.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/drive-optical.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/input-keyboard.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/input-mouse.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/media-flash.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/media-optical.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/multimedia-player.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/network-wired.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/network-wireless.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/pda.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/phone.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/printer.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/scanner.png":[64,64,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.html":"qx","showcase/animation/icon.png":[151,125,"png","showcase"],"showcase/databinding/icon.png":[151,125,"png","showcase"],"showcase/databinding/twitter_logo_outline.png":[300,78,"png","showcase"],"showcase/dragdrop/icon.png":[151,125,"png","showcase"],"showcase/form/icon.png":[151,125,"png","showcase"],"showcase/htmleditor/format-list-ordered.png":[16,16,"png","showcase"],"showcase/htmleditor/format-list-unordered.png":[16,16,"png","showcase"],"showcase/htmleditor/icon.png":[151,125,"png","showcase"],"showcase/i18n/de.png":[60,40,"png","showcase"],"showcase/i18n/en.png":[60,40,"png","showcase"],"showcase/i18n/es.png":[60,40,"png","showcase"],"showcase/i18n/icon.png":[151,125,"png","showcase"],"showcase/i18n/nl.png":[60,40,"png","showcase"],"showcase/images/contentbackground.gif":[300,12,"gif","showcase"],"showcase/images/headerback.png":[11,200,"png","showcase"],"showcase/images/loading66.gif":[66,66,"gif","showcase"],"showcase/images/tag-hor-c.png":[6,12,"png","showcase"],"showcase/images/tag-hor-l.png":[6,12,"png","showcase"],"showcase/images/tag-hor-r.png":[6,12,"png","showcase"],"showcase/images/tag-vert-b.png":[12,6,"png","showcase"],"showcase/images/tag-vert-c.png":[12,6,"png","showcase"],"showcase/images/tag-vert-t.png":[12,6,"png","showcase"],"showcase/images/welcome.png":[413,121,"png","showcase"],"showcase/table/icon.png":[151,125,"png","showcase"],"showcase/theme/button-b.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-24],"showcase/theme/button-bl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-12],"showcase/theme/button-br.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-30],"showcase/theme/button-c.png":[20,22,"png","showcase"],"showcase/theme/button-combined-lr.png":[24,22,"png","showcase"],"showcase/theme/button-combined-tb.png":[6,72,"png","showcase"],"showcase/theme/button-l.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",-18,0],"showcase/theme/button-pressed-b.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-54],"showcase/theme/button-pressed-bl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-18],"showcase/theme/button-pressed-br.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-36],"showcase/theme/button-pressed-c.png":[20,22,"png","showcase"],"showcase/theme/button-pressed-l.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",-12,0],"showcase/theme/button-pressed-r.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",0,0],"showcase/theme/button-pressed-t.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-48],"showcase/theme/button-pressed-tl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-42],"showcase/theme/button-pressed-tr.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-66],"showcase/theme/button-r.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",-6,0],"showcase/theme/button-t.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-6],"showcase/theme/button-tl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,0],"showcase/theme/button-tr.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-60],"showcase/theme/display-b.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,0],"showcase/theme/display-bl.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-24],"showcase/theme/display-br.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-12],"showcase/theme/display-c.png":[20,27,"png","showcase"],"showcase/theme/display-combined-lr.png":[12,27,"png","showcase"],"showcase/theme/display-combined-tb.png":[6,36,"png","showcase"],"showcase/theme/display-l.png":[6,27,"png","showcase","showcase/theme/display-combined-lr.png",0,0],"showcase/theme/display-r.png":[6,27,"png","showcase","showcase/theme/display-combined-lr.png",-6,0],"showcase/theme/display-t.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-18],"showcase/theme/display-tl.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-30],"showcase/theme/display-tr.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-6],"showcase/theme/icon.png":[151,125,"png","showcase"],"showcase/theme/window-b.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-20],"showcase/theme/window-bl.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-40],"showcase/theme/window-br.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,0],"showcase/theme/window-c.png":[20,52,"png","showcase"],"showcase/theme/window-combined-lr.png":[20,52,"png","showcase"],"showcase/theme/window-combined-tb.png":[10,60,"png","showcase"],"showcase/theme/window-l.png":[10,52,"png","showcase","showcase/theme/window-combined-lr.png",0,0],"showcase/theme/window-r.png":[10,52,"png","showcase","showcase/theme/window-combined-lr.png",-10,0],"showcase/theme/window-t.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-50],"showcase/theme/window-tl.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-30],"showcase/theme/window-tr.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-10],"showcase/tree/icon.png":[151,125,"png","showcase"]}};
(function(){var S="toString",R=".",Q="default",P="Object",O='"',N="Array",M="()",L="String",K="Function",J=".prototype",br="function",bq="Boolean",bp="Error",bo="RegExp",bn="warn",bm="hasOwnProperty",bl="string",bk="toLocaleString",bj='\", "',bi="info",ba="BROKEN_IE",bb="isPrototypeOf",X="Date",Y="",V="qx.Bootstrap",W="]",T="Class",U="error",bc="[Class ",bd="valueOf",bf="Number",be="count",bh="debug",bg="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bc+this.classname+W;
},createNamespace:function(name,r){var t=name.split(R);
var parent=window;
var s=t[0];

for(var i=0,u=t.length-1;i<u;i++,s=t[i]){if(!parent[s]){parent=parent[s]={};
}else{parent=parent[s];
}}parent[s]=r;
return s;
},setDisplayName:function(bU,bV,name){bU.displayName=bV+R+name+M;
},setDisplayNames:function(bE,bF){for(var name in bE){var bG=bE[name];

if(bG instanceof Function){bG.displayName=bF+R+name+M;
}}},define:function(name,e){if(!e){var e={statics:{}};
}var k;
var h=null;
qx.Bootstrap.setDisplayNames(e.statics,name);

if(e.members){qx.Bootstrap.setDisplayNames(e.members,name+J);
k=e.construct||new Function;
var f=e.statics;

for(var g in f){k[g]=f[g];
}h=k.prototype;
var m=e.members;

for(var g in m){h[g]=m[g];
}}else{k=e.statics||{};
}var j=this.createNamespace(name,k);
k.name=k.classname=name;
k.basename=j;
k.$$type=T;
if(!k.hasOwnProperty(S)){k.toString=this.genericToString;
}if(e.defer){e.defer(k,h);
}qx.Bootstrap.$$registry[name]=e.statics;
return k;
}};
qx.Bootstrap.define(V,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bx){return bx.__count__;
},"default":function(bt){var length=0;

for(var bu in bt){length++;
}return length;
}})[(({}).__count__==0)?be:Q],objectMergeWith:function(n,o,p){if(p===undefined){p=true;
}
for(var q in o){if(p||n[q]===undefined){n[q]=o[q];
}}return n;
},__nj:[bb,bm,bk,S,bd],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(E){var F=[];

for(var I in E){F.push(I);
}var G=qx.Bootstrap.__nj;
var H=Object.prototype.hasOwnProperty;

for(var i=0,a=G,l=a.length;i<l;i++){if(H.call(E,a[i])){F.push(a[i]);
}}return F;
},"default":function(bH){var bI=[];

for(var bJ in bH){bI.push(bJ);
}return bI;
}})[typeof (Object.keys)==
br?bg:
(function(){for(var by in {toString:1}){return by;
}})()!==S?ba:Q],getKeysAsString:function(bz){var bA=qx.Bootstrap.getKeys(bz);

if(bA.length==0){return Y;
}return O+bA.join(bj)+O;
},__nk:{"[object String]":L,"[object Array]":N,"[object Object]":P,"[object RegExp]":bo,"[object Number]":bf,"[object Boolean]":bq,"[object Date]":X,"[object Function]":K,"[object Error]":bp},firstUp:function(bD){return bD.charAt(0).toUpperCase()+bD.substr(1);
},firstLow:function(bQ){return bQ.charAt(0).toLowerCase()+bQ.substr(1);
},getClass:function(bB){var bC=Object.prototype.toString.call(bB);
return (qx.Bootstrap.__nk[bC]||bC.slice(8,-1));
},isString:function(B){return (B!==null&&(typeof B===bl||qx.Bootstrap.getClass(B)==L||B instanceof String||(!!B&&!!B.$$isString)));
},isArray:function(bs){return (bs!==null&&(bs instanceof Array||(bs&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bs.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bs)==N||(!!bs&&!!bs.$$isArray)));
},isObject:function(bR){return (bR!==undefined&&bR!==null&&qx.Bootstrap.getClass(bR)==P);
},isFunction:function(bP){return qx.Bootstrap.getClass(bP)==K;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(b,name){while(b){if(b.$$properties&&b.$$properties[name]){return b.$$properties[name];
}b=b.superclass;
}return null;
},hasProperty:function(bO,name){return !!qx.Bootstrap.getPropertyDefinition(bO,name);
},getEventType:function(bT,name){var bT=bT.constructor;

while(bT.superclass){if(bT.$$events&&bT.$$events[name]!==undefined){return bT.$$events[name];
}bT=bT.superclass;
}return null;
},supportsEvent:function(y,name){return !!qx.Bootstrap.getEventType(y,name);
},getByInterface:function(v,w){var x,i,l;

while(v){if(v.$$implements){x=v.$$flatImplements;

for(i=0,l=x.length;i<l;i++){if(x[i]===w){return v;
}}}v=v.superclass;
}return null;
},hasInterface:function(bK,bL){return !!qx.Bootstrap.getByInterface(bK,bL);
},getMixins:function(C){var D=[];

while(C){if(C.$$includes){D.push.apply(D,C.$$flatIncludes);
}C=C.superclass;
}return D;
},$$logs:[],debug:function(bv,bw){qx.Bootstrap.$$logs.push([bh,arguments]);
},info:function(bM,bN){qx.Bootstrap.$$logs.push([bi,arguments]);
},warn:function(z,A){qx.Bootstrap.$$logs.push([bn,arguments]);
},error:function(c,d){qx.Bootstrap.$$logs.push([U,arguments]);
},trace:function(bS){}}});
})();
(function(){var p="qx.allowUrlSettings",o="&",n="qx.core.Setting",m="qx.allowUrlVariants",l="qx.propertyDebugLevel",k="qxsetting",j=":",h=".";
qx.Bootstrap.define(n,{statics:{__jm:{},define:function(c,d){if(d===undefined){throw new Error('Default value of setting "'+c+'" must be defined!');
}
if(!this.__jm[c]){this.__jm[c]={};
}else if(this.__jm[c].defaultValue!==undefined){throw new Error('Setting "'+c+'" is already defined!');
}this.__jm[c].defaultValue=d;
},get:function(q){var r=this.__jm[q];

if(r===undefined){throw new Error('Setting "'+q+'" is not defined.');
}
if(r.value!==undefined){return r.value;
}return r.defaultValue;
},set:function(e,f){if((e.split(h)).length<2){throw new Error('Malformed settings key "'+e+'". Must be following the schema "namespace.key".');
}
if(!this.__jm[e]){this.__jm[e]={};
}this.__jm[e].value=f;
},__jn:function(){if(window.qxsettings){for(var g in window.qxsettings){this.set(g,window.qxsettings[g]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(t){}this.__jo();
}},__jo:function(){if(this.get(p)!=true){return;
}var b=document.location.search.slice(1).split(o);

for(var i=0;i<b.length;i++){var a=b[i].split(j);

if(a.length!=3||a[0]!=k){continue;
}this.set(a[1],decodeURIComponent(a[2]));
}}},defer:function(s){s.define(p,false);
s.define(m,false);
s.define(l,0);
s.__jn();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__jl:function(){var u=d;
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
window.alert("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(t){t.__jl();
}});
})();
(function(){var A="on",z="off",y="|",x="default",w="object",u="&",t="qx.aspects",s="$",r="qx.allowUrlVariants",q="qx.debug",j="qx.client",p="qx.dynlocale",n="webkit",h="qxvariant",g="opera",m=":",k="qx.core.Variant",o="mshtml",f="gecko";
qx.Bootstrap.define(k,{statics:{__jX:{},__jY:{},compilerIsSet:function(){return true;
},define:function(B,C,D){{};

if(!this.__jX[B]){this.__jX[B]={};
}else{}this.__jX[B].allowedValues=C;
this.__jX[B].defaultValue=D;
},get:function(J){var K=this.__jX[J];
{};

if(K.value!==undefined){return K.value;
}return K.defaultValue;
},__ka:function(){if(window.qxvariants){for(var E in qxvariants){{};

if(!this.__jX[E]){this.__jX[E]={};
}this.__jX[E].value=qxvariants[E];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(L){}this.__kb(this.__jX);
}},__kb:function(){if(qx.core.Setting.get(r)!=true){return;
}var F=document.location.search.slice(1).split(u);

for(var i=0;i<F.length;i++){var G=F[i].split(m);

if(G.length!=3||G[0]!=h){continue;
}var H=G[1];

if(!this.__jX[H]){this.__jX[H]={};
}this.__jX[H].value=decodeURIComponent(G[2]);
}},select:function(a,b){{};

for(var c in b){if(this.isSet(a,c)){return b[c];
}}
if(b[x]!==undefined){return b[x];
}{};
},isSet:function(M,N){var O=M+s+N;

if(this.__jY[O]!==undefined){return this.__jY[O];
}var Q=false;
if(N.indexOf(y)<0){Q=this.get(M)===N;
}else{var P=N.split(y);

for(var i=0,l=P.length;i<l;i++){if(this.get(M)===P[i]){Q=true;
break;
}}}this.__jY[O]=Q;
return Q;
},__kc:function(v){return typeof v===w&&v!==null&&v instanceof Array;
},__kd:function(v){return typeof v===w&&v!==null&&!(v instanceof Array);
},__ke:function(d,e){for(var i=0,l=d.length;i<l;i++){if(d[i]==e){return true;
}}return false;
}},defer:function(I){I.define(j,[f,o,g,n],qx.bom.client.Engine.NAME);
I.define(q,[A,z],A);
I.define(t,[A,z],z);
I.define(p,[A,z],A);
I.__ka();
}});
})();
(function(){var w="function",v="Boolean",u="qx.Interface",t="]",s="toggle",r="Interface",q="is",p="[Interface ";
qx.Bootstrap.define(u,{statics:{define:function(name,j){if(j){if(j.extend&&!(j.extend instanceof Array)){j.extend=[j.extend];
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
}k.$$type=r;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
qx.Interface.$$registry[name]=k;
return k;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(g){if(!g){return [];
}var h=g.concat();

for(var i=0,l=g.length;i<l;i++){if(g[i].$$extends){h.push.apply(h,this.flatten(g[i].$$extends));
}}return h;
},__qt:function(B,C,D,E){var I=D.$$members;

if(I){for(var H in I){if(qx.Bootstrap.isFunction(I[H])){var G=this.__qu(C,H);
var F=G||qx.Bootstrap.isFunction(B[H]);

if(!F){throw new Error('Implementation of method "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}var J=E===true&&!G&&!qx.Bootstrap.hasInterface(C,D);

if(J){B[H]=this.__qx(D,B[H],H,I[H]);
}}else{if(typeof B[H]===undefined){if(typeof B[H]!==w){throw new Error('Implementation of member "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}}}}}},__qu:function(a,b){var f=b.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!f){return false;
}var c=qx.Bootstrap.firstLow(f[2]);
var d=qx.Bootstrap.getPropertyDefinition(a,c);

if(!d){return false;
}var e=f[0]==q||f[0]==s;

if(e){return qx.Bootstrap.getPropertyDefinition(a,c).check==v;
}return true;
},__qv:function(m,n){if(n.$$properties){for(var o in n.$$properties){if(!qx.Bootstrap.getPropertyDefinition(m,o)){throw new Error('The property "'+o+'" is not supported by Class "'+m.classname+'"!');
}}}},__qw:function(K,L){if(L.$$events){for(var M in L.$$events){if(!qx.Bootstrap.supportsEvent(K,M)){throw new Error('The event "'+M+'" is not supported by Class "'+K.classname+'"!');
}}}},assertObject:function(N,O){var Q=N.constructor;
this.__qt(N,Q,O,false);
this.__qv(Q,O);
this.__qw(Q,O);
var P=O.$$extends;

if(P){for(var i=0,l=P.length;i<l;i++){this.assertObject(N,P[i]);
}}},assert:function(x,y,z){this.__qt(x.prototype,x,y,z);
this.__qv(x,y);
this.__qw(x,y);
var A=y.$$extends;

if(A){for(var i=0,l=A.length;i<l;i++){this.assert(x,A[i],z);
}}},genericToString:function(){return p+this.name+t;
},$$registry:{},__qx:function(){},__qy:null,__qz:function(){}}});
})();
(function(){var j="qx.Mixin",h=".prototype",g="constructor",f="[Mixin ",e="]",d="destruct",c="Mixin";
qx.Bootstrap.define(j,{statics:{define:function(name,k){if(k){if(k.include&&!(k.include instanceof Array)){k.include=[k.include];
}{};
var n=k.statics?k.statics:{};
qx.Bootstrap.setDisplayNames(n,name);

for(var m in n){if(n[m] instanceof Function){n[m].$$mixin=n;
}}if(k.construct){n.$$constructor=k.construct;
qx.Bootstrap.setDisplayName(k.construct,name,g);
}
if(k.include){n.$$includes=k.include;
}
if(k.properties){n.$$properties=k.properties;
}
if(k.members){n.$$members=k.members;
qx.Bootstrap.setDisplayNames(k.members,name+h);
}
for(var m in n.$$members){if(n.$$members[m] instanceof Function){n.$$members[m].$$mixin=n;
}}
if(k.events){n.$$events=k.events;
}
if(k.destruct){n.$$destructor=k.destruct;
qx.Bootstrap.setDisplayName(k.destruct,name,d);
}}else{var n={};
}n.$$type=c;
n.name=name;
n.toString=this.genericToString;
n.basename=qx.Bootstrap.createNamespace(name,n);
this.$$registry[name]=n;
return n;
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
},isCompatible:function(o,p){var q=qx.Bootstrap.getMixins(p);
q.push(o);
return qx.Mixin.checkCompatibility(q);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(a){if(!a){return [];
}var b=a.concat();

for(var i=0,l=a.length;i<l;i++){if(a[i].$$includes){b.push.apply(b,this.flatten(a[i].$$includes));
}}return b;
},genericToString:function(){return f+this.name+e;
},$$registry:{},__mL:null,__mM:function(){}}});
})();
(function(){var cU=';',cT='computed=this.',cS='=value;',cR='this.',cQ="set",cP="setThemed",cO="setRuntime",cN="init",cM='if(this.',cL='delete this.',bV='!==undefined)',bU='}',bT="resetThemed",bS='else if(this.',bR="string",bQ='return this.',bP="reset",bO="boolean",bN="resetRuntime",bM='!==undefined){',dc="refresh",dd='=true;',da="",db="this.",cX='old=this.',cY="();",cV='else ',cW='if(old===undefined)old=this.',de='old=computed=this.',df="return this.",cu="get",ct='(value);',cw=";",cv="(a[",cy='if(old===computed)return value;',cx='if(old===undefined)old=null;',cA=' of an instance of ',cz=' is not (yet) ready!");',cs="]);",cr='!==inherit){',D='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',E='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',F='value !== null && value.nodeType === 9 && value.documentElement',G='===value)return value;',H='value !== null && value.$$type === "Mixin"',I='return init;',J='var init=this.',K='value !== null && value.nodeType === 1 && value.attributes',L="Error in property ",M='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',ds="property",dr='.validate.call(this, value);',dq='qx.core.Assert.assertInstance(value, Date, msg) || true',dp='else{',dw=" in method ",dv='qx.core.Assert.assertInstance(value, Error, msg) || true',du='=computed;',dt='Undefined value is not allowed!',dy='(backup);',dx='if(computed===inherit){',bm="inherit",bn='Is invalid!',bk='if(value===undefined)prop.error(this,2,"',bl='var computed, old=this.',bq='else if(computed===undefined)',br="': ",bo=" of class ",bp='value !== null && value.nodeType !== undefined',bi='===undefined)return;',bj='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',U="')){",T='qx.core.Assert.assertPositiveInteger(value, msg) || true',W='else this.',V='value=this.',Q='","',P='if(init==qx.core.Property.$$inherit)init=null;',S='value !== null && value.$$type === "Interface"',R='var inherit=prop.$$inherit;',O="', qx.event.type.Data, [computed, old]",N="$$useinit_",bw='computed=undefined;delete this.',bx='",value);',by='computed=value;',bz=".",bs="$$runtime_",bt='Requires exactly one argument!',bu=';}',bv="$$user_",bA='){',bB='qx.core.Assert.assertArray(value, msg) || true',bf='if(computed===undefined||computed===inherit){',be='qx.core.Assert.assertPositiveNumber(value, msg) || true',bd=".prototype",bc="Boolean",bb=")}",ba='(computed, old, "',Y='return value;',X='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bh='}else{',bg="if(reg.hasListener(this, '",bC='Does not allow any arguments!',bD=')a[i].',bE="()",bF="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bG='.$$properties.',bH='value !== null && value.$$type === "Theme"',bI="var reg=qx.event.Registration;",bJ="())",bK='return null;',bL='qx.core.Assert.assertObject(value, msg) || true',ca='");',bY='qx.core.Assert.assertString(value, msg) || true',bX='var pa=this.getLayoutParent();if(pa)computed=pa.',bW='value !== null && value.$$type === "Class"',ce='qx.core.Assert.assertFunction(value, msg) || true',cd='!==undefined&&',cc='var computed, old;',cb='var backup=computed;',cg="on",cf="object",cn="$$init_",co="$$theme_",cl='if(computed===undefined)computed=null;',cm='qx.core.Assert.assertMap(value, msg) || true',cj="qx.aspects",ck='qx.core.Assert.assertNumber(value, msg) || true',ch='if((computed===undefined||computed===inherit)&&',ci="reg.fireEvent(this, '",cp='Null value is not allowed!',cq='qx.core.Assert.assertInteger(value, msg) || true',cE="value",cD="shorthand",cG='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cF='value !== null && value.type !== undefined',cI='value !== null && value.document',cH='throw new Error("Property ',cK="(!this.",cJ='qx.core.Assert.assertBoolean(value, msg) || true',cC='if(a[i].',cB="toggle",dk="$$inherit_",dl='var prop=qx.core.Property;',dm=" with incoming value '",dn="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",dg='if(computed===undefined||computed==inherit)computed=null;',dh="qx.core.Property",di="is",dj='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(dh,{statics:{__lO:{"Boolean":cJ,"String":bY,"Number":ck,"Integer":cq,"PositiveNumber":be,"PositiveInteger":T,"Error":dv,"RegExp":cG,"Object":bL,"Array":bB,"Map":cm,"Function":ce,"Date":dq,"Node":bp,"Element":K,"Document":F,"Window":cI,"Event":cF,"Class":bW,"Mixin":H,"Interface":S,"Theme":bH,"Color":D,"Decorator":bj,"Font":E},__lP:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bm,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bR,dispose:bO,inheritable:bO,nullable:bO,themeable:bO,refine:bO,init:null,apply:bR,event:bR,check:null,transform:bR,deferredInit:bO,validate:null},$$allowedGroupKeys:{name:bR,group:cf,mode:bR,themeable:bO},$$inheritable:{},refresh:function(eu){var parent=eu.getLayoutParent();

if(parent){var ex=eu.constructor;
var ez=this.$$store.inherit;
var ey=this.$$store.init;
var ew=this.$$method.refresh;
var eA;
var ev;
{};

while(ex){eA=ex.$$properties;

if(eA){for(var name in this.$$inheritable){if(eA[name]&&eu[ew[name]]){ev=parent[ez[name]];

if(ev===undefined){ev=parent[ey[name]];
}{};
eu[ew[name]](ev);
}}}ex=ex.superclass;
}}},attach:function(dK){var dL=dK.$$properties;

if(dL){for(var name in dL){this.attachMethods(dK,name,dL[name]);
}}dK.$$propertiesAttached=true;
},attachMethods:function(B,name,C){C.group?this.__lQ(B,C,name):this.__lR(B,C,name);
},__lQ:function(p,q,name){var x=qx.Bootstrap.firstUp(name);
var w=p.prototype;
var y=q.themeable===true;
{};
var z=[];
var t=[];

if(y){var r=[];
var v=[];
}var u=bF;
z.push(u);

if(y){r.push(u);
}
if(q.mode==cD){var s=dn;
z.push(s);

if(y){r.push(s);
}}
for(var i=0,a=q.group,l=a.length;i<l;i++){{};
z.push(db,this.$$method.set[a[i]],cv,i,cs);
t.push(db,this.$$method.reset[a[i]],cY);

if(y){{};
r.push(db,this.$$method.setThemed[a[i]],cv,i,cs);
v.push(db,this.$$method.resetThemed[a[i]],cY);
}}this.$$method.set[name]=cQ+x;
w[this.$$method.set[name]]=new Function(z.join(da));
this.$$method.reset[name]=bP+x;
w[this.$$method.reset[name]]=new Function(t.join(da));

if(y){this.$$method.setThemed[name]=cP+x;
w[this.$$method.setThemed[name]]=new Function(r.join(da));
this.$$method.resetThemed[name]=bT+x;
w[this.$$method.resetThemed[name]]=new Function(v.join(da));
}},__lR:function(eg,eh,name){var ej=qx.Bootstrap.firstUp(name);
var el=eg.prototype;
{};
if(eh.dispose===undefined&&typeof eh.check===bR){eh.dispose=this.__lP[eh.check]||qx.Bootstrap.classIsDefined(eh.check)||(qx.Interface&&qx.Interface.isDefined(eh.check));
}var ek=this.$$method;
var ei=this.$$store;
ei.runtime[name]=bs+name;
ei.user[name]=bv+name;
ei.theme[name]=co+name;
ei.init[name]=cn+name;
ei.inherit[name]=dk+name;
ei.useinit[name]=N+name;
ek.get[name]=cu+ej;
el[ek.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,eg,name,cu);
};
ek.set[name]=cQ+ej;
el[ek.set[name]]=function(eH){return qx.core.Property.executeOptimizedSetter(this,eg,name,cQ,arguments);
};
ek.reset[name]=bP+ej;
el[ek.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,eg,name,bP);
};

if(eh.inheritable||eh.apply||eh.event||eh.deferredInit){ek.init[name]=cN+ej;
el[ek.init[name]]=function(o){return qx.core.Property.executeOptimizedSetter(this,eg,name,cN,arguments);
};
}
if(eh.inheritable){ek.refresh[name]=dc+ej;
el[ek.refresh[name]]=function(et){return qx.core.Property.executeOptimizedSetter(this,eg,name,dc,arguments);
};
}ek.setRuntime[name]=cO+ej;
el[ek.setRuntime[name]]=function(dJ){return qx.core.Property.executeOptimizedSetter(this,eg,name,cO,arguments);
};
ek.resetRuntime[name]=bN+ej;
el[ek.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,eg,name,bN);
};

if(eh.themeable){ek.setThemed[name]=cP+ej;
el[ek.setThemed[name]]=function(A){return qx.core.Property.executeOptimizedSetter(this,eg,name,cP,arguments);
};
ek.resetThemed[name]=bT+ej;
el[ek.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,eg,name,bT);
};
}
if(eh.check===bc){el[cB+ej]=new Function(df+ek.set[name]+cK+ek.get[name]+bJ);
el[di+ej]=new Function(df+ek.get[name]+bE);
}},__lS:{0:dj,1:bt,2:dt,3:bC,4:cp,5:bn},error:function(em,en,eo,ep,eq){var er=em.constructor.classname;
var es=L+eo+bo+er+dw+this.$$method[ep][eo]+dm+eq+br;
throw new Error(es+(this.__lS[en]||"Unknown reason: "+en));
},__lT:function(g,h,name,j,k,m){var n=this.$$method[j][name];
{h[n]=new Function(cE,k.join(da));
};
if(qx.core.Variant.isSet(cj,cg)){h[n]=qx.core.Aspect.wrap(g.classname+bz+n,h[n],ds);
}qx.Bootstrap.setDisplayName(h[n],g.classname+bd,n);
if(m===undefined){return g[n]();
}else{return g[n](m[0]);
}},executeOptimizedGetter:function(dM,dN,name,dO){var dQ=dN.$$properties[name];
var dS=dN.prototype;
var dP=[];
var dR=this.$$store;
dP.push(cM,dR.runtime[name],bV);
dP.push(bQ,dR.runtime[name],cU);

if(dQ.inheritable){dP.push(bS,dR.inherit[name],bV);
dP.push(bQ,dR.inherit[name],cU);
dP.push(cV);
}dP.push(cM,dR.user[name],bV);
dP.push(bQ,dR.user[name],cU);

if(dQ.themeable){dP.push(bS,dR.theme[name],bV);
dP.push(bQ,dR.theme[name],cU);
}
if(dQ.deferredInit&&dQ.init===undefined){dP.push(bS,dR.init[name],bV);
dP.push(bQ,dR.init[name],cU);
}dP.push(cV);

if(dQ.init!==undefined){if(dQ.inheritable){dP.push(J,dR.init[name],cU);

if(dQ.nullable){dP.push(P);
}else if(dQ.init!==undefined){dP.push(bQ,dR.init[name],cU);
}else{dP.push(X,name,cA,dN.classname,cz);
}dP.push(I);
}else{dP.push(bQ,dR.init[name],cU);
}}else if(dQ.inheritable||dQ.nullable){dP.push(bK);
}else{dP.push(cH,name,cA,dN.classname,cz);
}return this.__lT(dM,dS,name,dO,dP);
},executeOptimizedSetter:function(dV,dW,name,dX,dY){var ee=dW.$$properties[name];
var ed=dW.prototype;
var eb=[];
var ea=dX===cQ||dX===cP||dX===cO||(dX===cN&&ee.init===undefined);
var ec=ee.apply||ee.event||ee.inheritable;
var ef=this.__lU(dX,name);
this.__lV(eb,ee,name,dX,ea);

if(ea){this.__lW(eb,dW,ee,name);
}
if(ec){this.__lX(eb,ea,ef,dX);
}
if(ee.inheritable){eb.push(R);
}{};

if(!ec){this.__ma(eb,name,dX,ea);
}else{this.__mb(eb,ee,name,dX,ea);
}
if(ee.inheritable){this.__mc(eb,ee,name,dX);
}else if(ec){this.__md(eb,ee,name,dX);
}
if(ec){this.__me(eb,ee,name);
if(ee.inheritable&&ed._getChildren){this.__mf(eb,name);
}}if(ea){eb.push(Y);
}return this.__lT(dV,ed,name,dX,eb,dY);
},__lU:function(eB,name){if(eB===cO||eB===bN){var eC=this.$$store.runtime[name];
}else if(eB===cP||eB===bT){eC=this.$$store.theme[name];
}else if(eB===cN){eC=this.$$store.init[name];
}else{eC=this.$$store.user[name];
}return eC;
},__lV:function(dz,dA,name,dB,dC){{if(!dA.nullable||dA.check||dA.inheritable){dz.push(dl);
}if(dB===cQ){dz.push(bk,name,Q,dB,bx);
}};
},__lW:function(dG,dH,dI,name){if(dI.transform){dG.push(V,dI.transform,ct);
}if(dI.validate){if(typeof dI.validate===bR){dG.push(cR,dI.validate,ct);
}else if(dI.validate instanceof Function){dG.push(dH.classname,bG,name);
dG.push(dr);
}}},__lX:function(b,c,d,e){var f=(e===bP||e===bT||e===bN);

if(c){b.push(cM,d,G);
}else if(f){b.push(cM,d,bi);
}},__lY:undefined,__ma:function(eD,name,eE,eF){if(eE===cO){eD.push(cR,this.$$store.runtime[name],cS);
}else if(eE===bN){eD.push(cM,this.$$store.runtime[name],bV);
eD.push(cL,this.$$store.runtime[name],cU);
}else if(eE===cQ){eD.push(cR,this.$$store.user[name],cS);
}else if(eE===bP){eD.push(cM,this.$$store.user[name],bV);
eD.push(cL,this.$$store.user[name],cU);
}else if(eE===cP){eD.push(cR,this.$$store.theme[name],cS);
}else if(eE===bT){eD.push(cM,this.$$store.theme[name],bV);
eD.push(cL,this.$$store.theme[name],cU);
}else if(eE===cN&&eF){eD.push(cR,this.$$store.init[name],cS);
}},__mb:function(eI,eJ,name,eK,eL){if(eJ.inheritable){eI.push(bl,this.$$store.inherit[name],cU);
}else{eI.push(cc);
}eI.push(cM,this.$$store.runtime[name],bM);

if(eK===cO){eI.push(cT,this.$$store.runtime[name],cS);
}else if(eK===bN){eI.push(cL,this.$$store.runtime[name],cU);
eI.push(cM,this.$$store.user[name],bV);
eI.push(cT,this.$$store.user[name],cU);
eI.push(bS,this.$$store.theme[name],bV);
eI.push(cT,this.$$store.theme[name],cU);
eI.push(bS,this.$$store.init[name],bM);
eI.push(cT,this.$$store.init[name],cU);
eI.push(cR,this.$$store.useinit[name],dd);
eI.push(bU);
}else{eI.push(de,this.$$store.runtime[name],cU);
if(eK===cQ){eI.push(cR,this.$$store.user[name],cS);
}else if(eK===bP){eI.push(cL,this.$$store.user[name],cU);
}else if(eK===cP){eI.push(cR,this.$$store.theme[name],cS);
}else if(eK===bT){eI.push(cL,this.$$store.theme[name],cU);
}else if(eK===cN&&eL){eI.push(cR,this.$$store.init[name],cS);
}}eI.push(bU);
eI.push(bS,this.$$store.user[name],bM);

if(eK===cQ){if(!eJ.inheritable){eI.push(cX,this.$$store.user[name],cU);
}eI.push(cT,this.$$store.user[name],cS);
}else if(eK===bP){if(!eJ.inheritable){eI.push(cX,this.$$store.user[name],cU);
}eI.push(cL,this.$$store.user[name],cU);
eI.push(cM,this.$$store.runtime[name],bV);
eI.push(cT,this.$$store.runtime[name],cU);
eI.push(cM,this.$$store.theme[name],bV);
eI.push(cT,this.$$store.theme[name],cU);
eI.push(bS,this.$$store.init[name],bM);
eI.push(cT,this.$$store.init[name],cU);
eI.push(cR,this.$$store.useinit[name],dd);
eI.push(bU);
}else{if(eK===cO){eI.push(cT,this.$$store.runtime[name],cS);
}else if(eJ.inheritable){eI.push(cT,this.$$store.user[name],cU);
}else{eI.push(de,this.$$store.user[name],cU);
}if(eK===cP){eI.push(cR,this.$$store.theme[name],cS);
}else if(eK===bT){eI.push(cL,this.$$store.theme[name],cU);
}else if(eK===cN&&eL){eI.push(cR,this.$$store.init[name],cS);
}}eI.push(bU);
if(eJ.themeable){eI.push(bS,this.$$store.theme[name],bM);

if(!eJ.inheritable){eI.push(cX,this.$$store.theme[name],cU);
}
if(eK===cO){eI.push(cT,this.$$store.runtime[name],cS);
}else if(eK===cQ){eI.push(cT,this.$$store.user[name],cS);
}else if(eK===cP){eI.push(cT,this.$$store.theme[name],cS);
}else if(eK===bT){eI.push(cL,this.$$store.theme[name],cU);
eI.push(cM,this.$$store.init[name],bM);
eI.push(cT,this.$$store.init[name],cU);
eI.push(cR,this.$$store.useinit[name],dd);
eI.push(bU);
}else if(eK===cN){if(eL){eI.push(cR,this.$$store.init[name],cS);
}eI.push(cT,this.$$store.theme[name],cU);
}else if(eK===dc){eI.push(cT,this.$$store.theme[name],cU);
}eI.push(bU);
}eI.push(bS,this.$$store.useinit[name],bA);

if(!eJ.inheritable){eI.push(cX,this.$$store.init[name],cU);
}
if(eK===cN){if(eL){eI.push(cT,this.$$store.init[name],cS);
}else{eI.push(cT,this.$$store.init[name],cU);
}}else if(eK===cQ||eK===cO||eK===cP||eK===dc){eI.push(cL,this.$$store.useinit[name],cU);

if(eK===cO){eI.push(cT,this.$$store.runtime[name],cS);
}else if(eK===cQ){eI.push(cT,this.$$store.user[name],cS);
}else if(eK===cP){eI.push(cT,this.$$store.theme[name],cS);
}else if(eK===dc){eI.push(cT,this.$$store.init[name],cU);
}}eI.push(bU);
if(eK===cQ||eK===cO||eK===cP||eK===cN){eI.push(dp);

if(eK===cO){eI.push(cT,this.$$store.runtime[name],cS);
}else if(eK===cQ){eI.push(cT,this.$$store.user[name],cS);
}else if(eK===cP){eI.push(cT,this.$$store.theme[name],cS);
}else if(eK===cN){if(eL){eI.push(cT,this.$$store.init[name],cS);
}else{eI.push(cT,this.$$store.init[name],cU);
}eI.push(cR,this.$$store.useinit[name],dd);
}eI.push(bU);
}},__mc:function(dD,dE,name,dF){dD.push(bf);

if(dF===dc){dD.push(by);
}else{dD.push(bX,this.$$store.inherit[name],cU);
}dD.push(ch);
dD.push(cR,this.$$store.init[name],cd);
dD.push(cR,this.$$store.init[name],cr);
dD.push(cT,this.$$store.init[name],cU);
dD.push(cR,this.$$store.useinit[name],dd);
dD.push(bh);
dD.push(cL,this.$$store.useinit[name],bu);
dD.push(bU);
dD.push(cy);
dD.push(dx);
dD.push(bw,this.$$store.inherit[name],cU);
dD.push(bU);
dD.push(bq);
dD.push(cL,this.$$store.inherit[name],cU);
dD.push(W,this.$$store.inherit[name],du);
dD.push(cb);
if(dE.init!==undefined&&dF!==cN){dD.push(cW,this.$$store.init[name],cw);
}else{dD.push(cx);
}dD.push(dg);
},__md:function(eM,eN,name,eO){if(eO!==cQ&&eO!==cO&&eO!==cP){eM.push(cl);
}eM.push(cy);
if(eN.init!==undefined&&eO!==cN){eM.push(cW,this.$$store.init[name],cw);
}else{eM.push(cx);
}},__me:function(dT,dU,name){if(dU.apply){dT.push(cR,dU.apply,ba,name,ca);
}if(dU.event){dT.push(bI,bg,dU.event,U,ci,dU.event,O,bb);
}},__mf:function(eG,name){eG.push(M);
eG.push(cC,this.$$method.refresh[name],bD,this.$$method.refresh[name],dy);
eG.push(bU);
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__rD:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__rD;
var k;

for(var i=0;i<l.length;i++){k=l[i];

if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);
}}
if(m.length===0&&h.length===0){return f;
}var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);
}var q=f.apply(this,arguments);

for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,q);
}return q;
};

if(g!==a){j.self=f.self;
j.base=f.base;
}f.wrapper=j;
j.original=f;
return j;
},addAdvice:function(n,o,p,name){this.__rD.push({fcn:n,pos:o===c?-1:1,type:p,name:name});
}}});
})();
(function(){var x="qx.aspects",w="on",v=".",u="static",t="constructor",s="[Class ",r="]",q="toString",p="member",o="$$init_",g=".prototype",n="destructor",k="extend",f="destruct",e="Class",j="off",h="qx.Class",m="singleton",d="qx.event.type.Data";
qx.Bootstrap.define(h,{statics:{define:function(name,E){if(!E){var E={};
}if(E.include&&!(E.include instanceof Array)){E.include=[E.include];
}if(E.implement&&!(E.implement instanceof Array)){E.implement=[E.implement];
}if(!E.hasOwnProperty(k)&&!E.type){E.type=u;
}{};
var G=this.__mk(name,E.type,E.extend,E.statics,E.construct,E.destruct);
if(E.extend){if(E.properties){this.__mm(G,E.properties,true);
}if(E.members){this.__mo(G,E.members,true,true,false);
}if(E.events){this.__ml(G,E.events,true);
}if(E.include){for(var i=0,l=E.include.length;i<l;i++){this.__mr(G,E.include[i],false);
}}}if(E.settings){for(var F in E.settings){qx.core.Setting.define(F,E.settings[F]);
}}if(E.variants){for(var F in E.variants){qx.core.Variant.define(F,E.variants[F].allowedValues,E.variants[F].defaultValue);
}}if(E.implement){for(var i=0,l=E.implement.length;i<l;i++){this.__mq(G,E.implement[i]);
}}{};
if(E.defer){E.defer.self=G;
E.defer(G,G.prototype,{add:function(name,bD){var bE={};
bE[name]=bD;
qx.Class.__mm(G,bE,true);
}});
}return G;
},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(Y,ba){{};
qx.Class.__mr(Y,ba,false);
},patch:function(bs,bt){{};
qx.Class.__mr(bs,bt,true);
},isSubClassOf:function(bq,br){if(!bq){return false;
}
if(bq==br){return true;
}
if(bq.prototype instanceof br){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(bh){var bi=[];

while(bh){if(bh.$$properties){bi.push.apply(bi,qx.Bootstrap.getKeys(bh.$$properties));
}bh=bh.superclass;
}return bi;
},getByProperty:function(L,name){while(L){if(L.$$properties&&L.$$properties[name]){return L;
}L=L.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bl,bm){return bl.$$includes&&bl.$$includes.indexOf(bm)!==-1;
},getByMixin:function(y,z){var A,i,l;

while(y){if(y.$$includes){A=y.$$flatIncludes;

for(i=0,l=A.length;i<l;i++){if(A[i]===z){return y;
}}}y=y.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(b,c){return !!this.getByMixin(b,c);
},hasOwnInterface:function(M,N){return M.$$implements&&M.$$implements.indexOf(N)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bb){var bc=[];

while(bb){if(bb.$$implements){bc.push.apply(bc,bb.$$flatImplements);
}bb=bb.superclass;
}return bc;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bn,bo){var bp=bn.constructor;

if(this.hasInterface(bp,bo)){return true;
}
try{qx.Interface.assertObject(bn,bo);
return true;
}catch(P){}
try{qx.Interface.assert(bp,bo,false);
return true;
}catch(O){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return s+this.classname+r;
},$$registry:qx.Bootstrap.$$registry,__mg:null,__mh:null,__mi:function(){},__mj:function(){},__mk:function(name,bF,bG,bH,bI,bJ){var bO;

if(!bG&&qx.core.Variant.isSet(x,j)){bO=bH||{};
qx.Bootstrap.setDisplayNames(bO,name);
}else{bO={};

if(bG){if(!bI){bI=this.__ms();
}bO=this.__mu(bI,name,bF);
qx.Bootstrap.setDisplayName(bI,name,t);
}if(bH){qx.Bootstrap.setDisplayNames(bH,name);
var bP;

for(var i=0,a=qx.Bootstrap.getKeys(bH),l=a.length;i<l;i++){bP=a[i];
var bL=bH[bP];

if(qx.core.Variant.isSet(x,w)){if(bL instanceof Function){bL=qx.core.Aspect.wrap(name+v+bP,bL,u);
}bO[bP]=bL;
}else{bO[bP]=bL;
}}}}var bN=qx.Bootstrap.createNamespace(name,bO,false);
bO.name=bO.classname=name;
bO.basename=bN;
bO.$$type=e;

if(bF){bO.$$classtype=bF;
}if(!bO.hasOwnProperty(q)){bO.toString=this.genericToString;
}
if(bG){var bQ=bG.prototype;
var bK=this.__mt();
bK.prototype=bQ;
var bM=new bK;
bO.prototype=bM;
bM.name=bM.classname=name;
bM.basename=bN;
bI.base=bO.superclass=bG;
bI.self=bO.constructor=bM.constructor=bO;
if(bJ){if(qx.core.Variant.isSet(x,w)){bJ=qx.core.Aspect.wrap(name,bJ,n);
}bO.$$destructor=bJ;
qx.Bootstrap.setDisplayName(bJ,name,f);
}}this.$$registry[name]=bO;
return bO;
},__ml:function(bd,be,bf){var bg,bg;
{};

if(bd.$$events){for(var bg in be){bd.$$events[bg]=be[bg];
}}else{bd.$$events=be;
}},__mm:function(bR,bS,bT){var bV;

if(bT===undefined){bT=false;
}var bU=!!bR.$$propertiesAttached;

for(var name in bS){bV=bS[name];
{};
bV.name=name;
if(!bV.refine){if(bR.$$properties===undefined){bR.$$properties={};
}bR.$$properties[name]=bV;
}if(bV.init!==undefined){bR.prototype[o+name]=bV.init;
}if(bV.event!==undefined){var event={};
event[bV.event]=d;
this.__ml(bR,event,bT);
}if(bV.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(bU){qx.core.Property.attachMethods(bR,name,bV);
}}},__mn:null,__mo:function(Q,R,S,T,U){var V=Q.prototype;
var X,W;
qx.Bootstrap.setDisplayNames(R,Q.classname+g);

for(var i=0,a=qx.Bootstrap.getKeys(R),l=a.length;i<l;i++){X=a[i];
W=R[X];
{};
if(T!==false&&W instanceof Function&&W.$$type==null){if(U==true){W=this.__mp(W,V[X]);
}else{if(V[X]){W.base=V[X];
}W.self=Q;
}
if(qx.core.Variant.isSet(x,w)){W=qx.core.Aspect.wrap(Q.classname+v+X,W,p);
}}V[X]=W;
}},__mp:function(bj,bk){if(bk){return function(){var cb=bj.base;
bj.base=bk;
var ca=bj.apply(this,arguments);
bj.base=cb;
return ca;
};
}else{return bj;
}},__mq:function(B,C){{};
var D=qx.Interface.flatten([C]);

if(B.$$implements){B.$$implements.push(C);
B.$$flatImplements.push.apply(B.$$flatImplements,D);
}else{B.$$implements=[C];
B.$$flatImplements=D;
}},__mr:function(bv,bw,bx){{};

if(this.hasMixin(bv,bw)){return;
}var bz=qx.Mixin.flatten([bw]);
var by;

for(var i=0,l=bz.length;i<l;i++){by=bz[i];
if(by.$$events){this.__ml(bv,by.$$events,bx);
}if(by.$$properties){this.__mm(bv,by.$$properties,bx);
}if(by.$$members){this.__mo(bv,by.$$members,bx,bx,bx);
}}if(bv.$$includes){bv.$$includes.push(bw);
bv.$$flatIncludes.push.apply(bv.$$flatIncludes,bz);
}else{bv.$$includes=[bw];
bv.$$flatIncludes=bz;
}},__ms:function(){function bu(){arguments.callee.base.apply(this,arguments);
}return bu;
},__mt:function(){return function(){};
},__mu:function(H,name,I){var K=function(){var bC=arguments.callee.constructor;
{};
if(!bC.$$propertiesAttached){qx.core.Property.attach(bC);
}var bB=bC.$$original.apply(this,arguments);
if(bC.$$includes){var bA=bC.$$flatIncludes;

for(var i=0,l=bA.length;i<l;i++){if(bA[i].$$constructor){bA[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return bB;
};

if(qx.core.Variant.isSet(x,w)){var J=qx.core.Aspect.wrap(name,K,t);
K.$$original=H;
K.constructor=J;
K=J;
}if(I===m){K.getInstance=this.getInstance;
}K.$$original=H;
H.wrapper=K;
return K;
}},defer:function(){if(qx.core.Variant.isSet(x,w)){for(var bW in qx.Bootstrap.$$registry){var bX=qx.Bootstrap.$$registry[bW];

for(var bY in bX){if(bX[bY] instanceof Function){bX[bY]=qx.core.Aspect.wrap(bW+v+bY,bX[bY],u);
}}}}}});
})();
(function(){var j="$$hash",h="qx.core.ObjectRegistry";
qx.Class.define(h,{statics:{inShutDown:false,__nl:{},__nm:0,__nn:[],register:function(w){var z=this.__nl;

if(!z){return;
}var y=w.$$hash;

if(y==null){var x=this.__nn;

if(x.length>0){y=x.pop();
}else{y=(this.__nm++).toString(36);
}w.$$hash=y;
}{};
z[y]=w;
},unregister:function(k){var m=k.$$hash;

if(m==null){return;
}var n=this.__nl;

if(n&&n[m]){delete n[m];
this.__nn.push(m);
}try{delete k.$$hash;
}catch(s){if(k.removeAttribute){k.removeAttribute(j);
}}},toHashCode:function(o){{};
var q=o.$$hash;

if(q!=null){return q;
}var p=this.__nn;

if(p.length>0){q=p.pop();
}else{q=(this.__nm++).toString(36);
}return o.$$hash=q;
},clearHashCode:function(u){{};
var v=u.$$hash;

if(v!=null){this.__nn.push(v);
try{delete u.$$hash;
}catch(t){if(u.removeAttribute){u.removeAttribute(j);
}}}},fromHashCode:function(c){return this.__nl[c]||null;
},shutdown:function(){this.inShutDown=true;
var e=this.__nl;
var g=[];

for(var f in e){g.push(f);
}g.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var d,i=0,l=g.length;

while(true){try{for(;i<l;i++){f=g[i];
d=e[f];

if(d&&d.dispose){d.dispose();
}}}catch(r){qx.Bootstrap.error(this,"Could not dispose object "+d.toString()+": "+r);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__nl;
},getRegistry:function(){return this.__nl;
}}});
})();
(function(){var e="qx.data.MBinding";
qx.Mixin.define(e,{members:{bind:function(a,b,c,d){return qx.data.SingleValueBinding.bind(this,a,b,c,d);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var s="qx.client",r="on",q="function",p="mousedown",o="qx.bom.Event",n="return;",m="mouseover",l="HTMLEvents";
qx.Class.define(o,{statics:{addNativeListener:qx.core.Variant.select(s,{"mshtml":function(f,g,h){f.attachEvent(r+g,h);
},"default":function(i,j,k){i.addEventListener(j,k,false);
}}),removeNativeListener:qx.core.Variant.select(s,{"mshtml":function(C,D,E){try{C.detachEvent(r+D,E);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(t,u,v){t.removeEventListener(u,v,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(s,{"mshtml":function(e){if(e.type===m){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(s,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==p&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(w){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(F){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(x,y){if(document.createEventObject){var z=document.createEventObject();
return x.fireEvent(r+y,z);
}else{var z=document.createEvent(l);
z.initEvent(y,true,true);
return !x.dispatchEvent(z);
}},supportsEvent:qx.core.Variant.select(s,{"webkit":function(A,B){return A.hasOwnProperty(r+B);
},"default":function(a,b){var c=r+b;
var d=(c in a);

if(!d){d=typeof a[c]==q;

if(!d&&a.setAttribute){a.setAttribute(c,n);
d=typeof a[c]==q;
a.removeAttribute(c);
}}return d;
}})}});
})();
(function(){var ba="|bubble",Y="|capture",X="|",W="_",V="unload",U="UNKNOWN_",T="__qe",S="DOM_",R="__qd",Q="c",N="WIN_",P="capture",O="qx.event.Manager",M="QX_";
qx.Class.define(O,{extend:Object,construct:function(p,q){this.__pY=p;
this.__qa=qx.core.ObjectRegistry.toHashCode(p);
this.__qb=q;
if(p.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(p,V,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(p,V,arguments.callee);
self.dispose();
}));
}this.__qc={};
this.__qd={};
this.__qe={};
this.__qf={};
},statics:{__qg:0,getNextUniqueId:function(){return (this.__qg++).toString(36);
}},members:{__qb:null,__qc:null,__qe:null,__qh:null,__qd:null,__qf:null,__pY:null,__qa:null,getWindow:function(){return this.__pY;
},getWindowId:function(){return this.__qa;
},getHandler:function(y){var z=this.__qd[y.classname];

if(z){return z;
}return this.__qd[y.classname]=new y(this);
},getDispatcher:function(K){var L=this.__qe[K.classname];

if(L){return L;
}return this.__qe[K.classname]=new K(this,this.__qb);
},getListeners:function(bH,bI,bJ){var bK=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);
var bM=this.__qc[bK];

if(!bM){return null;
}var bN=bI+(bJ?Y:ba);
var bL=bM[bN];
return bL?bL.concat():null;
},serializeListeners:function(A){var H=A.$$hash||qx.core.ObjectRegistry.toHashCode(A);
var J=this.__qc[H];
var F=[];

if(J){var D,I,B,E,G;

for(var C in J){D=C.indexOf(X);
I=C.substring(0,D);
B=C.charAt(D+1)==Q;
E=J[C];

for(var i=0,l=E.length;i<l;i++){G=E[i];
F.push({self:G.context,handler:G.handler,type:I,capture:B});
}}}return F;
},toggleAttachedEvents:function(e,f){var m=e.$$hash||qx.core.ObjectRegistry.toHashCode(e);
var o=this.__qc[m];

if(o){var h,n,g,j;

for(var k in o){h=k.indexOf(X);
n=k.substring(0,h);
g=k.charCodeAt(h+1)===99;
j=o[k];

if(f){this.__qi(e,n,g);
}else{this.__qj(e,n,g);
}}}},hasListener:function(ct,cu,cv){{};
var cw=ct.$$hash||qx.core.ObjectRegistry.toHashCode(ct);
var cy=this.__qc[cw];

if(!cy){return false;
}var cz=cu+(cv?Y:ba);
var cx=cy[cz];
return cx&&cx.length>0;
},importListeners:function(bn,bo){{};
var bu=bn.$$hash||qx.core.ObjectRegistry.toHashCode(bn);
var bv=this.__qc[bu]={};
var br=qx.event.Manager;

for(var bp in bo){var bs=bo[bp];
var bt=bs.type+(bs.capture?Y:ba);
var bq=bv[bt];

if(!bq){bq=bv[bt]=[];
this.__qi(bn,bs.type,bs.capture);
}bq.push({handler:bs.listener,context:bs.self,unique:bs.unique||(br.__qg++).toString(36)});
}},addListener:function(bw,bx,by,self,bz){var bD;
{};
var bE=bw.$$hash||qx.core.ObjectRegistry.toHashCode(bw);
var bG=this.__qc[bE];

if(!bG){bG=this.__qc[bE]={};
}var bC=bx+(bz?Y:ba);
var bB=bG[bC];

if(!bB){bB=bG[bC]=[];
}if(bB.length===0){this.__qi(bw,bx,bz);
}var bF=(qx.event.Manager.__qg++).toString(36);
var bA={handler:by,context:self,unique:bF};
bB.push(bA);
return bC+X+bF;
},findHandler:function(bV,bW){var ch=false,ca=false,ci=false;
var cg;

if(bV.nodeType===1){ch=true;
cg=S+bV.tagName.toLowerCase()+W+bW;
}else if(bV==this.__pY){ca=true;
cg=N+bW;
}else if(bV.classname){ci=true;
cg=M+bV.classname+W+bW;
}else{cg=U+bV+W+bW;
}var cc=this.__qf;

if(cc[cg]){return cc[cg];
}var cf=this.__qb.getHandlers();
var cb=qx.event.IEventHandler;
var cd,ce,bY,bX;

for(var i=0,l=cf.length;i<l;i++){cd=cf[i];
bY=cd.SUPPORTED_TYPES;

if(bY&&!bY[bW]){continue;
}bX=cd.TARGET_CHECK;

if(bX){if(!ch&&bX===cb.TARGET_DOMNODE){continue;
}else if(!ca&&bX===cb.TARGET_WINDOW){continue;
}else if(!ci&&bX===cb.TARGET_OBJECT){continue;
}}ce=this.getHandler(cf[i]);

if(cd.IGNORE_CAN_HANDLE||ce.canHandleEvent(bV,bW)){cc[cg]=ce;
return ce;
}}return null;
},__qi:function(cA,cB,cC){var cD=this.findHandler(cA,cB);

if(cD){cD.registerEvent(cA,cB,cC);
return;
}{};
},removeListener:function(cj,ck,cl,self,cm){var cq;
{};
var cr=cj.$$hash||qx.core.ObjectRegistry.toHashCode(cj);
var cs=this.__qc[cr];

if(!cs){return false;
}var cn=ck+(cm?Y:ba);
var co=cs[cn];

if(!co){return false;
}var cp;

for(var i=0,l=co.length;i<l;i++){cp=co[i];

if(cp.handler===cl&&cp.context===self){qx.lang.Array.removeAt(co,i);

if(co.length==0){this.__qj(cj,ck,cm);
}return true;
}}return false;
},removeListenerById:function(bb,bc){var bi;
{};
var bg=bc.split(X);
var bl=bg[0];
var bd=bg[1].charCodeAt(0)==99;
var bk=bg[2];
var bj=bb.$$hash||qx.core.ObjectRegistry.toHashCode(bb);
var bm=this.__qc[bj];

if(!bm){return false;
}var bh=bl+(bd?Y:ba);
var bf=bm[bh];

if(!bf){return false;
}var be;

for(var i=0,l=bf.length;i<l;i++){be=bf[i];

if(be.unique===bk){qx.lang.Array.removeAt(bf,i);

if(bf.length==0){this.__qj(bb,bl,bd);
}return true;
}}return false;
},removeAllListeners:function(bO){var bS=bO.$$hash||qx.core.ObjectRegistry.toHashCode(bO);
var bU=this.__qc[bS];

if(!bU){return false;
}var bQ,bT,bP;

for(var bR in bU){if(bU[bR].length>0){bQ=bR.split(X);
bT=bQ[0];
bP=bQ[1]===P;
this.__qj(bO,bT,bP);
}}delete this.__qc[bS];
return true;
},__qj:function(a,b,c){var d=this.findHandler(a,b);

if(d){d.unregisterEvent(a,b,c);
return;
}{};
},dispatchEvent:function(r,event){var w;
{};
var x=event.getType();

if(!event.getBubbles()&&!this.hasListener(r,x)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(r);
}var v=this.__qb.getDispatchers();
var u;
var t=false;

for(var i=0,l=v.length;i<l;i++){u=this.getDispatcher(v[i]);
if(u.canDispatchEvent(r,event,x)){u.dispatchEvent(r,event,x);
t=true;
break;
}}
if(!t){qx.log.Logger.error(this,"No dispatcher can handle event of type "+x+" on "+r);
return true;
}var s=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !s;
},dispose:function(){this.__qb.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,R);
qx.util.DisposeUtil.disposeMap(this,T);
this.__qc=this.__pY=this.__qh=null;
this.__qb=this.__qf=null;
}}});
})();
(function(){var n="qx.dom.Node",m="qx.client",l="";
qx.Class.define(n,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(d){return d.nodeType===
this.DOCUMENT?d:
d.ownerDocument||d.document;
},getWindow:qx.core.Variant.select(m,{"mshtml":function(p){if(p.nodeType==null){return p;
}if(p.nodeType!==this.DOCUMENT){p=p.ownerDocument;
}return p.parentWindow;
},"default":function(o){if(o.nodeType==null){return o;
}if(o.nodeType!==this.DOCUMENT){o=o.ownerDocument;
}return o.defaultView;
}}),getDocumentElement:function(r){return this.getDocument(r).documentElement;
},getBodyElement:function(q){return this.getDocument(q).body;
},isNode:function(e){return !!(e&&e.nodeType!=null);
},isElement:function(t){return !!(t&&t.nodeType===this.ELEMENT);
},isDocument:function(k){return !!(k&&k.nodeType===this.DOCUMENT);
},isText:function(s){return !!(s&&s.nodeType===this.TEXT);
},isWindow:function(f){return !!(f&&f.history&&f.location&&f.document);
},isNodeName:function(g,h){if(!h||!g||!g.nodeName){return false;
}return h.toLowerCase()==qx.dom.Node.getName(g);
},getName:function(j){if(!j||!j.nodeName){return null;
}return j.nodeName.toLowerCase();
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
(function(){var B="mshtml",A="qx.client",z="[object Array]",y="qx.lang.Array",x="qx",w="number",v="string";
qx.Class.define(y,{statics:{toArray:function(L,M){return this.cast(L,Array,M);
},cast:function(f,g,h){if(f.constructor===g){return f;
}
if(qx.Class.hasInterface(f,qx.data.IListData)){var f=f.toArray();
}var j=new g;
if(qx.core.Variant.isSet(A,B)){if(f.item){for(var i=h||0,l=f.length;i<l;i++){j.push(f[i]);
}return j;
}}if(Object.prototype.toString.call(f)===z&&h==null){j.push.apply(j,f);
}else{j.push.apply(j,Array.prototype.slice.call(f,h||0));
}return j;
},fromArguments:function(E,F){return Array.prototype.slice.call(E,F||0);
},fromCollection:function(C){if(qx.core.Variant.isSet(A,B)){if(C.item){var D=[];

for(var i=0,l=C.length;i<l;i++){D[i]=C[i];
}return D;
}}return Array.prototype.slice.call(C,0);
},fromShortHand:function(H){var J=H.length;
var I=qx.lang.Array.clone(H);
switch(J){case 1:I[1]=I[2]=I[3]=I[0];
break;
case 2:I[2]=I[0];
case 3:I[3]=I[1];
}return I;
},clone:function(N){return N.concat();
},insertAt:function(bc,bd,i){bc.splice(i,0,bd);
return bc;
},insertBefore:function(bo,bp,bq){var i=bo.indexOf(bq);

if(i==-1){bo.push(bp);
}else{bo.splice(i,0,bp);
}return bo;
},insertAfter:function(s,t,u){var i=s.indexOf(u);

if(i==-1||i==(s.length-1)){s.push(t);
}else{s.splice(i+1,0,t);
}return s;
},removeAt:function(c,i){return c.splice(i,1)[0];
},removeAll:function(G){G.length=0;
return this;
},append:function(bk,bl){{};
Array.prototype.push.apply(bk,bl);
return bk;
},exclude:function(o,p){{};

for(var i=0,r=p.length,q;i<r;i++){q=o.indexOf(p[i]);

if(q!=-1){o.splice(q,1);
}}return o;
},remove:function(a,b){var i=a.indexOf(b);

if(i!=-1){a.splice(i,1);
return b;
}},contains:function(bi,bj){return bi.indexOf(bj)!==-1;
},equals:function(d,e){var length=d.length;

if(length!==e.length){return false;
}
for(var i=0;i<length;i++){if(d[i]!==e[i]){return false;
}}return true;
},sum:function(bm){var bn=0;

for(var i=0,l=bm.length;i<l;i++){bn+=bm[i];
}return bn;
},max:function(bf){{};
var i,bh=bf.length,bg=bf[0];

for(i=1;i<bh;i++){if(bf[i]>bg){bg=bf[i];
}}return bg===undefined?null:bg;
},min:function(k){{};
var i,n=k.length,m=k[0];

for(i=1;i<n;i++){if(k[i]<m){m=k[i];
}}return m===undefined?null:m;
},unique:function(O){var Y=[],Q={},T={},V={};
var U,P=0;
var ba=x+qx.lang.Date.now();
var R=false,X=false,bb=false;
for(var i=0,W=O.length;i<W;i++){U=O[i];
if(U===null){if(!R){R=true;
Y.push(U);
}}else if(U===undefined){}else if(U===false){if(!X){X=true;
Y.push(U);
}}else if(U===true){if(!bb){bb=true;
Y.push(U);
}}else if(typeof U===v){if(!Q[U]){Q[U]=1;
Y.push(U);
}}else if(typeof U===w){if(!T[U]){T[U]=1;
Y.push(U);
}}else{S=U[ba];

if(S==null){S=U[ba]=P++;
}
if(!V[S]){V[S]=U;
Y.push(U);
}}}for(var S in V){try{delete V[S][ba];
}catch(K){try{V[S][ba]=null;
}catch(be){throw new Error("Cannot clean-up map entry doneObjects["+S+"]["+ba+"]");
}}}return Y;
}}});
})();
(function(){var H="()",G=".",F=".prototype.",E='anonymous()',D="qx.lang.Function",C=".constructor()";
qx.Class.define(D,{statics:{getCaller:function(e){return e.caller?e.caller.callee:e.callee.caller;
},getName:function(a){if(a.displayName){return a.displayName;
}
if(a.$$original||a.wrapper||a.classname){return a.classname+C;
}
if(a.$$mixin){for(var c in a.$$mixin.$$members){if(a.$$mixin.$$members[c]==a){return a.$$mixin.name+F+c+H;
}}for(var c in a.$$mixin){if(a.$$mixin[c]==a){return a.$$mixin.name+G+c+H;
}}}
if(a.self){var d=a.self.constructor;

if(d){for(var c in d.prototype){if(d.prototype[c]==a){return d.classname+F+c+H;
}}for(var c in d){if(d[c]==a){return d.classname+G+c+H;
}}}}var b=a.toString().match(/function\s*(\w*)\s*\(.*/);

if(b&&b.length>=1&&b[1]){return b[1]+H;
}return E;
},globalEval:function(B){if(window.execScript){return window.execScript(B);
}else{return eval.call(window,B);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(k,l){{};
if(!l){return k;
}if(!(l.self||l.args||l.delay!=null||l.periodical!=null||l.attempt)){return k;
}return function(event){{};
var g=qx.lang.Array.fromArguments(arguments);
if(l.args){g=l.args.concat(g);
}
if(l.delay||l.periodical){var f=qx.event.GlobalError.observeMethod(function(){return k.apply(l.self||this,g);
});

if(l.delay){return window.setTimeout(f,l.delay);
}
if(l.periodical){return window.setInterval(f,l.periodical);
}}else if(l.attempt){var h=false;

try{h=k.apply(l.self||this,g);
}catch(A){}return h;
}else{return k.apply(l.self||this,g);
}};
},bind:function(i,self,j){return this.create(i,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(y,z){return this.create(y,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(p,self,q){if(arguments.length<3){return function(event){return p.call(self||this,event||window.event);
};
}else{var r=qx.lang.Array.fromArguments(arguments,2);
return function(event){var v=[event||window.event];
v.push.apply(v,r);
p.apply(self||this,v);
};
}},attempt:function(w,self,x){return this.create(w,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(m,n,self,o){return this.create(m,{delay:n,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(s,t,self,u){return this.create(s,{periodical:t,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var q="qx.event.Registration";
qx.Class.define(q,{statics:{__pN:{},getManager:function(r){if(r==null){{};
r=window;
}else if(r.nodeType){r=qx.dom.Node.getWindow(r);
}else if(!qx.dom.Node.isWindow(r)){r=window;
}var t=r.$$hash||qx.core.ObjectRegistry.toHashCode(r);
var s=this.__pN[t];

if(!s){s=new qx.event.Manager(r,this);
this.__pN[t]=s;
}return s;
},removeManager:function(c){var d=c.getWindowId();
delete this.__pN[d];
},addListener:function(N,O,P,self,Q){return this.getManager(N).addListener(N,O,P,self,Q);
},removeListener:function(w,x,y,self,z){return this.getManager(w).removeListener(w,x,y,self,z);
},removeListenerById:function(A,B){return this.getManager(A).removeListenerById(A,B);
},removeAllListeners:function(e){return this.getManager(e).removeAllListeners(e);
},hasListener:function(f,g,h){return this.getManager(f).hasListener(f,g,h);
},serializeListeners:function(u){return this.getManager(u).serializeListeners(u);
},createEvent:function(C,D,E){{};
if(D==null){D=qx.event.type.Event;
}var F=qx.event.Pool.getInstance().getObject(D);

if(!F){return;
}E?F.init.apply(F,E):F.init();
if(C){F.setType(C);
}return F;
},dispatchEvent:function(v,event){return this.getManager(v).dispatchEvent(v,event);
},fireEvent:function(k,l,m,n){var o;
{};
var p=this.createEvent(l,m||null,n);
return this.getManager(k).dispatchEvent(k,p);
},fireNonBubblingEvent:function(H,I,J,K){{};
var L=this.getManager(H);

if(!L.hasListener(H,I,false)){return true;
}var M=this.createEvent(I,J||null,K);
return L.dispatchEvent(H,M);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__pO:[],addHandler:function(G){{};
this.__pO.push(G);
this.__pO.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__pO;
},__pP:[],addDispatcher:function(i,j){{};
this.__pP.push(i);
this.__pP.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__pP;
}}});
})();
(function(){var b="qx.log.appender.RingBuffer";
qx.Class.define(b,{extend:Object,construct:function(i){this.__oo=[];
this.setMaxMessages(i||50);
},members:{__op:0,__oo:null,__oq:50,setMaxMessages:function(a){this.__oq=a;
this.clearHistory();
},getMaxMessages:function(){return this.__oq;
},process:function(c){var d=this.getMaxMessages();

if(this.__oo.length<d){this.__oo.push(c);
}else{this.__oo[this.__op++]=c;

if(this.__op>=d){this.__op=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(e){if(e>this.__oo.length){e=this.__oo.length;
}
if(this.__oo.length==this.getMaxMessages()){var g=this.__op-1;
}else{g=this.__oo.length-1;
}var f=g-e+1;

if(f<0){f+=this.__oo.length;
}var h;

if(f<=g){h=this.__oo.slice(f,g+1);
}else{h=this.__oo.slice(f,this.__oo.length).concat(this.__oo.slice(0,g+1));
}return h;
},clearHistory:function(){this.__oo=[];
this.__op=0;
}}});
})();
(function(){var bf="node",be="error",bd="...(+",bc="array",bb=")",ba="info",Y="instance",X="string",W="null",V="class",bA="number",bz="stringify",by="]",bx="unknown",bw="function",bv="boolean",bu="debug",bt="map",bs="undefined",br="qx.log.Logger",bm=")}",bn="#",bk="warn",bl="document",bi="{...(",bj="[",bg="text[",bh="[...(",bo="\n",bp=")]",bq="object";
qx.Class.define(br,{statics:{__pQ:bu,setLevel:function(bK){this.__pQ=bK;
},getLevel:function(){return this.__pQ;
},setTreshold:function(bJ){this.__pT.setMaxMessages(bJ);
},getTreshold:function(){return this.__pT.getMaxMessages();
},__pR:{},__pS:0,register:function(t){if(t.$$id){return;
}var u=this.__pS++;
this.__pR[u]=t;
t.$$id=u;
var v=this.__pT.getAllLogEvents();

for(var i=0,l=v.length;i<l;i++){t.process(v[i]);
}},unregister:function(bB){var bC=bB.$$id;

if(bC==null){return;
}delete this.__pR[bC];
delete bB.$$id;
},debug:function(bD,bE){qx.log.Logger.__pV(bu,arguments);
},info:function(p,q){qx.log.Logger.__pV(ba,arguments);
},warn:function(r,s){qx.log.Logger.__pV(bk,arguments);
},error:function(bF,bG){qx.log.Logger.__pV(be,arguments);
},trace:function(w){qx.log.Logger.__pV(ba,[w,qx.dev.StackTrace.getStackTrace().join(bo)]);
},deprecatedMethodWarning:function(G,H){var I;
{};
},deprecatedClassWarning:function(D,E){var F;
{};
},deprecatedEventWarning:function(a,event,b){var c;
{};
},deprecatedMixinWarning:function(J,K){var L;
{};
},deprecatedConstantWarning:function(z,A,B){var self,C;
{};
},clear:function(){this.__pT.clearHistory();
},__pT:new qx.log.appender.RingBuffer(50),__pU:{debug:0,info:1,warn:2,error:3},__pV:function(d,e){var k=this.__pU;

if(k[d]<k[this.__pQ]){return;
}var g=e.length<2?null:e[0];
var j=g?1:0;
var f=[];

for(var i=j,l=e.length;i<l;i++){f.push(this.__pX(e[i],true));
}var m=new Date;
var n={time:m,offset:m-qx.Bootstrap.LOADSTART,level:d,items:f,win:window};
if(g){if(g instanceof qx.core.Object){n.object=g.$$hash;
}else if(g.$$type){n.clazz=g;
}}this.__pT.process(n);
var o=this.__pR;

for(var h in o){o[h].process(n);
}},__pW:function(x){if(x===undefined){return bs;
}else if(x===null){return W;
}
if(x.$$type){return V;
}var y=typeof x;

if(y===bw||y==X||y===bA||y===bv){return y;
}else if(y===bq){if(x.nodeType){return bf;
}else if(x.classname){return Y;
}else if(x instanceof Array){return bc;
}else if(x instanceof Error){return be;
}else{return bt;
}}
if(x.toString){return bz;
}return bx;
},__pX:function(M,N){var U=this.__pW(M);
var Q=bx;
var P=[];

switch(U){case W:case bs:Q=U;
break;
case X:case bA:case bv:Q=M;
break;
case bf:if(M.nodeType===9){Q=bl;
}else if(M.nodeType===3){Q=bg+M.nodeValue+by;
}else if(M.nodeType===1){Q=M.nodeName.toLowerCase();

if(M.id){Q+=bn+M.id;
}}else{Q=bf;
}break;
case bw:Q=qx.lang.Function.getName(M)||U;
break;
case Y:Q=M.basename+bj+M.$$hash+by;
break;
case V:case bz:Q=M.toString();
break;
case be:P=qx.dev.StackTrace.getStackTraceFromError(M);
Q=M.toString();
break;
case bc:if(N){Q=[];

for(var i=0,l=M.length;i<l;i++){if(Q.length>20){Q.push(bd+(l-i)+bb);
break;
}Q.push(this.__pX(M[i],false));
}}else{Q=bh+M.length+bp;
}break;
case bt:if(N){var O;
var T=[];

for(var S in M){T.push(S);
}T.sort();
Q=[];

for(var i=0,l=T.length;i<l;i++){if(Q.length>20){Q.push(bd+(l-i)+bb);
break;
}S=T[i];
O=this.__pX(M[S],false);
O.key=S;
Q.push(O);
}}else{var R=0;

for(var S in M){R++;
}Q=bi+R+bm;
}break;
}return {type:U,text:Q,trace:P};
}},defer:function(bH){var bI=qx.Bootstrap.$$logs;

for(var i=0;i<bI.length;i++){this.__pV(bI[i][0],bI[i][1]);
}qx.Bootstrap.debug=bH.debug;
qx.Bootstrap.info=bH.info;
qx.Bootstrap.warn=bH.warn;
qx.Bootstrap.error=bH.error;
qx.Bootstrap.trace=bH.trace;
}});
})();
(function(){var bs="set",br="get",bq="reset",bp="qx.core.Object",bo="]",bn="[",bm="$$user_",bl="Object";
qx.Class.define(bp,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bl},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bn+this.$$hash+bo;
},base:function(bt,bu){{};

if(arguments.length===1){return bt.callee.base.call(this);
}else{return bt.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(u){return u.callee.self;
},clone:function(){var bd=this.constructor;
var bc=new bd;
var bf=qx.Class.getProperties(bd);
var be=qx.core.Property.$$store.user;
var bg=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bf.length;i<l;i++){name=bf[i];

if(this.hasOwnProperty(be[name])){bc[bg[name]](this[be[name]]);
}}return bc;
},set:function(bh,bi){var bk=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(bh)){if(!this[bk[bh]]){if(this[bs+qx.Bootstrap.firstUp(bh)]!=undefined){this[bs+qx.Bootstrap.firstUp(bh)](bi);
return;
}{};
}return this[bk[bh]](bi);
}else{for(var bj in bh){if(!this[bk[bj]]){if(this[bs+qx.Bootstrap.firstUp(bj)]!=undefined){this[bs+qx.Bootstrap.firstUp(bj)](bh[bj]);
continue;
}{};
}this[bk[bj]](bh[bj]);
}return this;
}},get:function(ba){var bb=qx.core.Property.$$method.get;

if(!this[bb[ba]]){if(this[br+qx.Bootstrap.firstUp(ba)]!=undefined){return this[br+qx.Bootstrap.firstUp(ba)]();
}{};
}return this[bb[ba]]();
},reset:function(N){var O=qx.core.Property.$$method.reset;

if(!this[O[N]]){if(this[bq+qx.Bootstrap.firstUp(N)]!=undefined){this[bq+qx.Bootstrap.firstUp(N)]();
return;
}{};
}this[O[N]]();
},__kh:qx.event.Registration,addListener:function(v,w,self,x){if(!this.$$disposed){return this.__kh.addListener(this,v,w,self,x);
}return null;
},addListenerOnce:function(k,m,self,n){var o=function(e){m.call(self||this,e);
this.removeListener(k,o,this,n);
};
return this.addListener(k,o,this,n);
},removeListener:function(P,Q,self,R){if(!this.$$disposed){return this.__kh.removeListener(this,P,Q,self,R);
}return false;
},removeListenerById:function(V){if(!this.$$disposed){return this.__kh.removeListenerById(this,V);
}return false;
},hasListener:function(h,j){return this.__kh.hasListener(this,h,j);
},dispatchEvent:function(Y){if(!this.$$disposed){return this.__kh.dispatchEvent(this,Y);
}return true;
},fireEvent:function(K,L,M){if(!this.$$disposed){return this.__kh.fireEvent(this,K,L,M);
}return true;
},fireNonBubblingEvent:function(d,f,g){if(!this.$$disposed){return this.__kh.fireNonBubblingEvent(this,d,f,g);
}return true;
},fireDataEvent:function(y,z,A,B){if(!this.$$disposed){if(A===undefined){A=null;
}return this.__kh.fireNonBubblingEvent(this,y,qx.event.type.Data,[z,A,!!B]);
}return true;
},__ki:null,setUserData:function(a,b){if(!this.__ki){this.__ki={};
}this.__ki[a]=b;
},getUserData:function(T){if(!this.__ki){return null;
}var U=this.__ki[T];
return U===undefined?null:U;
},__kj:qx.log.Logger,debug:function(c){this.__kj.debug(this,c);
},info:function(s){this.__kj.info(this,s);
},warn:function(W){this.__kj.warn(this,W);
},error:function(p){this.__kj.error(this,p);
},trace:function(){this.__kj.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var by,bw;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var bx=this.constructor;
var bv;

while(bx.superclass){if(bx.$$destructor){bx.$$destructor.call(this);
}if(bx.$$includes){bv=bx.$$flatIncludes;

for(var i=0,l=bv.length;i<l;i++){if(bv[i].$$destructor){bv[i].$$destructor.call(this);
}}}bx=bx.superclass;
}var bz=qx.Class.getProperties(this.constructor);

for(var i=0,l=bz.length;i<l;i++){delete this[bm+bz[i]];
}{};
},_disposeFields:function(S){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(t){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(r){qx.util.DisposeUtil.disposeArray(this,r);
},_disposeMap:function(q){qx.util.DisposeUtil.disposeMap(this,q);
}},settings:{"qx.disposerDebugLevel":0},defer:function(X){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__ki=null;
var E=this.constructor;
var I;
var J=qx.core.Property.$$store;
var G=J.user;
var H=J.theme;
var C=J.inherit;
var F=J.useinit;
var D=J.init;

while(E){I=E.$$properties;

if(I){for(var name in I){if(I[name].dispose){this[G[name]]=this[H[name]]=this[C[name]]=this[F[name]]=this[D[name]]=undefined;
}}}E=E.superclass;
}}});
})();
(function(){var c="abstract",b="qx.ui.layout.Abstract";
qx.Class.define(b,{type:c,extend:qx.core.Object,members:{__jy:null,_invalidChildrenCache:null,__jz:null,invalidateLayoutCache:function(){this.__jy=null;
},renderLayout:function(h,i){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__jy){return this.__jy;
}return this.__jy=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(a){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var d=this.__jz;

if(d instanceof qx.ui.core.LayoutItem){d.clearSeparators();
}},_renderSeparator:function(e,f){this.__jz.renderSeparator(e,f);
},connectToWidget:function(g){if(g&&this.__jz){throw new Error("It is not possible to manually set the connected widget.");
}this.__jz=g;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__jz;
},_applyLayoutChange:function(){if(this.__jz){this.__jz.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__jz.getLayoutChildren();
}},destruct:function(){this.__jz=this.__jy=null;
}});
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
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__je=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__je:null,message:null,getComment:function(){return this.__je;
},toString:function(){return this.__je+c+this.message;
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
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
(function(){var h="qx.globalErrorHandling",g="on",f="qx.event.GlobalError";
qx.Class.define(f,{statics:{setErrorHandler:function(b,c){this.__od=b||null;
this.__oe=c||window;

if(qx.core.Setting.get(h)===g){if(b&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__of,this);
}
if(!b&&window.onerror){window.onerror=null;
}}},__of:function(i,j,k){if(this.__od){this.handleError(new qx.core.WindowError(i,j,k));
return true;
}},observeMethod:function(d){if(qx.core.Setting.get(h)===g){var self=this;
return function(){if(!self.__od){return d.apply(this,arguments);
}
try{return d.apply(this,arguments);
}catch(e){self.handleError(new qx.core.GlobalError(e,arguments));
}};
}else{return d;
}},handleError:function(a){if(this.__od){this.__od.call(this.__oe,a);
}}},defer:function(l){qx.core.Setting.define(h,g);
l.setErrorHandler(null,null);
}});
})();
(function(){var d="qx.util.DeferredCallManager",c="singleton";
qx.Class.define(d,{extend:qx.core.Object,type:c,construct:function(){this.__js={};
this.__jt=qx.lang.Function.bind(this.__jx,this);
this.__ju=false;
},members:{__jv:null,__jw:null,__js:null,__ju:null,__jt:null,schedule:function(g){if(this.__jv==null){this.__jv=window.setTimeout(this.__jt,0);
}var h=g.toHashCode();
if(this.__jw&&this.__jw[h]){return;
}this.__js[h]=g;
this.__ju=true;
},cancel:function(a){var b=a.toHashCode();
if(this.__jw&&this.__jw[b]){this.__jw[b]=null;
return;
}delete this.__js[b];
if(qx.lang.Object.isEmpty(this.__js)&&this.__jv!=null){window.clearTimeout(this.__jv);
this.__jv=null;
}},__jx:qx.event.GlobalError.observeMethod(function(){this.__jv=null;
while(this.__ju){this.__jw=qx.lang.Object.clone(this.__js);
this.__js={};
this.__ju=false;

for(var f in this.__jw){var e=this.__jw[f];

if(e){this.__jw[f]=null;
e.call();
}}}this.__jw=null;
})},destruct:function(){if(this.__jv!=null){window.clearTimeout(this.__jv);
}this.__jt=this.__js=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){arguments.callee.base.call(this);
this.__kR=b;
this.__kS=c||null;
this.__kT=qx.util.DeferredCallManager.getInstance();
},members:{__kR:null,__kS:null,__kT:null,cancel:function(){this.__kT.cancel(this);
},schedule:function(){this.__kT.schedule(this);
},call:function(){this.__kS?this.__kR.apply(this.__kS):this.__kR();
}},destruct:function(d,e){this.cancel();
this.__kS=this.__kR=this.__kT=null;
}});
})();
(function(){var by="element",bx="qx.client",bw="div",bv="",bu="mshtml",bt="none",bs="scroll",br="text",bq="qx.html.Element",bp="|capture|",bS="focus",bR="gecko",bQ="blur",bP="deactivate",bO="capture",bN="userSelect",bM="__oX",bL="-moz-none",bK="visible",bJ="releaseCapture",bF="|bubble|",bG="qxSelectable",bD="tabIndex",bE="off",bB="activate",bC="MozUserSelect",bz="normal",bA="webkit",bH="hidden",bI="on";
qx.Class.define(bq,{extend:qx.core.Object,construct:function(X){arguments.callee.base.call(this);
this.__oB=X||bw;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__oC:{},_scheduleFlush:function(bl){qx.html.Element.__pk.schedule();
},flush:function(){var dp;
{};
var dg=this.__oD();
var df=dg.getFocus();

if(df&&this.__oH(df)){dg.blur(df);
}var dw=dg.getActive();

if(dw&&this.__oH(dw)){qx.bom.Element.deactivate(dw);
}var dj=this.__oF();

if(dj&&this.__oH(dj)){qx.bom.Element.releaseCapture(dj);
}var dq=[];
var dr=this._modified;

for(var dn in dr){dp=dr[dn];
if(dp.__pc()){if(dp.__oI&&qx.dom.Hierarchy.isRendered(dp.__oI)){dq.push(dp);
}else{{};
dp.__pb();
}delete dr[dn];
}}
for(var i=0,l=dq.length;i<l;i++){dp=dq[i];
{};
dp.__pb();
}var dl=this._visibility;

for(var dn in dl){dp=dl[dn];
{};
dp.__oI.style.display=dp.__oL?bv:bt;
if(qx.core.Variant.isSet(bx,bu)){if(!(document.documentMode>=8)){dp.__oI.style.visibility=dp.__oL?bK:bH;
}}delete dl[dn];
}var scroll=this._scroll;

for(var dn in scroll){dp=scroll[dn];
var dx=dp.__oI;

if(dx&&dx.offsetWidth){var di=true;
if(dp.__oO!=null){dp.__oI.scrollLeft=dp.__oO;
delete dp.__oO;
}if(dp.__oP!=null){dp.__oI.scrollTop=dp.__oP;
delete dp.__oP;
}var dt=dp.__oM;

if(dt!=null){var dm=dt.element.getDomElement();

if(dm&&dm.offsetWidth){qx.bom.element.Scroll.intoViewX(dm,dx,dt.align);
delete dp.__oM;
}else{di=false;
}}var du=dp.__oN;

if(du!=null){var dm=du.element.getDomElement();

if(dm&&dm.offsetWidth){qx.bom.element.Scroll.intoViewY(dm,dx,du.align);
delete dp.__oN;
}else{di=false;
}}if(di){delete scroll[dn];
}}}var dh={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var dv=this._actions[i];
var ds=dv.element.__oI;

if(!ds||!dh[dv.type]&&!dv.element.__pc()){continue;
}var dk=dv.args;
dk.unshift(ds);
qx.bom.Element[dv.type].apply(qx.bom.Element,dk);
}this._actions=[];
for(var dn in this.__oC){var de=this.__oC[dn];
var dx=de.element.__oI;

if(dx){qx.bom.Selection.set(dx,de.start,de.end);
delete this.__oC[dn];
}}qx.event.handler.Appear.refresh();
},__oD:function(){if(!this.__oE){var cn=qx.event.Registration.getManager(window);
this.__oE=cn.getHandler(qx.event.handler.Focus);
}return this.__oE;
},__oF:function(){if(!this.__oG){var a=qx.event.Registration.getManager(window);
this.__oG=a.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__oG.getCaptureElement();
},__oH:function(bd){var be=qx.core.ObjectRegistry.fromHashCode(bd.$$element);
return be&&!be.__pc();
}},members:{__oB:null,__oI:null,__oJ:false,__oK:true,__oL:true,__oM:null,__oN:null,__oO:null,__oP:null,__oQ:null,__oR:null,__oS:null,__oT:null,__oU:null,__oV:null,__oW:null,__oX:null,__oY:null,__pa:null,_scheduleChildrenUpdate:function(){if(this.__oY){return;
}this.__oY=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(by);
},_createDomElement:function(){return qx.bom.Element.create(this.__oB);
},__pb:function(){{};
var bj=this.__oX;

if(bj){var length=bj.length;
var bk;

for(var i=0;i<length;i++){bk=bj[i];

if(bk.__oL&&bk.__oK&&!bk.__oI){bk.__pb();
}}}
if(!this.__oI){this.__oI=this._createDomElement();
this.__oI.$$element=this.$$hash;
this._copyData(false);

if(bj&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__oY){this._syncChildren();
}}delete this.__oY;
},_insertChildren:function(){var dG=this.__oX;
var length=dG.length;
var dI;

if(length>2){var dH=document.createDocumentFragment();

for(var i=0;i<length;i++){dI=dG[i];

if(dI.__oI&&dI.__oK){dH.appendChild(dI.__oI);
}}this.__oI.appendChild(dH);
}else{var dH=this.__oI;

for(var i=0;i<length;i++){dI=dG[i];

if(dI.__oI&&dI.__oK){dH.appendChild(dI.__oI);
}}}},_syncChildren:function(){var cC;
var cH=qx.core.ObjectRegistry;
var cy=this.__oX;
var cF=cy.length;
var cz;
var cD;
var cB=this.__oI;
var cE=cB.childNodes;
var cA=0;
var cG;
{};
for(var i=cE.length-1;i>=0;i--){cG=cE[i];
cD=cH.fromHashCode(cG.$$element);

if(!cD||!cD.__oK||cD.__pa!==this){cB.removeChild(cG);
{};
}}for(var i=0;i<cF;i++){cz=cy[i];
if(cz.__oK){cD=cz.__oI;
cG=cE[cA];

if(!cD){continue;
}if(cD!=cG){if(cG){cB.insertBefore(cD,cG);
}else{cB.appendChild(cD);
}{};
}cA++;
}}{};
},_copyData:function(E){var I=this.__oI;
var H=this.__oU;

if(H){var F=qx.bom.element.Attribute;

for(var J in H){F.set(I,J,H[J]);
}}var H=this.__oT;

if(H){var G=qx.bom.element.Style;

if(E){G.setStyles(I,H);
}else{G.setCss(I,G.compile(H));
}}var H=this.__oV;

if(H){for(var J in H){this._applyProperty(J,H[J]);
}}var H=this.__oW;

if(H){qx.event.Registration.getManager(I).importListeners(I,H);
delete this.__oW;
}},_syncData:function(){var cY=this.__oI;
var cX=qx.bom.element.Attribute;
var cV=qx.bom.element.Style;
var cW=this.__oR;

if(cW){var dd=this.__oU;

if(dd){var da;

for(var dc in cW){da=dd[dc];

if(da!==undefined){cX.set(cY,dc,da);
}else{cX.reset(cY,dc);
}}}this.__oR=null;
}var cW=this.__oQ;

if(cW){var dd=this.__oT;

if(dd){var cU={};

for(var dc in cW){cU[dc]=dd[dc];
}cV.setStyles(cY,cU);
}this.__oQ=null;
}var cW=this.__oS;

if(cW){var dd=this.__oV;

if(dd){var da;

for(var dc in cW){this._applyProperty(dc,dd[dc]);
}}this.__oS=null;
}},__pc:function(){var dC=this;
while(dC){if(dC.__oJ){return true;
}
if(!dC.__oK||!dC.__oL){return false;
}dC=dC.__pa;
}return false;
},__pd:function(M){if(M.__pa===this){throw new Error("Child is already in: "+M);
}
if(M.__oJ){throw new Error("Root elements could not be inserted into other ones.");
}if(M.__pa){M.__pa.remove(M);
}M.__pa=this;
if(!this.__oX){this.__oX=[];
}if(this.__oI){this._scheduleChildrenUpdate();
}},__pe:function(o){if(o.__pa!==this){throw new Error("Has no child: "+o);
}if(this.__oI){this._scheduleChildrenUpdate();
}delete o.__pa;
},__pf:function(dJ){if(dJ.__pa!==this){throw new Error("Has no child: "+dJ);
}if(this.__oI){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__oX||null;
},getChild:function(dE){var dF=this.__oX;
return dF&&dF[dE]||null;
},hasChildren:function(){var f=this.__oX;
return f&&f[0]!==undefined;
},indexOf:function(bf){var bg=this.__oX;
return bg?bg.indexOf(bf):-1;
},hasChild:function(bh){var bi=this.__oX;
return bi&&bi.indexOf(bh)!==-1;
},add:function(cK){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__pd(arguments[i]);
}this.__oX.push.apply(this.__oX,arguments);
}else{this.__pd(cK);
this.__oX.push(cK);
}return this;
},addAt:function(K,L){this.__pd(K);
qx.lang.Array.insertAt(this.__oX,K,L);
return this;
},remove:function(t){var u=this.__oX;

if(!u){return;
}
if(arguments[1]){var v;

for(var i=0,l=arguments.length;i<l;i++){v=arguments[i];
this.__pe(v);
qx.lang.Array.remove(u,v);
}}else{this.__pe(t);
qx.lang.Array.remove(u,t);
}return this;
},removeAt:function(B){var C=this.__oX;

if(!C){throw new Error("Has no children!");
}var D=C[B];

if(!D){throw new Error("Has no child at this position!");
}this.__pe(D);
qx.lang.Array.removeAt(this.__oX,B);
return this;
},removeAll:function(){var cf=this.__oX;

if(cf){for(var i=0,l=cf.length;i<l;i++){this.__pe(cf[i]);
}cf.length=0;
}return this;
},getParent:function(){return this.__pa||null;
},insertInto:function(parent,dK){parent.__pd(this);

if(dK==null){parent.__oX.push(this);
}else{qx.lang.Array.insertAt(this.__oX,this,dK);
}return this;
},insertBefore:function(cJ){var parent=cJ.__pa;
parent.__pd(this);
qx.lang.Array.insertBefore(parent.__oX,this,cJ);
return this;
},insertAfter:function(bX){var parent=bX.__pa;
parent.__pd(this);
qx.lang.Array.insertAfter(parent.__oX,this,bX);
return this;
},moveTo:function(cb){var parent=this.__pa;
parent.__pf(this);
var cc=parent.__oX.indexOf(this);

if(cc===cb){throw new Error("Could not move to same index!");
}else if(cc<cb){cb--;
}qx.lang.Array.removeAt(parent.__oX,cc);
qx.lang.Array.insertAt(parent.__oX,this,cb);
return this;
},moveBefore:function(dA){var parent=this.__pa;
return this.moveTo(parent.__oX.indexOf(dA));
},moveAfter:function(dD){var parent=this.__pa;
return this.moveTo(parent.__oX.indexOf(dD)+1);
},free:function(){var parent=this.__pa;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__oX){return;
}parent.__pe(this);
qx.lang.Array.remove(parent.__oX,this);
return this;
},getDomElement:function(){return this.__oI||null;
},getNodeName:function(){return this.__oB;
},setNodeName:function(name){this.__oB=name;
},setRoot:function(bY){this.__oJ=bY;
},useMarkup:function(c){if(this.__oI){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(bx,bu)){var d=document.createElement(bw);
}else{var d=qx.html.Element.__pg;

if(!d){d=qx.html.Element.__pg=document.createElement(bw);
}}d.innerHTML=c;
this.__oI=d.firstChild;
this.__oI.$$element=this.$$hash;
this._copyData(true);
return this.__oI;
},useElement:function(cd){if(this.__oI){throw new Error("Could not overwrite existing element!");
}this.__oI=cd;
this.__oI.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ba=this.getAttribute(bD);

if(ba>=1){return true;
}var Y=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ba>=0&&Y[this.__oB]){return true;
}return false;
},setSelectable:function(bT){this.setAttribute(bG,bT?bI:bE);
if(qx.core.Variant.isSet(bx,bA)){this.setStyle(bN,bT?bz:bt);
}else if(qx.core.Variant.isSet(bx,bR)){this.setStyle(bC,bT?br:bL);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__oB];
},include:function(){if(this.__oK){return;
}delete this.__oK;

if(this.__pa){this.__pa._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__oK){return;
}this.__oK=false;

if(this.__pa){this.__pa._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__oK===true;
},show:function(){if(this.__oL){return;
}
if(this.__oI){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(by);
}if(this.__pa){this.__pa._scheduleChildrenUpdate();
}delete this.__oL;
},hide:function(){if(!this.__oL){return;
}
if(this.__oI){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(by);
}this.__oL=false;
},isVisible:function(){return this.__oL===true;
},scrollChildIntoViewX:function(cM,cN,cO){var cP=this.__oI;
var cQ=cM.getDomElement();

if(cO!==false&&cP&&cP.offsetWidth&&cQ&&cQ.offsetWidth){qx.bom.element.Scroll.intoViewX(cQ,cP,cN);
}else{this.__oM={element:cM,align:cN};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(by);
}delete this.__oO;
},scrollChildIntoViewY:function(cg,ch,ci){var cj=this.__oI;
var ck=cg.getDomElement();

if(ci!==false&&cj&&cj.offsetWidth&&ck&&ck.offsetWidth){qx.bom.element.Scroll.intoViewY(ck,cj,ch);
}else{this.__oN={element:cg,align:ch};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(by);
}delete this.__oP;
},scrollToX:function(x,cu){var cv=this.__oI;

if(cu!==true&&cv&&cv.offsetWidth){cv.scrollLeft=x;
}else{this.__oO=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(by);
}delete this.__oM;
},getScrollX:function(){var dy=this.__oI;

if(dy){return dy.scrollLeft;
}return this.__oO||0;
},scrollToY:function(y,z){var A=this.__oI;

if(z!==true&&A&&A.offsetWidth){A.scrollTop=y;
}else{this.__oP=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(by);
}delete this.__oN;
},getScrollY:function(){var dL=this.__oI;

if(dL){return dL.scrollTop;
}return this.__oP||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(bs,this.__pi,this);
},enableScrolling:function(){this.removeListener(bs,this.__pi,this);
},__ph:null,__pi:function(e){if(!this.__ph){this.__ph=true;
this.__oI.scrollTop=0;
this.__oI.scrollLeft=0;
delete this.__ph;
}},getTextSelection:function(){var cI=this.__oI;

if(cI){return qx.bom.Selection.get(cI);
}return null;
},getTextSelectionLength:function(){var g=this.__oI;

if(g){return qx.bom.Selection.getLength(g);
}return null;
},getTextSelectionStart:function(){var w=this.__oI;

if(w){return qx.bom.Selection.getStart(w);
}return null;
},getTextSelectionEnd:function(){var p=this.__oI;

if(p){return qx.bom.Selection.getEnd(p);
}return null;
},setTextSelection:function(bm,bn){var bo=this.__oI;

if(bo){qx.bom.Selection.set(bo,bm,bn);
return;
}qx.html.Element.__oC[this.toHashCode()]={element:this,start:bm,end:bn};
qx.html.Element._scheduleFlush(by);
},clearTextSelection:function(){var cx=this.__oI;

if(cx){qx.bom.Selection.clear(cx);
}delete qx.html.Element.__oC[this.toHashCode()];
},__pj:function(bU,bV){var bW=qx.html.Element._actions;
bW.push({type:bU,element:this,args:bV||[]});
qx.html.Element._scheduleFlush(by);
},focus:function(){this.__pj(bS);
},blur:function(){this.__pj(bQ);
},activate:function(){this.__pj(bB);
},deactivate:function(){this.__pj(bP);
},capture:function(cw){this.__pj(bO,[cw!==false]);
},releaseCapture:function(){this.__pj(bJ);
},setStyle:function(cR,cS,cT){if(!this.__oT){this.__oT={};
}
if(this.__oT[cR]==cS){return;
}
if(cS==null){delete this.__oT[cR];
}else{this.__oT[cR]=cS;
}if(this.__oI){if(cT){qx.bom.element.Style.set(this.__oI,cR,cS);
return this;
}if(!this.__oQ){this.__oQ={};
}this.__oQ[cR]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(by);
}return this;
},setStyles:function(S,T){var U=qx.bom.element.Style;

if(!this.__oT){this.__oT={};
}
if(this.__oI){if(!this.__oQ){this.__oQ={};
}
for(var W in S){var V=S[W];

if(this.__oT[W]==V){continue;
}
if(V==null){delete this.__oT[W];
}else{this.__oT[W]=V;
}if(T){U.set(this.__oI,W,V);
continue;
}this.__oQ[W]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(by);
}else{for(var W in S){var V=S[W];

if(this.__oT[W]==V){continue;
}
if(V==null){delete this.__oT[W];
}else{this.__oT[W]=V;
}}}return this;
},removeStyle:function(bb,bc){this.setStyle(bb,null,bc);
},getStyle:function(ca){return this.__oT?this.__oT[ca]:null;
},getAllStyles:function(){return this.__oT||null;
},setAttribute:function(dW,dX,dY){if(!this.__oU){this.__oU={};
}
if(this.__oU[dW]==dX){return;
}
if(dX==null){delete this.__oU[dW];
}else{this.__oU[dW]=dX;
}if(this.__oI){if(dY){qx.bom.element.Attribute.set(this.__oI,dW,dX);
return this;
}if(!this.__oR){this.__oR={};
}this.__oR[dW]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(by);
}return this;
},setAttributes:function(q,r){for(var s in q){this.setAttribute(s,q[s],r);
}return this;
},removeAttribute:function(h,j){this.setAttribute(h,null,j);
},getAttribute:function(ce){return this.__oU?this.__oU[ce]:null;
},_applyProperty:function(name,b){},_setProperty:function(dT,dU,dV){if(!this.__oV){this.__oV={};
}
if(this.__oV[dT]==dU){return;
}
if(dU==null){delete this.__oV[dT];
}else{this.__oV[dT]=dU;
}if(this.__oI){if(dV){this._applyProperty(dT,dU);
return this;
}if(!this.__oS){this.__oS={};
}this.__oS[dT]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(by);
}return this;
},_removeProperty:function(cl,cm){this._setProperty(cl,null,cm);
},_getProperty:function(k){var m=this.__oV;

if(!m){return null;
}var n=m[k];
return n==null?null:n;
},addListener:function(co,cp,self,cq){var cr;

if(this.$$disposed){return null;
}{};

if(this.__oI){return qx.event.Registration.addListener(this.__oI,co,cp,self,cq);
}
if(!this.__oW){this.__oW={};
}
if(cq==null){cq=false;
}var cs=qx.event.Manager.getNextUniqueId();
var ct=co+(cq?bp:bF)+cs;
this.__oW[ct]={type:co,listener:cp,self:self,capture:cq,unique:cs};
return ct;
},removeListener:function(dM,dN,self,dO){var dP;

if(this.$$disposed){return null;
}{};

if(this.__oI){qx.event.Registration.removeListener(this.__oI,dM,dN,self,dO);
}else{var dR=this.__oW;
var dQ;

if(dO==null){dO=false;
}
for(var dS in dR){dQ=dR[dS];
if(dQ.listener===dN&&dQ.self===self&&dQ.capture===dO&&dQ.type===dM){delete dR[dS];
break;
}}}return this;
},removeListenerById:function(dB){if(this.$$disposed){return null;
}
if(this.__oI){qx.event.Registration.removeListenerById(this.__oI,dB);
}else{delete this.__oW[dB];
}return this;
},hasListener:function(N,O){if(this.$$disposed){return false;
}
if(this.__oI){return qx.event.Registration.hasListener(this.__oI,N,O);
}var Q=this.__oW;
var P;

if(O==null){O=false;
}
for(var R in Q){P=Q[R];
if(P.capture===O&&P.type===N){return true;
}}return false;
}},defer:function(cL){cL.__pk=new qx.util.DeferredCall(cL.flush,cL);
},destruct:function(){var dz=this.__oI;

if(dz){qx.event.Registration.getManager(dz).removeAllListeners(dz);
dz.$$element=bv;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__pa;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(bM);
this.__oU=this.__oT=this.__oW=this.__oV=this.__oR=this.__oQ=this.__oS=this.__oI=this.__pa=this.__oM=this.__oN=null;
}});
})();
(function(){var g="value",f="Please use the getValue() method instead.",e="qx.html.Label",d="Please use the setValue() method instead.";
qx.Class.define(e,{extend:qx.html.Element,members:{__jf:null,_applyProperty:function(name,i){arguments.callee.base.call(this,name,i);

if(name==g){var j=this.getDomElement();
qx.bom.Label.setValue(j,i);
}},_createDomElement:function(){var l=this.__jf;
var k=qx.bom.Label.create(this._content,l);
return k;
},_copyData:function(a){return arguments.callee.base.call(this,true);
},setRich:function(b){var c=this.getDomElement();

if(c){throw new Error("The label mode cannot be modified after initial creation");
}b=!!b;

if(this.__jf==b){return;
}this.__jf=b;
return this;
},setValue:function(h){this._setProperty(g,h);
return this;
},getValue:function(){return this._getProperty(g);
},setContent:function(m){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
return this.setValue(m);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
return this.getValue();
}}});
})();
(function(){var f="qx.event.type.Event";
qx.Class.define(f,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(i,j){{};
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
},setType:function(c){this._type=c;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(k){this._eventPhase=k;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(h){this._target=h;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(b){this._currentTarget=b;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(a){this._relatedTarget=a;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(l){this._originalTarget=l;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(g){this._bubbles=g;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var f="qx.event.type.Native";
qx.Class.define(f,{extend:qx.event.type.Event,members:{init:function(a,b,c,d,e){arguments.callee.base.call(this,d,e);
this._target=b||qx.bom.Event.getTarget(a);
this._relatedTarget=c||qx.bom.Event.getRelatedTarget(a);

if(a.timeStamp){this._timeStamp=a.timeStamp;
}this._native=a;
this._returnValue=null;
return this;
},clone:function(g){var h=arguments.callee.base.call(this,g);
var i={};
h._native=this._cloneNativeEvent(this._native,i);
h._returnValue=this._returnValue;
return h;
},_cloneNativeEvent:function(k,l){l.preventDefault=qx.lang.Function.empty;
return l;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(j){this._returnValue=j;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
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
(function(){var j="left",i="right",h="middle",g="qx.client",f="dblclick",e="click",d="none",c="contextmenu",b="qx.event.type.Mouse";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{init:function(n,o,p,q,r){arguments.callee.base.call(this,n,o,p,q,r);

if(!p){this._relatedTarget=qx.bom.Event.getRelatedTarget(n);
}return this;
},_cloneNativeEvent:function(k,l){var l=arguments.callee.base.call(this,k,l);
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
},__on:qx.core.Variant.select(g,{"mshtml":{1:j,2:i,4:h},"default":{0:j,2:i,1:h}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:case f:return j;
case c:return i;
default:return this.__on[this._native.button]||d;
}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(g,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(a);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(g,{"mshtml":function(){var m=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(m);
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
(function(){var j="qx.locale.MTranslation";
qx.Mixin.define(j,{members:{tr:function(e,f){var g=qx.locale.Manager;

if(g){return g.tr.apply(g,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(k,l,m,n){var o=qx.locale.Manager;

if(o){return o.trn.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(a,b,c){var d=qx.locale.Manager;

if(d){return d.trc.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(h){var i=qx.locale.Manager;

if(i){return i.marktr.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var h="edge-start",g="align-start",f="align-end",e="edge-end",d="qx.util.placement.AbstractAxis";
qx.Class.define(d,{extend:qx.core.Object,members:{computeStart:function(m,n,o,p,q){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(i,j,k,l){switch(l){case h:return j.start-k.end-i;
case e:return j.end+k.start;
case g:return j.start+k.start;
case f:return j.end-k.end-i;
}},_isInRange:function(a,b,c){return a>=0&&a+b<=c;
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
(function(){var d="qx.event.IEventHandler";
qx.Interface.define(d,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(h,i){},registerEvent:function(a,b,c){},unregisterEvent:function(e,f,g){}}});
})();
(function(){var D="blur",C="focus",B="input",A="load",z="qx.ui.core.EventHandler",y="activate";
qx.Class.define(z,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__jg=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__jg:null,__jh:{focusin:1,focusout:1,focus:1,blur:1},__ji:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(a,b){return a instanceof qx.ui.core.Widget;
},_dispatchEvent:function(c){var h=c.getTarget();
var g=qx.ui.core.Widget.getWidgetByElement(h);
var j=false;

while(g&&g.isAnonymous()){var j=true;
g=g.getLayoutParent();
}if(g&&j&&c.getType()==y){g.getContainerElement().activate();
}if(this.__jh[c.getType()]){g=g&&g.getFocusTarget();
if(!g){return;
}}if(c.getRelatedTarget){var r=c.getRelatedTarget();
var q=qx.ui.core.Widget.getWidgetByElement(r);

while(q&&q.isAnonymous()){q=q.getLayoutParent();
}
if(q){if(this.__jh[c.getType()]){q=q.getFocusTarget();
}if(q===g){return;
}}}var m=c.getCurrentTarget();
var o=qx.ui.core.Widget.getWidgetByElement(m);

if(!o||o.isAnonymous()){return;
}if(this.__jh[c.getType()]){o=o.getFocusTarget();
}var p=c.getType();

if(!o||!(o.isEnabled()||this.__ji[p])){return;
}var d=c.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var k=this.__jg.getListeners(o,p,d);

if(!k||k.length===0){return;
}var e=qx.event.Pool.getInstance().getObject(c.constructor);
c.clone(e);
e.setTarget(g);
e.setRelatedTarget(q||null);
e.setCurrentTarget(o);
var s=c.getOriginalTarget();

if(s){var f=qx.ui.core.Widget.getWidgetByElement(s);

while(f&&f.isAnonymous()){f=f.getLayoutParent();
}e.setOriginalTarget(f);
}else{e.setOriginalTarget(h);
}for(var i=0,l=k.length;i<l;i++){var n=k[i].context||o;
k[i].handler.call(n,e);
}if(e.getPropagationStopped()){c.stopPropagation();
}
if(e.getDefaultPrevented()){c.preventDefault();
}qx.event.Pool.getInstance().poolObject(e);
},registerEvent:function(t,u,v){var w;

if(u===C||u===D){w=t.getFocusElement();
}else if(u===A||u===B){w=t.getContentElement();
}else{w=t.getContainerElement();
}
if(w){w.addListener(u,this._dispatchEvent,this,v);
}},unregisterEvent:function(E,F,G){var H;

if(F===C||F===D){H=E.getFocusElement();
}else if(F===A||F===B){H=E.getContentElement();
}else{H=E.getContainerElement();
}
if(H){H.removeListener(F,this._dispatchEvent,this,G);
}}},destruct:function(){this.__jg=null;
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var b="qx.ui.core.DecoratorFactory",a="$$nopool$$";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jj={};
},statics:{MAX_SIZE:15,__jk:a},members:{__jj:null,getDecoratorElement:function(j){var o=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(j)){var m=j;
var l=qx.theme.manager.Decoration.getInstance().resolve(j);
}else{var m=o.__jk;
l=j;
}var n=this.__jj;

if(n[m]&&n[m].length>0){var k=n[m].pop();
}else{var k=this._createDecoratorElement(l,m);
}k.$$pooled=false;
return k;
},poolDecorator:function(f){if(!f||f.$$pooled){return;
}var i=qx.ui.core.DecoratorFactory;
var g=f.getId();

if(g==i.__jk){f.dispose();
return;
}var h=this.__jj;

if(!h[g]){h[g]=[];
}
if(h[g].length>i.MAX_SIZE){f.dispose();
}else{f.$$pooled=true;
h[g].push(f);
}},_createDecoratorElement:function(c,d){var e=new qx.html.Decorator(c,d);
{};
return e;
},toString:function(){return arguments.callee.base.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__jj;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__jj=null;
}});
})();
(function(){var g="qx.util.DisposeUtil";
qx.Class.define(g,{statics:{disposeFields:function(n,o){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=o.length;i<l;i++){var name=o[i];

if(n[name]==null||!n.hasOwnProperty(name)){continue;
}n[name]=null;
}},disposeObjects:function(a,b){var name;

for(var i=0,l=b.length;i<l;i++){name=b[i];

if(a[name]==null||!a.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(a[name].dispose){a[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}a[name]=null;
}},disposeArray:function(h,j){var m=h[j];

if(!m){return;
}if(qx.core.ObjectRegistry.inShutDown){h[j]=null;
return;
}try{var k;

for(var i=m.length-1;i>=0;i--){k=m[i];

if(k){k.dispose();
}}}catch(c){throw new Error("The array field: "+j+" of object: "+h+" has non disposable entries: "+c);
}m.length=0;
h[j]=null;
},disposeMap:function(q,r){var s=q[r];

if(!s){return;
}if(qx.core.ObjectRegistry.inShutDown){q[r]=null;
return;
}try{for(var t in s){if(s.hasOwnProperty(t)){s[t].dispose();
}}}catch(p){throw new Error("The map field: "+r+" of object: "+q+" has non disposable entries: "+p);
}q[r]=null;
},disposeTriggeredBy:function(d,e){var f=e.dispose;
e.dispose=function(){f.call(e);
d.dispose();
};
}}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(f){if(f&&this._dynamic[f]){return this._dynamic[f];
}return f;
},_setDynamic:function(e){this._dynamic=e;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__jp=c;
this.__jq=d||b;
this.__jr=e===undefined?-1:e;
},members:{__jp:null,__jq:null,__jr:null,toString:function(){return this.__jp;
},getUri:function(){return this.__jq;
},getLineNumber:function(){return this.__jr;
}}});
})();
(function(){var l=",",k="rgb(",j=")",h="qx.theme.manager.Color",e="qx.util.ColorUtil";
qx.Class.define(e,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(Q){return this.NAMED[Q]!==undefined;
},isSystemColor:function(U){return this.SYSTEM[U]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(h);
},isThemedColor:function(n){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(n);
},stringToRgb:function(V){if(this.supportsThemes()&&this.isThemedColor(V)){var V=qx.theme.manager.Color.getInstance().resolveDynamic(V);
}
if(this.isNamedColor(V)){return this.NAMED[V];
}else if(this.isSystemColor(V)){throw new Error("Could not convert system colors to RGB: "+V);
}else if(this.isRgbString(V)){return this.__jA();
}else if(this.isHex3String(V)){return this.__jC();
}else if(this.isHex6String(V)){return this.__jD();
}throw new Error("Could not parse color: "+V);
},cssStringToRgb:function(m){if(this.isNamedColor(m)){return this.NAMED[m];
}else if(this.isSystemColor(m)){throw new Error("Could not convert system colors to RGB: "+m);
}else if(this.isRgbString(m)){return this.__jA();
}else if(this.isRgbaString(m)){return this.__jB();
}else if(this.isHex3String(m)){return this.__jC();
}else if(this.isHex6String(m)){return this.__jD();
}throw new Error("Could not parse color: "+m);
},stringToRgbString:function(bh){return this.rgbToRgbString(this.stringToRgb(bh));
},rgbToRgbString:function(M){return k+M[0]+l+M[1]+l+M[2]+j;
},rgbToHexString:function(W){return (qx.lang.String.pad(W[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(W[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(W[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(E){return this.isThemedColor(E)||this.isNamedColor(E)||this.isHex3String(E)||this.isHex6String(E)||this.isRgbString(E);
},isCssString:function(bc){return this.isSystemColor(bc)||this.isNamedColor(bc)||this.isHex3String(bc)||this.isHex6String(bc)||this.isRgbString(bc);
},isHex3String:function(bg){return this.REGEXP.hex3.test(bg);
},isHex6String:function(O){return this.REGEXP.hex6.test(O);
},isRgbString:function(N){return this.REGEXP.rgb.test(N);
},isRgbaString:function(X){return this.REGEXP.rgba.test(X);
},__jA:function(){var bf=parseInt(RegExp.$1,10);
var be=parseInt(RegExp.$2,10);
var bd=parseInt(RegExp.$3,10);
return [bf,be,bd];
},__jB:function(){var d=parseInt(RegExp.$1,10);
var c=parseInt(RegExp.$2,10);
var a=parseInt(RegExp.$3,10);
return [d,c,a];
},__jC:function(){var T=parseInt(RegExp.$1,16)*17;
var S=parseInt(RegExp.$2,16)*17;
var R=parseInt(RegExp.$3,16)*17;
return [T,S,R];
},__jD:function(){var bb=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var ba=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var Y=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [bb,ba,Y];
},hex3StringToRgb:function(bi){if(this.isHex3String(bi)){return this.__jC(bi);
}throw new Error("Invalid hex3 value: "+bi);
},hex6StringToRgb:function(L){if(this.isHex6String(L)){return this.__jD(L);
}throw new Error("Invalid hex6 value: "+L);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__jC(P);
}
if(this.isHex6String(P)){return this.__jD(P);
}throw new Error("Invalid hex value: "+P);
},rgbToHsb:function(o){var u,v,x;
var D=o[0];
var A=o[1];
var s=o[2];
var C=(D>A)?D:A;

if(s>C){C=s;
}var w=(D<A)?D:A;

if(s<w){w=s;
}x=C/255.0;

if(C!=0){v=(C-w)/C;
}else{v=0;
}
if(v==0){u=0;
}else{var z=(C-D)/(C-w);
var B=(C-A)/(C-w);
var y=(C-s)/(C-w);

if(D==C){u=y-B;
}else if(A==C){u=2.0+z-y;
}else{u=4.0+B-z;
}u=u/6.0;

if(u<0){u=u+1.0;
}}return [Math.round(u*360),Math.round(v*100),Math.round(x*100)];
},hsbToRgb:function(F){var i,f,p,q,t;
var G=F[0]/360;
var H=F[1]/100;
var I=F[2]/100;

if(G>=1.0){G%=1.0;
}
if(H>1.0){H=1.0;
}
if(I>1.0){I=1.0;
}var J=Math.floor(255*I);
var K={};

if(H==0.0){K.red=K.green=K.blue=J;
}else{G*=6.0;
i=Math.floor(G);
f=G-i;
p=Math.floor(J*(1.0-H));
q=Math.floor(J*(1.0-(H*f)));
t=Math.floor(J*(1.0-(H*(1.0-f))));

switch(i){case 0:K.red=J;
K.green=t;
K.blue=p;
break;
case 1:K.red=q;
K.green=J;
K.blue=p;
break;
case 2:K.red=p;
K.green=J;
K.blue=t;
break;
case 3:K.red=p;
K.green=q;
K.blue=J;
break;
case 4:K.red=t;
K.green=p;
K.blue=J;
break;
case 5:K.red=J;
K.green=p;
K.blue=q;
break;
}}return [K.red,K.green,K.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__jE={};
this.add(a,h);
},members:{__jE:null,_preprocess:function(n){var q=this._getDynamic();

if(q[n]===false){return n;
}else if(q[n]===undefined){if(n.charAt(0)===j||n.charAt(0)===b||n.indexOf(g)===0||n.indexOf(f)===i||n.indexOf(e)===0){q[n]=false;
return n;
}
if(this.__jE[n]){return this.__jE[n];
}var p=n.substring(0,n.indexOf(j));
var o=this.__jE[p];

if(o!==undefined){q[n]=o+n.substring(p.length);
}}return n;
},add:function(r,s){this.__jE[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(j))===r){u[t]=s+t.substring(r.length);
}}},remove:function(k){delete this.__jE[k];
},resolve:function(l){var m=this._getDynamic();

if(l!==null){l=this._preprocess(l);
}return m[l]||l;
}},destruct:function(){this.__jE=null;
}});
})();
(function(){var j="_applyTheme",i="qx.theme.manager.Color",h="Theme",g="changeTheme",f="string",e="singleton";
qx.Class.define(i,{type:e,extend:qx.util.ValueManager,properties:{theme:{check:h,nullable:true,apply:j,event:g}},members:{_applyTheme:function(n){var o={};

if(n){var p=n.colors;
var q=qx.util.ColorUtil;
var r;

for(var s in p){r=p[s];

if(typeof r===f){if(!q.isCssString(r)){throw new Error("Could not parse color: "+r);
}}else if(r instanceof Array){r=q.rgbToRgbString(r);
}else{throw new Error("Could not parse color: "+r);
}o[s]=r;
}}this._setDynamic(o);
},resolve:function(a){var d=this._dynamic;
var b=d[a];

if(b){return b;
}var c=this.getTheme();

if(c!==null&&c.colors[a]){return d[a]=c.colors[a];
}return a;
},isDynamic:function(k){var m=this._dynamic;

if(k&&(m[k]!==undefined)){return true;
}var l=this.getTheme();

if(l!==null&&k&&(l.colors[k]!==undefined)){m[k]=l.colors[k];
return true;
}return false;
}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(K,stop,L){var parent=K.parentNode;
var Q=qx.dom.Node.getDocument(K);
var M=Q.body;
var Y,W,T;
var bb,R,bc;
var U,bd,bg;
var be,O,X,N;
var S,bf,V;
var P=L===g;
var ba=L===c;
stop=stop?stop.parentNode:Q;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){W=parent.scrollLeft;
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
U=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
bd=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
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
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoViewY:function(l,stop,m){var parent=l.parentNode;
var s=qx.dom.Node.getDocument(l);
var n=s.body;
var A,o,w;
var C,z,u;
var q,r,p;
var E,F,B,v;
var y,t,G;
var D=m===d;
var x=m===e;
stop=stop?stop.parentNode:s;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){o=parent.scrollTop;
w=o+qx.bom.Viewport.getHeight();
C=qx.bom.Viewport.getHeight();
z=parent.clientHeight;
u=parent.scrollHeight;
q=0;
r=0;
p=0;
}else{A=qx.bom.element.Location.get(parent);
o=A.top;
w=A.bottom;
C=parent.offsetHeight;
z=parent.clientHeight;
u=parent.scrollHeight;
q=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
r=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
p=C-z-q-r;
}E=qx.bom.element.Location.get(l);
F=E.top;
B=E.bottom;
v=l.offsetHeight;
y=F-o-q;
t=B-w+r;
G=0;
if(D){G=y;
}else if(x){G=t+p;
}else if(y<0||v>z){G=y;
}else if(t>0){G=t+p;
}parent.scrollTop+=G;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
}}});
})();
(function(){var m="",l="g",k="0",j='\\$1',h="%",g='-',f="qx.lang.String",e=' ',d='\n',c="undefined";
qx.Class.define(f,{statics:{camelCase:function(n){return n.replace(/\-([a-z])/g,function(x,y){return y.toUpperCase();
});
},hyphenate:function(z){return z.replace(/[A-Z]/g,function(t){return (g+t.charAt(0).toLowerCase());
});
},capitalize:function(O){return O.replace(/\b[a-z]/g,function(A){return A.toUpperCase();
});
},clean:function(s){return this.trim(s.replace(/\s+/g,e));
},trimLeft:function(u){return u.replace(/^\s+/,m);
},trimRight:function(b){return b.replace(/\s+$/,m);
},trim:function(q){return q.replace(/^\s+|\s+$/g,m);
},startsWith:function(P,Q){return P.indexOf(Q)===0;
},endsWith:function(o,p){return o.substring(o.length-p.length,o.length)===p;
},repeat:function(E,F){return E.length>=0?new Array(F+1).join(E):m;
},pad:function(B,length,C){var D=length-B.length;

if(D>0){if(typeof C===c){C=k;
}return this.repeat(C,D)+B;
}else{return B;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(v,w){return v.indexOf(w)!=-1;
},format:function(G,H){var I=G;

for(var i=0;i<H.length;i++){I=I.replace(new RegExp(h+(i+1),l),H[i]);
}return I;
},escapeRegexpChars:function(J){return J.replace(/([.*+?^${}()|[\]\/\\])/g,j);
},toArray:function(r){return r.split(/\B|\b/g);
},stripTags:function(a){return a.replace(/<\/?[^>]+>/gi,m);
},stripScripts:function(K,L){var N=m;
var M=K.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){N+=arguments[1]+d;
return m;
});

if(L===true){qx.lang.Function.globalEval(N);
}return M;
}}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(o){if(!o){return k;
}var t=o.left;
var top=o.top;
var s=o.width;
var r=o.height;
var p,q;

if(t==null){p=(s==null?n:s+m);
t=n;
}else{p=(s==null?n:t+s+m);
t=t+m;
}
if(top==null){q=(r==null?n:r+m);
top=n;
}else{q=(r==null?n:top+r+m);
top=top+m;
}return d+top+l+p+l+q+l+t+i;
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
},set:function(v,w){if(!w){v.style.clip=a;
return;
}var B=w.left;
var top=w.top;
var A=w.width;
var z=w.height;
var x,y;

if(B==null){x=(A==null?n:A+m);
B=n;
}else{x=(A==null?n:B+A+m);
B=B+m;
}
if(top==null){y=(z==null?n:z+m);
top=n;
}else{y=(z==null?n:top+z+m);
top=top+m;
}v.style.clip=j+top+l+x+l+y+l+B+g;
},reset:function(u){u.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var n="ready",m="qx.client",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="gecko|opera|webkit",f="left",d="DOMContentLoaded",c="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this._window=a.getWindow();
this.__jF=false;
this.__jG=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__jH:false,onScriptLoaded:function(){this.__jH=true;
var q=qx.event.handler.Application.$$instance;

if(q){q.__jK();
}}},members:{canHandleEvent:function(o,p){},registerEvent:function(v,w,x){},unregisterEvent:function(s,t,u){},__jI:null,__jF:null,__jG:null,__jJ:null,__jK:function(){var r=qx.event.handler.Application;
if(!this.__jI&&this.__jF&&r.__jH){if(qx.core.Variant.isSet(m,l)){if(qx.event.Registration.hasListener(this._window,n)){this.__jI=true;
qx.event.Registration.fireEvent(this._window,n);
}}else{this.__jI=true;
qx.event.Registration.fireEvent(this._window,n);
}}},isApplicationReady:function(){return this.__jI;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h){this.__jF=true;
this.__jK();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(m,g)){qx.bom.Event.addNativeListener(this._window,d,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(m,l)){var self=this;
var b=function(){try{document.documentElement.doScroll(f);

if(document.body){self._onNativeLoadWrapped();
}}catch(z){window.setTimeout(b,100);
}};
b();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__jF=true;
this.__jK();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__jJ){this.__jJ=true;

try{qx.event.Registration.fireEvent(this._window,c);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(y){qx.event.Registration.addHandler(y);
}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var u="abstract",t="qx.event.dispatch.AbstractBubbling";
qx.Class.define(t,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:u,construct:function(v){this._manager=v;
},members:{_getParent:function(a){throw new Error("Missing implementation");
},canDispatchEvent:function(w,event,x){return event.getBubbles();
},dispatchEvent:function(b,event,c){var parent=b;
var n=this._manager;
var k,r;
var g;
var m,p;
var o;
var q=[];
k=n.getListeners(b,c,true);
r=n.getListeners(b,c,false);

if(k){q.push(k);
}
if(r){q.push(r);
}var parent=this._getParent(b);
var e=[];
var d=[];
var f=[];
var l=[];
while(parent!=null){k=n.getListeners(parent,c,true);

if(k){f.push(k);
l.push(parent);
}r=n.getListeners(parent,c,false);

if(r){e.push(r);
d.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=f.length-1;i>=0;i--){o=l[i];
event.setCurrentTarget(o);
g=f[i];

for(var j=0,h=g.length;j<h;j++){m=g[j];
p=m.context||o;
m.handler.call(p,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(b);

for(var i=0,s=q.length;i<s;i++){g=q[i];

for(var j=0,h=g.length;j<h;j++){m=g[j];
p=m.context||b;
m.handler.call(p,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,s=e.length;i<s;i++){o=d[i];
event.setCurrentTarget(o);
g=e[i];

for(var j=0,h=g.length;j<h;j++){m=g[j];
p=m.context||o;
m.handler.call(p,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var q="losecapture",p="qx.client",o="blur",n="focus",m="click",l="qx.event.dispatch.MouseCapture",k="capture",j="scroll";
qx.Class.define(l,{extend:qx.event.dispatch.AbstractBubbling,construct:function(a,b){arguments.callee.base.call(this,a);
this.__jL=a.getWindow();
this.__jM=b;
a.addListener(this.__jL,o,this.releaseCapture,this);
a.addListener(this.__jL,n,this.releaseCapture,this);
a.addListener(this.__jL,j,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__jM:null,__jN:null,__jO:true,__jL:null,_getParent:function(i){return i.parentNode;
},canDispatchEvent:function(g,event,h){return (this.__jN&&this.__jP[h]);
},dispatchEvent:function(s,event,t){if(t==m){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__jO||!qx.dom.Hierarchy.contains(this.__jN,s)){s=this.__jN;
}arguments.callee.base.call(this,s,event,t);
},__jP:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(e,f){var f=f!==false;

if(this.__jN===e&&this.__jO==f){return;
}
if(this.__jN){this.releaseCapture();
}this.nativeSetCapture(e,f);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(e,q,function(){qx.bom.Event.removeNativeListener(e,q,arguments.callee);
self.releaseCapture();
});
}this.__jO=f;
this.__jN=e;
this.__jM.fireEvent(e,k,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__jN;
},releaseCapture:function(){var u=this.__jN;

if(!u){return;
}this.__jN=null;
this.__jM.fireEvent(u,q,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(u);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(p,{"mshtml":function(c,d){c.setCapture(d!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(p,{"mshtml":function(r){r.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__jN=this.__jL=this.__jM=null;
},defer:function(v){qx.event.Registration.addDispatcher(v);
}});
})();
(function(){var u="qx.client",t="",s="mshtml",r="'",q="SelectionLanguage",p="qx.xml.Document",o=" />",n="MSXML2.DOMDocument.3.0",m='<\?xml version="1.0" encoding="utf-8"?>\n<',k="MSXML2.XMLHTTP.3.0",f="MSXML2.XMLHTTP.6.0",j=" xmlns='",h="text/xml",e="XPath",d="MSXML2.DOMDocument.6.0",g="HTML";
qx.Class.define(p,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(y){if(y.nodeType===9){return y.documentElement.nodeName!==g;
}else if(y.ownerDocument){return this.isXmlDocument(y.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(u,{"mshtml":function(D,E){var F=new ActiveXObject(this.DOMDOC);
F.setProperty(q,e);

if(E){var G=m;
G+=E;

if(D){G+=j+D+r;
}G+=o;
F.loadXML(G);
}return F;
},"default":function(z,A){return document.implementation.createDocument(z||t,A||t,null);
}}),fromString:qx.core.Variant.select(u,{"mshtml":function(v){var w=qx.xml.Document.create();
w.loadXML(v);
return w;
},"default":function(B){var C=new DOMParser();
return C.parseFromString(B,h);
}})},defer:function(a){if(qx.core.Variant.isSet(u,s)){var b=[d,n];
var c=[f,k];

for(var i=0,l=b.length;i<l;i++){try{new ActiveXObject(b[i]);
new ActiveXObject(c[i]);
}catch(x){continue;
}a.DOMDOC=b[i];
a.XMLHTTP=c[i];
break;
}}}});
})();
(function(){var g="qx.ui.core.queue.Visibility",f="visibility";
qx.Class.define(g,{statics:{__jQ:{},__jR:{},remove:function(h){var i=h.$$hash;
delete this.__jR[i];
delete this.__jQ[i];
},isVisible:function(e){return this.__jR[e.$$hash]||false;
},__jS:function(a){var c=this.__jR;
var b=a.$$hash;
var d;
if(a.isExcluded()){d=false;
}else{var parent=a.$$parent;

if(parent){d=this.__jS(parent);
}else{d=a.isRootWidget();
}}return c[b]=d;
},add:function(j){var k=this.__jQ;

if(k[j.$$hash]){return;
}k[j.$$hash]=j;
qx.ui.core.queue.Manager.scheduleFlush(f);
},flush:function(){var l=this.__jQ;
var p=this.__jR;
for(var m in l){if(p[m]!=null){l[m].addChildrenToQueue(l);
}}var o={};

for(var m in l){o[m]=p[m];
p[m]=null;
}for(var m in l){var n=l[m];
delete l[m];
if(p[m]==null){this.__jS(n);
}if(p[m]&&p[m]!=o[m]){n.checkAppearanceNeeds();
}}this.__jQ={};
}}});
})();
(function(){var e="none",d="qx.html.Decorator",c="absolute";
qx.Class.define(d,{extend:qx.html.Element,construct:function(f,g){arguments.callee.base.call(this);
this.__jT=f;
this.__jU=g||f.toHashCode();
this.useMarkup(f.getMarkup());
var h={position:c,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){h.pointerEvents=e;
}this.setStyles(h);
},members:{__jU:null,__jT:null,getId:function(){return this.__jU;
},getDecorator:function(){return this.__jT;
},resize:function(a,b){this.__jT.resize(this.getDomElement(),a,b);
},tint:function(i){this.__jT.tint(this.getDomElement(),i);
},getInsets:function(){return this.__jT.getInsets();
}},destruct:function(){this.__jT=null;
}});
})();
(function(){var bS="",bR="qx.client",bQ="hidden",bP="-moz-scrollbars-none",bO="overflow",bN=";",bM="overflowY",bL=":",bK="overflowX",bJ="overflow:",cf="none",ce="scroll",cd="borderLeftStyle",cc="borderRightStyle",cb="div",ca="borderRightWidth",bY="overflow-y",bX="borderLeftWidth",bW="-moz-scrollbars-vertical",bV="100px",bT="qx.bom.element.Overflow",bU="overflow-x";
qx.Class.define(bT,{statics:{__jV:null,getScrollbarWidth:function(){if(this.__jV!==null){return this.__jV;
}var ba=qx.bom.element.Style;
var bc=function(l,m){return parseInt(ba.get(l,m))||0;
};
var bd=function(bs){return (ba.get(bs,cc)==cf?0:bc(bs,ca));
};
var bb=function(O){return (ba.get(O,cd)==cf?0:bc(O,bX));
};
var bf=qx.core.Variant.select(bR,{"mshtml":function(bD){if(ba.get(bD,bM)==bQ||bD.clientWidth==0){return bd(bD);
}return Math.max(0,bD.offsetWidth-bD.clientLeft-bD.clientWidth);
},"default":function(i){if(i.clientWidth==0){var j=ba.get(i,bO);
var k=(j==ce||j==bW?16:0);
return Math.max(0,bd(i)+k);
}return Math.max(0,(i.offsetWidth-i.clientWidth-bb(i)));
}});
var be=function(T){return bf(T)-bd(T);
};
var t=document.createElement(cb);
var s=t.style;
s.height=s.width=bV;
s.overflow=ce;
document.body.appendChild(t);
var c=be(t);
this.__jV=c?c:16;
document.body.removeChild(t);
return this.__jV;
},_compile:qx.core.Variant.select(bR,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(U,V){if(V==bQ){V=bP;
}return bJ+V+bN;
}:
function(bu,bv){return bu+bL+bv+bN;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bE,bF){return bJ+bF+bN;
}:
function(C,D){return C+bL+D+bN;
},"default":function(p,q){return p+bL+q+bN;
}}),compileX:function(r){return this._compile(bU,r);
},compileY:function(bt){return this._compile(bY,bt);
},getX:qx.core.Variant.select(bR,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bw,bx){var by=qx.bom.element.Style.get(bw,bO,bx,false);

if(by===bP){by=bQ;
}return by;
}:
function(bo,bp){return qx.bom.element.Style.get(bo,bK,bp,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(E,F){return qx.bom.element.Style.get(E,bO,F,false);
}:
function(d,e){return qx.bom.element.Style.get(d,bK,e,false);
},"default":function(R,S){return qx.bom.element.Style.get(R,bK,S,false);
}}),setX:qx.core.Variant.select(bR,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bq,br){if(br==bQ){br=bP;
}bq.style.overflow=br;
}:
function(bG,bH){bG.style.overflowX=bH;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(w,x){w.style.overflow=x;
}:
function(y,z){y.style.overflowX=z;
},"default":function(bi,bj){bi.style.overflowX=bj;
}}),resetX:qx.core.Variant.select(bR,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(a){a.style.overflow=bS;
}:
function(Y){Y.style.overflowX=bS;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(P,Q){P.style.overflow=bS;
}:
function(n,o){n.style.overflowX=bS;
},"default":function(N){N.style.overflowX=bS;
}}),getY:qx.core.Variant.select(bR,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(f,g){var h=qx.bom.element.Style.get(f,bO,g,false);

if(h===bP){h=bQ;
}return h;
}:
function(u,v){return qx.bom.element.Style.get(u,bM,v,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bk,bl){return qx.bom.element.Style.get(bk,bO,bl,false);
}:
function(bm,bn){return qx.bom.element.Style.get(bm,bM,bn,false);
},"default":function(I,J){return qx.bom.element.Style.get(I,bM,J,false);
}}),setY:qx.core.Variant.select(bR,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bz,bA){if(bA===bQ){bA=bP;
}bz.style.overflow=bA;
}:
function(A,B){A.style.overflowY=B;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(L,M){L.style.overflow=M;
}:
function(bg,bh){bg.style.overflowY=bh;
},"default":function(bB,bC){bB.style.overflowY=bC;
}}),resetY:qx.core.Variant.select(bR,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bI){bI.style.overflow=bS;
}:
function(b){b.style.overflowY=bS;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(G,H){G.style.overflow=bS;
}:
function(W,X){W.style.overflowY=bS;
},"default":function(K){K.style.overflowY=bS;
}})}});
})();
(function(){var r=":",q="qx.client",p="anonymous",o="...",n="qx.dev.StackTrace",m="",l="\n",k="/source/class/",j=".";
qx.Class.define(n,{statics:{getStackTrace:qx.core.Variant.select(q,{"gecko":function(){try{throw new Error();
}catch(z){var W=this.getStackTraceFromError(z);
qx.lang.Array.removeAt(W,0);
var U=this.getStackTraceFromCaller(arguments);
var S=U.length>W.length?U:W;

for(var i=0;i<Math.min(U.length,W.length);i++){var T=U[i];

if(T.indexOf(p)>=0){continue;
}var bb=T.split(r);

if(bb.length!=2){continue;
}var Y=bb[0];
var R=bb[1];
var Q=W[i];
var bc=Q.split(r);
var X=bc[0];
var P=bc[1];

if(qx.Class.getByName(X)){var V=X;
}else{V=Y;
}var ba=V+r;

if(R){ba+=R+r;
}ba+=P;
S[i]=ba;
}return S;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var g;

try{g.bar();
}catch(H){var h=this.getStackTraceFromError(H);
qx.lang.Array.removeAt(h,0);
return h;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(q,{"opera":function(s){return [];
},"default":function(a){var f=[];
var e=qx.lang.Function.getCaller(a);
var b={};

while(e){var c=qx.lang.Function.getName(e);
f.push(c);

try{e=e.caller;
}catch(y){break;
}
if(!e){break;
}var d=qx.core.ObjectRegistry.toHashCode(e);

if(b[d]){f.push(o);
break;
}b[d]=e;
}return f;
}}),getStackTraceFromError:qx.core.Variant.select(q,{"gecko":function(I){if(!I.stack){return [];
}var O=/@(.+):(\d+)$/gm;
var J;
var K=[];

while((J=O.exec(I.stack))!=null){var L=J[1];
var N=J[2];
var M=this.__jW(L);
K.push(M+r+N);
}return K;
},"webkit":function(t){if(t.sourceURL&&t.line){return [this.__jW(t.sourceURL)+r+t.line];
}else{return [];
}},"opera":function(A){if(A.message.indexOf("Backtrace:")<0){return [];
}var C=[];
var D=qx.lang.String.trim(A.message.split("Backtrace:")[1]);
var E=D.split(l);

for(var i=0;i<E.length;i++){var B=E[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(B&&B.length>=2){var G=B[1];
var F=this.__jW(B[2]);
C.push(F+r+G);
}}return C;
},"default":function(){return [];
}}),__jW:function(u){var x=k;
var v=u.indexOf(x);
var w=(v==-1)?u:u.substring(v+x.length).replace(/\//g,j).replace(/\.js$/,m);
return w;
}}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__lM:function(){var o=navigator.platform;
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
}}},defer:function(n){n.__lM();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__kf:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__kg:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__kf){J.push(I);
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
}else{this.NAME=this.__kf[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__kg();
}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__kk=qx.dev.StackTrace.getStackTrace();
},members:{__kk:null,getStackTrace:function(){return this.__kk;
}}});
})();
(function(){var m="qx.client",l="ie",k="msie",j="android",i="operamini",h="mobile chrome",g=")(/| )([0-9]+\.[0-9])",f="iemobile",e="opera mobi",d="Mobile Safari",A="operamobile",z="mobile safari",y="IEMobile|Maxthon|MSIE",x="qx.bom.client.Browser",w="opera mini",v="(",u="opera",t="mshtml",s="Opera Mini|Opera Mobi|Opera",r="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",p="webkit",q="5.0",n="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",o="Mobile/";
qx.Bootstrap.define(x,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__kl:function(C){var D=navigator.userAgent;
var F=new RegExp(v+C+g);
var G=D.match(F);

if(!G){return;
}var name=G[1].toLowerCase();
var E=G[3];
if(D.match(/Version(\/| )([0-9]+\.[0-9])/)){E=RegExp.$2;
}
if(qx.core.Variant.isSet(m,p)){if(name===j){name=h;
}else if(D.indexOf(d)!==-1||D.indexOf(o)!==-1){name=z;
}}else if(qx.core.Variant.isSet(m,t)){if(name===k){name=l;
if(qx.bom.client.System.WINCE&&name===l){name=f;
E=q;
}}}else if(qx.core.Variant.isSet(m,u)){if(name===e){name=A;
}else if(name===w){name=i;
}}this.NAME=name;
this.FULLVERSION=E;
this.VERSION=parseFloat(E,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(m,{"webkit":function(c){c.__kl(r);
},"gecko":function(B){B.__kl(n);
},"mshtml":function(b){b.__kl(y);
},"opera":function(a){a.__kl(s);
}})});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(w){var w=w||t;
this.__km=w;
this.length=w.length;
},members:{$$isString:true,length:0,__km:null,toString:function(){return this.__km;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(u,v){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){{};
var z=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
y.valueOf=y.toString;

if(new x(t).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var p="indexOf",o="addAfter",n="add",m="addBefore",l="_",k="addAt",j="hasChildren",i="removeAt",h="removeAll",g="getChildren",e="remove",f="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(f,{members:{__kn:function(s,t,u,v){var w=this.getChildrenContainer();

if(w===this){s=l+s;
}return (w[s])(t,u,v);
},getChildren:function(){return this.__kn(g);
},hasChildren:function(){return this.__kn(j);
},add:function(q,r){return this.__kn(n,q,r);
},remove:function(E){return this.__kn(e,E);
},removeAll:function(){return this.__kn(h);
},indexOf:function(x){return this.__kn(p,x);
},addAt:function(B,C,D){this.__kn(k,B,C,D);
},addBefore:function(y,z,A){this.__kn(m,y,z,A);
},addAfter:function(b,c,d){this.__kn(o,b,c,d);
},removeAt:function(a){this.__kn(i,a);
}}});
})();
(function(){var q="top",p="right",o="bottom",n="left",m="align-start",l="qx.util.placement.AbstractAxis",k="edge-start",j="align-end",i="edge-end",h="-",e="best-fit",g="qx.util.placement.Placement",f="keep-align",d="direct",c='__ko';
qx.Class.define(g,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ko=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:l},axisY:{check:l},edge:{check:[q,p,o,n],init:q},align:{check:[q,p,o,n],init:p}},statics:{__kp:null,compute:function(B,C,D,E,F,G,H){this.__kp=this.__kp||new qx.util.placement.Placement();
var K=F.split(h);
var J=K[0];
var I=K[1];
this.__kp.set({axisX:this.__kt(G),axisY:this.__kt(H),edge:J,align:I});
return this.__kp.compute(B,C,D,E);
},__kq:null,__kr:null,__ks:null,__kt:function(A){switch(A){case d:this.__kq=this.__kq||new qx.util.placement.DirectAxis();
return this.__kq;
case f:this.__kr=this.__kr||new qx.util.placement.KeepAlignAxis();
return this.__kr;
case e:this.__ks=this.__ks||new qx.util.placement.BestFitAxis();
return this.__ks;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__ko:null,compute:function(r,s,t,u){{};
var v=this.getAxisX()||this.__ko;
var x=v.computeStart(r.width,{start:t.left,end:t.right},{start:u.left,end:u.right},s.width,this.__ku());
var w=this.getAxisY()||this.__ko;
var top=w.computeStart(r.height,{start:t.top,end:t.bottom},{start:u.top,end:u.bottom},s.height,this.__kv());
return {left:x,top:top};
},__ku:function(){var z=this.getEdge();
var y=this.getAlign();

if(z==n){return k;
}else if(z==p){return i;
}else if(y==n){return m;
}else if(y==p){return j;
}},__kv:function(){var b=this.getEdge();
var a=this.getAlign();

if(b==q){return k;
}else if(b==o){return i;
}else if(a==q){return m;
}else if(a==o){return j;
}}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var m="button",l="qx.bom.Range",k="text",j="password",i="file",h="submit",g="reset",f="textarea",e="input",d="hidden",b="qx.client",c="body";
qx.Class.define(l,{statics:{get:qx.core.Variant.select(b,{"mshtml":function(a){if(qx.dom.Node.isElement(a)){switch(a.nodeName.toLowerCase()){case e:switch(a.type){case k:case j:case d:case m:case g:case i:case h:return a.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a)).createRange();
}break;
case f:case c:case m:return a.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a)).createRange();
}}else{if(a==null){a=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
}}})}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__kw:null,__kx:false,__ky:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var u=this.getCommand();

if(u){if(this.__kx){this.__kx=false;
}else{this.__kx=true;
u.execute(this);
}}this.fireEvent(n);
},__kz:function(e){if(this.__kx){this.__kx=false;
return;
}this.__kx=true;
this.execute();
},_applyCommand:function(o,p){if(p!=null){p.removeListenerById(this.__ky);
}
if(o!=null){this.__ky=o.addListener(n,this.__kz,this);
}var s=this.__kw;

if(s==null){this.__kw=s={};
}
for(var i=0;i<this._bindableProperties.length;i++){var r=this._bindableProperties[i];
if(p!=null&&s[r]!=null){p.removeBinding(s[r]);
s[r]=null;
}if(o!=null&&qx.Class.hasProperty(this.constructor,r)){var q=o.get(r);

if(q==null){var t=this.get(r);
}s[r]=o.bind(r,this,r);
if(t){this.set(r,t);
}}}}},destruct:function(){this.__kw=null;
}});
})();
(function(){var I="Integer",H="_applyDimension",G="Boolean",F="_applyStretching",E="_applyMargin",D="shorthand",C="_applyAlign",B="allowShrinkY",A="bottom",z="baseline",W="marginBottom",V="qx.ui.core.LayoutItem",U="center",T="marginTop",S="allowGrowX",R="middle",Q="marginLeft",P="allowShrinkX",O="top",N="right",L="marginRight",M="abstract",J="allowGrowY",K="left";
qx.Class.define(V,{type:M,extend:qx.core.Object,properties:{minWidth:{check:I,nullable:true,apply:H,init:null,themeable:true},width:{check:I,nullable:true,apply:H,init:null,themeable:true},maxWidth:{check:I,nullable:true,apply:H,init:null,themeable:true},minHeight:{check:I,nullable:true,apply:H,init:null,themeable:true},height:{check:I,nullable:true,apply:H,init:null,themeable:true},maxHeight:{check:I,nullable:true,apply:H,init:null,themeable:true},allowGrowX:{check:G,apply:F,init:true,themeable:true},allowShrinkX:{check:G,apply:F,init:true,themeable:true},allowGrowY:{check:G,apply:F,init:true,themeable:true},allowShrinkY:{check:G,apply:F,init:true,themeable:true},allowStretchX:{group:[S,P],mode:D,themeable:true},allowStretchY:{group:[J,B],mode:D,themeable:true},marginTop:{check:I,init:0,apply:E,themeable:true},marginRight:{check:I,init:0,apply:E,themeable:true},marginBottom:{check:I,init:0,apply:E,themeable:true},marginLeft:{check:I,init:0,apply:E,themeable:true},margin:{group:[T,L,W,Q],mode:D,themeable:true},alignX:{check:[K,U,N],nullable:true,apply:C,themeable:true},alignY:{check:[O,R,A,z],nullable:true,apply:C,themeable:true}},members:{__qk:null,__ql:null,__qm:null,__qn:null,__qo:null,__qp:null,__qq:null,getBounds:function(){return this.__qp||this.__ql||null;
},clearSeparators:function(){},renderSeparator:function(bc,bd){},renderLayout:function(h,top,i,j){var k;
{};
var l=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var l=this._getHeightForWidth(i);
}
if(l!=null&&l!==this.__qk){this.__qk=l;
qx.ui.core.queue.Layout.add(this);
return null;
}var n=this.__ql;

if(!n){n=this.__ql={};
}var m={};

if(h!==n.left||top!==n.top){m.position=true;
n.left=h;
n.top=top;
}
if(i!==n.width||j!==n.height){m.size=true;
n.width=i;
n.height=j;
}if(this.__qm){m.local=true;
delete this.__qm;
}
if(this.__qo){m.margin=true;
delete this.__qo;
}return m;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__qm;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__qm=true;
this.__qn=null;
},getSizeHint:function(r){var s=this.__qn;

if(s){return s;
}
if(r===false){return null;
}s=this.__qn=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__qk&&this.getHeight()==null){s.height=this.__qk;
}if(s.minWidth>s.width){s.width=s.minWidth;
}
if(s.maxWidth<s.width){s.width=s.maxWidth;
}
if(!this.getAllowGrowX()){s.maxWidth=s.width;
}
if(!this.getAllowShrinkX()){s.minWidth=s.width;
}if(s.minHeight>s.height){s.height=s.minHeight;
}
if(s.maxHeight<s.height){s.height=s.maxHeight;
}
if(!this.getAllowGrowY()){s.maxHeight=s.height;
}
if(!this.getAllowShrinkY()){s.minHeight=s.height;
}return s;
},_computeSizeHint:function(){var x=this.getMinWidth()||0;
var u=this.getMinHeight()||0;
var y=this.getWidth()||x;
var w=this.getHeight()||u;
var t=this.getMaxWidth()||Infinity;
var v=this.getMaxHeight()||Infinity;
return {minWidth:x,width:y,maxWidth:t,minHeight:u,height:w,maxHeight:v};
},_hasHeightForWidth:function(){var bb=this._getLayout();

if(bb){return bb.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(f){var g=this._getLayout();

if(g&&g.hasHeightForWidth()){return g.getHeightForWidth(f);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__qo=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__qp;
},setUserBounds:function(o,top,p,q){this.__qp={left:o,top:top,width:p,height:q};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__qp;
qx.ui.core.queue.Layout.add(this);
},__qr:{},setLayoutProperties:function(c){if(c==null){return;
}var d=this.__qq;

if(!d){d=this.__qq={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(c);
}for(var e in c){if(c[e]==null){delete d[e];
}else{d[e]=c[e];
}}},getLayoutProperties:function(){return this.__qq||this.__qr;
},clearLayoutProperties:function(){delete this.__qq;
},updateLayoutProperties:function(X){var Y=this._getLayout();

if(Y){var ba;
{};
Y.invalidateChildrenCache();
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
var b=this.__qq;

if(b){a.__qq=qx.lang.Object.clone(b);
}return a;
}},destruct:function(){this.$$parent=this.$$subparent=this.__qq=this.__ql=this.__qp=this.__qn=null;
}});
})();
(function(){var eQ="px",eP="Boolean",eO="qx.event.type.Mouse",eN="qx.event.type.Drag",eM="visible",eL="qx.event.type.Focus",eK="on",eJ="Integer",eI="excluded",eH="qx.event.type.Data",et="_applyPadding",es="qx.event.type.Event",er="hidden",eq="contextmenu",ep="String",eo="tabIndex",en="backgroundColor",em="focused",ek="changeVisibility",ej="mshtml",eX="hovered",eY="qx.event.type.KeySequence",eV="qx.client",eW="absolute",eT="drag",eU="div",eR="disabled",eS="move",fa="dragstart",fb="qx.dynlocale",eA="dragchange",ez="dragend",eC="resize",eB="Decorator",eE="zIndex",eD="$$widget",eG="opacity",eF="default",ey="Color",ex="changeToolTipText",cY="beforeContextmenuOpen",da="_applyNativeContextMenu",db="_applyBackgroundColor",dc="_applyFocusable",dd="changeShadow",de="qx.event.type.KeyInput",df="__pp",dg="createChildControl",dh="Font",di="_applyShadow",ff="_applyEnabled",fe="_applySelectable",fd="Number",fc="_applyKeepActive",fj="__pq",fi="_applyVisibility",fh="repeat",fg="qxDraggable",fl="__pr",fk="syncAppearance",dI="paddingLeft",dJ="_applyDroppable",dG="#",dH="qx.event.type.MouseWheel",dM="_applyCursor",dN="_applyDraggable",dK="__pu",dL="changeTextColor",dE="changeContextMenu",dF="paddingTop",dr="__pl",dq="changeSelectable",dt="hideFocus",ds="none",dm="outline",dl="_applyAppearance",dp="_applyOpacity",dn="url(",dk=")",dj="qx.ui.core.Widget",dS="_applyFont",dT="cursor",dU="__pm",dV="qxDroppable",dO="changeZIndex",dP="changeEnabled",dQ="changeFont",dR="_applyDecorator",dW="_applyZIndex",dX="_applyTextColor",dB="qx.ui.menu.Menu",dA="_applyToolTipText",dz="true",dy="widget",dx="changeDecorator",dw="_applyTabIndex",dv="changeAppearance",du="shorthand",dD="/",dC="",dY="_applyContextMenu",ea="paddingBottom",eb="changeNativeContextMenu",ec="qx.ui.tooltip.ToolTip",ed="qxKeepActive",ee="_applyKeepFocus",ef="paddingRight",eg="changeBackgroundColor",eh="changeLocale",ei="__py",ew="qxKeepFocus",ev="qx/static/blank.gif",eu="__pw";
qx.Class.define(dj,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__pl=this._createContainerElement();
this.__pm=this.__px();
this.__pl.add(this.__pm);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:es,disappear:es,createChildControl:eH,resize:eH,move:eH,syncAppearance:eH,mousemove:eO,mouseover:eO,mouseout:eO,mousedown:eO,mouseup:eO,click:eO,dblclick:eO,contextmenu:eO,beforeContextmenuOpen:eO,mousewheel:dH,keyup:eY,keydown:eY,keypress:eY,keyinput:de,focus:eL,blur:eL,focusin:eL,focusout:eL,activate:eL,deactivate:eL,capture:es,losecapture:es,drop:eN,dragleave:eN,dragover:eN,drag:eN,dragstart:eN,dragend:eN,dragchange:eN,droprequest:eN},properties:{paddingTop:{check:eJ,init:0,apply:et,themeable:true},paddingRight:{check:eJ,init:0,apply:et,themeable:true},paddingBottom:{check:eJ,init:0,apply:et,themeable:true},paddingLeft:{check:eJ,init:0,apply:et,themeable:true},padding:{group:[dF,ef,ea,dI],mode:du,themeable:true},zIndex:{nullable:true,init:null,apply:dW,event:dO,check:eJ,themeable:true},decorator:{nullable:true,init:null,apply:dR,event:dx,check:eB,themeable:true},shadow:{nullable:true,init:null,apply:di,event:dd,check:eB,themeable:true},backgroundColor:{nullable:true,check:ey,apply:db,event:eg,themeable:true},textColor:{nullable:true,check:ey,apply:dX,event:dL,themeable:true,inheritable:true},font:{nullable:true,apply:dS,check:dh,event:dQ,themeable:true,inheritable:true,dispose:true},opacity:{check:fd,apply:dp,themeable:true,nullable:true,init:null},cursor:{check:ep,apply:dM,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:ec,nullable:true},toolTipText:{check:ep,nullable:true,event:ex,apply:dA},toolTipIcon:{check:ep,nullable:true,event:ex},blockToolTip:{check:eP,init:false},visibility:{check:[eM,er,eI],init:eM,apply:fi,event:ek},enabled:{init:true,check:eP,inheritable:true,apply:ff,event:dP},anonymous:{init:false,check:eP},tabIndex:{check:eJ,nullable:true,apply:dw},focusable:{check:eP,init:false,apply:dc},keepFocus:{check:eP,init:false,apply:ee},keepActive:{check:eP,init:false,apply:fc},draggable:{check:eP,init:false,apply:dN},droppable:{check:eP,init:false,apply:dJ},selectable:{check:eP,init:false,event:dq,apply:fe},contextMenu:{check:dB,apply:dY,nullable:true,event:dE},nativeContextMenu:{check:eP,init:false,themeable:true,event:eb,apply:da},appearance:{check:ep,init:dy,apply:dl,event:dv}},statics:{DEBUG:false,getWidgetByElement:function(gJ){while(gJ){var gK=gJ.$$widget;
if(gK!=null){return qx.core.ObjectRegistry.fromHashCode(gK);
}gJ=gJ.parentNode;
}return null;
},contains:function(parent,A){while(A){if(parent==A){return true;
}A=A.getLayoutParent();
}return false;
},__pn:new qx.ui.core.DecoratorFactory(),__po:new qx.ui.core.DecoratorFactory()},members:{__pl:null,__pm:null,__pp:null,__pq:null,__pr:null,__ps:null,__pt:null,__pu:null,_getLayout:function(){return this.__pu;
},_setLayout:function(s){{};

if(this.__pu){this.__pu.connectToWidget(null);
}
if(s){s.connectToWidget(this);
}this.__pu=s;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var B=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(B);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(B);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__pv:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var gD=qx.theme.manager.Decoration.getInstance();
var gF=gD.resolve(a).getInsets();
var gE=gD.resolve(b).getInsets();

if(gF.top!=gE.top||gF.right!=gE.right||gF.bottom!=gE.bottom||gF.left!=gE.left){return true;
}return false;
},renderLayout:function(gL,top,gM,gN){var gW=arguments.callee.base.call(this,gL,top,gM,gN);
if(!gW){return;
}var gP=this.getContainerElement();
var content=this.getContentElement();
var gT=gW.size||this._updateInsets;
var gX=eQ;
var gU={};
if(gW.position){gU.left=gL+gX;
gU.top=top+gX;
}if(gW.size){gU.width=gM+gX;
gU.height=gN+gX;
}
if(gW.position||gW.size){gP.setStyles(gU);
}
if(gT||gW.local||gW.margin){var gO=this.getInsets();
var innerWidth=gM-gO.left-gO.right;
var innerHeight=gN-gO.top-gO.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var gR={};

if(this._updateInsets){gR.left=gO.left+gX;
gR.top=gO.top+gX;
}
if(gT){gR.width=innerWidth+gX;
gR.height=innerHeight+gX;
}
if(gT||this._updateInsets){content.setStyles(gR);
}
if(gW.size){var gV=this.__pr;

if(gV){gV.setStyles({width:gM+eQ,height:gN+eQ});
}}
if(gW.size||this._updateInsets){if(this.__pp){this.__pp.resize(gM,gN);
}}
if(gW.size){if(this.__pq){var gO=this.__pq.getInsets();
var gS=gM+gO.left+gO.right;
var gQ=gN+gO.top+gO.bottom;
this.__pq.resize(gS,gQ);
}}
if(gT||gW.local||gW.margin){if(this.__pu&&this.hasLayoutChildren()){this.__pu.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(gW.position&&this.hasListener(eS)){this.fireDataEvent(eS,this.getBounds());
}
if(gW.size&&this.hasListener(eC)){this.fireDataEvent(eC,this.getBounds());
}delete this._updateInsets;
return gW;
},__pw:null,clearSeparators:function(){var N=this.__pw;

if(!N){return;
}var O=qx.ui.core.Widget.__pn;
var content=this.getContentElement();
var M;

for(var i=0,l=N.length;i<l;i++){M=N[i];
O.poolDecorator(M);
content.remove(M);
}N.length=0;
},renderSeparator:function(fD,fE){var fF=qx.ui.core.Widget.__pn.getDecoratorElement(fD);
this.getContentElement().add(fF);
fF.resize(fE.width,fE.height);
fF.setStyles({left:fE.left+eQ,top:fE.top+eQ});
if(!this.__pw){this.__pw=[fF];
}else{this.__pw.push(fF);
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

if(this.__pu){this.__pu.invalidateLayoutCache();
}},_getContentHint:function(){var gk=this.__pu;

if(gk){if(this.hasLayoutChildren()){var gj;
var gl=gk.getSizeHint();
{};
return gl;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(E){var I=this.getInsets();
var L=I.left+I.right;
var K=I.top+I.bottom;
var J=E-L;
var G=this._getLayout();

if(G&&G.hasHeightForWidth()){var F=G.getHeightForWidth(E);
}else{F=this._getContentHeightForWidth(J);
}var H=F+K;
return H;
},_getContentHeightForWidth:function(gv){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var h=this.getPaddingRight();
var k=this.getPaddingBottom();
var j=this.getPaddingLeft();

if(this.__pp){var g=this.__pp.getInsets();
{};
top+=g.top;
h+=g.right;
k+=g.bottom;
j+=g.left;
}return {"top":top,"right":h,"bottom":k,"left":j};
},getInnerSize:function(){var bN=this.getBounds();

if(!bN){return null;
}var bM=this.getInsets();
return {width:bN.width-bM.left-bM.right,height:bN.height-bM.top-bM.bottom};
},show:function(){this.setVisibility(eM);
},hide:function(){this.setVisibility(er);
},exclude:function(){this.setVisibility(eI);
},isVisible:function(){return this.getVisibility()===eM;
},isHidden:function(){return this.getVisibility()!==eM;
},isExcluded:function(){return this.getVisibility()===eI;
},isSeeable:function(){var w=this.getContainerElement().getDomElement();

if(w){return w.offsetWidth>0;
}var v=this;

do{if(!v.isVisible()){return false;
}
if(v.isRootWidget()){return true;
}v=v.getLayoutParent();
}while(v);
return false;
},_createContainerElement:function(){var bi=new qx.html.Element(eU);
{};
bi.setStyles({"position":eW,"zIndex":0});
bi.setAttribute(eD,this.toHashCode());
{};
return bi;
},__px:function(){var gI=this._createContentElement();
{};
gI.setStyles({"position":eW,"zIndex":10});
return gI;
},_createContentElement:function(){var bX=new qx.html.Element(eU);
bX.setStyles({"overflowX":er,"overflowY":er});
return bX;
},getContainerElement:function(){return this.__pl;
},getContentElement:function(){return this.__pm;
},getDecoratorElement:function(){return this.__pp||null;
},getShadowElement:function(){return this.__pq||null;
},__py:null,getLayoutChildren:function(){var fU=this.__py;

if(!fU){return this.__pz;
}var fV;

for(var i=0,l=fU.length;i<l;i++){var fT=fU[i];

if(fT.hasUserBounds()||fT.isExcluded()){if(fV==null){fV=fU.concat();
}qx.lang.Array.remove(fV,fT);
}}return fV||fU;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var ft=this.__pu;

if(ft){ft.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var bx=this.__py;

if(!bx){return false;
}var by;

for(var i=0,l=bx.length;i<l;i++){by=bx[i];

if(!by.hasUserBounds()&&!by.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__pz:[],_getChildren:function(){return this.__py||this.__pz;
},_indexOf:function(bG){var bH=this.__py;

if(!bH){return -1;
}return bH.indexOf(bG);
},_hasChildren:function(){var gi=this.__py;
return gi!=null&&(!!gi[0]);
},addChildrenToQueue:function(gq){var gr=this.__py;

if(!gr){return;
}var gs;

for(var i=0,l=gr.length;i<l;i++){gs=gr[i];
gq[gs.$$hash]=gs;
gs.addChildrenToQueue(gq);
}},_add:function(cC,cD){if(cC.getLayoutParent()==this){qx.lang.Array.remove(this.__py,cC);
}
if(this.__py){this.__py.push(cC);
}else{this.__py=[cC];
}this.__pA(cC,cD);
},_addAt:function(bO,bP,bQ){if(!this.__py){this.__py=[];
}if(bO.getLayoutParent()==this){qx.lang.Array.remove(this.__py,bO);
}var bR=this.__py[bP];

if(bR===bO){return bO.setLayoutProperties(bQ);
}
if(bR){qx.lang.Array.insertBefore(this.__py,bO,bR);
}else{this.__py.push(bO);
}this.__pA(bO,bQ);
},_addBefore:function(cO,cP,cQ){{};

if(cO==cP){return;
}
if(!this.__py){this.__py=[];
}if(cO.getLayoutParent()==this){qx.lang.Array.remove(this.__py,cO);
}qx.lang.Array.insertBefore(this.__py,cO,cP);
this.__pA(cO,cQ);
},_addAfter:function(gc,gd,ge){{};

if(gc==gd){return;
}
if(!this.__py){this.__py=[];
}if(gc.getLayoutParent()==this){qx.lang.Array.remove(this.__py,gc);
}qx.lang.Array.insertAfter(this.__py,gc,gd);
this.__pA(gc,ge);
},_remove:function(bz){if(!this.__py){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__py,bz);
this.__pB(bz);
},_removeAt:function(t){if(!this.__py){throw new Error("This widget has no children!");
}var u=this.__py[t];
qx.lang.Array.removeAt(this.__py,t);
this.__pB(u);
return u;
},_removeAll:function(){if(!this.__py){return;
}var gw=this.__py.concat();
this.__py.length=0;

for(var i=gw.length-1;i>=0;i--){this.__pB(gw[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__pA:function(gm,gn){{};
var parent=gm.getLayoutParent();

if(parent&&parent!=this){parent._remove(gm);
}gm.setLayoutParent(this);
if(gn){gm.setLayoutProperties(gn);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(gm);
}},__pB:function(gx){{};

if(gx.getLayoutParent()!==this){throw new Error("Remove Error: "+gx+" is not a child of this widget!");
}gx.setLayoutParent(null);
if(this.__pu){this.__pu.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(gx);
}},capture:function(bC){this.getContainerElement().capture(bC);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(bI,bJ,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__pr){return;
}var go=this.__pr=new qx.html.Element;
{};
go.setStyles({position:eW,top:0,left:0,zIndex:7});
var gp=this.getBounds();

if(gp){this.__pr.setStyles({width:gp.width+eQ,height:gp.height+eQ});
}if(qx.core.Variant.isSet(eV,ej)){go.setStyles({backgroundImage:dn+qx.util.ResourceManager.getInstance().toUri(ev)+dk,backgroundRepeat:fh});
}this.getContainerElement().add(go);
},_applyDecorator:function(fm,fn){{};
var fr=qx.ui.core.Widget.__pn;
var fp=this.getContainerElement();
if(!this.__pr&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(fn){fp.remove(this.__pp);
fr.poolDecorator(this.__pp);
}if(fm){var fq=this.__pp=fr.getDecoratorElement(fm);
fq.setStyle(eE,5);
var fo=this.getBackgroundColor();
fq.tint(fo);
fp.add(fq);
}else{delete this.__pp;
this._applyBackgroundColor(this.getBackgroundColor());
}if(fm&&!fn&&fo){this.getContainerElement().setStyle(en,null);
}if(this.__pv(fn,fm)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(fm){var fs=this.getBounds();

if(fs){fq.resize(fs.width,fs.height);
this.__pr&&
this.__pr.setStyles({width:fs.width+eQ,height:fs.height+eQ});
}}},_applyShadow:function(W,X){var bf=qx.ui.core.Widget.__po;
var ba=this.getContainerElement();
if(X){ba.remove(this.__pq);
bf.poolDecorator(this.__pq);
}if(W){var bc=this.__pq=bf.getDecoratorElement(W);
ba.add(bc);
var be=bc.getInsets();
bc.setStyles({left:(-be.left)+eQ,top:(-be.top)+eQ});
var bd=this.getBounds();

if(bd){var bb=bd.width+be.left+be.right;
var Y=bd.height+be.top+be.bottom;
bc.resize(bb,Y);
}bc.tint(null);
}else{delete this.__pq;
}},_applyToolTipText:function(c,d){if(qx.core.Variant.isSet(fb,eK)){if(this.__pt){return;
}var f=qx.locale.Manager.getInstance();
this.__pt=f.addListener(eh,function(){if(c&&c.translate){this.setToolTipText(c.translate());
}},this);
}},_applyTextColor:function(q,r){},_applyZIndex:function(o,p){this.getContainerElement().setStyle(eE,o==null?0:o);
},_applyVisibility:function(cL,cM){var cN=this.getContainerElement();

if(cL===eM){cN.show();
}else{cN.hide();
}var parent=this.$$parent;

if(parent&&(cM==null||cL==null||cM===eI||cL===eI)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(bs,bt){this.getContainerElement().setStyle(eG,bs==1?null:bs);
if(qx.core.Variant.isSet(eV,ej)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var bu=(bs==1||bs==null)?null:0.99;
this.getContentElement().setStyle(eG,bu);
}}},_applyCursor:function(gG,gH){if(gG==null&&!this.isSelectable()){gG=eF;
}this.getContainerElement().setStyle(dT,gG,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(fW,fX){var fY=this.getBackgroundColor();
var gb=this.getContainerElement();

if(this.__pp){this.__pp.tint(fY);
gb.setStyle(en,null);
}else{var ga=qx.theme.manager.Color.getInstance().resolve(fY);
gb.setStyle(en,ga);
}},_applyFont:function(ck,cl){},__pC:null,$$stateChanges:null,_forwardStates:null,hasState:function(C){var D=this.__pC;
return D&&D[C];
},addState:function(gy){var gz=this.__pC;

if(!gz){gz=this.__pC={};
}
if(gz[gy]){return;
}this.__pC[gy]=true;
if(gy===eX){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gC=this.__pF;

if(forward&&forward[gy]&&gC){var gA;

for(var gB in gC){gA=gC[gB];

if(gA instanceof qx.ui.core.Widget){gC[gB].addState(gy);
}}}},removeState:function(cT){var cU=this.__pC;

if(!cU||!cU[cT]){return;
}delete this.__pC[cT];
if(cT===eX){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cX=this.__pF;

if(forward&&forward[cT]&&cX){for(var cW in cX){var cV=cX[cW];

if(cV instanceof qx.ui.core.Widget){cV.removeState(cT);
}}}},replaceState:function(ce,cf){var cg=this.__pC;

if(!cg){cg=this.__pC={};
}
if(!cg[cf]){cg[cf]=true;
}
if(cg[ce]){delete cg[ce];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cj=this.__pF;

if(forward&&forward[cf]&&cj){for(var ci in cj){var ch=cj[ci];

if(ch instanceof qx.ui.core.Widget){ch.replaceState(ce,cf);
}}}},__pD:null,__pE:null,syncAppearance:function(){var fN=this.__pC;
var fM=this.__pD;
var fO=qx.theme.manager.Appearance.getInstance();
var fK=qx.core.Property.$$method.setThemed;
var fS=qx.core.Property.$$method.resetThemed;
if(this.__pE){delete this.__pE;
if(fM){var fJ=fO.styleFrom(fM,fN,null,this.getAppearance());
if(fJ){fM=null;
}}}if(!fM){var fL=this;
var fR=[];

do{fR.push(fL.$$subcontrol||fL.getAppearance());
}while(fL=fL.$$subparent);
fM=this.__pD=fR.reverse().join(dD).replace(/#[0-9]+/g,dC);
}var fP=fO.styleFrom(fM,fN,null,this.getAppearance());

if(fP){var fQ;

if(fJ){for(var fQ in fJ){if(fP[fQ]===undefined){this[fS[fQ]]();
}}}{};
for(var fQ in fP){fP[fQ]===undefined?this[fS[fQ]]():this[fK[fQ]](fP[fQ]);
}}else if(fJ){for(var fQ in fJ){this[fS[fQ]]();
}}this.fireDataEvent(fk,this.__pC);
},_applyAppearance:function(ca,cb){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__ps){qx.ui.core.queue.Appearance.add(this);
this.__ps=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__pE=true;
qx.ui.core.queue.Appearance.add(this);
var fI=this.__pF;

if(fI){var fG;

for(var fH in fI){fG=fI[fH];

if(fG instanceof qx.ui.core.Widget){fG.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var cB=this;

while(cB.getAnonymous()){cB=cB.getLayoutParent();

if(!cB){return null;
}}return cB;
},getFocusTarget:function(){var cq=this;

if(!cq.getEnabled()){return null;
}
while(cq.getAnonymous()||!cq.getFocusable()){cq=cq.getLayoutParent();

if(!cq||!cq.getEnabled()){return null;
}}return cq;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(P,Q){var R=this.getFocusElement();
if(P){var S=this.getTabIndex();

if(S==null){S=1;
}R.setAttribute(eo,S);
if(qx.core.Variant.isSet(eV,ej)){R.setAttribute(dt,dz);
}else{R.setStyle(dm,ds);
}}else{if(R.isNativelyFocusable()){R.setAttribute(eo,-1);
}else if(Q){R.setAttribute(eo,null);
}}},_applyKeepFocus:function(bq){var br=this.getFocusElement();
br.setAttribute(ew,bq?eK:null);
},_applyKeepActive:function(bv){var bw=this.getContainerElement();
bw.setAttribute(ed,bv?eK:null);
},_applyTabIndex:function(V){if(V==null){V=1;
}else if(V<1||V>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&V!=null){this.getFocusElement().setAttribute(eo,V);
}},_applySelectable:function(bY){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(bY);
this.getContentElement().setSelectable(bY);
},_applyEnabled:function(cc,cd){if(cc===false){this.addState(eR);
this.removeState(eX);
if(this.isFocusable()){this.removeState(em);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(eR);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(cE,cF,name){},_applyContextMenu:function(co,cp){if(cp){cp.removeState(eq);

if(cp.getOpener()==this){cp.resetOpener();
}
if(!co){this.removeListener(eq,this._onContextMenuOpen);
cp.removeListener(ek,this._onBeforeContextMenuOpen,this);
}}
if(co){co.setOpener(this);
co.addState(eq);

if(!cp){this.addListener(eq,this._onContextMenuOpen);
co.addListener(ek,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==eM&&this.hasListener(cY)){this.fireDataEvent(cY,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(y,z){if(!this.isEnabled()&&y===true){y=false;
}qx.ui.core.DragDropCursor.getInstance();
if(y){this.addListener(fa,this._onDragStart);
this.addListener(eT,this._onDrag);
this.addListener(ez,this._onDragEnd);
this.addListener(eA,this._onDragChange);
}else{this.removeListener(fa,this._onDragStart);
this.removeListener(eT,this._onDrag);
this.removeListener(ez,this._onDragEnd);
this.removeListener(eA,this._onDragChange);
}this.getContainerElement().setAttribute(fg,y?eK:null);
},_applyDroppable:function(gf,gg){if(!this.isEnabled()&&gf===true){gf=false;
}this.getContainerElement().setAttribute(dV,gf?eK:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(eF);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var bj=qx.ui.core.DragDropCursor.getInstance();
var bk=e.getCurrentAction();
bk?bj.setAction(bk):bj.resetAction();
},visualizeFocus:function(){this.addState(em);
},visualizeBlur:function(){this.removeState(em);
},scrollChildIntoView:function(bm,bn,bo,bp){this.scrollChildIntoViewX(bm,bn,bp);
this.scrollChildIntoViewY(bm,bo,bp);
},scrollChildIntoViewX:function(bD,bE,bF){this.getContentElement().scrollChildIntoViewX(bD.getContainerElement(),bE,bF);
},scrollChildIntoViewY:function(fy,fz,fA){this.getContentElement().scrollChildIntoViewY(fy.getContainerElement(),fz,fA);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gh){if(!this.__pF){return false;
}return !!this.__pF[gh];
},__pF:null,_getCreatedChildControls:function(){return this.__pF;
},getChildControl:function(bU,bV){if(!this.__pF){if(bV){return null;
}this.__pF={};
}var bW=this.__pF[bU];

if(bW){return bW;
}
if(bV===true){return null;
}return this._createChildControl(bU);
},_showChildControl:function(fB){var fC=this.getChildControl(fB);
fC.show();
return fC;
},_excludeChildControl:function(bA){var bB=this.getChildControl(bA,true);

if(bB){bB.exclude();
}},_isChildControlVisible:function(bK){var bL=this.getChildControl(bK,true);

if(bL){return bL.isVisible();
}return false;
},_createChildControl:function(cG){if(!this.__pF){this.__pF={};
}else if(this.__pF[cG]){throw new Error("Child control '"+cG+"' already created!");
}var cK=cG.indexOf(dG);

if(cK==-1){var cH=this._createChildControlImpl(cG);
}else{var cH=this._createChildControlImpl(cG.substring(0,cK));
}
if(!cH){throw new Error("Unsupported control: "+cG);
}cH.$$subcontrol=cG;
cH.$$subparent=this;
var cI=this.__pC;
var forward=this._forwardStates;

if(cI&&forward&&cH instanceof qx.ui.core.Widget){for(var cJ in cI){if(forward[cJ]){cH.addState(cJ);
}}}this.fireDataEvent(dg,cH);
return this.__pF[cG]=cH;
},_createChildControlImpl:function(bl){return null;
},_disposeChildControls:function(){var fx=this.__pF;

if(!fx){return;
}var fv=qx.ui.core.Widget;

for(var fw in fx){var fu=fx[fw];

if(!fv.contains(this,fu)){fu.destroy();
}else{fu.dispose();
}}delete this.__pF;
},_findTopControl:function(){var x=this;

while(x){if(!x.$$subparent){return x;
}x=x.$$subparent;
}return null;
},getContainerLocation:function(cR){var cS=this.getContainerElement().getDomElement();
return cS?qx.bom.element.Location.get(cS,cR):null;
},getContentLocation:function(gt){var gu=this.getContentElement().getDomElement();
return gu?qx.bom.element.Location.get(gu,gt):null;
},setDomLeft:function(cm){var cn=this.getContainerElement().getDomElement();

if(cn){cn.style.left=cm+eQ;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(T){var U=this.getContainerElement().getDomElement();

if(U){U.style.top=T+eQ;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(bS,top){var bT=this.getContainerElement().getDomElement();

if(bT){bT.style.left=bS+eQ;
bT.style.top=top+eQ;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var bg=arguments.callee.base.call(this);

if(this.getChildren){var bh=this.getChildren();

for(var i=0,l=bh.length;i<l;i++){bg.add(bh[i].clone());
}}return bg;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(fb,eK)){if(this.__pt){qx.locale.Manager.getInstance().removeListenerById(this.__pt);
}}this.getContainerElement().setAttribute(eD,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var n=qx.ui.core.Widget;
var m=this.getContainerElement();

if(this.__pp){m.remove(this.__pp);
n.__pn.poolDecorator(this.__pp);
}
if(this.__pq){m.remove(this.__pq);
n.__po.poolDecorator(this.__pq);
}this.clearSeparators();
this.__pp=this.__pq=this.__pw=null;
}else{this._disposeArray(eu);
this._disposeObjects(df,fj);
}this._disposeArray(ei);
this.__pC=this.__pF=null;
this._disposeObjects(dK,dr,dU,fl);
}});
})();
(function(){var s="label",r="icon",q="Boolean",p="both",o="String",n="left",m="changeGap",l="changeShow",k="bottom",j="_applyCenter",F="changeIcon",E="qx.ui.basic.Atom",D="changeLabel",C="Integer",B="_applyIconPosition",A="top",z="right",y="_applyRich",x="_applyIcon",w="_applyShow",u="_applyLabel",v="_applyGap",t="atom";
qx.Class.define(E,{extend:qx.ui.core.Widget,construct:function(a,b){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(a!=null){this.setLabel(a);
}
if(b!=null){this.setIcon(b);
}},properties:{appearance:{refine:true,init:t},label:{apply:u,nullable:true,check:o,event:D},rich:{check:q,init:false,apply:y},icon:{check:o,apply:x,nullable:true,themeable:true,event:F},gap:{check:C,nullable:false,event:m,apply:v,themeable:true,init:4},show:{init:p,check:[p,s,r],themeable:true,inheritable:true,apply:w,event:l},iconPosition:{init:n,check:[A,z,k,n],themeable:true,apply:B},center:{init:false,check:q,themeable:true,apply:j}},members:{_createChildControlImpl:function(f){var g;

switch(f){case s:g=new qx.ui.basic.Label(this.getLabel());
g.setAnonymous(true);
g.setRich(this.getRich());
this._add(g);

if(this.getLabel()==null||this.getShow()===r){g.exclude();
}break;
case r:g=new qx.ui.basic.Image(this.getIcon());
g.setAnonymous(true);
this._addAt(g,0);

if(this.getIcon()==null||this.getShow()===s){g.exclude();
}break;
}return g||arguments.callee.base.call(this,f);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===r){this._excludeChildControl(s);
}else{this._showChildControl(s);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===s){this._excludeChildControl(r);
}else{this._showChildControl(r);
}},_applyLabel:function(c,d){var e=this.getChildControl(s,true);

if(e){e.setValue(c);
}this._handleLabel();
},_applyRich:function(N,O){var P=this.getChildControl(s,true);

if(P){P.setRich(N);
}},_applyIcon:function(I,J){var K=this.getChildControl(r,true);

if(K){K.setSource(I);
}this._handleIcon();
},_applyGap:function(G,H){this._getLayout().setGap(G);
},_applyShow:function(h,i){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(Q,R){this._getLayout().setIconPosition(Q);
},_applyCenter:function(L,M){this._getLayout().setCenter(L);
}}});
})();
(function(){var w="middle",v="qx.ui.layout.Util",u="left",t="center",s="top",r="bottom",q="right";
qx.Class.define(v,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(x,y,z){var B,F,A,G;
var C=y>z;
var H=Math.abs(y-z);
var I,D;
var E={};

for(F in x){B=x[F];
E[F]={potential:C?B.max-B.value:B.value-B.min,flex:C?B.flex:1/B.flex,offset:0};
}while(H!=0){G=Infinity;
A=0;

for(F in E){B=E[F];

if(B.potential>0){A+=B.flex;
G=Math.min(G,B.potential/B.flex);
}}if(A==0){break;
}G=Math.min(H,G*A)/A;
I=0;

for(F in E){B=E[F];

if(B.potential>0){D=Math.min(H,B.potential,Math.ceil(G*B.flex));
I+=D-G*B.flex;

if(I>=1){I-=1;
D-=1;
}B.potential-=D;

if(C){B.offset+=D;
}else{B.offset-=D;
}H-=D;
}}}return E;
},computeHorizontalAlignOffset:function(bk,bl,bm,bn,bo){if(bn==null){bn=0;
}
if(bo==null){bo=0;
}var bp=0;

switch(bk){case u:bp=bn;
break;
case q:bp=bm-bl-bo;
break;
case t:bp=Math.round((bm-bl)/2);
if(bp<bn){bp=bn;
}else if(bp<bo){bp=Math.max(bn,bm-bl-bo);
}break;
}return bp;
},computeVerticalAlignOffset:function(J,K,L,M,N){if(M==null){M=0;
}
if(N==null){N=0;
}var O=0;

switch(J){case s:O=M;
break;
case r:O=L-K-N;
break;
case w:O=Math.round((L-K)/2);
if(O<M){O=M;
}else if(O<N){O=Math.max(M,L-K-N);
}break;
}return O;
},collapseMargins:function(T){var U=0,W=0;

for(var i=0,l=arguments.length;i<l;i++){var V=arguments[i];

if(V<0){W=Math.min(W,V);
}else if(V>0){U=Math.max(U,V);
}}return U+W;
},computeHorizontalGaps:function(P,Q,R){if(Q==null){Q=0;
}var S=0;

if(R){S+=P[0].getMarginLeft();

for(var i=1,l=P.length;i<l;i+=1){S+=this.collapseMargins(Q,P[i-1].getMarginRight(),P[i].getMarginLeft());
}S+=P[l-1].getMarginRight();
}else{for(var i=1,l=P.length;i<l;i+=1){S+=P[i].getMarginLeft()+P[i].getMarginRight();
}S+=(Q*(l-1));
}return S;
},computeVerticalGaps:function(bg,bh,bi){if(bh==null){bh=0;
}var bj=0;

if(bi){bj+=bg[0].getMarginTop();

for(var i=1,l=bg.length;i<l;i+=1){bj+=this.collapseMargins(bh,bg[i-1].getMarginBottom(),bg[i].getMarginTop());
}bj+=bg[l-1].getMarginBottom();
}else{for(var i=1,l=bg.length;i<l;i+=1){bj+=bg[i].getMarginTop()+bg[i].getMarginBottom();
}bj+=(bh*(l-1));
}return bj;
},computeHorizontalSeparatorGaps:function(a,b,c){var f=qx.theme.manager.Decoration.getInstance().resolve(c);
var e=f.getInsets();
var d=e.left+e.right;
var g=0;

for(var i=0,l=a.length;i<l;i++){var h=a[i];
g+=h.getMarginLeft()+h.getMarginRight();
}g+=(b+d+b)*(l-1);
return g;
},computeVerticalSeparatorGaps:function(X,Y,ba){var bd=qx.theme.manager.Decoration.getInstance().resolve(ba);
var bc=bd.getInsets();
var bb=bc.top+bc.bottom;
var be=0;

for(var i=0,l=X.length;i<l;i++){var bf=X[i];
be+=bf.getMarginTop()+bf.getMarginBottom();
}be+=(Y+bb+Y)*(l-1);
return be;
},arrangeIdeals:function(j,k,m,n,o,p){if(k<j||o<n){if(k<j&&o<n){k=j;
o=n;
}else if(k<j){o-=(j-k);
k=j;
if(o<n){o=n;
}}else if(o<n){k-=(n-o);
o=n;
if(k<j){k=j;
}}}
if(k>m||o>p){if(k>m&&o>p){k=m;
o=p;
}else if(k>m){o+=(k-m);
k=m;
if(o>p){o=p;
}}else if(o>p){k+=(o-p);
o=p;
if(k>m){k=m;
}}}return {begin:k,end:o};
}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(c){return c.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(b){qx.event.Registration.addDispatcher(b);
}});
})();
(function(){var d="qx.event.handler.Object";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(e,f){return qx.Class.supportsEvent(e.constructor,f);
},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){}},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var m="interval",l="qx.event.Timer",k="_applyInterval",j="_applyEnabled",i="Boolean",h="qx.event.type.Event",g="Integer";
qx.Class.define(l,{extend:qx.core.Object,construct:function(s){arguments.callee.base.call(this);
this.setEnabled(false);

if(s!=null){this.setInterval(s);
}var self=this;
this.__kA=function(){self._oninterval.call(self);
};
},events:{"interval":h},statics:{once:function(a,b,c){var d=new qx.event.Timer(c);
d.addListener(m,function(e){d.stop();
a.call(b,e);
d.dispose();
b=null;
},b);
d.start();
return d;
}},properties:{enabled:{init:true,check:i,apply:j},interval:{check:g,init:1000,apply:k}},members:{__kB:null,__kA:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(q,r){if(r){window.clearInterval(this.__kB);
this.__kB=null;
}else if(q){this.__kB=window.setInterval(this.__kA,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(f){this.setInterval(f);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(p){this.stop();
this.startWith(p);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(m);
}})},destruct:function(){if(this.__kB){window.clearInterval(this.__kB);
}this.__kB=this.__kA=null;
}});
})();
(function(){var f="qx.event.handler.UserAction";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){arguments.callee.base.call(this);
this.__rB=h;
this.__rC=h.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__rB:null,__rC:null,canHandleEvent:function(a,b){},registerEvent:function(i,j,k){},unregisterEvent:function(c,d,e){}},destruct:function(){this.__rB=this.__rC=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var U="qx.client",T="mouseup",S="click",R="mousedown",Q="contextmenu",P="mousewheel",O="dblclick",N="mshtml",M="mouseover",L="mouseout",G="DOMMouseScroll",K="mousemove",J="on",F="mshtml|webkit|opera",E="useraction",I="gecko|webkit",H="qx.event.handler.Mouse";
qx.Class.define(H,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(W){arguments.callee.base.call(this);
this.__kC=W;
this.__kD=W.getWindow();
this.__kE=this.__kD.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__kF:null,__kG:null,__kH:null,__kI:null,__kJ:null,__kC:null,__kD:null,__kE:null,canHandleEvent:function(v,w){},registerEvent:qx.bom.client.System.IPHONE?
function(h,i,j){h[J+i]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(x,y,z){x[J+y]=undefined;
}:qx.lang.Function.returnNull,__kK:function(q,r,s){if(!s){s=q.target||q.srcElement;
}if(s&&s.nodeType){qx.event.Registration.fireEvent(s,r||q.type,r==P?qx.event.type.MouseWheel:qx.event.type.Mouse,[q,s,null,true,true]);
}qx.event.Registration.fireEvent(this.__kD,E,qx.event.type.Data,[r||q.type]);
},_initButtonObserver:function(){this.__kF=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__kE,R,this.__kF);
Event.addNativeListener(this.__kE,T,this.__kF);
Event.addNativeListener(this.__kE,S,this.__kF);
Event.addNativeListener(this.__kE,O,this.__kF);
Event.addNativeListener(this.__kE,Q,this.__kF);
},_initMoveObserver:function(){this.__kG=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__kE,K,this.__kG);
Event.addNativeListener(this.__kE,M,this.__kG);
Event.addNativeListener(this.__kE,L,this.__kG);
},_initWheelObserver:function(){this.__kH=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var t=qx.core.Variant.isSet(U,F)?P:G;
var u=qx.core.Variant.isSet(U,N)?this.__kE:this.__kD;
Event.addNativeListener(u,t,this.__kH);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__kE,R,this.__kF);
Event.removeNativeListener(this.__kE,T,this.__kF);
Event.removeNativeListener(this.__kE,S,this.__kF);
Event.removeNativeListener(this.__kE,O,this.__kF);
Event.removeNativeListener(this.__kE,Q,this.__kF);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__kE,K,this.__kG);
Event.removeNativeListener(this.__kE,M,this.__kG);
Event.removeNativeListener(this.__kE,L,this.__kG);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var k=qx.core.Variant.isSet(U,F)?P:G;
var l=qx.core.Variant.isSet(U,N)?this.__kE:this.__kD;
Event.removeNativeListener(l,k,this.__kH);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(D){this.__kK(D);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(e){var f=e.type;
var g=e.target||e.srcElement;
if(qx.core.Variant.isSet(U,I)){if(g&&g.nodeType==3){g=g.parentNode;
}}
if(this.__kL){this.__kL(e,f,g);
}
if(this.__kN){this.__kN(e,f,g);
}this.__kK(e,f,g);

if(this.__kM){this.__kM(e,f,g);
}
if(this.__kO){this.__kO(e,f,g);
}this.__kI=f;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(V){this.__kK(V,P);
}),__kL:qx.core.Variant.select(U,{"webkit":function(X,Y,ba){if(qx.bom.client.Engine.VERSION<530){if(Y==Q){this.__kK(X,T,ba);
}}},"default":null}),__kM:qx.core.Variant.select(U,{"opera":function(A,B,C){if(B==T&&A.button==2){this.__kK(A,Q,C);
}},"default":null}),__kN:qx.core.Variant.select(U,{"mshtml":function(a,b,c){if(b==T&&this.__kI==S){this.__kK(a,R,c);
}else if(b==O){this.__kK(a,S,c);
}},"default":null}),__kO:qx.core.Variant.select(U,{"mshtml":null,"default":function(m,n,o){switch(n){case R:this.__kJ=o;
break;
case T:if(o!==this.__kJ){var p=qx.dom.Hierarchy.getCommonParent(o,this.__kJ);
this.__kK(m,S,p);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__kC=this.__kD=this.__kE=this.__kJ=null;
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var f="qx.client",e="qx.bom.Viewport";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"opera":function(a){if(qx.bom.client.Engine.VERSION<9.5){return (a||window).document.body.clientWidth;
}else{var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientWidth:b.body.clientWidth;
}},"webkit":function(i){if(qx.bom.client.Engine.VERSION<523.15){return (i||window).innerWidth;
}else{var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientWidth:j.body.clientWidth;
}},"default":function(g){var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}}),getHeight:qx.core.Variant.select(f,{"opera":function(k){if(qx.bom.client.Engine.VERSION<9.5){return (k||window).document.body.clientHeight;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}},"webkit":function(n){if(qx.bom.client.Engine.VERSION<523.15){return (n||window).innerHeight;
}else{var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientHeight:o.body.clientHeight;
}},"default":function(q){var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientHeight:r.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(f,{"mshtml":function(s){var t=(s||window).document;
return t.documentElement.scrollLeft||t.body.scrollLeft;
},"default":function(p){return (p||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(f,{"mshtml":function(c){var d=(c||window).document;
return d.documentElement.scrollTop||d.body.scrollTop;
},"default":function(m){return (m||window).pageYOffset;
}})}});
})();
(function(){var r="",q="qx.client",p="readOnly",o="accessKey",n="qx.bom.element.Attribute",m="rowSpan",l="vAlign",k="className",j="textContent",i="'",F="htmlFor",E="longDesc",D="cellSpacing",C="frameBorder",B="='",A="useMap",z="innerText",y="innerHTML",x="tabIndex",w="dateTime",u="maxLength",v="mshtml",s="cellPadding",t="colSpan";
qx.Class.define(n,{statics:{__kP:{names:{"class":k,"for":F,html:y,text:qx.core.Variant.isSet(q,v)?z:j,colspan:t,rowspan:m,valign:l,datetime:w,accesskey:o,tabindex:x,maxlength:u,readonly:p,longdesc:E,cellpadding:s,cellspacing:D,frameborder:C,usemap:A},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:r,maxLength:10000000,className:r,innerHTML:r,innerText:r,textContent:r,htmlFor:r,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(a){var b=[];
var d=this.__kP.runtime;

for(var c in a){if(!d[c]){b.push(c,B,a[c],i);
}}return b.join(r);
},get:qx.core.Variant.select(q,{"mshtml":function(J,name){var L=this.__kP;
var K;
name=L.names[name]||name;
if(L.original[name]){K=J.getAttribute(name,2);
}else if(L.property[name]){if(L.propertyDefault[name]&&K==L.propertyDefault[name]){return null;
}K=J[name];
}else{K=J.getAttribute(name);
}if(L.bools[name]){return !!K;
}return K;
},"default":function(f,name){var h=this.__kP;
var g;
name=h.names[name]||name;
if(h.property[name]){if(h.propertyDefault[name]&&g==h.propertyDefault[name]){return null;
}g=f[name];

if(g==null){g=f.getAttribute(name);
}}else{g=f.getAttribute(name);
}if(h.bools[name]){return !!g;
}return g;
}}),set:function(G,name,H){var I=this.__kP;
name=I.names[name]||name;
if(I.bools[name]){H=!!H;
}if(I.property[name]){if(H==null){H=I.propertyDefault[name];

if(H===undefined){H=null;
}}G[name]=H;
}else{if(H===true){G.setAttribute(name,name);
}else if(H===false||H===null){G.removeAttribute(name);
}else{G.setAttribute(name,H);
}}},reset:function(e,name){this.set(e,name,null);
}}});
})();
(function(){var g="qx.ui.core.MChildrenHandling";
qx.Mixin.define(g,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(f){return this._indexOf(f);
},add:function(a,b){this._add(a,b);
},addAt:function(c,d,e){this._addAt(c,d,e);
},addBefore:function(h,i,j){this._addBefore(h,i,j);
},addAfter:function(m,n,o){this._addAfter(m,n,o);
},remove:function(p){this._remove(p);
},removeAt:function(l){return this._removeAt(l);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(k){k.getChildren=k._getChildren;
k.hasChildren=k._hasChildren;
k.indexOf=k._indexOf;
k.add=k._add;
k.addAt=k._addAt;
k.addBefore=k._addBefore;
k.addAfter=k._addAfter;
k.remove=k._remove;
k.removeAt=k._removeAt;
k.removeAll=k._removeAll;
}}});
})();
(function(){var b="qx.ui.core.MLayoutHandling";
qx.Mixin.define(b,{members:{setLayout:function(a){return this._setLayout(a);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(h){arguments.callee.base.call(this);

if(h!=null){this._setLayout(h);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(i){this.fireNonBubblingEvent(b,qx.event.type.Data,[i]);
},_afterRemoveChild:function(e){this.fireNonBubblingEvent(a,qx.event.type.Data,[e]);
}},defer:function(f,g){qx.ui.core.MChildrenHandling.remap(g);
qx.ui.core.MLayoutHandling.remap(g);
}});
})();
(function(){var g="appearance",f="qx.ui.core.queue.Appearance";
qx.Class.define(f,{statics:{__kQ:{},remove:function(h){delete this.__kQ[h.$$hash];
},add:function(i){var j=this.__kQ;

if(j[i.$$hash]){return;
}j[i.$$hash]=i;
qx.ui.core.queue.Manager.scheduleFlush(g);
},has:function(e){return !!this.__kQ[e.$$hash];
},flush:function(){var d=qx.ui.core.queue.Visibility;
var a=this.__kQ;
var c;

for(var b in a){c=a[b];
delete a[b];
if(d.isVisible(c)){c.syncAppearance();
}else{c.$$stateChanges=true;
}}}}});
})();
(function(){var c="qx.ui.core.queue.Manager",b="useraction";
qx.Class.define(c,{statics:{__kU:false,__kV:{},__kW:0,MAX_RETRIES:10,scheduleFlush:function(h){var self=qx.ui.core.queue.Manager;
self.__kV[h]=true;

if(!self.__kU){self.__la.schedule();
self.__kU=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__kX){return;
}self.__kX=true;
self.__la.cancel();
var d=self.__kV;
self.__kY(function(){while(d.visibility||d.widget||d.appearance||d.layout||d.element){if(d.widget){delete d.widget;
qx.ui.core.queue.Widget.flush();
}
if(d.visibility){delete d.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(d.appearance){delete d.appearance;
qx.ui.core.queue.Appearance.flush();
}if(d.widget||d.visibility||d.appearance){continue;
}
if(d.layout){delete d.layout;
qx.ui.core.queue.Layout.flush();
}if(d.widget||d.visibility||d.appearance||d.layout){continue;
}
if(d.element){delete d.element;
qx.html.Element.flush();
}}},function(){self.__kU=false;
});
self.__kY(function(){if(d.dispose){delete d.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__kX=false;
});
self.__kW=0;
},__kY:function(f,g){var self=qx.ui.core.queue.Manager;

try{f();
}catch(e){{};
self.__kU=false;
self.__kX=false;
self.__kW+=1;

if(self.__kW<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__kW-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{g();
}}},defer:function(a){a.__la=new qx.util.DeferredCall(a.flush);
qx.html.Element._scheduleFlush=a.scheduleFlush;
qx.event.Registration.addListener(window,b,a.flush);
}});
})();
(function(){var c="qx.util.ObjectPool",b="Integer";
qx.Class.define(c,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.__qs={};

if(a!=null){this.setSize(a);
}},properties:{size:{check:b,init:Infinity}},members:{__qs:null,getObject:function(k){if(this.$$disposed){return;
}
if(!k){throw new Error("Class needs to be defined!");
}var m=null;
var n=this.__qs[k.classname];

if(n){m=n.pop();
}
if(m){m.$$pooled=false;
}else{m=new k;
}return m;
},poolObject:function(g){if(!this.__qs){return;
}var h=g.classname;
var j=this.__qs[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__qs[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var f=this.__qs;
var d,e,i,l;

for(d in f){e=f[d];

for(i=0,l=e.length;i<l;i++){e[i].dispose();
}}delete this.__qs;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var x="qx.client",w="gecko",v="div",u="inherit",t="text",s="value",r="",q="hidden",p="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",o="nowrap",O="auto",N="ellipsis",M="normal",L="label",K="px",J="crop",I="end",H="100%",G="visible",F="qx.bom.Label",D="Please use the setValue() method instead.",E="opera",B="Please use the getValue() method instead.",C="block",z="none",A="-1000px",y="absolute";
qx.Class.define(F,{statics:{__lb:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__lc:function(){var X=this.__le(false);
document.body.insertBefore(X,document.body.firstChild);
return this._textElement=X;
},__ld:function(){var c=this.__le(true);
document.body.insertBefore(c,document.body.firstChild);
return this._htmlElement=c;
},__le:function(P){var Q=qx.bom.Element.create(v);
var R=Q.style;
R.width=R.height=O;
R.left=R.top=A;
R.visibility=q;
R.position=y;
R.overflow=G;

if(P){R.whiteSpace=M;
}else{R.whiteSpace=o;

if(qx.core.Variant.isSet(x,w)){var S=document.createElementNS(p,L);
for(var T in this.__lb){S.style[T]=u;
}Q.appendChild(S);
}}return Q;
},__lf:function(V){var W={};

if(V){W.whiteSpace=M;
}else if(qx.core.Variant.isSet(x,w)){W.display=C;
}else{W.overflow=q;
W.whiteSpace=o;
W.textOverflow=N;
W.userSelect=z;
if(qx.core.Variant.isSet(x,E)){W.OTextOverflow=N;
}}return W;
},create:function(content,Y,ba){if(!ba){ba=window;
}
if(Y){var bb=ba.document.createElement(v);
bb.useHtml=true;
}else if(qx.core.Variant.isSet(x,w)){var bb=ba.document.createElement(v);
var bc=ba.document.createElementNS(p,L);
bc.style.cursor=u;
bc.style.color=u;
bc.style.overflow=q;
bc.style.maxWidth=H;
for(var bd in this.__lb){bc.style[bd]=u;
}bc.setAttribute(J,I);
bb.appendChild(bc);
}else{var bb=ba.document.createElement(v);
qx.bom.element.Style.setStyles(bb,this.__lf(Y));
}
if(content){this.setValue(bb,content);
}return bb;
},setValue:function(i,j){j=j||r;

if(i.useHtml){i.innerHTML=j;
}else if(qx.core.Variant.isSet(x,w)){i.firstChild.setAttribute(s,j);
}else{qx.bom.element.Attribute.set(i,t,j);
}},getValue:function(n){if(n.useHtml){return n.innerHTML;
}else if(qx.core.Variant.isSet(x,w)){return n.firstChild.getAttribute(s)||r;
}else{return qx.bom.element.Attribute.get(n,t);
}},getHtmlSize:function(content,k,l){var m=this._htmlElement||this.__ld();
m.style.width=l!==undefined?l+K:O;
m.innerHTML=content;
return this.__lg(m,k);
},getTextSize:function(be,bf){var bg=this._textElement||this.__lc();

if(qx.core.Variant.isSet(x,w)){bg.firstChild.setAttribute(s,be);
}else{qx.bom.element.Attribute.set(bg,t,be);
}return this.__lg(bg,bf);
},__lg:function(d,e){var f=this.__lb;

if(!e){e={};
}
for(var g in f){d.style[g]=e[g]||r;
}var h=qx.bom.element.Dimension.getSize(d);

if(qx.core.Variant.isSet(x,w)){if(!qx.bom.client.Platform.WIN){h.width++;
}}return h;
},setContent:function(a,b){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
this.setValue(a,b);
},getContent:function(U){qx.log.Logger.deprecatedMethodWarning(arguments.callee,B);
return this.getValue(U);
}}});
})();
(function(){var v="qx.client",u="blur",t="focus",s="mousedown",r="on",q="mouseup",p="DOMFocusOut",o="DOMFocusIn",n="selectstart",m="onmousedown",O="onfocusout",N="onfocusin",M="onmouseup",L="onselectstart",K="draggesture",J="qx.event.handler.Focus",I="_applyFocus",H="deactivate",G="textarea",F="_applyActive",C="input",D="focusin",A="qxSelectable",B="tabIndex",y="off",z="activate",w="focusout",x="qxKeepFocus",E="qxKeepActive";
qx.Class.define(J,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(br){arguments.callee.base.call(this);
this._manager=br;
this._window=br.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:F,nullable:true},focus:{apply:I,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__lh:null,__li:null,__lj:null,__lk:null,__ll:null,__lm:null,__ln:null,__lo:null,__lp:null,__lq:null,canHandleEvent:function(f,g){},registerEvent:function(W,X,Y){},unregisterEvent:function(bB,bC,bD){},focus:function(by){try{by.focus();
}catch(bx){}this.setFocus(by);
this.setActive(by);
},activate:function(bs){this.setActive(bs);
},blur:function(bj){try{bj.blur();
}catch(h){}
if(this.getActive()===bj){this.resetActive();
}
if(this.getFocus()===bj){this.resetFocus();
}},deactivate:function(bI){if(this.getActive()===bI){this.resetActive();
}},tryActivate:function(bE){var bF=this.__lF(bE);

if(bF){this.setActive(bF);
}},__lr:function(P,Q,R,S){var U=qx.event.Registration;
var T=U.createEvent(R,qx.event.type.Focus,[P,Q,S]);
U.dispatchEvent(P,T);
},_windowFocused:true,__ls:function(){if(this._windowFocused){this._windowFocused=false;
this.__lr(this._window,null,u,false);
}},__lt:function(){if(!this._windowFocused){this._windowFocused=true;
this.__lr(this._window,null,t,false);
}},_initObserver:qx.core.Variant.select(v,{"gecko":function(){this.__lh=qx.lang.Function.listener(this.__lz,this);
this.__li=qx.lang.Function.listener(this.__lA,this);
this.__lj=qx.lang.Function.listener(this.__ly,this);
this.__lk=qx.lang.Function.listener(this.__lx,this);
this.__ll=qx.lang.Function.listener(this.__lu,this);
this._document.addEventListener(s,this.__lh,true);
this._document.addEventListener(q,this.__li,true);
this._window.addEventListener(t,this.__lj,true);
this._window.addEventListener(u,this.__lk,true);
this._window.addEventListener(K,this.__ll,true);
},"mshtml":function(){this.__lh=qx.lang.Function.listener(this.__lz,this);
this.__li=qx.lang.Function.listener(this.__lA,this);
this.__ln=qx.lang.Function.listener(this.__lv,this);
this.__lo=qx.lang.Function.listener(this.__lw,this);
this.__lm=qx.lang.Function.listener(this.__lC,this);
this._document.attachEvent(m,this.__lh);
this._document.attachEvent(M,this.__li);
this._document.attachEvent(N,this.__ln);
this._document.attachEvent(O,this.__lo);
this._document.attachEvent(L,this.__lm);
},"webkit":function(){this.__lh=qx.lang.Function.listener(this.__lz,this);
this.__li=qx.lang.Function.listener(this.__lA,this);
this.__lo=qx.lang.Function.listener(this.__lw,this);
this.__lj=qx.lang.Function.listener(this.__ly,this);
this.__lk=qx.lang.Function.listener(this.__lx,this);
this.__lm=qx.lang.Function.listener(this.__lC,this);
this._document.addEventListener(s,this.__lh,true);
this._document.addEventListener(q,this.__li,true);
this._document.addEventListener(n,this.__lm,false);
this._window.addEventListener(p,this.__lo,true);
this._window.addEventListener(t,this.__lj,true);
this._window.addEventListener(u,this.__lk,true);
},"opera":function(){this.__lh=qx.lang.Function.listener(this.__lz,this);
this.__li=qx.lang.Function.listener(this.__lA,this);
this.__ln=qx.lang.Function.listener(this.__lv,this);
this.__lo=qx.lang.Function.listener(this.__lw,this);
this._document.addEventListener(s,this.__lh,true);
this._document.addEventListener(q,this.__li,true);
this._window.addEventListener(o,this.__ln,true);
this._window.addEventListener(p,this.__lo,true);
}}),_stopObserver:qx.core.Variant.select(v,{"gecko":function(){this._document.removeEventListener(s,this.__lh,true);
this._document.removeEventListener(q,this.__li,true);
this._window.removeEventListener(t,this.__lj,true);
this._window.removeEventListener(u,this.__lk,true);
this._window.removeEventListener(K,this.__ll,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,m,this.__lh);
qx.bom.Event.removeNativeListener(this._document,M,this.__li);
qx.bom.Event.removeNativeListener(this._document,N,this.__ln);
qx.bom.Event.removeNativeListener(this._document,O,this.__lo);
qx.bom.Event.removeNativeListener(this._document,L,this.__lm);
},"webkit":function(){this._document.removeEventListener(s,this.__lh,true);
this._document.removeEventListener(n,this.__lm,false);
this._window.removeEventListener(o,this.__ln,true);
this._window.removeEventListener(p,this.__lo,true);
this._window.removeEventListener(t,this.__lj,true);
this._window.removeEventListener(u,this.__lk,true);
},"opera":function(){this._document.removeEventListener(s,this.__lh,true);
this._window.removeEventListener(o,this.__ln,true);
this._window.removeEventListener(p,this.__lo,true);
this._window.removeEventListener(t,this.__lj,true);
this._window.removeEventListener(u,this.__lk,true);
}}),__lu:qx.event.GlobalError.observeMethod(qx.core.Variant.select(v,{"gecko":function(e){if(!this.__lG(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__lv:qx.event.GlobalError.observeMethod(qx.core.Variant.select(v,{"mshtml":function(e){this.__lt();
var bq=e.srcElement;
var bp=this.__lE(bq);

if(bp){this.setFocus(bp);
}this.tryActivate(bq);
},"opera":function(e){var bf=e.target;

if(bf==this._document||bf==this._window){this.__lt();

if(this.__lp){this.setFocus(this.__lp);
delete this.__lp;
}
if(this.__lq){this.setActive(this.__lq);
delete this.__lq;
}}else{this.setFocus(bf);
this.tryActivate(bf);
if(!this.__lG(bf)){bf.selectionStart=0;
bf.selectionEnd=0;
}}},"default":null})),__lw:qx.event.GlobalError.observeMethod(qx.core.Variant.select(v,{"mshtml":function(e){if(!e.toElement){this.__ls();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bG=e.target;

if(bG===this.getFocus()){this.resetFocus();
}
if(bG===this.getActive()){this.resetActive();
}},"opera":function(e){var i=e.target;

if(i==this._document){this.__ls();
this.__lp=this.getFocus();
this.__lq=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(i===this.getFocus()){this.resetFocus();
}
if(i===this.getActive()){this.resetActive();
}}},"default":null})),__lx:qx.event.GlobalError.observeMethod(qx.core.Variant.select(v,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__ls();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__ls();
this.__lp=this.getFocus();
this.__lq=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__ly:qx.event.GlobalError.observeMethod(qx.core.Variant.select(v,{"gecko":function(e){var d=e.target;

if(d===this._window||d===this._document){this.__lt();
d=this._body;
}this.setFocus(d);
this.tryActivate(d);
},"webkit":function(e){var bo=e.target;

if(bo===this._window||bo===this._document){this.__lt();

if(this.__lp){this.setFocus(this.__lp);
delete this.__lp;
}
if(this.__lq){this.setActive(this.__lq);
delete this.__lq;
}}else{this.setFocus(bo);
this.tryActivate(bo);
}},"default":null})),__lz:qx.event.GlobalError.observeMethod(qx.core.Variant.select(v,{"gecko":function(e){var bg=this.__lE(e.target);

if(!bg){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var be=e.srcElement;
var bd=this.__lE(be);

if(bd){if(!this.__lG(be)){be.unselectable=r;
try{document.selection.empty();
}catch(e){}try{bd.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__lG(be)){be.unselectable=r;
}}},"webkit":function(e){var bL=e.target;
var bK=this.__lE(bL);

if(bK){this.setFocus(bK);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bc=e.target;
var ba=this.__lE(bc);

if(!this.__lG(bc)){qx.bom.Event.preventDefault(e);
if(ba){var bb=this.getFocus();

if(bb&&bb.selectionEnd){bb.selectionStart=0;
bb.selectionEnd=0;
bb.blur();
}if(ba){this.setFocus(ba);
}}}else if(ba){this.setFocus(ba);
}},"default":null})),__lA:qx.event.GlobalError.observeMethod(qx.core.Variant.select(v,{"mshtml":function(e){var V=e.srcElement;

if(V.unselectable){V.unselectable=y;
}this.tryActivate(this.__lB(V));
},"gecko":function(e){var bt=e.target;

while(bt&&bt.offsetWidth===undefined){bt=bt.parentNode;
}
if(bt){this.tryActivate(bt);
}},"webkit|opera":function(e){this.tryActivate(this.__lB(e.target));
},"default":null})),__lB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(v,{"mshtml|webkit":function(bk){var bl=this.getFocus();

if(bl&&bk!=bl&&(bl.nodeName.toLowerCase()===C||bl.nodeName.toLowerCase()===G)){bk=bl;
}return bk;
},"default":function(a){return a;
}})),__lC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(v,{"mshtml|webkit":function(e){var bH=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__lG(bH)){qx.bom.Event.preventDefault(e);
}},"default":null})),__lD:function(j){var k=qx.bom.element.Attribute.get(j,B);

if(k>=1){return true;
}var l=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(k>=0&&l[j.tagName]){return true;
}return false;
},__lE:function(bJ){while(bJ&&bJ.nodeType===1){if(bJ.getAttribute(x)==r){return null;
}
if(this.__lD(bJ)){return bJ;
}bJ=bJ.parentNode;
}return this._body;
},__lF:function(bh){var bi=bh;

while(bh&&bh.nodeType===1){if(bh.getAttribute(E)==r){return null;
}bh=bh.parentNode;
}return bi;
},__lG:function(bm){while(bm&&bm.nodeType===1){var bn=bm.getAttribute(A);

if(bn!=null){return bn===r;
}bm=bm.parentNode;
}return true;
},_applyActive:function(b,c){if(c){this.__lr(c,b,H,true);
}
if(b){this.__lr(b,c,z,true);
}},_applyFocus:function(bz,bA){if(bA){this.__lr(bA,bz,w,true);
}
if(bz){this.__lr(bz,bA,D,true);
}if(bA){this.__lr(bA,bz,u,false);
}
if(bz){this.__lr(bz,bA,t,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__lH=null;
},defer:function(bu){qx.event.Registration.addHandler(bu);
var bv=bu.FOCUSABLE_ELEMENTS;

for(var bw in bv){bv[bw.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var k="qx.event.handler.Window";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this._manager=a;
this._window=a.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(l,m){},registerEvent:function(n,o,p){},unregisterEvent:function(h,i,j){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var u=qx.event.handler.Window.SUPPORTED_TYPES;

for(var t in u){qx.bom.Event.addNativeListener(this._window,t,this._onNativeWrapper);
}},_stopWindowObserver:function(){var s=qx.event.handler.Window.SUPPORTED_TYPES;

for(var r in s){qx.bom.Event.removeNativeListener(this._window,r,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var c=this._window;

try{var g=c.document;
}catch(e){return ;
}var d=g.documentElement;
var b=e.target||e.srcElement;

if(b==null||b===c||b===g||b===d){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,c]);
qx.event.Registration.dispatchEvent(c,event);
var f=event.getReturnValue();

if(f!=null){e.returnValue=f;
return f;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(q){qx.event.Registration.addHandler(q);
}});
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
qx.Class.define(b,{statics:{getApplication:function(){return this.__lJ||null;
},__lI:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var k=qx.core.Setting.get(d);
var l=qx.Class.getByName(k);

if(l){this.__lJ=new l;
var j=new Date;
this.__lJ.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-j)+"ms");
var j=new Date;
this.__lJ.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-j)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+k);
}},__lK:function(e){var h=this.__lJ;

if(h){e.setReturnValue(h.close());
}},__lL:function(){var g=this.__lJ;

if(g){g.terminate();
}}},defer:function(i){qx.event.Registration.addListener(window,f,i.__lI,i);
qx.event.Registration.addListener(window,a,i.__lL,i);
qx.event.Registration.addListener(window,c,i.__lK,i);
}});
})();
(function(){var J="qx.client",I="character",H="EndToEnd",G="input",F="textarea",E="StartToStart",D='character',C="qx.bom.Selection",B="button",A="#text",z="body";
qx.Class.define(C,{statics:{getSelectionObject:qx.core.Variant.select(J,{"mshtml":function(R){return R.selection;
},"default":function(bw){return qx.dom.Node.getWindow(bw).getSelection();
}}),get:qx.core.Variant.select(J,{"mshtml":function(bx){var by=qx.bom.Range.get(qx.dom.Node.getDocument(bx));
return by.text;
},"default":function(w){if(this.__lN(w)){return w.value.substring(w.selectionStart,w.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(w)).toString();
}}}),getLength:qx.core.Variant.select(J,{"mshtml":function(bj){var bl=this.get(bj);
var bk=qx.util.StringSplit.split(bl,/\r\n/);
return bl.length-(bk.length-1);
},"opera":function(K){var P,N,L;

if(this.__lN(K)){var O=K.selectionStart;
var M=K.selectionEnd;
P=K.value.substring(O,M);
N=M-O;
}else{P=qx.bom.Selection.get(K);
N=P.length;
}L=qx.util.StringSplit.split(P,/\r\n/);
return N-(L.length-1);
},"default":function(x){if(this.__lN(x)){return x.selectionEnd-x.selectionStart;
}else{return this.get(x).length;
}}}),getStart:qx.core.Variant.select(J,{"mshtml":function(g){if(this.__lN(g)){var l=qx.bom.Range.get();
if(!g.contains(l.parentElement())){return -1;
}var m=qx.bom.Range.get(g);
var k=g.value.length;
m.moveToBookmark(l.getBookmark());
m.moveEnd(D,k);
return k-m.text.length;
}else{var m=qx.bom.Range.get(g);
var i=m.parentElement();
var n=qx.bom.Range.get();
n.moveToElementText(i);
var h=qx.bom.Range.get(qx.dom.Node.getBodyElement(g));
h.setEndPoint(E,m);
h.setEndPoint(H,n);
if(n.compareEndPoints(E,h)==0){return 0;
}var j;
var o=0;

while(true){j=h.moveStart(I,-1);
if(n.compareEndPoints(E,h)==0){break;
}if(j==0){break;
}else{o++;
}}return ++o;
}},"gecko|webkit":function(bg){if(this.__lN(bg)){return bg.selectionStart;
}else{var bi=qx.dom.Node.getDocument(bg);
var bh=this.getSelectionObject(bi);
if(bh.anchorOffset<bh.focusOffset){return bh.anchorOffset;
}else{return bh.focusOffset;
}}},"default":function(S){if(this.__lN(S)){return S.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(S)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(J,{"mshtml":function(bn){if(this.__lN(bn)){var bs=qx.bom.Range.get();
if(!bn.contains(bs.parentElement())){return -1;
}var bt=qx.bom.Range.get(bn);
var br=bn.value.length;
bt.moveToBookmark(bs.getBookmark());
bt.moveStart(D,-br);
return bt.text.length;
}else{var bt=qx.bom.Range.get(bn);
var bp=bt.parentElement();
var bu=qx.bom.Range.get();
bu.moveToElementText(bp);
var br=bu.text.length;
var bo=qx.bom.Range.get(qx.dom.Node.getBodyElement(bn));
bo.setEndPoint(H,bt);
bo.setEndPoint(E,bu);
if(bu.compareEndPoints(H,bo)==0){return br-1;
}var bq;
var bv=0;

while(true){bq=bo.moveEnd(I,1);
if(bu.compareEndPoints(H,bo)==0){break;
}if(bq==0){break;
}else{bv++;
}}return br-(++bv);
}},"gecko|webkit":function(T){if(this.__lN(T)){return T.selectionEnd;
}else{var V=qx.dom.Node.getDocument(T);
var U=this.getSelectionObject(V);
if(U.focusOffset>U.anchorOffset){return U.focusOffset;
}else{return U.anchorOffset;
}}},"default":function(y){if(this.__lN(y)){return y.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(y)).focusOffset;
}}}),__lN:function(bm){return qx.dom.Node.isElement(bm)&&(bm.nodeName.toLowerCase()==G||bm.nodeName.toLowerCase()==F);
},set:qx.core.Variant.select(J,{"mshtml":function(bb,bc,bd){var be;
if(qx.dom.Node.isDocument(bb)){bb=bb.body;
}
if(qx.dom.Node.isElement(bb)||qx.dom.Node.isText(bb)){switch(bb.nodeName.toLowerCase()){case G:case F:case B:if(bd===undefined){bd=bb.value.length;
}
if(bc>=0&&bc<=bb.value.length&&bd>=0&&bd<=bb.value.length){be=qx.bom.Range.get(bb);
be.collapse(true);
be.moveStart(I,bc);
be.moveEnd(I,bd-bc);
be.select();
return true;
}break;
case A:if(bd===undefined){bd=bb.nodeValue.length;
}
if(bc>=0&&bc<=bb.nodeValue.length&&bd>=0&&bd<=bb.nodeValue.length){be=qx.bom.Range.get(qx.dom.Node.getBodyElement(bb));
be.moveToElementText(bb.parentNode);
be.collapse(true);
be.moveStart(I,bc);
be.moveEnd(I,bd-bc);
be.select();
return true;
}break;
default:if(bd===undefined){bd=bb.childNodes.length-1;
}if(bb.childNodes[bc]&&bb.childNodes[bd]){be=qx.bom.Range.get(qx.dom.Node.getBodyElement(bb));
be.moveToElementText(bb.childNodes[bc]);
be.collapse(true);
var bf=qx.bom.Range.get(qx.dom.Node.getBodyElement(bb));
bf.moveToElementText(bb.childNodes[bd]);
be.setEndPoint(H,bf);
be.select();
return true;
}}}return false;
},"default":function(p,q,r){var v=p.nodeName.toLowerCase();

if(qx.dom.Node.isElement(p)&&(v==G||v==F)){if(r===undefined){r=p.value.length;
}if(q>=0&&q<=p.value.length&&r>=0&&r<=p.value.length){p.focus();
p.select();
p.setSelectionRange(q,r);
return true;
}}else{var t=false;
var u=qx.dom.Node.getWindow(p).getSelection();
var s=qx.bom.Range.get(p);
if(qx.dom.Node.isText(p)){if(r===undefined){r=p.length;
}
if(q>=0&&q<p.length&&r>=0&&r<=p.length){t=true;
}}else if(qx.dom.Node.isElement(p)){if(r===undefined){r=p.childNodes.length-1;
}
if(q>=0&&p.childNodes[q]&&r>=0&&p.childNodes[r]){t=true;
}}else if(qx.dom.Node.isDocument(p)){p=p.body;

if(r===undefined){r=p.childNodes.length-1;
}
if(q>=0&&p.childNodes[q]&&r>=0&&p.childNodes[r]){t=true;
}}
if(t){if(!u.isCollapsed){u.collapseToStart();
}s.setStart(p,q);
if(qx.dom.Node.isText(p)){s.setEnd(p,r);
}else{s.setEndAfter(p.childNodes[r]);
}if(u.rangeCount>0){u.removeAllRanges();
}u.addRange(s);
return true;
}}return false;
}}),setAll:function(Q){return qx.bom.Selection.set(Q,0);
},clear:qx.core.Variant.select(J,{"mshtml":function(W){var X=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(W));
var Y=qx.bom.Range.get(W);
var parent=Y.parentElement();
var ba=qx.bom.Range.get(qx.dom.Node.getDocument(W));
if(parent==ba.parentElement()&&parent==W){X.empty();
}},"default":function(a){var c=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a));
var e=a.nodeName.toLowerCase();
if(qx.dom.Node.isElement(a)&&(e==G||e==F)){a.setSelectionRange(0,0);
qx.bom.Element.blur(a);
}else if(qx.dom.Node.isDocument(a)||e==z){c.collapse(a.body?a.body:a,0);
}else{var d=qx.bom.Range.get(a);

if(!d.collapsed){var f;
var b=d.commonAncestorContainer;
if(qx.dom.Node.isElement(a)&&qx.dom.Node.isText(b)){f=b.parentNode;
}else{f=b;
}
if(f==a){c.collapse(a,0);
}}}}})}});
})();
(function(){var p="qx.event.handler.Appear",o="disappear",n="appear";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){arguments.callee.base.call(this);
this.__mv=q;
this.__mw={};
qx.event.handler.Appear.__mx[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__mx:{},refresh:function(){var a=this.__mx;

for(var b in a){a[b].refresh();
}}},members:{__mv:null,__mw:null,canHandleEvent:function(w,x){},registerEvent:function(r,s,t){var u=qx.core.ObjectRegistry.toHashCode(r)+s;
var v=this.__mw;

if(v&&!v[u]){v[u]=r;
r.$$displayed=r.offsetWidth>0;
}},unregisterEvent:function(c,d,e){var f=qx.core.ObjectRegistry.toHashCode(c)+d;
var g=this.__mw;

if(!g){return;
}
if(g[f]){delete g[f];
}},refresh:function(){var k=this.__mw;
var l;

for(var j in k){l=k[j];
var h=l.offsetWidth>0;

if((!!l.$$displayed)!==h){l.$$displayed=h;
var i=qx.event.Registration.createEvent(h?n:o);
this.__mv.dispatchEvent(l,i);
}}}},destruct:function(){this.__mv=this.__mw=null;
delete qx.event.handler.Appear.__mx[this.$$hash];
},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var n="",m="underline",k="Boolean",j="px",h='"',g="italic",f="normal",e="bold",d="_applyItalic",c="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="overline",u="line-through",t="qx.bom.Font",s="Number",r="_applyDecoration",q=" ",o="_applySize",p=",";
qx.Class.define(t,{extend:qx.core.Object,construct:function(Q,R){arguments.callee.base.call(this);

if(Q!==undefined){this.setSize(Q);
}
if(R!==undefined){this.setFamily(R);
}},statics:{fromString:function(D){var H=new qx.bom.Font();
var F=D.split(/\s+/);
var name=[];
var G;

for(var i=0;i<F.length;i++){switch(G=F[i]){case e:H.setBold(true);
break;
case g:H.setItalic(true);
break;
case m:H.setDecoration(m);
break;
default:var E=parseInt(G,10);

if(E==G||qx.lang.String.contains(G,j)){H.setSize(E);
}else{name.push(G);
}break;
}}
if(name.length>0){H.setFamily(name);
}return H;
},fromConfig:function(K){var L=new qx.bom.Font;
L.set(K);
return L;
},__my:{fontFamily:n,fontSize:n,fontWeight:n,fontStyle:n,textDecoration:n,lineHeight:1.2},getDefaultStyles:function(){return this.__my;
}},properties:{size:{check:z,nullable:true,apply:o},lineHeight:{check:s,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:k,nullable:true,apply:c},italic:{check:k,nullable:true,apply:d},decoration:{check:[m,u,v],nullable:true,apply:r}},members:{__mz:null,__mA:null,__mB:null,__mC:null,__mD:null,__mE:null,_applySize:function(O,P){this.__mz=O===null?null:O+j;
},_applyLineHeight:function(a,b){this.__mE=a===null?null:a;
},_applyFamily:function(A,B){var C=n;

for(var i=0,l=A.length;i<l;i++){if(A[i].indexOf(q)>0){C+=h+A[i]+h;
}else{C+=A[i];
}
if(i!==l-1){C+=p;
}}this.__mA=C;
},_applyBold:function(M,N){this.__mB=M===null?null:M?e:f;
},_applyItalic:function(S,T){this.__mC=S===null?null:S?g:f;
},_applyDecoration:function(I,J){this.__mD=I===null?null:I;
},getStyles:function(){return {fontFamily:this.__mA,fontSize:this.__mz,fontWeight:this.__mB,fontStyle:this.__mC,textDecoration:this.__mD,lineHeight:this.__mE};
}}});
})();
(function(){var s="string",r="_applyTheme",q="qx.theme.manager.Appearance",p=":",o="Theme",n="changeTheme",m="/",l="singleton";
qx.Class.define(q,{type:l,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__mF={};
this.__mG={};
},properties:{theme:{check:o,nullable:true,event:n,apply:r}},members:{__mH:{},__mF:null,__mG:null,_applyTheme:function(t,u){this.__mG={};
this.__mF={};
},__mI:function(a,b,c){var g=b.appearances;
var j=g[a];

if(!j){var k=m;
var d=[];
var i=a.split(k);
var h;

while(!j&&i.length>0){d.unshift(i.pop());
var e=i.join(k);
j=g[e];

if(j){h=j.alias||j;

if(typeof h===s){var f=h+k+d.join(k);
return this.__mI(f,b,c);
}}}if(c!=null){return this.__mI(c,b);
}return null;
}else if(typeof j===s){return this.__mI(j,b,c);
}else if(j.include&&!j.style){return this.__mI(j.include,b,c);
}return a;
},styleFrom:function(v,w,x,y){if(!x){x=this.getTheme();
}var E=this.__mG;
var z=E[v];

if(!z){z=E[v]=this.__mI(v,x,y);
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
}if(C>0){K+=p+C;
}}var D=this.__mF;

if(D[K]!==undefined){return D[K];
}if(!w){w=this.__mH;
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
}},destruct:function(){this.__mF=this.__mG=null;
}});
})();
(function(){var h="qx.event.type.Data",g="qx.event.type.Event",f="qx.data.IListData";
qx.Interface.define(f,{events:{"change":h,"changeLength":g},members:{getItem:function(j){},setItem:function(d,e){},splice:function(a,b,c){},contains:function(i){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__mJ=c;
this.__mK=d;
},members:{__mJ:null,__mK:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__mJ,this.__mK);
}}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__nh:function(){this.QUIRKS_MODE=this.__ni();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__ni:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__nh();
}});
})();
(function(){var m="qx.lang.Object";
qx.Class.define(m,{statics:{empty:function(y){{};

for(var z in y){if(y.hasOwnProperty(z)){delete y[z];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(s){{};
return s.__count__===0;
}:
function(f){{};

for(var g in f){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(G,H){{};
return G.__count__>=H;
}:
function(c,d){{};

if(d<=0){return true;
}var length=0;

for(var e in c){if((++length)>=d){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(A){{};
var C=[];
var B=this.getKeys(A);

for(var i=0,l=B.length;i<l;i++){C.push(A[B[i]]);
}return C;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(I,J){{};
return qx.lang.Object.mergeWith(I,J,false);
},merge:function(h,j){{};
var k=arguments.length;

for(var i=1;i<k;i++){qx.lang.Object.mergeWith(h,arguments[i]);
}return h;
},clone:function(D){{};
var E={};

for(var F in D){E[F]=D[F];
}return E;
},invert:function(t){{};
var u={};

for(var v in t){u[t[v].toString()]=v;
}return u;
},getKeyFromValue:function(p,q){{};

for(var r in p){if(p.hasOwnProperty(r)&&p[r]===q){return r;
}}return null;
},contains:function(a,b){{};
return this.getKeyFromValue(a,b)!==null;
},select:function(n,o){{};
return o[n];
},fromArray:function(w){{};
var x={};

for(var i=0,l=w.length;i<l;i++){{};
x[w[i].toString()]=true;
}return x;
}}});
})();
(function(){var c="qx.ui.form.IExecutable",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"execute":b},members:{setCommand:function(a){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(p,q,r){arguments.callee.base.call(this,p,q);

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
(function(){var w="nonScaled",v="scaled",u="alphaScaled",t=".png",s="replacement",r="hidden",q="div",p="Boolean",o="_applyScale",n="__mR",h="px",m="_applySource",k="-disabled.$1",g="img",f="changeSource",j="qx.client",i="String",l="image",e="qx.ui.basic.Image";
qx.Class.define(e,{extend:qx.ui.core.Widget,construct:function(bd){this.__mR={};
arguments.callee.base.call(this);

if(bd){this.setSource(bd);
}},properties:{source:{check:i,init:null,nullable:true,event:f,apply:m,themeable:true},scale:{check:p,init:false,themeable:true,apply:o},appearance:{refine:true,init:l},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__mS:null,__mT:null,__mU:null,__mR:null,getContentElement:function(){return this.__mY();
},_createContentElement:function(){return this.__mY();
},_getContentHint:function(){return {width:this.__mS||0,height:this.__mT||0};
},_applyEnabled:function(z,A){arguments.callee.base.call(this,z,A);

if(this.getSource()){this._styleSource();
}},_applySource:function(L){this._styleSource();
},_applyScale:function(M){this._styleSource();
},__mV:function(K){this.__mU=K;
},__mW:function(){if(this.__mU==null){var bf=this.getSource();
var be=false;

if(bf!=null){be=qx.lang.String.endsWith(bf,t);
}
if(this.getScale()&&be&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__mU=u;
}else if(this.getScale()){this.__mU=v;
}else{this.__mU=w;
}}return this.__mU;
},__mX:function(a){var b;
var c;

if(a==u){b=true;
c=q;
}else if(a==w){b=false;
c=q;
}else{b=true;
c=g;
}var d=new qx.html.Image(c);
d.setScale(b);
d.setStyles({"overflowX":r,"overflowY":r});
return d;
},__mY:function(){var x=this.__mW();

if(this.__mR[x]==null){this.__mR[x]=this.__mX(x);
}return this.__mR[x];
},_styleSource:function(){var y=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!y){this.getContentElement().resetSource();
return;
}this.__na(y);
if(qx.util.ResourceManager.getInstance().has(y)){this.__nc(this.getContentElement(),y);
}else if(qx.io.ImageLoader.isLoaded(y)){this.__nd(this.getContentElement(),y);
}else{this.__ne(this.getContentElement(),y);
}},__na:qx.core.Variant.select(j,{"mshtml":function(bg){var bi=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var bh=qx.lang.String.endsWith(bg,t);

if(bi&&bh){if(this.getScale()&&this.__mW()!=u){this.__mV(u);
}else if(!this.getScale()&&this.__mW()!=w){this.__mV(w);
}}else{if(this.getScale()&&this.__mW()!=v){this.__mV(v);
}else if(!this.getScale()&&this.__mW()!=w){this.__mV(w);
}}this.__nb(this.__mY());
},"default":function(ba){if(this.getScale()&&this.__mW()!=v){this.__mV(v);
}else if(!this.getScale()&&this.__mW(w)){this.__mV(w);
}this.__nb(this.__mY());
}}),__nb:function(B){var E=this.getContainerElement();
var F=E.getChild(0);

if(F!=B){if(F!=null){var H=h;
var C={};
var D=this.getInnerSize();

if(D!=null){C.width=D.width+H;
C.height=D.height+H;
}var G=this.getInsets();
C.left=G.left+H;
C.top=G.top+H;
C.zIndex=10;
B.setStyles(C,true);
B.setSelectable(this.getSelectable());
}E.removeAt(0);
E.addAt(B,0);
}},__nc:function(V,W){var Y=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var X=W.replace(/\.([a-z]+)$/,k);

if(Y.has(X)){W=X;
this.addState(s);
}else{this.removeState(s);
}}if(V.getSource()===W){return;
}V.setSource(W);
this.__ng(Y.getImageWidth(W),Y.getImageHeight(W));
},__nd:function(Q,R){var T=qx.io.ImageLoader;
Q.setSource(R);
var S=T.getWidth(R);
var U=T.getHeight(R);
this.__ng(S,U);
},__ne:function(N,O){var self;
var P=qx.io.ImageLoader;
{};
if(!P.isFailed(O)){P.load(O,this.__nf,this);
}else{if(N!=null){N.resetSource();
}}},__nf:function(bb,bc){if(bb!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bc.failed){this.warn("Image could not be loaded: "+bb);
}this._styleSource();
},__ng:function(I,J){if(I!==this.__mS||J!==this.__mT){this.__mS=I;
this.__mT=J;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(n);
}});
})();
(function(){var o="keep-align",n="interval",m="Integer",l="direct",k="best-fit",j="mouse",i="bottom-left",h="disappear",g="Boolean",f="bottom-right",C="widget",B="qx.ui.core.MPlacement",A="left-top",z="offsetRight",y="shorthand",x="offsetLeft",w="top-left",v="appear",u="offsetBottom",t="top-right",r="offsetTop",s="right-bottom",p="right-top",q="left-bottom";
qx.Mixin.define(B,{properties:{position:{check:[w,t,i,f,A,q,p,s],init:i,themeable:true},placeMethod:{check:[C,j],init:j,themeable:true},domMove:{check:g,init:false},placementModeX:{check:[l,o,k],init:o,themeable:true},placementModeY:{check:[l,o,k],init:o,themeable:true},offsetLeft:{check:m,init:0,themeable:true},offsetTop:{check:m,init:0,themeable:true},offsetRight:{check:m,init:0,themeable:true},offsetBottom:{check:m,init:0,themeable:true},offset:{group:[r,z,u,x],mode:y,themeable:true}},members:{__rs:null,getLayoutLocation:function(K){var N,M,O,top;
M=K.getBounds();
O=M.left;
top=M.top;
var P=M;
K=K.getLayoutParent();

while(K&&!K.isRootWidget()){M=K.getBounds();
O+=M.left;
top+=M.top;
N=K.getInsets();
O+=N.left;
top+=N.top;
K=K.getLayoutParent();
}if(K.isRootWidget()){var L=K.getContainerLocation();

if(L){O+=L.left;
top+=L.top;
}}return {left:O,top:top,right:O+P.width,bottom:top+P.height};
},moveTo:function(a,top){if(this.getDomMove()){this.setDomPosition(a,top);
}else{this.setLayoutProperties({left:a,top:top});
}},placeToWidget:function(F,G){if(G){this.__rs=qx.lang.Function.bind(this.placeToWidget,this,F,false);
qx.event.Idle.getInstance().addListener(n,this.__rs);
this.addListener(h,function(){if(this.__rs){qx.event.Idle.getInstance().removeListener(n,this.__rs);
this.__rs=null;
}},this);
}var H=F.getContainerLocation()||this.getLayoutLocation(F);
this.__ru(H);
},placeToMouse:function(event){var E=event.getDocumentLeft();
var top=event.getDocumentTop();
var D={left:E,top:top,right:E,bottom:top};
this.__ru(D);
},placeToElement:function(Q,R){var location=qx.bom.element.Location.get(Q);
var S={left:location.left,top:location.top,right:location.left+Q.offsetWidth,bottom:location.top+Q.offsetHeight};
if(R){this.__rs=qx.lang.Function.bind(this.placeToElement,this,Q,false);
qx.event.Idle.getInstance().addListener(n,this.__rs);
this.addListener(h,function(){if(this.__rs){qx.event.Idle.getInstance().removeListener(n,this.__rs);
this.__rs=null;
}},this);
}this.__ru(S);
},placeToPoint:function(b){var c={left:b.left,top:b.top,right:b.left,bottom:b.top};
this.__ru(c);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__rt:function(I){var J=null;

if(this._computePlacementSize){var J=this._computePlacementSize();
}else if(this.isVisible()){var J=this.getBounds();
}
if(J==null){this.addListenerOnce(v,function(){this.__rt(I);
},this);
}else{I.call(this,J);
}},__ru:function(X){this.__rt(function(V){var W=qx.util.placement.Placement.compute(V,this.getLayoutParent().getBounds(),X,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(W.left,W.top);
});
},setSmart:function(d){{};
var e=d?o:l;
this.set({placementModeX:e,placementModeY:e});
},getSmart:function(){{};
var T=this.getPlacementModeX()==o?true:false;
var U=this.getPlacementModeY()==o?true:false;
return T&&U;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__rs){qx.event.Idle.getInstance().removeListener(n,this.__rs);
}}});
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
(function(){var s="emulated",r="native",q='"',p="qx.lang.Core",o="\\\\",n="\\\"",m="[object Error]";
qx.Class.define(p,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==m)?s:r,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?r:s,{"native":Array.prototype.indexOf,"emulated":function(x,y){if(y==null){y=0;
}else if(y<0){y=Math.max(0,this.length+y);
}
for(var i=y;i<this.length;i++){if(this[i]===x){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?r:s,{"native":Array.prototype.lastIndexOf,"emulated":function(z,A){if(A==null){A=this.length-1;
}else if(A<0){A=Math.max(0,this.length+A);
}
for(var i=A;i>=0;i--){if(this[i]===z){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?r:s,{"native":Array.prototype.forEach,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){B.call(C||window,D,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?r:s,{"native":Array.prototype.filter,"emulated":function(g,h){var j=[];
var l=this.length;

for(var i=0;i<l;i++){var k=this[i];

if(k!==undefined){if(g.call(h||window,k,i,this)){j.push(this[i]);
}}}return j;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?r:s,{"native":Array.prototype.map,"emulated":function(t,u){var v=[];
var l=this.length;

for(var i=0;i<l;i++){var w=this[i];

if(w!==undefined){v[i]=t.call(u||window,w,i,this);
}}return v;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?r:s,{"native":Array.prototype.some,"emulated":function(a,b){var l=this.length;

for(var i=0;i<l;i++){var c=this[i];

if(c!==undefined){if(a.call(b||window,c,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?r:s,{"native":Array.prototype.every,"emulated":function(d,e){var l=this.length;

for(var i=0;i<l;i++){var f=this[i];

if(f!==undefined){if(!d.call(e||window,f,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?r:s,{"native":String.prototype.quote,"emulated":function(){return q+this.replace(/\\/g,o).replace(/\"/g,n)+q;
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
(function(){var m="indexOf",k="lastIndexOf",j="slice",h="concat",g="join",f="toLocaleUpperCase",e="shift",d="substr",c="filter",b="unshift",J="match",I="quote",H="qx.lang.Generics",G="localeCompare",F="sort",E="some",D="charAt",C="split",B="substring",A="pop",u="toUpperCase",v="replace",r="push",t="charCodeAt",p="every",q="reverse",n="search",o="forEach",w="map",x="toLowerCase",z="splice",y="toLocaleLowerCase";
qx.Class.define(H,{statics:{__mN:{"Array":[g,q,F,r,A,e,b,z,h,j,m,k,o,w,c,E,p],"String":[I,B,x,u,D,t,m,k,y,f,G,J,n,v,C,d,h,j]},__mO:function(K,L){return function(s){return K.prototype[L].apply(s,Array.prototype.slice.call(arguments,1));
};
},__mP:function(){var M=qx.lang.Generics.__mN;

for(var Q in M){var O=window[Q];
var N=M[Q];

for(var i=0,l=N.length;i<l;i++){var P=N[i];

if(!O[P]){O[P]=qx.lang.Generics.__mO(O,P);
}}}}},defer:function(a){a.__mP();
}});
})();
(function(){var c="qx.ui.core.queue.Widget",b="widget";
qx.Class.define(c,{statics:{__mQ:{},remove:function(a){delete this.__mQ[a.$$hash];
},add:function(d){var e=this.__mQ;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var f=this.__mQ;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__mQ={};
}}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(f){var g=this._dynamic;
return f instanceof qx.bom.Font?f:g[f];
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.fonts[p]){return s[p]=(new qx.bom.Font).set(r.fonts[p]);
}return p;
},isDynamic:function(m){var o=this._dynamic;

if(m&&(m instanceof qx.bom.Font||o[m]!==undefined)){return true;
}var n=this.getTheme();

if(n!==null&&m&&n.fonts[m]){o[m]=(new qx.bom.Font).set(n.fonts[m]);
return true;
}return false;
},_applyTheme:function(h){var i=this._getDynamic();

for(var l in i){if(i[l].themed){i[l].dispose();
delete i[l];
}}
if(h){var j=h.fonts;
var k=qx.bom.Font;

for(var l in j){i[l]=(new k).set(j[l]);
i[l].themed=true;
}}this._setDynamic(i);
}}});
})();
(function(){var k="source",j="scale",i="no-repeat",h="mshtml",g="backgroundImage",f="qx.client",e="div",d="qx.html.Image";
qx.Class.define(d,{extend:qx.html.Element,members:{_applyProperty:function(name,o){arguments.callee.base.call(this,name,o);

if(name===k){var s=this.getDomElement();
var p=this.getAllStyles();

if(this.getNodeName()==e&&this.getStyle(g)){p.backgroundPosition=null;
p.backgroundRepeat=null;
}var q=this._getProperty(k);
var r=this._getProperty(j);
var t=r?j:i;
qx.bom.element.Decoration.update(s,q,t,p);
}},_createDomElement:function(){var b=this._getProperty(j);
var c=b?j:i;

if(qx.core.Variant.isSet(f,h)){var a=this._getProperty(k);
this.setNodeName(qx.bom.element.Decoration.getTagName(c,a));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(c));
}return arguments.callee.base.call(this);
},_copyData:function(m){return arguments.callee.base.call(this,true);
},setSource:function(n){this._setProperty(k,n);
return this;
},getSource:function(){return this._getProperty(k);
},resetSource:function(){this._removeProperty(k);
return this;
},setScale:function(l){this._setProperty(j,l);
return this;
},getScale:function(){return this._getProperty(j);
}}});
})();
(function(){var V="left",U="top",T="_applyLayoutChange",S="hAlign",R="flex",Q="vAlign",P="Integer",O="minWidth",N="width",M="minHeight",J="qx.ui.layout.Grid",L="height",K="maxHeight",I="maxWidth";
qx.Class.define(J,{extend:qx.ui.layout.Abstract,construct:function(bb,bc){arguments.callee.base.call(this);
this.__no=[];
this.__np=[];

if(bb){this.setSpacingX(bb);
}
if(bc){this.setSpacingY(bc);
}},properties:{spacingX:{check:P,init:0,apply:T},spacingY:{check:P,init:0,apply:T}},members:{__nq:null,__no:null,__np:null,__nr:null,__ns:null,__nt:null,__nu:null,__nv:null,__nw:null,verifyLayoutProperty:null,__nx:function(){var bY=[];
var bX=[];
var ca=[];
var bV=-1;
var bU=-1;
var cc=this._getLayoutChildren();

for(var i=0,l=cc.length;i<l;i++){var bW=cc[i];
var cb=bW.getLayoutProperties();
var cd=cb.row;
var bT=cb.column;
cb.colSpan=cb.colSpan||1;
cb.rowSpan=cb.rowSpan||1;
if(cd==null||bT==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+bW+"' must be defined!");
}
if(bY[cd]&&bY[cd][bT]){throw new Error("Cannot add widget '"+bW+"'!. "+"There is already a widget '"+bY[cd][bT]+"' in this cell ("+cd+", "+bT+")");
}
for(var x=bT;x<bT+cb.colSpan;x++){for(var y=cd;y<cd+cb.rowSpan;y++){if(bY[y]==undefined){bY[y]=[];
}bY[y][x]=bW;
bU=Math.max(bU,x);
bV=Math.max(bV,y);
}}
if(cb.rowSpan>1){ca.push(bW);
}
if(cb.colSpan>1){bX.push(bW);
}}for(var y=0;y<=bV;y++){if(bY[y]==undefined){bY[y]=[];
}}this.__nq=bY;
this.__nr=bX;
this.__ns=ca;
this.__nt=bV;
this.__nu=bU;
this.__nv=null;
this.__nw=null;
delete this._invalidChildrenCache;
},_setRowData:function(bP,bQ,bR){var bS=this.__no[bP];

if(!bS){this.__no[bP]={};
this.__no[bP][bQ]=bR;
}else{bS[bQ]=bR;
}},_setColumnData:function(df,dg,dh){var di=this.__np[df];

if(!di){this.__np[df]={};
this.__np[df][dg]=dh;
}else{di[dg]=dh;
}},setSpacing:function(cw){this.setSpacingY(cw);
this.setSpacingX(cw);
return this;
},setColumnAlign:function(dx,dy,dz){{};
this._setColumnData(dx,S,dy);
this._setColumnData(dx,Q,dz);
this._applyLayoutChange();
return this;
},getColumnAlign:function(cN){var cO=this.__np[cN]||{};
return {vAlign:cO.vAlign||U,hAlign:cO.hAlign||V};
},setRowAlign:function(bh,bi,bj){{};
this._setRowData(bh,S,bi);
this._setRowData(bh,Q,bj);
this._applyLayoutChange();
return this;
},getRowAlign:function(r){var s=this.__no[r]||{};
return {vAlign:s.vAlign||U,hAlign:s.hAlign||V};
},getCellWidget:function(dL,dM){if(this._invalidChildrenCache){this.__nx();
}var dL=this.__nq[dL]||{};
return dL[dM]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__nx();
}return this.__nt+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__nx();
}return this.__nu+1;
},getCellAlign:function(cP,cQ){var cW=U;
var cU=V;
var cV=this.__no[cP];
var cS=this.__np[cQ];
var cR=this.__nq[cP][cQ];

if(cR){var cT={vAlign:cR.getAlignY(),hAlign:cR.getAlignX()};
}else{cT={};
}if(cT.vAlign){cW=cT.vAlign;
}else if(cV&&cV.vAlign){cW=cV.vAlign;
}else if(cS&&cS.vAlign){cW=cS.vAlign;
}if(cT.hAlign){cU=cT.hAlign;
}else if(cS&&cS.hAlign){cU=cS.hAlign;
}else if(cV&&cV.hAlign){cU=cV.hAlign;
}return {vAlign:cW,hAlign:cU};
},setColumnFlex:function(cn,co){this._setColumnData(cn,R,co);
this._applyLayoutChange();
return this;
},getColumnFlex:function(Y){var ba=this.__np[Y]||{};
return ba.flex!==undefined?ba.flex:0;
},setRowFlex:function(cl,cm){this._setRowData(cl,R,cm);
this._applyLayoutChange();
return this;
},getRowFlex:function(cr){var cs=this.__no[cr]||{};
var ct=cs.flex!==undefined?cs.flex:0;
return ct;
},setColumnMaxWidth:function(dj,dk){this._setColumnData(dj,I,dk);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(dr){var ds=this.__np[dr]||{};
return ds.maxWidth!==undefined?ds.maxWidth:Infinity;
},setColumnWidth:function(cu,cv){this._setColumnData(cu,N,cv);
this._applyLayoutChange();
return this;
},getColumnWidth:function(W){var X=this.__np[W]||{};
return X.width!==undefined?X.width:null;
},setColumnMinWidth:function(G,H){this._setColumnData(G,O,H);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(dv){var dw=this.__np[dv]||{};
return dw.minWidth||0;
},setRowMaxHeight:function(cp,cq){this._setRowData(cp,K,cq);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(dt){var du=this.__no[dt]||{};
return du.maxHeight||Infinity;
},setRowHeight:function(cx,cy){this._setRowData(cx,L,cy);
this._applyLayoutChange();
return this;
},getRowHeight:function(dN){var dO=this.__no[dN]||{};
return dO.height!==undefined?dO.height:null;
},setRowMinHeight:function(bf,bg){this._setRowData(bf,M,bg);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bd){var be=this.__no[bd]||{};
return be.minHeight||0;
},__ny:function(dl){var dq=dl.getSizeHint();
var dp=dl.getMarginLeft()+dl.getMarginRight();
var dn=dl.getMarginTop()+dl.getMarginBottom();
var dm={height:dq.height+dn,width:dq.width+dp,minHeight:dq.minHeight+dn,minWidth:dq.minWidth+dp,maxHeight:dq.maxHeight+dn,maxWidth:dq.maxWidth+dp};
return dm;
},_fixHeightsRowSpan:function(cz){var cK=this.getSpacingY();

for(var i=0,l=this.__ns.length;i<l;i++){var cC=this.__ns[i];
var cE=this.__ny(cC);
var cF=cC.getLayoutProperties();
var cB=cF.row;
var cI=cK*(cF.rowSpan-1);
var cA=cI;
var cH={};

for(var j=0;j<cF.rowSpan;j++){var cM=cF.row+j;
var cD=cz[cM];
var cL=this.getRowFlex(cM);

if(cL>0){cH[cM]={min:cD.minHeight,value:cD.height,max:cD.maxHeight,flex:cL};
}cI+=cD.height;
cA+=cD.minHeight;
}if(cI<cE.height){var cJ=qx.ui.layout.Util.computeFlexOffsets(cH,cE.height,cI);

for(var j=0;j<cF.rowSpan;j++){var cG=cJ[cB+j]?cJ[cB+j].offset:0;
cz[cB+j].height+=cG;
}}if(cA<cE.minHeight){var cJ=qx.ui.layout.Util.computeFlexOffsets(cH,cE.minHeight,cA);

for(var j=0;j<cF.rowSpan;j++){var cG=cJ[cB+j]?cJ[cB+j].offset:0;
cz[cB+j].minHeight+=cG;
}}}},_fixWidthsColSpan:function(a){var e=this.getSpacingX();

for(var i=0,l=this.__nr.length;i<l;i++){var b=this.__nr[i];
var d=this.__ny(b);
var g=b.getLayoutProperties();
var c=g.column;
var p=e*(g.colSpan-1);
var f=p;
var h={};
var m;

for(var j=0;j<g.colSpan;j++){var q=g.column+j;
var o=a[q];
var n=this.getColumnFlex(q);
if(n>0){h[q]={min:o.minWidth,value:o.width,max:o.maxWidth,flex:n};
}p+=o.width;
f+=o.minWidth;
}if(p<d.width){var k=qx.ui.layout.Util.computeFlexOffsets(h,d.width,p);

for(var j=0;j<g.colSpan;j++){m=k[c+j]?k[c+j].offset:0;
a[c+j].width+=m;
}}if(f<d.minWidth){var k=qx.ui.layout.Util.computeFlexOffsets(h,d.minWidth,f);

for(var j=0;j<g.colSpan;j++){m=k[c+j]?k[c+j].offset:0;
a[c+j].minWidth+=m;
}}}},_getRowHeights:function(){if(this.__nv!=null){return this.__nv;
}var dY=[];
var dR=this.__nt;
var dQ=this.__nu;

for(var ea=0;ea<=dR;ea++){var dS=0;
var dU=0;
var dT=0;

for(var dX=0;dX<=dQ;dX++){var dP=this.__nq[ea][dX];

if(!dP){continue;
}var dV=dP.getLayoutProperties().rowSpan||0;

if(dV>1){continue;
}var dW=this.__ny(dP);

if(this.getRowFlex(ea)>0){dS=Math.max(dS,dW.minHeight);
}else{dS=Math.max(dS,dW.height);
}dU=Math.max(dU,dW.height);
}var dS=Math.max(dS,this.getRowMinHeight(ea));
var dT=this.getRowMaxHeight(ea);

if(this.getRowHeight(ea)!==null){var dU=this.getRowHeight(ea);
}else{var dU=Math.max(dS,Math.min(dU,dT));
}dY[ea]={minHeight:dS,height:dU,maxHeight:dT};
}
if(this.__ns.length>0){this._fixHeightsRowSpan(dY);
}this.__nv=dY;
return dY;
},_getColWidths:function(){if(this.__nw!=null){return this.__nw;
}var z=[];
var u=this.__nu;
var w=this.__nt;

for(var E=0;E<=u;E++){var C=0;
var B=0;
var v=Infinity;

for(var F=0;F<=w;F++){var t=this.__nq[F][E];

if(!t){continue;
}var A=t.getLayoutProperties().colSpan||0;

if(A>1){continue;
}var D=this.__ny(t);

if(this.getColumnFlex(E)>0){B=Math.max(B,D.minWidth);
}else{B=Math.max(B,D.width);
}C=Math.max(C,D.width);
}var B=Math.max(B,this.getColumnMinWidth(E));
var v=this.getColumnMaxWidth(E);

if(this.getColumnWidth(E)!==null){var C=this.getColumnWidth(E);
}else{var C=Math.max(B,Math.min(C,v));
}z[E]={minWidth:B,width:C,maxWidth:v};
}
if(this.__nr.length>0){this._fixWidthsColSpan(z);
}this.__nw=z;
return z;
},_getColumnFlexOffsets:function(cX){var cY=this.getSizeHint();
var dd=cX-cY.width;

if(dd==0){return {};
}var db=this._getColWidths();
var da={};

for(var i=0,l=db.length;i<l;i++){var de=db[i];
var dc=this.getColumnFlex(i);

if((dc<=0)||(de.width==de.maxWidth&&dd>0)||(de.width==de.minWidth&&dd<0)){continue;
}da[i]={min:de.minWidth,value:de.width,max:de.maxWidth,flex:dc};
}return qx.ui.layout.Util.computeFlexOffsets(da,cX,cY.width);
},_getRowFlexOffsets:function(ce){var cf=this.getSizeHint();
var ci=ce-cf.height;

if(ci==0){return {};
}var cj=this._getRowHeights();
var cg={};

for(var i=0,l=cj.length;i<l;i++){var ck=cj[i];
var ch=this.getRowFlex(i);

if((ch<=0)||(ck.height==ck.maxHeight&&ci>0)||(ck.height==ck.minHeight&&ci<0)){continue;
}cg[i]={min:ck.minHeight,value:ck.height,max:ck.maxHeight,flex:ch};
}return qx.ui.layout.Util.computeFlexOffsets(cg,ce,cf.height);
},renderLayout:function(bk,bl){if(this._invalidChildrenCache){this.__nx();
}var bz=qx.ui.layout.Util;
var bn=this.getSpacingX();
var bt=this.getSpacingY();
var bE=this._getColWidths();
var bD=this._getColumnFlexOffsets(bk);
var bo=[];
var bG=this.__nu;
var bm=this.__nt;
var bF;

for(var bH=0;bH<=bG;bH++){bF=bD[bH]?bD[bH].offset:0;
bo[bH]=bE[bH].width+bF;
}var bw=this._getRowHeights();
var by=this._getRowFlexOffsets(bl);
var bN=[];

for(var bu=0;bu<=bm;bu++){bF=by[bu]?by[bu].offset:0;
bN[bu]=bw[bu].height+bF;
}var bO=0;

for(var bH=0;bH<=bG;bH++){var top=0;

for(var bu=0;bu<=bm;bu++){var bB=this.__nq[bu][bH];
if(!bB){top+=bN[bu]+bt;
continue;
}var bp=bB.getLayoutProperties();
if(bp.row!==bu||bp.column!==bH){top+=bN[bu]+bt;
continue;
}var bM=bn*(bp.colSpan-1);

for(var i=0;i<bp.colSpan;i++){bM+=bo[bH+i];
}var bC=bt*(bp.rowSpan-1);

for(var i=0;i<bp.rowSpan;i++){bC+=bN[bu+i];
}var bq=bB.getSizeHint();
var bK=bB.getMarginTop();
var bA=bB.getMarginLeft();
var bx=bB.getMarginBottom();
var bs=bB.getMarginRight();
var bv=Math.max(bq.minWidth,Math.min(bM-bA-bs,bq.maxWidth));
var bL=Math.max(bq.minHeight,Math.min(bC-bK-bx,bq.maxHeight));
var bI=this.getCellAlign(bu,bH);
var bJ=bO+bz.computeHorizontalAlignOffset(bI.hAlign,bv,bM,bA,bs);
var br=top+bz.computeVerticalAlignOffset(bI.vAlign,bL,bC,bK,bx);
bB.renderLayout(bJ,br,bv,bL);
top+=bN[bu]+bt;
}bO+=bo[bH]+bn;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__nw=null;
this.__nv=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__nx();
}var dE=this._getColWidths();
var dG=0,dH=0;

for(var i=0,l=dE.length;i<l;i++){var dI=dE[i];

if(this.getColumnFlex(i)>0){dG+=dI.minWidth;
}else{dG+=dI.width;
}dH+=dI.width;
}var dJ=this._getRowHeights();
var dC=0,dF=0;

for(var i=0,l=dJ.length;i<l;i++){var dK=dJ[i];

if(this.getRowFlex(i)>0){dC+=dK.minHeight;
}else{dC+=dK.height;
}dF+=dK.height;
}var dB=this.getSpacingX()*(dE.length-1);
var dA=this.getSpacingY()*(dJ.length-1);
var dD={minWidth:dG+dB,width:dH+dB,minHeight:dC+dA,height:dF+dA};
return dD;
}},destruct:function(){this.__nq=this.__no=this.__np=this.__nr=this.__ns=this.__nw=this.__nv=null;
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__rT:function(){var d=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__rT();
}});
})();
(function(){var D="_",C="",B="qx.dynlocale",A="on",z="_applyLocale",y="changeLocale",x="C",w="qx.locale.Manager",v="String",u="singleton";
qx.Class.define(w,{type:u,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__nz=qx.$$translations||{};
this.__nA=qx.$$locales||{};
var e=qx.bom.client.Locale;
var c=e.LOCALE;
var d=e.VARIANT;

if(d!==C){c+=D+d;
}this.setLocale(c||this.__nB);
},statics:{tr:function(J,K){var L=qx.lang.Array.fromArguments(arguments);
L.splice(0,1);
return qx.locale.Manager.getInstance().translate(J,L);
},trn:function(g,h,j,k){var l=qx.lang.Array.fromArguments(arguments);
l.splice(0,3);
if(j!=1){return qx.locale.Manager.getInstance().translate(h,l);
}else{return qx.locale.Manager.getInstance().translate(g,l);
}},trc:function(Q,R,S){var T=qx.lang.Array.fromArguments(arguments);
T.splice(0,2);
return qx.locale.Manager.getInstance().translate(R,T);
},marktr:function(f){return f;
}},properties:{locale:{check:v,nullable:true,apply:z,event:y}},members:{__nB:x,__nC:null,__nD:null,__nz:null,__nA:null,getLanguage:function(){return this.__nD;
},getTerritory:function(){return this.getLocale().split(D)[1]||C;
},getAvailableLocales:function(){var F=[];

for(var E in this.__nA){if(E!=this.__nB){F.push(E);
}}return F;
},__nE:function(G){var I;
var H=G.indexOf(D);

if(H==-1){I=G;
}else{I=G.substring(0,H);
}return I;
},_applyLocale:function(a,b){this.__nC=a;
this.__nD=this.__nE(a);
},addTranslation:function(bd,be){var bf=this.__nz;

if(bf[bd]){for(var bg in be){bf[bd][bg]=be[bg];
}}else{bf[bd]=be;
}},addLocale:function(M,N){var O=this.__nA;

if(O[M]){for(var P in N){O[M][P]=N[P];
}}else{O[M]=N;
}},translate:function(m,n,o){var t;
var r=this.__nz;

if(!r){return m;
}
if(o){var q=this.__nE(o);
}else{o=this.__nC;
q=this.__nD;
}
if(!t&&r[o]){t=r[o][m];
}
if(!t&&r[q]){t=r[q][m];
}
if(!t&&r[this.__nB]){t=r[this.__nB][m];
}
if(!t){t=m;
}
if(n.length>0){var p=[];

for(var i=0;i<n.length;i++){var s=n[i];

if(s&&s.translate){p[i]=s.translate();
}else{p[i]=s;
}}t=qx.lang.String.format(t,p);
}
if(qx.core.Variant.isSet(B,A)){t=new qx.locale.LocalizedString(t,m,n);
}return t;
},localize:function(U,V,W){var bc;
var ba=this.__nA;

if(!ba){return U;
}
if(W){var Y=this.__nE(W);
}else{W=this.__nC;
Y=this.__nD;
}
if(!bc&&ba[W]){bc=ba[W][U];
}
if(!bc&&ba[Y]){bc=ba[Y][U];
}
if(!bc&&ba[this.__nB]){bc=ba[this.__nB][U];
}
if(!bc){bc=U;
}
if(V.length>0){var X=[];

for(var i=0;i<V.length;i++){var bb=V[i];

if(bb.translate){X[i]=bb.translate();
}else{X[i]=bb;
}}bc=qx.lang.String.format(bc,X);
}
if(qx.core.Variant.isSet(B,A)){bc=new qx.locale.LocalizedString(bc,U,V);
}return bc;
}},destruct:function(){this.__nz=this.__nA=null;
}});
})();
(function(){var N="keydown",M="qx.client",L="keypress",K="NumLock",J="keyup",I="Enter",H="0",G="9",F="-",E="PageUp",bU="+",bT="PrintScreen",bS="gecko",bR="A",bQ="Z",bP="Left",bO="F5",bN="Down",bM="Up",bL="F11",U="F6",V="useraction",S="F3",T="keyinput",Q="Insert",R="F8",O="End",P="/",bd="Delete",be="*",bq="F1",bm="F4",by="Home",bt="F2",bH="F12",bD="PageDown",bi="F7",bK="F9",bJ="F10",bI="Right",bh="text",bk="Escape",bl="webkit",bo="5",br="3",bu="Meta",bA="7",bF="CapsLock",W="input",X="Control",bj="Space",bx="Tab",bw="Shift",bv="Pause",bC="Unidentified",bB="qx.event.handler.Keyboard",bs="mshtml",bz="mshtml|webkit",B="6",bE="off",Y="Apps",ba="4",bn="Alt",C="2",D="Scroll",bg="1",bb="8",bc="Win",bf="autoComplete",bp=",",bG="Backspace";
qx.Class.define(bB,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(j){arguments.callee.base.call(this);
this.__qW=j;
this.__qX=j.getWindow();
if(qx.core.Variant.isSet(M,bS)){this.__qY=this.__qX;
}else{this.__qY=this.__qX.document.documentElement;
}this.__ra={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(i){if(this._identifierToKeyCodeMap[i]){return true;
}
if(i.length!=1){return false;
}
if(i>=H&&i<=G){return true;
}
if(i>=bR&&i<=bQ){return true;
}
switch(i){case bU:case F:case be:case P:return true;
default:return false;
}}},members:{__rb:null,__qW:null,__qX:null,__qY:null,__ra:null,__rc:null,__rd:null,__re:null,canHandleEvent:function(k,l){},registerEvent:function(cw,cx,cy){},unregisterEvent:function(y,z,A){},_fireInputEvent:function(cp,cq){var cr=this.__rf();
if(cr&&cr.offsetWidth!=0){var event=qx.event.Registration.createEvent(T,qx.event.type.KeyInput,[cp,cr,cq]);
this.__qW.dispatchEvent(cr,event);
}if(this.__qX){qx.event.Registration.fireEvent(this.__qX,V,qx.event.type.Data,[T]);
}},_fireSequenceEvent:function(o,p,q){var r=this.__rf();
var s=o.keyCode;
var event=qx.event.Registration.createEvent(p,qx.event.type.KeySequence,[o,r,q]);
this.__qW.dispatchEvent(r,event);
if(qx.core.Variant.isSet(M,bz)){if(p==N&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(s)&&!this._emulateKeyPress[s]){this._fireSequenceEvent(o,L,q);
}}}if(this.__qX){qx.event.Registration.fireEvent(this.__qX,V,qx.event.type.Data,[p]);
}},__rf:function(){var v=this.__qW.getHandler(qx.event.handler.Focus);
var w=v.getActive();
if(!w||w.offsetWidth==0){w=v.getFocus();
}if(!w||w.offsetWidth==0){w=this.__qW.getWindow().document.body;
}return w;
},_initKeyObserver:function(){this.__rb=qx.lang.Function.listener(this.__rg,this);
this.__re=qx.lang.Function.listener(this.__ri,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__qY,J,this.__rb);
Event.addNativeListener(this.__qY,N,this.__rb);
Event.addNativeListener(this.__qY,L,this.__re);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__qY,J,this.__rb);
Event.removeNativeListener(this.__qY,N,this.__rb);
Event.removeNativeListener(this.__qY,L,this.__re);

for(var u in (this.__rd||{})){var t=this.__rd[u];
Event.removeNativeListener(t.target,L,t.callback);
}delete (this.__rd);
},__rg:qx.event.GlobalError.observeMethod(qx.core.Variant.select(M,{"mshtml":function(e){e=window.event||e;
var h=e.keyCode;
var f=0;
var g=e.type;
if(!(this.__ra[h]==N&&g==N)){this._idealKeyHandler(h,f,g,e);
}if(g==N){if(this._isNonPrintableKeyCode(h)||this._emulateKeyPress[h]){this._idealKeyHandler(h,f,L,e);
}}this.__ra[h]=g;
},"gecko":function(ck){var co=this._keyCodeFix[ck.keyCode]||ck.keyCode;
var cm=0;
var cn=ck.type;
if(qx.bom.client.Platform.WIN){var cl=co?this._keyCodeToIdentifier(co):this._charCodeToIdentifier(cm);

if(!(this.__ra[cl]==N&&cn==N)){this._idealKeyHandler(co,cm,cn,ck);
}this.__ra[cl]=cn;
}else{this._idealKeyHandler(co,cm,cn,ck);
}this.__rh(ck.target,cn,co);
},"webkit":function(bV){var bY=0;
var bW=0;
var bX=bV.type;
if(qx.bom.client.Engine.VERSION<525.13){if(bX==J||bX==N){bY=this._charCode2KeyCode[bV.charCode]||bV.keyCode;
}else{if(this._charCode2KeyCode[bV.charCode]){bY=this._charCode2KeyCode[bV.charCode];
}else{bW=bV.charCode;
}}this._idealKeyHandler(bY,bW,bX,bV);
}else{bY=bV.keyCode;
if(!(this.__ra[bY]==N&&bX==N)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==N){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,L,bV);
}}this.__ra[bY]=bX;
}},"opera":function(cs){this.__rc=cs.keyCode;
this._idealKeyHandler(cs.keyCode,0,cs.type,cs);
}})),__rh:qx.core.Variant.select(M,{"gecko":function(ca,cb,cc){if(cb===N&&(cc==33||cc==34||cc==38||cc==40)&&ca.type==bh&&ca.tagName.toLowerCase()===W&&ca.getAttribute(bf)!==bE){if(!this.__rd){this.__rd={};
}var ce=qx.core.ObjectRegistry.toHashCode(ca);

if(this.__rd[ce]){return;
}var self=this;
this.__rd[ce]={target:ca,callback:function(n){qx.bom.Event.stopPropagation(n);
self.__ri(n);
}};
var cd=qx.event.GlobalError.observeMethod(this.__rd[ce].callback);
qx.bom.Event.addNativeListener(ca,L,cd);
}},"default":null}),__ri:qx.event.GlobalError.observeMethod(qx.core.Variant.select(M,{"mshtml":function(cj){cj=window.event||cj;

if(this._charCode2KeyCode[cj.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cj.keyCode],0,cj.type,cj);
}else{this._idealKeyHandler(0,cj.keyCode,cj.type,cj);
}},"gecko":function(cD){var cG=this._keyCodeFix[cD.keyCode]||cD.keyCode;
var cE=cD.charCode;
var cF=cD.type;
this._idealKeyHandler(cG,cE,cF,cD);
},"webkit":function(cf){if(qx.bom.client.Engine.VERSION<525.13){var ci=0;
var cg=0;
var ch=cf.type;

if(ch==J||ch==N){ci=this._charCode2KeyCode[cf.charCode]||cf.keyCode;
}else{if(this._charCode2KeyCode[cf.charCode]){ci=this._charCode2KeyCode[cf.charCode];
}else{cg=cf.charCode;
}}this._idealKeyHandler(ci,cg,ch,cf);
}else{if(this._charCode2KeyCode[cf.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cf.keyCode],0,cf.type,cf);
}else{this._idealKeyHandler(0,cf.keyCode,cf.type,cf);
}}},"opera":function(cA){var cC=cA.keyCode;
var cB=cA.type;
if(cC!=this.__rc){this._idealKeyHandler(0,this.__rc,cB,cA);
}else{if(this._keyCodeToIdentifierMap[cA.keyCode]){this._idealKeyHandler(cA.keyCode,0,cA.type,cA);
}else{this._idealKeyHandler(0,cA.keyCode,cA.type,cA);
}}}})),_idealKeyHandler:function(cH,cI,cJ,cK){var cL;
if(cH||(!cH&&!cI)){cL=this._keyCodeToIdentifier(cH);
this._fireSequenceEvent(cK,cJ,cL);
}else{cL=this._charCodeToIdentifier(cI);
this._fireSequenceEvent(cK,L,cL);
this._fireInputEvent(cK,cI);
}},_specialCharCodeMap:{8:bG,9:bx,13:I,27:bk,32:bj},_emulateKeyPress:qx.core.Variant.select(M,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bw,17:X,18:bn,20:bF,224:bu,37:bP,38:bM,39:bI,40:bN,33:E,34:bD,35:O,36:by,45:Q,46:bd,112:bq,113:bt,114:S,115:bm,116:bO,117:U,118:bi,119:R,120:bK,121:bJ,122:bL,123:bH,144:K,44:bT,145:D,19:bv,91:bc,93:Y},_numpadToCharCode:{96:H.charCodeAt(0),97:bg.charCodeAt(0),98:C.charCodeAt(0),99:br.charCodeAt(0),100:ba.charCodeAt(0),101:bo.charCodeAt(0),102:B.charCodeAt(0),103:bA.charCodeAt(0),104:bb.charCodeAt(0),105:G.charCodeAt(0),106:be.charCodeAt(0),107:bU.charCodeAt(0),109:F.charCodeAt(0),110:bp.charCodeAt(0),111:P.charCodeAt(0)},_charCodeA:bR.charCodeAt(0),_charCodeZ:bQ.charCodeAt(0),_charCode0:H.charCodeAt(0),_charCode9:G.charCodeAt(0),_isNonPrintableKeyCode:function(m){return this._keyCodeToIdentifierMap[m]?true:false;
},_isIdentifiableKeyCode:function(x){if(x>=this._charCodeA&&x<=this._charCodeZ){return true;
}if(x>=this._charCode0&&x<=this._charCode9){return true;
}if(this._specialCharCodeMap[x]){return true;
}if(this._numpadToCharCode[x]){return true;
}if(this._isNonPrintableKeyCode(x)){return true;
}return false;
},_keyCodeToIdentifier:function(cu){if(this._isIdentifiableKeyCode(cu)){var cv=this._numpadToCharCode[cu];

if(cv){return String.fromCharCode(cv);
}return (this._keyCodeToIdentifierMap[cu]||this._specialCharCodeMap[cu]||String.fromCharCode(cu));
}else{return bC;
}},_charCodeToIdentifier:function(ct){return this._specialCharCodeMap[ct]||String.fromCharCode(ct).toUpperCase();
},_identifierToKeyCode:function(cz){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cz]||cz.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__rc=this.__qW=this.__qX=this.__qY=this.__ra=null;
},defer:function(a,b,c){qx.event.Registration.addHandler(a);
if(!a._identifierToKeyCodeMap){a._identifierToKeyCodeMap={};

for(var d in b._keyCodeToIdentifierMap){a._identifierToKeyCodeMap[b._keyCodeToIdentifierMap[d]]=parseInt(d,10);
}
for(var d in b._specialCharCodeMap){a._identifierToKeyCodeMap[b._specialCharCodeMap[d]]=parseInt(d,10);
}}
if(qx.core.Variant.isSet(M,bs)){b._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(M,bS)){b._keyCodeFix={12:b._identifierToKeyCode(K)};
}else if(qx.core.Variant.isSet(M,bl)){if(qx.bom.client.Engine.VERSION<525.13){b._charCode2KeyCode={63289:b._identifierToKeyCode(K),63276:b._identifierToKeyCode(E),63277:b._identifierToKeyCode(bD),63275:b._identifierToKeyCode(O),63273:b._identifierToKeyCode(by),63234:b._identifierToKeyCode(bP),63232:b._identifierToKeyCode(bM),63235:b._identifierToKeyCode(bI),63233:b._identifierToKeyCode(bN),63272:b._identifierToKeyCode(bd),63302:b._identifierToKeyCode(Q),63236:b._identifierToKeyCode(bq),63237:b._identifierToKeyCode(bt),63238:b._identifierToKeyCode(S),63239:b._identifierToKeyCode(bm),63240:b._identifierToKeyCode(bO),63241:b._identifierToKeyCode(U),63242:b._identifierToKeyCode(bi),63243:b._identifierToKeyCode(R),63244:b._identifierToKeyCode(bK),63245:b._identifierToKeyCode(bJ),63246:b._identifierToKeyCode(bL),63247:b._identifierToKeyCode(bH),63248:b._identifierToKeyCode(bT),3:b._identifierToKeyCode(I),12:b._identifierToKeyCode(K),13:b._identifierToKeyCode(I)};
}else{b._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var d="qx.event.handler.Capture";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(f,g){},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){}},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var G="alias",F="copy",E="blur",D="mouseout",C="keydown",B="Ctrl",A="Shift",z="mousemove",y="move",x="mouseover",W="Alt",V="keyup",U="mouseup",T="dragend",S="on",R="mousedown",Q="qxDraggable",P="drag",O="drop",N="qxDroppable",L="qx.event.handler.DragDrop",M="droprequest",J="dragstart",K="dragchange",H="dragleave",I="dragover";
qx.Class.define(L,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){arguments.callee.base.call(this);
this.__nF=c;
this.__nG=c.getWindow().document.documentElement;
this.__nF.addListener(this.__nG,R,this._onMouseDown,this);
this.__nS();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__nF:null,__nG:null,__nH:null,__nI:null,__nJ:null,__nK:null,__nL:null,__nM:null,__nN:null,__nO:null,__nP:false,__nQ:0,__nR:0,canHandleEvent:function(j,k){},registerEvent:function(bg,bh,bi){},unregisterEvent:function(d,f,g){},addType:function(a){this.__nJ[a]=true;
},addAction:function(bj){this.__nK[bj]=true;
},supportsType:function(s){return !!this.__nJ[s];
},supportsAction:function(h){return !!this.__nK[h];
},getData:function(v){if(!this.__oa||!this.__nH){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__nJ[v]){throw new Error("Unsupported data type: "+v+"!");
}
if(!this.__nM[v]){this.__nN=v;
this.__nU(M,this.__nI,this.__nH,false);
}
if(!this.__nM[v]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__nM[v]||null;
},getCurrentAction:function(){return this.__nO;
},addData:function(n,o){this.__nM[n]=o;
},getCurrentType:function(){return this.__nN;
},__nS:function(){this.__nJ={};
this.__nK={};
this.__nL={};
this.__nM={};
},__nT:function(){var bm=this.__nK;
var bk=this.__nL;
var bl=null;

if(this.__oa){if(bk.Shift&&bk.Ctrl&&bm.alias){bl=G;
}else if(bk.Shift&&bk.Alt&&bm.copy){bl=F;
}else if(bk.Shift&&bm.move){bl=y;
}else if(bk.Alt&&bm.alias){bl=G;
}else if(bk.Ctrl&&bm.copy){bl=F;
}else if(bm.move){bl=y;
}else if(bm.copy){bl=F;
}else if(bm.alias){bl=G;
}}
if(bl!=this.__nO){this.__nO=bl;
this.__nU(K,this.__nI,this.__nH,false);
}},__nU:function(Y,ba,bb,bc,bd){var bf=qx.event.Registration;
var be=bf.createEvent(Y,qx.event.type.Drag,[bc,bd]);

if(ba!==bb){be.setRelatedTarget(bb);
}return bf.dispatchEvent(ba,be);
},__nV:function(w){while(w&&w.nodeType==1){if(w.getAttribute(Q)==S){return w;
}w=w.parentNode;
}return null;
},__nW:function(b){while(b&&b.nodeType==1){if(b.getAttribute(N)==S){return b;
}b=b.parentNode;
}return null;
},__nX:function(){this.__nI=null;
this.__nF.removeListener(this.__nG,z,this._onMouseMove,this,true);
this.__nF.removeListener(this.__nG,U,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,E,this._onWindowBlur,this);
this.__nS();
},__nY:function(){if(this.__nP){this.__nF.removeListener(this.__nG,x,this._onMouseOver,this,true);
this.__nF.removeListener(this.__nG,D,this._onMouseOut,this,true);
this.__nF.removeListener(this.__nG,C,this._onKeyDown,this,true);
this.__nF.removeListener(this.__nG,V,this._onKeyUp,this,true);
this.__nU(T,this.__nI,this.__nH,false);
this.__nP=false;
}this.__oa=false;
this.__nH=null;
this.__nX();
},__oa:false,_onWindowBlur:function(e){this.__nY();
},_onKeyDown:function(e){var X=e.getKeyIdentifier();

switch(X){case W:case B:case A:if(!this.__nL[X]){this.__nL[X]=true;
this.__nT();
}}},_onKeyUp:function(e){var i=e.getKeyIdentifier();

switch(i){case W:case B:case A:if(this.__nL[i]){this.__nL[i]=false;
this.__nT();
}}},_onMouseDown:function(e){if(this.__nP){return;
}var u=this.__nV(e.getTarget());

if(u){this.__nQ=e.getDocumentLeft();
this.__nR=e.getDocumentTop();
this.__nI=u;
this.__nF.addListener(this.__nG,z,this._onMouseMove,this,true);
this.__nF.addListener(this.__nG,U,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,E,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__oa){this.__nU(O,this.__nH,this.__nI,false,e);
}if(this.__nP){e.stopPropagation();
}this.__nY();
},_onMouseMove:function(e){if(this.__nP){if(!this.__nU(P,this.__nI,this.__nH,true,e)){this.__nY();
}}else{if(Math.abs(e.getDocumentLeft()-this.__nQ)>3||Math.abs(e.getDocumentTop()-this.__nR)>3){if(this.__nU(J,this.__nI,this.__nH,true,e)){this.__nP=true;
this.__nF.addListener(this.__nG,x,this._onMouseOver,this,true);
this.__nF.addListener(this.__nG,D,this._onMouseOut,this,true);
this.__nF.addListener(this.__nG,C,this._onKeyDown,this,true);
this.__nF.addListener(this.__nG,V,this._onKeyUp,this,true);
var t=this.__nL;
t.Ctrl=e.isCtrlPressed();
t.Shift=e.isShiftPressed();
t.Alt=e.isAltPressed();
this.__nT();
}else{this.__nU(T,this.__nI,this.__nH,false);
this.__nX();
}}}},_onMouseOver:function(e){var p=e.getTarget();
var q=this.__nW(p);

if(q&&q!=this.__nH){this.__oa=this.__nU(I,q,this.__nI,true,e);
this.__nH=q;
this.__nT();
}},_onMouseOut:function(e){var m=this.__nW(e.getTarget());
var l=this.__nW(e.getRelatedTarget());

if(m&&m!==l&&m==this.__nH){this.__nU(H,this.__nH,l,false,e);
this.__nH=null;
this.__oa=false;
qx.event.Timer.once(this.__nT,this,0);
}}},destruct:function(){this.__nI=this.__nH=this.__nF=this.__nG=this.__nJ=this.__nK=this.__nL=this.__nM=null;
},defer:function(r){qx.event.Registration.addHandler(r);
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__ob:null,__oc:null,init:function(d,e,f){arguments.callee.base.call(this,false,f);
this.__ob=d;
this.__oc=e;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c.__ob=this.__ob;
c.__oc=this.__oc;
return c;
},getData:function(){return this.__ob;
},getOldData:function(){return this.__oc;
}},destruct:function(){this.__ob=this.__oc=null;
}});
})();
(function(){var p="mshtml",o="qx.client",n="qx.bom.element.Dimension",m="paddingRight",l="paddingLeft",k="paddingTop",j="paddingBottom";
qx.Class.define(n,{statics:{getWidth:qx.core.Variant.select(o,{"gecko":function(q){if(q.getBoundingClientRect){var r=q.getBoundingClientRect();
return Math.round(r.right)-Math.round(r.left);
}else{return q.offsetWidth;
}},"default":function(B){return B.offsetWidth;
}}),getHeight:qx.core.Variant.select(o,{"gecko":function(h){if(h.getBoundingClientRect){var i=h.getBoundingClientRect();
return Math.round(i.bottom)-Math.round(i.top);
}else{return h.offsetHeight;
}},"default":function(A){return A.offsetHeight;
}}),getSize:function(C){return {width:this.getWidth(C),height:this.getHeight(C)};
},__og:{visible:true,hidden:true},getContentWidth:function(a){var c=qx.bom.element.Style;
var d=qx.bom.element.Overflow.getX(a);
var e=parseInt(c.get(a,l),10);
var g=parseInt(c.get(a,m),10);

if(this.__og[d]){return a.clientWidth-e-g;
}else{if(a.clientWidth>=a.scrollWidth){return Math.max(a.clientWidth,a.scrollWidth)-e-g;
}else{var f=a.scrollWidth-e;
var b=qx.bom.client.Engine;

if(b.NAME===p&&b.VERSION==6){f-=g;
}return f;
}}},getContentHeight:function(t){var v=qx.bom.element.Style;
var x=qx.bom.element.Overflow.getY(t);
var y=parseInt(v.get(t,k),10);
var w=parseInt(v.get(t,j),10);

if(this.__og[x]){return t.clientHeight-y-w;
}else{if(t.clientHeight>=t.scrollHeight){return Math.max(t.clientHeight,t.scrollHeight)-y-w;
}else{var z=t.scrollHeight-y;
var u=qx.bom.client.Engine;

if(u.NAME===p&&u.VERSION==6){z-=w;
}return z;
}}},getContentSize:function(s){return {width:this.getContentWidth(s),height:this.getContentHeight(s)};
}}});
})();
(function(){var f="qx.client",e="load",d="qx.io.ImageLoader";
qx.Bootstrap.define(d,{statics:{__oh:{},__oi:{width:null,height:null},__oj:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(x){var y=this.__oh[x];
return !!(y&&y.loaded);
},isFailed:function(G){var H=this.__oh[G];
return !!(H&&H.failed);
},isLoading:function(v){var w=this.__oh[v];
return !!(w&&w.loading);
},getFormat:function(h){var j=this.__oh[h];
return j?j.format:null;
},getSize:function(r){var s=this.__oh[r];
return s?
{width:s.width,height:s.height}:this.__oi;
},getWidth:function(b){var c=this.__oh[b];
return c?c.width:null;
},getHeight:function(t){var u=this.__oh[t];
return u?u.height:null;
},load:function(k,m,n){var o=this.__oh[k];

if(!o){o=this.__oh[k]={};
}if(m&&!n){n=window;
}if(o.loaded||o.loading||o.failed){if(m){if(o.loading){o.callbacks.push(m,n);
}else{m.call(n,k,o);
}}}else{o.loading=true;
o.callbacks=[];

if(m){o.callbacks.push(m,n);
}var q=new Image();
var p=qx.lang.Function.listener(this.__ok,this,q,k);
q.onload=p;
q.onerror=p;
q.src=k;
}},__ok:qx.event.GlobalError.observeMethod(function(event,A,B){var C=this.__oh[B];
if(event.type===e){C.loaded=true;
C.width=this.__ol(A);
C.height=this.__om(A);
var D=this.__oj.exec(B);

if(D!=null){C.format=D[1];
}}else{C.failed=true;
}A.onload=A.onerror=null;
var E=C.callbacks;
delete C.loading;
delete C.callbacks;
for(var i=0,l=E.length;i<l;i+=2){E[i].call(E[i+1],B,C);
}}),__ol:qx.core.Variant.select(f,{"gecko":function(z){return z.naturalWidth;
},"default":function(a){return a.width;
}}),__om:qx.core.Variant.select(f,{"gecko":function(F){return F.naturalHeight;
},"default":function(g){return g.height;
}})}});
})();
(function(){var g="qx.client",f="qx.event.type.Drag";
qx.Class.define(f,{extend:qx.event.type.Event,members:{init:function(k,l){arguments.callee.base.call(this,true,k);

if(l){this._native=l.getNativeEvent()||null;
this._originalTarget=l.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(d){var e=arguments.callee.base.call(this,d);
e._native=this._native;
return e;
},getDocumentLeft:qx.core.Variant.select(g,{"mshtml":function(){if(this._native==null){return 0;
}var n=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(n);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(g,{"mshtml":function(){if(this._native==null){return 0;
}var c=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(c);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(m){this.getManager().addType(m);
},addAction:function(j){this.getManager().addAction(j);
},supportsType:function(h){return this.getManager().supportsType(h);
},supportsAction:function(i){return this.getManager().supportsAction(i);
},addData:function(a,b){this.getManager().addData(a,b);
},getData:function(o){return this.getManager().getData(o);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var n="/",m="mshtml",l="",k="qx.client",j="?",i="string",h="qx.util.ResourceManager",g="singleton";
qx.Class.define(h,{extend:qx.core.Object,type:g,statics:{__or:qx.$$resources||{},__os:{}},members:{has:function(o){return !!arguments.callee.self.__or[o];
},getData:function(r){return arguments.callee.self.__or[r]||null;
},getImageWidth:function(p){var q=arguments.callee.self.__or[p];
return q?q[0]:null;
},getImageHeight:function(s){var t=arguments.callee.self.__or[s];
return t?t[1]:null;
},getImageFormat:function(a){var b=arguments.callee.self.__or[a];
return b?b[2]:null;
},isClippedImage:function(A){var B=arguments.callee.self.__or[A];
return B&&B.length>4;
},toUri:function(c){if(c==null){return c;
}var d=arguments.callee.self.__or[c];

if(!d){return c;
}
if(typeof d===i){var f=d;
}else{var f=d[3];
if(!f){return c;
}}var e=l;

if(qx.core.Variant.isSet(k,m)&&qx.bom.client.Feature.SSL){e=arguments.callee.self.__os[f];
}return e+qx.$$libraries[f].resourceUri+n+c;
}},defer:function(u){if(qx.core.Variant.isSet(k,m)){if(qx.bom.client.Feature.SSL){for(var y in qx.$$libraries){var w;

if(qx.$$libraries[y].resourceUri){w=qx.$$libraries[y].resourceUri;
}else{u.__os[y]=l;
continue;
}if(w.match(/^\/\//)!=null){u.__os[y]=window.location.protocol;
}else if(w.match(/^\.\//)!=null){var v=document.URL;
u.__os[y]=v.substring(0,v.lastIndexOf(n)+1);
}else if(w.match(/^http/)!=null){}else{var z=window.location.href.indexOf(j);
var x;

if(z==-1){x=window.location.href;
}else{x=window.location.href.substring(0,z);
}u.__os[y]=x.substring(0,x.lastIndexOf(n)+1);
}}}}}});
})();
(function(){var i="object",h="__ot",g="_applyTheme",f="qx.theme.manager.Decoration",e="Theme",d="string",c="singleton";
qx.Class.define(f,{type:c,extend:qx.core.Object,properties:{theme:{check:e,nullable:true,apply:g}},members:{__ot:null,resolve:function(p){if(!p){return null;
}
if(typeof p===i){return p;
}var s=this.getTheme();

if(!s){return null;
}var s=this.getTheme();

if(!s){return null;
}var t=this.__ot;

if(!t){t=this.__ot={};
}var q=t[p];

if(q){return q;
}var r=s.decorations[p];

if(!r){return null;
}var u=r.decorator;

if(u==null){throw new Error("Missing definition of which decorator to use in entry: "+p+"!");
}return t[p]=(new u).set(r.style);
},isValidPropertyValue:function(j){if(typeof j===d){return this.isDynamic(j);
}else if(typeof j===i){var k=j.constructor;
return qx.Class.hasInterface(k,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(a){if(!a){return false;
}var b=this.getTheme();

if(!b){return false;
}return !!b.decorations[a];
},_applyTheme:function(l,m){var o=qx.util.AliasManager.getInstance();

if(m){for(var n in m.aliases){o.remove(n);
}}
if(l){for(var n in l.aliases){o.add(n,l.aliases[n]);
}}
if(!l){this.__ot={};
}}},destruct:function(){this._disposeMap(h);
}});
})();
(function(){var x="qx.client",w="",v="boxSizing",u="box-sizing",t=":",s="border-box",r="qx.bom.element.BoxSizing",q="KhtmlBoxSizing",p="-moz-box-sizing",o="WebkitBoxSizing",k=";",n="-khtml-box-sizing",m="content-box",j="-webkit-box-sizing",h="MozBoxSizing";
qx.Class.define(r,{statics:{__ou:qx.core.Variant.select(x,{"mshtml":null,"webkit":[v,q,o],"gecko":[h],"opera":[v]}),__ov:qx.core.Variant.select(x,{"mshtml":null,"webkit":[u,n,j],"gecko":[p],"opera":[u]}),__ow:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__ox:function(B){var C=this.__ow;
return C.tags[B.tagName.toLowerCase()]||C.types[B.type];
},compile:qx.core.Variant.select(x,{"mshtml":function(F){{};
},"default":function(y){var A=this.__ov;
var z=w;

if(A){for(var i=0,l=A.length;i<l;i++){z+=A[i]+t+y+k;
}}return z;
}}),get:qx.core.Variant.select(x,{"mshtml":function(G){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(G))){if(!this.__ox(G)){return m;
}}return s;
},"default":function(e){var g=this.__ou;
var f;

if(g){for(var i=0,l=g.length;i<l;i++){f=qx.bom.element.Style.get(e,g[i],null,false);

if(f!=null&&f!==w){return f;
}}}return w;
}}),set:qx.core.Variant.select(x,{"mshtml":function(D,E){{};
},"default":function(b,c){var d=this.__ou;

if(d){for(var i=0,l=d.length;i<l;i++){b.style[d[i]]=c;
}}}}),reset:function(a){this.set(a,w);
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
(function(){var y="number",x="0",w="px",v=";",u="background-image:url(",t=");",s="",r=")",q="background-repeat:",p=" ",m="qx.bom.element.Background",o="url(",n="background-position:";
qx.Class.define(m,{statics:{__oy:[u,null,t,n,null,v,q,null,v],__oz:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__oA:function(F,top){var G=qx.bom.client.Engine;

if(G.GECKO&&G.VERSION<1.9&&F==top&&typeof F==y){top+=0.01;
}
if(F){var H=(typeof F==y)?F+w:F;
}else{H=x;
}
if(top){var I=(typeof top==y)?top+w:top;
}else{I=x;
}return H+p+I;
},compile:function(a,b,c,top){var d=this.__oA(c,top);
var e=qx.util.ResourceManager.getInstance().toUri(a);
var f=this.__oy;
f[1]=e;
f[4]=d;
f[7]=b;
return f.join(s);
},getStyles:function(g,h,i,top){if(!g){return this.__oz;
}var j=this.__oA(i,top);
var k=qx.util.ResourceManager.getInstance().toUri(g);
var l={backgroundPosition:j,backgroundImage:o+k+r};

if(h!=null){l.backgroundRepeat=h;
}return l;
},set:function(z,A,B,C,top){var D=this.getStyles(A,B,C,top);

for(var E in D){z.style[E]=D[E];
}}}});
})();
(function(){var f="-",e="qx.event.handler.Element";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){arguments.callee.base.call(this);
this._manager=c;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(g,h,i){var l=qx.core.ObjectRegistry.toHashCode(g);
var j=l+f+h;
var k=qx.lang.Function.listener(this._onNative,this,j);
qx.bom.Event.addNativeListener(g,h,k);
this._registeredEvents[j]={element:g,type:h,listener:k};
},unregisterEvent:function(t,u,v){var y=this._registeredEvents;

if(!y){return;
}var z=qx.core.ObjectRegistry.toHashCode(t);
var w=z+f+u;
var x=this._registeredEvents[w];
qx.bom.Event.removeNativeListener(t,u,x.listener);
delete this._registeredEvents[w];
},_onNative:qx.event.GlobalError.observeMethod(function(p,q){var s=this._registeredEvents;

if(!s){return;
}var r=s[q];
qx.event.Registration.fireNonBubblingEvent(r.element,r.type,qx.event.type.Native,[p]);
})},destruct:function(){var m;
var n=this._registeredEvents;

for(var o in n){m=n[o];
qx.bom.Event.removeNativeListener(m.element,m.type,m.listener);
}this._manager=this._registeredEvents=null;
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var k="CSS1Compat",j="position:absolute;width:0;height:0;width:1",i="qx.bom.Document",h="1px",g="qx.client",f="div";
qx.Class.define(i,{statics:{isQuirksMode:qx.core.Variant.select(g,{"mshtml":function(m){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (m||window).document.compatMode!==k;
}},"webkit":function(d){if(document.compatMode===undefined){var e=(d||window).document.createElement(f);
e.style.cssText=j;
return e.style.width===h?true:false;
}else{return (d||window).document.compatMode!==k;
}},"default":function(n){return (n||window).document.compatMode!==k;
}}),isStandardMode:function(l){return !this.isQuirksMode(l);
},getWidth:function(a){var b=(a||window).document;
var c=qx.bom.Viewport.getWidth(a);
var scroll=this.isStandardMode(a)?b.documentElement.scrollWidth:b.body.scrollWidth;
return Math.max(scroll,c);
},getHeight:function(o){var p=(o||window).document;
var q=qx.bom.Viewport.getHeight(o);
var scroll=this.isStandardMode(o)?p.documentElement.scrollHeight:p.body.scrollHeight;
return Math.max(scroll,q);
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__pG:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(m){return g+(this.__pG[m]||m)+e;
},get:function(n,o){return qx.bom.element.Style.get(n,c,o,false);
},set:function(p,q){p.style.cursor=this.__pG[q]||q;
},reset:function(a){a.style.cursor=h;
}}});
})();
(function(){var F="_applyLayoutChange",E="top",D="left",C="middle",B="Decorator",A="center",z="_applyReversed",y="bottom",x="qx.ui.layout.VBox",w="Integer",u="right",v="Boolean";
qx.Class.define(x,{extend:qx.ui.layout.Abstract,construct:function(r,s,t){arguments.callee.base.call(this);

if(r){this.setSpacing(r);
}
if(s){this.setAlignY(s);
}
if(t){this.setSeparator(t);
}},properties:{alignY:{check:[E,C,y],init:E,apply:F},alignX:{check:[D,A,u],init:D,apply:F},spacing:{check:w,init:0,apply:F},separator:{check:B,nullable:true,apply:F},reversed:{check:v,init:false,apply:z}},members:{__pH:null,__pI:null,__pJ:null,__pK:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__pL:function(){var bk=this._getLayoutChildren();
var length=bk.length;
var bg=false;
var bf=this.__pH&&this.__pH.length!=length&&this.__pI&&this.__pH;
var bi;
var bh=bf?this.__pH:new Array(length);
var bj=bf?this.__pI:new Array(length);
if(this.getReversed()){bk=bk.concat().reverse();
}for(var i=0;i<length;i++){bi=bk[i].getLayoutProperties();

if(bi.height!=null){bh[i]=parseFloat(bi.height)/100;
}
if(bi.flex!=null){bj[i]=bi.flex;
bg=true;
}else{bj[i]=0;
}}if(!bf){this.__pH=bh;
this.__pI=bj;
}this.__pJ=bg;
this.__pK=bk;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(G,H){if(this._invalidChildrenCache){this.__pL();
}var O=this.__pK;
var length=O.length;
var Y=qx.ui.layout.Util;
var X=this.getSpacing();
var bc=this.getSeparator();

if(bc){var L=Y.computeVerticalSeparatorGaps(O,X,bc);
}else{var L=Y.computeVerticalGaps(O,X,true);
}var i,J,K,S;
var T=[];
var ba=L;

for(i=0;i<length;i+=1){S=this.__pH[i];
K=S!=null?Math.floor((H-L)*S):O[i].getSizeHint().height;
T.push(K);
ba+=K;
}if(this.__pJ&&ba!=H){var Q={};
var W,bb;

for(i=0;i<length;i+=1){W=this.__pI[i];

if(W>0){P=O[i].getSizeHint();
Q[i]={min:P.minHeight,value:T[i],max:P.maxHeight,flex:W};
}}var M=Y.computeFlexOffsets(Q,H,ba);

for(i in M){bb=M[i].offset;
T[i]+=bb;
ba+=bb;
}}var top=O[0].getMarginTop();
if(ba<H&&this.getAlignY()!=E){top=H-ba;

if(this.getAlignY()===C){top=Math.round(top/2);
}}var P,be,U,K,R,V,N;
this._clearSeparators();
if(bc){var bd=qx.theme.manager.Decoration.getInstance().resolve(bc).getInsets();
var I=bd.top+bd.bottom;
}for(i=0;i<length;i+=1){J=O[i];
K=T[i];
P=J.getSizeHint();
V=J.getMarginLeft();
N=J.getMarginRight();
U=Math.max(P.minWidth,Math.min(G-V-N,P.maxWidth));
be=Y.computeHorizontalAlignOffset(J.getAlignX()||this.getAlignX(),U,G,V,N);
if(i>0){if(bc){top+=R+X;
this._renderSeparator(bc,{top:top,left:0,height:I,width:G});
top+=I+X+J.getMarginTop();
}else{top+=Y.collapseMargins(X,R,J.getMarginTop());
}}J.renderLayout(be,top,U,K);
top+=K;
R=J.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__pL();
}var g=qx.ui.layout.Util;
var q=this.__pK;
var c=0,f=0,e=0;
var a=0,h=0;
var n,b,p;
for(var i=0,l=q.length;i<l;i+=1){n=q[i];
b=n.getSizeHint();
f+=b.height;
var m=this.__pI[i];
var d=this.__pH[i];

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
}},destruct:function(){this.__pH=this.__pI=this.__pK=null;
}});
})();
(function(){var c="qx.event.type.KeyInput";
qx.Class.define(c,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._charCode=f;
return this;
},clone:function(a){var b=arguments.callee.base.call(this,a);
b._charCode=this._charCode;
return b;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__pM:{},add:function(c){var d=this.__pM;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__pM;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__pM={};
}}});
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
(function(){var p="",o="qx.client",n=";",m="filter",l="opacity:",k="opacity",j="MozOpacity",i=");",h=")",g="zoom:1;filter:alpha(opacity=",d="qx.bom.element.Opacity",f="alpha(opacity=",e="-moz-opacity:";
qx.Class.define(d,{statics:{compile:qx.core.Variant.select(o,{"mshtml":function(v){if(v>=1){return p;
}
if(v<0.00001){v=0;
}return g+(v*100)+i;
},"gecko":function(q){if(q==1){q=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return e+q+n;
}else{return l+q+n;
}},"default":function(u){if(u==1){return p;
}return l+u+n;
}}),set:qx.core.Variant.select(o,{"mshtml":function(a,b){var c=qx.bom.element.Style.get(a,m,qx.bom.element.Style.COMPUTED_MODE,false);
if(b>=1){a.style.filter=c.replace(/alpha\([^\)]*\)/gi,p);
return;
}
if(b<0.00001){b=0;
}if(!a.currentStyle||!a.currentStyle.hasLayout){a.style.zoom=1;
}a.style.filter=c.replace(/alpha\([^\)]*\)/gi,p)+f+b*100+h;
},"gecko":function(A,B){if(B==1){B=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){A.style.MozOpacity=B;
}else{A.style.opacity=B;
}},"default":function(G,H){if(H==1){H=p;
}G.style.opacity=H;
}}),reset:qx.core.Variant.select(o,{"mshtml":function(x){var y=qx.bom.element.Style.get(x,m,qx.bom.element.Style.COMPUTED_MODE,false);
x.style.filter=y.replace(/alpha\([^\)]*\)/gi,p);
},"gecko":function(z){if(qx.bom.client.Engine.VERSION<1.7){z.style.MozOpacity=p;
}else{z.style.opacity=p;
}},"default":function(w){w.style.opacity=p;
}}),get:qx.core.Variant.select(o,{"mshtml":function(C,D){var E=qx.bom.element.Style.get(C,m,D,false);

if(E){var F=E.match(/alpha\(opacity=(.*)\)/);

if(F&&F[1]){return parseFloat(F[1])/100;
}}return 1.0;
},"gecko":function(r,s){var t=qx.bom.element.Style.get(r,qx.bom.client.Engine.VERSION<1.7?j:k,s,false);

if(t==0.999999){t=1.0;
}
if(t!=null){return parseFloat(t);
}return 1.0;
},"default":function(I,J){var K=qx.bom.element.Style.get(I,k,J,false);

if(K!=null){return parseFloat(K);
}return 1.0;
}})}});
})();
(function(){var bu="get",bt="",bs="[",br="last",bq="change",bp="]",bo=".",bn="Number",bm="String",bl="set",bJ="deepBinding",bI="item",bH="reset",bG="' (",bF="Boolean",bE=").",bD=") to the object '",bC="Integer",bB="qx.data.SingleValueBinding",bA="No event could be found for the property",by="PositiveNumber",bz="Binding from '",bw="PositiveInteger",bx="Binding does not exist!",bv="Date";
qx.Class.define(bB,{statics:{DEBUG_ON:false,__qA:{},bind:function(O,P,Q,R,S){var bd=this.__qC(O,P,Q,R,S);
var X=P.split(bo);
var U=this.__qJ(X);
var bc=[];
var Y=[];
var ba=[];
var V=[];
var W=O;
for(var i=0;i<X.length;i++){if(U[i]!==bt){V.push(bq);
}else{V.push(this.__qE(W,X[i]));
}bc[i]=W;
if(i==X.length-1){if(U[i]!==bt){var bg=U[i]===br?W.length-1:U[i];
var T=W.getItem(bg);
this.__qI(T,Q,R,S,O);
ba[i]=this.__qK(W,V[i],Q,R,S,U[i]);
}else{if(X[i]!=null&&W[bu+qx.lang.String.firstUp(X[i])]!=null){var T=W[bu+qx.lang.String.firstUp(X[i])]();
this.__qI(T,Q,R,S,O);
}ba[i]=this.__qK(W,V[i],Q,R,S);
}}else{var be={index:i,propertyNames:X,sources:bc,listenerIds:ba,arrayIndexValues:U,targetObject:Q,targetPropertyChain:R,options:S,listeners:Y};
var bb=qx.lang.Function.bind(this.__qB,this,be);
Y.push(bb);
ba[i]=W.addListener(V[i],bb);
}if(W[bu+qx.lang.String.firstUp(X[i])]==null){W=null;
}else if(U[i]!==bt){W=W[bu+qx.lang.String.firstUp(X[i])](U[i]);
}else{W=W[bu+qx.lang.String.firstUp(X[i])]();
}
if(!W){break;
}}var bf={type:bJ,listenerIds:ba,sources:bc,targetListenerIds:bd.listenerIds,targets:bd.targets};
this.__qL(bf,O,P,Q,R);
return bf;
},__qB:function(f){if(f.options&&f.options.onUpdate){f.options.onUpdate(f.sources[f.index],f.targetObject);
}for(var j=f.index+1;j<f.propertyNames.length;j++){var l=f.sources[j];
f.sources[j]=null;

if(!l){continue;
}l.removeListenerById(f.listenerIds[j]);
}var l=f.sources[f.index];
for(var j=f.index+1;j<f.propertyNames.length;j++){if(f.arrayIndexValues[j-1]!==bt){l=l[bu+qx.lang.String.firstUp(f.propertyNames[j-1])](f.arrayIndexValues[j-1]);
}else{l=l[bu+qx.lang.String.firstUp(f.propertyNames[j-1])]();
}f.sources[j]=l;
if(!l){this.__qF(f.targetObject,f.targetPropertyChain);
break;
}if(j==f.propertyNames.length-1){if(qx.Class.implementsInterface(l,qx.data.IListData)){var m=f.arrayIndexValues[j]===br?l.length-1:f.arrayIndexValues[j];
var h=l.getItem(m);
this.__qI(h,f.targetObject,f.targetPropertyChain,f.options,f.sources[f.index]);
f.listenerIds[j]=this.__qK(l,bq,f.targetObject,f.targetPropertyChain,f.options,f.arrayIndexValues[j]);
}else{if(f.propertyNames[j]!=null&&l[bu+qx.lang.String.firstUp(f.propertyNames[j])]!=null){var h=l[bu+qx.lang.String.firstUp(f.propertyNames[j])]();
this.__qI(h,f.targetObject,f.targetPropertyChain,f.options,f.sources[f.index]);
}var k=this.__qE(l,f.propertyNames[j]);
f.listenerIds[j]=this.__qK(l,k,f.targetObject,f.targetPropertyChain,f.options);
}}else{if(f.listeners[j]==null){var g=qx.lang.Function.bind(this.__qB,this,f);
f.listeners.push(g);
}if(qx.Class.implementsInterface(l,qx.data.IListData)){var k=bq;
}else{var k=this.__qE(l,f.propertyNames[j]);
}f.listenerIds[j]=l.addListener(k,f.listeners[j]);
}}},__qC:function(cx,cy,cz,cA,cB){var cF=cA.split(bo);
var cD=this.__qJ(cF);
var cK=[];
var cJ=[];
var cH=[];
var cG=[];
var cE=cz;
for(var i=0;i<cF.length-1;i++){if(cD[i]!==bt){cG.push(bq);
}else{try{cG.push(this.__qE(cE,cF[i]));
}catch(e){break;
}}cK[i]=cE;
var cI=function(){for(var j=i+1;j<cF.length-1;j++){var I=cK[j];
cK[j]=null;

if(!I){continue;
}I.removeListenerById(cH[j]);
}var I=cK[i];
for(var j=i+1;j<cF.length-1;j++){var G=qx.lang.String.firstUp(cF[j-1]);
if(cD[j-1]!==bt){var J=cD[j-1]===br?I.getLength()-1:cD[j-1];
I=I[bu+G](J);
}else{I=I[bu+G]();
}cK[j]=I;
if(cJ[j]==null){cJ.push(cI);
}if(qx.Class.implementsInterface(I,qx.data.IListData)){var H=bq;
}else{try{var H=qx.data.SingleValueBinding.__qE(I,cF[j]);
}catch(e){break;
}}cH[j]=I.addListener(H,cJ[j]);
}qx.data.SingleValueBinding.__qD(cx,cy,cz,cA);
};
cJ.push(cI);
cH[i]=cE.addListener(cG[i],cI);
var cC=qx.lang.String.firstUp(cF[i]);
if(cE[bu+cC]==null){cE=null;
}else if(cD[i]!==bt){cE=cE[bu+cC](cD[i]);
}else{cE=cE[bu+cC]();
}
if(!cE){break;
}}return {listenerIds:cH,targets:cK};
},__qD:function(cf,cg,ch,ci){var cm=this.__qH(cf,cg);

if(cm!=null){var co=cg.substring(cg.lastIndexOf(bo)+1,cg.length);
if(co.charAt(co.length-1)==bp){var cj=co.substring(co.lastIndexOf(bs)+1,co.length-1);
var cl=co.substring(0,co.lastIndexOf(bs));
var cn=cm[bu+qx.lang.String.firstUp(cl)]();

if(cj==br){cj=cn.length-1;
}
if(cn!=null){var ck=cn.getItem(cj);
}}else{var ck=cm[bu+qx.lang.String.firstUp(co)]();
}}this.__qG(ch,ci,ck);
},__qE:function(D,E){var F=this.__qN(D,E);
if(F==null){if(qx.Class.supportsEvent(D.constructor,E)){F=E;
}else if(qx.Class.supportsEvent(D.constructor,bq+qx.lang.String.firstUp(E))){F=bq+qx.lang.String.firstUp(E);
}else{throw new qx.core.AssertionError(bA,E);
}}return F;
},__qF:function(bh,bi){var bj=this.__qH(bh,bi);

if(bj!=null){var bk=bi.substring(bi.lastIndexOf(bo)+1,bi.length);
if(bk.charAt(bk.length-1)==bp){this.__qG(bh,bi,null);
return;
}if(bj[bH+qx.lang.String.firstUp(bk)]!=undefined){bj[bH+qx.lang.String.firstUp(bk)]();
}else{bj[bl+qx.lang.String.firstUp(bk)](null);
}}},__qG:function(cp,cq,cr){var cv=this.__qH(cp,cq);

if(cv!=null){var cw=cq.substring(cq.lastIndexOf(bo)+1,cq.length);
if(cw.charAt(cw.length-1)==bp){var cs=cw.substring(cw.lastIndexOf(bs)+1,cw.length-1);
var cu=cw.substring(0,cw.lastIndexOf(bs));
var ct=cv[bu+qx.lang.String.firstUp(cu)]();

if(cs==br){cs=ct.length-1;
}
if(ct!=null){ct.setItem(cs,cr);
}}else{cv[bl+qx.lang.String.firstUp(cw)](cr);
}}},__qH:function(q,r){var u=r.split(bo);
var v=q;
for(var i=0;i<u.length-1;i++){try{var t=u[i];
if(t.indexOf(bp)==t.length-1){var s=t.substring(t.indexOf(bs)+1,t.length-1);
t=t.substring(0,t.indexOf(bs));
}v=v[bu+qx.lang.String.firstUp(t)]();

if(s!=null){if(s==br){s=v.length-1;
}v=v.getItem(s);
s=null;
}}catch(a){return null;
}}return v;
},__qI:function(y,z,A,B,C){y=this.__qM(y,z,A,B);
if(y==null){this.__qF(z,A);
}if(y!=undefined){try{this.__qG(z,A,y);
if(B&&B.onUpdate){B.onUpdate(C,z,y);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(B&&B.onSetFail){B.onSetFail(e);
}else{this.warn("Failed so set value "+y+" on "+z+". Error message: "+e);
}}}},__qJ:function(n){var o=[];
for(var i=0;i<n.length;i++){var name=n[i];
if(qx.lang.String.endsWith(name,bp)){var p=name.substring(name.indexOf(bs)+1,name.indexOf(bp));
if(name.indexOf(bp)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(p!==br){if(p==bt||isNaN(parseInt(p))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(bs)!=0){n[i]=name.substring(0,name.indexOf(bs));
o[i]=bt;
o[i+1]=p;
n.splice(i+1,0,bI);
i++;
}else{o[i]=p;
n.splice(i,1,bI);
}}else{o[i]=bt;
}}return o;
},__qK:function(bQ,bR,bS,bT,bU,bV){var bW;
{};
var bY=function(cO,e){if(cO!==bt){if(cO===br){cO=bQ.length-1;
}var cR=bQ.getItem(cO);
if(cR==undefined){qx.data.SingleValueBinding.__qF(bS,bT);
}var cP=e.getData().start;
var cQ=e.getData().end;

if(cO<cP||cO>cQ){return;
}}else{var cR=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bQ+" by "+bR+" to "+bS+" ("+bT+")");
qx.log.Logger.debug("Data before conversion: "+cR);
}cR=qx.data.SingleValueBinding.__qM(cR,bS,bT,bU);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+cR);
}try{if(cR!=undefined){qx.data.SingleValueBinding.__qG(bS,bT,cR);
}else{qx.data.SingleValueBinding.__qF(bS,bT);
}if(bU&&bU.onUpdate){bU.onUpdate(bQ,bS,cR);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bU&&bU.onSetFail){bU.onSetFail(e);
}else{this.warn("Failed so set value "+cR+" on "+bS+". Error message: "+e);
}}};
if(!bV){bV=bt;
}bY=qx.lang.Function.bind(bY,bQ,bV);
var bX=bQ.addListener(bR,bY);
return bX;
},__qL:function(ca,cb,cc,cd,ce){if(this.__qA[cb.toHashCode()]===undefined){this.__qA[cb.toHashCode()]=[];
}this.__qA[cb.toHashCode()].push([ca,cb,cc,cd,ce]);
},__qM:function(cS,cT,cU,cV){if(cV&&cV.converter){var cX;

if(cT.getModel){cX=cT.getModel();
}return cV.converter(cS,cX);
}else{var da=this.__qH(cT,cU);
var db=cU.substring(cU.lastIndexOf(bo)+1,cU.length);
if(da==null){return cS;
}var cY=qx.Class.getPropertyDefinition(da.constructor,db);
var cW=cY==null?bt:cY.check;
return this.__qO(cS,cW);
}},__qN:function(cL,cM){var cN=qx.Class.getPropertyDefinition(cL.constructor,cM);

if(cN==null){return null;
}return cN.event;
},__qO:function(b,c){var d=qx.lang.Type.getClass(b);
if((d==bn||d==bm)&&(c==bC||c==bw)){b=parseInt(b);
}if((d==bF||d==bn||d==bv)&&c==bm){b=b+bt;
}if((d==bn||d==bm)&&(c==bn||c==by)){b=parseFloat(b);
}return b;
},removeBindingFromObject:function(K,L){if(L.type==bJ){for(var i=0;i<L.sources.length;i++){if(L.sources[i]){L.sources[i].removeListenerById(L.listenerIds[i]);
}}for(var i=0;i<L.targets.length;i++){if(L.targets[i]){L.targets[i].removeListenerById(L.targetListenerIds[i]);
}}}else{K.removeListenerById(L);
}var M=this.__qA[K.toHashCode()];
if(M!=undefined){for(var i=0;i<M.length;i++){if(M[i][0]==L){qx.lang.Array.remove(M,M[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bK){{};
var bL=this.__qA[bK.toHashCode()];

if(bL!=undefined){for(var i=bL.length-1;i>=0;i--){this.removeBindingFromObject(bK,bL[i][0]);
}}},getAllBindingsForObject:function(N){if(this.__qA[N.toHashCode()]===undefined){this.__qA[N.toHashCode()]=[];
}return this.__qA[N.toHashCode()];
},removeAllBindings:function(){for(var x in this.__qA){var w=qx.core.ObjectRegistry.fromHashCode(x);
if(w==null){delete this.__qA[x];
continue;
}this.removeAllBindingsForObject(w);
}this.__qA={};
},getAllBindings:function(){return this.__qA;
},showBindingInLog:function(bM,bN){var bP;
for(var i=0;i<this.__qA[bM.toHashCode()].length;i++){if(this.__qA[bM.toHashCode()][i][0]==bN){bP=this.__qA[bM.toHashCode()][i];
break;
}}
if(bP===undefined){var bO=bx;
}else{var bO=bz+bP[1]+bG+bP[2]+bD+bP[3]+bG+bP[4]+bE;
}qx.log.Logger.debug(bO);
},showAllBindingsInLog:function(){for(var dd in this.__qA){var dc=qx.core.ObjectRegistry.fromHashCode(dd);

for(var i=0;i<this.__qA[dd].length;i++){this.showBindingInLog(dc,this.__qA[dd][i][0]);
}}}}});
})();
(function(){var k="qx.util.placement.KeepAlignAxis",j="edge-start",i="edge-end";
qx.Class.define(k,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(a,b,c,d,e){var f=this._moveToEdgeAndAlign(a,b,c,e);
var g,h;

if(this._isInRange(f,a,d)){return f;
}
if(e==j||e==i){g=b.start-c.end;
h=b.end+c.start;
}else{g=b.end-c.end;
h=b.start+c.start;
}
if(g>d-h){f=g-a;
}else{f=h;
}return f;
}}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){arguments.callee.base.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__qP=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__qP:null,_applyTimeoutInterval:function(h){this.__qP.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__qP){this.__qP.stop();
}this.__qP=null;
}});
})();
(function(){var q="qx.dynlocale",p="text",o="Boolean",n="qx.client",m="color",l="userSelect",k="changeLocale",j="enabled",i="none",h="on",L="_applyTextAlign",K="qx.ui.core.Widget",J="gecko",I="changeTextAlign",H="_applyWrap",G="changeValue",F="changeContent",E="qx.ui.basic.Label",D="A",C="_applyValue",x="center",y="_applyBuddy",v="String",w="textAlign",t="right",u="changeRich",r="_applyRich",s="click",z="label",A="webkit",B="left";
qx.Class.define(E,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(N){arguments.callee.base.call(this);

if(N!=null){this.setValue(N);
}
if(qx.core.Variant.isSet(q,h)){qx.locale.Manager.getInstance().addListener(k,this._onChangeLocale,this);
}},properties:{rich:{check:o,init:false,event:u,apply:r},wrap:{check:o,init:true,apply:H},value:{check:v,apply:C,event:G,nullable:true},buddy:{check:K,apply:y,nullable:true,init:null},textAlign:{check:[B,x,t],nullable:true,themeable:true,apply:L,event:I},appearance:{refine:true,init:z},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__qQ:null,__qR:null,__qS:null,__qT:null,_getContentHint:function(){if(this.__qR){this.__qU=this.__qV();
delete this.__qR;
}return {width:this.__qU.width,height:this.__qU.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(M){if(qx.core.Variant.isSet(n,J)){if(M&&!this.isRich()){{};
return;
}}arguments.callee.base.call(this,M);
if(qx.core.Variant.isSet(n,A)){this.getContainerElement().setStyle(l,M?p:i);
this.getContentElement().setStyle(l,M?p:i);
}},_getContentHeightForWidth:function(P){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__qV(P).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(c,d){this.getContentElement().setStyle(w,c);
},_applyTextColor:function(f,g){if(f){this.getContentElement().setStyle(m,qx.theme.manager.Color.getInstance().resolve(f));
}else{this.getContentElement().removeStyle(m);
}},__qU:{width:0,height:0},_applyFont:function(ba,bb){var bc;

if(ba){this.__qQ=qx.theme.manager.Font.getInstance().resolve(ba);
bc=this.__qQ.getStyles();
}else{this.__qQ=null;
bc=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bc);
this.__qR=true;
qx.ui.core.queue.Layout.add(this);
},__qV:function(Q){var U=qx.bom.Label;
var S=this.getFont();
var R=S?this.__qQ.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||D;
var T=this.getRich();
return T?U.getHtmlSize(content,R,Q):U.getTextSize(content,R);
},_applyBuddy:function(a,b){if(b!=null){b.removeBinding(this.__qS);
this.__qS=null;
this.removeListenerById(this.__qT);
this.__qT=null;
}
if(a!=null){this.__qS=a.bind(j,this,j);
this.__qT=this.addListener(s,a.focus,a);
}},_applyRich:function(O){this.getContentElement().setRich(O);
this.__qR=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(X,Y){if(X&&!this.isRich()){{};
}},_onChangeLocale:qx.core.Variant.select(q,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(V,W){this.getContentElement().setValue(V);
this.__qR=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(F,V,W);
}},destruct:function(){if(qx.core.Variant.isSet(q,h)){qx.locale.Manager.getInstance().removeListener(k,this._onChangeLocale,this);
}if(this.__qS!=null){var bd=this.getBuddy();

if(bd!=null&&!bd.isDisposed()){bd.removeBinding(this.__qS);
}}this.__qQ=this.__qS=null;
}});
})();
(function(){var d="GlobalError: ",c="qx.core.GlobalError";
qx.Class.define(c,{extend:Error,construct:function(a,b){{};
this.__rj=d+(a&&a.message?a.message:a);
Error.call(this,this.__rj);
this.__rk=b;
this.__rl=a;
},members:{__rl:null,__rk:null,__rj:null,toString:function(){return this.__rj;
},getArguments:function(){return this.__rk;
},getSourceException:function(){return this.__rl;
}},destruct:function(){this.__rl=null;
this.__rk=null;
this.__rj=null;
}});
})();
(function(){var N="qx.client",M="qx.dom.Hierarchy",L="previousSibling",K="*",J="nextSibling",I="parentNode";
qx.Class.define(M,{statics:{getNodeIndex:function(F){var G=0;

while(F&&(F=F.previousSibling)){G++;
}return G;
},getElementIndex:function(u){var v=0;
var w=qx.dom.Node.ELEMENT;

while(u&&(u=u.previousSibling)){if(u.nodeType==w){v++;
}}return v;
},getNextElementSibling:function(c){while(c&&(c=c.nextSibling)&&!qx.dom.Node.isElement(c)){continue;
}return c||null;
},getPreviousElementSibling:function(i){while(i&&(i=i.previousSibling)&&!qx.dom.Node.isElement(i)){continue;
}return i||null;
},contains:qx.core.Variant.select(N,{"webkit|mshtml|opera":function(A,B){if(qx.dom.Node.isDocument(A)){var C=qx.dom.Node.getDocument(B);
return A&&C==A;
}else if(qx.dom.Node.isDocument(B)){return false;
}else{return A.contains(B);
}},"gecko":function(x,y){return !!(x.compareDocumentPosition(y)&16);
},"default":function(m,n){while(n){if(m==n){return true;
}n=n.parentNode;
}return false;
}}),isRendered:function(D){if(!D.offsetParent){return false;
}var E=D.ownerDocument||D.document;
if(E.body.contains){return E.body.contains(D);
}if(E.compareDocumentPosition){return !!(E.compareDocumentPosition(D)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(d,e){return this.contains(e,d);
},getCommonParent:qx.core.Variant.select(N,{"mshtml|opera":function(g,h){if(g===h){return g;
}
while(g&&qx.dom.Node.isElement(g)){if(g.contains(h)){return g;
}g=g.parentNode;
}return null;
},"default":function(o,p){if(o===p){return o;
}var q={};
var t=qx.core.ObjectRegistry;
var s,r;

while(o||p){if(o){s=t.toHashCode(o);

if(q[s]){return q[s];
}q[s]=o;
o=o.parentNode;
}
if(p){r=t.toHashCode(p);

if(q[r]){return q[r];
}q[r]=p;
p=p.parentNode;
}}return null;
}}),getAncestors:function(f){return this._recursivelyCollect(f,I);
},getChildElements:function(a){a=a.firstChild;

if(!a){return [];
}var b=this.getNextSiblings(a);

if(a.nodeType===1){b.unshift(a);
}return b;
},getDescendants:function(l){return qx.lang.Array.fromCollection(l.getElementsByTagName(K));
},getFirstDescendant:function(H){H=H.firstChild;

while(H&&H.nodeType!=1){H=H.nextSibling;
}return H;
},getLastDescendant:function(R){R=R.lastChild;

while(R&&R.nodeType!=1){R=R.previousSibling;
}return R;
},getPreviousSiblings:function(j){return this._recursivelyCollect(j,L);
},getNextSiblings:function(z){return this._recursivelyCollect(z,J);
},_recursivelyCollect:function(O,P){var Q=[];

while(O=O[P]){if(O.nodeType==1){Q.push(O);
}}return Q;
},getSiblings:function(k){return this.getPreviousSiblings(k).reverse().concat(this.getNextSiblings(k));
},isEmpty:function(S){S=S.firstChild;

while(S){if(S.nodeType===qx.dom.Node.ELEMENT||S.nodeType===qx.dom.Node.TEXT){return false;
}S=S.nextSibling;
}return true;
},cleanWhitespace:function(T){var U=T.firstChild;

while(U){var V=U.nextSibling;

if(U.nodeType==3&&!/\S/.test(U.nodeValue)){T.removeChild(U);
}U=V;
}}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__rm:{},remove:function(A){delete this.__rm[A.$$hash];
},add:function(c){this.__rm[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var d=this.__rp();
for(var i=d.length-1;i>=0;i--){var e=d[i];
if(e.hasValidLayout()){continue;
}if(e.isRootWidget()&&!e.hasUserBounds()){var g=e.getSizeHint();
e.renderLayout(0,0,g.width,g.height);
}else{var f=e.getBounds();
e.renderLayout(f.left,f.top,f.width,f.height);
}}},getNestingLevel:function(h){var j=this.__ro;
var l=0;
var parent=h;
while(true){if(j[parent.$$hash]!=null){l+=j[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
l+=1;
}var k=l;

while(h&&h!==parent){j[h.$$hash]=k--;
h=h.$$parent;
}return l;
},__rn:function(){var r=qx.ui.core.queue.Visibility;
this.__ro={};
var q=[];
var p=this.__rm;
var m,o;

for(var n in p){m=p[n];

if(r.isVisible(m)){o=this.getNestingLevel(m);
if(!q[o]){q[o]={};
}q[o][n]=m;
delete p[n];
}}return q;
},__rp:function(){var v=[];
var x=this.__rn();

for(var u=x.length-1;u>=0;u--){if(!x[u]){continue;
}
for(var t in x[u]){var s=x[u][t];
if(u==0||s.isRootWidget()||s.hasUserBounds()){v.push(s);
s.invalidateLayoutCache();
continue;
}var z=s.getSizeHint(false);

if(z){s.invalidateLayoutCache();
var w=s.getSizeHint();
var y=(!s.getBounds()||z.minWidth!==w.minWidth||z.width!==w.width||z.maxWidth!==w.maxWidth||z.minHeight!==w.minHeight||z.height!==w.height||z.maxHeight!==w.maxHeight);
}else{y=true;
}
if(y){var parent=s.getLayoutParent();

if(!x[u-1]){x[u-1]={};
}x[u-1][parent.$$hash]=parent;
}else{v.push(s);
}}}return v;
}}});
})();
(function(){var I="",H="qx.client",G="user-select",F="userSelect",E="appearance",D="style",C="MozUserModify",B="px",A="-webkit-appearance",z="styleFloat",bf="-webkit-user-select",be="-moz-appearance",bd="pixelHeight",bc="MozAppearance",bb=":",ba="pixelTop",Y="pixelLeft",X="text-overflow",W="-moz-user-select",V="MozUserSelect",P="qx.bom.element.Style",Q="-moz-user-modify",N="-webkit-user-modify",O="WebkitUserSelect",L="-o-text-overflow",M="pixelRight",J="cssFloat",K="pixelWidth",R="pixelBottom",S=";",U="WebkitUserModify",T="WebkitAppearance";
qx.Class.define(P,{statics:{__rq:{styleNames:{"float":qx.core.Variant.select(H,{"mshtml":z,"default":J}),"appearance":qx.core.Variant.select(H,{"gecko":bc,"webkit":T,"default":E}),"userSelect":qx.core.Variant.select(H,{"gecko":V,"webkit":O,"default":F}),"userModify":qx.core.Variant.select(H,{"gecko":C,"webkit":U,"default":F})},cssNames:{"appearance":qx.core.Variant.select(H,{"gecko":be,"webkit":A,"default":E}),"userSelect":qx.core.Variant.select(H,{"gecko":W,"webkit":bf,"default":G}),"userModify":qx.core.Variant.select(H,{"gecko":Q,"webkit":N,"default":G}),"textOverflow":qx.core.Variant.select(H,{"opera":L,"default":X})},mshtmlPixel:{width:K,height:bd,left:Y,right:M,top:ba,bottom:R},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__rr:{},compile:function(bi){var bm=[];
var bq=this.__rq;
var bp=bq.special;
var bn=bq.cssNames;
var bl=this.__rr;
var bo=qx.lang.String;
var name,bk,bj;

for(name in bi){bj=bi[name];

if(bj==null){continue;
}name=bn[name]||name;
if(bp[name]){bm.push(bp[name].compile(bj));
}else{bk=bl[name];

if(!bk){bk=bl[name]=bo.hyphenate(name);
}bm.push(bk,bb,bj,S);
}}return bm.join(I);
},setCss:qx.core.Variant.select(H,{"mshtml":function(h,i){h.style.cssText=i;
},"default":function(bg,bh){bg.setAttribute(D,bh);
}}),getCss:qx.core.Variant.select(H,{"mshtml":function(p){return p.style.cssText.toLowerCase();
},"default":function(br){return br.getAttribute(D);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(d,name,e,f){{};
var g=this.__rq;
name=g.styleNames[name]||name;
if(f!==false&&g.special[name]){return g.special[name].set(d,e);
}else{d.style[name]=e!==null?e:I;
}},setStyles:function(q,r,s){{};
var y=this.__rq;
var v=y.styleNames;
var x=y.special;
var t=q.style;

for(var w in r){var u=r[w];
var name=v[w]||w;

if(u===undefined){if(s!==false&&x[name]){x[name].reset(q);
}else{t[name]=I;
}}else{if(s!==false&&x[name]){x[name].set(q,u);
}else{t[name]=u!==null?u:I;
}}}},reset:function(a,name,b){var c=this.__rq;
name=c.styleNames[name]||name;
if(b!==false&&c.special[name]){return c.special[name].reset(a);
}else{a.style[name]=I;
}},get:qx.core.Variant.select(H,{"mshtml":function(bs,name,bt,bu){var bz=this.__rq;
name=bz.styleNames[name]||name;
if(bu!==false&&bz.special[name]){return bz.special[name].get(bs,bt);
}if(!bs.currentStyle){return bs.style[name]||I;
}switch(bt){case this.LOCAL_MODE:return bs.style[name]||I;
case this.CASCADED_MODE:return bs.currentStyle[name]||I;
default:var by=bs.currentStyle[name]||I;
if(/^-?[\.\d]+(px)?$/i.test(by)){return by;
}var bx=bz.mshtmlPixel[name];

if(bx){var bv=bs.style[name];
bs.style[name]=by||0;
var bw=bs.style[bx]+B;
bs.style[name]=bv;
return bw;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(by)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return by;
}},"default":function(j,name,k,l){var o=this.__rq;
name=o.styleNames[name]||name;
if(l!==false&&o.special[name]){return o.special[name].get(j,k);
}switch(k){case this.LOCAL_MODE:return j.style[name]||I;
case this.CASCADED_MODE:if(j.currentStyle){return j.currentStyle[name]||I;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var m=qx.dom.Node.getDocument(j);
var n=m.defaultView.getComputedStyle(j,null);
return n?n[name]:I;
}}})}});
})();
(function(){var A="borderTopWidth",z="borderLeftWidth",y="marginTop",x="marginLeft",w="scroll",v="qx.client",u="border-box",t="borderBottomWidth",s="borderRightWidth",r="auto",P="padding",O="qx.bom.element.Location",N="paddingLeft",M="static",L="marginBottom",K="visible",J="BODY",I="paddingBottom",H="paddingTop",G="marginRight",E="position",F="margin",C="overflow",D="paddingRight",B="border";
qx.Class.define(O,{statics:{__rv:function(bG,bH){return qx.bom.element.Style.get(bG,bH,qx.bom.element.Style.COMPUTED_MODE,false);
},__rw:function(bM,bN){return parseInt(qx.bom.element.Style.get(bM,bN,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__rx:function(d){var g=0,top=0;
if(d.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var f=qx.dom.Node.getWindow(d);
g-=qx.bom.Viewport.getScrollLeft(f);
top-=qx.bom.Viewport.getScrollTop(f);
}else{var e=qx.dom.Node.getDocument(d).body;
d=d.parentNode;
while(d&&d!=e){g+=d.scrollLeft;
top+=d.scrollTop;
d=d.parentNode;
}}return {left:g,top:top};
},__ry:qx.core.Variant.select(v,{"mshtml":function(bl){var bn=qx.dom.Node.getDocument(bl);
var bm=bn.body;
var bo=0;
var top=0;
bo-=bm.clientLeft+bn.documentElement.clientLeft;
top-=bm.clientTop+bn.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bo+=this.__rw(bm,z);
top+=this.__rw(bm,A);
}return {left:bo,top:top};
},"webkit":function(bx){var bz=qx.dom.Node.getDocument(bx);
var by=bz.body;
var bA=by.offsetLeft;
var top=by.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bA+=this.__rw(by,z);
top+=this.__rw(by,A);
}return {left:bA,top:top};
},"gecko":function(bi){var bj=qx.dom.Node.getDocument(bi).body;
var bk=bj.offsetLeft;
var top=bj.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bk+=this.__rw(bj,x);
top+=this.__rw(bj,y);
}if(qx.bom.element.BoxSizing.get(bj)!==u){bk+=this.__rw(bj,z);
top+=this.__rw(bj,A);
}return {left:bk,top:top};
},"default":function(bp){var bq=qx.dom.Node.getDocument(bp).body;
var br=bq.offsetLeft;
var top=bq.offsetTop;
return {left:br,top:top};
}}),__rz:qx.core.Variant.select(v,{"mshtml|webkit":function(k){var m=qx.dom.Node.getDocument(k);
if(k.getBoundingClientRect){var n=k.getBoundingClientRect();
var o=n.left;
var top=n.top;
}else{var o=k.offsetLeft;
var top=k.offsetTop;
k=k.offsetParent;
var l=m.body;
while(k&&k!=l){o+=k.offsetLeft;
top+=k.offsetTop;
o+=this.__rw(k,z);
top+=this.__rw(k,A);
k=k.offsetParent;
}}return {left:o,top:top};
},"gecko":function(bs){if(bs.getBoundingClientRect){var bv=bs.getBoundingClientRect();
var bw=Math.round(bv.left);
var top=Math.round(bv.top);
}else{var bw=0;
var top=0;
var bt=qx.dom.Node.getDocument(bs).body;
var bu=qx.bom.element.BoxSizing;

if(bu.get(bs)!==u){bw-=this.__rw(bs,z);
top-=this.__rw(bs,A);
}
while(bs&&bs!==bt){bw+=bs.offsetLeft;
top+=bs.offsetTop;
if(bu.get(bs)!==u){bw+=this.__rw(bs,z);
top+=this.__rw(bs,A);
}if(bs.parentNode&&this.__rv(bs.parentNode,C)!=K){bw+=this.__rw(bs.parentNode,z);
top+=this.__rw(bs.parentNode,A);
}bs=bs.offsetParent;
}}return {left:bw,top:top};
},"default":function(a){var c=0;
var top=0;
var b=qx.dom.Node.getDocument(a).body;
while(a&&a!==b){c+=a.offsetLeft;
top+=a.offsetTop;
a=a.offsetParent;
}return {left:c,top:top};
}}),get:function(Q,R){if(Q.tagName==J){var location=this.__rA(Q);
var Y=location.left;
var top=location.top;
}else{var S=this.__ry(Q);
var X=this.__rz(Q);
var scroll=this.__rx(Q);
var Y=X.left+S.left-scroll.left;
var top=X.top+S.top-scroll.top;
}var T=Y+Q.offsetWidth;
var U=top+Q.offsetHeight;

if(R){if(R==P||R==w){var V=qx.bom.element.Overflow.getX(Q);

if(V==w||V==r){T+=Q.scrollWidth-Q.offsetWidth+this.__rw(Q,z)+this.__rw(Q,s);
}var W=qx.bom.element.Overflow.getY(Q);

if(W==w||W==r){U+=Q.scrollHeight-Q.offsetHeight+this.__rw(Q,A)+this.__rw(Q,t);
}}
switch(R){case P:Y+=this.__rw(Q,N);
top+=this.__rw(Q,H);
T-=this.__rw(Q,D);
U-=this.__rw(Q,I);
case w:Y-=Q.scrollLeft;
top-=Q.scrollTop;
T-=Q.scrollLeft;
U-=Q.scrollTop;
case B:Y+=this.__rw(Q,z);
top+=this.__rw(Q,A);
T-=this.__rw(Q,s);
U-=this.__rw(Q,t);
break;
case F:Y-=this.__rw(Q,x);
top-=this.__rw(Q,y);
T+=this.__rw(Q,G);
U+=this.__rw(Q,L);
break;
}}return {left:Y,top:top,right:T,bottom:U};
},__rA:qx.core.Variant.select(v,{"default":function(ba){var top=ba.offsetTop+this.__rw(ba,y);
var bb=ba.offsetLeft+this.__rw(ba,x);
return {left:bb,top:top};
},"mshtml":function(p){var top=p.offsetTop;
var q=p.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__rw(p,y);
q+=this.__rw(p,x);
}return {left:q,top:top};
},"gecko":function(bB){var top=bB.offsetTop+this.__rw(bB,y)+this.__rw(bB,z);
var bC=bB.offsetLeft+this.__rw(bB,x)+this.__rw(bB,A);
return {left:bC,top:top};
}}),getLeft:function(i,j){return this.get(i,j).left;
},getTop:function(bI,bJ){return this.get(bI,bJ).top;
},getRight:function(bK,bL){return this.get(bK,bL).right;
},getBottom:function(bO,bP){return this.get(bO,bP).bottom;
},getRelative:function(bc,bd,be,bf){var bh=this.get(bc,be);
var bg=this.get(bd,bf);
return {left:bh.left-bg.left,top:bh.top-bg.top,right:bh.right-bg.right,bottom:bh.bottom-bg.bottom};
},getPosition:function(h){return this.getRelative(h,this.getOffsetParent(h));
},getOffsetParent:function(bD){var bF=bD.offsetParent||document.body;
var bE=qx.bom.element.Style;

while(bF&&(!/^body|html$/i.test(bF.tagName)&&bE.get(bF,E)===M)){bF=bF.offsetParent;
}return bF;
}}});
})();
(function(){var h="qx.lang.Type",g="Error",f="RegExp",e="Date",d="Number",c="Boolean";
qx.Class.define(h,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(a){return this.getClass(a)==f;
},isNumber:function(b){return (b!==null&&(this.getClass(b)==d||b instanceof Number));
},isBoolean:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Boolean));
},isDate:function(i){return (i!==null&&(this.getClass(i)==e||i instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==g||k instanceof Error));
}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var u="mshtml",t="",s="qx.client",r=">",q="<",p=" ",o="='",n="qx.bom.Element",m="div",k="' ",h="></";
qx.Class.define(n,{statics:{__rE:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,V,W){if(!W){W=window;
}
if(!name){throw new Error("The tag name is missing!");
}var Y=this.__rE;
var X=t;

for(var bb in V){if(Y[bb]){X+=bb+o+V[bb]+k;
}}var bc;
if(X!=t){if(qx.bom.client.Engine.MSHTML){bc=W.document.createElement(q+name+p+X+r);
}else{var ba=W.document.createElement(m);
ba.innerHTML=q+name+p+X+h+name+r;
bc=ba.firstChild;
}}else{bc=W.document.createElement(name);
}
for(var bb in V){if(!Y[bb]){qx.bom.element.Attribute.set(bc,bb,V[bb]);
}}return bc;
},empty:function(a){return a.innerHTML=t;
},addListener:function(A,B,C,self,D){return qx.event.Registration.addListener(A,B,C,self,D);
},removeListener:function(d,e,f,self,g){return qx.event.Registration.removeListener(d,e,f,self,g);
},removeListenerById:function(T,U){return qx.event.Registration.removeListenerById(T,U);
},hasListener:function(E,F,G){return qx.event.Registration.hasListener(E,F,G);
},focus:function(z){qx.event.Registration.getManager(z).getHandler(qx.event.handler.Focus).focus(z);
},blur:function(x){qx.event.Registration.getManager(x).getHandler(qx.event.handler.Focus).blur(x);
},activate:function(y){qx.event.Registration.getManager(y).getHandler(qx.event.handler.Focus).activate(y);
},deactivate:function(c){qx.event.Registration.getManager(c).getHandler(qx.event.handler.Focus).deactivate(c);
},capture:function(v,w){qx.event.Registration.getManager(v).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(v,w);
},releaseCapture:function(b){qx.event.Registration.getManager(b).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(b);
},clone:function(H,I){var L;

if(I||(qx.core.Variant.isSet(s,u)&&!qx.xml.Document.isXmlDocument(H))){var P=qx.event.Registration.getManager(H);
var J=qx.dom.Hierarchy.getDescendants(H);
J.push(H);
}if(qx.core.Variant.isSet(s,u)){for(var i=0,l=J.length;i<l;i++){P.toggleAttachedEvents(J[i],false);
}}var L=H.cloneNode(true);
if(qx.core.Variant.isSet(s,u)){for(var i=0,l=J.length;i<l;i++){P.toggleAttachedEvents(J[i],true);
}}if(I===true){var S=qx.dom.Hierarchy.getDescendants(L);
S.push(L);
var K,N,R,M;

for(var i=0,Q=J.length;i<Q;i++){R=J[i];
K=P.serializeListeners(R);

if(K.length>0){N=S[i];

for(var j=0,O=K.length;j<O;j++){M=K[j];
P.addListener(N,M.type,M.handler,M.self,M.capture);
}}}}return L;
}}});
})();
(function(){var E="px",D="qx.client",C="div",B="img",A="",z="no-repeat",y="scale-x",x="mshtml",w="scale",v="scale-y",ba="qx/icon",Y="repeat",X=".png",W="crop",V="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",U='<div style="',T="repeat-y",S='<img src="',R="qx.bom.element.Decoration",Q="', sizingMethod='",L="png",M="')",J='"></div>',K='"/>',H='" style="',I="none",F="webkit",G=" ",N="repeat-x",O="DXImageTransform.Microsoft.AlphaImageLoader",P="absolute";
qx.Class.define(R,{statics:{DEBUG:false,__rF:{},__rG:qx.core.Variant.isSet(D,x),__rH:qx.core.Variant.select(D,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__rI:{"scale-x":B,"scale-y":B,"scale":B,"repeat":C,"no-repeat":C,"repeat-x":C,"repeat-y":C},update:function(bN,bO,bP,bQ){var bS=this.getTagName(bP,bO);

if(bS!=bN.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bT=this.getAttributes(bO,bP,bQ);

if(bS===B){bN.src=bT.src;
}if(bN.style.backgroundPosition!=A&&bT.style.backgroundPosition===undefined){bT.style.backgroundPosition=null;
}if(bN.style.clip!=A&&bT.style.clip===undefined){bT.style.clip=null;
}var bR=qx.bom.element.Style;
bR.setStyles(bN,bT.style);
if(this.__rG){try{bN.filters[O].apply();
}catch(e){}}},create:function(bt,bu,bv){var bw=this.getTagName(bu,bt);
var by=this.getAttributes(bt,bu,bv);
var bx=qx.bom.element.Style.compile(by.style);

if(bw===B){return S+by.src+H+bx+K;
}else{return U+bx+J;
}},getTagName:function(bD,bE){if(qx.core.Variant.isSet(D,x)){if(bE&&this.__rG&&this.__rH[bD]&&qx.lang.String.endsWith(bE,X)){return C;
}}return this.__rI[bD];
},getAttributes:function(n,o,p){if(!p){p={};
}
if(!p.position){p.position=P;
}
if(qx.core.Variant.isSet(D,x)){p.fontSize=0;
p.lineHeight=0;
}else if(qx.core.Variant.isSet(D,F)){p.WebkitUserDrag=I;
}var r=qx.util.ResourceManager.getInstance().getImageFormat(n)||qx.io.ImageLoader.getFormat(n);
{};
var q;
if(this.__rG&&this.__rH[o]&&r===L){q=this.__rL(p,o,n);
}else{if(o===w){q=this.__rM(p,o,n);
}else if(o===y||o===v){q=this.__rN(p,o,n);
}else{q=this.__rQ(p,o,n);
}}return q;
},__rJ:function(s,t,u){if(s.width==null&&t!=null){s.width=t+E;
}
if(s.height==null&&u!=null){s.height=u+E;
}return s;
},__rK:function(bz){var bA=qx.util.ResourceManager.getInstance().getImageWidth(bz)||qx.io.ImageLoader.getWidth(bz);
var bB=qx.util.ResourceManager.getInstance().getImageHeight(bz)||qx.io.ImageLoader.getHeight(bz);
return {width:bA,height:bB};
},__rL:function(bj,bk,bl){var bo=this.__rK(bl);
bj=this.__rJ(bj,bo.width,bo.height);
var bn=bk==z?W:w;
var bm=V+qx.util.ResourceManager.getInstance().toUri(bl)+Q+bn+M;
bj.filter=bm;
bj.backgroundImage=bj.backgroundRepeat=A;
return {style:bj};
},__rM:function(bU,bV,bW){var bX=qx.util.ResourceManager.getInstance().toUri(bW);
var bY=this.__rK(bW);
bU=this.__rJ(bU,bY.width,bY.height);
return {src:bX,style:bU};
},__rN:function(bF,bG,bH){var bL=qx.util.ResourceManager.getInstance();
var bK=bL.isClippedImage(bH);
var bM=this.__rK(bH);

if(bK){var bJ=bL.getData(bH);
var bI=bL.toUri(bJ[4]);

if(bG===y){bF=this.__rO(bF,bJ,bM.height);
}else{bF=this.__rP(bF,bJ,bM.width);
}return {src:bI,style:bF};
}else{{};

if(bG==y){bF.height=bM.height==null?null:bM.height+E;
}else if(bG==v){bF.width=bM.width==null?null:bM.width+E;
}var bI=bL.toUri(bH);
return {src:bI,style:bF};
}},__rO:function(bp,bq,br){var bs=qx.util.ResourceManager.getInstance().getImageHeight(bq[4]);
bp.clip={top:-bq[6],height:br};
bp.height=bs+E;
if(bp.top!=null){bp.top=(parseInt(bp.top,10)+bq[6])+E;
}else if(bp.bottom!=null){bp.bottom=(parseInt(bp.bottom,10)+br-bs-bq[6])+E;
}return bp;
},__rP:function(j,k,l){var m=qx.util.ResourceManager.getInstance().getImageWidth(k[4]);
j.clip={left:-k[5],width:l};
j.width=m+E;
if(j.left!=null){j.left=(parseInt(j.left,10)+k[5])+E;
}else if(j.right!=null){j.right=(parseInt(j.right,10)+l-m-k[5])+E;
}return j;
},__rQ:function(a,b,c){var i=qx.util.ResourceManager.getInstance().isClippedImage(c);
var h=this.__rK(c);
if(i&&b!==Y){var g=qx.util.ResourceManager.getInstance().getData(c);
var f=qx.bom.element.Background.getStyles(g[4],b,g[5],g[6]);

for(var d in f){a[d]=f[d];
}
if(h.width!=null&&a.width==null&&(b==T||b===z)){a.width=h.width+E;
}
if(h.height!=null&&a.height==null&&(b==N||b===z)){a.height=h.height+E;
}return {style:a};
}else{{};
a=this.__rJ(a,h.width,h.height);
a=this.__rR(a,c,b);
return {style:a};
}},__rR:function(bb,bc,bd){var top=null;
var bi=null;

if(bb.backgroundPosition){var be=bb.backgroundPosition.split(G);
bi=parseInt(be[0]);

if(isNaN(bi)){bi=be[0];
}top=parseInt(be[1]);

if(isNaN(top)){top=be[1];
}}var bh=qx.bom.element.Background.getStyles(bc,bd,bi,top);

for(var bf in bh){bb[bf]=bh[bf];
}if(bb.filter){bb.filter=A;
}return bb;
},__rS:function(bC){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bC)&&bC.indexOf(ba)==-1){if(!this.__rF[bC]){qx.log.Logger.debug("Potential clipped image candidate: "+bC);
this.__rF[bC]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(D,{"mshtml":function(){return qx.bom.element.Decoration.__rG;
},"default":function(){return false;
}})}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(S,T,U){arguments.callee.base.call(this);

if(S){this.setSpacing(S);
}
if(T){this.setAlignX(T);
}
if(U){this.setSeparator(U);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__rU:null,__rV:null,__rW:null,__rX:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__rY:function(){var R=this._getLayoutChildren();
var length=R.length;
var O=false;
var M=this.__rU&&this.__rU.length!=length&&this.__rV&&this.__rU;
var P;
var N=M?this.__rU:new Array(length);
var Q=M?this.__rV:new Array(length);
if(this.getReversed()){R=R.concat().reverse();
}for(var i=0;i<length;i++){P=R[i].getLayoutProperties();

if(P.width!=null){N[i]=parseFloat(P.width)/100;
}
if(P.flex!=null){Q[i]=P.flex;
O=true;
}else{Q[i]=0;
}}if(!M){this.__rU=N;
this.__rV=Q;
}this.__rW=O;
this.__rX=R;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(o,p){if(this._invalidChildrenCache){this.__rY();
}var v=this.__rX;
var length=v.length;
var E=qx.ui.layout.Util;
var D=this.getSpacing();
var H=this.getSeparator();

if(H){var s=E.computeHorizontalSeparatorGaps(v,D,H);
}else{var s=E.computeHorizontalGaps(v,D,true);
}var i,q,B,A;
var G=[];
var w=s;

for(i=0;i<length;i+=1){A=this.__rU[i];
B=A!=null?Math.floor((o-s)*A):v[i].getSizeHint().width;
G.push(B);
w+=B;
}if(this.__rW&&w!=o){var y={};
var C,F;

for(i=0;i<length;i+=1){C=this.__rV[i];

if(C>0){x=v[i].getSizeHint();
y[i]={min:x.minWidth,value:G[i],max:x.maxWidth,flex:C};
}}var t=E.computeFlexOffsets(y,o,w);

for(i in t){F=t[i].offset;
G[i]+=F;
w+=F;
}}var L=v[0].getMarginLeft();
if(w<o&&this.getAlignX()!=m){L=o-w;

if(this.getAlignX()===k){L=Math.round(L/2);
}}var x,top,r,B,u,J,z;
var D=this.getSpacing();
this._clearSeparators();
if(H){var I=qx.theme.manager.Decoration.getInstance().resolve(H).getInsets();
var K=I.left+I.right;
}for(i=0;i<length;i+=1){q=v[i];
B=G[i];
x=q.getSizeHint();
J=q.getMarginTop();
z=q.getMarginBottom();
r=Math.max(x.minHeight,Math.min(p-J-z,x.maxHeight));
top=E.computeVerticalAlignOffset(q.getAlignY()||this.getAlignY(),r,p,J,z);
if(i>0){if(H){L+=u+D;
this._renderSeparator(H,{left:L,top:0,width:K,height:p});
L+=K+D+q.getMarginLeft();
}else{L+=E.collapseMargins(D,u,q.getMarginLeft());
}}q.renderLayout(L,top,B,r);
L+=B;
u=q.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__rY();
}var bc=qx.ui.layout.Util;
var bk=this.__rX;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__rV[i];
var X=this.__rU[i];

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
}},destruct:function(){this.__rU=this.__rV=this.__rX=null;
}});
})();
(function(){var D="zIndex",C="px",B="keydown",A="deactivate",z="This method is not needed anymore.",y="resize",x="keyup",w="keypress",v="backgroundColor",u="_applyOpacity",Q="Use 'getBlockerElement' instead.",P="opacity",O="__sf",N="interval",M="__si",L="Tab",K="__sd",J="Color",I="qx.ui.root.Page",H="Use 'getContentBlockerElement' instead.",F="Number",G="qx.ui.core.Blocker",E="_applyColor";
qx.Class.define(G,{extend:qx.core.Object,construct:function(m){arguments.callee.base.call(this);
this._widget=m;
this._isPageRoot=(qx.Class.isDefined(I)&&m instanceof qx.ui.root.Page);

if(this._isPageRoot){m.addListener(y,this.__sj,this);
}this.__sa=[];
this.__sb=[];
this.__sc=[];
},properties:{color:{check:J,init:null,nullable:true,apply:E,themeable:true},opacity:{check:F,init:1,apply:u,themeable:true}},members:{__sd:null,__se:0,__sf:null,__sc:null,__sa:null,__sb:null,__sg:null,__sh:0,__si:null,_isPageRoot:false,_widget:null,__sj:function(e){var b=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:b.width,height:b.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:b.width,height:b.height});
}},_applyColor:function(R,S){var T=qx.theme.manager.Color.getInstance().resolve(R);
this.__sk(v,T);
},_applyOpacity:function(n,o){this.__sk(P,n);
},__sk:function(q,r){var s=[];
this.__sd&&s.push(this.__sd);
this.__sf&&s.push(this.__sf);

for(var i=0;i<s.length;i++){s[i].setStyle(q,r);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
this.__sh+=1;

if(this.__sh==1){this.__sg=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
this.__sh-=1;

if(this.__sh==0){this._widget.setAnonymous(this.__sg);
}},_backupActiveWidget:function(){var p=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__sa.push(p.getActive());
this.__sb.push(p.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var g=this.__sa.length;

if(g>0){var f=this.__sa[g-1];

if(f){qx.bom.Element.activate(f);
}this.__sa.pop();
}var d=this.__sb.length;

if(d>0){var f=this.__sb[d-1];

if(f){qx.bom.Element.focus(this.__sb[d-1]);
}this.__sb.pop();
}},__sl:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,Q);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__sd){this.__sd=this.__sl();
this.__sd.setStyle(D,15);
this._widget.getContainerElement().add(this.__sd);
this.__sd.exclude();
}return this.__sd;
},block:function(){this.__se++;

if(this.__se<2){this._backupActiveWidget();
var a=this.getBlockerElement();
a.include();
a.activate();
a.addListener(A,this.__sq,this);
a.addListener(w,this.__sp,this);
a.addListener(B,this.__sp,this);
a.addListener(x,this.__sp,this);
}},isBlocked:function(){return this.__se>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__se--;

if(this.__se<1){this.__sm();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__se=0;
this.__sm();
},__sm:function(){this._restoreActiveWidget();
var c=this.getBlockerElement();
c.removeListener(A,this.__sq,this);
c.removeListener(w,this.__sp,this);
c.removeListener(B,this.__sp,this);
c.removeListener(x,this.__sp,this);
c.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,H);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__sf){this.__sf=this.__sl();
this._widget.getContentElement().add(this.__sf);
this.__sf.exclude();
}return this.__sf;
},blockContent:function(U){var V=this.getContentBlockerElement();
V.setStyle(D,U);
this.__sc.push(U);

if(this.__sc.length<2){V.include();

if(this._isPageRoot){if(!this.__si){this.__si=new qx.event.Timer(300);
this.__si.addListener(N,this.__so,this);
}this.__si.start();
this.__so();
}}},isContentBlocked:function(){return this.__sc.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__sc.pop();
var k=this.__sc[this.__sc.length-1];
var l=this.getContentBlockerElement();
l.setStyle(D,k);

if(this.__sc.length<1){this.__sn();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__sc=[];
var t=this.getContentBlockerElement();
t.setStyle(D,null);
this.__sn();
},__sn:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__si.stop();
}},__so:function(){var h=this._widget.getContainerElement().getDomElement();
var j=qx.dom.Node.getDocument(h);
this.getContentBlockerElement().setStyles({height:j.documentElement.scrollHeight+C,width:j.documentElement.scrollWidth+C});
},__sp:function(e){if(e.getKeyIdentifier()==L){e.stop();
}},__sq:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(y,this.__sj,this);
}this._disposeObjects(O,K,M);
this.__sg=this.__sa=this.__sb=this._widget=this.__sc=null;
}});
})();
(function(){var w="cursor",v="100%",u="dblclick",t="mshtml",s="mouseup",r="mousedown",q="disappear",p="appear",o="contextmenu",n="mousewheel",g=")",m="mouseover",j="mouseout",d="qx.html.Blocker",c="click",i="repeat",h="mousemove",k="url(",b="qx.client",l="qx/static/blank.gif",f="absolute";
qx.Class.define(d,{extend:qx.html.Element,construct:function(x,y){arguments.callee.base.call(this);
var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
this.setStyles({position:f,width:v,height:v,opacity:y||0,backgroundColor:x});
this.addListener(r,this._stopPropagation,this);
this.addListener(s,this._stopPropagation,this);
this.addListener(c,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(h,this._stopPropagation,this);
this.addListener(m,this._stopPropagation,this);
this.addListener(j,this._stopPropagation,this);
this.addListener(n,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
if(qx.core.Variant.isSet(b,t)){this.setStyles({backgroundImage:k+qx.util.ResourceManager.getInstance().toUri(l)+g,backgroundRepeat:i});
}this.addListener(p,this.__sr,this);
this.addListener(q,this.__sr,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__sr:function(){var a=this.getStyle(w);
this.setStyle(w,null,true);
this.setStyle(w,a,true);
}}});
})();
(function(){var j="mousedown",i="blur",h="__ss",g="singleton",f="qx.ui.popup.Manager";
qx.Class.define(f,{type:g,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ss={};
qx.event.Registration.addListener(document.documentElement,j,this.__su,this,true);
qx.bom.Element.addListener(window,i,this.hideAll,this);
},members:{__ss:null,add:function(d){{};
this.__ss[d.$$hash]=d;
this.__st();
},remove:function(k){{};
var l=this.__ss;

if(l){delete l[k.$$hash];
this.__st();
}},hideAll:function(){var r=this.__ss;

if(r){for(var q in r){r[q].exclude();
}}},__st:function(){var c=1e7;
var b=this.__ss;

for(var a in b){b[a].setZIndex(c++);
}},__su:function(e){var o=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var p=this.__ss;

for(var n in p){var m=p[n];

if(!m.getAutoHide()||o==m||qx.ui.core.Widget.contains(m,o)){continue;
}m.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,j,this.__su,this,true);
this._disposeMap(h);
}});
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
(function(){var h="qx.ui.core.MSingleSelectionHandling",g="changeSelection",f="changeSelected",d="__sv",c="qx.event.type.Data";
qx.Mixin.define(h,{events:{"changeSelection":c},members:{__sv:null,getSelection:function(){var j=this.__sw().getSelected();

if(j){return [j];
}else{return [];
}},setSelection:function(a){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
switch(a.length){case 0:this.resetSelection();
break;
case 1:this.__sw().setSelected(a[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+a.length+" items!");
}},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to reset the selection."));
this.trace();
}this.__sw().resetSelected();
},isSelected:function(i){return this.__sw().isSelected(i);
},isSelectionEmpty:function(){return this.__sw().isSelectionEmpty();
},getSelectables:function(){return this.__sw().getSelectables();
},_onChangeSelected:function(e){var m=e.getData();
var l=e.getOldData();
m==null?m=[]:m=[m];
l==null?l=[]:l=[l];
this.fireDataEvent(g,m,l);
},__sw:function(){if(this.__sv==null){var b=this;
this.__sv=new qx.ui.core.SingleSelectionManager({getItems:function(){return b._getItems();
},isItemSelectable:function(k){if(b._isItemSelectable){return b._isItemSelectable(k);
}else{return k.isEnabled()&&k.isVisible();
}}});
this.__sv.addListener(f,this._onChangeSelected,this);
}this.__sv.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__sv;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var l="__sz",k="Boolean",j="qx.ui.core.SingleSelectionManager",h="__sy",g="changeSelected",f="__sx",e="qx.event.type.Data";
qx.Class.define(j,{extend:qx.core.Object,construct:function(d){arguments.callee.base.call(this);
{};
this.__sx=d;
},events:{"changeSelected":e},properties:{allowEmptySelection:{check:k,init:true,apply:l}},members:{__sy:null,__sx:null,getSelected:function(){return this.__sy;
},setSelected:function(c){if(!this.__sB(c)){throw new Error("Could not select "+c+", because it is not a child element!");
}this.__sA(c);
},resetSelected:function(){this.__sA(null);
},isSelected:function(m){if(!this.__sB(m)){throw new Error("Could not check if "+m+" is selected,"+" because it is not a child element!");
}return this.__sy===m;
},isSelectionEmpty:function(){return this.__sy==null;
},getSelectables:function(){var p=this.__sx.getItems();
var q=[];

for(var i=0;i<p.length;i++){if(this.__sx.isItemSelectable(p[i])){q.push(p[i]);
}}return q;
},__sz:function(n,o){if(!n){this.__sA(this.__sy);
}},__sA:function(r){var u=this.__sy;
var t=r;

if(t!=null&&u===t){return;
}
if(!this.isAllowEmptySelection()&&t==null){var s=this.getSelectables()[0];

if(s){t=s;
}}this.__sy=t;
this.fireDataEvent(g,t,u);
},__sB:function(a){var b=this.__sx.getItems();

for(var i=0;i<b.length;i++){if(b[i]===a){return true;
}}return false;
}},destruct:function(){if(this.__sx.toHashCode){this._disposeObjects(f);
}else{this.__sx=null;
}this._disposeObjects(h);
}});
})();
(function(){var q="atom",p="Integer",o="String",n="_applyRich",m="qx.ui.tooltip.ToolTip",l="_applyIcon",k="tooltip",j="qx.ui.core.Widget",i="mouseover",h="Boolean",g="_applyLabel";
qx.Class.define(m,{extend:qx.ui.popup.Popup,construct:function(d,f){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(q);
if(d!=null){this.setLabel(d);
}
if(f!=null){this.setIcon(f);
}this.addListener(i,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:k},showTimeout:{check:p,init:700,themeable:true},hideTimeout:{check:p,init:4000,themeable:true},label:{check:o,nullable:true,apply:g},icon:{check:o,nullable:true,apply:l,themeable:true},rich:{check:h,init:false,apply:n},opener:{check:j,nullable:true}},members:{_createChildControlImpl:function(u){var v;

switch(u){case q:v=new qx.ui.basic.Atom;
this._add(v);
break;
}return v||arguments.callee.base.call(this,u);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(r,s){var t=this.getChildControl(q);
r==null?t.resetIcon:t.setIcon(r);
},_applyLabel:function(w,x){var y=this.getChildControl(q);
w==null?y.resetLabel():y.setLabel(w);
},_applyRich:function(a,b){var c=this.getChildControl(q);
c.setRich(a);
}}});
})();
(function(){var E="keypress",D="focusout",C="__sC",B="activate",A="Tab",z="singleton",y="deactivate",x="focusin",w="qx.ui.core.FocusHandler";
qx.Class.define(w,{extend:qx.core.Object,type:z,construct:function(){arguments.callee.base.call(this);
this.__sC={};
},members:{__sC:null,__sD:null,__sE:null,__sF:null,connectTo:function(G){G.addListener(E,this.__sG,this);
G.addListener(x,this._onFocusIn,this,true);
G.addListener(D,this._onFocusOut,this,true);
G.addListener(B,this._onActivate,this,true);
G.addListener(y,this._onDeactivate,this,true);
},addRoot:function(bb){this.__sC[bb.$$hash]=bb;
},removeRoot:function(M){delete this.__sC[M.$$hash];
},getActiveWidget:function(){return this.__sD;
},isActive:function(F){return this.__sD==F;
},getFocusedWidget:function(){return this.__sE;
},isFocused:function(H){return this.__sE==H;
},isFocusRoot:function(O){return !!this.__sC[O.$$hash];
},_onActivate:function(e){var bh=e.getTarget();
this.__sD=bh;
var bg=this.__sH(bh);

if(bg!=this.__sF){this.__sF=bg;
}},_onDeactivate:function(e){var N=e.getTarget();

if(this.__sD==N){this.__sD=null;
}},_onFocusIn:function(e){var j=e.getTarget();

if(j!=this.__sE){this.__sE=j;
j.visualizeFocus();
}},_onFocusOut:function(e){var bi=e.getTarget();

if(bi==this.__sE){this.__sE=null;
bi.visualizeBlur();
}},__sG:function(e){if(e.getKeyIdentifier()!=A){return;
}
if(!this.__sF){return;
}e.stopPropagation();
e.preventDefault();
var k=this.__sE;

if(!e.isShiftPressed()){var m=k?this.__sL(k):this.__sJ();
}else{var m=k?this.__sM(k):this.__sK();
}if(m){m.tabFocus();
}},__sH:function(n){var o=this.__sC;

while(n){if(o[n.$$hash]){return n;
}n=n.getLayoutParent();
}return null;
},__sI:function(P,Q){if(P===Q){return 0;
}var S=P.getTabIndex()||0;
var R=Q.getTabIndex()||0;

if(S!=R){return S-R;
}var X=P.getContainerElement().getDomElement();
var W=Q.getContainerElement().getDomElement();
var V=qx.bom.element.Location;
var U=V.get(X);
var T=V.get(W);
if(U.top!=T.top){return U.top-T.top;
}if(U.left!=T.left){return U.left-T.left;
}var Y=P.getZIndex();
var ba=Q.getZIndex();

if(Y!=ba){return Y-ba;
}return 0;
},__sJ:function(){return this.__sP(this.__sF,null);
},__sK:function(){return this.__sQ(this.__sF,null);
},__sL:function(I){var J=this.__sF;

if(J==I){return this.__sJ();
}
while(I&&I.getAnonymous()){I=I.getLayoutParent();
}
if(I==null){return [];
}var K=[];
this.__sN(J,I,K);
K.sort(this.__sI);
var L=K.length;
return L>0?K[0]:this.__sJ();
},__sM:function(bc){var bd=this.__sF;

if(bd==bc){return this.__sK();
}
while(bc&&bc.getAnonymous()){bc=bc.getLayoutParent();
}
if(bc==null){return [];
}var be=[];
this.__sO(bd,bc,be);
be.sort(this.__sI);
var bf=be.length;
return bf>0?be[bf-1]:this.__sK();
},__sN:function(parent,p,q){var r=parent.getLayoutChildren();
var s;

for(var i=0,l=r.length;i<l;i++){s=r[i];
if(!(s instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(s)&&s.isEnabled()&&s.isVisible()){if(s.isTabable()&&this.__sI(p,s)<0){q.push(s);
}this.__sN(s,p,q);
}}},__sO:function(parent,a,b){var c=parent.getLayoutChildren();
var d;

for(var i=0,l=c.length;i<l;i++){d=c[i];
if(!(d instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(d)&&d.isEnabled()&&d.isVisible()){if(d.isTabable()&&this.__sI(a,d)>0){b.push(d);
}this.__sO(d,a,b);
}}},__sP:function(parent,t){var u=parent.getLayoutChildren();
var v;

for(var i=0,l=u.length;i<l;i++){v=u[i];
if(!(v instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(v)&&v.isEnabled()&&v.isVisible()){if(v.isTabable()){if(t==null||this.__sI(v,t)<0){t=v;
}}t=this.__sP(v,t);
}}return t;
},__sQ:function(parent,f){var g=parent.getLayoutChildren();
var h;

for(var i=0,l=g.length;i<l;i++){h=g[i];
if(!(h instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(h)&&h.isEnabled()&&h.isVisible()){if(h.isTabable()){if(f==null||this.__sI(h,f)>0){f=h;
}}f=this.__sQ(h,f);
}}return f;
}},destruct:function(){this._disposeMap(C);
this.__sE=this.__sD=this.__sF=null;
}});
})();
(function(){var k="qx.ui.window.Window",j="changeModal",i="changeVisibility",h="changeActive",g="_applyActiveWindow",f="__sS",d="__sR",c="qx.ui.window.MDesktop";
qx.Mixin.define(c,{properties:{activeWindow:{check:k,apply:g,init:null,nullable:true}},members:{__sR:null,__sS:null,getWindowManager:function(){if(!this.__sS){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__sS;
},supportsMaximize:function(){return true;
},setWindowManager:function(a){if(this.__sS){this.__sS.setDesktop(null);
}a.setDesktop(this);
this.__sS=a;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(m,n){this.getWindowManager().changeActiveWindow(m,n);

if(m){m.setActive(true);
}
if(n){n.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(b){if(qx.Class.isDefined(k)&&b instanceof qx.ui.window.Window){this._addWindow(b);
}},_addWindow:function(l){if(!qx.lang.Array.contains(this.getWindows(),l)){this.getWindows().push(l);
l.addListener(h,this._onChangeActive,this);
l.addListener(j,this._onChangeModal,this);
l.addListener(i,this._onChangeVisibility,this);
}
if(l.getActive()){this.setActiveWindow(l);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(p){if(qx.Class.isDefined(k)&&p instanceof qx.ui.window.Window){this._removeWindow(p);
}},_removeWindow:function(o){qx.lang.Array.remove(this.getWindows(),o);
o.removeListener(h,this._onChangeActive,this);
o.removeListener(j,this._onChangeModal,this);
o.removeListener(i,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__sR){this.__sR=[];
}return this.__sR;
}},destruct:function(){this._disposeArray(d);
this._disposeObjects(f);
}});
})();
(function(){var k="Use 'getBlocker().getContentBlockerElement()' instead.",j="Use 'getBlocker().getBlockerElement()' instead.",i="_applyBlockerColor",h="Number",g="__sT",f="qx.ui.core.MBlocker",e="_applyBlockerOpacity",d="Color";
qx.Mixin.define(f,{construct:function(){this.__sT=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:d,init:null,nullable:true,apply:i,themeable:true},blockerOpacity:{check:h,init:1,apply:e,themeable:true}},members:{__sT:null,_applyBlockerColor:function(b,c){this.__sT.setColor(b);
},_applyBlockerOpacity:function(l,m){this.__sT.setOpacity(l);
},block:function(){this.__sT.block();
},isBlocked:function(){return this.__sT.isBlocked();
},unblock:function(){this.__sT.unblock();
},forceUnblock:function(){this.__sT.forceUnblock();
},blockContent:function(a){this.__sT.blockContent(a);
},isContentBlocked:function(){return this.__sT.isContentBlocked();
},unblockContent:function(){this.__sT.unblockContent();
},forceUnblockContent:function(){this.__sT.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);
return this.__sT.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return this.__sT.getBlockerElement();
},getBlocker:function(){return this.__sT;
}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var p="pressed",o="abandoned",n="Integer",m="hovered",l="qx.event.type.Event",k="Enter",j="Space",i="press",h="qx.ui.form.RepeatButton",g="release",c="interval",f="__sU",d="execute";
qx.Class.define(h,{extend:qx.ui.form.Button,construct:function(r,s){arguments.callee.base.call(this,r,s);
this.__sU=new qx.event.AcceleratingTimer();
this.__sU.addListener(c,this._onInterval,this);
},events:{"execute":l,"press":l,"release":l},properties:{interval:{check:n,init:100},firstInterval:{check:n,init:500},minTimer:{check:n,init:20},timerDecrease:{check:n,init:2}},members:{__sV:null,__sU:null,press:function(){if(this.isEnabled()){if(!this.hasState(p)){this.__sW();
}this.removeState(o);
this.addState(p);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(p)){if(!this.__sV){this.execute();
}}this.removeState(p);
this.removeState(o);
this.__sX();
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);

if(!a){this.removeState(p);
this.removeState(o);
this.__sX();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(o)){this.removeState(o);
this.addState(p);
this.__sU.start();
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(p)){this.removeState(p);
this.addState(o);
this.__sU.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__sW();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(o)){this.addState(m);

if(this.hasState(p)&&!this.__sV){this.execute();
}}this.__sX();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case k:case j:if(this.hasState(p)){if(!this.__sV){this.execute();
}this.removeState(p);
this.removeState(o);
e.stopPropagation();
this.__sX();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case k:case j:this.removeState(o);
this.addState(p);
e.stopPropagation();
this.__sW();
}},_onInterval:function(e){this.__sV=true;
this.fireEvent(d);
},__sW:function(){this.fireEvent(i);
this.__sV=false;
this.__sU.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(o);
this.addState(p);
},__sX:function(){this.fireEvent(g);
this.__sU.stop();
this.removeState(o);
this.removeState(p);
}},destruct:function(){this._disposeObjects(f);
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
(function(){var d="qx.event.type.Data",c="qx.ui.form.IForm";
qx.Interface.define(c,{events:{"changeEnabled":d,"changeValid":d,"changeInvalidMessage":d,"changeRequired":d},members:{setEnabled:function(a){return arguments.length==1;
},getEnabled:function(){},setRequired:function(e){return arguments.length==1;
},getRequired:function(){},setValid:function(b){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var b="qx.ui.form.IRange";
qx.Interface.define(b,{members:{setMinimum:function(e){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(a){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(c){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(d){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var k="Boolean",j="invalid",i="qx.ui.form.MForm",h="_applyValid",g="",f="changeRequired",e="changeValid",d="changeInvalidMessage",c="String";
qx.Mixin.define(i,{properties:{valid:{check:k,init:true,apply:h,event:e},required:{check:k,init:false,event:f},invalidMessage:{check:c,init:g,event:d}},members:{_applyValid:function(a,b){a?this.removeState(j):this.addState(j);
}}});
})();
(function(){var n="knob",m="horizontal",l="vertical",k="Integer",j="px",i="mousemove",h="resize",g="left",f="top",d="mouseup",R="slider",Q="PageUp",P="mousedown",O="height",N="changeValue",M="Left",L="Down",K="Up",J="dblclick",I="qx.ui.form.Slider",u="PageDown",v="mousewheel",s="interval",t="_applyValue",q="_applyKnobFactor",r="End",o="width",p="_applyOrientation",w="Home",x="floor",A="_applyMinimum",z="click",C="Right",B="keypress",E="ceil",D="losecapture",y="contextmenu",H="_applyMaximum",G="Number",F="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(I,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(bb){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(B,this._onKeyPress);
this.addListener(v,this._onMouseWheel);
this.addListener(P,this._onMouseDown);
this.addListener(d,this._onMouseUp);
this.addListener(D,this._onMouseUp);
this.addListener(h,this._onUpdate);
this.addListener(y,this._onStopEvent);
this.addListener(z,this._onStopEvent);
this.addListener(J,this._onStopEvent);
if(bb!=null){this.setOrientation(bb);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:R},focusable:{refine:true,init:true},orientation:{check:[m,l],init:m,apply:p},value:{check:F,init:0,apply:t,event:N,nullable:true},minimum:{check:k,init:0,apply:A},maximum:{check:k,init:100,apply:H},singleStep:{check:k,init:1},pageStep:{check:k,init:10},knobFactor:{check:G,apply:q,nullable:true}},members:{__te:null,__tf:null,__tg:null,__th:null,__ti:null,__tj:null,__tk:null,__tl:null,__tm:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bO){var bP;

switch(bO){case n:bP=new qx.ui.core.Widget();
bP.addListener(h,this._onUpdate,this);
this._add(bP);
break;
}return bP||arguments.callee.base.call(this,bO);
},_onMouseWheel:function(e){var bl=e.getWheelDelta()>0?1:-1;
this.slideBy(bl*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bt=this.getOrientation()===m;
var bs=bt?M:K;
var forward=bt?C:L;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bs:this.slideBack();
break;
case u:this.slidePageForward();
break;
case Q:this.slidePageBack();
break;
case w:this.slideToBegin();
break;
case r:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__th){return;
}var bI=this.__to;
var bG=this.getChildControl(n);
var bH=bI?g:f;
var bK=bI?e.getDocumentLeft():e.getDocumentTop();
var bL=this.__te=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bH];
var bJ=this.__tf=qx.bom.element.Location.get(bG.getContainerElement().getDomElement())[bH];

if(e.getTarget()===bG){this.__th=true;
this.__ti=bK+bL-bJ;
}else{this.__tj=true;
this.__tk=bK<=bJ?-1:1;
this.__tp(e);
this._onInterval();
if(!this.__tm){this.__tm=new qx.event.Timer(100);
this.__tm.addListener(s,this._onInterval,this);
}this.__tm.start();
}this.addListener(i,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__th){this.releaseCapture();
delete this.__th;
delete this.__ti;
}else if(this.__tj){this.__tm.stop();
this.releaseCapture();
delete this.__tj;
delete this.__tk;
delete this.__tl;
}this.removeListener(i,this._onMouseMove);
if(e.getType()===d){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__th){var bN=this.__to?e.getDocumentLeft():e.getDocumentTop();
var bM=bN-this.__ti;
this.slideTo(this._positionToValue(bM));
}else if(this.__tj){this.__tp(e);
}e.stopPropagation();
},_onInterval:function(e){var Y=this.getValue()+(this.__tk*this.getPageStep());
if(Y<this.getMinimum()){Y=this.getMinimum();
}else if(Y>this.getMaximum()){Y=this.getMaximum();
}var ba=this.__tk==-1;

if((ba&&Y<=this.__tl)||(!ba&&Y>=this.__tl)){Y=this.__tl;
}this.slideTo(Y);
},_onUpdate:function(e){var U=this.getInnerSize();
var V=this.getChildControl(n).getBounds();
var T=this.__to?o:O;
this._updateKnobSize();
this.__tn=U[T]-V[T];
this.__tg=V[T];
this._updateKnobPosition();
},__to:false,__tn:0,__tp:function(e){var bu=this.__to;
var bB=bu?e.getDocumentLeft():e.getDocumentTop();
var bD=this.__te;
var bv=this.__tf;
var bF=this.__tg;
var bC=bB-bD;

if(bB>=bv){bC-=bF;
}var bz=this._positionToValue(bC);
var bw=this.getMinimum();
var bx=this.getMaximum();

if(bz<bw){bz=bw;
}else if(bz>bx){bz=bx;
}else{var bA=this.getValue();
var by=this.getPageStep();
var bE=this.__tk<0?x:E;
bz=bA+(Math[bE]((bz-bA)/by)*by);
}if(this.__tl==null||(this.__tk==-1&&bz<=this.__tl)||(this.__tk==1&&bz>=this.__tl)){this.__tl=bz;
}},_positionToValue:function(be){var bf=this.__tn;
if(bf==null||bf==0){return 0;
}var bh=be/bf;

if(bh<0){bh=0;
}else if(bh>1){bh=1;
}var bg=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bg*bh);
},_valueToPosition:function(bm){var bn=this.__tn;

if(bn==null){return 0;
}var bo=this.getMaximum()-this.getMinimum();
if(bo==0){return 0;
}var bm=bm-this.getMinimum();
var bp=bm/bo;

if(bp<0){bp=0;
}else if(bp>1){bp=1;
}return Math.round(bn*bp);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bq){var br=this.getChildControl(n).getContainerElement();

if(this.__to){br.setStyle(g,bq+j,true);
}else{br.setStyle(f,bq+j,true);
}},_updateKnobSize:function(){var bR=this.getKnobFactor();

if(bR==null){return;
}var bQ=this.getInnerSize();

if(bQ==null){return;
}if(this.__to){this.getChildControl(n).setWidth(Math.round(bR*bQ.width));
}else{this.getChildControl(n).setHeight(Math.round(bR*bQ.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(S){this.slideTo(this.getValue()+S);
},slideTo:function(bi){if(bi<this.getMinimum()){bi=this.getMinimum();
}else if(bi>this.getMaximum()){bi=this.getMaximum();
}else{bi=this.getMinimum()+Math.round((bi-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bi);
},_applyOrientation:function(a,b){var c=this.getChildControl(n);
this.__to=a===m;
if(this.__to){this.removeState(l);
c.removeState(l);
this.addState(m);
c.addState(m);
c.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(m);
c.removeState(m);
this.addState(l);
c.addState(l);
c.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(W,X){if(W!=null){this._updateKnobSize();
}else{if(this.__to){this.getChildControl(n).resetWidth();
}else{this.getChildControl(n).resetHeight();
}}},_applyValue:function(bc,bd){if(bc!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(bj,bk){if(this.getValue()<bj){this.setValue(bj);
}this._updateKnobPosition();
},_applyMaximum:function(bS,bT){if(this.getValue()>bS){this.setValue(bS);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var e="Integer",d="interval",c="__sY",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__sY=new qx.event.Timer(this.getInterval());
this.__sY.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__sY:null,__ta:null,start:function(){this.__sY.setInterval(this.getFirstInterval());
this.__sY.start();
},stop:function(){this.__sY.stop();
this.__ta=null;
},_onInterval:function(){this.__sY.stop();

if(this.__ta==null){this.__ta=this.getInterval();
}this.__ta=Math.max(this.getMinimum(),this.__ta-this.getDecrease());
this.__sY.setInterval(this.__ta);
this.__sY.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var m="resize",l="scrollY",k="update",j="scrollX",i="_applyScrollX",h="_applyScrollY",g="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",f="appear",d="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",c="qx.event.type.Event",a="qx.ui.core.scroll.ScrollPane",b="scroll";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(m,this._onUpdate);
var r=this.getContentElement();
r.addListener(b,this._onScroll,this);
r.addListener(f,this._onAppear,this);
},events:{update:c},properties:{scrollX:{check:g,apply:i,event:j,init:0},scrollY:{check:d,apply:h,event:l,init:0}},members:{add:function(D){var E=this._getChildren()[0];

if(E){this._remove(E);
E.removeListener(m,this._onUpdate,this);
}
if(D){this._add(D);
D.addListener(m,this._onUpdate,this);
}},remove:function(q){if(q){this._remove(q);
q.removeListener(m,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(k);
},_onScroll:function(e){var K=this.getContentElement();
this.setScrollX(K.getScrollX());
this.setScrollY(K.getScrollY());
},_onAppear:function(e){var z=this.getContentElement();
var u=this.getScrollX();
var v=z.getScrollX();

if(u!=v){z.scrollToX(u);
}var A=this.getScrollY();
var w=z.getScrollY();

if(A!=w){z.scrollToY(A);
}},getItemTop:function(F){var top=0;

do{top+=F.getBounds().top;
F=F.getLayoutParent();
}while(F&&F!==this);
return top;
},getItemBottom:function(I){return this.getItemTop(I)+I.getBounds().height;
},getItemLeft:function(s){var t=0;
var parent;

do{t+=s.getBounds().left;
parent=s.getLayoutParent();

if(parent){t+=parent.getInsets().left;
}s=parent;
}while(s&&s!==this);
return t;
},getItemRight:function(J){return this.getItemLeft(J)+J.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var N=this.getInnerSize();
var M=this.getScrollSize();

if(N&&M){return Math.max(0,M.width-N.width);
}return 0;
},getScrollMaxY:function(){var H=this.getInnerSize();
var G=this.getScrollSize();

if(H&&G){return Math.max(0,G.height-H.height);
}return 0;
},scrollToX:function(n){var o=this.getScrollMaxX();

if(n<0){n=0;
}else if(n>o){n=o;
}this.setScrollX(n);
},scrollToY:function(B){var C=this.getScrollMaxY();

if(B<0){B=0;
}else if(B>C){B=C;
}this.setScrollY(B);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(p){this.getContentElement().scrollToX(p);
},_applyScrollY:function(L){this.getContentElement().scrollToY(L);
}}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(d){this.assertNumber(d);
},scrollBy:function(e){this.assertNumber(e);
},scrollBySteps:function(c){this.assertNumber(c);
}}});
})();
(function(){var q="horizontal",p="px",o="scroll",n="vertical",m="-1px",l="qx.client",k="0",j="hidden",i="mousedown",h="qx.ui.core.scroll.NativeScrollBar",F="PositiveNumber",E="Integer",D="mousemove",C="_applyMaximum",B="_applyOrientation",A="appear",z="opera",y="PositiveInteger",x="mshtml",w="mouseup",u="Number",v="_applyPosition",s="scrollbar",t="__tc",r="native";
qx.Class.define(h,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(c){arguments.callee.base.call(this);
this.addState(r);
this.getContentElement().addListener(o,this._onScroll,this);
this.addListener(i,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);
this.addListener(D,this._stopPropagation,this);

if(qx.core.Variant.isSet(l,z)){this.addListener(A,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(c!=null){this.setOrientation(c);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:s},orientation:{check:[q,n],init:q,apply:B},maximum:{check:y,apply:C,init:100},position:{check:u,init:0,apply:v,event:o},singleStep:{check:E,init:20},knobFactor:{check:F,nullable:true}},members:{__tb:null,__tc:null,_getScrollPaneElement:function(){if(!this.__tc){this.__tc=new qx.html.Element();
}return this.__tc;
},renderLayout:function(H,top,I,J){var K=arguments.callee.base.call(this,H,top,I,J);
this._updateScrollBar();
return K;
},_getContentHint:function(){var M=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__tb?100:M,maxWidth:this.__tb?null:M,minWidth:this.__tb?null:M,height:this.__tb?M:100,maxHeight:this.__tb?M:null,minHeight:this.__tb?M:null};
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);
this._updateScrollBar();
},_applyMaximum:function(G){this._updateScrollBar();
},_applyPosition:function(O){var content=this.getContentElement();

if(this.__tb){content.scrollToX(O);
}else{content.scrollToY(O);
}},_applyOrientation:function(d,f){var g=this.__tb=d===q;
this.set({allowGrowX:g,allowShrinkX:g,allowGrowY:!g,allowShrinkY:!g});

if(g){this.replaceState(n,q);
}else{this.replaceState(q,n);
}this.getContentElement().setStyles({overflowX:g?o:j,overflowY:g?j:o});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var U=this.__tb;
var V=this.getBounds();

if(!V){return;
}
if(this.isEnabled()){var W=U?V.width:V.height;
var T=this.getMaximum()+W;
}else{T=0;
}if(qx.core.Variant.isSet(l,x)){var V=this.getBounds();
this.getContentElement().setStyles({left:U?k:m,top:U?m:k,width:(U?V.width:V.width+1)+p,height:(U?V.height+1:V.height)+p});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(U?T:1)+p,height:(U?1:T)+p});
this.scrollTo(this.getPosition());
},scrollTo:function(L){this.setPosition(Math.max(0,Math.min(this.getMaximum(),L)));
},scrollBy:function(N){this.scrollTo(this.getPosition()+N);
},scrollBySteps:function(P){var Q=this.getSingleStep();
this.scrollBy(P*Q);
},_onScroll:function(e){var S=this.getContentElement();
var R=this.__tb?S.getScrollX():S.getScrollY();
this.setPosition(R);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(t);
}});
})();
(function(){var s="slider",r="horizontal",q="button-begin",p="vertical",o="button-end",n="Integer",m="execute",l="right",k="left",j="down",H="up",G="PositiveNumber",F="changeValue",E="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",D="_applyKnobFactor",C="knob",B="qx.ui.core.scroll.ScrollBar",A="resize",z="_applyOrientation",y="_applyPageStep",w="PositiveInteger",x="scroll",u="_applyPosition",v="scrollbar",t="_applyMaximum";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(c){arguments.callee.base.call(this);
this._createChildControl(q);
this._createChildControl(s).addListener(A,this._onResizeSlider,this);
this._createChildControl(o);
if(c!=null){this.setOrientation(c);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:v},orientation:{check:[r,p],init:r,apply:z},maximum:{check:w,apply:t,init:100},position:{check:E,init:0,apply:u,event:x},singleStep:{check:n,init:20},pageStep:{check:n,init:10,apply:y},knobFactor:{check:G,apply:D,nullable:true}},members:{__td:2,_createChildControlImpl:function(a){var b;

switch(a){case s:b=new qx.ui.core.scroll.ScrollSlider();
b.setPageStep(100);
b.setFocusable(false);
b.addListener(F,this._onChangeSliderValue,this);
this._add(b,{flex:1});
break;
case q:b=new qx.ui.form.RepeatButton();
b.setFocusable(false);
b.addListener(m,this._onExecuteBegin,this);
this._add(b);
break;
case o:b=new qx.ui.form.RepeatButton();
b.setFocusable(false);
b.addListener(m,this._onExecuteEnd,this);
this._add(b);
break;
}return b||arguments.callee.base.call(this,a);
},_applyMaximum:function(O){this.getChildControl(s).setMaximum(O);
},_applyPosition:function(i){this.getChildControl(s).setValue(i);
},_applyKnobFactor:function(R){this.getChildControl(s).setKnobFactor(R);
},_applyPageStep:function(K){this.getChildControl(s).setPageStep(K);
},_applyOrientation:function(L,M){var N=this._getLayout();

if(N){N.dispose();
}if(L===r){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(p,r);
this.getChildControl(q).replaceState(H,k);
this.getChildControl(o).replaceState(j,l);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(r,p);
this.getChildControl(q).replaceState(k,H);
this.getChildControl(o).replaceState(l,j);
}this.getChildControl(s).setOrientation(L);
},scrollTo:function(P){this.getChildControl(s).slideTo(P);
},scrollBy:function(Q){this.getChildControl(s).slideBy(Q);
},scrollBySteps:function(I){var J=this.getSingleStep();
this.getChildControl(s).slideBy(I*J);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var d=this.getChildControl(s).getChildControl(C);
var h=d.getSizeHint();
var f=false;
var g=this.getChildControl(s).getInnerSize();

if(this.getOrientation()==p){if(g.height<h.minHeight+this.__td){f=true;
}}else{if(g.width<h.minWidth+this.__td){f=true;
}}
if(f){d.exclude();
}else{d.show();
}}}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var n="success",m="head",l="complete",k="error",j="load",i="fail",h="loaded",g="readystatechange",f="qx.io.ScriptLoader",d="script",a="qx.client",c="text/javascript",b="abort";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__tq=qx.lang.Function.bind(this.__tw,this);
this.__tr=document.createElement(d);
},members:{__ts:null,__tt:null,__tu:null,__tq:null,__tr:null,load:function(p,q,r){if(this.__ts){throw new Error("Another request is still running!");
}this.__ts=true;
var s=document.getElementsByTagName(m)[0];
var t=this.__tr;
this.__tt=q||null;
this.__tu=r||window;
t.type=c;
t.onerror=t.onload=t.onreadystatechange=this.__tq;
t.src=p;
s.appendChild(t);
},abort:function(){if(this.__ts){this.__tv(b);
}},__tv:function(status){var o=this.__tr;
o.onerror=o.onload=o.onreadystatechange=null;
document.getElementsByTagName(m)[0].removeChild(o);
delete this.__ts;
if(this.__tt){this.__tt.call(this.__tu,status);
delete this.__tt;
}},__tw:qx.event.GlobalError.observeMethod(qx.core.Variant.select(a,{"mshtml":function(e){var u=this.__tr.readyState;

if(u==h){this.__tv(n);
}else if(u==l){this.__tv(n);
}else{return;
}},"opera":function(e){if(qx.lang.Type.isString(e)||e.type===k){return this.__tv(i);
}else if(e.type===j){return this.__tv(n);
}else{return;
}},"default":function(e){if(qx.lang.Type.isString(e)||e.type===k){this.__tv(i);
}else if(e.type===j){this.__tv(n);
}else if(e.type===g&&(e.target.readyState===l||e.target.readyState===h)){this.__tv(n);
}else{return;
}}}))},destruct:function(){this.__tr.onerror=this.__tr.onload=this.__tr.onreadystatechange=null;
this.__tr=this.__tq=this.__tt=this.__tu=null;
}});
})();
(function(){var J="qx.client",I="head",H="text/css",G="stylesheet",F="}",E='@import "',D="{",C='";',B="qx.bom.Stylesheet",A="link",z="style";
qx.Class.define(B,{statics:{includeFile:function(p,q){if(!q){q=document;
}var r=q.createElement(A);
r.type=H;
r.rel=G;
r.href=qx.util.ResourceManager.getInstance().toUri(p);
var s=q.getElementsByTagName(I)[0];
s.appendChild(r);
},createElement:qx.core.Variant.select(J,{"mshtml":function(x){var y=document.createStyleSheet();

if(x){y.cssText=x;
}return y;
},"default":function(T){var U=document.createElement(z);
U.type=H;

if(T){U.appendChild(document.createTextNode(T));
}document.getElementsByTagName(I)[0].appendChild(U);
return U.sheet;
}}),addRule:qx.core.Variant.select(J,{"mshtml":function(V,W,X){V.addRule(W,X);
},"default":function(h,j,k){h.insertRule(j+D+k+F,h.cssRules.length);
}}),removeRule:qx.core.Variant.select(J,{"mshtml":function(l,m){var n=l.rules;
var o=n.length;

for(var i=o-1;i>=0;--i){if(n[i].selectorText==m){l.removeRule(i);
}}},"default":function(a,b){var c=a.cssRules;
var d=c.length;

for(var i=d-1;i>=0;--i){if(c[i].selectorText==b){a.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(J,{"mshtml":function(e){var f=e.rules;
var g=f.length;

for(var i=g-1;i>=0;i--){e.removeRule(i);
}},"default":function(K){var L=K.cssRules;
var M=L.length;

for(var i=M-1;i>=0;i--){K.deleteRule(i);
}}}),addImport:qx.core.Variant.select(J,{"mshtml":function(Y,ba){Y.addImport(ba);
},"default":function(bb,bc){bb.insertRule(E+bc+C,bb.cssRules.length);
}}),removeImport:qx.core.Variant.select(J,{"mshtml":function(bd,be){var bf=bd.imports;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].href==be){bd.removeImport(i);
}}},"default":function(t,u){var v=t.cssRules;
var w=v.length;

for(var i=w-1;i>=0;i--){if(v[i].href==u){t.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(J,{"mshtml":function(Q){var R=Q.imports;
var S=R.length;

for(var i=S-1;i>=0;i--){Q.removeImport(i);
}},"default":function(N){var O=N.cssRules;
var P=O.length;

for(var i=P-1;i>=0;i--){if(O[i].type==O[i].IMPORT_RULE){N.deleteRule(i);
}}}})}});
})();
(function(){var h="complete",g="initialized",f="loading",e="webkit",d="load",c="qx.event.type.Event",b="qx.client",a="qx.io.part.Package";
qx.Class.define(a,{extend:qx.core.Object,construct:function(m,n,o){arguments.callee.base.call(this);
this.__tx=o?h:g;
this.__ty=m;
this.__tz=n;
},events:{"load":c},members:{__tz:null,__ty:null,__tx:null,__tA:function(i,j,self){if(i.length==0){j.call(self);
return;
}this.__tx=f;
var l=0;
var k=function(p){if(l>=i.length){this.__tx=h;
j.call(self);
return;
}var q=new qx.io.ScriptLoader();
q.load(p.shift(),function(){l+=1;
q.dispose();

if(qx.core.Variant.isSet(b,e)){qx.event.Timer.once(function(){k.call(this,p,j,self);
},this,0);
}else{k.call(this,p,j,self);
}},this);
};
k(qx.lang.Array.clone(i));
},getReadyState:function(){return this.__tx;
},load:function(){if(this.__tx!==g){return;
}this.__tx=f;
this.__tA(this.__ty,function(){this.__tx=h;
var r=qx.$$loader.packageHashes[this.__tz];
this._importPackageData(qx.$$packageData[r]);
this.fireEvent(d);
},this);
},_importPackageData:qx.$$loader.importPackageData},destruct:function(){this.__ty=null;
}});
})();
(function(){var l="String",k="loading",j="complete",i="initialized",h="changeState",g="changeDescription",f="changeName",e="showcase.Page",d="showcase.AbstractContent",c="changeIcon",b="changePart";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){this.initReadyState();
},properties:{name:{check:l,event:f},icon:{check:l,event:c},part:{check:l,event:b},description:{check:l,event:g},contentClass:{},controlClass:{nullable:true},content:{check:d},readyState:{check:[i,k,j],init:i,event:h}},members:{load:function(m,n){var m=m||qx.lang.Function.empty;
var n=n||this;
var o=this.getReadyState();

if(o==j){m.call(n,this);
return;
}else if(o==k){return this.addListenerOnce(h,function(){m.call(n,this);
});
}else{this.setReadyState(k);
qx.io.PartLoader.require(this.getPart(),function(){this._initializeContent();
this.setReadyState(j);
m.call(n,this);
},this);
}},_initializeContent:function(){var a=qx.Class.getByName(this.getContentClass());
this.setContent(new a(this));
}}});
})();
(function(){var j="Theming",i="and UI code and differ only in their theme.",h="Widgets can have states like \"selected\" or ",g="browser issues and allows styling of any widget property. It is ",f="showcase.page.theme.Content",e="showcase/theme/icon.png",d="Custom themes",c="<p> The two calculators on this page share exactly the same application ",b="widget independent of its content. Qooxdoo comes with a rich set of ",a="application code.",v="qooxdoo provides a powerful theming system built on a custom JSON-like ",u="This demo shows all available decorators.",t="possible to create entirely different themes without touching the ",s="Appearance",r="showcase.page.theme.Page",q="syntax. Unlike CSS this syntax doesn't have any cross ",p="\"hovered\", which can be used by the theme to style the widgets.",o="theme",n="pre-defined decorators.",m="This namespace contains the theme managers and the two standard themes.",k="Decorators",l="Any HTML code can be used to style the background of a ";
qx.Class.define(r,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:j,part:o,icon:e,contentClass:f,description:showcase.page.DescriptionBuilder.build(j,this.__tB,null,this.__tC,this.__tD,this.__tE,this.__tF)});
},members:{__tB:v+q+g+t+a+c+i,__tC:{"States":h+p,"Decorators":l+b+n},__tD:{"ui_theming":j,"ui_appearance":s,"ui_custom_themes":d,"ui_decorators":k},__tE:{"#ui~Decoration.html":u},__tF:{"#qx.theme":m}}});
})();
(function(){var k="complete",j="load",h="initialized",g="loading",f="qx.io.part.Part",e="qx.event.type.Event",d="__tI";
qx.Class.define(f,{extend:qx.core.Object,construct:function(name,l){arguments.callee.base.call(this);
this.__tG=name;
this.__tH=k;
this.__tI=l;

for(var i=0;i<l.length;i++){if(l[i].getReadyState()!==k){this.__tH=h;
break;
}}},events:{"load":e},members:{__tH:null,getReadyState:function(){return this.__tH;
},__tG:null,getName:function(){return this.__tG;
},__tI:null,load:function(a,self){if(this.__tH==k){if(a){a.call(self);
}return;
}else if(this.__tH==g){if(a){this.addListenerOnce(j,a,self);
}return;
}
if(a){this.addListenerOnce(j,a,self);
}var b=function(){this.load();
};

for(var i=0;i<this.__tI.length;i++){var c=this.__tI[i];

switch(c.getReadyState()){case h:c.addListenerOnce(j,b,this);
c.load();
return;
case g:c.addListenerOnce(j,b,this);
return;
case k:break;
default:throw new Error("Invalid case!");
}}this.__tH=k;
this.fireEvent(j);
}},destruct:function(){this._disposeArray(d);
}});
})();
(function(){var v="other",u="widgets",t="fonts",s="appearances",r="qx.Theme",q="]",p="[Theme ",o="colors",n="decorations",m="Theme",h="meta",k="borders",j="icons";
qx.Bootstrap.define(r,{statics:{define:function(name,M){if(!M){var M={};
}M.include=this.__ux(M.include);
M.patch=this.__ux(M.patch);
{};
var N={$$type:m,name:name,title:M.title,toString:this.genericToString};
if(M.extend){N.supertheme=M.extend;
}N.basename=qx.Bootstrap.createNamespace(name,N);
this.__uA(N,M);
this.__uy(N,M);
this.$$registry[name]=N;
for(var i=0,a=M.include,l=a.length;i<l;i++){this.include(N,a[i]);
}
for(var i=0,a=M.patch,l=a.length;i<l;i++){this.patch(N,a[i]);
}},__ux:function(D){if(!D){return [];
}
if(qx.Bootstrap.isArray(D)){return D;
}else{return [D];
}},__uy:function(O,P){var Q=P.aliases||{};

if(P.extend&&P.extend.aliases){qx.Bootstrap.objectMergeWith(Q,P.extend.aliases,false);
}O.aliases=Q;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return p+this.name+q;
},__uz:function(E){for(var i=0,F=this.__uB,l=F.length;i<l;i++){if(E[F[i]]){return F[i];
}}},__uA:function(w,x){var A=this.__uz(x);
if(x.extend&&!A){A=x.extend.type;
}w.type=A||v;
if(!A){return;
}var C=function(){};
if(x.extend){C.prototype=new x.extend.$$clazz;
}var B=C.prototype;
var z=x[A];
for(var y in z){B[y]=z[y];
if(B[y].base){{};
B[y].base=x.extend;
}}w.$$clazz=C;
w[A]=new C;
},$$registry:{},__uB:[o,k,n,t,j,u,s,h],__uC:null,__uD:null,__uE:function(){},patch:function(G,H){var J=this.__uz(H);

if(J!==this.__uz(G)){throw new Error("The mixins '"+G.name+"' are not compatible '"+H.name+"'!");
}var I=H[J];
var K=G.$$clazz.prototype;

for(var L in I){K[L]=I[L];
}},include:function(b,c){var e=c.type;

if(e!==b.type){throw new Error("The mixins '"+b.name+"' are not compatible '"+c.name+"'!");
}var d=c[e];
var f=b.$$clazz.prototype;

for(var g in d){if(f[g]!==undefined){continue;
}f[g]=d[g];
}}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,e,b],mode:c}},members:{__wP:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__wP=null;
},getInsets:function(){if(this.__wP){return this.__wP;
}var a=this._getDefaultInsets();
return this.__wP={left:this.getInsetLeft()==null?a.left:this.getInsetLeft(),right:this.getInsetRight()==null?a.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?a.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?a.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__wP=null;
}},destruct:function(){this.__wP=null;
}});
})();
(function(){var s="px",r="0px",q="-1px",p="no-repeat",o="scale-x",n="scale-y",m="-tr",l="-l",k='</div>',j="scale",G="qx.client",F="-br",E="-t",D="-tl",C="-r",B='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',A="_applyBaseImage",z="-b",y="String",x="",v="-bl",w="-c",t="mshtml",u="qx.ui.decoration.Grid";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,construct:function(O,P){arguments.callee.base.call(this);
if(O!=null){this.setBaseImage(O);
}
if(P!=null){this.setInsets(P);
}},properties:{baseImage:{check:y,nullable:true,apply:A}},members:{__uP:null,__uQ:null,__uR:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__uP;
},getMarkup:function(){if(this.__uP){return this.__uP;
}var a=qx.bom.element.Decoration;
var b=this.__uQ;
var c=this.__uR;
var d=[];
d.push(B);
d.push(a.create(b.tl,p,{top:0,left:0}));
d.push(a.create(b.t,o,{top:0,left:c.left+s}));
d.push(a.create(b.tr,p,{top:0,right:0}));
d.push(a.create(b.bl,p,{bottom:0,left:0}));
d.push(a.create(b.b,o,{bottom:0,left:c.left+s}));
d.push(a.create(b.br,p,{bottom:0,right:0}));
d.push(a.create(b.l,n,{top:c.top+s,left:0}));
d.push(a.create(b.c,j,{top:c.top+s,left:c.left+s}));
d.push(a.create(b.r,n,{top:c.top+s,right:0}));
d.push(k);
return this.__uP=d.join(x);
},resize:function(Q,R,S){var T=this.__uR;
var innerWidth=R-T.left-T.right;
var innerHeight=S-T.top-T.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}Q.style.width=R+s;
Q.style.height=S+s;
Q.childNodes[1].style.width=innerWidth+s;
Q.childNodes[4].style.width=innerWidth+s;
Q.childNodes[7].style.width=innerWidth+s;
Q.childNodes[6].style.height=innerHeight+s;
Q.childNodes[7].style.height=innerHeight+s;
Q.childNodes[8].style.height=innerHeight+s;

if(qx.core.Variant.isSet(G,t)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(R%2==1){Q.childNodes[2].style.marginRight=q;
Q.childNodes[5].style.marginRight=q;
Q.childNodes[8].style.marginRight=q;
}else{Q.childNodes[2].style.marginRight=r;
Q.childNodes[5].style.marginRight=r;
Q.childNodes[8].style.marginRight=r;
}
if(S%2==1){Q.childNodes[3].style.marginBottom=q;
Q.childNodes[4].style.marginBottom=q;
Q.childNodes[5].style.marginBottom=q;
}else{Q.childNodes[3].style.marginBottom=r;
Q.childNodes[4].style.marginBottom=r;
Q.childNodes[5].style.marginBottom=r;
}}}},tint:function(g,h){},_applyBaseImage:function(H,I){{};

if(H){var M=this._resolveImageUrl(H);
var N=/(.*)(\.[a-z]+)$/.exec(M);
var L=N[1];
var K=N[2];
var J=this.__uQ={tl:L+D+K,t:L+E+K,tr:L+m+K,bl:L+v+K,b:L+z+K,br:L+F+K,l:L+l+K,c:L+w+K,r:L+C+K};
this.__uR=this._computeEdgeSizes(J);
}},_resolveImageUrl:function(i){return qx.util.AliasManager.getInstance().resolve(i);
},_computeEdgeSizes:function(e){var f=qx.util.ResourceManager.getInstance();
return {top:f.getImageHeight(e.t),bottom:f.getImageHeight(e.b),left:f.getImageWidth(e.l),right:f.getImageWidth(e.r)};
}},destruct:function(){this.__uP=this.__uQ=this.__uR=null;
}});
})();
(function(){var e="showcase/theme/window.png",d="showcase/theme/display.png",c="showcase/theme/button.png",b="showcase.page.theme.calc.theme.Decoration",a="showcase/theme/button-pressed.png";
qx.Theme.define(b,{decorations:{"calc-button":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:[3,3,5,3]}},"calc-button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:a,insets:[3,3,5,3]}},"calc-display":{decorator:qx.ui.decoration.Grid,style:{baseImage:d,insets:[5,5,5,4]}},"calc-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:e,insets:2}}}});
})();
(function(){var t="Number",s="qx.event.type.Event",r="update",q="linear",p="reverse",o="Boolean",n="setup",m="none",l="qx.fx.Base",k="sinodial",d="flicker",j="pulse",g="_applyDuration",c="easeOutQuad",b="spring",f="easeInQuad",e="full",h="wobble",a="finish",i="Object";
qx.Class.define(l,{extend:qx.core.Object,construct:function(u){arguments.callee.base.call(this);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__vp=qx.fx.Base.EffectState.IDLE;
this.__vq=u;
},events:{"setup":s,"update":s,"finish":s},properties:{duration:{init:0.5,check:t,apply:g},fps:{init:100,check:t},sync:{init:false,check:o},from:{init:0,check:t},to:{init:1,check:t},delay:{init:0.0,check:t},queue:{check:i},transition:{init:q,check:[q,f,c,k,p,d,h,j,b,m,e]}},statics:{EffectState:{IDLE:'idle',PREPARING:'preparing',FINISHED:'finished',RUNNING:'running'}},members:{__vp:null,__vr:null,__vs:null,__vt:null,__vu:null,__vv:null,__vw:null,__vx:null,__vq:null,_getElement:function(){return this.__vq;
},_setElement:function(y){this.__vq=y;
},_applyDuration:function(w,x){},init:function(){this.__vp=qx.fx.Base.EffectState.PREPARING;
this.__vr=0;
this.__vs=this.getDelay()*1000+(new Date().getTime());
this.__vt=this.__vs+(this.getDuration()*1000);
this.__vu=this.getTo()-this.getFrom();
this.__vv=this.__vt-this.__vs;
this.__vw=this.getFps()*this.getDuration();
},beforeFinishInternal:function(){},beforeFinish:function(){},afterFinishInternal:function(){},afterFinish:function(){},beforeSetupInternal:function(){},beforeSetup:function(){},afterSetupInternal:function(){},afterSetup:function(){},beforeUpdateInternal:function(){},beforeUpdate:function(){},afterUpdateInternal:function(){},afterUpdate:function(){},beforeStartInternal:function(){},beforeStart:function(){},setup:function(){this.fireEvent(n);
},update:function(z){},finish:function(){this.fireEvent(a);
},start:function(){if(this.__vp!=qx.fx.Base.EffectState.IDLE){return false;
}this.init();
this.beforeStartInternal();
this.beforeStart();

if(!this.getSync()){this.getQueue().add(this);
}return true;
},end:function(){this.render(1.0);
this.cancel();
this.beforeFinishInternal();
this.beforeFinish();
this.finish();
this.afterFinishInternal();
this.afterFinish();
},render:function(v){if(this.__vp==qx.fx.Base.EffectState.PREPARING){this.__vp=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afterSetup();
}
if(this.__vp==qx.fx.Base.EffectState.RUNNING){this.__vx=qx.fx.Transition.get(this.getTransition())(v)*this.__vu+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__vx);
this.afterUpdateInternal();
this.afterUpdate();

if(this.hasListener(r)){this.fireEvent(r);
}}},loop:function(A){if(A>=this.__vs){if(A>=this.__vt){this.end();
}var C=(A-this.__vs)/this.__vv;
var B=Math.round(C*this.__vw);
if(B>this.__vr){this.render(C);
this.__vr=B;
}}},cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__vp=qx.fx.Base.EffectState.IDLE;
},resetState:function(){this.__vp=qx.fx.Base.EffectState.IDLE;
}},destruct:function(){this.__vq=this.__vp=null;
}});
})();
(function(){var e="display",d="none",c="qx.fx.effect.core.Fade",b="block",a="Boolean";
qx.Class.define(c,{extend:qx.fx.Base,properties:{modifyDisplay:{init:true,check:a},from:{init:1.0,refine:true},to:{init:0.0,refine:true}},members:{update:function(f){arguments.callee.base.call(this);
qx.bom.element.Opacity.set(this._getElement(),f);
},beforeSetup:function(){arguments.callee.base.call(this);
var g=this._getElement();

if((this.getModifyDisplay())&&(this.getTo()>0)){qx.bom.element.Style.set(g,e,b);
}qx.bom.element.Opacity.set(g,this.getFrom());
},afterFinishInternal:function(){if((this.getModifyDisplay())&&(this.getTo()==0)){qx.bom.element.Style.set(this._getElement(),e,d);
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var e="showcase.page.theme.calc.theme.Color",d="#969696",c="#AAA",b="#DDD",a="white";
qx.Theme.define(e,{colors:{"black-window-bg":d,"black-window-caption":b,"black-button-text":a,"black-button-text-pressed":c}});
})();
(function(){var a="showcase.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,include:[showcase.page.theme.calc.theme.Color],colors:{}});
})();
(function(){var d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(e,f){var h=qx.util.AliasManager.getInstance();

if(f){for(var g in f.aliases){h.remove(g);
}}
if(e){for(var g in e.aliases){h.add(g,e.aliases[g]);
}}}}});
})();
(function(){var s="bold",r="widget",q="black-window-bg",p="black-button-text-pressed",o="black-button-text",n="button",m="calc-button-pressed",l="black-window-caption",k="calc-display",j="calc-button",f="center",i="middle",h="calc-window",e="shadow-window",d="showcase.page.theme.calc.theme.appearance.Black",g="display";
qx.Theme.define(d,{appearances:{"calculator":{style:function(w){return {backgroundColor:q,decorator:h,shadow:e,contentPadding:[6,8,8,8]};
}},"calculator/pane":r,"calculator/captionbar":r,"calculator/title":{style:function(c){return {alignY:i,textAlign:f,font:s,textColor:l};
}},"calculator/icon":{style:function(b){return {margin:[3,8,0,8]};
}},"display":{style:function(u){return {decorator:k,marginBottom:8,height:51,padding:[0,20]};
}},"display/label":{style:function(a){return {font:s,marginLeft:5};
}},"display/memory":{style:function(v){return {marginLeft:5};
}},"display/operation":{style:function(t){return {marginLeft:50};
}},"calculator/display":g,"calculator-button":{alias:n,style:function(x){return {textColor:x.pressed?p:o,decorator:x.pressed?m:j,center:true,padding:x.pressed?[1,8,3,8]:[2,8]};
}}}});
})();
(function(){var f="resize",d="__tL",c="interval",b="body",a="qx.event.handler.ElementResize";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this.__tJ=g;
this.__tK={};
this.__tL=new qx.event.Timer(200);
this.__tL.addListener(c,this._onInterval,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{resize:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__tK:null,__tJ:null,__tL:null,canHandleEvent:function(h,i){return h.tagName.toLowerCase()!==b;
},registerEvent:function(u,v,w){var y=qx.core.ObjectRegistry.toHashCode(u);
var x=this.__tK;

if(!x[y]){x[y]={element:u,width:qx.bom.element.Dimension.getWidth(u),height:qx.bom.element.Dimension.getHeight(u)};
this.__tL.start();
}},unregisterEvent:function(p,q,r){var t=qx.core.ObjectRegistry.toHashCode(p);
var s=this.__tK;

if(s[t]){delete s[t];

if(qx.lang.Object.isEmpty(s)){this.__tL.stop();
}}},_onInterval:function(e){var k=this.__tK;

for(var n in k){var o=k[n];
var j=o.element;
var m=qx.bom.element.Dimension.getWidth(j);
var l=qx.bom.element.Dimension.getHeight(j);

if(o.height!==l||o.width!==m){qx.event.Registration.fireNonBubblingEvent(j,f,qx.event.type.Data,[{width:m,oldWidth:o.width,height:l,oldHeight:o.height}]);
o.width=m;
o.height=l;
}}}},destruct:function(){this.__tJ=this.__tK=null;
this._disposeObjects(d);
},defer:function(z){qx.event.Registration.addHandler(z);
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
(function(){var w="_applyBackground",v="repeat",u="mshtml",t="backgroundPositionX",s="",r="backgroundPositionY",q="no-repeat",p="scale",o=" ",n="repeat-x",i="qx.client",m="repeat-y",l="hidden",h="qx.ui.decoration.MBackgroundImage",g="String",k='"></div>',j='<div style="';
qx.Mixin.define(h,{properties:{backgroundImage:{check:g,nullable:true,apply:w},backgroundRepeat:{check:[v,n,m,q,p],init:v,apply:w},backgroundPositionX:{nullable:true,apply:w},backgroundPositionY:{nullable:true,apply:w},backgroundPosition:{group:[r,t]}},members:{_generateBackgroundMarkup:function(a){{};
var e=s;
var d=this.getBackgroundImage();
var c=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var f=this.getBackgroundPositionX();

if(f==null){f=0;
}a.backgroundPosition=f+o+top;
if(d){var b=qx.util.AliasManager.getInstance().resolve(d);
e=qx.bom.element.Decoration.create(b,c,a);
}else{if(a){if(qx.core.Variant.isSet(i,u)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){a.overflow=l;
}}e=j+qx.bom.element.Style.compile(a)+k;
}}return e;
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
}},properties:{width:{check:e,init:0,apply:j},style:{nullable:true,check:[o,n,l,m],init:o,apply:r},color:{nullable:true,check:q,apply:r},backgroundColor:{check:q,nullable:true,apply:r}},members:{__wf:null,_getDefaultInsets:function(){var E=this.getWidth();
return {top:E,right:E,bottom:E,left:E};
},_isInitialized:function(){return !!this.__wf;
},getMarkup:function(){if(this.__wf){return this.__wf;
}var s={position:d,top:0,left:0};
var t=this.getWidth();
{};
var v=qx.theme.manager.Color.getInstance();
s.border=t+f+this.getStyle()+h+v.resolve(this.getColor());
var u=this._generateBackgroundMarkup(s);
return this.__wf=u;
},resize:function(w,x,y){var A=this.getBackgroundImage()&&this.getBackgroundRepeat()==g;

if(A||qx.bom.client.Feature.CONTENT_BOX){var z=this.getWidth()*2;
x-=z;
y-=z;
if(x<0){x=0;
}
if(y<0){y=0;
}}w.style.width=x+p;
w.style.height=y+p;
},tint:function(B,C){var D=qx.theme.manager.Color.getInstance();

if(C==null){C=this.getBackgroundColor();
}B.style.backgroundColor=D.resolve(C)||k;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__wf=null;
}});
})();
(function(){var n="px",m="qx.ui.decoration.Background",l="",k="_applyStyle",j="Color",i="absolute";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(o){arguments.callee.base.call(this);

if(o!=null){this.setBackgroundColor(o);
}},properties:{backgroundColor:{check:j,nullable:true,apply:k}},members:{__vO:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__vO;
},getMarkup:function(){if(this.__vO){return this.__vO;
}var a={position:i,top:0,left:0};
var b=this._generateBackgroundMarkup(a);
return this.__vO=b;
},resize:function(f,g,h){f.style.width=g+n;
f.style.height=h+n;
},tint:function(c,d){var e=qx.theme.manager.Color.getInstance();

if(d==null){d=this.getBackgroundColor();
}c.style.backgroundColor=e.resolve(d)||l;
},_applyStyle:function(){{};
}},destruct:function(){this.__vO=null;
}});
})();
(function(){var o="_applyStyle",n="solid",m="Color",l="double",k="px ",j="dotted",i="_applyWidth",h="dashed",g="Number",f=" ",K="shorthand",J="px",I="widthTop",H="styleRight",G="styleLeft",F="widthLeft",E="widthBottom",D="styleTop",C="colorBottom",B="styleBottom",v="widthRight",w="colorLeft",t="colorRight",u="colorTop",r="scale",s="border-top",p="border-left",q="border-right",x="qx.ui.decoration.Single",y="",A="border-bottom",z="absolute";
qx.Class.define(x,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(Q,R,S){arguments.callee.base.call(this);
if(Q!=null){this.setWidth(Q);
}
if(R!=null){this.setStyle(R);
}
if(S!=null){this.setColor(S);
}},properties:{widthTop:{check:g,init:0,apply:i},widthRight:{check:g,init:0,apply:i},widthBottom:{check:g,init:0,apply:i},widthLeft:{check:g,init:0,apply:i},styleTop:{nullable:true,check:[n,j,h,l],init:n,apply:o},styleRight:{nullable:true,check:[n,j,h,l],init:n,apply:o},styleBottom:{nullable:true,check:[n,j,h,l],init:n,apply:o},styleLeft:{nullable:true,check:[n,j,h,l],init:n,apply:o},colorTop:{nullable:true,check:m,apply:o},colorRight:{nullable:true,check:m,apply:o},colorBottom:{nullable:true,check:m,apply:o},colorLeft:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o},left:{group:[F,G,w]},right:{group:[v,H,t]},top:{group:[I,D,u]},bottom:{group:[E,B,C]},width:{group:[I,v,E,F],mode:K},style:{group:[D,H,B,G],mode:K},color:{group:[u,t,C,w],mode:K}},members:{__wQ:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__wQ;
},getMarkup:function(L){if(this.__wQ){return this.__wQ;
}var M=qx.theme.manager.Color.getInstance();
var N={};
var P=this.getWidthTop();

if(P>0){N[s]=P+k+this.getStyleTop()+f+M.resolve(this.getColorTop());
}var P=this.getWidthRight();

if(P>0){N[q]=P+k+this.getStyleRight()+f+M.resolve(this.getColorRight());
}var P=this.getWidthBottom();

if(P>0){N[A]=P+k+this.getStyleBottom()+f+M.resolve(this.getColorBottom());
}var P=this.getWidthLeft();

if(P>0){N[p]=P+k+this.getStyleLeft()+f+M.resolve(this.getColorLeft());
}{};
N.position=z;
N.top=0;
N.left=0;
var O=this._generateBackgroundMarkup(N);
return this.__wQ=O;
},resize:function(a,b,c){var e=this.getBackgroundImage()&&this.getBackgroundRepeat()==r;

if(e||qx.bom.client.Feature.CONTENT_BOX){var d=this.getInsets();
b-=d.left+d.right;
c-=d.top+d.bottom;
if(b<0){b=0;
}
if(c<0){c=0;
}}a.style.width=b+J;
a.style.height=c+J;
},tint:function(T,U){var V=qx.theme.manager.Color.getInstance();

if(U==null){U=this.getBackgroundColor();
}T.style.backgroundColor=V.resolve(U)||y;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__wQ=null;
}});
})();
(function(){var o="_applyStyle",n='"></div>',m="Color",l="1px",k='<div style="',j='border:',i="1px solid ",h="",g=";",f="px",A='</div>',z="qx.ui.decoration.Beveled",y='<div style="position:absolute;top:1px;left:1px;',x='border-bottom:',w='border-right:',v='border-left:',u='border-top:',t="Number",s='<div style="position:absolute;top:1px;left:0px;',r='position:absolute;top:0px;left:1px;',p='<div style="overflow:hidden;font-size:0;line-height:0;">',q="absolute";
qx.Class.define(z,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(M,N,O){arguments.callee.base.call(this);
if(M!=null){this.setOuterColor(M);
}
if(N!=null){this.setInnerColor(N);
}
if(O!=null){this.setInnerOpacity(O);
}},properties:{innerColor:{check:m,nullable:true,apply:o},innerOpacity:{check:t,init:1,apply:o},outerColor:{check:m,nullable:true,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__wg:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__wg;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__wg){return this.__wg;
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
return this.__wg=b.join(h);
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
}},destruct:function(){this.__wg=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bq="decoration/table/header-cell.png",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="background-pane",bk="repeat-y",bj="decoration/form/input-focused.png",bi="#33508D",bh="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="decoration/tabview/tab-button-left-inactive.png",B="decoration/groupbox/groupbox.png",C="#FAFAFA",M="decoration/pane/pane.png",J="decoration/menu/background.png",U="decoration/toolbar/toolbar-part.gif",P="decoration/tabview/tab-button-top-inactive.png",bd="decoration/menu/bar-background.png",ba="center",F="decoration/tabview/tab-button-bottom-active.png",bg="decoration/form/button-hovered.png",bf="decoration/form/tooltip-error-arrow.png",be="decoration/window/captionbar-inactive.png",E="qx/decoration/Modern",H="decoration/window/statusbar.png",I="border-focused",L="table-focus-indicator",N="#F2F2F2",Q="decoration/form/button-checked-c.png",W="decoration/scrollbar/scrollbar-bg-horizontal.png",bc="qx.theme.modern.Decoration",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="decoration/window/captionbar-active.png",x="decoration/tabview/tab-button-left-active.png",y="background-splitpane",K="decoration/form/button-checked-focused.png",b="#C5C5C5",c="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",z="#b8b8b8",A="decoration/shadow/shadow.png";
qx.Theme.define(bc,{aliases:{decoration:E},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bh,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bh,backgroundRepeat:l,bottom:[2,m,bi]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bi]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:M,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bf,backgroundPositionY:ba,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:W,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bk}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:c,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:Q,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:z,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:bk}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bl,width:3,color:y,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bl,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:be}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:L,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthRight:1,colorRight:N,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b,widthBottom:1,colorBottom:C}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bd,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var r="",q='#',p="String",o="request",n="mshtml",m="changeTitle",l="abstract",k="_applyState",j="qx.client",i="changeState",f="qx.bom.History",h="_applyTitle",g="qx.event.type.Data";
qx.Class.define(f,{extend:qx.core.Object,type:l,construct:function(){arguments.callee.base.call(this);
this._baseUrl=window.location.href.split(q)[0]+q;
this.__uk={};
this._setInitialState();
},events:{"request":g},statics:{SUPPORTS_HASH_CHANGE_EVENT:(qx.bom.client.Engine.MSHTML&&document.documentMode>=8)||(!qx.bom.client.Engine.MSHTML&&document.documentMode&&"onhashchange" in window),getInstance:function(){if(!this.$$instance){if(this.SUPPORTS_HASH_CHANGE_EVENT){this.$$instance=new qx.bom.NativeHistory();
}else if(qx.core.Variant.isSet(j,n)){this.$$instance=new qx.bom.IframeHistory();
}else{this.$$instance=new qx.bom.NativeHistory();
}}return this.$$instance;
}},properties:{title:{check:p,event:m,nullable:true,apply:h},state:{check:p,event:i,nullable:true,apply:k}},members:{__uk:null,_applyState:function(c,d){this._writeState(c);
},_setInitialState:function(){this.setState(this._readState());
},_encode:function(t){if(qx.lang.Type.isString(t)){return encodeURIComponent(t);
}return r;
},_decode:function(b){if(qx.lang.Type.isString(b)){return decodeURIComponent(b);
}return r;
},_applyTitle:function(a){if(a!=null){document.title=a||r;
}},addToHistory:function(v,w){if(!qx.lang.Type.isString(v)){v=v+r;
}
if(qx.lang.Type.isString(w)){this.setTitle(w);
this.__uk[v]=w;
}
if(this.getState()!==v){this._writeState(v);
}},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_onHistoryLoad:function(e){this.setState(e);
this.fireDataEvent(o,e);

if(this.__uk[e]!=null){this.setTitle(this.__uk[e]);
}},_readState:function(){throw new Error("Abstract method call");
},_writeState:function(){throw new Error("Abstract method call");
},_setHash:function(x){var y=this._baseUrl+(x||r);
var z=window.location;

if(y!=z.href){z.href=y;
}},_getHash:function(){var s=/#(.*)$/.exec(window.location.href);
return s&&s[1]?s[1]:r;
},setTimeoutInterval:function(u){{};
},getTimeoutInterval:function(){{};
return 100;
},resetTimeoutInterval:function(){{};
}},destruct:function(){this.__uk=null;
}});
})();
(function(){var e="hashchange",d="interval",c="qx.bom.NativeHistory",b="qx.client";
qx.Class.define(c,{extend:qx.bom.History,construct:function(){arguments.callee.base.call(this);
this.__tN();
},members:{__tM:null,__tN:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){this.__tM=qx.lang.Function.bind(this.__tP,this);
qx.bom.Event.addNativeListener(window,e,this.__tM);
}else{qx.event.Idle.getInstance().addListener(d,this.__tP,this);
}},__tO:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){qx.bom.Event.removeNativeListener(window,e,this.__tM);
}else{qx.event.Idle.getInstance().removeListener(d,this.__tP,this);
}},__tP:function(){var g=this._readState();

if(qx.lang.Type.isString(g)&&g!=this.getState()){this._onHistoryLoad(g);
}},_readState:function(){return this._decode(this._getHash());
},_writeState:qx.core.Variant.select(b,{"opera":function(a){qx.event.Timer.once(function(){this._setHash(this._encode(a));
},this,0);
},"default":function(f){this._setHash(this._encode(f));
}})},destruct:function(){this.__tO();
}});
})();
(function(){var j="HTML Editor",i="Format some text with underline, bold, italic, ...",h="Insert a numbered or bullet point list.",g="supplement. The UI controls of the toolbar can be used to interact ",f="The Html Editor, embedded here in a window with menu bar and toolbar, provides basic",e="Editor widget",d="showcase.page.htmleditor.Content",c="showcase/htmleditor/icon.png",b="Low-Level editor",a="htmleditor",v="Align the text on the right side.",u="Menu",t="Overview HTML Editing",s=" cross-browser HTML editing capabilities and is available both as a low-level component",r="MenuBar",q="HTML Area",p="You can insert HTML tables, images, hyperlinks, ...",o="with the HTML editing component.",n="showcase.page.htmleditor.Page",m="Try reverting your changes by using the undo button.",k=" and as a qooxdoo widget. It offers events, allowing easy implementation of a toolbar ",l="Toolbar";
qx.Class.define(n,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:j,part:a,icon:c,contentClass:d,description:showcase.page.DescriptionBuilder.build(j,this.__tQ,this.__tR,this.__tS,this.__tT,this.__tU,this.__tV)});
},members:{__tQ:f+s+k+g+o,__tR:{"Text Formatting":i,"Alignment":v,"Lists":h,"Redo/Undo":m},__tS:{"Inserting":p},__tT:{"ui_html_editing":t},__tU:{"#bom~HtmlArea.html":b,"#widget~HtmlArea.html":e},__tV:{"#qx.bom.htmlarea":q,"#qx.ui.toolbar":l,"#qx.ui.menubar":r,"#qx.ui.menu":u}}});
})();
(function(){var j="Form",i="Click the \"MenuButton\" to open the menu.",h="The form namespace",g="Form showcase",f="Data bound form",e="widgets. The widgets are grouped by type.",d="Open the select box to see the list of selectables.",c="Double column form renderer",b="Multi page form",a="showcase.page.form.Content",z="Custom form renderer",y="Form controller for binding",x="Form validation",w="form",v="This form demo shows the complete set of form ",u="showcase/form/icon.png",t="Data binding form controller",s="showcase.page.form.Page",r="Default form renderer",q="The placeholder disappears once you start to type in a text field.",o="Form handling",p="Form renderer",m="Complete set of form widgets.",n="Hold the repeat button to see the value increase.",k="Try cycling through the widgets by pressing the tab key.",l="Form renderer using placeholders";
qx.Class.define(s,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:j,part:w,icon:u,contentClass:a,description:showcase.page.DescriptionBuilder.build(j,this.__tW,this.__tX,this.__tY,this.__ua,this.__ub,this.__uc)});
},members:{__tW:v+e,__tX:{"Selection":d,"Text":q,"Buttons":n,"MenuButton":i},__tY:{"Widgets":m,"Keyboard Navigation":k},__ua:{"ui_form_handling":o},__ub:{"#ui~FormRenderer.html":r,"#ui~FormRendererCustom.html":z,"#ui~FormRendererDouble.html":c,"#ui~FormRendererPlaceholder.html":l,"#ui~FormValidator.html":x,"#ui~MultiPageForm.html":b,"#showcase~Form.html":g,"#data~FormController.html":t,"#data~Form.html":f},__uc:{"#qx.ui.form":h,"#qx.ui.form.renderer":p,"#qx.data.controller.Form":y}}});
})();
(function(){var hz="button-frame",hy="atom",hx="widget",hw="main",hv="button",hu="text-selected",ht="image",hs="bold",hr="middle",hq="background-light",gd="text-disabled",gc="groupbox",gb="decoration/arrows/down.png",ga="cell",fY="selected",fX="border-invalid",fW="input",fV="input-disabled",fU="menu-button",fT="input-focused-invalid",hG="toolbar-button",hH="spinner",hE="input-focused",hF="popup",hC="tooltip",hD="list",hA="tree-item",hB="treevirtual-contract",hI="scrollbar",hJ="datechooser/nav-button",gY="text-hovered",gX="center",hb="treevirtual-expand",ha="textfield",hd="label",hc="decoration/arrows/right.png",hf="background-application",he="radiobutton",gW="white",gV="invalid",dY="combobox",ea="right-top",eb="checkbox",ec="text-title",ed="qx/static/blank.gif",ee="scrollbar/button",ef="right",eg="combobox/button",eh="icon/16/places/folder.png",ei="text-label",hX="decoration/tree/closed.png",hW="scrollbar-slider-horizontal",hV="decoration/arrows/left.png",hU="button-focused",ic="text-light",ib="menu-slidebar-button",ia="text-input",hY="slidebar/button-forward",ie="background-splitpane",id=".png",fb="decoration/tree/open.png",fc="default",eY="decoration/arrows/down-small.png",fa="datechooser",ff="slidebar/button-backward",fg="selectbox",fd="treevirtual-folder",fe="shadow-popup",eW="icon/16/mimetypes/office-document.png",eX="background-medium",eC="table",eB="decoration/arrows/up.png",eE="decoration/form/",eD="",ey="-invalid",ex="icon/16/places/folder-open.png",eA="button-checked",ez="decoration/window/maximize-active-hovered.png",ew="radiobutton-hovered",ev="decoration/cursors/",fm="slidebar",fn="tooltip-error-arrow",fo="table-scroller-focus-indicator",fp="move-frame",fi="nodrop",fj="decoration/table/boolean-true.png",fk="table-header-cell",fl="menu",fq="app-header",fr="row-layer",eP="text-inactive",eO="move",eN="radiobutton-checked-focused",eM="decoration/window/restore-active-hovered.png",eL="shadow-window",eK="table-column-button",eJ="right.png",eI="tabview-page-button-bottom-inactive",eT="tooltip-error",eS="window-statusbar",fs="button-hovered",ft="decoration/scrollbar/scrollbar-",fu="background-tip",fv="scrollbar-slider-horizontal-disabled",fw="table-scroller-header",fx="radiobutton-disabled",fy="button-pressed",fz="table-pane",fA="decoration/window/close-active.png",fB="native",gl="checkbox-hovered",gk="button-invalid-shadow",gj="checkbox-checked",gi="decoration/window/minimize-active-hovered.png",gp="menubar",go="icon/16/actions/dialog-cancel.png",gn="tabview-page-button-top-inactive",gm="tabview-page-button-left-inactive",gt="menu-slidebar",gs="toolbar-button-checked",gQ="decoration/tree/open-selected.png",gR="radiobutton-checked",gO="decoration/window/minimize-inactive.png",gP="icon/16/apps/office-calendar.png",gM="group",gN="tabview-page-button-right-inactive",gK="decoration/window/minimize-active.png",gL="decoration/window/restore-inactive.png",gS="checkbox-checked-focused",gT="splitpane",hj="combobox/textfield",hi="button-preselected-focused",hl="decoration/window/close-active-hovered.png",hk="qx/icon/Tango/16/actions/window-close.png",hn="checkbox-pressed",hm="button-disabled",hp="selected-dragover",ho="border-separator",hh="decoration/window/maximize-inactive.png",hg="dragover",hQ="scrollarea",hR="scrollbar-vertical",hS="decoration/menu/checkbox-invert.gif",hT="decoration/toolbar/toolbar-handle-knob.gif",hM="icon/22/mimetypes/office-document.png",hN="button-preselected",hO="button-checked-focused",hP="up.png",hK="best-fit",hL="decoration/tree/closed-selected.png",dX="qx.theme.modern.Appearance",dW="text-active",dV="checkbox-disabled",dU="toolbar-button-hovered",dT="progressive-table-header",dS="decoration/table/select-column-order.png",dR="decoration/menu/radiobutton.gif",dQ="decoration/arrows/forward.png",dP="decoration/table/descending.png",dO="window-captionbar-active",el="checkbox-checked-hovered",em="scrollbar-slider-vertical",ej="toolbar",ek="alias",ep="decoration/window/restore-active.png",eq="decoration/table/boolean-false.png",en="checkbox-checked-disabled",eo="icon/32/mimetypes/office-document.png",es="radiobutton-checked-disabled",et="tabview-pane",gx="decoration/arrows/rewind.png",gr="checkbox-focused",gE="top",gA="#EEE",gg="icon/16/actions/dialog-ok.png",ge="radiobutton-checked-hovered",eG="table-header-cell-hovered",gh="window",eR="text-gray",eQ="decoration/menu/radiobutton-invert.gif",fL="text-placeholder",fM="slider",fN="keep-align",fO="down.png",fP="tabview-page-button-top-active",fQ="icon/32/places/folder-open.png",fR="icon/22/places/folder.png",fS="decoration/window/maximize-active.png",fI="checkbox-checked-pressed",fJ="decoration/window/close-inactive.png",gf="tabview-page-button-left-active",gD="toolbar-part",gC="decoration/splitpane/knob-vertical.png",gB=".gif",gI="icon/22/places/folder-open.png",gH="radiobutton-checked-pressed",gG="table-statusbar",gF="radiobutton-pressed",gz="window-captionbar-inactive",gy="copy",er="radiobutton-focused",eV="decoration/arrows/down-invert.png",eU="decoration/menu/checkbox.gif",gq="decoration/splitpane/knob-horizontal.png",fh="icon/32/places/folder.png",gw="toolbar-separator",gv="tabview-page-button-bottom-active",gu="decoration/arrows/up-small.png",eF="decoration/table/ascending.png",gJ="decoration/arrows/up-invert.png",eu="small",eH="tabview-page-button-right-active",fC="-disabled",fD="scrollbar-horizontal",fE="progressive-table-header-cell",fF="menu-separator",fG="pane",fH="decoration/arrows/right-invert.png",gU="left.png",fK="icon/16/actions/view-refresh.png";
qx.Theme.define(dX,{appearances:{"widget":{},"root":{style:function(bR){return {backgroundColor:hf,textColor:ei,font:fc};
}},"label":{style:function(dK){return {textColor:dK.disabled?gd:undefined};
}},"move-frame":{style:function(bP){return {decorator:hw};
}},"resize-frame":fp,"dragdrop-cursor":{style:function(G){var H=fi;

if(G.copy){H=gy;
}else if(G.move){H=eO;
}else if(G.alias){H=ek;
}return {source:ev+H+gB,position:ea,offset:[2,16,2,6]};
}},"image":{style:function(bH){return {opacity:!bH.replacement&&bH.disabled?0.3:1};
}},"atom":{},"atom/label":hd,"atom/icon":ht,"popup":{style:function(cu){return {decorator:hw,backgroundColor:hq,shadow:fe};
}},"button-frame":{alias:hy,style:function(dr){var dt,ds;

if(dr.checked&&dr.focused&&!dr.inner){dt=hO;
ds=undefined;
}else if(dr.disabled){dt=hm;
ds=undefined;
}else if(dr.pressed){dt=fy;
ds=gY;
}else if(dr.checked){dt=eA;
ds=undefined;
}else if(dr.hovered){dt=fs;
ds=gY;
}else if(dr.preselected&&dr.focused&&!dr.inner){dt=hi;
ds=gY;
}else if(dr.preselected){dt=hN;
ds=gY;
}else if(dr.focused&&!dr.inner){dt=hU;
ds=undefined;
}else{dt=hv;
ds=undefined;
}return {decorator:dt,textColor:ds,shadow:dr.invalid&&!dr.disabled?gk:undefined};
}},"button-frame/image":{style:function(dm){return {opacity:!dm.replacement&&dm.disabled?0.5:1};
}},"button":{alias:hz,include:hz,style:function(T){return {padding:[2,8],center:true};
}},"hover-button":{alias:hy,include:hy,style:function(ck){return {decorator:ck.hovered?fY:undefined,textColor:ck.hovered?hu:undefined};
}},"splitbutton":{},"splitbutton/button":hv,"splitbutton/arrow":{alias:hv,include:hv,style:function(dl){return {icon:gb,padding:2,marginLeft:1};
}},"checkbox":{alias:hy,style:function(cR){var cT;

if(cR.checked&&cR.focused){cT=gS;
}else if(cR.checked&&cR.disabled){cT=en;
}else if(cR.checked&&cR.pressed){cT=fI;
}else if(cR.checked&&cR.hovered){cT=el;
}else if(cR.checked){cT=gj;
}else if(cR.disabled){cT=dV;
}else if(cR.focused){cT=gr;
}else if(cR.pressed){cT=hn;
}else if(cR.hovered){cT=gl;
}else{cT=eb;
}var cS=cR.invalid&&!cR.disabled?ey:eD;
return {icon:eE+cT+cS+id,gap:6};
}},"radiobutton":{alias:hy,style:function(U){var W;

if(U.checked&&U.focused){W=eN;
}else if(U.checked&&U.disabled){W=es;
}else if(U.checked&&U.pressed){W=gH;
}else if(U.checked&&U.hovered){W=ge;
}else if(U.checked){W=gR;
}else if(U.disabled){W=fx;
}else if(U.focused){W=er;
}else if(U.pressed){W=gF;
}else if(U.hovered){W=ew;
}else{W=he;
}var V=U.invalid&&!U.disabled?ey:eD;
return {icon:eE+W+V+id,gap:6};
}},"textfield":{style:function(bB){var bG;
var bE=!!bB.focused;
var bF=!!bB.invalid;
var bC=!!bB.disabled;

if(bE&&bF&&!bC){bG=fT;
}else if(bE&&!bF&&!bC){bG=hE;
}else if(bC){bG=fV;
}else if(!bE&&bF&&!bC){bG=fX;
}else{bG=fW;
}var bD;

if(bB.disabled){bD=gd;
}else if(bB.showingPlaceholder){bD=fL;
}else{bD=ia;
}return {decorator:bG,padding:[2,4,1],textColor:bD};
}},"textarea":{include:ha,style:function(dn){return {padding:4};
}},"spinner":{style:function(I){var M;
var K=!!I.focused;
var L=!!I.invalid;
var J=!!I.disabled;

if(K&&L&&!J){M=fT;
}else if(K&&!L&&!J){M=hE;
}else if(J){M=fV;
}else if(!K&&L&&!J){M=fX;
}else{M=fW;
}return {decorator:M};
}},"spinner/textfield":{style:function(x){return {marginRight:2,padding:[2,4,1],textColor:x.disabled?gd:ia};
}},"spinner/upbutton":{alias:hz,include:hz,style:function(cs){return {icon:gu,padding:cs.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:hz,include:hz,style:function(c){return {icon:eY,padding:c.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":dY,"datefield/button":{alias:eg,include:eg,style:function(dd){return {icon:gP,padding:[0,3],decorator:undefined};
}},"datefield/textfield":hj,"datefield/list":{alias:fa,include:fa,style:function(bb){return {decorator:undefined};
}},"groupbox":{style:function(ig){return {legendPosition:gE};
}},"groupbox/legend":{alias:hy,style:function(r){return {padding:[1,0,1,4],textColor:r.invalid?gV:ec,font:hs};
}},"groupbox/frame":{style:function(dG){return {padding:12,decorator:gM};
}},"check-groupbox":gc,"check-groupbox/legend":{alias:eb,include:eb,style:function(p){return {padding:[1,0,1,4],textColor:p.invalid?gV:ec,font:hs};
}},"radio-groupbox":gc,"radio-groupbox/legend":{alias:he,include:he,style:function(cK){return {padding:[1,0,1,4],textColor:cK.invalid?gV:ec,font:hs};
}},"scrollarea":{style:function(cx){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(bz){return {backgroundColor:hf};
}},"scrollarea/pane":hx,"scrollarea/scrollbar-x":hI,"scrollarea/scrollbar-y":hI,"scrollbar":{style:function(z){if(z[fB]){return {};
}return {width:z.horizontal?undefined:16,height:z.horizontal?16:undefined,decorator:z.horizontal?fD:hR,padding:1};
}},"scrollbar/slider":{alias:fM,style:function(bA){return {padding:bA.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:hz,style:function(bU){var bV=bU.horizontal?hW:em;

if(bU.disabled){bV+=fC;
}return {decorator:bV,minHeight:bU.horizontal?undefined:9,minWidth:bU.horizontal?9:undefined};
}},"scrollbar/button":{alias:hz,include:hz,style:function(D){var E=ft;

if(D.left){E+=gU;
}else if(D.right){E+=eJ;
}else if(D.up){E+=hP;
}else{E+=fO;
}
if(D.left||D.right){return {padding:[0,0,0,D.left?3:4],icon:E,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:E,width:14,height:15};
}}},"scrollbar/button-begin":ee,"scrollbar/button-end":ee,"slider":{style:function(dx){var dB;
var dz=!!dx.focused;
var dA=!!dx.invalid;
var dy=!!dx.disabled;

if(dz&&dA&&!dy){dB=fT;
}else if(dz&&!dA&&!dy){dB=hE;
}else if(dy){dB=fV;
}else if(!dz&&dA&&!dy){dB=fX;
}else{dB=fW;
}return {decorator:dB};
}},"slider/knob":{include:hz,style:function(du){return {decorator:du.disabled?fv:hW,shadow:undefined,height:14,width:14};
}},"list":{alias:hQ,style:function(bo){var bs;
var bq=!!bo.focused;
var br=!!bo.invalid;
var bp=!!bo.disabled;

if(bq&&br&&!bp){bs=fT;
}else if(bq&&!br&&!bp){bs=hE;
}else if(bp){bs=fV;
}else if(!bq&&br&&!bp){bs=fX;
}else{bs=fW;
}return {backgroundColor:hq,decorator:bs};
}},"list/pane":hx,"listitem":{alias:hy,style:function(de){var df;

if(de.dragover){df=de.selected?hp:hg;
}else{df=de.selected?fY:undefined;
}return {padding:de.dragover?[4,4,2,4]:4,textColor:de.selected?hu:undefined,decorator:df};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:hz,include:hz,style:function(bT){return {padding:5,center:true,icon:bT.vertical?gb:hc};
}},"slidebar/button-backward":{alias:hz,include:hz,style:function(cP){return {padding:5,center:true,icon:cP.vertical?eB:hV};
}},"tabview":{style:function(bf){return {contentPadding:16};
}},"tabview/bar":{alias:fm,style:function(cI){var cJ={marginBottom:cI.barTop?-1:0,marginTop:cI.barBottom?-4:0,marginLeft:cI.barRight?-3:0,marginRight:cI.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(cI.barTop||cI.barBottom){cJ.paddingLeft=5;
cJ.paddingRight=7;
}else{cJ.paddingTop=5;
cJ.paddingBottom=7;
}return cJ;
}},"tabview/bar/button-forward":{include:hY,alias:hY,style:function(C){if(C.barTop||C.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:ff,alias:ff,style:function(i){if(i.barTop||i.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(bN){return {decorator:et,minHeight:100,marginBottom:bN.barBottom?-1:0,marginTop:bN.barTop?-1:0,marginLeft:bN.barLeft?-1:0,marginRight:bN.barRight?-1:0};
}},"tabview-page":hx,"tabview-page/button":{alias:hy,style:function(cz){var cF,cB=0;
var cE=0,cA=0,cC=0,cD=0;

if(cz.checked){if(cz.barTop){cF=fP;
cB=[6,14];
cC=cz.firstTab?0:-5;
cD=cz.lastTab?0:-5;
}else if(cz.barBottom){cF=gv;
cB=[6,14];
cC=cz.firstTab?0:-5;
cD=cz.lastTab?0:-5;
}else if(cz.barRight){cF=eH;
cB=[6,13];
cE=cz.firstTab?0:-5;
cA=cz.lastTab?0:-5;
}else{cF=gf;
cB=[6,13];
cE=cz.firstTab?0:-5;
cA=cz.lastTab?0:-5;
}}else{if(cz.barTop){cF=gn;
cB=[4,10];
cE=4;
cC=cz.firstTab?5:1;
cD=1;
}else if(cz.barBottom){cF=eI;
cB=[4,10];
cA=4;
cC=cz.firstTab?5:1;
cD=1;
}else if(cz.barRight){cF=gN;
cB=[4,10];
cD=5;
cE=cz.firstTab?5:1;
cA=1;
cC=1;
}else{cF=gm;
cB=[4,10];
cC=5;
cE=cz.firstTab?5:1;
cA=1;
cD=1;
}}return {zIndex:cz.checked?10:5,decorator:cF,padding:cB,marginTop:cE,marginBottom:cA,marginLeft:cC,marginRight:cD,textColor:cz.checked?dW:eP};
}},"tabview-page/button/close-button":{alias:hy,style:function(bJ){return {icon:hk};
}},"toolbar":{style:function(h){return {decorator:ej,spacing:2};
}},"toolbar/part":{style:function(bX){return {decorator:gD,spacing:2};
}},"toolbar/part/container":{style:function(bm){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(g){return {source:hT,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:hy,style:function(bh){return {marginTop:2,marginBottom:2,padding:(bh.pressed||bh.checked||bh.hovered)&&!bh.disabled||(bh.disabled&&bh.checked)?3:5,decorator:bh.pressed||(bh.checked&&!bh.hovered)||(bh.checked&&bh.disabled)?gs:bh.hovered&&!bh.disabled?dU:undefined};
}},"toolbar-menubutton":{alias:hG,include:hG,style:function(N){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:ht,include:ht,style:function(dE){return {source:eY};
}},"toolbar-splitbutton":{style:function(ct){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:hG,include:hG,style:function(O){return {icon:gb,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:hG,include:hG,style:function(cX){return {padding:cX.pressed||cX.checked?1:cX.hovered?1:3,icon:gb,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(F){return {decorator:gw,margin:7};
}},"tree":hD,"tree-item":{style:function(dH){return {padding:[2,6],textColor:dH.selected?hu:undefined,decorator:dH.selected?fY:undefined};
}},"tree-item/icon":{include:ht,style:function(bM){return {paddingRight:5};
}},"tree-item/label":hd,"tree-item/open":{include:ht,style:function(cL){var cM;

if(cL.selected&&cL.opened){cM=gQ;
}else if(cL.selected&&!cL.opened){cM=hL;
}else if(cL.opened){cM=fb;
}else{cM=hX;
}return {padding:[0,5,0,2],source:cM};
}},"tree-folder":{include:hA,alias:hA,style:function(bk){var bl;

if(bk.small){bl=bk.opened?ex:eh;
}else if(bk.large){bl=bk.opened?fQ:fh;
}else{bl=bk.opened?gI:fR;
}return {icon:bl};
}},"tree-file":{include:hA,alias:hA,style:function(da){return {icon:da.small?eW:da.large?eo:hM};
}},"treevirtual":eC,"treevirtual-folder":{style:function(bI){return {icon:bI.opened?ex:eh};
}},"treevirtual-file":{include:fd,alias:fd,style:function(cY){return {icon:eW};
}},"treevirtual-line":{style:function(cw){return {icon:ed};
}},"treevirtual-contract":{style:function(k){return {icon:fb,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(d){return {icon:hX,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":hB,"treevirtual-only-expand":hb,"treevirtual-start-contract":hB,"treevirtual-start-expand":hb,"treevirtual-end-contract":hB,"treevirtual-end-expand":hb,"treevirtual-cross-contract":hB,"treevirtual-cross-expand":hb,"treevirtual-end":{style:function(cv){return {icon:ed};
}},"treevirtual-cross":{style:function(dD){return {icon:ed};
}},"tooltip":{include:hF,style:function(dw){return {backgroundColor:fu,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":hy,"tooltip-error":{include:hC,style:function(cr){return {textColor:hu,placeMethod:hx,offset:[0,0,0,14],marginTop:-2,position:ea,showTimeout:100,hideTimeout:10000,decorator:eT,shadow:fn,font:hs};
}},"tooltip-error/atom":hy,"window":{style:function(bO){return {shadow:eL,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(dg){return {decorator:gh};
}},"window/captionbar":{style:function(Y){return {decorator:Y.active?dO:gz,textColor:Y.active?gW:eR,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(j){return {margin:[5,0,3,6]};
}},"window/title":{style:function(ba){return {alignY:hr,font:hs,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:hy,style:function(dk){return {icon:dk.active?dk.hovered?gi:gK:gO,margin:[4,8,2,0]};
}},"window/restore-button":{alias:hy,style:function(dF){return {icon:dF.active?dF.hovered?eM:ep:gL,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:hy,style:function(o){return {icon:o.active?o.hovered?ez:fS:hh,margin:[4,8,2,0]};
}},"window/close-button":{alias:hy,style:function(dJ){return {icon:dJ.active?dJ.hovered?hl:fA:fJ,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(be){return {padding:[2,6],decorator:eS,minHeight:18};
}},"window/statusbar-text":{style:function(cq){return {font:eu};
}},"iframe":{style:function(cc){return {decorator:hw};
}},"resizer":{style:function(bj){return {decorator:fG};
}},"splitpane":{style:function(ce){return {decorator:gT};
}},"splitpane/splitter":{style:function(cG){return {width:cG.horizontal?3:undefined,height:cG.vertical?3:undefined,backgroundColor:ie};
}},"splitpane/splitter/knob":{style:function(co){return {source:co.horizontal?gq:gC};
}},"splitpane/slider":{style:function(dL){return {width:dL.horizontal?3:undefined,height:dL.vertical?3:undefined,backgroundColor:ie};
}},"selectbox":{alias:hz,include:hz,style:function(dM){return {padding:[2,8]};
}},"selectbox/atom":hy,"selectbox/popup":hF,"selectbox/list":{alias:hD},"selectbox/arrow":{include:ht,style:function(P){return {source:gb,paddingLeft:5};
}},"datechooser":{style:function(s){var w;
var u=!!s.focused;
var v=!!s.invalid;
var t=!!s.disabled;

if(u&&v&&!t){w=fT;
}else if(u&&!v&&!t){w=hE;
}else if(t){w=fV;
}else if(!u&&v&&!t){w=fX;
}else{w=fW;
}return {padding:2,decorator:w,backgroundColor:hq};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:hz,alias:hz,style:function(dp){var dq={padding:[2,4],shadow:undefined};

if(dp.lastYear){dq.icon=gx;
dq.marginRight=1;
}else if(dp.lastMonth){dq.icon=hV;
}else if(dp.nextYear){dq.icon=dQ;
dq.marginLeft=1;
}else if(dp.nextMonth){dq.icon=hc;
}return dq;
}},"datechooser/last-year-button-tooltip":hC,"datechooser/last-month-button-tooltip":hC,"datechooser/next-year-button-tooltip":hC,"datechooser/next-month-button-tooltip":hC,"datechooser/last-year-button":hJ,"datechooser/last-month-button":hJ,"datechooser/next-month-button":hJ,"datechooser/next-year-button":hJ,"datechooser/month-year-label":{style:function(cf){return {font:hs,textAlign:gX,textColor:cf.disabled?gd:undefined};
}},"datechooser/date-pane":{style:function(bg){return {textColor:bg.disabled?gd:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(bc){return {textColor:bc.disabled?gd:bc.weekend?ic:undefined,textAlign:gX,paddingTop:2,backgroundColor:eX};
}},"datechooser/week":{style:function(dN){return {textAlign:gX,padding:[2,4],backgroundColor:eX};
}},"datechooser/day":{style:function(q){return {textAlign:gX,decorator:q.disabled?undefined:q.selected?fY:undefined,textColor:q.disabled?gd:q.selected?hu:q.otherMonth?ic:undefined,font:q.today?hs:undefined,padding:[2,4]};
}},"combobox":{style:function(bt){var bx;
var bv=!!bt.focused;
var bw=!!bt.invalid;
var bu=!!bt.disabled;

if(bv&&bw&&!bu){bx=fT;
}else if(bv&&!bw&&!bu){bx=hE;
}else if(bu){bx=fV;
}else if(!bv&&bw&&!bu){bx=fX;
}else{bx=fW;
}return {decorator:bx};
}},"combobox/popup":hF,"combobox/list":{alias:hD},"combobox/button":{include:hz,alias:hz,style:function(bY){var ca={icon:gb,padding:2};

if(bY.selected){ca.decorator=hU;
}return ca;
}},"combobox/textfield":{include:ha,style:function(y){return {decorator:undefined};
}},"menu":{style:function(cV){var cW={decorator:fl,shadow:fe,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:cV.submenu||cV.contextmenu?hK:fN};

if(cV.submenu){cW.position=ea;
cW.offset=[-2,-3];
}return cW;
}},"menu/slidebar":gt,"menu-slidebar":hx,"menu-slidebar-button":{style:function(cn){return {decorator:cn.hovered?fY:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:ib,style:function(cH){return {icon:cH.hovered?gJ:eB};
}},"menu-slidebar/button-forward":{include:ib,style:function(f){return {icon:f.hovered?eV:gb};
}},"menu-separator":{style:function(a){return {height:0,decorator:fF,margin:[4,2]};
}},"menu-button":{alias:hy,style:function(bS){return {decorator:bS.selected?fY:undefined,textColor:bS.selected?hu:undefined,padding:[4,6]};
}},"menu-button/icon":{include:ht,style:function(cy){return {alignY:hr};
}},"menu-button/label":{include:hd,style:function(B){return {alignY:hr,padding:1};
}},"menu-button/shortcut":{include:hd,style:function(cg){return {alignY:hr,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:ht,style:function(ci){return {source:ci.selected?fH:hc,alignY:hr};
}},"menu-checkbox":{alias:fU,include:fU,style:function(bn){return {icon:!bn.checked?undefined:bn.selected?hS:eU};
}},"menu-radiobutton":{alias:fU,include:fU,style:function(dh){return {icon:!dh.checked?undefined:dh.selected?eQ:dR};
}},"menubar":{style:function(dC){return {decorator:gp};
}},"menubar-button":{alias:hy,style:function(cU){return {decorator:cU.pressed||cU.hovered?fY:undefined,textColor:cU.pressed||cU.hovered?hu:undefined,padding:[3,8]};
}},"colorselector":hx,"colorselector/control-bar":hx,"colorselector/control-pane":hx,"colorselector/visual-pane":gc,"colorselector/preset-grid":hx,"colorselector/colorbucket":{style:function(di){return {decorator:hw,width:16,height:16};
}},"colorselector/preset-field-set":gc,"colorselector/input-field-set":gc,"colorselector/preview-field-set":gc,"colorselector/hex-field-composite":hx,"colorselector/hex-field":ha,"colorselector/rgb-spinner-composite":hx,"colorselector/rgb-spinner-red":hH,"colorselector/rgb-spinner-green":hH,"colorselector/rgb-spinner-blue":hH,"colorselector/hsb-spinner-composite":hx,"colorselector/hsb-spinner-hue":hH,"colorselector/hsb-spinner-saturation":hH,"colorselector/hsb-spinner-brightness":hH,"colorselector/preview-content-old":{style:function(cO){return {decorator:hw,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(cp){return {decorator:hw,backgroundColor:hq,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(bQ){return {decorator:hw,margin:5};
}},"colorselector/brightness-field":{style:function(e){return {decorator:hw,margin:[5,7]};
}},"colorselector/hue-saturation-pane":hx,"colorselector/hue-saturation-handle":hx,"colorselector/brightness-pane":hx,"colorselector/brightness-handle":hx,"colorpopup":{alias:hF,include:hF,style:function(m){return {padding:5,backgroundColor:hf};
}},"colorpopup/field":{style:function(dI){return {decorator:hw,margin:2,width:14,height:14,backgroundColor:hq};
}},"colorpopup/selector-button":hv,"colorpopup/auto-button":hv,"colorpopup/preview-pane":gc,"colorpopup/current-preview":{style:function(b){return {height:20,padding:4,marginLeft:4,decorator:hw,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(bW){return {height:20,padding:4,marginRight:4,decorator:hw,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:hv,include:hv,style:function(l){return {icon:gg};
}},"colorpopup/colorselector-cancelbutton":{alias:hv,include:hv,style:function(cb){return {icon:go};
}},"table":{alias:hx,style:function(n){return {decorator:eC};
}},"table-header":{},"table/statusbar":{style:function(S){return {decorator:gG,padding:[0,2]};
}},"table/column-button":{alias:hz,style:function(cQ){return {decorator:eK,padding:3,icon:dS};
}},"table-column-reset-button":{include:fU,alias:fU,style:function(){return {icon:fK};
}},"table-scroller":hx,"table-scroller/scrollbar-x":hI,"table-scroller/scrollbar-y":hI,"table-scroller/header":{style:function(db){return {decorator:fw};
}},"table-scroller/pane":{style:function(bd){return {backgroundColor:fz};
}},"table-scroller/focus-indicator":{style:function(dc){return {decorator:fo};
}},"table-scroller/resize-line":{style:function(A){return {backgroundColor:ho,width:2};
}},"table-header-cell":{alias:hy,style:function(bi){return {minWidth:13,minHeight:20,padding:bi.hovered?[3,4,2,4]:[3,4],decorator:bi.hovered?eG:fk,sortIcon:bi.sorted?(bi.sortedAscending?eF:dP):undefined};
}},"table-header-cell/label":{style:function(cd){return {minWidth:0,alignY:hr,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(Q){return {alignY:hr,alignX:ef};
}},"table-header-cell/icon":{style:function(cm){return {minWidth:0,alignY:hr,paddingRight:5};
}},"table-editor-textfield":{include:ha,style:function(R){return {decorator:undefined,padding:[2,2],backgroundColor:hq};
}},"table-editor-selectbox":{include:fg,alias:fg,style:function(bL){return {padding:[0,2],backgroundColor:hq};
}},"table-editor-combobox":{include:dY,alias:dY,style:function(cl){return {decorator:undefined,backgroundColor:hq};
}},"progressive-table-header":{alias:hx,style:function(cj){return {decorator:dT};
}},"progressive-table-header-cell":{alias:hy,style:function(X){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:fE};
}},"app-header":{style:function(by){return {font:hs,textColor:hu,padding:[8,12],decorator:fq};
}},"virtual-list":hD,"virtual-list/row-layer":fr,"row-layer":{style:function(bK){return {colorEven:gW,colorOdd:gA};
}},"column-layer":hx,"cell":{style:function(cN){return {textColor:cN.selected?hu:ei,padding:[3,6],font:fc};
}},"cell-string":ga,"cell-number":{include:ga,style:function(dv){return {textAlign:ef};
}},"cell-image":ga,"cell-boolean":{include:ga,style:function(dj){return {iconTrue:fj,iconFalse:eq};
}},"cell-atom":ga,"cell-date":ga,"cell-html":ga,"htmlarea":{"include":hx,style:function(ch){return {backgroundColor:gW};
}}}});
})();
(function(){var t="contextmenu",s="help",r="qx.client",q="changeGlobalCursor",p="abstract",o="Boolean",n="root",m="",l=" !important",k="_applyGlobalCursor",h="_applyNativeHelp",j=";",i="qx.ui.root.Abstract",g="String",f="*";
qx.Class.define(i,{type:p,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:n},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:g,nullable:true,themeable:true,apply:k,event:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:o,init:false,apply:h}},members:{__vQ:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(r,{"mshtml":function(A,B){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__vQ;

if(!z){this.__vQ=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,f,qx.bom.element.Cursor.compile(w).replace(j,m)+l);
}}}),_applyNativeContextMenu:function(u,v){if(u){this.removeListener(t,this._onNativeContextMenu,this,true);
}else{this.addListener(t,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(r,{"mshtml":function(c,d){if(d===false){qx.bom.Event.removeNativeListener(document,s,qx.lang.Function.returnFalse);
}
if(c===false){qx.bom.Event.addNativeListener(document,s,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__vQ=null;
},defer:function(a,b){qx.ui.core.MChildrenHandling.remap(b);
}});
})();
(function(){var w="relative",v="resize",u="height",t="mshtml",s="",r="px",q="position",p="qx.ui.root.Inline",o="$$widget",n="hidden",k="qx.client",m="div",l="left";
qx.Class.define(p,{extend:qx.ui.root.Abstract,include:[qx.ui.core.MLayoutHandling],construct:function(x,y,z){this.__ud=x;
x.style.overflow=n;
x.style.textAlign=l;
this.__ue=y||false;
this.__uf=z||false;
this.__ug();
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Basic());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
},members:{__ue:false,__uf:false,__ud:null,__ug:function(){if(this.__ue||this.__uf){var h=qx.bom.element.Dimension.getSize(this.__ud);

if(this.__ue&&h.width<1){throw new Error("The root element "+this.__ud+" of "+this+" needs a width when its width size should be used!");
}
if(this.__uf){if(h.height<1){throw new Error("The root element "+this.__ud+" of "+this+" needs a height when its height size should be used!");
}if(h.height>=1&&qx.bom.element.Style.get(this.__ud,u,3)==s){qx.bom.element.Style.set(this.__ud,u,h.height+r);
}}qx.event.Registration.addListener(this.__ud,v,this._onResize,this);
}},_createContainerElement:function(){var B=this.__ud;

if(this.__ue||this.__uf){var F=document.createElement(m);
B.appendChild(F);
if(qx.core.Variant.isSet(k,t)&&qx.bom.client.Engine.VERSION==6){var E=qx.dom.Node.getBodyElement(B);
var D;
var H;
var G=false;
var C=qx.dom.Hierarchy.getAncestors(B);

for(var i=0,j=C.length;i<j;i++){D=C[i];

if(D!=E){H=qx.bom.element.Style.get(D,q);

if(H==w){G=true;
break;
}}else{break;
}}
if(G){B.style.position=w;
}}}else{F=B;
}var I=new qx.html.Root(F);
F.style.position=w;
I.setAttribute(o,this.toHashCode());
return I;
},_onResize:function(e){var A=e.getData();

if((A.oldWidth!==A.width)&&this.__ue||(A.oldHeight!==A.height)&&this.__uf){qx.ui.core.queue.Layout.add(this);
}},_computeSizeHint:function(){var f=this.__ue;
var b=this.__uf;

if(!f||!b){var a=arguments.callee.base.call(this);
}else{a={};
}var g=qx.bom.element.Dimension;

if(f){var d=g.getContentWidth(this.__ud);
a.width=d;
a.minWidth=d;
a.maxWidth=d;
}
if(b){var c=g.getContentHeight(this.__ud);
a.height=c;
a.minHeight=c;
a.maxHeight=c;
}return a;
}},defer:function(J,K){qx.ui.core.MLayoutHandling.remap(K);
},destruct:function(){qx.event.Registration.removeListener(this.__ud,v,this._onResize,this);
this.__ud=null;
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var c="abstract",b="qx.application.AbstractGui";
qx.Class.define(b,{type:c,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__uO:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__uO;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__uO=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(a){},terminate:function(){}},destruct:function(){this.__uO=null;
}});
})();
(function(){var a="qx.application.Inline";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Page(document);
}}});
})();
(function(){var o="div",n="resize",m="qx.ui.root.Page",l="gecko",k="paddingLeft",j="$$widget",i="qx.client",h="left",g="paddingTop",f="qxIsRootPage",d="absolute";
qx.Class.define(m,{extend:qx.ui.root.Abstract,construct:function(v){this.__uh=v;
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Basic());
this.setZIndex(10000);
qx.ui.core.queue.Layout.add(this);
this.addListener(n,this.__uj,this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
},members:{__ui:null,__uh:null,_createContainerElement:function(){var q=this.__uh.createElement(o);
this.__uh.body.appendChild(q);
var p=new qx.html.Root(q);
p.setStyles({position:d,textAlign:h});
p.setAttribute(j,this.toHashCode());
if(qx.core.Variant.isSet(i,l)){p.setAttribute(f,1);
}return p;
},_createContentElement:function(){return new qx.html.Element(o);
},_computeSizeHint:function(){var r=qx.bom.Document.getWidth(this._window);
var s=qx.bom.Document.getHeight(this._window);
return {minWidth:r,width:r,maxWidth:r,minHeight:s,height:s,maxHeight:s};
},__uj:function(e){this.getContainerElement().setStyles({width:0,height:0});
this.getContentElement().setStyles({width:0,height:0});
},supportsMaximize:function(){return false;
},_applyPadding:function(t,u,name){if(t&&(name==g||name==k)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,t,u,name);
},_applyDecorator:function(a,b){arguments.callee.base.call(this,a,b);

if(!a){return;
}var c=this.getDecoratorElement().getInsets();

if(c.left||c.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__uh=null;
}});
})();
(function(){var g="modern-display",f="bold",e="window",d="showcase.page.theme.calc.theme.appearance.Modern",c="main",b="button";
qx.Theme.define(d,{appearances:{"modern-calculator":e,"modern-calculator-button":b,"modern-display":{style:function(i){return {decorator:c,height:40,padding:3,marginBottom:10};
}},"modern-display/label":{style:function(a){return {font:f,marginLeft:5};
}},"modern-display/memory":{style:function(j){return {marginLeft:5};
}},"modern-display/operation":{style:function(h){return {marginLeft:50};
}},"modern-calculator/display":g}});
})();
(function(){var n="solid",m="white",l="listitem",k="black",j="widget",i="preview-list/scrollbar-x/button",h="shadow-window",g="text-title",f="#F3FFD1",e="showcase/images/headerback.png",H="sans-serif",G="scale",F="showcase/images/contentbackground.gif",E="Trebuchet MS",D="#444444",C="#134275",B="pointer",A="legend",z="repeat-y",y="group",u="text-label",v="Lucida Grande",s="showcase/images/tag-hor.png",t="top",q="invalid",r="default",o="Verdana",p="label",w="showcase.theme.Appearance",x="atom";
qx.Theme.define(w,{extend:qx.theme.modern.Appearance,include:[showcase.page.theme.calc.theme.appearance.Black,showcase.page.theme.calc.theme.appearance.Modern],appearances:{"root":{style:function(d){return {backgroundColor:m,textColor:u,font:r};
}},"page-preview":{alias:l,include:l,style:function(O){return {iconPosition:t,padding:[-10,-6,8,-6],gap:-20,decorator:null,cursor:B};
}},"page-preview/label":{include:p,style:function(c){return {textColor:c.selected?D:f,padding:[6,15],height:35,decorator:c.selected?y:null,font:qx.bom.Font.fromConfig({size:20,family:[E,v,o,H]}),zIndex:50};
}},"preview-list":{style:function(M){return {backgroundColor:C,decorator:new qx.ui.decoration.Single().set({bottom:[1,n,k],backgroundImage:e,backgroundRepeat:G}),shadow:h,zIndex:111,padding:5};
}},"preview-list/scrollbar-x/slider":j,"preview-list/scrollbar-x":j,"preview-list/scrollbar-x/button":{style:function(K){return {width:0,height:0};
}},"preview-list/scrollbar-x/button-begin":i,"preview-list/scrollbar-x/button-end":i,"preview-list/scrollbar-x/slider/knob":{style:function(a){return {decorator:new qx.ui.decoration.HBox(s),opacity:qx.bom.client.Engine.MSHTML?1:(a.hovered?1:0.6),height:12};
}},"separator":{style:function(N){return {backgroundColor:k,decorator:new qx.ui.decoration.Single().set({top:[1,n,m],bottom:[1,n,m]}),height:7};
}},"stack":{style:function(I){return {marginTop:qx.bom.client.Feature.CSS_POINTER_EVENTS?0:8};
}},"content-container":{style:function(b){return {padding:0};
}},"description":{style:function(L){return {width:300,zIndex:122,shadow:h,padding:7,decorator:new qx.ui.decoration.Background().set({backgroundImage:F,backgroundRepeat:z})};
}},"groupbox/legend":{alias:x,style:function(J){return {padding:[1,0,1,4],textColor:J.invalid?q:g,font:A};
}}}});
})();
(function(){var j="qx.ui.layout.Basic";
qx.Class.define(j,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(k,m){var q=this._getLayoutChildren();
var n,p,o,r,top;
for(var i=0,l=q.length;i<l;i++){n=q[i];
p=n.getSizeHint();
o=n.getLayoutProperties();
r=(o.left||0)+n.getMarginLeft();
top=(o.top||0)+n.getMarginTop();
n.renderLayout(r,top,p.width,p.height);
}},_computeSizeHint:function(){var f=this._getLayoutChildren();
var c,h,d;
var g=0,e=0;
var a,b;
for(var i=0,l=f.length;i<l;i++){c=f[i];
h=c.getSizeHint();
d=c.getLayoutProperties();
a=h.width+(d.left||0)+c.getMarginLeft()+c.getMarginRight();
b=h.height+(d.top||0)+c.getMarginTop()+c.getMarginBottom();

if(a>g){g=a;
}
if(b>e){e=b;
}}return {width:g,height:e};
}}});
})();
(function(){var j="Table",i="qx.ui.table.Table",h="Column auto sizing",g="Table with 10000 rows and 50 columns",f="Filtered Table Model",e="in that the table data can be of any length (e.g. hundreds of thousands",d="The table is a very powerful widget. It is “virtual” ",c="Custom cell renderers like the boolean cell renderer can be configured.",b="Click on the column header to sort the column.",a="Table with a fixed first column",E="Windowed cell editor",D="Table selection modes",C="table",B="showcase.page.table.Page",A="Cell editors",z="Remote table model",y="Custom header renderers as shown in the “Explicit” column can be used.",x="Drag the column header to reorder.",w=" rendered. The data you currently see is fetched from a ",v="Conditional cell renderer",q="<a href='http://developer.yahoo.com/yql/' target='_blank'>YQL</a> ",r="Basic table",o=" of rows or more) yet only the rows which are actually being viewed are",p="Use the column drop-down menu in the upper right corner.",m="Drag the column header separator to resize the columns.",n="showcase/table/icon.png",k="service so it's always up to date.",l="Table events",s="Column context menus",t="showcase.page.table.Content",u="Resize the window to see the table resize.";
qx.Class.define(B,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:j,part:C,icon:n,contentClass:t,description:showcase.page.DescriptionBuilder.build(j,this.__ul,this.__um,this.__un,this.__uo,this.__up,this.__uq)});
},members:{__ul:d+e+o+w+q+k,__um:{"Sorting":b,"Reordering":x,"Column Resizing":m,"Hide Columns":p,"Table Resize":u},__un:{"Cell Renderer":c,"Header Renderer":y},__uo:{"remote_table_model":z},__up:{"#table~Table.html":r,"#table~Table_Cell_Editor.html":A,"#table~Table_Conditional.html":v,"#table~Table_Context_Menu.html":s,"#table~Table_Events.html":l,"#table~Table_Filtered_Model.html":f,"#table~Table_Huge.html":g,"#table~Table_Meta_Columns.html":a,"#table~Table_Resize_Columns.html":h,"#table~Table_Selection.html":D,"#table~Table_Window_Editor.html":E},__uq:{"#qx.ui.table.Table":i}}});
})();
(function(){var p="Drag &amp; Drop",o="Drag event in the Widget",n="showcase.page.dragdrop.Page",m="You can also move items back to the shop.",l="right displays the shopping cart. The main idea of this demo is to ",k="Drag &amp; Drop with lists",j="showcase/dragdrop/icon.png",i="You can reorder both lists.",h="Drag &amp; Drop Cursor",g="Drag & Drop",c="dragdrop",f="showcase.page.dragdrop.Content",e="illustrate the drag & drop feature.",b="The list on the left contains all available items while the list on the ",a="Try moving an item to the cart.",d="These two list widgets simulate a shopping system. ";
qx.Class.define(n,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:g,part:c,icon:j,contentClass:f,description:showcase.page.DescriptionBuilder.build(p,this.__ur,this.__us,this.__ut,this.__uu,this.__uv,this.__uw)});
},members:{__ur:d+b+l+e,__us:{"Drag":a,"Reorder":i,"Move":m},__ut:null,__uu:{"ui_dragdrop":p},__uv:{"#ui~DragDrop.html":k},__uw:{"#qx.ui.core.Widget~drag":o,"#qx.ui.core.DragDropCursor":h}}});
})();
(function(){var j="qx.io.PartLoader",h="__uG",g="load",f="__uF",d="partLoaded",c="singleton",b="qx.event.type.Data";
qx.Class.define(j,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__uF=[];
var o=this._getUris();

for(var i=0;i<o.length;i++){this.__uF.push(new qx.io.part.Package(o[i],i,i==0));
}this.__uG={};
var l=qx.$$loader.parts;

for(var name in l){var k=l[name];
var n=[];

for(var i=0;i<k.length;i++){n.push(this.__uF[k[i]]);
}var m=new qx.io.part.Part(name,n);
m.addListener(g,function(e){this.fireDataEvent(d,e.getTarget());
},this);
this.__uG[name]=m;
}},events:{"partLoaded":b},statics:{require:function(p,q,self){this.getInstance().require(p,q,self);
}},members:{require:function(t,u,self){var u=u||function(){};
var self=self||window;

if(qx.lang.Type.isString(t)){t=[t];
}var x=[];

for(var i=0;i<t.length;i++){x.push(this.getPart(t[i]));
}var w=0;
var v=function(){w+=1;

if(w>=x.length){u.call(self);
}};

for(var i=0;i<x.length;i++){x[i].load(v,this);
}},__uF:null,__uG:null,getPart:function(name){var a=this.__uG[name];

if(!a){throw new Error("No such part: "+name);
}return a;
},_getUris:function(){var r=qx.$$loader.uris;
var s=[];

for(var i=0;i<r.length;i++){s.push(this._decodeUris(r[i]));
}return s;
},_decodeUris:qx.$$loader.decodeUris},destruct:function(){this._disposeObjects(h,f);
}});
})();
(function(){var j="Internationalization",i="files, as defined by GNU <em>gettext</em> tools. Many ",h="showcase/i18n/icon.png",g="showcase.page.i18n.Page",f="i18n",e="Localization demo",d="the language. All labels on the page will be translated, including ",c=" locales in its user interface. qooxdoo has full translation support ",b="labels in standard qooxdoo widgets like the calendar.",a="keyboard shortcuts are localized.",z="open source tools can process those translation files.",y="Languages",x="changing the country code from <em>United States</em> to ",w='Internationalization (or \"I18N\" for short) is all about making',v="The first select box on the left lets you change the country code. ",u="qx.locale.*",t="showcase.page.i18n.Content",s="The command menu button in the lower left opens a popup menu. Even the ",r="and comprises locale information of virtually every country in the world.",q="<em>Great Britain</em>. You will see that e.g. the start of the week ",o="changes from Sunday to Monday.",p="Translation data is extracted into standard <em>.po</em> ",m="The country code defines things like date or number formats. Try ",n=" a system support different natural languages and",k="All widgets are designed in a way that allows for locale switching in the running application.",l="Hit one of the flag buttons on the top to change ";
qx.Class.define(g,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:y,part:f,icon:h,contentClass:t,description:showcase.page.DescriptionBuilder.build(j,this.__uH,this.__uI,this.__uJ,this.__uK,this.__uL,this.__uM)});
},members:{__uH:w+n+c+r,__uI:{"Change the language":l+d+b,"Change the country":v+m+x+q+o,"Open the command menu":s+a},__uJ:{"Standards based translation":p+i+z,"CLDR":"Localisation data like date and time formats are taken from the "+"<a href='http://cldr.unicode.org/'>Unicode Common Locale Data Repository</a> (CLDR). This "+"guarantees that qooxdoo uses the standardized data for even the smallest "+"countries.","Live locale switching":k},__uK:{"internationalization":j},__uL:{"#showcase~Localization.html":e},__uM:{"#qx.locale":u}}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(d){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(c){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var n="_applyDynamic",m="changeSelection",k="Boolean",j="qx.ui.container.Stack";
qx.Class.define(j,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(m,this.__uN,this);
},properties:{dynamic:{check:k,init:false,apply:n}},members:{_applyDynamic:function(t){var v=this._getChildren();
var u=this.getSelection()[0];
var w;

for(var i=0,l=v.length;i<l;i++){w=v[i];

if(w!=u){if(t){v[i].exclude();
}else{v[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(h){return h.isEnabled();
},__uN:function(e){var q=e.getOldData()[0];
var r=e.getData()[0];

if(q){if(this.isDynamic()){q.exclude();
}else{q.hide();
}}
if(r){r.show();
}},add:function(f){this._add(f);
var g=this.getSelection()[0];

if(!g){this.setSelection([f]);
}else if(g!==f){if(this.isDynamic()){f.exclude();
}else{f.hide();
}}},remove:function(o){this._remove(o);

if(this.getSelection()[0]===o){var p=this._getChildren()[0];

if(p){this.setSelection([p]);
}else{this.resetSelection();
}}},indexOf:function(s){return this._indexOf(s);
},getChildren:function(){return this._getChildren();
},previous:function(){var c=this.getSelection()[0];
var a=this._indexOf(c)-1;
var d=this._getChildren();

if(a<0){a=d.length-1;
}var b=d[a];
this.setSelection([b]);
},next:function(){var y=this.getSelection()[0];
var x=this._indexOf(y)+1;
var z=this._getChildren();
var A=z[x]||z[0];
this.setSelection([A]);
}}});
})();
(function(){var H="px",G="no-repeat",F="0",E="-1px",D="-c",C="mshtml",B="horizontal",A="",z="qx.ui.decoration.AbstractBox",y="-l",r='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',x='</div>',u="_applyBaseImage",p="-b",o="-t",t="repeat-x",s="repeat-y",v="abstract",n="-r",w="String",q="qx.client";
qx.Class.define(z,{extend:qx.ui.decoration.Abstract,type:v,construct:function(O,P){arguments.callee.base.call(this);
if(O!=null){this.setBaseImage(O);
}
if(P!=null){this.setInsets(P);
}},properties:{baseImage:{check:w,nullable:true,apply:u}},members:{__vR:null,__vS:null,__vT:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__vR;
},_setOrientation:function(Q){this._isHorizontal=Q==B;
},getMarkup:function(){if(this.__vR){return this.__vR;
}var a=qx.bom.element.Decoration;
var b=this.__vS;
var c=this.__vT;
var d=[];
d.push(r);

if(this._isHorizontal){d.push(a.create(b.l,G,{top:0,left:0}));
d.push(a.create(b.c,t,{top:0,left:c.left+H}));
d.push(a.create(b.r,G,{top:0,right:0}));
}else{d.push(a.create(b.t,G,{top:0,left:0}));
d.push(a.create(b.c,s,{top:c.top+H,left:c.left+H}));
d.push(a.create(b.b,G,{bottom:0,left:0}));
}d.push(x);
return this.__vR=d.join(A);
},resize:function(K,L,M){K.style.width=L+H;
K.style.height=M+H;
var N=this.__vT;

if(this._isHorizontal){var innerWidth=L-N.left-N.right;
K.childNodes[1].style.width=innerWidth+H;
}else{var innerHeight=M-N.top-N.bottom;
K.childNodes[1].style.height=innerHeight+H;
}
if(qx.core.Variant.isSet(q,C)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(this._isHorizontal){K.childNodes[2].style.marginRight=(L%2==1)?E:F;
}else{K.childNodes[2].style.marginBottom=(M%2==1)?E:F;
}}}},tint:function(I,J){},_applyBaseImage:function(e,f){{};
var g=qx.util.ResourceManager.getInstance();

if(e){var i=qx.util.AliasManager.getInstance();
var k=i.resolve(e);
var l=/(.*)(\.[a-z]+)$/.exec(k);
var j=l[1];
var h=l[2];
var m=this.__vS={t:j+o+h,b:j+p+h,c:j+D+h,l:j+y+h,r:j+n+h};
this.__vT={top:g.getImageHeight(m.t),bottom:g.getImageHeight(m.b),left:g.getImageWidth(m.l),right:g.getImageWidth(m.r)};
}}},destruct:function(){this.__vR=this.__vS=this.__vT=null;
}});
})();
(function(){var b="horizontal",a="qx.ui.decoration.HBox";
qx.Class.define(a,{extend:qx.ui.decoration.AbstractBox,construct:function(c,d){arguments.callee.base.call(this,c,d);
this._setOrientation(b);
}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var e="qx.fx.queue.Queue",d="Number";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__uS=[];
},properties:{limit:{init:Infinity,check:d}},members:{__uT:null,__uS:null,add:function(b){var c=new Date().getTime();
b._startOn+=c;
b._finishOn+=c;

if(this.__uS.length<this.getLimit()){this.__uS.push(b);
}else{b.resetState();
}
if(!this.__uT){this.__uT=qx.lang.Function.periodical(this.loop,15,this);
}},remove:function(a){qx.lang.Array.remove(this.__uS,a);

if(this.__uS.length==0){window.clearInterval(this.__uT);
delete this.__uT;
}},loop:function(){var f=new Date().getTime();

for(var i=0,g=this.__uS.length;i<g;i++){this.__uS[i]&&this.__uS[i].loop(f);
}}},destruct:function(){this.__uS=null;
}});
})();
(function(){var e="__default",d="qx.fx.queue.Manager",c="__uU",b="singleton",a="object";
qx.Class.define(d,{extend:qx.core.Object,type:b,construct:function(){arguments.callee.base.call(this);
this.__uU={};
},members:{__uU:null,getQueue:function(f){if(typeof (this.__uU[f])==a){return this.__uU[f];
}else{return this.__uU[f]=new qx.fx.queue.Queue;
}},getDefaultQueue:function(){return this.getQueue(e);
}},destruct:function(){this._disposeMap(c);
}});
})();
(function(){var g="Number",f="static",e="qx.fx.Transition";
qx.Class.define(e,{type:f,statics:{get:function(h){return qx.fx.Transition[h]||false;
},linear:function(c){return c;
},easeInQuad:function(k){return Math.pow(2,10*(k-1));
},easeOutQuad:function(m){return (-Math.pow(2,-10*m)+1);
},sinodial:function(l){return (-Math.cos(l*Math.PI)/2)+0.5;
},reverse:function(n){return 1-n;
},flicker:function(i){var i=((-Math.cos(i*Math.PI)/4)+0.75)+Math.random()/4;
return i>1?1:i;
},wobble:function(j){return (-Math.cos(j*Math.PI*(9*j))/2)+0.5;
},pulse:function(a,b){b=(typeof (b)==g)?b:5;
return (Math.round((a%(1/b))*b)==0?Math.floor((a*b*2)-(a*b*2)):1-Math.floor((a*b*2)-(a*b*2)));
},spring:function(p){return 1-(Math.cos(p*4.5*Math.PI)*Math.exp(-p*6));
},none:function(d){return 0;
},full:function(o){return 1;
}}});
})();
(function(){var j="Data Binding",i="Form Binding Demo",h="The data is loaded from twitter in real time via JSONP.",g="binding. The demo fetches the data and binds the result to the list. ",f="JSONP Data Store",e="Main Data Binding API Documentation",d="showcase/databinding/icon.png",c="Single Value Binding Demo",b="Clicking a tweet in the list shows the details.",a="showcase.page.databinding.Content",B="Enter your twitter username in the text field and press \"Show\" to see your recent tweets.",A="showcase.page.databinding.Page",z="Flickr Foto Search",y="Controller",x="Twitter offers a REST / JSONP API, making it a perfect match for data ",w="Data Stores",v="data",u="The twitter demo illustrates the use of data binding. ",t="Tree Binding Demo",s="Data Binding Concepts",q="The friends button displays the list of followers (Requires credentials).",r="A binding connects the model to the list view.",o="List Binding Demo",p="List Controller",m="Clicking on a tweet will invoke a second binding which displays the ",n="Object Controller",k="selected tweet in the detail view right beside the list.",l="Fundamental Layer";
qx.Class.define(A,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:j,part:v,icon:d,contentClass:a,description:showcase.page.DescriptionBuilder.build(j,this.__uV,this.__uW,this.__uX,this.__uY,this.__va,this.__vb)});
},members:{__uV:u+x+g+m+k,__uW:{"Detail View":b,"Friends":q,"Change Tweet":B},__uX:{"Loading Data":h,"Binding":r},__uY:{"data_binding":s,"data_binding/single_value_binding":l,"data_binding/controller":y,"data_binding/stores":w},__va:{"#data~SingleValueBinding.html":c,"#data~ListControllerWith3Widgets.html":o,"#data~TreeController.html":t,"#data~FormController.html":i,"#data~Flickr.html":z},__vb:{"#qx.data":e,"#qx.data.store.Jsonp":f,"#qx.data.controller.List":p,"#qx.data.controller.Object":n}}});
})();
(function(){var A="focusout",z="interval",y="mouseover",x="mouseout",w="mousemove",v="widget",u="qx.ui.tooltip.ToolTip",t="Boolean",s="__vd",r="__vf",o="_applyCurrent",q="__vc",p="qx.ui.tooltip.Manager",n="tooltip-error",m="singleton";
qx.Class.define(p,{type:m,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,y,this.__vm,this,true);
this.__vc=new qx.event.Timer();
this.__vc.addListener(z,this.__vj,this);
this.__vd=new qx.event.Timer();
this.__vd.addListener(z,this.__vk,this);
this.__ve={left:0,top:0};
},properties:{current:{check:u,nullable:true,apply:o},showInvalidTooltips:{check:t,init:true}},members:{__ve:null,__vd:null,__vc:null,__vf:null,__vg:null,__vh:function(){if(!this.__vf){this.__vf=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__vf;
},__vi:function(){if(!this.__vg){this.__vg=new qx.ui.tooltip.ToolTip().set({appearance:n});
this.__vg.syncAppearance();
}return this.__vg;
},_applyCurrent:function(D,E){if(E&&qx.ui.core.Widget.contains(E,D)){return;
}if(E){if(!E.isDisposed()){E.exclude();
}this.__vc.stop();
this.__vd.stop();
}var G=qx.event.Registration;
var F=document.body;
if(D){this.__vc.startWith(D.getShowTimeout());
G.addListener(F,x,this.__vn,this,true);
G.addListener(F,A,this.__vo,this,true);
G.addListener(F,w,this.__vl,this,true);
}else{G.removeListener(F,x,this.__vn,this,true);
G.removeListener(F,A,this.__vo,this,true);
G.removeListener(F,w,this.__vl,this,true);
}},__vj:function(e){var B=this.getCurrent();

if(B&&!B.isDisposed()){this.__vd.startWith(B.getHideTimeout());

if(B.getPlaceMethod()==v){B.placeToWidget(B.getOpener());
}else{B.placeToPoint(this.__ve);
}B.show();
}this.__vc.stop();
},__vk:function(e){var C=this.getCurrent();

if(C&&!C.isDisposed()){C.exclude();
}this.__vd.stop();
this.resetCurrent();
},__vl:function(e){var l=this.__ve;
l.left=e.getDocumentLeft();
l.top=e.getDocumentTop();
},__vm:function(e){var i=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!i){return;
}var j;
while(i!=null){var j=i.getToolTip();
var k=i.getToolTipText()||null;
var h=i.getToolTipIcon()||null;

if(qx.Class.hasInterface(i.constructor,qx.ui.form.IForm)&&!i.isValid()){var g=i.getInvalidMessage();
}
if(j||k||h||g){break;
}i=i.getLayoutParent();
}
if(!i){return;
}
if(i.isBlockToolTip()){return;
}if(g&&i.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var j=this.__vi().set({label:g});
}else if(!j){var j=this.__vh().set({label:k,icon:h});
}this.setCurrent(j);
j.setOpener(i);
},__vn:function(e){var a=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!a){return;
}var b=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!b){return;
}var c=this.getCurrent();
if(c&&(b==c||qx.ui.core.Widget.contains(c,b))){return;
}if(b&&a&&qx.ui.core.Widget.contains(a,b)){return;
}if(c&&!b){this.setCurrent(null);
}else{this.resetCurrent();
}},__vo:function(e){var d=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!d){return;
}var f=this.getCurrent();
if(f&&f==d.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,y,this.__vm,this,true);
this._disposeObjects(q,s,r);
this.__ve=null;
}});
})();
(function(){var u="Tree",t="Tree folders can display additional information in separate columns.",s="Configurable Tree",r="The two tree views display some hierarchical data ",q="Each tree item has a configurable label and icon.",p="showcase.page.tree.Page",o="Select multiple items, e.g. by holding the Shift key.",n="Tree filled with Data from a JSON file.",m="including folders, icons and labels. The tree in the right window has ",l="Tree using Data Binding",e="Try expanding some folders by using the arrow icon or double clicking.",k="Resize the window to make the tree scrollbars appear.",h="Tree using Data Binding with configuration",c="Tree displays scrollbars if necessary.",b="some additional infomation attached to each item.",g="showcase.page.tree.Content",f="showcase/tree/icon.png",i="The tree namespace",a="The Tree Widget",j="Multi Column Tree",d="tree";
qx.Class.define(p,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:u,part:d,icon:f,contentClass:g,description:showcase.page.DescriptionBuilder.build(u,this.__vy,this.__vz,this.__vA,this.__vB,this.__vC,this.__vD)});
},members:{__vy:r+m+b,__vz:{"Expand":e,"Resize":k,"Selection":o},__vA:{"Configurable":q,"Scrolling":c,"Multi Columns":t},__vB:{"widget/tree":a},__vC:{"#widget~Tree.html":s,"#widget~Tree_Columns.html":j,"#data~TreeController.html":l,"#data~JsonToTree.html":n,"#data~ExtendedTree.html":h},__vD:{"#qx.ui.tree":i}}});
})();
(function(){var r="",q="http://demo.qooxdoo.org/",p="qx.version",o="<ul>",n="</ul>",m="<h1>",l="</div>",k="<h2>Features</h2>",j="<li><a href='",i="</h1>",H="</strong>: ",G="http://qooxdoo.org/documentation/1.0/",F="</a></li>",E="<h2>Try This</h2>",D="<h2>Api</h2>",C="<h2>Documentation</h2>",B="/demobrowser/",A="<h2>Demos</h2>",z="showcase.page.DescriptionBuilder",y="' target='_blank'>",w="<div id='description'>",x="/apiviewer/",u="<p>",v="</p>",s="</li>",t="<li><strong>";
qx.Class.define(z,{statics:{_demoPrefix:q+qx.core.Setting.get(p)+B,_apiPrefix:q+qx.core.Setting.get(p)+x,_manualPrefix:G,build:function(a,b,c,d,e,f,g){var h=[];
h.push(w,m,a,i,u,b,v);

if(c){h.push(E,this.__vF(c));
}
if(d){h.push(k,this.__vF(d));
}
if(e){h.push(C,this.__vE(this._manualPrefix,e));
}
if(f){h.push(A,this.__vE(this._demoPrefix,f));
}
if(g){h.push(D,this.__vE(this._apiPrefix,g));
}h.push(l);
return h.join(r);
},__vE:function(L,M){var N=[o];

for(var O in M){N.push(j,L,O,y,M[O],F);
}N.push(n);
return N.join(r);
},__vF:function(I){var J=[o];

for(var K in I){J.push(t,K,H,I[K],s);
}J.push(n);
return J.join(r);
}}});
})();
(function(){var a="showcase.theme.Decoration";
qx.Theme.define(a,{extend:qx.theme.modern.Decoration,include:[showcase.page.theme.calc.theme.Decoration],decorations:{}});
})();
(function(){var g="Liberation Sans",f="Lucida Grande",e="Tahoma",d="Candara",c="Segoe UI",b="showcase.theme.Font",a="Arial";
qx.Theme.define(b,{extend:qx.theme.modern.Font,fonts:{"legend":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?15:14,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[f]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[c,d]:[e,g,a],bold:true}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var a="showcase.theme.Theme";
qx.Theme.define(a,{meta:{color:showcase.theme.Color,decoration:showcase.theme.Decoration,font:showcase.theme.Font,icon:qx.theme.icon.Tango,appearance:showcase.theme.Appearance}});
})();
(function(){var v="scrollbar-y",u="scrollbar-x",t="pane",s="auto",r="corner",q="on",p="changeVisibility",o="scroll",n="_computeScrollbars",m="off",f="scrollY",l="qx.ui.core.scroll.AbstractScrollArea",i="abstract",c="update",b="scrollX",h="mousewheel",g="scrollbarY",j="scrollbarX",a="horizontal",k="scrollarea",d="vertical";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:i,construct:function(){arguments.callee.base.call(this);
var K=new qx.ui.layout.Grid();
K.setColumnFlex(0,1);
K.setRowFlex(0,1);
this._setLayout(K);
this.addListener(h,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:k},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[s,q,m],init:s,themeable:true,apply:n},scrollbarY:{check:[s,q,m],init:s,themeable:true,apply:n},scrollbar:{group:[j,g]}},members:{_createChildControlImpl:function(Q){var R;

switch(Q){case t:R=new qx.ui.core.scroll.ScrollPane();
R.addListener(c,this._computeScrollbars,this);
R.addListener(b,this._onScrollPaneX,this);
R.addListener(f,this._onScrollPaneY,this);
this._add(R,{row:0,column:0});
break;
case u:R=this._createScrollBar(a);
R.setMinWidth(0);
R.exclude();
R.addListener(o,this._onScrollBarX,this);
R.addListener(p,this._onChangeScrollbarXVisibility,this);
this._add(R,{row:1,column:0});
break;
case v:R=this._createScrollBar(d);
R.setMinHeight(0);
R.exclude();
R.addListener(o,this._onScrollBarY,this);
R.addListener(p,this._onChangeScrollbarYVisibility,this);
this._add(R,{row:0,column:1});
break;
case r:R=new qx.ui.core.Widget();
R.setWidth(0);
R.setHeight(0);
R.exclude();
this._add(R,{row:1,column:1});
break;
}return R||arguments.callee.base.call(this,Q);
},getPaneSize:function(){return this.getChildControl(t).getInnerSize();
},getItemTop:function(V){return this.getChildControl(t).getItemTop(V);
},getItemBottom:function(U){return this.getChildControl(t).getItemBottom(U);
},getItemLeft:function(ba){return this.getChildControl(t).getItemLeft(ba);
},getItemRight:function(W){return this.getChildControl(t).getItemRight(W);
},scrollToX:function(S){qx.ui.core.queue.Manager.flush();
this.getChildControl(u).scrollTo(S);
},scrollByX:function(M){qx.ui.core.queue.Manager.flush();
this.getChildControl(u).scrollBy(M);
},getScrollX:function(){var z=this.getChildControl(u,true);
return z?z.getPosition():0;
},scrollToY:function(y){qx.ui.core.queue.Manager.flush();
this.getChildControl(v).scrollTo(y);
},scrollByY:function(L){qx.ui.core.queue.Manager.flush();
this.getChildControl(v).scrollBy(L);
},getScrollY:function(){var T=this.getChildControl(v,true);
return T?T.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(t).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(t).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var O=this._isChildControlVisible(u);
var P=this._isChildControlVisible(v);
var N=(P)?this.getChildControl(v,true):(O?this.getChildControl(u,true):null);

if(N){N.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var w=this._isChildControlVisible(u);
var x=this._isChildControlVisible(v);

if(!w){this.scrollToX(0);
}w&&x?this._showChildControl(r):this._excludeChildControl(r);
},_onChangeScrollbarYVisibility:function(e){var X=this._isChildControlVisible(u);
var Y=this._isChildControlVisible(v);

if(!Y){this.scrollToY(0);
}X&&Y?this._showChildControl(r):this._excludeChildControl(r);
},_computeScrollbars:function(){var G=this.getChildControl(t);
var content=G.getChildren()[0];

if(!content){this._excludeChildControl(u);
this._excludeChildControl(v);
return;
}var A=this.getInnerSize();
var F=G.getInnerSize();
var D=G.getScrollSize();
if(!F||!D){return;
}var H=this.getScrollbarX();
var I=this.getScrollbarY();

if(H===s&&I===s){var E=D.width>A.width;
var J=D.height>A.height;
if((E||J)&&!(E&&J)){if(E){J=D.height>F.height;
}else if(J){E=D.width>F.width;
}}}else{var E=H===q;
var J=I===q;
if(D.width>(E?F.width:A.width)&&H===s){E=true;
}
if(D.height>(E?F.height:A.height)&&I===s){J=true;
}}if(E){var C=this.getChildControl(u);
C.show();
C.setMaximum(Math.max(0,D.width-F.width-1));
C.setKnobFactor(F.width/D.width);
}else{this._excludeChildControl(u);
}
if(J){var B=this.getChildControl(v);
B.show();
B.setMaximum(Math.max(0,D.height-F.height-1));
B.setKnobFactor(F.height/D.height);
}else{this._excludeChildControl(v);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var v="single",u="Boolean",t="one",s="changeSelection",r="mouseup",q="mousedown",p="losecapture",o="multi",n="_applyQuickSelection",m="mouseover",d="_applySelectionMode",l="_applyDragSelection",h="qx.ui.core.MMultiSelectionHandling",c="removeItem",b="keypress",g="qx.event.type.Data",f="__wJ",j="addItem",a="additive",k="mousemove";
qx.Mixin.define(h,{construct:function(){var I=this.SELECTION_MANAGER;
var H=this.__wJ=new I(this);
this.addListener(q,H.handleMouseDown,H);
this.addListener(r,H.handleMouseUp,H);
this.addListener(m,H.handleMouseOver,H);
this.addListener(k,H.handleMouseMove,H);
this.addListener(p,H.handleLoseCapture,H);
this.addListener(b,H.handleKeyPress,H);
this.addListener(j,H.handleAddItem,H);
this.addListener(c,H.handleRemoveItem,H);
H.addListener(s,this._onSelectionChange,this);
},events:{"changeSelection":g},properties:{selectionMode:{check:[v,o,a,t],init:v,apply:d},dragSelection:{check:u,init:false,apply:l},quickSelection:{check:u,init:false,apply:n}},members:{__wJ:null,selectAll:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong all items."));
this.trace();
}this.__wJ.selectAll();
},isSelected:function(G){if(!qx.ui.core.Widget.contains(this,G)){throw new Error("Could not test if "+G+" is selected, because it is not a child element!");
}return this.__wJ.isItemSelected(G);
},addToSelection:function(y){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,y)){throw new Error("Could not add + "+y+" to selection, because it is not a child element!");
}this.__wJ.addItem(y);
},removeFromSelection:function(L){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to removing the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,L)){throw new Error("Could not remove "+L+" from selection, because it is not a child element!");
}this.__wJ.removeItem(L);
},selectRange:function(J,K){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}this.__wJ.selectItemRange(J,K);
},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to resetting the selectiong."));
this.trace();
}this.__wJ.clearSelection();
},setSelection:function(C){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
for(var i=0;i<C.length;i++){if(!qx.ui.core.Widget.contains(this,C[i])){throw new Error("Could not select "+C[i]+", because it is not a child element!");
}}
if(C.length===0){this.resetSelection();
}else{var D=this.getSelection();

if(!qx.lang.Array.equals(D,C)){this.__wJ.replaceSelection(C);
}}},getSelection:function(){return this.__wJ.getSelection();
},getSortedSelection:function(){return this.__wJ.getSortedSelection();
},isSelectionEmpty:function(){return this.__wJ.isSelectionEmpty();
},getSelectionContext:function(){return this.__wJ.getSelectionContext();
},_getManager:function(){return this.__wJ;
},getSelectables:function(){return this.__wJ.getSelectables();
},invertSelection:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}this.__wJ.invertSelection();
},_getLeadItem:function(){var B=this.__wJ.getMode();

if(B===v||B===t){return this.__wJ.getSelectedItem();
}else{return this.__wJ.getLeadItem();
}},_applySelectionMode:function(w,x){this.__wJ.setMode(w);
},_applyDragSelection:function(z,A){this.__wJ.setDrag(z);
},_applyQuickSelection:function(E,F){this.__wJ.setQuick(E);
},_onSelectionChange:function(e){this.fireDataEvent(s,e.getData());
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var t="change",s="__wF",r="qx.event.type.Data",q="qx.ui.form.MModelSelection",p="changeSelection";
qx.Mixin.define(q,{construct:function(){this.__wF=new qx.data.Array();
this.__wF.addListener(t,this.__wI,this);
this.addListener(p,this.__wH,this);
},events:{changeModelSelection:r},members:{__wF:null,__wG:false,__wH:function(){if(this.__wG){return;
}var n=this.getSelection();
var l=[];

for(var i=0;i<n.length;i++){var o=n[i];
var m=o.getModel?o.getModel():null;

if(m!==null){l.push(m);
}}this.setModelSelection(l);
},__wI:function(){this.__wG=true;
var d=this.getSelectables();
var f=[];
var e=this.__wF.toArray();

for(var i=0;i<e.length;i++){var h=e[i];

for(var j=0;j<d.length;j++){var k=d[j];
var c=k.getModel?k.getModel():null;

if(h===c){f.push(k);
break;
}}}this.setSelection(f);
this.__wG=false;
var g=this.getSelection();

if(!qx.lang.Array.equals(g,f)){this.__wH();
}},getModelSelection:function(){return this.__wF;
},setModelSelection:function(a){if(!a){this.__wF.removeAll();
return;
}{};
a.unshift(this.__wF.getLength());
a.unshift(0);
var b=this.__wF.splice.apply(this.__wF,a);
b.dispose();
}},destruct:function(){this._disposeObjects(s);
}});
})();
(function(){var bR="one",bQ="single",bP="selected",bO="additive",bN="multi",bM="PageUp",bL="under",bK="Left",bJ="lead",bI="Down",cq="Up",cp="Boolean",co="PageDown",cn="anchor",cm="End",cl="Home",ck="Right",cj="right",ci="click",ch="above",bY="left",ca="Escape",bW="A",bX="Space",bU="_applyMode",bV="interval",bS="changeSelection",bT="qx.event.type.Data",cb="quick",cc="key",ce="__wm",cd="abstract",cg="drag",cf="qx.ui.core.selection.Abstract";
qx.Class.define(cf,{type:cd,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__wj={};
},events:{"changeSelection":bT},properties:{mode:{check:[bQ,bN,bO,bR],init:bQ,apply:bU},drag:{check:cp,init:false},quick:{check:cp,init:false}},members:{__wk:0,__wl:0,__wm:null,__wn:null,__wo:null,__wp:null,__wq:null,__wr:null,__ws:null,__wt:null,__wu:null,__wv:null,__ww:null,__wx:null,__wy:null,__wz:null,__wA:null,__wj:null,__wB:null,__wC:null,getSelectionContext:function(){return this.__wz;
},selectAll:function(){var bj=this.getMode();

if(bj==bQ||bj==bR){throw new Error("Can not select all items in selection mode: "+bj);
}this._selectAllItems();
this._fireChange();
},selectItem:function(cw){this._setSelectedItem(cw);
var cx=this.getMode();

if(cx!==bQ&&cx!==bR){this._setLeadItem(cw);
this._setAnchorItem(cw);
}this._scrollItemIntoView(cw);
this._fireChange();
},addItem:function(bk){var bl=this.getMode();

if(bl===bQ||bl===bR){this._setSelectedItem(bk);
}else{if(!this._getAnchorItem()){this._setAnchorItem(bk);
}this._setLeadItem(bk);
this._addToSelection(bk);
}this._scrollItemIntoView(bk);
this._fireChange();
},removeItem:function(cM){this._removeFromSelection(cM);

if(this.getMode()===bR&&this.isSelectionEmpty()){var cN=this._getFirstSelectable();

if(cN){this.addItem(cN);
}if(cN==cM){return;
}}
if(this.getLeadItem()==cM){this._setLeadItem(null);
}
if(this._getAnchorItem()==cM){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(cJ,cK){var cL=this.getMode();

if(cL==bQ||cL==bR){throw new Error("Can not select multiple items in selection mode: "+cL);
}this._selectItemRange(cJ,cK);
this._setAnchorItem(cJ);
this._setLeadItem(cK);
this._scrollItemIntoView(cK);
this._fireChange();
},clearSelection:function(){if(this.getMode()==bR){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(M){var N=this.getMode();

if(N==bR||N===bQ){if(M.length>1){throw new Error("Could not select more than one items in mode: "+N+"!");
}
if(M.length==1){this.selectItem(M[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(M);
}},getSelectedItem:function(){var cO=this.getMode();

if(cO===bQ||cO===bR){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__wj);
},getSortedSelection:function(){var A=this.getSelectables();
var z=qx.lang.Object.getValues(this.__wj);
z.sort(function(a,b){return A.indexOf(a)-A.indexOf(b);
});
return z;
},isItemSelected:function(cR){var cS=this._selectableToHashCode(cR);
return this.__wj[cS]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__wj);
},invertSelection:function(){var P=this.getMode();

if(P===bQ||P===bR){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var O=this.getSelectables();

for(var i=0;i<O.length;i++){this._toggleInSelection(O[i]);
}this._fireChange();
},_setLeadItem:function(t){var u=this.__wA;

if(u!==null){this._styleSelectable(u,bJ,false);
}
if(t!==null){this._styleSelectable(t,bJ,true);
}this.__wA=t;
},_getLeadItem:function(){{};
return this.getLeadItem();
},getLeadItem:function(){return this.__wA!==null?this.__wA:null;
},_setAnchorItem:function(cT){var cU=this.__wB;

if(cU){this._styleSelectable(cU,cn,false);
}
if(cT){this._styleSelectable(cT,cn,true);
}this.__wB=cT;
},_getAnchorItem:function(){return this.__wB!==null?this.__wB:null;
},_isSelectable:function(cV){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var cW=event.getTarget();
return this._isSelectable(cW)?cW:null;
},_selectableToHashCode:function(cv){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bg,bh,bi){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bt){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(c){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(r,s){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(L){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(by,bz){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(cC,cD){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bw,bx){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(cz,cA){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(cz===bR){var cB=this._getFirstSelectable();

if(cB){this._setSelectedItem(cB);
this._scrollItemIntoView(cB);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var bv=this.getMode();

if(bv!==bR&&bv!==bQ){return;
}var bu=this._getSelectableFromMouseEvent(event);

if(bu===null){return;
}this._setSelectedItem(bu);
this._fireChange(cb);
},handleMouseDown:function(event){var bC=this._getSelectableFromMouseEvent(event);

if(bC===null){return;
}var bE=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bB=event.isShiftPressed();
if(this.isItemSelected(bC)&&!bB&&!bE&&!this.getDrag()){this.__wC=bC;
return;
}else{this.__wC=null;
}this._scrollItemIntoView(bC);
switch(this.getMode()){case bQ:case bR:this._setSelectedItem(bC);
break;
case bO:this._setLeadItem(bC);
this._setAnchorItem(bC);
this._toggleInSelection(bC);
break;
case bN:this._setLeadItem(bC);
if(bB){var bD=this._getAnchorItem();

if(bD===null){bD=this._getFirstSelectable();
this._setAnchorItem(bD);
}this._selectItemRange(bD,bC,bE);
}else if(bE){this._setAnchorItem(bC);
this._toggleInSelection(bC);
}else{this._setAnchorItem(bC);
this._setSelectedItem(bC);
}break;
}var bF=this.getMode();

if(this.getDrag()&&bF!==bQ&&bF!==bR&&!bB&&!bE){this.__wq=this._getLocation();
this.__wn=this._getScroll();
this.__wr=event.getDocumentLeft()+this.__wn.left;
this.__ws=event.getDocumentTop()+this.__wn.top;
this.__wt=true;
this._capture();
}this._fireChange(ci);
},handleMouseUp:function(event){var y=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var v=event.isShiftPressed();

if(!y&&!v&&this.__wC){var w=this._getSelectableFromMouseEvent(event);

if(w===null||!this.isItemSelected(w)){return;
}var x=this.getMode();

if(x===bO){this._removeFromSelection(w);
}else{this._setSelectedItem(w);

if(this.getMode()===bN){this._setLeadItem(w);
this._setAnchorItem(w);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__wt){return;
}this.__wu=event.getDocumentLeft();
this.__wv=event.getDocumentTop();
var cF=this.__wu+this.__wn.left;

if(cF>this.__wr){this.__ww=1;
}else if(cF<this.__wr){this.__ww=-1;
}else{this.__ww=0;
}var cE=this.__wv+this.__wn.top;

if(cE>this.__ws){this.__wx=1;
}else if(cE<this.__ws){this.__wx=-1;
}else{this.__wx=0;
}var location=this.__wq;

if(this.__wu<location.left){this.__wk=this.__wu-location.left;
}else if(this.__wu>location.right){this.__wk=this.__wu-location.right;
}else{this.__wk=0;
}
if(this.__wv<location.top){this.__wl=this.__wv-location.top;
}else if(this.__wv>location.bottom){this.__wl=this.__wv-location.bottom;
}else{this.__wl=0;
}if(!this.__wm){this.__wm=new qx.event.Timer(100);
this.__wm.addListener(bV,this._onInterval,this);
}this.__wm.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var cr=e.getData();

if(this.getMode()===bR&&this.isSelectionEmpty()){this.addItem(cr);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__wt){return;
}if(this.__wy){this._fireChange(ci);
}delete this.__wt;
delete this.__wo;
delete this.__wp;
this._releaseCapture();
if(this.__wm){this.__wm.stop();
}},_onInterval:function(e){this._scrollBy(this.__wk,this.__wl);
this.__wn=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var bc=this._getDimension();
var U=Math.max(0,Math.min(this.__wu-this.__wq.left,bc.width))+this.__wn.left;
var T=Math.max(0,Math.min(this.__wv-this.__wq.top,bc.height))+this.__wn.top;
if(this.__wo===U&&this.__wp===T){return;
}this.__wo=U;
this.__wp=T;
var be=this._getAnchorItem();
var W=be;
var ba=this.__ww;
var bd,V;

while(ba!==0){bd=ba>0?this._getRelatedSelectable(W,cj):this._getRelatedSelectable(W,bY);
if(bd!==null){V=this._getSelectableLocationX(bd);
if((ba>0&&V.left<=U)||(ba<0&&V.right>=U)){W=bd;
continue;
}}break;
}var bb=this.__wx;
var Y,X;

while(bb!==0){Y=bb>0?this._getRelatedSelectable(W,bL):this._getRelatedSelectable(W,ch);
if(Y!==null){X=this._getSelectableLocationY(Y);
if((bb>0&&X.top<=T)||(bb<0&&X.bottom>=T)){W=Y;
continue;
}}break;
}var bf=this.getMode();

if(bf===bN){this._selectItemRange(be,W);
}else if(bf===bO){if(this.isItemSelected(be)){this._selectItemRange(be,W,true);
}else{this._deselectItemRange(be,W);
}this._setAnchorItem(W);
}this._fireChange(cg);
},__wD:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var n,m;
var p=event.getKeyIdentifier();
var o=this.getMode();
var h=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var j=event.isShiftPressed();
var k=false;

if(p===bW&&h){if(o!==bQ&&o!==bR){this._selectAllItems();
k=true;
}}else if(p===ca){if(o!==bQ&&o!==bR){this._clearSelection();
k=true;
}}else if(p===bX){var g=this.getLeadItem();

if(g&&!j){if(h||o===bO){this._toggleInSelection(g);
}else{this._setSelectedItem(g);
}k=true;
}}else if(this.__wD[p]){k=true;

if(o===bQ||o==bR){n=this._getSelectedItem();
}else{n=this.getLeadItem();
}
if(n!==null){switch(p){case cl:m=this._getFirstSelectable();
break;
case cm:m=this._getLastSelectable();
break;
case cq:m=this._getRelatedSelectable(n,ch);
break;
case bI:m=this._getRelatedSelectable(n,bL);
break;
case bK:m=this._getRelatedSelectable(n,bY);
break;
case ck:m=this._getRelatedSelectable(n,cj);
break;
case bM:m=this._getPage(n,true);
break;
case co:m=this._getPage(n,false);
break;
}}else{switch(p){case cl:case bI:case ck:case co:m=this._getFirstSelectable();
break;
case cm:case cq:case bK:case bM:m=this._getLastSelectable();
break;
}}if(m!==null){switch(o){case bQ:case bR:this._setSelectedItem(m);
break;
case bO:this._setLeadItem(m);
break;
case bN:if(j){var q=this._getAnchorItem();

if(q===null){this._setAnchorItem(q=this._getFirstSelectable());
}this._setLeadItem(m);
this._selectItemRange(q,m,h);
}else{this._setAnchorItem(m);
this._setLeadItem(m);

if(!h){this._setSelectedItem(m);
}}break;
}this._scrollItemIntoView(m);
}}
if(k){event.stop();
this._fireChange(cc);
}},_selectAllItems:function(){var bA=this.getSelectables();

for(var i=0,l=bA.length;i<l;i++){this._addToSelection(bA[i]);
}},_clearSelection:function(){var cP=this.__wj;

for(var cQ in cP){this._removeFromSelection(cP[cQ]);
}this.__wj={};
},_selectItemRange:function(bm,bn,bo){var br=this._getSelectableRange(bm,bn);
if(!bo){var bq=this.__wj;
var bs=this.__wE(br);

for(var bp in bq){if(!bs[bp]){this._removeFromSelection(bq[bp]);
}}}for(var i=0,l=br.length;i<l;i++){this._addToSelection(br[i]);
}},_deselectItemRange:function(I,J){var K=this._getSelectableRange(I,J);

for(var i=0,l=K.length;i<l;i++){this._removeFromSelection(K[i]);
}},__wE:function(cG){var cI={};
var cH;

for(var i=0,l=cG.length;i<l;i++){cH=cG[i];
cI[this._selectableToHashCode(cH)]=cH;
}return cI;
},_getSelectedItem:function(){for(var cy in this.__wj){return this.__wj[cy];
}return null;
},_setSelectedItem:function(Q){if(this._isSelectable(Q)){var R=this.__wj;
var S=this._selectableToHashCode(Q);

if(!R[S]||qx.lang.Object.hasMinLength(R,2)){this._clearSelection();
this._addToSelection(Q);
}}},_addToSelection:function(ct){var cu=this._selectableToHashCode(ct);

if(!this.__wj[cu]&&this._isSelectable(ct)){this.__wj[cu]=ct;
this._styleSelectable(ct,bP,true);
this.__wy=true;
}},_toggleInSelection:function(d){var f=this._selectableToHashCode(d);

if(!this.__wj[f]){this.__wj[f]=d;
this._styleSelectable(d,bP,true);
}else{delete this.__wj[f];
this._styleSelectable(d,bP,false);
}this.__wy=true;
},_removeFromSelection:function(bG){var bH=this._selectableToHashCode(bG);

if(this.__wj[bH]!=null){delete this.__wj[bH];
this._styleSelectable(bG,bP,false);
this.__wy=true;
}},_replaceMultiSelection:function(B){var E=false;
var H,G;
var C={};

for(var i=0,l=B.length;i<l;i++){H=B[i];

if(this._isSelectable(H)){G=this._selectableToHashCode(H);
C[G]=H;
}}var D=H;
var F=this.__wj;

for(var G in F){if(C[G]){delete C[G];
}else{H=F[G];
delete F[G];
this._styleSelectable(H,bP,false);
E=true;
}}for(var G in C){H=F[G]=C[G];
this._styleSelectable(H,bP,true);
E=true;
}if(!E){return false;
}this._scrollItemIntoView(D);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__wy=true;
this._fireChange();
},_fireChange:function(cs){if(this.__wy){this.__wz=cs||null;
this.fireDataEvent(bS,this.getSelection());
delete this.__wy;
}}},destruct:function(){this._disposeObjects(ce);
this.__wj=this.__wC=this.__wB=null;
this.__wA=null;
}});
})();
(function(){var z="vertical",y="under",x="above",w="qx.ui.core.selection.Widget",v="left",u="right";
qx.Class.define(w,{extend:qx.ui.core.selection.Abstract,construct:function(t){arguments.callee.base.call(this);
this.__wh=t;
},members:{__wh:null,_isSelectable:function(b){return b.isEnabled()&&b.isVisible()&&b.getLayoutParent()===this.__wh;
},_selectableToHashCode:function(c){return c.$$hash;
},_styleSelectable:function(L,M,N){N?L.addState(M):L.removeState(M);
},_capture:function(){this.__wh.capture();
},_releaseCapture:function(){this.__wh.releaseCapture();
},_getWidget:function(){return this.__wh;
},_getLocation:function(){var g=this.__wh.getContentElement().getDomElement();
return g?qx.bom.element.Location.get(g):null;
},_getDimension:function(){return this.__wh.getInnerSize();
},_getSelectableLocationX:function(G){var H=G.getBounds();

if(H){return {left:H.left,right:H.left+H.width};
}},_getSelectableLocationY:function(h){var j=h.getBounds();

if(j){return {top:j.top,bottom:j.top+j.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(r,s){},_scrollItemIntoView:function(a){this.__wh.scrollChildIntoView(a);
},getSelectables:function(){var e=this.__wh.getChildren();
var f=[];
var d;

for(var i=0,l=e.length;i<l;i++){d=e[i];

if(d.isEnabled()&&d.isVisible()){f.push(d);
}}return f;
},_getSelectableRange:function(A,B){if(A===B){return [A];
}var F=this.__wh.getChildren();
var C=[];
var E=false;
var D;

for(var i=0,l=F.length;i<l;i++){D=F[i];

if(D===A||D===B){if(E){C.push(D);
break;
}else{E=true;
}}
if(E&&D.isEnabled()&&D.isVisible()){C.push(D);
}}return C;
},_getFirstSelectable:function(){var O=this.__wh.getChildren();

for(var i=0,l=O.length;i<l;i++){if(O[i].isEnabled()&&O[i].isVisible()){return O[i];
}}return null;
},_getLastSelectable:function(){var K=this.__wh.getChildren();

for(var i=K.length-1;i>0;i--){if(K[i].isEnabled()&&K[i].isVisible()){return K[i];
}}return null;
},_getRelatedSelectable:function(k,m){var p=this.__wh.getOrientation()===z;
var o=this.__wh.getChildren();
var n=o.indexOf(k);
var q;

if((p&&m===x)||(!p&&m===v)){for(var i=n-1;i>=0;i--){q=o[i];

if(q.isEnabled()&&q.isVisible()){return q;
}}}else if((p&&m===y)||(!p&&m===u)){for(var i=n+1;i<o.length;i++){q=o[i];

if(q.isEnabled()&&q.isVisible()){return q;
}}}return null;
},_getPage:function(I,J){if(J){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__wh=null;
}});
})();
(function(){var d="qx.ui.core.selection.ScrollArea";
qx.Class.define(d,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(s){return (s.isEnabled()&&s.isVisible()&&s.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var e=this._getWidget();
return {left:e.getScrollX(),top:e.getScrollY()};
},_scrollBy:function(a,b){var c=this._getWidget();
c.scrollByX(a);
c.scrollByY(b);
},_getPage:function(f,g){var l=this.getSelectables();
var length=l.length;
var o=l.indexOf(f);
if(o===-1){throw new Error("Invalid lead item: "+f);
}var h=this._getWidget();
var q=h.getScrollY();
var innerHeight=h.getInnerSize().height;
var top,k,p;

if(g){var n=q;
var i=o;
while(1){for(;i>=0;i--){top=h.getItemTop(l[i]);
if(top<n){p=i+1;
break;
}}if(p==null){var r=this._getFirstSelectable();
return r==f?null:r;
}if(p>=o){n-=innerHeight+q-h.getItemBottom(f);
p=null;
continue;
}return l[p];
}}else{var m=innerHeight+q;
var i=o;
while(1){for(;i<length;i++){k=h.getItemBottom(l[i]);
if(k>m){p=i-1;
break;
}}if(p==null){var j=this._getLastSelectable();
return j==f?null:j;
}if(p<=o){m+=h.getItemTop(f)-q;
p=null;
continue;
}return l[p];
}}}}});
})();
(function(){var s="horizontal",r="qx.event.type.Data",q="vertical",p="",o="qx.ui.form.List",n="Enter",m="one",k="addChildWidget",j="_applySpacing",h="Boolean",E="Integer",D="action",C="keyinput",B="addItem",A="__wM",z="removeChildWidget",y="_applyOrientation",x="single",w="keypress",v="list",t="pane",u="removeItem";
qx.Class.define(o,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(F){arguments.callee.base.call(this);
this.__wM=new qx.ui.container.Composite();
this.__wM.addListener(k,this._onAddChild,this);
this.__wM.addListener(z,this._onRemoveChild,this);
this.getChildControl(t).add(this.__wM);
if(F){this.setOrientation(s);
}else{this.initOrientation();
}this.addListener(w,this._onKeyPress);
this.addListener(C,this._onKeyInput);
this.__wN=p;
},events:{addItem:r,removeItem:r},properties:{appearance:{refine:true,init:v},focusable:{refine:true,init:true},orientation:{check:[s,q],init:q,apply:y},spacing:{check:E,init:0,apply:j,themeable:true},enableInlineFind:{check:h,init:true}},members:{__wN:null,__wO:null,__wM:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__wM;
},_onAddChild:function(e){this.fireDataEvent(B,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(u,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(I,J){var K=I===s;
var L=K?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__wM;
content.setLayout(L);
content.setAllowGrowX(!K);
content.setAllowGrowY(K);
this._applySpacing(this.getSpacing());
},_applySpacing:function(G,H){this.__wM.getLayout().setSpacing(G);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==n&&!e.isAltPressed()){var g=this.getSelection();

for(var i=0;i<g.length;i++){g[i].fireEvent(D);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var a=this.getSelectionMode();

if(!(a===x||a===m)){return;
}if(((new Date).valueOf()-this.__wO)>1000){this.__wN=p;
}this.__wN+=e.getChar();
var b=this.findItemByLabelFuzzy(this.__wN);
if(b){this.setSelection([b]);
}this.__wO=(new Date).valueOf();
},findItemByLabelFuzzy:function(c){c=c.toLowerCase();
var d=this.getChildren();
for(var i=0,l=d.length;i<l;i++){var f=d[i].getLabel();
if(f&&f.toLowerCase().indexOf(c)==0){return d[i];
}}return null;
},findItem:function(M,N){if(N!==false){M=M.toLowerCase();
}var O=this.getChildren();
var Q;
for(var i=0,l=O.length;i<l;i++){Q=O[i];
var P=Q.getLabel();

if(P!=null){if(P.translate){P=P.translate();
}
if(N!==false){P=P.toLowerCase();
}
if(P.toString()==M.toString()){return Q;
}}}return null;
}},destruct:function(){this._disposeObjects(A);
}});
})();
(function(){var j="hovered",i="slider",h="losecapture",g="preview-list",f="mouseover",e="mouseout",d="_knob",c="showcase.ui.PreviewList",b="scrollbar-x",a="knob";
qx.Class.define(c,{extend:qx.ui.form.List,construct:function(){arguments.callee.base.call(this,true);
var k=this.getChildControl(b).getChildControl(i);
this._knob=k.getChildControl(a);
this._knob.addListener(f,function(){this._knob.addState(j);
},this);
this._knob.addListener(e,this._onMouseOut,this);
k.addListener(h,this._onMouseOut,this);
},properties:{appearance:{refine:true,init:g},height:{refine:true,init:null}},members:{_onMouseOut:function(){this._knob.removeState(j);
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var n="complete",m="display",l="_applySelectedPage",k="Boolean",j="showcase/images/welcome.png",h="showcase.Application",g="qx.client",f="stack",e="showcase/images/loading66.gif",d="selection[0]",L="selection[0].readyState",K="none",J="value",I="__vK",H="selection[0].description",G="showcase",F="name",E="icon",D="selectedPage",C="showcase.Page",u="state",v="_applyShowLoadIndicator",s="en_US",t="page-preview",q="__vG",r="50%",o="mshtml",p="__vI",w="update",x="block",z="selection[0].part",y="showLoadIndicator",B="__vL",A="__vJ";
qx.Class.define(h,{extend:qx.application.Inline,properties:{selectedPage:{check:C,apply:l,nullable:true},showLoadIndicator:{check:k,init:false,apply:v}},members:{__vG:null,__vH:null,__vI:null,__vJ:null,__vK:null,__vL:null,main:function(){arguments.callee.base.call(this);
{};
qx.locale.Manager.getInstance().setLocale(s);
var X=new qx.ui.layout.Grid();
X.setColumnFlex(0,1);
X.setRowFlex(1,1);
var bc=0;
var W=document.getElementById(G);
var R=new qx.ui.root.Inline(W,false,false);
R.set({layout:X,width:900,minHeight:650,allowGrowX:false,height:null});
var S=new showcase.ui.PreviewList();
R.add(S,{row:bc++,column:0,colSpan:2});
this.__vG=new qx.ui.container.Stack();
this.__vG.set({appearance:f,maxWidth:600,allowGrowX:false});
R.add(this.__vG,{row:bc,column:0});
var V=new qx.ui.basic.Image(j).set({allowGrowX:true,allowGrowY:true,allowShrinkX:true,padding:[5,0,0,180]});
this.__vG.add(V);
this.__vI=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var Y=new qx.ui.basic.Image(e).set({marginLeft:-33});
this.__vI.add(Y,{left:r,top:200});
this.__vG.add(this.__vI);
this.__vJ=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
this.__vG.add(this.__vJ);
this.__vL=new showcase.ui.Description();
R.add(this.__vL,{row:bc++,column:1});
this.__vL.exclude();
var ba=new qx.data.Array();
ba.push(new showcase.page.table.Page(),new showcase.page.form.Page(),new showcase.page.tree.Page(),new showcase.page.databinding.Page(),new showcase.page.theme.Page(),new showcase.page.i18n.Page(),new showcase.page.dragdrop.Page(),new showcase.page.htmleditor.Page());
var bb=new qx.data.controller.List(ba,S,F);
bb.setIconPath(E);
bb.bind(d,this,D);
bb.bind(H,this.__vL,J);
bb.bind(L,this,y,{converter:function(bf){return bf!==n;
}});
bb.setDelegate({configureItem:function(M){M.set({appearance:t});
}});
var history=qx.bom.History.getInstance();
bb.bind(z,history,u);
var U=history.getState();

if(U){var T;

for(var i=0;i<ba.getLength();i++){if(ba.getItem(i).getPart()===U){T=ba.getItem(i);
break;
}}
if(T){qx.ui.core.queue.Manager.flush();
bb.getSelection().push(T);
}}},_applyShowLoadIndicator:function(O){if(O){this.__vG.setSelection([this.__vI]);
}else{this.__vG.setSelection([this.__vJ]);
}},_applySelectedPage:function(P,Q){if(Q){this._hidePage(Q);
}this._showPage(P);
},_hidePage:function(a){if(this.getSelectedPage()!==a){if(a.getReadyState()==n){a.getContent().getView().hide();
this.__vM();
}}},_showPage:function(be){this.__vL.show();
be.load(function(b){if(this.getSelectedPage()==b){var c=b.getContent().getView();
this.__vJ.add(c,{edge:0});
c.show();
this.__vN(c);
}},this);
},__vM:function(){if(this.__vK){this.__vK.cancel();
this.__vK.dispose();
this.__vK=null;
}},__vN:function(bd){if(qx.core.Variant.isSet(g,o)){return;
}bd.getContentElement().setStyle(m,K,true);
this.__vM();
qx.event.Timer.once(function(){var N=bd.getContentElement().getDomElement();
this.__vK=new qx.fx.effect.core.Fade(N);
this.__vK.set({from:0,to:1});
this.__vK.addListenerOnce(w,function(){bd.getContentElement().setStyle(m,x);
},this);
this.__vK.start();
},this,0);
}},destruct:function(){this._disposeObjects(q,p,A,B,I);
}});
})();
(function(){var k="}",j="  color: #444444;",i="  font-weight: bold;",h="  line-height: 130%;",g="  font-size: 15px;",f="  font-size: 24px;",e="#description h1 {",d="#i18n td {",c="  color: rgb(131, 179, 0);",b="  text-decoration: underline;",D="  font-size: 12px;",C="  color: #83B300;",B="#description {",A="  padding-left: 10px;",z="#description h2 {",y="#description ul {",x="  font-size: 10px;",w="  padding: 10px 0px 5px 0px;",v="  line-height: 140%;",u='  font-family: Verdana,"Bitstream Vera Sans","Lucida Grande",Tahoma,"Lucida Sans Unicode",Arial,sans-serif;',r="  margin: 10px 0 4px 0;",s="showcase.ui.Description",p="\n",q="#description li {",n="  padding-left: 20px;",o="#description a {",l="description",m="  color: rgb(16, 66, 117);",t="#description a:hover, #description a:active {";
qx.Class.define(s,{extend:qx.ui.basic.Label,construct:function(){arguments.callee.base.call(this);
this.__vP();
this.setRich(true);
this.setSelectable(true);
},properties:{appearance:{refine:true,init:l},allowGrowX:{refine:true,init:false},nativeContextMenu:{init:true,refine:true},allowGrowY:{refine:true,init:true}},members:{__vP:function(){var a=[B,u,j,D,v,A,k,o,b,j,k,t,C,k,z,c,w,g,i,k,e,f,h,r,m,i,k,y,n,k,q,j,k,d,x,k];
qx.bom.Stylesheet.createElement(a.join(p));
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
(function(){var p="interval",o="-1000px",n="mshtml",m="",l="qx.bom.IframeHistory",k="qx/static/blank.html",j="state",i='<html><body><div id="state">',h='</div></body></html>',g="hidden",c="qx.client",f="undefined",d="absolute";
if(qx.core.Variant.isSet(c,n)){qx.Class.define(l,{extend:qx.bom.History,construct:function(){arguments.callee.base.call(this);
this.__vX();
},members:{__vU:null,__vV:false,__vW:null,_setInitialState:function(){arguments.callee.base.call(this);
this.__vW=this._getHash();
},_setHash:function(z){arguments.callee.base.call(this,z);
this.__vW=this._encode(z);
},_readState:function(){if(!this.__vV){return this._decode(this._getHash());
}var a=this.__vU.contentWindow.document;
var b=a.getElementById(j);
return b?this._decode(b.innerText):m;
},_writeState:function(t){var t=this._encode(t);
this._setHash(t);
this.__vW=t;

try{var u=this.__vU.contentWindow.document;
u.open();
u.write(i+t+h);
u.close();
}catch(A){}},__vX:function(){this.__wc(function(){qx.event.Idle.getInstance().addListener(p,this.__vY,this);
});
},__vY:function(e){var s=null;
var r=this._getHash();

if(!this.__wb(r)){s=this.__wa(r);
}else{s=this._readState();
}
if(qx.lang.Type.isString(s)&&s!=this.getState()){this._onHistoryLoad(s);
}},__wa:function(v){v=this._decode(v);
this._writeState(v);
return v;
},__wb:function(q){return qx.lang.Type.isString(q)&&q==this.__vW;
},__wc:function(B){this.__vU=this.__wd();
document.body.appendChild(this.__vU);
this.__we(function(){this._writeState(this.getState());

if(B){B.call(this);
}},this);
},__wd:function(){var C=qx.bom.Iframe.create({src:qx.util.ResourceManager.getInstance().toUri(k)});
C.style.visibility=g;
C.style.position=d;
C.style.left=o;
C.style.top=o;
return C;
},__we:function(w,x,y){if(typeof y===f){y=0;
}
if(!this.__vU.contentWindow||!this.__vU.contentWindow.document){if(y>20){throw new Error("can't initialize iframe");
}qx.event.Timer.once(function(){this.__we(w,x,++y);
},this,10);
return;
}this.__vV=true;
w.call(x||window);
}},destruct:function(){this.__vU=null;
qx.event.Idle.getInstance().addListener(p,this.__vY,this);
}});
}})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(m,n,name){this.fireDataEvent(c,{value:m,name:name,old:n});
this._registerEventChaining(m,n,name);
},_registerEventChaining:function(i,j,name){if((i instanceof qx.core.Object)&&qx.Class.hasMixin(i.constructor,qx.data.marshal.MEventBubbling)){var k=qx.lang.Function.bind(this.__wi,this,name);
var l=i.addListener(c,k,this);
i.setUserData(d,l);
}if(j!=null&&j.getUserData&&j.getUserData(d)!=null){j.removeListenerById(j.getUserData(d));
}},__wi:function(name,e){var v=e.getData();
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
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var m="change",l="add",k="remove",j="order",h="",g="qx.data.Array",f="?",e="changeBubble",d="qx.event.type.Event",c="number",a="changeLength",b="qx.event.type.Data";
qx.Class.define(g,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(K){arguments.callee.base.call(this);
if(K==undefined){this.__wK=[];
}else if(arguments.length>1){this.__wK=[];

for(var i=0;i<arguments.length;i++){this.__wK.push(arguments[i]);
}}else if(typeof K==c){this.__wK=new Array(K);
}else if(K instanceof Array){this.__wK=qx.lang.Array.clone(K);
}else{this.__wK=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__wK.length;i++){this._applyEventPropagation(this.__wK[i],null,i);
}this.__wL();
},events:{"change":b,"changeLength":d},members:{__wK:null,concat:function(q){if(q){var r=this.__wK.concat(q);
}else{var r=this.__wK.concat();
}return new qx.data.Array(r);
},join:function(x){return this.__wK.join(x);
},pop:function(){var B=this.__wK.pop();
this.__wL();
this._applyEventPropagation(null,B,this.length-1);
this.fireDataEvent(m,{start:this.length-1,end:this.length-1,type:k,items:[B]},null);
return B;
},push:function(C){for(var i=0;i<arguments.length;i++){this.__wK.push(arguments[i]);
this.__wL();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(m,{start:this.length-1,end:this.length-1,type:l,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__wK.reverse();
this.fireDataEvent(m,{start:0,end:this.length-1,type:j,items:null},null);
},shift:function(){var G=this.__wK.shift();
this.__wL();
this._applyEventPropagation(null,G);
this.fireDataEvent(m,{start:0,end:this.length-1,type:k,items:[G]},null);
return G;
},slice:function(ba,bb){return new qx.data.Array(this.__wK.slice(ba,bb));
},splice:function(P,Q,R){var X=this.__wK.length;
var U=this.__wK.splice.apply(this.__wK,arguments);
if(this.__wK.length!=X){this.__wL();
}var V=Q>0;
var S=arguments.length>2;
var T=null;

if(V||S){if(this.__wK.length>X){var W=l;
}else if(this.__wK.length<X){var W=k;
T=U;
}else{var W=j;
}this.fireDataEvent(m,{start:P,end:this.length-1,type:W,items:T},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,P+i);
}this.fireDataEvent(e,{value:this,name:f,old:U});
for(var i=0;i<U.length;i++){this._applyEventPropagation(null,U[i],i);
}return (new qx.data.Array(U));
},sort:function(bc){this.__wK.sort.apply(this.__wK,arguments);
this.fireDataEvent(m,{start:0,end:this.length-1,type:j,items:null},null);
},unshift:function(w){for(var i=arguments.length-1;i>=0;i--){this.__wK.unshift(arguments[i]);
this.__wL();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(m,{start:0,end:this.length-1,type:l,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__wK;
},getItem:function(L){return this.__wK[L];
},setItem:function(bf,bg){var bh=this.__wK[bf];
this.__wK[bf]=bg;
this._applyEventPropagation(bg,bh,bf);
if(this.length!=this.__wK.length){this.__wL();
}this.fireDataEvent(m,{start:bf,end:bf,type:l,items:[bg]},null);
},getLength:function(){return this.length;
},indexOf:function(s){return this.__wK.indexOf(s);
},toString:function(){if(this.__wK!=null){return this.__wK.toString();
}return h;
},contains:function(u){return this.__wK.indexOf(u)!==-1;
},copy:function(){return this.concat();
},insertAt:function(M,N){this.splice(M,0,N);
},insertBefore:function(y,z){var A=this.indexOf(y);

if(A==-1){this.push(z);
}else{this.splice(A,0,z);
}},insertAfter:function(n,o){var p=this.indexOf(n);

if(p==-1||p==(this.length-1)){this.push(o);
}else{this.splice(p+1,0,o);
}},removeAt:function(O){return this.splice(O,1)[0];
},removeAll:function(){for(var i=0;i<this.__wK.length;i++){this._applyEventPropagation(null,this.__wK[i],i);
}var be=this.getLength();
var bd=this.__wK.concat();
this.__wK.length=0;
this.__wL();
this.fireDataEvent(m,{start:0,end:be-1,type:k,items:bd},null);
},append:function(D){{};
for(var i=0;i<D.length;i++){this._applyEventPropagation(D[i],null,this.__wK.length+i);
}Array.prototype.push.apply(this.__wK,D);
this.__wL();
},remove:function(H){var I=this.indexOf(H);

if(I!=-1){this.splice(I,1);
return H;
}},equals:function(v){if(this.length!==v.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==v.getItem(i)){return false;
}}return true;
},sum:function(){var J=0;

for(var i=0;i<this.length;i++){J+=this.getItem(i);
}return J;
},max:function(){var t=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>t){t=this.getItem(i);
}}return t===undefined?null:t;
},min:function(){var Y=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<Y){Y=this.getItem(i);
}}return Y===undefined?null:Y;
},forEach:function(E,F){for(var i=0;i<this.__wK.length;i++){E.call(F,this.__wK[i]);
}},__wL:function(){this.length=this.__wK.length;
this.fireEvent(a,qx.event.type.Event);
}},destruct:function(){this.__wK=null;
}});
})();
(function(){var f="listitem",e="qx.ui.form.ListItem",d="qx.event.type.Event";
qx.Class.define(e,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(a,b,c){arguments.callee.base.call(this,a,b);

if(c!=null){this.setModel(c);
}},events:{"action":d},properties:{appearance:{refine:true,init:f}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true}}});
})();
(function(){var d="qx.event.handler.Iframe",c="load",b="iframe";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(e){qx.event.Registration.fireEvent(e,c);
})},members:{canHandleEvent:function(f,g){return f.tagName.toLowerCase()===b;
},registerEvent:function(h,i,j){},unregisterEvent:function(k,l,m){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var u="qx.client",t="webkit",s="body",r="iframe",q="qx.bom.Iframe";
qx.Class.define(q,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(k,l){var k=k?qx.lang.Object.clone(k):{};
var m=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var n in m){if(k[n]==null){k[n]=m[n];
}}return qx.bom.Element.create(r,k,l);
},getWindow:qx.core.Variant.select(u,{"mshtml|gecko":function(C){try{return C.contentWindow;
}catch(D){return null;
}},"default":function(c){try{var d=this.getDocument(c);
return d?d.defaultView:null;
}catch(p){return null;
}}}),getDocument:qx.core.Variant.select(u,{"mshtml":function(y){try{var z=this.getWindow(y);
return z?z.document:null;
}catch(g){return null;
}},"default":function(a){try{return a.contentDocument;
}catch(v){return null;
}}}),getBody:function(A){try{var B=this.getDocument(A);
return B?B.getElementsByTagName(s)[0]:null;
}catch(o){return null;
}},setSource:function(h,i){try{if(this.getWindow(h)&&qx.dom.Hierarchy.isRendered(h)){try{if(qx.core.Variant.isSet(u,t)&&qx.bom.client.Platform.MAC){var j=this.getContentWindow();

if(j){j.stop();
}}this.getWindow(h).location.replace(i);
}catch(b){h.src=i;
}}else{h.src=i;
}}catch(w){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(e){var f=this.getDocument(e);

try{if(f&&f.location){return f.location.href;
}}catch(x){}return null;
}}});
})();
(function(){var p="changeSelection",o="change",n="qx.data.Array",m="qx.data.controller.MSelection",l="_applySelection",k="target";
qx.Mixin.define(m,{construct:function(){if(!qx.Class.hasProperty(this.constructor,k)){throw new Error("Target property is needed.");
}if(this.getSelection()==null){this.setSelection(new qx.data.Array());
}},properties:{selection:{check:n,event:p,apply:l,init:null}},members:{_modifingSelection:0,__xh:null,__xi:null,_applySelection:function(f,g){if(this.__xi!=undefined&&g!=undefined){g.removeListenerById(this.__xi);
}this.__xi=f.addListener(o,this.__xj,this);
},__xj:function(){this._updateSelection();
},_changeTargetSelection:function(){if(this._inSelectionModification()||this.getTarget()==null){return;
}var u=this.getTarget().getSelection();
var t=this.getSelection();

if(t==null){t=new qx.data.Array();
this.setSelection(t);
}if(u.length>0){t.toArray().splice(0,t.getLength());
}else{t.splice(0,this.getSelection().getLength());
}for(var i=0;i<u.length;i++){var s=u[i].getModel();

if(i+1==u.length){t.push(s);
}else{t.toArray().push(s);
}}this.fireDataEvent(p,this.getSelection());
},_addChangeTargetListener:function(v,w){if(this.__xh!=undefined&&w!=undefined){w.removeListenerById(this.__xh);
}
if(v!=null){if(this.__xk()||this.__xl()){this.__xh=v.addListener(p,this._changeTargetSelection,this);
}}},_updateSelection:function(){this._startSelectionModification();
if(this.__xk()){var c=[];
for(var i=0;i<this.getSelection().length;i++){var b=this.getSelection().getItem(i);
var d=this.__xn(b);

if(d!=null){c.push(d);
}}this.getTarget().setSelection(c);
c=this.getTarget().getSelection();
var e=[];

for(var i=0;i<c.length;i++){e[i]=c[i].getModel();
}for(var i=this.getSelection().length-1;i>=0;i--){if(!qx.lang.Array.contains(e,this.getSelection().getItem(i))){this.getSelection().splice(i,1);
}}}else if(this.__xl()){this.__xm(this.getSelection().getItem(this.getSelection().length-1));
this.getSelection().splice(0,this.getSelection().getLength()-1);
}this._endSelectionModification();
},__xk:function(){var x=this.getTarget().constructor;
return qx.Class.implementsInterface(x,qx.ui.core.IMultiSelection);
},__xl:function(){var a=this.getTarget().constructor;
return qx.Class.implementsInterface(a,qx.ui.core.ISingleSelection);
},__xm:function(q){var r=this.__xn(q);
if(r==null){return;
}if(this.__xk()){this.getTarget().addToSelection(r);
}else if(this.__xl()){this.getTarget().setSelection([r]);
}},__xn:function(h){var j=this.getTarget().getSelectables();
for(var i=0;i<j.length;i++){if(j[i].getModel()==h){return j[i];
}}return null;
},_startSelectionModification:function(){this._modifingSelection++;
},_endSelectionModification:function(){this._modifingSelection>0?this._modifingSelection--:null;
},_inSelectionModification:function(){return this._modifingSelection>0;
}}});
})();
(function(){var bn="change",bm="ReverseBindingId",bl="BindingId",bk="",bj="]",bi="model[",bh="String",bg=".",bf="changeModel",be="_applyLabelOptions",bA="_applyLabelPath",bz="changeTarget",by="changeLength",bx="_applyModel",bw="icon",bv="qx.data.controller.List",bu="_applyIconPath",bt="_applyDelegate",bs="changeDelegate",br="_applyTarget",bp="qx.data.IListData",bq="label",bo="_applyIconOptions";
qx.Class.define(bv,{extend:qx.core.Object,include:qx.data.controller.MSelection,construct:function(bb,bc,bd){arguments.callee.base.call(this);
this.__wR=[];
this.__wS=[];
this.__wT=[];
this.__wU={};

if(bd!=null){this.setLabelPath(bd);
}
if(bb!=null){this.setModel(bb);
}
if(bc!=null){this.setTarget(bc);
}},properties:{model:{check:bp,apply:bx,event:bf,nullable:true},target:{apply:br,event:bz,nullable:true,init:null},labelPath:{check:bh,apply:bA,nullable:true},iconPath:{check:bh,apply:bu,nullable:true},labelOptions:{apply:be,nullable:true},iconOptions:{apply:bo,nullable:true},delegate:{apply:bt,event:bs,init:null,nullable:true}},members:{__wV:null,__wW:null,__wR:null,__wU:null,__wS:null,__wT:null,update:function(){this.__wY();
this.__xd();
this._updateSelection();
},_applyDelegate:function(bG,bH){this._setConfigureItem(bG,bH);
this._setFilter(bG,bH);
this._setCreateItem(bG,bH);
this._setBindItem(bG,bH);
},_applyIconOptions:function(c,d){this.__xd();
},_applyLabelOptions:function(bE,bF){this.__xd();
},_applyIconPath:function(R,S){this.__xd();
},_applyLabelPath:function(H,I){this.__xd();
},_applyModel:function(n,o){if(o!=undefined){if(this.__wV!=undefined){o.removeListenerById(this.__wV);
}
if(this.__wW!=undefined){o.removeListenerById(this.__wW);
}}if(this.getSelection()!=undefined&&this.getSelection().length>0){this.getSelection().splice(0,this.getSelection().length);
}if(n!=null){this.__wV=n.addListener(by,this.__wY,this);
this.__wW=n.addListener(bn,this.__wX,this);
this.__xf();
this.__wY();
if(this.getTarget()!=null){var q=this.getModel();
var r=this.getTarget().getChildren();

for(var i=0,l=this.__wR.length;i<l;i++){var s=q.getItem(this.__xg(i));
var p=r[i];
p.setModel(s);
}}this._changeTargetSelection();
}},_applyTarget:function(E,F){this._addChangeTargetListener(E,F);
if(F!=undefined){F.removeAll();
this.removeAllBindings();
}
if(E!=null){if(this.getModel()!=null){for(var i=0;i<this.__wR.length;i++){this.__xb(this.__xg(i));
}}}},__wX:function(){for(var i=this.getSelection().length-1;i>=0;i--){if(!this.getModel().contains(this.getSelection().getItem(i))){this.getSelection().splice(i,1);
}}qx.ui.core.queue.Widget.add(this);
if(this.__wR.length!=this.getModel().getLength()){this.update();
}},syncWidget:function(){this._updateSelection();
},__wY:function(){if(this.getTarget()==null){return;
}this.__xf();
var bT=this.__wR.length;
var bS=this.getTarget().getChildren().length;
if(bT>bS){for(var j=bS;j<bT;j++){this.__xb(this.__xg(j));
}}else if(bT<bS){for(var j=bS;j>bT;j--){this.__xc();
}}},__xa:function(){var G=this.getModel();
if(G!=null){G.removeListenerById(this.__wW);
this.__wW=G.addListener(bn,this.__wX,this);
}},_createItem:function(){var Q=this.getDelegate();
if(Q!=null&&Q.createItem!=null){var P=Q.createItem();
}else{var P=new qx.ui.form.ListItem();
}if(Q!=null&&Q.configureItem!=null){Q.configureItem(P);
}return P;
},__xb:function(w){var x=this._createItem();
x.setModel(this.getModel().getItem(w)||null);
this._bindListItem(x,w);
this.getTarget().add(x);
},__xc:function(){this._startSelectionModification();
var k=this.getTarget().getChildren();
var h=k.length-1;
var m=k[h];
this._removeBindingsFrom(m);
this.getTarget().removeAt(h);
m.destroy();
this._endSelectionModification();
},getVisibleModels:function(){var bI=[];
var bJ=this.getTarget();

if(bJ!=null){var bK=bJ.getChildren();

for(var i=0;i<bK.length;i++){bI.push(bK[i].getModel());
}}return new qx.data.Array(bI);
},_bindListItem:function(X,Y){var ba=this.getDelegate();
if(ba!=null&&ba.bindItem!=null){ba.bindItem(this,X,Y);
}else{this.bindDefaultProperties(X,Y);
}},bindDefaultProperties:function(N,O){this.bindProperty(this.getLabelPath(),bq,this.getLabelOptions(),N,O);
if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),bw,this.getIconOptions(),N,O);
}},bindProperty:function(bU,bV,bW,bX,bY){bX.setModel(this.getModel().getItem(bY));
if(bW!=null){var bW=qx.lang.Object.clone(bW);
this.__wU[bV]=bW.onUpdate;
delete bW.onUpdate;
}else{bW={};
this.__wU[bV]=null;
}bW.onUpdate=qx.lang.Function.bind(this._onBindingSet,this,bY);
var ca=bi+bY+bj;

if(bU!=null&&bU!=bk){ca+=bg+bU;
}var cb=this.bind(ca,bX,bV,bW);
bX.setUserData(bV+bl,cb);
if(!qx.lang.Array.contains(this.__wS,bV)){this.__wS.push(bV);
}},bindPropertyReverse:function(bL,bM,bN,bO,bP){var bQ=bi+bP+bj;

if(bL!=null&&bL!=bk){bQ+=bg+bL;
}var bR=bO.bind(bM,this,bQ,bN);
bO.setUserData(bL+bm,bR);
if(!qx.lang.Array.contains(this.__wT,bL)){this.__wT.push(bL);
}},_onBindingSet:function(T,U,V){if(this.getModel()==null||this._inSelectionModification()){return;
}for(var i=0;i<this.__wS.length;i++){if(this.__wU[this.__wS[i]]!=null){this.__wU[this.__wS[i]]();
}}var W=this.getModel().getItem(T);
V.setModel(W==undefined?null:W);
},_removeBindingsFrom:function(bB){for(var i=0;i<this.__wS.length;i++){var bC=bB.getUserData(this.__wS[i]+bl);

if(bC!=null){this.removeBinding(bC);
}}for(var i=0;i<this.__wT.length;i++){var bC=bB.getUserData(this.__wT[i]+bm);

if(bC!=null){bB.removeBinding(bC);
}}},__xd:function(){if(this.getTarget()==null||this.getModel()==null){return;
}var M=this.getTarget().getChildren();
for(var i=0;i<M.length;i++){this._removeBindingsFrom(M[i]);
this._bindListItem(M[i],this.__xg(i));
}this.__xa();
},_setConfigureItem:function(J,K){if(J!=null&&J.configureItem!=null&&this.getTarget()!=null){var L=this.getTarget().getChildren();

for(var i=0;i<L.length;i++){J.configureItem(L[i]);
}}},_setBindItem:function(a,b){if(a!=null&&a.bindItem!=null){if(b!=null&&b.bindItem!=null&&a.bindItem==b.bindItem){return;
}this.__xd();
}},_setCreateItem:function(e,f){if(this.getTarget()==null||this.getModel()==null||e==null||e.createItem==null){return;
}this._startSelectionModification();
var g=this.getTarget().getChildren();

for(var i=0,l=g.length;i<l;i++){this._removeBindingsFrom(g[i]);
}this.getTarget().removeAll();
this.update();
this._endSelectionModification();
this._updateSelection();
},_setFilter:function(y,z){if((y==null||y.filter==null)&&(z!=null&&z.filter!=null)){this.__xe();
}if(this.getTarget()==null||this.getModel()==null||y==null||y.filter==null){return;
}this._startSelectionModification();
var D=this.getTarget().getChildren();

for(var i=0,l=D.length;i<l;i++){this._removeBindingsFrom(D[i]);
}var B=this.__wR;
this.__xf();
if(B.length>this.__wR.length){for(var j=B.length;j>this.__wR.length;j--){this.getTarget().removeAt(j-1);
}}else if(B.length<this.__wR.length){for(var j=B.length;j<this.__wR.length;j++){var C=this._createItem();
this.getTarget().add(C);
}}var A=this.getTarget().getChildren();

for(var i=0;i<A.length;i++){this._bindListItem(A[i],this.__xg(i));
}this.__xa();
this._endSelectionModification();
this._updateSelection();
},__xe:function(){this.__xf();
this.__wY();
this.__xd();
qx.ui.core.queue.Widget.add(this);
},__xf:function(){var u=this.getModel();

if(u==null){return;
}var v=this.getDelegate();

if(v!=null){var t=v.filter;
}this.__wR=[];

for(var i=0;i<u.getLength();i++){if(t==null||t(u.getItem(i))){this.__wR.push(i);
}}},__xg:function(bD){return this.__wR[bD];
}},destruct:function(){this.__wR=this.__wU=this.__wS=null;
this.__wT=null;
}});
})();
(function(){var c="showcase.Page",b="showcase.AbstractContent",a="qx.ui.core.Widget";
qx.Class.define(b,{extend:qx.core.Object,construct:function(d){this.setPage(d);
},properties:{page:{check:c},view:{check:a}}});
})();
(function(){var c="qx.data.marshal.IMarshaler";
qx.Interface.define(c,{members:{toClass:function(a,b){},toModel:function(d){}}});
})();
(function(){var x="qx.data.model.",w="",v='"',u="change",t="qx.data.marshal.Json",s="set",r="_applyEventPropagation";
qx.Class.define(t,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(k){arguments.callee.base.call(this);
this.__hD=k;
},statics:{__hE:null,createModel:function(E,F){if(this.__hE===null){this.__hE=new qx.data.marshal.Json();
}this.__hE.toClass(E,F);
return this.__hE.toModel(E);
}},members:{__hD:null,__hF:function(B){var C=[];

for(var D in B){C.push(D);
}return C.sort().join(v);
},toClass:function(a,b){if(qx.lang.Type.isNumber(a)||qx.lang.Type.isString(a)||qx.lang.Type.isBoolean(a)||a==null){return;
}if(qx.lang.Type.isArray(a)){for(var i=0;i<a.length;i++){this.toClass(a[i],b);
}return ;
}var d=this.__hF(a);
if(this.__hD&&this.__hD.getModelClass&&this.__hD.getModelClass(d)!=null){return;
}for(var h in a){this.toClass(a[h],b);
}if(qx.Class.isDefined(x+d)){return;
}var j={};

for(var h in a){h=h.replace(/-/g,w);
j[h]={};
j[h].nullable=true;
j[h].event=u+qx.lang.String.firstUp(h);

if(b){j[h].apply=r;
}}if(this.__hD&&this.__hD.getModelSuperClass){var g=this.__hD.getModelSuperClass(d)||qx.core.Object;
}else{var g=qx.core.Object;
}var e=[];

if(this.__hD&&this.__hD.getModelMixins){var f=this.__hD.getModelMixins(d);
if(!qx.lang.Type.isArray(f)){if(f!=null){e=[f];
}}}if(b){e.push(qx.data.marshal.MEventBubbling);
}var c={extend:g,include:e,properties:j};
qx.Class.define(x+d,c);
},__hG:function(y){var z;
if(this.__hD&&this.__hD.getModelClass){z=this.__hD.getModelClass(y);
}
if(z!=null){return (new z());
}else{var A=qx.Class.getByName(x+y);
return (new A());
}},toModel:function(l){if(qx.lang.Type.isNumber(l)||qx.lang.Type.isString(l)||qx.lang.Type.isBoolean(l)||qx.lang.Type.isDate(l)||l==null){return l;
}else if(qx.lang.Type.isArray(l)){var p=new qx.data.Array();

for(var i=0;i<l.length;i++){p.push(this.toModel(l[i]));
}return p;
}else if(qx.lang.Type.isObject(l)){var m=this.__hF(l);
var q=this.__hG(m);
for(var o in l){var n=o.replace(/-/g,w);
q[s+qx.lang.String.firstUp(n)](this.toModel(l[o]));
}return q;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__hD=null;
}});
})();
(function(){var o="dragover",n="items",m="drag",k="dragend",j="drop",h="droprequest",g="dragstart",f="groupbox/legend",d="printer",c="icon",bm="Battery",bl="Scanner",bk=".png",bj="Soundblaster",bi="Cart",bh="Cell Phone",bg="BluRay Drive",bf="computer",be="WiFi",bd="camera-photo",v="Printer",w="DVD",t="network-wired",u="Keyboard",r="HDD",s="center",p="name",q="Computer",z="pda",A="move",I="showcase.page.dragdrop.Content",G="middle",Q="PDA",L="Camera",Y="selected",V="iPod",C="icon/64/actions/object-flip-horizontal.png",bc="network-wireless",bb="Mouse",ba="drive-optical",B="camera-web",E="media-flash",F="Display",H="Mic.",J="input-mouse",M="SD Card",S="Network Cable",X="icon/64/devices/",x="battery",y="drive-harddisk",D="scanner",P="audio-input-microphone",O="media-optical",N="Shop",U="phone",T="Webcam",K="input-keyboard",R="multimedia-player",b="audio-card",W="display";
qx.Class.define(I,{extend:showcase.AbstractContent,construct:function(bn){arguments.callee.base.call(this,bn);
this.setView(this._createView());
},members:{__f:null,__g:null,_createView:function(){var bu=new qx.ui.layout.Grid();
bu.setRowFlex(1,1);
bu.setColumnFlex(0,1);
bu.setColumnFlex(2,1);
bu.setColumnAlign(1,s,G);
var bv=new qx.ui.container.Composite(bu);
bv.setPadding(20);
bv.add(new qx.ui.basic.Label(N).set({appearance:f,paddingBottom:5}),{row:0,column:0});
bv.add(new qx.ui.basic.Label(bi).set({appearance:f,paddingBottom:5}),{row:0,column:2});
var bo=new qx.ui.form.List();
bo.set({draggable:true,droppable:true});
bv.add(bo,{row:1,column:0});
bo.addListener(g,this.__j,this);
bo.addListener(h,this.__i,this);
bo.addListener(j,this.__h,this);
bo.addListener(m,this.__l,this);
bo.addListener(k,this.__k,this);
var bs=new qx.ui.basic.Image(C);
bs.setPadding(10);
bv.add(bs,{row:1,column:1});
var bt=new qx.ui.form.List();
bt.set({draggable:true,droppable:true});
bv.add(bt,{row:1,column:2});
bt.addListener(g,this.__j,this);
bt.addListener(h,this.__i,this);
bt.addListener(j,this.__h,this);
bt.addListener(m,this.__l,this);
bt.addListener(k,this.__k,this);
var bp=qx.data.marshal.Json.createModel([{"name":bl,"icon":D},{"name":bj,"icon":b},{"name":H,"icon":P},{"name":bm,"icon":x},{"name":L,"icon":bd},{"name":T,"icon":B},{"name":q,"icon":bf},{"name":F,"icon":W},{"name":r,"icon":y},{"name":bg,"icon":ba},{"name":u,"icon":K},{"name":bb,"icon":J},{"name":M,"icon":E},{"name":w,"icon":O},{"name":V,"icon":R},{"name":S,"icon":t},{"name":be,"icon":bc},{"name":Q,"icon":z},{"name":bh,"icon":U},{"name":v,"icon":d}]);
var bq=new qx.data.controller.List(null,bo);
bq.setLabelPath(p);
bq.setIconPath(c);
bq.setIconOptions({converter:function(bz){return X+bz+bk;
}});
bq.setModel(bp);
var br=new qx.ui.form.ListItem();
this.__f=br;
br.setOpacity(0.5);
br.setZIndex(500);
br.addState(Y);
br.setLayoutProperties({left:-1000,top:-1000});
qx.core.Init.getApplication().getRoot().add(br);
return bv;
},__h:function(e){var bA=e.getData(n);
var bC=e.getOriginalTarget();
var bB=e.getTarget();

if(bC instanceof qx.ui.form.List){for(var i=0,l=bA.length;i<l;i++){bB.add(bA[i]);
}}else if(bC instanceof qx.ui.form.ListItem){for(var i=bA.length-1;i>=0;i--){bB.addAfter(bA[i],bC);
}}},__i:function(e){var bx=e.getTarget();
var bw=bx.getSelection().concat();
e.addData(n,bw);
},__j:function(e){e.addType(n);
e.addAction(A);
var by=e.getTarget().getSelection()[0];
this.__f.set({label:by.getLabel(),icon:by.getIcon(),width:by.getBounds().width});
},__k:function(e){this.__g&&this.__g.removeState(o);
this.__f.setDomPosition(-1000,-1000);
},__l:function(e){var a=e.getOriginalTarget();

if(a instanceof qx.ui.form.ListItem){if(a!=this.__g){this.__g&&this.__g.removeState(o);
a.addState(o);
this.__g=a;
}}else{this.__g&&this.__g.removeState(o);
}this.__f.setDomPosition(e.getDocumentLeft()+15,e.getDocumentTop()+15);
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__jc:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__jd:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__jd[name];
s[t]();
}else{var u=this.__jc[name];
s[u](q);
}}}});
})();
(function(){var c="qx.ui.core.Spacer";
qx.Class.define(c,{extend:qx.ui.core.LayoutItem,construct:function(a,b){arguments.callee.base.call(this);
this.setWidth(a!=null?a:0);
this.setHeight(b!=null?b:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(d){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();


qx.$$loader.init();

