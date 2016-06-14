(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"showcase.Application","qx.theme":"showcase.theme.Theme","qx.version":"1.0"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"showcase":{"resourceUri":"resource","sourceUri":"script","version":"trunk"}};
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
  packageHashes : {"0":"37033940454b","1":"d14fbc151ea8","2":"3043464c0975","3":"0773a417258e","4":"9d3ea289b6e0","5":"5696dd6345b3","6":"b7c5060cf67e","7":"49884fe1d25f","8":"24a2b2310614","9":"2b1a1bde23db","10":"be2fef6b40b2","11":"1b7903ac1440","12":"a4d71f30aa1a"},
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

qx.$$packageData['37033940454b']={"resources":{"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-61,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-43,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-30,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-15,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-53,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-35,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-44,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-24,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-12,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-8],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.gif":[7,4,"gif","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-46,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-22,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/table/descending.gif":[7,4,"gif","qx"],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-54,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-36,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/icon/Tango/64/actions/object-flip-horizontal.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/audio-card.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/audio-input-microphone.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/battery.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/camera-photo.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/camera-web.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/computer.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/display.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/drive-harddisk.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/drive-optical.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/input-keyboard.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/input-mouse.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/media-flash.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/media-optical.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/multimedia-player.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/network-wired.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/network-wireless.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/pda.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/phone.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/printer.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/scanner.png":[64,64,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.html":"qx","showcase/animation/icon.png":[151,125,"png","showcase"],"showcase/databinding/icon.png":[151,125,"png","showcase"],"showcase/databinding/twitter_logo_outline.png":[300,78,"png","showcase"],"showcase/dragdrop/icon.png":[151,125,"png","showcase"],"showcase/form/icon.png":[151,125,"png","showcase"],"showcase/htmleditor/format-list-ordered.png":[16,16,"png","showcase"],"showcase/htmleditor/format-list-unordered.png":[16,16,"png","showcase"],"showcase/htmleditor/icon.png":[151,125,"png","showcase"],"showcase/i18n/de.png":[60,40,"png","showcase"],"showcase/i18n/en.png":[60,40,"png","showcase"],"showcase/i18n/es.png":[60,40,"png","showcase"],"showcase/i18n/icon.png":[151,125,"png","showcase"],"showcase/i18n/nl.png":[60,40,"png","showcase"],"showcase/images/contentbackground.gif":[300,12,"gif","showcase"],"showcase/images/headerback.png":[11,200,"png","showcase"],"showcase/images/loading66.gif":[66,66,"gif","showcase"],"showcase/images/tag-hor-c.png":[6,12,"png","showcase"],"showcase/images/tag-hor-l.png":[6,12,"png","showcase"],"showcase/images/tag-hor-r.png":[6,12,"png","showcase"],"showcase/images/tag-vert-b.png":[12,6,"png","showcase"],"showcase/images/tag-vert-c.png":[12,6,"png","showcase"],"showcase/images/tag-vert-t.png":[12,6,"png","showcase"],"showcase/images/welcome.png":[413,121,"png","showcase"],"showcase/table/icon.png":[151,125,"png","showcase"],"showcase/theme/button-b.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-24],"showcase/theme/button-bl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-12],"showcase/theme/button-br.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-30],"showcase/theme/button-c.png":[20,22,"png","showcase"],"showcase/theme/button-combined-lr.png":[24,22,"png","showcase"],"showcase/theme/button-combined-tb.png":[6,72,"png","showcase"],"showcase/theme/button-l.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",-18,0],"showcase/theme/button-pressed-b.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-54],"showcase/theme/button-pressed-bl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-18],"showcase/theme/button-pressed-br.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-36],"showcase/theme/button-pressed-c.png":[20,22,"png","showcase"],"showcase/theme/button-pressed-l.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",-12,0],"showcase/theme/button-pressed-r.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",0,0],"showcase/theme/button-pressed-t.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-48],"showcase/theme/button-pressed-tl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-42],"showcase/theme/button-pressed-tr.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-66],"showcase/theme/button-r.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",-6,0],"showcase/theme/button-t.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-6],"showcase/theme/button-tl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,0],"showcase/theme/button-tr.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-60],"showcase/theme/display-b.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,0],"showcase/theme/display-bl.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-24],"showcase/theme/display-br.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-12],"showcase/theme/display-c.png":[20,27,"png","showcase"],"showcase/theme/display-combined-lr.png":[12,27,"png","showcase"],"showcase/theme/display-combined-tb.png":[6,36,"png","showcase"],"showcase/theme/display-l.png":[6,27,"png","showcase","showcase/theme/display-combined-lr.png",0,0],"showcase/theme/display-r.png":[6,27,"png","showcase","showcase/theme/display-combined-lr.png",-6,0],"showcase/theme/display-t.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-18],"showcase/theme/display-tl.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-30],"showcase/theme/display-tr.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-6],"showcase/theme/icon.png":[151,125,"png","showcase"],"showcase/theme/window-b.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-20],"showcase/theme/window-bl.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-40],"showcase/theme/window-br.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,0],"showcase/theme/window-c.png":[20,52,"png","showcase"],"showcase/theme/window-combined-lr.png":[20,52,"png","showcase"],"showcase/theme/window-combined-tb.png":[10,60,"png","showcase"],"showcase/theme/window-l.png":[10,52,"png","showcase","showcase/theme/window-combined-lr.png",0,0],"showcase/theme/window-r.png":[10,52,"png","showcase","showcase/theme/window-combined-lr.png",-10,0],"showcase/theme/window-t.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-50],"showcase/theme/window-tl.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-30],"showcase/theme/window-tr.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-10],"showcase/tree/icon.png":[151,125,"png","showcase"]}};
(function(){var h=".",g="()",f="[Class ",e=".prototype",d="toString",c="qx.Bootstrap",b="]",a="Class";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return f+this.classname+b;
},createNamespace:function(name,v){var x=name.split(h);
var parent=window;
var w=x[0];

for(var i=0,y=x.length-1;i<y;i++,w=x[i]){if(!parent[w]){parent=parent[w]={};
}else{parent=parent[w];
}}parent[w]=v;
return w;
},setDisplayName:function(t,u,name){t.displayName=u+h+name+g;
},setDisplayNames:function(q,r){for(var name in q){var s=q[name];

if(s instanceof Function){s.displayName=r+h+name+g;
}}},define:function(name,j){if(!j){var j={statics:{}};
}var o;
var m=null;
qx.Bootstrap.setDisplayNames(j.statics,name);

if(j.members){qx.Bootstrap.setDisplayNames(j.members,name+e);
o=j.construct||new Function;
var k=j.statics;

for(var l in k){o[l]=k[l];
}m=o.prototype;
var p=j.members;

for(var l in p){m[l]=p[l];
}}else{o=j.statics||{};
}var n=this.createNamespace(name,o);
o.name=o.classname=name;
o.basename=n;
o.$$type=a;
if(!o.hasOwnProperty(d)){o.toString=this.genericToString;
}if(j.defer){j.defer(o,m);
}qx.Bootstrap.$$registry[name]=j.statics;
return o;
}};
qx.Bootstrap.define(c,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var l="qx.allowUrlSettings",k="&",j="qx.core.Setting",h="qx.allowUrlVariants",g="qx.propertyDebugLevel",f="qxsetting",e=":",d=".";
qx.Bootstrap.define(j,{statics:{__dz:{},define:function(b,c){if(c===undefined){throw new Error('Default value of setting "'+b+'" must be defined!');
}
if(!this.__dz[b]){this.__dz[b]={};
}else if(this.__dz[b].defaultValue!==undefined){throw new Error('Setting "'+b+'" is already defined!');
}this.__dz[b].defaultValue=c;
},get:function(r){var s=this.__dz[r];

if(s===undefined){throw new Error('Setting "'+r+'" is not defined.');
}
if(s.value!==undefined){return s.value;
}return s.defaultValue;
},set:function(n,o){if((n.split(d)).length<2){throw new Error('Malformed settings key "'+n+'". Must be following the schema "namespace.key".');
}
if(!this.__dz[n]){this.__dz[n]={};
}this.__dz[n].value=o;
},__dA:function(){if(window.qxsettings){for(var m in window.qxsettings){this.set(m,window.qxsettings[m]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(t){}this.__dB();
}},__dB:function(){if(this.get(l)!=true){return;
}var q=document.location.search.slice(1).split(k);

for(var i=0;i<q.length;i++){var p=q[i].split(e);

if(p.length!=3||p[0]!=f){continue;
}this.set(p[1],decodeURIComponent(p[2]));
}}},defer:function(a){a.define(l,false);
a.define(h,false);
a.define(g,0);
a.__dA();
}});
})();
(function(){var z="gecko",y="1.9.0.0",x=".",w="[object Opera]",v="function",u="[^\\.0-9]",t="525.26",s="",r="mshtml",q="AppleWebKit/",k="unknown",p="9.6.0",n="4.0",j="Gecko",i="opera",m="webkit",l="0.0.0",o="8.0",h="qx.bom.client.Engine";
qx.Bootstrap.define(h,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__dy:function(){var a=k;
var e=l;
var d=window.navigator.userAgent;
var g=false;
var c=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==w){a=i;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(d)){e=RegExp.$1+x+RegExp.$2;

if(RegExp.$3!=s){e+=x+RegExp.$3;
}}else{c=true;
e=p;
}}else if(window.navigator.userAgent.indexOf(q)!=-1){a=m;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(d)){e=RegExp.$1;
var f=RegExp(u).exec(e);

if(f){e=e.slice(0,f.index);
}}else{c=true;
e=t;
}}else if(window.controllers&&window.navigator.product===j){a=z;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(d)){e=RegExp.$1;
}else{c=true;
e=y;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(d)){a=r;
e=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(e<8&&/Trident\/([^\);]+)(\)|;)/.test(d)){if(RegExp.$1===n){e=o;
}}this.MSHTML=true;
}else{var b=window.qxFail;

if(b&&typeof b===v){var a=b();

if(a.NAME&&a.FULLVERSION){a=a.NAME;
this[a.toUpperCase()]=true;
e=a.FULLVERSION;
}}else{g=true;
c=true;
e=y;
a=z;
this.GECKO=true;
window.alert("Unsupported client: "+d+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=g;
this.UNKNOWN_VERSION=c;
this.NAME=a;
this.FULLVERSION=e;
this.VERSION=parseFloat(e);
}},defer:function(A){A.__dy();
}});
})();
(function(){var D="on",C="off",B="|",A="default",z="object",y="&",x="qx.aspects",w="$",u="qx.allowUrlVariants",t="qx.debug",n="qx.client",s="qx.dynlocale",q="webkit",m="qxvariant",k="opera",p=":",o="qx.core.Variant",r="mshtml",j="gecko";
qx.Bootstrap.define(o,{statics:{__jk:{},__jl:{},compilerIsSet:function(){return true;
},define:function(e,f,g){{};

if(!this.__jk[e]){this.__jk[e]={};
}else{}this.__jk[e].allowedValues=f;
this.__jk[e].defaultValue=g;
},get:function(F){var G=this.__jk[F];
{};

if(G.value!==undefined){return G.value;
}return G.defaultValue;
},__jm:function(){if(window.qxvariants){for(var h in qxvariants){{};

if(!this.__jk[h]){this.__jk[h]={};
}this.__jk[h].value=qxvariants[h];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(d){}this.__jn(this.__jk);
}},__jn:function(){if(qx.core.Setting.get(u)!=true){return;
}var a=document.location.search.slice(1).split(y);

for(var i=0;i<a.length;i++){var b=a[i].split(p);

if(b.length!=3||b[0]!=m){continue;
}var c=b[1];

if(!this.__jk[c]){this.__jk[c]={};
}this.__jk[c].value=decodeURIComponent(b[2]);
}},select:function(O,P){{};

for(var Q in P){if(this.isSet(O,Q)){return P[Q];
}}
if(P[A]!==undefined){return P[A];
}{};
},isSet:function(J,K){var L=J+w+K;

if(this.__jl[L]!==undefined){return this.__jl[L];
}var N=false;
if(K.indexOf(B)<0){N=this.get(J)===K;
}else{var M=K.split(B);

for(var i=0,l=M.length;i<l;i++){if(this.get(J)===M[i]){N=true;
break;
}}}this.__jl[L]=N;
return N;
},__jo:function(v){return typeof v===z&&v!==null&&v instanceof Array;
},__jp:function(v){return typeof v===z&&v!==null&&!(v instanceof Array);
},__jq:function(H,I){for(var i=0,l=H.length;i<l;i++){if(H[i]==I){return true;
}}return false;
}},defer:function(E){E.define(n,[j,r,k,q],qx.bom.client.Engine.NAME);
E.define(t,[D,C],D);
E.define(x,[D,C],C);
E.define(s,[D,C],D);
E.__jm();
}});
})();
(function(){var Q="qx.client",P='"',O="valueOf",N="toLocaleString",M="isPrototypeOf",L="",K="toString",J="qx.lang.Object",I='\", "',H="hasOwnProperty";
qx.Bootstrap.define(J,{statics:{empty:function(t){{};

for(var u in t){if(t.hasOwnProperty(u)){delete t[u];
}}},isEmpty:qx.core.Variant.select(Q,{"gecko":function(h){{};
return h.__count__===0;
},"default":function(U){{};

for(var V in U){return false;
}return true;
}}),hasMinLength:qx.core.Variant.select(Q,{"gecko":function(p,q){{};
return p.__count__>=q;
},"default":function(W,X){{};

if(X<=0){return true;
}var length=0;

for(var Y in W){if((++length)>=X){return true;
}}return false;
}}),getLength:qx.core.Variant.select(Q,{"gecko":function(bk){{};
return bk.__count__;
},"default":function(f){{};
var length=0;

for(var g in f){length++;
}return length;
}}),_shadowedKeys:[M,H,N,K,O],getKeys:qx.core.Variant.select(Q,{"mshtml":function(bd){var be=[];

for(var bg in bd){be.push(bg);
}var bf=Object.prototype.hasOwnProperty;

for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(bf.call(bd,a[i])){be.push(a[i]);
}}return be;
},"default":function(R){var S=[];

for(var T in R){S.push(T);
}return S;
}}),getKeysAsString:function(r){{};
var s=qx.lang.Object.getKeys(r);

if(s.length==0){return L;
}return P+s.join(I)+P;
},getValues:function(ba){{};
var bc=[];
var bb=this.getKeys(ba);

for(var i=0,l=bb.length;i<l;i++){bc.push(ba[bb[i]]);
}return bc;
},mergeWith:function(A,B,C){{};

if(C===undefined){C=true;
}
for(var D in B){if(C||A[D]===undefined){A[D]=B[D];
}}return A;
},carefullyMergeWith:function(v,w){{};
return qx.lang.Object.mergeWith(v,w,false);
},merge:function(j,k){{};
var m=arguments.length;

for(var i=1;i<m;i++){qx.lang.Object.mergeWith(j,arguments[i]);
}return j;
},clone:function(E){{};
var F={};

for(var G in E){F[G]=E[G];
}return F;
},invert:function(bh){{};
var bi={};

for(var bj in bh){bi[bh[bj].toString()]=bj;
}return bi;
},getKeyFromValue:function(x,y){{};

for(var z in x){if(x.hasOwnProperty(z)&&x[z]===y){return z;
}}return null;
},contains:function(d,e){{};
return this.getKeyFromValue(d,e)!==null;
},select:function(n,o){{};
return o[n];
},fromArray:function(b){{};
var c={};

for(var i=0,l=b.length;i<l;i++){{};
c[b[i].toString()]=true;
}return c;
}}});
})();
(function(){var m="Function",l="Boolean",k="Error",j="Number",i="Array",h="Date",g="RegExp",f="String",e="Object",d="qx.lang.Type",c="string";
qx.Bootstrap.define(d,{statics:{__iF:{"[object String]":f,"[object Array]":i,"[object Object]":e,"[object RegExp]":g,"[object Number]":j,"[object Boolean]":l,"[object Date]":h,"[object Function]":m,"[object Error]":k},getClass:function(o){var p=Object.prototype.toString.call(o);
return (this.__iF[p]||p.slice(8,-1));
},isString:function(t){return (t!==null&&(typeof t===c||this.getClass(t)==f||t instanceof String||(!!t&&!!t.$$isString)));
},isArray:function(r){return (r!==null&&(r instanceof Array||(r&&qx.Class.hasInterface(r.constructor,qx.data.IListData))||this.getClass(r)==i||(!!r&&!!r.$$isArray)));
},isObject:function(s){return (s!==undefined&&s!==null&&this.getClass(s)==e);
},isRegExp:function(a){return this.getClass(a)==g;
},isNumber:function(q){return (q!==null&&(this.getClass(q)==j||q instanceof Number));
},isBoolean:function(b){return (b!==null&&(this.getClass(b)==l||b instanceof Boolean));
},isDate:function(n){return (n!==null&&(this.getClass(n)==h||n instanceof Date));
},isError:function(v){return (v!==null&&(this.getClass(v)==k||v instanceof Error));
},isFunction:function(u){return this.getClass(u)==m;
}}});
})();
(function(){var m="qx.core.Aspect",l="before",k="*",j="static";
qx.Bootstrap.define(m,{statics:{__iJ:[],wrap:function(a,b,c){var h=[];
var d=[];
var g=this.__iJ;
var f;

for(var i=0;i<g.length;i++){f=g[i];

if((f.type==null||c==f.type||f.type==k)&&(f.name==null||a.match(f.name))){f.pos==-1?h.push(f.fcn):d.push(f.fcn);
}}
if(h.length===0&&d.length===0){return b;
}var e=function(){for(var i=0;i<h.length;i++){h[i].call(this,a,b,c,arguments);
}var n=b.apply(this,arguments);

for(var i=0;i<d.length;i++){d[i].call(this,a,b,c,arguments,n);
}return n;
};

if(c!==j){e.self=b.self;
e.base=b.base;
}b.wrapper=e;
e.original=b;
return e;
},addAdvice:function(o,p,q,name){this.__iJ.push({fcn:o,pos:p===l?-1:1,type:q,name:name});
}}});
})();
(function(){var ba="qx.aspects",Y="on",X=".",W="static",V="constructor",U="[Class ",T="]",S="toString",R="member",Q="$$init_",K=".prototype",P="destructor",N="extend",J="destruct",I="Class",M="off",L="qx.Class",O="singleton",H="qx.event.type.Data";
qx.Bootstrap.define(L,{statics:{define:function(name,p){if(!p){var p={};
}if(p.include&&!(p.include instanceof Array)){p.include=[p.include];
}if(p.implement&&!(p.implement instanceof Array)){p.implement=[p.implement];
}if(!p.hasOwnProperty(N)&&!p.type){p.type=W;
}{};
var r=this.__bt(name,p.type,p.extend,p.statics,p.construct,p.destruct);
if(p.extend){if(p.properties){this.__bv(r,p.properties,true);
}if(p.members){this.__bx(r,p.members,true,true,false);
}if(p.events){this.__bu(r,p.events,true);
}if(p.include){for(var i=0,l=p.include.length;i<l;i++){this.__bA(r,p.include[i],false);
}}}if(p.settings){for(var q in p.settings){qx.core.Setting.define(q,p.settings[q]);
}}if(p.variants){for(var q in p.variants){qx.core.Variant.define(q,p.variants[q].allowedValues,p.variants[q].defaultValue);
}}if(p.implement){for(var i=0,l=p.implement.length;i<l;i++){this.__bz(r,p.implement[i]);
}}{};
if(p.defer){p.defer.self=r;
p.defer(r,r.prototype,{add:function(name,j){var k={};
k[name]=j;
qx.Class.__bv(r,k,true);
}});
}return r;
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(bo,bp){{};
qx.Class.__bA(bo,bp,false);
},patch:function(bH,bI){{};
qx.Class.__bA(bH,bI,true);
},isSubClassOf:function(bq,br){if(!bq){return false;
}
if(bq==br){return true;
}
if(bq.prototype instanceof br){return true;
}return false;
},getPropertyDefinition:function(bg,name){while(bg){if(bg.$$properties&&bg.$$properties[name]){return bg.$$properties[name];
}bg=bg.superclass;
}return null;
},getProperties:function(bh){var bi=[];

while(bh){if(bh.$$properties){bi.push.apply(bi,qx.lang.Object.getKeys(bh.$$properties));
}bh=bh.superclass;
}return bi;
},getByProperty:function(s,name){while(s){if(s.$$properties&&s.$$properties[name]){return s;
}s=s.superclass;
}return null;
},hasProperty:function(bD,name){return !!this.getPropertyDefinition(bD,name);
},getEventType:function(A,name){var A=A.constructor;

while(A.superclass){if(A.$$events&&A.$$events[name]!==undefined){return A.$$events[name];
}A=A.superclass;
}return null;
},supportsEvent:function(bG,name){return !!this.getEventType(bG,name);
},hasOwnMixin:function(bB,bC){return bB.$$includes&&bB.$$includes.indexOf(bC)!==-1;
},getByMixin:function(bb,bc){var bd,i,l;

while(bb){if(bb.$$includes){bd=bb.$$flatIncludes;

for(i=0,l=bd.length;i<l;i++){if(bd[i]===bc){return bb;
}}}bb=bb.superclass;
}return null;
},getMixins:function(bE){var bF=[];

while(bE){if(bE.$$includes){bF.push.apply(bF,bE.$$flatIncludes);
}bE=bE.superclass;
}return bF;
},hasMixin:function(be,bf){return !!this.getByMixin(be,bf);
},hasOwnInterface:function(g,h){return g.$$implements&&g.$$implements.indexOf(h)!==-1;
},getByInterface:function(bP,bQ){var bR,i,l;

while(bP){if(bP.$$implements){bR=bP.$$flatImplements;

for(i=0,l=bR.length;i<l;i++){if(bR[i]===bQ){return bP;
}}}bP=bP.superclass;
}return null;
},getInterfaces:function(B){var C=[];

while(B){if(B.$$implements){C.push.apply(C,B.$$flatImplements);
}B=B.superclass;
}return C;
},hasInterface:function(F,G){return !!this.getByInterface(F,G);
},implementsInterface:function(bM,bN){var bO=bM.constructor;

if(this.hasInterface(bO,bN)){return true;
}
try{qx.Interface.assertObject(bM,bN);
return true;
}catch(bA){}
try{qx.Interface.assert(bO,bN,false);
return true;
}catch(bS){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return U+this.classname+T;
},$$registry:qx.Bootstrap.$$registry,__bp:null,__bq:null,__br:function(){},__bs:function(){},__bt:function(name,bW,bX,bY,ca,cb){var cg;

if(!bX&&qx.core.Variant.isSet(ba,M)){cg=bY||{};
qx.Bootstrap.setDisplayNames(cg,name);
}else{cg={};

if(bX){if(!ca){ca=this.__bB();
}cg=this.__bD(ca,name,bW);
qx.Bootstrap.setDisplayName(ca,name,V);
}if(bY){qx.Bootstrap.setDisplayNames(bY,name);
var ch;

for(var i=0,a=qx.lang.Object.getKeys(bY),l=a.length;i<l;i++){ch=a[i];
var cd=bY[ch];

if(qx.core.Variant.isSet(ba,Y)){if(cd instanceof Function){cd=qx.core.Aspect.wrap(name+X+ch,cd,W);
}cg[ch]=cd;
}else{cg[ch]=cd;
}}}}var cf=qx.Bootstrap.createNamespace(name,cg,false);
cg.name=cg.classname=name;
cg.basename=cf;
cg.$$type=I;

if(bW){cg.$$classtype=bW;
}if(!cg.hasOwnProperty(S)){cg.toString=this.genericToString;
}
if(bX){var ci=bX.prototype;
var cc=this.__bC();
cc.prototype=ci;
var ce=new cc;
cg.prototype=ce;
ce.name=ce.classname=name;
ce.basename=cf;
ca.base=cg.superclass=bX;
ca.self=cg.constructor=ce.constructor=cg;
if(cb){if(qx.core.Variant.isSet(ba,Y)){cb=qx.core.Aspect.wrap(name,cb,P);
}cg.$$destructor=cb;
qx.Bootstrap.setDisplayName(cb,name,J);
}}this.$$registry[name]=cg;
return cg;
},__bu:function(cj,ck,cl){var cm,cm;
{};

if(cj.$$events){for(var cm in ck){cj.$$events[cm]=ck[cm];
}}else{cj.$$events=ck;
}},__bv:function(b,c,d){var f;

if(d===undefined){d=false;
}var e=!!b.$$propertiesAttached;

for(var name in c){f=c[name];
{};
f.name=name;
if(!f.refine){if(b.$$properties===undefined){b.$$properties={};
}b.$$properties[name]=f;
}if(f.init!==undefined){b.prototype[Q+name]=f.init;
}if(f.event!==undefined){var event={};
event[f.event]=H;
this.__bu(b,event,d);
}if(f.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(e){qx.core.Property.attachMethods(b,name,f);
}}},__bw:null,__bx:function(bs,bt,bu,bv,bw){var bx=bs.prototype;
var bz,by;
qx.Bootstrap.setDisplayNames(bt,bs.classname+K);

for(var i=0,a=qx.lang.Object.getKeys(bt),l=a.length;i<l;i++){bz=a[i];
by=bt[bz];
{};
if(bv!==false&&by instanceof Function&&by.$$type==null){if(bw==true){by=this.__by(by,bx[bz]);
}else{if(bx[bz]){by.base=bx[bz];
}by.self=bs;
}
if(qx.core.Variant.isSet(ba,Y)){by=qx.core.Aspect.wrap(bs.classname+X+bz,by,R);
}}bx[bz]=by;
}},__by:function(y,z){if(z){return function(){var E=y.base;
y.base=z;
var D=y.apply(this,arguments);
y.base=E;
return D;
};
}else{return y;
}},__bz:function(bJ,bK){{};
var bL=qx.Interface.flatten([bK]);

if(bJ.$$implements){bJ.$$implements.push(bK);
bJ.$$flatImplements.push.apply(bJ.$$flatImplements,bL);
}else{bJ.$$implements=[bK];
bJ.$$flatImplements=bL;
}},__bA:function(t,u,v){{};

if(this.hasMixin(t,u)){return;
}var x=qx.Mixin.flatten([u]);
var w;

for(var i=0,l=x.length;i<l;i++){w=x[i];
if(w.$$events){this.__bu(t,w.$$events,v);
}if(w.$$properties){this.__bv(t,w.$$properties,v);
}if(w.$$members){this.__bx(t,w.$$members,v,v,v);
}}if(t.$$includes){t.$$includes.push(u);
t.$$flatIncludes.push.apply(t.$$flatIncludes,x);
}else{t.$$includes=[u];
t.$$flatIncludes=x;
}},__bB:function(){function bj(){arguments.callee.base.apply(this,arguments);
}return bj;
},__bC:function(){return function(){};
},__bD:function(bk,name,bl){var bn=function(){var bV=arguments.callee.constructor;
{};
if(!bV.$$propertiesAttached){qx.core.Property.attach(bV);
}var bU=bV.$$original.apply(this,arguments);
if(bV.$$includes){var bT=bV.$$flatIncludes;

for(var i=0,l=bT.length;i<l;i++){if(bT[i].$$constructor){bT[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return bU;
};

if(qx.core.Variant.isSet(ba,Y)){var bm=qx.core.Aspect.wrap(name,bn,V);
bn.$$original=bk;
bn.constructor=bm;
bn=bm;
}if(bl===O){bn.getInstance=this.getInstance;
}bn.$$original=bk;
bk.wrapper=bn;
return bn;
}},defer:function(m){if(qx.core.Variant.isSet(ba,Y)){for(var n in qx.Bootstrap.$$registry){var m=qx.Bootstrap.$$registry[n];

for(var o in m){if(m[o] instanceof Function){m[o]=qx.core.Aspect.wrap(n+X+o,m[o],W);
}}}}}});
})();
(function(){var cT=';',cS='computed=this.',cR='=value;',cQ='this.',cP="set",cO="setThemed",cN="setRuntime",cM="init",cL='if(this.',cK='delete this.',bU='!==undefined)',bT='}',bS="resetThemed",bR='else if(this.',bQ="string",bP='return this.',bO="reset",bN="boolean",bM="resetRuntime",bL='!==undefined){',db="refresh",dc='=true;',cY="",da="this.",cW='old=this.',cX="();",cU='else ',cV='if(old===undefined)old=this.',dd='old=computed=this.',de="return this.",ct="get",cs='(value);',cv=";",cu="(a[",cx='if(old===computed)return value;',cw='if(old===undefined)old=null;',cz=' of an instance of ',cy=' is not (yet) ready!");',cr="]);",cq='!==inherit){',C='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',D='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',E='value !== null && value.nodeType === 9 && value.documentElement',F='===value)return value;',G='value !== null && value.$$type === "Mixin"',H='return init;',I='var init=this.',J='value !== null && value.nodeType === 1 && value.attributes',K="Error in property ",L='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',dr="property",dq='.validate.call(this, value);',dp='qx.core.Assert.assertInstance(value, Date, msg) || true',dn='else{',dv=" in method ",du='qx.core.Assert.assertInstance(value, Error, msg) || true',dt='=computed;',ds='Undefined value is not allowed!',dx='(backup);',dw='if(computed===inherit){',bl="inherit",bm='Is invalid!',bj='if(value===undefined)prop.error(this,2,"',bk='var computed, old=this.',bp='else if(computed===undefined)',bq="': ",bn=" of class ",bo='value !== null && value.nodeType !== undefined',bh='===undefined)return;',bi='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',T="')){",S='qx.core.Assert.assertPositiveInteger(value, msg) || true',V='else this.',U='value=this.',P='","',O='if(init==qx.core.Property.$$inherit)init=null;',R='value !== null && value.$$type === "Interface"',Q='var inherit=prop.$$inherit;',N="', qx.event.type.Data, [computed, old]",M="$$useinit_",bv='computed=undefined;delete this.',bw='",value);',bx='computed=value;',by=".",br="$$runtime_",bs='Requires exactly one argument!',bt=';}',bu="$$user_",bz='){',bA='qx.core.Assert.assertArray(value, msg) || true',be='if(computed===undefined||computed===inherit){',bd='qx.core.Assert.assertPositiveNumber(value, msg) || true',bc=".prototype",bb="Boolean",ba=")}",Y='(computed, old, "',X='return value;',W='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bg='}else{',bf="if(reg.hasListener(this, '",bB='Does not allow any arguments!',bC=')a[i].',bD="()",bE="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bF='.$$properties.',bG='value !== null && value.$$type === "Theme"',bH="var reg=qx.event.Registration;",bI="())",bJ='return null;',bK='qx.core.Assert.assertObject(value, msg) || true',bY='");',bX='qx.core.Assert.assertString(value, msg) || true',bW='var pa=this.getLayoutParent();if(pa)computed=pa.',bV='value !== null && value.$$type === "Class"',cd='qx.core.Assert.assertFunction(value, msg) || true',cc='!==undefined&&',cb='var computed, old;',ca='var backup=computed;',cf="on",ce="object",cm="$$init_",cn="$$theme_",ck='if(computed===undefined)computed=null;',cl='qx.core.Assert.assertMap(value, msg) || true',ci="qx.aspects",cj='qx.core.Assert.assertNumber(value, msg) || true',cg='if((computed===undefined||computed===inherit)&&',ch="reg.fireEvent(this, '",co='Null value is not allowed!',cp='qx.core.Assert.assertInteger(value, msg) || true',cD="value",cC="shorthand",cF='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cE='value !== null && value.type !== undefined',cH='value !== null && value.document',cG='throw new Error("Property ',cJ="(!this.",cI='qx.core.Assert.assertBoolean(value, msg) || true',cB='if(a[i].',cA="toggle",dj="$$inherit_",dk='var prop=qx.core.Property;',dl=" with incoming value '",dm="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",df='if(computed===undefined||computed==inherit)computed=null;',dg="qx.core.Property",dh="is",di='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(dg,{statics:{__jP:{"Boolean":cI,"String":bX,"Number":cj,"Integer":cp,"PositiveNumber":bd,"PositiveInteger":S,"Error":du,"RegExp":cF,"Object":bK,"Array":bA,"Map":cl,"Function":cd,"Date":dp,"Node":bo,"Element":J,"Document":E,"Window":cH,"Event":cE,"Class":bV,"Mixin":G,"Interface":R,"Theme":bG,"Color":C,"Decorator":bi,"Font":D},__jQ:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bl,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bQ,dispose:bN,inheritable:bN,nullable:bN,themeable:bN,refine:bN,init:null,apply:bQ,event:bQ,check:null,transform:bQ,deferredInit:bN,validate:null},$$allowedGroupKeys:{name:bQ,group:ce,mode:bQ,themeable:bN},$$inheritable:{},refresh:function(h){var parent=h.getLayoutParent();

if(parent){var m=h.constructor;
var o=this.$$store.inherit;
var n=this.$$store.init;
var k=this.$$method.refresh;
var p;
var j;
{};

while(m){p=m.$$properties;

if(p){for(var name in this.$$inheritable){if(p[name]&&h[k[name]]){j=parent[o[name]];

if(j===undefined){j=parent[n[name]];
}{};
h[k[name]](j);
}}}m=m.superclass;
}}},attach:function(eG){var eH=eG.$$properties;

if(eH){for(var name in eH){this.attachMethods(eG,name,eH[name]);
}}eG.$$propertiesAttached=true;
},attachMethods:function(el,name,em){em.group?this.__jR(el,em,name):this.__jS(el,em,name);
},__jR:function(dJ,dK,name){var dR=qx.lang.String.firstUp(name);
var dQ=dJ.prototype;
var dS=dK.themeable===true;
{};
var dT=[];
var dN=[];

if(dS){var dL=[];
var dP=[];
}var dO=bE;
dT.push(dO);

if(dS){dL.push(dO);
}
if(dK.mode==cC){var dM=dm;
dT.push(dM);

if(dS){dL.push(dM);
}}
for(var i=0,a=dK.group,l=a.length;i<l;i++){{};
dT.push(da,this.$$method.set[a[i]],cu,i,cr);
dN.push(da,this.$$method.reset[a[i]],cX);

if(dS){{};
dL.push(da,this.$$method.setThemed[a[i]],cu,i,cr);
dP.push(da,this.$$method.resetThemed[a[i]],cX);
}}this.$$method.set[name]=cP+dR;
dQ[this.$$method.set[name]]=new Function(dT.join(cY));
this.$$method.reset[name]=bO+dR;
dQ[this.$$method.reset[name]]=new Function(dN.join(cY));

if(dS){this.$$method.setThemed[name]=cO+dR;
dQ[this.$$method.setThemed[name]]=new Function(dL.join(cY));
this.$$method.resetThemed[name]=bS+dR;
dQ[this.$$method.resetThemed[name]]=new Function(dP.join(cY));
}},__jS:function(dX,dY,name){var eb=qx.lang.String.firstUp(name);
var ed=dX.prototype;
{};
if(dY.dispose===undefined&&typeof dY.check===bQ){dY.dispose=this.__jQ[dY.check]||qx.Class.isDefined(dY.check)||qx.Interface.isDefined(dY.check);
}var ec=this.$$method;
var ea=this.$$store;
ea.runtime[name]=br+name;
ea.user[name]=bu+name;
ea.theme[name]=cn+name;
ea.init[name]=cm+name;
ea.inherit[name]=dj+name;
ea.useinit[name]=M+name;
ec.get[name]=ct+eb;
ed[ec.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,dX,name,ct);
};
ec.set[name]=cP+eb;
ed[ec.set[name]]=function(dy){return qx.core.Property.executeOptimizedSetter(this,dX,name,cP,arguments);
};
ec.reset[name]=bO+eb;
ed[ec.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dX,name,bO);
};

if(dY.inheritable||dY.apply||dY.event||dY.deferredInit){ec.init[name]=cM+eb;
ed[ec.init[name]]=function(B){return qx.core.Property.executeOptimizedSetter(this,dX,name,cM,arguments);
};
}
if(dY.inheritable){ec.refresh[name]=db+eb;
ed[ec.refresh[name]]=function(eN){return qx.core.Property.executeOptimizedSetter(this,dX,name,db,arguments);
};
}ec.setRuntime[name]=cN+eb;
ed[ec.setRuntime[name]]=function(eO){return qx.core.Property.executeOptimizedSetter(this,dX,name,cN,arguments);
};
ec.resetRuntime[name]=bM+eb;
ed[ec.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dX,name,bM);
};

if(dY.themeable){ec.setThemed[name]=cO+eb;
ed[ec.setThemed[name]]=function(et){return qx.core.Property.executeOptimizedSetter(this,dX,name,cO,arguments);
};
ec.resetThemed[name]=bS+eb;
ed[ec.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dX,name,bS);
};
}
if(dY.check===bb){ed[cA+eb]=new Function(de+ec.set[name]+cJ+ec.get[name]+bI);
ed[dh+eb]=new Function(de+ec.get[name]+bD);
}},__jT:{0:di,1:bs,2:ds,3:bB,4:co,5:bm},error:function(eu,ev,ew,ex,ey){var ez=eu.constructor.classname;
var eA=K+ew+bn+ez+dv+this.$$method[ex][ew]+dl+ey+bq;
throw new Error(eA+(this.__jT[ev]||"Unknown reason: "+ev));
},__jU:function(en,eo,name,ep,eq,er){var es=this.$$method[ep][name];
{eo[es]=new Function(cD,eq.join(cY));
};
if(qx.core.Variant.isSet(ci,cf)){eo[es]=qx.core.Aspect.wrap(en.classname+by+es,eo[es],dr);
}qx.Bootstrap.setDisplayName(eo[es],en.classname+bc,es);
if(er===undefined){return en[es]();
}else{return en[es](er[0]);
}},executeOptimizedGetter:function(q,r,name,s){var u=r.$$properties[name];
var w=r.prototype;
var t=[];
var v=this.$$store;
t.push(cL,v.runtime[name],bU);
t.push(bP,v.runtime[name],cT);

if(u.inheritable){t.push(bR,v.inherit[name],bU);
t.push(bP,v.inherit[name],cT);
t.push(cU);
}t.push(cL,v.user[name],bU);
t.push(bP,v.user[name],cT);

if(u.themeable){t.push(bR,v.theme[name],bU);
t.push(bP,v.theme[name],cT);
}
if(u.deferredInit&&u.init===undefined){t.push(bR,v.init[name],bU);
t.push(bP,v.init[name],cT);
}t.push(cU);

if(u.init!==undefined){if(u.inheritable){t.push(I,v.init[name],cT);

if(u.nullable){t.push(O);
}else if(u.init!==undefined){t.push(bP,v.init[name],cT);
}else{t.push(W,name,cz,r.classname,cy);
}t.push(H);
}else{t.push(bP,v.init[name],cT);
}}else if(u.inheritable||u.nullable){t.push(bJ);
}else{t.push(cG,name,cz,r.classname,cy);
}return this.__jU(q,w,name,s,t);
},executeOptimizedSetter:function(dz,dA,name,dB,dC){var dH=dA.$$properties[name];
var dG=dA.prototype;
var dE=[];
var dD=dB===cP||dB===cO||dB===cN||(dB===cM&&dH.init===undefined);
var dF=dH.apply||dH.event||dH.inheritable;
var dI=this.__jV(dB,name);
this.__jW(dE,dH,name,dB,dD);

if(dD){this.__jX(dE,dA,dH,name);
}
if(dF){this.__jY(dE,dD,dI,dB);
}
if(dH.inheritable){dE.push(Q);
}{};

if(!dF){this.__kb(dE,name,dB,dD);
}else{this.__kc(dE,dH,name,dB,dD);
}
if(dH.inheritable){this.__kd(dE,dH,name,dB);
}else if(dF){this.__ke(dE,dH,name,dB);
}
if(dF){this.__kf(dE,dH,name);
if(dH.inheritable&&dG._getChildren){this.__kg(dE,name);
}}if(dD){dE.push(X);
}return this.__jU(dz,dG,name,dB,dE,dC);
},__jV:function(eL,name){if(eL===cN||eL===bM){var eM=this.$$store.runtime[name];
}else if(eL===cO||eL===bS){eM=this.$$store.theme[name];
}else if(eL===cM){eM=this.$$store.init[name];
}else{eM=this.$$store.user[name];
}return eM;
},__jW:function(b,c,name,d,e){{if(!c.nullable||c.check||c.inheritable){b.push(dk);
}if(d===cP){b.push(bj,name,P,d,bw);
}};
},__jX:function(ef,eg,eh,name){if(eh.transform){ef.push(U,eh.transform,cs);
}if(eh.validate){if(typeof eh.validate===bQ){ef.push(cQ,eh.validate,cs);
}else if(eh.validate instanceof Function){ef.push(eg.classname,bF,name);
ef.push(dq);
}}},__jY:function(eB,eC,eD,eE){var eF=(eE===bO||eE===bS||eE===bM);

if(eC){eB.push(cL,eD,F);
}else if(eF){eB.push(cL,eD,bh);
}},__ka:undefined,__kb:function(ei,name,ej,ek){if(ej===cN){ei.push(cQ,this.$$store.runtime[name],cR);
}else if(ej===bM){ei.push(cL,this.$$store.runtime[name],bU);
ei.push(cK,this.$$store.runtime[name],cT);
}else if(ej===cP){ei.push(cQ,this.$$store.user[name],cR);
}else if(ej===bO){ei.push(cL,this.$$store.user[name],bU);
ei.push(cK,this.$$store.user[name],cT);
}else if(ej===cO){ei.push(cQ,this.$$store.theme[name],cR);
}else if(ej===bS){ei.push(cL,this.$$store.theme[name],bU);
ei.push(cK,this.$$store.theme[name],cT);
}else if(ej===cM&&ek){ei.push(cQ,this.$$store.init[name],cR);
}},__kc:function(x,y,name,z,A){if(y.inheritable){x.push(bk,this.$$store.inherit[name],cT);
}else{x.push(cb);
}x.push(cL,this.$$store.runtime[name],bL);

if(z===cN){x.push(cS,this.$$store.runtime[name],cR);
}else if(z===bM){x.push(cK,this.$$store.runtime[name],cT);
x.push(cL,this.$$store.user[name],bU);
x.push(cS,this.$$store.user[name],cT);
x.push(bR,this.$$store.theme[name],bU);
x.push(cS,this.$$store.theme[name],cT);
x.push(bR,this.$$store.init[name],bL);
x.push(cS,this.$$store.init[name],cT);
x.push(cQ,this.$$store.useinit[name],dc);
x.push(bT);
}else{x.push(dd,this.$$store.runtime[name],cT);
if(z===cP){x.push(cQ,this.$$store.user[name],cR);
}else if(z===bO){x.push(cK,this.$$store.user[name],cT);
}else if(z===cO){x.push(cQ,this.$$store.theme[name],cR);
}else if(z===bS){x.push(cK,this.$$store.theme[name],cT);
}else if(z===cM&&A){x.push(cQ,this.$$store.init[name],cR);
}}x.push(bT);
x.push(bR,this.$$store.user[name],bL);

if(z===cP){if(!y.inheritable){x.push(cW,this.$$store.user[name],cT);
}x.push(cS,this.$$store.user[name],cR);
}else if(z===bO){if(!y.inheritable){x.push(cW,this.$$store.user[name],cT);
}x.push(cK,this.$$store.user[name],cT);
x.push(cL,this.$$store.runtime[name],bU);
x.push(cS,this.$$store.runtime[name],cT);
x.push(cL,this.$$store.theme[name],bU);
x.push(cS,this.$$store.theme[name],cT);
x.push(bR,this.$$store.init[name],bL);
x.push(cS,this.$$store.init[name],cT);
x.push(cQ,this.$$store.useinit[name],dc);
x.push(bT);
}else{if(z===cN){x.push(cS,this.$$store.runtime[name],cR);
}else if(y.inheritable){x.push(cS,this.$$store.user[name],cT);
}else{x.push(dd,this.$$store.user[name],cT);
}if(z===cO){x.push(cQ,this.$$store.theme[name],cR);
}else if(z===bS){x.push(cK,this.$$store.theme[name],cT);
}else if(z===cM&&A){x.push(cQ,this.$$store.init[name],cR);
}}x.push(bT);
if(y.themeable){x.push(bR,this.$$store.theme[name],bL);

if(!y.inheritable){x.push(cW,this.$$store.theme[name],cT);
}
if(z===cN){x.push(cS,this.$$store.runtime[name],cR);
}else if(z===cP){x.push(cS,this.$$store.user[name],cR);
}else if(z===cO){x.push(cS,this.$$store.theme[name],cR);
}else if(z===bS){x.push(cK,this.$$store.theme[name],cT);
x.push(cL,this.$$store.init[name],bL);
x.push(cS,this.$$store.init[name],cT);
x.push(cQ,this.$$store.useinit[name],dc);
x.push(bT);
}else if(z===cM){if(A){x.push(cQ,this.$$store.init[name],cR);
}x.push(cS,this.$$store.theme[name],cT);
}else if(z===db){x.push(cS,this.$$store.theme[name],cT);
}x.push(bT);
}x.push(bR,this.$$store.useinit[name],bz);

if(!y.inheritable){x.push(cW,this.$$store.init[name],cT);
}
if(z===cM){if(A){x.push(cS,this.$$store.init[name],cR);
}else{x.push(cS,this.$$store.init[name],cT);
}}else if(z===cP||z===cN||z===cO||z===db){x.push(cK,this.$$store.useinit[name],cT);

if(z===cN){x.push(cS,this.$$store.runtime[name],cR);
}else if(z===cP){x.push(cS,this.$$store.user[name],cR);
}else if(z===cO){x.push(cS,this.$$store.theme[name],cR);
}else if(z===db){x.push(cS,this.$$store.init[name],cT);
}}x.push(bT);
if(z===cP||z===cN||z===cO||z===cM){x.push(dn);

if(z===cN){x.push(cS,this.$$store.runtime[name],cR);
}else if(z===cP){x.push(cS,this.$$store.user[name],cR);
}else if(z===cO){x.push(cS,this.$$store.theme[name],cR);
}else if(z===cM){if(A){x.push(cS,this.$$store.init[name],cR);
}else{x.push(cS,this.$$store.init[name],cT);
}x.push(cQ,this.$$store.useinit[name],dc);
}x.push(bT);
}},__kd:function(eI,eJ,name,eK){eI.push(be);

if(eK===db){eI.push(bx);
}else{eI.push(bW,this.$$store.inherit[name],cT);
}eI.push(cg);
eI.push(cQ,this.$$store.init[name],cc);
eI.push(cQ,this.$$store.init[name],cq);
eI.push(cS,this.$$store.init[name],cT);
eI.push(cQ,this.$$store.useinit[name],dc);
eI.push(bg);
eI.push(cK,this.$$store.useinit[name],bt);
eI.push(bT);
eI.push(cx);
eI.push(dw);
eI.push(bv,this.$$store.inherit[name],cT);
eI.push(bT);
eI.push(bp);
eI.push(cK,this.$$store.inherit[name],cT);
eI.push(V,this.$$store.inherit[name],dt);
eI.push(ca);
if(eJ.init!==undefined&&eK!==cM){eI.push(cV,this.$$store.init[name],cv);
}else{eI.push(cw);
}eI.push(df);
},__ke:function(dU,dV,name,dW){if(dW!==cP&&dW!==cN&&dW!==cO){dU.push(ck);
}dU.push(cx);
if(dV.init!==undefined&&dW!==cM){dU.push(cV,this.$$store.init[name],cv);
}else{dU.push(cw);
}},__kf:function(f,g,name){if(g.apply){f.push(cQ,g.apply,Y,name,bY);
}if(g.event){f.push(bH,bf,g.event,T,ch,g.event,N,ba);
}},__kg:function(ee,name){ee.push(L);
ee.push(cB,this.$$method.refresh[name],bC,this.$$method.refresh[name],dx);
ee.push(bT);
}}});
})();
(function(){var f="$$hash",e="qx.core.ObjectRegistry";
qx.Bootstrap.define(e,{statics:{inShutDown:false,__gu:{},__gv:0,__gw:[],register:function(g){var k=this.__gu;

if(!k){return;
}var j=g.$$hash;

if(j==null){var h=this.__gw;

if(h.length>0){j=h.pop();
}else{j=(this.__gv++).toString(36);
}g.$$hash=j;
}{};
k[j]=g;
},unregister:function(n){var o=n.$$hash;

if(o==null){return;
}var p=this.__gu;

if(p&&p[o]){delete p[o];
this.__gw.push(o);
}try{delete n.$$hash;
}catch(r){if(n.removeAttribute){n.removeAttribute(f);
}}},toHashCode:function(s){{};
var u=s.$$hash;

if(u!=null){return u;
}var t=this.__gw;

if(t.length>0){u=t.pop();
}else{u=(this.__gv++).toString(36);
}return s.$$hash=u;
},clearHashCode:function(c){{};
var d=c.$$hash;

if(d!=null){this.__gw.push(d);
try{delete c.$$hash;
}catch(m){if(c.removeAttribute){c.removeAttribute(f);
}}}},fromHashCode:function(q){return this.__gu[q]||null;
},shutdown:function(){this.inShutDown=true;
var w=this.__gu;
var y=[];

for(var x in w){y.push(x);
}y.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var v,i=0,l=y.length;

while(true){try{for(;i<l;i++){x=y[i];
v=w[x];

if(v&&v.dispose){v.dispose();
}}}catch(z){qx.log.Logger.error(this,"Could not dispose object "+v.toString()+": "+z);

if(i!==l){i++;
continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__gu;
},getRegistry:function(){return this.__gu;
}}});
})();
(function(){var o="qx.Mixin",n=".prototype",m="constructor",k="[Mixin ",j="]",h="destruct",g="Mixin";
qx.Bootstrap.define(o,{statics:{define:function(name,a){if(a){if(a.include&&!(a.include instanceof Array)){a.include=[a.include];
}{};
var c=a.statics?a.statics:{};
qx.Bootstrap.setDisplayNames(c,name);

for(var b in c){if(c[b] instanceof Function){c[b].$$mixin=c;
}}if(a.construct){c.$$constructor=a.construct;
qx.Bootstrap.setDisplayName(a.construct,name,m);
}
if(a.include){c.$$includes=a.include;
}
if(a.properties){c.$$properties=a.properties;
}
if(a.members){c.$$members=a.members;
qx.Bootstrap.setDisplayNames(a.members,name+n);
}
for(var b in c.$$members){if(c.$$members[b] instanceof Function){c.$$members[b].$$mixin=c;
}}
if(a.events){c.$$events=a.events;
}
if(a.destruct){c.$$destructor=a.destruct;
qx.Bootstrap.setDisplayName(a.destruct,name,h);
}}else{var c={};
}c.$$type=g;
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
},isCompatible:function(d,e){var f=qx.Class.getMixins(e);
f.push(d);
return qx.Mixin.checkCompatibility(f);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return k+this.name+j;
},$$registry:{},__dw:null,__dx:function(){}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var p="qx.client",o="on",n="function",m="mousedown",l="qx.bom.Event",k="return;",j="mouseover",i="HTMLEvents";
qx.Bootstrap.define(l,{statics:{addNativeListener:qx.core.Variant.select(p,{"mshtml":function(b,c,d){b.attachEvent(o+c,d);
},"default":function(f,g,h){f.addEventListener(g,h,false);
}}),removeNativeListener:qx.core.Variant.select(p,{"mshtml":function(q,r,s){try{q.detachEvent(o+r,s);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(A,B,C){A.removeEventListener(B,C,false);
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
}catch(a){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(F){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(x,y){if(document.createEventObject){var z=document.createEventObject();
return x.fireEvent(o+y,z);
}else{var z=document.createEvent(i);
z.initEvent(y,true,true);
return !x.dispatchEvent(z);
}},supportsEvent:qx.core.Variant.select(p,{"webkit":function(D,E){return D.hasOwnProperty(o+E);
},"default":function(t,u){var v=o+u;
var w=(v in t);

if(!w){w=typeof t[v]==n;

if(!w&&t.setAttribute){t.setAttribute(v,k);
w=typeof t[v]==n;
t.removeAttribute(v);
}}return w;
}})}});
})();
(function(){var bh="|bubble",bg="|capture",bf="|",be="_",bd="unload",bc="__er",bb="UNKNOWN_",ba="DOM_",Y="__es",X="c",U="WIN_",W="capture",V="qx.event.Manager",T="QX_";
qx.Bootstrap.define(V,{construct:function(bm,bn){this.__en=bm;
this.__eo=qx.core.ObjectRegistry.toHashCode(bm);
this.__ep=bn;
if(bm.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(bm,bd,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(bm,bd,arguments.callee);
self.dispose();
}));
}this.__eq={};
this.__er={};
this.__es={};
this.__et={};
},statics:{__eu:0,getNextUniqueId:function(){return (this.__eu++).toString(36);
}},members:{__ep:null,__eq:null,__es:null,__ev:null,__er:null,__et:null,__en:null,__eo:null,getWindow:function(){return this.__en;
},getWindowId:function(){return this.__eo;
},getHandler:function(bo){var bp=this.__er[bo.classname];

if(bp){return bp;
}return this.__er[bo.classname]=new bo(this);
},getDispatcher:function(bA){var bB=this.__es[bA.classname];

if(bB){return bB;
}return this.__es[bA.classname]=new bA(this,this.__ep);
},getListeners:function(bG,bH,bI){var bJ=bG.$$hash||qx.core.ObjectRegistry.toHashCode(bG);
var bL=this.__eq[bJ];

if(!bL){return null;
}var bM=bH+(bI?bg:bh);
var bK=bL[bM];
return bK?bK.concat():null;
},serializeListeners:function(bN){var bU=bN.$$hash||qx.core.ObjectRegistry.toHashCode(bN);
var bW=this.__eq[bU];
var bS=[];

if(bW){var bQ,bV,bO,bR,bT;

for(var bP in bW){bQ=bP.indexOf(bf);
bV=bP.substring(0,bQ);
bO=bP.charAt(bQ+1)==X;
bR=bW[bP];

for(var i=0,l=bR.length;i<l;i++){bT=bR[i];
bS.push({self:bT.context,handler:bT.handler,type:bV,capture:bO});
}}}return bS;
},toggleAttachedEvents:function(bX,bY){var ce=bX.$$hash||qx.core.ObjectRegistry.toHashCode(bX);
var cg=this.__eq[ce];

if(cg){var cb,cf,ca,cc;

for(var cd in cg){cb=cd.indexOf(bf);
cf=cd.substring(0,cb);
ca=cd.charCodeAt(cb+1)===99;
cc=cg[cd];

if(bY){this.__ew(bX,cf,ca);
}else{this.__ex(bX,cf,ca);
}}}},hasListener:function(co,cp,cq){{};
var cr=co.$$hash||qx.core.ObjectRegistry.toHashCode(co);
var ct=this.__eq[cr];

if(!ct){return false;
}var cu=cp+(cq?bg:bh);
var cs=ct[cu];
return cs&&cs.length>0;
},importListeners:function(cv,cw){{};
var cC=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);
var cD=this.__eq[cC]={};
var cz=qx.event.Manager;

for(var cx in cw){var cA=cw[cx];
var cB=cA.type+(cA.capture?bg:bh);
var cy=cD[cB];

if(!cy){cy=cD[cB]=[];
this.__ew(cv,cA.type,cA.capture);
}cy.push({handler:cA.listener,context:cA.self,unique:cA.unique||(cz.__eu++).toString(36)});
}},addListener:function(I,J,K,self,L){var P;
{};
var Q=I.$$hash||qx.core.ObjectRegistry.toHashCode(I);
var S=this.__eq[Q];

if(!S){S=this.__eq[Q]={};
}var O=J+(L?bg:bh);
var N=S[O];

if(!N){N=S[O]=[];
}if(N.length===0){this.__ew(I,J,L);
}var R=(qx.event.Manager.__eu++).toString(36);
var M={handler:K,context:self,unique:R};
N.push(M);
return O+bf+R;
},findHandler:function(a,b){var n=false,e=false,o=false;
var m;

if(a.nodeType===1){n=true;
m=ba+a.tagName.toLowerCase()+be+b;
}else if(a==this.__en){e=true;
m=U+b;
}else if(a.classname){o=true;
m=T+a.classname+be+b;
}else{m=bb+a+be+b;
}var g=this.__et;

if(g[m]){return g[m];
}var k=this.__ep.getHandlers();
var f=qx.event.IEventHandler;
var h,j,d,c;

for(var i=0,l=k.length;i<l;i++){h=k[i];
d=h.SUPPORTED_TYPES;

if(d&&!d[b]){continue;
}c=h.TARGET_CHECK;

if(c){if(!n&&c===f.TARGET_DOMNODE){continue;
}else if(!e&&c===f.TARGET_WINDOW){continue;
}else if(!o&&c===f.TARGET_OBJECT){continue;
}}j=this.getHandler(k[i]);

if(h.IGNORE_CAN_HANDLE||j.canHandleEvent(a,b)){g[m]=j;
return j;
}}return null;
},__ew:function(bC,bD,bE){var bF=this.findHandler(bC,bD);

if(bF){bF.registerEvent(bC,bD,bE);
return;
}{};
},removeListener:function(bq,br,bs,self,bt){var bx;
{};
var by=bq.$$hash||qx.core.ObjectRegistry.toHashCode(bq);
var bz=this.__eq[by];

if(!bz){return false;
}var bu=br+(bt?bg:bh);
var bv=bz[bu];

if(!bv){return false;
}var bw;

for(var i=0,l=bv.length;i<l;i++){bw=bv[i];

if(bw.handler===bs&&bw.context===self){qx.lang.Array.removeAt(bv,i);

if(bv.length==0){this.__ex(bq,br,bt);
}return true;
}}return false;
},removeListenerById:function(w,x){var D;
{};
var B=x.split(bf);
var G=B[0];
var y=B[1].charCodeAt(0)==99;
var F=B[2];
var E=w.$$hash||qx.core.ObjectRegistry.toHashCode(w);
var H=this.__eq[E];

if(!H){return false;
}var C=G+(y?bg:bh);
var A=H[C];

if(!A){return false;
}var z;

for(var i=0,l=A.length;i<l;i++){z=A[i];

if(z.unique===F){qx.lang.Array.removeAt(A,i);

if(A.length==0){this.__ex(w,G,y);
}return true;
}}return false;
},removeAllListeners:function(ch){var cl=ch.$$hash||qx.core.ObjectRegistry.toHashCode(ch);
var cn=this.__eq[cl];

if(!cn){return false;
}var cj,cm,ci;

for(var ck in cn){if(cn[ck].length>0){cj=ck.split(bf);
cm=cj[0];
ci=cj[1]===W;
this.__ex(ch,cm,ci);
}}delete this.__eq[cl];
return true;
},__ex:function(bi,bj,bk){var bl=this.findHandler(bi,bj);

if(bl){bl.unregisterEvent(bi,bj,bk);
return;
}{};
},dispatchEvent:function(p,event){var u;
{};
var v=event.getType();

if(!event.getBubbles()&&!this.hasListener(p,v)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(p);
}var t=this.__ep.getDispatchers();
var s;
var r=false;

for(var i=0,l=t.length;i<l;i++){s=this.getDispatcher(t[i]);
if(s.canDispatchEvent(p,event,v)){s.dispatchEvent(p,event,v);
r=true;
break;
}}
if(!r){qx.log.Logger.error(this,"No dispatcher can handle event of type "+v+" on "+p);
return true;
}var q=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !q;
},dispose:function(){this.__ep.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,bc);
qx.util.DisposeUtil.disposeMap(this,Y);
this.__eq=this.__en=this.__ev=null;
this.__ep=this.__et=null;
}}});
})();
(function(){var k="qx.dom.Node",j="qx.client",h="";
qx.Bootstrap.define(k,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(n){return n.nodeType===
this.DOCUMENT?n:
n.ownerDocument||n.document;
},getWindow:qx.core.Variant.select(j,{"mshtml":function(d){if(d.nodeType==null){return d;
}if(d.nodeType!==this.DOCUMENT){d=d.ownerDocument;
}return d.parentWindow;
},"default":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.defaultView;
}}),getDocumentElement:function(r){return this.getDocument(r).documentElement;
},getBodyElement:function(o){return this.getDocument(o).body;
},isNode:function(e){return !!(e&&e.nodeType!=null);
},isElement:function(c){return !!(c&&c.nodeType===this.ELEMENT);
},isDocument:function(f){return !!(f&&f.nodeType===this.DOCUMENT);
},isText:function(p){return !!(p&&p.nodeType===this.TEXT);
},isWindow:function(b){return !!(b&&b.history&&b.location&&b.document);
},isNodeName:function(l,m){if(!m||!l||!l.nodeName){return false;
}return m.toLowerCase()==qx.dom.Node.getName(l);
},getName:function(q){if(!q||!q.nodeName){return null;
}return q.nodeName.toLowerCase();
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
(function(){var C="mshtml",B="qx.client",A="[object Array]",z="qx.lang.Array",y="qx",x="number",w="string";
qx.Bootstrap.define(z,{statics:{toArray:function(R,S){return this.cast(R,Array,S);
},cast:function(h,j,k){if(h.constructor===j){return h;
}
if(qx.Class.hasInterface(h,qx.data.IListData)){var h=h.toArray();
}var m=new j;
if(qx.core.Variant.isSet(B,C)){if(h.item){for(var i=k||0,l=h.length;i<l;i++){m.push(h[i]);
}return m;
}}if(Object.prototype.toString.call(h)===A&&k==null){m.push.apply(m,h);
}else{m.push.apply(m,Array.prototype.slice.call(h,k||0));
}return m;
},fromArguments:function(T,U){return Array.prototype.slice.call(T,U||0);
},fromCollection:function(f){if(qx.core.Variant.isSet(B,C)){if(f.item){var g=[];

for(var i=0,l=f.length;i<l;i++){g[i]=f[i];
}return g;
}}return Array.prototype.slice.call(f,0);
},fromShortHand:function(bb){var bd=bb.length;
var bc=qx.lang.Array.clone(bb);
switch(bd){case 1:bc[1]=bc[2]=bc[3]=bc[0];
break;
case 2:bc[2]=bc[0];
case 3:bc[3]=bc[1];
}return bc;
},clone:function(v){return v.concat();
},insertAt:function(q,r,i){q.splice(i,0,r);
return q;
},insertBefore:function(O,P,Q){var i=O.indexOf(Q);

if(i==-1){O.push(P);
}else{O.splice(i,0,P);
}return O;
},insertAfter:function(E,F,G){var i=E.indexOf(G);

if(i==-1||i==(E.length-1)){E.push(F);
}else{E.splice(i+1,0,F);
}return E;
},removeAt:function(n,i){return n.splice(i,1)[0];
},removeAll:function(V){V.length=0;
return this;
},append:function(t,u){{};
Array.prototype.push.apply(t,u);
return t;
},exclude:function(K,L){{};

for(var i=0,N=L.length,M;i<N;i++){M=K.indexOf(L[i]);

if(M!=-1){K.splice(M,1);
}}return K;
},remove:function(W,X){var i=W.indexOf(X);

if(i!=-1){W.splice(i,1);
return X;
}},contains:function(Y,ba){return Y.indexOf(ba)!==-1;
},equals:function(a,b){var length=a.length;

if(length!==b.length){return false;
}
for(var i=0;i<length;i++){if(a[i]!==b[i]){return false;
}}return true;
},sum:function(o){var p=0;

for(var i=0,l=o.length;i<l;i++){p+=o[i];
}return p;
},max:function(c){{};
var i,e=c.length,d=c[0];

for(i=1;i<e;i++){if(c[i]>d){d=c[i];
}}return d===undefined?null:d;
},min:function(H){{};
var i,J=H.length,I=H[0];

for(i=1;i<J;i++){if(H[i]<I){I=H[i];
}}return I===undefined?null:I;
},unique:function(be){var bo=[],bg={},bj={},bl={};
var bk,bf=0;
var bp=y+qx.lang.Date.now();
var bh=false,bn=false,bq=false;
for(var i=0,bm=be.length;i<bm;i++){bk=be[i];
if(bk===null){if(!bh){bh=true;
bo.push(bk);
}}else if(bk===undefined){}else if(bk===false){if(!bn){bn=true;
bo.push(bk);
}}else if(bk===true){if(!bq){bq=true;
bo.push(bk);
}}else if(typeof bk===w){if(!bg[bk]){bg[bk]=1;
bo.push(bk);
}}else if(typeof bk===x){if(!bj[bk]){bj[bk]=1;
bo.push(bk);
}}else{bi=bk[bp];

if(bi==null){bi=bk[bp]=bf++;
}
if(!bl[bi]){bl[bi]=bk;
bo.push(bk);
}}}for(var bi in bl){try{delete bl[bi][bp];
}catch(D){try{bl[bi][bp]=null;
}catch(s){throw new Error("Cannot clean-up map entry doneObjects["+bi+"]["+bp+"]");
}}}return bo;
}}});
})();
(function(){var q="()",p=".",o=".prototype.",n='anonymous()',m="qx.lang.Function",l=".constructor()";
qx.Bootstrap.define(m,{statics:{getCaller:function(a){return a.caller?a.caller.callee:a.callee.caller;
},getName:function(g){if(g.displayName){return g.displayName;
}
if(g.$$original||g.wrapper||g.classname){return g.classname+l;
}
if(g.$$mixin){for(var i in g.$$mixin.$$members){if(g.$$mixin.$$members[i]==g){return g.$$mixin.name+o+i+q;
}}for(var i in g.$$mixin){if(g.$$mixin[i]==g){return g.$$mixin.name+p+i+q;
}}}
if(g.self){var j=g.self.constructor;

if(j){for(var i in j.prototype){if(j.prototype[i]==g){return j.classname+o+i+q;
}}for(var i in j){if(j[i]==g){return j.classname+p+i+q;
}}}}var h=g.toString().match(/function\s*(\w*)\s*\(.*/);

if(h&&h.length>=1&&h[1]){return h[1]+q;
}return n;
},globalEval:function(x){if(window.execScript){return window.execScript(x);
}else{return eval.call(window,x);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(D,E){{};
if(!E){return D;
}if(!(E.self||E.args||E.delay!=null||E.periodical!=null||E.attempt)){return D;
}return function(event){{};
var G=qx.lang.Array.fromArguments(arguments);
if(E.args){G=E.args.concat(G);
}
if(E.delay||E.periodical){var F=qx.event.GlobalError.observeMethod(function(){return D.apply(E.self||this,G);
});

if(E.delay){return window.setTimeout(F,E.delay);
}
if(E.periodical){return window.setInterval(F,E.periodical);
}}else if(E.attempt){var H=false;

try{H=D.apply(E.self||this,G);
}catch(w){}return H;
}else{return D.apply(E.self||this,G);
}};
},bind:function(y,self,z){return this.create(y,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(r,s){return this.create(r,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(A,self,B){if(arguments.length<3){return function(event){return A.call(self||this,event||window.event);
};
}else{var C=qx.lang.Array.fromArguments(arguments,2);
return function(event){var k=[event||window.event];
k.push.apply(k,C);
A.apply(self||this,k);
};
}},attempt:function(e,self,f){return this.create(e,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(b,c,self,d){return this.create(b,{delay:c,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(t,u,self,v){return this.create(t,{periodical:u,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var u="qx.event.Registration";
qx.Bootstrap.define(u,{statics:{__ec:{},getManager:function(z){if(z==null){{};
z=window;
}else if(z.nodeType){z=qx.dom.Node.getWindow(z);
}else if(!qx.dom.Node.isWindow(z)){z=window;
}var B=z.$$hash||qx.core.ObjectRegistry.toHashCode(z);
var A=this.__ec[B];

if(!A){A=new qx.event.Manager(z,this);
this.__ec[B]=A;
}return A;
},removeManager:function(J){var K=J.getWindowId();
delete this.__ec[K];
},addListener:function(D,E,F,self,G){return this.getManager(D).addListener(D,E,F,self,G);
},removeListener:function(v,w,x,self,y){return this.getManager(v).removeListener(v,w,x,self,y);
},removeListenerById:function(s,t){return this.getManager(s).removeListenerById(s,t);
},removeAllListeners:function(c){return this.getManager(c).removeAllListeners(c);
},hasListener:function(d,e,f){return this.getManager(d).hasListener(d,e,f);
},serializeListeners:function(I){return this.getManager(I).serializeListeners(I);
},createEvent:function(N,O,P){{};
if(O==null){O=qx.event.type.Event;
}var Q=qx.event.Pool.getInstance().getObject(O);

if(!Q){return;
}P?Q.init.apply(Q,P):Q.init();
if(N){Q.setType(N);
}return Q;
},dispatchEvent:function(H,event){return this.getManager(H).dispatchEvent(H,event);
},fireEvent:function(m,n,o,p){var q;
{};
var r=this.createEvent(n,o||null,p);
return this.getManager(m).dispatchEvent(m,r);
},fireNonBubblingEvent:function(g,h,i,j){{};
var k=this.getManager(g);

if(!k.hasListener(g,h,false)){return true;
}var l=this.createEvent(h,i||null,j);
return k.dispatchEvent(g,l);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__ed:[],addHandler:function(C){{};
this.__ed.push(C);
this.__ed.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__ed;
},__ee:[],addDispatcher:function(L,M){{};
this.__ee.push(L);
this.__ee.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__ee;
}}});
})();
(function(){var g="qx.log.appender.RingBuffer";
qx.Bootstrap.define(g,{construct:function(i){this.__jG=[];
this.setMaxMessages(i||50);
},members:{__jH:0,__jG:null,__jI:50,setMaxMessages:function(h){this.__jI=h;
this.clearHistory();
},getMaxMessages:function(){return this.__jI;
},process:function(a){var b=this.getMaxMessages();

if(this.__jG.length<b){this.__jG.push(a);
}else{this.__jG[this.__jH++]=a;

if(this.__jH>=b){this.__jH=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(c){if(c>this.__jG.length){c=this.__jG.length;
}
if(this.__jG.length==this.getMaxMessages()){var e=this.__jH-1;
}else{e=this.__jG.length-1;
}var d=e-c+1;

if(d<0){d+=this.__jG.length;
}var f;

if(d<=e){f=this.__jG.slice(d,e+1);
}else{f=this.__jG.slice(d,this.__jG.length).concat(this.__jG.slice(0,e+1));
}return f;
},clearHistory:function(){this.__jG=[];
this.__jH=0;
}}});
})();
(function(){var w="node",v="error",u="...(+",t="array",s=")",r="info",q="instance",p="string",o="null",n="class",R="number",Q="stringify",P="]",O="unknown",N="function",M="boolean",L="debug",K="map",J="undefined",I="qx.log.Logger",D=")}",E="#",B="warn",C="document",z="{...(",A="[",x="text[",y="[...(",F="\n",G=")]",H="object";
qx.Bootstrap.define(I,{statics:{__ef:L,setLevel:function(bE){this.__ef=bE;
},getLevel:function(){return this.__ef;
},setTreshold:function(bI){this.__ei.setMaxMessages(bI);
},getTreshold:function(){return this.__ei.getMaxMessages();
},__eg:{},__eh:0,register:function(bF){if(bF.$$id){return;
}var bG=this.__eh++;
this.__eg[bG]=bF;
bF.$$id=bG;
var bH=this.__ei.getAllLogEvents();

for(var i=0,l=bH.length;i<l;i++){bF.process(bH[i]);
}},unregister:function(bC){var bD=bC.$$id;

if(bD==null){return;
}delete this.__eg[bD];
delete bC.$$id;
},debug:function(a,b){this.__ek(L,arguments);
},info:function(bc,bd){this.__ek(r,arguments);
},warn:function(ba,bb){this.__ek(B,arguments);
},error:function(g,h){this.__ek(v,arguments);
},trace:function(f){this.__ek(r,[f,qx.dev.StackTrace.getStackTrace().join(F)]);
},deprecatedMethodWarning:function(c,d){var e;
{};
},deprecatedClassWarning:function(j,k){var m;
{};
},deprecatedEventWarning:function(S,event,T){var U;
{};
},deprecatedMixinWarning:function(bg,bh){var bi;
{};
},deprecatedConstantWarning:function(V,W,X){var self,Y;
{};
},clear:function(){this.__ei.clearHistory();
},__ei:new qx.log.appender.RingBuffer(50),__ej:{debug:0,info:1,warn:2,error:3},__ek:function(bj,bk){var bp=this.__ej;

if(bp[bj]<bp[this.__ef]){return;
}var bm=bk.length<2?null:bk[0];
var bo=bm?1:0;
var bl=[];

for(var i=bo,l=bk.length;i<l;i++){bl.push(this.__em(bk[i],true));
}var bq=new Date;
var br={time:bq,offset:bq-qx.Bootstrap.LOADSTART,level:bj,items:bl,win:window};
if(bm){if(bm instanceof qx.core.Object){br.object=bm.$$hash;
}else if(bm.$$type){br.clazz=bm;
}}this.__ei.process(br);
var bs=this.__eg;

for(var bn in bs){bs[bn].process(br);
}},__el:function(be){if(be===undefined){return J;
}else if(be===null){return o;
}
if(be.$$type){return n;
}var bf=typeof be;

if(bf===N||bf==p||bf===R||bf===M){return bf;
}else if(bf===H){if(be.nodeType){return w;
}else if(be.classname){return q;
}else if(be instanceof Array){return t;
}else if(be instanceof Error){return v;
}else{return K;
}}
if(be.toString){return Q;
}return O;
},__em:function(bt,bu){var bB=this.__el(bt);
var bx=O;
var bw=[];

switch(bB){case o:case J:bx=bB;
break;
case p:case R:case M:bx=bt;
break;
case w:if(bt.nodeType===9){bx=C;
}else if(bt.nodeType===3){bx=x+bt.nodeValue+P;
}else if(bt.nodeType===1){bx=bt.nodeName.toLowerCase();

if(bt.id){bx+=E+bt.id;
}}else{bx=w;
}break;
case N:bx=qx.lang.Function.getName(bt)||bB;
break;
case q:bx=bt.basename+A+bt.$$hash+P;
break;
case n:case Q:bx=bt.toString();
break;
case v:bw=qx.dev.StackTrace.getStackTraceFromError(bt);
bx=bt.toString();
break;
case t:if(bu){bx=[];

for(var i=0,l=bt.length;i<l;i++){if(bx.length>20){bx.push(u+(l-i)+s);
break;
}bx.push(this.__em(bt[i],false));
}}else{bx=y+bt.length+G;
}break;
case K:if(bu){var bv;
var bA=[];

for(var bz in bt){bA.push(bz);
}bA.sort();
bx=[];

for(var i=0,l=bA.length;i<l;i++){if(bx.length>20){bx.push(u+(l-i)+s);
break;
}bz=bA[i];
bv=this.__em(bt[bz],false);
bv.key=bz;
bx.push(bv);
}}else{var by=0;

for(var bz in bt){by++;
}bx=z+by+D;
}break;
}return {type:bB,text:bx,trace:bw};
}}});
})();
(function(){var by="set",bx="get",bw="reset",bv="qx.core.Object",bu="]",bt="[",bs="$$user_",br="Don't use '_disposeFields' - instead assign directly to 'null'",bq="Object";
qx.Class.define(bv,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bq},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bt+this.$$hash+bu;
},base:function(J,K){{};

if(arguments.length===1){return J.callee.base.call(this);
}else{return J.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bj){return bj.callee.self;
},clone:function(){var bl=this.constructor;
var bk=new bl;
var bn=qx.Class.getProperties(bl);
var bm=qx.core.Property.$$store.user;
var bo=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bn.length;i<l;i++){name=bn[i];

if(this.hasOwnProperty(bm[name])){bk[bo[name]](this[bm[name]]);
}}return bk;
},set:function(x,y){var A=qx.core.Property.$$method.set;

if(qx.lang.Type.isString(x)){if(!this[A[x]]){if(this[by+qx.lang.String.firstUp(x)]!=undefined){this[by+qx.lang.String.firstUp(x)](y);
return;
}{};
}return this[A[x]](y);
}else{for(var z in x){if(!this[A[z]]){if(this[by+qx.lang.String.firstUp(z)]!=undefined){this[by+qx.lang.String.firstUp(z)](x[z]);
continue;
}{};
}this[A[z]](x[z]);
}return this;
}},get:function(B){var C=qx.core.Property.$$method.get;

if(!this[C[B]]){if(this[bx+qx.lang.String.firstUp(B)]!=undefined){return this[bx+qx.lang.String.firstUp(B)]();
}{};
}return this[C[B]]();
},reset:function(bh){var bi=qx.core.Property.$$method.reset;

if(!this[bi[bh]]){if(this[bw+qx.lang.String.firstUp(bh)]!=undefined){this[bw+qx.lang.String.firstUp(bh)]();
return;
}{};
}this[bi[bh]]();
},__jJ:qx.event.Registration,addListener:function(V,W,self,X){if(!this.$$disposed){return this.__jJ.addListener(this,V,W,self,X);
}return null;
},addListenerOnce:function(D,E,self,F){var G=function(e){E.call(self||this,e);
this.removeListener(D,G,this,F);
};
return this.addListener(D,G,this,F);
},removeListener:function(O,P,self,Q){if(!this.$$disposed){return this.__jJ.removeListener(this,O,P,self,Q);
}return false;
},removeListenerById:function(L){if(!this.$$disposed){return this.__jJ.removeListenerById(this,L);
}return false;
},hasListener:function(q,r){return this.__jJ.hasListener(this,q,r);
},dispatchEvent:function(H){if(!this.$$disposed){return this.__jJ.dispatchEvent(this,H);
}return true;
},fireEvent:function(S,T,U){if(!this.$$disposed){return this.__jJ.fireEvent(this,S,T,U);
}return true;
},fireNonBubblingEvent:function(bc,bd,be){if(!this.$$disposed){return this.__jJ.fireNonBubblingEvent(this,bc,bd,be);
}return true;
},fireDataEvent:function(a,b,c,d){if(!this.$$disposed){if(c===undefined){c=null;
}return this.__jJ.fireNonBubblingEvent(this,a,qx.event.type.Data,[b,c,!!d]);
}return true;
},__jK:null,setUserData:function(Y,ba){if(!this.__jK){this.__jK={};
}this.__jK[Y]=ba;
},getUserData:function(bf){if(!this.__jK){return null;
}var bg=this.__jK[bf];
return bg===undefined?null:bg;
},__jL:qx.log.Logger,debug:function(bp){this.__jL.debug(this,bp);
},info:function(I){this.__jL.info(this,I);
},warn:function(bz){this.__jL.warn(this,bz);
},error:function(f){this.__jL.error(this,f);
},trace:function(){this.__jL.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var v,t;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var u=this.constructor;
var s;

while(u.superclass){if(u.$$destructor){u.$$destructor.call(this);
}if(u.$$includes){s=u.$$flatIncludes;

for(var i=0,l=s.length;i<l;i++){if(s[i].$$destructor){s[i].$$destructor.call(this);
}}}u=u.superclass;
}var w=qx.Class.getProperties(this.constructor);

for(var i=0,l=w.length;i<l;i++){delete this[bs+w[i]];
}{};
},_disposeFields:function(R){qx.log.Logger.deprecatedMethodWarning(arguments.callee,br);
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bA){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(N){qx.util.DisposeUtil.disposeArray(this,N);
},_disposeMap:function(bb){qx.util.DisposeUtil.disposeMap(this,bb);
}},settings:{"qx.disposerDebugLevel":0},defer:function(M){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__jK=null;
var j=this.constructor;
var o;
var p=qx.core.Property.$$store;
var m=p.user;
var n=p.theme;
var g=p.inherit;
var k=p.useinit;
var h=p.init;

while(j){o=j.$$properties;

if(o){for(var name in o){if(o[name].dispose){this[m[name]]=this[n[name]]=this[g[name]]=this[k[name]]=this[h[name]]=undefined;
}}}j=j.superclass;
}}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__fu:null,_invalidChildrenCache:null,__fv:null,invalidateLayoutCache:function(){this.__fu=null;
},renderLayout:function(h,i){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__fu){return this.__fu;
}return this.__fu=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(d){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var c=this.__fv;

if(c instanceof qx.ui.core.LayoutItem){c.clearSeparators();
}},_renderSeparator:function(f,g){this.__fv.renderSeparator(f,g);
},connectToWidget:function(e){if(e&&this.__fv){throw new Error("It is not possible to manually set the connected widget.");
}this.__fv=e;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__fv;
},_applyLayoutChange:function(){if(this.__fv){this.__fv.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__fv.getLayoutChildren();
}},destruct:function(){this.__fv=this.__fu=null;
}});
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
(function(){var e=": ",d="qx.type.BaseError",c="";
qx.Class.define(d,{extend:Error,construct:function(a,b){Error.call(this,b);
this.__bX=a||c;
this.message=b||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bX:null,message:null,getComment:function(){return this.__bX;
},toString:function(){return this.__bX+e+this.message;
}}});
})();
(function(){var B="",A="g",z="0",y='\\$1',x="%",w='-',v="qx.lang.String",u=' ',t='\n',s="undefined";
qx.Bootstrap.define(v,{statics:{camelCase:function(q){return q.replace(/\-([a-z])/g,function(P,Q){return Q.toUpperCase();
});
},hyphenate:function(b){return b.replace(/[A-Z]/g,function(N){return (w+N.charAt(0).toLowerCase());
});
},capitalize:function(O){return O.replace(/\b[a-z]/g,function(p){return p.toUpperCase();
});
},clean:function(k){return this.trim(k.replace(/\s+/g,u));
},trimLeft:function(o){return o.replace(/^\s+/,B);
},trimRight:function(d){return d.replace(/\s+$/,B);
},trim:function(j){return j.replace(/^\s+|\s+$/g,B);
},startsWith:function(H,I){return H.indexOf(I)===0;
},endsWith:function(F,G){return F.substring(F.length-G.length,F.length)===G;
},repeat:function(R,S){return R.length>=0?new Array(S+1).join(R):B;
},pad:function(C,length,D){var E=length-C.length;

if(E>0){if(typeof D===s){D=z;
}return this.repeat(D,E)+C;
}else{return C;
}},firstUp:function(c){return c.charAt(0).toUpperCase()+c.substr(1);
},firstLow:function(L){return L.charAt(0).toLowerCase()+L.substr(1);
},contains:function(J,K){return J.indexOf(K)!=-1;
},format:function(l,m){var n=l;

for(var i=0;i<m.length;i++){n=n.replace(new RegExp(x+(i+1),A),m[i]);
}return n;
},escapeRegexpChars:function(a){return a.replace(/([.*+?^${}()|[\]\/\\])/g,y);
},toArray:function(M){return M.split(/\B|\b/g);
},stripTags:function(r){return r.replace(/<\/?[^>]+>/gi,B);
},stripScripts:function(e,f){var h=B;
var g=e.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){h+=arguments[1]+t;
return B;
});

if(f===true){qx.lang.Function.globalEval(h);
}return g;
}}});
})();
(function(){var p="function",o="Boolean",n="qx.Interface",m="]",k="toggle",j="Interface",h="is",g="[Interface ";
qx.Bootstrap.define(n,{statics:{define:function(name,u){if(u){if(u.extend&&!(u.extend instanceof Array)){u.extend=[u.extend];
}{};
var v=u.statics?u.statics:{};
if(u.extend){v.$$extends=u.extend;
}
if(u.properties){v.$$properties=u.properties;
}
if(u.members){v.$$members=u.members;
}
if(u.events){v.$$events=u.events;
}}else{var v={};
}v.$$type=j;
v.name=name;
v.toString=this.genericToString;
v.basename=qx.Bootstrap.createNamespace(name,v);
qx.Interface.$$registry[name]=v;
return v;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(P){if(!P){return [];
}var Q=P.concat();

for(var i=0,l=P.length;i<l;i++){if(P[i].$$extends){Q.push.apply(Q,this.flatten(P[i].$$extends));
}}return Q;
},__eH:function(D,E,F,G){var K=F.$$members;

if(K){for(var J in K){if(qx.lang.Type.isFunction(K[J])){var I=this.__eI(E,J);
var H=I||qx.lang.Type.isFunction(D[J]);

if(!H){throw new Error('Implementation of method "'+J+'" is missing in class "'+E.classname+'" required by interface "'+F.name+'"');
}var L=G===true&&!I&&!qx.Class.hasInterface(E,F);

if(L){D[J]=this.__eL(F,D[J],J,K[J]);
}}else{if(typeof D[J]===undefined){if(typeof D[J]!==p){throw new Error('Implementation of member "'+J+'" is missing in class "'+E.classname+'" required by interface "'+F.name+'"');
}}}}}},__eI:function(a,b){var f=b.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!f){return false;
}var c=qx.lang.String.firstLow(f[2]);
var d=qx.Class.hasProperty(a,c);

if(!d){return false;
}var e=f[0]==h||f[0]==k;

if(e){return qx.Class.getPropertyDefinition(a,c).check==o;
}return true;
},__eJ:function(M,N){if(N.$$properties){for(var O in N.$$properties){if(!qx.Class.hasProperty(M,O)){throw new Error('The property "'+O+'" is not supported by Class "'+M.classname+'"!');
}}}},__eK:function(A,B){if(B.$$events){for(var C in B.$$events){if(!qx.Class.supportsEvent(A,C)){throw new Error('The event "'+C+'" is not supported by Class "'+A.classname+'"!');
}}}},assertObject:function(q,r){var t=q.constructor;
this.__eH(q,t,r,false);
this.__eJ(t,r);
this.__eK(t,r);
var s=r.$$extends;

if(s){for(var i=0,l=s.length;i<l;i++){this.assertObject(q,s[i]);
}}},assert:function(w,x,y){this.__eH(w.prototype,w,x,y);
this.__eJ(w,x);
this.__eK(w,x);
var z=x.$$extends;

if(z){for(var i=0,l=z.length;i<l;i++){this.assert(w,z[i],y);
}}},genericToString:function(){return g+this.name+m;
},$$registry:{},__eL:function(){},__eM:null,__eN:function(){}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
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
(function(){var d="qx.globalErrorHandling",c="on",b="qx.event.GlobalError";
qx.Bootstrap.define(b,{statics:{setErrorHandler:function(k,l){this.__iC=k||null;
this.__iD=l||window;

if(qx.core.Setting.get(d)===c){if(k&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__iE,this);
}
if(!k&&window.onerror){window.onerror=null;
}}},__iE:function(e,f,g){if(this.__iC){this.handleError(new qx.core.WindowError(e,f,g));
return true;
}},observeMethod:function(i){if(qx.core.Setting.get(d)===c){var self=this;
return function(){if(!self.__iC){return i.apply(this,arguments);
}
try{return i.apply(this,arguments);
}catch(j){self.handleError(j);
}};
}else{return i;
}},handleError:function(a){if(this.__iC){this.__iC.call(this.__iD,a);
}}},defer:function(h){qx.core.Setting.define(d,c);
h.setErrorHandler(null,null);
}});
})();
(function(){var h="qx.util.DeferredCallManager",g="singleton";
qx.Class.define(h,{extend:qx.core.Object,type:g,construct:function(){this.__eT={};
this.__eU=qx.lang.Function.bind(this.__eY,this);
this.__eV=false;
},members:{__eW:null,__eX:null,__eT:null,__eV:null,__eU:null,schedule:function(e){if(this.__eW==null){this.__eW=window.setTimeout(this.__eU,0);
}var f=e.toHashCode();
if(this.__eX&&this.__eX[f]){return;
}this.__eT[f]=e;
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

for(var b in this.__eX){var a=this.__eX[b];

if(a){this.__eX[b]=null;
a.call();
}}}this.__eX=null;
})},destruct:function(){if(this.__eW!=null){window.clearTimeout(this.__eW);
}this.__eU=this.__eT=null;
}});
})();
(function(){var e="qx.util.DeferredCall";
qx.Class.define(e,{extend:qx.core.Object,construct:function(a,b){arguments.callee.base.call(this);
this.__gg=a;
this.__gh=b||null;
this.__gi=qx.util.DeferredCallManager.getInstance();
},members:{__gg:null,__gh:null,__gi:null,cancel:function(){this.__gi.cancel(this);
},schedule:function(){this.__gi.schedule(this);
},call:function(){this.__gh?this.__gg.apply(this.__gh):this.__gg();
}},destruct:function(c,d){this.cancel();
this.__gh=this.__gg=this.__gi=null;
}});
})();
(function(){var bG="element",bF="qx.client",bE="div",bD="",bC="mshtml",bB="none",bA="scroll",bz="qx.html.Element",by="|capture|",bx="activate",bW="blur",bV="deactivate",bU="userSelect",bT="__cD",bS="capture",bR="visible",bQ="releaseCapture",bP="|bubble|",bO="qxSelectable",bN="tabIndex",bL="off",bM="focus",bJ="normal",bK="webkit",bH="hidden",bI="on";
qx.Class.define(bz,{extend:qx.core.Object,construct:function(bq){arguments.callee.base.call(this);
this.__ch=bq||bE;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__ci:{},_scheduleFlush:function(cN){qx.html.Element.__cP.schedule();
},flush:function(){var ci;
{};
var ca=this.__cj();
var bY=ca.getFocus();

if(bY&&this.__cn(bY)){ca.blur(bY);
}var cp=ca.getActive();

if(cp&&this.__cn(cp)){qx.bom.Element.deactivate(cp);
}var cd=this.__cl();

if(cd&&this.__cn(cd)){qx.bom.Element.releaseCapture(cd);
}var cj=[];
var ck=this._modified;

for(var ch in ck){ci=ck[ch];
if(ci.__cH()){if(ci.__co&&qx.dom.Hierarchy.isRendered(ci.__co)){cj.push(ci);
}else{{};
ci.__cG();
}delete ck[ch];
}}
for(var i=0,l=cj.length;i<l;i++){ci=cj[i];
{};
ci.__cG();
}var cf=this._visibility;

for(var ch in cf){ci=cf[ch];
{};
ci.__co.style.display=ci.__cr?bD:bB;
if(qx.core.Variant.isSet(bF,bC)){if(!(document.documentMode>=8)){ci.__co.style.visibility=ci.__cr?bR:bH;
}}delete cf[ch];
}var scroll=this._scroll;

for(var ch in scroll){ci=scroll[ch];
var cq=ci.__co;

if(cq&&cq.offsetWidth){var cc=true;
if(ci.__cu!=null){ci.__co.scrollLeft=ci.__cu;
delete ci.__cu;
}if(ci.__cv!=null){ci.__co.scrollTop=ci.__cv;
delete ci.__cv;
}var cm=ci.__cs;

if(cm!=null){var cg=cm.element.getDomElement();

if(cg&&cg.offsetWidth){qx.bom.element.Scroll.intoViewX(cg,cq,cm.align);
delete ci.__cs;
}else{cc=false;
}}var cn=ci.__ct;

if(cn!=null){var cg=cn.element.getDomElement();

if(cg&&cg.offsetWidth){qx.bom.element.Scroll.intoViewY(cg,cq,cn.align);
delete ci.__ct;
}else{cc=false;
}}if(cc){delete scroll[ch];
}}}var cb={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var co=this._actions[i];
var cl=co.element.__co;

if(!cl||!cb[co.type]&&!co.element.__cH()){continue;
}var ce=co.args;
ce.unshift(cl);
qx.bom.Element[co.type].apply(qx.bom.Element,ce);
}this._actions=[];
for(var ch in this.__ci){var bX=this.__ci[ch];
var cq=bX.element.__co;

if(cq){qx.bom.Selection.set(cq,bX.start,bX.end);
delete this.__ci[ch];
}}qx.event.handler.Appear.refresh();
},__cj:function(){if(!this.__ck){var U=qx.event.Registration.getManager(window);
this.__ck=U.getHandler(qx.event.handler.Focus);
}return this.__ck;
},__cl:function(){if(!this.__cm){var D=qx.event.Registration.getManager(window);
this.__cm=D.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__cm.getCaptureElement();
},__cn:function(cs){var ct=qx.core.ObjectRegistry.fromHashCode(cs.$$element);
return ct&&!ct.__cH();
}},members:{__ch:null,__co:null,__cp:false,__cq:true,__cr:true,__cs:null,__ct:null,__cu:null,__cv:null,__cw:null,__cx:null,__cy:null,__cz:null,__cA:null,__cB:null,__cC:null,__cD:null,__cE:null,__cF:null,_scheduleChildrenUpdate:function(){if(this.__cE){return;
}this.__cE=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
},_createDomElement:function(){return qx.bom.Element.create(this.__ch);
},__cG:function(){{};
var cH=this.__cD;

if(cH){var length=cH.length;
var cI;

for(var i=0;i<length;i++){cI=cH[i];

if(cI.__cr&&cI.__cq&&!cI.__co){cI.__cG();
}}}
if(!this.__co){this.__co=this._createDomElement();
this.__co.$$element=this.$$hash;
this._copyData(false);

if(cH&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__cE){this._syncChildren();
}}delete this.__cE;
},_insertChildren:function(){var ds=this.__cD;
var length=ds.length;
var du;

if(length>2){var dt=document.createDocumentFragment();

for(var i=0;i<length;i++){du=ds[i];

if(du.__co&&du.__cq){dt.appendChild(du.__co);
}}this.__co.appendChild(dt);
}else{var dt=this.__co;

for(var i=0;i<length;i++){du=ds[i];

if(du.__co&&du.__cq){dt.appendChild(du.__co);
}}}},_syncChildren:function(){var bc;
var bh=qx.core.ObjectRegistry;
var X=this.__cD;
var bf=X.length;
var Y;
var bd;
var bb=this.__co;
var be=bb.childNodes;
var ba=0;
var bg;
{};
for(var i=be.length-1;i>=0;i--){bg=be[i];
bd=bh.fromHashCode(bg.$$element);

if(!bd||!bd.__cq||bd.__cF!==this){bb.removeChild(bg);
{};
}}for(var i=0;i<bf;i++){Y=X[i];
if(Y.__cq){bd=Y.__co;
bg=be[ba];

if(!bd){continue;
}if(bd!=bg){if(bg){bb.insertBefore(bd,bg);
}else{bb.appendChild(bd);
}{};
}ba++;
}}{};
},_copyData:function(cO){var cS=this.__co;
var cR=this.__cA;

if(cR){var cP=qx.bom.element.Attribute;

for(var cT in cR){cP.set(cS,cT,cR[cT]);
}}var cR=this.__cz;

if(cR){var cQ=qx.bom.element.Style;

if(cO){cQ.setStyles(cS,cR);
}else{cQ.setCss(cS,cQ.compile(cR));
}}var cR=this.__cB;

if(cR){for(var cT in cR){this._applyProperty(cT,cR[cT]);
}}var cR=this.__cC;

if(cR){qx.event.Registration.getManager(cS).importListeners(cS,cR);
delete this.__cC;
}},_syncData:function(){var dG=this.__co;
var dF=qx.bom.element.Attribute;
var dD=qx.bom.element.Style;
var dE=this.__cx;

if(dE){var dJ=this.__cA;

if(dJ){var dH;

for(var dI in dE){dH=dJ[dI];

if(dH!==undefined){dF.set(dG,dI,dH);
}else{dF.reset(dG,dI);
}}}this.__cx=null;
}var dE=this.__cw;

if(dE){var dJ=this.__cz;

if(dJ){var dC={};

for(var dI in dE){dC[dI]=dJ[dI];
}dD.setStyles(dG,dC);
}this.__cw=null;
}var dE=this.__cy;

if(dE){var dJ=this.__cB;

if(dJ){var dH;

for(var dI in dE){this._applyProperty(dI,dJ[dI]);
}}this.__cy=null;
}},__cH:function(){var dB=this;
while(dB){if(dB.__cp){return true;
}
if(!dB.__cq||!dB.__cr){return false;
}dB=dB.__cF;
}return false;
},__cI:function(cX){if(cX.__cF===this){throw new Error("Child is already in: "+cX);
}
if(cX.__cp){throw new Error("Root elements could not be inserted into other ones.");
}if(cX.__cF){cX.__cF.remove(cX);
}cX.__cF=this;
if(!this.__cD){this.__cD=[];
}if(this.__co){this._scheduleChildrenUpdate();
}},__cJ:function(E){if(E.__cF!==this){throw new Error("Has no child: "+E);
}if(this.__co){this._scheduleChildrenUpdate();
}delete E.__cF;
},__cK:function(M){if(M.__cF!==this){throw new Error("Has no child: "+M);
}if(this.__co){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__cD||null;
},getChild:function(F){var G=this.__cD;
return G&&G[F]||null;
},hasChildren:function(){var bt=this.__cD;
return bt&&bt[0]!==undefined;
},indexOf:function(dR){var dS=this.__cD;
return dS?dS.indexOf(dR):-1;
},hasChild:function(dP){var dQ=this.__cD;
return dQ&&dQ.indexOf(dP)!==-1;
},add:function(cJ){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__cI(arguments[i]);
}this.__cD.push.apply(this.__cD,arguments);
}else{this.__cI(cJ);
this.__cD.push(cJ);
}return this;
},addAt:function(d,f){this.__cI(d);
qx.lang.Array.insertAt(this.__cD,d,f);
return this;
},remove:function(H){var I=this.__cD;

if(!I){return;
}
if(arguments[1]){var J;

for(var i=0,l=arguments.length;i<l;i++){J=arguments[i];
this.__cJ(J);
qx.lang.Array.remove(I,J);
}}else{this.__cJ(H);
qx.lang.Array.remove(I,H);
}return this;
},removeAt:function(Q){var R=this.__cD;

if(!R){throw new Error("Has no children!");
}var S=R[Q];

if(!S){throw new Error("Has no child at this position!");
}this.__cJ(S);
qx.lang.Array.removeAt(this.__cD,Q);
return this;
},removeAll:function(){var bw=this.__cD;

if(bw){for(var i=0,l=bw.length;i<l;i++){this.__cJ(bw[i]);
}bw.length=0;
}return this;
},getParent:function(){return this.__cF||null;
},insertInto:function(parent,cU){parent.__cI(this);

if(cU==null){parent.__cD.push(this);
}else{qx.lang.Array.insertAt(this.__cD,this,cU);
}return this;
},insertBefore:function(t){var parent=t.__cF;
parent.__cI(this);
qx.lang.Array.insertBefore(parent.__cD,this,t);
return this;
},insertAfter:function(dM){var parent=dM.__cF;
parent.__cI(this);
qx.lang.Array.insertAfter(parent.__cD,this,dM);
return this;
},moveTo:function(dT){var parent=this.__cF;
parent.__cK(this);
var dU=parent.__cD.indexOf(this);

if(dU===dT){throw new Error("Could not move to same index!");
}else if(dU<dT){dT--;
}qx.lang.Array.removeAt(parent.__cD,dU);
qx.lang.Array.insertAt(parent.__cD,this,dT);
return this;
},moveBefore:function(s){var parent=this.__cF;
return this.moveTo(parent.__cD.indexOf(s));
},moveAfter:function(dr){var parent=this.__cF;
return this.moveTo(parent.__cD.indexOf(dr)+1);
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
},setRoot:function(K){this.__cp=K;
},useMarkup:function(cA){if(this.__co){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(bF,bC)){var cB=document.createElement(bE);
}else{var cB=qx.html.Element.__cL;

if(!cB){cB=qx.html.Element.__cL=document.createElement(bE);
}}cB.innerHTML=cA;
this.__co=cB.firstChild;
this.__co.$$element=this.$$hash;
this._copyData(true);
return this.__co;
},useElement:function(bp){if(this.__co){throw new Error("Could not overwrite existing element!");
}this.__co=bp;
this.__co.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var dL=this.getAttribute(bN);

if(dL>=1){return true;
}var dK=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(dL>=0&&dK[this.__ch]){return true;
}return false;
},setSelectable:function(cW){this.setAttribute(bO,cW?bI:bL);
if(qx.core.Variant.isSet(bF,bK)){this.setStyle(bU,cW?bJ:bB);
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
qx.html.Element._scheduleFlush(bG);
}if(this.__cF){this.__cF._scheduleChildrenUpdate();
}delete this.__cr;
},hide:function(){if(!this.__cr){return;
}
if(this.__co){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}this.__cr=false;
},isVisible:function(){return this.__cr===true;
},scrollChildIntoViewX:function(cv,cw,cx){var cy=this.__co;
var cz=cv.getDomElement();

if(cx!==false&&cy&&cy.offsetWidth&&cz&&cz.offsetWidth){qx.bom.element.Scroll.intoViewX(cz,cy,cw);
}else{this.__cs={element:cv,align:cw};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}delete this.__cu;
},scrollChildIntoViewY:function(cC,cD,cE){var cF=this.__co;
var cG=cC.getDomElement();

if(cE!==false&&cF&&cF.offsetWidth&&cG&&cG.offsetWidth){qx.bom.element.Scroll.intoViewY(cG,cF,cD);
}else{this.__ct={element:cC,align:cD};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}delete this.__cv;
},scrollToX:function(x,bi){var bj=this.__co;

if(bi!==true&&bj&&bj.offsetWidth){bj.scrollLeft=x;
}else{this.__cu=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}delete this.__cs;
},getScrollX:function(){var bs=this.__co;

if(bs){return bs.scrollLeft;
}return this.__cu||0;
},scrollToY:function(y,B){var C=this.__co;

if(B!==true&&C&&C.offsetWidth){C.scrollTop=y;
}else{this.__cv=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}delete this.__ct;
},getScrollY:function(){var c=this.__co;

if(c){return c.scrollTop;
}return this.__cv||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(bA,this.__cN,this);
},enableScrolling:function(){this.removeListener(bA,this.__cN,this);
},__cM:null,__cN:function(e){if(!this.__cM){this.__cM=true;
this.__co.scrollTop=0;
this.__co.scrollLeft=0;
delete this.__cM;
}},getTextSelection:function(){var V=this.__co;

if(V){return qx.bom.Selection.get(V);
}return null;
},getTextSelectionLength:function(){var cr=this.__co;

if(cr){return qx.bom.Selection.getLength(cr);
}return null;
},getTextSelectionStart:function(){var dd=this.__co;

if(dd){return qx.bom.Selection.getStart(dd);
}return null;
},getTextSelectionEnd:function(){var br=this.__co;

if(br){return qx.bom.Selection.getEnd(br);
}return null;
},setTextSelection:function(cK,cL){var cM=this.__co;

if(cM){qx.bom.Selection.set(cM,cK,cL);
return;
}qx.html.Element.__ci[this.toHashCode()]={element:this,start:cK,end:cL};
qx.html.Element._scheduleFlush(bG);
},clearTextSelection:function(){var W=this.__co;

if(W){qx.bom.Selection.clear(W);
}delete qx.html.Element.__ci[this.toHashCode()];
},__cO:function(dy,dz){var dA=qx.html.Element._actions;
dA.push({type:dy,element:this,args:dz||[]});
qx.html.Element._scheduleFlush(bG);
},focus:function(){this.__cO(bM);
},blur:function(){this.__cO(bW);
},activate:function(){this.__cO(bx);
},deactivate:function(){this.__cO(bV);
},capture:function(cu){this.__cO(bS,[cu!==false]);
},releaseCapture:function(){this.__cO(bQ);
},setStyle:function(g,h,j){if(!this.__cz){this.__cz={};
}
if(this.__cz[g]==h){return;
}
if(h==null){delete this.__cz[g];
}else{this.__cz[g]=h;
}if(this.__co){if(j){qx.bom.element.Style.set(this.__co,g,h);
return this;
}if(!this.__cw){this.__cw={};
}this.__cw[g]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}return this;
},setStyles:function(de,df){var dg=qx.bom.element.Style;

if(!this.__cz){this.__cz={};
}
if(this.__co){if(!this.__cw){this.__cw={};
}
for(var di in de){var dh=de[di];

if(this.__cz[di]==dh){continue;
}
if(dh==null){delete this.__cz[di];
}else{this.__cz[di]=dh;
}if(df){dg.set(this.__co,di,dh);
continue;
}this.__cw[di]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}else{for(var di in de){var dh=de[di];

if(this.__cz[di]==dh){continue;
}
if(dh==null){delete this.__cz[di];
}else{this.__cz[di]=dh;
}}}return this;
},removeStyle:function(dN,dO){this.setStyle(dN,null,dO);
},getStyle:function(T){return this.__cz?this.__cz[T]:null;
},getAllStyles:function(){return this.__cz||null;
},setAttribute:function(cY,da,dc){if(!this.__cA){this.__cA={};
}
if(this.__cA[cY]==da){return;
}
if(da==null){delete this.__cA[cY];
}else{this.__cA[cY]=da;
}if(this.__co){if(dc){qx.bom.element.Attribute.set(this.__co,cY,da);
return this;
}if(!this.__cx){this.__cx={};
}this.__cx[cY]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}return this;
},setAttributes:function(dv,dw){for(var dx in dv){this.setAttribute(dx,dv[dx],dw);
}return this;
},removeAttribute:function(z,A){this.setAttribute(z,null,A);
},getAttribute:function(b){return this.__cA?this.__cA[b]:null;
},_applyProperty:function(name,dq){},_setProperty:function(N,O,P){if(!this.__cB){this.__cB={};
}
if(this.__cB[N]==O){return;
}
if(O==null){delete this.__cB[N];
}else{this.__cB[N]=O;
}if(this.__co){if(P){this._applyProperty(N,O);
return this;
}if(!this.__cy){this.__cy={};
}this.__cy[N]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}return this;
},_removeProperty:function(bu,bv){this._setProperty(bu,null,bv);
},_getProperty:function(u){var v=this.__cB;

if(!v){return null;
}var w=v[u];
return w==null?null:w;
},addListener:function(dj,dk,self,dl){var dm;

if(this.$$disposed){return null;
}{};

if(this.__co){return qx.event.Registration.addListener(this.__co,dj,dk,self,dl);
}
if(!this.__cC){this.__cC={};
}
if(dl==null){dl=false;
}var dn=qx.event.Manager.getNextUniqueId();
var dp=dj+(dl?by:bP)+dn;
this.__cC[dp]={type:dj,listener:dk,self:self,capture:dl,unique:dn};
return dp;
},removeListener:function(k,m,self,n){var o;

if(this.$$disposed){return null;
}{};

if(this.__co){qx.event.Registration.removeListener(this.__co,k,m,self,n);
}else{var q=this.__cC;
var p;

if(n==null){n=false;
}
for(var r in q){p=q[r];
if(p.listener===m&&p.self===self&&p.capture===n&&p.type===k){delete q[r];
break;
}}}return this;
},removeListenerById:function(cV){if(this.$$disposed){return null;
}
if(this.__co){qx.event.Registration.removeListenerById(this.__co,cV);
}else{delete this.__cC[cV];
}return this;
},hasListener:function(bk,bl){if(this.$$disposed){return false;
}
if(this.__co){return qx.event.Registration.hasListener(this.__co,bk,bl);
}var bn=this.__cC;
var bm;

if(bl==null){bl=false;
}
for(var bo in bn){bm=bn[bo];
if(bm.capture===bl&&bm.type===bk){return true;
}}return false;
}},defer:function(L){L.__cP=new qx.util.DeferredCall(L.flush,L);
},destruct:function(){var a=this.__co;

if(a){qx.event.Registration.getManager(a).removeAllListeners(a);
a.$$element=bD;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__cF;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(bT);
this.__cA=this.__cz=this.__cC=this.__cB=this.__cx=this.__cw=this.__cy=this.__co=this.__cF=this.__cs=this.__ct=null;
}});
})();
(function(){var d="value",c="Please use the getValue() method instead.",b="qx.html.Label",a="Please use the setValue() method instead.";
qx.Class.define(b,{extend:qx.html.Element,members:{__cU:null,_applyProperty:function(name,g){arguments.callee.base.call(this,name,g);

if(name==d){var h=this.getDomElement();
qx.bom.Label.setValue(h,g);
}},_createDomElement:function(){var f=this.__cU;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(j){return arguments.callee.base.call(this,true);
},setRich:function(l){var m=this.getDomElement();

if(m){throw new Error("The label mode cannot be modified after initial creation");
}l=!!l;

if(this.__cU==l){return;
}this.__cU=l;
return this;
},setValue:function(k){this._setProperty(d,k);
return this;
},getValue:function(){return this._getProperty(d);
},setContent:function(i){qx.log.Logger.deprecatedMethodWarning(arguments.callee,a);
return this.setValue(i);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
return this.getValue();
}}});
})();
(function(){var c="qx.event.type.Event";
qx.Class.define(c,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(d,e){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!d;
this._cancelable=!!e;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(h){if(h){var i=h;
}else{var i=qx.event.Pool.getInstance().getObject(this.constructor);
}i._type=this._type;
i._target=this._target;
i._currentTarget=this._currentTarget;
i._relatedTarget=this._relatedTarget;
i._originalTarget=this._originalTarget;
i._stopPropagation=this._stopPropagation;
i._bubbles=this._bubbles;
i._preventDefault=this._preventDefault;
i._cancelable=this._cancelable;
return i;
},stop:function(){this.stopPropagation();
this.preventDefault();
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(l){this._type=l;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(b){this._eventPhase=b;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(j){this._target=j;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(a){this._currentTarget=a;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(k){this._relatedTarget=k;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(f){this._originalTarget=f;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(g){this._bubbles=g;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
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
},_cloneNativeEvent:function(l,m){var m=arguments.callee.base.call(this,l,m);
m.button=l.button;
m.clientX=l.clientX;
m.clientY=l.clientY;
m.pageX=l.pageX;
m.pageY=l.pageY;
m.screenX=l.screenX;
m.screenY=l.screenY;
m.wheelDelta=l.wheelDelta;
m.detail=l.detail;
m.srcElement=l.srcElement;
return m;
},__iI:qx.core.Variant.select(g,{"mshtml":{1:j,2:i,4:h},"default":{0:j,2:i,1:h}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:case f:return j;
case c:return i;
default:return this.__iI[this._native.button]||d;
}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(g,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(a);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(g,{"mshtml":function(){var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(k);
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
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(m,n){var o=qx.locale.Manager;

if(o){return o.tr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(d,e,f,g){var h=qx.locale.Manager;

if(h){return h.trn.apply(h,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(i,j,k){var l=qx.locale.Manager;

if(l){return l.trc.apply(l,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(b){var c=qx.locale.Manager;

if(c){return c.marktr.apply(c,arguments);
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
qx.Interface.define(d,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(h,i){},registerEvent:function(e,f,g){},unregisterEvent:function(a,b,c){}}});
})();
(function(){var B="blur",A="focus",z="input",y="load",x="qx.ui.core.EventHandler",w="activate";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__dr=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__dr:null,__ds:{focusin:1,focusout:1,focus:1,blur:1},__dt:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(G,H){return G instanceof qx.ui.core.Widget;
},_dispatchEvent:function(a){var f=a.getTarget();
var e=qx.ui.core.Widget.getWidgetByElement(f);
var g=false;

while(e&&e.isAnonymous()){var g=true;
e=e.getLayoutParent();
}if(e&&g&&a.getType()==w){e.getContainerElement().activate();
}if(this.__ds[a.getType()]){e=e&&e.getFocusTarget();
if(!e){return;
}}if(a.getRelatedTarget){var p=a.getRelatedTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);

while(o&&o.isAnonymous()){o=o.getLayoutParent();
}
if(o){if(this.__ds[a.getType()]){o=o.getFocusTarget();
}if(o===e){return;
}}}var j=a.getCurrentTarget();
var m=qx.ui.core.Widget.getWidgetByElement(j);

if(!m||m.isAnonymous()){return;
}if(this.__ds[a.getType()]){m=m.getFocusTarget();
}var n=a.getType();

if(!m||!(m.isEnabled()||this.__dt[n])){return;
}var b=a.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var h=this.__dr.getListeners(m,n,b);

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
},registerEvent:function(s,t,u){var v;

if(t===A||t===B){v=s.getFocusElement();
}else if(t===y||t===z){v=s.getContentElement();
}else{v=s.getContainerElement();
}
if(v){v.addListener(t,this._dispatchEvent,this,u);
}},unregisterEvent:function(C,D,E){var F;

if(D===A||D===B){F=C.getFocusElement();
}else if(D===y||D===z){F=C.getContentElement();
}else{F=C.getContainerElement();
}
if(F){F.removeListener(D,this._dispatchEvent,this,E);
}}},destruct:function(){this.__dr=null;
},defer:function(r){qx.event.Registration.addHandler(r);
}});
})();
(function(){var l="qx.ui.core.DecoratorFactory",k="$$nopool$$";
qx.Class.define(l,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__bY={};
},statics:{MAX_SIZE:15,__ca:k},members:{__bY:null,getDecoratorElement:function(e){var j=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(e)){var h=e;
var g=qx.theme.manager.Decoration.getInstance().resolve(e);
}else{var h=j.__ca;
g=e;
}var i=this.__bY;

if(i[h]&&i[h].length>0){var f=i[h].pop();
}else{var f=this._createDecoratorElement(g,h);
}f.$$pooled=false;
return f;
},poolDecorator:function(a){if(!a||a.$$pooled){return;
}var d=qx.ui.core.DecoratorFactory;
var b=a.getId();

if(b==d.__ca){a.dispose();
return;
}var c=this.__bY;

if(!c[b]){c[b]=[];
}
if(c[b].length>d.MAX_SIZE){a.dispose();
}else{a.$$pooled=true;
c[b].push(a);
}},_createDecoratorElement:function(o,p){var q=new qx.html.Decorator(o,p);
{};
return q;
},toString:function(){return arguments.callee.base.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var n=this.__bY;

for(var m in n){qx.util.DisposeUtil.disposeArray(n,m);
}}this.__bY=null;
}});
})();
(function(){var c="Don't use 'disposeFields' - instead assign directly to 'null'",b="qx.util.DisposeUtil";
qx.Class.define(b,{statics:{disposeFields:function(f,g){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
var name;

for(var i=0,l=g.length;i<l;i++){var name=g[i];

if(f[name]==null||!f.hasOwnProperty(name)){continue;
}f[name]=null;
}},disposeObjects:function(d,e){var name;

for(var i=0,l=e.length;i<l;i++){name=e[i];

if(d[name]==null||!d.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(d[name].dispose){d[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}d[name]=null;
}},disposeArray:function(r,s){var u=r[s];

if(!u){return;
}if(qx.core.ObjectRegistry.inShutDown){r[s]=null;
return;
}try{var t;

for(var i=u.length-1;i>=0;i--){t=u[i];

if(t){t.dispose();
}}}catch(m){throw new Error("The array field: "+s+" of object: "+r+" has non disposable entries: "+m);
}u.length=0;
r[s]=null;
},disposeMap:function(n,o){var p=n[o];

if(!p){return;
}if(qx.core.ObjectRegistry.inShutDown){n[o]=null;
return;
}try{for(var q in p){if(p.hasOwnProperty(q)){p[q].dispose();
}}}catch(a){throw new Error("The map field: "+o+" of object: "+n+" has non disposable entries: "+a);
}n[o]=null;
},disposeTriggeredBy:function(h,j){var k=j.dispose;
j.dispose=function(){k.call(j);
h.dispose();
};
}}});
})();
(function(){var c="qx.util.ValueManager",b="abstract";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(f){return this._dynamic[f];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(a){if(a&&this._dynamic[a]){return this._dynamic[a];
}return a;
},_setDynamic:function(e){this._dynamic=e;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
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
(function(){var u=",",s="rgb(",o=")",n="qx.theme.manager.Color",m="qx.util.ColorUtil";
qx.Class.define(m,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(l){return this.NAMED[l]!==undefined;
},isSystemColor:function(w){return this.SYSTEM[w]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(n);
},isThemedColor:function(A){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(A);
},stringToRgb:function(a){if(this.supportsThemes()&&this.isThemedColor(a)){var a=qx.theme.manager.Color.getInstance().resolveDynamic(a);
}
if(this.isNamedColor(a)){return this.NAMED[a];
}else if(this.isSystemColor(a)){throw new Error("Could not convert system colors to RGB: "+a);
}else if(this.isRgbString(a)){return this.__fw();
}else if(this.isHex3String(a)){return this.__fy();
}else if(this.isHex6String(a)){return this.__fz();
}throw new Error("Could not parse color: "+a);
},cssStringToRgb:function(T){if(this.isNamedColor(T)){return this.NAMED[T];
}else if(this.isSystemColor(T)){throw new Error("Could not convert system colors to RGB: "+T);
}else if(this.isRgbString(T)){return this.__fw();
}else if(this.isRgbaString(T)){return this.__fx();
}else if(this.isHex3String(T)){return this.__fy();
}else if(this.isHex6String(T)){return this.__fz();
}throw new Error("Could not parse color: "+T);
},stringToRgbString:function(e){return this.rgbToRgbString(this.stringToRgb(e));
},rgbToRgbString:function(c){return s+c[0]+u+c[1]+u+c[2]+o;
},rgbToHexString:function(v){return (qx.lang.String.pad(v[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(v[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(v[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(j){return this.isThemedColor(j)||this.isNamedColor(j)||this.isHex3String(j)||this.isHex6String(j)||this.isRgbString(j);
},isCssString:function(C){return this.isSystemColor(C)||this.isNamedColor(C)||this.isHex3String(C)||this.isHex6String(C)||this.isRgbString(C);
},isHex3String:function(U){return this.REGEXP.hex3.test(U);
},isHex6String:function(B){return this.REGEXP.hex6.test(B);
},isRgbString:function(G){return this.REGEXP.rgb.test(G);
},isRgbaString:function(Y){return this.REGEXP.rgba.test(Y);
},__fw:function(){var bi=parseInt(RegExp.$1,10);
var bh=parseInt(RegExp.$2,10);
var bg=parseInt(RegExp.$3,10);
return [bi,bh,bg];
},__fx:function(){var z=parseInt(RegExp.$1,10);
var y=parseInt(RegExp.$2,10);
var x=parseInt(RegExp.$3,10);
return [z,y,x];
},__fy:function(){var X=parseInt(RegExp.$1,16)*17;
var W=parseInt(RegExp.$2,16)*17;
var V=parseInt(RegExp.$3,16)*17;
return [X,W,V];
},__fz:function(){var F=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var E=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var D=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [F,E,D];
},hex3StringToRgb:function(d){if(this.isHex3String(d)){return this.__fy(d);
}throw new Error("Invalid hex3 value: "+d);
},hex6StringToRgb:function(k){if(this.isHex6String(k)){return this.__fz(k);
}throw new Error("Invalid hex6 value: "+k);
},hexStringToRgb:function(h){if(this.isHex3String(h)){return this.__fy(h);
}
if(this.isHex6String(h)){return this.__fz(h);
}throw new Error("Invalid hex value: "+h);
},rgbToHsb:function(H){var J,K,M;
var S=H[0];
var P=H[1];
var I=H[2];
var R=(S>P)?S:P;

if(I>R){R=I;
}var L=(S<P)?S:P;

if(I<L){L=I;
}M=R/255.0;

if(R!=0){K=(R-L)/R;
}else{K=0;
}
if(K==0){J=0;
}else{var O=(R-S)/(R-L);
var Q=(R-P)/(R-L);
var N=(R-I)/(R-L);

if(S==R){J=N-Q;
}else if(P==R){J=2.0+O-N;
}else{J=4.0+Q-O;
}J=J/6.0;

if(J<0){J=J+1.0;
}}return [Math.round(J*360),Math.round(K*100),Math.round(M*100)];
},hsbToRgb:function(ba){var i,f,p,q,t;
var bb=ba[0]/360;
var bc=ba[1]/100;
var bd=ba[2]/100;

if(bb>=1.0){bb%=1.0;
}
if(bc>1.0){bc=1.0;
}
if(bd>1.0){bd=1.0;
}var be=Math.floor(255*bd);
var bf={};

if(bc==0.0){bf.red=bf.green=bf.blue=be;
}else{bb*=6.0;
i=Math.floor(bb);
f=bb-i;
p=Math.floor(be*(1.0-bc));
q=Math.floor(be*(1.0-(bc*f)));
t=Math.floor(be*(1.0-(bc*(1.0-f))));

switch(i){case 0:bf.red=be;
bf.green=t;
bf.blue=p;
break;
case 1:bf.red=q;
bf.green=be;
bf.blue=p;
break;
case 2:bf.red=p;
bf.green=be;
bf.blue=t;
break;
case 3:bf.red=p;
bf.green=q;
bf.blue=be;
break;
case 4:bf.red=t;
bf.green=p;
bf.blue=be;
break;
case 5:bf.red=be;
bf.green=p;
bf.blue=q;
break;
}}return [bf.red,bf.green,bf.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var n="/",m="0",l="qx/static",k="http://",j="https://",i="file://",h="qx.util.AliasManager",g="singleton",f=".",e="static";
qx.Class.define(h,{type:g,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__fA={};
this.add(e,l);
},members:{__fA:null,_preprocess:function(r){var u=this._getDynamic();

if(u[r]===false){return r;
}else if(u[r]===undefined){if(r.charAt(0)===n||r.charAt(0)===f||r.indexOf(k)===0||r.indexOf(j)===m||r.indexOf(i)===0){u[r]=false;
return r;
}
if(this.__fA[r]){return this.__fA[r];
}var t=r.substring(0,r.indexOf(n));
var s=this.__fA[t];

if(s!==undefined){u[r]=s+r.substring(t.length);
}}return r;
},add:function(a,b){this.__fA[a]=b;
var d=this._getDynamic();
for(var c in d){if(c.substring(0,c.indexOf(n))===a){d[c]=b+c.substring(a.length);
}}},remove:function(q){delete this.__fA[q];
},resolve:function(o){var p=this._getDynamic();

if(o!==null){o=this._preprocess(o);
}return p[o]||o;
}},destruct:function(){this.__fA=null;
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
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(K,stop,L){var parent=K.parentNode;
var R=qx.dom.Node.getDocument(K);
var M=R.body;
var ba,N,V;
var bc,Y,T;
var P,Q,O;
var be,bf,bb,U;
var X,S,bg;
var bd=L===d;
var W=L===e;
stop=stop?stop.parentNode:R;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){N=parent.scrollTop;
V=N+qx.bom.Viewport.getHeight();
bc=qx.bom.Viewport.getHeight();
Y=parent.clientHeight;
T=parent.scrollHeight;
P=0;
Q=0;
O=0;
}else{ba=qx.bom.element.Location.get(parent);
N=ba.top;
V=ba.bottom;
bc=parent.offsetHeight;
Y=parent.clientHeight;
T=parent.scrollHeight;
P=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
Q=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
O=bc-Y-P-Q;
}be=qx.bom.element.Location.get(K);
bf=be.top;
bb=be.bottom;
U=K.offsetHeight;
X=bf-N-P;
S=bb-V+Q;
bg=0;
if(bd){bg=X;
}else if(W){bg=S+O;
}else if(X<0||U>Y){bg=X;
}else if(S>0){bg=S+O;
}parent.scrollTop+=bg;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
}}});
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
},get:function(v,w){var y=qx.bom.element.Style.get(v,c,w,false);
var D,top,B,A;
var x,z;

if(typeof y===e&&y!==n&&y!==h){y=qx.lang.String.trim(y);
if(/\((.*)\)/.test(y)){var C=RegExp.$1.split(l);
top=qx.lang.String.trim(C[0]);
x=qx.lang.String.trim(C[1]);
z=qx.lang.String.trim(C[2]);
D=qx.lang.String.trim(C[3]);
if(D===n){D=null;
}
if(top===n){top=null;
}
if(x===n){x=null;
}
if(z===n){z=null;
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
},reset:function(E){E.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var r="ready",q="qx.client",p="mshtml",o="load",n="unload",m="qx.event.handler.Application",l="complete",k="gecko|opera|webkit",j="left",i="DOMContentLoaded",h="shutdown";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(z){arguments.callee.base.call(this);
this._window=z.getWindow();
this.__gn=false;
this.__go=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__gp:false,onScriptLoaded:function(){this.__gp=true;
var s=qx.event.handler.Application.$$instance;

if(s){s.__gs();
}}},members:{canHandleEvent:function(w,x){},registerEvent:function(a,b,c){},unregisterEvent:function(d,f,g){},__gq:null,__gn:null,__go:null,__gr:null,__gs:function(){var t=qx.event.handler.Application;
if(!this.__gq&&this.__gn&&t.__gp){if(qx.core.Variant.isSet(q,p)){if(qx.event.Registration.hasListener(this._window,r)){this.__gq=true;
qx.event.Registration.fireEvent(this._window,r);
}}else{this.__gq=true;
qx.event.Registration.fireEvent(this._window,r);
}}},isApplicationReady:function(){return this.__gq;
},_initObserver:function(){if(qx.$$domReady||document.readyState==l){this.__gn=true;
this.__gs();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(q,k)){qx.bom.Event.addNativeListener(this._window,i,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(q,p)){var self=this;
var u=function(){try{document.documentElement.doScroll(j);

if(document.body){self._onNativeLoadWrapped();
}}catch(v){window.setTimeout(u,100);
}};
u();
}qx.bom.Event.addNativeListener(this._window,o,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,n,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,o,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,n,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gn=true;
this.__gs();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gr){this.__gr=true;

try{qx.event.Registration.fireEvent(this._window,h);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(y){qx.event.Registration.addHandler(y);
}});
})();
(function(){var f="qx.util.placement.DirectAxis";
qx.Class.define(f,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(a,b,c,d,e){return this._moveToEdgeAndAlign(a,b,c,e);
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
}}});
})();
(function(){var c="abstract",b="qx.event.dispatch.AbstractBubbling";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:c,construct:function(a){this._manager=a;
},members:{_getParent:function(d){throw new Error("Missing implementation");
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
(function(){var m="losecapture",l="qx.client",k="blur",j="focus",i="click",h="qx.event.dispatch.MouseCapture",g="capture",f="scroll";
qx.Class.define(h,{extend:qx.event.dispatch.AbstractBubbling,construct:function(p,q){arguments.callee.base.call(this,p);
this.__fp=p.getWindow();
this.__fq=q;
p.addListener(this.__fp,k,this.releaseCapture,this);
p.addListener(this.__fp,j,this.releaseCapture,this);
p.addListener(this.__fp,f,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fq:null,__fr:null,__fs:true,__fp:null,_getParent:function(v){return v.parentNode;
},canDispatchEvent:function(c,event,d){return (this.__fr&&this.__ft[d]);
},dispatchEvent:function(r,event,s){if(s==i){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fs||!qx.dom.Hierarchy.contains(this.__fr,r)){r=this.__fr;
}arguments.callee.base.call(this,r,event,s);
},__ft:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(n,o){var o=o!==false;

if(this.__fr===n&&this.__fs==o){return;
}
if(this.__fr){this.releaseCapture();
}this.nativeSetCapture(n,o);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(n,m,function(){qx.bom.Event.removeNativeListener(n,m,arguments.callee);
self.releaseCapture();
});
}this.__fs=o;
this.__fr=n;
this.__fq.fireEvent(n,g,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fr;
},releaseCapture:function(){var e=this.__fr;

if(!e){return;
}this.__fr=null;
this.__fq.fireEvent(e,m,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(e);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(l,{"mshtml":function(a,b){a.setCapture(b!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(l,{"mshtml":function(t){t.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fr=this.__fp=this.__fq=null;
},defer:function(u){qx.event.Registration.addDispatcher(u);
}});
})();
(function(){var w="qx.client",v="",u="mshtml",t="'",s="SelectionLanguage",r="qx.xml.Document",q=" />",p="MSXML2.DOMDocument.3.0",o='<\?xml version="1.0" encoding="utf-8"?>\n<',n="MSXML2.XMLHTTP.3.0",h="MSXML2.XMLHTTP.6.0",m=" xmlns='",k="text/xml",g="XPath",f="MSXML2.DOMDocument.6.0",j="HTML";
qx.Bootstrap.define(r,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(c){if(c.nodeType===9){return c.documentElement.nodeName!==j;
}else if(c.ownerDocument){return this.isXmlDocument(c.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(w,{"mshtml":function(A,B){var C=new ActiveXObject(this.DOMDOC);
C.setProperty(s,g);

if(B){var D=o;
D+=B;

if(A){D+=m+A+t;
}D+=q;
C.loadXML(D);
}return C;
},"default":function(a,b){return document.implementation.createDocument(a||v,b||v,null);
}}),fromString:qx.core.Variant.select(w,{"mshtml":function(F){var G=qx.xml.Document.create();
G.loadXML(F);
return G;
},"default":function(d){var e=new DOMParser();
return e.parseFromString(d,k);
}})},defer:function(x){if(qx.core.Variant.isSet(w,u)){var y=[f,p];
var z=[h,n];

for(var i=0,l=y.length;i<l;i++){try{new ActiveXObject(y[i]);
new ActiveXObject(z[i]);
}catch(E){continue;
}x.DOMDOC=y[i];
x.XMLHTTP=z[i];
break;
}}}});
})();
(function(){var d="qx.ui.core.queue.Visibility",c="visibility";
qx.Class.define(d,{statics:{__gx:{},__gy:{},remove:function(i){var j=i.$$hash;
delete this.__gy[j];
delete this.__gx[j];
},isVisible:function(k){return this.__gy[k.$$hash]||false;
},__gz:function(e){var g=this.__gy;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__gz(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(a){var b=this.__gx;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(c);
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
(function(){var h="none",g="qx.html.Decorator",f="absolute";
qx.Class.define(g,{extend:qx.html.Element,construct:function(a,b){arguments.callee.base.call(this);
this.__iw=a;
this.__ix=b||a.toHashCode();
this.useMarkup(a.getMarkup());
var c={position:f,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){c.pointerEvents=h;
}this.setStyles(c);
},members:{__ix:null,__iw:null,getId:function(){return this.__ix;
},getDecorator:function(){return this.__iw;
},resize:function(d,e){this.__iw.resize(this.getDomElement(),d,e);
},tint:function(i){this.__iw.tint(this.getDomElement(),i);
},getInsets:function(){return this.__iw.getInsets();
}},destruct:function(){this.__iw=null;
}});
})();
(function(){var Q="",P="qx.client",O="hidden",N="-moz-scrollbars-none",M="overflow",L=";",K="overflowY",J=":",I="overflowX",H="overflow:",bd="none",bc="scroll",bb="borderLeftStyle",ba="borderRightStyle",Y="div",X="borderRightWidth",W="overflow-y",V="borderLeftWidth",U="-moz-scrollbars-vertical",T="100px",R="qx.bom.element.Overflow",S="overflow-x";
qx.Class.define(R,{statics:{__iM:null,getScrollbarWidth:function(){if(this.__iM!==null){return this.__iM;
}var x=qx.bom.element.Style;
var z=function(E,F){return parseInt(x.get(E,F))||0;
};
var A=function(G){return (x.get(G,ba)==bd?0:z(G,X));
};
var y=function(be){return (x.get(be,bb)==bd?0:z(be,V));
};
var C=qx.core.Variant.select(P,{"mshtml":function(bT){if(x.get(bT,K)==O||bT.clientWidth==0){return A(bT);
}return Math.max(0,bT.offsetWidth-bT.clientLeft-bT.clientWidth);
},"default":function(o){if(o.clientWidth==0){var p=x.get(o,M);
var q=(p==bc||p==U?16:0);
return Math.max(0,A(o)+q);
}return Math.max(0,(o.offsetWidth-o.clientWidth-y(o)));
}});
var B=function(l){return C(l)-A(l);
};
var t=document.createElement(Y);
var s=t.style;
s.height=s.width=T;
s.overflow=bc;
document.body.appendChild(t);
var c=B(t);
this.__iM=c?c:16;
document.body.removeChild(t);
return this.__iM;
},_compile:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bH,bI){if(bI==O){bI=N;
}return H+bI+L;
}:
function(bK,bL){return bK+J+bL+L;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bv,bw){return H+bw+L;
}:
function(br,bs){return br+J+bs+L;
},"default":function(bP,bQ){return bP+J+bQ+L;
}}),compileX:function(bJ){return this._compile(S,bJ);
},compileY:function(bY){return this._compile(W,bY);
},getX:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bx,by){var bz=qx.bom.element.Style.get(bx,M,by,false);

if(bz===N){bz=O;
}return bz;
}:
function(r,u){return qx.bom.element.Style.get(r,I,u,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(d,e){return qx.bom.element.Style.get(d,M,e,false);
}:
function(ca,cb){return qx.bom.element.Style.get(ca,I,cb,false);
},"default":function(i,j){return qx.bom.element.Style.get(i,I,j,false);
}}),setX:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bC,bD){if(bD==O){bD=N;
}bC.style.overflow=bD;
}:
function(bF,bG){bF.style.overflowX=bG;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bj,bk){bj.style.overflow=bk;
}:
function(ce,cf){ce.style.overflowX=cf;
},"default":function(bp,bq){bp.style.overflowX=bq;
}}),resetX:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bE){bE.style.overflow=Q;
}:
function(k){k.style.overflowX=Q;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bA,bB){bA.style.overflow=Q;
}:
function(bW,bX){bW.style.overflowX=Q;
},"default":function(cd){cd.style.overflowX=Q;
}}),getY:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(f,g){var h=qx.bom.element.Style.get(f,M,g,false);

if(h===N){h=O;
}return h;
}:
function(bl,bm){return qx.bom.element.Style.get(bl,K,bm,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bf,bg){return qx.bom.element.Style.get(bf,M,bg,false);
}:
function(bR,bS){return qx.bom.element.Style.get(bR,K,bS,false);
},"default":function(bM,bN){return qx.bom.element.Style.get(bM,K,bN,false);
}}),setY:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bt,bu){if(bu===O){bu=N;
}bt.style.overflow=bu;
}:
function(v,w){v.style.overflowY=w;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bh,bi){bh.style.overflow=bi;
}:
function(bU,bV){bU.style.overflowY=bV;
},"default":function(a,b){a.style.overflowY=b;
}}),resetY:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(D){D.style.overflow=Q;
}:
function(cc){cc.style.overflowY=Q;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bn,bo){bn.style.overflow=Q;
}:
function(m,n){m.style.overflowY=Q;
},"default":function(bO){bO.style.overflowY=Q;
}})}});
})();
(function(){var r=":",q="qx.client",p="anonymous",o="...",n="qx.dev.StackTrace",m="",l="\n",k="/source/class/",j=".";
qx.Bootstrap.define(n,{statics:{getStackTrace:qx.core.Variant.select(q,{"gecko":function(){try{throw new Error();
}catch(N){var V=this.getStackTraceFromError(N);
qx.lang.Array.removeAt(V,0);
var T=this.getStackTraceFromCaller(arguments);
var R=T.length>V.length?T:V;

for(var i=0;i<Math.min(T.length,V.length);i++){var S=T[i];

if(S.indexOf(p)>=0){continue;
}var ba=S.split(r);

if(ba.length!=2){continue;
}var X=ba[0];
var Q=ba[1];
var P=V[i];
var bb=P.split(r);
var W=bb[0];
var O=bb[1];

if(qx.Class.getByName(W)){var U=W;
}else{U=X;
}var Y=U+r;

if(Q){Y+=Q+r;
}Y+=O;
R[i]=Y;
}return R;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var s;

try{s.bar();
}catch(bc){var t=this.getStackTraceFromError(bc);
qx.lang.Array.removeAt(t,0);
return t;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(q,{"opera":function(M){return [];
},"default":function(C){var H=[];
var G=qx.lang.Function.getCaller(C);
var D={};

while(G){var E=qx.lang.Function.getName(G);
H.push(E);

try{G=G.caller;
}catch(a){break;
}
if(!G){break;
}var F=qx.core.ObjectRegistry.toHashCode(G);

if(D[F]){H.push(o);
break;
}D[F]=G;
}return H;
}}),getStackTraceFromError:qx.core.Variant.select(q,{"gecko":function(u){if(!u.stack){return [];
}var A=/@(.+):(\d+)$/gm;
var v;
var w=[];

while((v=A.exec(u.stack))!=null){var x=v[1];
var z=v[2];
var y=this.__iS(x);
w.push(y+r+z);
}return w;
},"webkit":function(B){if(B.sourceURL&&B.line){return [this.__iS(B.sourceURL)+r+B.line];
}else{return [];
}},"opera":function(b){if(b.message.indexOf("Backtrace:")<0){return [];
}var d=[];
var e=qx.lang.String.trim(b.message.split("Backtrace:")[1]);
var f=e.split(l);

for(var i=0;i<f.length;i++){var c=f[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(c&&c.length>=2){var h=c[1];
var g=this.__iS(c[2]);
d.push(g+r+h);
}}return d;
},"default":function(){return [];
}}),__iS:function(I){var L=k;
var J=I.indexOf(L);
var K=(J==-1)?I:I.substring(J+L.length).replace(/\//g,j).replace(/\.js$/,m);
return K;
}}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Bootstrap.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__iK:function(){var n=navigator.platform;
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
}}},defer:function(o){o.__iK();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Bootstrap.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__jE:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__jF:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__jE){K.push(J);
}var M=new RegExp(l+K.join(C).replace(/\./g,r)+H,u);

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
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__jE[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__jF();
}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__jM=qx.dev.StackTrace.getStackTrace();
},members:{__jM:null,getStackTrace:function(){return this.__jM;
}}});
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
}},defer:qx.core.Variant.select(l,{"webkit":function(a){a.__jO(q);
},"gecko":function(F){F.__jO(m);
},"mshtml":function(G){G.__jO(x);
},"opera":function(b){b.__jO(r);
}})});
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
(function(){var i="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(i,{members:{getChildren:function(){return this.getChildrenContainer().getChildren();
},hasChildren:function(){return this.getChildrenContainer().hasChildren();
},add:function(n,o){return this.getChildrenContainer().add(n,o);
},remove:function(h){return this.getChildrenContainer().remove(h);
},removeAll:function(){return this.getChildrenContainer().removeAll();
},indexOf:function(g){return this.getChildrenContainer().indexOf(g);
},addAt:function(j,k,l){this.getChildrenContainer().addAt(j,k,l);
},addBefore:function(a,b,c){this.getChildrenContainer().addBefore(a,b,c);
},addAfter:function(d,e,f){this.getChildrenContainer().addAfter(d,e,f);
},removeAt:function(m){this.getChildrenContainer().removeAt(m);
}}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b='__fX',a="direct";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__fX=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__fY:null,compute:function(p,q,r,s,t,u,v){this.__fY=this.__fY||new qx.util.placement.Placement();
var y=t.split(f);
var x=y[0];
var w=y[1];
this.__fY.set({axisX:this.__gd(u),axisY:this.__gd(v),edge:x,align:w});
return this.__fY.compute(p,q,r,s);
},__ga:null,__gb:null,__gc:null,__gd:function(K){switch(K){case a:this.__ga=this.__ga||new qx.util.placement.DirectAxis();
return this.__ga;
case d:this.__gb=this.__gb||new qx.util.placement.KeepAlignAxis();
return this.__gb;
case c:this.__gc=this.__gc||new qx.util.placement.BestFitAxis();
return this.__gc;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__fX:null,compute:function(B,C,D,E){{};
var F=this.getAxisX()||this.__fX;
var H=F.computeStart(B.width,{start:D.left,end:D.right},{start:E.left,end:E.right},C.width,this.__ge());
var G=this.getAxisY()||this.__fX;
var top=G.computeStart(B.height,{start:D.top,end:D.bottom},{start:E.top,end:E.bottom},C.height,this.__gf());
return {left:H,top:top};
},__ge:function(){var A=this.getEdge();
var z=this.getAlign();

if(A==l){return i;
}else if(A==n){return g;
}else if(z==l){return k;
}else if(z==n){return h;
}},__gf:function(){var J=this.getEdge();
var I=this.getAlign();

if(J==o){return i;
}else if(J==m){return g;
}else if(I==o){return k;
}else if(I==m){return h;
}}},destruct:function(){this._disposeObjects(b);
}});
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
(function(){var u="execute",t="toolTipText",s="icon",r="label",q="qx.ui.core.MExecutable",p="value",o="qx.event.type.Event",n="_applyCommand",m="enabled",l="menu",j="changeCommand",k="qx.ui.core.Command";
qx.Mixin.define(q,{events:{"execute":o},properties:{command:{check:k,apply:n,event:j,nullable:true}},members:{__iO:null,__iP:false,__iQ:null,_bindableProperties:[m,r,s,t,p,l],execute:function(){var h=this.getCommand();

if(h){if(this.__iP){this.__iP=false;
}else{this.__iP=true;
h.execute(this);
}}this.fireEvent(u);
},__iR:function(e){if(this.__iP){this.__iP=false;
return;
}this.__iP=true;
this.execute();
},_applyCommand:function(a,b){if(b!=null){b.removeListenerById(this.__iQ);
}
if(a!=null){this.__iQ=a.addListener(u,this.__iR,this);
}var f=this.__iO;

if(f==null){this.__iO=f={};
}
for(var i=0;i<this._bindableProperties.length;i++){var d=this._bindableProperties[i];
if(b!=null&&f[d]!=null){b.removeBinding(f[d]);
f[d]=null;
}if(a!=null&&qx.Class.hasProperty(this.constructor,d)){var c=a.get(d);

if(c==null){var g=this.get(d);
}f[d]=a.bind(d,this,d);
if(g){this.set(d,g);
}}}}},destruct:function(){this.__iO=null;
}});
})();
(function(){var O="Integer",N="_applyDimension",M="Boolean",L="_applyStretching",K="_applyMargin",J="shorthand",I="_applyAlign",H="allowShrinkY",G="bottom",F="baseline",bd="marginBottom",bc="qx.ui.core.LayoutItem",bb="center",ba="marginTop",Y="allowGrowX",X="middle",W="marginLeft",V="allowShrinkX",U="top",T="right",R="marginRight",S="abstract",P="allowGrowY",Q="left";
qx.Class.define(bc,{type:S,extend:qx.core.Object,properties:{minWidth:{check:O,nullable:true,apply:N,init:null,themeable:true},width:{check:O,nullable:true,apply:N,init:null,themeable:true},maxWidth:{check:O,nullable:true,apply:N,init:null,themeable:true},minHeight:{check:O,nullable:true,apply:N,init:null,themeable:true},height:{check:O,nullable:true,apply:N,init:null,themeable:true},maxHeight:{check:O,nullable:true,apply:N,init:null,themeable:true},allowGrowX:{check:M,apply:L,init:true,themeable:true},allowShrinkX:{check:M,apply:L,init:true,themeable:true},allowGrowY:{check:M,apply:L,init:true,themeable:true},allowShrinkY:{check:M,apply:L,init:true,themeable:true},allowStretchX:{group:[Y,V],mode:J,themeable:true},allowStretchY:{group:[P,H],mode:J,themeable:true},marginTop:{check:O,init:0,apply:K,themeable:true},marginRight:{check:O,init:0,apply:K,themeable:true},marginBottom:{check:O,init:0,apply:K,themeable:true},marginLeft:{check:O,init:0,apply:K,themeable:true},margin:{group:[ba,R,bd,W],mode:J,themeable:true},alignX:{check:[Q,bb,T],nullable:true,apply:I,themeable:true},alignY:{check:[U,X,G,F],nullable:true,apply:I,themeable:true}},members:{__ey:null,__ez:null,__eA:null,__eB:null,__eC:null,__eD:null,__eE:null,getBounds:function(){return this.__eD||this.__ez||null;
},clearSeparators:function(){},renderSeparator:function(h,i){},renderLayout:function(a,top,b,c){var d;
{};
var e=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var e=this._getHeightForWidth(b);
}
if(e!=null&&e!==this.__ey){this.__ey=e;
qx.ui.core.queue.Layout.add(this);
return null;
}var g=this.__ez;

if(!g){g=this.__ez={};
}var f={};

if(a!==g.left||top!==g.top){f.position=true;
g.left=a;
g.top=top;
}
if(b!==g.width||c!==g.height){f.size=true;
g.width=b;
g.height=c;
}if(this.__eA){f.local=true;
delete this.__eA;
}
if(this.__eC){f.margin=true;
delete this.__eC;
}return f;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__eA;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__eA=true;
this.__eB=null;
},getSizeHint:function(C){var D=this.__eB;

if(D){return D;
}
if(C===false){return null;
}D=this.__eB=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__ey&&this.getHeight()==null){D.height=this.__ey;
}if(D.minWidth>D.width){D.width=D.minWidth;
}
if(D.maxWidth<D.width){D.width=D.maxWidth;
}
if(!this.getAllowGrowX()){D.maxWidth=D.width;
}
if(!this.getAllowShrinkX()){D.minWidth=D.width;
}if(D.minHeight>D.height){D.height=D.minHeight;
}
if(D.maxHeight<D.height){D.height=D.maxHeight;
}
if(!this.getAllowGrowY()){D.maxHeight=D.height;
}
if(!this.getAllowShrinkY()){D.minHeight=D.height;
}return D;
},_computeSizeHint:function(){var x=this.getMinWidth()||0;
var u=this.getMinHeight()||0;
var y=this.getWidth()||x;
var w=this.getHeight()||u;
var t=this.getMaxWidth()||Infinity;
var v=this.getMaxHeight()||Infinity;
return {minWidth:x,width:y,maxWidth:t,minHeight:u,height:w,maxHeight:v};
},_hasHeightForWidth:function(){var E=this._getLayout();

if(E){return E.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(o){var p=this._getLayout();

if(p&&p.hasHeightForWidth()){return p.getHeightForWidth(o);
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
},setUserBounds:function(l,top,m,n){this.__eD={left:l,top:top,width:m,height:n};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__eD;
qx.ui.core.queue.Layout.add(this);
},__eF:{},setLayoutProperties:function(q){if(q==null){return;
}var r=this.__eE;

if(!r){r=this.__eE={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(q);
}for(var s in q){if(q[s]==null){delete r[s];
}else{r[s]=q[s];
}}},getLayoutProperties:function(){return this.__eE||this.__eF;
},clearLayoutProperties:function(){delete this.__eE;
},updateLayoutProperties:function(z){var A=this._getLayout();

if(A){var B;
{};
A.invalidateChildrenCache();
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
},clone:function(){var j=arguments.callee.base.call(this);
var k=this.__eE;

if(k){j.__eE=qx.lang.Object.clone(k);
}return j;
}},destruct:function(){this.$$parent=this.$$subparent=this.__eE=this.__ez=this.__eD=this.__eB=null;
}});
})();
(function(){var fu="px",ft="Boolean",fs="qx.event.type.Mouse",fr="qx.event.type.Drag",fq="visible",fp="qx.event.type.Focus",fo="on",fn="Integer",fm="excluded",fl="qx.event.type.Data",eW="_applyPadding",eV="qx.event.type.Event",eU="hidden",eT="contextmenu",eS="String",eR="tabIndex",eQ="backgroundColor",eP="focused",eO="changeVisibility",eN="mshtml",fB="hovered",fC="qx.event.type.KeySequence",fz="qx.client",fA="absolute",fx="drag",fy="div",fv="disabled",fw="move",fD="dragstart",fE="qx.dynlocale",fe="dragchange",fd="dragend",fg="resize",ff="Decorator",fi="zIndex",fh="$$widget",fk="opacity",fj="default",fc="Color",fb="changeToolTipText",dD="beforeContextmenuOpen",dE="_applyNativeContextMenu",dF="_applyBackgroundColor",dG="__dj",dH="_applyFocusable",dI="changeShadow",dJ="qx.event.type.KeyInput",dK="__db",dL="createChildControl",dM="Font",fI="_applyShadow",fH="_applyEnabled",fG="_applySelectable",fF="Number",fM="_applyKeepActive",fL="_applyVisibility",fK="repeat",fJ="qxDraggable",fO="syncAppearance",fN="paddingLeft",en="_applyDroppable",eo="#",ek="qx.event.type.MouseWheel",em="_applyCursor",er="_applyDraggable",es="changeTextColor",ep="changeContextMenu",eq="paddingTop",ei="changeSelectable",ej="hideFocus",dU="none",dT="outline",dW="_applyAppearance",dV="_applyOpacity",dQ="url(",dP=")",dS="qx.ui.core.Widget",dR="__df",dO="_applyFont",dN="__cW",ex="cursor",ey="qxDroppable",ez="changeZIndex",eA="changeEnabled",et="changeFont",eu="_applyDecorator",ev="_applyZIndex",ew="_applyTextColor",eB="qx.ui.menu.Menu",eC="_applyToolTipText",ef="true",ee="widget",ed="changeDecorator",ec="__dc",eb="_applyTabIndex",ea="__dh",dY="__cV",dX="changeAppearance",eh="shorthand",eg="/",eD="",eE="_applyContextMenu",eF="paddingBottom",eG="changeNativeContextMenu",eH="qx.ui.tooltip.ToolTip",eI="qxKeepActive",eJ="_applyKeepFocus",eK="paddingRight",eL="changeBackgroundColor",eM="changeLocale",fa="qxKeepFocus",eY="__da",eX="qx/static/blank.gif";
qx.Class.define(dS,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__cV=this._createContainerElement();
this.__cW=this.__di();
this.__cV.add(this.__cW);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:eV,disappear:eV,createChildControl:fl,resize:fl,move:fl,syncAppearance:fl,mousemove:fs,mouseover:fs,mouseout:fs,mousedown:fs,mouseup:fs,click:fs,dblclick:fs,contextmenu:fs,beforeContextmenuOpen:fs,mousewheel:ek,keyup:fC,keydown:fC,keypress:fC,keyinput:dJ,focus:fp,blur:fp,focusin:fp,focusout:fp,activate:fp,deactivate:fp,capture:eV,losecapture:eV,drop:fr,dragleave:fr,dragover:fr,drag:fr,dragstart:fr,dragend:fr,dragchange:fr,droprequest:fr},properties:{paddingTop:{check:fn,init:0,apply:eW,themeable:true},paddingRight:{check:fn,init:0,apply:eW,themeable:true},paddingBottom:{check:fn,init:0,apply:eW,themeable:true},paddingLeft:{check:fn,init:0,apply:eW,themeable:true},padding:{group:[eq,eK,eF,fN],mode:eh,themeable:true},zIndex:{nullable:true,init:null,apply:ev,event:ez,check:fn,themeable:true},decorator:{nullable:true,init:null,apply:eu,event:ed,check:ff,themeable:true},shadow:{nullable:true,init:null,apply:fI,event:dI,check:ff,themeable:true},backgroundColor:{nullable:true,check:fc,apply:dF,event:eL,themeable:true},textColor:{nullable:true,check:fc,apply:ew,event:es,themeable:true,inheritable:true},font:{nullable:true,apply:dO,check:dM,event:et,themeable:true,inheritable:true,dispose:true},opacity:{check:fF,apply:dV,themeable:true,nullable:true,init:null},cursor:{check:eS,apply:em,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:eH,nullable:true},toolTipText:{check:eS,nullable:true,event:fb,apply:eC},toolTipIcon:{check:eS,nullable:true,event:fb},blockToolTip:{check:ft,init:false},visibility:{check:[fq,eU,fm],init:fq,apply:fL,event:eO},enabled:{init:true,check:ft,inheritable:true,apply:fH,event:eA},anonymous:{init:false,check:ft},tabIndex:{check:fn,nullable:true,apply:eb},focusable:{check:ft,init:false,apply:dH},keepFocus:{check:ft,init:false,apply:eJ},keepActive:{check:ft,init:false,apply:fM},draggable:{check:ft,init:false,apply:er},droppable:{check:ft,init:false,apply:en},selectable:{check:ft,init:false,event:ei,apply:fG},contextMenu:{check:eB,apply:eE,nullable:true,event:ep},nativeContextMenu:{check:ft,init:false,themeable:true,event:eG,apply:dE},appearance:{check:eS,init:ee,apply:dW,event:dX}},statics:{DEBUG:false,getWidgetByElement:function(cY){while(cY){var da=cY.$$widget;
if(da!=null){return qx.core.ObjectRegistry.fromHashCode(da);
}cY=cY.parentNode;
}return null;
},contains:function(parent,cp){while(cp){if(parent==cp){return true;
}cp=cp.getLayoutParent();
}return false;
},__cX:new qx.ui.core.DecoratorFactory(),__cY:new qx.ui.core.DecoratorFactory()},members:{__cV:null,__cW:null,__da:null,__db:null,__dc:null,__dd:null,__de:null,__df:null,_getLayout:function(){return this.__df;
},_setLayout:function(cH){{};

if(this.__df){this.__df.connectToWidget(null);
}
if(cH){cH.connectToWidget(this);
}this.__df=cH;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var f=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(f);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(f);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__dg:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var K=qx.theme.manager.Decoration.getInstance();
var M=K.resolve(a).getInsets();
var L=K.resolve(b).getInsets();

if(M.top!=L.top||M.right!=L.right||M.bottom!=L.bottom||M.left!=L.left){return true;
}return false;
},renderLayout:function(dq,top,dr,ds){var dB=arguments.callee.base.call(this,dq,top,dr,ds);
if(!dB){return;
}var du=this.getContainerElement();
var content=this.getContentElement();
var dy=dB.size||this._updateInsets;
var dC=fu;
var dz={};
if(dB.position){dz.left=dq+dC;
dz.top=top+dC;
}if(dB.size){dz.width=dr+dC;
dz.height=ds+dC;
}
if(dB.position||dB.size){du.setStyles(dz);
}
if(dy||dB.local||dB.margin){var dt=this.getInsets();
var innerWidth=dr-dt.left-dt.right;
var innerHeight=ds-dt.top-dt.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var dw={};

if(this._updateInsets){dw.left=dt.left+dC;
dw.top=dt.top+dC;
}
if(dy){dw.width=innerWidth+dC;
dw.height=innerHeight+dC;
}
if(dy||this._updateInsets){content.setStyles(dw);
}
if(dB.size){var dA=this.__dc;

if(dA){dA.setStyles({width:dr+fu,height:ds+fu});
}}
if(dB.size||this._updateInsets){if(this.__da){this.__da.resize(dr,ds);
}}
if(dB.size){if(this.__db){var dt=this.__db.getInsets();
var dx=dr+dt.left+dt.right;
var dv=ds+dt.top+dt.bottom;
this.__db.resize(dx,dv);
}}
if(dy||dB.local||dB.margin){if(this.__df&&this.hasLayoutChildren()){this.__df.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(dB.position&&this.hasListener(fw)){this.fireDataEvent(fw,this.getBounds());
}
if(dB.size&&this.hasListener(fg)){this.fireDataEvent(fg,this.getBounds());
}delete this._updateInsets;
return dB;
},__dh:null,clearSeparators:function(){var cd=this.__dh;

if(!cd){return;
}var ce=qx.ui.core.Widget.__cX;
var content=this.getContentElement();
var cc;

for(var i=0,l=cd.length;i<l;i++){cc=cd[i];
ce.poolDecorator(cc);
content.remove(cc);
}cd.length=0;
},renderSeparator:function(bx,by){var bz=qx.ui.core.Widget.__cX.getDecoratorElement(bx);
this.getContentElement().add(bz);
bz.resize(by.width,by.height);
bz.setStyles({left:by.left+fu,top:by.top+fu});
if(!this.__dh){this.__dh=[bz];
}else{this.__dh.push(bz);
}},_computeSizeHint:function(){var gx=this.getWidth();
var gw=this.getMinWidth();
var gs=this.getMaxWidth();
var gv=this.getHeight();
var gt=this.getMinHeight();
var gu=this.getMaxHeight();
{};
var gy=this._getContentHint();
var gr=this.getInsets();
var gA=gr.left+gr.right;
var gz=gr.top+gr.bottom;

if(gx==null){gx=gy.width+gA;
}
if(gv==null){gv=gy.height+gz;
}
if(gw==null){gw=gA;

if(gy.minWidth!=null){gw+=gy.minWidth;
}}
if(gt==null){gt=gz;

if(gy.minHeight!=null){gt+=gy.minHeight;
}}
if(gs==null){if(gy.maxWidth==null){gs=Infinity;
}else{gs=gy.maxWidth+gA;
}}
if(gu==null){if(gy.maxHeight==null){gu=Infinity;
}else{gu=gy.maxHeight+gz;
}}return {width:gx,minWidth:gw,maxWidth:gs,height:gv,minHeight:gt,maxHeight:gu};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__df){this.__df.invalidateLayoutCache();
}},_getContentHint:function(){var bn=this.__df;

if(bn){if(this.hasLayoutChildren()){var bm;
var bo=bn.getSizeHint();
{};
return bo;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(bJ){var bN=this.getInsets();
var bQ=bN.left+bN.right;
var bP=bN.top+bN.bottom;
var bO=bJ-bQ;
var bL=this._getLayout();

if(bL&&bL.hasHeightForWidth()){var bK=bL.getHeightForWidth(bJ);
}else{bK=this._getContentHeightForWidth(bO);
}var bM=bK+bP;
return bM;
},_getContentHeightForWidth:function(O){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var cJ=this.getPaddingRight();
var cL=this.getPaddingBottom();
var cK=this.getPaddingLeft();

if(this.__da){var cI=this.__da.getInsets();
{};
top+=cI.top;
cJ+=cI.right;
cL+=cI.bottom;
cK+=cI.left;
}return {"top":top,"right":cJ,"bottom":cL,"left":cK};
},getInnerSize:function(){var dj=this.getBounds();

if(!dj){return null;
}var di=this.getInsets();
return {width:dj.width-di.left-di.right,height:dj.height-di.top-di.bottom};
},show:function(){this.setVisibility(fq);
},hide:function(){this.setVisibility(eU);
},exclude:function(){this.setVisibility(fm);
},isVisible:function(){return this.getVisibility()===fq;
},isHidden:function(){return this.getVisibility()!==fq;
},isExcluded:function(){return this.getVisibility()===fm;
},isSeeable:function(){var J=this.getContainerElement().getDomElement();

if(J){return J.offsetWidth>0;
}var I=this;

do{if(!I.isVisible()){return false;
}
if(I.isRootWidget()){return true;
}I=I.getLayoutParent();
}while(I);
return false;
},_createContainerElement:function(){var gF=new qx.html.Element(fy);
{};
gF.setStyles({"position":fA,"zIndex":0});
gF.setAttribute(fh,this.toHashCode());
{};
return gF;
},__di:function(){var gC=this._createContentElement();
{};
gC.setStyles({"position":fA,"zIndex":10});
return gC;
},_createContentElement:function(){var dh=new qx.html.Element(fy);
dh.setStyles({"overflowX":eU,"overflowY":eU});
return dh;
},getContainerElement:function(){return this.__cV;
},getContentElement:function(){return this.__cW;
},getDecoratorElement:function(){return this.__da||null;
},getShadowElement:function(){return this.__db||null;
},__dj:null,getLayoutChildren:function(){var fU=this.__dj;

if(!fU){return this.__dk;
}var fV;

for(var i=0,l=fU.length;i<l;i++){var fT=fU[i];

if(fT.hasUserBounds()||fT.isExcluded()){if(fV==null){fV=fU.concat();
}qx.lang.Array.remove(fV,fT);
}}return fV||fU;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var ch=this.__df;

if(ch){ch.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var R=this.__dj;

if(!R){return false;
}var S;

for(var i=0,l=R.length;i<l;i++){S=R[i];

if(!S.hasUserBounds()&&!S.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__dk:[],_getChildren:function(){return this.__dj||this.__dk;
},_indexOf:function(bt){var bu=this.__dj;

if(!bu){return -1;
}return bu.indexOf(bt);
},_hasChildren:function(){var N=this.__dj;
return N!=null&&(!!N[0]);
},addChildrenToQueue:function(cw){var cx=this.__dj;

if(!cx){return;
}var cy;

for(var i=0,l=cx.length;i<l;i++){cy=cx[i];
cw[cy.$$hash]=cy;
cy.addChildrenToQueue(cw);
}},_add:function(cu,cv){if(cu.getLayoutParent()==this){qx.lang.Array.remove(this.__dj,cu);
}
if(this.__dj){this.__dj.push(cu);
}else{this.__dj=[cu];
}this.__dl(cu,cv);
},_addAt:function(cU,cV,cW){if(!this.__dj){this.__dj=[];
}if(cU.getLayoutParent()==this){qx.lang.Array.remove(this.__dj,cU);
}var cX=this.__dj[cV];

if(cX===cU){return cU.setLayoutProperties(cW);
}
if(cX){qx.lang.Array.insertBefore(this.__dj,cU,cX);
}else{this.__dj.push(cU);
}this.__dl(cU,cW);
},_addBefore:function(bG,bH,bI){{};

if(bG==bH){return;
}
if(!this.__dj){this.__dj=[];
}if(bG.getLayoutParent()==this){qx.lang.Array.remove(this.__dj,bG);
}qx.lang.Array.insertBefore(this.__dj,bG,bH);
this.__dl(bG,bI);
},_addAfter:function(gh,gi,gj){{};

if(gh==gi){return;
}
if(!this.__dj){this.__dj=[];
}if(gh.getLayoutParent()==this){qx.lang.Array.remove(this.__dj,gh);
}qx.lang.Array.insertAfter(this.__dj,gh,gi);
this.__dl(gh,gj);
},_remove:function(fP){if(!this.__dj){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__dj,fP);
this.__dm(fP);
},_removeAt:function(dd){if(!this.__dj){throw new Error("This widget has no children!");
}var de=this.__dj[dd];
qx.lang.Array.removeAt(this.__dj,dd);
this.__dm(de);
return de;
},_removeAll:function(){if(!this.__dj){return;
}var gB=this.__dj.concat();
this.__dj.length=0;

for(var i=gB.length-1;i>=0;i--){this.__dm(gB[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__dl:function(j,k){{};
var parent=j.getLayoutParent();

if(parent&&parent!=this){parent._remove(j);
}j.setLayoutParent(this);
if(k){j.setLayoutProperties(k);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(j);
}},__dm:function(cG){{};

if(cG.getLayoutParent()!==this){throw new Error("Remove Error: "+cG+" is not a child of this widget!");
}cG.setLayoutParent(null);
if(this.__df){this.__df.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(cG);
}},capture:function(cT){this.getContainerElement().capture(cT);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(df,dg,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dc){return;
}var fY=this.__dc=new qx.html.Element;
{};
fY.setStyles({position:fA,top:0,left:0,zIndex:7});
var ga=this.getBounds();

if(ga){this.__dc.setStyles({width:ga.width+fu,height:ga.height+fu});
}if(qx.core.Variant.isSet(fz,eN)){fY.setStyles({backgroundImage:dQ+qx.util.ResourceManager.getInstance().toUri(eX)+dP,backgroundRepeat:fK});
}this.getContainerElement().add(fY);
},_applyDecorator:function(bf,bg){{};
var bk=qx.ui.core.Widget.__cX;
var bi=this.getContainerElement();
if(!this.__dc&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(bg){bi.remove(this.__da);
bk.poolDecorator(this.__da);
}if(bf){var bj=this.__da=bk.getDecoratorElement(bf);
bj.setStyle(fi,5);
var bh=this.getBackgroundColor();
bj.tint(bh);
bi.add(bj);
}else{delete this.__da;
this._applyBackgroundColor(this.getBackgroundColor());
}if(bf&&!bg&&bh){this.getContainerElement().setStyle(eQ,null);
}if(this.__dg(bg,bf)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(bf){var bl=this.getBounds();

if(bl){bj.resize(bl.width,bl.height);
this.__dc&&
this.__dc.setStyles({width:bl.width+fu,height:bl.height+fu});
}}},_applyShadow:function(bS,bT){var cb=qx.ui.core.Widget.__cY;
var bV=this.getContainerElement();
if(bT){bV.remove(this.__db);
cb.poolDecorator(this.__db);
}if(bS){var bX=this.__db=cb.getDecoratorElement(bS);
bV.add(bX);
var ca=bX.getInsets();
bX.setStyles({left:(-ca.left)+fu,top:(-ca.top)+fu});
var bY=this.getBounds();

if(bY){var bW=bY.width+ca.left+ca.right;
var bU=bY.height+ca.top+ca.bottom;
bX.resize(bW,bU);
}bX.tint(null);
}else{delete this.__db;
}},_applyToolTipText:function(cj,ck){if(qx.core.Variant.isSet(fE,fo)){if(this.__de){return;
}var cl=qx.locale.Manager.getInstance();
this.__de=cl.addListener(eM,function(){if(cj&&cj.translate){this.setToolTipText(cj.translate());
}},this);
}},_applyTextColor:function(G,H){},_applyZIndex:function(gk,gl){this.getContainerElement().setStyle(fi,gk==null?0:gk);
},_applyVisibility:function(B,C){var D=this.getContainerElement();

if(B===fq){D.show();
}else{D.hide();
}var parent=this.$$parent;

if(parent&&(C==null||B==null||C===fm||B===fm)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(q,r){this.getContainerElement().setStyle(fk,q==1?null:q);
if(qx.core.Variant.isSet(fz,eN)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var s=(q==1||q==null)?null:0.99;
this.getContentElement().setStyle(fk,s);
}}},_applyCursor:function(cQ,cR){if(cQ==null&&!this.isSelectable()){cQ=fj;
}this.getContainerElement().setStyle(ex,cQ,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(cB,cC){var cD=this.getBackgroundColor();
var cF=this.getContainerElement();

if(this.__da){this.__da.tint(cD);
cF.setStyle(eQ,null);
}else{var cE=qx.theme.manager.Color.getInstance().resolve(cD);
cF.setStyle(eQ,cE);
}},_applyFont:function(cz,cA){},__dn:null,$$stateChanges:null,_forwardStates:null,hasState:function(y){var z=this.__dn;
return z&&z[y];
},addState:function(dk){var dl=this.__dn;

if(!dl){dl=this.__dn={};
}
if(dl[dk]){return;
}this.__dn[dk]=true;
if(dk===fB){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var dp=this.__dq;

if(forward&&forward[dk]&&dp){var dm;

for(var dn in dp){dm=dp[dn];

if(dm instanceof qx.ui.core.Widget){dp[dn].addState(dk);
}}}},removeState:function(gm){var gn=this.__dn;

if(!gn||!gn[gm]){return;
}delete this.__dn[gm];
if(gm===fB){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gq=this.__dq;

if(forward&&forward[gm]&&gq){for(var gp in gq){var go=gq[gp];

if(go instanceof qx.ui.core.Widget){go.removeState(gm);
}}}},replaceState:function(gS,gT){var gU=this.__dn;

if(!gU){gU=this.__dn={};
}
if(!gU[gT]){gU[gT]=true;
}
if(gU[gS]){delete gU[gS];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gX=this.__dq;

if(forward&&forward[gT]&&gX){for(var gW in gX){var gV=gX[gW];

if(gV instanceof qx.ui.core.Widget){gV.replaceState(gS,gT);
}}}},__do:null,__dp:null,syncAppearance:function(){var gM=this.__dn;
var gL=this.__do;
var gN=qx.theme.manager.Appearance.getInstance();
var gJ=qx.core.Property.$$method.setThemed;
var gR=qx.core.Property.$$method.resetThemed;
if(this.__dp){delete this.__dp;
if(gL){var gI=gN.styleFrom(gL,gM,null,this.getAppearance());
if(gI){gL=null;
}}}if(!gL){var gK=this;
var gQ=[];

do{gQ.push(gK.$$subcontrol||gK.getAppearance());
}while(gK=gK.$$subparent);
gL=this.__do=gQ.reverse().join(eg).replace(/#[0-9]+/g,eD);
}var gO=gN.styleFrom(gL,gM,null,this.getAppearance());

if(gO){var gP;

if(gI){for(var gP in gI){if(gO[gP]===undefined){this[gR[gP]]();
}}}{};
for(var gP in gO){gO[gP]===undefined?this[gR[gP]]():this[gJ[gP]](gO[gP]);
}}else if(gI){for(var gP in gI){this[gR[gP]]();
}}this.fireDataEvent(fO,this.__dn);
},_applyAppearance:function(cq,cr){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dd){qx.ui.core.queue.Appearance.add(this);
this.__dd=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__dp=true;
qx.ui.core.queue.Appearance.add(this);
var be=this.__dq;

if(be){var bc;

for(var bd in be){bc=be[bd];

if(bc instanceof qx.ui.core.Widget){bc.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var cm=this;

while(cm.getAnonymous()){cm=cm.getLayoutParent();

if(!cm){return null;
}}return cm;
},getFocusTarget:function(){var A=this;

if(!A.getEnabled()){return null;
}
while(A.getAnonymous()||!A.getFocusable()){A=A.getLayoutParent();

if(!A||!A.getEnabled()){return null;
}}return A;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(T,U){var V=this.getFocusElement();
if(T){var W=this.getTabIndex();

if(W==null){W=1;
}V.setAttribute(eR,W);
if(qx.core.Variant.isSet(fz,eN)){V.setAttribute(ej,ef);
}else{V.setStyle(dT,dU);
}}else{if(V.isNativelyFocusable()){V.setAttribute(eR,-1);
}else if(U){V.setAttribute(eR,null);
}}},_applyKeepFocus:function(X){var Y=this.getFocusElement();
Y.setAttribute(fa,X?fo:null);
},_applyKeepActive:function(gD){var gE=this.getContainerElement();
gE.setAttribute(eI,gD?fo:null);
},_applyTabIndex:function(m){if(m==null){m=1;
}else if(m<1||m>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&m!=null){this.getFocusElement().setAttribute(eR,m);
}},_applySelectable:function(cS){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(cS);
this.getContentElement().setSelectable(cS);
},_applyEnabled:function(cf,cg){if(cf===false){this.addState(fv);
this.removeState(fB);
if(this.isFocusable()){this.removeState(eP);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(fv);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(ba,bb,name){},_applyContextMenu:function(bp,bq){if(bq){bq.removeState(eT);

if(bq.getOpener()==this){bq.resetOpener();
}
if(!bp){this.removeListener(eT,this._onContextMenuOpen);
bq.removeListener(eO,this._onBeforeContextMenuOpen,this);
}}
if(bp){bp.setOpener(this);
bp.addState(eT);

if(!bq){this.addListener(eT,this._onContextMenuOpen);
bp.addListener(eO,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==fq&&this.hasListener(dD)){this.fireDataEvent(dD,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(g,h){if(!this.isEnabled()&&g===true){g=false;
}qx.ui.core.DragDropCursor.getInstance();
if(g){this.addListener(fD,this._onDragStart);
this.addListener(fx,this._onDrag);
this.addListener(fd,this._onDragEnd);
this.addListener(fe,this._onDragChange);
}else{this.removeListener(fD,this._onDragStart);
this.removeListener(fx,this._onDrag);
this.removeListener(fd,this._onDragEnd);
this.removeListener(fe,this._onDragChange);
}this.getContainerElement().setAttribute(fJ,g?fo:null);
},_applyDroppable:function(fQ,fR){if(!this.isEnabled()&&fQ===true){fQ=false;
}this.getContainerElement().setAttribute(ey,fQ?fo:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(fj);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var c=qx.ui.core.DragDropCursor.getInstance();
var d=e.getCurrentAction();
d?c.setAction(d):c.resetAction();
},visualizeFocus:function(){this.addState(eP);
},visualizeBlur:function(){this.removeState(eP);
},scrollChildIntoView:function(cM,cN,cO,cP){this.scrollChildIntoViewX(cM,cN,cP);
this.scrollChildIntoViewY(cM,cO,cP);
},scrollChildIntoViewX:function(bA,bB,bC){this.getContentElement().scrollChildIntoViewX(bA.getContainerElement(),bB,bC);
},scrollChildIntoViewY:function(bD,bE,bF){this.getContentElement().scrollChildIntoViewY(bD.getContainerElement(),bE,bF);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(bR){if(!this.__dq){return false;
}return !!this.__dq[bR];
},__dq:null,_getCreatedChildControls:function(){return this.__dq;
},getChildControl:function(n,o){if(!this.__dq){if(o){return null;
}this.__dq={};
}var p=this.__dq[n];

if(p){return p;
}
if(o===true){return null;
}return this._createChildControl(n);
},_showChildControl:function(fW){var fX=this.getChildControl(fW);
fX.show();
return fX;
},_excludeChildControl:function(gG){var gH=this.getChildControl(gG,true);

if(gH){gH.exclude();
}},_isChildControlVisible:function(br){var bs=this.getChildControl(br,true);

if(bs){return bs.isVisible();
}return false;
},_createChildControl:function(t){if(!this.__dq){this.__dq={};
}else if(this.__dq[t]){throw new Error("Child control '"+t+"' already created!");
}var x=t.indexOf(eo);

if(x==-1){var u=this._createChildControlImpl(t);
}else{var u=this._createChildControlImpl(t.substring(0,x));
}
if(!u){throw new Error("Unsupported control: "+t);
}u.$$subcontrol=t;
u.$$subparent=this;
var v=this.__dn;
var forward=this._forwardStates;

if(v&&forward&&u instanceof qx.ui.core.Widget){for(var w in v){if(forward[w]){u.addState(w);
}}}this.fireDataEvent(dL,u);
return this.__dq[t]=u;
},_createChildControlImpl:function(fS){return null;
},_disposeChildControls:function(){var gg=this.__dq;

if(!gg){return;
}var ge=qx.ui.core.Widget;

for(var gf in gg){var gd=gg[gf];

if(!ge.contains(this,gd)){gd.destroy();
}else{gd.dispose();
}}delete this.__dq;
},_findTopControl:function(){var ci=this;

while(ci){if(!ci.$$subparent){return ci;
}ci=ci.$$subparent;
}return null;
},getContainerLocation:function(P){var Q=this.getContainerElement().getDomElement();
return Q?qx.bom.element.Location.get(Q,P):null;
},getContentLocation:function(cs){var ct=this.getContentElement().getDomElement();
return ct?qx.bom.element.Location.get(ct,cs):null;
},setDomLeft:function(E){var F=this.getContainerElement().getDomElement();

if(F){F.style.left=E+fu;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(bv){var bw=this.getContainerElement().getDomElement();

if(bw){bw.style.top=bv+fu;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(db,top){var dc=this.getContainerElement().getDomElement();

if(dc){dc.style.left=db+fu;
dc.style.top=top+fu;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var cn=arguments.callee.base.call(this);

if(this.getChildren){var co=this.getChildren();

for(var i=0,l=co.length;i<l;i++){cn.add(co[i].clone());
}}return cn;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(fE,fo)){if(this.__de){qx.locale.Manager.getInstance().removeListenerById(this.__de);
}}this.getContainerElement().setAttribute(fh,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var gc=qx.ui.core.Widget;
var gb=this.getContainerElement();

if(this.__da){gb.remove(this.__da);
gc.__cX.poolDecorator(this.__da);
}
if(this.__db){gb.remove(this.__db);
gc.__cY.poolDecorator(this.__db);
}this.clearSeparators();
this.__da=this.__db=this.__dh=null;
}else{this._disposeArray(ea);
this._disposeObjects(eY,dK);
}this._disposeArray(dG);
this.__dn=this.__dq=null;
this._disposeObjects(dR,dY,dN,ec);
}});
})();
(function(){var l="label",k="icon",j="Boolean",i="both",h="String",g="left",f="changeGap",e="changeShow",d="bottom",c="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="top",s="right",r="_applyRich",q="_applyIcon",p="_applyShow",n="_applyLabel",o="_applyGap",m="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(G,H){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(G!=null){this.setLabel(G);
}
if(H!=null){this.setIcon(H);
}},properties:{appearance:{refine:true,init:m},label:{apply:n,nullable:true,check:h,event:w},rich:{check:j,init:false,apply:r},icon:{check:h,apply:q,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:f,apply:o,themeable:true,init:4},show:{init:i,check:[i,l,k],themeable:true,inheritable:true,apply:p,event:e},iconPosition:{init:g,check:[t,s,d,g],themeable:true,apply:u},center:{init:false,check:j,themeable:true,apply:c}},members:{_createChildControlImpl:function(z){var A;

switch(z){case l:A=new qx.ui.basic.Label(this.getLabel());
A.setAnonymous(true);
A.setRich(this.getRich());
this._add(A);

if(this.getLabel()==null||this.getShow()===k){A.exclude();
}break;
case k:A=new qx.ui.basic.Image(this.getIcon());
A.setAnonymous(true);
this._addAt(A,0);

if(this.getIcon()==null||this.getShow()===l){A.exclude();
}break;
}return A||arguments.callee.base.call(this,z);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===k){this._excludeChildControl(l);
}else{this._showChildControl(l);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===l){this._excludeChildControl(k);
}else{this._showChildControl(k);
}},_applyLabel:function(I,J){var K=this.getChildControl(l,true);

if(K){K.setValue(I);
}this._handleLabel();
},_applyRich:function(P,Q){var R=this.getChildControl(l,true);

if(R){R.setRich(P);
}},_applyIcon:function(B,C){var D=this.getChildControl(k,true);

if(D){D.setSource(B);
}this._handleIcon();
},_applyGap:function(N,O){this._getLayout().setGap(N);
},_applyShow:function(E,F){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(L,M){this._getLayout().setIconPosition(L);
},_applyCenter:function(a,b){this._getLayout().setCenter(a);
}}});
})();
(function(){var E="middle",D="qx.ui.layout.Util",C="left",B="center",A="top",z="bottom",y="right";
qx.Class.define(D,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(be,bf,bg){var bi,bm,bh,bn;
var bj=bf>bg;
var bo=Math.abs(bf-bg);
var bp,bk;
var bl={};

for(bm in be){bi=be[bm];
bl[bm]={potential:bj?bi.max-bi.value:bi.value-bi.min,flex:bj?bi.flex:1/bi.flex,offset:0};
}while(bo!=0){bn=Infinity;
bh=0;

for(bm in bl){bi=bl[bm];

if(bi.potential>0){bh+=bi.flex;
bn=Math.min(bn,bi.potential/bi.flex);
}}if(bh==0){break;
}bn=Math.min(bo,bn*bh)/bh;
bp=0;

for(bm in bl){bi=bl[bm];

if(bi.potential>0){bk=Math.min(bo,bi.potential,Math.ceil(bn*bi.flex));
bp+=bk-bn*bi.flex;

if(bp>=1){bp-=1;
bk-=1;
}bi.potential-=bk;

if(bj){bi.offset+=bk;
}else{bi.offset-=bk;
}bo-=bk;
}}}return bl;
},computeHorizontalAlignOffset:function(X,Y,ba,bb,bc){if(bb==null){bb=0;
}
if(bc==null){bc=0;
}var bd=0;

switch(X){case C:bd=bb;
break;
case y:bd=ba-Y-bc;
break;
case B:bd=Math.round((ba-Y)/2);
if(bd<bb){bd=bb;
}else if(bd<bc){bd=Math.max(bb,ba-Y-bc);
}break;
}return bd;
},computeVerticalAlignOffset:function(N,O,P,Q,R){if(Q==null){Q=0;
}
if(R==null){R=0;
}var S=0;

switch(N){case A:S=Q;
break;
case z:S=P-O-R;
break;
case E:S=Math.round((P-O)/2);
if(S<Q){S=Q;
}else if(S<R){S=Math.max(Q,P-O-R);
}break;
}return S;
},collapseMargins:function(u){var v=0,x=0;

for(var i=0,l=arguments.length;i<l;i++){var w=arguments[i];

if(w<0){x=Math.min(x,w);
}else if(w>0){v=Math.max(v,w);
}}return v+x;
},computeHorizontalGaps:function(T,U,V){if(U==null){U=0;
}var W=0;

if(V){W+=T[0].getMarginLeft();

for(var i=1,l=T.length;i<l;i+=1){W+=this.collapseMargins(U,T[i-1].getMarginRight(),T[i].getMarginLeft());
}W+=T[l-1].getMarginRight();
}else{for(var i=1,l=T.length;i<l;i+=1){W+=T[i].getMarginLeft()+T[i].getMarginRight();
}W+=(U*(l-1));
}return W;
},computeVerticalGaps:function(q,r,s){if(r==null){r=0;
}var t=0;

if(s){t+=q[0].getMarginTop();

for(var i=1,l=q.length;i<l;i+=1){t+=this.collapseMargins(r,q[i-1].getMarginBottom(),q[i].getMarginTop());
}t+=q[l-1].getMarginBottom();
}else{for(var i=1,l=q.length;i<l;i+=1){t+=q[i].getMarginTop()+q[i].getMarginBottom();
}t+=(r*(l-1));
}return t;
},computeHorizontalSeparatorGaps:function(F,G,H){var K=qx.theme.manager.Decoration.getInstance().resolve(H);
var J=K.getInsets();
var I=J.left+J.right;
var L=0;

for(var i=0,l=F.length;i<l;i++){var M=F[i];
L+=M.getMarginLeft()+M.getMarginRight();
}L+=(G+I+G)*(l-1);
return L;
},computeVerticalSeparatorGaps:function(g,h,j){var n=qx.theme.manager.Decoration.getInstance().resolve(j);
var m=n.getInsets();
var k=m.top+m.bottom;
var o=0;

for(var i=0,l=g.length;i<l;i++){var p=g[i];
o+=p.getMarginTop()+p.getMarginBottom();
}o+=(h+k+h)*(l-1);
return o;
},arrangeIdeals:function(a,b,c,d,e,f){if(b<a||e<d){if(b<a&&e<d){b=a;
e=d;
}else if(b<a){e-=(a-b);
b=a;
if(e<d){e=d;
}}else if(e<d){b-=(d-e);
e=d;
if(b<a){b=a;
}}}
if(b>c||e>f){if(b>c&&e>f){b=c;
e=f;
}else if(b>c){e+=(b-c);
b=c;
if(e>f){e=f;
}}else if(e>f){b+=(e-f);
e=f;
if(b>c){b=c;
}}}return {begin:b,end:e};
}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var b="qx.event.handler.Object";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){return qx.Class.supportsEvent(f.constructor,g);
},registerEvent:function(h,i,j){},unregisterEvent:function(c,d,e){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var n="interval",m="qx.event.Timer",l="_applyInterval",k="_applyEnabled",j="Boolean",i="qx.event.type.Event",h="Integer";
qx.Class.define(m,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.setEnabled(false);

if(a!=null){this.setInterval(a);
}var self=this;
this.__dC=function(){self._oninterval.call(self);
};
},events:{"interval":i},statics:{once:function(b,c,d){var f=new qx.event.Timer(d);
f.addListener(n,function(e){f.stop();
b.call(c,e);
f.dispose();
c=null;
},c);
f.start();
return f;
}},properties:{enabled:{init:true,check:j,apply:k},interval:{check:h,init:1000,apply:l}},members:{__dD:null,__dC:null,_applyInterval:function(r,s){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__dD);
this.__dD=null;
}else if(p){this.__dD=window.setInterval(this.__dC,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(g){this.setInterval(g);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(o){this.stop();
this.startWith(o);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(n);
}})},destruct:function(){if(this.__dD){window.clearInterval(this.__dD);
}this.__dD=this.__dC=null;
}});
})();
(function(){var c="qx.event.handler.UserAction";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__iG=a;
this.__iH=a.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__iG:null,__iH:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(d,e,f){}},destruct:function(){this.__iG=this.__iH=null;
},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var U="qx.client",T="mouseup",S="click",R="mousedown",Q="contextmenu",P="mousewheel",O="dblclick",N="mshtml",M="mouseover",L="mouseout",G="DOMMouseScroll",K="mousemove",J="on",F="mshtml|webkit|opera",E="useraction",I="gecko|webkit",H="qx.event.handler.Mouse";
qx.Class.define(H,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){arguments.callee.base.call(this);
this.__dE=o;
this.__dF=o.getWindow();
this.__dG=this.__dF.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dH:null,__dI:null,__dJ:null,__dK:null,__dL:null,__dE:null,__dF:null,__dG:null,canHandleEvent:function(V,W){},registerEvent:qx.bom.client.System.IPHONE?
function(A,B,C){A[J+B]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(k,l,m){k[J+l]=undefined;
}:qx.lang.Function.returnNull,__dM:function(u,v,w){if(!w){w=u.target||u.srcElement;
}if(w&&w.nodeType){qx.event.Registration.fireEvent(w,v||u.type,v==P?qx.event.type.MouseWheel:qx.event.type.Mouse,[u,w,null,true,true]);
}qx.event.Registration.fireEvent(this.__dF,E,qx.event.type.Data,[v||u.type]);
},_initButtonObserver:function(){this.__dH=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,R,this.__dH);
Event.addNativeListener(this.__dG,T,this.__dH);
Event.addNativeListener(this.__dG,S,this.__dH);
Event.addNativeListener(this.__dG,O,this.__dH);
Event.addNativeListener(this.__dG,Q,this.__dH);
},_initMoveObserver:function(){this.__dI=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,K,this.__dI);
Event.addNativeListener(this.__dG,M,this.__dI);
Event.addNativeListener(this.__dG,L,this.__dI);
},_initWheelObserver:function(){this.__dJ=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var a=qx.core.Variant.isSet(U,F)?P:G;
var b=qx.core.Variant.isSet(U,N)?this.__dG:this.__dF;
Event.addNativeListener(b,a,this.__dJ);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,R,this.__dH);
Event.removeNativeListener(this.__dG,T,this.__dH);
Event.removeNativeListener(this.__dG,S,this.__dH);
Event.removeNativeListener(this.__dG,O,this.__dH);
Event.removeNativeListener(this.__dG,Q,this.__dH);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,K,this.__dI);
Event.removeNativeListener(this.__dG,M,this.__dI);
Event.removeNativeListener(this.__dG,L,this.__dI);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var c=qx.core.Variant.isSet(U,F)?P:G;
var d=qx.core.Variant.isSet(U,N)?this.__dG:this.__dF;
Event.removeNativeListener(d,c,this.__dJ);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(D){this.__dM(D);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(X){var Y=X.type;
var ba=X.target||X.srcElement;
if(qx.core.Variant.isSet(U,I)){if(ba&&ba.nodeType==3){ba=ba.parentNode;
}}
if(this.__dN){this.__dN(X,Y,ba);
}
if(this.__dP){this.__dP(X,Y,ba);
}this.__dM(X,Y,ba);

if(this.__dO){this.__dO(X,Y,ba);
}
if(this.__dQ){this.__dQ(X,Y,ba);
}this.__dK=Y;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(n){this.__dM(n,P);
}),__dN:qx.core.Variant.select(U,{"webkit":function(e,f,g){if(qx.bom.client.Engine.VERSION<530){if(f==Q){this.__dM(e,T,g);
}}},"default":null}),__dO:qx.core.Variant.select(U,{"opera":function(h,i,j){if(i==T&&h.button==2){this.__dM(h,Q,j);
}},"default":null}),__dP:qx.core.Variant.select(U,{"mshtml":function(x,y,z){if(y==T&&this.__dK==S){this.__dM(x,R,z);
}else if(y==O){this.__dM(x,S,z);
}},"default":null}),__dQ:qx.core.Variant.select(U,{"mshtml":null,"default":function(q,r,s){switch(r){case R:this.__dL=s;
break;
case T:if(s!==this.__dL){var t=qx.dom.Hierarchy.getCommonParent(s,this.__dL);
this.__dM(q,S,t);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dE=this.__dF=this.__dG=this.__dL=null;
},defer:function(p){qx.event.Registration.addHandler(p);
}});
})();
(function(){var h="qx.client",g="qx.bom.Viewport";
qx.Class.define(g,{statics:{getWidth:qx.core.Variant.select(h,{"opera":function(a){if(qx.bom.client.Engine.VERSION<9.5){return (a||window).document.body.clientWidth;
}else{var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientWidth:b.body.clientWidth;
}},"webkit":function(n){if(qx.bom.client.Engine.VERSION<523.15){return (n||window).innerWidth;
}else{var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientWidth:o.body.clientWidth;
}},"default":function(p){var q=(p||window).document;
return qx.bom.Document.isStandardMode(p)?q.documentElement.clientWidth:q.body.clientWidth;
}}),getHeight:qx.core.Variant.select(h,{"opera":function(j){if(qx.bom.client.Engine.VERSION<9.5){return (j||window).document.body.clientHeight;
}else{var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientHeight:k.body.clientHeight;
}},"webkit":function(r){if(qx.bom.client.Engine.VERSION<523.15){return (r||window).innerHeight;
}else{var s=(r||window).document;
return qx.bom.Document.isStandardMode(r)?s.documentElement.clientHeight:s.body.clientHeight;
}},"default":function(e){var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(h,{"mshtml":function(c){var d=(c||window).document;
return d.documentElement.scrollLeft||d.body.scrollLeft;
},"default":function(t){return (t||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(h,{"mshtml":function(l){var m=(l||window).document;
return m.documentElement.scrollTop||m.body.scrollTop;
},"default":function(i){return (i||window).pageYOffset;
}})}});
})();
(function(){var o="",n="qx.client",m="readOnly",l="accessKey",k="qx.bom.element.Attribute",j="rowSpan",i="vAlign",h="className",g="textContent",f="'",C="htmlFor",B="longDesc",A="cellSpacing",z="frameBorder",y="='",x="useMap",w="innerText",v="innerHTML",u="tabIndex",t="dateTime",r="maxLength",s="mshtml",p="cellPadding",q="colSpan";
qx.Class.define(k,{statics:{__fV:{names:{"class":h,"for":C,html:v,text:qx.core.Variant.isSet(n,s)?w:g,colspan:q,rowspan:j,valign:i,datetime:t,accesskey:l,tabindex:u,maxlength:r,readonly:m,longdesc:B,cellpadding:p,cellspacing:A,frameborder:z,usemap:x},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:o,maxLength:10000000,className:o,innerHTML:o,innerText:o,textContent:o,htmlFor:o,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(b){var c=[];
var e=this.__fV.runtime;

for(var d in b){if(!e[d]){c.push(d,y,b[d],f);
}}return c.join(o);
},get:qx.core.Variant.select(n,{"mshtml":function(J,name){var L=this.__fV;
var K;
name=L.names[name]||name;
if(L.original[name]){K=J.getAttribute(name,2);
}else if(L.property[name]){if(L.propertyDefault[name]&&K==L.propertyDefault[name]){return null;
}K=J[name];
}else{K=J.getAttribute(name);
}if(L.bools[name]){return !!K;
}return K;
},"default":function(G,name){var I=this.__fV;
var H;
name=I.names[name]||name;
if(I.property[name]){if(I.propertyDefault[name]&&H==I.propertyDefault[name]){return null;
}H=G[name];

if(H==null){H=G.getAttribute(name);
}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(D,name,E){var F=this.__fV;
name=F.names[name]||name;
if(F.bools[name]){E=!!E;
}if(F.property[name]){if(E==null){E=F.propertyDefault[name];

if(E===undefined){E=null;
}}D[name]=E;
}else{if(E===true){D.setAttribute(name,name);
}else if(E===false||E===null){D.removeAttribute(name);
}else{D.setAttribute(name,E);
}}},reset:function(a,name){this.set(a,name,null);
}}});
})();
(function(){var g="qx.ui.core.MChildrenHandling";
qx.Mixin.define(g,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(b){return this._indexOf(b);
},add:function(o,p){this._add(o,p);
},addAt:function(k,l,m){this._addAt(k,l,m);
},addBefore:function(h,i,j){this._addBefore(h,i,j);
},addAfter:function(d,e,f){this._addAfter(d,e,f);
},remove:function(a){this._remove(a);
},removeAt:function(n){return this._removeAt(n);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(c){c.getChildren=c._getChildren;
c.hasChildren=c._hasChildren;
c.indexOf=c._indexOf;
c.add=c._add;
c.addAt=c._addAt;
c.addBefore=c._addBefore;
c.addAfter=c._addAfter;
c.remove=c._remove;
c.removeAt=c._removeAt;
c.removeAll=c._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(c){return this._setLayout(c);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(b){b.getLayout=b._getLayout;
b.setLayout=b._setLayout;
}}});
})();
(function(){var g="qx.event.type.Data",f="qx.ui.container.Composite",e="addChildWidget",d="removeChildWidget";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(c){arguments.callee.base.call(this);

if(c!=null){this._setLayout(c);
}},events:{addChildWidget:g,removeChildWidget:g},members:{_afterAddChild:function(i){this.fireNonBubblingEvent(e,qx.event.type.Data,[i]);
},_afterRemoveChild:function(h){this.fireNonBubblingEvent(d,qx.event.type.Data,[h]);
}},defer:function(a,b){qx.ui.core.MChildrenHandling.remap(b);
qx.ui.core.MLayoutHandling.remap(b);
}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__fW:{},remove:function(j){delete this.__fW[j.$$hash];
},add:function(c){var d=this.__fW;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(i){return !!this.__fW[i.$$hash];
},flush:function(){var h=qx.ui.core.queue.Visibility;
var e=this.__fW;
var g;

for(var f in e){g=e[f];
delete e[f];
if(h.isVisible(g)){g.syncAppearance();
}else{g.$$stateChanges=true;
}}}}});
})();
(function(){var c="qx.ui.core.queue.Manager",b="useraction";
qx.Class.define(c,{statics:{__js:false,__jt:{},__ju:0,MAX_RETRIES:10,scheduleFlush:function(d){var self=qx.ui.core.queue.Manager;
self.__jt[d]=true;

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
},__jw:function(f,g){var self=qx.ui.core.queue.Manager;

try{f();
}catch(e){{};
self.__js=false;
self.__jv=false;
self.__ju+=1;

if(self.__ju<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__ju-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{g();
}}},defer:function(a){a.__jx=new qx.util.DeferredCall(a.flush);
qx.html.Element._scheduleFlush=a.scheduleFlush;
qx.event.Registration.addListener(window,b,a.flush);
}});
})();
(function(){var j="qx.util.ObjectPool",h="Integer";
qx.Class.define(j,{extend:qx.core.Object,construct:function(d){arguments.callee.base.call(this);
this.__eG={};

if(d!=null){this.setSize(d);
}},properties:{size:{check:h,init:Infinity}},members:{__eG:null,getObject:function(e){if(this.$$disposed){return;
}
if(!e){throw new Error("Class needs to be defined!");
}var f=null;
var g=this.__eG[e.classname];

if(g){f=g.pop();
}
if(f){f.$$pooled=false;
}else{f=new e;
}return f;
},poolObject:function(a){if(!this.__eG){return;
}var b=a.classname;
var c=this.__eG[b];

if(a.$$pooled){throw new Error("Object is already pooled: "+a);
}
if(!c){this.__eG[b]=c=[];
}if(c.length>this.getSize()){if(a.destroy){a.destroy();
}else{a.dispose();
}return;
}a.$$pooled=true;
c.push(a);
}},destruct:function(){var n=this.__eG;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__eG;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var v="qx.client",u="gecko",t="div",s="inherit",r="text",q="value",p="",o="hidden",n="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",m="nowrap",M="auto",L="ellipsis",K="normal",J="label",I="px",H="crop",G="end",F="100%",E="visible",D="qx.bom.Label",B="Please use the setValue() method instead.",C="opera",z="Please use the getValue() method instead.",A="block",x="none",y="-1000px",w="absolute";
qx.Class.define(D,{statics:{__hr:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__hs:function(){var bd=this.__hu(false);
document.body.insertBefore(bd,document.body.firstChild);
return this._textElement=bd;
},__ht:function(){var bg=this.__hu(true);
document.body.insertBefore(bg,document.body.firstChild);
return this._htmlElement=bg;
},__hu:function(h){var i=qx.bom.Element.create(t);
var j=i.style;
j.width=j.height=M;
j.left=j.top=y;
j.visibility=o;
j.position=w;
j.overflow=E;

if(h){j.whiteSpace=K;
}else{j.whiteSpace=m;

if(qx.core.Variant.isSet(v,u)){var k=document.createElementNS(n,J);
for(var l in this.__hr){k.style[l]=s;
}i.appendChild(k);
}}return i;
},__hv:function(d){var e={};

if(d){e.whiteSpace=K;
}else if(qx.core.Variant.isSet(v,u)){e.display=A;
}else{e.overflow=o;
e.whiteSpace=m;
e.textOverflow=L;
e.userSelect=x;
if(qx.core.Variant.isSet(v,C)){e.OTextOverflow=L;
}}return e;
},create:function(content,U,V){if(!V){V=window;
}
if(U){var W=V.document.createElement(t);
W.useHtml=true;
}else if(qx.core.Variant.isSet(v,u)){var W=V.document.createElement(t);
var X=V.document.createElementNS(n,J);
X.style.cursor=s;
X.style.color=s;
X.style.overflow=o;
X.style.maxWidth=F;
for(var Y in this.__hr){X.style[Y]=s;
}X.setAttribute(H,G);
W.appendChild(X);
}else{var W=V.document.createElement(t);
qx.bom.element.Style.setStyles(W,this.__hv(U));
}
if(content){this.setValue(W,content);
}return W;
},setValue:function(be,bf){bf=bf||p;

if(be.useHtml){be.innerHTML=bf;
}else if(qx.core.Variant.isSet(v,u)){be.firstChild.setAttribute(q,bf);
}else{qx.bom.element.Attribute.set(be,r,bf);
}},getValue:function(g){if(g.useHtml){return g.innerHTML;
}else if(qx.core.Variant.isSet(v,u)){return g.firstChild.getAttribute(q)||p;
}else{return qx.bom.element.Attribute.get(g,r);
}},getHtmlSize:function(content,ba,bb){var bc=this._htmlElement||this.__ht();
bc.style.width=bb!==undefined?bb+I:M;
bc.innerHTML=content;
return this.__hw(bc,ba);
},getTextSize:function(a,b){var c=this._textElement||this.__hs();

if(qx.core.Variant.isSet(v,u)){c.firstChild.setAttribute(q,a);
}else{qx.bom.element.Attribute.set(c,r,a);
}return this.__hw(c,b);
},__hw:function(P,Q){var R=this.__hr;

if(!Q){Q={};
}
for(var S in R){P.style[S]=Q[S]||p;
}var T=qx.bom.element.Dimension.getSize(P);

if(qx.core.Variant.isSet(v,u)){if(!qx.bom.client.Platform.WIN){T.width++;
}}return T;
},setContent:function(N,O){qx.log.Logger.deprecatedMethodWarning(arguments.callee,B);
this.setValue(N,O);
},getContent:function(f){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
return this.getValue(f);
}}});
})();
(function(){var bk="qx.client",bj="blur",bi="focus",bh="mousedown",bg="on",bf="mouseup",be="DOMFocusOut",bd="DOMFocusIn",bc="selectstart",bb="onmousedown",bG="onfocusout",bF="onfocusin",bE="onmouseup",bD="onselectstart",bC="draggesture",bB="gecko",bA="qx.event.handler.Focus",bz="_applyFocus",by="deactivate",bx="textarea",br="qxIsRootPage",bs="_applyActive",bp="input",bq="focusin",bn="qxSelectable",bo="tabIndex",bl="off",bm="activate",bt="1",bu="focusout",bw="qxKeepFocus",bv="qxKeepActive";
qx.Class.define(bA,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this._manager=g;
this._window=g.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bs,nullable:true},focus:{apply:bz,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__hU:null,__hV:null,__hW:null,__hX:null,__hY:null,__ia:null,__ib:null,__ic:null,__id:null,__ie:null,canHandleEvent:function(d,f){},registerEvent:function(a,b,c){},unregisterEvent:function(u,v,w){},focus:function(x){try{x.focus();
}catch(y){}this.setFocus(x);
this.setActive(x);
},activate:function(A){this.setActive(A);
},blur:function(p){try{p.blur();
}catch(z){}
if(this.getActive()===p){this.resetActive();
}
if(this.getFocus()===p){this.resetFocus();
}},deactivate:function(o){if(this.getActive()===o){this.resetActive();
}},tryActivate:function(O){var P=this.__it(O);

if(P){this.setActive(P);
}},__if:function(Q,R,S,T){var V=qx.event.Registration;
var U=V.createEvent(S,qx.event.type.Focus,[Q,R,T]);
V.dispatchEvent(Q,U);
},_windowFocused:true,__ig:function(){if(this._windowFocused){this._windowFocused=false;
this.__if(this._window,null,bj,false);
}},__ih:function(){if(!this._windowFocused){this._windowFocused=true;
this.__if(this._window,null,bi,false);
}},_initObserver:qx.core.Variant.select(bk,{"gecko":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__hW=qx.lang.Function.listener(this.__im,this);
this.__hX=qx.lang.Function.listener(this.__il,this);
this.__hY=qx.lang.Function.listener(this.__ii,this);
this._document.addEventListener(bh,this.__hU,true);
this._document.addEventListener(bf,this.__hV,true);
this._window.addEventListener(bi,this.__hW,true);
this._window.addEventListener(bj,this.__hX,true);
this._window.addEventListener(bC,this.__hY,true);
},"mshtml":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ib=qx.lang.Function.listener(this.__ij,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this.__ia=qx.lang.Function.listener(this.__iq,this);
this._document.attachEvent(bb,this.__hU);
this._document.attachEvent(bE,this.__hV);
this._document.attachEvent(bF,this.__ib);
this._document.attachEvent(bG,this.__ic);
this._document.attachEvent(bD,this.__ia);
},"webkit":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this.__hW=qx.lang.Function.listener(this.__im,this);
this.__hX=qx.lang.Function.listener(this.__il,this);
this.__ia=qx.lang.Function.listener(this.__iq,this);
this._document.addEventListener(bh,this.__hU,true);
this._document.addEventListener(bf,this.__hV,true);
this._document.addEventListener(bc,this.__ia,false);
this._window.addEventListener(be,this.__ic,true);
this._window.addEventListener(bi,this.__hW,true);
this._window.addEventListener(bj,this.__hX,true);
},"opera":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ib=qx.lang.Function.listener(this.__ij,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this._document.addEventListener(bh,this.__hU,true);
this._document.addEventListener(bf,this.__hV,true);
this._window.addEventListener(bd,this.__ib,true);
this._window.addEventListener(be,this.__ic,true);
}}),_stopObserver:qx.core.Variant.select(bk,{"gecko":function(){this._document.removeEventListener(bh,this.__hU,true);
this._document.removeEventListener(bf,this.__hV,true);
this._window.removeEventListener(bi,this.__hW,true);
this._window.removeEventListener(bj,this.__hX,true);
this._window.removeEventListener(bC,this.__hY,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,bb,this.__hU);
qx.bom.Event.removeNativeListener(this._document,bE,this.__hV);
qx.bom.Event.removeNativeListener(this._document,bF,this.__ib);
qx.bom.Event.removeNativeListener(this._document,bG,this.__ic);
qx.bom.Event.removeNativeListener(this._document,bD,this.__ia);
},"webkit":function(){this._document.removeEventListener(bh,this.__hU,true);
this._document.removeEventListener(bc,this.__ia,false);
this._window.removeEventListener(bd,this.__ib,true);
this._window.removeEventListener(be,this.__ic,true);
this._window.removeEventListener(bi,this.__hW,true);
this._window.removeEventListener(bj,this.__hX,true);
},"opera":function(){this._document.removeEventListener(bh,this.__hU,true);
this._window.removeEventListener(bd,this.__ib,true);
this._window.removeEventListener(be,this.__ic,true);
this._window.removeEventListener(bi,this.__hW,true);
this._window.removeEventListener(bj,this.__hX,true);
}}),__ii:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"gecko":function(e){if(!this.__iu(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ij:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"mshtml":function(e){this.__ih();
var K=e.srcElement;
var J=this.__is(K);

if(J){this.setFocus(J);
}this.tryActivate(K);
},"opera":function(e){var bQ=e.target;

if(bQ==this._document||bQ==this._window){this.__ih();

if(this.__id){this.setFocus(this.__id);
delete this.__id;
}
if(this.__ie){this.setActive(this.__ie);
delete this.__ie;
}}else{this.setFocus(bQ);
this.tryActivate(bQ);
if(!this.__iu(bQ)){bQ.selectionStart=0;
bQ.selectionEnd=0;
}}},"default":null})),__ik:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"mshtml":function(e){if(!e.toElement){this.__ig();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var k=e.target;

if(k===this.getFocus()){this.resetFocus();
}
if(k===this.getActive()){this.resetActive();
}},"opera":function(e){var bR=e.target;

if(bR==this._document){this.__ig();
this.__id=this.getFocus();
this.__ie=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bR===this.getFocus()){this.resetFocus();
}
if(bR===this.getActive()){this.resetActive();
}}},"default":null})),__il:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__ig();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__ig();
this.__id=this.getFocus();
this.__ie=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__im:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"gecko":function(e){var bK=e.target;

if(bK===this._window||bK===this._document){this.__ih();
bK=this._body;
}this.setFocus(bK);
this.tryActivate(bK);
},"webkit":function(e){var bJ=e.target;

if(bJ===this._window||bJ===this._document){this.__ih();

if(this.__id){this.setFocus(this.__id);
delete this.__id;
}
if(this.__ie){this.setActive(this.__ie);
delete this.__ie;
}}else{this.setFocus(bJ);
this.tryActivate(bJ);
}},"default":null})),__in:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"gecko":function(e){var Y=e.target;
var W=this.__is(Y);
var X=this.__iu(Y);

if(!X){qx.bom.Event.preventDefault(e);
if(W){if(qx.core.Variant.isSet(bk,bB)){var ba=qx.bom.element.Attribute.get(W,br)===bt;

if(!ba){W.focus();
}}else{W.focus();
}}}else if(!W){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var F=e.srcElement;
var E=this.__is(F);

if(E){if(!this.__iu(F)){F.unselectable=bg;
try{document.selection.empty();
}catch(e){}try{E.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__iu(F)){F.unselectable=bg;
}}},"webkit":function(e){var s=e.target;
var r=this.__is(s);

if(r){this.setFocus(r);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var I=e.target;
var G=this.__is(I);

if(!this.__iu(I)){qx.bom.Event.preventDefault(e);
if(G){var H=this.getFocus();

if(H&&H.selectionEnd){H.selectionStart=0;
H.selectionEnd=0;
H.blur();
}if(G){this.setFocus(G);
}}}else if(G){this.setFocus(G);
}},"default":null})),__io:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"mshtml":function(e){var n=e.srcElement;

if(n.unselectable){n.unselectable=bl;
}this.tryActivate(this.__ip(n));
},"gecko":function(e){var t=e.target;

while(t&&t.offsetWidth===undefined){t=t.parentNode;
}
if(t){this.tryActivate(t);
}},"webkit|opera":function(e){this.tryActivate(this.__ip(e.target));
},"default":null})),__ip:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"mshtml|webkit":function(bH){var bI=this.getFocus();

if(bI&&bH!=bI&&(bI.nodeName.toLowerCase()===bp||bI.nodeName.toLowerCase()===bx)){bH=bI;
}return bH;
},"default":function(q){return q;
}})),__iq:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"mshtml|webkit":function(e){var L=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__iu(L)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ir:function(h){var i=qx.bom.element.Attribute.get(h,bo);

if(i>=1){return true;
}var j=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(i>=0&&j[h.tagName]){return true;
}return false;
},__is:function(B){while(B&&B.nodeType===1){if(B.getAttribute(bw)==bg){return null;
}
if(this.__ir(B)){return B;
}B=B.parentNode;
}return this._body;
},__it:function(l){var m=l;

while(l&&l.nodeType===1){if(l.getAttribute(bv)==bg){return null;
}l=l.parentNode;
}return m;
},__iu:function(C){while(C&&C.nodeType===1){var D=C.getAttribute(bn);

if(D!=null){return D===bg;
}C=C.parentNode;
}return true;
},_applyActive:function(bO,bP){if(bP){this.__if(bP,bO,by,true);
}
if(bO){this.__if(bO,bP,bm,true);
}},_applyFocus:function(M,N){if(N){this.__if(N,M,bu,true);
}
if(M){this.__if(M,N,bq,true);
}if(N){this.__if(N,M,bj,false);
}
if(M){this.__if(M,N,bi,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__iv=null;
},defer:function(bL){qx.event.Registration.addHandler(bL);
var bM=bL.FOCUSABLE_ELEMENTS;

for(var bN in bM){bM[bN.toUpperCase()]=1;
}}});
})();
(function(){var d="qx.event.type.Focus";
qx.Class.define(d,{extend:qx.event.type.Event,members:{init:function(a,b,c){arguments.callee.base.call(this,c,false);
this._target=a;
this._relatedTarget=b;
return this;
}}});
})();
(function(){var j="qx.event.handler.Window";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){arguments.callee.base.call(this);
this._manager=k;
this._window=k.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(n,o){},registerEvent:function(s,t,u){},unregisterEvent:function(p,q,r){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var b=qx.event.handler.Window.SUPPORTED_TYPES;

for(var a in b){qx.bom.Event.addNativeListener(this._window,a,this._onNativeWrapper);
}},_stopWindowObserver:function(){var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.removeNativeListener(this._window,l,this._onNativeWrapper);
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
},defer:function(c){qx.event.Registration.addHandler(c);
}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(d,event,e){return !event.getBubbles();
},dispatchEvent:function(f,event,g){var k,h;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var m=this._manager.getListeners(f,g,false);

if(m){for(var i=0,l=m.length;i<l;i++){var j=m[i].context||f;
m[i].handler.call(j,event);
}}}},defer:function(c){qx.event.Registration.addDispatcher(c);
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
var k=qx.core.Setting.get(f);
var l=qx.Class.getByName(k);

if(l){this.__iz=new l;
var j=new Date;
this.__iz.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-j)+"ms");
var j=new Date;
this.__iz.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-j)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+k);
}},__iA:function(e){var i=this.__iz;

if(i){e.setReturnValue(i.close());
}},__iB:function(){var h=this.__iz;

if(h){h.terminate();
}}},defer:function(a){qx.event.Registration.addListener(window,g,a.__iy,a);
qx.event.Registration.addListener(window,b,a.__iB,a);
qx.event.Registration.addListener(window,d,a.__iA,a);
}});
})();
(function(){var D="qx.client",C="character",B="EndToEnd",A="input",z="textarea",y="StartToStart",x='character',w="qx.bom.Selection",v="button",u="#text",t="body";
qx.Class.define(w,{statics:{getSelectionObject:qx.core.Variant.select(D,{"mshtml":function(F){return F.selection;
},"default":function(E){return qx.dom.Node.getWindow(E).getSelection();
}}),get:qx.core.Variant.select(D,{"mshtml":function(bt){var bu=qx.bom.Range.get(qx.dom.Node.getDocument(bt));
return bu.text;
},"default":function(by){if(this.__jr(by)){return by.value.substring(by.selectionStart,by.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(by)).toString();
}}}),getLength:qx.core.Variant.select(D,{"mshtml":function(bv){var bx=this.get(bv);
var bw=qx.util.StringSplit.split(bx,/\r\n/);
return bx.length-(bw.length-1);
},"opera":function(b){var g,e,c;

if(this.__jr(b)){var f=b.selectionStart;
var d=b.selectionEnd;
g=b.value.substring(f,d);
e=d-f;
}else{g=qx.bom.Selection.get(b);
e=g.length;
}c=qx.util.StringSplit.split(g,/\r\n/);
return e-(c.length-1);
},"default":function(Q){if(this.__jr(Q)){return Q.selectionEnd-Q.selectionStart;
}else{return this.get(Q).length;
}}}),getStart:qx.core.Variant.select(D,{"mshtml":function(G){if(this.__jr(G)){var L=qx.bom.Range.get();
if(!G.contains(L.parentElement())){return -1;
}var M=qx.bom.Range.get(G);
var K=G.value.length;
M.moveToBookmark(L.getBookmark());
M.moveEnd(x,K);
return K-M.text.length;
}else{var M=qx.bom.Range.get(G);
var I=M.parentElement();
var N=qx.bom.Range.get();
N.moveToElementText(I);
var H=qx.bom.Range.get(qx.dom.Node.getBodyElement(G));
H.setEndPoint(y,M);
H.setEndPoint(B,N);
if(N.compareEndPoints(y,H)==0){return 0;
}var J;
var O=0;

while(true){J=H.moveStart(C,-1);
if(N.compareEndPoints(y,H)==0){break;
}if(J==0){break;
}else{O++;
}}return ++O;
}},"gecko|webkit":function(bm){if(this.__jr(bm)){return bm.selectionStart;
}else{var bo=qx.dom.Node.getDocument(bm);
var bn=this.getSelectionObject(bo);
if(bn.anchorOffset<bn.focusOffset){return bn.anchorOffset;
}else{return bn.focusOffset;
}}},"default":function(bl){if(this.__jr(bl)){return bl.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bl)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(D,{"mshtml":function(U){if(this.__jr(U)){var ba=qx.bom.Range.get();
if(!U.contains(ba.parentElement())){return -1;
}var bb=qx.bom.Range.get(U);
var Y=U.value.length;
bb.moveToBookmark(ba.getBookmark());
bb.moveStart(x,-Y);
return bb.text.length;
}else{var bb=qx.bom.Range.get(U);
var W=bb.parentElement();
var bc=qx.bom.Range.get();
bc.moveToElementText(W);
var Y=bc.text.length;
var V=qx.bom.Range.get(qx.dom.Node.getBodyElement(U));
V.setEndPoint(B,bb);
V.setEndPoint(y,bc);
if(bc.compareEndPoints(B,V)==0){return Y-1;
}var X;
var bd=0;

while(true){X=V.moveEnd(C,1);
if(bc.compareEndPoints(B,V)==0){break;
}if(X==0){break;
}else{bd++;
}}return Y-(++bd);
}},"gecko|webkit":function(R){if(this.__jr(R)){return R.selectionEnd;
}else{var T=qx.dom.Node.getDocument(R);
var S=this.getSelectionObject(T);
if(S.focusOffset>S.anchorOffset){return S.focusOffset;
}else{return S.anchorOffset;
}}},"default":function(P){if(this.__jr(P)){return P.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(P)).focusOffset;
}}}),__jr:function(a){return qx.dom.Node.isElement(a)&&(a.nodeName.toLowerCase()==A||a.nodeName.toLowerCase()==z);
},set:qx.core.Variant.select(D,{"mshtml":function(h,i,j){var k;
if(qx.dom.Node.isDocument(h)){h=h.body;
}
if(qx.dom.Node.isElement(h)||qx.dom.Node.isText(h)){switch(h.nodeName.toLowerCase()){case A:case z:case v:if(j===undefined){j=h.value.length;
}
if(i>=0&&i<=h.value.length&&j>=0&&j<=h.value.length){k=qx.bom.Range.get(h);
k.collapse(true);
k.moveStart(C,i);
k.moveEnd(C,j-i);
k.select();
return true;
}break;
case u:if(j===undefined){j=h.nodeValue.length;
}
if(i>=0&&i<=h.nodeValue.length&&j>=0&&j<=h.nodeValue.length){k=qx.bom.Range.get(qx.dom.Node.getBodyElement(h));
k.moveToElementText(h.parentNode);
k.collapse(true);
k.moveStart(C,i);
k.moveEnd(C,j-i);
k.select();
return true;
}break;
default:if(j===undefined){j=h.childNodes.length-1;
}if(h.childNodes[i]&&h.childNodes[j]){k=qx.bom.Range.get(qx.dom.Node.getBodyElement(h));
k.moveToElementText(h.childNodes[i]);
k.collapse(true);
var l=qx.bom.Range.get(qx.dom.Node.getBodyElement(h));
l.moveToElementText(h.childNodes[j]);
k.setEndPoint(B,l);
k.select();
return true;
}}}return false;
},"default":function(m,n,o){var s=m.nodeName.toLowerCase();

if(qx.dom.Node.isElement(m)&&(s==A||s==z)){if(o===undefined){o=m.value.length;
}if(n>=0&&n<=m.value.length&&o>=0&&o<=m.value.length){m.focus();
m.select();
m.setSelectionRange(n,o);
return true;
}}else{var q=false;
var r=qx.dom.Node.getWindow(m).getSelection();
var p=qx.bom.Range.get(m);
if(qx.dom.Node.isText(m)){if(o===undefined){o=m.length;
}
if(n>=0&&n<m.length&&o>=0&&o<=m.length){q=true;
}}else if(qx.dom.Node.isElement(m)){if(o===undefined){o=m.childNodes.length-1;
}
if(n>=0&&m.childNodes[n]&&o>=0&&m.childNodes[o]){q=true;
}}else if(qx.dom.Node.isDocument(m)){m=m.body;

if(o===undefined){o=m.childNodes.length-1;
}
if(n>=0&&m.childNodes[n]&&o>=0&&m.childNodes[o]){q=true;
}}
if(q){if(!r.isCollapsed){r.collapseToStart();
}p.setStart(m,n);
if(qx.dom.Node.isText(m)){p.setEnd(m,o);
}else{p.setEndAfter(m.childNodes[o]);
}if(r.rangeCount>0){r.removeAllRanges();
}r.addRange(p);
return true;
}}return false;
}}),setAll:function(be){return qx.bom.Selection.set(be,0);
},clear:qx.core.Variant.select(D,{"mshtml":function(bp){var bq=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bp));
var br=qx.bom.Range.get(bp);
var parent=br.parentElement();
var bs=qx.bom.Range.get(qx.dom.Node.getDocument(bp));
if(parent==bs.parentElement()&&parent==bp){bq.empty();
}},"default":function(bf){var bh=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bf));
var bj=bf.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bf)&&(bj==A||bj==z)){bf.setSelectionRange(0,0);
qx.bom.Element.blur(bf);
}else if(qx.dom.Node.isDocument(bf)||bj==t){bh.collapse(bf.body?bf.body:bf,0);
}else{var bi=qx.bom.Range.get(bf);

if(!bi.collapsed){var bk;
var bg=bi.commonAncestorContainer;
if(qx.dom.Node.isElement(bf)&&qx.dom.Node.isText(bg)){bk=bg.parentNode;
}else{bk=bg;
}
if(bk==bf){bh.collapse(bf,0);
}}}}})}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(p){arguments.callee.base.call(this);
this.__bE=p;
this.__bF={};
qx.event.handler.Appear.__bG[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__bG:{},refresh:function(){var v=this.__bG;

for(var w in v){v[w].refresh();
}}},members:{__bE:null,__bF:null,canHandleEvent:function(i,j){},registerEvent:function(k,l,m){var n=qx.core.ObjectRegistry.toHashCode(k)+l;
var o=this.__bF;

if(o&&!o[n]){o[n]=k;
k.$$displayed=k.offsetWidth>0;
}},unregisterEvent:function(q,r,s){var t=qx.core.ObjectRegistry.toHashCode(q)+r;
var u=this.__bF;

if(!u){return;
}
if(u[t]){delete u[t];
}},refresh:function(){var g=this.__bF;
var h;

for(var f in g){h=g[f];
var d=h.offsetWidth>0;

if((!!h.$$displayed)!==d){h.$$displayed=d;
var e=qx.event.Registration.createEvent(d?a:b);
this.__bE.dispatchEvent(h,e);
}}}},destruct:function(){this.__bE=this.__bF=null;
delete qx.event.handler.Appear.__bG[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var v="",u="underline",t="Boolean",s="px",r='"',q="italic",p="normal",o="bold",n="_applyItalic",m="_applyBold",H="Integer",G="_applyFamily",F="_applyLineHeight",E="Array",D="overline",C="line-through",B="qx.bom.Font",A="Number",z="_applyDecoration",y=" ",w="_applySize",x=",";
qx.Class.define(B,{extend:qx.core.Object,construct:function(M,N){arguments.callee.base.call(this);

if(M!==undefined){this.setSize(M);
}
if(N!==undefined){this.setFamily(N);
}},statics:{fromString:function(c){var g=new qx.bom.Font();
var e=c.split(/\s+/);
var name=[];
var f;

for(var i=0;i<e.length;i++){switch(f=e[i]){case o:g.setBold(true);
break;
case q:g.setItalic(true);
break;
case u:g.setDecoration(u);
break;
default:var d=parseInt(f,10);

if(d==f||qx.lang.String.contains(f,s)){g.setSize(d);
}else{name.push(f);
}break;
}}
if(name.length>0){g.setFamily(name);
}return g;
},fromConfig:function(Q){var R=new qx.bom.Font;
R.set(Q);
return R;
},__bM:{fontFamily:v,fontSize:v,fontWeight:v,fontStyle:v,textDecoration:v,lineHeight:1.2},getDefaultStyles:function(){return this.__bM;
}},properties:{size:{check:H,nullable:true,apply:w},lineHeight:{check:A,nullable:true,apply:F},family:{check:E,nullable:true,apply:G},bold:{check:t,nullable:true,apply:m},italic:{check:t,nullable:true,apply:n},decoration:{check:[u,C,D],nullable:true,apply:z}},members:{__bN:null,__bO:null,__bP:null,__bQ:null,__bR:null,__bS:null,_applySize:function(S,T){this.__bN=S===null?null:S+s;
},_applyLineHeight:function(I,J){this.__bS=I===null?null:I;
},_applyFamily:function(h,j){var k=v;

for(var i=0,l=h.length;i<l;i++){if(h[i].indexOf(y)>0){k+=r+h[i]+r;
}else{k+=h[i];
}
if(i!==l-1){k+=x;
}}this.__bO=k;
},_applyBold:function(K,L){this.__bP=K===null?null:K?o:p;
},_applyItalic:function(O,P){this.__bQ=O===null?null:O?q:p;
},_applyDecoration:function(a,b){this.__bR=a===null?null:a;
},getStyles:function(){return {fontFamily:this.__bO,fontSize:this.__bN,fontWeight:this.__bP,fontStyle:this.__bQ,textDecoration:this.__bR,lineHeight:this.__bS};
}}});
})();
(function(){var j="string",i="_applyTheme",h="qx.theme.manager.Appearance",g=":",f="Theme",e="changeTheme",d="/",c="singleton";
qx.Class.define(h,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__cQ={};
this.__cR={};
},properties:{theme:{check:f,nullable:true,event:e,apply:i}},members:{__cS:{},__cQ:null,__cR:null,_applyTheme:function(a,b){this.__cR={};
this.__cQ={};
},__cT:function(k,l,m){var q=l.appearances;
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
return this.__cT(p,l,m);
}}}if(m!=null){return this.__cT(m,l);
}return null;
}else if(typeof t===j){return this.__cT(t,l,m);
}else if(t.include&&!t.style){return this.__cT(t.include,l,m);
}return k;
},styleFrom:function(v,w,x,y){if(!x){x=this.getTheme();
}var E=this.__cR;
var z=E[v];

if(!z){z=E[v]=this.__cT(v,x,y);
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
}}var D=this.__cQ;

if(D[K]!==undefined){return D[K];
}if(!w){w=this.__cS;
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
}},destruct:function(){this.__cQ=this.__cR=null;
}});
})();
(function(){var f="qx.event.type.Data",e="qx.event.type.Event",d="qx.data.IListData";
qx.Interface.define(d,{events:{"change":f,"changeLength":e},members:{getItem:function(i){},setItem:function(g,h){},splice:function(a,b,c){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__du=c;
this.__dv=d;
},members:{__du:null,__dv:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__du,this.__dv);
}}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(r,s,t){arguments.callee.base.call(this,r,s);

if(t!=null){this.setCommand(t);
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
var p=this.hasState(o);
var q=this.hasState(n);

if(p){this.removeState(o);
}
if(q){this.removeState(n);
}else{this.addState(m);

if(p){this.execute();
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
(function(){var W="nonScaled",V="scaled",U="alphaScaled",T=".png",S="replacement",R="hidden",Q="div",P="Boolean",O="_applyScale",N="px",H="_applySource",M="-disabled.$1",K="img",G="changeSource",F="qx.client",J="__hc",I="String",L="image",E="qx.ui.basic.Image";
qx.Class.define(E,{extend:qx.ui.core.Widget,construct:function(b){this.__hc={};
arguments.callee.base.call(this);

if(b){this.setSource(b);
}},properties:{source:{check:I,init:null,nullable:true,event:G,apply:H,themeable:true},scale:{check:P,init:false,themeable:true,apply:O},appearance:{refine:true,init:L},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hd:null,__he:null,__hf:null,__hc:null,getContentElement:function(){return this.__hj();
},_createContentElement:function(){return this.__hj();
},_getContentHint:function(){return {width:this.__hd||0,height:this.__he||0};
},_applyEnabled:function(j,k){arguments.callee.base.call(this,j,k);

if(this.getSource()){this._styleSource();
}},_applySource:function(z){this._styleSource();
},_applyScale:function(t){this._styleSource();
},__hg:function(a){this.__hf=a;
},__hh:function(){if(this.__hf==null){var s=this.getSource();
var r=false;

if(s!=null){r=qx.lang.String.endsWith(s,T);
}
if(this.getScale()&&r&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hf=U;
}else if(this.getScale()){this.__hf=V;
}else{this.__hf=W;
}}return this.__hf;
},__hi:function(A){var B;
var C;

if(A==U){B=true;
C=Q;
}else if(A==W){B=false;
C=Q;
}else{B=true;
C=K;
}var D=new qx.html.Image(C);
D.setScale(B);
D.setStyles({"overflowX":R,"overflowY":R});
return D;
},__hj:function(){var X=this.__hh();

if(this.__hc[X]==null){this.__hc[X]=this.__hi(X);
}return this.__hc[X];
},_styleSource:function(){var l=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!l){this.getContentElement().resetSource();
return;
}this.__hk(l);
if(qx.util.ResourceManager.getInstance().has(l)){this.__hm(this.getContentElement(),l);
}else if(qx.io.ImageLoader.isLoaded(l)){this.__hn(this.getContentElement(),l);
}else{this.__ho(this.getContentElement(),l);
}},__hk:qx.core.Variant.select(F,{"mshtml":function(m){var o=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var n=qx.lang.String.endsWith(m,T);

if(o&&n){if(this.getScale()&&this.__hh()!=U){this.__hg(U);
}else if(!this.getScale()&&this.__hh()!=W){this.__hg(W);
}}else{if(this.getScale()&&this.__hh()!=V){this.__hg(V);
}else if(!this.getScale()&&this.__hh()!=W){this.__hg(W);
}}this.__hl(this.__hj());
},"default":function(bf){if(this.getScale()&&this.__hh()!=V){this.__hg(V);
}else if(!this.getScale()&&this.__hh(W)){this.__hg(W);
}this.__hl(this.__hj());
}}),__hl:function(c){var f=this.getContainerElement();
var g=f.getChild(0);

if(g!=c){if(g!=null){var i=N;
var d={};
var e=this.getInnerSize();

if(e!=null){d.width=e.width+i;
d.height=e.height+i;
}var h=this.getInsets();
d.left=h.left+i;
d.top=h.top+i;
c.setStyles(d,true);
c.setSelectable(this.getSelectable());
}f.removeAt(0);
f.addAt(c,0);
}},__hm:function(bb,bc){var be=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bd=bc.replace(/\.([a-z]+)$/,M);

if(be.has(bd)){bc=bd;
this.addState(S);
}else{this.removeState(S);
}}if(bb.getSource()===bc){return;
}bb.setSource(bc);
this.__hq(be.getImageWidth(bc),be.getImageHeight(bc));
},__hn:function(u,v){var x=qx.io.ImageLoader;
u.setSource(v);
var w=x.getWidth(v);
var y=x.getHeight(v);
this.__hq(w,y);
},__ho:function(bg,bh){var self;
var bi=qx.io.ImageLoader;
{};
if(!bi.isFailed(bh)){bi.load(bh,this.__hp,this);
}else{if(bg!=null){bg.resetSource();
}}},__hp:function(Y,ba){if(Y!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(ba.failed){this.warn("Image could not be loaded: "+Y);
}this._styleSource();
},__hq:function(p,q){if(p!==this.__hd||q!==this.__he){this.__hd=p;
this.__he=q;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(J);
}});
})();
(function(){var n="keep-align",m="interval",l="Integer",k="direct",j="best-fit",i="mouse",h="bottom-left",g="disappear",f="Boolean",e="bottom-right",B="widget",A="qx.ui.core.MPlacement",z="left-top",y="offsetRight",x="shorthand",w="offsetLeft",v="top-left",u="appear",t="offsetBottom",s="top-right",q="offsetTop",r="right-bottom",o="right-top",p="left-bottom";
qx.Mixin.define(A,{properties:{position:{check:[v,s,h,e,z,p,o,r],init:h,themeable:true},placeMethod:{check:[B,i],init:i,themeable:true},domMove:{check:f,init:false},placementModeX:{check:[k,n,j],init:n,themeable:true},placementModeY:{check:[k,n,j],init:n,themeable:true},offsetLeft:{check:l,init:0,themeable:true},offsetTop:{check:l,init:0,themeable:true},offsetRight:{check:l,init:0,themeable:true},offsetBottom:{check:l,init:0,themeable:true},offset:{group:[q,y,t,w],mode:x,themeable:true}},members:{__gM:null,getLayoutLocation:function(E){var H,G,I,top;
G=E.getBounds();
I=G.left;
top=G.top;
var J=G;
E=E.getLayoutParent();

while(E&&!E.isRootWidget()){G=E.getBounds();
I+=G.left;
top+=G.top;
H=E.getInsets();
I+=H.left;
top+=H.top;
E=E.getLayoutParent();
}if(E.isRootWidget()){var F=E.getContainerLocation();

if(F){I+=F.left;
top+=F.top;
}}return {left:I,top:top,right:I+J.width,bottom:top+J.height};
},moveTo:function(S,top){if(this.getDomMove()){this.setDomPosition(S,top);
}else{this.setLayoutProperties({left:S,top:top});
}},placeToWidget:function(N,O){if(O){this.__gM=qx.lang.Function.bind(this.placeToWidget,this,N,false);
qx.event.Idle.getInstance().addListener(m,this.__gM);
this.addListener(g,function(){if(this.__gM){qx.event.Idle.getInstance().removeListener(m,this.__gM);
this.__gM=null;
}},this);
}var P=N.getContainerLocation()||this.getLayoutLocation(N);
this.__gO(P);
},placeToMouse:function(event){var b=event.getDocumentLeft();
var top=event.getDocumentTop();
var a={left:b,top:top,right:b,bottom:top};
this.__gO(a);
},placeToElement:function(T,U){var location=qx.bom.element.Location.get(T);
var V={left:location.left,top:location.top,right:location.left+T.offsetWidth,bottom:location.top+T.offsetHeight};
if(U){this.__gM=qx.lang.Function.bind(this.placeToElement,this,T,false);
qx.event.Idle.getInstance().addListener(m,this.__gM);
this.addListener(g,function(){if(this.__gM){qx.event.Idle.getInstance().removeListener(m,this.__gM);
this.__gM=null;
}},this);
}this.__gO(V);
},placeToPoint:function(C){var D={left:C.left,top:C.top,right:C.left,bottom:C.top};
this.__gO(D);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__gN:function(c){var d=null;

if(this._computePlacementSize){var d=this._computePlacementSize();
}else if(this.isVisible()){var d=this.getBounds();
}
if(d==null){this.addListenerOnce(u,function(){this.__gN(c);
},this);
}else{c.call(this,d);
}},__gO:function(M){this.__gN(function(Q){var R=qx.util.placement.Placement.compute(Q,this.getLayoutParent().getBounds(),M,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(R.left,R.top);
});
},setSmart:function(W){{};
var X=W?n:k;
this.set({placementModeX:X,placementModeY:X});
},getSmart:function(){{};
var K=this.getPlacementModeX()==n?true:false;
var L=this.getPlacementModeY()==n?true:false;
return K&&L;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__gM){qx.event.Idle.getInstance().removeListener(m,this.__gM);
}}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){arguments.callee.base.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var j=this.getApplicationRoot();
j.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(h,i){if(i){this.removeState(i);
}
if(h){this.addState(h);
}}}});
})();
(function(){var k="emulated",j="native",h='"',g="qx.lang.Core",f="\\\\",e="\\\"",d="[object Error]";
qx.Bootstrap.define(g,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==d)?k:j,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?j:k,{"native":Array.prototype.indexOf,"emulated":function(m,n){if(n==null){n=0;
}else if(n<0){n=Math.max(0,this.length+n);
}
for(var i=n;i<this.length;i++){if(this[i]===m){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?j:k,{"native":Array.prototype.lastIndexOf,"emulated":function(C,D){if(D==null){D=this.length-1;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i>=0;i--){if(this[i]===C){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?j:k,{"native":Array.prototype.forEach,"emulated":function(s,t){var l=this.length;

for(var i=0;i<l;i++){var u=this[i];

if(u!==undefined){s.call(t||window,u,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?j:k,{"native":Array.prototype.filter,"emulated":function(v,w){var x=[];
var l=this.length;

for(var i=0;i<l;i++){var y=this[i];

if(y!==undefined){if(v.call(w||window,y,i,this)){x.push(this[i]);
}}}return x;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?j:k,{"native":Array.prototype.map,"emulated":function(o,p){var q=[];
var l=this.length;

for(var i=0;i<l;i++){var r=this[i];

if(r!==undefined){q[i]=o.call(p||window,r,i,this);
}}return q;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?j:k,{"native":Array.prototype.some,"emulated":function(z,A){var l=this.length;

for(var i=0;i<l;i++){var B=this[i];

if(B!==undefined){if(z.call(A||window,B,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?j:k,{"native":Array.prototype.every,"emulated":function(a,b){var l=this.length;

for(var i=0;i<l;i++){var c=this[i];

if(c!==undefined){if(!a.call(b||window,c,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?j:k,{"native":String.prototype.quote,"emulated":function(){return h+this.replace(/\\/g,f).replace(/\"/g,e)+h;
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
qx.Bootstrap.define(G,{statics:{__cb:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__cc:function(O,P){return function(s){return O.prototype[P].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cd:function(){var J=qx.lang.Generics.__cb;

for(var N in J){var L=window[N];
var K=J[N];

for(var i=0,l=K.length;i<l;i++){var M=K[i];

if(!L[M]){L[M]=qx.lang.Generics.__cc(L,M);
}}}}},defer:function(Q){Q.__cd();
}});
})();
(function(){var d="qx.ui.core.queue.Widget",c="widget";
qx.Class.define(d,{statics:{__gL:{},remove:function(h){delete this.__gL[h.$$hash];
},add:function(a){var b=this.__gL;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(c);
},flush:function(){var e=this.__gL;
var g;

for(var f in e){g=e[f];
delete e[f];
g.syncWidget();
}for(var f in e){return;
}this.__gL={};
}}});
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
},_applyTheme:function(f){var g=this._getDynamic();

for(var j in g){if(g[j].themed){g[j].dispose();
delete g[j];
}}
if(f){var h=f.fonts;
var i=qx.bom.Font;

for(var j in h){g[j]=(new i).set(h[j]);
g[j].themed=true;
}}this._setDynamic(g);
}}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Bootstrap.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__fB:function(){this.QUIRKS_MODE=this.__fC();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__fC:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__fB();
}});
})();
(function(){var f="source",e="scale",d="no-repeat",c="mshtml",b="qx.client",a="qx.html.Image";
qx.Class.define(a,{extend:qx.html.Element,members:{_applyProperty:function(name,m){arguments.callee.base.call(this,name,m);

if(name===f){var q=this.getDomElement();
var n=this.getAllStyles();
var o=this._getProperty(f);
var p=this._getProperty(e);
var r=p?e:d;
qx.bom.element.Decoration.update(q,o,r,n);
}},_createDomElement:function(){var h=this._getProperty(e);
var i=h?e:d;

if(qx.core.Variant.isSet(b,c)){var g=this._getProperty(f);
this.setNodeName(qx.bom.element.Decoration.getTagName(i,g));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(i));
}return arguments.callee.base.call(this);
},_copyData:function(k){return arguments.callee.base.call(this,true);
},setSource:function(j){this._setProperty(f,j);
return this;
},getSource:function(){return this._getProperty(f);
},resetSource:function(){this._removeProperty(f);
return this;
},setScale:function(l){this._setProperty(e,l);
return this;
},getScale:function(){return this._getProperty(e);
}}});
})();
(function(){var bK="left",bJ="top",bI="_applyLayoutChange",bH="hAlign",bG="flex",bF="vAlign",bE="Integer",bD="minWidth",bC="width",bB="minHeight",by="qx.ui.layout.Grid",bA="height",bz="maxHeight",bx="maxWidth";
qx.Class.define(by,{extend:qx.ui.layout.Abstract,construct:function(e,f){arguments.callee.base.call(this);
this.__gA=[];
this.__gB=[];

if(e){this.setSpacingX(e);
}
if(f){this.setSpacingY(f);
}},properties:{spacingX:{check:bE,init:0,apply:bI},spacingY:{check:bE,init:0,apply:bI}},members:{__gC:null,__gA:null,__gB:null,__gD:null,__gE:null,__gF:null,__gG:null,__gH:null,__gI:null,verifyLayoutProperty:null,__gJ:function(){var F=[];
var E=[];
var G=[];
var C=-1;
var B=-1;
var I=this._getLayoutChildren();

for(var i=0,l=I.length;i<l;i++){var D=I[i];
var H=D.getLayoutProperties();
var J=H.row;
var A=H.column;
H.colSpan=H.colSpan||1;
H.rowSpan=H.rowSpan||1;
if(J==null||A==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+D+"' must be defined!");
}
if(F[J]&&F[J][A]){throw new Error("Cannot add widget '"+D+"'!. "+"There is already a widget '"+F[J][A]+"' in this cell ("+J+", "+A+")");
}
for(var x=A;x<A+H.colSpan;x++){for(var y=J;y<J+H.rowSpan;y++){if(F[y]==undefined){F[y]=[];
}F[y][x]=D;
B=Math.max(B,x);
C=Math.max(C,y);
}}
if(H.rowSpan>1){G.push(D);
}
if(H.colSpan>1){E.push(D);
}}for(var y=0;y<=C;y++){if(F[y]==undefined){F[y]=[];
}}this.__gC=F;
this.__gD=E;
this.__gE=G;
this.__gF=C;
this.__gG=B;
this.__gH=null;
this.__gI=null;
delete this._invalidChildrenCache;
},_setRowData:function(bT,bU,bV){var bW=this.__gA[bT];

if(!bW){this.__gA[bT]={};
this.__gA[bT][bU]=bV;
}else{bW[bU]=bV;
}},_setColumnData:function(bk,bl,bm){var bn=this.__gB[bk];

if(!bn){this.__gB[bk]={};
this.__gB[bk][bl]=bm;
}else{bn[bl]=bm;
}},setSpacing:function(bS){this.setSpacingY(bS);
this.setSpacingX(bS);
return this;
},setColumnAlign:function(bs,bt,bu){{};
this._setColumnData(bs,bH,bt);
this._setColumnData(bs,bF,bu);
this._applyLayoutChange();
return this;
},getColumnAlign:function(dI){var dJ=this.__gB[dI]||{};
return {vAlign:dJ.vAlign||bJ,hAlign:dJ.hAlign||bK};
},setRowAlign:function(du,dv,dw){{};
this._setRowData(du,bH,dv);
this._setRowData(du,bF,dw);
this._applyLayoutChange();
return this;
},getRowAlign:function(dq){var dr=this.__gA[dq]||{};
return {vAlign:dr.vAlign||bJ,hAlign:dr.hAlign||bK};
},getCellWidget:function(bq,br){if(this._invalidChildrenCache){this.__gJ();
}var bq=this.__gC[bq]||{};
return bq[br]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__gJ();
}return this.__gF+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__gJ();
}return this.__gG+1;
},getCellAlign:function(ce,cf){var cl=bJ;
var cj=bK;
var ck=this.__gA[ce];
var ch=this.__gB[cf];
var cg=this.__gC[ce][cf];

if(cg){var ci={vAlign:cg.getAlignY(),hAlign:cg.getAlignX()};
}else{ci={};
}if(ci.vAlign){cl=ci.vAlign;
}else if(ck&&ck.vAlign){cl=ck.vAlign;
}else if(ch&&ch.vAlign){cl=ch.vAlign;
}if(ci.hAlign){cj=ci.hAlign;
}else if(ch&&ch.hAlign){cj=ch.hAlign;
}else if(ck&&ck.hAlign){cj=ck.hAlign;
}return {vAlign:cl,hAlign:cj};
},setColumnFlex:function(dK,dL){this._setColumnData(dK,bG,dL);
this._applyLayoutChange();
return this;
},getColumnFlex:function(ct){var cu=this.__gB[ct]||{};
return cu.flex!==undefined?cu.flex:0;
},setRowFlex:function(ds,dt){this._setRowData(ds,bG,dt);
this._applyLayoutChange();
return this;
},getRowFlex:function(ba){var bb=this.__gA[ba]||{};
var bc=bb.flex!==undefined?bb.flex:0;
return bc;
},setColumnMaxWidth:function(ca,cb){this._setColumnData(ca,bx,cb);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(c){var d=this.__gB[c]||{};
return d.maxWidth!==undefined?d.maxWidth:Infinity;
},setColumnWidth:function(bo,bp){this._setColumnData(bo,bC,bp);
this._applyLayoutChange();
return this;
},getColumnWidth:function(w){var z=this.__gB[w]||{};
return z.width!==undefined?z.width:null;
},setColumnMinWidth:function(bX,bY){this._setColumnData(bX,bD,bY);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(cc){var cd=this.__gB[cc]||{};
return cd.minWidth||0;
},setRowMaxHeight:function(bL,bM){this._setRowData(bL,bz,bM);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(X){var Y=this.__gA[X]||{};
return Y.maxHeight||Infinity;
},setRowHeight:function(a,b){this._setRowData(a,bA,b);
this._applyLayoutChange();
return this;
},getRowHeight:function(bv){var bw=this.__gA[bv]||{};
return bw.height!==undefined?bw.height:null;
},setRowMinHeight:function(V,W){this._setRowData(V,bB,W);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(u){var v=this.__gA[u]||{};
return v.minHeight||0;
},__gK:function(bN){var bR=bN.getSizeHint();
var bQ=bN.getMarginLeft()+bN.getMarginRight();
var bP=bN.getMarginTop()+bN.getMarginBottom();
var bO={height:bR.height+bP,width:bR.width+bQ,minHeight:bR.minHeight+bP,minWidth:bR.minWidth+bQ,maxHeight:bR.maxHeight+bP,maxWidth:bR.maxWidth+bQ};
return bO;
},_fixHeightsRowSpan:function(dM){var dX=this.getSpacingY();

for(var i=0,l=this.__gE.length;i<l;i++){var dP=this.__gE[i];
var dR=this.__gK(dP);
var dS=dP.getLayoutProperties();
var dO=dS.row;
var dV=dX*(dS.rowSpan-1);
var dN=dV;
var dU={};

for(var j=0;j<dS.rowSpan;j++){var ea=dS.row+j;
var dQ=dM[ea];
var dY=this.getRowFlex(ea);

if(dY>0){dU[ea]={min:dQ.minHeight,value:dQ.height,max:dQ.maxHeight,flex:dY};
}dV+=dQ.height;
dN+=dQ.minHeight;
}if(dV<dR.height){var dW=qx.ui.layout.Util.computeFlexOffsets(dU,dR.height,dV);

for(var j=0;j<dS.rowSpan;j++){var dT=dW[dO+j]?dW[dO+j].offset:0;
dM[dO+j].height+=dT;
}}if(dN<dR.minHeight){var dW=qx.ui.layout.Util.computeFlexOffsets(dU,dR.minHeight,dN);

for(var j=0;j<dS.rowSpan;j++){var dT=dW[dO+j]?dW[dO+j].offset:0;
dM[dO+j].minHeight+=dT;
}}}},_fixWidthsColSpan:function(db){var df=this.getSpacingX();

for(var i=0,l=this.__gD.length;i<l;i++){var dc=this.__gD[i];
var de=this.__gK(dc);
var dh=dc.getLayoutProperties();
var dd=dh.column;
var dn=df*(dh.colSpan-1);
var dg=dn;
var di={};
var dk;

for(var j=0;j<dh.colSpan;j++){var dp=dh.column+j;
var dm=db[dp];
var dl=this.getColumnFlex(dp);
if(dl>0){di[dp]={min:dm.minWidth,value:dm.width,max:dm.maxWidth,flex:dl};
}dn+=dm.width;
dg+=dm.minWidth;
}if(dn<de.width){var dj=qx.ui.layout.Util.computeFlexOffsets(di,de.width,dn);

for(var j=0;j<dh.colSpan;j++){dk=dj[dd+j]?dj[dd+j].offset:0;
db[dd+j].width+=dk;
}}if(dg<de.minWidth){var dj=qx.ui.layout.Util.computeFlexOffsets(di,de.minWidth,dg);

for(var j=0;j<dh.colSpan;j++){dk=dj[dd+j]?dj[dd+j].offset:0;
db[dd+j].minWidth+=dk;
}}}},_getRowHeights:function(){if(this.__gH!=null){return this.__gH;
}var s=[];
var k=this.__gF;
var h=this.__gG;

for(var t=0;t<=k;t++){var m=0;
var o=0;
var n=0;

for(var r=0;r<=h;r++){var g=this.__gC[t][r];

if(!g){continue;
}var p=g.getLayoutProperties().rowSpan||0;

if(p>1){continue;
}var q=this.__gK(g);

if(this.getRowFlex(t)>0){m=Math.max(m,q.minHeight);
}else{m=Math.max(m,q.height);
}o=Math.max(o,q.height);
}var m=Math.max(m,this.getRowMinHeight(t));
var n=this.getRowMaxHeight(t);

if(this.getRowHeight(t)!==null){var o=this.getRowHeight(t);
}else{var o=Math.max(m,Math.min(o,n));
}s[t]={minHeight:m,height:o,maxHeight:n};
}
if(this.__gE.length>0){this._fixHeightsRowSpan(s);
}this.__gH=s;
return s;
},_getColWidths:function(){if(this.__gI!=null){return this.__gI;
}var O=[];
var L=this.__gG;
var N=this.__gF;

for(var T=0;T<=L;T++){var R=0;
var Q=0;
var M=Infinity;

for(var U=0;U<=N;U++){var K=this.__gC[U][T];

if(!K){continue;
}var P=K.getLayoutProperties().colSpan||0;

if(P>1){continue;
}var S=this.__gK(K);

if(this.getColumnFlex(T)>0){Q=Math.max(Q,S.minWidth);
}else{Q=Math.max(Q,S.width);
}R=Math.max(R,S.width);
}var Q=Math.max(Q,this.getColumnMinWidth(T));
var M=this.getColumnMaxWidth(T);

if(this.getColumnWidth(T)!==null){var R=this.getColumnWidth(T);
}else{var R=Math.max(Q,Math.min(R,M));
}O[T]={minWidth:Q,width:R,maxWidth:M};
}
if(this.__gD.length>0){this._fixWidthsColSpan(O);
}this.__gI=O;
return O;
},_getColumnFlexOffsets:function(bd){var be=this.getSizeHint();
var bi=bd-be.width;

if(bi==0){return {};
}var bg=this._getColWidths();
var bf={};

for(var i=0,l=bg.length;i<l;i++){var bj=bg[i];
var bh=this.getColumnFlex(i);

if((bh<=0)||(bj.width==bj.maxWidth&&bi>0)||(bj.width==bj.minWidth&&bi<0)){continue;
}bf[i]={min:bj.minWidth,value:bj.width,max:bj.maxWidth,flex:bh};
}return qx.ui.layout.Util.computeFlexOffsets(bf,bd,be.width);
},_getRowFlexOffsets:function(cm){var cn=this.getSizeHint();
var cq=cm-cn.height;

if(cq==0){return {};
}var cr=this._getRowHeights();
var co={};

for(var i=0,l=cr.length;i<l;i++){var cs=cr[i];
var cp=this.getRowFlex(i);

if((cp<=0)||(cs.height==cs.maxHeight&&cq>0)||(cs.height==cs.minHeight&&cq<0)){continue;
}co[i]={min:cs.minHeight,value:cs.height,max:cs.maxHeight,flex:cp};
}return qx.ui.layout.Util.computeFlexOffsets(co,cm,cn.height);
},renderLayout:function(cv,cw){if(this._invalidChildrenCache){this.__gJ();
}var cK=qx.ui.layout.Util;
var cy=this.getSpacingX();
var cE=this.getSpacingY();
var cP=this._getColWidths();
var cO=this._getColumnFlexOffsets(cv);
var cz=[];
var cR=this.__gG;
var cx=this.__gF;
var cQ;

for(var cS=0;cS<=cR;cS++){cQ=cO[cS]?cO[cS].offset:0;
cz[cS]=cP[cS].width+cQ;
}var cH=this._getRowHeights();
var cJ=this._getRowFlexOffsets(cw);
var cY=[];

for(var cF=0;cF<=cx;cF++){cQ=cJ[cF]?cJ[cF].offset:0;
cY[cF]=cH[cF].height+cQ;
}var da=0;

for(var cS=0;cS<=cR;cS++){var top=0;

for(var cF=0;cF<=cx;cF++){var cM=this.__gC[cF][cS];
if(!cM){top+=cY[cF]+cE;
continue;
}var cA=cM.getLayoutProperties();
if(cA.row!==cF||cA.column!==cS){top+=cY[cF]+cE;
continue;
}var cX=cy*(cA.colSpan-1);

for(var i=0;i<cA.colSpan;i++){cX+=cz[cS+i];
}var cN=cE*(cA.rowSpan-1);

for(var i=0;i<cA.rowSpan;i++){cN+=cY[cF+i];
}var cB=cM.getSizeHint();
var cV=cM.getMarginTop();
var cL=cM.getMarginLeft();
var cI=cM.getMarginBottom();
var cD=cM.getMarginRight();
var cG=Math.max(cB.minWidth,Math.min(cX-cL-cD,cB.maxWidth));
var cW=Math.max(cB.minHeight,Math.min(cN-cV-cI,cB.maxHeight));
var cT=this.getCellAlign(cF,cS);
var cU=da+cK.computeHorizontalAlignOffset(cT.hAlign,cG,cX,cL,cD);
var cC=top+cK.computeVerticalAlignOffset(cT.vAlign,cW,cN,cV,cI);
cM.renderLayout(cU,cC,cG,cW);
top+=cY[cF]+cE;
}da+=cz[cS]+cy;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__gI=null;
this.__gH=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__gJ();
}var dB=this._getColWidths();
var dD=0,dE=0;

for(var i=0,l=dB.length;i<l;i++){var dF=dB[i];

if(this.getColumnFlex(i)>0){dD+=dF.minWidth;
}else{dD+=dF.width;
}dE+=dF.width;
}var dG=this._getRowHeights();
var dz=0,dC=0;

for(var i=0,l=dG.length;i<l;i++){var dH=dG[i];

if(this.getRowFlex(i)>0){dz+=dH.minHeight;
}else{dz+=dH.height;
}dC+=dH.height;
}var dy=this.getSpacingX()*(dB.length-1);
var dx=this.getSpacingY()*(dG.length-1);
var dA={minWidth:dD+dy,width:dE+dy,minHeight:dz+dx,height:dC+dx};
return dA;
}},destruct:function(){this.__gC=this.__gA=this.__gB=this.__gD=this.__gE=this.__gI=this.__gH=null;
}});
})();
(function(){var f="qx.bom.client.Locale",e="-",d="";
qx.Bootstrap.define(f,{statics:{LOCALE:"",VARIANT:"",__jN:function(){var a=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var c=d;
var b=a.indexOf(e);

if(b!=-1){c=a.substr(b+1);
a=a.substr(0,b);
}this.LOCALE=a;
this.VARIANT=c;
}},defer:function(g){g.__jN();
}});
})();
(function(){var r="_",q="",p="qx.dynlocale",o="on",n="_applyLocale",m="changeLocale",l="C",k="qx.locale.Manager",j="String",h="singleton";
qx.Class.define(k,{type:h,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__gV=qx.$$translations||{};
this.__gW=qx.$$locales||{};
var F=qx.bom.client.Locale;
var D=F.LOCALE;
var E=F.VARIANT;

if(E!==q){D+=r+E;
}this.setLocale(D||this.__gX);
},statics:{tr:function(A,B){var C=qx.lang.Array.fromArguments(arguments);
C.splice(0,1);
return qx.locale.Manager.getInstance().translate(A,C);
},trn:function(V,W,X,Y){var ba=qx.lang.Array.fromArguments(arguments);
ba.splice(0,3);
if(X!=1){return qx.locale.Manager.getInstance().translate(W,ba);
}else{return qx.locale.Manager.getInstance().translate(V,ba);
}},trc:function(G,H,I){var J=qx.lang.Array.fromArguments(arguments);
J.splice(0,2);
return qx.locale.Manager.getInstance().translate(H,J);
},marktr:function(a){return a;
}},properties:{locale:{check:j,nullable:true,apply:n,event:m}},members:{__gX:l,__gY:null,__ha:null,__gV:null,__gW:null,getLanguage:function(){return this.__ha;
},getTerritory:function(){return this.getLocale().split(r)[1]||q;
},getAvailableLocales:function(){var bg=[];

for(var bf in this.__gW){if(bf!=this.__gX){bg.push(bf);
}}return bg;
},__hb:function(K){var M;
var L=K.indexOf(r);

if(L==-1){M=K;
}else{M=K.substring(0,L);
}return M;
},_applyLocale:function(b,c){this.__gY=b;
this.__ha=this.__hb(b);
},addTranslation:function(bb,bc){var bd=this.__gV;

if(bd[bb]){for(var be in bc){bd[bb][be]=bc[be];
}}else{bd[bb]=bc;
}},addLocale:function(d,e){var f=this.__gW;

if(f[d]){for(var g in e){f[d][g]=e[g];
}}else{f[d]=e;
}},translate:function(s,t,u){var z;
var x=this.__gV;

if(!x){return s;
}
if(u){var w=this.__hb(u);
}else{u=this.__gY;
w=this.__ha;
}
if(!z&&x[u]){z=x[u][s];
}
if(!z&&x[w]){z=x[w][s];
}
if(!z&&x[this.__gX]){z=x[this.__gX][s];
}
if(!z){z=s;
}
if(t.length>0){var v=[];

for(var i=0;i<t.length;i++){var y=t[i];

if(y&&y.translate){v[i]=y.translate();
}else{v[i]=y;
}}z=qx.lang.String.format(z,v);
}
if(qx.core.Variant.isSet(p,o)){z=new qx.locale.LocalizedString(z,s,t);
}return z;
},localize:function(N,O,P){var U;
var S=this.__gW;

if(!S){return N;
}
if(P){var R=this.__hb(P);
}else{P=this.__gY;
R=this.__ha;
}
if(!U&&S[P]){U=S[P][N];
}
if(!U&&S[R]){U=S[R][N];
}
if(!U&&S[this.__gX]){U=S[this.__gX][N];
}
if(!U){U=N;
}
if(O.length>0){var Q=[];

for(var i=0;i<O.length;i++){var T=O[i];

if(T.translate){Q[i]=T.translate();
}else{Q[i]=T;
}}U=qx.lang.String.format(U,Q);
}
if(qx.core.Variant.isSet(p,o)){U=new qx.locale.LocalizedString(U,N,O);
}return U;
}},destruct:function(){this.__gV=this.__gW=null;
}});
})();
(function(){var y="keydown",x="qx.client",w="keypress",v="NumLock",u="keyup",t="Enter",s="0",r="9",q="-",p="PageUp",bF="+",bE="PrintScreen",bD="gecko",bC="A",bB="Z",bA="Left",bz="F5",by="Down",bx="Up",bw="F11",F="F6",G="useraction",D="F3",E="keyinput",B="Insert",C="F8",z="End",A="/",N="Delete",O="*",bb="F1",W="F4",bj="Home",be="F2",bs="F12",bo="PageDown",S="F7",bv="F9",bu="F10",bt="Right",R="text",U="Escape",V="webkit",Y="5",bc="3",bf="Meta",bl="7",bq="CapsLock",H="input",I="Control",T="Space",bi="Tab",bh="Shift",bg="Pause",bn="Unidentified",bm="qx.event.handler.Keyboard",bd="mshtml",bk="mshtml|webkit",m="6",bp="off",J="Apps",K="4",X="Alt",n="2",o="Scroll",Q="1",L="8",M="Win",P="autoComplete",ba=",",br="Backspace";
qx.Class.define(bm,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cA){arguments.callee.base.call(this);
this.__fJ=cA;
this.__fK=cA.getWindow();
if(qx.core.Variant.isSet(x,bD)){this.__fL=this.__fK;
}else{this.__fL=this.__fK.document.documentElement;
}this.__fM={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cu){if(this._identifierToKeyCodeMap[cu]){return true;
}
if(cu.length!=1){return false;
}
if(cu>=s&&cu<=r){return true;
}
if(cu>=bC&&cu<=bB){return true;
}
switch(cu){case bF:case q:case O:case A:return true;
default:return false;
}}},members:{__fN:null,__fJ:null,__fK:null,__fL:null,__fM:null,__fO:null,__fP:null,__fQ:null,canHandleEvent:function(cD,cE){},registerEvent:function(bQ,bR,bS){},unregisterEvent:function(a,b,c){},_fireInputEvent:function(e,f){var g=this.__fR();
if(g&&g.offsetWidth!=0){var event=qx.event.Registration.createEvent(E,qx.event.type.KeyInput,[e,g,f]);
this.__fJ.dispatchEvent(g,event);
}if(this.__fK){qx.event.Registration.fireEvent(this.__fK,G,qx.event.type.Data,[E]);
}},_fireSequenceEvent:function(bH,bI,bJ){var bK=this.__fR();
var bL=bH.keyCode;
var event=qx.event.Registration.createEvent(bI,qx.event.type.KeySequence,[bH,bK,bJ]);
this.__fJ.dispatchEvent(bK,event);
if(qx.core.Variant.isSet(x,bk)){if(bI==y&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bL)&&!this._emulateKeyPress[bL]){this._fireSequenceEvent(bH,w,bJ);
}}}if(this.__fK){qx.event.Registration.fireEvent(this.__fK,G,qx.event.type.Data,[bI]);
}},__fR:function(){var cK=this.__fJ.getHandler(qx.event.handler.Focus);
var cL=cK.getActive();
if(!cL||cL.offsetWidth==0){cL=cK.getFocus();
}if(!cL||cL.offsetWidth==0){cL=this.__fJ.getWindow().document.body;
}return cL;
},_initKeyObserver:function(){this.__fN=qx.lang.Function.listener(this.__fS,this);
this.__fQ=qx.lang.Function.listener(this.__fU,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fL,u,this.__fN);
Event.addNativeListener(this.__fL,y,this.__fN);
Event.addNativeListener(this.__fL,w,this.__fQ);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fL,u,this.__fN);
Event.removeNativeListener(this.__fL,y,this.__fN);
Event.removeNativeListener(this.__fL,w,this.__fQ);

for(var cC in (this.__fP||{})){var cB=this.__fP[cC];
Event.removeNativeListener(cB.target,w,cB.callback);
}delete (this.__fP);
},__fS:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"mshtml":function(cG){cG=window.event||cG;
var cJ=cG.keyCode;
var cH=0;
var cI=cG.type;
if(!(this.__fM[cJ]==y&&cI==y)){this._idealKeyHandler(cJ,cH,cI,cG);
}if(cI==y){if(this._isNonPrintableKeyCode(cJ)||this._emulateKeyPress[cJ]){this._idealKeyHandler(cJ,cH,w,cG);
}}this.__fM[cJ]=cI;
},"gecko":function(cf){var cj=this._keyCodeFix[cf.keyCode]||cf.keyCode;
var ch=0;
var ci=cf.type;
if(qx.bom.client.Platform.WIN){var cg=cj?this._keyCodeToIdentifier(cj):this._charCodeToIdentifier(ch);

if(!(this.__fM[cg]==y&&ci==y)){this._idealKeyHandler(cj,ch,ci,cf);
}this.__fM[cg]=ci;
}else{this._idealKeyHandler(cj,ch,ci,cf);
}this.__fT(cf.target,ci,cj);
},"webkit":function(bM){var bP=0;
var bN=0;
var bO=bM.type;
if(qx.bom.client.Engine.VERSION<525.13){if(bO==u||bO==y){bP=this._charCode2KeyCode[bM.charCode]||bM.keyCode;
}else{if(this._charCode2KeyCode[bM.charCode]){bP=this._charCode2KeyCode[bM.charCode];
}else{bN=bM.charCode;
}}this._idealKeyHandler(bP,bN,bO,bM);
}else{bP=bM.keyCode;
if(!(this.__fM[bP]==y&&bO==y)){this._idealKeyHandler(bP,bN,bO,bM);
}if(bO==y){if(this._isNonPrintableKeyCode(bP)||this._emulateKeyPress[bP]){this._idealKeyHandler(bP,bN,w,bM);
}}this.__fM[bP]=bO;
}},"opera":function(bG){this.__fO=bG.keyCode;
this._idealKeyHandler(bG.keyCode,0,bG.type,bG);
}})),__fT:qx.core.Variant.select(x,{"gecko":function(ca,cb,cc){if(cb===y&&(cc==33||cc==34||cc==38||cc==40)&&ca.type==R&&ca.tagName.toLowerCase()===H&&ca.getAttribute(P)!==bp){if(!this.__fP){this.__fP={};
}var ce=qx.core.ObjectRegistry.toHashCode(ca);

if(this.__fP[ce]){return;
}var self=this;
this.__fP[ce]={target:ca,callback:function(cv){qx.bom.Event.stopPropagation(cv);
self.__fU(cv);
}};
var cd=qx.event.GlobalError.observeMethod(this.__fP[ce].callback);
qx.bom.Event.addNativeListener(ca,w,cd);
}},"default":null}),__fU:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"mshtml":function(d){d=window.event||d;

if(this._charCode2KeyCode[d.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[d.keyCode],0,d.type,d);
}else{this._idealKeyHandler(0,d.keyCode,d.type,d);
}},"gecko":function(h){var k=this._keyCodeFix[h.keyCode]||h.keyCode;
var i=h.charCode;
var j=h.type;
this._idealKeyHandler(k,i,j,h);
},"webkit":function(bT){if(qx.bom.client.Engine.VERSION<525.13){var bW=0;
var bU=0;
var bV=bT.type;

if(bV==u||bV==y){bW=this._charCode2KeyCode[bT.charCode]||bT.keyCode;
}else{if(this._charCode2KeyCode[bT.charCode]){bW=this._charCode2KeyCode[bT.charCode];
}else{bU=bT.charCode;
}}this._idealKeyHandler(bW,bU,bV,bT);
}else{if(this._charCode2KeyCode[bT.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bT.keyCode],0,bT.type,bT);
}else{this._idealKeyHandler(0,bT.keyCode,bT.type,bT);
}}},"opera":function(cq){var cs=cq.keyCode;
var cr=cq.type;
if(cs!=this.__fO){this._idealKeyHandler(0,this.__fO,cr,cq);
}else{if(this._keyCodeToIdentifierMap[cq.keyCode]){this._idealKeyHandler(cq.keyCode,0,cq.type,cq);
}else{this._idealKeyHandler(0,cq.keyCode,cq.type,cq);
}}}})),_idealKeyHandler:function(ck,cl,cm,cn){var co;
if(ck||(!ck&&!cl)){co=this._keyCodeToIdentifier(ck);
this._fireSequenceEvent(cn,cm,co);
}else{co=this._charCodeToIdentifier(cl);
this._fireSequenceEvent(cn,w,co);
this._fireInputEvent(cn,cl);
}},_specialCharCodeMap:{8:br,9:bi,13:t,27:U,32:T},_emulateKeyPress:qx.core.Variant.select(x,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bh,17:I,18:X,20:bq,224:bf,37:bA,38:bx,39:bt,40:by,33:p,34:bo,35:z,36:bj,45:B,46:N,112:bb,113:be,114:D,115:W,116:bz,117:F,118:S,119:C,120:bv,121:bu,122:bw,123:bs,144:v,44:bE,145:o,19:bg,91:M,93:J},_numpadToCharCode:{96:s.charCodeAt(0),97:Q.charCodeAt(0),98:n.charCodeAt(0),99:bc.charCodeAt(0),100:K.charCodeAt(0),101:Y.charCodeAt(0),102:m.charCodeAt(0),103:bl.charCodeAt(0),104:L.charCodeAt(0),105:r.charCodeAt(0),106:O.charCodeAt(0),107:bF.charCodeAt(0),109:q.charCodeAt(0),110:ba.charCodeAt(0),111:A.charCodeAt(0)},_charCodeA:bC.charCodeAt(0),_charCodeZ:bB.charCodeAt(0),_charCode0:s.charCodeAt(0),_charCode9:r.charCodeAt(0),_isNonPrintableKeyCode:function(ct){return this._keyCodeToIdentifierMap[ct]?true:false;
},_isIdentifiableKeyCode:function(l){if(l>=this._charCodeA&&l<=this._charCodeZ){return true;
}if(l>=this._charCode0&&l<=this._charCode9){return true;
}if(this._specialCharCodeMap[l]){return true;
}if(this._numpadToCharCode[l]){return true;
}if(this._isNonPrintableKeyCode(l)){return true;
}return false;
},_keyCodeToIdentifier:function(bX){if(this._isIdentifiableKeyCode(bX)){var bY=this._numpadToCharCode[bX];

if(bY){return String.fromCharCode(bY);
}return (this._keyCodeToIdentifierMap[bX]||this._specialCharCodeMap[bX]||String.fromCharCode(bX));
}else{return bn;
}},_charCodeToIdentifier:function(cp){return this._specialCharCodeMap[cp]||String.fromCharCode(cp).toUpperCase();
},_identifierToKeyCode:function(cF){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cF]||cF.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__fO=this.__fJ=this.__fK=this.__fL=this.__fM=null;
},defer:function(cw,cx,cy){qx.event.Registration.addHandler(cw);
if(!cw._identifierToKeyCodeMap){cw._identifierToKeyCodeMap={};

for(var cz in cx._keyCodeToIdentifierMap){cw._identifierToKeyCodeMap[cx._keyCodeToIdentifierMap[cz]]=parseInt(cz,10);
}
for(var cz in cx._specialCharCodeMap){cw._identifierToKeyCodeMap[cx._specialCharCodeMap[cz]]=parseInt(cz,10);
}}
if(qx.core.Variant.isSet(x,bd)){cx._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(x,bD)){cx._keyCodeFix={12:cx._identifierToKeyCode(v)};
}else if(qx.core.Variant.isSet(x,V)){if(qx.bom.client.Engine.VERSION<525.13){cx._charCode2KeyCode={63289:cx._identifierToKeyCode(v),63276:cx._identifierToKeyCode(p),63277:cx._identifierToKeyCode(bo),63275:cx._identifierToKeyCode(z),63273:cx._identifierToKeyCode(bj),63234:cx._identifierToKeyCode(bA),63232:cx._identifierToKeyCode(bx),63235:cx._identifierToKeyCode(bt),63233:cx._identifierToKeyCode(by),63272:cx._identifierToKeyCode(N),63302:cx._identifierToKeyCode(B),63236:cx._identifierToKeyCode(bb),63237:cx._identifierToKeyCode(be),63238:cx._identifierToKeyCode(D),63239:cx._identifierToKeyCode(W),63240:cx._identifierToKeyCode(bz),63241:cx._identifierToKeyCode(F),63242:cx._identifierToKeyCode(S),63243:cx._identifierToKeyCode(C),63244:cx._identifierToKeyCode(bv),63245:cx._identifierToKeyCode(bu),63246:cx._identifierToKeyCode(bw),63247:cx._identifierToKeyCode(bs),63248:cx._identifierToKeyCode(bE),3:cx._identifierToKeyCode(t),12:cx._identifierToKeyCode(v),13:cx._identifierToKeyCode(t)};
}else{cx._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var e="qx.event.handler.Capture";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(f,g,h){},unregisterEvent:function(b,c,d){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var V="alias",U="copy",T="blur",S="mouseout",R="keydown",Q="Ctrl",P="Shift",O="mousemove",N="move",M="mouseover",bm="Alt",bl="keyup",bk="mouseup",bj="dragend",bi="on",bh="mousedown",bg="qxDraggable",bf="drag",be="drop",bd="qxDroppable",bb="qx.event.handler.DragDrop",bc="droprequest",Y="dragstart",ba="dragchange",W="dragleave",X="dragover";
qx.Class.define(bb,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(D){arguments.callee.base.call(this);
this.__hx=D;
this.__hy=D.getWindow().document.documentElement;
this.__hx.addListener(this.__hy,bh,this._onMouseDown,this);
this.__hK();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__hx:null,__hy:null,__hz:null,__hA:null,__hB:null,__hC:null,__hD:null,__hE:null,__hF:null,__hG:null,__hH:false,__hI:0,__hJ:0,canHandleEvent:function(I,J){},registerEvent:function(F,G,H){},unregisterEvent:function(c,d,f){},addType:function(E){this.__hB[E]=true;
},addAction:function(K){this.__hC[K]=true;
},supportsType:function(z){return !!this.__hB[z];
},supportsAction:function(C){return !!this.__hC[C];
},getData:function(w){if(!this.__hR||!this.__hz){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__hB[w]){throw new Error("Unsupported data type: "+w+"!");
}
if(!this.__hE[w]){this.__hF=w;
this.__hM(bc,this.__hA,this.__hz,false);
}
if(!this.__hE[w]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__hE[w]||null;
},getCurrentAction:function(){return this.__hG;
},addData:function(u,v){this.__hE[u]=v;
},getCurrentType:function(){return this.__hF;
},__hK:function(){this.__hB={};
this.__hC={};
this.__hD={};
this.__hE={};
},__hL:function(){var k=this.__hC;
var i=this.__hD;
var j=null;

if(this.__hR){if(i.Shift&&i.Ctrl&&k.alias){j=V;
}else if(i.Shift&&i.Alt&&k.copy){j=U;
}else if(i.Shift&&k.move){j=N;
}else if(i.Alt&&k.alias){j=V;
}else if(i.Ctrl&&k.copy){j=U;
}else if(k.move){j=N;
}else if(k.copy){j=U;
}else if(k.alias){j=V;
}}
if(j!=this.__hG){this.__hG=j;
this.__hM(ba,this.__hA,this.__hz,false);
}},__hM:function(l,m,n,o,p){var r=qx.event.Registration;
var q=r.createEvent(l,qx.event.type.Drag,[o,p]);

if(m!==n){q.setRelatedTarget(n);
}return r.dispatchEvent(m,q);
},__hN:function(L){while(L&&L.nodeType==1){if(L.getAttribute(bg)==bi){return L;
}L=L.parentNode;
}return null;
},__hO:function(s){while(s&&s.nodeType==1){if(s.getAttribute(bd)==bi){return s;
}s=s.parentNode;
}return null;
},__hP:function(){this.__hA=null;
this.__hx.removeListener(this.__hy,O,this._onMouseMove,this,true);
this.__hx.removeListener(this.__hy,bk,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,T,this._onWindowBlur,this);
this.__hK();
},__hQ:function(){if(this.__hH){this.__hx.removeListener(this.__hy,M,this._onMouseOver,this,true);
this.__hx.removeListener(this.__hy,S,this._onMouseOut,this,true);
this.__hx.removeListener(this.__hy,R,this._onKeyDown,this,true);
this.__hx.removeListener(this.__hy,bl,this._onKeyUp,this,true);
this.__hM(bj,this.__hA,this.__hz,false);
this.__hH=false;
}this.__hR=false;
this.__hz=null;
this.__hP();
},__hR:false,_onWindowBlur:function(e){this.__hQ();
},_onKeyDown:function(e){var A=e.getKeyIdentifier();

switch(A){case bm:case Q:case P:if(!this.__hD[A]){this.__hD[A]=true;
this.__hL();
}}},_onKeyUp:function(e){var t=e.getKeyIdentifier();

switch(t){case bm:case Q:case P:if(this.__hD[t]){this.__hD[t]=false;
this.__hL();
}}},_onMouseDown:function(e){if(this.__hH){return;
}var h=this.__hN(e.getTarget());

if(h){this.__hI=e.getDocumentLeft();
this.__hJ=e.getDocumentTop();
this.__hA=h;
this.__hx.addListener(this.__hy,O,this._onMouseMove,this,true);
this.__hx.addListener(this.__hy,bk,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,T,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__hR){this.__hM(be,this.__hz,this.__hA,false,e);
}if(this.__hH){e.stopPropagation();
}this.__hQ();
},_onMouseMove:function(e){if(this.__hH){if(!this.__hM(bf,this.__hA,this.__hz,true,e)){this.__hQ();
}}else{if(Math.abs(e.getDocumentLeft()-this.__hI)>3||Math.abs(e.getDocumentTop()-this.__hJ)>3){if(this.__hM(Y,this.__hA,this.__hz,true,e)){this.__hH=true;
this.__hx.addListener(this.__hy,M,this._onMouseOver,this,true);
this.__hx.addListener(this.__hy,S,this._onMouseOut,this,true);
this.__hx.addListener(this.__hy,R,this._onKeyDown,this,true);
this.__hx.addListener(this.__hy,bl,this._onKeyUp,this,true);
var g=this.__hD;
g.Ctrl=e.isCtrlPressed();
g.Shift=e.isShiftPressed();
g.Alt=e.isAltPressed();
this.__hL();
}else{this.__hM(bj,this.__hA,this.__hz,false);
this.__hP();
}}}},_onMouseOver:function(e){var x=e.getTarget();
var y=this.__hO(x);

if(y&&y!=this.__hz){this.__hR=this.__hM(X,y,this.__hA,true,e);
this.__hz=y;
this.__hL();
}},_onMouseOut:function(e){var b=this.__hO(e.getTarget());
var a=this.__hO(e.getRelatedTarget());

if(b&&b!==a&&b==this.__hz){this.__hM(W,this.__hz,a,false,e);
this.__hz=null;
this.__hR=false;
qx.event.Timer.once(this.__hL,this,0);
}}},destruct:function(){this.__hA=this.__hz=this.__hx=this.__hy=this.__hB=this.__hC=this.__hD=this.__hE=null;
},defer:function(B){qx.event.Registration.addHandler(B);
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__hS:null,__hT:null,init:function(b,c,d){arguments.callee.base.call(this,false,d);
this.__hS=b;
this.__hT=c;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f.__hS=this.__hS;
f.__hT=this.__hT;
return f;
},getData:function(){return this.__hS;
},getOldData:function(){return this.__hT;
}},destruct:function(){this.__hS=this.__hT=null;
}});
})();
(function(){var q="mshtml",p="qx.client",o="qx.bom.element.Dimension",n="paddingRight",m="paddingLeft",l="paddingTop",k="paddingBottom";
qx.Class.define(o,{statics:{getWidth:qx.core.Variant.select(p,{"gecko":function(A){if(A.getBoundingClientRect){var B=A.getBoundingClientRect();
return Math.round(B.right)-Math.round(B.left);
}else{return A.offsetWidth;
}},"default":function(C){return C.offsetWidth;
}}),getHeight:qx.core.Variant.select(p,{"gecko":function(i){if(i.getBoundingClientRect){var j=i.getBoundingClientRect();
return Math.round(j.bottom)-Math.round(j.top);
}else{return i.offsetHeight;
}},"default":function(s){return s.offsetHeight;
}}),getSize:function(r){return {width:this.getWidth(r),height:this.getHeight(r)};
},__gt:{visible:true,hidden:true},getContentWidth:function(t){var v=qx.bom.element.Style;
var w=qx.bom.element.Overflow.getX(t);
var x=parseInt(v.get(t,m),10);
var z=parseInt(v.get(t,n),10);

if(this.__gt[w]){return t.clientWidth-x-z;
}else{if(t.clientWidth>=t.scrollWidth){return Math.max(t.clientWidth,t.scrollWidth)-x-z;
}else{var y=t.scrollWidth-x;
var u=qx.bom.client.Engine;

if(u.NAME===q&&u.VERSION==6){y-=z;
}return y;
}}},getContentHeight:function(a){var c=qx.bom.element.Style;
var e=qx.bom.element.Overflow.getY(a);
var f=parseInt(c.get(a,l),10);
var d=parseInt(c.get(a,k),10);

if(this.__gt[e]){return a.clientHeight-f-d;
}else{if(a.clientHeight>=a.scrollHeight){return Math.max(a.clientHeight,a.scrollHeight)-f-d;
}else{var g=a.scrollHeight-f;
var b=qx.bom.client.Engine;

if(b.NAME===q&&b.VERSION==6){g-=d;
}return g;
}}},getContentSize:function(h){return {width:this.getContentWidth(h),height:this.getContentHeight(h)};
}}});
})();
(function(){var j="qx.client",h="load",g="qx.io.ImageLoader";
qx.Bootstrap.define(g,{statics:{__jy:{},__jz:{width:null,height:null},__jA:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(k){var m=this.__jy[k];
return !!(m&&m.loaded);
},isFailed:function(n){var o=this.__jy[n];
return !!(o&&o.failed);
},isLoading:function(q){var r=this.__jy[q];
return !!(r&&r.loading);
},getFormat:function(e){var f=this.__jy[e];
return f?f.format:null;
},getSize:function(a){var b=this.__jy[a];
return b?
{width:b.width,height:b.height}:this.__jz;
},getWidth:function(c){var d=this.__jy[c];
return d?d.width:null;
},getHeight:function(x){var y=this.__jy[x];
return y?y.height:null;
},load:function(B,C,D){var E=this.__jy[B];

if(!E){E=this.__jy[B]={};
}if(C&&!D){D=window;
}if(E.loaded||E.loading||E.failed){if(C){if(E.loading){E.callbacks.push(C,D);
}else{C.call(D,B,E);
}}}else{E.loading=true;
E.callbacks=[];

if(C){E.callbacks.push(C,D);
}var G=new Image();
var F=qx.lang.Function.listener(this.__jB,this,G,B);
G.onload=F;
G.onerror=F;
G.src=B;
}},__jB:qx.event.GlobalError.observeMethod(function(event,s,t){var u=this.__jy[t];
if(event.type===h){u.loaded=true;
u.width=this.__jC(s);
u.height=this.__jD(s);
var v=this.__jA.exec(t);

if(v!=null){u.format=v[1];
}}else{u.failed=true;
}s.onload=s.onerror=null;
var w=u.callbacks;
delete u.loading;
delete u.callbacks;
for(var i=0,l=w.length;i<l;i+=2){w[i].call(w[i+1],t,u);
}}),__jC:qx.core.Variant.select(j,{"gecko":function(H){return H.naturalWidth;
},"default":function(A){return A.width;
}}),__jD:qx.core.Variant.select(j,{"gecko":function(p){return p.naturalHeight;
},"default":function(z){return z.height;
}})}});
})();
(function(){var e="qx.client",d="qx.event.type.Drag";
qx.Class.define(d,{extend:qx.event.type.Event,members:{init:function(m,n){arguments.callee.base.call(this,true,m);

if(n){this._native=n.getNativeEvent()||null;
this._originalTarget=n.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(g){var h=arguments.callee.base.call(this,g);
h._native=this._native;
return h;
},getDocumentLeft:qx.core.Variant.select(e,{"mshtml":function(){if(this._native==null){return 0;
}var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(k);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(e,{"mshtml":function(){if(this._native==null){return 0;
}var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(o);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(a){this.getManager().addType(a);
},addAction:function(l){this.getManager().addAction(l);
},supportsType:function(f){return this.getManager().supportsType(f);
},supportsAction:function(b){return this.getManager().supportsAction(b);
},addData:function(i,j){this.getManager().addData(i,j);
},getData:function(c){return this.getManager().getData(c);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var l="/",k="mshtml",j="qx.client",i="",h="?",g="string",f="qx.util.ResourceManager",e="singleton",d="qx.isSource";
qx.Class.define(f,{extend:qx.core.Object,type:e,statics:{__bH:qx.$$resources||{},__bI:{}},members:{has:function(C){return !!arguments.callee.self.__bH[C];
},getData:function(a){return arguments.callee.self.__bH[a]||null;
},getImageWidth:function(A){var B=arguments.callee.self.__bH[A];
return B?B[0]:null;
},getImageHeight:function(q){var r=arguments.callee.self.__bH[q];
return r?r[1]:null;
},getImageFormat:function(b){var c=arguments.callee.self.__bH[b];
return c?c[2]:null;
},isClippedImage:function(y){var z=arguments.callee.self.__bH[y];
return z&&z.length>4;
},toUri:function(m){if(m==null){return m;
}var n=arguments.callee.self.__bH[m];

if(!n){return m;
}
if(typeof n===g){var p=n;
}else{var p=n[3];
if(!p){return m;
}}var o=i;

if(qx.core.Variant.isSet(j,k)&&qx.bom.client.Feature.SSL){o=arguments.callee.self.__bI[p];
}return o+qx.$$libraries[p].resourceUri+l+m;
}},defer:function(s){if(qx.core.Variant.isSet(j,k)){if(qx.bom.client.Feature.SSL){for(var w in qx.$$libraries){var u=qx.$$libraries[w].resourceUri;
if(u.match(/^\/\//)!=null){s.__bI[w]=window.location.protocol;
}else if(u.match(/^\.\//)!=null&&qx.core.Setting.get(d)){var t=document.URL;
s.__bI[w]=t.substring(0,t.lastIndexOf(l));
}else if(u.match(/^http/)!=null){}else{var x=window.location.href.indexOf(h);
var v;

if(x==-1){v=window.location.href;
}else{v=window.location.href.substring(0,x);
}s.__bI[w]=v.substring(0,v.lastIndexOf(l)+1);
}}}}}});
})();
(function(){var o="object",n="_applyTheme",m="__bJ",l="qx.theme.manager.Decoration",k="Theme",j="string",i="singleton";
qx.Class.define(l,{type:i,extend:qx.core.Object,properties:{theme:{check:k,nullable:true,apply:n}},members:{__bJ:null,resolve:function(a){if(!a){return null;
}
if(typeof a===o){return a;
}var d=this.getTheme();

if(!d){return null;
}var d=this.getTheme();

if(!d){return null;
}var e=this.__bJ;

if(!e){e=this.__bJ={};
}var b=e[a];

if(b){return b;
}var c=d.decorations[a];

if(!c){return null;
}var f=c.decorator;

if(f==null){throw new Error("Missing definition of which decorator to use in entry: "+a+"!");
}return e[a]=(new f).set(c.style);
},isValidPropertyValue:function(p){if(typeof p===j){return this.isDynamic(p);
}else if(typeof p===o){var q=p.constructor;
return qx.Class.hasInterface(q,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(g){if(!g){return false;
}var h=this.getTheme();

if(!h){return false;
}return !!h.decorations[g];
},_applyTheme:function(r,s){var u=qx.util.AliasManager.getInstance();

if(s){for(var t in s.aliases){u.remove(t);
}}
if(r){for(var t in r.aliases){u.add(t,r.aliases[t]);
}}
if(!r){this.__bJ={};
}}},destruct:function(){this._disposeMap(m);
}});
})();
(function(){var x="qx.client",w="",v="boxSizing",u="box-sizing",t=":",s="border-box",r="qx.bom.element.BoxSizing",q="KhtmlBoxSizing",p="-moz-box-sizing",o="WebkitBoxSizing",k=";",n="-khtml-box-sizing",m="content-box",j="-webkit-box-sizing",h="MozBoxSizing";
qx.Class.define(r,{statics:{__bT:qx.core.Variant.select(x,{"mshtml":null,"webkit":[v,q,o],"gecko":[h],"opera":[v]}),__bU:qx.core.Variant.select(x,{"mshtml":null,"webkit":[u,n,j],"gecko":[p],"opera":[u]}),__bV:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__bW:function(a){var b=this.__bV;
return b.tags[a.tagName.toLowerCase()]||b.types[a.type];
},compile:qx.core.Variant.select(x,{"mshtml":function(y){{};
},"default":function(z){var B=this.__bU;
var A=w;

if(B){for(var i=0,l=B.length;i<l;i++){A+=B[i]+t+z+k;
}}return A;
}}),get:qx.core.Variant.select(x,{"mshtml":function(G){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(G))){if(!this.__bW(G)){return m;
}}return s;
},"default":function(c){var e=this.__bT;
var d;

if(e){for(var i=0,l=e.length;i<l;i++){d=qx.bom.element.Style.get(c,e[i],null,false);

if(d!=null&&d!==w){return d;
}}}return w;
}}),set:qx.core.Variant.select(x,{"mshtml":function(f,g){{};
},"default":function(D,E){var F=this.__bT;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(C){this.set(C,w);
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
(function(){var q="number",p="0",o="px",n=";",m="background-image:url(",l=");",k="",j=")",i="background-repeat:",h=" ",e="qx.bom.element.Background",g="url(",f="background-position:";
qx.Class.define(e,{statics:{__ce:[m,null,l,f,null,n,i,null,n],__cf:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cg:function(a,top){var b=qx.bom.client.Engine;

if(b.GECKO&&b.VERSION<1.9&&a==top&&typeof a==q){top+=0.01;
}
if(a){var c=(typeof a==q)?a+o:a;
}else{c=p;
}
if(top){var d=(typeof top==q)?top+o:top;
}else{d=p;
}return c+h+d;
},compile:function(r,s,t,top){var u=this.__cg(t,top);
var v=qx.util.ResourceManager.getInstance().toUri(r);
var w=this.__ce;
w[1]=v;
w[4]=u;
w[7]=s;
return w.join(k);
},getStyles:function(D,E,F,top){if(!D){return this.__cf;
}var G=this.__cg(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I={backgroundPosition:G,backgroundImage:g+H+j};

if(E!=null){I.backgroundRepeat=E;
}return I;
},set:function(x,y,z,A,top){var B=this.getStyles(y,z,A,top);

for(var C in B){x.style[C]=B[C];
}}}});
})();
(function(){var k="-",j="qx.event.handler.Element";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){arguments.callee.base.call(this);
this._manager=b;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(l,m){},registerEvent:function(q,r,s){var v=qx.core.ObjectRegistry.toHashCode(q);
var t=v+k+r;
var u=qx.lang.Function.listener(this._onNative,this,t);
qx.bom.Event.addNativeListener(q,r,u);
this._registeredEvents[t]={element:q,type:r,listener:u};
},unregisterEvent:function(c,d,e){var h=this._registeredEvents;

if(!h){return;
}var i=qx.core.ObjectRegistry.toHashCode(c);
var f=i+k+d;
var g=this._registeredEvents[f];
qx.bom.Event.removeNativeListener(c,d,g.listener);
delete this._registeredEvents[f];
},_onNative:qx.event.GlobalError.observeMethod(function(w,x){var z=this._registeredEvents;

if(!z){return;
}var y=z[x];
qx.event.Registration.fireNonBubblingEvent(y.element,y.type,qx.event.type.Native,[w]);
})},destruct:function(){var n;
var o=this._registeredEvents;

for(var p in o){n=o[p];
qx.bom.Event.removeNativeListener(n.element,n.type,n.listener);
}this._manager=this._registeredEvents=null;
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var g="CSS1Compat",f="position:absolute;width:0;height:0;width:1",e="qx.bom.Document",d="1px",c="qx.client",b="div";
qx.Class.define(e,{statics:{isQuirksMode:qx.core.Variant.select(c,{"mshtml":function(j){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (j||window).document.compatMode!==g;
}},"webkit":function(h){if(document.compatMode===undefined){var i=(h||window).document.createElement(b);
i.style.cssText=f;
return i.style.width===d?true:false;
}else{return (h||window).document.compatMode!==g;
}},"default":function(q){return (q||window).document.compatMode!==g;
}}),isStandardMode:function(a){return !this.isQuirksMode(a);
},getWidth:function(k){var l=(k||window).document;
var m=qx.bom.Viewport.getWidth(k);
var scroll=this.isStandardMode(k)?l.documentElement.scrollWidth:l.body.scrollWidth;
return Math.max(scroll,m);
},getHeight:function(n){var o=(n||window).document;
var p=qx.bom.Viewport.getHeight(n);
var scroll=this.isStandardMode(n)?o.documentElement.scrollHeight:o.body.scrollHeight;
return Math.max(scroll,p);
}}});
})();
(function(){var o="n-resize",n="e-resize",m="nw-resize",l="ne-resize",k="",j="cursor:",i="qx.client",h=";",g="qx.bom.element.Cursor",f="cursor",e="hand";
qx.Class.define(g,{statics:{__dR:qx.core.Variant.select(i,{"mshtml":{"cursor":e,"ew-resize":n,"ns-resize":o,"nesw-resize":l,"nwse-resize":m},"opera":{"col-resize":n,"row-resize":o,"ew-resize":n,"ns-resize":o,"nesw-resize":l,"nwse-resize":m},"default":{}}),compile:function(b){return j+(this.__dR[b]||b)+h;
},get:function(p,q){return qx.bom.element.Style.get(p,f,q,false);
},set:function(c,d){c.style.cursor=this.__dR[d]||d;
},reset:function(a){a.style.cursor=k;
}}});
})();
(function(){var F="_applyLayoutChange",E="top",D="left",C="middle",B="Decorator",A="center",z="_applyReversed",y="bottom",x="qx.ui.layout.VBox",w="Integer",u="right",v="Boolean";
qx.Class.define(x,{extend:qx.ui.layout.Abstract,construct:function(r,s,t){arguments.callee.base.call(this);

if(r){this.setSpacing(r);
}
if(s){this.setAlignY(s);
}
if(t){this.setSeparator(t);
}},properties:{alignY:{check:[E,C,y],init:E,apply:F},alignX:{check:[D,A,u],init:D,apply:F},spacing:{check:w,init:0,apply:F},separator:{check:B,nullable:true,apply:F},reversed:{check:v,init:false,apply:z}},members:{__dS:null,__dT:null,__dU:null,__dV:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__dW:function(){var L=this._getLayoutChildren();
var length=L.length;
var H=false;
var G=this.__dS&&this.__dS.length!=length&&this.__dT&&this.__dS;
var J;
var I=G?this.__dS:new Array(length);
var K=G?this.__dT:new Array(length);
if(this.getReversed()){L=L.concat().reverse();
}for(var i=0;i<length;i++){J=L[i].getLayoutProperties();

if(J.height!=null){I[i]=parseFloat(J.height)/100;
}
if(J.flex!=null){K[i]=J.flex;
H=true;
}else{K[i]=0;
}}if(!G){this.__dS=I;
this.__dT=K;
}this.__dU=H;
this.__dV=L;
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
if(bg<N&&this.getAlignY()!=E){top=N-bg;

if(this.getAlignY()===C){top=Math.round(top/2);
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
}var g=qx.ui.layout.Util;
var q=this.__dV;
var c=0,f=0,e=0;
var a=0,h=0;
var n,b,p;
for(var i=0,l=q.length;i<l;i+=1){n=q[i];
b=n.getSizeHint();
f+=b.height;
var m=this.__dT[i];
var d=this.__dS[i];

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
}},destruct:function(){this.__dS=this.__dT=this.__dV=null;
}});
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
(function(){var q="",p="qx.client",o=";",n="filter",m="opacity:",l="opacity",k="MozOpacity",j=");",i=")",h="zoom:1;filter:alpha(opacity=",e="qx.bom.element.Opacity",g="alpha(opacity=",f="-moz-opacity:";
qx.Class.define(e,{statics:{compile:qx.core.Variant.select(p,{"mshtml":function(c){if(c>=1){return q;
}
if(c<0.00001){c=0;
}return h+(c*100)+j;
},"gecko":function(s){if(s==1){s=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return f+s+o;
}else{return m+s+o;
}},"default":function(d){if(d==1){return q;
}return m+d+o;
}}),set:qx.core.Variant.select(p,{"mshtml":function(B,C){var D=qx.bom.element.Style.get(B,n,qx.bom.element.Style.COMPUTED_MODE,false);
if(C>=1){B.style.filter=D.replace(/alpha\([^\)]*\)/gi,q);
return;
}
if(C<0.00001){C=0;
}if(!B.currentStyle||!B.currentStyle.hasLayout){B.style.zoom=1;
}B.style.filter=D.replace(/alpha\([^\)]*\)/gi,q)+g+C*100+i;
},"gecko":function(z,A){if(A==1){A=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){z.style.MozOpacity=A;
}else{z.style.opacity=A;
}},"default":function(a,b){if(b==1){b=q;
}a.style.opacity=b;
}}),reset:qx.core.Variant.select(p,{"mshtml":function(E){var F=qx.bom.element.Style.get(E,n,qx.bom.element.Style.COMPUTED_MODE,false);
E.style.filter=F.replace(/alpha\([^\)]*\)/gi,q);
},"gecko":function(r){if(qx.bom.client.Engine.VERSION<1.7){r.style.MozOpacity=q;
}else{r.style.opacity=q;
}},"default":function(K){K.style.opacity=q;
}}),get:qx.core.Variant.select(p,{"mshtml":function(G,H){var I=qx.bom.element.Style.get(G,n,H,false);

if(I){var J=I.match(/alpha\(opacity=(.*)\)/);

if(J&&J[1]){return parseFloat(J[1])/100;
}}return 1.0;
},"gecko":function(t,u){var v=qx.bom.element.Style.get(t,qx.bom.client.Engine.VERSION<1.7?k:l,u,false);

if(v==0.999999){v=1.0;
}
if(v!=null){return parseFloat(v);
}return 1.0;
},"default":function(w,x){var y=qx.bom.element.Style.get(w,l,x,false);

if(y!=null){return parseFloat(y);
}return 1.0;
}})}});
})();
(function(){var X="get",W="",V="[",U="last",T="change",S="]",R=".",Q="Number",P="String",O="set",bn="deepBinding",bm="item",bl="reset",bk="' (",bj="Boolean",bi=").",bh=") to the object '",bg="Integer",bf="qx.data.SingleValueBinding",be="No event could be found for the property",bc="PositiveNumber",bd="Binding from '",ba="PositiveInteger",bb="Binding does not exist!",Y="Date";
qx.Class.define(bf,{statics:{DEBUG_ON:false,__fa:{},bind:function(o,p,q,r,s){var C=this.__fc(o,p,q,r,s);
var x=p.split(R);
var u=this.__fj(x);
var B=[];
var y=[];
var z=[];
var v=[];
var w=o;
for(var i=0;i<x.length;i++){if(u[i]!==W){v.push(T);
}else{v.push(this.__fe(w,x[i]));
}B[i]=w;
if(i==x.length-1){if(u[i]!==W){var F=u[i]===U?w.length-1:u[i];
var t=w.getItem(F);
this.__fi(t,q,r,s,o);
z[i]=this.__fk(w,v[i],q,r,s,u[i]);
}else{if(x[i]!=null&&w[X+qx.lang.String.firstUp(x[i])]!=null){var t=w[X+qx.lang.String.firstUp(x[i])]();
this.__fi(t,q,r,s,o);
}z[i]=this.__fk(w,v[i],q,r,s);
}}else{var D={index:i,propertyNames:x,sources:B,listenerIds:z,arrayIndexValues:u,targetObject:q,targetPropertyChain:r,options:s,listeners:y};
var A=qx.lang.Function.bind(this.__fb,this,D);
y.push(A);
z[i]=w.addListener(v[i],A);
}if(w[X+qx.lang.String.firstUp(x[i])]==null){w=null;
}else if(u[i]!==W){w=w[X+qx.lang.String.firstUp(x[i])](u[i]);
}else{w=w[X+qx.lang.String.firstUp(x[i])]();
}
if(!w){break;
}}var E={type:bn,listenerIds:z,sources:B,targetListenerIds:C.listenerIds,targets:C.targets};
this.__fl(E,o,p,q,r);
return E;
},__fb:function(G){if(G.options&&G.options.onUpdate){G.options.onUpdate(G.sources[G.index],G.targetObject);
}for(var j=G.index+1;j<G.propertyNames.length;j++){var K=G.sources[j];
G.sources[j]=null;

if(!K){continue;
}K.removeListenerById(G.listenerIds[j]);
}var K=G.sources[G.index];
for(var j=G.index+1;j<G.propertyNames.length;j++){if(G.arrayIndexValues[j-1]!==W){K=K[X+qx.lang.String.firstUp(G.propertyNames[j-1])](G.arrayIndexValues[j-1]);
}else{K=K[X+qx.lang.String.firstUp(G.propertyNames[j-1])]();
}G.sources[j]=K;
if(!K){this.__ff(G.targetObject,G.targetPropertyChain);
break;
}if(j==G.propertyNames.length-1){if(qx.Class.implementsInterface(K,qx.data.IListData)){var L=G.arrayIndexValues[j]===U?K.length-1:G.arrayIndexValues[j];
var I=K.getItem(L);
this.__fi(I,G.targetObject,G.targetPropertyChain,G.options,G.sources[G.index]);
G.listenerIds[j]=this.__fk(K,T,G.targetObject,G.targetPropertyChain,G.options,G.arrayIndexValues[j]);
}else{if(G.propertyNames[j]!=null&&K[X+qx.lang.String.firstUp(G.propertyNames[j])]!=null){var I=K[X+qx.lang.String.firstUp(G.propertyNames[j])]();
this.__fi(I,G.targetObject,G.targetPropertyChain,G.options,G.sources[G.index]);
}var J=this.__fe(K,G.propertyNames[j]);
G.listenerIds[j]=this.__fk(K,J,G.targetObject,G.targetPropertyChain,G.options);
}}else{if(G.listeners[j]==null){var H=qx.lang.Function.bind(this.__fb,this,G);
G.listeners.push(H);
}if(qx.Class.implementsInterface(K,qx.data.IListData)){var J=T;
}else{var J=this.__fe(K,G.propertyNames[j]);
}G.listenerIds[j]=K.addListener(J,G.listeners[j]);
}}},__fc:function(bs,bt,bu,bv,bw){var bA=bv.split(R);
var by=this.__fj(bA);
var bF=[];
var bE=[];
var bC=[];
var bB=[];
var bz=bu;
for(var i=0;i<bA.length-1;i++){if(by[i]!==W){bB.push(T);
}else{try{bB.push(this.__fe(bz,bA[i]));
}catch(e){break;
}}bF[i]=bz;
var bD=function(){for(var j=i+1;j<bA.length-1;j++){var bX=bF[j];
bF[j]=null;

if(!bX){continue;
}bX.removeListenerById(bC[j]);
}var bX=bF[i];
for(var j=i+1;j<bA.length-1;j++){var bV=qx.lang.String.firstUp(bA[j-1]);
if(by[j-1]!==W){var bY=by[j-1]===U?bX.getLength()-1:by[j-1];
bX=bX[X+bV](bY);
}else{bX=bX[X+bV]();
}bF[j]=bX;
if(bE[j]==null){bE.push(bD);
}if(qx.Class.implementsInterface(bX,qx.data.IListData)){var bW=T;
}else{try{var bW=qx.data.SingleValueBinding.__fe(bX,bA[j]);
}catch(e){break;
}}bC[j]=bX.addListener(bW,bE[j]);
}qx.data.SingleValueBinding.__fd(bs,bt,bu,bv);
};
bE.push(bD);
bC[i]=bz.addListener(bB[i],bD);
var bx=qx.lang.String.firstUp(bA[i]);
if(bz[X+bx]==null){bz=null;
}else if(by[i]!==W){bz=bz[X+bx](by[i]);
}else{bz=bz[X+bx]();
}
if(!bz){break;
}}return {listenerIds:bC,targets:bF};
},__fd:function(cc,cd,ce,cf){var cj=this.__fh(cc,cd);

if(cj!=null){var cl=cd.substring(cd.lastIndexOf(R)+1,cd.length);
if(cl.charAt(cl.length-1)==S){var cg=cl.substring(cl.lastIndexOf(V)+1,cl.length-1);
var ci=cl.substring(0,cl.lastIndexOf(V));
var ck=cj[X+qx.lang.String.firstUp(ci)]();

if(cg==U){cg=ck.length-1;
}
if(ck!=null){var ch=ck.getItem(cg);
}}else{var ch=cj[X+qx.lang.String.firstUp(cl)]();
}}this.__fg(ce,cf,ch);
},__fe:function(db,dc){var dd=this.__fn(db,dc);
if(dd==null){if(qx.Class.supportsEvent(db.constructor,dc)){dd=dc;
}else if(qx.Class.supportsEvent(db.constructor,T+qx.lang.String.firstUp(dc))){dd=T+qx.lang.String.firstUp(dc);
}else{throw new qx.core.AssertionError(be,dc);
}}return dd;
},__ff:function(cL,cM){var cN=this.__fh(cL,cM);

if(cN!=null){var cO=cM.substring(cM.lastIndexOf(R)+1,cM.length);
if(cO.charAt(cO.length-1)==S){this.__fg(cL,cM,null);
return;
}if(cN[bl+qx.lang.String.firstUp(cO)]!=undefined){cN[bl+qx.lang.String.firstUp(cO)]();
}else{cN[O+qx.lang.String.firstUp(cO)](null);
}}},__fg:function(cv,cw,cx){var cB=this.__fh(cv,cw);

if(cB!=null){var cC=cw.substring(cw.lastIndexOf(R)+1,cw.length);
if(cC.charAt(cC.length-1)==S){var cy=cC.substring(cC.lastIndexOf(V)+1,cC.length-1);
var cA=cC.substring(0,cC.lastIndexOf(V));
var cz=cB[X+qx.lang.String.firstUp(cA)]();

if(cy==U){cy=cz.length-1;
}
if(cz!=null){cz.setItem(cy,cx);
}}else{cB[O+qx.lang.String.firstUp(cC)](cx);
}}},__fh:function(a,b){var f=b.split(R);
var g=a;
for(var i=0;i<f.length-1;i++){try{var d=f[i];
if(d.indexOf(S)==d.length-1){var c=d.substring(d.indexOf(V)+1,d.length-1);
d=d.substring(0,d.indexOf(V));
}g=g[X+qx.lang.String.firstUp(d)]();

if(c!=null){if(c==U){c=g.length-1;
}g=g.getItem(c);
c=null;
}}catch(bo){return null;
}}return g;
},__fi:function(bM,bN,bO,bP,bQ){bM=this.__fm(bM,bN,bO,bP);
if(bM==null){this.__ff(bN,bO);
}if(bM!=undefined){try{this.__fg(bN,bO,bM);
if(bP&&bP.onUpdate){bP.onUpdate(bQ,bN,bM);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bP&&bP.onSetFail){bP.onSetFail(e);
}else{this.warn("Failed so set value "+bM+" on "+bN+". Error message: "+e);
}}}},__fj:function(bJ){var bK=[];
for(var i=0;i<bJ.length;i++){var name=bJ[i];
if(qx.lang.String.endsWith(name,S)){var bL=name.substring(name.indexOf(V)+1,name.indexOf(S));
if(name.indexOf(S)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bL!==U){if(bL==W||isNaN(parseInt(bL))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(V)!=0){bJ[i]=name.substring(0,name.indexOf(V));
bK[i]=W;
bK[i+1]=bL;
bJ.splice(i+1,0,bm);
i++;
}else{bK[i]=bL;
bJ.splice(i,1,bm);
}}else{bK[i]=W;
}}return bK;
},__fk:function(cm,cn,co,cp,cq,cr){var cs;
{};
var cu=function(cH,e){if(cH!==W){if(cH===U){cH=cm.length-1;
}var cK=cm.getItem(cH);
if(cK==undefined){qx.data.SingleValueBinding.__ff(co,cp);
}var cI=e.getData().start;
var cJ=e.getData().end;

if(cH<cI||cH>cJ){return;
}}else{var cK=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cm+" by "+cn+" to "+co+" ("+cp+")");
qx.log.Logger.debug("Data before conversion: "+cK);
}cK=qx.data.SingleValueBinding.__fm(cK,co,cp,cq);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+cK);
}try{if(cK!=undefined){qx.data.SingleValueBinding.__fg(co,cp,cK);
}else{qx.data.SingleValueBinding.__ff(co,cp);
}if(cq&&cq.onUpdate){cq.onUpdate(cm,co,cK);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cq&&cq.onSetFail){cq.onSetFail(e);
}else{this.warn("Failed so set value "+cK+" on "+co+". Error message: "+e);
}}};
if(!cr){cr=W;
}cu=qx.lang.Function.bind(cu,cm,cr);
var ct=cm.addListener(cn,cu);
return ct;
},__fl:function(h,k,l,m,n){if(this.__fa[k.toHashCode()]===undefined){this.__fa[k.toHashCode()]=[];
}this.__fa[k.toHashCode()].push([h,k,l,m,n]);
},__fm:function(cP,cQ,cR,cS){if(cS&&cS.converter){var cU;

if(cQ.getModel){cU=cQ.getModel();
}return cS.converter(cP,cU);
}else{var cW=this.__fh(cQ,cR);
var cX=cR.substring(cR.lastIndexOf(R)+1,cR.length);
if(cW==null){return cP;
}var cV=qx.Class.getPropertyDefinition(cW.constructor,cX);
var cT=cV==null?W:cV.check;
return this.__fo(cP,cT);
}},__fn:function(bp,bq){var br=qx.Class.getPropertyDefinition(bp.constructor,bq);

if(br==null){return null;
}return br.event;
},__fo:function(bR,bS){var bT=qx.lang.Type.getClass(bR);
if((bT==Q||bT==P)&&(bS==bg||bS==ba)){bR=parseInt(bR);
}if((bT==bj||bT==Q||bT==Y)&&bS==P){bR=bR+W;
}if((bT==Q||bT==P)&&(bS==Q||bS==bc)){bR=parseFloat(bR);
}return bR;
},removeBindingFromObject:function(bG,bH){if(bH.type==bn){for(var i=0;i<bH.sources.length;i++){if(bH.sources[i]){bH.sources[i].removeListenerById(bH.listenerIds[i]);
}}for(var i=0;i<bH.targets.length;i++){if(bH.targets[i]){bH.targets[i].removeListenerById(bH.targetListenerIds[i]);
}}}else{bG.removeListenerById(bH);
}var bI=this.__fa[bG.toHashCode()];
if(bI!=undefined){for(var i=0;i<bI.length;i++){if(bI[i][0]==bH){qx.lang.Array.remove(bI,bI[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cY){{};
var da=this.__fa[cY.toHashCode()];

if(da!=undefined){for(var i=da.length-1;i>=0;i--){this.removeBindingFromObject(cY,da[i][0]);
}}},getAllBindingsForObject:function(bU){if(this.__fa[bU.toHashCode()]===undefined){this.__fa[bU.toHashCode()]=[];
}return this.__fa[bU.toHashCode()];
},removeAllBindings:function(){for(var cb in this.__fa){var ca=qx.core.ObjectRegistry.fromHashCode(cb);
if(ca==null){delete this.__fa[cb];
continue;
}this.removeAllBindingsForObject(ca);
}this.__fa={};
},getAllBindings:function(){return this.__fa;
},showBindingInLog:function(cD,cE){var cG;
for(var i=0;i<this.__fa[cD.toHashCode()].length;i++){if(this.__fa[cD.toHashCode()][i][0]==cE){cG=this.__fa[cD.toHashCode()][i];
break;
}}
if(cG===undefined){var cF=bb;
}else{var cF=bd+cG[1]+bk+cG[2]+bh+cG[3]+bk+cG[4]+bi;
}qx.log.Logger.debug(cF);
},showAllBindingsInLog:function(){for(var N in this.__fa){var M=qx.core.ObjectRegistry.fromHashCode(N);

for(var i=0;i<this.__fa[N].length;i++){this.showBindingInLog(M,this.__fa[N][i][0]);
}}}}});
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
(function(){var h="interval",g="Number",f="_applyTimeoutInterval",e="qx.event.type.Event",d="qx.event.Idle",c="singleton";
qx.Class.define(d,{extend:qx.core.Object,type:c,construct:function(){arguments.callee.base.call(this);
var a=new qx.event.Timer(this.getTimeoutInterval());
a.addListener(h,this._onInterval,this);
a.start();
this.__iN=a;
},events:{"interval":e},properties:{timeoutInterval:{check:g,init:100,apply:f}},members:{__iN:null,_applyTimeoutInterval:function(b){this.__iN.setInterval(b);
},_onInterval:function(){this.fireEvent(h);
}},destruct:function(){if(this.__iN){this.__iN.stop();
}this.__iN=null;
}});
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
},_applySelectable:function(c){if(qx.core.Variant.isSet(l,H)){if(c&&!this.isRich()){{};
return;
}}arguments.callee.base.call(this,c);
if(qx.core.Variant.isSet(l,y)){this.getContainerElement().setStyle(j,c?n:g);
this.getContentElement().setStyle(j,c?n:g);
}},_getContentHeightForWidth:function(V){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__fI(V).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(W,X){this.getContentElement().setStyle(u,W);
},_applyTextColor:function(O,P){if(O){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(O));
}else{this.getContentElement().removeStyle(k);
}},__fH:{width:0,height:0},_applyFont:function(Q,R){var S;

if(Q){this.__fD=qx.theme.manager.Font.getInstance().resolve(Q);
S=this.__fD.getStyles();
}else{this.__fD=null;
S=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(S);
this.__fE=true;
qx.ui.core.queue.Layout.add(this);
},__fI:function(Y){var bd=qx.bom.Label;
var bb=this.getFont();
var ba=bb?this.__fD.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||B;
var bc=this.getRich();
return bc?bd.getHtmlSize(content,ba,Y):bd.getTextSize(content,ba);
},_applyBuddy:function(L,M){if(M!=null){M.removeBinding(this.__fF);
this.__fF=null;
this.removeListenerById(this.__fG);
this.__fG=null;
}
if(L!=null){this.__fF=L.bind(h,this,h);
this.__fG=this.addListener(q,L.focus,L);
}},_applyRich:function(N){this.getContentElement().setRich(N);
this.__fE=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(a,b){if(a&&!this.isRich()){{};
}},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(T,U){this.getContentElement().setValue(T);
this.__fE=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(D,T,U);
}},destruct:function(){if(qx.core.Variant.isSet(o,f)){qx.locale.Manager.getInstance().removeListener(i,this._onChangeLocale,this);
}if(this.__fF!=null){var d=this.getBuddy();

if(d!=null&&!d.isDisposed()){d.removeBinding(this.__fF);
}}this.__fD=this.__fF=null;
}});
})();
(function(){var i="qx.client",h="qx.dom.Hierarchy",g="previousSibling",f="*",e="nextSibling",d="parentNode";
qx.Class.define(h,{statics:{getNodeIndex:function(o){var p=0;

while(o&&(o=o.previousSibling)){p++;
}return p;
},getElementIndex:function(l){var m=0;
var n=qx.dom.Node.ELEMENT;

while(l&&(l=l.previousSibling)){if(l.nodeType==n){m++;
}}return m;
},getNextElementSibling:function(k){while(k&&(k=k.nextSibling)&&!qx.dom.Node.isElement(k)){continue;
}return k||null;
},getPreviousElementSibling:function(J){while(J&&(J=J.previousSibling)&&!qx.dom.Node.isElement(J)){continue;
}return J||null;
},contains:qx.core.Variant.select(i,{"webkit|mshtml|opera":function(y,z){if(qx.dom.Node.isDocument(y)){var A=qx.dom.Node.getDocument(z);
return y&&A==y;
}else if(qx.dom.Node.isDocument(z)){return false;
}else{return y.contains(z);
}},"gecko":function(O,P){return !!(O.compareDocumentPosition(P)&16);
},"default":function(w,x){while(x){if(w==x){return true;
}x=x.parentNode;
}return false;
}}),isRendered:function(q){if(!q.offsetParent){return false;
}var r=q.ownerDocument||q.document;
if(r.body.contains){return r.body.contains(q);
}if(r.compareDocumentPosition){return !!(r.compareDocumentPosition(q)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(a,b){return this.contains(b,a);
},getCommonParent:qx.core.Variant.select(i,{"mshtml|opera":function(L,M){if(L===M){return L;
}
while(L&&qx.dom.Node.isElement(L)){if(L.contains(M)){return L;
}L=L.parentNode;
}return null;
},"default":function(Q,R){if(Q===R){return Q;
}var S={};
var V=qx.core.ObjectRegistry;
var U,T;

while(Q||R){if(Q){U=V.toHashCode(Q);

if(S[U]){return S[U];
}S[U]=Q;
Q=Q.parentNode;
}
if(R){T=V.toHashCode(R);

if(S[T]){return S[T];
}S[T]=R;
R=R.parentNode;
}}return null;
}}),getAncestors:function(c){return this._recursivelyCollect(c,d);
},getChildElements:function(s){s=s.firstChild;

if(!s){return [];
}var t=this.getNextSiblings(s);

if(s.nodeType===1){t.unshift(s);
}return t;
},getDescendants:function(j){return qx.lang.Array.fromCollection(j.getElementsByTagName(f));
},getFirstDescendant:function(K){K=K.firstChild;

while(K&&K.nodeType!=1){K=K.nextSibling;
}return K;
},getLastDescendant:function(u){u=u.lastChild;

while(u&&u.nodeType!=1){u=u.previousSibling;
}return u;
},getPreviousSiblings:function(H){return this._recursivelyCollect(H,g);
},getNextSiblings:function(N){return this._recursivelyCollect(N,e);
},_recursivelyCollect:function(E,F){var G=[];

while(E=E[F]){if(E.nodeType==1){G.push(E);
}}return G;
},getSiblings:function(I){return this.getPreviousSiblings(I).reverse().concat(this.getNextSiblings(I));
},isEmpty:function(v){v=v.firstChild;

while(v){if(v.nodeType===qx.dom.Node.ELEMENT||v.nodeType===qx.dom.Node.TEXT){return false;
}v=v.nextSibling;
}return true;
},cleanWhitespace:function(B){var C=B.firstChild;

while(C){var D=C.nextSibling;

if(C.nodeType==3&&!/\S/.test(C.nodeValue)){B.removeChild(C);
}C=D;
}}}});
})();
(function(){var d="qx.ui.core.queue.Layout",c="layout";
qx.Class.define(d,{statics:{__gj:{},remove:function(a){delete this.__gj[a.$$hash];
},add:function(b){this.__gj[b.$$hash]=b;
qx.ui.core.queue.Manager.scheduleFlush(c);
},flush:function(){var r=this.__gm();
for(var i=r.length-1;i>=0;i--){var s=r[i];
if(s.hasValidLayout()){continue;
}if(s.isRootWidget()&&!s.hasUserBounds()){var u=s.getSizeHint();
s.renderLayout(0,0,u.width,u.height);
}else{var t=s.getBounds();
s.renderLayout(t.left,t.top,t.width,t.height);
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
},__gk:function(){var A=qx.ui.core.queue.Visibility;
this.__gl={};
var z=[];
var y=this.__gj;
var v,x;

for(var w in y){v=y[w];

if(A.isVisible(v)){x=this.getNestingLevel(v);
if(!z[x]){z[x]={};
}z[x][w]=v;
delete y[w];
}}return z;
},__gm:function(){var h=[];
var k=this.__gk();

for(var g=k.length-1;g>=0;g--){if(!k[g]){continue;
}
for(var f in k[g]){var e=k[g][f];
if(g==0||e.isRootWidget()||e.hasUserBounds()){h.push(e);
e.invalidateLayoutCache();
continue;
}var m=e.getSizeHint(false);

if(m){e.invalidateLayoutCache();
var j=e.getSizeHint();
var l=(!e.getBounds()||m.minWidth!==j.minWidth||m.width!==j.width||m.maxWidth!==j.maxWidth||m.minHeight!==j.minHeight||m.height!==j.height||m.maxHeight!==j.maxHeight);
}else{l=true;
}
if(l){var parent=e.getLayoutParent();

if(!k[g-1]){k[g-1]={};
}k[g-1][parent.$$hash]=parent;
}else{h.push(e);
}}}return h;
}}});
})();
(function(){var p="",o="qx.client",n="user-select",m="userSelect",l="appearance",k="style",j="MozUserModify",i="px",h="-webkit-appearance",g="styleFloat",L="-webkit-user-select",K="-moz-appearance",J="pixelHeight",I="MozAppearance",H=":",G="pixelTop",F="pixelLeft",E="text-overflow",D="-moz-user-select",C="MozUserSelect",w="qx.bom.element.Style",x="-moz-user-modify",u="-webkit-user-modify",v="WebkitUserSelect",s="-o-text-overflow",t="pixelRight",q="cssFloat",r="pixelWidth",y="pixelBottom",z=";",B="WebkitUserModify",A="WebkitAppearance";
qx.Class.define(w,{statics:{__bK:{styleNames:{"float":qx.core.Variant.select(o,{"mshtml":g,"default":q}),"appearance":qx.core.Variant.select(o,{"gecko":I,"webkit":A,"default":l}),"userSelect":qx.core.Variant.select(o,{"gecko":C,"webkit":v,"default":m}),"userModify":qx.core.Variant.select(o,{"gecko":j,"webkit":B,"default":m})},cssNames:{"appearance":qx.core.Variant.select(o,{"gecko":K,"webkit":h,"default":l}),"userSelect":qx.core.Variant.select(o,{"gecko":D,"webkit":L,"default":n}),"userModify":qx.core.Variant.select(o,{"gecko":x,"webkit":u,"default":n}),"textOverflow":qx.core.Variant.select(o,{"opera":s,"default":E})},mshtmlPixel:{width:r,height:J,left:F,right:t,top:G,bottom:y},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__bL:{},compile:function(O){var S=[];
var W=this.__bK;
var V=W.special;
var T=W.cssNames;
var R=this.__bL;
var U=qx.lang.String;
var name,Q,P;

for(name in O){P=O[name];

if(P==null){continue;
}name=T[name]||name;
if(V[name]){S.push(V[name].compile(P));
}else{Q=R[name];

if(!Q){Q=R[name]=U.hyphenate(name);
}S.push(Q,H,P,z);
}}return S.join(p);
},setCss:qx.core.Variant.select(o,{"mshtml":function(a,b){a.style.cssText=b;
},"default":function(M,N){M.setAttribute(k,N);
}}),getCss:qx.core.Variant.select(o,{"mshtml":function(bz){return bz.style.cssText.toLowerCase();
},"default":function(bs){return bs.getAttribute(k);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(c,name,d,e){{};
var f=this.__bK;
name=f.styleNames[name]||name;
if(e!==false&&f.special[name]){return f.special[name].set(c,d);
}else{c.style[name]=d!==null?d:p;
}},setStyles:function(X,Y,ba){{};
var bg=this.__bK;
var bd=bg.styleNames;
var bf=bg.special;
var bb=X.style;

for(var be in Y){var bc=Y[be];
var name=bd[be]||be;

if(bc===undefined){if(ba!==false&&bf[name]){bf[name].reset(X);
}else{bb[name]=p;
}}else{if(ba!==false&&bf[name]){bf[name].set(X,bc);
}else{bb[name]=bc!==null?bc:p;
}}}},reset:function(bh,name,bi){var bj=this.__bK;
name=bj.styleNames[name]||name;
if(bi!==false&&bj.special[name]){return bj.special[name].reset(bh);
}else{bh.style[name]=p;
}},get:qx.core.Variant.select(o,{"mshtml":function(bk,name,bl,bm){var br=this.__bK;
name=br.styleNames[name]||name;
if(bm!==false&&br.special[name]){return br.special[name].get(bk,bl);
}if(!bk.currentStyle){return bk.style[name]||p;
}switch(bl){case this.LOCAL_MODE:return bk.style[name]||p;
case this.CASCADED_MODE:return bk.currentStyle[name]||p;
default:var bq=bk.currentStyle[name]||p;
if(/^-?[\.\d]+(px)?$/i.test(bq)){return bq;
}var bp=br.mshtmlPixel[name];

if(bp){var bn=bk.style[name];
bk.style[name]=bq||0;
var bo=bk.style[bp]+i;
bk.style[name]=bn;
return bo;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bq)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bq;
}},"default":function(bt,name,bu,bv){var by=this.__bK;
name=by.styleNames[name]||name;
if(bv!==false&&by.special[name]){return by.special[name].get(bt,bu);
}switch(bu){case this.LOCAL_MODE:return bt.style[name]||p;
case this.CASCADED_MODE:if(bt.currentStyle){return bt.currentStyle[name]||p;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bw=qx.dom.Node.getDocument(bt);
var bx=bw.defaultView.getComputedStyle(bt,null);
return bx?bx[name]:p;
}}})}});
})();
(function(){var y="borderTopWidth",x="borderLeftWidth",w="marginTop",v="marginLeft",u="scroll",t="qx.client",s="border-box",r="borderBottomWidth",q="borderRightWidth",p="auto",N="padding",M="qx.bom.element.Location",L="paddingLeft",K="static",J="marginBottom",I="visible",H="BODY",G="paddingBottom",F="paddingTop",E="marginRight",C="position",D="margin",A="overflow",B="paddingRight",z="border";
qx.Class.define(M,{statics:{__gP:function(by,bz){return qx.bom.element.Style.get(by,bz,qx.bom.element.Style.COMPUTED_MODE,false);
},__gQ:function(bu,bv){return parseInt(qx.bom.element.Style.get(bu,bv,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gR:function(Y){var bc=0,top=0;
if(Y.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bb=qx.dom.Node.getWindow(Y);
bc-=qx.bom.Viewport.getScrollLeft(bb);
top-=qx.bom.Viewport.getScrollTop(bb);
}else{var ba=qx.dom.Node.getDocument(Y).body;
Y=Y.parentNode;
while(Y&&Y!=ba){bc+=Y.scrollLeft;
top+=Y.scrollTop;
Y=Y.parentNode;
}}return {left:bc,top:top};
},__gS:qx.core.Variant.select(t,{"mshtml":function(U){var W=qx.dom.Node.getDocument(U);
var V=W.body;
var X=0;
var top=0;
X-=V.clientLeft+W.documentElement.clientLeft;
top-=V.clientTop+W.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){X+=this.__gQ(V,x);
top+=this.__gQ(V,y);
}return {left:X,top:top};
},"webkit":function(Q){var S=qx.dom.Node.getDocument(Q);
var R=S.body;
var T=R.offsetLeft;
var top=R.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){T+=this.__gQ(R,x);
top+=this.__gQ(R,y);
}return {left:T,top:top};
},"gecko":function(bN){var bO=qx.dom.Node.getDocument(bN).body;
var bP=bO.offsetLeft;
var top=bO.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bP+=this.__gQ(bO,v);
top+=this.__gQ(bO,w);
}if(qx.bom.element.BoxSizing.get(bO)!==s){bP+=this.__gQ(bO,x);
top+=this.__gQ(bO,y);
}return {left:bP,top:top};
},"default":function(m){var n=qx.dom.Node.getDocument(m).body;
var o=n.offsetLeft;
var top=n.offsetTop;
return {left:o,top:top};
}}),__gT:qx.core.Variant.select(t,{"mshtml|webkit":function(bd){var bf=qx.dom.Node.getDocument(bd);
if(bd.getBoundingClientRect){var bg=bd.getBoundingClientRect();
var bh=bg.left;
var top=bg.top;
}else{var bh=bd.offsetLeft;
var top=bd.offsetTop;
bd=bd.offsetParent;
var be=bf.body;
while(bd&&bd!=be){bh+=bd.offsetLeft;
top+=bd.offsetTop;
bh+=this.__gQ(bd,x);
top+=this.__gQ(bd,y);
bd=bd.offsetParent;
}}return {left:bh,top:top};
},"gecko":function(b){if(b.getBoundingClientRect){var e=b.getBoundingClientRect();
var f=Math.round(e.left);
var top=Math.round(e.top);
}else{var f=0;
var top=0;
var c=qx.dom.Node.getDocument(b).body;
var d=qx.bom.element.BoxSizing;

if(d.get(b)!==s){f-=this.__gQ(b,x);
top-=this.__gQ(b,y);
}
while(b&&b!==c){f+=b.offsetLeft;
top+=b.offsetTop;
if(d.get(b)!==s){f+=this.__gQ(b,x);
top+=this.__gQ(b,y);
}if(b.parentNode&&this.__gP(b.parentNode,A)!=I){f+=this.__gQ(b.parentNode,x);
top+=this.__gQ(b.parentNode,y);
}b=b.offsetParent;
}}return {left:f,top:top};
},"default":function(br){var bt=0;
var top=0;
var bs=qx.dom.Node.getDocument(br).body;
while(br&&br!==bs){bt+=br.offsetLeft;
top+=br.offsetTop;
br=br.offsetParent;
}return {left:bt,top:top};
}}),get:function(bC,bD){if(bC.tagName==H){var location=this.__gU(bC);
var bK=location.left;
var top=location.top;
}else{var bE=this.__gS(bC);
var bJ=this.__gT(bC);
var scroll=this.__gR(bC);
var bK=bJ.left+bE.left-scroll.left;
var top=bJ.top+bE.top-scroll.top;
}var bF=bK+bC.offsetWidth;
var bG=top+bC.offsetHeight;

if(bD){if(bD==N||bD==u){var bH=qx.bom.element.Overflow.getX(bC);

if(bH==u||bH==p){bF+=bC.scrollWidth-bC.offsetWidth+this.__gQ(bC,x)+this.__gQ(bC,q);
}var bI=qx.bom.element.Overflow.getY(bC);

if(bI==u||bI==p){bG+=bC.scrollHeight-bC.offsetHeight+this.__gQ(bC,y)+this.__gQ(bC,r);
}}
switch(bD){case N:bK+=this.__gQ(bC,L);
top+=this.__gQ(bC,F);
bF-=this.__gQ(bC,B);
bG-=this.__gQ(bC,G);
case u:bK-=bC.scrollLeft;
top-=bC.scrollTop;
bF-=bC.scrollLeft;
bG-=bC.scrollTop;
case z:bK+=this.__gQ(bC,x);
top+=this.__gQ(bC,y);
bF-=this.__gQ(bC,q);
bG-=this.__gQ(bC,r);
break;
case D:bK-=this.__gQ(bC,v);
top-=this.__gQ(bC,w);
bF+=this.__gQ(bC,E);
bG+=this.__gQ(bC,J);
break;
}}return {left:bK,top:top,right:bF,bottom:bG};
},__gU:qx.core.Variant.select(t,{"default":function(O){var top=O.offsetTop+this.__gQ(O,w);
var P=O.offsetLeft+this.__gQ(O,v);
return {left:P,top:top};
},"mshtml":function(bw){var top=bw.offsetTop;
var bx=bw.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__gQ(bw,w);
bx+=this.__gQ(bw,v);
}return {left:bx,top:top};
},"gecko":function(bL){var top=bL.offsetTop+this.__gQ(bL,w)+this.__gQ(bL,x);
var bM=bL.offsetLeft+this.__gQ(bL,v)+this.__gQ(bL,y);
return {left:bM,top:top};
}}),getLeft:function(k,l){return this.get(k,l).left;
},getTop:function(i,j){return this.get(i,j).top;
},getRight:function(g,h){return this.get(g,h).right;
},getBottom:function(bA,bB){return this.get(bA,bB).bottom;
},getRelative:function(bi,bj,bk,bl){var bn=this.get(bi,bk);
var bm=this.get(bj,bl);
return {left:bn.left-bm.left,top:bn.top-bm.top,right:bn.right-bm.right,bottom:bn.bottom-bm.bottom};
},getPosition:function(a){return this.getRelative(a,this.getOffsetParent(a));
},getOffsetParent:function(bo){var bq=bo.offsetParent||document.body;
var bp=qx.bom.element.Style;

while(bq&&(!/^body|html$/i.test(bq.tagName)&&bp.get(bq,C)===K)){bq=bq.offsetParent;
}return bq;
}}});
})();
(function(){var c="qx.ui.decoration.IDecorator";
qx.Interface.define(c,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(a,b){},getInsets:function(){}}});
})();
(function(){var x="mshtml",w="",v="qx.client",u=">",t="<",s=" ",r="='",q="qx.bom.Element",p="div",o="' ",n="></";
qx.Class.define(q,{statics:{__iL:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,C,D){if(!D){D=window;
}
if(!name){throw new Error("The tag name is missing!");
}var F=this.__iL;
var E=w;

for(var H in C){if(F[H]){E+=H+r+C[H]+o;
}}var I;
if(E!=w){if(qx.bom.client.Engine.MSHTML){I=D.document.createElement(t+name+s+E+u);
}else{var G=D.document.createElement(p);
G.innerHTML=t+name+s+E+n+name+u;
I=G.firstChild;
}}else{I=D.document.createElement(name);
}
for(var H in C){if(!F[H]){qx.bom.element.Attribute.set(I,H,C[H]);
}}return I;
},empty:function(c){return c.innerHTML=w;
},addListener:function(e,f,g,self,h){return qx.event.Registration.addListener(e,f,g,self,h);
},removeListener:function(X,Y,ba,self,bb){return qx.event.Registration.removeListener(X,Y,ba,self,bb);
},removeListenerById:function(V,W){return qx.event.Registration.removeListenerById(V,W);
},hasListener:function(y,z,A){return qx.event.Registration.hasListener(y,z,A);
},focus:function(B){qx.event.Registration.getManager(B).getHandler(qx.event.handler.Focus).focus(B);
},blur:function(b){qx.event.Registration.getManager(b).getHandler(qx.event.handler.Focus).blur(b);
},activate:function(d){qx.event.Registration.getManager(d).getHandler(qx.event.handler.Focus).activate(d);
},deactivate:function(bc){qx.event.Registration.getManager(bc).getHandler(qx.event.handler.Focus).deactivate(bc);
},capture:function(k,m){qx.event.Registration.getManager(k).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(k,m);
},releaseCapture:function(a){qx.event.Registration.getManager(a).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(a);
},clone:function(J,K){var N;

if(K||(qx.core.Variant.isSet(v,x)&&!qx.xml.Document.isXmlDocument(J))){var R=qx.event.Registration.getManager(J);
var L=qx.dom.Hierarchy.getDescendants(J);
L.push(J);
}if(qx.core.Variant.isSet(v,x)){for(var i=0,l=L.length;i<l;i++){R.toggleAttachedEvents(L[i],false);
}}var N=J.cloneNode(true);
if(qx.core.Variant.isSet(v,x)){for(var i=0,l=L.length;i<l;i++){R.toggleAttachedEvents(L[i],true);
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
(function(){var t="px",s="qx.client",r="div",q="img",p="",o="scale-x",n="mshtml",m="no-repeat",l="scale",k="scale-y",N="qx/icon",M="repeat",L=".png",K="crop",J="webkit",I="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",H='<div style="',G="repeat-y",F='<img src="',E="qx.bom.element.Decoration",A="', sizingMethod='",B="png",y="')",z='"/>',w='" style="',x="none",u=" ",v="repeat-x",C='"></div>',D="absolute";
qx.Class.define(E,{statics:{DEBUG:false,__iT:{},__iU:qx.core.Variant.isSet(s,n),__iV:qx.core.Variant.select(s,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__iW:{"scale-x":q,"scale-y":q,"scale":q,"repeat":r,"no-repeat":r,"repeat-x":r,"repeat-y":r},update:function(bD,bE,bF,bG){var bI=this.getTagName(bF,bE);

if(bI!=bD.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bJ=this.getAttributes(bE,bF,bG);

if(bI===q){bD.src=bJ.src;
}if(bD.style.backgroundPosition!=p&&bJ.style.backgroundPosition===undefined){bJ.style.backgroundPosition=null;
}if(bD.style.clip!=p&&bJ.style.clip===undefined){bJ.style.clip=null;
}var bH=qx.bom.element.Style;
bH.setStyles(bD,bJ.style);
},create:function(bl,bm,bn){var bo=this.getTagName(bm,bl);
var bq=this.getAttributes(bl,bm,bn);
var bp=qx.bom.element.Style.compile(bq.style);

if(bo===q){return F+bq.src+w+bp+z;
}else{return H+bp+C;
}},getTagName:function(bj,bk){if(qx.core.Variant.isSet(s,n)){if(bk&&this.__iU&&this.__iV[bj]&&qx.lang.String.endsWith(bk,L)){return r;
}}return this.__iW[bj];
},getAttributes:function(T,U,V){if(!V){V={};
}
if(!V.position){V.position=D;
}
if(qx.core.Variant.isSet(s,n)){V.fontSize=0;
V.lineHeight=0;
}else if(qx.core.Variant.isSet(s,J)){V.WebkitUserDrag=x;
}var X=qx.util.ResourceManager.getInstance().getImageFormat(T)||qx.io.ImageLoader.getFormat(T);
{};
var W;
if(this.__iU&&this.__iV[U]&&X===B){W=this.__ja(V,U,T);
}else{if(U===l){W=this.__jb(V,U,T);
}else if(U===o||U===k){W=this.__jc(V,U,T);
}else{W=this.__jf(V,U,T);
}}return W;
},__iX:function(Y,ba,bb){if(Y.width==null&&ba!=null){Y.width=ba+t;
}
if(Y.height==null&&bb!=null){Y.height=bb+t;
}return Y;
},__iY:function(a){var b=qx.util.ResourceManager.getInstance().getImageWidth(a)||qx.io.ImageLoader.getWidth(a);
var c=qx.util.ResourceManager.getInstance().getImageHeight(a)||qx.io.ImageLoader.getHeight(a);
return {width:b,height:c};
},__ja:function(bc,bd,be){var bi=this.__iY(be);
bc=this.__iX(bc,bi.width,bi.height);
var bh=bd==m?K:l;
var bf=I+qx.util.ResourceManager.getInstance().toUri(be)+A+bh+y;
bc.filter=bf;
bc.backgroundImage=bc.backgroundRepeat=p;
return {style:bc};
},__jb:function(bK,bL,bM){var bN=qx.util.ResourceManager.getInstance().toUri(bM);
var bO=this.__iY(bM);
bK=this.__iX(bK,bO.width,bO.height);
return {src:bN,style:bK};
},__jc:function(bP,bQ,bR){var bV=qx.util.ResourceManager.getInstance();
var bU=bV.isClippedImage(bR);
var bW=this.__iY(bR);

if(bU){var bT=bV.getData(bR);
var bS=bV.toUri(bT[4]);

if(bQ===o){bP=this.__jd(bP,bT,bW.height);
}else{bP=this.__je(bP,bT,bW.width);
}return {src:bS,style:bP};
}else{{};

if(bQ==o){bP.height=bW.height==null?null:bW.height+t;
}else if(bQ==k){bP.width=bW.width==null?null:bW.width+t;
}var bS=bV.toUri(bR);
return {src:bS,style:bP};
}},__jd:function(br,bs,bt){var bu=qx.util.ResourceManager.getInstance().getImageHeight(bs[4]);
br.clip={top:-bs[6],height:bt};
br.height=bu+t;
if(br.top!=null){br.top=(parseInt(br.top,10)+bs[6])+t;
}else if(br.bottom!=null){br.bottom=(parseInt(br.bottom,10)+bt-bu-bs[6])+t;
}return br;
},__je:function(P,Q,R){var S=qx.util.ResourceManager.getInstance().getImageWidth(Q[4]);
P.clip={left:-Q[5],width:R};
P.width=S+t;
if(P.left!=null){P.left=(parseInt(P.left,10)+Q[5])+t;
}else if(P.right!=null){P.right=(parseInt(P.right,10)+R-S-Q[5])+t;
}return P;
},__jf:function(bv,bw,bx){var bC=qx.util.ResourceManager.getInstance().isClippedImage(bx);
var bB=this.__iY(bx);
if(bC&&bw!==M){var bA=qx.util.ResourceManager.getInstance().getData(bx);
var bz=qx.bom.element.Background.getStyles(bA[4],bw,bA[5],bA[6]);

for(var by in bz){bv[by]=bz[by];
}
if(bB.width!=null&&bv.width==null&&(bw==G||bw===m)){bv.width=bB.width+t;
}
if(bB.height!=null&&bv.height==null&&(bw==v||bw===m)){bv.height=bB.height+t;
}return {style:bv};
}else{{};
bv=this.__iX(bv,bB.width,bB.height);
bv=this.__jg(bv,bx,bw);
return {style:bv};
}},__jg:function(d,e,f){var top=null;
var j=null;

if(d.backgroundPosition){var g=d.backgroundPosition.split(u);
j=parseInt(g[0]);

if(isNaN(j)){j=g[0];
}top=parseInt(g[1]);

if(isNaN(top)){top=g[1];
}}var i=qx.bom.element.Background.getStyles(e,f,j,top);

for(var h in i){d[h]=i[h];
}if(d.filter){d.filter=p;
}return d;
},__jh:function(O){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(O)&&O.indexOf(N)==-1){if(!this.__iT[O]){qx.log.Logger.debug("Potential clipped image candidate: "+O);
this.__iT[O]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(s,{"mshtml":function(){return qx.bom.element.Decoration.__iU;
},"default":function(){return false;
}})}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var be="_applyLayoutChange",bd="left",bc="center",bb="top",ba="Decorator",Y="middle",X="_applyReversed",W="bottom",V="Boolean",U="right",S="Integer",T="qx.ui.layout.HBox";
qx.Class.define(T,{extend:qx.ui.layout.Abstract,construct:function(P,Q,R){arguments.callee.base.call(this);

if(P){this.setSpacing(P);
}
if(Q){this.setAlignX(Q);
}
if(R){this.setSeparator(R);
}},properties:{alignX:{check:[bd,bc,U],init:bd,apply:be},alignY:{check:[bb,Y,W],init:bb,apply:be},spacing:{check:S,init:0,apply:be},separator:{check:ba,nullable:true,apply:be},reversed:{check:V,init:false,apply:X}},members:{__eO:null,__eP:null,__eQ:null,__eR:null,_applyReversed:function(){this._invalidChildrenCache=true;
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
if(z<r&&this.getAlignX()!=bd){O=r-z;

if(this.getAlignX()===bc){O=Math.round(O/2);
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
}var g=qx.ui.layout.Util;
var q=this.__eR;
var a=0,h=0,e=0;
var d=0,f=0;
var n,b,p;
for(var i=0,l=q.length;i<l;i+=1){n=q[i];
b=n.getSizeHint();
h+=b.width;
var m=this.__eP[i];
var c=this.__eO[i];

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
}},destruct:function(){this.__eO=this.__eP=this.__eR=null;
}});
})();
(function(){var u="zIndex",t="px",s="keydown",r="deactivate",q="This method is not needed anymore.",p="resize",o="keyup",n="keypress",m="backgroundColor",l="_applyOpacity",H="Use 'getBlockerElement' instead.",G="opacity",F="__mR",E="interval",D="__mP",C="Tab",B="Color",A="qx.ui.root.Page",z="Use 'getContentBlockerElement' instead.",y="Number",w="qx.ui.core.Blocker",x="__mU",v="_applyColor";
qx.Class.define(w,{extend:qx.core.Object,construct:function(j){arguments.callee.base.call(this);
this._widget=j;
this._isPageRoot=(qx.Class.isDefined(A)&&j instanceof qx.ui.root.Page);

if(this._isPageRoot){j.addListener(p,this.__mV,this);
}this.__mM=[];
this.__mN=[];
this.__mO=[];
},properties:{color:{check:B,init:null,nullable:true,apply:v,themeable:true},opacity:{check:y,init:1,apply:l,themeable:true}},members:{__mP:null,__mQ:0,__mR:null,__mO:null,__mM:null,__mN:null,__mS:null,__mT:0,__mU:null,_isPageRoot:false,_widget:null,__mV:function(e){var R=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:R.width,height:R.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:R.width,height:R.height});
}},_applyColor:function(I,J){var K=qx.theme.manager.Color.getInstance().resolve(I);
this.__mW(m,K);
},_applyOpacity:function(a,b){this.__mW(G,a);
},__mW:function(c,d){var f=[];
this.__mP&&f.push(this.__mP);
this.__mR&&f.push(this.__mR);

for(var i=0;i<f.length;i++){f[i].setStyle(c,d);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
this.__mT+=1;

if(this.__mT==1){this.__mS=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
this.__mT-=1;

if(this.__mT==0){this._widget.setAnonymous(this.__mS);
}},_backupActiveWidget:function(){var V=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__mM.push(V.getActive());
this.__mN.push(V.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var U=this.__mM.length;

if(U>0){var T=this.__mM[U-1];

if(T){qx.bom.Element.activate(T);
}this.__mM.pop();
}var S=this.__mN.length;

if(S>0){var T=this.__mN[S-1];

if(T){qx.bom.Element.focus(this.__mN[S-1]);
}this.__mN.pop();
}},__mX:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,H);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__mP){this.__mP=this.__mX();
this.__mP.setStyle(u,15);
this._widget.getContainerElement().add(this.__mP);
this.__mP.exclude();
}return this.__mP;
},block:function(){this.__mQ++;

if(this.__mQ<2){this._backupActiveWidget();
var k=this.getBlockerElement();
k.include();
k.activate();
k.addListener(r,this.__nd,this);
k.addListener(n,this.__nc,this);
k.addListener(s,this.__nc,this);
k.addListener(o,this.__nc,this);
}},isBlocked:function(){return this.__mQ>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__mQ--;

if(this.__mQ<1){this.__mY();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__mQ=0;
this.__mY();
},__mY:function(){this._restoreActiveWidget();
var h=this.getBlockerElement();
h.removeListener(r,this.__nd,this);
h.removeListener(n,this.__nc,this);
h.removeListener(s,this.__nc,this);
h.removeListener(o,this.__nc,this);
h.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__mR){this.__mR=this.__mX();
this._widget.getContentElement().add(this.__mR);
this.__mR.exclude();
}return this.__mR;
},blockContent:function(L){var M=this.getContentBlockerElement();
M.setStyle(u,L);
this.__mO.push(L);

if(this.__mO.length<2){M.include();

if(this._isPageRoot){if(!this.__mU){this.__mU=new qx.event.Timer(300);
this.__mU.addListener(E,this.__nb,this);
}this.__mU.start();
this.__nb();
}}},isContentBlocked:function(){return this.__mO.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mO.pop();
var N=this.__mO[this.__mO.length-1];
var O=this.getContentBlockerElement();
O.setStyle(u,N);

if(this.__mO.length<1){this.__na();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mO=[];
var g=this.getContentBlockerElement();
g.setStyle(u,null);
this.__na();
},__na:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__mU.stop();
}},__nb:function(){var P=this._widget.getContainerElement().getDomElement();
var Q=qx.dom.Node.getDocument(P);
this.getContentBlockerElement().setStyles({height:Q.documentElement.scrollHeight+t,width:Q.documentElement.scrollWidth+t});
},__nc:function(e){if(e.getKeyIdentifier()==C){e.stop();
}},__nd:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(p,this.__mV,this);
}this._disposeObjects(F,D,x);
this.__mS=this.__mM=this.__mN=this._widget=this.__mO=null;
}});
})();
(function(){var v="cursor",u="100%",t="dblclick",s="mshtml",r="mouseup",q="mousedown",p="disappear",o="appear",n="contextmenu",m="mousewheel",f=")",l="mouseover",i="mouseout",c="qx.html.Blocker",b="click",h="repeat",g="mousemove",j="url(",a="qx.client",k="qx/static/blank.gif",d="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(w,x){arguments.callee.base.call(this);
var w=w?qx.theme.manager.Color.getInstance().resolve(w):null;
this.setStyles({position:d,width:u,height:u,opacity:x||0,backgroundColor:w});
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
},__oe:function(){var y=this.getStyle(v);
this.setStyle(v,null,true);
this.setStyle(v,y,true);
}}});
})();
(function(){var k="mousedown",j="blur",i="__oW",h="singleton",g="qx.ui.popup.Manager";
qx.Class.define(g,{type:h,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__oW={};
qx.event.Registration.addListener(document.documentElement,k,this.__oY,this,true);
qx.bom.Element.addListener(window,j,this.hideAll,this);
},members:{__oW:null,add:function(l){{};
this.__oW[l.$$hash]=l;
this.__oX();
},remove:function(m){{};
var n=this.__oW;

if(n){delete n[m.$$hash];
this.__oX();
}},hideAll:function(){var b=this.__oW;

if(b){for(var a in b){b[a].exclude();
}}},__oX:function(){var f=1e7;
var d=this.__oW;

for(var c in d){d[c].setZIndex(f++);
}},__oY:function(e){var q=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var r=this.__oW;

for(var p in r){var o=r[p];

if(!o.getAutoHide()||q==o||qx.ui.core.Widget.contains(o,q)){continue;
}o.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,k,this.__oY,this,true);
this._disposeMap(i);
}});
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
(function(){var i="qx.ui.core.MSingleSelectionHandling",h="changeSelection",g="changeSelected",f="__kp",d="qx.event.type.Data";
qx.Mixin.define(i,{events:{"changeSelection":d},members:{__kp:null,getSelection:function(){var a=this.__kq().getSelected();

if(a){return [a];
}else{return [];
}},setSelection:function(c){switch(c.length){case 0:this.resetSelection();
break;
case 1:this.__kq().setSelected(c[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+c.length+" items!");
}},resetSelection:function(){this.__kq().resetSelected();
},isSelected:function(j){return this.__kq().isSelected(j);
},isSelectionEmpty:function(){return this.__kq().isSelectionEmpty();
},getSelectables:function(){return this.__kq().getSelectables();
},_onChangeSelected:function(e){var m=e.getData();
var l=e.getOldData();
m==null?m=[]:m=[m];
l==null?l=[]:l=[l];
this.fireDataEvent(h,m,l);
},__kq:function(){if(this.__kp==null){var b=this;
this.__kp=new qx.ui.core.SingleSelectionManager({getItems:function(){return b._getItems();
},isItemSelectable:function(k){if(b._isItemSelectable){return b._isItemSelectable(k);
}else{return k.isEnabled()&&k.isVisible();
}}});
this.__kp.addListener(g,this._onChangeSelected,this);
}this.__kp.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__kp;
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var n="Boolean",m="qx.ui.core.SingleSelectionManager",l="__kk",k="changeSelected",j="__kl",h="__km",g="qx.event.type.Data";
qx.Class.define(m,{extend:qx.core.Object,construct:function(e){arguments.callee.base.call(this);
{};
this.__kk=e;
},events:{"changeSelected":g},properties:{allowEmptySelection:{check:n,init:true,apply:h}},members:{__kl:null,__kk:null,getSelected:function(){return this.__kl;
},setSelected:function(u){if(!this.__ko(u)){throw new Error("Could not select "+u+", because it is not a child element!");
}this.__kn(u);
},resetSelected:function(){this.__kn(null);
},isSelected:function(f){if(!this.__ko(f)){throw new Error("Could not check if "+f+" is selected,"+" because it is not a child element!");
}return this.__kl===f;
},isSelectionEmpty:function(){return this.__kl==null;
},getSelectables:function(){var s=this.__kk.getItems();
var t=[];

for(var i=0;i<s.length;i++){if(this.__kk.isItemSelectable(s[i])){t.push(s[i]);
}}return t;
},__km:function(c,d){if(!c){this.__kn(this.__kl);
}},__kn:function(o){var r=this.__kl;
var q=o;

if(q!=null&&r===q){return;
}
if(!this.isAllowEmptySelection()&&q==null){var p=this.getSelectables()[0];

if(p){q=p;
}}this.__kl=q;
this.fireDataEvent(k,q,r);
},__ko:function(a){var b=this.__kk.getItems();

for(var i=0;i<b.length;i++){if(b[i]===a){return true;
}}return false;
}},destruct:function(){if(this.__kk.toHashCode){this._disposeObjects(l);
}else{this.__kk=null;
}this._disposeObjects(j);
}});
})();
(function(){var s="atom",r="Integer",q="String",p="_applyRich",o="qx.ui.tooltip.ToolTip",n="_applyIcon",m="tooltip",l="qx.ui.core.Widget",k="mouseover",j="Boolean",i="_applyLabel";
qx.Class.define(o,{extend:qx.ui.popup.Popup,construct:function(a,b){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(s);
if(a!=null){this.setLabel(a);
}
if(b!=null){this.setIcon(b);
}this.addListener(k,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:m},showTimeout:{check:r,init:700,themeable:true},hideTimeout:{check:r,init:4000,themeable:true},label:{check:q,nullable:true,apply:i},icon:{check:q,nullable:true,apply:n,themeable:true},rich:{check:j,init:false,apply:p},opener:{check:l,nullable:true}},members:{_createChildControlImpl:function(c){var d;

switch(c){case s:d=new qx.ui.basic.Atom;
this._add(d);
break;
}return d||arguments.callee.base.call(this,c);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(w,x){var y=this.getChildControl(s);
w==null?y.resetIcon:y.setIcon(w);
},_applyLabel:function(t,u){var v=this.getChildControl(s);
t==null?v.resetLabel():v.setLabel(t);
},_applyRich:function(f,g){var h=this.getChildControl(s);
h.setRich(f);
}}});
})();
(function(){var bi="keypress",bh="focusout",bg="activate",bf="__ba",be="Tab",bd="singleton",bc="deactivate",bb="focusin",ba="qx.ui.core.FocusHandler";
qx.Class.define(ba,{extend:qx.core.Object,type:bd,construct:function(){arguments.callee.base.call(this);
this.__ba={};
},members:{__ba:null,__bb:null,__bc:null,__bd:null,connectTo:function(L){L.addListener(bi,this.__be,this);
L.addListener(bb,this._onFocusIn,this,true);
L.addListener(bh,this._onFocusOut,this,true);
L.addListener(bg,this._onActivate,this,true);
L.addListener(bc,this._onDeactivate,this,true);
},addRoot:function(W){this.__ba[W.$$hash]=W;
},removeRoot:function(R){delete this.__ba[R.$$hash];
},getActiveWidget:function(){return this.__bb;
},isActive:function(C){return this.__bb==C;
},getFocusedWidget:function(){return this.__bc;
},isFocused:function(g){return this.__bc==g;
},isFocusRoot:function(q){return !!this.__ba[q.$$hash];
},_onActivate:function(e){var Q=e.getTarget();
this.__bb=Q;
var P=this.__bf(Q);

if(P!=this.__bd){this.__bd=P;
}},_onDeactivate:function(e){var h=e.getTarget();

if(this.__bb==h){this.__bb=null;
}},_onFocusIn:function(e){var a=e.getTarget();

if(a!=this.__bc){this.__bc=a;
a.visualizeFocus();
}},_onFocusOut:function(e){var V=e.getTarget();

if(V==this.__bc){this.__bc=null;
V.visualizeBlur();
}},__be:function(e){if(e.getKeyIdentifier()!=be){return;
}
if(!this.__bd){return;
}e.stopPropagation();
e.preventDefault();
var X=this.__bc;

if(!e.isShiftPressed()){var Y=X?this.__bj(X):this.__bh();
}else{var Y=X?this.__bk(X):this.__bi();
}if(Y){Y.tabFocus();
}},__bf:function(o){var p=this.__ba;

while(o){if(p[o.$$hash]){return o;
}o=o.getLayoutParent();
}return null;
},__bg:function(r,s){if(r===s){return 0;
}var u=r.getTabIndex()||0;
var t=s.getTabIndex()||0;

if(u!=t){return u-t;
}var z=r.getContainerElement().getDomElement();
var y=s.getContainerElement().getDomElement();
var x=qx.bom.element.Location;
var w=x.get(z);
var v=x.get(y);
if(w.top!=v.top){return w.top-v.top;
}if(w.left!=v.left){return w.left-v.left;
}var A=r.getZIndex();
var B=s.getZIndex();

if(A!=B){return A-B;
}return 0;
},__bh:function(){return this.__bn(this.__bd,null);
},__bi:function(){return this.__bo(this.__bd,null);
},__bj:function(b){var c=this.__bd;

if(c==b){return this.__bh();
}
while(b&&b.getAnonymous()){b=b.getLayoutParent();
}
if(b==null){return [];
}var d=[];
this.__bl(c,b,d);
d.sort(this.__bg);
var f=d.length;
return f>0?d[0]:this.__bh();
},__bk:function(H){var I=this.__bd;

if(I==H){return this.__bi();
}
while(H&&H.getAnonymous()){H=H.getLayoutParent();
}
if(H==null){return [];
}var J=[];
this.__bm(I,H,J);
J.sort(this.__bg);
var K=J.length;
return K>0?J[K-1]:this.__bi();
},__bl:function(parent,D,E){var F=parent.getLayoutChildren();
var G;

for(var i=0,l=F.length;i<l;i++){G=F[i];
if(!(G instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(G)&&G.isEnabled()&&G.isVisible()){if(G.isTabable()&&this.__bg(D,G)<0){E.push(G);
}this.__bl(G,D,E);
}}},__bm:function(parent,j,k){var m=parent.getLayoutChildren();
var n;

for(var i=0,l=m.length;i<l;i++){n=m[i];
if(!(n instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(n)&&n.isEnabled()&&n.isVisible()){if(n.isTabable()&&this.__bg(j,n)>0){k.push(n);
}this.__bm(n,j,k);
}}},__bn:function(parent,M){var N=parent.getLayoutChildren();
var O;

for(var i=0,l=N.length;i<l;i++){O=N[i];
if(!(O instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(O)&&O.isEnabled()&&O.isVisible()){if(O.isTabable()){if(M==null||this.__bg(O,M)<0){M=O;
}}M=this.__bn(O,M);
}}return M;
},__bo:function(parent,S){var T=parent.getLayoutChildren();
var U;

for(var i=0,l=T.length;i<l;i++){U=T[i];
if(!(U instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(U)&&U.isEnabled()&&U.isVisible()){if(U.isTabable()){if(S==null||this.__bg(U,S)>0){S=U;
}}S=this.__bo(U,S);
}}return S;
}},destruct:function(){this._disposeMap(bf);
this.__bc=this.__bb=this.__bd=null;
}});
})();
(function(){var j="qx.ui.window.Window",i="changeModal",h="changeVisibility",g="changeActive",f="_applyActiveWindow",d="__ll",c="__lm",b="qx.ui.window.MDesktop";
qx.Mixin.define(b,{properties:{activeWindow:{check:j,apply:f,init:null,nullable:true}},members:{__ll:null,__lm:null,getWindowManager:function(){if(!this.__lm){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__lm;
},supportsMaximize:function(){return true;
},setWindowManager:function(a){if(this.__lm){this.__lm.setDesktop(null);
}a.setDesktop(this);
this.__lm=a;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(k,l){this.getWindowManager().changeActiveWindow(k,l);

if(k){k.setActive(true);
}
if(l){l.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(p){if(qx.Class.isDefined(j)&&p instanceof qx.ui.window.Window){this._addWindow(p);
}},_addWindow:function(o){if(!qx.lang.Array.contains(this.getWindows(),o)){this.getWindows().push(o);
o.addListener(g,this._onChangeActive,this);
o.addListener(i,this._onChangeModal,this);
o.addListener(h,this._onChangeVisibility,this);
}
if(o.getActive()){this.setActiveWindow(o);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(n){if(qx.Class.isDefined(j)&&n instanceof qx.ui.window.Window){this._removeWindow(n);
}},_removeWindow:function(m){qx.lang.Array.remove(this.getWindows(),m);
m.removeListener(g,this._onChangeActive,this);
m.removeListener(i,this._onChangeModal,this);
m.removeListener(h,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__ll){this.__ll=[];
}return this.__ll;
}},destruct:function(){this._disposeArray(d);
this._disposeObjects(c);
}});
})();
(function(){var j="Use 'getBlocker().getContentBlockerElement()' instead.",i="Use 'getBlocker().getBlockerElement()' instead.",h="_applyBlockerColor",g="Number",f="__pB",e="qx.ui.core.MBlocker",d="_applyBlockerOpacity",c="Color";
qx.Mixin.define(e,{construct:function(){this.__pB=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:c,init:null,nullable:true,apply:h,themeable:true},blockerOpacity:{check:g,init:1,apply:d,themeable:true}},members:{__pB:null,_applyBlockerColor:function(k,l){this.__pB.setColor(k);
},_applyBlockerOpacity:function(a,b){this.__pB.setOpacity(a);
},block:function(){this.__pB.block();
},isBlocked:function(){return this.__pB.isBlocked();
},unblock:function(){this.__pB.unblock();
},forceUnblock:function(){this.__pB.forceUnblock();
},blockContent:function(m){this.__pB.blockContent(m);
},isContentBlocked:function(){return this.__pB.isContentBlocked();
},unblockContent:function(){this.__pB.unblockContent();
},forceUnblockContent:function(){this.__pB.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return this.__pB.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return this.__pB.getBlockerElement();
},getBlocker:function(){return this.__pB;
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="Integer",l="hovered",k="qx.event.type.Event",j="Enter",i="Space",h="press",g="qx.ui.form.RepeatButton",f="release",b="interval",d="__lc",c="execute";
qx.Class.define(g,{extend:qx.ui.form.Button,construct:function(p,q){arguments.callee.base.call(this,p,q);
this.__lc=new qx.event.AcceleratingTimer();
this.__lc.addListener(b,this._onInterval,this);
},events:{"execute":k,"press":k,"release":k},properties:{interval:{check:m,init:100},firstInterval:{check:m,init:500},minTimer:{check:m,init:20},timerDecrease:{check:m,init:2}},members:{__ld:null,__lc:null,press:function(){if(this.isEnabled()){if(!this.hasState(o)){this.__le();
}this.removeState(n);
this.addState(o);
}},release:function(a){if(!this.isEnabled()){return;
}if(this.hasState(o)){if(!this.__ld){this.execute();
}}this.removeState(o);
this.removeState(n);
this.__lf();
},_applyEnabled:function(r,s){arguments.callee.base.call(this,r,s);

if(!r){this.removeState(o);
this.removeState(n);
this.__lf();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
this.__lc.start();
}this.addState(l);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(l);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
this.__lc.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__le();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(n)){this.addState(l);

if(this.hasState(o)&&!this.__ld){this.execute();
}}this.__lf();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case j:case i:if(this.hasState(o)){if(!this.__ld){this.execute();
}this.removeState(o);
this.removeState(n);
e.stopPropagation();
this.__lf();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case j:case i:this.removeState(n);
this.addState(o);
e.stopPropagation();
this.__le();
}},_onInterval:function(e){this.__ld=true;
this.fireEvent(c);
},__le:function(){this.fireEvent(h);
this.__ld=false;
this.__lc.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(n);
this.addState(o);
},__lf:function(){this.fireEvent(f);
this.__lc.stop();
this.removeState(n);
this.removeState(o);
}},destruct:function(){this._disposeObjects(d);
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
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(e){return arguments.length==1;
},getEnabled:function(){},setRequired:function(d){return arguments.length==1;
},getRequired:function(){},setValid:function(a){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var b="qx.ui.form.IRange";
qx.Interface.define(b,{members:{setMinimum:function(e){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(d){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(c){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(a){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var i="Boolean",h="invalid",g="qx.ui.form.MForm",f="_applyValid",e="",d="changeRequired",c="changeValid",b="changeInvalidMessage",a="String";
qx.Mixin.define(g,{properties:{valid:{check:i,init:true,apply:f,event:c},required:{check:i,init:false,event:d},invalidMessage:{check:a,init:e,event:b}},members:{_applyValid:function(j,k){j?this.removeState(h):this.addState(h);
}}});
})();
(function(){var W="knob",V="horizontal",U="vertical",T="Integer",S="px",R="mousemove",Q="resize",P="left",O="top",N="mouseup",bB="slider",bA="PageUp",bz="mousedown",by="height",bx="changeValue",bw="Left",bv="Down",bu="Up",bt="dblclick",bs="qx.ui.form.Slider",be="PageDown",bf="mousewheel",bc="interval",bd="_applyValue",ba="_applyKnobFactor",bb="End",X="width",Y="_applyOrientation",bg="Home",bh="floor",bk="_applyMinimum",bj="click",bm="Right",bl="keypress",bo="ceil",bn="losecapture",bi="contextmenu",br="_applyMaximum",bq="Number",bp="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(bs,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(D){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bl,this._onKeyPress);
this.addListener(bf,this._onMouseWheel);
this.addListener(bz,this._onMouseDown);
this.addListener(N,this._onMouseUp);
this.addListener(bn,this._onMouseUp);
this.addListener(Q,this._onUpdate);
this.addListener(bi,this._onStopEvent);
this.addListener(bj,this._onStopEvent);
this.addListener(bt,this._onStopEvent);
if(D!=null){this.setOrientation(D);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bB},focusable:{refine:true,init:true},orientation:{check:[V,U],init:V,apply:Y},value:{check:bp,init:0,apply:bd,event:bx,nullable:true},minimum:{check:T,init:0,apply:bk},maximum:{check:T,init:100,apply:br},singleStep:{check:T,init:1},pageStep:{check:T,init:10},knobFactor:{check:bq,apply:ba,nullable:true}},members:{__lI:null,__lJ:null,__lK:null,__lL:null,__lM:null,__lN:null,__lO:null,__lP:null,__lQ:null,_forwardStates:{invalid:true},_createChildControlImpl:function(u){var v;

switch(u){case W:v=new qx.ui.core.Widget();
v.addListener(Q,this._onUpdate,this);
this._add(v);
break;
}return v||arguments.callee.base.call(this,u);
},_onMouseWheel:function(e){var w=e.getWheelDelta()>0?1:-1;
this.slideBy(w*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var f=this.getOrientation()===V;
var d=f?bw:bu;
var forward=f?bm:bv;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case d:this.slideBack();
break;
case be:this.slidePageForward();
break;
case bA:this.slidePageBack();
break;
case bg:this.slideToBegin();
break;
case bb:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__lL){return;
}var m=this.__lS;
var k=this.getChildControl(W);
var l=m?P:O;
var o=m?e.getDocumentLeft():e.getDocumentTop();
var p=this.__lI=qx.bom.element.Location.get(this.getContentElement().getDomElement())[l];
var n=this.__lJ=qx.bom.element.Location.get(k.getContainerElement().getDomElement())[l];

if(e.getTarget()===k){this.__lL=true;
this.__lM=o+p-n;
}else{this.__lN=true;
this.__lO=o<=n?-1:1;
this.__lT(e);
this._onInterval();
if(!this.__lQ){this.__lQ=new qx.event.Timer(100);
this.__lQ.addListener(bc,this._onInterval,this);
}this.__lQ.start();
}this.addListener(R,this._onMouseMove);
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
}this.removeListener(R,this._onMouseMove);
if(e.getType()===N){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__lL){var bD=this.__lS?e.getDocumentLeft():e.getDocumentTop();
var bC=bD-this.__lM;
this.slideTo(this._positionToValue(bC));
}else if(this.__lN){this.__lT(e);
}e.stopPropagation();
},_onInterval:function(e){var E=this.getValue()+(this.__lO*this.getPageStep());
if(E<this.getMinimum()){E=this.getMinimum();
}else if(E>this.getMaximum()){E=this.getMaximum();
}var F=this.__lO==-1;

if((F&&E<=this.__lP)||(!F&&E>=this.__lP)){E=this.__lP;
}this.slideTo(E);
},_onUpdate:function(e){var B=this.getInnerSize();
var C=this.getChildControl(W).getBounds();
var A=this.__lS?X:by;
this._updateKnobSize();
this.__lR=B[A]-C[A];
this.__lK=C[A];
this._updateKnobPosition();
},__lS:false,__lR:0,__lT:function(e){var bE=this.__lS;
var bL=bE?e.getDocumentLeft():e.getDocumentTop();
var bN=this.__lI;
var bF=this.__lJ;
var bP=this.__lK;
var bM=bL-bN;

if(bL>=bF){bM-=bP;
}var bJ=this._positionToValue(bM);
var bG=this.getMinimum();
var bH=this.getMaximum();

if(bJ<bG){bJ=bG;
}else if(bJ>bH){bJ=bH;
}else{var bK=this.getValue();
var bI=this.getPageStep();
var bO=this.__lO<0?bh:bo;
bJ=bK+(Math[bO]((bJ-bK)/bI)*bI);
}if(this.__lP==null||(this.__lO==-1&&bJ<=this.__lP)||(this.__lO==1&&bJ>=this.__lP)){this.__lP=bJ;
}},_positionToValue:function(q){var r=this.__lR;
if(r==null||r==0){return 0;
}var t=q/r;

if(t<0){t=0;
}else if(t>1){t=1;
}var s=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(s*t);
},_valueToPosition:function(g){var h=this.__lR;

if(h==null){return 0;
}var i=this.getMaximum()-this.getMinimum();
if(i==0){return 0;
}var g=g-this.getMinimum();
var j=g/i;

if(j<0){j=0;
}else if(j>1){j=1;
}return Math.round(h*j);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(L){var M=this.getChildControl(W).getContainerElement();

if(this.__lS){M.setStyle(P,L+S,true);
}else{M.setStyle(O,L+S,true);
}},_updateKnobSize:function(){var y=this.getKnobFactor();

if(y==null){return;
}var x=this.getInnerSize();

if(x==null){return;
}if(this.__lS){this.getChildControl(W).setWidth(Math.round(y*x.width));
}else{this.getChildControl(W).setHeight(Math.round(y*x.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(c){this.slideTo(this.getValue()+c);
},slideTo:function(z){if(z<this.getMinimum()){z=this.getMinimum();
}else if(z>this.getMaximum()){z=this.getMaximum();
}else{z=this.getMinimum()+Math.round((z-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(z);
},_applyOrientation:function(G,H){var I=this.getChildControl(W);
this.__lS=G===V;
if(this.__lS){this.removeState(U);
I.removeState(U);
this.addState(V);
I.addState(V);
I.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(V);
I.removeState(V);
this.addState(U);
I.addState(U);
I.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bQ,bR){if(bQ!=null){this._updateKnobSize();
}else{if(this.__lS){this.getChildControl(W).resetWidth();
}else{this.getChildControl(W).resetHeight();
}}},_applyValue:function(bS,bT){if(bS!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(a,b){if(this.getValue()<a){this.setValue(a);
}this._updateKnobPosition();
},_applyMaximum:function(J,K){if(this.getValue()>J){this.setValue(J);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
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
(function(){var D="resize",C="scrollY",B="update",A="scrollX",z="_applyScrollX",w="_applyScrollY",v="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",u="appear",t="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",s="qx.event.type.Event",q="qx.ui.core.scroll.ScrollPane",r="scroll";
qx.Class.define(q,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(D,this._onUpdate);
var m=this.getContentElement();
m.addListener(r,this._onScroll,this);
m.addListener(u,this._onAppear,this);
},events:{update:s},properties:{scrollX:{check:v,apply:z,event:A,init:0},scrollY:{check:t,apply:w,event:C,init:0}},members:{add:function(i){var j=this._getChildren()[0];

if(j){this._remove(j);
j.removeListener(D,this._onUpdate,this);
}
if(i){this._add(i);
i.addListener(D,this._onUpdate,this);
}},remove:function(n){if(n){this._remove(n);
n.removeListener(D,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(B);
},_onScroll:function(e){var N=this.getContentElement();
this.setScrollX(N.getScrollX());
this.setScrollY(N.getScrollY());
},_onAppear:function(e){var L=this.getContentElement();
var I=this.getScrollX();
var J=L.getScrollX();

if(I!=J){L.scrollToX(I);
}var M=this.getScrollY();
var K=L.getScrollY();

if(M!=K){L.scrollToY(M);
}},getItemTop:function(F){var top=0;

do{top+=F.getBounds().top;
F=F.getLayoutParent();
}while(F&&F!==this);
return top;
},getItemBottom:function(c){return this.getItemTop(c)+c.getBounds().height;
},getItemLeft:function(a){var b=0;
var parent;

do{b+=a.getBounds().left;
parent=a.getLayoutParent();

if(parent){b+=parent.getInsets().left;
}a=parent;
}while(a&&a!==this);
return b;
},getItemRight:function(E){return this.getItemLeft(E)+E.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var h=this.getInnerSize();
var g=this.getScrollSize();

if(h&&g){return Math.max(0,g.width-h.width);
}return 0;
},getScrollMaxY:function(){var H=this.getInnerSize();
var G=this.getScrollSize();

if(H&&G){return Math.max(0,G.height-H.height);
}return 0;
},scrollToX:function(d){var f=this.getScrollMaxX();

if(d<0){d=0;
}else if(d>f){d=f;
}this.setScrollX(d);
},scrollToY:function(o){var p=this.getScrollMaxY();

if(o<0){o=0;
}else if(o>p){o=p;
}this.setScrollY(o);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(l){this.getContentElement().scrollToX(l);
},_applyScrollY:function(k){this.getContentElement().scrollToY(k);
}}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(e){this.assertNumber(e);
},scrollBy:function(c){this.assertNumber(c);
},scrollBySteps:function(d){this.assertNumber(d);
}}});
})();
(function(){var n="horizontal",m="px",l="scroll",k="vertical",j="-1px",i="qx.client",h="0",g="hidden",f="mousedown",d="qx.ui.core.scroll.NativeScrollBar",C="PositiveNumber",B="Integer",A="mousemove",z="_applyMaximum",y="_applyOrientation",x="appear",w="opera",v="PositiveInteger",u="mshtml",t="mouseup",r="Number",s="__nL",p="_applyPosition",q="scrollbar",o="native";
qx.Class.define(d,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(V){arguments.callee.base.call(this);
this.addState(o);
this.getContentElement().addListener(l,this._onScroll,this);
this.addListener(f,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(A,this._stopPropagation,this);

if(qx.core.Variant.isSet(i,w)){this.addListener(x,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(V!=null){this.setOrientation(V);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:q},orientation:{check:[n,k],init:n,apply:y},maximum:{check:v,apply:z,init:100},position:{check:r,init:0,apply:p,event:l},singleStep:{check:B,init:20},knobFactor:{check:C,nullable:true}},members:{__nK:null,__nL:null,_getScrollPaneElement:function(){if(!this.__nL){this.__nL=new qx.html.Element();
}return this.__nL;
},renderLayout:function(D,top,E,F){var G=arguments.callee.base.call(this,D,top,E,F);
this._updateScrollBar();
return G;
},_getContentHint:function(){var W=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__nK?100:W,maxWidth:this.__nK?null:W,minWidth:this.__nK?null:W,height:this.__nK?W:100,maxHeight:this.__nK?W:null,minHeight:this.__nK?W:null};
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);
this._updateScrollBar();
},_applyMaximum:function(P){this._updateScrollBar();
},_applyPosition:function(J){var content=this.getContentElement();

if(this.__nK){content.scrollToX(J);
}else{content.scrollToY(J);
}},_applyOrientation:function(M,N){var O=this.__nK=M===n;
this.set({allowGrowX:O,allowShrinkX:O,allowGrowY:!O,allowShrinkY:!O});

if(O){this.replaceState(k,n);
}else{this.replaceState(n,k);
}this.getContentElement().setStyles({overflowX:O?l:g,overflowY:O?g:l});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var R=this.__nK;
var S=this.getBounds();

if(!S){return;
}
if(this.isEnabled()){var T=R?S.width:S.height;
var Q=this.getMaximum()+T;
}else{Q=0;
}if(qx.core.Variant.isSet(i,u)){var S=this.getBounds();
this.getContentElement().setStyles({left:R?h:j,top:R?j:h,width:(R?S.width:S.width+1)+m,height:(R?S.height+1:S.height)+m});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(R?Q:1)+m,height:(R?1:Q)+m});
this.scrollTo(this.getPosition());
},scrollTo:function(U){this.setPosition(Math.max(0,Math.min(this.getMaximum(),U)));
},scrollBy:function(c){this.scrollTo(this.getPosition()+c);
},scrollBySteps:function(K){var L=this.getSingleStep();
this.scrollBy(K*L);
},_onScroll:function(e){var I=this.getContentElement();
var H=this.__nK?I.getScrollX():I.getScrollY();
this.setPosition(H);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(s);
}});
})();
(function(){var p="slider",o="horizontal",n="button-begin",m="vertical",l="button-end",k="Integer",j="execute",i="right",h="left",g="down",E="up",D="PositiveNumber",C="changeValue",B="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",A="_applyKnobFactor",z="knob",y="qx.ui.core.scroll.ScrollBar",x="resize",w="_applyOrientation",v="_applyPageStep",t="PositiveInteger",u="scroll",r="_applyPosition",s="scrollbar",q="_applyMaximum";
qx.Class.define(y,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(d){arguments.callee.base.call(this);
this._createChildControl(n);
this._createChildControl(p).addListener(x,this._onResizeSlider,this);
this._createChildControl(l);
if(d!=null){this.setOrientation(d);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:s},orientation:{check:[o,m],init:o,apply:w},maximum:{check:t,apply:q,init:100},position:{check:B,init:0,apply:r,event:u},singleStep:{check:k,init:20},pageStep:{check:k,init:10,apply:v},knobFactor:{check:D,apply:A,nullable:true}},members:{__lj:2,_createChildControlImpl:function(P){var Q;

switch(P){case p:Q=new qx.ui.core.scroll.ScrollSlider();
Q.setPageStep(100);
Q.setFocusable(false);
Q.addListener(C,this._onChangeSliderValue,this);
this._add(Q,{flex:1});
break;
case n:Q=new qx.ui.form.RepeatButton();
Q.setFocusable(false);
Q.addListener(j,this._onExecuteBegin,this);
this._add(Q);
break;
case l:Q=new qx.ui.form.RepeatButton();
Q.setFocusable(false);
Q.addListener(j,this._onExecuteEnd,this);
this._add(Q);
break;
}return Q||arguments.callee.base.call(this,P);
},_applyMaximum:function(R){this.getChildControl(p).setMaximum(R);
},_applyPosition:function(f){this.getChildControl(p).setValue(f);
},_applyKnobFactor:function(O){this.getChildControl(p).setKnobFactor(O);
},_applyPageStep:function(N){this.getChildControl(p).setPageStep(N);
},_applyOrientation:function(G,H){var I=this._getLayout();

if(I){I.dispose();
}if(G===o){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(m,o);
this.getChildControl(n).replaceState(E,h);
this.getChildControl(l).replaceState(g,i);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(o,m);
this.getChildControl(n).replaceState(h,E);
this.getChildControl(l).replaceState(i,g);
}this.getChildControl(p).setOrientation(G);
},scrollTo:function(a){this.getChildControl(p).slideTo(a);
},scrollBy:function(F){this.getChildControl(p).slideBy(F);
},scrollBySteps:function(b){var c=this.getSingleStep();
this.getChildControl(p).slideBy(b*c);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var J=this.getChildControl(p).getChildControl(z);
var M=J.getSizeHint();
var K=false;
var L=this.getChildControl(p).getInnerSize();

if(this.getOrientation()==m){if(L.height<M.minHeight+this.__lj){K=true;
}}else{if(L.width<M.minWidth+this.__lj){K=true;
}}
if(K){J.exclude();
}else{J.show();
}}}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var s="success",r="head",q="complete",p="error",o="load",n="fail",m="loaded",l="readystatechange",k="qx.io.ScriptLoader",j="script",g="qx.client",i="text/javascript",h="abort";
qx.Class.define(k,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__oD=qx.lang.Function.bind(this.__oJ,this);
this.__oE=document.createElement(j);
},members:{__oF:null,__oG:null,__oH:null,__oD:null,__oE:null,load:function(a,b,c){if(this.__oF){throw new Error("Another request is still running!");
}this.__oF=true;
var d=document.getElementsByTagName(r)[0];
var f=this.__oE;
this.__oG=b||null;
this.__oH=c||window;
f.type=i;
f.onerror=f.onload=f.onreadystatechange=this.__oD;
f.src=a;
d.appendChild(f);
},abort:function(){if(this.__oF){this.__oI(h);
}},__oI:function(status){var t=this.__oE;
t.onerror=t.onload=t.onreadystatechange=null;
document.getElementsByTagName(r)[0].removeChild(t);
delete this.__oF;
if(this.__oG){this.__oG.call(this.__oH,status);
delete this.__oG;
}},__oJ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(g,{"mshtml":function(e){var u=this.__oE.readyState;

if(u==m){this.__oI(s);
}else if(u==q){this.__oI(s);
}else{return;
}},"opera":function(e){if(qx.lang.Type.isString(e)||e.type===p){return this.__oI(n);
}else if(e.type===o){return this.__oI(s);
}else{return;
}},"default":function(e){if(qx.lang.Type.isString(e)||e.type===p){this.__oI(n);
}else if(e.type===o){this.__oI(s);
}else if(e.type===l&&(e.target.readyState===q||e.target.readyState===m)){this.__oI(s);
}else{return;
}}}))},destruct:function(){this.__oE=this.__oD=this.__oG=this.__oH=null;
}});
})();
(function(){var y="qx.client",x="head",w="text/css",v="stylesheet",u="}",t='@import "',s="{",r='";',q="qx.bom.Stylesheet",p="link",o="style";
qx.Class.define(q,{statics:{includeFile:function(O,P){if(!P){P=document;
}var Q=P.createElement(p);
Q.type=w;
Q.rel=v;
Q.href=qx.util.ResourceManager.getInstance().toUri(O);
var R=P.getElementsByTagName(x)[0];
R.appendChild(Q);
},createElement:qx.core.Variant.select(y,{"mshtml":function(m){var n=document.createStyleSheet();

if(m){n.cssText=m;
}return n;
},"default":function(k){var l=document.createElement(o);
l.type=w;

if(k){l.appendChild(document.createTextNode(k));
}document.getElementsByTagName(x)[0].appendChild(l);
return l.sheet;
}}),addRule:qx.core.Variant.select(y,{"mshtml":function(V,W,X){V.addRule(W,X);
},"default":function(S,T,U){S.insertRule(T+s+U+u,S.cssRules.length);
}}),removeRule:qx.core.Variant.select(y,{"mshtml":function(c,d){var e=c.rules;
var f=e.length;

for(var i=f-1;i>=0;--i){if(e[i].selectorText==d){c.removeRule(i);
}}},"default":function(z,A){var B=z.cssRules;
var C=B.length;

for(var i=C-1;i>=0;--i){if(B[i].selectorText==A){z.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(y,{"mshtml":function(L){var M=L.rules;
var N=M.length;

for(var i=N-1;i>=0;i--){L.removeRule(i);
}},"default":function(Y){var ba=Y.cssRules;
var bb=ba.length;

for(var i=bb-1;i>=0;i--){Y.deleteRule(i);
}}}),addImport:qx.core.Variant.select(y,{"mshtml":function(a,b){a.addImport(b);
},"default":function(bf,bg){bf.insertRule(t+bg+r,bf.cssRules.length);
}}),removeImport:qx.core.Variant.select(y,{"mshtml":function(H,I){var J=H.imports;
var K=J.length;

for(var i=K-1;i>=0;i--){if(J[i].href==I){H.removeImport(i);
}}},"default":function(D,E){var F=D.cssRules;
var G=F.length;

for(var i=G-1;i>=0;i--){if(F[i].href==E){D.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(y,{"mshtml":function(g){var h=g.imports;
var j=h.length;

for(var i=j-1;i>=0;i--){g.removeImport(i);
}},"default":function(bc){var bd=bc.cssRules;
var be=bd.length;

for(var i=be-1;i>=0;i--){if(bd[i].type==bd[i].IMPORT_RULE){bc.deleteRule(i);
}}}})}});
})();
(function(){var n="complete",m="initialized",l="loading",k="__kI",j="",i="?",h="webkit",g="load",f="qx.event.type.Event",e="qx.client",d="qx.io.part.Package";
qx.Class.define(d,{extend:qx.core.Object,construct:function(a,b,c){arguments.callee.base.call(this);
this.__kH=c?n:m;
this.__kI=a;
this.__kJ=b;
},events:{"load":f},members:{__kJ:null,__kI:null,__kH:null,__kK:function(o,p,self){if(o.length==0){p.call(self);
return;
}this.__kH=l;
var r=0;
var q=function(t){if(r>=o.length){this.__kH=n;
p.call(self);
return;
}var u=new qx.io.ScriptLoader();
u.load(t.shift()+i+(Math.random()+j).substring(2,7),function(){r+=1;
u.dispose();

if(qx.core.Variant.isSet(e,h)){qx.event.Timer.once(function(){q.call(this,t,p,self);
},this,0);
}else{q.call(this,t,p,self);
}},this);
};
q(qx.lang.Array.clone(o));
},getReadyState:function(){return this.__kH;
},load:function(){if(this.__kH!==m){return;
}this.__kH=l;
this.__kK(this.__kI,function(){this.__kH=n;
var s=qx.$$loader.packageHashes[this.__kJ];
this._importPackageData(qx.$$packageData[s]);
this.fireEvent(g);
},this);
},_importPackageData:qx.$$loader.importPackageData},destruct:function(){this._disposeArray(k);
}});
})();
(function(){var n="String",m="loading",l="complete",k="initialized",j="changeState",i="changeDescription",h="changeName",g="showcase.Page",f="showcase.AbstractContent",e="changeIcon",d="changePart";
qx.Class.define(g,{extend:qx.core.Object,construct:function(){this.initReadyState();
},properties:{name:{check:n,event:h},icon:{check:n,event:e},part:{check:n,event:d},description:{check:n,event:i},contentClass:{},controlClass:{nullable:true},content:{check:f},readyState:{check:[k,m,l],init:k,event:j}},members:{load:function(a,b){var a=a||qx.lang.Function.empty;
var b=b||this;
var c=this.getReadyState();

if(c==l){a.call(b,this);
return;
}else if(c==m){return this.addListenerOnce(j,function(){a.call(b,this);
});
}else{this.setReadyState(m);
qx.io.PartLoader.require(this.getPart(),function(){this._initializeContent();
this.setReadyState(l);
a.call(b,this);
},this);
}},_initializeContent:function(){var o=qx.Class.getByName(this.getContentClass());
this.setContent(new o(this));
}}});
})();
(function(){var j="Theming",i="and UI code and differ only in their theme.",h="Widgets can have states like \"selected\" or ",g="browser issues and allows styling of any widget property. It is ",f="showcase.page.theme.Content",e="showcase/theme/icon.png",d="Custom themes",c="<p> The two calculators on this page share exactly the same application ",b="widget independent of its content. Qooxdoo comes with a rich set of ",a="application code.",v="qooxdoo provides a powerful theming system built on a custom JSON-like ",u="This demo shows all available decorators.",t="possible to create entirely different themes without touching the ",s="Appearance",r="showcase.page.theme.Page",q="syntax. Unlike CSS this syntax doesn't have any cross ",p="\"hovered\", which can be used by the theme to style the widgets.",o="theme",n="pre-defined decorators.",m="This namespace contains the theme managers and the two standard themes.",k="Decorators",l="Any HTML code can be used to style the background of a ";
qx.Class.define(r,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:j,part:o,icon:e,contentClass:f,description:showcase.page.DescriptionBuilder.build(j,this.__Ha,null,this.__Hb,this.__Hc,this.__Hd,this.__He)});
},members:{__Ha:v+q+g+t+a+c+i,__Hb:{"States":h+p,"Decorators":l+b+n},__Hc:{"ui_theming":j,"ui_appearance":s,"ui_custom_themes":d,"ui_decorators":k},__Hd:{"#ui~Decoration.html":u},__He:{"#qx.theme":m}}});
})();
(function(){var g="complete",f="load",e="initialized",d="loading",c="qx.io.part.Part",b="qx.event.type.Event",a="__kU";
qx.Class.define(c,{extend:qx.core.Object,construct:function(name,l){arguments.callee.base.call(this);
this.__kS=name;
this.__kT=g;
this.__kU=l;

for(var i=0;i<l.length;i++){if(l[i].getReadyState()!==g){this.__kT=e;
break;
}}},events:{"load":b},members:{__kT:null,getReadyState:function(){return this.__kT;
},__kS:null,getName:function(){return this.__kS;
},__kU:null,load:function(h,self){if(this.__kT==g){if(h){h.call(self);
}return;
}else if(this.__kT==d){if(h){this.addListenerOnce(f,h,self);
}return;
}
if(h){this.addListenerOnce(f,h,self);
}var j=function(){this.load();
};

for(var i=0;i<this.__kU.length;i++){var k=this.__kU[i];

switch(k.getReadyState()){case e:k.addListenerOnce(f,j,this);
k.load();
return;
case d:k.addListenerOnce(f,j,this);
return;
case g:break;
default:throw new Error("Invalid case!");
}}this.__kT=g;
this.fireEvent(f);
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var F="other",E="widgets",D="fonts",C="appearances",B="qx.Theme",A="]",z="[Theme ",y="colors",x="decorations",w="Theme",t="meta",v="borders",u="icons";
qx.Class.define(B,{statics:{define:function(name,J){if(!J){var J={};
}J.include=this.__ou(J.include);
J.patch=this.__ou(J.patch);
{};
var K={$$type:w,name:name,title:J.title,toString:this.genericToString};
if(J.extend){K.supertheme=J.extend;
}K.basename=qx.Bootstrap.createNamespace(name,K);
this.__ox(K,J);
this.__ov(K,J);
this.$$registry[name]=K;
for(var i=0,a=J.include,l=a.length;i<l;i++){this.include(K,a[i]);
}
for(var i=0,a=J.patch,l=a.length;i<l;i++){this.patch(K,a[i]);
}},__ou:function(G){if(!G){return [];
}
if(qx.lang.Type.isArray(G)){return G;
}else{return [G];
}},__ov:function(q,r){var s=r.aliases||{};

if(r.extend&&r.extend.aliases){qx.lang.Object.mergeWith(s,r.extend.aliases,false);
}q.aliases=s;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return z+this.name+A;
},__ow:function(H){for(var i=0,I=this.__oy,l=I.length;i<l;i++){if(H[I[i]]){return I[i];
}}},__ox:function(h,j){var n=this.__ow(j);
if(j.extend&&!n){n=j.extend.type;
}h.type=n||F;
if(!n){return;
}var p=function(){};
if(j.extend){p.prototype=new j.extend.$$clazz;
}var o=p.prototype;
var m=j[n];
for(var k in m){o[k]=m[k];
if(o[k].base){{};
o[k].base=j.extend;
}}h.$$clazz=p;
h[n]=new p;
},$$registry:{},__oy:[y,v,x,D,u,E,C,t],__oz:null,__oA:null,__oB:function(){},patch:function(b,c){var e=this.__ow(c);

if(e!==this.__ow(b)){throw new Error("The mixins '"+b.name+"' are not compatible '"+c.name+"'!");
}var d=c[e];
var f=b.$$clazz.prototype;

for(var g in d){f[g]=d[g];
}},include:function(L,M){var O=M.type;

if(O!==L.type){throw new Error("The mixins '"+L.name+"' are not compatible '"+M.name+"'!");
}var N=M[O];
var P=L.$$clazz.prototype;

for(var Q in N){if(P[Q]!==undefined){continue;
}P[Q]=N[Q];
}}}});
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
(function(){var m="px",l="0px",k="-1px",j="no-repeat",i="scale-x",h="scale-y",g="-tr",f="-l",e='</div>',d="scale",A="qx.client",z="-br",y="-t",x="-tl",w="-r",v='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',u="_applyBaseImage",t="-b",s="String",r="",p="-bl",q="-c",n="mshtml",o="qx.ui.decoration.Grid";
qx.Class.define(o,{extend:qx.ui.decoration.Abstract,construct:function(a,b){arguments.callee.base.call(this);
if(a!=null){this.setBaseImage(a);
}
if(b!=null){this.setInsets(b);
}},properties:{baseImage:{check:s,nullable:true,apply:u}},members:{__ne:null,__nf:null,__ng:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ne;
},getMarkup:function(){if(this.__ne){return this.__ne;
}var D=qx.bom.element.Decoration;
var E=this.__nf;
var F=this.__ng;
var G=[];
G.push(v);
G.push(D.create(E.tl,j,{top:0,left:0}));
G.push(D.create(E.t,i,{top:0,left:F.left+m}));
G.push(D.create(E.tr,j,{top:0,right:0}));
G.push(D.create(E.bl,j,{bottom:0,left:0}));
G.push(D.create(E.b,i,{bottom:0,left:F.left+m}));
G.push(D.create(E.br,j,{bottom:0,right:0}));
G.push(D.create(E.l,h,{top:F.top+m,left:0}));
G.push(D.create(E.c,d,{top:F.top+m,left:F.left+m}));
G.push(D.create(E.r,h,{top:F.top+m,right:0}));
G.push(e);
return this.__ne=G.join(r);
},resize:function(J,K,L){var M=this.__ng;
var innerWidth=K-M.left-M.right;
var innerHeight=L-M.top-M.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}J.style.width=K+m;
J.style.height=L+m;
J.childNodes[1].style.width=innerWidth+m;
J.childNodes[4].style.width=innerWidth+m;
J.childNodes[7].style.width=innerWidth+m;
J.childNodes[6].style.height=innerHeight+m;
J.childNodes[7].style.height=innerHeight+m;
J.childNodes[8].style.height=innerHeight+m;

if(qx.core.Variant.isSet(A,n)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(K%2==1){J.childNodes[2].style.marginRight=k;
J.childNodes[5].style.marginRight=k;
J.childNodes[8].style.marginRight=k;
}else{J.childNodes[2].style.marginRight=l;
J.childNodes[5].style.marginRight=l;
J.childNodes[8].style.marginRight=l;
}
if(L%2==1){J.childNodes[3].style.marginBottom=k;
J.childNodes[4].style.marginBottom=k;
J.childNodes[5].style.marginBottom=k;
}else{J.childNodes[3].style.marginBottom=l;
J.childNodes[4].style.marginBottom=l;
J.childNodes[5].style.marginBottom=l;
}}}},tint:function(B,C){},_applyBaseImage:function(N,O){{};

if(N){var S=this._resolveImageUrl(N);
var T=/(.*)(\.[a-z]+)$/.exec(S);
var R=T[1];
var Q=T[2];
var P=this.__nf={tl:R+x+Q,t:R+y+Q,tr:R+g+Q,bl:R+p+Q,b:R+t+Q,br:R+z+Q,l:R+f+Q,c:R+q+Q,r:R+w+Q};
this.__ng=this._computeEdgeSizes(P);
}},_resolveImageUrl:function(c){return qx.util.AliasManager.getInstance().resolve(c);
},_computeEdgeSizes:function(H){var I=qx.util.ResourceManager.getInstance();
return {top:I.getImageHeight(H.t),bottom:I.getImageHeight(H.b),left:I.getImageWidth(H.l),right:I.getImageWidth(H.r)};
}},destruct:function(){this.__ne=this.__nf=this.__ng=null;
}});
})();
(function(){var e="showcase/theme/window.png",d="showcase/theme/display.png",c="showcase/theme/button.png",b="showcase.page.theme.calc.theme.Decoration",a="showcase/theme/button-pressed.png";
qx.Theme.define(b,{decorations:{"calc-button":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:[3,3,5,3]}},"calc-button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:a,insets:[3,3,5,3]}},"calc-display":{decorator:qx.ui.decoration.Grid,style:{baseImage:d,insets:[5,5,5,4]}},"calc-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:e,insets:2}}}});
})();
(function(){var C="Number",B="qx.event.type.Event",A="update",z="linear",y="reverse",x="Boolean",w="setup",v="none",u="qx.fx.Base",t="sinodial",m="flicker",s="pulse",p="_applyDuration",l="easeOutQuad",k="spring",o="easeInQuad",n="full",q="wobble",j="finish",r="Object";
qx.Class.define(u,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__rj=qx.fx.Base.EffectState.IDLE;
this.__rk=a;
},events:{"setup":B,"update":B,"finish":B},properties:{duration:{init:0.5,check:C,apply:p},fps:{init:100,check:C},sync:{init:false,check:x},from:{init:0,check:C},to:{init:1,check:C},delay:{init:0.0,check:C},queue:{check:r},transition:{init:z,check:[z,o,l,t,y,m,q,s,k,v,n]}},statics:{EffectState:{IDLE:'idle',PREPARING:'preparing',FINISHED:'finished',RUNNING:'running'}},members:{__rj:null,__rl:null,__rm:null,__rn:null,__ro:null,__rp:null,__rq:null,__rr:null,__rk:null,_getElement:function(){return this.__rk;
},_setElement:function(e){this.__rk=e;
},_applyDuration:function(c,d){},init:function(){this.__rj=qx.fx.Base.EffectState.PREPARING;
this.__rl=0;
this.__rm=this.getDelay()*1000+(new Date().getTime());
this.__rn=this.__rm+(this.getDuration()*1000);
this.__ro=this.getTo()-this.getFrom();
this.__rp=this.__rn-this.__rm;
this.__rq=this.getFps()*this.getDuration();
},beforeFinishInternal:function(){},beforeFinish:function(){},afterFinishInternal:function(){},afterFinish:function(){},beforeSetupInternal:function(){},beforeSetup:function(){},afterSetupInternal:function(){},afterSetup:function(){},beforeUpdateInternal:function(){},beforeUpdate:function(){},afterUpdateInternal:function(){},afterUpdate:function(){},beforeStartInternal:function(){},beforeStart:function(){},setup:function(){this.fireEvent(w);
},update:function(f){},finish:function(){this.fireEvent(j);
},start:function(){if(this.__rj!=qx.fx.Base.EffectState.IDLE){return false;
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
},render:function(b){if(this.__rj==qx.fx.Base.EffectState.PREPARING){this.__rj=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afterSetup();
}
if(this.__rj==qx.fx.Base.EffectState.RUNNING){this.__rr=qx.fx.Transition.get(this.getTransition())(b)*this.__ro+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__rr);
this.afterUpdateInternal();
this.afterUpdate();

if(this.hasListener(A)){this.fireEvent(A);
}}},loop:function(g){if(g>=this.__rm){if(g>=this.__rn){this.end();
}var i=(g-this.__rm)/this.__rp;
var h=Math.round(i*this.__rq);
if(h>this.__rl){this.render(i);
this.__rl=h;
}}},cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__rj=qx.fx.Base.EffectState.IDLE;
},resetState:function(){this.__rj=qx.fx.Base.EffectState.IDLE;
}},destruct:function(){this.__rk=this.__rj=null;
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
(function(){var h="qx.theme.manager.Icon",g="Theme",f="_applyTheme",e="singleton";
qx.Class.define(h,{type:e,extend:qx.core.Object,properties:{theme:{check:g,nullable:true,apply:f}},members:{_applyTheme:function(a,b){var d=qx.util.AliasManager.getInstance();

if(b){for(var c in b.aliases){d.remove(c);
}}
if(a){for(var c in a.aliases){d.add(c,a.aliases[c]);
}}}}});
})();
(function(){var r="bold",q="widget",p="black-window-bg",o="black-button-text-pressed",n="black-button-text",m="button",l="calc-button-pressed",k="black-window-caption",j="calc-display",i="calc-button",e="center",h="middle",g="calc-window",d="shadow-window",c="showcase.page.theme.calc.theme.appearance.Black",f="display";
qx.Theme.define(c,{appearances:{"calculator":{style:function(u){return {backgroundColor:p,decorator:g,shadow:d,contentPadding:[6,8,8,8]};
}},"calculator/pane":q,"calculator/captionbar":q,"calculator/title":{style:function(t){return {alignY:h,textAlign:e,font:r,textColor:k};
}},"calculator/icon":{style:function(a){return {margin:[3,8,0,8]};
}},"display":{style:function(x){return {decorator:j,marginBottom:8,height:51,padding:[0,20]};
}},"display/label":{style:function(w){return {font:r,marginLeft:5};
}},"display/memory":{style:function(v){return {marginLeft:5};
}},"display/operation":{style:function(b){return {marginLeft:50};
}},"calculator/display":f,"calculator-button":{alias:m,style:function(s){return {textColor:s.pressed?o:n,decorator:s.pressed?l:i,center:true,padding:s.pressed?[1,8,3,8]:[2,8]};
}}}});
})();
(function(){var q="resize",p="interval",o="__qI",n="body",m="qx.event.handler.ElementResize";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(t){arguments.callee.base.call(this);
this.__qG=t;
this.__qH={};
this.__qI=new qx.event.Timer(200);
this.__qI.addListener(p,this._onInterval,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{resize:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__qH:null,__qG:null,__qI:null,canHandleEvent:function(r,s){return r.tagName.toLowerCase()!==n;
},registerEvent:function(u,v,w){var y=qx.core.ObjectRegistry.toHashCode(u);
var x=this.__qH;

if(!x[y]){x[y]={element:u,width:qx.bom.element.Dimension.getWidth(u),height:qx.bom.element.Dimension.getHeight(u)};
this.__qI.start();
}},unregisterEvent:function(h,i,j){var l=qx.core.ObjectRegistry.toHashCode(h);
var k=this.__qH;

if(k[l]){delete k[l];

if(qx.lang.Object.isEmpty(k)){this.__qI.stop();
}}},_onInterval:function(e){var b=this.__qH;

for(var f in b){var g=b[f];
var a=g.element;
var d=qx.bom.element.Dimension.getWidth(a);
var c=qx.bom.element.Dimension.getHeight(a);

if(g.height!==c||g.width!==d){qx.event.Registration.fireNonBubblingEvent(a,q,qx.event.type.Data,[{width:d,oldWidth:g.width,height:c,oldHeight:g.height}]);
g.width=d;
g.height=c;
}}}},destruct:function(){this.__qG=this.__qH=null;
this._disposeObjects(o);
},defer:function(z){qx.event.Registration.addHandler(z);
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
(function(){var u="_applyStyle",t="Color",s="px",r="solid",q="dotted",p="double",o="dashed",n="",m="_applyWidth",l="qx.ui.decoration.Uniform",i="px ",k=" ",j="scale",h="PositiveInteger",g="absolute";
qx.Class.define(l,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){arguments.callee.base.call(this);
if(a!=null){this.setWidth(a);
}
if(b!=null){this.setStyle(b);
}
if(c!=null){this.setColor(c);
}},properties:{width:{check:h,init:0,apply:m},style:{nullable:true,check:[r,q,o,p],init:r,apply:u},color:{nullable:true,check:t,apply:u},backgroundColor:{check:t,nullable:true,apply:u}},members:{__po:null,_getDefaultInsets:function(){var v=this.getWidth();
return {top:v,right:v,bottom:v,left:v};
},_isInitialized:function(){return !!this.__po;
},getMarkup:function(){if(this.__po){return this.__po;
}var w={position:g,top:0,left:0};
var x=this.getWidth();
{};
var z=qx.theme.manager.Color.getInstance();
w.border=x+i+this.getStyle()+k+z.resolve(this.getColor());
var y=this._generateBackgroundMarkup(w);
return this.__po=y;
},resize:function(A,B,C){var E=this.getBackgroundImage()&&this.getBackgroundRepeat()==j;

if(E||qx.bom.client.Feature.CONTENT_BOX){var D=this.getWidth()*2;
B-=D;
C-=D;
if(B<0){B=0;
}
if(C<0){C=0;
}}A.style.width=B+s;
A.style.height=C+s;
},tint:function(d,e){var f=qx.theme.manager.Color.getInstance();

if(e==null){e=this.getBackgroundColor();
}d.style.backgroundColor=f.resolve(e)||n;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__po=null;
}});
})();
(function(){var f="px",e="qx.ui.decoration.Background",d="",c="_applyStyle",b="Color",a="absolute";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(g){arguments.callee.base.call(this);

if(g!=null){this.setBackgroundColor(g);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__lk:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lk;
},getMarkup:function(){if(this.__lk){return this.__lk;
}var k={position:a,top:0,left:0};
var l=this._generateBackgroundMarkup(k);
return this.__lk=l;
},resize:function(h,i,j){h.style.width=i+f;
h.style.height=j+f;
},tint:function(m,n){var o=qx.theme.manager.Color.getInstance();

if(n==null){n=this.getBackgroundColor();
}m.style.backgroundColor=o.resolve(n)||d;
},_applyStyle:function(){{};
}},destruct:function(){this.__lk=null;
}});
})();
(function(){var r="_applyStyle",q="solid",p="Color",o="double",n="px ",m="dotted",l="_applyWidth",k="dashed",j="Number",i=" ",N="shorthand",M="px",L="widthTop",K="styleRight",J="styleLeft",I="widthLeft",H="widthBottom",G="styleTop",F="colorBottom",E="styleBottom",y="widthRight",z="colorLeft",w="colorRight",x="colorTop",u="scale",v="border-top",s="border-left",t="border-right",A="qx.ui.decoration.Single",B="",D="border-bottom",C="absolute";
qx.Class.define(A,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){arguments.callee.base.call(this);
if(a!=null){this.setWidth(a);
}
if(b!=null){this.setStyle(b);
}
if(c!=null){this.setColor(c);
}},properties:{widthTop:{check:j,init:0,apply:l},widthRight:{check:j,init:0,apply:l},widthBottom:{check:j,init:0,apply:l},widthLeft:{check:j,init:0,apply:l},styleTop:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleRight:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleBottom:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleLeft:{nullable:true,check:[q,m,k,o],init:q,apply:r},colorTop:{nullable:true,check:p,apply:r},colorRight:{nullable:true,check:p,apply:r},colorBottom:{nullable:true,check:p,apply:r},colorLeft:{nullable:true,check:p,apply:r},backgroundColor:{check:p,nullable:true,apply:r},left:{group:[I,J,z]},right:{group:[y,K,w]},top:{group:[L,G,x]},bottom:{group:[H,E,F]},width:{group:[L,y,H,I],mode:N},style:{group:[G,K,E,J],mode:N},color:{group:[x,w,F,z],mode:N}},members:{__nh:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__nh;
},getMarkup:function(d){if(this.__nh){return this.__nh;
}var e=qx.theme.manager.Color.getInstance();
var f={};
var h=this.getWidthTop();

if(h>0){f[v]=h+n+this.getStyleTop()+i+e.resolve(this.getColorTop());
}var h=this.getWidthRight();

if(h>0){f[t]=h+n+this.getStyleRight()+i+e.resolve(this.getColorRight());
}var h=this.getWidthBottom();

if(h>0){f[D]=h+n+this.getStyleBottom()+i+e.resolve(this.getColorBottom());
}var h=this.getWidthLeft();

if(h>0){f[s]=h+n+this.getStyleLeft()+i+e.resolve(this.getColorLeft());
}{};
f.position=C;
f.top=0;
f.left=0;
var g=this._generateBackgroundMarkup(f);
return this.__nh=g;
},resize:function(R,S,T){var V=this.getBackgroundImage()&&this.getBackgroundRepeat()==u;

if(V||qx.bom.client.Feature.CONTENT_BOX){var U=this.getInsets();
S-=U.left+U.right;
T-=U.top+U.bottom;
if(S<0){S=0;
}
if(T<0){T=0;
}}R.style.width=S+M;
R.style.height=T+M;
},tint:function(O,P){var Q=qx.theme.manager.Color.getInstance();

if(P==null){P=this.getBackgroundColor();
}O.style.backgroundColor=Q.resolve(P)||B;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__nh=null;
}});
})();
(function(){var C="_applyStyle",B='"></div>',A="Color",z="1px",y='<div style="',x='border:',w="1px solid ",v="",u=";",t="px",O='</div>',N="qx.ui.decoration.Beveled",M='<div style="position:absolute;top:1px;left:1px;',L='border-bottom:',K='border-right:',J='border-left:',I='border-top:',H="Number",G='<div style="position:absolute;top:1px;left:0px;',F='position:absolute;top:0px;left:1px;',D='<div style="overflow:hidden;font-size:0;line-height:0;">',E="absolute";
qx.Class.define(N,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(P,Q,R){arguments.callee.base.call(this);
if(P!=null){this.setOuterColor(P);
}
if(Q!=null){this.setInnerColor(Q);
}
if(R!=null){this.setInnerOpacity(R);
}},properties:{innerColor:{check:A,nullable:true,apply:C},innerOpacity:{check:H,init:1,apply:C},outerColor:{check:A,nullable:true,apply:C},backgroundColor:{check:A,nullable:true,apply:C}},members:{__oO:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__oO;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__oO){return this.__oO;
}var d=qx.theme.manager.Color.getInstance();
var e=[];
var h=w+d.resolve(this.getOuterColor())+u;
var g=w+d.resolve(this.getInnerColor())+u;
e.push(D);
e.push(y);
e.push(x,h);
e.push(qx.bom.element.Opacity.compile(0.35));
e.push(B);
e.push(G);
e.push(J,h);
e.push(K,h);
e.push(B);
e.push(y);
e.push(F);
e.push(I,h);
e.push(L,h);
e.push(B);
var f={position:E,top:z,left:z};
e.push(this._generateBackgroundMarkup(f));
e.push(M);
e.push(x,g);
e.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
e.push(B);
e.push(O);
return this.__oO=e.join(v);
},resize:function(i,j,k){if(j<4){j=4;
}
if(k<4){k=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=j-2;
var outerHeight=k-2;
var q=outerWidth;
var p=outerHeight;
var innerWidth=j-4;
var innerHeight=k-4;
}else{var outerWidth=j;
var outerHeight=k;
var q=j-2;
var p=k-2;
var innerWidth=q;
var innerHeight=p;
}var s=t;
var o=i.childNodes[0].style;
o.width=outerWidth+s;
o.height=outerHeight+s;
var n=i.childNodes[1].style;
n.width=outerWidth+s;
n.height=p+s;
var m=i.childNodes[2].style;
m.width=q+s;
m.height=outerHeight+s;
var l=i.childNodes[3].style;
l.width=q+s;
l.height=p+s;
var r=i.childNodes[4].style;
r.width=innerWidth+s;
r.height=innerHeight+s;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.childNodes[3].style.backgroundColor=c.resolve(b)||v;
}},destruct:function(){this.__oO=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bq="decoration/table/header-cell.png",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="background-pane",bk="repeat-y",bj="decoration/form/input-focused.png",bi="#33508D",bh="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="decoration/tabview/tab-button-left-inactive.png",B="decoration/groupbox/groupbox.png",C="#FAFAFA",M="decoration/pane/pane.png",J="decoration/menu/background.png",U="decoration/toolbar/toolbar-part.gif",P="decoration/tabview/tab-button-top-inactive.png",bd="decoration/menu/bar-background.png",ba="center",F="decoration/tabview/tab-button-bottom-active.png",bg="decoration/form/button-hovered.png",bf="decoration/form/tooltip-error-arrow.png",be="decoration/window/captionbar-inactive.png",E="qx/decoration/Modern",H="decoration/window/statusbar.png",I="border-focused",L="table-focus-indicator",N="#F2F2F2",Q="decoration/form/button-checked-c.png",W="decoration/scrollbar/scrollbar-bg-horizontal.png",bc="qx.theme.modern.Decoration",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="decoration/window/captionbar-active.png",x="decoration/tabview/tab-button-left-active.png",y="background-splitpane",K="decoration/form/button-checked-focused.png",b="#C5C5C5",c="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",z="#b8b8b8",A="decoration/shadow/shadow.png";
qx.Theme.define(bc,{aliases:{decoration:E},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bh,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bh,backgroundRepeat:l,bottom:[2,m,bi]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bi]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:M,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bf,backgroundPositionY:ba,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:W,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bk}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:c,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:Q,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:z,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:bk}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bl,width:3,color:y,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bl,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:be}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:L,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthRight:1,colorRight:N,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b,widthBottom:1,colorBottom:C}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bd,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var s="",r='#',q="String",p="request",o="mshtml",n="changeTitle",m="abstract",l="_applyState",k="qx.client",j="changeState",g="qx.bom.History",i="_applyTitle",h="qx.event.type.Data";
qx.Class.define(g,{extend:qx.core.Object,type:m,construct:function(){arguments.callee.base.call(this);
this._baseUrl=window.location.href.split(r)[0]+r;
this.__qJ={};
this._setInitialState();
},events:{"request":h},statics:{SUPPORTS_HASH_CHANGE_EVENT:(qx.bom.client.Engine.MSHTML&&document.documentMode>=8)||(!qx.bom.client.Engine.MSHTML&&document.documentMode&&"onhashchange" in window),getInstance:function(){if(!this.$$instance){if(this.SUPPORTS_HASH_CHANGE_EVENT){this.$$instance=new qx.bom.NativeHistory();
}else if(qx.core.Variant.isSet(k,o)){this.$$instance=new qx.bom.IframeHistory();
}else{this.$$instance=new qx.bom.NativeHistory();
}}return this.$$instance;
}},properties:{title:{check:q,event:n,nullable:true,apply:i},state:{check:q,event:j,nullable:true,apply:l}},members:{__qJ:null,_applyState:function(e,f){this._writeState(e);
},_setInitialState:function(){this.setState(this._readState());
},_encode:function(b){if(qx.lang.Type.isString(b)){return encodeURIComponent(b);
}return s;
},_decode:function(u){if(qx.lang.Type.isString(u)){return decodeURIComponent(u);
}return s;
},_applyTitle:function(y){if(y!=null){document.title=y||s;
}},addToHistory:function(c,d){if(!qx.lang.Type.isString(c)){c=c+s;
}
if(qx.lang.Type.isString(d)){this.setTitle(d);
this.__qJ[c]=d;
}
if(this.getState()!==c){this._writeState(c);
}},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_onHistoryLoad:function(t){this.setState(t);
this.fireDataEvent(p,t);

if(this.__qJ[t]!=null){this.setTitle(this.__qJ[t]);
}},_readState:function(){throw new Error("Abstract method call");
},_writeState:function(){throw new Error("Abstract method call");
},_setHash:function(v){var w=this._baseUrl+(v||s);
var x=window.location;

if(w!=x.href){x.href=w;
}},_getHash:function(){var z=/#(.*)$/.exec(window.location.href);
return z&&z[1]?z[1]:s;
},setTimeoutInterval:function(a){{};
},getTimeoutInterval:function(){{};
return 100;
},resetTimeoutInterval:function(){{};
}},destruct:function(){this.__qJ=null;
}});
})();
(function(){var f="hashchange",e="interval",d="qx.bom.NativeHistory",c="qx.client";
qx.Class.define(d,{extend:qx.bom.History,construct:function(){arguments.callee.base.call(this);
this.__qL();
},members:{__qK:null,__qL:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){this.__qK=qx.lang.Function.bind(this.__qN,this);
qx.bom.Event.addNativeListener(window,f,this.__qK);
}else{qx.event.Idle.getInstance().addListener(e,this.__qN,this);
}},__qM:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){qx.bom.Event.removeNativeListener(window,f,this.__qK);
}else{qx.event.Idle.getInstance().removeListener(e,this.__qN,this);
}},__qN:function(){var b=this._readState();

if(qx.lang.Type.isString(b)&&b!=this.getState()){this._onHistoryLoad(b);
}},_readState:function(){return this._decode(this._getHash());
},_writeState:qx.core.Variant.select(c,{"opera":function(a){qx.event.Timer.once(function(){this._setHash(this._encode(a));
},this,0);
},"default":function(g){this._setHash(this._encode(g));
}})},destruct:function(){this.__qM();
}});
})();
(function(){var j="HTML Editor",i="Format some text with underline, bold, italic, ...",h="Insert a numbered or bullet point list.",g="supplement. The UI controls of the toolbar can be used to interact ",f="The Html Editor, embedded here in a window with menu bar and toolbar, provides basic",e="Editor widget",d="showcase.page.htmleditor.Content",c="showcase/htmleditor/icon.png",b="Low-Level editor",a="htmleditor",v="Align the text on the right side.",u="Menu",t="Overview HTML Editing",s=" cross-browser HTML editing capabilities and is available both as a low-level component",r="MenuBar",q="HTML Area",p="You can insert HTML tables, images, hyperlinks, ...",o="with the HTML editing component.",n="showcase.page.htmleditor.Page",m="Try reverting your changes by using the undo button.",k=" and as a qooxdoo widget. It offers events, allowing easy implementation of a toolbar ",l="Toolbar";
qx.Class.define(n,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:j,part:a,icon:c,contentClass:d,description:showcase.page.DescriptionBuilder.build(j,this.__Hf,this.__Hg,this.__Hh,this.__Hi,this.__Hj,this.__Hk)});
},members:{__Hf:f+s+k+g+o,__Hg:{"Text Formatting":i,"Alignment":v,"Lists":h,"Redo/Undo":m},__Hh:{"Inserting":p},__Hi:{"ui_html_editing":t},__Hj:{"#bom~HtmlArea.html":b,"#widget~HtmlArea.html":e},__Hk:{"#qx.bom.htmlarea":q,"#qx.ui.toolbar":l,"#qx.ui.menubar":r,"#qx.ui.menu":u}}});
})();
(function(){var j="Form",i="Click the \"MenuButton\" to open the menu.",h="The form namespace",g="Form showcase",f="Data bound form",e="widgets. The widgets are grouped by type.",d="Open the select box to see the list of selectables.",c="Double column form renderer",b="Multi page form",a="showcase.page.form.Content",z="Custom form renderer",y="Form controller for binding",x="Form validation",w="form",v="This form demo shows the complete set of form ",u="showcase/form/icon.png",t="Data binding form controller",s="showcase.page.form.Page",r="Default form renderer",q="The placeholder disappears once you start to type in a text field.",o="Form handling",p="Form renderer",m="Complete set of form widgets.",n="Hold the repeat button to see the value increase.",k="Try cycling through the widgets by pressing the tab key.",l="Form renderer using placeholders";
qx.Class.define(s,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:j,part:w,icon:u,contentClass:a,description:showcase.page.DescriptionBuilder.build(j,this.__Hl,this.__Hm,this.__Hn,this.__Ho,this.__Hp,this.__Hq)});
},members:{__Hl:v+e,__Hm:{"Selection":d,"Text":q,"Buttons":n,"MenuButton":i},__Hn:{"Widgets":m,"Keyboard Navigation":k},__Ho:{"ui_form_handling":o},__Hp:{"#ui~FormRenderer.html":r,"#ui~FormRendererCustom.html":z,"#ui~FormRendererDouble.html":c,"#ui~FormRendererPlaceholder.html":l,"#ui~FormValidator.html":x,"#ui~MultiPageForm.html":b,"#showcase~Form.html":g,"#data~FormController.html":t,"#data~Form.html":f},__Hq:{"#qx.ui.form":h,"#qx.ui.form.renderer":p,"#qx.data.controller.Form":y}}});
})();
(function(){var gq="button-frame",gp="atom",go="widget",gn="main",gm="button",gl="text-selected",gk="image",gj="bold",gi="middle",gh="background-light",eT="text-disabled",eS="groupbox",eR="decoration/arrows/down.png",eQ="cell",eP="selected",eO="border-invalid",eN="input",eM="input-disabled",eL="menu-button",eK="input-focused-invalid",gx="toolbar-button",gy="spinner",gv="input-focused",gw="popup",gt="tooltip",gu="list",gr="tree-item",gs="treevirtual-contract",gz="scrollbar",gA="datechooser/nav-button",fP="text-hovered",fO="center",fR="treevirtual-expand",fQ="textfield",fT="label",fS="decoration/arrows/right.png",fV="background-application",fU="radiobutton",fN="white",fM="invalid",cO="combobox",cP="right-top",cQ=".png",cR="checkbox",cS="text-title",cT="qx/static/blank.gif",cU="scrollbar/button",cV="right",cW="combobox/button",cX="icon/16/places/folder.png",gO="text-label",gN="decoration/tree/closed.png",gM="scrollbar-slider-horizontal",gL="decoration/arrows/left.png",gS="button-focused",gR="text-light",gQ="menu-slidebar-button",gP="text-input",gU="slidebar/button-forward",gT="background-splitpane",dR="decoration/tree/open.png",dS="default",dP="decoration/arrows/down-small.png",dQ="datechooser",dV="slidebar/button-backward",dW="selectbox",dT="treevirtual-folder",dU="shadow-popup",dN="icon/16/mimetypes/office-document.png",dO="background-medium",dt=".gif",ds="table",dv="decoration/arrows/up.png",du="decoration/form/",dp="",dn="-invalid",dr="icon/16/places/folder-open.png",dq="button-checked",dm="decoration/window/maximize-active-hovered.png",dl="radiobutton-hovered",ed="decoration/cursors/",ee="slidebar",ef="tooltip-error-arrow",eg="table-scroller-focus-indicator",dY="move-frame",ea="nodrop",eb="decoration/table/boolean-true.png",ec="table-header-cell",eh="menu",ei="app-header",dG="row-layer",dF="text-inactive",dE="move",dD="radiobutton-checked-focused",dC="decoration/window/restore-active-hovered.png",dB="shadow-window",dA="table-column-button",dz="right.png",dK="tabview-page-button-bottom-inactive",dJ="tooltip-error",ej="window-statusbar",ek="button-hovered",el="decoration/scrollbar/scrollbar-",em="background-tip",en="scrollbar-slider-horizontal-disabled",eo="table-scroller-header",ep="radiobutton-disabled",eq="button-pressed",er="table-pane",es="decoration/window/close-active.png",fc="native",fb="checkbox-hovered",fa="button-invalid-shadow",eY="checkbox-checked",fg="decoration/window/minimize-active-hovered.png",ff="menubar",fe="icon/16/actions/dialog-cancel.png",fd="tabview-page-button-top-inactive",fk="tabview-page-button-left-inactive",fj="menu-slidebar",fH="toolbar-button-checked",fI="decoration/tree/open-selected.png",fF="radiobutton-checked",fG="decoration/window/minimize-inactive.png",fD="icon/16/apps/office-calendar.png",fE="group",fB="tabview-page-button-right-inactive",fC="decoration/window/minimize-active.png",fJ="decoration/window/restore-inactive.png",fK="checkbox-checked-focused",ga="splitpane",fY="combobox/textfield",gc="button-preselected-focused",gb="decoration/window/close-active-hovered.png",ge="qx/icon/Tango/16/actions/window-close.png",gd="checkbox-pressed",gg="button-disabled",gf="selected-dragover",fX="border-separator",fW="decoration/window/maximize-inactive.png",gH="dragover",gI="scrollarea",gJ="scrollbar-vertical",gK="decoration/menu/checkbox-invert.gif",gD="decoration/toolbar/toolbar-handle-knob.gif",gE="icon/22/mimetypes/office-document.png",gF="button-preselected",gG="button-checked-focused",gB="up.png",gC="best-fit",cN="decoration/tree/closed-selected.png",cM="qx.theme.modern.Appearance",cL="text-active",cK="checkbox-disabled",cJ="toolbar-button-hovered",cI="progressive-table-header",cH="decoration/table/select-column-order.png",cG="decoration/menu/radiobutton.gif",cF="decoration/arrows/forward.png",cE="decoration/table/descending",db="window-captionbar-active",dc="checkbox-checked-hovered",cY="scrollbar-slider-vertical",da="toolbar",df="alias",dg="decoration/window/restore-active.png",dd="decoration/table/boolean-false.png",de="checkbox-checked-disabled",di="icon/32/mimetypes/office-document.png",dj="radiobutton-checked-disabled",fo="tabview-pane",fi="decoration/arrows/rewind.png",fv="checkbox-focused",fr="top",eW="#EEE",eU="icon/16/actions/dialog-ok.png",dx="radiobutton-checked-hovered",eX="table-header-cell-hovered",dI="window",dH="text-gray",eC="decoration/menu/radiobutton-invert.gif",eD="text-placeholder",eE="slider",eF="keep-align",eG="down.png",eH="tabview-page-button-top-active",eI="icon/32/places/folder-open.png",eJ="icon/22/places/folder.png",ez="decoration/window/maximize-active.png",eA="checkbox-checked-pressed",eV="decoration/window/close-inactive.png",fu="tabview-page-button-left-active",ft="toolbar-part",fs="decoration/splitpane/knob-vertical.png",fz="icon/22/places/folder-open.png",fy="radiobutton-checked-pressed",fx="table-statusbar",fw="radiobutton-pressed",fq="window-captionbar-inactive",fp="copy",dh="radiobutton-focused",dM="decoration/arrows/down-invert.png",dL="decoration/menu/checkbox.gif",fh="decoration/splitpane/knob-horizontal.png",dX="decoration/table/ascending",fn="icon/32/places/folder.png",fm="toolbar-separator",fl="tabview-page-button-bottom-active",dw="decoration/arrows/up-small.png",fA="decoration/arrows/up-invert.png",dk="small",dy="tabview-page-button-right-active",et="-disabled",eu="scrollbar-horizontal",ev="progressive-table-header-cell",ew="menu-separator",ex="pane",ey="decoration/arrows/right-invert.png",fL="left.png",eB="icon/16/actions/view-refresh.png";
qx.Theme.define(cM,{appearances:{"widget":{},"root":{style:function(X){return {backgroundColor:fV,textColor:gO,font:dS};
}},"label":{style:function(bV){return {textColor:bV.disabled?eT:undefined};
}},"move-frame":{style:function(hL){return {decorator:gn};
}},"resize-frame":dY,"dragdrop-cursor":{style:function(hu){var hv=ea;

if(hu.copy){hv=fp;
}else if(hu.move){hv=dE;
}else if(hu.alias){hv=df;
}return {source:ed+hv+dt,position:cP,offset:[2,16,2,6]};
}},"image":{style:function(cv){return {opacity:!cv.replacement&&cv.disabled?0.3:1};
}},"atom":{},"atom/label":fT,"atom/icon":gk,"popup":{style:function(hS){return {decorator:gn,backgroundColor:gh,shadow:dU};
}},"button-frame":{alias:gp,style:function(hV){var hX,hW;

if(hV.checked&&hV.focused&&!hV.inner){hX=gG;
hW=undefined;
}else if(hV.disabled){hX=gg;
hW=undefined;
}else if(hV.pressed){hX=eq;
hW=fP;
}else if(hV.checked){hX=dq;
hW=undefined;
}else if(hV.hovered){hX=ek;
hW=fP;
}else if(hV.preselected&&hV.focused&&!hV.inner){hX=gc;
hW=fP;
}else if(hV.preselected){hX=gF;
hW=fP;
}else if(hV.focused&&!hV.inner){hX=gS;
hW=undefined;
}else{hX=gm;
hW=undefined;
}return {decorator:hX,textColor:hW,shadow:hV.invalid&&!hV.disabled?fa:undefined};
}},"button-frame/image":{style:function(hs){return {opacity:!hs.replacement&&hs.disabled?0.5:1};
}},"button":{alias:gq,include:gq,style:function(bw){return {padding:[2,8],center:true};
}},"hover-button":{alias:gp,include:gp,style:function(bC){return {decorator:bC.hovered?eP:undefined,textColor:bC.hovered?gl:undefined};
}},"splitbutton":{},"splitbutton/button":gm,"splitbutton/arrow":{alias:gm,include:gm,style:function(c){return {icon:eR,padding:2,marginLeft:1};
}},"checkbox":{alias:gp,style:function(d){var f;

if(d.checked&&d.focused){f=fK;
}else if(d.checked&&d.disabled){f=de;
}else if(d.checked&&d.pressed){f=eA;
}else if(d.checked&&d.hovered){f=dc;
}else if(d.checked){f=eY;
}else if(d.disabled){f=cK;
}else if(d.focused){f=fv;
}else if(d.pressed){f=gd;
}else if(d.hovered){f=fb;
}else{f=cR;
}var e=d.invalid&&!d.disabled?dn:dp;
return {icon:du+f+e+cQ,gap:6};
}},"radiobutton":{alias:gp,style:function(p){var r;

if(p.checked&&p.focused){r=dD;
}else if(p.checked&&p.disabled){r=dj;
}else if(p.checked&&p.pressed){r=fy;
}else if(p.checked&&p.hovered){r=dx;
}else if(p.checked){r=fF;
}else if(p.disabled){r=ep;
}else if(p.focused){r=dh;
}else if(p.pressed){r=fw;
}else if(p.hovered){r=dl;
}else{r=fU;
}var q=p.invalid&&!p.disabled?dn:dp;
return {icon:du+r+q+cQ,gap:6};
}},"textfield":{style:function(H){var M;
var K=!!H.focused;
var L=!!H.invalid;
var I=!!H.disabled;

if(K&&L&&!I){M=eK;
}else if(K&&!L&&!I){M=gv;
}else if(I){M=eM;
}else if(!K&&L&&!I){M=eO;
}else{M=eN;
}var J;

if(H.disabled){J=eT;
}else if(H.showingPlaceholder){J=eD;
}else{J=gP;
}return {decorator:M,padding:[2,4,1],textColor:J};
}},"textarea":{include:fQ,style:function(bj){return {padding:4};
}},"spinner":{style:function(hk){var ho;
var hm=!!hk.focused;
var hn=!!hk.invalid;
var hl=!!hk.disabled;

if(hm&&hn&&!hl){ho=eK;
}else if(hm&&!hn&&!hl){ho=gv;
}else if(hl){ho=eM;
}else if(!hm&&hn&&!hl){ho=eO;
}else{ho=eN;
}return {decorator:ho};
}},"spinner/textfield":{style:function(O){return {marginRight:2,padding:[2,4,1],textColor:O.disabled?eT:gP};
}},"spinner/upbutton":{alias:gq,include:gq,style:function(ce){return {icon:dw,padding:ce.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:gq,include:gq,style:function(C){return {icon:dP,padding:C.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":cO,"datefield/button":{alias:cW,include:cW,style:function(bR){return {icon:fD,padding:[0,3],decorator:undefined};
}},"datefield/textfield":fY,"datefield/list":{alias:dQ,include:dQ,style:function(bT){return {decorator:undefined};
}},"groupbox":{style:function(U){return {legendPosition:fr};
}},"groupbox/legend":{alias:gp,style:function(hQ){return {padding:[1,0,1,4],textColor:hQ.invalid?fM:cS,font:gj};
}},"groupbox/frame":{style:function(bk){return {padding:12,decorator:fE};
}},"check-groupbox":eS,"check-groupbox/legend":{alias:cR,include:cR,style:function(cg){return {padding:[1,0,1,4],textColor:cg.invalid?fM:cS,font:gj};
}},"radio-groupbox":eS,"radio-groupbox/legend":{alias:fU,include:fU,style:function(bl){return {padding:[1,0,1,4],textColor:bl.invalid?fM:cS,font:gj};
}},"scrollarea":{style:function(bG){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(bI){return {backgroundColor:fV};
}},"scrollarea/pane":go,"scrollarea/scrollbar-x":gz,"scrollarea/scrollbar-y":gz,"scrollbar":{style:function(hj){if(hj[fc]){return {};
}return {width:hj.horizontal?undefined:16,height:hj.horizontal?16:undefined,decorator:hj.horizontal?eu:gJ,padding:1};
}},"scrollbar/slider":{alias:eE,style:function(bH){return {padding:bH.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:gq,style:function(bK){var bL=bK.horizontal?gM:cY;

if(bK.disabled){bL+=et;
}return {decorator:bL,minHeight:bK.horizontal?undefined:9,minWidth:bK.horizontal?9:undefined};
}},"scrollbar/button":{alias:gq,include:gq,style:function(hD){var hE=el;

if(hD.left){hE+=fL;
}else if(hD.right){hE+=dz;
}else if(hD.up){hE+=gB;
}else{hE+=eG;
}
if(hD.left||hD.right){return {padding:[0,0,0,hD.left?3:4],icon:hE,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:hE,width:14,height:15};
}}},"scrollbar/button-begin":cU,"scrollbar/button-end":cU,"slider":{style:function(hy){var hC;
var hA=!!hy.focused;
var hB=!!hy.invalid;
var hz=!!hy.disabled;

if(hA&&hB&&!hz){hC=eK;
}else if(hA&&!hB&&!hz){hC=gv;
}else if(hz){hC=eM;
}else if(!hA&&hB&&!hz){hC=eO;
}else{hC=eN;
}return {decorator:hC};
}},"slider/knob":{include:gq,style:function(bN){return {decorator:bN.disabled?en:gM,shadow:undefined,height:14,width:14};
}},"list":{alias:gI,style:function(w){var A;
var y=!!w.focused;
var z=!!w.invalid;
var x=!!w.disabled;

if(y&&z&&!x){A=eK;
}else if(y&&!z&&!x){A=gv;
}else if(x){A=eM;
}else if(!y&&z&&!x){A=eO;
}else{A=eN;
}return {backgroundColor:gh,decorator:A};
}},"list/pane":go,"listitem":{alias:gp,style:function(be){var bf;

if(be.dragover){bf=be.selected?gf:gH;
}else{bf=be.selected?eP:undefined;
}return {padding:be.dragover?[4,4,2,4]:4,textColor:be.selected?gl:undefined,decorator:bf};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gq,include:gq,style:function(v){return {padding:5,center:true,icon:v.vertical?eR:fS};
}},"slidebar/button-backward":{alias:gq,include:gq,style:function(cl){return {padding:5,center:true,icon:cl.vertical?dv:gL};
}},"tabview":{style:function(bv){return {contentPadding:16};
}},"tabview/bar":{alias:ee,style:function(ic){var id={marginBottom:ic.barTop?-1:0,marginTop:ic.barBottom?-4:0,marginLeft:ic.barRight?-3:0,marginRight:ic.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(ic.barTop||ic.barBottom){id.paddingLeft=5;
id.paddingRight=7;
}else{id.paddingTop=5;
id.paddingBottom=7;
}return id;
}},"tabview/bar/button-forward":{include:gU,alias:gU,style:function(T){if(T.barTop||T.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:dV,alias:dV,style:function(co){if(co.barTop||co.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(bd){return {decorator:fo,minHeight:100,marginBottom:bd.barBottom?-1:0,marginTop:bd.barTop?-1:0,marginLeft:bd.barLeft?-1:0,marginRight:bd.barRight?-1:0};
}},"tabview-page":go,"tabview-page/button":{alias:gp,style:function(gY){var hf,hb=0;
var he=0,ha=0,hc=0,hd=0;

if(gY.checked){if(gY.barTop){hf=eH;
hb=[6,14];
hc=gY.firstTab?0:-5;
hd=gY.lastTab?0:-5;
}else if(gY.barBottom){hf=fl;
hb=[6,14];
hc=gY.firstTab?0:-5;
hd=gY.lastTab?0:-5;
}else if(gY.barRight){hf=dy;
hb=[6,13];
he=gY.firstTab?0:-5;
ha=gY.lastTab?0:-5;
}else{hf=fu;
hb=[6,13];
he=gY.firstTab?0:-5;
ha=gY.lastTab?0:-5;
}}else{if(gY.barTop){hf=fd;
hb=[4,10];
he=4;
hc=gY.firstTab?5:1;
hd=1;
}else if(gY.barBottom){hf=dK;
hb=[4,10];
ha=4;
hc=gY.firstTab?5:1;
hd=1;
}else if(gY.barRight){hf=fB;
hb=[4,10];
hd=5;
he=gY.firstTab?5:1;
ha=1;
hc=1;
}else{hf=fk;
hb=[4,10];
hc=5;
he=gY.firstTab?5:1;
ha=1;
hd=1;
}}return {zIndex:gY.checked?10:5,decorator:hf,padding:hb,marginTop:he,marginBottom:ha,marginLeft:hc,marginRight:hd,textColor:gY.checked?cL:dF};
}},"tabview-page/button/close-button":{alias:gp,style:function(ck){return {icon:ge};
}},"toolbar":{style:function(D){return {decorator:da,spacing:2};
}},"toolbar/part":{style:function(cf){return {decorator:ft,spacing:2};
}},"toolbar/part/container":{style:function(hh){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(cu){return {source:gD,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:gp,style:function(bJ){return {marginTop:2,marginBottom:2,padding:(bJ.pressed||bJ.checked||bJ.hovered)&&!bJ.disabled||(bJ.disabled&&bJ.checked)?3:5,decorator:bJ.pressed||(bJ.checked&&!bJ.hovered)||(bJ.checked&&bJ.disabled)?fH:bJ.hovered&&!bJ.disabled?cJ:undefined};
}},"toolbar-menubutton":{alias:gx,include:gx,style:function(hO){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:gk,include:gk,style:function(hI){return {source:dP};
}},"toolbar-splitbutton":{style:function(ct){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:gx,include:gx,style:function(bb){return {icon:eR,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:gx,include:gx,style:function(u){return {padding:u.pressed||u.checked?1:u.hovered?1:3,icon:eR,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(ba){return {decorator:fm,margin:7};
}},"tree":gu,"tree-item":{style:function(hN){return {padding:[2,6],textColor:hN.selected?gl:undefined,decorator:hN.selected?eP:undefined};
}},"tree-item/icon":{include:gk,style:function(P){return {paddingRight:5};
}},"tree-item/label":fT,"tree-item/open":{include:gk,style:function(cm){var cn;

if(cm.selected&&cm.opened){cn=fI;
}else if(cm.selected&&!cm.opened){cn=cN;
}else if(cm.opened){cn=dR;
}else{cn=gN;
}return {padding:[0,5,0,2],source:cn};
}},"tree-folder":{include:gr,alias:gr,style:function(bh){var bi;

if(bh.small){bi=bh.opened?dr:cX;
}else if(bh.large){bi=bh.opened?eI:fn;
}else{bi=bh.opened?fz:eJ;
}return {icon:bi};
}},"tree-file":{include:gr,alias:gr,style:function(h){return {icon:h.small?dN:h.large?di:gE};
}},"treevirtual":ds,"treevirtual-folder":{style:function(bM){return {icon:bM.opened?dr:cX};
}},"treevirtual-file":{include:dT,alias:dT,style:function(hJ){return {icon:dN};
}},"treevirtual-line":{style:function(by){return {icon:cT};
}},"treevirtual-contract":{style:function(hR){return {icon:dR,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(k){return {icon:gN,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":gs,"treevirtual-only-expand":fR,"treevirtual-start-contract":gs,"treevirtual-start-expand":fR,"treevirtual-end-contract":gs,"treevirtual-end-expand":fR,"treevirtual-cross-contract":gs,"treevirtual-cross-expand":fR,"treevirtual-end":{style:function(cq){return {icon:cT};
}},"treevirtual-cross":{style:function(bD){return {icon:cT};
}},"tooltip":{include:gw,style:function(R){return {backgroundColor:em,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":gp,"tooltip-error":{include:gt,style:function(o){return {textColor:gl,placeMethod:go,offset:[0,0,0,14],marginTop:-2,position:cP,showTimeout:100,hideTimeout:10000,decorator:dJ,shadow:ef,font:gj};
}},"tooltip-error/atom":gp,"window":{style:function(ib){return {shadow:dB,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(hM){return {decorator:dI};
}},"window/captionbar":{style:function(bS){return {decorator:bS.active?db:fq,textColor:bS.active?fN:dH,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(gX){return {margin:[5,0,3,6]};
}},"window/title":{style:function(bB){return {alignY:gi,font:gj,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:gp,style:function(Q){return {icon:Q.active?Q.hovered?fg:fC:fG,margin:[4,8,2,0]};
}},"window/restore-button":{alias:gp,style:function(cy){return {icon:cy.active?cy.hovered?dC:dg:fJ,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:gp,style:function(B){return {icon:B.active?B.hovered?dm:ez:fW,margin:[4,8,2,0]};
}},"window/close-button":{alias:gp,style:function(hq){return {icon:hq.active?hq.hovered?gb:es:eV,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(br){return {padding:[2,6],decorator:ej,minHeight:18};
}},"window/statusbar-text":{style:function(b){return {font:dk};
}},"iframe":{style:function(bt){return {decorator:gn};
}},"resizer":{style:function(i){return {decorator:ex};
}},"splitpane":{style:function(N){return {decorator:ga};
}},"splitpane/splitter":{style:function(E){return {width:E.horizontal?3:undefined,height:E.vertical?3:undefined,backgroundColor:gT};
}},"splitpane/splitter/knob":{style:function(bm){return {source:bm.horizontal?fh:fs};
}},"splitpane/slider":{style:function(bu){return {width:bu.horizontal?3:undefined,height:bu.vertical?3:undefined,backgroundColor:gT};
}},"selectbox":{alias:gq,include:gq,style:function(gV){return {padding:[2,8]};
}},"selectbox/atom":gp,"selectbox/popup":gw,"selectbox/list":{alias:gu},"selectbox/arrow":{include:gk,style:function(bX){return {source:eR,paddingLeft:5};
}},"datechooser":{style:function(bY){var cd;
var cb=!!bY.focused;
var cc=!!bY.invalid;
var ca=!!bY.disabled;

if(cb&&cc&&!ca){cd=eK;
}else if(cb&&!cc&&!ca){cd=gv;
}else if(ca){cd=eM;
}else if(!cb&&cc&&!ca){cd=eO;
}else{cd=eN;
}return {padding:2,decorator:cd,backgroundColor:gh};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:gq,alias:gq,style:function(bE){var bF={padding:[2,4],shadow:undefined};

if(bE.lastYear){bF.icon=fi;
bF.marginRight=1;
}else if(bE.lastMonth){bF.icon=gL;
}else if(bE.nextYear){bF.icon=cF;
bF.marginLeft=1;
}else if(bE.nextMonth){bF.icon=fS;
}return bF;
}},"datechooser/last-year-button-tooltip":gt,"datechooser/last-month-button-tooltip":gt,"datechooser/next-year-button-tooltip":gt,"datechooser/next-month-button-tooltip":gt,"datechooser/last-year-button":gA,"datechooser/last-month-button":gA,"datechooser/next-month-button":gA,"datechooser/next-year-button":gA,"datechooser/month-year-label":{style:function(bU){return {font:gj,textAlign:fO,textColor:bU.disabled?eT:undefined};
}},"datechooser/date-pane":{style:function(hK){return {textColor:hK.disabled?eT:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(cx){return {textColor:cx.disabled?eT:cx.weekend?gR:undefined,textAlign:fO,paddingTop:2,backgroundColor:dO};
}},"datechooser/week":{style:function(bc){return {textAlign:fO,padding:[2,4],backgroundColor:dO};
}},"datechooser/day":{style:function(bn){return {textAlign:fO,decorator:bn.disabled?undefined:bn.selected?eP:undefined,textColor:bn.disabled?eT:bn.selected?gl:bn.otherMonth?gR:undefined,font:bn.today?gj:undefined,padding:[2,4]};
}},"combobox":{style:function(cz){var cD;
var cB=!!cz.focused;
var cC=!!cz.invalid;
var cA=!!cz.disabled;

if(cB&&cC&&!cA){cD=eK;
}else if(cB&&!cC&&!cA){cD=gv;
}else if(cA){cD=eM;
}else if(!cB&&cC&&!cA){cD=eO;
}else{cD=eN;
}return {decorator:cD};
}},"combobox/popup":gw,"combobox/list":{alias:gu},"combobox/button":{include:gq,alias:gq,style:function(hw){var hx={icon:eR,padding:2};

if(hw.selected){hx.decorator=gS;
}return hx;
}},"combobox/textfield":{include:fQ,style:function(ih){return {decorator:undefined};
}},"menu":{style:function(F){var G={decorator:eh,shadow:dU,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:F.submenu||F.contextmenu?gC:eF};

if(F.submenu){G.position=cP;
G.offset=[-2,-3];
}return G;
}},"menu/slidebar":fj,"menu-slidebar":go,"menu-slidebar-button":{style:function(hF){return {decorator:hF.hovered?eP:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:gQ,style:function(S){return {icon:S.hovered?fA:dv};
}},"menu-slidebar/button-forward":{include:gQ,style:function(Y){return {icon:Y.hovered?dM:eR};
}},"menu-separator":{style:function(bW){return {height:0,decorator:ew,margin:[4,2]};
}},"menu-button":{alias:gp,style:function(hg){return {decorator:hg.selected?eP:undefined,textColor:hg.selected?gl:undefined,padding:[4,6]};
}},"menu-button/icon":{include:gk,style:function(bs){return {alignY:gi};
}},"menu-button/label":{include:fT,style:function(hU){return {alignY:gi,padding:1};
}},"menu-button/shortcut":{include:fT,style:function(hY){return {alignY:gi,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:gk,style:function(ia){return {source:ia.selected?ey:fS,alignY:gi};
}},"menu-checkbox":{alias:eL,include:eL,style:function(gW){return {icon:!gW.checked?undefined:gW.selected?gK:dL};
}},"menu-radiobutton":{alias:eL,include:eL,style:function(bQ){return {icon:!bQ.checked?undefined:bQ.selected?eC:cG};
}},"menubar":{style:function(bq){return {decorator:ff};
}},"menubar-button":{alias:gp,style:function(ig){return {decorator:ig.pressed||ig.hovered?eP:undefined,textColor:ig.pressed||ig.hovered?gl:undefined,padding:[3,8]};
}},"colorselector":go,"colorselector/control-bar":go,"colorselector/control-pane":go,"colorselector/visual-pane":eS,"colorselector/preset-grid":go,"colorselector/colorbucket":{style:function(ci){return {decorator:gn,width:16,height:16};
}},"colorselector/preset-field-set":eS,"colorselector/input-field-set":eS,"colorselector/preview-field-set":eS,"colorselector/hex-field-composite":go,"colorselector/hex-field":fQ,"colorselector/rgb-spinner-composite":go,"colorselector/rgb-spinner-red":gy,"colorselector/rgb-spinner-green":gy,"colorselector/rgb-spinner-blue":gy,"colorselector/hsb-spinner-composite":go,"colorselector/hsb-spinner-hue":gy,"colorselector/hsb-spinner-saturation":gy,"colorselector/hsb-spinner-brightness":gy,"colorselector/preview-content-old":{style:function(hT){return {decorator:gn,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(cp){return {decorator:gn,backgroundColor:gh,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(V){return {decorator:gn,margin:5};
}},"colorselector/brightness-field":{style:function(bA){return {decorator:gn,margin:[5,7]};
}},"colorselector/hue-saturation-pane":go,"colorselector/hue-saturation-handle":go,"colorselector/brightness-pane":go,"colorselector/brightness-handle":go,"colorpopup":{alias:gw,include:gw,style:function(hP){return {padding:5,backgroundColor:fV};
}},"colorpopup/field":{style:function(hr){return {decorator:gn,margin:2,width:14,height:14,backgroundColor:gh};
}},"colorpopup/selector-button":gm,"colorpopup/auto-button":gm,"colorpopup/preview-pane":eS,"colorpopup/current-preview":{style:function(cj){return {height:20,padding:4,marginLeft:4,decorator:gn,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(bz){return {height:20,padding:4,marginRight:4,decorator:gn,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:gm,include:gm,style:function(ie){return {icon:eU};
}},"colorpopup/colorselector-cancelbutton":{alias:gm,include:gm,style:function(W){return {icon:fe};
}},"table":{alias:go,style:function(bO){return {decorator:ds};
}},"table-header":{},"table/statusbar":{style:function(s){return {decorator:fx,padding:[0,2]};
}},"table/column-button":{alias:gq,style:function(g){return {decorator:dA,padding:3,icon:cH};
}},"table-column-reset-button":{include:eL,alias:eL,style:function(){return {icon:eB};
}},"table-scroller":go,"table-scroller/scrollbar-x":gz,"table-scroller/scrollbar-y":gz,"table-scroller/header":{style:function(bP){return {decorator:eo};
}},"table-scroller/pane":{style:function(bx){return {backgroundColor:er};
}},"table-scroller/focus-indicator":{style:function(l){return {decorator:eg};
}},"table-scroller/resize-line":{style:function(cw){return {backgroundColor:fX,width:2};
}},"table-header-cell":{alias:gp,style:function(hG){var hH=qx.bom.client.Engine.MSHTML?dt:cQ;
return {minWidth:13,minHeight:20,padding:hG.hovered?[3,4,2,4]:[3,4],decorator:hG.hovered?eX:ec,sortIcon:hG.sorted?(hG.sortedAscending?dX+hH:cE+hH):undefined};
}},"table-header-cell/label":{style:function(j){return {minWidth:0,alignY:gi,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(hi){return {alignY:gi,alignX:cV};
}},"table-header-cell/icon":{style:function(bg){return {minWidth:0,alignY:gi,paddingRight:5};
}},"table-editor-textfield":{include:fQ,style:function(ch){return {decorator:undefined,padding:[2,2],backgroundColor:gh};
}},"table-editor-selectbox":{include:dW,alias:dW,style:function(ht){return {padding:[0,2],backgroundColor:gh};
}},"table-editor-combobox":{include:cO,alias:cO,style:function(m){return {decorator:undefined,backgroundColor:gh};
}},"progressive-table-header":{alias:go,style:function(cr){return {decorator:cI};
}},"progressive-table-header-cell":{alias:gp,style:function(n){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:ev};
}},"app-header":{style:function(bo){return {font:gj,textColor:gl,padding:[8,12],decorator:ei};
}},"virtual-list":gu,"virtual-list/row-layer":dG,"row-layer":{style:function(t){return {colorEven:fN,colorOdd:eW};
}},"column-layer":go,"cell":{style:function(cs){return {textColor:cs.selected?gl:gO,padding:[3,6],font:dS};
}},"cell-string":eQ,"cell-number":{include:eQ,style:function(hp){return {textAlign:cV};
}},"cell-image":eQ,"cell-boolean":{include:eQ,style:function(bp){return {iconTrue:eb,iconFalse:dd};
}},"cell-atom":eQ,"cell-date":eQ,"cell-html":eQ,"htmlarea":{"include":go,style:function(a){return {backgroundColor:fN};
}}}});
})();
(function(){var t="contextmenu",s="help",r="qx.client",q="changeGlobalCursor",p="abstract",o="Boolean",n="root",m="",l=" !important",k="_applyGlobalCursor",h="_applyNativeHelp",j=";",i="qx.ui.root.Abstract",g="String",f="*";
qx.Class.define(i,{type:p,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:n},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:g,nullable:true,themeable:true,apply:k,event:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:o,init:false,apply:h}},members:{__kw:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(r,{"mshtml":function(c,d){},"default":function(u,v){var w=qx.bom.Stylesheet;
var x=this.__kw;

if(!x){this.__kw=x=w.createElement();
}w.removeAllRules(x);

if(u){w.addRule(x,f,qx.bom.element.Cursor.compile(u).replace(j,m)+l);
}}}),_applyNativeContextMenu:function(a,b){if(a){this.removeListener(t,this._onNativeContextMenu,this,true);
}else{this.addListener(t,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(r,{"mshtml":function(y,z){if(z===false){qx.bom.Event.removeNativeListener(document,s,qx.lang.Function.returnFalse);
}
if(y===false){qx.bom.Event.addNativeListener(document,s,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__kw=null;
},defer:function(A,B){qx.ui.core.MChildrenHandling.remap(B);
}});
})();
(function(){var t="relative",s="resize",r="height",q="mshtml",p="",o="px",n="position",m="qx.ui.root.Inline",l="$$widget",k="hidden",f="qx.client",h="div",g="left";
qx.Class.define(m,{extend:qx.ui.root.Abstract,include:[qx.ui.core.MLayoutHandling],construct:function(C,D,E){this.__qC=C;
C.style.overflow=k;
C.style.textAlign=g;
this.__qD=D||false;
this.__qE=E||false;
this.__qF();
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Basic());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
},members:{__qD:false,__qE:false,__qC:null,__qF:function(){if(this.__qD||this.__qE){var d=qx.bom.element.Dimension.getSize(this.__qC);

if(this.__qD&&d.width<1){throw new Error("The root element "+this.__qC+" of "+this+" needs a width when its width size should be used!");
}
if(this.__qE){if(d.height<1){throw new Error("The root element "+this.__qC+" of "+this+" needs a height when its height size should be used!");
}if(d.height>=1&&qx.bom.element.Style.get(this.__qC,r,3)==p){qx.bom.element.Style.set(this.__qC,r,d.height+o);
}}qx.event.Registration.addListener(this.__qC,s,this._onResize,this);
}},_createContainerElement:function(){var u=this.__qC;

if(this.__qD||this.__qE){var y=document.createElement(h);
u.appendChild(y);
if(qx.core.Variant.isSet(f,q)&&qx.bom.client.Engine.VERSION==6){var x=qx.dom.Node.getBodyElement(u);
var w;
var A;
var z=false;
var v=qx.dom.Hierarchy.getAncestors(u);

for(var i=0,j=v.length;i<j;i++){w=v[i];

if(w!=x){A=qx.bom.element.Style.get(w,n);

if(A==t){z=true;
break;
}}else{break;
}}
if(z){u.style.position=t;
}}}else{y=u;
}var B=new qx.html.Root(y);
y.style.position=t;
B.setAttribute(l,this.toHashCode());
return B;
},_onResize:function(e){var a=e.getData();

if((a.oldWidth!==a.width)&&this.__qD||(a.oldHeight!==a.height)&&this.__qE){qx.ui.core.queue.Layout.add(this);
}},_computeSizeHint:function(){var J=this.__qD;
var G=this.__qE;

if(!J||!G){var F=arguments.callee.base.call(this);
}else{F={};
}var K=qx.bom.element.Dimension;

if(J){var I=K.getContentWidth(this.__qC);
F.width=I;
F.minWidth=I;
F.maxWidth=I;
}
if(G){var H=K.getContentHeight(this.__qC);
F.height=H;
F.minHeight=H;
F.maxHeight=H;
}return F;
}},defer:function(b,c){qx.ui.core.MLayoutHandling.remap(c);
},destruct:function(){qx.event.Registration.removeListener(this.__qC,s,this._onResize,this);
this.__qC=null;
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
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
(function(){var a="qx.application.Inline";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Page(document);
}}});
})();
(function(){var l="div",k="resize",j="qx.ui.root.Page",i="gecko",h="paddingLeft",g="$$widget",f="qx.client",d="left",c="paddingTop",b="qxIsRootPage",a="absolute";
qx.Class.define(j,{extend:qx.ui.root.Abstract,construct:function(o){this.__AQ=o;
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Basic());
this.setZIndex(10000);
qx.ui.core.queue.Layout.add(this);
this.addListener(k,this.__AS,this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
},members:{__AR:null,__AQ:null,_createContainerElement:function(){var s=this.__AQ.createElement(l);
this.__AQ.body.appendChild(s);
var r=new qx.html.Root(s);
r.setStyles({position:a,textAlign:d});
r.setAttribute(g,this.toHashCode());
if(qx.core.Variant.isSet(f,i)){r.setAttribute(b,1);
}return r;
},_createContentElement:function(){return new qx.html.Element(l);
},_computeSizeHint:function(){var p=qx.bom.Document.getWidth(this._window);
var q=qx.bom.Document.getHeight(this._window);
return {minWidth:p,width:p,maxWidth:p,minHeight:q,height:q,maxHeight:q};
},__AS:function(e){this.getContainerElement().setStyles({width:0,height:0});
this.getContentElement().setStyles({width:0,height:0});
},supportsMaximize:function(){return false;
},_applyPadding:function(m,n,name){if(m&&(name==c||name==h)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,m,n,name);
},_applyDecorator:function(t,u){arguments.callee.base.call(this,t,u);

if(!t){return;
}var v=this.getDecoratorElement().getInsets();

if(v.left||v.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__AQ=null;
}});
})();
(function(){var h="modern-display",g="bold",f="window",e="showcase.page.theme.calc.theme.appearance.Modern",d="main",c="button";
qx.Theme.define(e,{appearances:{"modern-calculator":f,"modern-calculator-button":c,"modern-display":{style:function(b){return {decorator:d,height:40,padding:3,marginBottom:3,marginBottom:10};
}},"modern-display/label":{style:function(a){return {font:g,marginLeft:5};
}},"modern-display/memory":{style:function(i){return {marginLeft:5};
}},"modern-display/operation":{style:function(j){return {marginLeft:50};
}},"modern-calculator/display":h}});
})();
(function(){var k="solid",j="white",i="listitem",h="black",g="widget",f="preview-list/scrollbar-x/button",e="shadow-window",d="text-title",c="#F3FFD1",b="showcase/images/headerback.png",E="sans-serif",D="scale",C="showcase/images/contentbackground.gif",B="Trebuchet MS",A="#444444",z="#134275",y="pointer",x="legend",w="repeat-y",v="group",r="text-label",s="Lucida Grande",p="showcase/images/tag-hor.png",q="top",n="invalid",o="default",l="Verdana",m="label",t="showcase.theme.Appearance",u="atom";
qx.Theme.define(t,{extend:qx.theme.modern.Appearance,include:[showcase.page.theme.calc.theme.appearance.Black,showcase.page.theme.calc.theme.appearance.Modern],appearances:{"root":{style:function(N){return {backgroundColor:j,textColor:r,font:o};
}},"page-preview":{alias:i,include:i,style:function(G){return {iconPosition:q,padding:[-10,-6,8,-6],gap:-20,decorator:null,cursor:y};
}},"page-preview/label":{include:m,style:function(L){return {textColor:L.selected?A:c,padding:[6,15],height:35,decorator:L.selected?v:null,font:qx.bom.Font.fromConfig({size:20,family:[B,s,l,E]}),zIndex:50};
}},"preview-list":{style:function(J){return {backgroundColor:z,decorator:new qx.ui.decoration.Single().set({bottom:[1,k,h],backgroundImage:b,backgroundRepeat:D}),shadow:e,zIndex:111,padding:5};
}},"preview-list/scrollbar-x/slider":g,"preview-list/scrollbar-x":g,"preview-list/scrollbar-x/button":{style:function(H){return {width:0,height:0};
}},"preview-list/scrollbar-x/button-begin":f,"preview-list/scrollbar-x/button-end":f,"preview-list/scrollbar-x/slider/knob":{style:function(O){return {decorator:new qx.ui.decoration.HBox(p),opacity:qx.bom.client.Engine.MSHTML?1:(O.hovered?1:0.6),height:12};
}},"separator":{style:function(M){return {backgroundColor:h,decorator:new qx.ui.decoration.Single().set({top:[1,k,j],bottom:[1,k,j]}),height:7};
}},"stack":{style:function(I){return {marginTop:qx.bom.client.Feature.CSS_POINTER_EVENTS?0:8};
}},"content-container":{style:function(F){return {padding:0};
}},"description":{style:function(a){return {width:300,zIndex:122,shadow:e,padding:7,decorator:new qx.ui.decoration.Background().set({backgroundImage:C,backgroundRepeat:w})};
}},"groupbox/legend":{alias:u,style:function(K){return {padding:[1,0,1,4],textColor:K.invalid?n:d,font:x};
}}}});
})();
(function(){var a="qx.ui.layout.Basic";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(k,m){var q=this._getLayoutChildren();
var n,p,o,r,top;
for(var i=0,l=q.length;i<l;i++){n=q[i];
p=n.getSizeHint();
o=n.getLayoutProperties();
r=(o.left||0)+n.getMarginLeft();
top=(o.top||0)+n.getMarginTop();
n.renderLayout(r,top,p.width,p.height);
}},_computeSizeHint:function(){var g=this._getLayoutChildren();
var d,j,e;
var h=0,f=0;
var b,c;
for(var i=0,l=g.length;i<l;i++){d=g[i];
j=d.getSizeHint();
e=d.getLayoutProperties();
b=j.width+(e.left||0)+d.getMarginLeft()+d.getMarginRight();
c=j.height+(e.top||0)+d.getMarginTop()+d.getMarginBottom();

if(b>h){h=b;
}
if(c>f){f=c;
}}return {width:h,height:f};
}}});
})();
(function(){var j="Table",i="qx.ui.table.Table",h="Column auto sizing",g="Table with 10000 rows and 50 columns",f="Filtered Table Model",e="in that the table data can be of any length (e.g. hundreds of thousands",d="The table is a very powerful widget. It is “virtual” ",c="Custom cell renderers like the boolean cell renderer can be configured.",b="Click on the column header to sort the column.",a="Table with a fixed first column",E="Windowed cell editor",D="Table selection modes",C="table",B="showcase.page.table.Page",A="Cell editors",z="Remote table model",y="Custom header renderers as shown in the “Explicit” column can be used.",x="Drag the column header to reorder.",w=" rendered. The data you currently see is fetched from a ",v="Conditional cell renderer",q="<a href='http://developer.yahoo.com/yql/' target='_blank'>YQL</a> ",r="Basic table",o=" of rows or more) yet only the rows which are actually being viewed are",p="Use the column drop-down menu in the upper right corner.",m="Drag the column header separator to resize the columns.",n="showcase/table/icon.png",k="service so it's always up to date.",l="Table events",s="Column context menus",t="showcase.page.table.Content",u="Resize the window to see the table resize.";
qx.Class.define(B,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:j,part:C,icon:n,contentClass:t,description:showcase.page.DescriptionBuilder.build(j,this.__Hr,this.__Hs,this.__Ht,this.__Hu,this.__Hv,this.__Hw)});
},members:{__Hr:d+e+o+w+q+k,__Hs:{"Sorting":b,"Reordering":x,"Column Resizing":m,"Hide Columns":p,"Table Resize":u},__Ht:{"Cell Renderer":c,"Header Renderer":y},__Hu:{"remote_table_model":z},__Hv:{"#table~Table.html":r,"#table~Table_Cell_Editor.html":A,"#table~Table_Conditional.html":v,"#table~Table_Context_Menu.html":s,"#table~Table_Events.html":l,"#table~Table_Filtered_Model.html":f,"#table~Table_Huge.html":g,"#table~Table_Meta_Columns.html":a,"#table~Table_Resize_Columns.html":h,"#table~Table_Selection.html":D,"#table~Table_Window_Editor.html":E},__Hw:{"#qx.ui.table.Table":i}}});
})();
(function(){var m="showcase.page.dragdrop.Page",l="You can also move items back to the shop.",k="right displays the shopping cart. The main idea of this demo is to ",j="showcase/dragdrop/icon.png",i="Drag &amp; Drop",h="You can reorder both lists.",g="Drag & Drop",f="dragdrop",e="showcase.page.dragdrop.Content",d="illustrate the drag & drop feature.",a="The list on the left contains all available items while the list on the ",c="Try moving an item to the cart.",b="These two list widgets simulate a shopping system. ";
qx.Class.define(m,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:g,part:f,icon:j,contentClass:e,description:showcase.page.DescriptionBuilder.build(i,this.__Hx,this.__Hy,this.__Hz,this.__HA,this.__HB,this.__HC)});
},members:{__Hx:b+a+k+d,__Hy:{"Drag":c,"Reorder":h,"Move":l},__Hz:null,__HA:{"ui_dragdrop":"Drag &amp; Drop"},__HB:{"#ui~DragDrop.html":"Drag &amp; Drop with lists"},__HC:{"#qx.ui.core.Widget~drag":"Drag event in the Widget","#qx.ui.core.DragDropCursor":"Drag &amp; Drop Cursor"}}});
})();
(function(){var q="__oU",p="__oV",o="qx.io.PartLoader",n="load",m="partLoaded",l="singleton",k="qx.event.type.Data";
qx.Class.define(o,{type:l,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__oU=[];
var f=this._getUris();

for(var i=0;i<f.length;i++){this.__oU.push(new qx.io.part.Package(f[i],i,i==0));
}this.__oV={};
var b=qx.$$loader.parts;

for(var name in b){var a=b[name];
var d=[];

for(var i=0;i<a.length;i++){d.push(this.__oU[a[i]]);
}var c=new qx.io.part.Part(name,d);
c.addListener(n,function(e){this.fireDataEvent(m,e.getTarget());
},this);
this.__oV[name]=c;
}},events:{"partLoaded":k},statics:{require:function(w,x,self){this.getInstance().require(w,x,self);
}},members:{require:function(r,s,self){var s=s||function(){};
var self=self||window;

if(qx.lang.Type.isString(r)){r=[r];
}var v=[];

for(var i=0;i<r.length;i++){v.push(this.getPart(r[i]));
}var u=0;
var t=function(){u+=1;

if(u>=v.length){s.call(self);
}};

for(var i=0;i<v.length;i++){v[i].load(t,this);
}},__oU:null,__oV:null,getPart:function(name){var g=this.__oV[name];

if(!g){throw new Error("No such part: "+name);
}return g;
},_getUris:function(){var h=qx.$$loader.uris;
var j=[];

for(var i=0;i<h.length;i++){j.push(this._decodeUris(h[i]));
}return j;
},_decodeUris:qx.$$loader.decodeUris},destruct:function(){this._disposeObjects(p,q);
}});
})();
(function(){var f="Internationalization",e="showcase.page.i18n.Page",d="showcase/i18n/icon.png",c="Languages",b="showcase.page.i18n.Content",a="i18n";
qx.Class.define(e,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:c,part:a,icon:d,contentClass:b,description:showcase.page.DescriptionBuilder.build(f,this.__HD,this.__HE,this.__HF,this.__HG,this.__HH,this.__HI)});
},members:{__HD:'Internationalization (or \"I18N\" for short) is all about making'+" a system support different natural languages and"+" locales in its user interface. qooxdoo has full translation support "+"and comprises locale information of virtually every country in the world.",__HE:{"Change the language":"Hit one of the flag buttons on the top to change "+"the language. All labels on the page will be translated, including "+"labels in standard qooxdoo widgets like the calendar.","Change the country":"The first select box on the left lets you change the country code. "+"The country code defines things like date or number formats. Try "+"changing the country code from <em>United States</em> to "+"<em>Great Britain</em>. You will see that e.g. the start of the week "+"changes from Sunday to Monday.","Open the command menu":"The command menu button in the lower left opens a popup menu. Even the "+"keyboard shortcuts are localized."},__HF:{"Standards based translation":"Translation data is extracted into standard <em>.po</em> "+"files, as defined by GNU <em>gettext</em> tools. Many "+"open source tools can process those translation files.","CLDR":"Localisation data like date and time formats are taken from the "+"<a href='http://cldr.unicode.org/'>Unicode Common Locale Data Repository</a> (CLDR). This "+"guarantees that qooxdoo uses the standardized data for even the smallest "+"countries.","Live locale switching":"All widgets are designed in a way that allows for locale switching in the running application."},__HG:{"internationalization":"Internationalization"},__HH:{"#showcase~Localization.html":"Localization demo"},__HI:{"#qx.locale":"qx.locale.*"}}});
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
(function(){var m="_applyDynamic",k="changeSelection",j="Boolean",h="qx.ui.container.Stack";
qx.Class.define(h,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(k,this.__kW,this);
},properties:{dynamic:{check:j,init:false,apply:m}},members:{_applyDynamic:function(s){var u=this._getChildren();
var t=this.getSelection()[0];
var v;

for(var i=0,l=u.length;i<l;i++){v=u[i];

if(v!=t){if(s){u[i].exclude();
}else{u[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(r){return r.isEnabled();
},__kW:function(e){var w=e.getOldData()[0];
var x=e.getData()[0];

if(w){if(this.isDynamic()){w.exclude();
}else{w.hide();
}}
if(x){x.show();
}},add:function(y){this._add(y);
var z=this.getSelection()[0];

if(!z){this.setSelection([y]);
}else if(z!==y){if(this.isDynamic()){y.exclude();
}else{y.hide();
}}},remove:function(a){this._remove(a);

if(this.getSelection()[0]===a){var b=this._getChildren()[0];

if(b){this.setSelection([b]);
}else{this.resetSelection();
}}},indexOf:function(A){return this._indexOf(A);
},getChildren:function(){return this._getChildren();
},previous:function(){var f=this.getSelection()[0];
var c=this._indexOf(f)-1;
var g=this._getChildren();

if(c<0){c=g.length-1;
}var d=g[c];
this.setSelection([d]);
},next:function(){var o=this.getSelection()[0];
var n=this._indexOf(o)+1;
var p=this._getChildren();
var q=p[n]||p[0];
this.setSelection([q]);
}}});
})();
(function(){var B="px",A="no-repeat",z="0",y="-1px",x="mshtml",w="horizontal",v="qx.ui.decoration.AbstractBox",u='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',t='</div>',s="_applyBaseImage",p="repeat-x",r="repeat-y",q="abstract",o="String",n="qx.client";
qx.Class.define(v,{extend:qx.ui.decoration.Abstract,type:q,construct:function(D,E){arguments.callee.base.call(this);
if(D!=null){this.setBaseImage(D);
}
if(E!=null){this.setInsets(E);
}},properties:{baseImage:{check:o,nullable:true,apply:s}},members:{__CH:null,__CI:null,__CJ:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__CH;
},_setOrientation:function(C){this._isHorizontal=C==w;
},getMarkup:function(){if(this.__CH){return this.__CH;
}var j=qx.bom.element.Decoration;
var k=this.__CI;
var l=this.__CJ;
var m=[];
m.push(u);

if(this._isHorizontal){m.push(j.create(k.l,A,{top:0,left:0}));
m.push(j.create(k.c,p,{top:0,left:l.left+B}));
m.push(j.create(k.r,A,{top:0,right:0}));
}else{m.push(j.create(k.t,A,{top:0,left:0}));
m.push(j.create(k.c,r,{top:l.top+B,left:l.left+B}));
m.push(j.create(k.b,A,{bottom:0,left:0}));
}m.push(t);
return this.__CH=m.join("");
},resize:function(H,I,J){H.style.width=I+B;
H.style.height=J+B;
var K=this.__CJ;

if(this._isHorizontal){var innerWidth=I-K.left-K.right;
H.childNodes[1].style.width=innerWidth+B;
}else{var innerHeight=J-K.top-K.bottom;
H.childNodes[1].style.height=innerHeight+B;
}
if(qx.core.Variant.isSet(n,x)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(this._isHorizontal){H.childNodes[2].style.marginRight=(I%2==1)?y:z;
}else{H.childNodes[2].style.marginBottom=(J%2==1)?y:z;
}}}},tint:function(F,G){},_applyBaseImage:function(a,b){{};
var c=qx.util.ResourceManager.getInstance();

if(a){var e=qx.util.AliasManager.getInstance();
var g=e.resolve(a);
var h=/(.*)(\.[a-z]+)$/.exec(g);
var f=h[1];
var d=h[2];
var i=this.__CI={t:f+"-t"+d,b:f+"-b"+d,c:f+"-c"+d,l:f+"-l"+d,r:f+"-r"+d};
this.__CJ={top:c.getImageHeight(i.t),bottom:c.getImageHeight(i.b),left:c.getImageWidth(i.l),right:c.getImageWidth(i.r)};
}}},destruct:function(){this.__CH=this.__CI=this.__CJ=null;
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
(function(){var d="qx.fx.queue.Queue",c="Number";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__rw=[];
},properties:{limit:{init:Infinity,check:c}},members:{__rx:null,__rw:null,add:function(a){var b=new Date().getTime();
a._startOn+=b;
a._finishOn+=b;

if(this.__rw.length<this.getLimit()){this.__rw.push(a);
}else{a.resetState();
}
if(!this.__rx){this.__rx=qx.lang.Function.periodical(this.loop,15,this);
}},remove:function(e){qx.lang.Array.remove(this.__rw,e);

if(this.__rw.length==0){window.clearInterval(this.__rx);
delete this.__rx;
}},loop:function(){var f=new Date().getTime();

for(var i=0,g=this.__rw.length;i<g;i++){this.__rw[i]&&this.__rw[i].loop(f);
}}},destruct:function(){this.__rw=null;
}});
})();
(function(){var f="__default",e="__rv",d="qx.fx.queue.Manager",c="singleton",b="object";
qx.Class.define(d,{extend:qx.core.Object,type:c,construct:function(){arguments.callee.base.call(this);
this.__rv={};
},members:{__rv:null,getQueue:function(a){if(typeof (this.__rv[a])==b){return this.__rv[a];
}else{return this.__rv[a]=new qx.fx.queue.Queue;
}},getDefaultQueue:function(){return this.getQueue(f);
}},destruct:function(){this._disposeMap(e);
}});
})();
(function(){var h="Number",g="static",f="qx.fx.Transition";
qx.Class.define(f,{type:g,statics:{get:function(p){return qx.fx.Transition[p]||false;
},linear:function(i){return i;
},easeInQuad:function(k){return Math.pow(2,10*(k-1));
},easeOutQuad:function(l){return (-Math.pow(2,-10*l)+1);
},sinodial:function(j){return (-Math.cos(j*Math.PI)/2)+0.5;
},reverse:function(e){return 1-e;
},flicker:function(a){var a=((-Math.cos(a*Math.PI)/4)+0.75)+Math.random()/4;
return a>1?1:a;
},wobble:function(d){return (-Math.cos(d*Math.PI*(9*d))/2)+0.5;
},pulse:function(m,n){n=(typeof (n)==h)?n:5;
return (Math.round((m%(1/n))*n)==0?Math.floor((m*n*2)-(m*n*2)):1-Math.floor((m*n*2)-(m*n*2)));
},spring:function(b){return 1-(Math.cos(b*4.5*Math.PI)*Math.exp(-b*6));
},none:function(o){return 0;
},full:function(c){return 1;
}}});
})();
(function(){var e="Data Binding",d="showcase/databinding/icon.png",c="showcase.page.databinding.Page",b="data",a="showcase.page.databinding.Content";
qx.Class.define(c,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:e,part:b,icon:d,contentClass:a,description:showcase.page.DescriptionBuilder.build(e,this.__HJ,this.__HK,this.__HL,this.__HM,this.__HN,this.__HO)});
},members:{__HJ:"The twitter demo illustrates the use of data binding. "+"Twitter offers a REST / JSONP API, making it a perfect match for data "+"binding. The demo fetches the data and binds the result to the list. "+"Clicking on a tweet will invoke a second binding which displays the "+"selected tweet in the detail view right beside the list.",__HK:{"Detail View":"Clicking a tweet in the list shows the details.","Friends":"The friends button displays the list of followers (Requires credentials).","Change Tweet":"Enter your twitter username in the text field and press \"Show\" to see your recent tweets."},__HL:{"Loading Data":"The data is loaded from twitter in real time via JSONP.","Binding":"A binding connects the model to the list view."},__HM:{"data_binding":"Data Binding Concepts","data_binding/single_value_binding":"Fundamental Layer","data_binding/controller":"Controller","data_binding/stores":"Data Stores"},__HN:{"#data~SingleValueBinding.html":"Single Value Binding Demo","#data~ListControllerWith3Widgets.html":"List Binding Demo","#data~TreeController.html":"Tree Binding Demo","#data~FormController.html":"Form Binding Demo","#data~Flickr.html":"Flickr Foto Search"},__HO:{"#qx.data":"Main Data Binding API Documentation","#qx.data.store.Jsonp":"JSONP Data Store","#qx.data.controller.List":"List Controller","#qx.data.controller.Object":"Object Controller"}}});
})();
(function(){var v="focusout",u="interval",t="mouseover",s="mouseout",r="mousemove",q="widget",p="qx.ui.tooltip.ToolTip",o="Boolean",n="_applyCurrent",m="__ok",j="qx.ui.tooltip.Manager",l="__oh",k="__oi",i="tooltip-error",h="singleton";
qx.Class.define(j,{type:h,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,t,this.__or,this,true);
this.__oh=new qx.event.Timer();
this.__oh.addListener(u,this.__oo,this);
this.__oi=new qx.event.Timer();
this.__oi.addListener(u,this.__op,this);
this.__oj={left:0,top:0};
},properties:{current:{check:p,nullable:true,apply:n},showInvalidTooltips:{check:o,init:true}},members:{__oj:null,__oi:null,__oh:null,__ok:null,__ol:null,__om:function(){if(!this.__ok){this.__ok=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__ok;
},__on:function(){if(!this.__ol){this.__ol=new qx.ui.tooltip.ToolTip().set({appearance:i});
this.__ol.syncAppearance();
}return this.__ol;
},_applyCurrent:function(D,E){if(E&&qx.ui.core.Widget.contains(E,D)){return;
}if(E){if(!E.isDisposed()){E.exclude();
}this.__oh.stop();
this.__oi.stop();
}var G=qx.event.Registration;
var F=document.body;
if(D){this.__oh.startWith(D.getShowTimeout());
G.addListener(F,s,this.__os,this,true);
G.addListener(F,v,this.__ot,this,true);
G.addListener(F,r,this.__oq,this,true);
}else{G.removeListener(F,s,this.__os,this,true);
G.removeListener(F,v,this.__ot,this,true);
G.removeListener(F,r,this.__oq,this,true);
}},__oo:function(e){var C=this.getCurrent();

if(C&&!C.isDisposed()){this.__oi.startWith(C.getHideTimeout());

if(C.getPlaceMethod()==q){C.placeToWidget(C.getOpener());
}else{C.placeToPoint(this.__oj);
}C.show();
}this.__oh.stop();
},__op:function(e){var a=this.getCurrent();

if(a&&!a.isDisposed()){a.exclude();
}this.__oi.stop();
this.resetCurrent();
},__oq:function(e){var w=this.__oj;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__or:function(e){var d=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!d){return;
}var f;
while(d!=null){var f=d.getToolTip();
var g=d.getToolTipText()||null;
var c=d.getToolTipIcon()||null;

if(qx.Class.hasInterface(d.constructor,qx.ui.form.IForm)&&!d.isValid()){var b=d.getInvalidMessage();
}
if(f||g||c||b){break;
}d=d.getLayoutParent();
}
if(!d){return;
}
if(d.isBlockToolTip()){return;
}if(b&&d.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var f=this.__on().set({label:b});
}else if(!f){var f=this.__om().set({label:g,icon:c});
}this.setCurrent(f);
f.setOpener(d);
},__os:function(e){var x=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!x){return;
}var y=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!y){return;
}var z=this.getCurrent();
if(z&&(y==z||qx.ui.core.Widget.contains(z,y))){return;
}if(y&&x&&qx.ui.core.Widget.contains(x,y)){return;
}if(z&&!y){this.setCurrent(null);
}else{this.resetCurrent();
}},__ot:function(e){var A=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!A){return;
}var B=this.getCurrent();
if(B&&B==A.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,t,this.__or,this,true);
this._disposeObjects(l,k,m);
this.__oj=null;
}});
})();
(function(){var e="Tree",d="showcase.page.tree.Page",c="showcase.page.tree.Content",b="tree",a="showcase/tree/icon.png";
qx.Class.define(d,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:e,part:b,icon:a,contentClass:c,description:showcase.page.DescriptionBuilder.build(e,this.__HP,this.__HQ,this.__HR,this.__HS,this.__HT,this.__HU)});
},members:{__HP:"The two tree views display some hierarchical data "+"including folders, icons and labels. The tree in the right window has "+"some additional infomation attached to each item.",__HQ:{"Expand":"Try expanding some folders by using the arrow icon or double clicking.","Resize":"Resize the window to make the tree scrollbars appear.","Selection":"Select multiple items, e.g. by holding the Shift key."},__HR:{"Configurable":"Each tree item has a configurable label and icon.","Scrolling":"Tree displays scrollbars if necessary.","Multi Columns":"Tree folders can display additional information in separate columns."},__HS:{"widget/tree":"The Tree Widget"},__HT:{"#widget~Tree.html":"Configurable Tree","#widget~Tree_Columns.html":"Multi Column Tree","#data~TreeController.html":"Tree using Data Binding","#data~JsonToTree.html":"Tree filled with Data from a JSON file.","#data~ExtendedTree.html":"Tree using Data Binding with configuration"},__HU:{"#qx.ui.tree":"The tree namespace"}}});
})();
(function(){var r="http://demo.qooxdoo.org/",q="qx.version",p="<h1>",o="</div>",n="showcase.page.DescriptionBuilder",m="",l="<h2>Documentation</h2>",k="<h2>Demos</h2>",j="<p>",i="</h1>",c="<div id='description'>",h="</p>",f="<h2>Api</h2>",b="http://qooxdoo.org/documentation/1.0/",a="/demobrowser/",e="/apiviewer/",d="<h2>Features</h2>",g="<h2>Try This</h2>";
qx.Class.define(n,{statics:{_demoPrefix:r+qx.core.Setting.get(q)+a,_apiPrefix:r+qx.core.Setting.get(q)+e,_manualPrefix:b,build:function(w,x,y,z,A,B,C){var D=[];
D.push(c,p,w,i,j,x,h);

if(y){D.push(g,this.__HW(y));
}
if(z){D.push(d,this.__HW(z));
}
if(A){D.push(l,this.__HV(this._manualPrefix,A));
}
if(B){D.push(k,this.__HV(this._demoPrefix,B));
}
if(C){D.push(f,this.__HV(this._apiPrefix,C));
}D.push(o);
return D.join(m);
},__HV:function(s,t){var u=["<ul>"];

for(var v in t){u.push("<li><a href='",s,v,"' target='_blank'>",t[v],"</a></li>");
}u.push("</ul>");
return u.join("");
},__HW:function(E){var F=["<ul>"];

for(var G in E){F.push("<li><strong>",G,"</strong>: ",E[G],"</li>");
}F.push("</ul>");
return F.join("");
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
var A=new qx.ui.layout.Grid();
A.setColumnFlex(0,1);
A.setRowFlex(0,1);
this._setLayout(A);
this.addListener(h,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:k},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[s,q,m],init:s,themeable:true,apply:n},scrollbarY:{check:[s,q,m],init:s,themeable:true,apply:n},scrollbar:{group:[j,g]}},members:{_createChildControlImpl:function(J){var K;

switch(J){case t:K=new qx.ui.core.scroll.ScrollPane();
K.addListener(c,this._computeScrollbars,this);
K.addListener(b,this._onScrollPaneX,this);
K.addListener(f,this._onScrollPaneY,this);
this._add(K,{row:0,column:0});
break;
case u:K=this._createScrollBar(a);
K.setMinWidth(0);
K.exclude();
K.addListener(o,this._onScrollBarX,this);
K.addListener(p,this._onChangeScrollbarXVisibility,this);
this._add(K,{row:1,column:0});
break;
case v:K=this._createScrollBar(d);
K.setMinHeight(0);
K.exclude();
K.addListener(o,this._onScrollBarY,this);
K.addListener(p,this._onChangeScrollbarYVisibility,this);
this._add(K,{row:0,column:1});
break;
case r:K=new qx.ui.core.Widget();
K.setWidth(0);
K.setHeight(0);
K.exclude();
this._add(K,{row:1,column:1});
break;
}return K||arguments.callee.base.call(this,J);
},getPaneSize:function(){return this.getChildControl(t).getInnerSize();
},getItemTop:function(I){return this.getChildControl(t).getItemTop(I);
},getItemBottom:function(z){return this.getChildControl(t).getItemBottom(z);
},getItemLeft:function(B){return this.getChildControl(t).getItemLeft(B);
},getItemRight:function(G){return this.getChildControl(t).getItemRight(G);
},scrollToX:function(L){qx.ui.core.queue.Manager.flush();
this.getChildControl(u).scrollTo(L);
},scrollByX:function(F){qx.ui.core.queue.Manager.flush();
this.getChildControl(u).scrollBy(F);
},getScrollX:function(){var C=this.getChildControl(u,true);
return C?C.getPosition():0;
},scrollToY:function(w){qx.ui.core.queue.Manager.flush();
this.getChildControl(v).scrollTo(w);
},scrollByY:function(H){qx.ui.core.queue.Manager.flush();
this.getChildControl(v).scrollBy(H);
},getScrollY:function(){var M=this.getChildControl(v,true);
return M?M.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(t).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(t).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var O=this._isChildControlVisible(u);
var P=this._isChildControlVisible(v);
var N=(P)?this.getChildControl(v,true):(O?this.getChildControl(u,true):null);

if(N){N.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var x=this._isChildControlVisible(u);
var y=this._isChildControlVisible(v);

if(!x){this.scrollToX(0);
}x&&y?this._showChildControl(r):this._excludeChildControl(r);
},_onChangeScrollbarYVisibility:function(e){var D=this._isChildControlVisible(u);
var E=this._isChildControlVisible(v);

if(!E){this.scrollToY(0);
}D&&E?this._showChildControl(r):this._excludeChildControl(r);
},_computeScrollbars:function(){var W=this.getChildControl(t);
var content=W.getChildren()[0];

if(!content){this._excludeChildControl(u);
this._excludeChildControl(v);
return;
}var Q=this.getInnerSize();
var V=W.getInnerSize();
var T=W.getScrollSize();
if(!V||!T){return;
}var Y=this.getScrollbarX();
var ba=this.getScrollbarY();

if(Y===s&&ba===s){var U=T.width>Q.width;
var bb=T.height>Q.height;
if((U||bb)&&!(U&&bb)){if(U){bb=T.height>V.height;
}else if(bb){U=T.width>V.width;
}}}else{var U=Y===q;
var bb=ba===q;
if(T.width>(U?V.width:Q.width)&&Y===s){U=true;
}
if(T.height>(U?V.height:Q.height)&&ba===s){bb=true;
}}if(U){var S=this.getChildControl(u);
S.show();
var X=Math.max(0,T.width-V.width);
S.setMaximum(X);
S.setKnobFactor(X>0?V.width/T.width:0);
}else{this._excludeChildControl(u);
}
if(bb){var R=this.getChildControl(v);
R.show();
var X=Math.max(0,T.height-V.height);
R.setMaximum(X);
R.setKnobFactor(X>0?V.height/T.height:0);
}else{this._excludeChildControl(v);
}}}});
})();
(function(){var b="qx.ui.core.IMultiSelection";
qx.Interface.define(b,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(a){return arguments.length==1;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var D="single",C="Boolean",B="one",A="changeSelection",z="mouseup",y="mousedown",x="losecapture",w="multi",v="_applyQuickSelection",u="mouseover",n="_applySelectionMode",t="_applyDragSelection",q="__kV",m="qx.ui.core.MMultiSelectionHandling",l="removeItem",p="keypress",o="qx.event.type.Data",r="addItem",k="additive",s="mousemove";
qx.Mixin.define(m,{construct:function(){var g=this.SELECTION_MANAGER;
var f=this.__kV=new g(this);
this.addListener(y,f.handleMouseDown,f);
this.addListener(z,f.handleMouseUp,f);
this.addListener(u,f.handleMouseOver,f);
this.addListener(s,f.handleMouseMove,f);
this.addListener(x,f.handleLoseCapture,f);
this.addListener(p,f.handleKeyPress,f);
this.addListener(r,f.handleAddItem,f);
this.addListener(l,f.handleRemoveItem,f);
f.addListener(A,this._onSelectionChange,this);
},events:{"changeSelection":o},properties:{selectionMode:{check:[D,w,k,B],init:D,apply:n},dragSelection:{check:C,init:false,apply:t},quickSelection:{check:C,init:false,apply:v}},members:{__kV:null,selectAll:function(){this.__kV.selectAll();
},isSelected:function(K){if(!qx.ui.core.Widget.contains(this,K)){throw new Error("Could not test if "+K+" is selected, because it is not a child element!");
}return this.__kV.isItemSelected(K);
},addToSelection:function(F){if(!qx.ui.core.Widget.contains(this,F)){throw new Error("Could not add + "+F+" to selection, because it is not a child element!");
}this.__kV.addItem(F);
},removeFromSelection:function(E){if(!qx.ui.core.Widget.contains(this,E)){throw new Error("Could not remove "+E+" from selection, because it is not a child element!");
}this.__kV.removeItem(E);
},selectRange:function(h,j){this.__kV.selectItemRange(h,j);
},resetSelection:function(){this.__kV.clearSelection();
},setSelection:function(c){for(var i=0;i<c.length;i++){if(!qx.ui.core.Widget.contains(this,c[i])){throw new Error("Could not select "+c[i]+", because it is not a child element!");
}}
if(c.length===0){this.resetSelection();
}else{var d=this.getSelection();

if(!qx.lang.Array.equals(d,c)){this.__kV.replaceSelection(c);
}}},getSelection:function(){return this.__kV.getSelection();
},getSortedSelection:function(){return this.__kV.getSortedSelection();
},isSelectionEmpty:function(){return this.__kV.isSelectionEmpty();
},getSelectionContext:function(){return this.__kV.getSelectionContext();
},_getManager:function(){return this.__kV;
},getSelectables:function(){return this.__kV.getSelectables();
},invertSelection:function(){this.__kV.invertSelection();
},_getLeadItem:function(){var L=this.__kV.getMode();

if(L===D||L===B){return this.__kV.getSelectedItem();
}else{return this.__kV.getLeadItem();
}},_applySelectionMode:function(I,J){this.__kV.setMode(I);
},_applyDragSelection:function(a,b){this.__kV.setDrag(a);
},_applyQuickSelection:function(G,H){this.__kV.setQuick(G);
},_onSelectionChange:function(e){this.fireDataEvent(A,e.getData());
}},destruct:function(){this._disposeObjects(q);
}});
})();
(function(){var n="change",m="qx.event.type.Data",l="qx.ui.form.MModelSelection",k="__ks",h="changeSelection";
qx.Mixin.define(l,{construct:function(){this.__ks=new qx.data.Array();
this.__ks.addListener(n,this.__kv,this);
this.addListener(h,this.__ku,this);
},events:{changeModelSelection:m},members:{__ks:null,__kt:false,__ku:function(){if(this.__kt){return;
}var q=this.getSelection();
var o=[];

for(var i=0;i<q.length;i++){var r=q[i];
var p=r.getModel?r.getModel():null;

if(p!==null){o.push(p);
}}this.setModelSelection(o);
},__kv:function(){this.__kt=true;
var b=this.getSelectables();
var d=[];
var c=this.__ks.toArray();

for(var i=0;i<c.length;i++){var f=c[i];

for(var j=0;j<b.length;j++){var g=b[j];
var a=g.getModel?g.getModel():null;

if(f===a){d.push(g);
break;
}}}this.setSelection(d);
this.__kt=false;
var e=this.getSelection();

if(!qx.lang.Array.equals(e,d)){this.__ku();
}},getModelSelection:function(){return this.__ks;
},setModelSelection:function(s){if(!s){this.__ks.removeAll();
return;
}{};
s.unshift(this.__ks.getLength());
s.unshift(0);
var t=this.__ks.splice.apply(this.__ks,s);
t.dispose();
}},destruct:function(){this._disposeObjects(k);
}});
})();
(function(){var q="one",p="single",o="selected",n="additive",m="multi",k="PageUp",j="under",h="Left",g="lead",f="Down",O="Up",N="Boolean",M="PageDown",L="anchor",K="End",J="Home",I="Right",H="right",G="click",F="above",x="left",y="Escape",v="A",w="Space",t="_applyMode",u="interval",r="changeSelection",s="qx.event.type.Data",z="quick",A="key",C="__mo",B="abstract",E="drag",D="qx.ui.core.selection.Abstract";
qx.Class.define(D,{type:B,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ml={};
},events:{"changeSelection":s},properties:{mode:{check:[p,m,n,q],init:p,apply:t},drag:{check:N,init:false},quick:{check:N,init:false}},members:{__mm:0,__mn:0,__mo:null,__mp:null,__mq:null,__mr:null,__ms:null,__mt:null,__mu:null,__mv:null,__mw:null,__mx:null,__my:null,__mz:null,__mA:null,__mB:null,__mC:null,__ml:null,__mD:null,__mE:null,getSelectionContext:function(){return this.__mB;
},selectAll:function(){var bh=this.getMode();

if(bh==p||bh==q){throw new Error("Can not select all items in selection mode: "+bh);
}this._selectAllItems();
this._fireChange();
},selectItem:function(cE){this._setSelectedItem(cE);
var cF=this.getMode();

if(cF!==p&&cF!==q){this._setLeadItem(cE);
this._setAnchorItem(cE);
}this._scrollItemIntoView(cE);
this._fireChange();
},addItem:function(bQ){var bR=this.getMode();

if(bR===p||bR===q){this._setSelectedItem(bQ);
}else{if(!this._getAnchorItem()){this._setAnchorItem(bQ);
}this._setLeadItem(bQ);
this._addToSelection(bQ);
}this._scrollItemIntoView(bQ);
this._fireChange();
},removeItem:function(bS){this._removeFromSelection(bS);

if(this.getMode()===q&&this.isSelectionEmpty()){var bT=this._getFirstSelectable();

if(bT){this.addItem(bT);
}if(bT==bS){return;
}}
if(this.getLeadItem()==bS){this._setLeadItem(null);
}
if(this._getAnchorItem()==bS){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(bA,bB){var bC=this.getMode();

if(bC==p||bC==q){throw new Error("Can not select multiple items in selection mode: "+bC);
}this._selectItemRange(bA,bB);
this._setAnchorItem(bA);
this._setLeadItem(bB);
this._scrollItemIntoView(bB);
this._fireChange();
},clearSelection:function(){if(this.getMode()==q){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bW){var bX=this.getMode();

if(bX==q||bX===p){if(bW.length>1){throw new Error("Could not select more than one items in mode: "+bX+"!");
}
if(bW.length==1){this.selectItem(bW[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bW);
}},getSelectedItem:function(){var cB=this.getMode();

if(cB===p||cB===q){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__ml);
},getSortedSelection:function(){var d=this.getSelectables();
var c=qx.lang.Object.getValues(this.__ml);
c.sort(function(a,b){return d.indexOf(a)-d.indexOf(b);
});
return c;
},isItemSelected:function(cV){var cW=this._selectableToHashCode(cV);
return this.__ml[cW]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__ml);
},invertSelection:function(){var bz=this.getMode();

if(bz===p||bz===q){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var by=this.getSelectables();

for(var i=0;i<by.length;i++){this._toggleInSelection(by[i]);
}this._fireChange();
},_setLeadItem:function(bk){var bl=this.__mC;

if(bl!==null){this._styleSelectable(bl,g,false);
}
if(bk!==null){this._styleSelectable(bk,g,true);
}this.__mC=bk;
},_getLeadItem:function(){{};
return this.getLeadItem();
},getLeadItem:function(){return this.__mC!==null?this.__mC:null;
},_setAnchorItem:function(bM){var bN=this.__mD;

if(bN){this._styleSelectable(bN,L,false);
}
if(bM){this._styleSelectable(bM,L,true);
}this.__mD=bM;
},_getAnchorItem:function(){return this.__mD!==null?this.__mD:null;
},_isSelectable:function(bU){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bV=event.getTarget();
return this._isSelectable(bV)?bV:null;
},_selectableToHashCode:function(R){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(be,bf,bg){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bo){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bm){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bD,bE){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bi){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(cn,co){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bO,bP){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(cT,cU){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(cL,cM){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(cL===q){var cN=this._getFirstSelectable();

if(cN){this._setSelectedItem(cN);
this._scrollItemIntoView(cN);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var bb=this.getMode();

if(bb!==q&&bb!==p){return;
}var ba=this._getSelectableFromMouseEvent(event);

if(ba===null){return;
}this._setSelectedItem(ba);
this._fireChange(z);
},handleMouseDown:function(event){var ca=this._getSelectableFromMouseEvent(event);

if(ca===null){return;
}var cc=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bY=event.isShiftPressed();
if(this.isItemSelected(ca)&&!bY&&!cc&&!this.getDrag()){this.__mE=ca;
return;
}else{this.__mE=null;
}this._scrollItemIntoView(ca);
switch(this.getMode()){case p:case q:this._setSelectedItem(ca);
break;
case n:this._setLeadItem(ca);
this._setAnchorItem(ca);
this._toggleInSelection(ca);
break;
case m:this._setLeadItem(ca);
if(bY){var cb=this._getAnchorItem();

if(cb===null){cb=this._getFirstSelectable();
this._setAnchorItem(cb);
}this._selectItemRange(cb,ca,cc);
}else if(cc){this._setAnchorItem(ca);
this._toggleInSelection(ca);
}else{this._setAnchorItem(ca);
this._setSelectedItem(ca);
}break;
}var cd=this.getMode();

if(this.getDrag()&&cd!==p&&cd!==q&&!bY&&!cc){this.__ms=this._getLocation();
this.__mp=this._getScroll();
this.__mt=event.getDocumentLeft()+this.__mp.left;
this.__mu=event.getDocumentTop()+this.__mp.top;
this.__mv=true;
this._capture();
}this._fireChange(G);
},handleMouseUp:function(event){var ch=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var ce=event.isShiftPressed();

if(!ch&&!ce&&this.__mE){var cf=this._getSelectableFromMouseEvent(event);

if(cf===null||!this.isItemSelected(cf)){return;
}var cg=this.getMode();

if(cg===n){this._removeFromSelection(cf);
}else{this._setSelectedItem(cf);

if(this.getMode()===m){this._setLeadItem(cf);
this._setAnchorItem(cf);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__mv){return;
}this.__mw=event.getDocumentLeft();
this.__mx=event.getDocumentTop();
var Q=this.__mw+this.__mp.left;

if(Q>this.__mt){this.__my=1;
}else if(Q<this.__mt){this.__my=-1;
}else{this.__my=0;
}var P=this.__mx+this.__mp.top;

if(P>this.__mu){this.__mz=1;
}else if(P<this.__mu){this.__mz=-1;
}else{this.__mz=0;
}var location=this.__ms;

if(this.__mw<location.left){this.__mm=this.__mw-location.left;
}else if(this.__mw>location.right){this.__mm=this.__mw-location.right;
}else{this.__mm=0;
}
if(this.__mx<location.top){this.__mn=this.__mx-location.top;
}else if(this.__mx>location.bottom){this.__mn=this.__mx-location.bottom;
}else{this.__mn=0;
}if(!this.__mo){this.__mo=new qx.event.Timer(100);
this.__mo.addListener(u,this._onInterval,this);
}this.__mo.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var cm=e.getData();

if(this.getMode()===q&&this.isSelectionEmpty()){this.addItem(cm);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__mv){return;
}if(this.__mA){this._fireChange(G);
}delete this.__mv;
delete this.__mq;
delete this.__mr;
this._releaseCapture();
if(this.__mo){this.__mo.stop();
}},_onInterval:function(e){this._scrollBy(this.__mm,this.__mn);
this.__mp=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cx=this._getDimension();
var cq=Math.max(0,Math.min(this.__mw-this.__ms.left,cx.width))+this.__mp.left;
var cp=Math.max(0,Math.min(this.__mx-this.__ms.top,cx.height))+this.__mp.top;
if(this.__mq===cq&&this.__mr===cp){return;
}this.__mq=cq;
this.__mr=cp;
var cz=this._getAnchorItem();
var cs=cz;
var cv=this.__my;
var cy,cr;

while(cv!==0){cy=cv>0?this._getRelatedSelectable(cs,H):this._getRelatedSelectable(cs,x);
if(cy!==null){cr=this._getSelectableLocationX(cy);
if((cv>0&&cr.left<=cq)||(cv<0&&cr.right>=cq)){cs=cy;
continue;
}}break;
}var cw=this.__mz;
var cu,ct;

while(cw!==0){cu=cw>0?this._getRelatedSelectable(cs,j):this._getRelatedSelectable(cs,F);
if(cu!==null){ct=this._getSelectableLocationY(cu);
if((cw>0&&ct.top<=cp)||(cw<0&&ct.bottom>=cp)){cs=cu;
continue;
}}break;
}var cA=this.getMode();

if(cA===m){this._selectItemRange(cz,cs);
}else if(cA===n){if(this.isItemSelected(cz)){this._selectItemRange(cz,cs,true);
}else{this._deselectItemRange(cz,cs);
}this._setAnchorItem(cs);
}this._fireChange(E);
},__mF:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var bu,bt;
var bw=event.getKeyIdentifier();
var bv=this.getMode();
var bq=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var br=event.isShiftPressed();
var bs=false;

if(bw===v&&bq){if(bv!==p&&bv!==q){this._selectAllItems();
bs=true;
}}else if(bw===y){if(bv!==p&&bv!==q){this._clearSelection();
bs=true;
}}else if(bw===w){var bp=this.getLeadItem();

if(bp&&!br){if(bq||bv===n){this._toggleInSelection(bp);
}else{this._setSelectedItem(bp);
}bs=true;
}}else if(this.__mF[bw]){bs=true;

if(bv===p||bv==q){bu=this._getSelectedItem();
}else{bu=this.getLeadItem();
}
if(bu!==null){switch(bw){case J:bt=this._getFirstSelectable();
break;
case K:bt=this._getLastSelectable();
break;
case O:bt=this._getRelatedSelectable(bu,F);
break;
case f:bt=this._getRelatedSelectable(bu,j);
break;
case h:bt=this._getRelatedSelectable(bu,x);
break;
case I:bt=this._getRelatedSelectable(bu,H);
break;
case k:bt=this._getPage(bu,true);
break;
case M:bt=this._getPage(bu,false);
break;
}}else{switch(bw){case J:case f:case I:case M:bt=this._getFirstSelectable();
break;
case K:case O:case h:case k:bt=this._getLastSelectable();
break;
}}if(bt!==null){switch(bv){case p:case q:this._setSelectedItem(bt);
break;
case n:this._setLeadItem(bt);
break;
case m:if(br){var bx=this._getAnchorItem();

if(bx===null){this._setAnchorItem(bx=this._getFirstSelectable());
}this._setLeadItem(bt);
this._selectItemRange(bx,bt,bq);
}else{this._setAnchorItem(bt);
this._setLeadItem(bt);

if(!bq){this._setSelectedItem(bt);
}}break;
}this._scrollItemIntoView(bt);
}}
if(bs){event.stop();
this._fireChange(A);
}},_selectAllItems:function(){var bj=this.getSelectables();

for(var i=0,l=bj.length;i<l;i++){this._addToSelection(bj[i]);
}},_clearSelection:function(){var bc=this.__ml;

for(var bd in bc){this._removeFromSelection(bc[bd]);
}this.__ml={};
},_selectItemRange:function(S,T,U){var X=this._getSelectableRange(S,T);
if(!U){var W=this.__ml;
var Y=this.__mG(X);

for(var V in W){if(!Y[V]){this._removeFromSelection(W[V]);
}}}for(var i=0,l=X.length;i<l;i++){this._addToSelection(X[i]);
}},_deselectItemRange:function(cI,cJ){var cK=this._getSelectableRange(cI,cJ);

for(var i=0,l=cK.length;i<l;i++){this._removeFromSelection(cK[i]);
}},__mG:function(cO){var cQ={};
var cP;

for(var i=0,l=cO.length;i<l;i++){cP=cO[i];
cQ[this._selectableToHashCode(cP)]=cP;
}return cQ;
},_getSelectedItem:function(){for(var ci in this.__ml){return this.__ml[ci];
}return null;
},_setSelectedItem:function(cj){if(this._isSelectable(cj)){var ck=this.__ml;
var cl=this._selectableToHashCode(cj);

if(!ck[cl]||qx.lang.Object.hasMinLength(ck,2)){this._clearSelection();
this._addToSelection(cj);
}}},_addToSelection:function(cR){var cS=this._selectableToHashCode(cR);

if(!this.__ml[cS]&&this._isSelectable(cR)){this.__ml[cS]=cR;
this._styleSelectable(cR,o,true);
this.__mA=true;
}},_toggleInSelection:function(cG){var cH=this._selectableToHashCode(cG);

if(!this.__ml[cH]){this.__ml[cH]=cG;
this._styleSelectable(cG,o,true);
}else{delete this.__ml[cH];
this._styleSelectable(cG,o,false);
}this.__mA=true;
},_removeFromSelection:function(cC){var cD=this._selectableToHashCode(cC);

if(this.__ml[cD]!=null){delete this.__ml[cD];
this._styleSelectable(cC,o,false);
this.__mA=true;
}},_replaceMultiSelection:function(bF){var bI=false;
var bL,bK;
var bG={};

for(var i=0,l=bF.length;i<l;i++){bL=bF[i];

if(this._isSelectable(bL)){bK=this._selectableToHashCode(bL);
bG[bK]=bL;
}}var bH=bL;
var bJ=this.__ml;

for(var bK in bJ){if(bG[bK]){delete bG[bK];
}else{bL=bJ[bK];
delete bJ[bK];
this._styleSelectable(bL,o,false);
bI=true;
}}for(var bK in bG){bL=bJ[bK]=bG[bK];
this._styleSelectable(bL,o,true);
bI=true;
}if(!bI){return false;
}this._scrollItemIntoView(bH);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__mA=true;
this._fireChange();
},_fireChange:function(bn){if(this.__mA){this.__mB=bn||null;
this.fireDataEvent(r,this.getSelection());
delete this.__mA;
}}},destruct:function(){this._disposeObjects(C);
this.__ml=this.__mE=this.__mD=null;
this.__mC=null;
}});
})();
(function(){var x="vertical",w="under",v="above",u="qx.ui.core.selection.Widget",t="left",s="right";
qx.Class.define(u,{extend:qx.ui.core.selection.Abstract,construct:function(M){arguments.callee.base.call(this);
this.__lg=M;
},members:{__lg:null,_isSelectable:function(g){return g.isEnabled()&&g.isVisible()&&g.getLayoutParent()===this.__lg;
},_selectableToHashCode:function(y){return y.$$hash;
},_styleSelectable:function(J,K,L){L?J.addState(K):J.removeState(K);
},_capture:function(){this.__lg.capture();
},_releaseCapture:function(){this.__lg.releaseCapture();
},_getWidget:function(){return this.__lg;
},_getLocation:function(){var r=this.__lg.getContentElement().getDomElement();
return r?qx.bom.element.Location.get(r):null;
},_getDimension:function(){return this.__lg.getInnerSize();
},_getSelectableLocationX:function(N){var O=N.getBounds();

if(O){return {left:O.left,right:O.left+O.width};
}},_getSelectableLocationY:function(F){var G=F.getBounds();

if(G){return {top:G.top,bottom:G.top+G.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(m,n){},_scrollItemIntoView:function(I){this.__lg.scrollChildIntoView(I);
},getSelectables:function(){var j=this.__lg.getChildren();
var k=[];
var h;

for(var i=0,l=j.length;i<l;i++){h=j[i];

if(h.isEnabled()&&h.isVisible()){k.push(h);
}}return k;
},_getSelectableRange:function(z,A){if(z===A){return [z];
}var E=this.__lg.getChildren();
var B=[];
var D=false;
var C;

for(var i=0,l=E.length;i<l;i++){C=E[i];

if(C===z||C===A){if(D){B.push(C);
break;
}else{D=true;
}}
if(D&&C.isEnabled()&&C.isVisible()){B.push(C);
}}return B;
},_getFirstSelectable:function(){var o=this.__lg.getChildren();

for(var i=0,l=o.length;i<l;i++){if(o[i].isEnabled()&&o[i].isVisible()){return o[i];
}}return null;
},_getLastSelectable:function(){var H=this.__lg.getChildren();

for(var i=H.length-1;i>0;i--){if(H[i].isEnabled()&&H[i].isVisible()){return H[i];
}}return null;
},_getRelatedSelectable:function(a,b){var e=this.__lg.getOrientation()===x;
var d=this.__lg.getChildren();
var c=d.indexOf(a);
var f;

if((e&&b===v)||(!e&&b===t)){for(var i=c-1;i>=0;i--){f=d[i];

if(f.isEnabled()&&f.isVisible()){return f;
}}}else if((e&&b===w)||(!e&&b===s)){for(var i=c+1;i<d.length;i++){f=d[i];

if(f.isEnabled()&&f.isVisible()){return f;
}}}return null;
},_getPage:function(p,q){if(q){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__lg=null;
}});
})();
(function(){var e="qx.ui.core.selection.ScrollArea";
qx.Class.define(e,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(a){return (a.isEnabled()&&a.isVisible()&&a.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var f=this._getWidget();
return {left:f.getScrollX(),top:f.getScrollY()};
},_scrollBy:function(b,c){var d=this._getWidget();
d.scrollByX(b);
d.scrollByY(c);
},_getPage:function(g,h){var m=this.getSelectables();
var length=m.length;
var p=m.indexOf(g);
if(p===-1){throw new Error("Invalid lead item: "+g);
}var j=this._getWidget();
var r=j.getScrollY();
var innerHeight=j.getInnerSize().height;
var top,l,q;

if(h){var o=r;
var i=p;
while(1){for(;i>=0;i--){top=j.getItemTop(m[i]);
if(top<o){q=i+1;
break;
}}if(q==null){var s=this._getFirstSelectable();
return s==g?null:s;
}if(q>=p){o-=innerHeight+r-j.getItemBottom(g);
q=null;
continue;
}return m[q];
}}else{var n=innerHeight+r;
var i=p;
while(1){for(;i<length;i++){l=j.getItemBottom(m[i]);
if(l>n){q=i-1;
break;
}}if(q==null){var k=this._getLastSelectable();
return k==g?null:k;
}if(q<=p){n+=j.getItemTop(g)-r;
q=null;
continue;
}return m[q];
}}}}});
})();
(function(){var q="horizontal",p="qx.event.type.Data",o="vertical",n="",m="qx.ui.form.List",k="Enter",j="one",h="addChildWidget",g="_applySpacing",f="Boolean",C="Integer",B="action",A="keyinput",z="addItem",y="removeChildWidget",x="_applyOrientation",w="__kY",v="single",u="keypress",t="list",r="pane",s="removeItem";
qx.Class.define(m,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(D){arguments.callee.base.call(this);
this.__kY=new qx.ui.container.Composite();
this.__kY.addListener(h,this._onAddChild,this);
this.__kY.addListener(y,this._onRemoveChild,this);
this.getChildControl(r).add(this.__kY);
if(D){this.setOrientation(q);
}else{this.initOrientation();
}this.addListener(u,this._onKeyPress);
this.addListener(A,this._onKeyInput);
this.__la=n;
},events:{addItem:p,removeItem:p},properties:{appearance:{refine:true,init:t},focusable:{refine:true,init:true},orientation:{check:[q,o],init:o,apply:x},spacing:{check:C,init:0,apply:g,themeable:true},enableInlineFind:{check:f,init:true}},members:{__la:null,__lb:null,__kY:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__kY;
},_onAddChild:function(e){this.fireDataEvent(z,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(s,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(N,O){var P=N===q;
var Q=P?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__kY;
content.setLayout(Q);
content.setAllowGrowX(!P);
content.setAllowGrowY(P);
this._applySpacing(this.getSpacing());
},_applySpacing:function(c,d){this.__kY.getLayout().setSpacing(c);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==k&&!e.isAltPressed()){var E=this.getSelection();

for(var i=0;i<E.length;i++){E[i].fireEvent(B);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var a=this.getSelectionMode();

if(!(a===v||a===j)){return;
}if(((new Date).valueOf()-this.__lb)>1000){this.__la=n;
}this.__la+=e.getChar();
var b=this.findItemByLabelFuzzy(this.__la);
if(b){this.setSelection([b]);
}this.__lb=(new Date).valueOf();
},findItemByLabelFuzzy:function(F){F=F.toLowerCase();
var G=this.getChildren();
for(var i=0,l=G.length;i<l;i++){var H=G[i].getLabel();
if(H&&H.toLowerCase().indexOf(F)==0){return G[i];
}}return null;
},findItem:function(I,J){if(J!==false){I=I.toLowerCase();
}var K=this.getChildren();
var M;
for(var i=0,l=K.length;i<l;i++){M=K[i];
var L;

if(M.getLabel()!=null){L=M.getLabel();

if(L.translate){L=L.translate();
}
if(J!==false){L=L.toLowerCase();
}}
if(L.toString()==I.toString()){return M;
}}return null;
}},destruct:function(){this._disposeObjects(w);
}});
})();
(function(){var i="hovered",h="slider",g="losecapture",f="preview-list",e="mouseover",d="mouseout",c="showcase.ui.PreviewList",b="scrollbar-x",a="knob";
qx.Class.define(c,{extend:qx.ui.form.List,construct:function(){arguments.callee.base.call(this,true);
var j=this.getChildControl(b).getChildControl(h);
this._knob=j.getChildControl(a);
this._knob.addListener(e,function(){this._knob.addState(i);
},this);
this._knob.addListener(d,this._onMouseOut,this);
j.addListener(g,this._onMouseOut,this);
},properties:{appearance:{refine:true,init:f},height:{refine:true,init:null}},members:{_onMouseOut:function(){this._knob.removeState(i);
}}});
})();
(function(){var s="complete",r="display",q="_applySelectedPage",p="Boolean",o="showcase/images/welcome.png",n="showcase.Application",m="qx.client",l="stack",k="showcase/images/loading66.gif",j="selection[0]",L="selection[0].readyState",K="none",J="value",I="selection[0].description",H="showcase",G="name",F="icon",E="selectedPage",D="showcase.Page",C="state",z="_applyShowLoadIndicator",A="en_US",x="page-preview",y="50%",v="mshtml",w="update",t="block",u="selection[0].part",B="showLoadIndicator";
qx.Class.define(n,{extend:qx.application.Inline,properties:{selectedPage:{check:D,apply:q,nullable:true},showLoadIndicator:{check:p,init:false,apply:z}},members:{__HX:null,__HY:null,__Ia:null,__Ib:null,__Ic:null,__Id:null,main:function(){arguments.callee.base.call(this);
{};
qx.locale.Manager.getInstance().setLocale(A);
var V=new qx.ui.layout.Grid();
V.setColumnFlex(0,1);
V.setRowFlex(1,1);
var ba=0;
var U=document.getElementById(H);
var P=new qx.ui.root.Inline(U,false,false);
P.set({layout:V,width:900,minHeight:650,allowGrowX:false,height:null});
var Q=new showcase.ui.PreviewList();
P.add(Q,{row:ba++,column:0,colSpan:2});
this.__HX=new qx.ui.container.Stack();
this.__HX.set({appearance:l,maxWidth:600,allowGrowX:false});
P.add(this.__HX,{row:ba,column:0});
var T=new qx.ui.basic.Image(o).set({allowGrowX:true,allowGrowY:true,allowShrinkX:true,padding:[5,0,0,180]});
this.__HX.add(T);
this.__Ia=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var W=new qx.ui.basic.Image(k).set({marginLeft:-33});
this.__Ia.add(W,{left:y,top:200});
this.__HX.add(this.__Ia);
this.__Ib=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
this.__HX.add(this.__Ib);
this.__Id=new showcase.ui.Description();
P.add(this.__Id,{row:ba++,column:1});
this.__Id.exclude();
var X=new qx.data.Array();
X.push(new showcase.page.table.Page(),new showcase.page.form.Page(),new showcase.page.tree.Page(),new showcase.page.databinding.Page(),new showcase.page.theme.Page(),new showcase.page.i18n.Page(),new showcase.page.dragdrop.Page(),new showcase.page.htmleditor.Page());
var Y=new qx.data.controller.List(X,Q,G);
Y.setIconPath(F);
Y.bind(j,this,E);
Y.bind(I,this.__Id,J);
Y.bind(L,this,B,{converter:function(e){return e!==s;
}});
Y.setDelegate({configureItem:function(N){N.set({appearance:x});
}});
var history=qx.bom.History.getInstance();
Y.bind(u,history,C);
var S=history.getState();

if(S){var R;

for(var i=0;i<X.getLength();i++){if(X.getItem(i).getPart()===S){R=X.getItem(i);
break;
}}
if(R){qx.ui.core.queue.Manager.flush();
Y.getSelection().push(R);
}}},_applyShowLoadIndicator:function(g){if(g){this.__HX.setSelection([this.__Ia]);
}else{this.__HX.setSelection([this.__Ib]);
}},_applySelectedPage:function(a,b){if(b){this._hidePage(b);
}this._showPage(a);
},_hidePage:function(O){if(this.getSelectedPage()!==O){if(O.getReadyState()==s){O.getContent().getView().hide();
this.__Ie();
}}},_showPage:function(h){this.__Id.show();
h.load(function(c){if(this.getSelectedPage()==c){var d=c.getContent().getView();
this.__Ib.add(d,{edge:0});
d.show();
this.__If(d);
}},this);
},__Ie:function(){if(this.__Ic){this.__Ic.cancel();
this.__Ic.dispose();
this.__Ic=null;
}},__If:function(f){if(qx.core.Variant.isSet(m,v)){return;
}f.getContentElement().setStyle(r,K,true);
this.__Ie();
qx.event.Timer.once(function(){var M=f.getContentElement().getDomElement();
this.__Ic=new qx.fx.effect.core.Fade(M);
this.__Ic.set({from:0,to:1});
this.__Ic.addListenerOnce(w,function(){f.getContentElement().setStyle(r,t);
},this);
this.__Ic.start();
},this,0);
}}});
})();
(function(){var j="}",i="  color: #444444;",h="  font-weight: bold;",g="  line-height: 130%;",f="  font-size: 15px;",e="  font-size: 24px;",d="#description h1 {",c="#i18n td {",b="  color: rgb(131, 179, 0);",a="  text-decoration: underline;",C="  font-size: 12px;",B="  color: #83B300;",A="#description {",z="  padding-left: 10px;",y="#description h2 {",x="#description ul {",w="  font-size: 10px;",v="  padding: 10px 0px 5px 0px;",u="  line-height: 140%;",t='  font-family: Verdana,"Bitstream Vera Sans","Lucida Grande",Tahoma,"Lucida Sans Unicode",Arial,sans-serif;',q="  margin: 10px 0 4px 0;",r="showcase.ui.Description",o="\n",p="#description li {",m="  padding-left: 20px;",n="#description a {",k="description",l="  color: rgb(16, 66, 117);",s="#description a:hover, #description a:active {";
qx.Class.define(r,{extend:qx.ui.basic.Label,construct:function(){arguments.callee.base.call(this);
this.__Ig();
this.setRich(true);
this.setSelectable(true);
},properties:{appearance:{refine:true,init:k},allowGrowX:{refine:true,init:false},nativeContextMenu:{init:true,refine:true},allowGrowY:{refine:true,init:true}},members:{__Ig:function(){var D=[A,t,i,C,u,z,j,n,a,i,j,s,B,j,y,b,v,f,h,j,d,e,g,q,l,h,j,x,m,j,p,i,j,c,w,j];
qx.bom.Stylesheet.createElement(D.join(o));
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
this.__qR();
},members:{__qO:null,__qP:false,__qQ:null,_setInitialState:function(){arguments.callee.base.call(this);
this.__qQ=this._getHash();
},_setHash:function(v){arguments.callee.base.call(this,v);
this.__qQ=this._encode(v);
},_readState:function(){if(!this.__qP){return this._decode(this._getHash());
}var q=this.__qO.contentWindow.document;
var r=q.getElementById(j);
return r?this._decode(r.innerText):m;
},_writeState:function(s){var s=this._encode(s);
this._setHash(s);
this.__qQ=s;

try{var t=this.__qO.contentWindow.document;
t.open();
t.write(i+s+h);
t.close();
}catch(w){}},__qR:function(){this.__qV(function(){qx.event.Idle.getInstance().addListener(p,this.__qS,this);
});
},__qS:function(e){var C=null;
var B=this._getHash();

if(!this.__qU(B)){C=this.__qT(B);
}else{C=this._readState();
}
if(qx.lang.Type.isString(C)&&C!=this.getState()){this._onHistoryLoad(C);
}},__qT:function(a){a=this._decode(a);
this._writeState(a);
return a;
},__qU:function(b){return qx.lang.Type.isString(b)&&b==this.__qQ;
},__qV:function(u){this.__qO=this.__qW();
document.body.appendChild(this.__qO);
this.__qX(function(){this._writeState(this.getState());

if(u){u.call(this);
}},this);
},__qW:function(){var A=qx.bom.Iframe.create({src:qx.util.ResourceManager.getInstance().toUri(k)});
A.style.visibility=g;
A.style.position=d;
A.style.left=o;
A.style.top=o;
return A;
},__qX:function(x,y,z){if(typeof z===f){z=0;
}
if(!this.__qO.contentWindow||!this.__qO.contentWindow.document){if(z>20){throw new Error("can't initialize iframe");
}qx.event.Timer.once(function(){this.__qX(x,y,++z);
},this,10);
return;
}this.__qP=true;
x.call(y||window);
}},destruct:function(){this.__qO=null;
qx.event.Idle.getInstance().addListener(p,this.__qS,this);
}});
}})();
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
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var u="change",t="add",s="remove",r="order",q="",p="qx.data.Array",o="?",n="changeBubble",m="qx.event.type.Event",l="number",j="changeLength",k="qx.event.type.Data";
qx.Class.define(p,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(G){arguments.callee.base.call(this);
if(G==undefined){this.__ki=[];
}else if(arguments.length>1){this.__ki=[];

for(var i=0;i<arguments.length;i++){this.__ki.push(arguments[i]);
}}else if(typeof G==l){this.__ki=new Array(G);
}else if(G instanceof Array){this.__ki=qx.lang.Array.clone(G);
}else{this.__ki=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__ki.length;i++){this._applyEventPropagation(this.__ki[i],null,i);
}this.__kj();
},events:{"change":k,"changeLength":m},members:{__ki:null,concat:function(bg){if(bg){var bh=this.__ki.concat(bg);
}else{var bh=this.__ki.concat();
}return new qx.data.Array(bh);
},join:function(V){return this.__ki.join(V);
},pop:function(){var z=this.__ki.pop();
this.__kj();
this._applyEventPropagation(null,z,this.length-1);
this.fireDataEvent(u,{start:this.length-1,end:this.length-1,type:s,items:[z]},null);
return z;
},push:function(bb){for(var i=0;i<arguments.length;i++){this.__ki.push(arguments[i]);
this.__kj();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(u,{start:this.length-1,end:this.length-1,type:t,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__ki.reverse();
this.fireDataEvent(u,{start:0,end:this.length-1,type:r,items:null},null);
},shift:function(){var T=this.__ki.shift();
this.__kj();
this._applyEventPropagation(null,T);
this.fireDataEvent(u,{start:0,end:this.length-1,type:s,items:[T]},null);
return T;
},slice:function(W,X){return new qx.data.Array(this.__ki.slice(W,X));
},splice:function(I,J,K){var Q=this.__ki.length;
var N=this.__ki.splice.apply(this.__ki,arguments);
if(this.__ki.length!=Q){this.__kj();
}var O=J>0;
var L=arguments.length>2;
var M=null;

if(O||L){if(this.__ki.length>Q){var P=t;
}else if(this.__ki.length<Q){var P=s;
M=N;
}else{var P=r;
}this.fireDataEvent(u,{start:I,end:this.length-1,type:P,items:M},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,I+i);
}this.fireDataEvent(n,{value:this,name:o,old:N});
for(var i=0;i<N.length;i++){this._applyEventPropagation(null,N[i],i);
}return (new qx.data.Array(N));
},sort:function(R){this.__ki.sort.apply(this.__ki,arguments);
this.fireDataEvent(u,{start:0,end:this.length-1,type:r,items:null},null);
},unshift:function(h){for(var i=arguments.length-1;i>=0;i--){this.__ki.unshift(arguments[i]);
this.__kj();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(u,{start:0,end:this.length-1,type:t,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__ki;
},getItem:function(e){return this.__ki[e];
},setItem:function(a,b){var c=this.__ki[a];
this.__ki[a]=b;
this._applyEventPropagation(b,c,a);
if(this.length!=this.__ki.length){this.__kj();
}this.fireDataEvent(u,{start:a,end:a,type:t,items:[b]},null);
},getLength:function(){return this.length;
},indexOf:function(d){return this.__ki.indexOf(d);
},toString:function(){if(this.__ki!=null){return this.__ki.toString();
}return q;
},contains:function(bc){return this.__ki.indexOf(bc)!==-1;
},copy:function(){return this.concat();
},insertAt:function(C,D){this.splice(C,0,D);
},insertBefore:function(bd,be){var bf=this.indexOf(bd);

if(bf==-1){this.push(be);
}else{this.splice(bf,0,be);
}},insertAfter:function(v,w){var x=this.indexOf(v);

if(x==-1||x==(this.length-1)){this.push(w);
}else{this.splice(x+1,0,w);
}},removeAt:function(S){return this.splice(S,1)[0];
},removeAll:function(){for(var i=0;i<this.__ki.length;i++){this._applyEventPropagation(null,this.__ki[i],i);
}var F=this.getLength();
var E=this.__ki.concat();
this.__ki.length=0;
this.__kj();
this.fireDataEvent(u,{start:0,end:F-1,type:s,items:E},null);
},append:function(U){{};
for(var i=0;i<U.length;i++){this._applyEventPropagation(U[i],null,this.__ki.length+i);
}Array.prototype.push.apply(this.__ki,U);
this.__kj();
},remove:function(Y){var ba=this.indexOf(Y);

if(ba!=-1){this.splice(ba,1);
return Y;
}},equals:function(A){if(this.length!==A.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==A.getItem(i)){return false;
}}return true;
},sum:function(){var H=0;

for(var i=0;i<this.length;i++){H+=this.getItem(i);
}return H;
},max:function(){var y=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>y){y=this.getItem(i);
}}return y===undefined?null:y;
},min:function(){var B=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<B){B=this.getItem(i);
}}return B===undefined?null:B;
},forEach:function(f,g){for(var i=0;i<this.__ki.length;i++){f.call(g,this.__ki[i]);
}},__kj:function(){this.length=this.__ki.length;
this.fireEvent(j,qx.event.type.Event);
}},destruct:function(){this.__ki=null;
}});
})();
(function(){var c="listitem",b="qx.ui.form.ListItem",a="qx.event.type.Event";
qx.Class.define(b,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(d,e,f){arguments.callee.base.call(this,d,e);

if(f!=null){this.setModel(f);
}},events:{"action":a},properties:{appearance:{refine:true,init:c}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true}}});
})();
(function(){var f="qx.event.handler.Iframe",e="load",d="iframe";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(g){qx.event.Registration.fireEvent(g,e);
})},members:{canHandleEvent:function(i,j){return i.tagName.toLowerCase()===d;
},registerEvent:function(k,l,m){},unregisterEvent:function(a,b,c){}},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var n="qx.client",m="webkit",l="body",k="iframe",j="qx.bom.Iframe";
qx.Class.define(j,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(p,q){var p=p?qx.lang.Object.clone(p):{};
var r=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var s in r){if(p[s]==null){p[s]=r[s];
}}return qx.bom.Element.create(k,p,q);
},getWindow:qx.core.Variant.select(n,{"mshtml|gecko":function(o){try{return o.contentWindow;
}catch(t){return null;
}},"default":function(h){try{var i=this.getDocument(h);
return i?i.defaultView:null;
}catch(a){return null;
}}}),getDocument:qx.core.Variant.select(n,{"mshtml":function(B){try{var C=this.getWindow(B);
return C?C.document:null;
}catch(u){return null;
}},"default":function(A){try{return A.contentDocument;
}catch(z){return null;
}}}),getBody:function(x){try{var y=this.getDocument(x);
return y?y.getElementsByTagName(l)[0]:null;
}catch(w){return null;
}},setSource:function(c,d){try{if(this.getWindow(c)&&qx.dom.Hierarchy.isRendered(c)){try{if(qx.core.Variant.isSet(n,m)&&qx.bom.client.Platform.MAC){var e=this.getContentWindow();

if(e){e.stop();
}}this.getWindow(c).location.replace(d);
}catch(b){c.src=d;
}}else{c.src=d;
}}catch(v){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(f){var g=this.getDocument(f);

try{if(g&&g.location){return g.location.href;
}}catch(D){}return null;
}}});
})();
(function(){var p="changeSelection",o="change",n="qx.data.Array",m="qx.data.controller.MSelection",l="_applySelection",k="target";
qx.Mixin.define(m,{construct:function(){if(!qx.Class.hasProperty(this.constructor,k)){throw new Error("Target property is needed.");
}if(this.getSelection()==null){this.setSelection(new qx.data.Array());
}},properties:{selection:{check:n,event:p,apply:l,init:null}},members:{_modifingSelection:0,__ly:null,__lz:null,_applySelection:function(h,j){if(this.__lz!=undefined&&j!=undefined){j.removeListenerById(this.__lz);
}this.__lz=h.addListener(o,this.__lA,this);
},__lA:function(){this._updateSelection();
},_changeTargetSelection:function(){if(this._inSelectionModification()||this.getTarget()==null){return;
}var g=this.getTarget().getSelection();
var f=this.getSelection();

if(f==null){f=new qx.data.Array();
this.setSelection(f);
}if(g.length>0){f.toArray().splice(0,f.getLength());
}else{f.splice(0,this.getSelection().getLength());
}for(var i=0;i<g.length;i++){var e=g[i].getModel();

if(i+1==g.length){f.push(e);
}else{f.toArray().push(e);
}}this.fireDataEvent(p,this.getSelection());
},_addChangeTargetListener:function(w,x){if(this.__ly!=undefined&&x!=undefined){x.removeListenerById(this.__ly);
}
if(w!=null){if(this.__lB()||this.__lC()){this.__ly=w.addListener(p,this._changeTargetSelection,this);
}}},_updateSelection:function(){this._startSelectionModification();
if(this.__lB()){var t=[];
for(var i=0;i<this.getSelection().length;i++){var s=this.getSelection().getItem(i);
var u=this.__lE(s);

if(u!=null){t.push(u);
}}this.getTarget().setSelection(t);
t=this.getTarget().getSelection();
var v=[];

for(var i=0;i<t.length;i++){v[i]=t[i].getModel();
}for(var i=this.getSelection().length-1;i>=0;i--){if(!qx.lang.Array.contains(v,this.getSelection().getItem(i))){this.getSelection().splice(i,1);
}}}else if(this.__lC()){this.__lD(this.getSelection().getItem(this.getSelection().length-1));
this.getSelection().splice(0,this.getSelection().getLength()-1);
}this._endSelectionModification();
},__lB:function(){var c=this.getTarget().constructor;
return qx.Class.implementsInterface(c,qx.ui.core.IMultiSelection);
},__lC:function(){var d=this.getTarget().constructor;
return qx.Class.implementsInterface(d,qx.ui.core.ISingleSelection);
},__lD:function(a){var b=this.__lE(a);
if(b==null){return;
}if(this.__lB()){this.getTarget().addToSelection(b);
}else if(this.__lC()){this.getTarget().setSelection([b]);
}},__lE:function(q){var r=this.getTarget().getSelectables();
for(var i=0;i<r.length;i++){if(r[i].getModel()==q){return r[i];
}}return null;
},_startSelectionModification:function(){this._modifingSelection++;
},_endSelectionModification:function(){this._modifingSelection>0?this._modifingSelection--:null;
},_inSelectionModification:function(){return this._modifingSelection>0;
}}});
})();
(function(){var bt="change",bs="ReverseBindingId",br="BindingId",bq="",bp="]",bo="model[",bn="String",bm=".",bl="changeModel",bk="_applyLabelOptions",bG="_applyLabelPath",bF="changeTarget",bE="changeLength",bD="_applyModel",bC="icon",bB="qx.data.controller.List",bA="_applyIconPath",bz="_applyDelegate",by="changeDelegate",bx="_applyTarget",bv="qx.data.IListData",bw="label",bu="_applyIconOptions";
qx.Class.define(bB,{extend:qx.core.Object,include:qx.data.controller.MSelection,construct:function(T,U,V){arguments.callee.base.call(this);
this.__nM=[];
this.__nN=[];
this.__nO=[];
this.__nP={};

if(V!=null){this.setLabelPath(V);
}
if(T!=null){this.setModel(T);
}
if(U!=null){this.setTarget(U);
}},properties:{model:{check:bv,apply:bD,event:bl,nullable:true},target:{apply:bx,event:bF,nullable:true,init:null},labelPath:{check:bn,apply:bG,nullable:true},iconPath:{check:bn,apply:bA,nullable:true},labelOptions:{apply:bk,nullable:true},iconOptions:{apply:bu,nullable:true},delegate:{apply:bz,event:by,init:null,nullable:true}},members:{__nQ:null,__nR:null,__nM:null,__nP:null,__nN:null,__nO:null,update:function(){this.__nT();
this.__nX();
this._updateSelection();
},_applyDelegate:function(C,D){this._setConfigureItem(C,D);
this._setFilter(C,D);
this._setCreateItem(C,D);
this._setBindItem(C,D);
},_applyIconOptions:function(A,B){this.__nX();
},_applyLabelOptions:function(bL,bM){this.__nX();
},_applyIconPath:function(W,X){this.__nX();
},_applyLabelPath:function(d,e){this.__nX();
},_applyModel:function(G,H){if(H!=undefined){if(this.__nQ!=undefined){H.removeListenerById(this.__nQ);
}
if(this.__nR!=undefined){H.removeListenerById(this.__nR);
}}if(this.getSelection()!=undefined&&this.getSelection().length>0){this.getSelection().splice(0,this.getSelection().length);
}if(G!=null){this.__nQ=G.addListener(bE,this.__nT,this);
this.__nR=G.addListener(bt,this.__nS,this);
this.__oa();
this.__nT();
if(this.getTarget()!=null){var J=this.getModel();
var K=this.getTarget().getChildren();

for(var i=0,l=this.__nM.length;i<l;i++){var L=J.getItem(this.__ob(i));
var I=K[i];
I.setModel(L);
}}this._changeTargetSelection();
}},_applyTarget:function(Y,ba){this._addChangeTargetListener(Y,ba);
if(ba!=undefined){ba.removeAll();
this.removeAllBindings();
}
if(Y!=null){if(this.getModel()!=null){for(var i=0;i<this.__nM.length;i++){this.__nV(this.__ob(i));
}}}},__nS:function(){for(var i=this.getSelection().length-1;i>=0;i--){if(!this.getModel().contains(this.getSelection().getItem(i))){this.getSelection().splice(i,1);
}}qx.ui.core.queue.Widget.add(this);
if(this.__nM.length!=this.getModel().getLength()){this.update();
}},syncWidget:function(){this._updateSelection();
},__nT:function(){if(this.getTarget()==null){return;
}this.__oa();
var bO=this.__nM.length;
var bN=this.getTarget().getChildren().length;
if(bO>bN){for(var j=bN;j<bO;j++){this.__nV(this.__ob(j));
}}else if(bO<bN){for(var j=bN;j>bO;j--){this.__nW();
}}},__nU:function(){var m=this.getModel();
if(m!=null){m.removeListenerById(this.__nR);
this.__nR=m.addListener(bt,this.__nS,this);
}},_createItem:function(){var x=this.getDelegate();
if(x!=null&&x.createItem!=null){var w=x.createItem();
}else{var w=new qx.ui.form.ListItem();
}if(x!=null&&x.configureItem!=null){x.configureItem(w);
}return w;
},__nV:function(bb){var bc=this._createItem();
bc.setModel(this.getModel().getItem(bb)||null);
this._bindListItem(bc,bb);
this.getTarget().add(bc);
},__nW:function(){this._startSelectionModification();
var R=this.getTarget().getChildren();
var Q=R.length-1;
var S=R[Q];
this._removeBindingsFrom(S);
this.getTarget().removeAt(Q);
S.destroy();
this._endSelectionModification();
},getVisibleModels:function(){var a=[];
var b=this.getTarget();

if(b!=null){var c=b.getChildren();

for(var i=0;i<c.length;i++){a.push(c[i].getModel());
}}return new qx.data.Array(a);
},_bindListItem:function(bH,bI){var bJ=this.getDelegate();
if(bJ!=null&&bJ.bindItem!=null){bJ.bindItem(this,bH,bI);
}else{this.bindDefaultProperties(bH,bI);
}},bindDefaultProperties:function(n,o){this.bindProperty(this.getLabelPath(),bw,this.getLabelOptions(),n,o);
if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),bC,this.getIconOptions(),n,o);
}},bindProperty:function(bd,be,bf,bg,bh){bg.setModel(this.getModel().getItem(bh));
if(bf!=null){var bf=qx.lang.Object.clone(bf);
this.__nP[be]=bf.onUpdate;
delete bf.onUpdate;
}else{bf={};
this.__nP[be]=null;
}bf.onUpdate=qx.lang.Function.bind(this._onBindingSet,this,bh);
var bi=bo+bh+bp;

if(bd!=null&&bd!=bq){bi+=bm+bd;
}var bj=this.bind(bi,bg,be,bf);
bg.setUserData(be+br,bj);
if(!qx.lang.Array.contains(this.__nN,be)){this.__nN.push(be);
}},bindPropertyReverse:function(p,q,r,s,t){var u=bo+t+bp;

if(p!=null&&p!=bq){u+=bm+p;
}var v=s.bind(q,this,u,r);
s.setUserData(p+bs,v);
if(!qx.lang.Array.contains(this.__nO,p)){this.__nO.push(p);
}},_onBindingSet:function(M,N,O){if(this.getModel()==null||this._inSelectionModification()){return;
}for(var i=0;i<this.__nN.length;i++){if(this.__nP[this.__nN[i]]!=null){this.__nP[this.__nN[i]]();
}}var P=this.getModel().getItem(M);
O.setModel(P==undefined?null:P);
},_removeBindingsFrom:function(E){for(var i=0;i<this.__nN.length;i++){var F=E.getUserData(this.__nN[i]+br);

if(F!=null){this.removeBinding(F);
}}for(var i=0;i<this.__nO.length;i++){var F=E.getUserData(this.__nO[i]+bs);

if(F!=null){E.removeBinding(F);
}}},__nX:function(){if(this.getTarget()==null||this.getModel()==null){return;
}var bK=this.getTarget().getChildren();
for(var i=0;i<bK.length;i++){this._removeBindingsFrom(bK[i]);
this._bindListItem(bK[i],this.__ob(i));
}this.__nU();
},_setConfigureItem:function(bS,bT){if(bS!=null&&bS.configureItem!=null&&this.getTarget()!=null){var bU=this.getTarget().getChildren();

for(var i=0;i<bU.length;i++){bS.configureItem(bU[i]);
}}},_setBindItem:function(y,z){if(y!=null&&y.bindItem!=null){if(z!=null&&z.bindItem!=null&&y.bindItem==z.bindItem){return;
}this.__nX();
}},_setCreateItem:function(f,g){if(this.getTarget()==null||this.getModel()==null||f==null||f.createItem==null){return;
}this._startSelectionModification();
var h=this.getTarget().getChildren();

for(var i=0,l=h.length;i<l;i++){this._removeBindingsFrom(h[i]);
}this.getTarget().removeAll();
this.update();
this._endSelectionModification();
this._updateSelection();
},_setFilter:function(bV,bW){if((bV==null||bV.filter==null)&&(bW!=null&&bW.filter!=null)){this.__nY();
}if(this.getTarget()==null||this.getModel()==null||bV==null||bV.filter==null){return;
}this._startSelectionModification();
var cb=this.getTarget().getChildren();

for(var i=0,l=cb.length;i<l;i++){this._removeBindingsFrom(cb[i]);
}var bY=this.__nM;
this.__oa();
if(bY.length>this.__nM.length){for(var j=bY.length;j>this.__nM.length;j--){this.getTarget().removeAt(j-1);
}}else if(bY.length<this.__nM.length){for(var j=bY.length;j<this.__nM.length;j++){var ca=this._createItem();
this.getTarget().add(ca);
}}var bX=this.getTarget().getChildren();

for(var i=0;i<bX.length;i++){this._bindListItem(bX[i],this.__ob(i));
}this.__nU();
this._endSelectionModification();
this._updateSelection();
},__nY:function(){this.__oa();
this.__nT();
this.__nX();
qx.ui.core.queue.Widget.add(this);
},__oa:function(){var bQ=this.getModel();

if(bQ==null){return;
}var bR=this.getDelegate();

if(bR!=null){var bP=bR.filter;
}this.__nM=[];

for(var i=0;i<bQ.getLength();i++){if(bP==null||bP(bQ.getItem(i))){this.__nM.push(i);
}}},__ob:function(k){return this.__nM[k];
}},destruct:function(){this.__nM=this.__nP=this.__nN=null;
this.__nO=null;
}});
})();
(function(){var d="showcase.Page",c="showcase.AbstractContent",b="qx.ui.core.Widget";
qx.Class.define(c,{extend:qx.core.Object,construct:function(a){this.setPage(a);
},properties:{page:{check:d},view:{check:b}}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var h="qx.data.model.",g="-",f="",e='"',d="change",c="qx.data.marshal.Json",b="set",a="_applyEventPropagation";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(l){arguments.callee.base.call(this);
this.__ub=l;
},statics:{__uc:null,createModel:function(j,k){if(this.__uc===null){this.__uc=new qx.data.marshal.Json();
}this.__uc.toClass(j,k);
return this.__uc.toModel(j);
}},members:{__ub:null,__ud:function(m){var n=[];

for(var o in m){n.push(o);
}return n.sort().join(e);
},toClass:function(y,z){if(qx.lang.Type.isNumber(y)||qx.lang.Type.isString(y)||qx.lang.Type.isBoolean(y)||y==null){return;
}if(qx.lang.Type.isArray(y)){for(var i=0;i<y.length;i++){this.toClass(y[i],z);
}return ;
}var B=this.__ud(y);
if(this.__ub&&this.__ub.getModelClass&&this.__ub.getModelClass(B)!=null){return;
}for(var F in y){this.toClass(y[F],z);
}if(qx.Class.isDefined(h+B)){return;
}var G={};

for(var F in y){F=F.replace(g,f);
G[F]={};
G[F].nullable=true;
G[F].event=d+qx.lang.String.firstUp(F);

if(z){G[F].apply=a;
}}if(this.__ub&&this.__ub.getModelSuperClass){var E=this.__ub.getModelSuperClass(B)||qx.core.Object;
}else{var E=qx.core.Object;
}var C=[];

if(this.__ub&&this.__ub.getModelMixins){var D=this.__ub.getModelMixins(B);
if(!qx.lang.Type.isArray(D)){if(D!=null){C=[D];
}}}if(z){C.push(qx.data.marshal.MEventBubbling);
}var A={extend:E,include:C,properties:G};
qx.Class.define(h+B,A);
},__ue:function(v){var w;
if(this.__ub&&this.__ub.getModelClass){w=this.__ub.getModelClass(v);
}
if(w!=null){return (new w());
}else{var x=qx.Class.getByName(h+v);
return (new x());
}},toModel:function(p){if(qx.lang.Type.isNumber(p)||qx.lang.Type.isString(p)||qx.lang.Type.isBoolean(p)||qx.lang.Type.isDate(p)||p==null){return p;
}else if(qx.lang.Type.isArray(p)){var t=new qx.data.Array();

for(var i=0;i<p.length;i++){t.push(this.toModel(p[i]));
}return t;
}else if(qx.lang.Type.isObject(p)){var q=this.__ud(p);
var u=this.__ue(q);
for(var s in p){var r=s.replace(g,f);
u[b+qx.lang.String.firstUp(r)](this.toModel(p[s]));
}return u;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__ub=null;
}});
})();
(function(){var w="dragover",v="items",u="drag",t="dragend",s="drop",r="droprequest",q="dragstart",p="groupbox/legend",o="printer",n="icon",bu="Battery",bt="Scanner",bs=".png",br="Soundblaster",bq="Cart",bp="Cell Phone",bo="BluRay Drive",bn="computer",bm="WiFi",bl="camera-photo",D="Printer",E="DVD",B="network-wired",C="Keyboard",z="HDD",A="center",x="name",y="Computer",H="pda",I="move",Q="showcase.page.dragdrop.Content",O="middle",Y="PDA",T="Camera",bh="selected",be="iPod",K="icon/64/actions/object-flip-horizontal.png",bk="network-wireless",bj="Mouse",bi="drive-optical",J="camera-web",M="media-flash",N="Display",P="Mic.",R="input-mouse",U="SD Card",bb="Network Cable",bg="icon/64/devices/",F="battery",G="drive-harddisk",L="scanner",X="audio-input-microphone",W="media-optical",V="Shop",bd="phone",bc="Webcam",S="input-keyboard",ba="multimedia-player",m="audio-card",bf="display";
qx.Class.define(Q,{extend:showcase.AbstractContent,construct:function(bx){arguments.callee.base.call(this,bx);
this.setView(this._createView());
},members:{__Go:null,__Gp:null,_createView:function(){var j=new qx.ui.layout.Grid();
j.setRowFlex(1,1);
j.setColumnFlex(0,1);
j.setColumnFlex(2,1);
j.setColumnAlign(1,A,O);
var k=new qx.ui.container.Composite(j);
k.setPadding(20);
k.add(new qx.ui.basic.Label(V).set({appearance:p,paddingBottom:5}),{row:0,column:0});
k.add(new qx.ui.basic.Label(bq).set({appearance:p,paddingBottom:5}),{row:0,column:2});
var b=new qx.ui.form.List();
b.set({draggable:true,droppable:true});
k.add(b,{row:1,column:0});
b.addListener(q,this.__Gs,this);
b.addListener(r,this.__Gr,this);
b.addListener(s,this.__Gq,this);
b.addListener(u,this.__Gu,this);
b.addListener(t,this.__Gt,this);
var g=new qx.ui.basic.Image(K);
g.setPadding(10);
k.add(g,{row:1,column:1});
var h=new qx.ui.form.List();
h.set({draggable:true,droppable:true});
k.add(h,{row:1,column:2});
h.addListener(q,this.__Gs,this);
h.addListener(r,this.__Gr,this);
h.addListener(s,this.__Gq,this);
h.addListener(u,this.__Gu,this);
h.addListener(t,this.__Gt,this);
var c=qx.data.marshal.Json.createModel([{"name":bt,"icon":L},{"name":br,"icon":m},{"name":P,"icon":X},{"name":bu,"icon":F},{"name":T,"icon":bl},{"name":bc,"icon":J},{"name":y,"icon":bn},{"name":N,"icon":bf},{"name":z,"icon":G},{"name":bo,"icon":bi},{"name":C,"icon":S},{"name":bj,"icon":R},{"name":U,"icon":M},{"name":E,"icon":W},{"name":be,"icon":ba},{"name":bb,"icon":B},{"name":bm,"icon":bk},{"name":Y,"icon":H},{"name":bp,"icon":bd},{"name":D,"icon":o}]);
var d=new qx.data.controller.List(null,b);
d.setLabelPath(x);
d.setIconPath(n);
d.setIconOptions({converter:function(bw){return bg+bw+bs;
}});
d.setModel(c);
var f=new qx.ui.form.ListItem();
this.__Go=f;
f.setOpacity(0.5);
f.setZIndex(500);
f.addState(bh);
f.setLayoutProperties({left:-1000,top:-1000});
qx.core.Init.getApplication().getRoot().add(f);
return k;
},__Gq:function(e){var by=e.getData(v);
var bA=e.getOriginalTarget();
var bz=e.getTarget();

if(bA instanceof qx.ui.form.List){for(var i=0,l=by.length;i<l;i++){bz.add(by[i]);
}}else if(bA instanceof qx.ui.form.ListItem){for(var i=by.length-1;i>=0;i--){bz.addAfter(by[i],bA);
}}},__Gr:function(e){var bC=e.getTarget();
var bB=bC.getSelection().concat();
e.addData(v,bB);
},__Gs:function(e){e.addType(v);
e.addAction(I);
var bv=e.getTarget().getSelection()[0];
this.__Go.set({label:bv.getLabel(),icon:bv.getIcon(),width:bv.getBounds().width});
},__Gt:function(e){this.__Gp&&this.__Gp.removeState(w);
this.__Go.setDomPosition(-1000,-1000);
},__Gu:function(e){var a=e.getOriginalTarget();

if(a instanceof qx.ui.form.ListItem){if(a!=this.__Gp){this.__Gp&&this.__Gp.removeState(w);
a.addState(w);
this.__Gp=a;
}}else{this.__Gp&&this.__Gp.removeState(w);
}this.__Go.setDomPosition(e.getDocumentLeft()+15,e.getDocumentTop()+15);
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__ji:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__jj:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__jj[name];
s[t]();
}else{var u=this.__ji[name];
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

